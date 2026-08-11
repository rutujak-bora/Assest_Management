/**
 * localMaster.ts
 * Stores Company, Department, and Location master data in localStorage.
 * Since these tables don't exist in the Supabase DB, we manage them client-side.
 */

import { useState, useEffect } from "react";

export interface MasterItem {
  id: string;
  name: string;
  [key: string]: string | undefined;
}

// ─── Storage keys ───────────────────────────────────────────────────────────
const KEYS = {
  companies: "bora_master_companies",
  departments: "bora_master_departments",
  locations: "bora_master_locations",
} as const;

export type MasterType = keyof typeof KEYS;

// ─── Event name for cross-component reactivity ───────────────────────────────
const EVENT = "bora-master-change";

function emit() {
  window.dispatchEvent(new Event(EVENT));
}

// ─── Core CRUD ───────────────────────────────────────────────────────────────
function load(type: MasterType): MasterItem[] {
  try {
    return JSON.parse(localStorage.getItem(KEYS[type]) ?? "[]");
  } catch {
    return [];
  }
}

function save(type: MasterType, items: MasterItem[]) {
  localStorage.setItem(KEYS[type], JSON.stringify(items));
  emit();
}

export function getAll(type: MasterType): MasterItem[] {
  return load(type).sort((a, b) => a.name.localeCompare(b.name));
}

export function addItem(type: MasterType, fields: { name: string; [key: string]: any }): MasterItem {
  const items = load(type);
  const item: MasterItem = { ...fields, id: crypto.randomUUID() };
  items.push(item);
  save(type, items);
  return item;
}

export function updateItem(type: MasterType, id: string, fields: Partial<MasterItem>): void {
  const items = load(type).map((it) => (it.id === id ? { ...it, ...fields } : it));
  save(type, items);
}

export function deleteItem(type: MasterType, id: string): void {
  const items = load(type).filter((it) => it.id !== id);
  save(type, items);
}

export function upsertByName(type: MasterType, incoming: { name: string; [key: string]: any }[]): number {
  const items = load(type);
  let count = 0;
  for (const row of incoming) {
    if (!row.name) continue;
    const idx = items.findIndex((it) => it.name.toLowerCase() === row.name.toLowerCase());
    if (idx >= 0) {
      items[idx] = { ...items[idx], ...row };
    } else {
      items.push({ ...row, id: crypto.randomUUID(), name: row.name });
      count++;
    }
  }
  save(type, items);
  return incoming.length;
}

// ─── React Hook ──────────────────────────────────────────────────────────────
export function useMaster(type: MasterType): MasterItem[] {
  const [items, setItems] = useState<MasterItem[]>(() => getAll(type));

  useEffect(() => {
    const refresh = () => setItems(getAll(type));
    window.addEventListener(EVENT, refresh);
    return () => window.removeEventListener(EVENT, refresh);
  }, [type]);

  return items;
}
