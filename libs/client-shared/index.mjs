import * as y from "react";
import de, { useState as Vt, useRef as je, useContext as Ne, createContext as er, useLayoutEffect as ya, useEffect as Ke, forwardRef as xo, useMemo as ba, Children as Vc, createRef as Gc, useCallback as Yc, useDebugValue as ni, createElement as Kc } from "react";
import { jsxs as Sa, jsx as Oe, Fragment as _o } from "react/jsx-runtime";
import * as qc from "react-dom";
import Xc, { createPortal as Ea } from "react-dom";
import Qc from "react-smooth-scrollbar";
function Ca(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Jc } = Object.prototype, { getPrototypeOf: Oo } = Object, Gr = ((e) => (t) => {
  const r = Jc.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Xe = (e) => (e = e.toLowerCase(), (t) => Gr(t) === e), Yr = (e) => (t) => typeof t === e, { isArray: Nt } = Array, Gt = Yr("undefined");
function Zc(e) {
  return e !== null && !Gt(e) && e.constructor !== null && !Gt(e.constructor) && Fe(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const wa = Xe("ArrayBuffer");
function el(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && wa(e.buffer), t;
}
const tl = Yr("string"), Fe = Yr("function"), xa = Yr("number"), Kr = (e) => e !== null && typeof e == "object", rl = (e) => e === !0 || e === !1, Cr = (e) => {
  if (Gr(e) !== "object")
    return !1;
  const t = Oo(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, nl = Xe("Date"), ol = Xe("File"), il = Xe("Blob"), al = Xe("FileList"), sl = (e) => Kr(e) && Fe(e.pipe), cl = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || Fe(e.append) && ((t = Gr(e)) === "formdata" || // detect form-data instance
  t === "object" && Fe(e.toString) && e.toString() === "[object FormData]"));
}, ll = Xe("URLSearchParams"), ul = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function tr(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, o;
  if (typeof e != "object" && (e = [e]), Nt(e))
    for (n = 0, o = e.length; n < o; n++)
      t.call(null, e[n], n, e);
  else {
    const i = r ? Object.getOwnPropertyNames(e) : Object.keys(e), a = i.length;
    let s;
    for (n = 0; n < a; n++)
      s = i[n], t.call(null, e[s], s, e);
  }
}
function _a(e, t) {
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length, o;
  for (; n-- > 0; )
    if (o = r[n], t === o.toLowerCase())
      return o;
  return null;
}
const Oa = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), Ta = (e) => !Gt(e) && e !== Oa;
function kn() {
  const { caseless: e } = Ta(this) && this || {}, t = {}, r = (n, o) => {
    const i = e && _a(t, o) || o;
    Cr(t[i]) && Cr(n) ? t[i] = kn(t[i], n) : Cr(n) ? t[i] = kn({}, n) : Nt(n) ? t[i] = n.slice() : t[i] = n;
  };
  for (let n = 0, o = arguments.length; n < o; n++)
    arguments[n] && tr(arguments[n], r);
  return t;
}
const fl = (e, t, r, { allOwnKeys: n } = {}) => (tr(t, (o, i) => {
  r && Fe(o) ? e[i] = Ca(o, r) : e[i] = o;
}, { allOwnKeys: n }), e), dl = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), pl = (e, t, r, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, hl = (e, t, r, n) => {
  let o, i, a;
  const s = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
      a = o[i], (!n || n(a, e, t)) && !s[a] && (t[a] = e[a], s[a] = !0);
    e = r !== !1 && Oo(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, ml = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, gl = (e) => {
  if (!e)
    return null;
  if (Nt(e))
    return e;
  let t = e.length;
  if (!xa(t))
    return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, vl = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Oo(Uint8Array)), yl = (e, t) => {
  const n = (e && e[Symbol.iterator]).call(e);
  let o;
  for (; (o = n.next()) && !o.done; ) {
    const i = o.value;
    t.call(e, i[0], i[1]);
  }
}, bl = (e, t) => {
  let r;
  const n = [];
  for (; (r = e.exec(t)) !== null; )
    n.push(r);
  return n;
}, Sl = Xe("HTMLFormElement"), El = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, o) {
    return n.toUpperCase() + o;
  }
), oi = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), Cl = Xe("RegExp"), Aa = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  tr(r, (o, i) => {
    t(o, i, e) !== !1 && (n[i] = o);
  }), Object.defineProperties(e, n);
}, wl = (e) => {
  Aa(e, (t, r) => {
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
}, xl = (e, t) => {
  const r = {}, n = (o) => {
    o.forEach((i) => {
      r[i] = !0;
    });
  };
  return Nt(e) ? n(e) : n(String(e).split(t)), r;
}, _l = () => {
}, Ol = (e, t) => (e = +e, Number.isFinite(e) ? e : t), fn = "abcdefghijklmnopqrstuvwxyz", ii = "0123456789", Ra = {
  DIGIT: ii,
  ALPHA: fn,
  ALPHA_DIGIT: fn + fn.toUpperCase() + ii
}, Tl = (e = 16, t = Ra.ALPHA_DIGIT) => {
  let r = "";
  const { length: n } = t;
  for (; e--; )
    r += t[Math.random() * n | 0];
  return r;
};
function Al(e) {
  return !!(e && Fe(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const Rl = (e) => {
  const t = new Array(10), r = (n, o) => {
    if (Kr(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        t[o] = n;
        const i = Nt(n) ? [] : {};
        return tr(n, (a, s) => {
          const l = r(a, o + 1);
          !Gt(l) && (i[s] = l);
        }), t[o] = void 0, i;
      }
    }
    return n;
  };
  return r(e, 0);
}, Pl = Xe("AsyncFunction"), Nl = (e) => e && (Kr(e) || Fe(e)) && Fe(e.then) && Fe(e.catch), O = {
  isArray: Nt,
  isArrayBuffer: wa,
  isBuffer: Zc,
  isFormData: cl,
  isArrayBufferView: el,
  isString: tl,
  isNumber: xa,
  isBoolean: rl,
  isObject: Kr,
  isPlainObject: Cr,
  isUndefined: Gt,
  isDate: nl,
  isFile: ol,
  isBlob: il,
  isRegExp: Cl,
  isFunction: Fe,
  isStream: sl,
  isURLSearchParams: ll,
  isTypedArray: vl,
  isFileList: al,
  forEach: tr,
  merge: kn,
  extend: fl,
  trim: ul,
  stripBOM: dl,
  inherits: pl,
  toFlatObject: hl,
  kindOf: Gr,
  kindOfTest: Xe,
  endsWith: ml,
  toArray: gl,
  forEachEntry: yl,
  matchAll: bl,
  isHTMLForm: Sl,
  hasOwnProperty: oi,
  hasOwnProp: oi,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Aa,
  freezeMethods: wl,
  toObjectSet: xl,
  toCamelCase: El,
  noop: _l,
  toFiniteNumber: Ol,
  findKey: _a,
  global: Oa,
  isContextDefined: Ta,
  ALPHABET: Ra,
  generateString: Tl,
  isSpecCompliantForm: Al,
  toJSONObject: Rl,
  isAsyncFn: Pl,
  isThenable: Nl
};
function oe(e, t, r, n, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), n && (this.request = n), o && (this.response = o);
}
O.inherits(oe, Error, {
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
      config: O.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const Pa = oe.prototype, Na = {};
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
  Na[e] = { value: e };
});
Object.defineProperties(oe, Na);
Object.defineProperty(Pa, "isAxiosError", { value: !0 });
oe.from = (e, t, r, n, o, i) => {
  const a = Object.create(Pa);
  return O.toFlatObject(e, a, function(l) {
    return l !== Error.prototype;
  }, (s) => s !== "isAxiosError"), oe.call(a, e.message, t, r, n, o), a.cause = e, a.name = e.name, i && Object.assign(a, i), a;
};
const $l = null;
function Ln(e) {
  return O.isPlainObject(e) || O.isArray(e);
}
function $a(e) {
  return O.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function ai(e, t, r) {
  return e ? e.concat(t).map(function(o, i) {
    return o = $a(o), !r && i ? "[" + o + "]" : o;
  }).join(r ? "." : "") : t;
}
function Il(e) {
  return O.isArray(e) && !e.some(Ln);
}
const Ml = O.toFlatObject(O, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function qr(e, t, r) {
  if (!O.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = O.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(d, h) {
    return !O.isUndefined(h[d]);
  });
  const n = r.metaTokens, o = r.visitor || u, i = r.dots, a = r.indexes, l = (r.Blob || typeof Blob < "u" && Blob) && O.isSpecCompliantForm(t);
  if (!O.isFunction(o))
    throw new TypeError("visitor must be a function");
  function c(p) {
    if (p === null)
      return "";
    if (O.isDate(p))
      return p.toISOString();
    if (!l && O.isBlob(p))
      throw new oe("Blob is not supported. Use a Buffer instead.");
    return O.isArrayBuffer(p) || O.isTypedArray(p) ? l && typeof Blob == "function" ? new Blob([p]) : Buffer.from(p) : p;
  }
  function u(p, d, h) {
    let C = p;
    if (p && !h && typeof p == "object") {
      if (O.endsWith(d, "{}"))
        d = n ? d : d.slice(0, -2), p = JSON.stringify(p);
      else if (O.isArray(p) && Il(p) || (O.isFileList(p) || O.endsWith(d, "[]")) && (C = O.toArray(p)))
        return d = $a(d), C.forEach(function(A, T) {
          !(O.isUndefined(A) || A === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? ai([d], T, i) : a === null ? d : d + "[]",
            c(A)
          );
        }), !1;
    }
    return Ln(p) ? !0 : (t.append(ai(h, d, i), c(p)), !1);
  }
  const f = [], m = Object.assign(Ml, {
    defaultVisitor: u,
    convertValue: c,
    isVisitable: Ln
  });
  function g(p, d) {
    if (!O.isUndefined(p)) {
      if (f.indexOf(p) !== -1)
        throw Error("Circular reference detected in " + d.join("."));
      f.push(p), O.forEach(p, function(C, E) {
        (!(O.isUndefined(C) || C === null) && o.call(
          t,
          C,
          O.isString(E) ? E.trim() : E,
          d,
          m
        )) === !0 && g(C, d ? d.concat(E) : [E]);
      }), f.pop();
    }
  }
  if (!O.isObject(e))
    throw new TypeError("data must be an object");
  return g(e), t;
}
function si(e) {
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
function To(e, t) {
  this._pairs = [], e && qr(e, this, t);
}
const Ia = To.prototype;
Ia.append = function(t, r) {
  this._pairs.push([t, r]);
};
Ia.toString = function(t) {
  const r = t ? function(n) {
    return t.call(this, n, si);
  } : si;
  return this._pairs.map(function(o) {
    return r(o[0]) + "=" + r(o[1]);
  }, "").join("&");
};
function kl(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Ma(e, t, r) {
  if (!t)
    return e;
  const n = r && r.encode || kl, o = r && r.serialize;
  let i;
  if (o ? i = o(t, r) : i = O.isURLSearchParams(t) ? t.toString() : new To(t, r).toString(n), i) {
    const a = e.indexOf("#");
    a !== -1 && (e = e.slice(0, a)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class Ll {
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
    O.forEach(this.handlers, function(n) {
      n !== null && t(n);
    });
  }
}
const ci = Ll, ka = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Dl = typeof URLSearchParams < "u" ? URLSearchParams : To, jl = typeof FormData < "u" ? FormData : null, Fl = typeof Blob < "u" ? Blob : null, Hl = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), Bl = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), Ye = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Dl,
    FormData: jl,
    Blob: Fl
  },
  isStandardBrowserEnv: Hl,
  isStandardBrowserWebWorkerEnv: Bl,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function zl(e, t) {
  return qr(e, new Ye.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, o, i) {
      return Ye.isNode && O.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Ul(e) {
  return O.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Wl(e) {
  const t = {}, r = Object.keys(e);
  let n;
  const o = r.length;
  let i;
  for (n = 0; n < o; n++)
    i = r[n], t[i] = e[i];
  return t;
}
function La(e) {
  function t(r, n, o, i) {
    let a = r[i++];
    const s = Number.isFinite(+a), l = i >= r.length;
    return a = !a && O.isArray(o) ? o.length : a, l ? (O.hasOwnProp(o, a) ? o[a] = [o[a], n] : o[a] = n, !s) : ((!o[a] || !O.isObject(o[a])) && (o[a] = []), t(r, n, o[a], i) && O.isArray(o[a]) && (o[a] = Wl(o[a])), !s);
  }
  if (O.isFormData(e) && O.isFunction(e.entries)) {
    const r = {};
    return O.forEachEntry(e, (n, o) => {
      t(Ul(n), o, r, 0);
    }), r;
  }
  return null;
}
const Vl = {
  "Content-Type": void 0
};
function Gl(e, t, r) {
  if (O.isString(e))
    try {
      return (t || JSON.parse)(e), O.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(e);
}
const Xr = {
  transitional: ka,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, r) {
    const n = r.getContentType() || "", o = n.indexOf("application/json") > -1, i = O.isObject(t);
    if (i && O.isHTMLForm(t) && (t = new FormData(t)), O.isFormData(t))
      return o && o ? JSON.stringify(La(t)) : t;
    if (O.isArrayBuffer(t) || O.isBuffer(t) || O.isStream(t) || O.isFile(t) || O.isBlob(t))
      return t;
    if (O.isArrayBufferView(t))
      return t.buffer;
    if (O.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let s;
    if (i) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return zl(t, this.formSerializer).toString();
      if ((s = O.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const l = this.env && this.env.FormData;
        return qr(
          s ? { "files[]": t } : t,
          l && new l(),
          this.formSerializer
        );
      }
    }
    return i || o ? (r.setContentType("application/json", !1), Gl(t)) : t;
  }],
  transformResponse: [function(t) {
    const r = this.transitional || Xr.transitional, n = r && r.forcedJSONParsing, o = this.responseType === "json";
    if (t && O.isString(t) && (n && !this.responseType || o)) {
      const a = !(r && r.silentJSONParsing) && o;
      try {
        return JSON.parse(t);
      } catch (s) {
        if (a)
          throw s.name === "SyntaxError" ? oe.from(s, oe.ERR_BAD_RESPONSE, this, null, this.response) : s;
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
    FormData: Ye.classes.FormData,
    Blob: Ye.classes.Blob
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
O.forEach(["delete", "get", "head"], function(t) {
  Xr.headers[t] = {};
});
O.forEach(["post", "put", "patch"], function(t) {
  Xr.headers[t] = O.merge(Vl);
});
const Ao = Xr, Yl = O.toObjectSet([
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
]), Kl = (e) => {
  const t = {};
  let r, n, o;
  return e && e.split(`
`).forEach(function(a) {
    o = a.indexOf(":"), r = a.substring(0, o).trim().toLowerCase(), n = a.substring(o + 1).trim(), !(!r || t[r] && Yl[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n);
  }), t;
}, li = Symbol("internals");
function Ht(e) {
  return e && String(e).trim().toLowerCase();
}
function wr(e) {
  return e === !1 || e == null ? e : O.isArray(e) ? e.map(wr) : String(e);
}
function ql(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const Xl = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function dn(e, t, r, n, o) {
  if (O.isFunction(n))
    return n.call(this, t, r);
  if (o && (t = r), !!O.isString(t)) {
    if (O.isString(n))
      return t.indexOf(n) !== -1;
    if (O.isRegExp(n))
      return n.test(t);
  }
}
function Ql(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function Jl(e, t) {
  const r = O.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + r, {
      value: function(o, i, a) {
        return this[n].call(this, t, o, i, a);
      },
      configurable: !0
    });
  });
}
class Qr {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    const o = this;
    function i(s, l, c) {
      const u = Ht(l);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const f = O.findKey(o, u);
      (!f || o[f] === void 0 || c === !0 || c === void 0 && o[f] !== !1) && (o[f || l] = wr(s));
    }
    const a = (s, l) => O.forEach(s, (c, u) => i(c, u, l));
    return O.isPlainObject(t) || t instanceof this.constructor ? a(t, r) : O.isString(t) && (t = t.trim()) && !Xl(t) ? a(Kl(t), r) : t != null && i(r, t, n), this;
  }
  get(t, r) {
    if (t = Ht(t), t) {
      const n = O.findKey(this, t);
      if (n) {
        const o = this[n];
        if (!r)
          return o;
        if (r === !0)
          return ql(o);
        if (O.isFunction(r))
          return r.call(this, o, n);
        if (O.isRegExp(r))
          return r.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = Ht(t), t) {
      const n = O.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || dn(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let o = !1;
    function i(a) {
      if (a = Ht(a), a) {
        const s = O.findKey(n, a);
        s && (!r || dn(n, n[s], s, r)) && (delete n[s], o = !0);
      }
    }
    return O.isArray(t) ? t.forEach(i) : i(t), o;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length, o = !1;
    for (; n--; ) {
      const i = r[n];
      (!t || dn(this, this[i], i, t, !0)) && (delete this[i], o = !0);
    }
    return o;
  }
  normalize(t) {
    const r = this, n = {};
    return O.forEach(this, (o, i) => {
      const a = O.findKey(n, i);
      if (a) {
        r[a] = wr(o), delete r[i];
        return;
      }
      const s = t ? Ql(i) : String(i).trim();
      s !== i && delete r[i], r[s] = wr(o), n[s] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = /* @__PURE__ */ Object.create(null);
    return O.forEach(this, (n, o) => {
      n != null && n !== !1 && (r[o] = t && O.isArray(n) ? n.join(", ") : n);
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
    const n = (this[li] = this[li] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function i(a) {
      const s = Ht(a);
      n[s] || (Jl(o, a), n[s] = !0);
    }
    return O.isArray(t) ? t.forEach(i) : i(t), this;
  }
}
Qr.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
O.freezeMethods(Qr.prototype);
O.freezeMethods(Qr);
const tt = Qr;
function pn(e, t) {
  const r = this || Ao, n = t || r, o = tt.from(n.headers);
  let i = n.data;
  return O.forEach(e, function(s) {
    i = s.call(r, i, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), i;
}
function Da(e) {
  return !!(e && e.__CANCEL__);
}
function rr(e, t, r) {
  oe.call(this, e ?? "canceled", oe.ERR_CANCELED, t, r), this.name = "CanceledError";
}
O.inherits(rr, oe, {
  __CANCEL__: !0
});
function Zl(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? e(r) : t(new oe(
    "Request failed with status code " + r.status,
    [oe.ERR_BAD_REQUEST, oe.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
const eu = Ye.isStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  function() {
    return {
      write: function(r, n, o, i, a, s) {
        const l = [];
        l.push(r + "=" + encodeURIComponent(n)), O.isNumber(o) && l.push("expires=" + new Date(o).toGMTString()), O.isString(i) && l.push("path=" + i), O.isString(a) && l.push("domain=" + a), s === !0 && l.push("secure"), document.cookie = l.join("; ");
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
function tu(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function ru(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function ja(e, t) {
  return e && !tu(t) ? ru(e, t) : t;
}
const nu = Ye.isStandardBrowserEnv ? (
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
      const s = O.isString(a) ? o(a) : a;
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
function ou(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function iu(e, t) {
  e = e || 10;
  const r = new Array(e), n = new Array(e);
  let o = 0, i = 0, a;
  return t = t !== void 0 ? t : 1e3, function(l) {
    const c = Date.now(), u = n[i];
    a || (a = c), r[o] = l, n[o] = c;
    let f = i, m = 0;
    for (; f !== o; )
      m += r[f++], f = f % e;
    if (o = (o + 1) % e, o === i && (i = (i + 1) % e), c - a < t)
      return;
    const g = u && c - u;
    return g ? Math.round(m * 1e3 / g) : void 0;
  };
}
function ui(e, t) {
  let r = 0;
  const n = iu(50, 250);
  return (o) => {
    const i = o.loaded, a = o.lengthComputable ? o.total : void 0, s = i - r, l = n(s), c = i <= a;
    r = i;
    const u = {
      loaded: i,
      total: a,
      progress: a ? i / a : void 0,
      bytes: s,
      rate: l || void 0,
      estimated: l && a && c ? (a - i) / l : void 0,
      event: o
    };
    u[t ? "download" : "upload"] = !0, e(u);
  };
}
const au = typeof XMLHttpRequest < "u", su = au && function(e) {
  return new Promise(function(r, n) {
    let o = e.data;
    const i = tt.from(e.headers).normalize(), a = e.responseType;
    let s;
    function l() {
      e.cancelToken && e.cancelToken.unsubscribe(s), e.signal && e.signal.removeEventListener("abort", s);
    }
    O.isFormData(o) && (Ye.isStandardBrowserEnv || Ye.isStandardBrowserWebWorkerEnv ? i.setContentType(!1) : i.setContentType("multipart/form-data;", !1));
    let c = new XMLHttpRequest();
    if (e.auth) {
      const g = e.auth.username || "", p = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      i.set("Authorization", "Basic " + btoa(g + ":" + p));
    }
    const u = ja(e.baseURL, e.url);
    c.open(e.method.toUpperCase(), Ma(u, e.params, e.paramsSerializer), !0), c.timeout = e.timeout;
    function f() {
      if (!c)
        return;
      const g = tt.from(
        "getAllResponseHeaders" in c && c.getAllResponseHeaders()
      ), d = {
        data: !a || a === "text" || a === "json" ? c.responseText : c.response,
        status: c.status,
        statusText: c.statusText,
        headers: g,
        config: e,
        request: c
      };
      Zl(function(C) {
        r(C), l();
      }, function(C) {
        n(C), l();
      }, d), c = null;
    }
    if ("onloadend" in c ? c.onloadend = f : c.onreadystatechange = function() {
      !c || c.readyState !== 4 || c.status === 0 && !(c.responseURL && c.responseURL.indexOf("file:") === 0) || setTimeout(f);
    }, c.onabort = function() {
      c && (n(new oe("Request aborted", oe.ECONNABORTED, e, c)), c = null);
    }, c.onerror = function() {
      n(new oe("Network Error", oe.ERR_NETWORK, e, c)), c = null;
    }, c.ontimeout = function() {
      let p = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const d = e.transitional || ka;
      e.timeoutErrorMessage && (p = e.timeoutErrorMessage), n(new oe(
        p,
        d.clarifyTimeoutError ? oe.ETIMEDOUT : oe.ECONNABORTED,
        e,
        c
      )), c = null;
    }, Ye.isStandardBrowserEnv) {
      const g = (e.withCredentials || nu(u)) && e.xsrfCookieName && eu.read(e.xsrfCookieName);
      g && i.set(e.xsrfHeaderName, g);
    }
    o === void 0 && i.setContentType(null), "setRequestHeader" in c && O.forEach(i.toJSON(), function(p, d) {
      c.setRequestHeader(d, p);
    }), O.isUndefined(e.withCredentials) || (c.withCredentials = !!e.withCredentials), a && a !== "json" && (c.responseType = e.responseType), typeof e.onDownloadProgress == "function" && c.addEventListener("progress", ui(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && c.upload && c.upload.addEventListener("progress", ui(e.onUploadProgress)), (e.cancelToken || e.signal) && (s = (g) => {
      c && (n(!g || g.type ? new rr(null, e, c) : g), c.abort(), c = null);
    }, e.cancelToken && e.cancelToken.subscribe(s), e.signal && (e.signal.aborted ? s() : e.signal.addEventListener("abort", s)));
    const m = ou(u);
    if (m && Ye.protocols.indexOf(m) === -1) {
      n(new oe("Unsupported protocol " + m + ":", oe.ERR_BAD_REQUEST, e));
      return;
    }
    c.send(o || null);
  });
}, xr = {
  http: $l,
  xhr: su
};
O.forEach(xr, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const cu = {
  getAdapter: (e) => {
    e = O.isArray(e) ? e : [e];
    const { length: t } = e;
    let r, n;
    for (let o = 0; o < t && (r = e[o], !(n = O.isString(r) ? xr[r.toLowerCase()] : r)); o++)
      ;
    if (!n)
      throw n === !1 ? new oe(
        `Adapter ${r} is not supported by the environment`,
        "ERR_NOT_SUPPORT"
      ) : new Error(
        O.hasOwnProp(xr, r) ? `Adapter '${r}' is not available in the build` : `Unknown adapter '${r}'`
      );
    if (!O.isFunction(n))
      throw new TypeError("adapter is not a function");
    return n;
  },
  adapters: xr
};
function hn(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new rr(null, e);
}
function fi(e) {
  return hn(e), e.headers = tt.from(e.headers), e.data = pn.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), cu.getAdapter(e.adapter || Ao.adapter)(e).then(function(n) {
    return hn(e), n.data = pn.call(
      e,
      e.transformResponse,
      n
    ), n.headers = tt.from(n.headers), n;
  }, function(n) {
    return Da(n) || (hn(e), n && n.response && (n.response.data = pn.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = tt.from(n.response.headers))), Promise.reject(n);
  });
}
const di = (e) => e instanceof tt ? e.toJSON() : e;
function _t(e, t) {
  t = t || {};
  const r = {};
  function n(c, u, f) {
    return O.isPlainObject(c) && O.isPlainObject(u) ? O.merge.call({ caseless: f }, c, u) : O.isPlainObject(u) ? O.merge({}, u) : O.isArray(u) ? u.slice() : u;
  }
  function o(c, u, f) {
    if (O.isUndefined(u)) {
      if (!O.isUndefined(c))
        return n(void 0, c, f);
    } else
      return n(c, u, f);
  }
  function i(c, u) {
    if (!O.isUndefined(u))
      return n(void 0, u);
  }
  function a(c, u) {
    if (O.isUndefined(u)) {
      if (!O.isUndefined(c))
        return n(void 0, c);
    } else
      return n(void 0, u);
  }
  function s(c, u, f) {
    if (f in t)
      return n(c, u);
    if (f in e)
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
    headers: (c, u) => o(di(c), di(u), !0)
  };
  return O.forEach(Object.keys(Object.assign({}, e, t)), function(u) {
    const f = l[u] || o, m = f(e[u], t[u], u);
    O.isUndefined(m) && f !== s || (r[u] = m);
  }), r;
}
const Fa = "1.4.0", Ro = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Ro[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const pi = {};
Ro.transitional = function(t, r, n) {
  function o(i, a) {
    return "[Axios v" + Fa + "] Transitional option '" + i + "'" + a + (n ? ". " + n : "");
  }
  return (i, a, s) => {
    if (t === !1)
      throw new oe(
        o(a, " has been removed" + (r ? " in " + r : "")),
        oe.ERR_DEPRECATED
      );
    return r && !pi[a] && (pi[a] = !0, console.warn(
      o(
        a,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(i, a, s) : !0;
  };
};
function lu(e, t, r) {
  if (typeof e != "object")
    throw new oe("options must be an object", oe.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let o = n.length;
  for (; o-- > 0; ) {
    const i = n[o], a = t[i];
    if (a) {
      const s = e[i], l = s === void 0 || a(s, i, e);
      if (l !== !0)
        throw new oe("option " + i + " must be " + l, oe.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new oe("Unknown option " + i, oe.ERR_BAD_OPTION);
  }
}
const Dn = {
  assertOptions: lu,
  validators: Ro
}, ot = Dn.validators;
class kr {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new ci(),
      response: new ci()
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
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = _t(this.defaults, r);
    const { transitional: n, paramsSerializer: o, headers: i } = r;
    n !== void 0 && Dn.assertOptions(n, {
      silentJSONParsing: ot.transitional(ot.boolean),
      forcedJSONParsing: ot.transitional(ot.boolean),
      clarifyTimeoutError: ot.transitional(ot.boolean)
    }, !1), o != null && (O.isFunction(o) ? r.paramsSerializer = {
      serialize: o
    } : Dn.assertOptions(o, {
      encode: ot.function,
      serialize: ot.function
    }, !0)), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let a;
    a = i && O.merge(
      i.common,
      i[r.method]
    ), a && O.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (p) => {
        delete i[p];
      }
    ), r.headers = tt.concat(a, i);
    const s = [];
    let l = !0;
    this.interceptors.request.forEach(function(d) {
      typeof d.runWhen == "function" && d.runWhen(r) === !1 || (l = l && d.synchronous, s.unshift(d.fulfilled, d.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function(d) {
      c.push(d.fulfilled, d.rejected);
    });
    let u, f = 0, m;
    if (!l) {
      const p = [fi.bind(this), void 0];
      for (p.unshift.apply(p, s), p.push.apply(p, c), m = p.length, u = Promise.resolve(r); f < m; )
        u = u.then(p[f++], p[f++]);
      return u;
    }
    m = s.length;
    let g = r;
    for (f = 0; f < m; ) {
      const p = s[f++], d = s[f++];
      try {
        g = p(g);
      } catch (h) {
        d.call(this, h);
        break;
      }
    }
    try {
      u = fi.call(this, g);
    } catch (p) {
      return Promise.reject(p);
    }
    for (f = 0, m = c.length; f < m; )
      u = u.then(c[f++], c[f++]);
    return u;
  }
  getUri(t) {
    t = _t(this.defaults, t);
    const r = ja(t.baseURL, t.url);
    return Ma(r, t.params, t.paramsSerializer);
  }
}
O.forEach(["delete", "get", "head", "options"], function(t) {
  kr.prototype[t] = function(r, n) {
    return this.request(_t(n || {}, {
      method: t,
      url: r,
      data: (n || {}).data
    }));
  };
});
O.forEach(["post", "put", "patch"], function(t) {
  function r(n) {
    return function(i, a, s) {
      return this.request(_t(s || {}, {
        method: t,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: a
      }));
    };
  }
  kr.prototype[t] = r(), kr.prototype[t + "Form"] = r(!0);
});
const _r = kr;
class Po {
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
      n.reason || (n.reason = new rr(i, a, s), r(n.reason));
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
      token: new Po(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
}
const uu = Po;
function fu(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function du(e) {
  return O.isObject(e) && e.isAxiosError === !0;
}
const jn = {
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
Object.entries(jn).forEach(([e, t]) => {
  jn[t] = e;
});
const pu = jn;
function Ha(e) {
  const t = new _r(e), r = Ca(_r.prototype.request, t);
  return O.extend(r, _r.prototype, t, { allOwnKeys: !0 }), O.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(o) {
    return Ha(_t(e, o));
  }, r;
}
const xe = Ha(Ao);
xe.Axios = _r;
xe.CanceledError = rr;
xe.CancelToken = uu;
xe.isCancel = Da;
xe.VERSION = Fa;
xe.toFormData = qr;
xe.AxiosError = oe;
xe.Cancel = xe.CanceledError;
xe.all = function(t) {
  return Promise.all(t);
};
xe.spread = fu;
xe.isAxiosError = du;
xe.mergeConfig = _t;
xe.AxiosHeaders = tt;
xe.formToJSON = (e) => La(O.isHTMLForm(e) ? new FormData(e) : e);
xe.HttpStatusCode = pu;
xe.default = xe;
const hu = xe;
process.env.CLIENT_URL;
process.env.SERVER_PREFIX;
process.env.SERVER_PORT;
process.env.CODE_COMPILER_API_URL;
const mu = process.env.SERVER_URL ?? "http://localhost:6868", Xg = hu.create({
  baseURL: mu,
  withCredentials: !0
}), gu = {
  EDITOR_THEME: "EDITOR_THEME",
  EDITOR_CONTENT_DATA: "EDITOR_CONTENT_DATA",
  EDITOR_EXECUTE_MESSAGES: "EDITOR_EXECUTE_MESSAGES",
  EDITOR_FONT_SIZE: "EDITOR_FONT_SIZE",
  EDITOR_TAB_SIZE: "EDITOR_TAB_SIZE",
  EDITOR_CUSTOM_BACKGROUND: "EDITOR_CUSTOM_BACKGROUND",
  EDITOR_CUSTOM_COLOR: "EDITOR_CUSTOM_COLOR"
}, Qg = {
  MAIN: "/",
  EDITOR: "/edit",
  ABOUT: "/about"
}, Jg = () => {
  const [e, t] = Vt([]);
  return {
    on: (r) => {
      Object.entries(r).forEach(([n, o]) => {
        const i = (a) => {
          if (a.altKey && a.key === n.toLowerCase())
            return a.preventDefault(), o?.(), !1;
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
}, vu = (e = !1) => {
  const [t, r] = Vt(e);
  return {
    off: () => r(!1),
    on: () => r(!0),
    toggle: () => r(!t),
    val: t
  };
}, Zg = (e, t) => {
  const r = je();
  return (...n) => {
    r.current && clearTimeout(r.current), r.current = setTimeout(() => {
      e(...n);
    }, t);
  };
}, ev = () => () => {
  if (!document.fullscreenElement)
    return document.documentElement.requestFullscreen();
  document.exitFullscreen && document.exitFullscreen();
};
var _e;
_e = { __e: function(e, t, r, n) {
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
var Lr, Se, mn, hi, Fn = 0, Ba = [], Or = [], mi = _e.__b, gi = _e.__r, vi = _e.diffed, yi = _e.__c, bi = _e.unmount;
function za(e, t) {
  _e.__h && _e.__h(Se, e, Fn || t), Fn = 0;
  var r = Se.__H || (Se.__H = { __: [], __h: [] });
  return e >= r.__.length && r.__.push({ __V: Or }), r.__[e];
}
function yu(e) {
  return Fn = 1, bu(Ua, e);
}
function bu(e, t, r) {
  var n = za(Lr++, 2);
  if (n.t = e, !n.__c && (n.__ = [r ? r(t) : Ua(void 0, t), function(s) {
    var l = n.__N ? n.__N[0] : n.__[0], c = n.t(l, s);
    l !== c && (n.__N = [c, n.__[1]], n.__c.setState({}));
  }], n.__c = Se, !Se.u)) {
    var o = function(s, l, c) {
      if (!n.__c.__H)
        return !0;
      var u = n.__c.__H.__.filter(function(m) {
        return m.__c;
      });
      if (u.every(function(m) {
        return !m.__N;
      }))
        return !i || i.call(this, s, l, c);
      var f = !1;
      return u.forEach(function(m) {
        if (m.__N) {
          var g = m.__[0];
          m.__ = m.__N, m.__N = void 0, g !== m.__[0] && (f = !0);
        }
      }), !(!f && n.__c.props === s) && (!i || i.call(this, s, l, c));
    };
    Se.u = !0;
    var i = Se.shouldComponentUpdate, a = Se.componentWillUpdate;
    Se.componentWillUpdate = function(s, l, c) {
      if (this.__e) {
        var u = i;
        i = void 0, o(s, l, c), i = u;
      }
      a && a.call(this, s, l, c);
    }, Se.shouldComponentUpdate = o;
  }
  return n.__N || n.__;
}
function Su(e) {
  var t = za(Lr++, 10), r = yu();
  return t.__ = e, Se.componentDidCatch || (Se.componentDidCatch = function(n, o) {
    t.__ && t.__(n, o), r[1](n);
  }), [r[0], function() {
    r[1](void 0);
  }];
}
function Eu() {
  for (var e; e = Ba.shift(); )
    if (e.__P && e.__H)
      try {
        e.__H.__h.forEach(Tr), e.__H.__h.forEach(Hn), e.__H.__h = [];
      } catch (t) {
        e.__H.__h = [], _e.__e(t, e.__v);
      }
}
_e.__b = function(e) {
  Se = null, mi && mi(e);
}, _e.__r = function(e) {
  gi && gi(e), Lr = 0;
  var t = (Se = e.__c).__H;
  t && (mn === Se ? (t.__h = [], Se.__h = [], t.__.forEach(function(r) {
    r.__N && (r.__ = r.__N), r.__V = Or, r.__N = r.i = void 0;
  })) : (t.__h.forEach(Tr), t.__h.forEach(Hn), t.__h = [], Lr = 0)), mn = Se;
}, _e.diffed = function(e) {
  vi && vi(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (Ba.push(t) !== 1 && hi === _e.requestAnimationFrame || ((hi = _e.requestAnimationFrame) || Cu)(Eu)), t.__H.__.forEach(function(r) {
    r.i && (r.__H = r.i), r.__V !== Or && (r.__ = r.__V), r.i = void 0, r.__V = Or;
  })), mn = Se = null;
}, _e.__c = function(e, t) {
  t.some(function(r) {
    try {
      r.__h.forEach(Tr), r.__h = r.__h.filter(function(n) {
        return !n.__ || Hn(n);
      });
    } catch (n) {
      t.some(function(o) {
        o.__h && (o.__h = []);
      }), t = [], _e.__e(n, r.__v);
    }
  }), yi && yi(e, t);
}, _e.unmount = function(e) {
  bi && bi(e);
  var t, r = e.__c;
  r && r.__H && (r.__H.__.forEach(function(n) {
    try {
      Tr(n);
    } catch (o) {
      t = o;
    }
  }), r.__H = void 0, t && _e.__e(t, r.__v));
};
var Si = typeof requestAnimationFrame == "function";
function Cu(e) {
  var t, r = function() {
    clearTimeout(n), Si && cancelAnimationFrame(t), setTimeout(e);
  }, n = setTimeout(r, 100);
  Si && (t = requestAnimationFrame(r));
}
function Tr(e) {
  var t = Se, r = e.__c;
  typeof r == "function" && (e.__c = void 0, r()), Se = t;
}
function Hn(e) {
  var t = Se;
  e.__c = e.__(), Se = t;
}
function Ua(e, t) {
  return typeof t == "function" ? t(e) : t;
}
const wu = ({ errorInfo: e }) => /* @__PURE__ */ Sa("div", { children: [
  "Custom Error Boundary. ",
  /* @__PURE__ */ Oe("br", {})
] }), xu = ({ children: e }) => {
  const [t] = Su();
  return console.error(t), t ? /* @__PURE__ */ Oe(wu, { errorInfo: t }) : /* @__PURE__ */ Oe(_o, { children: e });
};
function $t(e, t) {
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
function _u(e, t) {
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
function Wa(e) {
  var t = _u(e, "string");
  return ye(t) === "symbol" ? t : String(t);
}
function Ei(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Wa(n.key), n);
  }
}
function It(e, t, r) {
  return t && Ei(e.prototype, t), r && Ei(e, r), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function Bn(e, t) {
  return Bn = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, Bn(e, t);
}
function Va(e, t) {
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
  }), t && Bn(e, t);
}
function Dr(e) {
  return Dr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Dr(e);
}
function Ou() {
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
function zn(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Tu(e, t) {
  if (t && (ye(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return zn(e);
}
function Ga(e) {
  var t = Ou();
  return function() {
    var n = Dr(e), o;
    if (t) {
      var i = Dr(this).constructor;
      o = Reflect.construct(n, arguments, i);
    } else
      o = n.apply(this, arguments);
    return Tu(this, o);
  };
}
function Ya(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ka = { exports: {} };
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
})(Ka);
var Au = Ka.exports;
const Te = /* @__PURE__ */ Ya(Au);
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
var Un = { exports: {} }, ce = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ci;
function Ru() {
  if (Ci)
    return ce;
  Ci = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, p = e ? Symbol.for("react.lazy") : 60116, d = e ? Symbol.for("react.block") : 60121, h = e ? Symbol.for("react.fundamental") : 60117, C = e ? Symbol.for("react.responder") : 60118, E = e ? Symbol.for("react.scope") : 60119;
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
            case f:
              return v;
            default:
              switch (v = v && v.$$typeof, v) {
                case s:
                case u:
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
  function T(v) {
    return A(v) === c;
  }
  return ce.AsyncMode = l, ce.ConcurrentMode = c, ce.ContextConsumer = s, ce.ContextProvider = a, ce.Element = t, ce.ForwardRef = u, ce.Fragment = n, ce.Lazy = p, ce.Memo = g, ce.Portal = r, ce.Profiler = i, ce.StrictMode = o, ce.Suspense = f, ce.isAsyncMode = function(v) {
    return T(v) || A(v) === l;
  }, ce.isConcurrentMode = T, ce.isContextConsumer = function(v) {
    return A(v) === s;
  }, ce.isContextProvider = function(v) {
    return A(v) === a;
  }, ce.isElement = function(v) {
    return typeof v == "object" && v !== null && v.$$typeof === t;
  }, ce.isForwardRef = function(v) {
    return A(v) === u;
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
    return A(v) === f;
  }, ce.isValidElementType = function(v) {
    return typeof v == "string" || typeof v == "function" || v === n || v === c || v === i || v === o || v === f || v === m || typeof v == "object" && v !== null && (v.$$typeof === p || v.$$typeof === g || v.$$typeof === a || v.$$typeof === s || v.$$typeof === u || v.$$typeof === h || v.$$typeof === C || v.$$typeof === E || v.$$typeof === d);
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
function Pu() {
  return wi || (wi = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, p = e ? Symbol.for("react.lazy") : 60116, d = e ? Symbol.for("react.block") : 60121, h = e ? Symbol.for("react.fundamental") : 60117, C = e ? Symbol.for("react.responder") : 60118, E = e ? Symbol.for("react.scope") : 60119;
    function A(P) {
      return typeof P == "string" || typeof P == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      P === n || P === c || P === i || P === o || P === f || P === m || typeof P == "object" && P !== null && (P.$$typeof === p || P.$$typeof === g || P.$$typeof === a || P.$$typeof === s || P.$$typeof === u || P.$$typeof === h || P.$$typeof === C || P.$$typeof === E || P.$$typeof === d);
    }
    function T(P) {
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
              case f:
                return H;
              default:
                var V = H && H.$$typeof;
                switch (V) {
                  case s:
                  case u:
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
    var v = l, R = c, x = s, B = a, k = t, $ = u, z = n, w = p, S = g, _ = r, N = i, j = o, D = f, W = !1;
    function ee(P) {
      return W || (W = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), Z(P) || T(P) === l;
    }
    function Z(P) {
      return T(P) === c;
    }
    function ae(P) {
      return T(P) === s;
    }
    function I(P) {
      return T(P) === a;
    }
    function L(P) {
      return typeof P == "object" && P !== null && P.$$typeof === t;
    }
    function F(P) {
      return T(P) === u;
    }
    function U(P) {
      return T(P) === n;
    }
    function b(P) {
      return T(P) === p;
    }
    function te(P) {
      return T(P) === g;
    }
    function M(P) {
      return T(P) === r;
    }
    function re(P) {
      return T(P) === i;
    }
    function X(P) {
      return T(P) === o;
    }
    function q(P) {
      return T(P) === f;
    }
    le.AsyncMode = v, le.ConcurrentMode = R, le.ContextConsumer = x, le.ContextProvider = B, le.Element = k, le.ForwardRef = $, le.Fragment = z, le.Lazy = w, le.Memo = S, le.Portal = _, le.Profiler = N, le.StrictMode = j, le.Suspense = D, le.isAsyncMode = ee, le.isConcurrentMode = Z, le.isContextConsumer = ae, le.isContextProvider = I, le.isElement = L, le.isForwardRef = F, le.isFragment = U, le.isLazy = b, le.isMemo = te, le.isPortal = M, le.isProfiler = re, le.isStrictMode = X, le.isSuspense = q, le.isValidElementType = A, le.typeOf = T;
  }()), le;
}
process.env.NODE_ENV === "production" ? Un.exports = Ru() : Un.exports = Pu();
var qa = Un.exports, Wn = {}, No = [], Nu = function(t) {
  No.push(t);
};
function Xa(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var r = No.reduce(function(n, o) {
      return o(n ?? "", "warning");
    }, t);
    r && console.error("Warning: ".concat(r));
  }
}
function $u(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var r = No.reduce(function(n, o) {
      return o(n ?? "", "note");
    }, t);
    r && console.warn("Note: ".concat(r));
  }
}
function Qa() {
  Wn = {};
}
function Ja(e, t, r) {
  !t && !Wn[r] && (e(!1, r), Wn[r] = !0);
}
function st(e, t) {
  Ja(Xa, e, t);
}
function Iu(e, t) {
  Ja($u, e, t);
}
st.preMessage = Nu;
st.resetWarned = Qa;
st.noteOnce = Iu;
function ie(e, t, r) {
  return t = Wa(t), t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function xi(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function J(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? xi(Object(r), !0).forEach(function(n) {
      ie(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : xi(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Za(e, t, r) {
  var n = y.useRef({});
  return (!("value" in n.current) || r(n.current.condition, t)) && (n.current.value = e(), n.current.condition = t), n.current.value;
}
function es(e, t) {
  typeof e == "function" ? e(t) : ye(e) === "object" && e && "current" in e && (e.current = t);
}
function ts() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n = t.filter(function(o) {
    return o;
  });
  return n.length <= 1 ? n[0] : function(o) {
    t.forEach(function(i) {
      es(i, o);
    });
  };
}
function rs(e) {
  var t, r, n = qa.isMemo(e) ? e.type.type : e.type;
  return !(typeof n == "function" && !((t = n.prototype) !== null && t !== void 0 && t.render) || typeof e == "function" && !((r = e.prototype) !== null && r !== void 0 && r.render));
}
function Mu(e) {
  return e instanceof HTMLElement || e instanceof SVGElement;
}
function ku(e) {
  return Mu(e) ? e : e instanceof de.Component ? Xc.findDOMNode(e) : null;
}
function Lu(e, t) {
  var r = J({}, e);
  return Array.isArray(t) && t.forEach(function(n) {
    delete r[n];
  }), r;
}
function Vn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function Du(e) {
  if (Array.isArray(e))
    return Vn(e);
}
function ns(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function $o(e, t) {
  if (e) {
    if (typeof e == "string")
      return Vn(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Vn(e, t);
  }
}
function ju() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Le(e) {
  return Du(e) || ns(e) || $o(e) || ju();
}
var os = function(t) {
  return +setTimeout(t, 16);
}, is = function(t) {
  return clearTimeout(t);
};
typeof window < "u" && "requestAnimationFrame" in window && (os = function(t) {
  return window.requestAnimationFrame(t);
}, is = function(t) {
  return window.cancelAnimationFrame(t);
});
var _i = 0, Io = /* @__PURE__ */ new Map();
function as(e) {
  Io.delete(e);
}
var Yt = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  _i += 1;
  var n = _i;
  function o(i) {
    if (i === 0)
      as(n), t();
    else {
      var a = os(function() {
        o(i - 1);
      });
      Io.set(n, a);
    }
  }
  return o(r), n;
};
Yt.cancel = function(e) {
  var t = Io.get(e);
  return as(t), is(t);
};
function Mo(e) {
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
function Fu(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), o, i;
  for (i = 0; i < n.length; i++)
    o = n[i], !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
function Ot(e, t) {
  if (e == null)
    return {};
  var r = Fu(e, t), n, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      n = i[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Hu(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, n = /* @__PURE__ */ new Set();
  function o(i, a) {
    var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, l = n.has(i);
    if (st(!l, "Warning: There may be circular references"), l)
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
      for (var u = 0; u < i.length; u++)
        if (!o(i[u], a[u], c))
          return !1;
      return !0;
    }
    if (i && a && ye(i) === "object" && ye(a) === "object") {
      var f = Object.keys(i);
      return f.length !== Object.keys(a).length ? !1 : f.every(function(m) {
        return o(i[m], a[m], c);
      });
    }
    return !1;
  }
  return o(e, t);
}
var Bu = /* @__PURE__ */ function() {
  function e(t) {
    $t(this, e), ie(this, "instanceId", void 0), ie(this, "cache", /* @__PURE__ */ new Map()), this.instanceId = t;
  }
  return It(e, [{
    key: "get",
    value: function(r) {
      return this.cache.get(r.join("%")) || null;
    }
  }, {
    key: "update",
    value: function(r, n) {
      var o = r.join("%"), i = this.cache.get(o), a = n(i);
      a === null ? this.cache.delete(o) : this.cache.set(o, a);
    }
  }]), e;
}(), Gn = "data-token-hash", xt = "data-css-hash", zu = "data-dev-cache-path", Et = "__cssinjs_instance__";
function Uu() {
  var e = Math.random().toString(12).slice(2);
  if (typeof document < "u" && document.head && document.body) {
    var t = document.body.querySelectorAll("style[".concat(xt, "]")) || [], r = document.head.firstChild;
    Array.from(t).forEach(function(o) {
      o[Et] = o[Et] || e, o[Et] === e && document.head.insertBefore(o, r);
    });
    var n = {};
    Array.from(document.querySelectorAll("style[".concat(xt, "]"))).forEach(function(o) {
      var i = o.getAttribute(xt);
      if (n[i]) {
        if (o[Et] === e) {
          var a;
          (a = o.parentNode) === null || a === void 0 || a.removeChild(o);
        }
      } else
        n[i] = !0;
    });
  }
  return new Bu(e);
}
var ko = /* @__PURE__ */ y.createContext({
  hashPriority: "low",
  cache: Uu(),
  defaultCache: !0
});
function ct() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Wu(e, t) {
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
var Oi = "data-rc-order", Vu = "rc-util-key", Yn = /* @__PURE__ */ new Map();
function ss() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.mark;
  return t ? t.startsWith("data-") ? t : "data-".concat(t) : Vu;
}
function Jr(e) {
  if (e.attachTo)
    return e.attachTo;
  var t = document.querySelector("head");
  return t || document.body;
}
function Gu(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function cs(e) {
  return Array.from((Yn.get(e) || e).children).filter(function(t) {
    return t.tagName === "STYLE";
  });
}
function ls(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!ct())
    return null;
  var r = t.csp, n = t.prepend, o = document.createElement("style");
  o.setAttribute(Oi, Gu(n)), r != null && r.nonce && (o.nonce = r?.nonce), o.innerHTML = e;
  var i = Jr(t), a = i.firstChild;
  if (n) {
    if (n === "queue") {
      var s = cs(i).filter(function(l) {
        return ["prepend", "prependQueue"].includes(l.getAttribute(Oi));
      });
      if (s.length)
        return i.insertBefore(o, s[s.length - 1].nextSibling), o;
    }
    i.insertBefore(o, a);
  } else
    i.appendChild(o);
  return o;
}
function us(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = Jr(t);
  return cs(r).find(function(n) {
    return n.getAttribute(ss(t)) === e;
  });
}
function fs(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = us(e, t);
  if (r) {
    var n = Jr(t);
    n.removeChild(r);
  }
}
function Yu(e, t) {
  var r = Yn.get(e);
  if (!r || !Wu(document, r)) {
    var n = ls("", t), o = n.parentNode;
    Yn.set(e, o), e.removeChild(n);
  }
}
function Kt(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = Jr(r);
  Yu(n, r);
  var o = us(t, r);
  if (o) {
    var i, a;
    if ((i = r.csp) !== null && i !== void 0 && i.nonce && o.nonce !== ((a = r.csp) === null || a === void 0 ? void 0 : a.nonce)) {
      var s;
      o.nonce = (s = r.csp) === null || s === void 0 ? void 0 : s.nonce;
    }
    return o.innerHTML !== e && (o.innerHTML = e), o;
  }
  var l = ls(e, r);
  return l.setAttribute(ss(r), t), l;
}
function jr(e) {
  var t = "";
  return Object.keys(e).forEach(function(r) {
    var n = e[r];
    t += r, n && ye(n) === "object" ? t += jr(n) : t += n;
  }), t;
}
function Ku(e, t) {
  return Mo("".concat(t, "_").concat(jr(e)));
}
var zt = "layer-".concat(Date.now(), "-").concat(Math.random()).replace(/\./g, ""), ds = "903px";
function qu(e, t) {
  if (ct()) {
    var r;
    Kt(e, zt);
    var n = document.createElement("div");
    n.style.position = "fixed", n.style.left = "0", n.style.top = "0", t?.(n), document.body.appendChild(n), process.env.NODE_ENV !== "production" && (n.innerHTML = "Test", n.style.zIndex = "9999999");
    var o = getComputedStyle(n).width === ds;
    return (r = n.parentNode) === null || r === void 0 || r.removeChild(n), fs(zt), o;
  }
  return !1;
}
var gn = void 0;
function Xu() {
  return gn === void 0 && (gn = qu("@layer ".concat(zt, " { .").concat(zt, " { width: ").concat(ds, "!important; } }"), function(e) {
    e.className = zt;
  })), gn;
}
function ps(e) {
  if (Array.isArray(e))
    return e;
}
function Qu(e, t) {
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
    } catch (u) {
      c = !0, o = u;
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
function hs() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function he(e, t) {
  return ps(e) || Qu(e, t) || $o(e, t) || hs();
}
var Ti = process.env.NODE_ENV !== "test" && ct() ? y.useLayoutEffect : y.useEffect, Ju = function(t, r) {
  var n = y.useRef(!0);
  Ti(function() {
    return t(n.current);
  }, r), Ti(function() {
    return n.current = !1, function() {
      n.current = !0;
    };
  }, []);
}, Zu = J({}, y), Ai = Zu.useInsertionEffect, ef = function(t, r, n) {
  y.useMemo(t, n), Ju(r, n);
}, tf = Ai ? function(e, t, r) {
  return Ai(function() {
    return e(), t();
  }, r);
} : ef;
function rf() {
  return !1;
}
var Kn = !1;
function nf() {
  return Kn;
}
const of = process.env.NODE_ENV === "production" ? rf : nf;
if (process.env.NODE_ENV !== "production" && typeof module < "u" && module && module.hot) {
  var vn = window;
  if (typeof vn.webpackHotUpdate == "function") {
    var af = vn.webpackHotUpdate;
    vn.webpackHotUpdate = function() {
      return Kn = !0, setTimeout(function() {
        Kn = !1;
      }, 0), af.apply(void 0, arguments);
    };
  }
}
function ms(e, t, r, n, o) {
  var i = y.useContext(ko), a = i.cache, s = [e].concat(Le(t)), l = s.join("_"), c = of(), u = function(g) {
    a.update(s, function(p) {
      var d = p || [], h = he(d, 2), C = h[0], E = C === void 0 ? 0 : C, A = h[1], T = A;
      process.env.NODE_ENV !== "production" && A && c && (n?.(T, c), T = null);
      var v = T || r(), R = [E, v];
      return g ? g(R) : R;
    });
  };
  y.useMemo(
    function() {
      return u();
    },
    /* eslint-disable react-hooks/exhaustive-deps */
    [l]
    /* eslint-enable */
  );
  var f = a.get(s)[1];
  return tf(function() {
    o?.(f);
  }, function() {
    return u(function(m) {
      var g = he(m, 2), p = g[0], d = g[1];
      return [p + 1, d];
    }), function() {
      a.update(s, function(m) {
        var g = m || [], p = he(g, 2), d = p[0], h = d === void 0 ? 0 : d, C = p[1], E = h - 1;
        return E === 0 ? (n?.(C, !1), null) : [h - 1, C];
      });
    };
  }, [l]), f;
}
var sf = {}, cf = process.env.NODE_ENV !== "production" ? "css-dev-only-do-not-override" : "css", ft = /* @__PURE__ */ new Map();
function lf(e) {
  ft.set(e, (ft.get(e) || 0) + 1);
}
function uf(e, t) {
  if (typeof document < "u") {
    var r = document.querySelectorAll("style[".concat(Gn, '="').concat(e, '"]'));
    r.forEach(function(n) {
      if (n[Et] === t) {
        var o;
        (o = n.parentNode) === null || o === void 0 || o.removeChild(n);
      }
    });
  }
}
function ff(e, t) {
  ft.set(e, (ft.get(e) || 0) - 1);
  var r = Array.from(ft.keys()), n = r.filter(function(o) {
    var i = ft.get(o) || 0;
    return i <= 0;
  });
  n.length < r.length && n.forEach(function(o) {
    uf(o, t), ft.delete(o);
  });
}
var df = function(t, r, n, o) {
  var i = n.getDerivativeToken(t), a = J(J({}, i), r);
  return o && (a = o(a)), a;
};
function pf(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = Ne(ko), o = n.cache.instanceId, i = r.salt, a = i === void 0 ? "" : i, s = r.override, l = s === void 0 ? sf : s, c = r.formatToken, u = y.useMemo(function() {
    return Object.assign.apply(Object, [{}].concat(Le(t)));
  }, [t]), f = y.useMemo(function() {
    return jr(u);
  }, [u]), m = y.useMemo(function() {
    return jr(l);
  }, [l]), g = ms("token", [a, e.id, f, m], function() {
    var p = df(u, l, e, c), d = Ku(p, a);
    p._tokenKey = d, lf(d);
    var h = "".concat(cf, "-").concat(Mo(d));
    return p._hashId = h, [p, h];
  }, function(p) {
    ff(p[0]._tokenKey, o);
  });
  return g;
}
var gs = {
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
}, vs = "comm", ys = "rule", bs = "decl", hf = "@import", mf = "@keyframes", gf = "@layer", vf = Math.abs, Lo = String.fromCharCode;
function Ss(e) {
  return e.trim();
}
function Ar(e, t, r) {
  return e.replace(t, r);
}
function yf(e, t) {
  return e.indexOf(t);
}
function qt(e, t) {
  return e.charCodeAt(t) | 0;
}
function Xt(e, t, r) {
  return e.slice(t, r);
}
function Ze(e) {
  return e.length;
}
function bf(e) {
  return e.length;
}
function cr(e, t) {
  return t.push(e), e;
}
var Zr = 1, Tt = 1, Es = 0, He = 0, Ee = 0, Mt = "";
function Do(e, t, r, n, o, i, a, s) {
  return { value: e, root: t, parent: r, type: n, props: o, children: i, line: Zr, column: Tt, length: a, return: "", siblings: s };
}
function Sf() {
  return Ee;
}
function Ef() {
  return Ee = He > 0 ? qt(Mt, --He) : 0, Tt--, Ee === 10 && (Tt = 1, Zr--), Ee;
}
function Ue() {
  return Ee = He < Es ? qt(Mt, He++) : 0, Tt++, Ee === 10 && (Tt = 1, Zr++), Ee;
}
function mt() {
  return qt(Mt, He);
}
function Rr() {
  return He;
}
function en(e, t) {
  return Xt(Mt, e, t);
}
function qn(e) {
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
function Cf(e) {
  return Zr = Tt = 1, Es = Ze(Mt = e), He = 0, [];
}
function wf(e) {
  return Mt = "", e;
}
function yn(e) {
  return Ss(en(He - 1, Xn(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function xf(e) {
  for (; (Ee = mt()) && Ee < 33; )
    Ue();
  return qn(e) > 2 || qn(Ee) > 3 ? "" : " ";
}
function _f(e, t) {
  for (; --t && Ue() && !(Ee < 48 || Ee > 102 || Ee > 57 && Ee < 65 || Ee > 70 && Ee < 97); )
    ;
  return en(e, Rr() + (t < 6 && mt() == 32 && Ue() == 32));
}
function Xn(e) {
  for (; Ue(); )
    switch (Ee) {
      case e:
        return He;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Xn(Ee);
        break;
      case 40:
        e === 41 && Xn(e);
        break;
      case 92:
        Ue();
        break;
    }
  return He;
}
function Of(e, t) {
  for (; Ue() && e + Ee !== 47 + 10; )
    if (e + Ee === 42 + 42 && mt() === 47)
      break;
  return "/*" + en(t, He - 1) + "*" + Lo(e === 47 ? e : Ue());
}
function Tf(e) {
  for (; !qn(mt()); )
    Ue();
  return en(e, He);
}
function Af(e) {
  return wf(Pr("", null, null, null, [""], e = Cf(e), 0, [0], e));
}
function Pr(e, t, r, n, o, i, a, s, l) {
  for (var c = 0, u = 0, f = a, m = 0, g = 0, p = 0, d = 1, h = 1, C = 1, E = 0, A = "", T = o, v = i, R = n, x = A; h; )
    switch (p = E, E = Ue()) {
      case 40:
        if (p != 108 && qt(x, f - 1) == 58) {
          yf(x += Ar(yn(E), "&", "&\f"), "&\f") != -1 && (C = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        x += yn(E);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        x += xf(p);
        break;
      case 92:
        x += _f(Rr() - 1, 7);
        continue;
      case 47:
        switch (mt()) {
          case 42:
          case 47:
            cr(Rf(Of(Ue(), Rr()), t, r, l), l);
            break;
          default:
            x += "/";
        }
        break;
      case 123 * d:
        s[c++] = Ze(x) * C;
      case 125 * d:
      case 59:
      case 0:
        switch (E) {
          case 0:
          case 125:
            h = 0;
          case 59 + u:
            C == -1 && (x = Ar(x, /\f/g, "")), g > 0 && Ze(x) - f && cr(g > 32 ? Pi(x + ";", n, r, f - 1, l) : Pi(Ar(x, " ", "") + ";", n, r, f - 2, l), l);
            break;
          case 59:
            x += ";";
          default:
            if (cr(R = Ri(x, t, r, c, u, o, s, A, T = [], v = [], f, i), i), E === 123)
              if (u === 0)
                Pr(x, t, R, R, T, i, f, s, v);
              else
                switch (m === 99 && qt(x, 3) === 110 ? 100 : m) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Pr(e, R, R, n && cr(Ri(e, R, R, 0, 0, o, s, A, o, T = [], f, v), v), o, v, f, s, n ? T : v);
                    break;
                  default:
                    Pr(x, R, R, R, [""], v, 0, s, v);
                }
        }
        c = u = g = 0, d = C = 1, A = x = "", f = a;
        break;
      case 58:
        f = 1 + Ze(x), g = p;
      default:
        if (d < 1) {
          if (E == 123)
            --d;
          else if (E == 125 && d++ == 0 && Ef() == 125)
            continue;
        }
        switch (x += Lo(E), E * d) {
          case 38:
            C = u > 0 ? 1 : (x += "\f", -1);
            break;
          case 44:
            s[c++] = (Ze(x) - 1) * C, C = 1;
            break;
          case 64:
            mt() === 45 && (x += yn(Ue())), m = mt(), u = f = Ze(A = x += Tf(Rr())), E++;
            break;
          case 45:
            p === 45 && Ze(x) == 2 && (d = 0);
        }
    }
  return i;
}
function Ri(e, t, r, n, o, i, a, s, l, c, u, f) {
  for (var m = o - 1, g = o === 0 ? i : [""], p = bf(g), d = 0, h = 0, C = 0; d < n; ++d)
    for (var E = 0, A = Xt(e, m + 1, m = vf(h = a[d])), T = e; E < p; ++E)
      (T = Ss(h > 0 ? g[E] + " " + A : Ar(A, /&\f/g, g[E]))) && (l[C++] = T);
  return Do(e, t, r, o === 0 ? ys : s, l, c, u, f);
}
function Rf(e, t, r, n) {
  return Do(e, t, r, vs, Lo(Sf()), Xt(e, 2, -2), 0, n);
}
function Pi(e, t, r, n, o) {
  return Do(e, t, r, bs, Xt(e, 0, n), Xt(e, n + 1, -1), n, o);
}
function Qn(e, t) {
  for (var r = "", n = 0; n < e.length; n++)
    r += t(e[n], n, e, t) || "";
  return r;
}
function Pf(e, t, r, n) {
  switch (e.type) {
    case gf:
      if (e.children.length)
        break;
    case hf:
    case bs:
      return e.return = e.return || e.value;
    case vs:
      return "";
    case mf:
      return e.return = e.value + "{" + Qn(e.children, n) + "}";
    case ys:
      if (!Ze(e.value = e.props.join(",")))
        return "";
  }
  return Ze(r = Qn(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function Cs(e, t) {
  var r = t.path, n = t.parentSelectors;
  st(!1, "[Ant Design CSS-in-JS] ".concat(r ? "Error in ".concat(r, ": ") : "").concat(e).concat(n.length ? " Selector: ".concat(n.join(" | ")) : ""));
}
var Nf = function(t, r, n) {
  if (t === "content") {
    var o = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, i = ["normal", "none", "initial", "inherit", "unset"];
    (typeof r != "string" || i.indexOf(r) === -1 && !o.test(r) && (r.charAt(0) !== r.charAt(r.length - 1) || r.charAt(0) !== '"' && r.charAt(0) !== "'")) && Cs("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(r, "\"'`."), n);
  }
}, $f = function(t, r, n) {
  t === "animation" && n.hashId && r !== "none" && Cs("You seem to be using hashed animation '".concat(r, "', in which case 'animationName' with Keyframe as value is recommended."), n);
}, Ni = ct(), ws = "_skip_check_", xs = "_multi_value_";
function $i(e) {
  var t = Qn(Af(e), Pf);
  return t.replace(/\{%%%\:[^;];}/g, ";");
}
function If(e) {
  return ye(e) === "object" && e && (ws in e || xs in e);
}
function Mf(e, t, r) {
  if (!t)
    return e;
  var n = ".".concat(t), o = r === "low" ? ":where(".concat(n, ")") : n, i = e.split(",").map(function(a) {
    var s, l = a.trim().split(/\s+/), c = l[0] || "", u = ((s = c.match(/^\w+/)) === null || s === void 0 ? void 0 : s[0]) || "";
    return c = "".concat(u).concat(o).concat(c.slice(u.length)), [c].concat(Le(l.slice(1))).join(" ");
  });
  return i.join(",");
}
var kf = function e(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  }, o = n.root, i = n.injectHash, a = n.parentSelectors, s = r.hashId, l = r.layer, c = r.path, u = r.hashPriority, f = r.transformers, m = f === void 0 ? [] : f, g = r.linters, p = g === void 0 ? [] : g, d = "", h = {};
  function C(R) {
    var x = R.getName(s);
    if (!h[x]) {
      var B = e(R.style, r, {
        root: !1,
        parentSelectors: a
      }), k = he(B, 1), $ = k[0];
      h[x] = "@keyframes ".concat(R.getName(s)).concat($);
    }
  }
  function E(R) {
    var x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return R.forEach(function(B) {
      Array.isArray(B) ? E(B, x) : B && x.push(B);
    }), x;
  }
  var A = E(Array.isArray(t) ? t : [t]);
  if (A.forEach(function(R) {
    var x = typeof R == "string" && !o ? {} : R;
    if (typeof x == "string")
      d += "".concat(x, `
`);
    else if (x._keyframe)
      C(x);
    else {
      var B = m.reduce(function(k, $) {
        var z;
        return ($ == null || (z = $.visit) === null || z === void 0 ? void 0 : z.call($, k)) || k;
      }, x);
      Object.keys(B).forEach(function(k) {
        var $ = B[k];
        if (ye($) === "object" && $ && (k !== "animationName" || !$._keyframe) && !If($)) {
          var z = !1, w = k.trim(), S = !1;
          (o || i) && s ? w.startsWith("@") ? z = !0 : w = Mf(k, s, u) : o && !s && (w === "&" || w === "") && (w = "", S = !0);
          var _ = e($, r, {
            root: S,
            injectHash: z,
            parentSelectors: [].concat(Le(a), [w])
          }), N = he(_, 2), j = N[0], D = N[1];
          h = J(J({}, h), D), d += "".concat(w).concat(j);
        } else {
          let Z = function(ae, I) {
            process.env.NODE_ENV !== "production" && (ye($) !== "object" || !($ != null && $[ws])) && [Nf, $f].concat(Le(p)).forEach(function(U) {
              return U(ae, I, {
                path: c,
                hashId: s,
                parentSelectors: a
              });
            });
            var L = ae.replace(/[A-Z]/g, function(U) {
              return "-".concat(U.toLowerCase());
            }), F = I;
            !gs[ae] && typeof F == "number" && F !== 0 && (F = "".concat(F, "px")), ae === "animationName" && I !== null && I !== void 0 && I._keyframe && (C(I), F = I.getName(s)), d += "".concat(L, ":").concat(F, ";");
          };
          var W, ee = (W = $?.value) !== null && W !== void 0 ? W : $;
          ye($) === "object" && $ !== null && $ !== void 0 && $[xs] && Array.isArray(ee) ? ee.forEach(function(ae) {
            Z(k, ae);
          }) : Z(k, ee);
        }
      });
    }
  }), !o)
    d = "{".concat(d, "}");
  else if (l && Xu()) {
    var T = l.split(","), v = T[T.length - 1].trim();
    d = "@layer ".concat(v, " {").concat(d, "}"), T.length > 1 && (d = "@layer ".concat(l, "{%%%:%}").concat(d));
  }
  return [d, h];
};
function Lf(e, t) {
  return Mo("".concat(e.join("%")).concat(t));
}
function Df() {
  return null;
}
function Jn(e, t) {
  var r = e.token, n = e.path, o = e.hashId, i = e.layer, a = e.nonce, s = y.useContext(ko), l = s.autoClear, c = s.mock, u = s.defaultCache, f = s.hashPriority, m = s.container, g = s.ssrInline, p = s.transformers, d = s.linters, h = s.cache, C = r._tokenKey, E = [C].concat(Le(n)), A = Ni;
  process.env.NODE_ENV !== "production" && c !== void 0 && (A = c === "client");
  var T = ms(
    "style",
    E,
    // Create cache if needed
    function() {
      var k = t(), $ = kf(k, {
        hashId: o,
        hashPriority: f,
        layer: i,
        path: n.join("-"),
        transformers: p,
        linters: d
      }), z = he($, 2), w = z[0], S = z[1], _ = $i(w), N = Lf(E, _);
      return [_, C, N, S];
    },
    // Remove cache if no need
    function(k, $) {
      var z = he(k, 3), w = z[2];
      ($ || l) && Ni && fs(w, {
        mark: xt
      });
    },
    // Inject style here
    function(k) {
      var $ = he(k, 4), z = $[0];
      $[1];
      var w = $[2], S = $[3];
      if (A) {
        var _ = {
          mark: xt,
          prepend: "queue",
          attachTo: m
        }, N = typeof a == "function" ? a() : a;
        N && (_.csp = {
          nonce: N
        });
        var j = Kt(z, w, _);
        j[Et] = h.instanceId, j.setAttribute(Gn, C), process.env.NODE_ENV !== "production" && j.setAttribute(zu, E.join("|")), Object.keys(S).forEach(function(D) {
          Kt($i(S[D]), "_effect-".concat(D), _);
        });
      }
    }
  ), v = he(T, 3), R = v[0], x = v[1], B = v[2];
  return function(k) {
    var $;
    if (!g || A || !u)
      $ = /* @__PURE__ */ y.createElement(Df, null);
    else {
      var z;
      $ = /* @__PURE__ */ y.createElement("style", $e({}, (z = {}, ie(z, Gn, x), ie(z, xt, B), z), {
        dangerouslySetInnerHTML: {
          __html: R
        }
      }));
    }
    return /* @__PURE__ */ y.createElement(y.Fragment, null, $, k);
  };
}
var Ii = /* @__PURE__ */ function() {
  function e(t, r) {
    $t(this, e), ie(this, "name", void 0), ie(this, "style", void 0), ie(this, "_keyframe", !0), this.name = t, this.style = r;
  }
  return It(e, [{
    key: "getName",
    value: function() {
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return r ? "".concat(r, "-").concat(this.name) : this.name;
    }
  }]), e;
}();
function jf(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
var jo = /* @__PURE__ */ function() {
  function e() {
    $t(this, e), ie(this, "cache", void 0), ie(this, "keys", void 0), ie(this, "cacheCallTimes", void 0), this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
  }
  return It(e, [{
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
          var i = this.keys.reduce(function(c, u) {
            var f = he(c, 2), m = f[1];
            return o.internalGet(u)[1] < m ? [u, o.internalGet(u)[1]] : c;
          }, [this.keys[0], this.cacheCallTimes]), a = he(i, 1), s = a[0];
          this.delete(s);
        }
        this.keys.push(r);
      }
      var l = this.cache;
      r.forEach(function(c, u) {
        if (u === r.length - 1)
          l.set(c, {
            value: [n, o.cacheCallTimes++]
          });
        else {
          var f = l.get(c);
          f ? f.map || (f.map = /* @__PURE__ */ new Map()) : l.set(c, {
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
          return !jf(n, r);
        }), this.deleteByPath(this.cache, r);
    }
  }]), e;
}();
ie(jo, "MAX_CACHE_SIZE", 20);
ie(jo, "MAX_CACHE_OFFSET", 5);
var Mi = 0, Ff = /* @__PURE__ */ function() {
  function e(t) {
    $t(this, e), ie(this, "derivatives", void 0), ie(this, "id", void 0), this.derivatives = Array.isArray(t) ? t : [t], this.id = Mi, t.length === 0 && Xa(t.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function."), Mi += 1;
  }
  return It(e, [{
    key: "getDerivativeToken",
    value: function(r) {
      return this.derivatives.reduce(function(n, o) {
        return o(r, n);
      }, void 0);
    }
  }]), e;
}(), bn = new jo();
function _s(e) {
  var t = Array.isArray(e) ? e : [e];
  return bn.has(t) || bn.set(t, new Ff(t)), bn.get(t);
}
function bt(e) {
  return e.notSplit = !0, e;
}
bt(["borderTop", "borderBottom"]), bt(["borderTop"]), bt(["borderBottom"]), bt(["borderLeft", "borderRight"]), bt(["borderLeft"]), bt(["borderRight"]);
var Hf = /* @__PURE__ */ er({});
const Fo = Hf;
function Bf(e) {
  return ps(e) || ns(e) || $o(e) || hs();
}
function Zn(e, t) {
  for (var r = e, n = 0; n < t.length; n += 1) {
    if (r == null)
      return;
    r = r[t[n]];
  }
  return r;
}
function Os(e, t, r, n) {
  if (!t.length)
    return r;
  var o = Bf(t), i = o[0], a = o.slice(1), s;
  return !e && typeof i == "number" ? s = [] : Array.isArray(e) ? s = Le(e) : s = J({}, e), n && r === void 0 && a.length === 1 ? delete s[i][a[0]] : s[i] = Os(s[i], a, r, n), s;
}
function Sn(e, t, r) {
  var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return t.length && n && r === void 0 && !Zn(e, t.slice(0, -1)) ? e : Os(e, t, r, n);
}
function zf(e) {
  return ye(e) === "object" && e !== null && Object.getPrototypeOf(e) === Object.prototype;
}
function ki(e) {
  return Array.isArray(e) ? [] : {};
}
var Uf = typeof Reflect > "u" ? Object.keys : Reflect.ownKeys;
function Wf() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n = ki(t[0]);
  return t.forEach(function(o) {
    function i(a, s) {
      var l = new Set(s), c = Zn(o, a), u = Array.isArray(c);
      if (u || zf(c)) {
        if (!l.has(c)) {
          l.add(c);
          var f = Zn(n, a);
          u ? n = Sn(n, a, []) : (!f || ye(f) !== "object") && (n = Sn(n, a, ki(c))), Uf(c).forEach(function(m) {
            i([].concat(Le(a), [m]), l);
          });
        }
      } else
        n = Sn(n, a, c);
    }
    i([]);
  }), n;
}
function Vf() {
}
let Ts = Vf;
process.env.NODE_ENV !== "production" && (Ts = (e, t, r) => {
  st(e, `[antd: ${t}] ${r}`), process.env.NODE_ENV === "test" && Qa();
});
const qe = Ts, Gf = /* @__PURE__ */ er(void 0), Yf = {
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
var Kf = {
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
const qf = {
  placeholder: "Select time",
  rangePlaceholder: ["Start time", "End time"]
}, As = qf, Xf = {
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
  }, Kf),
  timePickerLocale: Object.assign({}, As)
}, Li = Xf, Ie = "${label} is not a valid ${type}", Qf = {
  locale: "en",
  Pagination: Yf,
  DatePicker: Li,
  TimePicker: As,
  Calendar: Li,
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
}, Ho = Qf;
let En = Object.assign({}, Ho.Modal);
function Di(e) {
  e ? En = Object.assign(Object.assign({}, En), e) : En = Object.assign({}, Ho.Modal);
}
const Jf = /* @__PURE__ */ er(void 0), Rs = Jf, Ps = "internalMark", Ns = (e) => {
  const {
    locale: t = {},
    children: r,
    _ANT_MARK__: n
  } = e;
  process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && qe(n === Ps, "LocaleProvider", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale"), y.useEffect(() => (Di(t && t.Modal), () => {
    Di();
  }), [t]);
  const o = y.useMemo(() => Object.assign(Object.assign({}, t), {
    exist: !0
  }), [t]);
  return /* @__PURE__ */ y.createElement(Rs.Provider, {
    value: o
  }, r);
};
process.env.NODE_ENV !== "production" && (Ns.displayName = "LocaleProvider");
const Zf = Ns, ed = "5.7.0";
function Re(e, t) {
  td(e) && (e = "100%");
  var r = rd(e);
  return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), r && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e);
}
function lr(e) {
  return Math.min(1, Math.max(0, e));
}
function td(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function rd(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function $s(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function ur(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function pt(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function nd(e, t, r) {
  return {
    r: Re(e, 255) * 255,
    g: Re(t, 255) * 255,
    b: Re(r, 255) * 255
  };
}
function ji(e, t, r) {
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
function Cn(e, t, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (t - e) * (6 * r) : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e;
}
function od(e, t, r) {
  var n, o, i;
  if (e = Re(e, 360), t = Re(t, 100), r = Re(r, 100), t === 0)
    o = r, i = r, n = r;
  else {
    var a = r < 0.5 ? r * (1 + t) : r + t - r * t, s = 2 * r - a;
    n = Cn(s, a, e + 1 / 3), o = Cn(s, a, e), i = Cn(s, a, e - 1 / 3);
  }
  return { r: n * 255, g: o * 255, b: i * 255 };
}
function eo(e, t, r) {
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
function id(e, t, r) {
  e = Re(e, 360) * 6, t = Re(t, 100), r = Re(r, 100);
  var n = Math.floor(e), o = e - n, i = r * (1 - t), a = r * (1 - o * t), s = r * (1 - (1 - o) * t), l = n % 6, c = [r, a, i, i, s, r][l], u = [s, r, r, a, i, i][l], f = [i, i, s, r, r, a][l];
  return { r: c * 255, g: u * 255, b: f * 255 };
}
function to(e, t, r, n) {
  var o = [
    pt(Math.round(e).toString(16)),
    pt(Math.round(t).toString(16)),
    pt(Math.round(r).toString(16))
  ];
  return n && o[0].startsWith(o[0].charAt(1)) && o[1].startsWith(o[1].charAt(1)) && o[2].startsWith(o[2].charAt(1)) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) : o.join("");
}
function ad(e, t, r, n, o) {
  var i = [
    pt(Math.round(e).toString(16)),
    pt(Math.round(t).toString(16)),
    pt(Math.round(r).toString(16)),
    pt(sd(n))
  ];
  return o && i[0].startsWith(i[0].charAt(1)) && i[1].startsWith(i[1].charAt(1)) && i[2].startsWith(i[2].charAt(1)) && i[3].startsWith(i[3].charAt(1)) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) + i[3].charAt(0) : i.join("");
}
function sd(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function Fi(e) {
  return Me(e) / 255;
}
function Me(e) {
  return parseInt(e, 16);
}
function cd(e) {
  return {
    r: e >> 16,
    g: (e & 65280) >> 8,
    b: e & 255
  };
}
var ro = {
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
function St(e) {
  var t = { r: 0, g: 0, b: 0 }, r = 1, n = null, o = null, i = null, a = !1, s = !1;
  return typeof e == "string" && (e = fd(e)), typeof e == "object" && (Qe(e.r) && Qe(e.g) && Qe(e.b) ? (t = nd(e.r, e.g, e.b), a = !0, s = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : Qe(e.h) && Qe(e.s) && Qe(e.v) ? (n = ur(e.s), o = ur(e.v), t = id(e.h, n, o), a = !0, s = "hsv") : Qe(e.h) && Qe(e.s) && Qe(e.l) && (n = ur(e.s), i = ur(e.l), t = od(e.h, n, i), a = !0, s = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (r = e.a)), r = $s(r), {
    ok: a,
    format: e.format || s,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: r
  };
}
var ld = "[-\\+]?\\d+%?", ud = "[-\\+]?\\d*\\.\\d+%?", it = "(?:".concat(ud, ")|(?:").concat(ld, ")"), wn = "[\\s|\\(]+(".concat(it, ")[,|\\s]+(").concat(it, ")[,|\\s]+(").concat(it, ")\\s*\\)?"), xn = "[\\s|\\(]+(".concat(it, ")[,|\\s]+(").concat(it, ")[,|\\s]+(").concat(it, ")[,|\\s]+(").concat(it, ")\\s*\\)?"), Be = {
  CSS_UNIT: new RegExp(it),
  rgb: new RegExp("rgb" + wn),
  rgba: new RegExp("rgba" + xn),
  hsl: new RegExp("hsl" + wn),
  hsla: new RegExp("hsla" + xn),
  hsv: new RegExp("hsv" + wn),
  hsva: new RegExp("hsva" + xn),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function fd(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var t = !1;
  if (ro[e])
    e = ro[e], t = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var r = Be.rgb.exec(e);
  return r ? { r: r[1], g: r[2], b: r[3] } : (r = Be.rgba.exec(e), r ? { r: r[1], g: r[2], b: r[3], a: r[4] } : (r = Be.hsl.exec(e), r ? { h: r[1], s: r[2], l: r[3] } : (r = Be.hsla.exec(e), r ? { h: r[1], s: r[2], l: r[3], a: r[4] } : (r = Be.hsv.exec(e), r ? { h: r[1], s: r[2], v: r[3] } : (r = Be.hsva.exec(e), r ? { h: r[1], s: r[2], v: r[3], a: r[4] } : (r = Be.hex8.exec(e), r ? {
    r: Me(r[1]),
    g: Me(r[2]),
    b: Me(r[3]),
    a: Fi(r[4]),
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
    a: Fi(r[4] + r[4]),
    format: t ? "name" : "hex8"
  } : (r = Be.hex3.exec(e), r ? {
    r: Me(r[1] + r[1]),
    g: Me(r[2] + r[2]),
    b: Me(r[3] + r[3]),
    format: t ? "name" : "hex"
  } : !1)))))))));
}
function Qe(e) {
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
      typeof t == "number" && (t = cd(t)), this.originalInput = t;
      var o = St(t);
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
      return this.a = $s(t), this.roundA = Math.round(100 * this.a) / 100, this;
    }, e.prototype.isMonochrome = function() {
      var t = this.toHsl().s;
      return t === 0;
    }, e.prototype.toHsv = function() {
      var t = eo(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
    }, e.prototype.toHsvString = function() {
      var t = eo(this.r, this.g, this.b), r = Math.round(t.h * 360), n = Math.round(t.s * 100), o = Math.round(t.v * 100);
      return this.a === 1 ? "hsv(".concat(r, ", ").concat(n, "%, ").concat(o, "%)") : "hsva(".concat(r, ", ").concat(n, "%, ").concat(o, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHsl = function() {
      var t = ji(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
    }, e.prototype.toHslString = function() {
      var t = ji(this.r, this.g, this.b), r = Math.round(t.h * 360), n = Math.round(t.s * 100), o = Math.round(t.l * 100);
      return this.a === 1 ? "hsl(".concat(r, ", ").concat(n, "%, ").concat(o, "%)") : "hsla(".concat(r, ", ").concat(n, "%, ").concat(o, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHex = function(t) {
      return t === void 0 && (t = !1), to(this.r, this.g, this.b, t);
    }, e.prototype.toHexString = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex(t);
    }, e.prototype.toHex8 = function(t) {
      return t === void 0 && (t = !1), ad(this.r, this.g, this.b, this.a, t);
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
      for (var t = "#" + to(this.r, this.g, this.b, !1), r = 0, n = Object.entries(ro); r < n.length; r++) {
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
      return r.l += t / 100, r.l = lr(r.l), new e(r);
    }, e.prototype.brighten = function(t) {
      t === void 0 && (t = 10);
      var r = this.toRgb();
      return r.r = Math.max(0, Math.min(255, r.r - Math.round(255 * -(t / 100)))), r.g = Math.max(0, Math.min(255, r.g - Math.round(255 * -(t / 100)))), r.b = Math.max(0, Math.min(255, r.b - Math.round(255 * -(t / 100)))), new e(r);
    }, e.prototype.darken = function(t) {
      t === void 0 && (t = 10);
      var r = this.toHsl();
      return r.l -= t / 100, r.l = lr(r.l), new e(r);
    }, e.prototype.tint = function(t) {
      return t === void 0 && (t = 10), this.mix("white", t);
    }, e.prototype.shade = function(t) {
      return t === void 0 && (t = 10), this.mix("black", t);
    }, e.prototype.desaturate = function(t) {
      t === void 0 && (t = 10);
      var r = this.toHsl();
      return r.s -= t / 100, r.s = lr(r.s), new e(r);
    }, e.prototype.saturate = function(t) {
      t === void 0 && (t = 10);
      var r = this.toHsl();
      return r.s += t / 100, r.s = lr(r.s), new e(r);
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
), fr = 2, Hi = 0.16, dd = 0.05, pd = 0.05, hd = 0.15, Is = 5, Ms = 4, md = [{
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
function Bi(e) {
  var t = e.r, r = e.g, n = e.b, o = eo(t, r, n);
  return {
    h: o.h * 360,
    s: o.s,
    v: o.v
  };
}
function dr(e) {
  var t = e.r, r = e.g, n = e.b;
  return "#".concat(to(t, r, n, !1));
}
function gd(e, t, r) {
  var n = r / 100, o = {
    r: (t.r - e.r) * n + e.r,
    g: (t.g - e.g) * n + e.g,
    b: (t.b - e.b) * n + e.b
  };
  return o;
}
function zi(e, t, r) {
  var n;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? n = r ? Math.round(e.h) - fr * t : Math.round(e.h) + fr * t : n = r ? Math.round(e.h) + fr * t : Math.round(e.h) - fr * t, n < 0 ? n += 360 : n >= 360 && (n -= 360), n;
}
function Ui(e, t, r) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  var n;
  return r ? n = e.s - Hi * t : t === Ms ? n = e.s + Hi : n = e.s + dd * t, n > 1 && (n = 1), r && t === Is && n > 0.1 && (n = 0.1), n < 0.06 && (n = 0.06), Number(n.toFixed(2));
}
function Wi(e, t, r) {
  var n;
  return r ? n = e.v + pd * t : n = e.v - hd * t, n > 1 && (n = 1), Number(n.toFixed(2));
}
function gt(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = [], n = St(e), o = Is; o > 0; o -= 1) {
    var i = Bi(n), a = dr(St({
      h: zi(i, o, !0),
      s: Ui(i, o, !0),
      v: Wi(i, o, !0)
    }));
    r.push(a);
  }
  r.push(dr(n));
  for (var s = 1; s <= Ms; s += 1) {
    var l = Bi(n), c = dr(St({
      h: zi(l, s),
      s: Ui(l, s),
      v: Wi(l, s)
    }));
    r.push(c);
  }
  return t.theme === "dark" ? md.map(function(u) {
    var f = u.index, m = u.opacity, g = dr(gd(St(t.backgroundColor || "#141414"), St(r[f]), m * 100));
    return g;
  }) : r;
}
var _n = {
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
}, Nr = {}, On = {};
Object.keys(_n).forEach(function(e) {
  Nr[e] = gt(_n[e]), Nr[e].primary = Nr[e][5], On[e] = gt(_n[e], {
    theme: "dark",
    backgroundColor: "#141414"
  }), On[e].primary = On[e][5];
});
var vd = Nr.blue;
const yd = (e) => {
  const {
    controlHeight: t
  } = e;
  return {
    controlHeightSM: t * 0.75,
    controlHeightXS: t * 0.5,
    controlHeightLG: t * 1.25
  };
}, bd = yd;
function Sd(e) {
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
const ks = {
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
}, Ed = Object.assign(Object.assign({}, ks), {
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
}), tn = Ed;
function Cd(e, t) {
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
    colorTextBase: u
  } = e, f = r(l), m = r(o), g = r(i), p = r(a), d = r(s), h = n(c, u), C = e.colorLink || e.colorInfo, E = r(C);
  return Object.assign(Object.assign({}, h), {
    colorPrimaryBg: f[1],
    colorPrimaryBgHover: f[2],
    colorPrimaryBorder: f[3],
    colorPrimaryBorderHover: f[4],
    colorPrimaryHover: f[5],
    colorPrimary: f[6],
    colorPrimaryActive: f[7],
    colorPrimaryTextHover: f[8],
    colorPrimaryText: f[9],
    colorPrimaryTextActive: f[10],
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
const wd = (e) => {
  let t = e, r = e, n = e, o = e;
  return e < 6 && e >= 5 ? t = e + 1 : e < 16 && e >= 6 ? t = e + 2 : e >= 16 && (t = 16), e < 7 && e >= 5 ? r = 4 : e < 8 && e >= 7 ? r = 5 : e < 14 && e >= 8 ? r = 6 : e < 16 && e >= 14 ? r = 7 : e >= 16 && (r = 8), e < 6 && e >= 2 ? n = 1 : e >= 6 && (n = 2), e > 4 && e < 8 ? o = 4 : e >= 8 && (o = 6), {
    borderRadius: e > 16 ? 16 : e,
    borderRadiusXS: n,
    borderRadiusSM: r,
    borderRadiusLG: t,
    borderRadiusOuter: o
  };
}, xd = wd;
function _d(e) {
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
  }, xd(n));
}
const Je = (e, t) => new ke(e).setAlpha(t).toRgbString(), Bt = (e, t) => new ke(e).darken(t).toHexString(), Od = (e) => {
  const t = gt(e);
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
}, Td = (e, t) => {
  const r = e || "#fff", n = t || "#000";
  return {
    colorBgBase: r,
    colorTextBase: n,
    colorText: Je(n, 0.88),
    colorTextSecondary: Je(n, 0.65),
    colorTextTertiary: Je(n, 0.45),
    colorTextQuaternary: Je(n, 0.25),
    colorFill: Je(n, 0.15),
    colorFillSecondary: Je(n, 0.06),
    colorFillTertiary: Je(n, 0.04),
    colorFillQuaternary: Je(n, 0.02),
    colorBgLayout: Bt(r, 4),
    colorBgContainer: Bt(r, 0),
    colorBgElevated: Bt(r, 0),
    colorBgSpotlight: Je(n, 0.85),
    colorBorder: Bt(r, 15),
    colorBorderSecondary: Bt(r, 6)
  };
};
function Ad(e) {
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
const Rd = (e) => {
  const t = Ad(e), r = t.map((o) => o.size), n = t.map((o) => o.lineHeight);
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
}, Pd = Rd;
function Nd(e) {
  const t = Object.keys(ks).map((r) => {
    const n = gt(e[r]);
    return new Array(10).fill(1).reduce((o, i, a) => (o[`${r}-${a + 1}`] = n[a], o[`${r}${a + 1}`] = n[a], o), {});
  }).reduce((r, n) => (r = Object.assign(Object.assign({}, r), n), r), {});
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), Cd(e, {
    generateColorPalettes: Od,
    generateNeutralColorPalettes: Td
  })), Pd(e.fontSize)), Sd(e)), bd(e)), _d(e));
}
const $d = _s(Nd), Ls = {
  token: tn,
  hashed: !0
}, Ds = /* @__PURE__ */ de.createContext(Ls);
function Tn(e) {
  return e >= 0 && e <= 255;
}
function pr(e, t) {
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
    const u = Math.round((r - a * (1 - c)) / c), f = Math.round((n - s * (1 - c)) / c), m = Math.round((o - l * (1 - c)) / c);
    if (Tn(u) && Tn(f) && Tn(m))
      return new ke({
        r: u,
        g: f,
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
var Id = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
function Md(e) {
  const {
    override: t
  } = e, r = Id(e, ["override"]), n = Object.assign({}, t);
  Object.keys(tn).forEach((m) => {
    delete n[m];
  });
  const o = Object.assign(Object.assign({}, r), n), i = 480, a = 576, s = 768, l = 992, c = 1200, u = 1600;
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
    colorSplit: pr(o.colorBorderSecondary, o.colorBgContainer),
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
    colorErrorOutline: pr(o.colorErrorBg, o.colorBgContainer),
    colorWarningOutline: pr(o.colorWarningBg, o.colorBgContainer),
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
    controlOutline: pr(o.colorPrimaryBg, o.colorBgContainer),
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
    screenXLMax: u - 1,
    screenXXL: u,
    screenXXLMin: u,
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
function rn() {
  const {
    token: e,
    hashed: t,
    theme: r,
    components: n
  } = de.useContext(Ds), o = `${ed}-${t || ""}`, i = r || $d, [a, s] = pf(i, [tn, e], {
    salt: o,
    override: Object.assign({
      override: e
    }, n),
    formatToken: Md
  });
  return [i, a, t ? s : ""];
}
function $r(e) {
  var t = y.useRef(!1), r = y.useState(e), n = he(r, 2), o = n[0], i = n[1];
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
const Bo = "anticon", kd = (e, t) => t || (e ? `ant-${e}` : "ant"), nt = /* @__PURE__ */ y.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: kd,
  iconPrefixCls: Bo
}), Ld = (e) => ({
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
}), Dd = () => ({
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
}), jd = (e) => ({
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
}), Fd = (e, t) => {
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
}, Hd = (e) => ({
  outline: `${e.lineWidthFocus}px solid ${e.colorPrimaryBorder}`,
  outlineOffset: 1,
  transition: "outline-offset 0s, outline 0s"
}), Bd = (e) => ({
  "&:focus-visible": Object.assign({}, Hd(e))
}), js = process.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC < "u";
let no = !0;
function At() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  if (!js)
    return Object.assign.apply(Object, [{}].concat(t));
  no = !1;
  const n = {};
  return t.forEach((o) => {
    Object.keys(o).forEach((a) => {
      Object.defineProperty(n, a, {
        configurable: !0,
        enumerable: !0,
        get: () => o[a]
      });
    });
  }), no = !0, n;
}
function zd() {
}
function Ud(e) {
  let t, r = e, n = zd;
  return js && (t = /* @__PURE__ */ new Set(), r = new Proxy(e, {
    get(o, i) {
      return no && t.add(i), o[i];
    }
  }), n = (o, i) => {
    Array.from(t);
  }), {
    token: r,
    keys: t,
    flush: n
  };
}
function zo(e, t, r, n) {
  return (o) => {
    const [i, a, s] = rn(), {
      getPrefixCls: l,
      iconPrefixCls: c,
      csp: u
    } = Ne(nt), f = l(), m = {
      theme: i,
      token: a,
      hashId: s,
      nonce: () => u?.nonce
    };
    return Jn(Object.assign(Object.assign({}, m), {
      path: ["Shared", f]
    }), () => [{
      // Link
      "&": jd(a)
    }]), [Jn(Object.assign(Object.assign({}, m), {
      path: [e, o, c]
    }), () => {
      const {
        token: g,
        flush: p
      } = Ud(a), d = Object.assign({}, a[e]);
      if (n?.deprecatedTokens) {
        const {
          deprecatedTokens: v
        } = n;
        v.forEach((R) => {
          let [x, B] = R;
          var k;
          process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && st(!d?.[x], `The token '${String(x)}' of ${e} had deprecated, use '${String(B)}' instead.`), (d?.[x] || d?.[B]) && ((k = d[B]) !== null && k !== void 0 || (d[B] = d?.[x]));
        });
      }
      const h = typeof r == "function" ? r(At(g, d ?? {})) : r, C = Object.assign(Object.assign({}, h), d), E = `.${o}`, A = At(g, {
        componentCls: E,
        prefixCls: o,
        iconCls: `.${c}`,
        antCls: `.${f}`
      }, C), T = t(A, {
        hashId: s,
        prefixCls: o,
        rootPrefixCls: f,
        iconPrefixCls: c,
        overrideComponentToken: d
      });
      return p(e, C), [n?.resetStyle === !1 ? null : Fd(a, o), T];
    }), s];
  };
}
const Wd = `-ant-${Date.now()}-${Math.random()}`;
function Vd(e, t) {
  const r = {}, n = (a, s) => {
    let l = a.clone();
    return l = s?.(l) || l, l.toRgbString();
  }, o = (a, s) => {
    const l = new ke(a), c = gt(l.toRgbString());
    r[`${s}-color`] = n(l), r[`${s}-color-disabled`] = c[1], r[`${s}-color-hover`] = c[4], r[`${s}-color-active`] = c[6], r[`${s}-color-outline`] = l.clone().setAlpha(0.2).toRgbString(), r[`${s}-color-deprecated-bg`] = c[0], r[`${s}-color-deprecated-border`] = c[2];
  };
  if (t.primaryColor) {
    o(t.primaryColor, "primary");
    const a = new ke(t.primaryColor), s = gt(a.toRgbString());
    s.forEach((c, u) => {
      r[`primary-${u + 1}`] = c;
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
function Gd(e, t) {
  const r = Vd(e, t);
  ct() ? Kt(r, `${Wd}-dynamic-theme`) : process.env.NODE_ENV !== "production" && qe(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
const oo = /* @__PURE__ */ y.createContext(!1), Yd = (e) => {
  let {
    children: t,
    disabled: r
  } = e;
  const n = y.useContext(oo);
  return /* @__PURE__ */ y.createElement(oo.Provider, {
    value: r ?? n
  }, t);
}, Fs = oo, io = /* @__PURE__ */ y.createContext(void 0), Kd = (e) => {
  let {
    children: t,
    size: r
  } = e;
  const n = y.useContext(io);
  return /* @__PURE__ */ y.createElement(io.Provider, {
    value: r || n
  }, t);
}, nn = io;
function qd() {
  const e = Ne(Fs), t = Ne(nn);
  return {
    componentDisabled: e,
    componentSize: t
  };
}
function Xd(e, t) {
  const r = e || {}, n = r.inherit === !1 || !t ? Ls : t;
  return Za(() => {
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
    return !Hu(s, c, !0);
  }));
}
var Qd = ["children"], Hs = /* @__PURE__ */ y.createContext({});
function Jd(e) {
  var t = e.children, r = Ot(e, Qd);
  return /* @__PURE__ */ y.createElement(Hs.Provider, {
    value: r
  }, t);
}
var Zd = /* @__PURE__ */ function(e) {
  Va(r, e);
  var t = Ga(r);
  function r() {
    return $t(this, r), t.apply(this, arguments);
  }
  return It(r, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), r;
}(y.Component), ut = "none", hr = "appear", mr = "enter", gr = "leave", Vi = "none", ze = "prepare", Ct = "start", wt = "active", Uo = "end", Bs = "prepared";
function Gi(e, t) {
  var r = {};
  return r[e.toLowerCase()] = t.toLowerCase(), r["Webkit".concat(e)] = "webkit".concat(t), r["Moz".concat(e)] = "moz".concat(t), r["ms".concat(e)] = "MS".concat(t), r["O".concat(e)] = "o".concat(t.toLowerCase()), r;
}
function ep(e, t) {
  var r = {
    animationend: Gi("Animation", "AnimationEnd"),
    transitionend: Gi("Transition", "TransitionEnd")
  };
  return e && ("AnimationEvent" in t || delete r.animationend.animation, "TransitionEvent" in t || delete r.transitionend.transition), r;
}
var tp = ep(ct(), typeof window < "u" ? window : {}), zs = {};
if (ct()) {
  var rp = document.createElement("div");
  zs = rp.style;
}
var vr = {};
function Us(e) {
  if (vr[e])
    return vr[e];
  var t = tp[e];
  if (t)
    for (var r = Object.keys(t), n = r.length, o = 0; o < n; o += 1) {
      var i = r[o];
      if (Object.prototype.hasOwnProperty.call(t, i) && i in zs)
        return vr[e] = t[i], vr[e];
    }
  return "";
}
var Ws = Us("animationend"), Vs = Us("transitionend"), Gs = !!(Ws && Vs), Yi = Ws || "animationend", Ki = Vs || "transitionend";
function qi(e, t) {
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
const np = function(e) {
  var t = je(), r = je(e);
  r.current = e;
  var n = y.useCallback(function(a) {
    r.current(a);
  }, []);
  function o(a) {
    a && (a.removeEventListener(Ki, n), a.removeEventListener(Yi, n));
  }
  function i(a) {
    t.current && t.current !== a && o(t.current), a && a !== t.current && (a.addEventListener(Ki, n), a.addEventListener(Yi, n), t.current = a);
  }
  return y.useEffect(function() {
    return function() {
      o(t.current);
    };
  }, []), [i, o];
};
var Ys = ct() ? ya : Ke;
const op = function() {
  var e = y.useRef(null);
  function t() {
    Yt.cancel(e.current);
  }
  function r(n) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    t();
    var i = Yt(function() {
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
var ip = [ze, Ct, wt, Uo], ap = [ze, Bs], Ks = !1, sp = !0;
function qs(e) {
  return e === wt || e === Uo;
}
const cp = function(e, t, r) {
  var n = $r(Vi), o = he(n, 2), i = o[0], a = o[1], s = op(), l = he(s, 2), c = l[0], u = l[1];
  function f() {
    a(ze, !0);
  }
  var m = t ? ap : ip;
  return Ys(function() {
    if (i !== Vi && i !== Uo) {
      var g = m.indexOf(i), p = m[g + 1], d = r(i);
      d === Ks ? a(p, !0) : p && c(function(h) {
        function C() {
          h.isCanceled() || a(p, !0);
        }
        d === !0 ? C() : Promise.resolve(d).then(C);
      });
    }
  }, [e, i]), y.useEffect(function() {
    return function() {
      u();
    };
  }, []), [f, i];
};
function lp(e, t, r, n) {
  var o = n.motionEnter, i = o === void 0 ? !0 : o, a = n.motionAppear, s = a === void 0 ? !0 : a, l = n.motionLeave, c = l === void 0 ? !0 : l, u = n.motionDeadline, f = n.motionLeaveImmediately, m = n.onAppearPrepare, g = n.onEnterPrepare, p = n.onLeavePrepare, d = n.onAppearStart, h = n.onEnterStart, C = n.onLeaveStart, E = n.onAppearActive, A = n.onEnterActive, T = n.onLeaveActive, v = n.onAppearEnd, R = n.onEnterEnd, x = n.onLeaveEnd, B = n.onVisibleChanged, k = $r(), $ = he(k, 2), z = $[0], w = $[1], S = $r(ut), _ = he(S, 2), N = _[0], j = _[1], D = $r(null), W = he(D, 2), ee = W[0], Z = W[1], ae = je(!1), I = je(null);
  function L() {
    return r();
  }
  var F = je(!1);
  function U() {
    j(ut, !0), Z(null, !0);
  }
  function b(ge) {
    var G = L();
    if (!(ge && !ge.deadline && ge.target !== G)) {
      var ne = F.current, be;
      N === hr && ne ? be = v?.(G, ge) : N === mr && ne ? be = R?.(G, ge) : N === gr && ne && (be = x?.(G, ge)), N !== ut && ne && be !== !1 && U();
    }
  }
  var te = np(b), M = he(te, 1), re = M[0], X = function(G) {
    var ne, be, Ce;
    switch (G) {
      case hr:
        return ne = {}, ie(ne, ze, m), ie(ne, Ct, d), ie(ne, wt, E), ne;
      case mr:
        return be = {}, ie(be, ze, g), ie(be, Ct, h), ie(be, wt, A), be;
      case gr:
        return Ce = {}, ie(Ce, ze, p), ie(Ce, Ct, C), ie(Ce, wt, T), Ce;
      default:
        return {};
    }
  }, q = y.useMemo(function() {
    return X(N);
  }, [N]), P = cp(N, !e, function(ge) {
    if (ge === ze) {
      var G = q[ze];
      return G ? G(L()) : Ks;
    }
    if (V in q) {
      var ne;
      Z(((ne = q[V]) === null || ne === void 0 ? void 0 : ne.call(q, L(), null)) || null);
    }
    return V === wt && (re(L()), u > 0 && (clearTimeout(I.current), I.current = setTimeout(function() {
      b({
        deadline: !0
      });
    }, u))), V === Bs && U(), sp;
  }), se = he(P, 2), H = se[0], V = se[1], pe = qs(V);
  F.current = pe, Ys(function() {
    w(t);
    var ge = ae.current;
    ae.current = !0;
    var G;
    !ge && t && s && (G = hr), ge && t && i && (G = mr), (ge && !t && c || !ge && f && !t && c) && (G = gr);
    var ne = X(G);
    G && (e || ne[ze]) ? (j(G), H()) : j(ut);
  }, [t]), Ke(function() {
    // Cancel appear
    (N === hr && !s || // Cancel enter
    N === mr && !i || // Cancel leave
    N === gr && !c) && j(ut);
  }, [s, i, c]), Ke(function() {
    return function() {
      ae.current = !1, clearTimeout(I.current);
    };
  }, []);
  var Q = y.useRef(!1);
  Ke(function() {
    z && (Q.current = !0), z !== void 0 && N === ut && ((Q.current || z) && B?.(z), Q.current = !0);
  }, [z, N]);
  var me = ee;
  return q[ze] && V === Ct && (me = J({
    transition: "none"
  }, me)), [N, V, me, z ?? t];
}
function up(e) {
  var t = e;
  ye(e) === "object" && (t = e.transitionSupport);
  function r(o, i) {
    return !!(o.motionName && t && i !== !1);
  }
  var n = /* @__PURE__ */ y.forwardRef(function(o, i) {
    var a = o.visible, s = a === void 0 ? !0 : a, l = o.removeOnLeave, c = l === void 0 ? !0 : l, u = o.forceRender, f = o.children, m = o.motionName, g = o.leavedClassName, p = o.eventProps, d = y.useContext(Hs), h = d.motion, C = r(o, h), E = je(), A = je();
    function T() {
      try {
        return E.current instanceof HTMLElement ? E.current : ku(A.current);
      } catch {
        return null;
      }
    }
    var v = lp(C, s, T, o), R = he(v, 4), x = R[0], B = R[1], k = R[2], $ = R[3], z = y.useRef($);
    $ && (z.current = !0);
    var w = y.useCallback(function(Z) {
      E.current = Z, es(i, Z);
    }, [i]), S, _ = J(J({}, p), {}, {
      visible: s
    });
    if (!f)
      S = null;
    else if (x === ut)
      $ ? S = f(J({}, _), w) : !c && z.current && g ? S = f(J(J({}, _), {}, {
        className: g
      }), w) : u || !c && !g ? S = f(J(J({}, _), {}, {
        style: {
          display: "none"
        }
      }), w) : S = null;
    else {
      var N, j;
      B === ze ? j = "prepare" : qs(B) ? j = "active" : B === Ct && (j = "start");
      var D = qi(m, "".concat(x, "-").concat(j));
      S = f(J(J({}, _), {}, {
        className: Te(qi(m, x), (N = {}, ie(N, D, D && j), ie(N, m, typeof m == "string"), N)),
        style: k
      }), w);
    }
    if (/* @__PURE__ */ y.isValidElement(S) && rs(S)) {
      var W = S, ee = W.ref;
      ee || (S = /* @__PURE__ */ y.cloneElement(S, {
        ref: w
      }));
    }
    return /* @__PURE__ */ y.createElement(Zd, {
      ref: A
    }, S);
  });
  return n.displayName = "CSSMotion", n;
}
const Wo = up(Gs);
var ao = "add", so = "keep", co = "remove", An = "removed";
function fp(e) {
  var t;
  return e && ye(e) === "object" && "key" in e ? t = e : t = {
    key: e
  }, J(J({}, t), {}, {
    key: String(t.key)
  });
}
function lo() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return e.map(fp);
}
function dp() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], r = [], n = 0, o = t.length, i = lo(e), a = lo(t);
  i.forEach(function(c) {
    for (var u = !1, f = n; f < o; f += 1) {
      var m = a[f];
      if (m.key === c.key) {
        n < f && (r = r.concat(a.slice(n, f).map(function(g) {
          return J(J({}, g), {}, {
            status: ao
          });
        })), n = f), r.push(J(J({}, m), {}, {
          status: so
        })), n += 1, u = !0;
        break;
      }
    }
    u || r.push(J(J({}, c), {}, {
      status: co
    }));
  }), n < o && (r = r.concat(a.slice(n).map(function(c) {
    return J(J({}, c), {}, {
      status: ao
    });
  })));
  var s = {};
  r.forEach(function(c) {
    var u = c.key;
    s[u] = (s[u] || 0) + 1;
  });
  var l = Object.keys(s).filter(function(c) {
    return s[c] > 1;
  });
  return l.forEach(function(c) {
    r = r.filter(function(u) {
      var f = u.key, m = u.status;
      return f !== c || m !== co;
    }), r.forEach(function(u) {
      u.key === c && (u.status = so);
    });
  }), r;
}
var pp = ["component", "children", "onVisibleChanged", "onAllRemoved"], hp = ["status"], mp = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function gp(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Wo, r = /* @__PURE__ */ function(n) {
    Va(i, n);
    var o = Ga(i);
    function i() {
      var a;
      $t(this, i);
      for (var s = arguments.length, l = new Array(s), c = 0; c < s; c++)
        l[c] = arguments[c];
      return a = o.call.apply(o, [this].concat(l)), ie(zn(a), "state", {
        keyEntities: []
      }), ie(zn(a), "removeKey", function(u) {
        var f = a.state.keyEntities, m = f.map(function(g) {
          return g.key !== u ? g : J(J({}, g), {}, {
            status: An
          });
        });
        return a.setState({
          keyEntities: m
        }), m.filter(function(g) {
          var p = g.status;
          return p !== An;
        }).length;
      }), a;
    }
    return It(i, [{
      key: "render",
      value: function() {
        var s = this, l = this.state.keyEntities, c = this.props, u = c.component, f = c.children, m = c.onVisibleChanged, g = c.onAllRemoved, p = Ot(c, pp), d = u || y.Fragment, h = {};
        return mp.forEach(function(C) {
          h[C] = p[C], delete p[C];
        }), delete p.keys, /* @__PURE__ */ y.createElement(d, p, l.map(function(C) {
          var E = C.status, A = Ot(C, hp), T = E === ao || E === so;
          return /* @__PURE__ */ y.createElement(t, $e({}, h, {
            key: A.key,
            visible: T,
            eventProps: A,
            onVisibleChanged: function(R) {
              if (m?.(R, {
                key: A.key
              }), !R) {
                var x = s.removeKey(A.key);
                x === 0 && g && g();
              }
            }
          }), f);
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(s, l) {
        var c = s.keys, u = l.keyEntities, f = lo(c), m = dp(u, f);
        return {
          keyEntities: m.filter(function(g) {
            var p = u.find(function(d) {
              var h = d.key;
              return g.key === h;
            });
            return !(p && p.status === An && g.status === co);
          })
        };
      }
      // ZombieJ: Return the count of rest keys. It's safe to refactor if need more info.
    }]), i;
  }(y.Component);
  return ie(r, "defaultProps", {
    component: "div"
  }), r;
}
const vp = gp(Gs);
function yp(e) {
  const {
    children: t
  } = e, [, r] = rn(), {
    motion: n
  } = r, o = y.useRef(!1);
  return o.current = o.current || n === !1, o.current ? /* @__PURE__ */ y.createElement(Jd, {
    motion: n
  }, t) : t;
}
const bp = (e, t) => {
  const [r, n] = rn();
  return Jn({
    theme: r,
    token: n,
    hashId: "",
    path: ["ant-design-icons", e],
    nonce: () => t?.nonce
  }, () => [{
    [`.${e}`]: Object.assign(Object.assign({}, Dd()), {
      [`.${e} .${e}-icon`]: {
        display: "block"
      }
    })
  }]);
}, Sp = bp;
var Ep = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
let uo = !1;
const Cp = process.env.NODE_ENV !== "production" ? (e) => {
  process.env.NODE_ENV !== "production" && qe(!uo, e, "Static function can not consume context like dynamic theme. Please use 'App' component instead.");
} : (
  /* istanbul ignore next */
  null
), wp = ["getTargetContainer", "getPopupContainer", "renderEmpty", "pageHeader", "input", "pagination", "form", "select", "button"], xp = "ant";
let Fr, Xs, Qs;
function Ir() {
  return Fr || xp;
}
function _p() {
  return Xs || Bo;
}
function Op(e) {
  return Object.keys(e).some((t) => t.endsWith("Color"));
}
const Tp = (e) => {
  let {
    prefixCls: t,
    iconPrefixCls: r,
    theme: n
  } = e;
  t !== void 0 && (Fr = t), r !== void 0 && (Xs = r), n && (Op(n) ? (process.env.NODE_ENV !== "production" && qe(!1, "ConfigProvider", "`config` of css variable theme is not work in v5. Please use new `theme` config instead."), Gd(Ir(), n)) : Qs = n);
}, Js = () => ({
  getPrefixCls: (e, t) => t || (e ? `${Ir()}-${e}` : Ir()),
  getIconPrefixCls: _p,
  getRootPrefixCls: () => Fr || Ir(),
  getTheme: () => Qs
}), Ap = (e) => {
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
    space: u,
    virtual: f,
    dropdownMatchSelectWidth: m,
    popupMatchSelectWidth: g,
    popupOverflow: p,
    legacyLocale: d,
    parentContext: h,
    iconPrefixCls: C,
    theme: E,
    componentDisabled: A,
    segmented: T,
    statistic: v,
    spin: R,
    calendar: x,
    carousel: B,
    cascader: k,
    collapse: $,
    typography: z,
    checkbox: w,
    descriptions: S,
    divider: _,
    drawer: N,
    skeleton: j,
    steps: D,
    image: W,
    layout: ee,
    list: Z,
    mentions: ae,
    modal: I,
    progress: L,
    result: F,
    slider: U,
    breadcrumb: b,
    menu: te,
    pagination: M,
    input: re,
    empty: X,
    badge: q,
    radio: P,
    rate: se,
    switch: H,
    transfer: V,
    avatar: pe,
    message: Q,
    tag: me,
    table: ge,
    card: G,
    tabs: ne,
    timeline: be,
    timePicker: Ce,
    upload: K,
    notification: ve,
    tree: Dt,
    colorPicker: jt,
    datePicker: We
  } = e;
  process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && qe(m === void 0, "ConfigProvider", "`dropdownMatchSelectWidth` is deprecated. Please use `popupMatchSelectWidth` instead.");
  const Hc = y.useCallback((we, Ae) => {
    const {
      prefixCls: Ve
    } = e;
    if (Ae)
      return Ae;
    const Ge = Ve || h.getPrefixCls("");
    return we ? `${Ge}-${we}` : Ge;
  }, [h.getPrefixCls, e.prefixCls]), yt = C || h.iconPrefixCls || Bo, Bc = yt !== h.iconPrefixCls, Ft = r || h.csp, zc = Sp(yt, Ft), or = Xd(E, h.theme);
  process.env.NODE_ENV !== "production" && (uo = uo || !!or);
  const un = {
    csp: Ft,
    autoInsertSpaceInButton: n,
    alert: o,
    anchor: i,
    locale: s || d,
    direction: c,
    space: u,
    virtual: f,
    popupMatchSelectWidth: g ?? m,
    popupOverflow: p,
    getPrefixCls: Hc,
    iconPrefixCls: yt,
    theme: or,
    segmented: T,
    statistic: v,
    spin: R,
    calendar: x,
    carousel: B,
    cascader: k,
    collapse: $,
    typography: z,
    checkbox: w,
    descriptions: S,
    divider: _,
    drawer: N,
    skeleton: j,
    steps: D,
    image: W,
    input: re,
    layout: ee,
    list: Z,
    mentions: ae,
    modal: I,
    progress: L,
    result: F,
    slider: U,
    breadcrumb: b,
    menu: te,
    pagination: M,
    empty: X,
    badge: q,
    radio: P,
    rate: se,
    switch: H,
    transfer: V,
    avatar: pe,
    message: Q,
    tag: me,
    table: ge,
    card: G,
    tabs: ne,
    timeline: be,
    timePicker: Ce,
    upload: K,
    notification: ve,
    tree: Dt,
    colorPicker: jt,
    datePicker: We
  }, ir = Object.assign({}, h);
  Object.keys(un).forEach((we) => {
    un[we] !== void 0 && (ir[we] = un[we]);
  }), wp.forEach((we) => {
    const Ae = e[we];
    Ae && (ir[we] = Ae);
  });
  const ar = Za(() => ir, ir, (we, Ae) => {
    const Ve = Object.keys(we), Ge = Object.keys(Ae);
    return Ve.length !== Ge.length || Ve.some((sr) => we[sr] !== Ae[sr]);
  }), Uc = y.useMemo(() => ({
    prefixCls: yt,
    csp: Ft
  }), [yt, Ft]);
  let Pe = Bc ? zc(t) : t;
  const ri = y.useMemo(() => {
    var we, Ae, Ve, Ge;
    return Wf(((we = Ho.Form) === null || we === void 0 ? void 0 : we.defaultValidateMessages) || {}, ((Ve = (Ae = ar.locale) === null || Ae === void 0 ? void 0 : Ae.Form) === null || Ve === void 0 ? void 0 : Ve.defaultValidateMessages) || {}, ((Ge = ar.form) === null || Ge === void 0 ? void 0 : Ge.validateMessages) || {}, a?.validateMessages || {});
  }, [ar, a?.validateMessages]);
  Object.keys(ri).length > 0 && (Pe = /* @__PURE__ */ y.createElement(Gf.Provider, {
    value: ri
  }, t)), s && (Pe = /* @__PURE__ */ y.createElement(Zf, {
    locale: s,
    _ANT_MARK__: Ps
  }, Pe)), (yt || Ft) && (Pe = /* @__PURE__ */ y.createElement(Fo.Provider, {
    value: Uc
  }, Pe)), l && (Pe = /* @__PURE__ */ y.createElement(Kd, {
    size: l
  }, Pe)), Pe = /* @__PURE__ */ y.createElement(yp, null, Pe);
  const Wc = y.useMemo(() => {
    const we = or || {}, {
      algorithm: Ae,
      token: Ve
    } = we, Ge = Ep(we, ["algorithm", "token"]), sr = Ae && (!Array.isArray(Ae) || Ae.length > 0) ? _s(Ae) : void 0;
    return Object.assign(Object.assign({}, Ge), {
      theme: sr,
      token: Object.assign(Object.assign({}, tn), Ve)
    });
  }, [or]);
  return E && (Pe = /* @__PURE__ */ y.createElement(Ds.Provider, {
    value: Wc
  }, Pe)), A !== void 0 && (Pe = /* @__PURE__ */ y.createElement(Yd, {
    disabled: A
  }, Pe)), /* @__PURE__ */ y.createElement(nt.Provider, {
    value: ar
  }, Pe);
}, vt = (e) => {
  const t = y.useContext(nt), r = y.useContext(Rs);
  return /* @__PURE__ */ y.createElement(Ap, Object.assign({
    parentContext: t,
    legacyLocale: r
  }, e));
};
vt.ConfigContext = nt;
vt.SizeContext = nn;
vt.config = Tp;
vt.useConfig = qd;
Object.defineProperty(vt, "SizeContext", {
  get: () => (process.env.NODE_ENV !== "production" && qe(!1, "ConfigProvider", "ConfigProvider.SizeContext is deprecated. Please use `ConfigProvider.useConfig().componentSize` instead."), nn)
});
process.env.NODE_ENV !== "production" && (vt.displayName = "ConfigProvider");
const Zs = vt;
var Rp = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" } }] }, name: "check-circle", theme: "filled" };
const Pp = Rp;
function ec(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
}
function Np(e) {
  return ec(e) !== e?.ownerDocument;
}
function $p(e) {
  return Np(e) ? ec(e) : null;
}
function Ip(e, t) {
  st(e, "[@ant-design/icons] ".concat(t));
}
function Xi(e) {
  return ye(e) === "object" && typeof e.name == "string" && typeof e.theme == "string" && (ye(e.icon) === "object" || typeof e.icon == "function");
}
function Qi() {
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
function fo(e, t, r) {
  return r ? /* @__PURE__ */ de.createElement(e.tag, J(J({
    key: t
  }, Qi(e.attrs)), r), (e.children || []).map(function(n, o) {
    return fo(n, "".concat(t, "-").concat(e.tag, "-").concat(o));
  })) : /* @__PURE__ */ de.createElement(e.tag, J({
    key: t
  }, Qi(e.attrs)), (e.children || []).map(function(n, o) {
    return fo(n, "".concat(t, "-").concat(e.tag, "-").concat(o));
  }));
}
function tc(e) {
  return gt(e)[0];
}
function rc(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
var Mp = `
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
`, kp = function(t) {
  var r = Ne(Fo), n = r.csp, o = r.prefixCls, i = Mp;
  o && (i = i.replace(/anticon/g, o)), Ke(function() {
    var a = t.current, s = $p(a);
    Kt(i, "@ant-design-icons", {
      prepend: !0,
      csp: n,
      attachTo: s
    });
  }, []);
}, Lp = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"], Ut = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function Dp(e) {
  var t = e.primaryColor, r = e.secondaryColor;
  Ut.primaryColor = t, Ut.secondaryColor = r || tc(t), Ut.calculated = !!r;
}
function jp() {
  return J({}, Ut);
}
var on = function(t) {
  var r = t.icon, n = t.className, o = t.onClick, i = t.style, a = t.primaryColor, s = t.secondaryColor, l = Ot(t, Lp), c = y.useRef(), u = Ut;
  if (a && (u = {
    primaryColor: a,
    secondaryColor: s || tc(a)
  }), kp(c), Ip(Xi(r), "icon should be icon definiton, but got ".concat(r)), !Xi(r))
    return null;
  var f = r;
  return f && typeof f.icon == "function" && (f = J(J({}, f), {}, {
    icon: f.icon(u.primaryColor, u.secondaryColor)
  })), fo(f.icon, "svg-".concat(f.name), J(J({
    className: n,
    onClick: o,
    style: i,
    "data-icon": f.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true"
  }, l), {}, {
    ref: c
  }));
};
on.displayName = "IconReact";
on.getTwoToneColors = jp;
on.setTwoToneColors = Dp;
const Vo = on;
function nc(e) {
  var t = rc(e), r = he(t, 2), n = r[0], o = r[1];
  return Vo.setTwoToneColors({
    primaryColor: n,
    secondaryColor: o
  });
}
function Fp() {
  var e = Vo.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var Hp = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
nc(vd.primary);
var an = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var r, n = e.className, o = e.icon, i = e.spin, a = e.rotate, s = e.tabIndex, l = e.onClick, c = e.twoToneColor, u = Ot(e, Hp), f = y.useContext(Fo), m = f.prefixCls, g = m === void 0 ? "anticon" : m, p = f.rootClassName, d = Te(p, g, (r = {}, ie(r, "".concat(g, "-").concat(o.name), !!o.name), ie(r, "".concat(g, "-spin"), !!i || o.name === "loading"), r), n), h = s;
  h === void 0 && l && (h = -1);
  var C = a ? {
    msTransform: "rotate(".concat(a, "deg)"),
    transform: "rotate(".concat(a, "deg)")
  } : void 0, E = rc(c), A = he(E, 2), T = A[0], v = A[1];
  return /* @__PURE__ */ y.createElement("span", $e({
    role: "img",
    "aria-label": o.name
  }, u, {
    ref: t,
    tabIndex: h,
    onClick: l,
    className: d
  }), /* @__PURE__ */ y.createElement(Vo, {
    icon: o,
    primaryColor: T,
    secondaryColor: v,
    style: C
  }));
});
an.displayName = "AntdIcon";
an.getTwoToneColor = Fp;
an.setTwoToneColor = nc;
const kt = an;
var oc = function(t, r) {
  return /* @__PURE__ */ y.createElement(kt, $e({}, t, {
    ref: r,
    icon: Pp
  }));
};
process.env.NODE_ENV !== "production" && (oc.displayName = "CheckCircleFilled");
const Bp = /* @__PURE__ */ y.forwardRef(oc);
var zp = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z" } }] }, name: "close-circle", theme: "filled" };
const Up = zp;
var ic = function(t, r) {
  return /* @__PURE__ */ y.createElement(kt, $e({}, t, {
    ref: r,
    icon: Up
  }));
};
process.env.NODE_ENV !== "production" && (ic.displayName = "CloseCircleFilled");
const Wp = /* @__PURE__ */ y.forwardRef(ic);
var Vp = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" } }] }, name: "close", theme: "outlined" };
const Gp = Vp;
var ac = function(t, r) {
  return /* @__PURE__ */ y.createElement(kt, $e({}, t, {
    ref: r,
    icon: Gp
  }));
};
process.env.NODE_ENV !== "production" && (ac.displayName = "CloseOutlined");
const Yp = /* @__PURE__ */ y.forwardRef(ac);
var Kp = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "exclamation-circle", theme: "filled" };
const qp = Kp;
var sc = function(t, r) {
  return /* @__PURE__ */ y.createElement(kt, $e({}, t, {
    ref: r,
    icon: qp
  }));
};
process.env.NODE_ENV !== "production" && (sc.displayName = "ExclamationCircleFilled");
const Xp = /* @__PURE__ */ y.forwardRef(sc);
var Qp = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "info-circle", theme: "filled" };
const Jp = Qp;
var cc = function(t, r) {
  return /* @__PURE__ */ y.createElement(kt, $e({}, t, {
    ref: r,
    icon: Jp
  }));
};
process.env.NODE_ENV !== "production" && (cc.displayName = "InfoCircleFilled");
const Zp = /* @__PURE__ */ y.forwardRef(cc), {
  isValidElement: lc
} = y;
function eh(e) {
  return e && lc(e) && e.type === y.Fragment;
}
function th(e, t, r) {
  return lc(e) ? /* @__PURE__ */ y.cloneElement(e, typeof r == "function" ? r(e.props || {}) : r) : t;
}
function uc(e, t) {
  return th(e, e, t);
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
}, fc = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var r = e.prefixCls, n = e.style, o = e.className, i = e.duration, a = i === void 0 ? 4.5 : i, s = e.eventKey, l = e.content, c = e.closable, u = e.closeIcon, f = u === void 0 ? "x" : u, m = e.props, g = e.onClick, p = e.onNoticeClose, d = e.times, h = y.useState(!1), C = he(h, 2), E = C[0], A = C[1], T = function() {
    p(s);
  }, v = function(B) {
    (B.key === "Enter" || B.code === "Enter" || B.keyCode === Y.ENTER) && T();
  };
  y.useEffect(function() {
    if (!E && a > 0) {
      var x = setTimeout(function() {
        T();
      }, a * 1e3);
      return function() {
        clearTimeout(x);
      };
    }
  }, [a, E, d]);
  var R = "".concat(r, "-notice");
  return /* @__PURE__ */ y.createElement("div", $e({}, m, {
    ref: t,
    className: Te(R, o, ie({}, "".concat(R, "-closable"), c)),
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
      B.preventDefault(), B.stopPropagation(), T();
    }
  }, f));
}), dc = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var r = e.prefixCls, n = r === void 0 ? "rc-notification" : r, o = e.container, i = e.motion, a = e.maxCount, s = e.className, l = e.style, c = e.onAllRemoved, u = y.useState([]), f = he(u, 2), m = f[0], g = f[1], p = function(x) {
    var B, k = m.find(function($) {
      return $.key === x;
    });
    k == null || (B = k.onClose) === null || B === void 0 || B.call(k), g(function($) {
      return $.filter(function(z) {
        return z.key !== x;
      });
    });
  };
  y.useImperativeHandle(t, function() {
    return {
      open: function(x) {
        g(function(B) {
          var k = Le(B), $ = k.findIndex(function(S) {
            return S.key === x.key;
          }), z = J({}, x);
          if ($ >= 0) {
            var w;
            z.times = (((w = B[$]) === null || w === void 0 ? void 0 : w.times) || 0) + 1, k[$] = z;
          } else
            z.times = 0, k.push(z);
          return a > 0 && k.length > a && (k = k.slice(-a)), k;
        });
      },
      close: function(x) {
        p(x);
      },
      destroy: function() {
        g([]);
      }
    };
  });
  var d = y.useState({}), h = he(d, 2), C = h[0], E = h[1];
  y.useEffect(function() {
    var R = {};
    m.forEach(function(x) {
      var B = x.placement, k = B === void 0 ? "topRight" : B;
      k && (R[k] = R[k] || [], R[k].push(x));
    }), Object.keys(C).forEach(function(x) {
      R[x] = R[x] || [];
    }), E(R);
  }, [m]);
  var A = function(x) {
    E(function(B) {
      var k = J({}, B), $ = k[x] || [];
      return $.length || delete k[x], k;
    });
  }, T = y.useRef(!1);
  if (y.useEffect(function() {
    Object.keys(C).length > 0 ? T.current = !0 : T.current && (c?.(), T.current = !1);
  }, [C]), !o)
    return null;
  var v = Object.keys(C);
  return /* @__PURE__ */ Ea(/* @__PURE__ */ y.createElement(y.Fragment, null, v.map(function(R) {
    var x = C[R], B = x.map(function($) {
      return {
        config: $,
        key: $.key
      };
    }), k = typeof i == "function" ? i(R) : i;
    return /* @__PURE__ */ y.createElement(vp, $e({
      key: R,
      className: Te(n, "".concat(n, "-").concat(R), s?.(R)),
      style: l?.(R),
      keys: B,
      motionAppear: !0
    }, k, {
      onAllRemoved: function() {
        A(R);
      }
    }), function($, z) {
      var w = $.config, S = $.className, _ = $.style, N = w.key, j = w.times, D = w.className, W = w.style;
      return /* @__PURE__ */ y.createElement(fc, $e({}, w, {
        ref: z,
        prefixCls: n,
        className: Te(S, D),
        style: J(J({}, _), W),
        times: j,
        key: N,
        eventKey: N,
        onNoticeClose: p
      }));
    });
  })), o);
});
process.env.NODE_ENV !== "production" && (dc.displayName = "Notifications");
var rh = ["getContainer", "motion", "prefixCls", "maxCount", "className", "style", "onAllRemoved"], nh = function() {
  return document.body;
}, Ji = 0;
function oh() {
  for (var e = {}, t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  return r.forEach(function(o) {
    o && Object.keys(o).forEach(function(i) {
      var a = o[i];
      a !== void 0 && (e[i] = a);
    });
  }), e;
}
function ih() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.getContainer, r = t === void 0 ? nh : t, n = e.motion, o = e.prefixCls, i = e.maxCount, a = e.className, s = e.style, l = e.onAllRemoved, c = Ot(e, rh), u = y.useState(), f = he(u, 2), m = f[0], g = f[1], p = y.useRef(), d = /* @__PURE__ */ y.createElement(dc, {
    container: m,
    ref: p,
    prefixCls: o,
    motion: n,
    maxCount: i,
    className: a,
    style: s,
    onAllRemoved: l
  }), h = y.useState([]), C = he(h, 2), E = C[0], A = C[1], T = y.useMemo(function() {
    return {
      open: function(R) {
        var x = oh(c, R);
        (x.key === null || x.key === void 0) && (x.key = "rc-notification-".concat(Ji), Ji += 1), A(function(B) {
          return [].concat(Le(B), [{
            type: "open",
            config: x
          }]);
        });
      },
      close: function(R) {
        A(function(x) {
          return [].concat(Le(x), [{
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
    }), A([]));
  }, [E]), [T, d];
}
var ah = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, name: "loading", theme: "outlined" };
const sh = ah;
var pc = function(t, r) {
  return /* @__PURE__ */ y.createElement(kt, $e({}, t, {
    ref: r,
    icon: sh
  }));
};
process.env.NODE_ENV !== "production" && (pc.displayName = "LoadingOutlined");
const hc = /* @__PURE__ */ y.forwardRef(pc), ch = (e) => {
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
    motionEaseInOutCirc: u,
    motionDurationSlow: f,
    marginXS: m,
    paddingXS: g,
    borderRadiusLG: p,
    zIndexPopup: d,
    // Custom token
    contentPadding: h,
    contentBg: C
  } = e, E = `${t}-notice`, A = new Ii("MessageMoveIn", {
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
  }), T = new Ii("MessageMoveOut", {
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
      background: C,
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
      [t]: Object.assign(Object.assign({}, Ld(e)), {
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
          animationDuration: f,
          animationPlayState: "paused",
          animationTimingFunction: u
        },
        [`
        ${t}-move-up-appear${t}-move-up-appear-active,
        ${t}-move-up-enter${t}-move-up-enter-active
      `]: {
          animationPlayState: "running"
        },
        [`${t}-move-up-leave`]: {
          animationName: T,
          animationDuration: f,
          animationPlayState: "paused",
          animationTimingFunction: u
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
}, mc = zo("Message", (e) => {
  const t = At(e, {
    height: 150
  });
  return [ch(t)];
}, (e) => ({
  zIndexPopup: e.zIndexPopupBase + 10,
  contentBg: e.colorBgElevated,
  contentPadding: `${(e.controlHeightLG - e.fontSize * e.lineHeight) / 2}px ${e.paddingSM}px`
}));
var lh = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
const uh = {
  info: /* @__PURE__ */ y.createElement(Zp, null),
  success: /* @__PURE__ */ y.createElement(Bp, null),
  error: /* @__PURE__ */ y.createElement(Wp, null),
  warning: /* @__PURE__ */ y.createElement(Xp, null),
  loading: /* @__PURE__ */ y.createElement(hc, null)
}, gc = (e) => {
  let {
    prefixCls: t,
    type: r,
    icon: n,
    children: o
  } = e;
  return /* @__PURE__ */ y.createElement("div", {
    className: Te(`${t}-custom-content`, `${t}-${r}`)
  }, n || uh[r], /* @__PURE__ */ y.createElement("span", null, o));
}, fh = (e) => {
  const {
    prefixCls: t,
    className: r,
    type: n,
    icon: o,
    content: i
  } = e, a = lh(e, ["prefixCls", "className", "type", "icon", "content"]), {
    getPrefixCls: s
  } = y.useContext(nt), l = t || s("message"), [, c] = mc(l);
  return /* @__PURE__ */ y.createElement(fc, Object.assign({}, a, {
    prefixCls: l,
    className: Te(r, c, `${l}-notice-pure-panel`),
    eventKey: "pure",
    duration: null,
    content: /* @__PURE__ */ y.createElement(gc, {
      prefixCls: l,
      type: n,
      icon: o
    }, i)
  }));
}, dh = fh;
function ph(e, t) {
  return {
    motionName: t ?? `${e}-move-up`
  };
}
function Go(e) {
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
var hh = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
const mh = 8, gh = 3, vh = /* @__PURE__ */ y.forwardRef((e, t) => {
  const {
    top: r,
    prefixCls: n,
    getContainer: o,
    maxCount: i,
    duration: a = gh,
    rtl: s,
    transitionName: l,
    onAllRemoved: c
  } = e, {
    getPrefixCls: u,
    getPopupContainer: f,
    message: m
  } = y.useContext(nt), g = n || u("message"), [, p] = mc(g), d = () => ({
    left: "50%",
    transform: "translateX(-50%)",
    top: r ?? mh
  }), h = () => Te(p, {
    [`${g}-rtl`]: s
  }), C = () => ph(g, l), E = /* @__PURE__ */ y.createElement("span", {
    className: `${g}-close-x`
  }, /* @__PURE__ */ y.createElement(Yp, {
    className: `${g}-close-icon`
  })), [A, T] = ih({
    prefixCls: g,
    style: d,
    className: h,
    motion: C,
    closable: !1,
    closeIcon: E,
    duration: a,
    getContainer: () => o?.() || f?.() || document.body,
    maxCount: i,
    onAllRemoved: c
  });
  return y.useImperativeHandle(t, () => Object.assign(Object.assign({}, A), {
    prefixCls: g,
    hashId: p,
    message: m
  })), T;
});
let Zi = 0;
function vc(e) {
  const t = y.useRef(null);
  return [y.useMemo(() => {
    const n = (l) => {
      var c;
      (c = t.current) === null || c === void 0 || c.close(l);
    }, o = (l) => {
      if (!t.current) {
        process.env.NODE_ENV !== "production" && qe(!1, "Message", "You are calling notice in render which will break in React 18 concurrent mode. Please trigger in effect instead.");
        const x = () => {
        };
        return x.then = () => {
        }, x;
      }
      const {
        open: c,
        prefixCls: u,
        hashId: f,
        message: m
      } = t.current, g = `${u}-notice`, {
        content: p,
        icon: d,
        type: h,
        key: C,
        className: E,
        style: A,
        onClose: T
      } = l, v = hh(l, ["content", "icon", "type", "key", "className", "style", "onClose"]);
      let R = C;
      return R == null && (Zi += 1, R = `antd-message-${Zi}`), Go((x) => (c(Object.assign(Object.assign({}, v), {
        key: R,
        content: /* @__PURE__ */ y.createElement(gc, {
          prefixCls: u,
          type: h,
          icon: d
        }, p),
        placement: "top",
        className: Te(h && `${g}-${h}`, f, E, m?.className),
        style: Object.assign(Object.assign({}, m?.style), A),
        onClose: () => {
          T?.(), x();
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
      const c = (u, f, m) => {
        let g;
        u && typeof u == "object" && "content" in u ? g = u : g = {
          content: u
        };
        let p, d;
        typeof f == "function" ? d = f : (p = f, d = m);
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
  }, []), /* @__PURE__ */ y.createElement(vh, Object.assign({
    key: "message-holder"
  }, e, {
    ref: t
  }))];
}
function yh(e) {
  return vc(e);
}
function Qt() {
  Qt = function() {
    return e;
  };
  var e = {}, t = Object.prototype, r = t.hasOwnProperty, n = Object.defineProperty || function(w, S, _) {
    w[S] = _.value;
  }, o = typeof Symbol == "function" ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", s = o.toStringTag || "@@toStringTag";
  function l(w, S, _) {
    return Object.defineProperty(w, S, {
      value: _,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), w[S];
  }
  try {
    l({}, "");
  } catch {
    l = function(_, N, j) {
      return _[N] = j;
    };
  }
  function c(w, S, _, N) {
    var j = S && S.prototype instanceof m ? S : m, D = Object.create(j.prototype), W = new k(N || []);
    return n(D, "_invoke", {
      value: v(w, _, W)
    }), D;
  }
  function u(w, S, _) {
    try {
      return {
        type: "normal",
        arg: w.call(S, _)
      };
    } catch (N) {
      return {
        type: "throw",
        arg: N
      };
    }
  }
  e.wrap = c;
  var f = {};
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
  var h = Object.getPrototypeOf, C = h && h(h($([])));
  C && C !== t && r.call(C, i) && (d = C);
  var E = p.prototype = m.prototype = Object.create(d);
  function A(w) {
    ["next", "throw", "return"].forEach(function(S) {
      l(w, S, function(_) {
        return this._invoke(S, _);
      });
    });
  }
  function T(w, S) {
    function _(j, D, W, ee) {
      var Z = u(w[j], w, D);
      if (Z.type !== "throw") {
        var ae = Z.arg, I = ae.value;
        return I && ye(I) == "object" && r.call(I, "__await") ? S.resolve(I.__await).then(function(L) {
          _("next", L, W, ee);
        }, function(L) {
          _("throw", L, W, ee);
        }) : S.resolve(I).then(function(L) {
          ae.value = L, W(ae);
        }, function(L) {
          return _("throw", L, W, ee);
        });
      }
      ee(Z.arg);
    }
    var N;
    n(this, "_invoke", {
      value: function(D, W) {
        function ee() {
          return new S(function(Z, ae) {
            _(D, W, Z, ae);
          });
        }
        return N = N ? N.then(ee, ee) : ee();
      }
    });
  }
  function v(w, S, _) {
    var N = "suspendedStart";
    return function(j, D) {
      if (N === "executing")
        throw new Error("Generator is already running");
      if (N === "completed") {
        if (j === "throw")
          throw D;
        return z();
      }
      for (_.method = j, _.arg = D; ; ) {
        var W = _.delegate;
        if (W) {
          var ee = R(W, _);
          if (ee) {
            if (ee === f)
              continue;
            return ee;
          }
        }
        if (_.method === "next")
          _.sent = _._sent = _.arg;
        else if (_.method === "throw") {
          if (N === "suspendedStart")
            throw N = "completed", _.arg;
          _.dispatchException(_.arg);
        } else
          _.method === "return" && _.abrupt("return", _.arg);
        N = "executing";
        var Z = u(w, S, _);
        if (Z.type === "normal") {
          if (N = _.done ? "completed" : "suspendedYield", Z.arg === f)
            continue;
          return {
            value: Z.arg,
            done: _.done
          };
        }
        Z.type === "throw" && (N = "completed", _.method = "throw", _.arg = Z.arg);
      }
    };
  }
  function R(w, S) {
    var _ = S.method, N = w.iterator[_];
    if (N === void 0)
      return S.delegate = null, _ === "throw" && w.iterator.return && (S.method = "return", S.arg = void 0, R(w, S), S.method === "throw") || _ !== "return" && (S.method = "throw", S.arg = new TypeError("The iterator does not provide a '" + _ + "' method")), f;
    var j = u(N, w.iterator, S.arg);
    if (j.type === "throw")
      return S.method = "throw", S.arg = j.arg, S.delegate = null, f;
    var D = j.arg;
    return D ? D.done ? (S[w.resultName] = D.value, S.next = w.nextLoc, S.method !== "return" && (S.method = "next", S.arg = void 0), S.delegate = null, f) : D : (S.method = "throw", S.arg = new TypeError("iterator result is not an object"), S.delegate = null, f);
  }
  function x(w) {
    var S = {
      tryLoc: w[0]
    };
    1 in w && (S.catchLoc = w[1]), 2 in w && (S.finallyLoc = w[2], S.afterLoc = w[3]), this.tryEntries.push(S);
  }
  function B(w) {
    var S = w.completion || {};
    S.type = "normal", delete S.arg, w.completion = S;
  }
  function k(w) {
    this.tryEntries = [{
      tryLoc: "root"
    }], w.forEach(x, this), this.reset(!0);
  }
  function $(w) {
    if (w) {
      var S = w[i];
      if (S)
        return S.call(w);
      if (typeof w.next == "function")
        return w;
      if (!isNaN(w.length)) {
        var _ = -1, N = function j() {
          for (; ++_ < w.length; )
            if (r.call(w, _))
              return j.value = w[_], j.done = !1, j;
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
  }), g.displayName = l(p, s, "GeneratorFunction"), e.isGeneratorFunction = function(w) {
    var S = typeof w == "function" && w.constructor;
    return !!S && (S === g || (S.displayName || S.name) === "GeneratorFunction");
  }, e.mark = function(w) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(w, p) : (w.__proto__ = p, l(w, s, "GeneratorFunction")), w.prototype = Object.create(E), w;
  }, e.awrap = function(w) {
    return {
      __await: w
    };
  }, A(T.prototype), l(T.prototype, a, function() {
    return this;
  }), e.AsyncIterator = T, e.async = function(w, S, _, N, j) {
    j === void 0 && (j = Promise);
    var D = new T(c(w, S, _, N), j);
    return e.isGeneratorFunction(S) ? D : D.next().then(function(W) {
      return W.done ? W.value : D.next();
    });
  }, A(E), l(E, s, "Generator"), l(E, i, function() {
    return this;
  }), l(E, "toString", function() {
    return "[object Generator]";
  }), e.keys = function(w) {
    var S = Object(w), _ = [];
    for (var N in S)
      _.push(N);
    return _.reverse(), function j() {
      for (; _.length; ) {
        var D = _.pop();
        if (D in S)
          return j.value = D, j.done = !1, j;
      }
      return j.done = !0, j;
    };
  }, e.values = $, k.prototype = {
    constructor: k,
    reset: function(S) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(B), !S)
        for (var _ in this)
          _.charAt(0) === "t" && r.call(this, _) && !isNaN(+_.slice(1)) && (this[_] = void 0);
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
      var _ = this;
      function N(ae, I) {
        return W.type = "throw", W.arg = S, _.next = ae, I && (_.method = "next", _.arg = void 0), !!I;
      }
      for (var j = this.tryEntries.length - 1; j >= 0; --j) {
        var D = this.tryEntries[j], W = D.completion;
        if (D.tryLoc === "root")
          return N("end");
        if (D.tryLoc <= this.prev) {
          var ee = r.call(D, "catchLoc"), Z = r.call(D, "finallyLoc");
          if (ee && Z) {
            if (this.prev < D.catchLoc)
              return N(D.catchLoc, !0);
            if (this.prev < D.finallyLoc)
              return N(D.finallyLoc);
          } else if (ee) {
            if (this.prev < D.catchLoc)
              return N(D.catchLoc, !0);
          } else {
            if (!Z)
              throw new Error("try statement without catch or finally");
            if (this.prev < D.finallyLoc)
              return N(D.finallyLoc);
          }
        }
      }
    },
    abrupt: function(S, _) {
      for (var N = this.tryEntries.length - 1; N >= 0; --N) {
        var j = this.tryEntries[N];
        if (j.tryLoc <= this.prev && r.call(j, "finallyLoc") && this.prev < j.finallyLoc) {
          var D = j;
          break;
        }
      }
      D && (S === "break" || S === "continue") && D.tryLoc <= _ && _ <= D.finallyLoc && (D = null);
      var W = D ? D.completion : {};
      return W.type = S, W.arg = _, D ? (this.method = "next", this.next = D.finallyLoc, f) : this.complete(W);
    },
    complete: function(S, _) {
      if (S.type === "throw")
        throw S.arg;
      return S.type === "break" || S.type === "continue" ? this.next = S.arg : S.type === "return" ? (this.rval = this.arg = S.arg, this.method = "return", this.next = "end") : S.type === "normal" && _ && (this.next = _), f;
    },
    finish: function(S) {
      for (var _ = this.tryEntries.length - 1; _ >= 0; --_) {
        var N = this.tryEntries[_];
        if (N.finallyLoc === S)
          return this.complete(N.completion, N.afterLoc), B(N), f;
      }
    },
    catch: function(S) {
      for (var _ = this.tryEntries.length - 1; _ >= 0; --_) {
        var N = this.tryEntries[_];
        if (N.tryLoc === S) {
          var j = N.completion;
          if (j.type === "throw") {
            var D = j.arg;
            B(N);
          }
          return D;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function(S, _, N) {
      return this.delegate = {
        iterator: $(S),
        resultName: _,
        nextLoc: N
      }, this.method === "next" && (this.arg = void 0), f;
    }
  }, e;
}
function ea(e, t, r, n, o, i, a) {
  try {
    var s = e[i](a), l = s.value;
  } catch (c) {
    r(c);
    return;
  }
  s.done ? t(l) : Promise.resolve(l).then(n, o);
}
function yc(e) {
  return function() {
    var t = this, r = arguments;
    return new Promise(function(n, o) {
      var i = e.apply(t, r);
      function a(l) {
        ea(i, n, o, a, s, "next", l);
      }
      function s(l) {
        ea(i, n, o, a, s, "throw", l);
      }
      a(void 0);
    });
  };
}
var nr = J({}, qc), bh = nr.version, Sh = nr.render, Eh = nr.unmountComponentAtNode, sn;
try {
  var Ch = Number((bh || "").split(".")[0]);
  Ch >= 18 && (sn = nr.createRoot);
} catch {
}
function ta(e) {
  var t = nr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  t && ye(t) === "object" && (t.usingClientEntryPoint = e);
}
var Hr = "__rc_react_root__";
function wh(e, t) {
  ta(!0);
  var r = t[Hr] || sn(t);
  ta(!1), r.render(e), t[Hr] = r;
}
function xh(e, t) {
  Sh(e, t);
}
function bc(e, t) {
  if (sn) {
    wh(e, t);
    return;
  }
  xh(e, t);
}
function _h(e) {
  return po.apply(this, arguments);
}
function po() {
  return po = yc(/* @__PURE__ */ Qt().mark(function e(t) {
    return Qt().wrap(function(n) {
      for (; ; )
        switch (n.prev = n.next) {
          case 0:
            return n.abrupt("return", Promise.resolve().then(function() {
              var o;
              (o = t[Hr]) === null || o === void 0 || o.unmount(), delete t[Hr];
            }));
          case 1:
          case "end":
            return n.stop();
        }
    }, e);
  })), po.apply(this, arguments);
}
function Oh(e) {
  Eh(e);
}
function Th(e) {
  return ho.apply(this, arguments);
}
function ho() {
  return ho = yc(/* @__PURE__ */ Qt().mark(function e(t) {
    return Qt().wrap(function(n) {
      for (; ; )
        switch (n.prev = n.next) {
          case 0:
            if (sn === void 0) {
              n.next = 2;
              break;
            }
            return n.abrupt("return", _h(t));
          case 2:
            Oh(t);
          case 3:
          case "end":
            return n.stop();
        }
    }, e);
  })), ho.apply(this, arguments);
}
const Ah = function(e) {
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
}, Rh = (e) => {
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
}, Ph = zo("Wave", (e) => [Rh(e)]);
function Nh(e) {
  const t = (e || "").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);
  return t && t[1] && t[2] && t[3] ? !(t[1] === t[2] && t[2] === t[3]) : !0;
}
function Rn(e) {
  return e && e !== "#fff" && e !== "#ffffff" && e !== "rgb(255, 255, 255)" && e !== "rgba(255, 255, 255, 1)" && Nh(e) && !/rgba\((?:\d*, ){3}0\)/.test(e) && // any transparent rgba color
  e !== "transparent";
}
function $h(e) {
  const {
    borderTopColor: t,
    borderColor: r,
    backgroundColor: n
  } = getComputedStyle(e);
  return Rn(t) ? t : Rn(r) ? r : Rn(n) ? n : null;
}
function Pn(e) {
  return Number.isNaN(e) ? 0 : e;
}
const Ih = (e) => {
  const {
    className: t,
    target: r
  } = e, n = y.useRef(null), [o, i] = y.useState(null), [a, s] = y.useState([]), [l, c] = y.useState(0), [u, f] = y.useState(0), [m, g] = y.useState(0), [p, d] = y.useState(0), [h, C] = y.useState(!1), E = {
    left: l,
    top: u,
    width: m,
    height: p,
    borderRadius: a.map((T) => `${T}px`).join(" ")
  };
  o && (E["--wave-color"] = o);
  function A() {
    const T = getComputedStyle(r);
    i($h(r));
    const v = T.position === "static", {
      borderLeftWidth: R,
      borderTopWidth: x
    } = T;
    c(v ? r.offsetLeft : Pn(-parseFloat(R))), f(v ? r.offsetTop : Pn(-parseFloat(x))), g(r.offsetWidth), d(r.offsetHeight);
    const {
      borderTopLeftRadius: B,
      borderTopRightRadius: k,
      borderBottomLeftRadius: $,
      borderBottomRightRadius: z
    } = T;
    s([B, k, z, $].map((w) => Pn(parseFloat(w))));
  }
  return y.useEffect(() => {
    if (r) {
      const T = Yt(() => {
        A(), C(!0);
      });
      let v;
      return typeof ResizeObserver < "u" && (v = new ResizeObserver(A), v.observe(r)), () => {
        Yt.cancel(T), v?.disconnect();
      };
    }
  }, []), h ? /* @__PURE__ */ y.createElement(Wo, {
    visible: !0,
    motionAppear: !0,
    motionName: "wave-motion",
    motionDeadline: 5e3,
    onAppearEnd: (T, v) => {
      var R;
      if (v.deadline || v.propertyName === "opacity") {
        const x = (R = n.current) === null || R === void 0 ? void 0 : R.parentElement;
        Th(x).then(() => {
          x?.remove();
        });
      }
      return !1;
    }
  }, (T) => {
    let {
      className: v
    } = T;
    return /* @__PURE__ */ y.createElement("div", {
      ref: n,
      className: Te(t, v),
      style: E
    });
  }) : null;
};
function Mh(e, t) {
  const r = document.createElement("div");
  r.style.position = "absolute", r.style.left = "0px", r.style.top = "0px", e?.insertBefore(r, e?.firstChild), bc(/* @__PURE__ */ y.createElement(Ih, {
    target: e,
    className: t
  }), r);
}
function kh(e, t) {
  function r() {
    const n = e.current;
    Mh(n, t);
  }
  return r;
}
const Sc = (e) => {
  const {
    children: t,
    disabled: r
  } = e, {
    getPrefixCls: n
  } = Ne(nt), o = je(null), i = n("wave"), [, a] = Ph(i), s = kh(o, Te(i, a));
  if (de.useEffect(() => {
    const c = o.current;
    if (!c || c.nodeType !== 1 || r)
      return;
    const u = (f) => {
      f.target.tagName === "INPUT" || !Ah(f.target) || // No need wave
      !c.getAttribute || c.getAttribute("disabled") || c.disabled || c.className.includes("disabled") || c.className.includes("-leave") || s();
    };
    return c.addEventListener("click", u, !0), () => {
      c.removeEventListener("click", u, !0);
    };
  }, [r]), !/* @__PURE__ */ de.isValidElement(t))
    return t ?? null;
  const l = rs(t) ? ts(t.ref, o) : o;
  return uc(t, {
    ref: l
  });
};
process.env.NODE_ENV !== "production" && (Sc.displayName = "Wave");
const Lh = Sc, Dh = (e) => {
  const t = de.useContext(nn);
  return de.useMemo(() => e ? typeof e == "string" ? e ?? t : e instanceof Function ? e(t) : t : t, [e, t]);
}, jh = Dh;
globalThis && globalThis.__rest;
const Fh = /* @__PURE__ */ y.createContext(null), Hh = (e, t) => {
  const r = y.useContext(Fh), n = y.useMemo(() => {
    if (!r)
      return "";
    const {
      compactDirection: o,
      isFirstItem: i,
      isLastItem: a
    } = r, s = o === "vertical" ? "-vertical-" : "-";
    return Te({
      [`${e}-compact${s}item`]: !0,
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
}, Bh = /* @__PURE__ */ xo((e, t) => {
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
}), Ec = Bh, ra = /* @__PURE__ */ xo((e, t) => {
  let {
    prefixCls: r,
    className: n,
    style: o,
    iconClassName: i
  } = e;
  const a = Te(`${r}-loading-icon`, n);
  return /* @__PURE__ */ de.createElement(Ec, {
    prefixCls: r,
    className: a,
    style: o,
    ref: t
  }, /* @__PURE__ */ de.createElement(hc, {
    className: i
  }));
}), Nn = () => ({
  width: 0,
  opacity: 0,
  transform: "scale(0)"
}), $n = (e) => ({
  width: e.scrollWidth,
  opacity: 1,
  transform: "scale(1)"
}), zh = (e) => {
  const {
    prefixCls: t,
    loading: r,
    existIcon: n,
    className: o,
    style: i
  } = e, a = !!r;
  return n ? /* @__PURE__ */ de.createElement(ra, {
    prefixCls: t,
    className: o,
    style: i
  }) : /* @__PURE__ */ de.createElement(Wo, {
    visible: a,
    // We do not really use this motionName
    motionName: `${t}-loading-icon-motion`,
    removeOnLeave: !0,
    onAppearStart: Nn,
    onAppearActive: $n,
    onEnterStart: Nn,
    onEnterActive: $n,
    onLeaveStart: $n,
    onLeaveActive: Nn
  }, (s, l) => {
    let {
      className: c,
      style: u
    } = s;
    return /* @__PURE__ */ de.createElement(ra, {
      prefixCls: t,
      className: o,
      style: Object.assign(Object.assign({}, i), u),
      ref: l,
      iconClassName: c
    });
  });
}, Uh = zh;
var Wh = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
const Cc = /* @__PURE__ */ y.createContext(void 0), Vh = (e) => {
  const {
    getPrefixCls: t,
    direction: r
  } = y.useContext(nt), {
    prefixCls: n,
    size: o,
    className: i
  } = e, a = Wh(e, ["prefixCls", "size", "className"]), s = t("btn-group", n), [, , l] = rn();
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
  const u = Te(s, {
    [`${s}-${c}`]: c,
    [`${s}-rtl`]: r === "rtl"
  }, i, l);
  return /* @__PURE__ */ y.createElement(Cc.Provider, {
    value: o
  }, /* @__PURE__ */ y.createElement("div", Object.assign({}, a, {
    className: u
  })));
}, Gh = Vh, na = /^[\u4e00-\u9fa5]{2}$/, mo = na.test.bind(na);
function Yh(e) {
  return typeof e == "string";
}
function yr(e) {
  return e === "text" || e === "link";
}
function Kh(e, t) {
  if (e == null)
    return;
  const r = t ? " " : "";
  return typeof e != "string" && typeof e != "number" && Yh(e.type) && mo(e.props.children) ? uc(e, {
    children: e.props.children.split("").join(r)
  }) : typeof e == "string" ? mo(e) ? /* @__PURE__ */ de.createElement("span", null, e.split("").join(r)) : /* @__PURE__ */ de.createElement("span", null, e) : eh(e) ? /* @__PURE__ */ de.createElement("span", null, e) : e;
}
function qh(e, t) {
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
  }), de.Children.map(n, (o) => Kh(o, t));
}
function Xh(e, t, r) {
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
function Qh(e, t, r) {
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
function Jh(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    focus: !0
  };
  const {
    componentCls: r
  } = e, n = `${r}-compact`;
  return {
    [n]: Object.assign(Object.assign({}, Xh(e, n, t)), Qh(r, n, t))
  };
}
function Zh(e, t) {
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
function em(e, t) {
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
function tm(e) {
  const t = `${e.componentCls}-compact-vertical`;
  return {
    [t]: Object.assign(Object.assign({}, Zh(e, t)), em(e.componentCls, t))
  };
}
const oa = (e, t) => ({
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
}), rm = (e) => {
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
      oa(`${t}-primary`, o),
      oa(`${t}-danger`, i)
    ]
  };
}, nm = rm, om = (e) => {
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
      "&:not(:disabled)": Object.assign({}, Bd(e)),
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
}, rt = (e, t, r) => ({
  [`&:not(:disabled):not(${e}-disabled)`]: {
    "&:hover": t,
    "&:active": r
  }
}), im = (e) => ({
  minWidth: e.controlHeight,
  paddingInlineStart: 0,
  paddingInlineEnd: 0,
  borderRadius: "50%"
}), am = (e) => ({
  borderRadius: e.controlHeight,
  paddingInlineStart: e.controlHeight / 2,
  paddingInlineEnd: e.controlHeight / 2
}), sm = (e) => ({
  cursor: "not-allowed",
  borderColor: e.colorBorder,
  color: e.colorTextDisabled,
  backgroundColor: e.colorBgContainerDisabled,
  boxShadow: "none"
}), Br = (e, t, r, n, o, i, a) => ({
  [`&${e}-background-ghost`]: Object.assign(Object.assign({
    color: t || void 0,
    backgroundColor: "transparent",
    borderColor: r || void 0,
    boxShadow: "none"
  }, rt(e, Object.assign({
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
}), Yo = (e) => ({
  [`&:disabled, &${e.componentCls}-disabled`]: Object.assign({}, sm(e))
}), wc = (e) => Object.assign({}, Yo(e)), zr = (e) => ({
  [`&:disabled, &${e.componentCls}-disabled`]: {
    cursor: "not-allowed",
    color: e.colorTextDisabled
  }
}), xc = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, wc(e)), {
  backgroundColor: e.colorBgContainer,
  borderColor: e.colorBorder,
  boxShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlTmpOutline}`
}), rt(e.componentCls, {
  color: e.colorPrimaryHover,
  borderColor: e.colorPrimaryHover
}, {
  color: e.colorPrimaryActive,
  borderColor: e.colorPrimaryActive
})), Br(e.componentCls, e.colorBgContainer, e.colorBgContainer, e.colorTextDisabled, e.colorBorder)), {
  [`&${e.componentCls}-dangerous`]: Object.assign(Object.assign(Object.assign({
    color: e.colorError,
    borderColor: e.colorError
  }, rt(e.componentCls, {
    color: e.colorErrorHover,
    borderColor: e.colorErrorBorderHover
  }, {
    color: e.colorErrorActive,
    borderColor: e.colorErrorActive
  })), Br(e.componentCls, e.colorError, e.colorError, e.colorTextDisabled, e.colorBorder)), Yo(e))
}), cm = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, wc(e)), {
  color: e.colorTextLightSolid,
  backgroundColor: e.colorPrimary,
  boxShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlOutline}`
}), rt(e.componentCls, {
  color: e.colorTextLightSolid,
  backgroundColor: e.colorPrimaryHover
}, {
  color: e.colorTextLightSolid,
  backgroundColor: e.colorPrimaryActive
})), Br(e.componentCls, e.colorPrimary, e.colorPrimary, e.colorTextDisabled, e.colorBorder, {
  color: e.colorPrimaryHover,
  borderColor: e.colorPrimaryHover
}, {
  color: e.colorPrimaryActive,
  borderColor: e.colorPrimaryActive
})), {
  [`&${e.componentCls}-dangerous`]: Object.assign(Object.assign(Object.assign({
    backgroundColor: e.colorError,
    boxShadow: `0 ${e.controlOutlineWidth}px 0 ${e.colorErrorOutline}`
  }, rt(e.componentCls, {
    backgroundColor: e.colorErrorHover
  }, {
    backgroundColor: e.colorErrorActive
  })), Br(e.componentCls, e.colorError, e.colorError, e.colorTextDisabled, e.colorBorder, {
    color: e.colorErrorHover,
    borderColor: e.colorErrorHover
  }, {
    color: e.colorErrorActive,
    borderColor: e.colorErrorActive
  })), Yo(e))
}), lm = (e) => Object.assign(Object.assign({}, xc(e)), {
  borderStyle: "dashed"
}), um = (e) => Object.assign(Object.assign(Object.assign({
  color: e.colorLink
}, rt(e.componentCls, {
  color: e.colorLinkHover
}, {
  color: e.colorLinkActive
})), zr(e)), {
  [`&${e.componentCls}-dangerous`]: Object.assign(Object.assign({
    color: e.colorError
  }, rt(e.componentCls, {
    color: e.colorErrorHover
  }, {
    color: e.colorErrorActive
  })), zr(e))
}), fm = (e) => Object.assign(Object.assign(Object.assign({}, rt(e.componentCls, {
  color: e.colorText,
  backgroundColor: e.colorBgTextHover
}, {
  color: e.colorText,
  backgroundColor: e.colorBgTextActive
})), zr(e)), {
  [`&${e.componentCls}-dangerous`]: Object.assign(Object.assign({
    color: e.colorError
  }, zr(e)), rt(e.componentCls, {
    color: e.colorErrorHover,
    backgroundColor: e.colorErrorBg
  }, {
    color: e.colorErrorHover,
    backgroundColor: e.colorErrorBg
  }))
}), dm = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [`${t}-default`]: xc(e),
    [`${t}-primary`]: cm(e),
    [`${t}-dashed`]: lm(e),
    [`${t}-link`]: um(e),
    [`${t}-text`]: fm(e)
  };
}, Ko = function(e) {
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
  } = e, u = Math.max(0, (n - o * i) / 2 - a), f = l - a, m = `${r}-icon-only`;
  return [
    // Size
    {
      [`${r}${t}`]: {
        fontSize: o,
        height: n,
        padding: `${u}px ${f}px`,
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
      [`${r}${r}-circle${t}`]: im(e)
    },
    {
      [`${r}${r}-round${t}`]: am(e)
    }
  ];
}, pm = (e) => Ko(e), hm = (e) => {
  const t = At(e, {
    controlHeight: e.controlHeightSM,
    padding: e.paddingXS,
    buttonPaddingHorizontal: 8,
    borderRadius: e.borderRadiusSM,
    buttonIconOnlyFontSize: e.fontSizeLG - 2
  });
  return Ko(t, `${e.componentCls}-sm`);
}, mm = (e) => {
  const t = At(e, {
    controlHeight: e.controlHeightLG,
    fontSize: e.fontSizeLG,
    borderRadius: e.borderRadiusLG,
    buttonIconOnlyFontSize: e.fontSizeLG + 2
  });
  return Ko(t, `${e.componentCls}-lg`);
}, gm = (e) => {
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
}, vm = zo("Button", (e) => {
  const {
    controlTmpOutline: t,
    paddingContentHorizontal: r
  } = e, n = At(e, {
    colorOutlineDefault: t,
    buttonPaddingHorizontal: r,
    buttonIconOnlyFontSize: e.fontSizeLG,
    buttonFontWeight: 400
  });
  return [
    // Shared
    om(n),
    // Size
    hm(n),
    pm(n),
    mm(n),
    // Block
    gm(n),
    // Group (type, ghost, danger, loading)
    dm(n),
    // Button Group
    nm(n),
    // Space Compact
    Jh(e),
    tm(e)
  ];
});
var ym = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
function bm(e) {
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
const Sm = (e, t) => {
  var r, n;
  const {
    loading: o = !1,
    prefixCls: i,
    type: a = "default",
    danger: s,
    shape: l = "default",
    size: c,
    styles: u,
    disabled: f,
    className: m,
    rootClassName: g,
    children: p,
    icon: d,
    ghost: h = !1,
    block: C = !1,
    // React does not recognize the `htmlType` prop on a DOM element. Here we pick it out of `rest`.
    htmlType: E = "button",
    classNames: A,
    style: T = {}
  } = e, v = ym(e, ["loading", "prefixCls", "type", "danger", "shape", "size", "styles", "disabled", "className", "rootClassName", "children", "icon", "ghost", "block", "htmlType", "classNames", "style"]), {
    getPrefixCls: R,
    autoInsertSpaceInButton: x,
    direction: B,
    button: k
  } = Ne(nt), $ = R("btn", i), [z, w] = vm($), S = Ne(Fs), _ = f ?? S, N = Ne(Cc), j = ba(() => bm(o), [o]), [D, W] = Vt(j.loading), [ee, Z] = Vt(!1), I = ts(t, /* @__PURE__ */ Gc()), L = Vc.count(p) === 1 && !d && !yr(a);
  Ke(() => {
    let G = null;
    j.delay > 0 ? G = setTimeout(() => {
      G = null, W(!0);
    }, j.delay) : W(j.loading);
    function ne() {
      G && (clearTimeout(G), G = null);
    }
    return ne;
  }, [j]), Ke(() => {
    if (!I || !I.current || x === !1)
      return;
    const G = I.current.textContent;
    L && mo(G) ? ee || Z(!0) : ee && Z(!1);
  }, [I]);
  const F = (G) => {
    const {
      onClick: ne
    } = e;
    if (D || _) {
      G.preventDefault();
      return;
    }
    ne?.(G);
  };
  process.env.NODE_ENV !== "production" && qe(!(typeof d == "string" && d.length > 2), "Button", `\`icon\` is using ReactNode instead of string naming in v4. Please check \`${d}\` at https://ant.design/components/icon`), process.env.NODE_ENV !== "production" && qe(!(h && yr(a)), "Button", "`link` or `text` button can't be a `ghost` button.");
  const U = x !== !1, {
    compactSize: b,
    compactItemClassnames: te
  } = Hh($, B), M = {
    large: "lg",
    small: "sm",
    middle: void 0
  }, re = jh((G) => {
    var ne, be;
    return (be = (ne = c ?? b) !== null && ne !== void 0 ? ne : N) !== null && be !== void 0 ? be : G;
  }), X = re && M[re] || "", q = D ? "loading" : d, P = Lu(v, ["navigate"]), se = Te($, w, {
    [`${$}-${l}`]: l !== "default" && l,
    [`${$}-${a}`]: a,
    [`${$}-${X}`]: X,
    [`${$}-icon-only`]: !p && p !== 0 && !!q,
    [`${$}-background-ghost`]: h && !yr(a),
    [`${$}-loading`]: D,
    [`${$}-two-chinese-chars`]: ee && U && !D,
    [`${$}-block`]: C,
    [`${$}-dangerous`]: !!s,
    [`${$}-rtl`]: B === "rtl"
  }, te, m, g, k?.className), H = Object.assign(Object.assign({}, k?.style), T), V = Te(A?.icon, (r = k?.classNames) === null || r === void 0 ? void 0 : r.icon), pe = Object.assign(Object.assign({}, u?.icon || {}), ((n = k?.styles) === null || n === void 0 ? void 0 : n.icon) || {}), Q = d && !D ? /* @__PURE__ */ de.createElement(Ec, {
    prefixCls: $,
    className: V,
    style: pe
  }, d) : /* @__PURE__ */ de.createElement(Uh, {
    existIcon: !!d,
    prefixCls: $,
    loading: !!D
  }), me = p || p === 0 ? qh(p, L && U) : null;
  if (P.href !== void 0)
    return z(/* @__PURE__ */ de.createElement("a", Object.assign({}, P, {
      className: Te(se, {
        [`${$}-disabled`]: _
      }),
      style: H,
      onClick: F,
      ref: I
    }), Q, me));
  let ge = /* @__PURE__ */ de.createElement("button", Object.assign({}, v, {
    type: E,
    className: se,
    style: H,
    onClick: F,
    disabled: _,
    ref: I
  }), Q, me);
  return yr(a) || (ge = /* @__PURE__ */ de.createElement(Lh, {
    disabled: !!D
  }, ge)), z(ge);
}, cn = /* @__PURE__ */ xo(Sm);
process.env.NODE_ENV !== "production" && (cn.displayName = "Button");
cn.Group = Gh;
cn.__ANT_BUTTON = !0;
const Em = cn;
let De = null, ht = (e) => e(), Jt = [], Ur = {};
function Cm() {
  const {
    prefixCls: e,
    getContainer: t,
    duration: r,
    rtl: n,
    maxCount: o,
    top: i
  } = Ur, a = e ?? Js().getPrefixCls("message"), s = t?.() || document.body;
  return {
    prefixCls: a,
    container: s,
    duration: r,
    rtl: n,
    maxCount: o,
    top: i
  };
}
const wm = /* @__PURE__ */ y.forwardRef((e, t) => {
  const r = () => {
    const {
      prefixCls: m,
      container: g,
      maxCount: p,
      duration: d,
      rtl: h,
      top: C
    } = Cm();
    return {
      prefixCls: m,
      getContainer: () => g,
      maxCount: p,
      duration: d,
      rtl: h,
      top: C
    };
  }, [n, o] = y.useState(r), [i, a] = vc(n), s = Js(), l = s.getRootPrefixCls(), c = s.getIconPrefixCls(), u = s.getTheme(), f = () => {
    o(r);
  };
  return y.useEffect(f, []), y.useImperativeHandle(t, () => {
    const m = Object.assign({}, i);
    return Object.keys(m).forEach((g) => {
      m[g] = function() {
        return f(), i[g].apply(i, arguments);
      };
    }), {
      instance: m,
      sync: f
    };
  }), /* @__PURE__ */ y.createElement(Zs, {
    prefixCls: l,
    iconPrefixCls: c,
    theme: u
  }, a);
});
function ln() {
  if (!De) {
    const e = document.createDocumentFragment(), t = {
      fragment: e
    };
    De = t, ht(() => {
      bc(/* @__PURE__ */ y.createElement(wm, {
        ref: (r) => {
          const {
            instance: n,
            sync: o
          } = r || {};
          Promise.resolve().then(() => {
            !t.instance && n && (t.instance = n, t.sync = o, ln());
          });
        }
      }), e);
    });
    return;
  }
  De.instance && (Jt.forEach((e) => {
    const {
      type: t,
      skipped: r
    } = e;
    if (!r)
      switch (t) {
        case "open": {
          ht(() => {
            const n = De.instance.open(Object.assign(Object.assign({}, Ur), e.config));
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
  }), Jt = []);
}
function xm(e) {
  Ur = Object.assign(Object.assign({}, Ur), e), ht(() => {
    var t;
    (t = De?.sync) === null || t === void 0 || t.call(De);
  });
}
function _m(e) {
  const t = Go((r) => {
    let n;
    const o = {
      type: "open",
      config: e,
      resolve: r,
      setCloseFn: (i) => {
        n = i;
      }
    };
    return Jt.push(o), () => {
      n ? ht(() => {
        n();
      }) : o.skipped = !0;
    };
  });
  return ln(), t;
}
function Om(e, t) {
  process.env.NODE_ENV !== "production" && Cp("message");
  const r = Go((n) => {
    let o;
    const i = {
      type: e,
      args: t,
      resolve: n,
      setCloseFn: (a) => {
        o = a;
      }
    };
    return Jt.push(i), () => {
      o ? ht(() => {
        o();
      }) : i.skipped = !0;
    };
  });
  return ln(), r;
}
function Tm(e) {
  Jt.push({
    type: "destroy",
    key: e
  }), ln();
}
const Am = ["success", "info", "warning", "error", "loading"], Rm = {
  open: _m,
  destroy: Tm,
  config: xm,
  useMessage: yh,
  _InternalPanelDoNotUseOrYouWillBeFired: dh
}, _c = Rm;
Am.forEach((e) => {
  _c[e] = function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return Om(e, r);
  };
});
process.env.NODE_ENV;
process.env.NODE_ENV;
const Pm = _c, Oc = er({}), tv = ({ children: e }) => {
  const [t, r] = Pm.useMessage(), n = ({ type: o, message: i }) => {
    t.open({
      type: o ?? "info",
      content: i,
      duration: 5
    });
  };
  return /* @__PURE__ */ Sa(_o, { children: [
    r,
    /* @__PURE__ */ Oe(Oc.Provider, { value: { open: n }, children: e })
  ] });
}, Tc = ({ when: e, children: t }) => e ? t : null, rv = ({ children: e }) => /* @__PURE__ */ Oe(xu, { children: e }), Ac = er({}), Nm = async () => Promise.all([
  import("./react-spring_web.modern-d55cb301.mjs"),
  import("./use-gesture-react.esm-862244eb.mjs")
]), $m = ({ children: e }) => {
  const t = je(), r = je(), n = vu(), o = async () => {
    const [a, s] = await Nm();
    t.current = a, r.current = s, n.on();
  };
  Ke(() => {
    o();
  }, []);
  const i = ba(() => ({
    Spring: t.current,
    Gesture: r.current,
    isLoaded: n.val
  }), [n.val]);
  return /* @__PURE__ */ Oe(Ac.Provider, { value: i, children: /* @__PURE__ */ Oe(Tc, { when: n.val, children: e }) });
}, Im = () => Ne(Ac), nv = () => Ne(Oc), ov = () => {
  Ke(() => (document.body.style.overflow = "hidden", () => {
    document.body.style.overflow = "auto";
  }));
}, iv = (e) => typeof e == "object" && e !== null, Mm = (e) => typeof e == "string", av = (e) => typeof e == "function";
class sv {
  constructor(t) {
    this.isDisabled = !1, this.isDisabled = t ?? this.isDisabled;
  }
  get(t, r) {
    if (this.isDisabled)
      return r;
    const n = localStorage.getItem(t);
    return n ? km(n) ? JSON.parse(n) : n : r;
  }
  set(t, r) {
    if (!(this.isDisabled || !(t in gu))) {
      if (Mm(r))
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
const km = (e) => {
  try {
    JSON.parse(e);
  } catch {
    return !1;
  }
  return !0;
}, cv = ({ children: e, override: t, ...r }) => /* @__PURE__ */ Oe(Zs, { theme: {
  token: { colorPrimary: t }
}, children: /* @__PURE__ */ Oe(Em, { ...r, children: e }) });
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
function Lm() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Dm() {
  let [, e] = Vt(/* @__PURE__ */ Object.create(null));
  return Yc(() => {
    e(/* @__PURE__ */ Object.create(null));
  }, []);
}
var jm = Lm() ? ya : Ke, Fm = ({
  children: e,
  type: t = "reach-portal",
  containerRef: r
}) => {
  let n = y.useRef(null), o = y.useRef(null), i = Dm();
  return y.useEffect(() => {
    r != null && (typeof r != "object" || !("current" in r) ? console.warn("@reach/portal: Invalid value passed to the `containerRef` of a `Portal`. The portal will be appended to the document body, but if you want to attach it to another DOM node you must pass a valid React ref object to `containerRef`.") : r.current == null && console.warn("@reach/portal: A ref was passed to the `containerRef` prop of a `Portal`, but no DOM node was attached to it. Be sure to pass the ref to a DOM component.\n\nIf you are forwarding the ref from another component, be sure to use the React.forwardRef API. See https://reactjs.org/docs/forwarding-refs.html."));
  }, [r]), jm(() => {
    if (!n.current)
      return;
    let a = n.current.ownerDocument, s = r?.current || a.body;
    return o.current = a?.createElement(t), s.appendChild(o.current), i(), () => {
      o.current && s && s.removeChild(o.current);
    };
  }, [t, i, r]), o.current ? Ea(e, o.current) : /* @__PURE__ */ y.createElement("span", {
    ref: n
  });
}, Rc = ({
  unstable_skipInitialRender: e,
  ...t
}) => {
  let [r, n] = y.useState(!1);
  return y.useEffect(() => {
    e && n(!0);
  }, [e]), e && !r ? null : /* @__PURE__ */ y.createElement(Fm, {
    ...t
  });
};
Rc.displayName = "Portal";
const Hm = () => ({
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
var go = { exports: {} }, ue = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ia;
function Bm() {
  if (ia)
    return ue;
  ia = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), p;
  p = Symbol.for("react.module.reference");
  function d(h) {
    if (typeof h == "object" && h !== null) {
      var C = h.$$typeof;
      switch (C) {
        case e:
          switch (h = h.type, h) {
            case r:
            case o:
            case n:
            case c:
            case u:
              return h;
            default:
              switch (h = h && h.$$typeof, h) {
                case s:
                case a:
                case l:
                case m:
                case f:
                case i:
                  return h;
                default:
                  return C;
              }
          }
        case t:
          return C;
      }
    }
  }
  return ue.ContextConsumer = a, ue.ContextProvider = i, ue.Element = e, ue.ForwardRef = l, ue.Fragment = r, ue.Lazy = m, ue.Memo = f, ue.Portal = t, ue.Profiler = o, ue.StrictMode = n, ue.Suspense = c, ue.SuspenseList = u, ue.isAsyncMode = function() {
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
    return d(h) === f;
  }, ue.isPortal = function(h) {
    return d(h) === t;
  }, ue.isProfiler = function(h) {
    return d(h) === o;
  }, ue.isStrictMode = function(h) {
    return d(h) === n;
  }, ue.isSuspense = function(h) {
    return d(h) === c;
  }, ue.isSuspenseList = function(h) {
    return d(h) === u;
  }, ue.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === r || h === o || h === n || h === c || h === u || h === g || typeof h == "object" && h !== null && (h.$$typeof === m || h.$$typeof === f || h.$$typeof === i || h.$$typeof === a || h.$$typeof === l || h.$$typeof === p || h.getModuleId !== void 0);
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
var aa;
function zm() {
  return aa || (aa = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), p = !1, d = !1, h = !1, C = !1, E = !1, A;
    A = Symbol.for("react.module.reference");
    function T(H) {
      return !!(typeof H == "string" || typeof H == "function" || H === r || H === o || E || H === n || H === c || H === u || C || H === g || p || d || h || typeof H == "object" && H !== null && (H.$$typeof === m || H.$$typeof === f || H.$$typeof === i || H.$$typeof === a || H.$$typeof === l || // This needs to include all possible module reference object
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
            var pe = H.type;
            switch (pe) {
              case r:
              case o:
              case n:
              case c:
              case u:
                return pe;
              default:
                var Q = pe && pe.$$typeof;
                switch (Q) {
                  case s:
                  case a:
                  case l:
                  case m:
                  case f:
                  case i:
                    return Q;
                  default:
                    return V;
                }
            }
          case t:
            return V;
        }
      }
    }
    var R = a, x = i, B = e, k = l, $ = r, z = m, w = f, S = t, _ = o, N = n, j = c, D = u, W = !1, ee = !1;
    function Z(H) {
      return W || (W = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function ae(H) {
      return ee || (ee = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
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
    function U(H) {
      return v(H) === l;
    }
    function b(H) {
      return v(H) === r;
    }
    function te(H) {
      return v(H) === m;
    }
    function M(H) {
      return v(H) === f;
    }
    function re(H) {
      return v(H) === t;
    }
    function X(H) {
      return v(H) === o;
    }
    function q(H) {
      return v(H) === n;
    }
    function P(H) {
      return v(H) === c;
    }
    function se(H) {
      return v(H) === u;
    }
    fe.ContextConsumer = R, fe.ContextProvider = x, fe.Element = B, fe.ForwardRef = k, fe.Fragment = $, fe.Lazy = z, fe.Memo = w, fe.Portal = S, fe.Profiler = _, fe.StrictMode = N, fe.Suspense = j, fe.SuspenseList = D, fe.isAsyncMode = Z, fe.isConcurrentMode = ae, fe.isContextConsumer = I, fe.isContextProvider = L, fe.isElement = F, fe.isForwardRef = U, fe.isFragment = b, fe.isLazy = te, fe.isMemo = M, fe.isPortal = re, fe.isProfiler = X, fe.isStrictMode = q, fe.isSuspense = P, fe.isSuspenseList = se, fe.isValidElementType = T, fe.typeOf = v;
  }()), fe;
}
process.env.NODE_ENV === "production" ? go.exports = Bm() : go.exports = zm();
var qo = go.exports;
function Um(e) {
  function t(I, L, F, U, b) {
    for (var te = 0, M = 0, re = 0, X = 0, q, P, se = 0, H = 0, V, pe = V = q = 0, Q = 0, me = 0, ge = 0, G = 0, ne = F.length, be = ne - 1, Ce, K = "", ve = "", Dt = "", jt = "", We; Q < ne; ) {
      if (P = F.charCodeAt(Q), Q === be && M + X + re + te !== 0 && (M !== 0 && (P = M === 47 ? 10 : 47), X = re = te = 0, ne++, be++), M + X + re + te === 0) {
        if (Q === be && (0 < me && (K = K.replace(m, "")), 0 < K.trim().length)) {
          switch (P) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              K += F.charAt(Q);
          }
          P = 59;
        }
        switch (P) {
          case 123:
            for (K = K.trim(), q = K.charCodeAt(0), V = 1, G = ++Q; Q < ne; ) {
              switch (P = F.charCodeAt(Q)) {
                case 123:
                  V++;
                  break;
                case 125:
                  V--;
                  break;
                case 47:
                  switch (P = F.charCodeAt(Q + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (pe = Q + 1; pe < be; ++pe)
                          switch (F.charCodeAt(pe)) {
                            case 47:
                              if (P === 42 && F.charCodeAt(pe - 1) === 42 && Q + 2 !== pe) {
                                Q = pe + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (P === 47) {
                                Q = pe + 1;
                                break e;
                              }
                          }
                        Q = pe;
                      }
                  }
                  break;
                case 91:
                  P++;
                case 40:
                  P++;
                case 34:
                case 39:
                  for (; Q++ < be && F.charCodeAt(Q) !== P; )
                    ;
              }
              if (V === 0)
                break;
              Q++;
            }
            switch (V = F.substring(G, Q), q === 0 && (q = (K = K.replace(f, "").trim()).charCodeAt(0)), q) {
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
                if (V = t(L, me, V, P, b + 1), G = V.length, 0 < W && (me = r(j, K, ge), We = s(3, V, me, L, S, w, G, P, b, U), K = me.join(""), We !== void 0 && (G = (V = We.trim()).length) === 0 && (P = 0, V = "")), 0 < G)
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
                      V = K + V, U === 112 && (V = (ve += V, ""));
                  }
                else
                  V = "";
                break;
              default:
                V = t(L, r(L, K, ge), V, U, b + 1);
            }
            Dt += V, V = ge = me = pe = q = 0, K = "", P = F.charCodeAt(++Q);
            break;
          case 125:
          case 59:
            if (K = (0 < me ? K.replace(m, "") : K).trim(), 1 < (G = K.length))
              switch (pe === 0 && (q = K.charCodeAt(0), q === 45 || 96 < q && 123 > q) && (G = (K = K.replace(" ", ":")).length), 0 < W && (We = s(1, K, L, I, S, w, ve.length, U, b, U)) !== void 0 && (G = (K = We.trim()).length) === 0 && (K = "\0\0"), q = K.charCodeAt(0), P = K.charCodeAt(1), q) {
                case 0:
                  break;
                case 64:
                  if (P === 105 || P === 99) {
                    jt += K + F.charAt(Q);
                    break;
                  }
                default:
                  K.charCodeAt(G - 1) !== 58 && (ve += o(K, q, P, K.charCodeAt(2)));
              }
            ge = me = pe = q = 0, K = "", P = F.charCodeAt(++Q);
        }
      }
      switch (P) {
        case 13:
        case 10:
          M === 47 ? M = 0 : 1 + q === 0 && U !== 107 && 0 < K.length && (me = 1, K += "\0"), 0 < W * Z && s(0, K, L, I, S, w, ve.length, U, b, U), w = 1, S++;
          break;
        case 59:
        case 125:
          if (M + X + re + te === 0) {
            w++;
            break;
          }
        default:
          switch (w++, Ce = F.charAt(Q), P) {
            case 9:
            case 32:
              if (X + te + M === 0)
                switch (se) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    Ce = "";
                    break;
                  default:
                    P !== 32 && (Ce = " ");
                }
              break;
            case 0:
              Ce = "\\0";
              break;
            case 12:
              Ce = "\\f";
              break;
            case 11:
              Ce = "\\v";
              break;
            case 38:
              X + M + te === 0 && (me = ge = 1, Ce = "\f" + Ce);
              break;
            case 108:
              if (X + M + te + _ === 0 && 0 < pe)
                switch (Q - pe) {
                  case 2:
                    se === 112 && F.charCodeAt(Q - 3) === 58 && (_ = se);
                  case 8:
                    H === 111 && (_ = H);
                }
              break;
            case 58:
              X + M + te === 0 && (pe = Q);
              break;
            case 44:
              M + re + X + te === 0 && (me = 1, Ce += "\r");
              break;
            case 34:
            case 39:
              M === 0 && (X = X === P ? 0 : X === 0 ? P : X);
              break;
            case 91:
              X + M + re === 0 && te++;
              break;
            case 93:
              X + M + re === 0 && te--;
              break;
            case 41:
              X + M + te === 0 && re--;
              break;
            case 40:
              if (X + M + te === 0) {
                if (q === 0)
                  switch (2 * se + 3 * H) {
                    case 533:
                      break;
                    default:
                      q = 1;
                  }
                re++;
              }
              break;
            case 64:
              M + re + X + te + pe + V === 0 && (V = 1);
              break;
            case 42:
            case 47:
              if (!(0 < X + te + re))
                switch (M) {
                  case 0:
                    switch (2 * P + 3 * F.charCodeAt(Q + 1)) {
                      case 235:
                        M = 47;
                        break;
                      case 220:
                        G = Q, M = 42;
                    }
                    break;
                  case 42:
                    P === 47 && se === 42 && G + 2 !== Q && (F.charCodeAt(G + 2) === 33 && (ve += F.substring(G, Q + 1)), Ce = "", M = 0);
                }
          }
          M === 0 && (K += Ce);
      }
      H = se, se = P, Q++;
    }
    if (G = ve.length, 0 < G) {
      if (me = L, 0 < W && (We = s(2, ve, me, I, S, w, G, U, b, U), We !== void 0 && (ve = We).length === 0))
        return jt + ve + Dt;
      if (ve = me.join(",") + "{" + ve + "}", N * _ !== 0) {
        switch (N !== 2 || i(ve, 2) || (_ = 0), _) {
          case 111:
            ve = ve.replace(T, ":-moz-$1") + ve;
            break;
          case 112:
            ve = ve.replace(A, "::-webkit-input-$1") + ve.replace(A, "::-moz-$1") + ve.replace(A, ":-ms-input-$1") + ve;
        }
        _ = 0;
      }
    }
    return jt + ve + Dt;
  }
  function r(I, L, F) {
    var U = L.trim().split(h);
    L = U;
    var b = U.length, te = I.length;
    switch (te) {
      case 0:
      case 1:
        var M = 0;
        for (I = te === 0 ? "" : I[0] + " "; M < b; ++M)
          L[M] = n(I, L[M], F).trim();
        break;
      default:
        var re = M = 0;
        for (L = []; M < b; ++M)
          for (var X = 0; X < te; ++X)
            L[re++] = n(I[X] + " ", U[M], F).trim();
    }
    return L;
  }
  function n(I, L, F) {
    var U = L.charCodeAt(0);
    switch (33 > U && (U = (L = L.trim()).charCodeAt(0)), U) {
      case 38:
        return L.replace(C, "$1" + I.trim());
      case 58:
        return I.trim() + L.replace(C, "$1" + I.trim());
      default:
        if (0 < 1 * F && 0 < L.indexOf("\f"))
          return L.replace(C, (I.charCodeAt(0) === 58 ? "" : "$1") + I.trim());
    }
    return I + L;
  }
  function o(I, L, F, U) {
    var b = I + ";", te = 2 * L + 3 * F + 4 * U;
    if (te === 944) {
      I = b.indexOf(":", 9) + 1;
      var M = b.substring(I, b.length - 1).trim();
      return M = b.substring(0, I).trim() + M + ";", N === 1 || N === 2 && i(M, 1) ? "-webkit-" + M + M : M;
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
        return M = b.substring(b.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + M + "-webkit-" + b + "-ms-flex-pack" + M + b;
      case 1005:
        return p.test(b) ? b.replace(g, ":-webkit-") + b.replace(g, ":-moz-") + b : b;
      case 1e3:
        switch (M = b.substring(13).trim(), L = M.indexOf("-") + 1, M.charCodeAt(0) + M.charCodeAt(L)) {
          case 226:
            M = b.replace(v, "tb");
            break;
          case 232:
            M = b.replace(v, "tb-rl");
            break;
          case 220:
            M = b.replace(v, "lr");
            break;
          default:
            return b;
        }
        return "-webkit-" + b + "-ms-" + M + b;
      case 1017:
        if (b.indexOf("sticky", 9) === -1)
          break;
      case 975:
        switch (L = (b = I).length - 10, M = (b.charCodeAt(L) === 33 ? b.substring(0, L) : b).substring(I.indexOf(":", 7) + 1).trim(), te = M.charCodeAt(0) + (M.charCodeAt(7) | 0)) {
          case 203:
            if (111 > M.charCodeAt(8))
              break;
          case 115:
            b = b.replace(M, "-webkit-" + M) + ";" + b;
            break;
          case 207:
          case 102:
            b = b.replace(M, "-webkit-" + (102 < te ? "inline-" : "") + "box") + ";" + b.replace(M, "-webkit-" + M) + ";" + b.replace(M, "-ms-" + M + "box") + ";" + b;
        }
        return b + ";";
      case 938:
        if (b.charCodeAt(5) === 45)
          switch (b.charCodeAt(6)) {
            case 105:
              return M = b.replace("-items", ""), "-webkit-" + b + "-webkit-box-" + M + "-ms-flex-" + M + b;
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
          return (M = I.substring(I.indexOf(":") + 1)).charCodeAt(0) === 115 ? o(I.replace("stretch", "fill-available"), L, F, U).replace(":fill-available", ":stretch") : b.replace(M, "-webkit-" + M) + b.replace(M, "-moz-" + M.replace("fill-", "")) + b;
        break;
      case 962:
        if (b = "-webkit-" + b + (b.charCodeAt(5) === 102 ? "-ms-" + b : "") + b, F + U === 211 && b.charCodeAt(13) === 105 && 0 < b.indexOf("transform", 10))
          return b.substring(0, b.indexOf(";", 27) + 1).replace(d, "$1-webkit-$2") + b;
    }
    return b;
  }
  function i(I, L) {
    var F = I.indexOf(L === 1 ? ":" : "{"), U = I.substring(0, L !== 3 ? F : 10);
    return F = I.substring(F + 1, I.length - 1), ee(L !== 2 ? U : U.replace(k, "$1"), F, L);
  }
  function a(I, L) {
    var F = o(L, L.charCodeAt(0), L.charCodeAt(1), L.charCodeAt(2));
    return F !== L + ";" ? F.replace(x, " or ($1)").substring(4) : "(" + L + ")";
  }
  function s(I, L, F, U, b, te, M, re, X, q) {
    for (var P = 0, se = L, H; P < W; ++P)
      switch (H = D[P].call(u, I, se, F, U, b, te, M, re, X, q)) {
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
        W = D.length = 0;
        break;
      default:
        if (typeof I == "function")
          D[W++] = I;
        else if (typeof I == "object")
          for (var L = 0, F = I.length; L < F; ++L)
            l(I[L]);
        else
          Z = !!I | 0;
    }
    return l;
  }
  function c(I) {
    return I = I.prefix, I !== void 0 && (ee = null, I ? typeof I != "function" ? N = 1 : (N = 2, ee = I) : N = 0), c;
  }
  function u(I, L) {
    var F = I;
    if (33 > F.charCodeAt(0) && (F = F.trim()), ae = F, F = [ae], 0 < W) {
      var U = s(-1, L, F, F, S, w, 0, 0, 0, 0);
      U !== void 0 && typeof U == "string" && (L = U);
    }
    var b = t(j, F, L, 0, 0);
    return 0 < W && (U = s(-2, b, F, F, S, w, b.length, 0, 0, 0), U !== void 0 && (b = U)), ae = "", _ = 0, w = S = 1, b;
  }
  var f = /^\0+/g, m = /[\0\r\f]/g, g = /: */g, p = /zoo|gra/, d = /([,: ])(transform)/g, h = /,\r+?/g, C = /([\t\r\n ])*\f?&/g, E = /@(k\w+)\s*(\S*)\s*/, A = /::(place)/g, T = /:(read-only)/g, v = /[svh]\w+-[tblr]{2}/, R = /\(\s*(.*)\s*\)/g, x = /([\s\S]*?);/g, B = /-self|flex-/g, k = /[^]*?(:[rp][el]a[\w-]+)[^]*/, $ = /stretch|:\s*\w+\-(?:conte|avail)/, z = /([^-])(image-set\()/, w = 1, S = 1, _ = 0, N = 1, j = [], D = [], W = 0, ee = null, Z = 0, ae = "";
  return u.use = l, u.set = c, e !== void 0 && c(e), u;
}
function Wm(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var Vm = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, sa = /* @__PURE__ */ Wm(
  function(e) {
    return Vm.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Xo = qa, Gm = {
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
}, Ym = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, Km = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Pc = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Qo = {};
Qo[Xo.ForwardRef] = Km;
Qo[Xo.Memo] = Pc;
function ca(e) {
  return Xo.isMemo(e) ? Pc : Qo[e.$$typeof] || Gm;
}
var qm = Object.defineProperty, Xm = Object.getOwnPropertyNames, la = Object.getOwnPropertySymbols, Qm = Object.getOwnPropertyDescriptor, Jm = Object.getPrototypeOf, ua = Object.prototype;
function Nc(e, t, r) {
  if (typeof t != "string") {
    if (ua) {
      var n = Jm(t);
      n && n !== ua && Nc(e, n, r);
    }
    var o = Xm(t);
    la && (o = o.concat(la(t)));
    for (var i = ca(e), a = ca(t), s = 0; s < o.length; ++s) {
      var l = o[s];
      if (!Ym[l] && !(r && r[l]) && !(a && a[l]) && !(i && i[l])) {
        var c = Qm(t, l);
        try {
          qm(e, l, c);
        } catch {
        }
      }
    }
  }
  return e;
}
var Zm = Nc;
const eg = /* @__PURE__ */ Ya(Zm);
function et() {
  return (et = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }).apply(this, arguments);
}
var fa = function(e, t) {
  for (var r = [e[0]], n = 0, o = t.length; n < o; n += 1)
    r.push(t[n], e[n + 1]);
  return r;
}, vo = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !qo.typeOf(e);
}, Wr = Object.freeze([]), at = Object.freeze({});
function Zt(e) {
  return typeof e == "function";
}
function yo(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function Jo(e) {
  return e && typeof e.styledComponentId == "string";
}
var Rt = typeof process < "u" && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Zo = typeof window < "u" && "HTMLElement" in window, tg = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), rg = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function ng() {
  for (var e = arguments.length <= 0 ? void 0 : arguments[0], t = [], r = 1, n = arguments.length; r < n; r += 1)
    t.push(r < 0 || arguments.length <= r ? void 0 : arguments[r]);
  return t.forEach(function(o) {
    e = e.replace(/%[a-z]/, o);
  }), e;
}
function Lt(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  throw process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (r.length > 0 ? " Args: " + r.join(", ") : "")) : new Error(ng.apply(void 0, [rg[e]].concat(r)).trim());
}
var og = function() {
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
        (a <<= 1) < 0 && Lt(16, "" + r);
      this.groupSizes = new Uint32Array(a), this.groupSizes.set(o), this.length = a;
      for (var s = i; s < a; s++)
        this.groupSizes[s] = 0;
    }
    for (var l = this.indexOfGroup(r + 1), c = 0, u = n.length; c < u; c++)
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
}(), Mr = /* @__PURE__ */ new Map(), Vr = /* @__PURE__ */ new Map(), Wt = 1, br = function(e) {
  if (Mr.has(e))
    return Mr.get(e);
  for (; Vr.has(Wt); )
    Wt++;
  var t = Wt++;
  return process.env.NODE_ENV !== "production" && ((0 | t) < 0 || t > 1 << 30) && Lt(16, "" + t), Mr.set(e, t), Vr.set(t, e), t;
}, ig = function(e) {
  return Vr.get(e);
}, ag = function(e, t) {
  t >= Wt && (Wt = t + 1), Mr.set(e, t), Vr.set(t, e);
}, sg = "style[" + Rt + '][data-styled-version="5.3.6"]', cg = new RegExp("^" + Rt + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), lg = function(e, t, r) {
  for (var n, o = r.split(","), i = 0, a = o.length; i < a; i++)
    (n = o[i]) && e.registerName(t, n);
}, ug = function(e, t) {
  for (var r = (t.textContent || "").split(`/*!sc*/
`), n = [], o = 0, i = r.length; o < i; o++) {
    var a = r[o].trim();
    if (a) {
      var s = a.match(cg);
      if (s) {
        var l = 0 | parseInt(s[1], 10), c = s[2];
        l !== 0 && (ag(c, l), lg(e, c, s[3]), e.getTag().insertRules(l, n)), n.length = 0;
      } else
        n.push(a);
    }
  }
}, fg = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, $c = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), o = function(s) {
    for (var l = s.childNodes, c = l.length; c >= 0; c--) {
      var u = l[c];
      if (u && u.nodeType === 1 && u.hasAttribute(Rt))
        return u;
    }
  }(r), i = o !== void 0 ? o.nextSibling : null;
  n.setAttribute(Rt, "active"), n.setAttribute("data-styled-version", "5.3.6");
  var a = fg();
  return a && n.setAttribute("nonce", a), r.insertBefore(n, i), n;
}, dg = function() {
  function e(r) {
    var n = this.element = $c(r);
    n.appendChild(document.createTextNode("")), this.sheet = function(o) {
      if (o.sheet)
        return o.sheet;
      for (var i = document.styleSheets, a = 0, s = i.length; a < s; a++) {
        var l = i[a];
        if (l.ownerNode === o)
          return l;
      }
      Lt(17);
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
}(), pg = function() {
  function e(r) {
    var n = this.element = $c(r);
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
}(), hg = function() {
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
}(), da = Zo, mg = { isServer: !Zo, useCSSOMInjection: !tg }, Ic = function() {
  function e(r, n, o) {
    r === void 0 && (r = at), n === void 0 && (n = {}), this.options = et({}, mg, {}, r), this.gs = n, this.names = new Map(o), this.server = !!r.isServer, !this.server && Zo && da && (da = !1, function(i) {
      for (var a = document.querySelectorAll(sg), s = 0, l = a.length; s < l; s++) {
        var c = a[s];
        c && c.getAttribute(Rt) !== "active" && (ug(i, c), c.parentNode && c.parentNode.removeChild(c));
      }
    }(this));
  }
  e.registerId = function(r) {
    return br(r);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(r, n) {
    return n === void 0 && (n = !0), new e(et({}, this.options, {}, r), this.gs, n && this.names || void 0);
  }, t.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (o = (n = this.options).isServer, i = n.useCSSOMInjection, a = n.target, r = o ? new hg(a) : i ? new dg(a) : new pg(a), new og(r)));
    var r, n, o, i, a;
  }, t.hasNameForId = function(r, n) {
    return this.names.has(r) && this.names.get(r).has(n);
  }, t.registerName = function(r, n) {
    if (br(r), this.names.has(r))
      this.names.get(r).add(n);
    else {
      var o = /* @__PURE__ */ new Set();
      o.add(n), this.names.set(r, o);
    }
  }, t.insertRules = function(r, n, o) {
    this.registerName(r, n), this.getTag().insertRules(br(r), o);
  }, t.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, t.clearRules = function(r) {
    this.getTag().clearGroup(br(r)), this.clearNames(r);
  }, t.clearTag = function() {
    this.tag = void 0;
  }, t.toString = function() {
    return function(r) {
      for (var n = r.getTag(), o = n.length, i = "", a = 0; a < o; a++) {
        var s = ig(a);
        if (s !== void 0) {
          var l = r.names.get(s), c = n.getGroup(a);
          if (l && c && l.size) {
            var u = Rt + ".g" + a + '[id="' + s + '"]', f = "";
            l !== void 0 && l.forEach(function(m) {
              m.length > 0 && (f += m + ",");
            }), i += "" + c + u + '{content:"' + f + `"}/*!sc*/
`;
          }
        }
      }
      return i;
    }(this);
  }, e;
}(), gg = /(a)(d)/gi, pa = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function bo(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0)
    r = pa(t % 52) + r;
  return (pa(t % 52) + r).replace(gg, "$1-$2");
}
var dt = function(e, t) {
  for (var r = t.length; r; )
    e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, Mc = function(e) {
  return dt(5381, e);
};
function vg(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (Zt(r) && !Jo(r))
      return !1;
  }
  return !0;
}
var yg = Mc("5.3.6"), bg = function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (n === void 0 || n.isStatic) && vg(t), this.componentId = r, this.baseHash = dt(yg, r), this.baseStyle = n, Ic.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, n) {
    var o = this.componentId, i = [];
    if (this.baseStyle && i.push(this.baseStyle.generateAndInjectStyles(t, r, n)), this.isStatic && !n.hash)
      if (this.staticRulesId && r.hasNameForId(o, this.staticRulesId))
        i.push(this.staticRulesId);
      else {
        var a = Pt(this.rules, t, r, n).join(""), s = bo(dt(this.baseHash, a) >>> 0);
        if (!r.hasNameForId(o, s)) {
          var l = n(a, "." + s, void 0, o);
          r.insertRules(o, s, l);
        }
        i.push(s), this.staticRulesId = s;
      }
    else {
      for (var c = this.rules.length, u = dt(this.baseHash, n.hash), f = "", m = 0; m < c; m++) {
        var g = this.rules[m];
        if (typeof g == "string")
          f += g, process.env.NODE_ENV !== "production" && (u = dt(u, g + m));
        else if (g) {
          var p = Pt(g, t, r, n), d = Array.isArray(p) ? p.join("") : p;
          u = dt(u, d + m), f += d;
        }
      }
      if (f) {
        var h = bo(u >>> 0);
        if (!r.hasNameForId(o, h)) {
          var C = n(f, "." + h, void 0, o);
          r.insertRules(o, h, C);
        }
        i.push(h);
      }
    }
    return i.join(" ");
  }, e;
}(), Sg = /^\s*\/\/.*$/gm, Eg = [":", "[", ".", "#"];
function Cg(e) {
  var t, r, n, o, i = e === void 0 ? at : e, a = i.options, s = a === void 0 ? at : a, l = i.plugins, c = l === void 0 ? Wr : l, u = new Um(s), f = [], m = function(d) {
    function h(C) {
      if (C)
        try {
          d(C + "}");
        } catch {
        }
    }
    return function(C, E, A, T, v, R, x, B, k, $) {
      switch (C) {
        case 1:
          if (k === 0 && E.charCodeAt(0) === 64)
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
    f.push(d);
  }), g = function(d, h, C) {
    return h === 0 && Eg.indexOf(C[r.length]) !== -1 || C.match(o) ? d : "." + t;
  };
  function p(d, h, C, E) {
    E === void 0 && (E = "&");
    var A = d.replace(Sg, ""), T = h && C ? C + " " + h + " { " + A + " }" : A;
    return t = E, r = h, n = new RegExp("\\" + r + "\\b", "g"), o = new RegExp("(\\" + r + "\\b){2,}"), u(C || !h ? "" : h, T);
  }
  return u.use([].concat(c, [function(d, h, C) {
    d === 2 && C.length && C[0].lastIndexOf(r) > 0 && (C[0] = C[0].replace(n, g));
  }, m, function(d) {
    if (d === -2) {
      var h = f;
      return f = [], h;
    }
  }])), p.hash = c.length ? c.reduce(function(d, h) {
    return h.name || Lt(15), dt(d, h.name);
  }, 5381).toString() : "", p;
}
var kc = de.createContext();
kc.Consumer;
var Lc = de.createContext(), wg = (Lc.Consumer, new Ic()), So = Cg();
function xg() {
  return Ne(kc) || wg;
}
function _g() {
  return Ne(Lc) || So;
}
var Og = function() {
  function e(t, r) {
    var n = this;
    this.inject = function(o, i) {
      i === void 0 && (i = So);
      var a = n.name + i.hash;
      o.hasNameForId(n.id, a) || o.insertRules(n.id, a, i(n.rules, a, "@keyframes"));
    }, this.toString = function() {
      return Lt(12, String(n.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = r;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = So), this.name + t.hash;
  }, e;
}(), Tg = /([A-Z])/, Ag = /([A-Z])/g, Rg = /^ms-/, Pg = function(e) {
  return "-" + e.toLowerCase();
};
function ha(e) {
  return Tg.test(e) ? e.replace(Ag, Pg).replace(Rg, "-ms-") : e;
}
var ma = function(e) {
  return e == null || e === !1 || e === "";
};
function Pt(e, t, r, n) {
  if (Array.isArray(e)) {
    for (var o, i = [], a = 0, s = e.length; a < s; a += 1)
      (o = Pt(e[a], t, r, n)) !== "" && (Array.isArray(o) ? i.push.apply(i, o) : i.push(o));
    return i;
  }
  if (ma(e))
    return "";
  if (Jo(e))
    return "." + e.styledComponentId;
  if (Zt(e)) {
    if (typeof (c = e) != "function" || c.prototype && c.prototype.isReactComponent || !t)
      return e;
    var l = e(t);
    return process.env.NODE_ENV !== "production" && qo.isElement(l) && console.warn(yo(e) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), Pt(l, t, r, n);
  }
  var c;
  return e instanceof Og ? r ? (e.inject(r, n), e.getName(n)) : e : vo(e) ? function u(f, m) {
    var g, p, d = [];
    for (var h in f)
      f.hasOwnProperty(h) && !ma(f[h]) && (Array.isArray(f[h]) && f[h].isCss || Zt(f[h]) ? d.push(ha(h) + ":", f[h], ";") : vo(f[h]) ? d.push.apply(d, u(f[h], h)) : d.push(ha(h) + ": " + (g = h, (p = f[h]) == null || typeof p == "boolean" || p === "" ? "" : typeof p != "number" || p === 0 || g in gs ? String(p).trim() : p + "px") + ";"));
    return m ? [m + " {"].concat(d, ["}"]) : d;
  }(e) : e.toString();
}
var ga = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function lt(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  return Zt(e) || vo(e) ? ga(Pt(fa(Wr, [e].concat(r)))) : r.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : ga(Pt(fa(e, r)));
}
var va = /invalid hook call/i, Sr = /* @__PURE__ */ new Set(), Ng = function(e, t) {
  if (process.env.NODE_ENV !== "production") {
    var r = "The component " + e + (t ? ' with the id of "' + t + '"' : "") + ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, n = console.error;
    try {
      var o = !0;
      console.error = function(i) {
        if (va.test(i))
          o = !1, Sr.delete(r);
        else {
          for (var a = arguments.length, s = new Array(a > 1 ? a - 1 : 0), l = 1; l < a; l++)
            s[l - 1] = arguments[l];
          n.apply(void 0, [i].concat(s));
        }
      }, je(), o && !Sr.has(r) && (console.warn(r), Sr.add(r));
    } catch (i) {
      va.test(i.message) && Sr.delete(r);
    } finally {
      console.error = n;
    }
  }
}, $g = function(e, t, r) {
  return r === void 0 && (r = at), e.theme !== r.theme && e.theme || t || r.theme;
}, Ig = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Mg = /(^-|-$)/g;
function In(e) {
  return e.replace(Ig, "-").replace(Mg, "");
}
var kg = function(e) {
  return bo(Mc(e) >>> 0);
};
function Er(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var Eo = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, Lg = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function Dg(e, t, r) {
  var n = e[r];
  Eo(t) && Eo(n) ? Dc(n, t) : e[r] = t;
}
function Dc(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  for (var o = 0, i = r; o < i.length; o++) {
    var a = i[o];
    if (Eo(a))
      for (var s in a)
        Lg(s) && Dg(e, a[s], s);
  }
  return e;
}
var jc = de.createContext();
jc.Consumer;
var Mn = {};
function Fc(e, t, r) {
  var n = Jo(e), o = !Er(e), i = t.attrs, a = i === void 0 ? Wr : i, s = t.componentId, l = s === void 0 ? function(E, A) {
    var T = typeof E != "string" ? "sc" : In(E);
    Mn[T] = (Mn[T] || 0) + 1;
    var v = T + "-" + kg("5.3.6" + T + Mn[T]);
    return A ? A + "-" + v : v;
  }(t.displayName, t.parentComponentId) : s, c = t.displayName, u = c === void 0 ? function(E) {
    return Er(E) ? "styled." + E : "Styled(" + yo(E) + ")";
  }(e) : c, f = t.displayName && t.componentId ? In(t.displayName) + "-" + t.componentId : t.componentId || l, m = n && e.attrs ? Array.prototype.concat(e.attrs, a).filter(Boolean) : a, g = t.shouldForwardProp;
  n && e.shouldForwardProp && (g = t.shouldForwardProp ? function(E, A, T) {
    return e.shouldForwardProp(E, A, T) && t.shouldForwardProp(E, A, T);
  } : e.shouldForwardProp);
  var p, d = new bg(r, f, n ? e.componentStyle : void 0), h = d.isStatic && a.length === 0, C = function(E, A) {
    return function(T, v, R, x) {
      var B = T.attrs, k = T.componentStyle, $ = T.defaultProps, z = T.foldedComponentIds, w = T.shouldForwardProp, S = T.styledComponentId, _ = T.target;
      process.env.NODE_ENV !== "production" && ni(S);
      var N = function(U, b, te) {
        U === void 0 && (U = at);
        var M = et({}, b, { theme: U }), re = {};
        return te.forEach(function(X) {
          var q, P, se, H = X;
          for (q in Zt(H) && (H = H(M)), H)
            M[q] = re[q] = q === "className" ? (P = re[q], se = H[q], P && se ? P + " " + se : P || se) : H[q];
        }), [M, re];
      }($g(v, Ne(jc), $) || at, v, B), j = N[0], D = N[1], W = function(U, b, te, M) {
        var re = xg(), X = _g(), q = b ? U.generateAndInjectStyles(at, re, X) : U.generateAndInjectStyles(te, re, X);
        return process.env.NODE_ENV !== "production" && ni(q), process.env.NODE_ENV !== "production" && !b && M && M(q), q;
      }(k, x, j, process.env.NODE_ENV !== "production" ? T.warnTooManyClasses : void 0), ee = R, Z = D.$as || v.$as || D.as || v.as || _, ae = Er(Z), I = D !== v ? et({}, v, {}, D) : v, L = {};
      for (var F in I)
        F[0] !== "$" && F !== "as" && (F === "forwardedAs" ? L.as = I[F] : (w ? w(F, sa, Z) : !ae || sa(F)) && (L[F] = I[F]));
      return v.style && D.style !== v.style && (L.style = et({}, v.style, {}, D.style)), L.className = Array.prototype.concat(z, S, W !== S ? W : null, v.className, D.className).filter(Boolean).join(" "), L.ref = ee, Kc(Z, L);
    }(p, E, A, h);
  };
  return C.displayName = u, (p = de.forwardRef(C)).attrs = m, p.componentStyle = d, p.displayName = u, p.shouldForwardProp = g, p.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : Wr, p.styledComponentId = f, p.target = n ? e.target : e, p.withComponent = function(E) {
    var A = t.componentId, T = function(R, x) {
      if (R == null)
        return {};
      var B, k, $ = {}, z = Object.keys(R);
      for (k = 0; k < z.length; k++)
        B = z[k], x.indexOf(B) >= 0 || ($[B] = R[B]);
      return $;
    }(t, ["componentId"]), v = A && A + "-" + (Er(E) ? E : In(yo(E)));
    return Fc(E, et({}, T, { attrs: m, componentId: v }), r);
  }, Object.defineProperty(p, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(E) {
    this._foldedDefaultProps = n ? Dc({}, e.defaultProps, E) : E;
  } }), process.env.NODE_ENV !== "production" && (Ng(u, f), p.warnTooManyClasses = function(E, A) {
    var T = {}, v = !1;
    return function(R) {
      if (!v && (T[R] = !0, Object.keys(T).length >= 200)) {
        var x = A ? ' with the id of "' + A + '"' : "";
        console.warn("Over 200 classes were generated for component " + E + x + `.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), v = !0, T = {};
      }
    };
  }(u, f)), p.toString = function() {
    return "." + p.styledComponentId;
  }, o && eg(p, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), p;
}
var Co = function(e) {
  return function t(r, n, o) {
    if (o === void 0 && (o = at), !qo.isValidElementType(n))
      return Lt(1, String(n));
    var i = function() {
      return r(n, o, lt.apply(void 0, arguments));
    };
    return i.withConfig = function(a) {
      return t(r, n, et({}, o, {}, a));
    }, i.attrs = function(a) {
      return t(r, n, et({}, o, { attrs: Array.prototype.concat(o.attrs, a).filter(Boolean) }));
    }, i;
  }(Fc, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  Co[e] = Co(e);
});
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const ei = Co, ti = (e = "100%", t = e) => lt`
  width: ${e};
  height: ${t};
`;
lt`
  border: 1px solid red;
`;
const jg = (e = "flex-start", t = "stretch", r = "row") => lt`
  display: flex;
  justify-content: ${e};
  align-items: ${t};
  flex-direction: ${r};
`, Fg = (e = "&") => lt`
  ${e}::-webkit-scrollbar {
    width: 10px;
  }

  ${e}::-webkit-scrollbar-track {
    background-color: ${({ theme: t }) => t.lightGrey};
  }

  ${e}::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
`, wo = (e) => lt`
  ${({ theme: t }) => t[e]}
`, Hg = (e) => lt`
  position: absolute;
  ${Object.entries(e).map(([t, r]) => `${t}: ${r};`).join(`
`)}
`, Bg = lt`
  -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
`, zg = ei.div`
  ${jg("center", "center")};
  ${Hg({
  left: "0",
  top: "0"
})}
  ${ti("100vw", "100vh")};
  background: rgba(0, 0, 0, 0.44);
  z-index: 100;
`, Ug = ei.div`
  display: grid;
  position: relative;
  ${ti("50vw", "60vh")};
  background: ${wo("grey")};
  border: 2px solid ${wo("lightGrey")};
  min-height: 300px;
  border-radius: 6px;
  cursor: grab;
  ${Bg};
  touch-action: none;
  overflow-y: auto;
  scroll-behavior: smooth;
  ${Fg()};
`, Wg = ei.div`
  margin: 0 auto;
  margin-top: 18px;
  ${ti("60%", "100%")}
  & > * {
    cursor: initial;
    color: ${wo("light")};
  }
`, Vg = ({ onClose: e, isOpen: t, children: r }) => {
  const { Spring: n, Gesture: o } = Im(), { opacity: i, transform: a } = Hm(), s = n.useTransition(t, {
    from: i.from(),
    enter: i.to(),
    leave: i.from(),
    config: n.config.stiff
  }), l = n.useSpring({
    from: a.from(),
    to: a.to(t),
    config: n.config.wobbly
  }), [c, u] = n.useSpring(() => ({
    y: 0,
    x: 0,
    scale: 1
  })), { y: f, x: m, scale: g } = c, p = o.useDrag(
    ({ offset: [h, C], down: E }) => {
      u.start({ y: E ? C : 0, immediate: !1, x: E ? h : 0, scale: E ? 1.07 : 1 });
    },
    { from: () => [0, 0], filterTaps: !0, rubberband: !0, delay: 200 }
  ), d = (h) => {
    h.stopPropagation();
  };
  return /* @__PURE__ */ Oe(_o, { children: s(
    (h, C) => /* @__PURE__ */ Oe(Tc, { when: C, children: /* @__PURE__ */ Oe(Rc, { children: /* @__PURE__ */ Oe(
      zg,
      {
        style: h,
        onClick: e,
        as: n.a.div,
        children: /* @__PURE__ */ Oe(
          Ug,
          {
            style: { ...l, x: m, y: f, scale: g },
            ...p(),
            onClick: d,
            as: n.a.div,
            children: /* @__PURE__ */ Oe(
              Qc,
              {
                damping: 0.05,
                syncCallbacks: !0,
                alwaysShowTracks: !0,
                children: /* @__PURE__ */ Oe(Wg, { children: r })
              }
            )
          }
        )
      }
    ) }) })
  ) });
}, lv = (e) => /* @__PURE__ */ Oe($m, { children: /* @__PURE__ */ Oe(Vg, { ...e }) });
export {
  $m as AnimationProvider,
  cv as ColorButton,
  Tc as Display,
  xu as ErrorBoundary,
  gu as LocalStorage,
  sv as LocalStorageClient,
  lv as Modal,
  Oc as NotificationsContext,
  tv as NotificationsProvider,
  rv as Page,
  Qg as RoutePaths,
  Xg as httpService,
  av as isFunction,
  iv as isObject,
  Mm as isString,
  Jg as useAltKeyDown,
  Im as useAnimations,
  vu as useBooleanState,
  Zg as useDebounce,
  ev as useFullScreen,
  nv as useNotifications,
  ov as useOverflow
};
