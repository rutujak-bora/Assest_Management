import { r as reactExports } from "../_libs/react.mjs";
import { g as getMasterData, u as upsertMasterItem, d as deleteMasterItem } from "./client-ByslKVxo.mjs";
const KEYS = {
  companies: "bora_master_companies",
  departments: "bora_master_departments",
  locations: "bora_master_locations"
};
const EVENT = "bora-master-change";
function emit() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(EVENT));
  }
}
function loadLocal(type) {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(KEYS[type]) ?? "[]");
  } catch {
    return [];
  }
}
function saveLocal(type, items) {
  if (typeof window === "undefined") return;
  localStorage.setItem(KEYS[type], JSON.stringify(items));
  emit();
}
function getAll(type) {
  return loadLocal(type).sort((a, b) => a.name.localeCompare(b.name));
}
function addItem(type, fields) {
  const items = loadLocal(type);
  const newItem = { ...fields, id: fields.id || crypto.randomUUID() };
  items.push(newItem);
  saveLocal(type, items);
  try {
    upsertMasterItem({ data: { type, name: fields.name.trim(), ...fields } }).then((res) => {
      if (res?.id) {
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
function updateItem(type, id, fields) {
  const items = loadLocal(type).map((it) => it.id === id ? { ...it, ...fields } : it);
  saveLocal(type, items);
  const updated = items.find((it) => it.id === id);
  if (updated) {
    try {
      upsertMasterItem({ data: { id, type, name: updated.name.trim(), ...updated } }).catch(
        (err) => console.error(`[Master Data DB Sync] Error updating ${type}:`, err)
      );
    } catch (err) {
      console.error(`[Master Data DB Sync Exception]`, err);
    }
  }
}
function deleteItem(type, id) {
  const items = loadLocal(type).filter((it) => it.id !== id);
  saveLocal(type, items);
  try {
    deleteMasterItem({ data: { id } }).catch(
      (err) => console.error(`[Master Data DB Sync] Error deleting ${type}:`, err)
    );
  } catch (err) {
    console.error(`[Master Data DB Sync Exception]`, err);
  }
}
function upsertByName(type, incoming) {
  const items = loadLocal(type);
  for (const row of incoming) {
    if (!row.name?.trim()) continue;
    const cleanName = row.name.trim();
    const idx = items.findIndex((it) => it.name.toLowerCase() === cleanName.toLowerCase());
    if (idx >= 0) {
      items[idx] = { ...items[idx], ...row, name: cleanName };
    } else {
      items.push({ ...row, id: crypto.randomUUID(), name: cleanName });
    }
    try {
      upsertMasterItem({ data: { type, name: cleanName, ...row } }).catch(() => {
      });
    } catch {
    }
  }
  saveLocal(type, items);
  return incoming.length;
}
function useMaster(type) {
  const [items, setItems] = reactExports.useState(() => getAll(type));
  reactExports.useEffect(() => {
    getMasterData({ data: { type } }).then((remoteItems) => {
      if (Array.isArray(remoteItems) && remoteItems.length > 0) {
        const local = loadLocal(type);
        const mergedMap = /* @__PURE__ */ new Map();
        for (const item of remoteItems) {
          mergedMap.set(item.name.toLowerCase(), item);
        }
        for (const item of local) {
          if (!mergedMap.has(item.name.toLowerCase())) {
            mergedMap.set(item.name.toLowerCase(), item);
            upsertMasterItem({ data: { type, ...item } }).catch(() => {
            });
          }
        }
        const mergedList = Array.from(mergedMap.values()).sort((a, b) => a.name.localeCompare(b.name));
        saveLocal(type, mergedList);
        setItems(mergedList);
      }
    }).catch((err) => console.log(`[Master Data Hook] Loading cached ${type}`));
    const refresh = () => setItems(getAll(type));
    window.addEventListener(EVENT, refresh);
    return () => window.removeEventListener(EVENT, refresh);
  }, [type]);
  return items;
}
export {
  upsertByName as a,
  updateItem as b,
  addItem as c,
  deleteItem as d,
  useMaster as u
};
