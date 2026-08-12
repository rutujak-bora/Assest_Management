import { createServerFn } from "@tanstack/react-start";
import { connectToDatabase } from "../db/mongodb";
import {
  EmployeeModel,
  AssetModel,
  AssignmentModel,
  AuditLogModel,
  UserModel,
  CompanyModel,
  DepartmentModel,
  LocationModel,
} from "../db/models";

// ─── HELPER: Serialize Mongo Docs to Plain JSON Objects ─────────────────────
function serializeDoc<T>(doc: any): T {
  if (!doc) return doc;
  const obj = doc.toObject ? doc.toObject() : doc;
  if (obj._id) {
    obj.id = obj._id.toString();
    delete obj._id;
  }
  delete obj.__v;
  return obj as T;
}

function serializeList<T>(list: any[]): T[] {
  return list.map((item) => serializeDoc<T>(item));
}

// ─── AUTH FUNCTIONS ─────────────────────────────────────────────────────────
export const loginMongoUser = createServerFn({ method: "POST" })
  .validator((data: { email: string; password_hash: string }) => data)
  .handler(async ({ data }) => {
    await connectToDatabase();
    const email = data.email.toLowerCase().trim();
    let user = await UserModel.findOne({ email });

    // Seed default admin users if not found
    if (!user && (email === "shahid@bora.tech" || email === "pravin@bora.tech" || email === "admin@bora.tech")) {
      user = await UserModel.create({
        email,
        password_hash: data.password_hash,
        full_name: email.split("@")[0],
        role: "admin",
      });
    }

    if (!user) {
      // Auto-create initial user for demo login if password provided
      user = await UserModel.create({
        email,
        password_hash: data.password_hash,
        full_name: email.split("@")[0],
        role: "admin",
      });
    }

    return {
      user: serializeDoc(user),
      session: { user: serializeDoc(user), access_token: `mongo_token_${user._id}` },
    };
  });

// ─── EMPLOYEES ──────────────────────────────────────────────────────────────
export const getEmployees = createServerFn({ method: "GET" })
  .validator((data: { q?: string } | undefined) => data)
  .handler(async ({ data }) => {
    await connectToDatabase();
    const query: any = {};
    if (data?.q) {
      const reg = new RegExp(data.q, "i");
      query.$or = [
        { name: reg },
        { employee_code: reg },
        { email: reg },
        { department: reg },
        { location: reg },
      ];
    }
    const employees = await EmployeeModel.find(query).sort({ name: 1 }).limit(500);
    return serializeList(employees);
  });

export const upsertEmployee = createServerFn({ method: "POST" })
  .validator((data: any) => data)
  .handler(async ({ data }) => {
    await connectToDatabase();
    const { id, _id, ...fields } = data;
    let result;
    if (id || _id) {
      result = await EmployeeModel.findByIdAndUpdate(id || _id, fields, { new: true, upsert: true });
    } else {
      result = await EmployeeModel.findOneAndUpdate(
        { employee_code: fields.employee_code },
        fields,
        { new: true, upsert: true }
      );
    }
    return serializeDoc(result);
  });

export const deleteEmployee = createServerFn({ method: "POST" })
  .validator((data: { id: string }) => data)
  .handler(async ({ data }) => {
    await connectToDatabase();
    await EmployeeModel.findByIdAndDelete(data.id);
    return { ok: true };
  });

// ─── ASSETS ─────────────────────────────────────────────────────────────────
export const getAssets = createServerFn({ method: "GET" })
  .validator((data: { q?: string; status?: string; category?: string } | undefined) => data)
  .handler(async ({ data }) => {
    await connectToDatabase();
    const query: any = {};
    if (data?.q) {
      const reg = new RegExp(data.q, "i");
      query.$or = [
        { asset_tag: reg },
        { product_name: reg },
        { serial_number: reg },
        { brand: reg },
        { company: reg },
        { location: reg },
      ];
    }
    if (data?.status && data.status !== "all") query.status = data.status;
    if (data?.category && data.category !== "all") query.category = data.category;

    const assets = await AssetModel.find(query).sort({ created_at: -1 }).limit(1000);
    return serializeList(assets);
  });

export const getAssetById = createServerFn({ method: "GET" })
  .validator((data: { id: string }) => data)
  .handler(async ({ data }) => {
    await connectToDatabase();
    const asset = await AssetModel.findById(data.id);
    return serializeDoc(asset);
  });

export const upsertAsset = createServerFn({ method: "POST" })
  .validator((data: any) => data)
  .handler(async ({ data }) => {
    await connectToDatabase();
    const { id, _id, ...fields } = data;
    let result;
    if (id || _id) {
      result = await AssetModel.findByIdAndUpdate(id || _id, fields, { new: true, upsert: true });
    } else {
      result = await AssetModel.findOneAndUpdate(
        { asset_tag: fields.asset_tag },
        fields,
        { new: true, upsert: true }
      );
    }
    return serializeDoc(result);
  });

