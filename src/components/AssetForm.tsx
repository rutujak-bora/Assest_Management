import { useState, useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useCategories, getCategoryLabel, STATUSES, type AssetCategory, type AssetStatus } from "@/lib/categories";
import { calculateAging } from "@/lib/aging";
import { useMaster } from "@/lib/localMaster";
import { Clock, RefreshCw, AlertCircle } from "lucide-react";
import { toast } from "sonner";

export interface AssetFormValues {
  id?: string;
  asset_tag: string;
  category: AssetCategory;
  product_type?: string | null;
  product_name: string;
  brand?: string | null;
  series?: string | null;
  serial_number?: string | null;
  configuration?: string | null;
  location?: string | null;
  status: AssetStatus;
  purchase_from?: string | null;
  purchase_price?: number | null;
  purchase_date?: string | null;
  warranty_start?: string | null;
  warranty_end?: string | null;
  invoice_number?: string | null;
  vendor_name?: string | null;
  company?: string | null;
  remarks?: string | null;
}

export function getCategoryPrefix(cat: string): string {
  const map: Record<string, string> = {
    laptop: "LAP",
    server: "SER",
    desktop: "DES",
    server_desktop: "SDT",
    monitor: "MON",
    keyboard: "KEY",
    mouse: "MOU",
    printer: "PRN",
    rack: "RAC",
    access_point: "AP",
    n_computing: "NCO",
    cctv: "CCT",
    storage_device: "STO",
    ups: "UPS",
    other: "AST",
  };
  if (map[cat]) return map[cat];
  const cleaned = cat.replace(/[^a-zA-Z]/g, "").toUpperCase();
  return cleaned.slice(0, 3) || "AST";
}

export async function generateNextAssetTag(cat: string): Promise<string> {
  const prefix = getCategoryPrefix(cat);
  const { data } = await supabase
    .from("assets")
    .select("asset_tag")
    .ilike("asset_tag", `${prefix}-%`);

  let maxNum = 0;
  if (data) {
    for (const item of data) {
      const match = item.asset_tag.match(new RegExp(`^${prefix}-(\\d+)`, "i"));
      if (match) {
        const num = parseInt(match[1], 10);
        if (num > maxNum) maxNum = num;
      }
    }
  }
  const nextNum = (maxNum + 1).toString().padStart(3, "0");
  return `${prefix}-${nextNum}`;
}

function F({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <Label className="text-xs text-muted-foreground">{label}</Label>
      {children}
    </div>
  );
}

