import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { e as useNavigate, u as useRouter } from "../_libs/tanstack__react-router.mjs";
import { I as isRedirect } from "../_libs/tanstack__router-core.mjs";
import { s as supabase, c as createSsrRpc } from "./client-HNLhiZLv.mjs";
import { a as createServerFn } from "./server-DAWPy2FY.mjs";
import { C as Card, a as CardHeader, b as CardTitle, c as CardDescription, d as CardContent } from "./card-DQ5v2DYb.mjs";
import { I as Input } from "./input-C0QjszdI.mjs";
import { L as Label } from "./label-JU3yqRBo.mjs";
import { B as Button } from "./button-BC9oXVxV.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import "../_libs/seroval.mjs";
import { f as Building2, q as LoaderCircle } from "../_libs/lucide-react.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "./utils-H80jjgLf.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/radix-ui__react-label.mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
function useServerFn(serverFn) {
  const router = useRouter();
  return reactExports.useCallback(async (...args) => {
    try {
      const res = await serverFn(...args);
      if (isRedirect(res)) throw res;
      return res;
    } catch (err) {
      if (isRedirect(err)) {
        err.options._fromLocation = router.stores.location.get();
        return router.navigate(router.resolveRedirect(err).options);
      }
      throw err;
    }
  }, [router, serverFn]);
}
const seedDefaultUsers = createServerFn({
  method: "POST"
}).handler(createSsrRpc("e290cc98557908cfb5f64f92732a26790fdb57d959705b95ba53c60da4d876b5"));
function AuthPage() {
  const navigate = useNavigate();
  const seed = useServerFn(seedDefaultUsers);
  const [email, setEmail] = reactExports.useState("shahid@bora.tech");
  const [password, setPassword] = reactExports.useState("shahid@123");
  const [loading, setLoading] = reactExports.useState(false);
  reactExports.useEffect(() => {
    try {
      seed({}).catch((e) => console.log("[Seed Notice]:", e));
    } catch {
    }
  }, [seed]);
  const onSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) return;
    setLoading(true);
    try {
      const {
        error
      } = await supabase.auth.signInWithPassword({
        email,
        password
      });
      setLoading(false);
      if (error) {
        toast.error(error.message || "Failed to sign in");
        return;
      }
      toast.success("Welcome back");
      navigate({
        to: "/dashboard",
        replace: true
      });
    } catch (err) {
      setLoading(false);
      toast.error(err?.message || "Sign in failed");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen grid lg:grid-cols-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden lg:flex flex-col justify-between p-12 bg-gradient-to-br from-primary to-info text-primary-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-9 w-9 items-center justify-center rounded-md bg-white/15 backdrop-blur", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold tracking-tight", children: "Asset Manager" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 max-w-md", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-bold leading-tight", children: "Track every laptop, license & cable." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/85", children: "Centralized IT asset & inventory management for your organization — from purchase to handover, repair, and retirement." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-primary-foreground/70", children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Corporate IT • Internal use only"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center p-6 sm:p-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "w-full max-w-md shadow-lg border-border/60", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-2xl", children: "Sign in" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Authorized IT staff only. Demo credentials are pre-filled." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "email", children: "Email" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "email", type: "email", autoComplete: "email", required: true, value: email, onChange: (e) => setEmail(e.target.value) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "password", children: "Password" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "password", type: "password", autoComplete: "current-password", required: true, value: password, onChange: (e) => setPassword(e.target.value) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", className: "w-full", disabled: loading, children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : "Sign in" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 rounded-md border bg-muted/30 p-3 text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium text-foreground mb-1", children: "Demo accounts" }),
          "shahid@bora.tech / shahid@123",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "pravin@bora.tech / pravin@123"
        ] })
      ] })
    ] }) })
  ] });
}
export {
  AuthPage as component
};
