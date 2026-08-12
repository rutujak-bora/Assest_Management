import { createServerFn } from "@tanstack/react-start";
import { connectToDatabase } from "./db/mongodb";
import { UserModel } from "./db/models";

const SEED_USERS = [
  { email: "shahid@bora.tech", password: "shahid@123", full_name: "Shahid" },
  { email: "pravin@bora.tech", password: "pravin@123", full_name: "Pravin" },
];

export const seedDefaultUsers = createServerFn({ method: "POST" }).handler(async () => {
  try {
    await connectToDatabase();
    const results: { email: string; created: boolean }[] = [];
    for (const u of SEED_USERS) {
      const exists = await UserModel.findOne({ email: u.email.toLowerCase() });
      if (exists) {
        results.push({ email: u.email, created: false });
        continue;
      }
      await UserModel.create({
        email: u.email.toLowerCase(),
        password_hash: u.password,
        full_name: u.full_name,
        role: "admin",
      });
      results.push({ email: u.email, created: true });
    }
    return { ok: true, results };
  } catch (error: any) {
    console.error("[MongoDB Seed Users Error]:", error);
    return { ok: false, error: error.message };
  }
});
