/**
 * client.ts - MongoDB Database Client Adapter
 * Redirects all data operations and authentication to MongoDB Atlas via server functions.
 */

import {
  getEmployees,
  upsertEmployee,
  deleteEmployee,
  getAssets,
  getAssetById,
  upsertAsset,
  deleteAsset,
  getAssignments,
  createAssignment,
  returnAssignment,
  getAuditLogs,
  createAuditLog,
  loginMongoUser,
  getMasterData,
  upsertMasterItem,
  deleteMasterItem,
} from "@/lib/api/mongo.functions";

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

function setStoredUser(user: any) {
  if (typeof window === "undefined") return;
  if (user) {
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
  } else {
    localStorage.removeItem(AUTH_STORAGE_KEY);
  }
}

class QueryBuilder {
  private tableName: string;
  private filters: Record<string, any> = {};

  constructor(tableName: string) {
    this.tableName = tableName;
  }

  select(columns?: string) {
    return this;
  }

  eq(column: string, value: any) {
    this.filters[column] = value;
    return this;
  }

  or(filterStr: string) {
    return this;
  }

  order(column: string, opts?: { ascending?: boolean }) {
    return this;
  }

  limit(num: number) {
    return this;
  }

  async single() {
    const res = await this.execute();
    const data = Array.isArray(res.data) ? res.data[0] ?? null : res.data;
    return { data, error: null };
  }

  async maybeSingle() {
    return this.single();
  }

  async insert(values: any | any[]) {
    const items = Array.isArray(values) ? values : [values];
    const results = [];
    for (const item of items) {
      if (this.tableName === "employees") {
        const res = await upsertEmployee({ data: item });
        results.push(res);
      } else if (this.tableName === "assets") {
        const res = await upsertAsset({ data: item });
        results.push(res);
      } else if (this.tableName === "asset_assignments") {
        const res = await createAssignment({ data: item });
        results.push(res);
      } else if (this.tableName === "audit_log") {
        const res = await createAuditLog({ data: item });
        results.push(res);
      }
    }
    return { data: results.length === 1 ? results[0] : results, error: null };
  }

  async upsert(values: any | any[]) {
    return this.insert(values);
  }

  async update(values: any) {
    if (this.tableName === "assets" && this.filters.id) {
      const res = await upsertAsset({ data: { id: this.filters.id, ...values } });
      return { data: res, error: null };
    } else if (this.tableName === "employees" && this.filters.id) {
      const res = await upsertEmployee({ data: { id: this.filters.id, ...values } });
      return { data: res, error: null };
    } else if (this.tableName === "asset_assignments" && this.filters.id) {
      const res = await returnAssignment({ data: { id: this.filters.id, asset_id: values.asset_id, ...values } });
      return { data: res, error: null };
    }
    return { data: null, error: null };
  }

  async delete() {
    return {
      eq: async (column: string, val: any) => {
        if (this.tableName === "employees") {
          await deleteEmployee({ data: { id: val } });
        } else if (this.tableName === "assets") {
          await deleteAsset({ data: { id: val } });
        }
        return { data: null, error: null };
      },
    };
  }

  // Promise-like resolution when awaiting .select() or query builder directly
  then(resolve: (res: { data: any; error: any }) => void, reject: (err: any) => void) {
    this.execute().then(resolve, reject);
  }

  private async execute() {
    try {
      if (this.tableName === "employees") {
        const data = await getEmployees({});
        return { data, error: null };
      }
      if (this.tableName === "assets") {
        if (this.filters.id) {
          const data = await getAssetById({ data: { id: this.filters.id } });
          return { data, error: null };
        }
        const data = await getAssets({});
        return { data, error: null };
      }
      if (this.tableName === "asset_assignments") {
        const data = await getAssignments({});
        return { data, error: null };
      }
      if (this.tableName === "audit_log") {
        const data = await getAuditLogs();
        return { data, error: null };
      }
      return { data: [], error: null };
    } catch (error) {
      console.error(`[MongoDB Client] Query error on ${this.tableName}:`, error);
      return { data: [], error };
    }
  }
}

export const supabase = {
  from(tableName: string) {
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
            access_token: `mongo_token_${user.id || user._id}`,
          },
        },
        error: null,
      };
    },

    async getUser() {
      const user = getStoredUser();
      return { data: { user }, error: null };
    },

    async signInWithPassword({ email, password }: { email: string; password: string }) {
      try {
        const res = await loginMongoUser({ data: { email, password_hash: password } });
        setStoredUser(res.user);
        return { data: res, error: null };
      } catch (err: any) {
        return { data: { user: null, session: null }, error: err };
      }
    },

    async signUp({ email, password, options }: any) {
      try {
        const res = await loginMongoUser({ data: { email, password_hash: password } });
        setStoredUser(res.user);
        return { data: res, error: null };
      } catch (err: any) {
        return { data: { user: null, session: null }, error: err };
      }
    },

    async signOut() {
      setStoredUser(null);
      return { error: null };
    },

    onAuthStateChange(callback: (event: string, session: any) => void) {
      const user = getStoredUser();
      if (user) {
        callback("SIGNED_IN", { user });
      }
      return {
        data: {
          subscription: {
            unsubscribe() {},
          },
        },
      };
    },
  },

  storage: {
    from(bucket: string) {
      return {
        async upload(filePath: string, file: File) {
          // Store basic reference
          return { data: { path: filePath }, error: null };
        },
        getPublicUrl(filePath: string) {
          return { data: { publicUrl: `/uploads/${filePath}` } };
        },
      };
    },
  },
};
