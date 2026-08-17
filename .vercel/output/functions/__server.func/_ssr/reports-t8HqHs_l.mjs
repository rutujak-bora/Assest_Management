import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { a as useQuery } from "../_libs/tanstack__react-query.mjs";
import { s as supabase } from "./client-CIRo3Hyi.mjs";
import { C as Card, d as CardContent, a as CardHeader, b as CardTitle, c as CardDescription } from "./card-DQ5v2DYb.mjs";
import { B as Button } from "./button-BC9oXVxV.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { c as cn } from "./utils-H80jjgLf.mjs";
import { u as utils, w as writeFileSync } from "../_libs/xlsx.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { g as getCategoryLabel, c as STATUS_LABEL } from "./router-CXOTuEAP.mjs";
import "../_libs/seroval.mjs";
import { v as FileDown, O as ShoppingBag, G as ShieldAlert, Q as DollarSign, V as TrendingUp, Y as Calendar, Z as ChartColumn, D as Wrench, _ as PackageCheck } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__query-core.mjs";
import "./server-C-MZQjZi.mjs";
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
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({ className, variant, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn(badgeVariants({ variant }), className), ...props });
}
function exportRows(rows, name) {
  if (!rows.length) return toast.info("Nothing to export");
  const wb = utils.book_new();
  utils.book_append_sheet(wb, utils.json_to_sheet(rows), name.slice(0, 30));
  writeFileSync(wb, `${name}_${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.xlsx`);
}
function calculateMonthlyPurchases(list) {
  const map = {};
  list.forEach((a) => {
    const rawDate = a.purchase_date || a.created_at;
    if (!rawDate) return;
    const date = new Date(rawDate);
    if (isNaN(date.getTime())) return;
    const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
    if (!map[key]) {
      map[key] = {
        count: 0,
        totalCost: 0,
        catCounts: {}
      };
    }
    map[key].count += 1;
    map[key].totalCost += Number(a.purchase_price) || 0;
    const cat = a.category ?? "other";
    map[key].catCounts[cat] = (map[key].catCounts[cat] ?? 0) + 1;
  });
  return Object.entries(map).sort((a, b) => b[0].localeCompare(a[0])).map(([key, data]) => {
    const [year, month] = key.split("-");
    const d = new Date(Number(year), Number(month) - 1, 1);
    const monthLabel = d.toLocaleString("default", {
      month: "long",
      year: "numeric"
    });
    const topCatEntry = Object.entries(data.catCounts).sort((a, b) => b[1] - a[1])[0];
    const topCatLabel = topCatEntry ? getCategoryLabel(topCatEntry[0]) : "—";
    return {
      monthKey: key,
      monthLabel,
      count: data.count,
      totalCost: data.totalCost,
      avgCost: data.count ? Math.round(data.totalCost / data.count) : 0,
      topCategory: topCatLabel
    };
  });
}
function ReportsPage() {
  const {
    data: assets
  } = useQuery({
    queryKey: ["assets", "report"],
    queryFn: async () => {
      const {
        data,
        error
      } = await supabase.from("assets").select("*, current_employee:employees(name, employee_code)").limit(2e3);
      if (error) throw error;
      return data ?? [];
    }
  });
  const list = assets ?? [];
  const today = /* @__PURE__ */ new Date();
  const in60 = new Date(today.getTime() + 60 * 864e5);
  const expiring = list.filter((a) => a.warranty_end && new Date(a.warranty_end) >= today && new Date(a.warranty_end) <= in60);
  const expired = list.filter((a) => a.warranty_end && new Date(a.warranty_end) < today);
  const inRepair = list.filter((a) => a.status === "in_repair" || a.status === "damaged");
  const byCategory = Object.entries(list.reduce((acc, a) => ({
    ...acc,
    [a.category]: (acc[a.category] ?? 0) + 1
  }), {})).sort((a, b) => b[1] - a[1]);
  const byStatus = Object.entries(list.reduce((acc, a) => ({
    ...acc,
    [a.status]: (acc[a.status] ?? 0) + 1
  }), {})).sort((a, b) => b[1] - a[1]);
  const totalValue = list.reduce((s, a) => s + (Number(a.purchase_price) || 0), 0);
  const monthlyPurchases = calculateMonthlyPurchases(list);
  const maxMonthlySpend = Math.max(...monthlyPurchases.map((m) => m.totalCost), 1);
  const assetRows = (rows) => rows.map((a) => ({
    "Asset Tag": a.asset_tag,
    Category: getCategoryLabel(a.category),
    Product: a.product_name,
    Serial: a.serial_number,
    Status: STATUS_LABEL[a.status],
    "Warranty End": a.warranty_end,
    "Assigned To": a.current_employee?.name ?? "",
    Location: a.location,
    Vendor: a.vendor_name,
    Price: a.purchase_price
  }));
  const Section = ({
    title,
    icon: Icon,
    rows,
    name,
    emptyText,
    headerBg
  }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "overflow-hidden border shadow-sm transition-all hover:shadow-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: `flex flex-row items-center justify-between space-y-0 p-4 border-b ${headerBg ?? "bg-slate-50 dark:bg-slate-900/50"}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-base font-semibold", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-1.5 rounded-lg bg-primary/10 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent", children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "font-mono text-xs ml-1", children: rows.length })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", className: "h-8 text-xs bg-background/80 hover:bg-background", onClick: () => exportRows(assetRows(rows), name), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FileDown, { className: "h-3.5 w-3.5 mr-1.5 text-primary" }),
        "Export"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-0 overflow-x-auto", children: !rows.length ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "px-6 py-6 text-sm text-muted-foreground", children: emptyText }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-muted/30 text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "text-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2.5 font-medium", children: "Asset Tag" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2.5 font-medium", children: "Product" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2.5 font-medium", children: "Status" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2.5 font-medium", children: "Warranty End" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2.5 font-medium", children: "Assigned To" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y", children: rows.slice(0, 25).map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-accent/40 transition-colors", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5 font-medium font-mono text-xs text-primary", children: a.asset_tag }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5 font-medium", children: a.product_name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5", children: STATUS_LABEL[a.status] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5 text-muted-foreground", children: a.warranty_end ?? "—" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5 text-muted-foreground", children: a.current_employee?.name ?? "—" })
      ] }, a.id)) })
    ] }) })
  ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2 flex-wrap pb-2 border-b", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent", children: "Reports & Analytics" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-0.5", children: "Asset purchase analysis, warranty tracking, and downloadable inventory reports." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: () => exportRows(assetRows(list), "full_inventory"), className: "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-md transition-all", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FileDown, { className: "h-4 w-4 mr-2" }),
        "Export Full Inventory"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "relative overflow-hidden border border-blue-500/20 bg-gradient-to-br from-blue-50/50 via-background to-blue-500/5 dark:from-blue-950/20 dark:to-blue-900/10 shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider", children: "Total Assets" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "h-4 w-4" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-bold mt-2 bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent", children: list.length }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Across all categories" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "relative overflow-hidden border border-amber-500/20 bg-gradient-to-br from-amber-50/50 via-background to-amber-500/5 dark:from-amber-950/20 dark:to-amber-900/10 shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider", children: "Expiring (60d)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldAlert, { className: "h-4 w-4" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-bold mt-2 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent", children: expiring.length }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Needs warranty renewal" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "relative overflow-hidden border border-rose-500/20 bg-gradient-to-br from-rose-50/50 via-background to-rose-500/5 dark:from-rose-950/20 dark:to-rose-900/10 shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-rose-600 dark:text-rose-400 uppercase tracking-wider", children: "Warranty Expired" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 rounded-lg bg-rose-500/10 text-rose-600 dark:text-rose-400", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldAlert, { className: "h-4 w-4" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-bold mt-2 bg-gradient-to-r from-rose-600 to-red-600 bg-clip-text text-transparent", children: expired.length }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Lapsed warranty coverage" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "relative overflow-hidden border border-emerald-500/20 bg-gradient-to-br from-emerald-50/50 via-background to-emerald-500/5 dark:from-emerald-950/20 dark:to-emerald-900/10 shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider", children: "Total Purchase Value" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400", children: /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { className: "h-4 w-4" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-3xl font-bold mt-2 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent", children: [
          "₹",
          totalValue.toLocaleString(void 0, {
            maximumFractionDigits: 0
          })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Total invested capital" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border border-purple-500/20 bg-gradient-to-br from-purple-50/30 via-background to-indigo-50/20 dark:from-purple-950/20 dark:to-indigo-950/10 shadow-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 border-b bg-purple-500/5 p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-lg font-bold flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-5 w-5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-to-r from-purple-700 via-indigo-700 to-blue-700 dark:from-purple-300 dark:to-indigo-300 bg-clip-text text-transparent", children: "Monthly Asset Purchase Analysis Report" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { className: "text-xs", children: "Breakdown of assets acquired per month, expenditure trend, and top category investments." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", onClick: () => exportRows(monthlyPurchases.map((m) => ({
          Month: m.monthLabel,
          "Quantity Purchased": m.count,
          "Total Expenditure (₹)": m.totalCost,
          "Average Cost / Asset (₹)": m.avgCost,
          "Top Purchased Category": m.topCategory
        })), "monthly_purchase_analysis"), className: "bg-background/80 hover:bg-background border-purple-200 dark:border-purple-800", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FileDown, { className: "h-4 w-4 mr-1.5 text-purple-600" }),
          "Export Monthly Report"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-0 overflow-x-auto", children: !monthlyPurchases.length ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "p-6 text-sm text-muted-foreground", children: "No purchase data recorded yet." }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-purple-500/10 text-muted-foreground text-xs font-semibold uppercase tracking-wider", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "text-left border-b border-purple-100 dark:border-purple-900/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3", children: "Month" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3", children: "Assets Acquired" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3", children: "Total Spend (₹)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3", children: "Avg Cost / Asset" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3", children: "Top Category" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 min-w-[140px]", children: "Spend Trend" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-purple-100/50 dark:divide-purple-900/30", children: monthlyPurchases.map((m) => {
          const percent = Math.round(m.totalCost / maxMonthlySpend * 100);
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-purple-500/5 transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-3 font-semibold text-foreground flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-4 w-4 text-purple-500 shrink-0" }),
              m.monthLabel
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", className: "font-mono bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300", children: [
              m.count,
              " ",
              m.count === 1 ? "asset" : "assets"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-3 font-bold text-foreground font-mono", children: [
              "₹",
              m.totalCost.toLocaleString()
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-3 text-muted-foreground font-mono text-xs", children: [
              "₹",
              m.avgCost.toLocaleString()
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-sm font-medium text-indigo-600 dark:text-indigo-400", children: m.topCategory }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full bg-purple-100 dark:bg-purple-950 rounded-full h-2 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gradient-to-r from-purple-500 to-indigo-500 h-2 rounded-full transition-all duration-500", style: {
              width: `${Math.max(percent, 4)}%`
            } }) }) }) })
          ] }, m.monthKey);
        }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border border-blue-500/20 bg-gradient-to-br from-blue-50/20 via-background to-indigo-50/10 shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 border-b bg-blue-500/5 p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-base font-semibold flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChartColumn, { className: "h-4 w-4 text-blue-600" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-to-r from-blue-700 to-indigo-700 dark:from-blue-300 dark:to-indigo-300 bg-clip-text text-transparent", children: "Assets by Category" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", onClick: () => exportRows(byCategory.map(([k, v]) => ({
            Category: getCategoryLabel(k),
            Count: v
          })), "assets_by_category"), className: "h-8 text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FileDown, { className: "h-3.5 w-3.5 mr-1.5 text-blue-600" }),
            "Export"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4 space-y-3", children: [
          byCategory.map(([k, v]) => {
            const pct = Math.round(v / (list.length || 1) * 100);
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: getCategoryLabel(k) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-mono font-bold text-muted-foreground", children: [
                  v,
                  " (",
                  pct,
                  "%)"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full bg-blue-100 dark:bg-blue-950 rounded-full h-1.5 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gradient-to-r from-blue-500 to-indigo-500 h-1.5 rounded-full", style: {
                width: `${pct}%`
              } }) })
            ] }, k);
          }),
          !byCategory.length && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "No data yet." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border border-indigo-500/20 bg-gradient-to-br from-indigo-50/20 via-background to-purple-50/10 shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 border-b bg-indigo-500/5 p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-base font-semibold flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChartColumn, { className: "h-4 w-4 text-indigo-600" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-to-r from-indigo-700 to-purple-700 dark:from-indigo-300 dark:to-purple-300 bg-clip-text text-transparent", children: "Assets by Status" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", onClick: () => exportRows(byStatus.map(([k, v]) => ({
            Status: STATUS_LABEL[k],
            Count: v
          })), "assets_by_status"), className: "h-8 text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FileDown, { className: "h-3.5 w-3.5 mr-1.5 text-indigo-600" }),
            "Export"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4 space-y-3", children: [
          byStatus.map(([k, v]) => {
            const pct = Math.round(v / (list.length || 1) * 100);
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: STATUS_LABEL[k] || k }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-mono font-bold text-muted-foreground", children: [
                  v,
                  " (",
                  pct,
                  "%)"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full bg-indigo-100 dark:bg-indigo-950 rounded-full h-1.5 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gradient-to-r from-indigo-500 to-purple-500 h-1.5 rounded-full", style: {
                width: `${pct}%`
              } }) })
            ] }, k);
          }),
          !byStatus.length && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "No data yet." })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "Warranty Expiring Soon (60 Days)", icon: ShieldAlert, rows: expiring, name: "warranty_expiring", emptyText: "No warranties expiring in the next 60 days.", headerBg: "bg-amber-500/10 dark:bg-amber-950/20" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "Warranty Expired", icon: ShieldAlert, rows: expired, name: "warranty_expired", emptyText: "No expired warranties.", headerBg: "bg-rose-500/10 dark:bg-rose-950/20" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "In Repair / Damaged", icon: Wrench, rows: inRepair, name: "repair_report", emptyText: "No assets currently in repair.", headerBg: "bg-orange-500/10 dark:bg-orange-950/20" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "Assigned Assets", icon: PackageCheck, rows: list.filter((a) => a.status === "assigned"), name: "assigned_assets", emptyText: "No assets are currently assigned.", headerBg: "bg-blue-500/10 dark:bg-blue-950/20" })
  ] });
}
export {
  calculateMonthlyPurchases,
  ReportsPage as component
};
