import { c as createServerRpc } from "./createServerRpc-DItu1Rma.mjs";
import { a as createServerFn } from "./server-BORTgMzW.mjs";
import "../_libs/seroval.mjs";
import "../_libs/react.mjs";
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
function serializeDoc(doc) {
  if (!doc) return doc;
  const obj = doc.toObject ? doc.toObject() : doc;
  if (obj._id) {
    obj.id = obj._id.toString();
    delete obj._id;
  }
  delete obj.__v;
  return obj;
}
function serializeList(list) {
  return list.map((item) => serializeDoc(item));
}
async function getDb() {
  const {
    connectToDatabase
  } = await import("./mongodb-Dg-JL1FA.mjs");
  const models = await import("./models-DLG83Lxo.mjs");
  await connectToDatabase();
  return models;
}
const loginMongoUser_createServerFn_handler = createServerRpc({
  id: "b5fc8b127fedb99f8ffffa7e47d3bb5fbbcd9670fa302aa33a069dc77c1d5001",
  name: "loginMongoUser",
  filename: "src/lib/api/mongo.functions.ts"
}, (opts) => loginMongoUser.__executeServer(opts));
const loginMongoUser = createServerFn({
  method: "POST"
}).validator((data) => data).handler(loginMongoUser_createServerFn_handler, async ({
  data
}) => {
  const {
    UserModel
  } = await getDb();
  const email = data.email.toLowerCase().trim();
  let user = await UserModel.findOne({
    email
  });
  if (!user && (email === "shahid@bora.tech" || email === "pravin@bora.tech" || email === "admin@bora.tech")) {
    user = await UserModel.create({
      email,
      password_hash: data.password_hash,
      full_name: email.split("@")[0],
      role: "admin"
    });
  }
  if (!user) {
    user = await UserModel.create({
      email,
      password_hash: data.password_hash,
      full_name: email.split("@")[0],
      role: "admin"
    });
  }
  return {
    user: serializeDoc(user),
    session: {
      user: serializeDoc(user),
      access_token: `mongo_token_${user._id}`
    }
  };
});
const getEmployees_createServerFn_handler = createServerRpc({
  id: "18d703905bd6bf757ffcded1ed14cb9ecb1cf2e6d2015de483f2a2b5036414e3",
  name: "getEmployees",
  filename: "src/lib/api/mongo.functions.ts"
}, (opts) => getEmployees.__executeServer(opts));
const getEmployees = createServerFn({
  method: "GET"
}).validator((data) => data).handler(getEmployees_createServerFn_handler, async ({
  data
}) => {
  const {
    EmployeeModel
  } = await getDb();
  const query = {};
  if (data?.q) {
    const reg = new RegExp(data.q, "i");
    query.$or = [{
      name: reg
    }, {
      employee_code: reg
    }, {
      email: reg
    }, {
      department: reg
    }, {
      location: reg
    }];
  }
  const employees = await EmployeeModel.find(query).sort({
    name: 1
  }).limit(500);
  return serializeList(employees);
});
const upsertEmployee_createServerFn_handler = createServerRpc({
  id: "a86672390c062b0bbd3129cf1a292ad64d4857baa9667c1ce1c793f9a4b8b8ef",
  name: "upsertEmployee",
  filename: "src/lib/api/mongo.functions.ts"
}, (opts) => upsertEmployee.__executeServer(opts));
const upsertEmployee = createServerFn({
  method: "POST"
}).validator((data) => data).handler(upsertEmployee_createServerFn_handler, async ({
  data
}) => {
  const {
    EmployeeModel
  } = await getDb();
  const {
    id,
    _id,
    ...fields
  } = data;
  let result;
  if (id || _id) {
    result = await EmployeeModel.findByIdAndUpdate(id || _id, fields, {
      new: true,
      upsert: true
    });
  } else {
    result = await EmployeeModel.findOneAndUpdate({
      employee_code: fields.employee_code
    }, fields, {
      new: true,
      upsert: true
    });
  }
  return serializeDoc(result);
});
const deleteEmployee_createServerFn_handler = createServerRpc({
  id: "00a12212da0f7fe73e769e4682b11ee26e7d88caeb998b11b7fae32a73987fa2",
  name: "deleteEmployee",
  filename: "src/lib/api/mongo.functions.ts"
}, (opts) => deleteEmployee.__executeServer(opts));
const deleteEmployee = createServerFn({
  method: "POST"
}).validator((data) => data).handler(deleteEmployee_createServerFn_handler, async ({
  data
}) => {
  const {
    EmployeeModel
  } = await getDb();
  await EmployeeModel.findByIdAndDelete(data.id);
  return {
    ok: true
  };
});
const getAssets_createServerFn_handler = createServerRpc({
  id: "62cce31f1508dc566c9509bc7496749ce2ace292d5e7190cc9db8b87e3834556",
  name: "getAssets",
  filename: "src/lib/api/mongo.functions.ts"
}, (opts) => getAssets.__executeServer(opts));
const getAssets = createServerFn({
  method: "GET"
}).validator((data) => data).handler(getAssets_createServerFn_handler, async ({
  data
}) => {
  const {
    AssetModel
  } = await getDb();
  const query = {};
  if (data?.q) {
    const reg = new RegExp(data.q, "i");
    query.$or = [{
      asset_tag: reg
    }, {
      product_name: reg
    }, {
      serial_number: reg
    }, {
      brand: reg
    }, {
      company: reg
    }, {
      location: reg
    }];
  }
  if (data?.status && data.status !== "all") query.status = data.status;
  if (data?.category && data.category !== "all") query.category = data.category;
  const assets = await AssetModel.find(query).sort({
    created_at: -1
  }).limit(1e3);
  return serializeList(assets);
});
const getAssetById_createServerFn_handler = createServerRpc({
  id: "cb8010ec2eaa8305ba1e44a611e2405c26860a20335dfa820c3b21e66781a642",
  name: "getAssetById",
  filename: "src/lib/api/mongo.functions.ts"
}, (opts) => getAssetById.__executeServer(opts));
const getAssetById = createServerFn({
  method: "GET"
}).validator((data) => data).handler(getAssetById_createServerFn_handler, async ({
  data
}) => {
  const {
    AssetModel
  } = await getDb();
  const asset = await AssetModel.findById(data.id);
  return serializeDoc(asset);
});
const upsertAsset_createServerFn_handler = createServerRpc({
  id: "255b4b5f73c94496362d80146eb9b258a15d55fe01cf58df4166aa4764d86815",
  name: "upsertAsset",
  filename: "src/lib/api/mongo.functions.ts"
}, (opts) => upsertAsset.__executeServer(opts));
const upsertAsset = createServerFn({
  method: "POST"
}).validator((data) => data).handler(upsertAsset_createServerFn_handler, async ({
  data
}) => {
  const {
    AssetModel
  } = await getDb();
  const {
    id,
    _id,
    ...fields
  } = data;
  let result;
  if (id || _id) {
    result = await AssetModel.findByIdAndUpdate(id || _id, fields, {
      new: true,
      upsert: true
    });
  } else {
    result = await AssetModel.findOneAndUpdate({
      asset_tag: fields.asset_tag
    }, fields, {
      new: true,
      upsert: true
    });
  }
  return serializeDoc(result);
});
const deleteAsset_createServerFn_handler = createServerRpc({
  id: "a7dbde77d5edada0b0af8e747a29e9bcb4c77c35e89f04fab028be8757c56424",
  name: "deleteAsset",
  filename: "src/lib/api/mongo.functions.ts"
}, (opts) => deleteAsset.__executeServer(opts));
const deleteAsset = createServerFn({
  method: "POST"
}).validator((data) => data).handler(deleteAsset_createServerFn_handler, async ({
  data
}) => {
  const {
    AssetModel
  } = await getDb();
  await AssetModel.findByIdAndDelete(data.id);
  return {
    ok: true
  };
});
const getAssignments_createServerFn_handler = createServerRpc({
  id: "9b1e1a31437f3cdf215d5f116b96fb7a43ee75d0e8e477d28e51aa5dcb73293b",
  name: "getAssignments",
  filename: "src/lib/api/mongo.functions.ts"
}, (opts) => getAssignments.__executeServer(opts));
const getAssignments = createServerFn({
  method: "GET"
}).validator((data) => data).handler(getAssignments_createServerFn_handler, async ({
  data
}) => {
  const {
    AssignmentModel
  } = await getDb();
  const query = {};
  if (data?.status && data.status !== "all") query.status = data.status;
  const assignments = await AssignmentModel.find(query).sort({
    assigned_at: -1
  }).limit(1e3);
  return serializeList(assignments);
});
const createAssignment_createServerFn_handler = createServerRpc({
  id: "f8090c82a2eb11df9c08d51bffc614553c8bfe280a4395fe108c405ae0e503d6",
  name: "createAssignment",
  filename: "src/lib/api/mongo.functions.ts"
}, (opts) => createAssignment.__executeServer(opts));
const createAssignment = createServerFn({
  method: "POST"
}).validator((data) => data).handler(createAssignment_createServerFn_handler, async ({
  data
}) => {
  const {
    AssignmentModel,
    AssetModel
  } = await getDb();
  const assignment = await AssignmentModel.create(data);
  if (data.asset_id) {
    await AssetModel.findByIdAndUpdate(data.asset_id, {
      status: "assigned",
      current_employee_id: data.employee_id
    });
  }
  return serializeDoc(assignment);
});
const returnAssignment_createServerFn_handler = createServerRpc({
  id: "960ddee371bf5c8f1d5819ca80da11d0238bd4b7e2fa325a040e3ecce5b6820c",
  name: "returnAssignment",
  filename: "src/lib/api/mongo.functions.ts"
}, (opts) => returnAssignment.__executeServer(opts));
const returnAssignment = createServerFn({
  method: "POST"
}).validator((data) => data).handler(returnAssignment_createServerFn_handler, async ({
  data
}) => {
  const {
    AssignmentModel,
    AssetModel
  } = await getDb();
  const assignment = await AssignmentModel.findByIdAndUpdate(data.id, {
    status: "returned",
    returned_at: /* @__PURE__ */ new Date(),
    remarks: data.remarks
  }, {
    new: true
  });
  if (data.asset_id) {
    await AssetModel.findByIdAndUpdate(data.asset_id, {
      status: "available",
      current_employee_id: null
    });
  }
  return serializeDoc(assignment);
});
const getAuditLogs_createServerFn_handler = createServerRpc({
  id: "4fdc7c129791dd35bcd280e49ec4f98898a28393d7668544a5551800d2a2ea98",
  name: "getAuditLogs",
  filename: "src/lib/api/mongo.functions.ts"
}, (opts) => getAuditLogs.__executeServer(opts));
const getAuditLogs = createServerFn({
  method: "GET"
}).handler(getAuditLogs_createServerFn_handler, async () => {
  const {
    AuditLogModel
  } = await getDb();
  const logs = await AuditLogModel.find({}).sort({
    created_at: -1
  }).limit(500);
  return serializeList(logs);
});
const createAuditLog_createServerFn_handler = createServerRpc({
  id: "c3f06f4d22992207d4a20cf35775d094dfc2c9df6c86d2724728a626e3e7ac03",
  name: "createAuditLog",
  filename: "src/lib/api/mongo.functions.ts"
}, (opts) => createAuditLog.__executeServer(opts));
const createAuditLog = createServerFn({
  method: "POST"
}).validator((data) => data).handler(createAuditLog_createServerFn_handler, async ({
  data
}) => {
  const {
    AuditLogModel
  } = await getDb();
  const log = await AuditLogModel.create(data);
  return serializeDoc(log);
});
const getMasterData_createServerFn_handler = createServerRpc({
  id: "2ff94551da8f429a4da496f6f044619ede67cacecfa3cd3eeb3e0e1d5870b64c",
  name: "getMasterData",
  filename: "src/lib/api/mongo.functions.ts"
}, (opts) => getMasterData.__executeServer(opts));
const getMasterData = createServerFn({
  method: "GET"
}).validator((data) => data).handler(getMasterData_createServerFn_handler, async ({
  data
}) => {
  const {
    CompanyModel,
    DepartmentModel,
    LocationModel
  } = await getDb();
  let items;
  if (data.type === "companies") {
    items = await CompanyModel.find({}).sort({
      name: 1
    });
  } else if (data.type === "departments") {
    items = await DepartmentModel.find({}).sort({
      name: 1
    });
  } else {
    items = await LocationModel.find({}).sort({
      name: 1
    });
  }
  return serializeList(items);
});
const upsertMasterItem_createServerFn_handler = createServerRpc({
  id: "84d8194c5c9234215420a6b7eaad4d744f53aca4c7a06ca661173b38dd2dd63f",
  name: "upsertMasterItem",
  filename: "src/lib/api/mongo.functions.ts"
}, (opts) => upsertMasterItem.__executeServer(opts));
const upsertMasterItem = createServerFn({
  method: "POST"
}).validator((data) => data).handler(upsertMasterItem_createServerFn_handler, async ({
  data
}) => {
  const {
    CompanyModel,
    DepartmentModel,
    LocationModel
  } = await getDb();
  const {
    id,
    _id,
    type,
    name,
    ...rest
  } = data;
  const cleanName = name.trim();
  let item;
  if (type === "companies") {
    item = await CompanyModel.findOneAndUpdate({
      name: new RegExp(`^${cleanName}$`, "i")
    }, {
      name: cleanName,
      ...rest
    }, {
      new: true,
      upsert: true
    });
  } else if (type === "departments") {
    item = await DepartmentModel.findOneAndUpdate({
      name: new RegExp(`^${cleanName}$`, "i")
    }, {
      name: cleanName,
      ...rest
    }, {
      new: true,
      upsert: true
    });
  } else {
    item = await LocationModel.findOneAndUpdate({
      name: new RegExp(`^${cleanName}$`, "i")
    }, {
      name: cleanName,
      ...rest
    }, {
      new: true,
      upsert: true
    });
  }
  return serializeDoc(item);
});
const deleteMasterItem_createServerFn_handler = createServerRpc({
  id: "b66c3b1b7961567802fe97c3ce1c02a6bfe34778e1879934f9f43e1d11cbe5df",
  name: "deleteMasterItem",
  filename: "src/lib/api/mongo.functions.ts"
}, (opts) => deleteMasterItem.__executeServer(opts));
const deleteMasterItem = createServerFn({
  method: "POST"
}).validator((data) => data).handler(deleteMasterItem_createServerFn_handler, async ({
  data
}) => {
  const {
    CompanyModel,
    DepartmentModel,
    LocationModel
  } = await getDb();
  if (data.type === "companies") {
    await CompanyModel.findByIdAndDelete(data.id);
  } else if (data.type === "departments") {
    await DepartmentModel.findByIdAndDelete(data.id);
  } else if (data.type === "locations") {
    await LocationModel.findByIdAndDelete(data.id);
  } else {
    await CompanyModel.findByIdAndDelete(data.id);
    await DepartmentModel.findByIdAndDelete(data.id);
    await LocationModel.findByIdAndDelete(data.id);
  }
  return {
    ok: true
  };
});
export {
  createAssignment_createServerFn_handler,
  createAuditLog_createServerFn_handler,
  deleteAsset_createServerFn_handler,
  deleteEmployee_createServerFn_handler,
  deleteMasterItem_createServerFn_handler,
  getAssetById_createServerFn_handler,
  getAssets_createServerFn_handler,
  getAssignments_createServerFn_handler,
  getAuditLogs_createServerFn_handler,
  getEmployees_createServerFn_handler,
  getMasterData_createServerFn_handler,
  loginMongoUser_createServerFn_handler,
  returnAssignment_createServerFn_handler,
  upsertAsset_createServerFn_handler,
  upsertEmployee_createServerFn_handler,
  upsertMasterItem_createServerFn_handler
};
