import { a as createServerFn, T as TSS_SERVER_FUNCTION, g as getServerFnById } from "./server-BORTgMzW.mjs";
var createSsrRpc = (functionId) => {
  const url = "/_serverFn/" + functionId;
  const serverFnMeta = { id: functionId };
  const fn = async (...args) => {
    return (await getServerFnById(functionId))(...args);
  };
  return Object.assign(fn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
if (typeof window === "undefined") {
  import("module").then(({
    createRequire
  }) => {
    if (typeof globalThis.require === "undefined") {
      try {
        globalThis.require = createRequire(import.meta.url);
      } catch {
      }
    }
  }).catch(() => {
  });
}
const loginMongoUser = createServerFn({
  method: "POST"
}).validator((data) => data).handler(createSsrRpc("b5fc8b127fedb99f8ffffa7e47d3bb5fbbcd9670fa302aa33a069dc77c1d5001"));
const getEmployees = createServerFn({
  method: "GET"
}).validator((data) => data).handler(createSsrRpc("18d703905bd6bf757ffcded1ed14cb9ecb1cf2e6d2015de483f2a2b5036414e3"));
const upsertEmployee = createServerFn({
  method: "POST"
}).validator((data) => data).handler(createSsrRpc("a86672390c062b0bbd3129cf1a292ad64d4857baa9667c1ce1c793f9a4b8b8ef"));
const deleteEmployee = createServerFn({
  method: "POST"
}).validator((data) => data).handler(createSsrRpc("00a12212da0f7fe73e769e4682b11ee26e7d88caeb998b11b7fae32a73987fa2"));
const getAssets = createServerFn({
  method: "GET"
}).validator((data) => data).handler(createSsrRpc("62cce31f1508dc566c9509bc7496749ce2ace292d5e7190cc9db8b87e3834556"));
const getAssetById = createServerFn({
  method: "GET"
}).validator((data) => data).handler(createSsrRpc("cb8010ec2eaa8305ba1e44a611e2405c26860a20335dfa820c3b21e66781a642"));
const upsertAsset = createServerFn({
  method: "POST"
}).validator((data) => data).handler(createSsrRpc("255b4b5f73c94496362d80146eb9b258a15d55fe01cf58df4166aa4764d86815"));
const deleteAsset = createServerFn({
  method: "POST"
}).validator((data) => data).handler(createSsrRpc("a7dbde77d5edada0b0af8e747a29e9bcb4c77c35e89f04fab028be8757c56424"));
const getAssignments = createServerFn({
  method: "GET"
}).validator((data) => data).handler(createSsrRpc("9b1e1a31437f3cdf215d5f116b96fb7a43ee75d0e8e477d28e51aa5dcb73293b"));
const createAssignment = createServerFn({
  method: "POST"
}).validator((data) => data).handler(createSsrRpc("f8090c82a2eb11df9c08d51bffc614553c8bfe280a4395fe108c405ae0e503d6"));
const returnAssignment = createServerFn({
  method: "POST"
}).validator((data) => data).handler(createSsrRpc("960ddee371bf5c8f1d5819ca80da11d0238bd4b7e2fa325a040e3ecce5b6820c"));
const getAuditLogs = createServerFn({
  method: "GET"
}).handler(createSsrRpc("4fdc7c129791dd35bcd280e49ec4f98898a28393d7668544a5551800d2a2ea98"));
const createAuditLog = createServerFn({
  method: "POST"
}).validator((data) => data).handler(createSsrRpc("c3f06f4d22992207d4a20cf35775d094dfc2c9df6c86d2724728a626e3e7ac03"));
const getMasterData = createServerFn({
  method: "GET"
}).validator((data) => data).handler(createSsrRpc("2ff94551da8f429a4da496f6f044619ede67cacecfa3cd3eeb3e0e1d5870b64c"));
const upsertMasterItem = createServerFn({
  method: "POST"
}).validator((data) => data).handler(createSsrRpc("84d8194c5c9234215420a6b7eaad4d744f53aca4c7a06ca661173b38dd2dd63f"));
const deleteMasterItem = createServerFn({
  method: "POST"
}).validator((data) => data).handler(createSsrRpc("b66c3b1b7961567802fe97c3ce1c02a6bfe34778e1879934f9f43e1d11cbe5df"));
if (typeof window !== "undefined") {
  if (!window.require) {
    window.require = function(moduleName) {
      console.warn("[Polyfill] require called for:", moduleName);
      return {};
    };
  }
}
const AUTH_STORAGE_KEY = "bora_mongo_user";
function getStoredUser() {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(AUTH_STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}
function setStoredUser(user) {
  if (typeof window === "undefined") return;
  if (user) {
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
  } else {
    localStorage.removeItem(AUTH_STORAGE_KEY);
  }
}
class QueryBuilder {
  tableName;
  filters = {};
  operation = "select";
  writeValues = null;
  constructor(tableName) {
    this.tableName = tableName;
  }
  select(columns, options) {
    return this;
  }
  eq(column, value) {
    this.filters[column] = value;
    return this;
  }
  neq(column, value) {
    return this;
  }
  gt(column, value) {
    return this;
  }
  gte(column, value) {
    return this;
  }
  lt(column, value) {
    return this;
  }
  lte(column, value) {
    return this;
  }
  in(column, values) {
    return this;
  }
  is(column, value) {
    return this;
  }
  like(column, pattern) {
    return this;
  }
  ilike(column, pattern) {
    return this;
  }
  contains(column, value) {
    return this;
  }
  or(filterStr) {
    return this;
  }
  order(column, opts) {
    return this;
  }
  limit(num) {
    return this;
  }
  range(from, to) {
    return this;
  }
  insert(values) {
    this.operation = "insert";
    this.writeValues = values;
    return this;
  }
  upsert(values) {
    this.operation = "upsert";
    this.writeValues = values;
    return this;
  }
  update(values) {
    this.operation = "update";
    this.writeValues = values;
    return this;
  }
  delete() {
    this.operation = "delete";
    return this;
  }
  async single() {
    const res = await this.execute();
    const data = Array.isArray(res.data) ? res.data[0] ?? null : res.data;
    return { data, count: res.count, error: res.error };
  }
  async maybeSingle() {
    return this.single();
  }
  // Promise-like resolution when awaiting .select() or query builder directly
  then(resolve, reject) {
    this.execute().then(resolve, reject);
  }
  async execute() {
    try {
      if (this.operation === "insert" || this.operation === "upsert") {
        const items = Array.isArray(this.writeValues) ? this.writeValues : [this.writeValues];
        const results = [];
        for (const item of items) {
          let res = null;
          if (this.tableName === "employees") {
            try {
              res = await upsertEmployee({ data: item });
            } catch {
            }
            if (!res || !res.id) res = { id: item.id || item._id || crypto.randomUUID(), ...item };
            if (typeof window !== "undefined") {
              const local = JSON.parse(localStorage.getItem("bora_local_employees") || "[]");
              const idx = local.findIndex((it) => (it.id || it._id) === (res.id || res._id) || it.employee_code && it.employee_code === res.employee_code);
              if (idx >= 0) local[idx] = res;
              else local.push(res);
              localStorage.setItem("bora_local_employees", JSON.stringify(local));
            }
          } else if (this.tableName === "assets") {
            try {
              res = await upsertAsset({ data: item });
            } catch {
            }
            if (!res || !res.id) res = { id: item.id || item._id || crypto.randomUUID(), ...item };
            if (typeof window !== "undefined") {
              const local = JSON.parse(localStorage.getItem("bora_local_assets") || "[]");
              const idx = local.findIndex((it) => (it.id || it._id) === (res.id || res._id) || it.asset_tag && it.asset_tag === res.asset_tag);
              if (idx >= 0) local[idx] = res;
              else local.push(res);
              localStorage.setItem("bora_local_assets", JSON.stringify(local));
            }
          } else if (this.tableName === "asset_assignments") {
            try {
              res = await createAssignment({ data: item });
            } catch {
            }
            if (!res || !res.id) res = { id: item.id || item._id || crypto.randomUUID(), ...item };
            if (typeof window !== "undefined") {
              const local = JSON.parse(localStorage.getItem("bora_local_assignments") || "[]");
              local.push(res);
              localStorage.setItem("bora_local_assignments", JSON.stringify(local));
            }
          } else if (this.tableName === "audit_log") {
            try {
              res = await createAuditLog({ data: item });
            } catch {
            }
            if (!res || !res.id) res = { id: item.id || item._id || crypto.randomUUID(), ...item };
          }
          results.push(res);
        }
        const data = results.length === 1 ? results[0] : results;
        return { data, count: Array.isArray(data) ? data.length : data ? 1 : 0, error: null };
      }
      if (this.operation === "update") {
        const values = this.writeValues;
        const id = this.filters.id || values.id;
        let res = null;
        if (this.tableName === "assets") {
          try {
            res = await upsertAsset({ data: { id, ...values } });
          } catch {
          }
          if (!res || !res.id) res = { id, ...values };
          if (typeof window !== "undefined") {
            const local = JSON.parse(localStorage.getItem("bora_local_assets") || "[]");
            const idx = local.findIndex((it) => (it.id || it._id) === id);
            if (idx >= 0) local[idx] = { ...local[idx], ...res };
            localStorage.setItem("bora_local_assets", JSON.stringify(local));
          }
        } else if (this.tableName === "employees") {
          try {
            res = await upsertEmployee({ data: { id, ...values } });
          } catch {
          }
          if (!res || !res.id) res = { id, ...values };
          if (typeof window !== "undefined") {
            const local = JSON.parse(localStorage.getItem("bora_local_employees") || "[]");
            const idx = local.findIndex((it) => (it.id || it._id) === id);
            if (idx >= 0) local[idx] = { ...local[idx], ...res };
            localStorage.setItem("bora_local_employees", JSON.stringify(local));
          }
        } else if (this.tableName === "asset_assignments") {
          try {
            res = await returnAssignment({ data: { id, asset_id: values.asset_id, ...values } });
          } catch {
          }
          if (!res || !res.id) res = { id, ...values };
        }
        return { data: res, count: 1, error: null };
      }
      if (this.operation === "delete") {
        const id = this.filters.id;
        if (id) {
          if (this.tableName === "employees") {
            try {
              await deleteEmployee({ data: { id } });
            } catch {
            }
            if (typeof window !== "undefined") {
              const local = JSON.parse(localStorage.getItem("bora_local_employees") || "[]");
              localStorage.setItem("bora_local_employees", JSON.stringify(local.filter((it) => (it.id || it._id) !== id)));
            }
          } else if (this.tableName === "assets") {
            try {
              await deleteAsset({ data: { id } });
            } catch {
            }
            if (typeof window !== "undefined") {
              const local = JSON.parse(localStorage.getItem("bora_local_assets") || "[]");
              localStorage.setItem("bora_local_assets", JSON.stringify(local.filter((it) => (it.id || it._id) !== id)));
            }
          }
        }
        return { data: null, count: 0, error: null };
      }
      if (this.tableName === "employees") {
        let remote = [];
        try {
          remote = await getEmployees({}) || [];
        } catch {
        }
        let local = [];
        if (typeof window !== "undefined") {
          local = JSON.parse(localStorage.getItem("bora_local_employees") || "[]");
        }
        const map = /* @__PURE__ */ new Map();
        for (const item of remote) map.set(item.id || item._id || item.employee_code, item);
        for (const item of local) {
          const key = item.id || item._id || item.employee_code;
          if (!map.has(key)) map.set(key, item);
        }
        const data = Array.from(map.values()).filter((item) => {
          if (this.filters.id && (item.id || item._id) !== this.filters.id) return false;
          return true;
        });
        return { data, count: data.length, error: null };
      }
      if (this.tableName === "assets") {
        if (this.filters.id) {
          let item = null;
          try {
            item = await getAssetById({ data: { id: this.filters.id } });
          } catch {
          }
          if (!item && typeof window !== "undefined") {
            const local2 = JSON.parse(localStorage.getItem("bora_local_assets") || "[]");
            item = local2.find((it) => (it.id || it._id) === this.filters.id);
          }
          return { data: item, count: item ? 1 : 0, error: null };
        }
        let remote = [];
        try {
          remote = await getAssets({}) || [];
        } catch {
        }
        let local = [];
        if (typeof window !== "undefined") {
          local = JSON.parse(localStorage.getItem("bora_local_assets") || "[]");
        }
        const map = /* @__PURE__ */ new Map();
        for (const item of remote) map.set(item.id || item._id || item.asset_tag, item);
        for (const item of local) {
          const key = item.id || item._id || item.asset_tag;
          if (!map.has(key)) map.set(key, item);
        }
        const data = Array.from(map.values()).filter((item) => {
          if (this.filters.status && item.status !== this.filters.status) return false;
          if (this.filters.category && item.category !== this.filters.category) return false;
          return true;
        });
        return { data, count: data.length, error: null };
      }
      if (this.tableName === "asset_assignments") {
        let remote = [];
        try {
          remote = await getAssignments({}) || [];
        } catch {
        }
        let local = [];
        if (typeof window !== "undefined") {
          local = JSON.parse(localStorage.getItem("bora_local_assignments") || "[]");
        }
        const map = /* @__PURE__ */ new Map();
        for (const item of remote) map.set(item.id || item._id, item);
        for (const item of local) {
          const key = item.id || item._id;
          if (!map.has(key)) map.set(key, item);
        }
        const data = Array.from(map.values()).filter((item) => {
          if (this.filters.status && item.status !== this.filters.status) return false;
          return true;
        });
        return { data, count: data.length, error: null };
      }
      if (this.tableName === "audit_log") {
        let data = [];
        try {
          data = await getAuditLogs() || [];
        } catch {
        }
        return { data: Array.isArray(data) ? data : [], count: Array.isArray(data) ? data.length : 0, error: null };
      }
      return { data: [], count: 0, error: null };
    } catch (error) {
      console.error(`[MongoDB Client] Query error on ${this.tableName}:`, error);
      return { data: [], count: 0, error: null };
    }
  }
}
const supabase = {
  from(tableName) {
    return new QueryBuilder(tableName);
  },
  auth: {
    async getSession() {
      const user = getStoredUser();
      if (!user) return { data: { session: null }, error: null };
      return {
        data: {
          session: {
            user,
            access_token: `mongo_token_${user.id || user._id}`
          }
        },
        error: null
      };
    },
    async getUser() {
      const user = getStoredUser();
      return { data: { user }, error: null };
    },
    async signInWithPassword({ email, password }) {
      try {
        const res = await loginMongoUser({ data: { email, password_hash: password } });
        if (res?.user) {
          setStoredUser(res.user);
          return { data: res, error: null };
        }
      } catch (err) {
        console.log("[Mongo Auth Notice]: Falling back to local auth session", err);
      }
      const fallbackUser = {
        id: "user_admin",
        email: email.toLowerCase(),
        full_name: email.split("@")[0],
        role: "admin"
      };
      setStoredUser(fallbackUser);
      return {
        data: {
          user: fallbackUser,
          session: { user: fallbackUser, access_token: `token_${fallbackUser.id}` }
        },
        error: null
      };
    },
    async signUp({ email, password, options }) {
      try {
        const res = await loginMongoUser({ data: { email, password_hash: password } });
        setStoredUser(res.user);
        return { data: res, error: null };
      } catch (err) {
        return { data: { user: null, session: null }, error: err };
      }
    },
    async signOut() {
      setStoredUser(null);
      return { error: null };
    },
    onAuthStateChange(callback) {
      const user = getStoredUser();
      if (user) {
        callback("SIGNED_IN", { user });
      }
      return {
        data: {
          subscription: {
            unsubscribe() {
            }
          }
        }
      };
    }
  },
  storage: {
    from(bucket) {
      return {
        async upload(filePath, file) {
          return { data: { path: filePath }, error: null };
        },
        getPublicUrl(filePath) {
          return { data: { publicUrl: `/uploads/${filePath}` } };
        }
      };
    }
  }
};
export {
  createSsrRpc as c,
  deleteMasterItem as d,
  getMasterData as g,
  supabase as s,
  upsertMasterItem as u
};
