import { useState as Fe, useRef as ne, useEffect as De, createContext as rt, useMemo as ot, useContext as st } from "react";
import { jsxs as it, jsx as C, Fragment as at } from "react/jsx-runtime";
function Le(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: ct } = Object.prototype, { getPrototypeOf: ue } = Object, V = ((e) => (t) => {
  const n = ct.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), A = (e) => (e = e.toLowerCase(), (t) => V(t) === e), $ = (e) => (t) => typeof t === e, { isArray: F } = Array, L = $("undefined");
function ut(e) {
  return e !== null && !L(e) && e.constructor !== null && !L(e.constructor) && S(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Ue = A("ArrayBuffer");
function lt(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Ue(e.buffer), t;
}
const ft = $("string"), S = $("function"), Be = $("number"), W = (e) => e !== null && typeof e == "object", dt = (e) => e === !0 || e === !1, v = (e) => {
  if (V(e) !== "object")
    return !1;
  const t = ue(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, ht = A("Date"), pt = A("File"), mt = A("Blob"), _t = A("FileList"), Et = (e) => W(e) && S(e.pipe), yt = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || S(e.append) && ((t = V(e)) === "formdata" || // detect form-data instance
  t === "object" && S(e.toString) && e.toString() === "[object FormData]"));
}, bt = A("URLSearchParams"), wt = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function U(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, o;
  if (typeof e != "object" && (e = [e]), F(e))
    for (r = 0, o = e.length; r < o; r++)
      t.call(null, e[r], r, e);
  else {
    const s = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = s.length;
    let c;
    for (r = 0; r < i; r++)
      c = s[r], t.call(null, e[c], c, e);
  }
}
function je(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, o;
  for (; r-- > 0; )
    if (o = n[r], t === o.toLowerCase())
      return o;
  return null;
}
const ve = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), He = (e) => !L(e) && e !== ve;
function re() {
  const { caseless: e } = He(this) && this || {}, t = {}, n = (r, o) => {
    const s = e && je(t, o) || o;
    v(t[s]) && v(r) ? t[s] = re(t[s], r) : v(r) ? t[s] = re({}, r) : F(r) ? t[s] = r.slice() : t[s] = r;
  };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && U(arguments[r], n);
  return t;
}
const St = (e, t, n, { allOwnKeys: r } = {}) => (U(t, (o, s) => {
  n && S(o) ? e[s] = Le(o, n) : e[s] = o;
}, { allOwnKeys: r }), e), Rt = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Ot = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, At = (e, t, n, r) => {
  let o, s, i;
  const c = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (o = Object.getOwnPropertyNames(e), s = o.length; s-- > 0; )
      i = o[s], (!r || r(i, e, t)) && !c[i] && (t[i] = e[i], c[i] = !0);
    e = n !== !1 && ue(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, Tt = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, gt = (e) => {
  if (!e)
    return null;
  if (F(e))
    return e;
  let t = e.length;
  if (!Be(t))
    return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, Nt = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && ue(Uint8Array)), Pt = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const s = o.value;
    t.call(e, s[0], s[1]);
  }
}, Ct = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, xt = A("HTMLFormElement"), Ft = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, o) {
    return r.toUpperCase() + o;
  }
), pe = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), Dt = A("RegExp"), Ie = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  U(n, (o, s) => {
    t(o, s, e) !== !1 && (r[s] = o);
  }), Object.defineProperties(e, r);
}, Lt = (e) => {
  Ie(e, (t, n) => {
    if (S(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (S(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, Ut = (e, t) => {
  const n = {}, r = (o) => {
    o.forEach((s) => {
      n[s] = !0;
    });
  };
  return F(e) ? r(e) : r(String(e).split(t)), n;
}, Bt = () => {
}, jt = (e, t) => (e = +e, Number.isFinite(e) ? e : t), Q = "abcdefghijklmnopqrstuvwxyz", me = "0123456789", ke = {
  DIGIT: me,
  ALPHA: Q,
  ALPHA_DIGIT: Q + Q.toUpperCase() + me
}, vt = (e = 16, t = ke.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t;
  for (; e--; )
    n += t[Math.random() * r | 0];
  return n;
};
function Ht(e) {
  return !!(e && S(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const It = (e) => {
  const t = new Array(10), n = (r, o) => {
    if (W(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[o] = r;
        const s = F(r) ? [] : {};
        return U(r, (i, c) => {
          const f = n(i, o + 1);
          !L(f) && (s[c] = f);
        }), t[o] = void 0, s;
      }
    }
    return r;
  };
  return n(e, 0);
}, kt = A("AsyncFunction"), Mt = (e) => e && (W(e) || S(e)) && S(e.then) && S(e.catch), a = {
  isArray: F,
  isArrayBuffer: Ue,
  isBuffer: ut,
  isFormData: yt,
  isArrayBufferView: lt,
  isString: ft,
  isNumber: Be,
  isBoolean: dt,
  isObject: W,
  isPlainObject: v,
  isUndefined: L,
  isDate: ht,
  isFile: pt,
  isBlob: mt,
  isRegExp: Dt,
  isFunction: S,
  isStream: Et,
  isURLSearchParams: bt,
  isTypedArray: Nt,
  isFileList: _t,
  forEach: U,
  merge: re,
  extend: St,
  trim: wt,
  stripBOM: Rt,
  inherits: Ot,
  toFlatObject: At,
  kindOf: V,
  kindOfTest: A,
  endsWith: Tt,
  toArray: gt,
  forEachEntry: Pt,
  matchAll: Ct,
  isHTMLForm: xt,
  hasOwnProperty: pe,
  hasOwnProp: pe,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Ie,
  freezeMethods: Lt,
  toObjectSet: Ut,
  toCamelCase: Ft,
  noop: Bt,
  toFiniteNumber: jt,
  findKey: je,
  global: ve,
  isContextDefined: He,
  ALPHABET: ke,
  generateString: vt,
  isSpecCompliantForm: Ht,
  toJSONObject: It,
  isAsyncFn: kt,
  isThenable: Mt
};
function m(e, t, n, r, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), o && (this.response = o);
}
a.inherits(m, Error, {
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
      config: a.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const Me = m.prototype, qe = {};
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
  qe[e] = { value: e };
});
Object.defineProperties(m, qe);
Object.defineProperty(Me, "isAxiosError", { value: !0 });
m.from = (e, t, n, r, o, s) => {
  const i = Object.create(Me);
  return a.toFlatObject(e, i, function(f) {
    return f !== Error.prototype;
  }, (c) => c !== "isAxiosError"), m.call(i, e.message, t, n, r, o), i.cause = e, i.name = e.name, s && Object.assign(i, s), i;
};
const qt = null;
function oe(e) {
  return a.isPlainObject(e) || a.isArray(e);
}
function ze(e) {
  return a.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function _e(e, t, n) {
  return e ? e.concat(t).map(function(o, s) {
    return o = ze(o), !n && s ? "[" + o + "]" : o;
  }).join(n ? "." : "") : t;
}
function zt(e) {
  return a.isArray(e) && !e.some(oe);
}
const Jt = a.toFlatObject(a, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function K(e, t, n) {
  if (!a.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = a.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(p, T) {
    return !a.isUndefined(T[p]);
  });
  const r = n.metaTokens, o = n.visitor || l, s = n.dots, i = n.indexes, f = (n.Blob || typeof Blob < "u" && Blob) && a.isSpecCompliantForm(t);
  if (!a.isFunction(o))
    throw new TypeError("visitor must be a function");
  function u(d) {
    if (d === null)
      return "";
    if (a.isDate(d))
      return d.toISOString();
    if (!f && a.isBlob(d))
      throw new m("Blob is not supported. Use a Buffer instead.");
    return a.isArrayBuffer(d) || a.isTypedArray(d) ? f && typeof Blob == "function" ? new Blob([d]) : Buffer.from(d) : d;
  }
  function l(d, p, T) {
    let R = d;
    if (d && !T && typeof d == "object") {
      if (a.endsWith(p, "{}"))
        p = r ? p : p.slice(0, -2), d = JSON.stringify(d);
      else if (a.isArray(d) && zt(d) || (a.isFileList(d) || a.endsWith(p, "[]")) && (R = a.toArray(d)))
        return p = ze(p), R.forEach(function(j, nt) {
          !(a.isUndefined(j) || j === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? _e([p], nt, s) : i === null ? p : p + "[]",
            u(j)
          );
        }), !1;
    }
    return oe(d) ? !0 : (t.append(_e(T, p, s), u(d)), !1);
  }
  const h = [], _ = Object.assign(Jt, {
    defaultVisitor: l,
    convertValue: u,
    isVisitable: oe
  });
  function E(d, p) {
    if (!a.isUndefined(d)) {
      if (h.indexOf(d) !== -1)
        throw Error("Circular reference detected in " + p.join("."));
      h.push(d), a.forEach(d, function(R, P) {
        (!(a.isUndefined(R) || R === null) && o.call(
          t,
          R,
          a.isString(P) ? P.trim() : P,
          p,
          _
        )) === !0 && E(R, p ? p.concat(P) : [P]);
      }), h.pop();
    }
  }
  if (!a.isObject(e))
    throw new TypeError("data must be an object");
  return E(e), t;
}
function Ee(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
    return t[r];
  });
}
function le(e, t) {
  this._pairs = [], e && K(e, this, t);
}
const Je = le.prototype;
Je.append = function(t, n) {
  this._pairs.push([t, n]);
};
Je.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, Ee);
  } : Ee;
  return this._pairs.map(function(o) {
    return n(o[0]) + "=" + n(o[1]);
  }, "").join("&");
};
function Vt(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Ve(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || Vt, o = n && n.serialize;
  let s;
  if (o ? s = o(t, n) : s = a.isURLSearchParams(t) ? t.toString() : new le(t, n).toString(r), s) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return e;
}
class $t {
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
  use(t, n, r) {
    return this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
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
    a.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const ye = $t, $e = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Wt = typeof URLSearchParams < "u" ? URLSearchParams : le, Kt = typeof FormData < "u" ? FormData : null, Gt = typeof Blob < "u" ? Blob : null, Xt = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), Qt = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), O = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Wt,
    FormData: Kt,
    Blob: Gt
  },
  isStandardBrowserEnv: Xt,
  isStandardBrowserWebWorkerEnv: Qt,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function Yt(e, t) {
  return K(e, new O.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, o, s) {
      return O.isNode && a.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Zt(e) {
  return a.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function en(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const o = n.length;
  let s;
  for (r = 0; r < o; r++)
    s = n[r], t[s] = e[s];
  return t;
}
function We(e) {
  function t(n, r, o, s) {
    let i = n[s++];
    const c = Number.isFinite(+i), f = s >= n.length;
    return i = !i && a.isArray(o) ? o.length : i, f ? (a.hasOwnProp(o, i) ? o[i] = [o[i], r] : o[i] = r, !c) : ((!o[i] || !a.isObject(o[i])) && (o[i] = []), t(n, r, o[i], s) && a.isArray(o[i]) && (o[i] = en(o[i])), !c);
  }
  if (a.isFormData(e) && a.isFunction(e.entries)) {
    const n = {};
    return a.forEachEntry(e, (r, o) => {
      t(Zt(r), o, n, 0);
    }), n;
  }
  return null;
}
const tn = {
  "Content-Type": void 0
};
function nn(e, t, n) {
  if (a.isString(e))
    try {
      return (t || JSON.parse)(e), a.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const G = {
  transitional: $e,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", o = r.indexOf("application/json") > -1, s = a.isObject(t);
    if (s && a.isHTMLForm(t) && (t = new FormData(t)), a.isFormData(t))
      return o && o ? JSON.stringify(We(t)) : t;
    if (a.isArrayBuffer(t) || a.isBuffer(t) || a.isStream(t) || a.isFile(t) || a.isBlob(t))
      return t;
    if (a.isArrayBufferView(t))
      return t.buffer;
    if (a.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let c;
    if (s) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Yt(t, this.formSerializer).toString();
      if ((c = a.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const f = this.env && this.env.FormData;
        return K(
          c ? { "files[]": t } : t,
          f && new f(),
          this.formSerializer
        );
      }
    }
    return s || o ? (n.setContentType("application/json", !1), nn(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || G.transitional, r = n && n.forcedJSONParsing, o = this.responseType === "json";
    if (t && a.isString(t) && (r && !this.responseType || o)) {
      const i = !(n && n.silentJSONParsing) && o;
      try {
        return JSON.parse(t);
      } catch (c) {
        if (i)
          throw c.name === "SyntaxError" ? m.from(c, m.ERR_BAD_RESPONSE, this, null, this.response) : c;
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
    FormData: O.classes.FormData,
    Blob: O.classes.Blob
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
a.forEach(["delete", "get", "head"], function(t) {
  G.headers[t] = {};
});
a.forEach(["post", "put", "patch"], function(t) {
  G.headers[t] = a.merge(tn);
});
const fe = G, rn = a.toObjectSet([
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
]), on = (e) => {
  const t = {};
  let n, r, o;
  return e && e.split(`
`).forEach(function(i) {
    o = i.indexOf(":"), n = i.substring(0, o).trim().toLowerCase(), r = i.substring(o + 1).trim(), !(!n || t[n] && rn[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, be = Symbol("internals");
function D(e) {
  return e && String(e).trim().toLowerCase();
}
function H(e) {
  return e === !1 || e == null ? e : a.isArray(e) ? e.map(H) : String(e);
}
function sn(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const an = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Y(e, t, n, r, o) {
  if (a.isFunction(r))
    return r.call(this, t, n);
  if (o && (t = n), !!a.isString(t)) {
    if (a.isString(r))
      return t.indexOf(r) !== -1;
    if (a.isRegExp(r))
      return r.test(t);
  }
}
function cn(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function un(e, t) {
  const n = a.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(o, s, i) {
        return this[r].call(this, t, o, s, i);
      },
      configurable: !0
    });
  });
}
class X {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const o = this;
    function s(c, f, u) {
      const l = D(f);
      if (!l)
        throw new Error("header name must be a non-empty string");
      const h = a.findKey(o, l);
      (!h || o[h] === void 0 || u === !0 || u === void 0 && o[h] !== !1) && (o[h || f] = H(c));
    }
    const i = (c, f) => a.forEach(c, (u, l) => s(u, l, f));
    return a.isPlainObject(t) || t instanceof this.constructor ? i(t, n) : a.isString(t) && (t = t.trim()) && !an(t) ? i(on(t), n) : t != null && s(n, t, r), this;
  }
  get(t, n) {
    if (t = D(t), t) {
      const r = a.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n)
          return o;
        if (n === !0)
          return sn(o);
        if (a.isFunction(n))
          return n.call(this, o, r);
        if (a.isRegExp(n))
          return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = D(t), t) {
      const r = a.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Y(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function s(i) {
      if (i = D(i), i) {
        const c = a.findKey(r, i);
        c && (!n || Y(r, r[c], c, n)) && (delete r[c], o = !0);
      }
    }
    return a.isArray(t) ? t.forEach(s) : s(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, o = !1;
    for (; r--; ) {
      const s = n[r];
      (!t || Y(this, this[s], s, t, !0)) && (delete this[s], o = !0);
    }
    return o;
  }
  normalize(t) {
    const n = this, r = {};
    return a.forEach(this, (o, s) => {
      const i = a.findKey(r, s);
      if (i) {
        n[i] = H(o), delete n[s];
        return;
      }
      const c = t ? cn(s) : String(s).trim();
      c !== s && delete n[s], n[c] = H(o), r[c] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return a.forEach(this, (r, o) => {
      r != null && r !== !1 && (n[o] = t && a.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((o) => r.set(o)), r;
  }
  static accessor(t) {
    const r = (this[be] = this[be] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function s(i) {
      const c = D(i);
      r[c] || (un(o, i), r[c] = !0);
    }
    return a.isArray(t) ? t.forEach(s) : s(t), this;
  }
}
X.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
a.freezeMethods(X.prototype);
a.freezeMethods(X);
const g = X;
function Z(e, t) {
  const n = this || fe, r = t || n, o = g.from(r.headers);
  let s = r.data;
  return a.forEach(e, function(c) {
    s = c.call(n, s, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), s;
}
function Ke(e) {
  return !!(e && e.__CANCEL__);
}
function B(e, t, n) {
  m.call(this, e ?? "canceled", m.ERR_CANCELED, t, n), this.name = "CanceledError";
}
a.inherits(B, m, {
  __CANCEL__: !0
});
function ln(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new m(
    "Request failed with status code " + n.status,
    [m.ERR_BAD_REQUEST, m.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
const fn = O.isStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  function() {
    return {
      write: function(n, r, o, s, i, c) {
        const f = [];
        f.push(n + "=" + encodeURIComponent(r)), a.isNumber(o) && f.push("expires=" + new Date(o).toGMTString()), a.isString(s) && f.push("path=" + s), a.isString(i) && f.push("domain=" + i), c === !0 && f.push("secure"), document.cookie = f.join("; ");
      },
      read: function(n) {
        const r = document.cookie.match(new RegExp("(^|;\\s*)(" + n + ")=([^;]*)"));
        return r ? decodeURIComponent(r[3]) : null;
      },
      remove: function(n) {
        this.write(n, "", Date.now() - 864e5);
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
function dn(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function hn(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Ge(e, t) {
  return e && !dn(t) ? hn(e, t) : t;
}
const pn = O.isStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");
    let r;
    function o(s) {
      let i = s;
      return t && (n.setAttribute("href", i), i = n.href), n.setAttribute("href", i), {
        href: n.href,
        protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
        host: n.host,
        search: n.search ? n.search.replace(/^\?/, "") : "",
        hash: n.hash ? n.hash.replace(/^#/, "") : "",
        hostname: n.hostname,
        port: n.port,
        pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
      };
    }
    return r = o(window.location.href), function(i) {
      const c = a.isString(i) ? o(i) : i;
      return c.protocol === r.protocol && c.host === r.host;
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
function mn(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function _n(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let o = 0, s = 0, i;
  return t = t !== void 0 ? t : 1e3, function(f) {
    const u = Date.now(), l = r[s];
    i || (i = u), n[o] = f, r[o] = u;
    let h = s, _ = 0;
    for (; h !== o; )
      _ += n[h++], h = h % e;
    if (o = (o + 1) % e, o === s && (s = (s + 1) % e), u - i < t)
      return;
    const E = l && u - l;
    return E ? Math.round(_ * 1e3 / E) : void 0;
  };
}
function we(e, t) {
  let n = 0;
  const r = _n(50, 250);
  return (o) => {
    const s = o.loaded, i = o.lengthComputable ? o.total : void 0, c = s - n, f = r(c), u = s <= i;
    n = s;
    const l = {
      loaded: s,
      total: i,
      progress: i ? s / i : void 0,
      bytes: c,
      rate: f || void 0,
      estimated: f && i && u ? (i - s) / f : void 0,
      event: o
    };
    l[t ? "download" : "upload"] = !0, e(l);
  };
}
const En = typeof XMLHttpRequest < "u", yn = En && function(e) {
  return new Promise(function(n, r) {
    let o = e.data;
    const s = g.from(e.headers).normalize(), i = e.responseType;
    let c;
    function f() {
      e.cancelToken && e.cancelToken.unsubscribe(c), e.signal && e.signal.removeEventListener("abort", c);
    }
    a.isFormData(o) && (O.isStandardBrowserEnv || O.isStandardBrowserWebWorkerEnv ? s.setContentType(!1) : s.setContentType("multipart/form-data;", !1));
    let u = new XMLHttpRequest();
    if (e.auth) {
      const E = e.auth.username || "", d = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      s.set("Authorization", "Basic " + btoa(E + ":" + d));
    }
    const l = Ge(e.baseURL, e.url);
    u.open(e.method.toUpperCase(), Ve(l, e.params, e.paramsSerializer), !0), u.timeout = e.timeout;
    function h() {
      if (!u)
        return;
      const E = g.from(
        "getAllResponseHeaders" in u && u.getAllResponseHeaders()
      ), p = {
        data: !i || i === "text" || i === "json" ? u.responseText : u.response,
        status: u.status,
        statusText: u.statusText,
        headers: E,
        config: e,
        request: u
      };
      ln(function(R) {
        n(R), f();
      }, function(R) {
        r(R), f();
      }, p), u = null;
    }
    if ("onloadend" in u ? u.onloadend = h : u.onreadystatechange = function() {
      !u || u.readyState !== 4 || u.status === 0 && !(u.responseURL && u.responseURL.indexOf("file:") === 0) || setTimeout(h);
    }, u.onabort = function() {
      u && (r(new m("Request aborted", m.ECONNABORTED, e, u)), u = null);
    }, u.onerror = function() {
      r(new m("Network Error", m.ERR_NETWORK, e, u)), u = null;
    }, u.ontimeout = function() {
      let d = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const p = e.transitional || $e;
      e.timeoutErrorMessage && (d = e.timeoutErrorMessage), r(new m(
        d,
        p.clarifyTimeoutError ? m.ETIMEDOUT : m.ECONNABORTED,
        e,
        u
      )), u = null;
    }, O.isStandardBrowserEnv) {
      const E = (e.withCredentials || pn(l)) && e.xsrfCookieName && fn.read(e.xsrfCookieName);
      E && s.set(e.xsrfHeaderName, E);
    }
    o === void 0 && s.setContentType(null), "setRequestHeader" in u && a.forEach(s.toJSON(), function(d, p) {
      u.setRequestHeader(p, d);
    }), a.isUndefined(e.withCredentials) || (u.withCredentials = !!e.withCredentials), i && i !== "json" && (u.responseType = e.responseType), typeof e.onDownloadProgress == "function" && u.addEventListener("progress", we(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && u.upload && u.upload.addEventListener("progress", we(e.onUploadProgress)), (e.cancelToken || e.signal) && (c = (E) => {
      u && (r(!E || E.type ? new B(null, e, u) : E), u.abort(), u = null);
    }, e.cancelToken && e.cancelToken.subscribe(c), e.signal && (e.signal.aborted ? c() : e.signal.addEventListener("abort", c)));
    const _ = mn(l);
    if (_ && O.protocols.indexOf(_) === -1) {
      r(new m("Unsupported protocol " + _ + ":", m.ERR_BAD_REQUEST, e));
      return;
    }
    u.send(o || null);
  });
}, I = {
  http: qt,
  xhr: yn
};
a.forEach(I, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const bn = {
  getAdapter: (e) => {
    e = a.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    for (let o = 0; o < t && (n = e[o], !(r = a.isString(n) ? I[n.toLowerCase()] : n)); o++)
      ;
    if (!r)
      throw r === !1 ? new m(
        `Adapter ${n} is not supported by the environment`,
        "ERR_NOT_SUPPORT"
      ) : new Error(
        a.hasOwnProp(I, n) ? `Adapter '${n}' is not available in the build` : `Unknown adapter '${n}'`
      );
    if (!a.isFunction(r))
      throw new TypeError("adapter is not a function");
    return r;
  },
  adapters: I
};
function ee(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new B(null, e);
}
function Se(e) {
  return ee(e), e.headers = g.from(e.headers), e.data = Z.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), bn.getAdapter(e.adapter || fe.adapter)(e).then(function(r) {
    return ee(e), r.data = Z.call(
      e,
      e.transformResponse,
      r
    ), r.headers = g.from(r.headers), r;
  }, function(r) {
    return Ke(r) || (ee(e), r && r.response && (r.response.data = Z.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = g.from(r.response.headers))), Promise.reject(r);
  });
}
const Re = (e) => e instanceof g ? e.toJSON() : e;
function x(e, t) {
  t = t || {};
  const n = {};
  function r(u, l, h) {
    return a.isPlainObject(u) && a.isPlainObject(l) ? a.merge.call({ caseless: h }, u, l) : a.isPlainObject(l) ? a.merge({}, l) : a.isArray(l) ? l.slice() : l;
  }
  function o(u, l, h) {
    if (a.isUndefined(l)) {
      if (!a.isUndefined(u))
        return r(void 0, u, h);
    } else
      return r(u, l, h);
  }
  function s(u, l) {
    if (!a.isUndefined(l))
      return r(void 0, l);
  }
  function i(u, l) {
    if (a.isUndefined(l)) {
      if (!a.isUndefined(u))
        return r(void 0, u);
    } else
      return r(void 0, l);
  }
  function c(u, l, h) {
    if (h in t)
      return r(u, l);
    if (h in e)
      return r(void 0, u);
  }
  const f = {
    url: s,
    method: s,
    data: s,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: c,
    headers: (u, l) => o(Re(u), Re(l), !0)
  };
  return a.forEach(Object.keys(Object.assign({}, e, t)), function(l) {
    const h = f[l] || o, _ = h(e[l], t[l], l);
    a.isUndefined(_) && h !== c || (n[l] = _);
  }), n;
}
const Xe = "1.4.0", de = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  de[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Oe = {};
de.transitional = function(t, n, r) {
  function o(s, i) {
    return "[Axios v" + Xe + "] Transitional option '" + s + "'" + i + (r ? ". " + r : "");
  }
  return (s, i, c) => {
    if (t === !1)
      throw new m(
        o(i, " has been removed" + (n ? " in " + n : "")),
        m.ERR_DEPRECATED
      );
    return n && !Oe[i] && (Oe[i] = !0, console.warn(
      o(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(s, i, c) : !0;
  };
};
function wn(e, t, n) {
  if (typeof e != "object")
    throw new m("options must be an object", m.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const s = r[o], i = t[s];
    if (i) {
      const c = e[s], f = c === void 0 || i(c, s, e);
      if (f !== !0)
        throw new m("option " + s + " must be " + f, m.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new m("Unknown option " + s, m.ERR_BAD_OPTION);
  }
}
const se = {
  assertOptions: wn,
  validators: de
}, N = se.validators;
class z {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new ye(),
      response: new ye()
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
  request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = x(this.defaults, n);
    const { transitional: r, paramsSerializer: o, headers: s } = n;
    r !== void 0 && se.assertOptions(r, {
      silentJSONParsing: N.transitional(N.boolean),
      forcedJSONParsing: N.transitional(N.boolean),
      clarifyTimeoutError: N.transitional(N.boolean)
    }, !1), o != null && (a.isFunction(o) ? n.paramsSerializer = {
      serialize: o
    } : se.assertOptions(o, {
      encode: N.function,
      serialize: N.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i;
    i = s && a.merge(
      s.common,
      s[n.method]
    ), i && a.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (d) => {
        delete s[d];
      }
    ), n.headers = g.concat(i, s);
    const c = [];
    let f = !0;
    this.interceptors.request.forEach(function(p) {
      typeof p.runWhen == "function" && p.runWhen(n) === !1 || (f = f && p.synchronous, c.unshift(p.fulfilled, p.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(p) {
      u.push(p.fulfilled, p.rejected);
    });
    let l, h = 0, _;
    if (!f) {
      const d = [Se.bind(this), void 0];
      for (d.unshift.apply(d, c), d.push.apply(d, u), _ = d.length, l = Promise.resolve(n); h < _; )
        l = l.then(d[h++], d[h++]);
      return l;
    }
    _ = c.length;
    let E = n;
    for (h = 0; h < _; ) {
      const d = c[h++], p = c[h++];
      try {
        E = d(E);
      } catch (T) {
        p.call(this, T);
        break;
      }
    }
    try {
      l = Se.call(this, E);
    } catch (d) {
      return Promise.reject(d);
    }
    for (h = 0, _ = u.length; h < _; )
      l = l.then(u[h++], u[h++]);
    return l;
  }
  getUri(t) {
    t = x(this.defaults, t);
    const n = Ge(t.baseURL, t.url);
    return Ve(n, t.params, t.paramsSerializer);
  }
}
a.forEach(["delete", "get", "head", "options"], function(t) {
  z.prototype[t] = function(n, r) {
    return this.request(x(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
a.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(s, i, c) {
      return this.request(x(c || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: s,
        data: i
      }));
    };
  }
  z.prototype[t] = n(), z.prototype[t + "Form"] = n(!0);
});
const k = z;
class he {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(s) {
      n = s;
    });
    const r = this;
    this.promise.then((o) => {
      if (!r._listeners)
        return;
      let s = r._listeners.length;
      for (; s-- > 0; )
        r._listeners[s](o);
      r._listeners = null;
    }), this.promise.then = (o) => {
      let s;
      const i = new Promise((c) => {
        r.subscribe(c), s = c;
      }).then(o);
      return i.cancel = function() {
        r.unsubscribe(s);
      }, i;
    }, t(function(s, i, c) {
      r.reason || (r.reason = new B(s, i, c), n(r.reason));
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
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new he(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
}
const Sn = he;
function Rn(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function On(e) {
  return a.isObject(e) && e.isAxiosError === !0;
}
const ie = {
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
Object.entries(ie).forEach(([e, t]) => {
  ie[t] = e;
});
const An = ie;
function Qe(e) {
  const t = new k(e), n = Le(k.prototype.request, t);
  return a.extend(n, k.prototype, t, { allOwnKeys: !0 }), a.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(o) {
    return Qe(x(e, o));
  }, n;
}
const b = Qe(fe);
b.Axios = k;
b.CanceledError = B;
b.CancelToken = Sn;
b.isCancel = Ke;
b.VERSION = Xe;
b.toFormData = K;
b.AxiosError = m;
b.Cancel = b.CanceledError;
b.all = function(t) {
  return Promise.all(t);
};
b.spread = Rn;
b.isAxiosError = On;
b.mergeConfig = x;
b.AxiosHeaders = g;
b.formToJSON = (e) => We(a.isHTMLForm(e) ? new FormData(e) : e);
b.HttpStatusCode = An;
b.default = b;
const Tn = b;
process.env.CLIENT_URL;
process.env.SERVER_PREFIX;
process.env.SERVER_PORT;
process.env.CODE_COMPILER_API_URL;
const gn = process.env.SERVER_URL ?? "http://localhost:6868", qn = Tn.create({
  baseURL: gn,
  withCredentials: !0
}), Nn = {
  EDITOR_THEME: "EDITOR_THEME",
  EDITOR_CONTENT_DATA: "EDITOR_CONTENT_DATA",
  EDITOR_EXECUTE_MESSAGES: "EDITOR_EXECUTE_MESSAGES"
}, zn = {
  MAIN: "/",
  EDITOR: "/edit",
  ABOUT: "/about"
}, Jn = () => {
  const [e, t] = Fe([]);
  return {
    on: (n) => {
      Object.entries(n).forEach(([r, o]) => {
        const s = (i) => {
          if (i.altKey && i.key === r.toLowerCase())
            return i.preventDefault(), o?.(), !1;
        };
        t([...e, s]), document.addEventListener("keydown", s);
      });
    },
    clear: () => {
      e.forEach((n) => {
        document.removeEventListener("keydown", n);
      });
    }
  };
}, Pn = (e = !1) => {
  const [t, n] = Fe(e);
  return {
    off: () => n(!1),
    on: () => n(!0),
    toggle: () => n(!t),
    val: t
  };
}, Vn = (e, t) => {
  const n = ne();
  return (...r) => {
    n.current && clearTimeout(n.current), n.current = setTimeout(() => {
      e(...r);
    }, t);
  };
}, $n = () => () => {
  if (!document.fullscreenElement)
    return document.documentElement.requestFullscreen();
  document.exitFullscreen && document.exitFullscreen();
}, Wn = () => {
  De(() => (document.body.style.overflow = "hidden", () => {
    document.body.style.overflow = "auto";
  }));
}, Cn = ({ when: e, children: t }) => e ? t : null;
var w;
w = { __e: function(e, t, n, r) {
  for (var o, s, i; t = t.__; )
    if ((o = t.__c) && !o.__)
      try {
        if ((s = o.constructor) && s.getDerivedStateFromError != null && (o.setState(s.getDerivedStateFromError(e)), i = o.__d), o.componentDidCatch != null && (o.componentDidCatch(e, r || {}), i = o.__d), i)
          return o.__E = o;
      } catch (c) {
        e = c;
      }
  throw e;
} }, typeof Promise == "function" && Promise.prototype.then.bind(Promise.resolve());
var J, y, te, Ae, ae = 0, Ye = [], M = [], Te = w.__b, ge = w.__r, Ne = w.diffed, Pe = w.__c, Ce = w.unmount;
function Ze(e, t) {
  w.__h && w.__h(y, e, ae || t), ae = 0;
  var n = y.__H || (y.__H = { __: [], __h: [] });
  return e >= n.__.length && n.__.push({ __V: M }), n.__[e];
}
function xn(e) {
  return ae = 1, Fn(et, e);
}
function Fn(e, t, n) {
  var r = Ze(J++, 2);
  if (r.t = e, !r.__c && (r.__ = [n ? n(t) : et(void 0, t), function(c) {
    var f = r.__N ? r.__N[0] : r.__[0], u = r.t(f, c);
    f !== u && (r.__N = [u, r.__[1]], r.__c.setState({}));
  }], r.__c = y, !y.u)) {
    var o = function(c, f, u) {
      if (!r.__c.__H)
        return !0;
      var l = r.__c.__H.__.filter(function(_) {
        return _.__c;
      });
      if (l.every(function(_) {
        return !_.__N;
      }))
        return !s || s.call(this, c, f, u);
      var h = !1;
      return l.forEach(function(_) {
        if (_.__N) {
          var E = _.__[0];
          _.__ = _.__N, _.__N = void 0, E !== _.__[0] && (h = !0);
        }
      }), !(!h && r.__c.props === c) && (!s || s.call(this, c, f, u));
    };
    y.u = !0;
    var s = y.shouldComponentUpdate, i = y.componentWillUpdate;
    y.componentWillUpdate = function(c, f, u) {
      if (this.__e) {
        var l = s;
        s = void 0, o(c, f, u), s = l;
      }
      i && i.call(this, c, f, u);
    }, y.shouldComponentUpdate = o;
  }
  return r.__N || r.__;
}
function Dn(e) {
  var t = Ze(J++, 10), n = xn();
  return t.__ = e, y.componentDidCatch || (y.componentDidCatch = function(r, o) {
    t.__ && t.__(r, o), n[1](r);
  }), [n[0], function() {
    n[1](void 0);
  }];
}
function Ln() {
  for (var e; e = Ye.shift(); )
    if (e.__P && e.__H)
      try {
        e.__H.__h.forEach(q), e.__H.__h.forEach(ce), e.__H.__h = [];
      } catch (t) {
        e.__H.__h = [], w.__e(t, e.__v);
      }
}
w.__b = function(e) {
  y = null, Te && Te(e);
}, w.__r = function(e) {
  ge && ge(e), J = 0;
  var t = (y = e.__c).__H;
  t && (te === y ? (t.__h = [], y.__h = [], t.__.forEach(function(n) {
    n.__N && (n.__ = n.__N), n.__V = M, n.__N = n.i = void 0;
  })) : (t.__h.forEach(q), t.__h.forEach(ce), t.__h = [], J = 0)), te = y;
}, w.diffed = function(e) {
  Ne && Ne(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (Ye.push(t) !== 1 && Ae === w.requestAnimationFrame || ((Ae = w.requestAnimationFrame) || Un)(Ln)), t.__H.__.forEach(function(n) {
    n.i && (n.__H = n.i), n.__V !== M && (n.__ = n.__V), n.i = void 0, n.__V = M;
  })), te = y = null;
}, w.__c = function(e, t) {
  t.some(function(n) {
    try {
      n.__h.forEach(q), n.__h = n.__h.filter(function(r) {
        return !r.__ || ce(r);
      });
    } catch (r) {
      t.some(function(o) {
        o.__h && (o.__h = []);
      }), t = [], w.__e(r, n.__v);
    }
  }), Pe && Pe(e, t);
}, w.unmount = function(e) {
  Ce && Ce(e);
  var t, n = e.__c;
  n && n.__H && (n.__H.__.forEach(function(r) {
    try {
      q(r);
    } catch (o) {
      t = o;
    }
  }), n.__H = void 0, t && w.__e(t, n.__v));
};
var xe = typeof requestAnimationFrame == "function";
function Un(e) {
  var t, n = function() {
    clearTimeout(r), xe && cancelAnimationFrame(t), setTimeout(e);
  }, r = setTimeout(n, 100);
  xe && (t = requestAnimationFrame(n));
}
function q(e) {
  var t = y, n = e.__c;
  typeof n == "function" && (e.__c = void 0, n()), y = t;
}
function ce(e) {
  var t = y;
  e.__c = e.__(), y = t;
}
function et(e, t) {
  return typeof t == "function" ? t(e) : t;
}
const Bn = ({ errorInfo: e }) => /* @__PURE__ */ it("div", { children: [
  "Custom Error Boundary. ",
  /* @__PURE__ */ C("br", {})
] }), jn = ({ children: e }) => {
  const [t] = Dn();
  return console.error(t), t ? /* @__PURE__ */ C(Bn, { errorInfo: t }) : /* @__PURE__ */ C(at, { children: e });
}, Kn = ({ children: e }) => /* @__PURE__ */ C(jn, { children: e }), tt = rt({}), vn = async () => Promise.all([
  import("./react-spring_web.modern-d55cb301.mjs"),
  import("./use-gesture-react.esm-862244eb.mjs")
]), Gn = ({ children: e }) => {
  const t = ne(), n = ne(), r = Pn(), o = async () => {
    const [i, c] = await vn();
    t.current = i, n.current = c, r.on();
  };
  De(() => {
    o();
  }, []);
  const s = ot(() => ({
    Spring: t.current,
    Gesture: n.current,
    isLoaded: r.val
  }), [r.val]);
  return /* @__PURE__ */ C(tt.Provider, { value: s, children: /* @__PURE__ */ C(Cn, { when: r.val, children: e }) });
}, Xn = () => st(tt), Qn = (e) => typeof e == "object" && e !== null, Hn = (e) => typeof e == "string", Yn = (e) => typeof e == "function";
class Zn {
  get(t, n) {
    const r = localStorage.getItem(t);
    return r ? In(r) ? JSON.parse(r) : r : n;
  }
  set(t, n) {
    if (t in Nn) {
      if (Hn(n))
        return localStorage.setItem(t, n);
      localStorage.setItem(t, JSON.stringify(n));
    }
  }
  clear(t) {
    if (t)
      return localStorage.removeItem(t);
    localStorage.clear();
  }
}
const In = (e) => {
  try {
    JSON.parse(e);
  } catch {
    return !1;
  }
  return !0;
};
export {
  Gn as AnimationProvider,
  Cn as Display,
  jn as ErrorBoundary,
  Nn as LocalStorage,
  Zn as LocalStorageClient,
  Kn as Page,
  zn as RoutePaths,
  qn as httpService,
  Yn as isFunction,
  Qn as isObject,
  Hn as isString,
  Jn as useAltKeyDown,
  Xn as useAnimations,
  Pn as useBooleanState,
  Vn as useDebounce,
  $n as useFullScreen,
  Wn as useOverflow
};
