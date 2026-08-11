import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { useCategories, STATUSES, statusBadgeClass, getCategoryLabel, STATUS_LABEL, type AssetCategory, type AssetStatus } from "@/lib/categories";
import { calculateAging } from "@/lib/aging";
import { useMaster } from "@/lib/localMaster";
import { Plus, Search, FileDown, FileUp, Pencil, X } from "lucide-react";
import * as XLSX from "xlsx";
import { toast } from "sonner";

interface AssetSearch {
  category?: AssetCategory;
  status?: AssetStatus;
  location?: string;
  department?: string;
  company?: string;
  q?: string;
}

export const Route = createFileRoute("/_authenticated/assets/")({
  validateSearch: (s: Record<string, unknown>): AssetSearch => ({
    category: (s.category as AssetCategory) || undefined,
    status: (s.status as AssetStatus) || undefined,
    location: (s.location as string) || undefined,
    department: (s.department as string) || undefined,
    company: (s.company as string) || undefined,
    q: (s.q as string) || undefined,
  }),
  component: AssetsPage,
});

function AssetsPage() {
  const search = Route.useSearch();
  const navigate = Route.useNavigate();
  const qc = useQueryClient();
  const [searchInput, setSearchInput] = useState(search.q ?? "");
  const categories = useCategories();

  // Master data from localStorage
  const locationMaster = useMaster("locations");
  const departmentMaster = useMaster("departments");
  const companyMaster = useMaster("companies");

  const { data, isLoading } = useQuery({
    queryKey: ["assets", search],
    queryFn: async () => {
      let q = supabase
        .from("assets")
        .select("*, current_employee:employees(id, name, employee_code, department)")
        .order("created_at", { ascending: false })
        .limit(500);

      if (search.category) q = q.eq("category", search.category as any);
      if (search.status) q = q.eq("status", search.status);
      if (search.location) q = q.eq("location", search.location);
      if (search.company) q = q.eq("company", search.company);

      if (search.q) {
        const t = `%${search.q}%`;
        q = q.or(`asset_tag.ilike.${t},product_name.ilike.${t},serial_number.ilike.${t},brand.ilike.${t},company.ilike.${t},location.ilike.${t}`);
      }

      const { data, error } = await q;
      if (error) throw error;

      let res = data ?? [];
      if (search.department) {
        res = res.filter((a: any) => a.current_employee?.department === search.department);
      }
      return res;
    },
  });

  const exportExcel = () => {
    if (!data?.length) return toast.info("Nothing to export");
    const rows = data.map((a: any) => ({
      "Asset Tag": a.asset_tag,
      Category: getCategoryLabel(a.category),
      "Product Name": a.product_name,
      Brand: a.brand,
      Series: a.series,
      "Serial Number": a.serial_number,
      Status: STATUS_LABEL[a.status as AssetStatus],
      Location: a.location,
      Company: a.company,
      Vendor: a.vendor_name,
      "Purchase Date": a.purchase_date,
      "Purchase Price": a.purchase_price,
      "Warranty End": a.warranty_end,
      "Assigned To": a.current_employee?.name ?? "",
      Department: a.current_employee?.department ?? "",
    }));
    const ws = XLSX.utils.json_to_sheet(rows);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Assets");
    XLSX.writeFile(wb, `assets_${new Date().toISOString().slice(0, 10)}.xlsx`);
  };

  const importExcel = async (file: File) => {
    const buf = await file.arrayBuffer();
    const wb = XLSX.read(buf);
    const ws = wb.Sheets[wb.SheetNames[0]];
    const rows: any[] = XLSX.utils.sheet_to_json(ws);
    if (!rows.length) return toast.error("No rows found");

    const catMap = Object.fromEntries(categories.map((c) => [c.label.toLowerCase(), c.value]));
    const statusMap = Object.fromEntries(STATUSES.map((s) => [s.label.toLowerCase(), s.value]));
    const records = rows.map((r) => ({
      asset_tag: String(r["Asset Tag"] ?? r.asset_tag ?? "").trim(),
      category: catMap[String(r.Category ?? r.category ?? "").toLowerCase()] ?? "other",
      product_name: String(r["Product Name"] ?? r.product_name ?? "Unnamed"),
      brand: r.Brand ?? r.brand ?? null,
      series: r.Series ?? r.series ?? null,
      serial_number: r["Serial Number"] ?? r.serial_number ?? null,
      status: statusMap[String(r.Status ?? r.status ?? "").toLowerCase()] ?? "available",
      location: r.Location ?? r.location ?? null,
      company: r.Company ?? r.company ?? null,
      vendor_name: r.Vendor ?? r.vendor_name ?? null,
      purchase_date: r["Purchase Date"] ?? r.purchase_date ?? null,
      purchase_price: r["Purchase Price"] ?? r.purchase_price ?? null,
      warranty_end: r["Warranty End"] ?? r.warranty_end ?? null,
    })).filter((r) => r.asset_tag);
    if (!records.length) return toast.error("Each row needs an Asset Tag");

    const { error } = await supabase.from("assets").upsert(records as any, { onConflict: "asset_tag" });
    if (error) return toast.error(error.message);
    toast.success(`Imported ${records.length} assets`);
    qc.invalidateQueries({ queryKey: ["assets"] });
  };

  const hasActiveFilters = !!(search.category || search.status || search.location || search.department || search.company || search.q);

  const clearFilters = () => {
    setSearchInput("");
    navigate({ search: {} });
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-2 flex-wrap">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">
            {search.category ? getCategoryLabel(search.category) : "All Assets"}
          </h1>
          <p className="text-sm text-muted-foreground">{data?.length ?? 0} record{data?.length === 1 ? "" : "s"}</p>
        </div>
        <div className="flex gap-2 flex-wrap">
          <Button variant="outline" onClick={exportExcel}><FileDown className="h-4 w-4 mr-2" />Export</Button>
          <label>
            <input type="file" accept=".xlsx,.xls,.csv" className="hidden"
              onChange={(e) => { const f = e.target.files?.[0]; if (f) importExcel(f); e.target.value = ""; }} />
            <Button asChild variant="outline"><span className="cursor-pointer"><FileUp className="h-4 w-4 mr-2" />Import</span></Button>
          </label>
          <Button asChild>
            <Link to="/assets/new" search={search.category ? { category: search.category } : undefined}>
              <Plus className="h-4 w-4 mr-2" />New Asset
            </Link>
          </Button>
        </div>
      </div>

      {/* Comprehensive Multi-Filter Bar: Category, Status, Location, Department, Company */}
      <Card>
        <CardContent className="p-3 flex flex-wrap gap-2 items-center">
          
          {/* Search Input */}
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && navigate({ search: (s: AssetSearch) => ({ ...s, q: searchInput || undefined }) })}
              placeholder="Search tag, name, serial, brand…"
              className="pl-8"
            />
          </div>

          {/* 1. Category Filter */}
          <Select
            value={search.category ?? "all"}
            onValueChange={(v) => navigate({ search: (s: AssetSearch) => ({ ...s, category: v === "all" ? undefined : (v as AssetCategory) }) })}
          >
            <SelectTrigger className="w-[160px]"><SelectValue placeholder="Category" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All categories</SelectItem>
              {categories.map((c) => (
                <SelectItem key={c.value} value={c.value}>{c.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* 2. Status Filter */}
          <Select
            value={search.status ?? "all"}
            onValueChange={(v) => navigate({ search: (s: AssetSearch) => ({ ...s, status: v === "all" ? undefined : (v as AssetStatus) }) })}
          >
            <SelectTrigger className="w-[150px]"><SelectValue placeholder="Status" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All statuses</SelectItem>
              {STATUSES.map((s) => (
                <SelectItem key={s.value} value={s.value}>{s.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* 3. Location Filter */}
          <Select
            value={search.location ?? "all"}
            onValueChange={(v) => navigate({ search: (s: AssetSearch) => ({ ...s, location: v === "all" ? undefined : v }) })}
          >
            <SelectTrigger className="w-[150px]"><SelectValue placeholder="Location" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All locations</SelectItem>
              {locationMaster?.map((loc) => (
                <SelectItem key={loc.name} value={loc.name}>{loc.name}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* 4. Department Filter */}
          <Select
            value={search.department ?? "all"}
            onValueChange={(v) => navigate({ search: (s: AssetSearch) => ({ ...s, department: v === "all" ? undefined : v }) })}
          >
            <SelectTrigger className="w-[160px]"><SelectValue placeholder="Department" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All departments</SelectItem>
              {departmentMaster?.map((dept) => (
                <SelectItem key={dept.name} value={dept.name}>{dept.name}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* 5. Company Filter */}
          <Select
            value={search.company ?? "all"}
            onValueChange={(v) => navigate({ search: (s: AssetSearch) => ({ ...s, company: v === "all" ? undefined : v }) })}
          >
            <SelectTrigger className="w-[150px]"><SelectValue placeholder="Company" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All companies</SelectItem>
              {companyMaster?.map((comp) => (
                <SelectItem key={comp.name} value={comp.name}>{comp.name}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Clear Filters Button */}
          {hasActiveFilters && (
            <Button variant="ghost" size="sm" onClick={clearFilters} className="h-9 px-2 text-muted-foreground hover:text-foreground">
              <X className="h-4 w-4 mr-1" />
              Clear
            </Button>
          )}
        </CardContent>
      </Card>

      {/* Asset Data Table */}
      <Card>
        <CardContent className="p-0 overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-muted/40 text-muted-foreground">
              <tr className="text-left">
                <th className="px-4 py-2.5 font-medium">Asset Tag</th>
                <th className="px-4 py-2.5 font-medium">Category</th>
                <th className="px-4 py-2.5 font-medium">Product</th>
                <th className="px-4 py-2.5 font-medium">Serial</th>
                <th className="px-4 py-2.5 font-medium">Status</th>
                <th className="px-4 py-2.5 font-medium">Assigned To</th>
                <th className="px-4 py-2.5 font-medium">Aging</th>
                <th className="px-4 py-2.5 font-medium">Location</th>
                <th className="px-4 py-2.5 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {isLoading && <tr><td colSpan={9} className="px-4 py-8 text-center text-muted-foreground">Loading…</td></tr>}
              {!isLoading && !data?.length && (
                <tr><td colSpan={9} className="px-4 py-12 text-center text-muted-foreground">
                  No assets match your search filters. {hasActiveFilters && <button onClick={clearFilters} className="text-primary underline font-medium">Clear filters</button>}
                </td></tr>
              )}
              {data?.map((a: any) => (
                <tr key={a.id} className="hover:bg-accent/40">
                  <td className="px-4 py-2.5">
                    <Link to="/assets/$id" params={{ id: a.id }} className="text-primary hover:underline font-medium">{a.asset_tag}</Link>
                  </td>
                  <td className="px-4 py-2.5">{getCategoryLabel(a.category)}</td>
                  <td className="px-4 py-2.5">
                    <div className="font-medium text-foreground">{a.product_name}</div>
                    <div className="text-xs text-muted-foreground">{a.brand} {a.series}</div>
                  </td>
                  <td className="px-4 py-2.5 font-mono text-xs">{a.serial_number ?? "—"}</td>
                  <td className="px-4 py-2.5">
                    <span className={`text-xs px-2 py-0.5 rounded-full border ${statusBadgeClass(a.status)}`}>{STATUS_LABEL[a.status as AssetStatus]}</span>
                  </td>
                  <td className="px-4 py-2.5">
                    <div>{a.current_employee?.name ?? "—"}</div>
                    {a.current_employee?.department && (
                      <div className="text-xs text-muted-foreground">{a.current_employee.department}</div>
                    )}
                  </td>
                  <td className="px-4 py-2.5 text-muted-foreground whitespace-nowrap font-medium text-xs">
                    {calculateAging(a.purchase_date ?? a.created_at)}
                  </td>
                  <td className="px-4 py-2.5 text-muted-foreground">{a.location ?? "—"}</td>
                  <td className="px-4 py-2.5 text-right">
                    <Button asChild variant="ghost" size="sm" className="h-8 px-2">
                      <Link to="/assets/$id" params={{ id: a.id }}>
                        <Pencil className="h-3.5 w-3.5 mr-1" />
                        Edit
                      </Link>
                    </Button>
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
