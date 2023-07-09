import { useState as Ce, useRef as et } from "react";
import { jsxs as tt, jsx as q, Fragment as nt } from "react/jsx-runtime";
function Fe(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: rt } = Object.prototype, { getPrototypeOf: ce } = Object, V = ((e) => (t) => {
  const n = rt.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), A = (e) => (e = e.toLowerCase(), (t) => V(t) === e), $ = (e) => (t) => typeof t === e, { isArray: C } = Array, D = $("undefined");
function ot(e) {
  return e !== null && !D(e) && e.constructor !== null && !D(e.constructor) && S(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const De = A("ArrayBuffer");
function st(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && De(e.buffer), t;
}
const it = $("string"), S = $("function"), Le = $("number"), W = (e) => e !== null && typeof e == "object", at = (e) => e === !0 || e === !1, j = (e) => {
  if (V(e) !== "object")
    return !1;
  const t = ce(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, ct = A("Date"), ut = A("File"), lt = A("Blob"), ft = A("FileList"), dt = (e) => W(e) && S(e.pipe), ht = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || S(e.append) && ((t = V(e)) === "formdata" || // detect form-data instance
  t === "object" && S(e.toString) && e.toString() === "[object FormData]"));
}, pt = A("URLSearchParams"), mt = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function L(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, o;
  if (typeof e != "object" && (e = [e]), C(e))
    for (r = 0, o = e.length; r < o; r++)
      t.call(null, e[r], r, e);
  else {
    const s = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = s.length;
    let u;
    for (r = 0; r < i; r++)
      u = s[r], t.call(null, e[u], u, e);
  }
}
function Ue(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, o;
  for (; r-- > 0; )
    if (o = n[r], t === o.toLowerCase())
      return o;
  return null;
}
const Be = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), je = (e) => !D(e) && e !== Be;
function ne() {
  const { caseless: e } = je(this) && this || {}, t = {}, n = (r, o) => {
    const s = e && Ue(t, o) || o;
    j(t[s]) && j(r) ? t[s] = ne(t[s], r) : j(r) ? t[s] = ne({}, r) : C(r) ? t[s] = r.slice() : t[s] = r;
  };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && L(arguments[r], n);
  return t;
}
const _t = (e, t, n, { allOwnKeys: r } = {}) => (L(t, (o, s) => {
  n && S(o) ? e[s] = Fe(o, n) : e[s] = o;
}, { allOwnKeys: r }), e), Et = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), yt = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, bt = (e, t, n, r) => {
  let o, s, i;
  const u = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (o = Object.getOwnPropertyNames(e), s = o.length; s-- > 0; )
      i = o[s], (!r || r(i, e, t)) && !u[i] && (t[i] = e[i], u[i] = !0);
    e = n !== !1 && ce(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, wt = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, St = (e) => {
  if (!e)
    return null;
  if (C(e))
    return e;
  let t = e.length;
  if (!Le(t))
    return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, Rt = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && ce(Uint8Array)), Ot = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const s = o.value;
    t.call(e, s[0], s[1]);
  }
}, At = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, Tt = A("HTMLFormElement"), Nt = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, o) {
    return r.toUpperCase() + o;
  }
), he = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), gt = A("RegExp"), He = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  L(n, (o, s) => {
    t(o, s, e) !== !1 && (r[s] = o);
  }), Object.defineProperties(e, r);
}, Pt = (e) => {
  He(e, (t, n) => {
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
}, xt = (e, t) => {
  const n = {}, r = (o) => {
    o.forEach((s) => {
      n[s] = !0;
    });
  };
  return C(e) ? r(e) : r(String(e).split(t)), n;
}, Ct = () => {
}, Ft = (e, t) => (e = +e, Number.isFinite(e) ? e : t), Q = "abcdefghijklmnopqrstuvwxyz", pe = "0123456789", Ie = {
  DIGIT: pe,
  ALPHA: Q,
  ALPHA_DIGIT: Q + Q.toUpperCase() + pe
}, Dt = (e = 16, t = Ie.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t;
  for (; e--; )
    n += t[Math.random() * r | 0];
  return n;
};
function Lt(e) {
  return !!(e && S(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const Ut = (e) => {
  const t = new Array(10), n = (r, o) => {
    if (W(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[o] = r;
        const s = C(r) ? [] : {};
        return L(r, (i, u) => {
          const f = n(i, o + 1);
          !D(f) && (s[u] = f);
        }), t[o] = void 0, s;
      }
    }
    return r;
  };
  return n(e, 0);
}, Bt = A("AsyncFunction"), jt = (e) => e && (W(e) || S(e)) && S(e.then) && S(e.catch), a = {
  isArray: C,
  isArrayBuffer: De,
  isBuffer: ot,
  isFormData: ht,
  isArrayBufferView: st,
  isString: it,
  isNumber: Le,
  isBoolean: at,
  isObject: W,
  isPlainObject: j,
  isUndefined: D,
  isDate: ct,
  isFile: ut,
  isBlob: lt,
  isRegExp: gt,
  isFunction: S,
  isStream: dt,
  isURLSearchParams: pt,
  isTypedArray: Rt,
  isFileList: ft,
  forEach: L,
  merge: ne,
  extend: _t,
  trim: mt,
  stripBOM: Et,
  inherits: yt,
  toFlatObject: bt,
  kindOf: V,
  kindOfTest: A,
  endsWith: wt,
  toArray: St,
  forEachEntry: Ot,
  matchAll: At,
  isHTMLForm: Tt,
  hasOwnProperty: he,
  hasOwnProp: he,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: He,
  freezeMethods: Pt,
  toObjectSet: xt,
  toCamelCase: Nt,
  noop: Ct,
  toFiniteNumber: Ft,
  findKey: Ue,
  global: Be,
  isContextDefined: je,
  ALPHABET: Ie,
  generateString: Dt,
  isSpecCompliantForm: Lt,
  toJSONObject: Ut,
  isAsyncFn: Bt,
  isThenable: jt
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
const ke = m.prototype, ve = {};
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
  ve[e] = { value: e };
});
Object.defineProperties(m, ve);
Object.defineProperty(ke, "isAxiosError", { value: !0 });
m.from = (e, t, n, r, o, s) => {
  const i = Object.create(ke);
  return a.toFlatObject(e, i, function(f) {
    return f !== Error.prototype;
  }, (u) => u !== "isAxiosError"), m.call(i, e.message, t, n, r, o), i.cause = e, i.name = e.name, s && Object.assign(i, s), i;
};
const Ht = null;
function re(e) {
  return a.isPlainObject(e) || a.isArray(e);
}
function Me(e) {
  return a.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function me(e, t, n) {
  return e ? e.concat(t).map(function(o, s) {
    return o = Me(o), !n && s ? "[" + o + "]" : o;
  }).join(n ? "." : "") : t;
}
function It(e) {
  return a.isArray(e) && !e.some(re);
}
const kt = a.toFlatObject(a, {}, null, function(t) {
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
  function c(d) {
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
      else if (a.isArray(d) && It(d) || (a.isFileList(d) || a.endsWith(p, "[]")) && (R = a.toArray(d)))
        return p = Me(p), R.forEach(function(B, Ze) {
          !(a.isUndefined(B) || B === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? me([p], Ze, s) : i === null ? p : p + "[]",
            c(B)
          );
        }), !1;
    }
    return re(d) ? !0 : (t.append(me(T, p, s), c(d)), !1);
  }
  const h = [], _ = Object.assign(kt, {
    defaultVisitor: l,
    convertValue: c,
    isVisitable: re
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
function _e(e) {
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
function ue(e, t) {
  this._pairs = [], e && K(e, this, t);
}
const qe = ue.prototype;
qe.append = function(t, n) {
  this._pairs.push([t, n]);
};
qe.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, _e);
  } : _e;
  return this._pairs.map(function(o) {
    return n(o[0]) + "=" + n(o[1]);
  }, "").join("&");
};
function vt(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function ze(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || vt, o = n && n.serialize;
  let s;
  if (o ? s = o(t, n) : s = a.isURLSearchParams(t) ? t.toString() : new ue(t, n).toString(r), s) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return e;
}
class Mt {
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
const Ee = Mt, Je = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, qt = typeof URLSearchParams < "u" ? URLSearchParams : ue, zt = typeof FormData < "u" ? FormData : null, Jt = typeof Blob < "u" ? Blob : null, Vt = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), $t = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), O = {
  isBrowser: !0,
  classes: {
    URLSearchParams: qt,
    FormData: zt,
    Blob: Jt
  },
  isStandardBrowserEnv: Vt,
  isStandardBrowserWebWorkerEnv: $t,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function Wt(e, t) {
  return K(e, new O.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, o, s) {
      return O.isNode && a.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Kt(e) {
  return a.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Gt(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const o = n.length;
  let s;
  for (r = 0; r < o; r++)
    s = n[r], t[s] = e[s];
  return t;
}
function Ve(e) {
  function t(n, r, o, s) {
    let i = n[s++];
    const u = Number.isFinite(+i), f = s >= n.length;
    return i = !i && a.isArray(o) ? o.length : i, f ? (a.hasOwnProp(o, i) ? o[i] = [o[i], r] : o[i] = r, !u) : ((!o[i] || !a.isObject(o[i])) && (o[i] = []), t(n, r, o[i], s) && a.isArray(o[i]) && (o[i] = Gt(o[i])), !u);
  }
  if (a.isFormData(e) && a.isFunction(e.entries)) {
    const n = {};
    return a.forEachEntry(e, (r, o) => {
      t(Kt(r), o, n, 0);
    }), n;
  }
  return null;
}
const Xt = {
  "Content-Type": void 0
};
function Qt(e, t, n) {
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
  transitional: Je,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", o = r.indexOf("application/json") > -1, s = a.isObject(t);
    if (s && a.isHTMLForm(t) && (t = new FormData(t)), a.isFormData(t))
      return o && o ? JSON.stringify(Ve(t)) : t;
    if (a.isArrayBuffer(t) || a.isBuffer(t) || a.isStream(t) || a.isFile(t) || a.isBlob(t))
      return t;
    if (a.isArrayBufferView(t))
      return t.buffer;
    if (a.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let u;
    if (s) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Wt(t, this.formSerializer).toString();
      if ((u = a.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const f = this.env && this.env.FormData;
        return K(
          u ? { "files[]": t } : t,
          f && new f(),
          this.formSerializer
        );
      }
    }
    return s || o ? (n.setContentType("application/json", !1), Qt(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || G.transitional, r = n && n.forcedJSONParsing, o = this.responseType === "json";
    if (t && a.isString(t) && (r && !this.responseType || o)) {
      const i = !(n && n.silentJSONParsing) && o;
      try {
        return JSON.parse(t);
      } catch (u) {
        if (i)
          throw u.name === "SyntaxError" ? m.from(u, m.ERR_BAD_RESPONSE, this, null, this.response) : u;
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
  G.headers[t] = a.merge(Xt);
});
const le = G, Yt = a.toObjectSet([
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
]), Zt = (e) => {
  const t = {};
  let n, r, o;
  return e && e.split(`
`).forEach(function(i) {
    o = i.indexOf(":"), n = i.substring(0, o).trim().toLowerCase(), r = i.substring(o + 1).trim(), !(!n || t[n] && Yt[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, ye = Symbol("internals");
function F(e) {
  return e && String(e).trim().toLowerCase();
}
function H(e) {
  return e === !1 || e == null ? e : a.isArray(e) ? e.map(H) : String(e);
}
function en(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const tn = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
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
function nn(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function rn(e, t) {
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
    function s(u, f, c) {
      const l = F(f);
      if (!l)
        throw new Error("header name must be a non-empty string");
      const h = a.findKey(o, l);
      (!h || o[h] === void 0 || c === !0 || c === void 0 && o[h] !== !1) && (o[h || f] = H(u));
    }
    const i = (u, f) => a.forEach(u, (c, l) => s(c, l, f));
    return a.isPlainObject(t) || t instanceof this.constructor ? i(t, n) : a.isString(t) && (t = t.trim()) && !tn(t) ? i(Zt(t), n) : t != null && s(n, t, r), this;
  }
  get(t, n) {
    if (t = F(t), t) {
      const r = a.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n)
          return o;
        if (n === !0)
          return en(o);
        if (a.isFunction(n))
          return n.call(this, o, r);
        if (a.isRegExp(n))
          return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = F(t), t) {
      const r = a.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Y(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function s(i) {
      if (i = F(i), i) {
        const u = a.findKey(r, i);
        u && (!n || Y(r, r[u], u, n)) && (delete r[u], o = !0);
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
      const u = t ? nn(s) : String(s).trim();
      u !== s && delete n[s], n[u] = H(o), r[u] = !0;
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
    const r = (this[ye] = this[ye] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function s(i) {
      const u = F(i);
      r[u] || (rn(o, i), r[u] = !0);
    }
    return a.isArray(t) ? t.forEach(s) : s(t), this;
  }
}
X.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
a.freezeMethods(X.prototype);
a.freezeMethods(X);
const N = X;
function Z(e, t) {
  const n = this || le, r = t || n, o = N.from(r.headers);
  let s = r.data;
  return a.forEach(e, function(u) {
    s = u.call(n, s, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), s;
}
function $e(e) {
  return !!(e && e.__CANCEL__);
}
function U(e, t, n) {
  m.call(this, e ?? "canceled", m.ERR_CANCELED, t, n), this.name = "CanceledError";
}
a.inherits(U, m, {
  __CANCEL__: !0
});
function on(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new m(
    "Request failed with status code " + n.status,
    [m.ERR_BAD_REQUEST, m.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
const sn = O.isStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  function() {
    return {
      write: function(n, r, o, s, i, u) {
        const f = [];
        f.push(n + "=" + encodeURIComponent(r)), a.isNumber(o) && f.push("expires=" + new Date(o).toGMTString()), a.isString(s) && f.push("path=" + s), a.isString(i) && f.push("domain=" + i), u === !0 && f.push("secure"), document.cookie = f.join("; ");
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
function an(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function cn(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function We(e, t) {
  return e && !an(t) ? cn(e, t) : t;
}
const un = O.isStandardBrowserEnv ? (
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
      const u = a.isString(i) ? o(i) : i;
      return u.protocol === r.protocol && u.host === r.host;
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
function ln(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function fn(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let o = 0, s = 0, i;
  return t = t !== void 0 ? t : 1e3, function(f) {
    const c = Date.now(), l = r[s];
    i || (i = c), n[o] = f, r[o] = c;
    let h = s, _ = 0;
    for (; h !== o; )
      _ += n[h++], h = h % e;
    if (o = (o + 1) % e, o === s && (s = (s + 1) % e), c - i < t)
      return;
    const E = l && c - l;
    return E ? Math.round(_ * 1e3 / E) : void 0;
  };
}
function be(e, t) {
  let n = 0;
  const r = fn(50, 250);
  return (o) => {
    const s = o.loaded, i = o.lengthComputable ? o.total : void 0, u = s - n, f = r(u), c = s <= i;
    n = s;
    const l = {
      loaded: s,
      total: i,
      progress: i ? s / i : void 0,
      bytes: u,
      rate: f || void 0,
      estimated: f && i && c ? (i - s) / f : void 0,
      event: o
    };
    l[t ? "download" : "upload"] = !0, e(l);
  };
}
const dn = typeof XMLHttpRequest < "u", hn = dn && function(e) {
  return new Promise(function(n, r) {
    let o = e.data;
    const s = N.from(e.headers).normalize(), i = e.responseType;
    let u;
    function f() {
      e.cancelToken && e.cancelToken.unsubscribe(u), e.signal && e.signal.removeEventListener("abort", u);
    }
    a.isFormData(o) && (O.isStandardBrowserEnv || O.isStandardBrowserWebWorkerEnv ? s.setContentType(!1) : s.setContentType("multipart/form-data;", !1));
    let c = new XMLHttpRequest();
    if (e.auth) {
      const E = e.auth.username || "", d = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      s.set("Authorization", "Basic " + btoa(E + ":" + d));
    }
    const l = We(e.baseURL, e.url);
    c.open(e.method.toUpperCase(), ze(l, e.params, e.paramsSerializer), !0), c.timeout = e.timeout;
    function h() {
      if (!c)
        return;
      const E = N.from(
        "getAllResponseHeaders" in c && c.getAllResponseHeaders()
      ), p = {
        data: !i || i === "text" || i === "json" ? c.responseText : c.response,
        status: c.status,
        statusText: c.statusText,
        headers: E,
        config: e,
        request: c
      };
      on(function(R) {
        n(R), f();
      }, function(R) {
        r(R), f();
      }, p), c = null;
    }
    if ("onloadend" in c ? c.onloadend = h : c.onreadystatechange = function() {
      !c || c.readyState !== 4 || c.status === 0 && !(c.responseURL && c.responseURL.indexOf("file:") === 0) || setTimeout(h);
    }, c.onabort = function() {
      c && (r(new m("Request aborted", m.ECONNABORTED, e, c)), c = null);
    }, c.onerror = function() {
      r(new m("Network Error", m.ERR_NETWORK, e, c)), c = null;
    }, c.ontimeout = function() {
      let d = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const p = e.transitional || Je;
      e.timeoutErrorMessage && (d = e.timeoutErrorMessage), r(new m(
        d,
        p.clarifyTimeoutError ? m.ETIMEDOUT : m.ECONNABORTED,
        e,
        c
      )), c = null;
    }, O.isStandardBrowserEnv) {
      const E = (e.withCredentials || un(l)) && e.xsrfCookieName && sn.read(e.xsrfCookieName);
      E && s.set(e.xsrfHeaderName, E);
    }
    o === void 0 && s.setContentType(null), "setRequestHeader" in c && a.forEach(s.toJSON(), function(d, p) {
      c.setRequestHeader(p, d);
    }), a.isUndefined(e.withCredentials) || (c.withCredentials = !!e.withCredentials), i && i !== "json" && (c.responseType = e.responseType), typeof e.onDownloadProgress == "function" && c.addEventListener("progress", be(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && c.upload && c.upload.addEventListener("progress", be(e.onUploadProgress)), (e.cancelToken || e.signal) && (u = (E) => {
      c && (r(!E || E.type ? new U(null, e, c) : E), c.abort(), c = null);
    }, e.cancelToken && e.cancelToken.subscribe(u), e.signal && (e.signal.aborted ? u() : e.signal.addEventListener("abort", u)));
    const _ = ln(l);
    if (_ && O.protocols.indexOf(_) === -1) {
      r(new m("Unsupported protocol " + _ + ":", m.ERR_BAD_REQUEST, e));
      return;
    }
    c.send(o || null);
  });
}, I = {
  http: Ht,
  xhr: hn
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
const pn = {
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
    throw new U(null, e);
}
function we(e) {
  return ee(e), e.headers = N.from(e.headers), e.data = Z.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), pn.getAdapter(e.adapter || le.adapter)(e).then(function(r) {
    return ee(e), r.data = Z.call(
      e,
      e.transformResponse,
      r
    ), r.headers = N.from(r.headers), r;
  }, function(r) {
    return $e(r) || (ee(e), r && r.response && (r.response.data = Z.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = N.from(r.response.headers))), Promise.reject(r);
  });
}
const Se = (e) => e instanceof N ? e.toJSON() : e;
function x(e, t) {
  t = t || {};
  const n = {};
  function r(c, l, h) {
    return a.isPlainObject(c) && a.isPlainObject(l) ? a.merge.call({ caseless: h }, c, l) : a.isPlainObject(l) ? a.merge({}, l) : a.isArray(l) ? l.slice() : l;
  }
  function o(c, l, h) {
    if (a.isUndefined(l)) {
      if (!a.isUndefined(c))
        return r(void 0, c, h);
    } else
      return r(c, l, h);
  }
  function s(c, l) {
    if (!a.isUndefined(l))
      return r(void 0, l);
  }
  function i(c, l) {
    if (a.isUndefined(l)) {
      if (!a.isUndefined(c))
        return r(void 0, c);
    } else
      return r(void 0, l);
  }
  function u(c, l, h) {
    if (h in t)
      return r(c, l);
    if (h in e)
      return r(void 0, c);
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
    validateStatus: u,
    headers: (c, l) => o(Se(c), Se(l), !0)
  };
  return a.forEach(Object.keys(Object.assign({}, e, t)), function(l) {
    const h = f[l] || o, _ = h(e[l], t[l], l);
    a.isUndefined(_) && h !== u || (n[l] = _);
  }), n;
}
const Ke = "1.4.0", fe = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  fe[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Re = {};
fe.transitional = function(t, n, r) {
  function o(s, i) {
    return "[Axios v" + Ke + "] Transitional option '" + s + "'" + i + (r ? ". " + r : "");
  }
  return (s, i, u) => {
    if (t === !1)
      throw new m(
        o(i, " has been removed" + (n ? " in " + n : "")),
        m.ERR_DEPRECATED
      );
    return n && !Re[i] && (Re[i] = !0, console.warn(
      o(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(s, i, u) : !0;
  };
};
function mn(e, t, n) {
  if (typeof e != "object")
    throw new m("options must be an object", m.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const s = r[o], i = t[s];
    if (i) {
      const u = e[s], f = u === void 0 || i(u, s, e);
      if (f !== !0)
        throw new m("option " + s + " must be " + f, m.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new m("Unknown option " + s, m.ERR_BAD_OPTION);
  }
}
const oe = {
  assertOptions: mn,
  validators: fe
}, g = oe.validators;
class z {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new Ee(),
      response: new Ee()
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
    r !== void 0 && oe.assertOptions(r, {
      silentJSONParsing: g.transitional(g.boolean),
      forcedJSONParsing: g.transitional(g.boolean),
      clarifyTimeoutError: g.transitional(g.boolean)
    }, !1), o != null && (a.isFunction(o) ? n.paramsSerializer = {
      serialize: o
    } : oe.assertOptions(o, {
      encode: g.function,
      serialize: g.function
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
    ), n.headers = N.concat(i, s);
    const u = [];
    let f = !0;
    this.interceptors.request.forEach(function(p) {
      typeof p.runWhen == "function" && p.runWhen(n) === !1 || (f = f && p.synchronous, u.unshift(p.fulfilled, p.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function(p) {
      c.push(p.fulfilled, p.rejected);
    });
    let l, h = 0, _;
    if (!f) {
      const d = [we.bind(this), void 0];
      for (d.unshift.apply(d, u), d.push.apply(d, c), _ = d.length, l = Promise.resolve(n); h < _; )
        l = l.then(d[h++], d[h++]);
      return l;
    }
    _ = u.length;
    let E = n;
    for (h = 0; h < _; ) {
      const d = u[h++], p = u[h++];
      try {
        E = d(E);
      } catch (T) {
        p.call(this, T);
        break;
      }
    }
    try {
      l = we.call(this, E);
    } catch (d) {
      return Promise.reject(d);
    }
    for (h = 0, _ = c.length; h < _; )
      l = l.then(c[h++], c[h++]);
    return l;
  }
  getUri(t) {
    t = x(this.defaults, t);
    const n = We(t.baseURL, t.url);
    return ze(n, t.params, t.paramsSerializer);
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
    return function(s, i, u) {
      return this.request(x(u || {}, {
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
class de {
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
      const i = new Promise((u) => {
        r.subscribe(u), s = u;
      }).then(o);
      return i.cancel = function() {
        r.unsubscribe(s);
      }, i;
    }, t(function(s, i, u) {
      r.reason || (r.reason = new U(s, i, u), n(r.reason));
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
      token: new de(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
}
const _n = de;
function En(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function yn(e) {
  return a.isObject(e) && e.isAxiosError === !0;
}
const se = {
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
Object.entries(se).forEach(([e, t]) => {
  se[t] = e;
});
const bn = se;
function Ge(e) {
  const t = new k(e), n = Fe(k.prototype.request, t);
  return a.extend(n, k.prototype, t, { allOwnKeys: !0 }), a.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(o) {
    return Ge(x(e, o));
  }, n;
}
const b = Ge(le);
b.Axios = k;
b.CanceledError = U;
b.CancelToken = _n;
b.isCancel = $e;
b.VERSION = Ke;
b.toFormData = K;
b.AxiosError = m;
b.Cancel = b.CanceledError;
b.all = function(t) {
  return Promise.all(t);
};
b.spread = En;
b.isAxiosError = yn;
b.mergeConfig = x;
b.AxiosHeaders = N;
b.formToJSON = (e) => Ve(a.isHTMLForm(e) ? new FormData(e) : e);
b.HttpStatusCode = bn;
b.default = b;
const wn = b;
process.env.CLIENT_URL;
process.env.SERVER_PREFIX;
process.env.SERVER_PORT;
process.env.CODE_COMPILER_API_URL;
const Sn = process.env.SERVER_URL ?? "http://localhost:6868", Un = wn.create({
  baseURL: Sn,
  withCredentials: !0
}), Rn = {
  EDITOR_THEME: "EDITOR_THEME",
  EDITOR_CONTENT_DATA: "EDITOR_CONTENT_DATA"
}, Bn = {
  MAIN: "/",
  EDITOR: "/edit"
}, jn = () => {
  const [e, t] = Ce([]);
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
}, Hn = (e = !1) => {
  const [t, n] = Ce(e);
  return {
    off: () => n(!1),
    on: () => n(!0),
    toggle: () => n(!t),
    val: t
  };
}, In = (e, t) => {
  const n = et();
  return (...r) => {
    n.current && clearTimeout(n.current), n.current = setTimeout(() => {
      e(...r);
    }, t);
  };
}, kn = () => () => {
  if (!document.fullscreenElement)
    return document.documentElement.requestFullscreen();
  document.exitFullscreen && document.exitFullscreen();
}, vn = ({ when: e, children: t }) => e ? t : null;
var w;
w = { __e: function(e, t, n, r) {
  for (var o, s, i; t = t.__; )
    if ((o = t.__c) && !o.__)
      try {
        if ((s = o.constructor) && s.getDerivedStateFromError != null && (o.setState(s.getDerivedStateFromError(e)), i = o.__d), o.componentDidCatch != null && (o.componentDidCatch(e, r || {}), i = o.__d), i)
          return o.__E = o;
      } catch (u) {
        e = u;
      }
  throw e;
} }, typeof Promise == "function" && Promise.prototype.then.bind(Promise.resolve());
var J, y, te, Oe, ie = 0, Xe = [], v = [], Ae = w.__b, Te = w.__r, Ne = w.diffed, ge = w.__c, Pe = w.unmount;
function Qe(e, t) {
  w.__h && w.__h(y, e, ie || t), ie = 0;
  var n = y.__H || (y.__H = { __: [], __h: [] });
  return e >= n.__.length && n.__.push({ __V: v }), n.__[e];
}
function On(e) {
  return ie = 1, An(Ye, e);
}
function An(e, t, n) {
  var r = Qe(J++, 2);
  if (r.t = e, !r.__c && (r.__ = [n ? n(t) : Ye(void 0, t), function(u) {
    var f = r.__N ? r.__N[0] : r.__[0], c = r.t(f, u);
    f !== c && (r.__N = [c, r.__[1]], r.__c.setState({}));
  }], r.__c = y, !y.u)) {
    var o = function(u, f, c) {
      if (!r.__c.__H)
        return !0;
      var l = r.__c.__H.__.filter(function(_) {
        return _.__c;
      });
      if (l.every(function(_) {
        return !_.__N;
      }))
        return !s || s.call(this, u, f, c);
      var h = !1;
      return l.forEach(function(_) {
        if (_.__N) {
          var E = _.__[0];
          _.__ = _.__N, _.__N = void 0, E !== _.__[0] && (h = !0);
        }
      }), !(!h && r.__c.props === u) && (!s || s.call(this, u, f, c));
    };
    y.u = !0;
    var s = y.shouldComponentUpdate, i = y.componentWillUpdate;
    y.componentWillUpdate = function(u, f, c) {
      if (this.__e) {
        var l = s;
        s = void 0, o(u, f, c), s = l;
      }
      i && i.call(this, u, f, c);
    }, y.shouldComponentUpdate = o;
  }
  return r.__N || r.__;
}
function Tn(e) {
  var t = Qe(J++, 10), n = On();
  return t.__ = e, y.componentDidCatch || (y.componentDidCatch = function(r, o) {
    t.__ && t.__(r, o), n[1](r);
  }), [n[0], function() {
    n[1](void 0);
  }];
}
function Nn() {
  for (var e; e = Xe.shift(); )
    if (e.__P && e.__H)
      try {
        e.__H.__h.forEach(M), e.__H.__h.forEach(ae), e.__H.__h = [];
      } catch (t) {
        e.__H.__h = [], w.__e(t, e.__v);
      }
}
w.__b = function(e) {
  y = null, Ae && Ae(e);
}, w.__r = function(e) {
  Te && Te(e), J = 0;
  var t = (y = e.__c).__H;
  t && (te === y ? (t.__h = [], y.__h = [], t.__.forEach(function(n) {
    n.__N && (n.__ = n.__N), n.__V = v, n.__N = n.i = void 0;
  })) : (t.__h.forEach(M), t.__h.forEach(ae), t.__h = [], J = 0)), te = y;
}, w.diffed = function(e) {
  Ne && Ne(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (Xe.push(t) !== 1 && Oe === w.requestAnimationFrame || ((Oe = w.requestAnimationFrame) || gn)(Nn)), t.__H.__.forEach(function(n) {
    n.i && (n.__H = n.i), n.__V !== v && (n.__ = n.__V), n.i = void 0, n.__V = v;
  })), te = y = null;
}, w.__c = function(e, t) {
  t.some(function(n) {
    try {
      n.__h.forEach(M), n.__h = n.__h.filter(function(r) {
        return !r.__ || ae(r);
      });
    } catch (r) {
      t.some(function(o) {
        o.__h && (o.__h = []);
      }), t = [], w.__e(r, n.__v);
    }
  }), ge && ge(e, t);
}, w.unmount = function(e) {
  Pe && Pe(e);
  var t, n = e.__c;
  n && n.__H && (n.__H.__.forEach(function(r) {
    try {
      M(r);
    } catch (o) {
      t = o;
    }
  }), n.__H = void 0, t && w.__e(t, n.__v));
};
var xe = typeof requestAnimationFrame == "function";
function gn(e) {
  var t, n = function() {
    clearTimeout(r), xe && cancelAnimationFrame(t), setTimeout(e);
  }, r = setTimeout(n, 100);
  xe && (t = requestAnimationFrame(n));
}
function M(e) {
  var t = y, n = e.__c;
  typeof n == "function" && (e.__c = void 0, n()), y = t;
}
function ae(e) {
  var t = y;
  e.__c = e.__(), y = t;
}
function Ye(e, t) {
  return typeof t == "function" ? t(e) : t;
}
const Pn = ({ errorInfo: e }) => /* @__PURE__ */ tt("div", { children: [
  "Custom Error Boundary. ",
  /* @__PURE__ */ q("br", {})
] }), xn = ({ children: e }) => {
  const [t] = Tn();
  return console.error(t), t ? /* @__PURE__ */ q(Pn, { errorInfo: t }) : /* @__PURE__ */ q(nt, { children: e });
}, Mn = ({ children: e }) => /* @__PURE__ */ q(xn, { children: e }), qn = (e) => typeof e == "object" && e !== null, Cn = (e) => typeof e == "string", zn = (e) => typeof e == "function";
class Jn {
  get(t, n) {
    const r = localStorage.getItem(t);
    return r ? Fn(r) ? JSON.parse(r) : r : n;
  }
  set(t, n) {
    if (t in Rn) {
      if (Cn(n))
        return localStorage.setItem(t, n);
      localStorage.setItem(t, JSON.stringify(n));
    }
  }
}
const Fn = (e) => {
  try {
    JSON.parse(e);
  } catch {
    return !1;
  }
  return !0;
};
export {
  vn as Display,
  xn as ErrorBoundary,
  Rn as LocalStorage,
  Jn as LocalStorageClient,
  Mn as Page,
  Bn as RoutePaths,
  Un as httpService,
  zn as isFunction,
  qn as isObject,
  Cn as isString,
  jn as useAltKeyDown,
  Hn as useBooleanState,
  In as useDebounce,
  kn as useFullScreen
};
