import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { a as useQuery } from "../_libs/tanstack__react-query.mjs";
import { s as supabase } from "./client-ByslKVxo.mjs";
import { C as Card, d as CardContent, a as CardHeader, b as CardTitle } from "./card-DQ5v2DYb.mjs";
import { C as CATEGORIES, b as CATEGORY_LABEL, S as STATUSES, s as statusBadgeClass } from "./router-BNuwQEIf.mjs";
import "../_libs/seroval.mjs";
import { h as Boxes, U as Users, s as CircleCheck, D as Wrench, E as RotateCcw, G as ShieldAlert, I as ShoppingCart, J as TriangleAlert } from "../_libs/lucide-react.mjs";
import { R as ResponsiveContainer, B as BarChart, X as XAxis, Y as YAxis, T as Tooltip, a as Bar, P as PieChart, b as Pie, C as Cell } from "../_libs/recharts.mjs";
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
import "./server-CoGtXQa3.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "./utils-H80jjgLf.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/lodash.mjs";
import "../_libs/tiny-invariant.mjs";
import "../_libs/react-is.mjs";
import "../_libs/d3-shape.mjs";
import "../_libs/d3-path.mjs";
import "../_libs/react-smooth.mjs";
import "../_libs/prop-types.mjs";
import "../_libs/fast-equals.mjs";
import "../_libs/victory-vendor.mjs";
import "../_libs/d3-scale.mjs";
import "../_libs/internmap.mjs";
import "../_libs/d3-array.mjs";
import "../_libs/d3-time-format.mjs";
import "../_libs/d3-time.mjs";
import "../_libs/d3-interpolate.mjs";
import "../_libs/d3-color.mjs";
import "../_libs/d3-format.mjs";
import "../_libs/recharts-scale.mjs";
import "../_libs/decimal.js-light.mjs";
import "../_libs/eventemitter3.mjs";
function Dashboard() {
  const {
    data,
    isLoading
  } = useQuery({
    queryKey: ["dashboard-stats"],
    queryFn: async () => {
      const today = /* @__PURE__ */ new Date();
      const monthStart = new Date(today.getFullYear(), today.getMonth(), 1).toISOString();
      const [all, assigned, available, repair, returned, expired, monthBuy, assignments] = await Promise.all([supabase.from("assets").select("id, category, status", {
        count: "exact"
      }), supabase.from("assets").select("id", {
        count: "exact",
        head: true
      }).eq("status", "assigned"), supabase.from("assets").select("id", {
        count: "exact",
        head: true
      }).eq("status", "available"), supabase.from("assets").select("id", {
        count: "exact",
        head: true
      }).eq("status", "in_repair"), supabase.from("assets").select("id", {
        count: "exact",
        head: true
      }).eq("status", "returned"), supabase.from("assets").select("id", {
        count: "exact",
        head: true
      }).lt("warranty_end", (/* @__PURE__ */ new Date()).toISOString().slice(0, 10)), supabase.from("assets").select("id", {
        count: "exact",
        head: true
      }).gte("purchase_date", monthStart.slice(0, 10)), supabase.from("asset_assignments").select("employee_id, employees(name)").eq("status", "active")]);
      const rows = all.data ?? [];
      const byCat = CATEGORIES.map((c) => ({
        name: c.label,
        value: rows.filter((r) => r.category === c.value).length
      }));
      const byStatus = STATUSES.map((s) => ({
        name: s.label,
        value: rows.filter((r) => r.status === s.value).length
      }));
      const byUser = {};
      for (const a of assignments.data ?? []) {
        const nm = a.employees?.name ?? "Unknown";
        byUser[nm] = (byUser[nm] ?? 0) + 1;
      }
      const userChart = Object.entries(byUser).map(([name, value]) => ({
        name,
        value
      })).slice(0, 8);
      return {
        total: all.count ?? 0,
        assigned: assigned.count ?? 0,
        available: available.count ?? 0,
        repair: repair.count ?? 0,
        returned: returned.count ?? 0,
        expired: expired.count ?? 0,
        monthBuy: monthBuy.count ?? 0,
        byCat,
        byStatus,
        userChart
      };
    }
  });
  const stats = [{
    label: "Total Assets",
    value: data?.total ?? 0,
    icon: Boxes,
    tone: "text-primary bg-primary/10"
  }, {
    label: "Assigned",
    value: data?.assigned ?? 0,
    icon: Users,
    tone: "text-info bg-info/10"
  }, {
    label: "Available",
    value: data?.available ?? 0,
    icon: CircleCheck,
    tone: "text-success bg-success/10"
  }, {
    label: "In Repair",
    value: data?.repair ?? 0,
    icon: Wrench,
    tone: "text-warning bg-warning/10"
  }, {
    label: "Returned",
    value: data?.returned ?? 0,
    icon: RotateCcw,
    tone: "text-muted-foreground bg-muted"
  }, {
    label: "Warranty Expired",
    value: data?.expired ?? 0,
    icon: ShieldAlert,
    tone: "text-destructive bg-destructive/10"
  }, {
    label: "Bought This Month",
    value: data?.monthBuy ?? 0,
    icon: ShoppingCart,
    tone: "text-primary bg-primary/10"
  }, {
    label: "Alerts",
    value: (data?.repair ?? 0) + (data?.expired ?? 0),
    icon: TriangleAlert,
    tone: "text-warning bg-warning/10"
  }];
  const COLORS = ["#2563eb", "#16a34a", "#f59e0b", "#0ea5e9", "#ef4444", "#8b5cf6", "#10b981", "#f97316"];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-semibold tracking-tight", children: "Dashboard" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Real-time overview of your IT asset inventory." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/assets", search: {}, className: "text-sm text-primary hover:underline", children: "View all assets →" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-3", children: stats.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border-border/60", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4 flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-10 w-10 rounded-md flex items-center justify-center ${s.tone}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "h-5 w-5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: s.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-semibold leading-tight", children: isLoading ? "…" : s.value })
      ] })
    ] }) }, s.label)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base", children: "Assets by Category" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "h-72", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(BarChart, { data: data?.byCat ?? [], margin: {
          left: -10,
          right: 8,
          top: 8,
          bottom: 24
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "name", angle: -30, textAnchor: "end", interval: 0, fontSize: 10, stroke: "currentColor", opacity: 0.5 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { allowDecimals: false, fontSize: 11, stroke: "currentColor", opacity: 0.5 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { cursor: {
            fill: "var(--accent)"
          }, contentStyle: {
            background: "var(--popover)",
            border: "1px solid var(--border)",
            borderRadius: 8
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "value", radius: [6, 6, 0, 0], fill: "var(--primary)" })
        ] }) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base", children: "Asset Status" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "h-72", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(PieChart, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Pie, { data: (data?.byStatus ?? []).filter((d) => d.value > 0), dataKey: "value", nameKey: "name", innerRadius: 50, outerRadius: 90, paddingAngle: 2, children: (data?.byStatus ?? []).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { fill: COLORS[i % COLORS.length] }, i)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { contentStyle: {
            background: "var(--popover)",
            border: "1px solid var(--border)",
            borderRadius: 8
          } })
        ] }) }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base", children: "Quick categories" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2", children: CATEGORIES.map((c) => {
        const count = data?.byCat.find((b) => b.name === CATEGORY_LABEL[c.value])?.value ?? 0;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/assets", search: {
          category: c.value
        }, className: "group rounded-md border bg-card p-3 hover:border-primary/50 hover:bg-accent transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(c.icon, { className: "h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-xs text-muted-foreground", children: c.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-semibold", children: count })
        ] }, c.value);
      }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base", children: "Recent status snapshot" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: STATUSES.map((s) => {
        const v = data?.byStatus.find((x) => x.name === s.label)?.value ?? 0;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `text-xs px-2.5 py-1 rounded-full border ${statusBadgeClass(s.value)}`, children: [
          s.label,
          ": ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: v })
        ] }, s.value);
      }) }) })
    ] })
  ] });
}
export {
  Dashboard as component
};
