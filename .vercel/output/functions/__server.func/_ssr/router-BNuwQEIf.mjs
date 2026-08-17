import { b as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { V as redirect } from "../_libs/tanstack__router-core.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { s as supabase } from "./client-ByslKVxo.mjs";
import { L as Laptop, M as MonitorSmartphone, C as Cpu, a as Monitor, K as Keyboard, b as Mouse, P as Printer, B as Box, N as Network, W as Wifi, R as Router, S as Server, c as Camera, H as HardDrive, d as Battery, e as Package, F as FolderPlus } from "../_libs/lucide-react.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "./server-CoGtXQa3.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
const appCss = "/assets/styles-mjRtcyjY.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$e = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Bora Multicorp Asset Management" },
      { name: "description", content: "Bora Multicorp Enterprise IT Asset Management System" },
      { name: "author", content: "Bora Multicorp" },
      { property: "og:title", content: "Bora Multicorp Asset Management" },
      { property: "og:description", content: "Bora Multicorp Enterprise IT Asset Management System" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("head", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "script",
        {
          dangerouslySetInnerHTML: {
            __html: `if (typeof window !== 'undefined' && typeof window.require === 'undefined') { window.require = function(module) { console.warn('Browser polyfill called for module:', module); return {}; }; }`
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$e.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) });
}
const $$splitComponentImporter$d = () => import("./index-BTU5dmpx.mjs");
const Route$d = createFileRoute()({
  beforeLoad: () => {
    throw redirect({
      to: "/dashboard"
    });
  },
  component: lazyRouteComponent($$splitComponentImporter$d, "component")
});
const $$splitComponentImporter$c = () => import("../_authenticated-BI7GXZ7A.mjs");
const Route$c = createFileRoute()({
  ssr: false,
  beforeLoad: async () => {
    const {
      data,
      error
    } = await supabase.auth.getUser();
    if (error || !data.user) throw redirect({
      to: "/auth"
    });
    return {
      user: data.user
    };
  },
  component: lazyRouteComponent($$splitComponentImporter$c, "component")
});
const $$splitComponentImporter$b = () => import("./auth-Dm2l_ZVV.mjs");
const Route$b = createFileRoute()({
  ssr: false,
  beforeLoad: async () => {
    const {
      data
    } = await supabase.auth.getSession();
    if (data.session) throw redirect({
      to: "/dashboard"
    });
  },
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
const $$splitComponentImporter$a = () => import("./assignments-DrmaEIPM.mjs");
const Route$a = createFileRoute()({
  head: () => ({
    meta: [{
      title: "Assignments — Bora Multicorp Asset Management"
    }, {
      name: "description",
      content: "Issue assets to employees, generate handover letters and record returns."
    }, {
      property: "og:title",
      content: "Assignments — Bora Multicorp Asset Management"
    }, {
      property: "og:description",
      content: "Issue assets to employees, generate handover letters and record returns."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("./audit-dGiUj4F6.mjs");
const Route$9 = createFileRoute()({
  head: () => ({
    meta: [{
      title: "Audit Log — IT Asset Manager"
    }, {
      name: "description",
      content: "Chronological record of every asset, employee and assignment change."
    }, {
      property: "og:title",
      content: "Audit Log — IT Asset Manager"
    }, {
      property: "og:description",
      content: "Chronological record of every asset, employee and assignment change."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./company-CxnNDe4e.mjs");
const Route$8 = createFileRoute()({
  head: () => ({
    meta: [{
      title: "Company — Bora Multicorp Asset Management"
    }, {
      name: "description",
      content: "Manage companies in your IT asset inventory."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./dashboard-DzBWvuSM.mjs");
const Route$7 = createFileRoute()({
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./department-BVvw_FLX.mjs");
const Route$6 = createFileRoute()({
  head: () => ({
    meta: [{
      title: "Department — Bora Multicorp Asset Management"
    }, {
      name: "description",
      content: "Manage departments in your IT asset inventory."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./employees-B-dPkv7X.mjs");
const Route$5 = createFileRoute()({
  head: () => ({
    meta: [{
      title: "Employees — Bora Multicorp Asset Management"
    }, {
      name: "description",
      content: "Employee directory for IT asset assignment and handover tracking."
    }, {
      property: "og:title",
      content: "Employees — Bora Multicorp Asset Management"
    }, {
      property: "og:description",
      content: "Employee directory for IT asset assignment and handover tracking."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./location-BuDIUXlZ.mjs");
const Route$4 = createFileRoute()({
  head: () => ({
    meta: [{
      title: "Location — Bora Multicorp Asset Management"
    }, {
      name: "description",
      content: "Manage locations in your IT asset inventory."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const BUILTIN_CATEGORIES = [
  { value: "laptop", label: "Laptop", icon: Laptop },
  { value: "desktop", label: "Desktop", icon: MonitorSmartphone },
  { value: "server_desktop", label: "Server Desktop", icon: Cpu },
  { value: "monitor", label: "Monitor", icon: Monitor },
  { value: "keyboard", label: "Keyboard", icon: Keyboard },
  { value: "mouse", label: "Mouse", icon: Mouse },
  { value: "printer", label: "Printer", icon: Printer },
  { value: "rack", label: "Rack", icon: Box },
  { value: "switch", label: "Switch", icon: Network },
  { value: "access_point", label: "Access Point", icon: Wifi },
  { value: "n_computing", label: "N-Computing", icon: Router },
  { value: "server", label: "Server", icon: Server },
  { value: "cctv", label: "CCTV", icon: Camera },
  { value: "storage_device", label: "Storage Device", icon: HardDrive },
  { value: "ups", label: "UPS", icon: Battery },
  { value: "other", label: "Other Assets", icon: Package }
];
const CATEGORIES = BUILTIN_CATEGORIES;
const CATEGORY_LABEL = Object.fromEntries(
  BUILTIN_CATEGORIES.map((c) => [c.value, c.label])
);
function getCustomCategories() {
  if (typeof window === "undefined") return [];
  try {
    const data = localStorage.getItem("custom_asset_categories");
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}
function getAllCategories() {
  const custom = getCustomCategories();
  const customItems = custom.map((c) => ({
    value: c.value,
    label: c.label,
    icon: FolderPlus,
    isCustom: true
  }));
  return [...BUILTIN_CATEGORIES, ...customItems];
}
function getCategoryLabel(val) {
  if (!val) return "";
  const all = getAllCategories();
  const found = all.find((c) => c.value === val);
  if (found) return found.label;
  return val.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
}
function addCustomCategory(label) {
  const trimmed = label.trim();
  if (!trimmed) throw new Error("Category name cannot be empty");
  const value = trimmed.toLowerCase().replace(/[^a-z0-9]+/g, "_");
  const all = getAllCategories();
  if (all.some((c) => c.value === value || c.label.toLowerCase() === trimmed.toLowerCase())) {
    throw new Error(`Category "${trimmed}" already exists`);
  }
  const custom = getCustomCategories();
  const newItem = { value, label: trimmed, isCustom: true };
  custom.push(newItem);
  localStorage.setItem("custom_asset_categories", JSON.stringify(custom));
  window.dispatchEvent(new Event("custom_categories_updated"));
  return { ...newItem, icon: FolderPlus };
}
function useCategories() {
  const [categories, setCategories] = reactExports.useState(getAllCategories());
  reactExports.useEffect(() => {
    const handleUpdate = () => setCategories(getAllCategories());
    window.addEventListener("custom_categories_updated", handleUpdate);
    window.addEventListener("storage", handleUpdate);
    return () => {
      window.removeEventListener("custom_categories_updated", handleUpdate);
      window.removeEventListener("storage", handleUpdate);
    };
  }, []);
  return categories;
}
const STATUSES = [
  { value: "available", label: "Available", tone: "bg-success/15 text-success border-success/20" },
  { value: "assigned", label: "Assigned", tone: "bg-primary/15 text-primary border-primary/20" },
  { value: "in_repair", label: "In Repair", tone: "bg-warning/15 text-warning-foreground border-warning/30" },
  { value: "returned", label: "Returned", tone: "bg-muted text-muted-foreground border-border" },
  { value: "damaged", label: "Damaged", tone: "bg-destructive/15 text-destructive border-destructive/20" },
  { value: "lost", label: "Lost", tone: "bg-destructive/15 text-destructive border-destructive/20" },
  { value: "disposed", label: "Disposed", tone: "bg-muted text-muted-foreground border-border" }
];
const STATUS_LABEL = Object.fromEntries(
  STATUSES.map((s) => [s.value, s.label])
);
function statusBadgeClass(s) {
  return STATUSES.find((x) => x.value === s)?.tone ?? "";
}
const $$splitComponentImporter$3 = () => import("./reports-CJjl7SU2.mjs");
const Route$3 = createFileRoute()({
  head: () => ({
    meta: [{
      title: "Reports — IT Asset Manager"
    }, {
      name: "description",
      content: "Monthly asset purchase analysis, warranty expiry, repair and inventory analytics."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./index-DtD6WBVk.mjs");
const Route$2 = createFileRoute()({
  validateSearch: (s) => ({
    category: s.category || void 0,
    status: s.status || void 0,
    location: s.location || void 0,
    department: s.department || void 0,
    company: s.company || void 0,
    q: s.q || void 0
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("../_id-DhZDCa6Z.mjs");
const Route$1 = createFileRoute()({
  head: () => ({
    meta: [{
      title: "Asset Details — IT Asset Manager"
    }, {
      name: "description",
      content: "View and edit an IT asset, its documents and assignment history."
    }, {
      property: "og:title",
      content: "Asset Details — IT Asset Manager"
    }, {
      property: "og:description",
      content: "View and edit an IT asset, its documents and assignment history."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./new-DRfQKBwG.mjs");
const Route = createFileRoute()({
  validateSearch: (s) => ({
    category: s.category || void 0
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const IndexRoute = Route$d.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$e
});
const AuthenticatedRoute = Route$c.update({
  id: "/_authenticated",
  getParentRoute: () => Route$e
});
const AuthRoute = Route$b.update({
  id: "/auth",
  path: "/auth",
  getParentRoute: () => Route$e
});
const AuthenticatedAssignmentsRoute = Route$a.update({
  id: "/assignments",
  path: "/assignments",
  getParentRoute: () => AuthenticatedRoute
});
const AuthenticatedAuditRoute = Route$9.update({
  id: "/audit",
  path: "/audit",
  getParentRoute: () => AuthenticatedRoute
});
const AuthenticatedCompanyRoute = Route$8.update({
  id: "/company",
  path: "/company",
  getParentRoute: () => AuthenticatedRoute
});
const AuthenticatedDashboardRoute = Route$7.update({
  id: "/dashboard",
  path: "/dashboard",
  getParentRoute: () => AuthenticatedRoute
});
const AuthenticatedDepartmentRoute = Route$6.update({
  id: "/department",
  path: "/department",
  getParentRoute: () => AuthenticatedRoute
});
const AuthenticatedEmployeesRoute = Route$5.update({
  id: "/employees",
  path: "/employees",
  getParentRoute: () => AuthenticatedRoute
});
const AuthenticatedLocationRoute = Route$4.update({
  id: "/location",
  path: "/location",
  getParentRoute: () => AuthenticatedRoute
});
const AuthenticatedReportsRoute = Route$3.update({
  id: "/reports",
  path: "/reports",
  getParentRoute: () => AuthenticatedRoute
});
const AuthenticatedAssetsIndexRoute = Route$2.update({
  id: "/assets/",
  path: "/assets/",
  getParentRoute: () => AuthenticatedRoute
});
const AuthenticatedAssetsIdRoute = Route$1.update({
  id: "/assets/$id",
  path: "/assets/$id",
  getParentRoute: () => AuthenticatedRoute
});
const AuthenticatedAssetsNewRoute = Route.update({
  id: "/assets/new",
  path: "/assets/new",
  getParentRoute: () => AuthenticatedRoute
});
const AuthenticatedRouteChildren = {
  AuthenticatedAssignmentsRoute,
  AuthenticatedAuditRoute,
  AuthenticatedCompanyRoute,
  AuthenticatedDashboardRoute,
  AuthenticatedDepartmentRoute,
  AuthenticatedEmployeesRoute,
  AuthenticatedLocationRoute,
  AuthenticatedReportsRoute,
  AuthenticatedAssetsIdRoute,
  AuthenticatedAssetsNewRoute,
  AuthenticatedAssetsIndexRoute
};
const AuthenticatedRouteWithChildren = AuthenticatedRoute._addFileChildren(
  AuthenticatedRouteChildren
);
const rootRouteChildren = {
  IndexRoute,
  AuthenticatedRoute: AuthenticatedRouteWithChildren,
  AuthRoute
};
const routeTree = Route$e._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  CATEGORIES as C,
  Route$2 as R,
  STATUSES as S,
  addCustomCategory as a,
  CATEGORY_LABEL as b,
  STATUS_LABEL as c,
  Route$1 as d,
  Route as e,
  getCategoryLabel as g,
  router as r,
  statusBadgeClass as s,
  useCategories as u
};
