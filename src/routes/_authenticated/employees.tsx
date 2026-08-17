import { createFileRoute } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import {
  Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger,
} from "@/components/ui/dialog";
import { Plus, Search, FileDown, FileUp, Pencil } from "lucide-react";
import * as XLSX from "xlsx";
import { toast } from "sonner";
import { logAudit } from "@/lib/audit";
import { useMaster } from "@/lib/localMaster";

export const Route = createFileRoute("/_authenticated/employees")({
  head: () => ({
    meta: [
      { title: "Employees — Bora Multicorp Asset Management" },
      { name: "description", content: "Employee directory for IT asset assignment and handover tracking." },
      { property: "og:title", content: "Employees — Bora Multicorp Asset Management" },
      { property: "og:description", content: "Employee directory for IT asset assignment and handover tracking." },
    ],
  }),
  component: EmployeesPage,
});

interface EmployeeRow {
  id?: string;
  employee_code: string;
  name: string;
  department?: string | null;
  designation?: string | null;
  email?: string | null;
  mobile?: string | null;
  location?: string | null;
}

const EMPTY: EmployeeRow = { employee_code: "", name: "", department: "", designation: "", email: "", mobile: "", location: "" };

function EmployeesPage() {
  const qc = useQueryClient();
  const locationMaster = useMaster("locations");
  const departmentMaster = useMaster("departments");

  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState<EmployeeRow>(EMPTY);
  const [saving, setSaving] = useState(false);

  const { data, isLoading } = useQuery({
    queryKey: ["employees", q],
    queryFn: async () => {
      let query = supabase.from("employees").select("*").order("name").limit(500);
      if (q) {
        const t = `%${q}%`;
        query = query.or(`name.ilike.${t},employee_code.ilike.${t},email.ilike.${t},department.ilike.${t}`);
      }
      const { data, error } = await query;
      if (error) throw error;
      return data ?? [];
    },
  });

  const save = async () => {
    if (!draft.employee_code || !draft.name) return toast.error("Employee code and name are required");
    setSaving(true);
    const payload = { ...draft };
    try {
      const res = draft.id
        ? await supabase.from("employees").update(payload).eq("id", draft.id).select("id").single()
        : await supabase.from("employees").insert(payload).select("id").single();
      setSaving(false);
      if (res.error) {
        toast.error(typeof res.error === "string" ? res.error : (res.error.message || "Failed to save employee"));
        return;
      }
      const savedId = res.data?.id || res.data?._id || draft.id || crypto.randomUUID();
      try {
        await logAudit("employee", draft.id ? "update" : "create", savedId, { name: draft.name });
      } catch (e) {
        console.warn("[Audit warning]", e);
      }
      toast.success(draft.id ? "Employee updated" : "Employee added");
      setOpen(false);
      setDraft(EMPTY);
      qc.invalidateQueries({ queryKey: ["employees"] });
    } catch (err: any) {
      setSaving(false);
      toast.error(err?.message || "Error saving employee");
    }
  };

  const exportExcel = () => {
    if (!data?.length) return toast.info("Nothing to export");
    const rows = data.map((e) => ({
      "Employee Code": e.employee_code, Name: e.name, Department: e.department,
      Designation: e.designation, Email: e.email, Mobile: e.mobile, Location: e.location,
    }));
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(rows), "Employees");
    XLSX.writeFile(wb, `employees_${new Date().toISOString().slice(0, 10)}.xlsx`);
  };

  const importExcel = async (file: File) => {
    const wb = XLSX.read(await file.arrayBuffer());
    const rows: Record<string, unknown>[] = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]!]!);
    const records = rows
      .map((r) => ({
        employee_code: String(r["Employee Code"] ?? r["employee_code"] ?? "").trim(),
        name: String(r["Name"] ?? r["name"] ?? "").trim(),
        department: (r["Department"] ?? r["department"] ?? null) as string | null,
        designation: (r["Designation"] ?? r["designation"] ?? null) as string | null,
        email: (r["Email"] ?? r["email"] ?? null) as string | null,
        mobile: String(r["Mobile"] ?? r["mobile"] ?? "") || null,
        location: (r["Location"] ?? r["location"] ?? null) as string | null,
      }))
      .filter((r) => r.employee_code && r.name);
    if (!records.length) return toast.error("Each row needs an Employee Code and Name");
    const { error } = await supabase.from("employees").upsert(records, { onConflict: "employee_code" });
    if (error) return toast.error(error.message);
    await logAudit("employee", "bulk_import", null, { count: records.length });
    toast.success(`Imported ${records.length} employees`);
    qc.invalidateQueries({ queryKey: ["employees"] });
  };

  const field = (label: string, key: keyof EmployeeRow, type = "text") => (
    <div className="space-y-1.5">
      <Label className="text-xs text-muted-foreground">{label}</Label>
      <Input type={type} value={(draft[key] as string) ?? ""} onChange={(e) => setDraft({ ...draft, [key]: e.target.value })} />
    </div>
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-2 flex-wrap">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Employees</h1>
          <p className="text-sm text-muted-foreground">{data?.length ?? 0} record{data?.length === 1 ? "" : "s"}</p>
        </div>
        <div className="flex gap-2 flex-wrap">
          <Button variant="outline" onClick={exportExcel}><FileDown className="h-4 w-4 mr-2" />Export</Button>
          <label>
            <input type="file" accept=".xlsx,.xls,.csv" className="hidden"
              onChange={(e) => { const f = e.target.files?.[0]; if (f) importExcel(f); e.target.value = ""; }} />
            <Button asChild variant="outline"><span className="cursor-pointer"><FileUp className="h-4 w-4 mr-2" />Import</span></Button>
          </label>
          <Dialog open={open} onOpenChange={(o) => { setOpen(o); if (!o) setDraft(EMPTY); }}>
            <DialogTrigger asChild>
              <Button><Plus className="h-4 w-4 mr-2" />New Employee</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader><DialogTitle>{draft.id ? "Edit employee" : "New employee"}</DialogTitle></DialogHeader>
              <div className="grid sm:grid-cols-2 gap-3 py-1">
                {field("Employee Code *", "employee_code")}
                {field("Full Name *", "name")}
                
                {/* Department Dropdown Selection from Department Master */}
                <div className="space-y-1.5">
                  <Label className="text-xs text-muted-foreground">Department (Master)</Label>
                  <Select value={draft.department ?? ""} onValueChange={(val) => setDraft({ ...draft, department: val })}>
                    <SelectTrigger><SelectValue placeholder="Select Department" /></SelectTrigger>
                    <SelectContent>
                      {departmentMaster.map((d) => (
                        <SelectItem key={d.id} value={d.name}>{d.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {field("Designation", "designation")}
                {field("Email", "email", "email")}
                {field("Mobile", "mobile")}
                
                {/* Location Dropdown Selection from Location Master */}
                <div className="sm:col-span-2 space-y-1.5">
                  <Label className="text-xs text-muted-foreground">Location (Master)</Label>
                  <Select value={draft.location ?? ""} onValueChange={(val) => setDraft({ ...draft, location: val })}>
                    <SelectTrigger><SelectValue placeholder="Select Location from Master" /></SelectTrigger>
                    <SelectContent>
                      {locationMaster.map((loc) => (
                        <SelectItem key={loc.id} value={loc.name}>{loc.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <DialogFooter>
                <Button onClick={save} disabled={saving}>{saving ? "Saving…" : "Save"}</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <Card>
        <CardContent className="p-3">
          <div className="relative">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search by name, code, email, department…" className="pl-8" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-0 overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-muted/40 text-muted-foreground">
              <tr className="text-left">
                <th className="px-4 py-2.5 font-medium">Code</th>
                <th className="px-4 py-2.5 font-medium">Name</th>
                <th className="px-4 py-2.5 font-medium">Department</th>
                <th className="px-4 py-2.5 font-medium">Designation</th>
                <th className="px-4 py-2.5 font-medium">Contact</th>
                <th className="px-4 py-2.5 font-medium">Location</th>
                <th className="px-4 py-2.5 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {isLoading && <tr><td colSpan={7} className="px-4 py-8 text-center text-muted-foreground">Loading…</td></tr>}
              {!isLoading && !data?.length && (
                <tr><td colSpan={7} className="px-4 py-12 text-center text-muted-foreground">No employees yet.</td></tr>
              )}
              {data?.map((e) => (
                <tr key={e.id} className="hover:bg-accent/40">
                  <td className="px-4 py-2.5 font-mono text-xs">{e.employee_code}</td>
                  <td className="px-4 py-2.5 font-medium">{e.name}</td>
                  <td className="px-4 py-2.5">{e.department ?? "—"}</td>
                  <td className="px-4 py-2.5">{e.designation ?? "—"}</td>
                  <td className="px-4 py-2.5 text-muted-foreground">
                    <div>{e.email ?? "—"}</div>
                    <div className="text-xs">{e.mobile ?? ""}</div>
                  </td>
                  <td className="px-4 py-2.5 text-muted-foreground">{e.location ?? "—"}</td>
                  <td className="px-4 py-2.5 text-right">
                    <Button variant="ghost" size="sm" onClick={() => { setDraft(e as EmployeeRow); setOpen(true); }}>
                      <Pencil className="h-3.5 w-3.5 mr-1" />Edit
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
