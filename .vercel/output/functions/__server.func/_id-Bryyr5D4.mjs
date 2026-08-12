import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { e as useNavigate, L as Link } from "./_libs/tanstack__react-router.mjs";
import { u as useQueryClient, a as useQuery } from "./_libs/tanstack__react-query.mjs";
import { s as supabase } from "./_ssr/client-D76ZucV6.mjs";
import { A as AssetForm } from "./_ssr/AssetForm-DBEJVGlx.mjs";
import { C as Card, a as CardHeader, b as CardTitle, d as CardContent } from "./_ssr/card-DQ5v2DYb.mjs";
import { B as Button } from "./_ssr/button-BC9oXVxV.mjs";
import { t as toast } from "./_libs/sonner.mjs";
import { d as Route$1, b as CATEGORY_LABEL, c as STATUS_LABEL, s as statusBadgeClass } from "./_ssr/router-CKJq_8IO.mjs";
import { l as logAudit } from "./_ssr/audit-Dku7GlcA.mjs";
import "./_libs/seroval.mjs";
import { $ as ArrowLeft, T as Trash2, a0 as Paperclip, a1 as Upload, v as FileDown } from "./_libs/lucide-react.mjs";
import "./_libs/tanstack__router-core.mjs";
import "./_libs/tanstack__history.mjs";
import "./_libs/cookie-es.mjs";
import "./_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "./_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "./_libs/isbot.mjs";
import "./_libs/tanstack__query-core.mjs";
import "./_ssr/server-C7RKI9g9.mjs";
import "node:async_hooks";
import "./_libs/h3-v2.mjs";
import "./_libs/rou3.mjs";
import "./_libs/srvx.mjs";
import "./_ssr/input-C0QjszdI.mjs";
import "./_ssr/utils-H80jjgLf.mjs";
import "./_libs/clsx.mjs";
import "./_libs/tailwind-merge.mjs";
import "./_ssr/label-JU3yqRBo.mjs";
import "./_libs/radix-ui__react-label.mjs";
import "./_libs/radix-ui__react-primitive.mjs";
import "./_libs/radix-ui__react-slot.mjs";
import "./_libs/radix-ui__react-compose-refs.mjs";
import "./_libs/class-variance-authority.mjs";
import "./_ssr/textarea-DSyJ1nlY.mjs";
import "./_ssr/select-CZRUt5a6.mjs";
import "./_libs/radix-ui__react-select.mjs";
import "./_libs/radix-ui__number.mjs";
import "./_libs/radix-ui__primitive.mjs";
import "./_libs/radix-ui__react-collection.mjs";
import "./_libs/radix-ui__react-context.mjs";
import "./_libs/radix-ui__react-direction.mjs";
import "./_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "./_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "./_libs/radix-ui__react-focus-guards.mjs";
import "./_libs/radix-ui__react-focus-scope.mjs";
import "./_libs/radix-ui__react-id.mjs";
import "./_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "./_libs/radix-ui__react-popper.mjs";
import "./_libs/floating-ui__react-dom.mjs";
import "./_libs/floating-ui__dom.mjs";
import "./_libs/floating-ui__core.mjs";
import "./_libs/floating-ui__utils.mjs";
import "./_libs/radix-ui__react-use-size.mjs";
import "./_libs/radix-ui__react-portal.mjs";
import "./_libs/radix-ui__react-presence.mjs";
import "./_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "./_libs/@radix-ui/react-use-effect-event+[...].mjs";
import "./_libs/radix-ui__react-use-previous.mjs";
import "./_libs/@radix-ui/react-visually-hidden+[...].mjs";
import "./_libs/aria-hidden.mjs";
import "./_libs/react-remove-scroll.mjs";
import "tslib";
import "./_libs/react-remove-scroll-bar.mjs";
import "./_libs/react-style-singleton.mjs";
import "./_libs/get-nonce.mjs";
import "./_libs/use-sidecar.mjs";
import "./_libs/use-callback-ref.mjs";
import "./_ssr/aging-BbuLCJRm.mjs";
import "./_ssr/localMaster-DVwrROQW.mjs";
function AssetDetail() {
  const {
    id
  } = Route$1.useParams();
  const navigate = useNavigate();
  const qc = useQueryClient();
  const [uploading, setUploading] = reactExports.useState(false);
  const {
    data: asset,
    isLoading
  } = useQuery({
    queryKey: ["asset", id],
    queryFn: async () => {
      const {
        data,
        error
      } = await supabase.from("assets").select("*, current_employee:employees(id, name, employee_code)").eq("id", id).maybeSingle();
      if (error) throw error;
      return data;
    }
  });
  const {
    data: history
  } = useQuery({
    queryKey: ["asset-history", id],
    queryFn: async () => {
      const {
        data,
        error
      } = await supabase.from("asset_assignments").select("*, employee:employees(name, employee_code)").eq("asset_id", id).order("assigned_at", {
        ascending: false
      });
      if (error) throw error;
      return data ?? [];
    }
  });
  const {
    data: docs
  } = useQuery({
    queryKey: ["asset-docs", id],
    queryFn: async () => {
      const {
        data,
        error
      } = await supabase.from("asset_documents").select("*").eq("asset_id", id).order("created_at", {
        ascending: false
      });
      if (error) throw error;
      return data ?? [];
    }
  });
  const upload = async (file) => {
    setUploading(true);
    const {
      data: user
    } = await supabase.auth.getUser();
    const path = `${id}/${Date.now()}_${file.name.replace(/[^a-z0-9._-]+/gi, "_")}`;
    const {
      error: upErr
    } = await supabase.storage.from("asset-files").upload(path, file);
    if (upErr) {
      setUploading(false);
      return toast.error(upErr.message);
    }
    const {
      error
    } = await supabase.from("asset_documents").insert({
      asset_id: id,
      file_name: file.name,
      storage_path: path,
      mime_type: file.type || null,
      size_bytes: file.size,
      uploaded_by: user.user?.id ?? null
    });
    setUploading(false);
    if (error) return toast.error(error.message);
    await logAudit("asset_document", "upload", id, {
      file: file.name
    });
    toast.success("Document uploaded");
    qc.invalidateQueries({
      queryKey: ["asset-docs", id]
    });
  };
  const download = async (path, name) => {
    const {
      data,
      error
    } = await supabase.storage.from("asset-files").createSignedUrl(path, 60);
    if (error || !data) return toast.error(error?.message ?? "Could not create link");
    const a = document.createElement("a");
    a.href = data.signedUrl;
    a.download = name;
    a.target = "_blank";
    a.click();
  };
  const removeDoc = async (docId, path) => {
    await supabase.storage.from("asset-files").remove([path]);
    const {
      error
    } = await supabase.from("asset_documents").delete().eq("id", docId);
    if (error) return toast.error(error.message);
    toast.success("Document removed");
    qc.invalidateQueries({
      queryKey: ["asset-docs", id]
    });
  };
  const deleteAsset = async () => {
    const {
      error
    } = await supabase.from("assets").delete().eq("id", id);
    if (error) return toast.error(error.message);
    await logAudit("asset", "delete", id, {});
    toast.success("Asset deleted");
    navigate({
      to: "/assets"
    });
  };
  if (isLoading) return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Loading…" });
  if (!asset) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-semibold", children: "Asset not found" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/assets", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4 mr-2" }),
        "Back to assets"
      ] }) })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 max-w-5xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2 flex-wrap", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/assets", className: "text-sm text-muted-foreground hover:text-foreground flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-3.5 w-3.5" }),
          "Back to assets"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-semibold tracking-tight mt-1", children: asset.asset_tag }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
          CATEGORY_LABEL[asset.category],
          " · ",
          asset.product_name,
          asset.current_employee ? ` · assigned to ${asset.current_employee.name}` : ""
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-xs px-2 py-1 rounded-full border ${statusBadgeClass(asset.status)}`, children: STATUS_LABEL[asset.status] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", onClick: deleteAsset, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3.5 w-3.5 mr-1.5" }),
          "Delete"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AssetForm, { initial: asset, onSaved: () => qc.invalidateQueries({
      queryKey: ["asset", id]
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "flex flex-row items-center justify-between space-y-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-base flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Paperclip, { className: "h-4 w-4" }),
          "Documents"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "file", className: "hidden", onChange: (e) => {
            const f = e.target.files?.[0];
            if (f) upload(f);
            e.target.value = "";
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", size: "sm", disabled: uploading, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "h-3.5 w-3.5 mr-1.5" }),
            uploading ? "Uploading…" : "Upload"
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-2", children: [
        !docs?.length && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "No invoices or warranty documents uploaded yet." }),
        docs?.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border rounded-md px-3 py-2 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: d.file_name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
              d.size_bytes ? `${Math.round(Number(d.size_bytes) / 1024)} KB · ` : "",
              new Date(d.created_at).toLocaleDateString()
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", onClick: () => download(d.storage_path, d.file_name), children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileDown, { className: "h-3.5 w-3.5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", onClick: () => removeDoc(d.id, d.storage_path), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3.5 w-3.5" }) })
          ] })
        ] }, d.id))
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base", children: "Assignment History" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-0 overflow-x-auto", children: !history?.length ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "px-6 pb-6 text-sm text-muted-foreground", children: "This asset has never been assigned." }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-muted/40 text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "text-left", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2 font-medium", children: "Employee" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2 font-medium", children: "Assigned" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2 font-medium", children: "Returned" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2 font-medium", children: "Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2 font-medium", children: "Remarks" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y", children: history.map((h) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-2", children: [
            h.employee?.name,
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
              "(",
              h.employee?.employee_code,
              ")"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2 text-muted-foreground", children: new Date(h.assigned_at).toLocaleDateString() }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2 text-muted-foreground", children: h.returned_at ? new Date(h.returned_at).toLocaleDateString() : "—" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2 capitalize", children: h.status }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2 text-muted-foreground", children: h.remarks ?? "—" })
        ] }, h.id)) })
      ] }) })
    ] })
  ] });
}
export {
  AssetDetail as component
};
