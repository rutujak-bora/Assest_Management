import mongoose from "mongoose";
import dns from "dns";

// Ensure Node uses reliable DNS resolution for MongoDB Atlas SRV lookup
try {
  dns.setServers(["8.8.8.8", "8.8.4.4"]);
} catch {
  // Ignore if restricted in edge environment
}

const MONGODB_URI =
  process.env.MONGODB_URI ||
  process.env.VITE_MONGODB_URI ||
  "mongodb+srv://rutujak_db_user:JsC6tENYoUiEBg7n@assets.jq8ppq3.mongodb.net/asset_management?retryWrites=true&w=majority";

interface GlobalMongoose {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  // eslint-disable-next-line no-var
  var mongooseCache: GlobalMongoose | undefined;
}

let cached = global.mongooseCache;

if (!cached) {
  cached = global.mongooseCache = { conn: null, promise: null };
}

export async function connectToDatabase() {
  if (!cached) {
    cached = global.mongooseCache = { conn: null, promise: null };
  }

  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      serverSelectionTimeoutMS: 10000,
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
