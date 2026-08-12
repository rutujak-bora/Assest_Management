/**
 * localMaster.ts
 * Manages Company, Department, and Location master data with local caching & MongoDB Atlas sync.
 */

import { useState, useEffect } from "react";
import { getMasterData, upsertMasterItem, deleteMasterItem } from "./api/mongo.functions";

export interface MasterItem {
  id: string;
  name: string;
  code?: string;
  description?: string;
  address?: string;
  [key: string]: string | undefined;
}

const KEYS = {
  companies: "bora_master_companies",
  departments: "bora_master_departments",
  locations: "bora_master_locations",
} as const;

export type MasterType = keyof typeof KEYS;

const EVENT = "bora-master-change";

function emit() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(EVENT));
  }
}

function loadLocal(type: MasterType): MasterItem[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(KEYS[type]) ?? "[]");
  } catch {
    return [];
  }
}

function saveLocal(type: MasterType, items: MasterItem[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(KEYS[type], JSON.stringify(items));
  emit();
}

export function getAll(type: MasterType): MasterItem[] {
  return loadLocal(type).sort((a, b) => a.name.localeCompare(b.name));
}

export function addItem(type: MasterType, fields: { name: string; [key: string]: any }): MasterItem {
  const items = loadLocal(type);
  const item: MasterItem = { ...fields, id: fields.id || crypto.randomUUID() };
  items.push(item);
  saveLocal(type, items);

  // Background sync to MongoDB Atlas
  upsertMasterItem({ data: { type, name: fields.name, ...fields } }).catch((err) =>
    console.error(`[Master Data] Failed to sync ${type} to MongoDB Atlas:`, err)
  );

  return item;
}

export function updateItem(type: MasterType, id: string, fields: Partial<MasterItem>): void {
  const items = loadLocal(type).map((it) => (it.id === id ? { ...it, ...fields } : it));
  saveLocal(type, items);

  const updated = items.find((it) => it.id === id);
  if (updated) {
    upsertMasterItem({ data: { id, type, name: updated.name, ...updated } }).catch((err) =>
      console.error(`[Master Data] Failed to sync ${type} update to MongoDB Atlas:`, err)
    );
  }
}

export function deleteItem(type: MasterType, id: string): void {
  const items = loadLocal(type).filter((it) => it.id !== id);
  saveLocal(type, items);

  deleteMasterItem({ data: { id } }).catch((err) =>
    console.error(`[Master Data] Failed to sync ${type} deletion to MongoDB Atlas:`, err)
  );
}

export function upsertByName(type: MasterType, incoming: { name: string; [key: string]: any }[]): number {
  const items = loadLocal(type);
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
    upsertMasterItem({ data: { type, name: row.name, ...row } }).catch(() => {});
  }
  saveLocal(type, items);
  return incoming.length;
}

export function useMaster(type: MasterType): MasterItem[] {
  const [items, setItems] = useState<MasterItem[]>(() => getAll(type));

  useEffect(() => {
    // Initial fetch from MongoDB Atlas
    getMasterData({ data: { type } })
      .then((remoteItems) => {
        if (Array.isArray(remoteItems) && remoteItems.length > 0) {
          saveLocal(type, remoteItems);
          setItems(remoteItems);
        }
      })
      .catch((err) => console.log(`[Master Data Hook] Loading cached ${type}`));

    const refresh = () => setItems(getAll(type));
    window.addEventListener(EVENT, refresh);
    return () => window.removeEventListener(EVENT, refresh);
  }, [type]);

  return items;
}
