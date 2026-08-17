import { s as supabase } from "./client-ByslKVxo.mjs";
async function logAudit(entity, action, entityId, details) {
  const { data } = await supabase.auth.getUser();
  const userId = data?.user?.id || data?.user?._id || "system";
  await supabase.from("audit_log").insert({
    user_id: userId,
    entity,
    action,
    entity_id: entityId ?? null,
    details: details ?? null
  });
}
export {
  logAudit as l
};
