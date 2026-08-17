import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { u as useQueryClient, a as useQuery } from "../_libs/tanstack__react-query.mjs";
import { s as supabase } from "./client-CwJLn_Ly.mjs";
import { B as Button } from "./button-BC9oXVxV.mjs";
import { I as Input } from "./input-C0QjszdI.mjs";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-CZRUt5a6.mjs";
import { C as Card, d as CardContent } from "./card-DQ5v2DYb.mjs";
import { R as Route$2, u as useCategories, g as getCategoryLabel, S as STATUSES, c as STATUS_LABEL, s as statusBadgeClass } from "./router-C3fDDG2b.mjs";
import { c as calculateAging } from "./aging-BbuLCJRm.mjs";
import { u as useMaster } from "./localMaster-BEXEgOhe.mjs";
import { u as utils, w as writeFileSync, r as readSync } from "../_libs/xlsx.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import "../_libs/seroval.mjs";
import { v as FileDown, A as FileUp, r as Plus, t as Search, X, u as Pencil } from "../_libs/lucide-react.mjs";
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
import "./server-BMLUWlu9.mjs";
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
import "../_libs/radix-ui__react-select.mjs";
import "../_libs/radix-ui__number.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-collection.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-direction.mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
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
function AssetsPage() {
  const search = Route$2.useSearch();
  const navigate = Route$2.useNavigate();
  const qc = useQueryClient();
  const [searchInput, setSearchInput] = reactExports.useState(search.q ?? "");
  const categories = useCategories();
  const locationMaster = useMaster("locations");
  const departmentMaster = useMaster("departments");
  const companyMaster = useMaster("companies");
  const {
    data,
    isLoading
  } = useQuery({
    queryKey: ["assets", search],
    queryFn: async () => {
      let q = supabase.from("assets").select("*, current_employee:employees(id, name, employee_code, department)").order("created_at", {
        ascending: false
      }).limit(500);
      if (search.category) q = q.eq("category", search.category);
      if (search.status) q = q.eq("status", search.status);
      if (search.location) q = q.eq("location", search.location);
      if (search.company) q = q.eq("company", search.company);
      if (search.q) {
        const t = `%${search.q}%`;
        q = q.or(`asset_tag.ilike.${t},product_name.ilike.${t},serial_number.ilike.${t},brand.ilike.${t},company.ilike.${t},location.ilike.${t}`);
      }
      const {
        data: data2,
        error
      } = await q;
      if (error) throw error;
      let res = data2 ?? [];
      if (search.department) {
        res = res.filter((a) => a.current_employee?.department === search.department);
      }
      return res;
    }
  });
  const exportExcel = () => {
    if (!data?.length) return toast.info("Nothing to export");
    const rows = data.map((a) => ({
      "Asset Tag": a.asset_tag,
      Category: getCategoryLabel(a.category),
      "Product Name": a.product_name,
      Brand: a.brand,
      Series: a.series,
      "Serial Number": a.serial_number,
      Status: STATUS_LABEL[a.status],
      Location: a.location,
      Company: a.company,
      Vendor: a.vendor_name,
      "Purchase Date": a.purchase_date,
      "Purchase Price": a.purchase_price,
      "Warranty End": a.warranty_end,
      "Assigned To": a.current_employee?.name ?? "",
      Department: a.current_employee?.department ?? ""
    }));
    const ws = utils.json_to_sheet(rows);
    const wb = utils.book_new();
    utils.book_append_sheet(wb, ws, "Assets");
    writeFileSync(wb, `assets_${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.xlsx`);
  };
  const importExcel = async (file) => {
    const buf = await file.arrayBuffer();
    const wb = readSync(buf);
    const ws = wb.Sheets[wb.SheetNames[0]];
    const rows = utils.sheet_to_json(ws);
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
      warranty_end: r["Warranty End"] ?? r.warranty_end ?? null
    })).filter((r) => r.asset_tag);
    if (!records.length) return toast.error("Each row needs an Asset Tag");
    const {
      error
    } = await supabase.from("assets").upsert(records, {
      onConflict: "asset_tag"
    });
    if (error) return toast.error(error.message);
    toast.success(`Imported ${records.length} assets`);
    qc.invalidateQueries({
      queryKey: ["assets"]
    });
  };
  const hasActiveFilters = !!(search.category || search.status || search.location || search.department || search.company || search.q);
  const clearFilters = () => {
    setSearchInput("");
    navigate({
      search: {}
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2 flex-wrap", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-semibold tracking-tight", children: search.category ? getCategoryLabel(search.category) : "All Assets" }),
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
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/assets/new", search: search.category ? {
          category: search.category
        } : void 0, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4 mr-2" }),
          "New Asset"
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-3 flex flex-wrap gap-2 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1 min-w-[200px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: searchInput, onChange: (e) => setSearchInput(e.target.value), onKeyDown: (e) => e.key === "Enter" && navigate({
          search: (s) => ({
            ...s,
            q: searchInput || void 0
          })
        }), placeholder: "Search tag, name, serial, brand…", className: "pl-8" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: search.category ?? "all", onValueChange: (v) => navigate({
        search: (s) => ({
          ...s,
          category: v === "all" ? void 0 : v
        })
      }), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "w-[160px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Category" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "all", children: "All categories" }),
          categories.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: c.value, children: c.label }, c.value))
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: search.status ?? "all", onValueChange: (v) => navigate({
        search: (s) => ({
          ...s,
          status: v === "all" ? void 0 : v
        })
      }), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "w-[150px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Status" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "all", children: "All statuses" }),
          STATUSES.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: s.value, children: s.label }, s.value))
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: search.location ?? "all", onValueChange: (v) => navigate({
        search: (s) => ({
          ...s,
          location: v === "all" ? void 0 : v
        })
      }), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "w-[150px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Location" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "all", children: "All locations" }),
          locationMaster?.map((loc) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: loc.name, children: loc.name }, loc.name))
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: search.department ?? "all", onValueChange: (v) => navigate({
        search: (s) => ({
          ...s,
          department: v === "all" ? void 0 : v
        })
      }), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "w-[160px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Department" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "all", children: "All departments" }),
          departmentMaster?.map((dept) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: dept.name, children: dept.name }, dept.name))
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: search.company ?? "all", onValueChange: (v) => navigate({
        search: (s) => ({
          ...s,
          company: v === "all" ? void 0 : v
        })
      }), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "w-[150px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Company" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "all", children: "All companies" }),
          companyMaster?.map((comp) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: comp.name, children: comp.name }, comp.name))
        ] })
      ] }),
      hasActiveFilters && /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "ghost", size: "sm", onClick: clearFilters, className: "h-9 px-2 text-muted-foreground hover:text-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4 mr-1" }),
        "Clear"
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-0 overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-muted/40 text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "text-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2.5 font-medium", children: "Asset Tag" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2.5 font-medium", children: "Category" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2.5 font-medium", children: "Product" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2.5 font-medium", children: "Serial" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2.5 font-medium", children: "Status" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2.5 font-medium", children: "Assigned To" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2.5 font-medium", children: "Aging" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2.5 font-medium", children: "Location" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2.5 font-medium text-right", children: "Actions" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { className: "divide-y", children: [
        isLoading && /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: 9, className: "px-4 py-8 text-center text-muted-foreground", children: "Loading…" }) }),
        !isLoading && !data?.length && /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { colSpan: 9, className: "px-4 py-12 text-center text-muted-foreground", children: [
          "No assets match your search filters. ",
          hasActiveFilters && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: clearFilters, className: "text-primary underline font-medium", children: "Clear filters" })
        ] }) }),
        data?.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-accent/40", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/assets/$id", params: {
            id: a.id
          }, className: "text-primary hover:underline font-medium", children: a.asset_tag }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5", children: getCategoryLabel(a.category) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium text-foreground", children: a.product_name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
              a.brand,
              " ",
              a.series
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5 font-mono text-xs", children: a.serial_number ?? "—" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-xs px-2 py-0.5 rounded-full border ${statusBadgeClass(a.status)}`, children: STATUS_LABEL[a.status] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: a.current_employee?.name ?? "—" }),
            a.current_employee?.department && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: a.current_employee.department })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5 text-muted-foreground whitespace-nowrap font-medium text-xs", children: calculateAging(a.purchase_date ?? a.created_at) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5 text-muted-foreground", children: a.location ?? "—" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5 text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "ghost", size: "sm", className: "h-8 px-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/assets/$id", params: {
            id: a.id
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "h-3.5 w-3.5 mr-1" }),
            "Edit"
          ] }) }) })
        ] }, a.id))
      ] })
    ] }) }) })
  ] });
}
export {
  AssetsPage as component
};
