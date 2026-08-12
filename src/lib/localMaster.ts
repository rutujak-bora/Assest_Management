/**
 * localMaster.ts
 * Manages Company, Department, and Location master data with local caching & live MongoDB Atlas sync.
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
  const newItem: MasterItem = { ...fields, id: fields.id || crypto.randomUUID() };
  items.push(newItem);
  saveLocal(type, items);

  // Sync to MongoDB Atlas database
  try {
    upsertMasterItem({ data: { type, name: fields.name.trim(), ...fields } }).then((res: any) => {
      if (res?.id) {
        // Update local item with MongoDB generated ID if needed
        const current = loadLocal(type);
        const idx = current.findIndex((it) => it.name.toLowerCase() === fields.name.trim().toLowerCase());
        if (idx >= 0) {
          current[idx].id = res.id;
          saveLocal(type, current);
        }
      }
    }).catch((err) => console.error(`[Master Data DB Sync] Error adding ${type}:`, err));
  } catch (err) {
    console.error(`[Master Data DB Sync Exception]`, err);
  }

  return newItem;
}

export function updateItem(type: MasterType, id: string, fields: Partial<MasterItem>): void {
  const items = loadLocal(type).map((it) => (it.id === id ? { ...it, ...fields } : it));
  saveLocal(type, items);

  const updated = items.find((it) => it.id === id);
  if (updated) {
    try {
      upsertMasterItem({ data: { id, type, name: updated.name.trim(), ...updated } }).catch((err) =>
        console.error(`[Master Data DB Sync] Error updating ${type}:`, err)
      );
    } catch (err) {
      console.error(`[Master Data DB Sync Exception]`, err);
    }
  }
}

export function deleteItem(type: MasterType, id: string): void {
  const items = loadLocal(type).filter((it) => it.id !== id);
  saveLocal(type, items);

  try {
    deleteMasterItem({ data: { id } }).catch((err) =>
      console.error(`[Master Data DB Sync] Error deleting ${type}:`, err)
    );
  } catch (err) {
    console.error(`[Master Data DB Sync Exception]`, err);
  }
}

export function upsertByName(type: MasterType, incoming: { name: string; [key: string]: any }[]): number {
  const items = loadLocal(type);
  let count = 0;
  for (const row of incoming) {
    if (!row.name?.trim()) continue;
    const cleanName = row.name.trim();
    const idx = items.findIndex((it) => it.name.toLowerCase() === cleanName.toLowerCase());
    if (idx >= 0) {
      items[idx] = { ...items[idx], ...row, name: cleanName };
    } else {
      items.push({ ...row, id: crypto.randomUUID(), name: cleanName });
      count++;
    }
    try {
      upsertMasterItem({ data: { type, name: cleanName, ...row } }).catch(() => {});
    } catch {}
  }
  saveLocal(type, items);
  return incoming.length;
}

export function useMaster(type: MasterType): MasterItem[] {
  const [items, setItems] = useState<MasterItem[]>(() => getAll(type));

  useEffect(() => {
    // Fetch live entries from MongoDB Atlas database
    getMasterData({ data: { type } })
      .then((remoteItems) => {
        if (Array.isArray(remoteItems) && remoteItems.length > 0) {
          const local = loadLocal(type);
          // Merge remote items with local items by name
          const mergedMap = new Map<string, MasterItem>();
          for (const item of remoteItems) {
            mergedMap.set(item.name.toLowerCase(), item);
          }
          for (const item of local) {
            if (!mergedMap.has(item.name.toLowerCase())) {
              mergedMap.set(item.name.toLowerCase(), item);
              // Push local-only item to MongoDB Atlas
              upsertMasterItem({ data: { type, ...item } }).catch(() => {});
            }
          }
          const mergedList = Array.from(mergedMap.values()).sort((a, b) => a.name.localeCompare(b.name));
          saveLocal(type, mergedList);
          setItems(mergedList);
        }
      })
      .catch((err) => console.log(`[Master Data Hook] Loading cached ${type}`));

    const refresh = () => setItems(getAll(type));
    window.addEventListener(EVENT, refresh);
    return () => window.removeEventListener(EVENT, refresh);
  }, [type]);

  return items;
}
