import * as Ae from "react";
import tt, { useState as kt, useRef as Xe, useEffect as Dt, createContext as ln, useMemo as fn, useContext as rt, useCallback as dn, useLayoutEffect as pn, useDebugValue as Vt, createElement as hn } from "react";
import { jsxs as Ar, jsx as ie, Fragment as Cr } from "react/jsx-runtime";
import { createPortal as mn } from "react-dom";
function Rr(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: yn } = Object.prototype, { getPrototypeOf: It } = Object, nt = ((e) => (t) => {
  const r = yn.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), me = (e) => (e = e.toLowerCase(), (t) => nt(t) === e), ot = (e) => (t) => typeof t === e, { isArray: Oe } = Array, $e = ot("undefined");
function gn(e) {
  return e !== null && !$e(e) && e.constructor !== null && !$e(e.constructor) && ue(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Tr = me("ArrayBuffer");
function vn(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Tr(e.buffer), t;
}
const _n = ot("string"), ue = ot("function"), Or = ot("number"), st = (e) => e !== null && typeof e == "object", En = (e) => e === !0 || e === !1, He = (e) => {
  if (nt(e) !== "object")
    return !1;
  const t = It(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, bn = me("Date"), Sn = me("File"), wn = me("Blob"), An = me("FileList"), Cn = (e) => st(e) && ue(e.pipe), Rn = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || ue(e.append) && ((t = nt(e)) === "formdata" || // detect form-data instance
  t === "object" && ue(e.toString) && e.toString() === "[object FormData]"));
}, Tn = me("URLSearchParams"), On = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Me(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, o;
  if (typeof e != "object" && (e = [e]), Oe(e))
    for (n = 0, o = e.length; n < o; n++)
      t.call(null, e[n], n, e);
  else {
    const s = r ? Object.getOwnPropertyNames(e) : Object.keys(e), i = s.length;
    let a;
    for (n = 0; n < i; n++)
      a = s[n], t.call(null, e[a], a, e);
  }
}
function Pr(e, t) {
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length, o;
  for (; n-- > 0; )
    if (o = r[n], t === o.toLowerCase())
      return o;
  return null;
}
const xr = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), Nr = (e) => !$e(e) && e !== xr;
function vt() {
  const { caseless: e } = Nr(this) && this || {}, t = {}, r = (n, o) => {
    const s = e && Pr(t, o) || o;
    He(t[s]) && He(n) ? t[s] = vt(t[s], n) : He(n) ? t[s] = vt({}, n) : Oe(n) ? t[s] = n.slice() : t[s] = n;
  };
  for (let n = 0, o = arguments.length; n < o; n++)
    arguments[n] && Me(arguments[n], r);
  return t;
}
const Pn = (e, t, r, { allOwnKeys: n } = {}) => (Me(t, (o, s) => {
  r && ue(o) ? e[s] = Rr(o, r) : e[s] = o;
}, { allOwnKeys: n }), e), xn = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Nn = (e, t, r, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, kn = (e, t, r, n) => {
  let o, s, i;
  const a = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (o = Object.getOwnPropertyNames(e), s = o.length; s-- > 0; )
      i = o[s], (!n || n(i, e, t)) && !a[i] && (t[i] = e[i], a[i] = !0);
    e = r !== !1 && It(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, Dn = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, In = (e) => {
  if (!e)
    return null;
  if (Oe(e))
    return e;
  let t = e.length;
  if (!Or(t))
    return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, $n = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && It(Uint8Array)), Fn = (e, t) => {
  const n = (e && e[Symbol.iterator]).call(e);
  let o;
  for (; (o = n.next()) && !o.done; ) {
    const s = o.value;
    t.call(e, s[0], s[1]);
  }
}, Mn = (e, t) => {
  let r;
  const n = [];
  for (; (r = e.exec(t)) !== null; )
    n.push(r);
  return n;
}, Ln = me("HTMLFormElement"), jn = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, o) {
    return n.toUpperCase() + o;
  }
), Yt = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), Un = me("RegExp"), kr = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  Me(r, (o, s) => {
    t(o, s, e) !== !1 && (n[s] = o);
  }), Object.defineProperties(e, n);
}, Bn = (e) => {
  kr(e, (t, r) => {
    if (ue(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = e[r];
    if (ue(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, zn = (e, t) => {
  const r = {}, n = (o) => {
    o.forEach((s) => {
      r[s] = !0;
    });
  };
  return Oe(e) ? n(e) : n(String(e).split(t)), r;
}, Hn = () => {
}, Vn = (e, t) => (e = +e, Number.isFinite(e) ? e : t), ft = "abcdefghijklmnopqrstuvwxyz", qt = "0123456789", Dr = {
  DIGIT: qt,
  ALPHA: ft,
  ALPHA_DIGIT: ft + ft.toUpperCase() + qt
}, Yn = (e = 16, t = Dr.ALPHA_DIGIT) => {
  let r = "";
  const { length: n } = t;
  for (; e--; )
    r += t[Math.random() * n | 0];
  return r;
};
function qn(e) {
  return !!(e && ue(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const Wn = (e) => {
  const t = new Array(10), r = (n, o) => {
    if (st(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        t[o] = n;
        const s = Oe(n) ? [] : {};
        return Me(n, (i, a) => {
          const l = r(i, o + 1);
          !$e(l) && (s[a] = l);
        }), t[o] = void 0, s;
      }
    }
    return n;
  };
  return r(e, 0);
}, Gn = me("AsyncFunction"), Jn = (e) => e && (st(e) || ue(e)) && ue(e.then) && ue(e.catch), d = {
  isArray: Oe,
  isArrayBuffer: Tr,
  isBuffer: gn,
  isFormData: Rn,
  isArrayBufferView: vn,
  isString: _n,
  isNumber: Or,
  isBoolean: En,
  isObject: st,
  isPlainObject: He,
  isUndefined: $e,
  isDate: bn,
  isFile: Sn,
  isBlob: wn,
  isRegExp: Un,
  isFunction: ue,
  isStream: Cn,
  isURLSearchParams: Tn,
  isTypedArray: $n,
  isFileList: An,
  forEach: Me,
  merge: vt,
  extend: Pn,
  trim: On,
  stripBOM: xn,
  inherits: Nn,
  toFlatObject: kn,
  kindOf: nt,
  kindOfTest: me,
  endsWith: Dn,
  toArray: In,
  forEachEntry: Fn,
  matchAll: Mn,
  isHTMLForm: Ln,
  hasOwnProperty: Yt,
  hasOwnProp: Yt,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: kr,
  freezeMethods: Bn,
  toObjectSet: zn,
  toCamelCase: jn,
  noop: Hn,
  toFiniteNumber: Vn,
  findKey: Pr,
  global: xr,
  isContextDefined: Nr,
  ALPHABET: Dr,
  generateString: Yn,
  isSpecCompliantForm: qn,
  toJSONObject: Wn,
  isAsyncFn: Gn,
  isThenable: Jn
};
function M(e, t, r, n, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), n && (this.request = n), o && (this.response = o);
}
d.inherits(M, Error, {
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
      config: d.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const Ir = M.prototype, $r = {};
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
  $r[e] = { value: e };
});
Object.defineProperties(M, $r);
Object.defineProperty(Ir, "isAxiosError", { value: !0 });
M.from = (e, t, r, n, o, s) => {
  const i = Object.create(Ir);
  return d.toFlatObject(e, i, function(l) {
    return l !== Error.prototype;
  }, (a) => a !== "isAxiosError"), M.call(i, e.message, t, r, n, o), i.cause = e, i.name = e.name, s && Object.assign(i, s), i;
};
const Xn = null;
function _t(e) {
  return d.isPlainObject(e) || d.isArray(e);
}
function Fr(e) {
  return d.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Wt(e, t, r) {
  return e ? e.concat(t).map(function(o, s) {
    return o = Fr(o), !r && s ? "[" + o + "]" : o;
  }).join(r ? "." : "") : t;
}
function Kn(e) {
  return d.isArray(e) && !e.some(_t);
}
const Zn = d.toFlatObject(d, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function it(e, t, r) {
  if (!d.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = d.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(v, f) {
    return !d.isUndefined(f[v]);
  });
  const n = r.metaTokens, o = r.visitor || p, s = r.dots, i = r.indexes, l = (r.Blob || typeof Blob < "u" && Blob) && d.isSpecCompliantForm(t);
  if (!d.isFunction(o))
    throw new TypeError("visitor must be a function");
  function c(h) {
    if (h === null)
      return "";
    if (d.isDate(h))
      return h.toISOString();
    if (!l && d.isBlob(h))
      throw new M("Blob is not supported. Use a Buffer instead.");
    return d.isArrayBuffer(h) || d.isTypedArray(h) ? l && typeof Blob == "function" ? new Blob([h]) : Buffer.from(h) : h;
  }
  function p(h, v, f) {
    let T = h;
    if (h && !f && typeof h == "object") {
      if (d.endsWith(v, "{}"))
        v = n ? v : v.slice(0, -2), h = JSON.stringify(h);
      else if (d.isArray(h) && Kn(h) || (d.isFileList(h) || d.endsWith(v, "[]")) && (T = d.toArray(h)))
        return v = Fr(v), T.forEach(function(P, O) {
          !(d.isUndefined(P) || P === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? Wt([v], O, s) : i === null ? v : v + "[]",
            c(P)
          );
        }), !1;
    }
    return _t(h) ? !0 : (t.append(Wt(f, v, s), c(h)), !1);
  }
  const g = [], S = Object.assign(Zn, {
    defaultVisitor: p,
    convertValue: c,
    isVisitable: _t
  });
  function A(h, v) {
    if (!d.isUndefined(h)) {
      if (g.indexOf(h) !== -1)
        throw Error("Circular reference detected in " + v.join("."));
      g.push(h), d.forEach(h, function(T, R) {
        (!(d.isUndefined(T) || T === null) && o.call(
          t,
          T,
          d.isString(R) ? R.trim() : R,
          v,
          S
        )) === !0 && A(T, v ? v.concat(R) : [R]);
      }), g.pop();
    }
  }
  if (!d.isObject(e))
    throw new TypeError("data must be an object");
  return A(e), t;
}
function Gt(e) {
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
function $t(e, t) {
  this._pairs = [], e && it(e, this, t);
}
const Mr = $t.prototype;
Mr.append = function(t, r) {
  this._pairs.push([t, r]);
};
Mr.toString = function(t) {
  const r = t ? function(n) {
    return t.call(this, n, Gt);
  } : Gt;
  return this._pairs.map(function(o) {
    return r(o[0]) + "=" + r(o[1]);
  }, "").join("&");
};
function Qn(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Lr(e, t, r) {
  if (!t)
    return e;
  const n = r && r.encode || Qn, o = r && r.serialize;
  let s;
  if (o ? s = o(t, r) : s = d.isURLSearchParams(t) ? t.toString() : new $t(t, r).toString(n), s) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return e;
}
class eo {
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
    d.forEach(this.handlers, function(n) {
      n !== null && t(n);
    });
  }
}
const Jt = eo, jr = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, to = typeof URLSearchParams < "u" ? URLSearchParams : $t, ro = typeof FormData < "u" ? FormData : null, no = typeof Blob < "u" ? Blob : null, oo = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), so = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), he = {
  isBrowser: !0,
  classes: {
    URLSearchParams: to,
    FormData: ro,
    Blob: no
  },
  isStandardBrowserEnv: oo,
  isStandardBrowserWebWorkerEnv: so,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function io(e, t) {
  return it(e, new he.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, o, s) {
      return he.isNode && d.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function ao(e) {
  return d.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function co(e) {
  const t = {}, r = Object.keys(e);
  let n;
  const o = r.length;
  let s;
  for (n = 0; n < o; n++)
    s = r[n], t[s] = e[s];
  return t;
}
function Ur(e) {
  function t(r, n, o, s) {
    let i = r[s++];
    const a = Number.isFinite(+i), l = s >= r.length;
    return i = !i && d.isArray(o) ? o.length : i, l ? (d.hasOwnProp(o, i) ? o[i] = [o[i], n] : o[i] = n, !a) : ((!o[i] || !d.isObject(o[i])) && (o[i] = []), t(r, n, o[i], s) && d.isArray(o[i]) && (o[i] = co(o[i])), !a);
  }
  if (d.isFormData(e) && d.isFunction(e.entries)) {
    const r = {};
    return d.forEachEntry(e, (n, o) => {
      t(ao(n), o, r, 0);
    }), r;
  }
  return null;
}
const uo = {
  "Content-Type": void 0
};
function lo(e, t, r) {
  if (d.isString(e))
    try {
      return (t || JSON.parse)(e), d.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(e);
}
const at = {
  transitional: jr,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, r) {
    const n = r.getContentType() || "", o = n.indexOf("application/json") > -1, s = d.isObject(t);
    if (s && d.isHTMLForm(t) && (t = new FormData(t)), d.isFormData(t))
      return o && o ? JSON.stringify(Ur(t)) : t;
    if (d.isArrayBuffer(t) || d.isBuffer(t) || d.isStream(t) || d.isFile(t) || d.isBlob(t))
      return t;
    if (d.isArrayBufferView(t))
      return t.buffer;
    if (d.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let a;
    if (s) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return io(t, this.formSerializer).toString();
      if ((a = d.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const l = this.env && this.env.FormData;
        return it(
          a ? { "files[]": t } : t,
          l && new l(),
          this.formSerializer
        );
      }
    }
    return s || o ? (r.setContentType("application/json", !1), lo(t)) : t;
  }],
  transformResponse: [function(t) {
    const r = this.transitional || at.transitional, n = r && r.forcedJSONParsing, o = this.responseType === "json";
    if (t && d.isString(t) && (n && !this.responseType || o)) {
      const i = !(r && r.silentJSONParsing) && o;
      try {
        return JSON.parse(t);
      } catch (a) {
        if (i)
          throw a.name === "SyntaxError" ? M.from(a, M.ERR_BAD_RESPONSE, this, null, this.response) : a;
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
    FormData: he.classes.FormData,
    Blob: he.classes.Blob
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
d.forEach(["delete", "get", "head"], function(t) {
  at.headers[t] = {};
});
d.forEach(["post", "put", "patch"], function(t) {
  at.headers[t] = d.merge(uo);
});
const Ft = at, fo = d.toObjectSet([
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
]), po = (e) => {
  const t = {};
  let r, n, o;
  return e && e.split(`
`).forEach(function(i) {
    o = i.indexOf(":"), r = i.substring(0, o).trim().toLowerCase(), n = i.substring(o + 1).trim(), !(!r || t[r] && fo[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n);
  }), t;
}, Xt = Symbol("internals");
function De(e) {
  return e && String(e).trim().toLowerCase();
}
function Ve(e) {
  return e === !1 || e == null ? e : d.isArray(e) ? e.map(Ve) : String(e);
}
function ho(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const mo = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function dt(e, t, r, n, o) {
  if (d.isFunction(n))
    return n.call(this, t, r);
  if (o && (t = r), !!d.isString(t)) {
    if (d.isString(n))
      return t.indexOf(n) !== -1;
    if (d.isRegExp(n))
      return n.test(t);
  }
}
function yo(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function go(e, t) {
  const r = d.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + r, {
      value: function(o, s, i) {
        return this[n].call(this, t, o, s, i);
      },
      configurable: !0
    });
  });
}
class ct {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    const o = this;
    function s(a, l, c) {
      const p = De(l);
      if (!p)
        throw new Error("header name must be a non-empty string");
      const g = d.findKey(o, p);
      (!g || o[g] === void 0 || c === !0 || c === void 0 && o[g] !== !1) && (o[g || l] = Ve(a));
    }
    const i = (a, l) => d.forEach(a, (c, p) => s(c, p, l));
    return d.isPlainObject(t) || t instanceof this.constructor ? i(t, r) : d.isString(t) && (t = t.trim()) && !mo(t) ? i(po(t), r) : t != null && s(r, t, n), this;
  }
  get(t, r) {
    if (t = De(t), t) {
      const n = d.findKey(this, t);
      if (n) {
        const o = this[n];
        if (!r)
          return o;
        if (r === !0)
          return ho(o);
        if (d.isFunction(r))
          return r.call(this, o, n);
        if (d.isRegExp(r))
          return r.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = De(t), t) {
      const n = d.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || dt(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let o = !1;
    function s(i) {
      if (i = De(i), i) {
        const a = d.findKey(n, i);
        a && (!r || dt(n, n[a], a, r)) && (delete n[a], o = !0);
      }
    }
    return d.isArray(t) ? t.forEach(s) : s(t), o;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length, o = !1;
    for (; n--; ) {
      const s = r[n];
      (!t || dt(this, this[s], s, t, !0)) && (delete this[s], o = !0);
    }
    return o;
  }
  normalize(t) {
    const r = this, n = {};
    return d.forEach(this, (o, s) => {
      const i = d.findKey(n, s);
      if (i) {
        r[i] = Ve(o), delete r[s];
        return;
      }
      const a = t ? yo(s) : String(s).trim();
      a !== s && delete r[s], r[a] = Ve(o), n[a] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = /* @__PURE__ */ Object.create(null);
    return d.forEach(this, (n, o) => {
      n != null && n !== !1 && (r[o] = t && d.isArray(n) ? n.join(", ") : n);
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
    const n = (this[Xt] = this[Xt] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function s(i) {
      const a = De(i);
      n[a] || (go(o, i), n[a] = !0);
    }
    return d.isArray(t) ? t.forEach(s) : s(t), this;
  }
}
ct.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
d.freezeMethods(ct.prototype);
d.freezeMethods(ct);
const _e = ct;
function pt(e, t) {
  const r = this || Ft, n = t || r, o = _e.from(n.headers);
  let s = n.data;
  return d.forEach(e, function(a) {
    s = a.call(r, s, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), s;
}
function Br(e) {
  return !!(e && e.__CANCEL__);
}
function Le(e, t, r) {
  M.call(this, e ?? "canceled", M.ERR_CANCELED, t, r), this.name = "CanceledError";
}
d.inherits(Le, M, {
  __CANCEL__: !0
});
function vo(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? e(r) : t(new M(
    "Request failed with status code " + r.status,
    [M.ERR_BAD_REQUEST, M.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
const _o = he.isStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  function() {
    return {
      write: function(r, n, o, s, i, a) {
        const l = [];
        l.push(r + "=" + encodeURIComponent(n)), d.isNumber(o) && l.push("expires=" + new Date(o).toGMTString()), d.isString(s) && l.push("path=" + s), d.isString(i) && l.push("domain=" + i), a === !0 && l.push("secure"), document.cookie = l.join("; ");
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
function Eo(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function bo(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function zr(e, t) {
  return e && !Eo(t) ? bo(e, t) : t;
}
const So = he.isStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = /(msie|trident)/i.test(navigator.userAgent), r = document.createElement("a");
    let n;
    function o(s) {
      let i = s;
      return t && (r.setAttribute("href", i), i = r.href), r.setAttribute("href", i), {
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
    return n = o(window.location.href), function(i) {
      const a = d.isString(i) ? o(i) : i;
      return a.protocol === n.protocol && a.host === n.host;
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
function wo(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Ao(e, t) {
  e = e || 10;
  const r = new Array(e), n = new Array(e);
  let o = 0, s = 0, i;
  return t = t !== void 0 ? t : 1e3, function(l) {
    const c = Date.now(), p = n[s];
    i || (i = c), r[o] = l, n[o] = c;
    let g = s, S = 0;
    for (; g !== o; )
      S += r[g++], g = g % e;
    if (o = (o + 1) % e, o === s && (s = (s + 1) % e), c - i < t)
      return;
    const A = p && c - p;
    return A ? Math.round(S * 1e3 / A) : void 0;
  };
}
function Kt(e, t) {
  let r = 0;
  const n = Ao(50, 250);
  return (o) => {
    const s = o.loaded, i = o.lengthComputable ? o.total : void 0, a = s - r, l = n(a), c = s <= i;
    r = s;
    const p = {
      loaded: s,
      total: i,
      progress: i ? s / i : void 0,
      bytes: a,
      rate: l || void 0,
      estimated: l && i && c ? (i - s) / l : void 0,
      event: o
    };
    p[t ? "download" : "upload"] = !0, e(p);
  };
}
const Co = typeof XMLHttpRequest < "u", Ro = Co && function(e) {
  return new Promise(function(r, n) {
    let o = e.data;
    const s = _e.from(e.headers).normalize(), i = e.responseType;
    let a;
    function l() {
      e.cancelToken && e.cancelToken.unsubscribe(a), e.signal && e.signal.removeEventListener("abort", a);
    }
    d.isFormData(o) && (he.isStandardBrowserEnv || he.isStandardBrowserWebWorkerEnv ? s.setContentType(!1) : s.setContentType("multipart/form-data;", !1));
    let c = new XMLHttpRequest();
    if (e.auth) {
      const A = e.auth.username || "", h = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      s.set("Authorization", "Basic " + btoa(A + ":" + h));
    }
    const p = zr(e.baseURL, e.url);
    c.open(e.method.toUpperCase(), Lr(p, e.params, e.paramsSerializer), !0), c.timeout = e.timeout;
    function g() {
      if (!c)
        return;
      const A = _e.from(
        "getAllResponseHeaders" in c && c.getAllResponseHeaders()
      ), v = {
        data: !i || i === "text" || i === "json" ? c.responseText : c.response,
        status: c.status,
        statusText: c.statusText,
        headers: A,
        config: e,
        request: c
      };
      vo(function(T) {
        r(T), l();
      }, function(T) {
        n(T), l();
      }, v), c = null;
    }
    if ("onloadend" in c ? c.onloadend = g : c.onreadystatechange = function() {
      !c || c.readyState !== 4 || c.status === 0 && !(c.responseURL && c.responseURL.indexOf("file:") === 0) || setTimeout(g);
    }, c.onabort = function() {
      c && (n(new M("Request aborted", M.ECONNABORTED, e, c)), c = null);
    }, c.onerror = function() {
      n(new M("Network Error", M.ERR_NETWORK, e, c)), c = null;
    }, c.ontimeout = function() {
      let h = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const v = e.transitional || jr;
      e.timeoutErrorMessage && (h = e.timeoutErrorMessage), n(new M(
        h,
        v.clarifyTimeoutError ? M.ETIMEDOUT : M.ECONNABORTED,
        e,
        c
      )), c = null;
    }, he.isStandardBrowserEnv) {
      const A = (e.withCredentials || So(p)) && e.xsrfCookieName && _o.read(e.xsrfCookieName);
      A && s.set(e.xsrfHeaderName, A);
    }
    o === void 0 && s.setContentType(null), "setRequestHeader" in c && d.forEach(s.toJSON(), function(h, v) {
      c.setRequestHeader(v, h);
    }), d.isUndefined(e.withCredentials) || (c.withCredentials = !!e.withCredentials), i && i !== "json" && (c.responseType = e.responseType), typeof e.onDownloadProgress == "function" && c.addEventListener("progress", Kt(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && c.upload && c.upload.addEventListener("progress", Kt(e.onUploadProgress)), (e.cancelToken || e.signal) && (a = (A) => {
      c && (n(!A || A.type ? new Le(null, e, c) : A), c.abort(), c = null);
    }, e.cancelToken && e.cancelToken.subscribe(a), e.signal && (e.signal.aborted ? a() : e.signal.addEventListener("abort", a)));
    const S = wo(p);
    if (S && he.protocols.indexOf(S) === -1) {
      n(new M("Unsupported protocol " + S + ":", M.ERR_BAD_REQUEST, e));
      return;
    }
    c.send(o || null);
  });
}, Ye = {
  http: Xn,
  xhr: Ro
};
d.forEach(Ye, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const To = {
  getAdapter: (e) => {
    e = d.isArray(e) ? e : [e];
    const { length: t } = e;
    let r, n;
    for (let o = 0; o < t && (r = e[o], !(n = d.isString(r) ? Ye[r.toLowerCase()] : r)); o++)
      ;
    if (!n)
      throw n === !1 ? new M(
        `Adapter ${r} is not supported by the environment`,
        "ERR_NOT_SUPPORT"
      ) : new Error(
        d.hasOwnProp(Ye, r) ? `Adapter '${r}' is not available in the build` : `Unknown adapter '${r}'`
      );
    if (!d.isFunction(n))
      throw new TypeError("adapter is not a function");
    return n;
  },
  adapters: Ye
};
function ht(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Le(null, e);
}
function Zt(e) {
  return ht(e), e.headers = _e.from(e.headers), e.data = pt.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), To.getAdapter(e.adapter || Ft.adapter)(e).then(function(n) {
    return ht(e), n.data = pt.call(
      e,
      e.transformResponse,
      n
    ), n.headers = _e.from(n.headers), n;
  }, function(n) {
    return Br(n) || (ht(e), n && n.response && (n.response.data = pt.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = _e.from(n.response.headers))), Promise.reject(n);
  });
}
const Qt = (e) => e instanceof _e ? e.toJSON() : e;
function Ce(e, t) {
  t = t || {};
  const r = {};
  function n(c, p, g) {
    return d.isPlainObject(c) && d.isPlainObject(p) ? d.merge.call({ caseless: g }, c, p) : d.isPlainObject(p) ? d.merge({}, p) : d.isArray(p) ? p.slice() : p;
  }
  function o(c, p, g) {
    if (d.isUndefined(p)) {
      if (!d.isUndefined(c))
        return n(void 0, c, g);
    } else
      return n(c, p, g);
  }
  function s(c, p) {
    if (!d.isUndefined(p))
      return n(void 0, p);
  }
  function i(c, p) {
    if (d.isUndefined(p)) {
      if (!d.isUndefined(c))
        return n(void 0, c);
    } else
      return n(void 0, p);
  }
  function a(c, p, g) {
    if (g in t)
      return n(c, p);
    if (g in e)
      return n(void 0, c);
  }
  const l = {
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
    validateStatus: a,
    headers: (c, p) => o(Qt(c), Qt(p), !0)
  };
  return d.forEach(Object.keys(Object.assign({}, e, t)), function(p) {
    const g = l[p] || o, S = g(e[p], t[p], p);
    d.isUndefined(S) && g !== a || (r[p] = S);
  }), r;
}
const Hr = "1.4.0", Mt = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Mt[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const er = {};
Mt.transitional = function(t, r, n) {
  function o(s, i) {
    return "[Axios v" + Hr + "] Transitional option '" + s + "'" + i + (n ? ". " + n : "");
  }
  return (s, i, a) => {
    if (t === !1)
      throw new M(
        o(i, " has been removed" + (r ? " in " + r : "")),
        M.ERR_DEPRECATED
      );
    return r && !er[i] && (er[i] = !0, console.warn(
      o(
        i,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(s, i, a) : !0;
  };
};
function Oo(e, t, r) {
  if (typeof e != "object")
    throw new M("options must be an object", M.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let o = n.length;
  for (; o-- > 0; ) {
    const s = n[o], i = t[s];
    if (i) {
      const a = e[s], l = a === void 0 || i(a, s, e);
      if (l !== !0)
        throw new M("option " + s + " must be " + l, M.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new M("Unknown option " + s, M.ERR_BAD_OPTION);
  }
}
const Et = {
  assertOptions: Oo,
  validators: Mt
}, be = Et.validators;
class Ke {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new Jt(),
      response: new Jt()
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
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = Ce(this.defaults, r);
    const { transitional: n, paramsSerializer: o, headers: s } = r;
    n !== void 0 && Et.assertOptions(n, {
      silentJSONParsing: be.transitional(be.boolean),
      forcedJSONParsing: be.transitional(be.boolean),
      clarifyTimeoutError: be.transitional(be.boolean)
    }, !1), o != null && (d.isFunction(o) ? r.paramsSerializer = {
      serialize: o
    } : Et.assertOptions(o, {
      encode: be.function,
      serialize: be.function
    }, !0)), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let i;
    i = s && d.merge(
      s.common,
      s[r.method]
    ), i && d.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (h) => {
        delete s[h];
      }
    ), r.headers = _e.concat(i, s);
    const a = [];
    let l = !0;
    this.interceptors.request.forEach(function(v) {
      typeof v.runWhen == "function" && v.runWhen(r) === !1 || (l = l && v.synchronous, a.unshift(v.fulfilled, v.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function(v) {
      c.push(v.fulfilled, v.rejected);
    });
    let p, g = 0, S;
    if (!l) {
      const h = [Zt.bind(this), void 0];
      for (h.unshift.apply(h, a), h.push.apply(h, c), S = h.length, p = Promise.resolve(r); g < S; )
        p = p.then(h[g++], h[g++]);
      return p;
    }
    S = a.length;
    let A = r;
    for (g = 0; g < S; ) {
      const h = a[g++], v = a[g++];
      try {
        A = h(A);
      } catch (f) {
        v.call(this, f);
        break;
      }
    }
    try {
      p = Zt.call(this, A);
    } catch (h) {
      return Promise.reject(h);
    }
    for (g = 0, S = c.length; g < S; )
      p = p.then(c[g++], c[g++]);
    return p;
  }
  getUri(t) {
    t = Ce(this.defaults, t);
    const r = zr(t.baseURL, t.url);
    return Lr(r, t.params, t.paramsSerializer);
  }
}
d.forEach(["delete", "get", "head", "options"], function(t) {
  Ke.prototype[t] = function(r, n) {
    return this.request(Ce(n || {}, {
      method: t,
      url: r,
      data: (n || {}).data
    }));
  };
});
d.forEach(["post", "put", "patch"], function(t) {
  function r(n) {
    return function(s, i, a) {
      return this.request(Ce(a || {}, {
        method: t,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: s,
        data: i
      }));
    };
  }
  Ke.prototype[t] = r(), Ke.prototype[t + "Form"] = r(!0);
});
const qe = Ke;
class Lt {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(s) {
      r = s;
    });
    const n = this;
    this.promise.then((o) => {
      if (!n._listeners)
        return;
      let s = n._listeners.length;
      for (; s-- > 0; )
        n._listeners[s](o);
      n._listeners = null;
    }), this.promise.then = (o) => {
      let s;
      const i = new Promise((a) => {
        n.subscribe(a), s = a;
      }).then(o);
      return i.cancel = function() {
        n.unsubscribe(s);
      }, i;
    }, t(function(s, i, a) {
      n.reason || (n.reason = new Le(s, i, a), r(n.reason));
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
      token: new Lt(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
}
const Po = Lt;
function xo(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function No(e) {
  return d.isObject(e) && e.isAxiosError === !0;
}
const bt = {
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
Object.entries(bt).forEach(([e, t]) => {
  bt[t] = e;
});
const ko = bt;
function Vr(e) {
  const t = new qe(e), r = Rr(qe.prototype.request, t);
  return d.extend(r, qe.prototype, t, { allOwnKeys: !0 }), d.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(o) {
    return Vr(Ce(e, o));
  }, r;
}
const W = Vr(Ft);
W.Axios = qe;
W.CanceledError = Le;
W.CancelToken = Po;
W.isCancel = Br;
W.VERSION = Hr;
W.toFormData = it;
W.AxiosError = M;
W.Cancel = W.CanceledError;
W.all = function(t) {
  return Promise.all(t);
};
W.spread = xo;
W.isAxiosError = No;
W.mergeConfig = Ce;
W.AxiosHeaders = _e;
W.formToJSON = (e) => Ur(d.isHTMLForm(e) ? new FormData(e) : e);
W.HttpStatusCode = ko;
W.default = W;
const Do = W;
process.env.CLIENT_URL;
process.env.SERVER_PREFIX;
process.env.SERVER_PORT;
process.env.CODE_COMPILER_API_URL;
const Io = process.env.SERVER_URL ?? "http://localhost:6868", li = Do.create({
  baseURL: Io,
  withCredentials: !0
}), $o = {
  EDITOR_THEME: "EDITOR_THEME",
  EDITOR_CONTENT_DATA: "EDITOR_CONTENT_DATA",
  EDITOR_EXECUTE_MESSAGES: "EDITOR_EXECUTE_MESSAGES"
}, fi = {
  MAIN: "/",
  EDITOR: "/edit",
  ABOUT: "/about"
}, di = () => {
  const [e, t] = kt([]);
  return {
    on: (r) => {
      Object.entries(r).forEach(([n, o]) => {
        const s = (i) => {
          if (i.altKey && i.key === n.toLowerCase())
            return i.preventDefault(), o?.(), !1;
        };
        t([...e, s]), document.addEventListener("keydown", s);
      });
    },
    clear: () => {
      e.forEach((r) => {
        document.removeEventListener("keydown", r);
      });
    }
  };
}, Fo = (e = !1) => {
  const [t, r] = kt(e);
  return {
    off: () => r(!1),
    on: () => r(!0),
    toggle: () => r(!t),
    val: t
  };
}, pi = (e, t) => {
  const r = Xe();
  return (...n) => {
    r.current && clearTimeout(r.current), r.current = setTimeout(() => {
      e(...n);
    }, t);
  };
}, hi = () => () => {
  if (!document.fullscreenElement)
    return document.documentElement.requestFullscreen();
  document.exitFullscreen && document.exitFullscreen();
}, mi = () => {
  Dt(() => (document.body.style.overflow = "hidden", () => {
    document.body.style.overflow = "auto";
  }));
}, Yr = ({ when: e, children: t }) => e ? t : null;
var K;
K = { __e: function(e, t, r, n) {
  for (var o, s, i; t = t.__; )
    if ((o = t.__c) && !o.__)
      try {
        if ((s = o.constructor) && s.getDerivedStateFromError != null && (o.setState(s.getDerivedStateFromError(e)), i = o.__d), o.componentDidCatch != null && (o.componentDidCatch(e, n || {}), i = o.__d), i)
          return o.__E = o;
      } catch (a) {
        e = a;
      }
  throw e;
} }, typeof Promise == "function" && Promise.prototype.then.bind(Promise.resolve());
var Ze, V, mt, tr, St = 0, qr = [], We = [], rr = K.__b, nr = K.__r, or = K.diffed, sr = K.__c, ir = K.unmount;
function Wr(e, t) {
  K.__h && K.__h(V, e, St || t), St = 0;
  var r = V.__H || (V.__H = { __: [], __h: [] });
  return e >= r.__.length && r.__.push({ __V: We }), r.__[e];
}
function Mo(e) {
  return St = 1, Lo(Gr, e);
}
function Lo(e, t, r) {
  var n = Wr(Ze++, 2);
  if (n.t = e, !n.__c && (n.__ = [r ? r(t) : Gr(void 0, t), function(a) {
    var l = n.__N ? n.__N[0] : n.__[0], c = n.t(l, a);
    l !== c && (n.__N = [c, n.__[1]], n.__c.setState({}));
  }], n.__c = V, !V.u)) {
    var o = function(a, l, c) {
      if (!n.__c.__H)
        return !0;
      var p = n.__c.__H.__.filter(function(S) {
        return S.__c;
      });
      if (p.every(function(S) {
        return !S.__N;
      }))
        return !s || s.call(this, a, l, c);
      var g = !1;
      return p.forEach(function(S) {
        if (S.__N) {
          var A = S.__[0];
          S.__ = S.__N, S.__N = void 0, A !== S.__[0] && (g = !0);
        }
      }), !(!g && n.__c.props === a) && (!s || s.call(this, a, l, c));
    };
    V.u = !0;
    var s = V.shouldComponentUpdate, i = V.componentWillUpdate;
    V.componentWillUpdate = function(a, l, c) {
      if (this.__e) {
        var p = s;
        s = void 0, o(a, l, c), s = p;
      }
      i && i.call(this, a, l, c);
    }, V.shouldComponentUpdate = o;
  }
  return n.__N || n.__;
}
function jo(e) {
  var t = Wr(Ze++, 10), r = Mo();
  return t.__ = e, V.componentDidCatch || (V.componentDidCatch = function(n, o) {
    t.__ && t.__(n, o), r[1](n);
  }), [r[0], function() {
    r[1](void 0);
  }];
}
function Uo() {
  for (var e; e = qr.shift(); )
    if (e.__P && e.__H)
      try {
        e.__H.__h.forEach(Ge), e.__H.__h.forEach(wt), e.__H.__h = [];
      } catch (t) {
        e.__H.__h = [], K.__e(t, e.__v);
      }
}
K.__b = function(e) {
  V = null, rr && rr(e);
}, K.__r = function(e) {
  nr && nr(e), Ze = 0;
  var t = (V = e.__c).__H;
  t && (mt === V ? (t.__h = [], V.__h = [], t.__.forEach(function(r) {
    r.__N && (r.__ = r.__N), r.__V = We, r.__N = r.i = void 0;
  })) : (t.__h.forEach(Ge), t.__h.forEach(wt), t.__h = [], Ze = 0)), mt = V;
}, K.diffed = function(e) {
  or && or(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (qr.push(t) !== 1 && tr === K.requestAnimationFrame || ((tr = K.requestAnimationFrame) || Bo)(Uo)), t.__H.__.forEach(function(r) {
    r.i && (r.__H = r.i), r.__V !== We && (r.__ = r.__V), r.i = void 0, r.__V = We;
  })), mt = V = null;
}, K.__c = function(e, t) {
  t.some(function(r) {
    try {
      r.__h.forEach(Ge), r.__h = r.__h.filter(function(n) {
        return !n.__ || wt(n);
      });
    } catch (n) {
      t.some(function(o) {
        o.__h && (o.__h = []);
      }), t = [], K.__e(n, r.__v);
    }
  }), sr && sr(e, t);
}, K.unmount = function(e) {
  ir && ir(e);
  var t, r = e.__c;
  r && r.__H && (r.__H.__.forEach(function(n) {
    try {
      Ge(n);
    } catch (o) {
      t = o;
    }
  }), r.__H = void 0, t && K.__e(t, r.__v));
};
var ar = typeof requestAnimationFrame == "function";
function Bo(e) {
  var t, r = function() {
    clearTimeout(n), ar && cancelAnimationFrame(t), setTimeout(e);
  }, n = setTimeout(r, 100);
  ar && (t = requestAnimationFrame(r));
}
function Ge(e) {
  var t = V, r = e.__c;
  typeof r == "function" && (e.__c = void 0, r()), V = t;
}
function wt(e) {
  var t = V;
  e.__c = e.__(), V = t;
}
function Gr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
const zo = ({ errorInfo: e }) => /* @__PURE__ */ Ar("div", { children: [
  "Custom Error Boundary. ",
  /* @__PURE__ */ ie("br", {})
] }), Ho = ({ children: e }) => {
  const [t] = jo();
  return console.error(t), t ? /* @__PURE__ */ ie(zo, { errorInfo: t }) : /* @__PURE__ */ ie(Cr, { children: e });
}, yi = ({ children: e }) => /* @__PURE__ */ ie(Ho, { children: e }), Jr = ln({}), Vo = async () => Promise.all([
  import("./react-spring_web.modern-d55cb301.mjs"),
  import("./use-gesture-react.esm-862244eb.mjs")
]), Yo = ({ children: e }) => {
  const t = Xe(), r = Xe(), n = Fo(), o = async () => {
    const [i, a] = await Vo();
    t.current = i, r.current = a, n.on();
  };
  Dt(() => {
    o();
  }, []);
  const s = fn(() => ({
    Spring: t.current,
    Gesture: r.current,
    isLoaded: n.val
  }), [n.val]);
  return /* @__PURE__ */ ie(Jr.Provider, { value: s, children: /* @__PURE__ */ ie(Yr, { when: n.val, children: e }) });
}, qo = () => rt(Jr), gi = (e) => typeof e == "object" && e !== null, Wo = (e) => typeof e == "string", vi = (e) => typeof e == "function";
class _i {
  get(t, r) {
    const n = localStorage.getItem(t);
    return n ? Go(n) ? JSON.parse(n) : n : r;
  }
  set(t, r) {
    if (t in $o) {
      if (Wo(r))
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
const Go = (e) => {
  try {
    JSON.parse(e);
  } catch {
    return !1;
  }
  return !0;
};
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
function Jo() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Xo() {
  let [, e] = kt(/* @__PURE__ */ Object.create(null));
  return dn(() => {
    e(/* @__PURE__ */ Object.create(null));
  }, []);
}
var Ko = Jo() ? pn : Dt, Zo = ({
  children: e,
  type: t = "reach-portal",
  containerRef: r
}) => {
  let n = Ae.useRef(null), o = Ae.useRef(null), s = Xo();
  return Ae.useEffect(() => {
    r != null && (typeof r != "object" || !("current" in r) ? console.warn("@reach/portal: Invalid value passed to the `containerRef` of a `Portal`. The portal will be appended to the document body, but if you want to attach it to another DOM node you must pass a valid React ref object to `containerRef`.") : r.current == null && console.warn("@reach/portal: A ref was passed to the `containerRef` prop of a `Portal`, but no DOM node was attached to it. Be sure to pass the ref to a DOM component.\n\nIf you are forwarding the ref from another component, be sure to use the React.forwardRef API. See https://reactjs.org/docs/forwarding-refs.html."));
  }, [r]), Ko(() => {
    if (!n.current)
      return;
    let i = n.current.ownerDocument, a = r?.current || i.body;
    return o.current = i?.createElement(t), a.appendChild(o.current), s(), () => {
      o.current && a && a.removeChild(o.current);
    };
  }, [t, s, r]), o.current ? mn(e, o.current) : /* @__PURE__ */ Ae.createElement("span", {
    ref: n
  });
}, Xr = ({
  unstable_skipInitialRender: e,
  ...t
}) => {
  let [r, n] = Ae.useState(!1);
  return Ae.useEffect(() => {
    e && n(!0);
  }, [e]), e && !r ? null : /* @__PURE__ */ Ae.createElement(Zo, {
    ...t
  });
};
Xr.displayName = "Portal";
const Qo = () => ({
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
function es(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var At = { exports: {} }, L = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cr;
function ts() {
  if (cr)
    return L;
  cr = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), a = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), A = Symbol.for("react.offscreen"), h;
  h = Symbol.for("react.module.reference");
  function v(f) {
    if (typeof f == "object" && f !== null) {
      var T = f.$$typeof;
      switch (T) {
        case e:
          switch (f = f.type, f) {
            case r:
            case o:
            case n:
            case c:
            case p:
              return f;
            default:
              switch (f = f && f.$$typeof, f) {
                case a:
                case i:
                case l:
                case S:
                case g:
                case s:
                  return f;
                default:
                  return T;
              }
          }
        case t:
          return T;
      }
    }
  }
  return L.ContextConsumer = i, L.ContextProvider = s, L.Element = e, L.ForwardRef = l, L.Fragment = r, L.Lazy = S, L.Memo = g, L.Portal = t, L.Profiler = o, L.StrictMode = n, L.Suspense = c, L.SuspenseList = p, L.isAsyncMode = function() {
    return !1;
  }, L.isConcurrentMode = function() {
    return !1;
  }, L.isContextConsumer = function(f) {
    return v(f) === i;
  }, L.isContextProvider = function(f) {
    return v(f) === s;
  }, L.isElement = function(f) {
    return typeof f == "object" && f !== null && f.$$typeof === e;
  }, L.isForwardRef = function(f) {
    return v(f) === l;
  }, L.isFragment = function(f) {
    return v(f) === r;
  }, L.isLazy = function(f) {
    return v(f) === S;
  }, L.isMemo = function(f) {
    return v(f) === g;
  }, L.isPortal = function(f) {
    return v(f) === t;
  }, L.isProfiler = function(f) {
    return v(f) === o;
  }, L.isStrictMode = function(f) {
    return v(f) === n;
  }, L.isSuspense = function(f) {
    return v(f) === c;
  }, L.isSuspenseList = function(f) {
    return v(f) === p;
  }, L.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === r || f === o || f === n || f === c || f === p || f === A || typeof f == "object" && f !== null && (f.$$typeof === S || f.$$typeof === g || f.$$typeof === s || f.$$typeof === i || f.$$typeof === l || f.$$typeof === h || f.getModuleId !== void 0);
  }, L.typeOf = v, L;
}
var j = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ur;
function rs() {
  return ur || (ur = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), a = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), A = Symbol.for("react.offscreen"), h = !1, v = !1, f = !1, T = !1, R = !1, P;
    P = Symbol.for("react.module.reference");
    function O(E) {
      return !!(typeof E == "string" || typeof E == "function" || E === r || E === o || R || E === n || E === c || E === p || T || E === A || h || v || f || typeof E == "object" && E !== null && (E.$$typeof === S || E.$$typeof === g || E.$$typeof === s || E.$$typeof === i || E.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      E.$$typeof === P || E.getModuleId !== void 0));
    }
    function m(E) {
      if (typeof E == "object" && E !== null) {
        var k = E.$$typeof;
        switch (k) {
          case e:
            var Y = E.type;
            switch (Y) {
              case r:
              case o:
              case n:
              case c:
              case p:
                return Y;
              default:
                var F = Y && Y.$$typeof;
                switch (F) {
                  case a:
                  case i:
                  case l:
                  case S:
                  case g:
                  case s:
                    return F;
                  default:
                    return k;
                }
            }
          case t:
            return k;
        }
      }
    }
    var G = i, ae = s, te = e, oe = l, ce = r, de = S, Z = g, re = t, se = o, J = n, ye = c, ne = p, X = !1, pe = !1;
    function le(E) {
      return X || (X = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function ge(E) {
      return pe || (pe = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function C(E) {
      return m(E) === i;
    }
    function b(E) {
      return m(E) === s;
    }
    function w(E) {
      return typeof E == "object" && E !== null && E.$$typeof === e;
    }
    function x(E) {
      return m(E) === l;
    }
    function u(E) {
      return m(E) === r;
    }
    function I(E) {
      return m(E) === S;
    }
    function _(E) {
      return m(E) === g;
    }
    function z(E) {
      return m(E) === t;
    }
    function $(E) {
      return m(E) === o;
    }
    function D(E) {
      return m(E) === n;
    }
    function y(E) {
      return m(E) === c;
    }
    function H(E) {
      return m(E) === p;
    }
    j.ContextConsumer = G, j.ContextProvider = ae, j.Element = te, j.ForwardRef = oe, j.Fragment = ce, j.Lazy = de, j.Memo = Z, j.Portal = re, j.Profiler = se, j.StrictMode = J, j.Suspense = ye, j.SuspenseList = ne, j.isAsyncMode = le, j.isConcurrentMode = ge, j.isContextConsumer = C, j.isContextProvider = b, j.isElement = w, j.isForwardRef = x, j.isFragment = u, j.isLazy = I, j.isMemo = _, j.isPortal = z, j.isProfiler = $, j.isStrictMode = D, j.isSuspense = y, j.isSuspenseList = H, j.isValidElementType = O, j.typeOf = m;
  }()), j;
}
process.env.NODE_ENV === "production" ? At.exports = ts() : At.exports = rs();
var jt = At.exports;
function ns(e) {
  function t(C, b, w, x, u) {
    for (var I = 0, _ = 0, z = 0, $ = 0, D, y, H = 0, E = 0, k, Y = k = D = 0, F = 0, Q = 0, Ne = 0, ee = 0, je = w.length, ke = je - 1, fe, N = "", q = "", ut = "", lt = "", Ee; F < je; ) {
      if (y = w.charCodeAt(F), F === ke && _ + $ + z + I !== 0 && (_ !== 0 && (y = _ === 47 ? 10 : 47), $ = z = I = 0, je++, ke++), _ + $ + z + I === 0) {
        if (F === ke && (0 < Q && (N = N.replace(S, "")), 0 < N.trim().length)) {
          switch (y) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              N += w.charAt(F);
          }
          y = 59;
        }
        switch (y) {
          case 123:
            for (N = N.trim(), D = N.charCodeAt(0), k = 1, ee = ++F; F < je; ) {
              switch (y = w.charCodeAt(F)) {
                case 123:
                  k++;
                  break;
                case 125:
                  k--;
                  break;
                case 47:
                  switch (y = w.charCodeAt(F + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (Y = F + 1; Y < ke; ++Y)
                          switch (w.charCodeAt(Y)) {
                            case 47:
                              if (y === 42 && w.charCodeAt(Y - 1) === 42 && F + 2 !== Y) {
                                F = Y + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (y === 47) {
                                F = Y + 1;
                                break e;
                              }
                          }
                        F = Y;
                      }
                  }
                  break;
                case 91:
                  y++;
                case 40:
                  y++;
                case 34:
                case 39:
                  for (; F++ < ke && w.charCodeAt(F) !== y; )
                    ;
              }
              if (k === 0)
                break;
              F++;
            }
            switch (k = w.substring(ee, F), D === 0 && (D = (N = N.replace(g, "").trim()).charCodeAt(0)), D) {
              case 64:
                switch (0 < Q && (N = N.replace(S, "")), y = N.charCodeAt(1), y) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    Q = b;
                    break;
                  default:
                    Q = ye;
                }
                if (k = t(b, Q, k, y, u + 1), ee = k.length, 0 < X && (Q = r(ye, N, Ne), Ee = a(3, k, Q, b, re, Z, ee, y, u, x), N = Q.join(""), Ee !== void 0 && (ee = (k = Ee.trim()).length) === 0 && (y = 0, k = "")), 0 < ee)
                  switch (y) {
                    case 115:
                      N = N.replace(G, i);
                    case 100:
                    case 109:
                    case 45:
                      k = N + "{" + k + "}";
                      break;
                    case 107:
                      N = N.replace(R, "$1 $2"), k = N + "{" + k + "}", k = J === 1 || J === 2 && s("@" + k, 3) ? "@-webkit-" + k + "@" + k : "@" + k;
                      break;
                    default:
                      k = N + k, x === 112 && (k = (q += k, ""));
                  }
                else
                  k = "";
                break;
              default:
                k = t(b, r(b, N, Ne), k, x, u + 1);
            }
            ut += k, k = Ne = Q = Y = D = 0, N = "", y = w.charCodeAt(++F);
            break;
          case 125:
          case 59:
            if (N = (0 < Q ? N.replace(S, "") : N).trim(), 1 < (ee = N.length))
              switch (Y === 0 && (D = N.charCodeAt(0), D === 45 || 96 < D && 123 > D) && (ee = (N = N.replace(" ", ":")).length), 0 < X && (Ee = a(1, N, b, C, re, Z, q.length, x, u, x)) !== void 0 && (ee = (N = Ee.trim()).length) === 0 && (N = "\0\0"), D = N.charCodeAt(0), y = N.charCodeAt(1), D) {
                case 0:
                  break;
                case 64:
                  if (y === 105 || y === 99) {
                    lt += N + w.charAt(F);
                    break;
                  }
                default:
                  N.charCodeAt(ee - 1) !== 58 && (q += o(N, D, y, N.charCodeAt(2)));
              }
            Ne = Q = Y = D = 0, N = "", y = w.charCodeAt(++F);
        }
      }
      switch (y) {
        case 13:
        case 10:
          _ === 47 ? _ = 0 : 1 + D === 0 && x !== 107 && 0 < N.length && (Q = 1, N += "\0"), 0 < X * le && a(0, N, b, C, re, Z, q.length, x, u, x), Z = 1, re++;
          break;
        case 59:
        case 125:
          if (_ + $ + z + I === 0) {
            Z++;
            break;
          }
        default:
          switch (Z++, fe = w.charAt(F), y) {
            case 9:
            case 32:
              if ($ + I + _ === 0)
                switch (H) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    fe = "";
                    break;
                  default:
                    y !== 32 && (fe = " ");
                }
              break;
            case 0:
              fe = "\\0";
              break;
            case 12:
              fe = "\\f";
              break;
            case 11:
              fe = "\\v";
              break;
            case 38:
              $ + _ + I === 0 && (Q = Ne = 1, fe = "\f" + fe);
              break;
            case 108:
              if ($ + _ + I + se === 0 && 0 < Y)
                switch (F - Y) {
                  case 2:
                    H === 112 && w.charCodeAt(F - 3) === 58 && (se = H);
                  case 8:
                    E === 111 && (se = E);
                }
              break;
            case 58:
              $ + _ + I === 0 && (Y = F);
              break;
            case 44:
              _ + z + $ + I === 0 && (Q = 1, fe += "\r");
              break;
            case 34:
            case 39:
              _ === 0 && ($ = $ === y ? 0 : $ === 0 ? y : $);
              break;
            case 91:
              $ + _ + z === 0 && I++;
              break;
            case 93:
              $ + _ + z === 0 && I--;
              break;
            case 41:
              $ + _ + I === 0 && z--;
              break;
            case 40:
              if ($ + _ + I === 0) {
                if (D === 0)
                  switch (2 * H + 3 * E) {
                    case 533:
                      break;
                    default:
                      D = 1;
                  }
                z++;
              }
              break;
            case 64:
              _ + z + $ + I + Y + k === 0 && (k = 1);
              break;
            case 42:
            case 47:
              if (!(0 < $ + I + z))
                switch (_) {
                  case 0:
                    switch (2 * y + 3 * w.charCodeAt(F + 1)) {
                      case 235:
                        _ = 47;
                        break;
                      case 220:
                        ee = F, _ = 42;
                    }
                    break;
                  case 42:
                    y === 47 && H === 42 && ee + 2 !== F && (w.charCodeAt(ee + 2) === 33 && (q += w.substring(ee, F + 1)), fe = "", _ = 0);
                }
          }
          _ === 0 && (N += fe);
      }
      E = H, H = y, F++;
    }
    if (ee = q.length, 0 < ee) {
      if (Q = b, 0 < X && (Ee = a(2, q, Q, C, re, Z, ee, x, u, x), Ee !== void 0 && (q = Ee).length === 0))
        return lt + q + ut;
      if (q = Q.join(",") + "{" + q + "}", J * se !== 0) {
        switch (J !== 2 || s(q, 2) || (se = 0), se) {
          case 111:
            q = q.replace(O, ":-moz-$1") + q;
            break;
          case 112:
            q = q.replace(P, "::-webkit-input-$1") + q.replace(P, "::-moz-$1") + q.replace(P, ":-ms-input-$1") + q;
        }
        se = 0;
      }
    }
    return lt + q + ut;
  }
  function r(C, b, w) {
    var x = b.trim().split(f);
    b = x;
    var u = x.length, I = C.length;
    switch (I) {
      case 0:
      case 1:
        var _ = 0;
        for (C = I === 0 ? "" : C[0] + " "; _ < u; ++_)
          b[_] = n(C, b[_], w).trim();
        break;
      default:
        var z = _ = 0;
        for (b = []; _ < u; ++_)
          for (var $ = 0; $ < I; ++$)
            b[z++] = n(C[$] + " ", x[_], w).trim();
    }
    return b;
  }
  function n(C, b, w) {
    var x = b.charCodeAt(0);
    switch (33 > x && (x = (b = b.trim()).charCodeAt(0)), x) {
      case 38:
        return b.replace(T, "$1" + C.trim());
      case 58:
        return C.trim() + b.replace(T, "$1" + C.trim());
      default:
        if (0 < 1 * w && 0 < b.indexOf("\f"))
          return b.replace(T, (C.charCodeAt(0) === 58 ? "" : "$1") + C.trim());
    }
    return C + b;
  }
  function o(C, b, w, x) {
    var u = C + ";", I = 2 * b + 3 * w + 4 * x;
    if (I === 944) {
      C = u.indexOf(":", 9) + 1;
      var _ = u.substring(C, u.length - 1).trim();
      return _ = u.substring(0, C).trim() + _ + ";", J === 1 || J === 2 && s(_, 1) ? "-webkit-" + _ + _ : _;
    }
    if (J === 0 || J === 2 && !s(u, 1))
      return u;
    switch (I) {
      case 1015:
        return u.charCodeAt(10) === 97 ? "-webkit-" + u + u : u;
      case 951:
        return u.charCodeAt(3) === 116 ? "-webkit-" + u + u : u;
      case 963:
        return u.charCodeAt(5) === 110 ? "-webkit-" + u + u : u;
      case 1009:
        if (u.charCodeAt(4) !== 100)
          break;
      case 969:
      case 942:
        return "-webkit-" + u + u;
      case 978:
        return "-webkit-" + u + "-moz-" + u + u;
      case 1019:
      case 983:
        return "-webkit-" + u + "-moz-" + u + "-ms-" + u + u;
      case 883:
        if (u.charCodeAt(8) === 45)
          return "-webkit-" + u + u;
        if (0 < u.indexOf("image-set(", 11))
          return u.replace(de, "$1-webkit-$2") + u;
        break;
      case 932:
        if (u.charCodeAt(4) === 45)
          switch (u.charCodeAt(5)) {
            case 103:
              return "-webkit-box-" + u.replace("-grow", "") + "-webkit-" + u + "-ms-" + u.replace("grow", "positive") + u;
            case 115:
              return "-webkit-" + u + "-ms-" + u.replace("shrink", "negative") + u;
            case 98:
              return "-webkit-" + u + "-ms-" + u.replace("basis", "preferred-size") + u;
          }
        return "-webkit-" + u + "-ms-" + u + u;
      case 964:
        return "-webkit-" + u + "-ms-flex-" + u + u;
      case 1023:
        if (u.charCodeAt(8) !== 99)
          break;
        return _ = u.substring(u.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + _ + "-webkit-" + u + "-ms-flex-pack" + _ + u;
      case 1005:
        return h.test(u) ? u.replace(A, ":-webkit-") + u.replace(A, ":-moz-") + u : u;
      case 1e3:
        switch (_ = u.substring(13).trim(), b = _.indexOf("-") + 1, _.charCodeAt(0) + _.charCodeAt(b)) {
          case 226:
            _ = u.replace(m, "tb");
            break;
          case 232:
            _ = u.replace(m, "tb-rl");
            break;
          case 220:
            _ = u.replace(m, "lr");
            break;
          default:
            return u;
        }
        return "-webkit-" + u + "-ms-" + _ + u;
      case 1017:
        if (u.indexOf("sticky", 9) === -1)
          break;
      case 975:
        switch (b = (u = C).length - 10, _ = (u.charCodeAt(b) === 33 ? u.substring(0, b) : u).substring(C.indexOf(":", 7) + 1).trim(), I = _.charCodeAt(0) + (_.charCodeAt(7) | 0)) {
          case 203:
            if (111 > _.charCodeAt(8))
              break;
          case 115:
            u = u.replace(_, "-webkit-" + _) + ";" + u;
            break;
          case 207:
          case 102:
            u = u.replace(_, "-webkit-" + (102 < I ? "inline-" : "") + "box") + ";" + u.replace(_, "-webkit-" + _) + ";" + u.replace(_, "-ms-" + _ + "box") + ";" + u;
        }
        return u + ";";
      case 938:
        if (u.charCodeAt(5) === 45)
          switch (u.charCodeAt(6)) {
            case 105:
              return _ = u.replace("-items", ""), "-webkit-" + u + "-webkit-box-" + _ + "-ms-flex-" + _ + u;
            case 115:
              return "-webkit-" + u + "-ms-flex-item-" + u.replace(te, "") + u;
            default:
              return "-webkit-" + u + "-ms-flex-line-pack" + u.replace("align-content", "").replace(te, "") + u;
          }
        break;
      case 973:
      case 989:
        if (u.charCodeAt(3) !== 45 || u.charCodeAt(4) === 122)
          break;
      case 931:
      case 953:
        if (ce.test(C) === !0)
          return (_ = C.substring(C.indexOf(":") + 1)).charCodeAt(0) === 115 ? o(C.replace("stretch", "fill-available"), b, w, x).replace(":fill-available", ":stretch") : u.replace(_, "-webkit-" + _) + u.replace(_, "-moz-" + _.replace("fill-", "")) + u;
        break;
      case 962:
        if (u = "-webkit-" + u + (u.charCodeAt(5) === 102 ? "-ms-" + u : "") + u, w + x === 211 && u.charCodeAt(13) === 105 && 0 < u.indexOf("transform", 10))
          return u.substring(0, u.indexOf(";", 27) + 1).replace(v, "$1-webkit-$2") + u;
    }
    return u;
  }
  function s(C, b) {
    var w = C.indexOf(b === 1 ? ":" : "{"), x = C.substring(0, b !== 3 ? w : 10);
    return w = C.substring(w + 1, C.length - 1), pe(b !== 2 ? x : x.replace(oe, "$1"), w, b);
  }
  function i(C, b) {
    var w = o(b, b.charCodeAt(0), b.charCodeAt(1), b.charCodeAt(2));
    return w !== b + ";" ? w.replace(ae, " or ($1)").substring(4) : "(" + b + ")";
  }
  function a(C, b, w, x, u, I, _, z, $, D) {
    for (var y = 0, H = b, E; y < X; ++y)
      switch (E = ne[y].call(p, C, H, w, x, u, I, _, z, $, D)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          H = E;
      }
    if (H !== b)
      return H;
  }
  function l(C) {
    switch (C) {
      case void 0:
      case null:
        X = ne.length = 0;
        break;
      default:
        if (typeof C == "function")
          ne[X++] = C;
        else if (typeof C == "object")
          for (var b = 0, w = C.length; b < w; ++b)
            l(C[b]);
        else
          le = !!C | 0;
    }
    return l;
  }
  function c(C) {
    return C = C.prefix, C !== void 0 && (pe = null, C ? typeof C != "function" ? J = 1 : (J = 2, pe = C) : J = 0), c;
  }
  function p(C, b) {
    var w = C;
    if (33 > w.charCodeAt(0) && (w = w.trim()), ge = w, w = [ge], 0 < X) {
      var x = a(-1, b, w, w, re, Z, 0, 0, 0, 0);
      x !== void 0 && typeof x == "string" && (b = x);
    }
    var u = t(ye, w, b, 0, 0);
    return 0 < X && (x = a(-2, u, w, w, re, Z, u.length, 0, 0, 0), x !== void 0 && (u = x)), ge = "", se = 0, Z = re = 1, u;
  }
  var g = /^\0+/g, S = /[\0\r\f]/g, A = /: */g, h = /zoo|gra/, v = /([,: ])(transform)/g, f = /,\r+?/g, T = /([\t\r\n ])*\f?&/g, R = /@(k\w+)\s*(\S*)\s*/, P = /::(place)/g, O = /:(read-only)/g, m = /[svh]\w+-[tblr]{2}/, G = /\(\s*(.*)\s*\)/g, ae = /([\s\S]*?);/g, te = /-self|flex-/g, oe = /[^]*?(:[rp][el]a[\w-]+)[^]*/, ce = /stretch|:\s*\w+\-(?:conte|avail)/, de = /([^-])(image-set\()/, Z = 1, re = 1, se = 0, J = 1, ye = [], ne = [], X = 0, pe = null, le = 0, ge = "";
  return p.use = l, p.set = c, e !== void 0 && c(e), p;
}
var os = {
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
};
function ss(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var is = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, lr = /* @__PURE__ */ ss(
  function(e) {
    return is.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Ct = { exports: {} }, U = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fr;
function as() {
  if (fr)
    return U;
  fr = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, g = e ? Symbol.for("react.suspense") : 60113, S = e ? Symbol.for("react.suspense_list") : 60120, A = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, f = e ? Symbol.for("react.fundamental") : 60117, T = e ? Symbol.for("react.responder") : 60118, R = e ? Symbol.for("react.scope") : 60119;
  function P(m) {
    if (typeof m == "object" && m !== null) {
      var G = m.$$typeof;
      switch (G) {
        case t:
          switch (m = m.type, m) {
            case l:
            case c:
            case n:
            case s:
            case o:
            case g:
              return m;
            default:
              switch (m = m && m.$$typeof, m) {
                case a:
                case p:
                case h:
                case A:
                case i:
                  return m;
                default:
                  return G;
              }
          }
        case r:
          return G;
      }
    }
  }
  function O(m) {
    return P(m) === c;
  }
  return U.AsyncMode = l, U.ConcurrentMode = c, U.ContextConsumer = a, U.ContextProvider = i, U.Element = t, U.ForwardRef = p, U.Fragment = n, U.Lazy = h, U.Memo = A, U.Portal = r, U.Profiler = s, U.StrictMode = o, U.Suspense = g, U.isAsyncMode = function(m) {
    return O(m) || P(m) === l;
  }, U.isConcurrentMode = O, U.isContextConsumer = function(m) {
    return P(m) === a;
  }, U.isContextProvider = function(m) {
    return P(m) === i;
  }, U.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === t;
  }, U.isForwardRef = function(m) {
    return P(m) === p;
  }, U.isFragment = function(m) {
    return P(m) === n;
  }, U.isLazy = function(m) {
    return P(m) === h;
  }, U.isMemo = function(m) {
    return P(m) === A;
  }, U.isPortal = function(m) {
    return P(m) === r;
  }, U.isProfiler = function(m) {
    return P(m) === s;
  }, U.isStrictMode = function(m) {
    return P(m) === o;
  }, U.isSuspense = function(m) {
    return P(m) === g;
  }, U.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === n || m === c || m === s || m === o || m === g || m === S || typeof m == "object" && m !== null && (m.$$typeof === h || m.$$typeof === A || m.$$typeof === i || m.$$typeof === a || m.$$typeof === p || m.$$typeof === f || m.$$typeof === T || m.$$typeof === R || m.$$typeof === v);
  }, U.typeOf = P, U;
}
var B = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dr;
function cs() {
  return dr || (dr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, g = e ? Symbol.for("react.suspense") : 60113, S = e ? Symbol.for("react.suspense_list") : 60120, A = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, f = e ? Symbol.for("react.fundamental") : 60117, T = e ? Symbol.for("react.responder") : 60118, R = e ? Symbol.for("react.scope") : 60119;
    function P(y) {
      return typeof y == "string" || typeof y == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      y === n || y === c || y === s || y === o || y === g || y === S || typeof y == "object" && y !== null && (y.$$typeof === h || y.$$typeof === A || y.$$typeof === i || y.$$typeof === a || y.$$typeof === p || y.$$typeof === f || y.$$typeof === T || y.$$typeof === R || y.$$typeof === v);
    }
    function O(y) {
      if (typeof y == "object" && y !== null) {
        var H = y.$$typeof;
        switch (H) {
          case t:
            var E = y.type;
            switch (E) {
              case l:
              case c:
              case n:
              case s:
              case o:
              case g:
                return E;
              default:
                var k = E && E.$$typeof;
                switch (k) {
                  case a:
                  case p:
                  case h:
                  case A:
                  case i:
                    return k;
                  default:
                    return H;
                }
            }
          case r:
            return H;
        }
      }
    }
    var m = l, G = c, ae = a, te = i, oe = t, ce = p, de = n, Z = h, re = A, se = r, J = s, ye = o, ne = g, X = !1;
    function pe(y) {
      return X || (X = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), le(y) || O(y) === l;
    }
    function le(y) {
      return O(y) === c;
    }
    function ge(y) {
      return O(y) === a;
    }
    function C(y) {
      return O(y) === i;
    }
    function b(y) {
      return typeof y == "object" && y !== null && y.$$typeof === t;
    }
    function w(y) {
      return O(y) === p;
    }
    function x(y) {
      return O(y) === n;
    }
    function u(y) {
      return O(y) === h;
    }
    function I(y) {
      return O(y) === A;
    }
    function _(y) {
      return O(y) === r;
    }
    function z(y) {
      return O(y) === s;
    }
    function $(y) {
      return O(y) === o;
    }
    function D(y) {
      return O(y) === g;
    }
    B.AsyncMode = m, B.ConcurrentMode = G, B.ContextConsumer = ae, B.ContextProvider = te, B.Element = oe, B.ForwardRef = ce, B.Fragment = de, B.Lazy = Z, B.Memo = re, B.Portal = se, B.Profiler = J, B.StrictMode = ye, B.Suspense = ne, B.isAsyncMode = pe, B.isConcurrentMode = le, B.isContextConsumer = ge, B.isContextProvider = C, B.isElement = b, B.isForwardRef = w, B.isFragment = x, B.isLazy = u, B.isMemo = I, B.isPortal = _, B.isProfiler = z, B.isStrictMode = $, B.isSuspense = D, B.isValidElementType = P, B.typeOf = O;
  }()), B;
}
process.env.NODE_ENV === "production" ? Ct.exports = as() : Ct.exports = cs();
var us = Ct.exports, Ut = us, ls = {
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
}, fs = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, ds = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Kr = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Bt = {};
Bt[Ut.ForwardRef] = ds;
Bt[Ut.Memo] = Kr;
function pr(e) {
  return Ut.isMemo(e) ? Kr : Bt[e.$$typeof] || ls;
}
var ps = Object.defineProperty, hs = Object.getOwnPropertyNames, hr = Object.getOwnPropertySymbols, ms = Object.getOwnPropertyDescriptor, ys = Object.getPrototypeOf, mr = Object.prototype;
function Zr(e, t, r) {
  if (typeof t != "string") {
    if (mr) {
      var n = ys(t);
      n && n !== mr && Zr(e, n, r);
    }
    var o = hs(t);
    hr && (o = o.concat(hr(t)));
    for (var s = pr(e), i = pr(t), a = 0; a < o.length; ++a) {
      var l = o[a];
      if (!fs[l] && !(r && r[l]) && !(i && i[l]) && !(s && s[l])) {
        var c = ms(t, l);
        try {
          ps(e, l, c);
        } catch {
        }
      }
    }
  }
  return e;
}
var gs = Zr;
const vs = /* @__PURE__ */ es(gs);
function ve() {
  return (ve = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }).apply(this, arguments);
}
var yr = function(e, t) {
  for (var r = [e[0]], n = 0, o = t.length; n < o; n += 1)
    r.push(t[n], e[n + 1]);
  return r;
}, Rt = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !jt.typeOf(e);
}, Qe = Object.freeze([]), Se = Object.freeze({});
function Fe(e) {
  return typeof e == "function";
}
function Tt(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function zt(e) {
  return e && typeof e.styledComponentId == "string";
}
var Re = typeof process < "u" && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Ht = typeof window < "u" && "HTMLElement" in window, _s = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), Es = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function bs() {
  for (var e = arguments.length <= 0 ? void 0 : arguments[0], t = [], r = 1, n = arguments.length; r < n; r += 1)
    t.push(r < 0 || arguments.length <= r ? void 0 : arguments[r]);
  return t.forEach(function(o) {
    e = e.replace(/%[a-z]/, o);
  }), e;
}
function Pe(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  throw process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (r.length > 0 ? " Args: " + r.join(", ") : "")) : new Error(bs.apply(void 0, [Es[e]].concat(r)).trim());
}
var Ss = function() {
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
      for (var o = this.groupSizes, s = o.length, i = s; r >= i; )
        (i <<= 1) < 0 && Pe(16, "" + r);
      this.groupSizes = new Uint32Array(i), this.groupSizes.set(o), this.length = i;
      for (var a = s; a < i; a++)
        this.groupSizes[a] = 0;
    }
    for (var l = this.indexOfGroup(r + 1), c = 0, p = n.length; c < p; c++)
      this.tag.insertRule(l, n[c]) && (this.groupSizes[r]++, l++);
  }, t.clearGroup = function(r) {
    if (r < this.length) {
      var n = this.groupSizes[r], o = this.indexOfGroup(r), s = o + n;
      this.groupSizes[r] = 0;
      for (var i = o; i < s; i++)
        this.tag.deleteRule(o);
    }
  }, t.getGroup = function(r) {
    var n = "";
    if (r >= this.length || this.groupSizes[r] === 0)
      return n;
    for (var o = this.groupSizes[r], s = this.indexOfGroup(r), i = s + o, a = s; a < i; a++)
      n += this.tag.getRule(a) + `/*!sc*/
`;
    return n;
  }, e;
}(), Je = /* @__PURE__ */ new Map(), et = /* @__PURE__ */ new Map(), Ie = 1, Ue = function(e) {
  if (Je.has(e))
    return Je.get(e);
  for (; et.has(Ie); )
    Ie++;
  var t = Ie++;
  return process.env.NODE_ENV !== "production" && ((0 | t) < 0 || t > 1 << 30) && Pe(16, "" + t), Je.set(e, t), et.set(t, e), t;
}, ws = function(e) {
  return et.get(e);
}, As = function(e, t) {
  t >= Ie && (Ie = t + 1), Je.set(e, t), et.set(t, e);
}, Cs = "style[" + Re + '][data-styled-version="5.3.6"]', Rs = new RegExp("^" + Re + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), Ts = function(e, t, r) {
  for (var n, o = r.split(","), s = 0, i = o.length; s < i; s++)
    (n = o[s]) && e.registerName(t, n);
}, Os = function(e, t) {
  for (var r = (t.textContent || "").split(`/*!sc*/
`), n = [], o = 0, s = r.length; o < s; o++) {
    var i = r[o].trim();
    if (i) {
      var a = i.match(Rs);
      if (a) {
        var l = 0 | parseInt(a[1], 10), c = a[2];
        l !== 0 && (As(c, l), Ts(e, c, a[3]), e.getTag().insertRules(l, n)), n.length = 0;
      } else
        n.push(i);
    }
  }
}, Ps = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, Qr = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), o = function(a) {
    for (var l = a.childNodes, c = l.length; c >= 0; c--) {
      var p = l[c];
      if (p && p.nodeType === 1 && p.hasAttribute(Re))
        return p;
    }
  }(r), s = o !== void 0 ? o.nextSibling : null;
  n.setAttribute(Re, "active"), n.setAttribute("data-styled-version", "5.3.6");
  var i = Ps();
  return i && n.setAttribute("nonce", i), r.insertBefore(n, s), n;
}, xs = function() {
  function e(r) {
    var n = this.element = Qr(r);
    n.appendChild(document.createTextNode("")), this.sheet = function(o) {
      if (o.sheet)
        return o.sheet;
      for (var s = document.styleSheets, i = 0, a = s.length; i < a; i++) {
        var l = s[i];
        if (l.ownerNode === o)
          return l;
      }
      Pe(17);
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
}(), Ns = function() {
  function e(r) {
    var n = this.element = Qr(r);
    this.nodes = n.childNodes, this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(r, n) {
    if (r <= this.length && r >= 0) {
      var o = document.createTextNode(n), s = this.nodes[r];
      return this.element.insertBefore(o, s || null), this.length++, !0;
    }
    return !1;
  }, t.deleteRule = function(r) {
    this.element.removeChild(this.nodes[r]), this.length--;
  }, t.getRule = function(r) {
    return r < this.length ? this.nodes[r].textContent : "";
  }, e;
}(), ks = function() {
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
}(), gr = Ht, Ds = { isServer: !Ht, useCSSOMInjection: !_s }, en = function() {
  function e(r, n, o) {
    r === void 0 && (r = Se), n === void 0 && (n = {}), this.options = ve({}, Ds, {}, r), this.gs = n, this.names = new Map(o), this.server = !!r.isServer, !this.server && Ht && gr && (gr = !1, function(s) {
      for (var i = document.querySelectorAll(Cs), a = 0, l = i.length; a < l; a++) {
        var c = i[a];
        c && c.getAttribute(Re) !== "active" && (Os(s, c), c.parentNode && c.parentNode.removeChild(c));
      }
    }(this));
  }
  e.registerId = function(r) {
    return Ue(r);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(r, n) {
    return n === void 0 && (n = !0), new e(ve({}, this.options, {}, r), this.gs, n && this.names || void 0);
  }, t.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (o = (n = this.options).isServer, s = n.useCSSOMInjection, i = n.target, r = o ? new ks(i) : s ? new xs(i) : new Ns(i), new Ss(r)));
    var r, n, o, s, i;
  }, t.hasNameForId = function(r, n) {
    return this.names.has(r) && this.names.get(r).has(n);
  }, t.registerName = function(r, n) {
    if (Ue(r), this.names.has(r))
      this.names.get(r).add(n);
    else {
      var o = /* @__PURE__ */ new Set();
      o.add(n), this.names.set(r, o);
    }
  }, t.insertRules = function(r, n, o) {
    this.registerName(r, n), this.getTag().insertRules(Ue(r), o);
  }, t.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, t.clearRules = function(r) {
    this.getTag().clearGroup(Ue(r)), this.clearNames(r);
  }, t.clearTag = function() {
    this.tag = void 0;
  }, t.toString = function() {
    return function(r) {
      for (var n = r.getTag(), o = n.length, s = "", i = 0; i < o; i++) {
        var a = ws(i);
        if (a !== void 0) {
          var l = r.names.get(a), c = n.getGroup(i);
          if (l && c && l.size) {
            var p = Re + ".g" + i + '[id="' + a + '"]', g = "";
            l !== void 0 && l.forEach(function(S) {
              S.length > 0 && (g += S + ",");
            }), s += "" + c + p + '{content:"' + g + `"}/*!sc*/
`;
          }
        }
      }
      return s;
    }(this);
  }, e;
}(), Is = /(a)(d)/gi, vr = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Ot(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0)
    r = vr(t % 52) + r;
  return (vr(t % 52) + r).replace(Is, "$1-$2");
}
var we = function(e, t) {
  for (var r = t.length; r; )
    e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, tn = function(e) {
  return we(5381, e);
};
function $s(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (Fe(r) && !zt(r))
      return !1;
  }
  return !0;
}
var Fs = tn("5.3.6"), Ms = function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (n === void 0 || n.isStatic) && $s(t), this.componentId = r, this.baseHash = we(Fs, r), this.baseStyle = n, en.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, n) {
    var o = this.componentId, s = [];
    if (this.baseStyle && s.push(this.baseStyle.generateAndInjectStyles(t, r, n)), this.isStatic && !n.hash)
      if (this.staticRulesId && r.hasNameForId(o, this.staticRulesId))
        s.push(this.staticRulesId);
      else {
        var i = Te(this.rules, t, r, n).join(""), a = Ot(we(this.baseHash, i) >>> 0);
        if (!r.hasNameForId(o, a)) {
          var l = n(i, "." + a, void 0, o);
          r.insertRules(o, a, l);
        }
        s.push(a), this.staticRulesId = a;
      }
    else {
      for (var c = this.rules.length, p = we(this.baseHash, n.hash), g = "", S = 0; S < c; S++) {
        var A = this.rules[S];
        if (typeof A == "string")
          g += A, process.env.NODE_ENV !== "production" && (p = we(p, A + S));
        else if (A) {
          var h = Te(A, t, r, n), v = Array.isArray(h) ? h.join("") : h;
          p = we(p, v + S), g += v;
        }
      }
      if (g) {
        var f = Ot(p >>> 0);
        if (!r.hasNameForId(o, f)) {
          var T = n(g, "." + f, void 0, o);
          r.insertRules(o, f, T);
        }
        s.push(f);
      }
    }
    return s.join(" ");
  }, e;
}(), Ls = /^\s*\/\/.*$/gm, js = [":", "[", ".", "#"];
function Us(e) {
  var t, r, n, o, s = e === void 0 ? Se : e, i = s.options, a = i === void 0 ? Se : i, l = s.plugins, c = l === void 0 ? Qe : l, p = new ns(a), g = [], S = function(v) {
    function f(T) {
      if (T)
        try {
          v(T + "}");
        } catch {
        }
    }
    return function(T, R, P, O, m, G, ae, te, oe, ce) {
      switch (T) {
        case 1:
          if (oe === 0 && R.charCodeAt(0) === 64)
            return v(R + ";"), "";
          break;
        case 2:
          if (te === 0)
            return R + "/*|*/";
          break;
        case 3:
          switch (te) {
            case 102:
            case 112:
              return v(P[0] + R), "";
            default:
              return R + (ce === 0 ? "/*|*/" : "");
          }
        case -2:
          R.split("/*|*/}").forEach(f);
      }
    };
  }(function(v) {
    g.push(v);
  }), A = function(v, f, T) {
    return f === 0 && js.indexOf(T[r.length]) !== -1 || T.match(o) ? v : "." + t;
  };
  function h(v, f, T, R) {
    R === void 0 && (R = "&");
    var P = v.replace(Ls, ""), O = f && T ? T + " " + f + " { " + P + " }" : P;
    return t = R, r = f, n = new RegExp("\\" + r + "\\b", "g"), o = new RegExp("(\\" + r + "\\b){2,}"), p(T || !f ? "" : f, O);
  }
  return p.use([].concat(c, [function(v, f, T) {
    v === 2 && T.length && T[0].lastIndexOf(r) > 0 && (T[0] = T[0].replace(n, A));
  }, S, function(v) {
    if (v === -2) {
      var f = g;
      return g = [], f;
    }
  }])), h.hash = c.length ? c.reduce(function(v, f) {
    return f.name || Pe(15), we(v, f.name);
  }, 5381).toString() : "", h;
}
var rn = tt.createContext();
rn.Consumer;
var nn = tt.createContext(), Bs = (nn.Consumer, new en()), Pt = Us();
function zs() {
  return rt(rn) || Bs;
}
function Hs() {
  return rt(nn) || Pt;
}
var Vs = function() {
  function e(t, r) {
    var n = this;
    this.inject = function(o, s) {
      s === void 0 && (s = Pt);
      var i = n.name + s.hash;
      o.hasNameForId(n.id, i) || o.insertRules(n.id, i, s(n.rules, i, "@keyframes"));
    }, this.toString = function() {
      return Pe(12, String(n.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = r;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = Pt), this.name + t.hash;
  }, e;
}(), Ys = /([A-Z])/, qs = /([A-Z])/g, Ws = /^ms-/, Gs = function(e) {
  return "-" + e.toLowerCase();
};
function _r(e) {
  return Ys.test(e) ? e.replace(qs, Gs).replace(Ws, "-ms-") : e;
}
var Er = function(e) {
  return e == null || e === !1 || e === "";
};
function Te(e, t, r, n) {
  if (Array.isArray(e)) {
    for (var o, s = [], i = 0, a = e.length; i < a; i += 1)
      (o = Te(e[i], t, r, n)) !== "" && (Array.isArray(o) ? s.push.apply(s, o) : s.push(o));
    return s;
  }
  if (Er(e))
    return "";
  if (zt(e))
    return "." + e.styledComponentId;
  if (Fe(e)) {
    if (typeof (c = e) != "function" || c.prototype && c.prototype.isReactComponent || !t)
      return e;
    var l = e(t);
    return process.env.NODE_ENV !== "production" && jt.isElement(l) && console.warn(Tt(e) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), Te(l, t, r, n);
  }
  var c;
  return e instanceof Vs ? r ? (e.inject(r, n), e.getName(n)) : e : Rt(e) ? function p(g, S) {
    var A, h, v = [];
    for (var f in g)
      g.hasOwnProperty(f) && !Er(g[f]) && (Array.isArray(g[f]) && g[f].isCss || Fe(g[f]) ? v.push(_r(f) + ":", g[f], ";") : Rt(g[f]) ? v.push.apply(v, p(g[f], f)) : v.push(_r(f) + ": " + (A = f, (h = g[f]) == null || typeof h == "boolean" || h === "" ? "" : typeof h != "number" || h === 0 || A in os ? String(h).trim() : h + "px") + ";"));
    return S ? [S + " {"].concat(v, ["}"]) : v;
  }(e) : e.toString();
}
var br = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function xe(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  return Fe(e) || Rt(e) ? br(Te(yr(Qe, [e].concat(r)))) : r.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : br(Te(yr(e, r)));
}
var Sr = /invalid hook call/i, Be = /* @__PURE__ */ new Set(), Js = function(e, t) {
  if (process.env.NODE_ENV !== "production") {
    var r = "The component " + e + (t ? ' with the id of "' + t + '"' : "") + ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, n = console.error;
    try {
      var o = !0;
      console.error = function(s) {
        if (Sr.test(s))
          o = !1, Be.delete(r);
        else {
          for (var i = arguments.length, a = new Array(i > 1 ? i - 1 : 0), l = 1; l < i; l++)
            a[l - 1] = arguments[l];
          n.apply(void 0, [s].concat(a));
        }
      }, Xe(), o && !Be.has(r) && (console.warn(r), Be.add(r));
    } catch (s) {
      Sr.test(s.message) && Be.delete(r);
    } finally {
      console.error = n;
    }
  }
}, Xs = function(e, t, r) {
  return r === void 0 && (r = Se), e.theme !== r.theme && e.theme || t || r.theme;
}, Ks = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Zs = /(^-|-$)/g;
function yt(e) {
  return e.replace(Ks, "-").replace(Zs, "");
}
var Qs = function(e) {
  return Ot(tn(e) >>> 0);
};
function ze(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var xt = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, ei = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function ti(e, t, r) {
  var n = e[r];
  xt(t) && xt(n) ? on(n, t) : e[r] = t;
}
function on(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  for (var o = 0, s = r; o < s.length; o++) {
    var i = s[o];
    if (xt(i))
      for (var a in i)
        ei(a) && ti(e, i[a], a);
  }
  return e;
}
var sn = tt.createContext();
sn.Consumer;
var gt = {};
function an(e, t, r) {
  var n = zt(e), o = !ze(e), s = t.attrs, i = s === void 0 ? Qe : s, a = t.componentId, l = a === void 0 ? function(R, P) {
    var O = typeof R != "string" ? "sc" : yt(R);
    gt[O] = (gt[O] || 0) + 1;
    var m = O + "-" + Qs("5.3.6" + O + gt[O]);
    return P ? P + "-" + m : m;
  }(t.displayName, t.parentComponentId) : a, c = t.displayName, p = c === void 0 ? function(R) {
    return ze(R) ? "styled." + R : "Styled(" + Tt(R) + ")";
  }(e) : c, g = t.displayName && t.componentId ? yt(t.displayName) + "-" + t.componentId : t.componentId || l, S = n && e.attrs ? Array.prototype.concat(e.attrs, i).filter(Boolean) : i, A = t.shouldForwardProp;
  n && e.shouldForwardProp && (A = t.shouldForwardProp ? function(R, P, O) {
    return e.shouldForwardProp(R, P, O) && t.shouldForwardProp(R, P, O);
  } : e.shouldForwardProp);
  var h, v = new Ms(r, g, n ? e.componentStyle : void 0), f = v.isStatic && i.length === 0, T = function(R, P) {
    return function(O, m, G, ae) {
      var te = O.attrs, oe = O.componentStyle, ce = O.defaultProps, de = O.foldedComponentIds, Z = O.shouldForwardProp, re = O.styledComponentId, se = O.target;
      process.env.NODE_ENV !== "production" && Vt(re);
      var J = function(x, u, I) {
        x === void 0 && (x = Se);
        var _ = ve({}, u, { theme: x }), z = {};
        return I.forEach(function($) {
          var D, y, H, E = $;
          for (D in Fe(E) && (E = E(_)), E)
            _[D] = z[D] = D === "className" ? (y = z[D], H = E[D], y && H ? y + " " + H : y || H) : E[D];
        }), [_, z];
      }(Xs(m, rt(sn), ce) || Se, m, te), ye = J[0], ne = J[1], X = function(x, u, I, _) {
        var z = zs(), $ = Hs(), D = u ? x.generateAndInjectStyles(Se, z, $) : x.generateAndInjectStyles(I, z, $);
        return process.env.NODE_ENV !== "production" && Vt(D), process.env.NODE_ENV !== "production" && !u && _ && _(D), D;
      }(oe, ae, ye, process.env.NODE_ENV !== "production" ? O.warnTooManyClasses : void 0), pe = G, le = ne.$as || m.$as || ne.as || m.as || se, ge = ze(le), C = ne !== m ? ve({}, m, {}, ne) : m, b = {};
      for (var w in C)
        w[0] !== "$" && w !== "as" && (w === "forwardedAs" ? b.as = C[w] : (Z ? Z(w, lr, le) : !ge || lr(w)) && (b[w] = C[w]));
      return m.style && ne.style !== m.style && (b.style = ve({}, m.style, {}, ne.style)), b.className = Array.prototype.concat(de, re, X !== re ? X : null, m.className, ne.className).filter(Boolean).join(" "), b.ref = pe, hn(le, b);
    }(h, R, P, f);
  };
  return T.displayName = p, (h = tt.forwardRef(T)).attrs = S, h.componentStyle = v, h.displayName = p, h.shouldForwardProp = A, h.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : Qe, h.styledComponentId = g, h.target = n ? e.target : e, h.withComponent = function(R) {
    var P = t.componentId, O = function(G, ae) {
      if (G == null)
        return {};
      var te, oe, ce = {}, de = Object.keys(G);
      for (oe = 0; oe < de.length; oe++)
        te = de[oe], ae.indexOf(te) >= 0 || (ce[te] = G[te]);
      return ce;
    }(t, ["componentId"]), m = P && P + "-" + (ze(R) ? R : yt(Tt(R)));
    return an(R, ve({}, O, { attrs: S, componentId: m }), r);
  }, Object.defineProperty(h, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(R) {
    this._foldedDefaultProps = n ? on({}, e.defaultProps, R) : R;
  } }), process.env.NODE_ENV !== "production" && (Js(p, g), h.warnTooManyClasses = function(R, P) {
    var O = {}, m = !1;
    return function(G) {
      if (!m && (O[G] = !0, Object.keys(O).length >= 200)) {
        var ae = P ? ' with the id of "' + P + '"' : "";
        console.warn("Over 200 classes were generated for component " + R + ae + `.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), m = !0, O = {};
      }
    };
  }(p, g)), h.toString = function() {
    return "." + h.styledComponentId;
  }, o && vs(h, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), h;
}
var Nt = function(e) {
  return function t(r, n, o) {
    if (o === void 0 && (o = Se), !jt.isValidElementType(n))
      return Pe(1, String(n));
    var s = function() {
      return r(n, o, xe.apply(void 0, arguments));
    };
    return s.withConfig = function(i) {
      return t(r, n, ve({}, o, {}, i));
    }, s.attrs = function(i) {
      return t(r, n, ve({}, o, { attrs: Array.prototype.concat(o.attrs, i).filter(Boolean) }));
    }, s;
  }(an, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  Nt[e] = Nt(e);
});
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const cn = Nt, un = (e = "100%", t = e) => xe`
  width: ${e};
  height: ${t};
`;
xe`
  border: 1px solid red;
`;
const ri = (e = "flex-start", t = "stretch", r = "row") => xe`
  display: flex;
  justify-content: ${e};
  align-items: ${t};
  flex-direction: ${r};
`, wr = (e) => xe`
  ${({ theme: t }) => t[e]}
`, ni = (e) => xe`
  position: absolute;
  ${Object.entries(e).map(([t, r]) => `${t}: ${r};`).join(`
`)}
`, oi = cn.div`
  ${ri("center", "center")};
  ${ni({
  left: "0",
  top: "0"
})}
  ${un("100vw", "100vh")};
  background: rgba(0, 0, 0, 0.44);
  z-index: 100;
`, si = cn.div`
  display: grid;
  position: relative;
  ${un("60vw", "70vh")};
  background: ${wr("grey")};
  border: 2px solid ${wr("lightGrey")};
  border-radius: 6px;
  cursor: grab;
  align-items: center;
  justify-items: center;
  font-family: sans-serif;
  color: white;
`, ii = ({ onClose: e, isOpen: t, children: r }) => {
  const { Spring: n, Gesture: o } = qo(), { opacity: s, transform: i } = Qo(), a = n.useTransition(t, {
    from: s.from(),
    enter: s.to(),
    leave: s.from(),
    config: n.config.stiff
  }), l = n.useSpring({
    from: i.from(),
    to: i.to(t),
    config: n.config.wobbly
  }), [c, p] = n.useSpring(() => ({
    y: 0,
    x: 0,
    scale: 1
  })), { y: g, x: S, scale: A } = c, h = o.useDrag(
    ({ offset: [f, T], down: R }) => {
      p.start({ y: R ? T : 0, immediate: !1, x: R ? f : 0, scale: R ? 1.07 : 1 });
    },
    { from: () => [0, 0], filterTaps: !0, rubberband: !0, delay: 200 }
  ), v = (f) => {
    f.stopPropagation();
  };
  return /* @__PURE__ */ ie(Cr, { children: a(
    (f, T) => /* @__PURE__ */ ie(Yr, { when: T, children: /* @__PURE__ */ ie(Xr, { children: /* @__PURE__ */ ie(
      oi,
      {
        style: f,
        onClick: e,
        as: n.a.div,
        children: /* @__PURE__ */ Ar(
          si,
          {
            style: { ...l, x: S, y: g, scale: A },
            ...h(),
            onClick: v,
            as: n.a.div,
            children: [
              /* @__PURE__ */ ie("h1", { children: "Modal" }),
              r,
              /* @__PURE__ */ ie("button", { onClick: e, children: "Close" })
            ]
          }
        )
      }
    ) }) })
  ) });
}, Ei = (e) => /* @__PURE__ */ ie(Yo, { children: /* @__PURE__ */ ie(ii, { ...e }) });
export {
  Yo as AnimationProvider,
  Yr as Display,
  Ho as ErrorBoundary,
  $o as LocalStorage,
  _i as LocalStorageClient,
  Ei as Modal,
  yi as Page,
  fi as RoutePaths,
  li as httpService,
  vi as isFunction,
  gi as isObject,
  Wo as isString,
  di as useAltKeyDown,
  qo as useAnimations,
  Fo as useBooleanState,
  pi as useDebounce,
  hi as useFullScreen,
  mi as useOverflow
};
