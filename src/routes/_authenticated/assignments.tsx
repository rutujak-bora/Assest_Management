import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Plus, FileDown, Undo2, Search, Pencil, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { generateHandoverPDF } from "@/lib/handover-pdf";
import { logAudit } from "@/lib/audit";
import { useCategories, getCategoryLabel, type AssetCategory } from "@/lib/categories";
import { useMaster } from "@/lib/localMaster";

export const Route = createFileRoute("/_authenticated/assignments")({
  head: () => ({
    meta: [
      { title: "Assignments — Bora Multicorp Asset Management" },
      { name: "description", content: "Issue assets to employees, generate handover letters and record returns." },
      { property: "og:title", content: "Assignments — Bora Multicorp Asset Management" },
      { property: "og:description", content: "Issue assets to employees, generate handover letters and record returns." },
    ],
  }),
  component: AssignmentsPage,
});

function AssignmentsPage() {
  const qc = useQueryClient();
  const categories = useCategories();
  const departmentMaster = useMaster("departments");
  const locationMaster = useMaster("locations");

  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");

  const [employeeId, setEmployeeId] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [assetId, setAssetId] = useState("");
  const [department, setDepartment] = useState("");
  const [location, setLocation] = useState("");
  const [purchaseDate, setPurchaseDate] = useState("");
  const [approvedBy, setApprovedBy] = useState("RKN");
  const [oldAssigneeId, setOldAssigneeId] = useState("none");
  const [accessories, setAccessories] = useState("");
  const [remarks, setRemarks] = useState("");
  const [saving, setSaving] = useState(false);

  // Edit Assignment State
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [editingAssignment, setEditingAssignment] = useState<any>(null);
  const [editDepartment, setEditDepartment] = useState("");
  const [editLocation, setEditLocation] = useState("");
  const [editPurchaseDate, setEditPurchaseDate] = useState("");
  const [editApprovedBy, setEditApprovedBy] = useState("RKN");
  const [editOldAssigneeId, setEditOldAssigneeId] = useState("none");
  const [editAccessories, setEditAccessories] = useState("");
  const [editRemarks, setEditRemarks] = useState("");

  // Query all active and historical assignments
  const { data: assignments, isLoading } = useQuery({
    queryKey: ["assignments"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("asset_assignments")
        .select("*, asset:assets(id, asset_tag, product_name, brand, series, serial_number, category, configuration, purchase_date, warranty_end, purchase_price, vendor_name, invoice_number, company), employee:employees(id, name, employee_code, department, designation, location)")
        .order("assigned_at", { ascending: false })
        .limit(500);
      if (error) throw error;
      return data ?? [];
    },
  });

  // Query available assets with complete product details
  const { data: availableAssets } = useQuery({
    queryKey: ["assets", "available"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("assets")
        .select("id, asset_tag, product_name, brand, series, serial_number, category, configuration, purchase_date, warranty_end, purchase_price, vendor_name, invoice_number, company")
        .eq("status", "available")
        .order("asset_tag")
        .limit(1000);
      if (error) throw error;
      return data ?? [];
    },
  });

  // Query past asset assignments for the selected employee (to exclude assets previously assigned to this employee)
  const { data: employeePastAssetIds } = useQuery({
    queryKey: ["employee-past-assets", employeeId],
    enabled: !!employeeId,
    queryFn: async () => {
      const { data, error } = await supabase
        .from("asset_assignments")
        .select("asset_id")
        .eq("employee_id", employeeId);
      if (error) return [];
      return (data ?? []).map((a) => a.asset_id);
    },
  });

  // Query all employees for assignment and old assignment selection
  const { data: employees } = useQuery({
    queryKey: ["employees", "all"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("employees")
        .select("id, name, employee_code, department, designation, location")
        .order("name")
        .limit(500);
      if (error) throw error;
      return data ?? [];
    },
  });

  const pastAssetSet = new Set(employeePastAssetIds ?? []);

  // Filter available assets based on selected category and excluding previously assigned assets for this employee
  const filteredAvailableAssets = (availableAssets ?? []).filter((a) => {
    if (selectedCategory !== "all" && a.category !== selectedCategory) {
      return false;
    }
    if (employeeId && pastAssetSet.has(a.id)) {
      return false; // Exclude assets previously assigned to this employee
    }
    return true;
  });

  const selectedAsset = availableAssets?.find((a) => a.id === assetId);
  const selectedEmployee = employees?.find((e) => e.id === employeeId);

  // Auto-populate department, location, purchaseDate when employee/asset is selected
  useEffect(() => {
    if (selectedEmployee) {
      if (selectedEmployee.department) setDepartment(selectedEmployee.department);
      if (selectedEmployee.location) setLocation(selectedEmployee.location);
    }
  }, [employeeId]);

  useEffect(() => {
    if (selectedAsset?.purchase_date) {
      setPurchaseDate(selectedAsset.purchase_date);
    }
  }, [assetId]);

  const reset = () => {
    setAssetId("");
    setEmployeeId("");
    setSelectedCategory("all");
    setDepartment("");
    setLocation("");
    setPurchaseDate("");
    setApprovedBy("RKN");
    setOldAssigneeId("none");
    setAccessories("");
    setRemarks("");
  };

  const assign = async () => {
    if (!assetId || !employeeId) return toast.error("Please select an employee and an asset by Serial Number");
    setSaving(true);
    const { data: user } = await supabase.auth.getUser();
    const oldEmployeeObj = oldAssigneeId && oldAssigneeId !== "none" ? employees?.find((e) => e.id === oldAssigneeId) : null;
    const oldAssignText = oldEmployeeObj ? `${oldEmployeeObj.name} (${oldEmployeeObj.employee_code})` : null;

    // Encode metadata fields cleanly in remarks string
    const metaTags = [];
    if (oldAssignText) metaTags.push(`[Old assign: ${oldAssignText}]`);
    if (department) metaTags.push(`[Dept: ${department}]`);
    if (location) metaTags.push(`[Loc: ${location}]`);
    if (purchaseDate) metaTags.push(`[PDate: ${purchaseDate}]`);
    if (approvedBy) metaTags.push(`[ApprovedBy: ${approvedBy}]`);

    let finalRemarks = remarks ? remarks.trim() : "";
    if (metaTags.length > 0) {
      finalRemarks = `${metaTags.join(" ")} ${finalRemarks}`.trim();
    }

    const payload = {
      asset_id: assetId,
      employee_id: employeeId,
      accessories: accessories || null,
      remarks: finalRemarks || null,
      created_by: user.user?.id ?? null,
    };
    const { data: row, error } = await supabase.from("asset_assignments").insert(payload).select("id").single();
    if (error) { setSaving(false); return toast.error(error.message); }
    const { error: upErr } = await supabase.from("assets").update({ status: "assigned", current_employee_id: employeeId }).eq("id", assetId);
    setSaving(false);
    if (upErr) return toast.error(upErr.message);

    await logAudit("assignment", "create", row.id, { assetId, employeeId });
    toast.success("Asset assigned successfully");
    setOpen(false);
    reset();
    qc.invalidateQueries();
  };

  const markReturned = async (a: { id: string; asset_id: string }) => {
    const { error } = await supabase.from("asset_assignments").update({ status: "returned", returned_at: new Date().toISOString() }).eq("id", a.id);
    if (error) return toast.error(error.message);
    await supabase.from("assets").update({ status: "available", current_employee_id: null }).eq("id", a.asset_id);
    await logAudit("assignment", "return", a.id, {});
    toast.success("Marked as returned");
    qc.invalidateQueries();
  };

  const openEditAssignment = (a: any) => {
    setEditingAssignment(a);

    let existingOldId = "none";
    let existingDept = a.employee?.department ?? "";
    let existingLoc = a.employee?.location ?? "";
    let existingPDate = a.asset?.purchase_date ?? "";
    let existingApprovedBy = "RKN";

    if (a.remarks) {
      const oldMatch = a.remarks.match(/\[Old assign:\s*([^\(]+)\(([^\)]+)\)\]/);
      if (oldMatch) {
        const code = oldMatch[2].trim();
        const emp = employees?.find((e) => e.employee_code === code);
        if (emp) existingOldId = emp.id;
      }
      const deptMatch = a.remarks.match(/\[Dept:\s*([^\]]+)\]/);
      if (deptMatch) existingDept = deptMatch[1];

      const locMatch = a.remarks.match(/\[Loc:\s*([^\]]+)\]/);
      if (locMatch) existingLoc = locMatch[1];

      const pdateMatch = a.remarks.match(/\[PDate:\s*([^\]]+)\]/);
      if (pdateMatch) existingPDate = pdateMatch[1];

      const appMatch = a.remarks.match(/\[ApprovedBy:\s*([^\]]+)\]/);
      if (appMatch) existingApprovedBy = appMatch[1];
    }

    setEditOldAssigneeId(existingOldId);
    setEditDepartment(existingDept);
    setEditLocation(existingLoc);
    setEditPurchaseDate(existingPDate);
    setEditApprovedBy(existingApprovedBy);
    setEditAccessories(a.accessories ?? "");

    // Strip meta tags from editRemarks input display
    const userRemarks = (a.remarks || "")
      .replace(/\[(Old assign|Dept|Loc|PDate|ApprovedBy):\s*[^\]]+\]\s*/g, "")
      .trim();
    setEditRemarks(userRemarks);

    setEditDialogOpen(true);
  };

  const saveEditedAssignment = async () => {
    if (!editingAssignment) return;
    setSaving(true);

    const oldEmployeeObj = editOldAssigneeId && editOldAssigneeId !== "none" ? employees?.find((e) => e.id === editOldAssigneeId) : null;
    const oldAssignText = oldEmployeeObj ? `${oldEmployeeObj.name} (${oldEmployeeObj.employee_code})` : null;

    const metaTags = [];
    if (oldAssignText) metaTags.push(`[Old assign: ${oldAssignText}]`);
    if (editDepartment) metaTags.push(`[Dept: ${editDepartment}]`);
    if (editLocation) metaTags.push(`[Loc: ${editLocation}]`);
    if (editPurchaseDate) metaTags.push(`[PDate: ${editPurchaseDate}]`);
    if (editApprovedBy) metaTags.push(`[ApprovedBy: ${editApprovedBy}]`);

    let finalRemarks = editRemarks ? editRemarks.trim() : "";
    if (metaTags.length > 0) {
      finalRemarks = `${metaTags.join(" ")} ${finalRemarks}`.trim();
    }

    const { error } = await supabase
      .from("asset_assignments")
      .update({
        accessories: editAccessories || null,
        remarks: finalRemarks || null,
      })
      .eq("id", editingAssignment.id);
    setSaving(false);
    if (error) return toast.error(error.message);
    toast.success("Assignment updated");
    setEditDialogOpen(false);
    qc.invalidateQueries();
  };

  const downloadPdf = (a: Record<string, any>) => {
    if (!a["asset"] || !a["employee"]) return toast.error("Missing asset or employee data");

    let customDept = a["employee"].department;
    let customLoc = a["employee"].location;
    let customPurchaseDate = a["asset"].purchase_date;
    let customApprovedBy = "RKN";

    if (a["remarks"]) {
      const deptMatch = a["remarks"].match(/\[Dept:\s*([^\]]+)\]/);
      if (deptMatch) customDept = deptMatch[1];

      const locMatch = a["remarks"].match(/\[Loc:\s*([^\]]+)\]/);
      if (locMatch) customLoc = locMatch[1];

      const pdateMatch = a["remarks"].match(/\[PDate:\s*([^\]]+)\]/);
      if (pdateMatch) customPurchaseDate = pdateMatch[1];

      const appMatch = a["remarks"].match(/\[ApprovedBy:\s*([^\]]+)\]/);
      if (appMatch) customApprovedBy = appMatch[1];
    }

    // Format purchase date if in YYYY-MM-DD format
    let formattedPDate = customPurchaseDate;
    if (customPurchaseDate && /^\d{4}-\d{2}-\d{2}$/.test(customPurchaseDate)) {
      const [y, m, d] = customPurchaseDate.split("-");
      const dt = new Date(Number(y), Number(m) - 1, Number(d));
      formattedPDate = dt.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
    }

    const { blob, fileName } = generateHandoverPDF({
      companyName: "Bora Multicorp Asset Management",
      date: new Date(a["assigned_at"]).toLocaleDateString("en-IN", { day: "2-digit", month: "2-digit", year: "numeric" }).replace(/\//g, "."),
      employee: {
        name: a["employee"].name, // Employee Full Name (Name and Surname)
        code: a["employee"].employee_code,
        department: customDept,
        designation: a["employee"].designation,
        location: customLoc,
      },
      asset: {
        category: a["asset"].category as AssetCategory,
        product_name: a["asset"].product_name,
        brand: a["asset"].brand,
        series: a["asset"].series,
        serial_number: a["asset"].serial_number,
        asset_tag: a["asset"].asset_tag,
        purchase_date: formattedPDate || a["asset"].purchase_date,
        warranty_end: a["asset"].warranty_end,
        configuration: a["asset"].configuration,
        purchase_price: a["asset"].purchase_price,
        vendor_name: a["asset"].vendor_name,
        invoice_number: a["asset"].invoice_number,
        company: a["asset"].company,
      },
      accessories: a["accessories"] ?? undefined,
      approved_by: customApprovedBy,
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    link.click();
    URL.revokeObjectURL(url);
  };

  const filtered = (assignments ?? []).filter((a: any) => {
    if (!q) return true;
    const t = q.toLowerCase();
    return [a.asset?.asset_tag, a.asset?.product_name, a.asset?.serial_number, a.employee?.name, a.employee?.employee_code]
      .some((v: string | undefined) => v?.toLowerCase().includes(t));
  });

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-2 flex-wrap">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Assignments</h1>
          <p className="text-sm text-muted-foreground">{filtered.length} record{filtered.length === 1 ? "" : "s"}</p>
        </div>
        <Dialog open={open} onOpenChange={(o) => { setOpen(o); if (!o) reset(); }}>
          <DialogTrigger asChild><Button><Plus className="h-4 w-4 mr-2" />Assign Asset</Button></DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader><DialogTitle>Assign asset to employee</DialogTitle></DialogHeader>
            <div className="space-y-3 py-1">
              
              {/* 1. Select Employee First */}
              <div className="space-y-1.5">
                <Label className="text-xs text-muted-foreground">Select Employee *</Label>
                <Select value={employeeId} onValueChange={(val) => { setEmployeeId(val); setAssetId(""); }}>
                  <SelectTrigger><SelectValue placeholder="Choose employee for assignment" /></SelectTrigger>
                  <SelectContent>
                    {employees?.map((e) => (
                      <SelectItem key={e.id} value={e.id}>{e.name} ({e.employee_code})</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {employeeId && (
                  <p className="text-[11px] text-muted-foreground">
                    Only showing serial numbers not previously assigned to this employee.
                  </p>
                )}
              </div>

              {/* 2. Category Filter */}
              <div className="space-y-1.5">
                <Label className="text-xs text-muted-foreground">Category Filter</Label>
                <Select value={selectedCategory} onValueChange={(cat) => { setSelectedCategory(cat); setAssetId(""); }}>
                  <SelectTrigger><SelectValue placeholder="All Categories" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All categories</SelectItem>
                    {categories.map((c) => (
                      <SelectItem key={c.value} value={c.value}>{c.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* 3. Serial Number / Asset Selection */}
              <div className="space-y-1.5">
                <Label className="text-xs text-muted-foreground">Select Serial Number / Asset *</Label>
                <Select value={assetId} onValueChange={setAssetId} disabled={!filteredAvailableAssets.length}>
                  <SelectTrigger>
                    <SelectValue placeholder={filteredAvailableAssets.length ? "Choose Serial Number" : "No available assets for selection"} />
                  </SelectTrigger>
                  <SelectContent>
                    {filteredAvailableAssets.map((a) => (
                      <SelectItem key={a.id} value={a.id}>
                        {a.serial_number ? `SN: ${a.serial_number} (${a.asset_tag} — ${a.product_name})` : `${a.asset_tag} — ${a.product_name}`}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Product Info Preview Card */}
              {selectedAsset && (
                <div className="rounded-md border bg-muted/40 p-3 space-y-1.5 text-xs">
                  <div className="flex items-center gap-1.5 font-semibold text-primary">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    <span>Product Info Preview</span>
                  </div>
                  <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-muted-foreground">
                    <div>Asset Tag: <strong className="text-foreground">{selectedAsset.asset_tag}</strong></div>
                    <div>Category: <strong className="text-foreground">{getCategoryLabel(selectedAsset.category)}</strong></div>
                    <div>Serial Number: <strong className="text-foreground font-mono">{selectedAsset.serial_number ?? "—"}</strong></div>
                    <div>Product Name: <strong className="text-foreground">{selectedAsset.product_name}</strong></div>
                    {selectedAsset.brand && <div>Brand / Series: <strong className="text-foreground">{selectedAsset.brand} {selectedAsset.series ?? ""}</strong></div>}
                  </div>
                </div>
              )}

              {/* 4. Department Dropdown (Master) */}
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <Label className="text-xs text-muted-foreground">Department (Master)</Label>
                  <Select value={department} onValueChange={setDepartment}>
                    <SelectTrigger><SelectValue placeholder="Select Department" /></SelectTrigger>
                    <SelectContent>
                      {departmentMaster.map((d) => (
                        <SelectItem key={d.id} value={d.name}>{d.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* 5. Location Dropdown (Master) */}
                <div className="space-y-1.5">
                  <Label className="text-xs text-muted-foreground">Location (Master)</Label>
                  <Select value={location} onValueChange={setLocation}>
                    <SelectTrigger><SelectValue placeholder="Select Location" /></SelectTrigger>
                    <SelectContent>
                      {locationMaster.map((l) => (
                        <SelectItem key={l.id} value={l.name}>{l.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {/* 6. Purchase Date */}
                <div className="space-y-1.5">
                  <Label className="text-xs text-muted-foreground">Purchase Date</Label>
                  <Input type="date" value={purchaseDate} onChange={(e) => setPurchaseDate(e.target.value)} />
                </div>

                {/* 7. Approved By (Default RKN) */}
                <div className="space-y-1.5">
                  <Label className="text-xs text-muted-foreground">Approved By</Label>
                  <Input value={approvedBy} onChange={(e) => setApprovedBy(e.target.value)} placeholder="Default RKN" />
                </div>
              </div>

              {/* 8. Old assign (Previous Employee) */}
              <div className="space-y-1.5">
                <Label className="text-xs text-muted-foreground">Old assign (Previous Employee)</Label>
                <Select value={oldAssigneeId || "none"} onValueChange={setOldAssigneeId}>
                  <SelectTrigger><SelectValue placeholder="None / Unassigned" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">None / Unassigned</SelectItem>
                    {employees?.map((e) => (
                      <SelectItem key={e.id} value={e.id}>{e.name} ({e.employee_code})</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* 9. Accessories */}
              <div className="space-y-1.5">
                <Label className="text-xs text-muted-foreground">Accessories</Label>
                <Input value={accessories} onChange={(e) => setAccessories(e.target.value)} placeholder="Charger, bag, mouse…" />
              </div>

              {/* 10. Remarks */}
              <div className="space-y-1.5">
                <Label className="text-xs text-muted-foreground">Remarks</Label>
                <Textarea rows={2} value={remarks} onChange={(e) => setRemarks(e.target.value)} />
              </div>
            </div>
            <DialogFooter>
              <Button onClick={assign} disabled={saving || !assetId || !employeeId}>{saving ? "Assigning…" : "Assign Asset"}</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardContent className="p-3">
          <div className="relative">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search by asset tag, serial number, product or employee…" className="pl-8" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-0 overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-muted/40 text-muted-foreground">
              <tr className="text-left">
                <th className="px-4 py-2.5 font-medium">Asset / Serial</th>
                <th className="px-4 py-2.5 font-medium">Employee</th>
                <th className="px-4 py-2.5 font-medium">Assigned</th>
                <th className="px-4 py-2.5 font-medium">Old Assign</th>
                <th className="px-4 py-2.5 font-medium">Status</th>
                <th className="px-4 py-2.5 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {isLoading && <tr><td colSpan={6} className="px-4 py-8 text-center text-muted-foreground">Loading…</td></tr>}
              {!isLoading && !filtered.length && (
                <tr><td colSpan={6} className="px-4 py-12 text-center text-muted-foreground">No assignments match your search.</td></tr>
              )}
              {filtered.map((a: any) => (
                <tr key={a.id} className="hover:bg-accent/40">
                  <td className="px-4 py-2.5">
                    {a.asset ? (
                      <Link to="/assets/$id" params={{ id: a.asset.id }} className="text-primary hover:underline font-medium">{a.asset.asset_tag}</Link>
                    ) : "—"}
                    <div className="font-medium text-foreground">{a.asset?.product_name}</div>
                    {a.asset?.serial_number && (
                      <div className="text-xs font-mono text-muted-foreground">SN: {a.asset.serial_number}</div>
                    )}
                  </td>
                  <td className="px-4 py-2.5">
                    <div className="font-medium">{a.employee?.name}</div>
                    <div className="text-xs text-muted-foreground">{a.employee?.employee_code}</div>
                  </td>
                  <td className="px-4 py-2.5 text-muted-foreground">{new Date(a.assigned_at).toLocaleDateString()}</td>
                  <td className="px-4 py-2.5 text-muted-foreground">
                    {(() => {
                      if (a.remarks?.includes("[Old assign:")) {
                        const match = a.remarks.match(/\[Old assign:\s*([^\]]+)\]/);
                        if (match) return match[1];
                      }
                      return "—";
                    })()}
                  </td>
                  <td className="px-4 py-2.5">
                    <span className={`text-xs px-2 py-0.5 rounded-full border ${a.status === "active" ? "bg-primary/15 text-primary border-primary/20" : "bg-muted text-muted-foreground border-border"}`}>
                      {a.status}
                    </span>
                  </td>
                  <td className="px-4 py-2.5 text-right whitespace-nowrap">
                    <Button variant="ghost" size="sm" onClick={() => openEditAssignment(a)} title="Edit Assignment">
                      <Pencil className="h-3.5 w-3.5 mr-1" />Edit
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => downloadPdf(a)}><FileDown className="h-3.5 w-3.5 mr-1" />PDF</Button>
                    {a.status === "active" && (
                      <Button variant="ghost" size="sm" onClick={() => markReturned(a)}><Undo2 className="h-3.5 w-3.5 mr-1" />Return</Button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>

      {/* Edit Assignment Dialog */}
      <Dialog open={editDialogOpen} onOpenChange={setEditDialogOpen}>
        <DialogContent className="sm:max-w-[480px]">
          <DialogHeader>
            <DialogTitle>Edit Assignment Details</DialogTitle>
          </DialogHeader>
          {editingAssignment && (
            <div className="space-y-3">
              <div className="text-xs text-muted-foreground">
                Editing assignment for <strong>{editingAssignment.asset?.asset_tag}</strong> assigned to <strong>{editingAssignment.employee?.name}</strong>.
              </div>

              <div className="grid grid-cols-2 gap-3">
                {/* Department Dropdown */}
                <div className="space-y-1.5">
                  <Label className="text-xs text-muted-foreground">Department (Master)</Label>
                  <Select value={editDepartment} onValueChange={setEditDepartment}>
                    <SelectTrigger><SelectValue placeholder="Select Department" /></SelectTrigger>
                    <SelectContent>
                      {departmentMaster.map((d) => (
                        <SelectItem key={d.id} value={d.name}>{d.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Location Dropdown */}
                <div className="space-y-1.5">
                  <Label className="text-xs text-muted-foreground">Location (Master)</Label>
                  <Select value={editLocation} onValueChange={setEditLocation}>
                    <SelectTrigger><SelectValue placeholder="Select Location" /></SelectTrigger>
                    <SelectContent>
                      {locationMaster.map((l) => (
                        <SelectItem key={l.id} value={l.name}>{l.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {/* Purchase Date */}
                <div className="space-y-1.5">
                  <Label className="text-xs text-muted-foreground">Purchase Date</Label>
                  <Input type="date" value={editPurchaseDate} onChange={(e) => setEditPurchaseDate(e.target.value)} />
                </div>

                {/* Approved By */}
                <div className="space-y-1.5">
                  <Label className="text-xs text-muted-foreground">Approved By</Label>
                  <Input value={editApprovedBy} onChange={(e) => setEditApprovedBy(e.target.value)} placeholder="Default RKN" />
                </div>
              </div>

              {/* Old assign */}
              <div className="space-y-1.5">
                <Label className="text-xs text-muted-foreground">Old assign (Previous Employee)</Label>
                <Select value={editOldAssigneeId || "none"} onValueChange={setEditOldAssigneeId}>
                  <SelectTrigger><SelectValue placeholder="Select old assigned employee" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">None / Unassigned</SelectItem>
                    {employees?.map((e) => (
                      <SelectItem key={e.id} value={e.id}>{e.name} ({e.employee_code})</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Accessories */}
              <div className="space-y-1.5">
                <Label className="text-xs text-muted-foreground">Accessories</Label>
                <Input value={editAccessories} onChange={(e) => setEditAccessories(e.target.value)} placeholder="Charger, bag, mouse…" />
              </div>

              {/* Remarks */}
              <div className="space-y-1.5">
                <Label className="text-xs text-muted-foreground">Remarks</Label>
                <Textarea rows={2} value={editRemarks} onChange={(e) => setEditRemarks(e.target.value)} />
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setEditDialogOpen(false)}>Cancel</Button>
            <Button onClick={saveEditedAssignment} disabled={saving}>{saving ? "Saving…" : "Save Changes"}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
