import * as y from "react";
import de, { useState as Gt, useRef as je, useContext as Ne, createContext as nr, useLayoutEffect as Ca, useEffect as Ue, forwardRef as Oo, useMemo as xa, Children as tl, createRef as rl, useCallback as nl, useDebugValue as oi, createElement as ol } from "react";
import { jsxs as wa, jsx as Ee, Fragment as To } from "react/jsx-runtime";
import * as il from "react-dom";
import al, { createPortal as _a } from "react-dom";
import sl from "react-smooth-scrollbar";
function Oa(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: cl } = Object.prototype, { getPrototypeOf: Ao } = Object, Kr = ((e) => (t) => {
  const r = cl.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Xe = (e) => (e = e.toLowerCase(), (t) => Kr(t) === e), qr = (e) => (t) => typeof t === e, { isArray: $t } = Array, Yt = qr("undefined");
function ll(e) {
  return e !== null && !Yt(e) && e.constructor !== null && !Yt(e.constructor) && Fe(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Ta = Xe("ArrayBuffer");
function ul(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Ta(e.buffer), t;
}
const fl = qr("string"), Fe = qr("function"), Aa = qr("number"), Xr = (e) => e !== null && typeof e == "object", dl = (e) => e === !0 || e === !1, _r = (e) => {
  if (Kr(e) !== "object")
    return !1;
  const t = Ao(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, pl = Xe("Date"), hl = Xe("File"), ml = Xe("Blob"), gl = Xe("FileList"), vl = (e) => Xr(e) && Fe(e.pipe), yl = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || Fe(e.append) && ((t = Kr(e)) === "formdata" || // detect form-data instance
  t === "object" && Fe(e.toString) && e.toString() === "[object FormData]"));
}, bl = Xe("URLSearchParams"), Sl = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
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
function Ra(e, t) {
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length, o;
  for (; n-- > 0; )
    if (o = r[n], t === o.toLowerCase())
      return o;
  return null;
}
const Pa = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), Na = (e) => !Yt(e) && e !== Pa;
function jn() {
  const { caseless: e } = Na(this) && this || {}, t = {}, r = (n, o) => {
    const i = e && Ra(t, o) || o;
    _r(t[i]) && _r(n) ? t[i] = jn(t[i], n) : _r(n) ? t[i] = jn({}, n) : $t(n) ? t[i] = n.slice() : t[i] = n;
  };
  for (let n = 0, o = arguments.length; n < o; n++)
    arguments[n] && or(arguments[n], r);
  return t;
}
const El = (e, t, r, { allOwnKeys: n } = {}) => (or(t, (o, i) => {
  r && Fe(o) ? e[i] = Oa(o, r) : e[i] = o;
}, { allOwnKeys: n }), e), Cl = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), xl = (e, t, r, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, wl = (e, t, r, n) => {
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
}, _l = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, Ol = (e) => {
  if (!e)
    return null;
  if ($t(e))
    return e;
  let t = e.length;
  if (!Aa(t))
    return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, Tl = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Ao(Uint8Array)), Al = (e, t) => {
  const n = (e && e[Symbol.iterator]).call(e);
  let o;
  for (; (o = n.next()) && !o.done; ) {
    const i = o.value;
    t.call(e, i[0], i[1]);
  }
}, Rl = (e, t) => {
  let r;
  const n = [];
  for (; (r = e.exec(t)) !== null; )
    n.push(r);
  return n;
}, Pl = Xe("HTMLFormElement"), Nl = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, o) {
    return n.toUpperCase() + o;
  }
), ii = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), $l = Xe("RegExp"), $a = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  or(r, (o, i) => {
    t(o, i, e) !== !1 && (n[i] = o);
  }), Object.defineProperties(e, n);
}, Il = (e) => {
  $a(e, (t, r) => {
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
}, Ml = (e, t) => {
  const r = {}, n = (o) => {
    o.forEach((i) => {
      r[i] = !0;
    });
  };
  return $t(e) ? n(e) : n(String(e).split(t)), r;
}, kl = () => {
}, Ll = (e, t) => (e = +e, Number.isFinite(e) ? e : t), hn = "abcdefghijklmnopqrstuvwxyz", ai = "0123456789", Ia = {
  DIGIT: ai,
  ALPHA: hn,
  ALPHA_DIGIT: hn + hn.toUpperCase() + ai
}, Dl = (e = 16, t = Ia.ALPHA_DIGIT) => {
  let r = "";
  const { length: n } = t;
  for (; e--; )
    r += t[Math.random() * n | 0];
  return r;
};
function jl(e) {
  return !!(e && Fe(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const Fl = (e) => {
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
}, Hl = Xe("AsyncFunction"), Bl = (e) => e && (Xr(e) || Fe(e)) && Fe(e.then) && Fe(e.catch), T = {
  isArray: $t,
  isArrayBuffer: Ta,
  isBuffer: ll,
  isFormData: yl,
  isArrayBufferView: ul,
  isString: fl,
  isNumber: Aa,
  isBoolean: dl,
  isObject: Xr,
  isPlainObject: _r,
  isUndefined: Yt,
  isDate: pl,
  isFile: hl,
  isBlob: ml,
  isRegExp: $l,
  isFunction: Fe,
  isStream: vl,
  isURLSearchParams: bl,
  isTypedArray: Tl,
  isFileList: gl,
  forEach: or,
  merge: jn,
  extend: El,
  trim: Sl,
  stripBOM: Cl,
  inherits: xl,
  toFlatObject: wl,
  kindOf: Kr,
  kindOfTest: Xe,
  endsWith: _l,
  toArray: Ol,
  forEachEntry: Al,
  matchAll: Rl,
  isHTMLForm: Pl,
  hasOwnProperty: ii,
  hasOwnProp: ii,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: $a,
  freezeMethods: Il,
  toObjectSet: Ml,
  toCamelCase: Nl,
  noop: kl,
  toFiniteNumber: Ll,
  findKey: Ra,
  global: Pa,
  isContextDefined: Na,
  ALPHABET: Ia,
  generateString: Dl,
  isSpecCompliantForm: jl,
  toJSONObject: Fl,
  isAsyncFn: Hl,
  isThenable: Bl
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
const Ma = ie.prototype, ka = {};
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
  ka[e] = { value: e };
});
Object.defineProperties(ie, ka);
Object.defineProperty(Ma, "isAxiosError", { value: !0 });
ie.from = (e, t, r, n, o, i) => {
  const a = Object.create(Ma);
  return T.toFlatObject(e, a, function(l) {
    return l !== Error.prototype;
  }, (s) => s !== "isAxiosError"), ie.call(a, e.message, t, r, n, o), a.cause = e, a.name = e.name, i && Object.assign(a, i), a;
};
const zl = null;
function Fn(e) {
  return T.isPlainObject(e) || T.isArray(e);
}
function La(e) {
  return T.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function si(e, t, r) {
  return e ? e.concat(t).map(function(o, i) {
    return o = La(o), !r && i ? "[" + o + "]" : o;
  }).join(r ? "." : "") : t;
}
function Ul(e) {
  return T.isArray(e) && !e.some(Fn);
}
const Wl = T.toFlatObject(T, {}, null, function(t) {
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
  const n = r.metaTokens, o = r.visitor || u, i = r.dots, a = r.indexes, l = (r.Blob || typeof Blob < "u" && Blob) && T.isSpecCompliantForm(t);
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
  function u(p, d, h) {
    let C = p;
    if (p && !h && typeof p == "object") {
      if (T.endsWith(d, "{}"))
        d = n ? d : d.slice(0, -2), p = JSON.stringify(p);
      else if (T.isArray(p) && Ul(p) || (T.isFileList(p) || T.endsWith(d, "[]")) && (C = T.toArray(p)))
        return d = La(d), C.forEach(function(R, O) {
          !(T.isUndefined(R) || R === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? si([d], O, i) : a === null ? d : d + "[]",
            c(R)
          );
        }), !1;
    }
    return Fn(p) ? !0 : (t.append(si(h, d, i), c(p)), !1);
  }
  const f = [], m = Object.assign(Wl, {
    defaultVisitor: u,
    convertValue: c,
    isVisitable: Fn
  });
  function v(p, d) {
    if (!T.isUndefined(p)) {
      if (f.indexOf(p) !== -1)
        throw Error("Circular reference detected in " + d.join("."));
      f.push(p), T.forEach(p, function(C, E) {
        (!(T.isUndefined(C) || C === null) && o.call(
          t,
          C,
          T.isString(E) ? E.trim() : E,
          d,
          m
        )) === !0 && v(C, d ? d.concat(E) : [E]);
      }), f.pop();
    }
  }
  if (!T.isObject(e))
    throw new TypeError("data must be an object");
  return v(e), t;
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
const Da = Ro.prototype;
Da.append = function(t, r) {
  this._pairs.push([t, r]);
};
Da.toString = function(t) {
  const r = t ? function(n) {
    return t.call(this, n, ci);
  } : ci;
  return this._pairs.map(function(o) {
    return r(o[0]) + "=" + r(o[1]);
  }, "").join("&");
};
function Vl(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function ja(e, t, r) {
  if (!t)
    return e;
  const n = r && r.encode || Vl, o = r && r.serialize;
  let i;
  if (o ? i = o(t, r) : i = T.isURLSearchParams(t) ? t.toString() : new Ro(t, r).toString(n), i) {
    const a = e.indexOf("#");
    a !== -1 && (e = e.slice(0, a)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class Gl {
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
const li = Gl, Fa = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Yl = typeof URLSearchParams < "u" ? URLSearchParams : Ro, Kl = typeof FormData < "u" ? FormData : null, ql = typeof Blob < "u" ? Blob : null, Xl = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), Ql = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), Ke = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Yl,
    FormData: Kl,
    Blob: ql
  },
  isStandardBrowserEnv: Xl,
  isStandardBrowserWebWorkerEnv: Ql,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function Jl(e, t) {
  return Qr(e, new Ke.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, o, i) {
      return Ke.isNode && T.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Zl(e) {
  return T.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function eu(e) {
  const t = {}, r = Object.keys(e);
  let n;
  const o = r.length;
  let i;
  for (n = 0; n < o; n++)
    i = r[n], t[i] = e[i];
  return t;
}
function Ha(e) {
  function t(r, n, o, i) {
    let a = r[i++];
    const s = Number.isFinite(+a), l = i >= r.length;
    return a = !a && T.isArray(o) ? o.length : a, l ? (T.hasOwnProp(o, a) ? o[a] = [o[a], n] : o[a] = n, !s) : ((!o[a] || !T.isObject(o[a])) && (o[a] = []), t(r, n, o[a], i) && T.isArray(o[a]) && (o[a] = eu(o[a])), !s);
  }
  if (T.isFormData(e) && T.isFunction(e.entries)) {
    const r = {};
    return T.forEachEntry(e, (n, o) => {
      t(Zl(n), o, r, 0);
    }), r;
  }
  return null;
}
const tu = {
  "Content-Type": void 0
};
function ru(e, t, r) {
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
  transitional: Fa,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, r) {
    const n = r.getContentType() || "", o = n.indexOf("application/json") > -1, i = T.isObject(t);
    if (i && T.isHTMLForm(t) && (t = new FormData(t)), T.isFormData(t))
      return o && o ? JSON.stringify(Ha(t)) : t;
    if (T.isArrayBuffer(t) || T.isBuffer(t) || T.isStream(t) || T.isFile(t) || T.isBlob(t))
      return t;
    if (T.isArrayBufferView(t))
      return t.buffer;
    if (T.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let s;
    if (i) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return Jl(t, this.formSerializer).toString();
      if ((s = T.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const l = this.env && this.env.FormData;
        return Qr(
          s ? { "files[]": t } : t,
          l && new l(),
          this.formSerializer
        );
      }
    }
    return i || o ? (r.setContentType("application/json", !1), ru(t)) : t;
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
  Jr.headers[t] = T.merge(tu);
});
const Po = Jr, nu = T.toObjectSet([
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
]), ou = (e) => {
  const t = {};
  let r, n, o;
  return e && e.split(`
`).forEach(function(a) {
    o = a.indexOf(":"), r = a.substring(0, o).trim().toLowerCase(), n = a.substring(o + 1).trim(), !(!r || t[r] && nu[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n);
  }), t;
}, ui = Symbol("internals");
function Bt(e) {
  return e && String(e).trim().toLowerCase();
}
function Or(e) {
  return e === !1 || e == null ? e : T.isArray(e) ? e.map(Or) : String(e);
}
function iu(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const au = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
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
function su(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function cu(e, t) {
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
      const u = Bt(l);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const f = T.findKey(o, u);
      (!f || o[f] === void 0 || c === !0 || c === void 0 && o[f] !== !1) && (o[f || l] = Or(s));
    }
    const a = (s, l) => T.forEach(s, (c, u) => i(c, u, l));
    return T.isPlainObject(t) || t instanceof this.constructor ? a(t, r) : T.isString(t) && (t = t.trim()) && !au(t) ? a(ou(t), r) : t != null && i(r, t, n), this;
  }
  get(t, r) {
    if (t = Bt(t), t) {
      const n = T.findKey(this, t);
      if (n) {
        const o = this[n];
        if (!r)
          return o;
        if (r === !0)
          return iu(o);
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
      const s = t ? su(i) : String(i).trim();
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
      n[s] || (cu(o, a), n[s] = !0);
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
function Ba(e) {
  return !!(e && e.__CANCEL__);
}
function ir(e, t, r) {
  ie.call(this, e ?? "canceled", ie.ERR_CANCELED, t, r), this.name = "CanceledError";
}
T.inherits(ir, ie, {
  __CANCEL__: !0
});
function lu(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? e(r) : t(new ie(
    "Request failed with status code " + r.status,
    [ie.ERR_BAD_REQUEST, ie.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
const uu = Ke.isStandardBrowserEnv ? (
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
function fu(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function du(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function za(e, t) {
  return e && !fu(t) ? du(e, t) : t;
}
const pu = Ke.isStandardBrowserEnv ? (
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
function hu(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function mu(e, t) {
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
    const v = u && c - u;
    return v ? Math.round(m * 1e3 / v) : void 0;
  };
}
function fi(e, t) {
  let r = 0;
  const n = mu(50, 250);
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
const gu = typeof XMLHttpRequest < "u", vu = gu && function(e) {
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
      const v = e.auth.username || "", p = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      i.set("Authorization", "Basic " + btoa(v + ":" + p));
    }
    const u = za(e.baseURL, e.url);
    c.open(e.method.toUpperCase(), ja(u, e.params, e.paramsSerializer), !0), c.timeout = e.timeout;
    function f() {
      if (!c)
        return;
      const v = rt.from(
        "getAllResponseHeaders" in c && c.getAllResponseHeaders()
      ), d = {
        data: !a || a === "text" || a === "json" ? c.responseText : c.response,
        status: c.status,
        statusText: c.statusText,
        headers: v,
        config: e,
        request: c
      };
      lu(function(C) {
        r(C), l();
      }, function(C) {
        n(C), l();
      }, d), c = null;
    }
    if ("onloadend" in c ? c.onloadend = f : c.onreadystatechange = function() {
      !c || c.readyState !== 4 || c.status === 0 && !(c.responseURL && c.responseURL.indexOf("file:") === 0) || setTimeout(f);
    }, c.onabort = function() {
      c && (n(new ie("Request aborted", ie.ECONNABORTED, e, c)), c = null);
    }, c.onerror = function() {
      n(new ie("Network Error", ie.ERR_NETWORK, e, c)), c = null;
    }, c.ontimeout = function() {
      let p = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const d = e.transitional || Fa;
      e.timeoutErrorMessage && (p = e.timeoutErrorMessage), n(new ie(
        p,
        d.clarifyTimeoutError ? ie.ETIMEDOUT : ie.ECONNABORTED,
        e,
        c
      )), c = null;
    }, Ke.isStandardBrowserEnv) {
      const v = (e.withCredentials || pu(u)) && e.xsrfCookieName && uu.read(e.xsrfCookieName);
      v && i.set(e.xsrfHeaderName, v);
    }
    o === void 0 && i.setContentType(null), "setRequestHeader" in c && T.forEach(i.toJSON(), function(p, d) {
      c.setRequestHeader(d, p);
    }), T.isUndefined(e.withCredentials) || (c.withCredentials = !!e.withCredentials), a && a !== "json" && (c.responseType = e.responseType), typeof e.onDownloadProgress == "function" && c.addEventListener("progress", fi(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && c.upload && c.upload.addEventListener("progress", fi(e.onUploadProgress)), (e.cancelToken || e.signal) && (s = (v) => {
      c && (n(!v || v.type ? new ir(null, e, c) : v), c.abort(), c = null);
    }, e.cancelToken && e.cancelToken.subscribe(s), e.signal && (e.signal.aborted ? s() : e.signal.addEventListener("abort", s)));
    const m = hu(u);
    if (m && Ke.protocols.indexOf(m) === -1) {
      n(new ie("Unsupported protocol " + m + ":", ie.ERR_BAD_REQUEST, e));
      return;
    }
    c.send(o || null);
  });
}, Tr = {
  http: zl,
  xhr: vu
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
const yu = {
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
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), yu.getAdapter(e.adapter || Po.adapter)(e).then(function(n) {
    return vn(e), n.data = gn.call(
      e,
      e.transformResponse,
      n
    ), n.headers = rt.from(n.headers), n;
  }, function(n) {
    return Ba(n) || (vn(e), n && n.response && (n.response.data = gn.call(
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
  function n(c, u, f) {
    return T.isPlainObject(c) && T.isPlainObject(u) ? T.merge.call({ caseless: f }, c, u) : T.isPlainObject(u) ? T.merge({}, u) : T.isArray(u) ? u.slice() : u;
  }
  function o(c, u, f) {
    if (T.isUndefined(u)) {
      if (!T.isUndefined(c))
        return n(void 0, c, f);
    } else
      return n(c, u, f);
  }
  function i(c, u) {
    if (!T.isUndefined(u))
      return n(void 0, u);
  }
  function a(c, u) {
    if (T.isUndefined(u)) {
      if (!T.isUndefined(c))
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
    headers: (c, u) => o(pi(c), pi(u), !0)
  };
  return T.forEach(Object.keys(Object.assign({}, e, t)), function(u) {
    const f = l[u] || o, m = f(e[u], t[u], u);
    T.isUndefined(m) && f !== s || (r[u] = m);
  }), r;
}
const Ua = "1.4.0", No = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  No[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const hi = {};
No.transitional = function(t, r, n) {
  function o(i, a) {
    return "[Axios v" + Ua + "] Transitional option '" + i + "'" + a + (n ? ". " + n : "");
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
function bu(e, t, r) {
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
  assertOptions: bu,
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
    let u, f = 0, m;
    if (!l) {
      const p = [di.bind(this), void 0];
      for (p.unshift.apply(p, s), p.push.apply(p, c), m = p.length, u = Promise.resolve(r); f < m; )
        u = u.then(p[f++], p[f++]);
      return u;
    }
    m = s.length;
    let v = r;
    for (f = 0; f < m; ) {
      const p = s[f++], d = s[f++];
      try {
        v = p(v);
      } catch (h) {
        d.call(this, h);
        break;
      }
    }
    try {
      u = di.call(this, v);
    } catch (p) {
      return Promise.reject(p);
    }
    for (f = 0, m = c.length; f < m; )
      u = u.then(c[f++], c[f++]);
    return u;
  }
  getUri(t) {
    t = Ot(this.defaults, t);
    const r = za(t.baseURL, t.url);
    return ja(r, t.params, t.paramsSerializer);
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
const Su = $o;
function Eu(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function Cu(e) {
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
const xu = Bn;
function Wa(e) {
  const t = new Ar(e), r = Oa(Ar.prototype.request, t);
  return T.extend(r, Ar.prototype, t, { allOwnKeys: !0 }), T.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(o) {
    return Wa(Ot(e, o));
  }, r;
}
const _e = Wa(Po);
_e.Axios = Ar;
_e.CanceledError = ir;
_e.CancelToken = Su;
_e.isCancel = Ba;
_e.VERSION = Ua;
_e.toFormData = Qr;
_e.AxiosError = ie;
_e.Cancel = _e.CanceledError;
_e.all = function(t) {
  return Promise.all(t);
};
_e.spread = Eu;
_e.isAxiosError = Cu;
_e.mergeConfig = Ot;
_e.AxiosHeaders = rt;
_e.formToJSON = (e) => Ha(T.isHTMLForm(e) ? new FormData(e) : e);
_e.HttpStatusCode = xu;
_e.default = _e;
const wu = _e;
process.env.CLIENT_URL;
process.env.SERVER_PREFIX;
process.env.SERVER_PORT;
process.env.CODE_COMPILER_API_URL;
const _u = process.env.SERVER_URL ?? "http://localhost:6868", lv = wu.create({
  baseURL: _u,
  withCredentials: !0
}), Ou = {
  EDITOR_THEME: "EDITOR_THEME",
  EDITOR_CONTENT_DATA: "EDITOR_CONTENT_DATA",
  EDITOR_EXECUTE_MESSAGES: "EDITOR_EXECUTE_MESSAGES",
  EDITOR_FONT_SIZE: "EDITOR_FONT_SIZE",
  EDITOR_TAB_SIZE: "EDITOR_TAB_SIZE",
  EDITOR_CUSTOM_BACKGROUND: "EDITOR_CUSTOM_BACKGROUND",
  EDITOR_CUSTOM_COLOR: "EDITOR_CUSTOM_COLOR",
  EDITOR_HTML_PREVIEW: "EDITOR_HTML_PREVIEW"
}, uv = {
  MAIN: "/",
  EDITOR: "/edit",
  ABOUT: "/about"
}, fv = () => {
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
}, Tu = (e = !1) => {
  const [t, r] = Gt(e);
  return {
    off: () => r(!1),
    on: () => r(!0),
    toggle: () => r(!t),
    val: t
  };
}, dv = (e, t) => {
  const r = je();
  return (...n) => {
    r.current && clearTimeout(r.current), r.current = setTimeout(() => {
      e(...n);
    }, t);
  };
}, pv = () => () => {
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
var Fr, Se, yn, mi, zn = 0, Va = [], Rr = [], gi = Oe.__b, vi = Oe.__r, yi = Oe.diffed, bi = Oe.__c, Si = Oe.unmount;
function Ga(e, t) {
  Oe.__h && Oe.__h(Se, e, zn || t), zn = 0;
  var r = Se.__H || (Se.__H = { __: [], __h: [] });
  return e >= r.__.length && r.__.push({ __V: Rr }), r.__[e];
}
function Au(e) {
  return zn = 1, Ru(Ya, e);
}
function Ru(e, t, r) {
  var n = Ga(Fr++, 2);
  if (n.t = e, !n.__c && (n.__ = [r ? r(t) : Ya(void 0, t), function(s) {
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
          var v = m.__[0];
          m.__ = m.__N, m.__N = void 0, v !== m.__[0] && (f = !0);
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
function Pu(e) {
  var t = Ga(Fr++, 10), r = Au();
  return t.__ = e, Se.componentDidCatch || (Se.componentDidCatch = function(n, o) {
    t.__ && t.__(n, o), r[1](n);
  }), [r[0], function() {
    r[1](void 0);
  }];
}
function Nu() {
  for (var e; e = Va.shift(); )
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
  t && t.__H && (t.__H.__h.length && (Va.push(t) !== 1 && mi === Oe.requestAnimationFrame || ((mi = Oe.requestAnimationFrame) || $u)(Nu)), t.__H.__.forEach(function(r) {
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
function $u(e) {
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
function Ya(e, t) {
  return typeof t == "function" ? t(e) : t;
}
const Iu = () => /* @__PURE__ */ wa("div", { children: [
  "Custom Error Boundary. ",
  /* @__PURE__ */ Ee("br", {})
] }), Mu = ({ children: e }) => {
  const [t] = Pu();
  return console.error(t), t ? /* @__PURE__ */ Ee(Iu, { errorInfo: t }) : /* @__PURE__ */ Ee(To, { children: e });
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
function ku(e, t) {
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
function Ka(e) {
  var t = ku(e, "string");
  return ye(t) === "symbol" ? t : String(t);
}
function Ci(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Ka(n.key), n);
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
function qa(e, t) {
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
function Lu() {
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
function Du(e, t) {
  if (t && (ye(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Vn(e);
}
function Xa(e) {
  var t = Lu();
  return function() {
    var n = Hr(e), o;
    if (t) {
      var i = Hr(this).constructor;
      o = Reflect.construct(n, arguments, i);
    } else
      o = n.apply(this, arguments);
    return Du(this, o);
  };
}
function Qa(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ja = { exports: {} };
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
})(Ja);
var ju = Ja.exports;
const Te = /* @__PURE__ */ Qa(ju);
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
function Fu() {
  if (xi)
    return ce;
  xi = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, v = e ? Symbol.for("react.memo") : 60115, p = e ? Symbol.for("react.lazy") : 60116, d = e ? Symbol.for("react.block") : 60121, h = e ? Symbol.for("react.fundamental") : 60117, C = e ? Symbol.for("react.responder") : 60118, E = e ? Symbol.for("react.scope") : 60119;
  function R(g) {
    if (typeof g == "object" && g !== null) {
      var A = g.$$typeof;
      switch (A) {
        case t:
          switch (g = g.type, g) {
            case l:
            case c:
            case n:
            case i:
            case o:
            case f:
              return g;
            default:
              switch (g = g && g.$$typeof, g) {
                case s:
                case u:
                case p:
                case v:
                case a:
                  return g;
                default:
                  return A;
              }
          }
        case r:
          return A;
      }
    }
  }
  function O(g) {
    return R(g) === c;
  }
  return ce.AsyncMode = l, ce.ConcurrentMode = c, ce.ContextConsumer = s, ce.ContextProvider = a, ce.Element = t, ce.ForwardRef = u, ce.Fragment = n, ce.Lazy = p, ce.Memo = v, ce.Portal = r, ce.Profiler = i, ce.StrictMode = o, ce.Suspense = f, ce.isAsyncMode = function(g) {
    return O(g) || R(g) === l;
  }, ce.isConcurrentMode = O, ce.isContextConsumer = function(g) {
    return R(g) === s;
  }, ce.isContextProvider = function(g) {
    return R(g) === a;
  }, ce.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === t;
  }, ce.isForwardRef = function(g) {
    return R(g) === u;
  }, ce.isFragment = function(g) {
    return R(g) === n;
  }, ce.isLazy = function(g) {
    return R(g) === p;
  }, ce.isMemo = function(g) {
    return R(g) === v;
  }, ce.isPortal = function(g) {
    return R(g) === r;
  }, ce.isProfiler = function(g) {
    return R(g) === i;
  }, ce.isStrictMode = function(g) {
    return R(g) === o;
  }, ce.isSuspense = function(g) {
    return R(g) === f;
  }, ce.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === n || g === c || g === i || g === o || g === f || g === m || typeof g == "object" && g !== null && (g.$$typeof === p || g.$$typeof === v || g.$$typeof === a || g.$$typeof === s || g.$$typeof === u || g.$$typeof === h || g.$$typeof === C || g.$$typeof === E || g.$$typeof === d);
  }, ce.typeOf = R, ce;
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
function Hu() {
  return wi || (wi = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, v = e ? Symbol.for("react.memo") : 60115, p = e ? Symbol.for("react.lazy") : 60116, d = e ? Symbol.for("react.block") : 60121, h = e ? Symbol.for("react.fundamental") : 60117, C = e ? Symbol.for("react.responder") : 60118, E = e ? Symbol.for("react.scope") : 60119;
    function R(P) {
      return typeof P == "string" || typeof P == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      P === n || P === c || P === i || P === o || P === f || P === m || typeof P == "object" && P !== null && (P.$$typeof === p || P.$$typeof === v || P.$$typeof === a || P.$$typeof === s || P.$$typeof === u || P.$$typeof === h || P.$$typeof === C || P.$$typeof === E || P.$$typeof === d);
    }
    function O(P) {
      if (typeof P == "object" && P !== null) {
        var se = P.$$typeof;
        switch (se) {
          case t:
            var B = P.type;
            switch (B) {
              case l:
              case c:
              case n:
              case i:
              case o:
              case f:
                return B;
              default:
                var W = B && B.$$typeof;
                switch (W) {
                  case s:
                  case u:
                  case p:
                  case v:
                  case a:
                    return W;
                  default:
                    return se;
                }
            }
          case r:
            return se;
        }
      }
    }
    var g = l, A = c, _ = s, F = a, D = t, I = u, V = n, x = p, b = v, w = r, N = i, j = o, L = f, z = !1;
    function K(P) {
      return z || (z = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), q(P) || O(P) === l;
    }
    function q(P) {
      return O(P) === c;
    }
    function re(P) {
      return O(P) === s;
    }
    function $(P) {
      return O(P) === a;
    }
    function M(P) {
      return typeof P == "object" && P !== null && P.$$typeof === t;
    }
    function H(P) {
      return O(P) === u;
    }
    function U(P) {
      return O(P) === n;
    }
    function S(P) {
      return O(P) === p;
    }
    function te(P) {
      return O(P) === v;
    }
    function k(P) {
      return O(P) === r;
    }
    function ne(P) {
      return O(P) === i;
    }
    function J(P) {
      return O(P) === o;
    }
    function Q(P) {
      return O(P) === f;
    }
    le.AsyncMode = g, le.ConcurrentMode = A, le.ContextConsumer = _, le.ContextProvider = F, le.Element = D, le.ForwardRef = I, le.Fragment = V, le.Lazy = x, le.Memo = b, le.Portal = w, le.Profiler = N, le.StrictMode = j, le.Suspense = L, le.isAsyncMode = K, le.isConcurrentMode = q, le.isContextConsumer = re, le.isContextProvider = $, le.isElement = M, le.isForwardRef = H, le.isFragment = U, le.isLazy = S, le.isMemo = te, le.isPortal = k, le.isProfiler = ne, le.isStrictMode = J, le.isSuspense = Q, le.isValidElementType = R, le.typeOf = O;
  }()), le;
}
process.env.NODE_ENV === "production" ? Gn.exports = Fu() : Gn.exports = Hu();
var Za = Gn.exports, Yn = {}, Io = [], Bu = function(t) {
  Io.push(t);
};
function es(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var r = Io.reduce(function(n, o) {
      return o(n ?? "", "warning");
    }, t);
    r && console.error("Warning: ".concat(r));
  }
}
function zu(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var r = Io.reduce(function(n, o) {
      return o(n ?? "", "note");
    }, t);
    r && console.warn("Note: ".concat(r));
  }
}
function ts() {
  Yn = {};
}
function rs(e, t, r) {
  !t && !Yn[r] && (e(!1, r), Yn[r] = !0);
}
function ct(e, t) {
  rs(es, e, t);
}
function Uu(e, t) {
  rs(zu, e, t);
}
ct.preMessage = Bu;
ct.resetWarned = ts;
ct.noteOnce = Uu;
function ae(e, t, r) {
  return t = Ka(t), t in e ? Object.defineProperty(e, t, {
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
function ns(e, t, r) {
  var n = y.useRef({});
  return (!("value" in n.current) || r(n.current.condition, t)) && (n.current.value = e(), n.current.condition = t), n.current.value;
}
function os(e, t) {
  typeof e == "function" ? e(t) : ye(e) === "object" && e && "current" in e && (e.current = t);
}
function is() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n = t.filter(function(o) {
    return o;
  });
  return n.length <= 1 ? n[0] : function(o) {
    t.forEach(function(i) {
      os(i, o);
    });
  };
}
function as(e) {
  var t, r, n = Za.isMemo(e) ? e.type.type : e.type;
  return !(typeof n == "function" && !((t = n.prototype) !== null && t !== void 0 && t.render) || typeof e == "function" && !((r = e.prototype) !== null && r !== void 0 && r.render));
}
function Wu(e) {
  return e instanceof HTMLElement || e instanceof SVGElement;
}
function Vu(e) {
  return Wu(e) ? e : e instanceof de.Component ? al.findDOMNode(e) : null;
}
function Gu(e, t) {
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
function Yu(e) {
  if (Array.isArray(e))
    return Kn(e);
}
function ss(e) {
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
function Ku() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Le(e) {
  return Yu(e) || ss(e) || Mo(e) || Ku();
}
var cs = function(t) {
  return +setTimeout(t, 16);
}, ls = function(t) {
  return clearTimeout(t);
};
typeof window < "u" && "requestAnimationFrame" in window && (cs = function(t) {
  return window.requestAnimationFrame(t);
}, ls = function(t) {
  return window.cancelAnimationFrame(t);
});
var Oi = 0, ko = /* @__PURE__ */ new Map();
function us(e) {
  ko.delete(e);
}
var Kt = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  Oi += 1;
  var n = Oi;
  function o(i) {
    if (i === 0)
      us(n), t();
    else {
      var a = cs(function() {
        o(i - 1);
      });
      ko.set(n, a);
    }
  }
  return o(r), n;
};
Kt.cancel = function(e) {
  var t = ko.get(e);
  return us(t), ls(t);
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
function qu(e, t) {
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
  var r = qu(e, t), n, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      n = i[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Xu(e, t) {
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
var Ti = "%", Qu = /* @__PURE__ */ function() {
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
}(), qn = "data-token-hash", mt = "data-css-hash", Ju = "data-cache-path", xt = "__cssinjs_instance__";
function Zu() {
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
  return new Qu(e);
}
var Do = /* @__PURE__ */ y.createContext({
  hashPriority: "low",
  cache: Zu(),
  defaultCache: !0
});
function Qe() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function ef(e, t) {
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
var Ai = "data-rc-order", Ri = "data-rc-priority", tf = "rc-util-key", Xn = /* @__PURE__ */ new Map();
function fs() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.mark;
  return t ? t.startsWith("data-") ? t : "data-".concat(t) : tf;
}
function en(e) {
  if (e.attachTo)
    return e.attachTo;
  var t = document.querySelector("head");
  return t || document.body;
}
function rf(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function ds(e) {
  return Array.from((Xn.get(e) || e).children).filter(function(t) {
    return t.tagName === "STYLE";
  });
}
function ps(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!Qe())
    return null;
  var r = t.csp, n = t.prepend, o = t.priority, i = o === void 0 ? 0 : o, a = rf(n), s = a === "prependQueue", l = document.createElement("style");
  l.setAttribute(Ai, a), s && i && l.setAttribute(Ri, "".concat(i)), r != null && r.nonce && (l.nonce = r?.nonce), l.innerHTML = e;
  var c = en(t), u = c.firstChild;
  if (n) {
    if (s) {
      var f = ds(c).filter(function(m) {
        if (!["prepend", "prependQueue"].includes(m.getAttribute(Ai)))
          return !1;
        var v = Number(m.getAttribute(Ri) || 0);
        return i >= v;
      });
      if (f.length)
        return c.insertBefore(l, f[f.length - 1].nextSibling), l;
    }
    c.insertBefore(l, u);
  } else
    c.appendChild(l);
  return l;
}
function hs(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = en(t);
  return ds(r).find(function(n) {
    return n.getAttribute(fs(t)) === e;
  });
}
function ms(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = hs(e, t);
  if (r) {
    var n = en(t);
    n.removeChild(r);
  }
}
function nf(e, t) {
  var r = Xn.get(e);
  if (!r || !ef(document, r)) {
    var n = ps("", t), o = n.parentNode;
    Xn.set(e, o), e.removeChild(n);
  }
}
function qt(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = en(r);
  nf(n, r);
  var o = hs(t, r);
  if (o) {
    var i, a;
    if ((i = r.csp) !== null && i !== void 0 && i.nonce && o.nonce !== ((a = r.csp) === null || a === void 0 ? void 0 : a.nonce)) {
      var s;
      o.nonce = (s = r.csp) === null || s === void 0 ? void 0 : s.nonce;
    }
    return o.innerHTML !== e && (o.innerHTML = e), o;
  }
  var l = ps(e, r);
  return l.setAttribute(fs(r), t), l;
}
function gs(e) {
  if (Array.isArray(e))
    return e;
}
function of(e, t) {
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
function vs() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function pe(e, t) {
  return gs(e) || of(e, t) || Mo(e, t) || vs();
}
function af(e, t) {
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
          var i = this.keys.reduce(function(c, u) {
            var f = pe(c, 2), m = f[1];
            return o.internalGet(u)[1] < m ? [u, o.internalGet(u)[1]] : c;
          }, [this.keys[0], this.cacheCallTimes]), a = pe(i, 1), s = a[0];
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
          return !af(n, r);
        }), this.deleteByPath(this.cache, r);
    }
  }]), e;
}();
ae(jo, "MAX_CACHE_SIZE", 20);
ae(jo, "MAX_CACHE_OFFSET", 5);
var Pi = 0, ys = /* @__PURE__ */ function() {
  function e(t) {
    It(this, e), ae(this, "derivatives", void 0), ae(this, "id", void 0), this.derivatives = Array.isArray(t) ? t : [t], this.id = Pi, t.length === 0 && es(t.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function."), Pi += 1;
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
function bs(e) {
  var t = Array.isArray(e) ? e : [e];
  return bn.has(t) || bn.set(t, new ys(t)), bn.get(t);
}
function Br(e) {
  var t = "";
  return Object.keys(e).forEach(function(r) {
    var n = e[r];
    t += r, n instanceof ys ? t += n.id : n && ye(n) === "object" ? t += Br(n) : t += n;
  }), t;
}
function sf(e, t) {
  return Lo("".concat(t, "_").concat(Br(e)));
}
var Ut = "random-".concat(Date.now(), "-").concat(Math.random()).replace(/\./g, ""), Ss = "_bAmBoO_";
function cf(e, t, r) {
  if (Qe()) {
    var n, o;
    qt(e, Ut);
    var i = document.createElement("div");
    i.style.position = "fixed", i.style.left = "0", i.style.top = "0", t?.(i), document.body.appendChild(i), process.env.NODE_ENV !== "production" && (i.innerHTML = "Test", i.style.zIndex = "9999999");
    var a = r ? r(i) : (n = getComputedStyle(i).content) === null || n === void 0 ? void 0 : n.includes(Ss);
    return (o = i.parentNode) === null || o === void 0 || o.removeChild(i), ms(Ut), a;
  }
  return !1;
}
var Sn = void 0;
function lf() {
  return Sn === void 0 && (Sn = cf("@layer ".concat(Ut, " { .").concat(Ut, ' { content: "').concat(Ss, '"!important; } }'), function(e) {
    e.className = Ut;
  })), Sn;
}
var Ni = process.env.NODE_ENV !== "test" && Qe() ? y.useLayoutEffect : y.useEffect, uf = function(t, r) {
  var n = y.useRef(!0);
  Ni(function() {
    return t(n.current);
  }, r), Ni(function() {
    return n.current = !1, function() {
      n.current = !0;
    };
  }, []);
}, ff = ee({}, y), $i = ff.useInsertionEffect, df = function(t, r, n) {
  y.useMemo(t, n), uf(function() {
    return r(!0);
  }, n);
}, pf = $i ? function(e, t, r) {
  return $i(function() {
    return e(), t();
  }, r);
} : df;
function hf() {
  return !1;
}
var Qn = !1;
function mf() {
  return Qn;
}
const gf = process.env.NODE_ENV === "production" ? hf : mf;
if (process.env.NODE_ENV !== "production" && typeof module < "u" && module && module.hot) {
  var En = window;
  if (typeof En.webpackHotUpdate == "function") {
    var vf = En.webpackHotUpdate;
    En.webpackHotUpdate = function() {
      return Qn = !0, setTimeout(function() {
        Qn = !1;
      }, 0), vf.apply(void 0, arguments);
    };
  }
}
function Es(e, t, r, n, o) {
  var i = y.useContext(Do), a = i.cache, s = [e].concat(Le(t)), l = s.join("_"), c = gf(), u = function(p) {
    a.update(s, function(d) {
      var h = d || [], C = pe(h, 2), E = C[0], R = E === void 0 ? 0 : E, O = C[1], g = O;
      process.env.NODE_ENV !== "production" && O && c && (n?.(g, c), g = null);
      var A = g || r(), _ = [R, A];
      return p ? p(_) : _;
    });
  };
  y.useMemo(
    function() {
      u();
    },
    /* eslint-disable react-hooks/exhaustive-deps */
    [l]
    /* eslint-enable */
  );
  var f = a.get(s);
  process.env.NODE_ENV !== "production" && !f && (u(), f = a.get(s));
  var m = f[1];
  return pf(function() {
    o?.(m);
  }, function(v) {
    return u(function(p) {
      var d = pe(p, 2), h = d[0], C = d[1];
      return v && h === 0 && o?.(m), [h + 1, C];
    }), function() {
      a.update(s, function(p) {
        var d = p || [], h = pe(d, 2), C = h[0], E = C === void 0 ? 0 : C, R = h[1], O = E - 1;
        return O === 0 ? (n?.(R, !1), null) : [E - 1, R];
      });
    };
  }, [l]), m;
}
var yf = {}, bf = process.env.NODE_ENV !== "production" ? "css-dev-only-do-not-override" : "css", ft = /* @__PURE__ */ new Map();
function Sf(e) {
  ft.set(e, (ft.get(e) || 0) + 1);
}
function Ef(e, t) {
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
var Cf = 0;
function xf(e, t) {
  ft.set(e, (ft.get(e) || 0) - 1);
  var r = Array.from(ft.keys()), n = r.filter(function(o) {
    var i = ft.get(o) || 0;
    return i <= 0;
  });
  r.length - n.length > Cf && n.forEach(function(o) {
    Ef(o, t), ft.delete(o);
  });
}
var wf = function(t, r, n, o) {
  var i = n.getDerivativeToken(t), a = ee(ee({}, i), r);
  return o && (a = o(a)), a;
};
function _f(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = Ne(Do), o = n.cache.instanceId, i = r.salt, a = i === void 0 ? "" : i, s = r.override, l = s === void 0 ? yf : s, c = r.formatToken, u = r.getComputedToken, f = y.useMemo(function() {
    return Object.assign.apply(Object, [{}].concat(Le(t)));
  }, [t]), m = y.useMemo(function() {
    return Br(f);
  }, [f]), v = y.useMemo(function() {
    return Br(l);
  }, [l]), p = Es("token", [a, e.id, m, v], function() {
    var d = u ? u(f, l, e) : wf(f, l, e, c), h = sf(d, a);
    d._tokenKey = h, Sf(h);
    var C = "".concat(bf, "-").concat(Lo(h));
    return d._hashId = C, [d, C];
  }, function(d) {
    xf(d[0]._tokenKey, o);
  });
  return p;
}
var Cs = {
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
}, xs = "comm", ws = "rule", _s = "decl", Of = "@import", Tf = "@keyframes", Af = "@layer", Rf = Math.abs, Fo = String.fromCharCode;
function Os(e) {
  return e.trim();
}
function Nr(e, t, r) {
  return e.replace(t, r);
}
function Pf(e, t) {
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
function Nf(e) {
  return e.length;
}
function fr(e, t) {
  return t.push(e), e;
}
var tn = 1, At = 1, Ts = 0, He = 0, Ce = 0, kt = "";
function Ho(e, t, r, n, o, i, a, s) {
  return { value: e, root: t, parent: r, type: n, props: o, children: i, line: tn, column: At, length: a, return: "", siblings: s };
}
function $f() {
  return Ce;
}
function If() {
  return Ce = He > 0 ? Xt(kt, --He) : 0, At--, Ce === 10 && (At = 1, tn--), Ce;
}
function We() {
  return Ce = He < Ts ? Xt(kt, He++) : 0, At++, Ce === 10 && (At = 1, tn++), Ce;
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
function Mf(e) {
  return tn = At = 1, Ts = et(kt = e), He = 0, [];
}
function kf(e) {
  return kt = "", e;
}
function Cn(e) {
  return Os(rn(He - 1, Zn(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Lf(e) {
  for (; (Ce = gt()) && Ce < 33; )
    We();
  return Jn(e) > 2 || Jn(Ce) > 3 ? "" : " ";
}
function Df(e, t) {
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
function jf(e, t) {
  for (; We() && e + Ce !== 47 + 10; )
    if (e + Ce === 42 + 42 && gt() === 47)
      break;
  return "/*" + rn(t, He - 1) + "*" + Fo(e === 47 ? e : We());
}
function Ff(e) {
  for (; !Jn(gt()); )
    We();
  return rn(e, He);
}
function Hf(e) {
  return kf(Ir("", null, null, null, [""], e = Mf(e), 0, [0], e));
}
function Ir(e, t, r, n, o, i, a, s, l) {
  for (var c = 0, u = 0, f = a, m = 0, v = 0, p = 0, d = 1, h = 1, C = 1, E = 0, R = "", O = o, g = i, A = n, _ = R; h; )
    switch (p = E, E = We()) {
      case 40:
        if (p != 108 && Xt(_, f - 1) == 58) {
          Pf(_ += Nr(Cn(E), "&", "&\f"), "&\f") != -1 && (C = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        _ += Cn(E);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        _ += Lf(p);
        break;
      case 92:
        _ += Df($r() - 1, 7);
        continue;
      case 47:
        switch (gt()) {
          case 42:
          case 47:
            fr(Bf(jf(We(), $r()), t, r, l), l);
            break;
          default:
            _ += "/";
        }
        break;
      case 123 * d:
        s[c++] = et(_) * C;
      case 125 * d:
      case 59:
      case 0:
        switch (E) {
          case 0:
          case 125:
            h = 0;
          case 59 + u:
            C == -1 && (_ = Nr(_, /\f/g, "")), v > 0 && et(_) - f && fr(v > 32 ? Mi(_ + ";", n, r, f - 1, l) : Mi(Nr(_, " ", "") + ";", n, r, f - 2, l), l);
            break;
          case 59:
            _ += ";";
          default:
            if (fr(A = Ii(_, t, r, c, u, o, s, R, O = [], g = [], f, i), i), E === 123)
              if (u === 0)
                Ir(_, t, A, A, O, i, f, s, g);
              else
                switch (m === 99 && Xt(_, 3) === 110 ? 100 : m) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Ir(e, A, A, n && fr(Ii(e, A, A, 0, 0, o, s, R, o, O = [], f, g), g), o, g, f, s, n ? O : g);
                    break;
                  default:
                    Ir(_, A, A, A, [""], g, 0, s, g);
                }
        }
        c = u = v = 0, d = C = 1, R = _ = "", f = a;
        break;
      case 58:
        f = 1 + et(_), v = p;
      default:
        if (d < 1) {
          if (E == 123)
            --d;
          else if (E == 125 && d++ == 0 && If() == 125)
            continue;
        }
        switch (_ += Fo(E), E * d) {
          case 38:
            C = u > 0 ? 1 : (_ += "\f", -1);
            break;
          case 44:
            s[c++] = (et(_) - 1) * C, C = 1;
            break;
          case 64:
            gt() === 45 && (_ += Cn(We())), m = gt(), u = f = et(R = _ += Ff($r())), E++;
            break;
          case 45:
            p === 45 && et(_) == 2 && (d = 0);
        }
    }
  return i;
}
function Ii(e, t, r, n, o, i, a, s, l, c, u, f) {
  for (var m = o - 1, v = o === 0 ? i : [""], p = Nf(v), d = 0, h = 0, C = 0; d < n; ++d)
    for (var E = 0, R = Qt(e, m + 1, m = Rf(h = a[d])), O = e; E < p; ++E)
      (O = Os(h > 0 ? v[E] + " " + R : Nr(R, /&\f/g, v[E]))) && (l[C++] = O);
  return Ho(e, t, r, o === 0 ? ws : s, l, c, u, f);
}
function Bf(e, t, r, n) {
  return Ho(e, t, r, xs, Fo($f()), Qt(e, 2, -2), 0, n);
}
function Mi(e, t, r, n, o) {
  return Ho(e, t, r, _s, Qt(e, 0, n), Qt(e, n + 1, -1), n, o);
}
function eo(e, t) {
  for (var r = "", n = 0; n < e.length; n++)
    r += t(e[n], n, e, t) || "";
  return r;
}
function zf(e, t, r, n) {
  switch (e.type) {
    case Af:
      if (e.children.length)
        break;
    case Of:
    case _s:
      return e.return = e.return || e.value;
    case xs:
      return "";
    case Tf:
      return e.return = e.value + "{" + eo(e.children, n) + "}";
    case ws:
      if (!et(e.value = e.props.join(",")))
        return "";
  }
  return et(r = eo(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function As(e, t) {
  var r = t.path, n = t.parentSelectors;
  ct(!1, "[Ant Design CSS-in-JS] ".concat(r ? "Error in ".concat(r, ": ") : "").concat(e).concat(n.length ? " Selector: ".concat(n.join(" | ")) : ""));
}
var Uf = function(t, r, n) {
  if (t === "content") {
    var o = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, i = ["normal", "none", "initial", "inherit", "unset"];
    (typeof r != "string" || i.indexOf(r) === -1 && !o.test(r) && (r.charAt(0) !== r.charAt(r.length - 1) || r.charAt(0) !== '"' && r.charAt(0) !== "'")) && As("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(r, "\"'`."), n);
  }
}, Wf = function(t, r, n) {
  t === "animation" && n.hashId && r !== "none" && As("You seem to be using hashed animation '".concat(r, "', in which case 'animationName' with Keyframe as value is recommended."), n);
}, ki = "data-ant-cssinjs-cache-path", Rs = "_FILE_STYLE__", vt, Ps = !0;
function Vf() {
  if (!vt && (vt = {}, Qe())) {
    var e = document.createElement("div");
    e.className = ki, e.style.position = "fixed", e.style.visibility = "hidden", e.style.top = "-9999px", document.body.appendChild(e);
    var t = getComputedStyle(e).content || "";
    t = t.replace(/^"/, "").replace(/"$/, ""), t.split(";").forEach(function(o) {
      var i = o.split(":"), a = pe(i, 2), s = a[0], l = a[1];
      vt[s] = l;
    });
    var r = document.querySelector("style[".concat(ki, "]"));
    if (r) {
      var n;
      Ps = !1, (n = r.parentNode) === null || n === void 0 || n.removeChild(r);
    }
    document.body.removeChild(e);
  }
}
function Gf(e) {
  return Vf(), !!vt[e];
}
function Yf(e) {
  var t = vt[e], r = null;
  if (t && Qe())
    if (Ps)
      r = Rs;
    else {
      var n = document.querySelector("style[".concat(mt, '="').concat(vt[e], '"]'));
      n ? r = n.innerHTML : delete vt[e];
    }
  return [r, t];
}
var Li = Qe(), Ns = "_skip_check_", $s = "_multi_value_";
function Di(e) {
  var t = eo(Hf(e), zf);
  return t.replace(/\{%%%\:[^;];}/g, ";");
}
function Kf(e) {
  return ye(e) === "object" && e && (Ns in e || $s in e);
}
function qf(e, t, r) {
  if (!t)
    return e;
  var n = ".".concat(t), o = r === "low" ? ":where(".concat(n, ")") : n, i = e.split(",").map(function(a) {
    var s, l = a.trim().split(/\s+/), c = l[0] || "", u = ((s = c.match(/^\w+/)) === null || s === void 0 ? void 0 : s[0]) || "";
    return c = "".concat(u).concat(o).concat(c.slice(u.length)), [c].concat(Le(l.slice(1))).join(" ");
  });
  return i.join(",");
}
var Xf = function e(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  }, o = n.root, i = n.injectHash, a = n.parentSelectors, s = r.hashId, l = r.layer, c = r.path, u = r.hashPriority, f = r.transformers, m = f === void 0 ? [] : f, v = r.linters, p = v === void 0 ? [] : v, d = "", h = {};
  function C(A) {
    var _ = A.getName(s);
    if (!h[_]) {
      var F = e(A.style, r, {
        root: !1,
        parentSelectors: a
      }), D = pe(F, 1), I = D[0];
      h[_] = "@keyframes ".concat(A.getName(s)).concat(I);
    }
  }
  function E(A) {
    var _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return A.forEach(function(F) {
      Array.isArray(F) ? E(F, _) : F && _.push(F);
    }), _;
  }
  var R = E(Array.isArray(t) ? t : [t]);
  if (R.forEach(function(A) {
    var _ = typeof A == "string" && !o ? {} : A;
    if (typeof _ == "string")
      d += "".concat(_, `
`);
    else if (_._keyframe)
      C(_);
    else {
      var F = m.reduce(function(D, I) {
        var V;
        return (I == null || (V = I.visit) === null || V === void 0 ? void 0 : V.call(I, D)) || D;
      }, _);
      Object.keys(F).forEach(function(D) {
        var I = F[D];
        if (ye(I) === "object" && I && (D !== "animationName" || !I._keyframe) && !Kf(I)) {
          var V = !1, x = D.trim(), b = !1;
          (o || i) && s ? x.startsWith("@") ? V = !0 : x = qf(D, s, u) : o && !s && (x === "&" || x === "") && (x = "", b = !0);
          var w = e(I, r, {
            root: b,
            injectHash: V,
            parentSelectors: [].concat(Le(a), [x])
          }), N = pe(w, 2), j = N[0], L = N[1];
          h = ee(ee({}, h), L), d += "".concat(x).concat(j);
        } else {
          let q = function(re, $) {
            process.env.NODE_ENV !== "production" && (ye(I) !== "object" || !(I != null && I[Ns])) && [Uf, Wf].concat(Le(p)).forEach(function(U) {
              return U(re, $, {
                path: c,
                hashId: s,
                parentSelectors: a
              });
            });
            var M = re.replace(/[A-Z]/g, function(U) {
              return "-".concat(U.toLowerCase());
            }), H = $;
            !Cs[re] && typeof H == "number" && H !== 0 && (H = "".concat(H, "px")), re === "animationName" && $ !== null && $ !== void 0 && $._keyframe && (C($), H = $.getName(s)), d += "".concat(M, ":").concat(H, ";");
          };
          var z, K = (z = I?.value) !== null && z !== void 0 ? z : I;
          ye(I) === "object" && I !== null && I !== void 0 && I[$s] && Array.isArray(K) ? K.forEach(function(re) {
            q(D, re);
          }) : q(D, K);
        }
      });
    }
  }), !o)
    d = "{".concat(d, "}");
  else if (l && lf()) {
    var O = l.split(","), g = O[O.length - 1].trim();
    d = "@layer ".concat(g, " {").concat(d, "}"), O.length > 1 && (d = "@layer ".concat(l, "{%%%:%}").concat(d));
  }
  return [d, h];
};
function Qf(e, t) {
  return Lo("".concat(e.join("%")).concat(t));
}
function Jf() {
  return null;
}
function to(e, t) {
  var r = e.token, n = e.path, o = e.hashId, i = e.layer, a = e.nonce, s = e.clientOnly, l = e.order, c = l === void 0 ? 0 : l, u = y.useContext(Do), f = u.autoClear, m = u.mock, v = u.defaultCache, p = u.hashPriority, d = u.container, h = u.ssrInline, C = u.transformers, E = u.linters, R = u.cache, O = r._tokenKey, g = [O].concat(Le(n)), A = Li;
  process.env.NODE_ENV !== "production" && m !== void 0 && (A = m === "client");
  var _ = Es(
    "style",
    g,
    // Create cache if needed
    function() {
      var x = g.join("|");
      if (Gf(x)) {
        var b = Yf(x), w = pe(b, 2), N = w[0], j = w[1];
        if (N)
          return [N, O, j, {}, s, c];
      }
      var L = t(), z = Xf(L, {
        hashId: o,
        hashPriority: p,
        layer: i,
        path: n.join("-"),
        transformers: C,
        linters: E
      }), K = pe(z, 2), q = K[0], re = K[1], $ = Di(q), M = Qf(g, $);
      return [$, O, M, re, s, c];
    },
    // Remove cache if no need
    function(x, b) {
      var w = pe(x, 3), N = w[2];
      (b || f) && Li && ms(N, {
        mark: mt
      });
    },
    // Effect: Inject style here
    function(x) {
      var b = pe(x, 4), w = b[0];
      b[1];
      var N = b[2], j = b[3];
      if (A && w !== Rs) {
        var L = {
          mark: mt,
          prepend: "queue",
          attachTo: d,
          priority: c
        }, z = typeof a == "function" ? a() : a;
        z && (L.csp = {
          nonce: z
        });
        var K = qt(w, N, L);
        K[xt] = R.instanceId, K.setAttribute(qn, O), process.env.NODE_ENV !== "production" && K.setAttribute(Ju, g.join("|")), Object.keys(j).forEach(function(q) {
          qt(Di(j[q]), "_effect-".concat(q), L);
        });
      }
    }
  ), F = pe(_, 3), D = F[0], I = F[1], V = F[2];
  return function(x) {
    var b;
    if (!h || A || !v)
      b = /* @__PURE__ */ y.createElement(Jf, null);
    else {
      var w;
      b = /* @__PURE__ */ y.createElement("style", $e({}, (w = {}, ae(w, qn, I), ae(w, mt, V), w), {
        dangerouslySetInnerHTML: {
          __html: D
        }
      }));
    }
    return /* @__PURE__ */ y.createElement(y.Fragment, null, b, x);
  };
}
var ji = /* @__PURE__ */ function() {
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
var Zf = /* @__PURE__ */ nr({});
const Bo = Zf;
function ed(e) {
  return gs(e) || ss(e) || Mo(e) || vs();
}
function ro(e, t) {
  for (var r = e, n = 0; n < t.length; n += 1) {
    if (r == null)
      return;
    r = r[t[n]];
  }
  return r;
}
function Is(e, t, r, n) {
  if (!t.length)
    return r;
  var o = ed(t), i = o[0], a = o.slice(1), s;
  return !e && typeof i == "number" ? s = [] : Array.isArray(e) ? s = Le(e) : s = ee({}, e), n && r === void 0 && a.length === 1 ? delete s[i][a[0]] : s[i] = Is(s[i], a, r, n), s;
}
function xn(e, t, r) {
  var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return t.length && n && r === void 0 && !ro(e, t.slice(0, -1)) ? e : Is(e, t, r, n);
}
function td(e) {
  return ye(e) === "object" && e !== null && Object.getPrototypeOf(e) === Object.prototype;
}
function Fi(e) {
  return Array.isArray(e) ? [] : {};
}
var rd = typeof Reflect > "u" ? Object.keys : Reflect.ownKeys;
function nd() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n = Fi(t[0]);
  return t.forEach(function(o) {
    function i(a, s) {
      var l = new Set(s), c = ro(o, a), u = Array.isArray(c);
      if (u || td(c)) {
        if (!l.has(c)) {
          l.add(c);
          var f = ro(n, a);
          u ? n = xn(n, a, []) : (!f || ye(f) !== "object") && (n = xn(n, a, Fi(c))), rd(c).forEach(function(m) {
            i([].concat(Le(a), [m]), l);
          });
        }
      } else
        n = xn(n, a, c);
    }
    i([]);
  }), n;
}
function od() {
}
let Ms = od;
process.env.NODE_ENV !== "production" && (Ms = (e, t, r) => {
  ct(e, `[antd: ${t}] ${r}`), process.env.NODE_ENV === "test" && ts();
});
const qe = Ms, id = /* @__PURE__ */ nr(void 0), ad = {
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
var sd = {
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
const cd = {
  placeholder: "Select time",
  rangePlaceholder: ["Start time", "End time"]
}, ks = cd, ld = {
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
  }, sd),
  timePickerLocale: Object.assign({}, ks)
}, Hi = ld, Ie = "${label} is not a valid ${type}", ud = {
  locale: "en",
  Pagination: ad,
  DatePicker: Hi,
  TimePicker: ks,
  Calendar: Hi,
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
}, zo = ud;
let wn = Object.assign({}, zo.Modal);
function Bi(e) {
  e ? wn = Object.assign(Object.assign({}, wn), e) : wn = Object.assign({}, zo.Modal);
}
const fd = /* @__PURE__ */ nr(void 0), Ls = fd, Ds = "internalMark", js = (e) => {
  const {
    locale: t = {},
    children: r,
    _ANT_MARK__: n
  } = e;
  process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && qe(n === Ds, "LocaleProvider", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale"), y.useEffect(() => (Bi(t && t.Modal), () => {
    Bi();
  }), [t]);
  const o = y.useMemo(() => Object.assign(Object.assign({}, t), {
    exist: !0
  }), [t]);
  return /* @__PURE__ */ y.createElement(Ls.Provider, {
    value: o
  }, r);
};
process.env.NODE_ENV !== "production" && (js.displayName = "LocaleProvider");
const dd = js, pd = "5.7.3";
function Re(e, t) {
  hd(e) && (e = "100%");
  var r = md(e);
  return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), r && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e);
}
function dr(e) {
  return Math.min(1, Math.max(0, e));
}
function hd(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function md(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function Fs(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function pr(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function pt(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function gd(e, t, r) {
  return {
    r: Re(e, 255) * 255,
    g: Re(t, 255) * 255,
    b: Re(r, 255) * 255
  };
}
function zi(e, t, r) {
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
function vd(e, t, r) {
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
function yd(e, t, r) {
  e = Re(e, 360) * 6, t = Re(t, 100), r = Re(r, 100);
  var n = Math.floor(e), o = e - n, i = r * (1 - t), a = r * (1 - o * t), s = r * (1 - (1 - o) * t), l = n % 6, c = [r, a, i, i, s, r][l], u = [s, r, r, a, i, i][l], f = [i, i, s, r, r, a][l];
  return { r: c * 255, g: u * 255, b: f * 255 };
}
function oo(e, t, r, n) {
  var o = [
    pt(Math.round(e).toString(16)),
    pt(Math.round(t).toString(16)),
    pt(Math.round(r).toString(16))
  ];
  return n && o[0].startsWith(o[0].charAt(1)) && o[1].startsWith(o[1].charAt(1)) && o[2].startsWith(o[2].charAt(1)) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) : o.join("");
}
function bd(e, t, r, n, o) {
  var i = [
    pt(Math.round(e).toString(16)),
    pt(Math.round(t).toString(16)),
    pt(Math.round(r).toString(16)),
    pt(Sd(n))
  ];
  return o && i[0].startsWith(i[0].charAt(1)) && i[1].startsWith(i[1].charAt(1)) && i[2].startsWith(i[2].charAt(1)) && i[3].startsWith(i[3].charAt(1)) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) + i[3].charAt(0) : i.join("");
}
function Sd(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function Ui(e) {
  return Me(e) / 255;
}
function Me(e) {
  return parseInt(e, 16);
}
function Ed(e) {
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
  return typeof e == "string" && (e = wd(e)), typeof e == "object" && (Je(e.r) && Je(e.g) && Je(e.b) ? (t = gd(e.r, e.g, e.b), a = !0, s = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : Je(e.h) && Je(e.s) && Je(e.v) ? (n = pr(e.s), o = pr(e.v), t = yd(e.h, n, o), a = !0, s = "hsv") : Je(e.h) && Je(e.s) && Je(e.l) && (n = pr(e.s), i = pr(e.l), t = vd(e.h, n, i), a = !0, s = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (r = e.a)), r = Fs(r), {
    ok: a,
    format: e.format || s,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: r
  };
}
var Cd = "[-\\+]?\\d+%?", xd = "[-\\+]?\\d*\\.\\d+%?", at = "(?:".concat(xd, ")|(?:").concat(Cd, ")"), On = "[\\s|\\(]+(".concat(at, ")[,|\\s]+(").concat(at, ")[,|\\s]+(").concat(at, ")\\s*\\)?"), Tn = "[\\s|\\(]+(".concat(at, ")[,|\\s]+(").concat(at, ")[,|\\s]+(").concat(at, ")[,|\\s]+(").concat(at, ")\\s*\\)?"), Be = {
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
function wd(e) {
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
    a: Ui(r[4]),
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
    a: Ui(r[4] + r[4]),
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
      typeof t == "number" && (t = Ed(t)), this.originalInput = t;
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
      return this.a = Fs(t), this.roundA = Math.round(100 * this.a) / 100, this;
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
      var t = zi(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
    }, e.prototype.toHslString = function() {
      var t = zi(this.r, this.g, this.b), r = Math.round(t.h * 360), n = Math.round(t.s * 100), o = Math.round(t.l * 100);
      return this.a === 1 ? "hsl(".concat(r, ", ").concat(n, "%, ").concat(o, "%)") : "hsla(".concat(r, ", ").concat(n, "%, ").concat(o, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHex = function(t) {
      return t === void 0 && (t = !1), oo(this.r, this.g, this.b, t);
    }, e.prototype.toHexString = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex(t);
    }, e.prototype.toHex8 = function(t) {
      return t === void 0 && (t = !1), bd(this.r, this.g, this.b, this.a, t);
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
), hr = 2, Wi = 0.16, _d = 0.05, Od = 0.05, Td = 0.15, Hs = 5, Bs = 4, Ad = [{
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
function Vi(e) {
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
function Rd(e, t, r) {
  var n = r / 100, o = {
    r: (t.r - e.r) * n + e.r,
    g: (t.g - e.g) * n + e.g,
    b: (t.b - e.b) * n + e.b
  };
  return o;
}
function Gi(e, t, r) {
  var n;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? n = r ? Math.round(e.h) - hr * t : Math.round(e.h) + hr * t : n = r ? Math.round(e.h) + hr * t : Math.round(e.h) - hr * t, n < 0 ? n += 360 : n >= 360 && (n -= 360), n;
}
function Yi(e, t, r) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  var n;
  return r ? n = e.s - Wi * t : t === Bs ? n = e.s + Wi : n = e.s + _d * t, n > 1 && (n = 1), r && t === Hs && n > 0.1 && (n = 0.1), n < 0.06 && (n = 0.06), Number(n.toFixed(2));
}
function Ki(e, t, r) {
  var n;
  return r ? n = e.v + Od * t : n = e.v - Td * t, n > 1 && (n = 1), Number(n.toFixed(2));
}
function yt(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = [], n = Ct(e), o = Hs; o > 0; o -= 1) {
    var i = Vi(n), a = mr(Ct({
      h: Gi(i, o, !0),
      s: Yi(i, o, !0),
      v: Ki(i, o, !0)
    }));
    r.push(a);
  }
  r.push(mr(n));
  for (var s = 1; s <= Bs; s += 1) {
    var l = Vi(n), c = mr(Ct({
      h: Gi(l, s),
      s: Yi(l, s),
      v: Ki(l, s)
    }));
    r.push(c);
  }
  return t.theme === "dark" ? Ad.map(function(u) {
    var f = u.index, m = u.opacity, v = mr(Rd(Ct(t.backgroundColor || "#141414"), Ct(r[f]), m * 100));
    return v;
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
var Pd = Mr.blue;
const Nd = (e) => {
  const {
    controlHeight: t
  } = e;
  return {
    controlHeightSM: t * 0.75,
    controlHeightXS: t * 0.5,
    controlHeightLG: t * 1.25
  };
}, $d = Nd;
function Id(e) {
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
const zs = {
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
}, Md = Object.assign(Object.assign({}, zs), {
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
}), nn = Md;
function kd(e, t) {
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
  } = e, f = r(l), m = r(o), v = r(i), p = r(a), d = r(s), h = n(c, u), C = e.colorLink || e.colorInfo, E = r(C);
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
    colorWarningBg: v[1],
    colorWarningBgHover: v[2],
    colorWarningBorder: v[3],
    colorWarningBorderHover: v[4],
    colorWarningHover: v[4],
    colorWarning: v[6],
    colorWarningActive: v[7],
    colorWarningTextHover: v[8],
    colorWarningText: v[9],
    colorWarningTextActive: v[10],
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
const Ld = (e) => {
  let t = e, r = e, n = e, o = e;
  return e < 6 && e >= 5 ? t = e + 1 : e < 16 && e >= 6 ? t = e + 2 : e >= 16 && (t = 16), e < 7 && e >= 5 ? r = 4 : e < 8 && e >= 7 ? r = 5 : e < 14 && e >= 8 ? r = 6 : e < 16 && e >= 14 ? r = 7 : e >= 16 && (r = 8), e < 6 && e >= 2 ? n = 1 : e >= 6 && (n = 2), e > 4 && e < 8 ? o = 4 : e >= 8 && (o = 6), {
    borderRadius: e > 16 ? 16 : e,
    borderRadiusXS: n,
    borderRadiusSM: r,
    borderRadiusLG: t,
    borderRadiusOuter: o
  };
}, Dd = Ld;
function jd(e) {
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
  }, Dd(n));
}
const Ze = (e, t) => new ke(e).setAlpha(t).toRgbString(), zt = (e, t) => new ke(e).darken(t).toHexString(), Fd = (e) => {
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
}, Hd = (e, t) => {
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
function Bd(e) {
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
const zd = (e) => {
  const t = Bd(e), r = t.map((o) => o.size), n = t.map((o) => o.lineHeight);
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
}, Ud = zd;
function Wd(e) {
  const t = Object.keys(zs).map((r) => {
    const n = yt(e[r]);
    return new Array(10).fill(1).reduce((o, i, a) => (o[`${r}-${a + 1}`] = n[a], o[`${r}${a + 1}`] = n[a], o), {});
  }).reduce((r, n) => (r = Object.assign(Object.assign({}, r), n), r), {});
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), kd(e, {
    generateColorPalettes: Fd,
    generateNeutralColorPalettes: Hd
  })), Ud(e.fontSize)), Id(e)), $d(e)), jd(e));
}
const Vd = bs(Wd), Us = {
  token: nn,
  hashed: !0
}, Ws = /* @__PURE__ */ de.createContext(Us);
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
    const u = Math.round((r - a * (1 - c)) / c), f = Math.round((n - s * (1 - c)) / c), m = Math.round((o - l * (1 - c)) / c);
    if (Pn(u) && Pn(f) && Pn(m))
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
var Gd = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
function Yd(e) {
  const {
    override: t
  } = e, r = Gd(e, ["override"]), n = Object.assign({}, t);
  Object.keys(nn).forEach((m) => {
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
function on() {
  const {
    token: e,
    hashed: t,
    theme: r,
    components: n
  } = de.useContext(Ws), o = `${pd}-${t || ""}`, i = r || Vd, [a, s] = _f(i, [nn, e], {
    salt: o,
    override: Object.assign({
      override: e
    }, n),
    formatToken: Yd
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
const Uo = "anticon", Kd = (e, t) => t || (e ? `ant-${e}` : "ant"), ot = /* @__PURE__ */ y.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: Kd,
  iconPrefixCls: Uo
}), qd = (e) => ({
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
}), Xd = () => ({
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
}), Qd = (e) => ({
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
}), Jd = (e, t) => {
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
}, Zd = (e) => ({
  outline: `${e.lineWidthFocus}px solid ${e.colorPrimaryBorder}`,
  outlineOffset: 1,
  transition: "outline-offset 0s, outline 0s"
}), ep = (e) => ({
  "&:focus-visible": Object.assign({}, Zd(e))
}), Vs = process.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC < "u";
let ao = !0;
function Rt() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  if (!Vs)
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
function tp() {
}
function rp(e) {
  let t, r = e, n = tp;
  return Vs && (t = /* @__PURE__ */ new Set(), r = new Proxy(e, {
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
      csp: u
    } = Ne(ot), f = l(), m = {
      theme: i,
      token: a,
      hashId: s,
      nonce: () => u?.nonce
    };
    return to(Object.assign(Object.assign({}, m), {
      path: ["Shared", f]
    }), () => [{
      // Link
      "&": Qd(a)
    }]), [to(Object.assign(Object.assign({}, m), {
      path: [e, o, c]
    }), () => {
      const {
        token: v,
        flush: p
      } = rp(a), d = Object.assign({}, a[e]);
      if (n?.deprecatedTokens) {
        const {
          deprecatedTokens: g
        } = n;
        g.forEach((A) => {
          let [_, F] = A;
          var D;
          process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && ct(!d?.[_], `The token '${String(_)}' of ${e} had deprecated, use '${String(F)}' instead.`), (d?.[_] || d?.[F]) && ((D = d[F]) !== null && D !== void 0 || (d[F] = d?.[_]));
        });
      }
      const h = typeof r == "function" ? r(Rt(v, d ?? {})) : r, C = Object.assign(Object.assign({}, h), d), E = `.${o}`, R = Rt(v, {
        componentCls: E,
        prefixCls: o,
        iconCls: `.${c}`,
        antCls: `.${f}`
      }, C), O = t(R, {
        hashId: s,
        prefixCls: o,
        rootPrefixCls: f,
        iconPrefixCls: c,
        overrideComponentToken: d
      });
      return p(e, C), [n?.resetStyle === !1 ? null : Jd(a, o), O];
    }), s];
  };
}
const np = `-ant-${Date.now()}-${Math.random()}`;
function op(e, t) {
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
function ip(e, t) {
  const r = op(e, t);
  Qe() ? qt(r, `${np}-dynamic-theme`) : process.env.NODE_ENV !== "production" && qe(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
const so = /* @__PURE__ */ y.createContext(!1), ap = (e) => {
  let {
    children: t,
    disabled: r
  } = e;
  const n = y.useContext(so);
  return /* @__PURE__ */ y.createElement(so.Provider, {
    value: r ?? n
  }, t);
}, Gs = so, co = /* @__PURE__ */ y.createContext(void 0), sp = (e) => {
  let {
    children: t,
    size: r
  } = e;
  const n = y.useContext(co);
  return /* @__PURE__ */ y.createElement(co.Provider, {
    value: r || n
  }, t);
}, an = co;
function cp() {
  const e = Ne(Gs), t = Ne(an);
  return {
    componentDisabled: e,
    componentSize: t
  };
}
function lp(e, t) {
  const r = e || {}, n = r.inherit === !1 || !t ? Us : t;
  return ns(() => {
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
    return !Xu(s, c, !0);
  }));
}
var up = ["children"], Ys = /* @__PURE__ */ y.createContext({});
function fp(e) {
  var t = e.children, r = Tt(e, up);
  return /* @__PURE__ */ y.createElement(Ys.Provider, {
    value: r
  }, t);
}
var dp = /* @__PURE__ */ function(e) {
  qa(r, e);
  var t = Xa(r);
  function r() {
    return It(this, r), t.apply(this, arguments);
  }
  return Mt(r, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), r;
}(y.Component), ut = "none", vr = "appear", yr = "enter", br = "leave", qi = "none", ze = "prepare", wt = "start", _t = "active", Vo = "end", Ks = "prepared";
function Xi(e, t) {
  var r = {};
  return r[e.toLowerCase()] = t.toLowerCase(), r["Webkit".concat(e)] = "webkit".concat(t), r["Moz".concat(e)] = "moz".concat(t), r["ms".concat(e)] = "MS".concat(t), r["O".concat(e)] = "o".concat(t.toLowerCase()), r;
}
function pp(e, t) {
  var r = {
    animationend: Xi("Animation", "AnimationEnd"),
    transitionend: Xi("Transition", "TransitionEnd")
  };
  return e && ("AnimationEvent" in t || delete r.animationend.animation, "TransitionEvent" in t || delete r.transitionend.transition), r;
}
var hp = pp(Qe(), typeof window < "u" ? window : {}), qs = {};
if (Qe()) {
  var mp = document.createElement("div");
  qs = mp.style;
}
var Sr = {};
function Xs(e) {
  if (Sr[e])
    return Sr[e];
  var t = hp[e];
  if (t)
    for (var r = Object.keys(t), n = r.length, o = 0; o < n; o += 1) {
      var i = r[o];
      if (Object.prototype.hasOwnProperty.call(t, i) && i in qs)
        return Sr[e] = t[i], Sr[e];
    }
  return "";
}
var Qs = Xs("animationend"), Js = Xs("transitionend"), Zs = !!(Qs && Js), Qi = Qs || "animationend", Ji = Js || "transitionend";
function Zi(e, t) {
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
const gp = function(e) {
  var t = je(), r = je(e);
  r.current = e;
  var n = y.useCallback(function(a) {
    r.current(a);
  }, []);
  function o(a) {
    a && (a.removeEventListener(Ji, n), a.removeEventListener(Qi, n));
  }
  function i(a) {
    t.current && t.current !== a && o(t.current), a && a !== t.current && (a.addEventListener(Ji, n), a.addEventListener(Qi, n), t.current = a);
  }
  return y.useEffect(function() {
    return function() {
      o(t.current);
    };
  }, []), [i, o];
};
var ec = Qe() ? Ca : Ue;
const vp = function() {
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
var yp = [ze, wt, _t, Vo], bp = [ze, Ks], tc = !1, Sp = !0;
function rc(e) {
  return e === _t || e === Vo;
}
const Ep = function(e, t, r) {
  var n = kr(qi), o = pe(n, 2), i = o[0], a = o[1], s = vp(), l = pe(s, 2), c = l[0], u = l[1];
  function f() {
    a(ze, !0);
  }
  var m = t ? bp : yp;
  return ec(function() {
    if (i !== qi && i !== Vo) {
      var v = m.indexOf(i), p = m[v + 1], d = r(i);
      d === tc ? a(p, !0) : p && c(function(h) {
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
function Cp(e, t, r, n) {
  var o = n.motionEnter, i = o === void 0 ? !0 : o, a = n.motionAppear, s = a === void 0 ? !0 : a, l = n.motionLeave, c = l === void 0 ? !0 : l, u = n.motionDeadline, f = n.motionLeaveImmediately, m = n.onAppearPrepare, v = n.onEnterPrepare, p = n.onLeavePrepare, d = n.onAppearStart, h = n.onEnterStart, C = n.onLeaveStart, E = n.onAppearActive, R = n.onEnterActive, O = n.onLeaveActive, g = n.onAppearEnd, A = n.onEnterEnd, _ = n.onLeaveEnd, F = n.onVisibleChanged, D = kr(), I = pe(D, 2), V = I[0], x = I[1], b = kr(ut), w = pe(b, 2), N = w[0], j = w[1], L = kr(null), z = pe(L, 2), K = z[0], q = z[1], re = je(!1), $ = je(null);
  function M() {
    return r();
  }
  var H = je(!1);
  function U() {
    j(ut, !0), q(null, !0);
  }
  function S(ge) {
    var G = M();
    if (!(ge && !ge.deadline && ge.target !== G)) {
      var oe = H.current, be;
      N === vr && oe ? be = g?.(G, ge) : N === yr && oe ? be = A?.(G, ge) : N === br && oe && (be = _?.(G, ge)), N !== ut && oe && be !== !1 && U();
    }
  }
  var te = gp(S), k = pe(te, 1), ne = k[0], J = function(G) {
    var oe, be, xe;
    switch (G) {
      case vr:
        return oe = {}, ae(oe, ze, m), ae(oe, wt, d), ae(oe, _t, E), oe;
      case yr:
        return be = {}, ae(be, ze, v), ae(be, wt, h), ae(be, _t, R), be;
      case br:
        return xe = {}, ae(xe, ze, p), ae(xe, wt, C), ae(xe, _t, O), xe;
      default:
        return {};
    }
  }, Q = y.useMemo(function() {
    return J(N);
  }, [N]), P = Ep(N, !e, function(ge) {
    if (ge === ze) {
      var G = Q[ze];
      return G ? G(M()) : tc;
    }
    if (W in Q) {
      var oe;
      q(((oe = Q[W]) === null || oe === void 0 ? void 0 : oe.call(Q, M(), null)) || null);
    }
    return W === _t && (ne(M()), u > 0 && (clearTimeout($.current), $.current = setTimeout(function() {
      S({
        deadline: !0
      });
    }, u))), W === Ks && U(), Sp;
  }), se = pe(P, 2), B = se[0], W = se[1], he = rc(W);
  H.current = he, ec(function() {
    x(t);
    var ge = re.current;
    re.current = !0;
    var G;
    !ge && t && s && (G = vr), ge && t && i && (G = yr), (ge && !t && c || !ge && f && !t && c) && (G = br);
    var oe = J(G);
    G && (e || oe[ze]) ? (j(G), B()) : j(ut);
  }, [t]), Ue(function() {
    // Cancel appear
    (N === vr && !s || // Cancel enter
    N === yr && !i || // Cancel leave
    N === br && !c) && j(ut);
  }, [s, i, c]), Ue(function() {
    return function() {
      re.current = !1, clearTimeout($.current);
    };
  }, []);
  var Z = y.useRef(!1);
  Ue(function() {
    V && (Z.current = !0), V !== void 0 && N === ut && ((Z.current || V) && F?.(V), Z.current = !0);
  }, [V, N]);
  var me = K;
  return Q[ze] && W === wt && (me = ee({
    transition: "none"
  }, me)), [N, W, me, V ?? t];
}
function xp(e) {
  var t = e;
  ye(e) === "object" && (t = e.transitionSupport);
  function r(o, i) {
    return !!(o.motionName && t && i !== !1);
  }
  var n = /* @__PURE__ */ y.forwardRef(function(o, i) {
    var a = o.visible, s = a === void 0 ? !0 : a, l = o.removeOnLeave, c = l === void 0 ? !0 : l, u = o.forceRender, f = o.children, m = o.motionName, v = o.leavedClassName, p = o.eventProps, d = y.useContext(Ys), h = d.motion, C = r(o, h), E = je(), R = je();
    function O() {
      try {
        return E.current instanceof HTMLElement ? E.current : Vu(R.current);
      } catch {
        return null;
      }
    }
    var g = Cp(C, s, O, o), A = pe(g, 4), _ = A[0], F = A[1], D = A[2], I = A[3], V = y.useRef(I);
    I && (V.current = !0);
    var x = y.useCallback(function(q) {
      E.current = q, os(i, q);
    }, [i]), b, w = ee(ee({}, p), {}, {
      visible: s
    });
    if (!f)
      b = null;
    else if (_ === ut)
      I ? b = f(ee({}, w), x) : !c && V.current && v ? b = f(ee(ee({}, w), {}, {
        className: v
      }), x) : u || !c && !v ? b = f(ee(ee({}, w), {}, {
        style: {
          display: "none"
        }
      }), x) : b = null;
    else {
      var N, j;
      F === ze ? j = "prepare" : rc(F) ? j = "active" : F === wt && (j = "start");
      var L = Zi(m, "".concat(_, "-").concat(j));
      b = f(ee(ee({}, w), {}, {
        className: Te(Zi(m, _), (N = {}, ae(N, L, L && j), ae(N, m, typeof m == "string"), N)),
        style: D
      }), x);
    }
    if (/* @__PURE__ */ y.isValidElement(b) && as(b)) {
      var z = b, K = z.ref;
      K || (b = /* @__PURE__ */ y.cloneElement(b, {
        ref: x
      }));
    }
    return /* @__PURE__ */ y.createElement(dp, {
      ref: R
    }, b);
  });
  return n.displayName = "CSSMotion", n;
}
const Go = xp(Zs);
var lo = "add", uo = "keep", fo = "remove", Nn = "removed";
function wp(e) {
  var t;
  return e && ye(e) === "object" && "key" in e ? t = e : t = {
    key: e
  }, ee(ee({}, t), {}, {
    key: String(t.key)
  });
}
function po() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return e.map(wp);
}
function _p() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], r = [], n = 0, o = t.length, i = po(e), a = po(t);
  i.forEach(function(c) {
    for (var u = !1, f = n; f < o; f += 1) {
      var m = a[f];
      if (m.key === c.key) {
        n < f && (r = r.concat(a.slice(n, f).map(function(v) {
          return ee(ee({}, v), {}, {
            status: lo
          });
        })), n = f), r.push(ee(ee({}, m), {}, {
          status: uo
        })), n += 1, u = !0;
        break;
      }
    }
    u || r.push(ee(ee({}, c), {}, {
      status: fo
    }));
  }), n < o && (r = r.concat(a.slice(n).map(function(c) {
    return ee(ee({}, c), {}, {
      status: lo
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
      return f !== c || m !== fo;
    }), r.forEach(function(u) {
      u.key === c && (u.status = uo);
    });
  }), r;
}
var Op = ["component", "children", "onVisibleChanged", "onAllRemoved"], Tp = ["status"], Ap = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function Rp(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Go, r = /* @__PURE__ */ function(n) {
    qa(i, n);
    var o = Xa(i);
    function i() {
      var a;
      It(this, i);
      for (var s = arguments.length, l = new Array(s), c = 0; c < s; c++)
        l[c] = arguments[c];
      return a = o.call.apply(o, [this].concat(l)), ae(Vn(a), "state", {
        keyEntities: []
      }), ae(Vn(a), "removeKey", function(u) {
        var f = a.state.keyEntities, m = f.map(function(v) {
          return v.key !== u ? v : ee(ee({}, v), {}, {
            status: Nn
          });
        });
        return a.setState({
          keyEntities: m
        }), m.filter(function(v) {
          var p = v.status;
          return p !== Nn;
        }).length;
      }), a;
    }
    return Mt(i, [{
      key: "render",
      value: function() {
        var s = this, l = this.state.keyEntities, c = this.props, u = c.component, f = c.children, m = c.onVisibleChanged, v = c.onAllRemoved, p = Tt(c, Op), d = u || y.Fragment, h = {};
        return Ap.forEach(function(C) {
          h[C] = p[C], delete p[C];
        }), delete p.keys, /* @__PURE__ */ y.createElement(d, p, l.map(function(C) {
          var E = C.status, R = Tt(C, Tp), O = E === lo || E === uo;
          return /* @__PURE__ */ y.createElement(t, $e({}, h, {
            key: R.key,
            visible: O,
            eventProps: R,
            onVisibleChanged: function(A) {
              if (m?.(A, {
                key: R.key
              }), !A) {
                var _ = s.removeKey(R.key);
                _ === 0 && v && v();
              }
            }
          }), f);
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(s, l) {
        var c = s.keys, u = l.keyEntities, f = po(c), m = _p(u, f);
        return {
          keyEntities: m.filter(function(v) {
            var p = u.find(function(d) {
              var h = d.key;
              return v.key === h;
            });
            return !(p && p.status === Nn && v.status === fo);
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
const Pp = Rp(Zs);
function Np(e) {
  const {
    children: t
  } = e, [, r] = on(), {
    motion: n
  } = r, o = y.useRef(!1);
  return o.current = o.current || n === !1, o.current ? /* @__PURE__ */ y.createElement(fp, {
    motion: n
  }, t) : t;
}
const $p = (e, t) => {
  const [r, n] = on();
  return to({
    theme: r,
    token: n,
    hashId: "",
    path: ["ant-design-icons", e],
    nonce: () => t?.nonce
  }, () => [{
    [`.${e}`]: Object.assign(Object.assign({}, Xd()), {
      [`.${e} .${e}-icon`]: {
        display: "block"
      }
    })
  }]);
}, Ip = $p;
var Mp = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
let ho = !1;
const kp = process.env.NODE_ENV !== "production" ? (e) => {
  process.env.NODE_ENV !== "production" && qe(!ho, e, "Static function can not consume context like dynamic theme. Please use 'App' component instead.");
} : (
  /* istanbul ignore next */
  null
), Lp = ["getTargetContainer", "getPopupContainer", "renderEmpty", "pageHeader", "input", "pagination", "form", "select", "button"], Dp = "ant";
let zr, nc, oc;
function Lr() {
  return zr || Dp;
}
function jp() {
  return nc || Uo;
}
function Fp(e) {
  return Object.keys(e).some((t) => t.endsWith("Color"));
}
const Hp = (e) => {
  let {
    prefixCls: t,
    iconPrefixCls: r,
    theme: n
  } = e;
  t !== void 0 && (zr = t), r !== void 0 && (nc = r), n && (Fp(n) ? (process.env.NODE_ENV !== "production" && qe(!1, "ConfigProvider", "`config` of css variable theme is not work in v5. Please use new `theme` config instead."), ip(Lr(), n)) : oc = n);
}, ic = () => ({
  getPrefixCls: (e, t) => t || (e ? `${Lr()}-${e}` : Lr()),
  getIconPrefixCls: jp,
  getRootPrefixCls: () => zr || Lr(),
  getTheme: () => oc
}), Bp = (e) => {
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
    popupMatchSelectWidth: v,
    popupOverflow: p,
    legacyLocale: d,
    parentContext: h,
    iconPrefixCls: C,
    theme: E,
    componentDisabled: R,
    segmented: O,
    statistic: g,
    spin: A,
    calendar: _,
    carousel: F,
    cascader: D,
    collapse: I,
    typography: V,
    checkbox: x,
    descriptions: b,
    divider: w,
    drawer: N,
    skeleton: j,
    steps: L,
    image: z,
    layout: K,
    list: q,
    mentions: re,
    modal: $,
    progress: M,
    result: H,
    slider: U,
    breadcrumb: S,
    menu: te,
    pagination: k,
    input: ne,
    empty: J,
    badge: Q,
    radio: P,
    rate: se,
    switch: B,
    transfer: W,
    avatar: he,
    message: Z,
    tag: me,
    table: ge,
    card: G,
    tabs: oe,
    timeline: be,
    timePicker: xe,
    upload: X,
    notification: ve,
    tree: jt,
    colorPicker: Ft,
    datePicker: Ve
  } = e;
  process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && qe(m === void 0, "ConfigProvider", "`dropdownMatchSelectWidth` is deprecated. Please use `popupMatchSelectWidth` instead.");
  const Xc = y.useCallback((we, Ae) => {
    const {
      prefixCls: Ge
    } = e;
    if (Ae)
      return Ae;
    const Ye = Ge || h.getPrefixCls("");
    return we ? `${Ye}-${we}` : Ye;
  }, [h.getPrefixCls, e.prefixCls]), St = C || h.iconPrefixCls || Uo, Qc = St !== h.iconPrefixCls, Ht = r || h.csp, Jc = Ip(St, Ht), sr = lp(E, h.theme);
  process.env.NODE_ENV !== "production" && (ho = ho || !!sr);
  const pn = {
    csp: Ht,
    autoInsertSpaceInButton: n,
    alert: o,
    anchor: i,
    locale: s || d,
    direction: c,
    space: u,
    virtual: f,
    popupMatchSelectWidth: v ?? m,
    popupOverflow: p,
    getPrefixCls: Xc,
    iconPrefixCls: St,
    theme: sr,
    segmented: O,
    statistic: g,
    spin: A,
    calendar: _,
    carousel: F,
    cascader: D,
    collapse: I,
    typography: V,
    checkbox: x,
    descriptions: b,
    divider: w,
    drawer: N,
    skeleton: j,
    steps: L,
    image: z,
    input: ne,
    layout: K,
    list: q,
    mentions: re,
    modal: $,
    progress: M,
    result: H,
    slider: U,
    breadcrumb: S,
    menu: te,
    pagination: k,
    empty: J,
    badge: Q,
    radio: P,
    rate: se,
    switch: B,
    transfer: W,
    avatar: he,
    message: Z,
    tag: me,
    table: ge,
    card: G,
    tabs: oe,
    timeline: be,
    timePicker: xe,
    upload: X,
    notification: ve,
    tree: jt,
    colorPicker: Ft,
    datePicker: Ve
  }, cr = Object.assign({}, h);
  Object.keys(pn).forEach((we) => {
    pn[we] !== void 0 && (cr[we] = pn[we]);
  }), Lp.forEach((we) => {
    const Ae = e[we];
    Ae && (cr[we] = Ae);
  });
  const lr = ns(() => cr, cr, (we, Ae) => {
    const Ge = Object.keys(we), Ye = Object.keys(Ae);
    return Ge.length !== Ye.length || Ge.some((ur) => we[ur] !== Ae[ur]);
  }), Zc = y.useMemo(() => ({
    prefixCls: St,
    csp: Ht
  }), [St, Ht]);
  let Pe = Qc ? Jc(t) : t;
  const ni = y.useMemo(() => {
    var we, Ae, Ge, Ye;
    return nd(((we = zo.Form) === null || we === void 0 ? void 0 : we.defaultValidateMessages) || {}, ((Ge = (Ae = lr.locale) === null || Ae === void 0 ? void 0 : Ae.Form) === null || Ge === void 0 ? void 0 : Ge.defaultValidateMessages) || {}, ((Ye = lr.form) === null || Ye === void 0 ? void 0 : Ye.validateMessages) || {}, a?.validateMessages || {});
  }, [lr, a?.validateMessages]);
  Object.keys(ni).length > 0 && (Pe = /* @__PURE__ */ y.createElement(id.Provider, {
    value: ni
  }, t)), s && (Pe = /* @__PURE__ */ y.createElement(dd, {
    locale: s,
    _ANT_MARK__: Ds
  }, Pe)), (St || Ht) && (Pe = /* @__PURE__ */ y.createElement(Bo.Provider, {
    value: Zc
  }, Pe)), l && (Pe = /* @__PURE__ */ y.createElement(sp, {
    size: l
  }, Pe)), Pe = /* @__PURE__ */ y.createElement(Np, null, Pe);
  const el = y.useMemo(() => {
    const we = sr || {}, {
      algorithm: Ae,
      token: Ge
    } = we, Ye = Mp(we, ["algorithm", "token"]), ur = Ae && (!Array.isArray(Ae) || Ae.length > 0) ? bs(Ae) : void 0;
    return Object.assign(Object.assign({}, Ye), {
      theme: ur,
      token: Object.assign(Object.assign({}, nn), Ge)
    });
  }, [sr]);
  return E && (Pe = /* @__PURE__ */ y.createElement(Ws.Provider, {
    value: el
  }, Pe)), R !== void 0 && (Pe = /* @__PURE__ */ y.createElement(ap, {
    disabled: R
  }, Pe)), /* @__PURE__ */ y.createElement(ot.Provider, {
    value: lr
  }, Pe);
}, bt = (e) => {
  const t = y.useContext(ot), r = y.useContext(Ls);
  return /* @__PURE__ */ y.createElement(Bp, Object.assign({
    parentContext: t,
    legacyLocale: r
  }, e));
};
bt.ConfigContext = ot;
bt.SizeContext = an;
bt.config = Hp;
bt.useConfig = cp;
Object.defineProperty(bt, "SizeContext", {
  get: () => (process.env.NODE_ENV !== "production" && qe(!1, "ConfigProvider", "ConfigProvider.SizeContext is deprecated. Please use `ConfigProvider.useConfig().componentSize` instead."), an)
});
process.env.NODE_ENV !== "production" && (bt.displayName = "ConfigProvider");
const ac = bt;
var zp = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" } }] }, name: "check-circle", theme: "filled" };
const Up = zp;
function sc(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
}
function Wp(e) {
  return sc(e) !== e?.ownerDocument;
}
function Vp(e) {
  return Wp(e) ? sc(e) : null;
}
function Gp(e, t) {
  ct(e, "[@ant-design/icons] ".concat(t));
}
function ea(e) {
  return ye(e) === "object" && typeof e.name == "string" && typeof e.theme == "string" && (ye(e.icon) === "object" || typeof e.icon == "function");
}
function ta() {
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
  }, ta(e.attrs)), r), (e.children || []).map(function(n, o) {
    return mo(n, "".concat(t, "-").concat(e.tag, "-").concat(o));
  })) : /* @__PURE__ */ de.createElement(e.tag, ee({
    key: t
  }, ta(e.attrs)), (e.children || []).map(function(n, o) {
    return mo(n, "".concat(t, "-").concat(e.tag, "-").concat(o));
  }));
}
function cc(e) {
  return yt(e)[0];
}
function lc(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
var Yp = `
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
`, Kp = function(t) {
  var r = Ne(Bo), n = r.csp, o = r.prefixCls, i = Yp;
  o && (i = i.replace(/anticon/g, o)), Ue(function() {
    var a = t.current, s = Vp(a);
    qt(i, "@ant-design-icons", {
      prepend: !0,
      csp: n,
      attachTo: s
    });
  }, []);
}, qp = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"], Wt = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function Xp(e) {
  var t = e.primaryColor, r = e.secondaryColor;
  Wt.primaryColor = t, Wt.secondaryColor = r || cc(t), Wt.calculated = !!r;
}
function Qp() {
  return ee({}, Wt);
}
var sn = function(t) {
  var r = t.icon, n = t.className, o = t.onClick, i = t.style, a = t.primaryColor, s = t.secondaryColor, l = Tt(t, qp), c = y.useRef(), u = Wt;
  if (a && (u = {
    primaryColor: a,
    secondaryColor: s || cc(a)
  }), Kp(c), Gp(ea(r), "icon should be icon definiton, but got ".concat(r)), !ea(r))
    return null;
  var f = r;
  return f && typeof f.icon == "function" && (f = ee(ee({}, f), {}, {
    icon: f.icon(u.primaryColor, u.secondaryColor)
  })), mo(f.icon, "svg-".concat(f.name), ee(ee({
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
sn.displayName = "IconReact";
sn.getTwoToneColors = Qp;
sn.setTwoToneColors = Xp;
const Yo = sn;
function uc(e) {
  var t = lc(e), r = pe(t, 2), n = r[0], o = r[1];
  return Yo.setTwoToneColors({
    primaryColor: n,
    secondaryColor: o
  });
}
function Jp() {
  var e = Yo.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var Zp = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
uc(Pd.primary);
var cn = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var r, n = e.className, o = e.icon, i = e.spin, a = e.rotate, s = e.tabIndex, l = e.onClick, c = e.twoToneColor, u = Tt(e, Zp), f = y.useContext(Bo), m = f.prefixCls, v = m === void 0 ? "anticon" : m, p = f.rootClassName, d = Te(p, v, (r = {}, ae(r, "".concat(v, "-").concat(o.name), !!o.name), ae(r, "".concat(v, "-spin"), !!i || o.name === "loading"), r), n), h = s;
  h === void 0 && l && (h = -1);
  var C = a ? {
    msTransform: "rotate(".concat(a, "deg)"),
    transform: "rotate(".concat(a, "deg)")
  } : void 0, E = lc(c), R = pe(E, 2), O = R[0], g = R[1];
  return /* @__PURE__ */ y.createElement("span", $e({
    role: "img",
    "aria-label": o.name
  }, u, {
    ref: t,
    tabIndex: h,
    onClick: l,
    className: d
  }), /* @__PURE__ */ y.createElement(Yo, {
    icon: o,
    primaryColor: O,
    secondaryColor: g,
    style: C
  }));
});
cn.displayName = "AntdIcon";
cn.getTwoToneColor = Jp;
cn.setTwoToneColor = uc;
const Lt = cn;
var fc = function(t, r) {
  return /* @__PURE__ */ y.createElement(Lt, $e({}, t, {
    ref: r,
    icon: Up
  }));
};
process.env.NODE_ENV !== "production" && (fc.displayName = "CheckCircleFilled");
const eh = /* @__PURE__ */ y.forwardRef(fc);
var th = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z" } }] }, name: "close-circle", theme: "filled" };
const rh = th;
var dc = function(t, r) {
  return /* @__PURE__ */ y.createElement(Lt, $e({}, t, {
    ref: r,
    icon: rh
  }));
};
process.env.NODE_ENV !== "production" && (dc.displayName = "CloseCircleFilled");
const nh = /* @__PURE__ */ y.forwardRef(dc);
var oh = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" } }] }, name: "close", theme: "outlined" };
const ih = oh;
var pc = function(t, r) {
  return /* @__PURE__ */ y.createElement(Lt, $e({}, t, {
    ref: r,
    icon: ih
  }));
};
process.env.NODE_ENV !== "production" && (pc.displayName = "CloseOutlined");
const ah = /* @__PURE__ */ y.forwardRef(pc);
var sh = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "exclamation-circle", theme: "filled" };
const ch = sh;
var hc = function(t, r) {
  return /* @__PURE__ */ y.createElement(Lt, $e({}, t, {
    ref: r,
    icon: ch
  }));
};
process.env.NODE_ENV !== "production" && (hc.displayName = "ExclamationCircleFilled");
const lh = /* @__PURE__ */ y.forwardRef(hc);
var uh = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "info-circle", theme: "filled" };
const fh = uh;
var mc = function(t, r) {
  return /* @__PURE__ */ y.createElement(Lt, $e({}, t, {
    ref: r,
    icon: fh
  }));
};
process.env.NODE_ENV !== "production" && (mc.displayName = "InfoCircleFilled");
const dh = /* @__PURE__ */ y.forwardRef(mc), {
  isValidElement: gc
} = y;
function ph(e) {
  return e && gc(e) && e.type === y.Fragment;
}
function hh(e, t, r) {
  return gc(e) ? /* @__PURE__ */ y.cloneElement(e, typeof r == "function" ? r(e.props || {}) : r) : t;
}
function vc(e, t) {
  return hh(e, e, t);
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
}, yc = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var r = e.prefixCls, n = e.style, o = e.className, i = e.duration, a = i === void 0 ? 4.5 : i, s = e.eventKey, l = e.content, c = e.closable, u = e.closeIcon, f = u === void 0 ? "x" : u, m = e.props, v = e.onClick, p = e.onNoticeClose, d = e.times, h = y.useState(!1), C = pe(h, 2), E = C[0], R = C[1], O = function() {
    p(s);
  }, g = function(F) {
    (F.key === "Enter" || F.code === "Enter" || F.keyCode === Y.ENTER) && O();
  };
  y.useEffect(function() {
    if (!E && a > 0) {
      var _ = setTimeout(function() {
        O();
      }, a * 1e3);
      return function() {
        clearTimeout(_);
      };
    }
  }, [a, E, d]);
  var A = "".concat(r, "-notice");
  return /* @__PURE__ */ y.createElement("div", $e({}, m, {
    ref: t,
    className: Te(A, o, ae({}, "".concat(A, "-closable"), c)),
    style: n,
    onMouseEnter: function() {
      R(!0);
    },
    onMouseLeave: function() {
      R(!1);
    },
    onClick: v
  }), /* @__PURE__ */ y.createElement("div", {
    className: "".concat(A, "-content")
  }, l), c && /* @__PURE__ */ y.createElement("a", {
    tabIndex: 0,
    className: "".concat(A, "-close"),
    onKeyDown: g,
    onClick: function(F) {
      F.preventDefault(), F.stopPropagation(), O();
    }
  }, f));
}), bc = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var r = e.prefixCls, n = r === void 0 ? "rc-notification" : r, o = e.container, i = e.motion, a = e.maxCount, s = e.className, l = e.style, c = e.onAllRemoved, u = y.useState([]), f = pe(u, 2), m = f[0], v = f[1], p = function(_) {
    var F, D = m.find(function(I) {
      return I.key === _;
    });
    D == null || (F = D.onClose) === null || F === void 0 || F.call(D), v(function(I) {
      return I.filter(function(V) {
        return V.key !== _;
      });
    });
  };
  y.useImperativeHandle(t, function() {
    return {
      open: function(_) {
        v(function(F) {
          var D = Le(F), I = D.findIndex(function(b) {
            return b.key === _.key;
          }), V = ee({}, _);
          if (I >= 0) {
            var x;
            V.times = (((x = F[I]) === null || x === void 0 ? void 0 : x.times) || 0) + 1, D[I] = V;
          } else
            V.times = 0, D.push(V);
          return a > 0 && D.length > a && (D = D.slice(-a)), D;
        });
      },
      close: function(_) {
        p(_);
      },
      destroy: function() {
        v([]);
      }
    };
  });
  var d = y.useState({}), h = pe(d, 2), C = h[0], E = h[1];
  y.useEffect(function() {
    var A = {};
    m.forEach(function(_) {
      var F = _.placement, D = F === void 0 ? "topRight" : F;
      D && (A[D] = A[D] || [], A[D].push(_));
    }), Object.keys(C).forEach(function(_) {
      A[_] = A[_] || [];
    }), E(A);
  }, [m]);
  var R = function(_) {
    E(function(F) {
      var D = ee({}, F), I = D[_] || [];
      return I.length || delete D[_], D;
    });
  }, O = y.useRef(!1);
  if (y.useEffect(function() {
    Object.keys(C).length > 0 ? O.current = !0 : O.current && (c?.(), O.current = !1);
  }, [C]), !o)
    return null;
  var g = Object.keys(C);
  return /* @__PURE__ */ _a(/* @__PURE__ */ y.createElement(y.Fragment, null, g.map(function(A) {
    var _ = C[A], F = _.map(function(I) {
      return {
        config: I,
        key: I.key
      };
    }), D = typeof i == "function" ? i(A) : i;
    return /* @__PURE__ */ y.createElement(Pp, $e({
      key: A,
      className: Te(n, "".concat(n, "-").concat(A), s?.(A)),
      style: l?.(A),
      keys: F,
      motionAppear: !0
    }, D, {
      onAllRemoved: function() {
        R(A);
      }
    }), function(I, V) {
      var x = I.config, b = I.className, w = I.style, N = x.key, j = x.times, L = x.className, z = x.style;
      return /* @__PURE__ */ y.createElement(yc, $e({}, x, {
        ref: V,
        prefixCls: n,
        className: Te(b, L),
        style: ee(ee({}, w), z),
        times: j,
        key: N,
        eventKey: N,
        onNoticeClose: p
      }));
    });
  })), o);
});
process.env.NODE_ENV !== "production" && (bc.displayName = "Notifications");
var mh = ["getContainer", "motion", "prefixCls", "maxCount", "className", "style", "onAllRemoved"], gh = function() {
  return document.body;
}, ra = 0;
function vh() {
  for (var e = {}, t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  return r.forEach(function(o) {
    o && Object.keys(o).forEach(function(i) {
      var a = o[i];
      a !== void 0 && (e[i] = a);
    });
  }), e;
}
function yh() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.getContainer, r = t === void 0 ? gh : t, n = e.motion, o = e.prefixCls, i = e.maxCount, a = e.className, s = e.style, l = e.onAllRemoved, c = Tt(e, mh), u = y.useState(), f = pe(u, 2), m = f[0], v = f[1], p = y.useRef(), d = /* @__PURE__ */ y.createElement(bc, {
    container: m,
    ref: p,
    prefixCls: o,
    motion: n,
    maxCount: i,
    className: a,
    style: s,
    onAllRemoved: l
  }), h = y.useState([]), C = pe(h, 2), E = C[0], R = C[1], O = y.useMemo(function() {
    return {
      open: function(A) {
        var _ = vh(c, A);
        (_.key === null || _.key === void 0) && (_.key = "rc-notification-".concat(ra), ra += 1), R(function(F) {
          return [].concat(Le(F), [{
            type: "open",
            config: _
          }]);
        });
      },
      close: function(A) {
        R(function(_) {
          return [].concat(Le(_), [{
            type: "close",
            key: A
          }]);
        });
      },
      destroy: function() {
        R(function(A) {
          return [].concat(Le(A), [{
            type: "destroy"
          }]);
        });
      }
    };
  }, []);
  return y.useEffect(function() {
    v(r());
  }), y.useEffect(function() {
    p.current && E.length && (E.forEach(function(g) {
      switch (g.type) {
        case "open":
          p.current.open(g.config);
          break;
        case "close":
          p.current.close(g.key);
          break;
        case "destroy":
          p.current.destroy();
          break;
      }
    }), R(function(g) {
      return g.filter(function(A) {
        return !E.includes(A);
      });
    }));
  }, [E]), [O, d];
}
var bh = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, name: "loading", theme: "outlined" };
const Sh = bh;
var Sc = function(t, r) {
  return /* @__PURE__ */ y.createElement(Lt, $e({}, t, {
    ref: r,
    icon: Sh
  }));
};
process.env.NODE_ENV !== "production" && (Sc.displayName = "LoadingOutlined");
const Ec = /* @__PURE__ */ y.forwardRef(Sc), Eh = (e) => {
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
    paddingXS: v,
    borderRadiusLG: p,
    zIndexPopup: d,
    // Custom token
    contentPadding: h,
    contentBg: C
  } = e, E = `${t}-notice`, R = new ji("MessageMoveIn", {
    "0%": {
      padding: 0,
      transform: "translateY(-100%)",
      opacity: 0
    },
    "100%": {
      padding: v,
      transform: "translateY(0)",
      opacity: 1
    }
  }), O = new ji("MessageMoveOut", {
    "0%": {
      maxHeight: e.height,
      padding: v,
      opacity: 1
    },
    "100%": {
      maxHeight: 0,
      padding: 0,
      opacity: 0
    }
  }), g = {
    padding: v,
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
      [t]: Object.assign(Object.assign({}, qd(e)), {
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
          animationName: R,
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
          animationName: O,
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
        [E]: Object.assign({}, g)
      }
    },
    // ============================= Pure =============================
    {
      [`${t}-notice-pure-panel`]: Object.assign(Object.assign({}, g), {
        padding: 0,
        textAlign: "start"
      })
    }
  ];
}, Cc = Wo("Message", (e) => {
  const t = Rt(e, {
    height: 150
  });
  return [Eh(t)];
}, (e) => ({
  zIndexPopup: e.zIndexPopupBase + 10,
  contentBg: e.colorBgElevated,
  contentPadding: `${(e.controlHeightLG - e.fontSize * e.lineHeight) / 2}px ${e.paddingSM}px`
}));
var Ch = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
const xh = {
  info: /* @__PURE__ */ y.createElement(dh, null),
  success: /* @__PURE__ */ y.createElement(eh, null),
  error: /* @__PURE__ */ y.createElement(nh, null),
  warning: /* @__PURE__ */ y.createElement(lh, null),
  loading: /* @__PURE__ */ y.createElement(Ec, null)
}, xc = (e) => {
  let {
    prefixCls: t,
    type: r,
    icon: n,
    children: o
  } = e;
  return /* @__PURE__ */ y.createElement("div", {
    className: Te(`${t}-custom-content`, `${t}-${r}`)
  }, n || xh[r], /* @__PURE__ */ y.createElement("span", null, o));
}, wh = (e) => {
  const {
    prefixCls: t,
    className: r,
    type: n,
    icon: o,
    content: i
  } = e, a = Ch(e, ["prefixCls", "className", "type", "icon", "content"]), {
    getPrefixCls: s
  } = y.useContext(ot), l = t || s("message"), [, c] = Cc(l);
  return /* @__PURE__ */ y.createElement(yc, Object.assign({}, a, {
    prefixCls: l,
    className: Te(r, c, `${l}-notice-pure-panel`),
    eventKey: "pure",
    duration: null,
    content: /* @__PURE__ */ y.createElement(xc, {
      prefixCls: l,
      type: n,
      icon: o
    }, i)
  }));
}, _h = wh;
function Oh(e, t) {
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
var Th = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
const Ah = 8, Rh = 3, Ph = /* @__PURE__ */ y.forwardRef((e, t) => {
  const {
    top: r,
    prefixCls: n,
    getContainer: o,
    maxCount: i,
    duration: a = Rh,
    rtl: s,
    transitionName: l,
    onAllRemoved: c
  } = e, {
    getPrefixCls: u,
    getPopupContainer: f,
    message: m
  } = y.useContext(ot), v = n || u("message"), [, p] = Cc(v), d = () => ({
    left: "50%",
    transform: "translateX(-50%)",
    top: r ?? Ah
  }), h = () => Te(p, {
    [`${v}-rtl`]: s
  }), C = () => Oh(v, l), E = /* @__PURE__ */ y.createElement("span", {
    className: `${v}-close-x`
  }, /* @__PURE__ */ y.createElement(ah, {
    className: `${v}-close-icon`
  })), [R, O] = yh({
    prefixCls: v,
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
  return y.useImperativeHandle(t, () => Object.assign(Object.assign({}, R), {
    prefixCls: v,
    hashId: p,
    message: m
  })), O;
});
let na = 0;
function wc(e) {
  const t = y.useRef(null);
  return [y.useMemo(() => {
    const n = (l) => {
      var c;
      (c = t.current) === null || c === void 0 || c.close(l);
    }, o = (l) => {
      if (!t.current) {
        process.env.NODE_ENV !== "production" && qe(!1, "Message", "You are calling notice in render which will break in React 18 concurrent mode. Please trigger in effect instead.");
        const _ = () => {
        };
        return _.then = () => {
        }, _;
      }
      const {
        open: c,
        prefixCls: u,
        hashId: f,
        message: m
      } = t.current, v = `${u}-notice`, {
        content: p,
        icon: d,
        type: h,
        key: C,
        className: E,
        style: R,
        onClose: O
      } = l, g = Th(l, ["content", "icon", "type", "key", "className", "style", "onClose"]);
      let A = C;
      return A == null && (na += 1, A = `antd-message-${na}`), Ko((_) => (c(Object.assign(Object.assign({}, g), {
        key: A,
        content: /* @__PURE__ */ y.createElement(xc, {
          prefixCls: u,
          type: h,
          icon: d
        }, p),
        placement: "top",
        className: Te(h && `${v}-${h}`, f, E, m?.className),
        style: Object.assign(Object.assign({}, m?.style), R),
        onClose: () => {
          O?.(), _();
        }
      })), () => {
        n(A);
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
        let v;
        u && typeof u == "object" && "content" in u ? v = u : v = {
          content: u
        };
        let p, d;
        typeof f == "function" ? d = f : (p = f, d = m);
        const h = Object.assign(Object.assign({
          onClose: d,
          duration: p
        }, v), {
          type: l
        });
        return o(h);
      };
      a[l] = c;
    }), a;
  }, []), /* @__PURE__ */ y.createElement(Ph, Object.assign({
    key: "message-holder"
  }, e, {
    ref: t
  }))];
}
function Nh(e) {
  return wc(e);
}
function Jt() {
  Jt = function() {
    return e;
  };
  var e = {}, t = Object.prototype, r = t.hasOwnProperty, n = Object.defineProperty || function(x, b, w) {
    x[b] = w.value;
  }, o = typeof Symbol == "function" ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", s = o.toStringTag || "@@toStringTag";
  function l(x, b, w) {
    return Object.defineProperty(x, b, {
      value: w,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), x[b];
  }
  try {
    l({}, "");
  } catch {
    l = function(w, N, j) {
      return w[N] = j;
    };
  }
  function c(x, b, w, N) {
    var j = b && b.prototype instanceof m ? b : m, L = Object.create(j.prototype), z = new D(N || []);
    return n(L, "_invoke", {
      value: g(x, w, z)
    }), L;
  }
  function u(x, b, w) {
    try {
      return {
        type: "normal",
        arg: x.call(b, w)
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
  function v() {
  }
  function p() {
  }
  var d = {};
  l(d, i, function() {
    return this;
  });
  var h = Object.getPrototypeOf, C = h && h(h(I([])));
  C && C !== t && r.call(C, i) && (d = C);
  var E = p.prototype = m.prototype = Object.create(d);
  function R(x) {
    ["next", "throw", "return"].forEach(function(b) {
      l(x, b, function(w) {
        return this._invoke(b, w);
      });
    });
  }
  function O(x, b) {
    function w(j, L, z, K) {
      var q = u(x[j], x, L);
      if (q.type !== "throw") {
        var re = q.arg, $ = re.value;
        return $ && ye($) == "object" && r.call($, "__await") ? b.resolve($.__await).then(function(M) {
          w("next", M, z, K);
        }, function(M) {
          w("throw", M, z, K);
        }) : b.resolve($).then(function(M) {
          re.value = M, z(re);
        }, function(M) {
          return w("throw", M, z, K);
        });
      }
      K(q.arg);
    }
    var N;
    n(this, "_invoke", {
      value: function(L, z) {
        function K() {
          return new b(function(q, re) {
            w(L, z, q, re);
          });
        }
        return N = N ? N.then(K, K) : K();
      }
    });
  }
  function g(x, b, w) {
    var N = "suspendedStart";
    return function(j, L) {
      if (N === "executing")
        throw new Error("Generator is already running");
      if (N === "completed") {
        if (j === "throw")
          throw L;
        return V();
      }
      for (w.method = j, w.arg = L; ; ) {
        var z = w.delegate;
        if (z) {
          var K = A(z, w);
          if (K) {
            if (K === f)
              continue;
            return K;
          }
        }
        if (w.method === "next")
          w.sent = w._sent = w.arg;
        else if (w.method === "throw") {
          if (N === "suspendedStart")
            throw N = "completed", w.arg;
          w.dispatchException(w.arg);
        } else
          w.method === "return" && w.abrupt("return", w.arg);
        N = "executing";
        var q = u(x, b, w);
        if (q.type === "normal") {
          if (N = w.done ? "completed" : "suspendedYield", q.arg === f)
            continue;
          return {
            value: q.arg,
            done: w.done
          };
        }
        q.type === "throw" && (N = "completed", w.method = "throw", w.arg = q.arg);
      }
    };
  }
  function A(x, b) {
    var w = b.method, N = x.iterator[w];
    if (N === void 0)
      return b.delegate = null, w === "throw" && x.iterator.return && (b.method = "return", b.arg = void 0, A(x, b), b.method === "throw") || w !== "return" && (b.method = "throw", b.arg = new TypeError("The iterator does not provide a '" + w + "' method")), f;
    var j = u(N, x.iterator, b.arg);
    if (j.type === "throw")
      return b.method = "throw", b.arg = j.arg, b.delegate = null, f;
    var L = j.arg;
    return L ? L.done ? (b[x.resultName] = L.value, b.next = x.nextLoc, b.method !== "return" && (b.method = "next", b.arg = void 0), b.delegate = null, f) : L : (b.method = "throw", b.arg = new TypeError("iterator result is not an object"), b.delegate = null, f);
  }
  function _(x) {
    var b = {
      tryLoc: x[0]
    };
    1 in x && (b.catchLoc = x[1]), 2 in x && (b.finallyLoc = x[2], b.afterLoc = x[3]), this.tryEntries.push(b);
  }
  function F(x) {
    var b = x.completion || {};
    b.type = "normal", delete b.arg, x.completion = b;
  }
  function D(x) {
    this.tryEntries = [{
      tryLoc: "root"
    }], x.forEach(_, this), this.reset(!0);
  }
  function I(x) {
    if (x) {
      var b = x[i];
      if (b)
        return b.call(x);
      if (typeof x.next == "function")
        return x;
      if (!isNaN(x.length)) {
        var w = -1, N = function j() {
          for (; ++w < x.length; )
            if (r.call(x, w))
              return j.value = x[w], j.done = !1, j;
          return j.value = void 0, j.done = !0, j;
        };
        return N.next = N;
      }
    }
    return {
      next: V
    };
  }
  function V() {
    return {
      value: void 0,
      done: !0
    };
  }
  return v.prototype = p, n(E, "constructor", {
    value: p,
    configurable: !0
  }), n(p, "constructor", {
    value: v,
    configurable: !0
  }), v.displayName = l(p, s, "GeneratorFunction"), e.isGeneratorFunction = function(x) {
    var b = typeof x == "function" && x.constructor;
    return !!b && (b === v || (b.displayName || b.name) === "GeneratorFunction");
  }, e.mark = function(x) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(x, p) : (x.__proto__ = p, l(x, s, "GeneratorFunction")), x.prototype = Object.create(E), x;
  }, e.awrap = function(x) {
    return {
      __await: x
    };
  }, R(O.prototype), l(O.prototype, a, function() {
    return this;
  }), e.AsyncIterator = O, e.async = function(x, b, w, N, j) {
    j === void 0 && (j = Promise);
    var L = new O(c(x, b, w, N), j);
    return e.isGeneratorFunction(b) ? L : L.next().then(function(z) {
      return z.done ? z.value : L.next();
    });
  }, R(E), l(E, s, "Generator"), l(E, i, function() {
    return this;
  }), l(E, "toString", function() {
    return "[object Generator]";
  }), e.keys = function(x) {
    var b = Object(x), w = [];
    for (var N in b)
      w.push(N);
    return w.reverse(), function j() {
      for (; w.length; ) {
        var L = w.pop();
        if (L in b)
          return j.value = L, j.done = !1, j;
      }
      return j.done = !0, j;
    };
  }, e.values = I, D.prototype = {
    constructor: D,
    reset: function(b) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(F), !b)
        for (var w in this)
          w.charAt(0) === "t" && r.call(this, w) && !isNaN(+w.slice(1)) && (this[w] = void 0);
    },
    stop: function() {
      this.done = !0;
      var b = this.tryEntries[0].completion;
      if (b.type === "throw")
        throw b.arg;
      return this.rval;
    },
    dispatchException: function(b) {
      if (this.done)
        throw b;
      var w = this;
      function N(re, $) {
        return z.type = "throw", z.arg = b, w.next = re, $ && (w.method = "next", w.arg = void 0), !!$;
      }
      for (var j = this.tryEntries.length - 1; j >= 0; --j) {
        var L = this.tryEntries[j], z = L.completion;
        if (L.tryLoc === "root")
          return N("end");
        if (L.tryLoc <= this.prev) {
          var K = r.call(L, "catchLoc"), q = r.call(L, "finallyLoc");
          if (K && q) {
            if (this.prev < L.catchLoc)
              return N(L.catchLoc, !0);
            if (this.prev < L.finallyLoc)
              return N(L.finallyLoc);
          } else if (K) {
            if (this.prev < L.catchLoc)
              return N(L.catchLoc, !0);
          } else {
            if (!q)
              throw new Error("try statement without catch or finally");
            if (this.prev < L.finallyLoc)
              return N(L.finallyLoc);
          }
        }
      }
    },
    abrupt: function(b, w) {
      for (var N = this.tryEntries.length - 1; N >= 0; --N) {
        var j = this.tryEntries[N];
        if (j.tryLoc <= this.prev && r.call(j, "finallyLoc") && this.prev < j.finallyLoc) {
          var L = j;
          break;
        }
      }
      L && (b === "break" || b === "continue") && L.tryLoc <= w && w <= L.finallyLoc && (L = null);
      var z = L ? L.completion : {};
      return z.type = b, z.arg = w, L ? (this.method = "next", this.next = L.finallyLoc, f) : this.complete(z);
    },
    complete: function(b, w) {
      if (b.type === "throw")
        throw b.arg;
      return b.type === "break" || b.type === "continue" ? this.next = b.arg : b.type === "return" ? (this.rval = this.arg = b.arg, this.method = "return", this.next = "end") : b.type === "normal" && w && (this.next = w), f;
    },
    finish: function(b) {
      for (var w = this.tryEntries.length - 1; w >= 0; --w) {
        var N = this.tryEntries[w];
        if (N.finallyLoc === b)
          return this.complete(N.completion, N.afterLoc), F(N), f;
      }
    },
    catch: function(b) {
      for (var w = this.tryEntries.length - 1; w >= 0; --w) {
        var N = this.tryEntries[w];
        if (N.tryLoc === b) {
          var j = N.completion;
          if (j.type === "throw") {
            var L = j.arg;
            F(N);
          }
          return L;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function(b, w, N) {
      return this.delegate = {
        iterator: I(b),
        resultName: w,
        nextLoc: N
      }, this.method === "next" && (this.arg = void 0), f;
    }
  }, e;
}
function oa(e, t, r, n, o, i, a) {
  try {
    var s = e[i](a), l = s.value;
  } catch (c) {
    r(c);
    return;
  }
  s.done ? t(l) : Promise.resolve(l).then(n, o);
}
function _c(e) {
  return function() {
    var t = this, r = arguments;
    return new Promise(function(n, o) {
      var i = e.apply(t, r);
      function a(l) {
        oa(i, n, o, a, s, "next", l);
      }
      function s(l) {
        oa(i, n, o, a, s, "throw", l);
      }
      a(void 0);
    });
  };
}
var ar = ee({}, il), $h = ar.version, Ih = ar.render, Mh = ar.unmountComponentAtNode, ln;
try {
  var kh = Number(($h || "").split(".")[0]);
  kh >= 18 && (ln = ar.createRoot);
} catch {
}
function ia(e) {
  var t = ar.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  t && ye(t) === "object" && (t.usingClientEntryPoint = e);
}
var Ur = "__rc_react_root__";
function Lh(e, t) {
  ia(!0);
  var r = t[Ur] || ln(t);
  ia(!1), r.render(e), t[Ur] = r;
}
function Dh(e, t) {
  Ih(e, t);
}
function Oc(e, t) {
  if (ln) {
    Lh(e, t);
    return;
  }
  Dh(e, t);
}
function jh(e) {
  return go.apply(this, arguments);
}
function go() {
  return go = _c(/* @__PURE__ */ Jt().mark(function e(t) {
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
function Fh(e) {
  Mh(e);
}
function Hh(e) {
  return vo.apply(this, arguments);
}
function vo() {
  return vo = _c(/* @__PURE__ */ Jt().mark(function e(t) {
    return Jt().wrap(function(n) {
      for (; ; )
        switch (n.prev = n.next) {
          case 0:
            if (ln === void 0) {
              n.next = 2;
              break;
            }
            return n.abrupt("return", jh(t));
          case 2:
            Fh(t);
          case 3:
          case "end":
            return n.stop();
        }
    }, e);
  })), vo.apply(this, arguments);
}
const Bh = function(e) {
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
}, zh = (e) => {
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
}, Uh = Wo("Wave", (e) => [zh(e)]);
function Wh(e) {
  const t = (e || "").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);
  return t && t[1] && t[2] && t[3] ? !(t[1] === t[2] && t[2] === t[3]) : !0;
}
function $n(e) {
  return e && e !== "#fff" && e !== "#ffffff" && e !== "rgb(255, 255, 255)" && e !== "rgba(255, 255, 255, 1)" && Wh(e) && !/rgba\((?:\d*, ){3}0\)/.test(e) && // any transparent rgba color
  e !== "transparent";
}
function Vh(e) {
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
const Gh = (e) => {
  const {
    className: t,
    target: r
  } = e, n = y.useRef(null), [o, i] = y.useState(null), [a, s] = y.useState([]), [l, c] = y.useState(0), [u, f] = y.useState(0), [m, v] = y.useState(0), [p, d] = y.useState(0), [h, C] = y.useState(!1), E = {
    left: l,
    top: u,
    width: m,
    height: p,
    borderRadius: a.map((O) => `${O}px`).join(" ")
  };
  o && (E["--wave-color"] = o);
  function R() {
    const O = getComputedStyle(r);
    i(Vh(r));
    const g = O.position === "static", {
      borderLeftWidth: A,
      borderTopWidth: _
    } = O;
    c(g ? r.offsetLeft : In(-parseFloat(A))), f(g ? r.offsetTop : In(-parseFloat(_))), v(r.offsetWidth), d(r.offsetHeight);
    const {
      borderTopLeftRadius: F,
      borderTopRightRadius: D,
      borderBottomLeftRadius: I,
      borderBottomRightRadius: V
    } = O;
    s([F, D, V, I].map((x) => In(parseFloat(x))));
  }
  return y.useEffect(() => {
    if (r) {
      const O = Kt(() => {
        R(), C(!0);
      });
      let g;
      return typeof ResizeObserver < "u" && (g = new ResizeObserver(R), g.observe(r)), () => {
        Kt.cancel(O), g?.disconnect();
      };
    }
  }, []), h ? /* @__PURE__ */ y.createElement(Go, {
    visible: !0,
    motionAppear: !0,
    motionName: "wave-motion",
    motionDeadline: 5e3,
    onAppearEnd: (O, g) => {
      var A;
      if (g.deadline || g.propertyName === "opacity") {
        const _ = (A = n.current) === null || A === void 0 ? void 0 : A.parentElement;
        Hh(_).then(() => {
          _?.remove();
        });
      }
      return !1;
    }
  }, (O) => {
    let {
      className: g
    } = O;
    return /* @__PURE__ */ y.createElement("div", {
      ref: n,
      className: Te(t, g),
      style: E
    });
  }) : null;
};
function Yh(e, t) {
  const r = document.createElement("div");
  r.style.position = "absolute", r.style.left = "0px", r.style.top = "0px", e?.insertBefore(r, e?.firstChild), Oc(/* @__PURE__ */ y.createElement(Gh, {
    target: e,
    className: t
  }), r);
}
function Kh(e, t) {
  function r() {
    const n = e.current;
    Yh(n, t);
  }
  return r;
}
const Tc = (e) => {
  const {
    children: t,
    disabled: r
  } = e, {
    getPrefixCls: n
  } = Ne(ot), o = je(null), i = n("wave"), [, a] = Uh(i), s = Kh(o, Te(i, a));
  if (de.useEffect(() => {
    const c = o.current;
    if (!c || c.nodeType !== 1 || r)
      return;
    const u = (f) => {
      f.target.tagName === "INPUT" || !Bh(f.target) || // No need wave
      !c.getAttribute || c.getAttribute("disabled") || c.disabled || c.className.includes("disabled") || c.className.includes("-leave") || s();
    };
    return c.addEventListener("click", u, !0), () => {
      c.removeEventListener("click", u, !0);
    };
  }, [r]), !/* @__PURE__ */ de.isValidElement(t))
    return t ?? null;
  const l = as(t) ? is(t.ref, o) : o;
  return vc(t, {
    ref: l
  });
};
process.env.NODE_ENV !== "production" && (Tc.displayName = "Wave");
const qh = Tc, Xh = (e) => {
  const t = de.useContext(an);
  return de.useMemo(() => e ? typeof e == "string" ? e ?? t : e instanceof Function ? e(t) : t : t, [e, t]);
}, Qh = Xh;
globalThis && globalThis.__rest;
const Jh = /* @__PURE__ */ y.createContext(null), Zh = (e, t) => {
  const r = y.useContext(Jh), n = y.useMemo(() => {
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
}, em = /* @__PURE__ */ Oo((e, t) => {
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
}), Ac = em, aa = /* @__PURE__ */ Oo((e, t) => {
  let {
    prefixCls: r,
    className: n,
    style: o,
    iconClassName: i
  } = e;
  const a = Te(`${r}-loading-icon`, n);
  return /* @__PURE__ */ de.createElement(Ac, {
    prefixCls: r,
    className: a,
    style: o,
    ref: t
  }, /* @__PURE__ */ de.createElement(Ec, {
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
}), tm = (e) => {
  const {
    prefixCls: t,
    loading: r,
    existIcon: n,
    className: o,
    style: i
  } = e, a = !!r;
  return n ? /* @__PURE__ */ de.createElement(aa, {
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
      style: u
    } = s;
    return /* @__PURE__ */ de.createElement(aa, {
      prefixCls: t,
      className: o,
      style: Object.assign(Object.assign({}, i), u),
      ref: l,
      iconClassName: c
    });
  });
}, rm = tm;
var nm = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
const Rc = /* @__PURE__ */ y.createContext(void 0), om = (e) => {
  const {
    getPrefixCls: t,
    direction: r
  } = y.useContext(ot), {
    prefixCls: n,
    size: o,
    className: i
  } = e, a = nm(e, ["prefixCls", "size", "className"]), s = t("btn-group", n), [, , l] = on();
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
  return /* @__PURE__ */ y.createElement(Rc.Provider, {
    value: o
  }, /* @__PURE__ */ y.createElement("div", Object.assign({}, a, {
    className: u
  })));
}, im = om, sa = /^[\u4e00-\u9fa5]{2}$/, yo = sa.test.bind(sa);
function am(e) {
  return typeof e == "string";
}
function Er(e) {
  return e === "text" || e === "link";
}
function sm(e, t) {
  if (e == null)
    return;
  const r = t ? " " : "";
  return typeof e != "string" && typeof e != "number" && am(e.type) && yo(e.props.children) ? vc(e, {
    children: e.props.children.split("").join(r)
  }) : typeof e == "string" ? yo(e) ? /* @__PURE__ */ de.createElement("span", null, e.split("").join(r)) : /* @__PURE__ */ de.createElement("span", null, e) : ph(e) ? /* @__PURE__ */ de.createElement("span", null, e) : e;
}
function cm(e, t) {
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
  }), de.Children.map(n, (o) => sm(o, t));
}
function lm(e, t, r) {
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
function um(e, t, r) {
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
function fm(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    focus: !0
  };
  const {
    componentCls: r
  } = e, n = `${r}-compact`;
  return {
    [n]: Object.assign(Object.assign({}, lm(e, n, t)), um(r, n, t))
  };
}
function dm(e, t) {
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
function pm(e, t) {
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
function hm(e) {
  const t = `${e.componentCls}-compact-vertical`;
  return {
    [t]: Object.assign(Object.assign({}, dm(e, t)), pm(e.componentCls, t))
  };
}
const ca = (e, t) => ({
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
}), mm = (e) => {
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
      ca(`${t}-primary`, o),
      ca(`${t}-danger`, i)
    ]
  };
}, gm = mm, vm = (e) => {
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
      "&:not(:disabled)": Object.assign({}, ep(e)),
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
}), ym = (e) => ({
  minWidth: e.controlHeight,
  paddingInlineStart: 0,
  paddingInlineEnd: 0,
  borderRadius: "50%"
}), bm = (e) => ({
  borderRadius: e.controlHeight,
  paddingInlineStart: e.controlHeight / 2,
  paddingInlineEnd: e.controlHeight / 2
}), Sm = (e) => ({
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
  [`&:disabled, &${e.componentCls}-disabled`]: Object.assign({}, Sm(e))
}), Pc = (e) => Object.assign({}, qo(e)), Wr = (e) => ({
  [`&:disabled, &${e.componentCls}-disabled`]: {
    cursor: "not-allowed",
    color: e.colorTextDisabled
  }
}), Nc = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Pc(e)), {
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
}), Em = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Pc(e)), {
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
}), Cm = (e) => Object.assign(Object.assign({}, Nc(e)), {
  borderStyle: "dashed"
}), xm = (e) => Object.assign(Object.assign(Object.assign({
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
}), wm = (e) => Object.assign(Object.assign(Object.assign({}, nt(e.componentCls, {
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
}), _m = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [`${t}-default`]: Nc(e),
    [`${t}-primary`]: Em(e),
    [`${t}-dashed`]: Cm(e),
    [`${t}-link`]: xm(e),
    [`${t}-text`]: wm(e),
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
      [`${r}${r}-circle${t}`]: ym(e)
    },
    {
      [`${r}${r}-round${t}`]: bm(e)
    }
  ];
}, Om = (e) => Xo(e), Tm = (e) => {
  const t = Rt(e, {
    controlHeight: e.controlHeightSM,
    padding: e.paddingXS,
    buttonPaddingHorizontal: 8,
    borderRadius: e.borderRadiusSM,
    buttonIconOnlyFontSize: e.fontSizeLG - 2
  });
  return Xo(t, `${e.componentCls}-sm`);
}, Am = (e) => {
  const t = Rt(e, {
    controlHeight: e.controlHeightLG,
    fontSize: e.fontSizeLG,
    borderRadius: e.borderRadiusLG,
    buttonIconOnlyFontSize: e.fontSizeLG + 2
  });
  return Xo(t, `${e.componentCls}-lg`);
}, Rm = (e) => {
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
}, Pm = Wo("Button", (e) => {
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
    vm(n),
    // Size
    Tm(n),
    Om(n),
    Am(n),
    // Block
    Rm(n),
    // Group (type, ghost, danger, loading)
    _m(n),
    // Button Group
    gm(n),
    // Space Compact
    fm(e),
    hm(e)
  ];
});
var Nm = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
function $m(e) {
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
const Im = (e, t) => {
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
    rootClassName: v,
    children: p,
    icon: d,
    ghost: h = !1,
    block: C = !1,
    // React does not recognize the `htmlType` prop on a DOM element. Here we pick it out of `rest`.
    htmlType: E = "button",
    classNames: R,
    style: O = {}
  } = e, g = Nm(e, ["loading", "prefixCls", "type", "danger", "shape", "size", "styles", "disabled", "className", "rootClassName", "children", "icon", "ghost", "block", "htmlType", "classNames", "style"]), {
    getPrefixCls: A,
    autoInsertSpaceInButton: _,
    direction: F,
    button: D
  } = Ne(ot), I = A("btn", i), [V, x] = Pm(I), b = Ne(Gs), w = f ?? b, N = Ne(Rc), j = xa(() => $m(o), [o]), [L, z] = Gt(j.loading), [K, q] = Gt(!1), $ = is(t, /* @__PURE__ */ rl()), M = tl.count(p) === 1 && !d && !Er(a);
  Ue(() => {
    let G = null;
    j.delay > 0 ? G = setTimeout(() => {
      G = null, z(!0);
    }, j.delay) : z(j.loading);
    function oe() {
      G && (clearTimeout(G), G = null);
    }
    return oe;
  }, [j]), Ue(() => {
    if (!$ || !$.current || _ === !1)
      return;
    const G = $.current.textContent;
    M && yo(G) ? K || q(!0) : K && q(!1);
  }, [$]);
  const H = (G) => {
    const {
      onClick: oe
    } = e;
    if (L || w) {
      G.preventDefault();
      return;
    }
    oe?.(G);
  };
  process.env.NODE_ENV !== "production" && qe(!(typeof d == "string" && d.length > 2), "Button", `\`icon\` is using ReactNode instead of string naming in v4. Please check \`${d}\` at https://ant.design/components/icon`), process.env.NODE_ENV !== "production" && qe(!(h && Er(a)), "Button", "`link` or `text` button can't be a `ghost` button.");
  const U = _ !== !1, {
    compactSize: S,
    compactItemClassnames: te
  } = Zh(I, F), k = {
    large: "lg",
    small: "sm",
    middle: void 0
  }, ne = Qh((G) => {
    var oe, be;
    return (be = (oe = c ?? S) !== null && oe !== void 0 ? oe : N) !== null && be !== void 0 ? be : G;
  }), J = ne && k[ne] || "", Q = L ? "loading" : d, P = Gu(g, ["navigate"]), se = Te(I, x, {
    [`${I}-${l}`]: l !== "default" && l,
    [`${I}-${a}`]: a,
    [`${I}-${J}`]: J,
    [`${I}-icon-only`]: !p && p !== 0 && !!Q,
    [`${I}-background-ghost`]: h && !Er(a),
    [`${I}-loading`]: L,
    [`${I}-two-chinese-chars`]: K && U && !L,
    [`${I}-block`]: C,
    [`${I}-dangerous`]: !!s,
    [`${I}-rtl`]: F === "rtl"
  }, te, m, v, D?.className), B = Object.assign(Object.assign({}, D?.style), O), W = Te(R?.icon, (r = D?.classNames) === null || r === void 0 ? void 0 : r.icon), he = Object.assign(Object.assign({}, u?.icon || {}), ((n = D?.styles) === null || n === void 0 ? void 0 : n.icon) || {}), Z = d && !L ? /* @__PURE__ */ de.createElement(Ac, {
    prefixCls: I,
    className: W,
    style: he
  }, d) : /* @__PURE__ */ de.createElement(rm, {
    existIcon: !!d,
    prefixCls: I,
    loading: !!L
  }), me = p || p === 0 ? cm(p, M && U) : null;
  if (P.href !== void 0)
    return V(/* @__PURE__ */ de.createElement("a", Object.assign({}, P, {
      className: Te(se, {
        [`${I}-disabled`]: w
      }),
      style: B,
      onClick: H,
      ref: $
    }), Z, me));
  let ge = /* @__PURE__ */ de.createElement("button", Object.assign({}, g, {
    type: E,
    className: se,
    style: B,
    onClick: H,
    disabled: w,
    ref: $
  }), Z, me);
  return Er(a) || (ge = /* @__PURE__ */ de.createElement(qh, {
    disabled: !!L
  }, ge)), V(ge);
}, un = /* @__PURE__ */ Oo(Im);
process.env.NODE_ENV !== "production" && (un.displayName = "Button");
un.Group = im;
un.__ANT_BUTTON = !0;
const Mm = un;
let De = null, ht = (e) => e(), er = [], Vr = {};
function km() {
  const {
    prefixCls: e,
    getContainer: t,
    duration: r,
    rtl: n,
    maxCount: o,
    top: i
  } = Vr, a = e ?? ic().getPrefixCls("message"), s = t?.() || document.body;
  return {
    prefixCls: a,
    container: s,
    duration: r,
    rtl: n,
    maxCount: o,
    top: i
  };
}
const Lm = /* @__PURE__ */ y.forwardRef((e, t) => {
  const r = () => {
    const {
      prefixCls: m,
      container: v,
      maxCount: p,
      duration: d,
      rtl: h,
      top: C
    } = km();
    return {
      prefixCls: m,
      getContainer: () => v,
      maxCount: p,
      duration: d,
      rtl: h,
      top: C
    };
  }, [n, o] = y.useState(r), [i, a] = wc(n), s = ic(), l = s.getRootPrefixCls(), c = s.getIconPrefixCls(), u = s.getTheme(), f = () => {
    o(r);
  };
  return y.useEffect(f, []), y.useImperativeHandle(t, () => {
    const m = Object.assign({}, i);
    return Object.keys(m).forEach((v) => {
      m[v] = function() {
        return f(), i[v].apply(i, arguments);
      };
    }), {
      instance: m,
      sync: f
    };
  }), /* @__PURE__ */ y.createElement(ac, {
    prefixCls: l,
    iconPrefixCls: c,
    theme: u
  }, a);
});
function fn() {
  if (!De) {
    const e = document.createDocumentFragment(), t = {
      fragment: e
    };
    De = t, ht(() => {
      Oc(/* @__PURE__ */ y.createElement(Lm, {
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
function Dm(e) {
  Vr = Object.assign(Object.assign({}, Vr), e), ht(() => {
    var t;
    (t = De?.sync) === null || t === void 0 || t.call(De);
  });
}
function jm(e) {
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
function Fm(e, t) {
  process.env.NODE_ENV !== "production" && kp("message");
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
function Hm(e) {
  er.push({
    type: "destroy",
    key: e
  }), fn();
}
const Bm = ["success", "info", "warning", "error", "loading"], zm = {
  open: jm,
  destroy: Hm,
  config: Dm,
  useMessage: Nh,
  _InternalPanelDoNotUseOrYouWillBeFired: _h
}, $c = zm;
Bm.forEach((e) => {
  $c[e] = function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return Fm(e, r);
  };
});
process.env.NODE_ENV;
process.env.NODE_ENV;
const Um = $c, Ic = nr(
  {}
), hv = ({ children: e }) => {
  const [t, r] = Um.useMessage(), n = ({ type: o, message: i }) => {
    t.open({
      type: o ?? "info",
      content: i,
      duration: 5
    });
  };
  return /* @__PURE__ */ wa(To, { children: [
    r,
    /* @__PURE__ */ Ee(Ic.Provider, { value: { open: n }, children: e })
  ] });
}, Mc = ({ when: e, children: t }) => e ? t : null, mv = ({ children: e }) => /* @__PURE__ */ Ee(Mu, { children: e }), kc = nr({}), Wm = async () => Promise.all([
  import("./react-spring_web.modern-d55cb301.mjs"),
  import("./use-gesture-react.esm-862244eb.mjs")
]), Lc = ({ children: e }) => {
  const t = je(), r = je(), n = Tu(), o = async () => {
    const [a, s] = await Wm();
    t.current = a, r.current = s, n.on();
  };
  Ue(() => {
    o();
  }, []);
  const i = xa(
    () => ({
      Spring: t.current,
      Gesture: r.current,
      isLoaded: n.val
    }),
    [n.val]
  );
  return /* @__PURE__ */ Ee(kc.Provider, { value: i, children: /* @__PURE__ */ Ee(Mc, { when: n.val, children: e }) });
}, Dc = () => Ne(kc), gv = () => Ne(Ic), vv = () => {
  Ue(() => (document.body.style.overflow = "hidden", () => {
    document.body.style.overflow = "auto";
  }));
}, yv = (e) => typeof e == "object" && e !== null, Vm = (e) => typeof e == "string", bv = (e) => typeof e == "function";
class Sv {
  constructor(t) {
    this.isDisabled = !1, this.isDisabled = t ?? this.isDisabled;
  }
  get(t, r) {
    if (this.isDisabled)
      return r;
    const n = localStorage.getItem(t);
    return n ? Gm(n) ? JSON.parse(n) : n : r;
  }
  set(t, r) {
    if (!(this.isDisabled || !(t in Ou))) {
      if (Vm(r))
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
const Gm = (e) => {
  try {
    JSON.parse(e);
  } catch {
    return !1;
  }
  return !0;
}, Ev = ({ children: e, override: t, ...r }) => /* @__PURE__ */ Ee(ac, { theme: {
  token: { colorPrimary: t }
}, children: /* @__PURE__ */ Ee(Mm, { ...r, children: e }) });
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
function Ym() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Km() {
  let [, e] = Gt(/* @__PURE__ */ Object.create(null));
  return nl(() => {
    e(/* @__PURE__ */ Object.create(null));
  }, []);
}
var qm = Ym() ? Ca : Ue, Xm = ({
  children: e,
  type: t = "reach-portal",
  containerRef: r
}) => {
  let n = y.useRef(null), o = y.useRef(null), i = Km();
  return y.useEffect(() => {
    r != null && (typeof r != "object" || !("current" in r) ? console.warn("@reach/portal: Invalid value passed to the `containerRef` of a `Portal`. The portal will be appended to the document body, but if you want to attach it to another DOM node you must pass a valid React ref object to `containerRef`.") : r.current == null && console.warn("@reach/portal: A ref was passed to the `containerRef` prop of a `Portal`, but no DOM node was attached to it. Be sure to pass the ref to a DOM component.\n\nIf you are forwarding the ref from another component, be sure to use the React.forwardRef API. See https://reactjs.org/docs/forwarding-refs.html."));
  }, [r]), qm(() => {
    if (!n.current)
      return;
    let a = n.current.ownerDocument, s = r?.current || a.body;
    return o.current = a?.createElement(t), s.appendChild(o.current), i(), () => {
      o.current && s && s.removeChild(o.current);
    };
  }, [t, i, r]), o.current ? _a(e, o.current) : /* @__PURE__ */ y.createElement("span", {
    ref: n
  });
}, jc = ({
  unstable_skipInitialRender: e,
  ...t
}) => {
  let [r, n] = y.useState(!1);
  return y.useEffect(() => {
    e && n(!0);
  }, [e]), e && !r ? null : /* @__PURE__ */ y.createElement(Xm, {
    ...t
  });
};
jc.displayName = "Portal";
const Qm = () => ({
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
var la;
function Jm() {
  if (la)
    return ue;
  la = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), p;
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
    return typeof h == "string" || typeof h == "function" || h === r || h === o || h === n || h === c || h === u || h === v || typeof h == "object" && h !== null && (h.$$typeof === m || h.$$typeof === f || h.$$typeof === i || h.$$typeof === a || h.$$typeof === l || h.$$typeof === p || h.getModuleId !== void 0);
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
var ua;
function Zm() {
  return ua || (ua = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), p = !1, d = !1, h = !1, C = !1, E = !1, R;
    R = Symbol.for("react.module.reference");
    function O(B) {
      return !!(typeof B == "string" || typeof B == "function" || B === r || B === o || E || B === n || B === c || B === u || C || B === v || p || d || h || typeof B == "object" && B !== null && (B.$$typeof === m || B.$$typeof === f || B.$$typeof === i || B.$$typeof === a || B.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      B.$$typeof === R || B.getModuleId !== void 0));
    }
    function g(B) {
      if (typeof B == "object" && B !== null) {
        var W = B.$$typeof;
        switch (W) {
          case e:
            var he = B.type;
            switch (he) {
              case r:
              case o:
              case n:
              case c:
              case u:
                return he;
              default:
                var Z = he && he.$$typeof;
                switch (Z) {
                  case s:
                  case a:
                  case l:
                  case m:
                  case f:
                  case i:
                    return Z;
                  default:
                    return W;
                }
            }
          case t:
            return W;
        }
      }
    }
    var A = a, _ = i, F = e, D = l, I = r, V = m, x = f, b = t, w = o, N = n, j = c, L = u, z = !1, K = !1;
    function q(B) {
      return z || (z = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function re(B) {
      return K || (K = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function $(B) {
      return g(B) === a;
    }
    function M(B) {
      return g(B) === i;
    }
    function H(B) {
      return typeof B == "object" && B !== null && B.$$typeof === e;
    }
    function U(B) {
      return g(B) === l;
    }
    function S(B) {
      return g(B) === r;
    }
    function te(B) {
      return g(B) === m;
    }
    function k(B) {
      return g(B) === f;
    }
    function ne(B) {
      return g(B) === t;
    }
    function J(B) {
      return g(B) === o;
    }
    function Q(B) {
      return g(B) === n;
    }
    function P(B) {
      return g(B) === c;
    }
    function se(B) {
      return g(B) === u;
    }
    fe.ContextConsumer = A, fe.ContextProvider = _, fe.Element = F, fe.ForwardRef = D, fe.Fragment = I, fe.Lazy = V, fe.Memo = x, fe.Portal = b, fe.Profiler = w, fe.StrictMode = N, fe.Suspense = j, fe.SuspenseList = L, fe.isAsyncMode = q, fe.isConcurrentMode = re, fe.isContextConsumer = $, fe.isContextProvider = M, fe.isElement = H, fe.isForwardRef = U, fe.isFragment = S, fe.isLazy = te, fe.isMemo = k, fe.isPortal = ne, fe.isProfiler = J, fe.isStrictMode = Q, fe.isSuspense = P, fe.isSuspenseList = se, fe.isValidElementType = O, fe.typeOf = g;
  }()), fe;
}
process.env.NODE_ENV === "production" ? bo.exports = Jm() : bo.exports = Zm();
var Qo = bo.exports;
function eg(e) {
  function t($, M, H, U, S) {
    for (var te = 0, k = 0, ne = 0, J = 0, Q, P, se = 0, B = 0, W, he = W = Q = 0, Z = 0, me = 0, ge = 0, G = 0, oe = H.length, be = oe - 1, xe, X = "", ve = "", jt = "", Ft = "", Ve; Z < oe; ) {
      if (P = H.charCodeAt(Z), Z === be && k + J + ne + te !== 0 && (k !== 0 && (P = k === 47 ? 10 : 47), J = ne = te = 0, oe++, be++), k + J + ne + te === 0) {
        if (Z === be && (0 < me && (X = X.replace(m, "")), 0 < X.trim().length)) {
          switch (P) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              X += H.charAt(Z);
          }
          P = 59;
        }
        switch (P) {
          case 123:
            for (X = X.trim(), Q = X.charCodeAt(0), W = 1, G = ++Z; Z < oe; ) {
              switch (P = H.charCodeAt(Z)) {
                case 123:
                  W++;
                  break;
                case 125:
                  W--;
                  break;
                case 47:
                  switch (P = H.charCodeAt(Z + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (he = Z + 1; he < be; ++he)
                          switch (H.charCodeAt(he)) {
                            case 47:
                              if (P === 42 && H.charCodeAt(he - 1) === 42 && Z + 2 !== he) {
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
                  for (; Z++ < be && H.charCodeAt(Z) !== P; )
                    ;
              }
              if (W === 0)
                break;
              Z++;
            }
            switch (W = H.substring(G, Z), Q === 0 && (Q = (X = X.replace(f, "").trim()).charCodeAt(0)), Q) {
              case 64:
                switch (0 < me && (X = X.replace(m, "")), P = X.charCodeAt(1), P) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    me = M;
                    break;
                  default:
                    me = j;
                }
                if (W = t(M, me, W, P, S + 1), G = W.length, 0 < z && (me = r(j, X, ge), Ve = s(3, W, me, M, b, x, G, P, S, U), X = me.join(""), Ve !== void 0 && (G = (W = Ve.trim()).length) === 0 && (P = 0, W = "")), 0 < G)
                  switch (P) {
                    case 115:
                      X = X.replace(A, a);
                    case 100:
                    case 109:
                    case 45:
                      W = X + "{" + W + "}";
                      break;
                    case 107:
                      X = X.replace(E, "$1 $2"), W = X + "{" + W + "}", W = N === 1 || N === 2 && i("@" + W, 3) ? "@-webkit-" + W + "@" + W : "@" + W;
                      break;
                    default:
                      W = X + W, U === 112 && (W = (ve += W, ""));
                  }
                else
                  W = "";
                break;
              default:
                W = t(M, r(M, X, ge), W, U, S + 1);
            }
            jt += W, W = ge = me = he = Q = 0, X = "", P = H.charCodeAt(++Z);
            break;
          case 125:
          case 59:
            if (X = (0 < me ? X.replace(m, "") : X).trim(), 1 < (G = X.length))
              switch (he === 0 && (Q = X.charCodeAt(0), Q === 45 || 96 < Q && 123 > Q) && (G = (X = X.replace(" ", ":")).length), 0 < z && (Ve = s(1, X, M, $, b, x, ve.length, U, S, U)) !== void 0 && (G = (X = Ve.trim()).length) === 0 && (X = "\0\0"), Q = X.charCodeAt(0), P = X.charCodeAt(1), Q) {
                case 0:
                  break;
                case 64:
                  if (P === 105 || P === 99) {
                    Ft += X + H.charAt(Z);
                    break;
                  }
                default:
                  X.charCodeAt(G - 1) !== 58 && (ve += o(X, Q, P, X.charCodeAt(2)));
              }
            ge = me = he = Q = 0, X = "", P = H.charCodeAt(++Z);
        }
      }
      switch (P) {
        case 13:
        case 10:
          k === 47 ? k = 0 : 1 + Q === 0 && U !== 107 && 0 < X.length && (me = 1, X += "\0"), 0 < z * q && s(0, X, M, $, b, x, ve.length, U, S, U), x = 1, b++;
          break;
        case 59:
        case 125:
          if (k + J + ne + te === 0) {
            x++;
            break;
          }
        default:
          switch (x++, xe = H.charAt(Z), P) {
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
              if (J + k + te + w === 0 && 0 < he)
                switch (Z - he) {
                  case 2:
                    se === 112 && H.charCodeAt(Z - 3) === 58 && (w = se);
                  case 8:
                    B === 111 && (w = B);
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
                if (Q === 0)
                  switch (2 * se + 3 * B) {
                    case 533:
                      break;
                    default:
                      Q = 1;
                  }
                ne++;
              }
              break;
            case 64:
              k + ne + J + te + he + W === 0 && (W = 1);
              break;
            case 42:
            case 47:
              if (!(0 < J + te + ne))
                switch (k) {
                  case 0:
                    switch (2 * P + 3 * H.charCodeAt(Z + 1)) {
                      case 235:
                        k = 47;
                        break;
                      case 220:
                        G = Z, k = 42;
                    }
                    break;
                  case 42:
                    P === 47 && se === 42 && G + 2 !== Z && (H.charCodeAt(G + 2) === 33 && (ve += H.substring(G, Z + 1)), xe = "", k = 0);
                }
          }
          k === 0 && (X += xe);
      }
      B = se, se = P, Z++;
    }
    if (G = ve.length, 0 < G) {
      if (me = M, 0 < z && (Ve = s(2, ve, me, $, b, x, G, U, S, U), Ve !== void 0 && (ve = Ve).length === 0))
        return Ft + ve + jt;
      if (ve = me.join(",") + "{" + ve + "}", N * w !== 0) {
        switch (N !== 2 || i(ve, 2) || (w = 0), w) {
          case 111:
            ve = ve.replace(O, ":-moz-$1") + ve;
            break;
          case 112:
            ve = ve.replace(R, "::-webkit-input-$1") + ve.replace(R, "::-moz-$1") + ve.replace(R, ":-ms-input-$1") + ve;
        }
        w = 0;
      }
    }
    return Ft + ve + jt;
  }
  function r($, M, H) {
    var U = M.trim().split(h);
    M = U;
    var S = U.length, te = $.length;
    switch (te) {
      case 0:
      case 1:
        var k = 0;
        for ($ = te === 0 ? "" : $[0] + " "; k < S; ++k)
          M[k] = n($, M[k], H).trim();
        break;
      default:
        var ne = k = 0;
        for (M = []; k < S; ++k)
          for (var J = 0; J < te; ++J)
            M[ne++] = n($[J] + " ", U[k], H).trim();
    }
    return M;
  }
  function n($, M, H) {
    var U = M.charCodeAt(0);
    switch (33 > U && (U = (M = M.trim()).charCodeAt(0)), U) {
      case 38:
        return M.replace(C, "$1" + $.trim());
      case 58:
        return $.trim() + M.replace(C, "$1" + $.trim());
      default:
        if (0 < 1 * H && 0 < M.indexOf("\f"))
          return M.replace(C, ($.charCodeAt(0) === 58 ? "" : "$1") + $.trim());
    }
    return $ + M;
  }
  function o($, M, H, U) {
    var S = $ + ";", te = 2 * M + 3 * H + 4 * U;
    if (te === 944) {
      $ = S.indexOf(":", 9) + 1;
      var k = S.substring($, S.length - 1).trim();
      return k = S.substring(0, $).trim() + k + ";", N === 1 || N === 2 && i(k, 1) ? "-webkit-" + k + k : k;
    }
    if (N === 0 || N === 2 && !i(S, 1))
      return S;
    switch (te) {
      case 1015:
        return S.charCodeAt(10) === 97 ? "-webkit-" + S + S : S;
      case 951:
        return S.charCodeAt(3) === 116 ? "-webkit-" + S + S : S;
      case 963:
        return S.charCodeAt(5) === 110 ? "-webkit-" + S + S : S;
      case 1009:
        if (S.charCodeAt(4) !== 100)
          break;
      case 969:
      case 942:
        return "-webkit-" + S + S;
      case 978:
        return "-webkit-" + S + "-moz-" + S + S;
      case 1019:
      case 983:
        return "-webkit-" + S + "-moz-" + S + "-ms-" + S + S;
      case 883:
        if (S.charCodeAt(8) === 45)
          return "-webkit-" + S + S;
        if (0 < S.indexOf("image-set(", 11))
          return S.replace(V, "$1-webkit-$2") + S;
        break;
      case 932:
        if (S.charCodeAt(4) === 45)
          switch (S.charCodeAt(5)) {
            case 103:
              return "-webkit-box-" + S.replace("-grow", "") + "-webkit-" + S + "-ms-" + S.replace("grow", "positive") + S;
            case 115:
              return "-webkit-" + S + "-ms-" + S.replace("shrink", "negative") + S;
            case 98:
              return "-webkit-" + S + "-ms-" + S.replace("basis", "preferred-size") + S;
          }
        return "-webkit-" + S + "-ms-" + S + S;
      case 964:
        return "-webkit-" + S + "-ms-flex-" + S + S;
      case 1023:
        if (S.charCodeAt(8) !== 99)
          break;
        return k = S.substring(S.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + k + "-webkit-" + S + "-ms-flex-pack" + k + S;
      case 1005:
        return p.test(S) ? S.replace(v, ":-webkit-") + S.replace(v, ":-moz-") + S : S;
      case 1e3:
        switch (k = S.substring(13).trim(), M = k.indexOf("-") + 1, k.charCodeAt(0) + k.charCodeAt(M)) {
          case 226:
            k = S.replace(g, "tb");
            break;
          case 232:
            k = S.replace(g, "tb-rl");
            break;
          case 220:
            k = S.replace(g, "lr");
            break;
          default:
            return S;
        }
        return "-webkit-" + S + "-ms-" + k + S;
      case 1017:
        if (S.indexOf("sticky", 9) === -1)
          break;
      case 975:
        switch (M = (S = $).length - 10, k = (S.charCodeAt(M) === 33 ? S.substring(0, M) : S).substring($.indexOf(":", 7) + 1).trim(), te = k.charCodeAt(0) + (k.charCodeAt(7) | 0)) {
          case 203:
            if (111 > k.charCodeAt(8))
              break;
          case 115:
            S = S.replace(k, "-webkit-" + k) + ";" + S;
            break;
          case 207:
          case 102:
            S = S.replace(k, "-webkit-" + (102 < te ? "inline-" : "") + "box") + ";" + S.replace(k, "-webkit-" + k) + ";" + S.replace(k, "-ms-" + k + "box") + ";" + S;
        }
        return S + ";";
      case 938:
        if (S.charCodeAt(5) === 45)
          switch (S.charCodeAt(6)) {
            case 105:
              return k = S.replace("-items", ""), "-webkit-" + S + "-webkit-box-" + k + "-ms-flex-" + k + S;
            case 115:
              return "-webkit-" + S + "-ms-flex-item-" + S.replace(F, "") + S;
            default:
              return "-webkit-" + S + "-ms-flex-line-pack" + S.replace("align-content", "").replace(F, "") + S;
          }
        break;
      case 973:
      case 989:
        if (S.charCodeAt(3) !== 45 || S.charCodeAt(4) === 122)
          break;
      case 931:
      case 953:
        if (I.test($) === !0)
          return (k = $.substring($.indexOf(":") + 1)).charCodeAt(0) === 115 ? o($.replace("stretch", "fill-available"), M, H, U).replace(":fill-available", ":stretch") : S.replace(k, "-webkit-" + k) + S.replace(k, "-moz-" + k.replace("fill-", "")) + S;
        break;
      case 962:
        if (S = "-webkit-" + S + (S.charCodeAt(5) === 102 ? "-ms-" + S : "") + S, H + U === 211 && S.charCodeAt(13) === 105 && 0 < S.indexOf("transform", 10))
          return S.substring(0, S.indexOf(";", 27) + 1).replace(d, "$1-webkit-$2") + S;
    }
    return S;
  }
  function i($, M) {
    var H = $.indexOf(M === 1 ? ":" : "{"), U = $.substring(0, M !== 3 ? H : 10);
    return H = $.substring(H + 1, $.length - 1), K(M !== 2 ? U : U.replace(D, "$1"), H, M);
  }
  function a($, M) {
    var H = o(M, M.charCodeAt(0), M.charCodeAt(1), M.charCodeAt(2));
    return H !== M + ";" ? H.replace(_, " or ($1)").substring(4) : "(" + M + ")";
  }
  function s($, M, H, U, S, te, k, ne, J, Q) {
    for (var P = 0, se = M, B; P < z; ++P)
      switch (B = L[P].call(u, $, se, H, U, S, te, k, ne, J, Q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          se = B;
      }
    if (se !== M)
      return se;
  }
  function l($) {
    switch ($) {
      case void 0:
      case null:
        z = L.length = 0;
        break;
      default:
        if (typeof $ == "function")
          L[z++] = $;
        else if (typeof $ == "object")
          for (var M = 0, H = $.length; M < H; ++M)
            l($[M]);
        else
          q = !!$ | 0;
    }
    return l;
  }
  function c($) {
    return $ = $.prefix, $ !== void 0 && (K = null, $ ? typeof $ != "function" ? N = 1 : (N = 2, K = $) : N = 0), c;
  }
  function u($, M) {
    var H = $;
    if (33 > H.charCodeAt(0) && (H = H.trim()), re = H, H = [re], 0 < z) {
      var U = s(-1, M, H, H, b, x, 0, 0, 0, 0);
      U !== void 0 && typeof U == "string" && (M = U);
    }
    var S = t(j, H, M, 0, 0);
    return 0 < z && (U = s(-2, S, H, H, b, x, S.length, 0, 0, 0), U !== void 0 && (S = U)), re = "", w = 0, x = b = 1, S;
  }
  var f = /^\0+/g, m = /[\0\r\f]/g, v = /: */g, p = /zoo|gra/, d = /([,: ])(transform)/g, h = /,\r+?/g, C = /([\t\r\n ])*\f?&/g, E = /@(k\w+)\s*(\S*)\s*/, R = /::(place)/g, O = /:(read-only)/g, g = /[svh]\w+-[tblr]{2}/, A = /\(\s*(.*)\s*\)/g, _ = /([\s\S]*?);/g, F = /-self|flex-/g, D = /[^]*?(:[rp][el]a[\w-]+)[^]*/, I = /stretch|:\s*\w+\-(?:conte|avail)/, V = /([^-])(image-set\()/, x = 1, b = 1, w = 0, N = 1, j = [], L = [], z = 0, K = null, q = 0, re = "";
  return u.use = l, u.set = c, e !== void 0 && c(e), u;
}
function tg(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var rg = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, fa = /* @__PURE__ */ tg(
  function(e) {
    return rg.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Jo = Za, ng = {
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
}, og = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, ig = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Fc = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Zo = {};
Zo[Jo.ForwardRef] = ig;
Zo[Jo.Memo] = Fc;
function da(e) {
  return Jo.isMemo(e) ? Fc : Zo[e.$$typeof] || ng;
}
var ag = Object.defineProperty, sg = Object.getOwnPropertyNames, pa = Object.getOwnPropertySymbols, cg = Object.getOwnPropertyDescriptor, lg = Object.getPrototypeOf, ha = Object.prototype;
function Hc(e, t, r) {
  if (typeof t != "string") {
    if (ha) {
      var n = lg(t);
      n && n !== ha && Hc(e, n, r);
    }
    var o = sg(t);
    pa && (o = o.concat(pa(t)));
    for (var i = da(e), a = da(t), s = 0; s < o.length; ++s) {
      var l = o[s];
      if (!og[l] && !(r && r[l]) && !(a && a[l]) && !(i && i[l])) {
        var c = cg(t, l);
        try {
          ag(e, l, c);
        } catch {
        }
      }
    }
  }
  return e;
}
var ug = Hc;
const fg = /* @__PURE__ */ Qa(ug);
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
var ma = function(e, t) {
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
var Pt = typeof process < "u" && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", ti = typeof window < "u" && "HTMLElement" in window, dg = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), pg = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function hg() {
  for (var e = arguments.length <= 0 ? void 0 : arguments[0], t = [], r = 1, n = arguments.length; r < n; r += 1)
    t.push(r < 0 || arguments.length <= r ? void 0 : arguments[r]);
  return t.forEach(function(o) {
    e = e.replace(/%[a-z]/, o);
  }), e;
}
function Dt(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  throw process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (r.length > 0 ? " Args: " + r.join(", ") : "")) : new Error(hg.apply(void 0, [pg[e]].concat(r)).trim());
}
var mg = function() {
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
}(), Dr = /* @__PURE__ */ new Map(), Yr = /* @__PURE__ */ new Map(), Vt = 1, Cr = function(e) {
  if (Dr.has(e))
    return Dr.get(e);
  for (; Yr.has(Vt); )
    Vt++;
  var t = Vt++;
  return process.env.NODE_ENV !== "production" && ((0 | t) < 0 || t > 1 << 30) && Dt(16, "" + t), Dr.set(e, t), Yr.set(t, e), t;
}, gg = function(e) {
  return Yr.get(e);
}, vg = function(e, t) {
  t >= Vt && (Vt = t + 1), Dr.set(e, t), Yr.set(t, e);
}, yg = "style[" + Pt + '][data-styled-version="5.3.6"]', bg = new RegExp("^" + Pt + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), Sg = function(e, t, r) {
  for (var n, o = r.split(","), i = 0, a = o.length; i < a; i++)
    (n = o[i]) && e.registerName(t, n);
}, Eg = function(e, t) {
  for (var r = (t.textContent || "").split(`/*!sc*/
`), n = [], o = 0, i = r.length; o < i; o++) {
    var a = r[o].trim();
    if (a) {
      var s = a.match(bg);
      if (s) {
        var l = 0 | parseInt(s[1], 10), c = s[2];
        l !== 0 && (vg(c, l), Sg(e, c, s[3]), e.getTag().insertRules(l, n)), n.length = 0;
      } else
        n.push(a);
    }
  }
}, Cg = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, Bc = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), o = function(s) {
    for (var l = s.childNodes, c = l.length; c >= 0; c--) {
      var u = l[c];
      if (u && u.nodeType === 1 && u.hasAttribute(Pt))
        return u;
    }
  }(r), i = o !== void 0 ? o.nextSibling : null;
  n.setAttribute(Pt, "active"), n.setAttribute("data-styled-version", "5.3.6");
  var a = Cg();
  return a && n.setAttribute("nonce", a), r.insertBefore(n, i), n;
}, xg = function() {
  function e(r) {
    var n = this.element = Bc(r);
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
}(), wg = function() {
  function e(r) {
    var n = this.element = Bc(r);
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
}(), _g = function() {
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
}(), ga = ti, Og = { isServer: !ti, useCSSOMInjection: !dg }, zc = function() {
  function e(r, n, o) {
    r === void 0 && (r = st), n === void 0 && (n = {}), this.options = tt({}, Og, {}, r), this.gs = n, this.names = new Map(o), this.server = !!r.isServer, !this.server && ti && ga && (ga = !1, function(i) {
      for (var a = document.querySelectorAll(yg), s = 0, l = a.length; s < l; s++) {
        var c = a[s];
        c && c.getAttribute(Pt) !== "active" && (Eg(i, c), c.parentNode && c.parentNode.removeChild(c));
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
    return this.tag || (this.tag = (o = (n = this.options).isServer, i = n.useCSSOMInjection, a = n.target, r = o ? new _g(a) : i ? new xg(a) : new wg(a), new mg(r)));
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
        var s = gg(a);
        if (s !== void 0) {
          var l = r.names.get(s), c = n.getGroup(a);
          if (l && c && l.size) {
            var u = Pt + ".g" + a + '[id="' + s + '"]', f = "";
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
}(), Tg = /(a)(d)/gi, va = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Co(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0)
    r = va(t % 52) + r;
  return (va(t % 52) + r).replace(Tg, "$1-$2");
}
var dt = function(e, t) {
  for (var r = t.length; r; )
    e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, Uc = function(e) {
  return dt(5381, e);
};
function Ag(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (tr(r) && !ei(r))
      return !1;
  }
  return !0;
}
var Rg = Uc("5.3.6"), Pg = function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (n === void 0 || n.isStatic) && Ag(t), this.componentId = r, this.baseHash = dt(Rg, r), this.baseStyle = n, zc.registerId(r);
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
      for (var c = this.rules.length, u = dt(this.baseHash, n.hash), f = "", m = 0; m < c; m++) {
        var v = this.rules[m];
        if (typeof v == "string")
          f += v, process.env.NODE_ENV !== "production" && (u = dt(u, v + m));
        else if (v) {
          var p = Nt(v, t, r, n), d = Array.isArray(p) ? p.join("") : p;
          u = dt(u, d + m), f += d;
        }
      }
      if (f) {
        var h = Co(u >>> 0);
        if (!r.hasNameForId(o, h)) {
          var C = n(f, "." + h, void 0, o);
          r.insertRules(o, h, C);
        }
        i.push(h);
      }
    }
    return i.join(" ");
  }, e;
}(), Ng = /^\s*\/\/.*$/gm, $g = [":", "[", ".", "#"];
function Ig(e) {
  var t, r, n, o, i = e === void 0 ? st : e, a = i.options, s = a === void 0 ? st : a, l = i.plugins, c = l === void 0 ? Gr : l, u = new eg(s), f = [], m = function(d) {
    function h(C) {
      if (C)
        try {
          d(C + "}");
        } catch {
        }
    }
    return function(C, E, R, O, g, A, _, F, D, I) {
      switch (C) {
        case 1:
          if (D === 0 && E.charCodeAt(0) === 64)
            return d(E + ";"), "";
          break;
        case 2:
          if (F === 0)
            return E + "/*|*/";
          break;
        case 3:
          switch (F) {
            case 102:
            case 112:
              return d(R[0] + E), "";
            default:
              return E + (I === 0 ? "/*|*/" : "");
          }
        case -2:
          E.split("/*|*/}").forEach(h);
      }
    };
  }(function(d) {
    f.push(d);
  }), v = function(d, h, C) {
    return h === 0 && $g.indexOf(C[r.length]) !== -1 || C.match(o) ? d : "." + t;
  };
  function p(d, h, C, E) {
    E === void 0 && (E = "&");
    var R = d.replace(Ng, ""), O = h && C ? C + " " + h + " { " + R + " }" : R;
    return t = E, r = h, n = new RegExp("\\" + r + "\\b", "g"), o = new RegExp("(\\" + r + "\\b){2,}"), u(C || !h ? "" : h, O);
  }
  return u.use([].concat(c, [function(d, h, C) {
    d === 2 && C.length && C[0].lastIndexOf(r) > 0 && (C[0] = C[0].replace(n, v));
  }, m, function(d) {
    if (d === -2) {
      var h = f;
      return f = [], h;
    }
  }])), p.hash = c.length ? c.reduce(function(d, h) {
    return h.name || Dt(15), dt(d, h.name);
  }, 5381).toString() : "", p;
}
var Wc = de.createContext();
Wc.Consumer;
var Vc = de.createContext(), Mg = (Vc.Consumer, new zc()), xo = Ig();
function kg() {
  return Ne(Wc) || Mg;
}
function Lg() {
  return Ne(Vc) || xo;
}
var Dg = function() {
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
}(), jg = /([A-Z])/, Fg = /([A-Z])/g, Hg = /^ms-/, Bg = function(e) {
  return "-" + e.toLowerCase();
};
function ya(e) {
  return jg.test(e) ? e.replace(Fg, Bg).replace(Hg, "-ms-") : e;
}
var ba = function(e) {
  return e == null || e === !1 || e === "";
};
function Nt(e, t, r, n) {
  if (Array.isArray(e)) {
    for (var o, i = [], a = 0, s = e.length; a < s; a += 1)
      (o = Nt(e[a], t, r, n)) !== "" && (Array.isArray(o) ? i.push.apply(i, o) : i.push(o));
    return i;
  }
  if (ba(e))
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
  return e instanceof Dg ? r ? (e.inject(r, n), e.getName(n)) : e : So(e) ? function u(f, m) {
    var v, p, d = [];
    for (var h in f)
      f.hasOwnProperty(h) && !ba(f[h]) && (Array.isArray(f[h]) && f[h].isCss || tr(f[h]) ? d.push(ya(h) + ":", f[h], ";") : So(f[h]) ? d.push.apply(d, u(f[h], h)) : d.push(ya(h) + ": " + (v = h, (p = f[h]) == null || typeof p == "boolean" || p === "" ? "" : typeof p != "number" || p === 0 || v in Cs ? String(p).trim() : p + "px") + ";"));
    return m ? [m + " {"].concat(d, ["}"]) : d;
  }(e) : e.toString();
}
var Sa = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function lt(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  return tr(e) || So(e) ? Sa(Nt(ma(Gr, [e].concat(r)))) : r.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : Sa(Nt(ma(e, r)));
}
var Ea = /invalid hook call/i, xr = /* @__PURE__ */ new Set(), zg = function(e, t) {
  if (process.env.NODE_ENV !== "production") {
    var r = "The component " + e + (t ? ' with the id of "' + t + '"' : "") + ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, n = console.error;
    try {
      var o = !0;
      console.error = function(i) {
        if (Ea.test(i))
          o = !1, xr.delete(r);
        else {
          for (var a = arguments.length, s = new Array(a > 1 ? a - 1 : 0), l = 1; l < a; l++)
            s[l - 1] = arguments[l];
          n.apply(void 0, [i].concat(s));
        }
      }, je(), o && !xr.has(r) && (console.warn(r), xr.add(r));
    } catch (i) {
      Ea.test(i.message) && xr.delete(r);
    } finally {
      console.error = n;
    }
  }
}, Ug = function(e, t, r) {
  return r === void 0 && (r = st), e.theme !== r.theme && e.theme || t || r.theme;
}, Wg = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Vg = /(^-|-$)/g;
function Ln(e) {
  return e.replace(Wg, "-").replace(Vg, "");
}
var Gg = function(e) {
  return Co(Uc(e) >>> 0);
};
function wr(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var wo = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, Yg = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function Kg(e, t, r) {
  var n = e[r];
  wo(t) && wo(n) ? Gc(n, t) : e[r] = t;
}
function Gc(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  for (var o = 0, i = r; o < i.length; o++) {
    var a = i[o];
    if (wo(a))
      for (var s in a)
        Yg(s) && Kg(e, a[s], s);
  }
  return e;
}
var Yc = de.createContext();
Yc.Consumer;
var Dn = {};
function Kc(e, t, r) {
  var n = ei(e), o = !wr(e), i = t.attrs, a = i === void 0 ? Gr : i, s = t.componentId, l = s === void 0 ? function(E, R) {
    var O = typeof E != "string" ? "sc" : Ln(E);
    Dn[O] = (Dn[O] || 0) + 1;
    var g = O + "-" + Gg("5.3.6" + O + Dn[O]);
    return R ? R + "-" + g : g;
  }(t.displayName, t.parentComponentId) : s, c = t.displayName, u = c === void 0 ? function(E) {
    return wr(E) ? "styled." + E : "Styled(" + Eo(E) + ")";
  }(e) : c, f = t.displayName && t.componentId ? Ln(t.displayName) + "-" + t.componentId : t.componentId || l, m = n && e.attrs ? Array.prototype.concat(e.attrs, a).filter(Boolean) : a, v = t.shouldForwardProp;
  n && e.shouldForwardProp && (v = t.shouldForwardProp ? function(E, R, O) {
    return e.shouldForwardProp(E, R, O) && t.shouldForwardProp(E, R, O);
  } : e.shouldForwardProp);
  var p, d = new Pg(r, f, n ? e.componentStyle : void 0), h = d.isStatic && a.length === 0, C = function(E, R) {
    return function(O, g, A, _) {
      var F = O.attrs, D = O.componentStyle, I = O.defaultProps, V = O.foldedComponentIds, x = O.shouldForwardProp, b = O.styledComponentId, w = O.target;
      process.env.NODE_ENV !== "production" && oi(b);
      var N = function(U, S, te) {
        U === void 0 && (U = st);
        var k = tt({}, S, { theme: U }), ne = {};
        return te.forEach(function(J) {
          var Q, P, se, B = J;
          for (Q in tr(B) && (B = B(k)), B)
            k[Q] = ne[Q] = Q === "className" ? (P = ne[Q], se = B[Q], P && se ? P + " " + se : P || se) : B[Q];
        }), [k, ne];
      }(Ug(g, Ne(Yc), I) || st, g, F), j = N[0], L = N[1], z = function(U, S, te, k) {
        var ne = kg(), J = Lg(), Q = S ? U.generateAndInjectStyles(st, ne, J) : U.generateAndInjectStyles(te, ne, J);
        return process.env.NODE_ENV !== "production" && oi(Q), process.env.NODE_ENV !== "production" && !S && k && k(Q), Q;
      }(D, _, j, process.env.NODE_ENV !== "production" ? O.warnTooManyClasses : void 0), K = A, q = L.$as || g.$as || L.as || g.as || w, re = wr(q), $ = L !== g ? tt({}, g, {}, L) : g, M = {};
      for (var H in $)
        H[0] !== "$" && H !== "as" && (H === "forwardedAs" ? M.as = $[H] : (x ? x(H, fa, q) : !re || fa(H)) && (M[H] = $[H]));
      return g.style && L.style !== g.style && (M.style = tt({}, g.style, {}, L.style)), M.className = Array.prototype.concat(V, b, z !== b ? z : null, g.className, L.className).filter(Boolean).join(" "), M.ref = K, ol(q, M);
    }(p, E, R, h);
  };
  return C.displayName = u, (p = de.forwardRef(C)).attrs = m, p.componentStyle = d, p.displayName = u, p.shouldForwardProp = v, p.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : Gr, p.styledComponentId = f, p.target = n ? e.target : e, p.withComponent = function(E) {
    var R = t.componentId, O = function(A, _) {
      if (A == null)
        return {};
      var F, D, I = {}, V = Object.keys(A);
      for (D = 0; D < V.length; D++)
        F = V[D], _.indexOf(F) >= 0 || (I[F] = A[F]);
      return I;
    }(t, ["componentId"]), g = R && R + "-" + (wr(E) ? E : Ln(Eo(E)));
    return Kc(E, tt({}, O, { attrs: m, componentId: g }), r);
  }, Object.defineProperty(p, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(E) {
    this._foldedDefaultProps = n ? Gc({}, e.defaultProps, E) : E;
  } }), process.env.NODE_ENV !== "production" && (zg(u, f), p.warnTooManyClasses = function(E, R) {
    var O = {}, g = !1;
    return function(A) {
      if (!g && (O[A] = !0, Object.keys(O).length >= 200)) {
        var _ = R ? ' with the id of "' + R + '"' : "";
        console.warn("Over 200 classes were generated for component " + E + _ + `.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), g = !0, O = {};
      }
    };
  }(u, f)), p.toString = function() {
    return "." + p.styledComponentId;
  }, o && fg(p, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), p;
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
  }(Kc, e);
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
const qg = (e = "flex-start", t = "stretch", r = "row") => lt`
  display: flex;
  justify-content: ${e};
  align-items: ${t};
  flex-direction: ${r};
`, qc = (e = "&") => lt`
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
`, Xg = (e) => lt`
  position: absolute;
  ${Object.entries(e).map(([t, r]) => `${t}: ${r};`).join(`
`)}
`, Qg = lt`
  -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
`, Jg = dn.div`
  ${qg("center", "center")};
  ${Xg({
  left: "0",
  top: "0"
})}
  ${ri("100vw", "100vh")};
  background: rgba(0, 0, 0, 0.44);
  z-index: 100;
`, Zg = dn.div`
  display: grid;
  position: relative;
  ${ri("50vw", "60vh")};
  background: ${rr("grey")};
  border: 2px solid ${rr("lightGrey")};
  min-height: 300px;
  border-radius: 6px;
  cursor: grab;
  ${Qg};
  touch-action: none;
  overflow-y: auto;
  scroll-behavior: smooth;
  ${qc()};
`, ev = dn.div`
  margin: 0 auto;
  margin-top: 18px;
  ${ri("60%", "100%")}
  & > * {
    cursor: initial;
    color: ${rr("light")};
  }
`, tv = ({ onClose: e, isOpen: t, children: r }) => {
  const { Spring: n, Gesture: o } = Dc(), { opacity: i, transform: a } = Qm(), s = n.useTransition(t, {
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
  })), { y: f, x: m, scale: v } = c, p = o.useDrag(
    ({ offset: [h, C], down: E }) => {
      u.start({
        y: E ? C : 0,
        immediate: !1,
        x: E ? h : 0,
        scale: E ? 1.07 : 1
      });
    },
    { from: () => [0, 0], filterTaps: !0, rubberband: !0, delay: 200 }
  ), d = (h) => {
    h.stopPropagation();
  };
  return /* @__PURE__ */ Ee(To, { children: s((h, C) => /* @__PURE__ */ Ee(Mc, { when: C, children: /* @__PURE__ */ Ee(jc, { children: /* @__PURE__ */ Ee(Jg, { style: h, onClick: e, as: n.a.div, children: /* @__PURE__ */ Ee(
    Zg,
    {
      style: { ...l, x: m, y: f, scale: v },
      ...p(),
      onClick: d,
      as: n.a.div,
      children: /* @__PURE__ */ Ee(
        sl,
        {
          damping: 0.05,
          syncCallbacks: !0,
          alwaysShowTracks: !0,
          children: /* @__PURE__ */ Ee(ev, { children: r })
        }
      )
    }
  ) }) }) })) });
}, Cv = (e) => /* @__PURE__ */ Ee(Lc, { children: /* @__PURE__ */ Ee(tv, { ...e }) }), rv = (e, t) => {
  const { Spring: r, Gesture: n } = Dc(), [{ y: o }, i] = r.useSpring(() => ({ y: t })), a = () => {
    i.start({ y: 0, immediate: !1, config: r.config.gentle });
  }, s = (f = 0) => {
    e(), i.start({
      y: t,
      immediate: !1,
      config: { ...r.config.stiff, velocity: f }
    });
  }, l = n.useDrag(
    ({ last: f, velocity: [, m], direction: [, v], offset: [, p], cancel: d }) => {
      p < -70 && d(), f ? p > t * 0.5 || m > 0.5 && v === 1 ? s(m) : a() : i.start({ y: p, immediate: v === -1 });
    },
    {
      from: () => [0, o.get()],
      filterTaps: !0,
      bounds: { top: 0 },
      rubberband: !0
    }
  ), c = o.to((f) => f < t ? "block" : "none");
  return {
    toggle: (f) => {
      f ? a() : s();
    },
    bind: l,
    div: r.a.div,
    springs: {
      display: c,
      y: o
    }
  };
}, nv = dn.div`
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
  ${qc()};
`, ov = ({ children: e, onClose: t, isOpen: r, height: n }) => {
  const o = rv(t, n);
  return Ue(() => {
    o.toggle(r);
  }, [r]), /* @__PURE__ */ Ee(
    nv,
    {
      $bottom: n,
      ...o.bind(),
      style: o.springs,
      as: o.div,
      children: e
    }
  );
}, xv = (e) => /* @__PURE__ */ Ee(Lc, { children: /* @__PURE__ */ Ee(ov, { ...e }) });
export {
  Lc as AnimationProvider,
  Ev as ColorButton,
  Mc as Display,
  Mu as ErrorBoundary,
  Ou as LocalStorage,
  Sv as LocalStorageClient,
  Cv as Modal,
  Ic as NotificationsContext,
  hv as NotificationsProvider,
  mv as Page,
  xv as Popover,
  uv as RoutePaths,
  lv as httpService,
  bv as isFunction,
  yv as isObject,
  Vm as isString,
  fv as useAltKeyDown,
  Dc as useAnimations,
  Tu as useBooleanState,
  dv as useDebounce,
  pv as useFullScreen,
  gv as useNotifications,
  vv as useOverflow
};
