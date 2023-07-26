import * as y from "react";
import de, { useState as Gt, useRef as je, useContext as Ne, createContext as nr, useLayoutEffect as Ea, useEffect as Ue, forwardRef as Oo, useMemo as Ca, Children as el, createRef as tl, useCallback as rl, useDebugValue as oi, createElement as nl } from "react";
import { jsxs as xa, jsx as Ee, Fragment as To } from "react/jsx-runtime";
import * as ol from "react-dom";
import il, { createPortal as wa } from "react-dom";
import al from "react-smooth-scrollbar";
function _a(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: sl } = Object.prototype, { getPrototypeOf: Ao } = Object, Kr = ((e) => (t) => {
  const r = sl.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Xe = (e) => (e = e.toLowerCase(), (t) => Kr(t) === e), qr = (e) => (t) => typeof t === e, { isArray: $t } = Array, Yt = qr("undefined");
function cl(e) {
  return e !== null && !Yt(e) && e.constructor !== null && !Yt(e.constructor) && Fe(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Oa = Xe("ArrayBuffer");
function ll(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Oa(e.buffer), t;
}
const ul = qr("string"), Fe = qr("function"), Ta = qr("number"), Xr = (e) => e !== null && typeof e == "object", fl = (e) => e === !0 || e === !1, _r = (e) => {
  if (Kr(e) !== "object")
    return !1;
  const t = Ao(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, dl = Xe("Date"), pl = Xe("File"), hl = Xe("Blob"), ml = Xe("FileList"), gl = (e) => Xr(e) && Fe(e.pipe), vl = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || Fe(e.append) && ((t = Kr(e)) === "formdata" || // detect form-data instance
  t === "object" && Fe(e.toString) && e.toString() === "[object FormData]"));
}, yl = Xe("URLSearchParams"), bl = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function or(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, o;
  if (typeof e != "object" && (e = [e]), $t(e))
    for (n = 0, o = e.length; n < o; n++)
      t.call(null, e[n], n, e);
  else {
    const i = r ? Object.getOwnPropertyNames(e) : Object.keys(e), a = i.length;
    let s;
    for (n = 0; n < a; n++)
      s = i[n], t.call(null, e[s], s, e);
  }
}
function Aa(e, t) {
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length, o;
  for (; n-- > 0; )
    if (o = r[n], t === o.toLowerCase())
      return o;
  return null;
}
const Ra = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), Pa = (e) => !Yt(e) && e !== Ra;
function jn() {
  const { caseless: e } = Pa(this) && this || {}, t = {}, r = (n, o) => {
    const i = e && Aa(t, o) || o;
    _r(t[i]) && _r(n) ? t[i] = jn(t[i], n) : _r(n) ? t[i] = jn({}, n) : $t(n) ? t[i] = n.slice() : t[i] = n;
  };
  for (let n = 0, o = arguments.length; n < o; n++)
    arguments[n] && or(arguments[n], r);
  return t;
}
const Sl = (e, t, r, { allOwnKeys: n } = {}) => (or(t, (o, i) => {
  r && Fe(o) ? e[i] = _a(o, r) : e[i] = o;
}, { allOwnKeys: n }), e), El = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Cl = (e, t, r, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, xl = (e, t, r, n) => {
  let o, i, a;
  const s = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
      a = o[i], (!n || n(a, e, t)) && !s[a] && (t[a] = e[a], s[a] = !0);
    e = r !== !1 && Ao(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, wl = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, _l = (e) => {
  if (!e)
    return null;
  if ($t(e))
    return e;
  let t = e.length;
  if (!Ta(t))
    return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, Ol = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Ao(Uint8Array)), Tl = (e, t) => {
  const n = (e && e[Symbol.iterator]).call(e);
  let o;
  for (; (o = n.next()) && !o.done; ) {
    const i = o.value;
    t.call(e, i[0], i[1]);
  }
}, Al = (e, t) => {
  let r;
  const n = [];
  for (; (r = e.exec(t)) !== null; )
    n.push(r);
  return n;
}, Rl = Xe("HTMLFormElement"), Pl = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, o) {
    return n.toUpperCase() + o;
  }
), ii = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), Nl = Xe("RegExp"), Na = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  or(r, (o, i) => {
    t(o, i, e) !== !1 && (n[i] = o);
  }), Object.defineProperties(e, n);
}, $l = (e) => {
  Na(e, (t, r) => {
    if (Fe(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = e[r];
    if (Fe(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, Il = (e, t) => {
  const r = {}, n = (o) => {
    o.forEach((i) => {
      r[i] = !0;
    });
  };
  return $t(e) ? n(e) : n(String(e).split(t)), r;
}, Ml = () => {
}, kl = (e, t) => (e = +e, Number.isFinite(e) ? e : t), hn = "abcdefghijklmnopqrstuvwxyz", ai = "0123456789", $a = {
  DIGIT: ai,
  ALPHA: hn,
  ALPHA_DIGIT: hn + hn.toUpperCase() + ai
}, Ll = (e = 16, t = $a.ALPHA_DIGIT) => {
  let r = "";
  const { length: n } = t;
  for (; e--; )
    r += t[Math.random() * n | 0];
  return r;
};
function Dl(e) {
  return !!(e && Fe(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const jl = (e) => {
  const t = new Array(10), r = (n, o) => {
    if (Xr(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        t[o] = n;
        const i = $t(n) ? [] : {};
        return or(n, (a, s) => {
          const l = r(a, o + 1);
          !Yt(l) && (i[s] = l);
        }), t[o] = void 0, i;
      }
    }
    return n;
  };
  return r(e, 0);
}, Fl = Xe("AsyncFunction"), Hl = (e) => e && (Xr(e) || Fe(e)) && Fe(e.then) && Fe(e.catch), T = {
  isArray: $t,
  isArrayBuffer: Oa,
  isBuffer: cl,
  isFormData: vl,
  isArrayBufferView: ll,
  isString: ul,
  isNumber: Ta,
  isBoolean: fl,
  isObject: Xr,
  isPlainObject: _r,
  isUndefined: Yt,
  isDate: dl,
  isFile: pl,
  isBlob: hl,
  isRegExp: Nl,
  isFunction: Fe,
  isStream: gl,
  isURLSearchParams: yl,
  isTypedArray: Ol,
  isFileList: ml,
  forEach: or,
  merge: jn,
  extend: Sl,
  trim: bl,
  stripBOM: El,
  inherits: Cl,
  toFlatObject: xl,
  kindOf: Kr,
  kindOfTest: Xe,
  endsWith: wl,
  toArray: _l,
  forEachEntry: Tl,
  matchAll: Al,
  isHTMLForm: Rl,
  hasOwnProperty: ii,
  hasOwnProp: ii,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Na,
  freezeMethods: $l,
  toObjectSet: Il,
  toCamelCase: Pl,
  noop: Ml,
  toFiniteNumber: kl,
  findKey: Aa,
  global: Ra,
  isContextDefined: Pa,
  ALPHABET: $a,
  generateString: Ll,
  isSpecCompliantForm: Dl,
  toJSONObject: jl,
  isAsyncFn: Fl,
  isThenable: Hl
};
function ie(e, t, r, n, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), n && (this.request = n), o && (this.response = o);
}
T.inherits(ie, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: T.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const Ia = ie.prototype, Ma = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  Ma[e] = { value: e };
});
Object.defineProperties(ie, Ma);
Object.defineProperty(Ia, "isAxiosError", { value: !0 });
ie.from = (e, t, r, n, o, i) => {
  const a = Object.create(Ia);
  return T.toFlatObject(e, a, function(l) {
    return l !== Error.prototype;
  }, (s) => s !== "isAxiosError"), ie.call(a, e.message, t, r, n, o), a.cause = e, a.name = e.name, i && Object.assign(a, i), a;
};
const Bl = null;
function Fn(e) {
  return T.isPlainObject(e) || T.isArray(e);
}
function ka(e) {
  return T.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function si(e, t, r) {
  return e ? e.concat(t).map(function(o, i) {
    return o = ka(o), !r && i ? "[" + o + "]" : o;
  }).join(r ? "." : "") : t;
}
function zl(e) {
  return T.isArray(e) && !e.some(Fn);
}
const Ul = T.toFlatObject(T, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Qr(e, t, r) {
  if (!T.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = T.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(d, h) {
    return !T.isUndefined(h[d]);
  });
  const n = r.metaTokens, o = r.visitor || f, i = r.dots, a = r.indexes, l = (r.Blob || typeof Blob < "u" && Blob) && T.isSpecCompliantForm(t);
  if (!T.isFunction(o))
    throw new TypeError("visitor must be a function");
  function c(p) {
    if (p === null)
      return "";
    if (T.isDate(p))
      return p.toISOString();
    if (!l && T.isBlob(p))
      throw new ie("Blob is not supported. Use a Buffer instead.");
    return T.isArrayBuffer(p) || T.isTypedArray(p) ? l && typeof Blob == "function" ? new Blob([p]) : Buffer.from(p) : p;
  }
  function f(p, d, h) {
    let x = p;
    if (p && !h && typeof p == "object") {
      if (T.endsWith(d, "{}"))
        d = n ? d : d.slice(0, -2), p = JSON.stringify(p);
      else if (T.isArray(p) && zl(p) || (T.isFileList(p) || T.endsWith(d, "[]")) && (x = T.toArray(p)))
        return d = ka(d), x.forEach(function(A, _) {
          !(T.isUndefined(A) || A === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? si([d], _, i) : a === null ? d : d + "[]",
            c(A)
          );
        }), !1;
    }
    return Fn(p) ? !0 : (t.append(si(h, d, i), c(p)), !1);
  }
  const u = [], m = Object.assign(Ul, {
    defaultVisitor: f,
    convertValue: c,
    isVisitable: Fn
  });
  function g(p, d) {
    if (!T.isUndefined(p)) {
      if (u.indexOf(p) !== -1)
        throw Error("Circular reference detected in " + d.join("."));
      u.push(p), T.forEach(p, function(x, E) {
        (!(T.isUndefined(x) || x === null) && o.call(
          t,
          x,
          T.isString(E) ? E.trim() : E,
          d,
          m
        )) === !0 && g(x, d ? d.concat(E) : [E]);
      }), u.pop();
    }
  }
  if (!T.isObject(e))
    throw new TypeError("data must be an object");
  return g(e), t;
}
function ci(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(n) {
    return t[n];
  });
}
function Ro(e, t) {
  this._pairs = [], e && Qr(e, this, t);
}
const La = Ro.prototype;
La.append = function(t, r) {
  this._pairs.push([t, r]);
};
La.toString = function(t) {
  const r = t ? function(n) {
    return t.call(this, n, ci);
  } : ci;
  return this._pairs.map(function(o) {
    return r(o[0]) + "=" + r(o[1]);
  }, "").join("&");
};
function Wl(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Da(e, t, r) {
  if (!t)
    return e;
  const n = r && r.encode || Wl, o = r && r.serialize;
  let i;
  if (o ? i = o(t, r) : i = T.isURLSearchParams(t) ? t.toString() : new Ro(t, r).toString(n), i) {
    const a = e.indexOf("#");
    a !== -1 && (e = e.slice(0, a)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class Vl {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, r, n) {
    return this.handlers.push({
      fulfilled: t,
      rejected: r,
      synchronous: n ? n.synchronous : !1,
      runWhen: n ? n.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    T.forEach(this.handlers, function(n) {
      n !== null && t(n);
    });
  }
}
const li = Vl, ja = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Gl = typeof URLSearchParams < "u" ? URLSearchParams : Ro, Yl = typeof FormData < "u" ? FormData : null, Kl = typeof Blob < "u" ? Blob : null, ql = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), Xl = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), Ke = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Gl,
    FormData: Yl,
    Blob: Kl
  },
  isStandardBrowserEnv: ql,
  isStandardBrowserWebWorkerEnv: Xl,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function Ql(e, t) {
  return Qr(e, new Ke.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, o, i) {
      return Ke.isNode && T.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Jl(e) {
  return T.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Zl(e) {
  const t = {}, r = Object.keys(e);
  let n;
  const o = r.length;
  let i;
  for (n = 0; n < o; n++)
    i = r[n], t[i] = e[i];
  return t;
}
function Fa(e) {
  function t(r, n, o, i) {
    let a = r[i++];
    const s = Number.isFinite(+a), l = i >= r.length;
    return a = !a && T.isArray(o) ? o.length : a, l ? (T.hasOwnProp(o, a) ? o[a] = [o[a], n] : o[a] = n, !s) : ((!o[a] || !T.isObject(o[a])) && (o[a] = []), t(r, n, o[a], i) && T.isArray(o[a]) && (o[a] = Zl(o[a])), !s);
  }
  if (T.isFormData(e) && T.isFunction(e.entries)) {
    const r = {};
    return T.forEachEntry(e, (n, o) => {
      t(Jl(n), o, r, 0);
    }), r;
  }
  return null;
}
const eu = {
  "Content-Type": void 0
};
function tu(e, t, r) {
  if (T.isString(e))
    try {
      return (t || JSON.parse)(e), T.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(e);
}
const Jr = {
  transitional: ja,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, r) {
    const n = r.getContentType() || "", o = n.indexOf("application/json") > -1, i = T.isObject(t);
    if (i && T.isHTMLForm(t) && (t = new FormData(t)), T.isFormData(t))
      return o && o ? JSON.stringify(Fa(t)) : t;
    if (T.isArrayBuffer(t) || T.isBuffer(t) || T.isStream(t) || T.isFile(t) || T.isBlob(t))
      return t;
    if (T.isArrayBufferView(t))
      return t.buffer;
    if (T.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let s;
    if (i) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return Ql(t, this.formSerializer).toString();
      if ((s = T.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const l = this.env && this.env.FormData;
        return Qr(
          s ? { "files[]": t } : t,
          l && new l(),
          this.formSerializer
        );
      }
    }
    return i || o ? (r.setContentType("application/json", !1), tu(t)) : t;
  }],
  transformResponse: [function(t) {
    const r = this.transitional || Jr.transitional, n = r && r.forcedJSONParsing, o = this.responseType === "json";
    if (t && T.isString(t) && (n && !this.responseType || o)) {
      const a = !(r && r.silentJSONParsing) && o;
      try {
        return JSON.parse(t);
      } catch (s) {
        if (a)
          throw s.name === "SyntaxError" ? ie.from(s, ie.ERR_BAD_RESPONSE, this, null, this.response) : s;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: Ke.classes.FormData,
    Blob: Ke.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*"
    }
  }
};
T.forEach(["delete", "get", "head"], function(t) {
  Jr.headers[t] = {};
});
T.forEach(["post", "put", "patch"], function(t) {
  Jr.headers[t] = T.merge(eu);
});
const Po = Jr, ru = T.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), nu = (e) => {
  const t = {};
  let r, n, o;
  return e && e.split(`
`).forEach(function(a) {
    o = a.indexOf(":"), r = a.substring(0, o).trim().toLowerCase(), n = a.substring(o + 1).trim(), !(!r || t[r] && ru[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n);
  }), t;
}, ui = Symbol("internals");
function Bt(e) {
  return e && String(e).trim().toLowerCase();
}
function Or(e) {
  return e === !1 || e == null ? e : T.isArray(e) ? e.map(Or) : String(e);
}
function ou(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const iu = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function mn(e, t, r, n, o) {
  if (T.isFunction(n))
    return n.call(this, t, r);
  if (o && (t = r), !!T.isString(t)) {
    if (T.isString(n))
      return t.indexOf(n) !== -1;
    if (T.isRegExp(n))
      return n.test(t);
  }
}
function au(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function su(e, t) {
  const r = T.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + r, {
      value: function(o, i, a) {
        return this[n].call(this, t, o, i, a);
      },
      configurable: !0
    });
  });
}
class Zr {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    const o = this;
    function i(s, l, c) {
      const f = Bt(l);
      if (!f)
        throw new Error("header name must be a non-empty string");
      const u = T.findKey(o, f);
      (!u || o[u] === void 0 || c === !0 || c === void 0 && o[u] !== !1) && (o[u || l] = Or(s));
    }
    const a = (s, l) => T.forEach(s, (c, f) => i(c, f, l));
    return T.isPlainObject(t) || t instanceof this.constructor ? a(t, r) : T.isString(t) && (t = t.trim()) && !iu(t) ? a(nu(t), r) : t != null && i(r, t, n), this;
  }
  get(t, r) {
    if (t = Bt(t), t) {
      const n = T.findKey(this, t);
      if (n) {
        const o = this[n];
        if (!r)
          return o;
        if (r === !0)
          return ou(o);
        if (T.isFunction(r))
          return r.call(this, o, n);
        if (T.isRegExp(r))
          return r.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = Bt(t), t) {
      const n = T.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || mn(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let o = !1;
    function i(a) {
      if (a = Bt(a), a) {
        const s = T.findKey(n, a);
        s && (!r || mn(n, n[s], s, r)) && (delete n[s], o = !0);
      }
    }
    return T.isArray(t) ? t.forEach(i) : i(t), o;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length, o = !1;
    for (; n--; ) {
      const i = r[n];
      (!t || mn(this, this[i], i, t, !0)) && (delete this[i], o = !0);
    }
    return o;
  }
  normalize(t) {
    const r = this, n = {};
    return T.forEach(this, (o, i) => {
      const a = T.findKey(n, i);
      if (a) {
        r[a] = Or(o), delete r[i];
        return;
      }
      const s = t ? au(i) : String(i).trim();
      s !== i && delete r[i], r[s] = Or(o), n[s] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = /* @__PURE__ */ Object.create(null);
    return T.forEach(this, (n, o) => {
      n != null && n !== !1 && (r[o] = t && T.isArray(n) ? n.join(", ") : n);
    }), r;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, r]) => t + ": " + r).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...r) {
    const n = new this(t);
    return r.forEach((o) => n.set(o)), n;
  }
  static accessor(t) {
    const n = (this[ui] = this[ui] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function i(a) {
      const s = Bt(a);
      n[s] || (su(o, a), n[s] = !0);
    }
    return T.isArray(t) ? t.forEach(i) : i(t), this;
  }
}
Zr.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
T.freezeMethods(Zr.prototype);
T.freezeMethods(Zr);
const rt = Zr;
function gn(e, t) {
  const r = this || Po, n = t || r, o = rt.from(n.headers);
  let i = n.data;
  return T.forEach(e, function(s) {
    i = s.call(r, i, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), i;
}
function Ha(e) {
  return !!(e && e.__CANCEL__);
}
function ir(e, t, r) {
  ie.call(this, e ?? "canceled", ie.ERR_CANCELED, t, r), this.name = "CanceledError";
}
T.inherits(ir, ie, {
  __CANCEL__: !0
});
function cu(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? e(r) : t(new ie(
    "Request failed with status code " + r.status,
    [ie.ERR_BAD_REQUEST, ie.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
const lu = Ke.isStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  function() {
    return {
      write: function(r, n, o, i, a, s) {
        const l = [];
        l.push(r + "=" + encodeURIComponent(n)), T.isNumber(o) && l.push("expires=" + new Date(o).toGMTString()), T.isString(i) && l.push("path=" + i), T.isString(a) && l.push("domain=" + a), s === !0 && l.push("secure"), document.cookie = l.join("; ");
      },
      read: function(r) {
        const n = document.cookie.match(new RegExp("(^|;\\s*)(" + r + ")=([^;]*)"));
        return n ? decodeURIComponent(n[3]) : null;
      },
      remove: function(r) {
        this.write(r, "", Date.now() - 864e5);
      }
    };
  }()
) : (
  // Non standard browser env (web workers, react-native) lack needed support.
  function() {
    return {
      write: function() {
      },
      read: function() {
        return null;
      },
      remove: function() {
      }
    };
  }()
);
function uu(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function fu(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Ba(e, t) {
  return e && !uu(t) ? fu(e, t) : t;
}
const du = Ke.isStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = /(msie|trident)/i.test(navigator.userAgent), r = document.createElement("a");
    let n;
    function o(i) {
      let a = i;
      return t && (r.setAttribute("href", a), a = r.href), r.setAttribute("href", a), {
        href: r.href,
        protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
        host: r.host,
        search: r.search ? r.search.replace(/^\?/, "") : "",
        hash: r.hash ? r.hash.replace(/^#/, "") : "",
        hostname: r.hostname,
        port: r.port,
        pathname: r.pathname.charAt(0) === "/" ? r.pathname : "/" + r.pathname
      };
    }
    return n = o(window.location.href), function(a) {
      const s = T.isString(a) ? o(a) : a;
      return s.protocol === n.protocol && s.host === n.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  function() {
    return function() {
      return !0;
    };
  }()
);
function pu(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function hu(e, t) {
  e = e || 10;
  const r = new Array(e), n = new Array(e);
  let o = 0, i = 0, a;
  return t = t !== void 0 ? t : 1e3, function(l) {
    const c = Date.now(), f = n[i];
    a || (a = c), r[o] = l, n[o] = c;
    let u = i, m = 0;
    for (; u !== o; )
      m += r[u++], u = u % e;
    if (o = (o + 1) % e, o === i && (i = (i + 1) % e), c - a < t)
      return;
    const g = f && c - f;
    return g ? Math.round(m * 1e3 / g) : void 0;
  };
}
function fi(e, t) {
  let r = 0;
  const n = hu(50, 250);
  return (o) => {
    const i = o.loaded, a = o.lengthComputable ? o.total : void 0, s = i - r, l = n(s), c = i <= a;
    r = i;
    const f = {
      loaded: i,
      total: a,
      progress: a ? i / a : void 0,
      bytes: s,
      rate: l || void 0,
      estimated: l && a && c ? (a - i) / l : void 0,
      event: o
    };
    f[t ? "download" : "upload"] = !0, e(f);
  };
}
const mu = typeof XMLHttpRequest < "u", gu = mu && function(e) {
  return new Promise(function(r, n) {
    let o = e.data;
    const i = rt.from(e.headers).normalize(), a = e.responseType;
    let s;
    function l() {
      e.cancelToken && e.cancelToken.unsubscribe(s), e.signal && e.signal.removeEventListener("abort", s);
    }
    T.isFormData(o) && (Ke.isStandardBrowserEnv || Ke.isStandardBrowserWebWorkerEnv ? i.setContentType(!1) : i.setContentType("multipart/form-data;", !1));
    let c = new XMLHttpRequest();
    if (e.auth) {
      const g = e.auth.username || "", p = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      i.set("Authorization", "Basic " + btoa(g + ":" + p));
    }
    const f = Ba(e.baseURL, e.url);
    c.open(e.method.toUpperCase(), Da(f, e.params, e.paramsSerializer), !0), c.timeout = e.timeout;
    function u() {
      if (!c)
        return;
      const g = rt.from(
        "getAllResponseHeaders" in c && c.getAllResponseHeaders()
      ), d = {
        data: !a || a === "text" || a === "json" ? c.responseText : c.response,
        status: c.status,
        statusText: c.statusText,
        headers: g,
        config: e,
        request: c
      };
      cu(function(x) {
        r(x), l();
      }, function(x) {
        n(x), l();
      }, d), c = null;
    }
    if ("onloadend" in c ? c.onloadend = u : c.onreadystatechange = function() {
      !c || c.readyState !== 4 || c.status === 0 && !(c.responseURL && c.responseURL.indexOf("file:") === 0) || setTimeout(u);
    }, c.onabort = function() {
      c && (n(new ie("Request aborted", ie.ECONNABORTED, e, c)), c = null);
    }, c.onerror = function() {
      n(new ie("Network Error", ie.ERR_NETWORK, e, c)), c = null;
    }, c.ontimeout = function() {
      let p = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const d = e.transitional || ja;
      e.timeoutErrorMessage && (p = e.timeoutErrorMessage), n(new ie(
        p,
        d.clarifyTimeoutError ? ie.ETIMEDOUT : ie.ECONNABORTED,
        e,
        c
      )), c = null;
    }, Ke.isStandardBrowserEnv) {
      const g = (e.withCredentials || du(f)) && e.xsrfCookieName && lu.read(e.xsrfCookieName);
      g && i.set(e.xsrfHeaderName, g);
    }
    o === void 0 && i.setContentType(null), "setRequestHeader" in c && T.forEach(i.toJSON(), function(p, d) {
      c.setRequestHeader(d, p);
    }), T.isUndefined(e.withCredentials) || (c.withCredentials = !!e.withCredentials), a && a !== "json" && (c.responseType = e.responseType), typeof e.onDownloadProgress == "function" && c.addEventListener("progress", fi(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && c.upload && c.upload.addEventListener("progress", fi(e.onUploadProgress)), (e.cancelToken || e.signal) && (s = (g) => {
      c && (n(!g || g.type ? new ir(null, e, c) : g), c.abort(), c = null);
    }, e.cancelToken && e.cancelToken.subscribe(s), e.signal && (e.signal.aborted ? s() : e.signal.addEventListener("abort", s)));
    const m = pu(f);
    if (m && Ke.protocols.indexOf(m) === -1) {
      n(new ie("Unsupported protocol " + m + ":", ie.ERR_BAD_REQUEST, e));
      return;
    }
    c.send(o || null);
  });
}, Tr = {
  http: Bl,
  xhr: gu
};
T.forEach(Tr, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const vu = {
  getAdapter: (e) => {
    e = T.isArray(e) ? e : [e];
    const { length: t } = e;
    let r, n;
    for (let o = 0; o < t && (r = e[o], !(n = T.isString(r) ? Tr[r.toLowerCase()] : r)); o++)
      ;
    if (!n)
      throw n === !1 ? new ie(
        `Adapter ${r} is not supported by the environment`,
        "ERR_NOT_SUPPORT"
      ) : new Error(
        T.hasOwnProp(Tr, r) ? `Adapter '${r}' is not available in the build` : `Unknown adapter '${r}'`
      );
    if (!T.isFunction(n))
      throw new TypeError("adapter is not a function");
    return n;
  },
  adapters: Tr
};
function vn(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new ir(null, e);
}
function di(e) {
  return vn(e), e.headers = rt.from(e.headers), e.data = gn.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), vu.getAdapter(e.adapter || Po.adapter)(e).then(function(n) {
    return vn(e), n.data = gn.call(
      e,
      e.transformResponse,
      n
    ), n.headers = rt.from(n.headers), n;
  }, function(n) {
    return Ha(n) || (vn(e), n && n.response && (n.response.data = gn.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = rt.from(n.response.headers))), Promise.reject(n);
  });
}
const pi = (e) => e instanceof rt ? e.toJSON() : e;
function Ot(e, t) {
  t = t || {};
  const r = {};
  function n(c, f, u) {
    return T.isPlainObject(c) && T.isPlainObject(f) ? T.merge.call({ caseless: u }, c, f) : T.isPlainObject(f) ? T.merge({}, f) : T.isArray(f) ? f.slice() : f;
  }
  function o(c, f, u) {
    if (T.isUndefined(f)) {
      if (!T.isUndefined(c))
        return n(void 0, c, u);
    } else
      return n(c, f, u);
  }
  function i(c, f) {
    if (!T.isUndefined(f))
      return n(void 0, f);
  }
  function a(c, f) {
    if (T.isUndefined(f)) {
      if (!T.isUndefined(c))
        return n(void 0, c);
    } else
      return n(void 0, f);
  }
  function s(c, f, u) {
    if (u in t)
      return n(c, f);
    if (u in e)
      return n(void 0, c);
  }
  const l = {
    url: i,
    method: i,
    data: i,
    baseURL: a,
    transformRequest: a,
    transformResponse: a,
    paramsSerializer: a,
    timeout: a,
    timeoutMessage: a,
    withCredentials: a,
    adapter: a,
    responseType: a,
    xsrfCookieName: a,
    xsrfHeaderName: a,
    onUploadProgress: a,
    onDownloadProgress: a,
    decompress: a,
    maxContentLength: a,
    maxBodyLength: a,
    beforeRedirect: a,
    transport: a,
    httpAgent: a,
    httpsAgent: a,
    cancelToken: a,
    socketPath: a,
    responseEncoding: a,
    validateStatus: s,
    headers: (c, f) => o(pi(c), pi(f), !0)
  };
  return T.forEach(Object.keys(Object.assign({}, e, t)), function(f) {
    const u = l[f] || o, m = u(e[f], t[f], f);
    T.isUndefined(m) && u !== s || (r[f] = m);
  }), r;
}
const za = "1.4.0", No = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  No[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const hi = {};
No.transitional = function(t, r, n) {
  function o(i, a) {
    return "[Axios v" + za + "] Transitional option '" + i + "'" + a + (n ? ". " + n : "");
  }
  return (i, a, s) => {
    if (t === !1)
      throw new ie(
        o(a, " has been removed" + (r ? " in " + r : "")),
        ie.ERR_DEPRECATED
      );
    return r && !hi[a] && (hi[a] = !0, console.warn(
      o(
        a,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(i, a, s) : !0;
  };
};
function yu(e, t, r) {
  if (typeof e != "object")
    throw new ie("options must be an object", ie.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let o = n.length;
  for (; o-- > 0; ) {
    const i = n[o], a = t[i];
    if (a) {
      const s = e[i], l = s === void 0 || a(s, i, e);
      if (l !== !0)
        throw new ie("option " + i + " must be " + l, ie.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new ie("Unknown option " + i, ie.ERR_BAD_OPTION);
  }
}
const Hn = {
  assertOptions: yu,
  validators: No
}, it = Hn.validators;
class jr {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new li(),
      response: new li()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  request(t, r) {
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = Ot(this.defaults, r);
    const { transitional: n, paramsSerializer: o, headers: i } = r;
    n !== void 0 && Hn.assertOptions(n, {
      silentJSONParsing: it.transitional(it.boolean),
      forcedJSONParsing: it.transitional(it.boolean),
      clarifyTimeoutError: it.transitional(it.boolean)
    }, !1), o != null && (T.isFunction(o) ? r.paramsSerializer = {
      serialize: o
    } : Hn.assertOptions(o, {
      encode: it.function,
      serialize: it.function
    }, !0)), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let a;
    a = i && T.merge(
      i.common,
      i[r.method]
    ), a && T.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (p) => {
        delete i[p];
      }
    ), r.headers = rt.concat(a, i);
    const s = [];
    let l = !0;
    this.interceptors.request.forEach(function(d) {
      typeof d.runWhen == "function" && d.runWhen(r) === !1 || (l = l && d.synchronous, s.unshift(d.fulfilled, d.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function(d) {
      c.push(d.fulfilled, d.rejected);
    });
    let f, u = 0, m;
    if (!l) {
      const p = [di.bind(this), void 0];
      for (p.unshift.apply(p, s), p.push.apply(p, c), m = p.length, f = Promise.resolve(r); u < m; )
        f = f.then(p[u++], p[u++]);
      return f;
    }
    m = s.length;
    let g = r;
    for (u = 0; u < m; ) {
      const p = s[u++], d = s[u++];
      try {
        g = p(g);
      } catch (h) {
        d.call(this, h);
        break;
      }
    }
    try {
      f = di.call(this, g);
    } catch (p) {
      return Promise.reject(p);
    }
    for (u = 0, m = c.length; u < m; )
      f = f.then(c[u++], c[u++]);
    return f;
  }
  getUri(t) {
    t = Ot(this.defaults, t);
    const r = Ba(t.baseURL, t.url);
    return Da(r, t.params, t.paramsSerializer);
  }
}
T.forEach(["delete", "get", "head", "options"], function(t) {
  jr.prototype[t] = function(r, n) {
    return this.request(Ot(n || {}, {
      method: t,
      url: r,
      data: (n || {}).data
    }));
  };
});
T.forEach(["post", "put", "patch"], function(t) {
  function r(n) {
    return function(i, a, s) {
      return this.request(Ot(s || {}, {
        method: t,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: a
      }));
    };
  }
  jr.prototype[t] = r(), jr.prototype[t + "Form"] = r(!0);
});
const Ar = jr;
class $o {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(i) {
      r = i;
    });
    const n = this;
    this.promise.then((o) => {
      if (!n._listeners)
        return;
      let i = n._listeners.length;
      for (; i-- > 0; )
        n._listeners[i](o);
      n._listeners = null;
    }), this.promise.then = (o) => {
      let i;
      const a = new Promise((s) => {
        n.subscribe(s), i = s;
      }).then(o);
      return a.cancel = function() {
        n.unsubscribe(i);
      }, a;
    }, t(function(i, a, s) {
      n.reason || (n.reason = new ir(i, a, s), r(n.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const r = this._listeners.indexOf(t);
    r !== -1 && this._listeners.splice(r, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new $o(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
}
const bu = $o;
function Su(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function Eu(e) {
  return T.isObject(e) && e.isAxiosError === !0;
}
const Bn = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(Bn).forEach(([e, t]) => {
  Bn[t] = e;
});
const Cu = Bn;
function Ua(e) {
  const t = new Ar(e), r = _a(Ar.prototype.request, t);
  return T.extend(r, Ar.prototype, t, { allOwnKeys: !0 }), T.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(o) {
    return Ua(Ot(e, o));
  }, r;
}
const _e = Ua(Po);
_e.Axios = Ar;
_e.CanceledError = ir;
_e.CancelToken = bu;
_e.isCancel = Ha;
_e.VERSION = za;
_e.toFormData = Qr;
_e.AxiosError = ie;
_e.Cancel = _e.CanceledError;
_e.all = function(t) {
  return Promise.all(t);
};
_e.spread = Su;
_e.isAxiosError = Eu;
_e.mergeConfig = Ot;
_e.AxiosHeaders = rt;
_e.formToJSON = (e) => Fa(T.isHTMLForm(e) ? new FormData(e) : e);
_e.HttpStatusCode = Cu;
_e.default = _e;
const xu = _e;
process.env.CLIENT_URL;
process.env.SERVER_PREFIX;
process.env.SERVER_PORT;
process.env.CODE_COMPILER_API_URL;
const wu = process.env.SERVER_URL ?? "http://localhost:6868", cv = xu.create({
  baseURL: wu,
  withCredentials: !0
}), _u = {
  EDITOR_THEME: "EDITOR_THEME",
  EDITOR_CONTENT_DATA: "EDITOR_CONTENT_DATA",
  EDITOR_EXECUTE_MESSAGES: "EDITOR_EXECUTE_MESSAGES",
  EDITOR_FONT_SIZE: "EDITOR_FONT_SIZE",
  EDITOR_TAB_SIZE: "EDITOR_TAB_SIZE",
  EDITOR_CUSTOM_BACKGROUND: "EDITOR_CUSTOM_BACKGROUND",
  EDITOR_CUSTOM_COLOR: "EDITOR_CUSTOM_COLOR",
  EDITOR_HTML_PREVIEW: "EDITOR_HTML_PREVIEW"
}, lv = {
  MAIN: "/",
  EDITOR: "/edit",
  ABOUT: "/about"
}, uv = () => {
  const [e, t] = Gt([]);
  return {
    on: (r) => {
      Object.entries(r).forEach(([n, o]) => {
        const i = (a) => {
          if (a.altKey && a.key === n.toLowerCase())
            return a.preventDefault(), o(), !1;
        };
        t([...e, i]), document.addEventListener("keydown", i);
      });
    },
    clear: () => {
      e.forEach((r) => {
        document.removeEventListener("keydown", r);
      });
    }
  };
}, Ou = (e = !1) => {
  const [t, r] = Gt(e);
  return {
    off: () => r(!1),
    on: () => r(!0),
    toggle: () => r(!t),
    val: t
  };
}, fv = (e, t) => {
  const r = je();
  return (...n) => {
    r.current && clearTimeout(r.current), r.current = setTimeout(() => {
      e(...n);
    }, t);
  };
}, dv = () => () => {
  if (!document.fullscreenElement)
    return document.documentElement.requestFullscreen();
  document.exitFullscreen && document.exitFullscreen();
};
var Oe;
Oe = { __e: function(e, t, r, n) {
  for (var o, i, a; t = t.__; )
    if ((o = t.__c) && !o.__)
      try {
        if ((i = o.constructor) && i.getDerivedStateFromError != null && (o.setState(i.getDerivedStateFromError(e)), a = o.__d), o.componentDidCatch != null && (o.componentDidCatch(e, n || {}), a = o.__d), a)
          return o.__E = o;
      } catch (s) {
        e = s;
      }
  throw e;
} }, typeof Promise == "function" && Promise.prototype.then.bind(Promise.resolve());
var Fr, Se, yn, mi, zn = 0, Wa = [], Rr = [], gi = Oe.__b, vi = Oe.__r, yi = Oe.diffed, bi = Oe.__c, Si = Oe.unmount;
function Va(e, t) {
  Oe.__h && Oe.__h(Se, e, zn || t), zn = 0;
  var r = Se.__H || (Se.__H = { __: [], __h: [] });
  return e >= r.__.length && r.__.push({ __V: Rr }), r.__[e];
}
function Tu(e) {
  return zn = 1, Au(Ga, e);
}
function Au(e, t, r) {
  var n = Va(Fr++, 2);
  if (n.t = e, !n.__c && (n.__ = [r ? r(t) : Ga(void 0, t), function(s) {
    var l = n.__N ? n.__N[0] : n.__[0], c = n.t(l, s);
    l !== c && (n.__N = [c, n.__[1]], n.__c.setState({}));
  }], n.__c = Se, !Se.u)) {
    var o = function(s, l, c) {
      if (!n.__c.__H)
        return !0;
      var f = n.__c.__H.__.filter(function(m) {
        return m.__c;
      });
      if (f.every(function(m) {
        return !m.__N;
      }))
        return !i || i.call(this, s, l, c);
      var u = !1;
      return f.forEach(function(m) {
        if (m.__N) {
          var g = m.__[0];
          m.__ = m.__N, m.__N = void 0, g !== m.__[0] && (u = !0);
        }
      }), !(!u && n.__c.props === s) && (!i || i.call(this, s, l, c));
    };
    Se.u = !0;
    var i = Se.shouldComponentUpdate, a = Se.componentWillUpdate;
    Se.componentWillUpdate = function(s, l, c) {
      if (this.__e) {
        var f = i;
        i = void 0, o(s, l, c), i = f;
      }
      a && a.call(this, s, l, c);
    }, Se.shouldComponentUpdate = o;
  }
  return n.__N || n.__;
}
function Ru(e) {
  var t = Va(Fr++, 10), r = Tu();
  return t.__ = e, Se.componentDidCatch || (Se.componentDidCatch = function(n, o) {
    t.__ && t.__(n, o), r[1](n);
  }), [r[0], function() {
    r[1](void 0);
  }];
}
function Pu() {
  for (var e; e = Wa.shift(); )
    if (e.__P && e.__H)
      try {
        e.__H.__h.forEach(Pr), e.__H.__h.forEach(Un), e.__H.__h = [];
      } catch (t) {
        e.__H.__h = [], Oe.__e(t, e.__v);
      }
}
Oe.__b = function(e) {
  Se = null, gi && gi(e);
}, Oe.__r = function(e) {
  vi && vi(e), Fr = 0;
  var t = (Se = e.__c).__H;
  t && (yn === Se ? (t.__h = [], Se.__h = [], t.__.forEach(function(r) {
    r.__N && (r.__ = r.__N), r.__V = Rr, r.__N = r.i = void 0;
  })) : (t.__h.forEach(Pr), t.__h.forEach(Un), t.__h = [], Fr = 0)), yn = Se;
}, Oe.diffed = function(e) {
  yi && yi(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (Wa.push(t) !== 1 && mi === Oe.requestAnimationFrame || ((mi = Oe.requestAnimationFrame) || Nu)(Pu)), t.__H.__.forEach(function(r) {
    r.i && (r.__H = r.i), r.__V !== Rr && (r.__ = r.__V), r.i = void 0, r.__V = Rr;
  })), yn = Se = null;
}, Oe.__c = function(e, t) {
  t.some(function(r) {
    try {
      r.__h.forEach(Pr), r.__h = r.__h.filter(function(n) {
        return !n.__ || Un(n);
      });
    } catch (n) {
      t.some(function(o) {
        o.__h && (o.__h = []);
      }), t = [], Oe.__e(n, r.__v);
    }
  }), bi && bi(e, t);
}, Oe.unmount = function(e) {
  Si && Si(e);
  var t, r = e.__c;
  r && r.__H && (r.__H.__.forEach(function(n) {
    try {
      Pr(n);
    } catch (o) {
      t = o;
    }
  }), r.__H = void 0, t && Oe.__e(t, r.__v));
};
var Ei = typeof requestAnimationFrame == "function";
function Nu(e) {
  var t, r = function() {
    clearTimeout(n), Ei && cancelAnimationFrame(t), setTimeout(e);
  }, n = setTimeout(r, 100);
  Ei && (t = requestAnimationFrame(r));
}
function Pr(e) {
  var t = Se, r = e.__c;
  typeof r == "function" && (e.__c = void 0, r()), Se = t;
}
function Un(e) {
  var t = Se;
  e.__c = e.__(), Se = t;
}
function Ga(e, t) {
  return typeof t == "function" ? t(e) : t;
}
const $u = () => /* @__PURE__ */ xa("div", { children: [
  "Custom Error Boundary. ",
  /* @__PURE__ */ Ee("br", {})
] }), Iu = ({ children: e }) => {
  const [t] = Ru();
  return console.error(t), t ? /* @__PURE__ */ Ee($u, { errorInfo: t }) : /* @__PURE__ */ Ee(To, { children: e });
};
function It(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ye(e) {
  "@babel/helpers - typeof";
  return ye = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ye(e);
}
function Mu(e, t) {
  if (ye(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ye(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Ya(e) {
  var t = Mu(e, "string");
  return ye(t) === "symbol" ? t : String(t);
}
function Ci(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Ya(n.key), n);
  }
}
function Mt(e, t, r) {
  return t && Ci(e.prototype, t), r && Ci(e, r), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function Wn(e, t) {
  return Wn = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, Wn(e, t);
}
function Ka(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(e, "prototype", {
    writable: !1
  }), t && Wn(e, t);
}
function Hr(e) {
  return Hr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Hr(e);
}
function ku() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Vn(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Lu(e, t) {
  if (t && (ye(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Vn(e);
}
function qa(e) {
  var t = ku();
  return function() {
    var n = Hr(e), o;
    if (t) {
      var i = Hr(this).constructor;
      o = Reflect.construct(n, arguments, i);
    } else
      o = n.apply(this, arguments);
    return Lu(this, o);
  };
}
function Xa(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Qa = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function r() {
      for (var n = [], o = 0; o < arguments.length; o++) {
        var i = arguments[o];
        if (i) {
          var a = typeof i;
          if (a === "string" || a === "number")
            n.push(i);
          else if (Array.isArray(i)) {
            if (i.length) {
              var s = r.apply(null, i);
              s && n.push(s);
            }
          } else if (a === "object") {
            if (i.toString !== Object.prototype.toString && !i.toString.toString().includes("[native code]")) {
              n.push(i.toString());
              continue;
            }
            for (var l in i)
              t.call(i, l) && i[l] && n.push(l);
          }
        }
      }
      return n.join(" ");
    }
    e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
  })();
})(Qa);
var Du = Qa.exports;
const Te = /* @__PURE__ */ Xa(Du);
function $e() {
  return $e = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, $e.apply(this, arguments);
}
var Gn = { exports: {} }, ce = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xi;
function ju() {
  if (xi)
    return ce;
  xi = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, u = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, p = e ? Symbol.for("react.lazy") : 60116, d = e ? Symbol.for("react.block") : 60121, h = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, E = e ? Symbol.for("react.scope") : 60119;
  function A(v) {
    if (typeof v == "object" && v !== null) {
      var R = v.$$typeof;
      switch (R) {
        case t:
          switch (v = v.type, v) {
            case l:
            case c:
            case n:
            case i:
            case o:
            case u:
              return v;
            default:
              switch (v = v && v.$$typeof, v) {
                case s:
                case f:
                case p:
                case g:
                case a:
                  return v;
                default:
                  return R;
              }
          }
        case r:
          return R;
      }
    }
  }
  function _(v) {
    return A(v) === c;
  }
  return ce.AsyncMode = l, ce.ConcurrentMode = c, ce.ContextConsumer = s, ce.ContextProvider = a, ce.Element = t, ce.ForwardRef = f, ce.Fragment = n, ce.Lazy = p, ce.Memo = g, ce.Portal = r, ce.Profiler = i, ce.StrictMode = o, ce.Suspense = u, ce.isAsyncMode = function(v) {
    return _(v) || A(v) === l;
  }, ce.isConcurrentMode = _, ce.isContextConsumer = function(v) {
    return A(v) === s;
  }, ce.isContextProvider = function(v) {
    return A(v) === a;
  }, ce.isElement = function(v) {
    return typeof v == "object" && v !== null && v.$$typeof === t;
  }, ce.isForwardRef = function(v) {
    return A(v) === f;
  }, ce.isFragment = function(v) {
    return A(v) === n;
  }, ce.isLazy = function(v) {
    return A(v) === p;
  }, ce.isMemo = function(v) {
    return A(v) === g;
  }, ce.isPortal = function(v) {
    return A(v) === r;
  }, ce.isProfiler = function(v) {
    return A(v) === i;
  }, ce.isStrictMode = function(v) {
    return A(v) === o;
  }, ce.isSuspense = function(v) {
    return A(v) === u;
  }, ce.isValidElementType = function(v) {
    return typeof v == "string" || typeof v == "function" || v === n || v === c || v === i || v === o || v === u || v === m || typeof v == "object" && v !== null && (v.$$typeof === p || v.$$typeof === g || v.$$typeof === a || v.$$typeof === s || v.$$typeof === f || v.$$typeof === h || v.$$typeof === x || v.$$typeof === E || v.$$typeof === d);
  }, ce.typeOf = A, ce;
}
var le = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wi;
function Fu() {
  return wi || (wi = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, u = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, p = e ? Symbol.for("react.lazy") : 60116, d = e ? Symbol.for("react.block") : 60121, h = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, E = e ? Symbol.for("react.scope") : 60119;
    function A(P) {
      return typeof P == "string" || typeof P == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      P === n || P === c || P === i || P === o || P === u || P === m || typeof P == "object" && P !== null && (P.$$typeof === p || P.$$typeof === g || P.$$typeof === a || P.$$typeof === s || P.$$typeof === f || P.$$typeof === h || P.$$typeof === x || P.$$typeof === E || P.$$typeof === d);
    }
    function _(P) {
      if (typeof P == "object" && P !== null) {
        var se = P.$$typeof;
        switch (se) {
          case t:
            var H = P.type;
            switch (H) {
              case l:
              case c:
              case n:
              case i:
              case o:
              case u:
                return H;
              default:
                var V = H && H.$$typeof;
                switch (V) {
                  case s:
                  case f:
                  case p:
                  case g:
                  case a:
                    return V;
                  default:
                    return se;
                }
            }
          case r:
            return se;
        }
      }
    }
    var v = l, R = c, w = s, B = a, D = t, $ = f, z = n, C = p, S = g, O = r, N = i, j = o, M = u, U = !1;
    function Q(P) {
      return U || (U = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), X(P) || _(P) === l;
    }
    function X(P) {
      return _(P) === c;
    }
    function re(P) {
      return _(P) === s;
    }
    function I(P) {
      return _(P) === a;
    }
    function L(P) {
      return typeof P == "object" && P !== null && P.$$typeof === t;
    }
    function F(P) {
      return _(P) === f;
    }
    function W(P) {
      return _(P) === n;
    }
    function b(P) {
      return _(P) === p;
    }
    function te(P) {
      return _(P) === g;
    }
    function k(P) {
      return _(P) === r;
    }
    function ne(P) {
      return _(P) === i;
    }
    function J(P) {
      return _(P) === o;
    }
    function q(P) {
      return _(P) === u;
    }
    le.AsyncMode = v, le.ConcurrentMode = R, le.ContextConsumer = w, le.ContextProvider = B, le.Element = D, le.ForwardRef = $, le.Fragment = z, le.Lazy = C, le.Memo = S, le.Portal = O, le.Profiler = N, le.StrictMode = j, le.Suspense = M, le.isAsyncMode = Q, le.isConcurrentMode = X, le.isContextConsumer = re, le.isContextProvider = I, le.isElement = L, le.isForwardRef = F, le.isFragment = W, le.isLazy = b, le.isMemo = te, le.isPortal = k, le.isProfiler = ne, le.isStrictMode = J, le.isSuspense = q, le.isValidElementType = A, le.typeOf = _;
  }()), le;
}
process.env.NODE_ENV === "production" ? Gn.exports = ju() : Gn.exports = Fu();
var Ja = Gn.exports, Yn = {}, Io = [], Hu = function(t) {
  Io.push(t);
};
function Za(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var r = Io.reduce(function(n, o) {
      return o(n ?? "", "warning");
    }, t);
    r && console.error("Warning: ".concat(r));
  }
}
function Bu(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var r = Io.reduce(function(n, o) {
      return o(n ?? "", "note");
    }, t);
    r && console.warn("Note: ".concat(r));
  }
}
function es() {
  Yn = {};
}
function ts(e, t, r) {
  !t && !Yn[r] && (e(!1, r), Yn[r] = !0);
}
function ct(e, t) {
  ts(Za, e, t);
}
function zu(e, t) {
  ts(Bu, e, t);
}
ct.preMessage = Hu;
ct.resetWarned = es;
ct.noteOnce = zu;
function ae(e, t, r) {
  return t = Ya(t), t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function _i(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ee(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? _i(Object(r), !0).forEach(function(n) {
      ae(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : _i(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function rs(e, t, r) {
  var n = y.useRef({});
  return (!("value" in n.current) || r(n.current.condition, t)) && (n.current.value = e(), n.current.condition = t), n.current.value;
}
function ns(e, t) {
  typeof e == "function" ? e(t) : ye(e) === "object" && e && "current" in e && (e.current = t);
}
function os() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n = t.filter(function(o) {
    return o;
  });
  return n.length <= 1 ? n[0] : function(o) {
    t.forEach(function(i) {
      ns(i, o);
    });
  };
}
function is(e) {
  var t, r, n = Ja.isMemo(e) ? e.type.type : e.type;
  return !(typeof n == "function" && !((t = n.prototype) !== null && t !== void 0 && t.render) || typeof e == "function" && !((r = e.prototype) !== null && r !== void 0 && r.render));
}
function Uu(e) {
  return e instanceof HTMLElement || e instanceof SVGElement;
}
function Wu(e) {
  return Uu(e) ? e : e instanceof de.Component ? il.findDOMNode(e) : null;
}
function Vu(e, t) {
  var r = ee({}, e);
  return Array.isArray(t) && t.forEach(function(n) {
    delete r[n];
  }), r;
}
function Kn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function Gu(e) {
  if (Array.isArray(e))
    return Kn(e);
}
function as(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function Mo(e, t) {
  if (e) {
    if (typeof e == "string")
      return Kn(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Kn(e, t);
  }
}
function Yu() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Le(e) {
  return Gu(e) || as(e) || Mo(e) || Yu();
}
var ss = function(t) {
  return +setTimeout(t, 16);
}, cs = function(t) {
  return clearTimeout(t);
};
typeof window < "u" && "requestAnimationFrame" in window && (ss = function(t) {
  return window.requestAnimationFrame(t);
}, cs = function(t) {
  return window.cancelAnimationFrame(t);
});
var Oi = 0, ko = /* @__PURE__ */ new Map();
function ls(e) {
  ko.delete(e);
}
var Kt = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  Oi += 1;
  var n = Oi;
  function o(i) {
    if (i === 0)
      ls(n), t();
    else {
      var a = ss(function() {
        o(i - 1);
      });
      ko.set(n, a);
    }
  }
  return o(r), n;
};
Kt.cancel = function(e) {
  var t = ko.get(e);
  return ls(t), cs(t);
};
function Lo(e) {
  for (var t = 0, r, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    r = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(n) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
function Ku(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), o, i;
  for (i = 0; i < n.length; i++)
    o = n[i], !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
function Tt(e, t) {
  if (e == null)
    return {};
  var r = Ku(e, t), n, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      n = i[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function qu(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, n = /* @__PURE__ */ new Set();
  function o(i, a) {
    var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, l = n.has(i);
    if (ct(!l, "Warning: There may be circular references"), l)
      return !1;
    if (i === a)
      return !0;
    if (r && s > 1)
      return !1;
    n.add(i);
    var c = s + 1;
    if (Array.isArray(i)) {
      if (!Array.isArray(a) || i.length !== a.length)
        return !1;
      for (var f = 0; f < i.length; f++)
        if (!o(i[f], a[f], c))
          return !1;
      return !0;
    }
    if (i && a && ye(i) === "object" && ye(a) === "object") {
      var u = Object.keys(i);
      return u.length !== Object.keys(a).length ? !1 : u.every(function(m) {
        return o(i[m], a[m], c);
      });
    }
    return !1;
  }
  return o(e, t);
}
var Ti = "%", Xu = /* @__PURE__ */ function() {
  function e(t) {
    It(this, e), ae(this, "instanceId", void 0), ae(this, "cache", /* @__PURE__ */ new Map()), this.instanceId = t;
  }
  return Mt(e, [{
    key: "get",
    value: function(r) {
      return this.cache.get(r.join(Ti)) || null;
    }
  }, {
    key: "update",
    value: function(r, n) {
      var o = r.join(Ti), i = this.cache.get(o), a = n(i);
      a === null ? this.cache.delete(o) : this.cache.set(o, a);
    }
  }]), e;
}(), qn = "data-token-hash", mt = "data-css-hash", Qu = "data-cache-path", xt = "__cssinjs_instance__";
function Ju() {
  var e = Math.random().toString(12).slice(2);
  if (typeof document < "u" && document.head && document.body) {
    var t = document.body.querySelectorAll("style[".concat(mt, "]")) || [], r = document.head.firstChild;
    Array.from(t).forEach(function(o) {
      o[xt] = o[xt] || e, o[xt] === e && document.head.insertBefore(o, r);
    });
    var n = {};
    Array.from(document.querySelectorAll("style[".concat(mt, "]"))).forEach(function(o) {
      var i = o.getAttribute(mt);
      if (n[i]) {
        if (o[xt] === e) {
          var a;
          (a = o.parentNode) === null || a === void 0 || a.removeChild(o);
        }
      } else
        n[i] = !0;
    });
  }
  return new Xu(e);
}
var Do = /* @__PURE__ */ y.createContext({
  hashPriority: "low",
  cache: Ju(),
  defaultCache: !0
});
function Qe() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Zu(e, t) {
  if (!e)
    return !1;
  if (e.contains)
    return e.contains(t);
  for (var r = t; r; ) {
    if (r === e)
      return !0;
    r = r.parentNode;
  }
  return !1;
}
var Ai = "data-rc-order", ef = "rc-util-key", Xn = /* @__PURE__ */ new Map();
function us() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.mark;
  return t ? t.startsWith("data-") ? t : "data-".concat(t) : ef;
}
function en(e) {
  if (e.attachTo)
    return e.attachTo;
  var t = document.querySelector("head");
  return t || document.body;
}
function tf(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function fs(e) {
  return Array.from((Xn.get(e) || e).children).filter(function(t) {
    return t.tagName === "STYLE";
  });
}
function ds(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!Qe())
    return null;
  var r = t.csp, n = t.prepend, o = document.createElement("style");
  o.setAttribute(Ai, tf(n)), r != null && r.nonce && (o.nonce = r?.nonce), o.innerHTML = e;
  var i = en(t), a = i.firstChild;
  if (n) {
    if (n === "queue") {
      var s = fs(i).filter(function(l) {
        return ["prepend", "prependQueue"].includes(l.getAttribute(Ai));
      });
      if (s.length)
        return i.insertBefore(o, s[s.length - 1].nextSibling), o;
    }
    i.insertBefore(o, a);
  } else
    i.appendChild(o);
  return o;
}
function ps(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = en(t);
  return fs(r).find(function(n) {
    return n.getAttribute(us(t)) === e;
  });
}
function hs(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = ps(e, t);
  if (r) {
    var n = en(t);
    n.removeChild(r);
  }
}
function rf(e, t) {
  var r = Xn.get(e);
  if (!r || !Zu(document, r)) {
    var n = ds("", t), o = n.parentNode;
    Xn.set(e, o), e.removeChild(n);
  }
}
function qt(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = en(r);
  rf(n, r);
  var o = ps(t, r);
  if (o) {
    var i, a;
    if ((i = r.csp) !== null && i !== void 0 && i.nonce && o.nonce !== ((a = r.csp) === null || a === void 0 ? void 0 : a.nonce)) {
      var s;
      o.nonce = (s = r.csp) === null || s === void 0 ? void 0 : s.nonce;
    }
    return o.innerHTML !== e && (o.innerHTML = e), o;
  }
  var l = ds(e, r);
  return l.setAttribute(us(r), t), l;
}
function ms(e) {
  if (Array.isArray(e))
    return e;
}
function nf(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, o, i, a, s = [], l = !0, c = !1;
    try {
      if (i = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r)
          return;
        l = !1;
      } else
        for (; !(l = (n = i.call(r)).done) && (s.push(n.value), s.length !== t); l = !0)
          ;
    } catch (f) {
      c = !0, o = f;
    } finally {
      try {
        if (!l && r.return != null && (a = r.return(), Object(a) !== a))
          return;
      } finally {
        if (c)
          throw o;
      }
    }
    return s;
  }
}
function gs() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function pe(e, t) {
  return ms(e) || nf(e, t) || Mo(e, t) || gs();
}
function of(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
var jo = /* @__PURE__ */ function() {
  function e() {
    It(this, e), ae(this, "cache", void 0), ae(this, "keys", void 0), ae(this, "cacheCallTimes", void 0), this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
  }
  return Mt(e, [{
    key: "size",
    value: function() {
      return this.keys.length;
    }
  }, {
    key: "internalGet",
    value: function(r) {
      var n, o, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, a = {
        map: this.cache
      };
      return r.forEach(function(s) {
        if (!a)
          a = void 0;
        else {
          var l, c;
          a = (l = a) === null || l === void 0 || (c = l.map) === null || c === void 0 ? void 0 : c.get(s);
        }
      }), (n = a) !== null && n !== void 0 && n.value && i && (a.value[1] = this.cacheCallTimes++), (o = a) === null || o === void 0 ? void 0 : o.value;
    }
  }, {
    key: "get",
    value: function(r) {
      var n;
      return (n = this.internalGet(r, !0)) === null || n === void 0 ? void 0 : n[0];
    }
  }, {
    key: "has",
    value: function(r) {
      return !!this.internalGet(r);
    }
  }, {
    key: "set",
    value: function(r, n) {
      var o = this;
      if (!this.has(r)) {
        if (this.size() + 1 > e.MAX_CACHE_SIZE + e.MAX_CACHE_OFFSET) {
          var i = this.keys.reduce(function(c, f) {
            var u = pe(c, 2), m = u[1];
            return o.internalGet(f)[1] < m ? [f, o.internalGet(f)[1]] : c;
          }, [this.keys[0], this.cacheCallTimes]), a = pe(i, 1), s = a[0];
          this.delete(s);
        }
        this.keys.push(r);
      }
      var l = this.cache;
      r.forEach(function(c, f) {
        if (f === r.length - 1)
          l.set(c, {
            value: [n, o.cacheCallTimes++]
          });
        else {
          var u = l.get(c);
          u ? u.map || (u.map = /* @__PURE__ */ new Map()) : l.set(c, {
            map: /* @__PURE__ */ new Map()
          }), l = l.get(c).map;
        }
      });
    }
  }, {
    key: "deleteByPath",
    value: function(r, n) {
      var o = r.get(n[0]);
      if (n.length === 1) {
        var i;
        return o.map ? r.set(n[0], {
          map: o.map
        }) : r.delete(n[0]), (i = o.value) === null || i === void 0 ? void 0 : i[0];
      }
      var a = this.deleteByPath(o.map, n.slice(1));
      return (!o.map || o.map.size === 0) && !o.value && r.delete(n[0]), a;
    }
  }, {
    key: "delete",
    value: function(r) {
      if (this.has(r))
        return this.keys = this.keys.filter(function(n) {
          return !of(n, r);
        }), this.deleteByPath(this.cache, r);
    }
  }]), e;
}();
ae(jo, "MAX_CACHE_SIZE", 20);
ae(jo, "MAX_CACHE_OFFSET", 5);
var Ri = 0, vs = /* @__PURE__ */ function() {
  function e(t) {
    It(this, e), ae(this, "derivatives", void 0), ae(this, "id", void 0), this.derivatives = Array.isArray(t) ? t : [t], this.id = Ri, t.length === 0 && Za(t.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function."), Ri += 1;
  }
  return Mt(e, [{
    key: "getDerivativeToken",
    value: function(r) {
      return this.derivatives.reduce(function(n, o) {
        return o(r, n);
      }, void 0);
    }
  }]), e;
}(), bn = new jo();
function ys(e) {
  var t = Array.isArray(e) ? e : [e];
  return bn.has(t) || bn.set(t, new vs(t)), bn.get(t);
}
function Br(e) {
  var t = "";
  return Object.keys(e).forEach(function(r) {
    var n = e[r];
    t += r, n instanceof vs ? t += n.id : n && ye(n) === "object" ? t += Br(n) : t += n;
  }), t;
}
function af(e, t) {
  return Lo("".concat(t, "_").concat(Br(e)));
}
var Ut = "random-".concat(Date.now(), "-").concat(Math.random()).replace(/\./g, ""), bs = "_bAmBoO_";
function sf(e, t, r) {
  if (Qe()) {
    var n, o;
    qt(e, Ut);
    var i = document.createElement("div");
    i.style.position = "fixed", i.style.left = "0", i.style.top = "0", t?.(i), document.body.appendChild(i), process.env.NODE_ENV !== "production" && (i.innerHTML = "Test", i.style.zIndex = "9999999");
    var a = r ? r(i) : (n = getComputedStyle(i).content) === null || n === void 0 ? void 0 : n.includes(bs);
    return (o = i.parentNode) === null || o === void 0 || o.removeChild(i), hs(Ut), a;
  }
  return !1;
}
var Sn = void 0;
function cf() {
  return Sn === void 0 && (Sn = sf("@layer ".concat(Ut, " { .").concat(Ut, ' { content: "').concat(bs, '"!important; } }'), function(e) {
    e.className = Ut;
  })), Sn;
}
var Pi = process.env.NODE_ENV !== "test" && Qe() ? y.useLayoutEffect : y.useEffect, lf = function(t, r) {
  var n = y.useRef(!0);
  Pi(function() {
    return t(n.current);
  }, r), Pi(function() {
    return n.current = !1, function() {
      n.current = !0;
    };
  }, []);
}, uf = ee({}, y), Ni = uf.useInsertionEffect, ff = function(t, r, n) {
  y.useMemo(t, n), lf(function() {
    return r(!0);
  }, n);
}, df = Ni ? function(e, t, r) {
  return Ni(function() {
    return e(), t();
  }, r);
} : ff;
function pf() {
  return !1;
}
var Qn = !1;
function hf() {
  return Qn;
}
const mf = process.env.NODE_ENV === "production" ? pf : hf;
if (process.env.NODE_ENV !== "production" && typeof module < "u" && module && module.hot) {
  var En = window;
  if (typeof En.webpackHotUpdate == "function") {
    var gf = En.webpackHotUpdate;
    En.webpackHotUpdate = function() {
      return Qn = !0, setTimeout(function() {
        Qn = !1;
      }, 0), gf.apply(void 0, arguments);
    };
  }
}
function Ss(e, t, r, n, o) {
  var i = y.useContext(Do), a = i.cache, s = [e].concat(Le(t)), l = s.join("_"), c = mf(), f = function(p) {
    a.update(s, function(d) {
      var h = d || [], x = pe(h, 2), E = x[0], A = E === void 0 ? 0 : E, _ = x[1], v = _;
      process.env.NODE_ENV !== "production" && _ && c && (n?.(v, c), v = null);
      var R = v || r(), w = [A, R];
      return p ? p(w) : w;
    });
  };
  y.useMemo(
    function() {
      f();
    },
    /* eslint-disable react-hooks/exhaustive-deps */
    [l]
    /* eslint-enable */
  );
  var u = a.get(s);
  process.env.NODE_ENV !== "production" && !u && (f(), u = a.get(s));
  var m = u[1];
  return df(function() {
    o?.(m);
  }, function(g) {
    return f(function(p) {
      var d = pe(p, 2), h = d[0], x = d[1];
      return g && h === 0 && o?.(m), [h + 1, x];
    }), function() {
      a.update(s, function(p) {
        var d = p || [], h = pe(d, 2), x = h[0], E = x === void 0 ? 0 : x, A = h[1], _ = E - 1;
        return _ === 0 ? (n?.(A, !1), null) : [E - 1, A];
      });
    };
  }, [l]), m;
}
var vf = {}, yf = process.env.NODE_ENV !== "production" ? "css-dev-only-do-not-override" : "css", ft = /* @__PURE__ */ new Map();
function bf(e) {
  ft.set(e, (ft.get(e) || 0) + 1);
}
function Sf(e, t) {
  if (typeof document < "u") {
    var r = document.querySelectorAll("style[".concat(qn, '="').concat(e, '"]'));
    r.forEach(function(n) {
      if (n[xt] === t) {
        var o;
        (o = n.parentNode) === null || o === void 0 || o.removeChild(n);
      }
    });
  }
}
var Ef = 0;
function Cf(e, t) {
  ft.set(e, (ft.get(e) || 0) - 1);
  var r = Array.from(ft.keys()), n = r.filter(function(o) {
    var i = ft.get(o) || 0;
    return i <= 0;
  });
  r.length - n.length > Ef && n.forEach(function(o) {
    Sf(o, t), ft.delete(o);
  });
}
var xf = function(t, r, n, o) {
  var i = n.getDerivativeToken(t), a = ee(ee({}, i), r);
  return o && (a = o(a)), a;
};
function wf(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = Ne(Do), o = n.cache.instanceId, i = r.salt, a = i === void 0 ? "" : i, s = r.override, l = s === void 0 ? vf : s, c = r.formatToken, f = r.getComputedToken, u = y.useMemo(function() {
    return Object.assign.apply(Object, [{}].concat(Le(t)));
  }, [t]), m = y.useMemo(function() {
    return Br(u);
  }, [u]), g = y.useMemo(function() {
    return Br(l);
  }, [l]), p = Ss("token", [a, e.id, m, g], function() {
    var d = f ? f(u, l, e) : xf(u, l, e, c), h = af(d, a);
    d._tokenKey = h, bf(h);
    var x = "".concat(yf, "-").concat(Lo(h));
    return d._hashId = x, [d, x];
  }, function(d) {
    Cf(d[0]._tokenKey, o);
  });
  return p;
}
var Es = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, Cs = "comm", xs = "rule", ws = "decl", _f = "@import", Of = "@keyframes", Tf = "@layer", Af = Math.abs, Fo = String.fromCharCode;
function _s(e) {
  return e.trim();
}
function Nr(e, t, r) {
  return e.replace(t, r);
}
function Rf(e, t) {
  return e.indexOf(t);
}
function Xt(e, t) {
  return e.charCodeAt(t) | 0;
}
function Qt(e, t, r) {
  return e.slice(t, r);
}
function et(e) {
  return e.length;
}
function Pf(e) {
  return e.length;
}
function fr(e, t) {
  return t.push(e), e;
}
var tn = 1, At = 1, Os = 0, He = 0, Ce = 0, kt = "";
function Ho(e, t, r, n, o, i, a, s) {
  return { value: e, root: t, parent: r, type: n, props: o, children: i, line: tn, column: At, length: a, return: "", siblings: s };
}
function Nf() {
  return Ce;
}
function $f() {
  return Ce = He > 0 ? Xt(kt, --He) : 0, At--, Ce === 10 && (At = 1, tn--), Ce;
}
function We() {
  return Ce = He < Os ? Xt(kt, He++) : 0, At++, Ce === 10 && (At = 1, tn++), Ce;
}
function gt() {
  return Xt(kt, He);
}
function $r() {
  return He;
}
function rn(e, t) {
  return Qt(kt, e, t);
}
function Jn(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function If(e) {
  return tn = At = 1, Os = et(kt = e), He = 0, [];
}
function Mf(e) {
  return kt = "", e;
}
function Cn(e) {
  return _s(rn(He - 1, Zn(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function kf(e) {
  for (; (Ce = gt()) && Ce < 33; )
    We();
  return Jn(e) > 2 || Jn(Ce) > 3 ? "" : " ";
}
function Lf(e, t) {
  for (; --t && We() && !(Ce < 48 || Ce > 102 || Ce > 57 && Ce < 65 || Ce > 70 && Ce < 97); )
    ;
  return rn(e, $r() + (t < 6 && gt() == 32 && We() == 32));
}
function Zn(e) {
  for (; We(); )
    switch (Ce) {
      case e:
        return He;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Zn(Ce);
        break;
      case 40:
        e === 41 && Zn(e);
        break;
      case 92:
        We();
        break;
    }
  return He;
}
function Df(e, t) {
  for (; We() && e + Ce !== 47 + 10; )
    if (e + Ce === 42 + 42 && gt() === 47)
      break;
  return "/*" + rn(t, He - 1) + "*" + Fo(e === 47 ? e : We());
}
function jf(e) {
  for (; !Jn(gt()); )
    We();
  return rn(e, He);
}
function Ff(e) {
  return Mf(Ir("", null, null, null, [""], e = If(e), 0, [0], e));
}
function Ir(e, t, r, n, o, i, a, s, l) {
  for (var c = 0, f = 0, u = a, m = 0, g = 0, p = 0, d = 1, h = 1, x = 1, E = 0, A = "", _ = o, v = i, R = n, w = A; h; )
    switch (p = E, E = We()) {
      case 40:
        if (p != 108 && Xt(w, u - 1) == 58) {
          Rf(w += Nr(Cn(E), "&", "&\f"), "&\f") != -1 && (x = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        w += Cn(E);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        w += kf(p);
        break;
      case 92:
        w += Lf($r() - 1, 7);
        continue;
      case 47:
        switch (gt()) {
          case 42:
          case 47:
            fr(Hf(Df(We(), $r()), t, r, l), l);
            break;
          default:
            w += "/";
        }
        break;
      case 123 * d:
        s[c++] = et(w) * x;
      case 125 * d:
      case 59:
      case 0:
        switch (E) {
          case 0:
          case 125:
            h = 0;
          case 59 + f:
            x == -1 && (w = Nr(w, /\f/g, "")), g > 0 && et(w) - u && fr(g > 32 ? Ii(w + ";", n, r, u - 1, l) : Ii(Nr(w, " ", "") + ";", n, r, u - 2, l), l);
            break;
          case 59:
            w += ";";
          default:
            if (fr(R = $i(w, t, r, c, f, o, s, A, _ = [], v = [], u, i), i), E === 123)
              if (f === 0)
                Ir(w, t, R, R, _, i, u, s, v);
              else
                switch (m === 99 && Xt(w, 3) === 110 ? 100 : m) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Ir(e, R, R, n && fr($i(e, R, R, 0, 0, o, s, A, o, _ = [], u, v), v), o, v, u, s, n ? _ : v);
                    break;
                  default:
                    Ir(w, R, R, R, [""], v, 0, s, v);
                }
        }
        c = f = g = 0, d = x = 1, A = w = "", u = a;
        break;
      case 58:
        u = 1 + et(w), g = p;
      default:
        if (d < 1) {
          if (E == 123)
            --d;
          else if (E == 125 && d++ == 0 && $f() == 125)
            continue;
        }
        switch (w += Fo(E), E * d) {
          case 38:
            x = f > 0 ? 1 : (w += "\f", -1);
            break;
          case 44:
            s[c++] = (et(w) - 1) * x, x = 1;
            break;
          case 64:
            gt() === 45 && (w += Cn(We())), m = gt(), f = u = et(A = w += jf($r())), E++;
            break;
          case 45:
            p === 45 && et(w) == 2 && (d = 0);
        }
    }
  return i;
}
function $i(e, t, r, n, o, i, a, s, l, c, f, u) {
  for (var m = o - 1, g = o === 0 ? i : [""], p = Pf(g), d = 0, h = 0, x = 0; d < n; ++d)
    for (var E = 0, A = Qt(e, m + 1, m = Af(h = a[d])), _ = e; E < p; ++E)
      (_ = _s(h > 0 ? g[E] + " " + A : Nr(A, /&\f/g, g[E]))) && (l[x++] = _);
  return Ho(e, t, r, o === 0 ? xs : s, l, c, f, u);
}
function Hf(e, t, r, n) {
  return Ho(e, t, r, Cs, Fo(Nf()), Qt(e, 2, -2), 0, n);
}
function Ii(e, t, r, n, o) {
  return Ho(e, t, r, ws, Qt(e, 0, n), Qt(e, n + 1, -1), n, o);
}
function eo(e, t) {
  for (var r = "", n = 0; n < e.length; n++)
    r += t(e[n], n, e, t) || "";
  return r;
}
function Bf(e, t, r, n) {
  switch (e.type) {
    case Tf:
      if (e.children.length)
        break;
    case _f:
    case ws:
      return e.return = e.return || e.value;
    case Cs:
      return "";
    case Of:
      return e.return = e.value + "{" + eo(e.children, n) + "}";
    case xs:
      if (!et(e.value = e.props.join(",")))
        return "";
  }
  return et(r = eo(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function Ts(e, t) {
  var r = t.path, n = t.parentSelectors;
  ct(!1, "[Ant Design CSS-in-JS] ".concat(r ? "Error in ".concat(r, ": ") : "").concat(e).concat(n.length ? " Selector: ".concat(n.join(" | ")) : ""));
}
var zf = function(t, r, n) {
  if (t === "content") {
    var o = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, i = ["normal", "none", "initial", "inherit", "unset"];
    (typeof r != "string" || i.indexOf(r) === -1 && !o.test(r) && (r.charAt(0) !== r.charAt(r.length - 1) || r.charAt(0) !== '"' && r.charAt(0) !== "'")) && Ts("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(r, "\"'`."), n);
  }
}, Uf = function(t, r, n) {
  t === "animation" && n.hashId && r !== "none" && Ts("You seem to be using hashed animation '".concat(r, "', in which case 'animationName' with Keyframe as value is recommended."), n);
}, Mi = "data-ant-cssinjs-cache-path", As = "_FILE_STYLE__", vt, Rs = !0;
function Wf() {
  if (!vt && (vt = {}, Qe())) {
    var e = document.createElement("div");
    e.className = Mi, e.style.position = "fixed", e.style.visibility = "hidden", e.style.top = "-9999px", document.body.appendChild(e);
    var t = getComputedStyle(e).content || "";
    t = t.replace(/^"/, "").replace(/"$/, ""), t.split(";").forEach(function(o) {
      var i = o.split(":"), a = pe(i, 2), s = a[0], l = a[1];
      vt[s] = l;
    });
    var r = document.querySelector("style[".concat(Mi, "]"));
    if (r) {
      var n;
      Rs = !1, (n = r.parentNode) === null || n === void 0 || n.removeChild(r);
    }
    document.body.removeChild(e);
  }
}
function Vf(e) {
  return Wf(), !!vt[e];
}
function Gf(e) {
  var t = vt[e], r = null;
  if (t && Qe())
    if (Rs)
      r = As;
    else {
      var n = document.querySelector("style[".concat(mt, '="').concat(vt[e], '"]'));
      n ? r = n.innerHTML : delete vt[e];
    }
  return [r, t];
}
var ki = Qe(), Ps = "_skip_check_", Ns = "_multi_value_";
function Li(e) {
  var t = eo(Ff(e), Bf);
  return t.replace(/\{%%%\:[^;];}/g, ";");
}
function Yf(e) {
  return ye(e) === "object" && e && (Ps in e || Ns in e);
}
function Kf(e, t, r) {
  if (!t)
    return e;
  var n = ".".concat(t), o = r === "low" ? ":where(".concat(n, ")") : n, i = e.split(",").map(function(a) {
    var s, l = a.trim().split(/\s+/), c = l[0] || "", f = ((s = c.match(/^\w+/)) === null || s === void 0 ? void 0 : s[0]) || "";
    return c = "".concat(f).concat(o).concat(c.slice(f.length)), [c].concat(Le(l.slice(1))).join(" ");
  });
  return i.join(",");
}
var qf = function e(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  }, o = n.root, i = n.injectHash, a = n.parentSelectors, s = r.hashId, l = r.layer, c = r.path, f = r.hashPriority, u = r.transformers, m = u === void 0 ? [] : u, g = r.linters, p = g === void 0 ? [] : g, d = "", h = {};
  function x(R) {
    var w = R.getName(s);
    if (!h[w]) {
      var B = e(R.style, r, {
        root: !1,
        parentSelectors: a
      }), D = pe(B, 1), $ = D[0];
      h[w] = "@keyframes ".concat(R.getName(s)).concat($);
    }
  }
  function E(R) {
    var w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return R.forEach(function(B) {
      Array.isArray(B) ? E(B, w) : B && w.push(B);
    }), w;
  }
  var A = E(Array.isArray(t) ? t : [t]);
  if (A.forEach(function(R) {
    var w = typeof R == "string" && !o ? {} : R;
    if (typeof w == "string")
      d += "".concat(w, `
`);
    else if (w._keyframe)
      x(w);
    else {
      var B = m.reduce(function(D, $) {
        var z;
        return ($ == null || (z = $.visit) === null || z === void 0 ? void 0 : z.call($, D)) || D;
      }, w);
      Object.keys(B).forEach(function(D) {
        var $ = B[D];
        if (ye($) === "object" && $ && (D !== "animationName" || !$._keyframe) && !Yf($)) {
          var z = !1, C = D.trim(), S = !1;
          (o || i) && s ? C.startsWith("@") ? z = !0 : C = Kf(D, s, f) : o && !s && (C === "&" || C === "") && (C = "", S = !0);
          var O = e($, r, {
            root: S,
            injectHash: z,
            parentSelectors: [].concat(Le(a), [C])
          }), N = pe(O, 2), j = N[0], M = N[1];
          h = ee(ee({}, h), M), d += "".concat(C).concat(j);
        } else {
          let X = function(re, I) {
            process.env.NODE_ENV !== "production" && (ye($) !== "object" || !($ != null && $[Ps])) && [zf, Uf].concat(Le(p)).forEach(function(W) {
              return W(re, I, {
                path: c,
                hashId: s,
                parentSelectors: a
              });
            });
            var L = re.replace(/[A-Z]/g, function(W) {
              return "-".concat(W.toLowerCase());
            }), F = I;
            !Es[re] && typeof F == "number" && F !== 0 && (F = "".concat(F, "px")), re === "animationName" && I !== null && I !== void 0 && I._keyframe && (x(I), F = I.getName(s)), d += "".concat(L, ":").concat(F, ";");
          };
          var U, Q = (U = $?.value) !== null && U !== void 0 ? U : $;
          ye($) === "object" && $ !== null && $ !== void 0 && $[Ns] && Array.isArray(Q) ? Q.forEach(function(re) {
            X(D, re);
          }) : X(D, Q);
        }
      });
    }
  }), !o)
    d = "{".concat(d, "}");
  else if (l && cf()) {
    var _ = l.split(","), v = _[_.length - 1].trim();
    d = "@layer ".concat(v, " {").concat(d, "}"), _.length > 1 && (d = "@layer ".concat(l, "{%%%:%}").concat(d));
  }
  return [d, h];
};
function Xf(e, t) {
  return Lo("".concat(e.join("%")).concat(t));
}
function Qf() {
  return null;
}
function to(e, t) {
  var r = e.token, n = e.path, o = e.hashId, i = e.layer, a = e.nonce, s = e.clientOnly, l = y.useContext(Do), c = l.autoClear, f = l.mock, u = l.defaultCache, m = l.hashPriority, g = l.container, p = l.ssrInline, d = l.transformers, h = l.linters, x = l.cache, E = r._tokenKey, A = [E].concat(Le(n)), _ = ki;
  process.env.NODE_ENV !== "production" && f !== void 0 && (_ = f === "client");
  var v = Ss(
    "style",
    A,
    // Create cache if needed
    function() {
      var $ = A.join("|");
      if (Vf($)) {
        var z = Gf($), C = pe(z, 2), S = C[0], O = C[1];
        if (S)
          return [S, E, O, {}, s];
      }
      var N = t(), j = qf(N, {
        hashId: o,
        hashPriority: m,
        layer: i,
        path: n.join("-"),
        transformers: d,
        linters: h
      }), M = pe(j, 2), U = M[0], Q = M[1], X = Li(U), re = Xf(A, X);
      return [X, E, re, Q, s];
    },
    // Remove cache if no need
    function($, z) {
      var C = pe($, 3), S = C[2];
      (z || c) && ki && hs(S, {
        mark: mt
      });
    },
    // Effect: Inject style here
    function($) {
      var z = pe($, 4), C = z[0];
      z[1];
      var S = z[2], O = z[3];
      if (_ && C !== As) {
        var N = {
          mark: mt,
          prepend: "queue",
          attachTo: g
        }, j = typeof a == "function" ? a() : a;
        j && (N.csp = {
          nonce: j
        });
        var M = qt(C, S, N);
        M[xt] = x.instanceId, M.setAttribute(qn, E), process.env.NODE_ENV !== "production" && M.setAttribute(Qu, A.join("|")), Object.keys(O).forEach(function(U) {
          qt(Li(O[U]), "_effect-".concat(U), N);
        });
      }
    }
  ), R = pe(v, 3), w = R[0], B = R[1], D = R[2];
  return function($) {
    var z;
    if (!p || _ || !u)
      z = /* @__PURE__ */ y.createElement(Qf, null);
    else {
      var C;
      z = /* @__PURE__ */ y.createElement("style", $e({}, (C = {}, ae(C, qn, B), ae(C, mt, D), C), {
        dangerouslySetInnerHTML: {
          __html: w
        }
      }));
    }
    return /* @__PURE__ */ y.createElement(y.Fragment, null, z, $);
  };
}
var Di = /* @__PURE__ */ function() {
  function e(t, r) {
    It(this, e), ae(this, "name", void 0), ae(this, "style", void 0), ae(this, "_keyframe", !0), this.name = t, this.style = r;
  }
  return Mt(e, [{
    key: "getName",
    value: function() {
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return r ? "".concat(r, "-").concat(this.name) : this.name;
    }
  }]), e;
}();
function Et(e) {
  return e.notSplit = !0, e;
}
Et(["borderTop", "borderBottom"]), Et(["borderTop"]), Et(["borderBottom"]), Et(["borderLeft", "borderRight"]), Et(["borderLeft"]), Et(["borderRight"]);
var Jf = /* @__PURE__ */ nr({});
const Bo = Jf;
function Zf(e) {
  return ms(e) || as(e) || Mo(e) || gs();
}
function ro(e, t) {
  for (var r = e, n = 0; n < t.length; n += 1) {
    if (r == null)
      return;
    r = r[t[n]];
  }
  return r;
}
function $s(e, t, r, n) {
  if (!t.length)
    return r;
  var o = Zf(t), i = o[0], a = o.slice(1), s;
  return !e && typeof i == "number" ? s = [] : Array.isArray(e) ? s = Le(e) : s = ee({}, e), n && r === void 0 && a.length === 1 ? delete s[i][a[0]] : s[i] = $s(s[i], a, r, n), s;
}
function xn(e, t, r) {
  var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return t.length && n && r === void 0 && !ro(e, t.slice(0, -1)) ? e : $s(e, t, r, n);
}
function ed(e) {
  return ye(e) === "object" && e !== null && Object.getPrototypeOf(e) === Object.prototype;
}
function ji(e) {
  return Array.isArray(e) ? [] : {};
}
var td = typeof Reflect > "u" ? Object.keys : Reflect.ownKeys;
function rd() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n = ji(t[0]);
  return t.forEach(function(o) {
    function i(a, s) {
      var l = new Set(s), c = ro(o, a), f = Array.isArray(c);
      if (f || ed(c)) {
        if (!l.has(c)) {
          l.add(c);
          var u = ro(n, a);
          f ? n = xn(n, a, []) : (!u || ye(u) !== "object") && (n = xn(n, a, ji(c))), td(c).forEach(function(m) {
            i([].concat(Le(a), [m]), l);
          });
        }
      } else
        n = xn(n, a, c);
    }
    i([]);
  }), n;
}
function nd() {
}
let Is = nd;
process.env.NODE_ENV !== "production" && (Is = (e, t, r) => {
  ct(e, `[antd: ${t}] ${r}`), process.env.NODE_ENV === "test" && es();
});
const qe = Is, od = /* @__PURE__ */ nr(void 0), id = {
  // Options.jsx
  items_per_page: "/ page",
  jump_to: "Go to",
  jump_to_confirm: "confirm",
  page: "Page",
  // Pagination.jsx
  prev_page: "Previous Page",
  next_page: "Next Page",
  prev_5: "Previous 5 Pages",
  next_5: "Next 5 Pages",
  prev_3: "Previous 3 Pages",
  next_3: "Next 3 Pages",
  page_size: "Page Size"
};
var ad = {
  locale: "en_US",
  today: "Today",
  now: "Now",
  backToToday: "Back to today",
  ok: "OK",
  clear: "Clear",
  month: "Month",
  year: "Year",
  timeSelect: "select time",
  dateSelect: "select date",
  weekSelect: "Choose a week",
  monthSelect: "Choose a month",
  yearSelect: "Choose a year",
  decadeSelect: "Choose a decade",
  yearFormat: "YYYY",
  dateFormat: "M/D/YYYY",
  dayFormat: "D",
  dateTimeFormat: "M/D/YYYY HH:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "Previous month (PageUp)",
  nextMonth: "Next month (PageDown)",
  previousYear: "Last year (Control + left)",
  nextYear: "Next year (Control + right)",
  previousDecade: "Last decade",
  nextDecade: "Next decade",
  previousCentury: "Last century",
  nextCentury: "Next century"
};
const sd = {
  placeholder: "Select time",
  rangePlaceholder: ["Start time", "End time"]
}, Ms = sd, cd = {
  lang: Object.assign({
    placeholder: "Select date",
    yearPlaceholder: "Select year",
    quarterPlaceholder: "Select quarter",
    monthPlaceholder: "Select month",
    weekPlaceholder: "Select week",
    rangePlaceholder: ["Start date", "End date"],
    rangeYearPlaceholder: ["Start year", "End year"],
    rangeQuarterPlaceholder: ["Start quarter", "End quarter"],
    rangeMonthPlaceholder: ["Start month", "End month"],
    rangeWeekPlaceholder: ["Start week", "End week"]
  }, ad),
  timePickerLocale: Object.assign({}, Ms)
}, Fi = cd, Ie = "${label} is not a valid ${type}", ld = {
  locale: "en",
  Pagination: id,
  DatePicker: Fi,
  TimePicker: Ms,
  Calendar: Fi,
  global: {
    placeholder: "Please select"
  },
  Table: {
    filterTitle: "Filter menu",
    filterConfirm: "OK",
    filterReset: "Reset",
    filterEmptyText: "No filters",
    filterCheckall: "Select all items",
    filterSearchPlaceholder: "Search in filters",
    emptyText: "No data",
    selectAll: "Select current page",
    selectInvert: "Invert current page",
    selectNone: "Clear all data",
    selectionAll: "Select all data",
    sortTitle: "Sort",
    expand: "Expand row",
    collapse: "Collapse row",
    triggerDesc: "Click to sort descending",
    triggerAsc: "Click to sort ascending",
    cancelSort: "Click to cancel sorting"
  },
  Tour: {
    Next: "Next",
    Previous: "Previous",
    Finish: "Finish"
  },
  Modal: {
    okText: "OK",
    cancelText: "Cancel",
    justOkText: "OK"
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "Cancel"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Search here",
    itemUnit: "item",
    itemsUnit: "items",
    remove: "Remove",
    selectCurrent: "Select current page",
    removeCurrent: "Remove current page",
    selectAll: "Select all data",
    removeAll: "Remove all data",
    selectInvert: "Invert current page"
  },
  Upload: {
    uploading: "Uploading...",
    removeFile: "Remove file",
    uploadError: "Upload error",
    previewFile: "Preview file",
    downloadFile: "Download file"
  },
  Empty: {
    description: "No data"
  },
  Icon: {
    icon: "icon"
  },
  Text: {
    edit: "Edit",
    copy: "Copy",
    copied: "Copied",
    expand: "Expand"
  },
  PageHeader: {
    back: "Back"
  },
  Form: {
    optional: "(optional)",
    defaultValidateMessages: {
      default: "Field validation error for ${label}",
      required: "Please enter ${label}",
      enum: "${label} must be one of [${enum}]",
      whitespace: "${label} cannot be a blank character",
      date: {
        format: "${label} date format is invalid",
        parse: "${label} cannot be converted to a date",
        invalid: "${label} is an invalid date"
      },
      types: {
        string: Ie,
        method: Ie,
        array: Ie,
        object: Ie,
        number: Ie,
        date: Ie,
        boolean: Ie,
        integer: Ie,
        float: Ie,
        regexp: Ie,
        email: Ie,
        url: Ie,
        hex: Ie
      },
      string: {
        len: "${label} must be ${len} characters",
        min: "${label} must be at least ${min} characters",
        max: "${label} must be up to ${max} characters",
        range: "${label} must be between ${min}-${max} characters"
      },
      number: {
        len: "${label} must be equal to ${len}",
        min: "${label} must be minimum ${min}",
        max: "${label} must be maximum ${max}",
        range: "${label} must be between ${min}-${max}"
      },
      array: {
        len: "Must be ${len} ${label}",
        min: "At least ${min} ${label}",
        max: "At most ${max} ${label}",
        range: "The amount of ${label} must be between ${min}-${max}"
      },
      pattern: {
        mismatch: "${label} does not match the pattern ${pattern}"
      }
    }
  },
  Image: {
    preview: "Preview"
  },
  QRCode: {
    expired: "QR code expired",
    refresh: "Refresh"
  },
  ColorPicker: {
    presetEmpty: "Empty"
  }
}, zo = ld;
let wn = Object.assign({}, zo.Modal);
function Hi(e) {
  e ? wn = Object.assign(Object.assign({}, wn), e) : wn = Object.assign({}, zo.Modal);
}
const ud = /* @__PURE__ */ nr(void 0), ks = ud, Ls = "internalMark", Ds = (e) => {
  const {
    locale: t = {},
    children: r,
    _ANT_MARK__: n
  } = e;
  process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && qe(n === Ls, "LocaleProvider", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale"), y.useEffect(() => (Hi(t && t.Modal), () => {
    Hi();
  }), [t]);
  const o = y.useMemo(() => Object.assign(Object.assign({}, t), {
    exist: !0
  }), [t]);
  return /* @__PURE__ */ y.createElement(ks.Provider, {
    value: o
  }, r);
};
process.env.NODE_ENV !== "production" && (Ds.displayName = "LocaleProvider");
const fd = Ds, dd = "5.7.3";
function Re(e, t) {
  pd(e) && (e = "100%");
  var r = hd(e);
  return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), r && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e);
}
function dr(e) {
  return Math.min(1, Math.max(0, e));
}
function pd(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function hd(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function js(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function pr(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function pt(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function md(e, t, r) {
  return {
    r: Re(e, 255) * 255,
    g: Re(t, 255) * 255,
    b: Re(r, 255) * 255
  };
}
function Bi(e, t, r) {
  e = Re(e, 255), t = Re(t, 255), r = Re(r, 255);
  var n = Math.max(e, t, r), o = Math.min(e, t, r), i = 0, a = 0, s = (n + o) / 2;
  if (n === o)
    a = 0, i = 0;
  else {
    var l = n - o;
    switch (a = s > 0.5 ? l / (2 - n - o) : l / (n + o), n) {
      case e:
        i = (t - r) / l + (t < r ? 6 : 0);
        break;
      case t:
        i = (r - e) / l + 2;
        break;
      case r:
        i = (e - t) / l + 4;
        break;
    }
    i /= 6;
  }
  return { h: i, s: a, l: s };
}
function _n(e, t, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (t - e) * (6 * r) : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e;
}
function gd(e, t, r) {
  var n, o, i;
  if (e = Re(e, 360), t = Re(t, 100), r = Re(r, 100), t === 0)
    o = r, i = r, n = r;
  else {
    var a = r < 0.5 ? r * (1 + t) : r + t - r * t, s = 2 * r - a;
    n = _n(s, a, e + 1 / 3), o = _n(s, a, e), i = _n(s, a, e - 1 / 3);
  }
  return { r: n * 255, g: o * 255, b: i * 255 };
}
function no(e, t, r) {
  e = Re(e, 255), t = Re(t, 255), r = Re(r, 255);
  var n = Math.max(e, t, r), o = Math.min(e, t, r), i = 0, a = n, s = n - o, l = n === 0 ? 0 : s / n;
  if (n === o)
    i = 0;
  else {
    switch (n) {
      case e:
        i = (t - r) / s + (t < r ? 6 : 0);
        break;
      case t:
        i = (r - e) / s + 2;
        break;
      case r:
        i = (e - t) / s + 4;
        break;
    }
    i /= 6;
  }
  return { h: i, s: l, v: a };
}
function vd(e, t, r) {
  e = Re(e, 360) * 6, t = Re(t, 100), r = Re(r, 100);
  var n = Math.floor(e), o = e - n, i = r * (1 - t), a = r * (1 - o * t), s = r * (1 - (1 - o) * t), l = n % 6, c = [r, a, i, i, s, r][l], f = [s, r, r, a, i, i][l], u = [i, i, s, r, r, a][l];
  return { r: c * 255, g: f * 255, b: u * 255 };
}
function oo(e, t, r, n) {
  var o = [
    pt(Math.round(e).toString(16)),
    pt(Math.round(t).toString(16)),
    pt(Math.round(r).toString(16))
  ];
  return n && o[0].startsWith(o[0].charAt(1)) && o[1].startsWith(o[1].charAt(1)) && o[2].startsWith(o[2].charAt(1)) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) : o.join("");
}
function yd(e, t, r, n, o) {
  var i = [
    pt(Math.round(e).toString(16)),
    pt(Math.round(t).toString(16)),
    pt(Math.round(r).toString(16)),
    pt(bd(n))
  ];
  return o && i[0].startsWith(i[0].charAt(1)) && i[1].startsWith(i[1].charAt(1)) && i[2].startsWith(i[2].charAt(1)) && i[3].startsWith(i[3].charAt(1)) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) + i[3].charAt(0) : i.join("");
}
function bd(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function zi(e) {
  return Me(e) / 255;
}
function Me(e) {
  return parseInt(e, 16);
}
function Sd(e) {
  return {
    r: e >> 16,
    g: (e & 65280) >> 8,
    b: e & 255
  };
}
var io = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};
function Ct(e) {
  var t = { r: 0, g: 0, b: 0 }, r = 1, n = null, o = null, i = null, a = !1, s = !1;
  return typeof e == "string" && (e = xd(e)), typeof e == "object" && (Je(e.r) && Je(e.g) && Je(e.b) ? (t = md(e.r, e.g, e.b), a = !0, s = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : Je(e.h) && Je(e.s) && Je(e.v) ? (n = pr(e.s), o = pr(e.v), t = vd(e.h, n, o), a = !0, s = "hsv") : Je(e.h) && Je(e.s) && Je(e.l) && (n = pr(e.s), i = pr(e.l), t = gd(e.h, n, i), a = !0, s = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (r = e.a)), r = js(r), {
    ok: a,
    format: e.format || s,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: r
  };
}
var Ed = "[-\\+]?\\d+%?", Cd = "[-\\+]?\\d*\\.\\d+%?", at = "(?:".concat(Cd, ")|(?:").concat(Ed, ")"), On = "[\\s|\\(]+(".concat(at, ")[,|\\s]+(").concat(at, ")[,|\\s]+(").concat(at, ")\\s*\\)?"), Tn = "[\\s|\\(]+(".concat(at, ")[,|\\s]+(").concat(at, ")[,|\\s]+(").concat(at, ")[,|\\s]+(").concat(at, ")\\s*\\)?"), Be = {
  CSS_UNIT: new RegExp(at),
  rgb: new RegExp("rgb" + On),
  rgba: new RegExp("rgba" + Tn),
  hsl: new RegExp("hsl" + On),
  hsla: new RegExp("hsla" + Tn),
  hsv: new RegExp("hsv" + On),
  hsva: new RegExp("hsva" + Tn),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function xd(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var t = !1;
  if (io[e])
    e = io[e], t = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var r = Be.rgb.exec(e);
  return r ? { r: r[1], g: r[2], b: r[3] } : (r = Be.rgba.exec(e), r ? { r: r[1], g: r[2], b: r[3], a: r[4] } : (r = Be.hsl.exec(e), r ? { h: r[1], s: r[2], l: r[3] } : (r = Be.hsla.exec(e), r ? { h: r[1], s: r[2], l: r[3], a: r[4] } : (r = Be.hsv.exec(e), r ? { h: r[1], s: r[2], v: r[3] } : (r = Be.hsva.exec(e), r ? { h: r[1], s: r[2], v: r[3], a: r[4] } : (r = Be.hex8.exec(e), r ? {
    r: Me(r[1]),
    g: Me(r[2]),
    b: Me(r[3]),
    a: zi(r[4]),
    format: t ? "name" : "hex8"
  } : (r = Be.hex6.exec(e), r ? {
    r: Me(r[1]),
    g: Me(r[2]),
    b: Me(r[3]),
    format: t ? "name" : "hex"
  } : (r = Be.hex4.exec(e), r ? {
    r: Me(r[1] + r[1]),
    g: Me(r[2] + r[2]),
    b: Me(r[3] + r[3]),
    a: zi(r[4] + r[4]),
    format: t ? "name" : "hex8"
  } : (r = Be.hex3.exec(e), r ? {
    r: Me(r[1] + r[1]),
    g: Me(r[2] + r[2]),
    b: Me(r[3] + r[3]),
    format: t ? "name" : "hex"
  } : !1)))))))));
}
function Je(e) {
  return !!Be.CSS_UNIT.exec(String(e));
}
var ke = (
  /** @class */
  function() {
    function e(t, r) {
      t === void 0 && (t = ""), r === void 0 && (r = {});
      var n;
      if (t instanceof e)
        return t;
      typeof t == "number" && (t = Sd(t)), this.originalInput = t;
      var o = Ct(t);
      this.originalInput = t, this.r = o.r, this.g = o.g, this.b = o.b, this.a = o.a, this.roundA = Math.round(100 * this.a) / 100, this.format = (n = r.format) !== null && n !== void 0 ? n : o.format, this.gradientType = r.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = o.ok;
    }
    return e.prototype.isDark = function() {
      return this.getBrightness() < 128;
    }, e.prototype.isLight = function() {
      return !this.isDark();
    }, e.prototype.getBrightness = function() {
      var t = this.toRgb();
      return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3;
    }, e.prototype.getLuminance = function() {
      var t = this.toRgb(), r, n, o, i = t.r / 255, a = t.g / 255, s = t.b / 255;
      return i <= 0.03928 ? r = i / 12.92 : r = Math.pow((i + 0.055) / 1.055, 2.4), a <= 0.03928 ? n = a / 12.92 : n = Math.pow((a + 0.055) / 1.055, 2.4), s <= 0.03928 ? o = s / 12.92 : o = Math.pow((s + 0.055) / 1.055, 2.4), 0.2126 * r + 0.7152 * n + 0.0722 * o;
    }, e.prototype.getAlpha = function() {
      return this.a;
    }, e.prototype.setAlpha = function(t) {
      return this.a = js(t), this.roundA = Math.round(100 * this.a) / 100, this;
    }, e.prototype.isMonochrome = function() {
      var t = this.toHsl().s;
      return t === 0;
    }, e.prototype.toHsv = function() {
      var t = no(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
    }, e.prototype.toHsvString = function() {
      var t = no(this.r, this.g, this.b), r = Math.round(t.h * 360), n = Math.round(t.s * 100), o = Math.round(t.v * 100);
      return this.a === 1 ? "hsv(".concat(r, ", ").concat(n, "%, ").concat(o, "%)") : "hsva(".concat(r, ", ").concat(n, "%, ").concat(o, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHsl = function() {
      var t = Bi(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
    }, e.prototype.toHslString = function() {
      var t = Bi(this.r, this.g, this.b), r = Math.round(t.h * 360), n = Math.round(t.s * 100), o = Math.round(t.l * 100);
      return this.a === 1 ? "hsl(".concat(r, ", ").concat(n, "%, ").concat(o, "%)") : "hsla(".concat(r, ", ").concat(n, "%, ").concat(o, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHex = function(t) {
      return t === void 0 && (t = !1), oo(this.r, this.g, this.b, t);
    }, e.prototype.toHexString = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex(t);
    }, e.prototype.toHex8 = function(t) {
      return t === void 0 && (t = !1), yd(this.r, this.g, this.b, this.a, t);
    }, e.prototype.toHex8String = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex8(t);
    }, e.prototype.toHexShortString = function(t) {
      return t === void 0 && (t = !1), this.a === 1 ? this.toHexString(t) : this.toHex8String(t);
    }, e.prototype.toRgb = function() {
      return {
        r: Math.round(this.r),
        g: Math.round(this.g),
        b: Math.round(this.b),
        a: this.a
      };
    }, e.prototype.toRgbString = function() {
      var t = Math.round(this.r), r = Math.round(this.g), n = Math.round(this.b);
      return this.a === 1 ? "rgb(".concat(t, ", ").concat(r, ", ").concat(n, ")") : "rgba(".concat(t, ", ").concat(r, ", ").concat(n, ", ").concat(this.roundA, ")");
    }, e.prototype.toPercentageRgb = function() {
      var t = function(r) {
        return "".concat(Math.round(Re(r, 255) * 100), "%");
      };
      return {
        r: t(this.r),
        g: t(this.g),
        b: t(this.b),
        a: this.a
      };
    }, e.prototype.toPercentageRgbString = function() {
      var t = function(r) {
        return Math.round(Re(r, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%)") : "rgba(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%, ").concat(this.roundA, ")");
    }, e.prototype.toName = function() {
      if (this.a === 0)
        return "transparent";
      if (this.a < 1)
        return !1;
      for (var t = "#" + oo(this.r, this.g, this.b, !1), r = 0, n = Object.entries(io); r < n.length; r++) {
        var o = n[r], i = o[0], a = o[1];
        if (t === a)
          return i;
      }
      return !1;
    }, e.prototype.toString = function(t) {
      var r = !!t;
      t = t ?? this.format;
      var n = !1, o = this.a < 1 && this.a >= 0, i = !r && o && (t.startsWith("hex") || t === "name");
      return i ? t === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (t === "rgb" && (n = this.toRgbString()), t === "prgb" && (n = this.toPercentageRgbString()), (t === "hex" || t === "hex6") && (n = this.toHexString()), t === "hex3" && (n = this.toHexString(!0)), t === "hex4" && (n = this.toHex8String(!0)), t === "hex8" && (n = this.toHex8String()), t === "name" && (n = this.toName()), t === "hsl" && (n = this.toHslString()), t === "hsv" && (n = this.toHsvString()), n || this.toHexString());
    }, e.prototype.toNumber = function() {
      return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
    }, e.prototype.clone = function() {
      return new e(this.toString());
    }, e.prototype.lighten = function(t) {
      t === void 0 && (t = 10);
      var r = this.toHsl();
      return r.l += t / 100, r.l = dr(r.l), new e(r);
    }, e.prototype.brighten = function(t) {
      t === void 0 && (t = 10);
      var r = this.toRgb();
      return r.r = Math.max(0, Math.min(255, r.r - Math.round(255 * -(t / 100)))), r.g = Math.max(0, Math.min(255, r.g - Math.round(255 * -(t / 100)))), r.b = Math.max(0, Math.min(255, r.b - Math.round(255 * -(t / 100)))), new e(r);
    }, e.prototype.darken = function(t) {
      t === void 0 && (t = 10);
      var r = this.toHsl();
      return r.l -= t / 100, r.l = dr(r.l), new e(r);
    }, e.prototype.tint = function(t) {
      return t === void 0 && (t = 10), this.mix("white", t);
    }, e.prototype.shade = function(t) {
      return t === void 0 && (t = 10), this.mix("black", t);
    }, e.prototype.desaturate = function(t) {
      t === void 0 && (t = 10);
      var r = this.toHsl();
      return r.s -= t / 100, r.s = dr(r.s), new e(r);
    }, e.prototype.saturate = function(t) {
      t === void 0 && (t = 10);
      var r = this.toHsl();
      return r.s += t / 100, r.s = dr(r.s), new e(r);
    }, e.prototype.greyscale = function() {
      return this.desaturate(100);
    }, e.prototype.spin = function(t) {
      var r = this.toHsl(), n = (r.h + t) % 360;
      return r.h = n < 0 ? 360 + n : n, new e(r);
    }, e.prototype.mix = function(t, r) {
      r === void 0 && (r = 50);
      var n = this.toRgb(), o = new e(t).toRgb(), i = r / 100, a = {
        r: (o.r - n.r) * i + n.r,
        g: (o.g - n.g) * i + n.g,
        b: (o.b - n.b) * i + n.b,
        a: (o.a - n.a) * i + n.a
      };
      return new e(a);
    }, e.prototype.analogous = function(t, r) {
      t === void 0 && (t = 6), r === void 0 && (r = 30);
      var n = this.toHsl(), o = 360 / r, i = [this];
      for (n.h = (n.h - (o * t >> 1) + 720) % 360; --t; )
        n.h = (n.h + o) % 360, i.push(new e(n));
      return i;
    }, e.prototype.complement = function() {
      var t = this.toHsl();
      return t.h = (t.h + 180) % 360, new e(t);
    }, e.prototype.monochromatic = function(t) {
      t === void 0 && (t = 6);
      for (var r = this.toHsv(), n = r.h, o = r.s, i = r.v, a = [], s = 1 / t; t--; )
        a.push(new e({ h: n, s: o, v: i })), i = (i + s) % 1;
      return a;
    }, e.prototype.splitcomplement = function() {
      var t = this.toHsl(), r = t.h;
      return [
        this,
        new e({ h: (r + 72) % 360, s: t.s, l: t.l }),
        new e({ h: (r + 216) % 360, s: t.s, l: t.l })
      ];
    }, e.prototype.onBackground = function(t) {
      var r = this.toRgb(), n = new e(t).toRgb(), o = r.a + n.a * (1 - r.a);
      return new e({
        r: (r.r * r.a + n.r * n.a * (1 - r.a)) / o,
        g: (r.g * r.a + n.g * n.a * (1 - r.a)) / o,
        b: (r.b * r.a + n.b * n.a * (1 - r.a)) / o,
        a: o
      });
    }, e.prototype.triad = function() {
      return this.polyad(3);
    }, e.prototype.tetrad = function() {
      return this.polyad(4);
    }, e.prototype.polyad = function(t) {
      for (var r = this.toHsl(), n = r.h, o = [this], i = 360 / t, a = 1; a < t; a++)
        o.push(new e({ h: (n + a * i) % 360, s: r.s, l: r.l }));
      return o;
    }, e.prototype.equals = function(t) {
      return this.toRgbString() === new e(t).toRgbString();
    }, e;
  }()
), hr = 2, Ui = 0.16, wd = 0.05, _d = 0.05, Od = 0.15, Fs = 5, Hs = 4, Td = [{
  index: 7,
  opacity: 0.15
}, {
  index: 6,
  opacity: 0.25
}, {
  index: 5,
  opacity: 0.3
}, {
  index: 5,
  opacity: 0.45
}, {
  index: 5,
  opacity: 0.65
}, {
  index: 5,
  opacity: 0.85
}, {
  index: 4,
  opacity: 0.9
}, {
  index: 3,
  opacity: 0.95
}, {
  index: 2,
  opacity: 0.97
}, {
  index: 1,
  opacity: 0.98
}];
function Wi(e) {
  var t = e.r, r = e.g, n = e.b, o = no(t, r, n);
  return {
    h: o.h * 360,
    s: o.s,
    v: o.v
  };
}
function mr(e) {
  var t = e.r, r = e.g, n = e.b;
  return "#".concat(oo(t, r, n, !1));
}
function Ad(e, t, r) {
  var n = r / 100, o = {
    r: (t.r - e.r) * n + e.r,
    g: (t.g - e.g) * n + e.g,
    b: (t.b - e.b) * n + e.b
  };
  return o;
}
function Vi(e, t, r) {
  var n;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? n = r ? Math.round(e.h) - hr * t : Math.round(e.h) + hr * t : n = r ? Math.round(e.h) + hr * t : Math.round(e.h) - hr * t, n < 0 ? n += 360 : n >= 360 && (n -= 360), n;
}
function Gi(e, t, r) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  var n;
  return r ? n = e.s - Ui * t : t === Hs ? n = e.s + Ui : n = e.s + wd * t, n > 1 && (n = 1), r && t === Fs && n > 0.1 && (n = 0.1), n < 0.06 && (n = 0.06), Number(n.toFixed(2));
}
function Yi(e, t, r) {
  var n;
  return r ? n = e.v + _d * t : n = e.v - Od * t, n > 1 && (n = 1), Number(n.toFixed(2));
}
function yt(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = [], n = Ct(e), o = Fs; o > 0; o -= 1) {
    var i = Wi(n), a = mr(Ct({
      h: Vi(i, o, !0),
      s: Gi(i, o, !0),
      v: Yi(i, o, !0)
    }));
    r.push(a);
  }
  r.push(mr(n));
  for (var s = 1; s <= Hs; s += 1) {
    var l = Wi(n), c = mr(Ct({
      h: Vi(l, s),
      s: Gi(l, s),
      v: Yi(l, s)
    }));
    r.push(c);
  }
  return t.theme === "dark" ? Td.map(function(f) {
    var u = f.index, m = f.opacity, g = mr(Ad(Ct(t.backgroundColor || "#141414"), Ct(r[u]), m * 100));
    return g;
  }) : r;
}
var An = {
  red: "#F5222D",
  volcano: "#FA541C",
  orange: "#FA8C16",
  gold: "#FAAD14",
  yellow: "#FADB14",
  lime: "#A0D911",
  green: "#52C41A",
  cyan: "#13C2C2",
  blue: "#1677FF",
  geekblue: "#2F54EB",
  purple: "#722ED1",
  magenta: "#EB2F96",
  grey: "#666666"
}, Mr = {}, Rn = {};
Object.keys(An).forEach(function(e) {
  Mr[e] = yt(An[e]), Mr[e].primary = Mr[e][5], Rn[e] = yt(An[e], {
    theme: "dark",
    backgroundColor: "#141414"
  }), Rn[e].primary = Rn[e][5];
});
var Rd = Mr.blue;
const Pd = (e) => {
  const {
    controlHeight: t
  } = e;
  return {
    controlHeightSM: t * 0.75,
    controlHeightXS: t * 0.5,
    controlHeightLG: t * 1.25
  };
}, Nd = Pd;
function $d(e) {
  const {
    sizeUnit: t,
    sizeStep: r
  } = e;
  return {
    sizeXXL: t * (r + 8),
    sizeXL: t * (r + 4),
    sizeLG: t * (r + 2),
    sizeMD: t * (r + 1),
    sizeMS: t * r,
    size: t * r,
    sizeSM: t * (r - 1),
    sizeXS: t * (r - 2),
    sizeXXS: t * (r - 3)
    // 4
  };
}
const Bs = {
  blue: "#1677ff",
  purple: "#722ED1",
  cyan: "#13C2C2",
  green: "#52C41A",
  magenta: "#EB2F96",
  pink: "#eb2f96",
  red: "#F5222D",
  orange: "#FA8C16",
  yellow: "#FADB14",
  volcano: "#FA541C",
  geekblue: "#2F54EB",
  gold: "#FAAD14",
  lime: "#A0D911"
}, Id = Object.assign(Object.assign({}, Bs), {
  // Color
  colorPrimary: "#1677ff",
  colorSuccess: "#52c41a",
  colorWarning: "#faad14",
  colorError: "#ff4d4f",
  colorInfo: "#1677ff",
  colorLink: "",
  colorTextBase: "",
  colorBgBase: "",
  // Font
  fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,
  fontFamilyCode: "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
  fontSize: 14,
  // Line
  lineWidth: 1,
  lineType: "solid",
  // Motion
  motionUnit: 0.1,
  motionBase: 0,
  motionEaseOutCirc: "cubic-bezier(0.08, 0.82, 0.17, 1)",
  motionEaseInOutCirc: "cubic-bezier(0.78, 0.14, 0.15, 0.86)",
  motionEaseOut: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  motionEaseInOut: "cubic-bezier(0.645, 0.045, 0.355, 1)",
  motionEaseOutBack: "cubic-bezier(0.12, 0.4, 0.29, 1.46)",
  motionEaseInBack: "cubic-bezier(0.71, -0.46, 0.88, 0.6)",
  motionEaseInQuint: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
  motionEaseOutQuint: "cubic-bezier(0.23, 1, 0.32, 1)",
  // Radius
  borderRadius: 6,
  // Size
  sizeUnit: 4,
  sizeStep: 4,
  sizePopupArrow: 16,
  // Control Base
  controlHeight: 32,
  // zIndex
  zIndexBase: 0,
  zIndexPopupBase: 1e3,
  // Image
  opacityImage: 1,
  // Wireframe
  wireframe: !1,
  // Motion
  motion: !0
}), nn = Id;
function Md(e, t) {
  let {
    generateColorPalettes: r,
    generateNeutralColorPalettes: n
  } = t;
  const {
    colorSuccess: o,
    colorWarning: i,
    colorError: a,
    colorInfo: s,
    colorPrimary: l,
    colorBgBase: c,
    colorTextBase: f
  } = e, u = r(l), m = r(o), g = r(i), p = r(a), d = r(s), h = n(c, f), x = e.colorLink || e.colorInfo, E = r(x);
  return Object.assign(Object.assign({}, h), {
    colorPrimaryBg: u[1],
    colorPrimaryBgHover: u[2],
    colorPrimaryBorder: u[3],
    colorPrimaryBorderHover: u[4],
    colorPrimaryHover: u[5],
    colorPrimary: u[6],
    colorPrimaryActive: u[7],
    colorPrimaryTextHover: u[8],
    colorPrimaryText: u[9],
    colorPrimaryTextActive: u[10],
    colorSuccessBg: m[1],
    colorSuccessBgHover: m[2],
    colorSuccessBorder: m[3],
    colorSuccessBorderHover: m[4],
    colorSuccessHover: m[4],
    colorSuccess: m[6],
    colorSuccessActive: m[7],
    colorSuccessTextHover: m[8],
    colorSuccessText: m[9],
    colorSuccessTextActive: m[10],
    colorErrorBg: p[1],
    colorErrorBgHover: p[2],
    colorErrorBorder: p[3],
    colorErrorBorderHover: p[4],
    colorErrorHover: p[5],
    colorError: p[6],
    colorErrorActive: p[7],
    colorErrorTextHover: p[8],
    colorErrorText: p[9],
    colorErrorTextActive: p[10],
    colorWarningBg: g[1],
    colorWarningBgHover: g[2],
    colorWarningBorder: g[3],
    colorWarningBorderHover: g[4],
    colorWarningHover: g[4],
    colorWarning: g[6],
    colorWarningActive: g[7],
    colorWarningTextHover: g[8],
    colorWarningText: g[9],
    colorWarningTextActive: g[10],
    colorInfoBg: d[1],
    colorInfoBgHover: d[2],
    colorInfoBorder: d[3],
    colorInfoBorderHover: d[4],
    colorInfoHover: d[4],
    colorInfo: d[6],
    colorInfoActive: d[7],
    colorInfoTextHover: d[8],
    colorInfoText: d[9],
    colorInfoTextActive: d[10],
    colorLinkHover: E[4],
    colorLink: E[6],
    colorLinkActive: E[7],
    colorBgMask: new ke("#000").setAlpha(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
const kd = (e) => {
  let t = e, r = e, n = e, o = e;
  return e < 6 && e >= 5 ? t = e + 1 : e < 16 && e >= 6 ? t = e + 2 : e >= 16 && (t = 16), e < 7 && e >= 5 ? r = 4 : e < 8 && e >= 7 ? r = 5 : e < 14 && e >= 8 ? r = 6 : e < 16 && e >= 14 ? r = 7 : e >= 16 && (r = 8), e < 6 && e >= 2 ? n = 1 : e >= 6 && (n = 2), e > 4 && e < 8 ? o = 4 : e >= 8 && (o = 6), {
    borderRadius: e > 16 ? 16 : e,
    borderRadiusXS: n,
    borderRadiusSM: r,
    borderRadiusLG: t,
    borderRadiusOuter: o
  };
}, Ld = kd;
function Dd(e) {
  const {
    motionUnit: t,
    motionBase: r,
    borderRadius: n,
    lineWidth: o
  } = e;
  return Object.assign({
    // motion
    motionDurationFast: `${(r + t).toFixed(1)}s`,
    motionDurationMid: `${(r + t * 2).toFixed(1)}s`,
    motionDurationSlow: `${(r + t * 3).toFixed(1)}s`,
    // line
    lineWidthBold: o + 1
  }, Ld(n));
}
const Ze = (e, t) => new ke(e).setAlpha(t).toRgbString(), zt = (e, t) => new ke(e).darken(t).toHexString(), jd = (e) => {
  const t = yt(e);
  return {
    1: t[0],
    2: t[1],
    3: t[2],
    4: t[3],
    5: t[4],
    6: t[5],
    7: t[6],
    8: t[4],
    9: t[5],
    10: t[6]
    // 8: colors[7],
    // 9: colors[8],
    // 10: colors[9],
  };
}, Fd = (e, t) => {
  const r = e || "#fff", n = t || "#000";
  return {
    colorBgBase: r,
    colorTextBase: n,
    colorText: Ze(n, 0.88),
    colorTextSecondary: Ze(n, 0.65),
    colorTextTertiary: Ze(n, 0.45),
    colorTextQuaternary: Ze(n, 0.25),
    colorFill: Ze(n, 0.15),
    colorFillSecondary: Ze(n, 0.06),
    colorFillTertiary: Ze(n, 0.04),
    colorFillQuaternary: Ze(n, 0.02),
    colorBgLayout: zt(r, 4),
    colorBgContainer: zt(r, 0),
    colorBgElevated: zt(r, 0),
    colorBgSpotlight: Ze(n, 0.85),
    colorBorder: zt(r, 15),
    colorBorderSecondary: zt(r, 6)
  };
};
function Hd(e) {
  const t = new Array(10).fill(null).map((r, n) => {
    const o = n - 1, i = e * Math.pow(2.71828, o / 5), a = n > 1 ? Math.floor(i) : Math.ceil(i);
    return Math.floor(a / 2) * 2;
  });
  return t[1] = e, t.map((r) => {
    const n = r + 8;
    return {
      size: r,
      lineHeight: n / r
    };
  });
}
const Bd = (e) => {
  const t = Hd(e), r = t.map((o) => o.size), n = t.map((o) => o.lineHeight);
  return {
    fontSizeSM: r[0],
    fontSize: r[1],
    fontSizeLG: r[2],
    fontSizeXL: r[3],
    fontSizeHeading1: r[6],
    fontSizeHeading2: r[5],
    fontSizeHeading3: r[4],
    fontSizeHeading4: r[3],
    fontSizeHeading5: r[2],
    lineHeight: n[1],
    lineHeightLG: n[2],
    lineHeightSM: n[0],
    lineHeightHeading1: n[6],
    lineHeightHeading2: n[5],
    lineHeightHeading3: n[4],
    lineHeightHeading4: n[3],
    lineHeightHeading5: n[2]
  };
}, zd = Bd;
function Ud(e) {
  const t = Object.keys(Bs).map((r) => {
    const n = yt(e[r]);
    return new Array(10).fill(1).reduce((o, i, a) => (o[`${r}-${a + 1}`] = n[a], o[`${r}${a + 1}`] = n[a], o), {});
  }).reduce((r, n) => (r = Object.assign(Object.assign({}, r), n), r), {});
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), Md(e, {
    generateColorPalettes: jd,
    generateNeutralColorPalettes: Fd
  })), zd(e.fontSize)), $d(e)), Nd(e)), Dd(e));
}
const Wd = ys(Ud), zs = {
  token: nn,
  hashed: !0
}, Us = /* @__PURE__ */ de.createContext(zs);
function Pn(e) {
  return e >= 0 && e <= 255;
}
function gr(e, t) {
  const {
    r,
    g: n,
    b: o,
    a: i
  } = new ke(e).toRgb();
  if (i < 1)
    return e;
  const {
    r: a,
    g: s,
    b: l
  } = new ke(t).toRgb();
  for (let c = 0.01; c <= 1; c += 0.01) {
    const f = Math.round((r - a * (1 - c)) / c), u = Math.round((n - s * (1 - c)) / c), m = Math.round((o - l * (1 - c)) / c);
    if (Pn(f) && Pn(u) && Pn(m))
      return new ke({
        r: f,
        g: u,
        b: m,
        a: Math.round(c * 100) / 100
      }).toRgbString();
  }
  return new ke({
    r,
    g: n,
    b: o,
    a: 1
  }).toRgbString();
}
var Vd = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
function Gd(e) {
  const {
    override: t
  } = e, r = Vd(e, ["override"]), n = Object.assign({}, t);
  Object.keys(nn).forEach((m) => {
    delete n[m];
  });
  const o = Object.assign(Object.assign({}, r), n), i = 480, a = 576, s = 768, l = 992, c = 1200, f = 1600;
  if (o.motion === !1) {
    const m = "0s";
    o.motionDurationFast = m, o.motionDurationMid = m, o.motionDurationSlow = m;
  }
  return Object.assign(Object.assign(Object.assign({}, o), {
    // ============== Background ============== //
    colorFillContent: o.colorFillSecondary,
    colorFillContentHover: o.colorFill,
    colorFillAlter: o.colorFillQuaternary,
    colorBgContainerDisabled: o.colorFillTertiary,
    // ============== Split ============== //
    colorBorderBg: o.colorBgContainer,
    colorSplit: gr(o.colorBorderSecondary, o.colorBgContainer),
    // ============== Text ============== //
    colorTextPlaceholder: o.colorTextQuaternary,
    colorTextDisabled: o.colorTextQuaternary,
    colorTextHeading: o.colorText,
    colorTextLabel: o.colorTextSecondary,
    colorTextDescription: o.colorTextTertiary,
    colorTextLightSolid: o.colorWhite,
    colorHighlight: o.colorError,
    colorBgTextHover: o.colorFillSecondary,
    colorBgTextActive: o.colorFill,
    colorIcon: o.colorTextTertiary,
    colorIconHover: o.colorText,
    colorErrorOutline: gr(o.colorErrorBg, o.colorBgContainer),
    colorWarningOutline: gr(o.colorWarningBg, o.colorBgContainer),
    // Font
    fontSizeIcon: o.fontSizeSM,
    // Line
    lineWidthFocus: o.lineWidth * 4,
    // Control
    lineWidth: o.lineWidth,
    controlOutlineWidth: o.lineWidth * 2,
    // Checkbox size and expand icon size
    controlInteractiveSize: o.controlHeight / 2,
    controlItemBgHover: o.colorFillTertiary,
    controlItemBgActive: o.colorPrimaryBg,
    controlItemBgActiveHover: o.colorPrimaryBgHover,
    controlItemBgActiveDisabled: o.colorFill,
    controlTmpOutline: o.colorFillQuaternary,
    controlOutline: gr(o.colorPrimaryBg, o.colorBgContainer),
    lineType: o.lineType,
    borderRadius: o.borderRadius,
    borderRadiusXS: o.borderRadiusXS,
    borderRadiusSM: o.borderRadiusSM,
    borderRadiusLG: o.borderRadiusLG,
    fontWeightStrong: 600,
    opacityLoading: 0.65,
    linkDecoration: "none",
    linkHoverDecoration: "none",
    linkFocusDecoration: "none",
    controlPaddingHorizontal: 12,
    controlPaddingHorizontalSM: 8,
    paddingXXS: o.sizeXXS,
    paddingXS: o.sizeXS,
    paddingSM: o.sizeSM,
    padding: o.size,
    paddingMD: o.sizeMD,
    paddingLG: o.sizeLG,
    paddingXL: o.sizeXL,
    paddingContentHorizontalLG: o.sizeLG,
    paddingContentVerticalLG: o.sizeMS,
    paddingContentHorizontal: o.sizeMS,
    paddingContentVertical: o.sizeSM,
    paddingContentHorizontalSM: o.size,
    paddingContentVerticalSM: o.sizeXS,
    marginXXS: o.sizeXXS,
    marginXS: o.sizeXS,
    marginSM: o.sizeSM,
    margin: o.size,
    marginMD: o.sizeMD,
    marginLG: o.sizeLG,
    marginXL: o.sizeXL,
    marginXXL: o.sizeXXL,
    boxShadow: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowSecondary: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTertiary: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
    screenXS: i,
    screenXSMin: i,
    screenXSMax: a - 1,
    screenSM: a,
    screenSMMin: a,
    screenSMMax: s - 1,
    screenMD: s,
    screenMDMin: s,
    screenMDMax: l - 1,
    screenLG: l,
    screenLGMin: l,
    screenLGMax: c - 1,
    screenXL: c,
    screenXLMin: c,
    screenXLMax: f - 1,
    screenXXL: f,
    screenXXLMin: f,
    boxShadowPopoverArrow: "2px 2px 5px rgba(0, 0, 0, 0.05)",
    boxShadowCard: `
      0 1px 2px -2px ${new ke("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new ke("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new ke("rgba(0, 0, 0, 0.09)").toRgbString()}
    `,
    boxShadowDrawerRight: `
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerLeft: `
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerUp: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerDown: `
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTabsOverflowLeft: "inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowRight: "inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowTop: "inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowBottom: "inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)"
  }), n);
}
function on() {
  const {
    token: e,
    hashed: t,
    theme: r,
    components: n
  } = de.useContext(Us), o = `${dd}-${t || ""}`, i = r || Wd, [a, s] = wf(i, [nn, e], {
    salt: o,
    override: Object.assign({
      override: e
    }, n),
    formatToken: Gd
  });
  return [i, a, t ? s : ""];
}
function kr(e) {
  var t = y.useRef(!1), r = y.useState(e), n = pe(r, 2), o = n[0], i = n[1];
  y.useEffect(function() {
    return t.current = !1, function() {
      t.current = !0;
    };
  }, []);
  function a(s, l) {
    l && t.current || i(s);
  }
  return [o, a];
}
const Uo = "anticon", Yd = (e, t) => t || (e ? `ant-${e}` : "ant"), ot = /* @__PURE__ */ y.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: Yd,
  iconPrefixCls: Uo
}), Kd = (e) => ({
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
  color: e.colorText,
  fontSize: e.fontSize,
  // font-variant: @font-variant-base;
  lineHeight: e.lineHeight,
  listStyle: "none",
  // font-feature-settings: @font-feature-settings-base;
  fontFamily: e.fontFamily
}), qd = () => ({
  display: "inline-flex",
  alignItems: "center",
  color: "inherit",
  fontStyle: "normal",
  lineHeight: 0,
  textAlign: "center",
  textTransform: "none",
  // for SVG icon, see https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4
  verticalAlign: "-0.125em",
  textRendering: "optimizeLegibility",
  "-webkit-font-smoothing": "antialiased",
  "-moz-osx-font-smoothing": "grayscale",
  "> *": {
    lineHeight: 1
  },
  svg: {
    display: "inline-block"
  }
}), Xd = (e) => ({
  a: {
    color: e.colorLink,
    textDecoration: e.linkDecoration,
    backgroundColor: "transparent",
    outline: "none",
    cursor: "pointer",
    transition: `color ${e.motionDurationSlow}`,
    "-webkit-text-decoration-skip": "objects",
    "&:hover": {
      color: e.colorLinkHover
    },
    "&:active": {
      color: e.colorLinkActive
    },
    "&:active,\n  &:hover": {
      textDecoration: e.linkHoverDecoration,
      outline: 0
    },
    // https://github.com/ant-design/ant-design/issues/22503
    "&:focus": {
      textDecoration: e.linkFocusDecoration,
      outline: 0
    },
    "&[disabled]": {
      color: e.colorTextDisabled,
      cursor: "not-allowed"
    }
  }
}), Qd = (e, t) => {
  const {
    fontFamily: r,
    fontSize: n
  } = e, o = `[class^="${t}"], [class*=" ${t}"]`;
  return {
    [o]: {
      fontFamily: r,
      fontSize: n,
      boxSizing: "border-box",
      "&::before, &::after": {
        boxSizing: "border-box"
      },
      [o]: {
        boxSizing: "border-box",
        "&::before, &::after": {
          boxSizing: "border-box"
        }
      }
    }
  };
}, Jd = (e) => ({
  outline: `${e.lineWidthFocus}px solid ${e.colorPrimaryBorder}`,
  outlineOffset: 1,
  transition: "outline-offset 0s, outline 0s"
}), Zd = (e) => ({
  "&:focus-visible": Object.assign({}, Jd(e))
}), Ws = process.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC < "u";
let ao = !0;
function Rt() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  if (!Ws)
    return Object.assign.apply(Object, [{}].concat(t));
  ao = !1;
  const n = {};
  return t.forEach((o) => {
    Object.keys(o).forEach((a) => {
      Object.defineProperty(n, a, {
        configurable: !0,
        enumerable: !0,
        get: () => o[a]
      });
    });
  }), ao = !0, n;
}
function ep() {
}
function tp(e) {
  let t, r = e, n = ep;
  return Ws && (t = /* @__PURE__ */ new Set(), r = new Proxy(e, {
    get(o, i) {
      return ao && t.add(i), o[i];
    }
  }), n = (o, i) => {
    Array.from(t);
  }), {
    token: r,
    keys: t,
    flush: n
  };
}
function Wo(e, t, r, n) {
  return (o) => {
    const [i, a, s] = on(), {
      getPrefixCls: l,
      iconPrefixCls: c,
      csp: f
    } = Ne(ot), u = l(), m = {
      theme: i,
      token: a,
      hashId: s,
      nonce: () => f?.nonce
    };
    return to(Object.assign(Object.assign({}, m), {
      path: ["Shared", u]
    }), () => [{
      // Link
      "&": Xd(a)
    }]), [to(Object.assign(Object.assign({}, m), {
      path: [e, o, c]
    }), () => {
      const {
        token: g,
        flush: p
      } = tp(a), d = Object.assign({}, a[e]);
      if (n?.deprecatedTokens) {
        const {
          deprecatedTokens: v
        } = n;
        v.forEach((R) => {
          let [w, B] = R;
          var D;
          process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && ct(!d?.[w], `The token '${String(w)}' of ${e} had deprecated, use '${String(B)}' instead.`), (d?.[w] || d?.[B]) && ((D = d[B]) !== null && D !== void 0 || (d[B] = d?.[w]));
        });
      }
      const h = typeof r == "function" ? r(Rt(g, d ?? {})) : r, x = Object.assign(Object.assign({}, h), d), E = `.${o}`, A = Rt(g, {
        componentCls: E,
        prefixCls: o,
        iconCls: `.${c}`,
        antCls: `.${u}`
      }, x), _ = t(A, {
        hashId: s,
        prefixCls: o,
        rootPrefixCls: u,
        iconPrefixCls: c,
        overrideComponentToken: d
      });
      return p(e, x), [n?.resetStyle === !1 ? null : Qd(a, o), _];
    }), s];
  };
}
const rp = `-ant-${Date.now()}-${Math.random()}`;
function np(e, t) {
  const r = {}, n = (a, s) => {
    let l = a.clone();
    return l = s?.(l) || l, l.toRgbString();
  }, o = (a, s) => {
    const l = new ke(a), c = yt(l.toRgbString());
    r[`${s}-color`] = n(l), r[`${s}-color-disabled`] = c[1], r[`${s}-color-hover`] = c[4], r[`${s}-color-active`] = c[6], r[`${s}-color-outline`] = l.clone().setAlpha(0.2).toRgbString(), r[`${s}-color-deprecated-bg`] = c[0], r[`${s}-color-deprecated-border`] = c[2];
  };
  if (t.primaryColor) {
    o(t.primaryColor, "primary");
    const a = new ke(t.primaryColor), s = yt(a.toRgbString());
    s.forEach((c, f) => {
      r[`primary-${f + 1}`] = c;
    }), r["primary-color-deprecated-l-35"] = n(a, (c) => c.lighten(35)), r["primary-color-deprecated-l-20"] = n(a, (c) => c.lighten(20)), r["primary-color-deprecated-t-20"] = n(a, (c) => c.tint(20)), r["primary-color-deprecated-t-50"] = n(a, (c) => c.tint(50)), r["primary-color-deprecated-f-12"] = n(a, (c) => c.setAlpha(c.getAlpha() * 0.12));
    const l = new ke(s[0]);
    r["primary-color-active-deprecated-f-30"] = n(l, (c) => c.setAlpha(c.getAlpha() * 0.3)), r["primary-color-active-deprecated-d-02"] = n(l, (c) => c.darken(2));
  }
  return t.successColor && o(t.successColor, "success"), t.warningColor && o(t.warningColor, "warning"), t.errorColor && o(t.errorColor, "error"), t.infoColor && o(t.infoColor, "info"), `
  :root {
    ${Object.keys(r).map((a) => `--${e}-${a}: ${r[a]};`).join(`
`)}
  }
  `.trim();
}
function op(e, t) {
  const r = np(e, t);
  Qe() ? qt(r, `${rp}-dynamic-theme`) : process.env.NODE_ENV !== "production" && qe(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
const so = /* @__PURE__ */ y.createContext(!1), ip = (e) => {
  let {
    children: t,
    disabled: r
  } = e;
  const n = y.useContext(so);
  return /* @__PURE__ */ y.createElement(so.Provider, {
    value: r ?? n
  }, t);
}, Vs = so, co = /* @__PURE__ */ y.createContext(void 0), ap = (e) => {
  let {
    children: t,
    size: r
  } = e;
  const n = y.useContext(co);
  return /* @__PURE__ */ y.createElement(co.Provider, {
    value: r || n
  }, t);
}, an = co;
function sp() {
  const e = Ne(Vs), t = Ne(an);
  return {
    componentDisabled: e,
    componentSize: t
  };
}
function cp(e, t) {
  const r = e || {}, n = r.inherit === !1 || !t ? zs : t;
  return rs(() => {
    if (!e)
      return t;
    const i = Object.assign({}, n.components);
    return Object.keys(e.components || {}).forEach((a) => {
      i[a] = Object.assign(Object.assign({}, i[a]), e.components[a]);
    }), Object.assign(Object.assign(Object.assign({}, n), r), {
      token: Object.assign(Object.assign({}, n.token), r.token),
      components: i
    });
  }, [r, n], (i, a) => i.some((s, l) => {
    const c = a[l];
    return !qu(s, c, !0);
  }));
}
var lp = ["children"], Gs = /* @__PURE__ */ y.createContext({});
function up(e) {
  var t = e.children, r = Tt(e, lp);
  return /* @__PURE__ */ y.createElement(Gs.Provider, {
    value: r
  }, t);
}
var fp = /* @__PURE__ */ function(e) {
  Ka(r, e);
  var t = qa(r);
  function r() {
    return It(this, r), t.apply(this, arguments);
  }
  return Mt(r, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), r;
}(y.Component), ut = "none", vr = "appear", yr = "enter", br = "leave", Ki = "none", ze = "prepare", wt = "start", _t = "active", Vo = "end", Ys = "prepared";
function qi(e, t) {
  var r = {};
  return r[e.toLowerCase()] = t.toLowerCase(), r["Webkit".concat(e)] = "webkit".concat(t), r["Moz".concat(e)] = "moz".concat(t), r["ms".concat(e)] = "MS".concat(t), r["O".concat(e)] = "o".concat(t.toLowerCase()), r;
}
function dp(e, t) {
  var r = {
    animationend: qi("Animation", "AnimationEnd"),
    transitionend: qi("Transition", "TransitionEnd")
  };
  return e && ("AnimationEvent" in t || delete r.animationend.animation, "TransitionEvent" in t || delete r.transitionend.transition), r;
}
var pp = dp(Qe(), typeof window < "u" ? window : {}), Ks = {};
if (Qe()) {
  var hp = document.createElement("div");
  Ks = hp.style;
}
var Sr = {};
function qs(e) {
  if (Sr[e])
    return Sr[e];
  var t = pp[e];
  if (t)
    for (var r = Object.keys(t), n = r.length, o = 0; o < n; o += 1) {
      var i = r[o];
      if (Object.prototype.hasOwnProperty.call(t, i) && i in Ks)
        return Sr[e] = t[i], Sr[e];
    }
  return "";
}
var Xs = qs("animationend"), Qs = qs("transitionend"), Js = !!(Xs && Qs), Xi = Xs || "animationend", Qi = Qs || "transitionend";
function Ji(e, t) {
  if (!e)
    return null;
  if (ye(e) === "object") {
    var r = t.replace(/-\w/g, function(n) {
      return n[1].toUpperCase();
    });
    return e[r];
  }
  return "".concat(e, "-").concat(t);
}
const mp = function(e) {
  var t = je(), r = je(e);
  r.current = e;
  var n = y.useCallback(function(a) {
    r.current(a);
  }, []);
  function o(a) {
    a && (a.removeEventListener(Qi, n), a.removeEventListener(Xi, n));
  }
  function i(a) {
    t.current && t.current !== a && o(t.current), a && a !== t.current && (a.addEventListener(Qi, n), a.addEventListener(Xi, n), t.current = a);
  }
  return y.useEffect(function() {
    return function() {
      o(t.current);
    };
  }, []), [i, o];
};
var Zs = Qe() ? Ea : Ue;
const gp = function() {
  var e = y.useRef(null);
  function t() {
    Kt.cancel(e.current);
  }
  function r(n) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    t();
    var i = Kt(function() {
      o <= 1 ? n({
        isCanceled: function() {
          return i !== e.current;
        }
      }) : r(n, o - 1);
    });
    e.current = i;
  }
  return y.useEffect(function() {
    return function() {
      t();
    };
  }, []), [r, t];
};
var vp = [ze, wt, _t, Vo], yp = [ze, Ys], ec = !1, bp = !0;
function tc(e) {
  return e === _t || e === Vo;
}
const Sp = function(e, t, r) {
  var n = kr(Ki), o = pe(n, 2), i = o[0], a = o[1], s = gp(), l = pe(s, 2), c = l[0], f = l[1];
  function u() {
    a(ze, !0);
  }
  var m = t ? yp : vp;
  return Zs(function() {
    if (i !== Ki && i !== Vo) {
      var g = m.indexOf(i), p = m[g + 1], d = r(i);
      d === ec ? a(p, !0) : p && c(function(h) {
        function x() {
          h.isCanceled() || a(p, !0);
        }
        d === !0 ? x() : Promise.resolve(d).then(x);
      });
    }
  }, [e, i]), y.useEffect(function() {
    return function() {
      f();
    };
  }, []), [u, i];
};
function Ep(e, t, r, n) {
  var o = n.motionEnter, i = o === void 0 ? !0 : o, a = n.motionAppear, s = a === void 0 ? !0 : a, l = n.motionLeave, c = l === void 0 ? !0 : l, f = n.motionDeadline, u = n.motionLeaveImmediately, m = n.onAppearPrepare, g = n.onEnterPrepare, p = n.onLeavePrepare, d = n.onAppearStart, h = n.onEnterStart, x = n.onLeaveStart, E = n.onAppearActive, A = n.onEnterActive, _ = n.onLeaveActive, v = n.onAppearEnd, R = n.onEnterEnd, w = n.onLeaveEnd, B = n.onVisibleChanged, D = kr(), $ = pe(D, 2), z = $[0], C = $[1], S = kr(ut), O = pe(S, 2), N = O[0], j = O[1], M = kr(null), U = pe(M, 2), Q = U[0], X = U[1], re = je(!1), I = je(null);
  function L() {
    return r();
  }
  var F = je(!1);
  function W() {
    j(ut, !0), X(null, !0);
  }
  function b(ge) {
    var G = L();
    if (!(ge && !ge.deadline && ge.target !== G)) {
      var oe = F.current, be;
      N === vr && oe ? be = v?.(G, ge) : N === yr && oe ? be = R?.(G, ge) : N === br && oe && (be = w?.(G, ge)), N !== ut && oe && be !== !1 && W();
    }
  }
  var te = mp(b), k = pe(te, 1), ne = k[0], J = function(G) {
    var oe, be, xe;
    switch (G) {
      case vr:
        return oe = {}, ae(oe, ze, m), ae(oe, wt, d), ae(oe, _t, E), oe;
      case yr:
        return be = {}, ae(be, ze, g), ae(be, wt, h), ae(be, _t, A), be;
      case br:
        return xe = {}, ae(xe, ze, p), ae(xe, wt, x), ae(xe, _t, _), xe;
      default:
        return {};
    }
  }, q = y.useMemo(function() {
    return J(N);
  }, [N]), P = Sp(N, !e, function(ge) {
    if (ge === ze) {
      var G = q[ze];
      return G ? G(L()) : ec;
    }
    if (V in q) {
      var oe;
      X(((oe = q[V]) === null || oe === void 0 ? void 0 : oe.call(q, L(), null)) || null);
    }
    return V === _t && (ne(L()), f > 0 && (clearTimeout(I.current), I.current = setTimeout(function() {
      b({
        deadline: !0
      });
    }, f))), V === Ys && W(), bp;
  }), se = pe(P, 2), H = se[0], V = se[1], he = tc(V);
  F.current = he, Zs(function() {
    C(t);
    var ge = re.current;
    re.current = !0;
    var G;
    !ge && t && s && (G = vr), ge && t && i && (G = yr), (ge && !t && c || !ge && u && !t && c) && (G = br);
    var oe = J(G);
    G && (e || oe[ze]) ? (j(G), H()) : j(ut);
  }, [t]), Ue(function() {
    // Cancel appear
    (N === vr && !s || // Cancel enter
    N === yr && !i || // Cancel leave
    N === br && !c) && j(ut);
  }, [s, i, c]), Ue(function() {
    return function() {
      re.current = !1, clearTimeout(I.current);
    };
  }, []);
  var Z = y.useRef(!1);
  Ue(function() {
    z && (Z.current = !0), z !== void 0 && N === ut && ((Z.current || z) && B?.(z), Z.current = !0);
  }, [z, N]);
  var me = Q;
  return q[ze] && V === wt && (me = ee({
    transition: "none"
  }, me)), [N, V, me, z ?? t];
}
function Cp(e) {
  var t = e;
  ye(e) === "object" && (t = e.transitionSupport);
  function r(o, i) {
    return !!(o.motionName && t && i !== !1);
  }
  var n = /* @__PURE__ */ y.forwardRef(function(o, i) {
    var a = o.visible, s = a === void 0 ? !0 : a, l = o.removeOnLeave, c = l === void 0 ? !0 : l, f = o.forceRender, u = o.children, m = o.motionName, g = o.leavedClassName, p = o.eventProps, d = y.useContext(Gs), h = d.motion, x = r(o, h), E = je(), A = je();
    function _() {
      try {
        return E.current instanceof HTMLElement ? E.current : Wu(A.current);
      } catch {
        return null;
      }
    }
    var v = Ep(x, s, _, o), R = pe(v, 4), w = R[0], B = R[1], D = R[2], $ = R[3], z = y.useRef($);
    $ && (z.current = !0);
    var C = y.useCallback(function(X) {
      E.current = X, ns(i, X);
    }, [i]), S, O = ee(ee({}, p), {}, {
      visible: s
    });
    if (!u)
      S = null;
    else if (w === ut)
      $ ? S = u(ee({}, O), C) : !c && z.current && g ? S = u(ee(ee({}, O), {}, {
        className: g
      }), C) : f || !c && !g ? S = u(ee(ee({}, O), {}, {
        style: {
          display: "none"
        }
      }), C) : S = null;
    else {
      var N, j;
      B === ze ? j = "prepare" : tc(B) ? j = "active" : B === wt && (j = "start");
      var M = Ji(m, "".concat(w, "-").concat(j));
      S = u(ee(ee({}, O), {}, {
        className: Te(Ji(m, w), (N = {}, ae(N, M, M && j), ae(N, m, typeof m == "string"), N)),
        style: D
      }), C);
    }
    if (/* @__PURE__ */ y.isValidElement(S) && is(S)) {
      var U = S, Q = U.ref;
      Q || (S = /* @__PURE__ */ y.cloneElement(S, {
        ref: C
      }));
    }
    return /* @__PURE__ */ y.createElement(fp, {
      ref: A
    }, S);
  });
  return n.displayName = "CSSMotion", n;
}
const Go = Cp(Js);
var lo = "add", uo = "keep", fo = "remove", Nn = "removed";
function xp(e) {
  var t;
  return e && ye(e) === "object" && "key" in e ? t = e : t = {
    key: e
  }, ee(ee({}, t), {}, {
    key: String(t.key)
  });
}
function po() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return e.map(xp);
}
function wp() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], r = [], n = 0, o = t.length, i = po(e), a = po(t);
  i.forEach(function(c) {
    for (var f = !1, u = n; u < o; u += 1) {
      var m = a[u];
      if (m.key === c.key) {
        n < u && (r = r.concat(a.slice(n, u).map(function(g) {
          return ee(ee({}, g), {}, {
            status: lo
          });
        })), n = u), r.push(ee(ee({}, m), {}, {
          status: uo
        })), n += 1, f = !0;
        break;
      }
    }
    f || r.push(ee(ee({}, c), {}, {
      status: fo
    }));
  }), n < o && (r = r.concat(a.slice(n).map(function(c) {
    return ee(ee({}, c), {}, {
      status: lo
    });
  })));
  var s = {};
  r.forEach(function(c) {
    var f = c.key;
    s[f] = (s[f] || 0) + 1;
  });
  var l = Object.keys(s).filter(function(c) {
    return s[c] > 1;
  });
  return l.forEach(function(c) {
    r = r.filter(function(f) {
      var u = f.key, m = f.status;
      return u !== c || m !== fo;
    }), r.forEach(function(f) {
      f.key === c && (f.status = uo);
    });
  }), r;
}
var _p = ["component", "children", "onVisibleChanged", "onAllRemoved"], Op = ["status"], Tp = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function Ap(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Go, r = /* @__PURE__ */ function(n) {
    Ka(i, n);
    var o = qa(i);
    function i() {
      var a;
      It(this, i);
      for (var s = arguments.length, l = new Array(s), c = 0; c < s; c++)
        l[c] = arguments[c];
      return a = o.call.apply(o, [this].concat(l)), ae(Vn(a), "state", {
        keyEntities: []
      }), ae(Vn(a), "removeKey", function(f) {
        var u = a.state.keyEntities, m = u.map(function(g) {
          return g.key !== f ? g : ee(ee({}, g), {}, {
            status: Nn
          });
        });
        return a.setState({
          keyEntities: m
        }), m.filter(function(g) {
          var p = g.status;
          return p !== Nn;
        }).length;
      }), a;
    }
    return Mt(i, [{
      key: "render",
      value: function() {
        var s = this, l = this.state.keyEntities, c = this.props, f = c.component, u = c.children, m = c.onVisibleChanged, g = c.onAllRemoved, p = Tt(c, _p), d = f || y.Fragment, h = {};
        return Tp.forEach(function(x) {
          h[x] = p[x], delete p[x];
        }), delete p.keys, /* @__PURE__ */ y.createElement(d, p, l.map(function(x) {
          var E = x.status, A = Tt(x, Op), _ = E === lo || E === uo;
          return /* @__PURE__ */ y.createElement(t, $e({}, h, {
            key: A.key,
            visible: _,
            eventProps: A,
            onVisibleChanged: function(R) {
              if (m?.(R, {
                key: A.key
              }), !R) {
                var w = s.removeKey(A.key);
                w === 0 && g && g();
              }
            }
          }), u);
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(s, l) {
        var c = s.keys, f = l.keyEntities, u = po(c), m = wp(f, u);
        return {
          keyEntities: m.filter(function(g) {
            var p = f.find(function(d) {
              var h = d.key;
              return g.key === h;
            });
            return !(p && p.status === Nn && g.status === fo);
          })
        };
      }
      // ZombieJ: Return the count of rest keys. It's safe to refactor if need more info.
    }]), i;
  }(y.Component);
  return ae(r, "defaultProps", {
    component: "div"
  }), r;
}
const Rp = Ap(Js);
function Pp(e) {
  const {
    children: t
  } = e, [, r] = on(), {
    motion: n
  } = r, o = y.useRef(!1);
  return o.current = o.current || n === !1, o.current ? /* @__PURE__ */ y.createElement(up, {
    motion: n
  }, t) : t;
}
const Np = (e, t) => {
  const [r, n] = on();
  return to({
    theme: r,
    token: n,
    hashId: "",
    path: ["ant-design-icons", e],
    nonce: () => t?.nonce
  }, () => [{
    [`.${e}`]: Object.assign(Object.assign({}, qd()), {
      [`.${e} .${e}-icon`]: {
        display: "block"
      }
    })
  }]);
}, $p = Np;
var Ip = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
let ho = !1;
const Mp = process.env.NODE_ENV !== "production" ? (e) => {
  process.env.NODE_ENV !== "production" && qe(!ho, e, "Static function can not consume context like dynamic theme. Please use 'App' component instead.");
} : (
  /* istanbul ignore next */
  null
), kp = ["getTargetContainer", "getPopupContainer", "renderEmpty", "pageHeader", "input", "pagination", "form", "select", "button"], Lp = "ant";
let zr, rc, nc;
function Lr() {
  return zr || Lp;
}
function Dp() {
  return rc || Uo;
}
function jp(e) {
  return Object.keys(e).some((t) => t.endsWith("Color"));
}
const Fp = (e) => {
  let {
    prefixCls: t,
    iconPrefixCls: r,
    theme: n
  } = e;
  t !== void 0 && (zr = t), r !== void 0 && (rc = r), n && (jp(n) ? (process.env.NODE_ENV !== "production" && qe(!1, "ConfigProvider", "`config` of css variable theme is not work in v5. Please use new `theme` config instead."), op(Lr(), n)) : nc = n);
}, oc = () => ({
  getPrefixCls: (e, t) => t || (e ? `${Lr()}-${e}` : Lr()),
  getIconPrefixCls: Dp,
  getRootPrefixCls: () => zr || Lr(),
  getTheme: () => nc
}), Hp = (e) => {
  const {
    children: t,
    csp: r,
    autoInsertSpaceInButton: n,
    alert: o,
    anchor: i,
    form: a,
    locale: s,
    componentSize: l,
    direction: c,
    space: f,
    virtual: u,
    dropdownMatchSelectWidth: m,
    popupMatchSelectWidth: g,
    popupOverflow: p,
    legacyLocale: d,
    parentContext: h,
    iconPrefixCls: x,
    theme: E,
    componentDisabled: A,
    segmented: _,
    statistic: v,
    spin: R,
    calendar: w,
    carousel: B,
    cascader: D,
    collapse: $,
    typography: z,
    checkbox: C,
    descriptions: S,
    divider: O,
    drawer: N,
    skeleton: j,
    steps: M,
    image: U,
    layout: Q,
    list: X,
    mentions: re,
    modal: I,
    progress: L,
    result: F,
    slider: W,
    breadcrumb: b,
    menu: te,
    pagination: k,
    input: ne,
    empty: J,
    badge: q,
    radio: P,
    rate: se,
    switch: H,
    transfer: V,
    avatar: he,
    message: Z,
    tag: me,
    table: ge,
    card: G,
    tabs: oe,
    timeline: be,
    timePicker: xe,
    upload: K,
    notification: ve,
    tree: jt,
    colorPicker: Ft,
    datePicker: Ve
  } = e;
  process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && qe(m === void 0, "ConfigProvider", "`dropdownMatchSelectWidth` is deprecated. Please use `popupMatchSelectWidth` instead.");
  const qc = y.useCallback((we, Ae) => {
    const {
      prefixCls: Ge
    } = e;
    if (Ae)
      return Ae;
    const Ye = Ge || h.getPrefixCls("");
    return we ? `${Ye}-${we}` : Ye;
  }, [h.getPrefixCls, e.prefixCls]), St = x || h.iconPrefixCls || Uo, Xc = St !== h.iconPrefixCls, Ht = r || h.csp, Qc = $p(St, Ht), sr = cp(E, h.theme);
  process.env.NODE_ENV !== "production" && (ho = ho || !!sr);
  const pn = {
    csp: Ht,
    autoInsertSpaceInButton: n,
    alert: o,
    anchor: i,
    locale: s || d,
    direction: c,
    space: f,
    virtual: u,
    popupMatchSelectWidth: g ?? m,
    popupOverflow: p,
    getPrefixCls: qc,
    iconPrefixCls: St,
    theme: sr,
    segmented: _,
    statistic: v,
    spin: R,
    calendar: w,
    carousel: B,
    cascader: D,
    collapse: $,
    typography: z,
    checkbox: C,
    descriptions: S,
    divider: O,
    drawer: N,
    skeleton: j,
    steps: M,
    image: U,
    input: ne,
    layout: Q,
    list: X,
    mentions: re,
    modal: I,
    progress: L,
    result: F,
    slider: W,
    breadcrumb: b,
    menu: te,
    pagination: k,
    empty: J,
    badge: q,
    radio: P,
    rate: se,
    switch: H,
    transfer: V,
    avatar: he,
    message: Z,
    tag: me,
    table: ge,
    card: G,
    tabs: oe,
    timeline: be,
    timePicker: xe,
    upload: K,
    notification: ve,
    tree: jt,
    colorPicker: Ft,
    datePicker: Ve
  }, cr = Object.assign({}, h);
  Object.keys(pn).forEach((we) => {
    pn[we] !== void 0 && (cr[we] = pn[we]);
  }), kp.forEach((we) => {
    const Ae = e[we];
    Ae && (cr[we] = Ae);
  });
  const lr = rs(() => cr, cr, (we, Ae) => {
    const Ge = Object.keys(we), Ye = Object.keys(Ae);
    return Ge.length !== Ye.length || Ge.some((ur) => we[ur] !== Ae[ur]);
  }), Jc = y.useMemo(() => ({
    prefixCls: St,
    csp: Ht
  }), [St, Ht]);
  let Pe = Xc ? Qc(t) : t;
  const ni = y.useMemo(() => {
    var we, Ae, Ge, Ye;
    return rd(((we = zo.Form) === null || we === void 0 ? void 0 : we.defaultValidateMessages) || {}, ((Ge = (Ae = lr.locale) === null || Ae === void 0 ? void 0 : Ae.Form) === null || Ge === void 0 ? void 0 : Ge.defaultValidateMessages) || {}, ((Ye = lr.form) === null || Ye === void 0 ? void 0 : Ye.validateMessages) || {}, a?.validateMessages || {});
  }, [lr, a?.validateMessages]);
  Object.keys(ni).length > 0 && (Pe = /* @__PURE__ */ y.createElement(od.Provider, {
    value: ni
  }, t)), s && (Pe = /* @__PURE__ */ y.createElement(fd, {
    locale: s,
    _ANT_MARK__: Ls
  }, Pe)), (St || Ht) && (Pe = /* @__PURE__ */ y.createElement(Bo.Provider, {
    value: Jc
  }, Pe)), l && (Pe = /* @__PURE__ */ y.createElement(ap, {
    size: l
  }, Pe)), Pe = /* @__PURE__ */ y.createElement(Pp, null, Pe);
  const Zc = y.useMemo(() => {
    const we = sr || {}, {
      algorithm: Ae,
      token: Ge
    } = we, Ye = Ip(we, ["algorithm", "token"]), ur = Ae && (!Array.isArray(Ae) || Ae.length > 0) ? ys(Ae) : void 0;
    return Object.assign(Object.assign({}, Ye), {
      theme: ur,
      token: Object.assign(Object.assign({}, nn), Ge)
    });
  }, [sr]);
  return E && (Pe = /* @__PURE__ */ y.createElement(Us.Provider, {
    value: Zc
  }, Pe)), A !== void 0 && (Pe = /* @__PURE__ */ y.createElement(ip, {
    disabled: A
  }, Pe)), /* @__PURE__ */ y.createElement(ot.Provider, {
    value: lr
  }, Pe);
}, bt = (e) => {
  const t = y.useContext(ot), r = y.useContext(ks);
  return /* @__PURE__ */ y.createElement(Hp, Object.assign({
    parentContext: t,
    legacyLocale: r
  }, e));
};
bt.ConfigContext = ot;
bt.SizeContext = an;
bt.config = Fp;
bt.useConfig = sp;
Object.defineProperty(bt, "SizeContext", {
  get: () => (process.env.NODE_ENV !== "production" && qe(!1, "ConfigProvider", "ConfigProvider.SizeContext is deprecated. Please use `ConfigProvider.useConfig().componentSize` instead."), an)
});
process.env.NODE_ENV !== "production" && (bt.displayName = "ConfigProvider");
const ic = bt;
var Bp = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" } }] }, name: "check-circle", theme: "filled" };
const zp = Bp;
function ac(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
}
function Up(e) {
  return ac(e) !== e?.ownerDocument;
}
function Wp(e) {
  return Up(e) ? ac(e) : null;
}
function Vp(e, t) {
  ct(e, "[@ant-design/icons] ".concat(t));
}
function Zi(e) {
  return ye(e) === "object" && typeof e.name == "string" && typeof e.theme == "string" && (ye(e.icon) === "object" || typeof e.icon == "function");
}
function ea() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(e).reduce(function(t, r) {
    var n = e[r];
    switch (r) {
      case "class":
        t.className = n, delete t.class;
        break;
      default:
        t[r] = n;
    }
    return t;
  }, {});
}
function mo(e, t, r) {
  return r ? /* @__PURE__ */ de.createElement(e.tag, ee(ee({
    key: t
  }, ea(e.attrs)), r), (e.children || []).map(function(n, o) {
    return mo(n, "".concat(t, "-").concat(e.tag, "-").concat(o));
  })) : /* @__PURE__ */ de.createElement(e.tag, ee({
    key: t
  }, ea(e.attrs)), (e.children || []).map(function(n, o) {
    return mo(n, "".concat(t, "-").concat(e.tag, "-").concat(o));
  }));
}
function sc(e) {
  return yt(e)[0];
}
function cc(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
var Gp = `
.anticon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`, Yp = function(t) {
  var r = Ne(Bo), n = r.csp, o = r.prefixCls, i = Gp;
  o && (i = i.replace(/anticon/g, o)), Ue(function() {
    var a = t.current, s = Wp(a);
    qt(i, "@ant-design-icons", {
      prepend: !0,
      csp: n,
      attachTo: s
    });
  }, []);
}, Kp = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"], Wt = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function qp(e) {
  var t = e.primaryColor, r = e.secondaryColor;
  Wt.primaryColor = t, Wt.secondaryColor = r || sc(t), Wt.calculated = !!r;
}
function Xp() {
  return ee({}, Wt);
}
var sn = function(t) {
  var r = t.icon, n = t.className, o = t.onClick, i = t.style, a = t.primaryColor, s = t.secondaryColor, l = Tt(t, Kp), c = y.useRef(), f = Wt;
  if (a && (f = {
    primaryColor: a,
    secondaryColor: s || sc(a)
  }), Yp(c), Vp(Zi(r), "icon should be icon definiton, but got ".concat(r)), !Zi(r))
    return null;
  var u = r;
  return u && typeof u.icon == "function" && (u = ee(ee({}, u), {}, {
    icon: u.icon(f.primaryColor, f.secondaryColor)
  })), mo(u.icon, "svg-".concat(u.name), ee(ee({
    className: n,
    onClick: o,
    style: i,
    "data-icon": u.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true"
  }, l), {}, {
    ref: c
  }));
};
sn.displayName = "IconReact";
sn.getTwoToneColors = Xp;
sn.setTwoToneColors = qp;
const Yo = sn;
function lc(e) {
  var t = cc(e), r = pe(t, 2), n = r[0], o = r[1];
  return Yo.setTwoToneColors({
    primaryColor: n,
    secondaryColor: o
  });
}
function Qp() {
  var e = Yo.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var Jp = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
lc(Rd.primary);
var cn = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var r, n = e.className, o = e.icon, i = e.spin, a = e.rotate, s = e.tabIndex, l = e.onClick, c = e.twoToneColor, f = Tt(e, Jp), u = y.useContext(Bo), m = u.prefixCls, g = m === void 0 ? "anticon" : m, p = u.rootClassName, d = Te(p, g, (r = {}, ae(r, "".concat(g, "-").concat(o.name), !!o.name), ae(r, "".concat(g, "-spin"), !!i || o.name === "loading"), r), n), h = s;
  h === void 0 && l && (h = -1);
  var x = a ? {
    msTransform: "rotate(".concat(a, "deg)"),
    transform: "rotate(".concat(a, "deg)")
  } : void 0, E = cc(c), A = pe(E, 2), _ = A[0], v = A[1];
  return /* @__PURE__ */ y.createElement("span", $e({
    role: "img",
    "aria-label": o.name
  }, f, {
    ref: t,
    tabIndex: h,
    onClick: l,
    className: d
  }), /* @__PURE__ */ y.createElement(Yo, {
    icon: o,
    primaryColor: _,
    secondaryColor: v,
    style: x
  }));
});
cn.displayName = "AntdIcon";
cn.getTwoToneColor = Qp;
cn.setTwoToneColor = lc;
const Lt = cn;
var uc = function(t, r) {
  return /* @__PURE__ */ y.createElement(Lt, $e({}, t, {
    ref: r,
    icon: zp
  }));
};
process.env.NODE_ENV !== "production" && (uc.displayName = "CheckCircleFilled");
const Zp = /* @__PURE__ */ y.forwardRef(uc);
var eh = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z" } }] }, name: "close-circle", theme: "filled" };
const th = eh;
var fc = function(t, r) {
  return /* @__PURE__ */ y.createElement(Lt, $e({}, t, {
    ref: r,
    icon: th
  }));
};
process.env.NODE_ENV !== "production" && (fc.displayName = "CloseCircleFilled");
const rh = /* @__PURE__ */ y.forwardRef(fc);
var nh = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" } }] }, name: "close", theme: "outlined" };
const oh = nh;
var dc = function(t, r) {
  return /* @__PURE__ */ y.createElement(Lt, $e({}, t, {
    ref: r,
    icon: oh
  }));
};
process.env.NODE_ENV !== "production" && (dc.displayName = "CloseOutlined");
const ih = /* @__PURE__ */ y.forwardRef(dc);
var ah = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "exclamation-circle", theme: "filled" };
const sh = ah;
var pc = function(t, r) {
  return /* @__PURE__ */ y.createElement(Lt, $e({}, t, {
    ref: r,
    icon: sh
  }));
};
process.env.NODE_ENV !== "production" && (pc.displayName = "ExclamationCircleFilled");
const ch = /* @__PURE__ */ y.forwardRef(pc);
var lh = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "info-circle", theme: "filled" };
const uh = lh;
var hc = function(t, r) {
  return /* @__PURE__ */ y.createElement(Lt, $e({}, t, {
    ref: r,
    icon: uh
  }));
};
process.env.NODE_ENV !== "production" && (hc.displayName = "InfoCircleFilled");
const fh = /* @__PURE__ */ y.forwardRef(hc), {
  isValidElement: mc
} = y;
function dh(e) {
  return e && mc(e) && e.type === y.Fragment;
}
function ph(e, t, r) {
  return mc(e) ? /* @__PURE__ */ y.cloneElement(e, typeof r == "function" ? r(e.props || {}) : r) : t;
}
function gc(e, t) {
  return ph(e, e, t);
}
var Y = {
  /**
   * MAC_ENTER
   */
  MAC_ENTER: 3,
  /**
   * BACKSPACE
   */
  BACKSPACE: 8,
  /**
   * TAB
   */
  TAB: 9,
  /**
   * NUMLOCK on FF/Safari Mac
   */
  NUM_CENTER: 12,
  // NUMLOCK on FF/Safari Mac
  /**
   * ENTER
   */
  ENTER: 13,
  /**
   * SHIFT
   */
  SHIFT: 16,
  /**
   * CTRL
   */
  CTRL: 17,
  /**
   * ALT
   */
  ALT: 18,
  /**
   * PAUSE
   */
  PAUSE: 19,
  /**
   * CAPS_LOCK
   */
  CAPS_LOCK: 20,
  /**
   * ESC
   */
  ESC: 27,
  /**
   * SPACE
   */
  SPACE: 32,
  /**
   * PAGE_UP
   */
  PAGE_UP: 33,
  // also NUM_NORTH_EAST
  /**
   * PAGE_DOWN
   */
  PAGE_DOWN: 34,
  // also NUM_SOUTH_EAST
  /**
   * END
   */
  END: 35,
  // also NUM_SOUTH_WEST
  /**
   * HOME
   */
  HOME: 36,
  // also NUM_NORTH_WEST
  /**
   * LEFT
   */
  LEFT: 37,
  // also NUM_WEST
  /**
   * UP
   */
  UP: 38,
  // also NUM_NORTH
  /**
   * RIGHT
   */
  RIGHT: 39,
  // also NUM_EAST
  /**
   * DOWN
   */
  DOWN: 40,
  // also NUM_SOUTH
  /**
   * PRINT_SCREEN
   */
  PRINT_SCREEN: 44,
  /**
   * INSERT
   */
  INSERT: 45,
  // also NUM_INSERT
  /**
   * DELETE
   */
  DELETE: 46,
  // also NUM_DELETE
  /**
   * ZERO
   */
  ZERO: 48,
  /**
   * ONE
   */
  ONE: 49,
  /**
   * TWO
   */
  TWO: 50,
  /**
   * THREE
   */
  THREE: 51,
  /**
   * FOUR
   */
  FOUR: 52,
  /**
   * FIVE
   */
  FIVE: 53,
  /**
   * SIX
   */
  SIX: 54,
  /**
   * SEVEN
   */
  SEVEN: 55,
  /**
   * EIGHT
   */
  EIGHT: 56,
  /**
   * NINE
   */
  NINE: 57,
  /**
   * QUESTION_MARK
   */
  QUESTION_MARK: 63,
  // needs localization
  /**
   * A
   */
  A: 65,
  /**
   * B
   */
  B: 66,
  /**
   * C
   */
  C: 67,
  /**
   * D
   */
  D: 68,
  /**
   * E
   */
  E: 69,
  /**
   * F
   */
  F: 70,
  /**
   * G
   */
  G: 71,
  /**
   * H
   */
  H: 72,
  /**
   * I
   */
  I: 73,
  /**
   * J
   */
  J: 74,
  /**
   * K
   */
  K: 75,
  /**
   * L
   */
  L: 76,
  /**
   * M
   */
  M: 77,
  /**
   * N
   */
  N: 78,
  /**
   * O
   */
  O: 79,
  /**
   * P
   */
  P: 80,
  /**
   * Q
   */
  Q: 81,
  /**
   * R
   */
  R: 82,
  /**
   * S
   */
  S: 83,
  /**
   * T
   */
  T: 84,
  /**
   * U
   */
  U: 85,
  /**
   * V
   */
  V: 86,
  /**
   * W
   */
  W: 87,
  /**
   * X
   */
  X: 88,
  /**
   * Y
   */
  Y: 89,
  /**
   * Z
   */
  Z: 90,
  /**
   * META
   */
  META: 91,
  // WIN_KEY_LEFT
  /**
   * WIN_KEY_RIGHT
   */
  WIN_KEY_RIGHT: 92,
  /**
   * CONTEXT_MENU
   */
  CONTEXT_MENU: 93,
  /**
   * NUM_ZERO
   */
  NUM_ZERO: 96,
  /**
   * NUM_ONE
   */
  NUM_ONE: 97,
  /**
   * NUM_TWO
   */
  NUM_TWO: 98,
  /**
   * NUM_THREE
   */
  NUM_THREE: 99,
  /**
   * NUM_FOUR
   */
  NUM_FOUR: 100,
  /**
   * NUM_FIVE
   */
  NUM_FIVE: 101,
  /**
   * NUM_SIX
   */
  NUM_SIX: 102,
  /**
   * NUM_SEVEN
   */
  NUM_SEVEN: 103,
  /**
   * NUM_EIGHT
   */
  NUM_EIGHT: 104,
  /**
   * NUM_NINE
   */
  NUM_NINE: 105,
  /**
   * NUM_MULTIPLY
   */
  NUM_MULTIPLY: 106,
  /**
   * NUM_PLUS
   */
  NUM_PLUS: 107,
  /**
   * NUM_MINUS
   */
  NUM_MINUS: 109,
  /**
   * NUM_PERIOD
   */
  NUM_PERIOD: 110,
  /**
   * NUM_DIVISION
   */
  NUM_DIVISION: 111,
  /**
   * F1
   */
  F1: 112,
  /**
   * F2
   */
  F2: 113,
  /**
   * F3
   */
  F3: 114,
  /**
   * F4
   */
  F4: 115,
  /**
   * F5
   */
  F5: 116,
  /**
   * F6
   */
  F6: 117,
  /**
   * F7
   */
  F7: 118,
  /**
   * F8
   */
  F8: 119,
  /**
   * F9
   */
  F9: 120,
  /**
   * F10
   */
  F10: 121,
  /**
   * F11
   */
  F11: 122,
  /**
   * F12
   */
  F12: 123,
  /**
   * NUMLOCK
   */
  NUMLOCK: 144,
  /**
   * SEMICOLON
   */
  SEMICOLON: 186,
  // needs localization
  /**
   * DASH
   */
  DASH: 189,
  // needs localization
  /**
   * EQUALS
   */
  EQUALS: 187,
  // needs localization
  /**
   * COMMA
   */
  COMMA: 188,
  // needs localization
  /**
   * PERIOD
   */
  PERIOD: 190,
  // needs localization
  /**
   * SLASH
   */
  SLASH: 191,
  // needs localization
  /**
   * APOSTROPHE
   */
  APOSTROPHE: 192,
  // needs localization
  /**
   * SINGLE_QUOTE
   */
  SINGLE_QUOTE: 222,
  // needs localization
  /**
   * OPEN_SQUARE_BRACKET
   */
  OPEN_SQUARE_BRACKET: 219,
  // needs localization
  /**
   * BACKSLASH
   */
  BACKSLASH: 220,
  // needs localization
  /**
   * CLOSE_SQUARE_BRACKET
   */
  CLOSE_SQUARE_BRACKET: 221,
  // needs localization
  /**
   * WIN_KEY
   */
  WIN_KEY: 224,
  /**
   * MAC_FF_META
   */
  MAC_FF_META: 224,
  // Firefox (Gecko) fires this for the meta key instead of 91
  /**
   * WIN_IME
   */
  WIN_IME: 229,
  // ======================== Function ========================
  /**
   * whether text and modified key is entered at the same time.
   */
  isTextModifyingKeyEvent: function(t) {
    var r = t.keyCode;
    if (t.altKey && !t.ctrlKey || t.metaKey || // Function keys don't generate text
    r >= Y.F1 && r <= Y.F12)
      return !1;
    switch (r) {
      case Y.ALT:
      case Y.CAPS_LOCK:
      case Y.CONTEXT_MENU:
      case Y.CTRL:
      case Y.DOWN:
      case Y.END:
      case Y.ESC:
      case Y.HOME:
      case Y.INSERT:
      case Y.LEFT:
      case Y.MAC_FF_META:
      case Y.META:
      case Y.NUMLOCK:
      case Y.NUM_CENTER:
      case Y.PAGE_DOWN:
      case Y.PAGE_UP:
      case Y.PAUSE:
      case Y.PRINT_SCREEN:
      case Y.RIGHT:
      case Y.SHIFT:
      case Y.UP:
      case Y.WIN_KEY:
      case Y.WIN_KEY_RIGHT:
        return !1;
      default:
        return !0;
    }
  },
  /**
   * whether character is entered.
   */
  isCharacterKey: function(t) {
    if (t >= Y.ZERO && t <= Y.NINE || t >= Y.NUM_ZERO && t <= Y.NUM_MULTIPLY || t >= Y.A && t <= Y.Z || window.navigator.userAgent.indexOf("WebKit") !== -1 && t === 0)
      return !0;
    switch (t) {
      case Y.SPACE:
      case Y.QUESTION_MARK:
      case Y.NUM_PLUS:
      case Y.NUM_MINUS:
      case Y.NUM_PERIOD:
      case Y.NUM_DIVISION:
      case Y.SEMICOLON:
      case Y.DASH:
      case Y.EQUALS:
      case Y.COMMA:
      case Y.PERIOD:
      case Y.SLASH:
      case Y.APOSTROPHE:
      case Y.SINGLE_QUOTE:
      case Y.OPEN_SQUARE_BRACKET:
      case Y.BACKSLASH:
      case Y.CLOSE_SQUARE_BRACKET:
        return !0;
      default:
        return !1;
    }
  }
}, vc = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var r = e.prefixCls, n = e.style, o = e.className, i = e.duration, a = i === void 0 ? 4.5 : i, s = e.eventKey, l = e.content, c = e.closable, f = e.closeIcon, u = f === void 0 ? "x" : f, m = e.props, g = e.onClick, p = e.onNoticeClose, d = e.times, h = y.useState(!1), x = pe(h, 2), E = x[0], A = x[1], _ = function() {
    p(s);
  }, v = function(B) {
    (B.key === "Enter" || B.code === "Enter" || B.keyCode === Y.ENTER) && _();
  };
  y.useEffect(function() {
    if (!E && a > 0) {
      var w = setTimeout(function() {
        _();
      }, a * 1e3);
      return function() {
        clearTimeout(w);
      };
    }
  }, [a, E, d]);
  var R = "".concat(r, "-notice");
  return /* @__PURE__ */ y.createElement("div", $e({}, m, {
    ref: t,
    className: Te(R, o, ae({}, "".concat(R, "-closable"), c)),
    style: n,
    onMouseEnter: function() {
      A(!0);
    },
    onMouseLeave: function() {
      A(!1);
    },
    onClick: g
  }), /* @__PURE__ */ y.createElement("div", {
    className: "".concat(R, "-content")
  }, l), c && /* @__PURE__ */ y.createElement("a", {
    tabIndex: 0,
    className: "".concat(R, "-close"),
    onKeyDown: v,
    onClick: function(B) {
      B.preventDefault(), B.stopPropagation(), _();
    }
  }, u));
}), yc = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var r = e.prefixCls, n = r === void 0 ? "rc-notification" : r, o = e.container, i = e.motion, a = e.maxCount, s = e.className, l = e.style, c = e.onAllRemoved, f = y.useState([]), u = pe(f, 2), m = u[0], g = u[1], p = function(w) {
    var B, D = m.find(function($) {
      return $.key === w;
    });
    D == null || (B = D.onClose) === null || B === void 0 || B.call(D), g(function($) {
      return $.filter(function(z) {
        return z.key !== w;
      });
    });
  };
  y.useImperativeHandle(t, function() {
    return {
      open: function(w) {
        g(function(B) {
          var D = Le(B), $ = D.findIndex(function(S) {
            return S.key === w.key;
          }), z = ee({}, w);
          if ($ >= 0) {
            var C;
            z.times = (((C = B[$]) === null || C === void 0 ? void 0 : C.times) || 0) + 1, D[$] = z;
          } else
            z.times = 0, D.push(z);
          return a > 0 && D.length > a && (D = D.slice(-a)), D;
        });
      },
      close: function(w) {
        p(w);
      },
      destroy: function() {
        g([]);
      }
    };
  });
  var d = y.useState({}), h = pe(d, 2), x = h[0], E = h[1];
  y.useEffect(function() {
    var R = {};
    m.forEach(function(w) {
      var B = w.placement, D = B === void 0 ? "topRight" : B;
      D && (R[D] = R[D] || [], R[D].push(w));
    }), Object.keys(x).forEach(function(w) {
      R[w] = R[w] || [];
    }), E(R);
  }, [m]);
  var A = function(w) {
    E(function(B) {
      var D = ee({}, B), $ = D[w] || [];
      return $.length || delete D[w], D;
    });
  }, _ = y.useRef(!1);
  if (y.useEffect(function() {
    Object.keys(x).length > 0 ? _.current = !0 : _.current && (c?.(), _.current = !1);
  }, [x]), !o)
    return null;
  var v = Object.keys(x);
  return /* @__PURE__ */ wa(/* @__PURE__ */ y.createElement(y.Fragment, null, v.map(function(R) {
    var w = x[R], B = w.map(function($) {
      return {
        config: $,
        key: $.key
      };
    }), D = typeof i == "function" ? i(R) : i;
    return /* @__PURE__ */ y.createElement(Rp, $e({
      key: R,
      className: Te(n, "".concat(n, "-").concat(R), s?.(R)),
      style: l?.(R),
      keys: B,
      motionAppear: !0
    }, D, {
      onAllRemoved: function() {
        A(R);
      }
    }), function($, z) {
      var C = $.config, S = $.className, O = $.style, N = C.key, j = C.times, M = C.className, U = C.style;
      return /* @__PURE__ */ y.createElement(vc, $e({}, C, {
        ref: z,
        prefixCls: n,
        className: Te(S, M),
        style: ee(ee({}, O), U),
        times: j,
        key: N,
        eventKey: N,
        onNoticeClose: p
      }));
    });
  })), o);
});
process.env.NODE_ENV !== "production" && (yc.displayName = "Notifications");
var hh = ["getContainer", "motion", "prefixCls", "maxCount", "className", "style", "onAllRemoved"], mh = function() {
  return document.body;
}, ta = 0;
function gh() {
  for (var e = {}, t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  return r.forEach(function(o) {
    o && Object.keys(o).forEach(function(i) {
      var a = o[i];
      a !== void 0 && (e[i] = a);
    });
  }), e;
}
function vh() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.getContainer, r = t === void 0 ? mh : t, n = e.motion, o = e.prefixCls, i = e.maxCount, a = e.className, s = e.style, l = e.onAllRemoved, c = Tt(e, hh), f = y.useState(), u = pe(f, 2), m = u[0], g = u[1], p = y.useRef(), d = /* @__PURE__ */ y.createElement(yc, {
    container: m,
    ref: p,
    prefixCls: o,
    motion: n,
    maxCount: i,
    className: a,
    style: s,
    onAllRemoved: l
  }), h = y.useState([]), x = pe(h, 2), E = x[0], A = x[1], _ = y.useMemo(function() {
    return {
      open: function(R) {
        var w = gh(c, R);
        (w.key === null || w.key === void 0) && (w.key = "rc-notification-".concat(ta), ta += 1), A(function(B) {
          return [].concat(Le(B), [{
            type: "open",
            config: w
          }]);
        });
      },
      close: function(R) {
        A(function(w) {
          return [].concat(Le(w), [{
            type: "close",
            key: R
          }]);
        });
      },
      destroy: function() {
        A(function(R) {
          return [].concat(Le(R), [{
            type: "destroy"
          }]);
        });
      }
    };
  }, []);
  return y.useEffect(function() {
    g(r());
  }), y.useEffect(function() {
    p.current && E.length && (E.forEach(function(v) {
      switch (v.type) {
        case "open":
          p.current.open(v.config);
          break;
        case "close":
          p.current.close(v.key);
          break;
        case "destroy":
          p.current.destroy();
          break;
      }
    }), A(function(v) {
      return v.filter(function(R) {
        return !E.includes(R);
      });
    }));
  }, [E]), [_, d];
}
var yh = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, name: "loading", theme: "outlined" };
const bh = yh;
var bc = function(t, r) {
  return /* @__PURE__ */ y.createElement(Lt, $e({}, t, {
    ref: r,
    icon: bh
  }));
};
process.env.NODE_ENV !== "production" && (bc.displayName = "LoadingOutlined");
const Sc = /* @__PURE__ */ y.forwardRef(bc), Sh = (e) => {
  const {
    componentCls: t,
    iconCls: r,
    boxShadow: n,
    colorText: o,
    colorSuccess: i,
    colorError: a,
    colorWarning: s,
    colorInfo: l,
    fontSizeLG: c,
    motionEaseInOutCirc: f,
    motionDurationSlow: u,
    marginXS: m,
    paddingXS: g,
    borderRadiusLG: p,
    zIndexPopup: d,
    // Custom token
    contentPadding: h,
    contentBg: x
  } = e, E = `${t}-notice`, A = new Di("MessageMoveIn", {
    "0%": {
      padding: 0,
      transform: "translateY(-100%)",
      opacity: 0
    },
    "100%": {
      padding: g,
      transform: "translateY(0)",
      opacity: 1
    }
  }), _ = new Di("MessageMoveOut", {
    "0%": {
      maxHeight: e.height,
      padding: g,
      opacity: 1
    },
    "100%": {
      maxHeight: 0,
      padding: 0,
      opacity: 0
    }
  }), v = {
    padding: g,
    textAlign: "center",
    [`${t}-custom-content > ${r}`]: {
      verticalAlign: "text-bottom",
      marginInlineEnd: m,
      fontSize: c
    },
    [`${E}-content`]: {
      display: "inline-block",
      padding: h,
      background: x,
      borderRadius: p,
      boxShadow: n,
      pointerEvents: "all"
    },
    [`${t}-success > ${r}`]: {
      color: i
    },
    [`${t}-error > ${r}`]: {
      color: a
    },
    [`${t}-warning > ${r}`]: {
      color: s
    },
    [`${t}-info > ${r},
      ${t}-loading > ${r}`]: {
      color: l
    }
  };
  return [
    // ============================ Holder ============================
    {
      [t]: Object.assign(Object.assign({}, Kd(e)), {
        color: o,
        position: "fixed",
        top: m,
        width: "100%",
        pointerEvents: "none",
        zIndex: d,
        [`${t}-move-up`]: {
          animationFillMode: "forwards"
        },
        [`
        ${t}-move-up-appear,
        ${t}-move-up-enter
      `]: {
          animationName: A,
          animationDuration: u,
          animationPlayState: "paused",
          animationTimingFunction: f
        },
        [`
        ${t}-move-up-appear${t}-move-up-appear-active,
        ${t}-move-up-enter${t}-move-up-enter-active
      `]: {
          animationPlayState: "running"
        },
        [`${t}-move-up-leave`]: {
          animationName: _,
          animationDuration: u,
          animationPlayState: "paused",
          animationTimingFunction: f
        },
        [`${t}-move-up-leave${t}-move-up-leave-active`]: {
          animationPlayState: "running"
        },
        "&-rtl": {
          direction: "rtl",
          span: {
            direction: "rtl"
          }
        }
      })
    },
    // ============================ Notice ============================
    {
      [t]: {
        [E]: Object.assign({}, v)
      }
    },
    // ============================= Pure =============================
    {
      [`${t}-notice-pure-panel`]: Object.assign(Object.assign({}, v), {
        padding: 0,
        textAlign: "start"
      })
    }
  ];
}, Ec = Wo("Message", (e) => {
  const t = Rt(e, {
    height: 150
  });
  return [Sh(t)];
}, (e) => ({
  zIndexPopup: e.zIndexPopupBase + 10,
  contentBg: e.colorBgElevated,
  contentPadding: `${(e.controlHeightLG - e.fontSize * e.lineHeight) / 2}px ${e.paddingSM}px`
}));
var Eh = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
const Ch = {
  info: /* @__PURE__ */ y.createElement(fh, null),
  success: /* @__PURE__ */ y.createElement(Zp, null),
  error: /* @__PURE__ */ y.createElement(rh, null),
  warning: /* @__PURE__ */ y.createElement(ch, null),
  loading: /* @__PURE__ */ y.createElement(Sc, null)
}, Cc = (e) => {
  let {
    prefixCls: t,
    type: r,
    icon: n,
    children: o
  } = e;
  return /* @__PURE__ */ y.createElement("div", {
    className: Te(`${t}-custom-content`, `${t}-${r}`)
  }, n || Ch[r], /* @__PURE__ */ y.createElement("span", null, o));
}, xh = (e) => {
  const {
    prefixCls: t,
    className: r,
    type: n,
    icon: o,
    content: i
  } = e, a = Eh(e, ["prefixCls", "className", "type", "icon", "content"]), {
    getPrefixCls: s
  } = y.useContext(ot), l = t || s("message"), [, c] = Ec(l);
  return /* @__PURE__ */ y.createElement(vc, Object.assign({}, a, {
    prefixCls: l,
    className: Te(r, c, `${l}-notice-pure-panel`),
    eventKey: "pure",
    duration: null,
    content: /* @__PURE__ */ y.createElement(Cc, {
      prefixCls: l,
      type: n,
      icon: o
    }, i)
  }));
}, wh = xh;
function _h(e, t) {
  return {
    motionName: t ?? `${e}-move-up`
  };
}
function Ko(e) {
  let t;
  const r = new Promise((o) => {
    t = e(() => {
      o(!0);
    });
  }), n = () => {
    t?.();
  };
  return n.then = (o, i) => r.then(o, i), n.promise = r, n;
}
var Oh = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
const Th = 8, Ah = 3, Rh = /* @__PURE__ */ y.forwardRef((e, t) => {
  const {
    top: r,
    prefixCls: n,
    getContainer: o,
    maxCount: i,
    duration: a = Ah,
    rtl: s,
    transitionName: l,
    onAllRemoved: c
  } = e, {
    getPrefixCls: f,
    getPopupContainer: u,
    message: m
  } = y.useContext(ot), g = n || f("message"), [, p] = Ec(g), d = () => ({
    left: "50%",
    transform: "translateX(-50%)",
    top: r ?? Th
  }), h = () => Te(p, {
    [`${g}-rtl`]: s
  }), x = () => _h(g, l), E = /* @__PURE__ */ y.createElement("span", {
    className: `${g}-close-x`
  }, /* @__PURE__ */ y.createElement(ih, {
    className: `${g}-close-icon`
  })), [A, _] = vh({
    prefixCls: g,
    style: d,
    className: h,
    motion: x,
    closable: !1,
    closeIcon: E,
    duration: a,
    getContainer: () => o?.() || u?.() || document.body,
    maxCount: i,
    onAllRemoved: c
  });
  return y.useImperativeHandle(t, () => Object.assign(Object.assign({}, A), {
    prefixCls: g,
    hashId: p,
    message: m
  })), _;
});
let ra = 0;
function xc(e) {
  const t = y.useRef(null);
  return [y.useMemo(() => {
    const n = (l) => {
      var c;
      (c = t.current) === null || c === void 0 || c.close(l);
    }, o = (l) => {
      if (!t.current) {
        process.env.NODE_ENV !== "production" && qe(!1, "Message", "You are calling notice in render which will break in React 18 concurrent mode. Please trigger in effect instead.");
        const w = () => {
        };
        return w.then = () => {
        }, w;
      }
      const {
        open: c,
        prefixCls: f,
        hashId: u,
        message: m
      } = t.current, g = `${f}-notice`, {
        content: p,
        icon: d,
        type: h,
        key: x,
        className: E,
        style: A,
        onClose: _
      } = l, v = Oh(l, ["content", "icon", "type", "key", "className", "style", "onClose"]);
      let R = x;
      return R == null && (ra += 1, R = `antd-message-${ra}`), Ko((w) => (c(Object.assign(Object.assign({}, v), {
        key: R,
        content: /* @__PURE__ */ y.createElement(Cc, {
          prefixCls: f,
          type: h,
          icon: d
        }, p),
        placement: "top",
        className: Te(h && `${g}-${h}`, u, E, m?.className),
        style: Object.assign(Object.assign({}, m?.style), A),
        onClose: () => {
          _?.(), w();
        }
      })), () => {
        n(R);
      }));
    }, a = {
      open: o,
      destroy: (l) => {
        var c;
        l !== void 0 ? n(l) : (c = t.current) === null || c === void 0 || c.destroy();
      }
    };
    return ["info", "success", "warning", "error", "loading"].forEach((l) => {
      const c = (f, u, m) => {
        let g;
        f && typeof f == "object" && "content" in f ? g = f : g = {
          content: f
        };
        let p, d;
        typeof u == "function" ? d = u : (p = u, d = m);
        const h = Object.assign(Object.assign({
          onClose: d,
          duration: p
        }, g), {
          type: l
        });
        return o(h);
      };
      a[l] = c;
    }), a;
  }, []), /* @__PURE__ */ y.createElement(Rh, Object.assign({
    key: "message-holder"
  }, e, {
    ref: t
  }))];
}
function Ph(e) {
  return xc(e);
}
function Jt() {
  Jt = function() {
    return e;
  };
  var e = {}, t = Object.prototype, r = t.hasOwnProperty, n = Object.defineProperty || function(C, S, O) {
    C[S] = O.value;
  }, o = typeof Symbol == "function" ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", s = o.toStringTag || "@@toStringTag";
  function l(C, S, O) {
    return Object.defineProperty(C, S, {
      value: O,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), C[S];
  }
  try {
    l({}, "");
  } catch {
    l = function(O, N, j) {
      return O[N] = j;
    };
  }
  function c(C, S, O, N) {
    var j = S && S.prototype instanceof m ? S : m, M = Object.create(j.prototype), U = new D(N || []);
    return n(M, "_invoke", {
      value: v(C, O, U)
    }), M;
  }
  function f(C, S, O) {
    try {
      return {
        type: "normal",
        arg: C.call(S, O)
      };
    } catch (N) {
      return {
        type: "throw",
        arg: N
      };
    }
  }
  e.wrap = c;
  var u = {};
  function m() {
  }
  function g() {
  }
  function p() {
  }
  var d = {};
  l(d, i, function() {
    return this;
  });
  var h = Object.getPrototypeOf, x = h && h(h($([])));
  x && x !== t && r.call(x, i) && (d = x);
  var E = p.prototype = m.prototype = Object.create(d);
  function A(C) {
    ["next", "throw", "return"].forEach(function(S) {
      l(C, S, function(O) {
        return this._invoke(S, O);
      });
    });
  }
  function _(C, S) {
    function O(j, M, U, Q) {
      var X = f(C[j], C, M);
      if (X.type !== "throw") {
        var re = X.arg, I = re.value;
        return I && ye(I) == "object" && r.call(I, "__await") ? S.resolve(I.__await).then(function(L) {
          O("next", L, U, Q);
        }, function(L) {
          O("throw", L, U, Q);
        }) : S.resolve(I).then(function(L) {
          re.value = L, U(re);
        }, function(L) {
          return O("throw", L, U, Q);
        });
      }
      Q(X.arg);
    }
    var N;
    n(this, "_invoke", {
      value: function(M, U) {
        function Q() {
          return new S(function(X, re) {
            O(M, U, X, re);
          });
        }
        return N = N ? N.then(Q, Q) : Q();
      }
    });
  }
  function v(C, S, O) {
    var N = "suspendedStart";
    return function(j, M) {
      if (N === "executing")
        throw new Error("Generator is already running");
      if (N === "completed") {
        if (j === "throw")
          throw M;
        return z();
      }
      for (O.method = j, O.arg = M; ; ) {
        var U = O.delegate;
        if (U) {
          var Q = R(U, O);
          if (Q) {
            if (Q === u)
              continue;
            return Q;
          }
        }
        if (O.method === "next")
          O.sent = O._sent = O.arg;
        else if (O.method === "throw") {
          if (N === "suspendedStart")
            throw N = "completed", O.arg;
          O.dispatchException(O.arg);
        } else
          O.method === "return" && O.abrupt("return", O.arg);
        N = "executing";
        var X = f(C, S, O);
        if (X.type === "normal") {
          if (N = O.done ? "completed" : "suspendedYield", X.arg === u)
            continue;
          return {
            value: X.arg,
            done: O.done
          };
        }
        X.type === "throw" && (N = "completed", O.method = "throw", O.arg = X.arg);
      }
    };
  }
  function R(C, S) {
    var O = S.method, N = C.iterator[O];
    if (N === void 0)
      return S.delegate = null, O === "throw" && C.iterator.return && (S.method = "return", S.arg = void 0, R(C, S), S.method === "throw") || O !== "return" && (S.method = "throw", S.arg = new TypeError("The iterator does not provide a '" + O + "' method")), u;
    var j = f(N, C.iterator, S.arg);
    if (j.type === "throw")
      return S.method = "throw", S.arg = j.arg, S.delegate = null, u;
    var M = j.arg;
    return M ? M.done ? (S[C.resultName] = M.value, S.next = C.nextLoc, S.method !== "return" && (S.method = "next", S.arg = void 0), S.delegate = null, u) : M : (S.method = "throw", S.arg = new TypeError("iterator result is not an object"), S.delegate = null, u);
  }
  function w(C) {
    var S = {
      tryLoc: C[0]
    };
    1 in C && (S.catchLoc = C[1]), 2 in C && (S.finallyLoc = C[2], S.afterLoc = C[3]), this.tryEntries.push(S);
  }
  function B(C) {
    var S = C.completion || {};
    S.type = "normal", delete S.arg, C.completion = S;
  }
  function D(C) {
    this.tryEntries = [{
      tryLoc: "root"
    }], C.forEach(w, this), this.reset(!0);
  }
  function $(C) {
    if (C) {
      var S = C[i];
      if (S)
        return S.call(C);
      if (typeof C.next == "function")
        return C;
      if (!isNaN(C.length)) {
        var O = -1, N = function j() {
          for (; ++O < C.length; )
            if (r.call(C, O))
              return j.value = C[O], j.done = !1, j;
          return j.value = void 0, j.done = !0, j;
        };
        return N.next = N;
      }
    }
    return {
      next: z
    };
  }
  function z() {
    return {
      value: void 0,
      done: !0
    };
  }
  return g.prototype = p, n(E, "constructor", {
    value: p,
    configurable: !0
  }), n(p, "constructor", {
    value: g,
    configurable: !0
  }), g.displayName = l(p, s, "GeneratorFunction"), e.isGeneratorFunction = function(C) {
    var S = typeof C == "function" && C.constructor;
    return !!S && (S === g || (S.displayName || S.name) === "GeneratorFunction");
  }, e.mark = function(C) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(C, p) : (C.__proto__ = p, l(C, s, "GeneratorFunction")), C.prototype = Object.create(E), C;
  }, e.awrap = function(C) {
    return {
      __await: C
    };
  }, A(_.prototype), l(_.prototype, a, function() {
    return this;
  }), e.AsyncIterator = _, e.async = function(C, S, O, N, j) {
    j === void 0 && (j = Promise);
    var M = new _(c(C, S, O, N), j);
    return e.isGeneratorFunction(S) ? M : M.next().then(function(U) {
      return U.done ? U.value : M.next();
    });
  }, A(E), l(E, s, "Generator"), l(E, i, function() {
    return this;
  }), l(E, "toString", function() {
    return "[object Generator]";
  }), e.keys = function(C) {
    var S = Object(C), O = [];
    for (var N in S)
      O.push(N);
    return O.reverse(), function j() {
      for (; O.length; ) {
        var M = O.pop();
        if (M in S)
          return j.value = M, j.done = !1, j;
      }
      return j.done = !0, j;
    };
  }, e.values = $, D.prototype = {
    constructor: D,
    reset: function(S) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(B), !S)
        for (var O in this)
          O.charAt(0) === "t" && r.call(this, O) && !isNaN(+O.slice(1)) && (this[O] = void 0);
    },
    stop: function() {
      this.done = !0;
      var S = this.tryEntries[0].completion;
      if (S.type === "throw")
        throw S.arg;
      return this.rval;
    },
    dispatchException: function(S) {
      if (this.done)
        throw S;
      var O = this;
      function N(re, I) {
        return U.type = "throw", U.arg = S, O.next = re, I && (O.method = "next", O.arg = void 0), !!I;
      }
      for (var j = this.tryEntries.length - 1; j >= 0; --j) {
        var M = this.tryEntries[j], U = M.completion;
        if (M.tryLoc === "root")
          return N("end");
        if (M.tryLoc <= this.prev) {
          var Q = r.call(M, "catchLoc"), X = r.call(M, "finallyLoc");
          if (Q && X) {
            if (this.prev < M.catchLoc)
              return N(M.catchLoc, !0);
            if (this.prev < M.finallyLoc)
              return N(M.finallyLoc);
          } else if (Q) {
            if (this.prev < M.catchLoc)
              return N(M.catchLoc, !0);
          } else {
            if (!X)
              throw new Error("try statement without catch or finally");
            if (this.prev < M.finallyLoc)
              return N(M.finallyLoc);
          }
        }
      }
    },
    abrupt: function(S, O) {
      for (var N = this.tryEntries.length - 1; N >= 0; --N) {
        var j = this.tryEntries[N];
        if (j.tryLoc <= this.prev && r.call(j, "finallyLoc") && this.prev < j.finallyLoc) {
          var M = j;
          break;
        }
      }
      M && (S === "break" || S === "continue") && M.tryLoc <= O && O <= M.finallyLoc && (M = null);
      var U = M ? M.completion : {};
      return U.type = S, U.arg = O, M ? (this.method = "next", this.next = M.finallyLoc, u) : this.complete(U);
    },
    complete: function(S, O) {
      if (S.type === "throw")
        throw S.arg;
      return S.type === "break" || S.type === "continue" ? this.next = S.arg : S.type === "return" ? (this.rval = this.arg = S.arg, this.method = "return", this.next = "end") : S.type === "normal" && O && (this.next = O), u;
    },
    finish: function(S) {
      for (var O = this.tryEntries.length - 1; O >= 0; --O) {
        var N = this.tryEntries[O];
        if (N.finallyLoc === S)
          return this.complete(N.completion, N.afterLoc), B(N), u;
      }
    },
    catch: function(S) {
      for (var O = this.tryEntries.length - 1; O >= 0; --O) {
        var N = this.tryEntries[O];
        if (N.tryLoc === S) {
          var j = N.completion;
          if (j.type === "throw") {
            var M = j.arg;
            B(N);
          }
          return M;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function(S, O, N) {
      return this.delegate = {
        iterator: $(S),
        resultName: O,
        nextLoc: N
      }, this.method === "next" && (this.arg = void 0), u;
    }
  }, e;
}
function na(e, t, r, n, o, i, a) {
  try {
    var s = e[i](a), l = s.value;
  } catch (c) {
    r(c);
    return;
  }
  s.done ? t(l) : Promise.resolve(l).then(n, o);
}
function wc(e) {
  return function() {
    var t = this, r = arguments;
    return new Promise(function(n, o) {
      var i = e.apply(t, r);
      function a(l) {
        na(i, n, o, a, s, "next", l);
      }
      function s(l) {
        na(i, n, o, a, s, "throw", l);
      }
      a(void 0);
    });
  };
}
var ar = ee({}, ol), Nh = ar.version, $h = ar.render, Ih = ar.unmountComponentAtNode, ln;
try {
  var Mh = Number((Nh || "").split(".")[0]);
  Mh >= 18 && (ln = ar.createRoot);
} catch {
}
function oa(e) {
  var t = ar.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  t && ye(t) === "object" && (t.usingClientEntryPoint = e);
}
var Ur = "__rc_react_root__";
function kh(e, t) {
  oa(!0);
  var r = t[Ur] || ln(t);
  oa(!1), r.render(e), t[Ur] = r;
}
function Lh(e, t) {
  $h(e, t);
}
function _c(e, t) {
  if (ln) {
    kh(e, t);
    return;
  }
  Lh(e, t);
}
function Dh(e) {
  return go.apply(this, arguments);
}
function go() {
  return go = wc(/* @__PURE__ */ Jt().mark(function e(t) {
    return Jt().wrap(function(n) {
      for (; ; )
        switch (n.prev = n.next) {
          case 0:
            return n.abrupt("return", Promise.resolve().then(function() {
              var o;
              (o = t[Ur]) === null || o === void 0 || o.unmount(), delete t[Ur];
            }));
          case 1:
          case "end":
            return n.stop();
        }
    }, e);
  })), go.apply(this, arguments);
}
function jh(e) {
  Ih(e);
}
function Fh(e) {
  return vo.apply(this, arguments);
}
function vo() {
  return vo = wc(/* @__PURE__ */ Jt().mark(function e(t) {
    return Jt().wrap(function(n) {
      for (; ; )
        switch (n.prev = n.next) {
          case 0:
            if (ln === void 0) {
              n.next = 2;
              break;
            }
            return n.abrupt("return", Dh(t));
          case 2:
            jh(t);
          case 3:
          case "end":
            return n.stop();
        }
    }, e);
  })), vo.apply(this, arguments);
}
const Hh = function(e) {
  if (!e)
    return !1;
  if (e instanceof Element) {
    if (e.offsetParent)
      return !0;
    if (e.getBBox) {
      var t = e.getBBox(), r = t.width, n = t.height;
      if (r || n)
        return !0;
    }
    if (e.getBoundingClientRect) {
      var o = e.getBoundingClientRect(), i = o.width, a = o.height;
      if (i || a)
        return !0;
    }
  }
  return !1;
}, Bh = (e) => {
  const {
    componentCls: t,
    colorPrimary: r
  } = e;
  return {
    [t]: {
      position: "absolute",
      background: "transparent",
      pointerEvents: "none",
      boxSizing: "border-box",
      color: `var(--wave-color, ${r})`,
      boxShadow: "0 0 0 0 currentcolor",
      opacity: 0.2,
      // =================== Motion ===================
      "&.wave-motion-appear": {
        transition: [`box-shadow 0.4s ${e.motionEaseOutCirc}`, `opacity 2s ${e.motionEaseOutCirc}`].join(","),
        "&-active": {
          boxShadow: "0 0 0 6px currentcolor",
          opacity: 0
        }
      }
    }
  };
}, zh = Wo("Wave", (e) => [Bh(e)]);
function Uh(e) {
  const t = (e || "").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);
  return t && t[1] && t[2] && t[3] ? !(t[1] === t[2] && t[2] === t[3]) : !0;
}
function $n(e) {
  return e && e !== "#fff" && e !== "#ffffff" && e !== "rgb(255, 255, 255)" && e !== "rgba(255, 255, 255, 1)" && Uh(e) && !/rgba\((?:\d*, ){3}0\)/.test(e) && // any transparent rgba color
  e !== "transparent";
}
function Wh(e) {
  const {
    borderTopColor: t,
    borderColor: r,
    backgroundColor: n
  } = getComputedStyle(e);
  return $n(t) ? t : $n(r) ? r : $n(n) ? n : null;
}
function In(e) {
  return Number.isNaN(e) ? 0 : e;
}
const Vh = (e) => {
  const {
    className: t,
    target: r
  } = e, n = y.useRef(null), [o, i] = y.useState(null), [a, s] = y.useState([]), [l, c] = y.useState(0), [f, u] = y.useState(0), [m, g] = y.useState(0), [p, d] = y.useState(0), [h, x] = y.useState(!1), E = {
    left: l,
    top: f,
    width: m,
    height: p,
    borderRadius: a.map((_) => `${_}px`).join(" ")
  };
  o && (E["--wave-color"] = o);
  function A() {
    const _ = getComputedStyle(r);
    i(Wh(r));
    const v = _.position === "static", {
      borderLeftWidth: R,
      borderTopWidth: w
    } = _;
    c(v ? r.offsetLeft : In(-parseFloat(R))), u(v ? r.offsetTop : In(-parseFloat(w))), g(r.offsetWidth), d(r.offsetHeight);
    const {
      borderTopLeftRadius: B,
      borderTopRightRadius: D,
      borderBottomLeftRadius: $,
      borderBottomRightRadius: z
    } = _;
    s([B, D, z, $].map((C) => In(parseFloat(C))));
  }
  return y.useEffect(() => {
    if (r) {
      const _ = Kt(() => {
        A(), x(!0);
      });
      let v;
      return typeof ResizeObserver < "u" && (v = new ResizeObserver(A), v.observe(r)), () => {
        Kt.cancel(_), v?.disconnect();
      };
    }
  }, []), h ? /* @__PURE__ */ y.createElement(Go, {
    visible: !0,
    motionAppear: !0,
    motionName: "wave-motion",
    motionDeadline: 5e3,
    onAppearEnd: (_, v) => {
      var R;
      if (v.deadline || v.propertyName === "opacity") {
        const w = (R = n.current) === null || R === void 0 ? void 0 : R.parentElement;
        Fh(w).then(() => {
          w?.remove();
        });
      }
      return !1;
    }
  }, (_) => {
    let {
      className: v
    } = _;
    return /* @__PURE__ */ y.createElement("div", {
      ref: n,
      className: Te(t, v),
      style: E
    });
  }) : null;
};
function Gh(e, t) {
  const r = document.createElement("div");
  r.style.position = "absolute", r.style.left = "0px", r.style.top = "0px", e?.insertBefore(r, e?.firstChild), _c(/* @__PURE__ */ y.createElement(Vh, {
    target: e,
    className: t
  }), r);
}
function Yh(e, t) {
  function r() {
    const n = e.current;
    Gh(n, t);
  }
  return r;
}
const Oc = (e) => {
  const {
    children: t,
    disabled: r
  } = e, {
    getPrefixCls: n
  } = Ne(ot), o = je(null), i = n("wave"), [, a] = zh(i), s = Yh(o, Te(i, a));
  if (de.useEffect(() => {
    const c = o.current;
    if (!c || c.nodeType !== 1 || r)
      return;
    const f = (u) => {
      u.target.tagName === "INPUT" || !Hh(u.target) || // No need wave
      !c.getAttribute || c.getAttribute("disabled") || c.disabled || c.className.includes("disabled") || c.className.includes("-leave") || s();
    };
    return c.addEventListener("click", f, !0), () => {
      c.removeEventListener("click", f, !0);
    };
  }, [r]), !/* @__PURE__ */ de.isValidElement(t))
    return t ?? null;
  const l = is(t) ? os(t.ref, o) : o;
  return gc(t, {
    ref: l
  });
};
process.env.NODE_ENV !== "production" && (Oc.displayName = "Wave");
const Kh = Oc, qh = (e) => {
  const t = de.useContext(an);
  return de.useMemo(() => e ? typeof e == "string" ? e ?? t : e instanceof Function ? e(t) : t : t, [e, t]);
}, Xh = qh;
globalThis && globalThis.__rest;
const Qh = /* @__PURE__ */ y.createContext(null), Jh = (e, t) => {
  const r = y.useContext(Qh), n = y.useMemo(() => {
    if (!r)
      return "";
    const {
      compactDirection: o,
      isFirstItem: i,
      isLastItem: a
    } = r, s = o === "vertical" ? "-vertical-" : "-";
    return Te(`${e}-compact${s}item`, {
      [`${e}-compact${s}first-item`]: i,
      [`${e}-compact${s}last-item`]: a,
      [`${e}-compact${s}item-rtl`]: t === "rtl"
    });
  }, [e, t, r]);
  return {
    compactSize: r?.compactSize,
    compactDirection: r?.compactDirection,
    compactItemClassnames: n
  };
}, Zh = /* @__PURE__ */ Oo((e, t) => {
  const {
    className: r,
    style: n,
    children: o,
    prefixCls: i
  } = e, a = Te(`${i}-icon`, r);
  return /* @__PURE__ */ de.createElement("span", {
    ref: t,
    className: a,
    style: n
  }, o);
}), Tc = Zh, ia = /* @__PURE__ */ Oo((e, t) => {
  let {
    prefixCls: r,
    className: n,
    style: o,
    iconClassName: i
  } = e;
  const a = Te(`${r}-loading-icon`, n);
  return /* @__PURE__ */ de.createElement(Tc, {
    prefixCls: r,
    className: a,
    style: o,
    ref: t
  }, /* @__PURE__ */ de.createElement(Sc, {
    className: i
  }));
}), Mn = () => ({
  width: 0,
  opacity: 0,
  transform: "scale(0)"
}), kn = (e) => ({
  width: e.scrollWidth,
  opacity: 1,
  transform: "scale(1)"
}), em = (e) => {
  const {
    prefixCls: t,
    loading: r,
    existIcon: n,
    className: o,
    style: i
  } = e, a = !!r;
  return n ? /* @__PURE__ */ de.createElement(ia, {
    prefixCls: t,
    className: o,
    style: i
  }) : /* @__PURE__ */ de.createElement(Go, {
    visible: a,
    // We do not really use this motionName
    motionName: `${t}-loading-icon-motion`,
    removeOnLeave: !0,
    onAppearStart: Mn,
    onAppearActive: kn,
    onEnterStart: Mn,
    onEnterActive: kn,
    onLeaveStart: kn,
    onLeaveActive: Mn
  }, (s, l) => {
    let {
      className: c,
      style: f
    } = s;
    return /* @__PURE__ */ de.createElement(ia, {
      prefixCls: t,
      className: o,
      style: Object.assign(Object.assign({}, i), f),
      ref: l,
      iconClassName: c
    });
  });
}, tm = em;
var rm = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
const Ac = /* @__PURE__ */ y.createContext(void 0), nm = (e) => {
  const {
    getPrefixCls: t,
    direction: r
  } = y.useContext(ot), {
    prefixCls: n,
    size: o,
    className: i
  } = e, a = rm(e, ["prefixCls", "size", "className"]), s = t("btn-group", n), [, , l] = on();
  let c = "";
  switch (o) {
    case "large":
      c = "lg";
      break;
    case "small":
      c = "sm";
      break;
    case "middle":
    case void 0:
      break;
    default:
      process.env.NODE_ENV !== "production" && qe(!o, "Button.Group", "Invalid prop `size`.");
  }
  const f = Te(s, {
    [`${s}-${c}`]: c,
    [`${s}-rtl`]: r === "rtl"
  }, i, l);
  return /* @__PURE__ */ y.createElement(Ac.Provider, {
    value: o
  }, /* @__PURE__ */ y.createElement("div", Object.assign({}, a, {
    className: f
  })));
}, om = nm, aa = /^[\u4e00-\u9fa5]{2}$/, yo = aa.test.bind(aa);
function im(e) {
  return typeof e == "string";
}
function Er(e) {
  return e === "text" || e === "link";
}
function am(e, t) {
  if (e == null)
    return;
  const r = t ? " " : "";
  return typeof e != "string" && typeof e != "number" && im(e.type) && yo(e.props.children) ? gc(e, {
    children: e.props.children.split("").join(r)
  }) : typeof e == "string" ? yo(e) ? /* @__PURE__ */ de.createElement("span", null, e.split("").join(r)) : /* @__PURE__ */ de.createElement("span", null, e) : dh(e) ? /* @__PURE__ */ de.createElement("span", null, e) : e;
}
function sm(e, t) {
  let r = !1;
  const n = [];
  return de.Children.forEach(e, (o) => {
    const i = typeof o, a = i === "string" || i === "number";
    if (r && a) {
      const s = n.length - 1, l = n[s];
      n[s] = `${l}${o}`;
    } else
      n.push(o);
    r = a;
  }), de.Children.map(n, (o) => am(o, t));
}
function cm(e, t, r) {
  const {
    focusElCls: n,
    focus: o,
    borderElCls: i
  } = r, a = i ? "> *" : "", s = ["hover", o ? "focus" : null, "active"].filter(Boolean).map((l) => `&:${l} ${a}`).join(",");
  return {
    [`&-item:not(${t}-last-item)`]: {
      marginInlineEnd: -e.lineWidth
    },
    "&-item": Object.assign(Object.assign({
      [s]: {
        zIndex: 2
      }
    }, n ? {
      [`&${n}`]: {
        zIndex: 2
      }
    } : {}), {
      [`&[disabled] ${a}`]: {
        zIndex: 0
      }
    })
  };
}
function lm(e, t, r) {
  const {
    borderElCls: n
  } = r, o = n ? `> ${n}` : "";
  return {
    [`&-item:not(${t}-first-item):not(${t}-last-item) ${o}`]: {
      borderRadius: 0
    },
    [`&-item:not(${t}-last-item)${t}-first-item`]: {
      [`& ${o}, &${e}-sm ${o}, &${e}-lg ${o}`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`&-item:not(${t}-first-item)${t}-last-item`]: {
      [`& ${o}, &${e}-sm ${o}, &${e}-lg ${o}`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    }
  };
}
function um(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    focus: !0
  };
  const {
    componentCls: r
  } = e, n = `${r}-compact`;
  return {
    [n]: Object.assign(Object.assign({}, cm(e, n, t)), lm(r, n, t))
  };
}
function fm(e, t) {
  return {
    // border collapse
    [`&-item:not(${t}-last-item)`]: {
      marginBottom: -e.lineWidth
    },
    "&-item": {
      "&:hover,&:focus,&:active": {
        zIndex: 2
      },
      "&[disabled]": {
        zIndex: 0
      }
    }
  };
}
function dm(e, t) {
  return {
    [`&-item:not(${t}-first-item):not(${t}-last-item)`]: {
      borderRadius: 0
    },
    [`&-item${t}-first-item:not(${t}-last-item)`]: {
      [`&, &${e}-sm, &${e}-lg`]: {
        borderEndEndRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [`&-item${t}-last-item:not(${t}-first-item)`]: {
      [`&, &${e}-sm, &${e}-lg`]: {
        borderStartStartRadius: 0,
        borderStartEndRadius: 0
      }
    }
  };
}
function pm(e) {
  const t = `${e.componentCls}-compact-vertical`;
  return {
    [t]: Object.assign(Object.assign({}, fm(e, t)), dm(e.componentCls, t))
  };
}
const sa = (e, t) => ({
  // Border
  [`> span, > ${e}`]: {
    "&:not(:last-child)": {
      [`&, & > ${e}`]: {
        "&:not(:disabled)": {
          borderInlineEndColor: t
        }
      }
    },
    "&:not(:first-child)": {
      [`&, & > ${e}`]: {
        "&:not(:disabled)": {
          borderInlineStartColor: t
        }
      }
    }
  }
}), hm = (e) => {
  const {
    componentCls: t,
    fontSize: r,
    lineWidth: n,
    colorPrimaryHover: o,
    colorErrorHover: i
  } = e;
  return {
    [`${t}-group`]: [
      {
        position: "relative",
        display: "inline-flex",
        // Border
        [`> span, > ${t}`]: {
          "&:not(:last-child)": {
            [`&, & > ${t}`]: {
              borderStartEndRadius: 0,
              borderEndEndRadius: 0
            }
          },
          "&:not(:first-child)": {
            marginInlineStart: -n,
            [`&, & > ${t}`]: {
              borderStartStartRadius: 0,
              borderEndStartRadius: 0
            }
          }
        },
        [t]: {
          position: "relative",
          zIndex: 1,
          "&:hover,\n          &:focus,\n          &:active": {
            zIndex: 2
          },
          "&[disabled]": {
            zIndex: 0
          }
        },
        [`${t}-icon-only`]: {
          fontSize: r
        }
      },
      // Border Color
      sa(`${t}-primary`, o),
      sa(`${t}-danger`, i)
    ]
  };
}, mm = hm, gm = (e) => {
  const {
    componentCls: t,
    iconCls: r,
    buttonFontWeight: n
  } = e;
  return {
    [t]: {
      outline: "none",
      position: "relative",
      display: "inline-block",
      fontWeight: n,
      whiteSpace: "nowrap",
      textAlign: "center",
      backgroundImage: "none",
      backgroundColor: "transparent",
      border: `${e.lineWidth}px ${e.lineType} transparent`,
      cursor: "pointer",
      transition: `all ${e.motionDurationMid} ${e.motionEaseInOut}`,
      userSelect: "none",
      touchAction: "manipulation",
      lineHeight: e.lineHeight,
      color: e.colorText,
      "&:disabled > *": {
        pointerEvents: "none"
      },
      "> span": {
        display: "inline-block"
      },
      [`${t}-icon`]: {
        lineHeight: 0
      },
      // Leave a space between icon and text.
      [`> ${r} + span, > span + ${r}`]: {
        marginInlineStart: e.marginXS
      },
      [`&:not(${t}-icon-only) > ${t}-icon`]: {
        [`&${t}-loading-icon, &:not(:last-child)`]: {
          marginInlineEnd: e.marginXS
        }
      },
      "> a": {
        color: "currentColor"
      },
      "&:not(:disabled)": Object.assign({}, Zd(e)),
      // make `btn-icon-only` not too narrow
      [`&-icon-only${t}-compact-item`]: {
        flex: "none"
      },
      // Special styles for Primary Button
      [`&-compact-item${t}-primary`]: {
        [`&:not([disabled]) + ${t}-compact-item${t}-primary:not([disabled])`]: {
          position: "relative",
          "&:before": {
            position: "absolute",
            top: -e.lineWidth,
            insetInlineStart: -e.lineWidth,
            display: "inline-block",
            width: e.lineWidth,
            height: `calc(100% + ${e.lineWidth * 2}px)`,
            backgroundColor: e.colorPrimaryHover,
            content: '""'
          }
        }
      },
      // Special styles for Primary Button
      "&-compact-vertical-item": {
        [`&${t}-primary`]: {
          [`&:not([disabled]) + ${t}-compact-vertical-item${t}-primary:not([disabled])`]: {
            position: "relative",
            "&:before": {
              position: "absolute",
              top: -e.lineWidth,
              insetInlineStart: -e.lineWidth,
              display: "inline-block",
              width: `calc(100% + ${e.lineWidth * 2}px)`,
              height: e.lineWidth,
              backgroundColor: e.colorPrimaryHover,
              content: '""'
            }
          }
        }
      }
    }
  };
}, nt = (e, t, r) => ({
  [`&:not(:disabled):not(${e}-disabled)`]: {
    "&:hover": t,
    "&:active": r
  }
}), vm = (e) => ({
  minWidth: e.controlHeight,
  paddingInlineStart: 0,
  paddingInlineEnd: 0,
  borderRadius: "50%"
}), ym = (e) => ({
  borderRadius: e.controlHeight,
  paddingInlineStart: e.controlHeight / 2,
  paddingInlineEnd: e.controlHeight / 2
}), bm = (e) => ({
  cursor: "not-allowed",
  borderColor: e.colorBorder,
  color: e.colorTextDisabled,
  backgroundColor: e.colorBgContainerDisabled,
  boxShadow: "none"
}), Zt = (e, t, r, n, o, i, a) => ({
  [`&${e}-background-ghost`]: Object.assign(Object.assign({
    color: t || void 0,
    backgroundColor: "transparent",
    borderColor: r || void 0,
    boxShadow: "none"
  }, nt(e, Object.assign({
    backgroundColor: "transparent"
  }, i), Object.assign({
    backgroundColor: "transparent"
  }, a))), {
    "&:disabled": {
      cursor: "not-allowed",
      color: n || void 0,
      borderColor: o || void 0
    }
  })
}), qo = (e) => ({
  [`&:disabled, &${e.componentCls}-disabled`]: Object.assign({}, bm(e))
}), Rc = (e) => Object.assign({}, qo(e)), Wr = (e) => ({
  [`&:disabled, &${e.componentCls}-disabled`]: {
    cursor: "not-allowed",
    color: e.colorTextDisabled
  }
}), Pc = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Rc(e)), {
  backgroundColor: e.colorBgContainer,
  borderColor: e.colorBorder,
  boxShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlTmpOutline}`
}), nt(e.componentCls, {
  color: e.colorPrimaryHover,
  borderColor: e.colorPrimaryHover
}, {
  color: e.colorPrimaryActive,
  borderColor: e.colorPrimaryActive
})), Zt(e.componentCls, e.colorBgContainer, e.colorBgContainer, e.colorTextDisabled, e.colorBorder)), {
  [`&${e.componentCls}-dangerous`]: Object.assign(Object.assign(Object.assign({
    color: e.colorError,
    borderColor: e.colorError
  }, nt(e.componentCls, {
    color: e.colorErrorHover,
    borderColor: e.colorErrorBorderHover
  }, {
    color: e.colorErrorActive,
    borderColor: e.colorErrorActive
  })), Zt(e.componentCls, e.colorError, e.colorError, e.colorTextDisabled, e.colorBorder)), qo(e))
}), Sm = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Rc(e)), {
  color: e.colorTextLightSolid,
  backgroundColor: e.colorPrimary,
  boxShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlOutline}`
}), nt(e.componentCls, {
  color: e.colorTextLightSolid,
  backgroundColor: e.colorPrimaryHover
}, {
  color: e.colorTextLightSolid,
  backgroundColor: e.colorPrimaryActive
})), Zt(e.componentCls, e.colorPrimary, e.colorPrimary, e.colorTextDisabled, e.colorBorder, {
  color: e.colorPrimaryHover,
  borderColor: e.colorPrimaryHover
}, {
  color: e.colorPrimaryActive,
  borderColor: e.colorPrimaryActive
})), {
  [`&${e.componentCls}-dangerous`]: Object.assign(Object.assign(Object.assign({
    backgroundColor: e.colorError,
    boxShadow: `0 ${e.controlOutlineWidth}px 0 ${e.colorErrorOutline}`
  }, nt(e.componentCls, {
    backgroundColor: e.colorErrorHover
  }, {
    backgroundColor: e.colorErrorActive
  })), Zt(e.componentCls, e.colorError, e.colorError, e.colorTextDisabled, e.colorBorder, {
    color: e.colorErrorHover,
    borderColor: e.colorErrorHover
  }, {
    color: e.colorErrorActive,
    borderColor: e.colorErrorActive
  })), qo(e))
}), Em = (e) => Object.assign(Object.assign({}, Pc(e)), {
  borderStyle: "dashed"
}), Cm = (e) => Object.assign(Object.assign(Object.assign({
  color: e.colorLink
}, nt(e.componentCls, {
  color: e.colorLinkHover
}, {
  color: e.colorLinkActive
})), Wr(e)), {
  [`&${e.componentCls}-dangerous`]: Object.assign(Object.assign({
    color: e.colorError
  }, nt(e.componentCls, {
    color: e.colorErrorHover
  }, {
    color: e.colorErrorActive
  })), Wr(e))
}), xm = (e) => Object.assign(Object.assign(Object.assign({}, nt(e.componentCls, {
  color: e.colorText,
  backgroundColor: e.colorBgTextHover
}, {
  color: e.colorText,
  backgroundColor: e.colorBgTextActive
})), Wr(e)), {
  [`&${e.componentCls}-dangerous`]: Object.assign(Object.assign({
    color: e.colorError
  }, Wr(e)), nt(e.componentCls, {
    color: e.colorErrorHover,
    backgroundColor: e.colorErrorBg
  }, {
    color: e.colorErrorHover,
    backgroundColor: e.colorErrorBg
  }))
}), wm = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [`${t}-default`]: Pc(e),
    [`${t}-primary`]: Sm(e),
    [`${t}-dashed`]: Em(e),
    [`${t}-link`]: Cm(e),
    [`${t}-text`]: xm(e),
    [`${t}-ghost`]: Zt(e.componentCls, e.colorBgContainer, e.colorBgContainer, e.colorTextDisabled, e.colorBorder)
  };
}, Xo = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  const {
    componentCls: r,
    controlHeight: n,
    fontSize: o,
    lineHeight: i,
    lineWidth: a,
    borderRadius: s,
    buttonPaddingHorizontal: l,
    iconCls: c
  } = e, f = Math.max(0, (n - o * i) / 2 - a), u = l - a, m = `${r}-icon-only`;
  return [
    // Size
    {
      [`${r}${t}`]: {
        fontSize: o,
        height: n,
        padding: `${f}px ${u}px`,
        borderRadius: s,
        [`&${m}`]: {
          width: n,
          paddingInlineStart: 0,
          paddingInlineEnd: 0,
          [`&${r}-round`]: {
            width: "auto"
          },
          [c]: {
            fontSize: e.buttonIconOnlyFontSize
          }
        },
        // Loading
        [`&${r}-loading`]: {
          opacity: e.opacityLoading,
          cursor: "default"
        },
        [`${r}-loading-icon`]: {
          transition: `width ${e.motionDurationSlow} ${e.motionEaseInOut}, opacity ${e.motionDurationSlow} ${e.motionEaseInOut}`
        }
      }
    },
    // Shape - patch prefixCls again to override solid border radius style
    {
      [`${r}${r}-circle${t}`]: vm(e)
    },
    {
      [`${r}${r}-round${t}`]: ym(e)
    }
  ];
}, _m = (e) => Xo(e), Om = (e) => {
  const t = Rt(e, {
    controlHeight: e.controlHeightSM,
    padding: e.paddingXS,
    buttonPaddingHorizontal: 8,
    borderRadius: e.borderRadiusSM,
    buttonIconOnlyFontSize: e.fontSizeLG - 2
  });
  return Xo(t, `${e.componentCls}-sm`);
}, Tm = (e) => {
  const t = Rt(e, {
    controlHeight: e.controlHeightLG,
    fontSize: e.fontSizeLG,
    borderRadius: e.borderRadiusLG,
    buttonIconOnlyFontSize: e.fontSizeLG + 2
  });
  return Xo(t, `${e.componentCls}-lg`);
}, Am = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [t]: {
      [`&${t}-block`]: {
        width: "100%"
      }
    }
  };
}, Rm = Wo("Button", (e) => {
  const {
    controlTmpOutline: t,
    paddingContentHorizontal: r
  } = e, n = Rt(e, {
    colorOutlineDefault: t,
    buttonPaddingHorizontal: r,
    buttonIconOnlyFontSize: e.fontSizeLG,
    buttonFontWeight: 400
  });
  return [
    // Shared
    gm(n),
    // Size
    Om(n),
    _m(n),
    Tm(n),
    // Block
    Am(n),
    // Group (type, ghost, danger, loading)
    wm(n),
    // Button Group
    mm(n),
    // Space Compact
    um(e),
    pm(e)
  ];
});
var Pm = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
function Nm(e) {
  if (typeof e == "object" && e) {
    const t = e?.delay;
    return {
      loading: !1,
      delay: !Number.isNaN(t) && typeof t == "number" ? t : 0
    };
  }
  return {
    loading: !!e,
    delay: 0
  };
}
const $m = (e, t) => {
  var r, n;
  const {
    loading: o = !1,
    prefixCls: i,
    type: a = "default",
    danger: s,
    shape: l = "default",
    size: c,
    styles: f,
    disabled: u,
    className: m,
    rootClassName: g,
    children: p,
    icon: d,
    ghost: h = !1,
    block: x = !1,
    // React does not recognize the `htmlType` prop on a DOM element. Here we pick it out of `rest`.
    htmlType: E = "button",
    classNames: A,
    style: _ = {}
  } = e, v = Pm(e, ["loading", "prefixCls", "type", "danger", "shape", "size", "styles", "disabled", "className", "rootClassName", "children", "icon", "ghost", "block", "htmlType", "classNames", "style"]), {
    getPrefixCls: R,
    autoInsertSpaceInButton: w,
    direction: B,
    button: D
  } = Ne(ot), $ = R("btn", i), [z, C] = Rm($), S = Ne(Vs), O = u ?? S, N = Ne(Ac), j = Ca(() => Nm(o), [o]), [M, U] = Gt(j.loading), [Q, X] = Gt(!1), I = os(t, /* @__PURE__ */ tl()), L = el.count(p) === 1 && !d && !Er(a);
  Ue(() => {
    let G = null;
    j.delay > 0 ? G = setTimeout(() => {
      G = null, U(!0);
    }, j.delay) : U(j.loading);
    function oe() {
      G && (clearTimeout(G), G = null);
    }
    return oe;
  }, [j]), Ue(() => {
    if (!I || !I.current || w === !1)
      return;
    const G = I.current.textContent;
    L && yo(G) ? Q || X(!0) : Q && X(!1);
  }, [I]);
  const F = (G) => {
    const {
      onClick: oe
    } = e;
    if (M || O) {
      G.preventDefault();
      return;
    }
    oe?.(G);
  };
  process.env.NODE_ENV !== "production" && qe(!(typeof d == "string" && d.length > 2), "Button", `\`icon\` is using ReactNode instead of string naming in v4. Please check \`${d}\` at https://ant.design/components/icon`), process.env.NODE_ENV !== "production" && qe(!(h && Er(a)), "Button", "`link` or `text` button can't be a `ghost` button.");
  const W = w !== !1, {
    compactSize: b,
    compactItemClassnames: te
  } = Jh($, B), k = {
    large: "lg",
    small: "sm",
    middle: void 0
  }, ne = Xh((G) => {
    var oe, be;
    return (be = (oe = c ?? b) !== null && oe !== void 0 ? oe : N) !== null && be !== void 0 ? be : G;
  }), J = ne && k[ne] || "", q = M ? "loading" : d, P = Vu(v, ["navigate"]), se = Te($, C, {
    [`${$}-${l}`]: l !== "default" && l,
    [`${$}-${a}`]: a,
    [`${$}-${J}`]: J,
    [`${$}-icon-only`]: !p && p !== 0 && !!q,
    [`${$}-background-ghost`]: h && !Er(a),
    [`${$}-loading`]: M,
    [`${$}-two-chinese-chars`]: Q && W && !M,
    [`${$}-block`]: x,
    [`${$}-dangerous`]: !!s,
    [`${$}-rtl`]: B === "rtl"
  }, te, m, g, D?.className), H = Object.assign(Object.assign({}, D?.style), _), V = Te(A?.icon, (r = D?.classNames) === null || r === void 0 ? void 0 : r.icon), he = Object.assign(Object.assign({}, f?.icon || {}), ((n = D?.styles) === null || n === void 0 ? void 0 : n.icon) || {}), Z = d && !M ? /* @__PURE__ */ de.createElement(Tc, {
    prefixCls: $,
    className: V,
    style: he
  }, d) : /* @__PURE__ */ de.createElement(tm, {
    existIcon: !!d,
    prefixCls: $,
    loading: !!M
  }), me = p || p === 0 ? sm(p, L && W) : null;
  if (P.href !== void 0)
    return z(/* @__PURE__ */ de.createElement("a", Object.assign({}, P, {
      className: Te(se, {
        [`${$}-disabled`]: O
      }),
      style: H,
      onClick: F,
      ref: I
    }), Z, me));
  let ge = /* @__PURE__ */ de.createElement("button", Object.assign({}, v, {
    type: E,
    className: se,
    style: H,
    onClick: F,
    disabled: O,
    ref: I
  }), Z, me);
  return Er(a) || (ge = /* @__PURE__ */ de.createElement(Kh, {
    disabled: !!M
  }, ge)), z(ge);
}, un = /* @__PURE__ */ Oo($m);
process.env.NODE_ENV !== "production" && (un.displayName = "Button");
un.Group = om;
un.__ANT_BUTTON = !0;
const Im = un;
let De = null, ht = (e) => e(), er = [], Vr = {};
function Mm() {
  const {
    prefixCls: e,
    getContainer: t,
    duration: r,
    rtl: n,
    maxCount: o,
    top: i
  } = Vr, a = e ?? oc().getPrefixCls("message"), s = t?.() || document.body;
  return {
    prefixCls: a,
    container: s,
    duration: r,
    rtl: n,
    maxCount: o,
    top: i
  };
}
const km = /* @__PURE__ */ y.forwardRef((e, t) => {
  const r = () => {
    const {
      prefixCls: m,
      container: g,
      maxCount: p,
      duration: d,
      rtl: h,
      top: x
    } = Mm();
    return {
      prefixCls: m,
      getContainer: () => g,
      maxCount: p,
      duration: d,
      rtl: h,
      top: x
    };
  }, [n, o] = y.useState(r), [i, a] = xc(n), s = oc(), l = s.getRootPrefixCls(), c = s.getIconPrefixCls(), f = s.getTheme(), u = () => {
    o(r);
  };
  return y.useEffect(u, []), y.useImperativeHandle(t, () => {
    const m = Object.assign({}, i);
    return Object.keys(m).forEach((g) => {
      m[g] = function() {
        return u(), i[g].apply(i, arguments);
      };
    }), {
      instance: m,
      sync: u
    };
  }), /* @__PURE__ */ y.createElement(ic, {
    prefixCls: l,
    iconPrefixCls: c,
    theme: f
  }, a);
});
function fn() {
  if (!De) {
    const e = document.createDocumentFragment(), t = {
      fragment: e
    };
    De = t, ht(() => {
      _c(/* @__PURE__ */ y.createElement(km, {
        ref: (r) => {
          const {
            instance: n,
            sync: o
          } = r || {};
          Promise.resolve().then(() => {
            !t.instance && n && (t.instance = n, t.sync = o, fn());
          });
        }
      }), e);
    });
    return;
  }
  De.instance && (er.forEach((e) => {
    const {
      type: t,
      skipped: r
    } = e;
    if (!r)
      switch (t) {
        case "open": {
          ht(() => {
            const n = De.instance.open(Object.assign(Object.assign({}, Vr), e.config));
            n?.then(e.resolve), e.setCloseFn(n);
          });
          break;
        }
        case "destroy":
          ht(() => {
            De?.instance.destroy(e.key);
          });
          break;
        default:
          ht(() => {
            var n;
            const o = (n = De.instance)[t].apply(n, Le(e.args));
            o?.then(e.resolve), e.setCloseFn(o);
          });
      }
  }), er = []);
}
function Lm(e) {
  Vr = Object.assign(Object.assign({}, Vr), e), ht(() => {
    var t;
    (t = De?.sync) === null || t === void 0 || t.call(De);
  });
}
function Dm(e) {
  const t = Ko((r) => {
    let n;
    const o = {
      type: "open",
      config: e,
      resolve: r,
      setCloseFn: (i) => {
        n = i;
      }
    };
    return er.push(o), () => {
      n ? ht(() => {
        n();
      }) : o.skipped = !0;
    };
  });
  return fn(), t;
}
function jm(e, t) {
  process.env.NODE_ENV !== "production" && Mp("message");
  const r = Ko((n) => {
    let o;
    const i = {
      type: e,
      args: t,
      resolve: n,
      setCloseFn: (a) => {
        o = a;
      }
    };
    return er.push(i), () => {
      o ? ht(() => {
        o();
      }) : i.skipped = !0;
    };
  });
  return fn(), r;
}
function Fm(e) {
  er.push({
    type: "destroy",
    key: e
  }), fn();
}
const Hm = ["success", "info", "warning", "error", "loading"], Bm = {
  open: Dm,
  destroy: Fm,
  config: Lm,
  useMessage: Ph,
  _InternalPanelDoNotUseOrYouWillBeFired: wh
}, Nc = Bm;
Hm.forEach((e) => {
  Nc[e] = function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return jm(e, r);
  };
});
process.env.NODE_ENV;
process.env.NODE_ENV;
const zm = Nc, $c = nr(
  {}
), pv = ({ children: e }) => {
  const [t, r] = zm.useMessage(), n = ({ type: o, message: i }) => {
    t.open({
      type: o ?? "info",
      content: i,
      duration: 5
    });
  };
  return /* @__PURE__ */ xa(To, { children: [
    r,
    /* @__PURE__ */ Ee($c.Provider, { value: { open: n }, children: e })
  ] });
}, Ic = ({ when: e, children: t }) => e ? t : null, hv = ({ children: e }) => /* @__PURE__ */ Ee(Iu, { children: e }), Mc = nr({}), Um = async () => Promise.all([
  import("./react-spring_web.modern-d55cb301.mjs"),
  import("./use-gesture-react.esm-862244eb.mjs")
]), kc = ({ children: e }) => {
  const t = je(), r = je(), n = Ou(), o = async () => {
    const [a, s] = await Um();
    t.current = a, r.current = s, n.on();
  };
  Ue(() => {
    o();
  }, []);
  const i = Ca(
    () => ({
      Spring: t.current,
      Gesture: r.current,
      isLoaded: n.val
    }),
    [n.val]
  );
  return /* @__PURE__ */ Ee(Mc.Provider, { value: i, children: /* @__PURE__ */ Ee(Ic, { when: n.val, children: e }) });
}, Lc = () => Ne(Mc), mv = () => Ne($c), gv = () => {
  Ue(() => (document.body.style.overflow = "hidden", () => {
    document.body.style.overflow = "auto";
  }));
}, vv = (e) => typeof e == "object" && e !== null, Wm = (e) => typeof e == "string", yv = (e) => typeof e == "function";
class bv {
  constructor(t) {
    this.isDisabled = !1, this.isDisabled = t ?? this.isDisabled;
  }
  get(t, r) {
    if (this.isDisabled)
      return r;
    const n = localStorage.getItem(t);
    return n ? Vm(n) ? JSON.parse(n) : n : r;
  }
  set(t, r) {
    if (!(this.isDisabled || !(t in _u))) {
      if (Wm(r))
        return localStorage.setItem(t, r);
      localStorage.setItem(t, JSON.stringify(r));
    }
  }
  clear(t) {
    if (t)
      return localStorage.removeItem(t);
    localStorage.clear();
  }
}
const Vm = (e) => {
  try {
    JSON.parse(e);
  } catch {
    return !1;
  }
  return !0;
}, Sv = ({ children: e, override: t, ...r }) => /* @__PURE__ */ Ee(ic, { theme: {
  token: { colorPrimary: t }
}, children: /* @__PURE__ */ Ee(Im, { ...r, children: e }) });
/**
  * @reach/utils v0.18.0
  *
  * Copyright (c) 2018-2022, React Training LLC
  *
  * This source code is licensed under the MIT license found in the
  * LICENSE.md file in the root directory of this source tree.
  *
  * @license MIT
  */
function Gm() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Ym() {
  let [, e] = Gt(/* @__PURE__ */ Object.create(null));
  return rl(() => {
    e(/* @__PURE__ */ Object.create(null));
  }, []);
}
var Km = Gm() ? Ea : Ue, qm = ({
  children: e,
  type: t = "reach-portal",
  containerRef: r
}) => {
  let n = y.useRef(null), o = y.useRef(null), i = Ym();
  return y.useEffect(() => {
    r != null && (typeof r != "object" || !("current" in r) ? console.warn("@reach/portal: Invalid value passed to the `containerRef` of a `Portal`. The portal will be appended to the document body, but if you want to attach it to another DOM node you must pass a valid React ref object to `containerRef`.") : r.current == null && console.warn("@reach/portal: A ref was passed to the `containerRef` prop of a `Portal`, but no DOM node was attached to it. Be sure to pass the ref to a DOM component.\n\nIf you are forwarding the ref from another component, be sure to use the React.forwardRef API. See https://reactjs.org/docs/forwarding-refs.html."));
  }, [r]), Km(() => {
    if (!n.current)
      return;
    let a = n.current.ownerDocument, s = r?.current || a.body;
    return o.current = a?.createElement(t), s.appendChild(o.current), i(), () => {
      o.current && s && s.removeChild(o.current);
    };
  }, [t, i, r]), o.current ? wa(e, o.current) : /* @__PURE__ */ y.createElement("span", {
    ref: n
  });
}, Dc = ({
  unstable_skipInitialRender: e,
  ...t
}) => {
  let [r, n] = y.useState(!1);
  return y.useEffect(() => {
    e && n(!0);
  }, [e]), e && !r ? null : /* @__PURE__ */ y.createElement(qm, {
    ...t
  });
};
Dc.displayName = "Portal";
const Xm = () => ({
  opacity: {
    from: () => ({ opacity: 0 }),
    to: () => ({ opacity: 1 })
  },
  transform: {
    from: () => ({
      transform: "scale(0.9) rotate(8deg)",
      x: -150
    }),
    to: (e) => ({
      transform: e ? "scale(1.0) rotate(0deg)" : "scale(0.9) rotate(8deg)",
      x: e ? 0 : -150
    })
  }
});
var bo = { exports: {} }, ue = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ca;
function Qm() {
  if (ca)
    return ue;
  ca = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), p;
  p = Symbol.for("react.module.reference");
  function d(h) {
    if (typeof h == "object" && h !== null) {
      var x = h.$$typeof;
      switch (x) {
        case e:
          switch (h = h.type, h) {
            case r:
            case o:
            case n:
            case c:
            case f:
              return h;
            default:
              switch (h = h && h.$$typeof, h) {
                case s:
                case a:
                case l:
                case m:
                case u:
                case i:
                  return h;
                default:
                  return x;
              }
          }
        case t:
          return x;
      }
    }
  }
  return ue.ContextConsumer = a, ue.ContextProvider = i, ue.Element = e, ue.ForwardRef = l, ue.Fragment = r, ue.Lazy = m, ue.Memo = u, ue.Portal = t, ue.Profiler = o, ue.StrictMode = n, ue.Suspense = c, ue.SuspenseList = f, ue.isAsyncMode = function() {
    return !1;
  }, ue.isConcurrentMode = function() {
    return !1;
  }, ue.isContextConsumer = function(h) {
    return d(h) === a;
  }, ue.isContextProvider = function(h) {
    return d(h) === i;
  }, ue.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === e;
  }, ue.isForwardRef = function(h) {
    return d(h) === l;
  }, ue.isFragment = function(h) {
    return d(h) === r;
  }, ue.isLazy = function(h) {
    return d(h) === m;
  }, ue.isMemo = function(h) {
    return d(h) === u;
  }, ue.isPortal = function(h) {
    return d(h) === t;
  }, ue.isProfiler = function(h) {
    return d(h) === o;
  }, ue.isStrictMode = function(h) {
    return d(h) === n;
  }, ue.isSuspense = function(h) {
    return d(h) === c;
  }, ue.isSuspenseList = function(h) {
    return d(h) === f;
  }, ue.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === r || h === o || h === n || h === c || h === f || h === g || typeof h == "object" && h !== null && (h.$$typeof === m || h.$$typeof === u || h.$$typeof === i || h.$$typeof === a || h.$$typeof === l || h.$$typeof === p || h.getModuleId !== void 0);
  }, ue.typeOf = d, ue;
}
var fe = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var la;
function Jm() {
  return la || (la = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), p = !1, d = !1, h = !1, x = !1, E = !1, A;
    A = Symbol.for("react.module.reference");
    function _(H) {
      return !!(typeof H == "string" || typeof H == "function" || H === r || H === o || E || H === n || H === c || H === f || x || H === g || p || d || h || typeof H == "object" && H !== null && (H.$$typeof === m || H.$$typeof === u || H.$$typeof === i || H.$$typeof === a || H.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      H.$$typeof === A || H.getModuleId !== void 0));
    }
    function v(H) {
      if (typeof H == "object" && H !== null) {
        var V = H.$$typeof;
        switch (V) {
          case e:
            var he = H.type;
            switch (he) {
              case r:
              case o:
              case n:
              case c:
              case f:
                return he;
              default:
                var Z = he && he.$$typeof;
                switch (Z) {
                  case s:
                  case a:
                  case l:
                  case m:
                  case u:
                  case i:
                    return Z;
                  default:
                    return V;
                }
            }
          case t:
            return V;
        }
      }
    }
    var R = a, w = i, B = e, D = l, $ = r, z = m, C = u, S = t, O = o, N = n, j = c, M = f, U = !1, Q = !1;
    function X(H) {
      return U || (U = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function re(H) {
      return Q || (Q = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function I(H) {
      return v(H) === a;
    }
    function L(H) {
      return v(H) === i;
    }
    function F(H) {
      return typeof H == "object" && H !== null && H.$$typeof === e;
    }
    function W(H) {
      return v(H) === l;
    }
    function b(H) {
      return v(H) === r;
    }
    function te(H) {
      return v(H) === m;
    }
    function k(H) {
      return v(H) === u;
    }
    function ne(H) {
      return v(H) === t;
    }
    function J(H) {
      return v(H) === o;
    }
    function q(H) {
      return v(H) === n;
    }
    function P(H) {
      return v(H) === c;
    }
    function se(H) {
      return v(H) === f;
    }
    fe.ContextConsumer = R, fe.ContextProvider = w, fe.Element = B, fe.ForwardRef = D, fe.Fragment = $, fe.Lazy = z, fe.Memo = C, fe.Portal = S, fe.Profiler = O, fe.StrictMode = N, fe.Suspense = j, fe.SuspenseList = M, fe.isAsyncMode = X, fe.isConcurrentMode = re, fe.isContextConsumer = I, fe.isContextProvider = L, fe.isElement = F, fe.isForwardRef = W, fe.isFragment = b, fe.isLazy = te, fe.isMemo = k, fe.isPortal = ne, fe.isProfiler = J, fe.isStrictMode = q, fe.isSuspense = P, fe.isSuspenseList = se, fe.isValidElementType = _, fe.typeOf = v;
  }()), fe;
}
process.env.NODE_ENV === "production" ? bo.exports = Qm() : bo.exports = Jm();
var Qo = bo.exports;
function Zm(e) {
  function t(I, L, F, W, b) {
    for (var te = 0, k = 0, ne = 0, J = 0, q, P, se = 0, H = 0, V, he = V = q = 0, Z = 0, me = 0, ge = 0, G = 0, oe = F.length, be = oe - 1, xe, K = "", ve = "", jt = "", Ft = "", Ve; Z < oe; ) {
      if (P = F.charCodeAt(Z), Z === be && k + J + ne + te !== 0 && (k !== 0 && (P = k === 47 ? 10 : 47), J = ne = te = 0, oe++, be++), k + J + ne + te === 0) {
        if (Z === be && (0 < me && (K = K.replace(m, "")), 0 < K.trim().length)) {
          switch (P) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              K += F.charAt(Z);
          }
          P = 59;
        }
        switch (P) {
          case 123:
            for (K = K.trim(), q = K.charCodeAt(0), V = 1, G = ++Z; Z < oe; ) {
              switch (P = F.charCodeAt(Z)) {
                case 123:
                  V++;
                  break;
                case 125:
                  V--;
                  break;
                case 47:
                  switch (P = F.charCodeAt(Z + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (he = Z + 1; he < be; ++he)
                          switch (F.charCodeAt(he)) {
                            case 47:
                              if (P === 42 && F.charCodeAt(he - 1) === 42 && Z + 2 !== he) {
                                Z = he + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (P === 47) {
                                Z = he + 1;
                                break e;
                              }
                          }
                        Z = he;
                      }
                  }
                  break;
                case 91:
                  P++;
                case 40:
                  P++;
                case 34:
                case 39:
                  for (; Z++ < be && F.charCodeAt(Z) !== P; )
                    ;
              }
              if (V === 0)
                break;
              Z++;
            }
            switch (V = F.substring(G, Z), q === 0 && (q = (K = K.replace(u, "").trim()).charCodeAt(0)), q) {
              case 64:
                switch (0 < me && (K = K.replace(m, "")), P = K.charCodeAt(1), P) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    me = L;
                    break;
                  default:
                    me = j;
                }
                if (V = t(L, me, V, P, b + 1), G = V.length, 0 < U && (me = r(j, K, ge), Ve = s(3, V, me, L, S, C, G, P, b, W), K = me.join(""), Ve !== void 0 && (G = (V = Ve.trim()).length) === 0 && (P = 0, V = "")), 0 < G)
                  switch (P) {
                    case 115:
                      K = K.replace(R, a);
                    case 100:
                    case 109:
                    case 45:
                      V = K + "{" + V + "}";
                      break;
                    case 107:
                      K = K.replace(E, "$1 $2"), V = K + "{" + V + "}", V = N === 1 || N === 2 && i("@" + V, 3) ? "@-webkit-" + V + "@" + V : "@" + V;
                      break;
                    default:
                      V = K + V, W === 112 && (V = (ve += V, ""));
                  }
                else
                  V = "";
                break;
              default:
                V = t(L, r(L, K, ge), V, W, b + 1);
            }
            jt += V, V = ge = me = he = q = 0, K = "", P = F.charCodeAt(++Z);
            break;
          case 125:
          case 59:
            if (K = (0 < me ? K.replace(m, "") : K).trim(), 1 < (G = K.length))
              switch (he === 0 && (q = K.charCodeAt(0), q === 45 || 96 < q && 123 > q) && (G = (K = K.replace(" ", ":")).length), 0 < U && (Ve = s(1, K, L, I, S, C, ve.length, W, b, W)) !== void 0 && (G = (K = Ve.trim()).length) === 0 && (K = "\0\0"), q = K.charCodeAt(0), P = K.charCodeAt(1), q) {
                case 0:
                  break;
                case 64:
                  if (P === 105 || P === 99) {
                    Ft += K + F.charAt(Z);
                    break;
                  }
                default:
                  K.charCodeAt(G - 1) !== 58 && (ve += o(K, q, P, K.charCodeAt(2)));
              }
            ge = me = he = q = 0, K = "", P = F.charCodeAt(++Z);
        }
      }
      switch (P) {
        case 13:
        case 10:
          k === 47 ? k = 0 : 1 + q === 0 && W !== 107 && 0 < K.length && (me = 1, K += "\0"), 0 < U * X && s(0, K, L, I, S, C, ve.length, W, b, W), C = 1, S++;
          break;
        case 59:
        case 125:
          if (k + J + ne + te === 0) {
            C++;
            break;
          }
        default:
          switch (C++, xe = F.charAt(Z), P) {
            case 9:
            case 32:
              if (J + te + k === 0)
                switch (se) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    xe = "";
                    break;
                  default:
                    P !== 32 && (xe = " ");
                }
              break;
            case 0:
              xe = "\\0";
              break;
            case 12:
              xe = "\\f";
              break;
            case 11:
              xe = "\\v";
              break;
            case 38:
              J + k + te === 0 && (me = ge = 1, xe = "\f" + xe);
              break;
            case 108:
              if (J + k + te + O === 0 && 0 < he)
                switch (Z - he) {
                  case 2:
                    se === 112 && F.charCodeAt(Z - 3) === 58 && (O = se);
                  case 8:
                    H === 111 && (O = H);
                }
              break;
            case 58:
              J + k + te === 0 && (he = Z);
              break;
            case 44:
              k + ne + J + te === 0 && (me = 1, xe += "\r");
              break;
            case 34:
            case 39:
              k === 0 && (J = J === P ? 0 : J === 0 ? P : J);
              break;
            case 91:
              J + k + ne === 0 && te++;
              break;
            case 93:
              J + k + ne === 0 && te--;
              break;
            case 41:
              J + k + te === 0 && ne--;
              break;
            case 40:
              if (J + k + te === 0) {
                if (q === 0)
                  switch (2 * se + 3 * H) {
                    case 533:
                      break;
                    default:
                      q = 1;
                  }
                ne++;
              }
              break;
            case 64:
              k + ne + J + te + he + V === 0 && (V = 1);
              break;
            case 42:
            case 47:
              if (!(0 < J + te + ne))
                switch (k) {
                  case 0:
                    switch (2 * P + 3 * F.charCodeAt(Z + 1)) {
                      case 235:
                        k = 47;
                        break;
                      case 220:
                        G = Z, k = 42;
                    }
                    break;
                  case 42:
                    P === 47 && se === 42 && G + 2 !== Z && (F.charCodeAt(G + 2) === 33 && (ve += F.substring(G, Z + 1)), xe = "", k = 0);
                }
          }
          k === 0 && (K += xe);
      }
      H = se, se = P, Z++;
    }
    if (G = ve.length, 0 < G) {
      if (me = L, 0 < U && (Ve = s(2, ve, me, I, S, C, G, W, b, W), Ve !== void 0 && (ve = Ve).length === 0))
        return Ft + ve + jt;
      if (ve = me.join(",") + "{" + ve + "}", N * O !== 0) {
        switch (N !== 2 || i(ve, 2) || (O = 0), O) {
          case 111:
            ve = ve.replace(_, ":-moz-$1") + ve;
            break;
          case 112:
            ve = ve.replace(A, "::-webkit-input-$1") + ve.replace(A, "::-moz-$1") + ve.replace(A, ":-ms-input-$1") + ve;
        }
        O = 0;
      }
    }
    return Ft + ve + jt;
  }
  function r(I, L, F) {
    var W = L.trim().split(h);
    L = W;
    var b = W.length, te = I.length;
    switch (te) {
      case 0:
      case 1:
        var k = 0;
        for (I = te === 0 ? "" : I[0] + " "; k < b; ++k)
          L[k] = n(I, L[k], F).trim();
        break;
      default:
        var ne = k = 0;
        for (L = []; k < b; ++k)
          for (var J = 0; J < te; ++J)
            L[ne++] = n(I[J] + " ", W[k], F).trim();
    }
    return L;
  }
  function n(I, L, F) {
    var W = L.charCodeAt(0);
    switch (33 > W && (W = (L = L.trim()).charCodeAt(0)), W) {
      case 38:
        return L.replace(x, "$1" + I.trim());
      case 58:
        return I.trim() + L.replace(x, "$1" + I.trim());
      default:
        if (0 < 1 * F && 0 < L.indexOf("\f"))
          return L.replace(x, (I.charCodeAt(0) === 58 ? "" : "$1") + I.trim());
    }
    return I + L;
  }
  function o(I, L, F, W) {
    var b = I + ";", te = 2 * L + 3 * F + 4 * W;
    if (te === 944) {
      I = b.indexOf(":", 9) + 1;
      var k = b.substring(I, b.length - 1).trim();
      return k = b.substring(0, I).trim() + k + ";", N === 1 || N === 2 && i(k, 1) ? "-webkit-" + k + k : k;
    }
    if (N === 0 || N === 2 && !i(b, 1))
      return b;
    switch (te) {
      case 1015:
        return b.charCodeAt(10) === 97 ? "-webkit-" + b + b : b;
      case 951:
        return b.charCodeAt(3) === 116 ? "-webkit-" + b + b : b;
      case 963:
        return b.charCodeAt(5) === 110 ? "-webkit-" + b + b : b;
      case 1009:
        if (b.charCodeAt(4) !== 100)
          break;
      case 969:
      case 942:
        return "-webkit-" + b + b;
      case 978:
        return "-webkit-" + b + "-moz-" + b + b;
      case 1019:
      case 983:
        return "-webkit-" + b + "-moz-" + b + "-ms-" + b + b;
      case 883:
        if (b.charCodeAt(8) === 45)
          return "-webkit-" + b + b;
        if (0 < b.indexOf("image-set(", 11))
          return b.replace(z, "$1-webkit-$2") + b;
        break;
      case 932:
        if (b.charCodeAt(4) === 45)
          switch (b.charCodeAt(5)) {
            case 103:
              return "-webkit-box-" + b.replace("-grow", "") + "-webkit-" + b + "-ms-" + b.replace("grow", "positive") + b;
            case 115:
              return "-webkit-" + b + "-ms-" + b.replace("shrink", "negative") + b;
            case 98:
              return "-webkit-" + b + "-ms-" + b.replace("basis", "preferred-size") + b;
          }
        return "-webkit-" + b + "-ms-" + b + b;
      case 964:
        return "-webkit-" + b + "-ms-flex-" + b + b;
      case 1023:
        if (b.charCodeAt(8) !== 99)
          break;
        return k = b.substring(b.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + k + "-webkit-" + b + "-ms-flex-pack" + k + b;
      case 1005:
        return p.test(b) ? b.replace(g, ":-webkit-") + b.replace(g, ":-moz-") + b : b;
      case 1e3:
        switch (k = b.substring(13).trim(), L = k.indexOf("-") + 1, k.charCodeAt(0) + k.charCodeAt(L)) {
          case 226:
            k = b.replace(v, "tb");
            break;
          case 232:
            k = b.replace(v, "tb-rl");
            break;
          case 220:
            k = b.replace(v, "lr");
            break;
          default:
            return b;
        }
        return "-webkit-" + b + "-ms-" + k + b;
      case 1017:
        if (b.indexOf("sticky", 9) === -1)
          break;
      case 975:
        switch (L = (b = I).length - 10, k = (b.charCodeAt(L) === 33 ? b.substring(0, L) : b).substring(I.indexOf(":", 7) + 1).trim(), te = k.charCodeAt(0) + (k.charCodeAt(7) | 0)) {
          case 203:
            if (111 > k.charCodeAt(8))
              break;
          case 115:
            b = b.replace(k, "-webkit-" + k) + ";" + b;
            break;
          case 207:
          case 102:
            b = b.replace(k, "-webkit-" + (102 < te ? "inline-" : "") + "box") + ";" + b.replace(k, "-webkit-" + k) + ";" + b.replace(k, "-ms-" + k + "box") + ";" + b;
        }
        return b + ";";
      case 938:
        if (b.charCodeAt(5) === 45)
          switch (b.charCodeAt(6)) {
            case 105:
              return k = b.replace("-items", ""), "-webkit-" + b + "-webkit-box-" + k + "-ms-flex-" + k + b;
            case 115:
              return "-webkit-" + b + "-ms-flex-item-" + b.replace(B, "") + b;
            default:
              return "-webkit-" + b + "-ms-flex-line-pack" + b.replace("align-content", "").replace(B, "") + b;
          }
        break;
      case 973:
      case 989:
        if (b.charCodeAt(3) !== 45 || b.charCodeAt(4) === 122)
          break;
      case 931:
      case 953:
        if ($.test(I) === !0)
          return (k = I.substring(I.indexOf(":") + 1)).charCodeAt(0) === 115 ? o(I.replace("stretch", "fill-available"), L, F, W).replace(":fill-available", ":stretch") : b.replace(k, "-webkit-" + k) + b.replace(k, "-moz-" + k.replace("fill-", "")) + b;
        break;
      case 962:
        if (b = "-webkit-" + b + (b.charCodeAt(5) === 102 ? "-ms-" + b : "") + b, F + W === 211 && b.charCodeAt(13) === 105 && 0 < b.indexOf("transform", 10))
          return b.substring(0, b.indexOf(";", 27) + 1).replace(d, "$1-webkit-$2") + b;
    }
    return b;
  }
  function i(I, L) {
    var F = I.indexOf(L === 1 ? ":" : "{"), W = I.substring(0, L !== 3 ? F : 10);
    return F = I.substring(F + 1, I.length - 1), Q(L !== 2 ? W : W.replace(D, "$1"), F, L);
  }
  function a(I, L) {
    var F = o(L, L.charCodeAt(0), L.charCodeAt(1), L.charCodeAt(2));
    return F !== L + ";" ? F.replace(w, " or ($1)").substring(4) : "(" + L + ")";
  }
  function s(I, L, F, W, b, te, k, ne, J, q) {
    for (var P = 0, se = L, H; P < U; ++P)
      switch (H = M[P].call(f, I, se, F, W, b, te, k, ne, J, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          se = H;
      }
    if (se !== L)
      return se;
  }
  function l(I) {
    switch (I) {
      case void 0:
      case null:
        U = M.length = 0;
        break;
      default:
        if (typeof I == "function")
          M[U++] = I;
        else if (typeof I == "object")
          for (var L = 0, F = I.length; L < F; ++L)
            l(I[L]);
        else
          X = !!I | 0;
    }
    return l;
  }
  function c(I) {
    return I = I.prefix, I !== void 0 && (Q = null, I ? typeof I != "function" ? N = 1 : (N = 2, Q = I) : N = 0), c;
  }
  function f(I, L) {
    var F = I;
    if (33 > F.charCodeAt(0) && (F = F.trim()), re = F, F = [re], 0 < U) {
      var W = s(-1, L, F, F, S, C, 0, 0, 0, 0);
      W !== void 0 && typeof W == "string" && (L = W);
    }
    var b = t(j, F, L, 0, 0);
    return 0 < U && (W = s(-2, b, F, F, S, C, b.length, 0, 0, 0), W !== void 0 && (b = W)), re = "", O = 0, C = S = 1, b;
  }
  var u = /^\0+/g, m = /[\0\r\f]/g, g = /: */g, p = /zoo|gra/, d = /([,: ])(transform)/g, h = /,\r+?/g, x = /([\t\r\n ])*\f?&/g, E = /@(k\w+)\s*(\S*)\s*/, A = /::(place)/g, _ = /:(read-only)/g, v = /[svh]\w+-[tblr]{2}/, R = /\(\s*(.*)\s*\)/g, w = /([\s\S]*?);/g, B = /-self|flex-/g, D = /[^]*?(:[rp][el]a[\w-]+)[^]*/, $ = /stretch|:\s*\w+\-(?:conte|avail)/, z = /([^-])(image-set\()/, C = 1, S = 1, O = 0, N = 1, j = [], M = [], U = 0, Q = null, X = 0, re = "";
  return f.use = l, f.set = c, e !== void 0 && c(e), f;
}
function eg(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var tg = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, ua = /* @__PURE__ */ eg(
  function(e) {
    return tg.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Jo = Ja, rg = {
  childContextTypes: !0,
  contextType: !0,
  contextTypes: !0,
  defaultProps: !0,
  displayName: !0,
  getDefaultProps: !0,
  getDerivedStateFromError: !0,
  getDerivedStateFromProps: !0,
  mixins: !0,
  propTypes: !0,
  type: !0
}, ng = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, og = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, jc = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Zo = {};
Zo[Jo.ForwardRef] = og;
Zo[Jo.Memo] = jc;
function fa(e) {
  return Jo.isMemo(e) ? jc : Zo[e.$$typeof] || rg;
}
var ig = Object.defineProperty, ag = Object.getOwnPropertyNames, da = Object.getOwnPropertySymbols, sg = Object.getOwnPropertyDescriptor, cg = Object.getPrototypeOf, pa = Object.prototype;
function Fc(e, t, r) {
  if (typeof t != "string") {
    if (pa) {
      var n = cg(t);
      n && n !== pa && Fc(e, n, r);
    }
    var o = ag(t);
    da && (o = o.concat(da(t)));
    for (var i = fa(e), a = fa(t), s = 0; s < o.length; ++s) {
      var l = o[s];
      if (!ng[l] && !(r && r[l]) && !(a && a[l]) && !(i && i[l])) {
        var c = sg(t, l);
        try {
          ig(e, l, c);
        } catch {
        }
      }
    }
  }
  return e;
}
var lg = Fc;
const ug = /* @__PURE__ */ Xa(lg);
function tt() {
  return (tt = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }).apply(this, arguments);
}
var ha = function(e, t) {
  for (var r = [e[0]], n = 0, o = t.length; n < o; n += 1)
    r.push(t[n], e[n + 1]);
  return r;
}, So = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !Qo.typeOf(e);
}, Gr = Object.freeze([]), st = Object.freeze({});
function tr(e) {
  return typeof e == "function";
}
function Eo(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function ei(e) {
  return e && typeof e.styledComponentId == "string";
}
var Pt = typeof process < "u" && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", ti = typeof window < "u" && "HTMLElement" in window, fg = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), dg = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

`, 2: `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, 3: `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, 4: `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, 5: `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, 6: `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: `ThemeProvider: Please make your "theme" prop an object.

`, 9: "Missing document `<head>`\n\n", 10: `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, 11: `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", 13: `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, 14: `ThemeProvider: "theme" prop is required.

`, 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, 17: `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
` } : {};
function pg() {
  for (var e = arguments.length <= 0 ? void 0 : arguments[0], t = [], r = 1, n = arguments.length; r < n; r += 1)
    t.push(r < 0 || arguments.length <= r ? void 0 : arguments[r]);
  return t.forEach(function(o) {
    e = e.replace(/%[a-z]/, o);
  }), e;
}
function Dt(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  throw process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (r.length > 0 ? " Args: " + r.join(", ") : "")) : new Error(pg.apply(void 0, [dg[e]].concat(r)).trim());
}
var hg = function() {
  function e(r) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = r;
  }
  var t = e.prototype;
  return t.indexOfGroup = function(r) {
    for (var n = 0, o = 0; o < r; o++)
      n += this.groupSizes[o];
    return n;
  }, t.insertRules = function(r, n) {
    if (r >= this.groupSizes.length) {
      for (var o = this.groupSizes, i = o.length, a = i; r >= a; )
        (a <<= 1) < 0 && Dt(16, "" + r);
      this.groupSizes = new Uint32Array(a), this.groupSizes.set(o), this.length = a;
      for (var s = i; s < a; s++)
        this.groupSizes[s] = 0;
    }
    for (var l = this.indexOfGroup(r + 1), c = 0, f = n.length; c < f; c++)
      this.tag.insertRule(l, n[c]) && (this.groupSizes[r]++, l++);
  }, t.clearGroup = function(r) {
    if (r < this.length) {
      var n = this.groupSizes[r], o = this.indexOfGroup(r), i = o + n;
      this.groupSizes[r] = 0;
      for (var a = o; a < i; a++)
        this.tag.deleteRule(o);
    }
  }, t.getGroup = function(r) {
    var n = "";
    if (r >= this.length || this.groupSizes[r] === 0)
      return n;
    for (var o = this.groupSizes[r], i = this.indexOfGroup(r), a = i + o, s = i; s < a; s++)
      n += this.tag.getRule(s) + `/*!sc*/
`;
    return n;
  }, e;
}(), Dr = /* @__PURE__ */ new Map(), Yr = /* @__PURE__ */ new Map(), Vt = 1, Cr = function(e) {
  if (Dr.has(e))
    return Dr.get(e);
  for (; Yr.has(Vt); )
    Vt++;
  var t = Vt++;
  return process.env.NODE_ENV !== "production" && ((0 | t) < 0 || t > 1 << 30) && Dt(16, "" + t), Dr.set(e, t), Yr.set(t, e), t;
}, mg = function(e) {
  return Yr.get(e);
}, gg = function(e, t) {
  t >= Vt && (Vt = t + 1), Dr.set(e, t), Yr.set(t, e);
}, vg = "style[" + Pt + '][data-styled-version="5.3.6"]', yg = new RegExp("^" + Pt + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), bg = function(e, t, r) {
  for (var n, o = r.split(","), i = 0, a = o.length; i < a; i++)
    (n = o[i]) && e.registerName(t, n);
}, Sg = function(e, t) {
  for (var r = (t.textContent || "").split(`/*!sc*/
`), n = [], o = 0, i = r.length; o < i; o++) {
    var a = r[o].trim();
    if (a) {
      var s = a.match(yg);
      if (s) {
        var l = 0 | parseInt(s[1], 10), c = s[2];
        l !== 0 && (gg(c, l), bg(e, c, s[3]), e.getTag().insertRules(l, n)), n.length = 0;
      } else
        n.push(a);
    }
  }
}, Eg = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, Hc = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), o = function(s) {
    for (var l = s.childNodes, c = l.length; c >= 0; c--) {
      var f = l[c];
      if (f && f.nodeType === 1 && f.hasAttribute(Pt))
        return f;
    }
  }(r), i = o !== void 0 ? o.nextSibling : null;
  n.setAttribute(Pt, "active"), n.setAttribute("data-styled-version", "5.3.6");
  var a = Eg();
  return a && n.setAttribute("nonce", a), r.insertBefore(n, i), n;
}, Cg = function() {
  function e(r) {
    var n = this.element = Hc(r);
    n.appendChild(document.createTextNode("")), this.sheet = function(o) {
      if (o.sheet)
        return o.sheet;
      for (var i = document.styleSheets, a = 0, s = i.length; a < s; a++) {
        var l = i[a];
        if (l.ownerNode === o)
          return l;
      }
      Dt(17);
    }(n), this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(r, n) {
    try {
      return this.sheet.insertRule(n, r), this.length++, !0;
    } catch {
      return !1;
    }
  }, t.deleteRule = function(r) {
    this.sheet.deleteRule(r), this.length--;
  }, t.getRule = function(r) {
    var n = this.sheet.cssRules[r];
    return n !== void 0 && typeof n.cssText == "string" ? n.cssText : "";
  }, e;
}(), xg = function() {
  function e(r) {
    var n = this.element = Hc(r);
    this.nodes = n.childNodes, this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(r, n) {
    if (r <= this.length && r >= 0) {
      var o = document.createTextNode(n), i = this.nodes[r];
      return this.element.insertBefore(o, i || null), this.length++, !0;
    }
    return !1;
  }, t.deleteRule = function(r) {
    this.element.removeChild(this.nodes[r]), this.length--;
  }, t.getRule = function(r) {
    return r < this.length ? this.nodes[r].textContent : "";
  }, e;
}(), wg = function() {
  function e(r) {
    this.rules = [], this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(r, n) {
    return r <= this.length && (this.rules.splice(r, 0, n), this.length++, !0);
  }, t.deleteRule = function(r) {
    this.rules.splice(r, 1), this.length--;
  }, t.getRule = function(r) {
    return r < this.length ? this.rules[r] : "";
  }, e;
}(), ma = ti, _g = { isServer: !ti, useCSSOMInjection: !fg }, Bc = function() {
  function e(r, n, o) {
    r === void 0 && (r = st), n === void 0 && (n = {}), this.options = tt({}, _g, {}, r), this.gs = n, this.names = new Map(o), this.server = !!r.isServer, !this.server && ti && ma && (ma = !1, function(i) {
      for (var a = document.querySelectorAll(vg), s = 0, l = a.length; s < l; s++) {
        var c = a[s];
        c && c.getAttribute(Pt) !== "active" && (Sg(i, c), c.parentNode && c.parentNode.removeChild(c));
      }
    }(this));
  }
  e.registerId = function(r) {
    return Cr(r);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(r, n) {
    return n === void 0 && (n = !0), new e(tt({}, this.options, {}, r), this.gs, n && this.names || void 0);
  }, t.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (o = (n = this.options).isServer, i = n.useCSSOMInjection, a = n.target, r = o ? new wg(a) : i ? new Cg(a) : new xg(a), new hg(r)));
    var r, n, o, i, a;
  }, t.hasNameForId = function(r, n) {
    return this.names.has(r) && this.names.get(r).has(n);
  }, t.registerName = function(r, n) {
    if (Cr(r), this.names.has(r))
      this.names.get(r).add(n);
    else {
      var o = /* @__PURE__ */ new Set();
      o.add(n), this.names.set(r, o);
    }
  }, t.insertRules = function(r, n, o) {
    this.registerName(r, n), this.getTag().insertRules(Cr(r), o);
  }, t.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, t.clearRules = function(r) {
    this.getTag().clearGroup(Cr(r)), this.clearNames(r);
  }, t.clearTag = function() {
    this.tag = void 0;
  }, t.toString = function() {
    return function(r) {
      for (var n = r.getTag(), o = n.length, i = "", a = 0; a < o; a++) {
        var s = mg(a);
        if (s !== void 0) {
          var l = r.names.get(s), c = n.getGroup(a);
          if (l && c && l.size) {
            var f = Pt + ".g" + a + '[id="' + s + '"]', u = "";
            l !== void 0 && l.forEach(function(m) {
              m.length > 0 && (u += m + ",");
            }), i += "" + c + f + '{content:"' + u + `"}/*!sc*/
`;
          }
        }
      }
      return i;
    }(this);
  }, e;
}(), Og = /(a)(d)/gi, ga = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Co(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0)
    r = ga(t % 52) + r;
  return (ga(t % 52) + r).replace(Og, "$1-$2");
}
var dt = function(e, t) {
  for (var r = t.length; r; )
    e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, zc = function(e) {
  return dt(5381, e);
};
function Tg(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (tr(r) && !ei(r))
      return !1;
  }
  return !0;
}
var Ag = zc("5.3.6"), Rg = function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (n === void 0 || n.isStatic) && Tg(t), this.componentId = r, this.baseHash = dt(Ag, r), this.baseStyle = n, Bc.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, n) {
    var o = this.componentId, i = [];
    if (this.baseStyle && i.push(this.baseStyle.generateAndInjectStyles(t, r, n)), this.isStatic && !n.hash)
      if (this.staticRulesId && r.hasNameForId(o, this.staticRulesId))
        i.push(this.staticRulesId);
      else {
        var a = Nt(this.rules, t, r, n).join(""), s = Co(dt(this.baseHash, a) >>> 0);
        if (!r.hasNameForId(o, s)) {
          var l = n(a, "." + s, void 0, o);
          r.insertRules(o, s, l);
        }
        i.push(s), this.staticRulesId = s;
      }
    else {
      for (var c = this.rules.length, f = dt(this.baseHash, n.hash), u = "", m = 0; m < c; m++) {
        var g = this.rules[m];
        if (typeof g == "string")
          u += g, process.env.NODE_ENV !== "production" && (f = dt(f, g + m));
        else if (g) {
          var p = Nt(g, t, r, n), d = Array.isArray(p) ? p.join("") : p;
          f = dt(f, d + m), u += d;
        }
      }
      if (u) {
        var h = Co(f >>> 0);
        if (!r.hasNameForId(o, h)) {
          var x = n(u, "." + h, void 0, o);
          r.insertRules(o, h, x);
        }
        i.push(h);
      }
    }
    return i.join(" ");
  }, e;
}(), Pg = /^\s*\/\/.*$/gm, Ng = [":", "[", ".", "#"];
function $g(e) {
  var t, r, n, o, i = e === void 0 ? st : e, a = i.options, s = a === void 0 ? st : a, l = i.plugins, c = l === void 0 ? Gr : l, f = new Zm(s), u = [], m = function(d) {
    function h(x) {
      if (x)
        try {
          d(x + "}");
        } catch {
        }
    }
    return function(x, E, A, _, v, R, w, B, D, $) {
      switch (x) {
        case 1:
          if (D === 0 && E.charCodeAt(0) === 64)
            return d(E + ";"), "";
          break;
        case 2:
          if (B === 0)
            return E + "/*|*/";
          break;
        case 3:
          switch (B) {
            case 102:
            case 112:
              return d(A[0] + E), "";
            default:
              return E + ($ === 0 ? "/*|*/" : "");
          }
        case -2:
          E.split("/*|*/}").forEach(h);
      }
    };
  }(function(d) {
    u.push(d);
  }), g = function(d, h, x) {
    return h === 0 && Ng.indexOf(x[r.length]) !== -1 || x.match(o) ? d : "." + t;
  };
  function p(d, h, x, E) {
    E === void 0 && (E = "&");
    var A = d.replace(Pg, ""), _ = h && x ? x + " " + h + " { " + A + " }" : A;
    return t = E, r = h, n = new RegExp("\\" + r + "\\b", "g"), o = new RegExp("(\\" + r + "\\b){2,}"), f(x || !h ? "" : h, _);
  }
  return f.use([].concat(c, [function(d, h, x) {
    d === 2 && x.length && x[0].lastIndexOf(r) > 0 && (x[0] = x[0].replace(n, g));
  }, m, function(d) {
    if (d === -2) {
      var h = u;
      return u = [], h;
    }
  }])), p.hash = c.length ? c.reduce(function(d, h) {
    return h.name || Dt(15), dt(d, h.name);
  }, 5381).toString() : "", p;
}
var Uc = de.createContext();
Uc.Consumer;
var Wc = de.createContext(), Ig = (Wc.Consumer, new Bc()), xo = $g();
function Mg() {
  return Ne(Uc) || Ig;
}
function kg() {
  return Ne(Wc) || xo;
}
var Lg = function() {
  function e(t, r) {
    var n = this;
    this.inject = function(o, i) {
      i === void 0 && (i = xo);
      var a = n.name + i.hash;
      o.hasNameForId(n.id, a) || o.insertRules(n.id, a, i(n.rules, a, "@keyframes"));
    }, this.toString = function() {
      return Dt(12, String(n.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = r;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = xo), this.name + t.hash;
  }, e;
}(), Dg = /([A-Z])/, jg = /([A-Z])/g, Fg = /^ms-/, Hg = function(e) {
  return "-" + e.toLowerCase();
};
function va(e) {
  return Dg.test(e) ? e.replace(jg, Hg).replace(Fg, "-ms-") : e;
}
var ya = function(e) {
  return e == null || e === !1 || e === "";
};
function Nt(e, t, r, n) {
  if (Array.isArray(e)) {
    for (var o, i = [], a = 0, s = e.length; a < s; a += 1)
      (o = Nt(e[a], t, r, n)) !== "" && (Array.isArray(o) ? i.push.apply(i, o) : i.push(o));
    return i;
  }
  if (ya(e))
    return "";
  if (ei(e))
    return "." + e.styledComponentId;
  if (tr(e)) {
    if (typeof (c = e) != "function" || c.prototype && c.prototype.isReactComponent || !t)
      return e;
    var l = e(t);
    return process.env.NODE_ENV !== "production" && Qo.isElement(l) && console.warn(Eo(e) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), Nt(l, t, r, n);
  }
  var c;
  return e instanceof Lg ? r ? (e.inject(r, n), e.getName(n)) : e : So(e) ? function f(u, m) {
    var g, p, d = [];
    for (var h in u)
      u.hasOwnProperty(h) && !ya(u[h]) && (Array.isArray(u[h]) && u[h].isCss || tr(u[h]) ? d.push(va(h) + ":", u[h], ";") : So(u[h]) ? d.push.apply(d, f(u[h], h)) : d.push(va(h) + ": " + (g = h, (p = u[h]) == null || typeof p == "boolean" || p === "" ? "" : typeof p != "number" || p === 0 || g in Es ? String(p).trim() : p + "px") + ";"));
    return m ? [m + " {"].concat(d, ["}"]) : d;
  }(e) : e.toString();
}
var ba = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function lt(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  return tr(e) || So(e) ? ba(Nt(ha(Gr, [e].concat(r)))) : r.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : ba(Nt(ha(e, r)));
}
var Sa = /invalid hook call/i, xr = /* @__PURE__ */ new Set(), Bg = function(e, t) {
  if (process.env.NODE_ENV !== "production") {
    var r = "The component " + e + (t ? ' with the id of "' + t + '"' : "") + ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, n = console.error;
    try {
      var o = !0;
      console.error = function(i) {
        if (Sa.test(i))
          o = !1, xr.delete(r);
        else {
          for (var a = arguments.length, s = new Array(a > 1 ? a - 1 : 0), l = 1; l < a; l++)
            s[l - 1] = arguments[l];
          n.apply(void 0, [i].concat(s));
        }
      }, je(), o && !xr.has(r) && (console.warn(r), xr.add(r));
    } catch (i) {
      Sa.test(i.message) && xr.delete(r);
    } finally {
      console.error = n;
    }
  }
}, zg = function(e, t, r) {
  return r === void 0 && (r = st), e.theme !== r.theme && e.theme || t || r.theme;
}, Ug = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Wg = /(^-|-$)/g;
function Ln(e) {
  return e.replace(Ug, "-").replace(Wg, "");
}
var Vg = function(e) {
  return Co(zc(e) >>> 0);
};
function wr(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var wo = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, Gg = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function Yg(e, t, r) {
  var n = e[r];
  wo(t) && wo(n) ? Vc(n, t) : e[r] = t;
}
function Vc(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  for (var o = 0, i = r; o < i.length; o++) {
    var a = i[o];
    if (wo(a))
      for (var s in a)
        Gg(s) && Yg(e, a[s], s);
  }
  return e;
}
var Gc = de.createContext();
Gc.Consumer;
var Dn = {};
function Yc(e, t, r) {
  var n = ei(e), o = !wr(e), i = t.attrs, a = i === void 0 ? Gr : i, s = t.componentId, l = s === void 0 ? function(E, A) {
    var _ = typeof E != "string" ? "sc" : Ln(E);
    Dn[_] = (Dn[_] || 0) + 1;
    var v = _ + "-" + Vg("5.3.6" + _ + Dn[_]);
    return A ? A + "-" + v : v;
  }(t.displayName, t.parentComponentId) : s, c = t.displayName, f = c === void 0 ? function(E) {
    return wr(E) ? "styled." + E : "Styled(" + Eo(E) + ")";
  }(e) : c, u = t.displayName && t.componentId ? Ln(t.displayName) + "-" + t.componentId : t.componentId || l, m = n && e.attrs ? Array.prototype.concat(e.attrs, a).filter(Boolean) : a, g = t.shouldForwardProp;
  n && e.shouldForwardProp && (g = t.shouldForwardProp ? function(E, A, _) {
    return e.shouldForwardProp(E, A, _) && t.shouldForwardProp(E, A, _);
  } : e.shouldForwardProp);
  var p, d = new Rg(r, u, n ? e.componentStyle : void 0), h = d.isStatic && a.length === 0, x = function(E, A) {
    return function(_, v, R, w) {
      var B = _.attrs, D = _.componentStyle, $ = _.defaultProps, z = _.foldedComponentIds, C = _.shouldForwardProp, S = _.styledComponentId, O = _.target;
      process.env.NODE_ENV !== "production" && oi(S);
      var N = function(W, b, te) {
        W === void 0 && (W = st);
        var k = tt({}, b, { theme: W }), ne = {};
        return te.forEach(function(J) {
          var q, P, se, H = J;
          for (q in tr(H) && (H = H(k)), H)
            k[q] = ne[q] = q === "className" ? (P = ne[q], se = H[q], P && se ? P + " " + se : P || se) : H[q];
        }), [k, ne];
      }(zg(v, Ne(Gc), $) || st, v, B), j = N[0], M = N[1], U = function(W, b, te, k) {
        var ne = Mg(), J = kg(), q = b ? W.generateAndInjectStyles(st, ne, J) : W.generateAndInjectStyles(te, ne, J);
        return process.env.NODE_ENV !== "production" && oi(q), process.env.NODE_ENV !== "production" && !b && k && k(q), q;
      }(D, w, j, process.env.NODE_ENV !== "production" ? _.warnTooManyClasses : void 0), Q = R, X = M.$as || v.$as || M.as || v.as || O, re = wr(X), I = M !== v ? tt({}, v, {}, M) : v, L = {};
      for (var F in I)
        F[0] !== "$" && F !== "as" && (F === "forwardedAs" ? L.as = I[F] : (C ? C(F, ua, X) : !re || ua(F)) && (L[F] = I[F]));
      return v.style && M.style !== v.style && (L.style = tt({}, v.style, {}, M.style)), L.className = Array.prototype.concat(z, S, U !== S ? U : null, v.className, M.className).filter(Boolean).join(" "), L.ref = Q, nl(X, L);
    }(p, E, A, h);
  };
  return x.displayName = f, (p = de.forwardRef(x)).attrs = m, p.componentStyle = d, p.displayName = f, p.shouldForwardProp = g, p.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : Gr, p.styledComponentId = u, p.target = n ? e.target : e, p.withComponent = function(E) {
    var A = t.componentId, _ = function(R, w) {
      if (R == null)
        return {};
      var B, D, $ = {}, z = Object.keys(R);
      for (D = 0; D < z.length; D++)
        B = z[D], w.indexOf(B) >= 0 || ($[B] = R[B]);
      return $;
    }(t, ["componentId"]), v = A && A + "-" + (wr(E) ? E : Ln(Eo(E)));
    return Yc(E, tt({}, _, { attrs: m, componentId: v }), r);
  }, Object.defineProperty(p, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(E) {
    this._foldedDefaultProps = n ? Vc({}, e.defaultProps, E) : E;
  } }), process.env.NODE_ENV !== "production" && (Bg(f, u), p.warnTooManyClasses = function(E, A) {
    var _ = {}, v = !1;
    return function(R) {
      if (!v && (_[R] = !0, Object.keys(_).length >= 200)) {
        var w = A ? ' with the id of "' + A + '"' : "";
        console.warn("Over 200 classes were generated for component " + E + w + `.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), v = !0, _ = {};
      }
    };
  }(f, u)), p.toString = function() {
    return "." + p.styledComponentId;
  }, o && ug(p, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), p;
}
var _o = function(e) {
  return function t(r, n, o) {
    if (o === void 0 && (o = st), !Qo.isValidElementType(n))
      return Dt(1, String(n));
    var i = function() {
      return r(n, o, lt.apply(void 0, arguments));
    };
    return i.withConfig = function(a) {
      return t(r, n, tt({}, o, {}, a));
    }, i.attrs = function(a) {
      return t(r, n, tt({}, o, { attrs: Array.prototype.concat(o.attrs, a).filter(Boolean) }));
    }, i;
  }(Yc, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  _o[e] = _o(e);
});
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const dn = _o, ri = (e = "100%", t = e) => lt`
  width: ${e};
  height: ${t};
`;
lt`
  border: 1px solid red;
`;
const Kg = (e = "flex-start", t = "stretch", r = "row") => lt`
  display: flex;
  justify-content: ${e};
  align-items: ${t};
  flex-direction: ${r};
`, Kc = (e = "&") => lt`
  ${e}::-webkit-scrollbar {
    width: 10px;
  }

  ${e}::-webkit-scrollbar-track {
    background-color: ${({ theme: t }) => t.lightGrey};
  }

  ${e}::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
`, rr = (e) => lt`
  ${({ theme: t }) => t[e]}
`, qg = (e) => lt`
  position: absolute;
  ${Object.entries(e).map(([t, r]) => `${t}: ${r};`).join(`
`)}
`, Xg = lt`
  -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
`, Qg = dn.div`
  ${Kg("center", "center")};
  ${qg({
  left: "0",
  top: "0"
})}
  ${ri("100vw", "100vh")};
  background: rgba(0, 0, 0, 0.44);
  z-index: 100;
`, Jg = dn.div`
  display: grid;
  position: relative;
  ${ri("50vw", "60vh")};
  background: ${rr("grey")};
  border: 2px solid ${rr("lightGrey")};
  min-height: 300px;
  border-radius: 6px;
  cursor: grab;
  ${Xg};
  touch-action: none;
  overflow-y: auto;
  scroll-behavior: smooth;
  ${Kc()};
`, Zg = dn.div`
  margin: 0 auto;
  margin-top: 18px;
  ${ri("60%", "100%")}
  & > * {
    cursor: initial;
    color: ${rr("light")};
  }
`, ev = ({ onClose: e, isOpen: t, children: r }) => {
  const { Spring: n, Gesture: o } = Lc(), { opacity: i, transform: a } = Xm(), s = n.useTransition(t, {
    from: i.from(),
    enter: i.to(),
    leave: i.from(),
    config: n.config.stiff
  }), l = n.useSpring({
    from: a.from(),
    to: a.to(t),
    config: n.config.wobbly
  }), [c, f] = n.useSpring(() => ({
    y: 0,
    x: 0,
    scale: 1
  })), { y: u, x: m, scale: g } = c, p = o.useDrag(
    ({ offset: [h, x], down: E }) => {
      f.start({
        y: E ? x : 0,
        immediate: !1,
        x: E ? h : 0,
        scale: E ? 1.07 : 1
      });
    },
    { from: () => [0, 0], filterTaps: !0, rubberband: !0, delay: 200 }
  ), d = (h) => {
    h.stopPropagation();
  };
  return /* @__PURE__ */ Ee(To, { children: s((h, x) => /* @__PURE__ */ Ee(Ic, { when: x, children: /* @__PURE__ */ Ee(Dc, { children: /* @__PURE__ */ Ee(Qg, { style: h, onClick: e, as: n.a.div, children: /* @__PURE__ */ Ee(
    Jg,
    {
      style: { ...l, x: m, y: u, scale: g },
      ...p(),
      onClick: d,
      as: n.a.div,
      children: /* @__PURE__ */ Ee(
        al,
        {
          damping: 0.05,
          syncCallbacks: !0,
          alwaysShowTracks: !0,
          children: /* @__PURE__ */ Ee(Zg, { children: r })
        }
      )
    }
  ) }) }) })) });
}, Ev = (e) => /* @__PURE__ */ Ee(kc, { children: /* @__PURE__ */ Ee(ev, { ...e }) }), tv = (e, t) => {
  const { Spring: r, Gesture: n } = Lc(), [{ y: o }, i] = r.useSpring(() => ({ y: t })), a = () => {
    i.start({ y: 0, immediate: !1, config: r.config.gentle });
  }, s = (u = 0) => {
    e(), i.start({
      y: t,
      immediate: !1,
      config: { ...r.config.stiff, velocity: u }
    });
  }, l = n.useDrag(
    ({ last: u, velocity: [, m], direction: [, g], offset: [, p], cancel: d }) => {
      p < -70 && d(), u ? p > t * 0.5 || m > 0.5 && g === 1 ? s(m) : a() : i.start({ y: p, immediate: g === -1 });
    },
    {
      from: () => [0, o.get()],
      filterTaps: !0,
      bounds: { top: 0 },
      rubberband: !0
    }
  ), c = o.to((u) => u < t ? "block" : "none");
  return {
    toggle: (u) => {
      u ? a() : s();
    },
    bind: l,
    div: r.a.div,
    springs: {
      display: c,
      y: o
    }
  };
}, rv = dn.div`
  padding-left: 15px;
  z-index: 15;
  position: fixed;
  right: 0;
  height: calc(100vh + 100px);
  width: calc(100% - 54px);
  border-radius: 6px 6px 0;
  background: ${rr("darkBlue")};
  border-top: 2px solid ${rr("lightGrey")};
  touch-action: none;
  bottom: ${({ $bottom: e }) => `calc(-100vh + ${e - 100}px)`};
  overflow-y: auto;
  box-sizing: border-box;
  scroll-behavior: smooth;
  ${Kc()};
`, nv = ({ children: e, onClose: t, isOpen: r, height: n }) => {
  const o = tv(t, n);
  return Ue(() => {
    o.toggle(r);
  }, [r]), /* @__PURE__ */ Ee(
    rv,
    {
      $bottom: n,
      ...o.bind(),
      style: o.springs,
      as: o.div,
      children: e
    }
  );
}, Cv = (e) => /* @__PURE__ */ Ee(kc, { children: /* @__PURE__ */ Ee(nv, { ...e }) });
export {
  kc as AnimationProvider,
  Sv as ColorButton,
  Ic as Display,
  Iu as ErrorBoundary,
  _u as LocalStorage,
  bv as LocalStorageClient,
  Ev as Modal,
  $c as NotificationsContext,
  pv as NotificationsProvider,
  hv as Page,
  Cv as Popover,
  lv as RoutePaths,
  cv as httpService,
  yv as isFunction,
  vv as isObject,
  Wm as isString,
  uv as useAltKeyDown,
  Lc as useAnimations,
  Ou as useBooleanState,
  fv as useDebounce,
  dv as useFullScreen,
  mv as useNotifications,
  gv as useOverflow
};
