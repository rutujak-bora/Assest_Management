/**
 * seedClientData.ts
 * Auto-seeds realistic test data for Companies, Departments, Locations, Employees, Assets, and Assignments
 * into local storage and syncs to MongoDB Atlas if available.
 */

import { supabase } from "@/integrations/supabase/client";

const SEEDED_KEY = "bora_initial_seed_completed_v2";

export function seedInitialDataIfEmpty() {
  if (typeof window === "undefined") return;
  if (localStorage.getItem(SEEDED_KEY)) return;

  try {
    // 1. Companies
    const compKey = "bora_master_companies";
    if (!localStorage.getItem(compKey) || JSON.parse(localStorage.getItem(compKey) || "[]").length === 0) {
      const companies = [
        { id: "comp_1", name: "Bora Multicorp Ltd", code: "BMC", address: "Bora Towers, Baner Road, Pune" },
        { id: "comp_2", name: "Bora Tech Solutions", code: "BTS", address: "Tech Park, Whitefield, Bangalore" },
        { id: "comp_3", name: "Bora Logistics", code: "BLG", address: "Logistics Hub, BKC, Mumbai" },
      ];
      localStorage.setItem(compKey, JSON.stringify(companies));
    }

    // 2. Departments
    const deptKey = "bora_master_departments";
    if (!localStorage.getItem(deptKey) || JSON.parse(localStorage.getItem(deptKey) || "[]").length === 0) {
      const departments = [
        { id: "dept_1", name: "Information Technology", description: "IT Infrastructure, Systems & Support" },
        { id: "dept_2", name: "Human Resources", description: "Talent acquisition & Employee welfare" },
        { id: "dept_3", name: "Finance & Accounts", description: "Financial planning & Accounting" },
        { id: "dept_4", name: "Operations", description: "Supply chain & Operations management" },
        { id: "dept_5", name: "Sales & Marketing", description: "Client relations & Corporate sales" },
      ];
      localStorage.setItem(deptKey, JSON.stringify(departments));
    }

    // 3. Locations
    const locKey = "bora_master_locations";
    if (!localStorage.getItem(locKey) || JSON.parse(localStorage.getItem(locKey) || "[]").length === 0) {
      const locations = [
        { id: "loc_1", name: "Head Office (Pune)", address: "Baner Road, Pune, Maharashtra 411045" },
        { id: "loc_2", name: "Regional Office (Mumbai)", address: "BKC, Mumbai, Maharashtra 400051" },
        { id: "loc_3", name: "Tech Center (Bangalore)", address: "Whitefield, Bangalore, Karnataka 560066" },
      ];
      localStorage.setItem(locKey, JSON.stringify(locations));
    }

    // 4. Employees
    const empKey = "bora_local_employees";
    let employees = JSON.parse(localStorage.getItem(empKey) || "[]");
    if (employees.length === 0) {
      employees = [
        {
          id: "emp_1",
          employee_code: "EMP001",
          name: "Rutuja Kawade",
          department: "Information Technology",
          designation: "Senior Software Engineer",
          email: "rutuja.k@bora.tech",
          mobile: "9226585266",
          location: "Head Office (Pune)",
        },
        {
          id: "emp_2",
          employee_code: "EMP002",
          name: "Pravin Bora",
          department: "Management",
          designation: "Managing Director",
          email: "pravin@bora.tech",
          mobile: "9822012345",
          location: "Head Office (Pune)",
        },
        {
          id: "emp_3",
          employee_code: "EMP003",
          name: "Shahid Khan",
          department: "Information Technology",
          designation: "IT Manager",
          email: "shahid@bora.tech",
          mobile: "9890112233",
          location: "Head Office (Pune)",
        },
        {
          id: "emp_4",
          employee_code: "EMP004",
          name: "Amit Sharma",
          department: "Finance & Accounts",
          designation: "Finance Lead",
          email: "amit.sharma@bora.tech",
          mobile: "9876543210",
          location: "Regional Office (Mumbai)",
        },
        {
          id: "emp_5",
          employee_code: "EMP005",
          name: "Priya Patel",
          department: "Human Resources",
          designation: "HR Executive",
          email: "priya.patel@bora.tech",
          mobile: "9123456789",
          location: "Tech Center (Bangalore)",
        },
      ];
      localStorage.setItem(empKey, JSON.stringify(employees));
    }

    // 5. Assets
    const assetKey = "bora_local_assets";
    let assets = JSON.parse(localStorage.getItem(assetKey) || "[]");
    if (assets.length === 0) {
      assets = [
        {
          id: "ast_1",
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
          current_employee_id: "emp_1",
          purchase_date: "2026-01-15",
          purchase_cost: 249999,
          supplier: "Apple Authorised Reseller",
          warranty_end: "2029-01-15",
          notes: "Primary development machine for Sr. Software Engineer",
        },
        {
          id: "ast_2",
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
          current_employee_id: "emp_1",
          purchase_date: "2026-01-20",
          purchase_cost: 48500,
          supplier: "Dell India Ltd",
          warranty_end: "2029-01-20",
          notes: "4K Color Accurate Display",
        },
        {
          id: "ast_3",
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
          current_employee_id: "emp_2",
          purchase_date: "2026-02-01",
          purchase_cost: 185000,
          supplier: "Lenovo Direct",
          warranty_end: "2029-02-01",
          notes: "Executive Laptop",
        },
        {
          id: "ast_4",
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
        },
        {
          id: "ast_5",
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
          current_employee_id: "emp_3",
          purchase_date: "2026-01-05",
          purchase_cost: 134900,
          supplier: "Imagine Store",
          warranty_end: "2027-01-05",
          notes: "Corporate Mobile Line",
        },
        {
          id: "ast_6",
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
        },
      ];
      localStorage.setItem(assetKey, JSON.stringify(assets));
    }

    // 6. Assignments
    const assignKey = "bora_local_assignments";
    let assignments = JSON.parse(localStorage.getItem(assignKey) || "[]");
    if (assignments.length === 0) {
      assignments = [
        {
          id: "asg_1",
          asset_id: "ast_1",
          employee_id: "emp_1",
          assigned_at: "2026-01-16T10:00:00.000Z",
          status: "active",
          remarks: "Allocated new MacBook Pro 16 M3 Max for Development role.",
        },
        {
          id: "asg_2",
          asset_id: "ast_2",
          employee_id: "emp_1",
          assigned_at: "2026-01-21T11:30:00.000Z",
          status: "active",
          remarks: "Allocated Dell UltraSharp 27 4K Monitor.",
        },
        {
          id: "asg_3",
          asset_id: "ast_3",
          employee_id: "emp_2",
          assigned_at: "2026-02-02T09:15:00.000Z",
          status: "active",
          remarks: "Allocated ThinkPad X1 Carbon to Managing Director.",
        },
      ];
      localStorage.setItem(assignKey, JSON.stringify(assignments));
    }

    // Mark seed completed
    localStorage.setItem(SEEDED_KEY, "true");

    // Asynchronously push items to MongoDB Atlas if connection is live
    for (const emp of employees) {
      supabase.from("employees").upsert(emp).catch(() => {});
    }
    for (const ast of assets) {
      supabase.from("assets").upsert(ast).catch(() => {});
    }
  } catch (err) {
    console.warn("[Client Seed Warning]", err);
  }
}
