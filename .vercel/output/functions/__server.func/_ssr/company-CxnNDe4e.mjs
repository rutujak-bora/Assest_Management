import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { B as Button } from "./button-BC9oXVxV.mjs";
import { I as Input } from "./input-C0QjszdI.mjs";
import { L as Label } from "./label-JU3yqRBo.mjs";
import { C as Card, d as CardContent } from "./card-DQ5v2DYb.mjs";
import { D as Dialog, f as DialogTrigger, a as DialogContent, b as DialogHeader, c as DialogTitle, e as DialogFooter } from "./dialog-CypSg8M2.mjs";
import { u as utils, w as writeFileSync, r as readSync } from "../_libs/xlsx.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { u as useMaster, a as upsertByName, b as updateItem, c as addItem, d as deleteItem } from "./localMaster--yvYZawL.mjs";
import "../_libs/seroval.mjs";
import { v as FileDown, A as FileUp, r as Plus, f as Building2, u as Pencil, T as Trash2 } from "../_libs/lucide-react.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "./utils-H80jjgLf.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/radix-ui__react-label.mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/radix-ui__react-dialog.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-use-effect-event+[...].mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/react-remove-scroll.mjs";
import "tslib";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_libs/aria-hidden.mjs";
import "./client-ByslKVxo.mjs";
import "./server-CoGtXQa3.mjs";
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
import "../_libs/isbot.mjs";
const EMPTY = {
  name: "",
  address: "",
  contact: "",
  email: ""
};
function CompanyPage() {
  const data = useMaster("companies");
  const [open, setOpen] = reactExports.useState(false);
  const [editing, setEditing] = reactExports.useState({
    ...EMPTY
  });
  const [search, setSearch] = reactExports.useState("");
  const filtered = data.filter((c) => c.name.toLowerCase().includes(search.toLowerCase()));
  const openNew = () => {
    setEditing({
      ...EMPTY
    });
    setOpen(true);
  };
  const openEdit = (row) => {
    setEditing({
      ...row
    });
    setOpen(true);
  };
  const save = () => {
    if (!editing.name?.trim()) return toast.error("Company name is required");
    if (editing.id) {
      updateItem("companies", editing.id, {
        name: editing.name.trim(),
        address: editing.address || void 0,
        contact: editing.contact || void 0,
        email: editing.email || void 0
      });
      toast.success("Company updated");
    } else {
      addItem("companies", {
        name: editing.name.trim(),
        address: editing.address || void 0,
        contact: editing.contact || void 0,
        email: editing.email || void 0
      });
      toast.success("Company added");
    }
    setOpen(false);
    setEditing({
      ...EMPTY
    });
  };
  const remove = (id, name) => {
    if (!confirm(`Delete company "${name}"?`)) return;
    deleteItem("companies", id);
    toast.success("Company deleted");
  };
  const exportExcel = () => {
    const rows = data.length ? data.map((c) => ({
      Name: c.name,
      Address: c.address ?? "",
      Contact: c.contact ?? "",
      Email: c.email ?? ""
    })) : [{
      Name: "Sample Company Ltd",
      Address: "123 Business Park",
      Contact: "+91 9876543210",
      Email: "contact@sample.com"
    }];
    const wb = utils.book_new();
    utils.book_append_sheet(wb, utils.json_to_sheet(rows), "Companies");
    writeFileSync(wb, `companies_${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.xlsx`);
  };
  const importExcel = async (file) => {
    try {
      const wb = readSync(await file.arrayBuffer());
      const rows = utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]);
      const records = rows.map((r) => ({
        name: String(r["Name"] ?? r["name"] ?? r["Company Name"] ?? "").trim(),
        address: r["Address"] ?? r["address"] ?? void 0,
        contact: r["Contact"] ?? r["contact"] ?? void 0,
        email: r["Email"] ?? r["email"] ?? void 0
      })).filter((r) => r.name);
      if (!records.length) return toast.error("No valid records. Make sure file has a 'Name' column.");
      const count = upsertByName("companies", records);
      toast.success(`Imported ${count} companies`);
    } catch (err) {
      toast.error(err.message ?? "Failed to import companies");
    }
  };
  const set = (k, v) => setEditing((p) => ({
    ...p,
    [k]: v
  }));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2 flex-wrap", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-semibold tracking-tight", children: "Company" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
          filtered.length,
          " record",
          filtered.length === 1 ? "" : "s"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
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
          if (!o) setEditing({
            ...EMPTY
          });
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: openNew, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4 mr-2" }),
            "New Company"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "sm:max-w-md", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: editing.id ? "Edit Company" : "New Company" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3 py-2", children: ["name", "address", "contact", "email"].map((field) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-xs text-muted-foreground capitalize", children: [
                field,
                field === "name" ? " *" : ""
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: editing[field] ?? "", onChange: (e) => set(field, e.target.value) })
            ] }, field)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: () => setOpen(false), children: "Cancel" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: save, children: editing.id ? "Update" : "Create" })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Search companies…", value: search, onChange: (e) => setSearch(e.target.value), className: "pl-9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-0 overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-muted/40 text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "text-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2.5 font-medium", children: "Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2.5 font-medium", children: "Address" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2.5 font-medium", children: "Contact" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2.5 font-medium", children: "Email" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2.5 font-medium w-20", children: "Actions" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { className: "divide-y", children: [
        !filtered.length && /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { colSpan: 5, className: "px-4 py-12 text-center text-muted-foreground", children: [
          "No companies yet. Click ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "New Company" }),
          " to add one or ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Import" }),
          " to upload in bulk."
        ] }) }),
        filtered.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-accent/40", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5 font-medium", children: c.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5 text-muted-foreground", children: c.address ?? "—" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5 text-muted-foreground", children: c.contact ?? "—" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5 text-muted-foreground", children: c.email ?? "—" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "icon", className: "h-7 w-7", onClick: () => openEdit(c), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "h-3.5 w-3.5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "icon", className: "h-7 w-7 text-destructive", onClick: () => remove(c.id, c.name), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3.5 w-3.5" }) })
          ] }) })
        ] }, c.id))
      ] })
    ] }) }) })
  ] });
}
export {
  CompanyPage as component
};
