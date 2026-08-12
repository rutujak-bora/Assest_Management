import require$$0$2 from "fs";
import require$$1$1 from "http";
import require$$0 from "process";
import require$$0$1 from "timers";
import require$$0$3 from "timers/promises";
import require$$3$2 from "url";
import require$$0$7 from "zlib";
import require$$0$8 from "net";
import require$$0$9 from "fs/promises";
import require$$3$1 from "tls";
import require$$1$3 from "child_process";
import { r as requireBson$1 } from "./bson.mjs";
import require$$0$5 from "stream";
import require$$0$4 from "events";
import require$$1$2 from "util";
import require$$0$6 from "dns";
import { b as getAugmentedNamespace } from "./react.mjs";
import { r as requireLib$1 } from "./mongodb-connection-string-url.mjs";
import { r as requireNode } from "./mongodb-js__saslprep.mjs";
var common$1 = {};
var bson = {};
var hasRequiredBson;
function requireBson() {
  if (hasRequiredBson) return bson;
  hasRequiredBson = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.setUint32LE = exports.readUint8 = exports.readInt32LE = exports.UUID = exports.Timestamp = exports.serialize = exports.ObjectId = exports.NumberUtils = exports.MinKey = exports.MaxKey = exports.Long = exports.Int32 = exports.EJSON = exports.Double = exports.deserialize = exports.Decimal128 = exports.DBRef = exports.Code = exports.calculateObjectSize = exports.ByteUtils = exports.BSONType = exports.BSONSymbol = exports.BSONRegExp = exports.BSONError = exports.BSON = exports.Binary = void 0;
    exports.parseToElementsToArray = parseToElementsToArray;
    exports.pluckBSONSerializeOptions = pluckBSONSerializeOptions;
    exports.resolveBSONOptions = resolveBSONOptions;
    exports.parseUtf8ValidationOption = parseUtf8ValidationOption;
    const bson_1 = requireBson$1();
    var bson_2 = requireBson$1();
    Object.defineProperty(exports, "Binary", { enumerable: true, get: function() {
      return bson_2.Binary;
    } });
    Object.defineProperty(exports, "BSON", { enumerable: true, get: function() {
      return bson_2.BSON;
    } });
    Object.defineProperty(exports, "BSONError", { enumerable: true, get: function() {
      return bson_2.BSONError;
    } });
    Object.defineProperty(exports, "BSONRegExp", { enumerable: true, get: function() {
      return bson_2.BSONRegExp;
    } });
    Object.defineProperty(exports, "BSONSymbol", { enumerable: true, get: function() {
      return bson_2.BSONSymbol;
    } });
    Object.defineProperty(exports, "BSONType", { enumerable: true, get: function() {
      return bson_2.BSONType;
    } });
    Object.defineProperty(exports, "ByteUtils", { enumerable: true, get: function() {
      return bson_2.ByteUtils;
    } });
    Object.defineProperty(exports, "calculateObjectSize", { enumerable: true, get: function() {
      return bson_2.calculateObjectSize;
    } });
    Object.defineProperty(exports, "Code", { enumerable: true, get: function() {
      return bson_2.Code;
    } });
    Object.defineProperty(exports, "DBRef", { enumerable: true, get: function() {
      return bson_2.DBRef;
    } });
    Object.defineProperty(exports, "Decimal128", { enumerable: true, get: function() {
      return bson_2.Decimal128;
    } });
    Object.defineProperty(exports, "deserialize", { enumerable: true, get: function() {
      return bson_2.deserialize;
    } });
    Object.defineProperty(exports, "Double", { enumerable: true, get: function() {
      return bson_2.Double;
    } });
    Object.defineProperty(exports, "EJSON", { enumerable: true, get: function() {
      return bson_2.EJSON;
    } });
    Object.defineProperty(exports, "Int32", { enumerable: true, get: function() {
      return bson_2.Int32;
    } });
    Object.defineProperty(exports, "Long", { enumerable: true, get: function() {
      return bson_2.Long;
    } });
    Object.defineProperty(exports, "MaxKey", { enumerable: true, get: function() {
      return bson_2.MaxKey;
    } });
    Object.defineProperty(exports, "MinKey", { enumerable: true, get: function() {
      return bson_2.MinKey;
    } });
    Object.defineProperty(exports, "NumberUtils", { enumerable: true, get: function() {
      return bson_2.NumberUtils;
    } });
    Object.defineProperty(exports, "ObjectId", { enumerable: true, get: function() {
      return bson_2.ObjectId;
    } });
    Object.defineProperty(exports, "serialize", { enumerable: true, get: function() {
      return bson_2.serialize;
    } });
    Object.defineProperty(exports, "Timestamp", { enumerable: true, get: function() {
      return bson_2.Timestamp;
    } });
    Object.defineProperty(exports, "UUID", { enumerable: true, get: function() {
      return bson_2.UUID;
    } });
    function parseToElementsToArray(bytes, offset) {
      const res = bson_1.BSON.onDemand.parseToElements(bytes, offset);
      return Array.isArray(res) ? res : [...res];
    }
    const validateBufferInputs = (buffer, offset, length) => {
      if (offset < 0 || offset + length > buffer.length) {
        throw new RangeError(`Attempt to access memory outside buffer bounds: buffer length: ${buffer.length}, offset: ${offset}, length: ${length}`);
      }
    };
    const readInt32LE = (buffer, offset) => {
      validateBufferInputs(buffer, offset, 4);
      return bson_1.NumberUtils.getInt32LE(buffer, offset);
    };
    exports.readInt32LE = readInt32LE;
    const readUint8 = (buffer, offset) => {
      validateBufferInputs(buffer, offset, 1);
      return buffer[offset];
    };
    exports.readUint8 = readUint8;
    const setUint32LE = (destination, offset, value) => {
      destination[offset] = value;
      value >>>= 8;
      destination[offset + 1] = value;
      value >>>= 8;
      destination[offset + 2] = value;
      value >>>= 8;
      destination[offset + 3] = value;
      return 4;
    };
    exports.setUint32LE = setUint32LE;
    function pluckBSONSerializeOptions(options) {
      const { fieldsAsRaw, useBigInt64, promoteValues, promoteBuffers, promoteLongs, serializeFunctions, ignoreUndefined, bsonRegExp, raw, enableUtf8Validation } = options;
      return {
        fieldsAsRaw,
        useBigInt64,
        promoteValues,
        promoteBuffers,
        promoteLongs,
        serializeFunctions,
        ignoreUndefined,
        bsonRegExp,
        raw,
        enableUtf8Validation
      };
    }
    function resolveBSONOptions(options, parent) {
      const parentOptions = parent?.bsonOptions;
      return {
        raw: options?.raw ?? parentOptions?.raw ?? false,
        useBigInt64: options?.useBigInt64 ?? parentOptions?.useBigInt64 ?? false,
        promoteLongs: options?.promoteLongs ?? parentOptions?.promoteLongs ?? true,
        promoteValues: options?.promoteValues ?? parentOptions?.promoteValues ?? true,
        promoteBuffers: options?.promoteBuffers ?? parentOptions?.promoteBuffers ?? false,
        ignoreUndefined: options?.ignoreUndefined ?? parentOptions?.ignoreUndefined ?? false,
        bsonRegExp: options?.bsonRegExp ?? parentOptions?.bsonRegExp ?? false,
        serializeFunctions: options?.serializeFunctions ?? parentOptions?.serializeFunctions ?? false,
        fieldsAsRaw: options?.fieldsAsRaw ?? parentOptions?.fieldsAsRaw ?? {},
        enableUtf8Validation: options?.enableUtf8Validation ?? parentOptions?.enableUtf8Validation ?? true
      };
    }
    function parseUtf8ValidationOption(options) {
      const enableUtf8Validation = options?.enableUtf8Validation;
      if (enableUtf8Validation === false) {
        return { utf8: false };
      }
      return { utf8: { writeErrors: false } };
    }
  })(bson);
  return bson;
}
var error = {};
var hasRequiredError;
function requireError() {
  if (hasRequiredError) return error;
  hasRequiredError = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MongoWriteConcernError = exports.MongoServerSelectionError = exports.MongoSystemError = exports.MongoMissingDependencyError = exports.MongoMissingCredentialsError = exports.MongoCompatibilityError = exports.MongoInvalidArgumentError = exports.MongoParseError = exports.MongoNetworkTimeoutError = exports.MongoNetworkError = exports.MongoClientClosedError = exports.MongoTopologyClosedError = exports.MongoCursorExhaustedError = exports.MongoServerClosedError = exports.MongoCursorInUseError = exports.MongoOperationTimeoutError = exports.MongoUnexpectedServerResponseError = exports.MongoGridFSChunkError = exports.MongoGridFSStreamError = exports.MongoTailableCursorError = exports.MongoChangeStreamError = exports.MongoClientBulkWriteExecutionError = exports.MongoClientBulkWriteCursorError = exports.MongoClientBulkWriteError = exports.MongoGCPError = exports.MongoAzureError = exports.MongoOIDCError = exports.MongoAWSError = exports.MongoKerberosError = exports.MongoExpiredSessionError = exports.MongoTransactionError = exports.MongoNotConnectedError = exports.MongoDecompressionError = exports.MongoBatchReExecutionError = exports.MongoStalePrimaryError = exports.MongoRuntimeError = exports.MongoAPIError = exports.MongoDriverError = exports.MongoServerError = exports.MongoError = exports.MongoErrorLabel = exports.GET_MORE_RESUMABLE_CODES = exports.MONGODB_ERROR_CODES = exports.NODE_IS_RECOVERING_ERROR_MESSAGE = exports.LEGACY_NOT_PRIMARY_OR_SECONDARY_ERROR_MESSAGE = exports.LEGACY_NOT_WRITABLE_PRIMARY_ERROR_MESSAGE = void 0;
    exports.needsRetryableWriteLabel = needsRetryableWriteLabel;
    exports.isRetryableWriteError = isRetryableWriteError;
    exports.isRetryableReadError = isRetryableReadError;
    exports.isNodeShuttingDownError = isNodeShuttingDownError;
    exports.isStateChangeError = isStateChangeError;
    exports.isNetworkTimeoutError = isNetworkTimeoutError;
    exports.isResumableError = isResumableError;
    exports.LEGACY_NOT_WRITABLE_PRIMARY_ERROR_MESSAGE = new RegExp("not master", "i");
    exports.LEGACY_NOT_PRIMARY_OR_SECONDARY_ERROR_MESSAGE = new RegExp("not master or secondary", "i");
    exports.NODE_IS_RECOVERING_ERROR_MESSAGE = new RegExp("node is recovering", "i");
    exports.MONGODB_ERROR_CODES = Object.freeze({
      HostUnreachable: 6,
      HostNotFound: 7,
      AuthenticationFailed: 18,
      NetworkTimeout: 89,
      ShutdownInProgress: 91,
      PrimarySteppedDown: 189,
      ExceededTimeLimit: 262,
      SocketException: 9001,
      NotWritablePrimary: 10107,
      InterruptedAtShutdown: 11600,
      InterruptedDueToReplStateChange: 11602,
      NotPrimaryNoSecondaryOk: 13435,
      NotPrimaryOrSecondary: 13436,
      StaleShardVersion: 63,
      StaleEpoch: 150,
      StaleConfig: 13388,
      RetryChangeStream: 234,
      FailedToSatisfyReadPreference: 133,
      CursorNotFound: 43,
      LegacyNotPrimary: 10058,
      // WriteConcernTimeout is WriteConcernFailed on pre-8.1 servers
      WriteConcernTimeout: 64,
      NamespaceNotFound: 26,
      IllegalOperation: 20,
      MaxTimeMSExpired: 50,
      UnknownReplWriteConcern: 79,
      UnsatisfiableWriteConcern: 100,
      Reauthenticate: 391,
      ReadConcernMajorityNotAvailableYet: 134
    });
    exports.GET_MORE_RESUMABLE_CODES = /* @__PURE__ */ new Set([
      exports.MONGODB_ERROR_CODES.HostUnreachable,
      exports.MONGODB_ERROR_CODES.HostNotFound,
      exports.MONGODB_ERROR_CODES.NetworkTimeout,
      exports.MONGODB_ERROR_CODES.ShutdownInProgress,
      exports.MONGODB_ERROR_CODES.PrimarySteppedDown,
      exports.MONGODB_ERROR_CODES.ExceededTimeLimit,
      exports.MONGODB_ERROR_CODES.SocketException,
      exports.MONGODB_ERROR_CODES.NotWritablePrimary,
      exports.MONGODB_ERROR_CODES.InterruptedAtShutdown,
      exports.MONGODB_ERROR_CODES.InterruptedDueToReplStateChange,
      exports.MONGODB_ERROR_CODES.NotPrimaryNoSecondaryOk,
      exports.MONGODB_ERROR_CODES.NotPrimaryOrSecondary,
      exports.MONGODB_ERROR_CODES.StaleShardVersion,
      exports.MONGODB_ERROR_CODES.StaleEpoch,
      exports.MONGODB_ERROR_CODES.StaleConfig,
      exports.MONGODB_ERROR_CODES.RetryChangeStream,
      exports.MONGODB_ERROR_CODES.FailedToSatisfyReadPreference,
      exports.MONGODB_ERROR_CODES.CursorNotFound
    ]);
    exports.MongoErrorLabel = Object.freeze({
      RetryableWriteError: "RetryableWriteError",
      TransientTransactionError: "TransientTransactionError",
      UnknownTransactionCommitResult: "UnknownTransactionCommitResult",
      ResumableChangeStreamError: "ResumableChangeStreamError",
      HandshakeError: "HandshakeError",
      ResetPool: "ResetPool",
      PoolRequestedRetry: "PoolRequestedRetry",
      InterruptInUseConnections: "InterruptInUseConnections",
      NoWritesPerformed: "NoWritesPerformed",
      RetryableError: "RetryableError",
      SystemOverloadedError: "SystemOverloadedError"
    });
    function isAggregateError(e) {
      return e != null && typeof e === "object" && "errors" in e && Array.isArray(e.errors);
    }
    class MongoError extends Error {
      get errorLabels() {
        return Array.from(this.errorLabelSet);
      }
      /**
       * **Do not use this constructor!**
       *
       * Meant for internal use only.
       *
       * @remarks
       * This class is only meant to be constructed within the driver. This constructor is
       * not subject to semantic versioning compatibility guarantees and may change at any time.
       *
       * @public
       **/
      constructor(message, options) {
        super(message, options);
        this.errorLabelSet = /* @__PURE__ */ new Set();
      }
      /** @internal */
      static buildErrorMessage(e) {
        if (typeof e === "string") {
          return e;
        }
        if (isAggregateError(e) && e.message.length === 0) {
          return e.errors.length === 0 ? "AggregateError has an empty errors array. Please check the `cause` property for more information." : e.errors.map(({ message }) => message).join(", ");
        }
        return e != null && typeof e === "object" && "message" in e && typeof e.message === "string" ? e.message : "empty error message";
      }
      get name() {
        return "MongoError";
      }
      /** Legacy name for server error responses */
      get errmsg() {
        return this.message;
      }
      /**
       * Checks the error to see if it has an error label
       *
       * @param label - The error label to check for
       * @returns returns true if the error has the provided error label
       */
      hasErrorLabel(label) {
        return this.errorLabelSet.has(label);
      }
      addErrorLabel(label) {
        this.errorLabelSet.add(label);
      }
    }
    exports.MongoError = MongoError;
    class MongoServerError extends MongoError {
      /**
       * **Do not use this constructor!**
       *
       * Meant for internal use only.
       *
       * @remarks
       * This class is only meant to be constructed within the driver. This constructor is
       * not subject to semantic versioning compatibility guarantees and may change at any time.
       *
       * @public
       **/
      constructor(message) {
        super(message.message || message.errmsg || message.$err || "n/a");
        if (message.errorLabels) {
          for (const label of message.errorLabels)
            this.addErrorLabel(label);
        }
        this.errorResponse = message;
        for (const name in message) {
          if (name !== "errorLabels" && name !== "errmsg" && name !== "message" && name !== "errorResponse") {
            this[name] = message[name];
          }
        }
      }
      get name() {
        return "MongoServerError";
      }
    }
    exports.MongoServerError = MongoServerError;
    class MongoDriverError extends MongoError {
      /**
       * **Do not use this constructor!**
       *
       * Meant for internal use only.
       *
       * @remarks
       * This class is only meant to be constructed within the driver. This constructor is
       * not subject to semantic versioning compatibility guarantees and may change at any time.
       *
       * @public
       **/
      constructor(message, options) {
        super(message, options);
      }
      get name() {
        return "MongoDriverError";
      }
    }
    exports.MongoDriverError = MongoDriverError;
    class MongoAPIError extends MongoDriverError {
      /**
       * **Do not use this constructor!**
       *
       * Meant for internal use only.
       *
       * @remarks
       * This class is only meant to be constructed within the driver. This constructor is
       * not subject to semantic versioning compatibility guarantees and may change at any time.
       *
       * @public
       **/
      constructor(message, options) {
        super(message, options);
      }
      get name() {
        return "MongoAPIError";
      }
    }
    exports.MongoAPIError = MongoAPIError;
    class MongoRuntimeError extends MongoDriverError {
      /**
       * **Do not use this constructor!**
       *
       * Meant for internal use only.
       *
       * @remarks
       * This class is only meant to be constructed within the driver. This constructor is
       * not subject to semantic versioning compatibility guarantees and may change at any time.
       *
       * @public
       **/
      constructor(message, options) {
        super(message, options);
      }
      get name() {
        return "MongoRuntimeError";
      }
    }
    exports.MongoRuntimeError = MongoRuntimeError;
    class MongoStalePrimaryError extends MongoRuntimeError {
      /**
       * **Do not use this constructor!**
       *
       * Meant for internal use only.
       *
       * @remarks
       * This class is only meant to be constructed within the driver. This constructor is
       * not subject to semantic versioning compatibility guarantees and may change at any time.
       *
       * @public
       **/
      constructor(message, options) {
        super(message, options);
      }
      get name() {
        return "MongoStalePrimaryError";
      }
    }
    exports.MongoStalePrimaryError = MongoStalePrimaryError;
    class MongoBatchReExecutionError extends MongoAPIError {
      /**
       * **Do not use this constructor!**
       *
       * Meant for internal use only.
       *
       * @remarks
       * This class is only meant to be constructed within the driver. This constructor is
       * not subject to semantic versioning compatibility guarantees and may change at any time.
       *
       * @public
       **/
      constructor(message = "This batch has already been executed, create new batch to execute") {
        super(message);
      }
      get name() {
        return "MongoBatchReExecutionError";
      }
    }
    exports.MongoBatchReExecutionError = MongoBatchReExecutionError;
    class MongoDecompressionError extends MongoRuntimeError {
      /**
       * **Do not use this constructor!**
       *
       * Meant for internal use only.
       *
       * @remarks
       * This class is only meant to be constructed within the driver. This constructor is
       * not subject to semantic versioning compatibility guarantees and may change at any time.
       *
       * @public
       **/
      constructor(message) {
        super(message);
      }
      get name() {
        return "MongoDecompressionError";
      }
    }
    exports.MongoDecompressionError = MongoDecompressionError;
    class MongoNotConnectedError extends MongoAPIError {
      /**
       * **Do not use this constructor!**
       *
       * Meant for internal use only.
       *
       * @remarks
       * This class is only meant to be constructed within the driver. This constructor is
       * not subject to semantic versioning compatibility guarantees and may change at any time.
       *
       * @public
       **/
      constructor(message) {
        super(message);
      }
      get name() {
        return "MongoNotConnectedError";
      }
    }
    exports.MongoNotConnectedError = MongoNotConnectedError;
    class MongoTransactionError extends MongoAPIError {
      /**
       * **Do not use this constructor!**
       *
       * Meant for internal use only.
       *
       * @remarks
       * This class is only meant to be constructed within the driver. This constructor is
       * not subject to semantic versioning compatibility guarantees and may change at any time.
       *
       * @public
       **/
      constructor(message) {
        super(message);
      }
      get name() {
        return "MongoTransactionError";
      }
    }
    exports.MongoTransactionError = MongoTransactionError;
    class MongoExpiredSessionError extends MongoAPIError {
      /**
       * **Do not use this constructor!**
       *
       * Meant for internal use only.
       *
       * @remarks
       * This class is only meant to be constructed within the driver. This constructor is
       * not subject to semantic versioning compatibility guarantees and may change at any time.
       *
       * @public
       **/
      constructor(message = "Cannot use a session that has ended") {
        super(message);
      }
      get name() {
        return "MongoExpiredSessionError";
      }
    }
    exports.MongoExpiredSessionError = MongoExpiredSessionError;
    class MongoKerberosError extends MongoRuntimeError {
      /**
       * **Do not use this constructor!**
       *
       * Meant for internal use only.
       *
       * @remarks
       * This class is only meant to be constructed within the driver. This constructor is
       * not subject to semantic versioning compatibility guarantees and may change at any time.
       *
       * @public
       **/
      constructor(message) {
        super(message);
      }
      get name() {
        return "MongoKerberosError";
      }
    }
    exports.MongoKerberosError = MongoKerberosError;
    class MongoAWSError extends MongoRuntimeError {
      /**
       * **Do not use this constructor!**
       *
       * Meant for internal use only.
       *
       * @remarks
       * This class is only meant to be constructed within the driver. This constructor is
       * not subject to semantic versioning compatibility guarantees and may change at any time.
       *
       * @public
       **/
      constructor(message, options) {
        super(message, options);
      }
      get name() {
        return "MongoAWSError";
      }
    }
    exports.MongoAWSError = MongoAWSError;
    class MongoOIDCError extends MongoRuntimeError {
      /**
       * **Do not use this constructor!**
       *
       * Meant for internal use only.
       *
       * @remarks
       * This class is only meant to be constructed within the driver. This constructor is
       * not subject to semantic versioning compatibility guarantees and may change at any time.
       *
       * @public
       **/
      constructor(message) {
        super(message);
      }
      get name() {
        return "MongoOIDCError";
      }
    }
    exports.MongoOIDCError = MongoOIDCError;
    class MongoAzureError extends MongoOIDCError {
      /**
       * **Do not use this constructor!**
       *
       * Meant for internal use only.
       *
       * @remarks
       * This class is only meant to be constructed within the driver. This constructor is
       * not subject to semantic versioning compatibility guarantees and may change at any time.
       *
       * @public
       **/
      constructor(message) {
        super(message);
      }
      get name() {
        return "MongoAzureError";
      }
    }
    exports.MongoAzureError = MongoAzureError;
    class MongoGCPError extends MongoOIDCError {
      /**
       * **Do not use this constructor!**
       *
       * Meant for internal use only.
       *
       * @remarks
       * This class is only meant to be constructed within the driver. This constructor is
       * not subject to semantic versioning compatibility guarantees and may change at any time.
       *
       * @public
       **/
      constructor(message) {
        super(message);
      }
      get name() {
        return "MongoGCPError";
      }
    }
    exports.MongoGCPError = MongoGCPError;
    class MongoClientBulkWriteError extends MongoServerError {
      /**
       * Initialize the client bulk write error.
       * @param message - The error message.
       */
      constructor(message) {
        super(message);
        this.writeConcernErrors = [];
        this.writeErrors = /* @__PURE__ */ new Map();
      }
      get name() {
        return "MongoClientBulkWriteError";
      }
    }
    exports.MongoClientBulkWriteError = MongoClientBulkWriteError;
    class MongoClientBulkWriteCursorError extends MongoRuntimeError {
      /**
       * **Do not use this constructor!**
       *
       * Meant for internal use only.
       *
       * @remarks
       * This class is only meant to be constructed within the driver. This constructor is
       * not subject to semantic versioning compatibility guarantees and may change at any time.
       *
       * @public
       **/
      constructor(message) {
        super(message);
      }
      get name() {
        return "MongoClientBulkWriteCursorError";
      }
    }
    exports.MongoClientBulkWriteCursorError = MongoClientBulkWriteCursorError;
    class MongoClientBulkWriteExecutionError extends MongoRuntimeError {
      /**
       * **Do not use this constructor!**
       *
       * Meant for internal use only.
       *
       * @remarks
       * This class is only meant to be constructed within the driver. This constructor is
       * not subject to semantic versioning compatibility guarantees and may change at any time.
       *
       * @public
       **/
      constructor(message) {
        super(message);
      }
      get name() {
        return "MongoClientBulkWriteExecutionError";
      }
    }
    exports.MongoClientBulkWriteExecutionError = MongoClientBulkWriteExecutionError;
    class MongoChangeStreamError extends MongoRuntimeError {
      /**
       * **Do not use this constructor!**
       *
       * Meant for internal use only.
       *
       * @remarks
       * This class is only meant to be constructed within the driver. This constructor is
       * not subject to semantic versioning compatibility guarantees and may change at any time.
       *
       * @public
       **/
      constructor(message) {
        super(message);
      }
      get name() {
        return "MongoChangeStreamError";
      }
    }
    exports.MongoChangeStreamError = MongoChangeStreamError;
    class MongoTailableCursorError extends MongoAPIError {
      /**
       * **Do not use this constructor!**
       *
       * Meant for internal use only.
       *
       * @remarks
       * This class is only meant to be constructed within the driver. This constructor is
       * not subject to semantic versioning compatibility guarantees and may change at any time.
       *
       * @public
       **/
      constructor(message = "Tailable cursor does not support this operation") {
        super(message);
      }
      get name() {
        return "MongoTailableCursorError";
      }
    }
    exports.MongoTailableCursorError = MongoTailableCursorError;
    class MongoGridFSStreamError extends MongoRuntimeError {
      /**
       * **Do not use this constructor!**
       *
       * Meant for internal use only.
       *
       * @remarks
       * This class is only meant to be constructed within the driver. This constructor is
       * not subject to semantic versioning compatibility guarantees and may change at any time.
       *
       * @public
       **/
      constructor(message) {
        super(message);
      }
      get name() {
        return "MongoGridFSStreamError";
      }
    }
    exports.MongoGridFSStreamError = MongoGridFSStreamError;
    class MongoGridFSChunkError extends MongoRuntimeError {
      /**
       * **Do not use this constructor!**
       *
       * Meant for internal use only.
       *
       * @remarks
       * This class is only meant to be constructed within the driver. This constructor is
       * not subject to semantic versioning compatibility guarantees and may change at any time.
       *
       * @public
       **/
      constructor(message) {
        super(message);
      }
      get name() {
        return "MongoGridFSChunkError";
      }
    }
    exports.MongoGridFSChunkError = MongoGridFSChunkError;
    class MongoUnexpectedServerResponseError extends MongoRuntimeError {
      /**
       * **Do not use this constructor!**
       *
       * Meant for internal use only.
       *
       * @remarks
       * This class is only meant to be constructed within the driver. This constructor is
       * not subject to semantic versioning compatibility guarantees and may change at any time.
       *
       * @public
       **/
      constructor(message, options) {
        super(message, options);
      }
      get name() {
        return "MongoUnexpectedServerResponseError";
      }
    }
    exports.MongoUnexpectedServerResponseError = MongoUnexpectedServerResponseError;
    class MongoOperationTimeoutError extends MongoDriverError {
      get name() {
        return "MongoOperationTimeoutError";
      }
    }
    exports.MongoOperationTimeoutError = MongoOperationTimeoutError;
    class MongoCursorInUseError extends MongoAPIError {
      /**
       * **Do not use this constructor!**
       *
       * Meant for internal use only.
       *
       * @remarks
       * This class is only meant to be constructed within the driver. This constructor is
       * not subject to semantic versioning compatibility guarantees and may change at any time.
       *
       * @public
       **/
      constructor(message = "Cursor is already initialized") {
        super(message);
      }
      get name() {
        return "MongoCursorInUseError";
      }
    }
    exports.MongoCursorInUseError = MongoCursorInUseError;
    class MongoServerClosedError extends MongoAPIError {
      /**
       * **Do not use this constructor!**
       *
       * Meant for internal use only.
       *
       * @remarks
       * This class is only meant to be constructed within the driver. This constructor is
       * not subject to semantic versioning compatibility guarantees and may change at any time.
       *
       * @public
       **/
      constructor(message = "Server is closed") {
        super(message);
      }
      get name() {
        return "MongoServerClosedError";
      }
    }
    exports.MongoServerClosedError = MongoServerClosedError;
    class MongoCursorExhaustedError extends MongoAPIError {
      /**
       * **Do not use this constructor!**
       *
       * Meant for internal use only.
       *
       * @remarks
       * This class is only meant to be constructed within the driver. This constructor is
       * not subject to semantic versioning compatibility guarantees and may change at any time.
       *
       * @public
       **/
      constructor(message) {
        super(message || "Cursor is exhausted");
      }
      get name() {
        return "MongoCursorExhaustedError";
      }
    }
    exports.MongoCursorExhaustedError = MongoCursorExhaustedError;
    class MongoTopologyClosedError extends MongoAPIError {
      /**
       * **Do not use this constructor!**
       *
       * Meant for internal use only.
       *
       * @remarks
       * This class is only meant to be constructed within the driver. This constructor is
       * not subject to semantic versioning compatibility guarantees and may change at any time.
       *
       * @public
       **/
      constructor(message = "Topology is closed") {
        super(message);
      }
      get name() {
        return "MongoTopologyClosedError";
      }
    }
    exports.MongoTopologyClosedError = MongoTopologyClosedError;
    class MongoClientClosedError extends MongoAPIError {
      /**
       * **Do not use this constructor!**
       *
       * Meant for internal use only.
       *
       * @remarks
       * This class is only meant to be constructed within the driver. This constructor is
       * not subject to semantic versioning compatibility guarantees and may change at any time.
       *
       * @public
       **/
      constructor() {
        super("Operation interrupted because client was closed");
      }
      get name() {
        return "MongoClientClosedError";
      }
    }
    exports.MongoClientClosedError = MongoClientClosedError;
    class MongoNetworkError extends MongoError {
      /**
       * **Do not use this constructor!**
       *
       * Meant for internal use only.
       *
       * @remarks
       * This class is only meant to be constructed within the driver. This constructor is
       * not subject to semantic versioning compatibility guarantees and may change at any time.
       *
       * @public
       **/
      constructor(message, options) {
        super(message, { cause: options?.cause });
        this.beforeHandshake = !!options?.beforeHandshake;
      }
      get name() {
        return "MongoNetworkError";
      }
    }
    exports.MongoNetworkError = MongoNetworkError;
    class MongoNetworkTimeoutError extends MongoNetworkError {
      /**
       * **Do not use this constructor!**
       *
       * Meant for internal use only.
       *
       * @remarks
       * This class is only meant to be constructed within the driver. This constructor is
       * not subject to semantic versioning compatibility guarantees and may change at any time.
       *
       * @public
       **/
      constructor(message, options) {
        super(message, options);
      }
      get name() {
        return "MongoNetworkTimeoutError";
      }
    }
    exports.MongoNetworkTimeoutError = MongoNetworkTimeoutError;
    class MongoParseError extends MongoDriverError {
      /**
       * **Do not use this constructor!**
       *
       * Meant for internal use only.
       *
       * @remarks
       * This class is only meant to be constructed within the driver. This constructor is
       * not subject to semantic versioning compatibility guarantees and may change at any time.
       *
       * @public
       **/
      constructor(message) {
        super(message);
      }
      get name() {
        return "MongoParseError";
      }
    }
    exports.MongoParseError = MongoParseError;
    class MongoInvalidArgumentError extends MongoAPIError {
      /**
       * **Do not use this constructor!**
       *
       * Meant for internal use only.
       *
       * @remarks
       * This class is only meant to be constructed within the driver. This constructor is
       * not subject to semantic versioning compatibility guarantees and may change at any time.
       *
       * @public
       **/
      constructor(message, options) {
        super(message, options);
      }
      get name() {
        return "MongoInvalidArgumentError";
      }
    }
    exports.MongoInvalidArgumentError = MongoInvalidArgumentError;
    class MongoCompatibilityError extends MongoAPIError {
      /**
       * **Do not use this constructor!**
       *
       * Meant for internal use only.
       *
       * @remarks
       * This class is only meant to be constructed within the driver. This constructor is
       * not subject to semantic versioning compatibility guarantees and may change at any time.
       *
       * @public
       **/
      constructor(message) {
        super(message);
      }
      get name() {
        return "MongoCompatibilityError";
      }
    }
    exports.MongoCompatibilityError = MongoCompatibilityError;
    class MongoMissingCredentialsError extends MongoAPIError {
      /**
       * **Do not use this constructor!**
       *
       * Meant for internal use only.
       *
       * @remarks
       * This class is only meant to be constructed within the driver. This constructor is
       * not subject to semantic versioning compatibility guarantees and may change at any time.
       *
       * @public
       **/
      constructor(message) {
        super(message);
      }
      get name() {
        return "MongoMissingCredentialsError";
      }
    }
    exports.MongoMissingCredentialsError = MongoMissingCredentialsError;
    class MongoMissingDependencyError extends MongoAPIError {
      /**
       * **Do not use this constructor!**
       *
       * Meant for internal use only.
       *
       * @remarks
       * This class is only meant to be constructed within the driver. This constructor is
       * not subject to semantic versioning compatibility guarantees and may change at any time.
       *
       * @public
       **/
      constructor(message, options) {
        super(message, options);
        this.dependencyName = options.dependencyName;
      }
      get name() {
        return "MongoMissingDependencyError";
      }
    }
    exports.MongoMissingDependencyError = MongoMissingDependencyError;
    class MongoSystemError extends MongoError {
      /**
       * **Do not use this constructor!**
       *
       * Meant for internal use only.
       *
       * @remarks
       * This class is only meant to be constructed within the driver. This constructor is
       * not subject to semantic versioning compatibility guarantees and may change at any time.
       *
       * @public
       **/
      constructor(message, reason) {
        if (reason && reason.error) {
          super(MongoError.buildErrorMessage(reason.error.message || reason.error), {
            cause: reason.error
          });
        } else {
          super(message);
        }
        if (reason) {
          this.reason = reason;
        }
        this.code = reason.error?.code;
      }
      get name() {
        return "MongoSystemError";
      }
    }
    exports.MongoSystemError = MongoSystemError;
    class MongoServerSelectionError extends MongoSystemError {
      /**
       * **Do not use this constructor!**
       *
       * Meant for internal use only.
       *
       * @remarks
       * This class is only meant to be constructed within the driver. This constructor is
       * not subject to semantic versioning compatibility guarantees and may change at any time.
       *
       * @public
       **/
      constructor(message, reason) {
        super(message, reason);
      }
      get name() {
        return "MongoServerSelectionError";
      }
    }
    exports.MongoServerSelectionError = MongoServerSelectionError;
    class MongoWriteConcernError extends MongoServerError {
      /**
       * **Do not use this constructor!**
       *
       * Meant for internal use only.
       *
       * @remarks
       * This class is only meant to be constructed within the driver. This constructor is
       * not subject to semantic versioning compatibility guarantees and may change at any time.
       *
       * @public
       **/
      constructor(result) {
        super({ ...result.writeConcernError, ...result });
        this.errInfo = result.writeConcernError.errInfo;
        this.result = result;
      }
      get name() {
        return "MongoWriteConcernError";
      }
    }
    exports.MongoWriteConcernError = MongoWriteConcernError;
    const RETRYABLE_READ_ERROR_CODES = /* @__PURE__ */ new Set([
      exports.MONGODB_ERROR_CODES.HostUnreachable,
      exports.MONGODB_ERROR_CODES.HostNotFound,
      exports.MONGODB_ERROR_CODES.NetworkTimeout,
      exports.MONGODB_ERROR_CODES.ShutdownInProgress,
      exports.MONGODB_ERROR_CODES.PrimarySteppedDown,
      exports.MONGODB_ERROR_CODES.SocketException,
      exports.MONGODB_ERROR_CODES.NotWritablePrimary,
      exports.MONGODB_ERROR_CODES.InterruptedAtShutdown,
      exports.MONGODB_ERROR_CODES.InterruptedDueToReplStateChange,
      exports.MONGODB_ERROR_CODES.NotPrimaryNoSecondaryOk,
      exports.MONGODB_ERROR_CODES.NotPrimaryOrSecondary,
      exports.MONGODB_ERROR_CODES.ExceededTimeLimit,
      exports.MONGODB_ERROR_CODES.ReadConcernMajorityNotAvailableYet
    ]);
    const RETRYABLE_WRITE_ERROR_CODES = RETRYABLE_READ_ERROR_CODES;
    function needsRetryableWriteLabel(error2, maxWireVersion, serverType) {
      if (error2 instanceof MongoNetworkError) {
        return true;
      }
      if (error2 instanceof MongoError) {
        if ((maxWireVersion >= 9 || isRetryableWriteError(error2)) && !error2.hasErrorLabel(exports.MongoErrorLabel.HandshakeError)) {
          return false;
        }
      }
      if (error2 instanceof MongoWriteConcernError) {
        if (serverType === "Mongos" && maxWireVersion < 9) {
          return RETRYABLE_WRITE_ERROR_CODES.has(error2.result.code ?? 0);
        }
        const code = error2.result.writeConcernError.code ?? Number(error2.code);
        return RETRYABLE_WRITE_ERROR_CODES.has(Number.isNaN(code) ? 0 : code);
      }
      if (error2 instanceof MongoError) {
        return RETRYABLE_WRITE_ERROR_CODES.has(Number(error2.code));
      }
      const isNotWritablePrimaryError2 = exports.LEGACY_NOT_WRITABLE_PRIMARY_ERROR_MESSAGE.test(error2.message);
      if (isNotWritablePrimaryError2) {
        return true;
      }
      const isNodeIsRecoveringError = exports.NODE_IS_RECOVERING_ERROR_MESSAGE.test(error2.message);
      if (isNodeIsRecoveringError) {
        return true;
      }
      return false;
    }
    function isRetryableWriteError(error2) {
      return error2.hasErrorLabel(exports.MongoErrorLabel.RetryableWriteError) || error2.hasErrorLabel(exports.MongoErrorLabel.PoolRequestedRetry);
    }
    function isRetryableReadError(error2) {
      const hasRetryableErrorCode = typeof error2.code === "number" ? RETRYABLE_READ_ERROR_CODES.has(error2.code) : false;
      if (hasRetryableErrorCode) {
        return true;
      }
      if (error2 instanceof MongoNetworkError) {
        return true;
      }
      const isNotWritablePrimaryError2 = exports.LEGACY_NOT_WRITABLE_PRIMARY_ERROR_MESSAGE.test(error2.message);
      if (isNotWritablePrimaryError2) {
        return true;
      }
      const isNodeIsRecoveringError = exports.NODE_IS_RECOVERING_ERROR_MESSAGE.test(error2.message);
      if (isNodeIsRecoveringError) {
        return true;
      }
      return false;
    }
    const SDAM_RECOVERING_CODES = /* @__PURE__ */ new Set([
      exports.MONGODB_ERROR_CODES.ShutdownInProgress,
      exports.MONGODB_ERROR_CODES.PrimarySteppedDown,
      exports.MONGODB_ERROR_CODES.InterruptedAtShutdown,
      exports.MONGODB_ERROR_CODES.InterruptedDueToReplStateChange,
      exports.MONGODB_ERROR_CODES.NotPrimaryOrSecondary
    ]);
    const SDAM_NOT_PRIMARY_CODES = /* @__PURE__ */ new Set([
      exports.MONGODB_ERROR_CODES.NotWritablePrimary,
      exports.MONGODB_ERROR_CODES.NotPrimaryNoSecondaryOk,
      exports.MONGODB_ERROR_CODES.LegacyNotPrimary
    ]);
    const SDAM_NODE_SHUTTING_DOWN_ERROR_CODES = /* @__PURE__ */ new Set([
      exports.MONGODB_ERROR_CODES.InterruptedAtShutdown,
      exports.MONGODB_ERROR_CODES.ShutdownInProgress
    ]);
    function isRecoveringError(err) {
      if (typeof err.code === "number") {
        return SDAM_RECOVERING_CODES.has(err.code);
      }
      return exports.LEGACY_NOT_PRIMARY_OR_SECONDARY_ERROR_MESSAGE.test(err.message) || exports.NODE_IS_RECOVERING_ERROR_MESSAGE.test(err.message);
    }
    function isNotWritablePrimaryError(err) {
      if (typeof err.code === "number") {
        return SDAM_NOT_PRIMARY_CODES.has(err.code);
      }
      if (isRecoveringError(err)) {
        return false;
      }
      return exports.LEGACY_NOT_WRITABLE_PRIMARY_ERROR_MESSAGE.test(err.message);
    }
    function isNodeShuttingDownError(err) {
      return !!(typeof err.code === "number" && SDAM_NODE_SHUTTING_DOWN_ERROR_CODES.has(err.code));
    }
    function isStateChangeError(error2) {
      return isRecoveringError(error2) || isNotWritablePrimaryError(error2);
    }
    function isNetworkTimeoutError(err) {
      return !!(err instanceof MongoNetworkError && err.message.match(/timed out/));
    }
    function isResumableError(error2, wireVersion) {
      if (error2 == null || !(error2 instanceof MongoError)) {
        return false;
      }
      if (error2 instanceof MongoNetworkError) {
        return true;
      }
      if (error2 instanceof MongoServerSelectionError) {
        return true;
      }
      if (wireVersion != null && wireVersion >= 9) {
        if (error2.code === exports.MONGODB_ERROR_CODES.CursorNotFound) {
          return true;
        }
        return error2.hasErrorLabel(exports.MongoErrorLabel.ResumableChangeStreamError);
      }
      if (typeof error2.code === "number") {
        return exports.GET_MORE_RESUMABLE_CODES.has(error2.code);
      }
      return false;
    }
  })(error);
  return error;
}
var _delete = {};
var responses = {};
var utils = {};
var constants$1 = {};
var hasRequiredConstants$1;
function requireConstants$1() {
  if (hasRequiredConstants$1) return constants$1;
  hasRequiredConstants$1 = 1;
  Object.defineProperty(constants$1, "__esModule", { value: true });
  constants$1.OP_MSG = constants$1.OP_COMPRESSED = constants$1.OP_DELETE = constants$1.OP_QUERY = constants$1.OP_INSERT = constants$1.OP_UPDATE = constants$1.OP_REPLY = constants$1.MIN_SUPPORTED_RAW_DATA_SERVER_VERSION = constants$1.MIN_SUPPORTED_RAW_DATA_WIRE_VERSION = constants$1.MIN_SUPPORTED_QE_SERVER_VERSION = constants$1.MIN_SUPPORTED_QE_WIRE_VERSION = constants$1.MAX_SUPPORTED_WIRE_VERSION = constants$1.MIN_SUPPORTED_WIRE_VERSION = constants$1.MIN_SUPPORTED_SNAPSHOT_READS_SERVER_VERSION = constants$1.MIN_SUPPORTED_SNAPSHOT_READS_WIRE_VERSION = constants$1.MAX_SUPPORTED_SERVER_VERSION = constants$1.MIN_SUPPORTED_SERVER_VERSION = void 0;
  constants$1.MIN_SUPPORTED_SERVER_VERSION = "4.2";
  constants$1.MAX_SUPPORTED_SERVER_VERSION = "9.0";
  constants$1.MIN_SUPPORTED_SNAPSHOT_READS_WIRE_VERSION = 13;
  constants$1.MIN_SUPPORTED_SNAPSHOT_READS_SERVER_VERSION = "5.0";
  constants$1.MIN_SUPPORTED_WIRE_VERSION = 8;
  constants$1.MAX_SUPPORTED_WIRE_VERSION = 29;
  constants$1.MIN_SUPPORTED_QE_WIRE_VERSION = 21;
  constants$1.MIN_SUPPORTED_QE_SERVER_VERSION = "7.0";
  constants$1.MIN_SUPPORTED_RAW_DATA_WIRE_VERSION = 27;
  constants$1.MIN_SUPPORTED_RAW_DATA_SERVER_VERSION = "8.2";
  constants$1.OP_REPLY = 1;
  constants$1.OP_UPDATE = 2001;
  constants$1.OP_INSERT = 2002;
  constants$1.OP_QUERY = 2004;
  constants$1.OP_DELETE = 2006;
  constants$1.OP_COMPRESSED = 2012;
  constants$1.OP_MSG = 2013;
  return constants$1;
}
var constants = {};
var hasRequiredConstants;
function requireConstants() {
  if (hasRequiredConstants) return constants;
  hasRequiredConstants = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.END = exports.CHANGE = exports.INIT = exports.MORE = exports.RESPONSE = exports.SERVER_HEARTBEAT_FAILED = exports.SERVER_HEARTBEAT_SUCCEEDED = exports.SERVER_HEARTBEAT_STARTED = exports.COMMAND_FAILED = exports.COMMAND_SUCCEEDED = exports.COMMAND_STARTED = exports.CLUSTER_TIME_RECEIVED = exports.CONNECTION_CHECKED_IN = exports.CONNECTION_CHECKED_OUT = exports.CONNECTION_CHECK_OUT_FAILED = exports.CONNECTION_CHECK_OUT_STARTED = exports.CONNECTION_CLOSED = exports.CONNECTION_READY = exports.CONNECTION_CREATED = exports.CONNECTION_POOL_READY = exports.CONNECTION_POOL_CLEARED = exports.CONNECTION_POOL_CLOSED = exports.CONNECTION_POOL_CREATED = exports.WAITING_FOR_SUITABLE_SERVER = exports.SERVER_SELECTION_SUCCEEDED = exports.SERVER_SELECTION_FAILED = exports.SERVER_SELECTION_STARTED = exports.TOPOLOGY_DESCRIPTION_CHANGED = exports.TOPOLOGY_CLOSED = exports.TOPOLOGY_OPENING = exports.SERVER_DESCRIPTION_CHANGED = exports.SERVER_CLOSED = exports.SERVER_OPENING = exports.DESCRIPTION_RECEIVED = exports.UNPINNED = exports.PINNED = exports.MESSAGE = exports.ENDED = exports.CLOSED = exports.CONNECT = exports.OPEN = exports.CLOSE = exports.TIMEOUT = exports.ERROR = exports.SYSTEM_JS_COLLECTION = exports.SYSTEM_COMMAND_COLLECTION = exports.SYSTEM_USER_COLLECTION = exports.SYSTEM_PROFILE_COLLECTION = exports.SYSTEM_INDEX_COLLECTION = exports.SYSTEM_NAMESPACE_COLLECTION = void 0;
    exports.kDecoratedKeys = exports.kDecorateResult = exports.LEGACY_HELLO_COMMAND_CAMEL_CASE = exports.LEGACY_HELLO_COMMAND = exports.MONGO_CLIENT_EVENTS = exports.LOCAL_SERVER_EVENTS = exports.SERVER_RELAY_EVENTS = exports.APM_EVENTS = exports.TOPOLOGY_EVENTS = exports.CMAP_EVENTS = exports.HEARTBEAT_EVENTS = exports.RESUME_TOKEN_CHANGED = void 0;
    exports.SYSTEM_NAMESPACE_COLLECTION = "system.namespaces";
    exports.SYSTEM_INDEX_COLLECTION = "system.indexes";
    exports.SYSTEM_PROFILE_COLLECTION = "system.profile";
    exports.SYSTEM_USER_COLLECTION = "system.users";
    exports.SYSTEM_COMMAND_COLLECTION = "$cmd";
    exports.SYSTEM_JS_COLLECTION = "system.js";
    exports.ERROR = "error";
    exports.TIMEOUT = "timeout";
    exports.CLOSE = "close";
    exports.OPEN = "open";
    exports.CONNECT = "connect";
    exports.CLOSED = "closed";
    exports.ENDED = "ended";
    exports.MESSAGE = "message";
    exports.PINNED = "pinned";
    exports.UNPINNED = "unpinned";
    exports.DESCRIPTION_RECEIVED = "descriptionReceived";
    exports.SERVER_OPENING = "serverOpening";
    exports.SERVER_CLOSED = "serverClosed";
    exports.SERVER_DESCRIPTION_CHANGED = "serverDescriptionChanged";
    exports.TOPOLOGY_OPENING = "topologyOpening";
    exports.TOPOLOGY_CLOSED = "topologyClosed";
    exports.TOPOLOGY_DESCRIPTION_CHANGED = "topologyDescriptionChanged";
    exports.SERVER_SELECTION_STARTED = "serverSelectionStarted";
    exports.SERVER_SELECTION_FAILED = "serverSelectionFailed";
    exports.SERVER_SELECTION_SUCCEEDED = "serverSelectionSucceeded";
    exports.WAITING_FOR_SUITABLE_SERVER = "waitingForSuitableServer";
    exports.CONNECTION_POOL_CREATED = "connectionPoolCreated";
    exports.CONNECTION_POOL_CLOSED = "connectionPoolClosed";
    exports.CONNECTION_POOL_CLEARED = "connectionPoolCleared";
    exports.CONNECTION_POOL_READY = "connectionPoolReady";
    exports.CONNECTION_CREATED = "connectionCreated";
    exports.CONNECTION_READY = "connectionReady";
    exports.CONNECTION_CLOSED = "connectionClosed";
    exports.CONNECTION_CHECK_OUT_STARTED = "connectionCheckOutStarted";
    exports.CONNECTION_CHECK_OUT_FAILED = "connectionCheckOutFailed";
    exports.CONNECTION_CHECKED_OUT = "connectionCheckedOut";
    exports.CONNECTION_CHECKED_IN = "connectionCheckedIn";
    exports.CLUSTER_TIME_RECEIVED = "clusterTimeReceived";
    exports.COMMAND_STARTED = "commandStarted";
    exports.COMMAND_SUCCEEDED = "commandSucceeded";
    exports.COMMAND_FAILED = "commandFailed";
    exports.SERVER_HEARTBEAT_STARTED = "serverHeartbeatStarted";
    exports.SERVER_HEARTBEAT_SUCCEEDED = "serverHeartbeatSucceeded";
    exports.SERVER_HEARTBEAT_FAILED = "serverHeartbeatFailed";
    exports.RESPONSE = "response";
    exports.MORE = "more";
    exports.INIT = "init";
    exports.CHANGE = "change";
    exports.END = "end";
    exports.RESUME_TOKEN_CHANGED = "resumeTokenChanged";
    exports.HEARTBEAT_EVENTS = Object.freeze([
      exports.SERVER_HEARTBEAT_STARTED,
      exports.SERVER_HEARTBEAT_SUCCEEDED,
      exports.SERVER_HEARTBEAT_FAILED
    ]);
    exports.CMAP_EVENTS = Object.freeze([
      exports.CONNECTION_POOL_CREATED,
      exports.CONNECTION_POOL_READY,
      exports.CONNECTION_POOL_CLEARED,
      exports.CONNECTION_POOL_CLOSED,
      exports.CONNECTION_CREATED,
      exports.CONNECTION_READY,
      exports.CONNECTION_CLOSED,
      exports.CONNECTION_CHECK_OUT_STARTED,
      exports.CONNECTION_CHECK_OUT_FAILED,
      exports.CONNECTION_CHECKED_OUT,
      exports.CONNECTION_CHECKED_IN
    ]);
    exports.TOPOLOGY_EVENTS = Object.freeze([
      exports.SERVER_OPENING,
      exports.SERVER_CLOSED,
      exports.SERVER_DESCRIPTION_CHANGED,
      exports.TOPOLOGY_OPENING,
      exports.TOPOLOGY_CLOSED,
      exports.TOPOLOGY_DESCRIPTION_CHANGED,
      exports.ERROR,
      exports.TIMEOUT,
      exports.CLOSE
    ]);
    exports.APM_EVENTS = Object.freeze([
      exports.COMMAND_STARTED,
      exports.COMMAND_SUCCEEDED,
      exports.COMMAND_FAILED
    ]);
    exports.SERVER_RELAY_EVENTS = Object.freeze([
      exports.SERVER_HEARTBEAT_STARTED,
      exports.SERVER_HEARTBEAT_SUCCEEDED,
      exports.SERVER_HEARTBEAT_FAILED,
      exports.COMMAND_STARTED,
      exports.COMMAND_SUCCEEDED,
      exports.COMMAND_FAILED,
      ...exports.CMAP_EVENTS
    ]);
    exports.LOCAL_SERVER_EVENTS = Object.freeze([
      exports.CONNECT,
      exports.DESCRIPTION_RECEIVED,
      exports.CLOSED,
      exports.ENDED
    ]);
    exports.MONGO_CLIENT_EVENTS = Object.freeze([
      ...exports.CMAP_EVENTS,
      ...exports.APM_EVENTS,
      ...exports.TOPOLOGY_EVENTS,
      ...exports.HEARTBEAT_EVENTS
    ]);
    exports.LEGACY_HELLO_COMMAND = "ismaster";
    exports.LEGACY_HELLO_COMMAND_CAMEL_CASE = "isMaster";
    exports.kDecorateResult = /* @__PURE__ */ Symbol.for("@@mdb.decorateDecryptionResult");
    exports.kDecoratedKeys = /* @__PURE__ */ Symbol.for("@@mdb.decryptedKeys");
  })(constants);
  return constants;
}
var read_concern = {};
var hasRequiredRead_concern;
function requireRead_concern() {
  if (hasRequiredRead_concern) return read_concern;
  hasRequiredRead_concern = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ReadConcern = exports.ReadConcernLevel = void 0;
    exports.ReadConcernLevel = Object.freeze({
      local: "local",
      majority: "majority",
      linearizable: "linearizable",
      available: "available",
      snapshot: "snapshot"
    });
    class ReadConcern {
      /** Constructs a ReadConcern from the read concern level.*/
      constructor(level) {
        this.level = exports.ReadConcernLevel[level] ?? level;
      }
      /**
       * Construct a ReadConcern given an options object.
       *
       * @param options - The options object from which to extract the write concern.
       */
      static fromOptions(options) {
        if (options == null) {
          return;
        }
        if (options.readConcern) {
          const { readConcern } = options;
          if (readConcern instanceof ReadConcern) {
            return readConcern;
          } else if (typeof readConcern === "string") {
            return new ReadConcern(readConcern);
          } else if ("level" in readConcern && readConcern.level) {
            return new ReadConcern(readConcern.level);
          }
        }
        if (options.level) {
          return new ReadConcern(options.level);
        }
        return;
      }
      static get MAJORITY() {
        return exports.ReadConcernLevel.majority;
      }
      static get AVAILABLE() {
        return exports.ReadConcernLevel.available;
      }
      static get LINEARIZABLE() {
        return exports.ReadConcernLevel.linearizable;
      }
      static get SNAPSHOT() {
        return exports.ReadConcernLevel.snapshot;
      }
      toJSON() {
        return { level: this.level };
      }
    }
    exports.ReadConcern = ReadConcern;
  })(read_concern);
  return read_concern;
}
var read_preference = {};
var hasRequiredRead_preference;
function requireRead_preference() {
  if (hasRequiredRead_preference) return read_preference;
  hasRequiredRead_preference = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ReadPreference = exports.ReadPreferenceMode = void 0;
    const error_1 = requireError();
    exports.ReadPreferenceMode = Object.freeze({
      primary: "primary",
      primaryPreferred: "primaryPreferred",
      secondary: "secondary",
      secondaryPreferred: "secondaryPreferred",
      nearest: "nearest"
    });
    const _ReadPreference = class _ReadPreference {
      /**
       * @param mode - A string describing the read preference mode (primary|primaryPreferred|secondary|secondaryPreferred|nearest)
       * @param tags - A tag set used to target reads to members with the specified tag(s). tagSet is not available if using read preference mode primary.
       * @param options - Additional read preference options
       */
      constructor(mode, tags, options) {
        if (!_ReadPreference.isValid(mode)) {
          throw new error_1.MongoInvalidArgumentError(`Invalid read preference mode ${JSON.stringify(mode)}`);
        }
        if (options == null && typeof tags === "object" && !Array.isArray(tags)) {
          options = tags;
          tags = void 0;
        } else if (tags && !Array.isArray(tags)) {
          throw new error_1.MongoInvalidArgumentError("ReadPreference tags must be an array");
        }
        this.mode = mode;
        this.tags = tags;
        this.hedge = options?.hedge;
        this.maxStalenessSeconds = void 0;
        options = options ?? {};
        if (options.maxStalenessSeconds != null) {
          if (options.maxStalenessSeconds <= 0) {
            throw new error_1.MongoInvalidArgumentError("maxStalenessSeconds must be a positive integer");
          }
          this.maxStalenessSeconds = options.maxStalenessSeconds;
        }
        if (this.mode === _ReadPreference.PRIMARY) {
          if (this.tags && Array.isArray(this.tags) && this.tags.length > 0) {
            throw new error_1.MongoInvalidArgumentError("Primary read preference cannot be combined with tags");
          }
          if (this.maxStalenessSeconds) {
            throw new error_1.MongoInvalidArgumentError("Primary read preference cannot be combined with maxStalenessSeconds");
          }
          if (this.hedge) {
            throw new error_1.MongoInvalidArgumentError("Primary read preference cannot be combined with hedge");
          }
        }
      }
      // Support the deprecated `preference` property introduced in the porcelain layer
      get preference() {
        return this.mode;
      }
      static fromString(mode) {
        return new _ReadPreference(mode);
      }
      /**
       * Construct a ReadPreference given an options object.
       *
       * @param options - The options object from which to extract the read preference.
       */
      static fromOptions(options) {
        if (!options)
          return;
        const readPreference = options.readPreference ?? options.session?.transaction.options.readPreference;
        const readPreferenceTags = options.readPreferenceTags;
        if (readPreference == null) {
          return;
        }
        if (typeof readPreference === "string") {
          return new _ReadPreference(readPreference, readPreferenceTags, {
            maxStalenessSeconds: options.maxStalenessSeconds,
            hedge: options.hedge
          });
        } else if (!(readPreference instanceof _ReadPreference) && typeof readPreference === "object") {
          const mode = readPreference.mode || readPreference.preference;
          if (mode && typeof mode === "string") {
            return new _ReadPreference(mode, readPreference.tags ?? readPreferenceTags, {
              maxStalenessSeconds: readPreference.maxStalenessSeconds,
              hedge: options.hedge
            });
          }
        }
        if (readPreferenceTags) {
          readPreference.tags = readPreferenceTags;
        }
        return readPreference;
      }
      /**
       * Replaces options.readPreference with a ReadPreference instance
       */
      static translate(options) {
        if (options.readPreference == null)
          return options;
        const r = options.readPreference;
        if (typeof r === "string") {
          options.readPreference = new _ReadPreference(r);
        } else if (r && !(r instanceof _ReadPreference) && typeof r === "object") {
          const mode = r.mode || r.preference;
          if (mode && typeof mode === "string") {
            options.readPreference = new _ReadPreference(mode, r.tags, {
              maxStalenessSeconds: r.maxStalenessSeconds
            });
          }
        } else if (!(r instanceof _ReadPreference)) {
          throw new error_1.MongoInvalidArgumentError(`Invalid read preference: ${r}`);
        }
        return options;
      }
      /**
       * Validate if a mode is legal
       *
       * @param mode - The string representing the read preference mode.
       */
      static isValid(mode) {
        const VALID_MODES = /* @__PURE__ */ new Set([
          _ReadPreference.PRIMARY,
          _ReadPreference.PRIMARY_PREFERRED,
          _ReadPreference.SECONDARY,
          _ReadPreference.SECONDARY_PREFERRED,
          _ReadPreference.NEAREST,
          null
        ]);
        return VALID_MODES.has(mode);
      }
      /**
       * Validate if a mode is legal
       *
       * @param mode - The string representing the read preference mode.
       */
      isValid(mode) {
        return _ReadPreference.isValid(typeof mode === "string" ? mode : this.mode);
      }
      /**
       * Indicates that this readPreference needs the "SecondaryOk" bit when sent over the wire
       * @see https://www.mongodb.com/docs/manual/reference/mongodb-wire-protocol/#op-query
       */
      secondaryOk() {
        const NEEDS_SECONDARYOK = /* @__PURE__ */ new Set([
          _ReadPreference.PRIMARY_PREFERRED,
          _ReadPreference.SECONDARY,
          _ReadPreference.SECONDARY_PREFERRED,
          _ReadPreference.NEAREST
        ]);
        return NEEDS_SECONDARYOK.has(this.mode);
      }
      /**
       * Check if the two ReadPreferences are equivalent
       *
       * @param readPreference - The read preference with which to check equality
       */
      equals(readPreference) {
        return readPreference.mode === this.mode;
      }
      /** Return JSON representation */
      toJSON() {
        const readPreference = { mode: this.mode };
        if (Array.isArray(this.tags))
          readPreference.tags = this.tags;
        if (this.maxStalenessSeconds)
          readPreference.maxStalenessSeconds = this.maxStalenessSeconds;
        if (this.hedge)
          readPreference.hedge = this.hedge;
        return readPreference;
      }
    };
    _ReadPreference.PRIMARY = exports.ReadPreferenceMode.primary;
    _ReadPreference.PRIMARY_PREFERRED = exports.ReadPreferenceMode.primaryPreferred;
    _ReadPreference.SECONDARY = exports.ReadPreferenceMode.secondary;
    _ReadPreference.SECONDARY_PREFERRED = exports.ReadPreferenceMode.secondaryPreferred;
    _ReadPreference.NEAREST = exports.ReadPreferenceMode.nearest;
    _ReadPreference.primary = new _ReadPreference(exports.ReadPreferenceMode.primary);
    _ReadPreference.primaryPreferred = new _ReadPreference(exports.ReadPreferenceMode.primaryPreferred);
    _ReadPreference.secondary = new _ReadPreference(exports.ReadPreferenceMode.secondary);
    _ReadPreference.secondaryPreferred = new _ReadPreference(exports.ReadPreferenceMode.secondaryPreferred);
    _ReadPreference.nearest = new _ReadPreference(exports.ReadPreferenceMode.nearest);
    let ReadPreference = _ReadPreference;
    exports.ReadPreference = ReadPreference;
  })(read_preference);
  return read_preference;
}
var common = {};
var hasRequiredCommon$1;
function requireCommon$1() {
  if (hasRequiredCommon$1) return common;
  hasRequiredCommon$1 = 1;
  Object.defineProperty(common, "__esModule", { value: true });
  common.ServerType = common.TopologyType = common.STATE_CONNECTED = common.STATE_CONNECTING = common.STATE_CLOSED = common.STATE_CLOSING = void 0;
  common._advanceClusterTime = _advanceClusterTime;
  common.STATE_CLOSING = "closing";
  common.STATE_CLOSED = "closed";
  common.STATE_CONNECTING = "connecting";
  common.STATE_CONNECTED = "connected";
  common.TopologyType = Object.freeze({
    Single: "Single",
    ReplicaSetNoPrimary: "ReplicaSetNoPrimary",
    ReplicaSetWithPrimary: "ReplicaSetWithPrimary",
    Sharded: "Sharded",
    Unknown: "Unknown",
    LoadBalanced: "LoadBalanced"
  });
  common.ServerType = Object.freeze({
    Standalone: "Standalone",
    Mongos: "Mongos",
    PossiblePrimary: "PossiblePrimary",
    RSPrimary: "RSPrimary",
    RSSecondary: "RSSecondary",
    RSArbiter: "RSArbiter",
    RSOther: "RSOther",
    RSGhost: "RSGhost",
    Unknown: "Unknown",
    LoadBalancer: "LoadBalancer"
  });
  function _advanceClusterTime(entity, $clusterTime) {
    if (entity.clusterTime == null) {
      entity.clusterTime = $clusterTime;
    } else {
      if ($clusterTime.clusterTime.greaterThan(entity.clusterTime.clusterTime)) {
        entity.clusterTime = $clusterTime;
      }
    }
  }
  return common;
}
var write_concern = {};
var hasRequiredWrite_concern;
function requireWrite_concern() {
  if (hasRequiredWrite_concern) return write_concern;
  hasRequiredWrite_concern = 1;
  Object.defineProperty(write_concern, "__esModule", { value: true });
  write_concern.WriteConcern = write_concern.WRITE_CONCERN_KEYS = void 0;
  write_concern.throwIfWriteConcernError = throwIfWriteConcernError;
  const responses_1 = requireResponses();
  const error_1 = requireError();
  write_concern.WRITE_CONCERN_KEYS = ["w", "wtimeout", "j", "journal", "fsync"];
  class WriteConcern {
    /**
     * Constructs a WriteConcern from the write concern properties.
     * @param w - request acknowledgment that the write operation has propagated to a specified number of mongod instances or to mongod instances with specified tags.
     * @param wtimeoutMS - specify a time limit to prevent write operations from blocking indefinitely
     * @param journal - request acknowledgment that the write operation has been written to the on-disk journal
     * @param fsync - equivalent to the j option. Is deprecated and will be removed in the next major version.
     */
    constructor(w, wtimeoutMS, journal, fsync) {
      if (w != null) {
        if (!Number.isNaN(Number(w))) {
          this.w = Number(w);
        } else {
          this.w = w;
        }
      }
      if (wtimeoutMS != null) {
        this.wtimeoutMS = this.wtimeout = wtimeoutMS;
      }
      if (journal != null) {
        this.journal = this.j = journal;
      }
      if (fsync != null) {
        this.journal = this.j = fsync ? true : false;
      }
    }
    /**
     * Apply a write concern to a command document. Will modify and return the command.
     */
    static apply(command2, writeConcern) {
      const wc = {};
      if (writeConcern.w != null)
        wc.w = writeConcern.w;
      if (writeConcern.wtimeoutMS != null)
        wc.wtimeout = writeConcern.wtimeoutMS;
      if (writeConcern.journal != null)
        wc.j = writeConcern.j;
      command2.writeConcern = wc;
      return command2;
    }
    /** Construct a WriteConcern given an options object. */
    static fromOptions(options, inherit) {
      if (options == null)
        return void 0;
      inherit = inherit ?? {};
      let opts;
      if (typeof options === "string" || typeof options === "number") {
        opts = { w: options };
      } else if (options instanceof WriteConcern) {
        opts = options;
      } else {
        opts = options.writeConcern;
      }
      const parentOpts = inherit instanceof WriteConcern ? inherit : inherit.writeConcern;
      const mergedOpts = { ...parentOpts, ...opts };
      const { w = void 0, wtimeout = void 0, j = void 0, fsync = void 0, journal = void 0, wtimeoutMS = void 0 } = mergedOpts;
      if (w != null || wtimeout != null || wtimeoutMS != null || j != null || journal != null || fsync != null) {
        return new WriteConcern(w, wtimeout ?? wtimeoutMS, j ?? journal, fsync);
      }
      return void 0;
    }
  }
  write_concern.WriteConcern = WriteConcern;
  function throwIfWriteConcernError(response) {
    if (typeof response === "object" && response != null) {
      const writeConcernError = responses_1.MongoDBResponse.is(response) && response.has("writeConcernError") ? response.toObject() : !responses_1.MongoDBResponse.is(response) && "writeConcernError" in response ? response : null;
      if (writeConcernError != null) {
        throw new error_1.MongoWriteConcernError(writeConcernError);
      }
    }
  }
  return write_concern;
}
var hasRequiredUtils;
function requireUtils() {
  if (hasRequiredUtils) return utils;
  hasRequiredUtils = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.kDispose = exports.randomBytes = exports.COSMOS_DB_MSG = exports.DOCUMENT_DB_MSG = exports.COSMOS_DB_CHECK = exports.DOCUMENT_DB_CHECK = exports.MONGODB_WARNING_CODE = exports.DEFAULT_PK_FACTORY = exports.HostAddress = exports.BufferPool = exports.List = exports.MongoDBCollectionNamespace = exports.MongoDBNamespace = void 0;
    exports.isUint8Array = isUint8Array;
    exports.hostMatchesWildcards = hostMatchesWildcards;
    exports.normalizeHintField = normalizeHintField;
    exports.isObject = isObject;
    exports.mergeOptions = mergeOptions;
    exports.filterOptions = filterOptions;
    exports.isPromiseLike = isPromiseLike;
    exports.decorateWithCollation = decorateWithCollation;
    exports.decorateWithReadConcern = decorateWithReadConcern;
    exports.getTopology = getTopology;
    exports.ns = ns;
    exports.makeCounter = makeCounter;
    exports.uuidV4 = uuidV4;
    exports.maxWireVersion = maxWireVersion;
    exports.arrayStrictEqual = arrayStrictEqual;
    exports.errorStrictEqual = errorStrictEqual;
    exports.makeStateMachine = makeStateMachine;
    exports.processTimeMS = processTimeMS;
    exports.calculateDurationInMs = calculateDurationInMs;
    exports.hasAtomicOperators = hasAtomicOperators;
    exports.resolveTimeoutOptions = resolveTimeoutOptions;
    exports.resolveOptions = resolveOptions;
    exports.isSuperset = isSuperset;
    exports.isHello = isHello;
    exports.setDifference = setDifference;
    exports.isRecord = isRecord;
    exports.emitWarning = emitWarning;
    exports.emitWarningOnce = emitWarningOnce;
    exports.enumToString = enumToString;
    exports.supportsRetryableWrites = supportsRetryableWrites;
    exports.shuffle = shuffle;
    exports.commandSupportsReadConcern = commandSupportsReadConcern;
    exports.commandSupportsAfterClusterTime = commandSupportsAfterClusterTime;
    exports.compareObjectId = compareObjectId;
    exports.parseInteger = parseInteger;
    exports.parseUnsignedInteger = parseUnsignedInteger;
    exports.checkParentDomainMatch = checkParentDomainMatch;
    exports.get = get;
    exports.isHostMatch = isHostMatch;
    exports.promiseWithResolvers = promiseWithResolvers;
    exports.squashError = squashError;
    exports.once = once;
    exports.maybeAddIdToDocuments = maybeAddIdToDocuments;
    exports.fileIsAccessible = fileIsAccessible;
    exports.csotMin = csotMin;
    exports.noop = noop;
    exports.decorateDecryptionResult = decorateDecryptionResult;
    exports.addAbortListener = addAbortListener;
    exports.abortable = abortable;
    const fs_1 = require$$0$2;
    const http = require$$1$1;
    const process = require$$0;
    const timers_1 = require$$0$1;
    const bson_1 = requireBson();
    const constants_1 = requireConstants$1();
    const constants_2 = requireConstants();
    const error_1 = requireError();
    const read_concern_1 = requireRead_concern();
    const read_preference_1 = requireRead_preference();
    const common_1 = requireCommon$1();
    const write_concern_1 = requireWrite_concern();
    function isUint8Array(value) {
      return value != null && typeof value === "object" && Symbol.toStringTag in value && value[Symbol.toStringTag] === "Uint8Array";
    }
    function hostMatchesWildcards(host, wildcards) {
      for (const wildcard of wildcards) {
        if (host === wildcard) {
          return true;
        }
        if (wildcard.startsWith("*.")) {
          const suffix = wildcard.substring(2);
          if (host === suffix || host.endsWith(`.${suffix}`)) {
            return true;
          }
        }
        if (wildcard.startsWith("*/")) {
          const suffix = wildcard.substring(2);
          if (host === suffix || host.endsWith(`/${suffix}`)) {
            return true;
          }
        }
      }
      return false;
    }
    function normalizeHintField(hint) {
      let finalHint = void 0;
      if (typeof hint === "string") {
        finalHint = hint;
      } else if (Array.isArray(hint)) {
        finalHint = {};
        hint.forEach((param) => {
          finalHint[param] = 1;
        });
      } else if (hint != null && typeof hint === "object") {
        finalHint = {};
        for (const name in hint) {
          finalHint[name] = hint[name];
        }
      }
      return finalHint;
    }
    const TO_STRING = (object) => Object.prototype.toString.call(object);
    function isObject(arg) {
      return "[object Object]" === TO_STRING(arg);
    }
    function mergeOptions(target, source) {
      return { ...target, ...source };
    }
    function filterOptions(options, names) {
      const filterOptions2 = {};
      for (const name in options) {
        if (names.includes(name)) {
          filterOptions2[name] = options[name];
        }
      }
      return filterOptions2;
    }
    function isPromiseLike(value) {
      return value != null && typeof value === "object" && "then" in value && typeof value.then === "function";
    }
    function decorateWithCollation(command2, options) {
      if (options.collation && typeof options.collation === "object") {
        command2.collation = options.collation;
      }
    }
    function decorateWithReadConcern(command2, coll, options) {
      if (options && options.session && options.session.inTransaction()) {
        return;
      }
      const readConcern = Object.assign({}, command2.readConcern || {});
      if (coll.s.readConcern) {
        Object.assign(readConcern, coll.s.readConcern);
      }
      if (Object.keys(readConcern).length > 0) {
        Object.assign(command2, { readConcern });
      }
    }
    function getTopology(provider) {
      if ("topology" in provider && provider.topology) {
        return provider.topology;
      } else if ("client" in provider && provider.client.topology) {
        return provider.client.topology;
      }
      throw new error_1.MongoNotConnectedError("MongoClient must be connected to perform this operation");
    }
    function ns(ns2) {
      return MongoDBNamespace.fromString(ns2);
    }
    class MongoDBNamespace {
      /**
       * Create a namespace object
       *
       * @param db - database name
       * @param collection - collection name
       */
      constructor(db2, collection2) {
        this.db = db2;
        this.collection = collection2 === "" ? void 0 : collection2;
      }
      toString() {
        return this.collection ? `${this.db}.${this.collection}` : this.db;
      }
      withCollection(collection2) {
        return new MongoDBCollectionNamespace(this.db, collection2);
      }
      static fromString(namespace) {
        if (typeof namespace !== "string" || namespace === "") {
          throw new error_1.MongoRuntimeError(`Cannot parse namespace from "${namespace}"`);
        }
        const [db2, ...collectionParts] = namespace.split(".");
        const collection2 = collectionParts.join(".");
        return new MongoDBNamespace(db2, collection2 === "" ? void 0 : collection2);
      }
    }
    exports.MongoDBNamespace = MongoDBNamespace;
    class MongoDBCollectionNamespace extends MongoDBNamespace {
      constructor(db2, collection2) {
        super(db2, collection2);
        this.collection = collection2;
      }
      static fromString(namespace) {
        return super.fromString(namespace);
      }
    }
    exports.MongoDBCollectionNamespace = MongoDBCollectionNamespace;
    function* makeCounter(seed = 0) {
      let count2 = seed;
      while (true) {
        const newCount = count2;
        count2 += 1;
        yield newCount;
      }
    }
    function uuidV4() {
      const result = crypto.getRandomValues(new Uint8Array(16));
      result[6] = result[6] & 15 | 64;
      result[8] = result[8] & 63 | 128;
      return result;
    }
    function maxWireVersion(handshakeAware) {
      if (handshakeAware) {
        if (handshakeAware.hello) {
          return handshakeAware.hello.maxWireVersion;
        }
        if (handshakeAware.serverApi?.version) {
          return constants_1.MAX_SUPPORTED_WIRE_VERSION;
        }
        if (handshakeAware.loadBalanced) {
          return constants_1.MAX_SUPPORTED_WIRE_VERSION;
        }
        if ("lastHello" in handshakeAware && typeof handshakeAware.lastHello === "function") {
          const lastHello = handshakeAware.lastHello();
          if (lastHello) {
            return lastHello.maxWireVersion;
          }
        }
        if (handshakeAware.description && "maxWireVersion" in handshakeAware.description && handshakeAware.description.maxWireVersion != null) {
          return handshakeAware.description.maxWireVersion;
        }
      }
      return 0;
    }
    function arrayStrictEqual(arr, arr2) {
      if (!Array.isArray(arr) || !Array.isArray(arr2)) {
        return false;
      }
      return arr.length === arr2.length && arr.every((elt, idx) => elt === arr2[idx]);
    }
    function errorStrictEqual(lhs, rhs) {
      if (lhs === rhs) {
        return true;
      }
      if (!lhs || !rhs) {
        return lhs === rhs;
      }
      if (lhs == null && rhs != null || lhs != null && rhs == null) {
        return false;
      }
      if (lhs.constructor.name !== rhs.constructor.name) {
        return false;
      }
      if (lhs.message !== rhs.message) {
        return false;
      }
      return true;
    }
    function makeStateMachine(stateTable) {
      return function stateTransition(target, newState) {
        const legalStates = stateTable[target.s.state];
        if (legalStates && legalStates.indexOf(newState) < 0) {
          throw new error_1.MongoRuntimeError(`illegal state transition from [${target.s.state}] => [${newState}], allowed: [${legalStates}]`);
        }
        target.emit("stateChanged", target.s.state, newState);
        target.s.state = newState;
      };
    }
    function processTimeMS() {
      return Math.floor(performance.now());
    }
    function calculateDurationInMs(started) {
      if (typeof started !== "number") {
        return -1;
      }
      const elapsed = processTimeMS() - started;
      return elapsed < 0 ? 0 : elapsed;
    }
    function hasAtomicOperators(doc, options) {
      if (Array.isArray(doc)) {
        for (const document2 of doc) {
          if (hasAtomicOperators(document2)) {
            return true;
          }
        }
        return false;
      }
      const keys = Object.keys(doc);
      if (options?.ignoreUndefined) {
        let allUndefined = true;
        for (const key of keys) {
          if (doc[key] !== void 0) {
            allUndefined = false;
            break;
          }
        }
        if (allUndefined) {
          throw new error_1.MongoInvalidArgumentError("Update operations require that all atomic operators have defined values, but none were provided.");
        }
      }
      return keys.length > 0 && keys[0][0] === "$";
    }
    function resolveTimeoutOptions(client, options) {
      const { socketTimeoutMS, serverSelectionTimeoutMS, waitQueueTimeoutMS, timeoutMS } = client.s.options;
      return { socketTimeoutMS, serverSelectionTimeoutMS, waitQueueTimeoutMS, timeoutMS, ...options };
    }
    function resolveOptions(parent, options) {
      const result = Object.assign({}, options, (0, bson_1.resolveBSONOptions)(options, parent));
      const timeoutMS = options?.timeoutMS ?? parent?.timeoutMS;
      const session = options?.session;
      if (!session?.inTransaction()) {
        const readConcern = read_concern_1.ReadConcern.fromOptions(options) ?? parent?.readConcern;
        if (readConcern) {
          result.readConcern = readConcern;
        }
        let writeConcern = write_concern_1.WriteConcern.fromOptions(options) ?? parent?.writeConcern;
        if (writeConcern) {
          if (timeoutMS != null) {
            writeConcern = write_concern_1.WriteConcern.fromOptions({
              writeConcern: {
                ...writeConcern,
                wtimeout: void 0,
                wtimeoutMS: void 0
              }
            });
          }
          result.writeConcern = writeConcern;
        }
      }
      result.timeoutMS = timeoutMS;
      const readPreference = read_preference_1.ReadPreference.fromOptions(options) ?? parent?.readPreference;
      if (readPreference) {
        result.readPreference = readPreference;
      }
      const isConvenientTransaction = session?.explicit && session?.timeoutContext != null;
      if (isConvenientTransaction && options?.timeoutMS != null) {
        throw new error_1.MongoInvalidArgumentError("An operation cannot be given a timeoutMS setting when inside a withTransaction call that has a timeoutMS setting");
      }
      return result;
    }
    function isSuperset(set, subset) {
      set = Array.isArray(set) ? new Set(set) : set;
      subset = Array.isArray(subset) ? new Set(subset) : subset;
      for (const elem of subset) {
        if (!set.has(elem)) {
          return false;
        }
      }
      return true;
    }
    function isHello(doc) {
      return doc[constants_2.LEGACY_HELLO_COMMAND] || doc.hello ? true : false;
    }
    function setDifference(setA, setB) {
      const difference = new Set(setA);
      for (const elem of setB) {
        difference.delete(elem);
      }
      return difference;
    }
    const HAS_OWN = (object, prop) => Object.prototype.hasOwnProperty.call(object, prop);
    function isRecord(value, requiredKeys = void 0) {
      if (!isObject(value)) {
        return false;
      }
      const ctor = value.constructor;
      if (ctor && ctor.prototype) {
        if (!isObject(ctor.prototype)) {
          return false;
        }
        if (!HAS_OWN(ctor.prototype, "isPrototypeOf")) {
          return false;
        }
      }
      if (requiredKeys) {
        const keys = Object.keys(value);
        return isSuperset(keys, requiredKeys);
      }
      return true;
    }
    class List {
      get length() {
        return this.count;
      }
      get [Symbol.toStringTag]() {
        return "List";
      }
      constructor() {
        this.count = 0;
        this.head = {
          next: null,
          prev: null,
          value: null
        };
        this.head.next = this.head;
        this.head.prev = this.head;
      }
      toArray() {
        return Array.from(this);
      }
      toString() {
        return `head <=> ${this.toArray().join(" <=> ")} <=> head`;
      }
      *[Symbol.iterator]() {
        for (const node of this.nodes()) {
          yield node.value;
        }
      }
      *nodes() {
        let ptr = this.head.next;
        while (ptr !== this.head) {
          const { next } = ptr;
          yield ptr;
          ptr = next;
        }
      }
      /** Insert at end of list */
      push(value) {
        this.count += 1;
        const newNode = {
          next: this.head,
          prev: this.head.prev,
          value
        };
        this.head.prev.next = newNode;
        this.head.prev = newNode;
      }
      /** Inserts every item inside an iterable instead of the iterable itself */
      pushMany(iterable) {
        for (const value of iterable) {
          this.push(value);
        }
      }
      /** Insert at front of list */
      unshift(value) {
        this.count += 1;
        const newNode = {
          next: this.head.next,
          prev: this.head,
          value
        };
        this.head.next.prev = newNode;
        this.head.next = newNode;
      }
      remove(node) {
        if (node === this.head || this.length === 0) {
          return null;
        }
        this.count -= 1;
        const prevNode = node.prev;
        const nextNode = node.next;
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
        return node.value;
      }
      /** Removes the first node at the front of the list */
      shift() {
        return this.remove(this.head.next);
      }
      /** Removes the last node at the end of the list */
      pop() {
        return this.remove(this.head.prev);
      }
      /** Iterates through the list and removes nodes where filter returns true */
      prune(filter) {
        for (const node of this.nodes()) {
          if (filter(node.value)) {
            this.remove(node);
          }
        }
      }
      clear() {
        this.count = 0;
        this.head.next = this.head;
        this.head.prev = this.head;
      }
      /** Returns the first item in the list, does not remove */
      first() {
        return this.head.next.value;
      }
      /** Returns the last item in the list, does not remove */
      last() {
        return this.head.prev.value;
      }
    }
    exports.List = List;
    class BufferPool {
      constructor() {
        this.buffers = new List();
        this.totalByteLength = 0;
      }
      get length() {
        return this.totalByteLength;
      }
      /** Adds a buffer to the internal buffer pool list */
      append(buffer) {
        this.buffers.push(buffer);
        this.totalByteLength += buffer.length;
      }
      /**
       * If BufferPool contains 4 bytes or more construct an int32 from the leading bytes,
       * otherwise return null. Size can be negative, caller should error check.
       */
      getInt32() {
        if (this.totalByteLength < 4) {
          return null;
        }
        const firstBuffer = this.buffers.first();
        if (firstBuffer != null && firstBuffer.byteLength >= 4) {
          return bson_1.NumberUtils.getInt32LE(firstBuffer, 0);
        }
        const top4Bytes = this.read(4);
        const value = bson_1.NumberUtils.getInt32LE(top4Bytes, 0);
        this.totalByteLength += 4;
        this.buffers.unshift(top4Bytes);
        return value;
      }
      /** Reads the requested number of bytes, optionally consuming them */
      read(size) {
        if (typeof size !== "number" || size < 0) {
          throw new error_1.MongoInvalidArgumentError('Argument "size" must be a non-negative number');
        }
        if (size > this.totalByteLength) {
          return bson_1.ByteUtils.allocate(0);
        }
        const result = bson_1.ByteUtils.allocateUnsafe(size);
        for (let bytesRead = 0; bytesRead < size; ) {
          const buffer = this.buffers.shift();
          if (buffer == null) {
            break;
          }
          const bytesRemaining = size - bytesRead;
          const bytesReadable = Math.min(bytesRemaining, buffer.byteLength);
          const bytes = buffer.subarray(0, bytesReadable);
          result.set(bytes, bytesRead);
          bytesRead += bytesReadable;
          this.totalByteLength -= bytesReadable;
          if (bytesReadable < buffer.byteLength) {
            this.buffers.unshift(buffer.subarray(bytesReadable));
          }
        }
        return result;
      }
    }
    exports.BufferPool = BufferPool;
    class HostAddress {
      constructor(hostString) {
        this.host = void 0;
        this.port = void 0;
        this.socketPath = void 0;
        this.isIPv6 = false;
        const escapedHost = hostString.split(" ").join("%20");
        if (escapedHost.endsWith(".sock")) {
          this.socketPath = decodeURIComponent(escapedHost);
          return;
        }
        const urlString = `iLoveJS://${escapedHost}`;
        let url;
        try {
          url = new URL(urlString);
        } catch (urlError) {
          const runtimeError = new error_1.MongoRuntimeError(`Unable to parse ${escapedHost} with URL`);
          runtimeError.cause = urlError;
          throw runtimeError;
        }
        const hostname = url.hostname;
        const port = url.port;
        let normalized = decodeURIComponent(hostname).toLowerCase();
        if (normalized.startsWith("[") && normalized.endsWith("]")) {
          this.isIPv6 = true;
          normalized = normalized.substring(1, hostname.length - 1);
        }
        this.host = normalized.toLowerCase();
        if (typeof port === "number") {
          this.port = port;
        } else if (typeof port === "string" && port !== "") {
          this.port = Number.parseInt(port, 10);
        } else {
          this.port = 27017;
        }
        if (this.port === 0) {
          throw new error_1.MongoParseError("Invalid port (zero) with hostname");
        }
        Object.freeze(this);
      }
      [/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")]() {
        return this.inspect();
      }
      inspect() {
        return `new HostAddress('${this.toString()}')`;
      }
      toString() {
        if (typeof this.host === "string") {
          if (this.isIPv6) {
            return `[${this.host}]:${this.port}`;
          }
          return `${this.host}:${this.port}`;
        }
        return `${this.socketPath}`;
      }
      static fromString(s) {
        return new HostAddress(s);
      }
      static fromHostPort(host, port) {
        if (host.includes(":")) {
          host = `[${host}]`;
        }
        return HostAddress.fromString(`${host}:${port}`);
      }
      static fromSrvRecord({ name, port }) {
        return HostAddress.fromHostPort(name, port);
      }
      toHostPort() {
        if (this.socketPath) {
          return { host: this.socketPath, port: 0 };
        }
        const host = this.host ?? "";
        const port = this.port ?? 0;
        return { host, port };
      }
    }
    exports.HostAddress = HostAddress;
    exports.DEFAULT_PK_FACTORY = {
      // We prefer not to rely on ObjectId having a createPk method
      createPk() {
        return new bson_1.ObjectId();
      }
    };
    exports.MONGODB_WARNING_CODE = "MONGODB DRIVER";
    function emitWarning(message) {
      return process.emitWarning(message, { code: exports.MONGODB_WARNING_CODE });
    }
    const emittedWarnings = /* @__PURE__ */ new Set();
    function emitWarningOnce(message) {
      if (!emittedWarnings.has(message)) {
        emittedWarnings.add(message);
        return emitWarning(message);
      }
    }
    function enumToString(en) {
      return Object.values(en).join(", ");
    }
    function supportsRetryableWrites(server2) {
      if (!server2) {
        return false;
      }
      if (server2.loadBalanced) {
        return true;
      }
      if (server2.description.logicalSessionTimeoutMinutes != null) {
        if (server2.description.type !== common_1.ServerType.Standalone) {
          return true;
        }
      }
      return false;
    }
    function shuffle(sequence, limit = 0) {
      const items = Array.from(sequence);
      if (limit > items.length) {
        throw new error_1.MongoRuntimeError("Limit must be less than the number of items");
      }
      let remainingItemsToShuffle = items.length;
      const lowerBound = limit % items.length === 0 ? 1 : items.length - limit;
      while (remainingItemsToShuffle > lowerBound) {
        const randomIndex = Math.floor(Math.random() * remainingItemsToShuffle);
        remainingItemsToShuffle -= 1;
        const swapHold = items[remainingItemsToShuffle];
        items[remainingItemsToShuffle] = items[randomIndex];
        items[randomIndex] = swapHold;
      }
      return limit % items.length === 0 ? items : items.slice(lowerBound);
    }
    function commandSupportsReadConcern(command2) {
      if (command2.aggregate || command2.count || command2.distinct || command2.find || command2.geoNear) {
        return true;
      }
      return false;
    }
    function commandSupportsAfterClusterTime(command2) {
      if (command2.aggregate || command2.count || command2.distinct || command2.find || command2.geoNear) {
        return true;
      }
      if (command2.bulkWrite || command2.create || command2.createIndexes || command2.delete || command2.drop || command2.dropDatabase || command2.dropIndexes || command2.findAndModify || command2.insert || command2.update) {
        return true;
      }
      return false;
    }
    function compareObjectId(oid1, oid2) {
      if (oid1 == null && oid2 == null) {
        return 0;
      }
      if (oid1 == null) {
        return -1;
      }
      if (oid2 == null) {
        return 1;
      }
      return bson_1.ByteUtils.compare(oid1.id, oid2.id);
    }
    function parseInteger(value) {
      if (typeof value === "number")
        return Math.trunc(value);
      const parsedValue = Number.parseInt(String(value), 10);
      return Number.isNaN(parsedValue) ? null : parsedValue;
    }
    function parseUnsignedInteger(value) {
      const parsedInt = parseInteger(value);
      return parsedInt != null && parsedInt >= 0 ? parsedInt : null;
    }
    function checkParentDomainMatch(address, srvHost) {
      const normalizedAddress = address.endsWith(".") ? address.slice(0, address.length - 1) : address;
      const normalizedSrvHost = srvHost.endsWith(".") ? srvHost.slice(0, srvHost.length - 1) : srvHost;
      const allCharacterBeforeFirstDot = /^.*?\./;
      const srvIsLessThanThreeParts = normalizedSrvHost.split(".").length < 3;
      const addressDomain = `.${normalizedAddress.replace(allCharacterBeforeFirstDot, "")}`;
      let srvHostDomain = srvIsLessThanThreeParts ? normalizedSrvHost : `.${normalizedSrvHost.replace(allCharacterBeforeFirstDot, "")}`;
      if (!srvHostDomain.startsWith(".")) {
        srvHostDomain = "." + srvHostDomain;
      }
      if (srvIsLessThanThreeParts && normalizedAddress.split(".").length <= normalizedSrvHost.split(".").length) {
        throw new error_1.MongoAPIError("Server record does not have at least one more domain level than parent URI");
      }
      if (!addressDomain.endsWith(srvHostDomain)) {
        throw new error_1.MongoAPIError("Server record does not share hostname with parent URI");
      }
    }
    function get(url, options = {}) {
      return new Promise((resolve, reject) => {
        let timeoutId;
        const request = http.get(url, options, (response) => {
          response.setEncoding("utf8");
          let body = "";
          response.on("data", (chunk) => body += chunk);
          response.on("end", () => {
            (0, timers_1.clearTimeout)(timeoutId);
            resolve({ status: response.statusCode, body });
          });
        }).on("error", (error2) => {
          (0, timers_1.clearTimeout)(timeoutId);
          reject(error2);
        }).end();
        timeoutId = (0, timers_1.setTimeout)(() => {
          request.destroy(new error_1.MongoNetworkTimeoutError(`request timed out after 10 seconds`));
        }, 1e4);
      });
    }
    exports.DOCUMENT_DB_CHECK = /(\.docdb\.amazonaws\.com$)|(\.docdb-elastic\.amazonaws\.com$)/;
    exports.COSMOS_DB_CHECK = /\.cosmos\.azure\.com$/;
    exports.DOCUMENT_DB_MSG = "You appear to be connected to a DocumentDB cluster. For more information regarding feature compatibility and support please visit https://www.mongodb.com/supportability/documentdb";
    exports.COSMOS_DB_MSG = "You appear to be connected to a CosmosDB cluster. For more information regarding feature compatibility and support please visit https://www.mongodb.com/supportability/cosmosdb";
    function isHostMatch(match, host) {
      return host && match.test(host.toLowerCase()) ? true : false;
    }
    function promiseWithResolvers() {
      let resolve;
      let reject;
      const promise = new Promise(function withResolversExecutor(promiseResolve, promiseReject) {
        resolve = promiseResolve;
        reject = promiseReject;
      });
      return { promise, resolve, reject };
    }
    function squashError(_error) {
      return;
    }
    const randomBytes = (size) => {
      return Promise.resolve(crypto.getRandomValues(new Uint8Array(size)));
    };
    exports.randomBytes = randomBytes;
    async function once(ee, name, options) {
      options?.signal?.throwIfAborted();
      const { promise, resolve, reject } = promiseWithResolvers();
      const onEvent = (data) => resolve(data);
      const onError = (error2) => reject(error2);
      const abortListener = addAbortListener(options?.signal, function() {
        reject(this.reason);
      });
      ee.once(name, onEvent).once("error", onError);
      try {
        return await promise;
      } finally {
        ee.off(name, onEvent);
        ee.off("error", onError);
        abortListener?.[exports.kDispose]();
      }
    }
    function maybeAddIdToDocuments(collection2, document2, options) {
      const forceServerObjectId = options.forceServerObjectId ?? collection2.db.options?.forceServerObjectId ?? false;
      if (forceServerObjectId) {
        return document2;
      }
      if (document2._id == null) {
        document2._id = collection2.s.pkFactory.createPk();
      }
      return document2;
    }
    async function fileIsAccessible(fileName, mode) {
      try {
        await fs_1.promises.access(fileName, mode);
        return true;
      } catch {
        return false;
      }
    }
    function csotMin(duration1, duration2) {
      if (duration1 === 0)
        return duration2;
      if (duration2 === 0)
        return duration1;
      return Math.min(duration1, duration2);
    }
    function noop() {
      return;
    }
    function decorateDecryptionResult(decrypted, original, isTopLevelDecorateCall = true) {
      if (isTopLevelDecorateCall) {
        if (bson_1.ByteUtils.isUint8Array(original)) {
          original = (0, bson_1.deserialize)(original);
        }
        if (bson_1.ByteUtils.isUint8Array(decrypted)) {
          throw new error_1.MongoRuntimeError("Expected result of decryption to be deserialized BSON object");
        }
      }
      if (!decrypted || typeof decrypted !== "object")
        return;
      for (const k of Object.keys(decrypted)) {
        const originalValue = original[k];
        if (originalValue && originalValue._bsontype === "Binary" && originalValue.sub_type === 6) {
          if (!decrypted[constants_2.kDecoratedKeys]) {
            Object.defineProperty(decrypted, constants_2.kDecoratedKeys, {
              value: [],
              configurable: true,
              enumerable: false,
              writable: false
            });
          }
          decrypted[constants_2.kDecoratedKeys].push(k);
          continue;
        }
        decorateDecryptionResult(decrypted[k], originalValue, false);
      }
    }
    exports.kDispose = Symbol.dispose ?? /* @__PURE__ */ Symbol("dispose");
    function addAbortListener(signal, listener) {
      if (signal == null)
        return;
      signal.addEventListener("abort", listener, { once: true });
      return { [exports.kDispose]: () => signal.removeEventListener("abort", listener) };
    }
    async function abortable(promise, { signal }) {
      if (signal == null) {
        return await promise;
      }
      const { promise: aborted, reject } = promiseWithResolvers();
      const abortListener = signal.aborted ? reject(signal.reason) : addAbortListener(signal, function() {
        reject(this.reason);
      });
      try {
        return await Promise.race([promise, aborted]);
      } finally {
        abortListener?.[exports.kDispose]();
      }
    }
  })(utils);
  return utils;
}
var document = {};
var hasRequiredDocument;
function requireDocument() {
  if (hasRequiredDocument) return document;
  hasRequiredDocument = 1;
  Object.defineProperty(document, "__esModule", { value: true });
  document.OnDemandDocument = void 0;
  const bson_1 = requireBson();
  const BSONElementOffset = {
    type: 0,
    nameOffset: 1,
    nameLength: 2,
    offset: 3,
    length: 4
  };
  class OnDemandDocument {
    constructor(bson2, offset = 0, isArray = false, elements) {
      this.cache = /* @__PURE__ */ Object.create(null);
      this.indexFound = /* @__PURE__ */ Object.create(null);
      this.bson = bson2;
      this.offset = offset;
      this.isArray = isArray;
      this.elements = elements ?? (0, bson_1.parseToElementsToArray)(this.bson, offset);
    }
    /** Only supports basic latin strings */
    isElementName(name, element) {
      const nameLength = element[BSONElementOffset.nameLength];
      const nameOffset = element[BSONElementOffset.nameOffset];
      if (name.length !== nameLength)
        return false;
      const nameEnd = nameOffset + nameLength;
      for (let byteIndex = nameOffset, charIndex = 0; charIndex < name.length && byteIndex < nameEnd; charIndex++, byteIndex++) {
        if (this.bson[byteIndex] !== name.charCodeAt(charIndex))
          return false;
      }
      return true;
    }
    /**
     * Seeks into the elements array for an element matching the given name.
     *
     * @remarks
     * Caching:
     * - Caches the existence of a property making subsequent look ups for non-existent properties return immediately
     * - Caches names mapped to elements to avoid reiterating the array and comparing the name again
     * - Caches the index at which an element has been found to prevent rechecking against elements already determined to belong to another name
     *
     * @param name - a basic latin string name of a BSON element
     * @returns
     */
    getElement(name) {
      const cachedElement = this.cache[name];
      if (cachedElement === false)
        return null;
      if (cachedElement != null) {
        return cachedElement;
      }
      if (typeof name === "number") {
        if (this.isArray) {
          if (name < this.elements.length) {
            const element = this.elements[name];
            const cachedElement2 = { element, value: void 0 };
            this.cache[name] = cachedElement2;
            this.indexFound[name] = true;
            return cachedElement2;
          } else {
            return null;
          }
        } else {
          return null;
        }
      }
      for (let index = 0; index < this.elements.length; index++) {
        const element = this.elements[index];
        if (!(index in this.indexFound) && this.isElementName(name, element)) {
          const cachedElement2 = { element, value: void 0 };
          this.cache[name] = cachedElement2;
          this.indexFound[index] = true;
          return cachedElement2;
        }
      }
      this.cache[name] = false;
      return null;
    }
    toJSValue(element, as) {
      const type = element[BSONElementOffset.type];
      const offset = element[BSONElementOffset.offset];
      const length = element[BSONElementOffset.length];
      if (as !== type) {
        return null;
      }
      switch (as) {
        case bson_1.BSONType.null:
        case bson_1.BSONType.undefined:
          return null;
        case bson_1.BSONType.double:
          return bson_1.NumberUtils.getFloat64LE(this.bson, offset);
        case bson_1.BSONType.int:
          return bson_1.NumberUtils.getInt32LE(this.bson, offset);
        case bson_1.BSONType.long:
          return bson_1.NumberUtils.getBigInt64LE(this.bson, offset);
        case bson_1.BSONType.bool:
          return Boolean(this.bson[offset]);
        case bson_1.BSONType.objectId:
          return new bson_1.ObjectId(this.bson.subarray(offset, offset + 12));
        case bson_1.BSONType.timestamp:
          return new bson_1.Timestamp(bson_1.NumberUtils.getBigInt64LE(this.bson, offset));
        case bson_1.BSONType.string:
          return bson_1.ByteUtils.toUTF8(this.bson, offset + 4, offset + length - 1, false);
        case bson_1.BSONType.binData: {
          const totalBinarySize = bson_1.NumberUtils.getInt32LE(this.bson, offset);
          const subType = this.bson[offset + 4];
          if (subType === 2) {
            const subType2BinarySize = bson_1.NumberUtils.getInt32LE(this.bson, offset + 1 + 4);
            if (subType2BinarySize < 0)
              throw new bson_1.BSONError("Negative binary type element size found for subtype 0x02");
            if (subType2BinarySize > totalBinarySize - 4)
              throw new bson_1.BSONError("Binary type with subtype 0x02 contains too long binary size");
            if (subType2BinarySize < totalBinarySize - 4)
              throw new bson_1.BSONError("Binary type with subtype 0x02 contains too short binary size");
            return new bson_1.Binary(this.bson.subarray(offset + 1 + 4 + 4, offset + 1 + 4 + 4 + subType2BinarySize), 2);
          }
          return new bson_1.Binary(this.bson.subarray(offset + 1 + 4, offset + 1 + 4 + totalBinarySize), subType);
        }
        case bson_1.BSONType.date:
          return new Date(Number(bson_1.NumberUtils.getBigInt64LE(this.bson, offset)));
        case bson_1.BSONType.object:
          return new OnDemandDocument(this.bson, offset);
        case bson_1.BSONType.array:
          return new OnDemandDocument(this.bson, offset, true);
        default:
          throw new bson_1.BSONError(`Unsupported BSON type: ${as}`);
      }
    }
    /**
     * Returns the number of elements in this BSON document
     */
    size() {
      return this.elements.length;
    }
    /**
     * Checks for the existence of an element by name.
     *
     * @remarks
     * Uses `getElement` with the expectation that will populate caches such that a `has` call
     * followed by a `getElement` call will not repeat the cost paid by the first look up.
     *
     * @param name - element name
     */
    has(name) {
      const cachedElement = this.cache[name];
      if (cachedElement === false)
        return false;
      if (cachedElement != null)
        return true;
      return this.getElement(name) != null;
    }
    get(name, as, required) {
      const element = this.getElement(name);
      if (element == null) {
        if (required === true) {
          throw new bson_1.BSONError(`BSON element "${name}" is missing`);
        } else {
          return null;
        }
      }
      if (element.value == null) {
        const value = this.toJSValue(element.element, as);
        if (value == null) {
          if (required === true) {
            throw new bson_1.BSONError(`BSON element "${name}" is missing`);
          } else {
            return null;
          }
        }
        element.value = value;
      }
      return element.value;
    }
    getNumber(name, required) {
      const maybeBool = this.get(name, bson_1.BSONType.bool);
      const bool = maybeBool == null ? null : maybeBool ? 1 : 0;
      const maybeLong = this.get(name, bson_1.BSONType.long);
      const long = maybeLong == null ? null : Number(maybeLong);
      const result = bool ?? long ?? this.get(name, bson_1.BSONType.int) ?? this.get(name, bson_1.BSONType.double);
      if (required === true && result == null) {
        throw new bson_1.BSONError(`BSON element "${name}" is missing`);
      }
      return result;
    }
    /**
     * Deserialize this object, DOES NOT cache result so avoid multiple invocations
     * @param options - BSON deserialization options
     */
    toObject(options) {
      return (0, bson_1.deserialize)(this.bson, {
        ...options,
        index: this.offset,
        allowObjectSmallerThanBufferSize: true
      });
    }
    /** Returns this document's bytes only */
    toBytes() {
      const size = bson_1.NumberUtils.getInt32LE(this.bson, this.offset);
      return this.bson.subarray(this.offset, this.offset + size);
    }
  }
  document.OnDemandDocument = OnDemandDocument;
  return document;
}
var hasRequiredResponses;
function requireResponses() {
  if (hasRequiredResponses) return responses;
  hasRequiredResponses = 1;
  Object.defineProperty(responses, "__esModule", { value: true });
  responses.ClientBulkWriteCursorResponse = responses.ExplainedCursorResponse = responses.CursorResponse = responses.MongoDBResponse = void 0;
  responses.isErrorResponse = isErrorResponse;
  const bson_1 = requireBson();
  const error_1 = requireError();
  const utils_1 = requireUtils();
  const document_1 = requireDocument();
  const BSONElementOffset = {
    nameOffset: 1,
    nameLength: 2,
    offset: 3,
    length: 4
  };
  function isErrorResponse(bson2, elements) {
    for (let eIdx = 0; eIdx < elements.length; eIdx++) {
      const element = elements[eIdx];
      if (element[BSONElementOffset.nameLength] === 2) {
        const nameOffset = element[BSONElementOffset.nameOffset];
        if (bson2[nameOffset] === 111 && bson2[nameOffset + 1] === 107) {
          const valueOffset = element[BSONElementOffset.offset];
          const valueLength = element[BSONElementOffset.length];
          for (let i = valueOffset; i < valueOffset + valueLength; i++) {
            if (bson2[i] !== 0)
              return false;
          }
          return true;
        }
      }
    }
    return true;
  }
  const _MongoDBResponse = class _MongoDBResponse extends document_1.OnDemandDocument {
    get(name, as, required) {
      try {
        return super.get(name, as, required);
      } catch (cause) {
        throw new error_1.MongoUnexpectedServerResponseError(cause.message, { cause });
      }
    }
    static is(value) {
      return value instanceof _MongoDBResponse;
    }
    static make(bson2) {
      const elements = (0, bson_1.parseToElementsToArray)(bson2, 0);
      const isError = isErrorResponse(bson2, elements);
      return isError ? new _MongoDBResponse(bson2, 0, false, elements) : new this(bson2, 0, false, elements);
    }
    /**
     * Returns true iff:
     * - ok is 0 and the top-level code === 50
     * - ok is 1 and the writeErrors array contains a code === 50
     * - ok is 1 and the writeConcern object contains a code === 50
     */
    get isMaxTimeExpiredError() {
      const isTopLevel = this.ok === 0 && this.code === error_1.MONGODB_ERROR_CODES.MaxTimeMSExpired;
      if (isTopLevel)
        return true;
      if (this.ok === 0)
        return false;
      const isWriteConcern = this.get("writeConcernError", bson_1.BSONType.object)?.getNumber("code") === error_1.MONGODB_ERROR_CODES.MaxTimeMSExpired;
      if (isWriteConcern)
        return true;
      const writeErrors = this.get("writeErrors", bson_1.BSONType.array);
      if (writeErrors?.size()) {
        for (let i = 0; i < writeErrors.size(); i++) {
          const isWriteError = writeErrors.get(i, bson_1.BSONType.object)?.getNumber("code") === error_1.MONGODB_ERROR_CODES.MaxTimeMSExpired;
          if (isWriteError)
            return true;
        }
      }
      return false;
    }
    /**
     * Drivers can safely assume that the `recoveryToken` field is always a BSON document but drivers MUST NOT modify the
     * contents of the document.
     */
    get recoveryToken() {
      return this.get("recoveryToken", bson_1.BSONType.object)?.toObject({
        promoteValues: false,
        promoteLongs: false,
        promoteBuffers: false,
        validation: { utf8: true }
      }) ?? null;
    }
    /**
     * The server creates a cursor in response to a snapshot find/aggregate command and reports atClusterTime within the cursor field in the response.
     * For the distinct command the server adds a top-level atClusterTime field to the response.
     * The atClusterTime field represents the timestamp of the read and is guaranteed to be majority committed.
     */
    get atClusterTime() {
      return this.get("cursor", bson_1.BSONType.object)?.get("atClusterTime", bson_1.BSONType.timestamp) ?? this.get("atClusterTime", bson_1.BSONType.timestamp);
    }
    get operationTime() {
      return this.get("operationTime", bson_1.BSONType.timestamp);
    }
    /** Normalizes whatever BSON value is "ok" to a JS number 1 or 0. */
    get ok() {
      return this.getNumber("ok") ? 1 : 0;
    }
    get $err() {
      return this.get("$err", bson_1.BSONType.string);
    }
    get errmsg() {
      return this.get("errmsg", bson_1.BSONType.string);
    }
    get code() {
      return this.getNumber("code");
    }
    get $clusterTime() {
      if (!("clusterTime" in this)) {
        const clusterTimeDoc = this.get("$clusterTime", bson_1.BSONType.object);
        if (clusterTimeDoc == null) {
          this.clusterTime = null;
          return null;
        }
        const clusterTime = clusterTimeDoc.get("clusterTime", bson_1.BSONType.timestamp, true);
        const signature = clusterTimeDoc.get("signature", bson_1.BSONType.object)?.toObject();
        this.clusterTime = { clusterTime, signature };
      }
      return this.clusterTime ?? null;
    }
    toObject(options) {
      const exactBSONOptions = {
        ...(0, bson_1.pluckBSONSerializeOptions)(options ?? {}),
        validation: (0, bson_1.parseUtf8ValidationOption)(options)
      };
      return super.toObject(exactBSONOptions);
    }
  };
  _MongoDBResponse.empty = new _MongoDBResponse(new Uint8Array([13, 0, 0, 0, 16, 111, 107, 0, 1, 0, 0, 0, 0]));
  let MongoDBResponse = _MongoDBResponse;
  responses.MongoDBResponse = MongoDBResponse;
  class CursorResponse extends MongoDBResponse {
    constructor() {
      super(...arguments);
      this._batch = null;
      this.iterated = 0;
      this._encryptedBatch = null;
    }
    /**
     * This supports a feature of the FindCursor.
     * It is an optimization to avoid an extra getMore when the limit has been reached
     */
    static get emptyGetMore() {
      return new CursorResponse((0, bson_1.serialize)({ ok: 1, cursor: { id: 0n, nextBatch: [] } }));
    }
    static is(value) {
      return value instanceof CursorResponse || value === CursorResponse.emptyGetMore;
    }
    get cursor() {
      return this.get("cursor", bson_1.BSONType.object, true);
    }
    get id() {
      try {
        return bson_1.Long.fromBigInt(this.cursor.get("id", bson_1.BSONType.long, true));
      } catch (cause) {
        throw new error_1.MongoUnexpectedServerResponseError(cause.message, { cause });
      }
    }
    get ns() {
      const namespace = this.cursor.get("ns", bson_1.BSONType.string);
      if (namespace != null)
        return (0, utils_1.ns)(namespace);
      return null;
    }
    get length() {
      return Math.max(this.batchSize - this.iterated, 0);
    }
    get encryptedBatch() {
      if (this.encryptedResponse == null)
        return null;
      if (this._encryptedBatch != null)
        return this._encryptedBatch;
      const cursor = this.encryptedResponse?.get("cursor", bson_1.BSONType.object);
      if (cursor?.has("firstBatch"))
        this._encryptedBatch = cursor.get("firstBatch", bson_1.BSONType.array, true);
      else if (cursor?.has("nextBatch"))
        this._encryptedBatch = cursor.get("nextBatch", bson_1.BSONType.array, true);
      else
        throw new error_1.MongoUnexpectedServerResponseError("Cursor document did not contain a batch");
      return this._encryptedBatch;
    }
    get batch() {
      if (this._batch != null)
        return this._batch;
      const cursor = this.cursor;
      if (cursor.has("firstBatch"))
        this._batch = cursor.get("firstBatch", bson_1.BSONType.array, true);
      else if (cursor.has("nextBatch"))
        this._batch = cursor.get("nextBatch", bson_1.BSONType.array, true);
      else
        throw new error_1.MongoUnexpectedServerResponseError("Cursor document did not contain a batch");
      return this._batch;
    }
    get batchSize() {
      return this.batch?.size();
    }
    get postBatchResumeToken() {
      return this.cursor.get("postBatchResumeToken", bson_1.BSONType.object)?.toObject({
        promoteValues: false,
        promoteLongs: false,
        promoteBuffers: false,
        validation: { utf8: true }
      }) ?? null;
    }
    shift(options) {
      if (this.iterated >= this.batchSize) {
        return null;
      }
      const result = this.batch.get(this.iterated, bson_1.BSONType.object, true) ?? null;
      const encryptedResult = this.encryptedBatch?.get(this.iterated, bson_1.BSONType.object, true) ?? null;
      this.iterated += 1;
      if (options?.raw) {
        return result.toBytes();
      } else {
        const object = result.toObject(options);
        if (encryptedResult) {
          (0, utils_1.decorateDecryptionResult)(object, encryptedResult.toObject(options), true);
        }
        return object;
      }
    }
    clear() {
      this.iterated = this.batchSize;
    }
  }
  responses.CursorResponse = CursorResponse;
  class ExplainedCursorResponse extends CursorResponse {
    constructor() {
      super(...arguments);
      this.isExplain = true;
      this._length = 1;
    }
    get id() {
      return bson_1.Long.fromBigInt(0n);
    }
    get batchSize() {
      return 0;
    }
    get ns() {
      return null;
    }
    get length() {
      return this._length;
    }
    shift(options) {
      if (this._length === 0)
        return null;
      this._length -= 1;
      return this.toObject(options);
    }
  }
  responses.ExplainedCursorResponse = ExplainedCursorResponse;
  class ClientBulkWriteCursorResponse extends CursorResponse {
    get insertedCount() {
      return this.get("nInserted", bson_1.BSONType.int, true);
    }
    get upsertedCount() {
      return this.get("nUpserted", bson_1.BSONType.int, true);
    }
    get matchedCount() {
      return this.get("nMatched", bson_1.BSONType.int, true);
    }
    get modifiedCount() {
      return this.get("nModified", bson_1.BSONType.int, true);
    }
    get deletedCount() {
      return this.get("nDeleted", bson_1.BSONType.int, true);
    }
    get writeConcernError() {
      return this.get("writeConcernError", bson_1.BSONType.object, false);
    }
  }
  responses.ClientBulkWriteCursorResponse = ClientBulkWriteCursorResponse;
  return responses;
}
var command = {};
var explain = {};
var hasRequiredExplain;
function requireExplain() {
  if (hasRequiredExplain) return explain;
  hasRequiredExplain = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Explain = exports.ExplainVerbosity = void 0;
    exports.validateExplainTimeoutOptions = validateExplainTimeoutOptions;
    exports.decorateWithExplain = decorateWithExplain;
    const error_1 = requireError();
    exports.ExplainVerbosity = Object.freeze({
      queryPlanner: "queryPlanner",
      queryPlannerExtended: "queryPlannerExtended",
      executionStats: "executionStats",
      allPlansExecution: "allPlansExecution"
    });
    class Explain {
      constructor(verbosity, maxTimeMS) {
        if (typeof verbosity === "boolean") {
          this.verbosity = verbosity ? exports.ExplainVerbosity.allPlansExecution : exports.ExplainVerbosity.queryPlanner;
        } else {
          this.verbosity = verbosity;
        }
        this.maxTimeMS = maxTimeMS;
      }
      static fromOptions({ explain: explain2 } = {}) {
        if (explain2 == null)
          return;
        if (typeof explain2 === "boolean" || typeof explain2 === "string") {
          return new Explain(explain2);
        }
        const { verbosity, maxTimeMS } = explain2;
        return new Explain(verbosity, maxTimeMS);
      }
    }
    exports.Explain = Explain;
    function validateExplainTimeoutOptions(options, explain2) {
      const { maxTimeMS, timeoutMS } = options;
      if (timeoutMS != null && (maxTimeMS != null || explain2?.maxTimeMS != null)) {
        throw new error_1.MongoAPIError("Cannot use maxTimeMS with timeoutMS for explain commands.");
      }
    }
    function decorateWithExplain(command2, explain2) {
      const { verbosity, maxTimeMS } = explain2;
      const baseCommand = { explain: command2, verbosity };
      if (typeof maxTimeMS === "number") {
        baseCommand.maxTimeMS = maxTimeMS;
      }
      return baseCommand;
    }
  })(explain);
  return explain;
}
var operation = {};
var hasRequiredOperation;
function requireOperation() {
  if (hasRequiredOperation) return operation;
  hasRequiredOperation = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AbstractOperation = exports.Aspect = void 0;
    exports.defineAspects = defineAspects;
    const bson_1 = requireBson();
    const read_preference_1 = requireRead_preference();
    exports.Aspect = {
      READ_OPERATION: /* @__PURE__ */ Symbol("READ_OPERATION"),
      WRITE_OPERATION: /* @__PURE__ */ Symbol("WRITE_OPERATION"),
      RETRYABLE: /* @__PURE__ */ Symbol("RETRYABLE"),
      EXPLAINABLE: /* @__PURE__ */ Symbol("EXPLAINABLE"),
      SKIP_COLLATION: /* @__PURE__ */ Symbol("SKIP_COLLATION"),
      CURSOR_CREATING: /* @__PURE__ */ Symbol("CURSOR_CREATING"),
      MUST_SELECT_SAME_SERVER: /* @__PURE__ */ Symbol("MUST_SELECT_SAME_SERVER"),
      COMMAND_BATCHING: /* @__PURE__ */ Symbol("COMMAND_BATCHING"),
      SUPPORTS_RAW_DATA: /* @__PURE__ */ Symbol("SUPPORTS_RAW_DATA")
    };
    class AbstractOperation {
      constructor(options = {}) {
        this.readPreference = this.hasAspect(exports.Aspect.WRITE_OPERATION) ? read_preference_1.ReadPreference.primary : read_preference_1.ReadPreference.fromOptions(options) ?? read_preference_1.ReadPreference.primary;
        this.bsonOptions = (0, bson_1.resolveBSONOptions)(options);
        this._session = options.session != null ? options.session : void 0;
        this.options = options;
        this.bypassPinningCheck = !!options.bypassPinningCheck;
        this.attemptsMade = 0;
      }
      hasAspect(aspect) {
        const ctor = this.constructor;
        if (ctor.aspects == null) {
          return false;
        }
        return ctor.aspects.has(aspect);
      }
      // Make sure the session is not writable from outside this class.
      get session() {
        return this._session;
      }
      set session(session) {
        this._session = session;
      }
      clearSession() {
        this._session = void 0;
      }
      resetBatch() {
        return true;
      }
      get canRetryRead() {
        return this.hasAspect(exports.Aspect.RETRYABLE) && this.hasAspect(exports.Aspect.READ_OPERATION);
      }
      get canRetryWrite() {
        return this.hasAspect(exports.Aspect.RETRYABLE) && this.hasAspect(exports.Aspect.WRITE_OPERATION);
      }
      /**
       * Given an instance of a MongoDBResponse, map the response to the correct result type.  For
       * example, a `CountOperation` might map the response as follows:
       *
       * ```typescript
       *  override handleOk(response: InstanceType<typeof this.SERVER_COMMAND_RESPONSE_TYPE>): TResult {
       *    return response.toObject(this.bsonOptions).n ?? 0;
       *  }
       *
       *  // or, with type safety:
       *  override handleOk(response: InstanceType<typeof this.SERVER_COMMAND_RESPONSE_TYPE>): TResult {
       *    return response.getNumber('n') ?? 0;
       *  }
       * ```
       */
      handleOk(response) {
        return response.toObject(this.bsonOptions);
      }
      /**
       * Optional.
       *
       * If the operation performs error handling, such as wrapping, renaming the error, or squashing errors
       * this method can be overridden.
       */
      handleError(error2) {
        throw error2;
      }
    }
    exports.AbstractOperation = AbstractOperation;
    function defineAspects(operation2, aspects) {
      if (!Array.isArray(aspects) && !(aspects instanceof Set)) {
        aspects = [aspects];
      }
      aspects = new Set(aspects);
      Object.defineProperty(operation2, "aspects", {
        value: aspects,
        writable: false
      });
      return aspects;
    }
  })(operation);
  return operation;
}
var hasRequiredCommand;
function requireCommand() {
  if (hasRequiredCommand) return command;
  hasRequiredCommand = 1;
  Object.defineProperty(command, "__esModule", { value: true });
  command.CommandOperation = void 0;
  const constants_1 = requireConstants$1();
  const error_1 = requireError();
  const explain_1 = requireExplain();
  const read_concern_1 = requireRead_concern();
  const utils_1 = requireUtils();
  const write_concern_1 = requireWrite_concern();
  const operation_1 = requireOperation();
  class CommandOperation extends operation_1.AbstractOperation {
    constructor(parent, options) {
      super(options);
      this.options = options ?? {};
      const dbNameOverride = options?.dbName || options?.authdb;
      if (dbNameOverride) {
        this.ns = new utils_1.MongoDBNamespace(dbNameOverride, "$cmd");
      } else {
        this.ns = parent ? parent.s.namespace.withCollection("$cmd") : new utils_1.MongoDBNamespace("admin", "$cmd");
      }
      this.readConcern = read_concern_1.ReadConcern.fromOptions(options);
      this.writeConcern = write_concern_1.WriteConcern.fromOptions(options);
      if (this.hasAspect(operation_1.Aspect.EXPLAINABLE)) {
        this.explain = explain_1.Explain.fromOptions(options);
        if (this.explain)
          (0, explain_1.validateExplainTimeoutOptions)(this.options, this.explain);
      } else if (options?.explain != null) {
        throw new error_1.MongoInvalidArgumentError(`Option "explain" is not supported on this command`);
      }
    }
    get canRetryWrite() {
      if (this.hasAspect(operation_1.Aspect.EXPLAINABLE)) {
        return this.explain == null;
      }
      return super.canRetryWrite;
    }
    buildOptions(timeoutContext) {
      return {
        ...this.options,
        ...this.bsonOptions,
        timeoutContext,
        readPreference: this.readPreference,
        session: this.session
      };
    }
    buildCommand(connection2, session) {
      const command2 = this.buildCommandDocument(connection2, session);
      const inTransaction = this.session && this.session.inTransaction();
      if (this.readConcern && (0, utils_1.commandSupportsReadConcern)(command2) && !inTransaction) {
        Object.assign(command2, { readConcern: this.readConcern });
      }
      if (this.writeConcern && this.hasAspect(operation_1.Aspect.WRITE_OPERATION) && !inTransaction) {
        write_concern_1.WriteConcern.apply(command2, this.writeConcern);
      }
      if (this.options.collation && typeof this.options.collation === "object" && !this.hasAspect(operation_1.Aspect.SKIP_COLLATION)) {
        Object.assign(command2, { collation: this.options.collation });
      }
      if (typeof this.options.maxTimeMS === "number") {
        command2.maxTimeMS = this.options.maxTimeMS;
      }
      if (this.options.rawData != null && this.hasAspect(operation_1.Aspect.SUPPORTS_RAW_DATA) && (0, utils_1.maxWireVersion)(connection2) >= constants_1.MIN_SUPPORTED_RAW_DATA_WIRE_VERSION) {
        command2.rawData = this.options.rawData;
      }
      if (this.hasAspect(operation_1.Aspect.EXPLAINABLE) && this.explain) {
        return (0, explain_1.decorateWithExplain)(command2, this.explain);
      }
      return command2;
    }
  }
  command.CommandOperation = CommandOperation;
  return command;
}
var hasRequired_delete;
function require_delete() {
  if (hasRequired_delete) return _delete;
  hasRequired_delete = 1;
  Object.defineProperty(_delete, "__esModule", { value: true });
  _delete.DeleteManyOperation = _delete.DeleteOneOperation = _delete.DeleteOperation = void 0;
  _delete.makeDeleteStatement = makeDeleteStatement;
  const responses_1 = requireResponses();
  const error_1 = requireError();
  const utils_1 = requireUtils();
  const command_1 = requireCommand();
  const operation_1 = requireOperation();
  class DeleteOperation extends command_1.CommandOperation {
    constructor(ns, statements, options) {
      super(void 0, options);
      this.SERVER_COMMAND_RESPONSE_TYPE = responses_1.MongoDBResponse;
      this.options = options;
      this.ns = ns;
      this.statements = statements;
    }
    get commandName() {
      return "delete";
    }
    get canRetryWrite() {
      if (super.canRetryWrite === false) {
        return false;
      }
      return this.statements.every((op) => op.limit != null ? op.limit > 0 : true);
    }
    buildCommandDocument(connection2, _session) {
      const options = this.options;
      const ordered2 = typeof options.ordered === "boolean" ? options.ordered : true;
      const command2 = {
        delete: this.ns.collection,
        deletes: this.statements,
        ordered: ordered2
      };
      if (options.let) {
        command2.let = options.let;
      }
      if (options.comment !== void 0) {
        command2.comment = options.comment;
      }
      const unacknowledgedWrite = this.writeConcern && this.writeConcern.w === 0;
      if (unacknowledgedWrite && (0, utils_1.maxWireVersion)(connection2) < 9) {
        if (this.statements.find((o) => o.hint)) {
          throw new error_1.MongoCompatibilityError(`hint for the delete command is only supported on MongoDB 4.4+`);
        }
      }
      return command2;
    }
  }
  _delete.DeleteOperation = DeleteOperation;
  class DeleteOneOperation extends DeleteOperation {
    constructor(ns, filter, options) {
      super(ns, [makeDeleteStatement(filter, { ...options, limit: 1 })], options);
    }
    handleOk(response) {
      const res = super.handleOk(response);
      if (this.explain)
        return res;
      if (res.code)
        throw new error_1.MongoServerError(res);
      if (res.writeErrors)
        throw new error_1.MongoServerError(res.writeErrors[0]);
      return {
        acknowledged: this.writeConcern?.w !== 0,
        deletedCount: res.n
      };
    }
  }
  _delete.DeleteOneOperation = DeleteOneOperation;
  class DeleteManyOperation extends DeleteOperation {
    constructor(ns, filter, options) {
      super(ns, [makeDeleteStatement(filter, options)], options);
    }
    handleOk(response) {
      const res = super.handleOk(response);
      if (this.explain)
        return res;
      if (res.code)
        throw new error_1.MongoServerError(res);
      if (res.writeErrors)
        throw new error_1.MongoServerError(res.writeErrors[0]);
      return {
        acknowledged: this.writeConcern?.w !== 0,
        deletedCount: res.n
      };
    }
  }
  _delete.DeleteManyOperation = DeleteManyOperation;
  function makeDeleteStatement(filter, options) {
    const op = {
      q: filter,
      limit: typeof options.limit === "number" ? options.limit : 0
    };
    if (options.collation) {
      op.collation = options.collation;
    }
    if (options.hint) {
      op.hint = options.hint;
    }
    return op;
  }
  (0, operation_1.defineAspects)(DeleteOperation, [
    operation_1.Aspect.RETRYABLE,
    operation_1.Aspect.WRITE_OPERATION,
    operation_1.Aspect.SUPPORTS_RAW_DATA
  ]);
  (0, operation_1.defineAspects)(DeleteOneOperation, [
    operation_1.Aspect.RETRYABLE,
    operation_1.Aspect.WRITE_OPERATION,
    operation_1.Aspect.EXPLAINABLE,
    operation_1.Aspect.SKIP_COLLATION,
    operation_1.Aspect.SUPPORTS_RAW_DATA
  ]);
  (0, operation_1.defineAspects)(DeleteManyOperation, [
    operation_1.Aspect.WRITE_OPERATION,
    operation_1.Aspect.EXPLAINABLE,
    operation_1.Aspect.SKIP_COLLATION,
    operation_1.Aspect.SUPPORTS_RAW_DATA
  ]);
  return _delete;
}
var execute_operation = {};
var server_selection = {};
var hasRequiredServer_selection;
function requireServer_selection() {
  if (hasRequiredServer_selection) return server_selection;
  hasRequiredServer_selection = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DeprioritizedServers = exports.MIN_SECONDARY_WRITE_WIRE_VERSION = void 0;
    exports.writableServerSelector = writableServerSelector;
    exports.sameServerSelector = sameServerSelector;
    exports.secondaryWritableServerSelector = secondaryWritableServerSelector;
    exports.readPreferenceServerSelector = readPreferenceServerSelector;
    const error_1 = requireError();
    const read_preference_1 = requireRead_preference();
    const common_1 = requireCommon$1();
    const IDLE_WRITE_PERIOD = 1e4;
    const SMALLEST_MAX_STALENESS_SECONDS = 90;
    exports.MIN_SECONDARY_WRITE_WIRE_VERSION = 13;
    class DeprioritizedServers {
      constructor(descriptions) {
        this.deprioritized = /* @__PURE__ */ new Set();
        for (const description of descriptions ?? []) {
          this.add(description);
        }
      }
      add({ address }) {
        this.deprioritized.add(address);
      }
      has({ address }) {
        return this.deprioritized.has(address);
      }
    }
    exports.DeprioritizedServers = DeprioritizedServers;
    function filterDeprioritized(candidates, deprioritized) {
      const filtered = candidates.filter((candidate) => !deprioritized.has(candidate));
      return filtered.length ? filtered : candidates;
    }
    function writableServerSelector() {
      return function writableServer(topologyDescription, servers, deprioritized) {
        const eligibleServers = filterDeprioritized(servers.filter(({ isWritable }) => isWritable), deprioritized);
        return latencyWindowReducer(topologyDescription, eligibleServers);
      };
    }
    function sameServerSelector(description) {
      return function sameServerSelector2(_topologyDescription, servers, _deprioritized) {
        if (!description)
          return [];
        return servers.filter((sd) => {
          return sd.address === description.address && sd.type !== common_1.ServerType.Unknown;
        });
      };
    }
    function secondaryWritableServerSelector(wireVersion, readPreference) {
      if (!readPreference || !wireVersion || wireVersion && wireVersion < exports.MIN_SECONDARY_WRITE_WIRE_VERSION) {
        return readPreferenceServerSelector(read_preference_1.ReadPreference.primary);
      }
      return readPreferenceServerSelector(readPreference);
    }
    function maxStalenessReducer(readPreference, topologyDescription, servers) {
      if (readPreference.maxStalenessSeconds == null || readPreference.maxStalenessSeconds < 0) {
        return servers;
      }
      const maxStaleness = readPreference.maxStalenessSeconds;
      const maxStalenessVariance = (topologyDescription.heartbeatFrequencyMS + IDLE_WRITE_PERIOD) / 1e3;
      if (maxStaleness < maxStalenessVariance) {
        throw new error_1.MongoInvalidArgumentError(`Option "maxStalenessSeconds" must be at least ${maxStalenessVariance} seconds`);
      }
      if (maxStaleness < SMALLEST_MAX_STALENESS_SECONDS) {
        throw new error_1.MongoInvalidArgumentError(`Option "maxStalenessSeconds" must be at least ${SMALLEST_MAX_STALENESS_SECONDS} seconds`);
      }
      if (topologyDescription.type === common_1.TopologyType.ReplicaSetWithPrimary) {
        const primary = Array.from(topologyDescription.servers.values()).filter(primaryFilter)[0];
        return servers.filter((server2) => {
          const stalenessMS = server2.lastUpdateTime - server2.lastWriteDate - (primary.lastUpdateTime - primary.lastWriteDate) + topologyDescription.heartbeatFrequencyMS;
          const staleness = stalenessMS / 1e3;
          const maxStalenessSeconds = readPreference.maxStalenessSeconds ?? 0;
          return staleness <= maxStalenessSeconds;
        });
      }
      if (topologyDescription.type === common_1.TopologyType.ReplicaSetNoPrimary) {
        if (servers.length === 0) {
          return servers;
        }
        const sMax = servers.reduce((max, s) => s.lastWriteDate > max.lastWriteDate ? s : max);
        return servers.filter((server2) => {
          const stalenessMS = sMax.lastWriteDate - server2.lastWriteDate + topologyDescription.heartbeatFrequencyMS;
          const staleness = stalenessMS / 1e3;
          const maxStalenessSeconds = readPreference.maxStalenessSeconds ?? 0;
          return staleness <= maxStalenessSeconds;
        });
      }
      return servers;
    }
    function tagSetMatch(tagSet, serverTags) {
      return Object.entries(tagSet).every(([key, value]) => serverTags[key] != null && serverTags[key] === value);
    }
    function tagSetReducer({ tags }, servers) {
      if (tags == null || tags.length === 0) {
        return servers;
      }
      for (const tagSet of tags) {
        const serversMatchingTagset = servers.filter((s) => tagSetMatch(tagSet, s.tags));
        if (serversMatchingTagset.length) {
          return serversMatchingTagset;
        }
      }
      return [];
    }
    function latencyWindowReducer(topologyDescription, servers) {
      const low = servers.reduce((min, server2) => Math.min(server2.roundTripTime, min), Infinity);
      const high = low + topologyDescription.localThresholdMS;
      return servers.filter((server2) => server2.roundTripTime <= high && server2.roundTripTime >= low);
    }
    function primaryFilter(server2) {
      return server2.type === common_1.ServerType.RSPrimary;
    }
    function secondaryFilter(server2) {
      return server2.type === common_1.ServerType.RSSecondary;
    }
    function nearestFilter(server2) {
      return server2.type === common_1.ServerType.RSSecondary || server2.type === common_1.ServerType.RSPrimary;
    }
    function knownFilter(server2) {
      return server2.type !== common_1.ServerType.Unknown;
    }
    function loadBalancerFilter(server2) {
      return server2.type === common_1.ServerType.LoadBalancer;
    }
    function isDeprioritizedFactory(deprioritized) {
      return (server2) => (
        // if any deprioritized servers equal the server, here we are.
        !deprioritized.has(server2)
      );
    }
    function secondarySelector(readPreference, topologyDescription, servers, deprioritized) {
      const mode = readPreference.mode;
      switch (mode) {
        case "primary":
          return servers.filter(primaryFilter);
        case "primaryPreferred": {
          const primary = servers.filter(primaryFilter);
          const eligiblePrimary = primary.filter(isDeprioritizedFactory(deprioritized));
          if (eligiblePrimary.length) {
            return eligiblePrimary;
          }
          const secondaries = tagSetReducer(readPreference, maxStalenessReducer(readPreference, topologyDescription, servers.filter(secondaryFilter)));
          const eligibleSecondaries = secondaries.filter(isDeprioritizedFactory(deprioritized));
          if (eligibleSecondaries.length) {
            return latencyWindowReducer(topologyDescription, eligibleSecondaries);
          }
          return primary.length ? primary : latencyWindowReducer(topologyDescription, secondaries);
        }
        case "nearest": {
          const eligible = filterDeprioritized(tagSetReducer(readPreference, maxStalenessReducer(readPreference, topologyDescription, servers.filter(nearestFilter))), deprioritized);
          return latencyWindowReducer(topologyDescription, eligible);
        }
        case "secondary":
        case "secondaryPreferred": {
          const secondaries = tagSetReducer(readPreference, maxStalenessReducer(readPreference, topologyDescription, servers.filter(secondaryFilter)));
          const eligibleSecondaries = secondaries.filter(isDeprioritizedFactory(deprioritized));
          if (eligibleSecondaries.length) {
            return latencyWindowReducer(topologyDescription, eligibleSecondaries);
          }
          if (mode === read_preference_1.ReadPreference.SECONDARY_PREFERRED) {
            const primary = servers.filter(primaryFilter);
            const eligiblePrimary = primary.filter(isDeprioritizedFactory(deprioritized));
            if (eligiblePrimary.length)
              return eligiblePrimary;
            return secondaries.length ? latencyWindowReducer(topologyDescription, secondaries) : primary;
          }
          return latencyWindowReducer(topologyDescription, secondaries);
        }
        default: {
          throw new error_1.MongoRuntimeError(`unexpected readPreference=${mode} (should never happen).  Please report a bug in the Node driver Jira project.`);
        }
      }
    }
    function readPreferenceServerSelector(readPreference) {
      if (!readPreference.isValid()) {
        throw new error_1.MongoInvalidArgumentError("Invalid read preference specified");
      }
      return function readPreferenceServers(topologyDescription, servers, deprioritized) {
        switch (topologyDescription.type) {
          case "Single":
            return latencyWindowReducer(topologyDescription, servers.filter(knownFilter));
          case "ReplicaSetNoPrimary":
          case "ReplicaSetWithPrimary":
            return secondarySelector(readPreference, topologyDescription, servers, deprioritized);
          case "Sharded": {
            const selectable = filterDeprioritized(servers, deprioritized);
            return latencyWindowReducer(topologyDescription, selectable.filter(knownFilter));
          }
          case "Unknown":
            return [];
          case "LoadBalanced":
            return servers.filter(loadBalancerFilter);
          default: {
            topologyDescription.type;
            throw new error_1.MongoRuntimeError(`unexpected topology type: ${topologyDescription.type} (this should never happen).  Please file a bug in the Node driver Jira project.`);
          }
        }
      };
    }
  })(server_selection);
  return server_selection;
}
var timeout = {};
var hasRequiredTimeout;
function requireTimeout() {
  if (hasRequiredTimeout) return timeout;
  hasRequiredTimeout = 1;
  Object.defineProperty(timeout, "__esModule", { value: true });
  timeout.LegacyTimeoutContext = timeout.CSOTTimeoutContext = timeout.TimeoutContext = timeout.Timeout = timeout.TimeoutError = void 0;
  const timers_1 = require$$0$1;
  const error_1 = requireError();
  const utils_1 = requireUtils();
  class TimeoutError extends Error {
    get name() {
      return "TimeoutError";
    }
    constructor(message, options) {
      super(message, options);
      this.duration = options.duration;
    }
    static is(error2) {
      return error2 != null && typeof error2 === "object" && "name" in error2 && error2.name === "TimeoutError";
    }
  }
  timeout.TimeoutError = TimeoutError;
  class Timeout extends Promise {
    get remainingTime() {
      if (this.timedOut)
        return 0;
      if (this.duration === 0)
        return Infinity;
      return this.start + this.duration - Math.trunc(performance.now());
    }
    get timeElapsed() {
      return Math.trunc(performance.now()) - this.start;
    }
    /** Create a new timeout that expires in `duration` ms */
    constructor(executor2 = () => null, options) {
      const duration = options?.duration ?? 0;
      const unref = !!options?.unref;
      const rejection = options?.rejection;
      if (duration < 0) {
        throw new error_1.MongoInvalidArgumentError("Cannot create a Timeout with a negative duration");
      }
      let reject;
      super((_, promiseReject) => {
        reject = promiseReject;
        executor2(utils_1.noop, promiseReject);
      });
      this.ended = null;
      this.timedOut = false;
      this.cleared = false;
      this.duration = duration;
      this.start = Math.trunc(performance.now());
      if (rejection == null && this.duration > 0) {
        this.id = (0, timers_1.setTimeout)(() => {
          this.ended = Math.trunc(performance.now());
          this.timedOut = true;
          reject(new TimeoutError(`Expired after ${duration}ms`, { duration }));
        }, this.duration);
        if (typeof this.id.unref === "function" && unref) {
          this.id.unref();
        }
      } else if (rejection != null) {
        this.ended = Math.trunc(performance.now());
        this.timedOut = true;
        reject(rejection);
      }
    }
    /**
     * Clears the underlying timeout. This method is idempotent
     */
    clear() {
      (0, timers_1.clearTimeout)(this.id);
      this.id = void 0;
      this.timedOut = false;
      this.cleared = true;
    }
    throwIfExpired() {
      if (this.timedOut) {
        this.then(void 0, utils_1.squashError);
        throw new TimeoutError("Timed out", { duration: this.duration });
      }
    }
    static expires(duration, unref) {
      return new Timeout(void 0, { duration, unref });
    }
    static reject(rejection) {
      return new Timeout(void 0, { duration: 0, unref: true, rejection });
    }
  }
  timeout.Timeout = Timeout;
  function isLegacyTimeoutContextOptions(v) {
    return v != null && typeof v === "object" && "serverSelectionTimeoutMS" in v && typeof v.serverSelectionTimeoutMS === "number" && "waitQueueTimeoutMS" in v && typeof v.waitQueueTimeoutMS === "number";
  }
  function isCSOTTimeoutContextOptions(v) {
    return v != null && typeof v === "object" && "serverSelectionTimeoutMS" in v && typeof v.serverSelectionTimeoutMS === "number" && "timeoutMS" in v && typeof v.timeoutMS === "number";
  }
  class TimeoutContext {
    static create(options) {
      if (options.session?.timeoutContext != null)
        return options.session?.timeoutContext;
      if (isCSOTTimeoutContextOptions(options))
        return new CSOTTimeoutContext(options);
      else if (isLegacyTimeoutContextOptions(options))
        return new LegacyTimeoutContext(options);
      else
        throw new error_1.MongoRuntimeError("Unrecognized options");
    }
  }
  timeout.TimeoutContext = TimeoutContext;
  class CSOTTimeoutContext extends TimeoutContext {
    constructor(options) {
      super();
      this.minRoundTripTime = 0;
      this.start = Math.trunc(performance.now());
      this.timeoutMS = options.timeoutMS;
      this.serverSelectionTimeoutMS = options.serverSelectionTimeoutMS;
      this.socketTimeoutMS = options.socketTimeoutMS;
      this.clearServerSelectionTimeout = false;
    }
    get maxTimeMS() {
      return this.remainingTimeMS - this.minRoundTripTime;
    }
    get remainingTimeMS() {
      const timePassed = Math.trunc(performance.now()) - this.start;
      return this.timeoutMS <= 0 ? Infinity : this.timeoutMS - timePassed;
    }
    csotEnabled() {
      return true;
    }
    get serverSelectionTimeout() {
      if (typeof this._serverSelectionTimeout !== "object" || this._serverSelectionTimeout?.cleared) {
        const { remainingTimeMS, serverSelectionTimeoutMS } = this;
        if (remainingTimeMS <= 0)
          return Timeout.reject(new error_1.MongoOperationTimeoutError(`Timed out in server selection after ${this.timeoutMS}ms`));
        const usingServerSelectionTimeoutMS = serverSelectionTimeoutMS !== 0 && (0, utils_1.csotMin)(remainingTimeMS, serverSelectionTimeoutMS) === serverSelectionTimeoutMS;
        if (usingServerSelectionTimeoutMS) {
          this._serverSelectionTimeout = Timeout.expires(serverSelectionTimeoutMS);
        } else {
          if (remainingTimeMS > 0 && Number.isFinite(remainingTimeMS)) {
            this._serverSelectionTimeout = Timeout.expires(remainingTimeMS);
          } else {
            this._serverSelectionTimeout = null;
          }
        }
      }
      return this._serverSelectionTimeout;
    }
    get connectionCheckoutTimeout() {
      if (typeof this._connectionCheckoutTimeout !== "object" || this._connectionCheckoutTimeout?.cleared) {
        if (typeof this._serverSelectionTimeout === "object") {
          this._connectionCheckoutTimeout = this._serverSelectionTimeout;
        } else {
          throw new error_1.MongoRuntimeError("Unreachable. If you are seeing this error, please file a ticket on the NODE driver project on Jira");
        }
      }
      return this._connectionCheckoutTimeout;
    }
    get timeoutForSocketWrite() {
      const { remainingTimeMS } = this;
      if (!Number.isFinite(remainingTimeMS))
        return null;
      if (remainingTimeMS > 0)
        return Timeout.expires(remainingTimeMS);
      return Timeout.reject(new error_1.MongoOperationTimeoutError("Timed out before socket write"));
    }
    get timeoutForSocketRead() {
      const { remainingTimeMS } = this;
      if (!Number.isFinite(remainingTimeMS))
        return null;
      if (remainingTimeMS > 0)
        return Timeout.expires(remainingTimeMS);
      return Timeout.reject(new error_1.MongoOperationTimeoutError("Timed out before socket read"));
    }
    refresh() {
      this.start = Math.trunc(performance.now());
      this.minRoundTripTime = 0;
      this._serverSelectionTimeout?.clear();
      this._connectionCheckoutTimeout?.clear();
    }
    clear() {
      this._serverSelectionTimeout?.clear();
      this._connectionCheckoutTimeout?.clear();
    }
    /**
     * @internal
     * Throws a MongoOperationTimeoutError if the context has expired.
     * If the context has not expired, returns the `remainingTimeMS`
     **/
    getRemainingTimeMSOrThrow(message) {
      const { remainingTimeMS } = this;
      if (remainingTimeMS <= 0)
        throw new error_1.MongoOperationTimeoutError(message ?? `Expired after ${this.timeoutMS}ms`);
      return remainingTimeMS;
    }
    /**
     * @internal
     * This method is intended to be used in situations where concurrent operation are on the same deadline, but cannot share a single `TimeoutContext` instance.
     * Returns a new instance of `CSOTTimeoutContext` constructed with identical options, but setting the `start` property to `this.start`.
     */
    clone() {
      const timeoutContext = new CSOTTimeoutContext({
        timeoutMS: this.timeoutMS,
        serverSelectionTimeoutMS: this.serverSelectionTimeoutMS
      });
      timeoutContext.start = this.start;
      return timeoutContext;
    }
    refreshed() {
      return new CSOTTimeoutContext(this);
    }
    addMaxTimeMSToCommand(command2, options) {
      if (options.omitMaxTimeMS)
        return;
      const maxTimeMS = this.remainingTimeMS - this.minRoundTripTime;
      if (maxTimeMS > 0 && Number.isFinite(maxTimeMS))
        command2.maxTimeMS = maxTimeMS;
    }
    getSocketTimeoutMS() {
      return 0;
    }
  }
  timeout.CSOTTimeoutContext = CSOTTimeoutContext;
  class LegacyTimeoutContext extends TimeoutContext {
    constructor(options) {
      super();
      this.options = options;
      this.clearServerSelectionTimeout = true;
    }
    csotEnabled() {
      return false;
    }
    get serverSelectionTimeout() {
      if (this.options.serverSelectionTimeoutMS != null && this.options.serverSelectionTimeoutMS > 0)
        return Timeout.expires(this.options.serverSelectionTimeoutMS);
      return null;
    }
    get connectionCheckoutTimeout() {
      if (this.options.waitQueueTimeoutMS != null && this.options.waitQueueTimeoutMS > 0)
        return Timeout.expires(this.options.waitQueueTimeoutMS);
      return null;
    }
    get timeoutForSocketWrite() {
      return null;
    }
    get timeoutForSocketRead() {
      return null;
    }
    refresh() {
      return;
    }
    clear() {
      return;
    }
    get maxTimeMS() {
      return null;
    }
    refreshed() {
      return new LegacyTimeoutContext(this.options);
    }
    addMaxTimeMSToCommand(_command, _options) {
    }
    getSocketTimeoutMS() {
      return this.options.socketTimeoutMS;
    }
  }
  timeout.LegacyTimeoutContext = LegacyTimeoutContext;
  return timeout;
}
var aggregate = {};
var hasRequiredAggregate;
function requireAggregate() {
  if (hasRequiredAggregate) return aggregate;
  hasRequiredAggregate = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AggregateOperation = exports.DB_AGGREGATE_COLLECTION = void 0;
    const responses_1 = requireResponses();
    const error_1 = requireError();
    const write_concern_1 = requireWrite_concern();
    const command_1 = requireCommand();
    const operation_1 = requireOperation();
    exports.DB_AGGREGATE_COLLECTION = 1;
    class AggregateOperation extends command_1.CommandOperation {
      constructor(ns, pipeline, options) {
        super(void 0, { ...options, dbName: ns.db });
        this.SERVER_COMMAND_RESPONSE_TYPE = responses_1.CursorResponse;
        this.options = { ...options };
        this.target = ns.collection || exports.DB_AGGREGATE_COLLECTION;
        this.pipeline = pipeline;
        this.hasWriteStage = false;
        if (typeof options?.out === "string") {
          this.pipeline = this.pipeline.concat({ $out: options.out });
          this.hasWriteStage = true;
        } else if (pipeline.length > 0) {
          const finalStage = pipeline[pipeline.length - 1];
          if (finalStage.$out || finalStage.$merge) {
            this.hasWriteStage = true;
          }
        }
        if (!this.hasWriteStage) {
          delete this.options.writeConcern;
        }
        if (options?.cursor != null && typeof options.cursor !== "object") {
          throw new error_1.MongoInvalidArgumentError("Cursor options must be an object");
        }
        this.SERVER_COMMAND_RESPONSE_TYPE = this.explain ? responses_1.ExplainedCursorResponse : responses_1.CursorResponse;
      }
      get commandName() {
        return "aggregate";
      }
      get canRetryRead() {
        return !this.hasWriteStage;
      }
      addToPipeline(stage) {
        this.pipeline.push(stage);
      }
      buildCommandDocument() {
        const options = this.options;
        const command2 = { aggregate: this.target, pipeline: this.pipeline };
        if (this.hasWriteStage && this.writeConcern) {
          write_concern_1.WriteConcern.apply(command2, this.writeConcern);
        }
        if (options.bypassDocumentValidation === true) {
          command2.bypassDocumentValidation = options.bypassDocumentValidation;
        }
        if (typeof options.allowDiskUse === "boolean") {
          command2.allowDiskUse = options.allowDiskUse;
        }
        if (options.hint) {
          command2.hint = options.hint;
        }
        if (options.let) {
          command2.let = options.let;
        }
        if (options.comment !== void 0) {
          command2.comment = options.comment;
        }
        command2.cursor = options.cursor || {};
        if (options.batchSize && !this.hasWriteStage) {
          command2.cursor.batchSize = options.batchSize;
        }
        return command2;
      }
      handleOk(response) {
        return response;
      }
    }
    exports.AggregateOperation = AggregateOperation;
    (0, operation_1.defineAspects)(AggregateOperation, [
      operation_1.Aspect.READ_OPERATION,
      operation_1.Aspect.RETRYABLE,
      operation_1.Aspect.EXPLAINABLE,
      operation_1.Aspect.CURSOR_CREATING,
      operation_1.Aspect.SUPPORTS_RAW_DATA
    ]);
  })(aggregate);
  return aggregate;
}
var run_command = {};
var hasRequiredRun_command;
function requireRun_command() {
  if (hasRequiredRun_command) return run_command;
  hasRequiredRun_command = 1;
  Object.defineProperty(run_command, "__esModule", { value: true });
  run_command.RunCursorCommandOperation = run_command.RunCommandOperation = void 0;
  const responses_1 = requireResponses();
  const operation_1 = requireOperation();
  class RunCommandOperation extends operation_1.AbstractOperation {
    constructor(namespace, command2, options) {
      super(options);
      this.SERVER_COMMAND_RESPONSE_TYPE = responses_1.MongoDBResponse;
      this.command = command2;
      this.options = options;
      this.ns = namespace.withCollection("$cmd");
    }
    get commandName() {
      return "runCommand";
    }
    buildCommand(_connection, _session) {
      return this.command;
    }
    buildOptions(timeoutContext) {
      return {
        ...this.options,
        session: this.session,
        timeoutContext,
        signal: this.options.signal,
        readPreference: this.options.readPreference
      };
    }
  }
  run_command.RunCommandOperation = RunCommandOperation;
  class RunCursorCommandOperation extends RunCommandOperation {
    constructor() {
      super(...arguments);
      this.SERVER_COMMAND_RESPONSE_TYPE = responses_1.CursorResponse;
    }
    handleOk(response) {
      return response;
    }
  }
  run_command.RunCursorCommandOperation = RunCursorCommandOperation;
  return run_command;
}
var hasRequiredExecute_operation;
function requireExecute_operation() {
  if (hasRequiredExecute_operation) return execute_operation;
  hasRequiredExecute_operation = 1;
  Object.defineProperty(execute_operation, "__esModule", { value: true });
  execute_operation.executeOperation = executeOperation;
  execute_operation.autoConnect = autoConnect;
  const promises_1 = require$$0$3;
  const constants_1 = requireConstants$1();
  const error_1 = requireError();
  const read_preference_1 = requireRead_preference();
  const common_1 = requireCommon$1();
  const server_selection_1 = requireServer_selection();
  const timeout_1 = requireTimeout();
  const utils_1 = requireUtils();
  const aggregate_1 = requireAggregate();
  const operation_1 = requireOperation();
  const run_command_1 = requireRun_command();
  const MMAPv1_RETRY_WRITES_ERROR_CODE = error_1.MONGODB_ERROR_CODES.IllegalOperation;
  const MMAPv1_RETRY_WRITES_ERROR_MESSAGE = "This MongoDB deployment does not support retryable writes. Please add retryWrites=false to your connection string.";
  async function executeOperation(client, operation2, timeoutContext) {
    if (!(operation2 instanceof operation_1.AbstractOperation)) {
      throw new error_1.MongoRuntimeError("This method requires a valid operation instance");
    }
    const topology2 = client.topology == null ? await (0, utils_1.abortable)(autoConnect(client), operation2.options) : client.topology;
    let session = operation2.session;
    let owner;
    if (session == null) {
      owner = /* @__PURE__ */ Symbol();
      session = client.startSession({ owner, explicit: false });
    } else if (session.hasEnded) {
      throw new error_1.MongoExpiredSessionError("Use of expired sessions is not permitted");
    } else if (session.snapshotEnabled && (0, utils_1.maxWireVersion)(topology2) < constants_1.MIN_SUPPORTED_SNAPSHOT_READS_WIRE_VERSION) {
      throw new error_1.MongoCompatibilityError("Snapshot reads require MongoDB 5.0 or later");
    } else if (session.client !== client) {
      throw new error_1.MongoInvalidArgumentError("ClientSession must be from the same MongoClient");
    }
    operation2.session ??= session;
    const readPreference = operation2.readPreference ?? read_preference_1.ReadPreference.primary;
    const inTransaction = !!session?.inTransaction();
    const hasReadAspect = operation2.hasAspect(operation_1.Aspect.READ_OPERATION);
    if (inTransaction && !readPreference.equals(read_preference_1.ReadPreference.primary) && (hasReadAspect || operation2.commandName === "runCommand")) {
      throw new error_1.MongoTransactionError(`Read preference in a transaction must be primary, not: ${readPreference.mode}`);
    }
    if (session?.isPinned && session.transaction.isCommitted && !operation2.bypassPinningCheck) {
      session.unpin();
    }
    timeoutContext ??= timeout_1.TimeoutContext.create({
      session,
      serverSelectionTimeoutMS: client.s.options.serverSelectionTimeoutMS,
      waitQueueTimeoutMS: client.s.options.waitQueueTimeoutMS,
      timeoutMS: operation2.options.timeoutMS
    });
    try {
      return await executeOperationWithRetries(operation2, {
        topology: topology2,
        timeoutContext,
        session,
        readPreference
      });
    } finally {
      if (session?.owner != null && session.owner === owner) {
        await session.endSession();
      }
    }
  }
  async function autoConnect(client) {
    if (client.topology == null) {
      if (client.s.hasBeenClosed) {
        throw new error_1.MongoNotConnectedError("Client must be connected before running operations");
      }
      client.s.options.__skipPingOnConnect = true;
      try {
        await client.connect();
        if (client.topology == null) {
          throw new error_1.MongoRuntimeError("client.connect did not create a topology but also did not throw");
        }
        return client.topology;
      } finally {
        delete client.s.options.__skipPingOnConnect;
      }
    }
    return client.topology;
  }
  const BASE_BACKOFF_MS = 100;
  const MAX_BACKOFF_MS = 1e4;
  async function executeOperationWithRetries(operation2, { topology: topology2, timeoutContext, session, readPreference }) {
    let selector;
    if (operation2.hasAspect(operation_1.Aspect.MUST_SELECT_SAME_SERVER)) {
      selector = (0, server_selection_1.sameServerSelector)(operation2.server?.description);
    } else if (operation2 instanceof aggregate_1.AggregateOperation && operation2.hasWriteStage) {
      selector = (0, server_selection_1.secondaryWritableServerSelector)(topology2.commonWireVersion, readPreference);
    } else {
      selector = readPreference;
    }
    let server2 = await topology2.selectServer(selector, {
      session,
      operationName: operation2.commandName,
      timeoutContext,
      signal: operation2.options.signal,
      deprioritizedServers: new server_selection_1.DeprioritizedServers()
    });
    const hasReadAspect = operation2.hasAspect(operation_1.Aspect.READ_OPERATION);
    const hasWriteAspect = operation2.hasAspect(operation_1.Aspect.WRITE_OPERATION);
    const inTransaction = session?.inTransaction() ?? false;
    const willRetryRead = topology2.s.options.retryReads && !inTransaction && operation2.canRetryRead;
    const willRetryWrite = topology2.s.options.retryWrites && !inTransaction && (0, utils_1.supportsRetryableWrites)(server2) && operation2.canRetryWrite;
    const willRetry = operation2.hasAspect(operation_1.Aspect.RETRYABLE) && session != null && (hasReadAspect && willRetryRead || hasWriteAspect && willRetryWrite);
    if (hasWriteAspect && willRetryWrite && session != null) {
      operation2.options.willRetryWrite = true;
      session.incrementTransactionNumber();
    }
    const deprioritizedServers = new server_selection_1.DeprioritizedServers();
    let maxAttempts = typeof operation2.maxAttempts === "number" ? operation2.maxAttempts : willRetry ? timeoutContext.csotEnabled() ? Infinity : 2 : 1;
    let error2 = null;
    for (let attempt = 0; attempt < maxAttempts; attempt++) {
      operation2.attemptsMade = attempt + 1;
      operation2.server = server2;
      try {
        try {
          const result = await server2.command(operation2, timeoutContext);
          return operation2.handleOk(result);
        } catch (error3) {
          return operation2.handleError(error3);
        }
      } catch (operationError) {
        if (!(operationError instanceof error_1.MongoError))
          throw operationError;
        if (error2 == null) {
          error2 = operationError;
        } else {
          if (!operationError.hasErrorLabel(error_1.MongoErrorLabel.NoWritesPerformed)) {
            error2 = operationError;
          }
        }
        timeoutContext.clear();
        if (hasWriteAspect && operationError.code === MMAPv1_RETRY_WRITES_ERROR_CODE) {
          throw new error_1.MongoServerError({
            message: MMAPv1_RETRY_WRITES_ERROR_MESSAGE,
            errmsg: MMAPv1_RETRY_WRITES_ERROR_MESSAGE,
            originalError: operationError
          });
        }
        if (!canRetry(operation2, operationError)) {
          throw error2;
        }
        if (operationError.hasErrorLabel(error_1.MongoErrorLabel.SystemOverloadedError)) {
          const maxOverloadAttempts = topology2.s.options.maxAdaptiveRetries + 1;
          maxAttempts = Math.min(maxOverloadAttempts, operation2.maxAttempts ?? maxOverloadAttempts);
        }
        if (attempt + 1 >= maxAttempts) {
          throw error2;
        }
        if (operationError instanceof error_1.MongoNetworkError && operation2.hasAspect(operation_1.Aspect.CURSOR_CREATING) && session != null && session.isPinned && !session.inTransaction()) {
          session.unpin({ force: true, forceClear: true });
        }
        if (operationError.hasErrorLabel(error_1.MongoErrorLabel.SystemOverloadedError) && operation2.hasAspect(operation_1.Aspect.CURSOR_CREATING) && session != null && session.isPinned && !session.inTransaction()) {
          session.unpin({ force: true });
        }
        if (operationError.hasErrorLabel(error_1.MongoErrorLabel.SystemOverloadedError)) {
          const backoffMS = Math.random() * Math.min(MAX_BACKOFF_MS, BASE_BACKOFF_MS * 2 ** attempt);
          if (timeoutContext.csotEnabled() && backoffMS > timeoutContext.remainingTimeMS) {
            throw error2;
          }
          await (0, promises_1.setTimeout)(backoffMS);
        }
        if (topology2.description.type === common_1.TopologyType.Sharded || operationError.hasErrorLabel(error_1.MongoErrorLabel.SystemOverloadedError) && topology2.s.options.enableOverloadRetargeting) {
          deprioritizedServers.add(server2.description);
        }
        server2 = await topology2.selectServer(selector, {
          session,
          operationName: operation2.commandName,
          deprioritizedServers,
          signal: operation2.options.signal
        });
        if (hasWriteAspect && !(0, utils_1.supportsRetryableWrites)(server2) && !operationError.hasErrorLabel(error_1.MongoErrorLabel.SystemOverloadedError)) {
          throw new error_1.MongoUnexpectedServerResponseError("Selected server does not support retryable writes");
        }
        if (operation2.hasAspect(operation_1.Aspect.COMMAND_BATCHING)) {
          operation2.resetBatch();
        }
      }
    }
    throw error2 ?? new error_1.MongoRuntimeError("Should never happen: operation execution loop terminated but no error was recorded.");
    function canRetry(operation3, error3) {
      if (error3.hasErrorLabel(error_1.MongoErrorLabel.SystemOverloadedError) && error3.hasErrorLabel(error_1.MongoErrorLabel.RetryableError)) {
        if (operation3 instanceof run_command_1.RunCommandOperation) {
          return topology2.s.options.retryReads && topology2.s.options.retryWrites;
        }
        if (operation3 instanceof aggregate_1.AggregateOperation && operation3.hasWriteStage) {
          return topology2.s.options.retryWrites;
        }
        const canRetryAsRead = hasReadAspect && topology2.s.options.retryReads;
        const canRetryAsWrite = hasWriteAspect && topology2.s.options.retryWrites;
        return canRetryAsRead || canRetryAsWrite;
      }
      if (operation3 instanceof run_command_1.RunCommandOperation) {
        return false;
      }
      if (operation3.hasAspect(operation_1.Aspect.COMMAND_BATCHING)) {
        return operation3.canRetryWrite && (0, error_1.isRetryableWriteError)(error3);
      }
      return hasWriteAspect && willRetryWrite && (0, error_1.isRetryableWriteError)(error3) || hasReadAspect && willRetryRead && (0, error_1.isRetryableReadError)(error3);
    }
  }
  return execute_operation;
}
var insert = {};
var hasRequiredInsert;
function requireInsert() {
  if (hasRequiredInsert) return insert;
  hasRequiredInsert = 1;
  Object.defineProperty(insert, "__esModule", { value: true });
  insert.InsertOneOperation = insert.InsertOperation = void 0;
  const responses_1 = requireResponses();
  const error_1 = requireError();
  const utils_1 = requireUtils();
  const command_1 = requireCommand();
  const operation_1 = requireOperation();
  class InsertOperation extends command_1.CommandOperation {
    constructor(ns, documents, options) {
      super(void 0, options);
      this.SERVER_COMMAND_RESPONSE_TYPE = responses_1.MongoDBResponse;
      this.options = { ...options, checkKeys: options.checkKeys ?? false };
      this.ns = ns;
      this.documents = documents;
    }
    get commandName() {
      return "insert";
    }
    buildCommandDocument(_connection, _session) {
      const options = this.options ?? {};
      const ordered2 = typeof options.ordered === "boolean" ? options.ordered : true;
      const command2 = {
        insert: this.ns.collection,
        documents: this.documents,
        ordered: ordered2
      };
      if (typeof options.bypassDocumentValidation === "boolean") {
        command2.bypassDocumentValidation = options.bypassDocumentValidation;
      }
      if (options.comment !== void 0) {
        command2.comment = options.comment;
      }
      return command2;
    }
  }
  insert.InsertOperation = InsertOperation;
  class InsertOneOperation extends InsertOperation {
    constructor(collection2, doc, options) {
      super(collection2.s.namespace, [(0, utils_1.maybeAddIdToDocuments)(collection2, doc, options)], options);
    }
    handleOk(response) {
      const res = super.handleOk(response);
      if (res.code)
        throw new error_1.MongoServerError(res);
      if (res.writeErrors) {
        throw new error_1.MongoServerError(res.writeErrors[0]);
      }
      return {
        acknowledged: this.writeConcern?.w !== 0,
        insertedId: this.documents[0]._id
      };
    }
  }
  insert.InsertOneOperation = InsertOneOperation;
  (0, operation_1.defineAspects)(InsertOperation, [
    operation_1.Aspect.RETRYABLE,
    operation_1.Aspect.WRITE_OPERATION,
    operation_1.Aspect.SUPPORTS_RAW_DATA
  ]);
  (0, operation_1.defineAspects)(InsertOneOperation, [
    operation_1.Aspect.RETRYABLE,
    operation_1.Aspect.WRITE_OPERATION,
    operation_1.Aspect.SUPPORTS_RAW_DATA
  ]);
  return insert;
}
var update$1 = {};
var sort = {};
var hasRequiredSort;
function requireSort() {
  if (hasRequiredSort) return sort;
  hasRequiredSort = 1;
  Object.defineProperty(sort, "__esModule", { value: true });
  sort.formatSort = formatSort;
  const error_1 = requireError();
  function prepareDirection(direction = 1) {
    const value = `${direction}`.toLowerCase();
    if (isMeta(direction))
      return direction;
    switch (value) {
      case "ascending":
      case "asc":
      case "1":
        return 1;
      case "descending":
      case "desc":
      case "-1":
        return -1;
      default:
        throw new error_1.MongoInvalidArgumentError(`Invalid sort direction: ${JSON.stringify(direction)}`);
    }
  }
  function isMeta(t) {
    return typeof t === "object" && t != null && "$meta" in t && typeof t.$meta === "string";
  }
  function isPair(t) {
    if (Array.isArray(t) && t.length === 2) {
      try {
        prepareDirection(t[1]);
        return true;
      } catch {
        return false;
      }
    }
    return false;
  }
  function isDeep(t) {
    return Array.isArray(t) && Array.isArray(t[0]);
  }
  function isMap(t) {
    return t instanceof Map && t.size > 0;
  }
  function isReadonlyArray(value) {
    return Array.isArray(value);
  }
  function pairToMap(v) {
    return /* @__PURE__ */ new Map([[`${v[0]}`, prepareDirection([v[1]])]]);
  }
  function deepToMap(t) {
    const sortEntries = t.map(([k, v]) => [`${k}`, prepareDirection(v)]);
    return new Map(sortEntries);
  }
  function stringsToMap(t) {
    const sortEntries = t.map((key) => [`${key}`, 1]);
    return new Map(sortEntries);
  }
  function objectToMap(t) {
    const sortEntries = Object.entries(t).map(([k, v]) => [
      `${k}`,
      prepareDirection(v)
    ]);
    return new Map(sortEntries);
  }
  function mapToMap(t) {
    const sortEntries = Array.from(t).map(([k, v]) => [
      `${k}`,
      prepareDirection(v)
    ]);
    return new Map(sortEntries);
  }
  function formatSort(sort2, direction) {
    if (sort2 == null)
      return void 0;
    if (typeof sort2 === "string")
      return /* @__PURE__ */ new Map([[sort2, prepareDirection(direction)]]);
    if (typeof sort2 !== "object") {
      throw new error_1.MongoInvalidArgumentError(`Invalid sort format: ${JSON.stringify(sort2)} Sort must be a valid object`);
    }
    if (!isReadonlyArray(sort2)) {
      if (isMap(sort2))
        return mapToMap(sort2);
      if (Object.keys(sort2).length)
        return objectToMap(sort2);
      return void 0;
    }
    if (!sort2.length)
      return void 0;
    if (isDeep(sort2))
      return deepToMap(sort2);
    if (isPair(sort2))
      return pairToMap(sort2);
    return stringsToMap(sort2);
  }
  return sort;
}
var hasRequiredUpdate$1;
function requireUpdate$1() {
  if (hasRequiredUpdate$1) return update$1;
  hasRequiredUpdate$1 = 1;
  Object.defineProperty(update$1, "__esModule", { value: true });
  update$1.ReplaceOneOperation = update$1.UpdateManyOperation = update$1.UpdateOneOperation = update$1.UpdateOperation = void 0;
  update$1.makeUpdateStatement = makeUpdateStatement;
  const responses_1 = requireResponses();
  const error_1 = requireError();
  const sort_1 = requireSort();
  const utils_1 = requireUtils();
  const command_1 = requireCommand();
  const operation_1 = requireOperation();
  class UpdateOperation extends command_1.CommandOperation {
    constructor(ns, statements, options) {
      super(void 0, options);
      this.SERVER_COMMAND_RESPONSE_TYPE = responses_1.MongoDBResponse;
      this.options = options;
      this.ns = ns;
      this.statements = statements;
    }
    get commandName() {
      return "update";
    }
    get canRetryWrite() {
      if (super.canRetryWrite === false) {
        return false;
      }
      return this.statements.every((op) => op.multi == null || op.multi === false);
    }
    buildCommandDocument(_connection, _session) {
      const options = this.options;
      const command2 = {
        update: this.ns.collection,
        updates: this.statements,
        ordered: options.ordered ?? true
      };
      if (typeof options.bypassDocumentValidation === "boolean") {
        command2.bypassDocumentValidation = options.bypassDocumentValidation;
      }
      if (options.let) {
        command2.let = options.let;
      }
      if (options.comment !== void 0) {
        command2.comment = options.comment;
      }
      return command2;
    }
  }
  update$1.UpdateOperation = UpdateOperation;
  class UpdateOneOperation extends UpdateOperation {
    constructor(ns, filter, update2, options) {
      super(ns, [makeUpdateStatement(filter, update2, { ...options, multi: false })], options);
      if (!(0, utils_1.hasAtomicOperators)(update2, options)) {
        throw new error_1.MongoInvalidArgumentError("Update document requires atomic operators");
      }
    }
    handleOk(response) {
      const res = super.handleOk(response);
      if (this.explain != null)
        return res;
      if (res.code)
        throw new error_1.MongoServerError(res);
      if (res.writeErrors)
        throw new error_1.MongoServerError(res.writeErrors[0]);
      return {
        acknowledged: this.writeConcern?.w !== 0,
        modifiedCount: res.nModified ?? res.n,
        upsertedId: Array.isArray(res.upserted) && res.upserted.length > 0 ? res.upserted[0]._id : null,
        upsertedCount: Array.isArray(res.upserted) && res.upserted.length ? res.upserted.length : 0,
        matchedCount: Array.isArray(res.upserted) && res.upserted.length > 0 ? 0 : res.n
      };
    }
  }
  update$1.UpdateOneOperation = UpdateOneOperation;
  class UpdateManyOperation extends UpdateOperation {
    constructor(ns, filter, update2, options) {
      super(ns, [makeUpdateStatement(filter, update2, { ...options, multi: true })], options);
      if (!(0, utils_1.hasAtomicOperators)(update2, options)) {
        throw new error_1.MongoInvalidArgumentError("Update document requires atomic operators");
      }
    }
    handleOk(response) {
      const res = super.handleOk(response);
      if (this.explain != null)
        return res;
      if (res.code)
        throw new error_1.MongoServerError(res);
      if (res.writeErrors)
        throw new error_1.MongoServerError(res.writeErrors[0]);
      return {
        acknowledged: this.writeConcern?.w !== 0,
        modifiedCount: res.nModified ?? res.n,
        upsertedId: Array.isArray(res.upserted) && res.upserted.length > 0 ? res.upserted[0]._id : null,
        upsertedCount: Array.isArray(res.upserted) && res.upserted.length ? res.upserted.length : 0,
        matchedCount: Array.isArray(res.upserted) && res.upserted.length > 0 ? 0 : res.n
      };
    }
  }
  update$1.UpdateManyOperation = UpdateManyOperation;
  class ReplaceOneOperation extends UpdateOperation {
    constructor(ns, filter, replacement, options) {
      super(ns, [makeUpdateStatement(filter, replacement, { ...options, multi: false })], options);
      if ((0, utils_1.hasAtomicOperators)(replacement)) {
        throw new error_1.MongoInvalidArgumentError("Replacement document must not contain atomic operators");
      }
    }
    handleOk(response) {
      const res = super.handleOk(response);
      if (this.explain != null)
        return res;
      if (res.code)
        throw new error_1.MongoServerError(res);
      if (res.writeErrors)
        throw new error_1.MongoServerError(res.writeErrors[0]);
      return {
        acknowledged: this.writeConcern?.w !== 0,
        modifiedCount: res.nModified ?? res.n,
        upsertedId: Array.isArray(res.upserted) && res.upserted.length > 0 ? res.upserted[0]._id : null,
        upsertedCount: Array.isArray(res.upserted) && res.upserted.length ? res.upserted.length : 0,
        matchedCount: Array.isArray(res.upserted) && res.upserted.length > 0 ? 0 : res.n
      };
    }
  }
  update$1.ReplaceOneOperation = ReplaceOneOperation;
  function makeUpdateStatement(filter, update2, options) {
    if (filter == null || typeof filter !== "object") {
      throw new error_1.MongoInvalidArgumentError("Selector must be a valid JavaScript object");
    }
    if (update2 == null || typeof update2 !== "object") {
      throw new error_1.MongoInvalidArgumentError("Document must be a valid JavaScript object");
    }
    const op = { q: filter, u: update2 };
    if (typeof options.upsert === "boolean") {
      op.upsert = options.upsert;
    }
    if (options.multi) {
      op.multi = options.multi;
    }
    if (options.hint) {
      op.hint = options.hint;
    }
    if (options.arrayFilters) {
      op.arrayFilters = options.arrayFilters;
    }
    if (options.collation) {
      op.collation = options.collation;
    }
    if (!options.multi && options.sort != null) {
      op.sort = (0, sort_1.formatSort)(options.sort);
    }
    return op;
  }
  (0, operation_1.defineAspects)(UpdateOperation, [
    operation_1.Aspect.RETRYABLE,
    operation_1.Aspect.WRITE_OPERATION,
    operation_1.Aspect.SKIP_COLLATION,
    operation_1.Aspect.SUPPORTS_RAW_DATA
  ]);
  (0, operation_1.defineAspects)(UpdateOneOperation, [
    operation_1.Aspect.RETRYABLE,
    operation_1.Aspect.WRITE_OPERATION,
    operation_1.Aspect.EXPLAINABLE,
    operation_1.Aspect.SKIP_COLLATION,
    operation_1.Aspect.SUPPORTS_RAW_DATA
  ]);
  (0, operation_1.defineAspects)(UpdateManyOperation, [
    operation_1.Aspect.WRITE_OPERATION,
    operation_1.Aspect.EXPLAINABLE,
    operation_1.Aspect.SKIP_COLLATION,
    operation_1.Aspect.SUPPORTS_RAW_DATA
  ]);
  (0, operation_1.defineAspects)(ReplaceOneOperation, [
    operation_1.Aspect.RETRYABLE,
    operation_1.Aspect.WRITE_OPERATION,
    operation_1.Aspect.SKIP_COLLATION,
    operation_1.Aspect.SUPPORTS_RAW_DATA
  ]);
  return update$1;
}
var hasRequiredCommon;
function requireCommon() {
  if (hasRequiredCommon) return common$1;
  hasRequiredCommon = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BulkOperationBase = exports.FindOperators = exports.MongoBulkWriteError = exports.WriteError = exports.WriteConcernError = exports.BulkWriteResult = exports.Batch = exports.BatchType = void 0;
    exports.mergeBatchResults = mergeBatchResults;
    const bson_1 = requireBson();
    const error_1 = requireError();
    const delete_1 = require_delete();
    const execute_operation_1 = requireExecute_operation();
    const insert_1 = requireInsert();
    const update_1 = requireUpdate$1();
    const timeout_1 = requireTimeout();
    const utils_1 = requireUtils();
    const write_concern_1 = requireWrite_concern();
    exports.BatchType = Object.freeze({
      INSERT: 1,
      UPDATE: 2,
      DELETE: 3
    });
    class Batch {
      constructor(batchType, originalZeroIndex) {
        this.originalZeroIndex = originalZeroIndex;
        this.currentIndex = 0;
        this.originalIndexes = [];
        this.batchType = batchType;
        this.operations = [];
        this.size = 0;
        this.sizeBytes = 0;
      }
    }
    exports.Batch = Batch;
    class BulkWriteResult {
      static generateIdMap(ids) {
        const idMap = {};
        for (const doc of ids) {
          idMap[doc.index] = doc._id;
        }
        return idMap;
      }
      /**
       * Create a new BulkWriteResult instance
       * @internal
       */
      constructor(bulkResult, isOrdered) {
        this.result = bulkResult;
        this.insertedCount = this.result.nInserted ?? 0;
        this.matchedCount = this.result.nMatched ?? 0;
        this.modifiedCount = this.result.nModified ?? 0;
        this.deletedCount = this.result.nRemoved ?? 0;
        this.upsertedCount = this.result.upserted.length ?? 0;
        this.upsertedIds = BulkWriteResult.generateIdMap(this.result.upserted);
        this.insertedIds = BulkWriteResult.generateIdMap(this.getSuccessfullyInsertedIds(bulkResult, isOrdered));
        Object.defineProperty(this, "result", { value: this.result, enumerable: false });
      }
      /** Evaluates to true if the bulk operation correctly executes */
      get ok() {
        return this.result.ok;
      }
      /**
       * Returns document_ids that were actually inserted
       * @internal
       */
      getSuccessfullyInsertedIds(bulkResult, isOrdered) {
        if (bulkResult.writeErrors.length === 0)
          return bulkResult.insertedIds;
        if (isOrdered) {
          return bulkResult.insertedIds.slice(0, bulkResult.writeErrors[0].index);
        }
        return bulkResult.insertedIds.filter(({ index }) => !bulkResult.writeErrors.some((writeError) => index === writeError.index));
      }
      /** Returns the upserted id at the given index */
      getUpsertedIdAt(index) {
        return this.result.upserted[index];
      }
      /** Returns raw internal result */
      getRawResponse() {
        return this.result;
      }
      /** Returns true if the bulk operation contains a write error */
      hasWriteErrors() {
        return this.result.writeErrors.length > 0;
      }
      /** Returns the number of write errors from the bulk operation */
      getWriteErrorCount() {
        return this.result.writeErrors.length;
      }
      /** Returns a specific write error object */
      getWriteErrorAt(index) {
        return index < this.result.writeErrors.length ? this.result.writeErrors[index] : void 0;
      }
      /** Retrieve all write errors */
      getWriteErrors() {
        return this.result.writeErrors;
      }
      /** Retrieve the write concern error if one exists */
      getWriteConcernError() {
        if (this.result.writeConcernErrors.length === 0) {
          return;
        } else if (this.result.writeConcernErrors.length === 1) {
          return this.result.writeConcernErrors[0];
        } else {
          let errmsg = "";
          for (let i = 0; i < this.result.writeConcernErrors.length; i++) {
            const err = this.result.writeConcernErrors[i];
            errmsg = errmsg + err.errmsg;
            if (i === 0)
              errmsg = errmsg + " and ";
          }
          return new WriteConcernError({ errmsg, code: error_1.MONGODB_ERROR_CODES.WriteConcernTimeout });
        }
      }
      toString() {
        return `BulkWriteResult(${bson_1.EJSON.stringify(this.result)})`;
      }
      isOk() {
        return this.result.ok === 1;
      }
    }
    exports.BulkWriteResult = BulkWriteResult;
    class WriteConcernError {
      constructor(error2) {
        this.serverError = error2;
      }
      /** Write concern error code. */
      get code() {
        return this.serverError.code;
      }
      /** Write concern error message. */
      get errmsg() {
        return this.serverError.errmsg;
      }
      /** Write concern error info. */
      get errInfo() {
        return this.serverError.errInfo;
      }
      toJSON() {
        return this.serverError;
      }
      toString() {
        return `WriteConcernError(${this.errmsg})`;
      }
    }
    exports.WriteConcernError = WriteConcernError;
    class WriteError {
      constructor(err) {
        this.err = err;
      }
      /** WriteError code. */
      get code() {
        return this.err.code;
      }
      /** WriteError original bulk operation index. */
      get index() {
        return this.err.index;
      }
      /** WriteError message. */
      get errmsg() {
        return this.err.errmsg;
      }
      /** WriteError details. */
      get errInfo() {
        return this.err.errInfo;
      }
      /** Returns the underlying operation that caused the error */
      getOperation() {
        return this.err.op;
      }
      toJSON() {
        return { code: this.err.code, index: this.err.index, errmsg: this.err.errmsg, op: this.err.op };
      }
      toString() {
        return `WriteError(${JSON.stringify(this.toJSON())})`;
      }
    }
    exports.WriteError = WriteError;
    function mergeBatchResults(batch, bulkResult, err, result) {
      if (err) {
        result = err;
      } else if (result && result.result) {
        result = result.result;
      }
      if (result == null) {
        return;
      }
      if (result.ok === 0 && bulkResult.ok === 1) {
        bulkResult.ok = 0;
        const writeError = {
          index: 0,
          code: result.code || 0,
          errmsg: result.message,
          errInfo: result.errInfo,
          op: batch.operations[0]
        };
        bulkResult.writeErrors.push(new WriteError(writeError));
        return;
      } else if (result.ok === 0 && bulkResult.ok === 0) {
        return;
      }
      if (isInsertBatch(batch) && result.n) {
        bulkResult.nInserted = bulkResult.nInserted + result.n;
      }
      if (isDeleteBatch(batch) && result.n) {
        bulkResult.nRemoved = bulkResult.nRemoved + result.n;
      }
      let nUpserted = 0;
      if (Array.isArray(result.upserted)) {
        nUpserted = result.upserted.length;
        for (let i = 0; i < result.upserted.length; i++) {
          bulkResult.upserted.push({
            index: result.upserted[i].index + batch.originalZeroIndex,
            _id: result.upserted[i]._id
          });
        }
      } else if (result.upserted) {
        nUpserted = 1;
        bulkResult.upserted.push({
          index: batch.originalZeroIndex,
          _id: result.upserted
        });
      }
      if (isUpdateBatch(batch) && result.n) {
        const nModified = result.nModified;
        bulkResult.nUpserted = bulkResult.nUpserted + nUpserted;
        bulkResult.nMatched = bulkResult.nMatched + (result.n - nUpserted);
        if (typeof nModified === "number") {
          bulkResult.nModified = bulkResult.nModified + nModified;
        } else {
          bulkResult.nModified = 0;
        }
      }
      if (Array.isArray(result.writeErrors)) {
        for (let i = 0; i < result.writeErrors.length; i++) {
          const writeError = {
            index: batch.originalIndexes[result.writeErrors[i].index],
            code: result.writeErrors[i].code,
            errmsg: result.writeErrors[i].errmsg,
            errInfo: result.writeErrors[i].errInfo,
            op: batch.operations[result.writeErrors[i].index]
          };
          bulkResult.writeErrors.push(new WriteError(writeError));
        }
      }
      if (result.writeConcernError) {
        bulkResult.writeConcernErrors.push(new WriteConcernError(result.writeConcernError));
      }
    }
    async function executeCommands(bulkOperation, options) {
      if (bulkOperation.s.batches.length === 0) {
        return new BulkWriteResult(bulkOperation.s.bulkResult, bulkOperation.isOrdered);
      }
      for (const batch of bulkOperation.s.batches) {
        const finalOptions = (0, utils_1.resolveOptions)(bulkOperation, {
          ...options,
          ordered: bulkOperation.isOrdered
        });
        if (finalOptions.bypassDocumentValidation !== true) {
          delete finalOptions.bypassDocumentValidation;
        }
        if (bulkOperation.s.bypassDocumentValidation === true) {
          finalOptions.bypassDocumentValidation = true;
        }
        if (bulkOperation.s.checkKeys === false) {
          finalOptions.checkKeys = false;
        }
        if (bulkOperation.retryWrites) {
          if (isUpdateBatch(batch)) {
            bulkOperation.retryWrites = bulkOperation.retryWrites && !batch.operations.some((op) => op.multi);
          }
          if (isDeleteBatch(batch)) {
            bulkOperation.retryWrites = bulkOperation.retryWrites && !batch.operations.some((op) => op.limit === 0);
          }
        }
        const operation2 = isInsertBatch(batch) ? new insert_1.InsertOperation(bulkOperation.s.namespace, batch.operations, finalOptions) : isUpdateBatch(batch) ? new update_1.UpdateOperation(bulkOperation.s.namespace, batch.operations, finalOptions) : isDeleteBatch(batch) ? new delete_1.DeleteOperation(bulkOperation.s.namespace, batch.operations, finalOptions) : null;
        if (operation2 == null)
          throw new error_1.MongoRuntimeError(`Unknown batchType: ${batch.batchType}`);
        let thrownError = null;
        let result;
        try {
          result = await (0, execute_operation_1.executeOperation)(bulkOperation.s.collection.client, operation2, finalOptions.timeoutContext);
        } catch (error2) {
          thrownError = error2;
        }
        if (thrownError != null) {
          if (thrownError instanceof error_1.MongoWriteConcernError) {
            mergeBatchResults(batch, bulkOperation.s.bulkResult, thrownError, result);
            const writeResult3 = new BulkWriteResult(bulkOperation.s.bulkResult, bulkOperation.isOrdered);
            throw new MongoBulkWriteError({
              message: thrownError.result.writeConcernError.errmsg,
              code: thrownError.result.writeConcernError.code
            }, writeResult3);
          } else {
            throw new MongoBulkWriteError(thrownError, new BulkWriteResult(bulkOperation.s.bulkResult, bulkOperation.isOrdered));
          }
        }
        mergeBatchResults(batch, bulkOperation.s.bulkResult, thrownError, result);
        const writeResult2 = new BulkWriteResult(bulkOperation.s.bulkResult, bulkOperation.isOrdered);
        bulkOperation.handleWriteError(writeResult2);
      }
      bulkOperation.s.batches.length = 0;
      const writeResult = new BulkWriteResult(bulkOperation.s.bulkResult, bulkOperation.isOrdered);
      bulkOperation.handleWriteError(writeResult);
      return writeResult;
    }
    class MongoBulkWriteError extends error_1.MongoServerError {
      /**
       * **Do not use this constructor!**
       *
       * Meant for internal use only.
       *
       * @remarks
       * This class is only meant to be constructed within the driver. This constructor is
       * not subject to semantic versioning compatibility guarantees and may change at any time.
       *
       * @public
       **/
      constructor(error2, result) {
        super(error2);
        this.writeErrors = [];
        if (error2 instanceof WriteConcernError)
          this.err = error2;
        else if (!(error2 instanceof Error)) {
          this.message = error2.message;
          this.code = error2.code;
          this.writeErrors = error2.writeErrors ?? [];
        }
        this.result = result;
        Object.assign(this, error2);
      }
      get name() {
        return "MongoBulkWriteError";
      }
      /** Number of documents inserted. */
      get insertedCount() {
        return this.result.insertedCount;
      }
      /** Number of documents matched for update. */
      get matchedCount() {
        return this.result.matchedCount;
      }
      /** Number of documents modified. */
      get modifiedCount() {
        return this.result.modifiedCount;
      }
      /** Number of documents deleted. */
      get deletedCount() {
        return this.result.deletedCount;
      }
      /** Number of documents upserted. */
      get upsertedCount() {
        return this.result.upsertedCount;
      }
      /** Inserted document generated Id's, hash key is the index of the originating operation */
      get insertedIds() {
        return this.result.insertedIds;
      }
      /** Upserted document generated Id's, hash key is the index of the originating operation */
      get upsertedIds() {
        return this.result.upsertedIds;
      }
    }
    exports.MongoBulkWriteError = MongoBulkWriteError;
    class FindOperators {
      /**
       * Creates a new FindOperators object.
       * @internal
       */
      constructor(bulkOperation) {
        this.bulkOperation = bulkOperation;
      }
      /** Add a multiple update operation to the bulk operation */
      update(updateDocument) {
        const currentOp = buildCurrentOp(this.bulkOperation);
        return this.bulkOperation.addToOperationsList(exports.BatchType.UPDATE, (0, update_1.makeUpdateStatement)(currentOp.selector, updateDocument, {
          ...currentOp,
          multi: true
        }));
      }
      /** Add a single update operation to the bulk operation */
      updateOne(updateDocument) {
        if (!(0, utils_1.hasAtomicOperators)(updateDocument, this.bulkOperation.bsonOptions)) {
          throw new error_1.MongoInvalidArgumentError("Update document requires atomic operators");
        }
        const currentOp = buildCurrentOp(this.bulkOperation);
        return this.bulkOperation.addToOperationsList(exports.BatchType.UPDATE, (0, update_1.makeUpdateStatement)(currentOp.selector, updateDocument, { ...currentOp, multi: false }));
      }
      /** Add a replace one operation to the bulk operation */
      replaceOne(replacement) {
        if ((0, utils_1.hasAtomicOperators)(replacement)) {
          throw new error_1.MongoInvalidArgumentError("Replacement document must not use atomic operators");
        }
        const currentOp = buildCurrentOp(this.bulkOperation);
        return this.bulkOperation.addToOperationsList(exports.BatchType.UPDATE, (0, update_1.makeUpdateStatement)(currentOp.selector, replacement, { ...currentOp, multi: false }));
      }
      /** Add a delete one operation to the bulk operation */
      deleteOne() {
        const currentOp = buildCurrentOp(this.bulkOperation);
        return this.bulkOperation.addToOperationsList(exports.BatchType.DELETE, (0, delete_1.makeDeleteStatement)(currentOp.selector, { ...currentOp, limit: 1 }));
      }
      /** Add a delete many operation to the bulk operation */
      delete() {
        const currentOp = buildCurrentOp(this.bulkOperation);
        return this.bulkOperation.addToOperationsList(exports.BatchType.DELETE, (0, delete_1.makeDeleteStatement)(currentOp.selector, { ...currentOp, limit: 0 }));
      }
      /** Upsert modifier for update bulk operation, noting that this operation is an upsert. */
      upsert() {
        if (!this.bulkOperation.s.currentOp) {
          this.bulkOperation.s.currentOp = {};
        }
        this.bulkOperation.s.currentOp.upsert = true;
        return this;
      }
      /** Specifies the collation for the query condition. */
      collation(collation) {
        if (!this.bulkOperation.s.currentOp) {
          this.bulkOperation.s.currentOp = {};
        }
        this.bulkOperation.s.currentOp.collation = collation;
        return this;
      }
      /** Specifies arrayFilters for UpdateOne or UpdateMany bulk operations. */
      arrayFilters(arrayFilters) {
        if (!this.bulkOperation.s.currentOp) {
          this.bulkOperation.s.currentOp = {};
        }
        this.bulkOperation.s.currentOp.arrayFilters = arrayFilters;
        return this;
      }
      /** Specifies hint for the bulk operation. */
      hint(hint) {
        if (!this.bulkOperation.s.currentOp) {
          this.bulkOperation.s.currentOp = {};
        }
        this.bulkOperation.s.currentOp.hint = hint;
        return this;
      }
    }
    exports.FindOperators = FindOperators;
    class BulkOperationBase {
      /**
       * Create a new OrderedBulkOperation or UnorderedBulkOperation instance
       * @internal
       */
      constructor(collection2, options, isOrdered) {
        this.collection = collection2;
        this.retryWrites = collection2.db.options?.retryWrites;
        this.isOrdered = isOrdered;
        const topology2 = (0, utils_1.getTopology)(collection2);
        options = options == null ? {} : options;
        const namespace = collection2.s.namespace;
        const executed = false;
        const currentOp = void 0;
        const hello = topology2.lastHello();
        const usingAutoEncryption = !!(topology2.s.options && topology2.s.options.autoEncrypter);
        const maxBsonObjectSize = hello && hello.maxBsonObjectSize ? hello.maxBsonObjectSize : 1024 * 1024 * 16;
        const maxBatchSizeBytes = usingAutoEncryption ? 1024 * 1024 * 2 : maxBsonObjectSize;
        const maxWriteBatchSize = hello && hello.maxWriteBatchSize ? hello.maxWriteBatchSize : 1e3;
        const maxKeySize = (maxWriteBatchSize - 1).toString(10).length + 2;
        const bulkResult = {
          ok: 1,
          writeErrors: [],
          writeConcernErrors: [],
          insertedIds: [],
          nInserted: 0,
          nUpserted: 0,
          nMatched: 0,
          nModified: 0,
          nRemoved: 0,
          upserted: []
        };
        this.s = {
          // Final result
          bulkResult,
          // Current batch state
          currentBatch: void 0,
          currentIndex: 0,
          // ordered specific
          currentBatchSize: 0,
          currentBatchSizeBytes: 0,
          // unordered specific
          currentInsertBatch: void 0,
          currentUpdateBatch: void 0,
          currentRemoveBatch: void 0,
          batches: [],
          // Write concern
          writeConcern: write_concern_1.WriteConcern.fromOptions(options),
          // Max batch size options
          maxBsonObjectSize,
          maxBatchSizeBytes,
          maxWriteBatchSize,
          maxKeySize,
          // Namespace
          namespace,
          // Topology
          topology: topology2,
          // Options
          options,
          // BSON options
          bsonOptions: (0, bson_1.resolveBSONOptions)(options),
          // Current operation
          currentOp,
          // Executed
          executed,
          // Collection
          collection: collection2,
          // Fundamental error
          err: void 0,
          // check keys
          checkKeys: typeof options.checkKeys === "boolean" ? options.checkKeys : false
        };
        if (options.bypassDocumentValidation === true) {
          this.s.bypassDocumentValidation = true;
        }
      }
      /**
       * Add a single insert document to the bulk operation
       *
       * @example
       * ```ts
       * const bulkOp = collection.initializeOrderedBulkOp();
       *
       * // Adds three inserts to the bulkOp.
       * bulkOp
       *   .insert({ a: 1 })
       *   .insert({ b: 2 })
       *   .insert({ c: 3 });
       * await bulkOp.execute();
       * ```
       */
      insert(document2) {
        (0, utils_1.maybeAddIdToDocuments)(this.collection, document2, {
          forceServerObjectId: this.shouldForceServerObjectId()
        });
        return this.addToOperationsList(exports.BatchType.INSERT, document2);
      }
      /**
       * Builds a find operation for an update/updateOne/delete/deleteOne/replaceOne.
       * Returns a builder object used to complete the definition of the operation.
       *
       * @example
       * ```ts
       * const bulkOp = collection.initializeOrderedBulkOp();
       *
       * // Add an updateOne to the bulkOp
       * bulkOp.find({ a: 1 }).updateOne({ $set: { b: 2 } });
       *
       * // Add an updateMany to the bulkOp
       * bulkOp.find({ c: 3 }).update({ $set: { d: 4 } });
       *
       * // Add an upsert
       * bulkOp.find({ e: 5 }).upsert().updateOne({ $set: { f: 6 } });
       *
       * // Add a deletion
       * bulkOp.find({ g: 7 }).deleteOne();
       *
       * // Add a multi deletion
       * bulkOp.find({ h: 8 }).delete();
       *
       * // Add a replaceOne
       * bulkOp.find({ i: 9 }).replaceOne({writeConcern: { j: 10 }});
       *
       * // Update using a pipeline (requires Mongodb 4.2 or higher)
       * bulk.find({ k: 11, y: { $exists: true }, z: { $exists: true } }).updateOne([
       *   { $set: { total: { $sum: [ '$y', '$z' ] } } }
       * ]);
       *
       * // All of the ops will now be executed
       * await bulkOp.execute();
       * ```
       */
      find(selector) {
        if (!selector) {
          throw new error_1.MongoInvalidArgumentError("Bulk find operation must specify a selector");
        }
        this.s.currentOp = {
          selector
        };
        return new FindOperators(this);
      }
      /** Specifies a raw operation to perform in the bulk write. */
      raw(op) {
        if (op == null || typeof op !== "object") {
          throw new error_1.MongoInvalidArgumentError("Operation must be an object with an operation key");
        }
        if ("insertOne" in op) {
          const forceServerObjectId = this.shouldForceServerObjectId();
          const document2 = op.insertOne && op.insertOne.document == null ? (
            // TODO(NODE-6003): remove support for omitting the `documents` subdocument in bulk inserts
            op.insertOne
          ) : op.insertOne.document;
          (0, utils_1.maybeAddIdToDocuments)(this.collection, document2, { forceServerObjectId });
          return this.addToOperationsList(exports.BatchType.INSERT, document2);
        }
        if ("replaceOne" in op || "updateOne" in op || "updateMany" in op) {
          if ("replaceOne" in op) {
            if ("q" in op.replaceOne) {
              throw new error_1.MongoInvalidArgumentError("Raw operations are not allowed");
            }
            const updateStatement = (0, update_1.makeUpdateStatement)(op.replaceOne.filter, op.replaceOne.replacement, { ...op.replaceOne, multi: false });
            if ((0, utils_1.hasAtomicOperators)(updateStatement.u)) {
              throw new error_1.MongoInvalidArgumentError("Replacement document must not use atomic operators");
            }
            return this.addToOperationsList(exports.BatchType.UPDATE, updateStatement);
          }
          if ("updateOne" in op) {
            if ("q" in op.updateOne) {
              throw new error_1.MongoInvalidArgumentError("Raw operations are not allowed");
            }
            const updateStatement = (0, update_1.makeUpdateStatement)(op.updateOne.filter, op.updateOne.update, {
              ...op.updateOne,
              multi: false
            });
            if (!(0, utils_1.hasAtomicOperators)(updateStatement.u, this.bsonOptions)) {
              throw new error_1.MongoInvalidArgumentError("Update document requires atomic operators");
            }
            return this.addToOperationsList(exports.BatchType.UPDATE, updateStatement);
          }
          if ("updateMany" in op) {
            if ("q" in op.updateMany) {
              throw new error_1.MongoInvalidArgumentError("Raw operations are not allowed");
            }
            const updateStatement = (0, update_1.makeUpdateStatement)(op.updateMany.filter, op.updateMany.update, {
              ...op.updateMany,
              multi: true
            });
            if (!(0, utils_1.hasAtomicOperators)(updateStatement.u, this.bsonOptions)) {
              throw new error_1.MongoInvalidArgumentError("Update document requires atomic operators");
            }
            return this.addToOperationsList(exports.BatchType.UPDATE, updateStatement);
          }
        }
        if ("deleteOne" in op) {
          if ("q" in op.deleteOne) {
            throw new error_1.MongoInvalidArgumentError("Raw operations are not allowed");
          }
          return this.addToOperationsList(exports.BatchType.DELETE, (0, delete_1.makeDeleteStatement)(op.deleteOne.filter, { ...op.deleteOne, limit: 1 }));
        }
        if ("deleteMany" in op) {
          if ("q" in op.deleteMany) {
            throw new error_1.MongoInvalidArgumentError("Raw operations are not allowed");
          }
          return this.addToOperationsList(exports.BatchType.DELETE, (0, delete_1.makeDeleteStatement)(op.deleteMany.filter, { ...op.deleteMany, limit: 0 }));
        }
        throw new error_1.MongoInvalidArgumentError("bulkWrite only supports insertOne, updateOne, updateMany, deleteOne, deleteMany");
      }
      get length() {
        return this.s.currentIndex;
      }
      get bsonOptions() {
        return this.s.bsonOptions;
      }
      get writeConcern() {
        return this.s.writeConcern;
      }
      get batches() {
        const batches = [...this.s.batches];
        if (this.isOrdered) {
          if (this.s.currentBatch)
            batches.push(this.s.currentBatch);
        } else {
          if (this.s.currentInsertBatch)
            batches.push(this.s.currentInsertBatch);
          if (this.s.currentUpdateBatch)
            batches.push(this.s.currentUpdateBatch);
          if (this.s.currentRemoveBatch)
            batches.push(this.s.currentRemoveBatch);
        }
        return batches;
      }
      async execute(options = {}) {
        if (this.s.executed) {
          throw new error_1.MongoBatchReExecutionError();
        }
        const writeConcern = write_concern_1.WriteConcern.fromOptions(options);
        if (writeConcern) {
          this.s.writeConcern = writeConcern;
        }
        if (this.isOrdered) {
          if (this.s.currentBatch)
            this.s.batches.push(this.s.currentBatch);
        } else {
          if (this.s.currentInsertBatch)
            this.s.batches.push(this.s.currentInsertBatch);
          if (this.s.currentUpdateBatch)
            this.s.batches.push(this.s.currentUpdateBatch);
          if (this.s.currentRemoveBatch)
            this.s.batches.push(this.s.currentRemoveBatch);
        }
        if (this.s.batches.length === 0) {
          throw new error_1.MongoInvalidArgumentError("Invalid BulkOperation, Batch cannot be empty");
        }
        this.s.executed = true;
        const finalOptions = (0, utils_1.resolveOptions)(this.collection, { ...this.s.options, ...options });
        finalOptions.timeoutContext ??= timeout_1.TimeoutContext.create({
          session: finalOptions.session,
          timeoutMS: finalOptions.timeoutMS,
          serverSelectionTimeoutMS: this.collection.client.s.options.serverSelectionTimeoutMS,
          waitQueueTimeoutMS: this.collection.client.s.options.waitQueueTimeoutMS
        });
        if (finalOptions.session == null) {
          return await this.collection.client.withSession({ explicit: false }, async (session) => {
            return await executeCommands(this, { ...finalOptions, session });
          });
        }
        return await executeCommands(this, { ...finalOptions });
      }
      /**
       * Handles the write error before executing commands
       * @internal
       */
      handleWriteError(writeResult) {
        if (this.s.bulkResult.writeErrors.length > 0) {
          const msg = this.s.bulkResult.writeErrors[0].errmsg ? this.s.bulkResult.writeErrors[0].errmsg : "write operation failed";
          throw new MongoBulkWriteError({
            message: msg,
            code: this.s.bulkResult.writeErrors[0].code,
            writeErrors: this.s.bulkResult.writeErrors
          }, writeResult);
        }
        const writeConcernError = writeResult.getWriteConcernError();
        if (writeConcernError) {
          throw new MongoBulkWriteError(writeConcernError, writeResult);
        }
      }
      shouldForceServerObjectId() {
        return this.s.options.forceServerObjectId === true || this.s.collection.db.options?.forceServerObjectId === true;
      }
    }
    exports.BulkOperationBase = BulkOperationBase;
    function isInsertBatch(batch) {
      return batch.batchType === exports.BatchType.INSERT;
    }
    function isUpdateBatch(batch) {
      return batch.batchType === exports.BatchType.UPDATE;
    }
    function isDeleteBatch(batch) {
      return batch.batchType === exports.BatchType.DELETE;
    }
    function buildCurrentOp(bulkOp) {
      let { currentOp } = bulkOp.s;
      bulkOp.s.currentOp = void 0;
      if (!currentOp)
        currentOp = {};
      return currentOp;
    }
  })(common$1);
  return common$1;
}
var lib = {};
var admin = {};
var list_databases = {};
var hasRequiredList_databases;
function requireList_databases() {
  if (hasRequiredList_databases) return list_databases;
  hasRequiredList_databases = 1;
  Object.defineProperty(list_databases, "__esModule", { value: true });
  list_databases.ListDatabasesOperation = void 0;
  const responses_1 = requireResponses();
  const utils_1 = requireUtils();
  const command_1 = requireCommand();
  const operation_1 = requireOperation();
  class ListDatabasesOperation extends command_1.CommandOperation {
    constructor(db2, options) {
      super(db2, options);
      this.SERVER_COMMAND_RESPONSE_TYPE = responses_1.MongoDBResponse;
      this.options = options ?? {};
      this.ns = new utils_1.MongoDBNamespace("admin", "$cmd");
    }
    get commandName() {
      return "listDatabases";
    }
    buildCommandDocument(connection2, _session) {
      const cmd = { listDatabases: 1 };
      if (typeof this.options.nameOnly === "boolean") {
        cmd.nameOnly = this.options.nameOnly;
      }
      if (this.options.filter) {
        cmd.filter = this.options.filter;
      }
      if (typeof this.options.authorizedDatabases === "boolean") {
        cmd.authorizedDatabases = this.options.authorizedDatabases;
      }
      if ((0, utils_1.maxWireVersion)(connection2) >= 9 && this.options.comment !== void 0) {
        cmd.comment = this.options.comment;
      }
      return cmd;
    }
  }
  list_databases.ListDatabasesOperation = ListDatabasesOperation;
  (0, operation_1.defineAspects)(ListDatabasesOperation, [operation_1.Aspect.READ_OPERATION, operation_1.Aspect.RETRYABLE]);
  return list_databases;
}
var remove_user = {};
var hasRequiredRemove_user;
function requireRemove_user() {
  if (hasRequiredRemove_user) return remove_user;
  hasRequiredRemove_user = 1;
  Object.defineProperty(remove_user, "__esModule", { value: true });
  remove_user.RemoveUserOperation = void 0;
  const responses_1 = requireResponses();
  const command_1 = requireCommand();
  const operation_1 = requireOperation();
  class RemoveUserOperation extends command_1.CommandOperation {
    constructor(db2, username, options) {
      super(db2, options);
      this.SERVER_COMMAND_RESPONSE_TYPE = responses_1.MongoDBResponse;
      this.options = options;
      this.username = username;
    }
    get commandName() {
      return "dropUser";
    }
    buildCommandDocument(_connection) {
      return { dropUser: this.username };
    }
    handleOk(_response) {
      return true;
    }
  }
  remove_user.RemoveUserOperation = RemoveUserOperation;
  (0, operation_1.defineAspects)(RemoveUserOperation, [operation_1.Aspect.WRITE_OPERATION]);
  return remove_user;
}
var validate_collection = {};
var hasRequiredValidate_collection;
function requireValidate_collection() {
  if (hasRequiredValidate_collection) return validate_collection;
  hasRequiredValidate_collection = 1;
  Object.defineProperty(validate_collection, "__esModule", { value: true });
  validate_collection.ValidateCollectionOperation = void 0;
  const responses_1 = requireResponses();
  const error_1 = requireError();
  const command_1 = requireCommand();
  class ValidateCollectionOperation extends command_1.CommandOperation {
    constructor(admin2, collectionName, options) {
      super(admin2.s.db, options);
      this.SERVER_COMMAND_RESPONSE_TYPE = responses_1.MongoDBResponse;
      this.options = options;
      this.collectionName = collectionName;
    }
    get commandName() {
      return "validate";
    }
    buildCommandDocument(_connection, _session) {
      return {
        validate: this.collectionName,
        ...Object.fromEntries(Object.entries(this.options).filter((entry) => entry[0] !== "session"))
      };
    }
    handleOk(response) {
      const result = super.handleOk(response);
      if (result.result != null && typeof result.result !== "string")
        throw new error_1.MongoUnexpectedServerResponseError("Error with validation data");
      if (result.result != null && result.result.match(/exception|corrupt/) != null)
        throw new error_1.MongoUnexpectedServerResponseError(`Invalid collection ${this.collectionName}`);
      if (result.valid != null && !result.valid)
        throw new error_1.MongoUnexpectedServerResponseError(`Invalid collection ${this.collectionName}`);
      return response;
    }
  }
  validate_collection.ValidateCollectionOperation = ValidateCollectionOperation;
  return validate_collection;
}
var hasRequiredAdmin;
function requireAdmin() {
  if (hasRequiredAdmin) return admin;
  hasRequiredAdmin = 1;
  Object.defineProperty(admin, "__esModule", { value: true });
  admin.Admin = void 0;
  const bson_1 = requireBson();
  const execute_operation_1 = requireExecute_operation();
  const list_databases_1 = requireList_databases();
  const remove_user_1 = requireRemove_user();
  const run_command_1 = requireRun_command();
  const validate_collection_1 = requireValidate_collection();
  const utils_1 = requireUtils();
  class Admin {
    /**
     * Create a new Admin instance
     * @internal
     */
    constructor(db2) {
      this.s = { db: db2 };
    }
    /**
     * Execute a command
     *
     * The driver will ensure the following fields are attached to the command sent to the server:
     * - `lsid` - sourced from an implicit session or options.session
     * - `$readPreference` - defaults to primary or can be configured by options.readPreference
     * - `$db` - sourced from the name of this database
     *
     * If the client has a serverApi setting:
     * - `apiVersion`
     * - `apiStrict`
     * - `apiDeprecationErrors`
     *
     * When in a transaction:
     * - `readConcern` - sourced from readConcern set on the TransactionOptions
     * - `writeConcern` - sourced from writeConcern set on the TransactionOptions
     *
     * Attaching any of the above fields to the command will have no effect as the driver will overwrite the value.
     *
     * @param command - The command to execute
     * @param options - Optional settings for the command
     */
    async command(command2, options) {
      return await (0, execute_operation_1.executeOperation)(this.s.db.client, new run_command_1.RunCommandOperation(new utils_1.MongoDBNamespace("admin"), command2, {
        ...(0, bson_1.resolveBSONOptions)(options),
        session: options?.session,
        readPreference: options?.readPreference,
        timeoutMS: options?.timeoutMS ?? this.s.db.timeoutMS
      }));
    }
    /**
     * Retrieve the server build information
     *
     * @param options - Optional settings for the command
     */
    async buildInfo(options) {
      return await this.command({ buildinfo: 1 }, options);
    }
    /**
     * Retrieve the server build information
     *
     * @param options - Optional settings for the command
     */
    async serverInfo(options) {
      return await this.command({ buildinfo: 1 }, options);
    }
    /**
     * Retrieve this db's server status.
     *
     * @param options - Optional settings for the command
     */
    async serverStatus(options) {
      return await this.command({ serverStatus: 1 }, options);
    }
    /**
     * Ping the MongoDB server and retrieve results
     *
     * @param options - Optional settings for the command
     */
    async ping(options) {
      return await this.command({ ping: 1 }, options);
    }
    /**
     * Remove a user from a database
     *
     * @param username - The username to remove
     * @param options - Optional settings for the command
     */
    async removeUser(username, options) {
      return await (0, execute_operation_1.executeOperation)(this.s.db.client, new remove_user_1.RemoveUserOperation(this.s.db, username, { dbName: "admin", ...options }));
    }
    /**
     * Validate an existing collection
     *
     * @param collectionName - The name of the collection to validate.
     * @param options - Optional settings for the command
     */
    async validateCollection(collectionName, options = {}) {
      return await (0, execute_operation_1.executeOperation)(this.s.db.client, new validate_collection_1.ValidateCollectionOperation(this, collectionName, options));
    }
    /**
     * List the available databases
     *
     * @param options - Optional settings for the command
     */
    async listDatabases(options) {
      return await (0, execute_operation_1.executeOperation)(this.s.db.client, new list_databases_1.ListDatabasesOperation(this.s.db, { timeoutMS: this.s.db.timeoutMS, ...options }));
    }
    /**
     * Get ReplicaSet status
     *
     * @param options - Optional settings for the command
     */
    async replSetGetStatus(options) {
      return await this.command({ replSetGetStatus: 1 }, options);
    }
  }
  admin.Admin = Admin;
  return admin;
}
var ordered = {};
var hasRequiredOrdered;
function requireOrdered() {
  if (hasRequiredOrdered) return ordered;
  hasRequiredOrdered = 1;
  Object.defineProperty(ordered, "__esModule", { value: true });
  ordered.OrderedBulkOperation = void 0;
  const BSON = requireBson();
  const error_1 = requireError();
  const common_1 = requireCommon();
  class OrderedBulkOperation extends common_1.BulkOperationBase {
    /** @internal */
    constructor(collection2, options) {
      super(collection2, options, true);
    }
    addToOperationsList(batchType, document2) {
      const bsonSize = BSON.calculateObjectSize(document2, {
        checkKeys: false,
        // Since we don't know what the user selected for BSON options here,
        // err on the safe side, and check the size with ignoreUndefined: false.
        ignoreUndefined: false
      });
      if (bsonSize >= this.s.maxBsonObjectSize)
        throw new error_1.MongoInvalidArgumentError(`Document is larger than the maximum size ${this.s.maxBsonObjectSize}`);
      if (this.s.currentBatch == null) {
        this.s.currentBatch = new common_1.Batch(batchType, this.s.currentIndex);
      }
      const maxKeySize = this.s.maxKeySize;
      if (
        // New batch if we exceed the max batch op size
        this.s.currentBatchSize + 1 >= this.s.maxWriteBatchSize || // New batch if we exceed the maxBatchSizeBytes. Only matters if batch already has a doc,
        // since we can't sent an empty batch
        this.s.currentBatchSize > 0 && this.s.currentBatchSizeBytes + maxKeySize + bsonSize >= this.s.maxBatchSizeBytes || // New batch if the new op does not have the same op type as the current batch
        this.s.currentBatch.batchType !== batchType
      ) {
        this.s.batches.push(this.s.currentBatch);
        this.s.currentBatch = new common_1.Batch(batchType, this.s.currentIndex);
        this.s.currentBatchSize = 0;
        this.s.currentBatchSizeBytes = 0;
      }
      if (batchType === common_1.BatchType.INSERT) {
        this.s.bulkResult.insertedIds.push({
          index: this.s.currentIndex,
          _id: document2._id
        });
      }
      if (Array.isArray(document2)) {
        throw new error_1.MongoInvalidArgumentError("Operation passed in cannot be an Array");
      }
      this.s.currentBatch.originalIndexes.push(this.s.currentIndex);
      this.s.currentBatch.operations.push(document2);
      this.s.currentBatchSize += 1;
      this.s.currentBatchSizeBytes += maxKeySize + bsonSize;
      this.s.currentIndex += 1;
      return this;
    }
  }
  ordered.OrderedBulkOperation = OrderedBulkOperation;
  return ordered;
}
var unordered = {};
var hasRequiredUnordered;
function requireUnordered() {
  if (hasRequiredUnordered) return unordered;
  hasRequiredUnordered = 1;
  Object.defineProperty(unordered, "__esModule", { value: true });
  unordered.UnorderedBulkOperation = void 0;
  const BSON = requireBson();
  const error_1 = requireError();
  const common_1 = requireCommon();
  class UnorderedBulkOperation extends common_1.BulkOperationBase {
    /** @internal */
    constructor(collection2, options) {
      super(collection2, options, false);
    }
    handleWriteError(writeResult) {
      if (this.s.batches.length) {
        return;
      }
      return super.handleWriteError(writeResult);
    }
    addToOperationsList(batchType, document2) {
      const bsonSize = BSON.calculateObjectSize(document2, {
        checkKeys: false,
        // Since we don't know what the user selected for BSON options here,
        // err on the safe side, and check the size with ignoreUndefined: false.
        ignoreUndefined: false
      });
      if (bsonSize >= this.s.maxBsonObjectSize) {
        throw new error_1.MongoInvalidArgumentError(`Document is larger than the maximum size ${this.s.maxBsonObjectSize}`);
      }
      this.s.currentBatch = void 0;
      if (batchType === common_1.BatchType.INSERT) {
        this.s.currentBatch = this.s.currentInsertBatch;
      } else if (batchType === common_1.BatchType.UPDATE) {
        this.s.currentBatch = this.s.currentUpdateBatch;
      } else if (batchType === common_1.BatchType.DELETE) {
        this.s.currentBatch = this.s.currentRemoveBatch;
      }
      const maxKeySize = this.s.maxKeySize;
      if (this.s.currentBatch == null) {
        this.s.currentBatch = new common_1.Batch(batchType, this.s.currentIndex);
      }
      if (
        // New batch if we exceed the max batch op size
        this.s.currentBatch.size + 1 >= this.s.maxWriteBatchSize || // New batch if we exceed the maxBatchSizeBytes. Only matters if batch already has a doc,
        // since we can't sent an empty batch
        this.s.currentBatch.size > 0 && this.s.currentBatch.sizeBytes + maxKeySize + bsonSize >= this.s.maxBatchSizeBytes || // New batch if the new op does not have the same op type as the current batch
        this.s.currentBatch.batchType !== batchType
      ) {
        this.s.batches.push(this.s.currentBatch);
        this.s.currentBatch = new common_1.Batch(batchType, this.s.currentIndex);
      }
      if (Array.isArray(document2)) {
        throw new error_1.MongoInvalidArgumentError("Operation passed in cannot be an Array");
      }
      this.s.currentBatch.operations.push(document2);
      this.s.currentBatch.originalIndexes.push(this.s.currentIndex);
      this.s.currentIndex = this.s.currentIndex + 1;
      if (batchType === common_1.BatchType.INSERT) {
        this.s.currentInsertBatch = this.s.currentBatch;
        this.s.bulkResult.insertedIds.push({
          index: this.s.bulkResult.insertedIds.length,
          _id: document2._id
        });
      } else if (batchType === common_1.BatchType.UPDATE) {
        this.s.currentUpdateBatch = this.s.currentBatch;
      } else if (batchType === common_1.BatchType.DELETE) {
        this.s.currentRemoveBatch = this.s.currentBatch;
      }
      this.s.currentBatch.size += 1;
      this.s.currentBatch.sizeBytes += maxKeySize + bsonSize;
      return this;
    }
  }
  unordered.UnorderedBulkOperation = UnorderedBulkOperation;
  return unordered;
}
var change_stream = {};
var collection = {};
var aggregation_cursor = {};
var abstract_cursor = {};
var mongo_types = {};
var mongo_logger = {};
var hasRequiredMongo_logger;
function requireMongo_logger() {
  if (hasRequiredMongo_logger) return mongo_logger;
  hasRequiredMongo_logger = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MongoLogger = exports.MongoLoggableComponent = exports.SEVERITY_LEVEL_MAP = exports.DEFAULT_MAX_DOCUMENT_LENGTH = exports.SeverityLevel = void 0;
    exports.parseSeverityFromString = parseSeverityFromString;
    exports.createStdioLogger = createStdioLogger;
    exports.stringifyWithMaxLen = stringifyWithMaxLen;
    exports.defaultLogTransform = defaultLogTransform;
    const process = require$$0;
    const util_1 = require$$1$2;
    const bson_1 = requireBson();
    const constants_1 = requireConstants();
    const utils_1 = requireUtils();
    exports.SeverityLevel = Object.freeze({
      EMERGENCY: "emergency",
      ALERT: "alert",
      CRITICAL: "critical",
      ERROR: "error",
      WARNING: "warn",
      NOTICE: "notice",
      INFORMATIONAL: "info",
      DEBUG: "debug",
      TRACE: "trace",
      OFF: "off"
    });
    exports.DEFAULT_MAX_DOCUMENT_LENGTH = 1e3;
    class SeverityLevelMap extends Map {
      constructor(entries) {
        const newEntries = [];
        for (const [level, value] of entries) {
          newEntries.push([value, level]);
        }
        newEntries.push(...entries);
        super(newEntries);
      }
      getNumericSeverityLevel(severity) {
        return this.get(severity);
      }
      getSeverityLevelName(level) {
        return this.get(level);
      }
    }
    exports.SEVERITY_LEVEL_MAP = new SeverityLevelMap([
      [exports.SeverityLevel.OFF, -Infinity],
      [exports.SeverityLevel.EMERGENCY, 0],
      [exports.SeverityLevel.ALERT, 1],
      [exports.SeverityLevel.CRITICAL, 2],
      [exports.SeverityLevel.ERROR, 3],
      [exports.SeverityLevel.WARNING, 4],
      [exports.SeverityLevel.NOTICE, 5],
      [exports.SeverityLevel.INFORMATIONAL, 6],
      [exports.SeverityLevel.DEBUG, 7],
      [exports.SeverityLevel.TRACE, 8]
    ]);
    exports.MongoLoggableComponent = Object.freeze({
      COMMAND: "command",
      TOPOLOGY: "topology",
      SERVER_SELECTION: "serverSelection",
      CONNECTION: "connection",
      CLIENT: "client"
    });
    function parseSeverityFromString(s) {
      const validSeverities = Object.values(exports.SeverityLevel);
      const lowerSeverity = s?.toLowerCase();
      if (lowerSeverity != null && validSeverities.includes(lowerSeverity)) {
        return lowerSeverity;
      }
      return null;
    }
    function createStdioLogger(stream) {
      return {
        write: (log) => {
          return new Promise((resolve, reject) => {
            const logLine = (0, util_1.inspect)(log, { compact: true, breakLength: Infinity });
            stream.write(`${logLine}
`, "utf-8", (error2) => {
              if (error2)
                return reject(error2);
              resolve(true);
            });
          });
        }
      };
    }
    function resolveLogPath({ MONGODB_LOG_PATH }, { mongodbLogPath }) {
      if (typeof mongodbLogPath === "string" && /^stderr$/i.test(mongodbLogPath)) {
        return { mongodbLogPath: createStdioLogger(process.stderr), mongodbLogPathIsStdErr: true };
      }
      if (typeof mongodbLogPath === "string" && /^stdout$/i.test(mongodbLogPath)) {
        return { mongodbLogPath: createStdioLogger(process.stdout), mongodbLogPathIsStdErr: false };
      }
      if (typeof mongodbLogPath === "object" && typeof mongodbLogPath?.write === "function") {
        return { mongodbLogPath, mongodbLogPathIsStdErr: false };
      }
      if (MONGODB_LOG_PATH && /^stderr$/i.test(MONGODB_LOG_PATH)) {
        return { mongodbLogPath: createStdioLogger(process.stderr), mongodbLogPathIsStdErr: true };
      }
      if (MONGODB_LOG_PATH && /^stdout$/i.test(MONGODB_LOG_PATH)) {
        return { mongodbLogPath: createStdioLogger(process.stdout), mongodbLogPathIsStdErr: false };
      }
      return { mongodbLogPath: createStdioLogger(process.stderr), mongodbLogPathIsStdErr: true };
    }
    function resolveSeverityConfiguration(clientOption, environmentOption, defaultSeverity) {
      return parseSeverityFromString(clientOption) ?? parseSeverityFromString(environmentOption) ?? defaultSeverity;
    }
    function compareSeverity(s0, s1) {
      const s0Num = exports.SEVERITY_LEVEL_MAP.getNumericSeverityLevel(s0);
      const s1Num = exports.SEVERITY_LEVEL_MAP.getNumericSeverityLevel(s1);
      return s0Num < s1Num ? -1 : s0Num > s1Num ? 1 : 0;
    }
    function stringifyWithMaxLen(value, maxDocumentLength, options = {}) {
      let strToTruncate = "";
      let currentLength = 0;
      const maxDocumentLengthEnsurer = function maxDocumentLengthEnsurer2(key, value2) {
        if (currentLength >= maxDocumentLength) {
          return void 0;
        }
        if (key === "") {
          currentLength += 1;
          return value2;
        }
        currentLength += key.length + 4;
        if (value2 == null)
          return value2;
        switch (typeof value2) {
          case "string":
            currentLength += value2.length + 2;
            break;
          case "number":
          case "bigint":
            currentLength += String(value2).length;
            break;
          case "boolean":
            currentLength += value2 ? 4 : 5;
            break;
          case "object":
            if ((0, utils_1.isUint8Array)(value2)) {
              currentLength += 22 + value2.byteLength + value2.byteLength * 0.33 + 18 | 0;
            } else if ("_bsontype" in value2) {
              const v = value2;
              switch (v._bsontype) {
                case "Int32":
                  currentLength += String(v.value).length;
                  break;
                case "Double":
                  currentLength += (v.value | 0) === v.value ? String(v.value).length + 2 : String(v.value).length;
                  break;
                case "Long":
                  currentLength += v.toString().length;
                  break;
                case "ObjectId":
                  currentLength += 35;
                  break;
                case "MaxKey":
                case "MinKey":
                  currentLength += 13;
                  break;
                case "Binary":
                  currentLength += 22 + value2.position + value2.position * 0.33 + 18 | 0;
                  break;
                case "Timestamp":
                  currentLength += 19 + String(v.t).length + 5 + String(v.i).length + 2;
                  break;
                case "Code":
                  if (v.scope == null) {
                    currentLength += v.code.length + 10 + 2;
                  } else {
                    currentLength += v.code.length + 10 + 11;
                  }
                  break;
                case "BSONRegExp":
                  currentLength += 34 + v.pattern.length + 13 + v.options.length + 3;
                  break;
              }
            }
        }
        return value2;
      };
      if (typeof value === "string") {
        strToTruncate = value;
      } else if (typeof value === "function") {
        strToTruncate = value.name;
      } else {
        try {
          if (maxDocumentLength !== 0) {
            strToTruncate = bson_1.EJSON.stringify(value, maxDocumentLengthEnsurer, 0, options);
          } else {
            strToTruncate = bson_1.EJSON.stringify(value, options);
          }
        } catch (e) {
          strToTruncate = `Extended JSON serialization failed with: ${e.message}`;
        }
      }
      if (maxDocumentLength !== 0 && strToTruncate.length > maxDocumentLength && strToTruncate.charCodeAt(maxDocumentLength - 1) !== strToTruncate.codePointAt(maxDocumentLength - 1)) {
        maxDocumentLength--;
        if (maxDocumentLength === 0) {
          return "";
        }
      }
      return maxDocumentLength !== 0 && strToTruncate.length > maxDocumentLength ? `${strToTruncate.slice(0, maxDocumentLength)}...` : strToTruncate;
    }
    function isLogConvertible(obj) {
      const objAsLogConvertible = obj;
      return objAsLogConvertible.toLog !== void 0 && typeof objAsLogConvertible.toLog === "function";
    }
    function attachServerSelectionFields(log, serverSelectionEvent, maxDocumentLength = exports.DEFAULT_MAX_DOCUMENT_LENGTH) {
      const { selector, operation: operation2, topologyDescription, message } = serverSelectionEvent;
      log.selector = stringifyWithMaxLen(selector, maxDocumentLength);
      log.operation = operation2;
      log.topologyDescription = stringifyWithMaxLen(topologyDescription, maxDocumentLength);
      log.message = message;
      return log;
    }
    function attachCommandFields(log, commandEvent) {
      log.commandName = commandEvent.commandName;
      log.requestId = commandEvent.requestId;
      log.driverConnectionId = commandEvent.connectionId;
      const { host, port } = utils_1.HostAddress.fromString(commandEvent.address).toHostPort();
      log.serverHost = host;
      log.serverPort = port;
      if (commandEvent?.serviceId) {
        log.serviceId = commandEvent.serviceId.toHexString();
      }
      log.databaseName = commandEvent.databaseName;
      log.serverConnectionId = commandEvent.serverConnectionId;
      return log;
    }
    function attachConnectionFields(log, event) {
      const { host, port } = utils_1.HostAddress.fromString(event.address).toHostPort();
      log.serverHost = host;
      log.serverPort = port;
      return log;
    }
    function attachSDAMFields(log, sdamEvent) {
      log.topologyId = sdamEvent.topologyId;
      return log;
    }
    function attachServerHeartbeatFields(log, serverHeartbeatEvent) {
      const { awaited, connectionId } = serverHeartbeatEvent;
      log.awaited = awaited;
      log.driverConnectionId = serverHeartbeatEvent.connectionId;
      const { host, port } = utils_1.HostAddress.fromString(connectionId).toHostPort();
      log.serverHost = host;
      log.serverPort = port;
      return log;
    }
    function defaultLogTransform(logObject, maxDocumentLength = exports.DEFAULT_MAX_DOCUMENT_LENGTH) {
      let log = /* @__PURE__ */ Object.create(null);
      switch (logObject.name) {
        case constants_1.SERVER_SELECTION_STARTED:
          log = attachServerSelectionFields(log, logObject, maxDocumentLength);
          return log;
        case constants_1.SERVER_SELECTION_FAILED:
          log = attachServerSelectionFields(log, logObject, maxDocumentLength);
          log.failure = logObject.failure?.message;
          return log;
        case constants_1.SERVER_SELECTION_SUCCEEDED:
          log = attachServerSelectionFields(log, logObject, maxDocumentLength);
          log.serverHost = logObject.serverHost;
          log.serverPort = logObject.serverPort;
          return log;
        case constants_1.WAITING_FOR_SUITABLE_SERVER:
          log = attachServerSelectionFields(log, logObject, maxDocumentLength);
          log.remainingTimeMS = logObject.remainingTimeMS;
          return log;
        case constants_1.COMMAND_STARTED:
          log = attachCommandFields(log, logObject);
          log.message = "Command started";
          log.command = stringifyWithMaxLen(logObject.command, maxDocumentLength, { relaxed: true });
          log.databaseName = logObject.databaseName;
          return log;
        case constants_1.COMMAND_SUCCEEDED:
          log = attachCommandFields(log, logObject);
          log.message = "Command succeeded";
          log.durationMS = logObject.duration;
          log.reply = stringifyWithMaxLen(logObject.reply, maxDocumentLength, { relaxed: true });
          return log;
        case constants_1.COMMAND_FAILED:
          log = attachCommandFields(log, logObject);
          log.message = "Command failed";
          log.durationMS = logObject.duration;
          log.failure = logObject.failure?.message ?? "(redacted)";
          return log;
        case constants_1.CONNECTION_POOL_CREATED:
          log = attachConnectionFields(log, logObject);
          log.message = "Connection pool created";
          if (logObject.options) {
            const { maxIdleTimeMS, minPoolSize, maxPoolSize, maxConnecting, waitQueueTimeoutMS } = logObject.options;
            log = {
              ...log,
              maxIdleTimeMS,
              minPoolSize,
              maxPoolSize,
              maxConnecting,
              waitQueueTimeoutMS
            };
          }
          return log;
        case constants_1.CONNECTION_POOL_READY:
          log = attachConnectionFields(log, logObject);
          log.message = "Connection pool ready";
          return log;
        case constants_1.CONNECTION_POOL_CLEARED:
          log = attachConnectionFields(log, logObject);
          log.message = "Connection pool cleared";
          if (logObject.serviceId?._bsontype === "ObjectId") {
            log.serviceId = logObject.serviceId?.toHexString();
          }
          return log;
        case constants_1.CONNECTION_POOL_CLOSED:
          log = attachConnectionFields(log, logObject);
          log.message = "Connection pool closed";
          return log;
        case constants_1.CONNECTION_CREATED:
          log = attachConnectionFields(log, logObject);
          log.message = "Connection created";
          log.driverConnectionId = logObject.connectionId;
          return log;
        case constants_1.CONNECTION_READY:
          log = attachConnectionFields(log, logObject);
          log.message = "Connection ready";
          log.driverConnectionId = logObject.connectionId;
          log.durationMS = logObject.durationMS;
          return log;
        case constants_1.CONNECTION_CLOSED:
          log = attachConnectionFields(log, logObject);
          log.message = "Connection closed";
          log.driverConnectionId = logObject.connectionId;
          switch (logObject.reason) {
            case "stale":
              log.reason = "Connection became stale because the pool was cleared";
              break;
            case "idle":
              log.reason = "Connection has been available but unused for longer than the configured max idle time";
              break;
            case "error":
              log.reason = "An error occurred while using the connection";
              if (logObject.error) {
                log.error = logObject.error;
              }
              break;
            case "poolClosed":
              log.reason = "Connection pool was closed";
              break;
            default:
              log.reason = `Unknown close reason: ${logObject.reason}`;
          }
          return log;
        case constants_1.CONNECTION_CHECK_OUT_STARTED:
          log = attachConnectionFields(log, logObject);
          log.message = "Connection checkout started";
          return log;
        case constants_1.CONNECTION_CHECK_OUT_FAILED:
          log = attachConnectionFields(log, logObject);
          log.message = "Connection checkout failed";
          switch (logObject.reason) {
            case "poolClosed":
              log.reason = "Connection pool was closed";
              break;
            case "timeout":
              log.reason = "Wait queue timeout elapsed without a connection becoming available";
              break;
            case "connectionError":
              log.reason = "An error occurred while trying to establish a new connection";
              if (logObject.error) {
                log.error = logObject.error;
              }
              break;
            default:
              log.reason = `Unknown close reason: ${logObject.reason}`;
          }
          log.durationMS = logObject.durationMS;
          return log;
        case constants_1.CONNECTION_CHECKED_OUT:
          log = attachConnectionFields(log, logObject);
          log.message = "Connection checked out";
          log.driverConnectionId = logObject.connectionId;
          log.durationMS = logObject.durationMS;
          return log;
        case constants_1.CONNECTION_CHECKED_IN:
          log = attachConnectionFields(log, logObject);
          log.message = "Connection checked in";
          log.driverConnectionId = logObject.connectionId;
          return log;
        case constants_1.SERVER_OPENING:
          log = attachSDAMFields(log, logObject);
          log = attachConnectionFields(log, logObject);
          log.message = "Starting server monitoring";
          return log;
        case constants_1.SERVER_CLOSED:
          log = attachSDAMFields(log, logObject);
          log = attachConnectionFields(log, logObject);
          log.message = "Stopped server monitoring";
          return log;
        case constants_1.SERVER_HEARTBEAT_STARTED:
          log = attachSDAMFields(log, logObject);
          log = attachServerHeartbeatFields(log, logObject);
          log.message = "Server heartbeat started";
          return log;
        case constants_1.SERVER_HEARTBEAT_SUCCEEDED:
          log = attachSDAMFields(log, logObject);
          log = attachServerHeartbeatFields(log, logObject);
          log.message = "Server heartbeat succeeded";
          log.durationMS = logObject.duration;
          log.serverConnectionId = logObject.serverConnectionId;
          log.reply = stringifyWithMaxLen(logObject.reply, maxDocumentLength, { relaxed: true });
          return log;
        case constants_1.SERVER_HEARTBEAT_FAILED:
          log = attachSDAMFields(log, logObject);
          log = attachServerHeartbeatFields(log, logObject);
          log.message = "Server heartbeat failed";
          log.durationMS = logObject.duration;
          log.failure = logObject.failure?.message;
          return log;
        case constants_1.TOPOLOGY_OPENING:
          log = attachSDAMFields(log, logObject);
          log.message = "Starting topology monitoring";
          return log;
        case constants_1.TOPOLOGY_CLOSED:
          log = attachSDAMFields(log, logObject);
          log.message = "Stopped topology monitoring";
          return log;
        case constants_1.TOPOLOGY_DESCRIPTION_CHANGED:
          log = attachSDAMFields(log, logObject);
          log.message = "Topology description changed";
          log.previousDescription = log.reply = stringifyWithMaxLen(logObject.previousDescription, maxDocumentLength);
          log.newDescription = log.reply = stringifyWithMaxLen(logObject.newDescription, maxDocumentLength);
          return log;
        default:
          for (const [key, value] of Object.entries(logObject)) {
            if (value != null)
              log[key] = value;
          }
      }
      return log;
    }
    class MongoLogger {
      constructor(options) {
        this.pendingLog = null;
        this.error = this.log.bind(this, "error");
        this.warn = this.log.bind(this, "warn");
        this.info = this.log.bind(this, "info");
        this.debug = this.log.bind(this, "debug");
        this.trace = this.log.bind(this, "trace");
        this.componentSeverities = options.componentSeverities;
        this.maxDocumentLength = options.maxDocumentLength;
        this.logDestination = options.logDestination;
        this.logDestinationIsStdErr = options.logDestinationIsStdErr;
        this.severities = this.createLoggingSeverities();
      }
      createLoggingSeverities() {
        const severities = Object();
        for (const component of Object.values(exports.MongoLoggableComponent)) {
          severities[component] = {};
          for (const severityLevel of Object.values(exports.SeverityLevel)) {
            severities[component][severityLevel] = compareSeverity(severityLevel, this.componentSeverities[component]) <= 0;
          }
        }
        return severities;
      }
      turnOffSeverities() {
        for (const component of Object.values(exports.MongoLoggableComponent)) {
          this.componentSeverities[component] = exports.SeverityLevel.OFF;
          for (const severityLevel of Object.values(exports.SeverityLevel)) {
            this.severities[component][severityLevel] = false;
          }
        }
      }
      logWriteFailureHandler(error2) {
        if (this.logDestinationIsStdErr) {
          this.turnOffSeverities();
          this.clearPendingLog();
          return;
        }
        this.logDestination = createStdioLogger(process.stderr);
        this.logDestinationIsStdErr = true;
        this.clearPendingLog();
        this.error(exports.MongoLoggableComponent.CLIENT, {
          toLog: function() {
            return {
              message: "User input for mongodbLogPath is now invalid. Logging is halted.",
              error: error2.message
            };
          }
        });
        this.turnOffSeverities();
        this.clearPendingLog();
      }
      clearPendingLog() {
        this.pendingLog = null;
      }
      willLog(component, severity) {
        if (severity === exports.SeverityLevel.OFF)
          return false;
        return this.severities[component][severity];
      }
      log(severity, component, message) {
        if (!this.willLog(component, severity))
          return;
        let logMessage = { t: /* @__PURE__ */ new Date(), c: component, s: severity };
        if (typeof message === "string") {
          logMessage.message = message;
        } else if (typeof message === "object") {
          if (isLogConvertible(message)) {
            logMessage = { ...logMessage, ...message.toLog() };
          } else {
            logMessage = { ...logMessage, ...defaultLogTransform(message, this.maxDocumentLength) };
          }
        }
        if ((0, utils_1.isPromiseLike)(this.pendingLog)) {
          this.pendingLog = this.pendingLog.then(() => this.logDestination.write(logMessage)).then(this.clearPendingLog.bind(this), this.logWriteFailureHandler.bind(this));
          return;
        }
        try {
          const logResult = this.logDestination.write(logMessage);
          if ((0, utils_1.isPromiseLike)(logResult)) {
            this.pendingLog = logResult.then(this.clearPendingLog.bind(this), this.logWriteFailureHandler.bind(this));
          }
        } catch (error2) {
          this.logWriteFailureHandler(error2);
        }
      }
      /**
       * Merges options set through environment variables and the MongoClient, preferring environment
       * variables when both are set, and substituting defaults for values not set. Options set in
       * constructor take precedence over both environment variables and MongoClient options.
       *
       * @remarks
       * When parsing component severity levels, invalid values are treated as unset and replaced with
       * the default severity.
       *
       * @param envOptions - options set for the logger from the environment
       * @param clientOptions - options set for the logger in the MongoClient options
       * @returns a MongoLoggerOptions object to be used when instantiating a new MongoLogger
       */
      static resolveOptions(envOptions, clientOptions) {
        const resolvedLogPath = resolveLogPath(envOptions, clientOptions);
        const combinedOptions = {
          ...envOptions,
          ...clientOptions,
          mongodbLogPath: resolvedLogPath.mongodbLogPath,
          mongodbLogPathIsStdErr: resolvedLogPath.mongodbLogPathIsStdErr
        };
        const defaultSeverity = resolveSeverityConfiguration(combinedOptions.mongodbLogComponentSeverities?.default, combinedOptions.MONGODB_LOG_ALL, exports.SeverityLevel.OFF);
        return {
          componentSeverities: {
            command: resolveSeverityConfiguration(combinedOptions.mongodbLogComponentSeverities?.command, combinedOptions.MONGODB_LOG_COMMAND, defaultSeverity),
            topology: resolveSeverityConfiguration(combinedOptions.mongodbLogComponentSeverities?.topology, combinedOptions.MONGODB_LOG_TOPOLOGY, defaultSeverity),
            serverSelection: resolveSeverityConfiguration(combinedOptions.mongodbLogComponentSeverities?.serverSelection, combinedOptions.MONGODB_LOG_SERVER_SELECTION, defaultSeverity),
            connection: resolveSeverityConfiguration(combinedOptions.mongodbLogComponentSeverities?.connection, combinedOptions.MONGODB_LOG_CONNECTION, defaultSeverity),
            client: resolveSeverityConfiguration(combinedOptions.mongodbLogComponentSeverities?.client, combinedOptions.MONGODB_LOG_CLIENT, defaultSeverity),
            default: defaultSeverity
          },
          maxDocumentLength: combinedOptions.mongodbLogMaxDocumentLength ?? (0, utils_1.parseUnsignedInteger)(combinedOptions.MONGODB_LOG_MAX_DOCUMENT_LENGTH) ?? 1e3,
          logDestination: combinedOptions.mongodbLogPath,
          logDestinationIsStdErr: combinedOptions.mongodbLogPathIsStdErr
        };
      }
    }
    exports.MongoLogger = MongoLogger;
  })(mongo_logger);
  return mongo_logger;
}
var hasRequiredMongo_types;
function requireMongo_types() {
  if (hasRequiredMongo_types) return mongo_types;
  hasRequiredMongo_types = 1;
  Object.defineProperty(mongo_types, "__esModule", { value: true });
  mongo_types.CancellationToken = mongo_types.TypedEventEmitter = void 0;
  const events_1 = require$$0$4;
  const mongo_logger_1 = requireMongo_logger();
  const utils_1 = requireUtils();
  class TypedEventEmitter extends events_1.EventEmitter {
    /** @internal */
    emitAndLog(event, ...args) {
      this.emit(event, ...args);
      if (this.component)
        this.mongoLogger?.debug(this.component, args[0]);
    }
    /** @internal */
    emitAndLogHeartbeat(event, topologyId, serverConnectionId, ...args) {
      this.emit(event, ...args);
      if (this.component) {
        const loggableHeartbeatEvent = {
          topologyId,
          serverConnectionId: serverConnectionId ?? null,
          ...args[0]
        };
        this.mongoLogger?.debug(this.component, loggableHeartbeatEvent);
      }
    }
    /** @internal */
    emitAndLogCommand(monitorCommands, event, databaseName, connectionEstablished, ...args) {
      if (monitorCommands) {
        this.emit(event, ...args);
      }
      if (connectionEstablished) {
        const loggableCommandEvent = {
          databaseName,
          ...args[0]
        };
        this.mongoLogger?.debug(mongo_logger_1.MongoLoggableComponent.COMMAND, loggableCommandEvent);
      }
    }
  }
  mongo_types.TypedEventEmitter = TypedEventEmitter;
  class CancellationToken extends TypedEventEmitter {
    constructor(...args) {
      super(...args);
      this.on("error", utils_1.noop);
    }
  }
  mongo_types.CancellationToken = CancellationToken;
  return mongo_types;
}
var get_more = {};
var hasRequiredGet_more;
function requireGet_more() {
  if (hasRequiredGet_more) return get_more;
  hasRequiredGet_more = 1;
  Object.defineProperty(get_more, "__esModule", { value: true });
  get_more.GetMoreOperation = void 0;
  const responses_1 = requireResponses();
  const error_1 = requireError();
  const utils_1 = requireUtils();
  const operation_1 = requireOperation();
  class GetMoreOperation extends operation_1.AbstractOperation {
    constructor(ns, cursorId, server2, options) {
      super(options);
      this.SERVER_COMMAND_RESPONSE_TYPE = responses_1.CursorResponse;
      this.options = options;
      this.ns = ns;
      this.cursorId = cursorId;
      this.server = server2;
    }
    get commandName() {
      return "getMore";
    }
    buildCommand(connection2) {
      if (this.cursorId == null || this.cursorId.isZero()) {
        throw new error_1.MongoRuntimeError("Unable to iterate cursor with no id");
      }
      const collection2 = this.ns.collection;
      if (collection2 == null) {
        throw new error_1.MongoRuntimeError("A collection name must be determined before getMore");
      }
      const getMoreCmd = {
        getMore: this.cursorId,
        collection: collection2
      };
      if (typeof this.options.batchSize === "number") {
        getMoreCmd.batchSize = Math.abs(this.options.batchSize);
      }
      if (typeof this.options.maxAwaitTimeMS === "number") {
        getMoreCmd.maxTimeMS = this.options.maxAwaitTimeMS;
      }
      if (this.options.comment !== void 0 && (0, utils_1.maxWireVersion)(connection2) >= 9) {
        getMoreCmd.comment = this.options.comment;
      }
      return getMoreCmd;
    }
    buildOptions(timeoutContext) {
      return {
        returnFieldSelector: null,
        documentsReturnedIn: "nextBatch",
        timeoutContext,
        ...this.options
      };
    }
    handleOk(response) {
      return response;
    }
  }
  get_more.GetMoreOperation = GetMoreOperation;
  (0, operation_1.defineAspects)(GetMoreOperation, [operation_1.Aspect.READ_OPERATION, operation_1.Aspect.MUST_SELECT_SAME_SERVER]);
  return get_more;
}
var kill_cursors = {};
var hasRequiredKill_cursors;
function requireKill_cursors() {
  if (hasRequiredKill_cursors) return kill_cursors;
  hasRequiredKill_cursors = 1;
  Object.defineProperty(kill_cursors, "__esModule", { value: true });
  kill_cursors.KillCursorsOperation = void 0;
  const responses_1 = requireResponses();
  const error_1 = requireError();
  const operation_1 = requireOperation();
  class KillCursorsOperation extends operation_1.AbstractOperation {
    constructor(cursorId, ns, server2, options) {
      super(options);
      this.SERVER_COMMAND_RESPONSE_TYPE = responses_1.MongoDBResponse;
      this.ns = ns;
      this.cursorId = cursorId;
      this.server = server2;
    }
    get commandName() {
      return "killCursors";
    }
    buildCommand(_connection, _session) {
      const killCursors = this.ns.collection;
      if (killCursors == null) {
        throw new error_1.MongoRuntimeError("A collection name must be determined before killCursors");
      }
      const killCursorsCommand = {
        killCursors,
        cursors: [this.cursorId]
      };
      return killCursorsCommand;
    }
    buildOptions(timeoutContext) {
      return {
        session: this.session,
        timeoutContext
      };
    }
    handleError(_error) {
    }
  }
  kill_cursors.KillCursorsOperation = KillCursorsOperation;
  (0, operation_1.defineAspects)(KillCursorsOperation, [operation_1.Aspect.MUST_SELECT_SAME_SERVER]);
  return kill_cursors;
}
var sessions = {};
var metrics = {};
var hasRequiredMetrics;
function requireMetrics() {
  if (hasRequiredMetrics) return metrics;
  hasRequiredMetrics = 1;
  Object.defineProperty(metrics, "__esModule", { value: true });
  metrics.ConnectionPoolMetrics = void 0;
  const _ConnectionPoolMetrics = class _ConnectionPoolMetrics {
    constructor() {
      this.txnConnections = 0;
      this.cursorConnections = 0;
      this.otherConnections = 0;
    }
    /**
     * Mark a connection as pinned for a specific operation.
     */
    markPinned(pinType) {
      if (pinType === _ConnectionPoolMetrics.TXN) {
        this.txnConnections += 1;
      } else if (pinType === _ConnectionPoolMetrics.CURSOR) {
        this.cursorConnections += 1;
      } else {
        this.otherConnections += 1;
      }
    }
    /**
     * Unmark a connection as pinned for an operation.
     */
    markUnpinned(pinType) {
      if (pinType === _ConnectionPoolMetrics.TXN) {
        this.txnConnections -= 1;
      } else if (pinType === _ConnectionPoolMetrics.CURSOR) {
        this.cursorConnections -= 1;
      } else {
        this.otherConnections -= 1;
      }
    }
    /**
     * Return information about the cmap metrics as a string.
     */
    info(maxPoolSize) {
      return `Timed out while checking out a connection from connection pool: maxPoolSize: ${maxPoolSize}, connections in use by cursors: ${this.cursorConnections}, connections in use by transactions: ${this.txnConnections}, connections in use by other operations: ${this.otherConnections}`;
    }
    /**
     * Reset the metrics to the initial values.
     */
    reset() {
      this.txnConnections = 0;
      this.cursorConnections = 0;
      this.otherConnections = 0;
    }
  };
  _ConnectionPoolMetrics.TXN = "txn";
  _ConnectionPoolMetrics.CURSOR = "cursor";
  _ConnectionPoolMetrics.OTHER = "other";
  let ConnectionPoolMetrics = _ConnectionPoolMetrics;
  metrics.ConnectionPoolMetrics = ConnectionPoolMetrics;
  return metrics;
}
var transactions = {};
var hasRequiredTransactions;
function requireTransactions() {
  if (hasRequiredTransactions) return transactions;
  hasRequiredTransactions = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Transaction = exports.TxnState = void 0;
    exports.isTransactionCommand = isTransactionCommand;
    const error_1 = requireError();
    const read_concern_1 = requireRead_concern();
    const read_preference_1 = requireRead_preference();
    const write_concern_1 = requireWrite_concern();
    exports.TxnState = Object.freeze({
      NO_TRANSACTION: "NO_TRANSACTION",
      STARTING_TRANSACTION: "STARTING_TRANSACTION",
      TRANSACTION_IN_PROGRESS: "TRANSACTION_IN_PROGRESS",
      TRANSACTION_COMMITTED: "TRANSACTION_COMMITTED",
      TRANSACTION_COMMITTED_EMPTY: "TRANSACTION_COMMITTED_EMPTY",
      TRANSACTION_ABORTED: "TRANSACTION_ABORTED"
    });
    const stateMachine = {
      [exports.TxnState.NO_TRANSACTION]: [exports.TxnState.NO_TRANSACTION, exports.TxnState.STARTING_TRANSACTION],
      [exports.TxnState.STARTING_TRANSACTION]: [
        exports.TxnState.TRANSACTION_IN_PROGRESS,
        exports.TxnState.TRANSACTION_COMMITTED,
        exports.TxnState.TRANSACTION_COMMITTED_EMPTY,
        exports.TxnState.TRANSACTION_ABORTED
      ],
      [exports.TxnState.TRANSACTION_IN_PROGRESS]: [
        exports.TxnState.TRANSACTION_IN_PROGRESS,
        exports.TxnState.TRANSACTION_COMMITTED,
        exports.TxnState.TRANSACTION_ABORTED
      ],
      [exports.TxnState.TRANSACTION_COMMITTED]: [
        exports.TxnState.TRANSACTION_COMMITTED,
        exports.TxnState.TRANSACTION_COMMITTED_EMPTY,
        exports.TxnState.STARTING_TRANSACTION,
        exports.TxnState.NO_TRANSACTION
      ],
      [exports.TxnState.TRANSACTION_ABORTED]: [exports.TxnState.STARTING_TRANSACTION, exports.TxnState.NO_TRANSACTION],
      [exports.TxnState.TRANSACTION_COMMITTED_EMPTY]: [
        exports.TxnState.TRANSACTION_COMMITTED_EMPTY,
        exports.TxnState.NO_TRANSACTION
      ]
    };
    const ACTIVE_STATES = /* @__PURE__ */ new Set([
      exports.TxnState.STARTING_TRANSACTION,
      exports.TxnState.TRANSACTION_IN_PROGRESS
    ]);
    const COMMITTED_STATES = /* @__PURE__ */ new Set([
      exports.TxnState.TRANSACTION_COMMITTED,
      exports.TxnState.TRANSACTION_COMMITTED_EMPTY,
      exports.TxnState.TRANSACTION_ABORTED
    ]);
    class Transaction {
      /** Create a transaction */
      constructor(options) {
        options = options ?? {};
        this.state = exports.TxnState.NO_TRANSACTION;
        this.options = {};
        const writeConcern = write_concern_1.WriteConcern.fromOptions(options);
        if (writeConcern) {
          if (writeConcern.w === 0) {
            throw new error_1.MongoTransactionError("Transactions do not support unacknowledged write concern");
          }
          this.options.writeConcern = writeConcern;
        }
        if (options.readConcern) {
          this.options.readConcern = read_concern_1.ReadConcern.fromOptions(options);
        }
        if (options.readPreference) {
          this.options.readPreference = read_preference_1.ReadPreference.fromOptions(options);
        }
        if (options.maxCommitTimeMS) {
          this.options.maxTimeMS = options.maxCommitTimeMS;
        }
        this._pinnedServer = void 0;
        this._recoveryToken = void 0;
      }
      get server() {
        return this._pinnedServer;
      }
      get recoveryToken() {
        return this._recoveryToken;
      }
      get isPinned() {
        return !!this.server;
      }
      /**
       * @returns Whether the transaction has started
       */
      get isStarting() {
        return this.state === exports.TxnState.STARTING_TRANSACTION;
      }
      /**
       * @returns Whether this session is presently in a transaction
       */
      get isActive() {
        return ACTIVE_STATES.has(this.state);
      }
      get isCommitted() {
        return COMMITTED_STATES.has(this.state);
      }
      /**
       * Transition the transaction in the state machine
       * @param nextState - The new state to transition to
       */
      transition(nextState) {
        const nextStates = stateMachine[this.state];
        if (nextStates && nextStates.includes(nextState)) {
          this.state = nextState;
          if (this.state === exports.TxnState.NO_TRANSACTION || this.state === exports.TxnState.STARTING_TRANSACTION || this.state === exports.TxnState.TRANSACTION_ABORTED) {
            this.unpinServer();
          }
          return;
        }
        throw new error_1.MongoRuntimeError(`Attempted illegal state transition from [${this.state}] to [${nextState}]`);
      }
      pinServer(server2) {
        if (this.isActive) {
          this._pinnedServer = server2;
        }
      }
      unpinServer() {
        this._pinnedServer = void 0;
      }
    }
    exports.Transaction = Transaction;
    function isTransactionCommand(command2) {
      return !!(command2.commitTransaction || command2.abortTransaction);
    }
  })(transactions);
  return transactions;
}
var hasRequiredSessions;
function requireSessions() {
  if (hasRequiredSessions) return sessions;
  hasRequiredSessions = 1;
  Object.defineProperty(sessions, "__esModule", { value: true });
  sessions.ServerSessionPool = sessions.ServerSession = sessions.ClientSession = void 0;
  sessions.maybeClearPinnedConnection = maybeClearPinnedConnection;
  sessions.applySession = applySession;
  sessions.updateSessionFromResponse = updateSessionFromResponse;
  const promises_1 = require$$0$3;
  const bson_1 = requireBson();
  const metrics_1 = requireMetrics();
  const constants_1 = requireConstants();
  const error_1 = requireError();
  const mongo_types_1 = requireMongo_types();
  const execute_operation_1 = requireExecute_operation();
  const run_command_1 = requireRun_command();
  const read_concern_1 = requireRead_concern();
  const read_preference_1 = requireRead_preference();
  const common_1 = requireCommon$1();
  const timeout_1 = requireTimeout();
  const transactions_1 = requireTransactions();
  const utils_1 = requireUtils();
  const write_concern_1 = requireWrite_concern();
  class ClientSession extends mongo_types_1.TypedEventEmitter {
    /**
     * Create a client session.
     * @internal
     * @param client - The current client
     * @param sessionPool - The server session pool (Internal Class)
     * @param options - Optional settings
     * @param clientOptions - Optional settings provided when creating a MongoClient
     */
    constructor(client, sessionPool, options, clientOptions) {
      super();
      this.timeoutContext = null;
      this.on("error", utils_1.noop);
      if (client == null) {
        throw new error_1.MongoRuntimeError("ClientSession requires a MongoClient");
      }
      if (sessionPool == null || !(sessionPool instanceof ServerSessionPool)) {
        throw new error_1.MongoRuntimeError("ClientSession requires a ServerSessionPool");
      }
      options = options ?? {};
      this.snapshotEnabled = options.snapshot === true;
      if (options.causalConsistency === true && this.snapshotEnabled) {
        throw new error_1.MongoInvalidArgumentError('Properties "causalConsistency" and "snapshot" are mutually exclusive');
      }
      this.client = client;
      this.sessionPool = sessionPool;
      this.hasEnded = false;
      this.clientOptions = clientOptions;
      this.timeoutMS = options.defaultTimeoutMS ?? client.s.options?.timeoutMS;
      this.explicit = !!options.explicit;
      this._serverSession = this.explicit ? this.sessionPool.acquire() : null;
      this.txnNumberIncrement = 0;
      const defaultCausalConsistencyValue = this.explicit && options.snapshot !== true;
      this.supports = {
        // if we can enable causal consistency, do so by default
        causalConsistency: options.causalConsistency ?? defaultCausalConsistencyValue
      };
      this.clusterTime = options.initialClusterTime;
      this.operationTime = void 0;
      this.owner = options.owner;
      this.defaultTransactionOptions = { ...options.defaultTransactionOptions };
      this.transaction = new transactions_1.Transaction();
    }
    /** The server id associated with this session */
    get id() {
      return this.serverSession?.id;
    }
    get serverSession() {
      let serverSession = this._serverSession;
      if (serverSession == null) {
        if (this.explicit) {
          throw new error_1.MongoRuntimeError("Unexpected null serverSession for an explicit session");
        }
        if (this.hasEnded) {
          throw new error_1.MongoRuntimeError("Unexpected null serverSession for an ended implicit session");
        }
        serverSession = this.sessionPool.acquire();
        this._serverSession = serverSession;
      }
      return serverSession;
    }
    get loadBalanced() {
      return this.client.topology?.description.type === common_1.TopologyType.LoadBalanced;
    }
    /** @internal */
    pin(conn) {
      if (this.pinnedConnection) {
        throw TypeError("Cannot pin multiple connections to the same session");
      }
      this.pinnedConnection = conn;
      conn.emit(constants_1.PINNED, this.inTransaction() ? metrics_1.ConnectionPoolMetrics.TXN : metrics_1.ConnectionPoolMetrics.CURSOR);
    }
    /** @internal */
    unpin(options) {
      if (this.loadBalanced) {
        return maybeClearPinnedConnection(this, options);
      }
      this.transaction.unpinServer();
    }
    get isPinned() {
      return this.loadBalanced ? !!this.pinnedConnection : this.transaction.isPinned;
    }
    /**
     * Frees any client-side resources held by the current session.  If a session is in a transaction,
     * the transaction is aborted.
     *
     * Does not end the session on the server.
     *
     * @param options - Optional settings. Currently reserved for future use
     */
    async endSession(options) {
      try {
        if (this.inTransaction()) {
          await this.abortTransaction({ ...options, throwTimeout: true });
        }
      } catch (error2) {
        if (error2.name === "MongoOperationTimeoutError")
          throw error2;
        (0, utils_1.squashError)(error2);
      } finally {
        if (!this.hasEnded) {
          const serverSession = this.serverSession;
          if (serverSession != null) {
            this.sessionPool.release(serverSession);
            this._serverSession = new ServerSession(serverSession);
          }
          this.hasEnded = true;
          this.emit("ended", this);
        }
        maybeClearPinnedConnection(this, { force: true, ...options });
      }
    }
    /**
     * An alias for {@link ClientSession.endSession|ClientSession.endSession()}.
     */
    async [Symbol.asyncDispose]() {
      await this.endSession({ force: true });
    }
    /**
     * Advances the operationTime for a ClientSession.
     *
     * @param operationTime - the `BSON.Timestamp` of the operation type it is desired to advance to
     */
    advanceOperationTime(operationTime) {
      if (this.operationTime == null) {
        this.operationTime = operationTime;
        return;
      }
      if (operationTime.greaterThan(this.operationTime)) {
        this.operationTime = operationTime;
      }
    }
    /**
     * Advances the clusterTime for a ClientSession to the provided clusterTime of another ClientSession
     *
     * @param clusterTime - the $clusterTime returned by the server from another session in the form of a document containing the `BSON.Timestamp` clusterTime and signature
     */
    advanceClusterTime(clusterTime) {
      if (!clusterTime || typeof clusterTime !== "object") {
        throw new error_1.MongoInvalidArgumentError("input cluster time must be an object");
      }
      if (!clusterTime.clusterTime || clusterTime.clusterTime._bsontype !== "Timestamp") {
        throw new error_1.MongoInvalidArgumentError('input cluster time "clusterTime" property must be a valid BSON Timestamp');
      }
      if (!clusterTime.signature || clusterTime.signature.hash?._bsontype !== "Binary" || typeof clusterTime.signature.keyId !== "bigint" && typeof clusterTime.signature.keyId !== "number" && clusterTime.signature.keyId?._bsontype !== "Long") {
        throw new error_1.MongoInvalidArgumentError('input cluster time must have a valid "signature" property with BSON Binary hash and BSON Long keyId');
      }
      (0, common_1._advanceClusterTime)(this, clusterTime);
    }
    /**
     * Used to determine if this session equals another
     *
     * @param session - The session to compare to
     */
    equals(session) {
      if (!(session instanceof ClientSession)) {
        return false;
      }
      if (this.id == null || session.id == null) {
        return false;
      }
      return bson_1.ByteUtils.equals(this.id.id.buffer, session.id.id.buffer);
    }
    /**
     * Increment the transaction number on the internal ServerSession
     *
     * @privateRemarks
     * This helper increments a value stored on the client session that will be
     * added to the serverSession's txnNumber upon applying it to a command.
     * This is because the serverSession is lazily acquired after a connection is obtained
     */
    incrementTransactionNumber() {
      this.txnNumberIncrement += 1;
    }
    /** @returns whether this session is currently in a transaction or not */
    inTransaction() {
      return this.transaction.isActive;
    }
    /**
     * Starts a new transaction with the given options.
     *
     * @remarks
     * **IMPORTANT**: Running operations in parallel is not supported during a transaction. The use of `Promise.all`,
     * `Promise.allSettled`, `Promise.race`, etc to parallelize operations inside a transaction is
     * undefined behaviour.
     *
     * @param options - Options for the transaction
     */
    startTransaction(options) {
      if (this.snapshotEnabled) {
        throw new error_1.MongoCompatibilityError("Transactions are not supported in snapshot sessions");
      }
      if (this.inTransaction()) {
        throw new error_1.MongoTransactionError("Transaction already in progress");
      }
      if (this.isPinned && this.transaction.isCommitted) {
        this.unpin();
      }
      this.commitAttempted = false;
      this.incrementTransactionNumber();
      this.transaction = new transactions_1.Transaction({
        readConcern: options?.readConcern ?? this.defaultTransactionOptions.readConcern ?? this.clientOptions?.readConcern,
        writeConcern: options?.writeConcern ?? this.defaultTransactionOptions.writeConcern ?? this.clientOptions?.writeConcern,
        readPreference: options?.readPreference ?? this.defaultTransactionOptions.readPreference ?? this.clientOptions?.readPreference,
        maxCommitTimeMS: options?.maxCommitTimeMS ?? this.defaultTransactionOptions.maxCommitTimeMS
      });
      this.transaction.transition(transactions_1.TxnState.STARTING_TRANSACTION);
    }
    /**
     * Commits the currently active transaction in this session.
     *
     * @param options - Optional options, can be used to override `defaultTimeoutMS`.
     */
    async commitTransaction(options) {
      if (this.transaction.state === transactions_1.TxnState.NO_TRANSACTION) {
        throw new error_1.MongoTransactionError("No transaction started");
      }
      if (this.transaction.state === transactions_1.TxnState.STARTING_TRANSACTION || this.transaction.state === transactions_1.TxnState.TRANSACTION_COMMITTED_EMPTY) {
        this.transaction.transition(transactions_1.TxnState.TRANSACTION_COMMITTED_EMPTY);
        return;
      }
      if (this.transaction.state === transactions_1.TxnState.TRANSACTION_ABORTED) {
        throw new error_1.MongoTransactionError("Cannot call commitTransaction after calling abortTransaction");
      }
      const command2 = { commitTransaction: 1 };
      const timeoutMS = typeof options?.timeoutMS === "number" ? options.timeoutMS : typeof this.timeoutMS === "number" ? this.timeoutMS : null;
      const wc = this.transaction.options.writeConcern ?? this.clientOptions?.writeConcern;
      if (wc != null) {
        if (timeoutMS == null && this.timeoutContext == null) {
          write_concern_1.WriteConcern.apply(command2, { wtimeoutMS: 1e4, w: "majority", ...wc });
        } else {
          const wcKeys = Object.keys(wc);
          if (wcKeys.length > 2 || !wcKeys.includes("wtimeoutMS") && !wcKeys.includes("wTimeoutMS"))
            write_concern_1.WriteConcern.apply(command2, { ...wc, wtimeoutMS: void 0 });
        }
      }
      if (this.transaction.state === transactions_1.TxnState.TRANSACTION_COMMITTED || this.commitAttempted) {
        if (timeoutMS == null && this.timeoutContext == null) {
          write_concern_1.WriteConcern.apply(command2, { wtimeoutMS: 1e4, ...wc, w: "majority" });
        } else {
          write_concern_1.WriteConcern.apply(command2, { w: "majority", ...wc, wtimeoutMS: void 0 });
        }
      }
      if (typeof this.transaction.options.maxTimeMS === "number") {
        command2.maxTimeMS = this.transaction.options.maxTimeMS;
      }
      if (this.transaction.recoveryToken) {
        command2.recoveryToken = this.transaction.recoveryToken;
      }
      const operation2 = new run_command_1.RunCommandOperation(new utils_1.MongoDBNamespace("admin"), command2, {
        session: this,
        readPreference: read_preference_1.ReadPreference.primary,
        bypassPinningCheck: true
      });
      operation2.maxAttempts = this.clientOptions.maxAdaptiveRetries + 1;
      const timeoutContext = this.timeoutContext ?? (typeof timeoutMS === "number" ? timeout_1.TimeoutContext.create({
        serverSelectionTimeoutMS: this.clientOptions.serverSelectionTimeoutMS,
        socketTimeoutMS: this.clientOptions.socketTimeoutMS,
        timeoutMS
      }) : null);
      try {
        await (0, execute_operation_1.executeOperation)(this.client, operation2, timeoutContext);
        this.commitAttempted = void 0;
        return;
      } catch (firstCommitError) {
        this.commitAttempted = true;
        const remainingAttempts = this.clientOptions.maxAdaptiveRetries + 1 - operation2.attemptsMade;
        if (remainingAttempts <= 0) {
          throw firstCommitError;
        }
        if (firstCommitError instanceof error_1.MongoError && (0, error_1.isRetryableWriteError)(firstCommitError)) {
          write_concern_1.WriteConcern.apply(command2, { wtimeoutMS: 1e4, ...wc, w: "majority" });
          this.unpin({ force: true });
          try {
            const op = new run_command_1.RunCommandOperation(new utils_1.MongoDBNamespace("admin"), command2, {
              session: this,
              readPreference: read_preference_1.ReadPreference.primary,
              bypassPinningCheck: true
            });
            op.maxAttempts = remainingAttempts;
            await (0, execute_operation_1.executeOperation)(this.client, op, timeoutContext);
            return;
          } catch (retryCommitError) {
            if (shouldAddUnknownTransactionCommitResultLabel(retryCommitError)) {
              retryCommitError.addErrorLabel(error_1.MongoErrorLabel.UnknownTransactionCommitResult);
            }
            if (shouldUnpinAfterCommitError(retryCommitError)) {
              this.unpin({ error: retryCommitError });
            }
            throw retryCommitError;
          }
        }
        if (shouldAddUnknownTransactionCommitResultLabel(firstCommitError)) {
          firstCommitError.addErrorLabel(error_1.MongoErrorLabel.UnknownTransactionCommitResult);
        }
        if (shouldUnpinAfterCommitError(firstCommitError)) {
          this.unpin({ error: firstCommitError });
        }
        throw firstCommitError;
      } finally {
        this.transaction.transition(transactions_1.TxnState.TRANSACTION_COMMITTED);
      }
    }
    async abortTransaction(options) {
      if (this.transaction.state === transactions_1.TxnState.NO_TRANSACTION) {
        throw new error_1.MongoTransactionError("No transaction started");
      }
      if (this.transaction.state === transactions_1.TxnState.STARTING_TRANSACTION) {
        this.transaction.transition(transactions_1.TxnState.TRANSACTION_ABORTED);
        return;
      }
      if (this.transaction.state === transactions_1.TxnState.TRANSACTION_ABORTED) {
        throw new error_1.MongoTransactionError("Cannot call abortTransaction twice");
      }
      if (this.transaction.state === transactions_1.TxnState.TRANSACTION_COMMITTED || this.transaction.state === transactions_1.TxnState.TRANSACTION_COMMITTED_EMPTY) {
        throw new error_1.MongoTransactionError("Cannot call abortTransaction after calling commitTransaction");
      }
      const command2 = { abortTransaction: 1 };
      const timeoutMS = typeof options?.timeoutMS === "number" ? options.timeoutMS : this.timeoutContext?.csotEnabled() ? this.timeoutContext.timeoutMS : typeof this.timeoutMS === "number" ? this.timeoutMS : null;
      const timeoutContext = timeoutMS != null ? timeout_1.TimeoutContext.create({
        timeoutMS,
        serverSelectionTimeoutMS: this.clientOptions.serverSelectionTimeoutMS,
        socketTimeoutMS: this.clientOptions.socketTimeoutMS
      }) : null;
      const wc = this.transaction.options.writeConcern ?? this.clientOptions?.writeConcern;
      if (wc != null && timeoutMS == null) {
        write_concern_1.WriteConcern.apply(command2, { wtimeoutMS: 1e4, w: "majority", ...wc });
      }
      if (this.transaction.recoveryToken) {
        command2.recoveryToken = this.transaction.recoveryToken;
      }
      const operation2 = new run_command_1.RunCommandOperation(new utils_1.MongoDBNamespace("admin"), command2, {
        session: this,
        readPreference: read_preference_1.ReadPreference.primary,
        bypassPinningCheck: true
      });
      try {
        await (0, execute_operation_1.executeOperation)(this.client, operation2, timeoutContext);
        this.unpin();
        return;
      } catch (firstAbortError) {
        this.unpin();
        if (firstAbortError.name === "MongoRuntimeError")
          throw firstAbortError;
        if (options?.throwTimeout && firstAbortError.name === "MongoOperationTimeoutError") {
          throw firstAbortError;
        }
        if (firstAbortError instanceof error_1.MongoError && (0, error_1.isRetryableWriteError)(firstAbortError)) {
          try {
            await (0, execute_operation_1.executeOperation)(this.client, operation2, timeoutContext);
            return;
          } catch (secondAbortError) {
            if (secondAbortError.name === "MongoRuntimeError")
              throw secondAbortError;
            if (options?.throwTimeout && secondAbortError.name === "MongoOperationTimeoutError") {
              throw secondAbortError;
            }
          }
        }
      } finally {
        this.transaction.transition(transactions_1.TxnState.TRANSACTION_ABORTED);
        if (this.loadBalanced) {
          maybeClearPinnedConnection(this, { force: false });
        }
      }
    }
    /**
     * This is here to ensure that ClientSession is never serialized to BSON.
     */
    toBSON() {
      throw new error_1.MongoRuntimeError("ClientSession cannot be serialized to BSON.");
    }
    /**
     * Starts a transaction and runs a provided function, ensuring the commitTransaction is always attempted when all operations run in the function have completed.
     *
     * **IMPORTANT:** This method requires the function passed in to return a Promise. That promise must be made by `await`-ing all operations in such a way that rejections are propagated to the returned promise.
     *
     * **IMPORTANT:** Running operations in parallel is not supported during a transaction. The use of `Promise.all`,
     * `Promise.allSettled`, `Promise.race`, etc to parallelize operations inside a transaction is
     * undefined behaviour.
     *
     * **IMPORTANT:** When running an operation inside a `withTransaction` callback, if it is not
     * provided the explicit session in its options, it will not be part of the transaction and it will not respect timeoutMS.
     *
     *
     * @remarks
     * - If all operations successfully complete and the `commitTransaction` operation is successful, then the provided function will return the result of the provided function.
     * - If the transaction is unable to complete or an error is thrown from within the provided function, then the provided function will throw an error.
     *   - If the transaction is manually aborted within the provided function it will not throw.
     * - If the driver needs to attempt to retry the operations, the provided function may be called multiple times.
     *
     * Checkout a descriptive example here:
     * @see https://www.mongodb.com/blog/post/quick-start-nodejs--mongodb--how-to-implement-transactions
     *
     * If a command inside withTransaction fails:
     * - It may cause the transaction on the server to be aborted.
     * - This situation is normally handled transparently by the driver.
     * - However, if the application catches such an error and does not rethrow it, the driver will not be able to determine whether the transaction was aborted or not.
     * - The driver will then retry the transaction indefinitely.
     *
     * To avoid this situation, the application must not silently handle errors within the provided function.
     * If the application needs to handle errors within, it must await all operations such that if an operation is rejected it becomes the rejection of the callback function passed into withTransaction.
     *
     * @param fn - callback to run within a transaction
     * @param options - optional settings for the transaction
     * @returns A raw command response or undefined
     */
    async withTransaction(fn, options) {
      const MAX_TIMEOUT = 12e4;
      const timeoutMS = options?.timeoutMS ?? this.timeoutMS ?? null;
      this.timeoutContext = timeoutMS != null ? timeout_1.TimeoutContext.create({
        timeoutMS,
        serverSelectionTimeoutMS: this.clientOptions.serverSelectionTimeoutMS,
        socketTimeoutMS: this.clientOptions.socketTimeoutMS
      }) : null;
      const csotEnabled = !!this.timeoutContext?.csotEnabled();
      const remainingTimeMS = this.timeoutContext?.csotEnabled() ? this.timeoutContext.remainingTimeMS : MAX_TIMEOUT;
      const deadline = (0, utils_1.processTimeMS)() + remainingTimeMS;
      let committed = false;
      let result;
      let lastError = null;
      try {
        retryTransaction: for (let transactionAttempt = 0, isRetry = false; !committed; ++transactionAttempt, isRetry = transactionAttempt > 0) {
          if (isRetry) {
            const BACKOFF_INITIAL_MS = 5;
            const BACKOFF_MAX_MS = 500;
            const BACKOFF_GROWTH = 1.5;
            const jitter = Math.random();
            const backoffMS = jitter * Math.min(BACKOFF_INITIAL_MS * BACKOFF_GROWTH ** (transactionAttempt - 1), BACKOFF_MAX_MS);
            if ((0, utils_1.processTimeMS)() + backoffMS >= deadline) {
              throw makeTimeoutError(lastError ?? new error_1.MongoRuntimeError(`Transaction retry did not record an error: should never occur. Please file a bug.`), csotEnabled);
            }
            await (0, promises_1.setTimeout)(backoffMS);
          }
          this.startTransaction(options);
          try {
            const promise = fn(this);
            if (!(0, utils_1.isPromiseLike)(promise)) {
              throw new error_1.MongoInvalidArgumentError("Function provided to `withTransaction` must return a Promise");
            }
            result = await promise;
            if (this.transaction.state === transactions_1.TxnState.NO_TRANSACTION || this.transaction.state === transactions_1.TxnState.TRANSACTION_COMMITTED || this.transaction.state === transactions_1.TxnState.TRANSACTION_ABORTED) {
              return result;
            }
          } catch (fnError) {
            if (!(fnError instanceof error_1.MongoError) || fnError instanceof error_1.MongoInvalidArgumentError) {
              await this.abortTransaction();
              throw fnError;
            }
            lastError = fnError;
            if (this.transaction.state === transactions_1.TxnState.STARTING_TRANSACTION || this.transaction.state === transactions_1.TxnState.TRANSACTION_IN_PROGRESS) {
              await this.abortTransaction();
            }
            if (fnError.hasErrorLabel(error_1.MongoErrorLabel.TransientTransactionError)) {
              if ((0, utils_1.processTimeMS)() >= deadline) {
                throw makeTimeoutError(lastError, csotEnabled);
              }
              continue retryTransaction;
            }
            throw fnError;
          }
          retryCommit: while (!committed) {
            try {
              await this.commitTransaction();
              committed = true;
            } catch (commitError) {
              lastError = commitError;
              if (commitError.hasErrorLabel(error_1.MongoErrorLabel.UnknownTransactionCommitResult) && !isMaxTimeMSExpiredError(commitError)) {
                if ((0, utils_1.processTimeMS)() >= deadline) {
                  throw makeTimeoutError(commitError, csotEnabled);
                }
                continue retryCommit;
              }
              if (commitError.hasErrorLabel(error_1.MongoErrorLabel.TransientTransactionError)) {
                continue retryTransaction;
              }
              throw commitError;
            }
          }
        }
        return result;
      } finally {
        this.timeoutContext = null;
      }
    }
  }
  sessions.ClientSession = ClientSession;
  function makeTimeoutError(cause, csotEnabled) {
    if (cause instanceof error_1.MongoOperationTimeoutError) {
      return cause;
    }
    if (csotEnabled) {
      const timeoutError = new error_1.MongoOperationTimeoutError("Timed out during withTransaction", {
        cause
      });
      if (cause instanceof error_1.MongoError) {
        for (const label of cause.errorLabels) {
          timeoutError.addErrorLabel(label);
        }
      }
      return timeoutError;
    }
    return cause;
  }
  const NON_DETERMINISTIC_WRITE_CONCERN_ERRORS = /* @__PURE__ */ new Set([
    "CannotSatisfyWriteConcern",
    "UnknownReplWriteConcern",
    "UnsatisfiableWriteConcern"
  ]);
  function shouldUnpinAfterCommitError(commitError) {
    if (commitError instanceof error_1.MongoError) {
      if ((0, error_1.isRetryableWriteError)(commitError) || commitError instanceof error_1.MongoWriteConcernError || isMaxTimeMSExpiredError(commitError)) {
        if (isUnknownTransactionCommitResult(commitError)) {
          return true;
        }
      } else if (commitError.hasErrorLabel(error_1.MongoErrorLabel.TransientTransactionError)) {
        return true;
      }
    }
    return false;
  }
  function shouldAddUnknownTransactionCommitResultLabel(commitError) {
    let ok = (0, error_1.isRetryableWriteError)(commitError);
    ok ||= commitError instanceof error_1.MongoWriteConcernError;
    ok ||= isMaxTimeMSExpiredError(commitError);
    ok &&= isUnknownTransactionCommitResult(commitError);
    return ok;
  }
  function isUnknownTransactionCommitResult(err) {
    const isNonDeterministicWriteConcernError = err instanceof error_1.MongoServerError && err.codeName && NON_DETERMINISTIC_WRITE_CONCERN_ERRORS.has(err.codeName);
    return isMaxTimeMSExpiredError(err) || !isNonDeterministicWriteConcernError && err.code !== error_1.MONGODB_ERROR_CODES.UnsatisfiableWriteConcern && err.code !== error_1.MONGODB_ERROR_CODES.UnknownReplWriteConcern;
  }
  function maybeClearPinnedConnection(session, options) {
    const conn = session.pinnedConnection;
    const error2 = options?.error;
    if (session.inTransaction() && error2 && error2 instanceof error_1.MongoError && error2.hasErrorLabel(error_1.MongoErrorLabel.TransientTransactionError)) {
      return;
    }
    const topology2 = session.client.topology;
    if (conn && topology2 != null) {
      const servers = Array.from(topology2.s.servers.values());
      const loadBalancer = servers[0];
      if (options?.error == null || options?.force) {
        loadBalancer.pool.checkIn(conn);
        session.pinnedConnection = void 0;
        conn.emit(constants_1.UNPINNED, session.transaction.state !== transactions_1.TxnState.NO_TRANSACTION ? metrics_1.ConnectionPoolMetrics.TXN : metrics_1.ConnectionPoolMetrics.CURSOR);
        if (options?.forceClear) {
          loadBalancer.pool.clear({ serviceId: conn.serviceId });
        }
      }
    }
  }
  function isMaxTimeMSExpiredError(err) {
    if (err == null || !(err instanceof error_1.MongoServerError)) {
      return false;
    }
    return err.code === error_1.MONGODB_ERROR_CODES.MaxTimeMSExpired || err.writeConcernError?.code === error_1.MONGODB_ERROR_CODES.MaxTimeMSExpired;
  }
  class ServerSession {
    /** @internal */
    constructor(cloned) {
      if (cloned != null) {
        const idBytes = bson_1.ByteUtils.allocateUnsafe(16);
        idBytes.set(cloned.id.id.buffer);
        this.id = { id: new bson_1.Binary(idBytes, cloned.id.id.sub_type) };
        this.lastUse = cloned.lastUse;
        this.txnNumber = cloned.txnNumber;
        this.isDirty = cloned.isDirty;
        return;
      }
      this.id = { id: new bson_1.Binary((0, utils_1.uuidV4)(), bson_1.Binary.SUBTYPE_UUID) };
      this.lastUse = (0, utils_1.processTimeMS)();
      this.txnNumber = 0;
      this.isDirty = false;
    }
    /**
     * Determines if the server session has timed out.
     *
     * @param sessionTimeoutMinutes - The server's "logicalSessionTimeoutMinutes"
     */
    hasTimedOut(sessionTimeoutMinutes) {
      const idleTimeMinutes = Math.round((0, utils_1.calculateDurationInMs)(this.lastUse) % 864e5 % 36e5 / 6e4);
      return idleTimeMinutes > sessionTimeoutMinutes - 1;
    }
  }
  sessions.ServerSession = ServerSession;
  class ServerSessionPool {
    constructor(client) {
      if (client == null) {
        throw new error_1.MongoRuntimeError("ServerSessionPool requires a MongoClient");
      }
      this.client = client;
      this.sessions = new utils_1.List();
    }
    /**
     * Acquire a Server Session from the pool.
     * Iterates through each session in the pool, removing any stale sessions
     * along the way. The first non-stale session found is removed from the
     * pool and returned. If no non-stale session is found, a new ServerSession is created.
     */
    acquire() {
      const sessionTimeoutMinutes = this.client.topology?.logicalSessionTimeoutMinutes ?? 10;
      let session = null;
      while (this.sessions.length > 0) {
        const potentialSession = this.sessions.shift();
        if (potentialSession != null && (!!this.client.topology?.loadBalanced || !potentialSession.hasTimedOut(sessionTimeoutMinutes))) {
          session = potentialSession;
          break;
        }
      }
      if (session == null) {
        session = new ServerSession();
      }
      return session;
    }
    /**
     * Release a session to the session pool
     * Adds the session back to the session pool if the session has not timed out yet.
     * This method also removes any stale sessions from the pool.
     *
     * @param session - The session to release to the pool
     */
    release(session) {
      const sessionTimeoutMinutes = this.client.topology?.logicalSessionTimeoutMinutes ?? 10;
      if (this.client.topology?.loadBalanced && !sessionTimeoutMinutes) {
        this.sessions.unshift(session);
      }
      if (!sessionTimeoutMinutes) {
        return;
      }
      this.sessions.prune((session2) => session2.hasTimedOut(sessionTimeoutMinutes));
      if (!session.hasTimedOut(sessionTimeoutMinutes)) {
        if (session.isDirty) {
          return;
        }
        this.sessions.unshift(session);
      }
    }
  }
  sessions.ServerSessionPool = ServerSessionPool;
  function applySession(session, command2, options) {
    if (session.hasEnded) {
      return new error_1.MongoExpiredSessionError();
    }
    const serverSession = session.serverSession;
    if (serverSession == null) {
      return new error_1.MongoRuntimeError("Unable to acquire server session");
    }
    if (options.writeConcern?.w === 0) {
      if (session && session.explicit) {
        return new error_1.MongoAPIError("Cannot have explicit session with unacknowledged writes");
      }
      return;
    }
    serverSession.lastUse = (0, utils_1.processTimeMS)();
    command2.lsid = serverSession.id;
    const inTxnOrTxnCommand = session.inTransaction() || (0, transactions_1.isTransactionCommand)(command2);
    const isRetryableWrite = !!options.willRetryWrite;
    if (isRetryableWrite || inTxnOrTxnCommand) {
      serverSession.txnNumber += session.txnNumberIncrement;
      session.txnNumberIncrement = 0;
      command2.txnNumber = bson_1.Long.fromNumber(serverSession.txnNumber);
    }
    if (!inTxnOrTxnCommand) {
      if (session.transaction.state !== transactions_1.TxnState.NO_TRANSACTION) {
        session.transaction.transition(transactions_1.TxnState.NO_TRANSACTION);
      }
      if (session.supports.causalConsistency && session.operationTime && (0, utils_1.commandSupportsAfterClusterTime)(command2)) {
        command2.readConcern = command2.readConcern || {};
        Object.assign(command2.readConcern, { afterClusterTime: session.operationTime });
      } else if (session.snapshotEnabled) {
        command2.readConcern = command2.readConcern || { level: read_concern_1.ReadConcernLevel.snapshot };
        if (session.snapshotTime != null) {
          Object.assign(command2.readConcern, { atClusterTime: session.snapshotTime });
        }
      }
      return;
    }
    command2.autocommit = false;
    if (session.transaction.state === transactions_1.TxnState.STARTING_TRANSACTION) {
      command2.startTransaction = true;
      const readConcern = session.transaction.options.readConcern || session?.clientOptions?.readConcern;
      if (readConcern) {
        command2.readConcern = readConcern;
      }
      if (session.supports.causalConsistency && session.operationTime) {
        command2.readConcern = command2.readConcern || {};
        Object.assign(command2.readConcern, { afterClusterTime: session.operationTime });
      }
    }
    return;
  }
  function updateSessionFromResponse(session, document2) {
    if (document2.$clusterTime) {
      (0, common_1._advanceClusterTime)(session, document2.$clusterTime);
    }
    if (document2.operationTime && session && session.supports.causalConsistency) {
      session.advanceOperationTime(document2.operationTime);
    }
    if (document2.recoveryToken && session && session.inTransaction()) {
      session.transaction._recoveryToken = document2.recoveryToken;
    }
    if (session?.snapshotEnabled && session.snapshotTime == null) {
      const atClusterTime = document2.atClusterTime;
      if (atClusterTime) {
        session.snapshotTime = atClusterTime;
      }
    }
    if (session.transaction.state === transactions_1.TxnState.STARTING_TRANSACTION) {
      if (document2.ok === 1) {
        session.transaction.transition(transactions_1.TxnState.TRANSACTION_IN_PROGRESS);
      } else {
        const error2 = new error_1.MongoServerError(document2.toObject());
        const isRetryableError = error2.hasErrorLabel(error_1.MongoErrorLabel.RetryableError);
        if (!isRetryableError) {
          session.transaction.transition(transactions_1.TxnState.TRANSACTION_IN_PROGRESS);
        }
      }
    }
  }
  return sessions;
}
var hasRequiredAbstract_cursor;
function requireAbstract_cursor() {
  if (hasRequiredAbstract_cursor) return abstract_cursor;
  hasRequiredAbstract_cursor = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CursorTimeoutContext = exports.AbstractCursor = exports.CursorTimeoutMode = exports.CURSOR_FLAGS = void 0;
    const stream_1 = require$$0$5;
    const bson_1 = requireBson();
    const error_1 = requireError();
    const mongo_types_1 = requireMongo_types();
    const execute_operation_1 = requireExecute_operation();
    const get_more_1 = requireGet_more();
    const kill_cursors_1 = requireKill_cursors();
    const read_concern_1 = requireRead_concern();
    const read_preference_1 = requireRead_preference();
    const sessions_1 = requireSessions();
    const timeout_1 = requireTimeout();
    const utils_1 = requireUtils();
    exports.CURSOR_FLAGS = [
      "tailable",
      "oplogReplay",
      "noCursorTimeout",
      "awaitData",
      "exhaust",
      "partial"
    ];
    function removeActiveCursor() {
      this.client.s.activeCursors.delete(this);
    }
    exports.CursorTimeoutMode = Object.freeze({
      ITERATION: "iteration",
      LIFETIME: "cursorLifetime"
    });
    const _AbstractCursor = class _AbstractCursor extends mongo_types_1.TypedEventEmitter {
      /** @internal */
      constructor(client, namespace, options = {}) {
        super();
        this.documents = null;
        this.hasEmittedClose = false;
        this.on("error", utils_1.noop);
        if (!client.s.isMongoClient) {
          throw new error_1.MongoRuntimeError("Cursor must be constructed with MongoClient");
        }
        this.cursorClient = client;
        this.cursorNamespace = namespace;
        this.cursorId = null;
        this.initialized = false;
        this.isClosed = false;
        this.isKilled = false;
        this.cursorOptions = {
          readPreference: options.readPreference && options.readPreference instanceof read_preference_1.ReadPreference ? options.readPreference : read_preference_1.ReadPreference.primary,
          ...(0, bson_1.pluckBSONSerializeOptions)(options),
          timeoutMS: options?.timeoutContext?.csotEnabled() ? options.timeoutContext.timeoutMS : options.timeoutMS,
          tailable: options.tailable,
          awaitData: options.awaitData
        };
        if (this.cursorOptions.timeoutMS != null) {
          if (options.timeoutMode == null) {
            if (options.tailable) {
              if (options.awaitData) {
                if (options.maxAwaitTimeMS != null && options.maxAwaitTimeMS >= this.cursorOptions.timeoutMS)
                  throw new error_1.MongoInvalidArgumentError("Cannot specify maxAwaitTimeMS >= timeoutMS for a tailable awaitData cursor");
              }
              this.cursorOptions.timeoutMode = exports.CursorTimeoutMode.ITERATION;
            } else {
              this.cursorOptions.timeoutMode = exports.CursorTimeoutMode.LIFETIME;
            }
          } else {
            if (options.tailable && options.timeoutMode === exports.CursorTimeoutMode.LIFETIME) {
              throw new error_1.MongoInvalidArgumentError("Cannot set tailable cursor's timeoutMode to LIFETIME");
            }
            this.cursorOptions.timeoutMode = options.timeoutMode;
          }
        } else {
          if (options.timeoutMode != null)
            throw new error_1.MongoInvalidArgumentError("Cannot set timeoutMode without setting timeoutMS");
        }
        this.cursorOptions.omitMaxTimeMS = this.cursorOptions.timeoutMS != null && (this.cursorOptions.timeoutMode === exports.CursorTimeoutMode.ITERATION && !this.cursorOptions.tailable || this.cursorOptions.tailable && !this.cursorOptions.awaitData);
        const readConcern = read_concern_1.ReadConcern.fromOptions(options);
        if (readConcern) {
          this.cursorOptions.readConcern = readConcern;
        }
        if (typeof options.batchSize === "number") {
          this.cursorOptions.batchSize = options.batchSize;
        }
        if (options.comment !== void 0) {
          this.cursorOptions.comment = options.comment;
        }
        if (typeof options.maxTimeMS === "number") {
          this.cursorOptions.maxTimeMS = options.maxTimeMS;
        }
        if (typeof options.maxAwaitTimeMS === "number") {
          this.cursorOptions.maxAwaitTimeMS = options.maxAwaitTimeMS;
        }
        this.cursorSession = options.session ?? null;
        this.deserializationOptions = {
          ...this.cursorOptions,
          validation: {
            utf8: options?.enableUtf8Validation === false ? false : true
          }
        };
        this.timeoutContext = options.timeoutContext;
        this.signal = options.signal;
        this.abortListener = (0, utils_1.addAbortListener)(this.signal, () => void this.close().then(void 0, utils_1.squashError));
        this.trackCursor();
      }
      /**
       * The cursor has no id until it receives a response from the initial cursor creating command.
       *
       * It is non-zero for as long as the database has an open cursor.
       *
       * The initiating command may receive a zero id if the entire result is in the `firstBatch`.
       */
      get id() {
        return this.cursorId ?? void 0;
      }
      /** @internal */
      get isDead() {
        return (this.cursorId?.isZero() ?? false) || this.isClosed || this.isKilled;
      }
      /** @internal */
      get client() {
        return this.cursorClient;
      }
      /** @internal */
      get server() {
        return this.selectedServer;
      }
      get namespace() {
        return this.cursorNamespace;
      }
      get readPreference() {
        return this.cursorOptions.readPreference;
      }
      get readConcern() {
        return this.cursorOptions.readConcern;
      }
      /** @internal */
      get session() {
        return this.cursorSession;
      }
      set session(clientSession) {
        this.cursorSession = clientSession;
      }
      /**
       * The cursor is closed and all remaining locally buffered documents have been iterated.
       */
      get closed() {
        return this.isClosed && (this.documents?.length ?? 0) === 0;
      }
      /**
       * A `killCursors` command was attempted on this cursor.
       * This is performed if the cursor id is non zero.
       */
      get killed() {
        return this.isKilled;
      }
      get loadBalanced() {
        return !!this.cursorClient.topology?.loadBalanced;
      }
      /**
       * An alias for {@link AbstractCursor.close|AbstractCursor.close()}.
       */
      async [Symbol.asyncDispose]() {
        await this.close();
      }
      /** Adds cursor to client's tracking so it will be closed by MongoClient.close() */
      trackCursor() {
        this.cursorClient.s.activeCursors.add(this);
        if (!this.listeners("close").includes(removeActiveCursor)) {
          this.once("close", removeActiveCursor);
        }
      }
      /** Returns current buffered documents length */
      bufferedCount() {
        return this.documents?.length ?? 0;
      }
      /** Returns current buffered documents */
      readBufferedDocuments(number) {
        const bufferedDocs = [];
        const documentsToRead = Math.min(number ?? this.documents?.length ?? 0, this.documents?.length ?? 0);
        for (let count2 = 0; count2 < documentsToRead; count2++) {
          const document2 = this.documents?.shift(this.deserializationOptions);
          if (document2 != null) {
            bufferedDocs.push(document2);
          }
        }
        return bufferedDocs;
      }
      async *[Symbol.asyncIterator]() {
        this.signal?.throwIfAborted();
        if (this.closed) {
          return;
        }
        try {
          while (true) {
            if (this.isKilled) {
              return;
            }
            if (this.closed) {
              return;
            }
            if (this.cursorId != null && this.isDead && (this.documents?.length ?? 0) === 0) {
              return;
            }
            const document2 = await this.next();
            if (document2 === null) {
              return;
            }
            yield document2;
            this.signal?.throwIfAborted();
          }
        } finally {
          if (!this.isClosed) {
            try {
              await this.close();
            } catch (error2) {
              (0, utils_1.squashError)(error2);
            }
          }
        }
      }
      stream() {
        const readable = new ReadableCursorStream(this);
        const abortListener = (0, utils_1.addAbortListener)(this.signal, function() {
          readable.destroy(this.reason);
        });
        readable.once("end", () => {
          abortListener?.[utils_1.kDispose]();
        });
        return readable;
      }
      async hasNext() {
        this.signal?.throwIfAborted();
        if (this.cursorId === bson_1.Long.ZERO) {
          return false;
        }
        if (this.cursorOptions.timeoutMode === exports.CursorTimeoutMode.ITERATION && this.cursorId != null) {
          this.timeoutContext?.refresh();
        }
        try {
          do {
            if ((this.documents?.length ?? 0) !== 0) {
              return true;
            }
            await this.fetchBatch();
          } while (!this.isDead || (this.documents?.length ?? 0) !== 0);
        } finally {
          if (this.cursorOptions.timeoutMode === exports.CursorTimeoutMode.ITERATION) {
            this.timeoutContext?.clear();
          }
        }
        return false;
      }
      /** Get the next available document from the cursor, returns null if no more documents are available. */
      async next() {
        this.signal?.throwIfAborted();
        if (this.cursorId === bson_1.Long.ZERO) {
          throw new error_1.MongoCursorExhaustedError();
        }
        if (this.cursorOptions.timeoutMode === exports.CursorTimeoutMode.ITERATION && this.cursorId != null) {
          this.timeoutContext?.refresh();
        }
        try {
          do {
            const doc = this.documents?.shift(this.deserializationOptions);
            if (doc != null) {
              if (this.transform != null)
                return await this.transformDocument(doc);
              return doc;
            }
            await this.fetchBatch();
          } while (!this.isDead || (this.documents?.length ?? 0) !== 0);
        } finally {
          if (this.cursorOptions.timeoutMode === exports.CursorTimeoutMode.ITERATION) {
            this.timeoutContext?.clear();
          }
        }
        return null;
      }
      /**
       * Try to get the next available document from the cursor or `null` if an empty batch is returned
       */
      async tryNext() {
        this.signal?.throwIfAborted();
        if (this.cursorId === bson_1.Long.ZERO) {
          throw new error_1.MongoCursorExhaustedError();
        }
        if (this.cursorOptions.timeoutMode === exports.CursorTimeoutMode.ITERATION && this.cursorId != null) {
          this.timeoutContext?.refresh();
        }
        try {
          let doc = this.documents?.shift(this.deserializationOptions);
          if (doc != null) {
            if (this.transform != null)
              return await this.transformDocument(doc);
            return doc;
          }
          await this.fetchBatch();
          doc = this.documents?.shift(this.deserializationOptions);
          if (doc != null) {
            if (this.transform != null)
              return await this.transformDocument(doc);
            return doc;
          }
        } finally {
          if (this.cursorOptions.timeoutMode === exports.CursorTimeoutMode.ITERATION) {
            this.timeoutContext?.clear();
          }
        }
        return null;
      }
      /**
       * Iterates over all the documents for this cursor using the iterator, callback pattern.
       *
       * If the iterator returns `false`, iteration will stop.
       *
       * @param iterator - The iteration callback.
       * @deprecated - Will be removed in a future release. Use for await...of instead.
       */
      async forEach(iterator) {
        this.signal?.throwIfAborted();
        if (typeof iterator !== "function") {
          throw new error_1.MongoInvalidArgumentError('Argument "iterator" must be a function');
        }
        for await (const document2 of this) {
          const result = iterator(document2);
          if (result === false) {
            break;
          }
        }
      }
      /**
       * Frees any client-side resources used by the cursor.
       */
      async close(options) {
        await this.cleanup(options?.timeoutMS);
      }
      /**
       * Returns an array of documents. The caller is responsible for making sure that there
       * is enough memory to store the results. Note that the array only contains partial
       * results when this cursor had been previously accessed. In that case,
       * cursor.rewind() can be used to reset the cursor.
       */
      async toArray() {
        this.signal?.throwIfAborted();
        const array = [];
        for await (const document2 of this) {
          array.push(document2);
          const docs = this.readBufferedDocuments();
          if (this.transform != null) {
            for (const doc of docs) {
              array.push(await this.transformDocument(doc));
            }
          } else {
            for (const doc of docs) {
              array.push(doc);
            }
          }
        }
        return array;
      }
      /**
       * Add a cursor flag to the cursor
       *
       * @param flag - The flag to set, must be one of following ['tailable', 'oplogReplay', 'noCursorTimeout', 'awaitData', 'partial' -.
       * @param value - The flag boolean value.
       */
      addCursorFlag(flag, value) {
        this.throwIfInitialized();
        if (!exports.CURSOR_FLAGS.includes(flag)) {
          throw new error_1.MongoInvalidArgumentError(`Flag ${flag} is not one of ${exports.CURSOR_FLAGS}`);
        }
        if (typeof value !== "boolean") {
          throw new error_1.MongoInvalidArgumentError(`Flag ${flag} must be a boolean value`);
        }
        this.cursorOptions[flag] = value;
        return this;
      }
      /**
       * Map all documents using the provided function
       * If there is a transform set on the cursor, that will be called first and the result passed to
       * this function's transform.
       *
       * @remarks
       *
       * **Note** Cursors use `null` internally to indicate that there are no more documents in the cursor. Providing a mapping
       * function that maps values to `null` will result in the cursor closing itself before it has finished iterating
       * all documents.  This will **not** result in a memory leak, just surprising behavior.  For example:
       *
       * ```typescript
       * const cursor = collection.find({});
       * cursor.map(() => null);
       *
       * const documents = await cursor.toArray();
       * // documents is always [], regardless of how many documents are in the collection.
       * ```
       *
       * Other falsey values are allowed:
       *
       * ```typescript
       * const cursor = collection.find({});
       * cursor.map(() => '');
       *
       * const documents = await cursor.toArray();
       * // documents is now an array of empty strings
       * ```
       *
       * **Note for Typescript Users:** adding a transform changes the return type of the iteration of this cursor,
       * it **does not** return a new instance of a cursor. This means when calling map,
       * you should always assign the result to a new variable in order to get a correctly typed cursor variable.
       * Take note of the following example:
       *
       * @example
       * ```typescript
       * const cursor: FindCursor<Document> = coll.find();
       * const mappedCursor: FindCursor<number> = cursor.map(doc => Object.keys(doc).length);
       * const keyCounts: number[] = await mappedCursor.toArray(); // cursor.toArray() still returns Document[]
       * ```
       * @param transform - The mapping transformation method.
       */
      map(transform) {
        this.throwIfInitialized();
        const oldTransform = this.transform;
        if (oldTransform) {
          this.transform = (doc) => {
            return transform(oldTransform(doc));
          };
        } else {
          this.transform = transform;
        }
        return this;
      }
      /**
       * Set the ReadPreference for the cursor.
       *
       * @param readPreference - The new read preference for the cursor.
       */
      withReadPreference(readPreference) {
        this.throwIfInitialized();
        if (readPreference instanceof read_preference_1.ReadPreference) {
          this.cursorOptions.readPreference = readPreference;
        } else if (typeof readPreference === "string") {
          this.cursorOptions.readPreference = read_preference_1.ReadPreference.fromString(readPreference);
        } else {
          throw new error_1.MongoInvalidArgumentError(`Invalid read preference: ${readPreference}`);
        }
        return this;
      }
      /**
       * Set the ReadPreference for the cursor.
       *
       * @param readPreference - The new read preference for the cursor.
       */
      withReadConcern(readConcern) {
        this.throwIfInitialized();
        const resolvedReadConcern = read_concern_1.ReadConcern.fromOptions({ readConcern });
        if (resolvedReadConcern) {
          this.cursorOptions.readConcern = resolvedReadConcern;
        }
        return this;
      }
      /**
       * Set a maxTimeMS on the cursor query, allowing for hard timeout limits on queries (Only supported on MongoDB 2.6 or higher)
       *
       * @param value - Number of milliseconds to wait before aborting the query.
       */
      maxTimeMS(value) {
        this.throwIfInitialized();
        if (typeof value !== "number") {
          throw new error_1.MongoInvalidArgumentError("Argument for maxTimeMS must be a number");
        }
        this.cursorOptions.maxTimeMS = value;
        return this;
      }
      /**
       * Set the batch size for the cursor.
       *
       * @param value - The number of documents to return per batch. See {@link https://www.mongodb.com/docs/manual/reference/command/find/|find command documentation}.
       */
      batchSize(value) {
        this.throwIfInitialized();
        if (this.cursorOptions.tailable) {
          throw new error_1.MongoTailableCursorError("Tailable cursor does not support batchSize");
        }
        if (typeof value !== "number") {
          throw new error_1.MongoInvalidArgumentError('Operation "batchSize" requires an integer');
        }
        this.cursorOptions.batchSize = value;
        return this;
      }
      /**
       * Rewind this cursor to its uninitialized state. Any options that are present on the cursor will
       * remain in effect. Iterating this cursor will cause new queries to be sent to the server, even
       * if the resultant data has already been retrieved by this cursor.
       */
      rewind() {
        if (this.timeoutContext && this.timeoutContext.owner !== this) {
          throw new error_1.MongoAPIError(`Cannot rewind cursor that does not own its timeout context.`);
        }
        if (!this.initialized) {
          return;
        }
        this.cursorId = null;
        this.documents?.clear();
        this.timeoutContext?.clear();
        this.timeoutContext = void 0;
        this.isClosed = false;
        this.isKilled = false;
        this.initialized = false;
        this.hasEmittedClose = false;
        this.trackCursor();
        if (this.cursorSession?.explicit === false) {
          if (!this.cursorSession.hasEnded) {
            this.cursorSession.endSession().then(void 0, utils_1.squashError);
          }
          this.cursorSession = null;
        }
      }
      /** @internal */
      async getMore() {
        if (this.cursorId == null) {
          throw new error_1.MongoRuntimeError("Unexpected null cursor id. A cursor creating command should have set this");
        }
        if (this.selectedServer == null) {
          throw new error_1.MongoRuntimeError("Unexpected null selectedServer. A cursor creating command should have set this");
        }
        if (this.cursorSession == null) {
          throw new error_1.MongoRuntimeError("Unexpected null session. A cursor creating command should have set this");
        }
        const getMoreOptions = {
          ...this.cursorOptions,
          session: this.cursorSession,
          batchSize: this.cursorOptions.batchSize
        };
        const getMoreOperation = new get_more_1.GetMoreOperation(this.cursorNamespace, this.cursorId, this.selectedServer, getMoreOptions);
        return await (0, execute_operation_1.executeOperation)(this.cursorClient, getMoreOperation, this.timeoutContext);
      }
      /**
       * @internal
       *
       * This function is exposed for the unified test runner's createChangeStream
       * operation.  We cannot refactor to use the abstract _initialize method without
       * a significant refactor.
       */
      async cursorInit() {
        if (this.cursorOptions.timeoutMS != null) {
          this.timeoutContext ??= new CursorTimeoutContext(timeout_1.TimeoutContext.create({
            serverSelectionTimeoutMS: this.client.s.options.serverSelectionTimeoutMS,
            timeoutMS: this.cursorOptions.timeoutMS
          }), this);
        }
        try {
          this.cursorSession ??= this.cursorClient.startSession({ owner: this, explicit: false });
          const state = await this._initialize(this.cursorSession);
          this.cursorOptions.omitMaxTimeMS = this.cursorOptions.timeoutMS != null;
          const response = state.response;
          this.selectedServer = state.server;
          this.cursorId = response.id;
          this.cursorNamespace = response.ns ?? this.namespace;
          this.documents = response;
          this.initialized = true;
        } catch (error2) {
          this.initialized = true;
          await this.cleanup(void 0, error2);
          throw error2;
        }
        if (this.isDead) {
          await this.cleanup();
        }
        return;
      }
      /** @internal Attempt to obtain more documents */
      async fetchBatch() {
        if (this.isClosed) {
          return;
        }
        if (this.isDead) {
          await this.cleanup();
          return;
        }
        if (this.cursorId == null) {
          await this.cursorInit();
          if ((this.documents?.length ?? 0) !== 0 || this.isDead)
            return;
        }
        try {
          const response = await this.getMore();
          this.cursorId = response.id;
          this.documents = response;
        } catch (error2) {
          try {
            await this.cleanup(void 0, error2);
          } catch (cleanupError) {
            (0, utils_1.squashError)(cleanupError);
          }
          throw error2;
        }
        if (this.isDead) {
          await this.cleanup();
        }
      }
      /** @internal */
      async cleanup(timeoutMS, error2) {
        this.abortListener?.[utils_1.kDispose]();
        this.isClosed = true;
        const timeoutContextForKillCursors = () => {
          if (timeoutMS != null) {
            this.timeoutContext?.clear();
            return new CursorTimeoutContext(timeout_1.TimeoutContext.create({
              serverSelectionTimeoutMS: this.client.s.options.serverSelectionTimeoutMS,
              timeoutMS
            }), this);
          } else {
            return this.timeoutContext?.refreshed();
          }
        };
        const withEmitClose = async (fn) => {
          try {
            await fn();
          } finally {
            this.emitClose();
          }
        };
        const close = async () => {
          const session = this.cursorSession;
          if (!session)
            return;
          try {
            if (!this.isKilled && this.cursorId && !this.cursorId.isZero() && this.cursorNamespace && this.selectedServer && !session.hasEnded) {
              this.isKilled = true;
              const cursorId = this.cursorId;
              this.cursorId = bson_1.Long.ZERO;
              await (0, execute_operation_1.executeOperation)(this.cursorClient, new kill_cursors_1.KillCursorsOperation(cursorId, this.cursorNamespace, this.selectedServer, {
                session
              }), timeoutContextForKillCursors());
            }
          } catch (error3) {
            (0, utils_1.squashError)(error3);
          } finally {
            if (session.owner === this) {
              await session.endSession({ error: error2 });
            }
            if (!session.inTransaction()) {
              (0, sessions_1.maybeClearPinnedConnection)(session, { error: error2 });
            }
          }
        };
        await withEmitClose(close);
      }
      /** @internal */
      emitClose() {
        try {
          if (!this.hasEmittedClose && ((this.documents?.length ?? 0) === 0 || this.isClosed)) {
            this.emit("close");
          }
        } finally {
          this.hasEmittedClose = true;
        }
      }
      /** @internal */
      async transformDocument(document2) {
        if (this.transform == null)
          return document2;
        try {
          const transformedDocument = this.transform(document2);
          if (transformedDocument === null) {
            const TRANSFORM_TO_NULL_ERROR = "Cursor returned a `null` document, but the cursor is not exhausted.  Mapping documents to `null` is not supported in the cursor transform.";
            throw new error_1.MongoAPIError(TRANSFORM_TO_NULL_ERROR);
          }
          return transformedDocument;
        } catch (transformError) {
          try {
            await this.close();
          } catch (closeError) {
            (0, utils_1.squashError)(closeError);
          }
          throw transformError;
        }
      }
      /** @internal */
      throwIfInitialized() {
        if (this.initialized)
          throw new error_1.MongoCursorInUseError();
      }
    };
    _AbstractCursor.CLOSE = "close";
    let AbstractCursor = _AbstractCursor;
    exports.AbstractCursor = AbstractCursor;
    class ReadableCursorStream extends stream_1.Readable {
      constructor(cursor) {
        super({
          objectMode: true,
          autoDestroy: false,
          highWaterMark: 1
        });
        this._readInProgress = false;
        this._cursor = cursor;
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      _read(size) {
        if (!this._readInProgress) {
          this._readInProgress = true;
          this._readNext();
        }
      }
      _destroy(error2, callback) {
        this._cursor.close().then(() => callback(error2), (closeError) => callback(closeError));
      }
      _readNext() {
        if (this._cursor.id === bson_1.Long.ZERO) {
          this.push(null);
          return;
        }
        this._cursor.next().then(
          // result from next()
          (result) => {
            if (result == null) {
              this.push(null);
            } else if (this.destroyed) {
              this._cursor.close().then(void 0, utils_1.squashError);
            } else {
              if (this.push(result)) {
                return this._readNext();
              }
              this._readInProgress = false;
            }
          },
          // error from next()
          (err) => {
            if (err.message.match(/server is closed/)) {
              this._cursor.close().then(void 0, utils_1.squashError);
              return this.push(null);
            }
            if (err.message.match(/operation was interrupted/)) {
              return this.push(null);
            }
            return this.destroy(err);
          }
        ).catch((error2) => {
          this._readInProgress = false;
          this.destroy(error2);
        });
      }
    }
    class CursorTimeoutContext extends timeout_1.TimeoutContext {
      constructor(timeoutContext, owner) {
        super();
        this.timeoutContext = timeoutContext;
        this.owner = owner;
      }
      get serverSelectionTimeout() {
        return this.timeoutContext.serverSelectionTimeout;
      }
      get connectionCheckoutTimeout() {
        return this.timeoutContext.connectionCheckoutTimeout;
      }
      get clearServerSelectionTimeout() {
        return this.timeoutContext.clearServerSelectionTimeout;
      }
      get timeoutForSocketWrite() {
        return this.timeoutContext.timeoutForSocketWrite;
      }
      get timeoutForSocketRead() {
        return this.timeoutContext.timeoutForSocketRead;
      }
      csotEnabled() {
        return this.timeoutContext.csotEnabled();
      }
      refresh() {
        if (typeof this.owner !== "symbol")
          return this.timeoutContext.refresh();
      }
      clear() {
        if (typeof this.owner !== "symbol")
          return this.timeoutContext.clear();
      }
      get maxTimeMS() {
        return this.timeoutContext.maxTimeMS;
      }
      get timeoutMS() {
        return this.timeoutContext.csotEnabled() ? this.timeoutContext.timeoutMS : null;
      }
      refreshed() {
        return new CursorTimeoutContext(this.timeoutContext.refreshed(), this.owner);
      }
      addMaxTimeMSToCommand(command2, options) {
        this.timeoutContext.addMaxTimeMSToCommand(command2, options);
      }
      getSocketTimeoutMS() {
        return this.timeoutContext.getSocketTimeoutMS();
      }
    }
    exports.CursorTimeoutContext = CursorTimeoutContext;
  })(abstract_cursor);
  return abstract_cursor;
}
var explainable_cursor = {};
var hasRequiredExplainable_cursor;
function requireExplainable_cursor() {
  if (hasRequiredExplainable_cursor) return explainable_cursor;
  hasRequiredExplainable_cursor = 1;
  Object.defineProperty(explainable_cursor, "__esModule", { value: true });
  explainable_cursor.ExplainableCursor = void 0;
  const abstract_cursor_1 = requireAbstract_cursor();
  class ExplainableCursor extends abstract_cursor_1.AbstractCursor {
    resolveExplainTimeoutOptions(verbosity, options) {
      let explain2;
      let timeout2;
      if (verbosity == null && options == null) {
        explain2 = void 0;
        timeout2 = void 0;
      } else if (verbosity != null && options == null) {
        explain2 = typeof verbosity !== "object" ? verbosity : "verbosity" in verbosity ? verbosity : void 0;
        timeout2 = typeof verbosity === "object" && "timeoutMS" in verbosity ? verbosity : void 0;
      } else {
        explain2 = verbosity;
        timeout2 = options;
      }
      return { timeout: timeout2, explain: explain2 };
    }
  }
  explainable_cursor.ExplainableCursor = ExplainableCursor;
  return explainable_cursor;
}
var hasRequiredAggregation_cursor;
function requireAggregation_cursor() {
  if (hasRequiredAggregation_cursor) return aggregation_cursor;
  hasRequiredAggregation_cursor = 1;
  Object.defineProperty(aggregation_cursor, "__esModule", { value: true });
  aggregation_cursor.AggregationCursor = void 0;
  const error_1 = requireError();
  const explain_1 = requireExplain();
  const aggregate_1 = requireAggregate();
  const execute_operation_1 = requireExecute_operation();
  const utils_1 = requireUtils();
  const abstract_cursor_1 = requireAbstract_cursor();
  const explainable_cursor_1 = requireExplainable_cursor();
  class AggregationCursor extends explainable_cursor_1.ExplainableCursor {
    /** @internal */
    constructor(client, namespace, pipeline = [], options = {}) {
      super(client, namespace, options);
      this.pipeline = pipeline;
      this.aggregateOptions = options;
      const lastStage = this.pipeline[this.pipeline.length - 1];
      if (this.cursorOptions.timeoutMS != null && this.cursorOptions.timeoutMode === abstract_cursor_1.CursorTimeoutMode.ITERATION && (lastStage?.$merge != null || lastStage?.$out != null))
        throw new error_1.MongoAPIError("Cannot use $out or $merge stage with ITERATION timeoutMode");
    }
    clone() {
      const clonedOptions = (0, utils_1.mergeOptions)({}, this.aggregateOptions);
      delete clonedOptions.session;
      return new AggregationCursor(this.client, this.namespace, this.pipeline, {
        ...clonedOptions
      });
    }
    map(transform) {
      return super.map(transform);
    }
    /** @internal */
    async _initialize(session) {
      const options = {
        ...this.aggregateOptions,
        ...this.cursorOptions,
        session,
        signal: this.signal
      };
      if (options.explain) {
        try {
          (0, explain_1.validateExplainTimeoutOptions)(options, explain_1.Explain.fromOptions(options));
        } catch {
          throw new error_1.MongoAPIError("timeoutMS cannot be used with explain when explain is specified in aggregateOptions");
        }
      }
      const aggregateOperation = new aggregate_1.AggregateOperation(this.namespace, this.pipeline, options);
      const response = await (0, execute_operation_1.executeOperation)(this.client, aggregateOperation, this.timeoutContext);
      return { server: aggregateOperation.server, session, response };
    }
    async explain(verbosity, options) {
      const { explain: explain2, timeout: timeout2 } = this.resolveExplainTimeoutOptions(verbosity, options);
      return (await (0, execute_operation_1.executeOperation)(this.client, new aggregate_1.AggregateOperation(this.namespace, this.pipeline, {
        ...this.aggregateOptions,
        // NOTE: order matters here, we may need to refine this
        ...this.cursorOptions,
        ...timeout2,
        explain: explain2 ?? true
      }))).shift(this.deserializationOptions);
    }
    addStage(stage) {
      this.throwIfInitialized();
      if (this.cursorOptions.timeoutMS != null && this.cursorOptions.timeoutMode === abstract_cursor_1.CursorTimeoutMode.ITERATION && (stage.$out != null || stage.$merge != null)) {
        throw new error_1.MongoAPIError("Cannot use $out or $merge stage with ITERATION timeoutMode");
      }
      this.pipeline.push(stage);
      return this;
    }
    group($group) {
      return this.addStage({ $group });
    }
    /** Add a limit stage to the aggregation pipeline */
    limit($limit) {
      return this.addStage({ $limit });
    }
    /** Add a match stage to the aggregation pipeline */
    match($match) {
      return this.addStage({ $match });
    }
    /** Add an out stage to the aggregation pipeline */
    out($out) {
      return this.addStage({ $out });
    }
    /**
     * Add a project stage to the aggregation pipeline
     *
     * @remarks
     * In order to strictly type this function you must provide an interface
     * that represents the effect of your projection on the result documents.
     *
     * By default chaining a projection to your cursor changes the returned type to the generic {@link Document} type.
     * You should specify a parameterized type to have assertions on your final results.
     *
     * @example
     * ```typescript
     * // Best way
     * const docs: AggregationCursor<{ a: number }> = cursor.project<{ a: number }>({ _id: 0, a: true });
     * // Flexible way
     * const docs: AggregationCursor<Document> = cursor.project({ _id: 0, a: true });
     * ```
     *
     * @remarks
     * In order to strictly type this function you must provide an interface
     * that represents the effect of your projection on the result documents.
     *
     * **Note for Typescript Users:** adding a transform changes the return type of the iteration of this cursor,
     * it **does not** return a new instance of a cursor. This means when calling project,
     * you should always assign the result to a new variable in order to get a correctly typed cursor variable.
     * Take note of the following example:
     *
     * @example
     * ```typescript
     * const cursor: AggregationCursor<{ a: number; b: string }> = coll.aggregate([]);
     * const projectCursor = cursor.project<{ a: number }>({ _id: 0, a: true });
     * const aPropOnlyArray: {a: number}[] = await projectCursor.toArray();
     *
     * // or always use chaining and save the final cursor
     *
     * const cursor = coll.aggregate().project<{ a: string }>({
     *   _id: 0,
     *   a: { $convert: { input: '$a', to: 'string' }
     * }});
     * ```
     */
    project($project) {
      return this.addStage({ $project });
    }
    /** Add a lookup stage to the aggregation pipeline */
    lookup($lookup) {
      return this.addStage({ $lookup });
    }
    /** Add a redact stage to the aggregation pipeline */
    redact($redact) {
      return this.addStage({ $redact });
    }
    /** Add a skip stage to the aggregation pipeline */
    skip($skip) {
      return this.addStage({ $skip });
    }
    /** Add a sort stage to the aggregation pipeline */
    sort($sort) {
      return this.addStage({ $sort });
    }
    /** Add a unwind stage to the aggregation pipeline */
    unwind($unwind) {
      return this.addStage({ $unwind });
    }
    /** Add a geoNear stage to the aggregation pipeline */
    geoNear($geoNear) {
      return this.addStage({ $geoNear });
    }
  }
  aggregation_cursor.AggregationCursor = AggregationCursor;
  return aggregation_cursor;
}
var find_cursor = {};
var count = {};
var hasRequiredCount;
function requireCount() {
  if (hasRequiredCount) return count;
  hasRequiredCount = 1;
  Object.defineProperty(count, "__esModule", { value: true });
  count.CountOperation = void 0;
  const responses_1 = requireResponses();
  const command_1 = requireCommand();
  const operation_1 = requireOperation();
  class CountOperation extends command_1.CommandOperation {
    constructor(namespace, filter, options) {
      super({ s: { namespace } }, options);
      this.SERVER_COMMAND_RESPONSE_TYPE = responses_1.MongoDBResponse;
      this.options = options;
      this.collectionName = namespace.collection;
      this.query = filter;
    }
    get commandName() {
      return "count";
    }
    buildCommandDocument(_connection, _session) {
      const options = this.options;
      const cmd = {
        count: this.collectionName,
        query: this.query
      };
      if (typeof options.limit === "number") {
        cmd.limit = options.limit;
      }
      if (typeof options.skip === "number") {
        cmd.skip = options.skip;
      }
      if (options.hint != null) {
        cmd.hint = options.hint;
      }
      if (typeof options.maxTimeMS === "number") {
        cmd.maxTimeMS = options.maxTimeMS;
      }
      return cmd;
    }
    handleOk(response) {
      return response.getNumber("n") ?? 0;
    }
  }
  count.CountOperation = CountOperation;
  (0, operation_1.defineAspects)(CountOperation, [operation_1.Aspect.READ_OPERATION, operation_1.Aspect.RETRYABLE, operation_1.Aspect.SUPPORTS_RAW_DATA]);
  return count;
}
var find = {};
var hasRequiredFind;
function requireFind() {
  if (hasRequiredFind) return find;
  hasRequiredFind = 1;
  Object.defineProperty(find, "__esModule", { value: true });
  find.FindOperation = void 0;
  const responses_1 = requireResponses();
  const error_1 = requireError();
  const sort_1 = requireSort();
  const utils_1 = requireUtils();
  const command_1 = requireCommand();
  const operation_1 = requireOperation();
  class FindOperation extends command_1.CommandOperation {
    constructor(ns, filter = {}, options = {}) {
      super(void 0, options);
      this.SERVER_COMMAND_RESPONSE_TYPE = responses_1.CursorResponse;
      this.options = { ...options };
      delete this.options.writeConcern;
      this.ns = ns;
      if (typeof filter !== "object" || Array.isArray(filter)) {
        throw new error_1.MongoInvalidArgumentError("Query filter must be a plain object or ObjectId");
      }
      this.filter = filter != null && filter._bsontype === "ObjectId" ? { _id: filter } : filter;
      this.SERVER_COMMAND_RESPONSE_TYPE = this.explain ? responses_1.ExplainedCursorResponse : responses_1.CursorResponse;
    }
    get commandName() {
      return "find";
    }
    buildOptions(timeoutContext) {
      return {
        ...this.options,
        ...this.bsonOptions,
        documentsReturnedIn: "firstBatch",
        session: this.session,
        timeoutContext
      };
    }
    handleOk(response) {
      return response;
    }
    buildCommandDocument() {
      return makeFindCommand(this.ns, this.filter, this.options);
    }
  }
  find.FindOperation = FindOperation;
  function makeFindCommand(ns, filter, options) {
    const findCommand = {
      find: ns.collection,
      filter
    };
    if (options.sort) {
      findCommand.sort = (0, sort_1.formatSort)(options.sort);
    }
    if (options.projection) {
      let projection = options.projection;
      if (projection && Array.isArray(projection)) {
        projection = projection.length ? projection.reduce((result, field) => {
          result[field] = 1;
          return result;
        }, {}) : { _id: 1 };
      }
      findCommand.projection = projection;
    }
    if (options.hint) {
      findCommand.hint = (0, utils_1.normalizeHintField)(options.hint);
    }
    if (typeof options.skip === "number") {
      findCommand.skip = options.skip;
    }
    if (typeof options.limit === "number") {
      if (options.limit < 0) {
        findCommand.limit = -options.limit;
        findCommand.singleBatch = true;
      } else {
        findCommand.limit = options.limit;
      }
    }
    if (typeof options.batchSize === "number") {
      if (options.batchSize < 0) {
        findCommand.limit = -options.batchSize;
      } else {
        if (options.batchSize === options.limit) {
          findCommand.batchSize = options.batchSize + 1;
        } else {
          findCommand.batchSize = options.batchSize;
        }
      }
    }
    if (typeof options.singleBatch === "boolean") {
      findCommand.singleBatch = options.singleBatch;
    }
    if (options.comment !== void 0) {
      findCommand.comment = options.comment;
    }
    if (options.max) {
      findCommand.max = options.max;
    }
    if (options.min) {
      findCommand.min = options.min;
    }
    if (typeof options.returnKey === "boolean") {
      findCommand.returnKey = options.returnKey;
    }
    if (typeof options.showRecordId === "boolean") {
      findCommand.showRecordId = options.showRecordId;
    }
    if (typeof options.tailable === "boolean") {
      findCommand.tailable = options.tailable;
    }
    if (typeof options.oplogReplay === "boolean") {
      findCommand.oplogReplay = options.oplogReplay;
    }
    if (typeof options.timeout === "boolean") {
      findCommand.noCursorTimeout = !options.timeout;
    } else if (typeof options.noCursorTimeout === "boolean") {
      findCommand.noCursorTimeout = options.noCursorTimeout;
    }
    if (typeof options.awaitData === "boolean") {
      findCommand.awaitData = options.awaitData;
    }
    if (typeof options.allowPartialResults === "boolean") {
      findCommand.allowPartialResults = options.allowPartialResults;
    }
    if (typeof options.allowDiskUse === "boolean") {
      findCommand.allowDiskUse = options.allowDiskUse;
    }
    if (options.let) {
      findCommand.let = options.let;
    }
    return findCommand;
  }
  (0, operation_1.defineAspects)(FindOperation, [
    operation_1.Aspect.READ_OPERATION,
    operation_1.Aspect.RETRYABLE,
    operation_1.Aspect.EXPLAINABLE,
    operation_1.Aspect.CURSOR_CREATING,
    operation_1.Aspect.SUPPORTS_RAW_DATA
  ]);
  return find;
}
var hasRequiredFind_cursor;
function requireFind_cursor() {
  if (hasRequiredFind_cursor) return find_cursor;
  hasRequiredFind_cursor = 1;
  Object.defineProperty(find_cursor, "__esModule", { value: true });
  find_cursor.FindCursor = find_cursor.FLAGS = void 0;
  const responses_1 = requireResponses();
  const error_1 = requireError();
  const explain_1 = requireExplain();
  const count_1 = requireCount();
  const execute_operation_1 = requireExecute_operation();
  const find_1 = requireFind();
  const sort_1 = requireSort();
  const utils_1 = requireUtils();
  const explainable_cursor_1 = requireExplainable_cursor();
  find_cursor.FLAGS = [
    "tailable",
    "oplogReplay",
    "noCursorTimeout",
    "awaitData",
    "exhaust",
    "partial"
  ];
  class FindCursor extends explainable_cursor_1.ExplainableCursor {
    /** @internal */
    constructor(client, namespace, filter = {}, options = {}) {
      super(client, namespace, options);
      this.numReturned = 0;
      this.cursorFilter = filter;
      this.findOptions = options;
      if (options.sort != null) {
        this.findOptions.sort = (0, sort_1.formatSort)(options.sort);
      }
    }
    clone() {
      const clonedOptions = (0, utils_1.mergeOptions)({}, this.findOptions);
      delete clonedOptions.session;
      return new FindCursor(this.client, this.namespace, this.cursorFilter, {
        ...clonedOptions
      });
    }
    map(transform) {
      return super.map(transform);
    }
    /** @internal */
    async _initialize(session) {
      const options = {
        ...this.findOptions,
        // NOTE: order matters here, we may need to refine this
        ...this.cursorOptions,
        session,
        signal: this.signal
      };
      if (options.explain) {
        try {
          (0, explain_1.validateExplainTimeoutOptions)(options, explain_1.Explain.fromOptions(options));
        } catch {
          throw new error_1.MongoAPIError("timeoutMS cannot be used with explain when explain is specified in findOptions");
        }
      }
      const findOperation = new find_1.FindOperation(this.namespace, this.cursorFilter, options);
      const response = await (0, execute_operation_1.executeOperation)(this.client, findOperation, this.timeoutContext);
      this.numReturned = response.batchSize;
      return { server: findOperation.server, session, response };
    }
    /** @internal */
    async getMore() {
      const numReturned = this.numReturned;
      const limit = this.findOptions.limit ?? Infinity;
      const remaining = limit - numReturned;
      if (numReturned === limit && !this.id?.isZero()) {
        try {
          await this.close();
        } catch (error2) {
          (0, utils_1.squashError)(error2);
        }
        return responses_1.CursorResponse.emptyGetMore;
      }
      let cleanup = utils_1.noop;
      const { batchSize } = this.cursorOptions;
      if (batchSize != null && batchSize > remaining) {
        this.cursorOptions.batchSize = remaining;
        cleanup = () => {
          this.cursorOptions.batchSize = batchSize;
        };
      }
      try {
        const response = await super.getMore();
        this.numReturned = this.numReturned + response.batchSize;
        return response;
      } finally {
        cleanup?.();
      }
    }
    /**
     * Get the count of documents for this cursor
     * @deprecated Use `collection.estimatedDocumentCount` or `collection.countDocuments` instead
     */
    async count(options) {
      (0, utils_1.emitWarningOnce)("cursor.count is deprecated and will be removed in the next major version, please use `collection.estimatedDocumentCount` or `collection.countDocuments` instead ");
      if (typeof options === "boolean") {
        throw new error_1.MongoInvalidArgumentError("Invalid first parameter to count");
      }
      return await (0, execute_operation_1.executeOperation)(this.client, new count_1.CountOperation(this.namespace, this.cursorFilter, {
        ...this.findOptions,
        // NOTE: order matters here, we may need to refine this
        ...this.cursorOptions,
        ...options
      }));
    }
    async explain(verbosity, options) {
      const { explain: explain2, timeout: timeout2 } = this.resolveExplainTimeoutOptions(verbosity, options);
      return (await (0, execute_operation_1.executeOperation)(this.client, new find_1.FindOperation(this.namespace, this.cursorFilter, {
        ...this.findOptions,
        // NOTE: order matters here, we may need to refine this
        ...this.cursorOptions,
        ...timeout2,
        explain: explain2 ?? true
      }))).shift(this.deserializationOptions);
    }
    /** Set the cursor query */
    filter(filter) {
      this.throwIfInitialized();
      this.cursorFilter = filter;
      return this;
    }
    /**
     * Set the cursor hint
     *
     * @param hint - If specified, then the query system will only consider plans using the hinted index.
     */
    hint(hint) {
      this.throwIfInitialized();
      this.findOptions.hint = hint;
      return this;
    }
    /**
     * Set the cursor min
     *
     * @param min - Specify a $min value to specify the inclusive lower bound for a specific index in order to constrain the results of find(). The $min specifies the lower bound for all keys of a specific index in order.
     */
    min(min) {
      this.throwIfInitialized();
      this.findOptions.min = min;
      return this;
    }
    /**
     * Set the cursor max
     *
     * @param max - Specify a $max value to specify the exclusive upper bound for a specific index in order to constrain the results of find(). The $max specifies the upper bound for all keys of a specific index in order.
     */
    max(max) {
      this.throwIfInitialized();
      this.findOptions.max = max;
      return this;
    }
    /**
     * Set the cursor returnKey.
     * If set to true, modifies the cursor to only return the index field or fields for the results of the query, rather than documents.
     * If set to true and the query does not use an index to perform the read operation, the returned documents will not contain any fields.
     *
     * @param value - the returnKey value.
     */
    returnKey(value) {
      this.throwIfInitialized();
      this.findOptions.returnKey = value;
      return this;
    }
    /**
     * Modifies the output of a query by adding a field $recordId to matching documents. $recordId is the internal key which uniquely identifies a document in a collection.
     *
     * @param value - The $showDiskLoc option has now been deprecated and replaced with the showRecordId field. $showDiskLoc will still be accepted for OP_QUERY stye find.
     */
    showRecordId(value) {
      this.throwIfInitialized();
      this.findOptions.showRecordId = value;
      return this;
    }
    /**
     * Add a query modifier to the cursor query
     *
     * @param name - The query modifier (must start with $, such as $orderby etc)
     * @param value - The modifier value.
     */
    addQueryModifier(name, value) {
      this.throwIfInitialized();
      if (name[0] !== "$") {
        throw new error_1.MongoInvalidArgumentError(`${name} is not a valid query modifier`);
      }
      const field = name.substr(1);
      switch (field) {
        case "comment":
          this.findOptions.comment = value;
          break;
        case "explain":
          this.findOptions.explain = value;
          break;
        case "hint":
          this.findOptions.hint = value;
          break;
        case "max":
          this.findOptions.max = value;
          break;
        case "maxTimeMS":
          this.findOptions.maxTimeMS = value;
          break;
        case "min":
          this.findOptions.min = value;
          break;
        case "orderby":
          this.findOptions.sort = (0, sort_1.formatSort)(value);
          break;
        case "query":
          this.cursorFilter = value;
          break;
        case "returnKey":
          this.findOptions.returnKey = value;
          break;
        case "showDiskLoc":
          this.findOptions.showRecordId = value;
          break;
        default:
          throw new error_1.MongoInvalidArgumentError(`Invalid query modifier: ${name}`);
      }
      return this;
    }
    /**
     * Add a comment to the cursor query allowing for tracking the comment in the log.
     *
     * @param value - The comment attached to this query.
     */
    comment(value) {
      this.throwIfInitialized();
      this.findOptions.comment = value;
      return this;
    }
    /**
     * Set a maxAwaitTimeMS on a tailing cursor query to allow to customize the timeout value for the option awaitData (Only supported on MongoDB 3.2 or higher, ignored otherwise)
     *
     * @param value - Number of milliseconds to wait before aborting the tailed query.
     */
    maxAwaitTimeMS(value) {
      this.throwIfInitialized();
      if (typeof value !== "number") {
        throw new error_1.MongoInvalidArgumentError("Argument for maxAwaitTimeMS must be a number");
      }
      this.findOptions.maxAwaitTimeMS = value;
      return this;
    }
    /**
     * Set a maxTimeMS on the cursor query, allowing for hard timeout limits on queries (Only supported on MongoDB 2.6 or higher)
     *
     * @param value - Number of milliseconds to wait before aborting the query.
     */
    maxTimeMS(value) {
      this.throwIfInitialized();
      if (typeof value !== "number") {
        throw new error_1.MongoInvalidArgumentError("Argument for maxTimeMS must be a number");
      }
      this.findOptions.maxTimeMS = value;
      return this;
    }
    /**
     * Add a project stage to the aggregation pipeline
     *
     * @remarks
     * In order to strictly type this function you must provide an interface
     * that represents the effect of your projection on the result documents.
     *
     * By default chaining a projection to your cursor changes the returned type to the generic
     * {@link Document} type.
     * You should specify a parameterized type to have assertions on your final results.
     *
     * @example
     * ```typescript
     * // Best way
     * const docs: FindCursor<{ a: number }> = cursor.project<{ a: number }>({ _id: 0, a: true });
     * // Flexible way
     * const docs: FindCursor<Document> = cursor.project({ _id: 0, a: true });
     * ```
     *
     * @remarks
     *
     * **Note for Typescript Users:** adding a transform changes the return type of the iteration of this cursor,
     * it **does not** return a new instance of a cursor. This means when calling project,
     * you should always assign the result to a new variable in order to get a correctly typed cursor variable.
     * Take note of the following example:
     *
     * @example
     * ```typescript
     * const cursor: FindCursor<{ a: number; b: string }> = coll.find();
     * const projectCursor = cursor.project<{ a: number }>({ _id: 0, a: true });
     * const aPropOnlyArray: {a: number}[] = await projectCursor.toArray();
     *
     * // or always use chaining and save the final cursor
     *
     * const cursor = coll.find().project<{ a: string }>({
     *   _id: 0,
     *   a: { $convert: { input: '$a', to: 'string' }
     * }});
     * ```
     */
    project(value) {
      this.throwIfInitialized();
      this.findOptions.projection = value;
      return this;
    }
    /**
     * Sets the sort order of the cursor query.
     *
     * @param sort - The key or keys set for the sort.
     * @param direction - The direction of the sorting (1 or -1).
     */
    sort(sort2, direction) {
      this.throwIfInitialized();
      if (this.findOptions.tailable) {
        throw new error_1.MongoTailableCursorError("Tailable cursor does not support sorting");
      }
      this.findOptions.sort = (0, sort_1.formatSort)(sort2, direction);
      return this;
    }
    /**
     * Allows disk use for blocking sort operations exceeding 100MB memory. (MongoDB 3.2 or higher)
     *
     * @remarks
     * {@link https://www.mongodb.com/docs/manual/reference/command/find/#find-cmd-allowdiskuse | find command allowDiskUse documentation}
     */
    allowDiskUse(allow = true) {
      this.throwIfInitialized();
      if (!this.findOptions.sort) {
        throw new error_1.MongoInvalidArgumentError('Option "allowDiskUse" requires a sort specification');
      }
      if (!allow) {
        this.findOptions.allowDiskUse = false;
        return this;
      }
      this.findOptions.allowDiskUse = true;
      return this;
    }
    /**
     * Set the collation options for the cursor.
     *
     * @param value - The cursor collation options (MongoDB 3.4 or higher) settings for update operation (see 3.4 documentation for available fields).
     */
    collation(value) {
      this.throwIfInitialized();
      this.findOptions.collation = value;
      return this;
    }
    /**
     * Set the limit for the cursor.
     *
     * @param value - The limit for the cursor query.
     */
    limit(value) {
      this.throwIfInitialized();
      if (this.findOptions.tailable) {
        throw new error_1.MongoTailableCursorError("Tailable cursor does not support limit");
      }
      if (typeof value !== "number") {
        throw new error_1.MongoInvalidArgumentError('Operation "limit" requires an integer');
      }
      this.findOptions.limit = value;
      return this;
    }
    /**
     * Set the skip for the cursor.
     *
     * @param value - The skip for the cursor query.
     */
    skip(value) {
      this.throwIfInitialized();
      if (this.findOptions.tailable) {
        throw new error_1.MongoTailableCursorError("Tailable cursor does not support skip");
      }
      if (typeof value !== "number") {
        throw new error_1.MongoInvalidArgumentError('Operation "skip" requires an integer');
      }
      this.findOptions.skip = value;
      return this;
    }
  }
  find_cursor.FindCursor = FindCursor;
  return find_cursor;
}
var list_indexes_cursor = {};
var indexes = {};
var hasRequiredIndexes;
function requireIndexes() {
  if (hasRequiredIndexes) return indexes;
  hasRequiredIndexes = 1;
  Object.defineProperty(indexes, "__esModule", { value: true });
  indexes.ListIndexesOperation = indexes.DropIndexOperation = indexes.CreateIndexesOperation = void 0;
  const responses_1 = requireResponses();
  const error_1 = requireError();
  const utils_1 = requireUtils();
  const command_1 = requireCommand();
  const operation_1 = requireOperation();
  const VALID_INDEX_OPTIONS = /* @__PURE__ */ new Set([
    "background",
    "unique",
    "name",
    "partialFilterExpression",
    "sparse",
    "hidden",
    "expireAfterSeconds",
    "storageEngine",
    "collation",
    "version",
    // text indexes
    "weights",
    "default_language",
    "language_override",
    "textIndexVersion",
    // 2d-sphere indexes
    "2dsphereIndexVersion",
    // 2d indexes
    "bits",
    "min",
    "max",
    // geoHaystack Indexes
    "bucketSize",
    // wildcard indexes
    "wildcardProjection"
  ]);
  function isIndexDirection(x) {
    return typeof x === "number" || x === "2d" || x === "2dsphere" || x === "text" || x === "geoHaystack";
  }
  function isSingleIndexTuple(t) {
    return Array.isArray(t) && t.length === 2 && isIndexDirection(t[1]);
  }
  function constructIndexDescriptionMap(indexSpec) {
    const key = /* @__PURE__ */ new Map();
    const indexSpecs = !Array.isArray(indexSpec) || isSingleIndexTuple(indexSpec) ? [indexSpec] : indexSpec;
    for (const spec of indexSpecs) {
      if (typeof spec === "string") {
        key.set(spec, 1);
      } else if (Array.isArray(spec)) {
        key.set(spec[0], spec[1] ?? 1);
      } else if (spec instanceof Map) {
        for (const [property, value] of spec) {
          key.set(property, value);
        }
      } else if ((0, utils_1.isObject)(spec)) {
        for (const [property, value] of Object.entries(spec)) {
          key.set(property, value);
        }
      }
    }
    return key;
  }
  function resolveIndexDescription(description) {
    const validProvidedOptions = Object.entries(description).filter(([optionName]) => VALID_INDEX_OPTIONS.has(optionName));
    return Object.fromEntries(
      // we support the `version` option, but the `createIndexes` command expects it to be the `v`
      validProvidedOptions.map(([name, value]) => name === "version" ? ["v", value] : [name, value])
    );
  }
  class CreateIndexesOperation extends command_1.CommandOperation {
    constructor(parent, collectionName, indexes2, options) {
      super(parent, options);
      this.SERVER_COMMAND_RESPONSE_TYPE = responses_1.MongoDBResponse;
      this.options = options ?? {};
      this.options.collation = void 0;
      this.collectionName = collectionName;
      this.indexes = indexes2.map((userIndex) => {
        const key = userIndex.key instanceof Map ? userIndex.key : new Map(Object.entries(userIndex.key));
        const name = userIndex.name ?? Array.from(key).flat().join("_");
        const validIndexOptions = resolveIndexDescription(userIndex);
        return {
          ...validIndexOptions,
          name,
          key
        };
      });
      this.ns = parent.s.namespace;
    }
    static fromIndexDescriptionArray(parent, collectionName, indexes2, options) {
      return new CreateIndexesOperation(parent, collectionName, indexes2, options);
    }
    static fromIndexSpecification(parent, collectionName, indexSpec, options = {}) {
      const key = constructIndexDescriptionMap(indexSpec);
      const description = { ...options, key };
      return new CreateIndexesOperation(parent, collectionName, [description], options);
    }
    get commandName() {
      return "createIndexes";
    }
    buildCommandDocument(connection2) {
      const options = this.options;
      const indexes2 = this.indexes;
      const serverWireVersion = (0, utils_1.maxWireVersion)(connection2);
      const cmd = { createIndexes: this.collectionName, indexes: indexes2 };
      if (options.commitQuorum != null) {
        if (serverWireVersion < 9) {
          throw new error_1.MongoCompatibilityError("Option `commitQuorum` for `createIndexes` not supported on servers < 4.4");
        }
        cmd.commitQuorum = options.commitQuorum;
      }
      return cmd;
    }
    handleOk(_response) {
      const indexNames = this.indexes.map((index) => index.name || "");
      return indexNames;
    }
  }
  indexes.CreateIndexesOperation = CreateIndexesOperation;
  class DropIndexOperation extends command_1.CommandOperation {
    constructor(collection2, indexName, options) {
      super(collection2, options);
      this.SERVER_COMMAND_RESPONSE_TYPE = responses_1.MongoDBResponse;
      this.options = options ?? {};
      this.collection = collection2;
      this.indexName = indexName;
      this.ns = collection2.fullNamespace;
    }
    get commandName() {
      return "dropIndexes";
    }
    buildCommandDocument(_connection) {
      return { dropIndexes: this.collection.collectionName, index: this.indexName };
    }
  }
  indexes.DropIndexOperation = DropIndexOperation;
  class ListIndexesOperation extends command_1.CommandOperation {
    constructor(collection2, options) {
      super(collection2, options);
      this.SERVER_COMMAND_RESPONSE_TYPE = responses_1.CursorResponse;
      this.options = { ...options };
      delete this.options.writeConcern;
      this.collectionNamespace = collection2.s.namespace;
    }
    get commandName() {
      return "listIndexes";
    }
    buildCommandDocument(connection2) {
      const serverWireVersion = (0, utils_1.maxWireVersion)(connection2);
      const cursor = this.options.batchSize ? { batchSize: this.options.batchSize } : {};
      const command2 = { listIndexes: this.collectionNamespace.collection, cursor };
      if (serverWireVersion >= 9 && this.options.comment !== void 0) {
        command2.comment = this.options.comment;
      }
      return command2;
    }
    handleOk(response) {
      return response;
    }
  }
  indexes.ListIndexesOperation = ListIndexesOperation;
  (0, operation_1.defineAspects)(ListIndexesOperation, [
    operation_1.Aspect.READ_OPERATION,
    operation_1.Aspect.RETRYABLE,
    operation_1.Aspect.CURSOR_CREATING,
    operation_1.Aspect.SUPPORTS_RAW_DATA
  ]);
  (0, operation_1.defineAspects)(CreateIndexesOperation, [operation_1.Aspect.WRITE_OPERATION, operation_1.Aspect.SUPPORTS_RAW_DATA]);
  (0, operation_1.defineAspects)(DropIndexOperation, [operation_1.Aspect.WRITE_OPERATION, operation_1.Aspect.SUPPORTS_RAW_DATA]);
  return indexes;
}
var hasRequiredList_indexes_cursor;
function requireList_indexes_cursor() {
  if (hasRequiredList_indexes_cursor) return list_indexes_cursor;
  hasRequiredList_indexes_cursor = 1;
  Object.defineProperty(list_indexes_cursor, "__esModule", { value: true });
  list_indexes_cursor.ListIndexesCursor = void 0;
  const execute_operation_1 = requireExecute_operation();
  const indexes_1 = requireIndexes();
  const abstract_cursor_1 = requireAbstract_cursor();
  class ListIndexesCursor extends abstract_cursor_1.AbstractCursor {
    constructor(collection2, options) {
      super(collection2.client, collection2.s.namespace, options);
      this.parent = collection2;
      this.options = options;
    }
    clone() {
      return new ListIndexesCursor(this.parent, {
        ...this.options,
        ...this.cursorOptions
      });
    }
    /** @internal */
    async _initialize(session) {
      const operation2 = new indexes_1.ListIndexesOperation(this.parent, {
        ...this.cursorOptions,
        ...this.options,
        session
      });
      const response = await (0, execute_operation_1.executeOperation)(this.parent.client, operation2, this.timeoutContext);
      return { server: operation2.server, session, response };
    }
  }
  list_indexes_cursor.ListIndexesCursor = ListIndexesCursor;
  return list_indexes_cursor;
}
var list_search_indexes_cursor = {};
var hasRequiredList_search_indexes_cursor;
function requireList_search_indexes_cursor() {
  if (hasRequiredList_search_indexes_cursor) return list_search_indexes_cursor;
  hasRequiredList_search_indexes_cursor = 1;
  Object.defineProperty(list_search_indexes_cursor, "__esModule", { value: true });
  list_search_indexes_cursor.ListSearchIndexesCursor = void 0;
  const aggregation_cursor_1 = requireAggregation_cursor();
  class ListSearchIndexesCursor extends aggregation_cursor_1.AggregationCursor {
    /** @internal */
    constructor({ fullNamespace: ns, client }, name, options = {}) {
      const pipeline = name == null ? [{ $listSearchIndexes: {} }] : [{ $listSearchIndexes: { name } }];
      super(client, ns, pipeline, options);
    }
  }
  list_search_indexes_cursor.ListSearchIndexesCursor = ListSearchIndexesCursor;
  return list_search_indexes_cursor;
}
var distinct = {};
var hasRequiredDistinct;
function requireDistinct() {
  if (hasRequiredDistinct) return distinct;
  hasRequiredDistinct = 1;
  Object.defineProperty(distinct, "__esModule", { value: true });
  distinct.DistinctOperation = void 0;
  const responses_1 = requireResponses();
  const command_1 = requireCommand();
  const operation_1 = requireOperation();
  class DistinctOperation extends command_1.CommandOperation {
    /**
     * Construct a Distinct operation.
     *
     * @param collection - Collection instance.
     * @param key - Field of the document to find distinct values for.
     * @param query - The query for filtering the set of documents to which we apply the distinct filter.
     * @param options - Optional settings. See Collection.prototype.distinct for a list of options.
     */
    constructor(collection2, key, query, options) {
      super(collection2, options);
      this.SERVER_COMMAND_RESPONSE_TYPE = responses_1.MongoDBResponse;
      this.options = options ?? {};
      this.collection = collection2;
      this.key = key;
      this.query = query;
    }
    get commandName() {
      return "distinct";
    }
    buildCommandDocument(_connection) {
      const command2 = {
        distinct: this.collection.collectionName,
        key: this.key,
        query: this.query
      };
      if (this.options.comment !== void 0) {
        command2.comment = this.options.comment;
      }
      if (this.options.hint != null) {
        command2.hint = this.options.hint;
      }
      return command2;
    }
    handleOk(response) {
      if (this.explain) {
        return response.toObject(this.bsonOptions);
      }
      return response.toObject(this.bsonOptions).values;
    }
  }
  distinct.DistinctOperation = DistinctOperation;
  (0, operation_1.defineAspects)(DistinctOperation, [
    operation_1.Aspect.READ_OPERATION,
    operation_1.Aspect.RETRYABLE,
    operation_1.Aspect.EXPLAINABLE,
    operation_1.Aspect.SUPPORTS_RAW_DATA
  ]);
  return distinct;
}
var estimated_document_count = {};
var hasRequiredEstimated_document_count;
function requireEstimated_document_count() {
  if (hasRequiredEstimated_document_count) return estimated_document_count;
  hasRequiredEstimated_document_count = 1;
  Object.defineProperty(estimated_document_count, "__esModule", { value: true });
  estimated_document_count.EstimatedDocumentCountOperation = void 0;
  const responses_1 = requireResponses();
  const command_1 = requireCommand();
  const operation_1 = requireOperation();
  class EstimatedDocumentCountOperation extends command_1.CommandOperation {
    constructor(collection2, options = {}) {
      super(collection2, options);
      this.SERVER_COMMAND_RESPONSE_TYPE = responses_1.MongoDBResponse;
      this.options = options;
      this.collectionName = collection2.collectionName;
    }
    get commandName() {
      return "count";
    }
    buildCommandDocument(_connection, _session) {
      const cmd = { count: this.collectionName };
      if (typeof this.options.maxTimeMS === "number") {
        cmd.maxTimeMS = this.options.maxTimeMS;
      }
      if (this.options.comment !== void 0) {
        cmd.comment = this.options.comment;
      }
      return cmd;
    }
    handleOk(response) {
      return response.getNumber("n") ?? 0;
    }
  }
  estimated_document_count.EstimatedDocumentCountOperation = EstimatedDocumentCountOperation;
  (0, operation_1.defineAspects)(EstimatedDocumentCountOperation, [
    operation_1.Aspect.READ_OPERATION,
    operation_1.Aspect.RETRYABLE,
    operation_1.Aspect.CURSOR_CREATING,
    operation_1.Aspect.SUPPORTS_RAW_DATA
  ]);
  return estimated_document_count;
}
var find_and_modify = {};
var hasRequiredFind_and_modify;
function requireFind_and_modify() {
  if (hasRequiredFind_and_modify) return find_and_modify;
  hasRequiredFind_and_modify = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FindOneAndUpdateOperation = exports.FindOneAndReplaceOperation = exports.FindOneAndDeleteOperation = exports.FindAndModifyOperation = exports.ReturnDocument = void 0;
    const responses_1 = requireResponses();
    const error_1 = requireError();
    const read_preference_1 = requireRead_preference();
    const sort_1 = requireSort();
    const utils_1 = requireUtils();
    const command_1 = requireCommand();
    const operation_1 = requireOperation();
    exports.ReturnDocument = Object.freeze({
      BEFORE: "before",
      AFTER: "after"
    });
    function configureFindAndModifyCmdBaseUpdateOpts(cmdBase, options) {
      cmdBase.new = options.returnDocument === exports.ReturnDocument.AFTER;
      cmdBase.upsert = options.upsert === true;
      if (options.bypassDocumentValidation === true) {
        cmdBase.bypassDocumentValidation = options.bypassDocumentValidation;
      }
      return cmdBase;
    }
    class FindAndModifyOperation extends command_1.CommandOperation {
      constructor(collection2, query, options) {
        super(collection2, options);
        this.SERVER_COMMAND_RESPONSE_TYPE = responses_1.MongoDBResponse;
        this.options = options;
        this.readPreference = read_preference_1.ReadPreference.primary;
        this.collection = collection2;
        this.query = query;
      }
      get commandName() {
        return "findAndModify";
      }
      buildCommandDocument(connection2, _session) {
        const options = this.options;
        const command2 = {
          findAndModify: this.collection.collectionName,
          query: this.query,
          remove: false,
          new: false,
          upsert: false
        };
        options.includeResultMetadata ??= false;
        const sort2 = (0, sort_1.formatSort)(options.sort);
        if (sort2) {
          command2.sort = sort2;
        }
        if (options.projection) {
          command2.fields = options.projection;
        }
        if (options.maxTimeMS) {
          command2.maxTimeMS = options.maxTimeMS;
        }
        if (options.writeConcern) {
          command2.writeConcern = options.writeConcern;
        }
        if (options.let) {
          command2.let = options.let;
        }
        if (options.comment !== void 0) {
          command2.comment = options.comment;
        }
        (0, utils_1.decorateWithCollation)(command2, options);
        if (options.hint) {
          const unacknowledgedWrite = this.writeConcern?.w === 0;
          if (unacknowledgedWrite && (0, utils_1.maxWireVersion)(connection2) < 9) {
            throw new error_1.MongoCompatibilityError("hint for the findAndModify command is only supported on MongoDB 4.4+");
          }
          command2.hint = options.hint;
        }
        return command2;
      }
      handleOk(response) {
        const result = super.handleOk(response);
        return this.options.includeResultMetadata ? result : result.value ?? null;
      }
    }
    exports.FindAndModifyOperation = FindAndModifyOperation;
    class FindOneAndDeleteOperation extends FindAndModifyOperation {
      constructor(collection2, filter, options) {
        if (filter == null || typeof filter !== "object") {
          throw new error_1.MongoInvalidArgumentError('Argument "filter" must be an object');
        }
        super(collection2, filter, options);
      }
      buildCommandDocument(connection2, session) {
        const document2 = super.buildCommandDocument(connection2, session);
        document2.remove = true;
        return document2;
      }
    }
    exports.FindOneAndDeleteOperation = FindOneAndDeleteOperation;
    class FindOneAndReplaceOperation extends FindAndModifyOperation {
      constructor(collection2, filter, replacement, options) {
        if (filter == null || typeof filter !== "object") {
          throw new error_1.MongoInvalidArgumentError('Argument "filter" must be an object');
        }
        if (replacement == null || typeof replacement !== "object") {
          throw new error_1.MongoInvalidArgumentError('Argument "replacement" must be an object');
        }
        if ((0, utils_1.hasAtomicOperators)(replacement)) {
          throw new error_1.MongoInvalidArgumentError("Replacement document must not contain atomic operators");
        }
        super(collection2, filter, options);
        this.replacement = replacement;
      }
      buildCommandDocument(connection2, session) {
        const document2 = super.buildCommandDocument(connection2, session);
        document2.update = this.replacement;
        configureFindAndModifyCmdBaseUpdateOpts(document2, this.options);
        return document2;
      }
    }
    exports.FindOneAndReplaceOperation = FindOneAndReplaceOperation;
    class FindOneAndUpdateOperation extends FindAndModifyOperation {
      constructor(collection2, filter, update2, options) {
        if (filter == null || typeof filter !== "object") {
          throw new error_1.MongoInvalidArgumentError('Argument "filter" must be an object');
        }
        if (update2 == null || typeof update2 !== "object") {
          throw new error_1.MongoInvalidArgumentError('Argument "update" must be an object');
        }
        if (!(0, utils_1.hasAtomicOperators)(update2, options)) {
          throw new error_1.MongoInvalidArgumentError("Update document requires atomic operators");
        }
        super(collection2, filter, options);
        this.update = update2;
        this.options = options;
      }
      buildCommandDocument(connection2, session) {
        const document2 = super.buildCommandDocument(connection2, session);
        document2.update = this.update;
        configureFindAndModifyCmdBaseUpdateOpts(document2, this.options);
        if (this.options.arrayFilters) {
          document2.arrayFilters = this.options.arrayFilters;
        }
        return document2;
      }
    }
    exports.FindOneAndUpdateOperation = FindOneAndUpdateOperation;
    (0, operation_1.defineAspects)(FindAndModifyOperation, [
      operation_1.Aspect.WRITE_OPERATION,
      operation_1.Aspect.RETRYABLE,
      operation_1.Aspect.EXPLAINABLE,
      operation_1.Aspect.SUPPORTS_RAW_DATA
    ]);
  })(find_and_modify);
  return find_and_modify;
}
var rename = {};
var hasRequiredRename;
function requireRename() {
  if (hasRequiredRename) return rename;
  hasRequiredRename = 1;
  Object.defineProperty(rename, "__esModule", { value: true });
  rename.RenameOperation = void 0;
  const responses_1 = requireResponses();
  const collection_1 = requireCollection();
  const utils_1 = requireUtils();
  const command_1 = requireCommand();
  const operation_1 = requireOperation();
  class RenameOperation extends command_1.CommandOperation {
    constructor(collection2, newName, options) {
      super(collection2, options);
      this.SERVER_COMMAND_RESPONSE_TYPE = responses_1.MongoDBResponse;
      this.collection = collection2;
      this.newName = newName;
      this.options = options;
      this.ns = new utils_1.MongoDBNamespace("admin", "$cmd");
    }
    get commandName() {
      return "renameCollection";
    }
    buildCommandDocument(_connection, _session) {
      const renameCollection = this.collection.namespace;
      const to = this.collection.s.namespace.withCollection(this.newName).toString();
      const dropTarget = typeof this.options.dropTarget === "boolean" ? this.options.dropTarget : false;
      return {
        renameCollection,
        to,
        dropTarget
      };
    }
    handleOk(_response) {
      return new collection_1.Collection(this.collection.db, this.newName, this.collection.s.options);
    }
  }
  rename.RenameOperation = RenameOperation;
  (0, operation_1.defineAspects)(RenameOperation, [operation_1.Aspect.WRITE_OPERATION]);
  return rename;
}
var create = {};
var hasRequiredCreate;
function requireCreate() {
  if (hasRequiredCreate) return create;
  hasRequiredCreate = 1;
  Object.defineProperty(create, "__esModule", { value: true });
  create.CreateSearchIndexesOperation = void 0;
  const responses_1 = requireResponses();
  const operation_1 = requireOperation();
  class CreateSearchIndexesOperation extends operation_1.AbstractOperation {
    constructor(collection2, descriptions) {
      super();
      this.SERVER_COMMAND_RESPONSE_TYPE = responses_1.MongoDBResponse;
      this.collection = collection2;
      this.descriptions = descriptions;
      this.ns = collection2.fullNamespace;
    }
    get commandName() {
      return "createSearchIndexes";
    }
    buildCommand(_connection, _session) {
      const namespace = this.collection.fullNamespace;
      return {
        createSearchIndexes: namespace.collection,
        indexes: this.descriptions
      };
    }
    handleOk(response) {
      return super.handleOk(response).indexesCreated.map((val) => val.name);
    }
    buildOptions(timeoutContext) {
      return { session: this.session, timeoutContext };
    }
  }
  create.CreateSearchIndexesOperation = CreateSearchIndexesOperation;
  return create;
}
var drop$1 = {};
var hasRequiredDrop$1;
function requireDrop$1() {
  if (hasRequiredDrop$1) return drop$1;
  hasRequiredDrop$1 = 1;
  Object.defineProperty(drop$1, "__esModule", { value: true });
  drop$1.DropSearchIndexOperation = void 0;
  const responses_1 = requireResponses();
  const error_1 = requireError();
  const operation_1 = requireOperation();
  class DropSearchIndexOperation extends operation_1.AbstractOperation {
    constructor(collection2, name) {
      super();
      this.SERVER_COMMAND_RESPONSE_TYPE = responses_1.MongoDBResponse;
      this.collection = collection2;
      this.name = name;
      this.ns = collection2.fullNamespace;
    }
    get commandName() {
      return "dropSearchIndex";
    }
    buildCommand(_connection, _session) {
      const namespace = this.collection.fullNamespace;
      const command2 = {
        dropSearchIndex: namespace.collection
      };
      if (typeof this.name === "string") {
        command2.name = this.name;
      }
      return command2;
    }
    handleOk(_response) {
    }
    buildOptions(timeoutContext) {
      return { session: this.session, timeoutContext };
    }
    handleError(error2) {
      const isNamespaceNotFoundError = error2 instanceof error_1.MongoServerError && error2.code === error_1.MONGODB_ERROR_CODES.NamespaceNotFound;
      if (!isNamespaceNotFoundError) {
        throw error2;
      }
    }
  }
  drop$1.DropSearchIndexOperation = DropSearchIndexOperation;
  return drop$1;
}
var update = {};
var hasRequiredUpdate;
function requireUpdate() {
  if (hasRequiredUpdate) return update;
  hasRequiredUpdate = 1;
  Object.defineProperty(update, "__esModule", { value: true });
  update.UpdateSearchIndexOperation = void 0;
  const responses_1 = requireResponses();
  const operation_1 = requireOperation();
  class UpdateSearchIndexOperation extends operation_1.AbstractOperation {
    constructor(collection2, name, definition) {
      super();
      this.SERVER_COMMAND_RESPONSE_TYPE = responses_1.MongoDBResponse;
      this.collection = collection2;
      this.name = name;
      this.definition = definition;
      this.ns = collection2.fullNamespace;
    }
    get commandName() {
      return "updateSearchIndex";
    }
    buildCommand(_connection, _session) {
      const namespace = this.collection.fullNamespace;
      return {
        updateSearchIndex: namespace.collection,
        name: this.name,
        definition: this.definition
      };
    }
    handleOk(_response) {
    }
    buildOptions(timeoutContext) {
      return { session: this.session, timeoutContext };
    }
  }
  update.UpdateSearchIndexOperation = UpdateSearchIndexOperation;
  return update;
}
var hasRequiredCollection;
function requireCollection() {
  if (hasRequiredCollection) return collection;
  hasRequiredCollection = 1;
  Object.defineProperty(collection, "__esModule", { value: true });
  collection.Collection = void 0;
  const bson_1 = requireBson();
  const ordered_1 = requireOrdered();
  const unordered_1 = requireUnordered();
  const change_stream_1 = requireChange_stream();
  const aggregation_cursor_1 = requireAggregation_cursor();
  const find_cursor_1 = requireFind_cursor();
  const list_indexes_cursor_1 = requireList_indexes_cursor();
  const list_search_indexes_cursor_1 = requireList_search_indexes_cursor();
  const error_1 = requireError();
  const count_1 = requireCount();
  const delete_1 = require_delete();
  const distinct_1 = requireDistinct();
  const estimated_document_count_1 = requireEstimated_document_count();
  const execute_operation_1 = requireExecute_operation();
  const find_and_modify_1 = requireFind_and_modify();
  const indexes_1 = requireIndexes();
  const insert_1 = requireInsert();
  const rename_1 = requireRename();
  const create_1 = requireCreate();
  const drop_1 = requireDrop$1();
  const update_1 = requireUpdate();
  const update_2 = requireUpdate$1();
  const read_concern_1 = requireRead_concern();
  const read_preference_1 = requireRead_preference();
  const utils_1 = requireUtils();
  const write_concern_1 = requireWrite_concern();
  class Collection {
    /**
     * Create a new Collection instance
     * @internal
     */
    constructor(db2, name, options) {
      this.db = db2;
      this.s = {
        db: db2,
        options,
        namespace: new utils_1.MongoDBCollectionNamespace(db2.databaseName, name),
        pkFactory: db2.options?.pkFactory ?? utils_1.DEFAULT_PK_FACTORY,
        readPreference: read_preference_1.ReadPreference.fromOptions(options),
        bsonOptions: (0, bson_1.resolveBSONOptions)(options, db2),
        readConcern: read_concern_1.ReadConcern.fromOptions(options),
        writeConcern: write_concern_1.WriteConcern.fromOptions(options)
      };
      this.client = db2.client;
    }
    /**
     * The name of the database this collection belongs to
     */
    get dbName() {
      return this.s.namespace.db;
    }
    /**
     * The name of this collection
     */
    get collectionName() {
      return this.s.namespace.collection;
    }
    /**
     * The namespace of this collection, in the format `${this.dbName}.${this.collectionName}`
     */
    get namespace() {
      return this.fullNamespace.toString();
    }
    /**
     *  @internal
     *
     * The `MongoDBNamespace` for the collection.
     */
    get fullNamespace() {
      return this.s.namespace;
    }
    /**
     * The current readConcern of the collection. If not explicitly defined for
     * this collection, will be inherited from the parent DB
     */
    get readConcern() {
      if (this.s.readConcern == null) {
        return this.db.readConcern;
      }
      return this.s.readConcern;
    }
    /**
     * The current readPreference of the collection. If not explicitly defined for
     * this collection, will be inherited from the parent DB
     */
    get readPreference() {
      if (this.s.readPreference == null) {
        return this.db.readPreference;
      }
      return this.s.readPreference;
    }
    get bsonOptions() {
      return this.s.bsonOptions;
    }
    /**
     * The current writeConcern of the collection. If not explicitly defined for
     * this collection, will be inherited from the parent DB
     */
    get writeConcern() {
      if (this.s.writeConcern == null) {
        return this.db.writeConcern;
      }
      return this.s.writeConcern;
    }
    /** The current index hint for the collection */
    get hint() {
      return this.s.collectionHint;
    }
    set hint(v) {
      this.s.collectionHint = (0, utils_1.normalizeHintField)(v);
    }
    get timeoutMS() {
      return this.s.options.timeoutMS;
    }
    /**
     * Inserts a single document into MongoDB. If documents passed in do not contain the **_id** field,
     * one will be added to each of the documents missing it by the driver, mutating the document. This behavior
     * can be overridden by setting the **forceServerObjectId** flag.
     *
     * @param doc - The document to insert
     * @param options - Optional settings for the command
     */
    async insertOne(doc, options) {
      return await (0, execute_operation_1.executeOperation)(this.client, new insert_1.InsertOneOperation(this, doc, (0, utils_1.resolveOptions)(this, options)));
    }
    /**
     * Inserts an array of documents into MongoDB. If documents passed in do not contain the **_id** field,
     * one will be added to each of the documents missing it by the driver, mutating the document. This behavior
     * can be overridden by setting the **forceServerObjectId** flag.
     *
     * @param docs - The documents to insert
     * @param options - Optional settings for the command
     */
    async insertMany(docs, options) {
      if (!Array.isArray(docs)) {
        throw new error_1.MongoInvalidArgumentError('Argument "docs" must be an array of documents');
      }
      options = (0, utils_1.resolveOptions)(this, options ?? {});
      const acknowledged = write_concern_1.WriteConcern.fromOptions(options)?.w !== 0;
      try {
        const res = await this.bulkWrite(docs.map((doc) => ({ insertOne: { document: doc } })), options);
        return {
          acknowledged,
          insertedCount: res.insertedCount,
          insertedIds: res.insertedIds
        };
      } catch (err) {
        if (err && err.message === "Operation must be an object with an operation key") {
          throw new error_1.MongoInvalidArgumentError("Collection.insertMany() cannot be called with an array that has null/undefined values");
        }
        throw err;
      }
    }
    /**
     * Perform a bulkWrite operation without a fluent API
     *
     * Legal operation types are
     * - `insertOne`
     * - `replaceOne`
     * - `updateOne`
     * - `updateMany`
     * - `deleteOne`
     * - `deleteMany`
     *
     * If documents passed in do not contain the **_id** field,
     * one will be added to each of the documents missing it by the driver, mutating the document. This behavior
     * can be overridden by setting the **forceServerObjectId** flag.
     *
     * @param operations - Bulk operations to perform
     * @param options - Optional settings for the command
     * @throws MongoDriverError if operations is not an array
     */
    async bulkWrite(operations, options) {
      if (!Array.isArray(operations)) {
        throw new error_1.MongoInvalidArgumentError('Argument "operations" must be an array of documents');
      }
      options = (0, utils_1.resolveOptions)(this, options ?? {});
      const isConnected = this.client.topology != null;
      if (!isConnected) {
        await (0, execute_operation_1.autoConnect)(this.client);
      }
      const bulk = options.ordered === false ? this.initializeUnorderedBulkOp(options) : this.initializeOrderedBulkOp(options);
      for (const operation2 of operations) {
        bulk.raw(operation2);
      }
      return await bulk.execute({ ...options });
    }
    /**
     * Update a single document in a collection
     *
     * The value of `update` can be either:
     * - UpdateFilter<TSchema> - A document that contains update operator expressions,
     * - Document[] - an aggregation pipeline.
     *
     * @param filter - The filter used to select the document to update
     * @param update - The modifications to apply
     * @param options - Optional settings for the command
     */
    async updateOne(filter, update2, options) {
      return await (0, execute_operation_1.executeOperation)(this.client, new update_2.UpdateOneOperation(this.s.namespace, filter, update2, (0, utils_1.resolveOptions)(this, options)));
    }
    /**
     * Replace a document in a collection with another document
     *
     * @param filter - The filter used to select the document to replace
     * @param replacement - The Document that replaces the matching document
     * @param options - Optional settings for the command
     */
    async replaceOne(filter, replacement, options) {
      return await (0, execute_operation_1.executeOperation)(this.client, new update_2.ReplaceOneOperation(this.s.namespace, filter, replacement, (0, utils_1.resolveOptions)(this, options)));
    }
    /**
     * Update multiple documents in a collection
     *
     * The value of `update` can be either:
     * - UpdateFilter<TSchema> - A document that contains update operator expressions,
     * - Document[] - an aggregation pipeline.
     *
     * @param filter - The filter used to select the document to update
     * @param update - The modifications to apply
     * @param options - Optional settings for the command
     */
    async updateMany(filter, update2, options) {
      return await (0, execute_operation_1.executeOperation)(this.client, new update_2.UpdateManyOperation(this.s.namespace, filter, update2, (0, utils_1.resolveOptions)(this, options)));
    }
    /**
     * Delete a document from a collection
     *
     * @param filter - The filter used to select the document to remove
     * @param options - Optional settings for the command
     */
    async deleteOne(filter = {}, options = {}) {
      return await (0, execute_operation_1.executeOperation)(this.client, new delete_1.DeleteOneOperation(this.s.namespace, filter, (0, utils_1.resolveOptions)(this, options)));
    }
    /**
     * Delete multiple documents from a collection
     *
     * @param filter - The filter used to select the documents to remove
     * @param options - Optional settings for the command
     */
    async deleteMany(filter = {}, options = {}) {
      return await (0, execute_operation_1.executeOperation)(this.client, new delete_1.DeleteManyOperation(this.s.namespace, filter, (0, utils_1.resolveOptions)(this, options)));
    }
    /**
     * Rename the collection.
     *
     * @remarks
     * This operation does not inherit options from the Db or MongoClient.
     *
     * @param newName - New name of of the collection.
     * @param options - Optional settings for the command
     */
    async rename(newName, options) {
      return await (0, execute_operation_1.executeOperation)(this.client, new rename_1.RenameOperation(this, newName, (0, utils_1.resolveOptions)(void 0, {
        ...options,
        readPreference: read_preference_1.ReadPreference.PRIMARY
      })));
    }
    /**
     * Drop the collection from the database, removing it permanently. New accesses will create a new collection.
     *
     * @param options - Optional settings for the command
     */
    async drop(options) {
      return await this.db.dropCollection(this.collectionName, options);
    }
    async findOne(filter = {}, options = {}) {
      const { ...opts } = options;
      opts.singleBatch = true;
      const cursor = this.find(filter, opts).limit(1);
      const result = await cursor.next();
      await cursor.close();
      return result;
    }
    find(filter = {}, options = {}) {
      return new find_cursor_1.FindCursor(this.client, this.s.namespace, filter, (0, utils_1.resolveOptions)(this, options));
    }
    /**
     * Returns the options of the collection.
     *
     * @param options - Optional settings for the command
     */
    async options(options) {
      options = (0, utils_1.resolveOptions)(this, options);
      const [collection2] = await this.db.listCollections({ name: this.collectionName }, { ...options, nameOnly: false }).toArray();
      if (collection2 == null || collection2.options == null) {
        throw new error_1.MongoAPIError(`collection ${this.namespace} not found`);
      }
      return collection2.options;
    }
    /**
     * Returns if the collection is a capped collection
     *
     * @param options - Optional settings for the command
     */
    async isCapped(options) {
      const { capped } = await this.options(options);
      return Boolean(capped);
    }
    /**
     * Creates an index on the db and collection collection.
     *
     * @param indexSpec - The field name or index specification to create an index for
     * @param options - Optional settings for the command
     *
     * @example
     * ```ts
     * const collection = client.db('foo').collection('bar');
     *
     * await collection.createIndex({ a: 1, b: -1 });
     *
     * // Alternate syntax for { c: 1, d: -1 } that ensures order of indexes
     * await collection.createIndex([ [c, 1], [d, -1] ]);
     *
     * // Equivalent to { e: 1 }
     * await collection.createIndex('e');
     *
     * // Equivalent to { f: 1, g: 1 }
     * await collection.createIndex(['f', 'g'])
     *
     * // Equivalent to { h: 1, i: -1 }
     * await collection.createIndex([ { h: 1 }, { i: -1 } ]);
     *
     * // Equivalent to { j: 1, k: -1, l: 2d }
     * await collection.createIndex(['j', ['k', -1], { l: '2d' }])
     * ```
     */
    async createIndex(indexSpec, options) {
      const indexes2 = await (0, execute_operation_1.executeOperation)(this.client, indexes_1.CreateIndexesOperation.fromIndexSpecification(this, this.collectionName, indexSpec, (0, utils_1.resolveOptions)(this, options)));
      return indexes2[0];
    }
    /**
     * Creates multiple indexes in the collection, this method is only supported for
     * MongoDB 2.6 or higher. Earlier version of MongoDB will throw a command not supported
     * error.
     *
     * **Note**: Unlike {@link Collection#createIndex| createIndex}, this function takes in raw index specifications.
     * Index specifications are defined {@link https://www.mongodb.com/docs/manual/reference/command/createIndexes/| here}.
     *
     * @param indexSpecs - An array of index specifications to be created
     * @param options - Optional settings for the command
     *
     * @example
     * ```ts
     * const collection = client.db('foo').collection('bar');
     * await collection.createIndexes([
     *   // Simple index on field fizz
     *   {
     *     key: { fizz: 1 },
     *   }
     *   // wildcard index
     *   {
     *     key: { '$**': 1 }
     *   },
     *   // named index on darmok and jalad
     *   {
     *     key: { darmok: 1, jalad: -1 }
     *     name: 'tanagra'
     *   }
     * ]);
     * ```
     */
    async createIndexes(indexSpecs, options) {
      return await (0, execute_operation_1.executeOperation)(this.client, indexes_1.CreateIndexesOperation.fromIndexDescriptionArray(this, this.collectionName, indexSpecs, (0, utils_1.resolveOptions)(this, { ...options, maxTimeMS: void 0 })));
    }
    /**
     * Drops an index from this collection.
     *
     * @param indexName - Name of the index to drop.
     * @param options - Optional settings for the command
     */
    async dropIndex(indexName, options) {
      return await (0, execute_operation_1.executeOperation)(this.client, new indexes_1.DropIndexOperation(this, indexName, {
        ...(0, utils_1.resolveOptions)(this, options),
        readPreference: read_preference_1.ReadPreference.primary
      }));
    }
    /**
     * Drops all indexes from this collection.
     *
     * @param options - Optional settings for the command
     */
    async dropIndexes(options) {
      try {
        await (0, execute_operation_1.executeOperation)(this.client, new indexes_1.DropIndexOperation(this, "*", (0, utils_1.resolveOptions)(this, options)));
        return true;
      } catch (error2) {
        if (error2 instanceof error_1.MongoOperationTimeoutError)
          throw error2;
        return false;
      }
    }
    /**
     * Get the list of all indexes information for the collection.
     *
     * @param options - Optional settings for the command
     */
    listIndexes(options) {
      return new list_indexes_cursor_1.ListIndexesCursor(this, (0, utils_1.resolveOptions)(this, options));
    }
    /**
     * Checks if one or more indexes exist on the collection, fails on first non-existing index
     *
     * @param indexes - One or more index names to check.
     * @param options - Optional settings for the command
     */
    async indexExists(indexes2, options) {
      const indexNames = Array.isArray(indexes2) ? indexes2 : [indexes2];
      const allIndexes = new Set(await this.listIndexes(options).map(({ name }) => name).toArray());
      return indexNames.every((name) => allIndexes.has(name));
    }
    async indexInformation(options) {
      return await this.indexes({
        ...options,
        full: options?.full ?? false
      });
    }
    /**
     * Gets an estimate of the count of documents in a collection using collection metadata.
     * This will always run a count command on all server versions.
     *
     * due to an oversight in versions 5.0.0-5.0.8 of MongoDB, the count command,
     * which estimatedDocumentCount uses in its implementation, was not included in v1 of
     * the Stable API, and so users of the Stable API with estimatedDocumentCount are
     * recommended to upgrade their server version to 5.0.9+ or set apiStrict: false to avoid
     * encountering errors.
     *
     * @see {@link https://www.mongodb.com/docs/manual/reference/command/count/#behavior|Count: Behavior}
     * @param options - Optional settings for the command
     */
    async estimatedDocumentCount(options) {
      return await (0, execute_operation_1.executeOperation)(this.client, new estimated_document_count_1.EstimatedDocumentCountOperation(this, (0, utils_1.resolveOptions)(this, options)));
    }
    /**
     * Gets the number of documents matching the filter.
     * For a fast count of the total documents in a collection see {@link Collection#estimatedDocumentCount| estimatedDocumentCount}.
     *
     * Due to countDocuments using the $match aggregation pipeline stage, certain query operators cannot be used in countDocuments. This includes the $where and $near query operators, among others. Details can be found in the documentation for the $match aggregation pipeline stage.
     *
     * **Note**: When migrating from {@link Collection#count| count} to {@link Collection#countDocuments| countDocuments}
     * the following query operators must be replaced:
     *
     * | Operator | Replacement |
     * | -------- | ----------- |
     * | `$where`   | [`$expr`][1] |
     * | `$near`    | [`$geoWithin`][2] with [`$center`][3] |
     * | `$nearSphere` | [`$geoWithin`][2] with [`$centerSphere`][4] |
     *
     * [1]: https://www.mongodb.com/docs/manual/reference/operator/query/expr/
     * [2]: https://www.mongodb.com/docs/manual/reference/operator/query/geoWithin/
     * [3]: https://www.mongodb.com/docs/manual/reference/operator/query/center/#op._S_center
     * [4]: https://www.mongodb.com/docs/manual/reference/operator/query/centerSphere/#op._S_centerSphere
     *
     * @param filter - The filter for the count
     * @param options - Optional settings for the command
     *
     * @see https://www.mongodb.com/docs/manual/reference/operator/query/expr/
     * @see https://www.mongodb.com/docs/manual/reference/operator/query/geoWithin/
     * @see https://www.mongodb.com/docs/manual/reference/operator/query/center/#op._S_center
     * @see https://www.mongodb.com/docs/manual/reference/operator/query/centerSphere/#op._S_centerSphere
     */
    async countDocuments(filter = {}, options = {}) {
      const pipeline = [];
      pipeline.push({ $match: filter });
      if (typeof options.skip === "number") {
        pipeline.push({ $skip: options.skip });
      }
      if (typeof options.limit === "number") {
        pipeline.push({ $limit: options.limit });
      }
      pipeline.push({ $group: { _id: 1, n: { $sum: 1 } } });
      const cursor = this.aggregate(pipeline, options);
      const doc = await cursor.next();
      await cursor.close();
      return doc?.n ?? 0;
    }
    async distinct(key, filter = {}, options = {}) {
      return await (0, execute_operation_1.executeOperation)(this.client, new distinct_1.DistinctOperation(this, key, filter, (0, utils_1.resolveOptions)(this, options)));
    }
    async indexes(options) {
      const indexes2 = await this.listIndexes(options).toArray();
      const full = options?.full ?? true;
      if (full) {
        return indexes2;
      }
      const object = Object.fromEntries(indexes2.map(({ name, key }) => [name, Object.entries(key)]));
      return object;
    }
    async findOneAndDelete(filter, options) {
      return await (0, execute_operation_1.executeOperation)(this.client, new find_and_modify_1.FindOneAndDeleteOperation(this, filter, (0, utils_1.resolveOptions)(this, options)));
    }
    async findOneAndReplace(filter, replacement, options) {
      return await (0, execute_operation_1.executeOperation)(this.client, new find_and_modify_1.FindOneAndReplaceOperation(this, filter, replacement, (0, utils_1.resolveOptions)(this, options)));
    }
    async findOneAndUpdate(filter, update2, options) {
      return await (0, execute_operation_1.executeOperation)(this.client, new find_and_modify_1.FindOneAndUpdateOperation(this, filter, update2, (0, utils_1.resolveOptions)(this, options)));
    }
    /**
     * Execute an aggregation framework pipeline against the collection, needs MongoDB \>= 2.2
     *
     * @param pipeline - An array of aggregation pipelines to execute
     * @param options - Optional settings for the command
     */
    aggregate(pipeline = [], options) {
      if (!Array.isArray(pipeline)) {
        throw new error_1.MongoInvalidArgumentError('Argument "pipeline" must be an array of aggregation stages');
      }
      return new aggregation_cursor_1.AggregationCursor(this.client, this.s.namespace, pipeline, (0, utils_1.resolveOptions)(this, options));
    }
    /**
     * Create a new Change Stream, watching for new changes (insertions, updates, replacements, deletions, and invalidations) in this collection.
     *
     * @remarks
     * watch() accepts two generic arguments for distinct use cases:
     * - The first is to override the schema that may be defined for this specific collection
     * - The second is to override the shape of the change stream document entirely, if it is not provided the type will default to ChangeStreamDocument of the first argument
     * @example
     * By just providing the first argument I can type the change to be `ChangeStreamDocument<{ _id: number }>`
     * ```ts
     * collection.watch<{ _id: number }>()
     *   .on('change', change => console.log(change._id.toFixed(4)));
     * ```
     *
     * @example
     * Passing a second argument provides a way to reflect the type changes caused by an advanced pipeline.
     * Here, we are using a pipeline to have MongoDB filter for insert changes only and add a comment.
     * No need start from scratch on the ChangeStreamInsertDocument type!
     * By using an intersection we can save time and ensure defaults remain the same type!
     * ```ts
     * collection
     *   .watch<Schema, ChangeStreamInsertDocument<Schema> & { comment: string }>([
     *     { $addFields: { comment: 'big changes' } },
     *     { $match: { operationType: 'insert' } }
     *   ])
     *   .on('change', change => {
     *     change.comment.startsWith('big');
     *     change.operationType === 'insert';
     *     // No need to narrow in code because the generics did that for us!
     *     expectType<Schema>(change.fullDocument);
     *   });
     * ```
     *
     * @remarks
     * When `timeoutMS` is configured for a change stream, it will have different behaviour depending
     * on whether the change stream is in iterator mode or emitter mode. In both cases, a change
     * stream will time out if it does not receive a change event within `timeoutMS` of the last change
     * event.
     *
     * Note that if a change stream is consistently timing out when watching a collection, database or
     * client that is being changed, then this may be due to the server timing out before it can finish
     * processing the existing oplog. To address this, restart the change stream with a higher
     * `timeoutMS`.
     *
     * If the change stream times out the initial aggregate operation to establish the change stream on
     * the server, then the client will close the change stream. If the getMore calls to the server
     * time out, then the change stream will be left open, but will throw a MongoOperationTimeoutError
     * when in iterator mode and emit an error event that returns a MongoOperationTimeoutError in
     * emitter mode.
     *
     * To determine whether or not the change stream is still open following a timeout, check the
     * {@link ChangeStream.closed} getter.
     *
     * @example
     * In iterator mode, if a next() call throws a timeout error, it will attempt to resume the change stream.
     * The next call can just be retried after this succeeds.
     * ```ts
     * const changeStream = collection.watch([], { timeoutMS: 100 });
     * try {
     *     await changeStream.next();
     * } catch (e) {
     *     if (e instanceof MongoOperationTimeoutError && !changeStream.closed) {
     *       await changeStream.next();
     *     }
     *     throw e;
     * }
     * ```
     *
     * @example
     * In emitter mode, if the change stream goes `timeoutMS` without emitting a change event, it will
     * emit an error event that returns a MongoOperationTimeoutError, but will not close the change
     * stream unless the resume attempt fails. There is no need to re-establish change listeners as
     * this will automatically continue emitting change events once the resume attempt completes.
     *
     * ```ts
     * const changeStream = collection.watch([], { timeoutMS: 100 });
     * changeStream.on('change', console.log);
     * changeStream.on('error', e => {
     *     if (e instanceof MongoOperationTimeoutError && !changeStream.closed) {
     *         // do nothing
     *     } else {
     *         changeStream.close();
     *     }
     * });
     * ```
     *
     * @param pipeline - An array of {@link https://www.mongodb.com/docs/manual/reference/operator/aggregation-pipeline/|aggregation pipeline stages} through which to pass change stream documents. This allows for filtering (using $match) and manipulating the change stream documents.
     * @param options - Optional settings for the command
     * @typeParam TLocal - Type of the data being detected by the change stream
     * @typeParam TChange - Type of the whole change stream document emitted
     */
    watch(pipeline = [], options = {}) {
      if (!Array.isArray(pipeline)) {
        options = pipeline;
        pipeline = [];
      }
      return new change_stream_1.ChangeStream(this, pipeline, (0, utils_1.resolveOptions)(this, options));
    }
    /**
     * Initiate an Out of order batch write operation. All operations will be buffered into insert/update/remove commands executed out of order.
     *
     * @throws MongoNotConnectedError
     * @remarks
     * **NOTE:** MongoClient must be connected prior to calling this method due to a known limitation in this legacy implementation.
     * However, `collection.bulkWrite()` provides an equivalent API that does not require prior connecting.
     */
    initializeUnorderedBulkOp(options) {
      return new unordered_1.UnorderedBulkOperation(this, (0, utils_1.resolveOptions)(this, options));
    }
    /**
     * Initiate an In order bulk write operation. Operations will be serially executed in the order they are added, creating a new operation for each switch in types.
     *
     * @throws MongoNotConnectedError
     * @remarks
     * **NOTE:** MongoClient must be connected prior to calling this method due to a known limitation in this legacy implementation.
     * However, `collection.bulkWrite()` provides an equivalent API that does not require prior connecting.
     */
    initializeOrderedBulkOp(options) {
      return new ordered_1.OrderedBulkOperation(this, (0, utils_1.resolveOptions)(this, options));
    }
    /**
     * An estimated count of matching documents in the db to a filter.
     *
     * **NOTE:** This method has been deprecated, since it does not provide an accurate count of the documents
     * in a collection. To obtain an accurate count of documents in the collection, use {@link Collection#countDocuments| countDocuments}.
     * To obtain an estimated count of all documents in the collection, use {@link Collection#estimatedDocumentCount| estimatedDocumentCount}.
     *
     * @deprecated use {@link Collection#countDocuments| countDocuments} or {@link Collection#estimatedDocumentCount| estimatedDocumentCount} instead
     *
     * @param filter - The filter for the count.
     * @param options - Optional settings for the command
     */
    async count(filter = {}, options = {}) {
      return await (0, execute_operation_1.executeOperation)(this.client, new count_1.CountOperation(this.fullNamespace, filter, (0, utils_1.resolveOptions)(this, options)));
    }
    listSearchIndexes(indexNameOrOptions, options) {
      options = typeof indexNameOrOptions === "object" ? indexNameOrOptions : options == null ? {} : options;
      const indexName = indexNameOrOptions == null ? null : typeof indexNameOrOptions === "object" ? null : indexNameOrOptions;
      return new list_search_indexes_cursor_1.ListSearchIndexesCursor(this, indexName, options);
    }
    /**
     * Creates a single search index for the collection.
     *
     * @param description - The index description for the new search index.
     * @returns A promise that resolves to the name of the new search index.
     *
     * @remarks Only available when used against a 7.0+ Atlas cluster.
     */
    async createSearchIndex(description) {
      const [index] = await this.createSearchIndexes([description]);
      return index;
    }
    /**
     * Creates multiple search indexes for the current collection.
     *
     * @param descriptions - An array of `SearchIndexDescription`s for the new search indexes.
     * @returns A promise that resolves to an array of the newly created search index names.
     *
     * @remarks Only available when used against a 7.0+ Atlas cluster.
     * @returns
     */
    async createSearchIndexes(descriptions) {
      return await (0, execute_operation_1.executeOperation)(this.client, new create_1.CreateSearchIndexesOperation(this, descriptions));
    }
    /**
     * Deletes a search index by index name.
     *
     * @param name - The name of the search index to be deleted.
     *
     * @remarks Only available when used against a 7.0+ Atlas cluster.
     */
    async dropSearchIndex(name) {
      return await (0, execute_operation_1.executeOperation)(this.client, new drop_1.DropSearchIndexOperation(this, name));
    }
    /**
     * Updates a search index by replacing the existing index definition with the provided definition.
     *
     * @param name - The name of the search index to update.
     * @param definition - The new search index definition.
     *
     * @remarks Only available when used against a 7.0+ Atlas cluster.
     */
    async updateSearchIndex(name, definition) {
      return await (0, execute_operation_1.executeOperation)(this.client, new update_1.UpdateSearchIndexOperation(this, name, definition));
    }
  }
  collection.Collection = Collection;
  return collection;
}
var change_stream_cursor = {};
var hasRequiredChange_stream_cursor;
function requireChange_stream_cursor() {
  if (hasRequiredChange_stream_cursor) return change_stream_cursor;
  hasRequiredChange_stream_cursor = 1;
  Object.defineProperty(change_stream_cursor, "__esModule", { value: true });
  change_stream_cursor.ChangeStreamCursor = void 0;
  const change_stream_1 = requireChange_stream();
  const constants_1 = requireConstants();
  const aggregate_1 = requireAggregate();
  const execute_operation_1 = requireExecute_operation();
  const utils_1 = requireUtils();
  const abstract_cursor_1 = requireAbstract_cursor();
  class ChangeStreamCursor extends abstract_cursor_1.AbstractCursor {
    constructor(client, namespace, pipeline = [], options = {}) {
      super(client, namespace, { ...options, tailable: true, awaitData: true });
      this.pipeline = pipeline;
      this.changeStreamCursorOptions = options;
      this._resumeToken = null;
      this.startAtOperationTime = options.startAtOperationTime ?? null;
      if (options.startAfter) {
        this.resumeToken = options.startAfter;
      } else if (options.resumeAfter) {
        this.resumeToken = options.resumeAfter;
      }
    }
    set resumeToken(token) {
      this._resumeToken = token;
      this.emit(change_stream_1.ChangeStream.RESUME_TOKEN_CHANGED, token);
    }
    get resumeToken() {
      return this._resumeToken;
    }
    get resumeOptions() {
      const options = {
        ...this.changeStreamCursorOptions
      };
      for (const key of ["resumeAfter", "startAfter", "startAtOperationTime"]) {
        delete options[key];
      }
      if (this.resumeToken != null) {
        if (this.changeStreamCursorOptions.startAfter && !this.hasReceived) {
          options.startAfter = this.resumeToken;
        } else {
          options.resumeAfter = this.resumeToken;
        }
      } else if (this.startAtOperationTime != null) {
        options.startAtOperationTime = this.startAtOperationTime;
      }
      return options;
    }
    cacheResumeToken(resumeToken) {
      if (this.bufferedCount() === 0 && this.postBatchResumeToken) {
        this.resumeToken = this.postBatchResumeToken;
      } else {
        this.resumeToken = resumeToken;
      }
      this.hasReceived = true;
    }
    _processBatch(response) {
      const { postBatchResumeToken } = response;
      if (postBatchResumeToken) {
        this.postBatchResumeToken = postBatchResumeToken;
        if (response.batchSize === 0) {
          this.resumeToken = postBatchResumeToken;
        }
      }
    }
    clone() {
      return new ChangeStreamCursor(this.client, this.namespace, this.pipeline, {
        ...this.cursorOptions
      });
    }
    async _initialize(session) {
      const aggregateOperation = new aggregate_1.AggregateOperation(this.namespace, this.pipeline, {
        ...this.cursorOptions,
        ...this.changeStreamCursorOptions,
        session
      });
      const response = await (0, execute_operation_1.executeOperation)(session.client, aggregateOperation, this.timeoutContext);
      const server2 = aggregateOperation.server;
      this.maxWireVersion = (0, utils_1.maxWireVersion)(server2);
      if (this.startAtOperationTime == null && this.changeStreamCursorOptions.resumeAfter == null && this.changeStreamCursorOptions.startAfter == null) {
        this.startAtOperationTime = response.operationTime;
      }
      this._processBatch(response);
      this.emit(constants_1.INIT, response);
      this.emit(constants_1.RESPONSE);
      return { server: server2, session, response };
    }
    async getMore() {
      const response = await super.getMore();
      this.maxWireVersion = (0, utils_1.maxWireVersion)(this.server);
      this._processBatch(response);
      this.emit(change_stream_1.ChangeStream.MORE, response);
      this.emit(change_stream_1.ChangeStream.RESPONSE);
      return response;
    }
  }
  change_stream_cursor.ChangeStreamCursor = ChangeStreamCursor;
  return change_stream_cursor;
}
var db = {};
var list_collections_cursor = {};
var list_collections = {};
var hasRequiredList_collections;
function requireList_collections() {
  if (hasRequiredList_collections) return list_collections;
  hasRequiredList_collections = 1;
  Object.defineProperty(list_collections, "__esModule", { value: true });
  list_collections.ListCollectionsOperation = void 0;
  const responses_1 = requireResponses();
  const utils_1 = requireUtils();
  const command_1 = requireCommand();
  const operation_1 = requireOperation();
  class ListCollectionsOperation extends command_1.CommandOperation {
    constructor(db2, filter, options) {
      super(db2, options);
      this.SERVER_COMMAND_RESPONSE_TYPE = responses_1.CursorResponse;
      this.options = { ...options };
      delete this.options.writeConcern;
      this.db = db2;
      this.filter = filter;
      this.nameOnly = !!this.options.nameOnly;
      this.authorizedCollections = !!this.options.authorizedCollections;
      if (typeof this.options.batchSize === "number") {
        this.batchSize = this.options.batchSize;
      }
      this.SERVER_COMMAND_RESPONSE_TYPE = this.explain ? responses_1.ExplainedCursorResponse : responses_1.CursorResponse;
    }
    get commandName() {
      return "listCollections";
    }
    buildCommandDocument(connection2) {
      const command2 = {
        listCollections: 1,
        filter: this.filter,
        cursor: this.batchSize ? { batchSize: this.batchSize } : {},
        nameOnly: this.nameOnly,
        authorizedCollections: this.authorizedCollections
      };
      if ((0, utils_1.maxWireVersion)(connection2) >= 9 && this.options.comment !== void 0) {
        command2.comment = this.options.comment;
      }
      return command2;
    }
    handleOk(response) {
      return response;
    }
  }
  list_collections.ListCollectionsOperation = ListCollectionsOperation;
  (0, operation_1.defineAspects)(ListCollectionsOperation, [
    operation_1.Aspect.READ_OPERATION,
    operation_1.Aspect.RETRYABLE,
    operation_1.Aspect.CURSOR_CREATING,
    operation_1.Aspect.SUPPORTS_RAW_DATA
  ]);
  return list_collections;
}
var hasRequiredList_collections_cursor;
function requireList_collections_cursor() {
  if (hasRequiredList_collections_cursor) return list_collections_cursor;
  hasRequiredList_collections_cursor = 1;
  Object.defineProperty(list_collections_cursor, "__esModule", { value: true });
  list_collections_cursor.ListCollectionsCursor = void 0;
  const execute_operation_1 = requireExecute_operation();
  const list_collections_1 = requireList_collections();
  const abstract_cursor_1 = requireAbstract_cursor();
  class ListCollectionsCursor extends abstract_cursor_1.AbstractCursor {
    constructor(db2, filter, options) {
      super(db2.client, db2.s.namespace, options);
      this.parent = db2;
      this.filter = filter;
      this.options = options;
    }
    clone() {
      return new ListCollectionsCursor(this.parent, this.filter, {
        ...this.options,
        ...this.cursorOptions
      });
    }
    /** @internal */
    async _initialize(session) {
      const operation2 = new list_collections_1.ListCollectionsOperation(this.parent, this.filter, {
        ...this.cursorOptions,
        ...this.options,
        session,
        signal: this.signal
      });
      const response = await (0, execute_operation_1.executeOperation)(this.parent.client, operation2, this.timeoutContext);
      return { server: operation2.server, session, response };
    }
  }
  list_collections_cursor.ListCollectionsCursor = ListCollectionsCursor;
  return list_collections_cursor;
}
var run_command_cursor = {};
var hasRequiredRun_command_cursor;
function requireRun_command_cursor() {
  if (hasRequiredRun_command_cursor) return run_command_cursor;
  hasRequiredRun_command_cursor = 1;
  Object.defineProperty(run_command_cursor, "__esModule", { value: true });
  run_command_cursor.RunCommandCursor = void 0;
  const error_1 = requireError();
  const execute_operation_1 = requireExecute_operation();
  const get_more_1 = requireGet_more();
  const run_command_1 = requireRun_command();
  const utils_1 = requireUtils();
  const abstract_cursor_1 = requireAbstract_cursor();
  class RunCommandCursor extends abstract_cursor_1.AbstractCursor {
    /**
     * Controls the `getMore.comment` field
     * @param comment - any BSON value
     */
    setComment(comment) {
      this.getMoreOptions.comment = comment;
      return this;
    }
    /**
     * Controls the `getMore.maxTimeMS` field. Only valid when cursor is tailable await
     * @param maxTimeMS - the number of milliseconds to wait for new data
     */
    setMaxTimeMS(maxTimeMS) {
      this.getMoreOptions.maxAwaitTimeMS = maxTimeMS;
      return this;
    }
    /**
     * Controls the `getMore.batchSize` field
     * @param batchSize - the number documents to return in the `nextBatch`
     */
    setBatchSize(batchSize) {
      this.getMoreOptions.batchSize = batchSize;
      return this;
    }
    /** Unsupported for RunCommandCursor */
    clone() {
      throw new error_1.MongoAPIError("Clone not supported, create a new cursor with db.runCursorCommand");
    }
    /** Unsupported for RunCommandCursor: readConcern must be configured directly on command document */
    withReadConcern(_) {
      throw new error_1.MongoAPIError("RunCommandCursor does not support readConcern it must be attached to the command being run");
    }
    /** Unsupported for RunCommandCursor: various cursor flags must be configured directly on command document */
    addCursorFlag(_, __) {
      throw new error_1.MongoAPIError("RunCommandCursor does not support cursor flags, they must be attached to the command being run");
    }
    /**
     * Unsupported for RunCommandCursor: maxTimeMS must be configured directly on command document
     */
    maxTimeMS(_) {
      throw new error_1.MongoAPIError("maxTimeMS must be configured on the command document directly, to configure getMore.maxTimeMS use cursor.setMaxTimeMS()");
    }
    /** Unsupported for RunCommandCursor: batchSize must be configured directly on command document */
    batchSize(_) {
      throw new error_1.MongoAPIError("batchSize must be configured on the command document directly, to configure getMore.batchSize use cursor.setBatchSize()");
    }
    /** @internal */
    constructor(db2, command2, options = {}) {
      super(db2.client, (0, utils_1.ns)(db2.namespace), options);
      this.getMoreOptions = {};
      this.db = db2;
      this.command = Object.freeze({ ...command2 });
    }
    /** @internal */
    async _initialize(session) {
      const operation2 = new run_command_1.RunCursorCommandOperation(this.db.s.namespace, this.command, {
        ...this.cursorOptions,
        session,
        readPreference: this.cursorOptions.readPreference
      });
      const response = await (0, execute_operation_1.executeOperation)(this.client, operation2, this.timeoutContext);
      return {
        server: operation2.server,
        session,
        response
      };
    }
    /** @internal */
    async getMore() {
      if (!this.session) {
        throw new error_1.MongoRuntimeError("Unexpected null session. A cursor creating command should have set this");
      }
      const getMoreOperation = new get_more_1.GetMoreOperation(this.namespace, this.id, this.server, {
        ...this.cursorOptions,
        session: this.session,
        ...this.getMoreOptions
      });
      return await (0, execute_operation_1.executeOperation)(this.client, getMoreOperation, this.timeoutContext);
    }
  }
  run_command_cursor.RunCommandCursor = RunCommandCursor;
  return run_command_cursor;
}
var create_collection = {};
var hasRequiredCreate_collection;
function requireCreate_collection() {
  if (hasRequiredCreate_collection) return create_collection;
  hasRequiredCreate_collection = 1;
  Object.defineProperty(create_collection, "__esModule", { value: true });
  create_collection.CreateCollectionOperation = void 0;
  create_collection.createCollections = createCollections;
  const constants_1 = requireConstants$1();
  const responses_1 = requireResponses();
  const collection_1 = requireCollection();
  const error_1 = requireError();
  const timeout_1 = requireTimeout();
  const utils_1 = requireUtils();
  const command_1 = requireCommand();
  const execute_operation_1 = requireExecute_operation();
  const indexes_1 = requireIndexes();
  const operation_1 = requireOperation();
  const ILLEGAL_COMMAND_FIELDS = /* @__PURE__ */ new Set([
    "w",
    "wtimeout",
    "timeoutMS",
    "j",
    "fsync",
    "pkFactory",
    "raw",
    "readPreference",
    "session",
    "readConcern",
    "writeConcern",
    "raw",
    "fieldsAsRaw",
    "useBigInt64",
    "promoteLongs",
    "promoteValues",
    "promoteBuffers",
    "bsonRegExp",
    "serializeFunctions",
    "ignoreUndefined",
    "enableUtf8Validation"
  ]);
  const INVALID_QE_VERSION = "Driver support of Queryable Encryption is incompatible with server. Upgrade server to use Queryable Encryption.";
  class CreateCollectionOperation extends command_1.CommandOperation {
    constructor(db2, name, options = {}) {
      super(db2, options);
      this.SERVER_COMMAND_RESPONSE_TYPE = responses_1.MongoDBResponse;
      this.options = options;
      this.db = db2;
      this.name = name;
    }
    get commandName() {
      return "create";
    }
    buildCommandDocument(_connection, _session) {
      const isOptionValid = ([k, v]) => v != null && typeof v !== "function" && !ILLEGAL_COMMAND_FIELDS.has(k);
      return {
        create: this.name,
        ...Object.fromEntries(Object.entries(this.options).filter(isOptionValid))
      };
    }
    handleOk(_response) {
      return new collection_1.Collection(this.db, this.name, this.options);
    }
  }
  create_collection.CreateCollectionOperation = CreateCollectionOperation;
  async function createCollections(db2, name, options) {
    const timeoutContext = timeout_1.TimeoutContext.create({
      session: options.session,
      serverSelectionTimeoutMS: db2.client.s.options.serverSelectionTimeoutMS,
      waitQueueTimeoutMS: db2.client.s.options.waitQueueTimeoutMS,
      timeoutMS: options.timeoutMS
    });
    const encryptedFields = options.encryptedFields ?? db2.client.s.options.autoEncryption?.encryptedFieldsMap?.[`${db2.databaseName}.${name}`];
    if (encryptedFields) {
      class CreateSupportingFLEv2CollectionOperation extends CreateCollectionOperation {
        buildCommandDocument(connection2, session) {
          if (!connection2.description.loadBalanced && (0, utils_1.maxWireVersion)(connection2) < constants_1.MIN_SUPPORTED_QE_WIRE_VERSION) {
            throw new error_1.MongoCompatibilityError(`${INVALID_QE_VERSION} The minimum server version required is ${constants_1.MIN_SUPPORTED_QE_SERVER_VERSION}`);
          }
          return super.buildCommandDocument(connection2, session);
        }
      }
      const escCollection = encryptedFields.escCollection ?? `enxcol_.${name}.esc`;
      const ecocCollection = encryptedFields.ecocCollection ?? `enxcol_.${name}.ecoc`;
      for (const collectionName of [escCollection, ecocCollection]) {
        const createOp = new CreateSupportingFLEv2CollectionOperation(db2, collectionName, {
          clusteredIndex: {
            key: { _id: 1 },
            unique: true
          },
          session: options.session
        });
        await (0, execute_operation_1.executeOperation)(db2.client, createOp, timeoutContext);
      }
      if (!options.encryptedFields) {
        options = { ...options, encryptedFields };
      }
    }
    const coll = await (0, execute_operation_1.executeOperation)(db2.client, new CreateCollectionOperation(db2, name, options), timeoutContext);
    if (encryptedFields) {
      const createIndexOp = indexes_1.CreateIndexesOperation.fromIndexSpecification(db2, name, { __safeContent__: 1 }, { session: options.session });
      await (0, execute_operation_1.executeOperation)(db2.client, createIndexOp, timeoutContext);
    }
    return coll;
  }
  (0, operation_1.defineAspects)(CreateCollectionOperation, [operation_1.Aspect.WRITE_OPERATION]);
  return create_collection;
}
var drop = {};
var hasRequiredDrop;
function requireDrop() {
  if (hasRequiredDrop) return drop;
  hasRequiredDrop = 1;
  Object.defineProperty(drop, "__esModule", { value: true });
  drop.DropDatabaseOperation = drop.DropCollectionOperation = void 0;
  drop.dropCollections = dropCollections;
  const __1 = requireLib();
  const responses_1 = requireResponses();
  const abstract_cursor_1 = requireAbstract_cursor();
  const error_1 = requireError();
  const timeout_1 = requireTimeout();
  const command_1 = requireCommand();
  const execute_operation_1 = requireExecute_operation();
  const operation_1 = requireOperation();
  class DropCollectionOperation extends command_1.CommandOperation {
    constructor(db2, name, options = {}) {
      super(db2, options);
      this.SERVER_COMMAND_RESPONSE_TYPE = responses_1.MongoDBResponse;
      this.options = options;
      this.name = name;
    }
    get commandName() {
      return "drop";
    }
    buildCommandDocument(_connection, _session) {
      return { drop: this.name };
    }
    handleOk(_response) {
      return true;
    }
    handleError(error2) {
      if (!(error2 instanceof __1.MongoServerError))
        throw error2;
      if (Number(error2.code) !== error_1.MONGODB_ERROR_CODES.NamespaceNotFound)
        throw error2;
      return false;
    }
  }
  drop.DropCollectionOperation = DropCollectionOperation;
  async function dropCollections(db2, name, options) {
    const timeoutContext = timeout_1.TimeoutContext.create({
      session: options.session,
      serverSelectionTimeoutMS: db2.client.s.options.serverSelectionTimeoutMS,
      waitQueueTimeoutMS: db2.client.s.options.waitQueueTimeoutMS,
      timeoutMS: options.timeoutMS
    });
    const encryptedFieldsMap = db2.client.s.options.autoEncryption?.encryptedFieldsMap;
    let encryptedFields = options.encryptedFields ?? encryptedFieldsMap?.[`${db2.databaseName}.${name}`];
    if (!encryptedFields && encryptedFieldsMap) {
      const listCollectionsResult = await db2.listCollections({ name }, {
        nameOnly: false,
        session: options.session,
        timeoutContext: new abstract_cursor_1.CursorTimeoutContext(timeoutContext, /* @__PURE__ */ Symbol())
      }).toArray();
      encryptedFields = listCollectionsResult?.[0]?.options?.encryptedFields;
    }
    if (encryptedFields) {
      const escCollection = encryptedFields.escCollection || `enxcol_.${name}.esc`;
      const ecocCollection = encryptedFields.ecocCollection || `enxcol_.${name}.ecoc`;
      for (const collectionName of [escCollection, ecocCollection]) {
        const dropOp = new DropCollectionOperation(db2, collectionName, options);
        await (0, execute_operation_1.executeOperation)(db2.client, dropOp, timeoutContext);
      }
    }
    return await (0, execute_operation_1.executeOperation)(db2.client, new DropCollectionOperation(db2, name, options), timeoutContext);
  }
  class DropDatabaseOperation extends command_1.CommandOperation {
    constructor(db2, options) {
      super(db2, options);
      this.SERVER_COMMAND_RESPONSE_TYPE = responses_1.MongoDBResponse;
      this.options = options;
    }
    get commandName() {
      return "dropDatabase";
    }
    buildCommandDocument(_connection, _session) {
      return { dropDatabase: 1 };
    }
    handleOk(_response) {
      return true;
    }
  }
  drop.DropDatabaseOperation = DropDatabaseOperation;
  (0, operation_1.defineAspects)(DropCollectionOperation, [operation_1.Aspect.WRITE_OPERATION]);
  (0, operation_1.defineAspects)(DropDatabaseOperation, [operation_1.Aspect.WRITE_OPERATION]);
  return drop;
}
var profiling_level = {};
var hasRequiredProfiling_level;
function requireProfiling_level() {
  if (hasRequiredProfiling_level) return profiling_level;
  hasRequiredProfiling_level = 1;
  Object.defineProperty(profiling_level, "__esModule", { value: true });
  profiling_level.ProfilingLevelOperation = void 0;
  const bson_1 = requireBson();
  const responses_1 = requireResponses();
  const error_1 = requireError();
  const command_1 = requireCommand();
  class ProfilingLevelResponse extends responses_1.MongoDBResponse {
    get was() {
      return this.get("was", bson_1.BSONType.int, true);
    }
  }
  class ProfilingLevelOperation extends command_1.CommandOperation {
    constructor(db2, options) {
      super(db2, options);
      this.SERVER_COMMAND_RESPONSE_TYPE = ProfilingLevelResponse;
      this.options = options;
    }
    get commandName() {
      return "profile";
    }
    buildCommandDocument(_connection) {
      return { profile: -1 };
    }
    handleOk(response) {
      if (response.ok === 1) {
        const was = response.was;
        if (was === 0)
          return "off";
        if (was === 1)
          return "slow_only";
        if (was === 2)
          return "all";
        throw new error_1.MongoUnexpectedServerResponseError(`Illegal profiling level value ${was}`);
      } else {
        throw new error_1.MongoUnexpectedServerResponseError("Error with profile command");
      }
    }
  }
  profiling_level.ProfilingLevelOperation = ProfilingLevelOperation;
  return profiling_level;
}
var set_profiling_level = {};
var hasRequiredSet_profiling_level;
function requireSet_profiling_level() {
  if (hasRequiredSet_profiling_level) return set_profiling_level;
  hasRequiredSet_profiling_level = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SetProfilingLevelOperation = exports.ProfilingLevel = void 0;
    const responses_1 = requireResponses();
    const error_1 = requireError();
    const utils_1 = requireUtils();
    const command_1 = requireCommand();
    const levelValues = /* @__PURE__ */ new Set(["off", "slow_only", "all"]);
    exports.ProfilingLevel = Object.freeze({
      off: "off",
      slowOnly: "slow_only",
      all: "all"
    });
    class SetProfilingLevelOperation extends command_1.CommandOperation {
      constructor(db2, level, options) {
        super(db2, options);
        this.SERVER_COMMAND_RESPONSE_TYPE = responses_1.MongoDBResponse;
        this.options = options;
        switch (level) {
          case exports.ProfilingLevel.off:
            this.profile = 0;
            break;
          case exports.ProfilingLevel.slowOnly:
            this.profile = 1;
            break;
          case exports.ProfilingLevel.all:
            this.profile = 2;
            break;
          default:
            this.profile = 0;
            break;
        }
        this.level = level;
      }
      get commandName() {
        return "profile";
      }
      buildCommandDocument(_connection) {
        const level = this.level;
        if (!levelValues.has(level)) {
          throw new error_1.MongoInvalidArgumentError(`Profiling level must be one of "${(0, utils_1.enumToString)(exports.ProfilingLevel)}"`);
        }
        return { profile: this.profile };
      }
      handleOk(_response) {
        return this.level;
      }
    }
    exports.SetProfilingLevelOperation = SetProfilingLevelOperation;
  })(set_profiling_level);
  return set_profiling_level;
}
var stats = {};
var hasRequiredStats;
function requireStats() {
  if (hasRequiredStats) return stats;
  hasRequiredStats = 1;
  Object.defineProperty(stats, "__esModule", { value: true });
  stats.DbStatsOperation = void 0;
  const responses_1 = requireResponses();
  const command_1 = requireCommand();
  const operation_1 = requireOperation();
  class DbStatsOperation extends command_1.CommandOperation {
    constructor(db2, options) {
      super(db2, options);
      this.SERVER_COMMAND_RESPONSE_TYPE = responses_1.MongoDBResponse;
      this.options = options;
    }
    get commandName() {
      return "dbStats";
    }
    buildCommandDocument(_connection) {
      const command2 = { dbStats: true };
      if (this.options.scale != null) {
        command2.scale = this.options.scale;
      }
      return command2;
    }
  }
  stats.DbStatsOperation = DbStatsOperation;
  (0, operation_1.defineAspects)(DbStatsOperation, [operation_1.Aspect.READ_OPERATION]);
  return stats;
}
var hasRequiredDb;
function requireDb() {
  if (hasRequiredDb) return db;
  hasRequiredDb = 1;
  Object.defineProperty(db, "__esModule", { value: true });
  db.Db = void 0;
  const admin_1 = requireAdmin();
  const bson_1 = requireBson();
  const change_stream_1 = requireChange_stream();
  const collection_1 = requireCollection();
  const CONSTANTS = requireConstants();
  const aggregation_cursor_1 = requireAggregation_cursor();
  const list_collections_cursor_1 = requireList_collections_cursor();
  const run_command_cursor_1 = requireRun_command_cursor();
  const error_1 = requireError();
  const create_collection_1 = requireCreate_collection();
  const drop_1 = requireDrop();
  const execute_operation_1 = requireExecute_operation();
  const indexes_1 = requireIndexes();
  const profiling_level_1 = requireProfiling_level();
  const remove_user_1 = requireRemove_user();
  const rename_1 = requireRename();
  const run_command_1 = requireRun_command();
  const set_profiling_level_1 = requireSet_profiling_level();
  const stats_1 = requireStats();
  const read_concern_1 = requireRead_concern();
  const read_preference_1 = requireRead_preference();
  const utils_1 = requireUtils();
  const write_concern_1 = requireWrite_concern();
  const DB_OPTIONS_ALLOW_LIST = [
    "writeConcern",
    "readPreference",
    "readPreferenceTags",
    "native_parser",
    "forceServerObjectId",
    "pkFactory",
    "serializeFunctions",
    "raw",
    "authSource",
    "ignoreUndefined",
    "readConcern",
    "retryMiliSeconds",
    "numberOfRetries",
    "useBigInt64",
    "promoteBuffers",
    "promoteLongs",
    "bsonRegExp",
    "enableUtf8Validation",
    "promoteValues",
    "compression",
    "retryWrites",
    "timeoutMS"
  ];
  const _Db = class _Db {
    /**
     * Creates a new Db instance.
     *
     * Db name cannot contain a dot, the server may apply more restrictions when an operation is run.
     *
     * @param client - The MongoClient for the database.
     * @param databaseName - The name of the database this instance represents.
     * @param options - Optional settings for Db construction.
     */
    constructor(client, databaseName, options) {
      options = options ?? {};
      options = (0, utils_1.filterOptions)(options, DB_OPTIONS_ALLOW_LIST);
      if (typeof databaseName === "string" && databaseName.includes(".")) {
        throw new error_1.MongoInvalidArgumentError(`Database names cannot contain the character '.'`);
      }
      this.s = {
        // Options
        options,
        // Unpack read preference
        readPreference: read_preference_1.ReadPreference.fromOptions(options),
        // Merge bson options
        bsonOptions: (0, bson_1.resolveBSONOptions)(options, client),
        // Set up the primary key factory or fallback to ObjectId
        pkFactory: options?.pkFactory ?? utils_1.DEFAULT_PK_FACTORY,
        // ReadConcern
        readConcern: read_concern_1.ReadConcern.fromOptions(options),
        writeConcern: write_concern_1.WriteConcern.fromOptions(options),
        // Namespace
        namespace: new utils_1.MongoDBNamespace(databaseName)
      };
      this.client = client;
    }
    get databaseName() {
      return this.s.namespace.db;
    }
    // Options
    get options() {
      return this.s.options;
    }
    /**
     * Check if a secondary can be used (because the read preference is *not* set to primary)
     */
    get secondaryOk() {
      return this.s.readPreference?.preference !== "primary" || false;
    }
    get readConcern() {
      return this.s.readConcern;
    }
    /**
     * The current readPreference of the Db. If not explicitly defined for
     * this Db, will be inherited from the parent MongoClient
     */
    get readPreference() {
      if (this.s.readPreference == null) {
        return this.client.readPreference;
      }
      return this.s.readPreference;
    }
    get bsonOptions() {
      return this.s.bsonOptions;
    }
    // get the write Concern
    get writeConcern() {
      return this.s.writeConcern;
    }
    get namespace() {
      return this.s.namespace.toString();
    }
    get timeoutMS() {
      return this.s.options?.timeoutMS;
    }
    /**
     * Create a new collection on a server with the specified options. Use this to create capped collections.
     * More information about command options available at https://www.mongodb.com/docs/manual/reference/command/create/
     *
     * Collection namespace validation is performed server-side.
     *
     * @param name - The name of the collection to create
     * @param options - Optional settings for the command
     */
    async createCollection(name, options) {
      options = (0, utils_1.resolveOptions)(this, options);
      return await (0, create_collection_1.createCollections)(this, name, options);
    }
    /**
     * Execute a command
     *
     * @remarks
     * This command does not inherit options from the MongoClient.
     *
     * The driver will ensure the following fields are attached to the command sent to the server:
     * - `lsid` - sourced from an implicit session or options.session
     * - `$readPreference` - defaults to primary or can be configured by options.readPreference
     * - `$db` - sourced from the name of this database
     *
     * If the client has a serverApi setting:
     * - `apiVersion`
     * - `apiStrict`
     * - `apiDeprecationErrors`
     *
     * When in a transaction:
     * - `readConcern` - sourced from readConcern set on the TransactionOptions
     * - `writeConcern` - sourced from writeConcern set on the TransactionOptions
     *
     * Attaching any of the above fields to the command will have no effect as the driver will overwrite the value.
     *
     * @param command - The command to run
     * @param options - Optional settings for the command
     */
    async command(command2, options) {
      return await (0, execute_operation_1.executeOperation)(this.client, new run_command_1.RunCommandOperation(this.s.namespace, command2, (0, utils_1.resolveOptions)(void 0, {
        ...(0, bson_1.resolveBSONOptions)(options),
        timeoutMS: options?.timeoutMS ?? this.timeoutMS,
        session: options?.session,
        readPreference: options?.readPreference,
        signal: options?.signal
      })));
    }
    /**
     * Execute an aggregation framework pipeline against the database.
     *
     * @param pipeline - An array of aggregation stages to be executed
     * @param options - Optional settings for the command
     */
    aggregate(pipeline = [], options) {
      return new aggregation_cursor_1.AggregationCursor(this.client, this.s.namespace, pipeline, (0, utils_1.resolveOptions)(this, options));
    }
    /** Return the Admin db instance */
    admin() {
      return new admin_1.Admin(this);
    }
    /**
     * Returns a reference to a MongoDB Collection. If it does not exist it will be created implicitly.
     *
     * Collection namespace validation is performed server-side.
     *
     * @param name - the collection name we wish to access.
     * @returns return the new Collection instance
     */
    collection(name, options = {}) {
      if (typeof options === "function") {
        throw new error_1.MongoInvalidArgumentError("The callback form of this helper has been removed.");
      }
      return new collection_1.Collection(this, name, (0, utils_1.resolveOptions)(this, options));
    }
    /**
     * Get all the db statistics.
     *
     * @param options - Optional settings for the command
     */
    async stats(options) {
      return await (0, execute_operation_1.executeOperation)(this.client, new stats_1.DbStatsOperation(this, (0, utils_1.resolveOptions)(this, options)));
    }
    listCollections(filter = {}, options = {}) {
      return new list_collections_cursor_1.ListCollectionsCursor(this, filter, (0, utils_1.resolveOptions)(this, options));
    }
    /**
     * Rename a collection.
     *
     * @remarks
     * This operation does not inherit options from the MongoClient.
     *
     * @param fromCollection - Name of current collection to rename
     * @param toCollection - New name of of the collection
     * @param options - Optional settings for the command
     */
    async renameCollection(fromCollection, toCollection, options) {
      return await (0, execute_operation_1.executeOperation)(this.client, new rename_1.RenameOperation(this.collection(fromCollection), toCollection, (0, utils_1.resolveOptions)(void 0, {
        ...options,
        readPreference: read_preference_1.ReadPreference.primary
      })));
    }
    /**
     * Drop a collection from the database, removing it permanently. New accesses will create a new collection.
     *
     * @param name - Name of collection to drop
     * @param options - Optional settings for the command
     */
    async dropCollection(name, options) {
      options = (0, utils_1.resolveOptions)(this, options);
      return await (0, drop_1.dropCollections)(this, name, options);
    }
    /**
     * Drop a database, removing it permanently from the server.
     *
     * @param options - Optional settings for the command
     */
    async dropDatabase(options) {
      return await (0, execute_operation_1.executeOperation)(this.client, new drop_1.DropDatabaseOperation(this, (0, utils_1.resolveOptions)(this, options)));
    }
    /**
     * Fetch all collections for the current db.
     *
     * @param options - Optional settings for the command
     */
    async collections(options) {
      options = (0, utils_1.resolveOptions)(this, options);
      const collections = await this.listCollections({}, { ...options, nameOnly: true }).toArray();
      return collections.filter(
        // Filter collections removing any illegal ones
        ({ name }) => !name.includes("$")
      ).map(({ name }) => new collection_1.Collection(this, name, this.s.options));
    }
    /**
     * Creates an index on the db and collection.
     *
     * @param name - Name of the collection to create the index on.
     * @param indexSpec - Specify the field to index, or an index specification
     * @param options - Optional settings for the command
     */
    async createIndex(name, indexSpec, options) {
      const indexes2 = await (0, execute_operation_1.executeOperation)(this.client, indexes_1.CreateIndexesOperation.fromIndexSpecification(this, name, indexSpec, options));
      return indexes2[0];
    }
    /**
     * Remove a user from a database
     *
     * @param username - The username to remove
     * @param options - Optional settings for the command
     */
    async removeUser(username, options) {
      return await (0, execute_operation_1.executeOperation)(this.client, new remove_user_1.RemoveUserOperation(this, username, (0, utils_1.resolveOptions)(this, options)));
    }
    /**
     * Set the current profiling level of MongoDB
     *
     * @param level - The new profiling level (off, slow_only, all).
     * @param options - Optional settings for the command
     */
    async setProfilingLevel(level, options) {
      return await (0, execute_operation_1.executeOperation)(this.client, new set_profiling_level_1.SetProfilingLevelOperation(this, level, (0, utils_1.resolveOptions)(this, options)));
    }
    /**
     * Retrieve the current profiling Level for MongoDB
     *
     * @param options - Optional settings for the command
     */
    async profilingLevel(options) {
      return await (0, execute_operation_1.executeOperation)(this.client, new profiling_level_1.ProfilingLevelOperation(this, (0, utils_1.resolveOptions)(this, options)));
    }
    async indexInformation(name, options) {
      return await this.collection(name).indexInformation((0, utils_1.resolveOptions)(this, options));
    }
    /**
     * Create a new Change Stream, watching for new changes (insertions, updates,
     * replacements, deletions, and invalidations) in this database. Will ignore all
     * changes to system collections.
     *
     * @remarks
     * watch() accepts two generic arguments for distinct use cases:
     * - The first is to provide the schema that may be defined for all the collections within this database
     * - The second is to override the shape of the change stream document entirely, if it is not provided the type will default to ChangeStreamDocument of the first argument
     *
     * @remarks
     * When `timeoutMS` is configured for a change stream, it will have different behaviour depending
     * on whether the change stream is in iterator mode or emitter mode. In both cases, a change
     * stream will time out if it does not receive a change event within `timeoutMS` of the last change
     * event.
     *
     * Note that if a change stream is consistently timing out when watching a collection, database or
     * client that is being changed, then this may be due to the server timing out before it can finish
     * processing the existing oplog. To address this, restart the change stream with a higher
     * `timeoutMS`.
     *
     * If the change stream times out the initial aggregate operation to establish the change stream on
     * the server, then the client will close the change stream. If the getMore calls to the server
     * time out, then the change stream will be left open, but will throw a MongoOperationTimeoutError
     * when in iterator mode and emit an error event that returns a MongoOperationTimeoutError in
     * emitter mode.
     *
     * To determine whether or not the change stream is still open following a timeout, check the
     * {@link ChangeStream.closed} getter.
     *
     * @example
     * In iterator mode, if a next() call throws a timeout error, it will attempt to resume the change stream.
     * The next call can just be retried after this succeeds.
     * ```ts
     * const changeStream = collection.watch([], { timeoutMS: 100 });
     * try {
     *     await changeStream.next();
     * } catch (e) {
     *     if (e instanceof MongoOperationTimeoutError && !changeStream.closed) {
     *       await changeStream.next();
     *     }
     *     throw e;
     * }
     * ```
     *
     * @example
     * In emitter mode, if the change stream goes `timeoutMS` without emitting a change event, it will
     * emit an error event that returns a MongoOperationTimeoutError, but will not close the change
     * stream unless the resume attempt fails. There is no need to re-establish change listeners as
     * this will automatically continue emitting change events once the resume attempt completes.
     *
     * ```ts
     * const changeStream = collection.watch([], { timeoutMS: 100 });
     * changeStream.on('change', console.log);
     * changeStream.on('error', e => {
     *     if (e instanceof MongoOperationTimeoutError && !changeStream.closed) {
     *         // do nothing
     *     } else {
     *         changeStream.close();
     *     }
     * });
     * ```
     * @param pipeline - An array of {@link https://www.mongodb.com/docs/manual/reference/operator/aggregation-pipeline/|aggregation pipeline stages} through which to pass change stream documents. This allows for filtering (using $match) and manipulating the change stream documents.
     * @param options - Optional settings for the command
     * @typeParam TSchema - Type of the data being detected by the change stream
     * @typeParam TChange - Type of the whole change stream document emitted
     */
    watch(pipeline = [], options = {}) {
      if (!Array.isArray(pipeline)) {
        options = pipeline;
        pipeline = [];
      }
      return new change_stream_1.ChangeStream(this, pipeline, (0, utils_1.resolveOptions)(this, options));
    }
    /**
     * A low level cursor API providing basic driver functionality:
     * - ClientSession management
     * - ReadPreference for server selection
     * - Running getMores automatically when a local batch is exhausted
     *
     * @param command - The command that will start a cursor on the server.
     * @param options - Configurations for running the command, bson options will apply to getMores
     */
    runCursorCommand(command2, options) {
      return new run_command_cursor_1.RunCommandCursor(this, command2, options);
    }
  };
  _Db.SYSTEM_NAMESPACE_COLLECTION = CONSTANTS.SYSTEM_NAMESPACE_COLLECTION;
  _Db.SYSTEM_INDEX_COLLECTION = CONSTANTS.SYSTEM_INDEX_COLLECTION;
  _Db.SYSTEM_PROFILE_COLLECTION = CONSTANTS.SYSTEM_PROFILE_COLLECTION;
  _Db.SYSTEM_USER_COLLECTION = CONSTANTS.SYSTEM_USER_COLLECTION;
  _Db.SYSTEM_COMMAND_COLLECTION = CONSTANTS.SYSTEM_COMMAND_COLLECTION;
  _Db.SYSTEM_JS_COLLECTION = CONSTANTS.SYSTEM_JS_COLLECTION;
  let Db = _Db;
  db.Db = Db;
  return db;
}
var mongo_client = {};
var mongo_credentials = {};
var gssapi = {};
var deps = {};
const __viteOptionalPeerDep_kerberos_mongodb_true = {};
const __viteOptionalPeerDep_kerberos_mongodb_true$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: __viteOptionalPeerDep_kerberos_mongodb_true
});
const require$$1 = /* @__PURE__ */ getAugmentedNamespace(__viteOptionalPeerDep_kerberos_mongodb_true$1);
const zstd_mongodb_true = {};
const zstd_mongodb_true$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: zstd_mongodb_true
});
const require$$2 = /* @__PURE__ */ getAugmentedNamespace(zstd_mongodb_true$1);
const credentialProviders_mongodb_true = {};
const credentialProviders_mongodb_true$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: credentialProviders_mongodb_true
});
const require$$3 = /* @__PURE__ */ getAugmentedNamespace(credentialProviders_mongodb_true$1);
const __viteOptionalPeerDep_gcpMetadata_mongodb_true = {};
const __viteOptionalPeerDep_gcpMetadata_mongodb_true$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: __viteOptionalPeerDep_gcpMetadata_mongodb_true
});
const require$$4$1 = /* @__PURE__ */ getAugmentedNamespace(__viteOptionalPeerDep_gcpMetadata_mongodb_true$1);
const __viteOptionalPeerDep_snappy_mongodb_true = {};
const __viteOptionalPeerDep_snappy_mongodb_true$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: __viteOptionalPeerDep_snappy_mongodb_true
});
const require$$5 = /* @__PURE__ */ getAugmentedNamespace(__viteOptionalPeerDep_snappy_mongodb_true$1);
const __viteOptionalPeerDep_socks_mongodb_true = {};
const __viteOptionalPeerDep_socks_mongodb_true$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: __viteOptionalPeerDep_socks_mongodb_true
});
const require$$6 = /* @__PURE__ */ getAugmentedNamespace(__viteOptionalPeerDep_socks_mongodb_true$1);
const __viteOptionalPeerDep_mongodbClientEncryption_mongodb_true = {};
const __viteOptionalPeerDep_mongodbClientEncryption_mongodb_true$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: __viteOptionalPeerDep_mongodbClientEncryption_mongodb_true
});
const require$$7 = /* @__PURE__ */ getAugmentedNamespace(__viteOptionalPeerDep_mongodbClientEncryption_mongodb_true$1);
var hasRequiredDeps;
function requireDeps() {
  if (hasRequiredDeps) return deps;
  hasRequiredDeps = 1;
  Object.defineProperty(deps, "__esModule", { value: true });
  deps.getKerberos = getKerberos;
  deps.getZstdLibrary = getZstdLibrary;
  deps.getAwsCredentialProvider = getAwsCredentialProvider;
  deps.getGcpMetadata = getGcpMetadata;
  deps.getSnappy = getSnappy;
  deps.getSocks = getSocks;
  deps.getMongoDBClientEncryption = getMongoDBClientEncryption;
  const error_1 = requireError();
  function makeErrorModule(error2) {
    const props = error2 ? { kModuleError: error2 } : {};
    return new Proxy(props, {
      get: (_, key) => {
        if (key === "kModuleError") {
          return error2;
        }
        throw error2;
      },
      set: () => {
        throw error2;
      }
    });
  }
  function getKerberos() {
    let kerberos;
    try {
      kerberos = require$$1;
    } catch (error2) {
      kerberos = makeErrorModule(new error_1.MongoMissingDependencyError("Optional module `kerberos` not found. Please install it to enable kerberos authentication", { cause: error2, dependencyName: "kerberos" }));
    }
    return kerberos;
  }
  function getZstdLibrary() {
    let ZStandard;
    try {
      ZStandard = require$$2;
    } catch (error2) {
      ZStandard = makeErrorModule(new error_1.MongoMissingDependencyError("Optional module `@mongodb-js/zstd` not found. Please install it to enable zstd compression", { cause: error2, dependencyName: "zstd" }));
    }
    return ZStandard;
  }
  function getAwsCredentialProvider() {
    try {
      const credentialProvider = require$$3;
      return credentialProvider;
    } catch (error2) {
      return makeErrorModule(new error_1.MongoMissingDependencyError("Optional module `@aws-sdk/credential-providers` not found. Please install it to enable getting aws credentials via the official sdk.", { cause: error2, dependencyName: "@aws-sdk/credential-providers" }));
    }
  }
  function getGcpMetadata() {
    try {
      const credentialProvider = require$$4$1;
      return credentialProvider;
    } catch (error2) {
      return makeErrorModule(new error_1.MongoMissingDependencyError("Optional module `gcp-metadata` not found. Please install it to enable getting gcp credentials via the official sdk.", { cause: error2, dependencyName: "gcp-metadata" }));
    }
  }
  function getSnappy() {
    try {
      const value = require$$5;
      return value;
    } catch (error2) {
      const kModuleError = new error_1.MongoMissingDependencyError("Optional module `snappy` not found. Please install it to enable snappy compression", { cause: error2, dependencyName: "snappy" });
      return { kModuleError };
    }
  }
  function getSocks() {
    try {
      const value = require$$6;
      return value;
    } catch (error2) {
      const kModuleError = new error_1.MongoMissingDependencyError("Optional module `socks` not found. Please install it to connections over a SOCKS5 proxy", { cause: error2, dependencyName: "socks" });
      return { kModuleError };
    }
  }
  function getMongoDBClientEncryption() {
    let mongodbClientEncryption = null;
    try {
      mongodbClientEncryption = require$$7;
    } catch (error2) {
      const kModuleError = new error_1.MongoMissingDependencyError("Optional module `mongodb-client-encryption` not found. Please install it to use auto encryption or ClientEncryption.", { cause: error2, dependencyName: "mongodb-client-encryption" });
      return { kModuleError };
    }
    return mongodbClientEncryption;
  }
  return deps;
}
var auth_provider = {};
var hasRequiredAuth_provider;
function requireAuth_provider() {
  if (hasRequiredAuth_provider) return auth_provider;
  hasRequiredAuth_provider = 1;
  Object.defineProperty(auth_provider, "__esModule", { value: true });
  auth_provider.AuthProvider = auth_provider.AuthContext = void 0;
  const error_1 = requireError();
  class AuthContext {
    constructor(connection2, credentials, options) {
      this.reauthenticating = false;
      this.connection = connection2;
      this.credentials = credentials;
      this.options = options;
    }
  }
  auth_provider.AuthContext = AuthContext;
  class AuthProvider {
    /**
     * Prepare the handshake document before the initial handshake.
     *
     * @param handshakeDoc - The document used for the initial handshake on a connection
     * @param authContext - Context for authentication flow
     */
    async prepare(handshakeDoc, _authContext) {
      return handshakeDoc;
    }
    /**
     * Reauthenticate.
     * @param context - The shared auth context.
     */
    async reauth(context) {
      if (context.reauthenticating) {
        throw new error_1.MongoRuntimeError("Reauthentication already in progress.");
      }
      try {
        context.reauthenticating = true;
        await this.auth(context);
      } finally {
        context.reauthenticating = false;
      }
    }
  }
  auth_provider.AuthProvider = AuthProvider;
  return auth_provider;
}
var hasRequiredGssapi;
function requireGssapi() {
  if (hasRequiredGssapi) return gssapi;
  hasRequiredGssapi = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GSSAPI = exports.GSSAPICanonicalizationValue = void 0;
    exports.performGSSAPICanonicalizeHostName = performGSSAPICanonicalizeHostName;
    exports.resolveCname = resolveCname;
    const dns = require$$0$6;
    const deps_1 = requireDeps();
    const error_1 = requireError();
    const utils_1 = requireUtils();
    const auth_provider_1 = requireAuth_provider();
    exports.GSSAPICanonicalizationValue = Object.freeze({
      on: true,
      off: false,
      none: "none",
      forward: "forward",
      forwardAndReverse: "forwardAndReverse"
    });
    async function externalCommand(connection2, command2) {
      const response = await connection2.command((0, utils_1.ns)("$external.$cmd"), command2);
      return response;
    }
    let krb;
    class GSSAPI extends auth_provider_1.AuthProvider {
      async auth(authContext) {
        const { connection: connection2, credentials } = authContext;
        if (credentials == null) {
          throw new error_1.MongoMissingCredentialsError("Credentials required for GSSAPI authentication");
        }
        const { username } = credentials;
        const client = await makeKerberosClient(authContext);
        const payload = await client.step("");
        const saslStartResponse = await externalCommand(connection2, saslStart(payload));
        const negotiatedPayload = await negotiate(client, 10, saslStartResponse.payload);
        const saslContinueResponse = await externalCommand(connection2, saslContinue(negotiatedPayload, saslStartResponse.conversationId));
        const finalizePayload = await finalize(client, username, saslContinueResponse.payload);
        await externalCommand(connection2, {
          saslContinue: 1,
          conversationId: saslContinueResponse.conversationId,
          payload: finalizePayload
        });
      }
    }
    exports.GSSAPI = GSSAPI;
    async function makeKerberosClient({ options: { hostAddress, runtime: { os } }, credentials }) {
      if (!hostAddress || typeof hostAddress.host !== "string" || !credentials) {
        throw new error_1.MongoInvalidArgumentError("Connection must have host and port and credentials defined.");
      }
      loadKrb();
      if ("kModuleError" in krb) {
        throw krb["kModuleError"];
      }
      const { initializeClient } = krb;
      const { username, password } = credentials;
      const mechanismProperties = credentials.mechanismProperties;
      const serviceName = mechanismProperties.SERVICE_NAME ?? "mongodb";
      const host = await performGSSAPICanonicalizeHostName(hostAddress.host, mechanismProperties);
      const initOptions = {};
      if (password != null) {
        Object.assign(initOptions, { user: username, password });
      }
      const spnHost = mechanismProperties.SERVICE_HOST ?? host;
      let spn = `${serviceName}${os.platform() === "win32" ? "/" : "@"}${spnHost}`;
      if ("SERVICE_REALM" in mechanismProperties) {
        spn = `${spn}@${mechanismProperties.SERVICE_REALM}`;
      }
      return await initializeClient(spn, initOptions);
    }
    function saslStart(payload) {
      return {
        saslStart: 1,
        mechanism: "GSSAPI",
        payload,
        autoAuthorize: 1
      };
    }
    function saslContinue(payload, conversationId) {
      return {
        saslContinue: 1,
        conversationId,
        payload
      };
    }
    async function negotiate(client, retries, payload) {
      try {
        const response = await client.step(payload);
        return response || "";
      } catch (error2) {
        if (retries === 0) {
          throw error2;
        }
        return await negotiate(client, retries - 1, payload);
      }
    }
    async function finalize(client, user, payload) {
      const response = await client.unwrap(payload);
      return await client.wrap(response || "", { user });
    }
    async function performGSSAPICanonicalizeHostName(host, mechanismProperties) {
      const mode = mechanismProperties.CANONICALIZE_HOST_NAME;
      if (!mode || mode === exports.GSSAPICanonicalizationValue.none) {
        return host;
      }
      if (mode === exports.GSSAPICanonicalizationValue.on || mode === exports.GSSAPICanonicalizationValue.forwardAndReverse) {
        const { address } = await dns.promises.lookup(host);
        try {
          const results = await dns.promises.resolve(address, "PTR");
          return results.length > 0 ? results[0] : host;
        } catch {
          return await resolveCname(host);
        }
      } else {
        return await resolveCname(host);
      }
    }
    async function resolveCname(host) {
      try {
        const results = await dns.promises.resolve(host, "CNAME");
        return results.length > 0 ? results[0] : host;
      } catch {
        return host;
      }
    }
    function loadKrb() {
      if (!krb) {
        krb = (0, deps_1.getKerberos)();
      }
    }
  })(gssapi);
  return gssapi;
}
var providers$1 = {};
var hasRequiredProviders$1;
function requireProviders$1() {
  if (hasRequiredProviders$1) return providers$1;
  hasRequiredProviders$1 = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AUTH_MECHS_AUTH_SRC_EXTERNAL = exports.AuthMechanism = void 0;
    exports.AuthMechanism = Object.freeze({
      MONGODB_AWS: "MONGODB-AWS",
      MONGODB_DEFAULT: "DEFAULT",
      MONGODB_GSSAPI: "GSSAPI",
      MONGODB_PLAIN: "PLAIN",
      MONGODB_SCRAM_SHA1: "SCRAM-SHA-1",
      MONGODB_SCRAM_SHA256: "SCRAM-SHA-256",
      MONGODB_X509: "MONGODB-X509",
      MONGODB_OIDC: "MONGODB-OIDC"
    });
    exports.AUTH_MECHS_AUTH_SRC_EXTERNAL = /* @__PURE__ */ new Set([
      exports.AuthMechanism.MONGODB_GSSAPI,
      exports.AuthMechanism.MONGODB_AWS,
      exports.AuthMechanism.MONGODB_OIDC,
      exports.AuthMechanism.MONGODB_X509
    ]);
  })(providers$1);
  return providers$1;
}
var hasRequiredMongo_credentials;
function requireMongo_credentials() {
  if (hasRequiredMongo_credentials) return mongo_credentials;
  hasRequiredMongo_credentials = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MongoCredentials = exports.DEFAULT_ALLOWED_HOSTS = void 0;
    const error_1 = requireError();
    const gssapi_1 = requireGssapi();
    const providers_1 = requireProviders$1();
    function getDefaultAuthMechanism(hello) {
      if (hello) {
        if (Array.isArray(hello.saslSupportedMechs)) {
          return hello.saslSupportedMechs.includes(providers_1.AuthMechanism.MONGODB_SCRAM_SHA256) ? providers_1.AuthMechanism.MONGODB_SCRAM_SHA256 : providers_1.AuthMechanism.MONGODB_SCRAM_SHA1;
        }
      }
      return providers_1.AuthMechanism.MONGODB_SCRAM_SHA256;
    }
    const ALLOWED_ENVIRONMENT_NAMES = [
      "test",
      "azure",
      "gcp",
      "k8s"
    ];
    const ALLOWED_HOSTS_ERROR = "Auth mechanism property ALLOWED_HOSTS must be an array of strings.";
    exports.DEFAULT_ALLOWED_HOSTS = [
      "*.mongodb.net",
      "*.mongodb-qa.net",
      "*.mongodb-dev.net",
      "*.mongodbgov.net",
      "localhost",
      "127.0.0.1",
      "::1",
      "*.mongo.com"
    ];
    const TOKEN_RESOURCE_MISSING_ERROR = "TOKEN_RESOURCE must be set in the auth mechanism properties when ENVIRONMENT is azure or gcp.";
    class MongoCredentials {
      constructor(options) {
        this.username = options.username ?? "";
        this.password = options.password;
        this.source = options.source;
        if (!this.source && options.db) {
          this.source = options.db;
        }
        this.mechanism = options.mechanism || providers_1.AuthMechanism.MONGODB_DEFAULT;
        this.mechanismProperties = options.mechanismProperties || {};
        if (this.mechanism === providers_1.AuthMechanism.MONGODB_OIDC && !this.mechanismProperties.ALLOWED_HOSTS) {
          this.mechanismProperties = {
            ...this.mechanismProperties,
            ALLOWED_HOSTS: exports.DEFAULT_ALLOWED_HOSTS
          };
        }
        Object.freeze(this.mechanismProperties);
        Object.freeze(this);
      }
      /** Determines if two MongoCredentials objects are equivalent */
      equals(other) {
        return this.mechanism === other.mechanism && this.username === other.username && this.password === other.password && this.source === other.source;
      }
      /**
       * If the authentication mechanism is set to "default", resolves the authMechanism
       * based on the server version and server supported sasl mechanisms.
       *
       * @param hello - A hello response from the server
       */
      resolveAuthMechanism(hello) {
        if (this.mechanism.match(/DEFAULT/i)) {
          return new MongoCredentials({
            username: this.username,
            password: this.password,
            source: this.source,
            mechanism: getDefaultAuthMechanism(hello),
            mechanismProperties: this.mechanismProperties
          });
        }
        return this;
      }
      validate() {
        if ((this.mechanism === providers_1.AuthMechanism.MONGODB_GSSAPI || this.mechanism === providers_1.AuthMechanism.MONGODB_PLAIN || this.mechanism === providers_1.AuthMechanism.MONGODB_SCRAM_SHA1 || this.mechanism === providers_1.AuthMechanism.MONGODB_SCRAM_SHA256) && !this.username) {
          throw new error_1.MongoMissingCredentialsError(`Username required for mechanism '${this.mechanism}'`);
        }
        if (this.mechanism === providers_1.AuthMechanism.MONGODB_OIDC) {
          if (this.username && this.mechanismProperties.ENVIRONMENT && this.mechanismProperties.ENVIRONMENT !== "azure") {
            throw new error_1.MongoInvalidArgumentError(`username and ENVIRONMENT '${this.mechanismProperties.ENVIRONMENT}' may not be used together for mechanism '${this.mechanism}'.`);
          }
          if (this.username && this.password) {
            throw new error_1.MongoInvalidArgumentError(`No password is allowed in ENVIRONMENT '${this.mechanismProperties.ENVIRONMENT}' for '${this.mechanism}'.`);
          }
          if ((this.mechanismProperties.ENVIRONMENT === "azure" || this.mechanismProperties.ENVIRONMENT === "gcp") && !this.mechanismProperties.TOKEN_RESOURCE) {
            throw new error_1.MongoInvalidArgumentError(TOKEN_RESOURCE_MISSING_ERROR);
          }
          if (this.mechanismProperties.ENVIRONMENT && !ALLOWED_ENVIRONMENT_NAMES.includes(this.mechanismProperties.ENVIRONMENT)) {
            throw new error_1.MongoInvalidArgumentError(`Currently only a ENVIRONMENT in ${ALLOWED_ENVIRONMENT_NAMES.join(",")} is supported for mechanism '${this.mechanism}'.`);
          }
          if (!this.mechanismProperties.ENVIRONMENT && !this.mechanismProperties.OIDC_CALLBACK && !this.mechanismProperties.OIDC_HUMAN_CALLBACK) {
            throw new error_1.MongoInvalidArgumentError(`Either a ENVIRONMENT, OIDC_CALLBACK, or OIDC_HUMAN_CALLBACK must be specified for mechanism '${this.mechanism}'.`);
          }
          if (this.mechanismProperties.ALLOWED_HOSTS) {
            const hosts = this.mechanismProperties.ALLOWED_HOSTS;
            if (!Array.isArray(hosts)) {
              throw new error_1.MongoInvalidArgumentError(ALLOWED_HOSTS_ERROR);
            }
            for (const host of hosts) {
              if (typeof host !== "string") {
                throw new error_1.MongoInvalidArgumentError(ALLOWED_HOSTS_ERROR);
              }
            }
          }
        }
        if (providers_1.AUTH_MECHS_AUTH_SRC_EXTERNAL.has(this.mechanism)) {
          if (this.source != null && this.source !== "$external") {
            throw new error_1.MongoAPIError(`Invalid source '${this.source}' for mechanism '${this.mechanism}' specified.`);
          }
        }
        if (this.mechanism === providers_1.AuthMechanism.MONGODB_PLAIN && this.source == null) {
          throw new error_1.MongoAPIError("PLAIN Authentication Mechanism needs an auth source");
        }
        if (this.mechanism === providers_1.AuthMechanism.MONGODB_X509 && this.password != null) {
          if (this.password === "") {
            Reflect.set(this, "password", void 0);
            return;
          }
          throw new error_1.MongoAPIError(`Password not allowed for mechanism MONGODB-X509`);
        }
        const canonicalization = this.mechanismProperties.CANONICALIZE_HOST_NAME ?? false;
        if (!Object.values(gssapi_1.GSSAPICanonicalizationValue).includes(canonicalization)) {
          throw new error_1.MongoAPIError(`Invalid CANONICALIZE_HOST_NAME value: ${canonicalization}`);
        }
      }
      static merge(creds, options) {
        return new MongoCredentials({
          username: options.username ?? creds?.username ?? "",
          password: options.password ?? creds?.password ?? "",
          mechanism: options.mechanism ?? creds?.mechanism ?? providers_1.AuthMechanism.MONGODB_DEFAULT,
          mechanismProperties: options.mechanismProperties ?? creds?.mechanismProperties ?? {},
          source: options.source ?? options.db ?? creds?.source ?? "admin"
        });
      }
    }
    exports.MongoCredentials = MongoCredentials;
  })(mongo_credentials);
  return mongo_credentials;
}
var client_metadata = {};
const version = "7.5.0";
const require$$4 = {
  version
};
var hasRequiredClient_metadata;
function requireClient_metadata() {
  if (hasRequiredClient_metadata) return client_metadata;
  hasRequiredClient_metadata = 1;
  Object.defineProperty(client_metadata, "__esModule", { value: true });
  client_metadata.LimitedSizeDocument = void 0;
  client_metadata.isDriverInfoEqual = isDriverInfoEqual;
  client_metadata.makeClientMetadata = makeClientMetadata;
  client_metadata.getFAASEnv = getFAASEnv;
  const process = require$$0;
  const bson_1 = requireBson();
  const error_1 = requireError();
  const utils_1 = requireUtils();
  const NODE_DRIVER_VERSION = require$$4.version;
  function isDriverInfoEqual(info1, info2) {
    const nonEmptyCmp = (s1, s2) => {
      s1 ||= void 0;
      s2 ||= void 0;
      return s1 === s2;
    };
    return nonEmptyCmp(info1.name, info2.name) && nonEmptyCmp(info1.platform, info2.platform) && nonEmptyCmp(info1.version, info2.version);
  }
  class LimitedSizeDocument {
    constructor(maxSize) {
      this.document = /* @__PURE__ */ new Map();
      this.documentSize = 5;
      this.maxSize = maxSize;
    }
    /** Only adds key/value if the bsonByteLength is less than MAX_SIZE */
    ifItFitsItSits(key, value) {
      const newElementSize = bson_1.BSON.serialize((/* @__PURE__ */ new Map()).set(key, value)).byteLength - 5;
      if (newElementSize + this.documentSize > this.maxSize) {
        return false;
      }
      this.documentSize += newElementSize;
      this.document.set(key, value);
      return true;
    }
    toObject() {
      return bson_1.BSON.deserialize(bson_1.BSON.serialize(this.document), {
        promoteLongs: false,
        promoteBuffers: false,
        promoteValues: false,
        useBigInt64: false
      });
    }
  }
  client_metadata.LimitedSizeDocument = LimitedSizeDocument;
  async function makeClientMetadata(driverInfoList, { appName = "", runtime: { os } }) {
    const metadataDocument = new LimitedSizeDocument(512);
    if (appName.length > 0) {
      const name = bson_1.ByteUtils.utf8ByteLength(appName) <= 128 ? appName : bson_1.ByteUtils.toUTF8(bson_1.ByteUtils.fromUTF8(appName), 0, 128, false);
      metadataDocument.ifItFitsItSits("application", { name });
    }
    const driverInfo = {
      name: "nodejs",
      version: NODE_DRIVER_VERSION
    };
    for (const { name: n = "", version: v = "" } of driverInfoList) {
      if (n.length > 0) {
        driverInfo.name = `${driverInfo.name}|${n}`;
      }
      if (v.length > 0) {
        driverInfo.version = `${driverInfo.version}|${v}`;
      }
    }
    if (!metadataDocument.ifItFitsItSits("driver", driverInfo)) {
      throw new error_1.MongoInvalidArgumentError("Unable to include driverInfo name and version, metadata cannot exceed 512 bytes");
    }
    let runtimeInfo = getRuntimeInfo();
    for (const { platform = "" } of driverInfoList) {
      if (platform.length > 0) {
        runtimeInfo = `${runtimeInfo}|${platform}`;
      }
    }
    if (!metadataDocument.ifItFitsItSits("platform", runtimeInfo)) {
      throw new error_1.MongoInvalidArgumentError("Unable to include driverInfo platform, metadata cannot exceed 512 bytes");
    }
    const osInfo = (/* @__PURE__ */ new Map()).set("name", os.platform()).set("architecture", os.arch()).set("version", os.release()).set("type", os.type());
    if (!metadataDocument.ifItFitsItSits("os", osInfo)) {
      for (const key of osInfo.keys()) {
        osInfo.delete(key);
        if (osInfo.size === 0)
          break;
        if (metadataDocument.ifItFitsItSits("os", osInfo))
          break;
      }
    }
    const faasEnv = getFAASEnv();
    if (faasEnv != null) {
      if (!metadataDocument.ifItFitsItSits("env", faasEnv)) {
        for (const key of faasEnv.keys()) {
          faasEnv.delete(key);
          if (faasEnv.size === 0)
            break;
          if (metadataDocument.ifItFitsItSits("env", faasEnv))
            break;
        }
      }
    }
    return await addContainerMetadata(metadataDocument.toObject());
  }
  let dockerPromise;
  async function getContainerMetadata() {
    dockerPromise ??= (0, utils_1.fileIsAccessible)("/.dockerenv");
    const isDocker = await dockerPromise;
    const { KUBERNETES_SERVICE_HOST = "" } = process.env;
    const isKubernetes = KUBERNETES_SERVICE_HOST.length > 0 ? true : false;
    const containerMetadata = {};
    if (isDocker)
      containerMetadata.runtime = "docker";
    if (isKubernetes)
      containerMetadata.orchestrator = "kubernetes";
    return containerMetadata;
  }
  async function addContainerMetadata(originalMetadata) {
    const containerMetadata = await getContainerMetadata();
    if (Object.keys(containerMetadata).length === 0)
      return originalMetadata;
    const extendedMetadata = new LimitedSizeDocument(512);
    const extendedEnvMetadata = {
      ...originalMetadata?.env,
      container: containerMetadata
    };
    for (const [key, val] of Object.entries(originalMetadata)) {
      if (key !== "env") {
        extendedMetadata.ifItFitsItSits(key, val);
      } else {
        if (!extendedMetadata.ifItFitsItSits("env", extendedEnvMetadata)) {
          extendedMetadata.ifItFitsItSits("env", val);
        }
      }
    }
    if (!("env" in originalMetadata)) {
      extendedMetadata.ifItFitsItSits("env", extendedEnvMetadata);
    }
    return extendedMetadata.toObject();
  }
  function getFAASEnv() {
    const { AWS_EXECUTION_ENV = "", AWS_LAMBDA_RUNTIME_API = "", FUNCTIONS_WORKER_RUNTIME = "", K_SERVICE = "", FUNCTION_NAME = "", VERCEL = "", AWS_LAMBDA_FUNCTION_MEMORY_SIZE = "", AWS_REGION = "", FUNCTION_MEMORY_MB = "", FUNCTION_REGION = "", FUNCTION_TIMEOUT_SEC = "", VERCEL_REGION = "" } = process.env;
    const isAWSFaaS = AWS_EXECUTION_ENV.startsWith("AWS_Lambda_") || AWS_LAMBDA_RUNTIME_API.length > 0;
    const isAzureFaaS = FUNCTIONS_WORKER_RUNTIME.length > 0;
    const isGCPFaaS = K_SERVICE.length > 0 || FUNCTION_NAME.length > 0;
    const isVercelFaaS = VERCEL.length > 0;
    const faasEnv = /* @__PURE__ */ new Map();
    if (isVercelFaaS && !(isAzureFaaS || isGCPFaaS)) {
      if (VERCEL_REGION.length > 0) {
        faasEnv.set("region", VERCEL_REGION);
      }
      faasEnv.set("name", "vercel");
      return faasEnv;
    }
    if (isAWSFaaS && !(isAzureFaaS || isGCPFaaS || isVercelFaaS)) {
      if (AWS_REGION.length > 0) {
        faasEnv.set("region", AWS_REGION);
      }
      if (AWS_LAMBDA_FUNCTION_MEMORY_SIZE.length > 0 && Number.isInteger(+AWS_LAMBDA_FUNCTION_MEMORY_SIZE)) {
        faasEnv.set("memory_mb", new bson_1.Int32(AWS_LAMBDA_FUNCTION_MEMORY_SIZE));
      }
      faasEnv.set("name", "aws.lambda");
      return faasEnv;
    }
    if (isAzureFaaS && !(isGCPFaaS || isAWSFaaS || isVercelFaaS)) {
      faasEnv.set("name", "azure.func");
      return faasEnv;
    }
    if (isGCPFaaS && !(isAzureFaaS || isAWSFaaS || isVercelFaaS)) {
      if (FUNCTION_REGION.length > 0) {
        faasEnv.set("region", FUNCTION_REGION);
      }
      if (FUNCTION_MEMORY_MB.length > 0 && Number.isInteger(+FUNCTION_MEMORY_MB)) {
        faasEnv.set("memory_mb", new bson_1.Int32(FUNCTION_MEMORY_MB));
      }
      if (FUNCTION_TIMEOUT_SEC.length > 0 && Number.isInteger(+FUNCTION_TIMEOUT_SEC)) {
        faasEnv.set("timeout_sec", new bson_1.Int32(FUNCTION_TIMEOUT_SEC));
      }
      faasEnv.set("name", "gcp.func");
      return faasEnv;
    }
    return null;
  }
  function getRuntimeInfo() {
    const endianness = bson_1.NumberUtils.isBigEndian ? "BE" : "LE";
    if ("Deno" in globalThis) {
      const version2 = typeof Deno?.version?.deno === "string" ? Deno?.version?.deno : "0.0.0-unknown";
      return `Deno v${version2}, ${endianness}`;
    }
    if ("Bun" in globalThis) {
      const version2 = typeof Bun?.version === "string" ? Bun?.version : "0.0.0-unknown";
      return `Bun v${version2}, ${endianness}`;
    }
    return `Node.js ${process.version}, ${endianness}`;
  }
  return client_metadata;
}
var connection_string = {};
var compression = {};
var commands = {};
var hasRequiredCommands;
function requireCommands() {
  if (hasRequiredCommands) return commands;
  hasRequiredCommands = 1;
  Object.defineProperty(commands, "__esModule", { value: true });
  commands.OpCompressedRequest = commands.OpMsgResponse = commands.OpMsgRequest = commands.DocumentSequence = commands.OpReply = commands.OpQueryRequest = void 0;
  const bson_1 = requireBson();
  const error_1 = requireError();
  const compression_1 = requireCompression();
  const constants_1 = requireConstants$1();
  let _requestId = 0;
  const OPTS_TAILABLE_CURSOR = 2;
  const OPTS_SECONDARY = 4;
  const OPTS_OPLOG_REPLAY = 8;
  const OPTS_NO_CURSOR_TIMEOUT = 16;
  const OPTS_AWAIT_DATA = 32;
  const OPTS_EXHAUST = 64;
  const OPTS_PARTIAL = 128;
  const CURSOR_NOT_FOUND = 1;
  const QUERY_FAILURE = 2;
  const SHARD_CONFIG_STALE = 4;
  const AWAIT_CAPABLE = 8;
  const encodeUTF8Into = bson_1.ByteUtils.encodeUTF8Into;
  class OpQueryRequest {
    constructor(databaseName, query, options) {
      this.moreToCome = false;
      const ns = `${databaseName}.$cmd`;
      if (typeof databaseName !== "string") {
        throw new error_1.MongoRuntimeError("Database name must be a string for a query");
      }
      if (query == null)
        throw new error_1.MongoRuntimeError("A query document must be specified for query");
      if (ns.indexOf("\0") !== -1) {
        throw new error_1.MongoRuntimeError("Namespace cannot contain a null character");
      }
      this.databaseName = databaseName;
      this.query = query;
      this.ns = ns;
      this.numberToSkip = options.numberToSkip || 0;
      this.numberToReturn = options.numberToReturn || 0;
      this.returnFieldSelector = options.returnFieldSelector || void 0;
      this.requestId = options.requestId ?? OpQueryRequest.getRequestId();
      this.pre32Limit = options.pre32Limit;
      this.serializeFunctions = typeof options.serializeFunctions === "boolean" ? options.serializeFunctions : false;
      this.ignoreUndefined = typeof options.ignoreUndefined === "boolean" ? options.ignoreUndefined : false;
      this.maxBsonSize = options.maxBsonSize || 1024 * 1024 * 16;
      this.checkKeys = typeof options.checkKeys === "boolean" ? options.checkKeys : false;
      this.batchSize = this.numberToReturn;
      this.tailable = false;
      this.secondaryOk = typeof options.secondaryOk === "boolean" ? options.secondaryOk : false;
      this.oplogReplay = false;
      this.noCursorTimeout = false;
      this.awaitData = false;
      this.exhaust = false;
      this.partial = false;
    }
    /** Assign next request Id. */
    incRequestId() {
      this.requestId = _requestId++;
    }
    /** Peek next request Id. */
    nextRequestId() {
      return _requestId + 1;
    }
    /** Increment then return next request Id. */
    static getRequestId() {
      return ++_requestId;
    }
    // Uses a single allocated buffer for the process, avoiding multiple memory allocations
    toBin() {
      const buffers = [];
      let projection = null;
      let flags = 0;
      if (this.tailable) {
        flags |= OPTS_TAILABLE_CURSOR;
      }
      if (this.secondaryOk) {
        flags |= OPTS_SECONDARY;
      }
      if (this.oplogReplay) {
        flags |= OPTS_OPLOG_REPLAY;
      }
      if (this.noCursorTimeout) {
        flags |= OPTS_NO_CURSOR_TIMEOUT;
      }
      if (this.awaitData) {
        flags |= OPTS_AWAIT_DATA;
      }
      if (this.exhaust) {
        flags |= OPTS_EXHAUST;
      }
      if (this.partial) {
        flags |= OPTS_PARTIAL;
      }
      if (this.batchSize !== this.numberToReturn)
        this.numberToReturn = this.batchSize;
      const header = bson_1.ByteUtils.allocate(
        4 * 4 + // Header
        4 + // Flags
        bson_1.ByteUtils.utf8ByteLength(this.ns) + 1 + // namespace
        4 + // numberToSkip
        4
        // numberToReturn
      );
      buffers.push(header);
      const query = bson_1.BSON.serialize(this.query, {
        checkKeys: this.checkKeys,
        serializeFunctions: this.serializeFunctions,
        ignoreUndefined: this.ignoreUndefined
      });
      buffers.push(query);
      if (this.returnFieldSelector && Object.keys(this.returnFieldSelector).length > 0) {
        projection = bson_1.BSON.serialize(this.returnFieldSelector, {
          checkKeys: this.checkKeys,
          serializeFunctions: this.serializeFunctions,
          ignoreUndefined: this.ignoreUndefined
        });
        buffers.push(projection);
      }
      const totalLength = header.length + query.length + (projection ? projection.length : 0);
      let index = 4;
      header[3] = totalLength >> 24 & 255;
      header[2] = totalLength >> 16 & 255;
      header[1] = totalLength >> 8 & 255;
      header[0] = totalLength & 255;
      header[index + 3] = this.requestId >> 24 & 255;
      header[index + 2] = this.requestId >> 16 & 255;
      header[index + 1] = this.requestId >> 8 & 255;
      header[index] = this.requestId & 255;
      index = index + 4;
      header[index + 3] = 0 >> 24 & 255;
      header[index + 2] = 0 >> 16 & 255;
      header[index + 1] = 0 >> 8 & 255;
      header[index] = 0 & 255;
      index = index + 4;
      header[index + 3] = constants_1.OP_QUERY >> 24 & 255;
      header[index + 2] = constants_1.OP_QUERY >> 16 & 255;
      header[index + 1] = constants_1.OP_QUERY >> 8 & 255;
      header[index] = constants_1.OP_QUERY & 255;
      index = index + 4;
      header[index + 3] = flags >> 24 & 255;
      header[index + 2] = flags >> 16 & 255;
      header[index + 1] = flags >> 8 & 255;
      header[index] = flags & 255;
      index = index + 4;
      index = index + encodeUTF8Into(header, this.ns, index) + 1;
      header[index - 1] = 0;
      header[index + 3] = this.numberToSkip >> 24 & 255;
      header[index + 2] = this.numberToSkip >> 16 & 255;
      header[index + 1] = this.numberToSkip >> 8 & 255;
      header[index] = this.numberToSkip & 255;
      index = index + 4;
      header[index + 3] = this.numberToReturn >> 24 & 255;
      header[index + 2] = this.numberToReturn >> 16 & 255;
      header[index + 1] = this.numberToReturn >> 8 & 255;
      header[index] = this.numberToReturn & 255;
      index = index + 4;
      return buffers;
    }
  }
  commands.OpQueryRequest = OpQueryRequest;
  class OpReply {
    constructor(message, msgHeader, msgBody, opts) {
      this.index = 0;
      this.sections = [];
      this.moreToCome = false;
      this.parsed = false;
      this.raw = message;
      this.data = msgBody;
      this.opts = opts ?? {
        useBigInt64: false,
        promoteLongs: true,
        promoteValues: true,
        promoteBuffers: false,
        bsonRegExp: false
      };
      this.length = msgHeader.length;
      this.requestId = msgHeader.requestId;
      this.responseTo = msgHeader.responseTo;
      this.opCode = msgHeader.opCode;
      this.fromCompressed = msgHeader.fromCompressed;
      this.useBigInt64 = typeof this.opts.useBigInt64 === "boolean" ? this.opts.useBigInt64 : false;
      this.promoteLongs = typeof this.opts.promoteLongs === "boolean" ? this.opts.promoteLongs : true;
      this.promoteValues = typeof this.opts.promoteValues === "boolean" ? this.opts.promoteValues : true;
      this.promoteBuffers = typeof this.opts.promoteBuffers === "boolean" ? this.opts.promoteBuffers : false;
      this.bsonRegExp = typeof this.opts.bsonRegExp === "boolean" ? this.opts.bsonRegExp : false;
    }
    isParsed() {
      return this.parsed;
    }
    parse() {
      if (this.parsed)
        return this.sections[0];
      this.index = 20;
      this.responseFlags = (0, bson_1.readInt32LE)(this.data, 0);
      this.cursorId = new bson_1.BSON.Long((0, bson_1.readInt32LE)(this.data, 4), (0, bson_1.readInt32LE)(this.data, 8));
      this.startingFrom = (0, bson_1.readInt32LE)(this.data, 12);
      this.numberReturned = (0, bson_1.readInt32LE)(this.data, 16);
      if (this.numberReturned < 0 || this.numberReturned > 2 ** 32 - 1) {
        throw new RangeError(`OP_REPLY numberReturned is an invalid array length ${this.numberReturned}`);
      }
      this.cursorNotFound = (this.responseFlags & CURSOR_NOT_FOUND) !== 0;
      this.queryFailure = (this.responseFlags & QUERY_FAILURE) !== 0;
      this.shardConfigStale = (this.responseFlags & SHARD_CONFIG_STALE) !== 0;
      this.awaitCapable = (this.responseFlags & AWAIT_CAPABLE) !== 0;
      for (let i = 0; i < this.numberReturned; i++) {
        const bsonSize = this.data[this.index] | this.data[this.index + 1] << 8 | this.data[this.index + 2] << 16 | this.data[this.index + 3] << 24;
        const section = this.data.subarray(this.index, this.index + bsonSize);
        this.sections.push(section);
        this.index = this.index + bsonSize;
      }
      this.parsed = true;
      return this.sections[0];
    }
  }
  commands.OpReply = OpReply;
  const OPTS_CHECKSUM_PRESENT = 1;
  const OPTS_MORE_TO_COME = 2;
  const OPTS_EXHAUST_ALLOWED = 1 << 16;
  class DocumentSequence {
    /**
     * Create a new document sequence for the provided field.
     * @param field - The field it will replace.
     */
    constructor(field, documents) {
      this.field = field;
      this.documents = [];
      this.chunks = [];
      this.serializedDocumentsLength = 0;
      const buffer = bson_1.ByteUtils.allocateUnsafe(1 + 4 + this.field.length + 1);
      buffer[0] = 1;
      encodeUTF8Into(buffer, `${this.field}\0`, 5);
      this.chunks.push(buffer);
      this.header = buffer;
      if (documents) {
        for (const doc of documents) {
          this.push(doc, bson_1.BSON.serialize(doc));
        }
      }
    }
    /**
     * Push a document to the document sequence. Will serialize the document
     * as well and return the current serialized length of all documents.
     * @param document - The document to add.
     * @param buffer - The serialized document in raw BSON.
     * @returns The new total document sequence length.
     */
    push(document2, buffer) {
      this.serializedDocumentsLength += buffer.length;
      this.documents.push(document2);
      this.chunks.push(buffer);
      if (this.header) {
        bson_1.NumberUtils.setInt32LE(this.header, 1, 4 + this.field.length + 1 + this.serializedDocumentsLength);
      }
      return this.serializedDocumentsLength + this.header.length;
    }
    /**
     * Get the fully serialized bytes for the document sequence section.
     * @returns The section bytes.
     */
    toBin() {
      return bson_1.ByteUtils.concat(this.chunks);
    }
  }
  commands.DocumentSequence = DocumentSequence;
  class OpMsgRequest {
    constructor(databaseName, command2, options) {
      if (command2 == null)
        throw new error_1.MongoInvalidArgumentError("Query document must be specified for query");
      this.databaseName = databaseName;
      this.command = command2;
      this.command.$db = databaseName;
      this.options = options ?? {};
      this.requestId = options.requestId ? options.requestId : OpMsgRequest.getRequestId();
      this.serializeFunctions = typeof options.serializeFunctions === "boolean" ? options.serializeFunctions : false;
      this.ignoreUndefined = typeof options.ignoreUndefined === "boolean" ? options.ignoreUndefined : false;
      this.checkKeys = typeof options.checkKeys === "boolean" ? options.checkKeys : false;
      this.maxBsonSize = options.maxBsonSize || 1024 * 1024 * 16;
      this.checksumPresent = false;
      this.moreToCome = options.moreToCome ?? command2.writeConcern?.w === 0;
      this.exhaustAllowed = typeof options.exhaustAllowed === "boolean" ? options.exhaustAllowed : false;
    }
    toBin() {
      const buffers = [];
      let flags = 0;
      if (this.checksumPresent) {
        flags |= OPTS_CHECKSUM_PRESENT;
      }
      if (this.moreToCome) {
        flags |= OPTS_MORE_TO_COME;
      }
      if (this.exhaustAllowed) {
        flags |= OPTS_EXHAUST_ALLOWED;
      }
      const header = bson_1.ByteUtils.allocate(
        4 * 4 + // Header
        4
        // Flags
      );
      buffers.push(header);
      let totalLength = header.length;
      const command2 = this.command;
      totalLength += this.makeSections(buffers, command2);
      bson_1.NumberUtils.setInt32LE(header, 0, totalLength);
      bson_1.NumberUtils.setInt32LE(header, 4, this.requestId);
      bson_1.NumberUtils.setInt32LE(header, 8, 0);
      bson_1.NumberUtils.setInt32LE(header, 12, constants_1.OP_MSG);
      (0, bson_1.setUint32LE)(header, 16, flags);
      return buffers;
    }
    /**
     * Add the sections to the OP_MSG request's buffers and returns the length.
     */
    makeSections(buffers, document2) {
      const sequencesBuffer = this.extractDocumentSequences(document2);
      const payloadTypeBuffer = bson_1.ByteUtils.allocateUnsafe(1);
      payloadTypeBuffer[0] = 0;
      const documentBuffer = this.serializeBson(document2);
      buffers.push(payloadTypeBuffer);
      buffers.push(documentBuffer);
      buffers.push(sequencesBuffer);
      return payloadTypeBuffer.length + documentBuffer.length + sequencesBuffer.length;
    }
    /**
     * Extracts the document sequences from the command document and returns
     * a buffer to be added as multiple sections after the initial type 0
     * section in the message.
     */
    extractDocumentSequences(document2) {
      const chunks = [];
      for (const [key, value] of Object.entries(document2)) {
        if (value instanceof DocumentSequence) {
          chunks.push(value.toBin());
          delete document2[key];
        }
      }
      if (chunks.length > 0) {
        return bson_1.ByteUtils.concat(chunks);
      }
      return bson_1.ByteUtils.allocate(0);
    }
    serializeBson(document2) {
      return bson_1.BSON.serialize(document2, {
        checkKeys: this.checkKeys,
        serializeFunctions: this.serializeFunctions,
        ignoreUndefined: this.ignoreUndefined
      });
    }
    static getRequestId() {
      _requestId = _requestId + 1 & 2147483647;
      return _requestId;
    }
  }
  commands.OpMsgRequest = OpMsgRequest;
  class OpMsgResponse {
    constructor(message, msgHeader, msgBody, opts) {
      this.index = 0;
      this.sections = [];
      this.parsed = false;
      this.raw = message;
      this.data = msgBody;
      this.opts = opts ?? {
        useBigInt64: false,
        promoteLongs: true,
        promoteValues: true,
        promoteBuffers: false,
        bsonRegExp: false
      };
      this.length = msgHeader.length;
      this.requestId = msgHeader.requestId;
      this.responseTo = msgHeader.responseTo;
      this.opCode = msgHeader.opCode;
      this.fromCompressed = msgHeader.fromCompressed;
      this.responseFlags = (0, bson_1.readInt32LE)(msgBody, 0);
      this.checksumPresent = (this.responseFlags & OPTS_CHECKSUM_PRESENT) !== 0;
      this.moreToCome = (this.responseFlags & OPTS_MORE_TO_COME) !== 0;
      this.exhaustAllowed = (this.responseFlags & OPTS_EXHAUST_ALLOWED) !== 0;
      this.useBigInt64 = typeof this.opts.useBigInt64 === "boolean" ? this.opts.useBigInt64 : false;
      this.promoteLongs = typeof this.opts.promoteLongs === "boolean" ? this.opts.promoteLongs : true;
      this.promoteValues = typeof this.opts.promoteValues === "boolean" ? this.opts.promoteValues : true;
      this.promoteBuffers = typeof this.opts.promoteBuffers === "boolean" ? this.opts.promoteBuffers : false;
      this.bsonRegExp = typeof this.opts.bsonRegExp === "boolean" ? this.opts.bsonRegExp : false;
    }
    isParsed() {
      return this.parsed;
    }
    parse() {
      if (this.parsed)
        return this.sections[0];
      this.index = 4;
      while (this.index < this.data.length) {
        const payloadType = this.data[this.index++];
        if (payloadType === 0) {
          const bsonSize = (0, bson_1.readInt32LE)(this.data, this.index);
          const bin = this.data.subarray(this.index, this.index + bsonSize);
          this.sections.push(bin);
          this.index += bsonSize;
        } else if (payloadType === 1) {
          throw new error_1.MongoRuntimeError("OP_MSG Payload Type 1 detected unsupported protocol");
        }
      }
      this.parsed = true;
      return this.sections[0];
    }
  }
  commands.OpMsgResponse = OpMsgResponse;
  const MESSAGE_HEADER_SIZE = 16;
  const COMPRESSION_DETAILS_SIZE = 9;
  class OpCompressedRequest {
    constructor(command2, options) {
      this.command = command2;
      this.options = {
        zlibCompressionLevel: options.zlibCompressionLevel,
        agreedCompressor: options.agreedCompressor
      };
    }
    // Return whether a command contains an uncompressible command term
    // Will return true if command contains no uncompressible command terms
    static canCompress(command2) {
      const commandDoc = command2 instanceof OpMsgRequest ? command2.command : command2.query;
      const commandName = Object.keys(commandDoc)[0];
      return !compression_1.uncompressibleCommands.has(commandName);
    }
    async toBin() {
      const concatenatedOriginalCommandBuffer = bson_1.ByteUtils.concat(this.command.toBin());
      const messageToBeCompressed = concatenatedOriginalCommandBuffer.slice(MESSAGE_HEADER_SIZE);
      const originalCommandOpCode = (0, bson_1.readInt32LE)(concatenatedOriginalCommandBuffer, 12);
      const compressedMessage = await (0, compression_1.compress)(this.options, messageToBeCompressed);
      const msgHeader = bson_1.ByteUtils.allocate(MESSAGE_HEADER_SIZE);
      bson_1.NumberUtils.setInt32LE(msgHeader, 0, MESSAGE_HEADER_SIZE + COMPRESSION_DETAILS_SIZE + compressedMessage.length);
      bson_1.NumberUtils.setInt32LE(msgHeader, 4, this.command.requestId);
      bson_1.NumberUtils.setInt32LE(msgHeader, 8, 0);
      bson_1.NumberUtils.setInt32LE(msgHeader, 12, constants_1.OP_COMPRESSED);
      const compressionDetails = bson_1.ByteUtils.allocate(COMPRESSION_DETAILS_SIZE);
      bson_1.NumberUtils.setInt32LE(compressionDetails, 0, originalCommandOpCode);
      bson_1.NumberUtils.setInt32LE(compressionDetails, 4, messageToBeCompressed.length);
      compressionDetails[8] = compression_1.Compressor[this.options.agreedCompressor];
      return [msgHeader, compressionDetails, compressedMessage];
    }
  }
  commands.OpCompressedRequest = OpCompressedRequest;
  return commands;
}
var hasRequiredCompression;
function requireCompression() {
  if (hasRequiredCompression) return compression;
  hasRequiredCompression = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.uncompressibleCommands = exports.Compressor = void 0;
    exports.compress = compress;
    exports.decompress = decompress;
    exports.compressCommand = compressCommand;
    exports.decompressResponse = decompressResponse;
    const zlib = require$$0$7;
    const bson_1 = requireBson();
    const constants_1 = requireConstants();
    const deps_1 = requireDeps();
    const error_1 = requireError();
    const commands_1 = requireCommands();
    const constants_2 = requireConstants$1();
    exports.Compressor = Object.freeze({
      none: 0,
      snappy: 1,
      zlib: 2,
      zstd: 3
    });
    exports.uncompressibleCommands = /* @__PURE__ */ new Set([
      constants_1.LEGACY_HELLO_COMMAND,
      "saslStart",
      "saslContinue",
      "getnonce",
      "authenticate",
      "createUser",
      "updateUser",
      "copydbSaslStart",
      "copydbgetnonce",
      "copydb"
    ]);
    const ZSTD_COMPRESSION_LEVEL = 3;
    const zlibInflate = (buf) => {
      return new Promise((resolve, reject) => {
        zlib.inflate(buf, (error2, result) => {
          if (error2)
            return reject(error2);
          resolve(result);
        });
      });
    };
    const zlibDeflate = (buf, options) => {
      return new Promise((resolve, reject) => {
        zlib.deflate(buf, options, (error2, result) => {
          if (error2)
            return reject(error2);
          resolve(result);
        });
      });
    };
    let zstd;
    let Snappy = null;
    function loadSnappy() {
      if (Snappy == null) {
        const snappyImport = (0, deps_1.getSnappy)();
        if ("kModuleError" in snappyImport) {
          throw snappyImport.kModuleError;
        }
        Snappy = snappyImport;
      }
      return Snappy;
    }
    async function compress(options, dataToBeCompressed) {
      const zlibOptions = {};
      switch (options.agreedCompressor) {
        case "snappy": {
          Snappy ??= loadSnappy();
          return await Snappy.compress(dataToBeCompressed);
        }
        case "zstd": {
          loadZstd();
          if ("kModuleError" in zstd) {
            throw zstd["kModuleError"];
          }
          return await zstd.compress(dataToBeCompressed, ZSTD_COMPRESSION_LEVEL);
        }
        case "zlib": {
          if (options.zlibCompressionLevel) {
            zlibOptions.level = options.zlibCompressionLevel;
          }
          return await zlibDeflate(dataToBeCompressed, zlibOptions);
        }
        default: {
          throw new error_1.MongoInvalidArgumentError(`Unknown compressor ${options.agreedCompressor} failed to compress`);
        }
      }
    }
    async function decompress(compressorID, compressedData) {
      if (compressorID !== exports.Compressor.snappy && compressorID !== exports.Compressor.zstd && compressorID !== exports.Compressor.zlib && compressorID !== exports.Compressor.none) {
        throw new error_1.MongoDecompressionError(`Server sent message compressed using an unsupported compressor. (Received compressor ID ${compressorID})`);
      }
      switch (compressorID) {
        case exports.Compressor.snappy: {
          Snappy ??= loadSnappy();
          return await Snappy.uncompress(compressedData, { asBuffer: true });
        }
        case exports.Compressor.zstd: {
          loadZstd();
          if ("kModuleError" in zstd) {
            throw zstd["kModuleError"];
          }
          return await zstd.decompress(compressedData);
        }
        case exports.Compressor.zlib: {
          return await zlibInflate(compressedData);
        }
        default: {
          return compressedData;
        }
      }
    }
    function loadZstd() {
      if (!zstd) {
        zstd = (0, deps_1.getZstdLibrary)();
      }
    }
    const MESSAGE_HEADER_SIZE = 16;
    async function compressCommand(command2, description) {
      const finalCommand = description.agreedCompressor === "none" || !commands_1.OpCompressedRequest.canCompress(command2) ? command2 : new commands_1.OpCompressedRequest(command2, {
        agreedCompressor: description.agreedCompressor ?? "none",
        zlibCompressionLevel: description.zlibCompressionLevel ?? 0
      });
      const data = await finalCommand.toBin();
      return bson_1.ByteUtils.concat(data);
    }
    async function decompressResponse(message) {
      const messageHeader = {
        length: (0, bson_1.readInt32LE)(message, 0),
        requestId: (0, bson_1.readInt32LE)(message, 4),
        responseTo: (0, bson_1.readInt32LE)(message, 8),
        opCode: (0, bson_1.readInt32LE)(message, 12)
      };
      if (messageHeader.opCode !== constants_2.OP_COMPRESSED) {
        const ResponseType2 = messageHeader.opCode === constants_2.OP_MSG ? commands_1.OpMsgResponse : commands_1.OpReply;
        const messageBody2 = message.subarray(MESSAGE_HEADER_SIZE);
        return new ResponseType2(message, messageHeader, messageBody2);
      }
      const header = {
        ...messageHeader,
        fromCompressed: true,
        opCode: (0, bson_1.readInt32LE)(message, MESSAGE_HEADER_SIZE),
        length: (0, bson_1.readInt32LE)(message, MESSAGE_HEADER_SIZE + 4)
      };
      const compressorID = message[MESSAGE_HEADER_SIZE + 8];
      const compressedBuffer = message.slice(MESSAGE_HEADER_SIZE + 9);
      const ResponseType = header.opCode === constants_2.OP_MSG ? commands_1.OpMsgResponse : commands_1.OpReply;
      const messageBody = await decompress(compressorID, compressedBuffer);
      if (messageBody.length !== header.length) {
        throw new error_1.MongoDecompressionError("Message body and message header must be the same length");
      }
      return new ResponseType(message, header, messageBody);
    }
  })(compression);
  return compression;
}
var encrypter = {};
var auto_encrypter = {};
var client_encryption = {};
var errors$1 = {};
var hasRequiredErrors$1;
function requireErrors$1() {
  if (hasRequiredErrors$1) return errors$1;
  hasRequiredErrors$1 = 1;
  Object.defineProperty(errors$1, "__esModule", { value: true });
  errors$1.MongoCryptKMSRequestNetworkTimeoutError = errors$1.MongoCryptAzureKMSRequestError = errors$1.MongoCryptCreateEncryptedCollectionError = errors$1.MongoCryptCreateDataKeyError = errors$1.MongoCryptInvalidArgumentError = errors$1.defaultErrorWrapper = errors$1.MongoCryptError = void 0;
  const error_1 = requireError();
  class MongoCryptError extends error_1.MongoError {
    /**
     * **Do not use this constructor!**
     *
     * Meant for internal use only.
     *
     * @remarks
     * This class is only meant to be constructed within the driver. This constructor is
     * not subject to semantic versioning compatibility guarantees and may change at any time.
     *
     * @public
     **/
    constructor(message, options = {}) {
      super(message, options);
    }
    get name() {
      return "MongoCryptError";
    }
  }
  errors$1.MongoCryptError = MongoCryptError;
  const defaultErrorWrapper = (error2) => new MongoCryptError(error2.message, { cause: error2 });
  errors$1.defaultErrorWrapper = defaultErrorWrapper;
  class MongoCryptInvalidArgumentError extends MongoCryptError {
    /**
     * **Do not use this constructor!**
     *
     * Meant for internal use only.
     *
     * @remarks
     * This class is only meant to be constructed within the driver. This constructor is
     * not subject to semantic versioning compatibility guarantees and may change at any time.
     *
     * @public
     **/
    constructor(message) {
      super(message);
    }
    get name() {
      return "MongoCryptInvalidArgumentError";
    }
  }
  errors$1.MongoCryptInvalidArgumentError = MongoCryptInvalidArgumentError;
  class MongoCryptCreateDataKeyError extends MongoCryptError {
    /**
     * **Do not use this constructor!**
     *
     * Meant for internal use only.
     *
     * @remarks
     * This class is only meant to be constructed within the driver. This constructor is
     * not subject to semantic versioning compatibility guarantees and may change at any time.
     *
     * @public
     **/
    constructor(encryptedFields, { cause }) {
      super(`Unable to complete creating data keys: ${cause.message}`, { cause });
      this.encryptedFields = encryptedFields;
    }
    get name() {
      return "MongoCryptCreateDataKeyError";
    }
  }
  errors$1.MongoCryptCreateDataKeyError = MongoCryptCreateDataKeyError;
  class MongoCryptCreateEncryptedCollectionError extends MongoCryptError {
    /**
     * **Do not use this constructor!**
     *
     * Meant for internal use only.
     *
     * @remarks
     * This class is only meant to be constructed within the driver. This constructor is
     * not subject to semantic versioning compatibility guarantees and may change at any time.
     *
     * @public
     **/
    constructor(encryptedFields, { cause }) {
      super(`Unable to create collection: ${cause.message}`, { cause });
      this.encryptedFields = encryptedFields;
    }
    get name() {
      return "MongoCryptCreateEncryptedCollectionError";
    }
  }
  errors$1.MongoCryptCreateEncryptedCollectionError = MongoCryptCreateEncryptedCollectionError;
  class MongoCryptAzureKMSRequestError extends MongoCryptError {
    /**
     * **Do not use this constructor!**
     *
     * Meant for internal use only.
     *
     * @remarks
     * This class is only meant to be constructed within the driver. This constructor is
     * not subject to semantic versioning compatibility guarantees and may change at any time.
     *
     * @public
     **/
    constructor(message, body) {
      super(message);
      this.body = body;
    }
    get name() {
      return "MongoCryptAzureKMSRequestError";
    }
  }
  errors$1.MongoCryptAzureKMSRequestError = MongoCryptAzureKMSRequestError;
  class MongoCryptKMSRequestNetworkTimeoutError extends MongoCryptError {
    get name() {
      return "MongoCryptKMSRequestNetworkTimeoutError";
    }
  }
  errors$1.MongoCryptKMSRequestNetworkTimeoutError = MongoCryptKMSRequestNetworkTimeoutError;
  return errors$1;
}
var providers = {};
var aws = {};
var aws_temporary_credentials = {};
var hasRequiredAws_temporary_credentials;
function requireAws_temporary_credentials() {
  if (hasRequiredAws_temporary_credentials) return aws_temporary_credentials;
  hasRequiredAws_temporary_credentials = 1;
  Object.defineProperty(aws_temporary_credentials, "__esModule", { value: true });
  aws_temporary_credentials.AWSSDKCredentialProvider = void 0;
  const process = require$$0;
  const deps_1 = requireDeps();
  const error_1 = requireError();
  class AWSSDKCredentialProvider {
    /**
     * Create the SDK credentials provider.
     * @param credentialsProvider - The credentials provider.
     */
    constructor(credentialsProvider) {
      if (credentialsProvider) {
        this._provider = credentialsProvider;
      }
    }
    static get awsSDK() {
      AWSSDKCredentialProvider._awsSDK ??= (0, deps_1.getAwsCredentialProvider)();
      return AWSSDKCredentialProvider._awsSDK;
    }
    /**
     * The AWS SDK caches credentials automatically and handles refresh when the credentials have expired.
     * To ensure this occurs, we need to cache the `provider` returned by the AWS sdk and re-use it when fetching credentials.
     */
    get provider() {
      if ("kModuleError" in AWSSDKCredentialProvider.awsSDK) {
        throw AWSSDKCredentialProvider.awsSDK.kModuleError;
      }
      if (this._provider) {
        return this._provider;
      }
      let { AWS_STS_REGIONAL_ENDPOINTS = "", AWS_REGION = "" } = process.env;
      AWS_STS_REGIONAL_ENDPOINTS = AWS_STS_REGIONAL_ENDPOINTS.toLowerCase();
      AWS_REGION = AWS_REGION.toLowerCase();
      const awsRegionSettingsExist = AWS_REGION.length !== 0 && AWS_STS_REGIONAL_ENDPOINTS.length !== 0;
      const LEGACY_REGIONS = /* @__PURE__ */ new Set([
        "ap-northeast-1",
        "ap-south-1",
        "ap-southeast-1",
        "ap-southeast-2",
        "aws-global",
        "ca-central-1",
        "eu-central-1",
        "eu-north-1",
        "eu-west-1",
        "eu-west-2",
        "eu-west-3",
        "sa-east-1",
        "us-east-1",
        "us-east-2",
        "us-west-1",
        "us-west-2"
      ]);
      const useRegionalSts = AWS_STS_REGIONAL_ENDPOINTS === "regional" || AWS_STS_REGIONAL_ENDPOINTS === "legacy" && !LEGACY_REGIONS.has(AWS_REGION);
      this._provider = awsRegionSettingsExist && useRegionalSts ? AWSSDKCredentialProvider.awsSDK.fromNodeProviderChain({
        clientConfig: { region: AWS_REGION }
      }) : AWSSDKCredentialProvider.awsSDK.fromNodeProviderChain();
      return this._provider;
    }
    async getCredentials() {
      try {
        const creds = await this.provider();
        return {
          AccessKeyId: creds.accessKeyId,
          SecretAccessKey: creds.secretAccessKey,
          Token: creds.sessionToken,
          Expiration: creds.expiration
        };
      } catch (error2) {
        throw new error_1.MongoAWSError(error2.message, { cause: error2 });
      }
    }
  }
  aws_temporary_credentials.AWSSDKCredentialProvider = AWSSDKCredentialProvider;
  return aws_temporary_credentials;
}
var hasRequiredAws;
function requireAws() {
  if (hasRequiredAws) return aws;
  hasRequiredAws = 1;
  Object.defineProperty(aws, "__esModule", { value: true });
  aws.loadAWSCredentials = loadAWSCredentials;
  const aws_temporary_credentials_1 = requireAws_temporary_credentials();
  async function loadAWSCredentials(kmsProviders, provider) {
    const credentialProvider = new aws_temporary_credentials_1.AWSSDKCredentialProvider(provider);
    const { SecretAccessKey = "", AccessKeyId = "", Token } = await credentialProvider.getCredentials();
    const aws2 = {
      secretAccessKey: SecretAccessKey,
      accessKeyId: AccessKeyId
    };
    Token != null && (aws2.sessionToken = Token);
    return { ...kmsProviders, aws: aws2 };
  }
  return aws;
}
var azure = {};
var hasRequiredAzure;
function requireAzure() {
  if (hasRequiredAzure) return azure;
  hasRequiredAzure = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.tokenCache = exports.AzureCredentialCache = exports.AZURE_BASE_URL = void 0;
    exports.addAzureParams = addAzureParams;
    exports.prepareRequest = prepareRequest;
    exports.fetchAzureKMSToken = fetchAzureKMSToken;
    exports.loadAzureCredentials = loadAzureCredentials;
    const error_1 = requireError();
    const utils_1 = requireUtils();
    const errors_1 = requireErrors$1();
    const MINIMUM_TOKEN_REFRESH_IN_MILLISECONDS = 6e3;
    exports.AZURE_BASE_URL = "http://169.254.169.254/metadata/identity/oauth2/token?";
    class AzureCredentialCache {
      constructor() {
        this.cachedToken = null;
      }
      async getToken() {
        if (this.cachedToken == null || this.needsRefresh(this.cachedToken)) {
          this.cachedToken = await this._getToken();
        }
        return { accessToken: this.cachedToken.accessToken };
      }
      needsRefresh(token) {
        const timeUntilExpirationMS = token.expiresOnTimestamp - Date.now();
        return timeUntilExpirationMS <= MINIMUM_TOKEN_REFRESH_IN_MILLISECONDS;
      }
      /**
       * exposed for testing
       */
      resetCache() {
        this.cachedToken = null;
      }
      /**
       * exposed for testing
       */
      _getToken() {
        return fetchAzureKMSToken();
      }
    }
    exports.AzureCredentialCache = AzureCredentialCache;
    exports.tokenCache = new AzureCredentialCache();
    async function parseResponse(response) {
      const { status, body: rawBody } = response;
      const body = (() => {
        try {
          return JSON.parse(rawBody);
        } catch {
          throw new errors_1.MongoCryptAzureKMSRequestError("Malformed JSON body in GET request.");
        }
      })();
      if (status !== 200) {
        throw new errors_1.MongoCryptAzureKMSRequestError("Unable to complete request.", body);
      }
      if (!body.access_token) {
        throw new errors_1.MongoCryptAzureKMSRequestError("Malformed response body - missing field `access_token`.");
      }
      if (!body.expires_in) {
        throw new errors_1.MongoCryptAzureKMSRequestError("Malformed response body - missing field `expires_in`.");
      }
      const expiresInMS = Number(body.expires_in) * 1e3;
      if (Number.isNaN(expiresInMS)) {
        throw new errors_1.MongoCryptAzureKMSRequestError("Malformed response body - unable to parse int from `expires_in` field.");
      }
      return {
        accessToken: body.access_token,
        expiresOnTimestamp: Date.now() + expiresInMS
      };
    }
    function addAzureParams(url, resource, username) {
      url.searchParams.append("api-version", "2018-02-01");
      url.searchParams.append("resource", resource);
      if (username) {
        url.searchParams.append("client_id", username);
      }
      return url;
    }
    function prepareRequest(options) {
      const url = new URL(options.url?.toString() ?? exports.AZURE_BASE_URL);
      addAzureParams(url, "https://vault.azure.net");
      const headers = { ...options.headers, "Content-Type": "application/json", Metadata: true };
      return { headers, url };
    }
    async function fetchAzureKMSToken(options = {}) {
      const { headers, url } = prepareRequest(options);
      try {
        const response = await (0, utils_1.get)(url, { headers });
        return await parseResponse(response);
      } catch (error2) {
        if (error2 instanceof error_1.MongoNetworkTimeoutError) {
          throw new errors_1.MongoCryptAzureKMSRequestError(`[Azure KMS] ${error2.message}`);
        }
        throw error2;
      }
    }
    async function loadAzureCredentials(kmsProviders) {
      const azure2 = await exports.tokenCache.getToken();
      return { ...kmsProviders, azure: azure2 };
    }
  })(azure);
  return azure;
}
var gcp = {};
var hasRequiredGcp;
function requireGcp() {
  if (hasRequiredGcp) return gcp;
  hasRequiredGcp = 1;
  Object.defineProperty(gcp, "__esModule", { value: true });
  gcp.loadGCPCredentials = loadGCPCredentials;
  const deps_1 = requireDeps();
  async function loadGCPCredentials(kmsProviders) {
    const gcpMetadata = (0, deps_1.getGcpMetadata)();
    if ("kModuleError" in gcpMetadata) {
      return kmsProviders;
    }
    const { access_token: accessToken } = await gcpMetadata.instance({
      property: "service-accounts/default/token"
    });
    return { ...kmsProviders, gcp: { accessToken } };
  }
  return gcp;
}
var hasRequiredProviders;
function requireProviders() {
  if (hasRequiredProviders) return providers;
  hasRequiredProviders = 1;
  Object.defineProperty(providers, "__esModule", { value: true });
  providers.isEmptyCredentials = isEmptyCredentials;
  providers.refreshKMSCredentials = refreshKMSCredentials;
  const aws_1 = requireAws();
  const azure_1 = requireAzure();
  const gcp_1 = requireGcp();
  function isEmptyCredentials(providerName, kmsProviders) {
    const provider = kmsProviders[providerName];
    if (provider == null) {
      return false;
    }
    return typeof provider === "object" && Object.keys(provider).length === 0;
  }
  async function refreshKMSCredentials(kmsProviders, credentialProviders) {
    let finalKMSProviders = kmsProviders;
    if (isEmptyCredentials("aws", kmsProviders)) {
      finalKMSProviders = await (0, aws_1.loadAWSCredentials)(finalKMSProviders, credentialProviders?.aws);
    }
    if (isEmptyCredentials("gcp", kmsProviders)) {
      finalKMSProviders = await (0, gcp_1.loadGCPCredentials)(finalKMSProviders);
    }
    if (isEmptyCredentials("azure", kmsProviders)) {
      finalKMSProviders = await (0, azure_1.loadAzureCredentials)(finalKMSProviders);
    }
    return finalKMSProviders;
  }
  return providers;
}
var state_machine = {};
var hasRequiredState_machine;
function requireState_machine() {
  if (hasRequiredState_machine) return state_machine;
  hasRequiredState_machine = 1;
  Object.defineProperty(state_machine, "__esModule", { value: true });
  state_machine.StateMachine = void 0;
  const fs = require$$0$9;
  const net = require$$0$8;
  const process = require$$0;
  const tls = require$$3$1;
  const bson_1 = requireBson();
  const abstract_cursor_1 = requireAbstract_cursor();
  const deps_1 = requireDeps();
  const error_1 = requireError();
  const timeout_1 = requireTimeout();
  const utils_1 = requireUtils();
  const client_encryption_1 = requireClient_encryption();
  const errors_1 = requireErrors$1();
  let socks = null;
  function loadSocks() {
    if (socks == null) {
      const socksImport = (0, deps_1.getSocks)();
      if ("kModuleError" in socksImport) {
        throw socksImport.kModuleError;
      }
      socks = socksImport;
    }
    return socks;
  }
  const MONGOCRYPT_CTX_ERROR = 0;
  const MONGOCRYPT_CTX_NEED_MONGO_COLLINFO = 1;
  const MONGOCRYPT_CTX_NEED_MONGO_MARKINGS = 2;
  const MONGOCRYPT_CTX_NEED_MONGO_KEYS = 3;
  const MONGOCRYPT_CTX_NEED_KMS_CREDENTIALS = 7;
  const MONGOCRYPT_CTX_NEED_KMS = 4;
  const MONGOCRYPT_CTX_READY = 5;
  const MONGOCRYPT_CTX_DONE = 6;
  const HTTPS_PORT = 443;
  const stateToString = /* @__PURE__ */ new Map([
    [MONGOCRYPT_CTX_ERROR, "MONGOCRYPT_CTX_ERROR"],
    [MONGOCRYPT_CTX_NEED_MONGO_COLLINFO, "MONGOCRYPT_CTX_NEED_MONGO_COLLINFO"],
    [MONGOCRYPT_CTX_NEED_MONGO_MARKINGS, "MONGOCRYPT_CTX_NEED_MONGO_MARKINGS"],
    [MONGOCRYPT_CTX_NEED_MONGO_KEYS, "MONGOCRYPT_CTX_NEED_MONGO_KEYS"],
    [MONGOCRYPT_CTX_NEED_KMS_CREDENTIALS, "MONGOCRYPT_CTX_NEED_KMS_CREDENTIALS"],
    [MONGOCRYPT_CTX_NEED_KMS, "MONGOCRYPT_CTX_NEED_KMS"],
    [MONGOCRYPT_CTX_READY, "MONGOCRYPT_CTX_READY"],
    [MONGOCRYPT_CTX_DONE, "MONGOCRYPT_CTX_DONE"]
  ]);
  const INSECURE_TLS_OPTIONS = [
    "tlsInsecure",
    "tlsAllowInvalidCertificates",
    "tlsAllowInvalidHostnames"
  ];
  function debug(msg) {
    if (process.env.MONGODB_CRYPT_DEBUG) {
      console.error(msg);
    }
  }
  let EMPTY_V;
  class StateMachine {
    constructor(options, bsonOptions = (0, bson_1.pluckBSONSerializeOptions)(options)) {
      this.options = options;
      this.bsonOptions = bsonOptions;
    }
    /**
     * Executes the state machine according to the specification
     */
    async execute(executor2, context, options) {
      const keyVaultNamespace = executor2._keyVaultNamespace;
      const keyVaultClient = executor2._keyVaultClient;
      const metaDataClient = executor2._metaDataClient;
      const mongocryptdClient = executor2._mongocryptdClient;
      const mongocryptdManager = executor2._mongocryptdManager;
      let result = null;
      const getStatus = () => context.status;
      const getState = () => context.state;
      while (getState() !== MONGOCRYPT_CTX_DONE && getState() !== MONGOCRYPT_CTX_ERROR) {
        options.signal?.throwIfAborted();
        debug(`[context#${context.id}] ${stateToString.get(getState()) || getState()}`);
        switch (getState()) {
          case MONGOCRYPT_CTX_NEED_MONGO_COLLINFO: {
            const filter = (0, bson_1.deserialize)(context.nextMongoOperation());
            if (!metaDataClient) {
              throw new errors_1.MongoCryptError("unreachable state machine state: entered MONGOCRYPT_CTX_NEED_MONGO_COLLINFO but metadata client is undefined");
            }
            const collInfoCursor = this.fetchCollectionInfo(metaDataClient, context.ns, filter, options);
            for await (const collInfo of collInfoCursor) {
              context.addMongoOperationResponse((0, bson_1.serialize)(collInfo));
              if (getState() === MONGOCRYPT_CTX_ERROR)
                break;
            }
            if (getState() === MONGOCRYPT_CTX_ERROR)
              break;
            context.finishMongoOperation();
            break;
          }
          case MONGOCRYPT_CTX_NEED_MONGO_MARKINGS: {
            const command2 = context.nextMongoOperation();
            if (getState() === MONGOCRYPT_CTX_ERROR)
              break;
            if (!mongocryptdClient) {
              throw new errors_1.MongoCryptError("unreachable state machine state: entered MONGOCRYPT_CTX_NEED_MONGO_MARKINGS but mongocryptdClient is undefined");
            }
            const markedCommand = mongocryptdManager ? await mongocryptdManager.withRespawn(this.markCommand.bind(this, mongocryptdClient, context.ns, command2, options)) : await this.markCommand(mongocryptdClient, context.ns, command2, options);
            context.addMongoOperationResponse(markedCommand);
            context.finishMongoOperation();
            break;
          }
          case MONGOCRYPT_CTX_NEED_MONGO_KEYS: {
            const filter = context.nextMongoOperation();
            const keys = await this.fetchKeys(keyVaultClient, keyVaultNamespace, filter, options);
            if (keys.length === 0) {
              result = EMPTY_V ??= (0, bson_1.serialize)({ v: [] });
            }
            for (const key of keys) {
              context.addMongoOperationResponse((0, bson_1.serialize)(key));
            }
            context.finishMongoOperation();
            break;
          }
          case MONGOCRYPT_CTX_NEED_KMS_CREDENTIALS: {
            const kmsProviders = await executor2.askForKMSCredentials();
            context.provideKMSProviders((0, bson_1.serialize)(kmsProviders));
            break;
          }
          case MONGOCRYPT_CTX_NEED_KMS: {
            await Promise.all(this.requests(context, options));
            context.finishKMSRequests();
            break;
          }
          case MONGOCRYPT_CTX_READY: {
            const finalizedContext = context.finalize();
            if (getState() === MONGOCRYPT_CTX_ERROR) {
              const message = getStatus().message || "Finalization error";
              throw new errors_1.MongoCryptError(message);
            }
            result = finalizedContext;
            break;
          }
          default:
            throw new errors_1.MongoCryptError(`Unknown state: ${getState()}`);
        }
      }
      if (getState() === MONGOCRYPT_CTX_ERROR || result == null) {
        const message = getStatus().message;
        if (!message) {
          debug(`unidentifiable error in MongoCrypt - received an error status from \`libmongocrypt\` but received no error message.`);
        }
        throw new errors_1.MongoCryptError(message ?? "unidentifiable error in MongoCrypt - received an error status from `libmongocrypt` but received no error message.");
      }
      return result;
    }
    /**
     * Handles the request to the KMS service. Exposed for testing purposes. Do not directly invoke.
     * @param kmsContext - A C++ KMS context returned from the bindings
     * @returns A promise that resolves when the KMS reply has be fully parsed
     */
    async kmsRequest(request, options) {
      const parsedUrl = request.endpoint.split(":");
      const port = parsedUrl[1] != null ? Number.parseInt(parsedUrl[1], 10) : HTTPS_PORT;
      const socketOptions = {
        host: parsedUrl[0],
        servername: parsedUrl[0],
        port,
        ...(0, client_encryption_1.autoSelectSocketOptions)(this.options.socketOptions || {})
      };
      const message = request.message;
      const buffer = new utils_1.BufferPool();
      let netSocket;
      let socket;
      function destroySockets() {
        for (const sock of [socket, netSocket]) {
          if (sock) {
            sock.destroy();
          }
        }
      }
      function onerror(cause) {
        return new errors_1.MongoCryptError("KMS request failed", { cause });
      }
      function onclose() {
        return new errors_1.MongoCryptError("KMS request closed");
      }
      const tlsOptions = this.options.tlsOptions;
      if (tlsOptions) {
        const kmsProvider = request.kmsProvider;
        const providerTlsOptions = tlsOptions[kmsProvider];
        if (providerTlsOptions) {
          const error2 = this.validateTlsOptions(kmsProvider, providerTlsOptions);
          if (error2) {
            throw error2;
          }
          try {
            await this.setTlsOptions(providerTlsOptions, socketOptions);
          } catch (err) {
            throw onerror(err);
          }
        }
      }
      let abortListener;
      try {
        if (this.options.proxyOptions && this.options.proxyOptions.proxyHost) {
          netSocket = new net.Socket();
          const { promise: willConnect, reject: rejectOnNetSocketError, resolve: resolveOnNetSocketConnect } = (0, utils_1.promiseWithResolvers)();
          netSocket.once("error", (err) => rejectOnNetSocketError(onerror(err))).once("close", () => rejectOnNetSocketError(onclose())).once("connect", () => resolveOnNetSocketConnect());
          const netSocketOptions = {
            ...socketOptions,
            host: this.options.proxyOptions.proxyHost,
            port: this.options.proxyOptions.proxyPort || 1080
          };
          netSocket.connect(netSocketOptions);
          await willConnect;
          try {
            socks ??= loadSocks();
            socketOptions.socket = (await socks.SocksClient.createConnection({
              existing_socket: netSocket,
              command: "connect",
              destination: { host: socketOptions.host, port: socketOptions.port },
              proxy: {
                // host and port are ignored because we pass existing_socket
                host: "iLoveJavaScript",
                port: 0,
                type: 5,
                userId: this.options.proxyOptions.proxyUsername,
                password: this.options.proxyOptions.proxyPassword
              }
            })).socket;
          } catch (err) {
            throw onerror(err);
          }
        }
        socket = tls.connect(socketOptions, () => {
          socket.write(message);
        });
        const { promise: willResolveKmsRequest, reject: rejectOnTlsSocketError, resolve } = (0, utils_1.promiseWithResolvers)();
        abortListener = (0, utils_1.addAbortListener)(options?.signal, function() {
          destroySockets();
          rejectOnTlsSocketError(this.reason);
        });
        socket.once("error", (err) => rejectOnTlsSocketError(onerror(err))).once("close", () => rejectOnTlsSocketError(onclose())).on("data", (data) => {
          buffer.append(data);
          while (request.bytesNeeded > 0 && buffer.length) {
            const bytesNeeded = Math.min(request.bytesNeeded, buffer.length);
            request.addResponse(buffer.read(bytesNeeded));
          }
          if (request.bytesNeeded <= 0) {
            resolve();
          }
        });
        await (options?.timeoutContext?.csotEnabled() ? Promise.all([
          willResolveKmsRequest,
          timeout_1.Timeout.expires(options.timeoutContext?.remainingTimeMS)
        ]) : willResolveKmsRequest);
      } catch (error2) {
        if (error2 instanceof timeout_1.TimeoutError)
          throw new error_1.MongoOperationTimeoutError("KMS request timed out");
        throw error2;
      } finally {
        destroySockets();
        abortListener?.[utils_1.kDispose]();
      }
    }
    *requests(context, options) {
      for (let request = context.nextKMSRequest(); request != null; request = context.nextKMSRequest()) {
        yield this.kmsRequest(request, options);
      }
    }
    /**
     * Validates the provided TLS options are secure.
     *
     * @param kmsProvider - The KMS provider name.
     * @param tlsOptions - The client TLS options for the provider.
     *
     * @returns An error if any option is invalid.
     */
    validateTlsOptions(kmsProvider, tlsOptions) {
      const tlsOptionNames = Object.keys(tlsOptions);
      for (const option of INSECURE_TLS_OPTIONS) {
        if (tlsOptionNames.includes(option)) {
          return new errors_1.MongoCryptError(`Insecure TLS options prohibited for ${kmsProvider}: ${option}`);
        }
      }
    }
    /**
     * Sets only the valid secure TLS options.
     *
     * @param tlsOptions - The client TLS options for the provider.
     * @param options - The existing connection options.
     */
    async setTlsOptions(tlsOptions, options) {
      if (tlsOptions.secureContext) {
        options.secureContext = tlsOptions.secureContext;
      }
      if (tlsOptions.tlsCertificateKeyFile) {
        const cert = await fs.readFile(tlsOptions.tlsCertificateKeyFile);
        options.cert = options.key = cert;
      }
      if (tlsOptions.tlsCAFile) {
        options.ca = await fs.readFile(tlsOptions.tlsCAFile);
      }
      if (tlsOptions.tlsCertificateKeyFilePassword) {
        options.passphrase = tlsOptions.tlsCertificateKeyFilePassword;
      }
    }
    /**
     * Fetches collection info for a provided namespace, when libmongocrypt
     * enters the `MONGOCRYPT_CTX_NEED_MONGO_COLLINFO` state. The result is
     * used to inform libmongocrypt of the schema associated with this
     * namespace. Exposed for testing purposes. Do not directly invoke.
     *
     * @param client - A MongoClient connected to the topology
     * @param ns - The namespace to list collections from
     * @param filter - A filter for the listCollections command
     * @param callback - Invoked with the info of the requested collection, or with an error
     */
    fetchCollectionInfo(client, ns, filter, options) {
      const { db: db2 } = utils_1.MongoDBCollectionNamespace.fromString(ns);
      const cursor = client.db(db2).listCollections(filter, {
        promoteLongs: false,
        promoteValues: false,
        timeoutContext: options?.timeoutContext && new abstract_cursor_1.CursorTimeoutContext(options?.timeoutContext, /* @__PURE__ */ Symbol()),
        signal: options?.signal,
        nameOnly: false
      });
      return cursor;
    }
    /**
     * Calls to the mongocryptd to provide markings for a command.
     * Exposed for testing purposes. Do not directly invoke.
     * @param client - A MongoClient connected to a mongocryptd
     * @param ns - The namespace (database.collection) the command is being executed on
     * @param command - The command to execute.
     * @param callback - Invoked with the serialized and marked bson command, or with an error
     */
    async markCommand(client, ns, command2, options) {
      const { db: db2 } = utils_1.MongoDBCollectionNamespace.fromString(ns);
      const bsonOptions = { promoteLongs: false, promoteValues: false };
      const rawCommand = (0, bson_1.deserialize)(command2, bsonOptions);
      const commandOptions = {
        timeoutMS: void 0,
        signal: void 0
      };
      if (options?.timeoutContext?.csotEnabled()) {
        commandOptions.timeoutMS = options.timeoutContext.remainingTimeMS;
      }
      if (options?.signal) {
        commandOptions.signal = options.signal;
      }
      const response = await client.db(db2).command(rawCommand, {
        ...bsonOptions,
        ...commandOptions
      });
      return (0, bson_1.serialize)(response, this.bsonOptions);
    }
    /**
     * Requests keys from the keyVault collection on the topology.
     * Exposed for testing purposes. Do not directly invoke.
     * @param client - A MongoClient connected to the topology
     * @param keyVaultNamespace - The namespace (database.collection) of the keyVault Collection
     * @param filter - The filter for the find query against the keyVault Collection
     * @param callback - Invoked with the found keys, or with an error
     */
    fetchKeys(client, keyVaultNamespace, filter, options) {
      const { db: dbName, collection: collectionName } = utils_1.MongoDBCollectionNamespace.fromString(keyVaultNamespace);
      const commandOptions = {
        timeoutContext: void 0,
        signal: void 0
      };
      if (options?.timeoutContext != null) {
        commandOptions.timeoutContext = new abstract_cursor_1.CursorTimeoutContext(options.timeoutContext, /* @__PURE__ */ Symbol());
      }
      if (options?.signal != null) {
        commandOptions.signal = options.signal;
      }
      return client.db(dbName).collection(collectionName, { readConcern: { level: "majority" } }).find((0, bson_1.deserialize)(filter), commandOptions).toArray();
    }
  }
  state_machine.StateMachine = StateMachine;
  return state_machine;
}
var hasRequiredClient_encryption;
function requireClient_encryption() {
  if (hasRequiredClient_encryption) return client_encryption;
  hasRequiredClient_encryption = 1;
  Object.defineProperty(client_encryption, "__esModule", { value: true });
  client_encryption.ClientEncryption = void 0;
  client_encryption.autoSelectSocketOptions = autoSelectSocketOptions;
  const bson_1 = requireBson();
  const deps_1 = requireDeps();
  const timeout_1 = requireTimeout();
  const utils_1 = requireUtils();
  const errors_1 = requireErrors$1();
  const index_1 = requireProviders();
  const state_machine_1 = requireState_machine();
  class ClientEncryption {
    /** @internal */
    static getMongoCrypt() {
      const encryption = (0, deps_1.getMongoDBClientEncryption)();
      if ("kModuleError" in encryption) {
        throw encryption.kModuleError;
      }
      return encryption.MongoCrypt;
    }
    /**
     * Create a new encryption instance
     *
     * @example
     * ```ts
     * new ClientEncryption(mongoClient, {
     *   keyVaultNamespace: 'client.encryption',
     *   kmsProviders: {
     *     local: {
     *       key: masterKey // The master key used for encryption/decryption. A 96-byte long Buffer
     *     }
     *   }
     * });
     * ```
     *
     * @example
     * ```ts
     * new ClientEncryption(mongoClient, {
     *   keyVaultNamespace: 'client.encryption',
     *   kmsProviders: {
     *     aws: {
     *       accessKeyId: AWS_ACCESS_KEY,
     *       secretAccessKey: AWS_SECRET_KEY
     *     }
     *   }
     * });
     * ```
     */
    constructor(client, options) {
      this._client = client;
      this._proxyOptions = options.proxyOptions ?? {};
      this._tlsOptions = options.tlsOptions ?? {};
      this._kmsProviders = options.kmsProviders || {};
      const { timeoutMS } = (0, utils_1.resolveTimeoutOptions)(client, options);
      this._timeoutMS = timeoutMS;
      this._credentialProviders = options.credentialProviders;
      if (options.credentialProviders?.aws && !(0, index_1.isEmptyCredentials)("aws", this._kmsProviders)) {
        throw new errors_1.MongoCryptInvalidArgumentError("Can only provide a custom AWS credential provider when the state machine is configured for automatic AWS credential fetching");
      }
      if (options.keyVaultNamespace == null) {
        throw new errors_1.MongoCryptInvalidArgumentError("Missing required option `keyVaultNamespace`");
      }
      const mongoCryptOptions = {
        ...options,
        kmsProviders: (0, bson_1.serialize)(this._kmsProviders),
        errorWrapper: errors_1.defaultErrorWrapper
      };
      this._keyVaultNamespace = options.keyVaultNamespace;
      this._keyVaultClient = options.keyVaultClient || client;
      const MongoCrypt = ClientEncryption.getMongoCrypt();
      this._mongoCrypt = new MongoCrypt(mongoCryptOptions);
    }
    /**
     * Creates a data key used for explicit encryption and inserts it into the key vault namespace
     *
     * @example
     * ```ts
     * // Using async/await to create a local key
     * const dataKeyId = await clientEncryption.createDataKey('local');
     * ```
     *
     * @example
     * ```ts
     * // Using async/await to create an aws key
     * const dataKeyId = await clientEncryption.createDataKey('aws', {
     *   masterKey: {
     *     region: 'us-east-1',
     *     key: 'xxxxxxxxxxxxxx' // CMK ARN here
     *   }
     * });
     * ```
     *
     * @example
     * ```ts
     * // Using async/await to create an aws key with a keyAltName
     * const dataKeyId = await clientEncryption.createDataKey('aws', {
     *   masterKey: {
     *     region: 'us-east-1',
     *     key: 'xxxxxxxxxxxxxx' // CMK ARN here
     *   },
     *   keyAltNames: [ 'mySpecialKey' ]
     * });
     * ```
     */
    async createDataKey(provider, options = {}) {
      if (options.keyAltNames && !Array.isArray(options.keyAltNames)) {
        throw new errors_1.MongoCryptInvalidArgumentError(`Option "keyAltNames" must be an array of strings, but was of type ${typeof options.keyAltNames}.`);
      }
      let keyAltNames = void 0;
      if (options.keyAltNames && options.keyAltNames.length > 0) {
        keyAltNames = options.keyAltNames.map((keyAltName, i) => {
          if (typeof keyAltName !== "string") {
            throw new errors_1.MongoCryptInvalidArgumentError(`Option "keyAltNames" must be an array of strings, but item at index ${i} was of type ${typeof keyAltName}`);
          }
          return (0, bson_1.serialize)({ keyAltName });
        });
      }
      let keyMaterial = void 0;
      if (options.keyMaterial) {
        keyMaterial = (0, bson_1.serialize)({ keyMaterial: options.keyMaterial });
      }
      const dataKeyBson = (0, bson_1.serialize)({
        provider,
        ...options.masterKey
      });
      const context = this._mongoCrypt.makeDataKeyContext(dataKeyBson, {
        keyAltNames,
        keyMaterial
      });
      const stateMachine = new state_machine_1.StateMachine({
        proxyOptions: this._proxyOptions,
        tlsOptions: this._tlsOptions,
        socketOptions: autoSelectSocketOptions(this._client.s.options)
      });
      const timeoutContext = options?.timeoutContext ?? timeout_1.TimeoutContext.create((0, utils_1.resolveTimeoutOptions)(this._client, { timeoutMS: this._timeoutMS }));
      const dataKey = (0, bson_1.deserialize)(await stateMachine.execute(this, context, { timeoutContext }));
      const { db: dbName, collection: collectionName } = utils_1.MongoDBCollectionNamespace.fromString(this._keyVaultNamespace);
      const { insertedId } = await this._keyVaultClient.db(dbName).collection(collectionName).insertOne(dataKey, {
        writeConcern: { w: "majority" },
        timeoutMS: timeoutContext?.csotEnabled() ? timeoutContext?.getRemainingTimeMSOrThrow() : void 0
      });
      return insertedId;
    }
    /**
     * Searches the keyvault for any data keys matching the provided filter.  If there are matches, rewrapManyDataKey then attempts to re-wrap the data keys using the provided options.
     *
     * If no matches are found, then no bulk write is performed.
     *
     * @example
     * ```ts
     * // rewrapping all data data keys (using a filter that matches all documents)
     * const filter = {};
     *
     * const result = await clientEncryption.rewrapManyDataKey(filter);
     * if (result.bulkWriteResult != null) {
     *  // keys were re-wrapped, results will be available in the bulkWrite object.
     * }
     * ```
     *
     * @example
     * ```ts
     * // attempting to rewrap all data keys with no matches
     * const filter = { _id: new Binary() } // assume _id matches no documents in the database
     * const result = await clientEncryption.rewrapManyDataKey(filter);
     *
     * if (result.bulkWriteResult == null) {
     *  // no keys matched, `bulkWriteResult` does not exist on the result object
     * }
     * ```
     */
    async rewrapManyDataKey(filter, options) {
      let keyEncryptionKeyBson = void 0;
      if (options) {
        const keyEncryptionKey = Object.assign({ provider: options.provider }, options.masterKey);
        keyEncryptionKeyBson = (0, bson_1.serialize)(keyEncryptionKey);
      }
      const filterBson = (0, bson_1.serialize)(filter);
      const context = this._mongoCrypt.makeRewrapManyDataKeyContext(filterBson, keyEncryptionKeyBson);
      const stateMachine = new state_machine_1.StateMachine({
        proxyOptions: this._proxyOptions,
        tlsOptions: this._tlsOptions,
        socketOptions: autoSelectSocketOptions(this._client.s.options)
      });
      const timeoutContext = timeout_1.TimeoutContext.create((0, utils_1.resolveTimeoutOptions)(this._client, { timeoutMS: this._timeoutMS }));
      const { v: dataKeys } = (0, bson_1.deserialize)(await stateMachine.execute(this, context, { timeoutContext }));
      if (dataKeys.length === 0) {
        return {};
      }
      const { db: dbName, collection: collectionName } = utils_1.MongoDBCollectionNamespace.fromString(this._keyVaultNamespace);
      const replacements = dataKeys.map((key) => ({
        updateOne: {
          filter: { _id: key._id },
          update: {
            $set: {
              masterKey: key.masterKey,
              keyMaterial: key.keyMaterial
            },
            $currentDate: {
              updateDate: true
            }
          }
        }
      }));
      const result = await this._keyVaultClient.db(dbName).collection(collectionName).bulkWrite(replacements, {
        writeConcern: { w: "majority" },
        timeoutMS: timeoutContext.csotEnabled() ? timeoutContext?.remainingTimeMS : void 0
      });
      return { bulkWriteResult: result };
    }
    /**
     * Deletes the key with the provided id from the keyvault, if it exists.
     *
     * @example
     * ```ts
     * // delete a key by _id
     * const id = new Binary(); // id is a bson binary subtype 4 object
     * const { deletedCount } = await clientEncryption.deleteKey(id);
     *
     * if (deletedCount != null && deletedCount > 0) {
     *   // successful deletion
     * }
     * ```
     *
     */
    async deleteKey(_id) {
      const { db: dbName, collection: collectionName } = utils_1.MongoDBCollectionNamespace.fromString(this._keyVaultNamespace);
      return await this._keyVaultClient.db(dbName).collection(collectionName).deleteOne({ _id }, { writeConcern: { w: "majority" }, timeoutMS: this._timeoutMS });
    }
    /**
     * Finds all the keys currently stored in the keyvault.
     *
     * This method will not throw.
     *
     * @returns a FindCursor over all keys in the keyvault.
     * @example
     * ```ts
     * // fetching all keys
     * const keys = await clientEncryption.getKeys().toArray();
     * ```
     */
    getKeys() {
      const { db: dbName, collection: collectionName } = utils_1.MongoDBCollectionNamespace.fromString(this._keyVaultNamespace);
      return this._keyVaultClient.db(dbName).collection(collectionName).find({}, { readConcern: { level: "majority" }, timeoutMS: this._timeoutMS });
    }
    /**
     * Finds a key in the keyvault with the specified _id.
     *
     * Returns a promise that either resolves to a {@link DataKey} if a document matches the key or null if no documents
     * match the id.  The promise rejects with an error if an error is thrown.
     * @example
     * ```ts
     * // getting a key by id
     * const id = new Binary(); // id is a bson binary subtype 4 object
     * const key = await clientEncryption.getKey(id);
     * if (!key) {
     *  // key is null if there was no matching key
     * }
     * ```
     */
    async getKey(_id) {
      const { db: dbName, collection: collectionName } = utils_1.MongoDBCollectionNamespace.fromString(this._keyVaultNamespace);
      return await this._keyVaultClient.db(dbName).collection(collectionName).findOne({ _id }, { readConcern: { level: "majority" }, timeoutMS: this._timeoutMS });
    }
    /**
     * Finds a key in the keyvault which has the specified keyAltName.
     *
     * @param keyAltName - a keyAltName to search for a key
     * @returns Returns a promise that either resolves to a {@link DataKey} if a document matches the key or null if no documents
     * match the keyAltName.  The promise rejects with an error if an error is thrown.
     * @example
     * ```ts
     * // get a key by alt name
     * const keyAltName = 'keyAltName';
     * const key = await clientEncryption.getKeyByAltName(keyAltName);
     * if (!key) {
     *  // key is null if there is no matching key
     * }
     * ```
     */
    async getKeyByAltName(keyAltName) {
      const { db: dbName, collection: collectionName } = utils_1.MongoDBCollectionNamespace.fromString(this._keyVaultNamespace);
      return await this._keyVaultClient.db(dbName).collection(collectionName).findOne({ keyAltNames: keyAltName }, { readConcern: { level: "majority" }, timeoutMS: this._timeoutMS });
    }
    /**
     * Adds a keyAltName to a key identified by the provided _id.
     *
     * This method resolves to/returns the *old* key value (prior to adding the new altKeyName).
     *
     * @param _id - The id of the document to update.
     * @param keyAltName - a keyAltName to search for a key
     * @returns Returns a promise that either resolves to a {@link DataKey} if a document matches the key or null if no documents
     * match the id.  The promise rejects with an error if an error is thrown.
     * @example
     * ```ts
     * // adding an keyAltName to a data key
     * const id = new Binary();  // id is a bson binary subtype 4 object
     * const keyAltName = 'keyAltName';
     * const oldKey = await clientEncryption.addKeyAltName(id, keyAltName);
     * if (!oldKey) {
     *  // null is returned if there is no matching document with an id matching the supplied id
     * }
     * ```
     */
    async addKeyAltName(_id, keyAltName) {
      const { db: dbName, collection: collectionName } = utils_1.MongoDBCollectionNamespace.fromString(this._keyVaultNamespace);
      const value = await this._keyVaultClient.db(dbName).collection(collectionName).findOneAndUpdate({ _id }, { $addToSet: { keyAltNames: keyAltName } }, { writeConcern: { w: "majority" }, returnDocument: "before", timeoutMS: this._timeoutMS });
      return value;
    }
    /**
     * Adds a keyAltName to a key identified by the provided _id.
     *
     * This method resolves to/returns the *old* key value (prior to removing the new altKeyName).
     *
     * If the removed keyAltName is the last keyAltName for that key, the `altKeyNames` property is unset from the document.
     *
     * @param _id - The id of the document to update.
     * @param keyAltName - a keyAltName to search for a key
     * @returns Returns a promise that either resolves to a {@link DataKey} if a document matches the key or null if no documents
     * match the id.  The promise rejects with an error if an error is thrown.
     * @example
     * ```ts
     * // removing a key alt name from a data key
     * const id = new Binary();  // id is a bson binary subtype 4 object
     * const keyAltName = 'keyAltName';
     * const oldKey = await clientEncryption.removeKeyAltName(id, keyAltName);
     *
     * if (!oldKey) {
     *  // null is returned if there is no matching document with an id matching the supplied id
     * }
     * ```
     */
    async removeKeyAltName(_id, keyAltName) {
      const { db: dbName, collection: collectionName } = utils_1.MongoDBCollectionNamespace.fromString(this._keyVaultNamespace);
      const pipeline = [
        {
          $set: {
            keyAltNames: {
              $cond: [
                {
                  $eq: ["$keyAltNames", [keyAltName]]
                },
                "$$REMOVE",
                {
                  $filter: {
                    input: "$keyAltNames",
                    cond: {
                      $ne: ["$$this", keyAltName]
                    }
                  }
                }
              ]
            }
          }
        }
      ];
      const value = await this._keyVaultClient.db(dbName).collection(collectionName).findOneAndUpdate({ _id }, pipeline, {
        writeConcern: { w: "majority" },
        returnDocument: "before",
        timeoutMS: this._timeoutMS
      });
      return value;
    }
    /**
     * A convenience method for creating an encrypted collection.
     * This method will create data keys for any encryptedFields that do not have a `keyId` defined
     * and then create a new collection with the full set of encryptedFields.
     *
     * @param db - A Node.js driver Db object with which to create the collection
     * @param name - The name of the collection to be created
     * @param options - Options for createDataKey and for createCollection
     * @returns created collection and generated encryptedFields
     * @throws MongoCryptCreateDataKeyError - If part way through the process a createDataKey invocation fails, an error will be rejected that has the partial `encryptedFields` that were created.
     * @throws MongoCryptCreateEncryptedCollectionError - If creating the collection fails, an error will be rejected that has the entire `encryptedFields` that were created.
     */
    async createEncryptedCollection(db2, name, options) {
      const { provider, masterKey, createCollectionOptions: { encryptedFields: { ...encryptedFields }, ...createCollectionOptions } } = options;
      const timeoutContext = this._timeoutMS != null ? timeout_1.TimeoutContext.create((0, utils_1.resolveTimeoutOptions)(this._client, { timeoutMS: this._timeoutMS })) : void 0;
      if (Array.isArray(encryptedFields.fields)) {
        const createDataKeyPromises = encryptedFields.fields.map(async (field) => field == null || typeof field !== "object" || field.keyId != null ? field : {
          ...field,
          keyId: await this.createDataKey(provider, {
            masterKey,
            // clone the timeoutContext
            // in order to avoid sharing the same timeout for server selection and connection checkout across different concurrent operations
            timeoutContext: timeoutContext?.csotEnabled() ? timeoutContext?.clone() : void 0
          })
        });
        const createDataKeyResolutions = await Promise.allSettled(createDataKeyPromises);
        encryptedFields.fields = createDataKeyResolutions.map((resolution, index) => resolution.status === "fulfilled" ? resolution.value : encryptedFields.fields[index]);
        const rejection = createDataKeyResolutions.find((result) => result.status === "rejected");
        if (rejection != null) {
          throw new errors_1.MongoCryptCreateDataKeyError(encryptedFields, { cause: rejection.reason });
        }
      }
      try {
        const collection2 = await db2.createCollection(name, {
          ...createCollectionOptions,
          encryptedFields,
          timeoutMS: timeoutContext?.csotEnabled() ? timeoutContext?.getRemainingTimeMSOrThrow() : void 0
        });
        return { collection: collection2, encryptedFields };
      } catch (cause) {
        throw new errors_1.MongoCryptCreateEncryptedCollectionError(encryptedFields, { cause });
      }
    }
    /**
     * Explicitly encrypt a provided value. Note that either `options.keyId` or `options.keyAltName` must
     * be specified. Specifying both `options.keyId` and `options.keyAltName` is considered an error.
     *
     * @param value - The value that you wish to serialize. Must be of a type that can be serialized into BSON
     * @param options -
     * @returns a Promise that either resolves with the encrypted value, or rejects with an error.
     *
     * @example
     * ```ts
     * // Encryption with async/await api
     * async function encryptMyData(value) {
     *   const keyId = await clientEncryption.createDataKey('local');
     *   return clientEncryption.encrypt(value, { keyId, algorithm: 'AEAD_AES_256_CBC_HMAC_SHA_512-Deterministic' });
     * }
     * ```
     *
     * @example
     * ```ts
     * // Encryption using a keyAltName
     * async function encryptMyData(value) {
     *   await clientEncryption.createDataKey('local', { keyAltNames: 'mySpecialKey' });
     *   return clientEncryption.encrypt(value, { keyAltName: 'mySpecialKey', algorithm: 'AEAD_AES_256_CBC_HMAC_SHA_512-Deterministic' });
     * }
     * ```
     */
    async encrypt(value, options) {
      return await this._encrypt(value, false, options);
    }
    /**
     * Encrypts a Match Expression or Aggregate Expression to query a range index.
     *
     * Only supported when queryType is "range" and algorithm is "Range".
     *
     * @param expression - a BSON document of one of the following forms:
     *  1. A Match Expression of this form:
     *      `{$and: [{<field>: {$gt: <value1>}}, {<field>: {$lt: <value2> }}]}`
     *  2. An Aggregate Expression of this form:
     *      `{$and: [{$gt: [<fieldpath>, <value1>]}, {$lt: [<fieldpath>, <value2>]}]}`
     *
     *    `$gt` may also be `$gte`. `$lt` may also be `$lte`.
     *
     * @param options -
     * @returns Returns a Promise that either resolves with the encrypted value or rejects with an error.
     */
    async encryptExpression(expression, options) {
      return await this._encrypt(expression, true, options);
    }
    /**
     * Explicitly decrypt a provided encrypted value
     *
     * @param value - An encrypted value
     * @returns a Promise that either resolves with the decrypted value, or rejects with an error
     *
     * @example
     * ```ts
     * // Decrypting value with async/await API
     * async function decryptMyValue(value) {
     *   return clientEncryption.decrypt(value);
     * }
     * ```
     */
    async decrypt(value) {
      const valueBuffer = (0, bson_1.serialize)({ v: value });
      const context = this._mongoCrypt.makeExplicitDecryptionContext(valueBuffer);
      const stateMachine = new state_machine_1.StateMachine({
        proxyOptions: this._proxyOptions,
        tlsOptions: this._tlsOptions,
        socketOptions: autoSelectSocketOptions(this._client.s.options)
      });
      const timeoutContext = this._timeoutMS != null ? timeout_1.TimeoutContext.create((0, utils_1.resolveTimeoutOptions)(this._client, { timeoutMS: this._timeoutMS })) : void 0;
      const { v } = (0, bson_1.deserialize)(await stateMachine.execute(this, context, { timeoutContext }));
      return v;
    }
    /**
     * @internal
     * Ask the user for KMS credentials.
     *
     * This returns anything that looks like the kmsProviders original input
     * option. It can be empty, and any provider specified here will override
     * the original ones.
     */
    async askForKMSCredentials() {
      return await (0, index_1.refreshKMSCredentials)(this._kmsProviders, this._credentialProviders);
    }
    static get libmongocryptVersion() {
      return ClientEncryption.getMongoCrypt().libmongocryptVersion;
    }
    /**
     * @internal
     * A helper that perform explicit encryption of values and expressions.
     * Explicitly encrypt a provided value. Note that either `options.keyId` or `options.keyAltName` must
     * be specified. Specifying both `options.keyId` and `options.keyAltName` is considered an error.
     *
     * @param value - The value that you wish to encrypt. Must be of a type that can be serialized into BSON
     * @param expressionMode - a boolean that indicates whether or not to encrypt the value as an expression
     * @param options - options to pass to encrypt
     * @returns the raw result of the call to stateMachine.execute().  When expressionMode is set to true, the return
     *          value will be a bson document.  When false, the value will be a BSON Binary.
     *
     */
    async _encrypt(value, expressionMode, options) {
      const { algorithm, keyId, keyAltName, contentionFactor, queryType, rangeOptions, stringOptions, textOptions } = options;
      const contextOptions = {
        expressionMode,
        algorithm
      };
      if (keyId) {
        contextOptions.keyId = keyId.buffer;
      }
      if (keyAltName) {
        if (keyId) {
          throw new errors_1.MongoCryptInvalidArgumentError(`"options" cannot contain both "keyId" and "keyAltName"`);
        }
        if (typeof keyAltName !== "string") {
          throw new errors_1.MongoCryptInvalidArgumentError(`"options.keyAltName" must be of type string, but was of type ${typeof keyAltName}`);
        }
        contextOptions.keyAltName = (0, bson_1.serialize)({ keyAltName });
      }
      if (typeof contentionFactor === "number" || typeof contentionFactor === "bigint") {
        contextOptions.contentionFactor = contentionFactor;
      }
      if (typeof queryType === "string") {
        contextOptions.queryType = queryType;
      }
      if (typeof rangeOptions === "object") {
        contextOptions.rangeOptions = (0, bson_1.serialize)(rangeOptions);
      }
      const resolvedStringOptions = stringOptions ?? textOptions;
      if (typeof resolvedStringOptions === "object") {
        contextOptions.textOptions = (0, bson_1.serialize)(resolvedStringOptions);
      }
      const valueBuffer = (0, bson_1.serialize)({ v: value });
      const stateMachine = new state_machine_1.StateMachine({
        proxyOptions: this._proxyOptions,
        tlsOptions: this._tlsOptions,
        socketOptions: autoSelectSocketOptions(this._client.s.options)
      });
      const context = this._mongoCrypt.makeExplicitEncryptionContext(valueBuffer, contextOptions);
      const timeoutContext = this._timeoutMS != null ? timeout_1.TimeoutContext.create((0, utils_1.resolveTimeoutOptions)(this._client, { timeoutMS: this._timeoutMS })) : void 0;
      const { v } = (0, bson_1.deserialize)(await stateMachine.execute(this, context, { timeoutContext }));
      return v;
    }
  }
  client_encryption.ClientEncryption = ClientEncryption;
  function autoSelectSocketOptions(baseOptions) {
    const options = { autoSelectFamily: true };
    if ("autoSelectFamily" in baseOptions) {
      options.autoSelectFamily = baseOptions.autoSelectFamily;
    }
    if ("autoSelectFamilyAttemptTimeout" in baseOptions) {
      options.autoSelectFamilyAttemptTimeout = baseOptions.autoSelectFamilyAttemptTimeout;
    }
    return options;
  }
  return client_encryption;
}
var mongocryptd_manager = {};
var hasRequiredMongocryptd_manager;
function requireMongocryptd_manager() {
  if (hasRequiredMongocryptd_manager) return mongocryptd_manager;
  hasRequiredMongocryptd_manager = 1;
  Object.defineProperty(mongocryptd_manager, "__esModule", { value: true });
  mongocryptd_manager.MongocryptdManager = void 0;
  const error_1 = requireError();
  const _MongocryptdManager = class _MongocryptdManager {
    constructor(extraOptions = {}) {
      this.spawnPath = "";
      this.spawnArgs = [];
      this.uri = typeof extraOptions.mongocryptdURI === "string" && extraOptions.mongocryptdURI.length > 0 ? extraOptions.mongocryptdURI : _MongocryptdManager.DEFAULT_MONGOCRYPTD_URI;
      this.bypassSpawn = !!extraOptions.mongocryptdBypassSpawn;
      if (Object.hasOwn(extraOptions, "mongocryptdSpawnPath") && extraOptions.mongocryptdSpawnPath) {
        this.spawnPath = extraOptions.mongocryptdSpawnPath;
      }
      if (Object.hasOwn(extraOptions, "mongocryptdSpawnArgs") && Array.isArray(extraOptions.mongocryptdSpawnArgs)) {
        this.spawnArgs = this.spawnArgs.concat(extraOptions.mongocryptdSpawnArgs);
      }
      if (this.spawnArgs.filter((arg) => typeof arg === "string").every((arg) => arg.indexOf("--idleShutdownTimeoutSecs") < 0)) {
        this.spawnArgs.push("--idleShutdownTimeoutSecs", "60");
      }
    }
    /**
     * Will check to see if a mongocryptd is up. If it is not up, it will attempt
     * to spawn a mongocryptd in a detached process, and then wait for it to be up.
     */
    async spawn() {
      const cmdName = this.spawnPath || "mongocryptd";
      const { spawn } = require$$1$3;
      this._child = spawn(cmdName, this.spawnArgs, {
        stdio: "ignore",
        detached: true
      });
      this._child.on("error", () => {
      });
      this._child.unref();
    }
    /**
     * @returns the result of `fn` or rejects with an error.
     */
    async withRespawn(fn) {
      try {
        const result2 = await fn();
        return result2;
      } catch (err) {
        const shouldSpawn = err instanceof error_1.MongoNetworkTimeoutError && !this.bypassSpawn;
        if (!shouldSpawn) {
          throw err;
        }
      }
      await this.spawn();
      const result = await fn();
      return result;
    }
  };
  _MongocryptdManager.DEFAULT_MONGOCRYPTD_URI = "mongodb://localhost:27020";
  let MongocryptdManager = _MongocryptdManager;
  mongocryptd_manager.MongocryptdManager = MongocryptdManager;
  return mongocryptd_manager;
}
var hasRequiredAuto_encrypter;
function requireAuto_encrypter() {
  if (hasRequiredAuto_encrypter) return auto_encrypter;
  hasRequiredAuto_encrypter = 1;
  var _a;
  Object.defineProperty(auto_encrypter, "__esModule", { value: true });
  auto_encrypter.AutoEncrypter = auto_encrypter.AutoEncryptionLoggerLevel = void 0;
  const net = require$$0$8;
  const bson_1 = requireBson();
  const constants_1 = requireConstants();
  const deps_1 = requireDeps();
  const error_1 = requireError();
  const mongo_client_1 = requireMongo_client();
  const utils_1 = requireUtils();
  const client_encryption_1 = requireClient_encryption();
  const errors_1 = requireErrors$1();
  const mongocryptd_manager_1 = requireMongocryptd_manager();
  const providers_1 = requireProviders();
  const state_machine_1 = requireState_machine();
  auto_encrypter.AutoEncryptionLoggerLevel = Object.freeze({
    FatalError: 0,
    Error: 1,
    Warning: 2,
    Info: 3,
    Trace: 4
  });
  const _AutoEncrypter = class _AutoEncrypter {
    /** @internal */
    static getMongoCrypt() {
      const encryption = (0, deps_1.getMongoDBClientEncryption)();
      if ("kModuleError" in encryption) {
        throw encryption.kModuleError;
      }
      return encryption.MongoCrypt;
    }
    /**
     * Create an AutoEncrypter
     *
     * **Note**: Do not instantiate this class directly. Rather, supply the relevant options to a MongoClient
     *
     * **Note**: Supplying `options.schemaMap` provides more security than relying on JSON Schemas obtained from the server.
     * It protects against a malicious server advertising a false JSON Schema, which could trick the client into sending unencrypted data that should be encrypted.
     * Schemas supplied in the schemaMap only apply to configuring automatic encryption for Client-Side Field Level Encryption.
     * Other validation rules in the JSON schema will not be enforced by the driver and will result in an error.
     *
     * @example <caption>Create an AutoEncrypter that makes use of mongocryptd</caption>
     * ```ts
     * // Enabling autoEncryption via a MongoClient using mongocryptd
     * const { MongoClient } = require('mongodb');
     * const client = new MongoClient(URL, {
     *   autoEncryption: {
     *     kmsProviders: {
     *       aws: {
     *         accessKeyId: AWS_ACCESS_KEY,
     *         secretAccessKey: AWS_SECRET_KEY
     *       }
     *     }
     *   }
     * });
     * ```
     *
     * await client.connect();
     * // From here on, the client will be encrypting / decrypting automatically
     * @example <caption>Create an AutoEncrypter that makes use of libmongocrypt's CSFLE shared library</caption>
     * ```ts
     * // Enabling autoEncryption via a MongoClient using CSFLE shared library
     * const { MongoClient } = require('mongodb');
     * const client = new MongoClient(URL, {
     *   autoEncryption: {
     *     kmsProviders: {
     *       aws: {}
     *     },
     *     extraOptions: {
     *       cryptSharedLibPath: '/path/to/local/crypt/shared/lib',
     *       cryptSharedLibRequired: true
     *     }
     *   }
     * });
     * ```
     *
     * await client.connect();
     * // From here on, the client will be encrypting / decrypting automatically
     */
    constructor(client, options) {
      this[_a] = false;
      this._client = client;
      this._bypassEncryption = options.bypassAutoEncryption === true;
      this._keyVaultNamespace = options.keyVaultNamespace || "admin.datakeys";
      this._keyVaultClient = options.keyVaultClient || client;
      this._metaDataClient = options.metadataClient || client;
      this._proxyOptions = options.proxyOptions || {};
      this._tlsOptions = options.tlsOptions || {};
      this._kmsProviders = options.kmsProviders || {};
      this._credentialProviders = options.credentialProviders;
      if (options.credentialProviders?.aws && !(0, providers_1.isEmptyCredentials)("aws", this._kmsProviders)) {
        throw new errors_1.MongoCryptInvalidArgumentError("Can only provide a custom AWS credential provider when the state machine is configured for automatic AWS credential fetching");
      }
      const mongoCryptOptions = {
        errorWrapper: errors_1.defaultErrorWrapper
      };
      if (options.schemaMap) {
        if (bson_1.ByteUtils.isUint8Array(options.schemaMap)) {
          mongoCryptOptions.schemaMap = options.schemaMap;
        } else {
          mongoCryptOptions.schemaMap = (0, bson_1.serialize)(options.schemaMap);
        }
      }
      if (options.encryptedFieldsMap) {
        if (bson_1.ByteUtils.isUint8Array(options.encryptedFieldsMap)) {
          mongoCryptOptions.encryptedFieldsMap = options.encryptedFieldsMap;
        } else {
          mongoCryptOptions.encryptedFieldsMap = (0, bson_1.serialize)(options.encryptedFieldsMap);
        }
      }
      if (bson_1.ByteUtils.isUint8Array(this._kmsProviders)) {
        mongoCryptOptions.kmsProviders = this._kmsProviders;
      } else {
        mongoCryptOptions.kmsProviders = (0, bson_1.serialize)(this._kmsProviders);
      }
      if (options.options?.logger) {
        mongoCryptOptions.logger = options.options.logger;
      }
      if (options.extraOptions && options.extraOptions.cryptSharedLibPath) {
        mongoCryptOptions.cryptSharedLibPath = options.extraOptions.cryptSharedLibPath;
      }
      if (options.bypassQueryAnalysis) {
        mongoCryptOptions.bypassQueryAnalysis = options.bypassQueryAnalysis;
      }
      if (options.keyExpirationMS != null) {
        mongoCryptOptions.keyExpirationMS = options.keyExpirationMS;
      }
      this._bypassMongocryptdAndCryptShared = this._bypassEncryption || !!options.bypassQueryAnalysis;
      if (options.extraOptions && options.extraOptions.cryptSharedLibSearchPaths) {
        mongoCryptOptions.cryptSharedLibSearchPaths = options.extraOptions.cryptSharedLibSearchPaths;
      } else if (!this._bypassMongocryptdAndCryptShared) {
        mongoCryptOptions.cryptSharedLibSearchPaths = ["$SYSTEM"];
      }
      const MongoCrypt = _AutoEncrypter.getMongoCrypt();
      this._mongocrypt = new MongoCrypt(mongoCryptOptions);
      this._contextCounter = 0;
      if (options.extraOptions && options.extraOptions.cryptSharedLibRequired && !this.cryptSharedLibVersionInfo) {
        throw new errors_1.MongoCryptInvalidArgumentError("`cryptSharedLibRequired` set but no crypt_shared library loaded");
      }
      if (!this._bypassMongocryptdAndCryptShared && !this.cryptSharedLibVersionInfo) {
        this._mongocryptdManager = new mongocryptd_manager_1.MongocryptdManager(options.extraOptions);
        const clientOptions = {
          serverSelectionTimeoutMS: 1e4
        };
        if ((options.extraOptions == null || typeof options.extraOptions.mongocryptdURI !== "string") && !net.getDefaultAutoSelectFamily) {
          clientOptions.family = 4;
        }
        if (net.getDefaultAutoSelectFamily) {
          Object.assign(clientOptions, (0, client_encryption_1.autoSelectSocketOptions)(this._client.s?.options ?? {}));
        }
        this._mongocryptdClient = new mongo_client_1.MongoClient(this._mongocryptdManager.uri, clientOptions);
      }
    }
    /**
     * Initializes the auto encrypter by spawning a mongocryptd and connecting to it.
     *
     * This function is a no-op when bypassSpawn is set or the crypt shared library is used.
     */
    async init() {
      if (this._bypassMongocryptdAndCryptShared || this.cryptSharedLibVersionInfo) {
        return;
      }
      if (!this._mongocryptdManager) {
        throw new error_1.MongoRuntimeError("Reached impossible state: mongocryptdManager is undefined when neither bypassSpawn nor the shared lib are specified.");
      }
      if (!this._mongocryptdClient) {
        throw new error_1.MongoRuntimeError("Reached impossible state: mongocryptdClient is undefined when neither bypassSpawn nor the shared lib are specified.");
      }
      if (!this._mongocryptdManager.bypassSpawn) {
        await this._mongocryptdManager.spawn();
      }
      try {
        const client = await this._mongocryptdClient.connect();
        return client;
      } catch (error2) {
        throw new error_1.MongoRuntimeError("Unable to connect to `mongocryptd`, please make sure it is running or in your PATH for auto-spawn", { cause: error2 });
      }
    }
    /**
     * Cleans up the `_mongocryptdClient`, if present.
     */
    async close() {
      await this._mongocryptdClient?.close();
    }
    /**
     * Encrypt a command for a given namespace.
     */
    async encrypt(ns, cmd, options = {}) {
      options.signal?.throwIfAborted();
      if (this._bypassEncryption) {
        return cmd;
      }
      const commandBuffer = (0, bson_1.serialize)(cmd, options);
      const context = this._mongocrypt.makeEncryptionContext(utils_1.MongoDBCollectionNamespace.fromString(ns).db, commandBuffer);
      context.id = this._contextCounter++;
      context.ns = ns;
      context.document = cmd;
      const stateMachine = new state_machine_1.StateMachine({
        promoteValues: false,
        promoteLongs: false,
        proxyOptions: this._proxyOptions,
        tlsOptions: this._tlsOptions,
        socketOptions: (0, client_encryption_1.autoSelectSocketOptions)(this._client.s.options)
      });
      return (0, bson_1.deserialize)(await stateMachine.execute(this, context, options), {
        promoteValues: false,
        promoteLongs: false
      });
    }
    /**
     * Decrypt a command response
     */
    async decrypt(response, options = {}) {
      options.signal?.throwIfAborted();
      const context = this._mongocrypt.makeDecryptionContext(response);
      context.id = this._contextCounter++;
      const stateMachine = new state_machine_1.StateMachine({
        ...options,
        proxyOptions: this._proxyOptions,
        tlsOptions: this._tlsOptions,
        socketOptions: (0, client_encryption_1.autoSelectSocketOptions)(this._client.s.options)
      });
      return await stateMachine.execute(this, context, options);
    }
    /**
     * Ask the user for KMS credentials.
     *
     * This returns anything that looks like the kmsProviders original input
     * option. It can be empty, and any provider specified here will override
     * the original ones.
     */
    async askForKMSCredentials() {
      return await (0, providers_1.refreshKMSCredentials)(this._kmsProviders, this._credentialProviders);
    }
    /**
     * Return the current libmongocrypt's CSFLE shared library version
     * as `{ version: bigint, versionStr: string }`, or `null` if no CSFLE
     * shared library was loaded.
     */
    get cryptSharedLibVersionInfo() {
      return this._mongocrypt.cryptSharedLibVersionInfo;
    }
    static get libmongocryptVersion() {
      return _AutoEncrypter.getMongoCrypt().libmongocryptVersion;
    }
  };
  _a = constants_1.kDecorateResult;
  let AutoEncrypter = _AutoEncrypter;
  auto_encrypter.AutoEncrypter = AutoEncrypter;
  return auto_encrypter;
}
var hasRequiredEncrypter;
function requireEncrypter() {
  if (hasRequiredEncrypter) return encrypter;
  hasRequiredEncrypter = 1;
  Object.defineProperty(encrypter, "__esModule", { value: true });
  encrypter.Encrypter = void 0;
  const auto_encrypter_1 = requireAuto_encrypter();
  const constants_1 = requireConstants();
  const deps_1 = requireDeps();
  const error_1 = requireError();
  const mongo_client_1 = requireMongo_client();
  class Encrypter {
    constructor(client, uri, options) {
      if (typeof options.autoEncryption !== "object") {
        throw new error_1.MongoInvalidArgumentError('Option "autoEncryption" must be specified');
      }
      this.internalClient = null;
      this.bypassAutoEncryption = !!options.autoEncryption.bypassAutoEncryption;
      this.needsConnecting = false;
      if (options.maxPoolSize === 0 && options.autoEncryption.keyVaultClient == null) {
        options.autoEncryption.keyVaultClient = client;
      } else if (options.autoEncryption.keyVaultClient == null) {
        options.autoEncryption.keyVaultClient = this.getInternalClient(client, uri, options);
      }
      if (this.bypassAutoEncryption) {
        options.autoEncryption.metadataClient = void 0;
      } else if (options.maxPoolSize === 0) {
        options.autoEncryption.metadataClient = client;
      } else {
        options.autoEncryption.metadataClient = this.getInternalClient(client, uri, options);
      }
      if (options.proxyHost) {
        options.autoEncryption.proxyOptions = {
          proxyHost: options.proxyHost,
          proxyPort: options.proxyPort,
          proxyUsername: options.proxyUsername,
          proxyPassword: options.proxyPassword
        };
      }
      this.autoEncrypter = new auto_encrypter_1.AutoEncrypter(client, options.autoEncryption);
    }
    getInternalClient(client, uri, options) {
      let internalClient = this.internalClient;
      if (internalClient == null) {
        const clonedOptions = {};
        for (const key of [
          ...Object.getOwnPropertyNames(options),
          ...Object.getOwnPropertySymbols(options)
        ]) {
          if (["autoEncryption", "minPoolSize", "servers", "caseTranslate", "dbName"].includes(key))
            continue;
          Reflect.set(clonedOptions, key, Reflect.get(options, key));
        }
        clonedOptions.minPoolSize = 0;
        internalClient = new mongo_client_1.MongoClient(uri, clonedOptions);
        this.internalClient = internalClient;
        for (const eventName of constants_1.MONGO_CLIENT_EVENTS) {
          for (const listener of client.listeners(eventName)) {
            internalClient.on(eventName, listener);
          }
        }
        client.on("newListener", (eventName, listener) => {
          internalClient?.on(eventName, listener);
        });
        this.needsConnecting = true;
      }
      return internalClient;
    }
    async connectInternalClient() {
      const internalClient = this.internalClient;
      if (this.needsConnecting && internalClient != null) {
        this.needsConnecting = false;
        await internalClient.connect();
      }
    }
    async close(client) {
      let error2;
      try {
        await this.autoEncrypter.close();
      } catch (autoEncrypterError) {
        error2 = autoEncrypterError;
      }
      const internalClient = this.internalClient;
      if (internalClient != null && client !== internalClient) {
        return await internalClient.close();
      }
      if (error2 != null) {
        throw error2;
      }
    }
    static checkForMongoCrypt() {
      const mongodbClientEncryption = (0, deps_1.getMongoDBClientEncryption)();
      if ("kModuleError" in mongodbClientEncryption) {
        throw new error_1.MongoMissingDependencyError("Auto-encryption requested, but the module is not installed. Please add `mongodb-client-encryption` as a dependency of your project", {
          cause: mongodbClientEncryption["kModuleError"],
          dependencyName: "mongodb-client-encryption"
        });
      }
    }
  }
  encrypter.Encrypter = Encrypter;
  return encrypter;
}
var runtime_adapters = {};
var hasRequiredRuntime_adapters;
function requireRuntime_adapters() {
  if (hasRequiredRuntime_adapters) return runtime_adapters;
  hasRequiredRuntime_adapters = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ALLOWED_DRIVER_REQUIRE_PROPERTY_NAME = void 0;
    exports.resolveRuntimeAdapters = resolveRuntimeAdapters;
    exports.ALLOWED_DRIVER_REQUIRE_PROPERTY_NAME = "allowedDriverRequire";
    function resolveRuntimeAdapters(options) {
      globalThis[exports.ALLOWED_DRIVER_REQUIRE_PROPERTY_NAME] = true;
      try {
        const runtime = {
          // eslint-disable-next-line @typescript-eslint/no-require-imports
          os: options.runtimeAdapters?.os ?? require("os")
        };
        return runtime;
      } finally {
        globalThis[exports.ALLOWED_DRIVER_REQUIRE_PROPERTY_NAME] = false;
      }
    }
  })(runtime_adapters);
  return runtime_adapters;
}
var monitor = {};
var connect = {};
var connection = {};
var command_monitoring_events = {};
var hasRequiredCommand_monitoring_events;
function requireCommand_monitoring_events() {
  if (hasRequiredCommand_monitoring_events) return command_monitoring_events;
  hasRequiredCommand_monitoring_events = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SENSITIVE_COMMANDS = exports.CommandFailedEvent = exports.CommandSucceededEvent = exports.CommandStartedEvent = void 0;
    const constants_1 = requireConstants();
    const utils_1 = requireUtils();
    const commands_1 = requireCommands();
    class CommandStartedEvent {
      /**
       * Create a started event
       *
       * @internal
       * @param pool - the pool that originated the command
       * @param command - the command
       */
      constructor(connection2, command2, serverConnectionId) {
        this.name = constants_1.COMMAND_STARTED;
        const cmd = extractCommand(command2);
        const commandName = extractCommandName(cmd);
        const { address, connectionId, serviceId } = extractConnectionDetails(connection2);
        if (exports.SENSITIVE_COMMANDS.has(commandName)) {
          this.commandObj = {};
          this.commandObj[commandName] = true;
        }
        this.address = address;
        this.connectionId = connectionId;
        this.serviceId = serviceId;
        this.requestId = command2.requestId;
        this.databaseName = command2.databaseName;
        this.commandName = commandName;
        this.command = maybeRedact(commandName, cmd, cmd);
        this.serverConnectionId = serverConnectionId;
      }
      /* @internal */
      get hasServiceId() {
        return !!this.serviceId;
      }
    }
    exports.CommandStartedEvent = CommandStartedEvent;
    class CommandSucceededEvent {
      /**
       * Create a succeeded event
       *
       * @internal
       * @param pool - the pool that originated the command
       * @param command - the command
       * @param reply - the reply for this command from the server
       * @param started - a high resolution tuple timestamp of when the command was first sent, to calculate duration
       */
      constructor(connection2, command2, reply, started, serverConnectionId) {
        this.name = constants_1.COMMAND_SUCCEEDED;
        const cmd = extractCommand(command2);
        const commandName = extractCommandName(cmd);
        const { address, connectionId, serviceId } = extractConnectionDetails(connection2);
        this.address = address;
        this.connectionId = connectionId;
        this.serviceId = serviceId;
        this.requestId = command2.requestId;
        this.commandName = commandName;
        this.duration = (0, utils_1.calculateDurationInMs)(started);
        this.reply = maybeRedact(commandName, cmd, extractReply(reply));
        this.serverConnectionId = serverConnectionId;
        this.databaseName = command2.databaseName;
      }
      /* @internal */
      get hasServiceId() {
        return !!this.serviceId;
      }
    }
    exports.CommandSucceededEvent = CommandSucceededEvent;
    class CommandFailedEvent {
      /**
       * Create a failure event
       *
       * @internal
       * @param pool - the pool that originated the command
       * @param command - the command
       * @param error - the generated error or a server error response
       * @param started - a high resolution tuple timestamp of when the command was first sent, to calculate duration
       */
      constructor(connection2, command2, error2, started, serverConnectionId) {
        this.name = constants_1.COMMAND_FAILED;
        const cmd = extractCommand(command2);
        const commandName = extractCommandName(cmd);
        const { address, connectionId, serviceId } = extractConnectionDetails(connection2);
        this.address = address;
        this.connectionId = connectionId;
        this.serviceId = serviceId;
        this.requestId = command2.requestId;
        this.commandName = commandName;
        this.duration = (0, utils_1.calculateDurationInMs)(started);
        this.failure = maybeRedact(commandName, cmd, error2);
        this.serverConnectionId = serverConnectionId;
        this.databaseName = command2.databaseName;
      }
      /* @internal */
      get hasServiceId() {
        return !!this.serviceId;
      }
    }
    exports.CommandFailedEvent = CommandFailedEvent;
    exports.SENSITIVE_COMMANDS = /* @__PURE__ */ new Set([
      "authenticate",
      "saslStart",
      "saslContinue",
      "getnonce",
      "createUser",
      "updateUser",
      "copydbgetnonce",
      "copydbsaslstart",
      "copydb"
    ]);
    const HELLO_COMMANDS = /* @__PURE__ */ new Set(["hello", constants_1.LEGACY_HELLO_COMMAND, constants_1.LEGACY_HELLO_COMMAND_CAMEL_CASE]);
    const extractCommandName = (commandDoc) => Object.keys(commandDoc)[0];
    const collectionName = (command2) => command2.ns.split(".")[1];
    const maybeRedact = (commandName, commandDoc, result) => exports.SENSITIVE_COMMANDS.has(commandName) || HELLO_COMMANDS.has(commandName) && commandDoc.speculativeAuthenticate ? {} : result;
    const LEGACY_FIND_QUERY_MAP = {
      $query: "filter",
      $orderby: "sort",
      $hint: "hint",
      $comment: "comment",
      $maxScan: "maxScan",
      $max: "max",
      $min: "min",
      $returnKey: "returnKey",
      $showDiskLoc: "showRecordId",
      $maxTimeMS: "maxTimeMS",
      $snapshot: "snapshot"
    };
    const LEGACY_FIND_OPTIONS_MAP = {
      numberToSkip: "skip",
      numberToReturn: "batchSize",
      returnFieldSelector: "projection"
    };
    function extractCommand(command2) {
      if (command2 instanceof commands_1.OpMsgRequest) {
        const cmd = { ...command2.command };
        if (cmd.ops instanceof commands_1.DocumentSequence) {
          cmd.ops = cmd.ops.documents;
        }
        if (cmd.nsInfo instanceof commands_1.DocumentSequence) {
          cmd.nsInfo = cmd.nsInfo.documents;
        }
        return cmd;
      }
      if (command2.query?.$query) {
        let result;
        if (command2.ns === "admin.$cmd") {
          result = Object.assign({}, command2.query.$query);
        } else {
          result = { find: collectionName(command2) };
          Object.keys(LEGACY_FIND_QUERY_MAP).forEach((key) => {
            if (command2.query[key] != null) {
              result[LEGACY_FIND_QUERY_MAP[key]] = { ...command2.query[key] };
            }
          });
        }
        Object.keys(LEGACY_FIND_OPTIONS_MAP).forEach((key) => {
          const legacyKey = key;
          if (command2[legacyKey] != null) {
            result[LEGACY_FIND_OPTIONS_MAP[legacyKey]] = command2[legacyKey];
          }
        });
        return result;
      }
      let clonedQuery = {};
      const clonedCommand = { ...command2 };
      if (command2.query) {
        clonedQuery = { ...command2.query };
        clonedCommand.query = clonedQuery;
      }
      return command2.query ? clonedQuery : clonedCommand;
    }
    function extractReply(reply) {
      if (!reply) {
        return reply;
      }
      return reply.result ? reply.result : reply;
    }
    function extractConnectionDetails(connection2) {
      let connectionId;
      if ("id" in connection2) {
        connectionId = connection2.id;
      }
      return {
        address: connection2.address,
        serviceId: connection2.serviceId,
        connectionId
      };
    }
  })(command_monitoring_events);
  return command_monitoring_events;
}
var stream_description = {};
var server_description = {};
var hasRequiredServer_description;
function requireServer_description() {
  if (hasRequiredServer_description) return server_description;
  hasRequiredServer_description = 1;
  Object.defineProperty(server_description, "__esModule", { value: true });
  server_description.ServerDescription = void 0;
  server_description.parseServerType = parseServerType;
  server_description.compareTopologyVersion = compareTopologyVersion;
  const bson_1 = requireBson();
  const error_1 = requireError();
  const utils_1 = requireUtils();
  const common_1 = requireCommon$1();
  const WRITABLE_SERVER_TYPES = /* @__PURE__ */ new Set([
    common_1.ServerType.RSPrimary,
    common_1.ServerType.Standalone,
    common_1.ServerType.Mongos,
    common_1.ServerType.LoadBalancer
  ]);
  const DATA_BEARING_SERVER_TYPES = /* @__PURE__ */ new Set([
    common_1.ServerType.RSPrimary,
    common_1.ServerType.RSSecondary,
    common_1.ServerType.Mongos,
    common_1.ServerType.Standalone,
    common_1.ServerType.LoadBalancer
  ]);
  class ServerDescription {
    /**
     * Create a ServerDescription
     * @internal
     *
     * @param address - The address of the server
     * @param hello - An optional hello response for this server
     */
    constructor(address, hello, options = {}) {
      if (address == null || address === "") {
        throw new error_1.MongoRuntimeError("ServerDescription must be provided with a non-empty address");
      }
      this.address = typeof address === "string" ? utils_1.HostAddress.fromString(address).toString() : address.toString();
      this.type = parseServerType(hello, options);
      this.hosts = hello?.hosts?.map((host) => host.toLowerCase()) ?? [];
      this.passives = hello?.passives?.map((host) => host.toLowerCase()) ?? [];
      this.arbiters = hello?.arbiters?.map((host) => host.toLowerCase()) ?? [];
      this.tags = hello?.tags ?? {};
      this.minWireVersion = hello?.minWireVersion ?? 0;
      this.maxWireVersion = hello?.maxWireVersion ?? 0;
      this.roundTripTime = options?.roundTripTime ?? -1;
      this.minRoundTripTime = options?.minRoundTripTime ?? 0;
      this.lastUpdateTime = (0, utils_1.processTimeMS)();
      this.lastWriteDate = hello?.lastWrite?.lastWriteDate ?? 0;
      this.error = options.error ?? null;
      this.error?.stack;
      this.topologyVersion = this.error?.topologyVersion ?? hello?.topologyVersion ?? null;
      this.setName = hello?.setName ?? null;
      this.setVersion = hello?.setVersion ?? null;
      this.electionId = hello?.electionId ?? null;
      this.logicalSessionTimeoutMinutes = hello?.logicalSessionTimeoutMinutes ?? null;
      this.maxMessageSizeBytes = hello?.maxMessageSizeBytes ?? null;
      this.maxWriteBatchSize = hello?.maxWriteBatchSize ?? null;
      this.maxBsonObjectSize = hello?.maxBsonObjectSize ?? null;
      this.primary = hello?.primary ?? null;
      this.me = hello?.me?.toLowerCase() ?? null;
      this.$clusterTime = hello?.$clusterTime ?? null;
      this.iscryptd = Boolean(hello?.iscryptd);
    }
    get hostAddress() {
      return utils_1.HostAddress.fromString(this.address);
    }
    get allHosts() {
      return this.hosts.concat(this.arbiters).concat(this.passives);
    }
    /** Is this server available for reads*/
    get isReadable() {
      return this.type === common_1.ServerType.RSSecondary || this.isWritable;
    }
    /** Is this server data bearing */
    get isDataBearing() {
      return DATA_BEARING_SERVER_TYPES.has(this.type);
    }
    /** Is this server available for writes */
    get isWritable() {
      return WRITABLE_SERVER_TYPES.has(this.type);
    }
    get host() {
      const chopLength = `:${this.port}`.length;
      return this.address.slice(0, -chopLength);
    }
    get port() {
      const port = this.address.split(":").pop();
      return port ? Number.parseInt(port, 10) : 27017;
    }
    /**
     * Determines if another `ServerDescription` is equal to this one per the rules defined in the SDAM specification.
     * @see https://github.com/mongodb/specifications/blob/master/source/server-discovery-and-monitoring/server-discovery-and-monitoring.md
     */
    equals(other) {
      const topologyVersionsEqual = this.topologyVersion === other?.topologyVersion || compareTopologyVersion(this.topologyVersion, other?.topologyVersion) === 0;
      const electionIdsEqual = this.electionId != null && other?.electionId != null ? (0, utils_1.compareObjectId)(this.electionId, other.electionId) === 0 : this.electionId === other?.electionId;
      return other != null && other.iscryptd === this.iscryptd && (0, utils_1.errorStrictEqual)(this.error, other.error) && this.type === other.type && this.minWireVersion === other.minWireVersion && (0, utils_1.arrayStrictEqual)(this.hosts, other.hosts) && tagsStrictEqual(this.tags, other.tags) && this.setName === other.setName && this.setVersion === other.setVersion && electionIdsEqual && this.primary === other.primary && this.logicalSessionTimeoutMinutes === other.logicalSessionTimeoutMinutes && topologyVersionsEqual;
    }
  }
  server_description.ServerDescription = ServerDescription;
  function parseServerType(hello, options) {
    if (options?.loadBalanced) {
      return common_1.ServerType.LoadBalancer;
    }
    if (!hello || !hello.ok) {
      return common_1.ServerType.Unknown;
    }
    if (hello.isreplicaset) {
      return common_1.ServerType.RSGhost;
    }
    if (hello.msg && hello.msg === "isdbgrid") {
      return common_1.ServerType.Mongos;
    }
    if (hello.setName) {
      if (hello.hidden) {
        return common_1.ServerType.RSOther;
      } else if (hello.isWritablePrimary) {
        return common_1.ServerType.RSPrimary;
      } else if (hello.secondary) {
        return common_1.ServerType.RSSecondary;
      } else if (hello.arbiterOnly) {
        return common_1.ServerType.RSArbiter;
      } else {
        return common_1.ServerType.RSOther;
      }
    }
    return common_1.ServerType.Standalone;
  }
  function tagsStrictEqual(tags, tags2) {
    const tagsKeys = Object.keys(tags);
    const tags2Keys = Object.keys(tags2);
    return tagsKeys.length === tags2Keys.length && tagsKeys.every((key) => tags2[key] === tags[key]);
  }
  function compareTopologyVersion(currentTv, newTv) {
    if (currentTv == null || newTv == null) {
      return -1;
    }
    if (!currentTv.processId.equals(newTv.processId)) {
      return -1;
    }
    const currentCounter = typeof currentTv.counter === "bigint" ? bson_1.Long.fromBigInt(currentTv.counter) : bson_1.Long.isLong(currentTv.counter) ? currentTv.counter : bson_1.Long.fromNumber(currentTv.counter);
    const newCounter = typeof newTv.counter === "bigint" ? bson_1.Long.fromBigInt(newTv.counter) : bson_1.Long.isLong(newTv.counter) ? newTv.counter : bson_1.Long.fromNumber(newTv.counter);
    return currentCounter.compare(newCounter);
  }
  return server_description;
}
var hasRequiredStream_description;
function requireStream_description() {
  if (hasRequiredStream_description) return stream_description;
  hasRequiredStream_description = 1;
  Object.defineProperty(stream_description, "__esModule", { value: true });
  stream_description.StreamDescription = void 0;
  const bson_1 = requireBson();
  const common_1 = requireCommon$1();
  const server_description_1 = requireServer_description();
  const RESPONSE_FIELDS = [
    "minWireVersion",
    "maxWireVersion",
    "maxBsonObjectSize",
    "maxMessageSizeBytes",
    "maxWriteBatchSize",
    "logicalSessionTimeoutMinutes"
  ];
  class StreamDescription {
    constructor(address, options) {
      this.hello = null;
      this.address = address;
      this.type = common_1.ServerType.Unknown;
      this.minWireVersion = void 0;
      this.maxWireVersion = void 0;
      this.maxBsonObjectSize = 16777216;
      this.maxMessageSizeBytes = 48e6;
      this.maxWriteBatchSize = 1e5;
      this.logicalSessionTimeoutMinutes = options?.logicalSessionTimeoutMinutes;
      this.loadBalanced = !!options?.loadBalanced;
      this.compressors = options && options.compressors && Array.isArray(options.compressors) ? options.compressors : [];
      this.serverConnectionId = null;
    }
    receiveResponse(response) {
      if (response == null) {
        return;
      }
      this.hello = response;
      this.type = (0, server_description_1.parseServerType)(response);
      if ("connectionId" in response) {
        this.serverConnectionId = this.parseServerConnectionID(response.connectionId);
      } else {
        this.serverConnectionId = null;
      }
      for (const field of RESPONSE_FIELDS) {
        if (response[field] != null) {
          this[field] = response[field];
        }
        if ("__nodejs_mock_server__" in response) {
          this.__nodejs_mock_server__ = response["__nodejs_mock_server__"];
        }
      }
      if (response.compression) {
        this.compressor = this.compressors.filter((c) => response.compression?.includes(c))[0];
      }
    }
    /* @internal */
    parseServerConnectionID(serverConnectionId) {
      return bson_1.Long.isLong(serverConnectionId) ? serverConnectionId.toBigInt() : (
        // @ts-expect-error: Doubles are coercible to number
        BigInt(serverConnectionId)
      );
    }
  }
  stream_description.StreamDescription = StreamDescription;
  return stream_description;
}
var on_data = {};
var hasRequiredOn_data;
function requireOn_data() {
  if (hasRequiredOn_data) return on_data;
  hasRequiredOn_data = 1;
  Object.defineProperty(on_data, "__esModule", { value: true });
  on_data.onData = onData;
  const utils_1 = requireUtils();
  function onData(emitter, { timeoutContext, signal }) {
    signal?.throwIfAborted();
    const unconsumedEvents = new utils_1.List();
    const unconsumedPromises = new utils_1.List();
    let error2 = null;
    let finished = false;
    const iterator = {
      next() {
        const value = unconsumedEvents.shift();
        if (value != null) {
          return Promise.resolve({ value, done: false });
        }
        if (error2 != null) {
          const p = Promise.reject(error2);
          error2 = null;
          return p;
        }
        if (finished)
          return closeHandler();
        const { promise, resolve, reject } = (0, utils_1.promiseWithResolvers)();
        unconsumedPromises.push({ resolve, reject });
        return promise;
      },
      return() {
        return closeHandler();
      },
      throw(err) {
        errorHandler(err);
        return Promise.resolve({ value: void 0, done: true });
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      async [Symbol.asyncDispose]() {
        await closeHandler();
      }
    };
    emitter.on("data", eventHandler);
    emitter.on("error", errorHandler);
    const abortListener = (0, utils_1.addAbortListener)(signal, function() {
      errorHandler(this.reason);
    });
    const timeoutForSocketRead = timeoutContext?.timeoutForSocketRead;
    timeoutForSocketRead?.throwIfExpired();
    timeoutForSocketRead?.then(void 0, errorHandler);
    return iterator;
    function eventHandler(value) {
      const promise = unconsumedPromises.shift();
      if (promise != null)
        promise.resolve({ value, done: false });
      else
        unconsumedEvents.push(value);
    }
    function errorHandler(err) {
      const promise = unconsumedPromises.shift();
      if (promise != null)
        promise.reject(err);
      else
        error2 = err;
      void closeHandler();
    }
    function closeHandler() {
      emitter.off("data", eventHandler);
      emitter.off("error", errorHandler);
      abortListener?.[utils_1.kDispose]();
      finished = true;
      timeoutForSocketRead?.clear();
      const doneResult = { value: void 0, done: finished };
      for (const promise of unconsumedPromises) {
        promise.resolve(doneResult);
      }
      return Promise.resolve(doneResult);
    }
  }
  return on_data;
}
var shared = {};
var topology_description = {};
var hasRequiredTopology_description;
function requireTopology_description() {
  if (hasRequiredTopology_description) return topology_description;
  hasRequiredTopology_description = 1;
  Object.defineProperty(topology_description, "__esModule", { value: true });
  topology_description.TopologyDescription = void 0;
  const bson_1 = requireBson();
  const WIRE_CONSTANTS = requireConstants$1();
  const error_1 = requireError();
  const utils_1 = requireUtils();
  const common_1 = requireCommon$1();
  const server_description_1 = requireServer_description();
  const MIN_SUPPORTED_SERVER_VERSION = WIRE_CONSTANTS.MIN_SUPPORTED_SERVER_VERSION;
  const MAX_SUPPORTED_SERVER_VERSION = WIRE_CONSTANTS.MAX_SUPPORTED_SERVER_VERSION;
  const MIN_SUPPORTED_WIRE_VERSION = WIRE_CONSTANTS.MIN_SUPPORTED_WIRE_VERSION;
  const MAX_SUPPORTED_WIRE_VERSION = WIRE_CONSTANTS.MAX_SUPPORTED_WIRE_VERSION;
  const MONGOS_OR_UNKNOWN = /* @__PURE__ */ new Set([common_1.ServerType.Mongos, common_1.ServerType.Unknown]);
  const MONGOS_OR_STANDALONE = /* @__PURE__ */ new Set([common_1.ServerType.Mongos, common_1.ServerType.Standalone]);
  const NON_PRIMARY_RS_MEMBERS = /* @__PURE__ */ new Set([
    common_1.ServerType.RSSecondary,
    common_1.ServerType.RSArbiter,
    common_1.ServerType.RSOther
  ]);
  class TopologyDescription {
    /**
     * Create a TopologyDescription
     */
    constructor(topologyType, serverDescriptions = null, setName = null, maxSetVersion = null, maxElectionId = null, commonWireVersion = null, options = null) {
      options = options ?? {};
      this.type = topologyType ?? common_1.TopologyType.Unknown;
      this.servers = serverDescriptions ?? /* @__PURE__ */ new Map();
      this.stale = false;
      this.compatible = true;
      this.heartbeatFrequencyMS = options.heartbeatFrequencyMS ?? 0;
      this.localThresholdMS = options.localThresholdMS ?? 15;
      this.setName = setName ?? null;
      this.maxElectionId = maxElectionId ?? null;
      this.maxSetVersion = maxSetVersion ?? null;
      this.commonWireVersion = commonWireVersion ?? 0;
      for (const serverDescription of this.servers.values()) {
        if (serverDescription.type === common_1.ServerType.Unknown || serverDescription.type === common_1.ServerType.LoadBalancer) {
          continue;
        }
        if (serverDescription.minWireVersion > MAX_SUPPORTED_WIRE_VERSION) {
          this.compatible = false;
          this.compatibilityError = `Server at ${serverDescription.address} requires wire version ${serverDescription.minWireVersion}, but this version of the driver only supports up to ${MAX_SUPPORTED_WIRE_VERSION} (MongoDB ${MAX_SUPPORTED_SERVER_VERSION})`;
        }
        if (serverDescription.maxWireVersion < MIN_SUPPORTED_WIRE_VERSION) {
          this.compatible = false;
          this.compatibilityError = `Server at ${serverDescription.address} reports wire version ${serverDescription.maxWireVersion}, but this version of the driver requires at least ${MIN_SUPPORTED_WIRE_VERSION} (MongoDB ${MIN_SUPPORTED_SERVER_VERSION}).`;
          break;
        }
      }
      this.logicalSessionTimeoutMinutes = null;
      for (const [, server2] of this.servers) {
        if (server2.isReadable) {
          if (server2.logicalSessionTimeoutMinutes == null) {
            this.logicalSessionTimeoutMinutes = null;
            break;
          }
          if (this.logicalSessionTimeoutMinutes == null) {
            this.logicalSessionTimeoutMinutes = server2.logicalSessionTimeoutMinutes;
            continue;
          }
          this.logicalSessionTimeoutMinutes = Math.min(this.logicalSessionTimeoutMinutes, server2.logicalSessionTimeoutMinutes);
        }
      }
    }
    /**
     * Returns a new TopologyDescription based on the SrvPollingEvent
     * @internal
     */
    updateFromSrvPollingEvent(ev, srvMaxHosts = 0) {
      const incomingHostnames = ev.hostnames();
      const currentHostnames = new Set(this.servers.keys());
      const hostnamesToAdd = new Set(incomingHostnames);
      const hostnamesToRemove = /* @__PURE__ */ new Set();
      for (const hostname of currentHostnames) {
        hostnamesToAdd.delete(hostname);
        if (!incomingHostnames.has(hostname)) {
          hostnamesToRemove.add(hostname);
        }
      }
      if (hostnamesToAdd.size === 0 && hostnamesToRemove.size === 0) {
        return this;
      }
      const serverDescriptions = new Map(this.servers);
      for (const removedHost of hostnamesToRemove) {
        serverDescriptions.delete(removedHost);
      }
      if (hostnamesToAdd.size > 0) {
        if (srvMaxHosts === 0) {
          for (const hostToAdd of hostnamesToAdd) {
            serverDescriptions.set(hostToAdd, new server_description_1.ServerDescription(hostToAdd));
          }
        } else if (serverDescriptions.size < srvMaxHosts) {
          const selectedHosts = (0, utils_1.shuffle)(hostnamesToAdd, srvMaxHosts - serverDescriptions.size);
          for (const selectedHostToAdd of selectedHosts) {
            serverDescriptions.set(selectedHostToAdd, new server_description_1.ServerDescription(selectedHostToAdd));
          }
        }
      }
      return new TopologyDescription(this.type, serverDescriptions, this.setName, this.maxSetVersion, this.maxElectionId, this.commonWireVersion, { heartbeatFrequencyMS: this.heartbeatFrequencyMS, localThresholdMS: this.localThresholdMS });
    }
    /**
     * Returns a copy of this description updated with a given ServerDescription
     * @internal
     */
    update(serverDescription) {
      const address = serverDescription.address;
      let { type: topologyType, setName, maxSetVersion, maxElectionId, commonWireVersion } = this;
      const serverType = serverDescription.type;
      const serverDescriptions = new Map(this.servers);
      if (serverDescription.maxWireVersion !== 0) {
        if (commonWireVersion === 0) {
          commonWireVersion = serverDescription.maxWireVersion;
        } else {
          commonWireVersion = Math.min(commonWireVersion, serverDescription.maxWireVersion);
        }
      }
      if (typeof serverDescription.setName === "string" && typeof setName === "string" && serverDescription.setName !== setName) {
        if (topologyType === common_1.TopologyType.Single) {
          serverDescription = new server_description_1.ServerDescription(address);
        } else {
          serverDescriptions.delete(address);
        }
      }
      serverDescriptions.set(address, serverDescription);
      if (topologyType === common_1.TopologyType.Single) {
        return new TopologyDescription(common_1.TopologyType.Single, serverDescriptions, setName, maxSetVersion, maxElectionId, commonWireVersion, { heartbeatFrequencyMS: this.heartbeatFrequencyMS, localThresholdMS: this.localThresholdMS });
      }
      if (topologyType === common_1.TopologyType.Unknown) {
        if (serverType === common_1.ServerType.Standalone && this.servers.size !== 1) {
          serverDescriptions.delete(address);
        } else {
          topologyType = topologyTypeForServerType(serverType);
        }
      }
      if (topologyType === common_1.TopologyType.Sharded) {
        if (!MONGOS_OR_UNKNOWN.has(serverType)) {
          serverDescriptions.delete(address);
        }
      }
      if (topologyType === common_1.TopologyType.ReplicaSetNoPrimary) {
        if (MONGOS_OR_STANDALONE.has(serverType)) {
          serverDescriptions.delete(address);
        }
        if (serverType === common_1.ServerType.RSPrimary) {
          const result = updateRsFromPrimary(serverDescriptions, serverDescription, setName, maxSetVersion, maxElectionId);
          topologyType = result[0];
          setName = result[1];
          maxSetVersion = result[2];
          maxElectionId = result[3];
        } else if (NON_PRIMARY_RS_MEMBERS.has(serverType)) {
          const result = updateRsNoPrimaryFromMember(serverDescriptions, serverDescription, setName);
          topologyType = result[0];
          setName = result[1];
        }
      }
      if (topologyType === common_1.TopologyType.ReplicaSetWithPrimary) {
        if (MONGOS_OR_STANDALONE.has(serverType)) {
          serverDescriptions.delete(address);
          topologyType = checkHasPrimary(serverDescriptions);
        } else if (serverType === common_1.ServerType.RSPrimary) {
          const result = updateRsFromPrimary(serverDescriptions, serverDescription, setName, maxSetVersion, maxElectionId);
          topologyType = result[0];
          setName = result[1];
          maxSetVersion = result[2];
          maxElectionId = result[3];
        } else if (NON_PRIMARY_RS_MEMBERS.has(serverType)) {
          topologyType = updateRsWithPrimaryFromMember(serverDescriptions, serverDescription, setName);
        } else {
          topologyType = checkHasPrimary(serverDescriptions);
        }
      }
      return new TopologyDescription(topologyType, serverDescriptions, setName, maxSetVersion, maxElectionId, commonWireVersion, { heartbeatFrequencyMS: this.heartbeatFrequencyMS, localThresholdMS: this.localThresholdMS });
    }
    get error() {
      const descriptionsWithError = Array.from(this.servers.values()).filter((sd) => sd.error);
      if (descriptionsWithError.length > 0) {
        return descriptionsWithError[0].error;
      }
      return null;
    }
    /**
     * Determines if the topology description has any known servers
     */
    get hasKnownServers() {
      return Array.from(this.servers.values()).some((sd) => sd.type !== common_1.ServerType.Unknown);
    }
    /**
     * Determines if this topology description has a data-bearing server available.
     */
    get hasDataBearingServers() {
      return Array.from(this.servers.values()).some((sd) => sd.isDataBearing);
    }
    /**
     * Determines if the topology has a definition for the provided address
     * @internal
     */
    hasServer(address) {
      return this.servers.has(address);
    }
    /**
     * Returns a JSON-serializable representation of the TopologyDescription.  This is primarily
     * intended for use with JSON.stringify().
     *
     * This method will not throw.
     */
    toJSON() {
      return bson_1.EJSON.serialize(this);
    }
  }
  topology_description.TopologyDescription = TopologyDescription;
  function topologyTypeForServerType(serverType) {
    switch (serverType) {
      case common_1.ServerType.Standalone:
        return common_1.TopologyType.Single;
      case common_1.ServerType.Mongos:
        return common_1.TopologyType.Sharded;
      case common_1.ServerType.RSPrimary:
        return common_1.TopologyType.ReplicaSetWithPrimary;
      case common_1.ServerType.RSOther:
      case common_1.ServerType.RSSecondary:
        return common_1.TopologyType.ReplicaSetNoPrimary;
      default:
        return common_1.TopologyType.Unknown;
    }
  }
  function updateRsFromPrimary(serverDescriptions, serverDescription, setName = null, maxSetVersion = null, maxElectionId = null) {
    const setVersionElectionIdMismatch = (serverDescription2, maxSetVersion2, maxElectionId2) => {
      return `primary marked stale due to electionId/setVersion mismatch: server setVersion: ${serverDescription2.setVersion}, server electionId: ${serverDescription2.electionId}, topology setVersion: ${maxSetVersion2}, topology electionId: ${maxElectionId2}`;
    };
    setName = setName || serverDescription.setName;
    if (setName !== serverDescription.setName) {
      serverDescriptions.delete(serverDescription.address);
      return [checkHasPrimary(serverDescriptions), setName, maxSetVersion, maxElectionId];
    }
    if (serverDescription.maxWireVersion >= 17) {
      const electionIdComparison = (0, utils_1.compareObjectId)(maxElectionId, serverDescription.electionId);
      const maxElectionIdIsEqual = electionIdComparison === 0;
      const maxElectionIdIsLess = electionIdComparison === -1;
      const maxSetVersionIsLessOrEqual = (maxSetVersion ?? -1) <= (serverDescription.setVersion ?? -1);
      if (maxElectionIdIsLess || maxElectionIdIsEqual && maxSetVersionIsLessOrEqual) {
        maxElectionId = serverDescription.electionId;
        maxSetVersion = serverDescription.setVersion;
      } else {
        serverDescriptions.set(serverDescription.address, new server_description_1.ServerDescription(serverDescription.address, void 0, {
          error: new error_1.MongoStalePrimaryError(setVersionElectionIdMismatch(serverDescription, maxSetVersion, maxElectionId))
        }));
        return [checkHasPrimary(serverDescriptions), setName, maxSetVersion, maxElectionId];
      }
    } else {
      const electionId = serverDescription.electionId ? serverDescription.electionId : null;
      if (serverDescription.setVersion && electionId) {
        if (maxSetVersion && maxElectionId) {
          if (maxSetVersion > serverDescription.setVersion || (0, utils_1.compareObjectId)(maxElectionId, electionId) > 0) {
            serverDescriptions.set(serverDescription.address, new server_description_1.ServerDescription(serverDescription.address, void 0, {
              error: new error_1.MongoStalePrimaryError(setVersionElectionIdMismatch(serverDescription, maxSetVersion, maxElectionId))
            }));
            return [checkHasPrimary(serverDescriptions), setName, maxSetVersion, maxElectionId];
          }
        }
        maxElectionId = serverDescription.electionId;
      }
      if (serverDescription.setVersion != null && (maxSetVersion == null || serverDescription.setVersion > maxSetVersion)) {
        maxSetVersion = serverDescription.setVersion;
      }
    }
    for (const [address, server2] of serverDescriptions) {
      if (server2.type === common_1.ServerType.RSPrimary && server2.address !== serverDescription.address) {
        serverDescriptions.set(address, new server_description_1.ServerDescription(server2.address, void 0, {
          error: new error_1.MongoStalePrimaryError("primary marked stale due to discovery of newer primary")
        }));
        break;
      }
    }
    serverDescription.allHosts.forEach((address) => {
      if (!serverDescriptions.has(address)) {
        serverDescriptions.set(address, new server_description_1.ServerDescription(address));
      }
    });
    const currentAddresses = Array.from(serverDescriptions.keys());
    const responseAddresses = serverDescription.allHosts;
    currentAddresses.filter((addr) => responseAddresses.indexOf(addr) === -1).forEach((address) => {
      serverDescriptions.delete(address);
    });
    return [checkHasPrimary(serverDescriptions), setName, maxSetVersion, maxElectionId];
  }
  function updateRsWithPrimaryFromMember(serverDescriptions, serverDescription, setName = null) {
    if (setName == null) {
      throw new error_1.MongoRuntimeError('Argument "setName" is required if connected to a replica set');
    }
    if (setName !== serverDescription.setName || serverDescription.me && serverDescription.address !== serverDescription.me) {
      serverDescriptions.delete(serverDescription.address);
    }
    return checkHasPrimary(serverDescriptions);
  }
  function updateRsNoPrimaryFromMember(serverDescriptions, serverDescription, setName = null) {
    const topologyType = common_1.TopologyType.ReplicaSetNoPrimary;
    setName = setName ?? serverDescription.setName;
    if (setName !== serverDescription.setName) {
      serverDescriptions.delete(serverDescription.address);
      return [topologyType, setName];
    }
    serverDescription.allHosts.forEach((address) => {
      if (!serverDescriptions.has(address)) {
        serverDescriptions.set(address, new server_description_1.ServerDescription(address));
      }
    });
    if (serverDescription.me && serverDescription.address !== serverDescription.me) {
      serverDescriptions.delete(serverDescription.address);
    }
    return [topologyType, setName];
  }
  function checkHasPrimary(serverDescriptions) {
    for (const serverDescription of serverDescriptions.values()) {
      if (serverDescription.type === common_1.ServerType.RSPrimary) {
        return common_1.TopologyType.ReplicaSetWithPrimary;
      }
    }
    return common_1.TopologyType.ReplicaSetNoPrimary;
  }
  return topology_description;
}
var hasRequiredShared;
function requireShared() {
  if (hasRequiredShared) return shared;
  hasRequiredShared = 1;
  Object.defineProperty(shared, "__esModule", { value: true });
  shared.getReadPreference = getReadPreference;
  shared.isSharded = isSharded;
  const error_1 = requireError();
  const read_preference_1 = requireRead_preference();
  const common_1 = requireCommon$1();
  const topology_description_1 = requireTopology_description();
  function getReadPreference(options) {
    let readPreference = options?.readPreference ?? read_preference_1.ReadPreference.primary;
    if (typeof readPreference === "string") {
      readPreference = read_preference_1.ReadPreference.fromString(readPreference);
    }
    if (!(readPreference instanceof read_preference_1.ReadPreference)) {
      throw new error_1.MongoInvalidArgumentError('Option "readPreference" must be a ReadPreference instance');
    }
    return readPreference;
  }
  function isSharded(topologyOrServer) {
    if (topologyOrServer == null) {
      return false;
    }
    if (topologyOrServer.description && topologyOrServer.description.type === common_1.ServerType.Mongos) {
      return true;
    }
    if (topologyOrServer.description && topologyOrServer.description instanceof topology_description_1.TopologyDescription) {
      const servers = Array.from(topologyOrServer.description.servers.values());
      return servers.some((server2) => server2.type === common_1.ServerType.Mongos);
    }
    return false;
  }
  return shared;
}
var hasRequiredConnection;
function requireConnection() {
  if (hasRequiredConnection) return connection;
  hasRequiredConnection = 1;
  Object.defineProperty(connection, "__esModule", { value: true });
  connection.CryptoConnection = connection.SizedMessageTransform = connection.Connection = void 0;
  connection.hasSessionSupport = hasSessionSupport;
  const stream_1 = require$$0$5;
  const timers_1 = require$$0$1;
  const bson_1 = requireBson();
  const constants_1 = requireConstants();
  const error_1 = requireError();
  const mongo_logger_1 = requireMongo_logger();
  const mongo_types_1 = requireMongo_types();
  const read_preference_1 = requireRead_preference();
  const common_1 = requireCommon$1();
  const sessions_1 = requireSessions();
  const timeout_1 = requireTimeout();
  const utils_1 = requireUtils();
  const command_monitoring_events_1 = requireCommand_monitoring_events();
  const commands_1 = requireCommands();
  const stream_description_1 = requireStream_description();
  const compression_1 = requireCompression();
  const on_data_1 = requireOn_data();
  const responses_1 = requireResponses();
  const shared_1 = requireShared();
  function hasSessionSupport(conn) {
    const description = conn.description;
    return description.logicalSessionTimeoutMinutes != null;
  }
  function streamIdentifier(stream, options) {
    if (options.proxyHost) {
      return options.hostAddress.toString();
    }
    const { remoteAddress, remotePort } = stream;
    if (typeof remoteAddress === "string" && typeof remotePort === "number") {
      return utils_1.HostAddress.fromHostPort(remoteAddress, remotePort).toString();
    }
    return bson_1.ByteUtils.toHex((0, utils_1.uuidV4)());
  }
  const _Connection = class _Connection extends mongo_types_1.TypedEventEmitter {
    constructor(stream, options) {
      super();
      this.lastHelloMS = -1;
      this.helloOk = false;
      this.delayedTimeoutId = null;
      this.closed = false;
      this.clusterTime = null;
      this.error = null;
      this.dataEvents = null;
      this.on("error", utils_1.noop);
      this.socket = stream;
      this.id = options.id;
      this.address = streamIdentifier(stream, options);
      this.socketTimeoutMS = options.socketTimeoutMS ?? 0;
      this.monitorCommands = options.monitorCommands;
      this.serverApi = options.serverApi;
      this.mongoLogger = options.mongoLogger;
      this.established = false;
      this.description = new stream_description_1.StreamDescription(this.address, options);
      this.generation = options.generation;
      this.lastUseTime = (0, utils_1.processTimeMS)();
      this.messageStream = this.socket.on("error", this.onSocketError.bind(this)).pipe(new SizedMessageTransform({ connection: this })).on("error", this.onTransformError.bind(this));
      this.socket.on("close", this.onClose.bind(this));
      this.socket.on("timeout", this.onTimeout.bind(this));
      this.messageStream.pause();
    }
    get hello() {
      return this.description.hello;
    }
    // the `connect` method stores the result of the handshake hello on the connection
    set hello(response) {
      this.description.receiveResponse(response);
      Object.freeze(this.description);
    }
    get serviceId() {
      return this.hello?.serviceId;
    }
    get loadBalanced() {
      return this.description.loadBalanced;
    }
    get idleTime() {
      return (0, utils_1.calculateDurationInMs)(this.lastUseTime);
    }
    get hasSessionSupport() {
      return this.description.logicalSessionTimeoutMinutes != null;
    }
    get supportsOpMsg() {
      return this.description != null && // TODO(NODE-6672,NODE-6287): This guard is primarily for maxWireVersion = 0
      (0, utils_1.maxWireVersion)(this) >= 6 && !this.description.__nodejs_mock_server__;
    }
    get shouldEmitAndLogCommand() {
      return (this.monitorCommands || this.established && !this.authContext?.reauthenticating && this.mongoLogger?.willLog(mongo_logger_1.MongoLoggableComponent.COMMAND, mongo_logger_1.SeverityLevel.DEBUG)) ?? false;
    }
    markAvailable() {
      this.lastUseTime = (0, utils_1.processTimeMS)();
    }
    onSocketError(cause) {
      this.onError(new error_1.MongoNetworkError(cause.message, { cause }));
    }
    onTransformError(error2) {
      this.onError(error2);
    }
    onError(error2) {
      this.cleanup(error2);
    }
    onClose() {
      const message = `connection ${this.id} to ${this.address} closed`;
      this.cleanup(new error_1.MongoNetworkError(message));
    }
    onTimeout() {
      this.delayedTimeoutId = (0, timers_1.setTimeout)(() => {
        const message = `connection ${this.id} to ${this.address} timed out`;
        const beforeHandshake = this.hello == null;
        this.cleanup(new error_1.MongoNetworkTimeoutError(message, { beforeHandshake }));
      }, 1).unref();
    }
    destroy() {
      if (this.closed) {
        return;
      }
      this.removeAllListeners(_Connection.PINNED);
      this.removeAllListeners(_Connection.UNPINNED);
      const message = `connection ${this.id} to ${this.address} closed`;
      this.cleanup(new error_1.MongoNetworkError(message));
    }
    /**
     * A method that cleans up the connection.  When `force` is true, this method
     * forcibly destroys the socket.
     *
     * If an error is provided, any in-flight operations will be closed with the error.
     *
     * This method does nothing if the connection is already closed.
     */
    cleanup(error2) {
      if (this.closed) {
        return;
      }
      this.socket.destroy();
      this.error = error2;
      this.dataEvents?.throw(error2).then(void 0, utils_1.squashError);
      this.closed = true;
      this.emit(_Connection.CLOSE);
    }
    prepareCommand(db2, command2, options) {
      let cmd = { ...command2 };
      const readPreference = (0, shared_1.getReadPreference)(options);
      const session = options?.session;
      let clusterTime = this.clusterTime;
      if (this.serverApi) {
        const { version: version2, strict, deprecationErrors } = this.serverApi;
        cmd.apiVersion = version2;
        if (strict != null)
          cmd.apiStrict = strict;
        if (deprecationErrors != null)
          cmd.apiDeprecationErrors = deprecationErrors;
      }
      if (this.hasSessionSupport && session) {
        if (session.clusterTime && clusterTime && session.clusterTime.clusterTime.greaterThan(clusterTime.clusterTime)) {
          clusterTime = session.clusterTime;
        }
        const sessionError = (0, sessions_1.applySession)(session, cmd, options);
        if (sessionError)
          throw sessionError;
      } else if (session?.explicit) {
        throw new error_1.MongoCompatibilityError("Current topology does not support sessions");
      }
      if (clusterTime) {
        cmd.$clusterTime = clusterTime;
      }
      if (this.description.type !== common_1.ServerType.Standalone) {
        if (!(0, shared_1.isSharded)(this) && !this.description.loadBalanced && this.supportsOpMsg && options.directConnection === true && readPreference?.mode === "primary") {
          cmd.$readPreference = read_preference_1.ReadPreference.primaryPreferred.toJSON();
        } else if ((0, shared_1.isSharded)(this) && !this.supportsOpMsg && readPreference?.mode !== "primary") {
          cmd = {
            $query: cmd,
            $readPreference: readPreference.toJSON()
          };
        } else if (readPreference?.mode !== "primary") {
          cmd.$readPreference = readPreference.toJSON();
        }
      }
      const commandOptions = {
        numberToSkip: 0,
        numberToReturn: -1,
        checkKeys: false,
        // This value is not overridable
        secondaryOk: readPreference.secondaryOk(),
        ...options
      };
      options.timeoutContext?.addMaxTimeMSToCommand(cmd, options);
      const message = this.supportsOpMsg ? new commands_1.OpMsgRequest(db2, cmd, commandOptions) : new commands_1.OpQueryRequest(db2, cmd, commandOptions);
      return message;
    }
    async *sendWire(message, options, responseType) {
      this.throwIfAborted();
      const timeout2 = options.socketTimeoutMS ?? options?.timeoutContext?.getSocketTimeoutMS() ?? this.socketTimeoutMS;
      this.socket.setTimeout(timeout2);
      try {
        await this.writeCommand(message, {
          agreedCompressor: this.description.compressor ?? "none",
          zlibCompressionLevel: this.description.zlibCompressionLevel,
          timeoutContext: options.timeoutContext,
          signal: options.signal
        });
        if (message.moreToCome) {
          yield responses_1.MongoDBResponse.empty;
          return;
        }
        this.throwIfAborted();
        if (options.timeoutContext?.csotEnabled() && options.timeoutContext.minRoundTripTime != null && options.timeoutContext.remainingTimeMS < options.timeoutContext.minRoundTripTime) {
          throw new error_1.MongoOperationTimeoutError("Server roundtrip time is greater than the time remaining");
        }
        for await (const response of this.readMany(options)) {
          this.socket.setTimeout(0);
          const bson2 = response.parse();
          const document2 = (responseType ?? responses_1.MongoDBResponse).make(bson2);
          yield document2;
          this.throwIfAborted();
          this.socket.setTimeout(timeout2);
        }
      } finally {
        this.socket.setTimeout(0);
      }
    }
    async *sendCommand(ns, command2, options, responseType) {
      options?.signal?.throwIfAborted();
      const message = this.prepareCommand(ns.db, command2, options);
      let started = 0;
      if (this.shouldEmitAndLogCommand) {
        started = (0, utils_1.processTimeMS)();
        this.emitAndLogCommand(this.monitorCommands, _Connection.COMMAND_STARTED, message.databaseName, this.established, new command_monitoring_events_1.CommandStartedEvent(this, message, this.description.serverConnectionId));
      }
      const bsonOptions = options.documentsReturnedIn == null || !options.raw ? options : {
        ...options,
        raw: false,
        fieldsAsRaw: { [options.documentsReturnedIn]: true }
      };
      let document2 = void 0;
      let object = void 0;
      try {
        this.throwIfAborted();
        for await (document2 of this.sendWire(message, options, responseType)) {
          object = void 0;
          if (options.session != null) {
            (0, sessions_1.updateSessionFromResponse)(options.session, document2);
          }
          if (document2.$clusterTime) {
            this.clusterTime = document2.$clusterTime;
            this.emit(_Connection.CLUSTER_TIME_RECEIVED, document2.$clusterTime);
          }
          if (document2.ok === 0) {
            if (options.timeoutContext?.csotEnabled() && document2.isMaxTimeExpiredError) {
              throw new error_1.MongoOperationTimeoutError("Server reported a timeout error", {
                cause: new error_1.MongoServerError(object ??= document2.toObject(bsonOptions))
              });
            }
            throw new error_1.MongoServerError(object ??= document2.toObject(bsonOptions));
          }
          if (this.shouldEmitAndLogCommand) {
            this.emitAndLogCommand(this.monitorCommands, _Connection.COMMAND_SUCCEEDED, message.databaseName, this.established, new command_monitoring_events_1.CommandSucceededEvent(this, message, message.moreToCome ? { ok: 1 } : object ??= document2.toObject(bsonOptions), started, this.description.serverConnectionId));
          }
          if (responseType == null) {
            yield object ??= document2.toObject(bsonOptions);
          } else {
            yield document2;
          }
          this.throwIfAborted();
        }
      } catch (error2) {
        if (options.session != null && !(error2 instanceof error_1.MongoServerError)) {
          (0, sessions_1.updateSessionFromResponse)(options.session, responses_1.MongoDBResponse.empty);
        }
        if (this.shouldEmitAndLogCommand) {
          this.emitAndLogCommand(this.monitorCommands, _Connection.COMMAND_FAILED, message.databaseName, this.established, new command_monitoring_events_1.CommandFailedEvent(this, message, error2, started, this.description.serverConnectionId));
        }
        throw error2;
      }
    }
    async command(ns, command2, options = {}, responseType) {
      this.throwIfAborted();
      options.signal?.throwIfAborted();
      for await (const document2 of this.sendCommand(ns, command2, options, responseType)) {
        if (options.timeoutContext?.csotEnabled()) {
          if (responses_1.MongoDBResponse.is(document2)) {
            if (document2.isMaxTimeExpiredError) {
              throw new error_1.MongoOperationTimeoutError("Server reported a timeout error", {
                cause: new error_1.MongoServerError(document2.toObject())
              });
            }
          } else {
            if (Array.isArray(document2?.writeErrors) && document2.writeErrors.some((error2) => error2?.code === error_1.MONGODB_ERROR_CODES.MaxTimeMSExpired) || document2?.writeConcernError?.code === error_1.MONGODB_ERROR_CODES.MaxTimeMSExpired) {
              throw new error_1.MongoOperationTimeoutError("Server reported a timeout error", {
                cause: new error_1.MongoServerError(document2)
              });
            }
          }
        }
        return document2;
      }
      throw new error_1.MongoUnexpectedServerResponseError("Unable to get response from server");
    }
    exhaustCommand(ns, command2, options, replyListener) {
      const exhaustLoop = async () => {
        this.throwIfAborted();
        for await (const reply of this.sendCommand(ns, command2, options)) {
          replyListener(void 0, reply);
          this.throwIfAborted();
        }
        throw new error_1.MongoUnexpectedServerResponseError("Server ended moreToCome unexpectedly");
      };
      exhaustLoop().then(void 0, replyListener);
    }
    throwIfAborted() {
      if (this.error)
        throw this.error;
    }
    /**
     * @internal
     *
     * Writes an OP_MSG or OP_QUERY request to the socket, optionally compressing the command. This method
     * waits until the socket's buffer has emptied (the Nodejs socket `drain` event has fired).
     */
    async writeCommand(command2, options) {
      const finalCommand = options.agreedCompressor === "none" || !commands_1.OpCompressedRequest.canCompress(command2) ? command2 : new commands_1.OpCompressedRequest(command2, {
        agreedCompressor: options.agreedCompressor ?? "none",
        zlibCompressionLevel: options.zlibCompressionLevel ?? 0
      });
      const buffer = bson_1.ByteUtils.concat(await finalCommand.toBin());
      if (options.timeoutContext?.csotEnabled()) {
        if (options.timeoutContext.minRoundTripTime != null && options.timeoutContext.remainingTimeMS < options.timeoutContext.minRoundTripTime) {
          throw new error_1.MongoOperationTimeoutError("Server roundtrip time is greater than the time remaining");
        }
      }
      try {
        if (this.socket.write(buffer))
          return;
      } catch (writeError) {
        const networkError = new error_1.MongoNetworkError("unexpected error writing to socket", {
          cause: writeError
        });
        this.onError(networkError);
        throw networkError;
      }
      const drainEvent = (0, utils_1.once)(this.socket, "drain", options);
      const timeout2 = options?.timeoutContext?.timeoutForSocketWrite;
      const drained = timeout2 ? Promise.race([drainEvent, timeout2]) : drainEvent;
      try {
        return await drained;
      } catch (writeError) {
        if (timeout_1.TimeoutError.is(writeError)) {
          const timeoutError = new error_1.MongoOperationTimeoutError("Timed out at socket write");
          this.onError(timeoutError);
          throw timeoutError;
        } else if (writeError === options.signal?.reason) {
          this.onError(writeError);
        }
        throw writeError;
      } finally {
        timeout2?.clear();
      }
    }
    /**
     * @internal
     *
     * Returns an async generator that yields full wire protocol messages from the underlying socket.  This function
     * yields messages until `moreToCome` is false or not present in a response, or the caller cancels the request
     * by calling `return` on the generator.
     *
     * Note that `for-await` loops call `return` automatically when the loop is exited.
     */
    async *readMany(options) {
      try {
        this.dataEvents = (0, on_data_1.onData)(this.messageStream, options);
        this.messageStream.resume();
        for await (const message of this.dataEvents) {
          const response = await (0, compression_1.decompressResponse)(message);
          yield response;
          if (!response.moreToCome) {
            return;
          }
        }
      } catch (readError) {
        if (timeout_1.TimeoutError.is(readError)) {
          const timeoutError = new error_1.MongoOperationTimeoutError(`Timed out during socket read (${readError.duration}ms)`);
          this.dataEvents = null;
          this.onError(timeoutError);
          throw timeoutError;
        } else if (readError === options.signal?.reason) {
          this.onError(readError);
        }
        throw readError;
      } finally {
        this.dataEvents = null;
        this.messageStream.pause();
      }
    }
  };
  _Connection.COMMAND_STARTED = constants_1.COMMAND_STARTED;
  _Connection.COMMAND_SUCCEEDED = constants_1.COMMAND_SUCCEEDED;
  _Connection.COMMAND_FAILED = constants_1.COMMAND_FAILED;
  _Connection.CLUSTER_TIME_RECEIVED = constants_1.CLUSTER_TIME_RECEIVED;
  _Connection.CLOSE = constants_1.CLOSE;
  _Connection.PINNED = constants_1.PINNED;
  _Connection.UNPINNED = constants_1.UNPINNED;
  let Connection = _Connection;
  connection.Connection = Connection;
  class SizedMessageTransform extends stream_1.Transform {
    constructor({ connection: connection2 }) {
      super({ writableObjectMode: false, readableObjectMode: true });
      this.bufferPool = new utils_1.BufferPool();
      this.connection = connection2;
    }
    _transform(chunk, encoding, callback) {
      if (this.connection.delayedTimeoutId != null) {
        (0, timers_1.clearTimeout)(this.connection.delayedTimeoutId);
        this.connection.delayedTimeoutId = null;
      }
      this.bufferPool.append(chunk);
      while (this.bufferPool.length) {
        const sizeOfMessage = this.bufferPool.getInt32();
        if (sizeOfMessage == null) {
          break;
        }
        if (sizeOfMessage < 0) {
          return callback(new error_1.MongoParseError(`Message size cannot be negative: ${sizeOfMessage}`));
        }
        if (sizeOfMessage > this.bufferPool.length) {
          break;
        }
        const message = this.bufferPool.read(sizeOfMessage);
        if (!this.push(message)) {
          return callback(new error_1.MongoRuntimeError(`SizedMessageTransform does not support backpressure`));
        }
      }
      callback();
    }
  }
  connection.SizedMessageTransform = SizedMessageTransform;
  class CryptoConnection extends Connection {
    constructor(stream, options) {
      super(stream, options);
      this.autoEncrypter = options.autoEncrypter;
    }
    async command(ns, cmd, options, responseType) {
      const { autoEncrypter } = this;
      if (!autoEncrypter) {
        throw new error_1.MongoRuntimeError("No AutoEncrypter available for encryption");
      }
      const serverWireVersion = (0, utils_1.maxWireVersion)(this);
      if (serverWireVersion === 0) {
        return await super.command(ns, cmd, options, responseType);
      }
      const sort2 = cmd.find || cmd.findAndModify ? cmd.sort : null;
      const indexKeys = cmd.createIndexes ? cmd.indexes.map((index) => index.key) : null;
      const encrypted = await autoEncrypter.encrypt(ns.toString(), cmd, options);
      if (sort2 != null && (cmd.find || cmd.findAndModify)) {
        encrypted.sort = sort2;
      }
      if (indexKeys != null && cmd.createIndexes) {
        for (const [offset, index] of indexKeys.entries()) {
          encrypted.indexes[offset].key = index;
        }
      }
      const encryptedResponse = await super.command(
        ns,
        encrypted,
        options,
        // Eventually we want to require `responseType` which means we would satisfy `T` as the return type.
        // In the meantime, we want encryptedResponse to always be _at least_ a MongoDBResponse if not a more specific subclass
        // So that we can ensure we have access to the on-demand APIs for decorate response
        responseType ?? responses_1.MongoDBResponse
      );
      const result = await autoEncrypter.decrypt(encryptedResponse.toBytes(), options);
      const decryptedResponse = responseType?.make(result) ?? (0, bson_1.deserialize)(result, options);
      if (autoEncrypter[constants_1.kDecorateResult]) {
        if (responseType == null) {
          (0, utils_1.decorateDecryptionResult)(decryptedResponse, encryptedResponse.toObject(), true);
        } else if (decryptedResponse instanceof responses_1.CursorResponse) {
          decryptedResponse.encryptedResponse = encryptedResponse;
        }
      }
      return decryptedResponse;
    }
  }
  connection.CryptoConnection = CryptoConnection;
  return connection;
}
var hasRequiredConnect;
function requireConnect() {
  if (hasRequiredConnect) return connect;
  hasRequiredConnect = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LEGAL_TCP_SOCKET_OPTIONS = exports.LEGAL_TLS_SOCKET_OPTIONS = exports.DEFAULT_KEEP_ALIVE_INITIAL_DELAY_MS = void 0;
    exports.connect = connect2;
    exports.makeConnection = makeConnection;
    exports.performInitialHandshake = performInitialHandshake;
    exports.prepareHandshakeDocument = prepareHandshakeDocument;
    exports.makeSocket = makeSocket;
    const net = require$$0$8;
    const tls = require$$3$1;
    const constants_1 = requireConstants();
    const deps_1 = requireDeps();
    const error_1 = requireError();
    const utils_1 = requireUtils();
    const auth_provider_1 = requireAuth_provider();
    const providers_1 = requireProviders$1();
    const connection_1 = requireConnection();
    const constants_2 = requireConstants$1();
    function applyBackpressureLabels(error2) {
      error2.addErrorLabel(error_1.MongoErrorLabel.SystemOverloadedError);
      error2.addErrorLabel(error_1.MongoErrorLabel.RetryableError);
    }
    async function connect2(options) {
      let connection2 = null;
      try {
        const socket = await makeSocket(options);
        connection2 = makeConnection(options, socket);
        await performInitialHandshake(connection2, options);
        return connection2;
      } catch (error2) {
        connection2?.destroy();
        throw error2;
      }
    }
    function makeConnection(options, socket) {
      let ConnectionType = options.connectionType ?? connection_1.Connection;
      if (options.autoEncrypter) {
        ConnectionType = connection_1.CryptoConnection;
      }
      return new ConnectionType(socket, options);
    }
    function checkSupportedServer(hello, options) {
      const maxWireVersion = Number(hello.maxWireVersion);
      const minWireVersion = Number(hello.minWireVersion);
      const serverVersionHighEnough = !Number.isNaN(maxWireVersion) && maxWireVersion >= constants_2.MIN_SUPPORTED_WIRE_VERSION;
      const serverVersionLowEnough = !Number.isNaN(minWireVersion) && minWireVersion <= constants_2.MAX_SUPPORTED_WIRE_VERSION;
      if (serverVersionHighEnough) {
        if (serverVersionLowEnough) {
          return null;
        }
        const message2 = `Server at ${options.hostAddress} reports minimum wire version ${JSON.stringify(hello.minWireVersion)}, but this version of the Node.js Driver requires at most ${constants_2.MAX_SUPPORTED_WIRE_VERSION} (MongoDB ${constants_2.MAX_SUPPORTED_SERVER_VERSION})`;
        return new error_1.MongoCompatibilityError(message2);
      }
      const message = `Server at ${options.hostAddress} reports maximum wire version ${JSON.stringify(hello.maxWireVersion) ?? 0}, but this version of the Node.js Driver requires at least ${constants_2.MIN_SUPPORTED_WIRE_VERSION} (MongoDB ${constants_2.MIN_SUPPORTED_SERVER_VERSION})`;
      return new error_1.MongoCompatibilityError(message);
    }
    async function performInitialHandshake(conn, options) {
      const credentials = options.credentials;
      if (credentials) {
        if (!(credentials.mechanism === providers_1.AuthMechanism.MONGODB_DEFAULT) && !options.authProviders.getOrCreateProvider(credentials.mechanism, credentials.mechanismProperties)) {
          throw new error_1.MongoInvalidArgumentError(`AuthMechanism '${credentials.mechanism}' not supported`);
        }
      }
      const authContext = new auth_provider_1.AuthContext(conn, credentials, options);
      conn.authContext = authContext;
      const handshakeDoc = await prepareHandshakeDocument(authContext);
      const handshakeOptions = { ...options, raw: false };
      if (typeof options.connectTimeoutMS === "number") {
        handshakeOptions.socketTimeoutMS = options.connectTimeoutMS;
      }
      const start = (/* @__PURE__ */ new Date()).getTime();
      const response = await executeHandshake(handshakeDoc, handshakeOptions);
      if (!("isWritablePrimary" in response)) {
        response.isWritablePrimary = response[constants_1.LEGACY_HELLO_COMMAND];
      }
      if (response.helloOk) {
        conn.helloOk = true;
      }
      const supportedServerErr = checkSupportedServer(response, options);
      if (supportedServerErr) {
        throw supportedServerErr;
      }
      if (options.loadBalanced) {
        if (!response.serviceId) {
          throw new error_1.MongoCompatibilityError("Driver attempted to initialize in load balancing mode, but the server does not support this mode.");
        }
      }
      conn.hello = response;
      conn.lastHelloMS = (/* @__PURE__ */ new Date()).getTime() - start;
      if (!response.arbiterOnly && credentials) {
        authContext.response = response;
        const resolvedCredentials = credentials.resolveAuthMechanism(response);
        const provider = options.authProviders.getOrCreateProvider(resolvedCredentials.mechanism, resolvedCredentials.mechanismProperties);
        if (!provider) {
          throw new error_1.MongoInvalidArgumentError(`No AuthProvider for ${resolvedCredentials.mechanism} defined.`);
        }
        try {
          await provider.auth(authContext);
        } catch (error2) {
          if (error2 instanceof error_1.MongoError) {
            error2.addErrorLabel(error_1.MongoErrorLabel.HandshakeError);
            if ((0, error_1.needsRetryableWriteLabel)(error2, response.maxWireVersion, conn.description.type)) {
              error2.addErrorLabel(error_1.MongoErrorLabel.RetryableWriteError);
            }
          }
          throw error2;
        }
      }
      conn.established = true;
      async function executeHandshake(handshakeDoc2, handshakeOptions2) {
        try {
          const handshakeResponse = await conn.command((0, utils_1.ns)("admin.$cmd"), handshakeDoc2, handshakeOptions2);
          return handshakeResponse;
        } catch (error2) {
          if (error2 instanceof error_1.MongoError) {
            error2.addErrorLabel(error_1.MongoErrorLabel.HandshakeError);
          }
          if (error2 instanceof error_1.MongoNetworkError) {
            applyBackpressureLabels(error2);
          }
          throw error2;
        }
      }
    }
    async function prepareHandshakeDocument(authContext) {
      const options = authContext.options;
      const compressors = options.compressors ? options.compressors : [];
      const { serverApi } = authContext.connection;
      const clientMetadata = await options.metadata;
      const handshakeDoc = {
        [serverApi?.version || options.loadBalanced === true ? "hello" : constants_1.LEGACY_HELLO_COMMAND]: 1,
        backpressure: true,
        helloOk: true,
        client: clientMetadata,
        compression: compressors
      };
      if (options.loadBalanced === true) {
        handshakeDoc.loadBalanced = true;
      }
      const credentials = authContext.credentials;
      if (credentials) {
        if (credentials.mechanism === providers_1.AuthMechanism.MONGODB_DEFAULT && credentials.username) {
          handshakeDoc.saslSupportedMechs = `${credentials.source}.${credentials.username}`;
          const provider2 = authContext.options.authProviders.getOrCreateProvider(providers_1.AuthMechanism.MONGODB_SCRAM_SHA256, credentials.mechanismProperties);
          if (!provider2) {
            throw new error_1.MongoInvalidArgumentError(`No AuthProvider for ${providers_1.AuthMechanism.MONGODB_SCRAM_SHA256} defined.`);
          }
          return await provider2.prepare(handshakeDoc, authContext);
        }
        const provider = authContext.options.authProviders.getOrCreateProvider(credentials.mechanism, credentials.mechanismProperties);
        if (!provider) {
          throw new error_1.MongoInvalidArgumentError(`No AuthProvider for ${credentials.mechanism} defined.`);
        }
        return await provider.prepare(handshakeDoc, authContext);
      }
      return handshakeDoc;
    }
    exports.DEFAULT_KEEP_ALIVE_INITIAL_DELAY_MS = 12e4;
    exports.LEGAL_TLS_SOCKET_OPTIONS = [
      "allowPartialTrustChain",
      "ALPNProtocols",
      "ca",
      "cert",
      "checkServerIdentity",
      "ciphers",
      "crl",
      "ecdhCurve",
      "key",
      "minDHSize",
      "passphrase",
      "pfx",
      "rejectUnauthorized",
      "secureContext",
      "secureProtocol",
      "servername",
      "session"
    ];
    exports.LEGAL_TCP_SOCKET_OPTIONS = [
      "autoSelectFamily",
      "autoSelectFamilyAttemptTimeout",
      "keepAliveInitialDelay",
      "family",
      "hints",
      "localAddress",
      "localPort",
      "lookup"
    ];
    function parseConnectOptions(options) {
      const hostAddress = options.hostAddress;
      if (!hostAddress)
        throw new error_1.MongoInvalidArgumentError('Option "hostAddress" is required');
      const result = {};
      for (const name of exports.LEGAL_TCP_SOCKET_OPTIONS) {
        if (options[name] != null) {
          result[name] = options[name];
        }
      }
      result.keepAliveInitialDelay ??= exports.DEFAULT_KEEP_ALIVE_INITIAL_DELAY_MS;
      result.keepAlive = true;
      result.noDelay = options.noDelay ?? true;
      if (typeof hostAddress.socketPath === "string") {
        result.path = hostAddress.socketPath;
        return result;
      } else if (typeof hostAddress.host === "string") {
        result.host = hostAddress.host;
        result.port = hostAddress.port;
        return result;
      } else {
        throw new error_1.MongoRuntimeError(`Unexpected HostAddress ${JSON.stringify(hostAddress)}`);
      }
    }
    function parseSslOptions(options) {
      const result = parseConnectOptions(options);
      for (const name of exports.LEGAL_TLS_SOCKET_OPTIONS) {
        if (options[name] != null) {
          result[name] = options[name];
        }
      }
      if (options.existingSocket) {
        result.socket = options.existingSocket;
      }
      if (result.servername == null && result.host && !net.isIP(result.host)) {
        result.servername = result.host;
      }
      return result;
    }
    async function makeSocket(options) {
      const useTLS = options.tls ?? false;
      const connectTimeoutMS = options.connectTimeoutMS ?? 3e4;
      const existingSocket = options.existingSocket;
      const keepAliveInitialDelay = options.keepAliveInitialDelay ?? exports.DEFAULT_KEEP_ALIVE_INITIAL_DELAY_MS;
      const noDelay = options.noDelay ?? true;
      let socket;
      if (options.proxyHost != null) {
        return await makeSocks5Connection({
          ...options,
          connectTimeoutMS
          // Should always be present for Socks5
        });
      }
      if (useTLS) {
        const tlsSocket = tls.connect(parseSslOptions(options));
        if (typeof tlsSocket.disableRenegotiation === "function") {
          tlsSocket.disableRenegotiation();
        }
        socket = tlsSocket;
      } else if (existingSocket) {
        socket = existingSocket;
      } else {
        socket = net.createConnection(parseConnectOptions(options));
      }
      socket.setKeepAlive(true, keepAliveInitialDelay);
      socket.setNoDelay(noDelay);
      socket.setTimeout(connectTimeoutMS);
      let cancellationHandler = null;
      const { promise: connectedSocket, resolve, reject } = (0, utils_1.promiseWithResolvers)();
      if (existingSocket) {
        resolve(socket);
      } else {
        const start = performance.now();
        const connectEvent = useTLS ? "secureConnect" : "connect";
        socket.once(connectEvent, () => resolve(socket)).once("error", (cause) => reject(new error_1.MongoNetworkError(error_1.MongoError.buildErrorMessage(cause), { cause }))).once("timeout", () => {
          reject(new error_1.MongoNetworkTimeoutError(`Socket '${connectEvent}' timed out after ${performance.now() - start | 0}ms (connectTimeoutMS: ${connectTimeoutMS})`));
        }).once("close", () => reject(new error_1.MongoNetworkError(`Socket closed after ${performance.now() - start | 0} during connection establishment`)));
        if (options.cancellationToken != null) {
          cancellationHandler = () => reject(new error_1.MongoNetworkError(`Socket connection establishment was cancelled after ${performance.now() - start | 0}`));
          options.cancellationToken.once("cancel", cancellationHandler);
        }
      }
      try {
        socket = await connectedSocket;
        return socket;
      } catch (error2) {
        applyBackpressureLabels(error2);
        socket.destroy();
        throw error2;
      } finally {
        socket.setTimeout(0);
        if (cancellationHandler != null) {
          options.cancellationToken?.removeListener("cancel", cancellationHandler);
        }
      }
    }
    let socks = null;
    function loadSocks() {
      if (socks == null) {
        const socksImport = (0, deps_1.getSocks)();
        if ("kModuleError" in socksImport) {
          throw socksImport.kModuleError;
        }
        socks = socksImport;
      }
      return socks;
    }
    async function makeSocks5Connection(options) {
      const hostAddress = utils_1.HostAddress.fromHostPort(
        options.proxyHost ?? "",
        // proxyHost is guaranteed to set here
        options.proxyPort ?? 1080
      );
      const rawSocket = await makeSocket({
        ...options,
        hostAddress,
        tls: false,
        proxyHost: void 0
      });
      const destination = parseConnectOptions(options);
      if (typeof destination.host !== "string" || typeof destination.port !== "number") {
        throw new error_1.MongoInvalidArgumentError("Can only make Socks5 connections to TCP hosts");
      }
      socks ??= loadSocks();
      let existingSocket;
      try {
        const connection2 = await socks.SocksClient.createConnection({
          existing_socket: rawSocket,
          timeout: options.connectTimeoutMS,
          command: "connect",
          destination: {
            host: destination.host,
            port: destination.port
          },
          proxy: {
            // host and port are ignored because we pass existing_socket
            host: "iLoveJavaScript",
            port: 0,
            type: 5,
            userId: options.proxyUsername || void 0,
            password: options.proxyPassword || void 0
          }
        });
        existingSocket = connection2.socket;
      } catch (cause) {
        throw new error_1.MongoNetworkError(error_1.MongoError.buildErrorMessage(cause), { cause });
      }
      return await makeSocket({ ...options, existingSocket, proxyHost: void 0 });
    }
  })(connect);
  return connect;
}
var events = {};
var hasRequiredEvents;
function requireEvents() {
  if (hasRequiredEvents) return events;
  hasRequiredEvents = 1;
  Object.defineProperty(events, "__esModule", { value: true });
  events.ServerHeartbeatFailedEvent = events.ServerHeartbeatSucceededEvent = events.ServerHeartbeatStartedEvent = events.TopologyClosedEvent = events.TopologyOpeningEvent = events.TopologyDescriptionChangedEvent = events.ServerClosedEvent = events.ServerOpeningEvent = events.ServerDescriptionChangedEvent = void 0;
  const constants_1 = requireConstants();
  class ServerDescriptionChangedEvent {
    /** @internal */
    constructor(topologyId, address, previousDescription, newDescription) {
      this.name = constants_1.SERVER_DESCRIPTION_CHANGED;
      this.topologyId = topologyId;
      this.address = address;
      this.previousDescription = previousDescription;
      this.newDescription = newDescription;
    }
  }
  events.ServerDescriptionChangedEvent = ServerDescriptionChangedEvent;
  class ServerOpeningEvent {
    /** @internal */
    constructor(topologyId, address) {
      this.name = constants_1.SERVER_OPENING;
      this.topologyId = topologyId;
      this.address = address;
    }
  }
  events.ServerOpeningEvent = ServerOpeningEvent;
  class ServerClosedEvent {
    /** @internal */
    constructor(topologyId, address) {
      this.name = constants_1.SERVER_CLOSED;
      this.topologyId = topologyId;
      this.address = address;
    }
  }
  events.ServerClosedEvent = ServerClosedEvent;
  class TopologyDescriptionChangedEvent {
    /** @internal */
    constructor(topologyId, previousDescription, newDescription) {
      this.name = constants_1.TOPOLOGY_DESCRIPTION_CHANGED;
      this.topologyId = topologyId;
      this.previousDescription = previousDescription;
      this.newDescription = newDescription;
    }
  }
  events.TopologyDescriptionChangedEvent = TopologyDescriptionChangedEvent;
  class TopologyOpeningEvent {
    /** @internal */
    constructor(topologyId) {
      this.name = constants_1.TOPOLOGY_OPENING;
      this.topologyId = topologyId;
    }
  }
  events.TopologyOpeningEvent = TopologyOpeningEvent;
  class TopologyClosedEvent {
    /** @internal */
    constructor(topologyId) {
      this.name = constants_1.TOPOLOGY_CLOSED;
      this.topologyId = topologyId;
    }
  }
  events.TopologyClosedEvent = TopologyClosedEvent;
  class ServerHeartbeatStartedEvent {
    /** @internal */
    constructor(connectionId, awaited) {
      this.name = constants_1.SERVER_HEARTBEAT_STARTED;
      this.connectionId = connectionId;
      this.awaited = awaited;
    }
  }
  events.ServerHeartbeatStartedEvent = ServerHeartbeatStartedEvent;
  class ServerHeartbeatSucceededEvent {
    /** @internal */
    constructor(connectionId, duration, reply, awaited) {
      this.name = constants_1.SERVER_HEARTBEAT_SUCCEEDED;
      this.connectionId = connectionId;
      this.duration = duration;
      this.reply = reply ?? {};
      this.awaited = awaited;
    }
  }
  events.ServerHeartbeatSucceededEvent = ServerHeartbeatSucceededEvent;
  class ServerHeartbeatFailedEvent {
    /** @internal */
    constructor(connectionId, duration, failure, awaited) {
      this.name = constants_1.SERVER_HEARTBEAT_FAILED;
      this.connectionId = connectionId;
      this.duration = duration;
      this.failure = failure;
      this.awaited = awaited;
    }
  }
  events.ServerHeartbeatFailedEvent = ServerHeartbeatFailedEvent;
  return events;
}
var server = {};
var connection_pool = {};
var connection_pool_events = {};
var hasRequiredConnection_pool_events;
function requireConnection_pool_events() {
  if (hasRequiredConnection_pool_events) return connection_pool_events;
  hasRequiredConnection_pool_events = 1;
  Object.defineProperty(connection_pool_events, "__esModule", { value: true });
  connection_pool_events.ConnectionPoolClearedEvent = connection_pool_events.ConnectionCheckedInEvent = connection_pool_events.ConnectionCheckedOutEvent = connection_pool_events.ConnectionCheckOutFailedEvent = connection_pool_events.ConnectionCheckOutStartedEvent = connection_pool_events.ConnectionClosedEvent = connection_pool_events.ConnectionReadyEvent = connection_pool_events.ConnectionCreatedEvent = connection_pool_events.ConnectionPoolClosedEvent = connection_pool_events.ConnectionPoolReadyEvent = connection_pool_events.ConnectionPoolCreatedEvent = connection_pool_events.ConnectionPoolMonitoringEvent = void 0;
  const constants_1 = requireConstants();
  const utils_1 = requireUtils();
  class ConnectionPoolMonitoringEvent {
    /** @internal */
    constructor(pool) {
      this.time = /* @__PURE__ */ new Date();
      this.address = pool.address;
    }
  }
  connection_pool_events.ConnectionPoolMonitoringEvent = ConnectionPoolMonitoringEvent;
  class ConnectionPoolCreatedEvent extends ConnectionPoolMonitoringEvent {
    /** @internal */
    constructor(pool) {
      super(pool);
      this.name = constants_1.CONNECTION_POOL_CREATED;
      const { maxConnecting, maxPoolSize, minPoolSize, maxIdleTimeMS, waitQueueTimeoutMS } = pool.options;
      this.options = { maxConnecting, maxPoolSize, minPoolSize, maxIdleTimeMS, waitQueueTimeoutMS };
    }
  }
  connection_pool_events.ConnectionPoolCreatedEvent = ConnectionPoolCreatedEvent;
  class ConnectionPoolReadyEvent extends ConnectionPoolMonitoringEvent {
    /** @internal */
    constructor(pool) {
      super(pool);
      this.name = constants_1.CONNECTION_POOL_READY;
    }
  }
  connection_pool_events.ConnectionPoolReadyEvent = ConnectionPoolReadyEvent;
  class ConnectionPoolClosedEvent extends ConnectionPoolMonitoringEvent {
    /** @internal */
    constructor(pool) {
      super(pool);
      this.name = constants_1.CONNECTION_POOL_CLOSED;
    }
  }
  connection_pool_events.ConnectionPoolClosedEvent = ConnectionPoolClosedEvent;
  class ConnectionCreatedEvent extends ConnectionPoolMonitoringEvent {
    /** @internal */
    constructor(pool, connection2) {
      super(pool);
      this.name = constants_1.CONNECTION_CREATED;
      this.connectionId = connection2.id;
    }
  }
  connection_pool_events.ConnectionCreatedEvent = ConnectionCreatedEvent;
  class ConnectionReadyEvent extends ConnectionPoolMonitoringEvent {
    /** @internal */
    constructor(pool, connection2, connectionCreatedEventTime) {
      super(pool);
      this.name = constants_1.CONNECTION_READY;
      this.durationMS = (0, utils_1.processTimeMS)() - connectionCreatedEventTime;
      this.connectionId = connection2.id;
    }
  }
  connection_pool_events.ConnectionReadyEvent = ConnectionReadyEvent;
  class ConnectionClosedEvent extends ConnectionPoolMonitoringEvent {
    /** @internal */
    constructor(pool, connection2, reason, error2) {
      super(pool);
      this.name = constants_1.CONNECTION_CLOSED;
      this.connectionId = connection2.id;
      this.reason = reason;
      this.serviceId = connection2.serviceId;
      this.error = error2 ?? null;
    }
  }
  connection_pool_events.ConnectionClosedEvent = ConnectionClosedEvent;
  class ConnectionCheckOutStartedEvent extends ConnectionPoolMonitoringEvent {
    /** @internal */
    constructor(pool) {
      super(pool);
      this.name = constants_1.CONNECTION_CHECK_OUT_STARTED;
    }
  }
  connection_pool_events.ConnectionCheckOutStartedEvent = ConnectionCheckOutStartedEvent;
  class ConnectionCheckOutFailedEvent extends ConnectionPoolMonitoringEvent {
    /** @internal */
    constructor(pool, reason, checkoutTime, error2) {
      super(pool);
      this.name = constants_1.CONNECTION_CHECK_OUT_FAILED;
      this.durationMS = (0, utils_1.processTimeMS)() - checkoutTime;
      this.reason = reason;
      this.error = error2;
    }
  }
  connection_pool_events.ConnectionCheckOutFailedEvent = ConnectionCheckOutFailedEvent;
  class ConnectionCheckedOutEvent extends ConnectionPoolMonitoringEvent {
    /** @internal */
    constructor(pool, connection2, checkoutTime) {
      super(pool);
      this.name = constants_1.CONNECTION_CHECKED_OUT;
      this.durationMS = (0, utils_1.processTimeMS)() - checkoutTime;
      this.connectionId = connection2.id;
    }
  }
  connection_pool_events.ConnectionCheckedOutEvent = ConnectionCheckedOutEvent;
  class ConnectionCheckedInEvent extends ConnectionPoolMonitoringEvent {
    /** @internal */
    constructor(pool, connection2) {
      super(pool);
      this.name = constants_1.CONNECTION_CHECKED_IN;
      this.connectionId = connection2.id;
    }
  }
  connection_pool_events.ConnectionCheckedInEvent = ConnectionCheckedInEvent;
  class ConnectionPoolClearedEvent extends ConnectionPoolMonitoringEvent {
    /** @internal */
    constructor(pool, options = {}) {
      super(pool);
      this.name = constants_1.CONNECTION_POOL_CLEARED;
      this.serviceId = options.serviceId;
      this.interruptInUseConnections = options.interruptInUseConnections;
    }
  }
  connection_pool_events.ConnectionPoolClearedEvent = ConnectionPoolClearedEvent;
  return connection_pool_events;
}
var errors = {};
var hasRequiredErrors;
function requireErrors() {
  if (hasRequiredErrors) return errors;
  hasRequiredErrors = 1;
  Object.defineProperty(errors, "__esModule", { value: true });
  errors.WaitQueueTimeoutError = errors.PoolClearedOnNetworkError = errors.PoolClearedError = errors.PoolClosedError = void 0;
  const error_1 = requireError();
  class PoolClosedError extends error_1.MongoDriverError {
    /**
     * **Do not use this constructor!**
     *
     * Meant for internal use only.
     *
     * @remarks
     * This class is only meant to be constructed within the driver. This constructor is
     * not subject to semantic versioning compatibility guarantees and may change at any time.
     *
     * @public
     **/
    constructor(pool) {
      super("Attempted to check out a connection from closed connection pool");
      this.address = pool.address;
    }
    get name() {
      return "MongoPoolClosedError";
    }
  }
  errors.PoolClosedError = PoolClosedError;
  class PoolClearedError extends error_1.MongoNetworkError {
    /**
     * **Do not use this constructor!**
     *
     * Meant for internal use only.
     *
     * @remarks
     * This class is only meant to be constructed within the driver. This constructor is
     * not subject to semantic versioning compatibility guarantees and may change at any time.
     *
     * @public
     **/
    constructor(pool, message) {
      const errorMessage = message ? message : `Connection pool for ${pool.address} was cleared because another operation failed with: "${pool.serverError?.message}"`;
      super(errorMessage, pool.serverError ? { cause: pool.serverError } : void 0);
      this.address = pool.address;
      this.addErrorLabel(error_1.MongoErrorLabel.PoolRequestedRetry);
    }
    get name() {
      return "MongoPoolClearedError";
    }
  }
  errors.PoolClearedError = PoolClearedError;
  class PoolClearedOnNetworkError extends PoolClearedError {
    /**
     * **Do not use this constructor!**
     *
     * Meant for internal use only.
     *
     * @remarks
     * This class is only meant to be constructed within the driver. This constructor is
     * not subject to semantic versioning compatibility guarantees and may change at any time.
     *
     * @public
     **/
    constructor(pool) {
      super(pool, `Connection to ${pool.address} interrupted due to server monitor timeout`);
    }
    get name() {
      return "PoolClearedOnNetworkError";
    }
  }
  errors.PoolClearedOnNetworkError = PoolClearedOnNetworkError;
  class WaitQueueTimeoutError extends error_1.MongoDriverError {
    /**
     * **Do not use this constructor!**
     *
     * Meant for internal use only.
     *
     * @remarks
     * This class is only meant to be constructed within the driver. This constructor is
     * not subject to semantic versioning compatibility guarantees and may change at any time.
     *
     * @public
     **/
    constructor(message, address) {
      super(message);
      this.address = address;
    }
    get name() {
      return "MongoWaitQueueTimeoutError";
    }
  }
  errors.WaitQueueTimeoutError = WaitQueueTimeoutError;
  return errors;
}
var hasRequiredConnection_pool;
function requireConnection_pool() {
  if (hasRequiredConnection_pool) return connection_pool;
  hasRequiredConnection_pool = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ConnectionPool = exports.PoolState = void 0;
    const timers_1 = require$$0$1;
    const constants_1 = requireConstants();
    const error_1 = requireError();
    const mongo_types_1 = requireMongo_types();
    const timeout_1 = requireTimeout();
    const utils_1 = requireUtils();
    const connect_1 = requireConnect();
    const connection_1 = requireConnection();
    const connection_pool_events_1 = requireConnection_pool_events();
    const errors_1 = requireErrors();
    const metrics_1 = requireMetrics();
    exports.PoolState = Object.freeze({
      paused: "paused",
      ready: "ready",
      closed: "closed"
    });
    const _ConnectionPool = class _ConnectionPool extends mongo_types_1.TypedEventEmitter {
      constructor(server2, options) {
        super();
        this.on("error", utils_1.noop);
        this.options = Object.freeze({
          connectionType: connection_1.Connection,
          ...options,
          maxPoolSize: options.maxPoolSize ?? 100,
          minPoolSize: options.minPoolSize ?? 0,
          maxConnecting: options.maxConnecting ?? 2,
          maxIdleTimeMS: options.maxIdleTimeMS ?? 0,
          waitQueueTimeoutMS: options.waitQueueTimeoutMS ?? 0,
          minPoolSizeCheckFrequencyMS: options.minPoolSizeCheckFrequencyMS ?? 100,
          autoEncrypter: options.autoEncrypter
        });
        if (this.options.minPoolSize > this.options.maxPoolSize) {
          throw new error_1.MongoInvalidArgumentError("Connection pool minimum size must not be greater than maximum pool size");
        }
        this.poolState = exports.PoolState.paused;
        this.server = server2;
        this.connections = new utils_1.List();
        this.pending = 0;
        this.checkedOut = /* @__PURE__ */ new Set();
        this.minPoolSizeTimer = void 0;
        this.generation = 0;
        this.serviceGenerations = /* @__PURE__ */ new Map();
        this.connectionCounter = (0, utils_1.makeCounter)(1);
        this.cancellationToken = new mongo_types_1.CancellationToken();
        this.cancellationToken.setMaxListeners(Infinity);
        this.waitQueue = new utils_1.List();
        this.metrics = new metrics_1.ConnectionPoolMetrics();
        this.processingWaitQueue = false;
        this.mongoLogger = this.server.topology.client?.mongoLogger;
        this.component = "connection";
        queueMicrotask(() => {
          this.emitAndLog(_ConnectionPool.CONNECTION_POOL_CREATED, new connection_pool_events_1.ConnectionPoolCreatedEvent(this));
        });
      }
      /** The address of the endpoint the pool is connected to */
      get address() {
        return this.options.hostAddress.toString();
      }
      /**
       * Check if the pool has been closed
       *
       * TODO(NODE-3263): We can remove this property once shell no longer needs it
       */
      get closed() {
        return this.poolState === exports.PoolState.closed;
      }
      /** An integer expressing how many total connections (available + pending + in use) the pool currently has */
      get totalConnectionCount() {
        return this.availableConnectionCount + this.pendingConnectionCount + this.currentCheckedOutCount;
      }
      /** An integer expressing how many connections are currently available in the pool. */
      get availableConnectionCount() {
        return this.connections.length;
      }
      get pendingConnectionCount() {
        return this.pending;
      }
      get currentCheckedOutCount() {
        return this.checkedOut.size;
      }
      get waitQueueSize() {
        return this.waitQueue.length;
      }
      get loadBalanced() {
        return this.options.loadBalanced;
      }
      get serverError() {
        return this.server.description.error;
      }
      /**
       * This is exposed ONLY for use in mongosh, to enable
       * killing all connections if a user quits the shell with
       * operations in progress.
       *
       * This property may be removed as a part of NODE-3263.
       */
      get checkedOutConnections() {
        return this.checkedOut;
      }
      /**
       * Get the metrics information for the pool when a wait queue timeout occurs.
       */
      waitQueueErrorMetrics() {
        return this.metrics.info(this.options.maxPoolSize);
      }
      /**
       * Set the pool state to "ready"
       */
      ready() {
        if (this.poolState !== exports.PoolState.paused) {
          return;
        }
        this.poolState = exports.PoolState.ready;
        this.emitAndLog(_ConnectionPool.CONNECTION_POOL_READY, new connection_pool_events_1.ConnectionPoolReadyEvent(this));
        (0, timers_1.clearTimeout)(this.minPoolSizeTimer);
        this.ensureMinPoolSize();
      }
      /**
       * Check a connection out of this pool. The connection will continue to be tracked, but no reference to it
       * will be held by the pool. This means that if a connection is checked out it MUST be checked back in or
       * explicitly destroyed by the new owner.
       */
      async checkOut(options) {
        const checkoutTime = (0, utils_1.processTimeMS)();
        this.emitAndLog(_ConnectionPool.CONNECTION_CHECK_OUT_STARTED, new connection_pool_events_1.ConnectionCheckOutStartedEvent(this));
        const { promise, resolve, reject } = (0, utils_1.promiseWithResolvers)();
        const timeout2 = options.timeoutContext.connectionCheckoutTimeout;
        const waitQueueMember = {
          resolve,
          reject,
          cancelled: false,
          checkoutTime
        };
        const abortListener = (0, utils_1.addAbortListener)(options.signal, function() {
          waitQueueMember.cancelled = true;
          reject(this.reason);
        });
        this.waitQueue.push(waitQueueMember);
        queueMicrotask(() => this.processWaitQueue());
        try {
          timeout2?.throwIfExpired();
          return await (timeout2 ? Promise.race([promise, timeout2]) : promise);
        } catch (error2) {
          if (timeout_1.TimeoutError.is(error2)) {
            timeout2?.clear();
            waitQueueMember.cancelled = true;
            this.emitAndLog(_ConnectionPool.CONNECTION_CHECK_OUT_FAILED, new connection_pool_events_1.ConnectionCheckOutFailedEvent(this, "timeout", waitQueueMember.checkoutTime));
            const timeoutError = new errors_1.WaitQueueTimeoutError(this.loadBalanced ? this.waitQueueErrorMetrics() : "Timed out while checking out a connection from connection pool", this.address);
            if (options.timeoutContext.csotEnabled()) {
              throw new error_1.MongoOperationTimeoutError("Timed out during connection checkout", {
                cause: timeoutError
              });
            }
            throw timeoutError;
          }
          throw error2;
        } finally {
          abortListener?.[utils_1.kDispose]();
          timeout2?.clear();
        }
      }
      /**
       * Check a connection into the pool.
       *
       * @param connection - The connection to check in
       */
      checkIn(connection2) {
        if (!this.checkedOut.has(connection2)) {
          return;
        }
        const poolClosed = this.closed;
        const stale = this.connectionIsStale(connection2);
        const willDestroy = !!(poolClosed || stale || connection2.closed);
        if (!willDestroy) {
          connection2.markAvailable();
          this.connections.unshift(connection2);
        }
        this.checkedOut.delete(connection2);
        this.emitAndLog(_ConnectionPool.CONNECTION_CHECKED_IN, new connection_pool_events_1.ConnectionCheckedInEvent(this, connection2));
        if (willDestroy) {
          const reason = connection2.closed ? "error" : poolClosed ? "poolClosed" : "stale";
          this.destroyConnection(connection2, reason);
        }
        queueMicrotask(() => this.processWaitQueue());
      }
      /**
       * Clear the pool
       *
       * Pool reset is handled by incrementing the pool's generation count. Any existing connection of a
       * previous generation will eventually be pruned during subsequent checkouts.
       */
      clear(options = {}) {
        if (this.closed) {
          return;
        }
        if (this.loadBalanced) {
          const { serviceId } = options;
          if (!serviceId) {
            throw new error_1.MongoRuntimeError("ConnectionPool.clear() called in load balanced mode with no serviceId.");
          }
          const sid = serviceId.toHexString();
          const generation = this.serviceGenerations.get(sid);
          if (generation == null) {
            throw new error_1.MongoRuntimeError("Service generations are required in load balancer mode.");
          } else {
            this.serviceGenerations.set(sid, generation + 1);
          }
          this.emitAndLog(_ConnectionPool.CONNECTION_POOL_CLEARED, new connection_pool_events_1.ConnectionPoolClearedEvent(this, { serviceId }));
          return;
        }
        const interruptInUseConnections = options.interruptInUseConnections ?? false;
        const oldGeneration = this.generation;
        this.generation += 1;
        const alreadyPaused = this.poolState === exports.PoolState.paused;
        this.poolState = exports.PoolState.paused;
        this.clearMinPoolSizeTimer();
        if (!alreadyPaused) {
          this.emitAndLog(_ConnectionPool.CONNECTION_POOL_CLEARED, new connection_pool_events_1.ConnectionPoolClearedEvent(this, {
            interruptInUseConnections
          }));
        }
        if (interruptInUseConnections) {
          queueMicrotask(() => this.interruptInUseConnections(oldGeneration));
        }
        this.processWaitQueue();
      }
      /**
       * Closes all stale in-use connections in the pool with a resumable PoolClearedOnNetworkError.
       *
       * Only connections where `connection.generation <= minGeneration` are killed.
       */
      interruptInUseConnections(minGeneration) {
        for (const connection2 of this.checkedOut) {
          if (connection2.generation <= minGeneration) {
            connection2.onError(new errors_1.PoolClearedOnNetworkError(this));
          }
        }
      }
      /** For MongoClient.close() procedures */
      closeCheckedOutConnections() {
        for (const conn of this.checkedOut) {
          conn.onError(new error_1.MongoClientClosedError());
        }
      }
      /** Close the pool */
      close() {
        if (this.closed) {
          return;
        }
        this.cancellationToken.emit("cancel");
        if (typeof this.connectionCounter.return === "function") {
          this.connectionCounter.return(void 0);
        }
        this.poolState = exports.PoolState.closed;
        this.clearMinPoolSizeTimer();
        this.processWaitQueue();
        for (const conn of this.connections) {
          this.emitAndLog(_ConnectionPool.CONNECTION_CLOSED, new connection_pool_events_1.ConnectionClosedEvent(this, conn, "poolClosed"));
          conn.destroy();
        }
        this.connections.clear();
        this.emitAndLog(_ConnectionPool.CONNECTION_POOL_CLOSED, new connection_pool_events_1.ConnectionPoolClosedEvent(this));
      }
      /**
       * @internal
       * Reauthenticate a connection
       */
      async reauthenticate(connection2) {
        const authContext = connection2.authContext;
        if (!authContext) {
          throw new error_1.MongoRuntimeError("No auth context found on connection.");
        }
        const credentials = authContext.credentials;
        if (!credentials) {
          throw new error_1.MongoMissingCredentialsError("Connection is missing credentials when asked to reauthenticate");
        }
        const resolvedCredentials = credentials.resolveAuthMechanism(connection2.hello);
        const provider = this.server.topology.client.s.authProviders.getOrCreateProvider(resolvedCredentials.mechanism, resolvedCredentials.mechanismProperties);
        if (!provider) {
          throw new error_1.MongoMissingCredentialsError(`Reauthenticate failed due to no auth provider for ${credentials.mechanism}`);
        }
        await provider.reauth(authContext);
        return;
      }
      /** Clear the min pool size timer */
      clearMinPoolSizeTimer() {
        const minPoolSizeTimer = this.minPoolSizeTimer;
        if (minPoolSizeTimer) {
          (0, timers_1.clearTimeout)(minPoolSizeTimer);
        }
      }
      destroyConnection(connection2, reason) {
        this.emitAndLog(_ConnectionPool.CONNECTION_CLOSED, new connection_pool_events_1.ConnectionClosedEvent(this, connection2, reason));
        connection2.destroy();
      }
      connectionIsStale(connection2) {
        const serviceId = connection2.serviceId;
        if (this.loadBalanced && serviceId) {
          const sid = serviceId.toHexString();
          const generation = this.serviceGenerations.get(sid);
          return connection2.generation !== generation;
        }
        return connection2.generation !== this.generation;
      }
      connectionIsIdle(connection2) {
        return !!(this.options.maxIdleTimeMS && connection2.idleTime > this.options.maxIdleTimeMS);
      }
      /**
       * Destroys a connection if the connection is perished.
       *
       * @returns `true` if the connection was destroyed, `false` otherwise.
       */
      destroyConnectionIfPerished(connection2) {
        const isStale = this.connectionIsStale(connection2);
        const isIdle = this.connectionIsIdle(connection2);
        if (!isStale && !isIdle && !connection2.closed) {
          return false;
        }
        const reason = connection2.closed ? "error" : isStale ? "stale" : "idle";
        this.destroyConnection(connection2, reason);
        return true;
      }
      createConnection(callback) {
        const connectOptions = {
          ...this.options,
          id: this.connectionCounter.next().value,
          generation: this.generation,
          cancellationToken: this.cancellationToken,
          mongoLogger: this.mongoLogger,
          authProviders: this.server.topology.client.s.authProviders,
          metadata: this.server.topology.client.options.metadata
        };
        this.pending++;
        const connectionCreatedTime = (0, utils_1.processTimeMS)();
        this.emitAndLog(_ConnectionPool.CONNECTION_CREATED, new connection_pool_events_1.ConnectionCreatedEvent(this, { id: connectOptions.id }));
        (0, connect_1.connect)(connectOptions).then((connection2) => {
          if (this.poolState !== exports.PoolState.ready) {
            this.pending--;
            connection2.destroy();
            callback(this.closed ? new errors_1.PoolClosedError(this) : new errors_1.PoolClearedError(this));
            return;
          }
          for (const event of [...constants_1.APM_EVENTS, connection_1.Connection.CLUSTER_TIME_RECEIVED]) {
            connection2.on(event, (e) => this.emit(event, e));
          }
          if (this.loadBalanced) {
            connection2.on(connection_1.Connection.PINNED, (pinType) => this.metrics.markPinned(pinType));
            connection2.on(connection_1.Connection.UNPINNED, (pinType) => this.metrics.markUnpinned(pinType));
            const serviceId = connection2.serviceId;
            if (serviceId) {
              let generation;
              const sid = serviceId.toHexString();
              if (generation = this.serviceGenerations.get(sid)) {
                connection2.generation = generation;
              } else {
                this.serviceGenerations.set(sid, 0);
                connection2.generation = 0;
              }
            }
          }
          connection2.markAvailable();
          this.emitAndLog(_ConnectionPool.CONNECTION_READY, new connection_pool_events_1.ConnectionReadyEvent(this, connection2, connectionCreatedTime));
          this.pending--;
          callback(void 0, connection2);
        }, (error2) => {
          this.pending--;
          this.server.handleError(error2);
          this.emitAndLog(_ConnectionPool.CONNECTION_CLOSED, new connection_pool_events_1.ConnectionClosedEvent(
            this,
            { id: connectOptions.id, serviceId: void 0 },
            "error",
            // TODO(NODE-5192): Remove this cast
            error2
          ));
          if (error2 instanceof error_1.MongoNetworkError || error2 instanceof error_1.MongoServerError) {
            error2.connectionGeneration = connectOptions.generation;
          }
          callback(error2 ?? new error_1.MongoRuntimeError("Connection creation failed without error"));
        });
      }
      ensureMinPoolSize() {
        const minPoolSize = this.options.minPoolSize;
        if (this.poolState !== exports.PoolState.ready) {
          return;
        }
        this.connections.prune((connection2) => this.destroyConnectionIfPerished(connection2));
        if (this.totalConnectionCount < minPoolSize && this.pendingConnectionCount < this.options.maxConnecting) {
          this.createConnection((err, connection2) => {
            if (!err && connection2) {
              this.connections.push(connection2);
              queueMicrotask(() => this.processWaitQueue());
            }
            if (this.poolState === exports.PoolState.ready) {
              (0, timers_1.clearTimeout)(this.minPoolSizeTimer);
              this.minPoolSizeTimer = (0, timers_1.setTimeout)(() => this.ensureMinPoolSize(), this.options.minPoolSizeCheckFrequencyMS);
            }
          });
        } else {
          (0, timers_1.clearTimeout)(this.minPoolSizeTimer);
          this.minPoolSizeTimer = (0, timers_1.setTimeout)(() => this.ensureMinPoolSize(), this.options.minPoolSizeCheckFrequencyMS);
        }
      }
      processWaitQueue() {
        if (this.processingWaitQueue) {
          return;
        }
        this.processingWaitQueue = true;
        while (this.waitQueueSize) {
          const waitQueueMember = this.waitQueue.first();
          if (!waitQueueMember) {
            this.waitQueue.shift();
            continue;
          }
          if (waitQueueMember.cancelled) {
            this.waitQueue.shift();
            continue;
          }
          if (this.poolState !== exports.PoolState.ready) {
            const reason = this.closed ? "poolClosed" : "connectionError";
            const error2 = this.closed ? new errors_1.PoolClosedError(this) : new errors_1.PoolClearedError(this);
            this.emitAndLog(_ConnectionPool.CONNECTION_CHECK_OUT_FAILED, new connection_pool_events_1.ConnectionCheckOutFailedEvent(this, reason, waitQueueMember.checkoutTime, error2));
            this.waitQueue.shift();
            waitQueueMember.reject(error2);
            continue;
          }
          if (!this.availableConnectionCount) {
            break;
          }
          const connection2 = this.connections.shift();
          if (!connection2) {
            break;
          }
          if (!this.destroyConnectionIfPerished(connection2)) {
            this.checkedOut.add(connection2);
            this.emitAndLog(_ConnectionPool.CONNECTION_CHECKED_OUT, new connection_pool_events_1.ConnectionCheckedOutEvent(this, connection2, waitQueueMember.checkoutTime));
            this.waitQueue.shift();
            waitQueueMember.resolve(connection2);
          }
        }
        const { maxPoolSize, maxConnecting } = this.options;
        while (this.waitQueueSize > 0 && this.pendingConnectionCount < maxConnecting && (maxPoolSize === 0 || this.totalConnectionCount < maxPoolSize)) {
          const waitQueueMember = this.waitQueue.shift();
          if (!waitQueueMember || waitQueueMember.cancelled) {
            continue;
          }
          this.createConnection((err, connection2) => {
            if (waitQueueMember.cancelled) {
              if (!err && connection2) {
                this.connections.push(connection2);
              }
            } else {
              if (err) {
                this.emitAndLog(
                  _ConnectionPool.CONNECTION_CHECK_OUT_FAILED,
                  // TODO(NODE-5192): Remove this cast
                  new connection_pool_events_1.ConnectionCheckOutFailedEvent(this, "connectionError", waitQueueMember.checkoutTime, err)
                );
                waitQueueMember.reject(err);
              } else if (connection2) {
                this.checkedOut.add(connection2);
                this.emitAndLog(_ConnectionPool.CONNECTION_CHECKED_OUT, new connection_pool_events_1.ConnectionCheckedOutEvent(this, connection2, waitQueueMember.checkoutTime));
                waitQueueMember.resolve(connection2);
              }
            }
            queueMicrotask(() => this.processWaitQueue());
          });
        }
        this.processingWaitQueue = false;
      }
    };
    _ConnectionPool.CONNECTION_POOL_CREATED = constants_1.CONNECTION_POOL_CREATED;
    _ConnectionPool.CONNECTION_POOL_CLOSED = constants_1.CONNECTION_POOL_CLOSED;
    _ConnectionPool.CONNECTION_POOL_CLEARED = constants_1.CONNECTION_POOL_CLEARED;
    _ConnectionPool.CONNECTION_POOL_READY = constants_1.CONNECTION_POOL_READY;
    _ConnectionPool.CONNECTION_CREATED = constants_1.CONNECTION_CREATED;
    _ConnectionPool.CONNECTION_READY = constants_1.CONNECTION_READY;
    _ConnectionPool.CONNECTION_CLOSED = constants_1.CONNECTION_CLOSED;
    _ConnectionPool.CONNECTION_CHECK_OUT_STARTED = constants_1.CONNECTION_CHECK_OUT_STARTED;
    _ConnectionPool.CONNECTION_CHECK_OUT_FAILED = constants_1.CONNECTION_CHECK_OUT_FAILED;
    _ConnectionPool.CONNECTION_CHECKED_OUT = constants_1.CONNECTION_CHECKED_OUT;
    _ConnectionPool.CONNECTION_CHECKED_IN = constants_1.CONNECTION_CHECKED_IN;
    let ConnectionPool = _ConnectionPool;
    exports.ConnectionPool = ConnectionPool;
  })(connection_pool);
  return connection_pool;
}
var hasRequiredServer;
function requireServer() {
  if (hasRequiredServer) return server;
  hasRequiredServer = 1;
  Object.defineProperty(server, "__esModule", { value: true });
  server.Server = void 0;
  const connection_1 = requireConnection();
  const connection_pool_1 = requireConnection_pool();
  const errors_1 = requireErrors();
  const constants_1 = requireConstants();
  const error_1 = requireError();
  const mongo_types_1 = requireMongo_types();
  const aggregate_1 = requireAggregate();
  const transactions_1 = requireTransactions();
  const utils_1 = requireUtils();
  const write_concern_1 = requireWrite_concern();
  const common_1 = requireCommon$1();
  const monitor_1 = requireMonitor();
  const server_description_1 = requireServer_description();
  const server_selection_1 = requireServer_selection();
  const stateTransition = (0, utils_1.makeStateMachine)({
    [common_1.STATE_CLOSED]: [common_1.STATE_CLOSED, common_1.STATE_CONNECTING],
    [common_1.STATE_CONNECTING]: [common_1.STATE_CONNECTING, common_1.STATE_CLOSING, common_1.STATE_CONNECTED, common_1.STATE_CLOSED],
    [common_1.STATE_CONNECTED]: [common_1.STATE_CONNECTED, common_1.STATE_CLOSING, common_1.STATE_CLOSED],
    [common_1.STATE_CLOSING]: [common_1.STATE_CLOSING, common_1.STATE_CLOSED]
  });
  const _Server = class _Server extends mongo_types_1.TypedEventEmitter {
    /**
     * Create a server
     */
    constructor(topology2, description, options) {
      super();
      this.on("error", utils_1.noop);
      this.serverApi = options.serverApi;
      const poolOptions = { hostAddress: description.hostAddress, ...options };
      this.topology = topology2;
      this.pool = new connection_pool_1.ConnectionPool(this, poolOptions);
      this.s = {
        description,
        options,
        state: common_1.STATE_CLOSED,
        operationCount: 0
      };
      for (const event of [...constants_1.CMAP_EVENTS, ...constants_1.APM_EVENTS]) {
        this.pool.on(event, (e) => this.emit(event, e));
      }
      this.pool.on(connection_1.Connection.CLUSTER_TIME_RECEIVED, (clusterTime) => {
        this.clusterTime = clusterTime;
      });
      if (this.loadBalanced) {
        this.monitor = null;
        return;
      }
      this.monitor = new monitor_1.Monitor(this, this.s.options);
      for (const event of constants_1.HEARTBEAT_EVENTS) {
        this.monitor.on(event, (e) => this.emit(event, e));
      }
      this.monitor.on("resetServer", (error2) => markServerUnknown(this, error2));
      this.monitor.on(_Server.SERVER_HEARTBEAT_SUCCEEDED, (event) => {
        this.emit(_Server.DESCRIPTION_RECEIVED, new server_description_1.ServerDescription(this.description.hostAddress, event.reply, {
          roundTripTime: this.monitor?.roundTripTime,
          minRoundTripTime: this.monitor?.minRoundTripTime
        }));
        if (this.s.state === common_1.STATE_CONNECTING) {
          stateTransition(this, common_1.STATE_CONNECTED);
          this.emit(_Server.CONNECT, this);
        }
      });
    }
    get clusterTime() {
      return this.topology.clusterTime;
    }
    set clusterTime(clusterTime) {
      this.topology.clusterTime = clusterTime;
    }
    get description() {
      return this.s.description;
    }
    get name() {
      return this.s.description.address;
    }
    get autoEncrypter() {
      if (this.s.options && this.s.options.autoEncrypter) {
        return this.s.options.autoEncrypter;
      }
      return;
    }
    get loadBalanced() {
      return this.topology.description.type === common_1.TopologyType.LoadBalanced;
    }
    /**
     * Initiate server connect
     */
    connect() {
      if (this.s.state !== common_1.STATE_CLOSED) {
        return;
      }
      stateTransition(this, common_1.STATE_CONNECTING);
      if (!this.loadBalanced) {
        this.monitor?.connect();
      } else {
        stateTransition(this, common_1.STATE_CONNECTED);
        this.emit(_Server.CONNECT, this);
      }
    }
    closeCheckedOutConnections() {
      return this.pool.closeCheckedOutConnections();
    }
    /** Destroy the server connection */
    close() {
      if (this.s.state === common_1.STATE_CLOSED) {
        return;
      }
      stateTransition(this, common_1.STATE_CLOSING);
      if (!this.loadBalanced) {
        this.monitor?.close();
      }
      this.pool.close();
      stateTransition(this, common_1.STATE_CLOSED);
      this.emit("closed");
    }
    /**
     * Immediately schedule monitoring of this server. If there already an attempt being made
     * this will be a no-op.
     */
    requestCheck() {
      if (!this.loadBalanced) {
        this.monitor?.requestCheck();
      }
    }
    async command(operation2, timeoutContext) {
      if (this.s.state === common_1.STATE_CLOSING || this.s.state === common_1.STATE_CLOSED) {
        throw new error_1.MongoServerClosedError();
      }
      const session = operation2.session;
      let conn = session?.pinnedConnection;
      this.incrementOperationCount();
      if (conn == null) {
        try {
          conn = await this.pool.checkOut({ timeoutContext, signal: operation2.options.signal });
        } catch (checkoutError) {
          this.decrementOperationCount();
          if (!(checkoutError instanceof errors_1.PoolClearedError))
            this.handleError(checkoutError);
          throw checkoutError;
        }
      }
      let reauthPromise = null;
      const cleanup = () => {
        this.decrementOperationCount();
        if (session?.pinnedConnection !== conn) {
          if (reauthPromise != null) {
            const checkBackIn = () => {
              this.pool.checkIn(conn);
            };
            void reauthPromise.then(checkBackIn, checkBackIn);
          } else {
            this.pool.checkIn(conn);
          }
        }
      };
      let cmd;
      try {
        cmd = operation2.buildCommand(conn, session);
      } catch (e) {
        cleanup();
        throw e;
      }
      const options = operation2.buildOptions(timeoutContext);
      const ns = operation2.ns;
      if (this.loadBalanced && isPinnableCommand(cmd, session) && !session?.pinnedConnection) {
        session?.pin(conn);
      }
      options.directConnection = this.topology.s.options.directConnection;
      const omitReadPreference = operation2 instanceof aggregate_1.AggregateOperation && operation2.hasWriteStage && (0, utils_1.maxWireVersion)(conn) < server_selection_1.MIN_SECONDARY_WRITE_WIRE_VERSION;
      if (omitReadPreference) {
        delete options.readPreference;
      }
      if (this.description.iscryptd) {
        options.omitMaxTimeMS = true;
      }
      try {
        try {
          const res = await conn.command(ns, cmd, options, operation2.SERVER_COMMAND_RESPONSE_TYPE);
          (0, write_concern_1.throwIfWriteConcernError)(res);
          return res;
        } catch (commandError) {
          throw this.decorateCommandError(conn, cmd, options, commandError);
        }
      } catch (operationError) {
        if (operationError instanceof error_1.MongoError && operationError.code?.valueOf() === error_1.MONGODB_ERROR_CODES.Reauthenticate) {
          reauthPromise = this.pool.reauthenticate(conn);
          reauthPromise.then(void 0, (error2) => {
            reauthPromise = null;
            (0, utils_1.squashError)(error2);
          });
          await (0, utils_1.abortable)(reauthPromise, options);
          reauthPromise = null;
          try {
            const res = await conn.command(ns, cmd, options, operation2.SERVER_COMMAND_RESPONSE_TYPE);
            (0, write_concern_1.throwIfWriteConcernError)(res);
            return res;
          } catch (commandError) {
            throw this.decorateCommandError(conn, cmd, options, commandError);
          }
        } else {
          throw operationError;
        }
      } finally {
        cleanup();
      }
    }
    /**
     * Handle SDAM error
     * @internal
     */
    handleError(error2, connection2) {
      if (!(error2 instanceof error_1.MongoError)) {
        return;
      }
      if (isStaleError(this, error2)) {
        return;
      }
      const isNetworkNonTimeoutError = error2 instanceof error_1.MongoNetworkError && !(error2 instanceof error_1.MongoNetworkTimeoutError);
      const isNetworkTimeoutBeforeHandshakeError = error2 instanceof error_1.MongoNetworkError && error2.beforeHandshake;
      const isAuthOrEstablishmentHandshakeError = error2.hasErrorLabel(error_1.MongoErrorLabel.HandshakeError);
      const isSystemOverloadError = error2.hasErrorLabel(error_1.MongoErrorLabel.SystemOverloadedError);
      if ((0, error_1.isStateChangeError)(error2) || error2 instanceof error_1.MongoParseError) {
        const shouldClearPool = (0, error_1.isNodeShuttingDownError)(error2);
        if (!this.loadBalanced) {
          if (shouldClearPool) {
            error2.addErrorLabel(error_1.MongoErrorLabel.ResetPool);
          }
          markServerUnknown(this, error2);
          queueMicrotask(() => this.requestCheck());
          return;
        }
        if (connection2 && shouldClearPool) {
          this.pool.clear({ serviceId: connection2.serviceId });
        }
      } else if (isNetworkNonTimeoutError || isNetworkTimeoutBeforeHandshakeError || isAuthOrEstablishmentHandshakeError) {
        if (isSystemOverloadError) {
          return;
        }
        if (!this.loadBalanced) {
          error2.addErrorLabel(error_1.MongoErrorLabel.ResetPool);
          markServerUnknown(this, error2);
        } else if (connection2) {
          this.pool.clear({ serviceId: connection2.serviceId });
        }
      }
    }
    /**
     * Ensure that error is properly decorated and internal state is updated before throwing
     * @internal
     */
    decorateCommandError(connection2, cmd, options, error2) {
      if (typeof error2 !== "object" || error2 == null || !("name" in error2)) {
        throw new error_1.MongoRuntimeError("An unexpected error type: " + typeof error2);
      }
      if (error2.name === "AbortError" && "cause" in error2 && error2.cause instanceof error_1.MongoError) {
        error2 = error2.cause;
      }
      if (!(error2 instanceof error_1.MongoError)) {
        return error2;
      }
      if (connectionIsStale(this.pool, connection2)) {
        return error2;
      }
      const session = options?.session;
      if (error2 instanceof error_1.MongoNetworkError) {
        if (session && !session.hasEnded && session.serverSession) {
          session.serverSession.isDirty = true;
        }
        if (inActiveTransaction(session, cmd) && !error2.hasErrorLabel(error_1.MongoErrorLabel.TransientTransactionError)) {
          error2.addErrorLabel(error_1.MongoErrorLabel.TransientTransactionError);
        }
        if ((isRetryableWritesEnabled(this.topology) || (0, transactions_1.isTransactionCommand)(cmd)) && (0, utils_1.supportsRetryableWrites)(this) && !inActiveTransaction(session, cmd)) {
          error2.addErrorLabel(error_1.MongoErrorLabel.RetryableWriteError);
        }
      } else {
        if ((isRetryableWritesEnabled(this.topology) || (0, transactions_1.isTransactionCommand)(cmd)) && (0, error_1.needsRetryableWriteLabel)(error2, (0, utils_1.maxWireVersion)(this), this.description.type) && !inActiveTransaction(session, cmd)) {
          error2.addErrorLabel(error_1.MongoErrorLabel.RetryableWriteError);
        }
      }
      if (session && session.isPinned && error2.hasErrorLabel(error_1.MongoErrorLabel.TransientTransactionError)) {
        session.unpin({ force: true });
      }
      this.handleError(error2, connection2);
      return error2;
    }
    /**
     * Decrement the operation count, returning the new count.
     */
    decrementOperationCount() {
      return this.s.operationCount -= 1;
    }
    /**
     * Increment the operation count, returning the new count.
     */
    incrementOperationCount() {
      return this.s.operationCount += 1;
    }
  };
  _Server.SERVER_HEARTBEAT_STARTED = constants_1.SERVER_HEARTBEAT_STARTED;
  _Server.SERVER_HEARTBEAT_SUCCEEDED = constants_1.SERVER_HEARTBEAT_SUCCEEDED;
  _Server.SERVER_HEARTBEAT_FAILED = constants_1.SERVER_HEARTBEAT_FAILED;
  _Server.CONNECT = constants_1.CONNECT;
  _Server.DESCRIPTION_RECEIVED = constants_1.DESCRIPTION_RECEIVED;
  _Server.CLOSED = constants_1.CLOSED;
  _Server.ENDED = constants_1.ENDED;
  let Server = _Server;
  server.Server = Server;
  function markServerUnknown(server2, error2) {
    if (server2.loadBalanced) {
      return;
    }
    if (error2 instanceof error_1.MongoNetworkError && !(error2 instanceof error_1.MongoNetworkTimeoutError)) {
      server2.monitor?.reset();
    }
    server2.emit(Server.DESCRIPTION_RECEIVED, new server_description_1.ServerDescription(server2.description.hostAddress, void 0, { error: error2 }));
  }
  function isPinnableCommand(cmd, session) {
    if (session) {
      return session.inTransaction() || session.transaction.isCommitted && "commitTransaction" in cmd || "aggregate" in cmd || "find" in cmd || "getMore" in cmd || "listCollections" in cmd || "listIndexes" in cmd || "bulkWrite" in cmd;
    }
    return false;
  }
  function connectionIsStale(pool, connection2) {
    if (connection2.serviceId) {
      return connection2.generation !== pool.serviceGenerations.get(connection2.serviceId.toHexString());
    }
    return connection2.generation !== pool.generation;
  }
  function inActiveTransaction(session, cmd) {
    return session && session.inTransaction() && !(0, transactions_1.isTransactionCommand)(cmd);
  }
  function isRetryableWritesEnabled(topology2) {
    return topology2.s.options.retryWrites !== false;
  }
  function isStaleError(server2, error2) {
    const currentGeneration = server2.pool.generation;
    const generation = error2.connectionGeneration;
    if (generation && generation < currentGeneration) {
      return true;
    }
    const currentTopologyVersion = server2.description.topologyVersion;
    return (0, server_description_1.compareTopologyVersion)(currentTopologyVersion, error2.topologyVersion) >= 0;
  }
  return server;
}
var hasRequiredMonitor;
function requireMonitor() {
  if (hasRequiredMonitor) return monitor;
  hasRequiredMonitor = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RTTSampler = exports.MonitorInterval = exports.RTTPinger = exports.Monitor = exports.ServerMonitoringMode = void 0;
    const timers_1 = require$$0$1;
    const bson_1 = requireBson();
    const connect_1 = requireConnect();
    const client_metadata_1 = requireClient_metadata();
    const constants_1 = requireConstants();
    const error_1 = requireError();
    const mongo_logger_1 = requireMongo_logger();
    const mongo_types_1 = requireMongo_types();
    const utils_1 = requireUtils();
    const common_1 = requireCommon$1();
    const events_1 = requireEvents();
    const server_1 = requireServer();
    const STATE_IDLE = "idle";
    const STATE_MONITORING = "monitoring";
    const stateTransition = (0, utils_1.makeStateMachine)({
      [common_1.STATE_CLOSING]: [common_1.STATE_CLOSING, STATE_IDLE, common_1.STATE_CLOSED],
      [common_1.STATE_CLOSED]: [common_1.STATE_CLOSED, STATE_MONITORING],
      [STATE_IDLE]: [STATE_IDLE, STATE_MONITORING, common_1.STATE_CLOSING],
      [STATE_MONITORING]: [STATE_MONITORING, STATE_IDLE, common_1.STATE_CLOSING]
    });
    const INVALID_REQUEST_CHECK_STATES = /* @__PURE__ */ new Set([common_1.STATE_CLOSING, common_1.STATE_CLOSED, STATE_MONITORING]);
    function isInCloseState(monitor2) {
      return monitor2.s.state === common_1.STATE_CLOSED || monitor2.s.state === common_1.STATE_CLOSING;
    }
    exports.ServerMonitoringMode = Object.freeze({
      auto: "auto",
      poll: "poll",
      stream: "stream"
    });
    class Monitor extends mongo_types_1.TypedEventEmitter {
      constructor(server2, options) {
        super();
        this.component = mongo_logger_1.MongoLoggableComponent.TOPOLOGY;
        this.on("error", utils_1.noop);
        this.server = server2;
        this.connection = null;
        this.cancellationToken = new mongo_types_1.CancellationToken();
        this.cancellationToken.setMaxListeners(Infinity);
        this.monitorId = void 0;
        this.s = {
          state: common_1.STATE_CLOSED
        };
        this.address = server2.description.address;
        this.options = Object.freeze({
          connectTimeoutMS: options.connectTimeoutMS ?? 1e4,
          heartbeatFrequencyMS: options.heartbeatFrequencyMS ?? 1e4,
          minHeartbeatFrequencyMS: options.minHeartbeatFrequencyMS ?? 500,
          serverMonitoringMode: options.serverMonitoringMode
        });
        this.isRunningInFaasEnv = (0, client_metadata_1.getFAASEnv)() != null;
        this.mongoLogger = this.server.topology.client?.mongoLogger;
        this.rttSampler = new RTTSampler(10);
        const cancellationToken = this.cancellationToken;
        const connectOptions = {
          id: "<monitor>",
          generation: server2.pool.generation,
          cancellationToken,
          hostAddress: server2.description.hostAddress,
          ...options,
          // force BSON serialization options
          raw: false,
          useBigInt64: false,
          promoteLongs: true,
          promoteValues: true,
          promoteBuffers: true
        };
        delete connectOptions.credentials;
        if (connectOptions.autoEncrypter) {
          delete connectOptions.autoEncrypter;
        }
        this.connectOptions = Object.freeze(connectOptions);
      }
      connect() {
        if (this.s.state !== common_1.STATE_CLOSED) {
          return;
        }
        const heartbeatFrequencyMS = this.options.heartbeatFrequencyMS;
        const minHeartbeatFrequencyMS = this.options.minHeartbeatFrequencyMS;
        this.monitorId = new MonitorInterval(monitorServer(this), {
          heartbeatFrequencyMS,
          minHeartbeatFrequencyMS,
          immediate: true
        });
      }
      requestCheck() {
        if (INVALID_REQUEST_CHECK_STATES.has(this.s.state)) {
          return;
        }
        this.monitorId?.wake();
      }
      reset() {
        const topologyVersion = this.server.description.topologyVersion;
        if (isInCloseState(this) || topologyVersion == null) {
          return;
        }
        stateTransition(this, common_1.STATE_CLOSING);
        resetMonitorState(this);
        stateTransition(this, STATE_IDLE);
        const heartbeatFrequencyMS = this.options.heartbeatFrequencyMS;
        const minHeartbeatFrequencyMS = this.options.minHeartbeatFrequencyMS;
        this.monitorId = new MonitorInterval(monitorServer(this), {
          heartbeatFrequencyMS,
          minHeartbeatFrequencyMS
        });
      }
      close() {
        if (isInCloseState(this)) {
          return;
        }
        stateTransition(this, common_1.STATE_CLOSING);
        resetMonitorState(this);
        this.emit("close");
        stateTransition(this, common_1.STATE_CLOSED);
      }
      get roundTripTime() {
        return this.rttSampler.average();
      }
      get minRoundTripTime() {
        return this.rttSampler.min();
      }
      get latestRtt() {
        return this.rttSampler.last;
      }
      addRttSample(rtt) {
        this.rttSampler.addSample(rtt);
      }
      clearRttSamples() {
        this.rttSampler.clear();
      }
    }
    exports.Monitor = Monitor;
    function resetMonitorState(monitor2) {
      monitor2.monitorId?.stop();
      monitor2.monitorId = void 0;
      monitor2.rttPinger?.close();
      monitor2.rttPinger = void 0;
      monitor2.cancellationToken.emit("cancel");
      monitor2.connection?.destroy();
      monitor2.connection = null;
      monitor2.clearRttSamples();
    }
    function useStreamingProtocol(monitor2, topologyVersion) {
      if (topologyVersion == null)
        return false;
      const serverMonitoringMode = monitor2.options.serverMonitoringMode;
      if (serverMonitoringMode === exports.ServerMonitoringMode.poll)
        return false;
      if (serverMonitoringMode === exports.ServerMonitoringMode.stream)
        return true;
      if (monitor2.isRunningInFaasEnv)
        return false;
      return true;
    }
    function checkServer(monitor2, callback) {
      let start;
      let awaited;
      const topologyVersion = monitor2.server.description.topologyVersion;
      const isAwaitable = useStreamingProtocol(monitor2, topologyVersion);
      monitor2.emitAndLogHeartbeat(server_1.Server.SERVER_HEARTBEAT_STARTED, monitor2.server.topology.s.id, void 0, new events_1.ServerHeartbeatStartedEvent(monitor2.address, isAwaitable));
      function onHeartbeatFailed(err) {
        monitor2.connection?.destroy();
        monitor2.connection = null;
        monitor2.emitAndLogHeartbeat(server_1.Server.SERVER_HEARTBEAT_FAILED, monitor2.server.topology.s.id, void 0, new events_1.ServerHeartbeatFailedEvent(monitor2.address, (0, utils_1.calculateDurationInMs)(start), err, awaited));
        const error2 = !(err instanceof error_1.MongoError) ? new error_1.MongoError(error_1.MongoError.buildErrorMessage(err), { cause: err }) : err;
        error2.addErrorLabel(error_1.MongoErrorLabel.ResetPool);
        if (error2 instanceof error_1.MongoNetworkTimeoutError) {
          error2.addErrorLabel(error_1.MongoErrorLabel.InterruptInUseConnections);
        }
        monitor2.emit("resetServer", error2);
        callback(err);
      }
      function onHeartbeatSucceeded(hello) {
        if (!("isWritablePrimary" in hello)) {
          hello.isWritablePrimary = hello[constants_1.LEGACY_HELLO_COMMAND];
        }
        const duration = isAwaitable && monitor2.rttPinger ? monitor2.rttPinger.latestRtt ?? (0, utils_1.calculateDurationInMs)(start) : (0, utils_1.calculateDurationInMs)(start);
        monitor2.addRttSample(duration);
        monitor2.emitAndLogHeartbeat(server_1.Server.SERVER_HEARTBEAT_SUCCEEDED, monitor2.server.topology.s.id, hello.connectionId, new events_1.ServerHeartbeatSucceededEvent(monitor2.address, duration, hello, isAwaitable));
        if (isAwaitable) {
          monitor2.emitAndLogHeartbeat(server_1.Server.SERVER_HEARTBEAT_STARTED, monitor2.server.topology.s.id, void 0, new events_1.ServerHeartbeatStartedEvent(monitor2.address, true));
          start = (0, utils_1.processTimeMS)();
        } else {
          monitor2.rttPinger?.close();
          monitor2.rttPinger = void 0;
          callback(void 0, hello);
        }
      }
      const { connection: connection2 } = monitor2;
      if (connection2 && !connection2.closed) {
        const { serverApi, helloOk } = connection2;
        const connectTimeoutMS = monitor2.options.connectTimeoutMS;
        const maxAwaitTimeMS = monitor2.options.heartbeatFrequencyMS;
        const cmd = {
          [serverApi?.version || helloOk ? "hello" : constants_1.LEGACY_HELLO_COMMAND]: 1,
          ...isAwaitable && topologyVersion ? { maxAwaitTimeMS, topologyVersion: makeTopologyVersion(topologyVersion) } : {}
        };
        const options = isAwaitable ? {
          socketTimeoutMS: connectTimeoutMS ? connectTimeoutMS + maxAwaitTimeMS : 0,
          exhaustAllowed: true
        } : { socketTimeoutMS: connectTimeoutMS };
        if (isAwaitable && monitor2.rttPinger == null) {
          monitor2.rttPinger = new RTTPinger(monitor2);
        }
        start = (0, utils_1.processTimeMS)();
        if (isAwaitable) {
          awaited = true;
          return connection2.exhaustCommand((0, utils_1.ns)("admin.$cmd"), cmd, options, (error2, hello) => {
            if (error2)
              return onHeartbeatFailed(error2);
            return onHeartbeatSucceeded(hello);
          });
        }
        awaited = false;
        connection2.command((0, utils_1.ns)("admin.$cmd"), cmd, options).then(onHeartbeatSucceeded, onHeartbeatFailed);
        return;
      }
      (async () => {
        const socket = await (0, connect_1.makeSocket)(monitor2.connectOptions);
        const connection3 = (0, connect_1.makeConnection)(monitor2.connectOptions, socket);
        start = (0, utils_1.processTimeMS)();
        try {
          await (0, connect_1.performInitialHandshake)(connection3, monitor2.connectOptions);
          return connection3;
        } catch (error2) {
          connection3.destroy();
          throw error2;
        }
      })().then((connection3) => {
        if (isInCloseState(monitor2)) {
          connection3.destroy();
          return;
        }
        const duration = (0, utils_1.calculateDurationInMs)(start);
        monitor2.addRttSample(duration);
        monitor2.connection = connection3;
        monitor2.emitAndLogHeartbeat(server_1.Server.SERVER_HEARTBEAT_SUCCEEDED, monitor2.server.topology.s.id, connection3.hello?.connectionId, new events_1.ServerHeartbeatSucceededEvent(monitor2.address, duration, connection3.hello, useStreamingProtocol(monitor2, connection3.hello?.topologyVersion)));
        callback(void 0, connection3.hello);
      }, (error2) => {
        monitor2.connection = null;
        awaited = false;
        onHeartbeatFailed(error2);
      });
    }
    function monitorServer(monitor2) {
      return (callback) => {
        if (monitor2.s.state === STATE_MONITORING) {
          queueMicrotask(callback);
          return;
        }
        stateTransition(monitor2, STATE_MONITORING);
        function done() {
          if (!isInCloseState(monitor2)) {
            stateTransition(monitor2, STATE_IDLE);
          }
          callback();
        }
        checkServer(monitor2, (err, hello) => {
          if (err) {
            if (monitor2.server.description.type === common_1.ServerType.Unknown) {
              return done();
            }
          }
          if (useStreamingProtocol(monitor2, hello?.topologyVersion)) {
            (0, timers_1.setTimeout)(() => {
              if (!isInCloseState(monitor2)) {
                monitor2.monitorId?.wake();
              }
            }, 0);
          }
          done();
        });
      };
    }
    function makeTopologyVersion(tv) {
      return {
        processId: tv.processId,
        // tests mock counter as just number, but in a real situation counter should always be a Long
        // TODO(NODE-2674): Preserve int64 sent from MongoDB
        counter: bson_1.Long.isLong(tv.counter) ? tv.counter : bson_1.Long.fromNumber(tv.counter)
      };
    }
    class RTTPinger {
      constructor(monitor2) {
        this.connection = void 0;
        this.cancellationToken = monitor2.cancellationToken;
        this.closed = false;
        this.monitor = monitor2;
        this.latestRtt = monitor2.latestRtt ?? void 0;
        const heartbeatFrequencyMS = monitor2.options.heartbeatFrequencyMS;
        this.monitorId = (0, timers_1.setTimeout)(() => this.measureRoundTripTime(), heartbeatFrequencyMS);
      }
      get roundTripTime() {
        return this.monitor.roundTripTime;
      }
      get minRoundTripTime() {
        return this.monitor.minRoundTripTime;
      }
      close() {
        this.closed = true;
        (0, timers_1.clearTimeout)(this.monitorId);
        this.connection?.destroy();
        this.connection = void 0;
      }
      measureAndReschedule(start, conn) {
        if (this.closed) {
          conn?.destroy();
          return;
        }
        if (this.connection == null) {
          this.connection = conn;
        }
        this.latestRtt = (0, utils_1.calculateDurationInMs)(start);
        this.monitorId = (0, timers_1.setTimeout)(() => this.measureRoundTripTime(), this.monitor.options.heartbeatFrequencyMS);
      }
      measureRoundTripTime() {
        const start = (0, utils_1.processTimeMS)();
        if (this.closed) {
          return;
        }
        const connection2 = this.connection;
        if (connection2 == null) {
          (0, connect_1.connect)(this.monitor.connectOptions).then((connection3) => {
            this.measureAndReschedule(start, connection3);
          }, () => {
            this.connection = void 0;
          });
          return;
        }
        const commandName = connection2.serverApi?.version || connection2.helloOk ? "hello" : constants_1.LEGACY_HELLO_COMMAND;
        connection2.command((0, utils_1.ns)("admin.$cmd"), { [commandName]: 1 }, void 0).then(() => this.measureAndReschedule(start), () => {
          this.connection?.destroy();
          this.connection = void 0;
          return;
        });
      }
    }
    exports.RTTPinger = RTTPinger;
    class MonitorInterval {
      constructor(fn, options = {}) {
        this.isExpeditedCallToFnScheduled = false;
        this.stopped = false;
        this.isExecutionInProgress = false;
        this.hasExecutedOnce = false;
        this._executeAndReschedule = () => {
          if (this.stopped)
            return;
          if (this.timerId) {
            (0, timers_1.clearTimeout)(this.timerId);
          }
          this.isExpeditedCallToFnScheduled = false;
          this.isExecutionInProgress = true;
          this.fn(() => {
            this.lastExecutionEnded = (0, utils_1.processTimeMS)();
            this.isExecutionInProgress = false;
            this._reschedule(this.heartbeatFrequencyMS);
          });
        };
        this.fn = fn;
        this.lastExecutionEnded = -Infinity;
        this.heartbeatFrequencyMS = options.heartbeatFrequencyMS ?? 1e3;
        this.minHeartbeatFrequencyMS = options.minHeartbeatFrequencyMS ?? 500;
        if (options.immediate) {
          this._executeAndReschedule();
        } else {
          this._reschedule(void 0);
        }
      }
      wake() {
        const currentTime = (0, utils_1.processTimeMS)();
        const timeSinceLastCall = currentTime - this.lastExecutionEnded;
        if (timeSinceLastCall < 0) {
          return this._executeAndReschedule();
        }
        if (this.isExecutionInProgress) {
          return;
        }
        if (this.isExpeditedCallToFnScheduled) {
          return;
        }
        if (timeSinceLastCall < this.minHeartbeatFrequencyMS) {
          this.isExpeditedCallToFnScheduled = true;
          this._reschedule(this.minHeartbeatFrequencyMS - timeSinceLastCall);
          return;
        }
        this._executeAndReschedule();
      }
      stop() {
        this.stopped = true;
        if (this.timerId) {
          (0, timers_1.clearTimeout)(this.timerId);
          this.timerId = void 0;
        }
        this.lastExecutionEnded = -Infinity;
        this.isExpeditedCallToFnScheduled = false;
      }
      toString() {
        return JSON.stringify(this);
      }
      toJSON() {
        const currentTime = (0, utils_1.processTimeMS)();
        const timeSinceLastCall = currentTime - this.lastExecutionEnded;
        return {
          timerId: this.timerId != null ? "set" : "cleared",
          lastCallTime: this.lastExecutionEnded,
          isExpeditedCheckScheduled: this.isExpeditedCallToFnScheduled,
          stopped: this.stopped,
          heartbeatFrequencyMS: this.heartbeatFrequencyMS,
          minHeartbeatFrequencyMS: this.minHeartbeatFrequencyMS,
          currentTime,
          timeSinceLastCall
        };
      }
      _reschedule(ms) {
        if (this.stopped)
          return;
        if (this.timerId) {
          (0, timers_1.clearTimeout)(this.timerId);
        }
        this.timerId = (0, timers_1.setTimeout)(this._executeAndReschedule, ms || this.heartbeatFrequencyMS);
      }
    }
    exports.MonitorInterval = MonitorInterval;
    class RTTSampler {
      constructor(windowSize = 10) {
        this.rttSamples = new Float64Array(windowSize);
        this.length = 0;
        this.writeIndex = 0;
      }
      /**
       * Adds an rtt sample to the end of the circular buffer
       * When `windowSize` samples have been collected, `addSample` overwrites the least recently added
       * sample
       */
      addSample(sample) {
        this.rttSamples[this.writeIndex++] = sample;
        if (this.length < this.rttSamples.length) {
          this.length++;
        }
        this.writeIndex %= this.rttSamples.length;
      }
      /**
       * When \< 2 samples have been collected, returns 0
       * Otherwise computes the minimum value samples contained in the buffer
       */
      min() {
        if (this.length < 2)
          return 0;
        let min = this.rttSamples[0];
        for (let i = 1; i < this.length; i++) {
          if (this.rttSamples[i] < min)
            min = this.rttSamples[i];
        }
        return min;
      }
      /**
       * Returns mean of samples contained in the buffer
       */
      average() {
        if (this.length === 0)
          return 0;
        let sum = 0;
        for (let i = 0; i < this.length; i++) {
          sum += this.rttSamples[i];
        }
        return sum / this.length;
      }
      /**
       * Returns most recently inserted element in the buffer
       * Returns null if the buffer is empty
       * */
      get last() {
        if (this.length === 0)
          return null;
        return this.rttSamples[this.writeIndex === 0 ? this.length - 1 : this.writeIndex - 1];
      }
      /**
       * Clear the buffer
       * NOTE: this does not overwrite the data held in the internal array, just the pointers into
       * this array
       */
      clear() {
        this.length = 0;
        this.writeIndex = 0;
      }
    }
    exports.RTTSampler = RTTSampler;
  })(monitor);
  return monitor;
}
var hasRequiredConnection_string;
function requireConnection_string() {
  if (hasRequiredConnection_string) return connection_string;
  hasRequiredConnection_string = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DEFAULT_OPTIONS = exports.OPTIONS = void 0;
    exports.resolveSRVRecord = resolveSRVRecord;
    exports.parseOptions = parseOptions;
    const dns = require$$0$6;
    const mongodb_connection_string_url_1 = requireLib$1();
    const process = require$$0;
    const url_1 = require$$3$2;
    const mongo_credentials_1 = requireMongo_credentials();
    const providers_1 = requireProviders$1();
    const compression_1 = requireCompression();
    const encrypter_1 = requireEncrypter();
    const error_1 = requireError();
    const mongo_client_1 = requireMongo_client();
    const mongo_logger_1 = requireMongo_logger();
    const read_concern_1 = requireRead_concern();
    const read_preference_1 = requireRead_preference();
    const runtime_adapters_1 = requireRuntime_adapters();
    const monitor_1 = requireMonitor();
    const utils_1 = requireUtils();
    const write_concern_1 = requireWrite_concern();
    const VALID_TXT_RECORDS = ["authSource", "replicaSet", "loadBalanced"];
    const LB_SINGLE_HOST_ERROR = "loadBalanced option only supported with a single host in the URI";
    const LB_REPLICA_SET_ERROR = "loadBalanced option not supported with a replicaSet option";
    const LB_DIRECT_CONNECTION_ERROR = "loadBalanced option not supported when directConnection is provided";
    function retryDNSTimeoutFor(rrtype) {
      const resolve = rrtype === "SRV" ? (address) => dns.promises.resolve(address, "SRV") : (address) => dns.promises.resolve(address, "TXT");
      return async function dnsReqRetryTimeout(lookupAddress) {
        try {
          return await resolve(lookupAddress);
        } catch (firstDNSError) {
          if (firstDNSError.code === dns.TIMEOUT) {
            return await resolve(lookupAddress);
          } else {
            throw firstDNSError;
          }
        }
      };
    }
    const resolveSrv = retryDNSTimeoutFor("SRV");
    const resolveTxt = retryDNSTimeoutFor("TXT");
    async function resolveSRVRecord(options) {
      if (typeof options.srvHost !== "string") {
        throw new error_1.MongoAPIError('Option "srvHost" must not be empty');
      }
      const lookupAddress = options.srvHost;
      const txtResolutionPromise = resolveTxt(lookupAddress);
      txtResolutionPromise.then(void 0, utils_1.squashError);
      const hostname = `_${options.srvServiceName}._tcp.${lookupAddress}`;
      const addresses = await resolveSrv(hostname);
      if (addresses.length === 0) {
        throw new error_1.MongoAPIError("No addresses found at host");
      }
      for (const { name } of addresses) {
        (0, utils_1.checkParentDomainMatch)(name, lookupAddress);
      }
      const hostAddresses = addresses.map((r) => utils_1.HostAddress.fromString(`${r.name}:${r.port ?? 27017}`));
      validateLoadBalancedOptions(hostAddresses, options, true);
      let record;
      try {
        record = await txtResolutionPromise;
      } catch (error2) {
        if (error2.code !== "ENODATA" && error2.code !== "ENOTFOUND") {
          throw error2;
        }
        return hostAddresses;
      }
      if (record.length > 1) {
        throw new error_1.MongoParseError("Multiple text records not allowed");
      }
      const txtRecordOptions = new url_1.URLSearchParams(record[0].join(""));
      const txtRecordOptionKeys = [...txtRecordOptions.keys()];
      if (txtRecordOptionKeys.some((key) => !VALID_TXT_RECORDS.includes(key))) {
        throw new error_1.MongoParseError(`Text record may only set any of: ${VALID_TXT_RECORDS.join(", ")}`);
      }
      if (VALID_TXT_RECORDS.some((option) => txtRecordOptions.get(option) === "")) {
        throw new error_1.MongoParseError("Cannot have empty URI params in DNS TXT Record");
      }
      const source = txtRecordOptions.get("authSource") ?? void 0;
      const replicaSet = txtRecordOptions.get("replicaSet") ?? void 0;
      const loadBalanced = txtRecordOptions.get("loadBalanced") ?? void 0;
      if (!options.userSpecifiedAuthSource && source && options.credentials && !providers_1.AUTH_MECHS_AUTH_SRC_EXTERNAL.has(options.credentials.mechanism)) {
        options.credentials = mongo_credentials_1.MongoCredentials.merge(options.credentials, { source });
      }
      if (!options.userSpecifiedReplicaSet && replicaSet) {
        options.replicaSet = replicaSet;
      }
      if (loadBalanced === "true") {
        options.loadBalanced = true;
      }
      if (options.replicaSet && options.srvMaxHosts > 0) {
        throw new error_1.MongoParseError("Cannot combine replicaSet option with srvMaxHosts");
      }
      validateLoadBalancedOptions(hostAddresses, options, true);
      return hostAddresses;
    }
    function checkTLSOptions(allOptions) {
      if (!allOptions)
        return;
      const check = (a, b) => {
        if (allOptions.has(a) && allOptions.has(b)) {
          throw new error_1.MongoAPIError(`The '${a}' option cannot be used with the '${b}' option`);
        }
      };
      check("tlsInsecure", "tlsAllowInvalidCertificates");
      check("tlsInsecure", "tlsAllowInvalidHostnames");
    }
    function getBoolean(name, value) {
      if (typeof value === "boolean")
        return value;
      switch (value) {
        case "true":
          return true;
        case "false":
          return false;
        default:
          throw new error_1.MongoParseError(`${name} must be either "true" or "false"`);
      }
    }
    function getIntFromOptions(name, value) {
      const parsedInt = (0, utils_1.parseInteger)(value);
      if (parsedInt != null) {
        return parsedInt;
      }
      throw new error_1.MongoParseError(`Expected ${name} to be stringified int value, got: ${value}`);
    }
    function getUIntFromOptions(name, value) {
      const parsedValue = getIntFromOptions(name, value);
      if (parsedValue < 0) {
        throw new error_1.MongoParseError(`${name} can only be a positive int value, got: ${value}`);
      }
      return parsedValue;
    }
    function* entriesFromString(value) {
      if (value === "") {
        return;
      }
      const keyValuePairs = value.split(",");
      for (const keyValue of keyValuePairs) {
        const [key, value2] = keyValue.split(/:(.*)/);
        if (value2 == null) {
          throw new error_1.MongoParseError("Cannot have undefined values in key value pairs");
        }
        yield [key, value2];
      }
    }
    class CaseInsensitiveMap extends Map {
      constructor(entries = []) {
        super(entries.map(([k, v]) => [k.toLowerCase(), v]));
      }
      has(k) {
        return super.has(k.toLowerCase());
      }
      get(k) {
        return super.get(k.toLowerCase());
      }
      set(k, v) {
        return super.set(k.toLowerCase(), v);
      }
      delete(k) {
        return super.delete(k.toLowerCase());
      }
    }
    function parseOptions(uri, mongoClient = void 0, options = {}) {
      if (mongoClient != null && !(mongoClient instanceof mongo_client_1.MongoClient)) {
        options = mongoClient;
        mongoClient = void 0;
      }
      if (options.useBigInt64 && typeof options.promoteLongs === "boolean" && !options.promoteLongs) {
        throw new error_1.MongoAPIError("Must request either bigint or Long for int64 deserialization");
      }
      if (options.useBigInt64 && typeof options.promoteValues === "boolean" && !options.promoteValues) {
        throw new error_1.MongoAPIError("Must request either bigint or Long for int64 deserialization");
      }
      const url = new mongodb_connection_string_url_1.default(uri);
      const { hosts, isSRV } = url;
      const mongoOptions = /* @__PURE__ */ Object.create(null);
      mongoOptions.hosts = isSRV ? [] : hosts.map(utils_1.HostAddress.fromString);
      const urlOptions = new CaseInsensitiveMap();
      if (url.pathname !== "/" && url.pathname !== "") {
        const dbName = decodeURIComponent(url.pathname[0] === "/" ? url.pathname.slice(1) : url.pathname);
        if (dbName) {
          urlOptions.set("dbName", [dbName]);
        }
      }
      if (url.username !== "") {
        const auth = {
          username: decodeURIComponent(url.username)
        };
        if (typeof url.password === "string") {
          auth.password = decodeURIComponent(url.password);
        }
        urlOptions.set("auth", [auth]);
      }
      for (const key of url.searchParams.keys()) {
        const values = url.searchParams.getAll(key);
        const isReadPreferenceTags = /readPreferenceTags/i.test(key);
        if (!isReadPreferenceTags && values.length > 1) {
          throw new error_1.MongoInvalidArgumentError(`URI option "${key}" cannot appear more than once in the connection string`);
        }
        if (!isReadPreferenceTags && values.includes("")) {
          throw new error_1.MongoAPIError(`URI option "${key}" cannot be specified with no value`);
        }
        if (!urlOptions.has(key)) {
          urlOptions.set(key, values);
        }
      }
      const objectOptions = new CaseInsensitiveMap(Object.entries(options).filter(([, v]) => v != null));
      if (urlOptions.has("serverApi")) {
        throw new error_1.MongoParseError("URI cannot contain `serverApi`, it can only be passed to the client");
      }
      const uriMechanismProperties = urlOptions.get("authMechanismProperties");
      if (uriMechanismProperties) {
        for (const property of uriMechanismProperties) {
          if (/(^|,)ALLOWED_HOSTS:/.test(property)) {
            throw new error_1.MongoParseError("Auth mechanism property ALLOWED_HOSTS is not allowed in the connection string.");
          }
        }
      }
      if (objectOptions.has("loadBalanced")) {
        throw new error_1.MongoParseError("loadBalanced is only a valid option in the URI");
      }
      const allProvidedOptions = new CaseInsensitiveMap();
      const allProvidedKeys = /* @__PURE__ */ new Set([...urlOptions.keys(), ...objectOptions.keys()]);
      for (const key of allProvidedKeys) {
        const values = [];
        const objectOptionValue = objectOptions.get(key);
        if (objectOptionValue != null) {
          values.push(objectOptionValue);
        }
        const urlValues = urlOptions.get(key) ?? [];
        values.push(...urlValues);
        allProvidedOptions.set(key, values);
      }
      if (allProvidedOptions.has("tls") || allProvidedOptions.has("ssl")) {
        const tlsAndSslOpts = (allProvidedOptions.get("tls") || []).concat(allProvidedOptions.get("ssl") || []).map(getBoolean.bind(null, "tls/ssl"));
        if (new Set(tlsAndSslOpts).size !== 1) {
          throw new error_1.MongoParseError("All values of tls/ssl must be the same.");
        }
      }
      checkTLSOptions(allProvidedOptions);
      const unsupportedOptions = (0, utils_1.setDifference)(allProvidedKeys, Array.from(Object.keys(exports.OPTIONS)).map((s) => s.toLowerCase()));
      if (unsupportedOptions.size !== 0) {
        const optionWord = unsupportedOptions.size > 1 ? "options" : "option";
        const isOrAre = unsupportedOptions.size > 1 ? "are" : "is";
        throw new error_1.MongoParseError(`${optionWord} ${Array.from(unsupportedOptions).join(", ")} ${isOrAre} not supported`);
      }
      for (const [key, descriptor] of Object.entries(exports.OPTIONS)) {
        const values = allProvidedOptions.get(key);
        if (!values || values.length === 0) {
          if (exports.DEFAULT_OPTIONS.has(key)) {
            setOption(mongoOptions, key, descriptor, [exports.DEFAULT_OPTIONS.get(key)]);
          }
        } else {
          const { deprecated } = descriptor;
          if (deprecated) {
            const deprecatedMsg = typeof deprecated === "string" ? `: ${deprecated}` : "";
            (0, utils_1.emitWarning)(`${key} is a deprecated option${deprecatedMsg}`);
          }
          setOption(mongoOptions, key, descriptor, values);
        }
      }
      if (mongoOptions.credentials) {
        const isGssapi = mongoOptions.credentials.mechanism === providers_1.AuthMechanism.MONGODB_GSSAPI;
        const isX509 = mongoOptions.credentials.mechanism === providers_1.AuthMechanism.MONGODB_X509;
        const isAws = mongoOptions.credentials.mechanism === providers_1.AuthMechanism.MONGODB_AWS;
        const isOidc = mongoOptions.credentials.mechanism === providers_1.AuthMechanism.MONGODB_OIDC;
        if ((isGssapi || isX509) && allProvidedOptions.has("authSource") && mongoOptions.credentials.source !== "$external") {
          throw new error_1.MongoParseError(`authMechanism ${mongoOptions.credentials.mechanism} requires an authSource of '$external'`);
        }
        if (!(isGssapi || isX509 || isAws || isOidc) && mongoOptions.dbName && !allProvidedOptions.has("authSource")) {
          mongoOptions.credentials = mongo_credentials_1.MongoCredentials.merge(mongoOptions.credentials, {
            source: mongoOptions.dbName
          });
        }
        if (isAws) {
          const { username, password } = mongoOptions.credentials;
          if (username || password) {
            throw new error_1.MongoAPIError("username and password cannot be provided when using MONGODB-AWS. Credentials must be provided in a manner that can be read by the AWS SDK.");
          }
          if (mongoOptions.credentials.mechanismProperties.AWS_SESSION_TOKEN) {
            throw new error_1.MongoAPIError("AWS_SESSION_TOKEN cannot be provided when using MONGODB-AWS. Credentials must be provided in a manner that can be read by the AWS SDK.");
          }
        }
        mongoOptions.credentials.validate();
        if (mongoOptions.credentials.password === "" && mongoOptions.credentials.username === "" && mongoOptions.credentials.mechanism === providers_1.AuthMechanism.MONGODB_DEFAULT && Object.keys(mongoOptions.credentials.mechanismProperties).length === 0) {
          delete mongoOptions.credentials;
        }
      }
      if (!mongoOptions.dbName) {
        mongoOptions.dbName = "test";
      }
      validateLoadBalancedOptions(hosts, mongoOptions, isSRV);
      if (mongoClient && mongoOptions.autoEncryption) {
        encrypter_1.Encrypter.checkForMongoCrypt();
        mongoOptions.encrypter = new encrypter_1.Encrypter(mongoClient, uri, options);
        mongoOptions.autoEncrypter = mongoOptions.encrypter.autoEncrypter;
      }
      mongoOptions.userSpecifiedAuthSource = objectOptions.has("authSource") || urlOptions.has("authSource");
      mongoOptions.userSpecifiedReplicaSet = objectOptions.has("replicaSet") || urlOptions.has("replicaSet");
      if (isSRV) {
        mongoOptions.srvHost = hosts[0];
        if (mongoOptions.directConnection) {
          throw new error_1.MongoAPIError("SRV URI does not support directConnection");
        }
        if (mongoOptions.srvMaxHosts > 0 && typeof mongoOptions.replicaSet === "string") {
          throw new error_1.MongoParseError("Cannot use srvMaxHosts option with replicaSet");
        }
        const noUserSpecifiedTLS = !objectOptions.has("tls") && !urlOptions.has("tls");
        const noUserSpecifiedSSL = !objectOptions.has("ssl") && !urlOptions.has("ssl");
        if (noUserSpecifiedTLS && noUserSpecifiedSSL) {
          mongoOptions.tls = true;
        }
      } else {
        const userSpecifiedSrvOptions = urlOptions.has("srvMaxHosts") || objectOptions.has("srvMaxHosts") || urlOptions.has("srvServiceName") || objectOptions.has("srvServiceName");
        if (userSpecifiedSrvOptions) {
          throw new error_1.MongoParseError("Cannot use srvMaxHosts or srvServiceName with a non-srv connection string");
        }
      }
      if (mongoOptions.directConnection && mongoOptions.hosts.length !== 1) {
        throw new error_1.MongoParseError("directConnection option requires exactly one host");
      }
      if (!mongoOptions.proxyHost && (mongoOptions.proxyPort || mongoOptions.proxyUsername || mongoOptions.proxyPassword)) {
        throw new error_1.MongoParseError("Must specify proxyHost if other proxy options are passed");
      }
      if (mongoOptions.proxyUsername && !mongoOptions.proxyPassword || !mongoOptions.proxyUsername && mongoOptions.proxyPassword) {
        throw new error_1.MongoParseError("Can only specify both of proxy username/password or neither");
      }
      const proxyOptions = ["proxyHost", "proxyPort", "proxyUsername", "proxyPassword"].map((key) => urlOptions.get(key) ?? []);
      if (proxyOptions.some((options2) => options2.length > 1)) {
        throw new error_1.MongoParseError("Proxy options cannot be specified multiple times in the connection string");
      }
      mongoOptions.mongoLoggerOptions = mongo_logger_1.MongoLogger.resolveOptions({
        MONGODB_LOG_COMMAND: process.env.MONGODB_LOG_COMMAND,
        MONGODB_LOG_TOPOLOGY: process.env.MONGODB_LOG_TOPOLOGY,
        MONGODB_LOG_SERVER_SELECTION: process.env.MONGODB_LOG_SERVER_SELECTION,
        MONGODB_LOG_CONNECTION: process.env.MONGODB_LOG_CONNECTION,
        MONGODB_LOG_CLIENT: process.env.MONGODB_LOG_CLIENT,
        MONGODB_LOG_ALL: process.env.MONGODB_LOG_ALL,
        MONGODB_LOG_MAX_DOCUMENT_LENGTH: process.env.MONGODB_LOG_MAX_DOCUMENT_LENGTH,
        MONGODB_LOG_PATH: process.env.MONGODB_LOG_PATH
      }, {
        mongodbLogPath: mongoOptions.mongodbLogPath,
        mongodbLogComponentSeverities: mongoOptions.mongodbLogComponentSeverities,
        mongodbLogMaxDocumentLength: mongoOptions.mongodbLogMaxDocumentLength
      });
      mongoOptions.runtime = (0, runtime_adapters_1.resolveRuntimeAdapters)(options);
      return mongoOptions;
    }
    function validateLoadBalancedOptions(hosts, mongoOptions, isSrv) {
      if (mongoOptions.loadBalanced) {
        if (hosts.length > 1) {
          throw new error_1.MongoParseError(LB_SINGLE_HOST_ERROR);
        }
        if (mongoOptions.replicaSet) {
          throw new error_1.MongoParseError(LB_REPLICA_SET_ERROR);
        }
        if (mongoOptions.directConnection) {
          throw new error_1.MongoParseError(LB_DIRECT_CONNECTION_ERROR);
        }
        if (isSrv && mongoOptions.srvMaxHosts > 0) {
          throw new error_1.MongoParseError("Cannot limit srv hosts with loadBalanced enabled");
        }
      }
      return;
    }
    function setOption(mongoOptions, key, descriptor, values) {
      const { target, type, transform } = descriptor;
      const name = target ?? key;
      switch (type) {
        case "boolean":
          mongoOptions[name] = getBoolean(name, values[0]);
          break;
        case "int":
          mongoOptions[name] = getIntFromOptions(name, values[0]);
          break;
        case "uint":
          mongoOptions[name] = getUIntFromOptions(name, values[0]);
          break;
        case "string":
          if (values[0] == null) {
            break;
          }
          mongoOptions[name] = String(values[0]);
          break;
        case "record":
          if (!(0, utils_1.isRecord)(values[0])) {
            throw new error_1.MongoParseError(`${name} must be an object`);
          }
          mongoOptions[name] = values[0];
          break;
        case "any":
          mongoOptions[name] = values[0];
          break;
        default: {
          if (!transform) {
            throw new error_1.MongoParseError("Descriptors missing a type must define a transform");
          }
          const transformValue = transform({ name, options: mongoOptions, values });
          mongoOptions[name] = transformValue;
          break;
        }
      }
    }
    exports.OPTIONS = {
      enableOverloadRetargeting: {
        default: false,
        type: "boolean"
      },
      appName: {
        type: "string"
      },
      auth: {
        target: "credentials",
        transform({ name, options, values: [value] }) {
          if (!(0, utils_1.isRecord)(value, ["username", "password"])) {
            throw new error_1.MongoParseError(`${name} must be an object with 'username' and 'password' properties`);
          }
          return mongo_credentials_1.MongoCredentials.merge(options.credentials, {
            username: value.username,
            password: value.password
          });
        }
      },
      authMechanism: {
        target: "credentials",
        transform({ options, values: [value] }) {
          const mechanisms = Object.values(providers_1.AuthMechanism);
          const [mechanism] = mechanisms.filter((m) => m.match(RegExp(String.raw`\b${value}\b`, "i")));
          if (!mechanism) {
            throw new error_1.MongoParseError(`authMechanism one of ${mechanisms}, got ${value}`);
          }
          let source = options.credentials?.source;
          if (mechanism === providers_1.AuthMechanism.MONGODB_PLAIN || providers_1.AUTH_MECHS_AUTH_SRC_EXTERNAL.has(mechanism)) {
            source = "$external";
          }
          let password = options.credentials?.password;
          if (mechanism === providers_1.AuthMechanism.MONGODB_X509 && password === "") {
            password = void 0;
          }
          return mongo_credentials_1.MongoCredentials.merge(options.credentials, {
            mechanism,
            source,
            password
          });
        }
      },
      // Note that if the authMechanismProperties contain a TOKEN_RESOURCE that has a
      // comma in it, it MUST be supplied as a MongoClient option instead of in the
      // connection string.
      authMechanismProperties: {
        target: "credentials",
        transform({ options, values }) {
          let mechanismProperties = /* @__PURE__ */ Object.create(null);
          for (const optionValue of values) {
            if (typeof optionValue === "string") {
              for (const [key, value] of entriesFromString(optionValue)) {
                try {
                  mechanismProperties[key] = getBoolean(key, value);
                } catch {
                  mechanismProperties[key] = value;
                }
              }
            } else {
              if (!(0, utils_1.isRecord)(optionValue)) {
                throw new error_1.MongoParseError("AuthMechanismProperties must be an object");
              }
              mechanismProperties = { ...optionValue };
            }
          }
          return mongo_credentials_1.MongoCredentials.merge(options.credentials, {
            mechanismProperties
          });
        }
      },
      authSource: {
        target: "credentials",
        transform({ options, values: [value] }) {
          const source = String(value);
          return mongo_credentials_1.MongoCredentials.merge(options.credentials, { source });
        }
      },
      autoEncryption: {
        type: "record"
      },
      autoSelectFamily: {
        type: "boolean",
        default: true
      },
      autoSelectFamilyAttemptTimeout: {
        type: "uint"
      },
      bsonRegExp: {
        type: "boolean"
      },
      serverApi: {
        target: "serverApi",
        transform({ values: [version2] }) {
          const serverApiToValidate = typeof version2 === "string" ? { version: version2 } : version2;
          const versionToValidate = serverApiToValidate && serverApiToValidate.version;
          if (!versionToValidate) {
            throw new error_1.MongoParseError(`Invalid \`serverApi\` property; must specify a version from the following enum: ["${Object.values(mongo_client_1.ServerApiVersion).join('", "')}"]`);
          }
          if (!Object.values(mongo_client_1.ServerApiVersion).some((v) => v === versionToValidate)) {
            throw new error_1.MongoParseError(`Invalid server API version=${versionToValidate}; must be in the following enum: ["${Object.values(mongo_client_1.ServerApiVersion).join('", "')}"]`);
          }
          return serverApiToValidate;
        }
      },
      checkKeys: {
        type: "boolean"
      },
      compressors: {
        default: "none",
        target: "compressors",
        transform({ values }) {
          const compressionList = /* @__PURE__ */ new Set();
          for (const compVal of values) {
            const compValArray = typeof compVal === "string" ? compVal.split(",") : compVal;
            if (!Array.isArray(compValArray)) {
              throw new error_1.MongoInvalidArgumentError("compressors must be an array or a comma-delimited list of strings");
            }
            for (const c of compValArray) {
              if (Object.keys(compression_1.Compressor).includes(String(c))) {
                compressionList.add(String(c));
              } else {
                throw new error_1.MongoInvalidArgumentError(`${c} is not a valid compression mechanism. Must be one of: ${Object.keys(compression_1.Compressor)}.`);
              }
            }
          }
          return [...compressionList];
        }
      },
      connectTimeoutMS: {
        default: 3e4,
        type: "uint"
      },
      dbName: {
        type: "string"
      },
      directConnection: {
        default: false,
        type: "boolean"
      },
      driverInfo: {
        default: {},
        type: "record"
      },
      enableUtf8Validation: { type: "boolean", default: true },
      family: {
        transform({ name, values: [value] }) {
          const transformValue = getIntFromOptions(name, value);
          if (transformValue === 4 || transformValue === 6) {
            return transformValue;
          }
          throw new error_1.MongoParseError(`Option 'family' must be 4 or 6 got ${transformValue}.`);
        }
      },
      fieldsAsRaw: {
        type: "record"
      },
      forceServerObjectId: {
        default: false,
        type: "boolean"
      },
      fsync: {
        deprecated: "Please use journal instead",
        target: "writeConcern",
        transform({ name, options, values: [value] }) {
          const wc = write_concern_1.WriteConcern.fromOptions({
            writeConcern: {
              ...options.writeConcern,
              fsync: getBoolean(name, value)
            }
          });
          if (!wc)
            throw new error_1.MongoParseError(`Unable to make a writeConcern from fsync=${value}`);
          return wc;
        }
      },
      heartbeatFrequencyMS: {
        default: 1e4,
        type: "uint"
      },
      ignoreUndefined: {
        type: "boolean"
      },
      j: {
        deprecated: "Please use journal instead",
        target: "writeConcern",
        transform({ name, options, values: [value] }) {
          const wc = write_concern_1.WriteConcern.fromOptions({
            writeConcern: {
              ...options.writeConcern,
              journal: getBoolean(name, value)
            }
          });
          if (!wc)
            throw new error_1.MongoParseError(`Unable to make a writeConcern from journal=${value}`);
          return wc;
        }
      },
      journal: {
        target: "writeConcern",
        transform({ name, options, values: [value] }) {
          const wc = write_concern_1.WriteConcern.fromOptions({
            writeConcern: {
              ...options.writeConcern,
              journal: getBoolean(name, value)
            }
          });
          if (!wc)
            throw new error_1.MongoParseError(`Unable to make a writeConcern from journal=${value}`);
          return wc;
        }
      },
      loadBalanced: {
        default: false,
        type: "boolean"
      },
      localThresholdMS: {
        default: 15,
        type: "uint"
      },
      maxAdaptiveRetries: {
        default: 2,
        type: "uint"
      },
      maxConnecting: {
        default: 2,
        transform({ name, values: [value] }) {
          const maxConnecting = getUIntFromOptions(name, value);
          if (maxConnecting === 0) {
            throw new error_1.MongoInvalidArgumentError("maxConnecting must be > 0 if specified");
          }
          return maxConnecting;
        }
      },
      maxIdleTimeMS: {
        default: 0,
        type: "uint"
      },
      maxPoolSize: {
        default: 100,
        type: "uint"
      },
      maxStalenessSeconds: {
        target: "readPreference",
        transform({ name, options, values: [value] }) {
          const maxStalenessSeconds = getUIntFromOptions(name, value);
          if (options.readPreference) {
            return read_preference_1.ReadPreference.fromOptions({
              readPreference: { ...options.readPreference, maxStalenessSeconds }
            });
          } else {
            return new read_preference_1.ReadPreference("secondary", void 0, { maxStalenessSeconds });
          }
        }
      },
      minInternalBufferSize: {
        type: "uint"
      },
      minPoolSize: {
        default: 0,
        type: "uint"
      },
      minHeartbeatFrequencyMS: {
        default: 500,
        type: "uint"
      },
      monitorCommands: {
        default: false,
        type: "boolean"
      },
      name: {
        target: "driverInfo",
        transform({ values: [value], options }) {
          return { ...options.driverInfo, name: String(value) };
        }
      },
      noDelay: {
        default: true,
        type: "boolean"
      },
      pkFactory: {
        default: utils_1.DEFAULT_PK_FACTORY,
        transform({ values: [value] }) {
          if ((0, utils_1.isRecord)(value, ["createPk"]) && typeof value.createPk === "function") {
            return value;
          }
          throw new error_1.MongoParseError(`Option pkFactory must be an object with a createPk function, got ${value}`);
        }
      },
      promoteBuffers: {
        type: "boolean"
      },
      promoteLongs: {
        type: "boolean"
      },
      promoteValues: {
        type: "boolean"
      },
      useBigInt64: {
        type: "boolean"
      },
      proxyHost: {
        type: "string"
      },
      proxyPassword: {
        type: "string"
      },
      proxyPort: {
        type: "uint"
      },
      proxyUsername: {
        type: "string"
      },
      raw: {
        default: false,
        type: "boolean"
      },
      readConcern: {
        transform({ values: [value], options }) {
          if (value instanceof read_concern_1.ReadConcern || (0, utils_1.isRecord)(value, ["level"])) {
            return read_concern_1.ReadConcern.fromOptions({ ...options.readConcern, ...value });
          }
          throw new error_1.MongoParseError(`ReadConcern must be an object, got ${JSON.stringify(value)}`);
        }
      },
      readConcernLevel: {
        target: "readConcern",
        transform({ values: [level], options }) {
          return read_concern_1.ReadConcern.fromOptions({
            ...options.readConcern,
            level
          });
        }
      },
      readPreference: {
        default: read_preference_1.ReadPreference.primary,
        transform({ values: [value], options }) {
          if (value instanceof read_preference_1.ReadPreference) {
            return read_preference_1.ReadPreference.fromOptions({
              readPreference: { ...options.readPreference, ...value },
              ...value
            });
          }
          if ((0, utils_1.isRecord)(value, ["mode"])) {
            const rp = read_preference_1.ReadPreference.fromOptions({
              readPreference: { ...options.readPreference, ...value },
              ...value
            });
            if (rp)
              return rp;
            else
              throw new error_1.MongoParseError(`Cannot make read preference from ${JSON.stringify(value)}`);
          }
          if (typeof value === "string") {
            const rpOpts = {
              hedge: options.readPreference?.hedge,
              maxStalenessSeconds: options.readPreference?.maxStalenessSeconds
            };
            return new read_preference_1.ReadPreference(value, options.readPreference?.tags, rpOpts);
          }
          throw new error_1.MongoParseError(`Unknown ReadPreference value: ${value}`);
        }
      },
      readPreferenceTags: {
        target: "readPreference",
        transform({ values, options }) {
          const tags = Array.isArray(values[0]) ? values[0] : values;
          const readPreferenceTags = [];
          for (const tag of tags) {
            const readPreferenceTag = /* @__PURE__ */ Object.create(null);
            if (typeof tag === "string") {
              for (const [k, v] of entriesFromString(tag)) {
                readPreferenceTag[k] = v;
              }
            }
            if ((0, utils_1.isRecord)(tag)) {
              for (const [k, v] of Object.entries(tag)) {
                readPreferenceTag[k] = v;
              }
            }
            readPreferenceTags.push(readPreferenceTag);
          }
          return read_preference_1.ReadPreference.fromOptions({
            readPreference: options.readPreference,
            readPreferenceTags
          });
        }
      },
      replicaSet: {
        type: "string"
      },
      retryReads: {
        default: true,
        type: "boolean"
      },
      retryWrites: {
        default: true,
        type: "boolean"
      },
      runtimeAdapters: {
        type: "record"
      },
      serializeFunctions: {
        type: "boolean"
      },
      serverMonitoringMode: {
        default: "auto",
        transform({ values: [value] }) {
          if (!Object.values(monitor_1.ServerMonitoringMode).includes(value)) {
            throw new error_1.MongoParseError("serverMonitoringMode must be one of `auto`, `poll`, or `stream`");
          }
          return value;
        }
      },
      serverSelectionTimeoutMS: {
        default: 3e4,
        type: "uint"
      },
      servername: {
        type: "string"
      },
      socketTimeoutMS: {
        // TODO(NODE-6491): deprecated: 'Please use timeoutMS instead',
        default: 0,
        type: "uint"
      },
      srvMaxHosts: {
        type: "uint",
        default: 0
      },
      srvServiceName: {
        type: "string",
        default: "mongodb"
      },
      ssl: {
        target: "tls",
        type: "boolean"
      },
      timeoutMS: {
        type: "uint"
      },
      tls: {
        type: "boolean"
      },
      tlsAllowInvalidCertificates: {
        target: "rejectUnauthorized",
        transform({ name, values: [value] }) {
          return !getBoolean(name, value);
        }
      },
      tlsAllowInvalidHostnames: {
        target: "checkServerIdentity",
        transform({ name, values: [value] }) {
          return getBoolean(name, value) ? () => void 0 : void 0;
        }
      },
      tlsCAFile: {
        type: "string"
      },
      tlsCRLFile: {
        type: "string"
      },
      tlsCertificateKeyFile: {
        type: "string"
      },
      tlsCertificateKeyFilePassword: {
        target: "passphrase",
        type: "any"
      },
      tlsInsecure: {
        transform({ name, options, values: [value] }) {
          const tlsInsecure = getBoolean(name, value);
          if (tlsInsecure) {
            options.checkServerIdentity = () => void 0;
            options.rejectUnauthorized = false;
          } else {
            options.checkServerIdentity = options.tlsAllowInvalidHostnames ? () => void 0 : void 0;
            options.rejectUnauthorized = options.tlsAllowInvalidCertificates ? false : true;
          }
          return tlsInsecure;
        }
      },
      w: {
        target: "writeConcern",
        transform({ values: [value], options }) {
          return write_concern_1.WriteConcern.fromOptions({ writeConcern: { ...options.writeConcern, w: value } });
        }
      },
      waitQueueTimeoutMS: {
        // TODO(NODE-6491): deprecated: 'Please use timeoutMS instead',
        default: 0,
        type: "uint"
      },
      writeConcern: {
        target: "writeConcern",
        transform({ values: [value], options }) {
          if ((0, utils_1.isRecord)(value) || value instanceof write_concern_1.WriteConcern) {
            return write_concern_1.WriteConcern.fromOptions({
              writeConcern: {
                ...options.writeConcern,
                ...value
              }
            });
          } else if (value === "majority" || typeof value === "number") {
            return write_concern_1.WriteConcern.fromOptions({
              writeConcern: {
                ...options.writeConcern,
                w: value
              }
            });
          }
          throw new error_1.MongoParseError(`Invalid WriteConcern cannot parse: ${JSON.stringify(value)}`);
        }
      },
      wtimeout: {
        deprecated: "Please use wtimeoutMS instead",
        target: "writeConcern",
        transform({ values: [value], options }) {
          const wc = write_concern_1.WriteConcern.fromOptions({
            writeConcern: {
              ...options.writeConcern,
              wtimeout: getUIntFromOptions("wtimeout", value)
            }
          });
          if (wc)
            return wc;
          throw new error_1.MongoParseError(`Cannot make WriteConcern from wtimeout`);
        }
      },
      wtimeoutMS: {
        target: "writeConcern",
        transform({ values: [value], options }) {
          const wc = write_concern_1.WriteConcern.fromOptions({
            writeConcern: {
              ...options.writeConcern,
              wtimeoutMS: getUIntFromOptions("wtimeoutMS", value)
            }
          });
          if (wc)
            return wc;
          throw new error_1.MongoParseError(`Cannot make WriteConcern from wtimeout`);
        }
      },
      zlibCompressionLevel: {
        default: 0,
        type: "int"
      },
      mongodbLogPath: {
        transform({ values: [value] }) {
          if (!(typeof value === "string" && ["stderr", "stdout"].includes(value) || value && typeof value === "object" && "write" in value && typeof value.write === "function")) {
            throw new error_1.MongoAPIError(`Option 'mongodbLogPath' must be of type 'stderr' | 'stdout' | MongoDBLogWritable`);
          }
          return value;
        }
      },
      mongodbLogComponentSeverities: {
        transform({ values: [value] }) {
          if (typeof value !== "object" || !value) {
            throw new error_1.MongoAPIError(`Option 'mongodbLogComponentSeverities' must be a non-null object`);
          }
          for (const [k, v] of Object.entries(value)) {
            if (typeof v !== "string" || typeof k !== "string") {
              throw new error_1.MongoAPIError(`User input for option 'mongodbLogComponentSeverities' object cannot include a non-string key or value`);
            }
            if (!Object.values(mongo_logger_1.MongoLoggableComponent).some((val) => val === k) && k !== "default") {
              throw new error_1.MongoAPIError(`User input for option 'mongodbLogComponentSeverities' contains invalid key: ${k}`);
            }
            if (!Object.values(mongo_logger_1.SeverityLevel).some((val) => val === v)) {
              throw new error_1.MongoAPIError(`Option 'mongodbLogComponentSeverities' does not support ${v} as a value for ${k}`);
            }
          }
          return value;
        }
      },
      mongodbLogMaxDocumentLength: { type: "uint" },
      // Custom types for modifying core behavior
      connectionType: { type: "any" },
      srvPoller: { type: "any" },
      // Accepted Node.js Options
      allowPartialTrustChain: { type: "any" },
      minDHSize: { type: "any" },
      pskCallback: { type: "any" },
      secureContext: { type: "any" },
      enableTrace: { type: "any" },
      requestCert: { type: "any" },
      rejectUnauthorized: { type: "any" },
      checkServerIdentity: { type: "any" },
      keepAliveInitialDelay: { type: "any" },
      ALPNProtocols: { type: "any" },
      SNICallback: { type: "any" },
      session: { type: "any" },
      requestOCSP: { type: "any" },
      localAddress: { type: "any" },
      localPort: { type: "any" },
      hints: { type: "any" },
      lookup: { type: "any" },
      ca: { type: "any" },
      cert: { type: "any" },
      ciphers: { type: "any" },
      crl: { type: "any" },
      ecdhCurve: { type: "any" },
      key: { type: "any" },
      passphrase: { type: "any" },
      pfx: { type: "any" },
      secureProtocol: { type: "any" },
      index: { type: "any" },
      // Legacy options from v3 era
      __skipPingOnConnect: { type: "boolean" }
    };
    exports.DEFAULT_OPTIONS = new CaseInsensitiveMap(Object.entries(exports.OPTIONS).filter(([, descriptor]) => descriptor.default != null).map(([k, d]) => [k, d.default]));
  })(connection_string);
  return connection_string;
}
var mongo_client_auth_providers = {};
var mongodb_aws = {};
var aws4 = {};
var hasRequiredAws4;
function requireAws4() {
  if (hasRequiredAws4) return aws4;
  hasRequiredAws4 = 1;
  Object.defineProperty(aws4, "__esModule", { value: true });
  aws4.aws4Sign = aws4Sign;
  const bson_1 = requireBson();
  const getHexSha256 = async (str) => {
    const data = stringToBuffer(str);
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    const hashHex = bson_1.ByteUtils.toHex(new Uint8Array(hashBuffer));
    return hashHex;
  };
  const getHmacSha256 = async (key, str) => {
    let keyData;
    if (typeof key === "string") {
      keyData = stringToBuffer(key);
    } else {
      keyData = key;
    }
    const importedKey = await crypto.subtle.importKey("raw", keyData, { name: "HMAC", hash: { name: "SHA-256" } }, false, ["sign"]);
    const strData = stringToBuffer(str);
    const signature = await crypto.subtle.sign("HMAC", importedKey, strData);
    const digest = new Uint8Array(signature);
    return digest;
  };
  const convertHeaderValue = (value) => {
    return value.toString().trim().replace(/\s+/g, " ");
  };
  function stringToBuffer(str) {
    const data = new Uint8Array(bson_1.ByteUtils.utf8ByteLength(str));
    bson_1.ByteUtils.encodeUTF8Into(data, str, 0);
    return data;
  }
  async function aws4Sign(options, credentials) {
    const date = options.date;
    const requestDateTime = date.toISOString().replace(/[:-]|\.\d{3}/g, "");
    const requestDate = requestDateTime.substring(0, 8);
    const method = options.method;
    const canonicalUri = options.path;
    const canonicalQuerystring = "";
    const headers = new Headers({
      "content-length": convertHeaderValue(options.headers["Content-Length"]),
      "content-type": convertHeaderValue(options.headers["Content-Type"]),
      host: convertHeaderValue(options.host),
      "x-amz-date": convertHeaderValue(requestDateTime),
      "x-mongodb-gs2-cb-flag": convertHeaderValue(options.headers["X-MongoDB-GS2-CB-Flag"]),
      "x-mongodb-server-nonce": convertHeaderValue(options.headers["X-MongoDB-Server-Nonce"])
    });
    if ("sessionToken" in credentials && credentials.sessionToken) {
      headers.append("x-amz-security-token", convertHeaderValue(credentials.sessionToken));
    }
    const canonicalHeaders = Array.from(headers.entries()).map(([key, value]) => `${key.toLowerCase()}:${value}`).sort().join("\n");
    const canonicalHeaderNames = Array.from(headers.keys()).map((header) => header.toLowerCase());
    const signedHeaders = canonicalHeaderNames.sort().join(";");
    const hashedPayload = await getHexSha256(options.body);
    const canonicalRequest = [
      method,
      canonicalUri,
      canonicalQuerystring,
      canonicalHeaders + "\n",
      signedHeaders,
      hashedPayload
    ].join("\n");
    const hashedCanonicalRequest = await getHexSha256(canonicalRequest);
    const algorithm = "AWS4-HMAC-SHA256";
    const credentialScope = `${requestDate}/${options.region}/${options.service}/aws4_request`;
    const stringToSign = [algorithm, requestDateTime, credentialScope, hashedCanonicalRequest].join("\n");
    const dateKey = await getHmacSha256("AWS4" + credentials.secretAccessKey, requestDate);
    const dateRegionKey = await getHmacSha256(dateKey, options.region);
    const dateRegionServiceKey = await getHmacSha256(dateRegionKey, options.service);
    const signingKey = await getHmacSha256(dateRegionServiceKey, "aws4_request");
    const signatureBuffer = await getHmacSha256(signingKey, stringToSign);
    const signature = bson_1.ByteUtils.toHex(signatureBuffer);
    const authorizationHeader = [
      "AWS4-HMAC-SHA256 Credential=" + credentials.accessKeyId + "/" + credentialScope,
      "SignedHeaders=" + signedHeaders,
      "Signature=" + signature
    ].join(", ");
    return {
      Authorization: authorizationHeader,
      "X-Amz-Date": requestDateTime
    };
  }
  return aws4;
}
var hasRequiredMongodb_aws;
function requireMongodb_aws() {
  if (hasRequiredMongodb_aws) return mongodb_aws;
  hasRequiredMongodb_aws = 1;
  Object.defineProperty(mongodb_aws, "__esModule", { value: true });
  mongodb_aws.MongoDBAWS = void 0;
  const bson_1 = requireBson();
  const BSON = requireBson();
  const error_1 = requireError();
  const utils_1 = requireUtils();
  const auth_provider_1 = requireAuth_provider();
  const aws_temporary_credentials_1 = requireAws_temporary_credentials();
  const aws4_1 = requireAws4();
  const mongo_credentials_1 = requireMongo_credentials();
  const providers_1 = requireProviders$1();
  const ASCII_N = 110;
  const bsonOptions = {
    useBigInt64: false,
    promoteLongs: true,
    promoteValues: true,
    promoteBuffers: false,
    bsonRegExp: false
  };
  class MongoDBAWS extends auth_provider_1.AuthProvider {
    constructor(credentialProvider) {
      super();
      this.credentialFetcher = new aws_temporary_credentials_1.AWSSDKCredentialProvider(credentialProvider);
    }
    async auth(authContext) {
      const { connection: connection2 } = authContext;
      if (!authContext.credentials) {
        throw new error_1.MongoMissingCredentialsError("AuthContext must provide credentials.");
      }
      if ((0, utils_1.maxWireVersion)(connection2) < 9) {
        throw new error_1.MongoCompatibilityError("MONGODB-AWS authentication requires MongoDB version 4.4 or later");
      }
      authContext.credentials = await makeTempCredentials(authContext.credentials, this.credentialFetcher);
      const { credentials } = authContext;
      const accessKeyId = credentials.username;
      const secretAccessKey = credentials.password;
      const sessionToken = credentials.mechanismProperties.AWS_SESSION_TOKEN;
      const awsCredentials = sessionToken ? { accessKeyId, secretAccessKey, sessionToken } : { accessKeyId, secretAccessKey };
      const db2 = credentials.source;
      const nonce = await (0, utils_1.randomBytes)(32);
      const saslStart = {
        saslStart: 1,
        mechanism: "MONGODB-AWS",
        payload: BSON.serialize({ r: nonce, p: ASCII_N }, bsonOptions)
      };
      const saslStartResponse = await connection2.command((0, utils_1.ns)(`${db2}.$cmd`), saslStart, void 0);
      const serverResponse = BSON.deserialize(saslStartResponse.payload.buffer, bsonOptions);
      const host = serverResponse.h;
      const serverNonce = serverResponse.s.buffer;
      if (serverNonce.length !== 64) {
        throw new error_1.MongoRuntimeError(`Invalid server nonce length ${serverNonce.length}, expected 64`);
      }
      if (!bson_1.ByteUtils.equals(serverNonce.subarray(0, nonce.byteLength), nonce)) {
        throw new error_1.MongoRuntimeError("Server nonce does not begin with client nonce");
      }
      if (host.length < 1 || host.length > 255 || host.indexOf("..") !== -1) {
        throw new error_1.MongoRuntimeError(`Server returned an invalid host: "${host}"`);
      }
      const body = "Action=GetCallerIdentity&Version=2011-06-15";
      const headers = await (0, aws4_1.aws4Sign)({
        method: "POST",
        host,
        region: deriveRegion(serverResponse.h),
        service: "sts",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Content-Length": body.length,
          "X-MongoDB-Server-Nonce": bson_1.ByteUtils.toBase64(serverNonce),
          "X-MongoDB-GS2-CB-Flag": "n"
        },
        path: "/",
        body,
        date: /* @__PURE__ */ new Date()
      }, awsCredentials);
      const payload = {
        a: headers.Authorization,
        d: headers["X-Amz-Date"]
      };
      if (sessionToken) {
        payload.t = sessionToken;
      }
      const saslContinue = {
        saslContinue: 1,
        conversationId: saslStartResponse.conversationId,
        payload: BSON.serialize(payload, bsonOptions)
      };
      await connection2.command((0, utils_1.ns)(`${db2}.$cmd`), saslContinue, void 0);
    }
  }
  mongodb_aws.MongoDBAWS = MongoDBAWS;
  async function makeTempCredentials(credentials, awsCredentialFetcher) {
    function makeMongoCredentialsFromAWSTemp(creds) {
      if (!creds.AccessKeyId || !creds.SecretAccessKey) {
        throw new error_1.MongoMissingCredentialsError("Could not obtain temporary MONGODB-AWS credentials");
      }
      return new mongo_credentials_1.MongoCredentials({
        username: creds.AccessKeyId,
        password: creds.SecretAccessKey,
        source: credentials.source,
        mechanism: providers_1.AuthMechanism.MONGODB_AWS,
        mechanismProperties: {
          AWS_SESSION_TOKEN: creds.Token
        }
      });
    }
    const temporaryCredentials = await awsCredentialFetcher.getCredentials();
    return makeMongoCredentialsFromAWSTemp(temporaryCredentials);
  }
  function deriveRegion(host) {
    const parts = host.split(".");
    if (parts.length === 1 || parts[1] === "amazonaws") {
      return "us-east-1";
    }
    return parts[1];
  }
  return mongodb_aws;
}
var mongodb_oidc = {};
var automated_callback_workflow = {};
var callback_workflow = {};
var command_builders = {};
var hasRequiredCommand_builders;
function requireCommand_builders() {
  if (hasRequiredCommand_builders) return command_builders;
  hasRequiredCommand_builders = 1;
  Object.defineProperty(command_builders, "__esModule", { value: true });
  command_builders.finishCommandDocument = finishCommandDocument;
  command_builders.startCommandDocument = startCommandDocument;
  const bson_1 = requireBson();
  const providers_1 = requireProviders$1();
  function finishCommandDocument(token, conversationId) {
    if (conversationId != null) {
      return {
        saslContinue: 1,
        conversationId,
        payload: new bson_1.Binary(bson_1.BSON.serialize({ jwt: token }))
      };
    }
    return {
      saslStart: 1,
      mechanism: providers_1.AuthMechanism.MONGODB_OIDC,
      payload: new bson_1.Binary(bson_1.BSON.serialize({ jwt: token }))
    };
  }
  function startCommandDocument(credentials) {
    const payload = {};
    if (credentials.username) {
      payload.n = credentials.username;
    }
    return {
      saslStart: 1,
      autoAuthorize: 1,
      mechanism: providers_1.AuthMechanism.MONGODB_OIDC,
      payload: new bson_1.Binary(bson_1.BSON.serialize(payload))
    };
  }
  return command_builders;
}
var hasRequiredCallback_workflow;
function requireCallback_workflow() {
  if (hasRequiredCallback_workflow) return callback_workflow;
  hasRequiredCallback_workflow = 1;
  Object.defineProperty(callback_workflow, "__esModule", { value: true });
  callback_workflow.CallbackWorkflow = callback_workflow.AUTOMATED_TIMEOUT_MS = callback_workflow.HUMAN_TIMEOUT_MS = void 0;
  const promises_1 = require$$0$3;
  const error_1 = requireError();
  const utils_1 = requireUtils();
  const command_builders_1 = requireCommand_builders();
  callback_workflow.HUMAN_TIMEOUT_MS = 3e5;
  callback_workflow.AUTOMATED_TIMEOUT_MS = 6e4;
  const RESULT_PROPERTIES = ["accessToken", "expiresInSeconds", "refreshToken"];
  const CALLBACK_RESULT_ERROR = "User provided OIDC callbacks must return a valid object with an accessToken.";
  const THROTTLE_MS = 100;
  class CallbackWorkflow {
    /**
     * Instantiate the callback workflow.
     */
    constructor(cache, callback) {
      this.cache = cache;
      this.callback = this.withLock(callback);
      this.lastExecutionTime = Date.now() - THROTTLE_MS;
    }
    /**
     * Get the document to add for speculative authentication. This also needs
     * to add a db field from the credentials source.
     */
    async speculativeAuth(connection2, credentials) {
      if (this.cache.hasAccessToken) {
        const accessToken = this.cache.getAccessToken();
        connection2.accessToken = accessToken;
        const document2 = (0, command_builders_1.finishCommandDocument)(accessToken);
        document2.db = credentials.source;
        return { speculativeAuthenticate: document2 };
      }
      return {};
    }
    /**
     * Reauthenticate the callback workflow. For this we invalidated the access token
     * in the cache and run the authentication steps again. No initial handshake needs
     * to be sent.
     */
    async reauthenticate(connection2, credentials) {
      if (this.cache.hasAccessToken) {
        if (connection2.accessToken === this.cache.getAccessToken()) {
          this.cache.removeAccessToken();
          delete connection2.accessToken;
        } else {
          connection2.accessToken = this.cache.getAccessToken();
        }
      }
      await this.execute(connection2, credentials);
    }
    /**
     * Starts the callback authentication process. If there is a speculative
     * authentication document from the initial handshake, then we will use that
     * value to get the issuer, otherwise we will send the saslStart command.
     */
    async startAuthentication(connection2, credentials, response) {
      let result;
      if (response?.speculativeAuthenticate) {
        result = response.speculativeAuthenticate;
      } else {
        result = await connection2.command((0, utils_1.ns)(credentials.source), (0, command_builders_1.startCommandDocument)(credentials), void 0);
      }
      return result;
    }
    /**
     * Finishes the callback authentication process.
     */
    async finishAuthentication(connection2, credentials, token, conversationId) {
      await connection2.command((0, utils_1.ns)(credentials.source), (0, command_builders_1.finishCommandDocument)(token, conversationId), void 0);
    }
    /**
     * Executes the callback and validates the output.
     */
    async executeAndValidateCallback(params) {
      const result = await this.callback(params);
      if (isCallbackResultInvalid(result)) {
        throw new error_1.MongoMissingCredentialsError(CALLBACK_RESULT_ERROR);
      }
      return result;
    }
    /**
     * Ensure the callback is only executed one at a time and throttles the calls
     * to every 100ms.
     */
    withLock(callback) {
      let lock = Promise.resolve();
      return async (params) => {
        await lock;
        lock = lock.catch(() => null).then(async () => {
          const difference = Date.now() - this.lastExecutionTime;
          if (difference <= THROTTLE_MS) {
            await (0, promises_1.setTimeout)(THROTTLE_MS - difference, { signal: params.timeoutContext });
          }
          this.lastExecutionTime = Date.now();
          return await callback(params);
        });
        return await lock;
      };
    }
  }
  callback_workflow.CallbackWorkflow = CallbackWorkflow;
  function isCallbackResultInvalid(tokenResult) {
    if (tokenResult == null || typeof tokenResult !== "object")
      return true;
    if (!("accessToken" in tokenResult))
      return true;
    return !Object.getOwnPropertyNames(tokenResult).every((prop) => RESULT_PROPERTIES.includes(prop));
  }
  return callback_workflow;
}
var hasRequiredAutomated_callback_workflow;
function requireAutomated_callback_workflow() {
  if (hasRequiredAutomated_callback_workflow) return automated_callback_workflow;
  hasRequiredAutomated_callback_workflow = 1;
  Object.defineProperty(automated_callback_workflow, "__esModule", { value: true });
  automated_callback_workflow.AutomatedCallbackWorkflow = void 0;
  const error_1 = requireError();
  const timeout_1 = requireTimeout();
  const mongodb_oidc_1 = requireMongodb_oidc();
  const callback_workflow_1 = requireCallback_workflow();
  class AutomatedCallbackWorkflow extends callback_workflow_1.CallbackWorkflow {
    /**
     * Instantiate the human callback workflow.
     */
    constructor(cache, callback) {
      super(cache, callback);
    }
    /**
     * Execute the OIDC callback workflow.
     */
    async execute(connection2, credentials) {
      if (this.cache.hasAccessToken) {
        const token = this.cache.getAccessToken();
        if (!connection2.accessToken) {
          connection2.accessToken = token;
        }
        try {
          return await this.finishAuthentication(connection2, credentials, token);
        } catch (error2) {
          if (error2 instanceof error_1.MongoError && error2.code === error_1.MONGODB_ERROR_CODES.AuthenticationFailed) {
            this.cache.removeAccessToken();
            return await this.execute(connection2, credentials);
          } else {
            throw error2;
          }
        }
      }
      const response = await this.fetchAccessToken(credentials);
      this.cache.put(response);
      connection2.accessToken = response.accessToken;
      await this.finishAuthentication(connection2, credentials, response.accessToken);
    }
    /**
     * Fetches the access token using the callback.
     */
    async fetchAccessToken(credentials) {
      const controller = new AbortController();
      const params = {
        timeoutContext: controller.signal,
        version: mongodb_oidc_1.OIDC_VERSION
      };
      if (credentials.username) {
        params.username = credentials.username;
      }
      if (credentials.mechanismProperties.TOKEN_RESOURCE) {
        params.tokenAudience = credentials.mechanismProperties.TOKEN_RESOURCE;
      }
      const timeout2 = timeout_1.Timeout.expires(callback_workflow_1.AUTOMATED_TIMEOUT_MS);
      try {
        return await Promise.race([this.executeAndValidateCallback(params), timeout2]);
      } catch (error2) {
        if (timeout_1.TimeoutError.is(error2)) {
          controller.abort();
          throw new error_1.MongoOIDCError(`OIDC callback timed out after ${callback_workflow_1.AUTOMATED_TIMEOUT_MS}ms.`);
        }
        throw error2;
      } finally {
        timeout2.clear();
      }
    }
  }
  automated_callback_workflow.AutomatedCallbackWorkflow = AutomatedCallbackWorkflow;
  return automated_callback_workflow;
}
var azure_machine_workflow = {};
var hasRequiredAzure_machine_workflow;
function requireAzure_machine_workflow() {
  if (hasRequiredAzure_machine_workflow) return azure_machine_workflow;
  hasRequiredAzure_machine_workflow = 1;
  Object.defineProperty(azure_machine_workflow, "__esModule", { value: true });
  azure_machine_workflow.azureCallback = void 0;
  const azure_1 = requireAzure();
  const error_1 = requireError();
  const utils_1 = requireUtils();
  const AZURE_HEADERS = Object.freeze({ Metadata: "true", Accept: "application/json" });
  const ENDPOINT_RESULT_ERROR = "Azure endpoint did not return a value with only access_token and expires_in properties";
  const TOKEN_RESOURCE_MISSING_ERROR = "TOKEN_RESOURCE must be set in the auth mechanism properties when ENVIRONMENT is azure.";
  const azureCallback = async (params) => {
    const tokenAudience = params.tokenAudience;
    const username = params.username;
    if (!tokenAudience) {
      throw new error_1.MongoAzureError(TOKEN_RESOURCE_MISSING_ERROR);
    }
    const response = await getAzureTokenData(tokenAudience, username);
    if (!isEndpointResultValid(response)) {
      throw new error_1.MongoAzureError(ENDPOINT_RESULT_ERROR);
    }
    return response;
  };
  azure_machine_workflow.azureCallback = azureCallback;
  async function getAzureTokenData(tokenAudience, username) {
    const url = new URL(azure_1.AZURE_BASE_URL);
    (0, azure_1.addAzureParams)(url, tokenAudience, username);
    const response = await (0, utils_1.get)(url, {
      headers: AZURE_HEADERS
    });
    if (response.status !== 200) {
      throw new error_1.MongoAzureError(`Status code ${response.status} returned from the Azure endpoint. Response body: ${response.body}`);
    }
    const result = JSON.parse(response.body);
    return {
      accessToken: result.access_token,
      expiresInSeconds: Number(result.expires_in)
    };
  }
  function isEndpointResultValid(token) {
    if (token == null || typeof token !== "object")
      return false;
    return "accessToken" in token && typeof token.accessToken === "string" && "expiresInSeconds" in token && typeof token.expiresInSeconds === "number";
  }
  return azure_machine_workflow;
}
var gcp_machine_workflow = {};
var hasRequiredGcp_machine_workflow;
function requireGcp_machine_workflow() {
  if (hasRequiredGcp_machine_workflow) return gcp_machine_workflow;
  hasRequiredGcp_machine_workflow = 1;
  Object.defineProperty(gcp_machine_workflow, "__esModule", { value: true });
  gcp_machine_workflow.gcpCallback = void 0;
  const error_1 = requireError();
  const utils_1 = requireUtils();
  const GCP_BASE_URL = "http://metadata/computeMetadata/v1/instance/service-accounts/default/identity";
  const GCP_HEADERS = Object.freeze({ "Metadata-Flavor": "Google" });
  const TOKEN_RESOURCE_MISSING_ERROR = "TOKEN_RESOURCE must be set in the auth mechanism properties when ENVIRONMENT is gcp.";
  const gcpCallback = async (params) => {
    const tokenAudience = params.tokenAudience;
    if (!tokenAudience) {
      throw new error_1.MongoGCPError(TOKEN_RESOURCE_MISSING_ERROR);
    }
    return await getGcpTokenData(tokenAudience);
  };
  gcp_machine_workflow.gcpCallback = gcpCallback;
  async function getGcpTokenData(tokenAudience) {
    const url = new URL(GCP_BASE_URL);
    url.searchParams.append("audience", tokenAudience);
    const response = await (0, utils_1.get)(url, {
      headers: GCP_HEADERS
    });
    if (response.status !== 200) {
      throw new error_1.MongoGCPError(`Status code ${response.status} returned from the GCP endpoint. Response body: ${response.body}`);
    }
    return { accessToken: response.body };
  }
  return gcp_machine_workflow;
}
var k8s_machine_workflow = {};
var hasRequiredK8s_machine_workflow;
function requireK8s_machine_workflow() {
  if (hasRequiredK8s_machine_workflow) return k8s_machine_workflow;
  hasRequiredK8s_machine_workflow = 1;
  Object.defineProperty(k8s_machine_workflow, "__esModule", { value: true });
  k8s_machine_workflow.k8sCallback = void 0;
  const promises_1 = require$$0$9;
  const process = require$$0;
  const FALLBACK_FILENAME = "/var/run/secrets/kubernetes.io/serviceaccount/token";
  const AZURE_FILENAME = "AZURE_FEDERATED_TOKEN_FILE";
  const AWS_FILENAME = "AWS_WEB_IDENTITY_TOKEN_FILE";
  const k8sCallback = async () => {
    let filename;
    if (process.env[AZURE_FILENAME]) {
      filename = process.env[AZURE_FILENAME];
    } else if (process.env[AWS_FILENAME]) {
      filename = process.env[AWS_FILENAME];
    } else {
      filename = FALLBACK_FILENAME;
    }
    const token = await (0, promises_1.readFile)(filename, "utf8");
    return { accessToken: token };
  };
  k8s_machine_workflow.k8sCallback = k8sCallback;
  return k8s_machine_workflow;
}
var token_cache = {};
var hasRequiredToken_cache;
function requireToken_cache() {
  if (hasRequiredToken_cache) return token_cache;
  hasRequiredToken_cache = 1;
  Object.defineProperty(token_cache, "__esModule", { value: true });
  token_cache.TokenCache = void 0;
  const error_1 = requireError();
  class MongoOIDCError extends error_1.MongoDriverError {
  }
  class TokenCache {
    get hasAccessToken() {
      return !!this.accessToken;
    }
    get hasRefreshToken() {
      return !!this.refreshToken;
    }
    get hasIdpInfo() {
      return !!this.idpInfo;
    }
    getAccessToken() {
      if (!this.accessToken) {
        throw new MongoOIDCError("Attempted to get an access token when none exists.");
      }
      return this.accessToken;
    }
    getRefreshToken() {
      if (!this.refreshToken) {
        throw new MongoOIDCError("Attempted to get a refresh token when none exists.");
      }
      return this.refreshToken;
    }
    getIdpInfo() {
      if (!this.idpInfo) {
        throw new MongoOIDCError("Attempted to get IDP information when none exists.");
      }
      return this.idpInfo;
    }
    put(response, idpInfo) {
      this.accessToken = response.accessToken;
      this.refreshToken = response.refreshToken;
      this.expiresInSeconds = response.expiresInSeconds;
      if (idpInfo) {
        this.idpInfo = idpInfo;
      }
    }
    removeAccessToken() {
      this.accessToken = void 0;
    }
    removeRefreshToken() {
      this.refreshToken = void 0;
    }
  }
  token_cache.TokenCache = TokenCache;
  return token_cache;
}
var token_machine_workflow = {};
var hasRequiredToken_machine_workflow;
function requireToken_machine_workflow() {
  if (hasRequiredToken_machine_workflow) return token_machine_workflow;
  hasRequiredToken_machine_workflow = 1;
  Object.defineProperty(token_machine_workflow, "__esModule", { value: true });
  token_machine_workflow.tokenMachineCallback = void 0;
  const fs = require$$0$2;
  const process = require$$0;
  const error_1 = requireError();
  const TOKEN_MISSING_ERROR = "OIDC_TOKEN_FILE must be set in the environment.";
  const tokenMachineCallback = async () => {
    const tokenFile = process.env.OIDC_TOKEN_FILE;
    if (!tokenFile) {
      throw new error_1.MongoAWSError(TOKEN_MISSING_ERROR);
    }
    const token = await fs.promises.readFile(tokenFile, "utf8");
    return { accessToken: token };
  };
  token_machine_workflow.tokenMachineCallback = tokenMachineCallback;
  return token_machine_workflow;
}
var hasRequiredMongodb_oidc;
function requireMongodb_oidc() {
  if (hasRequiredMongodb_oidc) return mongodb_oidc;
  hasRequiredMongodb_oidc = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MongoDBOIDC = exports.OIDC_WORKFLOWS = exports.OIDC_VERSION = void 0;
    const error_1 = requireError();
    const auth_provider_1 = requireAuth_provider();
    const automated_callback_workflow_1 = requireAutomated_callback_workflow();
    const azure_machine_workflow_1 = requireAzure_machine_workflow();
    const gcp_machine_workflow_1 = requireGcp_machine_workflow();
    const k8s_machine_workflow_1 = requireK8s_machine_workflow();
    const token_cache_1 = requireToken_cache();
    const token_machine_workflow_1 = requireToken_machine_workflow();
    const MISSING_CREDENTIALS_ERROR = "AuthContext must provide credentials.";
    exports.OIDC_VERSION = 1;
    exports.OIDC_WORKFLOWS = /* @__PURE__ */ new Map();
    exports.OIDC_WORKFLOWS.set("test", () => new automated_callback_workflow_1.AutomatedCallbackWorkflow(new token_cache_1.TokenCache(), token_machine_workflow_1.tokenMachineCallback));
    exports.OIDC_WORKFLOWS.set("azure", () => new automated_callback_workflow_1.AutomatedCallbackWorkflow(new token_cache_1.TokenCache(), azure_machine_workflow_1.azureCallback));
    exports.OIDC_WORKFLOWS.set("gcp", () => new automated_callback_workflow_1.AutomatedCallbackWorkflow(new token_cache_1.TokenCache(), gcp_machine_workflow_1.gcpCallback));
    exports.OIDC_WORKFLOWS.set("k8s", () => new automated_callback_workflow_1.AutomatedCallbackWorkflow(new token_cache_1.TokenCache(), k8s_machine_workflow_1.k8sCallback));
    class MongoDBOIDC extends auth_provider_1.AuthProvider {
      /**
       * Instantiate the auth provider.
       */
      constructor(workflow) {
        super();
        if (!workflow) {
          throw new error_1.MongoInvalidArgumentError("No workflow provided to the OIDC auth provider.");
        }
        this.workflow = workflow;
      }
      /**
       * Authenticate using OIDC
       */
      async auth(authContext) {
        const { connection: connection2, reauthenticating, response } = authContext;
        if (response?.speculativeAuthenticate?.done && !reauthenticating) {
          return;
        }
        const credentials = getCredentials(authContext);
        if (reauthenticating) {
          await this.workflow.reauthenticate(connection2, credentials);
        } else {
          await this.workflow.execute(connection2, credentials, response);
        }
      }
      /**
       * Add the speculative auth for the initial handshake.
       */
      async prepare(handshakeDoc, authContext) {
        const { connection: connection2 } = authContext;
        const credentials = getCredentials(authContext);
        const result = await this.workflow.speculativeAuth(connection2, credentials);
        return { ...handshakeDoc, ...result };
      }
    }
    exports.MongoDBOIDC = MongoDBOIDC;
    function getCredentials(authContext) {
      const { credentials } = authContext;
      if (!credentials) {
        throw new error_1.MongoMissingCredentialsError(MISSING_CREDENTIALS_ERROR);
      }
      return credentials;
    }
  })(mongodb_oidc);
  return mongodb_oidc;
}
var human_callback_workflow = {};
var hasRequiredHuman_callback_workflow;
function requireHuman_callback_workflow() {
  if (hasRequiredHuman_callback_workflow) return human_callback_workflow;
  hasRequiredHuman_callback_workflow = 1;
  Object.defineProperty(human_callback_workflow, "__esModule", { value: true });
  human_callback_workflow.HumanCallbackWorkflow = void 0;
  const bson_1 = requireBson();
  const error_1 = requireError();
  const timeout_1 = requireTimeout();
  const mongodb_oidc_1 = requireMongodb_oidc();
  const callback_workflow_1 = requireCallback_workflow();
  class HumanCallbackWorkflow extends callback_workflow_1.CallbackWorkflow {
    /**
     * Instantiate the human callback workflow.
     */
    constructor(cache, callback) {
      super(cache, callback);
    }
    /**
     * Execute the OIDC human callback workflow.
     */
    async execute(connection2, credentials) {
      if (this.cache.hasAccessToken) {
        const token = this.cache.getAccessToken();
        connection2.accessToken = token;
        try {
          return await this.finishAuthentication(connection2, credentials, token);
        } catch (error2) {
          if (error2 instanceof error_1.MongoError && error2.code === error_1.MONGODB_ERROR_CODES.AuthenticationFailed) {
            this.cache.removeAccessToken();
            delete connection2.accessToken;
            return await this.execute(connection2, credentials);
          } else {
            throw error2;
          }
        }
      }
      if (this.cache.hasRefreshToken) {
        const refreshToken = this.cache.getRefreshToken();
        const result = await this.fetchAccessToken(this.cache.getIdpInfo(), credentials, refreshToken);
        this.cache.put(result);
        connection2.accessToken = result.accessToken;
        try {
          return await this.finishAuthentication(connection2, credentials, result.accessToken);
        } catch (error2) {
          if (error2 instanceof error_1.MongoError && error2.code === error_1.MONGODB_ERROR_CODES.AuthenticationFailed) {
            this.cache.removeRefreshToken();
            delete connection2.accessToken;
            return await this.execute(connection2, credentials);
          } else {
            throw error2;
          }
        }
      }
      const startResponse = await this.startAuthentication(connection2, credentials);
      const conversationId = startResponse.conversationId;
      const idpInfo = bson_1.BSON.deserialize(startResponse.payload.buffer);
      const callbackResponse = await this.fetchAccessToken(idpInfo, credentials);
      this.cache.put(callbackResponse, idpInfo);
      connection2.accessToken = callbackResponse.accessToken;
      return await this.finishAuthentication(connection2, credentials, callbackResponse.accessToken, conversationId);
    }
    /**
     * Fetches an access token using the callback.
     */
    async fetchAccessToken(idpInfo, credentials, refreshToken) {
      const controller = new AbortController();
      const params = {
        timeoutContext: controller.signal,
        version: mongodb_oidc_1.OIDC_VERSION,
        idpInfo
      };
      if (credentials.username) {
        params.username = credentials.username;
      }
      if (refreshToken) {
        params.refreshToken = refreshToken;
      }
      const timeout2 = timeout_1.Timeout.expires(callback_workflow_1.HUMAN_TIMEOUT_MS);
      try {
        return await Promise.race([this.executeAndValidateCallback(params), timeout2]);
      } catch (error2) {
        if (timeout_1.TimeoutError.is(error2)) {
          controller.abort();
          throw new error_1.MongoOIDCError(`OIDC callback timed out after ${callback_workflow_1.HUMAN_TIMEOUT_MS}ms.`);
        }
        throw error2;
      } finally {
        timeout2.clear();
      }
    }
  }
  human_callback_workflow.HumanCallbackWorkflow = HumanCallbackWorkflow;
  return human_callback_workflow;
}
var plain = {};
var hasRequiredPlain;
function requirePlain() {
  if (hasRequiredPlain) return plain;
  hasRequiredPlain = 1;
  Object.defineProperty(plain, "__esModule", { value: true });
  plain.Plain = void 0;
  const bson_1 = requireBson();
  const error_1 = requireError();
  const utils_1 = requireUtils();
  const auth_provider_1 = requireAuth_provider();
  class Plain extends auth_provider_1.AuthProvider {
    async auth(authContext) {
      const { connection: connection2, credentials } = authContext;
      if (!credentials) {
        throw new error_1.MongoMissingCredentialsError("AuthContext must provide credentials.");
      }
      const { username, password } = credentials;
      const payload = new bson_1.Binary(bson_1.ByteUtils.fromUTF8(`\0${username}\0${password}`));
      const command2 = {
        saslStart: 1,
        mechanism: "PLAIN",
        payload,
        autoAuthorize: 1
      };
      await connection2.command((0, utils_1.ns)("$external.$cmd"), command2, void 0);
    }
  }
  plain.Plain = Plain;
  return plain;
}
var scram = {};
var hasRequiredScram;
function requireScram() {
  if (hasRequiredScram) return scram;
  hasRequiredScram = 1;
  Object.defineProperty(scram, "__esModule", { value: true });
  scram.ScramSHA256 = scram.ScramSHA1 = void 0;
  const saslprep_1 = requireNode();
  const bson_1 = requireBson();
  const error_1 = requireError();
  const utils_1 = requireUtils();
  const auth_provider_1 = requireAuth_provider();
  const providers_1 = requireProviders$1();
  class ScramSHA extends auth_provider_1.AuthProvider {
    constructor(cryptoMethod) {
      super();
      this.cryptoMethod = cryptoMethod || "sha1";
    }
    async prepare(handshakeDoc, authContext) {
      const cryptoMethod = this.cryptoMethod;
      const credentials = authContext.credentials;
      if (!credentials) {
        throw new error_1.MongoMissingCredentialsError("AuthContext must provide credentials.");
      }
      const nonce = await (0, utils_1.randomBytes)(24);
      authContext.nonce = nonce;
      const request = {
        ...handshakeDoc,
        speculativeAuthenticate: {
          ...makeFirstMessage(cryptoMethod, credentials, nonce),
          db: credentials.source
        }
      };
      return request;
    }
    async auth(authContext) {
      const { reauthenticating, response } = authContext;
      if (response?.speculativeAuthenticate && !reauthenticating) {
        return await continueScramConversation(this.cryptoMethod, response.speculativeAuthenticate, authContext);
      }
      return await executeScram(this.cryptoMethod, authContext);
    }
  }
  function cleanUsername(username) {
    return username.replace("=", "=3D").replace(",", "=2C");
  }
  function clientFirstMessageBare(username, nonce) {
    return bson_1.ByteUtils.concat([
      bson_1.ByteUtils.fromUTF8("n="),
      bson_1.ByteUtils.fromUTF8(username),
      bson_1.ByteUtils.fromUTF8(",r="),
      bson_1.ByteUtils.fromUTF8(bson_1.ByteUtils.toBase64(nonce))
    ]);
  }
  function makeFirstMessage(cryptoMethod, credentials, nonce) {
    const username = cleanUsername(credentials.username);
    const mechanism = cryptoMethod === "sha1" ? providers_1.AuthMechanism.MONGODB_SCRAM_SHA1 : providers_1.AuthMechanism.MONGODB_SCRAM_SHA256;
    return {
      saslStart: 1,
      mechanism,
      payload: new bson_1.Binary(bson_1.ByteUtils.concat([bson_1.ByteUtils.fromUTF8("n,,"), clientFirstMessageBare(username, nonce)])),
      autoAuthorize: 1,
      options: { skipEmptyExchange: true }
    };
  }
  async function executeScram(cryptoMethod, authContext) {
    const { connection: connection2, credentials } = authContext;
    if (!credentials) {
      throw new error_1.MongoMissingCredentialsError("AuthContext must provide credentials.");
    }
    if (!authContext.nonce) {
      throw new error_1.MongoInvalidArgumentError("AuthContext must contain a valid nonce property");
    }
    const nonce = authContext.nonce;
    const db2 = credentials.source;
    const saslStartCmd = makeFirstMessage(cryptoMethod, credentials, nonce);
    const response = await connection2.command((0, utils_1.ns)(`${db2}.$cmd`), saslStartCmd, void 0);
    await continueScramConversation(cryptoMethod, response, authContext);
  }
  async function continueScramConversation(cryptoMethod, response, authContext) {
    const connection2 = authContext.connection;
    const credentials = authContext.credentials;
    if (!credentials) {
      throw new error_1.MongoMissingCredentialsError("AuthContext must provide credentials.");
    }
    if (!authContext.nonce) {
      throw new error_1.MongoInvalidArgumentError("Unable to continue SCRAM without valid nonce");
    }
    const nonce = authContext.nonce;
    const db2 = credentials.source;
    const username = cleanUsername(credentials.username);
    const password = credentials.password;
    const processedPassword = cryptoMethod === "sha256" ? (0, saslprep_1.saslprep)(password) : passwordDigest(username, password);
    const payload = bson_1.ByteUtils.isUint8Array(response.payload) ? new bson_1.Binary(response.payload) : response.payload;
    const dict = parsePayload(payload);
    const iterations = parseInt(dict.i, 10);
    if (iterations && iterations < 4096) {
      throw new error_1.MongoRuntimeError(`Server returned an invalid iteration count ${iterations}`);
    }
    const salt = dict.s;
    const rnonce = dict.r;
    if (rnonce.startsWith("nonce")) {
      throw new error_1.MongoRuntimeError(`Server returned an invalid nonce: ${rnonce}`);
    }
    const withoutProof = `c=biws,r=${rnonce}`;
    const saltedPassword = await HI(processedPassword, bson_1.ByteUtils.fromBase64(salt), iterations, cryptoMethod);
    const clientKey = await HMAC(cryptoMethod, saltedPassword, "Client Key");
    const serverKey = await HMAC(cryptoMethod, saltedPassword, "Server Key");
    const storedKey = await H(cryptoMethod, clientKey);
    const firstMessageBytes = clientFirstMessageBare(username, nonce);
    const firstMessage = bson_1.ByteUtils.toUTF8(firstMessageBytes, 0, firstMessageBytes.length, false);
    const payloadString = bson_1.ByteUtils.toUTF8(payload.buffer, 0, payload.position, false);
    const authMessage = [firstMessage, payloadString, withoutProof].join(",");
    const clientSignature = await HMAC(cryptoMethod, storedKey, authMessage);
    const clientProof = `p=${xor(clientKey, clientSignature)}`;
    const clientFinal = [withoutProof, clientProof].join(",");
    const serverSignature = await HMAC(cryptoMethod, serverKey, authMessage);
    const saslContinueCmd = {
      saslContinue: 1,
      conversationId: response.conversationId,
      payload: new bson_1.Binary(bson_1.ByteUtils.fromUTF8(clientFinal))
    };
    const r = await connection2.command((0, utils_1.ns)(`${db2}.$cmd`), saslContinueCmd, void 0);
    const parsedResponse = parsePayload(r.payload);
    if (!compareDigest(bson_1.ByteUtils.fromBase64(parsedResponse.v), serverSignature)) {
      throw new error_1.MongoRuntimeError("Server returned an invalid signature");
    }
    if (r.done !== false) {
      return;
    }
    const retrySaslContinueCmd = {
      saslContinue: 1,
      conversationId: r.conversationId,
      payload: bson_1.ByteUtils.allocate(0)
    };
    await connection2.command((0, utils_1.ns)(`${db2}.$cmd`), retrySaslContinueCmd, void 0);
  }
  function parsePayload(payload) {
    const payloadStr = bson_1.ByteUtils.toUTF8(payload.buffer, 0, payload.position, false);
    const dict = {};
    const parts = payloadStr.split(",");
    for (let i = 0; i < parts.length; i++) {
      const valueParts = (parts[i].match(/^([^=]*)=(.*)$/) ?? []).slice(1);
      dict[valueParts[0]] = valueParts[1];
    }
    return dict;
  }
  function passwordDigest(username, password) {
    if (typeof username !== "string") {
      throw new error_1.MongoInvalidArgumentError("Username must be a string");
    }
    if (typeof password !== "string") {
      throw new error_1.MongoInvalidArgumentError("Password must be a string");
    }
    if (password.length === 0) {
      throw new error_1.MongoInvalidArgumentError("Password cannot be empty");
    }
    let nodeCrypto;
    try {
      nodeCrypto = require("crypto");
    } catch (e) {
      throw new error_1.MongoRuntimeError("Node.js crypto module is required for SCRAM-SHA-1 authentication", {
        cause: e
      });
    }
    try {
      const md5 = nodeCrypto.createHash("md5");
      md5.update(`${username}:mongo:${password}`, "utf8");
      return md5.digest("hex");
    } catch (err) {
      if (nodeCrypto.getFips()) {
        throw new Error("Auth mechanism SCRAM-SHA-1 is not supported in FIPS mode");
      }
      throw err;
    }
  }
  function xor(a, b) {
    const length = Math.max(a.length, b.length);
    const res = [];
    for (let i = 0; i < length; i += 1) {
      res.push(a[i] ^ b[i]);
    }
    return bson_1.ByteUtils.toBase64(bson_1.ByteUtils.fromNumberArray(res));
  }
  async function H(method, text) {
    const buffer = await crypto.subtle.digest(method === "sha256" ? "SHA-256" : "SHA-1", text);
    return new Uint8Array(buffer);
  }
  async function HMAC(method, key, text) {
    const keyBuffer = bson_1.ByteUtils.toLocalBufferType(key);
    const cryptoKey = await crypto.subtle.importKey("raw", keyBuffer, { name: "HMAC", hash: { name: method === "sha256" ? "SHA-256" : "SHA-1" } }, false, ["sign", "verify"]);
    const textData = typeof text === "string" ? new TextEncoder().encode(text) : text;
    const textBuffer = bson_1.ByteUtils.toLocalBufferType(textData);
    const signature = await crypto.subtle.sign("HMAC", cryptoKey, textBuffer);
    return new Uint8Array(signature);
  }
  let _hiCache = {};
  let _hiCacheCount = 0;
  function _hiCachePurge() {
    _hiCache = {};
    _hiCacheCount = 0;
  }
  const hiLengthMap = {
    sha256: 32,
    sha1: 20
  };
  async function HI(data, salt, iterations, cryptoMethod) {
    const key = [data, bson_1.ByteUtils.toBase64(salt), iterations].join("_");
    if (_hiCache[key] != null) {
      return _hiCache[key];
    }
    const keyMaterial = await crypto.subtle.importKey("raw", new TextEncoder().encode(data), { name: "PBKDF2" }, false, ["deriveBits"]);
    const params = {
      name: "PBKDF2",
      salt,
      iterations,
      hash: { name: cryptoMethod === "sha256" ? "SHA-256" : "SHA-1" }
    };
    const derivedBits = await crypto.subtle.deriveBits(params, keyMaterial, hiLengthMap[cryptoMethod] * 8);
    const saltedData = new Uint8Array(derivedBits);
    if (_hiCacheCount >= 200) {
      _hiCachePurge();
    }
    _hiCache[key] = saltedData;
    _hiCacheCount += 1;
    return saltedData;
  }
  function compareDigest(lhs, rhs) {
    if (lhs.length !== rhs.length) {
      return false;
    }
    let result = 0;
    for (let i = 0; i < lhs.length; i++) {
      result |= lhs[i] ^ rhs[i];
    }
    return result === 0;
  }
  class ScramSHA1 extends ScramSHA {
    constructor() {
      super("sha1");
    }
  }
  scram.ScramSHA1 = ScramSHA1;
  class ScramSHA256 extends ScramSHA {
    constructor() {
      super("sha256");
    }
  }
  scram.ScramSHA256 = ScramSHA256;
  return scram;
}
var x509 = {};
var hasRequiredX509;
function requireX509() {
  if (hasRequiredX509) return x509;
  hasRequiredX509 = 1;
  Object.defineProperty(x509, "__esModule", { value: true });
  x509.X509 = void 0;
  const error_1 = requireError();
  const utils_1 = requireUtils();
  const auth_provider_1 = requireAuth_provider();
  class X509 extends auth_provider_1.AuthProvider {
    async prepare(handshakeDoc, authContext) {
      const { credentials } = authContext;
      if (!credentials) {
        throw new error_1.MongoMissingCredentialsError("AuthContext must provide credentials.");
      }
      return { ...handshakeDoc, speculativeAuthenticate: x509AuthenticateCommand(credentials) };
    }
    async auth(authContext) {
      const connection2 = authContext.connection;
      const credentials = authContext.credentials;
      if (!credentials) {
        throw new error_1.MongoMissingCredentialsError("AuthContext must provide credentials.");
      }
      const response = authContext.response;
      if (response?.speculativeAuthenticate) {
        return;
      }
      await connection2.command((0, utils_1.ns)("$external.$cmd"), x509AuthenticateCommand(credentials), void 0);
    }
  }
  x509.X509 = X509;
  function x509AuthenticateCommand(credentials) {
    const command2 = { authenticate: 1, mechanism: "MONGODB-X509" };
    if (credentials.username) {
      command2.user = credentials.username;
    }
    return command2;
  }
  return x509;
}
var hasRequiredMongo_client_auth_providers;
function requireMongo_client_auth_providers() {
  if (hasRequiredMongo_client_auth_providers) return mongo_client_auth_providers;
  hasRequiredMongo_client_auth_providers = 1;
  Object.defineProperty(mongo_client_auth_providers, "__esModule", { value: true });
  mongo_client_auth_providers.MongoClientAuthProviders = void 0;
  const gssapi_1 = requireGssapi();
  const mongodb_aws_1 = requireMongodb_aws();
  const mongodb_oidc_1 = requireMongodb_oidc();
  const automated_callback_workflow_1 = requireAutomated_callback_workflow();
  const human_callback_workflow_1 = requireHuman_callback_workflow();
  const token_cache_1 = requireToken_cache();
  const plain_1 = requirePlain();
  const providers_1 = requireProviders$1();
  const scram_1 = requireScram();
  const x509_1 = requireX509();
  const error_1 = requireError();
  const AUTH_PROVIDERS = /* @__PURE__ */ new Map([
    [
      providers_1.AuthMechanism.MONGODB_AWS,
      ({ AWS_CREDENTIAL_PROVIDER }) => new mongodb_aws_1.MongoDBAWS(AWS_CREDENTIAL_PROVIDER)
    ],
    [providers_1.AuthMechanism.MONGODB_GSSAPI, () => new gssapi_1.GSSAPI()],
    [providers_1.AuthMechanism.MONGODB_OIDC, (properties) => new mongodb_oidc_1.MongoDBOIDC(getWorkflow(properties))],
    [providers_1.AuthMechanism.MONGODB_PLAIN, () => new plain_1.Plain()],
    [providers_1.AuthMechanism.MONGODB_SCRAM_SHA1, () => new scram_1.ScramSHA1()],
    [providers_1.AuthMechanism.MONGODB_SCRAM_SHA256, () => new scram_1.ScramSHA256()],
    [providers_1.AuthMechanism.MONGODB_X509, () => new x509_1.X509()]
  ]);
  class MongoClientAuthProviders {
    constructor() {
      this.existingProviders = /* @__PURE__ */ new Map();
    }
    /**
     * Get or create an authentication provider based on the provided mechanism.
     * We don't want to create all providers at once, as some providers may not be used.
     * @param name - The name of the provider to get or create.
     * @param credentials - The credentials.
     * @returns The provider.
     * @throws MongoInvalidArgumentError if the mechanism is not supported.
     * @internal
     */
    getOrCreateProvider(name, authMechanismProperties) {
      const authProvider = this.existingProviders.get(name);
      if (authProvider) {
        return authProvider;
      }
      const providerFunction = AUTH_PROVIDERS.get(name);
      if (!providerFunction) {
        throw new error_1.MongoInvalidArgumentError(`authMechanism ${name} not supported`);
      }
      const provider = providerFunction(authMechanismProperties);
      this.existingProviders.set(name, provider);
      return provider;
    }
  }
  mongo_client_auth_providers.MongoClientAuthProviders = MongoClientAuthProviders;
  function getWorkflow(authMechanismProperties) {
    if (authMechanismProperties.OIDC_HUMAN_CALLBACK) {
      return new human_callback_workflow_1.HumanCallbackWorkflow(new token_cache_1.TokenCache(), authMechanismProperties.OIDC_HUMAN_CALLBACK);
    } else if (authMechanismProperties.OIDC_CALLBACK) {
      return new automated_callback_workflow_1.AutomatedCallbackWorkflow(new token_cache_1.TokenCache(), authMechanismProperties.OIDC_CALLBACK);
    } else {
      const environment = authMechanismProperties.ENVIRONMENT;
      const workflow = mongodb_oidc_1.OIDC_WORKFLOWS.get(environment)?.();
      if (!workflow) {
        throw new error_1.MongoInvalidArgumentError(`Could not load workflow for environment ${authMechanismProperties.ENVIRONMENT}`);
      }
      return workflow;
    }
  }
  return mongo_client_auth_providers;
}
var executor = {};
var client_bulk_write_cursor = {};
var client_bulk_write = {};
var hasRequiredClient_bulk_write;
function requireClient_bulk_write() {
  if (hasRequiredClient_bulk_write) return client_bulk_write;
  hasRequiredClient_bulk_write = 1;
  Object.defineProperty(client_bulk_write, "__esModule", { value: true });
  client_bulk_write.ClientBulkWriteOperation = void 0;
  const responses_1 = requireResponses();
  const utils_1 = requireUtils();
  const command_1 = requireCommand();
  const operation_1 = requireOperation();
  class ClientBulkWriteOperation extends command_1.CommandOperation {
    get commandName() {
      return "bulkWrite";
    }
    constructor(commandBuilder, options) {
      super(void 0, options);
      this.SERVER_COMMAND_RESPONSE_TYPE = responses_1.ClientBulkWriteCursorResponse;
      this.commandBuilder = commandBuilder;
      this.options = options;
      this.ns = new utils_1.MongoDBNamespace("admin", "$cmd");
    }
    resetBatch() {
      return this.commandBuilder.resetBatch();
    }
    get canRetryWrite() {
      return this.commandBuilder.isBatchRetryable;
    }
    handleOk(response) {
      return response;
    }
    buildCommandDocument(connection2, _session) {
      const command2 = this.commandBuilder.buildBatch(connection2.description.maxMessageSizeBytes, connection2.description.maxWriteBatchSize, connection2.description.maxBsonObjectSize);
      if (!this.canRetryWrite) {
        this.options.willRetryWrite = false;
      }
      return command2;
    }
  }
  client_bulk_write.ClientBulkWriteOperation = ClientBulkWriteOperation;
  (0, operation_1.defineAspects)(ClientBulkWriteOperation, [
    operation_1.Aspect.WRITE_OPERATION,
    operation_1.Aspect.SKIP_COLLATION,
    operation_1.Aspect.CURSOR_CREATING,
    operation_1.Aspect.RETRYABLE,
    operation_1.Aspect.COMMAND_BATCHING,
    operation_1.Aspect.SUPPORTS_RAW_DATA
  ]);
  return client_bulk_write;
}
var hasRequiredClient_bulk_write_cursor;
function requireClient_bulk_write_cursor() {
  if (hasRequiredClient_bulk_write_cursor) return client_bulk_write_cursor;
  hasRequiredClient_bulk_write_cursor = 1;
  Object.defineProperty(client_bulk_write_cursor, "__esModule", { value: true });
  client_bulk_write_cursor.ClientBulkWriteCursor = void 0;
  const client_bulk_write_1 = requireClient_bulk_write();
  const execute_operation_1 = requireExecute_operation();
  const utils_1 = requireUtils();
  const abstract_cursor_1 = requireAbstract_cursor();
  class ClientBulkWriteCursor extends abstract_cursor_1.AbstractCursor {
    /** @internal */
    constructor(client, commandBuilder, options = {}) {
      super(client, new utils_1.MongoDBNamespace("admin", "$cmd"), options);
      this.commandBuilder = commandBuilder;
      this.clientBulkWriteOptions = options;
    }
    /**
     * We need a way to get the top level cursor response fields for
     * generating the bulk write result, so we expose this here.
     */
    get response() {
      if (this.cursorResponse)
        return this.cursorResponse;
      return null;
    }
    get operations() {
      return this.commandBuilder.lastOperations;
    }
    clone() {
      const clonedOptions = (0, utils_1.mergeOptions)({}, this.clientBulkWriteOptions);
      delete clonedOptions.session;
      return new ClientBulkWriteCursor(this.client, this.commandBuilder, {
        ...clonedOptions
      });
    }
    /** @internal */
    async _initialize(session) {
      const clientBulkWriteOperation = new client_bulk_write_1.ClientBulkWriteOperation(this.commandBuilder, {
        ...this.clientBulkWriteOptions,
        ...this.cursorOptions,
        session
      });
      const response = await (0, execute_operation_1.executeOperation)(this.client, clientBulkWriteOperation, this.timeoutContext);
      this.cursorResponse = response;
      return { server: clientBulkWriteOperation.server, session, response };
    }
  }
  client_bulk_write_cursor.ClientBulkWriteCursor = ClientBulkWriteCursor;
  return client_bulk_write_cursor;
}
var command_builder = {};
var hasRequiredCommand_builder;
function requireCommand_builder() {
  if (hasRequiredCommand_builder) return command_builder;
  hasRequiredCommand_builder = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.buildReplaceOneOperation = exports.buildUpdateManyOperation = exports.buildUpdateOneOperation = exports.buildDeleteManyOperation = exports.buildDeleteOneOperation = exports.buildInsertOneOperation = exports.ClientBulkWriteCommandBuilder = void 0;
    exports.buildOperation = buildOperation;
    const bson_1 = requireBson();
    const commands_1 = requireCommands();
    const error_1 = requireError();
    const sort_1 = requireSort();
    const utils_1 = requireUtils();
    const MESSAGE_OVERHEAD_BYTES = 1e3;
    class ClientBulkWriteCommandBuilder {
      /**
       * Create the command builder.
       * @param models - The client write models.
       */
      constructor(models, options, pkFactory) {
        this.models = models;
        this.options = options;
        this.pkFactory = pkFactory ?? utils_1.DEFAULT_PK_FACTORY;
        this.currentModelIndex = 0;
        this.previousModelIndex = 0;
        this.lastOperations = [];
        this.isBatchRetryable = true;
      }
      /**
       * Gets the errorsOnly value for the command, which is the inverse of the
       * user provided verboseResults option. Defaults to true.
       */
      get errorsOnly() {
        if ("verboseResults" in this.options) {
          return !this.options.verboseResults;
        }
        return true;
      }
      /**
       * Determines if there is another batch to process.
       * @returns True if not all batches have been built.
       */
      hasNextBatch() {
        return this.currentModelIndex < this.models.length;
      }
      /**
       * When we need to retry a command we need to set the current
       * model index back to its previous value.
       */
      resetBatch() {
        this.currentModelIndex = this.previousModelIndex;
        return true;
      }
      /**
       * Build a single batch of a client bulk write command.
       * @param maxMessageSizeBytes - The max message size in bytes.
       * @param maxWriteBatchSize - The max write batch size.
       * @returns The client bulk write command.
       */
      buildBatch(maxMessageSizeBytes, maxWriteBatchSize, maxBsonObjectSize) {
        this.isBatchRetryable = true;
        let commandLength = 0;
        let currentNamespaceIndex = 0;
        const command2 = this.baseCommand();
        const namespaces = /* @__PURE__ */ new Map();
        this.previousModelIndex = this.currentModelIndex;
        while (this.currentModelIndex < this.models.length) {
          const model = this.models[this.currentModelIndex];
          const ns = model.namespace;
          const nsIndex = namespaces.get(ns);
          if (model.name === "deleteMany" || model.name === "updateMany") {
            this.isBatchRetryable = false;
          }
          if (nsIndex != null) {
            const operation2 = buildOperation(model, nsIndex, this.pkFactory, this.options);
            let operationBuffer;
            try {
              operationBuffer = bson_1.BSON.serialize(operation2);
            } catch (cause) {
              throw new error_1.MongoInvalidArgumentError(`Could not serialize operation to BSON`, { cause });
            }
            validateBufferSize("ops", operationBuffer, maxBsonObjectSize);
            if (commandLength + operationBuffer.length < maxMessageSizeBytes && command2.ops.documents.length < maxWriteBatchSize) {
              commandLength = MESSAGE_OVERHEAD_BYTES + command2.ops.push(operation2, operationBuffer);
              this.currentModelIndex++;
            } else {
              break;
            }
          } else {
            namespaces.set(ns, currentNamespaceIndex);
            const nsInfo = { ns };
            const operation2 = buildOperation(model, currentNamespaceIndex, this.pkFactory, this.options);
            let nsInfoBuffer;
            let operationBuffer;
            try {
              nsInfoBuffer = bson_1.BSON.serialize(nsInfo);
              operationBuffer = bson_1.BSON.serialize(operation2);
            } catch (cause) {
              throw new error_1.MongoInvalidArgumentError(`Could not serialize ns info to BSON`, { cause });
            }
            validateBufferSize("nsInfo", nsInfoBuffer, maxBsonObjectSize);
            validateBufferSize("ops", operationBuffer, maxBsonObjectSize);
            if (commandLength + nsInfoBuffer.length + operationBuffer.length < maxMessageSizeBytes && command2.ops.documents.length < maxWriteBatchSize) {
              commandLength = MESSAGE_OVERHEAD_BYTES + command2.nsInfo.push(nsInfo, nsInfoBuffer) + command2.ops.push(operation2, operationBuffer);
              currentNamespaceIndex++;
              this.currentModelIndex++;
            } else {
              break;
            }
          }
        }
        this.lastOperations = command2.ops.documents;
        return command2;
      }
      baseCommand() {
        const command2 = {
          bulkWrite: 1,
          errorsOnly: this.errorsOnly,
          ordered: this.options.ordered ?? true,
          ops: new commands_1.DocumentSequence("ops"),
          nsInfo: new commands_1.DocumentSequence("nsInfo")
        };
        if (this.options.bypassDocumentValidation != null) {
          command2.bypassDocumentValidation = this.options.bypassDocumentValidation;
        }
        if (this.options.let) {
          command2.let = this.options.let;
        }
        if (this.options.comment !== void 0) {
          command2.comment = this.options.comment;
        }
        return command2;
      }
    }
    exports.ClientBulkWriteCommandBuilder = ClientBulkWriteCommandBuilder;
    function validateBufferSize(name, buffer, maxBsonObjectSize) {
      if (buffer.length > maxBsonObjectSize) {
        throw new error_1.MongoInvalidArgumentError(`Client bulk write operation ${name} of length ${buffer.length} exceeds the max bson object size of ${maxBsonObjectSize}`);
      }
    }
    const buildInsertOneOperation = (model, index, pkFactory) => {
      const document2 = {
        insert: index,
        document: model.document
      };
      document2.document._id = model.document._id ?? pkFactory.createPk();
      return document2;
    };
    exports.buildInsertOneOperation = buildInsertOneOperation;
    const buildDeleteOneOperation = (model, index) => {
      return createDeleteOperation(model, index, false);
    };
    exports.buildDeleteOneOperation = buildDeleteOneOperation;
    const buildDeleteManyOperation = (model, index) => {
      return createDeleteOperation(model, index, true);
    };
    exports.buildDeleteManyOperation = buildDeleteManyOperation;
    function createDeleteOperation(model, index, multi) {
      const document2 = {
        delete: index,
        multi,
        filter: model.filter
      };
      if (model.hint) {
        document2.hint = model.hint;
      }
      if (model.collation) {
        document2.collation = model.collation;
      }
      return document2;
    }
    const buildUpdateOneOperation = (model, index, options) => {
      return createUpdateOperation(model, index, false, options);
    };
    exports.buildUpdateOneOperation = buildUpdateOneOperation;
    const buildUpdateManyOperation = (model, index, options) => {
      return createUpdateOperation(model, index, true, options);
    };
    exports.buildUpdateManyOperation = buildUpdateManyOperation;
    function validateUpdate(update2, options) {
      if (!(0, utils_1.hasAtomicOperators)(update2, options)) {
        throw new error_1.MongoAPIError("Client bulk write update models must only contain atomic modifiers (start with $) and must not be empty.");
      }
    }
    function createUpdateOperation(model, index, multi, options) {
      validateUpdate(model.update, options);
      const document2 = {
        update: index,
        multi,
        filter: model.filter,
        updateMods: model.update
      };
      if (model.hint) {
        document2.hint = model.hint;
      }
      if (model.upsert) {
        document2.upsert = model.upsert;
      }
      if (model.arrayFilters) {
        document2.arrayFilters = model.arrayFilters;
      }
      if (model.collation) {
        document2.collation = model.collation;
      }
      if (!multi && "sort" in model && model.sort != null) {
        document2.sort = (0, sort_1.formatSort)(model.sort);
      }
      return document2;
    }
    const buildReplaceOneOperation = (model, index) => {
      if ((0, utils_1.hasAtomicOperators)(model.replacement)) {
        throw new error_1.MongoAPIError("Client bulk write replace models must not contain atomic modifiers (start with $) and must not be empty.");
      }
      const document2 = {
        update: index,
        multi: false,
        filter: model.filter,
        updateMods: model.replacement
      };
      if (model.hint) {
        document2.hint = model.hint;
      }
      if (model.upsert) {
        document2.upsert = model.upsert;
      }
      if (model.collation) {
        document2.collation = model.collation;
      }
      if (model.sort != null) {
        document2.sort = (0, sort_1.formatSort)(model.sort);
      }
      return document2;
    };
    exports.buildReplaceOneOperation = buildReplaceOneOperation;
    function buildOperation(model, index, pkFactory, options) {
      switch (model.name) {
        case "insertOne":
          return (0, exports.buildInsertOneOperation)(model, index, pkFactory);
        case "deleteOne":
          return (0, exports.buildDeleteOneOperation)(model, index);
        case "deleteMany":
          return (0, exports.buildDeleteManyOperation)(model, index);
        case "updateOne":
          return (0, exports.buildUpdateOneOperation)(model, index, options);
        case "updateMany":
          return (0, exports.buildUpdateManyOperation)(model, index, options);
        case "replaceOne":
          return (0, exports.buildReplaceOneOperation)(model, index);
      }
    }
  })(command_builder);
  return command_builder;
}
var results_merger = {};
var hasRequiredResults_merger;
function requireResults_merger() {
  if (hasRequiredResults_merger) return results_merger;
  hasRequiredResults_merger = 1;
  Object.defineProperty(results_merger, "__esModule", { value: true });
  results_merger.ClientBulkWriteResultsMerger = void 0;
  const __1 = requireLib();
  const error_1 = requireError();
  const UNACKNOWLEDGED = {
    acknowledged: false,
    insertedCount: 0,
    upsertedCount: 0,
    matchedCount: 0,
    modifiedCount: 0,
    deletedCount: 0,
    insertResults: void 0,
    updateResults: void 0,
    deleteResults: void 0
  };
  class ClientBulkWriteResultsMerger {
    /**
     * @returns The standard unacknowledged bulk write result.
     */
    static unacknowledged() {
      return UNACKNOWLEDGED;
    }
    /**
     * Instantiate the merger.
     * @param options - The options.
     */
    constructor(options) {
      this.options = options;
      this.currentBatchOffset = 0;
      this.writeConcernErrors = [];
      this.writeErrors = /* @__PURE__ */ new Map();
      this.result = {
        acknowledged: true,
        insertedCount: 0,
        upsertedCount: 0,
        matchedCount: 0,
        modifiedCount: 0,
        deletedCount: 0,
        insertResults: void 0,
        updateResults: void 0,
        deleteResults: void 0
      };
      if (options.verboseResults) {
        this.result.insertResults = /* @__PURE__ */ new Map();
        this.result.updateResults = /* @__PURE__ */ new Map();
        this.result.deleteResults = /* @__PURE__ */ new Map();
      }
    }
    /**
     * Get the bulk write result object.
     */
    get bulkWriteResult() {
      return {
        acknowledged: this.result.acknowledged,
        insertedCount: this.result.insertedCount,
        upsertedCount: this.result.upsertedCount,
        matchedCount: this.result.matchedCount,
        modifiedCount: this.result.modifiedCount,
        deletedCount: this.result.deletedCount,
        insertResults: this.result.insertResults,
        updateResults: this.result.updateResults,
        deleteResults: this.result.deleteResults
      };
    }
    /**
     * Merge the results in the cursor to the existing result.
     * @param currentBatchOffset - The offset index to the original models.
     * @param response - The cursor response.
     * @param documents - The documents in the cursor.
     * @returns The current result.
     */
    async merge(cursor) {
      let writeConcernErrorResult;
      try {
        for await (const document2 of cursor) {
          if (document2.ok === 1) {
            if (this.options.verboseResults) {
              this.processDocument(cursor, document2);
            }
          } else {
            if (this.options.ordered) {
              const error2 = new error_1.MongoClientBulkWriteError({
                message: "Mongo client ordered bulk write encountered a write error."
              });
              error2.writeErrors.set(document2.idx + this.currentBatchOffset, {
                code: document2.code,
                message: document2.errmsg
              });
              error2.partialResult = this.result;
              throw error2;
            } else {
              this.writeErrors.set(document2.idx + this.currentBatchOffset, {
                code: document2.code,
                message: document2.errmsg
              });
            }
          }
        }
      } catch (error2) {
        if (error2 instanceof __1.MongoWriteConcernError) {
          const result = error2.result;
          writeConcernErrorResult = {
            insertedCount: result.nInserted,
            upsertedCount: result.nUpserted,
            matchedCount: result.nMatched,
            modifiedCount: result.nModified,
            deletedCount: result.nDeleted,
            writeConcernError: result.writeConcernError
          };
          if (this.options.verboseResults && result.cursor.firstBatch) {
            for (const document2 of result.cursor.firstBatch) {
              if (document2.ok === 1) {
                this.processDocument(cursor, document2);
              }
            }
          }
        } else {
          throw error2;
        }
      } finally {
        if (cursor.response) {
          const response = cursor.response;
          this.incrementCounts(response);
        }
        this.currentBatchOffset += cursor.operations.length;
      }
      if (writeConcernErrorResult) {
        const writeConcernError = writeConcernErrorResult.writeConcernError;
        this.incrementCounts(writeConcernErrorResult);
        this.writeConcernErrors.push({
          code: writeConcernError.code,
          message: writeConcernError.errmsg
        });
      }
      return this.result;
    }
    /**
     * Process an individual document in the results.
     * @param cursor - The cursor.
     * @param document - The document to process.
     */
    processDocument(cursor, document2) {
      const operation2 = cursor.operations[document2.idx];
      if ("insert" in operation2) {
        this.result.insertResults?.set(document2.idx + this.currentBatchOffset, {
          insertedId: operation2.document._id
        });
      }
      if ("update" in operation2) {
        const result = {
          matchedCount: document2.n,
          modifiedCount: document2.nModified ?? 0,
          // Check if the bulk did actually upsert.
          didUpsert: document2.upserted != null
        };
        if (document2.upserted) {
          result.upsertedId = document2.upserted._id;
        }
        this.result.updateResults?.set(document2.idx + this.currentBatchOffset, result);
      }
      if ("delete" in operation2) {
        this.result.deleteResults?.set(document2.idx + this.currentBatchOffset, {
          deletedCount: document2.n
        });
      }
    }
    /**
     * Increment the result counts.
     * @param document - The document with the results.
     */
    incrementCounts(document2) {
      this.result.insertedCount += document2.insertedCount;
      this.result.upsertedCount += document2.upsertedCount;
      this.result.matchedCount += document2.matchedCount;
      this.result.modifiedCount += document2.modifiedCount;
      this.result.deletedCount += document2.deletedCount;
    }
  }
  results_merger.ClientBulkWriteResultsMerger = ClientBulkWriteResultsMerger;
  return results_merger;
}
var hasRequiredExecutor;
function requireExecutor() {
  if (hasRequiredExecutor) return executor;
  hasRequiredExecutor = 1;
  Object.defineProperty(executor, "__esModule", { value: true });
  executor.ClientBulkWriteExecutor = void 0;
  const abstract_cursor_1 = requireAbstract_cursor();
  const client_bulk_write_cursor_1 = requireClient_bulk_write_cursor();
  const error_1 = requireError();
  const timeout_1 = requireTimeout();
  const utils_1 = requireUtils();
  const write_concern_1 = requireWrite_concern();
  const execute_operation_1 = requireExecute_operation();
  const client_bulk_write_1 = requireClient_bulk_write();
  const command_builder_1 = requireCommand_builder();
  const results_merger_1 = requireResults_merger();
  class ClientBulkWriteExecutor {
    /**
     * Instantiate the executor.
     * @param client - The mongo client.
     * @param operations - The user supplied bulk write models.
     * @param options - The bulk write options.
     */
    constructor(client, operations, options) {
      if (operations.length === 0) {
        throw new error_1.MongoClientBulkWriteExecutionError("No client bulk write models were provided.");
      }
      this.client = client;
      this.operations = operations;
      this.options = {
        ordered: true,
        bypassDocumentValidation: false,
        verboseResults: false,
        ...options
      };
      if (!this.options.writeConcern) {
        this.options.writeConcern = write_concern_1.WriteConcern.fromOptions(this.client.s.options);
      }
      if (this.options.writeConcern?.w === 0) {
        if (this.options.verboseResults) {
          throw new error_1.MongoInvalidArgumentError("Cannot request unacknowledged write concern and verbose results");
        }
        if (this.options.ordered) {
          throw new error_1.MongoInvalidArgumentError("Cannot request unacknowledged write concern and ordered writes");
        }
      }
    }
    /**
     * Execute the client bulk write. Will split commands into batches and exhaust the cursors
     * for each, then merge the results into one.
     * @returns The result.
     */
    async execute() {
      const pkFactory = this.client.s.options.pkFactory;
      const commandBuilder = new command_builder_1.ClientBulkWriteCommandBuilder(this.operations, this.options, pkFactory);
      const resolvedOptions = (0, utils_1.resolveTimeoutOptions)(this.client, this.options);
      const context = timeout_1.TimeoutContext.create(resolvedOptions);
      if (this.options.writeConcern?.w === 0) {
        while (commandBuilder.hasNextBatch()) {
          const operation2 = new client_bulk_write_1.ClientBulkWriteOperation(commandBuilder, this.options);
          await (0, execute_operation_1.executeOperation)(this.client, operation2, context);
        }
        return results_merger_1.ClientBulkWriteResultsMerger.unacknowledged();
      } else {
        const resultsMerger = new results_merger_1.ClientBulkWriteResultsMerger(this.options);
        while (commandBuilder.hasNextBatch()) {
          const cursorContext = new abstract_cursor_1.CursorTimeoutContext(context, /* @__PURE__ */ Symbol());
          const options = {
            ...this.options,
            timeoutContext: cursorContext,
            ...resolvedOptions.timeoutMS != null && { timeoutMode: abstract_cursor_1.CursorTimeoutMode.LIFETIME }
          };
          const cursor = new client_bulk_write_cursor_1.ClientBulkWriteCursor(this.client, commandBuilder, options);
          try {
            await resultsMerger.merge(cursor);
          } catch (error2) {
            if (error2 instanceof error_1.MongoServerError && !(error2 instanceof error_1.MongoClientBulkWriteError)) {
              const bulkWriteError = new error_1.MongoClientBulkWriteError({
                message: "Mongo client bulk write encountered an error during execution"
              });
              bulkWriteError.cause = error2;
              bulkWriteError.partialResult = resultsMerger.bulkWriteResult;
              throw bulkWriteError;
            } else {
              throw error2;
            }
          }
        }
        if (resultsMerger.writeConcernErrors.length > 0 || resultsMerger.writeErrors.size > 0) {
          const error2 = new error_1.MongoClientBulkWriteError({
            message: "Mongo client bulk write encountered errors during execution."
          });
          error2.writeConcernErrors = resultsMerger.writeConcernErrors;
          error2.writeErrors = resultsMerger.writeErrors;
          error2.partialResult = resultsMerger.bulkWriteResult;
          throw error2;
        }
        return resultsMerger.bulkWriteResult;
      }
    }
  }
  executor.ClientBulkWriteExecutor = ClientBulkWriteExecutor;
  return executor;
}
var end_sessions = {};
var hasRequiredEnd_sessions;
function requireEnd_sessions() {
  if (hasRequiredEnd_sessions) return end_sessions;
  hasRequiredEnd_sessions = 1;
  Object.defineProperty(end_sessions, "__esModule", { value: true });
  end_sessions.EndSessionsOperation = void 0;
  const responses_1 = requireResponses();
  const command_1 = requireCommand();
  const read_preference_1 = requireRead_preference();
  const utils_1 = requireUtils();
  const operation_1 = requireOperation();
  class EndSessionsOperation extends command_1.CommandOperation {
    constructor(sessions2) {
      super();
      this.writeConcern = { w: 0 };
      this.ns = utils_1.MongoDBNamespace.fromString("admin.$cmd");
      this.SERVER_COMMAND_RESPONSE_TYPE = responses_1.MongoDBResponse;
      this.sessions = sessions2;
    }
    buildCommandDocument(_connection, _session) {
      return {
        endSessions: this.sessions
      };
    }
    buildOptions(timeoutContext) {
      return {
        timeoutContext,
        readPreference: read_preference_1.ReadPreference.primaryPreferred
      };
    }
    get commandName() {
      return "endSessions";
    }
  }
  end_sessions.EndSessionsOperation = EndSessionsOperation;
  (0, operation_1.defineAspects)(EndSessionsOperation, operation_1.Aspect.WRITE_OPERATION);
  return end_sessions;
}
var topology = {};
var server_selection_events = {};
var hasRequiredServer_selection_events;
function requireServer_selection_events() {
  if (hasRequiredServer_selection_events) return server_selection_events;
  hasRequiredServer_selection_events = 1;
  Object.defineProperty(server_selection_events, "__esModule", { value: true });
  server_selection_events.WaitingForSuitableServerEvent = server_selection_events.ServerSelectionSucceededEvent = server_selection_events.ServerSelectionFailedEvent = server_selection_events.ServerSelectionStartedEvent = server_selection_events.ServerSelectionEvent = void 0;
  const utils_1 = requireUtils();
  const constants_1 = requireConstants();
  class ServerSelectionEvent {
    /** @internal */
    constructor(selector, topologyDescription, operation2) {
      this.selector = selector;
      this.operation = operation2;
      this.topologyDescription = topologyDescription;
    }
  }
  server_selection_events.ServerSelectionEvent = ServerSelectionEvent;
  class ServerSelectionStartedEvent extends ServerSelectionEvent {
    /** @internal */
    constructor(selector, topologyDescription, operation2) {
      super(selector, topologyDescription, operation2);
      this.name = constants_1.SERVER_SELECTION_STARTED;
      this.message = "Server selection started";
    }
  }
  server_selection_events.ServerSelectionStartedEvent = ServerSelectionStartedEvent;
  class ServerSelectionFailedEvent extends ServerSelectionEvent {
    /** @internal */
    constructor(selector, topologyDescription, error2, operation2) {
      super(selector, topologyDescription, operation2);
      this.name = constants_1.SERVER_SELECTION_FAILED;
      this.message = "Server selection failed";
      this.failure = error2;
    }
  }
  server_selection_events.ServerSelectionFailedEvent = ServerSelectionFailedEvent;
  class ServerSelectionSucceededEvent extends ServerSelectionEvent {
    /** @internal */
    constructor(selector, topologyDescription, address, operation2) {
      super(selector, topologyDescription, operation2);
      this.name = constants_1.SERVER_SELECTION_SUCCEEDED;
      this.message = "Server selection succeeded";
      const { host, port } = utils_1.HostAddress.fromString(address).toHostPort();
      this.serverHost = host;
      this.serverPort = port;
    }
  }
  server_selection_events.ServerSelectionSucceededEvent = ServerSelectionSucceededEvent;
  class WaitingForSuitableServerEvent extends ServerSelectionEvent {
    /** @internal */
    constructor(selector, topologyDescription, remainingTimeMS, operation2) {
      super(selector, topologyDescription, operation2);
      this.name = constants_1.WAITING_FOR_SUITABLE_SERVER;
      this.message = "Waiting for suitable server to become available";
      this.remainingTimeMS = remainingTimeMS;
    }
  }
  server_selection_events.WaitingForSuitableServerEvent = WaitingForSuitableServerEvent;
  return server_selection_events;
}
var srv_polling = {};
var hasRequiredSrv_polling;
function requireSrv_polling() {
  if (hasRequiredSrv_polling) return srv_polling;
  hasRequiredSrv_polling = 1;
  Object.defineProperty(srv_polling, "__esModule", { value: true });
  srv_polling.SrvPoller = srv_polling.SrvPollingEvent = void 0;
  const dns = require$$0$6;
  const timers_1 = require$$0$1;
  const error_1 = requireError();
  const mongo_types_1 = requireMongo_types();
  const utils_1 = requireUtils();
  class SrvPollingEvent {
    constructor(srvRecords) {
      this.srvRecords = srvRecords;
    }
    hostnames() {
      return new Set(this.srvRecords.map((r) => utils_1.HostAddress.fromSrvRecord(r).toString()));
    }
  }
  srv_polling.SrvPollingEvent = SrvPollingEvent;
  const _SrvPoller = class _SrvPoller extends mongo_types_1.TypedEventEmitter {
    constructor(options) {
      super();
      this.on("error", utils_1.noop);
      if (!options || !options.srvHost) {
        throw new error_1.MongoRuntimeError("Options for SrvPoller must exist and include srvHost");
      }
      this.srvHost = options.srvHost;
      this.srvMaxHosts = options.srvMaxHosts ?? 0;
      this.srvServiceName = options.srvServiceName ?? "mongodb";
      this.rescanSrvIntervalMS = 6e4;
      this.heartbeatFrequencyMS = options.heartbeatFrequencyMS ?? 1e4;
      this.haMode = false;
      this.generation = 0;
      this._timeout = void 0;
    }
    get srvAddress() {
      return `_${this.srvServiceName}._tcp.${this.srvHost}`;
    }
    get intervalMS() {
      return this.haMode ? this.heartbeatFrequencyMS : this.rescanSrvIntervalMS;
    }
    start() {
      if (!this._timeout) {
        this.schedule();
      }
    }
    stop() {
      if (this._timeout) {
        (0, timers_1.clearTimeout)(this._timeout);
        this.generation += 1;
        this._timeout = void 0;
      }
    }
    // TODO(NODE-4994): implement new logging logic for SrvPoller failures
    schedule() {
      if (this._timeout) {
        (0, timers_1.clearTimeout)(this._timeout);
      }
      this._timeout = (0, timers_1.setTimeout)(() => {
        this._poll().then(void 0, utils_1.squashError);
      }, this.intervalMS);
    }
    success(srvRecords) {
      this.haMode = false;
      this.schedule();
      this.emit(_SrvPoller.SRV_RECORD_DISCOVERY, new SrvPollingEvent(srvRecords));
    }
    failure() {
      this.haMode = true;
      this.schedule();
    }
    async _poll() {
      const generation = this.generation;
      let srvRecords;
      try {
        srvRecords = await dns.promises.resolve(this.srvAddress, "SRV");
      } catch {
        this.failure();
        return;
      }
      if (generation !== this.generation) {
        return;
      }
      const finalAddresses = [];
      for (const record of srvRecords) {
        try {
          (0, utils_1.checkParentDomainMatch)(record.name, this.srvHost);
          finalAddresses.push(record);
        } catch (error2) {
          (0, utils_1.squashError)(error2);
        }
      }
      if (!finalAddresses.length) {
        this.failure();
        return;
      }
      this.success(finalAddresses);
    }
  };
  _SrvPoller.SRV_RECORD_DISCOVERY = "srvRecordDiscovery";
  let SrvPoller = _SrvPoller;
  srv_polling.SrvPoller = SrvPoller;
  return srv_polling;
}
var hasRequiredTopology;
function requireTopology() {
  if (hasRequiredTopology) return topology;
  hasRequiredTopology = 1;
  Object.defineProperty(topology, "__esModule", { value: true });
  topology.Topology = void 0;
  const connection_string_1 = requireConnection_string();
  const constants_1 = requireConstants();
  const error_1 = requireError();
  const mongo_logger_1 = requireMongo_logger();
  const mongo_types_1 = requireMongo_types();
  const read_preference_1 = requireRead_preference();
  const timeout_1 = requireTimeout();
  const utils_1 = requireUtils();
  const common_1 = requireCommon$1();
  const events_1 = requireEvents();
  const server_1 = requireServer();
  const server_description_1 = requireServer_description();
  const server_selection_1 = requireServer_selection();
  const server_selection_events_1 = requireServer_selection_events();
  const srv_polling_1 = requireSrv_polling();
  const topology_description_1 = requireTopology_description();
  let globalTopologyCounter = 0;
  const stateTransition = (0, utils_1.makeStateMachine)({
    [common_1.STATE_CLOSED]: [common_1.STATE_CLOSED, common_1.STATE_CONNECTING],
    [common_1.STATE_CONNECTING]: [common_1.STATE_CONNECTING, common_1.STATE_CLOSING, common_1.STATE_CONNECTED, common_1.STATE_CLOSED],
    [common_1.STATE_CONNECTED]: [common_1.STATE_CONNECTED, common_1.STATE_CLOSING, common_1.STATE_CLOSED],
    [common_1.STATE_CLOSING]: [common_1.STATE_CLOSING, common_1.STATE_CLOSED]
  });
  const _Topology = class _Topology extends mongo_types_1.TypedEventEmitter {
    /**
     * @param seedlist - a list of HostAddress instances to connect to
     */
    constructor(client, seeds, options) {
      super();
      this.on("error", utils_1.noop);
      this.client = client;
      options = options ?? {
        hosts: [utils_1.HostAddress.fromString("localhost:27017")],
        ...Object.fromEntries(connection_string_1.DEFAULT_OPTIONS.entries())
      };
      if (typeof seeds === "string") {
        seeds = [utils_1.HostAddress.fromString(seeds)];
      } else if (!Array.isArray(seeds)) {
        seeds = [seeds];
      }
      const seedlist = [];
      for (const seed of seeds) {
        if (typeof seed === "string") {
          seedlist.push(utils_1.HostAddress.fromString(seed));
        } else if (seed instanceof utils_1.HostAddress) {
          seedlist.push(seed);
        } else {
          throw new error_1.MongoRuntimeError(`Topology cannot be constructed from ${JSON.stringify(seed)}`);
        }
      }
      const topologyType = topologyTypeFromOptions(options);
      const topologyId = globalTopologyCounter++;
      const selectedHosts = options.srvMaxHosts == null || options.srvMaxHosts === 0 || options.srvMaxHosts >= seedlist.length ? seedlist : (0, utils_1.shuffle)(seedlist, options.srvMaxHosts);
      const serverDescriptions = /* @__PURE__ */ new Map();
      for (const hostAddress of selectedHosts) {
        serverDescriptions.set(hostAddress.toString(), new server_description_1.ServerDescription(hostAddress));
      }
      this.waitQueue = new utils_1.List();
      this.s = {
        // the id of this topology
        id: topologyId,
        // passed in options
        options,
        // initial seedlist of servers to connect to
        seedlist,
        // initial state
        state: common_1.STATE_CLOSED,
        // the topology description
        description: new topology_description_1.TopologyDescription(topologyType, serverDescriptions, options.replicaSet, void 0, void 0, void 0, options),
        serverSelectionTimeoutMS: options.serverSelectionTimeoutMS,
        heartbeatFrequencyMS: options.heartbeatFrequencyMS,
        minHeartbeatFrequencyMS: options.minHeartbeatFrequencyMS,
        // a map of server instances to normalized addresses
        servers: /* @__PURE__ */ new Map(),
        credentials: options?.credentials,
        clusterTime: void 0,
        detectShardedTopology: (ev) => this.detectShardedTopology(ev),
        detectSrvRecords: (ev) => this.detectSrvRecords(ev)
      };
      this.mongoLogger = client.mongoLogger;
      this.component = "topology";
      if (options.srvHost && !options.loadBalanced) {
        this.s.srvPoller = options.srvPoller ?? new srv_polling_1.SrvPoller({
          heartbeatFrequencyMS: this.s.heartbeatFrequencyMS,
          srvHost: options.srvHost,
          srvMaxHosts: options.srvMaxHosts,
          srvServiceName: options.srvServiceName
        });
        this.on(_Topology.TOPOLOGY_DESCRIPTION_CHANGED, this.s.detectShardedTopology);
      }
      this.connectionLock = void 0;
    }
    detectShardedTopology(event) {
      const previousType = event.previousDescription.type;
      const newType = event.newDescription.type;
      const transitionToSharded = previousType !== common_1.TopologyType.Sharded && newType === common_1.TopologyType.Sharded;
      const srvListeners = this.s.srvPoller?.listeners(srv_polling_1.SrvPoller.SRV_RECORD_DISCOVERY);
      const listeningToSrvPolling = !!srvListeners?.includes(this.s.detectSrvRecords);
      if (transitionToSharded && !listeningToSrvPolling) {
        this.s.srvPoller?.on(srv_polling_1.SrvPoller.SRV_RECORD_DISCOVERY, this.s.detectSrvRecords);
        this.s.srvPoller?.start();
      }
    }
    detectSrvRecords(ev) {
      const previousTopologyDescription = this.s.description;
      this.s.description = this.s.description.updateFromSrvPollingEvent(ev, this.s.options.srvMaxHosts);
      if (this.s.description === previousTopologyDescription) {
        return;
      }
      updateServers(this);
      this.emitAndLog(_Topology.TOPOLOGY_DESCRIPTION_CHANGED, new events_1.TopologyDescriptionChangedEvent(this.s.id, previousTopologyDescription, this.s.description));
    }
    /**
     * @returns A `TopologyDescription` for this topology
     */
    get description() {
      return this.s.description;
    }
    get loadBalanced() {
      return this.s.options.loadBalanced;
    }
    get serverApi() {
      return this.s.options.serverApi;
    }
    /** Initiate server connect */
    async connect(options) {
      this.connectionLock ??= this._connect(options);
      try {
        await this.connectionLock;
        return this;
      } finally {
        this.connectionLock = void 0;
      }
    }
    async _connect(options) {
      options = options ?? {};
      if (this.s.state === common_1.STATE_CONNECTED) {
        return this;
      }
      stateTransition(this, common_1.STATE_CONNECTING);
      this.emitAndLog(_Topology.TOPOLOGY_OPENING, new events_1.TopologyOpeningEvent(this.s.id));
      this.emitAndLog(_Topology.TOPOLOGY_DESCRIPTION_CHANGED, new events_1.TopologyDescriptionChangedEvent(
        this.s.id,
        new topology_description_1.TopologyDescription(common_1.TopologyType.Unknown),
        // initial is always Unknown
        this.s.description
      ));
      const serverDescriptions = Array.from(this.s.description.servers.values());
      this.s.servers = new Map(serverDescriptions.map((serverDescription) => [
        serverDescription.address,
        createAndConnectServer(this, serverDescription)
      ]));
      if (this.s.options.loadBalanced) {
        for (const description of serverDescriptions) {
          const newDescription = new server_description_1.ServerDescription(description.hostAddress, void 0, {
            loadBalanced: this.s.options.loadBalanced
          });
          this.serverUpdateHandler(newDescription);
        }
      }
      const serverSelectionTimeoutMS = this.client.s.options.serverSelectionTimeoutMS;
      const readPreference = options.readPreference ?? read_preference_1.ReadPreference.primary;
      const timeoutContext = timeout_1.TimeoutContext.create({
        // TODO(NODE-6448): auto-connect ignores timeoutMS; potential future feature
        timeoutMS: void 0,
        serverSelectionTimeoutMS,
        waitQueueTimeoutMS: this.client.s.options.waitQueueTimeoutMS
      });
      const selectServerOptions = {
        operationName: "handshake",
        ...options,
        timeoutContext,
        deprioritizedServers: new server_selection_1.DeprioritizedServers()
      };
      try {
        const server2 = await this.selectServer((0, server_selection_1.readPreferenceServerSelector)(readPreference), selectServerOptions);
        const skipPingOnConnect = this.s.options.__skipPingOnConnect === true;
        if (!skipPingOnConnect) {
          const connection2 = await server2.pool.checkOut({ timeoutContext });
          server2.pool.checkIn(connection2);
          stateTransition(this, common_1.STATE_CONNECTED);
          this.emit(_Topology.OPEN, this);
          this.emit(_Topology.CONNECT, this);
          return this;
        }
        stateTransition(this, common_1.STATE_CONNECTED);
        this.emit(_Topology.OPEN, this);
        this.emit(_Topology.CONNECT, this);
        return this;
      } catch (error2) {
        this.close();
        throw error2;
      }
    }
    closeCheckedOutConnections() {
      for (const server2 of this.s.servers.values()) {
        server2.closeCheckedOutConnections();
      }
    }
    /** Close this topology */
    close() {
      if (this.s.state === common_1.STATE_CLOSED || this.s.state === common_1.STATE_CLOSING) {
        return;
      }
      for (const server2 of this.s.servers.values()) {
        closeServer(server2, this);
      }
      this.s.servers.clear();
      stateTransition(this, common_1.STATE_CLOSING);
      drainWaitQueue(this.waitQueue, new error_1.MongoTopologyClosedError());
      if (this.s.srvPoller) {
        this.s.srvPoller.stop();
        this.s.srvPoller.removeListener(srv_polling_1.SrvPoller.SRV_RECORD_DISCOVERY, this.s.detectSrvRecords);
      }
      this.removeListener(_Topology.TOPOLOGY_DESCRIPTION_CHANGED, this.s.detectShardedTopology);
      stateTransition(this, common_1.STATE_CLOSED);
      this.emitAndLog(_Topology.TOPOLOGY_CLOSED, new events_1.TopologyClosedEvent(this.s.id));
    }
    /**
     * Selects a server according to the selection predicate provided
     *
     * @param selector - An optional selector to select servers by, defaults to a random selection within a latency window
     * @param options - Optional settings related to server selection
     * @param callback - The callback used to indicate success or failure
     * @returns An instance of a `Server` meeting the criteria of the predicate provided
     */
    async selectServer(selector, options) {
      let serverSelector;
      if (typeof selector !== "function") {
        if (typeof selector === "string") {
          serverSelector = (0, server_selection_1.readPreferenceServerSelector)(read_preference_1.ReadPreference.fromString(selector));
        } else {
          let readPreference;
          if (selector instanceof read_preference_1.ReadPreference) {
            readPreference = selector;
          } else {
            read_preference_1.ReadPreference.translate(options);
            readPreference = options.readPreference || read_preference_1.ReadPreference.primary;
          }
          serverSelector = (0, server_selection_1.readPreferenceServerSelector)(readPreference);
        }
      } else {
        serverSelector = selector;
      }
      options = { serverSelectionTimeoutMS: this.s.serverSelectionTimeoutMS, ...options };
      if (this.client.mongoLogger?.willLog(mongo_logger_1.MongoLoggableComponent.SERVER_SELECTION, mongo_logger_1.SeverityLevel.DEBUG)) {
        this.client.mongoLogger?.debug(mongo_logger_1.MongoLoggableComponent.SERVER_SELECTION, new server_selection_events_1.ServerSelectionStartedEvent(selector, this.description, options.operationName));
      }
      let timeout2;
      if (options.timeoutContext)
        timeout2 = options.timeoutContext.serverSelectionTimeout;
      else {
        timeout2 = timeout_1.Timeout.expires(options.serverSelectionTimeoutMS ?? 0);
      }
      const isSharded = this.description.type === common_1.TopologyType.Sharded;
      const session = options.session;
      const transaction = session && session.transaction;
      if (isSharded && transaction && transaction.server) {
        if (this.client.mongoLogger?.willLog(mongo_logger_1.MongoLoggableComponent.SERVER_SELECTION, mongo_logger_1.SeverityLevel.DEBUG)) {
          this.client.mongoLogger?.debug(mongo_logger_1.MongoLoggableComponent.SERVER_SELECTION, new server_selection_events_1.ServerSelectionSucceededEvent(selector, this.description, transaction.server.pool.address, options.operationName));
        }
        if (!options.timeoutContext || options.timeoutContext.clearServerSelectionTimeout) {
          timeout2?.clear();
        }
        return transaction.server;
      }
      const { promise: serverPromise, resolve, reject } = (0, utils_1.promiseWithResolvers)();
      const waitQueueMember = {
        serverSelector,
        topologyDescription: this.description,
        mongoLogger: this.client.mongoLogger,
        transaction,
        resolve,
        reject,
        cancelled: false,
        startTime: (0, utils_1.processTimeMS)(),
        operationName: options.operationName,
        waitingLogged: false,
        deprioritizedServers: options.deprioritizedServers
      };
      const abortListener = (0, utils_1.addAbortListener)(options.signal, function() {
        waitQueueMember.cancelled = true;
        reject(this.reason);
      });
      this.waitQueue.push(waitQueueMember);
      processWaitQueue(this);
      try {
        timeout2?.throwIfExpired();
        const server2 = await (timeout2 ? Promise.race([serverPromise, timeout2]) : serverPromise);
        if (options.timeoutContext?.csotEnabled() && server2.description.minRoundTripTime !== 0) {
          options.timeoutContext.minRoundTripTime = server2.description.minRoundTripTime;
        }
        return server2;
      } catch (error2) {
        if (timeout_1.TimeoutError.is(error2)) {
          waitQueueMember.cancelled = true;
          const timeoutError = new error_1.MongoServerSelectionError(`Server selection timed out after ${timeout2?.duration} ms`, this.description);
          if (this.client.mongoLogger?.willLog(mongo_logger_1.MongoLoggableComponent.SERVER_SELECTION, mongo_logger_1.SeverityLevel.DEBUG)) {
            this.client.mongoLogger?.debug(mongo_logger_1.MongoLoggableComponent.SERVER_SELECTION, new server_selection_events_1.ServerSelectionFailedEvent(selector, this.description, timeoutError, options.operationName));
          }
          if (options.timeoutContext?.csotEnabled()) {
            throw new error_1.MongoOperationTimeoutError("Timed out during server selection", {
              cause: timeoutError
            });
          }
          throw timeoutError;
        }
        throw error2;
      } finally {
        abortListener?.[utils_1.kDispose]();
        if (!options.timeoutContext || options.timeoutContext.clearServerSelectionTimeout) {
          timeout2?.clear();
        }
      }
    }
    /**
     * Update the internal TopologyDescription with a ServerDescription
     *
     * @param serverDescription - The server to update in the internal list of server descriptions
     */
    serverUpdateHandler(serverDescription) {
      if (!this.s.description.hasServer(serverDescription.address)) {
        return;
      }
      if (isStaleServerDescription(this.s.description, serverDescription)) {
        return;
      }
      const previousTopologyDescription = this.s.description;
      const previousServerDescription = this.s.description.servers.get(serverDescription.address);
      if (!previousServerDescription) {
        return;
      }
      const clusterTime = serverDescription.$clusterTime;
      if (clusterTime) {
        (0, common_1._advanceClusterTime)(this, clusterTime);
      }
      const equalDescriptions = previousServerDescription && previousServerDescription.equals(serverDescription);
      this.s.description = this.s.description.update(serverDescription);
      if (this.s.description.compatibilityError) {
        this.emit(_Topology.ERROR, new error_1.MongoCompatibilityError(this.s.description.compatibilityError));
        return;
      }
      if (!equalDescriptions) {
        const newDescription = this.s.description.servers.get(serverDescription.address);
        if (newDescription) {
          this.emit(_Topology.SERVER_DESCRIPTION_CHANGED, new events_1.ServerDescriptionChangedEvent(this.s.id, serverDescription.address, previousServerDescription, newDescription));
        }
      }
      updateServers(this, serverDescription);
      if (this.waitQueue.length > 0) {
        processWaitQueue(this);
      }
      if (!equalDescriptions) {
        this.emitAndLog(_Topology.TOPOLOGY_DESCRIPTION_CHANGED, new events_1.TopologyDescriptionChangedEvent(this.s.id, previousTopologyDescription, this.s.description));
      }
    }
    auth(credentials, callback) {
      if (typeof credentials === "function")
        callback = credentials, credentials = void 0;
      if (typeof callback === "function")
        callback(void 0, true);
    }
    isConnected() {
      return this.s.state === common_1.STATE_CONNECTED;
    }
    isDestroyed() {
      return this.s.state === common_1.STATE_CLOSED;
    }
    // NOTE: There are many places in code where we explicitly check the last hello
    //       to do feature support detection. This should be done any other way, but for
    //       now we will just return the first hello seen, which should suffice.
    lastHello() {
      const serverDescriptions = Array.from(this.description.servers.values());
      if (serverDescriptions.length === 0)
        return {};
      const sd = serverDescriptions.filter((sd2) => sd2.type !== common_1.ServerType.Unknown)[0];
      const result = sd || { maxWireVersion: this.description.commonWireVersion };
      return result;
    }
    get commonWireVersion() {
      return this.description.commonWireVersion;
    }
    get logicalSessionTimeoutMinutes() {
      return this.description.logicalSessionTimeoutMinutes;
    }
    get clusterTime() {
      return this.s.clusterTime;
    }
    set clusterTime(clusterTime) {
      this.s.clusterTime = clusterTime;
    }
  };
  _Topology.SERVER_OPENING = constants_1.SERVER_OPENING;
  _Topology.SERVER_CLOSED = constants_1.SERVER_CLOSED;
  _Topology.SERVER_DESCRIPTION_CHANGED = constants_1.SERVER_DESCRIPTION_CHANGED;
  _Topology.TOPOLOGY_OPENING = constants_1.TOPOLOGY_OPENING;
  _Topology.TOPOLOGY_CLOSED = constants_1.TOPOLOGY_CLOSED;
  _Topology.TOPOLOGY_DESCRIPTION_CHANGED = constants_1.TOPOLOGY_DESCRIPTION_CHANGED;
  _Topology.ERROR = constants_1.ERROR;
  _Topology.OPEN = constants_1.OPEN;
  _Topology.CONNECT = constants_1.CONNECT;
  _Topology.CLOSE = constants_1.CLOSE;
  _Topology.TIMEOUT = constants_1.TIMEOUT;
  let Topology = _Topology;
  topology.Topology = Topology;
  function closeServer(server2, topology2) {
    for (const event of constants_1.LOCAL_SERVER_EVENTS) {
      server2.removeAllListeners(event);
    }
    server2.close();
    topology2.emitAndLog(Topology.SERVER_CLOSED, new events_1.ServerClosedEvent(topology2.s.id, server2.description.address));
    for (const event of constants_1.SERVER_RELAY_EVENTS) {
      server2.removeAllListeners(event);
    }
  }
  function topologyTypeFromOptions(options) {
    if (options?.directConnection) {
      return common_1.TopologyType.Single;
    }
    if (options?.replicaSet) {
      return common_1.TopologyType.ReplicaSetNoPrimary;
    }
    if (options?.loadBalanced) {
      return common_1.TopologyType.LoadBalanced;
    }
    return common_1.TopologyType.Unknown;
  }
  function createAndConnectServer(topology2, serverDescription) {
    topology2.emitAndLog(Topology.SERVER_OPENING, new events_1.ServerOpeningEvent(topology2.s.id, serverDescription.address));
    const server2 = new server_1.Server(topology2, serverDescription, topology2.s.options);
    for (const event of constants_1.SERVER_RELAY_EVENTS) {
      server2.on(event, (e) => topology2.emit(event, e));
    }
    server2.on(server_1.Server.DESCRIPTION_RECEIVED, (description) => topology2.serverUpdateHandler(description));
    server2.connect();
    return server2;
  }
  function updateServers(topology2, incomingServerDescription) {
    if (incomingServerDescription && topology2.s.servers.has(incomingServerDescription.address)) {
      const server2 = topology2.s.servers.get(incomingServerDescription.address);
      if (server2) {
        server2.s.description = incomingServerDescription;
        if (incomingServerDescription.error instanceof error_1.MongoError && incomingServerDescription.error.hasErrorLabel(error_1.MongoErrorLabel.ResetPool)) {
          const interruptInUseConnections = incomingServerDescription.error.hasErrorLabel(error_1.MongoErrorLabel.InterruptInUseConnections);
          server2.pool.clear({ interruptInUseConnections });
        } else if (incomingServerDescription.error == null) {
          const newTopologyType = topology2.s.description.type;
          const shouldMarkPoolReady = incomingServerDescription.isDataBearing || incomingServerDescription.type !== common_1.ServerType.Unknown && newTopologyType === common_1.TopologyType.Single;
          if (shouldMarkPoolReady) {
            server2.pool.ready();
          }
        }
      }
    }
    for (const serverDescription of topology2.description.servers.values()) {
      if (!topology2.s.servers.has(serverDescription.address)) {
        const server2 = createAndConnectServer(topology2, serverDescription);
        topology2.s.servers.set(serverDescription.address, server2);
      }
    }
    for (const entry of topology2.s.servers) {
      const serverAddress = entry[0];
      if (topology2.description.hasServer(serverAddress)) {
        continue;
      }
      if (!topology2.s.servers.has(serverAddress)) {
        continue;
      }
      const server2 = topology2.s.servers.get(serverAddress);
      topology2.s.servers.delete(serverAddress);
      if (server2) {
        closeServer(server2, topology2);
      }
    }
  }
  function drainWaitQueue(queue, drainError) {
    while (queue.length) {
      const waitQueueMember = queue.shift();
      if (!waitQueueMember) {
        continue;
      }
      if (!waitQueueMember.cancelled) {
        if (waitQueueMember.mongoLogger?.willLog(mongo_logger_1.MongoLoggableComponent.SERVER_SELECTION, mongo_logger_1.SeverityLevel.DEBUG)) {
          waitQueueMember.mongoLogger?.debug(mongo_logger_1.MongoLoggableComponent.SERVER_SELECTION, new server_selection_events_1.ServerSelectionFailedEvent(waitQueueMember.serverSelector, waitQueueMember.topologyDescription, drainError, waitQueueMember.operationName));
        }
        waitQueueMember.reject(drainError);
      }
    }
  }
  function processWaitQueue(topology2) {
    if (topology2.s.state === common_1.STATE_CLOSED) {
      drainWaitQueue(topology2.waitQueue, new error_1.MongoTopologyClosedError());
      return;
    }
    const isSharded = topology2.description.type === common_1.TopologyType.Sharded;
    const serverDescriptions = Array.from(topology2.description.servers.values());
    const membersToProcess = topology2.waitQueue.length;
    for (let i = 0; i < membersToProcess; ++i) {
      const waitQueueMember = topology2.waitQueue.shift();
      if (!waitQueueMember) {
        continue;
      }
      if (waitQueueMember.cancelled) {
        continue;
      }
      let selectedDescriptions;
      try {
        const serverSelector = waitQueueMember.serverSelector;
        const deprioritizedServers = waitQueueMember.deprioritizedServers;
        selectedDescriptions = serverSelector ? serverSelector(topology2.description, serverDescriptions, deprioritizedServers) : serverDescriptions;
      } catch (selectorError) {
        if (topology2.client.mongoLogger?.willLog(mongo_logger_1.MongoLoggableComponent.SERVER_SELECTION, mongo_logger_1.SeverityLevel.DEBUG)) {
          topology2.client.mongoLogger?.debug(mongo_logger_1.MongoLoggableComponent.SERVER_SELECTION, new server_selection_events_1.ServerSelectionFailedEvent(waitQueueMember.serverSelector, topology2.description, selectorError, waitQueueMember.operationName));
        }
        waitQueueMember.reject(selectorError);
        continue;
      }
      let selectedServer;
      if (selectedDescriptions.length === 0) {
        if (!waitQueueMember.waitingLogged) {
          if (topology2.client.mongoLogger?.willLog(mongo_logger_1.MongoLoggableComponent.SERVER_SELECTION, mongo_logger_1.SeverityLevel.INFORMATIONAL)) {
            topology2.client.mongoLogger?.info(mongo_logger_1.MongoLoggableComponent.SERVER_SELECTION, new server_selection_events_1.WaitingForSuitableServerEvent(waitQueueMember.serverSelector, topology2.description, topology2.s.serverSelectionTimeoutMS !== 0 ? topology2.s.serverSelectionTimeoutMS - ((0, utils_1.processTimeMS)() - waitQueueMember.startTime) : -1, waitQueueMember.operationName));
          }
          waitQueueMember.waitingLogged = true;
        }
        topology2.waitQueue.push(waitQueueMember);
        continue;
      } else if (selectedDescriptions.length === 1) {
        selectedServer = topology2.s.servers.get(selectedDescriptions[0].address);
      } else {
        const descriptions = (0, utils_1.shuffle)(selectedDescriptions, 2);
        const server1 = topology2.s.servers.get(descriptions[0].address);
        const server2 = topology2.s.servers.get(descriptions[1].address);
        selectedServer = server1 && server2 && server1.s.operationCount < server2.s.operationCount ? server1 : server2;
      }
      if (!selectedServer) {
        const serverSelectionError = new error_1.MongoServerSelectionError("server selection returned a server description but the server was not found in the topology", topology2.description);
        if (topology2.client.mongoLogger?.willLog(mongo_logger_1.MongoLoggableComponent.SERVER_SELECTION, mongo_logger_1.SeverityLevel.DEBUG)) {
          topology2.client.mongoLogger?.debug(mongo_logger_1.MongoLoggableComponent.SERVER_SELECTION, new server_selection_events_1.ServerSelectionFailedEvent(waitQueueMember.serverSelector, topology2.description, serverSelectionError, waitQueueMember.operationName));
        }
        waitQueueMember.reject(serverSelectionError);
        return;
      }
      const transaction = waitQueueMember.transaction;
      if (isSharded && transaction && transaction.isActive && selectedServer) {
        transaction.pinServer(selectedServer);
      }
      if (topology2.client.mongoLogger?.willLog(mongo_logger_1.MongoLoggableComponent.SERVER_SELECTION, mongo_logger_1.SeverityLevel.DEBUG)) {
        topology2.client.mongoLogger?.debug(mongo_logger_1.MongoLoggableComponent.SERVER_SELECTION, new server_selection_events_1.ServerSelectionSucceededEvent(waitQueueMember.serverSelector, waitQueueMember.topologyDescription, selectedServer.pool.address, waitQueueMember.operationName));
      }
      waitQueueMember.resolve(selectedServer);
    }
    if (topology2.waitQueue.length > 0) {
      for (const [, server2] of topology2.s.servers) {
        queueMicrotask(function scheduleServerCheck() {
          return server2.requestCheck();
        });
      }
    }
  }
  function isStaleServerDescription(topologyDescription, incomingServerDescription) {
    const currentServerDescription = topologyDescription.servers.get(incomingServerDescription.address);
    const currentTopologyVersion = currentServerDescription?.topologyVersion;
    return (0, server_description_1.compareTopologyVersion)(currentTopologyVersion, incomingServerDescription.topologyVersion) > 0;
  }
  return topology;
}
var hasRequiredMongo_client;
function requireMongo_client() {
  if (hasRequiredMongo_client) return mongo_client;
  hasRequiredMongo_client = 1;
  Object.defineProperty(mongo_client, "__esModule", { value: true });
  mongo_client.MongoClient = mongo_client.ServerApiVersion = void 0;
  const fs_1 = require$$0$2;
  const _1 = requireLib();
  const bson_1 = requireBson();
  const change_stream_1 = requireChange_stream();
  const mongo_credentials_1 = requireMongo_credentials();
  const providers_1 = requireProviders$1();
  const client_metadata_1 = requireClient_metadata();
  const connection_string_1 = requireConnection_string();
  const constants_1 = requireConstants();
  const db_1 = requireDb();
  const error_1 = requireError();
  const mongo_client_auth_providers_1 = requireMongo_client_auth_providers();
  const mongo_logger_1 = requireMongo_logger();
  const mongo_types_1 = requireMongo_types();
  const executor_1 = requireExecutor();
  const end_sessions_1 = requireEnd_sessions();
  const execute_operation_1 = requireExecute_operation();
  const read_preference_1 = requireRead_preference();
  const server_selection_1 = requireServer_selection();
  const topology_1 = requireTopology();
  const sessions_1 = requireSessions();
  const utils_1 = requireUtils();
  mongo_client.ServerApiVersion = Object.freeze({
    v1: "1"
  });
  class MongoClient extends mongo_types_1.TypedEventEmitter {
    constructor(url, options) {
      super();
      this.driverInfoList = [];
      this.on("error", utils_1.noop);
      this.options = (0, connection_string_1.parseOptions)(url, this, options);
      this.appendMetadata(this.options.driverInfo);
      const shouldSetLogger = Object.values(this.options.mongoLoggerOptions.componentSeverities).some((value) => value !== mongo_logger_1.SeverityLevel.OFF);
      this.mongoLogger = shouldSetLogger ? new mongo_logger_1.MongoLogger(this.options.mongoLoggerOptions) : void 0;
      const client = this;
      this.s = {
        url,
        bsonOptions: (0, bson_1.resolveBSONOptions)(this.options),
        namespace: (0, utils_1.ns)("admin"),
        hasBeenClosed: false,
        sessionPool: new sessions_1.ServerSessionPool(this),
        activeSessions: /* @__PURE__ */ new Set(),
        activeCursors: /* @__PURE__ */ new Set(),
        authProviders: new mongo_client_auth_providers_1.MongoClientAuthProviders(),
        get options() {
          return client.options;
        },
        get readConcern() {
          return client.options.readConcern;
        },
        get writeConcern() {
          return client.options.writeConcern;
        },
        get readPreference() {
          return client.options.readPreference;
        },
        get isMongoClient() {
          return true;
        }
      };
      this.checkForNonGenuineHosts();
    }
    /**
     * An alias for {@link MongoClient.close|MongoClient.close()}.
     */
    async [Symbol.asyncDispose]() {
      await this.close();
    }
    /**
     * Append metadata to the client metadata after instantiation.
     * @param driverInfo - Information about the application or library.
     */
    appendMetadata(driverInfo) {
      const isDuplicateDriverInfo = this.driverInfoList.some((info) => (0, client_metadata_1.isDriverInfoEqual)(info, driverInfo));
      if (isDuplicateDriverInfo)
        return;
      this.driverInfoList.push(driverInfo);
      this.options.metadata = (0, client_metadata_1.makeClientMetadata)(this.driverInfoList, this.options).then(void 0, utils_1.squashError).then((result) => result ?? {});
    }
    /** @internal */
    checkForNonGenuineHosts() {
      const documentDBHostnames = this.options.hosts.filter((hostAddress) => (0, utils_1.isHostMatch)(utils_1.DOCUMENT_DB_CHECK, hostAddress.host));
      const srvHostIsDocumentDB = (0, utils_1.isHostMatch)(utils_1.DOCUMENT_DB_CHECK, this.options.srvHost);
      const cosmosDBHostnames = this.options.hosts.filter((hostAddress) => (0, utils_1.isHostMatch)(utils_1.COSMOS_DB_CHECK, hostAddress.host));
      const srvHostIsCosmosDB = (0, utils_1.isHostMatch)(utils_1.COSMOS_DB_CHECK, this.options.srvHost);
      if (documentDBHostnames.length !== 0 || srvHostIsDocumentDB) {
        this.mongoLogger?.info("client", utils_1.DOCUMENT_DB_MSG);
      } else if (cosmosDBHostnames.length !== 0 || srvHostIsCosmosDB) {
        this.mongoLogger?.info("client", utils_1.COSMOS_DB_MSG);
      }
    }
    get serverApi() {
      return this.options.serverApi && Object.freeze({ ...this.options.serverApi });
    }
    /**
     * Intended for APM use only
     * @internal
     */
    get monitorCommands() {
      return this.options.monitorCommands;
    }
    set monitorCommands(value) {
      this.options.monitorCommands = value;
    }
    /** @internal */
    get autoEncrypter() {
      return this.options.autoEncrypter;
    }
    get readConcern() {
      return this.s.readConcern;
    }
    get writeConcern() {
      return this.s.writeConcern;
    }
    get readPreference() {
      return this.s.readPreference;
    }
    get bsonOptions() {
      return this.s.bsonOptions;
    }
    get timeoutMS() {
      return this.s.options.timeoutMS;
    }
    /**
     * Executes a client bulk write operation, available on server 8.0+.
     * @param models - The client bulk write models.
     * @param options - The client bulk write options.
     * @returns A ClientBulkWriteResult for acknowledged writes and ok: 1 for unacknowledged writes.
     */
    async bulkWrite(models, options) {
      if (this.autoEncrypter) {
        throw new error_1.MongoInvalidArgumentError("MongoClient bulkWrite does not currently support automatic encryption.");
      }
      return await new executor_1.ClientBulkWriteExecutor(this, models, (0, utils_1.resolveOptions)(this, options)).execute();
    }
    /**
     * An optional method to verify a handful of assumptions that are generally useful at application boot-time before using a MongoClient.
     * For detailed information about the connect process see the MongoClient.connect static method documentation.
     *
     * @param url - The MongoDB connection string (supports `mongodb://` and `mongodb+srv://` schemes)
     * @param options - Optional configuration options for the client
     *
     * @see https://www.mongodb.com/docs/manual/reference/connection-string/
     */
    async connect() {
      if (this.connectionLock) {
        return await this.connectionLock;
      }
      try {
        this.connectionLock = this._connect();
        await this.connectionLock;
      } finally {
        this.connectionLock = void 0;
      }
      return this;
    }
    /**
     * Create a topology to open the connection, must be locked to avoid topology leaks in concurrency scenario.
     * Locking is enforced by the connect method.
     *
     * @internal
     */
    async _connect() {
      if (this.topology && this.topology.isConnected()) {
        return this;
      }
      const options = this.options;
      if (options.tls) {
        if (typeof options.tlsCAFile === "string") {
          options.ca ??= await fs_1.promises.readFile(options.tlsCAFile);
        }
        if (typeof options.tlsCRLFile === "string") {
          options.crl ??= await fs_1.promises.readFile(options.tlsCRLFile);
        }
        if (typeof options.tlsCertificateKeyFile === "string") {
          if (!options.key || !options.cert) {
            const contents = await fs_1.promises.readFile(options.tlsCertificateKeyFile);
            options.key ??= contents;
            options.cert ??= contents;
          }
        }
      }
      if (typeof options.srvHost === "string") {
        const hosts = await (0, connection_string_1.resolveSRVRecord)(options);
        for (const [index, host] of hosts.entries()) {
          options.hosts[index] = host;
        }
      }
      if (options.credentials?.mechanism === providers_1.AuthMechanism.MONGODB_OIDC) {
        const allowedHosts = options.credentials?.mechanismProperties?.ALLOWED_HOSTS || mongo_credentials_1.DEFAULT_ALLOWED_HOSTS;
        const isServiceAuth = !!options.credentials?.mechanismProperties?.ENVIRONMENT;
        if (!isServiceAuth) {
          for (const host of options.hosts) {
            if (!(0, utils_1.hostMatchesWildcards)(host.toHostPort().host, allowedHosts)) {
              throw new error_1.MongoInvalidArgumentError(`Host '${host}' is not valid for OIDC authentication with ALLOWED_HOSTS of '${allowedHosts.join(",")}'`);
            }
          }
        }
      }
      this.topology = new topology_1.Topology(this, options.hosts, options);
      this.topology.once(topology_1.Topology.OPEN, () => this.emit("open", this));
      for (const event of constants_1.MONGO_CLIENT_EVENTS) {
        this.topology.on(event, (...args) => this.emit(event, ...args));
      }
      const topologyConnect = async () => {
        try {
          await this.topology?.connect(options);
        } catch (error2) {
          this.topology?.close();
          throw error2;
        }
      };
      if (this.autoEncrypter) {
        await this.autoEncrypter?.init();
        await topologyConnect();
        await options.encrypter.connectInternalClient();
      } else {
        await topologyConnect();
      }
      return this;
    }
    /**
     * Cleans up resources managed by the MongoClient.
     *
     * The close method clears and closes all resources whose lifetimes are managed by the MongoClient.
     * Please refer to the `MongoClient` class documentation for a high level overview of the client's key features and responsibilities.
     *
     * **However,** the close method does not handle the cleanup of resources explicitly created by the user.
     * Any user-created driver resource with its own `close()` method should be explicitly closed by the user before calling MongoClient.close().
     * This method is written as a "best effort" attempt to leave behind the least amount of resources server-side when possible.
     *
     * The following list defines ideal preconditions and consequent pitfalls if they are not met.
     * The MongoClient, ClientSession, Cursors and ChangeStreams all support [explicit resource management](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-2.html).
     * By using explicit resource management to manage the lifetime of driver resources instead of manually managing their lifetimes, the pitfalls outlined below can be avoided.
     *
     * The close method performs the following in the order listed:
     * - Client-side:
     *   - **Close in-use connections**: Any connections that are currently waiting on a response from the server will be closed.
     *     This is performed _first_ to avoid reaching the next step (server-side clean up) and having no available connections to check out.
     *     - _Ideal_: All operations have been awaited or cancelled, and the outcomes, regardless of success or failure, have been processed before closing the client servicing the operation.
     *     - _Pitfall_: When `client.close()` is called and all connections are in use, after closing them, the client must create new connections for cleanup operations, which comes at the cost of new TLS/TCP handshakes and authentication steps.
     * - Server-side:
     *   - **Close active cursors**: All cursors that haven't been completed will have a `killCursor` operation sent to the server they were initialized on, freeing the server-side resource.
     *     - _Ideal_: Cursors are explicitly closed or completed before `client.close()` is called.
     *     - _Pitfall_: `killCursors` may have to build a new connection if the in-use closure ended all pooled connections.
     *   - **End active sessions**: In-use sessions created with `client.startSession()` or `client.withSession()` or implicitly by the driver will have their `.endSession()` method called.
     *     Contrary to the name of the method, `endSession()` returns the session to the client's pool of sessions rather than end them on the server.
     *     - _Ideal_: Transaction outcomes are awaited and their corresponding explicit sessions are ended before `client.close()` is called.
     *     - _Pitfall_: **This step aborts in-progress transactions**. It is advisable to observe the outcome of a transaction before closing your client.
     *   - **End all pooled sessions**: The `endSessions` command with all session IDs the client has pooled is sent to the server to inform the cluster it can clean them up.
     *     - _Ideal_: No user intervention is expected.
     *     - _Pitfall_: None.
     *
     * The remaining shutdown is of the MongoClient resources that are intended to be entirely internal but is documented here as their existence relates to the JS event loop.
     *
     * - Client-side (again):
     *   - **Stop all server monitoring**: Connections kept live for detecting cluster changes and roundtrip time measurements are shutdown.
     *   - **Close all pooled connections**: Each server node in the cluster has a corresponding connection pool and all connections in the pool are closed. Any operations waiting to check out a connection will have an error thrown instead of a connection returned.
     *   - **Clear out server selection queue**: Any operations that are in the process of waiting for a server to be selected will have an error thrown instead of a server returned.
     *   - **Close encryption-related resources**: An internal MongoClient created for communicating with `mongocryptd` or other encryption purposes is closed. (Using this same method of course!)
     *
     * After the close method completes there should be no MongoClient related resources [ref-ed in Node.js' event loop](https://docs.libuv.org/en/v1.x/handle.html#reference-counting).
     * This should allow Node.js to exit gracefully if MongoClient resources were the only active handles in the event loop.
     *
     * @param _force - currently an unused flag that has no effect. Defaults to `false`.
     */
    async close(_force = false) {
      if (this.closeLock) {
        return await this.closeLock;
      }
      try {
        this.closeLock = this._close();
        await this.closeLock;
      } finally {
        this.closeLock = void 0;
      }
    }
    /* @internal */
    async _close() {
      Object.defineProperty(this.s, "hasBeenClosed", {
        value: true,
        enumerable: true,
        configurable: false,
        writable: false
      });
      this.topology?.closeCheckedOutConnections();
      const activeCursorCloses = Array.from(this.s.activeCursors, (cursor) => cursor.close());
      this.s.activeCursors.clear();
      await Promise.all(activeCursorCloses);
      const activeSessionEnds = Array.from(this.s.activeSessions, (session) => session.endSession());
      this.s.activeSessions.clear();
      await Promise.all(activeSessionEnds);
      if (this.topology == null) {
        return;
      }
      const supportsSessions = this.topology.description.type === _1.TopologyType.LoadBalanced || this.topology.description.logicalSessionTimeoutMinutes != null;
      if (supportsSessions) {
        await endSessions(this, this.topology);
      }
      const topology2 = this.topology;
      this.topology = void 0;
      topology2.close();
      const { encrypter: encrypter2 } = this.options;
      if (encrypter2) {
        await encrypter2.close(this);
      }
      async function endSessions(client, { description: topologyDescription }) {
        const selector = (0, server_selection_1.readPreferenceServerSelector)(read_preference_1.ReadPreference.primaryPreferred);
        const serverDescriptions = Array.from(topologyDescription.servers.values());
        const servers = selector(topologyDescription, serverDescriptions, new server_selection_1.DeprioritizedServers());
        if (servers.length !== 0) {
          const endSessions2 = Array.from(client.s.sessionPool.sessions, ({ id }) => id);
          if (endSessions2.length !== 0) {
            try {
              await (0, execute_operation_1.executeOperation)(client, new end_sessions_1.EndSessionsOperation(endSessions2));
            } catch (error2) {
              (0, utils_1.squashError)(error2);
            }
          }
        }
      }
    }
    /**
     * Create a new Db instance sharing the current socket connections.
     *
     * @param dbName - The name of the database we want to use. If not provided, use database name from connection string.
     * @param options - Optional settings for Db construction
     */
    db(dbName, options) {
      options = options ?? {};
      if (!dbName) {
        dbName = this.s.options.dbName;
      }
      const finalOptions = Object.assign({}, this.options, options);
      const db2 = new db_1.Db(this, dbName, finalOptions);
      return db2;
    }
    /**
     * Creates a new MongoClient instance and immediately connects it to MongoDB.
     * This convenience method combines `new MongoClient(url, options)` and `client.connect()` in a single step.
     *
     * Connect can be helpful to detect configuration issues early by validating:
     * - **DNS Resolution**: Verifies that SRV records and hostnames in the connection string resolve DNS entries
     * - **Network Connectivity**: Confirms that host addresses are reachable and ports are open
     * - **TLS Configuration**: Validates SSL/TLS certificates, CA files, and encryption settings are correct
     * - **Authentication**: Verifies that provided credentials are valid
     * - **Server Compatibility**: Ensures the MongoDB server version is supported by this driver version
     * - **Load Balancer Setup**: For load-balanced deployments, confirms the service is properly configured
     *
     * @returns A promise that resolves to the same MongoClient instance once connected
     *
     * @remarks
     * **Connection is Optional:** Calling `connect` is optional since any operation method (`find`, `insertOne`, etc.)
     * will automatically perform these same validation steps if the client is not already connected.
     * However, explicitly calling `connect` can make sense for:
     * - **Fail-fast Error Detection**: Non-transient connection issues (hostname unresolved, port refused connection) are discovered immediately rather than during your first operation
     * - **Predictable Performance**: Eliminates first connection overhead from your first database operation
     *
     * @remarks
     * **Connection Pooling Impact:** Calling `connect` will populate the connection pool with one connection
     * to a server selected by the client's configured `readPreference` (defaults to primary).
     *
     * @remarks
     * **Timeout Behavior:** When using `timeoutMS`, the connection establishment time does not count against
     * the timeout for subsequent operations. This means `connect` runs without a `timeoutMS` limit, while
     * your database operations will still respect the configured timeout. If you need predictable operation
     * timing with `timeoutMS`, call `connect` explicitly before performing operations.
     *
     * @see https://www.mongodb.com/docs/manual/reference/connection-string/
     */
    static async connect(url, options) {
      const client = new this(url, options);
      return await client.connect();
    }
    /**
     * Creates a new ClientSession. When using the returned session in an operation
     * a corresponding ServerSession will be created.
     *
     * @remarks
     * A ClientSession instance may only be passed to operations being performed on the same
     * MongoClient it was started from.
     */
    startSession(options) {
      const session = new sessions_1.ClientSession(this, this.s.sessionPool, { explicit: true, ...options }, this.options);
      this.s.activeSessions.add(session);
      session.once("ended", () => {
        this.s.activeSessions.delete(session);
      });
      return session;
    }
    async withSession(optionsOrExecutor, executor2) {
      const options = {
        // Always define an owner
        owner: /* @__PURE__ */ Symbol(),
        // If it's an object inherit the options
        ...typeof optionsOrExecutor === "object" ? optionsOrExecutor : {}
      };
      const withSessionCallback = typeof optionsOrExecutor === "function" ? optionsOrExecutor : executor2;
      if (withSessionCallback == null) {
        throw new error_1.MongoInvalidArgumentError("Missing required callback parameter");
      }
      const session = this.startSession(options);
      try {
        return await withSessionCallback(session);
      } finally {
        try {
          await session.endSession();
        } catch (error2) {
          (0, utils_1.squashError)(error2);
        }
      }
    }
    /**
     * Create a new Change Stream, watching for new changes (insertions, updates,
     * replacements, deletions, and invalidations) in this cluster. Will ignore all
     * changes to system collections, as well as the local, admin, and config databases.
     *
     * @remarks
     * watch() accepts two generic arguments for distinct use cases:
     * - The first is to provide the schema that may be defined for all the data within the current cluster
     * - The second is to override the shape of the change stream document entirely, if it is not provided the type will default to ChangeStreamDocument of the first argument
     *
     * @remarks
     * When `timeoutMS` is configured for a change stream, it will have different behaviour depending
     * on whether the change stream is in iterator mode or emitter mode. In both cases, a change
     * stream will time out if it does not receive a change event within `timeoutMS` of the last change
     * event.
     *
     * Note that if a change stream is consistently timing out when watching a collection, database or
     * client that is being changed, then this may be due to the server timing out before it can finish
     * processing the existing oplog. To address this, restart the change stream with a higher
     * `timeoutMS`.
     *
     * If the change stream times out the initial aggregate operation to establish the change stream on
     * the server, then the client will close the change stream. If the getMore calls to the server
     * time out, then the change stream will be left open, but will throw a MongoOperationTimeoutError
     * when in iterator mode and emit an error event that returns a MongoOperationTimeoutError in
     * emitter mode.
     *
     * To determine whether or not the change stream is still open following a timeout, check the
     * {@link ChangeStream.closed} getter.
     *
     * @example
     * In iterator mode, if a next() call throws a timeout error, it will attempt to resume the change stream.
     * The next call can just be retried after this succeeds.
     * ```ts
     * const changeStream = collection.watch([], { timeoutMS: 100 });
     * try {
     *     await changeStream.next();
     * } catch (e) {
     *     if (e instanceof MongoOperationTimeoutError && !changeStream.closed) {
     *       await changeStream.next();
     *     }
     *     throw e;
     * }
     * ```
     *
     * @example
     * In emitter mode, if the change stream goes `timeoutMS` without emitting a change event, it will
     * emit an error event that returns a MongoOperationTimeoutError, but will not close the change
     * stream unless the resume attempt fails. There is no need to re-establish change listeners as
     * this will automatically continue emitting change events once the resume attempt completes.
     *
     * ```ts
     * const changeStream = collection.watch([], { timeoutMS: 100 });
     * changeStream.on('change', console.log);
     * changeStream.on('error', e => {
     *     if (e instanceof MongoOperationTimeoutError && !changeStream.closed) {
     *         // do nothing
     *     } else {
     *         changeStream.close();
     *     }
     * });
     * ```
     * @param pipeline - An array of {@link https://www.mongodb.com/docs/manual/reference/operator/aggregation-pipeline/|aggregation pipeline stages} through which to pass change stream documents. This allows for filtering (using $match) and manipulating the change stream documents.
     * @param options - Optional settings for the command
     * @typeParam TSchema - Type of the data being detected by the change stream
     * @typeParam TChange - Type of the whole change stream document emitted
     */
    watch(pipeline = [], options = {}) {
      if (!Array.isArray(pipeline)) {
        options = pipeline;
        pipeline = [];
      }
      return new change_stream_1.ChangeStream(this, pipeline, (0, utils_1.resolveOptions)(this, options));
    }
  }
  mongo_client.MongoClient = MongoClient;
  return mongo_client;
}
var hasRequiredChange_stream;
function requireChange_stream() {
  if (hasRequiredChange_stream) return change_stream;
  hasRequiredChange_stream = 1;
  Object.defineProperty(change_stream, "__esModule", { value: true });
  change_stream.ChangeStream = void 0;
  change_stream.filterOutOptions = filterOutOptions;
  const collection_1 = requireCollection();
  const constants_1 = requireConstants();
  const abstract_cursor_1 = requireAbstract_cursor();
  const change_stream_cursor_1 = requireChange_stream_cursor();
  const db_1 = requireDb();
  const error_1 = requireError();
  const mongo_client_1 = requireMongo_client();
  const mongo_types_1 = requireMongo_types();
  const server_selection_1 = requireServer_selection();
  const timeout_1 = requireTimeout();
  const utils_1 = requireUtils();
  const CHANGE_DOMAIN_TYPES = {
    COLLECTION: /* @__PURE__ */ Symbol("Collection"),
    DATABASE: /* @__PURE__ */ Symbol("Database"),
    CLUSTER: /* @__PURE__ */ Symbol("Cluster")
  };
  const CHANGE_STREAM_EVENTS = [constants_1.RESUME_TOKEN_CHANGED, constants_1.END, constants_1.CLOSE];
  const NO_RESUME_TOKEN_ERROR = "A change stream document has been received that lacks a resume token (_id).";
  const CHANGESTREAM_CLOSED_ERROR = "ChangeStream is closed";
  const INVALID_STAGE_OPTIONS = buildDisallowedChangeStreamOptions();
  function filterOutOptions(options) {
    return Object.fromEntries(Object.entries(options).filter(([k, _]) => !INVALID_STAGE_OPTIONS.has(k)));
  }
  const _ChangeStream = class _ChangeStream extends mongo_types_1.TypedEventEmitter {
    /**
     * An alias for {@link ChangeStream.close|ChangeStream.close()}.
     */
    async [Symbol.asyncDispose]() {
      await this.close();
    }
    /**
     * @internal
     *
     * @param parent - The parent object that created this change stream
     * @param pipeline - An array of {@link https://www.mongodb.com/docs/manual/reference/operator/aggregation-pipeline/|aggregation pipeline stages} through which to pass change stream documents
     */
    constructor(parent, pipeline = [], options = {}) {
      super();
      this.pipeline = pipeline;
      this.options = { ...options };
      let serverSelectionTimeoutMS;
      delete this.options.writeConcern;
      if (parent instanceof collection_1.Collection) {
        this.type = CHANGE_DOMAIN_TYPES.COLLECTION;
        serverSelectionTimeoutMS = parent.s.db.client.options.serverSelectionTimeoutMS;
      } else if (parent instanceof db_1.Db) {
        this.type = CHANGE_DOMAIN_TYPES.DATABASE;
        serverSelectionTimeoutMS = parent.client.options.serverSelectionTimeoutMS;
      } else if (parent instanceof mongo_client_1.MongoClient) {
        this.type = CHANGE_DOMAIN_TYPES.CLUSTER;
        serverSelectionTimeoutMS = parent.options.serverSelectionTimeoutMS;
      } else {
        throw new error_1.MongoChangeStreamError("Parent provided to ChangeStream constructor must be an instance of Collection, Db, or MongoClient");
      }
      this.contextOwner = /* @__PURE__ */ Symbol();
      this.parent = parent;
      this.namespace = parent.s.namespace;
      if (!this.options.readPreference && parent.readPreference) {
        this.options.readPreference = parent.readPreference;
      }
      this.cursor = this._createChangeStreamCursor(options);
      this.isClosed = false;
      this.mode = false;
      this.on("newListener", (eventName) => {
        if (eventName === "change" && this.cursor && this.listenerCount("change") === 0) {
          this._streamEvents(this.cursor);
        }
      });
      this.on("removeListener", (eventName) => {
        if (eventName === "change" && this.listenerCount("change") === 0 && this.cursor) {
          this.cursorStream?.removeAllListeners("data");
        }
      });
      if (this.options.timeoutMS != null) {
        this.timeoutContext = new timeout_1.CSOTTimeoutContext({
          timeoutMS: this.options.timeoutMS,
          serverSelectionTimeoutMS
        });
      }
    }
    /** The cached resume token that is used to resume after the most recently returned change. */
    get resumeToken() {
      return this.cursor?.resumeToken;
    }
    /** Returns the currently buffered documents length of the underlying cursor. */
    bufferedCount() {
      return this.cursor?.bufferedCount() ?? 0;
    }
    /** Check if there is any document still available in the Change Stream */
    async hasNext() {
      this._setIsIterator();
      this.timeoutContext?.refresh();
      try {
        while (true) {
          try {
            const hasNext = await this.cursor.hasNext();
            return hasNext;
          } catch (error2) {
            try {
              await this._processErrorIteratorMode(error2, this.cursor.id != null);
            } catch (error3) {
              if (error3 instanceof error_1.MongoOperationTimeoutError && this.cursor.id == null) {
                throw error3;
              }
              try {
                await this.close();
              } catch (error4) {
                (0, utils_1.squashError)(error4);
              }
              throw error3;
            }
          }
        }
      } finally {
        this.timeoutContext?.clear();
      }
    }
    /** Get the next available document from the Change Stream. */
    async next() {
      this._setIsIterator();
      this.timeoutContext?.refresh();
      try {
        while (true) {
          try {
            const change = await this.cursor.next();
            const processedChange = this._processChange(change ?? null);
            return processedChange;
          } catch (error2) {
            try {
              await this._processErrorIteratorMode(error2, this.cursor.id != null);
            } catch (error3) {
              if (error3 instanceof error_1.MongoOperationTimeoutError && this.cursor.id == null) {
                throw error3;
              }
              try {
                await this.close();
              } catch (error4) {
                (0, utils_1.squashError)(error4);
              }
              throw error3;
            }
          }
        }
      } finally {
        this.timeoutContext?.clear();
      }
    }
    /**
     * Try to get the next available document from the Change Stream's cursor or `null` if an empty batch is returned
     */
    async tryNext() {
      this._setIsIterator();
      this.timeoutContext?.refresh();
      try {
        while (true) {
          try {
            const change = await this.cursor.tryNext();
            if (!change) {
              return null;
            }
            const processedChange = this._processChange(change);
            return processedChange;
          } catch (error2) {
            try {
              await this._processErrorIteratorMode(error2, this.cursor.id != null);
            } catch (error3) {
              if (error3 instanceof error_1.MongoOperationTimeoutError && this.cursor.id == null)
                throw error3;
              try {
                await this.close();
              } catch (error4) {
                (0, utils_1.squashError)(error4);
              }
              throw error3;
            }
          }
        }
      } finally {
        this.timeoutContext?.clear();
      }
    }
    async *[Symbol.asyncIterator]() {
      if (this.closed) {
        return;
      }
      try {
        while (true) {
          yield await this.next();
        }
      } finally {
        try {
          await this.close();
        } catch (error2) {
          (0, utils_1.squashError)(error2);
        }
      }
    }
    /** Is the cursor closed */
    get closed() {
      return this.isClosed || this.cursor.closed;
    }
    /**
     * Frees the internal resources used by the change stream.
     */
    async close() {
      this.timeoutContext?.clear();
      this.timeoutContext = void 0;
      this.isClosed = true;
      const cursor = this.cursor;
      try {
        await cursor.close();
      } finally {
        this._endStream();
      }
    }
    /**
     * Return a modified Readable stream including a possible transform method.
     *
     * NOTE: When using a Stream to process change stream events, the stream will
     * NOT automatically resume in the case a resumable error is encountered.
     *
     * @throws MongoChangeStreamError if the underlying cursor or the change stream is closed
     */
    stream() {
      if (this.closed) {
        throw new error_1.MongoChangeStreamError(CHANGESTREAM_CLOSED_ERROR);
      }
      return this.cursor.stream();
    }
    /** @internal */
    _setIsEmitter() {
      if (this.mode === "iterator") {
        throw new error_1.MongoAPIError("ChangeStream cannot be used as an EventEmitter after being used as an iterator");
      }
      this.mode = "emitter";
    }
    /** @internal */
    _setIsIterator() {
      if (this.mode === "emitter") {
        throw new error_1.MongoAPIError("ChangeStream cannot be used as an iterator after being used as an EventEmitter");
      }
      this.mode = "iterator";
    }
    /**
     * Create a new change stream cursor based on self's configuration
     * @internal
     */
    _createChangeStreamCursor(options) {
      const changeStreamStageOptions = filterOutOptions(options);
      if (this.type === CHANGE_DOMAIN_TYPES.CLUSTER) {
        changeStreamStageOptions.allChangesForCluster = true;
      }
      const pipeline = [{ $changeStream: changeStreamStageOptions }, ...this.pipeline];
      const client = this.type === CHANGE_DOMAIN_TYPES.CLUSTER ? this.parent : this.type === CHANGE_DOMAIN_TYPES.DATABASE ? this.parent.client : this.type === CHANGE_DOMAIN_TYPES.COLLECTION ? this.parent.client : null;
      if (client == null) {
        throw new error_1.MongoRuntimeError(`Changestream type should only be one of cluster, database, collection. Found ${this.type.toString()}`);
      }
      const changeStreamCursor = new change_stream_cursor_1.ChangeStreamCursor(client, this.namespace, pipeline, {
        ...options,
        timeoutContext: this.timeoutContext ? new abstract_cursor_1.CursorTimeoutContext(this.timeoutContext, this.contextOwner) : void 0
      });
      for (const event of CHANGE_STREAM_EVENTS) {
        changeStreamCursor.on(event, (e) => this.emit(event, e));
      }
      if (this.listenerCount(_ChangeStream.CHANGE) > 0) {
        this._streamEvents(changeStreamCursor);
      }
      return changeStreamCursor;
    }
    /** @internal */
    _closeEmitterModeWithError(error2) {
      this.emit(_ChangeStream.ERROR, error2);
      this.close().then(void 0, utils_1.squashError);
    }
    /** @internal */
    _streamEvents(cursor) {
      this._setIsEmitter();
      const stream = this.cursorStream ?? cursor.stream();
      this.cursorStream = stream;
      stream.on("data", (change) => {
        try {
          const processedChange = this._processChange(change);
          this.emit(_ChangeStream.CHANGE, processedChange);
        } catch (error2) {
          this.emit(_ChangeStream.ERROR, error2);
        }
        this.timeoutContext?.refresh();
      });
      stream.on("error", (error2) => this._processErrorStreamMode(error2, this.cursor.id != null));
    }
    /** @internal */
    _endStream() {
      this.cursorStream?.removeAllListeners("data");
      this.cursorStream?.removeAllListeners("close");
      this.cursorStream?.removeAllListeners("end");
      this.cursorStream?.destroy();
      this.cursorStream = void 0;
    }
    /** @internal */
    _processChange(change) {
      if (this.isClosed) {
        throw new error_1.MongoAPIError(CHANGESTREAM_CLOSED_ERROR);
      }
      if (change == null) {
        throw new error_1.MongoRuntimeError(CHANGESTREAM_CLOSED_ERROR);
      }
      if (change && !change._id) {
        throw new error_1.MongoChangeStreamError(NO_RESUME_TOKEN_ERROR);
      }
      this.cursor.cacheResumeToken(change._id);
      this.options.startAtOperationTime = void 0;
      return change;
    }
    /** @internal */
    _processErrorStreamMode(changeStreamError, cursorInitialized) {
      if (this.isClosed)
        return;
      if (cursorInitialized && ((0, error_1.isResumableError)(changeStreamError, this.cursor.maxWireVersion) || changeStreamError instanceof error_1.MongoOperationTimeoutError)) {
        this._endStream();
        this.cursor.close().then(() => this._resume(changeStreamError), (e) => {
          (0, utils_1.squashError)(e);
          return this._resume(changeStreamError);
        }).then(() => {
          if (changeStreamError instanceof error_1.MongoOperationTimeoutError)
            this.emit(_ChangeStream.ERROR, changeStreamError);
        }, () => this._closeEmitterModeWithError(changeStreamError));
      } else {
        this._closeEmitterModeWithError(changeStreamError);
      }
    }
    /** @internal */
    async _processErrorIteratorMode(changeStreamError, cursorInitialized) {
      if (this.isClosed) {
        throw new error_1.MongoAPIError(CHANGESTREAM_CLOSED_ERROR);
      }
      if (cursorInitialized && ((0, error_1.isResumableError)(changeStreamError, this.cursor.maxWireVersion) || changeStreamError instanceof error_1.MongoOperationTimeoutError)) {
        try {
          await this.cursor.close();
        } catch (error2) {
          (0, utils_1.squashError)(error2);
        }
        await this._resume(changeStreamError);
        if (changeStreamError instanceof error_1.MongoOperationTimeoutError)
          throw changeStreamError;
      } else {
        try {
          await this.close();
        } catch (error2) {
          (0, utils_1.squashError)(error2);
        }
        throw changeStreamError;
      }
    }
    async _resume(changeStreamError) {
      this.timeoutContext?.refresh();
      const topology2 = (0, utils_1.getTopology)(this.parent);
      try {
        await topology2.selectServer(this.cursor.readPreference, {
          operationName: "reconnect topology in change stream",
          timeoutContext: this.timeoutContext,
          deprioritizedServers: new server_selection_1.DeprioritizedServers()
        });
        this.cursor = this._createChangeStreamCursor(this.cursor.resumeOptions);
      } catch {
        await this.close();
        throw changeStreamError;
      }
    }
  };
  _ChangeStream.RESPONSE = constants_1.RESPONSE;
  _ChangeStream.MORE = constants_1.MORE;
  _ChangeStream.INIT = constants_1.INIT;
  _ChangeStream.CLOSE = constants_1.CLOSE;
  _ChangeStream.CHANGE = constants_1.CHANGE;
  _ChangeStream.END = constants_1.END;
  _ChangeStream.ERROR = constants_1.ERROR;
  _ChangeStream.RESUME_TOKEN_CHANGED = constants_1.RESUME_TOKEN_CHANGED;
  let ChangeStream = _ChangeStream;
  change_stream.ChangeStream = ChangeStream;
  function buildDisallowedChangeStreamOptions() {
    const denyList = {
      allowDiskUse: "",
      authdb: "",
      batchSize: "",
      bsonRegExp: "",
      bypassDocumentValidation: "",
      bypassPinningCheck: "",
      checkKeys: "",
      collation: "",
      comment: "",
      cursor: "",
      dbName: "",
      enableUtf8Validation: "",
      explain: "",
      fieldsAsRaw: "",
      hint: "",
      ignoreUndefined: "",
      let: "",
      maxAwaitTimeMS: "",
      maxTimeMS: "",
      omitMaxTimeMS: "",
      out: "",
      promoteBuffers: "",
      promoteLongs: "",
      promoteValues: "",
      raw: "",
      rawData: "",
      readConcern: "",
      readPreference: "",
      serializeFunctions: "",
      session: "",
      timeoutContext: "",
      timeoutMS: "",
      timeoutMode: "",
      useBigInt64: "",
      willRetryWrite: "",
      writeConcern: ""
    };
    return new Set(Object.keys(denyList));
  }
  return change_stream;
}
var gridfs = {};
var download = {};
var hasRequiredDownload;
function requireDownload() {
  if (hasRequiredDownload) return download;
  hasRequiredDownload = 1;
  Object.defineProperty(download, "__esModule", { value: true });
  download.GridFSBucketReadStream = void 0;
  const stream_1 = require$$0$5;
  const bson_1 = requireBson();
  const abstract_cursor_1 = requireAbstract_cursor();
  const error_1 = requireError();
  const timeout_1 = requireTimeout();
  const _GridFSBucketReadStream = class _GridFSBucketReadStream extends stream_1.Readable {
    /**
     * @param chunks - Handle for chunks collection
     * @param files - Handle for files collection
     * @param readPreference - The read preference to use
     * @param filter - The filter to use to find the file document
     * @internal
     */
    constructor(chunks, files, readPreference, filter, options) {
      super({ emitClose: true });
      this.s = {
        bytesToTrim: 0,
        bytesToSkip: 0,
        bytesRead: 0,
        chunks,
        expected: 0,
        files,
        filter,
        init: false,
        expectedEnd: 0,
        options: {
          start: 0,
          end: 0,
          ...options
        },
        readPreference,
        timeoutContext: options?.timeoutMS != null ? new timeout_1.CSOTTimeoutContext({ timeoutMS: options.timeoutMS, serverSelectionTimeoutMS: 0 }) : void 0
      };
    }
    /**
     * Reads from the cursor and pushes to the stream.
     * Private Impl, do not call directly
     * @internal
     */
    _read() {
      if (this.destroyed)
        return;
      waitForFile(this, () => doRead(this));
    }
    /**
     * Sets the 0-based offset in bytes to start streaming from. Throws
     * an error if this stream has entered flowing mode
     * (e.g. if you've already called `on('data')`)
     *
     * @param start - 0-based offset in bytes to start streaming from
     */
    start(start = 0) {
      throwIfInitialized(this);
      this.s.options.start = start;
      return this;
    }
    /**
     * Sets the 0-based offset in bytes to start streaming from. Throws
     * an error if this stream has entered flowing mode
     * (e.g. if you've already called `on('data')`)
     *
     * @param end - Offset in bytes to stop reading at
     */
    end(end = 0) {
      throwIfInitialized(this);
      this.s.options.end = end;
      return this;
    }
    /**
     * Marks this stream as aborted (will never push another `data` event)
     * and kills the underlying cursor. Will emit the 'end' event, and then
     * the 'close' event once the cursor is successfully killed.
     */
    async abort() {
      this.push(null);
      this.destroy();
      const remainingTimeMS = this.s.timeoutContext?.getRemainingTimeMSOrThrow();
      await this.s.cursor?.close({ timeoutMS: remainingTimeMS });
    }
  };
  _GridFSBucketReadStream.FILE = "file";
  let GridFSBucketReadStream = _GridFSBucketReadStream;
  download.GridFSBucketReadStream = GridFSBucketReadStream;
  function throwIfInitialized(stream) {
    if (stream.s.init) {
      throw new error_1.MongoGridFSStreamError("Options cannot be changed after the stream is initialized");
    }
  }
  function doRead(stream) {
    if (stream.destroyed)
      return;
    if (!stream.s.cursor)
      return;
    if (!stream.s.file)
      return;
    const handleReadResult = (doc) => {
      if (stream.destroyed)
        return;
      if (!doc) {
        stream.push(null);
        stream.s.cursor?.close().then(void 0, (error2) => stream.destroy(error2));
        return;
      }
      if (!stream.s.file)
        return;
      const bytesRemaining = stream.s.file.length - stream.s.bytesRead;
      const expectedN = stream.s.expected++;
      const expectedLength = Math.min(stream.s.file.chunkSize, bytesRemaining);
      if (doc.n > expectedN) {
        return stream.destroy(new error_1.MongoGridFSChunkError(`ChunkIsMissing: Got unexpected n: ${doc.n}, expected: ${expectedN}`));
      }
      if (doc.n < expectedN) {
        return stream.destroy(new error_1.MongoGridFSChunkError(`ExtraChunk: Got unexpected n: ${doc.n}, expected: ${expectedN}`));
      }
      let buf = bson_1.ByteUtils.isUint8Array(doc.data) ? doc.data : doc.data.buffer;
      if (buf.byteLength !== expectedLength) {
        if (bytesRemaining <= 0) {
          return stream.destroy(new error_1.MongoGridFSChunkError(`ExtraChunk: Got unexpected n: ${doc.n}, expected file length ${stream.s.file.length} bytes but already read ${stream.s.bytesRead} bytes`));
        }
        return stream.destroy(new error_1.MongoGridFSChunkError(`ChunkIsWrongSize: Got unexpected length: ${buf.byteLength}, expected: ${expectedLength}`));
      }
      stream.s.bytesRead += buf.byteLength;
      if (buf.byteLength === 0) {
        return stream.push(null);
      }
      let sliceStart = null;
      let sliceEnd = null;
      if (stream.s.bytesToSkip != null) {
        sliceStart = stream.s.bytesToSkip;
        stream.s.bytesToSkip = 0;
      }
      const atEndOfStream = expectedN === stream.s.expectedEnd - 1;
      const bytesLeftToRead = stream.s.options.end - stream.s.bytesToSkip;
      if (atEndOfStream && stream.s.bytesToTrim != null) {
        sliceEnd = stream.s.file.chunkSize - stream.s.bytesToTrim;
      } else if (stream.s.options.end && bytesLeftToRead < doc.data.byteLength) {
        sliceEnd = bytesLeftToRead;
      }
      if (sliceStart != null || sliceEnd != null) {
        buf = buf.slice(sliceStart || 0, sliceEnd || buf.byteLength);
      }
      stream.push(buf);
      return;
    };
    stream.s.cursor.next().then(handleReadResult, (error2) => {
      if (stream.destroyed)
        return;
      stream.destroy(error2);
    });
  }
  function init(stream) {
    const findOneOptions = {};
    if (stream.s.readPreference) {
      findOneOptions.readPreference = stream.s.readPreference;
    }
    if (stream.s.options && stream.s.options.sort) {
      findOneOptions.sort = stream.s.options.sort;
    }
    if (stream.s.options && stream.s.options.skip) {
      findOneOptions.skip = stream.s.options.skip;
    }
    const handleReadResult = (doc) => {
      if (stream.destroyed)
        return;
      if (!doc) {
        const identifier = stream.s.filter._id ? stream.s.filter._id.toString() : stream.s.filter.filename;
        const errmsg = `FileNotFound: file ${identifier} was not found`;
        const err = new error_1.MongoRuntimeError(errmsg);
        err.code = "ENOENT";
        return stream.destroy(err);
      }
      if (doc.length <= 0) {
        stream.push(null);
        return;
      }
      if (stream.destroyed) {
        stream.destroy();
        return;
      }
      try {
        stream.s.bytesToSkip = handleStartOption(stream, doc, stream.s.options);
      } catch (error2) {
        return stream.destroy(error2);
      }
      const filter = { files_id: doc._id };
      if (stream.s.options && stream.s.options.start != null) {
        const skip = Math.floor(stream.s.options.start / doc.chunkSize);
        if (skip > 0) {
          filter["n"] = { $gte: skip };
        }
      }
      let remainingTimeMS2;
      try {
        remainingTimeMS2 = stream.s.timeoutContext?.getRemainingTimeMSOrThrow(`Download timed out after ${stream.s.timeoutContext?.timeoutMS}ms`);
      } catch (error2) {
        return stream.destroy(error2);
      }
      stream.s.cursor = stream.s.chunks.find(filter, {
        timeoutMode: stream.s.options.timeoutMS != null ? abstract_cursor_1.CursorTimeoutMode.LIFETIME : void 0,
        timeoutMS: remainingTimeMS2
      }).sort({ n: 1 });
      if (stream.s.readPreference) {
        stream.s.cursor.withReadPreference(stream.s.readPreference);
      }
      stream.s.expectedEnd = Math.ceil(doc.length / doc.chunkSize);
      stream.s.file = doc;
      try {
        stream.s.bytesToTrim = handleEndOption(stream, doc, stream.s.cursor, stream.s.options);
      } catch (error2) {
        return stream.destroy(error2);
      }
      stream.emit(GridFSBucketReadStream.FILE, doc);
      return;
    };
    let remainingTimeMS;
    try {
      remainingTimeMS = stream.s.timeoutContext?.getRemainingTimeMSOrThrow(`Download timed out after ${stream.s.timeoutContext?.timeoutMS}ms`);
    } catch (error2) {
      if (!stream.destroyed)
        stream.destroy(error2);
      return;
    }
    findOneOptions.timeoutMS = remainingTimeMS;
    stream.s.files.findOne(stream.s.filter, findOneOptions).then(handleReadResult, (error2) => {
      if (stream.destroyed)
        return;
      stream.destroy(error2);
    });
  }
  function waitForFile(stream, callback) {
    if (stream.s.file) {
      return callback();
    }
    if (!stream.s.init) {
      init(stream);
      stream.s.init = true;
    }
    stream.once("file", () => {
      callback();
    });
  }
  function handleStartOption(stream, doc, options) {
    if (options && options.start != null) {
      if (options.start > doc.length) {
        throw new error_1.MongoInvalidArgumentError(`Stream start (${options.start}) must not be more than the length of the file (${doc.length})`);
      }
      if (options.start < 0) {
        throw new error_1.MongoInvalidArgumentError(`Stream start (${options.start}) must not be negative`);
      }
      if (options.end != null && options.end < options.start) {
        throw new error_1.MongoInvalidArgumentError(`Stream start (${options.start}) must not be greater than stream end (${options.end})`);
      }
      stream.s.bytesRead = Math.floor(options.start / doc.chunkSize) * doc.chunkSize;
      stream.s.expected = Math.floor(options.start / doc.chunkSize);
      return options.start - stream.s.bytesRead;
    }
    throw new error_1.MongoInvalidArgumentError("Start option must be defined");
  }
  function handleEndOption(stream, doc, cursor, options) {
    if (options && options.end != null) {
      if (options.end > doc.length) {
        throw new error_1.MongoInvalidArgumentError(`Stream end (${options.end}) must not be more than the length of the file (${doc.length})`);
      }
      if (options.start == null || options.start < 0) {
        throw new error_1.MongoInvalidArgumentError(`Stream end (${options.end}) must not be negative`);
      }
      const start = options.start != null ? Math.floor(options.start / doc.chunkSize) : 0;
      cursor.limit(Math.ceil(options.end / doc.chunkSize) - start);
      stream.s.expectedEnd = Math.ceil(options.end / doc.chunkSize);
      return Math.ceil(options.end / doc.chunkSize) * doc.chunkSize - options.end;
    }
    throw new error_1.MongoInvalidArgumentError("End option must be defined");
  }
  return download;
}
var upload = {};
var hasRequiredUpload;
function requireUpload() {
  if (hasRequiredUpload) return upload;
  hasRequiredUpload = 1;
  Object.defineProperty(upload, "__esModule", { value: true });
  upload.GridFSBucketWriteStream = void 0;
  const stream_1 = require$$0$5;
  const bson_1 = requireBson();
  const abstract_cursor_1 = requireAbstract_cursor();
  const error_1 = requireError();
  const timeout_1 = requireTimeout();
  const utils_1 = requireUtils();
  const write_concern_1 = requireWrite_concern();
  class GridFSBucketWriteStream extends stream_1.Writable {
    /**
     * @param bucket - Handle for this stream's corresponding bucket
     * @param filename - The value of the 'filename' key in the files doc
     * @param options - Optional settings.
     * @internal
     */
    constructor(bucket, filename, options) {
      super();
      this.gridFSFile = null;
      options = options ?? {};
      this.bucket = bucket;
      this.chunks = bucket.s._chunksCollection;
      this.filename = filename;
      this.files = bucket.s._filesCollection;
      this.options = options;
      this.writeConcern = write_concern_1.WriteConcern.fromOptions(options) || bucket.s.options.writeConcern;
      this.done = false;
      this.id = options.id ? options.id : new bson_1.ObjectId();
      this.chunkSizeBytes = options.chunkSizeBytes || this.bucket.s.options.chunkSizeBytes;
      this.bufToStore = bson_1.ByteUtils.allocate(this.chunkSizeBytes);
      this.length = 0;
      this.n = 0;
      this.pos = 0;
      this.state = {
        streamEnd: false,
        outstandingRequests: 0,
        errored: false,
        aborted: false
      };
      if (options.timeoutMS != null)
        this.timeoutContext = new timeout_1.CSOTTimeoutContext({
          timeoutMS: options.timeoutMS,
          serverSelectionTimeoutMS: (0, utils_1.resolveTimeoutOptions)(this.bucket.s.db.client, {}).serverSelectionTimeoutMS
        });
    }
    /**
     * @internal
     *
     * The stream is considered constructed when the indexes are done being created
     */
    _construct(callback) {
      if (!this.bucket.s.calledOpenUploadStream) {
        this.bucket.s.calledOpenUploadStream = true;
        checkIndexes(this).then(() => {
          this.bucket.s.checkedIndexes = true;
          this.bucket.emit("index");
          callback();
        }, (error2) => {
          if (error2 instanceof error_1.MongoOperationTimeoutError) {
            return handleError(this, error2, callback);
          }
          (0, utils_1.squashError)(error2);
          callback();
        });
      } else {
        return queueMicrotask(callback);
      }
    }
    /**
     * @internal
     * Write a buffer to the stream.
     *
     * @param chunk - Buffer to write
     * @param encoding - Optional encoding for the buffer
     * @param callback - Function to call when the chunk was added to the buffer, or if the entire chunk was persisted to MongoDB if this chunk caused a flush.
     */
    _write(chunk, encoding, callback) {
      doWrite(this, chunk, encoding, callback);
    }
    /** @internal */
    _final(callback) {
      if (this.state.streamEnd) {
        return queueMicrotask(callback);
      }
      this.state.streamEnd = true;
      writeRemnant(this, callback);
    }
    /**
     * Places this write stream into an aborted state (all future writes fail)
     * and deletes all chunks that have already been written.
     */
    async abort() {
      if (this.state.streamEnd) {
        throw new error_1.MongoAPIError("Cannot abort a stream that has already completed");
      }
      if (this.state.aborted) {
        throw new error_1.MongoAPIError("Cannot call abort() on a stream twice");
      }
      this.state.aborted = true;
      const remainingTimeMS = this.timeoutContext?.getRemainingTimeMSOrThrow(`Upload timed out after ${this.timeoutContext?.timeoutMS}ms`);
      await this.chunks.deleteMany({ files_id: this.id }, { timeoutMS: remainingTimeMS });
    }
  }
  upload.GridFSBucketWriteStream = GridFSBucketWriteStream;
  function handleError(stream, error2, callback) {
    if (stream.state.errored) {
      queueMicrotask(callback);
      return;
    }
    stream.state.errored = true;
    queueMicrotask(() => callback(error2));
  }
  function createChunkDoc(filesId, n, data) {
    return {
      _id: new bson_1.ObjectId(),
      files_id: filesId,
      n,
      data
    };
  }
  async function checkChunksIndex(stream) {
    const index = { files_id: 1, n: 1 };
    let remainingTimeMS;
    remainingTimeMS = stream.timeoutContext?.getRemainingTimeMSOrThrow(`Upload timed out after ${stream.timeoutContext?.timeoutMS}ms`);
    let indexes2;
    try {
      indexes2 = await stream.chunks.listIndexes({
        timeoutMode: remainingTimeMS != null ? abstract_cursor_1.CursorTimeoutMode.LIFETIME : void 0,
        timeoutMS: remainingTimeMS
      }).toArray();
    } catch (error2) {
      if (error2 instanceof error_1.MongoError && error2.code === error_1.MONGODB_ERROR_CODES.NamespaceNotFound) {
        indexes2 = [];
      } else {
        throw error2;
      }
    }
    const hasChunksIndex = !!indexes2.find((index2) => {
      const keys = Object.keys(index2.key);
      if (keys.length === 2 && index2.key.files_id === 1 && index2.key.n === 1) {
        return true;
      }
      return false;
    });
    if (!hasChunksIndex) {
      remainingTimeMS = stream.timeoutContext?.getRemainingTimeMSOrThrow(`Upload timed out after ${stream.timeoutContext?.timeoutMS}ms`);
      await stream.chunks.createIndex(index, {
        ...stream.writeConcern,
        background: true,
        unique: true,
        timeoutMS: remainingTimeMS
      });
    }
  }
  function checkDone(stream, callback) {
    if (stream.done) {
      return queueMicrotask(callback);
    }
    if (stream.state.streamEnd && stream.state.outstandingRequests === 0 && !stream.state.errored) {
      stream.done = true;
      const gridFSFile = createFilesDoc(stream.id, stream.length, stream.chunkSizeBytes, stream.filename, stream.options.metadata);
      if (isAborted(stream, callback)) {
        return;
      }
      const remainingTimeMS = stream.timeoutContext?.remainingTimeMS;
      if (remainingTimeMS != null && remainingTimeMS <= 0) {
        return handleError(stream, new error_1.MongoOperationTimeoutError(`Upload timed out after ${stream.timeoutContext?.timeoutMS}ms`), callback);
      }
      stream.files.insertOne(gridFSFile, { writeConcern: stream.writeConcern, timeoutMS: remainingTimeMS }).then(() => {
        stream.gridFSFile = gridFSFile;
        callback();
      }, (error2) => {
        return handleError(stream, error2, callback);
      });
      return;
    }
    queueMicrotask(callback);
  }
  async function checkIndexes(stream) {
    let remainingTimeMS = stream.timeoutContext?.getRemainingTimeMSOrThrow(`Upload timed out after ${stream.timeoutContext?.timeoutMS}ms`);
    const doc = await stream.files.findOne({}, {
      projection: { _id: 1 },
      timeoutMS: remainingTimeMS
    });
    if (doc != null) {
      return;
    }
    const index = { filename: 1, uploadDate: 1 };
    let indexes2;
    remainingTimeMS = stream.timeoutContext?.getRemainingTimeMSOrThrow(`Upload timed out after ${stream.timeoutContext?.timeoutMS}ms`);
    const listIndexesOptions = {
      timeoutMode: remainingTimeMS != null ? abstract_cursor_1.CursorTimeoutMode.LIFETIME : void 0,
      timeoutMS: remainingTimeMS
    };
    try {
      indexes2 = await stream.files.listIndexes(listIndexesOptions).toArray();
    } catch (error2) {
      if (error2 instanceof error_1.MongoError && error2.code === error_1.MONGODB_ERROR_CODES.NamespaceNotFound) {
        indexes2 = [];
      } else {
        throw error2;
      }
    }
    const hasFileIndex = !!indexes2.find((index2) => {
      const keys = Object.keys(index2.key);
      if (keys.length === 2 && index2.key.filename === 1 && index2.key.uploadDate === 1) {
        return true;
      }
      return false;
    });
    if (!hasFileIndex) {
      remainingTimeMS = stream.timeoutContext?.getRemainingTimeMSOrThrow(`Upload timed out after ${stream.timeoutContext?.timeoutMS}ms`);
      await stream.files.createIndex(index, { background: false, timeoutMS: remainingTimeMS });
    }
    await checkChunksIndex(stream);
  }
  function createFilesDoc(_id, length, chunkSize, filename, metadata) {
    const ret = {
      _id,
      length,
      chunkSize,
      uploadDate: /* @__PURE__ */ new Date(),
      filename
    };
    if (metadata) {
      ret.metadata = metadata;
    }
    return ret;
  }
  function doWrite(stream, chunk, encoding, callback) {
    if (isAborted(stream, callback)) {
      return;
    }
    const inputBuf = typeof chunk === "string" ? bson_1.ByteUtils.fromUTF8(chunk) : bson_1.ByteUtils.toLocalBufferType(chunk);
    stream.length += inputBuf.length;
    if (stream.pos + inputBuf.length < stream.chunkSizeBytes) {
      bson_1.ByteUtils.copy(inputBuf, stream.bufToStore, stream.pos);
      stream.pos += inputBuf.length;
      queueMicrotask(callback);
      return;
    }
    let inputBufRemaining = inputBuf.length;
    let spaceRemaining = stream.chunkSizeBytes - stream.pos;
    let numToCopy = Math.min(spaceRemaining, inputBuf.length);
    let outstandingRequests = 0;
    while (inputBufRemaining > 0) {
      const inputBufPos = inputBuf.length - inputBufRemaining;
      bson_1.ByteUtils.copy(inputBuf, stream.bufToStore, stream.pos, inputBufPos, inputBufPos + numToCopy);
      stream.pos += numToCopy;
      spaceRemaining -= numToCopy;
      let doc;
      if (spaceRemaining === 0) {
        doc = createChunkDoc(stream.id, stream.n, new Uint8Array(stream.bufToStore));
        const remainingTimeMS = stream.timeoutContext?.remainingTimeMS;
        if (remainingTimeMS != null && remainingTimeMS <= 0) {
          return handleError(stream, new error_1.MongoOperationTimeoutError(`Upload timed out after ${stream.timeoutContext?.timeoutMS}ms`), callback);
        }
        ++stream.state.outstandingRequests;
        ++outstandingRequests;
        if (isAborted(stream, callback)) {
          return;
        }
        stream.chunks.insertOne(doc, { writeConcern: stream.writeConcern, timeoutMS: remainingTimeMS }).then(() => {
          --stream.state.outstandingRequests;
          --outstandingRequests;
          if (!outstandingRequests) {
            checkDone(stream, callback);
          }
        }, (error2) => {
          return handleError(stream, error2, callback);
        });
        spaceRemaining = stream.chunkSizeBytes;
        stream.pos = 0;
        ++stream.n;
      }
      inputBufRemaining -= numToCopy;
      numToCopy = Math.min(spaceRemaining, inputBufRemaining);
    }
  }
  function writeRemnant(stream, callback) {
    if (stream.pos === 0) {
      return checkDone(stream, callback);
    }
    const remnant = bson_1.ByteUtils.allocate(stream.pos);
    bson_1.ByteUtils.copy(stream.bufToStore, remnant, 0, 0, stream.pos);
    const doc = createChunkDoc(stream.id, stream.n, remnant);
    if (isAborted(stream, callback)) {
      return;
    }
    const remainingTimeMS = stream.timeoutContext?.remainingTimeMS;
    if (remainingTimeMS != null && remainingTimeMS <= 0) {
      return handleError(stream, new error_1.MongoOperationTimeoutError(`Upload timed out after ${stream.timeoutContext?.timeoutMS}ms`), callback);
    }
    ++stream.state.outstandingRequests;
    stream.chunks.insertOne(doc, { writeConcern: stream.writeConcern, timeoutMS: remainingTimeMS }).then(() => {
      --stream.state.outstandingRequests;
      checkDone(stream, callback);
    }, (error2) => {
      return handleError(stream, error2, callback);
    });
  }
  function isAborted(stream, callback) {
    if (stream.state.aborted) {
      queueMicrotask(() => callback(new error_1.MongoAPIError("Stream has been aborted")));
      return true;
    }
    return false;
  }
  return upload;
}
var hasRequiredGridfs;
function requireGridfs() {
  if (hasRequiredGridfs) return gridfs;
  hasRequiredGridfs = 1;
  Object.defineProperty(gridfs, "__esModule", { value: true });
  gridfs.GridFSBucket = void 0;
  const error_1 = requireError();
  const mongo_types_1 = requireMongo_types();
  const timeout_1 = requireTimeout();
  const utils_1 = requireUtils();
  const write_concern_1 = requireWrite_concern();
  const download_1 = requireDownload();
  const upload_1 = requireUpload();
  const DEFAULT_GRIDFS_BUCKET_OPTIONS = {
    bucketName: "fs",
    chunkSizeBytes: 255 * 1024
  };
  const _GridFSBucket = class _GridFSBucket extends mongo_types_1.TypedEventEmitter {
    constructor(db2, options) {
      super();
      this.on("error", utils_1.noop);
      this.setMaxListeners(0);
      const privateOptions = (0, utils_1.resolveOptions)(db2, {
        ...DEFAULT_GRIDFS_BUCKET_OPTIONS,
        ...options,
        writeConcern: write_concern_1.WriteConcern.fromOptions(options)
      });
      this.s = {
        db: db2,
        options: privateOptions,
        _chunksCollection: db2.collection(privateOptions.bucketName + ".chunks"),
        _filesCollection: db2.collection(privateOptions.bucketName + ".files"),
        checkedIndexes: false,
        calledOpenUploadStream: false
      };
    }
    /**
     * Returns a writable stream (GridFSBucketWriteStream) for writing
     * buffers to GridFS. The stream's 'id' property contains the resulting
     * file's id.
     *
     * @param filename - The value of the 'filename' key in the files doc
     * @param options - Optional settings.
     */
    openUploadStream(filename, options) {
      return new upload_1.GridFSBucketWriteStream(this, filename, {
        timeoutMS: this.s.options.timeoutMS,
        ...options
      });
    }
    /**
     * Returns a writable stream (GridFSBucketWriteStream) for writing
     * buffers to GridFS for a custom file id. The stream's 'id' property contains the resulting
     * file's id.
     */
    openUploadStreamWithId(id, filename, options) {
      return new upload_1.GridFSBucketWriteStream(this, filename, {
        timeoutMS: this.s.options.timeoutMS,
        ...options,
        id
      });
    }
    /** Returns a readable stream (GridFSBucketReadStream) for streaming file data from GridFS. */
    openDownloadStream(id, options) {
      return new download_1.GridFSBucketReadStream(this.s._chunksCollection, this.s._filesCollection, this.s.options.readPreference, { _id: id }, { timeoutMS: this.s.options.timeoutMS, ...options });
    }
    /**
     * Deletes a file with the given id
     *
     * @param id - The id of the file doc
     */
    async delete(id, options) {
      const { timeoutMS } = (0, utils_1.resolveOptions)(this.s.db, options);
      let timeoutContext = void 0;
      if (timeoutMS) {
        timeoutContext = new timeout_1.CSOTTimeoutContext({
          timeoutMS,
          serverSelectionTimeoutMS: this.s.db.client.s.options.serverSelectionTimeoutMS
        });
      }
      const { deletedCount } = await this.s._filesCollection.deleteOne({ _id: id }, { timeoutMS: timeoutContext?.remainingTimeMS });
      const remainingTimeMS = timeoutContext?.remainingTimeMS;
      if (remainingTimeMS != null && remainingTimeMS <= 0)
        throw new error_1.MongoOperationTimeoutError(`Timed out after ${timeoutMS}ms`);
      await this.s._chunksCollection.deleteMany({ files_id: id }, { timeoutMS: remainingTimeMS });
      if (deletedCount === 0) {
        throw new error_1.MongoRuntimeError(`File not found for id ${id}`);
      }
    }
    /** Convenience wrapper around find on the files collection */
    find(filter = {}, options = {}) {
      return this.s._filesCollection.find(filter, options);
    }
    /**
     * Returns a readable stream (GridFSBucketReadStream) for streaming the
     * file with the given name from GridFS. If there are multiple files with
     * the same name, this will stream the most recent file with the given name
     * (as determined by the `uploadDate` field). You can set the `revision`
     * option to change this behavior.
     */
    openDownloadStreamByName(filename, options) {
      let sort2 = { uploadDate: -1 };
      let skip = void 0;
      if (options && options.revision != null) {
        if (options.revision >= 0) {
          sort2 = { uploadDate: 1 };
          skip = options.revision;
        } else {
          skip = -options.revision - 1;
        }
      }
      return new download_1.GridFSBucketReadStream(this.s._chunksCollection, this.s._filesCollection, this.s.options.readPreference, { filename }, { timeoutMS: this.s.options.timeoutMS, ...options, sort: sort2, skip });
    }
    /**
     * Renames the file with the given _id to the given string
     *
     * @param id - the id of the file to rename
     * @param filename - new name for the file
     */
    async rename(id, filename, options) {
      const filter = { _id: id };
      const update2 = { $set: { filename } };
      const { matchedCount } = await this.s._filesCollection.updateOne(filter, update2, options);
      if (matchedCount === 0) {
        throw new error_1.MongoRuntimeError(`File with id ${id} not found`);
      }
    }
    /** Removes this bucket's files collection, followed by its chunks collection. */
    async drop(options) {
      const { timeoutMS } = (0, utils_1.resolveOptions)(this.s.db, options);
      let timeoutContext = void 0;
      if (timeoutMS) {
        timeoutContext = new timeout_1.CSOTTimeoutContext({
          timeoutMS,
          serverSelectionTimeoutMS: this.s.db.client.s.options.serverSelectionTimeoutMS
        });
      }
      if (timeoutContext) {
        await this.s._filesCollection.drop({ timeoutMS: timeoutContext.remainingTimeMS });
        const remainingTimeMS = timeoutContext.getRemainingTimeMSOrThrow(`Timed out after ${timeoutMS}ms`);
        await this.s._chunksCollection.drop({ timeoutMS: remainingTimeMS });
      } else {
        await this.s._filesCollection.drop();
        await this.s._chunksCollection.drop();
      }
    }
  };
  _GridFSBucket.INDEX = "index";
  let GridFSBucket = _GridFSBucket;
  gridfs.GridFSBucket = GridFSBucket;
  return gridfs;
}
var hasRequiredLib;
function requireLib() {
  if (hasRequiredLib) return lib;
  hasRequiredLib = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MongoRuntimeError = exports.MongoParseError = exports.MongoOperationTimeoutError = exports.MongoOIDCError = exports.MongoNotConnectedError = exports.MongoNetworkTimeoutError = exports.MongoNetworkError = exports.MongoMissingDependencyError = exports.MongoMissingCredentialsError = exports.MongoKerberosError = exports.MongoInvalidArgumentError = exports.MongoGridFSStreamError = exports.MongoGridFSChunkError = exports.MongoGCPError = exports.MongoExpiredSessionError = exports.MongoError = exports.MongoDriverError = exports.MongoDecompressionError = exports.MongoCursorInUseError = exports.MongoCursorExhaustedError = exports.MongoCompatibilityError = exports.MongoClientClosedError = exports.MongoClientBulkWriteExecutionError = exports.MongoClientBulkWriteError = exports.MongoClientBulkWriteCursorError = exports.MongoChangeStreamError = exports.MongoBatchReExecutionError = exports.MongoAzureError = exports.MongoAWSError = exports.MongoAPIError = exports.ExplainableCursor = exports.ChangeStreamCursor = exports.ClientEncryption = exports.MongoBulkWriteError = exports.UUID = exports.Timestamp = exports.ObjectId = exports.MinKey = exports.MaxKey = exports.Long = exports.Int32 = exports.Double = exports.Decimal128 = exports.DBRef = exports.Code = exports.BSONType = exports.BSONSymbol = exports.BSONRegExp = exports.Binary = exports.BSON = void 0;
    exports.CommandStartedEvent = exports.CommandFailedEvent = exports.WriteConcern = exports.ReadPreference = exports.ReadConcern = exports.TopologyType = exports.ServerType = exports.ReadPreferenceMode = exports.ReadConcernLevel = exports.ProfilingLevel = exports.ReturnDocument = exports.SeverityLevel = exports.MongoLoggableComponent = exports.ServerApiVersion = exports.ExplainVerbosity = exports.MongoErrorLabel = exports.CursorTimeoutMode = exports.CURSOR_FLAGS = exports.Compressor = exports.AuthMechanism = exports.GSSAPICanonicalizationValue = exports.AutoEncryptionLoggerLevel = exports.BatchType = exports.UnorderedBulkOperation = exports.OrderedBulkOperation = exports.MongoClient = exports.ListIndexesCursor = exports.ListCollectionsCursor = exports.GridFSBucketWriteStream = exports.GridFSBucketReadStream = exports.GridFSBucket = exports.FindCursor = exports.Db = exports.Collection = exports.ClientSession = exports.ChangeStream = exports.CancellationToken = exports.AggregationCursor = exports.Admin = exports.AbstractCursor = exports.MongoWriteConcernError = exports.MongoUnexpectedServerResponseError = exports.MongoTransactionError = exports.MongoTopologyClosedError = exports.MongoTailableCursorError = exports.MongoSystemError = exports.MongoStalePrimaryError = exports.MongoServerSelectionError = exports.MongoServerError = exports.MongoServerClosedError = void 0;
    exports.MongoClientAuthProviders = exports.MongoCryptKMSRequestNetworkTimeoutError = exports.MongoCryptInvalidArgumentError = exports.MongoCryptError = exports.MongoCryptCreateEncryptedCollectionError = exports.MongoCryptCreateDataKeyError = exports.MongoCryptAzureKMSRequestError = exports.SrvPollingEvent = exports.WaitingForSuitableServerEvent = exports.ServerSelectionSucceededEvent = exports.ServerSelectionStartedEvent = exports.ServerSelectionFailedEvent = exports.ServerSelectionEvent = exports.TopologyOpeningEvent = exports.TopologyDescriptionChangedEvent = exports.TopologyClosedEvent = exports.ServerOpeningEvent = exports.ServerHeartbeatSucceededEvent = exports.ServerHeartbeatStartedEvent = exports.ServerHeartbeatFailedEvent = exports.ServerDescriptionChangedEvent = exports.ServerClosedEvent = exports.ConnectionReadyEvent = exports.ConnectionPoolReadyEvent = exports.ConnectionPoolMonitoringEvent = exports.ConnectionPoolCreatedEvent = exports.ConnectionPoolClosedEvent = exports.ConnectionPoolClearedEvent = exports.ConnectionCreatedEvent = exports.ConnectionClosedEvent = exports.ConnectionCheckOutStartedEvent = exports.ConnectionCheckOutFailedEvent = exports.ConnectionCheckedOutEvent = exports.ConnectionCheckedInEvent = exports.CommandSucceededEvent = void 0;
    const admin_1 = requireAdmin();
    Object.defineProperty(exports, "Admin", { enumerable: true, get: function() {
      return admin_1.Admin;
    } });
    const ordered_1 = requireOrdered();
    Object.defineProperty(exports, "OrderedBulkOperation", { enumerable: true, get: function() {
      return ordered_1.OrderedBulkOperation;
    } });
    const unordered_1 = requireUnordered();
    Object.defineProperty(exports, "UnorderedBulkOperation", { enumerable: true, get: function() {
      return unordered_1.UnorderedBulkOperation;
    } });
    const change_stream_1 = requireChange_stream();
    Object.defineProperty(exports, "ChangeStream", { enumerable: true, get: function() {
      return change_stream_1.ChangeStream;
    } });
    const collection_1 = requireCollection();
    Object.defineProperty(exports, "Collection", { enumerable: true, get: function() {
      return collection_1.Collection;
    } });
    const abstract_cursor_1 = requireAbstract_cursor();
    Object.defineProperty(exports, "AbstractCursor", { enumerable: true, get: function() {
      return abstract_cursor_1.AbstractCursor;
    } });
    const aggregation_cursor_1 = requireAggregation_cursor();
    Object.defineProperty(exports, "AggregationCursor", { enumerable: true, get: function() {
      return aggregation_cursor_1.AggregationCursor;
    } });
    const find_cursor_1 = requireFind_cursor();
    Object.defineProperty(exports, "FindCursor", { enumerable: true, get: function() {
      return find_cursor_1.FindCursor;
    } });
    const list_collections_cursor_1 = requireList_collections_cursor();
    Object.defineProperty(exports, "ListCollectionsCursor", { enumerable: true, get: function() {
      return list_collections_cursor_1.ListCollectionsCursor;
    } });
    const list_indexes_cursor_1 = requireList_indexes_cursor();
    Object.defineProperty(exports, "ListIndexesCursor", { enumerable: true, get: function() {
      return list_indexes_cursor_1.ListIndexesCursor;
    } });
    const db_1 = requireDb();
    Object.defineProperty(exports, "Db", { enumerable: true, get: function() {
      return db_1.Db;
    } });
    const gridfs_1 = requireGridfs();
    Object.defineProperty(exports, "GridFSBucket", { enumerable: true, get: function() {
      return gridfs_1.GridFSBucket;
    } });
    const download_1 = requireDownload();
    Object.defineProperty(exports, "GridFSBucketReadStream", { enumerable: true, get: function() {
      return download_1.GridFSBucketReadStream;
    } });
    const upload_1 = requireUpload();
    Object.defineProperty(exports, "GridFSBucketWriteStream", { enumerable: true, get: function() {
      return upload_1.GridFSBucketWriteStream;
    } });
    const mongo_client_1 = requireMongo_client();
    Object.defineProperty(exports, "MongoClient", { enumerable: true, get: function() {
      return mongo_client_1.MongoClient;
    } });
    const mongo_types_1 = requireMongo_types();
    Object.defineProperty(exports, "CancellationToken", { enumerable: true, get: function() {
      return mongo_types_1.CancellationToken;
    } });
    const sessions_1 = requireSessions();
    Object.defineProperty(exports, "ClientSession", { enumerable: true, get: function() {
      return sessions_1.ClientSession;
    } });
    var bson_1 = requireBson();
    Object.defineProperty(exports, "BSON", { enumerable: true, get: function() {
      return bson_1.BSON;
    } });
    var bson_2 = requireBson();
    Object.defineProperty(exports, "Binary", { enumerable: true, get: function() {
      return bson_2.Binary;
    } });
    Object.defineProperty(exports, "BSONRegExp", { enumerable: true, get: function() {
      return bson_2.BSONRegExp;
    } });
    Object.defineProperty(exports, "BSONSymbol", { enumerable: true, get: function() {
      return bson_2.BSONSymbol;
    } });
    Object.defineProperty(exports, "BSONType", { enumerable: true, get: function() {
      return bson_2.BSONType;
    } });
    Object.defineProperty(exports, "Code", { enumerable: true, get: function() {
      return bson_2.Code;
    } });
    Object.defineProperty(exports, "DBRef", { enumerable: true, get: function() {
      return bson_2.DBRef;
    } });
    Object.defineProperty(exports, "Decimal128", { enumerable: true, get: function() {
      return bson_2.Decimal128;
    } });
    Object.defineProperty(exports, "Double", { enumerable: true, get: function() {
      return bson_2.Double;
    } });
    Object.defineProperty(exports, "Int32", { enumerable: true, get: function() {
      return bson_2.Int32;
    } });
    Object.defineProperty(exports, "Long", { enumerable: true, get: function() {
      return bson_2.Long;
    } });
    Object.defineProperty(exports, "MaxKey", { enumerable: true, get: function() {
      return bson_2.MaxKey;
    } });
    Object.defineProperty(exports, "MinKey", { enumerable: true, get: function() {
      return bson_2.MinKey;
    } });
    Object.defineProperty(exports, "ObjectId", { enumerable: true, get: function() {
      return bson_2.ObjectId;
    } });
    Object.defineProperty(exports, "Timestamp", { enumerable: true, get: function() {
      return bson_2.Timestamp;
    } });
    Object.defineProperty(exports, "UUID", { enumerable: true, get: function() {
      return bson_2.UUID;
    } });
    var common_1 = requireCommon();
    Object.defineProperty(exports, "MongoBulkWriteError", { enumerable: true, get: function() {
      return common_1.MongoBulkWriteError;
    } });
    var client_encryption_1 = requireClient_encryption();
    Object.defineProperty(exports, "ClientEncryption", { enumerable: true, get: function() {
      return client_encryption_1.ClientEncryption;
    } });
    var change_stream_cursor_1 = requireChange_stream_cursor();
    Object.defineProperty(exports, "ChangeStreamCursor", { enumerable: true, get: function() {
      return change_stream_cursor_1.ChangeStreamCursor;
    } });
    var explainable_cursor_1 = requireExplainable_cursor();
    Object.defineProperty(exports, "ExplainableCursor", { enumerable: true, get: function() {
      return explainable_cursor_1.ExplainableCursor;
    } });
    var error_1 = requireError();
    Object.defineProperty(exports, "MongoAPIError", { enumerable: true, get: function() {
      return error_1.MongoAPIError;
    } });
    Object.defineProperty(exports, "MongoAWSError", { enumerable: true, get: function() {
      return error_1.MongoAWSError;
    } });
    Object.defineProperty(exports, "MongoAzureError", { enumerable: true, get: function() {
      return error_1.MongoAzureError;
    } });
    Object.defineProperty(exports, "MongoBatchReExecutionError", { enumerable: true, get: function() {
      return error_1.MongoBatchReExecutionError;
    } });
    Object.defineProperty(exports, "MongoChangeStreamError", { enumerable: true, get: function() {
      return error_1.MongoChangeStreamError;
    } });
    Object.defineProperty(exports, "MongoClientBulkWriteCursorError", { enumerable: true, get: function() {
      return error_1.MongoClientBulkWriteCursorError;
    } });
    Object.defineProperty(exports, "MongoClientBulkWriteError", { enumerable: true, get: function() {
      return error_1.MongoClientBulkWriteError;
    } });
    Object.defineProperty(exports, "MongoClientBulkWriteExecutionError", { enumerable: true, get: function() {
      return error_1.MongoClientBulkWriteExecutionError;
    } });
    Object.defineProperty(exports, "MongoClientClosedError", { enumerable: true, get: function() {
      return error_1.MongoClientClosedError;
    } });
    Object.defineProperty(exports, "MongoCompatibilityError", { enumerable: true, get: function() {
      return error_1.MongoCompatibilityError;
    } });
    Object.defineProperty(exports, "MongoCursorExhaustedError", { enumerable: true, get: function() {
      return error_1.MongoCursorExhaustedError;
    } });
    Object.defineProperty(exports, "MongoCursorInUseError", { enumerable: true, get: function() {
      return error_1.MongoCursorInUseError;
    } });
    Object.defineProperty(exports, "MongoDecompressionError", { enumerable: true, get: function() {
      return error_1.MongoDecompressionError;
    } });
    Object.defineProperty(exports, "MongoDriverError", { enumerable: true, get: function() {
      return error_1.MongoDriverError;
    } });
    Object.defineProperty(exports, "MongoError", { enumerable: true, get: function() {
      return error_1.MongoError;
    } });
    Object.defineProperty(exports, "MongoExpiredSessionError", { enumerable: true, get: function() {
      return error_1.MongoExpiredSessionError;
    } });
    Object.defineProperty(exports, "MongoGCPError", { enumerable: true, get: function() {
      return error_1.MongoGCPError;
    } });
    Object.defineProperty(exports, "MongoGridFSChunkError", { enumerable: true, get: function() {
      return error_1.MongoGridFSChunkError;
    } });
    Object.defineProperty(exports, "MongoGridFSStreamError", { enumerable: true, get: function() {
      return error_1.MongoGridFSStreamError;
    } });
    Object.defineProperty(exports, "MongoInvalidArgumentError", { enumerable: true, get: function() {
      return error_1.MongoInvalidArgumentError;
    } });
    Object.defineProperty(exports, "MongoKerberosError", { enumerable: true, get: function() {
      return error_1.MongoKerberosError;
    } });
    Object.defineProperty(exports, "MongoMissingCredentialsError", { enumerable: true, get: function() {
      return error_1.MongoMissingCredentialsError;
    } });
    Object.defineProperty(exports, "MongoMissingDependencyError", { enumerable: true, get: function() {
      return error_1.MongoMissingDependencyError;
    } });
    Object.defineProperty(exports, "MongoNetworkError", { enumerable: true, get: function() {
      return error_1.MongoNetworkError;
    } });
    Object.defineProperty(exports, "MongoNetworkTimeoutError", { enumerable: true, get: function() {
      return error_1.MongoNetworkTimeoutError;
    } });
    Object.defineProperty(exports, "MongoNotConnectedError", { enumerable: true, get: function() {
      return error_1.MongoNotConnectedError;
    } });
    Object.defineProperty(exports, "MongoOIDCError", { enumerable: true, get: function() {
      return error_1.MongoOIDCError;
    } });
    Object.defineProperty(exports, "MongoOperationTimeoutError", { enumerable: true, get: function() {
      return error_1.MongoOperationTimeoutError;
    } });
    Object.defineProperty(exports, "MongoParseError", { enumerable: true, get: function() {
      return error_1.MongoParseError;
    } });
    Object.defineProperty(exports, "MongoRuntimeError", { enumerable: true, get: function() {
      return error_1.MongoRuntimeError;
    } });
    Object.defineProperty(exports, "MongoServerClosedError", { enumerable: true, get: function() {
      return error_1.MongoServerClosedError;
    } });
    Object.defineProperty(exports, "MongoServerError", { enumerable: true, get: function() {
      return error_1.MongoServerError;
    } });
    Object.defineProperty(exports, "MongoServerSelectionError", { enumerable: true, get: function() {
      return error_1.MongoServerSelectionError;
    } });
    Object.defineProperty(exports, "MongoStalePrimaryError", { enumerable: true, get: function() {
      return error_1.MongoStalePrimaryError;
    } });
    Object.defineProperty(exports, "MongoSystemError", { enumerable: true, get: function() {
      return error_1.MongoSystemError;
    } });
    Object.defineProperty(exports, "MongoTailableCursorError", { enumerable: true, get: function() {
      return error_1.MongoTailableCursorError;
    } });
    Object.defineProperty(exports, "MongoTopologyClosedError", { enumerable: true, get: function() {
      return error_1.MongoTopologyClosedError;
    } });
    Object.defineProperty(exports, "MongoTransactionError", { enumerable: true, get: function() {
      return error_1.MongoTransactionError;
    } });
    Object.defineProperty(exports, "MongoUnexpectedServerResponseError", { enumerable: true, get: function() {
      return error_1.MongoUnexpectedServerResponseError;
    } });
    Object.defineProperty(exports, "MongoWriteConcernError", { enumerable: true, get: function() {
      return error_1.MongoWriteConcernError;
    } });
    var common_2 = requireCommon();
    Object.defineProperty(exports, "BatchType", { enumerable: true, get: function() {
      return common_2.BatchType;
    } });
    var auto_encrypter_1 = requireAuto_encrypter();
    Object.defineProperty(exports, "AutoEncryptionLoggerLevel", { enumerable: true, get: function() {
      return auto_encrypter_1.AutoEncryptionLoggerLevel;
    } });
    var gssapi_1 = requireGssapi();
    Object.defineProperty(exports, "GSSAPICanonicalizationValue", { enumerable: true, get: function() {
      return gssapi_1.GSSAPICanonicalizationValue;
    } });
    var providers_1 = requireProviders$1();
    Object.defineProperty(exports, "AuthMechanism", { enumerable: true, get: function() {
      return providers_1.AuthMechanism;
    } });
    var compression_1 = requireCompression();
    Object.defineProperty(exports, "Compressor", { enumerable: true, get: function() {
      return compression_1.Compressor;
    } });
    var abstract_cursor_2 = requireAbstract_cursor();
    Object.defineProperty(exports, "CURSOR_FLAGS", { enumerable: true, get: function() {
      return abstract_cursor_2.CURSOR_FLAGS;
    } });
    Object.defineProperty(exports, "CursorTimeoutMode", { enumerable: true, get: function() {
      return abstract_cursor_2.CursorTimeoutMode;
    } });
    var error_2 = requireError();
    Object.defineProperty(exports, "MongoErrorLabel", { enumerable: true, get: function() {
      return error_2.MongoErrorLabel;
    } });
    var explain_1 = requireExplain();
    Object.defineProperty(exports, "ExplainVerbosity", { enumerable: true, get: function() {
      return explain_1.ExplainVerbosity;
    } });
    var mongo_client_2 = requireMongo_client();
    Object.defineProperty(exports, "ServerApiVersion", { enumerable: true, get: function() {
      return mongo_client_2.ServerApiVersion;
    } });
    var mongo_logger_1 = requireMongo_logger();
    Object.defineProperty(exports, "MongoLoggableComponent", { enumerable: true, get: function() {
      return mongo_logger_1.MongoLoggableComponent;
    } });
    Object.defineProperty(exports, "SeverityLevel", { enumerable: true, get: function() {
      return mongo_logger_1.SeverityLevel;
    } });
    var find_and_modify_1 = requireFind_and_modify();
    Object.defineProperty(exports, "ReturnDocument", { enumerable: true, get: function() {
      return find_and_modify_1.ReturnDocument;
    } });
    var set_profiling_level_1 = requireSet_profiling_level();
    Object.defineProperty(exports, "ProfilingLevel", { enumerable: true, get: function() {
      return set_profiling_level_1.ProfilingLevel;
    } });
    var read_concern_1 = requireRead_concern();
    Object.defineProperty(exports, "ReadConcernLevel", { enumerable: true, get: function() {
      return read_concern_1.ReadConcernLevel;
    } });
    var read_preference_1 = requireRead_preference();
    Object.defineProperty(exports, "ReadPreferenceMode", { enumerable: true, get: function() {
      return read_preference_1.ReadPreferenceMode;
    } });
    var common_3 = requireCommon$1();
    Object.defineProperty(exports, "ServerType", { enumerable: true, get: function() {
      return common_3.ServerType;
    } });
    Object.defineProperty(exports, "TopologyType", { enumerable: true, get: function() {
      return common_3.TopologyType;
    } });
    var read_concern_2 = requireRead_concern();
    Object.defineProperty(exports, "ReadConcern", { enumerable: true, get: function() {
      return read_concern_2.ReadConcern;
    } });
    var read_preference_2 = requireRead_preference();
    Object.defineProperty(exports, "ReadPreference", { enumerable: true, get: function() {
      return read_preference_2.ReadPreference;
    } });
    var write_concern_1 = requireWrite_concern();
    Object.defineProperty(exports, "WriteConcern", { enumerable: true, get: function() {
      return write_concern_1.WriteConcern;
    } });
    var command_monitoring_events_1 = requireCommand_monitoring_events();
    Object.defineProperty(exports, "CommandFailedEvent", { enumerable: true, get: function() {
      return command_monitoring_events_1.CommandFailedEvent;
    } });
    Object.defineProperty(exports, "CommandStartedEvent", { enumerable: true, get: function() {
      return command_monitoring_events_1.CommandStartedEvent;
    } });
    Object.defineProperty(exports, "CommandSucceededEvent", { enumerable: true, get: function() {
      return command_monitoring_events_1.CommandSucceededEvent;
    } });
    var connection_pool_events_1 = requireConnection_pool_events();
    Object.defineProperty(exports, "ConnectionCheckedInEvent", { enumerable: true, get: function() {
      return connection_pool_events_1.ConnectionCheckedInEvent;
    } });
    Object.defineProperty(exports, "ConnectionCheckedOutEvent", { enumerable: true, get: function() {
      return connection_pool_events_1.ConnectionCheckedOutEvent;
    } });
    Object.defineProperty(exports, "ConnectionCheckOutFailedEvent", { enumerable: true, get: function() {
      return connection_pool_events_1.ConnectionCheckOutFailedEvent;
    } });
    Object.defineProperty(exports, "ConnectionCheckOutStartedEvent", { enumerable: true, get: function() {
      return connection_pool_events_1.ConnectionCheckOutStartedEvent;
    } });
    Object.defineProperty(exports, "ConnectionClosedEvent", { enumerable: true, get: function() {
      return connection_pool_events_1.ConnectionClosedEvent;
    } });
    Object.defineProperty(exports, "ConnectionCreatedEvent", { enumerable: true, get: function() {
      return connection_pool_events_1.ConnectionCreatedEvent;
    } });
    Object.defineProperty(exports, "ConnectionPoolClearedEvent", { enumerable: true, get: function() {
      return connection_pool_events_1.ConnectionPoolClearedEvent;
    } });
    Object.defineProperty(exports, "ConnectionPoolClosedEvent", { enumerable: true, get: function() {
      return connection_pool_events_1.ConnectionPoolClosedEvent;
    } });
    Object.defineProperty(exports, "ConnectionPoolCreatedEvent", { enumerable: true, get: function() {
      return connection_pool_events_1.ConnectionPoolCreatedEvent;
    } });
    Object.defineProperty(exports, "ConnectionPoolMonitoringEvent", { enumerable: true, get: function() {
      return connection_pool_events_1.ConnectionPoolMonitoringEvent;
    } });
    Object.defineProperty(exports, "ConnectionPoolReadyEvent", { enumerable: true, get: function() {
      return connection_pool_events_1.ConnectionPoolReadyEvent;
    } });
    Object.defineProperty(exports, "ConnectionReadyEvent", { enumerable: true, get: function() {
      return connection_pool_events_1.ConnectionReadyEvent;
    } });
    var events_1 = requireEvents();
    Object.defineProperty(exports, "ServerClosedEvent", { enumerable: true, get: function() {
      return events_1.ServerClosedEvent;
    } });
    Object.defineProperty(exports, "ServerDescriptionChangedEvent", { enumerable: true, get: function() {
      return events_1.ServerDescriptionChangedEvent;
    } });
    Object.defineProperty(exports, "ServerHeartbeatFailedEvent", { enumerable: true, get: function() {
      return events_1.ServerHeartbeatFailedEvent;
    } });
    Object.defineProperty(exports, "ServerHeartbeatStartedEvent", { enumerable: true, get: function() {
      return events_1.ServerHeartbeatStartedEvent;
    } });
    Object.defineProperty(exports, "ServerHeartbeatSucceededEvent", { enumerable: true, get: function() {
      return events_1.ServerHeartbeatSucceededEvent;
    } });
    Object.defineProperty(exports, "ServerOpeningEvent", { enumerable: true, get: function() {
      return events_1.ServerOpeningEvent;
    } });
    Object.defineProperty(exports, "TopologyClosedEvent", { enumerable: true, get: function() {
      return events_1.TopologyClosedEvent;
    } });
    Object.defineProperty(exports, "TopologyDescriptionChangedEvent", { enumerable: true, get: function() {
      return events_1.TopologyDescriptionChangedEvent;
    } });
    Object.defineProperty(exports, "TopologyOpeningEvent", { enumerable: true, get: function() {
      return events_1.TopologyOpeningEvent;
    } });
    var server_selection_events_1 = requireServer_selection_events();
    Object.defineProperty(exports, "ServerSelectionEvent", { enumerable: true, get: function() {
      return server_selection_events_1.ServerSelectionEvent;
    } });
    Object.defineProperty(exports, "ServerSelectionFailedEvent", { enumerable: true, get: function() {
      return server_selection_events_1.ServerSelectionFailedEvent;
    } });
    Object.defineProperty(exports, "ServerSelectionStartedEvent", { enumerable: true, get: function() {
      return server_selection_events_1.ServerSelectionStartedEvent;
    } });
    Object.defineProperty(exports, "ServerSelectionSucceededEvent", { enumerable: true, get: function() {
      return server_selection_events_1.ServerSelectionSucceededEvent;
    } });
    Object.defineProperty(exports, "WaitingForSuitableServerEvent", { enumerable: true, get: function() {
      return server_selection_events_1.WaitingForSuitableServerEvent;
    } });
    var srv_polling_1 = requireSrv_polling();
    Object.defineProperty(exports, "SrvPollingEvent", { enumerable: true, get: function() {
      return srv_polling_1.SrvPollingEvent;
    } });
    var errors_1 = requireErrors$1();
    Object.defineProperty(exports, "MongoCryptAzureKMSRequestError", { enumerable: true, get: function() {
      return errors_1.MongoCryptAzureKMSRequestError;
    } });
    Object.defineProperty(exports, "MongoCryptCreateDataKeyError", { enumerable: true, get: function() {
      return errors_1.MongoCryptCreateDataKeyError;
    } });
    Object.defineProperty(exports, "MongoCryptCreateEncryptedCollectionError", { enumerable: true, get: function() {
      return errors_1.MongoCryptCreateEncryptedCollectionError;
    } });
    Object.defineProperty(exports, "MongoCryptError", { enumerable: true, get: function() {
      return errors_1.MongoCryptError;
    } });
    Object.defineProperty(exports, "MongoCryptInvalidArgumentError", { enumerable: true, get: function() {
      return errors_1.MongoCryptInvalidArgumentError;
    } });
    Object.defineProperty(exports, "MongoCryptKMSRequestNetworkTimeoutError", { enumerable: true, get: function() {
      return errors_1.MongoCryptKMSRequestNetworkTimeoutError;
    } });
    var mongo_client_auth_providers_1 = requireMongo_client_auth_providers();
    Object.defineProperty(exports, "MongoClientAuthProviders", { enumerable: true, get: function() {
      return mongo_client_auth_providers_1.MongoClientAuthProviders;
    } });
  })(lib);
  return lib;
}
export {
  requireBson as a,
  requireLib as b,
  requireCommon as r
};
