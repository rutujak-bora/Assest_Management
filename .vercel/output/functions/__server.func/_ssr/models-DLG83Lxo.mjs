import { m as mongoose, a as mongooseExports } from "../_libs/mongoose.mjs";
import "events";
import "assert";
import "../_libs/react.mjs";
import "../_libs/mongodb.mjs";
import "fs";
import "http";
import "process";
import "timers";
import "timers/promises";
import "url";
import "zlib";
import "net";
import "fs/promises";
import "tls";
import "child_process";
import "../_libs/bson.mjs";
import "stream";
import "util";
import "dns";
import "../_libs/mongodb-connection-string-url.mjs";
import "../_libs/whatwg-url.mjs";
import "../_libs/webidl-conversions.mjs";
import "../_libs/tr46.mjs";
import "../_libs/punycode.mjs";
import "../_libs/mongodb-js__saslprep.mjs";
import "../_libs/sparse-bitfield.mjs";
import "../_libs/memory-pager.mjs";
import "../_libs/kareem.mjs";
import "../_libs/ms.mjs";
import "../_libs/mpath.mjs";
import "../_libs/mquery.mjs";
import "../_libs/sift.mjs";
import "async_hooks";
const CompanySchema = new mongooseExports.Schema(
  {
    name: { type: String, required: true, unique: true, index: true },
    code: { type: String, default: "" },
    description: { type: String, default: "" }
  },
  { timestamps: { createdAt: "created_at", updatedAt: false } }
);
const DepartmentSchema = new mongooseExports.Schema(
  {
    name: { type: String, required: true, unique: true, index: true },
    code: { type: String, default: "" },
    description: { type: String, default: "" }
  },
  { timestamps: { createdAt: "created_at", updatedAt: false } }
);
const LocationSchema = new mongooseExports.Schema(
  {
    name: { type: String, required: true, unique: true, index: true },
    code: { type: String, default: "" },
    address: { type: String, default: "" }
  },
  { timestamps: { createdAt: "created_at", updatedAt: false } }
);
const EmployeeSchema = new mongooseExports.Schema(
  {
    employee_code: { type: String, required: true, unique: true, index: true },
    name: { type: String, required: true, index: true },
    department: { type: String, default: "" },
    designation: { type: String, default: "" },
    email: { type: String, default: "" },
    mobile: { type: String, default: "" },
    location: { type: String, default: "" }
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);
const AssetSchema = new mongooseExports.Schema(
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
      index: true
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
    current_employee_id: { type: mongooseExports.Schema.Types.Mixed, default: null }
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);
const AssignmentSchema = new mongooseExports.Schema(
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
    created_by: { type: String, default: null }
  },
  { timestamps: { createdAt: "created_at", updatedAt: false } }
);
const AuditLogSchema = new mongooseExports.Schema(
  {
    user_id: { type: String, default: "system" },
    entity: { type: String, required: true },
    entity_id: { type: String, default: null },
    action: { type: String, required: true },
    details: { type: mongooseExports.Schema.Types.Mixed, default: {} }
  },
  { timestamps: { createdAt: "created_at", updatedAt: false } }
);
const UserSchema = new mongooseExports.Schema(
  {
    email: { type: String, required: true, unique: true, lowercase: true },
    password_hash: { type: String, required: true },
    full_name: { type: String, required: true },
    role: { type: String, enum: ["admin", "staff", "manager"], default: "admin" }
  },
  { timestamps: { createdAt: "created_at", updatedAt: false } }
);
const CompanyModel = mongoose.models.Company || mongoose.model("Company", CompanySchema, "companies");
const DepartmentModel = mongoose.models.Department || mongoose.model("Department", DepartmentSchema, "departments");
const LocationModel = mongoose.models.Location || mongoose.model("Location", LocationSchema, "locations");
const EmployeeModel = mongoose.models.Employee || mongoose.model("Employee", EmployeeSchema, "employees");
const AssetModel = mongoose.models.Asset || mongoose.model("Asset", AssetSchema, "assets");
const AssignmentModel = mongoose.models.Assignment || mongoose.model("Assignment", AssignmentSchema, "assignments");
const AuditLogModel = mongoose.models.AuditLog || mongoose.model("AuditLog", AuditLogSchema, "auditlogs");
const UserModel = mongoose.models.User || mongoose.model("User", UserSchema, "users");
export {
  AssetModel,
  AssignmentModel,
  AuditLogModel,
  CompanyModel,
  DepartmentModel,
  EmployeeModel,
  LocationModel,
  UserModel
};
