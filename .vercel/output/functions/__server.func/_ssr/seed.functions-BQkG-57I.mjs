import { c as createServerRpc } from "./createServerRpc-DIkLVBPN.mjs";
import { a as createServerFn } from "./server-C-MZQjZi.mjs";
import { connectToDatabase } from "./mongodb-Dg-JL1FA.mjs";
import { UserModel } from "./models-DLG83Lxo.mjs";
import "../_libs/seroval.mjs";
import "../_libs/react.mjs";
import "../_libs/mongoose.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:stream";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "dns";
import "events";
import "assert";
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
const SEED_USERS = [{
  email: "shahid@bora.tech",
  password: "shahid@123",
  full_name: "Shahid"
}, {
  email: "pravin@bora.tech",
  password: "pravin@123",
  full_name: "Pravin"
}];
const seedDefaultUsers_createServerFn_handler = createServerRpc({
  id: "e290cc98557908cfb5f64f92732a26790fdb57d959705b95ba53c60da4d876b5",
  name: "seedDefaultUsers",
  filename: "src/lib/seed.functions.ts"
}, (opts) => seedDefaultUsers.__executeServer(opts));
const seedDefaultUsers = createServerFn({
  method: "POST"
}).handler(seedDefaultUsers_createServerFn_handler, async () => {
  try {
    await connectToDatabase();
    const results = [];
    for (const u of SEED_USERS) {
      const exists = await UserModel.findOne({
        email: u.email.toLowerCase()
      });
      if (exists) {
        results.push({
          email: u.email,
          created: false
        });
        continue;
      }
      await UserModel.create({
        email: u.email.toLowerCase(),
        password_hash: u.password,
        full_name: u.full_name,
        role: "admin"
      });
      results.push({
        email: u.email,
        created: true
      });
    }
    return {
      ok: true,
      results
    };
  } catch (error) {
    console.error("[MongoDB Seed Users Error]:", error);
    return {
      ok: false,
      error: error.message
    };
  }
});
export {
  seedDefaultUsers_createServerFn_handler
};
