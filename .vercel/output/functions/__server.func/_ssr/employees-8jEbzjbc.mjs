import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useQueryClient, a as useQuery } from "../_libs/tanstack__react-query.mjs";
import { s as supabase } from "./client-HNLhiZLv.mjs";
import { B as Button } from "./button-BC9oXVxV.mjs";
import { I as Input } from "./input-C0QjszdI.mjs";
import { L as Label } from "./label-JU3yqRBo.mjs";
import { C as Card, d as CardContent } from "./card-DQ5v2DYb.mjs";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-CZRUt5a6.mjs";
import { D as Dialog, f as DialogTrigger, a as DialogContent, b as DialogHeader, c as DialogTitle, e as DialogFooter } from "./dialog-CypSg8M2.mjs";
import { u as utils, w as writeFileSync, r as readSync } from "../_libs/xlsx.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { l as logAudit } from "./audit-D0bs8pWg.mjs";
import { u as useMaster } from "./localMaster-C83LJ8Vy.mjs";
import "../_libs/seroval.mjs";
import { v as FileDown, A as FileUp, r as Plus, t as Search, u as Pencil } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__query-core.mjs";
import "./server-DAWPy2FY.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:stream";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
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
const EMPTY = {
  employee_code: "",
  name: "",
  department: "",
  designation: "",
  email: "",
  mobile: "",
  location: ""
};
function EmployeesPage() {
  const qc = useQueryClient();
  const locationMaster = useMaster("locations");
  const departmentMaster = useMaster("departments");
  const [q, setQ] = reactExports.useState("");
  const [open, setOpen] = reactExports.useState(false);
  const [draft, setDraft] = reactExports.useState(EMPTY);
  const [saving, setSaving] = reactExports.useState(false);
  const {
    data,
    isLoading
  } = useQuery({
    queryKey: ["employees", q],
    queryFn: async () => {
      let query = supabase.from("employees").select("*").order("name").limit(500);
      if (q) {
        const t = `%${q}%`;
        query = query.or(`name.ilike.${t},employee_code.ilike.${t},email.ilike.${t},department.ilike.${t}`);
      }
      const {
        data: data2,
        error
      } = await query;
      if (error) throw error;
      return data2 ?? [];
    }
  });
  const save = async () => {
    if (!draft.employee_code || !draft.name) return toast.error("Employee code and name are required");
    setSaving(true);
    const payload = {
      ...draft
    };
    try {
      const res = draft.id ? await supabase.from("employees").update(payload).eq("id", draft.id).select("id").single() : await supabase.from("employees").insert(payload).select("id").single();
      setSaving(false);
      if (res.error) {
        toast.error(typeof res.error === "string" ? res.error : res.error.message || "Failed to save employee");
        return;
      }
      const savedId = res.data?.id || res.data?._id || draft.id || crypto.randomUUID();
      try {
        await logAudit("employee", draft.id ? "update" : "create", savedId, {
          name: draft.name
        });
      } catch (e) {
        console.warn("[Audit warning]", e);
      }
      toast.success(draft.id ? "Employee updated" : "Employee added");
      setOpen(false);
      setDraft(EMPTY);
      qc.invalidateQueries({
        queryKey: ["employees"]
      });
    } catch (err) {
      setSaving(false);
      toast.error(err?.message || "Error saving employee");
    }
  };
  const exportExcel = () => {
    if (!data?.length) return toast.info("Nothing to export");
    const rows = data.map((e) => ({
      "Employee Code": e.employee_code,
      Name: e.name,
      Department: e.department,
      Designation: e.designation,
      Email: e.email,
      Mobile: e.mobile,
      Location: e.location
    }));
    const wb = utils.book_new();
    utils.book_append_sheet(wb, utils.json_to_sheet(rows), "Employees");
    writeFileSync(wb, `employees_${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.xlsx`);
  };
  const importExcel = async (file) => {
    const wb = readSync(await file.arrayBuffer());
    const rows = utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]);
    const records = rows.map((r) => ({
      employee_code: String(r["Employee Code"] ?? r["employee_code"] ?? "").trim(),
      name: String(r["Name"] ?? r["name"] ?? "").trim(),
      department: r["Department"] ?? r["department"] ?? null,
      designation: r["Designation"] ?? r["designation"] ?? null,
      email: r["Email"] ?? r["email"] ?? null,
      mobile: String(r["Mobile"] ?? r["mobile"] ?? "") || null,
      location: r["Location"] ?? r["location"] ?? null
    })).filter((r) => r.employee_code && r.name);
    if (!records.length) return toast.error("Each row needs an Employee Code and Name");
    const {
      error
    } = await supabase.from("employees").upsert(records, {
      onConflict: "employee_code"
    });
    if (error) return toast.error(error.message);
    await logAudit("employee", "bulk_import", null, {
      count: records.length
    });
    toast.success(`Imported ${records.length} employees`);
    qc.invalidateQueries({
      queryKey: ["employees"]
    });
  };
  const field = (label, key, type = "text") => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type, value: draft[key] ?? "", onChange: (e) => setDraft({
      ...draft,
      [key]: e.target.value
    }) })
  ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2 flex-wrap", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-semibold tracking-tight", children: "Employees" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
          data?.length ?? 0,
          " record",
          data?.length === 1 ? "" : "s"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 flex-wrap", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", onClick: exportExcel, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FileDown, { className: "h-4 w-4 mr-2" }),
          "Export"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "file", accept: ".xlsx,.xls,.csv", className: "hidden", onChange: (e) => {
            const f = e.target.files?.[0];
            if (f) importExcel(f);
            e.target.value = "";
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "cursor-pointer", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FileUp, { className: "h-4 w-4 mr-2" }),
            "Import"
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onOpenChange: (o) => {
          setOpen(o);
          if (!o) setDraft(EMPTY);
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4 mr-2" }),
            "New Employee"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "sm:max-w-md", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: draft.id ? "Edit employee" : "New employee" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-3 py-1", children: [
              field("Employee Code *", "employee_code"),
              field("Full Name *", "name"),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-muted-foreground", children: "Department (Master)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: draft.department ?? "", onValueChange: (val) => setDraft({
                  ...draft,
                  department: val
                }), children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select Department" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: departmentMaster.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: d.name, children: d.name }, d.id)) })
                ] })
              ] }),
              field("Designation", "designation"),
              field("Email", "email", "email"),
              field("Mobile", "mobile"),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-2 space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-muted-foreground", children: "Location (Master)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: draft.location ?? "", onValueChange: (val) => setDraft({
                  ...draft,
                  location: val
                }), children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select Location from Master" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: locationMaster.map((loc) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: loc.name, children: loc.name }, loc.id)) })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(DialogFooter, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: save, disabled: saving, children: saving ? "Saving…" : "Save" }) })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: q, onChange: (e) => setQ(e.target.value), placeholder: "Search by name, code, email, department…", className: "pl-8" })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-0 overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-muted/40 text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "text-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2.5 font-medium", children: "Code" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2.5 font-medium", children: "Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2.5 font-medium", children: "Department" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2.5 font-medium", children: "Designation" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2.5 font-medium", children: "Contact" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2.5 font-medium", children: "Location" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2.5 font-medium text-right", children: "Actions" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { className: "divide-y", children: [
        isLoading && /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: 7, className: "px-4 py-8 text-center text-muted-foreground", children: "Loading…" }) }),
        !isLoading && !data?.length && /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: 7, className: "px-4 py-12 text-center text-muted-foreground", children: "No employees yet." }) }),
        data?.map((e) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-accent/40", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5 font-mono text-xs", children: e.employee_code }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5 font-medium", children: e.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5", children: e.department ?? "—" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5", children: e.designation ?? "—" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-2.5 text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: e.email ?? "—" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs", children: e.mobile ?? "" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5 text-muted-foreground", children: e.location ?? "—" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5 text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "ghost", size: "sm", onClick: () => {
            setDraft(e);
            setOpen(true);
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "h-3.5 w-3.5 mr-1" }),
            "Edit"
          ] }) })
        ] }, e.id))
      ] })
    ] }) }) })
  ] });
}
export {
  EmployeesPage as component
};
