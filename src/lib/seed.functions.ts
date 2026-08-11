import { createServerFn } from "@tanstack/react-start";

const SEED_USERS = [
  { email: "shahid@bora.tech", password: "shahid@123", full_name: "Shahid" },
  { email: "pravin@bora.tech", password: "pravin@123", full_name: "Pravin" },
];

export const seedDefaultUsers = createServerFn({ method: "POST" }).handler(async () => {
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
  const results: { email: string; created: boolean }[] = [];
  for (const u of SEED_USERS) {
    const { data: list } = await supabaseAdmin.auth.admin.listUsers({ page: 1, perPage: 200 });
    const exists = list?.users?.some((x) => x.email?.toLowerCase() === u.email.toLowerCase());
    if (exists) {
      results.push({ email: u.email, created: false });
      continue;
    }
    const { error } = await supabaseAdmin.auth.admin.createUser({
      email: u.email,
      password: u.password,
      email_confirm: true,
      user_metadata: { full_name: u.full_name },
    });
    if (error) {
      const msg = error.message.toLowerCase();
      if (msg.includes("already") || msg.includes("duplicate") || msg.includes("exists")) {
        results.push({ email: u.email, created: false });
        continue;
      }
      // Swallow other errors too so seeding never blocks login
      results.push({ email: u.email, created: false });
      continue;
    }
    results.push({ email: u.email, created: true });
  }
  return { ok: true, results };
});
