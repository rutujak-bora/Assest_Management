import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { u as useQueryClient, a as useQuery } from "../_libs/tanstack__react-query.mjs";
import { s as supabase } from "./client-CIRo3Hyi.mjs";
import { B as Button } from "./button-BC9oXVxV.mjs";
import { I as Input } from "./input-C0QjszdI.mjs";
import { L as Label } from "./label-JU3yqRBo.mjs";
import { T as Textarea } from "./textarea-DSyJ1nlY.mjs";
import { C as Card, d as CardContent } from "./card-DQ5v2DYb.mjs";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-CZRUt5a6.mjs";
import { D as Dialog, f as DialogTrigger, a as DialogContent, b as DialogHeader, c as DialogTitle, e as DialogFooter } from "./dialog-CypSg8M2.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { j as jspdf_node_minExports } from "../_libs/jspdf.mjs";
import { u as useCategories, g as getCategoryLabel } from "./router-CXOTuEAP.mjs";
import { l as logAudit } from "./audit-D2xWJrnU.mjs";
import { u as useMaster } from "./localMaster-CYB958lY.mjs";
import "../_libs/seroval.mjs";
import { r as Plus, s as CircleCheck, t as Search, u as Pencil, v as FileDown, w as Undo2 } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
import "./server-C-MZQjZi.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "./utils-H80jjgLf.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/radix-ui__react-label.mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/radix-ui__react-select.mjs";
import "../_libs/radix-ui__number.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-collection.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-direction.mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/radix-ui__react-popper.mjs";
import "../_libs/floating-ui__react-dom.mjs";
import "../_libs/floating-ui__dom.mjs";
import "../_libs/floating-ui__core.mjs";
import "../_libs/floating-ui__utils.mjs";
import "../_libs/radix-ui__react-use-size.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-use-effect-event+[...].mjs";
import "../_libs/radix-ui__react-use-previous.mjs";
import "../_libs/@radix-ui/react-visually-hidden+[...].mjs";
import "../_libs/aria-hidden.mjs";
import "../_libs/react-remove-scroll.mjs";
import "tslib";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_libs/radix-ui__react-dialog.mjs";
import "path";
import "../_libs/fflate.mjs";
import "../_libs/fast-png.mjs";
import "../_libs/iobuffer.mjs";
import "../_libs/pako.mjs";
import "fs";
import "../_libs/html2canvas.mjs";
import "../_libs/dompurify.mjs";
import "../_libs/canvg.mjs";
import "../_libs/core-js.mjs";
import "../_libs/babel__runtime.mjs";
import "../_libs/raf.mjs";
import "../_libs/performance-now.mjs";
import "../_libs/rgbcolor.mjs";
import "../_libs/svg-pathdata.mjs";
import "../_libs/stackblur-canvas.mjs";
function generateHandoverPDF(data) {
  const doc = new jspdf_node_minExports.jsPDF({ unit: "pt", format: "a4" });
  const W = doc.internal.pageSize.getWidth();
  const M = 48;
  const contentW = W - M * 2;
  const catLabel = getCategoryLabel(data.asset.category);
  const catLower = catLabel.toLowerCase();
  const modelParts = [
    data.asset.brand,
    data.asset.product_name,
    data.asset.series,
    data.asset.configuration
  ].filter(Boolean);
  const deviceModelStr = modelParts.length ? modelParts.join(", ") : `${catLabel} Device`;
  let y = 45;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.setTextColor(0, 150, 214);
  doc.text("BORA", W / 2, y, { align: "center" });
  y += 14;
  doc.setFontSize(10);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(0, 115, 175);
  doc.text("MULTICORP", W / 2, y, { align: "center" });
  y += 10;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(120, 130, 140);
  doc.text("Expanding horizons", W / 2, y, { align: "center" });
  y += 15;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(30, 30, 30);
  doc.text(`Date: ${data.date}`, W - M, y, { align: "right" });
  y += 30;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.5);
  doc.setTextColor(20, 20, 20);
  doc.text(`Subject: Issuance of ${catLabel} for Official Use`, W / 2, y, { align: "center" });
  y += 30;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.text(`Dear: ${data.employee.name}`, M, y);
  y += 20;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9.5);
  doc.setTextColor(35, 35, 35);
  const openingText = `We are pleased to inform you that a company-issued ${catLower} is being provided to you for the purpose of enhancing your work efficiency and ensuring smooth operations. Please find the details of the issued device below:`;
  const openLines = doc.splitTextToSize(openingText, contentW);
  doc.text(openLines, M, y);
  y += openLines.length * 13 + 12;
  const bullets = [
    { label: `${catLabel} Model:`, val: deviceModelStr },
    { label: "Serial Number:", val: data.asset.serial_number ?? "—" },
    { label: "Accessories Provided:", val: data.accessories ?? "Charger & Mouse" }
  ];
  bullets.forEach((b) => {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9.5);
    doc.setTextColor(30, 30, 30);
    doc.text("✓", M + 20, y);
    doc.text(`  ${b.label}`, M + 30, y);
    const labelW = doc.getTextWidth(`  ${b.label} `);
    doc.setFont("helvetica", "bold");
    const valLines = doc.splitTextToSize(b.val, contentW - 50 - labelW);
    doc.text(valLines, M + 30 + labelW, y);
    y += Math.max(16, valLines.length * 13);
  });
  y += 15;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.setTextColor(20, 20, 20);
  doc.text("Terms and Conditions:", M, y);
  y += 18;
  const termsList = [
    {
      title: "1. Purpose of Use:",
      text: `The ${catLower} is provided solely for official purposes. Personal use should be minimal and should not interfere with your work responsibilities or violate company policies.`,
      boldSegments: []
    },
    {
      title: "2. Data Confidentiality:",
      text: `You are responsible for maintaining the confidentiality of all company data stored on the ${catLower}. Sharing sensitive or proprietary information without prior authorization is strictly prohibited.`,
      boldText: "Sharing sensitive or proprietary information without prior authorization is strictly prohibited."
    },
    {
      title: "3. Care and Maintenance:",
      text: `The ${catLower} should be handled with care. Any damage or malfunction must be reported immediately to the IT department. You are also responsible for regular maintenance (e.g., system updates).`,
      boldSegments: []
    },
    {
      title: "4. Loss or Damage:",
      text: `In case of theft, loss, or damage caused by negligence or misuse, the employee may be held responsible for the cost of repairs or replacement of the device. The company reserves the right to deduct the cost from your salary, subject to company policy.`,
      boldSegments: ["theft, loss, or damage caused by negligence or misuse", "deduct the cost from your salary"]
    },
    {
      title: "5. Return of Equipment:",
      text: `Upon resignation, termination, or upon request from the company, the ${catLower} must be returned along with all accessories provided to Reporting Manager or IT Department. If you fail Reporting Manager is fully responsible for any damage or loss of the equipment.`,
      boldSegments: ["Upon resignation, termination", "Reporting Manager or IT Department", "Reporting Manager is fully responsible for any damage or loss of the equipment."]
    },
    {
      title: "6. Software Installation:",
      text: `The installation of unauthorized or unlicensed software on the ${catLower} is strictly prohibited. All software installations must be approved by the IT department.`,
      boldSegments: []
    },
    {
      title: "7. Compliance:",
      text: `You agree to comply with all company policies and IT security protocols concerning the use of company-issued equipment.`,
      boldSegments: []
    }
  ];
  termsList.forEach((t) => {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(30, 30, 30);
    doc.text(t.title, M, y);
    y += 12;
    const lines = doc.splitTextToSize(`   ${t.text}`, contentW);
    lines.forEach((line) => {
      let isBoldLine = false;
      if (t.boldText && line.includes(t.boldText)) {
        isBoldLine = true;
      }
      if (t.boldSegments?.some((seg) => line.includes(seg))) {
        isBoldLine = true;
      }
      doc.setFont("helvetica", isBoldLine ? "bold" : "normal");
      doc.text(line, M, y);
      y += 11;
    });
    y += 4;
  });
  doc.addPage();
  let y2 = 45;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9.5);
  doc.setTextColor(35, 35, 35);
  doc.text("By signing this letter, you acknowledge receipt of the Device and agree to follow the terms and conditions set forth.", M, y2);
  y2 += 30;
  doc.text("Please sign and return a copy of this letter for our records.", M, y2);
  y2 += 15;
  doc.setDrawColor(30, 30, 30);
  doc.setLineWidth(0.8);
  doc.line(M, y2, W - M, y2);
  y2 += 25;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.setTextColor(20, 20, 20);
  doc.text("Employee Acknowledgment:", M, y2);
  y2 += 18;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9.5);
  const empAckStatement = `I, ${data.employee.name} have received the above-mentioned ${catLower} and agree to the terms and conditions stated in this letter.`;
  const ackLines = doc.splitTextToSize(empAckStatement, contentW);
  doc.text(ackLines, M, y2);
  y2 += ackLines.length * 13 + 25;
  doc.setFontSize(9.5);
  doc.text("Employee Signature: _______________________", M, y2);
  y2 += 20;
  doc.text("Date: _______________________", M, y2);
  y2 += 25;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8);
  doc.setTextColor(100, 100, 100);
  const dots = "*".repeat(110);
  doc.text(dots, M, y2);
  y2 += 25;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.setTextColor(20, 20, 20);
  doc.text("For IT Department Information:", M, y2);
  y2 += 18;
  const priceDisplay = data.asset.purchase_price ? `${data.asset.purchase_price}+GST` : "—";
  const vendorDisplay = data.asset.vendor_name || "Office Stock (Warehouse)";
  const approvedByDisplay = data.approved_by || "rkn sir";
  const itDetails = [
    { label: "Brand Name:", val: data.asset.brand ?? "DELL" },
    { label: "Device Model:", val: deviceModelStr },
    { label: "Serial Number/Service Tag:", val: data.asset.serial_number ?? "—" },
    { label: "Accessories Provided:", val: data.accessories ?? "Charger" },
    { label: "Exact Cost of Device:", val: priceDisplay },
    { label: "Additional Attachments:", val: data.additional_attachments ?? "-NO" },
    { label: "Purchase Date:", val: data.asset.purchase_date ?? data.date },
    { label: "Company In Purchase:", val: data.asset.company ?? data.companyName ?? "Bora Multicorp" },
    { label: "Warranty Expire Date:", val: data.asset.warranty_end ?? "—" },
    { label: "Department:", val: data.employee.department ?? "ERP" },
    { label: "Office/Location:", val: data.employee.location ?? "H.O" },
    { label: "Approved by:", val: approvedByDisplay },
    { label: "Purchase from:", val: vendorDisplay }
  ];
  itDetails.forEach((item) => {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9.5);
    doc.setTextColor(30, 30, 30);
    doc.text("✓", M + 20, y2);
    doc.text(`  ${item.label}`, M + 30, y2);
    const lblW = doc.getTextWidth(`  ${item.label} `);
    doc.setFont("helvetica", "bold");
    const vLines = doc.splitTextToSize(item.val, contentW - 50 - lblW);
    doc.text(vLines, M + 30 + lblW, y2);
    y2 += Math.max(15, vLines.length * 12);
  });
  y2 += 30;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  doc.setTextColor(20, 20, 20);
  doc.text("Signature of Manager:", M, y2);
  doc.text("Signature of IT Department", W - M - 150, y2);
  const safeName = data.employee.name.replace(/[^a-z0-9]+/gi, "_");
  const fileName = `${catLabel}_Issuance_${safeName}.pdf`;
  return { blob: doc.output("blob"), fileName };
}
function AssignmentsPage() {
  const qc = useQueryClient();
  const categories = useCategories();
  const departmentMaster = useMaster("departments");
  const locationMaster = useMaster("locations");
  const [open, setOpen] = reactExports.useState(false);
  const [q, setQ] = reactExports.useState("");
  const [employeeId, setEmployeeId] = reactExports.useState("");
  const [selectedCategory, setSelectedCategory] = reactExports.useState("all");
  const [assetId, setAssetId] = reactExports.useState("");
  const [department, setDepartment] = reactExports.useState("");
  const [location, setLocation] = reactExports.useState("");
  const [purchaseDate, setPurchaseDate] = reactExports.useState("");
  const [approvedBy, setApprovedBy] = reactExports.useState("RKN");
  const [oldAssigneeId, setOldAssigneeId] = reactExports.useState("none");
  const [accessories, setAccessories] = reactExports.useState("");
  const [remarks, setRemarks] = reactExports.useState("");
  const [saving, setSaving] = reactExports.useState(false);
  const [editDialogOpen, setEditDialogOpen] = reactExports.useState(false);
  const [editingAssignment, setEditingAssignment] = reactExports.useState(null);
  const [editDepartment, setEditDepartment] = reactExports.useState("");
  const [editLocation, setEditLocation] = reactExports.useState("");
  const [editPurchaseDate, setEditPurchaseDate] = reactExports.useState("");
  const [editApprovedBy, setEditApprovedBy] = reactExports.useState("RKN");
  const [editOldAssigneeId, setEditOldAssigneeId] = reactExports.useState("none");
  const [editAccessories, setEditAccessories] = reactExports.useState("");
  const [editRemarks, setEditRemarks] = reactExports.useState("");
  const {
    data: assignments,
    isLoading
  } = useQuery({
    queryKey: ["assignments"],
    queryFn: async () => {
      const {
        data,
        error
      } = await supabase.from("asset_assignments").select("*, asset:assets(id, asset_tag, product_name, brand, series, serial_number, category, configuration, purchase_date, warranty_end, purchase_price, vendor_name, invoice_number, company), employee:employees(id, name, employee_code, department, designation, location)").order("assigned_at", {
        ascending: false
      }).limit(500);
      if (error) throw error;
      return data ?? [];
    }
  });
  const {
    data: availableAssets
  } = useQuery({
    queryKey: ["assets", "available"],
    queryFn: async () => {
      const {
        data,
        error
      } = await supabase.from("assets").select("id, asset_tag, product_name, brand, series, serial_number, category, configuration, purchase_date, warranty_end, purchase_price, vendor_name, invoice_number, company").eq("status", "available").order("asset_tag").limit(1e3);
      if (error) throw error;
      return data ?? [];
    }
  });
  const {
    data: employeePastAssetIds
  } = useQuery({
    queryKey: ["employee-past-assets", employeeId],
    enabled: !!employeeId,
    queryFn: async () => {
      const {
        data,
        error
      } = await supabase.from("asset_assignments").select("asset_id").eq("employee_id", employeeId);
      if (error) return [];
      return (data ?? []).map((a) => a.asset_id);
    }
  });
  const {
    data: employees
  } = useQuery({
    queryKey: ["employees", "all"],
    queryFn: async () => {
      const {
        data,
        error
      } = await supabase.from("employees").select("id, name, employee_code, department, designation, location").order("name").limit(500);
      if (error) throw error;
      return data ?? [];
    }
  });
  const pastAssetSet = new Set(employeePastAssetIds ?? []);
  const filteredAvailableAssets = (availableAssets ?? []).filter((a) => {
    if (selectedCategory !== "all" && a.category !== selectedCategory) {
      return false;
    }
    if (employeeId && pastAssetSet.has(a.id)) {
      return false;
    }
    return true;
  });
  const selectedAsset = availableAssets?.find((a) => a.id === assetId);
  const selectedEmployee = employees?.find((e) => e.id === employeeId);
  reactExports.useEffect(() => {
    if (selectedEmployee) {
      if (selectedEmployee.department) setDepartment(selectedEmployee.department);
      if (selectedEmployee.location) setLocation(selectedEmployee.location);
    }
  }, [employeeId]);
  reactExports.useEffect(() => {
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
    const {
      data: user
    } = await supabase.auth.getUser();
    const oldEmployeeObj = oldAssigneeId && oldAssigneeId !== "none" ? employees?.find((e) => e.id === oldAssigneeId) : null;
    const oldAssignText = oldEmployeeObj ? `${oldEmployeeObj.name} (${oldEmployeeObj.employee_code})` : null;
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
      created_by: user.user?.id ?? null
    };
    const {
      data: row,
      error
    } = await supabase.from("asset_assignments").insert(payload).select("id").single();
    if (error) {
      setSaving(false);
      return toast.error(error.message);
    }
    const {
      error: upErr
    } = await supabase.from("assets").update({
      status: "assigned",
      current_employee_id: employeeId
    }).eq("id", assetId);
    setSaving(false);
    if (upErr) return toast.error(upErr.message);
    await logAudit("assignment", "create", row.id, {
      assetId,
      employeeId
    });
    toast.success("Asset assigned successfully");
    setOpen(false);
    reset();
    qc.invalidateQueries();
  };
  const markReturned = async (a) => {
    const {
      error
    } = await supabase.from("asset_assignments").update({
      status: "returned",
      returned_at: (/* @__PURE__ */ new Date()).toISOString()
    }).eq("id", a.id);
    if (error) return toast.error(error.message);
    await supabase.from("assets").update({
      status: "available",
      current_employee_id: null
    }).eq("id", a.asset_id);
    await logAudit("assignment", "return", a.id, {});
    toast.success("Marked as returned");
    qc.invalidateQueries();
  };
  const openEditAssignment = (a) => {
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
    const userRemarks = (a.remarks || "").replace(/\[(Old assign|Dept|Loc|PDate|ApprovedBy):\s*[^\]]+\]\s*/g, "").trim();
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
    const {
      error
    } = await supabase.from("asset_assignments").update({
      accessories: editAccessories || null,
      remarks: finalRemarks || null
    }).eq("id", editingAssignment.id);
    setSaving(false);
    if (error) return toast.error(error.message);
    toast.success("Assignment updated");
    setEditDialogOpen(false);
    qc.invalidateQueries();
  };
  const downloadPdf = (a) => {
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
    let formattedPDate = customPurchaseDate;
    if (customPurchaseDate && /^\d{4}-\d{2}-\d{2}$/.test(customPurchaseDate)) {
      const [y, m, d] = customPurchaseDate.split("-");
      const dt = new Date(Number(y), Number(m) - 1, Number(d));
      formattedPDate = dt.toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric"
      });
    }
    const {
      blob,
      fileName
    } = generateHandoverPDF({
      companyName: "Bora Multicorp Asset Management",
      date: new Date(a["assigned_at"]).toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
      }).replace(/\//g, "."),
      employee: {
        name: a["employee"].name,
        // Employee Full Name (Name and Surname)
        code: a["employee"].employee_code,
        department: customDept,
        designation: a["employee"].designation,
        location: customLoc
      },
      asset: {
        category: a["asset"].category,
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
        company: a["asset"].company
      },
      accessories: a["accessories"] ?? void 0,
      approved_by: customApprovedBy
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    link.click();
    URL.revokeObjectURL(url);
  };
  const filtered = (assignments ?? []).filter((a) => {
    if (!q) return true;
    const t = q.toLowerCase();
    return [a.asset?.asset_tag, a.asset?.product_name, a.asset?.serial_number, a.employee?.name, a.employee?.employee_code].some((v) => v?.toLowerCase().includes(t));
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2 flex-wrap", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-semibold tracking-tight", children: "Assignments" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
          filtered.length,
          " record",
          filtered.length === 1 ? "" : "s"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onOpenChange: (o) => {
        setOpen(o);
        if (!o) reset();
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4 mr-2" }),
          "Assign Asset"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "sm:max-w-[500px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "Assign asset to employee" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 py-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-muted-foreground", children: "Select Employee *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: employeeId, onValueChange: (val) => {
                setEmployeeId(val);
                setAssetId("");
              }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Choose employee for assignment" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: employees?.map((e) => /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectItem, { value: e.id, children: [
                  e.name,
                  " (",
                  e.employee_code,
                  ")"
                ] }, e.id)) })
              ] }),
              employeeId && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground", children: "Only showing serial numbers not previously assigned to this employee." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-muted-foreground", children: "Category Filter" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: selectedCategory, onValueChange: (cat) => {
                setSelectedCategory(cat);
                setAssetId("");
              }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "All Categories" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "all", children: "All categories" }),
                  categories.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: c.value, children: c.label }, c.value))
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-muted-foreground", children: "Select Serial Number / Asset *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: assetId, onValueChange: setAssetId, disabled: !filteredAvailableAssets.length, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: filteredAvailableAssets.length ? "Choose Serial Number" : "No available assets for selection" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: filteredAvailableAssets.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: a.id, children: a.serial_number ? `SN: ${a.serial_number} (${a.asset_tag} — ${a.product_name})` : `${a.asset_tag} — ${a.product_name}` }, a.id)) })
              ] })
            ] }),
            selectedAsset && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border bg-muted/40 p-3 space-y-1.5 text-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 font-semibold text-primary", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-3.5 w-3.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Product Info Preview" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-x-2 gap-y-1 text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  "Asset Tag: ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: selectedAsset.asset_tag })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  "Category: ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: getCategoryLabel(selectedAsset.category) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  "Serial Number: ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground font-mono", children: selectedAsset.serial_number ?? "—" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  "Product Name: ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: selectedAsset.product_name })
                ] }),
                selectedAsset.brand && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  "Brand / Series: ",
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { className: "text-foreground", children: [
                    selectedAsset.brand,
                    " ",
                    selectedAsset.series ?? ""
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-muted-foreground", children: "Department (Master)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: department, onValueChange: setDepartment, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select Department" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: departmentMaster.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: d.name, children: d.name }, d.id)) })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-muted-foreground", children: "Location (Master)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: location, onValueChange: setLocation, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select Location" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: locationMaster.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: l.name, children: l.name }, l.id)) })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-muted-foreground", children: "Purchase Date" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "date", value: purchaseDate, onChange: (e) => setPurchaseDate(e.target.value) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-muted-foreground", children: "Approved By" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: approvedBy, onChange: (e) => setApprovedBy(e.target.value), placeholder: "Default RKN" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-muted-foreground", children: "Old assign (Previous Employee)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: oldAssigneeId || "none", onValueChange: setOldAssigneeId, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "None / Unassigned" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "none", children: "None / Unassigned" }),
                  employees?.map((e) => /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectItem, { value: e.id, children: [
                    e.name,
                    " (",
                    e.employee_code,
                    ")"
                  ] }, e.id))
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-muted-foreground", children: "Accessories" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: accessories, onChange: (e) => setAccessories(e.target.value), placeholder: "Charger, bag, mouse…" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-muted-foreground", children: "Remarks" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { rows: 2, value: remarks, onChange: (e) => setRemarks(e.target.value) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogFooter, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: assign, disabled: saving || !assetId || !employeeId, children: saving ? "Assigning…" : "Assign Asset" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: q, onChange: (e) => setQ(e.target.value), placeholder: "Search by asset tag, serial number, product or employee…", className: "pl-8" })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-0 overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-muted/40 text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "text-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2.5 font-medium", children: "Asset / Serial" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2.5 font-medium", children: "Employee" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2.5 font-medium", children: "Assigned" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2.5 font-medium", children: "Old Assign" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2.5 font-medium", children: "Status" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2.5 font-medium text-right", children: "Actions" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { className: "divide-y", children: [
        isLoading && /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: 6, className: "px-4 py-8 text-center text-muted-foreground", children: "Loading…" }) }),
        !isLoading && !filtered.length && /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: 6, className: "px-4 py-12 text-center text-muted-foreground", children: "No assignments match your search." }) }),
        filtered.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-accent/40", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-2.5", children: [
            a.asset ? /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/assets/$id", params: {
              id: a.asset.id
            }, className: "text-primary hover:underline font-medium", children: a.asset.asset_tag }) : "—",
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium text-foreground", children: a.asset?.product_name }),
            a.asset?.serial_number && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs font-mono text-muted-foreground", children: [
              "SN: ",
              a.asset.serial_number
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: a.employee?.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: a.employee?.employee_code })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5 text-muted-foreground", children: new Date(a.assigned_at).toLocaleDateString() }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5 text-muted-foreground", children: (() => {
            if (a.remarks?.includes("[Old assign:")) {
              const match = a.remarks.match(/\[Old assign:\s*([^\]]+)\]/);
              if (match) return match[1];
            }
            return "—";
          })() }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-xs px-2 py-0.5 rounded-full border ${a.status === "active" ? "bg-primary/15 text-primary border-primary/20" : "bg-muted text-muted-foreground border-border"}`, children: a.status }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-2.5 text-right whitespace-nowrap", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "ghost", size: "sm", onClick: () => openEditAssignment(a), title: "Edit Assignment", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "h-3.5 w-3.5 mr-1" }),
              "Edit"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "ghost", size: "sm", onClick: () => downloadPdf(a), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FileDown, { className: "h-3.5 w-3.5 mr-1" }),
              "PDF"
            ] }),
            a.status === "active" && /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "ghost", size: "sm", onClick: () => markReturned(a), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Undo2, { className: "h-3.5 w-3.5 mr-1" }),
              "Return"
            ] })
          ] })
        ] }, a.id))
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: editDialogOpen, onOpenChange: setEditDialogOpen, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "sm:max-w-[480px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "Edit Assignment Details" }) }),
      editingAssignment && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
          "Editing assignment for ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: editingAssignment.asset?.asset_tag }),
          " assigned to ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: editingAssignment.employee?.name }),
          "."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-muted-foreground", children: "Department (Master)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: editDepartment, onValueChange: setEditDepartment, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select Department" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: departmentMaster.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: d.name, children: d.name }, d.id)) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-muted-foreground", children: "Location (Master)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: editLocation, onValueChange: setEditLocation, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select Location" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: locationMaster.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: l.name, children: l.name }, l.id)) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-muted-foreground", children: "Purchase Date" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "date", value: editPurchaseDate, onChange: (e) => setEditPurchaseDate(e.target.value) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-muted-foreground", children: "Approved By" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: editApprovedBy, onChange: (e) => setEditApprovedBy(e.target.value), placeholder: "Default RKN" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-muted-foreground", children: "Old assign (Previous Employee)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: editOldAssigneeId || "none", onValueChange: setEditOldAssigneeId, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select old assigned employee" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "none", children: "None / Unassigned" }),
              employees?.map((e) => /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectItem, { value: e.id, children: [
                e.name,
                " (",
                e.employee_code,
                ")"
              ] }, e.id))
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-muted-foreground", children: "Accessories" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: editAccessories, onChange: (e) => setEditAccessories(e.target.value), placeholder: "Charger, bag, mouse…" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-muted-foreground", children: "Remarks" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { rows: 2, value: editRemarks, onChange: (e) => setEditRemarks(e.target.value) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: () => setEditDialogOpen(false), children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: saveEditedAssignment, disabled: saving, children: saving ? "Saving…" : "Save Changes" })
      ] })
    ] }) })
  ] });
}
export {
  AssignmentsPage as component
};
