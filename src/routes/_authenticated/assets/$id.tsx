import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { AssetForm, type AssetFormValues } from "@/components/AssetForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileDown, Trash2, Upload, Paperclip } from "lucide-react";
import { toast } from "sonner";
import { STATUS_LABEL, CATEGORY_LABEL, statusBadgeClass, type AssetStatus, type AssetCategory } from "@/lib/categories";
import { logAudit } from "@/lib/audit";

export const Route = createFileRoute("/_authenticated/assets/$id")({
  head: () => ({
    meta: [
      { title: "Asset Details — IT Asset Manager" },
      { name: "description", content: "View and edit an IT asset, its documents and assignment history." },
      { property: "og:title", content: "Asset Details — IT Asset Manager" },
      { property: "og:description", content: "View and edit an IT asset, its documents and assignment history." },
    ],
  }),
  component: AssetDetail,
});

function AssetDetail() {
  const { id } = Route.useParams();
  const navigate = useNavigate();
  const qc = useQueryClient();
  const [uploading, setUploading] = useState(false);

  const { data: asset, isLoading } = useQuery({
    queryKey: ["asset", id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("assets")
        .select("*, current_employee:employees(id, name, employee_code)")
        .eq("id", id)
        .maybeSingle();
      if (error) throw error;
      return data;
    },
  });

  const { data: history } = useQuery({
    queryKey: ["asset-history", id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("asset_assignments")
        .select("*, employee:employees(name, employee_code)")
        .eq("asset_id", id)
        .order("assigned_at", { ascending: false });
      if (error) throw error;
      return data ?? [];
    },
  });

  const { data: docs } = useQuery({
    queryKey: ["asset-docs", id],
    queryFn: async () => {
      const { data, error } = await supabase.from("asset_documents").select("*").eq("asset_id", id).order("created_at", { ascending: false });
      if (error) throw error;
      return data ?? [];
    },
  });

  const upload = async (file: File) => {
    setUploading(true);
    const { data: user } = await supabase.auth.getUser();
    const path = `${id}/${Date.now()}_${file.name.replace(/[^a-z0-9._-]+/gi, "_")}`;
    const { error: upErr } = await supabase.storage.from("asset-files").upload(path, file);
    if (upErr) { setUploading(false); return toast.error(upErr.message); }
    const { error } = await supabase.from("asset_documents").insert({
      asset_id: id, file_name: file.name, storage_path: path,
      mime_type: file.type || null, size_bytes: file.size, uploaded_by: user.user?.id ?? null,
    });
    setUploading(false);
    if (error) return toast.error(error.message);
    await logAudit("asset_document", "upload", id, { file: file.name });
    toast.success("Document uploaded");
    qc.invalidateQueries({ queryKey: ["asset-docs", id] });
  };

  const download = async (path: string, name: string) => {
    const { data, error } = await supabase.storage.from("asset-files").createSignedUrl(path, 60);
    if (error || !data) return toast.error(error?.message ?? "Could not create link");
    const a = document.createElement("a");
    a.href = data.signedUrl; a.download = name; a.target = "_blank"; a.click();
  };

  const removeDoc = async (docId: string, path: string) => {
    await supabase.storage.from("asset-files").remove([path]);
    const { error } = await supabase.from("asset_documents").delete().eq("id", docId);
    if (error) return toast.error(error.message);
    toast.success("Document removed");
    qc.invalidateQueries({ queryKey: ["asset-docs", id] });
  };

  const deleteAsset = async () => {
    const { error } = await supabase.from("assets").delete().eq("id", id);
    if (error) return toast.error(error.message);
    await logAudit("asset", "delete", id, {});
    toast.success("Asset deleted");
    navigate({ to: "/assets" });
  };

  if (isLoading) return <p className="text-sm text-muted-foreground">Loading…</p>;
  if (!asset) {
    return (
      <div className="space-y-3">
        <h1 className="text-2xl font-semibold">Asset not found</h1>
        <Button asChild variant="outline"><Link to="/assets"><ArrowLeft className="h-4 w-4 mr-2" />Back to assets</Link></Button>
      </div>
    );
  }

  return (
    <div className="space-y-4 max-w-5xl">
      <div className="flex items-start justify-between gap-2 flex-wrap">
        <div>
          <Link to="/assets" className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1">
            <ArrowLeft className="h-3.5 w-3.5" />Back to assets
          </Link>
          <h1 className="text-2xl font-semibold tracking-tight mt-1">{asset.asset_tag}</h1>
          <p className="text-sm text-muted-foreground">
            {CATEGORY_LABEL[asset.category as AssetCategory]} · {asset.product_name}
            {asset.current_employee ? ` · assigned to ${(asset.current_employee as any).name}` : ""}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className={`text-xs px-2 py-1 rounded-full border ${statusBadgeClass(asset.status as AssetStatus)}`}>
            {STATUS_LABEL[asset.status as AssetStatus]}
          </span>
          <Button variant="outline" size="sm" onClick={deleteAsset}><Trash2 className="h-3.5 w-3.5 mr-1.5" />Delete</Button>
        </div>
      </div>

      <AssetForm
        initial={asset as unknown as Partial<AssetFormValues>}
        onSaved={() => qc.invalidateQueries({ queryKey: ["asset", id] })}
      />

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0">
          <CardTitle className="text-base flex items-center gap-2"><Paperclip className="h-4 w-4" />Documents</CardTitle>
          <label>
            <input type="file" className="hidden" onChange={(e) => { const f = e.target.files?.[0]; if (f) upload(f); e.target.value = ""; }} />
            <Button asChild variant="outline" size="sm" disabled={uploading}>
              <span><Upload className="h-3.5 w-3.5 mr-1.5" />{uploading ? "Uploading…" : "Upload"}</span>
            </Button>
          </label>
        </CardHeader>
        <CardContent className="space-y-2">
          {!docs?.length && <p className="text-sm text-muted-foreground">No invoices or warranty documents uploaded yet.</p>}
          {docs?.map((d) => (
            <div key={d.id} className="flex items-center justify-between border rounded-md px-3 py-2 text-sm">
              <div>
                <div className="font-medium">{d.file_name}</div>
                <div className="text-xs text-muted-foreground">
                  {d.size_bytes ? `${Math.round(Number(d.size_bytes) / 1024)} KB · ` : ""}{new Date(d.created_at).toLocaleDateString()}
                </div>
              </div>
              <div className="flex gap-1">
                <Button variant="ghost" size="sm" onClick={() => download(d.storage_path, d.file_name)}><FileDown className="h-3.5 w-3.5" /></Button>
                <Button variant="ghost" size="sm" onClick={() => removeDoc(d.id, d.storage_path)}><Trash2 className="h-3.5 w-3.5" /></Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle className="text-base">Assignment History</CardTitle></CardHeader>
        <CardContent className="p-0 overflow-x-auto">
          {!history?.length ? (
            <p className="px-6 pb-6 text-sm text-muted-foreground">This asset has never been assigned.</p>
          ) : (
            <table className="w-full text-sm">
              <thead className="bg-muted/40 text-muted-foreground">
                <tr className="text-left">
                  <th className="px-4 py-2 font-medium">Employee</th>
                  <th className="px-4 py-2 font-medium">Assigned</th>
                  <th className="px-4 py-2 font-medium">Returned</th>
                  <th className="px-4 py-2 font-medium">Status</th>
                  <th className="px-4 py-2 font-medium">Remarks</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {history.map((h: any) => (
                  <tr key={h.id}>
                    <td className="px-4 py-2">{h.employee?.name} <span className="text-xs text-muted-foreground">({h.employee?.employee_code})</span></td>
                    <td className="px-4 py-2 text-muted-foreground">{new Date(h.assigned_at).toLocaleDateString()}</td>
                    <td className="px-4 py-2 text-muted-foreground">{h.returned_at ? new Date(h.returned_at).toLocaleDateString() : "—"}</td>
                    <td className="px-4 py-2 capitalize">{h.status}</td>
                    <td className="px-4 py-2 text-muted-foreground">{h.remarks ?? "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

