import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger,
} from "@/components/ui/dialog";
import { Plus, Pencil, Trash2, MapPin, FileDown, FileUp } from "lucide-react";
import * as XLSX from "xlsx";
import { toast } from "sonner";
import { useMaster, addItem, updateItem, deleteItem, upsertByName, type MasterItem } from "@/lib/localMaster";

export const Route = createFileRoute("/_authenticated/location")({
  head: () => ({
    meta: [
      { title: "Location — Bora Multicorp Asset Management" },
      { name: "description", content: "Manage locations in your IT asset inventory." },
    ],
  }),
  component: LocationPage,
});

interface LocationRow extends MasterItem {
  city?: string;
  address?: string;
}

const EMPTY: Omit<LocationRow, "id"> = { name: "", city: "", address: "" };

function LocationPage() {
  const data = useMaster("locations") as LocationRow[];
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<Partial<LocationRow> & { id?: string }>({ ...EMPTY });
  const [search, setSearch] = useState("");

  const filtered = data.filter((l) =>
    l.name.toLowerCase().includes(search.toLowerCase())
  );

  const openNew = () => { setEditing({ ...EMPTY }); setOpen(true); };
  const openEdit = (row: LocationRow) => { setEditing({ ...row }); setOpen(true); };

  const save = () => {
    if (!editing.name?.trim()) return toast.error("Location name is required");
    if (editing.id) {
      updateItem("locations", editing.id, {
        name: editing.name.trim(),
        city: editing.city || undefined,
        address: editing.address || undefined,
      });
      toast.success("Location updated");
    } else {
      addItem("locations", {
        name: editing.name.trim(),
        city: editing.city || undefined,
        address: editing.address || undefined,
      });
      toast.success("Location added");
    }
    setOpen(false);
    setEditing({ ...EMPTY });
  };

  const remove = (id: string, name: string) => {
    if (!confirm(`Delete location "${name}"?`)) return;
    deleteItem("locations", id);
    toast.success("Location deleted");
  };

  const exportExcel = () => {
    const rows = data.length
      ? data.map((l) => ({ "Location Name": l.name, City: l.city ?? "", Address: l.address ?? "" }))
      : [{ "Location Name": "Headquarters", City: "Mumbai", Address: "BKC Commercial Hub" }];
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(rows), "Locations");
    XLSX.writeFile(wb, `locations_${new Date().toISOString().slice(0, 10)}.xlsx`);
  };

  const importExcel = async (file: File) => {
    try {
      const wb = XLSX.read(await file.arrayBuffer());
      const rows: Record<string, unknown>[] = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]!]!);
      const records = rows
        .map((r) => ({
          name: String(r["Location Name"] ?? r["Name"] ?? r["location_name"] ?? r["name"] ?? "").trim(),
          city: (r["City"] ?? r["city"] ?? undefined) as string | undefined,
          address: (r["Address"] ?? r["address"] ?? undefined) as string | undefined,
        }))
        .filter((r) => r.name);
      if (!records.length) return toast.error("No valid records. Make sure file has a 'Location Name' column.");
      const count = upsertByName("locations", records);
      toast.success(`Imported ${count} locations`);
    } catch (err: any) {
      toast.error(err.message ?? "Failed to import locations");
    }
  };

  const set = (k: keyof LocationRow, v: string) => setEditing((p) => ({ ...p, [k]: v }));

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-2 flex-wrap">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Location</h1>
          <p className="text-sm text-muted-foreground">{filtered.length} record{filtered.length === 1 ? "" : "s"}</p>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <Button variant="outline" onClick={exportExcel}><FileDown className="h-4 w-4 mr-2" />Export</Button>
          <label>
            <input type="file" accept=".xlsx,.xls,.csv" className="hidden"
              onChange={(e) => { const f = e.target.files?.[0]; if (f) importExcel(f); e.target.value = ""; }} />
            <Button asChild variant="outline"><span className="cursor-pointer"><FileUp className="h-4 w-4 mr-2" />Import</span></Button>
          </label>
          <Dialog open={open} onOpenChange={(o) => { setOpen(o); if (!o) setEditing({ ...EMPTY }); }}>
            <DialogTrigger asChild>
              <Button onClick={openNew}><Plus className="h-4 w-4 mr-2" />New Location</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader><DialogTitle>{editing.id ? "Edit Location" : "New Location"}</DialogTitle></DialogHeader>
              <div className="grid gap-3 py-2">
                {(["name", "city", "address"] as const).map((field) => (
                  <div key={field} className="space-y-1.5">
                    <Label className="text-xs text-muted-foreground capitalize">{field}{field === "name" ? " *" : ""}</Label>
                    <Input value={(editing[field] as string) ?? ""} onChange={(e) => set(field, e.target.value)} />
                  </div>
                ))}
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
                <Button onClick={save}>{editing.id ? "Update" : "Create"}</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="relative max-w-sm">
        <Input placeholder="Search locations…" value={search} onChange={(e) => setSearch(e.target.value)} className="pl-9" />
        <MapPin className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      </div>

      <Card>
        <CardContent className="p-0 overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-muted/40 text-muted-foreground">
              <tr className="text-left">
                <th className="px-4 py-2.5 font-medium">#</th>
                <th className="px-4 py-2.5 font-medium">Location Name</th>
                <th className="px-4 py-2.5 font-medium">City</th>
                <th className="px-4 py-2.5 font-medium">Address</th>
                <th className="px-4 py-2.5 font-medium w-20">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {!filtered.length && (
                <tr><td colSpan={5} className="px-4 py-12 text-center text-muted-foreground">
                  No locations yet. Click <strong>New Location</strong> to add one or <strong>Import</strong> to upload in bulk.
                </td></tr>
              )}
              {filtered.map((l, i) => (
                <tr key={l.id} className="hover:bg-accent/40">
                  <td className="px-4 py-2.5 text-muted-foreground">{i + 1}</td>
                  <td className="px-4 py-2.5 font-medium">{l.name}</td>
                  <td className="px-4 py-2.5 text-muted-foreground">{l.city ?? "—"}</td>
                  <td className="px-4 py-2.5 text-muted-foreground">{l.address ?? "—"}</td>
                  <td className="px-4 py-2.5">
                    <div className="flex gap-1">
                      <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => openEdit(l)}><Pencil className="h-3.5 w-3.5" /></Button>
                      <Button variant="ghost" size="icon" className="h-7 w-7 text-destructive" onClick={() => remove(l.id, l.name)}><Trash2 className="h-3.5 w-3.5" /></Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}
