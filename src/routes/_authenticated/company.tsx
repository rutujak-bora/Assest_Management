import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger,
} from "@/components/ui/dialog";
import { Plus, Pencil, Trash2, Building2, FileDown, FileUp } from "lucide-react";
import * as XLSX from "xlsx";
import { toast } from "sonner";
import { useMaster, addItem, updateItem, deleteItem, upsertByName, type MasterItem } from "@/lib/localMaster";

export const Route = createFileRoute("/_authenticated/company")({
  head: () => ({
    meta: [
      { title: "Company — Bora Multicorp Asset Management" },
      { name: "description", content: "Manage companies in your IT asset inventory." },
    ],
  }),
  component: CompanyPage,
});

interface CompanyRow extends MasterItem {
  address?: string;
  contact?: string;
  email?: string;
}

const EMPTY: Omit<CompanyRow, "id"> = { name: "", address: "", contact: "", email: "" };

function CompanyPage() {
  const data = useMaster("companies") as CompanyRow[];
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<Partial<CompanyRow> & { id?: string }>({ ...EMPTY });
  const [search, setSearch] = useState("");

  const filtered = data.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  const openNew = () => { setEditing({ ...EMPTY }); setOpen(true); };
  const openEdit = (row: CompanyRow) => { setEditing({ ...row }); setOpen(true); };

  const save = () => {
    if (!editing.name?.trim()) return toast.error("Company name is required");
    if (editing.id) {
      updateItem("companies", editing.id, {
        name: editing.name.trim(),
        address: editing.address || undefined,
        contact: editing.contact || undefined,
        email: editing.email || undefined,
      });
      toast.success("Company updated");
    } else {
      addItem("companies", {
        name: editing.name.trim(),
        address: editing.address || undefined,
        contact: editing.contact || undefined,
        email: editing.email || undefined,
      });
      toast.success("Company added");
    }
    setOpen(false);
    setEditing({ ...EMPTY });
  };

  const remove = (id: string, name: string) => {
    if (!confirm(`Delete company "${name}"?`)) return;
    deleteItem("companies", id);
    toast.success("Company deleted");
  };

  const exportExcel = () => {
    const rows = data.length
      ? data.map((c) => ({ Name: c.name, Address: c.address ?? "", Contact: c.contact ?? "", Email: c.email ?? "" }))
      : [{ Name: "Sample Company Ltd", Address: "123 Business Park", Contact: "+91 9876543210", Email: "contact@sample.com" }];
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(rows), "Companies");
    XLSX.writeFile(wb, `companies_${new Date().toISOString().slice(0, 10)}.xlsx`);
  };

  const importExcel = async (file: File) => {
    try {
      const wb = XLSX.read(await file.arrayBuffer());
      const rows: Record<string, unknown>[] = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]!]!);
      const records = rows
        .map((r) => ({
          name: String(r["Name"] ?? r["name"] ?? r["Company Name"] ?? "").trim(),
          address: (r["Address"] ?? r["address"] ?? undefined) as string | undefined,
          contact: (r["Contact"] ?? r["contact"] ?? undefined) as string | undefined,
          email: (r["Email"] ?? r["email"] ?? undefined) as string | undefined,
        }))
        .filter((r) => r.name);
      if (!records.length) return toast.error("No valid records. Make sure file has a 'Name' column.");
      const count = upsertByName("companies", records);
      toast.success(`Imported ${count} companies`);
    } catch (err: any) {
      toast.error(err.message ?? "Failed to import companies");
    }
  };

  const set = (k: keyof CompanyRow, v: string) => setEditing((p) => ({ ...p, [k]: v }));

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-2 flex-wrap">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Company</h1>
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
              <Button onClick={openNew}><Plus className="h-4 w-4 mr-2" />New Company</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader><DialogTitle>{editing.id ? "Edit Company" : "New Company"}</DialogTitle></DialogHeader>
              <div className="grid gap-3 py-2">
                {(["name", "address", "contact", "email"] as const).map((field) => (
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
        <Input placeholder="Search companies…" value={search} onChange={(e) => setSearch(e.target.value)} className="pl-9" />
        <Building2 className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      </div>

      <Card>
        <CardContent className="p-0 overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-muted/40 text-muted-foreground">
              <tr className="text-left">
                <th className="px-4 py-2.5 font-medium">Name</th>
                <th className="px-4 py-2.5 font-medium">Address</th>
                <th className="px-4 py-2.5 font-medium">Contact</th>
                <th className="px-4 py-2.5 font-medium">Email</th>
                <th className="px-4 py-2.5 font-medium w-20">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {!filtered.length && (
                <tr><td colSpan={5} className="px-4 py-12 text-center text-muted-foreground">
                  No companies yet. Click <strong>New Company</strong> to add one or <strong>Import</strong> to upload in bulk.
                </td></tr>
              )}
              {filtered.map((c) => (
                <tr key={c.id} className="hover:bg-accent/40">
                  <td className="px-4 py-2.5 font-medium">{c.name}</td>
                  <td className="px-4 py-2.5 text-muted-foreground">{c.address ?? "—"}</td>
                  <td className="px-4 py-2.5 text-muted-foreground">{c.contact ?? "—"}</td>
                  <td className="px-4 py-2.5 text-muted-foreground">{c.email ?? "—"}</td>
                  <td className="px-4 py-2.5">
                    <div className="flex gap-1">
                      <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => openEdit(c)}><Pencil className="h-3.5 w-3.5" /></Button>
                      <Button variant="ghost" size="icon" className="h-7 w-7 text-destructive" onClick={() => remove(c.id, c.name)}><Trash2 className="h-3.5 w-3.5" /></Button>
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
