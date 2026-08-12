import { m as mongoose } from "../_libs/mongoose.mjs";
import require$$0 from "dns";
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
try {
  require$$0.setServers(["8.8.8.8", "8.8.4.4"]);
} catch {
}
const MONGODB_URI = process.env.MONGODB_URI || process.env.VITE_MONGODB_URI || "mongodb+srv://rutujak_db_user:JsC6tENYoUiEBg7n@assets.jq8ppq3.mongodb.net/asset_management?retryWrites=true&w=majority";
let cached = global.mongooseCache;
if (!cached) {
  cached = global.mongooseCache = { conn: null, promise: null };
}
async function connectToDatabase() {
  if (!cached) {
    cached = global.mongooseCache = { conn: null, promise: null };
  }
  if (cached.conn) {
    return cached.conn;
  }
  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      serverSelectionTimeoutMS: 1e4
    };
    cached.promise = mongoose.connect(MONGODB_URI, opts).then((m) => {
      console.log("[MongoDB] Connected successfully to Atlas cluster ('asset_management' DB)");
      return m;
    });
  }
  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }
  return cached.conn;
}
export {
  connectToDatabase
};
