import { supabase } from "@/integrations/supabase/client";

export async function logAudit(
  entity: string,
  action: string,
  entityId?: string | null,
  details?: Record<string, unknown>,
) {
  const { data } = await supabase.auth.getUser();
  const userId = data?.user?.id || data?.user?._id || "system";

  await supabase.from("audit_log").insert({
    user_id: userId,
    entity,
    action,
    entity_id: entityId ?? null,
    details: (details ?? null) as never,
  });
}
