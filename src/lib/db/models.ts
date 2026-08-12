import mongoose, { Schema, Document, Model } from "mongoose";

// ─── Employee Schema ────────────────────────────────────────────────────────
export interface IEmployee extends Document {
  employee_code: string;
  name: string;
  department?: string;
  designation?: string;
  email?: string;
  mobile?: string;
  location?: string;
  created_at: Date;
  updated_at: Date;
}

const EmployeeSchema = new Schema<IEmployee>(
  {
    employee_code: { type: String, required: true, unique: true, index: true },
    name: { type: String, required: true, index: true },
    department: { type: String, default: "" },
    designation: { type: String, default: "" },
    email: { type: String, default: "" },
    mobile: { type: String, default: "" },
    location: { type: String, default: "" },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

// ─── Asset Schema ───────────────────────────────────────────────────────────
export interface IAsset extends Document {
  asset_tag: string;
  category: string;
  product_type?: string;
  product_name: string;
  brand?: string;
  series?: string;
  serial_number?: string;
  configuration?: string;
  location?: string;
  status: "available" | "assigned" | "in_repair" | "lost" | "damaged" | "returned" | "disposed";
  purchase_from?: string;
  purchase_price?: number;
  purchase_date?: string;
  warranty_start?: string;
  warranty_end?: string;
  invoice_number?: string;
  vendor_name?: string;
  company?: string;
  remarks?: string;
  current_employee_id?: string;
  created_at: Date;
  updated_at: Date;
}

const AssetSchema = new Schema<IAsset>(
  {
    asset_tag: { type: String, required: true, unique: true, index: true },
    category: { type: String, required: true, index: true },
    product_type: { type: String, default: "" },
    product_name: { type: String, required: true },
    brand: { type: String, default: "" },
    series: { type: String, default: "" },
    serial_number: { type: String, default: "", index: true },
    configuration: { type: String, default: "" },
    location: { type: String, default: "" },
    status: {
      type: String,
      enum: ["available", "assigned", "in_repair", "lost", "damaged", "returned", "disposed"],
      default: "available",
      index: true,
    },
    purchase_from: { type: String, default: "" },
    purchase_price: { type: Number, default: 0 },
    purchase_date: { type: String, default: "" },
    warranty_start: { type: String, default: "" },
    warranty_end: { type: String, default: "" },
    invoice_number: { type: String, default: "" },
    vendor_name: { type: String, default: "" },
    company: { type: String, default: "" },
    remarks: { type: String, default: "" },
    current_employee_id: { type: Schema.Types.Mixed, default: null },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

// ─── Asset Assignment Schema ────────────────────────────────────────────────
export interface IAssignment extends Document {
  asset_id: string;
  employee_id: string;
  assigned_at: Date;
  expected_return_at?: string;
  returned_at?: Date;
  status: "active" | "returned" | "transferred";
  remarks?: string;
  handover_pdf_url?: string;
  accessories?: string;
  created_by?: string;
  created_at: Date;
}

const AssignmentSchema = new Schema<IAssignment>(
  {
    asset_id: { type: String, required: true, index: true },
    employee_id: { type: String, required: true, index: true },
    assigned_at: { type: Date, default: Date.now },
    expected_return_at: { type: String, default: "" },
    returned_at: { type: Date, default: null },
    status: { type: String, enum: ["active", "returned", "transferred"], default: "active" },
    remarks: { type: String, default: "" },
    handover_pdf_url: { type: String, default: "" },
    accessories: { type: String, default: "" },
    created_by: { type: String, default: null },
  },
  { timestamps: { createdAt: "created_at", updatedAt: false } }
);

// ─── Audit Log Schema ───────────────────────────────────────────────────────
export interface IAuditLog extends Document {
  user_id?: string;
  entity: string;
  entity_id?: string;
  action: string;
  details?: any;
  created_at: Date;
}

const AuditLogSchema = new Schema<IAuditLog>(
  {
    user_id: { type: String, default: "system" },
    entity: { type: String, required: true },
    entity_id: { type: String, default: null },
    action: { type: String, required: true },
    details: { type: Schema.Types.Mixed, default: {} },
  },
  { timestamps: { createdAt: "created_at", updatedAt: false } }
);

// ─── User / Auth Profile Schema ─────────────────────────────────────────────
export interface IUser extends Document {
  email: string;
  password_hash: string;
  full_name: string;
  role: "admin" | "staff" | "manager";
  created_at: Date;
}

const UserSchema = new Schema<IUser>(
  {
    email: { type: String, required: true, unique: true, lowercase: true },
    password_hash: { type: String, required: true },
    full_name: { type: String, required: true },
    role: { type: String, enum: ["admin", "staff", "manager"], default: "admin" },
  },
  { timestamps: { createdAt: "created_at", updatedAt: false } }
);

// ─── Master Schemas (Companies, Departments, Locations) ─────────────────────
export interface IMasterItem extends Document {
  type: "companies" | "departments" | "locations";
  name: string;
  code?: string;
  description?: string;
  address?: string;
  created_at: Date;
}

const MasterItemSchema = new Schema<IMasterItem>(
  {
    type: { type: String, required: true, enum: ["companies", "departments", "locations"], index: true },
    name: { type: String, required: true },
    code: { type: String, default: "" },
    description: { type: String, default: "" },
    address: { type: String, default: "" },
  },
  { timestamps: { createdAt: "created_at", updatedAt: false } }
);

// Helper to get or create models safely for SSR hot-reloading
export const EmployeeModel: Model<IEmployee> =
  mongoose.models.Employee || mongoose.model<IEmployee>("Employee", EmployeeSchema);

export const AssetModel: Model<IAsset> =
  mongoose.models.Asset || mongoose.model<IAsset>("Asset", AssetSchema);

export const AssignmentModel: Model<IAssignment> =
  mongoose.models.Assignment || mongoose.model<IAssignment>("Assignment", AssignmentSchema);

export const AuditLogModel: Model<IAuditLog> =
  mongoose.models.AuditLog || mongoose.model<IAuditLog>("AuditLog", AuditLogSchema);

export const UserModel: Model<IUser> =
  mongoose.models.User || mongoose.model<IUser>("User", UserSchema);

export const MasterItemModel: Model<IMasterItem> =
  mongoose.models.MasterItem || mongoose.model<IMasterItem>("MasterItem", MasterItemSchema);