export function AssetForm({
  initial,
  lockCategory,
  onSaved,
}: {
  initial?: Partial<AssetFormValues>;
  lockCategory?: boolean;
  onSaved: (id: string) => void;
}) {
  const qc = useQueryClient();
  const categories = useCategories();
  const [saving, setSaving] = useState(false);
  const [generatingTag, setGeneratingTag] = useState(false);
  const [serialError, setSerialError] = useState<string | null>(null);

  const [v, setV] = useState<AssetFormValues>({
    asset_tag: initial?.asset_tag ?? "",
    category: initial?.category ?? "laptop",
    product_name: initial?.product_name ?? "",
    status: initial?.status ?? "available",
    ...initial,
  } as AssetFormValues);

  const set = <K extends keyof AssetFormValues>(k: K, val: AssetFormValues[K]) => setV((p) => ({ ...p, [k]: val }));

  // Master data from localStorage
  const locationMaster = useMaster("locations");
  const companyMaster = useMaster("companies");

  // Auto-generate Asset Tag when creating a new asset or changing category
  const autoGenerateTag = async (cat: string) => {
    if (v.id || initial?.asset_tag) return; // Keep existing tag when editing
    setGeneratingTag(true);
    try {
      const newTag = await generateNextAssetTag(cat);
      setV((p) => ({ ...p, asset_tag: newTag }));
    } catch (e) {
      console.error("Tag generation failed", e);
    } finally {
      setGeneratingTag(false);
    }
  };

  useEffect(() => {
    if (!v.id && !initial?.asset_tag) {
      autoGenerateTag(v.category);
    }
  }, [v.category]);

  // Serial Number unique validation
  const validateSerialNumber = async (serial?: string | null) => {
    if (!serial || !serial.trim()) {
      setSerialError(null);
      return true;
    }
    const trimmed = serial.trim();
    let q = supabase.from("assets").select("id, asset_tag").eq("serial_number", trimmed);
    if (v.id) q = q.neq("id", v.id);

    const { data } = await q;
    if (data && data.length > 0) {
      const err = `Serial number "${trimmed}" is already assigned to asset (${data[0].asset_tag})`;
      setSerialError(err);
      return false;
    }
    setSerialError(null);
    return true;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!v.asset_tag || !v.product_name) {
      return toast.error("Category, Asset Tag, and Product Name are required");
    }

    // Validate Serial Number uniqueness
    const serialValid = await validateSerialNumber(v.serial_number);
    if (!serialValid) {
      return toast.error(serialError ?? "Serial number must be unique");
    }

    setSaving(true);
    const payload = { ...v, purchase_price: v.purchase_price ? Number(v.purchase_price) : null };
    let res;
    if (v.id) res = await supabase.from("assets").update(payload as any).eq("id", v.id).select("id").single();
    else res = await supabase.from("assets").insert(payload as any).select("id").single();
    setSaving(false);

    if (res.error) {
      if (res.error.message.includes("serial_number")) {
        setSerialError("Serial number already exists");
        return toast.error("Serial number already exists");
      }
      return toast.error(res.error.message);
    }

    toast.success(v.id ? "Asset updated" : "Asset created");
    qc.invalidateQueries({ queryKey: ["assets"] });
    onSaved(res.data!.id);
  };

  return (
    <Card>
      <CardContent className="p-6">
        <form onSubmit={onSubmit} className="grid md:grid-cols-2 gap-4">
          
          {/* 1. Category (First Field) */}
          <F label="Category *">
            {lockCategory ? (
              <div className="h-9 px-3 py-1.5 rounded-md border bg-muted/40 text-sm font-medium flex items-center text-foreground cursor-not-allowed select-none">
                {getCategoryLabel(v.category)}
              </div>
            ) : (
              <Select value={v.category} onValueChange={(x) => set("category", x as AssetCategory)}>
                <SelectTrigger><SelectValue placeholder="Select Category" /></SelectTrigger>
                <SelectContent>
                  {categories.map((c) => (
                    <SelectItem key={c.value} value={c.value}>{c.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          </F>

          {/* 2. Asset ID / Asset Tag (Auto-generated Unique Number) */}
          <F label="Asset Tag / Asset ID *">
            <div className="relative">
              <Input
                value={v.asset_tag}
                onChange={(e) => set("asset_tag", e.target.value)}
                placeholder="e.g. LAP-001"
                required
              />
              {!v.id && (
                <button
                  type="button"
                  onClick={() => autoGenerateTag(v.category)}
                  title="Regenerate unique Asset ID"
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground p-1"
                >
                  <RefreshCw className={`h-3.5 w-3.5 ${generatingTag ? "animate-spin" : ""}`} />
                </button>
              )}
            </div>
          </F>

          {/* 3. Serial Number (Unique Validation) */}
          <F label="Serial Number">
            <div className="space-y-1">
              <Input
                value={v.serial_number ?? ""}
                onChange={(e) => {
                  set("serial_number", e.target.value);
                  validateSerialNumber(e.target.value);
                }}
                onBlur={(e) => validateSerialNumber(e.target.value)}
                placeholder="Unique serial number"
                className={serialError ? "border-destructive focus-visible:ring-destructive" : ""}
              />
              {serialError && (
                <div className="flex items-center gap-1 text-xs text-destructive mt-0.5">
                  <AlertCircle className="h-3 w-3 shrink-0" />
                  <span>{serialError}</span>
                </div>
              )}
            </div>
          </F>

          {/* 4. Product Name */}
          <F label="Product Name *">
            <Input value={v.product_name} onChange={(e) => set("product_name", e.target.value)} required />
          </F>

          {/* 5. Product Type */}
          <F label="Product Type">
            <Input value={v.product_type ?? ""} onChange={(e) => set("product_type", e.target.value)} placeholder="e.g. Laptop, All-in-One..." />
          </F>

          {/* 6. Brand / Company */}
          <F label="Brand / Company">
            <Input value={v.brand ?? ""} onChange={(e) => set("brand", e.target.value)} placeholder="e.g. Dell, HP, Lenovo..." />
          </F>

          {/* 7. Series */}
          <F label="Series">
            <Input value={v.series ?? ""} onChange={(e) => set("series", e.target.value)} placeholder="e.g. Latitude, ThinkPad..." />
          </F>

          {/* 8. Configuration */}
          <div className="md:col-span-2">
            <F label="Configuration">
              <Textarea rows={2} value={v.configuration ?? ""} onChange={(e) => set("configuration", e.target.value)} placeholder="CPU, RAM, Storage, GPU specs..." />
            </F>
          </div>

          {/* 9. Location (Dropdown Selection from Location Master) */}
          <F label="Location">
            <Select value={v.location ?? ""} onValueChange={(val) => set("location", val)}>
              <SelectTrigger><SelectValue placeholder="Select Location from master" /></SelectTrigger>
              <SelectContent>
                {locationMaster?.map((loc) => (
                  <SelectItem key={loc.name} value={loc.name}>{loc.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </F>

          {/* 10. Company (Dropdown Selection from Company Master) */}
          <F label="Company">
            <Select value={v.company ?? ""} onValueChange={(val) => set("company", val)}>
              <SelectTrigger><SelectValue placeholder="Select Company from master" /></SelectTrigger>
              <SelectContent>
                {companyMaster?.map((comp) => (
                  <SelectItem key={comp.name} value={comp.name}>{comp.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </F>

          {/* 11. Purchase From */}
          <F label="Purchase From">
            <Input value={v.purchase_from ?? ""} onChange={(e) => set("purchase_from", e.target.value)} placeholder="Vendor / Store name" />
          </F>

          {/* 12. Invoice Number */}
          <F label="Invoice Number">
            <Input value={v.invoice_number ?? ""} onChange={(e) => set("invoice_number", e.target.value)} />
          </F>

          {/* 13. Price */}
          <F label="Price">
            <Input type="number" step="0.01" value={v.purchase_price ?? ""} onChange={(e) => set("purchase_price", e.target.value === "" ? null : Number(e.target.value))} />
          </F>

          {/* 14. Purchase Date */}
          <F label="Purchase Date">
            <div className="space-y-1">
              <Input type="date" value={v.purchase_date ?? ""} onChange={(e) => set("purchase_date", e.target.value || null)} />
              {v.purchase_date && (
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium pt-0.5">
                  <Clock className="h-3.5 w-3.5 text-primary" />
                  <span>Asset Age: <strong className="text-foreground">{calculateAging(v.purchase_date)}</strong></span>
                </div>
              )}
            </div>
          </F>

          {/* 15. Warranty Start */}
          <F label="Warranty Start">
            <Input type="date" value={v.warranty_start ?? ""} onChange={(e) => set("warranty_start", e.target.value || null)} />
          </F>

          {/* 16. Warranty End */}
          <F label="Warranty End">
            <Input type="date" value={v.warranty_end ?? ""} onChange={(e) => set("warranty_end", e.target.value || null)} />
          </F>

          {/* Status */}
          <F label="Status">
            <Select value={v.status} onValueChange={(x) => set("status", x as AssetStatus)}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                {STATUSES.map((s) => (
                  <SelectItem key={s.value} value={s.value}>{s.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </F>

          {/* Submit Action */}
          <div className="md:col-span-2 flex justify-end gap-2 pt-2 border-t">
            <Button type="submit" disabled={saving || !!serialError}>
              {saving ? "Saving…" : v.id ? "Update Asset" : "Create Asset"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
