import require$$0 from "assert";
import require$$1 from "util";
import { c as commonjsGlobal } from "./react.mjs";
var mquery = { exports: {} };
var utils = {};
var hasRequiredUtils;
function requireUtils() {
  if (hasRequiredUtils) return utils;
  hasRequiredUtils = 1;
  (function(exports) {
    const specialProperties = ["__proto__", "constructor", "prototype"];
    const clone = exports.clone = function clone2(obj, options) {
      if (obj === void 0 || obj === null)
        return obj;
      if (Array.isArray(obj))
        return exports.cloneArray(obj, options);
      if (obj.constructor) {
        if (/ObjectI[dD]$/.test(obj.constructor.name)) {
          return "function" == typeof obj.clone ? obj.clone() : new obj.constructor(obj.id);
        }
        if (obj.constructor.name === "ReadPreference") {
          return new obj.constructor(obj.mode, clone2(obj.tags, options));
        }
        if ("Binary" == obj._bsontype && obj.buffer && obj.value) {
          return "function" == typeof obj.clone ? obj.clone() : new obj.constructor(obj.value(true), obj.sub_type);
        }
        if ("Date" === obj.constructor.name || "Function" === obj.constructor.name)
          return new obj.constructor(+obj);
        if ("RegExp" === obj.constructor.name)
          return new RegExp(obj);
        if ("Buffer" === obj.constructor.name)
          return Buffer.from(obj);
      }
      if (isObject(obj))
        return exports.cloneObject(obj, options);
      if (obj.valueOf)
        return obj.valueOf();
    };
    exports.cloneObject = function cloneObject(obj, options) {
      const minimize = options && options.minimize, ret = {}, keys = Object.keys(obj), len = keys.length;
      let hasKeys = false, val, k = "", i = 0;
      for (i = 0; i < len; ++i) {
        k = keys[i];
        if (specialProperties.indexOf(k) !== -1) {
          continue;
        }
        val = clone(obj[k], options);
        if (!minimize || "undefined" !== typeof val) {
          hasKeys || (hasKeys = true);
          ret[k] = val;
        }
      }
      return minimize ? hasKeys && ret : ret;
    };
    exports.cloneArray = function cloneArray(arr, options) {
      const ret = [], l = arr.length;
      let i = 0;
      for (; i < l; i++)
        ret.push(clone(arr[i], options));
      return ret;
    };
    exports.merge = function merge(to, from) {
      const keys = Object.keys(from);
      for (const key of keys) {
        if (specialProperties.indexOf(key) !== -1) {
          continue;
        }
        if ("undefined" === typeof to[key]) {
          to[key] = from[key];
        } else {
          if (exports.isObject(from[key])) {
            merge(to[key], from[key]);
          } else {
            to[key] = from[key];
          }
        }
      }
    };
    exports.mergeClone = function mergeClone(to, from) {
      const keys = Object.keys(from);
      for (const key of keys) {
        if (specialProperties.indexOf(key) !== -1) {
          continue;
        }
        if ("undefined" === typeof to[key]) {
          to[key] = clone(from[key]);
        } else {
          if (exports.isObject(from[key])) {
            mergeClone(to[key], from[key]);
          } else {
            to[key] = clone(from[key]);
          }
        }
      }
    };
    exports.readPref = function readPref(pref) {
      switch (pref) {
        case "p":
          pref = "primary";
          break;
        case "pp":
          pref = "primaryPreferred";
          break;
        case "s":
          pref = "secondary";
          break;
        case "sp":
          pref = "secondaryPreferred";
          break;
        case "n":
          pref = "nearest";
          break;
      }
      return pref;
    };
    exports.readConcern = function readConcern(concern) {
      if ("string" === typeof concern) {
        switch (concern) {
          case "l":
            concern = "local";
            break;
          case "a":
            concern = "available";
            break;
          case "m":
            concern = "majority";
            break;
          case "lz":
            concern = "linearizable";
            break;
          case "s":
            concern = "snapshot";
            break;
        }
        concern = { level: concern };
      }
      return concern;
    };
    const _toString = Object.prototype.toString;
    exports.toString = function(arg) {
      return _toString.call(arg);
    };
    const isObject = exports.isObject = function(arg) {
      return "[object Object]" == exports.toString(arg);
    };
    exports.keys = Object.keys;
    exports.create = "function" == typeof Object.create ? Object.create : create;
    function create(proto) {
      if (arguments.length > 1) {
        throw new Error("Adding properties is not supported");
      }
      function F() {
      }
      F.prototype = proto;
      return new F();
    }
    exports.inherits = function(ctor, superCtor) {
      ctor.prototype = exports.create(superCtor.prototype);
      ctor.prototype.constructor = ctor;
    };
    exports.isArgumentsObject = function(v) {
      return Object.prototype.toString.call(v) === "[object Arguments]";
    };
  })(utils);
  return utils;
}
var permissions = {};
var hasRequiredPermissions;
function requirePermissions() {
  if (hasRequiredPermissions) return permissions;
  hasRequiredPermissions = 1;
  (function(exports) {
    const denied = exports;
    denied.distinct = function(self) {
      if (self._fields && Object.keys(self._fields).length > 0) {
        return "field selection and slice";
      }
      const keys = Object.keys(denied.distinct);
      let err;
      keys.every(function(option) {
        if (self.options[option]) {
          err = option;
          return false;
        }
        return true;
      });
      return err;
    };
    denied.distinct.select = denied.distinct.slice = denied.distinct.sort = denied.distinct.limit = denied.distinct.skip = denied.distinct.batchSize = denied.distinct.hint = denied.distinct.tailable = true;
    denied.findOneAndUpdate = denied.findOneAndDelete = function(self) {
      const keys = Object.keys(denied.findOneAndUpdate);
      let err;
      keys.every(function(option) {
        if (self.options[option]) {
          err = option;
          return false;
        }
        return true;
      });
      return err;
    };
    denied.findOneAndUpdate.limit = denied.findOneAndUpdate.skip = denied.findOneAndUpdate.batchSize = denied.findOneAndUpdate.tailable = true;
    denied.findOneAndReplace = function(self) {
      const keys = Object.keys(denied.findOneAndUpdate);
      let err;
      keys.every(function(option) {
        if (self.options[option]) {
          err = option;
          return false;
        }
        return true;
      });
      return err;
    };
    denied.countDocuments = function(self) {
      if (self._fields && Object.keys(self._fields).length > 0) {
        return "field selection and slice";
      }
      const keys = Object.keys(denied.countDocuments);
      let err;
      keys.every(function(option) {
        if (self.options[option]) {
          err = option;
          return false;
        }
        return true;
      });
      return err;
    };
    denied.countDocuments.slice = denied.countDocuments.batchSize = denied.countDocuments.tailable = true;
  })(permissions);
  return permissions;
}
var env = { exports: {} };
var hasRequiredEnv;
function requireEnv() {
  if (hasRequiredEnv) return env.exports;
  hasRequiredEnv = 1;
  (function(module, exports) {
    exports.isNode = "undefined" != typeof process && true && "object" == typeof commonjsGlobal && "function" == typeof Buffer && process.argv;
    exports.isMongo = !exports.isNode && "function" == typeof printjson && "function" == typeof ObjectId && "function" == typeof rs && "function" == typeof sh;
    exports.isBrowser = !exports.isNode && !exports.isMongo && "undefined" != typeof window;
    exports.type = exports.isNode ? "node" : exports.isMongo ? "mongo" : exports.isBrowser ? "browser" : "unknown";
  })(env, env.exports);
  return env.exports;
}
var node = { exports: {} };
var collection$1 = { exports: {} };
var hasRequiredCollection$1;
function requireCollection$1() {
  if (hasRequiredCollection$1) return collection$1.exports;
  hasRequiredCollection$1 = 1;
  (function(module, exports) {
    const methods = [
      "find",
      "findOne",
      "updateMany",
      "updateOne",
      "replaceOne",
      "countDocuments",
      "estimatedDocumentCount",
      "distinct",
      "findOneAndDelete",
      "findOneAndReplace",
      "findOneAndUpdate",
      "aggregate",
      "findCursor",
      "deleteOne",
      "deleteMany"
    ];
    function Collection() {
    }
    for (let i = 0, len = methods.length; i < len; ++i) {
      const method = methods[i];
      Collection.prototype[method] = notImplemented(method);
    }
    module.exports = Collection;
    Collection.methods = methods;
    function notImplemented(method) {
      return function() {
        throw new Error("collection." + method + " not implemented");
      };
    }
  })(collection$1);
  return collection$1.exports;
}
var hasRequiredNode;
function requireNode() {
  if (hasRequiredNode) return node.exports;
  hasRequiredNode = 1;
  (function(module, exports) {
    const Collection = requireCollection$1();
    class NodeCollection extends Collection {
      constructor(col) {
        super();
        this.collection = col;
        this.collectionName = col.collectionName;
      }
      /**
       * find(match, options)
       */
      async find(match, options) {
        const cursor = this.collection.find(match, options);
        return cursor.toArray();
      }
      /**
       * findOne(match, options)
       */
      async findOne(match, options) {
        return this.collection.findOne(match, options);
      }
      /**
       * countDocuments(match, options)
       */
      async countDocuments(match, options) {
        return this.collection.countDocuments(match, options);
      }
      /**
       * estimatedDocumentCount(match, options)
       */
      async estimatedDocumentCount(match, options) {
        return this.collection.estimatedDocumentCount(match, options);
      }
      /**
       * distinct(prop, match, options)
       */
      async distinct(prop, match, options) {
        return this.collection.distinct(prop, match, options);
      }
      /**
       * updateMany(match, update, options)
       */
      async updateMany(match, update, options) {
        return this.collection.updateMany(match, update, options);
      }
      /**
       * updateOne(match, update, options)
       */
      async updateOne(match, update, options) {
        return this.collection.updateOne(match, update, options);
      }
      /**
       * replaceOne(match, update, options)
       */
      async replaceOne(match, update, options) {
        return this.collection.replaceOne(match, update, options);
      }
      /**
       * deleteOne(match, options)
       */
      async deleteOne(match, options) {
        return this.collection.deleteOne(match, options);
      }
      /**
       * deleteMany(match, options)
       */
      async deleteMany(match, options) {
        return this.collection.deleteMany(match, options);
      }
      /**
       * findOneAndDelete(match, options, function(err[, result])
       */
      async findOneAndDelete(match, options) {
        return this.collection.findOneAndDelete(match, options);
      }
      /**
       * findOneAndUpdate(match, update, options)
       */
      async findOneAndUpdate(match, update, options) {
        return this.collection.findOneAndUpdate(match, update, options);
      }
      /**
       * findOneAndReplace(match, update, options)
       */
      async findOneAndReplace(match, update, options) {
        return this.collection.findOneAndReplace(match, update, options);
      }
      /**
       * var cursor = findCursor(match, options)
       */
      findCursor(match, options) {
        return this.collection.find(match, options);
      }
      /**
       * aggregation(operators...)
       * TODO
       */
    }
    module.exports = NodeCollection;
  })(node);
  return node.exports;
}
var collection;
var hasRequiredCollection;
function requireCollection() {
  if (hasRequiredCollection) return collection;
  hasRequiredCollection = 1;
  const env2 = requireEnv();
  if ("unknown" == env2.type) {
    throw new Error("Unknown environment");
  }
  collection = env2.isNode ? requireNode() : env2.isMongo ? requireCollection$1() : requireCollection$1();
  return collection;
}
var hasRequiredMquery;
function requireMquery() {
  if (hasRequiredMquery) return mquery.exports;
  hasRequiredMquery = 1;
  (function(module, exports) {
    const assert = require$$0;
    const util = require$$1;
    const utils2 = requireUtils();
    const debug = util.debuglog("mquery");
    function Query(criteria, options) {
      if (!(this instanceof Query))
        return new Query(criteria, options);
      const proto = this.constructor.prototype;
      this.op = proto.op || void 0;
      this.options = Object.assign({}, proto.options);
      this._conditions = proto._conditions ? utils2.clone(proto._conditions) : {};
      this._fields = proto._fields ? utils2.clone(proto._fields) : void 0;
      this._updateDoc = proto._updateDoc ? utils2.clone(proto._updateDoc) : void 0;
      this._path = proto._path || void 0;
      this._distinctDoc = proto._distinctDoc || void 0;
      this._collection = proto._collection || void 0;
      this._traceFunction = proto._traceFunction || void 0;
      if (options) {
        this.setOptions(options);
      }
      if (criteria) {
        this.find(criteria);
      }
    }
    Query.prototype.toConstructor = function toConstructor() {
      function CustomQuery(criteria, options) {
        if (!(this instanceof CustomQuery))
          return new CustomQuery(criteria, options);
        Query.call(this, criteria, options);
      }
      utils2.inherits(CustomQuery, Query);
      const p = CustomQuery.prototype;
      p.options = {};
      p.setOptions(this.options);
      p.op = this.op;
      p._conditions = utils2.clone(this._conditions);
      p._fields = utils2.clone(this._fields);
      p._updateDoc = utils2.clone(this._updateDoc);
      p._path = this._path;
      p._distinctDoc = this._distinctDoc;
      p._collection = this._collection;
      p._traceFunction = this._traceFunction;
      return CustomQuery;
    };
    Query.prototype.setOptions = function(options) {
      if (!(options && utils2.isObject(options)))
        return this;
      const methods = utils2.keys(options);
      let method;
      for (let i = 0; i < methods.length; ++i) {
        method = methods[i];
        if ("function" == typeof this[method]) {
          const args = Array.isArray(options[method]) ? options[method] : [options[method]];
          this[method].apply(this, args);
        } else {
          this.options[method] = options[method];
        }
      }
      return this;
    };
    Query.prototype.collection = function collection2(coll) {
      this._collection = new Query.Collection(coll);
      return this;
    };
    Query.prototype.collation = function(value) {
      this.options.collation = value;
      return this;
    };
    Query.prototype.$where = function(js) {
      this._conditions.$where = js;
      return this;
    };
    Query.prototype.where = function() {
      if (!arguments.length) return this;
      if (!this.op) this.op = "find";
      const type = typeof arguments[0];
      if ("string" == type) {
        this._path = arguments[0];
        if (2 === arguments.length) {
          this._conditions[this._path] = arguments[1];
        }
        return this;
      }
      if ("object" == type && !Array.isArray(arguments[0])) {
        return this.merge(arguments[0]);
      }
      throw new TypeError("path must be a string or object");
    };
    Query.prototype.equals = function equals(val) {
      this._ensurePath("equals");
      const path = this._path;
      this._conditions[path] = val;
      return this;
    };
    Query.prototype.eq = function eq(val) {
      this._ensurePath("eq");
      const path = this._path;
      this._conditions[path] = val;
      return this;
    };
    Query.prototype.or = function or(array) {
      const or2 = this._conditions.$or || (this._conditions.$or = []);
      if (!Array.isArray(array)) array = [array];
      or2.push.apply(or2, array);
      return this;
    };
    Query.prototype.nor = function nor(array) {
      const nor2 = this._conditions.$nor || (this._conditions.$nor = []);
      if (!Array.isArray(array)) array = [array];
      nor2.push.apply(nor2, array);
      return this;
    };
    Query.prototype.and = function and(array) {
      const and2 = this._conditions.$and || (this._conditions.$and = []);
      if (!Array.isArray(array)) array = [array];
      and2.push.apply(and2, array);
      return this;
    };
    "gt gte lt lte ne in nin all regex size maxDistance minDistance".split(" ").forEach(function($conditional) {
      Query.prototype[$conditional] = function() {
        let path, val;
        if (1 === arguments.length) {
          this._ensurePath($conditional);
          val = arguments[0];
          path = this._path;
        } else {
          val = arguments[1];
          path = arguments[0];
        }
        const conds = this._conditions[path] === null || typeof this._conditions[path] === "object" ? this._conditions[path] : this._conditions[path] = {};
        conds["$" + $conditional] = val;
        return this;
      };
    });
    Query.prototype.mod = function() {
      let val, path;
      if (1 === arguments.length) {
        this._ensurePath("mod");
        val = arguments[0];
        path = this._path;
      } else if (2 === arguments.length && !Array.isArray(arguments[1])) {
        this._ensurePath("mod");
        val = [arguments[0], arguments[1]];
        path = this._path;
      } else if (3 === arguments.length) {
        val = [arguments[1], arguments[2]];
        path = arguments[0];
      } else {
        val = arguments[1];
        path = arguments[0];
      }
      const conds = this._conditions[path] || (this._conditions[path] = {});
      conds.$mod = val;
      return this;
    };
    Query.prototype.exists = function() {
      let path, val;
      if (0 === arguments.length) {
        this._ensurePath("exists");
        path = this._path;
        val = true;
      } else if (1 === arguments.length) {
        if ("boolean" === typeof arguments[0]) {
          this._ensurePath("exists");
          path = this._path;
          val = arguments[0];
        } else {
          path = arguments[0];
          val = true;
        }
      } else if (2 === arguments.length) {
        path = arguments[0];
        val = arguments[1];
      }
      const conds = this._conditions[path] || (this._conditions[path] = {});
      conds.$exists = val;
      return this;
    };
    Query.prototype.elemMatch = function() {
      if (null == arguments[0])
        throw new TypeError("Invalid argument");
      let fn, path, criteria;
      if ("function" === typeof arguments[0]) {
        this._ensurePath("elemMatch");
        path = this._path;
        fn = arguments[0];
      } else if (utils2.isObject(arguments[0])) {
        this._ensurePath("elemMatch");
        path = this._path;
        criteria = arguments[0];
      } else if ("function" === typeof arguments[1]) {
        path = arguments[0];
        fn = arguments[1];
      } else if (arguments[1] && utils2.isObject(arguments[1])) {
        path = arguments[0];
        criteria = arguments[1];
      } else {
        throw new TypeError("Invalid argument");
      }
      if (fn) {
        criteria = new Query();
        fn(criteria);
        criteria = criteria._conditions;
      }
      const conds = this._conditions[path] || (this._conditions[path] = {});
      conds.$elemMatch = criteria;
      return this;
    };
    Query.prototype.within = function within() {
      this._ensurePath("within");
      this._geoComparison = "$geoWithin";
      if (0 === arguments.length) {
        return this;
      }
      if (2 === arguments.length) {
        return this.box.apply(this, arguments);
      } else if (2 < arguments.length) {
        return this.polygon.apply(this, arguments);
      }
      const area = arguments[0];
      if (!area)
        throw new TypeError("Invalid argument");
      if (area.center)
        return this.circle(area);
      if (area.box)
        return this.box.apply(this, area.box);
      if (area.polygon)
        return this.polygon.apply(this, area.polygon);
      if (area.type && area.coordinates)
        return this.geometry(area);
      throw new TypeError("Invalid argument");
    };
    Query.prototype.box = function() {
      let path, box;
      if (3 === arguments.length) {
        path = arguments[0];
        box = [arguments[1], arguments[2]];
      } else if (2 === arguments.length) {
        this._ensurePath("box");
        path = this._path;
        box = [arguments[0], arguments[1]];
      } else {
        throw new TypeError("Invalid argument");
      }
      const conds = this._conditions[path] || (this._conditions[path] = {});
      conds[this._geoComparison || "$geoWithin"] = { $box: box };
      return this;
    };
    Query.prototype.polygon = function() {
      let val, path;
      if ("string" == typeof arguments[0]) {
        val = Array.from(arguments);
        path = val.shift();
      } else {
        this._ensurePath("polygon");
        path = this._path;
        val = Array.from(arguments);
      }
      const conds = this._conditions[path] || (this._conditions[path] = {});
      conds[this._geoComparison || "$geoWithin"] = { $polygon: val };
      return this;
    };
    Query.prototype.circle = function() {
      let path, val;
      if (1 === arguments.length) {
        this._ensurePath("circle");
        path = this._path;
        val = arguments[0];
      } else if (2 === arguments.length) {
        path = arguments[0];
        val = arguments[1];
      } else {
        throw new TypeError("Invalid argument");
      }
      if (!("radius" in val && val.center))
        throw new Error("center and radius are required");
      const conds = this._conditions[path] || (this._conditions[path] = {});
      const type = val.spherical ? "$centerSphere" : "$center";
      const wKey = this._geoComparison || "$geoWithin";
      conds[wKey] = {};
      conds[wKey][type] = [val.center, val.radius];
      if ("unique" in val)
        conds[wKey].$uniqueDocs = !!val.unique;
      return this;
    };
    Query.prototype.near = function near() {
      let path, val;
      this._geoComparison = "$near";
      if (0 === arguments.length) {
        return this;
      } else if (1 === arguments.length) {
        this._ensurePath("near");
        path = this._path;
        val = arguments[0];
      } else if (2 === arguments.length) {
        path = arguments[0];
        val = arguments[1];
      } else {
        throw new TypeError("Invalid argument");
      }
      if (!val.center) {
        throw new Error("center is required");
      }
      const conds = this._conditions[path] || (this._conditions[path] = {});
      const type = val.spherical ? "$nearSphere" : "$near";
      if (Array.isArray(val.center)) {
        conds[type] = val.center;
        const radius = "maxDistance" in val ? val.maxDistance : null;
        if (null != radius) {
          conds.$maxDistance = radius;
        }
        if (null != val.minDistance) {
          conds.$minDistance = val.minDistance;
        }
      } else {
        if (val.center.type != "Point" || !Array.isArray(val.center.coordinates)) {
          throw new Error(util.format("Invalid GeoJSON specified for %s", type));
        }
        conds[type] = { $geometry: val.center };
        if ("maxDistance" in val) {
          conds[type]["$maxDistance"] = val.maxDistance;
        }
        if ("minDistance" in val) {
          conds[type]["$minDistance"] = val.minDistance;
        }
      }
      return this;
    };
    Query.prototype.intersects = function intersects() {
      this._ensurePath("intersects");
      this._geoComparison = "$geoIntersects";
      if (0 === arguments.length) {
        return this;
      }
      const area = arguments[0];
      if (null != area && area.type && area.coordinates)
        return this.geometry(area);
      throw new TypeError("Invalid argument");
    };
    Query.prototype.geometry = function geometry() {
      if (!("$within" == this._geoComparison || "$geoWithin" == this._geoComparison || "$near" == this._geoComparison || "$geoIntersects" == this._geoComparison)) {
        throw new Error("geometry() must come after `within()`, `intersects()`, or `near()");
      }
      let val, path;
      if (1 === arguments.length) {
        this._ensurePath("geometry");
        path = this._path;
        val = arguments[0];
      } else {
        throw new TypeError("Invalid argument");
      }
      if (!(val.type && Array.isArray(val.coordinates))) {
        throw new TypeError("Invalid argument");
      }
      const conds = this._conditions[path] || (this._conditions[path] = {});
      conds[this._geoComparison] = { $geometry: val };
      return this;
    };
    Query.prototype.select = function select() {
      let arg = arguments[0];
      if (!arg) return this;
      if (arguments.length !== 1) {
        throw new Error("Invalid select: select only takes 1 argument");
      }
      this._validate("select");
      const fields = this._fields || (this._fields = {});
      const type = typeof arg;
      let i, len;
      if (("string" == type || utils2.isArgumentsObject(arg)) && "number" == typeof arg.length || Array.isArray(arg)) {
        if ("string" == type)
          arg = arg.split(/\s+/);
        for (i = 0, len = arg.length; i < len; ++i) {
          let field = arg[i];
          if (!field) continue;
          const include = "-" == field[0] ? 0 : 1;
          if (include === 0) field = field.substring(1);
          fields[field] = include;
        }
        return this;
      }
      if (utils2.isObject(arg)) {
        const keys = utils2.keys(arg);
        for (i = 0; i < keys.length; ++i) {
          fields[keys[i]] = arg[keys[i]];
        }
        return this;
      }
      throw new TypeError("Invalid select() argument. Must be string or object.");
    };
    Query.prototype.slice = function() {
      if (0 === arguments.length)
        return this;
      this._validate("slice");
      let path, val;
      if (1 === arguments.length) {
        const arg = arguments[0];
        if (typeof arg === "object" && !Array.isArray(arg)) {
          const keys = Object.keys(arg);
          const numKeys = keys.length;
          for (let i = 0; i < numKeys; ++i) {
            this.slice(keys[i], arg[keys[i]]);
          }
          return this;
        }
        this._ensurePath("slice");
        path = this._path;
        val = arguments[0];
      } else if (2 === arguments.length) {
        if ("number" === typeof arguments[0]) {
          this._ensurePath("slice");
          path = this._path;
          val = [arguments[0], arguments[1]];
        } else {
          path = arguments[0];
          val = arguments[1];
        }
      } else if (3 === arguments.length) {
        path = arguments[0];
        val = [arguments[1], arguments[2]];
      }
      const myFields = this._fields || (this._fields = {});
      myFields[path] = { $slice: val };
      return this;
    };
    Query.prototype.sort = function(arg) {
      if (!arg) return this;
      let i, len, field;
      this._validate("sort");
      const type = typeof arg;
      if (Array.isArray(arg)) {
        len = arg.length;
        for (i = 0; i < arg.length; ++i) {
          if (!Array.isArray(arg[i])) {
            throw new Error("Invalid sort() argument, must be array of arrays");
          }
          _pushArr(this.options, arg[i][0], arg[i][1]);
        }
        return this;
      }
      if (1 === arguments.length && "string" == type) {
        arg = arg.split(/\s+/);
        len = arg.length;
        for (i = 0; i < len; ++i) {
          field = arg[i];
          if (!field) continue;
          const ascend = "-" == field[0] ? -1 : 1;
          if (ascend === -1) field = field.substring(1);
          push(this.options, field, ascend);
        }
        return this;
      }
      if (utils2.isObject(arg)) {
        const keys = utils2.keys(arg);
        for (i = 0; i < keys.length; ++i) {
          field = keys[i];
          push(this.options, field, arg[field]);
        }
        return this;
      }
      if (typeof Map !== "undefined" && arg instanceof Map) {
        _pushMap(this.options, arg);
        return this;
      }
      throw new TypeError("Invalid sort() argument. Must be a string, object, or array.");
    };
    const _validSortValue = {
      1: 1,
      "-1": -1,
      asc: 1,
      ascending: 1,
      desc: -1,
      descending: -1
    };
    function push(opts, field, value) {
      if (Array.isArray(opts.sort)) {
        throw new TypeError("Can't mix sort syntaxes. Use either array or object:\n- `.sort([['field', 1], ['test', -1]])`\n- `.sort({ field: 1, test: -1 })`");
      }
      let s;
      if (value && value.$meta) {
        s = opts.sort || (opts.sort = {});
        s[field] = { $meta: value.$meta };
        return;
      }
      s = opts.sort || (opts.sort = {});
      let val = String(value || 1).toLowerCase();
      val = _validSortValue[val];
      if (!val) throw new TypeError("Invalid sort value: { " + field + ": " + value + " }");
      s[field] = val;
    }
    function _pushArr(opts, field, value) {
      opts.sort = opts.sort || [];
      if (!Array.isArray(opts.sort)) {
        throw new TypeError("Can't mix sort syntaxes. Use either array or object:\n- `.sort([['field', 1], ['test', -1]])`\n- `.sort({ field: 1, test: -1 })`");
      }
      let val = String(value || 1).toLowerCase();
      val = _validSortValue[val];
      if (!val) throw new TypeError("Invalid sort value: [ " + field + ", " + value + " ]");
      opts.sort.push([field, val]);
    }
    function _pushMap(opts, map) {
      opts.sort = opts.sort || /* @__PURE__ */ new Map();
      if (!(opts.sort instanceof Map)) {
        throw new TypeError("Can't mix sort syntaxes. Use either array or object or map consistently");
      }
      map.forEach(function(value, key) {
        let val = String(value || 1).toLowerCase();
        val = _validSortValue[val];
        if (!val) throw new TypeError("Invalid sort value: < " + key + ": " + value + " >");
        opts.sort.set(key, val);
      });
    }
    ["limit", "skip", "batchSize", "comment"].forEach(function(method) {
      Query.prototype[method] = function(v) {
        this._validate(method);
        this.options[method] = v;
        return this;
      };
    });
    Query.prototype.maxTime = Query.prototype.maxTimeMS = function(ms) {
      this._validate("maxTime");
      this.options.maxTimeMS = ms;
      return this;
    };
    Query.prototype.hint = function() {
      if (0 === arguments.length) return this;
      this._validate("hint");
      const arg = arguments[0];
      if (utils2.isObject(arg)) {
        const hint = this.options.hint || (this.options.hint = {});
        for (const k in arg) {
          hint[k] = arg[k];
        }
        return this;
      }
      if (typeof arg === "string") {
        this.options.hint = arg;
        return this;
      }
      throw new TypeError("Invalid hint. " + arg);
    };
    Query.prototype.j = function j(val) {
      this.options.j = val;
      return this;
    };
    Query.prototype.slaveOk = function(v) {
      this.options.slaveOk = arguments.length ? !!v : true;
      return this;
    };
    Query.prototype.read = Query.prototype.setReadPreference = function(pref) {
      if (arguments.length > 1 && !Query.prototype.read.deprecationWarningIssued) {
        console.error("Deprecation warning: 'tags' argument is not supported anymore in Query.read() method. Please use mongodb.ReadPreference object instead.");
        Query.prototype.read.deprecationWarningIssued = true;
      }
      this.options.readPreference = utils2.readPref(pref);
      return this;
    };
    Query.prototype.readConcern = Query.prototype.r = function(level) {
      this.options.readConcern = utils2.readConcern(level);
      return this;
    };
    Query.prototype.tailable = function() {
      this._validate("tailable");
      this.options.tailable = arguments.length ? !!arguments[0] : true;
      return this;
    };
    Query.prototype.writeConcern = Query.prototype.w = function writeConcern(concern) {
      if ("object" === typeof concern) {
        if ("undefined" !== typeof concern.j) this.options.j = concern.j;
        if ("undefined" !== typeof concern.w) this.options.w = concern.w;
        if ("undefined" !== typeof concern.wtimeout) this.options.wtimeout = concern.wtimeout;
      } else {
        this.options.w = "m" === concern ? "majority" : concern;
      }
      return this;
    };
    Query.prototype.wtimeout = Query.prototype.wTimeout = function wtimeout(ms) {
      this.options.wtimeout = ms;
      return this;
    };
    Query.prototype.merge = function(source) {
      if (!source)
        return this;
      if (!Query.canMerge(source))
        throw new TypeError("Invalid argument. Expected instanceof mquery or plain object");
      if (source instanceof Query) {
        if (source._conditions) {
          utils2.merge(this._conditions, source._conditions);
        }
        if (source._fields) {
          this._fields || (this._fields = {});
          utils2.merge(this._fields, source._fields);
        }
        if (source.options) {
          this.options || (this.options = {});
          utils2.merge(this.options, source.options);
        }
        if (source._updateDoc) {
          this._updateDoc || (this._updateDoc = {});
          utils2.mergeClone(this._updateDoc, source._updateDoc);
        }
        if (source._distinctDoc) {
          this._distinctDoc = source._distinctDoc;
        }
        return this;
      }
      utils2.merge(this._conditions, source);
      return this;
    };
    Query.prototype.find = function(criteria) {
      this.op = "find";
      if (Query.canMerge(criteria)) {
        this.merge(criteria);
      }
      return this;
    };
    Query.prototype._find = async function _find() {
      const conds = this._conditions;
      const options = this._optionsForExec();
      if (this.$useProjection) {
        options.projection = this._fieldsForExec();
      } else {
        options.fields = this._fieldsForExec();
      }
      debug("find", this._collection.collectionName, conds, options);
      return this._collection.find(conds, options);
    };
    Query.prototype.cursor = function cursor(criteria) {
      if (this.op) {
        if (this.op !== "find") {
          throw new TypeError(".cursor only support .find method");
        }
      } else {
        this.find(criteria);
      }
      const conds = this._conditions;
      const options = this._optionsForExec();
      if (this.$useProjection) {
        options.projection = this._fieldsForExec();
      } else {
        options.fields = this._fieldsForExec();
      }
      debug("findCursor", this._collection.collectionName, conds, options);
      return this._collection.findCursor(conds, options);
    };
    Query.prototype.findOne = function(criteria) {
      this.op = "findOne";
      if (Query.canMerge(criteria)) {
        this.merge(criteria);
      }
      return this;
    };
    Query.prototype._findOne = async function _findOne() {
      const conds = this._conditions;
      const options = this._optionsForExec();
      if (this.$useProjection) {
        options.projection = this._fieldsForExec();
      } else {
        options.fields = this._fieldsForExec();
      }
      debug("findOne", this._collection.collectionName, conds, options);
      return this._collection.findOne(conds, options);
    };
    Query.prototype.countDocuments = function(filter) {
      this.op = "countDocuments";
      this._validate();
      if (Query.canMerge(filter)) {
        this.merge(filter);
      }
      return this;
    };
    Query.prototype._countDocuments = async function _countDocuments() {
      const conds = this._conditions;
      const options = this._optionsForExec();
      debug("countDocuments", this._collection.collectionName, conds, options);
      return this._collection.countDocuments(conds, options);
    };
    Query.prototype.estimatedDocumentCount = function() {
      this.op = "estimatedDocumentCount";
      this._validate();
      return this;
    };
    Query.prototype._estimatedDocumentCount = async function _estimatedDocumentCount() {
      const conds = this._conditions;
      const options = this._optionsForExec();
      debug("estimatedDocumentCount", this._collection.collectionName, conds, options);
      return this._collection.estimatedDocumentCount(conds, options);
    };
    Query.prototype.distinct = function(criteria, field) {
      this.op = "distinct";
      this._validate();
      if (!field && typeof criteria === "string") {
        field = criteria;
        criteria = void 0;
      }
      if ("string" == typeof field) {
        this._distinctDoc = field;
      }
      if (Query.canMerge(criteria)) {
        this.merge(criteria);
      }
      return this;
    };
    Query.prototype._distinct = async function _distinct() {
      if (!this._distinctDoc) {
        throw new Error("No value for `distinct` has been declared");
      }
      const conds = this._conditions, options = this._optionsForExec();
      return this._collection.distinct(this._distinctDoc, conds, options);
    };
    Query.prototype.updateMany = function updateMany(criteria, doc, options) {
      return _update(this, "updateMany", criteria, doc, options);
    };
    Query.prototype._updateMany = async function() {
      return _updateExec(this, "updateMany");
    };
    Query.prototype.updateOne = function updateOne(criteria, doc, options) {
      return _update(this, "updateOne", criteria, doc, options);
    };
    Query.prototype._updateOne = async function() {
      return _updateExec(this, "updateOne");
    };
    Query.prototype.replaceOne = function replaceOne(criteria, doc, options) {
      this.setOptions({ overwrite: true });
      return _update(this, "replaceOne", criteria, doc, options);
    };
    Query.prototype._replaceOne = async function() {
      return _updateExec(this, "replaceOne");
    };
    function _update(query, op, criteria, doc, options) {
      query.op = op;
      if (Query.canMerge(criteria)) {
        query.merge(criteria);
      }
      if (doc) {
        query._mergeUpdate(doc);
      }
      if (utils2.isObject(options)) {
        query.setOptions(options);
      }
      return query;
    }
    async function _updateExec(query, op) {
      const options = query._optionsForExec();
      const criteria = query._conditions;
      const doc = query._updateForExec();
      debug(op, query._collection.collectionName, criteria, doc, options);
      return query._collection[op](criteria, doc, options);
    }
    Query.prototype.deleteOne = function(criteria) {
      this.op = "deleteOne";
      if (Query.canMerge(criteria)) {
        this.merge(criteria);
      }
      return this;
    };
    Query.prototype._deleteOne = async function() {
      const options = this._optionsForExec();
      delete options.justOne;
      const conds = this._conditions;
      debug("deleteOne", this._collection.collectionName, conds, options);
      return this._collection.deleteOne(conds, options);
    };
    Query.prototype.deleteMany = function(criteria) {
      this.op = "deleteMany";
      if (Query.canMerge(criteria)) {
        this.merge(criteria);
      }
      return this;
    };
    Query.prototype._deleteMany = async function() {
      const options = this._optionsForExec();
      delete options.justOne;
      const conds = this._conditions;
      return this._collection.deleteMany(conds, options);
    };
    Query.prototype.findOneAndUpdate = function(criteria, doc, options) {
      this.op = "findOneAndUpdate";
      this._validate();
      if (Query.canMerge(criteria)) {
        this.merge(criteria);
      }
      if (doc) {
        this._mergeUpdate(doc);
      }
      options && this.setOptions(options);
      return this;
    };
    Query.prototype._findOneAndUpdate = async function() {
      const conds = this._conditions;
      const update = this._updateForExec();
      const options = this._optionsForExec();
      return this._collection.findOneAndUpdate(conds, update, options);
    };
    Query.prototype.findOneAndReplace = function(criteria, replacement, options) {
      this.op = "findOneAndReplace";
      this._validate();
      if (Query.canMerge(criteria)) {
        this.merge(criteria);
      }
      if (replacement) {
        this._updateDoc = replacement;
        this.options = this.options || {};
        this.options.overwrite = true;
      }
      options && this.setOptions(options);
      return this;
    };
    Query.prototype._findOneAndReplace = async function() {
      const conds = this._conditions;
      const replacement = this._updateForExec();
      const options = this._optionsForExec();
      debug("findOneAndReplace", this._collection.collectionName, conds, replacement, options);
      return this._collection.findOneAndReplace(conds, replacement, options);
    };
    Query.prototype.findOneAndDelete = function(filter, options) {
      this.op = "findOneAndDelete";
      this._validate();
      if (Query.canMerge(filter)) {
        this.merge(filter);
      }
      options && this.setOptions(options);
      return this;
    };
    Query.prototype._findOneAndDelete = async function() {
      const options = this._optionsForExec();
      const conds = this._conditions;
      debug("findOneAndDelete", this._collection.collectionName, conds, options);
      return this._collection.findOneAndDelete(conds, options);
    };
    Query.prototype.setTraceFunction = function(traceFunction) {
      this._traceFunction = traceFunction;
      return this;
    };
    Query.prototype.exec = async function exec(op) {
      if (typeof op === "string") {
        this.op = op;
      }
      assert.ok(this.op, "Missing query type: (find, etc)");
      const fnName = "_" + this.op;
      if (typeof this[fnName] !== "function") {
        throw new TypeError(`this[${fnName}] is not a function`);
      }
      return this[fnName]();
    };
    Query.prototype.then = async function(res, rej) {
      return this.exec().then(res, rej);
    };
    Query.prototype.cursor = function() {
      if ("find" != this.op)
        throw new Error("cursor() is only available for find");
      const conds = this._conditions;
      const options = this._optionsForExec();
      if (this.$useProjection) {
        options.projection = this._fieldsForExec();
      } else {
        options.fields = this._fieldsForExec();
      }
      return this._collection.findCursor(conds, options);
    };
    Query.prototype.selected = function selected() {
      return !!(this._fields && Object.keys(this._fields).length > 0);
    };
    Query.prototype.selectedInclusively = function selectedInclusively() {
      if (!this._fields) return false;
      const keys = Object.keys(this._fields);
      if (0 === keys.length) return false;
      for (let i = 0; i < keys.length; ++i) {
        const key = keys[i];
        if (0 === this._fields[key]) return false;
        if (this._fields[key] && typeof this._fields[key] === "object" && this._fields[key].$meta) {
          return false;
        }
      }
      return true;
    };
    Query.prototype.selectedExclusively = function selectedExclusively() {
      if (!this._fields) return false;
      const keys = Object.keys(this._fields);
      if (0 === keys.length) return false;
      for (let i = 0; i < keys.length; ++i) {
        const key = keys[i];
        if (0 === this._fields[key]) return true;
      }
      return false;
    };
    Query.prototype._mergeUpdate = function(doc) {
      if (!this._updateDoc) this._updateDoc = {};
      if (doc instanceof Query) {
        if (doc._updateDoc) {
          utils2.mergeClone(this._updateDoc, doc._updateDoc);
        }
      } else {
        utils2.mergeClone(this._updateDoc, doc);
      }
    };
    Query.prototype._optionsForExec = function() {
      const options = utils2.clone(this.options);
      return options;
    };
    Query.prototype._fieldsForExec = function() {
      return utils2.clone(this._fields);
    };
    Query.prototype._updateForExec = function() {
      const update = this._updateDoc == null ? {} : utils2.clone(this._updateDoc);
      const ops = utils2.keys(update);
      const ret = {};
      for (const op of ops) {
        if (this.options.overwrite) {
          ret[op] = update[op];
          continue;
        }
        if ("$" !== op[0]) {
          if (!ret.$set) {
            if (update.$set) {
              ret.$set = update.$set;
            } else {
              ret.$set = {};
            }
          }
          ret.$set[op] = update[op];
          if (!~ops.indexOf("$set")) ops.push("$set");
        } else if ("$set" === op) {
          if (!ret.$set) {
            ret[op] = update[op];
          }
        } else {
          ret[op] = update[op];
        }
      }
      this._compiledUpdate = ret;
      return ret;
    };
    Query.prototype._ensurePath = function(method) {
      if (!this._path) {
        const msg = method + "() must be used after where() when called with these arguments";
        throw new Error(msg);
      }
    };
    Query.permissions = requirePermissions();
    Query._isPermitted = function(a, b) {
      const denied = Query.permissions[b];
      if (!denied) return true;
      return true !== denied[a];
    };
    Query.prototype._validate = function(action) {
      let fail;
      let validator;
      if (void 0 === action) {
        validator = Query.permissions[this.op];
        if ("function" != typeof validator) return true;
        fail = validator(this);
      } else if (!Query._isPermitted(action, this.op)) {
        fail = action;
      }
      if (fail) {
        throw new Error(fail + " cannot be used with " + this.op);
      }
    };
    Query.canMerge = function(conds) {
      return conds instanceof Query || utils2.isObject(conds);
    };
    Query.setGlobalTraceFunction = function(traceFunction) {
      Query.traceFunction = traceFunction;
    };
    Query.utils = utils2;
    Query.env = requireEnv();
    Query.Collection = requireCollection();
    Query.BaseCollection = requireCollection$1();
    module.exports = Query;
  })(mquery);
  return mquery.exports;
}
export {
  requireMquery as r
};