export const deleteAsset = createServerFn({ method: "POST" })
  .validator((data: { id: string }) => data)
  .handler(async ({ data }) => {
    await connectToDatabase();
    await AssetModel.findByIdAndDelete(data.id);
    return { ok: true };
  });

// ─── ASSIGNMENTS ────────────────────────────────────────────────────────────
export const getAssignments = createServerFn({ method: "GET" })
  .validator((data: { status?: string } | undefined) => data)
  .handler(async ({ data }) => {
    await connectToDatabase();
    const query: any = {};
    if (data?.status && data.status !== "all") query.status = data.status;

    const assignments = await AssignmentModel.find(query).sort({ assigned_at: -1 }).limit(1000);
    return serializeList(assignments);
  });

export const createAssignment = createServerFn({ method: "POST" })
  .validator((data: any) => data)
  .handler(async ({ data }) => {
    await connectToDatabase();
    const assignment = await AssignmentModel.create(data);
    if (data.asset_id) {
      await AssetModel.findByIdAndUpdate(data.asset_id, {
        status: "assigned",
        current_employee_id: data.employee_id,
      });
    }
    return serializeDoc(assignment);
  });

export const returnAssignment = createServerFn({ method: "POST" })
  .validator((data: { id: string; asset_id: string; remarks?: string }) => data)
  .handler(async ({ data }) => {
    await connectToDatabase();
    const assignment = await AssignmentModel.findByIdAndUpdate(
      data.id,
      { status: "returned", returned_at: new Date(), remarks: data.remarks },
      { new: true }
    );
    if (data.asset_id) {
      await AssetModel.findByIdAndUpdate(data.asset_id, {
        status: "available",
        current_employee_id: null,
      });
    }
    return serializeDoc(assignment);
  });

// ─── AUDIT LOGS ─────────────────────────────────────────────────────────────
export const getAuditLogs = createServerFn({ method: "GET" }).handler(async () => {
  await connectToDatabase();
  const logs = await AuditLogModel.find({}).sort({ created_at: -1 }).limit(500);
  return serializeList(logs);
});

export const createAuditLog = createServerFn({ method: "POST" })
  .validator((data: any) => data)
  .handler(async ({ data }) => {
    await connectToDatabase();
    const log = await AuditLogModel.create(data);
    return serializeDoc(log);
  });

// ─── MASTER DATA (COMPANIES, DEPARTMENTS, LOCATIONS IN SEPARATE COLLECTIONS) ───
export const getMasterData = createServerFn({ method: "GET" })
  .validator((data: { type: "companies" | "departments" | "locations" }) => data)
  .handler(async ({ data }) => {
    await connectToDatabase();
    let items;
    if (data.type === "companies") {
      items = await CompanyModel.find({}).sort({ name: 1 });
    } else if (data.type === "departments") {
      items = await DepartmentModel.find({}).sort({ name: 1 });
    } else {
      items = await LocationModel.find({}).sort({ name: 1 });
    }
    return serializeList(items);
  });

export const upsertMasterItem = createServerFn({ method: "POST" })
  .validator((data: { type: "companies" | "departments" | "locations"; name: string; [key: string]: any }) => data)
  .handler(async ({ data }) => {
    await connectToDatabase();
    const { id, _id, type, name, ...rest } = data;
    const cleanName = name.trim();
    let item;
    if (type === "companies") {
      item = await CompanyModel.findOneAndUpdate(
        { name: new RegExp(`^${cleanName}$`, "i") },
        { name: cleanName, ...rest },
        { new: true, upsert: true }
      );
    } else if (type === "departments") {
      item = await DepartmentModel.findOneAndUpdate(
        { name: new RegExp(`^${cleanName}$`, "i") },
        { name: cleanName, ...rest },
        { new: true, upsert: true }
      );
    } else {
      item = await LocationModel.findOneAndUpdate(
        { name: new RegExp(`^${cleanName}$`, "i") },
        { name: cleanName, ...rest },
        { new: true, upsert: true }
      );
    }
    return serializeDoc(item);
  });

export const deleteMasterItem = createServerFn({ method: "POST" })
  .validator((data: { id: string; type?: "companies" | "departments" | "locations" }) => data)
  .handler(async ({ data }) => {
    await connectToDatabase();
    if (data.type === "companies") {
      await CompanyModel.findByIdAndDelete(data.id);
    } else if (data.type === "departments") {
      await DepartmentModel.findByIdAndDelete(data.id);
    } else if (data.type === "locations") {
      await LocationModel.findByIdAndDelete(data.id);
    } else {
      await CompanyModel.findByIdAndDelete(data.id);
      await DepartmentModel.findByIdAndDelete(data.id);
      await LocationModel.findByIdAndDelete(data.id);
    }
    return { ok: true };
  });
