var mpath = { exports: {} };
var lib = {};
var stringToParts;
var hasRequiredStringToParts;
function requireStringToParts() {
  if (hasRequiredStringToParts) return stringToParts;
  hasRequiredStringToParts = 1;
  stringToParts = function stringToParts2(str) {
    const result = [];
    let curPropertyName = "";
    let state = "DEFAULT";
    for (let i = 0; i < str.length; ++i) {
      if (state === "IN_SQUARE_BRACKETS" && !/\d/.test(str[i]) && str[i] !== "]") {
        state = "DEFAULT";
        curPropertyName = result[result.length - 1] + "[" + curPropertyName;
        result.splice(result.length - 1, 1);
      }
      if (str[i] === "[") {
        if (state !== "IMMEDIATELY_AFTER_SQUARE_BRACKETS") {
          result.push(curPropertyName);
          curPropertyName = "";
        }
        state = "IN_SQUARE_BRACKETS";
      } else if (str[i] === "]") {
        if (state === "IN_SQUARE_BRACKETS") {
          state = "IMMEDIATELY_AFTER_SQUARE_BRACKETS";
          result.push(curPropertyName);
          curPropertyName = "";
        } else {
          state = "DEFAULT";
          curPropertyName += str[i];
        }
      } else if (str[i] === ".") {
        if (state !== "IMMEDIATELY_AFTER_SQUARE_BRACKETS") {
          result.push(curPropertyName);
          curPropertyName = "";
        }
        state = "DEFAULT";
      } else {
        curPropertyName += str[i];
      }
    }
    if (state !== "IMMEDIATELY_AFTER_SQUARE_BRACKETS") {
      result.push(curPropertyName);
    }
    return result;
  };
  return stringToParts;
}
var hasRequiredLib;
function requireLib() {
  if (hasRequiredLib) return lib;
  hasRequiredLib = 1;
  (function(exports) {
    var stringToParts2 = requireStringToParts();
    var ignoreProperties = ["__proto__", "constructor", "prototype"];
    exports.get = function(path, o, special, map) {
      var lookup;
      if ("function" == typeof special) {
        if (special.length < 2) {
          map = special;
          special = void 0;
        } else {
          lookup = special;
          special = void 0;
        }
      }
      map || (map = K);
      var parts = "string" == typeof path ? stringToParts2(path) : path;
      if (!Array.isArray(parts)) {
        throw new TypeError("Invalid `path`. Must be either string or array");
      }
      var obj = o, part;
      for (var i = 0; i < parts.length; ++i) {
        part = parts[i];
        if (typeof parts[i] !== "string" && typeof parts[i] !== "number") {
          throw new TypeError("Each segment of path to `get()` must be a string or number, got " + typeof parts[i]);
        }
        if (Array.isArray(obj) && !/^\d+$/.test(part)) {
          var paths = parts.slice(i);
          return [].concat(obj).map(function(item) {
            return item ? exports.get(paths, item, special || lookup, map) : map(void 0);
          });
        }
        if (lookup) {
          obj = lookup(obj, part);
        } else {
          var _from = special && obj[special] ? obj[special] : obj;
          obj = _from instanceof Map ? _from.get(part) : _from[part];
        }
        if (!obj) return map(obj);
      }
      return map(obj);
    };
    exports.has = function(path, o) {
      var parts = typeof path === "string" ? stringToParts2(path) : path;
      if (!Array.isArray(parts)) {
        throw new TypeError("Invalid `path`. Must be either string or array");
      }
      var len = parts.length;
      var cur = o;
      for (var i = 0; i < len; ++i) {
        if (typeof parts[i] !== "string" && typeof parts[i] !== "number") {
          throw new TypeError("Each segment of path to `has()` must be a string or number, got " + typeof parts[i]);
        }
        if (cur == null || typeof cur !== "object" || !(parts[i] in cur)) {
          return false;
        }
        cur = cur[parts[i]];
      }
      return true;
    };
    exports.unset = function(path, o) {
      var parts = typeof path === "string" ? stringToParts2(path) : path;
      if (!Array.isArray(parts)) {
        throw new TypeError("Invalid `path`. Must be either string or array");
      }
      var len = parts.length;
      var cur = o;
      for (var i = 0; i < len; ++i) {
        if (cur == null || typeof cur !== "object" || !(parts[i] in cur)) {
          return false;
        }
        if (typeof parts[i] !== "string" && typeof parts[i] !== "number") {
          throw new TypeError("Each segment of path to `unset()` must be a string or number, got " + typeof parts[i]);
        }
        if (ignoreProperties.indexOf(parts[i]) !== -1) {
          return false;
        }
        if (i === len - 1) {
          delete cur[parts[i]];
          return true;
        }
        cur = cur instanceof Map ? cur.get(parts[i]) : cur[parts[i]];
      }
      return true;
    };
    exports.set = function(path, val, o, special, map, _copying) {
      var lookup;
      if ("function" == typeof special) {
        if (special.length < 2) {
          map = special;
          special = void 0;
        } else {
          lookup = special;
          special = void 0;
        }
      }
      map || (map = K);
      var parts = "string" == typeof path ? stringToParts2(path) : path;
      if (!Array.isArray(parts)) {
        throw new TypeError("Invalid `path`. Must be either string or array");
      }
      if (null == o) return;
      for (var i = 0; i < parts.length; ++i) {
        if (typeof parts[i] !== "string" && typeof parts[i] !== "number") {
          throw new TypeError("Each segment of path to `set()` must be a string or number, got " + typeof parts[i]);
        }
        if (ignoreProperties.indexOf(parts[i]) !== -1) {
          return;
        }
      }
      var copy = _copying || /\$/.test(path) && _copying !== false, obj = o, part;
      for (var i = 0, len = parts.length - 1; i < len; ++i) {
        part = parts[i];
        if ("$" == part) {
          if (i == len - 1) {
            break;
          } else {
            continue;
          }
        }
        if (Array.isArray(obj) && !/^\d+$/.test(part)) {
          var paths = parts.slice(i);
          if (!copy && Array.isArray(val)) {
            for (var j = 0; j < obj.length && j < val.length; ++j) {
              exports.set(paths, val[j], obj[j], special || lookup, map, copy);
            }
          } else {
            for (var j = 0; j < obj.length; ++j) {
              exports.set(paths, val, obj[j], special || lookup, map, copy);
            }
          }
          return;
        }
        if (lookup) {
          obj = lookup(obj, part);
        } else {
          var _to = special && obj[special] ? obj[special] : obj;
          obj = _to instanceof Map ? _to.get(part) : _to[part];
        }
        if (!obj) return;
      }
      part = parts[len];
      if (special && obj[special]) {
        obj = obj[special];
      }
      if (Array.isArray(obj) && !/^\d+$/.test(part)) {
        if (!copy && Array.isArray(val)) {
          _setArray(obj, val, part, lookup, special, map);
        } else {
          for (var j = 0; j < obj.length; ++j) {
            var item = obj[j];
            if (item) {
              if (lookup) {
                lookup(item, part, map(val));
              } else {
                if (item[special]) item = item[special];
                item[part] = map(val);
              }
            }
          }
        }
      } else {
        if (lookup) {
          lookup(obj, part, map(val));
        } else if (obj instanceof Map) {
          obj.set(part, map(val));
        } else {
          obj[part] = map(val);
        }
      }
    };
    exports.stringToParts = stringToParts2;
    function _setArray(obj, val, part, lookup, special, map) {
      for (var item, j = 0; j < obj.length && j < val.length; ++j) {
        item = obj[j];
        if (Array.isArray(item) && Array.isArray(val[j])) {
          _setArray(item, val[j], part, lookup, special, map);
        } else if (item) {
          if (lookup) {
            lookup(item, part, map(val[j]));
          } else {
            if (item[special]) item = item[special];
            item[part] = map(val[j]);
          }
        }
      }
    }
    function K(v) {
      return v;
    }
  })(lib);
  return lib;
}
var hasRequiredMpath;
function requireMpath() {
  if (hasRequiredMpath) return mpath.exports;
  hasRequiredMpath = 1;
  (function(module, exports) {
    module.exports = requireLib();
  })(mpath);
  return mpath.exports;
}
export {
  requireMpath as r
};
