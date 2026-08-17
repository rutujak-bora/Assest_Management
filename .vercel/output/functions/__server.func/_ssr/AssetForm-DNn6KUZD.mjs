import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useQueryClient } from "../_libs/tanstack__react-query.mjs";
import { s as supabase } from "./client-CIRo3Hyi.mjs";
import { C as Card, d as CardContent } from "./card-DQ5v2DYb.mjs";
import { I as Input } from "./input-C0QjszdI.mjs";
import { L as Label } from "./label-JU3yqRBo.mjs";
import { B as Button } from "./button-BC9oXVxV.mjs";
import { T as Textarea } from "./textarea-DSyJ1nlY.mjs";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-CZRUt5a6.mjs";
import { u as useCategories, g as getCategoryLabel, S as STATUSES } from "./router-CXOTuEAP.mjs";
import { c as calculateAging } from "./aging-BbuLCJRm.mjs";
import { u as useMaster } from "./localMaster-CYB958lY.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { a2 as RefreshCw, a3 as CircleAlert, a4 as Clock } from "../_libs/lucide-react.mjs";
function getCategoryPrefix(cat) {
  const map = {
    laptop: "LAP",
    server: "SER",
    desktop: "DES",
    server_desktop: "SDT",
    monitor: "MON",
    keyboard: "KEY",
    mouse: "MOU",
    printer: "PRN",
    rack: "RAC",
    access_point: "AP",
    n_computing: "NCO",
    cctv: "CCT",
    storage_device: "STO",
    ups: "UPS",
    other: "AST"
  };
  if (map[cat]) return map[cat];
  const cleaned = cat.replace(/[^a-zA-Z]/g, "").toUpperCase();
  return cleaned.slice(0, 3) || "AST";
}
async function generateNextAssetTag(cat) {
  const prefix = getCategoryPrefix(cat);
  const { data } = await supabase.from("assets").select("asset_tag").ilike("asset_tag", `${prefix}-%`);
  let maxNum = 0;
  if (data) {
    for (const item of data) {
      const match = item.asset_tag.match(new RegExp(`^${prefix}-(\\d+)`, "i"));
      if (match) {
        const num = parseInt(match[1], 10);
        if (num > maxNum) maxNum = num;
      }
    }
  }
  const nextNum = (maxNum + 1).toString().padStart(3, "0");
  return `${prefix}-${nextNum}`;
}
function F({ label, children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-muted-foreground", children: label }),
    children
  ] });
}
function AssetForm({
  initial,
  lockCategory,
  onSaved
}) {
  const qc = useQueryClient();
  const categories = useCategories();
  const [saving, setSaving] = reactExports.useState(false);
  const [generatingTag, setGeneratingTag] = reactExports.useState(false);
  const [serialError, setSerialError] = reactExports.useState(null);
  const [v, setV] = reactExports.useState({
    asset_tag: initial?.asset_tag ?? "",
    category: initial?.category ?? "laptop",
    product_name: initial?.product_name ?? "",
    status: initial?.status ?? "available",
    ...initial
  });
  const set = (k, val) => setV((p) => ({ ...p, [k]: val }));
  const locationMaster = useMaster("locations");
  const companyMaster = useMaster("companies");
  const autoGenerateTag = async (cat) => {
    if (v.id || initial?.asset_tag) return;
    setGeneratingTag(true);
    try {
      const newTag = await generateNextAssetTag(cat);
      setV((p) => ({ ...p, asset_tag: newTag }));
    } catch (e) {
      console.error("Tag generation failed", e);
    } finally {
      setGeneratingTag(false);
    }
  };
  reactExports.useEffect(() => {
    if (!v.id && !initial?.asset_tag) {
      autoGenerateTag(v.category);
    }
  }, [v.category]);
  const validateSerialNumber = async (serial) => {
    if (!serial || !serial.trim()) {
      setSerialError(null);
      return true;
    }
    const trimmed = serial.trim();
    let q = supabase.from("assets").select("id, asset_tag").eq("serial_number", trimmed);
    if (v.id) q = q.neq("id", v.id);
    const { data } = await q;
    if (data && data.length > 0) {
      const err = `Serial number "${trimmed}" is already assigned to asset (${data[0].asset_tag})`;
      setSerialError(err);
      return false;
    }
    setSerialError(null);
    return true;
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    if (!v.asset_tag || !v.product_name) {
      return toast.error("Category, Asset Tag, and Product Name are required");
    }
    const serialValid = await validateSerialNumber(v.serial_number);
    if (!serialValid) {
      return toast.error(serialError ?? "Serial number must be unique");
    }
    setSaving(true);
    const payload = { ...v, purchase_price: v.purchase_price ? Number(v.purchase_price) : null };
    let res;
    if (v.id) res = await supabase.from("assets").update(payload).eq("id", v.id).select("id").single();
    else res = await supabase.from("assets").insert(payload).select("id").single();
    setSaving(false);
    if (res.error) {
      if (res.error.message.includes("serial_number")) {
        setSerialError("Serial number already exists");
        return toast.error("Serial number already exists");
      }
      return toast.error(res.error.message);
    }
    toast.success(v.id ? "Asset updated" : "Asset created");
    qc.invalidateQueries({ queryKey: ["assets"] });
    onSaved(res.data.id);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, className: "grid md:grid-cols-2 gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(F, { label: "Category *", children: lockCategory ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-9 px-3 py-1.5 rounded-md border bg-muted/40 text-sm font-medium flex items-center text-foreground cursor-not-allowed select-none", children: getCategoryLabel(v.category) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: v.category, onValueChange: (x) => set("category", x), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select Category" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: categories.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: c.value, children: c.label }, c.value)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(F, { label: "Asset Tag / Asset ID *", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          value: v.asset_tag,
          onChange: (e) => set("asset_tag", e.target.value),
          placeholder: "e.g. LAP-001",
          required: true
        }
      ),
      !v.id && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => autoGenerateTag(v.category),
          title: "Regenerate unique Asset ID",
          className: "absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground p-1",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: `h-3.5 w-3.5 ${generatingTag ? "animate-spin" : ""}` })
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(F, { label: "Serial Number", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          value: v.serial_number ?? "",
          onChange: (e) => {
            set("serial_number", e.target.value);
            validateSerialNumber(e.target.value);
          },
          onBlur: (e) => validateSerialNumber(e.target.value),
          placeholder: "Unique serial number",
          className: serialError ? "border-destructive focus-visible:ring-destructive" : ""
        }
      ),
      serialError && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-xs text-destructive mt-0.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-3 w-3 shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: serialError })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(F, { label: "Product Name *", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: v.product_name, onChange: (e) => set("product_name", e.target.value), required: true }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(F, { label: "Product Type", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: v.product_type ?? "", onChange: (e) => set("product_type", e.target.value), placeholder: "e.g. Laptop, All-in-One..." }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(F, { label: "Brand / Company", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: v.brand ?? "", onChange: (e) => set("brand", e.target.value), placeholder: "e.g. Dell, HP, Lenovo..." }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(F, { label: "Series", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: v.series ?? "", onChange: (e) => set("series", e.target.value), placeholder: "e.g. Latitude, ThinkPad..." }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(F, { label: "Configuration", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { rows: 2, value: v.configuration ?? "", onChange: (e) => set("configuration", e.target.value), placeholder: "CPU, RAM, Storage, GPU specs..." }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(F, { label: "Location", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: v.location ?? "", onValueChange: (val) => set("location", val), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select Location from master" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: locationMaster?.map((loc) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: loc.name, children: loc.name }, loc.name)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(F, { label: "Company", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: v.company ?? "", onValueChange: (val) => set("company", val), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select Company from master" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: companyMaster?.map((comp) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: comp.name, children: comp.name }, comp.name)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(F, { label: "Purchase From", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: v.purchase_from ?? "", onChange: (e) => set("purchase_from", e.target.value), placeholder: "Vendor / Store name" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(F, { label: "Invoice Number", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: v.invoice_number ?? "", onChange: (e) => set("invoice_number", e.target.value) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(F, { label: "Price", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", step: "0.01", value: v.purchase_price ?? "", onChange: (e) => set("purchase_price", e.target.value === "" ? null : Number(e.target.value)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(F, { label: "Purchase Date", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "date", value: v.purchase_date ?? "", onChange: (e) => set("purchase_date", e.target.value || null) }),
      v.purchase_date && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-xs text-muted-foreground font-medium pt-0.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3.5 w-3.5 text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          "Asset Age: ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: calculateAging(v.purchase_date) })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(F, { label: "Warranty Start", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "date", value: v.warranty_start ?? "", onChange: (e) => set("warranty_start", e.target.value || null) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(F, { label: "Warranty End", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "date", value: v.warranty_end ?? "", onChange: (e) => set("warranty_end", e.target.value || null) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(F, { label: "Status", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: v.status, onValueChange: (x) => set("status", x), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: STATUSES.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: s.value, children: s.label }, s.value)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-2 flex justify-end gap-2 pt-2 border-t", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", disabled: saving || !!serialError, children: saving ? "Saving…" : v.id ? "Update Asset" : "Create Asset" }) })
  ] }) }) });
}
export {
  AssetForm as A
};
