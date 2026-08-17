const mongoose = require("mongoose");
const dns = require("dns");

try {
  dns.setServers(["8.8.8.8", "8.8.4.4"]);
} catch (e) {}

const MONGODB_URI = "mongodb+srv://rutujak_db_user:JsC6tENYoUiEBg7n@assets.jq8ppq3.mongodb.net/asset_management?retryWrites=true&w=majority";

async function main() {
  console.log("Connecting to MongoDB Atlas...");
  await mongoose.connect(MONGODB_URI);
  console.log("Connected successfully!");

  const db = mongoose.connection.db;

  // 1. Companies
  const companiesCol = db.collection("companies");
  await companiesCol.deleteMany({});
  const companies = [
    { name: "Bora Multicorp Ltd", code: "BMC", address: "Bora Towers, Baner Road, Pune", created_at: new Date() },
    { name: "Bora Tech Solutions", code: "BTS", address: "Tech Park, Whitefield, Bangalore", created_at: new Date() },
    { name: "Bora Logistics", code: "BLG", address: "Logistics Hub, BKC, Mumbai", created_at: new Date() },
  ];
  await companiesCol.insertMany(companies);
  console.log("✓ Seeded 3 Companies");

  // 2. Departments
  const deptsCol = db.collection("departments");
  await deptsCol.deleteMany({});
  const departments = [
    { name: "Information Technology", description: "IT Infrastructure, Systems & Cloud Operations", created_at: new Date() },
    { name: "Human Resources", description: "Talent acquisition, Onboarding & Employee welfare", created_at: new Date() },
    { name: "Finance & Accounts", description: "Financial planning, Auditing & Accounting", created_at: new Date() },
    { name: "Operations", description: "Supply chain, Logistics & Facilities management", created_at: new Date() },
    { name: "Sales & Marketing", description: "Corporate accounts, Enterprise sales & Marketing", created_at: new Date() },
  ];
  await deptsCol.insertMany(departments);
  console.log("✓ Seeded 5 Departments");

  // 3. Locations
  const locsCol = db.collection("locations");
  await locsCol.deleteMany({});
  const locations = [
    { name: "Head Office (Pune)", address: "Baner Road, Pune, Maharashtra 411045", created_at: new Date() },
    { name: "Regional Office (Mumbai)", address: "BKC, Bandra East, Mumbai, Maharashtra 400051", created_at: new Date() },
    { name: "Tech Center (Bangalore)", address: "Whitefield, Bangalore, Karnataka 560066", created_at: new Date() },
  ];
  await locsCol.insertMany(locations);
  console.log("✓ Seeded 3 Locations");

  // 4. Employees
  const empCol = db.collection("employees");
  await empCol.deleteMany({});
  const employees = [
    {
      employee_code: "EMP001",
      name: "Rutuja Kawade",
      department: "Information Technology",
      designation: "Senior Software Engineer",
      email: "rutuja.k@bora.tech",
      mobile: "9226585266",
      location: "Head Office (Pune)",
      created_at: new Date(),
    },
    {
      employee_code: "EMP002",
      name: "Pravin Bora",
      department: "Management",
      designation: "Managing Director",
      email: "pravin@bora.tech",
      mobile: "9822012345",
      location: "Head Office (Pune)",
      created_at: new Date(),
    },
    {
      employee_code: "EMP003",
      name: "Shahid Khan",
      department: "Information Technology",
      designation: "IT Infrastructure Manager",
      email: "shahid@bora.tech",
      mobile: "9890112233",
      location: "Head Office (Pune)",
      created_at: new Date(),
    },
    {
      employee_code: "EMP004",
      name: "Amit Sharma",
      department: "Finance & Accounts",
      designation: "Finance Lead",
      email: "amit.sharma@bora.tech",
      mobile: "9876543210",
      location: "Regional Office (Mumbai)",
      created_at: new Date(),
    },
    {
      employee_code: "EMP005",
      name: "Priya Patel",
      department: "Human Resources",
      designation: "HR Executive",
      email: "priya.patel@bora.tech",
      mobile: "9123456789",
      location: "Tech Center (Bangalore)",
      created_at: new Date(),
    },
  ];
  const empInsertResult = await empCol.insertMany(employees);
  const empIds = Object.values(empInsertResult.insertedIds);
  console.log("✓ Seeded 5 Employees");

  // 5. Assets
  const assetCol = db.collection("assets");
  await assetCol.deleteMany({});
  const assets = [
    {
      asset_tag: "AST-2026-001",
      product_name: "MacBook Pro 16 M3 Max",
      category: "laptops",
      brand: "Apple",
      model: "MacBook Pro 2024",
      serial_number: "C02G1234MD6R",
      status: "assigned",
      company: "Bora Tech Solutions",
      location: "Head Office (Pune)",
      department: "Information Technology",
      current_employee_id: empIds[0].toString(),
      purchase_date: "2026-01-15",
      purchase_cost: 249999,
      supplier: "Apple Authorised Reseller",
      warranty_end: "2029-01-15",
      notes: "Primary development machine for Sr. Software Engineer",
      created_at: new Date(),
    },
    {
      asset_tag: "AST-2026-002",
      product_name: "Dell UltraSharp 27 4K Monitor",
      category: "monitors",
      brand: "Dell",
      model: "U2723QE",
      serial_number: "CN-099X1Y-74261",
      status: "assigned",
      company: "Bora Tech Solutions",
      location: "Head Office (Pune)",
      department: "Information Technology",
      current_employee_id: empIds[0].toString(),
      purchase_date: "2026-01-20",
      purchase_cost: 48500,
      supplier: "Dell India Ltd",
      warranty_end: "2029-01-20",
      notes: "4K Color Accurate Display",
      created_at: new Date(),
    },
    {
      asset_tag: "AST-2026-003",
      product_name: "ThinkPad X1 Carbon Gen 12",
      category: "laptops",
      brand: "Lenovo",
      model: "2024 Series",
      serial_number: "PF-3910AZ",
      status: "assigned",
      company: "Bora Multicorp Ltd",
      location: "Head Office (Pune)",
      department: "Management",
      current_employee_id: empIds[1].toString(),
      purchase_date: "2026-02-01",
      purchase_cost: 185000,
      supplier: "Lenovo Direct",
      warranty_end: "2029-02-01",
      notes: "Executive Laptop",
      created_at: new Date(),
    },
    {
      asset_tag: "AST-2026-004",
      product_name: "HP EliteBook 840 G10",
      category: "laptops",
      brand: "HP",
      model: "EliteBook 840",
      serial_number: "5CG34901XY",
      status: "available",
      company: "Bora Multicorp Ltd",
      location: "Regional Office (Mumbai)",
      department: "Finance & Accounts",
      current_employee_id: null,
      purchase_date: "2026-02-10",
      purchase_cost: 115000,
      supplier: "HP Commercial Store",
      warranty_end: "2028-02-10",
      notes: "Ready for allocation",
      created_at: new Date(),
    },
    {
      asset_tag: "AST-2026-005",
      product_name: "iPhone 15 Pro 256GB",
      category: "mobiles",
      brand: "Apple",
      model: "iPhone 15 Pro",
      serial_number: "F2LX7920PM",
      status: "assigned",
      company: "Bora Multicorp Ltd",
      location: "Head Office (Pune)",
      department: "Information Technology",
      current_employee_id: empIds[2].toString(),
      purchase_date: "2026-01-05",
      purchase_cost: 134900,
      supplier: "Imagine Store",
      warranty_end: "2027-01-05",
      notes: "Corporate Mobile Line",
      created_at: new Date(),
    },
    {
      asset_tag: "AST-2026-006",
      product_name: "Logitech MX Master 3S Mouse",
      category: "peripherals",
      brand: "Logitech",
      model: "MX Master 3S",
      serial_number: "LZ26189031",
      status: "available",
      company: "Bora Tech Solutions",
      location: "Tech Center (Bangalore)",
      department: "Human Resources",
      current_employee_id: null,
      purchase_date: "2026-02-12",
      purchase_cost: 9995,
      supplier: "Logitech Official Store",
      warranty_end: "2027-02-12",
      notes: "Ergonomic Mouse",
      created_at: new Date(),
    },
  ];
  const assetInsertResult = await assetCol.insertMany(assets);
  const assetIds = Object.values(assetInsertResult.insertedIds);
  console.log("✓ Seeded 6 Assets");

  // 6. Assignments
  const assignCol = db.collection("assignments");
  await assignCol.deleteMany({});
  const assignments = [
    {
      asset_id: assetIds[0].toString(),
      employee_id: empIds[0].toString(),
      assigned_at: new Date("2026-01-16"),
      returned_at: null,
      status: "active",
      remarks: "Allocated new MacBook Pro 16 M3 Max for Development role.",
      created_at: new Date(),
    },
    {
      asset_id: assetIds[1].toString(),
      employee_id: empIds[0].toString(),
      assigned_at: new Date("2026-01-21"),
      returned_at: null,
      status: "active",
      remarks: "Allocated Dell UltraSharp 27 4K Monitor.",
      created_at: new Date(),
    },
    {
      asset_id: assetIds[2].toString(),
      employee_id: empIds[1].toString(),
      assigned_at: new Date("2026-02-02"),
      returned_at: null,
      status: "active",
      remarks: "Allocated ThinkPad X1 Carbon to Managing Director.",
      created_at: new Date(),
    },
  ];
  await assignCol.insertMany(assignments);
  console.log("✓ Seeded 3 Asset Assignments");

  // 7. Audit Logs
  const auditCol = db.collection("auditlogs");
  await auditCol.deleteMany({});
  const auditLogs = [
    {
      user_id: "user_admin",
      entity: "employee",
      action: "create",
      entity_id: empIds[0].toString(),
      details: { name: "Rutuja Kawade", role: "Senior Software Engineer" },
      created_at: new Date(),
    },
    {
      user_id: "user_admin",
      entity: "asset",
      action: "create",
      entity_id: assetIds[0].toString(),
      details: { asset_tag: "AST-2026-001", name: "MacBook Pro 16 M3 Max" },
      created_at: new Date(),
    },
    {
      user_id: "user_admin",
      entity: "assignment",
      action: "create",
      entity_id: assetIds[0].toString(),
      details: { asset_tag: "AST-2026-001", assigned_to: "Rutuja Kawade" },
      created_at: new Date(),
    },
  ];
  await auditCol.insertMany(auditLogs);
  console.log("✓ Seeded Audit Logs");

  console.log("\n🎉 Full System Test Data Successfully Seeded into MongoDB Atlas!");
  await mongoose.disconnect();
}

main().catch((err) => {
  console.error("Seeding Error:", err);
  process.exit(1);
});
