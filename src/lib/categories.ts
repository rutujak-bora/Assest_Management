import { useState, useEffect } from "react";
import {
  Laptop, Monitor, Keyboard, Mouse, Printer, Server, Network, Wifi,
  HardDrive, Camera, Battery, Box, Cpu, MonitorSmartphone, Router, Package,
  FolderPlus,
  type LucideIcon,
} from "lucide-react";

export type BuiltInAssetCategory =
  | "laptop" | "desktop" | "server_desktop" | "monitor" | "keyboard" | "mouse"
  | "printer" | "rack" | "switch" | "access_point" | "n_computing" | "server"
  | "cctv" | "storage_device" | "ups" | "other";

export type AssetCategory = BuiltInAssetCategory | (string & {});

export interface CategoryItem {
  value: AssetCategory;
  label: string;
  icon: LucideIcon;
  isCustom?: boolean;
}

export const BUILTIN_CATEGORIES: CategoryItem[] = [
  { value: "laptop", label: "Laptop", icon: Laptop },
  { value: "desktop", label: "Desktop", icon: MonitorSmartphone },
  { value: "server_desktop", label: "Server Desktop", icon: Cpu },
  { value: "monitor", label: "Monitor", icon: Monitor },
  { value: "keyboard", label: "Keyboard", icon: Keyboard },
  { value: "mouse", label: "Mouse", icon: Mouse },
  { value: "printer", label: "Printer", icon: Printer },
  { value: "rack", label: "Rack", icon: Box },
  { value: "switch", label: "Switch", icon: Network },
  { value: "access_point", label: "Access Point", icon: Wifi },
  { value: "n_computing", label: "N-Computing", icon: Router },
  { value: "server", label: "Server", icon: Server },
  { value: "cctv", label: "CCTV", icon: Camera },
  { value: "storage_device", label: "Storage Device", icon: HardDrive },
  { value: "ups", label: "UPS", icon: Battery },
  { value: "other", label: "Other Assets", icon: Package },
];

export const CATEGORIES = BUILTIN_CATEGORIES;

export const CATEGORY_LABEL: Record<string, string> = Object.fromEntries(
  BUILTIN_CATEGORIES.map((c) => [c.value, c.label])
);

export function getCustomCategories(): { value: string; label: string; isCustom: true }[] {
  if (typeof window === "undefined") return [];
  try {
    const data = localStorage.getItem("custom_asset_categories");
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

export function getAllCategories(): CategoryItem[] {
  const custom = getCustomCategories();
  const customItems: CategoryItem[] = custom.map((c) => ({
    value: c.value,
    label: c.label,
    icon: FolderPlus,
    isCustom: true,
  }));
  return [...BUILTIN_CATEGORIES, ...customItems];
}

export function getCategoryLabel(val?: string | null): string {
  if (!val) return "";
  const all = getAllCategories();
  const found = all.find((c) => c.value === val);
  if (found) return found.label;
  return val.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
}

export function addCustomCategory(label: string): CategoryItem {
  const trimmed = label.trim();
  if (!trimmed) throw new Error("Category name cannot be empty");
  const value = trimmed.toLowerCase().replace(/[^a-z0-9]+/g, "_");
  const all = getAllCategories();
  if (all.some((c) => c.value === value || c.label.toLowerCase() === trimmed.toLowerCase())) {
    throw new Error(`Category "${trimmed}" already exists`);
  }
  const custom = getCustomCategories();
  const newItem = { value, label: trimmed, isCustom: true as const };
  custom.push(newItem);
  localStorage.setItem("custom_asset_categories", JSON.stringify(custom));
  window.dispatchEvent(new Event("custom_categories_updated"));
  return { ...newItem, icon: FolderPlus };
}

export function deleteCustomCategory(value: string) {
  const custom = getCustomCategories().filter((c) => c.value !== value);
  localStorage.setItem("custom_asset_categories", JSON.stringify(custom));
  window.dispatchEvent(new Event("custom_categories_updated"));
}

export function useCategories() {
  const [categories, setCategories] = useState<CategoryItem[]>(getAllCategories());

  useEffect(() => {
    const handleUpdate = () => setCategories(getAllCategories());
    window.addEventListener("custom_categories_updated", handleUpdate);
    window.addEventListener("storage", handleUpdate);
    return () => {
      window.removeEventListener("custom_categories_updated", handleUpdate);
      window.removeEventListener("storage", handleUpdate);
    };
  }, []);

  return categories;
}

export type AssetStatus =
  | "available" | "assigned" | "in_repair" | "lost" | "damaged" | "returned" | "disposed";

export const STATUSES: { value: AssetStatus; label: string; tone: string }[] = [
  { value: "available", label: "Available", tone: "bg-success/15 text-success border-success/20" },
  { value: "assigned", label: "Assigned", tone: "bg-primary/15 text-primary border-primary/20" },
  { value: "in_repair", label: "In Repair", tone: "bg-warning/15 text-warning-foreground border-warning/30" },
  { value: "returned", label: "Returned", tone: "bg-muted text-muted-foreground border-border" },
  { value: "damaged", label: "Damaged", tone: "bg-destructive/15 text-destructive border-destructive/20" },
  { value: "lost", label: "Lost", tone: "bg-destructive/15 text-destructive border-destructive/20" },
  { value: "disposed", label: "Disposed", tone: "bg-muted text-muted-foreground border-border" },
];

export const STATUS_LABEL: Record<AssetStatus, string> = Object.fromEntries(
  STATUSES.map((s) => [s.value, s.label])
) as Record<AssetStatus, string>;

export function statusBadgeClass(s: AssetStatus): string {
  return STATUSES.find((x) => x.value === s)?.tone ?? "";
}
