import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger,
} from "@/components/ui/dialog";
import { Plus, Pencil, Trash2, LayoutGrid, FileDown, FileUp } from "lucide-react";
import * as XLSX from "xlsx";
import { toast } from "sonner";
import { useMaster, addItem, updateItem, deleteItem, upsertByName, type MasterItem } from "@/lib/localMaster";

export const Route = createFileRoute("/_authenticated/department")({
  head: () => ({
    meta: [
      { title: "Department — Bora Multicorp Asset Management" },
      { name: "description", content: "Manage departments in your IT asset inventory." },
    ],
  }),
  component: DepartmentPage,
});

interface DepartmentRow extends MasterItem {
  description?: string;
}

const EMPTY: Omit<DepartmentRow, "id"> = { name: "", description: "" };

function DepartmentPage() {
  const data = useMaster("departments") as DepartmentRow[];
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<Partial<DepartmentRow> & { id?: string }>({ ...EMPTY });
  const [search, setSearch] = useState("");

  const filtered = data.filter((d) =>
    d.name.toLowerCase().includes(search.toLowerCase())
  );

  const openNew = () => { setEditing({ ...EMPTY }); setOpen(true); };
  const openEdit = (row: DepartmentRow) => { setEditing({ ...row }); setOpen(true); };

  const save = () => {
    if (!editing.name?.trim()) return toast.error("Department name is required");
    if (editing.id) {
      updateItem("departments", editing.id, {
        name: editing.name.trim(),
        description: editing.description || undefined,
      });
      toast.success("Department updated");
    } else {
      addItem("departments", {
        name: editing.name.trim(),
        description: editing.description || undefined,
      });
      toast.success("Department added");
    }
    setOpen(false);
    setEditing({ ...EMPTY });
  };

  const remove = (id: string, name: string) => {
    if (!confirm(`Delete department "${name}"?`)) return;
    deleteItem("departments", id);
    toast.success("Department deleted");
  };

  const exportExcel = () => {
    const rows = data.length
      ? data.map((d) => ({ "Department Name": d.name, Description: d.description ?? "" }))
      : [{ "Department Name": "Information Technology", Description: "IT operations & infrastructure" }];
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(rows), "Departments");
    XLSX.writeFile(wb, `departments_${new Date().toISOString().slice(0, 10)}.xlsx`);
  };

  const importExcel = async (file: File) => {
    try {
      const wb = XLSX.read(await file.arrayBuffer());
      const rows: Record<string, unknown>[] = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]!]!);
      const records = rows
        .map((r) => ({
          name: String(r["Department Name"] ?? r["Name"] ?? r["department_name"] ?? r["name"] ?? "").trim(),
          description: (r["Description"] ?? r["description"] ?? undefined) as string | undefined,
        }))
        .filter((r) => r.name);
      if (!records.length) return toast.error("No valid records. Make sure file has a 'Department Name' column.");
      const count = upsertByName("departments", records);
      toast.success(`Imported ${count} departments`);
    } catch (err: any) {
      toast.error(err.message ?? "Failed to import departments");
    }
  };

  const set = (k: keyof DepartmentRow, v: string) => setEditing((p) => ({ ...p, [k]: v }));

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-2 flex-wrap">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Department</h1>
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
              <Button onClick={openNew}><Plus className="h-4 w-4 mr-2" />New Department</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader><DialogTitle>{editing.id ? "Edit Department" : "New Department"}</DialogTitle></DialogHeader>
              <div className="grid gap-3 py-2">
                <div className="space-y-1.5">
                  <Label className="text-xs text-muted-foreground">Name *</Label>
                  <Input value={editing.name ?? ""} onChange={(e) => set("name", e.target.value)} />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs text-muted-foreground">Description</Label>
                  <Input value={editing.description ?? ""} onChange={(e) => set("description", e.target.value)} />
                </div>
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
        <Input placeholder="Search departments…" value={search} onChange={(e) => setSearch(e.target.value)} className="pl-9" />
        <LayoutGrid className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      </div>

      <Card>
        <CardContent className="p-0 overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-muted/40 text-muted-foreground">
              <tr className="text-left">
                <th className="px-4 py-2.5 font-medium">#</th>
                <th className="px-4 py-2.5 font-medium">Department Name</th>
                <th className="px-4 py-2.5 font-medium">Description</th>
                <th className="px-4 py-2.5 font-medium w-20">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {!filtered.length && (
                <tr><td colSpan={4} className="px-4 py-12 text-center text-muted-foreground">
                  No departments yet. Click <strong>New Department</strong> to add one or <strong>Import</strong> to upload in bulk.
                </td></tr>
              )}
              {filtered.map((d, i) => (
                <tr key={d.id} className="hover:bg-accent/40">
                  <td className="px-4 py-2.5 text-muted-foreground">{i + 1}</td>
                  <td className="px-4 py-2.5 font-medium">{d.name}</td>
                  <td className="px-4 py-2.5 text-muted-foreground">{d.description ?? "—"}</td>
                  <td className="px-4 py-2.5">
                    <div className="flex gap-1">
                      <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => openEdit(d)}><Pencil className="h-3.5 w-3.5" /></Button>
                      <Button variant="ghost" size="icon" className="h-7 w-7 text-destructive" onClick={() => remove(d.id, d.name)}><Trash2 className="h-3.5 w-3.5" /></Button>
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
