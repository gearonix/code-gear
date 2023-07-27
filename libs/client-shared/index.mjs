import * as u from "react";
import Pe, { useState as Yt, useRef as Ae, createContext as fo, useEffect as jt, useMemo as wr, useContext as Ft, useLayoutEffect as Ou, forwardRef as Ms, Children as Uv, createRef as Kv, useCallback as Pa, useDebugValue as Oc, createElement as Gv } from "react";
import { jsx as ct, jsxs as _u, Fragment as Is } from "react/jsx-runtime";
import * as qv from "react-dom";
import Yv, { createPortal as $s, unstable_batchedUpdates as Xv } from "react-dom";
import Qv from "react-smooth-scrollbar";
function Ru(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Jv } = Object.prototype, { getPrototypeOf: As } = Object, Oi = ((e) => (t) => {
  const n = Jv.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), gn = (e) => (e = e.toLowerCase(), (t) => Oi(t) === e), _i = (e) => (t) => typeof t === e, { isArray: Nr } = Array, eo = _i("undefined");
function Zv(e) {
  return e !== null && !eo(e) && e.constructor !== null && !eo(e.constructor) && tn(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Pu = gn("ArrayBuffer");
function eh(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Pu(e.buffer), t;
}
const th = _i("string"), tn = _i("function"), Tu = _i("number"), Ri = (e) => e !== null && typeof e == "object", nh = (e) => e === !0 || e === !1, Bo = (e) => {
  if (Oi(e) !== "object")
    return !1;
  const t = As(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, rh = gn("Date"), oh = gn("File"), ih = gn("Blob"), ah = gn("FileList"), sh = (e) => Ri(e) && tn(e.pipe), ch = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || tn(e.append) && ((t = Oi(e)) === "formdata" || // detect form-data instance
  t === "object" && tn(e.toString) && e.toString() === "[object FormData]"));
}, lh = gn("URLSearchParams"), uh = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function vo(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, o;
  if (typeof e != "object" && (e = [e]), Nr(e))
    for (r = 0, o = e.length; r < o; r++)
      t.call(null, e[r], r, e);
  else {
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e), a = i.length;
    let s;
    for (r = 0; r < a; r++)
      s = i[r], t.call(null, e[s], s, e);
  }
}
function Nu(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, o;
  for (; r-- > 0; )
    if (o = n[r], t === o.toLowerCase())
      return o;
  return null;
}
const Mu = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), Iu = (e) => !eo(e) && e !== Mu;
function Ta() {
  const { caseless: e } = Iu(this) && this || {}, t = {}, n = (r, o) => {
    const i = e && Nu(t, o) || o;
    Bo(t[i]) && Bo(r) ? t[i] = Ta(t[i], r) : Bo(r) ? t[i] = Ta({}, r) : Nr(r) ? t[i] = r.slice() : t[i] = r;
  };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && vo(arguments[r], n);
  return t;
}
const fh = (e, t, n, { allOwnKeys: r } = {}) => (vo(t, (o, i) => {
  n && tn(o) ? e[i] = Ru(o, n) : e[i] = o;
}, { allOwnKeys: r }), e), dh = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), vh = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, hh = (e, t, n, r) => {
  let o, i, a;
  const s = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
      a = o[i], (!r || r(a, e, t)) && !s[a] && (t[a] = e[a], s[a] = !0);
    e = n !== !1 && As(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, mh = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, ph = (e) => {
  if (!e)
    return null;
  if (Nr(e))
    return e;
  let t = e.length;
  if (!Tu(t))
    return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, gh = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && As(Uint8Array)), yh = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const i = o.value;
    t.call(e, i[0], i[1]);
  }
}, bh = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, Sh = gn("HTMLFormElement"), Eh = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, o) {
    return r.toUpperCase() + o;
  }
), _c = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), wh = gn("RegExp"), $u = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  vo(n, (o, i) => {
    t(o, i, e) !== !1 && (r[i] = o);
  }), Object.defineProperties(e, r);
}, Ch = (e) => {
  $u(e, (t, n) => {
    if (tn(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (tn(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, xh = (e, t) => {
  const n = {}, r = (o) => {
    o.forEach((i) => {
      n[i] = !0;
    });
  };
  return Nr(e) ? r(e) : r(String(e).split(t)), n;
}, Oh = () => {
}, _h = (e, t) => (e = +e, Number.isFinite(e) ? e : t), Qi = "abcdefghijklmnopqrstuvwxyz", Rc = "0123456789", Au = {
  DIGIT: Rc,
  ALPHA: Qi,
  ALPHA_DIGIT: Qi + Qi.toUpperCase() + Rc
}, Rh = (e = 16, t = Au.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t;
  for (; e--; )
    n += t[Math.random() * r | 0];
  return n;
};
function Ph(e) {
  return !!(e && tn(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const Th = (e) => {
  const t = new Array(10), n = (r, o) => {
    if (Ri(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[o] = r;
        const i = Nr(r) ? [] : {};
        return vo(r, (a, s) => {
          const c = n(a, o + 1);
          !eo(c) && (i[s] = c);
        }), t[o] = void 0, i;
      }
    }
    return r;
  };
  return n(e, 0);
}, Nh = gn("AsyncFunction"), Mh = (e) => e && (Ri(e) || tn(e)) && tn(e.then) && tn(e.catch), W = {
  isArray: Nr,
  isArrayBuffer: Pu,
  isBuffer: Zv,
  isFormData: ch,
  isArrayBufferView: eh,
  isString: th,
  isNumber: Tu,
  isBoolean: nh,
  isObject: Ri,
  isPlainObject: Bo,
  isUndefined: eo,
  isDate: rh,
  isFile: oh,
  isBlob: ih,
  isRegExp: wh,
  isFunction: tn,
  isStream: sh,
  isURLSearchParams: lh,
  isTypedArray: gh,
  isFileList: ah,
  forEach: vo,
  merge: Ta,
  extend: fh,
  trim: uh,
  stripBOM: dh,
  inherits: vh,
  toFlatObject: hh,
  kindOf: Oi,
  kindOfTest: gn,
  endsWith: mh,
  toArray: ph,
  forEachEntry: yh,
  matchAll: bh,
  isHTMLForm: Sh,
  hasOwnProperty: _c,
  hasOwnProp: _c,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: $u,
  freezeMethods: Ch,
  toObjectSet: xh,
  toCamelCase: Eh,
  noop: Oh,
  toFiniteNumber: _h,
  findKey: Nu,
  global: Mu,
  isContextDefined: Iu,
  ALPHABET: Au,
  generateString: Rh,
  isSpecCompliantForm: Ph,
  toJSONObject: Th,
  isAsyncFn: Nh,
  isThenable: Mh
};
function ke(e, t, n, r, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), o && (this.response = o);
}
W.inherits(ke, Error, {
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
      config: W.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const Fu = ke.prototype, Du = {};
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
  Du[e] = { value: e };
});
Object.defineProperties(ke, Du);
Object.defineProperty(Fu, "isAxiosError", { value: !0 });
ke.from = (e, t, n, r, o, i) => {
  const a = Object.create(Fu);
  return W.toFlatObject(e, a, function(c) {
    return c !== Error.prototype;
  }, (s) => s !== "isAxiosError"), ke.call(a, e.message, t, n, r, o), a.cause = e, a.name = e.name, i && Object.assign(a, i), a;
};
const Ih = null;
function Na(e) {
  return W.isPlainObject(e) || W.isArray(e);
}
function Lu(e) {
  return W.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Pc(e, t, n) {
  return e ? e.concat(t).map(function(o, i) {
    return o = Lu(o), !n && i ? "[" + o + "]" : o;
  }).join(n ? "." : "") : t;
}
function $h(e) {
  return W.isArray(e) && !e.some(Na);
}
const Ah = W.toFlatObject(W, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Pi(e, t, n) {
  if (!W.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = W.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(h, m) {
    return !W.isUndefined(m[h]);
  });
  const r = n.metaTokens, o = n.visitor || f, i = n.dots, a = n.indexes, c = (n.Blob || typeof Blob < "u" && Blob) && W.isSpecCompliantForm(t);
  if (!W.isFunction(o))
    throw new TypeError("visitor must be a function");
  function l(p) {
    if (p === null)
      return "";
    if (W.isDate(p))
      return p.toISOString();
    if (!c && W.isBlob(p))
      throw new ke("Blob is not supported. Use a Buffer instead.");
    return W.isArrayBuffer(p) || W.isTypedArray(p) ? c && typeof Blob == "function" ? new Blob([p]) : Buffer.from(p) : p;
  }
  function f(p, h, m) {
    let y = p;
    if (p && !m && typeof p == "object") {
      if (W.endsWith(h, "{}"))
        h = r ? h : h.slice(0, -2), p = JSON.stringify(p);
      else if (W.isArray(p) && $h(p) || (W.isFileList(p) || W.endsWith(h, "[]")) && (y = W.toArray(p)))
        return h = Lu(h), y.forEach(function(E, w) {
          !(W.isUndefined(E) || E === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? Pc([h], w, i) : a === null ? h : h + "[]",
            l(E)
          );
        }), !1;
    }
    return Na(p) ? !0 : (t.append(Pc(m, h, i), l(p)), !1);
  }
  const d = [], v = Object.assign(Ah, {
    defaultVisitor: f,
    convertValue: l,
    isVisitable: Na
  });
  function g(p, h) {
    if (!W.isUndefined(p)) {
      if (d.indexOf(p) !== -1)
        throw Error("Circular reference detected in " + h.join("."));
      d.push(p), W.forEach(p, function(y, b) {
        (!(W.isUndefined(y) || y === null) && o.call(
          t,
          y,
          W.isString(b) ? b.trim() : b,
          h,
          v
        )) === !0 && g(y, h ? h.concat(b) : [b]);
      }), d.pop();
    }
  }
  if (!W.isObject(e))
    throw new TypeError("data must be an object");
  return g(e), t;
}
function Tc(e) {
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
function Fs(e, t) {
  this._pairs = [], e && Pi(e, this, t);
}
const ku = Fs.prototype;
ku.append = function(t, n) {
  this._pairs.push([t, n]);
};
ku.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, Tc);
  } : Tc;
  return this._pairs.map(function(o) {
    return n(o[0]) + "=" + n(o[1]);
  }, "").join("&");
};
function Fh(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function ju(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || Fh, o = n && n.serialize;
  let i;
  if (o ? i = o(t, n) : i = W.isURLSearchParams(t) ? t.toString() : new Fs(t, n).toString(r), i) {
    const a = e.indexOf("#");
    a !== -1 && (e = e.slice(0, a)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class Dh {
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
    W.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const Nc = Dh, Hu = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Lh = typeof URLSearchParams < "u" ? URLSearchParams : Fs, kh = typeof FormData < "u" ? FormData : null, jh = typeof Blob < "u" ? Blob : null, Hh = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), zh = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), pn = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Lh,
    FormData: kh,
    Blob: jh
  },
  isStandardBrowserEnv: Hh,
  isStandardBrowserWebWorkerEnv: zh,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function Vh(e, t) {
  return Pi(e, new pn.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, o, i) {
      return pn.isNode && W.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Bh(e) {
  return W.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Wh(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const o = n.length;
  let i;
  for (r = 0; r < o; r++)
    i = n[r], t[i] = e[i];
  return t;
}
function zu(e) {
  function t(n, r, o, i) {
    let a = n[i++];
    const s = Number.isFinite(+a), c = i >= n.length;
    return a = !a && W.isArray(o) ? o.length : a, c ? (W.hasOwnProp(o, a) ? o[a] = [o[a], r] : o[a] = r, !s) : ((!o[a] || !W.isObject(o[a])) && (o[a] = []), t(n, r, o[a], i) && W.isArray(o[a]) && (o[a] = Wh(o[a])), !s);
  }
  if (W.isFormData(e) && W.isFunction(e.entries)) {
    const n = {};
    return W.forEachEntry(e, (r, o) => {
      t(Bh(r), o, n, 0);
    }), n;
  }
  return null;
}
const Uh = {
  "Content-Type": void 0
};
function Kh(e, t, n) {
  if (W.isString(e))
    try {
      return (t || JSON.parse)(e), W.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const Ti = {
  transitional: Hu,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", o = r.indexOf("application/json") > -1, i = W.isObject(t);
    if (i && W.isHTMLForm(t) && (t = new FormData(t)), W.isFormData(t))
      return o && o ? JSON.stringify(zu(t)) : t;
    if (W.isArrayBuffer(t) || W.isBuffer(t) || W.isStream(t) || W.isFile(t) || W.isBlob(t))
      return t;
    if (W.isArrayBufferView(t))
      return t.buffer;
    if (W.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let s;
    if (i) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Vh(t, this.formSerializer).toString();
      if ((s = W.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return Pi(
          s ? { "files[]": t } : t,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return i || o ? (n.setContentType("application/json", !1), Kh(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || Ti.transitional, r = n && n.forcedJSONParsing, o = this.responseType === "json";
    if (t && W.isString(t) && (r && !this.responseType || o)) {
      const a = !(n && n.silentJSONParsing) && o;
      try {
        return JSON.parse(t);
      } catch (s) {
        if (a)
          throw s.name === "SyntaxError" ? ke.from(s, ke.ERR_BAD_RESPONSE, this, null, this.response) : s;
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
    FormData: pn.classes.FormData,
    Blob: pn.classes.Blob
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
W.forEach(["delete", "get", "head"], function(t) {
  Ti.headers[t] = {};
});
W.forEach(["post", "put", "patch"], function(t) {
  Ti.headers[t] = W.merge(Uh);
});
const Ds = Ti, Gh = W.toObjectSet([
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
]), qh = (e) => {
  const t = {};
  let n, r, o;
  return e && e.split(`
`).forEach(function(a) {
    o = a.indexOf(":"), n = a.substring(0, o).trim().toLowerCase(), r = a.substring(o + 1).trim(), !(!n || t[n] && Gh[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, Mc = Symbol("internals");
function Vr(e) {
  return e && String(e).trim().toLowerCase();
}
function Wo(e) {
  return e === !1 || e == null ? e : W.isArray(e) ? e.map(Wo) : String(e);
}
function Yh(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const Xh = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Ji(e, t, n, r, o) {
  if (W.isFunction(r))
    return r.call(this, t, n);
  if (o && (t = n), !!W.isString(t)) {
    if (W.isString(r))
      return t.indexOf(r) !== -1;
    if (W.isRegExp(r))
      return r.test(t);
  }
}
function Qh(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Jh(e, t) {
  const n = W.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(o, i, a) {
        return this[r].call(this, t, o, i, a);
      },
      configurable: !0
    });
  });
}
class Ni {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const o = this;
    function i(s, c, l) {
      const f = Vr(c);
      if (!f)
        throw new Error("header name must be a non-empty string");
      const d = W.findKey(o, f);
      (!d || o[d] === void 0 || l === !0 || l === void 0 && o[d] !== !1) && (o[d || c] = Wo(s));
    }
    const a = (s, c) => W.forEach(s, (l, f) => i(l, f, c));
    return W.isPlainObject(t) || t instanceof this.constructor ? a(t, n) : W.isString(t) && (t = t.trim()) && !Xh(t) ? a(qh(t), n) : t != null && i(n, t, r), this;
  }
  get(t, n) {
    if (t = Vr(t), t) {
      const r = W.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n)
          return o;
        if (n === !0)
          return Yh(o);
        if (W.isFunction(n))
          return n.call(this, o, r);
        if (W.isRegExp(n))
          return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = Vr(t), t) {
      const r = W.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Ji(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function i(a) {
      if (a = Vr(a), a) {
        const s = W.findKey(r, a);
        s && (!n || Ji(r, r[s], s, n)) && (delete r[s], o = !0);
      }
    }
    return W.isArray(t) ? t.forEach(i) : i(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, o = !1;
    for (; r--; ) {
      const i = n[r];
      (!t || Ji(this, this[i], i, t, !0)) && (delete this[i], o = !0);
    }
    return o;
  }
  normalize(t) {
    const n = this, r = {};
    return W.forEach(this, (o, i) => {
      const a = W.findKey(r, i);
      if (a) {
        n[a] = Wo(o), delete n[i];
        return;
      }
      const s = t ? Qh(i) : String(i).trim();
      s !== i && delete n[i], n[s] = Wo(o), r[s] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return W.forEach(this, (r, o) => {
      r != null && r !== !1 && (n[o] = t && W.isArray(r) ? r.join(", ") : r);
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
    const r = (this[Mc] = this[Mc] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function i(a) {
      const s = Vr(a);
      r[s] || (Jh(o, a), r[s] = !0);
    }
    return W.isArray(t) ? t.forEach(i) : i(t), this;
  }
}
Ni.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
W.freezeMethods(Ni.prototype);
W.freezeMethods(Ni);
const Pn = Ni;
function Zi(e, t) {
  const n = this || Ds, r = t || n, o = Pn.from(r.headers);
  let i = r.data;
  return W.forEach(e, function(s) {
    i = s.call(n, i, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), i;
}
function Vu(e) {
  return !!(e && e.__CANCEL__);
}
function ho(e, t, n) {
  ke.call(this, e ?? "canceled", ke.ERR_CANCELED, t, n), this.name = "CanceledError";
}
W.inherits(ho, ke, {
  __CANCEL__: !0
});
function Zh(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new ke(
    "Request failed with status code " + n.status,
    [ke.ERR_BAD_REQUEST, ke.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
const em = pn.isStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  function() {
    return {
      write: function(n, r, o, i, a, s) {
        const c = [];
        c.push(n + "=" + encodeURIComponent(r)), W.isNumber(o) && c.push("expires=" + new Date(o).toGMTString()), W.isString(i) && c.push("path=" + i), W.isString(a) && c.push("domain=" + a), s === !0 && c.push("secure"), document.cookie = c.join("; ");
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
function tm(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function nm(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Bu(e, t) {
  return e && !tm(t) ? nm(e, t) : t;
}
const rm = pn.isStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");
    let r;
    function o(i) {
      let a = i;
      return t && (n.setAttribute("href", a), a = n.href), n.setAttribute("href", a), {
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
    return r = o(window.location.href), function(a) {
      const s = W.isString(a) ? o(a) : a;
      return s.protocol === r.protocol && s.host === r.host;
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
function om(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function im(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let o = 0, i = 0, a;
  return t = t !== void 0 ? t : 1e3, function(c) {
    const l = Date.now(), f = r[i];
    a || (a = l), n[o] = c, r[o] = l;
    let d = i, v = 0;
    for (; d !== o; )
      v += n[d++], d = d % e;
    if (o = (o + 1) % e, o === i && (i = (i + 1) % e), l - a < t)
      return;
    const g = f && l - f;
    return g ? Math.round(v * 1e3 / g) : void 0;
  };
}
function Ic(e, t) {
  let n = 0;
  const r = im(50, 250);
  return (o) => {
    const i = o.loaded, a = o.lengthComputable ? o.total : void 0, s = i - n, c = r(s), l = i <= a;
    n = i;
    const f = {
      loaded: i,
      total: a,
      progress: a ? i / a : void 0,
      bytes: s,
      rate: c || void 0,
      estimated: c && a && l ? (a - i) / c : void 0,
      event: o
    };
    f[t ? "download" : "upload"] = !0, e(f);
  };
}
const am = typeof XMLHttpRequest < "u", sm = am && function(e) {
  return new Promise(function(n, r) {
    let o = e.data;
    const i = Pn.from(e.headers).normalize(), a = e.responseType;
    let s;
    function c() {
      e.cancelToken && e.cancelToken.unsubscribe(s), e.signal && e.signal.removeEventListener("abort", s);
    }
    W.isFormData(o) && (pn.isStandardBrowserEnv || pn.isStandardBrowserWebWorkerEnv ? i.setContentType(!1) : i.setContentType("multipart/form-data;", !1));
    let l = new XMLHttpRequest();
    if (e.auth) {
      const g = e.auth.username || "", p = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      i.set("Authorization", "Basic " + btoa(g + ":" + p));
    }
    const f = Bu(e.baseURL, e.url);
    l.open(e.method.toUpperCase(), ju(f, e.params, e.paramsSerializer), !0), l.timeout = e.timeout;
    function d() {
      if (!l)
        return;
      const g = Pn.from(
        "getAllResponseHeaders" in l && l.getAllResponseHeaders()
      ), h = {
        data: !a || a === "text" || a === "json" ? l.responseText : l.response,
        status: l.status,
        statusText: l.statusText,
        headers: g,
        config: e,
        request: l
      };
      Zh(function(y) {
        n(y), c();
      }, function(y) {
        r(y), c();
      }, h), l = null;
    }
    if ("onloadend" in l ? l.onloadend = d : l.onreadystatechange = function() {
      !l || l.readyState !== 4 || l.status === 0 && !(l.responseURL && l.responseURL.indexOf("file:") === 0) || setTimeout(d);
    }, l.onabort = function() {
      l && (r(new ke("Request aborted", ke.ECONNABORTED, e, l)), l = null);
    }, l.onerror = function() {
      r(new ke("Network Error", ke.ERR_NETWORK, e, l)), l = null;
    }, l.ontimeout = function() {
      let p = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const h = e.transitional || Hu;
      e.timeoutErrorMessage && (p = e.timeoutErrorMessage), r(new ke(
        p,
        h.clarifyTimeoutError ? ke.ETIMEDOUT : ke.ECONNABORTED,
        e,
        l
      )), l = null;
    }, pn.isStandardBrowserEnv) {
      const g = (e.withCredentials || rm(f)) && e.xsrfCookieName && em.read(e.xsrfCookieName);
      g && i.set(e.xsrfHeaderName, g);
    }
    o === void 0 && i.setContentType(null), "setRequestHeader" in l && W.forEach(i.toJSON(), function(p, h) {
      l.setRequestHeader(h, p);
    }), W.isUndefined(e.withCredentials) || (l.withCredentials = !!e.withCredentials), a && a !== "json" && (l.responseType = e.responseType), typeof e.onDownloadProgress == "function" && l.addEventListener("progress", Ic(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && l.upload && l.upload.addEventListener("progress", Ic(e.onUploadProgress)), (e.cancelToken || e.signal) && (s = (g) => {
      l && (r(!g || g.type ? new ho(null, e, l) : g), l.abort(), l = null);
    }, e.cancelToken && e.cancelToken.subscribe(s), e.signal && (e.signal.aborted ? s() : e.signal.addEventListener("abort", s)));
    const v = om(f);
    if (v && pn.protocols.indexOf(v) === -1) {
      r(new ke("Unsupported protocol " + v + ":", ke.ERR_BAD_REQUEST, e));
      return;
    }
    l.send(o || null);
  });
}, Uo = {
  http: Ih,
  xhr: sm
};
W.forEach(Uo, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const cm = {
  getAdapter: (e) => {
    e = W.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    for (let o = 0; o < t && (n = e[o], !(r = W.isString(n) ? Uo[n.toLowerCase()] : n)); o++)
      ;
    if (!r)
      throw r === !1 ? new ke(
        `Adapter ${n} is not supported by the environment`,
        "ERR_NOT_SUPPORT"
      ) : new Error(
        W.hasOwnProp(Uo, n) ? `Adapter '${n}' is not available in the build` : `Unknown adapter '${n}'`
      );
    if (!W.isFunction(r))
      throw new TypeError("adapter is not a function");
    return r;
  },
  adapters: Uo
};
function ea(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new ho(null, e);
}
function $c(e) {
  return ea(e), e.headers = Pn.from(e.headers), e.data = Zi.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), cm.getAdapter(e.adapter || Ds.adapter)(e).then(function(r) {
    return ea(e), r.data = Zi.call(
      e,
      e.transformResponse,
      r
    ), r.headers = Pn.from(r.headers), r;
  }, function(r) {
    return Vu(r) || (ea(e), r && r.response && (r.response.data = Zi.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = Pn.from(r.response.headers))), Promise.reject(r);
  });
}
const Ac = (e) => e instanceof Pn ? e.toJSON() : e;
function Cr(e, t) {
  t = t || {};
  const n = {};
  function r(l, f, d) {
    return W.isPlainObject(l) && W.isPlainObject(f) ? W.merge.call({ caseless: d }, l, f) : W.isPlainObject(f) ? W.merge({}, f) : W.isArray(f) ? f.slice() : f;
  }
  function o(l, f, d) {
    if (W.isUndefined(f)) {
      if (!W.isUndefined(l))
        return r(void 0, l, d);
    } else
      return r(l, f, d);
  }
  function i(l, f) {
    if (!W.isUndefined(f))
      return r(void 0, f);
  }
  function a(l, f) {
    if (W.isUndefined(f)) {
      if (!W.isUndefined(l))
        return r(void 0, l);
    } else
      return r(void 0, f);
  }
  function s(l, f, d) {
    if (d in t)
      return r(l, f);
    if (d in e)
      return r(void 0, l);
  }
  const c = {
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
    headers: (l, f) => o(Ac(l), Ac(f), !0)
  };
  return W.forEach(Object.keys(Object.assign({}, e, t)), function(f) {
    const d = c[f] || o, v = d(e[f], t[f], f);
    W.isUndefined(v) && d !== s || (n[f] = v);
  }), n;
}
const Wu = "1.4.0", Ls = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Ls[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Fc = {};
Ls.transitional = function(t, n, r) {
  function o(i, a) {
    return "[Axios v" + Wu + "] Transitional option '" + i + "'" + a + (r ? ". " + r : "");
  }
  return (i, a, s) => {
    if (t === !1)
      throw new ke(
        o(a, " has been removed" + (n ? " in " + n : "")),
        ke.ERR_DEPRECATED
      );
    return n && !Fc[a] && (Fc[a] = !0, console.warn(
      o(
        a,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(i, a, s) : !0;
  };
};
function lm(e, t, n) {
  if (typeof e != "object")
    throw new ke("options must be an object", ke.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const i = r[o], a = t[i];
    if (a) {
      const s = e[i], c = s === void 0 || a(s, i, e);
      if (c !== !0)
        throw new ke("option " + i + " must be " + c, ke.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new ke("Unknown option " + i, ke.ERR_BAD_OPTION);
  }
}
const Ma = {
  assertOptions: lm,
  validators: Ls
}, In = Ma.validators;
class ni {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new Nc(),
      response: new Nc()
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
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = Cr(this.defaults, n);
    const { transitional: r, paramsSerializer: o, headers: i } = n;
    r !== void 0 && Ma.assertOptions(r, {
      silentJSONParsing: In.transitional(In.boolean),
      forcedJSONParsing: In.transitional(In.boolean),
      clarifyTimeoutError: In.transitional(In.boolean)
    }, !1), o != null && (W.isFunction(o) ? n.paramsSerializer = {
      serialize: o
    } : Ma.assertOptions(o, {
      encode: In.function,
      serialize: In.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let a;
    a = i && W.merge(
      i.common,
      i[n.method]
    ), a && W.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (p) => {
        delete i[p];
      }
    ), n.headers = Pn.concat(a, i);
    const s = [];
    let c = !0;
    this.interceptors.request.forEach(function(h) {
      typeof h.runWhen == "function" && h.runWhen(n) === !1 || (c = c && h.synchronous, s.unshift(h.fulfilled, h.rejected));
    });
    const l = [];
    this.interceptors.response.forEach(function(h) {
      l.push(h.fulfilled, h.rejected);
    });
    let f, d = 0, v;
    if (!c) {
      const p = [$c.bind(this), void 0];
      for (p.unshift.apply(p, s), p.push.apply(p, l), v = p.length, f = Promise.resolve(n); d < v; )
        f = f.then(p[d++], p[d++]);
      return f;
    }
    v = s.length;
    let g = n;
    for (d = 0; d < v; ) {
      const p = s[d++], h = s[d++];
      try {
        g = p(g);
      } catch (m) {
        h.call(this, m);
        break;
      }
    }
    try {
      f = $c.call(this, g);
    } catch (p) {
      return Promise.reject(p);
    }
    for (d = 0, v = l.length; d < v; )
      f = f.then(l[d++], l[d++]);
    return f;
  }
  getUri(t) {
    t = Cr(this.defaults, t);
    const n = Bu(t.baseURL, t.url);
    return ju(n, t.params, t.paramsSerializer);
  }
}
W.forEach(["delete", "get", "head", "options"], function(t) {
  ni.prototype[t] = function(n, r) {
    return this.request(Cr(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
W.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(i, a, s) {
      return this.request(Cr(s || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: a
      }));
    };
  }
  ni.prototype[t] = n(), ni.prototype[t + "Form"] = n(!0);
});
const Ko = ni;
class ks {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(i) {
      n = i;
    });
    const r = this;
    this.promise.then((o) => {
      if (!r._listeners)
        return;
      let i = r._listeners.length;
      for (; i-- > 0; )
        r._listeners[i](o);
      r._listeners = null;
    }), this.promise.then = (o) => {
      let i;
      const a = new Promise((s) => {
        r.subscribe(s), i = s;
      }).then(o);
      return a.cancel = function() {
        r.unsubscribe(i);
      }, a;
    }, t(function(i, a, s) {
      r.reason || (r.reason = new ho(i, a, s), n(r.reason));
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
      token: new ks(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
}
const um = ks;
function fm(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function dm(e) {
  return W.isObject(e) && e.isAxiosError === !0;
}
const Ia = {
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
Object.entries(Ia).forEach(([e, t]) => {
  Ia[t] = e;
});
const vm = Ia;
function Uu(e) {
  const t = new Ko(e), n = Ru(Ko.prototype.request, t);
  return W.extend(n, Ko.prototype, t, { allOwnKeys: !0 }), W.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(o) {
    return Uu(Cr(e, o));
  }, n;
}
const Et = Uu(Ds);
Et.Axios = Ko;
Et.CanceledError = ho;
Et.CancelToken = um;
Et.isCancel = Vu;
Et.VERSION = Wu;
Et.toFormData = Pi;
Et.AxiosError = ke;
Et.Cancel = Et.CanceledError;
Et.all = function(t) {
  return Promise.all(t);
};
Et.spread = fm;
Et.isAxiosError = dm;
Et.mergeConfig = Cr;
Et.AxiosHeaders = Pn;
Et.formToJSON = (e) => zu(W.isHTMLForm(e) ? new FormData(e) : e);
Et.HttpStatusCode = vm;
Et.default = Et;
const hm = Et;
process.env.CLIENT_URL;
process.env.SERVER_PREFIX;
process.env.SERVER_PORT;
process.env.CODE_COMPILER_API_URL;
const mm = process.env.SERVER_URL ?? "http://localhost:6868", Bw = hm.create({
  baseURL: mm,
  withCredentials: !0
}), pm = {
  EDITOR_THEME: "EDITOR_THEME",
  EDITOR_CONTENT_DATA: "EDITOR_CONTENT_DATA",
  EDITOR_EXECUTE_MESSAGES: "EDITOR_EXECUTE_MESSAGES",
  EDITOR_FONT_SIZE: "EDITOR_FONT_SIZE",
  EDITOR_TAB_SIZE: "EDITOR_TAB_SIZE",
  EDITOR_CUSTOM_BACKGROUND: "EDITOR_CUSTOM_BACKGROUND",
  EDITOR_CUSTOM_COLOR: "EDITOR_CUSTOM_COLOR",
  EDITOR_HTML_PREVIEW: "EDITOR_HTML_PREVIEW"
}, Ww = {
  MAIN: "/",
  EDITOR: "/edit",
  ABOUT: "/about"
}, Uw = () => {
  const [e, t] = Yt([]);
  return {
    on: (n) => {
      Object.entries(n).forEach(([r, o]) => {
        const i = (a) => {
          if (a.altKey && a.key === r.toLowerCase())
            return a.preventDefault(), o?.(), !1;
        };
        t([...e, i]), document.addEventListener("keydown", i);
      });
    },
    clear: () => {
      e.forEach((n) => {
        document.removeEventListener("keydown", n);
      });
    }
  };
}, gm = (e = !1) => {
  const [t, n] = Yt(e);
  return {
    off: () => n(!1),
    on: () => n(!0),
    toggle: () => n(!t),
    val: t
  };
}, Kw = (e, t) => {
  const n = Ae();
  return (...r) => {
    n.current && clearTimeout(n.current), n.current = setTimeout(() => {
      e(...r);
    }, t);
  };
}, Gw = () => () => {
  if (!document.fullscreenElement)
    return document.documentElement.requestFullscreen();
  document.exitFullscreen && document.exitFullscreen();
}, Ku = ({ when: e, children: t }) => e ? t : null, qw = ({ children: e }) => /* @__PURE__ */ ct(Om, { children: e }), Gu = fo({}), ym = async () => Promise.all([
  import("./react-spring_web.modern-d55cb301.mjs"),
  import("./use-gesture-react.esm-862244eb.mjs")
]), qu = ({ children: e }) => {
  const t = Ae(), n = Ae(), r = gm(), o = async () => {
    const [a, s] = await ym();
    t.current = a, n.current = s, r.on();
  };
  jt(() => {
    o();
  }, []);
  const i = wr(
    () => ({
      Spring: t.current,
      Gesture: n.current,
      isLoaded: r.val
    }),
    [r.val]
  );
  return /* @__PURE__ */ ct(Gu.Provider, { value: i, children: /* @__PURE__ */ ct(Ku, { when: r.val, children: e }) });
}, Yu = () => Ft(Gu);
var Ot;
Ot = { __e: function(e, t, n, r) {
  for (var o, i, a; t = t.__; )
    if ((o = t.__c) && !o.__)
      try {
        if ((i = o.constructor) && i.getDerivedStateFromError != null && (o.setState(i.getDerivedStateFromError(e)), a = o.__d), o.componentDidCatch != null && (o.componentDidCatch(e, r || {}), a = o.__d), a)
          return o.__E = o;
      } catch (s) {
        e = s;
      }
  throw e;
} }, typeof Promise == "function" && Promise.prototype.then.bind(Promise.resolve());
var ri, lt, ta, Dc, $a = 0, Xu = [], Go = [], Lc = Ot.__b, kc = Ot.__r, jc = Ot.diffed, Hc = Ot.__c, zc = Ot.unmount;
function Qu(e, t) {
  Ot.__h && Ot.__h(lt, e, $a || t), $a = 0;
  var n = lt.__H || (lt.__H = { __: [], __h: [] });
  return e >= n.__.length && n.__.push({ __V: Go }), n.__[e];
}
function bm(e) {
  return $a = 1, Sm(Ju, e);
}
function Sm(e, t, n) {
  var r = Qu(ri++, 2);
  if (r.t = e, !r.__c && (r.__ = [n ? n(t) : Ju(void 0, t), function(s) {
    var c = r.__N ? r.__N[0] : r.__[0], l = r.t(c, s);
    c !== l && (r.__N = [l, r.__[1]], r.__c.setState({}));
  }], r.__c = lt, !lt.u)) {
    var o = function(s, c, l) {
      if (!r.__c.__H)
        return !0;
      var f = r.__c.__H.__.filter(function(v) {
        return v.__c;
      });
      if (f.every(function(v) {
        return !v.__N;
      }))
        return !i || i.call(this, s, c, l);
      var d = !1;
      return f.forEach(function(v) {
        if (v.__N) {
          var g = v.__[0];
          v.__ = v.__N, v.__N = void 0, g !== v.__[0] && (d = !0);
        }
      }), !(!d && r.__c.props === s) && (!i || i.call(this, s, c, l));
    };
    lt.u = !0;
    var i = lt.shouldComponentUpdate, a = lt.componentWillUpdate;
    lt.componentWillUpdate = function(s, c, l) {
      if (this.__e) {
        var f = i;
        i = void 0, o(s, c, l), i = f;
      }
      a && a.call(this, s, c, l);
    }, lt.shouldComponentUpdate = o;
  }
  return r.__N || r.__;
}
function Em(e) {
  var t = Qu(ri++, 10), n = bm();
  return t.__ = e, lt.componentDidCatch || (lt.componentDidCatch = function(r, o) {
    t.__ && t.__(r, o), n[1](r);
  }), [n[0], function() {
    n[1](void 0);
  }];
}
function wm() {
  for (var e; e = Xu.shift(); )
    if (e.__P && e.__H)
      try {
        e.__H.__h.forEach(qo), e.__H.__h.forEach(Aa), e.__H.__h = [];
      } catch (t) {
        e.__H.__h = [], Ot.__e(t, e.__v);
      }
}
Ot.__b = function(e) {
  lt = null, Lc && Lc(e);
}, Ot.__r = function(e) {
  kc && kc(e), ri = 0;
  var t = (lt = e.__c).__H;
  t && (ta === lt ? (t.__h = [], lt.__h = [], t.__.forEach(function(n) {
    n.__N && (n.__ = n.__N), n.__V = Go, n.__N = n.i = void 0;
  })) : (t.__h.forEach(qo), t.__h.forEach(Aa), t.__h = [], ri = 0)), ta = lt;
}, Ot.diffed = function(e) {
  jc && jc(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (Xu.push(t) !== 1 && Dc === Ot.requestAnimationFrame || ((Dc = Ot.requestAnimationFrame) || Cm)(wm)), t.__H.__.forEach(function(n) {
    n.i && (n.__H = n.i), n.__V !== Go && (n.__ = n.__V), n.i = void 0, n.__V = Go;
  })), ta = lt = null;
}, Ot.__c = function(e, t) {
  t.some(function(n) {
    try {
      n.__h.forEach(qo), n.__h = n.__h.filter(function(r) {
        return !r.__ || Aa(r);
      });
    } catch (r) {
      t.some(function(o) {
        o.__h && (o.__h = []);
      }), t = [], Ot.__e(r, n.__v);
    }
  }), Hc && Hc(e, t);
}, Ot.unmount = function(e) {
  zc && zc(e);
  var t, n = e.__c;
  n && n.__H && (n.__H.__.forEach(function(r) {
    try {
      qo(r);
    } catch (o) {
      t = o;
    }
  }), n.__H = void 0, t && Ot.__e(t, n.__v));
};
var Vc = typeof requestAnimationFrame == "function";
function Cm(e) {
  var t, n = function() {
    clearTimeout(r), Vc && cancelAnimationFrame(t), setTimeout(e);
  }, r = setTimeout(n, 100);
  Vc && (t = requestAnimationFrame(n));
}
function qo(e) {
  var t = lt, n = e.__c;
  typeof n == "function" && (e.__c = void 0, n()), lt = t;
}
function Aa(e) {
  var t = lt;
  e.__c = e.__(), lt = t;
}
function Ju(e, t) {
  return typeof t == "function" ? t(e) : t;
}
const xm = () => /* @__PURE__ */ _u("div", { children: [
  "Custom Error Boundary. ",
  /* @__PURE__ */ ct("br", {})
] }), Om = ({ children: e }) => {
  const [t] = Em();
  return console.error(t), t ? /* @__PURE__ */ ct(xm, { errorInfo: t }) : /* @__PURE__ */ ct(Is, { children: e });
};
function on(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function je(e) {
  "@babel/helpers - typeof";
  return je = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, je(e);
}
function _m(e, t) {
  if (je(e) !== "object" || e === null)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (je(r) !== "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Zu(e) {
  var t = _m(e, "string");
  return je(t) === "symbol" ? t : String(t);
}
function Bc(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Zu(r.key), r);
  }
}
function an(e, t, n) {
  return t && Bc(e.prototype, t), n && Bc(e, n), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function Fa(e, t) {
  return Fa = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, Fa(e, t);
}
function mo(e, t) {
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
  }), t && Fa(e, t);
}
function oi(e) {
  return oi = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, oi(e);
}
function Rm() {
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
function ii(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Pm(e, t) {
  if (t && (je(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return ii(e);
}
function po(e) {
  var t = Rm();
  return function() {
    var r = oi(e), o;
    if (t) {
      var i = oi(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else
      o = r.apply(this, arguments);
    return Pm(this, o);
  };
}
function ef(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var tf = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function n() {
      for (var r = [], o = 0; o < arguments.length; o++) {
        var i = arguments[o];
        if (i) {
          var a = typeof i;
          if (a === "string" || a === "number")
            r.push(i);
          else if (Array.isArray(i)) {
            if (i.length) {
              var s = n.apply(null, i);
              s && r.push(s);
            }
          } else if (a === "object") {
            if (i.toString !== Object.prototype.toString && !i.toString.toString().includes("[native code]")) {
              r.push(i.toString());
              continue;
            }
            for (var c in i)
              t.call(i, c) && i[c] && r.push(c);
          }
        }
      }
      return r.join(" ");
    }
    e.exports ? (n.default = n, e.exports = n) : window.classNames = n;
  })();
})(tf);
var Tm = tf.exports;
const Re = /* @__PURE__ */ ef(Tm);
function Te() {
  return Te = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Te.apply(this, arguments);
}
var Da = { exports: {} }, Be = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wc;
function Nm() {
  if (Wc)
    return Be;
  Wc = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, p = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, y = e ? Symbol.for("react.responder") : 60118, b = e ? Symbol.for("react.scope") : 60119;
  function E(S) {
    if (typeof S == "object" && S !== null) {
      var C = S.$$typeof;
      switch (C) {
        case t:
          switch (S = S.type, S) {
            case c:
            case l:
            case r:
            case i:
            case o:
            case d:
              return S;
            default:
              switch (S = S && S.$$typeof, S) {
                case s:
                case f:
                case p:
                case g:
                case a:
                  return S;
                default:
                  return C;
              }
          }
        case n:
          return C;
      }
    }
  }
  function w(S) {
    return E(S) === l;
  }
  return Be.AsyncMode = c, Be.ConcurrentMode = l, Be.ContextConsumer = s, Be.ContextProvider = a, Be.Element = t, Be.ForwardRef = f, Be.Fragment = r, Be.Lazy = p, Be.Memo = g, Be.Portal = n, Be.Profiler = i, Be.StrictMode = o, Be.Suspense = d, Be.isAsyncMode = function(S) {
    return w(S) || E(S) === c;
  }, Be.isConcurrentMode = w, Be.isContextConsumer = function(S) {
    return E(S) === s;
  }, Be.isContextProvider = function(S) {
    return E(S) === a;
  }, Be.isElement = function(S) {
    return typeof S == "object" && S !== null && S.$$typeof === t;
  }, Be.isForwardRef = function(S) {
    return E(S) === f;
  }, Be.isFragment = function(S) {
    return E(S) === r;
  }, Be.isLazy = function(S) {
    return E(S) === p;
  }, Be.isMemo = function(S) {
    return E(S) === g;
  }, Be.isPortal = function(S) {
    return E(S) === n;
  }, Be.isProfiler = function(S) {
    return E(S) === i;
  }, Be.isStrictMode = function(S) {
    return E(S) === o;
  }, Be.isSuspense = function(S) {
    return E(S) === d;
  }, Be.isValidElementType = function(S) {
    return typeof S == "string" || typeof S == "function" || S === r || S === l || S === i || S === o || S === d || S === v || typeof S == "object" && S !== null && (S.$$typeof === p || S.$$typeof === g || S.$$typeof === a || S.$$typeof === s || S.$$typeof === f || S.$$typeof === m || S.$$typeof === y || S.$$typeof === b || S.$$typeof === h);
  }, Be.typeOf = E, Be;
}
var We = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Uc;
function Mm() {
  return Uc || (Uc = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, p = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, y = e ? Symbol.for("react.responder") : 60118, b = e ? Symbol.for("react.scope") : 60119;
    function E(A) {
      return typeof A == "string" || typeof A == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      A === r || A === l || A === i || A === o || A === d || A === v || typeof A == "object" && A !== null && (A.$$typeof === p || A.$$typeof === g || A.$$typeof === a || A.$$typeof === s || A.$$typeof === f || A.$$typeof === m || A.$$typeof === y || A.$$typeof === b || A.$$typeof === h);
    }
    function w(A) {
      if (typeof A == "object" && A !== null) {
        var re = A.$$typeof;
        switch (re) {
          case t:
            var L = A.type;
            switch (L) {
              case c:
              case l:
              case r:
              case i:
              case o:
              case d:
                return L;
              default:
                var Z = L && L.$$typeof;
                switch (Z) {
                  case s:
                  case f:
                  case p:
                  case g:
                  case a:
                    return Z;
                  default:
                    return re;
                }
            }
          case n:
            return re;
        }
      }
    }
    var S = c, C = l, _ = s, N = a, M = t, R = f, k = r, x = p, O = g, P = n, I = i, $ = o, D = d, B = !1;
    function K(A) {
      return B || (B = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), ne(A) || w(A) === c;
    }
    function ne(A) {
      return w(A) === l;
    }
    function ce(A) {
      return w(A) === s;
    }
    function j(A) {
      return w(A) === a;
    }
    function H(A) {
      return typeof A == "object" && A !== null && A.$$typeof === t;
    }
    function z(A) {
      return w(A) === f;
    }
    function G(A) {
      return w(A) === r;
    }
    function T(A) {
      return w(A) === p;
    }
    function q(A) {
      return w(A) === g;
    }
    function F(A) {
      return w(A) === n;
    }
    function Y(A) {
      return w(A) === i;
    }
    function te(A) {
      return w(A) === o;
    }
    function Q(A) {
      return w(A) === d;
    }
    We.AsyncMode = S, We.ConcurrentMode = C, We.ContextConsumer = _, We.ContextProvider = N, We.Element = M, We.ForwardRef = R, We.Fragment = k, We.Lazy = x, We.Memo = O, We.Portal = P, We.Profiler = I, We.StrictMode = $, We.Suspense = D, We.isAsyncMode = K, We.isConcurrentMode = ne, We.isContextConsumer = ce, We.isContextProvider = j, We.isElement = H, We.isForwardRef = z, We.isFragment = G, We.isLazy = T, We.isMemo = q, We.isPortal = F, We.isProfiler = Y, We.isStrictMode = te, We.isSuspense = Q, We.isValidElementType = E, We.typeOf = w;
  }()), We;
}
process.env.NODE_ENV === "production" ? Da.exports = Nm() : Da.exports = Mm();
var js = Da.exports;
function Qn(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = [];
  return Pe.Children.forEach(e, function(r) {
    r == null && !t.keepEmpty || (Array.isArray(r) ? n = n.concat(Qn(r)) : js.isFragment(r) && r.props ? n = n.concat(Qn(r.props.children, t)) : n.push(r));
  }), n;
}
var La = {}, Hs = [], Im = function(t) {
  Hs.push(t);
};
function to(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var n = Hs.reduce(function(r, o) {
      return o(r ?? "", "warning");
    }, t);
    n && console.error("Warning: ".concat(n));
  }
}
function $m(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var n = Hs.reduce(function(r, o) {
      return o(r ?? "", "note");
    }, t);
    n && console.warn("Note: ".concat(n));
  }
}
function nf() {
  La = {};
}
function rf(e, t, n) {
  !t && !La[n] && (e(!1, n), La[n] = !0);
}
function Fe(e, t) {
  rf(to, e, t);
}
function ka(e, t) {
  rf($m, e, t);
}
Fe.preMessage = Im;
Fe.resetWarned = nf;
Fe.noteOnce = ka;
function he(e, t, n) {
  return t = Zu(t), t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Kc(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function V(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Kc(Object(n), !0).forEach(function(r) {
      he(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Kc(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Mi(e, t, n) {
  var r = u.useRef({});
  return (!("value" in r.current) || n(r.current.condition, t)) && (r.current.value = e(), r.current.condition = t), r.current.value;
}
function zs(e, t) {
  typeof e == "function" ? e(t) : je(e) === "object" && e && "current" in e && (e.current = t);
}
function Mr() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r = t.filter(function(o) {
    return o;
  });
  return r.length <= 1 ? r[0] : function(o) {
    t.forEach(function(i) {
      zs(i, o);
    });
  };
}
function Vs() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return Mi(function() {
    return Mr.apply(void 0, t);
  }, t, function(r, o) {
    return r.length === o.length && r.every(function(i, a) {
      return i === o[a];
    });
  });
}
function go(e) {
  var t, n, r = js.isMemo(e) ? e.type.type : e.type;
  return !(typeof r == "function" && !((t = r.prototype) !== null && t !== void 0 && t.render) || typeof e == "function" && !((n = e.prototype) !== null && n !== void 0 && n.render));
}
function ai(e) {
  return e instanceof HTMLElement || e instanceof SVGElement;
}
function si(e) {
  return ai(e) ? e : e instanceof Pe.Component ? Yv.findDOMNode(e) : null;
}
var of = function() {
  if (typeof Map < "u")
    return Map;
  function e(t, n) {
    var r = -1;
    return t.some(function(o, i) {
      return o[0] === n ? (r = i, !0) : !1;
    }), r;
  }
  return (
    /** @class */
    function() {
      function t() {
        this.__entries__ = [];
      }
      return Object.defineProperty(t.prototype, "size", {
        /**
         * @returns {boolean}
         */
        get: function() {
          return this.__entries__.length;
        },
        enumerable: !0,
        configurable: !0
      }), t.prototype.get = function(n) {
        var r = e(this.__entries__, n), o = this.__entries__[r];
        return o && o[1];
      }, t.prototype.set = function(n, r) {
        var o = e(this.__entries__, n);
        ~o ? this.__entries__[o][1] = r : this.__entries__.push([n, r]);
      }, t.prototype.delete = function(n) {
        var r = this.__entries__, o = e(r, n);
        ~o && r.splice(o, 1);
      }, t.prototype.has = function(n) {
        return !!~e(this.__entries__, n);
      }, t.prototype.clear = function() {
        this.__entries__.splice(0);
      }, t.prototype.forEach = function(n, r) {
        r === void 0 && (r = null);
        for (var o = 0, i = this.__entries__; o < i.length; o++) {
          var a = i[o];
          n.call(r, a[1], a[0]);
        }
      }, t;
    }()
  );
}(), ja = typeof window < "u" && typeof document < "u" && window.document === document, ci = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), Am = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(ci) : function(e) {
    return setTimeout(function() {
      return e(Date.now());
    }, 1e3 / 60);
  };
}(), Fm = 2;
function Dm(e, t) {
  var n = !1, r = !1, o = 0;
  function i() {
    n && (n = !1, e()), r && s();
  }
  function a() {
    Am(i);
  }
  function s() {
    var c = Date.now();
    if (n) {
      if (c - o < Fm)
        return;
      r = !0;
    } else
      n = !0, r = !1, setTimeout(a, t);
    o = c;
  }
  return s;
}
var Lm = 20, km = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], jm = typeof MutationObserver < "u", Hm = (
  /** @class */
  function() {
    function e() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = Dm(this.refresh.bind(this), Lm);
    }
    return e.prototype.addObserver = function(t) {
      ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_();
    }, e.prototype.removeObserver = function(t) {
      var n = this.observers_, r = n.indexOf(t);
      ~r && n.splice(r, 1), !n.length && this.connected_ && this.disconnect_();
    }, e.prototype.refresh = function() {
      var t = this.updateObservers_();
      t && this.refresh();
    }, e.prototype.updateObservers_ = function() {
      var t = this.observers_.filter(function(n) {
        return n.gatherActive(), n.hasActive();
      });
      return t.forEach(function(n) {
        return n.broadcastActive();
      }), t.length > 0;
    }, e.prototype.connect_ = function() {
      !ja || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), jm ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, e.prototype.disconnect_ = function() {
      !ja || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, e.prototype.onTransitionEnd_ = function(t) {
      var n = t.propertyName, r = n === void 0 ? "" : n, o = km.some(function(i) {
        return !!~r.indexOf(i);
      });
      o && this.refresh();
    }, e.getInstance = function() {
      return this.instance_ || (this.instance_ = new e()), this.instance_;
    }, e.instance_ = null, e;
  }()
), af = function(e, t) {
  for (var n = 0, r = Object.keys(t); n < r.length; n++) {
    var o = r[n];
    Object.defineProperty(e, o, {
      value: t[o],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return e;
}, xr = function(e) {
  var t = e && e.ownerDocument && e.ownerDocument.defaultView;
  return t || ci;
}, sf = Ii(0, 0, 0, 0);
function li(e) {
  return parseFloat(e) || 0;
}
function Gc(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  return t.reduce(function(r, o) {
    var i = e["border-" + o + "-width"];
    return r + li(i);
  }, 0);
}
function zm(e) {
  for (var t = ["top", "right", "bottom", "left"], n = {}, r = 0, o = t; r < o.length; r++) {
    var i = o[r], a = e["padding-" + i];
    n[i] = li(a);
  }
  return n;
}
function Vm(e) {
  var t = e.getBBox();
  return Ii(0, 0, t.width, t.height);
}
function Bm(e) {
  var t = e.clientWidth, n = e.clientHeight;
  if (!t && !n)
    return sf;
  var r = xr(e).getComputedStyle(e), o = zm(r), i = o.left + o.right, a = o.top + o.bottom, s = li(r.width), c = li(r.height);
  if (r.boxSizing === "border-box" && (Math.round(s + i) !== t && (s -= Gc(r, "left", "right") + i), Math.round(c + a) !== n && (c -= Gc(r, "top", "bottom") + a)), !Um(e)) {
    var l = Math.round(s + i) - t, f = Math.round(c + a) - n;
    Math.abs(l) !== 1 && (s -= l), Math.abs(f) !== 1 && (c -= f);
  }
  return Ii(o.left, o.top, s, c);
}
var Wm = function() {
  return typeof SVGGraphicsElement < "u" ? function(e) {
    return e instanceof xr(e).SVGGraphicsElement;
  } : function(e) {
    return e instanceof xr(e).SVGElement && typeof e.getBBox == "function";
  };
}();
function Um(e) {
  return e === xr(e).document.documentElement;
}
function Km(e) {
  return ja ? Wm(e) ? Vm(e) : Bm(e) : sf;
}
function Gm(e) {
  var t = e.x, n = e.y, r = e.width, o = e.height, i = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, a = Object.create(i.prototype);
  return af(a, {
    x: t,
    y: n,
    width: r,
    height: o,
    top: n,
    right: t + r,
    bottom: o + n,
    left: t
  }), a;
}
function Ii(e, t, n, r) {
  return { x: e, y: t, width: n, height: r };
}
var qm = (
  /** @class */
  function() {
    function e(t) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Ii(0, 0, 0, 0), this.target = t;
    }
    return e.prototype.isActive = function() {
      var t = Km(this.target);
      return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight;
    }, e.prototype.broadcastRect = function() {
      var t = this.contentRect_;
      return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t;
    }, e;
  }()
), Ym = (
  /** @class */
  function() {
    function e(t, n) {
      var r = Gm(n);
      af(this, { target: t, contentRect: r });
    }
    return e;
  }()
), Xm = (
  /** @class */
  function() {
    function e(t, n, r) {
      if (this.activeObservations_ = [], this.observations_ = new of(), typeof t != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = t, this.controller_ = n, this.callbackCtx_ = r;
    }
    return e.prototype.observe = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof xr(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var n = this.observations_;
        n.has(t) || (n.set(t, new qm(t)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, e.prototype.unobserve = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof xr(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var n = this.observations_;
        n.has(t) && (n.delete(t), n.size || this.controller_.removeObserver(this));
      }
    }, e.prototype.disconnect = function() {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, e.prototype.gatherActive = function() {
      var t = this;
      this.clearActive(), this.observations_.forEach(function(n) {
        n.isActive() && t.activeObservations_.push(n);
      });
    }, e.prototype.broadcastActive = function() {
      if (this.hasActive()) {
        var t = this.callbackCtx_, n = this.activeObservations_.map(function(r) {
          return new Ym(r.target, r.broadcastRect());
        });
        this.callback_.call(t, n, t), this.clearActive();
      }
    }, e.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, e.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, e;
  }()
), cf = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new of(), lf = (
  /** @class */
  function() {
    function e(t) {
      if (!(this instanceof e))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var n = Hm.getInstance(), r = new Xm(t, n, this);
      cf.set(this, r);
    }
    return e;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(e) {
  lf.prototype[e] = function() {
    var t;
    return (t = cf.get(this))[e].apply(t, arguments);
  };
});
var Qm = function() {
  return typeof ci.ResizeObserver < "u" ? ci.ResizeObserver : lf;
}(), _n = /* @__PURE__ */ new Map();
function uf(e) {
  e.forEach(function(t) {
    var n, r = t.target;
    (n = _n.get(r)) === null || n === void 0 || n.forEach(function(o) {
      return o(r);
    });
  });
}
var ff = new Qm(uf);
process.env.NODE_ENV;
process.env.NODE_ENV;
function Jm(e, t) {
  _n.has(e) || (_n.set(e, /* @__PURE__ */ new Set()), ff.observe(e)), _n.get(e).add(t);
}
function Zm(e, t) {
  _n.has(e) && (_n.get(e).delete(t), _n.get(e).size || (ff.unobserve(e), _n.delete(e)));
}
var ep = /* @__PURE__ */ function(e) {
  mo(n, e);
  var t = po(n);
  function n() {
    return on(this, n), t.apply(this, arguments);
  }
  return an(n, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), n;
}(u.Component), Ha = /* @__PURE__ */ u.createContext(null);
function tp(e) {
  var t = e.children, n = e.onBatchResize, r = u.useRef(0), o = u.useRef([]), i = u.useContext(Ha), a = u.useCallback(function(s, c, l) {
    r.current += 1;
    var f = r.current;
    o.current.push({
      size: s,
      element: c,
      data: l
    }), Promise.resolve().then(function() {
      f === r.current && (n?.(o.current), o.current = []);
    }), i?.(s, c, l);
  }, [n, i]);
  return /* @__PURE__ */ u.createElement(Ha.Provider, {
    value: a
  }, t);
}
function np(e, t) {
  var n = e.children, r = e.disabled, o = u.useRef(null), i = u.useRef(null), a = u.useContext(Ha), s = typeof n == "function", c = s ? n(o) : n, l = u.useRef({
    width: -1,
    height: -1,
    offsetWidth: -1,
    offsetHeight: -1
  }), f = !s && /* @__PURE__ */ u.isValidElement(c) && go(c), d = f ? c.ref : null, v = u.useMemo(function() {
    return Mr(d, o);
  }, [d, o]), g = function() {
    return si(o.current) || si(i.current);
  };
  u.useImperativeHandle(t, function() {
    return g();
  });
  var p = u.useRef(e);
  p.current = e;
  var h = u.useCallback(function(m) {
    var y = p.current, b = y.onResize, E = y.data, w = m.getBoundingClientRect(), S = w.width, C = w.height, _ = m.offsetWidth, N = m.offsetHeight, M = Math.floor(S), R = Math.floor(C);
    if (l.current.width !== M || l.current.height !== R || l.current.offsetWidth !== _ || l.current.offsetHeight !== N) {
      var k = {
        width: M,
        height: R,
        offsetWidth: _,
        offsetHeight: N
      };
      l.current = k;
      var x = _ === Math.round(S) ? S : _, O = N === Math.round(C) ? C : N, P = V(V({}, k), {}, {
        offsetWidth: x,
        offsetHeight: O
      });
      a?.(P, m, E), b && Promise.resolve().then(function() {
        b(P, m);
      });
    }
  }, []);
  return u.useEffect(function() {
    var m = g();
    return m && !r && Jm(m, h), function() {
      return Zm(m, h);
    };
  }, [o.current, r]), /* @__PURE__ */ u.createElement(ep, {
    ref: i
  }, f ? /* @__PURE__ */ u.cloneElement(c, {
    ref: v
  }) : c);
}
var df = /* @__PURE__ */ u.forwardRef(np);
process.env.NODE_ENV !== "production" && (df.displayName = "SingleObserver");
var rp = "rc-observer-key";
function op(e, t) {
  var n = e.children, r = typeof n == "function" ? [n] : Qn(n);
  return process.env.NODE_ENV !== "production" && (r.length > 1 ? to(!1, "Find more than one child node with `children` in ResizeObserver. Please use ResizeObserver.Collection instead.") : r.length === 0 && to(!1, "`children` of ResizeObserver is empty. Nothing is in observe.")), r.map(function(o, i) {
    var a = o?.key || "".concat(rp, "-").concat(i);
    return /* @__PURE__ */ u.createElement(df, Te({}, e, {
      key: a,
      ref: i === 0 ? t : void 0
    }), o);
  });
}
var Zn = /* @__PURE__ */ u.forwardRef(op);
process.env.NODE_ENV !== "production" && (Zn.displayName = "ResizeObserver");
Zn.Collection = tp;
function Bs(e, t) {
  var n = V({}, e);
  return Array.isArray(t) && t.forEach(function(r) {
    delete n[r];
  }), n;
}
function za(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function ip(e) {
  if (Array.isArray(e))
    return za(e);
}
function vf(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function Ws(e, t) {
  if (e) {
    if (typeof e == "string")
      return za(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return za(e, t);
  }
}
function ap() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function me(e) {
  return ip(e) || vf(e) || Ws(e) || ap();
}
var hf = function(t) {
  return +setTimeout(t, 16);
}, mf = function(t) {
  return clearTimeout(t);
};
typeof window < "u" && "requestAnimationFrame" in window && (hf = function(t) {
  return window.requestAnimationFrame(t);
}, mf = function(t) {
  return window.cancelAnimationFrame(t);
});
var qc = 0, Us = /* @__PURE__ */ new Map();
function pf(e) {
  Us.delete(e);
}
var Tt = function(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  qc += 1;
  var r = qc;
  function o(i) {
    if (i === 0)
      pf(r), t();
    else {
      var a = hf(function() {
        o(i - 1);
      });
      Us.set(r, a);
    }
  }
  return o(n), r;
};
Tt.cancel = function(e) {
  var t = Us.get(e);
  return pf(t), mf(t);
};
function Ks(e) {
  for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4)
    n = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24, n = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= /* k >>> r: */
    n >>> 24, t = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(r) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
function sp(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function ut(e, t) {
  if (e == null)
    return {};
  var n = sp(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      r = i[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function gf(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, r = /* @__PURE__ */ new Set();
  function o(i, a) {
    var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, c = r.has(i);
    if (Fe(!c, "Warning: There may be circular references"), c)
      return !1;
    if (i === a)
      return !0;
    if (n && s > 1)
      return !1;
    r.add(i);
    var l = s + 1;
    if (Array.isArray(i)) {
      if (!Array.isArray(a) || i.length !== a.length)
        return !1;
      for (var f = 0; f < i.length; f++)
        if (!o(i[f], a[f], l))
          return !1;
      return !0;
    }
    if (i && a && je(i) === "object" && je(a) === "object") {
      var d = Object.keys(i);
      return d.length !== Object.keys(a).length ? !1 : d.every(function(v) {
        return o(i[v], a[v], l);
      });
    }
    return !1;
  }
  return o(e, t);
}
var Yc = "%", cp = /* @__PURE__ */ function() {
  function e(t) {
    on(this, e), he(this, "instanceId", void 0), he(this, "cache", /* @__PURE__ */ new Map()), this.instanceId = t;
  }
  return an(e, [{
    key: "get",
    value: function(n) {
      return this.cache.get(n.join(Yc)) || null;
    }
  }, {
    key: "update",
    value: function(n, r) {
      var o = n.join(Yc), i = this.cache.get(o), a = r(i);
      a === null ? this.cache.delete(o) : this.cache.set(o, a);
    }
  }]), e;
}(), Va = "data-token-hash", qn = "data-css-hash", lp = "data-cache-path", gr = "__cssinjs_instance__";
function up() {
  var e = Math.random().toString(12).slice(2);
  if (typeof document < "u" && document.head && document.body) {
    var t = document.body.querySelectorAll("style[".concat(qn, "]")) || [], n = document.head.firstChild;
    Array.from(t).forEach(function(o) {
      o[gr] = o[gr] || e, o[gr] === e && document.head.insertBefore(o, n);
    });
    var r = {};
    Array.from(document.querySelectorAll("style[".concat(qn, "]"))).forEach(function(o) {
      var i = o.getAttribute(qn);
      if (r[i]) {
        if (o[gr] === e) {
          var a;
          (a = o.parentNode) === null || a === void 0 || a.removeChild(o);
        }
      } else
        r[i] = !0;
    });
  }
  return new cp(e);
}
var Gs = /* @__PURE__ */ u.createContext({
  hashPriority: "low",
  cache: up(),
  defaultCache: !0
});
function Dt() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function fp(e, t) {
  if (!e)
    return !1;
  if (e.contains)
    return e.contains(t);
  for (var n = t; n; ) {
    if (n === e)
      return !0;
    n = n.parentNode;
  }
  return !1;
}
var Xc = "data-rc-order", Qc = "data-rc-priority", dp = "rc-util-key", Ba = /* @__PURE__ */ new Map();
function yf() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.mark;
  return t ? t.startsWith("data-") ? t : "data-".concat(t) : dp;
}
function $i(e) {
  if (e.attachTo)
    return e.attachTo;
  var t = document.querySelector("head");
  return t || document.body;
}
function vp(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function bf(e) {
  return Array.from((Ba.get(e) || e).children).filter(function(t) {
    return t.tagName === "STYLE";
  });
}
function Sf(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!Dt())
    return null;
  var n = t.csp, r = t.prepend, o = t.priority, i = o === void 0 ? 0 : o, a = vp(r), s = a === "prependQueue", c = document.createElement("style");
  c.setAttribute(Xc, a), s && i && c.setAttribute(Qc, "".concat(i)), n != null && n.nonce && (c.nonce = n?.nonce), c.innerHTML = e;
  var l = $i(t), f = l.firstChild;
  if (r) {
    if (s) {
      var d = bf(l).filter(function(v) {
        if (!["prepend", "prependQueue"].includes(v.getAttribute(Xc)))
          return !1;
        var g = Number(v.getAttribute(Qc) || 0);
        return i >= g;
      });
      if (d.length)
        return l.insertBefore(c, d[d.length - 1].nextSibling), c;
    }
    l.insertBefore(c, f);
  } else
    l.appendChild(c);
  return c;
}
function Ef(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = $i(t);
  return bf(n).find(function(r) {
    return r.getAttribute(yf(t)) === e;
  });
}
function ui(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = Ef(e, t);
  if (n) {
    var r = $i(t);
    r.removeChild(n);
  }
}
function hp(e, t) {
  var n = Ba.get(e);
  if (!n || !fp(document, n)) {
    var r = Sf("", t), o = r.parentNode;
    Ba.set(e, o), e.removeChild(r);
  }
}
function Or(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = $i(n);
  hp(r, n);
  var o = Ef(t, n);
  if (o) {
    var i, a;
    if ((i = n.csp) !== null && i !== void 0 && i.nonce && o.nonce !== ((a = n.csp) === null || a === void 0 ? void 0 : a.nonce)) {
      var s;
      o.nonce = (s = n.csp) === null || s === void 0 ? void 0 : s.nonce;
    }
    return o.innerHTML !== e && (o.innerHTML = e), o;
  }
  var c = Sf(e, n);
  return c.setAttribute(yf(n), t), c;
}
function wf(e) {
  if (Array.isArray(e))
    return e;
}
function mp(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, o, i, a, s = [], c = !0, l = !1;
    try {
      if (i = (n = n.call(e)).next, t === 0) {
        if (Object(n) !== n)
          return;
        c = !1;
      } else
        for (; !(c = (r = i.call(n)).done) && (s.push(r.value), s.length !== t); c = !0)
          ;
    } catch (f) {
      l = !0, o = f;
    } finally {
      try {
        if (!c && n.return != null && (a = n.return(), Object(a) !== a))
          return;
      } finally {
        if (l)
          throw o;
      }
    }
    return s;
  }
}
function Cf() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function U(e, t) {
  return wf(e) || mp(e, t) || Ws(e, t) || Cf();
}
function pp(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
var qs = /* @__PURE__ */ function() {
  function e() {
    on(this, e), he(this, "cache", void 0), he(this, "keys", void 0), he(this, "cacheCallTimes", void 0), this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
  }
  return an(e, [{
    key: "size",
    value: function() {
      return this.keys.length;
    }
  }, {
    key: "internalGet",
    value: function(n) {
      var r, o, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, a = {
        map: this.cache
      };
      return n.forEach(function(s) {
        if (!a)
          a = void 0;
        else {
          var c, l;
          a = (c = a) === null || c === void 0 || (l = c.map) === null || l === void 0 ? void 0 : l.get(s);
        }
      }), (r = a) !== null && r !== void 0 && r.value && i && (a.value[1] = this.cacheCallTimes++), (o = a) === null || o === void 0 ? void 0 : o.value;
    }
  }, {
    key: "get",
    value: function(n) {
      var r;
      return (r = this.internalGet(n, !0)) === null || r === void 0 ? void 0 : r[0];
    }
  }, {
    key: "has",
    value: function(n) {
      return !!this.internalGet(n);
    }
  }, {
    key: "set",
    value: function(n, r) {
      var o = this;
      if (!this.has(n)) {
        if (this.size() + 1 > e.MAX_CACHE_SIZE + e.MAX_CACHE_OFFSET) {
          var i = this.keys.reduce(function(l, f) {
            var d = U(l, 2), v = d[1];
            return o.internalGet(f)[1] < v ? [f, o.internalGet(f)[1]] : l;
          }, [this.keys[0], this.cacheCallTimes]), a = U(i, 1), s = a[0];
          this.delete(s);
        }
        this.keys.push(n);
      }
      var c = this.cache;
      n.forEach(function(l, f) {
        if (f === n.length - 1)
          c.set(l, {
            value: [r, o.cacheCallTimes++]
          });
        else {
          var d = c.get(l);
          d ? d.map || (d.map = /* @__PURE__ */ new Map()) : c.set(l, {
            map: /* @__PURE__ */ new Map()
          }), c = c.get(l).map;
        }
      });
    }
  }, {
    key: "deleteByPath",
    value: function(n, r) {
      var o = n.get(r[0]);
      if (r.length === 1) {
        var i;
        return o.map ? n.set(r[0], {
          map: o.map
        }) : n.delete(r[0]), (i = o.value) === null || i === void 0 ? void 0 : i[0];
      }
      var a = this.deleteByPath(o.map, r.slice(1));
      return (!o.map || o.map.size === 0) && !o.value && n.delete(r[0]), a;
    }
  }, {
    key: "delete",
    value: function(n) {
      if (this.has(n))
        return this.keys = this.keys.filter(function(r) {
          return !pp(r, n);
        }), this.deleteByPath(this.cache, n);
    }
  }]), e;
}();
he(qs, "MAX_CACHE_SIZE", 20);
he(qs, "MAX_CACHE_OFFSET", 5);
var Jc = 0, xf = /* @__PURE__ */ function() {
  function e(t) {
    on(this, e), he(this, "derivatives", void 0), he(this, "id", void 0), this.derivatives = Array.isArray(t) ? t : [t], this.id = Jc, t.length === 0 && to(t.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function."), Jc += 1;
  }
  return an(e, [{
    key: "getDerivativeToken",
    value: function(n) {
      return this.derivatives.reduce(function(r, o) {
        return o(n, r);
      }, void 0);
    }
  }]), e;
}(), na = new qs();
function Of(e) {
  var t = Array.isArray(e) ? e : [e];
  return na.has(t) || na.set(t, new xf(t)), na.get(t);
}
function fi(e) {
  var t = "";
  return Object.keys(e).forEach(function(n) {
    var r = e[n];
    t += n, r instanceof xf ? t += r.id : r && je(r) === "object" ? t += fi(r) : t += r;
  }), t;
}
function gp(e, t) {
  return Ks("".concat(t, "_").concat(fi(e)));
}
var qr = "random-".concat(Date.now(), "-").concat(Math.random()).replace(/\./g, ""), _f = "_bAmBoO_";
function yp(e, t, n) {
  if (Dt()) {
    var r, o;
    Or(e, qr);
    var i = document.createElement("div");
    i.style.position = "fixed", i.style.left = "0", i.style.top = "0", t?.(i), document.body.appendChild(i), process.env.NODE_ENV !== "production" && (i.innerHTML = "Test", i.style.zIndex = "9999999");
    var a = n ? n(i) : (r = getComputedStyle(i).content) === null || r === void 0 ? void 0 : r.includes(_f);
    return (o = i.parentNode) === null || o === void 0 || o.removeChild(i), ui(qr), a;
  }
  return !1;
}
var ra = void 0;
function bp() {
  return ra === void 0 && (ra = yp("@layer ".concat(qr, " { .").concat(qr, ' { content: "').concat(_f, '"!important; } }'), function(e) {
    e.className = qr;
  })), ra;
}
var Zc = process.env.NODE_ENV !== "test" && Dt() ? u.useLayoutEffect : u.useEffect, vt = function(t, n) {
  var r = u.useRef(!0);
  Zc(function() {
    return t(r.current);
  }, n), Zc(function() {
    return r.current = !1, function() {
      r.current = !0;
    };
  }, []);
}, el = function(t, n) {
  vt(function(r) {
    if (!r)
      return t();
  }, n);
}, Sp = V({}, u), tl = Sp.useInsertionEffect, Ep = function(t, n, r) {
  u.useMemo(t, r), vt(function() {
    return n(!0);
  }, r);
}, wp = tl ? function(e, t, n) {
  return tl(function() {
    return e(), t();
  }, n);
} : Ep;
function Cp() {
  return !1;
}
var Wa = !1;
function xp() {
  return Wa;
}
const Op = process.env.NODE_ENV === "production" ? Cp : xp;
if (process.env.NODE_ENV !== "production" && typeof module < "u" && module && module.hot) {
  var oa = window;
  if (typeof oa.webpackHotUpdate == "function") {
    var _p = oa.webpackHotUpdate;
    oa.webpackHotUpdate = function() {
      return Wa = !0, setTimeout(function() {
        Wa = !1;
      }, 0), _p.apply(void 0, arguments);
    };
  }
}
function Rf(e, t, n, r, o) {
  var i = u.useContext(Gs), a = i.cache, s = [e].concat(me(t)), c = s.join("_"), l = Op(), f = function(p) {
    a.update(s, function(h) {
      var m = h || [], y = U(m, 2), b = y[0], E = b === void 0 ? 0 : b, w = y[1], S = w;
      process.env.NODE_ENV !== "production" && w && l && (r?.(S, l), S = null);
      var C = S || n(), _ = [E, C];
      return p ? p(_) : _;
    });
  };
  u.useMemo(
    function() {
      f();
    },
    /* eslint-disable react-hooks/exhaustive-deps */
    [c]
    /* eslint-enable */
  );
  var d = a.get(s);
  process.env.NODE_ENV !== "production" && !d && (f(), d = a.get(s));
  var v = d[1];
  return wp(function() {
    o?.(v);
  }, function(g) {
    return f(function(p) {
      var h = U(p, 2), m = h[0], y = h[1];
      return g && m === 0 && o?.(v), [m + 1, y];
    }), function() {
      a.update(s, function(p) {
        var h = p || [], m = U(h, 2), y = m[0], b = y === void 0 ? 0 : y, E = m[1], w = b - 1;
        return w === 0 ? (r?.(E, !1), null) : [b - 1, E];
      });
    };
  }, [c]), v;
}
var Rp = {}, Pp = process.env.NODE_ENV !== "production" ? "css-dev-only-do-not-override" : "css", Vn = /* @__PURE__ */ new Map();
function Tp(e) {
  Vn.set(e, (Vn.get(e) || 0) + 1);
}
function Np(e, t) {
  if (typeof document < "u") {
    var n = document.querySelectorAll("style[".concat(Va, '="').concat(e, '"]'));
    n.forEach(function(r) {
      if (r[gr] === t) {
        var o;
        (o = r.parentNode) === null || o === void 0 || o.removeChild(r);
      }
    });
  }
}
var Mp = 0;
function Ip(e, t) {
  Vn.set(e, (Vn.get(e) || 0) - 1);
  var n = Array.from(Vn.keys()), r = n.filter(function(o) {
    var i = Vn.get(o) || 0;
    return i <= 0;
  });
  n.length - r.length > Mp && r.forEach(function(o) {
    Np(o, t), Vn.delete(o);
  });
}
var $p = function(t, n, r, o) {
  var i = r.getDerivativeToken(t), a = V(V({}, i), n);
  return o && (a = o(a)), a;
};
function Ap(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = Ft(Gs), o = r.cache.instanceId, i = n.salt, a = i === void 0 ? "" : i, s = n.override, c = s === void 0 ? Rp : s, l = n.formatToken, f = n.getComputedToken, d = u.useMemo(function() {
    return Object.assign.apply(Object, [{}].concat(me(t)));
  }, [t]), v = u.useMemo(function() {
    return fi(d);
  }, [d]), g = u.useMemo(function() {
    return fi(c);
  }, [c]), p = Rf("token", [a, e.id, v, g], function() {
    var h = f ? f(d, c, e) : $p(d, c, e, l), m = gp(h, a);
    h._tokenKey = m, Tp(m);
    var y = "".concat(Pp, "-").concat(Ks(m));
    return h._hashId = y, [h, y];
  }, function(h) {
    Ip(h[0]._tokenKey, o);
  });
  return p;
}
var Pf = {
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
}, Tf = "comm", Nf = "rule", Mf = "decl", Fp = "@import", Dp = "@keyframes", Lp = "@layer", kp = Math.abs, Ys = String.fromCharCode;
function If(e) {
  return e.trim();
}
function Yo(e, t, n) {
  return e.replace(t, n);
}
function jp(e, t) {
  return e.indexOf(t);
}
function no(e, t) {
  return e.charCodeAt(t) | 0;
}
function ro(e, t, n) {
  return e.slice(t, n);
}
function On(e) {
  return e.length;
}
function Hp(e) {
  return e.length;
}
function Po(e, t) {
  return t.push(e), e;
}
var Ai = 1, _r = 1, $f = 0, nn = 0, gt = 0, Ir = "";
function Xs(e, t, n, r, o, i, a, s) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: Ai, column: _r, length: a, return: "", siblings: s };
}
function zp() {
  return gt;
}
function Vp() {
  return gt = nn > 0 ? no(Ir, --nn) : 0, _r--, gt === 10 && (_r = 1, Ai--), gt;
}
function vn() {
  return gt = nn < $f ? no(Ir, nn++) : 0, _r++, gt === 10 && (_r = 1, Ai++), gt;
}
function Yn() {
  return no(Ir, nn);
}
function Xo() {
  return nn;
}
function Fi(e, t) {
  return ro(Ir, e, t);
}
function Ua(e) {
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
function Bp(e) {
  return Ai = _r = 1, $f = On(Ir = e), nn = 0, [];
}
function Wp(e) {
  return Ir = "", e;
}
function ia(e) {
  return If(Fi(nn - 1, Ka(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Up(e) {
  for (; (gt = Yn()) && gt < 33; )
    vn();
  return Ua(e) > 2 || Ua(gt) > 3 ? "" : " ";
}
function Kp(e, t) {
  for (; --t && vn() && !(gt < 48 || gt > 102 || gt > 57 && gt < 65 || gt > 70 && gt < 97); )
    ;
  return Fi(e, Xo() + (t < 6 && Yn() == 32 && vn() == 32));
}
function Ka(e) {
  for (; vn(); )
    switch (gt) {
      case e:
        return nn;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Ka(gt);
        break;
      case 40:
        e === 41 && Ka(e);
        break;
      case 92:
        vn();
        break;
    }
  return nn;
}
function Gp(e, t) {
  for (; vn() && e + gt !== 47 + 10; )
    if (e + gt === 42 + 42 && Yn() === 47)
      break;
  return "/*" + Fi(t, nn - 1) + "*" + Ys(e === 47 ? e : vn());
}
function qp(e) {
  for (; !Ua(Yn()); )
    vn();
  return Fi(e, nn);
}
function Yp(e) {
  return Wp(Qo("", null, null, null, [""], e = Bp(e), 0, [0], e));
}
function Qo(e, t, n, r, o, i, a, s, c) {
  for (var l = 0, f = 0, d = a, v = 0, g = 0, p = 0, h = 1, m = 1, y = 1, b = 0, E = "", w = o, S = i, C = r, _ = E; m; )
    switch (p = b, b = vn()) {
      case 40:
        if (p != 108 && no(_, d - 1) == 58) {
          jp(_ += Yo(ia(b), "&", "&\f"), "&\f") != -1 && (y = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        _ += ia(b);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        _ += Up(p);
        break;
      case 92:
        _ += Kp(Xo() - 1, 7);
        continue;
      case 47:
        switch (Yn()) {
          case 42:
          case 47:
            Po(Xp(Gp(vn(), Xo()), t, n, c), c);
            break;
          default:
            _ += "/";
        }
        break;
      case 123 * h:
        s[l++] = On(_) * y;
      case 125 * h:
      case 59:
      case 0:
        switch (b) {
          case 0:
          case 125:
            m = 0;
          case 59 + f:
            y == -1 && (_ = Yo(_, /\f/g, "")), g > 0 && On(_) - d && Po(g > 32 ? rl(_ + ";", r, n, d - 1, c) : rl(Yo(_, " ", "") + ";", r, n, d - 2, c), c);
            break;
          case 59:
            _ += ";";
          default:
            if (Po(C = nl(_, t, n, l, f, o, s, E, w = [], S = [], d, i), i), b === 123)
              if (f === 0)
                Qo(_, t, C, C, w, i, d, s, S);
              else
                switch (v === 99 && no(_, 3) === 110 ? 100 : v) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Qo(e, C, C, r && Po(nl(e, C, C, 0, 0, o, s, E, o, w = [], d, S), S), o, S, d, s, r ? w : S);
                    break;
                  default:
                    Qo(_, C, C, C, [""], S, 0, s, S);
                }
        }
        l = f = g = 0, h = y = 1, E = _ = "", d = a;
        break;
      case 58:
        d = 1 + On(_), g = p;
      default:
        if (h < 1) {
          if (b == 123)
            --h;
          else if (b == 125 && h++ == 0 && Vp() == 125)
            continue;
        }
        switch (_ += Ys(b), b * h) {
          case 38:
            y = f > 0 ? 1 : (_ += "\f", -1);
            break;
          case 44:
            s[l++] = (On(_) - 1) * y, y = 1;
            break;
          case 64:
            Yn() === 45 && (_ += ia(vn())), v = Yn(), f = d = On(E = _ += qp(Xo())), b++;
            break;
          case 45:
            p === 45 && On(_) == 2 && (h = 0);
        }
    }
  return i;
}
function nl(e, t, n, r, o, i, a, s, c, l, f, d) {
  for (var v = o - 1, g = o === 0 ? i : [""], p = Hp(g), h = 0, m = 0, y = 0; h < r; ++h)
    for (var b = 0, E = ro(e, v + 1, v = kp(m = a[h])), w = e; b < p; ++b)
      (w = If(m > 0 ? g[b] + " " + E : Yo(E, /&\f/g, g[b]))) && (c[y++] = w);
  return Xs(e, t, n, o === 0 ? Nf : s, c, l, f, d);
}
function Xp(e, t, n, r) {
  return Xs(e, t, n, Tf, Ys(zp()), ro(e, 2, -2), 0, r);
}
function rl(e, t, n, r, o) {
  return Xs(e, t, n, Mf, ro(e, 0, r), ro(e, r + 1, -1), r, o);
}
function Ga(e, t) {
  for (var n = "", r = 0; r < e.length; r++)
    n += t(e[r], r, e, t) || "";
  return n;
}
function Qp(e, t, n, r) {
  switch (e.type) {
    case Lp:
      if (e.children.length)
        break;
    case Fp:
    case Mf:
      return e.return = e.return || e.value;
    case Tf:
      return "";
    case Dp:
      return e.return = e.value + "{" + Ga(e.children, r) + "}";
    case Nf:
      if (!On(e.value = e.props.join(",")))
        return "";
  }
  return On(n = Ga(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function Af(e, t) {
  var n = t.path, r = t.parentSelectors;
  Fe(!1, "[Ant Design CSS-in-JS] ".concat(n ? "Error in ".concat(n, ": ") : "").concat(e).concat(r.length ? " Selector: ".concat(r.join(" | ")) : ""));
}
var Jp = function(t, n, r) {
  if (t === "content") {
    var o = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, i = ["normal", "none", "initial", "inherit", "unset"];
    (typeof n != "string" || i.indexOf(n) === -1 && !o.test(n) && (n.charAt(0) !== n.charAt(n.length - 1) || n.charAt(0) !== '"' && n.charAt(0) !== "'")) && Af("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(n, "\"'`."), r);
  }
}, Zp = function(t, n, r) {
  t === "animation" && r.hashId && n !== "none" && Af("You seem to be using hashed animation '".concat(n, "', in which case 'animationName' with Keyframe as value is recommended."), r);
}, ol = "data-ant-cssinjs-cache-path", Ff = "_FILE_STYLE__", Xn, Df = !0;
function eg() {
  if (!Xn && (Xn = {}, Dt())) {
    var e = document.createElement("div");
    e.className = ol, e.style.position = "fixed", e.style.visibility = "hidden", e.style.top = "-9999px", document.body.appendChild(e);
    var t = getComputedStyle(e).content || "";
    t = t.replace(/^"/, "").replace(/"$/, ""), t.split(";").forEach(function(o) {
      var i = o.split(":"), a = U(i, 2), s = a[0], c = a[1];
      Xn[s] = c;
    });
    var n = document.querySelector("style[".concat(ol, "]"));
    if (n) {
      var r;
      Df = !1, (r = n.parentNode) === null || r === void 0 || r.removeChild(n);
    }
    document.body.removeChild(e);
  }
}
function tg(e) {
  return eg(), !!Xn[e];
}
function ng(e) {
  var t = Xn[e], n = null;
  if (t && Dt())
    if (Df)
      n = Ff;
    else {
      var r = document.querySelector("style[".concat(qn, '="').concat(Xn[e], '"]'));
      r ? n = r.innerHTML : delete Xn[e];
    }
  return [n, t];
}
var il = Dt(), Lf = "_skip_check_", kf = "_multi_value_";
function al(e) {
  var t = Ga(Yp(e), Qp);
  return t.replace(/\{%%%\:[^;];}/g, ";");
}
function rg(e) {
  return je(e) === "object" && e && (Lf in e || kf in e);
}
function og(e, t, n) {
  if (!t)
    return e;
  var r = ".".concat(t), o = n === "low" ? ":where(".concat(r, ")") : r, i = e.split(",").map(function(a) {
    var s, c = a.trim().split(/\s+/), l = c[0] || "", f = ((s = l.match(/^\w+/)) === null || s === void 0 ? void 0 : s[0]) || "";
    return l = "".concat(f).concat(o).concat(l.slice(f.length)), [l].concat(me(c.slice(1))).join(" ");
  });
  return i.join(",");
}
var ig = function e(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  }, o = r.root, i = r.injectHash, a = r.parentSelectors, s = n.hashId, c = n.layer, l = n.path, f = n.hashPriority, d = n.transformers, v = d === void 0 ? [] : d, g = n.linters, p = g === void 0 ? [] : g, h = "", m = {};
  function y(C) {
    var _ = C.getName(s);
    if (!m[_]) {
      var N = e(C.style, n, {
        root: !1,
        parentSelectors: a
      }), M = U(N, 1), R = M[0];
      m[_] = "@keyframes ".concat(C.getName(s)).concat(R);
    }
  }
  function b(C) {
    var _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return C.forEach(function(N) {
      Array.isArray(N) ? b(N, _) : N && _.push(N);
    }), _;
  }
  var E = b(Array.isArray(t) ? t : [t]);
  if (E.forEach(function(C) {
    var _ = typeof C == "string" && !o ? {} : C;
    if (typeof _ == "string")
      h += "".concat(_, `
`);
    else if (_._keyframe)
      y(_);
    else {
      var N = v.reduce(function(M, R) {
        var k;
        return (R == null || (k = R.visit) === null || k === void 0 ? void 0 : k.call(R, M)) || M;
      }, _);
      Object.keys(N).forEach(function(M) {
        var R = N[M];
        if (je(R) === "object" && R && (M !== "animationName" || !R._keyframe) && !rg(R)) {
          var k = !1, x = M.trim(), O = !1;
          (o || i) && s ? x.startsWith("@") ? k = !0 : x = og(M, s, f) : o && !s && (x === "&" || x === "") && (x = "", O = !0);
          var P = e(R, n, {
            root: O,
            injectHash: k,
            parentSelectors: [].concat(me(a), [x])
          }), I = U(P, 2), $ = I[0], D = I[1];
          m = V(V({}, m), D), h += "".concat(x).concat($);
        } else {
          let ne = function(ce, j) {
            process.env.NODE_ENV !== "production" && (je(R) !== "object" || !(R != null && R[Lf])) && [Jp, Zp].concat(me(p)).forEach(function(G) {
              return G(ce, j, {
                path: l,
                hashId: s,
                parentSelectors: a
              });
            });
            var H = ce.replace(/[A-Z]/g, function(G) {
              return "-".concat(G.toLowerCase());
            }), z = j;
            !Pf[ce] && typeof z == "number" && z !== 0 && (z = "".concat(z, "px")), ce === "animationName" && j !== null && j !== void 0 && j._keyframe && (y(j), z = j.getName(s)), h += "".concat(H, ":").concat(z, ";");
          };
          var B, K = (B = R?.value) !== null && B !== void 0 ? B : R;
          je(R) === "object" && R !== null && R !== void 0 && R[kf] && Array.isArray(K) ? K.forEach(function(ce) {
            ne(M, ce);
          }) : ne(M, K);
        }
      });
    }
  }), !o)
    h = "{".concat(h, "}");
  else if (c && bp()) {
    var w = c.split(","), S = w[w.length - 1].trim();
    h = "@layer ".concat(S, " {").concat(h, "}"), w.length > 1 && (h = "@layer ".concat(c, "{%%%:%}").concat(h));
  }
  return [h, m];
};
function ag(e, t) {
  return Ks("".concat(e.join("%")).concat(t));
}
function sg() {
  return null;
}
function qa(e, t) {
  var n = e.token, r = e.path, o = e.hashId, i = e.layer, a = e.nonce, s = e.clientOnly, c = e.order, l = c === void 0 ? 0 : c, f = u.useContext(Gs), d = f.autoClear, v = f.mock, g = f.defaultCache, p = f.hashPriority, h = f.container, m = f.ssrInline, y = f.transformers, b = f.linters, E = f.cache, w = n._tokenKey, S = [w].concat(me(r)), C = il;
  process.env.NODE_ENV !== "production" && v !== void 0 && (C = v === "client");
  var _ = Rf(
    "style",
    S,
    // Create cache if needed
    function() {
      var x = S.join("|");
      if (tg(x)) {
        var O = ng(x), P = U(O, 2), I = P[0], $ = P[1];
        if (I)
          return [I, w, $, {}, s, l];
      }
      var D = t(), B = ig(D, {
        hashId: o,
        hashPriority: p,
        layer: i,
        path: r.join("-"),
        transformers: y,
        linters: b
      }), K = U(B, 2), ne = K[0], ce = K[1], j = al(ne), H = ag(S, j);
      return [j, w, H, ce, s, l];
    },
    // Remove cache if no need
    function(x, O) {
      var P = U(x, 3), I = P[2];
      (O || d) && il && ui(I, {
        mark: qn
      });
    },
    // Effect: Inject style here
    function(x) {
      var O = U(x, 4), P = O[0];
      O[1];
      var I = O[2], $ = O[3];
      if (C && P !== Ff) {
        var D = {
          mark: qn,
          prepend: "queue",
          attachTo: h,
          priority: l
        }, B = typeof a == "function" ? a() : a;
        B && (D.csp = {
          nonce: B
        });
        var K = Or(P, I, D);
        K[gr] = E.instanceId, K.setAttribute(Va, w), process.env.NODE_ENV !== "production" && K.setAttribute(lp, S.join("|")), Object.keys($).forEach(function(ne) {
          Or(al($[ne]), "_effect-".concat(ne), D);
        });
      }
    }
  ), N = U(_, 3), M = N[0], R = N[1], k = N[2];
  return function(x) {
    var O;
    if (!m || C || !g)
      O = /* @__PURE__ */ u.createElement(sg, null);
    else {
      var P;
      O = /* @__PURE__ */ u.createElement("style", Te({}, (P = {}, he(P, Va, R), he(P, qn, k), P), {
        dangerouslySetInnerHTML: {
          __html: M
        }
      }));
    }
    return /* @__PURE__ */ u.createElement(u.Fragment, null, O, x);
  };
}
var _t = /* @__PURE__ */ function() {
  function e(t, n) {
    on(this, e), he(this, "name", void 0), he(this, "style", void 0), he(this, "_keyframe", !0), this.name = t, this.style = n;
  }
  return an(e, [{
    key: "getName",
    value: function() {
      var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return n ? "".concat(n, "-").concat(this.name) : this.name;
    }
  }]), e;
}();
function ur(e) {
  return e.notSplit = !0, e;
}
ur(["borderTop", "borderBottom"]), ur(["borderTop"]), ur(["borderBottom"]), ur(["borderLeft", "borderRight"]), ur(["borderLeft"]), ur(["borderRight"]);
var cg = /* @__PURE__ */ fo({});
const Qs = cg;
function jf(e) {
  return wf(e) || vf(e) || Ws(e) || Cf();
}
function dn(e, t) {
  for (var n = e, r = 0; r < t.length; r += 1) {
    if (n == null)
      return;
    n = n[t[r]];
  }
  return n;
}
function Hf(e, t, n, r) {
  if (!t.length)
    return n;
  var o = jf(t), i = o[0], a = o.slice(1), s;
  return !e && typeof i == "number" ? s = [] : Array.isArray(e) ? s = me(e) : s = V({}, e), r && n === void 0 && a.length === 1 ? delete s[i][a[0]] : s[i] = Hf(s[i], a, n, r), s;
}
function un(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return t.length && r && n === void 0 && !dn(e, t.slice(0, -1)) ? e : Hf(e, t, n, r);
}
function lg(e) {
  return je(e) === "object" && e !== null && Object.getPrototypeOf(e) === Object.prototype;
}
function sl(e) {
  return Array.isArray(e) ? [] : {};
}
var ug = typeof Reflect > "u" ? Object.keys : Reflect.ownKeys;
function yr() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r = sl(t[0]);
  return t.forEach(function(o) {
    function i(a, s) {
      var c = new Set(s), l = dn(o, a), f = Array.isArray(l);
      if (f || lg(l)) {
        if (!c.has(l)) {
          c.add(l);
          var d = dn(r, a);
          f ? r = un(r, a, []) : (!d || je(d) !== "object") && (r = un(r, a, sl(l))), ug(l).forEach(function(v) {
            i([].concat(me(a), [v]), c);
          });
        }
      } else
        r = un(r, a, l);
    }
    i([]);
  }), r;
}
function fg() {
}
let zf = fg;
process.env.NODE_ENV !== "production" && (zf = (e, t, n) => {
  Fe(e, `[antd: ${t}] ${n}`), process.env.NODE_ENV === "test" && nf();
});
const rn = zf, dg = /* @__PURE__ */ fo(void 0), vg = {
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
var hg = {
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
const mg = {
  placeholder: "Select time",
  rangePlaceholder: ["Start time", "End time"]
}, Vf = mg, pg = {
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
  }, hg),
  timePickerLocale: Object.assign({}, Vf)
}, cl = pg, Ut = "${label} is not a valid ${type}", gg = {
  locale: "en",
  Pagination: vg,
  DatePicker: cl,
  TimePicker: Vf,
  Calendar: cl,
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
        string: Ut,
        method: Ut,
        array: Ut,
        object: Ut,
        number: Ut,
        date: Ut,
        boolean: Ut,
        integer: Ut,
        float: Ut,
        regexp: Ut,
        email: Ut,
        url: Ut,
        hex: Ut
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
}, oo = gg;
let aa = Object.assign({}, oo.Modal);
function ll(e) {
  e ? aa = Object.assign(Object.assign({}, aa), e) : aa = Object.assign({}, oo.Modal);
}
const yg = /* @__PURE__ */ fo(void 0), Js = yg, bg = (e, t) => {
  const n = u.useContext(Js), r = u.useMemo(() => {
    var i;
    const a = t || oo[e], s = (i = n?.[e]) !== null && i !== void 0 ? i : {};
    return Object.assign(Object.assign({}, typeof a == "function" ? a() : a), s || {});
  }, [e, t, n]), o = u.useMemo(() => {
    const i = n?.locale;
    return n?.exist && !i ? oo.locale : i;
  }, [n]);
  return [r, o];
}, Sg = bg, Bf = "internalMark", Wf = (e) => {
  const {
    locale: t = {},
    children: n,
    _ANT_MARK__: r
  } = e;
  process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && rn(r === Bf, "LocaleProvider", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale"), u.useEffect(() => (ll(t && t.Modal), () => {
    ll();
  }), [t]);
  const o = u.useMemo(() => Object.assign(Object.assign({}, t), {
    exist: !0
  }), [t]);
  return /* @__PURE__ */ u.createElement(Js.Provider, {
    value: o
  }, n);
};
process.env.NODE_ENV !== "production" && (Wf.displayName = "LocaleProvider");
const Eg = Wf, wg = "5.7.3";
function Nt(e, t) {
  Cg(e) && (e = "100%");
  var n = xg(e);
  return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), n && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e);
}
function To(e) {
  return Math.min(1, Math.max(0, e));
}
function Cg(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function xg(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function Uf(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function No(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function Wn(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function Og(e, t, n) {
  return {
    r: Nt(e, 255) * 255,
    g: Nt(t, 255) * 255,
    b: Nt(n, 255) * 255
  };
}
function ul(e, t, n) {
  e = Nt(e, 255), t = Nt(t, 255), n = Nt(n, 255);
  var r = Math.max(e, t, n), o = Math.min(e, t, n), i = 0, a = 0, s = (r + o) / 2;
  if (r === o)
    a = 0, i = 0;
  else {
    var c = r - o;
    switch (a = s > 0.5 ? c / (2 - r - o) : c / (r + o), r) {
      case e:
        i = (t - n) / c + (t < n ? 6 : 0);
        break;
      case t:
        i = (n - e) / c + 2;
        break;
      case n:
        i = (e - t) / c + 4;
        break;
    }
    i /= 6;
  }
  return { h: i, s: a, l: s };
}
function sa(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * (6 * n) : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function _g(e, t, n) {
  var r, o, i;
  if (e = Nt(e, 360), t = Nt(t, 100), n = Nt(n, 100), t === 0)
    o = n, i = n, r = n;
  else {
    var a = n < 0.5 ? n * (1 + t) : n + t - n * t, s = 2 * n - a;
    r = sa(s, a, e + 1 / 3), o = sa(s, a, e), i = sa(s, a, e - 1 / 3);
  }
  return { r: r * 255, g: o * 255, b: i * 255 };
}
function Ya(e, t, n) {
  e = Nt(e, 255), t = Nt(t, 255), n = Nt(n, 255);
  var r = Math.max(e, t, n), o = Math.min(e, t, n), i = 0, a = r, s = r - o, c = r === 0 ? 0 : s / r;
  if (r === o)
    i = 0;
  else {
    switch (r) {
      case e:
        i = (t - n) / s + (t < n ? 6 : 0);
        break;
      case t:
        i = (n - e) / s + 2;
        break;
      case n:
        i = (e - t) / s + 4;
        break;
    }
    i /= 6;
  }
  return { h: i, s: c, v: a };
}
function Rg(e, t, n) {
  e = Nt(e, 360) * 6, t = Nt(t, 100), n = Nt(n, 100);
  var r = Math.floor(e), o = e - r, i = n * (1 - t), a = n * (1 - o * t), s = n * (1 - (1 - o) * t), c = r % 6, l = [n, a, i, i, s, n][c], f = [s, n, n, a, i, i][c], d = [i, i, s, n, n, a][c];
  return { r: l * 255, g: f * 255, b: d * 255 };
}
function Xa(e, t, n, r) {
  var o = [
    Wn(Math.round(e).toString(16)),
    Wn(Math.round(t).toString(16)),
    Wn(Math.round(n).toString(16))
  ];
  return r && o[0].startsWith(o[0].charAt(1)) && o[1].startsWith(o[1].charAt(1)) && o[2].startsWith(o[2].charAt(1)) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) : o.join("");
}
function Pg(e, t, n, r, o) {
  var i = [
    Wn(Math.round(e).toString(16)),
    Wn(Math.round(t).toString(16)),
    Wn(Math.round(n).toString(16)),
    Wn(Tg(r))
  ];
  return o && i[0].startsWith(i[0].charAt(1)) && i[1].startsWith(i[1].charAt(1)) && i[2].startsWith(i[2].charAt(1)) && i[3].startsWith(i[3].charAt(1)) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) + i[3].charAt(0) : i.join("");
}
function Tg(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function fl(e) {
  return Gt(e) / 255;
}
function Gt(e) {
  return parseInt(e, 16);
}
function Ng(e) {
  return {
    r: e >> 16,
    g: (e & 65280) >> 8,
    b: e & 255
  };
}
var Qa = {
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
function pr(e) {
  var t = { r: 0, g: 0, b: 0 }, n = 1, r = null, o = null, i = null, a = !1, s = !1;
  return typeof e == "string" && (e = $g(e)), typeof e == "object" && (Cn(e.r) && Cn(e.g) && Cn(e.b) ? (t = Og(e.r, e.g, e.b), a = !0, s = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : Cn(e.h) && Cn(e.s) && Cn(e.v) ? (r = No(e.s), o = No(e.v), t = Rg(e.h, r, o), a = !0, s = "hsv") : Cn(e.h) && Cn(e.s) && Cn(e.l) && (r = No(e.s), i = No(e.l), t = _g(e.h, r, i), a = !0, s = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (n = e.a)), n = Uf(n), {
    ok: a,
    format: e.format || s,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: n
  };
}
var Mg = "[-\\+]?\\d+%?", Ig = "[-\\+]?\\d*\\.\\d+%?", An = "(?:".concat(Ig, ")|(?:").concat(Mg, ")"), ca = "[\\s|\\(]+(".concat(An, ")[,|\\s]+(").concat(An, ")[,|\\s]+(").concat(An, ")\\s*\\)?"), la = "[\\s|\\(]+(".concat(An, ")[,|\\s]+(").concat(An, ")[,|\\s]+(").concat(An, ")[,|\\s]+(").concat(An, ")\\s*\\)?"), ln = {
  CSS_UNIT: new RegExp(An),
  rgb: new RegExp("rgb" + ca),
  rgba: new RegExp("rgba" + la),
  hsl: new RegExp("hsl" + ca),
  hsla: new RegExp("hsla" + la),
  hsv: new RegExp("hsv" + ca),
  hsva: new RegExp("hsva" + la),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function $g(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var t = !1;
  if (Qa[e])
    e = Qa[e], t = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var n = ln.rgb.exec(e);
  return n ? { r: n[1], g: n[2], b: n[3] } : (n = ln.rgba.exec(e), n ? { r: n[1], g: n[2], b: n[3], a: n[4] } : (n = ln.hsl.exec(e), n ? { h: n[1], s: n[2], l: n[3] } : (n = ln.hsla.exec(e), n ? { h: n[1], s: n[2], l: n[3], a: n[4] } : (n = ln.hsv.exec(e), n ? { h: n[1], s: n[2], v: n[3] } : (n = ln.hsva.exec(e), n ? { h: n[1], s: n[2], v: n[3], a: n[4] } : (n = ln.hex8.exec(e), n ? {
    r: Gt(n[1]),
    g: Gt(n[2]),
    b: Gt(n[3]),
    a: fl(n[4]),
    format: t ? "name" : "hex8"
  } : (n = ln.hex6.exec(e), n ? {
    r: Gt(n[1]),
    g: Gt(n[2]),
    b: Gt(n[3]),
    format: t ? "name" : "hex"
  } : (n = ln.hex4.exec(e), n ? {
    r: Gt(n[1] + n[1]),
    g: Gt(n[2] + n[2]),
    b: Gt(n[3] + n[3]),
    a: fl(n[4] + n[4]),
    format: t ? "name" : "hex8"
  } : (n = ln.hex3.exec(e), n ? {
    r: Gt(n[1] + n[1]),
    g: Gt(n[2] + n[2]),
    b: Gt(n[3] + n[3]),
    format: t ? "name" : "hex"
  } : !1)))))))));
}
function Cn(e) {
  return !!ln.CSS_UNIT.exec(String(e));
}
var Pt = (
  /** @class */
  function() {
    function e(t, n) {
      t === void 0 && (t = ""), n === void 0 && (n = {});
      var r;
      if (t instanceof e)
        return t;
      typeof t == "number" && (t = Ng(t)), this.originalInput = t;
      var o = pr(t);
      this.originalInput = t, this.r = o.r, this.g = o.g, this.b = o.b, this.a = o.a, this.roundA = Math.round(100 * this.a) / 100, this.format = (r = n.format) !== null && r !== void 0 ? r : o.format, this.gradientType = n.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = o.ok;
    }
    return e.prototype.isDark = function() {
      return this.getBrightness() < 128;
    }, e.prototype.isLight = function() {
      return !this.isDark();
    }, e.prototype.getBrightness = function() {
      var t = this.toRgb();
      return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3;
    }, e.prototype.getLuminance = function() {
      var t = this.toRgb(), n, r, o, i = t.r / 255, a = t.g / 255, s = t.b / 255;
      return i <= 0.03928 ? n = i / 12.92 : n = Math.pow((i + 0.055) / 1.055, 2.4), a <= 0.03928 ? r = a / 12.92 : r = Math.pow((a + 0.055) / 1.055, 2.4), s <= 0.03928 ? o = s / 12.92 : o = Math.pow((s + 0.055) / 1.055, 2.4), 0.2126 * n + 0.7152 * r + 0.0722 * o;
    }, e.prototype.getAlpha = function() {
      return this.a;
    }, e.prototype.setAlpha = function(t) {
      return this.a = Uf(t), this.roundA = Math.round(100 * this.a) / 100, this;
    }, e.prototype.isMonochrome = function() {
      var t = this.toHsl().s;
      return t === 0;
    }, e.prototype.toHsv = function() {
      var t = Ya(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
    }, e.prototype.toHsvString = function() {
      var t = Ya(this.r, this.g, this.b), n = Math.round(t.h * 360), r = Math.round(t.s * 100), o = Math.round(t.v * 100);
      return this.a === 1 ? "hsv(".concat(n, ", ").concat(r, "%, ").concat(o, "%)") : "hsva(".concat(n, ", ").concat(r, "%, ").concat(o, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHsl = function() {
      var t = ul(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
    }, e.prototype.toHslString = function() {
      var t = ul(this.r, this.g, this.b), n = Math.round(t.h * 360), r = Math.round(t.s * 100), o = Math.round(t.l * 100);
      return this.a === 1 ? "hsl(".concat(n, ", ").concat(r, "%, ").concat(o, "%)") : "hsla(".concat(n, ", ").concat(r, "%, ").concat(o, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHex = function(t) {
      return t === void 0 && (t = !1), Xa(this.r, this.g, this.b, t);
    }, e.prototype.toHexString = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex(t);
    }, e.prototype.toHex8 = function(t) {
      return t === void 0 && (t = !1), Pg(this.r, this.g, this.b, this.a, t);
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
      var t = Math.round(this.r), n = Math.round(this.g), r = Math.round(this.b);
      return this.a === 1 ? "rgb(".concat(t, ", ").concat(n, ", ").concat(r, ")") : "rgba(".concat(t, ", ").concat(n, ", ").concat(r, ", ").concat(this.roundA, ")");
    }, e.prototype.toPercentageRgb = function() {
      var t = function(n) {
        return "".concat(Math.round(Nt(n, 255) * 100), "%");
      };
      return {
        r: t(this.r),
        g: t(this.g),
        b: t(this.b),
        a: this.a
      };
    }, e.prototype.toPercentageRgbString = function() {
      var t = function(n) {
        return Math.round(Nt(n, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%)") : "rgba(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%, ").concat(this.roundA, ")");
    }, e.prototype.toName = function() {
      if (this.a === 0)
        return "transparent";
      if (this.a < 1)
        return !1;
      for (var t = "#" + Xa(this.r, this.g, this.b, !1), n = 0, r = Object.entries(Qa); n < r.length; n++) {
        var o = r[n], i = o[0], a = o[1];
        if (t === a)
          return i;
      }
      return !1;
    }, e.prototype.toString = function(t) {
      var n = !!t;
      t = t ?? this.format;
      var r = !1, o = this.a < 1 && this.a >= 0, i = !n && o && (t.startsWith("hex") || t === "name");
      return i ? t === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (t === "rgb" && (r = this.toRgbString()), t === "prgb" && (r = this.toPercentageRgbString()), (t === "hex" || t === "hex6") && (r = this.toHexString()), t === "hex3" && (r = this.toHexString(!0)), t === "hex4" && (r = this.toHex8String(!0)), t === "hex8" && (r = this.toHex8String()), t === "name" && (r = this.toName()), t === "hsl" && (r = this.toHslString()), t === "hsv" && (r = this.toHsvString()), r || this.toHexString());
    }, e.prototype.toNumber = function() {
      return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
    }, e.prototype.clone = function() {
      return new e(this.toString());
    }, e.prototype.lighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l += t / 100, n.l = To(n.l), new e(n);
    }, e.prototype.brighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toRgb();
      return n.r = Math.max(0, Math.min(255, n.r - Math.round(255 * -(t / 100)))), n.g = Math.max(0, Math.min(255, n.g - Math.round(255 * -(t / 100)))), n.b = Math.max(0, Math.min(255, n.b - Math.round(255 * -(t / 100)))), new e(n);
    }, e.prototype.darken = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l -= t / 100, n.l = To(n.l), new e(n);
    }, e.prototype.tint = function(t) {
      return t === void 0 && (t = 10), this.mix("white", t);
    }, e.prototype.shade = function(t) {
      return t === void 0 && (t = 10), this.mix("black", t);
    }, e.prototype.desaturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s -= t / 100, n.s = To(n.s), new e(n);
    }, e.prototype.saturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s += t / 100, n.s = To(n.s), new e(n);
    }, e.prototype.greyscale = function() {
      return this.desaturate(100);
    }, e.prototype.spin = function(t) {
      var n = this.toHsl(), r = (n.h + t) % 360;
      return n.h = r < 0 ? 360 + r : r, new e(n);
    }, e.prototype.mix = function(t, n) {
      n === void 0 && (n = 50);
      var r = this.toRgb(), o = new e(t).toRgb(), i = n / 100, a = {
        r: (o.r - r.r) * i + r.r,
        g: (o.g - r.g) * i + r.g,
        b: (o.b - r.b) * i + r.b,
        a: (o.a - r.a) * i + r.a
      };
      return new e(a);
    }, e.prototype.analogous = function(t, n) {
      t === void 0 && (t = 6), n === void 0 && (n = 30);
      var r = this.toHsl(), o = 360 / n, i = [this];
      for (r.h = (r.h - (o * t >> 1) + 720) % 360; --t; )
        r.h = (r.h + o) % 360, i.push(new e(r));
      return i;
    }, e.prototype.complement = function() {
      var t = this.toHsl();
      return t.h = (t.h + 180) % 360, new e(t);
    }, e.prototype.monochromatic = function(t) {
      t === void 0 && (t = 6);
      for (var n = this.toHsv(), r = n.h, o = n.s, i = n.v, a = [], s = 1 / t; t--; )
        a.push(new e({ h: r, s: o, v: i })), i = (i + s) % 1;
      return a;
    }, e.prototype.splitcomplement = function() {
      var t = this.toHsl(), n = t.h;
      return [
        this,
        new e({ h: (n + 72) % 360, s: t.s, l: t.l }),
        new e({ h: (n + 216) % 360, s: t.s, l: t.l })
      ];
    }, e.prototype.onBackground = function(t) {
      var n = this.toRgb(), r = new e(t).toRgb(), o = n.a + r.a * (1 - n.a);
      return new e({
        r: (n.r * n.a + r.r * r.a * (1 - n.a)) / o,
        g: (n.g * n.a + r.g * r.a * (1 - n.a)) / o,
        b: (n.b * n.a + r.b * r.a * (1 - n.a)) / o,
        a: o
      });
    }, e.prototype.triad = function() {
      return this.polyad(3);
    }, e.prototype.tetrad = function() {
      return this.polyad(4);
    }, e.prototype.polyad = function(t) {
      for (var n = this.toHsl(), r = n.h, o = [this], i = 360 / t, a = 1; a < t; a++)
        o.push(new e({ h: (r + a * i) % 360, s: n.s, l: n.l }));
      return o;
    }, e.prototype.equals = function(t) {
      return this.toRgbString() === new e(t).toRgbString();
    }, e;
  }()
), Mo = 2, dl = 0.16, Ag = 0.05, Fg = 0.05, Dg = 0.15, Kf = 5, Gf = 4, Lg = [{
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
function vl(e) {
  var t = e.r, n = e.g, r = e.b, o = Ya(t, n, r);
  return {
    h: o.h * 360,
    s: o.s,
    v: o.v
  };
}
function Io(e) {
  var t = e.r, n = e.g, r = e.b;
  return "#".concat(Xa(t, n, r, !1));
}
function kg(e, t, n) {
  var r = n / 100, o = {
    r: (t.r - e.r) * r + e.r,
    g: (t.g - e.g) * r + e.g,
    b: (t.b - e.b) * r + e.b
  };
  return o;
}
function hl(e, t, n) {
  var r;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? r = n ? Math.round(e.h) - Mo * t : Math.round(e.h) + Mo * t : r = n ? Math.round(e.h) + Mo * t : Math.round(e.h) - Mo * t, r < 0 ? r += 360 : r >= 360 && (r -= 360), r;
}
function ml(e, t, n) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  var r;
  return n ? r = e.s - dl * t : t === Gf ? r = e.s + dl : r = e.s + Ag * t, r > 1 && (r = 1), n && t === Kf && r > 0.1 && (r = 0.1), r < 0.06 && (r = 0.06), Number(r.toFixed(2));
}
function pl(e, t, n) {
  var r;
  return n ? r = e.v + Fg * t : r = e.v - Dg * t, r > 1 && (r = 1), Number(r.toFixed(2));
}
function Jn(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = [], r = pr(e), o = Kf; o > 0; o -= 1) {
    var i = vl(r), a = Io(pr({
      h: hl(i, o, !0),
      s: ml(i, o, !0),
      v: pl(i, o, !0)
    }));
    n.push(a);
  }
  n.push(Io(r));
  for (var s = 1; s <= Gf; s += 1) {
    var c = vl(r), l = Io(pr({
      h: hl(c, s),
      s: ml(c, s),
      v: pl(c, s)
    }));
    n.push(l);
  }
  return t.theme === "dark" ? Lg.map(function(f) {
    var d = f.index, v = f.opacity, g = Io(kg(pr(t.backgroundColor || "#141414"), pr(n[d]), v * 100));
    return g;
  }) : n;
}
var ua = {
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
}, Jo = {}, fa = {};
Object.keys(ua).forEach(function(e) {
  Jo[e] = Jn(ua[e]), Jo[e].primary = Jo[e][5], fa[e] = Jn(ua[e], {
    theme: "dark",
    backgroundColor: "#141414"
  }), fa[e].primary = fa[e][5];
});
var jg = Jo.blue;
const Hg = (e) => {
  const {
    controlHeight: t
  } = e;
  return {
    controlHeightSM: t * 0.75,
    controlHeightXS: t * 0.5,
    controlHeightLG: t * 1.25
  };
}, zg = Hg;
function Vg(e) {
  const {
    sizeUnit: t,
    sizeStep: n
  } = e;
  return {
    sizeXXL: t * (n + 8),
    sizeXL: t * (n + 4),
    sizeLG: t * (n + 2),
    sizeMD: t * (n + 1),
    sizeMS: t * n,
    size: t * n,
    sizeSM: t * (n - 1),
    sizeXS: t * (n - 2),
    sizeXXS: t * (n - 3)
    // 4
  };
}
const qf = {
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
}, Bg = Object.assign(Object.assign({}, qf), {
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
}), Di = Bg;
function Wg(e, t) {
  let {
    generateColorPalettes: n,
    generateNeutralColorPalettes: r
  } = t;
  const {
    colorSuccess: o,
    colorWarning: i,
    colorError: a,
    colorInfo: s,
    colorPrimary: c,
    colorBgBase: l,
    colorTextBase: f
  } = e, d = n(c), v = n(o), g = n(i), p = n(a), h = n(s), m = r(l, f), y = e.colorLink || e.colorInfo, b = n(y);
  return Object.assign(Object.assign({}, m), {
    colorPrimaryBg: d[1],
    colorPrimaryBgHover: d[2],
    colorPrimaryBorder: d[3],
    colorPrimaryBorderHover: d[4],
    colorPrimaryHover: d[5],
    colorPrimary: d[6],
    colorPrimaryActive: d[7],
    colorPrimaryTextHover: d[8],
    colorPrimaryText: d[9],
    colorPrimaryTextActive: d[10],
    colorSuccessBg: v[1],
    colorSuccessBgHover: v[2],
    colorSuccessBorder: v[3],
    colorSuccessBorderHover: v[4],
    colorSuccessHover: v[4],
    colorSuccess: v[6],
    colorSuccessActive: v[7],
    colorSuccessTextHover: v[8],
    colorSuccessText: v[9],
    colorSuccessTextActive: v[10],
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
    colorInfoBg: h[1],
    colorInfoBgHover: h[2],
    colorInfoBorder: h[3],
    colorInfoBorderHover: h[4],
    colorInfoHover: h[4],
    colorInfo: h[6],
    colorInfoActive: h[7],
    colorInfoTextHover: h[8],
    colorInfoText: h[9],
    colorInfoTextActive: h[10],
    colorLinkHover: b[4],
    colorLink: b[6],
    colorLinkActive: b[7],
    colorBgMask: new Pt("#000").setAlpha(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
const Ug = (e) => {
  let t = e, n = e, r = e, o = e;
  return e < 6 && e >= 5 ? t = e + 1 : e < 16 && e >= 6 ? t = e + 2 : e >= 16 && (t = 16), e < 7 && e >= 5 ? n = 4 : e < 8 && e >= 7 ? n = 5 : e < 14 && e >= 8 ? n = 6 : e < 16 && e >= 14 ? n = 7 : e >= 16 && (n = 8), e < 6 && e >= 2 ? r = 1 : e >= 6 && (r = 2), e > 4 && e < 8 ? o = 4 : e >= 8 && (o = 6), {
    borderRadius: e > 16 ? 16 : e,
    borderRadiusXS: r,
    borderRadiusSM: n,
    borderRadiusLG: t,
    borderRadiusOuter: o
  };
}, Kg = Ug;
function Gg(e) {
  const {
    motionUnit: t,
    motionBase: n,
    borderRadius: r,
    lineWidth: o
  } = e;
  return Object.assign({
    // motion
    motionDurationFast: `${(n + t).toFixed(1)}s`,
    motionDurationMid: `${(n + t * 2).toFixed(1)}s`,
    motionDurationSlow: `${(n + t * 3).toFixed(1)}s`,
    // line
    lineWidthBold: o + 1
  }, Kg(r));
}
const xn = (e, t) => new Pt(e).setAlpha(t).toRgbString(), Br = (e, t) => new Pt(e).darken(t).toHexString(), qg = (e) => {
  const t = Jn(e);
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
}, Yg = (e, t) => {
  const n = e || "#fff", r = t || "#000";
  return {
    colorBgBase: n,
    colorTextBase: r,
    colorText: xn(r, 0.88),
    colorTextSecondary: xn(r, 0.65),
    colorTextTertiary: xn(r, 0.45),
    colorTextQuaternary: xn(r, 0.25),
    colorFill: xn(r, 0.15),
    colorFillSecondary: xn(r, 0.06),
    colorFillTertiary: xn(r, 0.04),
    colorFillQuaternary: xn(r, 0.02),
    colorBgLayout: Br(n, 4),
    colorBgContainer: Br(n, 0),
    colorBgElevated: Br(n, 0),
    colorBgSpotlight: xn(r, 0.85),
    colorBorder: Br(n, 15),
    colorBorderSecondary: Br(n, 6)
  };
};
function Xg(e) {
  const t = new Array(10).fill(null).map((n, r) => {
    const o = r - 1, i = e * Math.pow(2.71828, o / 5), a = r > 1 ? Math.floor(i) : Math.ceil(i);
    return Math.floor(a / 2) * 2;
  });
  return t[1] = e, t.map((n) => {
    const r = n + 8;
    return {
      size: n,
      lineHeight: r / n
    };
  });
}
const Qg = (e) => {
  const t = Xg(e), n = t.map((o) => o.size), r = t.map((o) => o.lineHeight);
  return {
    fontSizeSM: n[0],
    fontSize: n[1],
    fontSizeLG: n[2],
    fontSizeXL: n[3],
    fontSizeHeading1: n[6],
    fontSizeHeading2: n[5],
    fontSizeHeading3: n[4],
    fontSizeHeading4: n[3],
    fontSizeHeading5: n[2],
    lineHeight: r[1],
    lineHeightLG: r[2],
    lineHeightSM: r[0],
    lineHeightHeading1: r[6],
    lineHeightHeading2: r[5],
    lineHeightHeading3: r[4],
    lineHeightHeading4: r[3],
    lineHeightHeading5: r[2]
  };
}, Jg = Qg;
function Zg(e) {
  const t = Object.keys(qf).map((n) => {
    const r = Jn(e[n]);
    return new Array(10).fill(1).reduce((o, i, a) => (o[`${n}-${a + 1}`] = r[a], o[`${n}${a + 1}`] = r[a], o), {});
  }).reduce((n, r) => (n = Object.assign(Object.assign({}, n), r), n), {});
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), Wg(e, {
    generateColorPalettes: qg,
    generateNeutralColorPalettes: Yg
  })), Jg(e.fontSize)), Vg(e)), zg(e)), Gg(e));
}
const e0 = Of(Zg), Yf = {
  token: Di,
  hashed: !0
}, Xf = /* @__PURE__ */ Pe.createContext(Yf);
function da(e) {
  return e >= 0 && e <= 255;
}
function $o(e, t) {
  const {
    r: n,
    g: r,
    b: o,
    a: i
  } = new Pt(e).toRgb();
  if (i < 1)
    return e;
  const {
    r: a,
    g: s,
    b: c
  } = new Pt(t).toRgb();
  for (let l = 0.01; l <= 1; l += 0.01) {
    const f = Math.round((n - a * (1 - l)) / l), d = Math.round((r - s * (1 - l)) / l), v = Math.round((o - c * (1 - l)) / l);
    if (da(f) && da(d) && da(v))
      return new Pt({
        r: f,
        g: d,
        b: v,
        a: Math.round(l * 100) / 100
      }).toRgbString();
  }
  return new Pt({
    r: n,
    g: r,
    b: o,
    a: 1
  }).toRgbString();
}
var t0 = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
function n0(e) {
  const {
    override: t
  } = e, n = t0(e, ["override"]), r = Object.assign({}, t);
  Object.keys(Di).forEach((v) => {
    delete r[v];
  });
  const o = Object.assign(Object.assign({}, n), r), i = 480, a = 576, s = 768, c = 992, l = 1200, f = 1600;
  if (o.motion === !1) {
    const v = "0s";
    o.motionDurationFast = v, o.motionDurationMid = v, o.motionDurationSlow = v;
  }
  return Object.assign(Object.assign(Object.assign({}, o), {
    // ============== Background ============== //
    colorFillContent: o.colorFillSecondary,
    colorFillContentHover: o.colorFill,
    colorFillAlter: o.colorFillQuaternary,
    colorBgContainerDisabled: o.colorFillTertiary,
    // ============== Split ============== //
    colorBorderBg: o.colorBgContainer,
    colorSplit: $o(o.colorBorderSecondary, o.colorBgContainer),
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
    colorErrorOutline: $o(o.colorErrorBg, o.colorBgContainer),
    colorWarningOutline: $o(o.colorWarningBg, o.colorBgContainer),
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
    controlOutline: $o(o.colorPrimaryBg, o.colorBgContainer),
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
    screenMDMax: c - 1,
    screenLG: c,
    screenLGMin: c,
    screenLGMax: l - 1,
    screenXL: l,
    screenXLMin: l,
    screenXLMax: f - 1,
    screenXXL: f,
    screenXXLMin: f,
    boxShadowPopoverArrow: "2px 2px 5px rgba(0, 0, 0, 0.05)",
    boxShadowCard: `
      0 1px 2px -2px ${new Pt("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new Pt("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new Pt("rgba(0, 0, 0, 0.09)").toRgbString()}
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
  }), r);
}
function $r() {
  const {
    token: e,
    hashed: t,
    theme: n,
    components: r
  } = Pe.useContext(Xf), o = `${wg}-${t || ""}`, i = n || e0, [a, s] = Ap(i, [Di, e], {
    salt: o,
    override: Object.assign({
      override: e
    }, r),
    formatToken: n0
  });
  return [i, a, t ? s : ""];
}
function mn(e) {
  var t = u.useRef();
  t.current = e;
  var n = u.useCallback(function() {
    for (var r, o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return (r = t.current) === null || r === void 0 ? void 0 : r.call.apply(r, [t].concat(i));
  }, []);
  return n;
}
function Er(e) {
  var t = u.useRef(!1), n = u.useState(e), r = U(n, 2), o = r[0], i = r[1];
  u.useEffect(function() {
    return t.current = !1, function() {
      t.current = !0;
    };
  }, []);
  function a(s, c) {
    c && t.current || i(s);
  }
  return [o, a];
}
function va(e) {
  return e !== void 0;
}
function di(e, t) {
  var n = t || {}, r = n.defaultValue, o = n.value, i = n.onChange, a = n.postState, s = Er(function() {
    return va(o) ? o : va(r) ? typeof r == "function" ? r() : r : typeof e == "function" ? e() : e;
  }), c = U(s, 2), l = c[0], f = c[1], d = o !== void 0 ? o : l, v = a ? a(d) : d, g = mn(i), p = Er([d]), h = U(p, 2), m = h[0], y = h[1];
  el(function() {
    var E = m[0];
    l !== E && g(l, E);
  }, [m]), el(function() {
    va(o) || f(o);
  }, [o]);
  var b = mn(function(E, w) {
    f(E, w), y([d], w);
  });
  return [v, b];
}
const Zs = "anticon", r0 = (e, t) => t || (e ? `ant-${e}` : "ant"), Qt = /* @__PURE__ */ u.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: r0,
  iconPrefixCls: Zs
}), Ja = {
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis"
}, Li = (e) => ({
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
}), ec = () => ({
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
}), o0 = (e) => ({
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
}), i0 = (e, t) => {
  const {
    fontFamily: n,
    fontSize: r
  } = e, o = `[class^="${t}"], [class*=" ${t}"]`;
  return {
    [o]: {
      fontFamily: n,
      fontSize: r,
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
}, a0 = (e) => ({
  outline: `${e.lineWidthFocus}px solid ${e.colorPrimaryBorder}`,
  outlineOffset: 1,
  transition: "outline-offset 0s, outline 0s"
}), s0 = (e) => ({
  "&:focus-visible": Object.assign({}, a0(e))
}), Qf = process.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC < "u";
let Za = !0;
function Ht() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  if (!Qf)
    return Object.assign.apply(Object, [{}].concat(t));
  Za = !1;
  const r = {};
  return t.forEach((o) => {
    Object.keys(o).forEach((a) => {
      Object.defineProperty(r, a, {
        configurable: !0,
        enumerable: !0,
        get: () => o[a]
      });
    });
  }), Za = !0, r;
}
function c0() {
}
function l0(e) {
  let t, n = e, r = c0;
  return Qf && (t = /* @__PURE__ */ new Set(), n = new Proxy(e, {
    get(o, i) {
      return Za && t.add(i), o[i];
    }
  }), r = (o, i) => {
    Array.from(t);
  }), {
    token: n,
    keys: t,
    flush: r
  };
}
function yo(e, t, n, r) {
  return (o) => {
    const [i, a, s] = $r(), {
      getPrefixCls: c,
      iconPrefixCls: l,
      csp: f
    } = Ft(Qt), d = c(), v = {
      theme: i,
      token: a,
      hashId: s,
      nonce: () => f?.nonce
    };
    return qa(Object.assign(Object.assign({}, v), {
      path: ["Shared", d]
    }), () => [{
      // Link
      "&": o0(a)
    }]), [qa(Object.assign(Object.assign({}, v), {
      path: [e, o, l]
    }), () => {
      const {
        token: g,
        flush: p
      } = l0(a), h = Object.assign({}, a[e]);
      if (r?.deprecatedTokens) {
        const {
          deprecatedTokens: S
        } = r;
        S.forEach((C) => {
          let [_, N] = C;
          var M;
          process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && Fe(!h?.[_], `The token '${String(_)}' of ${e} had deprecated, use '${String(N)}' instead.`), (h?.[_] || h?.[N]) && ((M = h[N]) !== null && M !== void 0 || (h[N] = h?.[_]));
        });
      }
      const m = typeof n == "function" ? n(Ht(g, h ?? {})) : n, y = Object.assign(Object.assign({}, m), h), b = `.${o}`, E = Ht(g, {
        componentCls: b,
        prefixCls: o,
        iconCls: `.${l}`,
        antCls: `.${d}`
      }, y), w = t(E, {
        hashId: s,
        prefixCls: o,
        rootPrefixCls: d,
        iconPrefixCls: l,
        overrideComponentToken: h
      });
      return p(e, y), [r?.resetStyle === !1 ? null : i0(a, o), w];
    }), s];
  };
}
const u0 = `-ant-${Date.now()}-${Math.random()}`;
function f0(e, t) {
  const n = {}, r = (a, s) => {
    let c = a.clone();
    return c = s?.(c) || c, c.toRgbString();
  }, o = (a, s) => {
    const c = new Pt(a), l = Jn(c.toRgbString());
    n[`${s}-color`] = r(c), n[`${s}-color-disabled`] = l[1], n[`${s}-color-hover`] = l[4], n[`${s}-color-active`] = l[6], n[`${s}-color-outline`] = c.clone().setAlpha(0.2).toRgbString(), n[`${s}-color-deprecated-bg`] = l[0], n[`${s}-color-deprecated-border`] = l[2];
  };
  if (t.primaryColor) {
    o(t.primaryColor, "primary");
    const a = new Pt(t.primaryColor), s = Jn(a.toRgbString());
    s.forEach((l, f) => {
      n[`primary-${f + 1}`] = l;
    }), n["primary-color-deprecated-l-35"] = r(a, (l) => l.lighten(35)), n["primary-color-deprecated-l-20"] = r(a, (l) => l.lighten(20)), n["primary-color-deprecated-t-20"] = r(a, (l) => l.tint(20)), n["primary-color-deprecated-t-50"] = r(a, (l) => l.tint(50)), n["primary-color-deprecated-f-12"] = r(a, (l) => l.setAlpha(l.getAlpha() * 0.12));
    const c = new Pt(s[0]);
    n["primary-color-active-deprecated-f-30"] = r(c, (l) => l.setAlpha(l.getAlpha() * 0.3)), n["primary-color-active-deprecated-d-02"] = r(c, (l) => l.darken(2));
  }
  return t.successColor && o(t.successColor, "success"), t.warningColor && o(t.warningColor, "warning"), t.errorColor && o(t.errorColor, "error"), t.infoColor && o(t.infoColor, "info"), `
  :root {
    ${Object.keys(n).map((a) => `--${e}-${a}: ${n[a]};`).join(`
`)}
  }
  `.trim();
}
function d0(e, t) {
  const n = f0(e, t);
  Dt() ? Or(n, `${u0}-dynamic-theme`) : process.env.NODE_ENV !== "production" && rn(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
const es = /* @__PURE__ */ u.createContext(!1), v0 = (e) => {
  let {
    children: t,
    disabled: n
  } = e;
  const r = u.useContext(es);
  return /* @__PURE__ */ u.createElement(es.Provider, {
    value: n ?? r
  }, t);
}, tc = es, ts = /* @__PURE__ */ u.createContext(void 0), h0 = (e) => {
  let {
    children: t,
    size: n
  } = e;
  const r = u.useContext(ts);
  return /* @__PURE__ */ u.createElement(ts.Provider, {
    value: n || r
  }, t);
}, ki = ts;
function m0() {
  const e = Ft(tc), t = Ft(ki);
  return {
    componentDisabled: e,
    componentSize: t
  };
}
function p0(e, t) {
  const n = e || {}, r = n.inherit === !1 || !t ? Yf : t;
  return Mi(() => {
    if (!e)
      return t;
    const i = Object.assign({}, r.components);
    return Object.keys(e.components || {}).forEach((a) => {
      i[a] = Object.assign(Object.assign({}, i[a]), e.components[a]);
    }), Object.assign(Object.assign(Object.assign({}, r), n), {
      token: Object.assign(Object.assign({}, r.token), n.token),
      components: i
    });
  }, [n, r], (i, a) => i.some((s, c) => {
    const l = a[c];
    return !gf(s, l, !0);
  }));
}
var g0 = ["children"], Jf = /* @__PURE__ */ u.createContext({});
function y0(e) {
  var t = e.children, n = ut(e, g0);
  return /* @__PURE__ */ u.createElement(Jf.Provider, {
    value: n
  }, t);
}
var b0 = /* @__PURE__ */ function(e) {
  mo(n, e);
  var t = po(n);
  function n() {
    return on(this, n), t.apply(this, arguments);
  }
  return an(n, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), n;
}(u.Component), zn = "none", Ao = "appear", Fo = "enter", Do = "leave", gl = "none", fn = "prepare", br = "start", Sr = "active", nc = "end", Zf = "prepared";
function yl(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit".concat(e)] = "webkit".concat(t), n["Moz".concat(e)] = "moz".concat(t), n["ms".concat(e)] = "MS".concat(t), n["O".concat(e)] = "o".concat(t.toLowerCase()), n;
}
function S0(e, t) {
  var n = {
    animationend: yl("Animation", "AnimationEnd"),
    transitionend: yl("Transition", "TransitionEnd")
  };
  return e && ("AnimationEvent" in t || delete n.animationend.animation, "TransitionEvent" in t || delete n.transitionend.transition), n;
}
var E0 = S0(Dt(), typeof window < "u" ? window : {}), ed = {};
if (Dt()) {
  var w0 = document.createElement("div");
  ed = w0.style;
}
var Lo = {};
function td(e) {
  if (Lo[e])
    return Lo[e];
  var t = E0[e];
  if (t)
    for (var n = Object.keys(t), r = n.length, o = 0; o < r; o += 1) {
      var i = n[o];
      if (Object.prototype.hasOwnProperty.call(t, i) && i in ed)
        return Lo[e] = t[i], Lo[e];
    }
  return "";
}
var nd = td("animationend"), rd = td("transitionend"), od = !!(nd && rd), bl = nd || "animationend", Sl = rd || "transitionend";
function El(e, t) {
  if (!e)
    return null;
  if (je(e) === "object") {
    var n = t.replace(/-\w/g, function(r) {
      return r[1].toUpperCase();
    });
    return e[n];
  }
  return "".concat(e, "-").concat(t);
}
const C0 = function(e) {
  var t = Ae(), n = Ae(e);
  n.current = e;
  var r = u.useCallback(function(a) {
    n.current(a);
  }, []);
  function o(a) {
    a && (a.removeEventListener(Sl, r), a.removeEventListener(bl, r));
  }
  function i(a) {
    t.current && t.current !== a && o(t.current), a && a !== t.current && (a.addEventListener(Sl, r), a.addEventListener(bl, r), t.current = a);
  }
  return u.useEffect(function() {
    return function() {
      o(t.current);
    };
  }, []), [i, o];
};
var id = Dt() ? Ou : jt;
const x0 = function() {
  var e = u.useRef(null);
  function t() {
    Tt.cancel(e.current);
  }
  function n(r) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    t();
    var i = Tt(function() {
      o <= 1 ? r({
        isCanceled: function() {
          return i !== e.current;
        }
      }) : n(r, o - 1);
    });
    e.current = i;
  }
  return u.useEffect(function() {
    return function() {
      t();
    };
  }, []), [n, t];
};
var O0 = [fn, br, Sr, nc], _0 = [fn, Zf], ad = !1, R0 = !0;
function sd(e) {
  return e === Sr || e === nc;
}
const P0 = function(e, t, n) {
  var r = Er(gl), o = U(r, 2), i = o[0], a = o[1], s = x0(), c = U(s, 2), l = c[0], f = c[1];
  function d() {
    a(fn, !0);
  }
  var v = t ? _0 : O0;
  return id(function() {
    if (i !== gl && i !== nc) {
      var g = v.indexOf(i), p = v[g + 1], h = n(i);
      h === ad ? a(p, !0) : p && l(function(m) {
        function y() {
          m.isCanceled() || a(p, !0);
        }
        h === !0 ? y() : Promise.resolve(h).then(y);
      });
    }
  }, [e, i]), u.useEffect(function() {
    return function() {
      f();
    };
  }, []), [d, i];
};
function T0(e, t, n, r) {
  var o = r.motionEnter, i = o === void 0 ? !0 : o, a = r.motionAppear, s = a === void 0 ? !0 : a, c = r.motionLeave, l = c === void 0 ? !0 : c, f = r.motionDeadline, d = r.motionLeaveImmediately, v = r.onAppearPrepare, g = r.onEnterPrepare, p = r.onLeavePrepare, h = r.onAppearStart, m = r.onEnterStart, y = r.onLeaveStart, b = r.onAppearActive, E = r.onEnterActive, w = r.onLeaveActive, S = r.onAppearEnd, C = r.onEnterEnd, _ = r.onLeaveEnd, N = r.onVisibleChanged, M = Er(), R = U(M, 2), k = R[0], x = R[1], O = Er(zn), P = U(O, 2), I = P[0], $ = P[1], D = Er(null), B = U(D, 2), K = B[0], ne = B[1], ce = Ae(!1), j = Ae(null);
  function H() {
    return n();
  }
  var z = Ae(!1);
  function G() {
    $(zn, !0), ne(null, !0);
  }
  function T(ge) {
    var ee = H();
    if (!(ge && !ge.deadline && ge.target !== ee)) {
      var le = z.current, Ce;
      I === Ao && le ? Ce = S?.(ee, ge) : I === Fo && le ? Ce = C?.(ee, ge) : I === Do && le && (Ce = _?.(ee, ge)), I !== zn && le && Ce !== !1 && G();
    }
  }
  var q = C0(T), F = U(q, 1), Y = F[0], te = function(ee) {
    var le, Ce, Ne;
    switch (ee) {
      case Ao:
        return le = {}, he(le, fn, v), he(le, br, h), he(le, Sr, b), le;
      case Fo:
        return Ce = {}, he(Ce, fn, g), he(Ce, br, m), he(Ce, Sr, E), Ce;
      case Do:
        return Ne = {}, he(Ne, fn, p), he(Ne, br, y), he(Ne, Sr, w), Ne;
      default:
        return {};
    }
  }, Q = u.useMemo(function() {
    return te(I);
  }, [I]), A = P0(I, !e, function(ge) {
    if (ge === fn) {
      var ee = Q[fn];
      return ee ? ee(H()) : ad;
    }
    if (Z in Q) {
      var le;
      ne(((le = Q[Z]) === null || le === void 0 ? void 0 : le.call(Q, H(), null)) || null);
    }
    return Z === Sr && (Y(H()), f > 0 && (clearTimeout(j.current), j.current = setTimeout(function() {
      T({
        deadline: !0
      });
    }, f))), Z === Zf && G(), R0;
  }), re = U(A, 2), L = re[0], Z = re[1], se = sd(Z);
  z.current = se, id(function() {
    x(t);
    var ge = ce.current;
    ce.current = !0;
    var ee;
    !ge && t && s && (ee = Ao), ge && t && i && (ee = Fo), (ge && !t && l || !ge && d && !t && l) && (ee = Do);
    var le = te(ee);
    ee && (e || le[fn]) ? ($(ee), L()) : $(zn);
  }, [t]), jt(function() {
    // Cancel appear
    (I === Ao && !s || // Cancel enter
    I === Fo && !i || // Cancel leave
    I === Do && !l) && $(zn);
  }, [s, i, l]), jt(function() {
    return function() {
      ce.current = !1, clearTimeout(j.current);
    };
  }, []);
  var ae = u.useRef(!1);
  jt(function() {
    k && (ae.current = !0), k !== void 0 && I === zn && ((ae.current || k) && N?.(k), ae.current = !0);
  }, [k, I]);
  var fe = K;
  return Q[fn] && Z === br && (fe = V({
    transition: "none"
  }, fe)), [I, Z, fe, k ?? t];
}
function N0(e) {
  var t = e;
  je(e) === "object" && (t = e.transitionSupport);
  function n(o, i) {
    return !!(o.motionName && t && i !== !1);
  }
  var r = /* @__PURE__ */ u.forwardRef(function(o, i) {
    var a = o.visible, s = a === void 0 ? !0 : a, c = o.removeOnLeave, l = c === void 0 ? !0 : c, f = o.forceRender, d = o.children, v = o.motionName, g = o.leavedClassName, p = o.eventProps, h = u.useContext(Jf), m = h.motion, y = n(o, m), b = Ae(), E = Ae();
    function w() {
      try {
        return b.current instanceof HTMLElement ? b.current : si(E.current);
      } catch {
        return null;
      }
    }
    var S = T0(y, s, w, o), C = U(S, 4), _ = C[0], N = C[1], M = C[2], R = C[3], k = u.useRef(R);
    R && (k.current = !0);
    var x = u.useCallback(function(ne) {
      b.current = ne, zs(i, ne);
    }, [i]), O, P = V(V({}, p), {}, {
      visible: s
    });
    if (!d)
      O = null;
    else if (_ === zn)
      R ? O = d(V({}, P), x) : !l && k.current && g ? O = d(V(V({}, P), {}, {
        className: g
      }), x) : f || !l && !g ? O = d(V(V({}, P), {}, {
        style: {
          display: "none"
        }
      }), x) : O = null;
    else {
      var I, $;
      N === fn ? $ = "prepare" : sd(N) ? $ = "active" : N === br && ($ = "start");
      var D = El(v, "".concat(_, "-").concat($));
      O = d(V(V({}, P), {}, {
        className: Re(El(v, _), (I = {}, he(I, D, D && $), he(I, v, typeof v == "string"), I)),
        style: M
      }), x);
    }
    if (/* @__PURE__ */ u.isValidElement(O) && go(O)) {
      var B = O, K = B.ref;
      K || (O = /* @__PURE__ */ u.cloneElement(O, {
        ref: x
      }));
    }
    return /* @__PURE__ */ u.createElement(b0, {
      ref: E
    }, O);
  });
  return r.displayName = "CSSMotion", r;
}
const bo = N0(od);
var ns = "add", rs = "keep", os = "remove", ha = "removed";
function M0(e) {
  var t;
  return e && je(e) === "object" && "key" in e ? t = e : t = {
    key: e
  }, V(V({}, t), {}, {
    key: String(t.key)
  });
}
function is() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return e.map(M0);
}
function I0() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], n = [], r = 0, o = t.length, i = is(e), a = is(t);
  i.forEach(function(l) {
    for (var f = !1, d = r; d < o; d += 1) {
      var v = a[d];
      if (v.key === l.key) {
        r < d && (n = n.concat(a.slice(r, d).map(function(g) {
          return V(V({}, g), {}, {
            status: ns
          });
        })), r = d), n.push(V(V({}, v), {}, {
          status: rs
        })), r += 1, f = !0;
        break;
      }
    }
    f || n.push(V(V({}, l), {}, {
      status: os
    }));
  }), r < o && (n = n.concat(a.slice(r).map(function(l) {
    return V(V({}, l), {}, {
      status: ns
    });
  })));
  var s = {};
  n.forEach(function(l) {
    var f = l.key;
    s[f] = (s[f] || 0) + 1;
  });
  var c = Object.keys(s).filter(function(l) {
    return s[l] > 1;
  });
  return c.forEach(function(l) {
    n = n.filter(function(f) {
      var d = f.key, v = f.status;
      return d !== l || v !== os;
    }), n.forEach(function(f) {
      f.key === l && (f.status = rs);
    });
  }), n;
}
var $0 = ["component", "children", "onVisibleChanged", "onAllRemoved"], A0 = ["status"], F0 = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function D0(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : bo, n = /* @__PURE__ */ function(r) {
    mo(i, r);
    var o = po(i);
    function i() {
      var a;
      on(this, i);
      for (var s = arguments.length, c = new Array(s), l = 0; l < s; l++)
        c[l] = arguments[l];
      return a = o.call.apply(o, [this].concat(c)), he(ii(a), "state", {
        keyEntities: []
      }), he(ii(a), "removeKey", function(f) {
        var d = a.state.keyEntities, v = d.map(function(g) {
          return g.key !== f ? g : V(V({}, g), {}, {
            status: ha
          });
        });
        return a.setState({
          keyEntities: v
        }), v.filter(function(g) {
          var p = g.status;
          return p !== ha;
        }).length;
      }), a;
    }
    return an(i, [{
      key: "render",
      value: function() {
        var s = this, c = this.state.keyEntities, l = this.props, f = l.component, d = l.children, v = l.onVisibleChanged, g = l.onAllRemoved, p = ut(l, $0), h = f || u.Fragment, m = {};
        return F0.forEach(function(y) {
          m[y] = p[y], delete p[y];
        }), delete p.keys, /* @__PURE__ */ u.createElement(h, p, c.map(function(y) {
          var b = y.status, E = ut(y, A0), w = b === ns || b === rs;
          return /* @__PURE__ */ u.createElement(t, Te({}, m, {
            key: E.key,
            visible: w,
            eventProps: E,
            onVisibleChanged: function(C) {
              if (v?.(C, {
                key: E.key
              }), !C) {
                var _ = s.removeKey(E.key);
                _ === 0 && g && g();
              }
            }
          }), d);
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(s, c) {
        var l = s.keys, f = c.keyEntities, d = is(l), v = I0(f, d);
        return {
          keyEntities: v.filter(function(g) {
            var p = f.find(function(h) {
              var m = h.key;
              return g.key === m;
            });
            return !(p && p.status === ha && g.status === os);
          })
        };
      }
      // ZombieJ: Return the count of rest keys. It's safe to refactor if need more info.
    }]), i;
  }(u.Component);
  return he(n, "defaultProps", {
    component: "div"
  }), n;
}
const L0 = D0(od);
function k0(e) {
  const {
    children: t
  } = e, [, n] = $r(), {
    motion: r
  } = n, o = u.useRef(!1);
  return o.current = o.current || r === !1, o.current ? /* @__PURE__ */ u.createElement(y0, {
    motion: r
  }, t) : t;
}
const j0 = (e, t) => {
  const [n, r] = $r();
  return qa({
    theme: n,
    token: r,
    hashId: "",
    path: ["ant-design-icons", e],
    nonce: () => t?.nonce
  }, () => [{
    [`.${e}`]: Object.assign(Object.assign({}, ec()), {
      [`.${e} .${e}-icon`]: {
        display: "block"
      }
    })
  }]);
}, H0 = j0;
var z0 = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
let as = !1;
const V0 = process.env.NODE_ENV !== "production" ? (e) => {
  process.env.NODE_ENV !== "production" && rn(!as, e, "Static function can not consume context like dynamic theme. Please use 'App' component instead.");
} : (
  /* istanbul ignore next */
  null
), B0 = ["getTargetContainer", "getPopupContainer", "renderEmpty", "pageHeader", "input", "pagination", "form", "select", "button"], W0 = "ant";
let vi, cd, ld;
function Zo() {
  return vi || W0;
}
function U0() {
  return cd || Zs;
}
function K0(e) {
  return Object.keys(e).some((t) => t.endsWith("Color"));
}
const G0 = (e) => {
  let {
    prefixCls: t,
    iconPrefixCls: n,
    theme: r
  } = e;
  t !== void 0 && (vi = t), n !== void 0 && (cd = n), r && (K0(r) ? (process.env.NODE_ENV !== "production" && rn(!1, "ConfigProvider", "`config` of css variable theme is not work in v5. Please use new `theme` config instead."), d0(Zo(), r)) : ld = r);
}, ud = () => ({
  getPrefixCls: (e, t) => t || (e ? `${Zo()}-${e}` : Zo()),
  getIconPrefixCls: U0,
  getRootPrefixCls: () => vi || Zo(),
  getTheme: () => ld
}), q0 = (e) => {
  const {
    children: t,
    csp: n,
    autoInsertSpaceInButton: r,
    alert: o,
    anchor: i,
    form: a,
    locale: s,
    componentSize: c,
    direction: l,
    space: f,
    virtual: d,
    dropdownMatchSelectWidth: v,
    popupMatchSelectWidth: g,
    popupOverflow: p,
    legacyLocale: h,
    parentContext: m,
    iconPrefixCls: y,
    theme: b,
    componentDisabled: E,
    segmented: w,
    statistic: S,
    spin: C,
    calendar: _,
    carousel: N,
    cascader: M,
    collapse: R,
    typography: k,
    checkbox: x,
    descriptions: O,
    divider: P,
    drawer: I,
    skeleton: $,
    steps: D,
    image: B,
    layout: K,
    list: ne,
    mentions: ce,
    modal: j,
    progress: H,
    result: z,
    slider: G,
    breadcrumb: T,
    menu: q,
    pagination: F,
    input: Y,
    empty: te,
    badge: Q,
    radio: A,
    rate: re,
    switch: L,
    transfer: Z,
    avatar: se,
    message: ae,
    tag: fe,
    table: ge,
    card: ee,
    tabs: le,
    timeline: Ce,
    timePicker: Ne,
    upload: ie,
    notification: de,
    tree: ze,
    colorPicker: Ye,
    datePicker: Ge
  } = e;
  process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && rn(v === void 0, "ConfigProvider", "`dropdownMatchSelectWidth` is deprecated. Please use `popupMatchSelectWidth` instead.");
  const qe = u.useCallback((Me, xe) => {
    const {
      prefixCls: tt
    } = e;
    if (xe)
      return xe;
    const nt = tt || m.getPrefixCls("");
    return Me ? `${nt}-${Me}` : nt;
  }, [m.getPrefixCls, e.prefixCls]), Le = y || m.iconPrefixCls || Zs, Xe = Le !== m.iconPrefixCls, Rt = n || m.csp, rt = H0(Le, Rt), ue = p0(b, m.theme);
  process.env.NODE_ENV !== "production" && (as = as || !!ue);
  const pe = {
    csp: Rt,
    autoInsertSpaceInButton: r,
    alert: o,
    anchor: i,
    locale: s || h,
    direction: l,
    space: f,
    virtual: d,
    popupMatchSelectWidth: g ?? v,
    popupOverflow: p,
    getPrefixCls: qe,
    iconPrefixCls: Le,
    theme: ue,
    segmented: w,
    statistic: S,
    spin: C,
    calendar: _,
    carousel: N,
    cascader: M,
    collapse: R,
    typography: k,
    checkbox: x,
    descriptions: O,
    divider: P,
    drawer: I,
    skeleton: $,
    steps: D,
    image: B,
    input: Y,
    layout: K,
    list: ne,
    mentions: ce,
    modal: j,
    progress: H,
    result: z,
    slider: G,
    breadcrumb: T,
    menu: q,
    pagination: F,
    empty: te,
    badge: Q,
    radio: A,
    rate: re,
    switch: L,
    transfer: Z,
    avatar: se,
    message: ae,
    tag: fe,
    table: ge,
    card: ee,
    tabs: le,
    timeline: Ce,
    timePicker: Ne,
    upload: ie,
    notification: de,
    tree: ze,
    colorPicker: Ye,
    datePicker: Ge
  }, Qe = Object.assign({}, m);
  Object.keys(pe).forEach((Me) => {
    pe[Me] !== void 0 && (Qe[Me] = pe[Me]);
  }), B0.forEach((Me) => {
    const xe = e[Me];
    xe && (Qe[Me] = xe);
  });
  const Ve = Mi(() => Qe, Qe, (Me, xe) => {
    const tt = Object.keys(Me), nt = Object.keys(xe);
    return tt.length !== nt.length || tt.some((yt) => Me[yt] !== xe[yt]);
  }), Je = u.useMemo(() => ({
    prefixCls: Le,
    csp: Rt
  }), [Le, Rt]);
  let Se = Xe ? rt(t) : t;
  const $e = u.useMemo(() => {
    var Me, xe, tt, nt;
    return yr(((Me = oo.Form) === null || Me === void 0 ? void 0 : Me.defaultValidateMessages) || {}, ((tt = (xe = Ve.locale) === null || xe === void 0 ? void 0 : xe.Form) === null || tt === void 0 ? void 0 : tt.defaultValidateMessages) || {}, ((nt = Ve.form) === null || nt === void 0 ? void 0 : nt.validateMessages) || {}, a?.validateMessages || {});
  }, [Ve, a?.validateMessages]);
  Object.keys($e).length > 0 && (Se = /* @__PURE__ */ u.createElement(dg.Provider, {
    value: $e
  }, t)), s && (Se = /* @__PURE__ */ u.createElement(Eg, {
    locale: s,
    _ANT_MARK__: Bf
  }, Se)), (Le || Rt) && (Se = /* @__PURE__ */ u.createElement(Qs.Provider, {
    value: Je
  }, Se)), c && (Se = /* @__PURE__ */ u.createElement(h0, {
    size: c
  }, Se)), Se = /* @__PURE__ */ u.createElement(k0, null, Se);
  const ot = u.useMemo(() => {
    const Me = ue || {}, {
      algorithm: xe,
      token: tt
    } = Me, nt = z0(Me, ["algorithm", "token"]), yt = xe && (!Array.isArray(xe) || xe.length > 0) ? Of(xe) : void 0;
    return Object.assign(Object.assign({}, nt), {
      theme: yt,
      token: Object.assign(Object.assign({}, Di), tt)
    });
  }, [ue]);
  return b && (Se = /* @__PURE__ */ u.createElement(Xf.Provider, {
    value: ot
  }, Se)), E !== void 0 && (Se = /* @__PURE__ */ u.createElement(v0, {
    disabled: E
  }, Se)), /* @__PURE__ */ u.createElement(Qt.Provider, {
    value: Ve
  }, Se);
}, er = (e) => {
  const t = u.useContext(Qt), n = u.useContext(Js);
  return /* @__PURE__ */ u.createElement(q0, Object.assign({
    parentContext: t,
    legacyLocale: n
  }, e));
};
er.ConfigContext = Qt;
er.SizeContext = ki;
er.config = G0;
er.useConfig = m0;
Object.defineProperty(er, "SizeContext", {
  get: () => (process.env.NODE_ENV !== "production" && rn(!1, "ConfigProvider", "ConfigProvider.SizeContext is deprecated. Please use `ConfigProvider.useConfig().componentSize` instead."), ki)
});
process.env.NODE_ENV !== "production" && (er.displayName = "ConfigProvider");
const rc = er;
var Y0 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" } }] }, name: "check-circle", theme: "filled" };
const X0 = Y0;
function fd(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
}
function Q0(e) {
  return fd(e) !== e?.ownerDocument;
}
function hi(e) {
  return Q0(e) ? fd(e) : null;
}
function J0(e, t) {
  Fe(e, "[@ant-design/icons] ".concat(t));
}
function wl(e) {
  return je(e) === "object" && typeof e.name == "string" && typeof e.theme == "string" && (je(e.icon) === "object" || typeof e.icon == "function");
}
function Cl() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(e).reduce(function(t, n) {
    var r = e[n];
    switch (n) {
      case "class":
        t.className = r, delete t.class;
        break;
      default:
        t[n] = r;
    }
    return t;
  }, {});
}
function ss(e, t, n) {
  return n ? /* @__PURE__ */ Pe.createElement(e.tag, V(V({
    key: t
  }, Cl(e.attrs)), n), (e.children || []).map(function(r, o) {
    return ss(r, "".concat(t, "-").concat(e.tag, "-").concat(o));
  })) : /* @__PURE__ */ Pe.createElement(e.tag, V({
    key: t
  }, Cl(e.attrs)), (e.children || []).map(function(r, o) {
    return ss(r, "".concat(t, "-").concat(e.tag, "-").concat(o));
  }));
}
function dd(e) {
  return Jn(e)[0];
}
function vd(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
var Z0 = `
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
`, ey = function(t) {
  var n = Ft(Qs), r = n.csp, o = n.prefixCls, i = Z0;
  o && (i = i.replace(/anticon/g, o)), jt(function() {
    var a = t.current, s = hi(a);
    Or(i, "@ant-design-icons", {
      prepend: !0,
      csp: r,
      attachTo: s
    });
  }, []);
}, ty = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"], Yr = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function ny(e) {
  var t = e.primaryColor, n = e.secondaryColor;
  Yr.primaryColor = t, Yr.secondaryColor = n || dd(t), Yr.calculated = !!n;
}
function ry() {
  return V({}, Yr);
}
var ji = function(t) {
  var n = t.icon, r = t.className, o = t.onClick, i = t.style, a = t.primaryColor, s = t.secondaryColor, c = ut(t, ty), l = u.useRef(), f = Yr;
  if (a && (f = {
    primaryColor: a,
    secondaryColor: s || dd(a)
  }), ey(l), J0(wl(n), "icon should be icon definiton, but got ".concat(n)), !wl(n))
    return null;
  var d = n;
  return d && typeof d.icon == "function" && (d = V(V({}, d), {}, {
    icon: d.icon(f.primaryColor, f.secondaryColor)
  })), ss(d.icon, "svg-".concat(d.name), V(V({
    className: r,
    onClick: o,
    style: i,
    "data-icon": d.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true"
  }, c), {}, {
    ref: l
  }));
};
ji.displayName = "IconReact";
ji.getTwoToneColors = ry;
ji.setTwoToneColors = ny;
const oc = ji;
function hd(e) {
  var t = vd(e), n = U(t, 2), r = n[0], o = n[1];
  return oc.setTwoToneColors({
    primaryColor: r,
    secondaryColor: o
  });
}
function oy() {
  var e = oc.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var iy = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
hd(jg.primary);
var Hi = /* @__PURE__ */ u.forwardRef(function(e, t) {
  var n, r = e.className, o = e.icon, i = e.spin, a = e.rotate, s = e.tabIndex, c = e.onClick, l = e.twoToneColor, f = ut(e, iy), d = u.useContext(Qs), v = d.prefixCls, g = v === void 0 ? "anticon" : v, p = d.rootClassName, h = Re(p, g, (n = {}, he(n, "".concat(g, "-").concat(o.name), !!o.name), he(n, "".concat(g, "-spin"), !!i || o.name === "loading"), n), r), m = s;
  m === void 0 && c && (m = -1);
  var y = a ? {
    msTransform: "rotate(".concat(a, "deg)"),
    transform: "rotate(".concat(a, "deg)")
  } : void 0, b = vd(l), E = U(b, 2), w = E[0], S = E[1];
  return /* @__PURE__ */ u.createElement("span", Te({
    role: "img",
    "aria-label": o.name
  }, f, {
    ref: t,
    tabIndex: m,
    onClick: c,
    className: h
  }), /* @__PURE__ */ u.createElement(oc, {
    icon: o,
    primaryColor: w,
    secondaryColor: S,
    style: y
  }));
});
Hi.displayName = "AntdIcon";
Hi.getTwoToneColor = oy;
Hi.setTwoToneColor = hd;
const Nn = Hi;
var md = function(t, n) {
  return /* @__PURE__ */ u.createElement(Nn, Te({}, t, {
    ref: n,
    icon: X0
  }));
};
process.env.NODE_ENV !== "production" && (md.displayName = "CheckCircleFilled");
const ay = /* @__PURE__ */ u.forwardRef(md);
var sy = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z" } }] }, name: "close-circle", theme: "filled" };
const cy = sy;
var pd = function(t, n) {
  return /* @__PURE__ */ u.createElement(Nn, Te({}, t, {
    ref: n,
    icon: cy
  }));
};
process.env.NODE_ENV !== "production" && (pd.displayName = "CloseCircleFilled");
const gd = /* @__PURE__ */ u.forwardRef(pd);
var ly = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" } }] }, name: "close", theme: "outlined" };
const uy = ly;
var yd = function(t, n) {
  return /* @__PURE__ */ u.createElement(Nn, Te({}, t, {
    ref: n,
    icon: uy
  }));
};
process.env.NODE_ENV !== "production" && (yd.displayName = "CloseOutlined");
const bd = /* @__PURE__ */ u.forwardRef(yd);
var fy = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "exclamation-circle", theme: "filled" };
const dy = fy;
var Sd = function(t, n) {
  return /* @__PURE__ */ u.createElement(Nn, Te({}, t, {
    ref: n,
    icon: dy
  }));
};
process.env.NODE_ENV !== "production" && (Sd.displayName = "ExclamationCircleFilled");
const vy = /* @__PURE__ */ u.forwardRef(Sd);
var hy = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "info-circle", theme: "filled" };
const my = hy;
var Ed = function(t, n) {
  return /* @__PURE__ */ u.createElement(Nn, Te({}, t, {
    ref: n,
    icon: my
  }));
};
process.env.NODE_ENV !== "production" && (Ed.displayName = "InfoCircleFilled");
const py = /* @__PURE__ */ u.forwardRef(Ed);
var gy = `accept acceptCharset accessKey action allowFullScreen allowTransparency
    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge
    charSet checked classID className colSpan cols content contentEditable contextMenu
    controls coords crossOrigin data dateTime default defer dir disabled download draggable
    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder
    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity
    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media
    mediaGroup method min minLength multiple muted name noValidate nonce open
    optimum pattern placeholder poster preload radioGroup readOnly rel required
    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected
    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style
    summary tabIndex target title type useMap value width wmode wrap`, yy = `onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`, by = "".concat(gy, " ").concat(yy).split(/[\s\n]+/), Sy = "aria-", Ey = "data-";
function xl(e, t) {
  return e.indexOf(t) === 0;
}
function mi(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n;
  t === !1 ? n = {
    aria: !0,
    data: !0,
    attr: !0
  } : t === !0 ? n = {
    aria: !0
  } : n = V({}, t);
  var r = {};
  return Object.keys(e).forEach(function(o) {
    // Aria
    (n.aria && (o === "role" || xl(o, Sy)) || // Data
    n.data && xl(o, Ey) || // Attr
    n.attr && by.includes(o)) && (r[o] = e[o]);
  }), r;
}
const {
  isValidElement: wd
} = u;
function wy(e) {
  return e && wd(e) && e.type === u.Fragment;
}
function Cy(e, t, n) {
  return wd(e) ? /* @__PURE__ */ u.cloneElement(e, typeof n == "function" ? n(e.props || {}) : n) : t;
}
function Cd(e, t) {
  return Cy(e, e, t);
}
var J = {
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
    var n = t.keyCode;
    if (t.altKey && !t.ctrlKey || t.metaKey || // Function keys don't generate text
    n >= J.F1 && n <= J.F12)
      return !1;
    switch (n) {
      case J.ALT:
      case J.CAPS_LOCK:
      case J.CONTEXT_MENU:
      case J.CTRL:
      case J.DOWN:
      case J.END:
      case J.ESC:
      case J.HOME:
      case J.INSERT:
      case J.LEFT:
      case J.MAC_FF_META:
      case J.META:
      case J.NUMLOCK:
      case J.NUM_CENTER:
      case J.PAGE_DOWN:
      case J.PAGE_UP:
      case J.PAUSE:
      case J.PRINT_SCREEN:
      case J.RIGHT:
      case J.SHIFT:
      case J.UP:
      case J.WIN_KEY:
      case J.WIN_KEY_RIGHT:
        return !1;
      default:
        return !0;
    }
  },
  /**
   * whether character is entered.
   */
  isCharacterKey: function(t) {
    if (t >= J.ZERO && t <= J.NINE || t >= J.NUM_ZERO && t <= J.NUM_MULTIPLY || t >= J.A && t <= J.Z || window.navigator.userAgent.indexOf("WebKit") !== -1 && t === 0)
      return !0;
    switch (t) {
      case J.SPACE:
      case J.QUESTION_MARK:
      case J.NUM_PLUS:
      case J.NUM_MINUS:
      case J.NUM_PERIOD:
      case J.NUM_DIVISION:
      case J.SEMICOLON:
      case J.DASH:
      case J.EQUALS:
      case J.COMMA:
      case J.PERIOD:
      case J.SLASH:
      case J.APOSTROPHE:
      case J.SINGLE_QUOTE:
      case J.OPEN_SQUARE_BRACKET:
      case J.BACKSLASH:
      case J.CLOSE_SQUARE_BRACKET:
        return !0;
      default:
        return !1;
    }
  }
}, xd = /* @__PURE__ */ u.forwardRef(function(e, t) {
  var n = e.prefixCls, r = e.style, o = e.className, i = e.duration, a = i === void 0 ? 4.5 : i, s = e.eventKey, c = e.content, l = e.closable, f = e.closeIcon, d = f === void 0 ? "x" : f, v = e.props, g = e.onClick, p = e.onNoticeClose, h = e.times, m = u.useState(!1), y = U(m, 2), b = y[0], E = y[1], w = function() {
    p(s);
  }, S = function(N) {
    (N.key === "Enter" || N.code === "Enter" || N.keyCode === J.ENTER) && w();
  };
  u.useEffect(function() {
    if (!b && a > 0) {
      var _ = setTimeout(function() {
        w();
      }, a * 1e3);
      return function() {
        clearTimeout(_);
      };
    }
  }, [a, b, h]);
  var C = "".concat(n, "-notice");
  return /* @__PURE__ */ u.createElement("div", Te({}, v, {
    ref: t,
    className: Re(C, o, he({}, "".concat(C, "-closable"), l)),
    style: r,
    onMouseEnter: function() {
      E(!0);
    },
    onMouseLeave: function() {
      E(!1);
    },
    onClick: g
  }), /* @__PURE__ */ u.createElement("div", {
    className: "".concat(C, "-content")
  }, c), l && /* @__PURE__ */ u.createElement("a", {
    tabIndex: 0,
    className: "".concat(C, "-close"),
    onKeyDown: S,
    onClick: function(N) {
      N.preventDefault(), N.stopPropagation(), w();
    }
  }, d));
}), Od = /* @__PURE__ */ u.forwardRef(function(e, t) {
  var n = e.prefixCls, r = n === void 0 ? "rc-notification" : n, o = e.container, i = e.motion, a = e.maxCount, s = e.className, c = e.style, l = e.onAllRemoved, f = u.useState([]), d = U(f, 2), v = d[0], g = d[1], p = function(_) {
    var N, M = v.find(function(R) {
      return R.key === _;
    });
    M == null || (N = M.onClose) === null || N === void 0 || N.call(M), g(function(R) {
      return R.filter(function(k) {
        return k.key !== _;
      });
    });
  };
  u.useImperativeHandle(t, function() {
    return {
      open: function(_) {
        g(function(N) {
          var M = me(N), R = M.findIndex(function(O) {
            return O.key === _.key;
          }), k = V({}, _);
          if (R >= 0) {
            var x;
            k.times = (((x = N[R]) === null || x === void 0 ? void 0 : x.times) || 0) + 1, M[R] = k;
          } else
            k.times = 0, M.push(k);
          return a > 0 && M.length > a && (M = M.slice(-a)), M;
        });
      },
      close: function(_) {
        p(_);
      },
      destroy: function() {
        g([]);
      }
    };
  });
  var h = u.useState({}), m = U(h, 2), y = m[0], b = m[1];
  u.useEffect(function() {
    var C = {};
    v.forEach(function(_) {
      var N = _.placement, M = N === void 0 ? "topRight" : N;
      M && (C[M] = C[M] || [], C[M].push(_));
    }), Object.keys(y).forEach(function(_) {
      C[_] = C[_] || [];
    }), b(C);
  }, [v]);
  var E = function(_) {
    b(function(N) {
      var M = V({}, N), R = M[_] || [];
      return R.length || delete M[_], M;
    });
  }, w = u.useRef(!1);
  if (u.useEffect(function() {
    Object.keys(y).length > 0 ? w.current = !0 : w.current && (l?.(), w.current = !1);
  }, [y]), !o)
    return null;
  var S = Object.keys(y);
  return /* @__PURE__ */ $s(/* @__PURE__ */ u.createElement(u.Fragment, null, S.map(function(C) {
    var _ = y[C], N = _.map(function(R) {
      return {
        config: R,
        key: R.key
      };
    }), M = typeof i == "function" ? i(C) : i;
    return /* @__PURE__ */ u.createElement(L0, Te({
      key: C,
      className: Re(r, "".concat(r, "-").concat(C), s?.(C)),
      style: c?.(C),
      keys: N,
      motionAppear: !0
    }, M, {
      onAllRemoved: function() {
        E(C);
      }
    }), function(R, k) {
      var x = R.config, O = R.className, P = R.style, I = x.key, $ = x.times, D = x.className, B = x.style;
      return /* @__PURE__ */ u.createElement(xd, Te({}, x, {
        ref: k,
        prefixCls: r,
        className: Re(O, D),
        style: V(V({}, P), B),
        times: $,
        key: I,
        eventKey: I,
        onNoticeClose: p
      }));
    });
  })), o);
});
process.env.NODE_ENV !== "production" && (Od.displayName = "Notifications");
var xy = ["getContainer", "motion", "prefixCls", "maxCount", "className", "style", "onAllRemoved"], Oy = function() {
  return document.body;
}, Ol = 0;
function _y() {
  for (var e = {}, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  return n.forEach(function(o) {
    o && Object.keys(o).forEach(function(i) {
      var a = o[i];
      a !== void 0 && (e[i] = a);
    });
  }), e;
}
function Ry() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.getContainer, n = t === void 0 ? Oy : t, r = e.motion, o = e.prefixCls, i = e.maxCount, a = e.className, s = e.style, c = e.onAllRemoved, l = ut(e, xy), f = u.useState(), d = U(f, 2), v = d[0], g = d[1], p = u.useRef(), h = /* @__PURE__ */ u.createElement(Od, {
    container: v,
    ref: p,
    prefixCls: o,
    motion: r,
    maxCount: i,
    className: a,
    style: s,
    onAllRemoved: c
  }), m = u.useState([]), y = U(m, 2), b = y[0], E = y[1], w = u.useMemo(function() {
    return {
      open: function(C) {
        var _ = _y(l, C);
        (_.key === null || _.key === void 0) && (_.key = "rc-notification-".concat(Ol), Ol += 1), E(function(N) {
          return [].concat(me(N), [{
            type: "open",
            config: _
          }]);
        });
      },
      close: function(C) {
        E(function(_) {
          return [].concat(me(_), [{
            type: "close",
            key: C
          }]);
        });
      },
      destroy: function() {
        E(function(C) {
          return [].concat(me(C), [{
            type: "destroy"
          }]);
        });
      }
    };
  }, []);
  return u.useEffect(function() {
    g(n());
  }), u.useEffect(function() {
    p.current && b.length && (b.forEach(function(S) {
      switch (S.type) {
        case "open":
          p.current.open(S.config);
          break;
        case "close":
          p.current.close(S.key);
          break;
        case "destroy":
          p.current.destroy();
          break;
      }
    }), E(function(S) {
      return S.filter(function(C) {
        return !b.includes(C);
      });
    }));
  }, [b]), [w, h];
}
var Py = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, name: "loading", theme: "outlined" };
const Ty = Py;
var _d = function(t, n) {
  return /* @__PURE__ */ u.createElement(Nn, Te({}, t, {
    ref: n,
    icon: Ty
  }));
};
process.env.NODE_ENV !== "production" && (_d.displayName = "LoadingOutlined");
const ic = /* @__PURE__ */ u.forwardRef(_d), Ny = (e) => {
  const {
    componentCls: t,
    iconCls: n,
    boxShadow: r,
    colorText: o,
    colorSuccess: i,
    colorError: a,
    colorWarning: s,
    colorInfo: c,
    fontSizeLG: l,
    motionEaseInOutCirc: f,
    motionDurationSlow: d,
    marginXS: v,
    paddingXS: g,
    borderRadiusLG: p,
    zIndexPopup: h,
    // Custom token
    contentPadding: m,
    contentBg: y
  } = e, b = `${t}-notice`, E = new _t("MessageMoveIn", {
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
  }), w = new _t("MessageMoveOut", {
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
  }), S = {
    padding: g,
    textAlign: "center",
    [`${t}-custom-content > ${n}`]: {
      verticalAlign: "text-bottom",
      marginInlineEnd: v,
      fontSize: l
    },
    [`${b}-content`]: {
      display: "inline-block",
      padding: m,
      background: y,
      borderRadius: p,
      boxShadow: r,
      pointerEvents: "all"
    },
    [`${t}-success > ${n}`]: {
      color: i
    },
    [`${t}-error > ${n}`]: {
      color: a
    },
    [`${t}-warning > ${n}`]: {
      color: s
    },
    [`${t}-info > ${n},
      ${t}-loading > ${n}`]: {
      color: c
    }
  };
  return [
    // ============================ Holder ============================
    {
      [t]: Object.assign(Object.assign({}, Li(e)), {
        color: o,
        position: "fixed",
        top: v,
        width: "100%",
        pointerEvents: "none",
        zIndex: h,
        [`${t}-move-up`]: {
          animationFillMode: "forwards"
        },
        [`
        ${t}-move-up-appear,
        ${t}-move-up-enter
      `]: {
          animationName: E,
          animationDuration: d,
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
          animationName: w,
          animationDuration: d,
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
        [b]: Object.assign({}, S)
      }
    },
    // ============================= Pure =============================
    {
      [`${t}-notice-pure-panel`]: Object.assign(Object.assign({}, S), {
        padding: 0,
        textAlign: "start"
      })
    }
  ];
}, Rd = yo("Message", (e) => {
  const t = Ht(e, {
    height: 150
  });
  return [Ny(t)];
}, (e) => ({
  zIndexPopup: e.zIndexPopupBase + 10,
  contentBg: e.colorBgElevated,
  contentPadding: `${(e.controlHeightLG - e.fontSize * e.lineHeight) / 2}px ${e.paddingSM}px`
}));
var My = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const Iy = {
  info: /* @__PURE__ */ u.createElement(py, null),
  success: /* @__PURE__ */ u.createElement(ay, null),
  error: /* @__PURE__ */ u.createElement(gd, null),
  warning: /* @__PURE__ */ u.createElement(vy, null),
  loading: /* @__PURE__ */ u.createElement(ic, null)
}, Pd = (e) => {
  let {
    prefixCls: t,
    type: n,
    icon: r,
    children: o
  } = e;
  return /* @__PURE__ */ u.createElement("div", {
    className: Re(`${t}-custom-content`, `${t}-${n}`)
  }, r || Iy[n], /* @__PURE__ */ u.createElement("span", null, o));
}, $y = (e) => {
  const {
    prefixCls: t,
    className: n,
    type: r,
    icon: o,
    content: i
  } = e, a = My(e, ["prefixCls", "className", "type", "icon", "content"]), {
    getPrefixCls: s
  } = u.useContext(Qt), c = t || s("message"), [, l] = Rd(c);
  return /* @__PURE__ */ u.createElement(xd, Object.assign({}, a, {
    prefixCls: c,
    className: Re(n, l, `${c}-notice-pure-panel`),
    eventKey: "pure",
    duration: null,
    content: /* @__PURE__ */ u.createElement(Pd, {
      prefixCls: c,
      type: r,
      icon: o
    }, i)
  }));
}, Ay = $y;
function Fy(e, t) {
  return {
    motionName: t ?? `${e}-move-up`
  };
}
function ac(e) {
  let t;
  const n = new Promise((o) => {
    t = e(() => {
      o(!0);
    });
  }), r = () => {
    t?.();
  };
  return r.then = (o, i) => n.then(o, i), r.promise = n, r;
}
var Dy = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const Ly = 8, ky = 3, jy = /* @__PURE__ */ u.forwardRef((e, t) => {
  const {
    top: n,
    prefixCls: r,
    getContainer: o,
    maxCount: i,
    duration: a = ky,
    rtl: s,
    transitionName: c,
    onAllRemoved: l
  } = e, {
    getPrefixCls: f,
    getPopupContainer: d,
    message: v
  } = u.useContext(Qt), g = r || f("message"), [, p] = Rd(g), h = () => ({
    left: "50%",
    transform: "translateX(-50%)",
    top: n ?? Ly
  }), m = () => Re(p, {
    [`${g}-rtl`]: s
  }), y = () => Fy(g, c), b = /* @__PURE__ */ u.createElement("span", {
    className: `${g}-close-x`
  }, /* @__PURE__ */ u.createElement(bd, {
    className: `${g}-close-icon`
  })), [E, w] = Ry({
    prefixCls: g,
    style: h,
    className: m,
    motion: y,
    closable: !1,
    closeIcon: b,
    duration: a,
    getContainer: () => o?.() || d?.() || document.body,
    maxCount: i,
    onAllRemoved: l
  });
  return u.useImperativeHandle(t, () => Object.assign(Object.assign({}, E), {
    prefixCls: g,
    hashId: p,
    message: v
  })), w;
});
let _l = 0;
function Td(e) {
  const t = u.useRef(null);
  return [u.useMemo(() => {
    const r = (c) => {
      var l;
      (l = t.current) === null || l === void 0 || l.close(c);
    }, o = (c) => {
      if (!t.current) {
        process.env.NODE_ENV !== "production" && rn(!1, "Message", "You are calling notice in render which will break in React 18 concurrent mode. Please trigger in effect instead.");
        const _ = () => {
        };
        return _.then = () => {
        }, _;
      }
      const {
        open: l,
        prefixCls: f,
        hashId: d,
        message: v
      } = t.current, g = `${f}-notice`, {
        content: p,
        icon: h,
        type: m,
        key: y,
        className: b,
        style: E,
        onClose: w
      } = c, S = Dy(c, ["content", "icon", "type", "key", "className", "style", "onClose"]);
      let C = y;
      return C == null && (_l += 1, C = `antd-message-${_l}`), ac((_) => (l(Object.assign(Object.assign({}, S), {
        key: C,
        content: /* @__PURE__ */ u.createElement(Pd, {
          prefixCls: f,
          type: m,
          icon: h
        }, p),
        placement: "top",
        className: Re(m && `${g}-${m}`, d, b, v?.className),
        style: Object.assign(Object.assign({}, v?.style), E),
        onClose: () => {
          w?.(), _();
        }
      })), () => {
        r(C);
      }));
    }, a = {
      open: o,
      destroy: (c) => {
        var l;
        c !== void 0 ? r(c) : (l = t.current) === null || l === void 0 || l.destroy();
      }
    };
    return ["info", "success", "warning", "error", "loading"].forEach((c) => {
      const l = (f, d, v) => {
        let g;
        f && typeof f == "object" && "content" in f ? g = f : g = {
          content: f
        };
        let p, h;
        typeof d == "function" ? h = d : (p = d, h = v);
        const m = Object.assign(Object.assign({
          onClose: h,
          duration: p
        }, g), {
          type: c
        });
        return o(m);
      };
      a[c] = l;
    }), a;
  }, []), /* @__PURE__ */ u.createElement(jy, Object.assign({
    key: "message-holder"
  }, e, {
    ref: t
  }))];
}
function Hy(e) {
  return Td(e);
}
function Xt() {
  Xt = function() {
    return e;
  };
  var e = {}, t = Object.prototype, n = t.hasOwnProperty, r = Object.defineProperty || function(x, O, P) {
    x[O] = P.value;
  }, o = typeof Symbol == "function" ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", s = o.toStringTag || "@@toStringTag";
  function c(x, O, P) {
    return Object.defineProperty(x, O, {
      value: P,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), x[O];
  }
  try {
    c({}, "");
  } catch {
    c = function(P, I, $) {
      return P[I] = $;
    };
  }
  function l(x, O, P, I) {
    var $ = O && O.prototype instanceof v ? O : v, D = Object.create($.prototype), B = new M(I || []);
    return r(D, "_invoke", {
      value: S(x, P, B)
    }), D;
  }
  function f(x, O, P) {
    try {
      return {
        type: "normal",
        arg: x.call(O, P)
      };
    } catch (I) {
      return {
        type: "throw",
        arg: I
      };
    }
  }
  e.wrap = l;
  var d = {};
  function v() {
  }
  function g() {
  }
  function p() {
  }
  var h = {};
  c(h, i, function() {
    return this;
  });
  var m = Object.getPrototypeOf, y = m && m(m(R([])));
  y && y !== t && n.call(y, i) && (h = y);
  var b = p.prototype = v.prototype = Object.create(h);
  function E(x) {
    ["next", "throw", "return"].forEach(function(O) {
      c(x, O, function(P) {
        return this._invoke(O, P);
      });
    });
  }
  function w(x, O) {
    function P($, D, B, K) {
      var ne = f(x[$], x, D);
      if (ne.type !== "throw") {
        var ce = ne.arg, j = ce.value;
        return j && je(j) == "object" && n.call(j, "__await") ? O.resolve(j.__await).then(function(H) {
          P("next", H, B, K);
        }, function(H) {
          P("throw", H, B, K);
        }) : O.resolve(j).then(function(H) {
          ce.value = H, B(ce);
        }, function(H) {
          return P("throw", H, B, K);
        });
      }
      K(ne.arg);
    }
    var I;
    r(this, "_invoke", {
      value: function(D, B) {
        function K() {
          return new O(function(ne, ce) {
            P(D, B, ne, ce);
          });
        }
        return I = I ? I.then(K, K) : K();
      }
    });
  }
  function S(x, O, P) {
    var I = "suspendedStart";
    return function($, D) {
      if (I === "executing")
        throw new Error("Generator is already running");
      if (I === "completed") {
        if ($ === "throw")
          throw D;
        return k();
      }
      for (P.method = $, P.arg = D; ; ) {
        var B = P.delegate;
        if (B) {
          var K = C(B, P);
          if (K) {
            if (K === d)
              continue;
            return K;
          }
        }
        if (P.method === "next")
          P.sent = P._sent = P.arg;
        else if (P.method === "throw") {
          if (I === "suspendedStart")
            throw I = "completed", P.arg;
          P.dispatchException(P.arg);
        } else
          P.method === "return" && P.abrupt("return", P.arg);
        I = "executing";
        var ne = f(x, O, P);
        if (ne.type === "normal") {
          if (I = P.done ? "completed" : "suspendedYield", ne.arg === d)
            continue;
          return {
            value: ne.arg,
            done: P.done
          };
        }
        ne.type === "throw" && (I = "completed", P.method = "throw", P.arg = ne.arg);
      }
    };
  }
  function C(x, O) {
    var P = O.method, I = x.iterator[P];
    if (I === void 0)
      return O.delegate = null, P === "throw" && x.iterator.return && (O.method = "return", O.arg = void 0, C(x, O), O.method === "throw") || P !== "return" && (O.method = "throw", O.arg = new TypeError("The iterator does not provide a '" + P + "' method")), d;
    var $ = f(I, x.iterator, O.arg);
    if ($.type === "throw")
      return O.method = "throw", O.arg = $.arg, O.delegate = null, d;
    var D = $.arg;
    return D ? D.done ? (O[x.resultName] = D.value, O.next = x.nextLoc, O.method !== "return" && (O.method = "next", O.arg = void 0), O.delegate = null, d) : D : (O.method = "throw", O.arg = new TypeError("iterator result is not an object"), O.delegate = null, d);
  }
  function _(x) {
    var O = {
      tryLoc: x[0]
    };
    1 in x && (O.catchLoc = x[1]), 2 in x && (O.finallyLoc = x[2], O.afterLoc = x[3]), this.tryEntries.push(O);
  }
  function N(x) {
    var O = x.completion || {};
    O.type = "normal", delete O.arg, x.completion = O;
  }
  function M(x) {
    this.tryEntries = [{
      tryLoc: "root"
    }], x.forEach(_, this), this.reset(!0);
  }
  function R(x) {
    if (x) {
      var O = x[i];
      if (O)
        return O.call(x);
      if (typeof x.next == "function")
        return x;
      if (!isNaN(x.length)) {
        var P = -1, I = function $() {
          for (; ++P < x.length; )
            if (n.call(x, P))
              return $.value = x[P], $.done = !1, $;
          return $.value = void 0, $.done = !0, $;
        };
        return I.next = I;
      }
    }
    return {
      next: k
    };
  }
  function k() {
    return {
      value: void 0,
      done: !0
    };
  }
  return g.prototype = p, r(b, "constructor", {
    value: p,
    configurable: !0
  }), r(p, "constructor", {
    value: g,
    configurable: !0
  }), g.displayName = c(p, s, "GeneratorFunction"), e.isGeneratorFunction = function(x) {
    var O = typeof x == "function" && x.constructor;
    return !!O && (O === g || (O.displayName || O.name) === "GeneratorFunction");
  }, e.mark = function(x) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(x, p) : (x.__proto__ = p, c(x, s, "GeneratorFunction")), x.prototype = Object.create(b), x;
  }, e.awrap = function(x) {
    return {
      __await: x
    };
  }, E(w.prototype), c(w.prototype, a, function() {
    return this;
  }), e.AsyncIterator = w, e.async = function(x, O, P, I, $) {
    $ === void 0 && ($ = Promise);
    var D = new w(l(x, O, P, I), $);
    return e.isGeneratorFunction(O) ? D : D.next().then(function(B) {
      return B.done ? B.value : D.next();
    });
  }, E(b), c(b, s, "Generator"), c(b, i, function() {
    return this;
  }), c(b, "toString", function() {
    return "[object Generator]";
  }), e.keys = function(x) {
    var O = Object(x), P = [];
    for (var I in O)
      P.push(I);
    return P.reverse(), function $() {
      for (; P.length; ) {
        var D = P.pop();
        if (D in O)
          return $.value = D, $.done = !1, $;
      }
      return $.done = !0, $;
    };
  }, e.values = R, M.prototype = {
    constructor: M,
    reset: function(O) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(N), !O)
        for (var P in this)
          P.charAt(0) === "t" && n.call(this, P) && !isNaN(+P.slice(1)) && (this[P] = void 0);
    },
    stop: function() {
      this.done = !0;
      var O = this.tryEntries[0].completion;
      if (O.type === "throw")
        throw O.arg;
      return this.rval;
    },
    dispatchException: function(O) {
      if (this.done)
        throw O;
      var P = this;
      function I(ce, j) {
        return B.type = "throw", B.arg = O, P.next = ce, j && (P.method = "next", P.arg = void 0), !!j;
      }
      for (var $ = this.tryEntries.length - 1; $ >= 0; --$) {
        var D = this.tryEntries[$], B = D.completion;
        if (D.tryLoc === "root")
          return I("end");
        if (D.tryLoc <= this.prev) {
          var K = n.call(D, "catchLoc"), ne = n.call(D, "finallyLoc");
          if (K && ne) {
            if (this.prev < D.catchLoc)
              return I(D.catchLoc, !0);
            if (this.prev < D.finallyLoc)
              return I(D.finallyLoc);
          } else if (K) {
            if (this.prev < D.catchLoc)
              return I(D.catchLoc, !0);
          } else {
            if (!ne)
              throw new Error("try statement without catch or finally");
            if (this.prev < D.finallyLoc)
              return I(D.finallyLoc);
          }
        }
      }
    },
    abrupt: function(O, P) {
      for (var I = this.tryEntries.length - 1; I >= 0; --I) {
        var $ = this.tryEntries[I];
        if ($.tryLoc <= this.prev && n.call($, "finallyLoc") && this.prev < $.finallyLoc) {
          var D = $;
          break;
        }
      }
      D && (O === "break" || O === "continue") && D.tryLoc <= P && P <= D.finallyLoc && (D = null);
      var B = D ? D.completion : {};
      return B.type = O, B.arg = P, D ? (this.method = "next", this.next = D.finallyLoc, d) : this.complete(B);
    },
    complete: function(O, P) {
      if (O.type === "throw")
        throw O.arg;
      return O.type === "break" || O.type === "continue" ? this.next = O.arg : O.type === "return" ? (this.rval = this.arg = O.arg, this.method = "return", this.next = "end") : O.type === "normal" && P && (this.next = P), d;
    },
    finish: function(O) {
      for (var P = this.tryEntries.length - 1; P >= 0; --P) {
        var I = this.tryEntries[P];
        if (I.finallyLoc === O)
          return this.complete(I.completion, I.afterLoc), N(I), d;
      }
    },
    catch: function(O) {
      for (var P = this.tryEntries.length - 1; P >= 0; --P) {
        var I = this.tryEntries[P];
        if (I.tryLoc === O) {
          var $ = I.completion;
          if ($.type === "throw") {
            var D = $.arg;
            N(I);
          }
          return D;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function(O, P, I) {
      return this.delegate = {
        iterator: R(O),
        resultName: P,
        nextLoc: I
      }, this.method === "next" && (this.arg = void 0), d;
    }
  }, e;
}
function Rl(e, t, n, r, o, i, a) {
  try {
    var s = e[i](a), c = s.value;
  } catch (l) {
    n(l);
    return;
  }
  s.done ? t(c) : Promise.resolve(c).then(r, o);
}
function Ar(e) {
  return function() {
    var t = this, n = arguments;
    return new Promise(function(r, o) {
      var i = e.apply(t, n);
      function a(c) {
        Rl(i, r, o, a, s, "next", c);
      }
      function s(c) {
        Rl(i, r, o, a, s, "throw", c);
      }
      a(void 0);
    });
  };
}
var So = V({}, qv), zy = So.version, Vy = So.render, By = So.unmountComponentAtNode, zi;
try {
  var Wy = Number((zy || "").split(".")[0]);
  Wy >= 18 && (zi = So.createRoot);
} catch {
}
function Pl(e) {
  var t = So.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  t && je(t) === "object" && (t.usingClientEntryPoint = e);
}
var pi = "__rc_react_root__";
function Uy(e, t) {
  Pl(!0);
  var n = t[pi] || zi(t);
  Pl(!1), n.render(e), t[pi] = n;
}
function Ky(e, t) {
  Vy(e, t);
}
function Nd(e, t) {
  if (zi) {
    Uy(e, t);
    return;
  }
  Ky(e, t);
}
function Gy(e) {
  return cs.apply(this, arguments);
}
function cs() {
  return cs = Ar(/* @__PURE__ */ Xt().mark(function e(t) {
    return Xt().wrap(function(r) {
      for (; ; )
        switch (r.prev = r.next) {
          case 0:
            return r.abrupt("return", Promise.resolve().then(function() {
              var o;
              (o = t[pi]) === null || o === void 0 || o.unmount(), delete t[pi];
            }));
          case 1:
          case "end":
            return r.stop();
        }
    }, e);
  })), cs.apply(this, arguments);
}
function qy(e) {
  By(e);
}
function Yy(e) {
  return ls.apply(this, arguments);
}
function ls() {
  return ls = Ar(/* @__PURE__ */ Xt().mark(function e(t) {
    return Xt().wrap(function(r) {
      for (; ; )
        switch (r.prev = r.next) {
          case 0:
            if (zi === void 0) {
              r.next = 2;
              break;
            }
            return r.abrupt("return", Gy(t));
          case 2:
            qy(t);
          case 3:
          case "end":
            return r.stop();
        }
    }, e);
  })), ls.apply(this, arguments);
}
const Md = function(e) {
  if (!e)
    return !1;
  if (e instanceof Element) {
    if (e.offsetParent)
      return !0;
    if (e.getBBox) {
      var t = e.getBBox(), n = t.width, r = t.height;
      if (n || r)
        return !0;
    }
    if (e.getBoundingClientRect) {
      var o = e.getBoundingClientRect(), i = o.width, a = o.height;
      if (i || a)
        return !0;
    }
  }
  return !1;
}, Xy = (e) => {
  const {
    componentCls: t,
    colorPrimary: n
  } = e;
  return {
    [t]: {
      position: "absolute",
      background: "transparent",
      pointerEvents: "none",
      boxSizing: "border-box",
      color: `var(--wave-color, ${n})`,
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
}, Qy = yo("Wave", (e) => [Xy(e)]);
function Jy(e) {
  const t = (e || "").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);
  return t && t[1] && t[2] && t[3] ? !(t[1] === t[2] && t[2] === t[3]) : !0;
}
function ma(e) {
  return e && e !== "#fff" && e !== "#ffffff" && e !== "rgb(255, 255, 255)" && e !== "rgba(255, 255, 255, 1)" && Jy(e) && !/rgba\((?:\d*, ){3}0\)/.test(e) && // any transparent rgba color
  e !== "transparent";
}
function Zy(e) {
  const {
    borderTopColor: t,
    borderColor: n,
    backgroundColor: r
  } = getComputedStyle(e);
  return ma(t) ? t : ma(n) ? n : ma(r) ? r : null;
}
function pa(e) {
  return Number.isNaN(e) ? 0 : e;
}
const e1 = (e) => {
  const {
    className: t,
    target: n
  } = e, r = u.useRef(null), [o, i] = u.useState(null), [a, s] = u.useState([]), [c, l] = u.useState(0), [f, d] = u.useState(0), [v, g] = u.useState(0), [p, h] = u.useState(0), [m, y] = u.useState(!1), b = {
    left: c,
    top: f,
    width: v,
    height: p,
    borderRadius: a.map((w) => `${w}px`).join(" ")
  };
  o && (b["--wave-color"] = o);
  function E() {
    const w = getComputedStyle(n);
    i(Zy(n));
    const S = w.position === "static", {
      borderLeftWidth: C,
      borderTopWidth: _
    } = w;
    l(S ? n.offsetLeft : pa(-parseFloat(C))), d(S ? n.offsetTop : pa(-parseFloat(_))), g(n.offsetWidth), h(n.offsetHeight);
    const {
      borderTopLeftRadius: N,
      borderTopRightRadius: M,
      borderBottomLeftRadius: R,
      borderBottomRightRadius: k
    } = w;
    s([N, M, k, R].map((x) => pa(parseFloat(x))));
  }
  return u.useEffect(() => {
    if (n) {
      const w = Tt(() => {
        E(), y(!0);
      });
      let S;
      return typeof ResizeObserver < "u" && (S = new ResizeObserver(E), S.observe(n)), () => {
        Tt.cancel(w), S?.disconnect();
      };
    }
  }, []), m ? /* @__PURE__ */ u.createElement(bo, {
    visible: !0,
    motionAppear: !0,
    motionName: "wave-motion",
    motionDeadline: 5e3,
    onAppearEnd: (w, S) => {
      var C;
      if (S.deadline || S.propertyName === "opacity") {
        const _ = (C = r.current) === null || C === void 0 ? void 0 : C.parentElement;
        Yy(_).then(() => {
          _?.remove();
        });
      }
      return !1;
    }
  }, (w) => {
    let {
      className: S
    } = w;
    return /* @__PURE__ */ u.createElement("div", {
      ref: r,
      className: Re(t, S),
      style: b
    });
  }) : null;
};
function t1(e, t) {
  const n = document.createElement("div");
  n.style.position = "absolute", n.style.left = "0px", n.style.top = "0px", e?.insertBefore(n, e?.firstChild), Nd(/* @__PURE__ */ u.createElement(e1, {
    target: e,
    className: t
  }), n);
}
function n1(e, t) {
  function n() {
    const r = e.current;
    t1(r, t);
  }
  return n;
}
const Id = (e) => {
  const {
    children: t,
    disabled: n
  } = e, {
    getPrefixCls: r
  } = Ft(Qt), o = Ae(null), i = r("wave"), [, a] = Qy(i), s = n1(o, Re(i, a));
  if (Pe.useEffect(() => {
    const l = o.current;
    if (!l || l.nodeType !== 1 || n)
      return;
    const f = (d) => {
      d.target.tagName === "INPUT" || !Md(d.target) || // No need wave
      !l.getAttribute || l.getAttribute("disabled") || l.disabled || l.className.includes("disabled") || l.className.includes("-leave") || s();
    };
    return l.addEventListener("click", f, !0), () => {
      l.removeEventListener("click", f, !0);
    };
  }, [n]), !/* @__PURE__ */ Pe.isValidElement(t))
    return t ?? null;
  const c = go(t) ? Mr(t.ref, o) : o;
  return Cd(t, {
    ref: c
  });
};
process.env.NODE_ENV !== "production" && (Id.displayName = "Wave");
const r1 = Id, o1 = (e) => {
  const t = Pe.useContext(ki);
  return Pe.useMemo(() => e ? typeof e == "string" ? e ?? t : e instanceof Function ? e(t) : t : t, [e, t]);
}, $d = o1;
globalThis && globalThis.__rest;
const i1 = /* @__PURE__ */ u.createContext(null), Ad = (e, t) => {
  const n = u.useContext(i1), r = u.useMemo(() => {
    if (!n)
      return "";
    const {
      compactDirection: o,
      isFirstItem: i,
      isLastItem: a
    } = n, s = o === "vertical" ? "-vertical-" : "-";
    return Re(`${e}-compact${s}item`, {
      [`${e}-compact${s}first-item`]: i,
      [`${e}-compact${s}last-item`]: a,
      [`${e}-compact${s}item-rtl`]: t === "rtl"
    });
  }, [e, t, n]);
  return {
    compactSize: n?.compactSize,
    compactDirection: n?.compactDirection,
    compactItemClassnames: r
  };
}, a1 = /* @__PURE__ */ Ms((e, t) => {
  const {
    className: n,
    style: r,
    children: o,
    prefixCls: i
  } = e, a = Re(`${i}-icon`, n);
  return /* @__PURE__ */ Pe.createElement("span", {
    ref: t,
    className: a,
    style: r
  }, o);
}), Fd = a1, Tl = /* @__PURE__ */ Ms((e, t) => {
  let {
    prefixCls: n,
    className: r,
    style: o,
    iconClassName: i
  } = e;
  const a = Re(`${n}-loading-icon`, r);
  return /* @__PURE__ */ Pe.createElement(Fd, {
    prefixCls: n,
    className: a,
    style: o,
    ref: t
  }, /* @__PURE__ */ Pe.createElement(ic, {
    className: i
  }));
}), ga = () => ({
  width: 0,
  opacity: 0,
  transform: "scale(0)"
}), ya = (e) => ({
  width: e.scrollWidth,
  opacity: 1,
  transform: "scale(1)"
}), s1 = (e) => {
  const {
    prefixCls: t,
    loading: n,
    existIcon: r,
    className: o,
    style: i
  } = e, a = !!n;
  return r ? /* @__PURE__ */ Pe.createElement(Tl, {
    prefixCls: t,
    className: o,
    style: i
  }) : /* @__PURE__ */ Pe.createElement(bo, {
    visible: a,
    // We do not really use this motionName
    motionName: `${t}-loading-icon-motion`,
    removeOnLeave: !0,
    onAppearStart: ga,
    onAppearActive: ya,
    onEnterStart: ga,
    onEnterActive: ya,
    onLeaveStart: ya,
    onLeaveActive: ga
  }, (s, c) => {
    let {
      className: l,
      style: f
    } = s;
    return /* @__PURE__ */ Pe.createElement(Tl, {
      prefixCls: t,
      className: o,
      style: Object.assign(Object.assign({}, i), f),
      ref: c,
      iconClassName: l
    });
  });
}, c1 = s1;
var l1 = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const Dd = /* @__PURE__ */ u.createContext(void 0), u1 = (e) => {
  const {
    getPrefixCls: t,
    direction: n
  } = u.useContext(Qt), {
    prefixCls: r,
    size: o,
    className: i
  } = e, a = l1(e, ["prefixCls", "size", "className"]), s = t("btn-group", r), [, , c] = $r();
  let l = "";
  switch (o) {
    case "large":
      l = "lg";
      break;
    case "small":
      l = "sm";
      break;
    case "middle":
    case void 0:
      break;
    default:
      process.env.NODE_ENV !== "production" && rn(!o, "Button.Group", "Invalid prop `size`.");
  }
  const f = Re(s, {
    [`${s}-${l}`]: l,
    [`${s}-rtl`]: n === "rtl"
  }, i, c);
  return /* @__PURE__ */ u.createElement(Dd.Provider, {
    value: o
  }, /* @__PURE__ */ u.createElement("div", Object.assign({}, a, {
    className: f
  })));
}, f1 = u1, Nl = /^[\u4e00-\u9fa5]{2}$/, us = Nl.test.bind(Nl);
function d1(e) {
  return typeof e == "string";
}
function ko(e) {
  return e === "text" || e === "link";
}
function v1(e, t) {
  if (e == null)
    return;
  const n = t ? " " : "";
  return typeof e != "string" && typeof e != "number" && d1(e.type) && us(e.props.children) ? Cd(e, {
    children: e.props.children.split("").join(n)
  }) : typeof e == "string" ? us(e) ? /* @__PURE__ */ Pe.createElement("span", null, e.split("").join(n)) : /* @__PURE__ */ Pe.createElement("span", null, e) : wy(e) ? /* @__PURE__ */ Pe.createElement("span", null, e) : e;
}
function h1(e, t) {
  let n = !1;
  const r = [];
  return Pe.Children.forEach(e, (o) => {
    const i = typeof o, a = i === "string" || i === "number";
    if (n && a) {
      const s = r.length - 1, c = r[s];
      r[s] = `${c}${o}`;
    } else
      r.push(o);
    n = a;
  }), Pe.Children.map(r, (o) => v1(o, t));
}
function m1(e, t, n) {
  const {
    focusElCls: r,
    focus: o,
    borderElCls: i
  } = n, a = i ? "> *" : "", s = ["hover", o ? "focus" : null, "active"].filter(Boolean).map((c) => `&:${c} ${a}`).join(",");
  return {
    [`&-item:not(${t}-last-item)`]: {
      marginInlineEnd: -e.lineWidth
    },
    "&-item": Object.assign(Object.assign({
      [s]: {
        zIndex: 2
      }
    }, r ? {
      [`&${r}`]: {
        zIndex: 2
      }
    } : {}), {
      [`&[disabled] ${a}`]: {
        zIndex: 0
      }
    })
  };
}
function p1(e, t, n) {
  const {
    borderElCls: r
  } = n, o = r ? `> ${r}` : "";
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
function Ld(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    focus: !0
  };
  const {
    componentCls: n
  } = e, r = `${n}-compact`;
  return {
    [r]: Object.assign(Object.assign({}, m1(e, r, t)), p1(n, r, t))
  };
}
function g1(e, t) {
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
function y1(e, t) {
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
function b1(e) {
  const t = `${e.componentCls}-compact-vertical`;
  return {
    [t]: Object.assign(Object.assign({}, g1(e, t)), y1(e.componentCls, t))
  };
}
const Ml = (e, t) => ({
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
}), S1 = (e) => {
  const {
    componentCls: t,
    fontSize: n,
    lineWidth: r,
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
            marginInlineStart: -r,
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
          fontSize: n
        }
      },
      // Border Color
      Ml(`${t}-primary`, o),
      Ml(`${t}-danger`, i)
    ]
  };
}, E1 = S1, w1 = (e) => {
  const {
    componentCls: t,
    iconCls: n,
    buttonFontWeight: r
  } = e;
  return {
    [t]: {
      outline: "none",
      position: "relative",
      display: "inline-block",
      fontWeight: r,
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
      [`> ${n} + span, > span + ${n}`]: {
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
      "&:not(:disabled)": Object.assign({}, s0(e)),
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
}, Tn = (e, t, n) => ({
  [`&:not(:disabled):not(${e}-disabled)`]: {
    "&:hover": t,
    "&:active": n
  }
}), C1 = (e) => ({
  minWidth: e.controlHeight,
  paddingInlineStart: 0,
  paddingInlineEnd: 0,
  borderRadius: "50%"
}), x1 = (e) => ({
  borderRadius: e.controlHeight,
  paddingInlineStart: e.controlHeight / 2,
  paddingInlineEnd: e.controlHeight / 2
}), O1 = (e) => ({
  cursor: "not-allowed",
  borderColor: e.colorBorder,
  color: e.colorTextDisabled,
  backgroundColor: e.colorBgContainerDisabled,
  boxShadow: "none"
}), io = (e, t, n, r, o, i, a) => ({
  [`&${e}-background-ghost`]: Object.assign(Object.assign({
    color: t || void 0,
    backgroundColor: "transparent",
    borderColor: n || void 0,
    boxShadow: "none"
  }, Tn(e, Object.assign({
    backgroundColor: "transparent"
  }, i), Object.assign({
    backgroundColor: "transparent"
  }, a))), {
    "&:disabled": {
      cursor: "not-allowed",
      color: r || void 0,
      borderColor: o || void 0
    }
  })
}), sc = (e) => ({
  [`&:disabled, &${e.componentCls}-disabled`]: Object.assign({}, O1(e))
}), kd = (e) => Object.assign({}, sc(e)), gi = (e) => ({
  [`&:disabled, &${e.componentCls}-disabled`]: {
    cursor: "not-allowed",
    color: e.colorTextDisabled
  }
}), jd = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, kd(e)), {
  backgroundColor: e.colorBgContainer,
  borderColor: e.colorBorder,
  boxShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlTmpOutline}`
}), Tn(e.componentCls, {
  color: e.colorPrimaryHover,
  borderColor: e.colorPrimaryHover
}, {
  color: e.colorPrimaryActive,
  borderColor: e.colorPrimaryActive
})), io(e.componentCls, e.colorBgContainer, e.colorBgContainer, e.colorTextDisabled, e.colorBorder)), {
  [`&${e.componentCls}-dangerous`]: Object.assign(Object.assign(Object.assign({
    color: e.colorError,
    borderColor: e.colorError
  }, Tn(e.componentCls, {
    color: e.colorErrorHover,
    borderColor: e.colorErrorBorderHover
  }, {
    color: e.colorErrorActive,
    borderColor: e.colorErrorActive
  })), io(e.componentCls, e.colorError, e.colorError, e.colorTextDisabled, e.colorBorder)), sc(e))
}), _1 = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, kd(e)), {
  color: e.colorTextLightSolid,
  backgroundColor: e.colorPrimary,
  boxShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlOutline}`
}), Tn(e.componentCls, {
  color: e.colorTextLightSolid,
  backgroundColor: e.colorPrimaryHover
}, {
  color: e.colorTextLightSolid,
  backgroundColor: e.colorPrimaryActive
})), io(e.componentCls, e.colorPrimary, e.colorPrimary, e.colorTextDisabled, e.colorBorder, {
  color: e.colorPrimaryHover,
  borderColor: e.colorPrimaryHover
}, {
  color: e.colorPrimaryActive,
  borderColor: e.colorPrimaryActive
})), {
  [`&${e.componentCls}-dangerous`]: Object.assign(Object.assign(Object.assign({
    backgroundColor: e.colorError,
    boxShadow: `0 ${e.controlOutlineWidth}px 0 ${e.colorErrorOutline}`
  }, Tn(e.componentCls, {
    backgroundColor: e.colorErrorHover
  }, {
    backgroundColor: e.colorErrorActive
  })), io(e.componentCls, e.colorError, e.colorError, e.colorTextDisabled, e.colorBorder, {
    color: e.colorErrorHover,
    borderColor: e.colorErrorHover
  }, {
    color: e.colorErrorActive,
    borderColor: e.colorErrorActive
  })), sc(e))
}), R1 = (e) => Object.assign(Object.assign({}, jd(e)), {
  borderStyle: "dashed"
}), P1 = (e) => Object.assign(Object.assign(Object.assign({
  color: e.colorLink
}, Tn(e.componentCls, {
  color: e.colorLinkHover
}, {
  color: e.colorLinkActive
})), gi(e)), {
  [`&${e.componentCls}-dangerous`]: Object.assign(Object.assign({
    color: e.colorError
  }, Tn(e.componentCls, {
    color: e.colorErrorHover
  }, {
    color: e.colorErrorActive
  })), gi(e))
}), T1 = (e) => Object.assign(Object.assign(Object.assign({}, Tn(e.componentCls, {
  color: e.colorText,
  backgroundColor: e.colorBgTextHover
}, {
  color: e.colorText,
  backgroundColor: e.colorBgTextActive
})), gi(e)), {
  [`&${e.componentCls}-dangerous`]: Object.assign(Object.assign({
    color: e.colorError
  }, gi(e)), Tn(e.componentCls, {
    color: e.colorErrorHover,
    backgroundColor: e.colorErrorBg
  }, {
    color: e.colorErrorHover,
    backgroundColor: e.colorErrorBg
  }))
}), N1 = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [`${t}-default`]: jd(e),
    [`${t}-primary`]: _1(e),
    [`${t}-dashed`]: R1(e),
    [`${t}-link`]: P1(e),
    [`${t}-text`]: T1(e),
    [`${t}-ghost`]: io(e.componentCls, e.colorBgContainer, e.colorBgContainer, e.colorTextDisabled, e.colorBorder)
  };
}, cc = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  const {
    componentCls: n,
    controlHeight: r,
    fontSize: o,
    lineHeight: i,
    lineWidth: a,
    borderRadius: s,
    buttonPaddingHorizontal: c,
    iconCls: l
  } = e, f = Math.max(0, (r - o * i) / 2 - a), d = c - a, v = `${n}-icon-only`;
  return [
    // Size
    {
      [`${n}${t}`]: {
        fontSize: o,
        height: r,
        padding: `${f}px ${d}px`,
        borderRadius: s,
        [`&${v}`]: {
          width: r,
          paddingInlineStart: 0,
          paddingInlineEnd: 0,
          [`&${n}-round`]: {
            width: "auto"
          },
          [l]: {
            fontSize: e.buttonIconOnlyFontSize
          }
        },
        // Loading
        [`&${n}-loading`]: {
          opacity: e.opacityLoading,
          cursor: "default"
        },
        [`${n}-loading-icon`]: {
          transition: `width ${e.motionDurationSlow} ${e.motionEaseInOut}, opacity ${e.motionDurationSlow} ${e.motionEaseInOut}`
        }
      }
    },
    // Shape - patch prefixCls again to override solid border radius style
    {
      [`${n}${n}-circle${t}`]: C1(e)
    },
    {
      [`${n}${n}-round${t}`]: x1(e)
    }
  ];
}, M1 = (e) => cc(e), I1 = (e) => {
  const t = Ht(e, {
    controlHeight: e.controlHeightSM,
    padding: e.paddingXS,
    buttonPaddingHorizontal: 8,
    borderRadius: e.borderRadiusSM,
    buttonIconOnlyFontSize: e.fontSizeLG - 2
  });
  return cc(t, `${e.componentCls}-sm`);
}, $1 = (e) => {
  const t = Ht(e, {
    controlHeight: e.controlHeightLG,
    fontSize: e.fontSizeLG,
    borderRadius: e.borderRadiusLG,
    buttonIconOnlyFontSize: e.fontSizeLG + 2
  });
  return cc(t, `${e.componentCls}-lg`);
}, A1 = (e) => {
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
}, F1 = yo("Button", (e) => {
  const {
    controlTmpOutline: t,
    paddingContentHorizontal: n
  } = e, r = Ht(e, {
    colorOutlineDefault: t,
    buttonPaddingHorizontal: n,
    buttonIconOnlyFontSize: e.fontSizeLG,
    buttonFontWeight: 400
  });
  return [
    // Shared
    w1(r),
    // Size
    I1(r),
    M1(r),
    $1(r),
    // Block
    A1(r),
    // Group (type, ghost, danger, loading)
    N1(r),
    // Button Group
    E1(r),
    // Space Compact
    Ld(e),
    b1(e)
  ];
});
var D1 = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
function L1(e) {
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
const k1 = (e, t) => {
  var n, r;
  const {
    loading: o = !1,
    prefixCls: i,
    type: a = "default",
    danger: s,
    shape: c = "default",
    size: l,
    styles: f,
    disabled: d,
    className: v,
    rootClassName: g,
    children: p,
    icon: h,
    ghost: m = !1,
    block: y = !1,
    // React does not recognize the `htmlType` prop on a DOM element. Here we pick it out of `rest`.
    htmlType: b = "button",
    classNames: E,
    style: w = {}
  } = e, S = D1(e, ["loading", "prefixCls", "type", "danger", "shape", "size", "styles", "disabled", "className", "rootClassName", "children", "icon", "ghost", "block", "htmlType", "classNames", "style"]), {
    getPrefixCls: C,
    autoInsertSpaceInButton: _,
    direction: N,
    button: M
  } = Ft(Qt), R = C("btn", i), [k, x] = F1(R), O = Ft(tc), P = d ?? O, I = Ft(Dd), $ = wr(() => L1(o), [o]), [D, B] = Yt($.loading), [K, ne] = Yt(!1), j = Mr(t, /* @__PURE__ */ Kv()), H = Uv.count(p) === 1 && !h && !ko(a);
  jt(() => {
    let ee = null;
    $.delay > 0 ? ee = setTimeout(() => {
      ee = null, B(!0);
    }, $.delay) : B($.loading);
    function le() {
      ee && (clearTimeout(ee), ee = null);
    }
    return le;
  }, [$]), jt(() => {
    if (!j || !j.current || _ === !1)
      return;
    const ee = j.current.textContent;
    H && us(ee) ? K || ne(!0) : K && ne(!1);
  }, [j]);
  const z = (ee) => {
    const {
      onClick: le
    } = e;
    if (D || P) {
      ee.preventDefault();
      return;
    }
    le?.(ee);
  };
  process.env.NODE_ENV !== "production" && rn(!(typeof h == "string" && h.length > 2), "Button", `\`icon\` is using ReactNode instead of string naming in v4. Please check \`${h}\` at https://ant.design/components/icon`), process.env.NODE_ENV !== "production" && rn(!(m && ko(a)), "Button", "`link` or `text` button can't be a `ghost` button.");
  const G = _ !== !1, {
    compactSize: T,
    compactItemClassnames: q
  } = Ad(R, N), F = {
    large: "lg",
    small: "sm",
    middle: void 0
  }, Y = $d((ee) => {
    var le, Ce;
    return (Ce = (le = l ?? T) !== null && le !== void 0 ? le : I) !== null && Ce !== void 0 ? Ce : ee;
  }), te = Y && F[Y] || "", Q = D ? "loading" : h, A = Bs(S, ["navigate"]), re = Re(R, x, {
    [`${R}-${c}`]: c !== "default" && c,
    [`${R}-${a}`]: a,
    [`${R}-${te}`]: te,
    [`${R}-icon-only`]: !p && p !== 0 && !!Q,
    [`${R}-background-ghost`]: m && !ko(a),
    [`${R}-loading`]: D,
    [`${R}-two-chinese-chars`]: K && G && !D,
    [`${R}-block`]: y,
    [`${R}-dangerous`]: !!s,
    [`${R}-rtl`]: N === "rtl"
  }, q, v, g, M?.className), L = Object.assign(Object.assign({}, M?.style), w), Z = Re(E?.icon, (n = M?.classNames) === null || n === void 0 ? void 0 : n.icon), se = Object.assign(Object.assign({}, f?.icon || {}), ((r = M?.styles) === null || r === void 0 ? void 0 : r.icon) || {}), ae = h && !D ? /* @__PURE__ */ Pe.createElement(Fd, {
    prefixCls: R,
    className: Z,
    style: se
  }, h) : /* @__PURE__ */ Pe.createElement(c1, {
    existIcon: !!h,
    prefixCls: R,
    loading: !!D
  }), fe = p || p === 0 ? h1(p, H && G) : null;
  if (A.href !== void 0)
    return k(/* @__PURE__ */ Pe.createElement("a", Object.assign({}, A, {
      className: Re(re, {
        [`${R}-disabled`]: P
      }),
      style: L,
      onClick: z,
      ref: j
    }), ae, fe));
  let ge = /* @__PURE__ */ Pe.createElement("button", Object.assign({}, S, {
    type: b,
    className: re,
    style: L,
    onClick: z,
    disabled: P,
    ref: j
  }), ae, fe);
  return ko(a) || (ge = /* @__PURE__ */ Pe.createElement(r1, {
    disabled: !!D
  }, ge)), k(ge);
}, Vi = /* @__PURE__ */ Ms(k1);
process.env.NODE_ENV !== "production" && (Vi.displayName = "Button");
Vi.Group = f1;
Vi.__ANT_BUTTON = !0;
const j1 = Vi, H1 = (e) => e !== void 0 && (e === "topLeft" || e === "topRight") ? "slide-down" : "slide-up", z1 = (e, t, n) => n !== void 0 ? n : `${e}-${t}`;
var V1 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z" } }] }, name: "check", theme: "outlined" };
const B1 = V1;
var Hd = function(t, n) {
  return /* @__PURE__ */ u.createElement(Nn, Te({}, t, {
    ref: n,
    icon: B1
  }));
};
process.env.NODE_ENV !== "production" && (Hd.displayName = "CheckOutlined");
const W1 = /* @__PURE__ */ u.forwardRef(Hd);
var U1 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z" } }] }, name: "down", theme: "outlined" };
const K1 = U1;
var zd = function(t, n) {
  return /* @__PURE__ */ u.createElement(Nn, Te({}, t, {
    ref: n,
    icon: K1
  }));
};
process.env.NODE_ENV !== "production" && (zd.displayName = "DownOutlined");
const G1 = /* @__PURE__ */ u.forwardRef(zd);
var q1 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" } }] }, name: "search", theme: "outlined" };
const Y1 = q1;
var Vd = function(t, n) {
  return /* @__PURE__ */ u.createElement(Nn, Te({}, t, {
    ref: n,
    icon: Y1
  }));
};
process.env.NODE_ENV !== "production" && (Vd.displayName = "SearchOutlined");
const X1 = /* @__PURE__ */ u.forwardRef(Vd);
var Bd = /* @__PURE__ */ u.createContext(null), Il = [];
function Q1(e, t) {
  var n = u.useState(function() {
    if (!Dt())
      return null;
    var p = document.createElement("div");
    return process.env.NODE_ENV !== "production" && t && p.setAttribute("data-debug", t), p;
  }), r = U(n, 1), o = r[0], i = u.useRef(!1), a = u.useContext(Bd), s = u.useState(Il), c = U(s, 2), l = c[0], f = c[1], d = a || (i.current ? void 0 : function(p) {
    f(function(h) {
      var m = [p].concat(me(h));
      return m;
    });
  });
  function v() {
    o.parentElement || document.body.appendChild(o), i.current = !0;
  }
  function g() {
    var p;
    (p = o.parentElement) === null || p === void 0 || p.removeChild(o), i.current = !1;
  }
  return vt(function() {
    return e ? a ? a(v) : v() : g(), g;
  }, [e]), vt(function() {
    l.length && (l.forEach(function(p) {
      return p();
    }), f(Il));
  }, [l]), [o, d];
}
var ba;
function J1(e) {
  if (typeof document > "u")
    return 0;
  if (e || ba === void 0) {
    var t = document.createElement("div");
    t.style.width = "100%", t.style.height = "200px";
    var n = document.createElement("div"), r = n.style;
    r.position = "absolute", r.top = "0", r.left = "0", r.pointerEvents = "none", r.visibility = "hidden", r.width = "200px", r.height = "150px", r.overflow = "hidden", n.appendChild(t), document.body.appendChild(n);
    var o = t.offsetWidth;
    n.style.overflow = "scroll";
    var i = t.offsetWidth;
    o === i && (i = n.clientWidth), document.body.removeChild(n), ba = o - i;
  }
  return ba;
}
function $l(e) {
  var t = e.match(/^(.*)px$/), n = Number(t?.[1]);
  return Number.isNaN(n) ? J1() : n;
}
function Z1(e) {
  if (typeof document > "u" || !e || !(e instanceof Element))
    return {
      width: 0,
      height: 0
    };
  var t = getComputedStyle(e, "::-webkit-scrollbar"), n = t.width, r = t.height;
  return {
    width: $l(n),
    height: $l(r)
  };
}
function eb() {
  return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth;
}
var tb = "rc-util-locker-".concat(Date.now()), Al = 0;
function nb(e) {
  var t = !!e, n = u.useState(function() {
    return Al += 1, "".concat(tb, "_").concat(Al);
  }), r = U(n, 1), o = r[0];
  vt(function() {
    if (t) {
      var i = Z1(document.body).width, a = eb();
      Or(`
html body {
  overflow-y: hidden;
  `.concat(a ? "width: calc(100% - ".concat(i, "px);") : "", `
}`), o);
    } else
      ui(o);
    return function() {
      ui(o);
    };
  }, [t, o]);
}
var Fl = !1;
function rb(e) {
  return typeof e == "boolean" && (Fl = e), Fl;
}
var Dl = function(t) {
  return t === !1 ? !1 : !Dt() || !t ? null : typeof t == "string" ? document.querySelector(t) : typeof t == "function" ? t() : t;
}, lc = /* @__PURE__ */ u.forwardRef(function(e, t) {
  var n = e.open, r = e.autoLock, o = e.getContainer, i = e.debug, a = e.autoDestroy, s = a === void 0 ? !0 : a, c = e.children, l = u.useState(n), f = U(l, 2), d = f[0], v = f[1], g = d || n;
  process.env.NODE_ENV !== "production" && Fe(Dt() || !n, "Portal only work in client side. Please call 'useEffect' to show Portal instead default render in SSR."), u.useEffect(function() {
    (s || n) && v(n);
  }, [n, s]);
  var p = u.useState(function() {
    return Dl(o);
  }), h = U(p, 2), m = h[0], y = h[1];
  u.useEffect(function() {
    var x = Dl(o);
    y(x ?? null);
  });
  var b = Q1(g && !m, i), E = U(b, 2), w = E[0], S = E[1], C = m ?? w;
  nb(r && n && Dt() && (C === w || C === document.body));
  var _ = null;
  if (c && go(c) && t) {
    var N = c;
    _ = N.ref;
  }
  var M = Vs(_, t);
  if (!g || !Dt() || m === void 0)
    return null;
  var R = C === !1 || rb(), k = c;
  return t && (k = /* @__PURE__ */ u.cloneElement(c, {
    ref: M
  })), /* @__PURE__ */ u.createElement(Bd.Provider, {
    value: S
  }, R ? k : /* @__PURE__ */ $s(k, C));
});
process.env.NODE_ENV !== "production" && (lc.displayName = "Portal");
function ob() {
  var e = V({}, u);
  return e.useId;
}
var Ll = 0;
function ib(e) {
  var t = u.useState("ssr-id"), n = U(t, 2), r = n[0], o = n[1], i = ob(), a = i?.();
  return u.useEffect(function() {
    if (!i) {
      var s = Ll;
      Ll += 1, o("rc_unique_".concat(s));
    }
  }, []), e || (process.env.NODE_ENV === "test" ? "test-id" : a || r);
}
var Un = "RC_FORM_INTERNAL_HOOKS", Ze = function() {
  Fe(!1, "Can not find FormContext. Please make sure you wrap Field under Form.");
}, Rr = /* @__PURE__ */ u.createContext({
  getFieldValue: Ze,
  getFieldsValue: Ze,
  getFieldError: Ze,
  getFieldWarning: Ze,
  getFieldsError: Ze,
  isFieldsTouched: Ze,
  isFieldTouched: Ze,
  isFieldValidating: Ze,
  isFieldsValidating: Ze,
  resetFields: Ze,
  setFields: Ze,
  setFieldValue: Ze,
  setFieldsValue: Ze,
  validateFields: Ze,
  submit: Ze,
  getInternalHooks: function() {
    return Ze(), {
      dispatch: Ze,
      initEntityValue: Ze,
      registerField: Ze,
      useSubscribe: Ze,
      setInitialValues: Ze,
      destroyForm: Ze,
      setCallbacks: Ze,
      registerWatch: Ze,
      getFields: Ze,
      setValidateMessages: Ze,
      setPreserve: Ze,
      getInitialValue: Ze
    };
  }
}), yi = /* @__PURE__ */ u.createContext(null);
function fs(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function ab(e) {
  return e && !!e._init;
}
function Kn() {
  return Kn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Kn.apply(this, arguments);
}
function sb(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, ao(e, t);
}
function ds(e) {
  return ds = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, ds(e);
}
function ao(e, t) {
  return ao = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, ao(e, t);
}
function cb() {
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
function ei(e, t, n) {
  return cb() ? ei = Reflect.construct.bind() : ei = function(o, i, a) {
    var s = [null];
    s.push.apply(s, i);
    var c = Function.bind.apply(o, s), l = new c();
    return a && ao(l, a.prototype), l;
  }, ei.apply(null, arguments);
}
function lb(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function vs(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return vs = function(r) {
    if (r === null || !lb(r))
      return r;
    if (typeof r != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof t < "u") {
      if (t.has(r))
        return t.get(r);
      t.set(r, o);
    }
    function o() {
      return ei(r, arguments, ds(this).constructor);
    }
    return o.prototype = Object.create(r.prototype, {
      constructor: {
        value: o,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), ao(o, r);
  }, vs(e);
}
var ub = /%[sdj%]/g, Wd = function() {
};
typeof process < "u" && process.env && process.env.NODE_ENV !== "production" && typeof window < "u" && typeof document < "u" && (Wd = function(t, n) {
  typeof console < "u" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING > "u" && n.every(function(r) {
    return typeof r == "string";
  }) && console.warn(t, n);
});
function hs(e) {
  if (!e || !e.length)
    return null;
  var t = {};
  return e.forEach(function(n) {
    var r = n.field;
    t[r] = t[r] || [], t[r].push(n);
  }), t;
}
function qt(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  var o = 0, i = n.length;
  if (typeof e == "function")
    return e.apply(null, n);
  if (typeof e == "string") {
    var a = e.replace(ub, function(s) {
      if (s === "%%")
        return "%";
      if (o >= i)
        return s;
      switch (s) {
        case "%s":
          return String(n[o++]);
        case "%d":
          return Number(n[o++]);
        case "%j":
          try {
            return JSON.stringify(n[o++]);
          } catch {
            return "[Circular]";
          }
          break;
        default:
          return s;
      }
    });
    return a;
  }
  return e;
}
function fb(e) {
  return e === "string" || e === "url" || e === "hex" || e === "email" || e === "date" || e === "pattern";
}
function wt(e, t) {
  return !!(e == null || t === "array" && Array.isArray(e) && !e.length || fb(t) && typeof e == "string" && !e);
}
function db(e, t, n) {
  var r = [], o = 0, i = e.length;
  function a(s) {
    r.push.apply(r, s || []), o++, o === i && n(r);
  }
  e.forEach(function(s) {
    t(s, a);
  });
}
function kl(e, t, n) {
  var r = 0, o = e.length;
  function i(a) {
    if (a && a.length) {
      n(a);
      return;
    }
    var s = r;
    r = r + 1, s < o ? t(e[s], i) : n([]);
  }
  i([]);
}
function vb(e) {
  var t = [];
  return Object.keys(e).forEach(function(n) {
    t.push.apply(t, e[n] || []);
  }), t;
}
var jl = /* @__PURE__ */ function(e) {
  sb(t, e);
  function t(n, r) {
    var o;
    return o = e.call(this, "Async Validation Error") || this, o.errors = n, o.fields = r, o;
  }
  return t;
}(/* @__PURE__ */ vs(Error));
function hb(e, t, n, r, o) {
  if (t.first) {
    var i = new Promise(function(v, g) {
      var p = function(y) {
        return r(y), y.length ? g(new jl(y, hs(y))) : v(o);
      }, h = vb(e);
      kl(h, n, p);
    });
    return i.catch(function(v) {
      return v;
    }), i;
  }
  var a = t.firstFields === !0 ? Object.keys(e) : t.firstFields || [], s = Object.keys(e), c = s.length, l = 0, f = [], d = new Promise(function(v, g) {
    var p = function(m) {
      if (f.push.apply(f, m), l++, l === c)
        return r(f), f.length ? g(new jl(f, hs(f))) : v(o);
    };
    s.length || (r(f), v(o)), s.forEach(function(h) {
      var m = e[h];
      a.indexOf(h) !== -1 ? kl(m, n, p) : db(m, n, p);
    });
  });
  return d.catch(function(v) {
    return v;
  }), d;
}
function mb(e) {
  return !!(e && e.message !== void 0);
}
function pb(e, t) {
  for (var n = e, r = 0; r < t.length; r++) {
    if (n == null)
      return n;
    n = n[t[r]];
  }
  return n;
}
function Hl(e, t) {
  return function(n) {
    var r;
    return e.fullFields ? r = pb(t, e.fullFields) : r = t[n.field || e.fullField], mb(n) ? (n.field = n.field || e.fullField, n.fieldValue = r, n) : {
      message: typeof n == "function" ? n() : n,
      fieldValue: r,
      field: n.field || e.fullField
    };
  };
}
function zl(e, t) {
  if (t) {
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = t[n];
        typeof r == "object" && typeof e[n] == "object" ? e[n] = Kn({}, e[n], r) : e[n] = r;
      }
  }
  return e;
}
var Ud = function(t, n, r, o, i, a) {
  t.required && (!r.hasOwnProperty(t.field) || wt(n, a || t.type)) && o.push(qt(i.messages.required, t.fullField));
}, gb = function(t, n, r, o, i) {
  (/^\s+$/.test(n) || n === "") && o.push(qt(i.messages.whitespace, t.fullField));
}, jo, yb = function() {
  if (jo)
    return jo;
  var e = "[a-fA-F\\d:]", t = function(w) {
    return w && w.includeBoundaries ? "(?:(?<=\\s|^)(?=" + e + ")|(?<=" + e + ")(?=\\s|$))" : "";
  }, n = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}", r = "[a-fA-F\\d]{1,4}", o = (`
(?:
(?:` + r + ":){7}(?:" + r + `|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:` + r + ":){6}(?:" + n + "|:" + r + `|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:` + r + ":){5}(?::" + n + "|(?::" + r + `){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:` + r + ":){4}(?:(?::" + r + "){0,1}:" + n + "|(?::" + r + `){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:` + r + ":){3}(?:(?::" + r + "){0,2}:" + n + "|(?::" + r + `){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:` + r + ":){2}(?:(?::" + r + "){0,3}:" + n + "|(?::" + r + `){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:` + r + ":){1}(?:(?::" + r + "){0,4}:" + n + "|(?::" + r + `){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::` + r + "){0,5}:" + n + "|(?::" + r + `){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`).replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim(), i = new RegExp("(?:^" + n + "$)|(?:^" + o + "$)"), a = new RegExp("^" + n + "$"), s = new RegExp("^" + o + "$"), c = function(w) {
    return w && w.exact ? i : new RegExp("(?:" + t(w) + n + t(w) + ")|(?:" + t(w) + o + t(w) + ")", "g");
  };
  c.v4 = function(E) {
    return E && E.exact ? a : new RegExp("" + t(E) + n + t(E), "g");
  }, c.v6 = function(E) {
    return E && E.exact ? s : new RegExp("" + t(E) + o + t(E), "g");
  };
  var l = "(?:(?:[a-z]+:)?//)", f = "(?:\\S+(?::\\S*)?@)?", d = c.v4().source, v = c.v6().source, g = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", p = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", h = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", m = "(?::\\d{2,5})?", y = '(?:[/?#][^\\s"]*)?', b = "(?:" + l + "|www\\.)" + f + "(?:localhost|" + d + "|" + v + "|" + g + p + h + ")" + m + y;
  return jo = new RegExp("(?:^" + b + "$)", "i"), jo;
}, Vl = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  // url: new RegExp(
  //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
  //   'i',
  // ),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
}, Gr = {
  integer: function(t) {
    return Gr.number(t) && parseInt(t, 10) === t;
  },
  float: function(t) {
    return Gr.number(t) && !Gr.integer(t);
  },
  array: function(t) {
    return Array.isArray(t);
  },
  regexp: function(t) {
    if (t instanceof RegExp)
      return !0;
    try {
      return !!new RegExp(t);
    } catch {
      return !1;
    }
  },
  date: function(t) {
    return typeof t.getTime == "function" && typeof t.getMonth == "function" && typeof t.getYear == "function" && !isNaN(t.getTime());
  },
  number: function(t) {
    return isNaN(t) ? !1 : typeof t == "number";
  },
  object: function(t) {
    return typeof t == "object" && !Gr.array(t);
  },
  method: function(t) {
    return typeof t == "function";
  },
  email: function(t) {
    return typeof t == "string" && t.length <= 320 && !!t.match(Vl.email);
  },
  url: function(t) {
    return typeof t == "string" && t.length <= 2048 && !!t.match(yb());
  },
  hex: function(t) {
    return typeof t == "string" && !!t.match(Vl.hex);
  }
}, bb = function(t, n, r, o, i) {
  if (t.required && n === void 0) {
    Ud(t, n, r, o, i);
    return;
  }
  var a = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"], s = t.type;
  a.indexOf(s) > -1 ? Gr[s](n) || o.push(qt(i.messages.types[s], t.fullField, t.type)) : s && typeof n !== t.type && o.push(qt(i.messages.types[s], t.fullField, t.type));
}, Sb = function(t, n, r, o, i) {
  var a = typeof t.len == "number", s = typeof t.min == "number", c = typeof t.max == "number", l = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, f = n, d = null, v = typeof n == "number", g = typeof n == "string", p = Array.isArray(n);
  if (v ? d = "number" : g ? d = "string" : p && (d = "array"), !d)
    return !1;
  p && (f = n.length), g && (f = n.replace(l, "_").length), a ? f !== t.len && o.push(qt(i.messages[d].len, t.fullField, t.len)) : s && !c && f < t.min ? o.push(qt(i.messages[d].min, t.fullField, t.min)) : c && !s && f > t.max ? o.push(qt(i.messages[d].max, t.fullField, t.max)) : s && c && (f < t.min || f > t.max) && o.push(qt(i.messages[d].range, t.fullField, t.min, t.max));
}, fr = "enum", Eb = function(t, n, r, o, i) {
  t[fr] = Array.isArray(t[fr]) ? t[fr] : [], t[fr].indexOf(n) === -1 && o.push(qt(i.messages[fr], t.fullField, t[fr].join(", ")));
}, wb = function(t, n, r, o, i) {
  if (t.pattern) {
    if (t.pattern instanceof RegExp)
      t.pattern.lastIndex = 0, t.pattern.test(n) || o.push(qt(i.messages.pattern.mismatch, t.fullField, n, t.pattern));
    else if (typeof t.pattern == "string") {
      var a = new RegExp(t.pattern);
      a.test(n) || o.push(qt(i.messages.pattern.mismatch, t.fullField, n, t.pattern));
    }
  }
}, De = {
  required: Ud,
  whitespace: gb,
  type: bb,
  range: Sb,
  enum: Eb,
  pattern: wb
}, Cb = function(t, n, r, o, i) {
  var a = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (wt(n, "string") && !t.required)
      return r();
    De.required(t, n, o, a, i, "string"), wt(n, "string") || (De.type(t, n, o, a, i), De.range(t, n, o, a, i), De.pattern(t, n, o, a, i), t.whitespace === !0 && De.whitespace(t, n, o, a, i));
  }
  r(a);
}, xb = function(t, n, r, o, i) {
  var a = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (wt(n) && !t.required)
      return r();
    De.required(t, n, o, a, i), n !== void 0 && De.type(t, n, o, a, i);
  }
  r(a);
}, Ob = function(t, n, r, o, i) {
  var a = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (n === "" && (n = void 0), wt(n) && !t.required)
      return r();
    De.required(t, n, o, a, i), n !== void 0 && (De.type(t, n, o, a, i), De.range(t, n, o, a, i));
  }
  r(a);
}, _b = function(t, n, r, o, i) {
  var a = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (wt(n) && !t.required)
      return r();
    De.required(t, n, o, a, i), n !== void 0 && De.type(t, n, o, a, i);
  }
  r(a);
}, Rb = function(t, n, r, o, i) {
  var a = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (wt(n) && !t.required)
      return r();
    De.required(t, n, o, a, i), wt(n) || De.type(t, n, o, a, i);
  }
  r(a);
}, Pb = function(t, n, r, o, i) {
  var a = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (wt(n) && !t.required)
      return r();
    De.required(t, n, o, a, i), n !== void 0 && (De.type(t, n, o, a, i), De.range(t, n, o, a, i));
  }
  r(a);
}, Tb = function(t, n, r, o, i) {
  var a = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (wt(n) && !t.required)
      return r();
    De.required(t, n, o, a, i), n !== void 0 && (De.type(t, n, o, a, i), De.range(t, n, o, a, i));
  }
  r(a);
}, Nb = function(t, n, r, o, i) {
  var a = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (n == null && !t.required)
      return r();
    De.required(t, n, o, a, i, "array"), n != null && (De.type(t, n, o, a, i), De.range(t, n, o, a, i));
  }
  r(a);
}, Mb = function(t, n, r, o, i) {
  var a = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (wt(n) && !t.required)
      return r();
    De.required(t, n, o, a, i), n !== void 0 && De.type(t, n, o, a, i);
  }
  r(a);
}, Ib = "enum", $b = function(t, n, r, o, i) {
  var a = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (wt(n) && !t.required)
      return r();
    De.required(t, n, o, a, i), n !== void 0 && De[Ib](t, n, o, a, i);
  }
  r(a);
}, Ab = function(t, n, r, o, i) {
  var a = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (wt(n, "string") && !t.required)
      return r();
    De.required(t, n, o, a, i), wt(n, "string") || De.pattern(t, n, o, a, i);
  }
  r(a);
}, Fb = function(t, n, r, o, i) {
  var a = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (wt(n, "date") && !t.required)
      return r();
    if (De.required(t, n, o, a, i), !wt(n, "date")) {
      var c;
      n instanceof Date ? c = n : c = new Date(n), De.type(t, c, o, a, i), c && De.range(t, c.getTime(), o, a, i);
    }
  }
  r(a);
}, Db = function(t, n, r, o, i) {
  var a = [], s = Array.isArray(n) ? "array" : typeof n;
  De.required(t, n, o, a, i, s), r(a);
}, Sa = function(t, n, r, o, i) {
  var a = t.type, s = [], c = t.required || !t.required && o.hasOwnProperty(t.field);
  if (c) {
    if (wt(n, a) && !t.required)
      return r();
    De.required(t, n, o, s, i, a), wt(n, a) || De.type(t, n, o, s, i);
  }
  r(s);
}, Lb = function(t, n, r, o, i) {
  var a = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (wt(n) && !t.required)
      return r();
    De.required(t, n, o, a, i);
  }
  r(a);
}, Xr = {
  string: Cb,
  method: xb,
  number: Ob,
  boolean: _b,
  regexp: Rb,
  integer: Pb,
  float: Tb,
  array: Nb,
  object: Mb,
  enum: $b,
  pattern: Ab,
  date: Fb,
  url: Sa,
  hex: Sa,
  email: Sa,
  required: Db,
  any: Lb
};
function ms() {
  return {
    default: "Validation error on field %s",
    required: "%s is required",
    enum: "%s must be one of %s",
    whitespace: "%s cannot be empty",
    date: {
      format: "%s date %s is invalid for format %s",
      parse: "%s date could not be parsed, %s is invalid ",
      invalid: "%s date %s is invalid"
    },
    types: {
      string: "%s is not a %s",
      method: "%s is not a %s (function)",
      array: "%s is not an %s",
      object: "%s is not an %s",
      number: "%s is not a %s",
      date: "%s is not a %s",
      boolean: "%s is not a %s",
      integer: "%s is not an %s",
      float: "%s is not a %s",
      regexp: "%s is not a valid %s",
      email: "%s is not a valid %s",
      url: "%s is not a valid %s",
      hex: "%s is not a valid %s"
    },
    string: {
      len: "%s must be exactly %s characters",
      min: "%s must be at least %s characters",
      max: "%s cannot be longer than %s characters",
      range: "%s must be between %s and %s characters"
    },
    number: {
      len: "%s must equal %s",
      min: "%s cannot be less than %s",
      max: "%s cannot be greater than %s",
      range: "%s must be between %s and %s"
    },
    array: {
      len: "%s must be exactly %s in length",
      min: "%s cannot be less than %s in length",
      max: "%s cannot be greater than %s in length",
      range: "%s must be between %s and %s in length"
    },
    pattern: {
      mismatch: "%s value %s does not match pattern %s"
    },
    clone: function() {
      var t = JSON.parse(JSON.stringify(this));
      return t.clone = this.clone, t;
    }
  };
}
var ps = ms(), Eo = /* @__PURE__ */ function() {
  function e(n) {
    this.rules = null, this._messages = ps, this.define(n);
  }
  var t = e.prototype;
  return t.define = function(r) {
    var o = this;
    if (!r)
      throw new Error("Cannot configure a schema with no rules");
    if (typeof r != "object" || Array.isArray(r))
      throw new Error("Rules must be an object");
    this.rules = {}, Object.keys(r).forEach(function(i) {
      var a = r[i];
      o.rules[i] = Array.isArray(a) ? a : [a];
    });
  }, t.messages = function(r) {
    return r && (this._messages = zl(ms(), r)), this._messages;
  }, t.validate = function(r, o, i) {
    var a = this;
    o === void 0 && (o = {}), i === void 0 && (i = function() {
    });
    var s = r, c = o, l = i;
    if (typeof c == "function" && (l = c, c = {}), !this.rules || Object.keys(this.rules).length === 0)
      return l && l(null, s), Promise.resolve(s);
    function f(h) {
      var m = [], y = {};
      function b(w) {
        if (Array.isArray(w)) {
          var S;
          m = (S = m).concat.apply(S, w);
        } else
          m.push(w);
      }
      for (var E = 0; E < h.length; E++)
        b(h[E]);
      m.length ? (y = hs(m), l(m, y)) : l(null, s);
    }
    if (c.messages) {
      var d = this.messages();
      d === ps && (d = ms()), zl(d, c.messages), c.messages = d;
    } else
      c.messages = this.messages();
    var v = {}, g = c.keys || Object.keys(this.rules);
    g.forEach(function(h) {
      var m = a.rules[h], y = s[h];
      m.forEach(function(b) {
        var E = b;
        typeof E.transform == "function" && (s === r && (s = Kn({}, s)), y = s[h] = E.transform(y)), typeof E == "function" ? E = {
          validator: E
        } : E = Kn({}, E), E.validator = a.getValidationMethod(E), E.validator && (E.field = h, E.fullField = E.fullField || h, E.type = a.getType(E), v[h] = v[h] || [], v[h].push({
          rule: E,
          value: y,
          source: s,
          field: h
        }));
      });
    });
    var p = {};
    return hb(v, c, function(h, m) {
      var y = h.rule, b = (y.type === "object" || y.type === "array") && (typeof y.fields == "object" || typeof y.defaultField == "object");
      b = b && (y.required || !y.required && h.value), y.field = h.field;
      function E(C, _) {
        return Kn({}, _, {
          fullField: y.fullField + "." + C,
          fullFields: y.fullFields ? [].concat(y.fullFields, [C]) : [C]
        });
      }
      function w(C) {
        C === void 0 && (C = []);
        var _ = Array.isArray(C) ? C : [C];
        !c.suppressWarning && _.length && e.warning("async-validator:", _), _.length && y.message !== void 0 && (_ = [].concat(y.message));
        var N = _.map(Hl(y, s));
        if (c.first && N.length)
          return p[y.field] = 1, m(N);
        if (!b)
          m(N);
        else {
          if (y.required && !h.value)
            return y.message !== void 0 ? N = [].concat(y.message).map(Hl(y, s)) : c.error && (N = [c.error(y, qt(c.messages.required, y.field))]), m(N);
          var M = {};
          y.defaultField && Object.keys(h.value).map(function(x) {
            M[x] = y.defaultField;
          }), M = Kn({}, M, h.rule.fields);
          var R = {};
          Object.keys(M).forEach(function(x) {
            var O = M[x], P = Array.isArray(O) ? O : [O];
            R[x] = P.map(E.bind(null, x));
          });
          var k = new e(R);
          k.messages(c.messages), h.rule.options && (h.rule.options.messages = c.messages, h.rule.options.error = c.error), k.validate(h.value, h.rule.options || c, function(x) {
            var O = [];
            N && N.length && O.push.apply(O, N), x && x.length && O.push.apply(O, x), m(O.length ? O : null);
          });
        }
      }
      var S;
      if (y.asyncValidator)
        S = y.asyncValidator(y, h.value, w, h.source, c);
      else if (y.validator) {
        try {
          S = y.validator(y, h.value, w, h.source, c);
        } catch (C) {
          console.error?.(C), c.suppressValidatorError || setTimeout(function() {
            throw C;
          }, 0), w(C.message);
        }
        S === !0 ? w() : S === !1 ? w(typeof y.message == "function" ? y.message(y.fullField || y.field) : y.message || (y.fullField || y.field) + " fails") : S instanceof Array ? w(S) : S instanceof Error && w(S.message);
      }
      S && S.then && S.then(function() {
        return w();
      }, function(C) {
        return w(C);
      });
    }, function(h) {
      f(h);
    }, s);
  }, t.getType = function(r) {
    if (r.type === void 0 && r.pattern instanceof RegExp && (r.type = "pattern"), typeof r.validator != "function" && r.type && !Xr.hasOwnProperty(r.type))
      throw new Error(qt("Unknown rule type %s", r.type));
    return r.type || "string";
  }, t.getValidationMethod = function(r) {
    if (typeof r.validator == "function")
      return r.validator;
    var o = Object.keys(r), i = o.indexOf("message");
    return i !== -1 && o.splice(i, 1), o.length === 1 && o[0] === "required" ? Xr.required : Xr[this.getType(r)] || void 0;
  }, e;
}();
Eo.register = function(t, n) {
  if (typeof n != "function")
    throw new Error("Cannot register a validator by type, validator is not a function");
  Xr[t] = n;
};
Eo.warning = Wd;
Eo.messages = ps;
Eo.validators = Xr;
var Kt = "'${name}' is not a valid ${type}", Kd = {
  default: "Validation error on field '${name}'",
  required: "'${name}' is required",
  enum: "'${name}' must be one of [${enum}]",
  whitespace: "'${name}' cannot be empty",
  date: {
    format: "'${name}' is invalid for format date",
    parse: "'${name}' could not be parsed as date",
    invalid: "'${name}' is invalid date"
  },
  types: {
    string: Kt,
    method: Kt,
    array: Kt,
    object: Kt,
    number: Kt,
    date: Kt,
    boolean: Kt,
    integer: Kt,
    float: Kt,
    regexp: Kt,
    email: Kt,
    url: Kt,
    hex: Kt
  },
  string: {
    len: "'${name}' must be exactly ${len} characters",
    min: "'${name}' must be at least ${min} characters",
    max: "'${name}' cannot be longer than ${max} characters",
    range: "'${name}' must be between ${min} and ${max} characters"
  },
  number: {
    len: "'${name}' must equal ${len}",
    min: "'${name}' cannot be less than ${min}",
    max: "'${name}' cannot be greater than ${max}",
    range: "'${name}' must be between ${min} and ${max}"
  },
  array: {
    len: "'${name}' must be exactly ${len} in length",
    min: "'${name}' cannot be less than ${min} in length",
    max: "'${name}' cannot be greater than ${max} in length",
    range: "'${name}' must be between ${min} and ${max} in length"
  },
  pattern: {
    mismatch: "'${name}' does not match pattern ${pattern}"
  }
}, Bl = Eo;
function kb(e, t) {
  return e.replace(/\$\{\w+\}/g, function(n) {
    var r = n.slice(2, -1);
    return t[r];
  });
}
var Wl = "CODE_LOGIC_ERROR";
function gs(e, t, n, r, o) {
  return ys.apply(this, arguments);
}
function ys() {
  return ys = Ar(/* @__PURE__ */ Xt().mark(function e(t, n, r, o, i) {
    var a, s, c, l, f, d, v, g, p;
    return Xt().wrap(function(m) {
      for (; ; )
        switch (m.prev = m.next) {
          case 0:
            return a = V({}, r), delete a.ruleIndex, Bl.warning = function() {
            }, a.validator && (s = a.validator, a.validator = function() {
              try {
                return s.apply(void 0, arguments);
              } catch (y) {
                return console.error(y), Promise.reject(Wl);
              }
            }), c = null, a && a.type === "array" && a.defaultField && (c = a.defaultField, delete a.defaultField), l = new Bl(he({}, t, [a])), f = yr(Kd, o.validateMessages), l.messages(f), d = [], m.prev = 10, m.next = 13, Promise.resolve(l.validate(he({}, t, n), V({}, o)));
          case 13:
            m.next = 18;
            break;
          case 15:
            m.prev = 15, m.t0 = m.catch(10), m.t0.errors && (d = m.t0.errors.map(function(y, b) {
              var E = y.message, w = E === Wl ? f.default : E;
              return /* @__PURE__ */ u.isValidElement(w) ? (
                // Wrap ReactNode with `key`
                /* @__PURE__ */ u.cloneElement(w, {
                  key: "error_".concat(b)
                })
              ) : w;
            }));
          case 18:
            if (!(!d.length && c)) {
              m.next = 23;
              break;
            }
            return m.next = 21, Promise.all(n.map(function(y, b) {
              return gs("".concat(t, ".").concat(b), y, c, o, i);
            }));
          case 21:
            return v = m.sent, m.abrupt("return", v.reduce(function(y, b) {
              return [].concat(me(y), me(b));
            }, []));
          case 23:
            return g = V(V({}, r), {}, {
              name: t,
              enum: (r.enum || []).join(", ")
            }, i), p = d.map(function(y) {
              return typeof y == "string" ? kb(y, g) : y;
            }), m.abrupt("return", p);
          case 26:
          case "end":
            return m.stop();
        }
    }, e, null, [[10, 15]]);
  })), ys.apply(this, arguments);
}
function jb(e, t, n, r, o, i) {
  var a = e.join("."), s = n.map(function(f, d) {
    var v = f.validator, g = V(V({}, f), {}, {
      ruleIndex: d
    });
    return v && (g.validator = function(p, h, m) {
      var y = !1, b = function() {
        for (var S = arguments.length, C = new Array(S), _ = 0; _ < S; _++)
          C[_] = arguments[_];
        Promise.resolve().then(function() {
          Fe(!y, "Your validator function has already return a promise. `callback` will be ignored."), y || m.apply(void 0, C);
        });
      }, E = v(p, h, b);
      y = E && typeof E.then == "function" && typeof E.catch == "function", Fe(y, "`callback` is deprecated. Please return a promise instead."), y && E.then(function() {
        m();
      }).catch(function(w) {
        m(w || " ");
      });
    }), g;
  }).sort(function(f, d) {
    var v = f.warningOnly, g = f.ruleIndex, p = d.warningOnly, h = d.ruleIndex;
    return !!v == !!p ? g - h : v ? 1 : -1;
  }), c;
  if (o === !0)
    c = new Promise(/* @__PURE__ */ function() {
      var f = Ar(/* @__PURE__ */ Xt().mark(function d(v, g) {
        var p, h, m;
        return Xt().wrap(function(b) {
          for (; ; )
            switch (b.prev = b.next) {
              case 0:
                p = 0;
              case 1:
                if (!(p < s.length)) {
                  b.next = 12;
                  break;
                }
                return h = s[p], b.next = 5, gs(a, t, h, r, i);
              case 5:
                if (m = b.sent, !m.length) {
                  b.next = 9;
                  break;
                }
                return g([{
                  errors: m,
                  rule: h
                }]), b.abrupt("return");
              case 9:
                p += 1, b.next = 1;
                break;
              case 12:
                v([]);
              case 13:
              case "end":
                return b.stop();
            }
        }, d);
      }));
      return function(d, v) {
        return f.apply(this, arguments);
      };
    }());
  else {
    var l = s.map(function(f) {
      return gs(a, t, f, r, i).then(function(d) {
        return {
          errors: d,
          rule: f
        };
      });
    });
    c = (o ? zb(l) : Hb(l)).then(function(f) {
      return Promise.reject(f);
    });
  }
  return c.catch(function(f) {
    return f;
  }), c;
}
function Hb(e) {
  return bs.apply(this, arguments);
}
function bs() {
  return bs = Ar(/* @__PURE__ */ Xt().mark(function e(t) {
    return Xt().wrap(function(r) {
      for (; ; )
        switch (r.prev = r.next) {
          case 0:
            return r.abrupt("return", Promise.all(t).then(function(o) {
              var i, a = (i = []).concat.apply(i, me(o));
              return a;
            }));
          case 1:
          case "end":
            return r.stop();
        }
    }, e);
  })), bs.apply(this, arguments);
}
function zb(e) {
  return Ss.apply(this, arguments);
}
function Ss() {
  return Ss = Ar(/* @__PURE__ */ Xt().mark(function e(t) {
    var n;
    return Xt().wrap(function(o) {
      for (; ; )
        switch (o.prev = o.next) {
          case 0:
            return n = 0, o.abrupt("return", new Promise(function(i) {
              t.forEach(function(a) {
                a.then(function(s) {
                  s.errors.length && i([s]), n += 1, n === t.length && i([]);
                });
              });
            }));
          case 2:
          case "end":
            return o.stop();
        }
    }, e);
  })), Ss.apply(this, arguments);
}
function dt(e) {
  return fs(e);
}
function Ul(e, t) {
  var n = {};
  return t.forEach(function(r) {
    var o = dn(e, r);
    n = un(n, r, o);
  }), n;
}
function Qr(e, t) {
  return e && e.some(function(n) {
    return Gd(n, t);
  });
}
function Gd(e, t) {
  return !e || !t || e.length !== t.length ? !1 : e.every(function(n, r) {
    return t[r] === n;
  });
}
function Vb(e, t) {
  if (e === t)
    return !0;
  if (!e && t || e && !t || !e || !t || je(e) !== "object" || je(t) !== "object")
    return !1;
  var n = Object.keys(e), r = Object.keys(t), o = new Set([].concat(n, r));
  return me(o).every(function(i) {
    var a = e[i], s = t[i];
    return typeof a == "function" && typeof s == "function" ? !0 : a === s;
  });
}
function Bb(e) {
  var t = arguments.length <= 1 ? void 0 : arguments[1];
  return t && t.target && je(t.target) === "object" && e in t.target ? t.target[e] : t;
}
function Kl(e, t, n) {
  var r = e.length;
  if (t < 0 || t >= r || n < 0 || n >= r)
    return e;
  var o = e[t], i = t - n;
  return i > 0 ? [].concat(me(e.slice(0, n)), [o], me(e.slice(n, t)), me(e.slice(t + 1, r))) : i < 0 ? [].concat(me(e.slice(0, t)), me(e.slice(t + 1, n + 1)), [o], me(e.slice(n + 1, r))) : e;
}
var Wb = ["name"], Zt = [];
function Gl(e, t, n, r, o, i) {
  return typeof e == "function" ? e(t, n, "source" in i ? {
    source: i.source
  } : {}) : r !== o;
}
var uc = /* @__PURE__ */ function(e) {
  mo(n, e);
  var t = po(n);
  function n(r) {
    var o;
    if (on(this, n), o = t.call(this, r), o.state = {
      resetCount: 0
    }, o.cancelRegisterFunc = null, o.mounted = !1, o.touched = !1, o.dirty = !1, o.validatePromise = void 0, o.prevValidating = void 0, o.errors = Zt, o.warnings = Zt, o.cancelRegister = function() {
      var c = o.props, l = c.preserve, f = c.isListField, d = c.name;
      o.cancelRegisterFunc && o.cancelRegisterFunc(f, l, dt(d)), o.cancelRegisterFunc = null;
    }, o.getNamePath = function() {
      var c = o.props, l = c.name, f = c.fieldContext, d = f.prefixName, v = d === void 0 ? [] : d;
      return l !== void 0 ? [].concat(me(v), me(l)) : [];
    }, o.getRules = function() {
      var c = o.props, l = c.rules, f = l === void 0 ? [] : l, d = c.fieldContext;
      return f.map(function(v) {
        return typeof v == "function" ? v(d) : v;
      });
    }, o.refresh = function() {
      o.mounted && o.setState(function(c) {
        var l = c.resetCount;
        return {
          resetCount: l + 1
        };
      });
    }, o.metaCache = null, o.triggerMetaEvent = function(c) {
      var l = o.props.onMetaChange;
      if (l) {
        var f = V(V({}, o.getMeta()), {}, {
          destroy: c
        });
        gf(o.metaCache, f) || l(f), o.metaCache = f;
      } else
        o.metaCache = null;
    }, o.onStoreChange = function(c, l, f) {
      var d = o.props, v = d.shouldUpdate, g = d.dependencies, p = g === void 0 ? [] : g, h = d.onReset, m = f.store, y = o.getNamePath(), b = o.getValue(c), E = o.getValue(m), w = l && Qr(l, y);
      switch (f.type === "valueUpdate" && f.source === "external" && b !== E && (o.touched = !0, o.dirty = !0, o.validatePromise = null, o.errors = Zt, o.warnings = Zt, o.triggerMetaEvent()), f.type) {
        case "reset":
          if (!l || w) {
            o.touched = !1, o.dirty = !1, o.validatePromise = void 0, o.errors = Zt, o.warnings = Zt, o.triggerMetaEvent(), h?.(), o.refresh();
            return;
          }
          break;
        case "remove": {
          if (v) {
            o.reRender();
            return;
          }
          break;
        }
        case "setField": {
          if (w) {
            var S = f.data;
            "touched" in S && (o.touched = S.touched), "validating" in S && !("originRCField" in S) && (o.validatePromise = S.validating ? Promise.resolve([]) : null), "errors" in S && (o.errors = S.errors || Zt), "warnings" in S && (o.warnings = S.warnings || Zt), o.dirty = !0, o.triggerMetaEvent(), o.reRender();
            return;
          }
          if (v && !y.length && Gl(v, c, m, b, E, f)) {
            o.reRender();
            return;
          }
          break;
        }
        case "dependenciesUpdate": {
          var C = p.map(dt);
          if (C.some(function(_) {
            return Qr(f.relatedFields, _);
          })) {
            o.reRender();
            return;
          }
          break;
        }
        default:
          if (w || (!p.length || y.length || v) && Gl(v, c, m, b, E, f)) {
            o.reRender();
            return;
          }
          break;
      }
      v === !0 && o.reRender();
    }, o.validateRules = function(c) {
      var l = o.getNamePath(), f = o.getValue(), d = c || {}, v = d.triggerName, g = d.validateOnly, p = g === void 0 ? !1 : g, h = Promise.resolve().then(function() {
        if (!o.mounted)
          return [];
        var m = o.props, y = m.validateFirst, b = y === void 0 ? !1 : y, E = m.messageVariables, w = o.getRules();
        v && (w = w.filter(function(C) {
          return C;
        }).filter(function(C) {
          var _ = C.validateTrigger;
          if (!_)
            return !0;
          var N = fs(_);
          return N.includes(v);
        }));
        var S = jb(l, f, w, c, b, E);
        return S.catch(function(C) {
          return C;
        }).then(function() {
          var C = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Zt;
          if (o.validatePromise === h) {
            var _;
            o.validatePromise = null;
            var N = [], M = [];
            (_ = C.forEach) === null || _ === void 0 || _.call(C, function(R) {
              var k = R.rule.warningOnly, x = R.errors, O = x === void 0 ? Zt : x;
              k ? M.push.apply(M, me(O)) : N.push.apply(N, me(O));
            }), o.errors = N, o.warnings = M, o.triggerMetaEvent(), o.reRender();
          }
        }), S;
      });
      return p || (o.validatePromise = h, o.dirty = !0, o.errors = Zt, o.warnings = Zt, o.triggerMetaEvent(), o.reRender()), h;
    }, o.isFieldValidating = function() {
      return !!o.validatePromise;
    }, o.isFieldTouched = function() {
      return o.touched;
    }, o.isFieldDirty = function() {
      if (o.dirty || o.props.initialValue !== void 0)
        return !0;
      var c = o.props.fieldContext, l = c.getInternalHooks(Un), f = l.getInitialValue;
      return f(o.getNamePath()) !== void 0;
    }, o.getErrors = function() {
      return o.errors;
    }, o.getWarnings = function() {
      return o.warnings;
    }, o.isListField = function() {
      return o.props.isListField;
    }, o.isList = function() {
      return o.props.isList;
    }, o.isPreserve = function() {
      return o.props.preserve;
    }, o.getMeta = function() {
      o.prevValidating = o.isFieldValidating();
      var c = {
        touched: o.isFieldTouched(),
        validating: o.prevValidating,
        errors: o.errors,
        warnings: o.warnings,
        name: o.getNamePath(),
        validated: o.validatePromise === null
      };
      return c;
    }, o.getOnlyChild = function(c) {
      if (typeof c == "function") {
        var l = o.getMeta();
        return V(V({}, o.getOnlyChild(c(o.getControlled(), l, o.props.fieldContext))), {}, {
          isFunction: !0
        });
      }
      var f = Qn(c);
      return f.length !== 1 || !/* @__PURE__ */ u.isValidElement(f[0]) ? {
        child: f,
        isFunction: !1
      } : {
        child: f[0],
        isFunction: !1
      };
    }, o.getValue = function(c) {
      var l = o.props.fieldContext.getFieldsValue, f = o.getNamePath();
      return dn(c || l(!0), f);
    }, o.getControlled = function() {
      var c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, l = o.props, f = l.trigger, d = l.validateTrigger, v = l.getValueFromEvent, g = l.normalize, p = l.valuePropName, h = l.getValueProps, m = l.fieldContext, y = d !== void 0 ? d : m.validateTrigger, b = o.getNamePath(), E = m.getInternalHooks, w = m.getFieldsValue, S = E(Un), C = S.dispatch, _ = o.getValue(), N = h || function(x) {
        return he({}, p, x);
      }, M = c[f], R = V(V({}, c), N(_));
      R[f] = function() {
        o.touched = !0, o.dirty = !0, o.triggerMetaEvent();
        for (var x, O = arguments.length, P = new Array(O), I = 0; I < O; I++)
          P[I] = arguments[I];
        v ? x = v.apply(void 0, P) : x = Bb.apply(void 0, [p].concat(P)), g && (x = g(x, _, w(!0))), C({
          type: "updateValue",
          namePath: b,
          value: x
        }), M && M.apply(void 0, P);
      };
      var k = fs(y || []);
      return k.forEach(function(x) {
        var O = R[x];
        R[x] = function() {
          O && O.apply(void 0, arguments);
          var P = o.props.rules;
          P && P.length && C({
            type: "validateField",
            namePath: b,
            triggerName: x
          });
        };
      }), R;
    }, r.fieldContext) {
      var i = r.fieldContext.getInternalHooks, a = i(Un), s = a.initEntityValue;
      s(ii(o));
    }
    return o;
  }
  return an(n, [{
    key: "componentDidMount",
    value: function() {
      var o = this.props, i = o.shouldUpdate, a = o.fieldContext;
      if (this.mounted = !0, a) {
        var s = a.getInternalHooks, c = s(Un), l = c.registerField;
        this.cancelRegisterFunc = l(this);
      }
      i === !0 && this.reRender();
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this.cancelRegister(), this.triggerMetaEvent(!0), this.mounted = !1;
    }
  }, {
    key: "reRender",
    value: function() {
      this.mounted && this.forceUpdate();
    }
  }, {
    key: "render",
    value: function() {
      var o = this.state.resetCount, i = this.props.children, a = this.getOnlyChild(i), s = a.child, c = a.isFunction, l;
      return c ? l = s : /* @__PURE__ */ u.isValidElement(s) ? l = /* @__PURE__ */ u.cloneElement(s, this.getControlled(s.props)) : (Fe(!s, "`children` of Field is not validate ReactElement."), l = s), /* @__PURE__ */ u.createElement(u.Fragment, {
        key: o
      }, l);
    }
  }]), n;
}(u.Component);
uc.contextType = Rr;
uc.defaultProps = {
  trigger: "onChange",
  valuePropName: "value"
};
function qd(e) {
  var t = e.name, n = ut(e, Wb), r = u.useContext(Rr), o = u.useContext(yi), i = t !== void 0 ? dt(t) : void 0, a = "keep";
  return n.isListField || (a = "_".concat((i || []).join("_"))), process.env.NODE_ENV !== "production" && n.preserve === !1 && n.isListField && i.length <= 1 && Fe(!1, "`preserve` should not apply on Form.List fields."), /* @__PURE__ */ u.createElement(uc, Te({
    key: a,
    name: i,
    isListField: !!o
  }, n, {
    fieldContext: r
  }));
}
var Ub = function(t) {
  var n = t.name, r = t.initialValue, o = t.children, i = t.rules, a = t.validateTrigger, s = t.isListField, c = u.useContext(Rr), l = u.useContext(yi), f = u.useRef({
    keys: [],
    id: 0
  }), d = f.current, v = u.useMemo(function() {
    var m = dt(c.prefixName) || [];
    return [].concat(me(m), me(dt(n)));
  }, [c.prefixName, n]), g = u.useMemo(function() {
    return V(V({}, c), {}, {
      prefixName: v
    });
  }, [c, v]), p = u.useMemo(function() {
    return {
      getKey: function(y) {
        var b = v.length, E = y[b];
        return [d.keys[E], y.slice(b + 1)];
      }
    };
  }, [v]);
  if (typeof o != "function")
    return Fe(!1, "Form.List only accepts function as children."), null;
  var h = function(y, b, E) {
    var w = E.source;
    return w === "internal" ? !1 : y !== b;
  };
  return /* @__PURE__ */ u.createElement(yi.Provider, {
    value: p
  }, /* @__PURE__ */ u.createElement(Rr.Provider, {
    value: g
  }, /* @__PURE__ */ u.createElement(qd, {
    name: [],
    shouldUpdate: h,
    rules: i,
    validateTrigger: a,
    initialValue: r,
    isList: !0,
    isListField: s ?? !!l
  }, function(m, y) {
    var b = m.value, E = b === void 0 ? [] : b, w = m.onChange, S = c.getFieldValue, C = function() {
      var R = S(v || []);
      return R || [];
    }, _ = {
      add: function(R, k) {
        var x = C();
        k >= 0 && k <= x.length ? (d.keys = [].concat(me(d.keys.slice(0, k)), [d.id], me(d.keys.slice(k))), w([].concat(me(x.slice(0, k)), [R], me(x.slice(k))))) : (process.env.NODE_ENV !== "production" && (k < 0 || k > x.length) && Fe(!1, "The second parameter of the add function should be a valid positive number."), d.keys = [].concat(me(d.keys), [d.id]), w([].concat(me(x), [R]))), d.id += 1;
      },
      remove: function(R) {
        var k = C(), x = new Set(Array.isArray(R) ? R : [R]);
        x.size <= 0 || (d.keys = d.keys.filter(function(O, P) {
          return !x.has(P);
        }), w(k.filter(function(O, P) {
          return !x.has(P);
        })));
      },
      move: function(R, k) {
        if (R !== k) {
          var x = C();
          R < 0 || R >= x.length || k < 0 || k >= x.length || (d.keys = Kl(d.keys, R, k), w(Kl(x, R, k)));
        }
      }
    }, N = E || [];
    return Array.isArray(N) || (N = [], process.env.NODE_ENV !== "production" && Fe(!1, "Current value of '".concat(v.join(" > "), "' is not an array type."))), o(N.map(function(M, R) {
      var k = d.keys[R];
      return k === void 0 && (d.keys[R] = d.id, k = d.keys[R], d.id += 1), {
        name: R,
        key: k,
        isListField: !0
      };
    }), _, y);
  })));
};
function Kb(e) {
  var t = !1, n = e.length, r = [];
  return e.length ? new Promise(function(o, i) {
    e.forEach(function(a, s) {
      a.catch(function(c) {
        return t = !0, c;
      }).then(function(c) {
        n -= 1, r[s] = c, !(n > 0) && (t && i(r), o(r));
      });
    });
  }) : Promise.resolve([]);
}
var Yd = "__@field_split__";
function Ea(e) {
  return e.map(function(t) {
    return "".concat(je(t), ":").concat(t);
  }).join(Yd);
}
var dr = /* @__PURE__ */ function() {
  function e() {
    on(this, e), this.kvs = /* @__PURE__ */ new Map();
  }
  return an(e, [{
    key: "set",
    value: function(n, r) {
      this.kvs.set(Ea(n), r);
    }
  }, {
    key: "get",
    value: function(n) {
      return this.kvs.get(Ea(n));
    }
  }, {
    key: "update",
    value: function(n, r) {
      var o = this.get(n), i = r(o);
      i ? this.set(n, i) : this.delete(n);
    }
  }, {
    key: "delete",
    value: function(n) {
      this.kvs.delete(Ea(n));
    }
    // Since we only use this in test, let simply realize this
  }, {
    key: "map",
    value: function(n) {
      return me(this.kvs.entries()).map(function(r) {
        var o = U(r, 2), i = o[0], a = o[1], s = i.split(Yd);
        return n({
          key: s.map(function(c) {
            var l = c.match(/^([^:]*):(.*)$/), f = U(l, 3), d = f[1], v = f[2];
            return d === "number" ? Number(v) : v;
          }),
          value: a
        });
      });
    }
  }, {
    key: "toJSON",
    value: function() {
      var n = {};
      return this.map(function(r) {
        var o = r.key, i = r.value;
        return n[o.join(".")] = i, null;
      }), n;
    }
  }]), e;
}(), Gb = ["name"], qb = /* @__PURE__ */ an(function e(t) {
  var n = this;
  on(this, e), this.formHooked = !1, this.forceRootUpdate = void 0, this.subscribable = !0, this.store = {}, this.fieldEntities = [], this.initialValues = {}, this.callbacks = {}, this.validateMessages = null, this.preserve = null, this.lastValidatePromise = null, this.getForm = function() {
    return {
      getFieldValue: n.getFieldValue,
      getFieldsValue: n.getFieldsValue,
      getFieldError: n.getFieldError,
      getFieldWarning: n.getFieldWarning,
      getFieldsError: n.getFieldsError,
      isFieldsTouched: n.isFieldsTouched,
      isFieldTouched: n.isFieldTouched,
      isFieldValidating: n.isFieldValidating,
      isFieldsValidating: n.isFieldsValidating,
      resetFields: n.resetFields,
      setFields: n.setFields,
      setFieldValue: n.setFieldValue,
      setFieldsValue: n.setFieldsValue,
      validateFields: n.validateFields,
      submit: n.submit,
      _init: !0,
      getInternalHooks: n.getInternalHooks
    };
  }, this.getInternalHooks = function(r) {
    return r === Un ? (n.formHooked = !0, {
      dispatch: n.dispatch,
      initEntityValue: n.initEntityValue,
      registerField: n.registerField,
      useSubscribe: n.useSubscribe,
      setInitialValues: n.setInitialValues,
      destroyForm: n.destroyForm,
      setCallbacks: n.setCallbacks,
      setValidateMessages: n.setValidateMessages,
      getFields: n.getFields,
      setPreserve: n.setPreserve,
      getInitialValue: n.getInitialValue,
      registerWatch: n.registerWatch
    }) : (Fe(!1, "`getInternalHooks` is internal usage. Should not call directly."), null);
  }, this.useSubscribe = function(r) {
    n.subscribable = r;
  }, this.prevWithoutPreserves = null, this.setInitialValues = function(r, o) {
    if (n.initialValues = r || {}, o) {
      var i, a = yr(r, n.store);
      (i = n.prevWithoutPreserves) === null || i === void 0 || i.map(function(s) {
        var c = s.key;
        a = un(a, c, dn(r, c));
      }), n.prevWithoutPreserves = null, n.updateStore(a);
    }
  }, this.destroyForm = function() {
    var r = new dr();
    n.getFieldEntities(!0).forEach(function(o) {
      n.isMergedPreserve(o.isPreserve()) || r.set(o.getNamePath(), !0);
    }), n.prevWithoutPreserves = r;
  }, this.getInitialValue = function(r) {
    var o = dn(n.initialValues, r);
    return r.length ? yr(o) : o;
  }, this.setCallbacks = function(r) {
    n.callbacks = r;
  }, this.setValidateMessages = function(r) {
    n.validateMessages = r;
  }, this.setPreserve = function(r) {
    n.preserve = r;
  }, this.watchList = [], this.registerWatch = function(r) {
    return n.watchList.push(r), function() {
      n.watchList = n.watchList.filter(function(o) {
        return o !== r;
      });
    };
  }, this.notifyWatch = function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    if (n.watchList.length) {
      var o = n.getFieldsValue(), i = n.getFieldsValue(!0);
      n.watchList.forEach(function(a) {
        a(o, i, r);
      });
    }
  }, this.timeoutId = null, this.warningUnhooked = function() {
    process.env.NODE_ENV !== "production" && !n.timeoutId && typeof window < "u" && (n.timeoutId = setTimeout(function() {
      n.timeoutId = null, n.formHooked || Fe(!1, "Instance created by `useForm` is not connected to any Form element. Forget to pass `form` prop?");
    }));
  }, this.updateStore = function(r) {
    n.store = r;
  }, this.getFieldEntities = function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    return r ? n.fieldEntities.filter(function(o) {
      return o.getNamePath().length;
    }) : n.fieldEntities;
  }, this.getFieldsMap = function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, o = new dr();
    return n.getFieldEntities(r).forEach(function(i) {
      var a = i.getNamePath();
      o.set(a, i);
    }), o;
  }, this.getFieldEntitiesForNamePathList = function(r) {
    if (!r)
      return n.getFieldEntities(!0);
    var o = n.getFieldsMap(!0);
    return r.map(function(i) {
      var a = dt(i);
      return o.get(a) || {
        INVALIDATE_NAME_PATH: dt(i)
      };
    });
  }, this.getFieldsValue = function(r, o) {
    if (n.warningUnhooked(), r === !0 && !o)
      return n.store;
    var i = n.getFieldEntitiesForNamePathList(Array.isArray(r) ? r : null), a = [];
    return i.forEach(function(s) {
      var c, l = "INVALIDATE_NAME_PATH" in s ? s.INVALIDATE_NAME_PATH : s.getNamePath();
      if (!(!r && (!((c = s.isListField) === null || c === void 0) && c.call(s))))
        if (!o)
          a.push(l);
        else {
          var f = "getMeta" in s ? s.getMeta() : null;
          o(f) && a.push(l);
        }
    }), Ul(n.store, a.map(dt));
  }, this.getFieldValue = function(r) {
    n.warningUnhooked();
    var o = dt(r);
    return dn(n.store, o);
  }, this.getFieldsError = function(r) {
    n.warningUnhooked();
    var o = n.getFieldEntitiesForNamePathList(r);
    return o.map(function(i, a) {
      return i && !("INVALIDATE_NAME_PATH" in i) ? {
        name: i.getNamePath(),
        errors: i.getErrors(),
        warnings: i.getWarnings()
      } : {
        name: dt(r[a]),
        errors: [],
        warnings: []
      };
    });
  }, this.getFieldError = function(r) {
    n.warningUnhooked();
    var o = dt(r), i = n.getFieldsError([o])[0];
    return i.errors;
  }, this.getFieldWarning = function(r) {
    n.warningUnhooked();
    var o = dt(r), i = n.getFieldsError([o])[0];
    return i.warnings;
  }, this.isFieldsTouched = function() {
    n.warningUnhooked();
    for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
      o[i] = arguments[i];
    var a = o[0], s = o[1], c, l = !1;
    o.length === 0 ? c = null : o.length === 1 ? Array.isArray(a) ? (c = a.map(dt), l = !1) : (c = null, l = a) : (c = a.map(dt), l = s);
    var f = n.getFieldEntities(!0), d = function(m) {
      return m.isFieldTouched();
    };
    if (!c)
      return l ? f.every(d) : f.some(d);
    var v = new dr();
    c.forEach(function(h) {
      v.set(h, []);
    }), f.forEach(function(h) {
      var m = h.getNamePath();
      c.forEach(function(y) {
        y.every(function(b, E) {
          return m[E] === b;
        }) && v.update(y, function(b) {
          return [].concat(me(b), [h]);
        });
      });
    });
    var g = function(m) {
      return m.some(d);
    }, p = v.map(function(h) {
      var m = h.value;
      return m;
    });
    return l ? p.every(g) : p.some(g);
  }, this.isFieldTouched = function(r) {
    return n.warningUnhooked(), n.isFieldsTouched([r]);
  }, this.isFieldsValidating = function(r) {
    n.warningUnhooked();
    var o = n.getFieldEntities();
    if (!r)
      return o.some(function(a) {
        return a.isFieldValidating();
      });
    var i = r.map(dt);
    return o.some(function(a) {
      var s = a.getNamePath();
      return Qr(i, s) && a.isFieldValidating();
    });
  }, this.isFieldValidating = function(r) {
    return n.warningUnhooked(), n.isFieldsValidating([r]);
  }, this.resetWithFieldInitialValue = function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = new dr(), i = n.getFieldEntities(!0);
    i.forEach(function(c) {
      var l = c.props.initialValue, f = c.getNamePath();
      if (l !== void 0) {
        var d = o.get(f) || /* @__PURE__ */ new Set();
        d.add({
          entity: c,
          value: l
        }), o.set(f, d);
      }
    });
    var a = function(l) {
      l.forEach(function(f) {
        var d = f.props.initialValue;
        if (d !== void 0) {
          var v = f.getNamePath(), g = n.getInitialValue(v);
          if (g !== void 0)
            Fe(!1, "Form already set 'initialValues' with path '".concat(v.join("."), "'. Field can not overwrite it."));
          else {
            var p = o.get(v);
            if (p && p.size > 1)
              Fe(!1, "Multiple Field with path '".concat(v.join("."), "' set 'initialValue'. Can not decide which one to pick."));
            else if (p) {
              var h = n.getFieldValue(v);
              (!r.skipExist || h === void 0) && n.updateStore(un(n.store, v, me(p)[0].value));
            }
          }
        }
      });
    }, s;
    r.entities ? s = r.entities : r.namePathList ? (s = [], r.namePathList.forEach(function(c) {
      var l = o.get(c);
      if (l) {
        var f;
        (f = s).push.apply(f, me(me(l).map(function(d) {
          return d.entity;
        })));
      }
    })) : s = i, a(s);
  }, this.resetFields = function(r) {
    n.warningUnhooked();
    var o = n.store;
    if (!r) {
      n.updateStore(yr(n.initialValues)), n.resetWithFieldInitialValue(), n.notifyObservers(o, null, {
        type: "reset"
      }), n.notifyWatch();
      return;
    }
    var i = r.map(dt);
    i.forEach(function(a) {
      var s = n.getInitialValue(a);
      n.updateStore(un(n.store, a, s));
    }), n.resetWithFieldInitialValue({
      namePathList: i
    }), n.notifyObservers(o, i, {
      type: "reset"
    }), n.notifyWatch(i);
  }, this.setFields = function(r) {
    n.warningUnhooked();
    var o = n.store, i = [];
    r.forEach(function(a) {
      var s = a.name, c = ut(a, Gb), l = dt(s);
      i.push(l), "value" in c && n.updateStore(un(n.store, l, c.value)), n.notifyObservers(o, [l], {
        type: "setField",
        data: a
      });
    }), n.notifyWatch(i);
  }, this.getFields = function() {
    var r = n.getFieldEntities(!0), o = r.map(function(i) {
      var a = i.getNamePath(), s = i.getMeta(), c = V(V({}, s), {}, {
        name: a,
        value: n.getFieldValue(a)
      });
      return Object.defineProperty(c, "originRCField", {
        value: !0
      }), c;
    });
    return o;
  }, this.initEntityValue = function(r) {
    var o = r.props.initialValue;
    if (o !== void 0) {
      var i = r.getNamePath(), a = dn(n.store, i);
      a === void 0 && n.updateStore(un(n.store, i, o));
    }
  }, this.isMergedPreserve = function(r) {
    var o = r !== void 0 ? r : n.preserve;
    return o ?? !0;
  }, this.registerField = function(r) {
    n.fieldEntities.push(r);
    var o = r.getNamePath();
    if (n.notifyWatch([o]), r.props.initialValue !== void 0) {
      var i = n.store;
      n.resetWithFieldInitialValue({
        entities: [r],
        skipExist: !0
      }), n.notifyObservers(i, [r.getNamePath()], {
        type: "valueUpdate",
        source: "internal"
      });
    }
    return function(a, s) {
      var c = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
      if (n.fieldEntities = n.fieldEntities.filter(function(d) {
        return d !== r;
      }), !n.isMergedPreserve(s) && (!a || c.length > 1)) {
        var l = a ? void 0 : n.getInitialValue(o);
        if (o.length && n.getFieldValue(o) !== l && n.fieldEntities.every(function(d) {
          return (
            // Only reset when no namePath exist
            !Gd(d.getNamePath(), o)
          );
        })) {
          var f = n.store;
          n.updateStore(un(f, o, l, !0)), n.notifyObservers(f, [o], {
            type: "remove"
          }), n.triggerDependenciesUpdate(f, o);
        }
      }
      n.notifyWatch([o]);
    };
  }, this.dispatch = function(r) {
    switch (r.type) {
      case "updateValue": {
        var o = r.namePath, i = r.value;
        n.updateValue(o, i);
        break;
      }
      case "validateField": {
        var a = r.namePath, s = r.triggerName;
        n.validateFields([a], {
          triggerName: s
        });
        break;
      }
    }
  }, this.notifyObservers = function(r, o, i) {
    if (n.subscribable) {
      var a = V(V({}, i), {}, {
        store: n.getFieldsValue(!0)
      });
      n.getFieldEntities().forEach(function(s) {
        var c = s.onStoreChange;
        c(r, o, a);
      });
    } else
      n.forceRootUpdate();
  }, this.triggerDependenciesUpdate = function(r, o) {
    var i = n.getDependencyChildrenFields(o);
    return i.length && n.validateFields(i), n.notifyObservers(r, i, {
      type: "dependenciesUpdate",
      relatedFields: [o].concat(me(i))
    }), i;
  }, this.updateValue = function(r, o) {
    var i = dt(r), a = n.store;
    n.updateStore(un(n.store, i, o)), n.notifyObservers(a, [i], {
      type: "valueUpdate",
      source: "internal"
    }), n.notifyWatch([i]);
    var s = n.triggerDependenciesUpdate(a, i), c = n.callbacks.onValuesChange;
    if (c) {
      var l = Ul(n.store, [i]);
      c(l, n.getFieldsValue());
    }
    n.triggerOnFieldsChange([i].concat(me(s)));
  }, this.setFieldsValue = function(r) {
    n.warningUnhooked();
    var o = n.store;
    if (r) {
      var i = yr(n.store, r);
      n.updateStore(i);
    }
    n.notifyObservers(o, null, {
      type: "valueUpdate",
      source: "external"
    }), n.notifyWatch();
  }, this.setFieldValue = function(r, o) {
    n.setFields([{
      name: r,
      value: o
    }]);
  }, this.getDependencyChildrenFields = function(r) {
    var o = /* @__PURE__ */ new Set(), i = [], a = new dr();
    n.getFieldEntities().forEach(function(c) {
      var l = c.props.dependencies;
      (l || []).forEach(function(f) {
        var d = dt(f);
        a.update(d, function() {
          var v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : /* @__PURE__ */ new Set();
          return v.add(c), v;
        });
      });
    });
    var s = function c(l) {
      var f = a.get(l) || /* @__PURE__ */ new Set();
      f.forEach(function(d) {
        if (!o.has(d)) {
          o.add(d);
          var v = d.getNamePath();
          d.isFieldDirty() && v.length && (i.push(v), c(v));
        }
      });
    };
    return s(r), i;
  }, this.triggerOnFieldsChange = function(r, o) {
    var i = n.callbacks.onFieldsChange;
    if (i) {
      var a = n.getFields();
      if (o) {
        var s = new dr();
        o.forEach(function(l) {
          var f = l.name, d = l.errors;
          s.set(f, d);
        }), a.forEach(function(l) {
          l.errors = s.get(l.name) || l.errors;
        });
      }
      var c = a.filter(function(l) {
        var f = l.name;
        return Qr(r, f);
      });
      c.length && i(c, a);
    }
  }, this.validateFields = function(r, o) {
    n.warningUnhooked();
    var i, a;
    Array.isArray(r) || typeof r == "string" || typeof o == "string" ? (i = r, a = o) : a = r;
    var s = !!i, c = s ? i.map(dt) : [], l = [], f = String(Date.now()), d = /* @__PURE__ */ new Set();
    n.getFieldEntities(!0).forEach(function(h) {
      var m;
      if (s || c.push(h.getNamePath()), !((m = a) === null || m === void 0) && m.recursive && s) {
        var y = h.getNamePath();
        // nameList[i] === undefined 说明是以 nameList 开头的
        // ['name'] -> ['name','list']
        y.every(function(w, S) {
          return i[S] === w || i[S] === void 0;
        }) && c.push(y);
      }
      if (!(!h.props.rules || !h.props.rules.length)) {
        var b = h.getNamePath();
        if (d.add(b.join(f)), !s || Qr(c, b)) {
          var E = h.validateRules(V({
            validateMessages: V(V({}, Kd), n.validateMessages)
          }, a));
          l.push(E.then(function() {
            return {
              name: b,
              errors: [],
              warnings: []
            };
          }).catch(function(w) {
            var S, C = [], _ = [];
            return (S = w.forEach) === null || S === void 0 || S.call(w, function(N) {
              var M = N.rule.warningOnly, R = N.errors;
              M ? _.push.apply(_, me(R)) : C.push.apply(C, me(R));
            }), C.length ? Promise.reject({
              name: b,
              errors: C,
              warnings: _
            }) : {
              name: b,
              errors: C,
              warnings: _
            };
          }));
        }
      }
    });
    var v = Kb(l);
    n.lastValidatePromise = v, v.catch(function(h) {
      return h;
    }).then(function(h) {
      var m = h.map(function(y) {
        var b = y.name;
        return b;
      });
      n.notifyObservers(n.store, m, {
        type: "validateFinish"
      }), n.triggerOnFieldsChange(m, h);
    });
    var g = v.then(function() {
      return n.lastValidatePromise === v ? Promise.resolve(n.getFieldsValue(c)) : Promise.reject([]);
    }).catch(function(h) {
      var m = h.filter(function(y) {
        return y && y.errors.length;
      });
      return Promise.reject({
        values: n.getFieldsValue(c),
        errorFields: m,
        outOfDate: n.lastValidatePromise !== v
      });
    });
    g.catch(function(h) {
      return h;
    });
    var p = c.filter(function(h) {
      return d.has(h.join(f));
    });
    return n.triggerOnFieldsChange(p), g;
  }, this.submit = function() {
    n.warningUnhooked(), n.validateFields().then(function(r) {
      var o = n.callbacks.onFinish;
      if (o)
        try {
          o(r);
        } catch (i) {
          console.error(i);
        }
    }).catch(function(r) {
      var o = n.callbacks.onFinishFailed;
      o && o(r);
    });
  }, this.forceRootUpdate = t;
});
function Xd(e) {
  var t = u.useRef(), n = u.useState({}), r = U(n, 2), o = r[1];
  if (!t.current)
    if (e)
      t.current = e;
    else {
      var i = function() {
        o({});
      }, a = new qb(i);
      t.current = a.getForm();
    }
  return [t.current];
}
var Es = /* @__PURE__ */ u.createContext({
  triggerFormChange: function() {
  },
  triggerFormFinish: function() {
  },
  registerForm: function() {
  },
  unregisterForm: function() {
  }
}), Yb = function(t) {
  var n = t.validateMessages, r = t.onFormChange, o = t.onFormFinish, i = t.children, a = u.useContext(Es), s = u.useRef({});
  return /* @__PURE__ */ u.createElement(Es.Provider, {
    value: V(V({}, a), {}, {
      validateMessages: V(V({}, a.validateMessages), n),
      // =========================================================
      // =                  Global Form Control                  =
      // =========================================================
      triggerFormChange: function(l, f) {
        r && r(l, {
          changedFields: f,
          forms: s.current
        }), a.triggerFormChange(l, f);
      },
      triggerFormFinish: function(l, f) {
        o && o(l, {
          values: f,
          forms: s.current
        }), a.triggerFormFinish(l, f);
      },
      registerForm: function(l, f) {
        l && (s.current = V(V({}, s.current), {}, he({}, l, f))), a.registerForm(l, f);
      },
      unregisterForm: function(l) {
        var f = V({}, s.current);
        delete f[l], s.current = f, a.unregisterForm(l);
      }
    })
  }, i);
}, Xb = ["name", "initialValues", "fields", "form", "preserve", "children", "component", "validateMessages", "validateTrigger", "onValuesChange", "onFieldsChange", "onFinish", "onFinishFailed"], Qb = function(t, n) {
  var r = t.name, o = t.initialValues, i = t.fields, a = t.form, s = t.preserve, c = t.children, l = t.component, f = l === void 0 ? "form" : l, d = t.validateMessages, v = t.validateTrigger, g = v === void 0 ? "onChange" : v, p = t.onValuesChange, h = t.onFieldsChange, m = t.onFinish, y = t.onFinishFailed, b = ut(t, Xb), E = u.useContext(Es), w = Xd(a), S = U(w, 1), C = S[0], _ = C.getInternalHooks(Un), N = _.useSubscribe, M = _.setInitialValues, R = _.setCallbacks, k = _.setValidateMessages, x = _.setPreserve, O = _.destroyForm;
  u.useImperativeHandle(n, function() {
    return C;
  }), u.useEffect(function() {
    return E.registerForm(r, C), function() {
      E.unregisterForm(r);
    };
  }, [E, C, r]), k(V(V({}, E.validateMessages), d)), R({
    onValuesChange: p,
    onFieldsChange: function(j) {
      if (E.triggerFormChange(r, j), h) {
        for (var H = arguments.length, z = new Array(H > 1 ? H - 1 : 0), G = 1; G < H; G++)
          z[G - 1] = arguments[G];
        h.apply(void 0, [j].concat(z));
      }
    },
    onFinish: function(j) {
      E.triggerFormFinish(r, j), m && m(j);
    },
    onFinishFailed: y
  }), x(s);
  var P = u.useRef(null);
  M(o, !P.current), P.current || (P.current = !0), u.useEffect(
    function() {
      return O;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  var I, $ = typeof c == "function";
  if ($) {
    var D = C.getFieldsValue(!0);
    I = c(D, C);
  } else
    I = c;
  N(!$);
  var B = u.useRef();
  u.useEffect(function() {
    Vb(B.current || [], i || []) || C.setFields(i || []), B.current = i;
  }, [i, C]);
  var K = u.useMemo(function() {
    return V(V({}, C), {}, {
      validateTrigger: g
    });
  }, [C, g]), ne = /* @__PURE__ */ u.createElement(yi.Provider, {
    value: null
  }, /* @__PURE__ */ u.createElement(Rr.Provider, {
    value: K
  }, I));
  return f === !1 ? ne : /* @__PURE__ */ u.createElement(f, Te({}, b, {
    onSubmit: function(j) {
      j.preventDefault(), j.stopPropagation(), C.submit();
    },
    onReset: function(j) {
      var H;
      j.preventDefault(), C.resetFields(), (H = b.onReset) === null || H === void 0 || H.call(b, j);
    }
  }), ne);
};
function ql(e) {
  try {
    return JSON.stringify(e);
  } catch {
    return Math.random();
  }
}
var Jb = process.env.NODE_ENV !== "production" ? function(e) {
  var t = e.join("__RC_FIELD_FORM_SPLIT__"), n = Ae(t);
  Fe(n.current === t, "`useWatch` is not support dynamic `namePath`. Please provide static instead.");
} : function() {
};
function Zb() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r = t[0], o = r === void 0 ? [] : r, i = t[1], a = i === void 0 ? {} : i, s = ab(a) ? {
    form: a
  } : a, c = s.form, l = Yt(), f = U(l, 2), d = f[0], v = f[1], g = wr(function() {
    return ql(d);
  }, [d]), p = Ae(g);
  p.current = g;
  var h = Ft(Rr), m = c || h, y = m && m._init;
  process.env.NODE_ENV !== "production" && Fe(t.length === 2 ? c ? y : !0 : y, "useWatch requires a form instance since it can not auto detect from context.");
  var b = dt(o), E = Ae(b);
  return E.current = b, Jb(b), jt(
    function() {
      if (y) {
        var w = m.getFieldsValue, S = m.getInternalHooks, C = S(Un), _ = C.registerWatch, N = _(function(R, k) {
          var x = dn(s.preserve ? k : R, E.current), O = ql(x);
          p.current !== O && (p.current = O, v(x));
        }), M = dn(s.preserve ? w(!0) : w(), E.current);
        return v(M), N;
      }
    },
    // We do not need re-register since namePath content is the same
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [y]
  ), d;
}
var eS = /* @__PURE__ */ u.forwardRef(Qb), wo = eS;
wo.FormProvider = Yb;
wo.Field = qd;
wo.List = Ub;
wo.useForm = Xd;
wo.useWatch = Zb;
const tS = /* @__PURE__ */ u.createContext({}), nS = (e) => ({
  animationDuration: e,
  animationFillMode: "both"
}), rS = (e) => ({
  animationDuration: e,
  animationFillMode: "both"
}), Qd = function(e, t, n, r) {
  const i = (arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1) ? "&" : "";
  return {
    [`
      ${i}${e}-enter,
      ${i}${e}-appear
    `]: Object.assign(Object.assign({}, nS(r)), {
      animationPlayState: "paused"
    }),
    [`${i}${e}-leave`]: Object.assign(Object.assign({}, rS(r)), {
      animationPlayState: "paused"
    }),
    [`
      ${i}${e}-enter${e}-enter-active,
      ${i}${e}-appear${e}-appear-active
    `]: {
      animationName: t,
      animationPlayState: "running"
    },
    [`${i}${e}-leave${e}-leave-active`]: {
      animationName: n,
      animationPlayState: "running",
      pointerEvents: "none"
    }
  };
}, oS = new _t("antMoveDownIn", {
  "0%": {
    transform: "translate3d(0, 100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
}), iS = new _t("antMoveDownOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(0, 100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
}), aS = new _t("antMoveLeftIn", {
  "0%": {
    transform: "translate3d(-100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
}), sS = new _t("antMoveLeftOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(-100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
}), cS = new _t("antMoveRightIn", {
  "0%": {
    transform: "translate3d(100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
}), lS = new _t("antMoveRightOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
}), uS = new _t("antMoveUpIn", {
  "0%": {
    transform: "translate3d(0, -100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
}), fS = new _t("antMoveUpOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(0, -100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
}), dS = {
  "move-up": {
    inKeyframes: uS,
    outKeyframes: fS
  },
  "move-down": {
    inKeyframes: oS,
    outKeyframes: iS
  },
  "move-left": {
    inKeyframes: aS,
    outKeyframes: sS
  },
  "move-right": {
    inKeyframes: cS,
    outKeyframes: lS
  }
}, Yl = (e, t) => {
  const {
    antCls: n
  } = e, r = `${n}-${t}`, {
    inKeyframes: o,
    outKeyframes: i
  } = dS[t];
  return [Qd(r, o, i, e.motionDurationMid), {
    [`
        ${r}-enter,
        ${r}-appear
      `]: {
      opacity: 0,
      animationTimingFunction: e.motionEaseOutCirc
    },
    [`${r}-leave`]: {
      animationTimingFunction: e.motionEaseInOutCirc
    }
  }];
}, Jd = new _t("antSlideUpIn", {
  "0%": {
    transform: "scaleY(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scaleY(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  }
}), Zd = new _t("antSlideUpOut", {
  "0%": {
    transform: "scaleY(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  },
  "100%": {
    transform: "scaleY(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  }
}), ev = new _t("antSlideDownIn", {
  "0%": {
    transform: "scaleY(0.8)",
    transformOrigin: "100% 100%",
    opacity: 0
  },
  "100%": {
    transform: "scaleY(1)",
    transformOrigin: "100% 100%",
    opacity: 1
  }
}), tv = new _t("antSlideDownOut", {
  "0%": {
    transform: "scaleY(1)",
    transformOrigin: "100% 100%",
    opacity: 1
  },
  "100%": {
    transform: "scaleY(0.8)",
    transformOrigin: "100% 100%",
    opacity: 0
  }
}), vS = new _t("antSlideLeftIn", {
  "0%": {
    transform: "scaleX(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scaleX(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  }
}), hS = new _t("antSlideLeftOut", {
  "0%": {
    transform: "scaleX(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  },
  "100%": {
    transform: "scaleX(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  }
}), mS = new _t("antSlideRightIn", {
  "0%": {
    transform: "scaleX(0.8)",
    transformOrigin: "100% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scaleX(1)",
    transformOrigin: "100% 0%",
    opacity: 1
  }
}), pS = new _t("antSlideRightOut", {
  "0%": {
    transform: "scaleX(1)",
    transformOrigin: "100% 0%",
    opacity: 1
  },
  "100%": {
    transform: "scaleX(0.8)",
    transformOrigin: "100% 0%",
    opacity: 0
  }
}), gS = {
  "slide-up": {
    inKeyframes: Jd,
    outKeyframes: Zd
  },
  "slide-down": {
    inKeyframes: ev,
    outKeyframes: tv
  },
  "slide-left": {
    inKeyframes: vS,
    outKeyframes: hS
  },
  "slide-right": {
    inKeyframes: mS,
    outKeyframes: pS
  }
}, Xl = (e, t) => {
  const {
    antCls: n
  } = e, r = `${n}-${t}`, {
    inKeyframes: o,
    outKeyframes: i
  } = gS[t];
  return [Qd(r, o, i, e.motionDurationMid), {
    [`
      ${r}-enter,
      ${r}-appear
    `]: {
      transform: "scale(0)",
      transformOrigin: "0% 0%",
      opacity: 0,
      animationTimingFunction: e.motionEaseOutQuint,
      "&-prepare": {
        transform: "scale(1)"
      }
    },
    [`${r}-leave`]: {
      animationTimingFunction: e.motionEaseInQuint
    }
  }];
};
function yS(e, t, n, r) {
  return function(i) {
    const {
      prefixCls: a,
      style: s
    } = i, c = u.useRef(null), [l, f] = u.useState(0), [d, v] = u.useState(0), [g, p] = di(!1, {
      value: i.open
    }), {
      getPrefixCls: h
    } = u.useContext(Qt), m = h(t || "select", a);
    u.useEffect(() => {
      if (p(!0), typeof ResizeObserver < "u") {
        const b = new ResizeObserver((w) => {
          const S = w[0].target;
          f(S.offsetHeight + 8), v(S.offsetWidth);
        }), E = setInterval(() => {
          var w;
          const S = n ? `.${n(m)}` : `.${m}-dropdown`, C = (w = c.current) === null || w === void 0 ? void 0 : w.querySelector(S);
          C && (clearInterval(E), b.observe(C));
        }, 10);
        return () => {
          clearInterval(E), b.disconnect();
        };
      }
    }, []);
    let y = Object.assign(Object.assign({}, i), {
      style: Object.assign(Object.assign({}, s), {
        margin: 0
      }),
      open: g,
      visible: g,
      getPopupContainer: () => c.current
    });
    return r && (y = r(y)), /* @__PURE__ */ u.createElement(rc, {
      theme: {
        token: {
          motion: !1
        }
      }
    }, /* @__PURE__ */ u.createElement("div", {
      ref: c,
      style: {
        paddingBottom: l,
        position: "relative",
        minWidth: d
      }
    }, /* @__PURE__ */ u.createElement(e, Object.assign({}, y))));
  };
}
const nv = function() {
  if (typeof navigator > "u" || typeof window > "u")
    return !1;
  var e = navigator.userAgent || navigator.vendor || window.opera;
  return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(e?.substr(0, 4));
};
var rv = /* @__PURE__ */ u.createContext(null);
function bS() {
  return u.useContext(rv);
}
function SS() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 10, t = u.useState(!1), n = U(t, 2), r = n[0], o = n[1], i = u.useRef(null), a = function() {
    window.clearTimeout(i.current);
  };
  u.useEffect(function() {
    return a;
  }, []);
  var s = function(l, f) {
    a(), i.current = window.setTimeout(function() {
      o(l), f && f();
    }, e);
  };
  return [r, s, a];
}
function ov() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 250, t = u.useRef(null), n = u.useRef(null);
  u.useEffect(function() {
    return function() {
      window.clearTimeout(n.current);
    };
  }, []);
  function r(o) {
    (o || t.current === null) && (t.current = o), window.clearTimeout(n.current), n.current = window.setTimeout(function() {
      t.current = null;
    }, e);
  }
  return [function() {
    return t.current;
  }, r];
}
function ES(e, t, n, r) {
  var o = u.useRef(null);
  o.current = {
    open: t,
    triggerOpen: n,
    customizedTrigger: r
  }, u.useEffect(function() {
    function i(a) {
      var s;
      if (!((s = o.current) !== null && s !== void 0 && s.customizedTrigger)) {
        var c = a.target;
        c.shadowRoot && a.composed && (c = a.composedPath()[0] || c), o.current.open && e().filter(function(l) {
          return l;
        }).every(function(l) {
          return !l.contains(c) && l !== c;
        }) && o.current.triggerOpen(!1);
      }
    }
    return window.addEventListener("mousedown", i), function() {
      return window.removeEventListener("mousedown", i);
    };
  }, []);
}
var wS = ["prefixCls", "invalidate", "item", "renderItem", "responsive", "responsiveDisabled", "registerSize", "itemKey", "className", "style", "children", "display", "order", "component"], vr = void 0;
function CS(e, t) {
  var n = e.prefixCls, r = e.invalidate, o = e.item, i = e.renderItem, a = e.responsive, s = e.responsiveDisabled, c = e.registerSize, l = e.itemKey, f = e.className, d = e.style, v = e.children, g = e.display, p = e.order, h = e.component, m = h === void 0 ? "div" : h, y = ut(e, wS), b = a && !g;
  function E(N) {
    c(l, N);
  }
  u.useEffect(function() {
    return function() {
      E(null);
    };
  }, []);
  var w = i && o !== vr ? i(o) : v, S;
  r || (S = {
    opacity: b ? 0 : 1,
    height: b ? 0 : vr,
    overflowY: b ? "hidden" : vr,
    order: a ? p : vr,
    pointerEvents: b ? "none" : vr,
    position: b ? "absolute" : vr
  });
  var C = {};
  b && (C["aria-hidden"] = !0);
  var _ = /* @__PURE__ */ u.createElement(m, Te({
    className: Re(!r && n, f),
    style: V(V({}, S), d)
  }, C, y, {
    ref: t
  }), w);
  return a && (_ = /* @__PURE__ */ u.createElement(Zn, {
    onResize: function(M) {
      var R = M.offsetWidth;
      E(R);
    },
    disabled: s
  }, _)), _;
}
var Jr = /* @__PURE__ */ u.forwardRef(CS);
Jr.displayName = "Item";
function xS(e) {
  if (typeof MessageChannel > "u")
    Tt(e);
  else {
    var t = new MessageChannel();
    t.port1.onmessage = function() {
      return e();
    }, t.port2.postMessage(void 0);
  }
}
function OS() {
  var e = u.useRef(null), t = function(r) {
    e.current || (e.current = [], xS(function() {
      Xv(function() {
        e.current.forEach(function(o) {
          o();
        }), e.current = null;
      });
    })), e.current.push(r);
  };
  return t;
}
function Wr(e, t) {
  var n = u.useState(t), r = U(n, 2), o = r[0], i = r[1], a = mn(function(s) {
    e(function() {
      i(s);
    });
  });
  return [o, a];
}
var bi = /* @__PURE__ */ Pe.createContext(null), _S = ["component"], RS = ["className"], PS = ["className"], TS = function(t, n) {
  var r = u.useContext(bi);
  if (!r) {
    var o = t.component, i = o === void 0 ? "div" : o, a = ut(t, _S);
    return /* @__PURE__ */ u.createElement(i, Te({}, a, {
      ref: n
    }));
  }
  var s = r.className, c = ut(r, RS), l = t.className, f = ut(t, PS);
  return /* @__PURE__ */ u.createElement(bi.Provider, {
    value: null
  }, /* @__PURE__ */ u.createElement(Jr, Te({
    ref: n,
    className: Re(s, l)
  }, c, f)));
}, iv = /* @__PURE__ */ u.forwardRef(TS);
iv.displayName = "RawItem";
var NS = ["prefixCls", "data", "renderItem", "renderRawItem", "itemKey", "itemWidth", "ssr", "style", "className", "maxCount", "renderRest", "renderRawRest", "suffix", "component", "itemComponent", "onVisibleChange"], av = "responsive", sv = "invalidate";
function MS(e) {
  return "+ ".concat(e.length, " ...");
}
function IS(e, t) {
  var n = e.prefixCls, r = n === void 0 ? "rc-overflow" : n, o = e.data, i = o === void 0 ? [] : o, a = e.renderItem, s = e.renderRawItem, c = e.itemKey, l = e.itemWidth, f = l === void 0 ? 10 : l, d = e.ssr, v = e.style, g = e.className, p = e.maxCount, h = e.renderRest, m = e.renderRawRest, y = e.suffix, b = e.component, E = b === void 0 ? "div" : b, w = e.itemComponent, S = e.onVisibleChange, C = ut(e, NS), _ = d === "full", N = OS(), M = Wr(N, null), R = U(M, 2), k = R[0], x = R[1], O = k || 0, P = Wr(N, /* @__PURE__ */ new Map()), I = U(P, 2), $ = I[0], D = I[1], B = Wr(N, 0), K = U(B, 2), ne = K[0], ce = K[1], j = Wr(N, 0), H = U(j, 2), z = H[0], G = H[1], T = Wr(N, 0), q = U(T, 2), F = q[0], Y = q[1], te = Yt(null), Q = U(te, 2), A = Q[0], re = Q[1], L = Yt(null), Z = U(L, 2), se = Z[0], ae = Z[1], fe = u.useMemo(function() {
    return se === null && _ ? Number.MAX_SAFE_INTEGER : se || 0;
  }, [se, k]), ge = Yt(!1), ee = U(ge, 2), le = ee[0], Ce = ee[1], Ne = "".concat(r, "-item"), ie = Math.max(ne, z), de = p === av, ze = i.length && de, Ye = p === sv, Ge = ze || typeof p == "number" && i.length > p, qe = wr(function() {
    var Ee = i;
    return ze ? k === null && _ ? Ee = i : Ee = i.slice(0, Math.min(i.length, O / f)) : typeof p == "number" && (Ee = i.slice(0, p)), Ee;
  }, [i, f, k, p, ze]), Le = wr(function() {
    return ze ? i.slice(fe + 1) : i.slice(qe.length);
  }, [i, qe, ze, fe]), Xe = Pa(function(Ee, oe) {
    var X;
    return typeof c == "function" ? c(Ee) : (X = c && Ee?.[c]) !== null && X !== void 0 ? X : oe;
  }, [c]), Rt = Pa(a || function(Ee) {
    return Ee;
  }, [a]);
  function rt(Ee, oe, X) {
    se === Ee && (oe === void 0 || oe === A) || (ae(Ee), X || (Ce(Ee < i.length - 1), S?.(Ee)), oe !== void 0 && re(oe));
  }
  function ue(Ee, oe) {
    x(oe.clientWidth);
  }
  function pe(Ee, oe) {
    D(function(X) {
      var ve = new Map(X);
      return oe === null ? ve.delete(Ee) : ve.set(Ee, oe), ve;
    });
  }
  function Qe(Ee, oe) {
    G(oe), ce(z);
  }
  function Ve(Ee, oe) {
    Y(oe);
  }
  function Je(Ee) {
    return $.get(Xe(qe[Ee], Ee));
  }
  vt(function() {
    if (O && typeof ie == "number" && qe) {
      var Ee = F, oe = qe.length, X = oe - 1;
      if (!oe) {
        rt(0, null);
        return;
      }
      for (var ve = 0; ve < oe; ve += 1) {
        var ye = Je(ve);
        if (_ && (ye = ye || 0), ye === void 0) {
          rt(ve - 1, void 0, !0);
          break;
        }
        if (Ee += ye, // Only one means `totalWidth` is the final width
        X === 0 && Ee <= O || // Last two width will be the final width
        ve === X - 1 && Ee + Je(X) <= O) {
          rt(X, null);
          break;
        } else if (Ee + ie > O) {
          rt(ve - 1, Ee - ye - F + z);
          break;
        }
      }
      y && Je(0) + F > O && re(null);
    }
  }, [O, $, z, F, Xe, qe]);
  var Se = le && !!Le.length, $e = {};
  A !== null && ze && ($e = {
    position: "absolute",
    left: A,
    top: 0
  });
  var ot = {
    prefixCls: Ne,
    responsive: ze,
    component: w,
    invalidate: Ye
  }, Me = s ? function(Ee, oe) {
    var X = Xe(Ee, oe);
    return /* @__PURE__ */ u.createElement(bi.Provider, {
      key: X,
      value: V(V({}, ot), {}, {
        order: oe,
        item: Ee,
        itemKey: X,
        registerSize: pe,
        display: oe <= fe
      })
    }, s(Ee, oe));
  } : function(Ee, oe) {
    var X = Xe(Ee, oe);
    return /* @__PURE__ */ u.createElement(Jr, Te({}, ot, {
      order: oe,
      key: X,
      item: Ee,
      renderItem: Rt,
      itemKey: X,
      registerSize: pe,
      display: oe <= fe
    }));
  }, xe, tt = {
    order: Se ? fe : Number.MAX_SAFE_INTEGER,
    className: "".concat(Ne, "-rest"),
    registerSize: Qe,
    display: Se
  };
  if (m)
    m && (xe = /* @__PURE__ */ u.createElement(bi.Provider, {
      value: V(V({}, ot), tt)
    }, m(Le)));
  else {
    var nt = h || MS;
    xe = /* @__PURE__ */ u.createElement(Jr, Te({}, ot, tt), typeof nt == "function" ? nt(Le) : nt);
  }
  var yt = /* @__PURE__ */ u.createElement(E, Te({
    className: Re(!Ye && r, g),
    style: v,
    ref: t
  }, C), qe.map(Me), Ge ? xe : null, y && /* @__PURE__ */ u.createElement(Jr, Te({}, ot, {
    responsive: de,
    responsiveDisabled: !ze,
    order: fe,
    className: "".concat(Ne, "-suffix"),
    registerSize: Ve,
    display: !0,
    style: $e
  }), y));
  return de && (yt = /* @__PURE__ */ u.createElement(Zn, {
    onResize: ue,
    disabled: !ze
  }, yt)), yt;
}
var Co = /* @__PURE__ */ u.forwardRef(IS);
Co.displayName = "Overflow";
Co.Item = iv;
Co.RESPONSIVE = av;
Co.INVALIDATE = sv;
var Si = function(t) {
  var n = t.className, r = t.customizeIcon, o = t.customizeIconProps, i = t.onMouseDown, a = t.onClick, s = t.children, c;
  return typeof r == "function" ? c = r(o) : c = r, /* @__PURE__ */ u.createElement("span", {
    className: n,
    onMouseDown: function(f) {
      f.preventDefault(), i && i(f);
    },
    style: {
      userSelect: "none",
      WebkitUserSelect: "none"
    },
    unselectable: "on",
    onClick: a,
    "aria-hidden": !0
  }, c !== void 0 ? c : /* @__PURE__ */ u.createElement("span", {
    className: Re(n.split(/\s+/).map(function(l) {
      return "".concat(l, "-icon");
    }))
  }, s));
}, $S = function(t, n) {
  var r, o, i = t.prefixCls, a = t.id, s = t.inputElement, c = t.disabled, l = t.tabIndex, f = t.autoFocus, d = t.autoComplete, v = t.editable, g = t.activeDescendantId, p = t.value, h = t.maxLength, m = t.onKeyDown, y = t.onMouseDown, b = t.onChange, E = t.onPaste, w = t.onCompositionStart, S = t.onCompositionEnd, C = t.open, _ = t.attrs, N = s || /* @__PURE__ */ u.createElement("input", null), M = N, R = M.ref, k = M.props, x = k.onKeyDown, O = k.onChange, P = k.onMouseDown, I = k.onCompositionStart, $ = k.onCompositionEnd, D = k.style;
  return to(!("maxLength" in N.props), "Passing 'maxLength' to input element directly may not work because input in BaseSelect is controlled."), N = /* @__PURE__ */ u.cloneElement(N, V(V(V({
    type: "search"
  }, k), {}, {
    // Override over origin props
    id: a,
    ref: Mr(n, R),
    disabled: c,
    tabIndex: l,
    autoComplete: d || "off",
    autoFocus: f,
    className: Re("".concat(i, "-selection-search-input"), (r = N) === null || r === void 0 || (o = r.props) === null || o === void 0 ? void 0 : o.className),
    role: "combobox",
    "aria-expanded": C,
    "aria-haspopup": "listbox",
    "aria-owns": "".concat(a, "_list"),
    "aria-autocomplete": "list",
    "aria-controls": "".concat(a, "_list"),
    "aria-activedescendant": g
  }, _), {}, {
    value: v ? p : "",
    maxLength: h,
    readOnly: !v,
    unselectable: v ? null : "on",
    style: V(V({}, D), {}, {
      opacity: v ? null : 0
    }),
    onKeyDown: function(K) {
      m(K), x && x(K);
    },
    onMouseDown: function(K) {
      y(K), P && P(K);
    },
    onChange: function(K) {
      b(K), O && O(K);
    },
    onCompositionStart: function(K) {
      w(K), I && I(K);
    },
    onCompositionEnd: function(K) {
      S(K), $ && $(K);
    },
    onPaste: E
  })), N;
}, fc = /* @__PURE__ */ u.forwardRef($S);
fc.displayName = "Input";
function dc(e) {
  return Array.isArray(e) ? e : e !== void 0 ? [e] : [];
}
var AS = typeof window < "u" && window.document && window.document.documentElement, FS = process.env.NODE_ENV !== "test" && AS;
function DS(e) {
  return e != null;
}
function Ql(e) {
  return ["string", "number"].includes(je(e));
}
function cv(e) {
  var t = void 0;
  return e && (Ql(e.title) ? t = e.title.toString() : Ql(e.label) && (t = e.label.toString())), t;
}
function LS(e, t) {
  FS ? u.useLayoutEffect(e, t) : u.useEffect(e, t);
}
function kS(e) {
  var t;
  return (t = e.key) !== null && t !== void 0 ? t : e.value;
}
var Jl = function(t) {
  t.preventDefault(), t.stopPropagation();
}, jS = function(t) {
  var n = t.id, r = t.prefixCls, o = t.values, i = t.open, a = t.searchValue, s = t.autoClearSearchValue, c = t.inputRef, l = t.placeholder, f = t.disabled, d = t.mode, v = t.showSearch, g = t.autoFocus, p = t.autoComplete, h = t.activeDescendantId, m = t.tabIndex, y = t.removeIcon, b = t.maxTagCount, E = t.maxTagTextLength, w = t.maxTagPlaceholder, S = w === void 0 ? function(re) {
    return "+ ".concat(re.length, " ...");
  } : w, C = t.tagRender, _ = t.onToggleOpen, N = t.onRemove, M = t.onInputChange, R = t.onInputPaste, k = t.onInputKeyDown, x = t.onInputMouseDown, O = t.onInputCompositionStart, P = t.onInputCompositionEnd, I = u.useRef(null), $ = Yt(0), D = U($, 2), B = D[0], K = D[1], ne = Yt(!1), ce = U(ne, 2), j = ce[0], H = ce[1], z = "".concat(r, "-selection"), G = i || d === "multiple" && s === !1 || d === "tags" ? a : "", T = d === "tags" || d === "multiple" && s === !1 || v && (i || j);
  LS(function() {
    K(I.current.scrollWidth);
  }, [G]);
  function q(re, L, Z, se, ae) {
    return /* @__PURE__ */ u.createElement("span", {
      className: Re("".concat(z, "-item"), he({}, "".concat(z, "-item-disabled"), Z)),
      title: cv(re)
    }, /* @__PURE__ */ u.createElement("span", {
      className: "".concat(z, "-item-content")
    }, L), se && /* @__PURE__ */ u.createElement(Si, {
      className: "".concat(z, "-item-remove"),
      onMouseDown: Jl,
      onClick: ae,
      customizeIcon: y
    }, "×"));
  }
  function F(re, L, Z, se, ae) {
    var fe = function(ee) {
      Jl(ee), _(!i);
    };
    return /* @__PURE__ */ u.createElement("span", {
      onMouseDown: fe
    }, C({
      label: L,
      value: re,
      disabled: Z,
      closable: se,
      onClose: ae
    }));
  }
  function Y(re) {
    var L = re.disabled, Z = re.label, se = re.value, ae = !f && !L, fe = Z;
    if (typeof E == "number" && (typeof Z == "string" || typeof Z == "number")) {
      var ge = String(fe);
      ge.length > E && (fe = "".concat(ge.slice(0, E), "..."));
    }
    var ee = function(Ce) {
      Ce && Ce.stopPropagation(), N(re);
    };
    return typeof C == "function" ? F(se, fe, L, ae, ee) : q(re, fe, L, ae, ee);
  }
  function te(re) {
    var L = typeof S == "function" ? S(re) : S;
    return q({
      title: L
    }, L, !1);
  }
  var Q = /* @__PURE__ */ u.createElement("div", {
    className: "".concat(z, "-search"),
    style: {
      width: B
    },
    onFocus: function() {
      H(!0);
    },
    onBlur: function() {
      H(!1);
    }
  }, /* @__PURE__ */ u.createElement(fc, {
    ref: c,
    open: i,
    prefixCls: r,
    id: n,
    inputElement: null,
    disabled: f,
    autoFocus: g,
    autoComplete: p,
    editable: T,
    activeDescendantId: h,
    value: G,
    onKeyDown: k,
    onMouseDown: x,
    onChange: M,
    onPaste: R,
    onCompositionStart: O,
    onCompositionEnd: P,
    tabIndex: m,
    attrs: mi(t, !0)
  }), /* @__PURE__ */ u.createElement("span", {
    ref: I,
    className: "".concat(z, "-search-mirror"),
    "aria-hidden": !0
  }, G, " ")), A = /* @__PURE__ */ u.createElement(Co, {
    prefixCls: "".concat(z, "-overflow"),
    data: o,
    renderItem: Y,
    renderRest: te,
    suffix: Q,
    itemKey: kS,
    maxCount: b
  });
  return /* @__PURE__ */ u.createElement(u.Fragment, null, A, !o.length && !G && /* @__PURE__ */ u.createElement("span", {
    className: "".concat(z, "-placeholder")
  }, l));
}, HS = function(t) {
  var n = t.inputElement, r = t.prefixCls, o = t.id, i = t.inputRef, a = t.disabled, s = t.autoFocus, c = t.autoComplete, l = t.activeDescendantId, f = t.mode, d = t.open, v = t.values, g = t.placeholder, p = t.tabIndex, h = t.showSearch, m = t.searchValue, y = t.activeValue, b = t.maxLength, E = t.onInputKeyDown, w = t.onInputMouseDown, S = t.onInputChange, C = t.onInputPaste, _ = t.onInputCompositionStart, N = t.onInputCompositionEnd, M = t.title, R = u.useState(!1), k = U(R, 2), x = k[0], O = k[1], P = f === "combobox", I = P || h, $ = v[0], D = m || "";
  P && y && !x && (D = y), u.useEffect(function() {
    P && O(!1);
  }, [P, y]);
  var B = f !== "combobox" && !d && !h ? !1 : !!D, K = M === void 0 ? cv($) : M, ne = function() {
    if ($)
      return null;
    var j = B ? {
      visibility: "hidden"
    } : void 0;
    return /* @__PURE__ */ u.createElement("span", {
      className: "".concat(r, "-selection-placeholder"),
      style: j
    }, g);
  };
  return /* @__PURE__ */ u.createElement(u.Fragment, null, /* @__PURE__ */ u.createElement("span", {
    className: "".concat(r, "-selection-search")
  }, /* @__PURE__ */ u.createElement(fc, {
    ref: i,
    prefixCls: r,
    id: o,
    open: d,
    inputElement: n,
    disabled: a,
    autoFocus: s,
    autoComplete: c,
    editable: I,
    activeDescendantId: l,
    value: D,
    onKeyDown: E,
    onMouseDown: w,
    onChange: function(j) {
      O(!0), S(j);
    },
    onPaste: C,
    onCompositionStart: _,
    onCompositionEnd: N,
    tabIndex: p,
    attrs: mi(t, !0),
    maxLength: P ? b : void 0
  })), !P && $ ? /* @__PURE__ */ u.createElement("span", {
    className: "".concat(r, "-selection-item"),
    title: K,
    style: B ? {
      visibility: "hidden"
    } : void 0
  }, $.label) : null, ne());
};
function zS(e) {
  return ![
    // System function button
    J.ESC,
    J.SHIFT,
    J.BACKSPACE,
    J.TAB,
    J.WIN_KEY,
    J.ALT,
    J.META,
    J.WIN_KEY_RIGHT,
    J.CTRL,
    J.SEMICOLON,
    J.EQUALS,
    J.CAPS_LOCK,
    J.CONTEXT_MENU,
    // F1-F12
    J.F1,
    J.F2,
    J.F3,
    J.F4,
    J.F5,
    J.F6,
    J.F7,
    J.F8,
    J.F9,
    J.F10,
    J.F11,
    J.F12
  ].includes(e);
}
var VS = function(t, n) {
  var r = Ae(null), o = Ae(!1), i = t.prefixCls, a = t.open, s = t.mode, c = t.showSearch, l = t.tokenWithEnter, f = t.autoClearSearchValue, d = t.onSearch, v = t.onSearchSubmit, g = t.onToggleOpen, p = t.onInputKeyDown, h = t.domRef;
  u.useImperativeHandle(n, function() {
    return {
      focus: function() {
        r.current.focus();
      },
      blur: function() {
        r.current.blur();
      }
    };
  });
  var m = ov(0), y = U(m, 2), b = y[0], E = y[1], w = function(D) {
    var B = D.which;
    (B === J.UP || B === J.DOWN) && D.preventDefault(), p && p(D), B === J.ENTER && s === "tags" && !o.current && !a && v?.(D.target.value), zS(B) && g(!0);
  }, S = function() {
    E(!0);
  }, C = Ae(null), _ = function(D) {
    d(D, !0, o.current) !== !1 && g(!0);
  }, N = function() {
    o.current = !0;
  }, M = function(D) {
    o.current = !1, s !== "combobox" && _(D.target.value);
  }, R = function(D) {
    var B = D.target.value;
    if (l && C.current && /[\r\n]/.test(C.current)) {
      var K = C.current.replace(/[\r\n]+$/, "").replace(/\r\n/g, " ").replace(/[\r\n]/g, " ");
      B = B.replace(K, C.current);
    }
    C.current = null, _(B);
  }, k = function(D) {
    var B = D.clipboardData, K = B.getData("text");
    C.current = K;
  }, x = function(D) {
    var B = D.target;
    if (B !== r.current) {
      var K = document.body.style.msTouchAction !== void 0;
      K ? setTimeout(function() {
        r.current.focus();
      }) : r.current.focus();
    }
  }, O = function(D) {
    var B = b();
    D.target !== r.current && !B && s !== "combobox" && D.preventDefault(), (s !== "combobox" && (!c || !B) || !a) && (a && f !== !1 && d("", !0, !1), g());
  }, P = {
    inputRef: r,
    onInputKeyDown: w,
    onInputMouseDown: S,
    onInputChange: R,
    onInputPaste: k,
    onInputCompositionStart: N,
    onInputCompositionEnd: M
  }, I = s === "multiple" || s === "tags" ? /* @__PURE__ */ u.createElement(jS, Te({}, t, P)) : /* @__PURE__ */ u.createElement(HS, Te({}, t, P));
  return /* @__PURE__ */ u.createElement("div", {
    ref: h,
    className: "".concat(i, "-selector"),
    onClick: x,
    onMouseDown: O
  }, I);
}, lv = /* @__PURE__ */ u.forwardRef(VS);
lv.displayName = "Selector";
var Zl = /* @__PURE__ */ u.createContext(null);
function eu(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
function BS(e, t, n, r) {
  return u.useMemo(function() {
    var o = eu(n ?? t), i = eu(r ?? t), a = new Set(o), s = new Set(i);
    return e && (a.has("hover") && (a.delete("hover"), a.add("click")), s.has("hover") && (s.delete("hover"), s.add("click"))), [a, s];
  }, [e, t, n, r]);
}
function WS() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], n = arguments.length > 2 ? arguments[2] : void 0;
  return n ? e[0] === t[0] : e[0] === t[0] && e[1] === t[1];
}
function US(e, t, n, r) {
  for (var o = n.points, i = Object.keys(e), a = 0; a < i.length; a += 1) {
    var s, c = i[a];
    if (WS((s = e[c]) === null || s === void 0 ? void 0 : s.points, o, r))
      return "".concat(t, "-placement-").concat(c);
  }
  return "";
}
function tu(e, t, n, r) {
  return t || (n ? {
    motionName: "".concat(e, "-").concat(n)
  } : r ? {
    motionName: r
  } : null);
}
function xo(e) {
  return e.ownerDocument.defaultView;
}
function ws(e) {
  for (var t = [], n = e?.parentElement, r = ["hidden", "scroll", "clip", "auto"]; n; ) {
    var o = xo(n).getComputedStyle(n), i = o.overflowX, a = o.overflowY, s = o.overflow;
    [i, a, s].some(function(c) {
      return r.includes(c);
    }) && t.push(n), n = n.parentElement;
  }
  return t;
}
function so(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  return Number.isNaN(e) ? t : e;
}
function Ur(e) {
  return so(parseFloat(e), 0);
}
function nu(e, t) {
  var n = V({}, e);
  return (t || []).forEach(function(r) {
    if (!(r instanceof HTMLBodyElement)) {
      var o = xo(r).getComputedStyle(r), i = o.overflow, a = o.overflowClipMargin, s = o.borderTopWidth, c = o.borderBottomWidth, l = o.borderLeftWidth, f = o.borderRightWidth, d = r.getBoundingClientRect(), v = r.offsetHeight, g = r.clientHeight, p = r.offsetWidth, h = r.clientWidth, m = Ur(s), y = Ur(c), b = Ur(l), E = Ur(f), w = so(Math.round(d.width / p * 1e3) / 1e3), S = so(Math.round(d.height / v * 1e3) / 1e3), C = (p - h - b - E) * w, _ = (v - g - m - y) * S, N = m * S, M = y * S, R = b * w, k = E * w, x = 0, O = 0;
      if (i === "clip") {
        var P = Ur(a);
        x = P * w, O = P * S;
      }
      var I = d.x + R - x, $ = d.y + N - O, D = I + d.width + 2 * x - R - k - C, B = $ + d.height + 2 * O - N - M - _;
      n.left = Math.max(n.left, I), n.top = Math.max(n.top, $), n.right = Math.min(n.right, D), n.bottom = Math.min(n.bottom, B);
    }
  }), n;
}
function ru(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = "".concat(t), r = n.match(/^(.*)\%$/);
  return r ? e * (parseFloat(r[1]) / 100) : parseFloat(n);
}
function ou(e, t) {
  var n = t || [], r = U(n, 2), o = r[0], i = r[1];
  return [ru(e.width, o), ru(e.height, i)];
}
function iu() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  return [e[0], e[1]];
}
function hr(e, t) {
  var n = t[0], r = t[1], o, i;
  return n === "t" ? i = e.y : n === "b" ? i = e.y + e.height : i = e.y + e.height / 2, r === "l" ? o = e.x : r === "r" ? o = e.x + e.width : o = e.x + e.width / 2, {
    x: o,
    y: i
  };
}
function $n(e, t) {
  var n = {
    t: "b",
    b: "t",
    l: "r",
    r: "l"
  };
  return e.map(function(r, o) {
    return o === t ? n[r] || "c" : r;
  }).join("");
}
function KS(e, t, n, r, o, i, a) {
  var s = u.useState({
    ready: !1,
    offsetX: 0,
    offsetY: 0,
    offsetR: 0,
    offsetB: 0,
    arrowX: 0,
    arrowY: 0,
    scaleX: 1,
    scaleY: 1,
    align: o[r] || {}
  }), c = U(s, 2), l = c[0], f = c[1], d = u.useRef(0), v = u.useMemo(function() {
    return t ? ws(t) : [];
  }, [t]), g = u.useRef({}), p = function() {
    g.current = {};
  };
  e || p();
  var h = mn(function() {
    if (t && n && e) {
      let ft = function(Wt, At) {
        var wn = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Z, jr = x.x + Wt, Hr = x.y + At, zr = jr + z, Oo = Hr + H, Ki = Math.max(jr, wn.left), Gi = Math.max(Hr, wn.top), qi = Math.min(zr, wn.right), Yi = Math.min(Oo, wn.bottom);
        return Math.max(0, (qi - Ki) * (Yi - Gi));
      }, zt = function() {
        He = x.y + $e, Ct = He + H, bt = x.x + Se, Mt = bt + z;
      };
      var b = t, E = b.style.left, w = b.style.top, S = b.style.right, C = b.style.bottom, _ = b.ownerDocument, N = xo(b), M = V(V({}, o[r]), i);
      b.style.left = "0", b.style.top = "0", b.style.right = "auto", b.style.bottom = "auto";
      var R;
      if (Array.isArray(n))
        R = {
          x: n[0],
          y: n[1],
          width: 0,
          height: 0
        };
      else {
        var k = n.getBoundingClientRect();
        R = {
          x: k.x,
          y: k.y,
          width: k.width,
          height: k.height
        };
      }
      var x = b.getBoundingClientRect(), O = N.getComputedStyle(b), P = O.width, I = O.height, $ = _.documentElement, D = $.clientWidth, B = $.clientHeight, K = $.scrollWidth, ne = $.scrollHeight, ce = $.scrollTop, j = $.scrollLeft, H = x.height, z = x.width, G = R.height, T = R.width, q = {
        left: 0,
        top: 0,
        right: D,
        bottom: B
      }, F = {
        left: -j,
        top: -ce,
        right: K - j,
        bottom: ne - ce
      }, Y = M.htmlRegion, te = "visible", Q = "visibleFirst";
      Y !== "scroll" && Y !== Q && (Y = te);
      var A = Y === Q, re = nu(F, v), L = nu(q, v), Z = Y === te ? L : re, se = A ? L : Z;
      b.style.left = "auto", b.style.top = "auto", b.style.right = "0", b.style.bottom = "0";
      var ae = b.getBoundingClientRect();
      b.style.left = E, b.style.top = w, b.style.right = S, b.style.bottom = C;
      var fe = so(Math.round(z / parseFloat(P) * 1e3) / 1e3), ge = so(Math.round(H / parseFloat(I) * 1e3) / 1e3);
      if (fe === 0 || ge === 0 || ai(n) && !Md(n))
        return;
      var ee = M.offset, le = M.targetOffset, Ce = ou(x, ee), Ne = U(Ce, 2), ie = Ne[0], de = Ne[1], ze = ou(R, le), Ye = U(ze, 2), Ge = Ye[0], qe = Ye[1];
      R.x -= Ge, R.y -= qe;
      var Le = M.points || [], Xe = U(Le, 2), Rt = Xe[0], rt = Xe[1], ue = iu(rt), pe = iu(Rt), Qe = hr(R, ue), Ve = hr(x, pe), Je = V({}, M), Se = Qe.x - Ve.x + ie, $e = Qe.y - Ve.y + de, ot = ft(Se, $e), Me = ft(Se, $e, L), xe = hr(R, ["t", "l"]), tt = hr(x, ["t", "l"]), nt = hr(R, ["b", "r"]), yt = hr(x, ["b", "r"]), Ee = M.overflow || {}, oe = Ee.adjustX, X = Ee.adjustY, ve = Ee.shiftX, ye = Ee.shiftY, _e = function(At) {
        return typeof At == "boolean" ? At : At >= 0;
      }, He, Ct, bt, Mt;
      zt();
      var et = _e(X), Bt = pe[0] === ue[0];
      if (et && pe[0] === "t" && (Ct > se.bottom || g.current.bt)) {
        var It = $e;
        Bt ? It -= H - G : It = xe.y - yt.y - de;
        var yn = ft(Se, It), nr = ft(Se, It, L);
        // Of course use larger one
        yn > ot || yn === ot && (!A || // Choose recommend one
        nr >= Me) ? (g.current.bt = !0, $e = It, Je.points = [$n(pe, 0), $n(ue, 0)]) : g.current.bt = !1;
      }
      if (et && pe[0] === "b" && (He < se.top || g.current.tb)) {
        var Lt = $e;
        Bt ? Lt += H - G : Lt = nt.y - tt.y - de;
        var $t = ft(Se, Lt), kt = ft(Se, Lt, L);
        // Of course use larger one
        $t > ot || $t === ot && (!A || // Choose recommend one
        kt >= Me) ? (g.current.tb = !0, $e = Lt, Je.points = [$n(pe, 0), $n(ue, 0)]) : g.current.tb = !1;
      }
      var rr = _e(oe), sn = pe[1] === ue[1];
      if (rr && pe[1] === "l" && (Mt > se.right || g.current.rl)) {
        var bn = Se;
        sn ? bn -= z - T : bn = xe.x - yt.x - ie;
        var or = ft(bn, $e), ir = ft(bn, $e, L);
        // Of course use larger one
        or > ot || or === ot && (!A || // Choose recommend one
        ir >= Me) ? (g.current.rl = !0, Se = bn, Je.points = [$n(pe, 1), $n(ue, 1)]) : g.current.rl = !1;
      }
      if (rr && pe[1] === "r" && (bt < se.left || g.current.lr)) {
        var hn = Se;
        sn ? hn += z - T : hn = nt.x - tt.x - ie;
        var ar = ft(hn, $e), Dr = ft(hn, $e, L);
        // Of course use larger one
        ar > ot || ar === ot && (!A || // Choose recommend one
        Dr >= Me) ? (g.current.lr = !0, Se = hn, Je.points = [$n(pe, 1), $n(ue, 1)]) : g.current.lr = !1;
      }
      zt();
      var Sn = ve === !0 ? 0 : ve;
      typeof Sn == "number" && (bt < L.left && (Se -= bt - L.left, R.x + T < L.left + Sn && (Se += R.x - L.left + T - Sn)), Mt > L.right && (Se -= Mt - L.right, R.x > L.right - Sn && (Se += R.x - L.right + Sn)));
      var Jt = ye === !0 ? 0 : ye;
      typeof Jt == "number" && (He < L.top && ($e -= He - L.top + de, R.y + G < L.top + Jt && ($e += R.y - L.top + G - Jt)), Ct > L.bottom && ($e -= Ct - L.bottom - de, R.y > L.bottom - Jt && ($e += R.y - L.bottom + Jt)));
      var En = x.x + Se, cn = En + z, kn = x.y + $e, sr = kn + H, jn = R.x, cr = jn + T, Hn = R.y, Lr = Hn + G, kr = Math.max(En, jn), lr = Math.min(cn, cr), Mn = (kr + lr) / 2, Oe = Mn - En, we = Math.max(kn, Hn), ht = Math.min(sr, Lr), xt = (we + ht) / 2, it = xt - kn;
      a?.(t, Je);
      var mt = ae.right - x.x - (Se + x.width), St = ae.bottom - x.y - ($e + x.height);
      f({
        ready: !0,
        offsetX: Se / fe,
        offsetY: $e / ge,
        offsetR: mt / fe,
        offsetB: St / ge,
        arrowX: Oe / fe,
        arrowY: it / ge,
        scaleX: fe,
        scaleY: ge,
        align: Je
      });
    }
  }), m = function() {
    d.current += 1;
    var E = d.current;
    Promise.resolve().then(function() {
      d.current === E && h();
    });
  }, y = function() {
    f(function(E) {
      return V(V({}, E), {}, {
        ready: !1
      });
    });
  };
  return vt(y, [r]), vt(function() {
    e || y();
  }, [e]), [l.ready, l.offsetX, l.offsetY, l.offsetR, l.offsetB, l.arrowX, l.arrowY, l.scaleX, l.scaleY, l.align, m];
}
function GS(e, t, n, r) {
  vt(function() {
    if (e && t && n) {
      let f = function() {
        r();
      };
      var o = t, i = n, a = ws(o), s = ws(i), c = xo(i), l = new Set([c].concat(me(a), me(s)));
      return l.forEach(function(d) {
        d.addEventListener("scroll", f, {
          passive: !0
        });
      }), c.addEventListener("resize", f, {
        passive: !0
      }), r(), function() {
        l.forEach(function(d) {
          d.removeEventListener("scroll", f), c.removeEventListener("resize", f);
        });
      };
    }
  }, [e, t, n]);
}
function qS(e, t, n, r, o, i, a, s) {
  var c = u.useRef(e), l = u.useRef(!1);
  c.current !== e && (l.current = !0, c.current = e), u.useEffect(function() {
    var f = Tt(function() {
      l.current = !1;
    });
    return function() {
      Tt.cancel(f);
    };
  }, [e]), u.useEffect(function() {
    if (t && r && (!o || i)) {
      var f = function() {
        var R = !1, k = function(P) {
          var I = P.target;
          R = a(I);
        }, x = function(P) {
          var I = P.target;
          !l.current && c.current && !R && !a(I) && s(!1);
        };
        return [k, x];
      }, d = f(), v = U(d, 2), g = v[0], p = v[1], h = f(), m = U(h, 2), y = m[0], b = m[1], E = xo(r);
      E.addEventListener("mousedown", g, !0), E.addEventListener("click", p, !0), E.addEventListener("contextmenu", p, !0);
      var w = hi(n);
      if (w && (w.addEventListener("mousedown", y, !0), w.addEventListener("click", b, !0), w.addEventListener("contextmenu", b, !0)), process.env.NODE_ENV !== "production") {
        var S, C, _ = n == null || (S = n.getRootNode) === null || S === void 0 ? void 0 : S.call(n), N = (C = r.getRootNode) === null || C === void 0 ? void 0 : C.call(r);
        Fe(_ === N, "trigger element and popup element should in same shadow root.");
      }
      return function() {
        E.removeEventListener("mousedown", g, !0), E.removeEventListener("click", p, !0), E.removeEventListener("contextmenu", p, !0), w && (w.removeEventListener("mousedown", y, !0), w.removeEventListener("click", b, !0), w.removeEventListener("contextmenu", b, !0));
      };
    }
  }, [t, n, r, o, i]);
}
function YS(e) {
  var t = e.prefixCls, n = e.align, r = e.arrow, o = e.arrowPos, i = r || {}, a = i.className, s = i.content, c = o.x, l = c === void 0 ? 0 : c, f = o.y, d = f === void 0 ? 0 : f, v = u.useRef();
  if (!n || !n.points)
    return null;
  var g = {
    position: "absolute"
  };
  if (n.autoArrow !== !1) {
    var p = n.points[0], h = n.points[1], m = p[0], y = p[1], b = h[0], E = h[1];
    m === b || !["t", "b"].includes(m) ? g.top = d : m === "t" ? g.top = 0 : g.bottom = 0, y === E || !["l", "r"].includes(y) ? g.left = l : y === "l" ? g.left = 0 : g.right = 0;
  }
  return /* @__PURE__ */ u.createElement("div", {
    ref: v,
    className: Re("".concat(t, "-arrow"), a),
    style: g
  }, s);
}
function XS(e) {
  var t = e.prefixCls, n = e.open, r = e.zIndex, o = e.mask, i = e.motion;
  return o ? /* @__PURE__ */ u.createElement(bo, Te({}, i, {
    motionAppear: !0,
    visible: n,
    removeOnLeave: !0
  }), function(a) {
    var s = a.className;
    return /* @__PURE__ */ u.createElement("div", {
      style: {
        zIndex: r
      },
      className: Re("".concat(t, "-mask"), s)
    });
  }) : null;
}
var uv = /* @__PURE__ */ u.memo(function(e) {
  var t = e.children;
  return t;
}, function(e, t) {
  return t.cache;
});
process.env.NODE_ENV !== "production" && (uv.displayName = "PopupContent");
var fv = /* @__PURE__ */ u.forwardRef(function(e, t) {
  var n = e.popup, r = e.className, o = e.prefixCls, i = e.style, a = e.target, s = e.onVisibleChanged, c = e.open, l = e.keepDom, f = e.onClick, d = e.mask, v = e.arrow, g = e.arrowPos, p = e.align, h = e.motion, m = e.maskMotion, y = e.forceRender, b = e.getPopupContainer, E = e.autoDestroy, w = e.portal, S = e.zIndex, C = e.onMouseEnter, _ = e.onMouseLeave, N = e.ready, M = e.offsetX, R = e.offsetY, k = e.offsetR, x = e.offsetB, O = e.onAlign, P = e.onPrepare, I = e.stretch, $ = e.targetWidth, D = e.targetHeight, B = typeof n == "function" ? n() : n, K = c || l, ne = b?.length > 0, ce = u.useState(!b || !ne), j = U(ce, 2), H = j[0], z = j[1];
  if (vt(function() {
    !H && ne && a && z(!0);
  }, [H, ne, a]), !H)
    return null;
  var G = "auto", T = {
    left: "-1000vw",
    top: "-1000vh",
    right: G,
    bottom: G
  };
  if (N || !c) {
    var q = p.points, F = p._experimental, Y = F?.dynamicInset, te = Y && q[0][1] === "r", Q = Y && q[0][0] === "b";
    te ? (T.right = k, T.left = G) : (T.left = M, T.right = G), Q ? (T.bottom = x, T.top = G) : (T.top = R, T.bottom = G);
  }
  var A = {};
  return I && (I.includes("height") && D ? A.height = D : I.includes("minHeight") && D && (A.minHeight = D), I.includes("width") && $ ? A.width = $ : I.includes("minWidth") && $ && (A.minWidth = $)), c || (A.pointerEvents = "none"), /* @__PURE__ */ u.createElement(w, {
    open: y || K,
    getContainer: b && function() {
      return b(a);
    },
    autoDestroy: E
  }, /* @__PURE__ */ u.createElement(XS, {
    prefixCls: o,
    open: c,
    zIndex: S,
    mask: d,
    motion: m
  }), /* @__PURE__ */ u.createElement(Zn, {
    onResize: O,
    disabled: !c
  }, function(re) {
    return /* @__PURE__ */ u.createElement(bo, Te({
      motionAppear: !0,
      motionEnter: !0,
      motionLeave: !0,
      removeOnLeave: !1,
      forceRender: y,
      leavedClassName: "".concat(o, "-hidden")
    }, h, {
      onAppearPrepare: P,
      onEnterPrepare: P,
      visible: c,
      onVisibleChanged: function(Z) {
        var se;
        h == null || (se = h.onVisibleChanged) === null || se === void 0 || se.call(h, Z), s(Z);
      }
    }), function(L, Z) {
      var se = L.className, ae = L.style, fe = Re(o, se, r);
      return /* @__PURE__ */ u.createElement("div", {
        ref: Mr(re, t, Z),
        className: fe,
        style: V(V(V(V({
          "--arrow-x": "".concat(g.x || 0, "px"),
          "--arrow-y": "".concat(g.y || 0, "px")
        }, T), A), ae), {}, {
          boxSizing: "border-box",
          zIndex: S
        }, i),
        onMouseEnter: C,
        onMouseLeave: _,
        onClick: f
      }, v && /* @__PURE__ */ u.createElement(YS, {
        prefixCls: o,
        arrow: v,
        arrowPos: g,
        align: p
      }), /* @__PURE__ */ u.createElement(uv, {
        cache: !c
      }, B));
    });
  }));
});
process.env.NODE_ENV !== "production" && (fv.displayName = "Popup");
var dv = /* @__PURE__ */ u.forwardRef(function(e, t) {
  var n = e.children, r = e.getTriggerDOMNode, o = go(n), i = u.useCallback(function(s) {
    zs(t, r ? r(s) : s);
  }, [r]), a = Vs(i, n.ref);
  return o ? /* @__PURE__ */ u.cloneElement(n, {
    ref: a
  }) : n;
});
process.env.NODE_ENV !== "production" && (dv.displayName = "TriggerWrapper");
var QS = ["prefixCls", "children", "action", "showAction", "hideAction", "popupVisible", "defaultPopupVisible", "onPopupVisibleChange", "afterPopupVisibleChange", "mouseEnterDelay", "mouseLeaveDelay", "focusDelay", "blurDelay", "mask", "maskClosable", "getPopupContainer", "forceRender", "autoDestroy", "destroyPopupOnHide", "popup", "popupClassName", "popupStyle", "popupPlacement", "builtinPlacements", "popupAlign", "zIndex", "stretch", "getPopupClassNameFromAlign", "alignPoint", "onPopupClick", "onPopupAlign", "arrow", "popupMotion", "maskMotion", "popupTransitionName", "popupAnimation", "maskTransitionName", "maskAnimation", "className", "getTriggerDOMNode"];
function JS() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : lc, t = /* @__PURE__ */ u.forwardRef(function(n, r) {
    var o = n.prefixCls, i = o === void 0 ? "rc-trigger-popup" : o, a = n.children, s = n.action, c = s === void 0 ? "hover" : s, l = n.showAction, f = n.hideAction, d = n.popupVisible, v = n.defaultPopupVisible, g = n.onPopupVisibleChange, p = n.afterPopupVisibleChange, h = n.mouseEnterDelay, m = n.mouseLeaveDelay, y = m === void 0 ? 0.1 : m, b = n.focusDelay, E = n.blurDelay, w = n.mask, S = n.maskClosable, C = S === void 0 ? !0 : S, _ = n.getPopupContainer, N = n.forceRender, M = n.autoDestroy, R = n.destroyPopupOnHide, k = n.popup, x = n.popupClassName, O = n.popupStyle, P = n.popupPlacement, I = n.builtinPlacements, $ = I === void 0 ? {} : I, D = n.popupAlign, B = n.zIndex, K = n.stretch, ne = n.getPopupClassNameFromAlign, ce = n.alignPoint, j = n.onPopupClick, H = n.onPopupAlign, z = n.arrow, G = n.popupMotion, T = n.maskMotion, q = n.popupTransitionName, F = n.popupAnimation, Y = n.maskTransitionName, te = n.maskAnimation, Q = n.className, A = n.getTriggerDOMNode, re = ut(n, QS), L = M || R || !1, Z = u.useState(!1), se = U(Z, 2), ae = se[0], fe = se[1];
    vt(function() {
      fe(nv());
    }, []);
    var ge = u.useRef({}), ee = u.useContext(Zl), le = u.useMemo(function() {
      return {
        registerSubPopup: function(Ie, at) {
          ge.current[Ie] = at, ee?.registerSubPopup(Ie, at);
        }
      };
    }, [ee]), Ce = ib(), Ne = u.useState(null), ie = U(Ne, 2), de = ie[0], ze = ie[1], Ye = mn(function(be) {
      ai(be) && de !== be && ze(be), ee?.registerSubPopup(Ce, be);
    }), Ge = u.useState(null), qe = U(Ge, 2), Le = qe[0], Xe = qe[1], Rt = mn(function(be) {
      ai(be) && Le !== be && Xe(be);
    }), rt = u.Children.only(a), ue = rt?.props || {}, pe = {}, Qe = mn(function(be) {
      var Ie, at, pt = Le;
      return pt?.contains(be) || ((Ie = hi(pt)) === null || Ie === void 0 ? void 0 : Ie.host) === be || be === pt || de?.contains(be) || ((at = hi(de)) === null || at === void 0 ? void 0 : at.host) === be || be === de || Object.values(ge.current).some(function(st) {
        return st?.contains(be) || be === st;
      });
    }), Ve = tu(i, G, F, q), Je = tu(i, T, te, Y), Se = u.useState(v || !1), $e = U(Se, 2), ot = $e[0], Me = $e[1], xe = d ?? ot, tt = mn(function(be) {
      d === void 0 && Me(be);
    });
    vt(function() {
      Me(d || !1);
    }, [d]);
    var nt = u.useRef(xe);
    nt.current = xe;
    var yt = mn(function(be) {
      xe !== be && (tt(be), g?.(be));
    }), Ee = u.useRef(), oe = function() {
      clearTimeout(Ee.current);
    }, X = function(Ie) {
      var at = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      oe(), at === 0 ? yt(Ie) : Ee.current = setTimeout(function() {
        yt(Ie);
      }, at * 1e3);
    };
    u.useEffect(function() {
      return oe;
    }, []);
    var ve = u.useState(!1), ye = U(ve, 2), _e = ye[0], He = ye[1];
    vt(function(be) {
      (!be || xe) && He(!0);
    }, [xe]);
    var Ct = u.useState(null), bt = U(Ct, 2), Mt = bt[0], et = bt[1], Bt = u.useState([0, 0]), It = U(Bt, 2), yn = It[0], nr = It[1], Lt = function(Ie) {
      nr([Ie.clientX, Ie.clientY]);
    }, $t = KS(xe, de, ce ? yn : Le, P, $, D, H), kt = U($t, 11), rr = kt[0], sn = kt[1], bn = kt[2], or = kt[3], ir = kt[4], hn = kt[5], ar = kt[6], Dr = kt[7], Sn = kt[8], Jt = kt[9], En = kt[10], cn = mn(function() {
      _e || En();
    });
    GS(xe, Le, de, cn), vt(function() {
      cn();
    }, [yn, P]), vt(function() {
      xe && !($ != null && $[P]) && cn();
    }, [JSON.stringify(D)]);
    var kn = u.useMemo(function() {
      var be = US($, i, Jt, ce);
      return Re(be, ne?.(Jt));
    }, [Jt, ne, $, i, ce]);
    u.useImperativeHandle(r, function() {
      return {
        forceAlign: cn
      };
    });
    var sr = function(Ie) {
      He(!1), En(), p?.(Ie);
    }, jn = function() {
      return new Promise(function(Ie) {
        et(function() {
          return Ie;
        });
      });
    };
    vt(function() {
      Mt && (En(), Mt(), et(null));
    }, [Mt]);
    var cr = u.useState(0), Hn = U(cr, 2), Lr = Hn[0], kr = Hn[1], lr = u.useState(0), Mn = U(lr, 2), Oe = Mn[0], we = Mn[1], ht = function(Ie, at) {
      if (cn(), K) {
        var pt = at.getBoundingClientRect();
        kr(pt.width), we(pt.height);
      }
    }, xt = BS(ae, c, l, f), it = U(xt, 2), mt = it[0], St = it[1], ft = function(Ie, at, pt, st) {
      pe[Ie] = function(Cc) {
        var _o;
        st?.(Cc), X(at, pt);
        for (var Xi = arguments.length, xc = new Array(Xi > 1 ? Xi - 1 : 0), Ro = 1; Ro < Xi; Ro++)
          xc[Ro - 1] = arguments[Ro];
        (_o = ue[Ie]) === null || _o === void 0 || _o.call.apply(_o, [ue, Cc].concat(xc));
      };
    }, zt = mt.has("click"), Wt = St.has("click") || St.has("contextMenu");
    (zt || Wt) && (pe.onClick = function(be) {
      var Ie;
      nt.current && Wt ? X(!1) : !nt.current && zt && (Lt(be), X(!0));
      for (var at = arguments.length, pt = new Array(at > 1 ? at - 1 : 0), st = 1; st < at; st++)
        pt[st - 1] = arguments[st];
      (Ie = ue.onClick) === null || Ie === void 0 || Ie.call.apply(Ie, [ue, be].concat(pt));
    }), qS(xe, Wt, Le, de, w, C, Qe, X);
    var At = mt.has("hover"), wn = St.has("hover"), jr, Hr;
    At && (ft("onMouseEnter", !0, h, function(be) {
      Lt(be);
    }), jr = function() {
      (xe || _e) && X(!0, h);
    }, ce && (pe.onMouseMove = function(be) {
      var Ie;
      (Ie = ue.onMouseMove) === null || Ie === void 0 || Ie.call(ue, be);
    })), wn && (ft("onMouseLeave", !1, y), Hr = function() {
      X(!1, y);
    }), mt.has("focus") && ft("onFocus", !0, b), St.has("focus") && ft("onBlur", !1, E), mt.has("contextMenu") && (pe.onContextMenu = function(be) {
      var Ie;
      nt.current && St.has("contextMenu") ? X(!1) : (Lt(be), X(!0)), be.preventDefault();
      for (var at = arguments.length, pt = new Array(at > 1 ? at - 1 : 0), st = 1; st < at; st++)
        pt[st - 1] = arguments[st];
      (Ie = ue.onContextMenu) === null || Ie === void 0 || Ie.call.apply(Ie, [ue, be].concat(pt));
    }), Q && (pe.className = Re(ue.className, Q));
    var zr = V(V({}, ue), pe), Oo = {}, Ki = ["onContextMenu", "onClick", "onMouseDown", "onTouchStart", "onMouseEnter", "onMouseLeave", "onFocus", "onBlur"];
    Ki.forEach(function(be) {
      re[be] && (Oo[be] = function() {
        for (var Ie, at = arguments.length, pt = new Array(at), st = 0; st < at; st++)
          pt[st] = arguments[st];
        (Ie = zr[be]) === null || Ie === void 0 || Ie.call.apply(Ie, [zr].concat(pt)), re[be].apply(re, pt);
      });
    });
    var Gi = /* @__PURE__ */ u.cloneElement(rt, V(V({}, zr), Oo)), qi = {
      x: hn,
      y: ar
    }, Yi = z ? V({}, z !== !0 ? z : {}) : null;
    return /* @__PURE__ */ u.createElement(u.Fragment, null, /* @__PURE__ */ u.createElement(Zn, {
      disabled: !xe,
      ref: Rt,
      onResize: ht
    }, /* @__PURE__ */ u.createElement(dv, {
      getTriggerDOMNode: A
    }, Gi)), /* @__PURE__ */ u.createElement(Zl.Provider, {
      value: le
    }, /* @__PURE__ */ u.createElement(fv, {
      portal: e,
      ref: Ye,
      prefixCls: i,
      popup: k,
      className: Re(x, kn),
      style: O,
      target: Le,
      onMouseEnter: jr,
      onMouseLeave: Hr,
      zIndex: B,
      open: xe,
      keepDom: _e,
      onClick: j,
      mask: w,
      motion: Ve,
      maskMotion: Je,
      onVisibleChanged: sr,
      onPrepare: jn,
      forceRender: N,
      autoDestroy: L,
      getPopupContainer: _,
      align: Jt,
      arrow: Yi,
      arrowPos: qi,
      ready: rr,
      offsetX: sn,
      offsetY: bn,
      offsetR: or,
      offsetB: ir,
      onAlign: cn,
      stretch: K,
      targetWidth: Lr / Dr,
      targetHeight: Oe / Sn
    })));
  });
  return process.env.NODE_ENV !== "production" && (t.displayName = "Trigger"), t;
}
const ZS = JS(lc);
var eE = ["prefixCls", "disabled", "visible", "children", "popupElement", "containerWidth", "animation", "transitionName", "dropdownStyle", "dropdownClassName", "direction", "placement", "builtinPlacements", "dropdownMatchSelectWidth", "dropdownRender", "dropdownAlign", "getPopupContainer", "empty", "getTriggerDOMNode", "onPopupVisibleChange", "onPopupMouseEnter"], tE = function(t) {
  var n = t === !0 ? 0 : 1;
  return {
    bottomLeft: {
      points: ["tl", "bl"],
      offset: [0, 4],
      overflow: {
        adjustX: n,
        adjustY: 1
      },
      htmlRegion: "scroll"
    },
    bottomRight: {
      points: ["tr", "br"],
      offset: [0, 4],
      overflow: {
        adjustX: n,
        adjustY: 1
      },
      htmlRegion: "scroll"
    },
    topLeft: {
      points: ["bl", "tl"],
      offset: [0, -4],
      overflow: {
        adjustX: n,
        adjustY: 1
      },
      htmlRegion: "scroll"
    },
    topRight: {
      points: ["br", "tr"],
      offset: [0, -4],
      overflow: {
        adjustX: n,
        adjustY: 1
      },
      htmlRegion: "scroll"
    }
  };
}, nE = function(t, n) {
  var r = t.prefixCls;
  t.disabled;
  var o = t.visible, i = t.children, a = t.popupElement, s = t.containerWidth, c = t.animation, l = t.transitionName, f = t.dropdownStyle, d = t.dropdownClassName, v = t.direction, g = v === void 0 ? "ltr" : v, p = t.placement, h = t.builtinPlacements, m = t.dropdownMatchSelectWidth, y = t.dropdownRender, b = t.dropdownAlign, E = t.getPopupContainer, w = t.empty, S = t.getTriggerDOMNode, C = t.onPopupVisibleChange, _ = t.onPopupMouseEnter, N = ut(t, eE), M = "".concat(r, "-dropdown"), R = a;
  y && (R = y(a));
  var k = u.useMemo(function() {
    return h || tE(m);
  }, [h, m]), x = c ? "".concat(M, "-").concat(c) : l, O = u.useRef(null);
  u.useImperativeHandle(n, function() {
    return {
      getPopupElement: function() {
        return O.current;
      }
    };
  });
  var P = V({
    minWidth: s
  }, f);
  return typeof m == "number" ? P.width = m : m && (P.width = s), /* @__PURE__ */ u.createElement(ZS, Te({}, N, {
    showAction: C ? ["click"] : [],
    hideAction: C ? ["click"] : [],
    popupPlacement: p || (g === "rtl" ? "bottomRight" : "bottomLeft"),
    builtinPlacements: k,
    prefixCls: M,
    popupTransitionName: x,
    popup: /* @__PURE__ */ u.createElement("div", {
      ref: O,
      onMouseEnter: _
    }, R),
    popupAlign: b,
    popupVisible: o,
    getPopupContainer: E,
    popupClassName: Re(d, he({}, "".concat(M, "-empty"), w)),
    popupStyle: P,
    getTriggerDOMNode: S,
    onPopupVisibleChange: C
  }), i);
}, vv = /* @__PURE__ */ u.forwardRef(nE);
vv.displayName = "SelectTrigger";
function au(e, t) {
  var n = e.key, r;
  return "value" in e && (r = e.value), n ?? (r !== void 0 ? r : "rc-index-key-".concat(t));
}
function hv(e, t) {
  var n = e || {}, r = n.label, o = n.value, i = n.options, a = n.groupLabel, s = r || (t ? "children" : "label");
  return {
    label: s,
    value: o || "value",
    options: i || "options",
    groupLabel: a || s
  };
}
function rE(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = t.fieldNames, r = t.childrenAsData, o = [], i = hv(n, !1), a = i.label, s = i.value, c = i.options, l = i.groupLabel;
  function f(d, v) {
    d.forEach(function(g) {
      if (v || !(c in g)) {
        var p = g[s];
        o.push({
          key: au(g, o.length),
          groupOption: v,
          data: g,
          label: g[a],
          value: p
        });
      } else {
        var h = g[l];
        h === void 0 && r && (h = g.label), o.push({
          key: au(g, o.length),
          group: !0,
          data: g,
          label: h
        }), f(g[c], !0);
      }
    });
  }
  return f(e, !1), o;
}
function Cs(e) {
  var t = V({}, e);
  return "props" in t || Object.defineProperty(t, "props", {
    get: function() {
      return Fe(!1, "Return type is option instead of Option instance. Please read value directly instead of reading from `props`."), t;
    }
  }), t;
}
function oE(e, t) {
  if (!t || !t.length)
    return null;
  var n = !1;
  function r(i, a) {
    var s = jf(a), c = s[0], l = s.slice(1);
    if (!c)
      return [i];
    var f = i.split(c);
    return n = n || f.length > 1, f.reduce(function(d, v) {
      return [].concat(me(d), me(r(v, l)));
    }, []).filter(function(d) {
      return d;
    });
  }
  var o = r(e, t);
  return n ? o : null;
}
var iE = ["id", "prefixCls", "className", "showSearch", "tagRender", "direction", "omitDomProps", "displayValues", "onDisplayValuesChange", "emptyOptions", "notFoundContent", "onClear", "mode", "disabled", "loading", "getInputElement", "getRawInputElement", "open", "defaultOpen", "onDropdownVisibleChange", "activeValue", "onActiveValueChange", "activeDescendantId", "searchValue", "autoClearSearchValue", "onSearch", "onSearchSplit", "tokenSeparators", "allowClear", "showArrow", "inputIcon", "clearIcon", "OptionList", "animation", "transitionName", "dropdownStyle", "dropdownClassName", "dropdownMatchSelectWidth", "dropdownRender", "dropdownAlign", "placement", "builtinPlacements", "getPopupContainer", "showAction", "onFocus", "onBlur", "onKeyUp", "onKeyDown", "onMouseDown"], aE = ["value", "onChange", "removeIcon", "placeholder", "autoFocus", "maxTagCount", "maxTagTextLength", "maxTagPlaceholder", "choiceTransitionName", "onInputKeyDown", "onPopupScroll", "tabIndex"];
function Ei(e) {
  return e === "tags" || e === "multiple";
}
var mv = /* @__PURE__ */ u.forwardRef(function(e, t) {
  var n, r, o = e.id, i = e.prefixCls, a = e.className, s = e.showSearch, c = e.tagRender, l = e.direction, f = e.omitDomProps, d = e.displayValues, v = e.onDisplayValuesChange, g = e.emptyOptions, p = e.notFoundContent, h = p === void 0 ? "Not Found" : p, m = e.onClear, y = e.mode, b = e.disabled, E = e.loading, w = e.getInputElement, S = e.getRawInputElement, C = e.open, _ = e.defaultOpen, N = e.onDropdownVisibleChange, M = e.activeValue, R = e.onActiveValueChange, k = e.activeDescendantId, x = e.searchValue, O = e.autoClearSearchValue, P = e.onSearch, I = e.onSearchSplit, $ = e.tokenSeparators, D = e.allowClear, B = e.showArrow, K = e.inputIcon, ne = e.clearIcon, ce = e.OptionList, j = e.animation, H = e.transitionName, z = e.dropdownStyle, G = e.dropdownClassName, T = e.dropdownMatchSelectWidth, q = e.dropdownRender, F = e.dropdownAlign, Y = e.placement, te = e.builtinPlacements, Q = e.getPopupContainer, A = e.showAction, re = A === void 0 ? [] : A, L = e.onFocus, Z = e.onBlur, se = e.onKeyUp, ae = e.onKeyDown, fe = e.onMouseDown, ge = ut(e, iE), ee = Ei(y), le = (s !== void 0 ? s : ee) || y === "combobox", Ce = V({}, ge);
  aE.forEach(function(Oe) {
    delete Ce[Oe];
  }), f?.forEach(function(Oe) {
    delete Ce[Oe];
  });
  var Ne = u.useState(!1), ie = U(Ne, 2), de = ie[0], ze = ie[1];
  u.useEffect(function() {
    ze(nv());
  }, []);
  var Ye = u.useRef(null), Ge = u.useRef(null), qe = u.useRef(null), Le = u.useRef(null), Xe = u.useRef(null), Rt = SS(), rt = U(Rt, 3), ue = rt[0], pe = rt[1], Qe = rt[2];
  u.useImperativeHandle(t, function() {
    var Oe, we;
    return {
      focus: (Oe = Le.current) === null || Oe === void 0 ? void 0 : Oe.focus,
      blur: (we = Le.current) === null || we === void 0 ? void 0 : we.blur,
      scrollTo: function(xt) {
        var it;
        return (it = Xe.current) === null || it === void 0 ? void 0 : it.scrollTo(xt);
      }
    };
  });
  var Ve = u.useMemo(function() {
    var Oe;
    if (y !== "combobox")
      return x;
    var we = (Oe = d[0]) === null || Oe === void 0 ? void 0 : Oe.value;
    return typeof we == "string" || typeof we == "number" ? String(we) : "";
  }, [x, y, d]), Je = y === "combobox" && typeof w == "function" && w() || null, Se = typeof S == "function" && S(), $e = Vs(Ge, Se == null || (n = Se.props) === null || n === void 0 ? void 0 : n.ref), ot = u.useState(!1), Me = U(ot, 2), xe = Me[0], tt = Me[1];
  vt(function() {
    tt(!0);
  }, []);
  var nt = di(!1, {
    defaultValue: _,
    value: C
  }), yt = U(nt, 2), Ee = yt[0], oe = yt[1], X = xe ? Ee : !1, ve = !h && g;
  (b || ve && X && y === "combobox") && (X = !1);
  var ye = ve ? !1 : X, _e = u.useCallback(function(Oe) {
    var we = Oe !== void 0 ? Oe : !X;
    b || (oe(we), X !== we && N?.(we));
  }, [b, X, oe, N]), He = u.useMemo(function() {
    return ($ || []).some(function(Oe) {
      return [`
`, `\r
`].includes(Oe);
    });
  }, [$]), Ct = function(we, ht, xt) {
    var it = !0, mt = we;
    R?.(null);
    var St = xt ? null : oE(we, $);
    return y !== "combobox" && St && (mt = "", I?.(St), _e(!1), it = !1), P && Ve !== mt && P(mt, {
      source: ht ? "typing" : "effect"
    }), it;
  }, bt = function(we) {
    !we || !we.trim() || P(we, {
      source: "submit"
    });
  };
  u.useEffect(function() {
    !X && !ee && y !== "combobox" && Ct("", !1, !1);
  }, [X]), u.useEffect(function() {
    Ee && b && oe(!1), b && pe(!1);
  }, [b]);
  var Mt = ov(), et = U(Mt, 2), Bt = et[0], It = et[1], yn = function(we) {
    var ht = Bt(), xt = we.which;
    if (xt === J.ENTER && (y !== "combobox" && we.preventDefault(), X || _e(!0)), It(!!Ve), xt === J.BACKSPACE && !ht && ee && !Ve && d.length) {
      for (var it = me(d), mt = null, St = it.length - 1; St >= 0; St -= 1) {
        var ft = it[St];
        if (!ft.disabled) {
          it.splice(St, 1), mt = ft;
          break;
        }
      }
      mt && v(it, {
        type: "remove",
        values: [mt]
      });
    }
    for (var zt = arguments.length, Wt = new Array(zt > 1 ? zt - 1 : 0), At = 1; At < zt; At++)
      Wt[At - 1] = arguments[At];
    if (X && Xe.current) {
      var wn;
      (wn = Xe.current).onKeyDown.apply(wn, [we].concat(Wt));
    }
    ae?.apply(void 0, [we].concat(Wt));
  }, nr = function(we) {
    for (var ht = arguments.length, xt = new Array(ht > 1 ? ht - 1 : 0), it = 1; it < ht; it++)
      xt[it - 1] = arguments[it];
    if (X && Xe.current) {
      var mt;
      (mt = Xe.current).onKeyUp.apply(mt, [we].concat(xt));
    }
    se?.apply(void 0, [we].concat(xt));
  }, Lt = function(we) {
    var ht = d.filter(function(xt) {
      return xt !== we;
    });
    v(ht, {
      type: "remove",
      values: [we]
    });
  }, $t = u.useRef(!1), kt = function() {
    pe(!0), b || (L && !$t.current && L.apply(void 0, arguments), re.includes("focus") && _e(!0)), $t.current = !0;
  }, rr = function() {
    pe(!1, function() {
      $t.current = !1, _e(!1);
    }), !b && (Ve && (y === "tags" ? P(Ve, {
      source: "submit"
    }) : y === "multiple" && P("", {
      source: "blur"
    })), Z && Z.apply(void 0, arguments));
  }, sn = [];
  u.useEffect(function() {
    return function() {
      sn.forEach(function(Oe) {
        return clearTimeout(Oe);
      }), sn.splice(0, sn.length);
    };
  }, []);
  var bn = function(we) {
    var ht, xt = we.target, it = (ht = qe.current) === null || ht === void 0 ? void 0 : ht.getPopupElement();
    if (it && it.contains(xt)) {
      var mt = setTimeout(function() {
        var Wt = sn.indexOf(mt);
        if (Wt !== -1 && sn.splice(Wt, 1), Qe(), !de && !it.contains(document.activeElement)) {
          var At;
          (At = Le.current) === null || At === void 0 || At.focus();
        }
      });
      sn.push(mt);
    }
    for (var St = arguments.length, ft = new Array(St > 1 ? St - 1 : 0), zt = 1; zt < St; zt++)
      ft[zt - 1] = arguments[zt];
    fe?.apply(void 0, [we].concat(ft));
  }, or = u.useState(null), ir = U(or, 2), hn = ir[0], ar = ir[1], Dr = u.useState({}), Sn = U(Dr, 2), Jt = Sn[1];
  function En() {
    Jt({});
  }
  vt(function() {
    if (ye) {
      var Oe, we = Math.ceil((Oe = Ye.current) === null || Oe === void 0 ? void 0 : Oe.offsetWidth);
      hn !== we && !Number.isNaN(we) && ar(we);
    }
  }, [ye]);
  var cn;
  Se && (cn = function(we) {
    _e(we);
  }), ES(function() {
    var Oe;
    return [Ye.current, (Oe = qe.current) === null || Oe === void 0 ? void 0 : Oe.getPopupElement()];
  }, ye, _e, !!Se);
  var kn = u.useMemo(function() {
    return V(V({}, e), {}, {
      notFoundContent: h,
      open: X,
      triggerOpen: ye,
      id: o,
      showSearch: le,
      multiple: ee,
      toggleOpen: _e
    });
  }, [e, h, ye, X, o, le, ee, _e]), sr = B !== void 0 ? B : E || !ee && y !== "combobox", jn;
  sr && (jn = /* @__PURE__ */ u.createElement(Si, {
    className: Re("".concat(i, "-arrow"), he({}, "".concat(i, "-arrow-loading"), E)),
    customizeIcon: K,
    customizeIconProps: {
      loading: E,
      searchValue: Ve,
      open: X,
      focused: ue,
      showSearch: le
    }
  }));
  var cr, Hn = function() {
    var we;
    m?.(), (we = Le.current) === null || we === void 0 || we.focus(), v([], {
      type: "clear",
      values: d
    }), Ct("", !1, !1);
  };
  !b && D && (d.length || Ve) && !(y === "combobox" && Ve === "") && (cr = /* @__PURE__ */ u.createElement(Si, {
    className: "".concat(i, "-clear"),
    onMouseDown: Hn,
    customizeIcon: ne
  }, "×"));
  var Lr = /* @__PURE__ */ u.createElement(ce, {
    ref: Xe
  }), kr = Re(i, a, (r = {}, he(r, "".concat(i, "-focused"), ue), he(r, "".concat(i, "-multiple"), ee), he(r, "".concat(i, "-single"), !ee), he(r, "".concat(i, "-allow-clear"), D), he(r, "".concat(i, "-show-arrow"), sr), he(r, "".concat(i, "-disabled"), b), he(r, "".concat(i, "-loading"), E), he(r, "".concat(i, "-open"), X), he(r, "".concat(i, "-customize-input"), Je), he(r, "".concat(i, "-show-search"), le), r)), lr = /* @__PURE__ */ u.createElement(vv, {
    ref: qe,
    disabled: b,
    prefixCls: i,
    visible: ye,
    popupElement: Lr,
    containerWidth: hn,
    animation: j,
    transitionName: H,
    dropdownStyle: z,
    dropdownClassName: G,
    direction: l,
    dropdownMatchSelectWidth: T,
    dropdownRender: q,
    dropdownAlign: F,
    placement: Y,
    builtinPlacements: te,
    getPopupContainer: Q,
    empty: g,
    getTriggerDOMNode: function() {
      return Ge.current;
    },
    onPopupVisibleChange: cn,
    onPopupMouseEnter: En
  }, Se ? /* @__PURE__ */ u.cloneElement(Se, {
    ref: $e
  }) : /* @__PURE__ */ u.createElement(lv, Te({}, e, {
    domRef: Ge,
    prefixCls: i,
    inputElement: Je,
    ref: Le,
    id: o,
    showSearch: le,
    autoClearSearchValue: O,
    mode: y,
    activeDescendantId: k,
    tagRender: c,
    values: d,
    open: X,
    onToggleOpen: _e,
    activeValue: M,
    searchValue: Ve,
    onSearch: Ct,
    onSearchSubmit: bt,
    onRemove: Lt,
    tokenWithEnter: He
  }))), Mn;
  return Se ? Mn = lr : Mn = /* @__PURE__ */ u.createElement("div", Te({
    className: kr
  }, Ce, {
    ref: Ye,
    onMouseDown: bn,
    onKeyDown: yn,
    onKeyUp: nr,
    onFocus: kt,
    onBlur: rr
  }), ue && !X && /* @__PURE__ */ u.createElement("span", {
    style: {
      width: 0,
      height: 0,
      position: "absolute",
      overflow: "hidden",
      opacity: 0
    },
    "aria-live": "polite"
  }, "".concat(d.map(function(Oe) {
    var we = Oe.label, ht = Oe.value;
    return ["number", "string"].includes(je(we)) ? we : ht;
  }).join(", "))), lr, jn, cr), /* @__PURE__ */ u.createElement(rv.Provider, {
    value: kn
  }, Mn);
});
process.env.NODE_ENV !== "production" && (mv.displayName = "BaseSelect");
const sE = function(e, t) {
  var n = u.useRef({
    values: /* @__PURE__ */ new Map(),
    options: /* @__PURE__ */ new Map()
  }), r = u.useMemo(function() {
    var i = n.current, a = i.values, s = i.options, c = e.map(function(d) {
      if (d.label === void 0) {
        var v;
        return V(V({}, d), {}, {
          label: (v = a.get(d.value)) === null || v === void 0 ? void 0 : v.label
        });
      }
      return d;
    }), l = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map();
    return c.forEach(function(d) {
      l.set(d.value, d), f.set(d.value, t.get(d.value) || s.get(d.value));
    }), n.current.values = l, n.current.options = f, c;
  }, [e, t]), o = u.useCallback(function(i) {
    return t.get(i) || n.current.options.get(i);
  }, [t]);
  return [r, o];
};
function wa(e, t) {
  return dc(e).join("").toUpperCase().includes(t);
}
const cE = function(e, t, n, r, o) {
  return u.useMemo(function() {
    if (!n || r === !1)
      return e;
    var i = t.options, a = t.label, s = t.value, c = [], l = typeof r == "function", f = n.toUpperCase(), d = l ? r : function(g, p) {
      return o ? wa(p[o], f) : p[i] ? wa(p[a !== "children" ? a : "label"], f) : wa(p[s], f);
    }, v = l ? function(g) {
      return Cs(g);
    } : function(g) {
      return g;
    };
    return e.forEach(function(g) {
      if (g[i]) {
        var p = d(n, v(g));
        if (p)
          c.push(g);
        else {
          var h = g[i].filter(function(m) {
            return d(n, v(m));
          });
          h.length && c.push(V(V({}, g), {}, he({}, i, h)));
        }
        return;
      }
      d(n, v(g)) && c.push(g);
    }), c;
  }, [e, r, o, n, t]);
};
var su = 0, lE = process.env.NODE_ENV !== "test" && Dt();
function uE() {
  var e;
  return lE ? (e = su, su += 1) : e = "TEST_OR_SSR", e;
}
function fE(e) {
  var t = u.useState(), n = U(t, 2), r = n[0], o = n[1];
  return u.useEffect(function() {
    o("rc_select_".concat(uE()));
  }, []), e || r;
}
var dE = ["children", "value"], vE = ["children"];
function hE(e) {
  var t = e, n = t.key, r = t.props, o = r.children, i = r.value, a = ut(r, dE);
  return V({
    key: n,
    value: i !== void 0 ? i : n,
    children: o
  }, a);
}
function vc(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  return Qn(e).map(function(n, r) {
    if (!/* @__PURE__ */ u.isValidElement(n) || !n.type)
      return null;
    var o = n, i = o.type.isSelectOptGroup, a = o.key, s = o.props, c = s.children, l = ut(s, vE);
    return t || !i ? hE(n) : V(V({
      key: "__RC_SELECT_GRP__".concat(a === null ? r : a, "__"),
      label: a
    }, l), {}, {
      options: vc(c)
    });
  }).filter(function(n) {
    return n;
  });
}
function mE(e, t, n, r, o) {
  return u.useMemo(function() {
    var i = e, a = !e;
    a && (i = vc(t));
    var s = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), l = function(v, g, p) {
      p && typeof p == "string" && v.set(g[p], g);
    };
    function f(d) {
      for (var v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, g = 0; g < d.length; g += 1) {
        var p = d[g];
        !p[n.options] || v ? (s.set(p[n.value], p), l(c, p, n.label), l(c, p, r), l(c, p, o)) : f(p[n.options], !0);
      }
    }
    return f(i), {
      options: i,
      valueOptions: s,
      labelOptions: c
    };
  }, [e, t, n, r, o]);
}
function cu(e) {
  var t = u.useRef();
  t.current = e;
  var n = u.useCallback(function() {
    return t.current.apply(t, arguments);
  }, []);
  return n;
}
var hc = function() {
  return null;
};
hc.isSelectOptGroup = !0;
var mc = function() {
  return null;
};
mc.isSelectOption = !0;
var pv = /* @__PURE__ */ u.forwardRef(function(e, t) {
  var n = e.height, r = e.offset, o = e.children, i = e.prefixCls, a = e.onInnerResize, s = e.innerProps, c = {}, l = {
    display: "flex",
    flexDirection: "column"
  };
  return r !== void 0 && (c = {
    height: n,
    position: "relative",
    overflow: "hidden"
  }, l = V(V({}, l), {}, {
    transform: "translateY(".concat(r, "px)"),
    position: "absolute",
    left: 0,
    right: 0,
    top: 0
  })), /* @__PURE__ */ u.createElement("div", {
    style: c
  }, /* @__PURE__ */ u.createElement(Zn, {
    onResize: function(d) {
      var v = d.offsetHeight;
      v && a && a();
    }
  }, /* @__PURE__ */ u.createElement("div", Te({
    style: l,
    className: Re(he({}, "".concat(i, "-holder-inner"), i)),
    ref: t
  }, s), o)));
});
pv.displayName = "Filler";
var pE = 20;
function lu(e) {
  return "touches" in e ? e.touches[0].pageY : e.pageY;
}
var gE = /* @__PURE__ */ function(e) {
  mo(n, e);
  var t = po(n);
  function n() {
    var r;
    on(this, n);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return r = t.call.apply(t, [this].concat(i)), r.moveRaf = null, r.scrollbarRef = /* @__PURE__ */ u.createRef(), r.thumbRef = /* @__PURE__ */ u.createRef(), r.visibleTimeout = null, r.state = {
      dragging: !1,
      pageY: null,
      startTop: null,
      visible: !1
    }, r.delayHidden = function() {
      clearTimeout(r.visibleTimeout), r.setState({
        visible: !0
      }), r.visibleTimeout = setTimeout(function() {
        r.setState({
          visible: !1
        });
      }, 2e3);
    }, r.onScrollbarTouchStart = function(s) {
      s.preventDefault();
    }, r.onContainerMouseDown = function(s) {
      s.stopPropagation(), s.preventDefault();
    }, r.patchEvents = function() {
      window.addEventListener("mousemove", r.onMouseMove), window.addEventListener("mouseup", r.onMouseUp), r.thumbRef.current.addEventListener("touchmove", r.onMouseMove), r.thumbRef.current.addEventListener("touchend", r.onMouseUp);
    }, r.removeEvents = function() {
      window.removeEventListener("mousemove", r.onMouseMove), window.removeEventListener("mouseup", r.onMouseUp), r.thumbRef.current && (r.thumbRef.current.removeEventListener("touchmove", r.onMouseMove), r.thumbRef.current.removeEventListener("touchend", r.onMouseUp)), Tt.cancel(r.moveRaf);
    }, r.onMouseDown = function(s) {
      var c = r.props.onStartMove;
      r.setState({
        dragging: !0,
        pageY: lu(s),
        startTop: r.getTop()
      }), c(), r.patchEvents(), s.stopPropagation(), s.preventDefault();
    }, r.onMouseMove = function(s) {
      var c = r.state, l = c.dragging, f = c.pageY, d = c.startTop, v = r.props.onScroll;
      if (Tt.cancel(r.moveRaf), l) {
        var g = lu(s) - f, p = d + g, h = r.getEnableScrollRange(), m = r.getEnableHeightRange(), y = m ? p / m : 0, b = Math.ceil(y * h);
        r.moveRaf = Tt(function() {
          v(b);
        });
      }
    }, r.onMouseUp = function() {
      var s = r.props.onStopMove;
      r.setState({
        dragging: !1
      }), s(), r.removeEvents();
    }, r.getSpinHeight = function() {
      var s = r.props, c = s.height, l = s.count, f = c / l * 10;
      return f = Math.max(f, pE), f = Math.min(f, c / 2), Math.floor(f);
    }, r.getEnableScrollRange = function() {
      var s = r.props, c = s.scrollHeight, l = s.height;
      return c - l || 0;
    }, r.getEnableHeightRange = function() {
      var s = r.props.height, c = r.getSpinHeight();
      return s - c || 0;
    }, r.getTop = function() {
      var s = r.props.scrollTop, c = r.getEnableScrollRange(), l = r.getEnableHeightRange();
      if (s === 0 || c === 0)
        return 0;
      var f = s / c;
      return f * l;
    }, r.showScroll = function() {
      var s = r.props, c = s.height, l = s.scrollHeight;
      return l > c;
    }, r;
  }
  return an(n, [{
    key: "componentDidMount",
    value: function() {
      this.scrollbarRef.current.addEventListener("touchstart", this.onScrollbarTouchStart), this.thumbRef.current.addEventListener("touchstart", this.onMouseDown);
    }
  }, {
    key: "componentDidUpdate",
    value: function(o) {
      o.scrollTop !== this.props.scrollTop && this.delayHidden();
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      var o, i;
      this.removeEvents(), (o = this.scrollbarRef.current) === null || o === void 0 || o.removeEventListener("touchstart", this.onScrollbarTouchStart), (i = this.thumbRef.current) === null || i === void 0 || i.removeEventListener("touchstart", this.onMouseDown), clearTimeout(this.visibleTimeout);
    }
  }, {
    key: "render",
    value: (
      // ====================== Render =======================
      function() {
        var o = this.state, i = o.dragging, a = o.visible, s = this.props, c = s.prefixCls, l = s.direction, f = this.getSpinHeight(), d = this.getTop(), v = this.showScroll(), g = v && a, p = l === "rtl" ? {
          left: 0
        } : {
          right: 0
        };
        return /* @__PURE__ */ u.createElement("div", {
          ref: this.scrollbarRef,
          className: Re("".concat(c, "-scrollbar"), he({}, "".concat(c, "-scrollbar-show"), v)),
          style: V(V({
            width: 8,
            top: 0,
            bottom: 0
          }, p), {}, {
            position: "absolute",
            display: g ? null : "none"
          }),
          onMouseDown: this.onContainerMouseDown,
          onMouseMove: this.delayHidden
        }, /* @__PURE__ */ u.createElement("div", {
          ref: this.thumbRef,
          className: Re("".concat(c, "-scrollbar-thumb"), he({}, "".concat(c, "-scrollbar-thumb-moving"), i)),
          style: {
            width: "100%",
            height: f,
            top: d,
            left: 0,
            position: "absolute",
            background: "rgba(0, 0, 0, 0.5)",
            borderRadius: 99,
            cursor: "pointer",
            userSelect: "none"
          },
          onMouseDown: this.onMouseDown
        }));
      }
    )
  }]), n;
}(u.Component);
function yE(e) {
  var t = e.children, n = e.setRef, r = u.useCallback(function(o) {
    n(o);
  }, []);
  return /* @__PURE__ */ u.cloneElement(t, {
    ref: r
  });
}
function bE(e, t, n, r, o, i) {
  var a = i.getKey;
  return e.slice(t, n + 1).map(function(s, c) {
    var l = t + c, f = o(s, l, {
      // style: status === 'MEASURE_START' ? { visibility: 'hidden' } : {},
    }), d = a(s);
    return /* @__PURE__ */ u.createElement(yE, {
      key: d,
      setRef: function(g) {
        return r(s, g);
      }
    }, f);
  });
}
var SE = /* @__PURE__ */ function() {
  function e() {
    on(this, e), this.maps = void 0, this.maps = /* @__PURE__ */ Object.create(null);
  }
  return an(e, [{
    key: "set",
    value: function(n, r) {
      this.maps[n] = r;
    }
  }, {
    key: "get",
    value: function(n) {
      return this.maps[n];
    }
  }]), e;
}();
function EE(e, t, n) {
  var r = u.useState(0), o = U(r, 2), i = o[0], a = o[1], s = Ae(/* @__PURE__ */ new Map()), c = Ae(new SE()), l = Ae();
  function f() {
    Tt.cancel(l.current);
  }
  function d() {
    f(), l.current = Tt(function() {
      s.current.forEach(function(g, p) {
        if (g && g.offsetParent) {
          var h = si(g), m = h.offsetHeight;
          c.current.get(p) !== m && c.current.set(p, h.offsetHeight);
        }
      }), a(function(g) {
        return g + 1;
      });
    });
  }
  function v(g, p) {
    var h = e(g), m = s.current.get(h);
    p ? (s.current.set(h, p), d()) : s.current.delete(h), !m != !p && (p ? t?.(g) : n?.(g));
  }
  return jt(function() {
    return f;
  }, []), [v, d, c.current, i];
}
function wE(e, t, n, r, o, i, a, s) {
  var c = u.useRef();
  return function(l) {
    if (l == null) {
      s();
      return;
    }
    if (Tt.cancel(c.current), typeof l == "number")
      a(l);
    else if (l && je(l) === "object") {
      var f, d = l.align;
      "index" in l ? f = l.index : f = t.findIndex(function(h) {
        return o(h) === l.key;
      });
      var v = l.offset, g = v === void 0 ? 0 : v, p = function h(m, y) {
        if (!(m < 0 || !e.current)) {
          var b = e.current.clientHeight, E = !1, w = y;
          if (b) {
            for (var S = y || d, C = 0, _ = 0, N = 0, M = Math.min(t.length, f), R = 0; R <= M; R += 1) {
              var k = o(t[R]);
              _ = C;
              var x = n.get(k);
              N = _ + (x === void 0 ? r : x), C = N, R === f && x === void 0 && (E = !0);
            }
            var O = null;
            switch (S) {
              case "top":
                O = _ - g;
                break;
              case "bottom":
                O = N - b + g;
                break;
              default: {
                var P = e.current.scrollTop, I = P + b;
                _ < P ? w = "top" : N > I && (w = "bottom");
              }
            }
            O !== null && O !== e.current.scrollTop && a(O);
          }
          c.current = Tt(function() {
            E && i(), h(m - 1, w);
          }, 2);
        }
      };
      p(3);
    }
  };
}
function CE(e, t, n) {
  var r = e.length, o = t.length, i, a;
  if (r === 0 && o === 0)
    return null;
  r < o ? (i = e, a = t) : (i = t, a = e);
  var s = {
    __EMPTY_ITEM__: !0
  };
  function c(p) {
    return p !== void 0 ? n(p) : s;
  }
  for (var l = null, f = Math.abs(r - o) !== 1, d = 0; d < a.length; d += 1) {
    var v = c(i[d]), g = c(a[d]);
    if (v !== g) {
      l = d, f = f || v !== c(a[d + 1]);
      break;
    }
  }
  return l === null ? null : {
    index: l,
    multiple: f
  };
}
function xE(e, t, n) {
  var r = u.useState(e), o = U(r, 2), i = o[0], a = o[1], s = u.useState(null), c = U(s, 2), l = c[0], f = c[1];
  return u.useEffect(function() {
    var d = CE(i || [], e || [], t);
    d?.index !== void 0 && (n?.(d.index), f(e[d.index])), a(e);
  }, [e]), [l];
}
var OE = (typeof navigator > "u" ? "undefined" : je(navigator)) === "object" && /Firefox/i.test(navigator.userAgent);
const gv = function(e, t) {
  var n = Ae(!1), r = Ae(null);
  function o() {
    clearTimeout(r.current), n.current = !0, r.current = setTimeout(function() {
      n.current = !1;
    }, 50);
  }
  var i = Ae({
    top: e,
    bottom: t
  });
  return i.current.top = e, i.current.bottom = t, function(a) {
    var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, c = (
      // Pass origin wheel when on the top
      a < 0 && i.current.top || // Pass origin wheel when on the bottom
      a > 0 && i.current.bottom
    );
    return s && c ? (clearTimeout(r.current), n.current = !1) : (!c || n.current) && o(), !n.current && c;
  };
};
function _E(e, t, n, r) {
  var o = Ae(0), i = Ae(null), a = Ae(null), s = Ae(!1), c = gv(t, n);
  function l(d) {
    if (e) {
      Tt.cancel(i.current);
      var v = d.deltaY;
      o.current += v, a.current = v, !c(v) && (OE || d.preventDefault(), i.current = Tt(function() {
        var g = s.current ? 10 : 1;
        r(o.current * g), o.current = 0;
      }));
    }
  }
  function f(d) {
    e && (s.current = d.detail === a.current);
  }
  return [l, f];
}
var RE = 14 / 15;
function PE(e, t, n) {
  var r = Ae(!1), o = Ae(0), i = Ae(null), a = Ae(null), s, c = function(v) {
    if (r.current) {
      var g = Math.ceil(v.touches[0].pageY), p = o.current - g;
      o.current = g, n(p) && v.preventDefault(), clearInterval(a.current), a.current = setInterval(function() {
        p *= RE, (!n(p, !0) || Math.abs(p) <= 0.1) && clearInterval(a.current);
      }, 16);
    }
  }, l = function() {
    r.current = !1, s();
  }, f = function(v) {
    s(), v.touches.length === 1 && !r.current && (r.current = !0, o.current = Math.ceil(v.touches[0].pageY), i.current = v.target, i.current.addEventListener("touchmove", c), i.current.addEventListener("touchend", l));
  };
  s = function() {
    i.current && (i.current.removeEventListener("touchmove", c), i.current.removeEventListener("touchend", l));
  }, vt(function() {
    return e && t.current.addEventListener("touchstart", f), function() {
      var d;
      (d = t.current) === null || d === void 0 || d.removeEventListener("touchstart", f), s(), clearInterval(a.current);
    };
  }, [e]);
}
var TE = ["prefixCls", "className", "height", "itemHeight", "fullHeight", "style", "data", "children", "itemKey", "virtual", "direction", "component", "onScroll", "onVisibleChange", "innerProps"], NE = [], ME = {
  overflowY: "auto",
  overflowAnchor: "none"
};
function IE(e, t) {
  var n = e.prefixCls, r = n === void 0 ? "rc-virtual-list" : n, o = e.className, i = e.height, a = e.itemHeight, s = e.fullHeight, c = s === void 0 ? !0 : s, l = e.style, f = e.data, d = e.children, v = e.itemKey, g = e.virtual, p = e.direction, h = e.component, m = h === void 0 ? "div" : h, y = e.onScroll, b = e.onVisibleChange, E = e.innerProps, w = ut(e, TE), S = !!(g !== !1 && i && a), C = S && f && a * f.length > i, _ = Yt(0), N = U(_, 2), M = N[0], R = N[1], k = Yt(!1), x = U(k, 2), O = x[0], P = x[1], I = Re(r, he({}, "".concat(r, "-rtl"), p === "rtl"), o), $ = f || NE, D = Ae(), B = Ae(), K = Ae(), ne = u.useCallback(function(ue) {
    return typeof v == "function" ? v(ue) : ue?.[v];
  }, [v]), ce = {
    getKey: ne
  };
  function j(ue) {
    R(function(pe) {
      var Qe;
      typeof ue == "function" ? Qe = ue(pe) : Qe = ue;
      var Ve = le(Qe);
      return D.current.scrollTop = Ve, Ve;
    });
  }
  var H = Ae({
    start: 0,
    end: $.length
  }), z = Ae(), G = xE($, ne), T = U(G, 1), q = T[0];
  z.current = q;
  var F = EE(ne, null, null), Y = U(F, 4), te = Y[0], Q = Y[1], A = Y[2], re = Y[3], L = u.useMemo(function() {
    if (!S)
      return {
        scrollHeight: void 0,
        start: 0,
        end: $.length - 1,
        offset: void 0
      };
    if (!C) {
      var ue;
      return {
        scrollHeight: ((ue = B.current) === null || ue === void 0 ? void 0 : ue.offsetHeight) || 0,
        start: 0,
        end: $.length - 1,
        offset: void 0
      };
    }
    for (var pe = 0, Qe, Ve, Je, Se = $.length, $e = 0; $e < Se; $e += 1) {
      var ot = $[$e], Me = ne(ot), xe = A.get(Me), tt = pe + (xe === void 0 ? a : xe);
      tt >= M && Qe === void 0 && (Qe = $e, Ve = pe), tt > M + i && Je === void 0 && (Je = $e), pe = tt;
    }
    return Qe === void 0 && (Qe = 0, Ve = 0, Je = Math.ceil(i / a)), Je === void 0 && (Je = $.length - 1), Je = Math.min(Je + 1, $.length), {
      scrollHeight: pe,
      start: Qe,
      end: Je,
      offset: Ve
    };
  }, [C, S, M, $, re, i]), Z = L.scrollHeight, se = L.start, ae = L.end, fe = L.offset;
  H.current.start = se, H.current.end = ae;
  var ge = Z - i, ee = Ae(ge);
  ee.current = ge;
  function le(ue) {
    var pe = ue;
    return Number.isNaN(ee.current) || (pe = Math.min(pe, ee.current)), pe = Math.max(pe, 0), pe;
  }
  var Ce = M <= 0, Ne = M >= ge, ie = gv(Ce, Ne);
  function de(ue) {
    var pe = ue;
    j(pe);
  }
  function ze(ue) {
    var pe = ue.currentTarget.scrollTop;
    pe !== M && j(pe), y?.(ue);
  }
  var Ye = _E(S, Ce, Ne, function(ue) {
    j(function(pe) {
      var Qe = pe + ue;
      return Qe;
    });
  }), Ge = U(Ye, 2), qe = Ge[0], Le = Ge[1];
  PE(S, D, function(ue, pe) {
    return ie(ue, pe) ? !1 : (qe({
      preventDefault: function() {
      },
      deltaY: ue
    }), !0);
  }), vt(function() {
    function ue(pe) {
      S && pe.preventDefault();
    }
    return D.current.addEventListener("wheel", qe), D.current.addEventListener("DOMMouseScroll", Le), D.current.addEventListener("MozMousePixelScroll", ue), function() {
      D.current && (D.current.removeEventListener("wheel", qe), D.current.removeEventListener("DOMMouseScroll", Le), D.current.removeEventListener("MozMousePixelScroll", ue));
    };
  }, [S]);
  var Xe = wE(D, $, A, a, ne, Q, j, function() {
    var ue;
    (ue = K.current) === null || ue === void 0 || ue.delayHidden();
  });
  u.useImperativeHandle(t, function() {
    return {
      scrollTo: Xe
    };
  }), vt(function() {
    if (b) {
      var ue = $.slice(se, ae + 1);
      b(ue, $);
    }
  }, [se, ae, $]);
  var Rt = bE($, se, ae, te, d, ce), rt = null;
  return i && (rt = V(he({}, c ? "height" : "maxHeight", i), ME), S && (rt.overflowY = "hidden", O && (rt.pointerEvents = "none"))), /* @__PURE__ */ u.createElement("div", Te({
    style: V(V({}, l), {}, {
      position: "relative"
    }),
    className: I
  }, w), /* @__PURE__ */ u.createElement(m, {
    className: "".concat(r, "-holder"),
    style: rt,
    ref: D,
    onScroll: ze
  }, /* @__PURE__ */ u.createElement(pv, {
    prefixCls: r,
    height: Z,
    offset: fe,
    onInnerResize: Q,
    ref: B,
    innerProps: E
  }, Rt)), S && /* @__PURE__ */ u.createElement(gE, {
    ref: K,
    prefixCls: r,
    scrollTop: M,
    height: i,
    scrollHeight: Z,
    count: $.length,
    direction: p,
    onScroll: de,
    onStartMove: function() {
      P(!0);
    },
    onStopMove: function() {
      P(!1);
    }
  }));
}
var yv = /* @__PURE__ */ u.forwardRef(IE);
yv.displayName = "List";
var bv = /* @__PURE__ */ u.createContext(null);
function $E() {
  return /(mac\sos|macintosh)/i.test(navigator.appVersion);
}
var AE = ["disabled", "title", "children", "style", "className"];
function uu(e) {
  return typeof e == "string" || typeof e == "number";
}
var FE = function(t, n) {
  var r = bS(), o = r.prefixCls, i = r.id, a = r.open, s = r.multiple, c = r.mode, l = r.searchValue, f = r.toggleOpen, d = r.notFoundContent, v = r.onPopupScroll, g = u.useContext(bv), p = g.flattenOptions, h = g.onActiveValue, m = g.defaultActiveFirstOption, y = g.onSelect, b = g.menuItemSelectedIcon, E = g.rawValues, w = g.fieldNames, S = g.virtual, C = g.direction, _ = g.listHeight, N = g.listItemHeight, M = "".concat(o, "-item"), R = Mi(function() {
    return p;
  }, [a, p], function(q, F) {
    return F[0] && q[1] !== F[1];
  }), k = u.useRef(null), x = function(F) {
    F.preventDefault();
  }, O = function(F) {
    k.current && k.current.scrollTo(typeof F == "number" ? {
      index: F
    } : F);
  }, P = function(F) {
    for (var Y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1, te = R.length, Q = 0; Q < te; Q += 1) {
      var A = (F + Q * Y + te) % te, re = R[A], L = re.group, Z = re.data;
      if (!L && !Z.disabled)
        return A;
    }
    return -1;
  }, I = u.useState(function() {
    return P(0);
  }), $ = U(I, 2), D = $[0], B = $[1], K = function(F) {
    var Y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    B(F);
    var te = {
      source: Y ? "keyboard" : "mouse"
    }, Q = R[F];
    if (!Q) {
      h(null, -1, te);
      return;
    }
    h(Q.value, F, te);
  };
  jt(function() {
    K(m !== !1 ? P(0) : -1);
  }, [R.length, l]);
  var ne = u.useCallback(function(q) {
    return E.has(q) && c !== "combobox";
  }, [c, me(E).toString(), E.size]);
  jt(function() {
    var q = setTimeout(function() {
      if (!s && a && E.size === 1) {
        var Y = Array.from(E)[0], te = R.findIndex(function(Q) {
          var A = Q.data;
          return A.value === Y;
        });
        te !== -1 && (K(te), O(te));
      }
    });
    if (a) {
      var F;
      (F = k.current) === null || F === void 0 || F.scrollTo(void 0);
    }
    return function() {
      return clearTimeout(q);
    };
  }, [a, l, p.length]);
  var ce = function(F) {
    F !== void 0 && y(F, {
      selected: !E.has(F)
    }), s || f(!1);
  };
  if (u.useImperativeHandle(n, function() {
    return {
      onKeyDown: function(F) {
        var Y = F.which, te = F.ctrlKey;
        switch (Y) {
          case J.N:
          case J.P:
          case J.UP:
          case J.DOWN: {
            var Q = 0;
            if (Y === J.UP ? Q = -1 : Y === J.DOWN ? Q = 1 : $E() && te && (Y === J.N ? Q = 1 : Y === J.P && (Q = -1)), Q !== 0) {
              var A = P(D + Q, Q);
              O(A), K(A, !0);
            }
            break;
          }
          case J.ENTER: {
            var re = R[D];
            re && !re.data.disabled ? ce(re.value) : ce(void 0), a && F.preventDefault();
            break;
          }
          case J.ESC:
            f(!1), a && F.stopPropagation();
        }
      },
      onKeyUp: function() {
      },
      scrollTo: function(F) {
        O(F);
      }
    };
  }), R.length === 0)
    return /* @__PURE__ */ u.createElement("div", {
      role: "listbox",
      id: "".concat(i, "_list"),
      className: "".concat(M, "-empty"),
      onMouseDown: x
    }, d);
  var j = Object.keys(w).map(function(q) {
    return w[q];
  }), H = function(F) {
    return F.label;
  };
  function z(q, F) {
    var Y = q.group;
    return {
      role: Y ? "presentation" : "option",
      id: "".concat(i, "_list_").concat(F)
    };
  }
  var G = function(F) {
    var Y = R[F];
    if (!Y)
      return null;
    var te = Y.data || {}, Q = te.value, A = Y.group, re = mi(te, !0), L = H(Y);
    return Y ? /* @__PURE__ */ u.createElement("div", Te({
      "aria-label": typeof L == "string" && !A ? L : null
    }, re, {
      key: F
    }, z(Y, F), {
      "aria-selected": ne(Q)
    }), Q) : null;
  }, T = {
    role: "listbox",
    id: "".concat(i, "_list")
  };
  return /* @__PURE__ */ u.createElement(u.Fragment, null, S && /* @__PURE__ */ u.createElement("div", Te({}, T, {
    style: {
      height: 0,
      width: 0,
      overflow: "hidden"
    }
  }), G(D - 1), G(D), G(D + 1)), /* @__PURE__ */ u.createElement(yv, {
    itemKey: "key",
    ref: k,
    data: R,
    height: _,
    itemHeight: N,
    fullHeight: !1,
    onMouseDown: x,
    onScroll: v,
    virtual: S,
    direction: C,
    innerProps: S ? null : T
  }, function(q, F) {
    var Y, te = q.group, Q = q.groupOption, A = q.data, re = q.label, L = q.value, Z = A.key;
    if (te) {
      var se, ae = (se = A.title) !== null && se !== void 0 ? se : uu(re) ? re.toString() : void 0;
      return /* @__PURE__ */ u.createElement("div", {
        className: Re(M, "".concat(M, "-group")),
        title: ae
      }, re !== void 0 ? re : Z);
    }
    var fe = A.disabled, ge = A.title;
    A.children;
    var ee = A.style, le = A.className, Ce = ut(A, AE), Ne = Bs(Ce, j), ie = ne(L), de = "".concat(M, "-option"), ze = Re(M, de, le, (Y = {}, he(Y, "".concat(de, "-grouped"), Q), he(Y, "".concat(de, "-active"), D === F && !fe), he(Y, "".concat(de, "-disabled"), fe), he(Y, "".concat(de, "-selected"), ie), Y)), Ye = H(q), Ge = !b || typeof b == "function" || ie, qe = typeof Ye == "number" ? Ye : Ye || L, Le = uu(qe) ? qe.toString() : void 0;
    return ge !== void 0 && (Le = ge), /* @__PURE__ */ u.createElement("div", Te({}, mi(Ne), S ? {} : z(q, F), {
      "aria-selected": ie,
      className: ze,
      title: Le,
      onMouseMove: function() {
        D === F || fe || K(F);
      },
      onClick: function() {
        fe || ce(L);
      },
      style: ee
    }), /* @__PURE__ */ u.createElement("div", {
      className: "".concat(de, "-content")
    }, qe), /* @__PURE__ */ u.isValidElement(b) || ie, Ge && /* @__PURE__ */ u.createElement(Si, {
      className: "".concat(M, "-option-state"),
      customizeIcon: b,
      customizeIconProps: {
        isSelected: ie
      }
    }, ie ? "✓" : null));
  }));
}, Sv = /* @__PURE__ */ u.forwardRef(FE);
Sv.displayName = "OptionList";
function DE(e) {
  var t = e.mode, n = e.options, r = e.children, o = e.backfill, i = e.allowClear, a = e.placeholder, s = e.getInputElement, c = e.showSearch, l = e.onSearch, f = e.defaultOpen, d = e.autoFocus, v = e.labelInValue, g = e.value, p = e.inputValue, h = e.optionLabelProp, m = Ei(t), y = c !== void 0 ? c : m || t === "combobox", b = n || vc(r);
  if (Fe(t !== "tags" || b.every(function(C) {
    return !C.disabled;
  }), "Please avoid setting option to disabled in tags mode since user can always type text as tag."), t === "tags" || t === "combobox") {
    var E = b.some(function(C) {
      return C.options ? C.options.some(function(_) {
        return typeof ("value" in _ ? _.value : _.key) == "number";
      }) : typeof ("value" in C ? C.value : C.key) == "number";
    });
    Fe(!E, "`value` of Option should not use number type when `mode` is `tags` or `combobox`.");
  }
  if (Fe(t !== "combobox" || !h, "`combobox` mode not support `optionLabelProp`. Please set `value` on Option directly."), Fe(t === "combobox" || !o, "`backfill` only works with `combobox` mode."), Fe(t === "combobox" || !s, "`getInputElement` only work with `combobox` mode."), ka(t !== "combobox" || !s || !i || !a, "Customize `getInputElement` should customize clear and placeholder logic instead of configuring `allowClear` and `placeholder`."), l && !y && t !== "combobox" && t !== "tags" && Fe(!1, "`onSearch` should work with `showSearch` instead of use alone."), ka(!f || d, "`defaultOpen` makes Select open without focus which means it will not close by click outside. You can set `autoFocus` if needed."), g != null) {
    var w = dc(g);
    Fe(!v || w.every(function(C) {
      return je(C) === "object" && ("key" in C || "value" in C);
    }), "`value` should in shape of `{ value: string | number, label?: ReactNode }` when you set `labelInValue` to `true`"), Fe(!m || Array.isArray(g), "`value` should be array when `mode` is `multiple` or `tags`");
  }
  if (r) {
    var S = null;
    Qn(r).some(function(C) {
      if (!/* @__PURE__ */ u.isValidElement(C) || !C.type)
        return !1;
      var _ = C, N = _.type;
      if (N.isSelectOption)
        return !1;
      if (N.isSelectOptGroup) {
        var M = Qn(C.props.children).every(function(R) {
          return !/* @__PURE__ */ u.isValidElement(R) || !C.type || R.type.isSelectOption ? !0 : (S = R.type, !1);
        });
        return !M;
      }
      return S = N, !0;
    }), S && Fe(!1, "`children` should be `Select.Option` or `Select.OptGroup` instead of `".concat(S.displayName || S.name || S, "`.")), Fe(p === void 0, "`inputValue` is deprecated, please use `searchValue` instead.");
  }
}
function LE(e, t) {
  if (e) {
    var n = function r(o) {
      for (var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, a = 0; a < o.length; a++) {
        var s = o[a];
        if (s[t?.value] === null)
          return Fe(!1, "`value` in Select options should not be `null`."), !0;
        if (!i && Array.isArray(s[t?.options]) && r(s[t?.options], !0))
          break;
      }
    };
    n(e);
  }
}
var kE = ["id", "mode", "prefixCls", "backfill", "fieldNames", "inputValue", "searchValue", "onSearch", "autoClearSearchValue", "onSelect", "onDeselect", "dropdownMatchSelectWidth", "filterOption", "filterSort", "optionFilterProp", "optionLabelProp", "options", "children", "defaultActiveFirstOption", "menuItemSelectedIcon", "virtual", "direction", "listHeight", "listItemHeight", "value", "defaultValue", "labelInValue", "onChange"], jE = ["inputValue"];
function HE(e) {
  return !e || je(e) !== "object";
}
var Ev = /* @__PURE__ */ u.forwardRef(function(e, t) {
  var n = e.id, r = e.mode, o = e.prefixCls, i = o === void 0 ? "rc-select" : o, a = e.backfill, s = e.fieldNames, c = e.inputValue, l = e.searchValue, f = e.onSearch, d = e.autoClearSearchValue, v = d === void 0 ? !0 : d, g = e.onSelect, p = e.onDeselect, h = e.dropdownMatchSelectWidth, m = h === void 0 ? !0 : h, y = e.filterOption, b = e.filterSort, E = e.optionFilterProp, w = e.optionLabelProp, S = e.options, C = e.children, _ = e.defaultActiveFirstOption, N = e.menuItemSelectedIcon, M = e.virtual, R = e.direction, k = e.listHeight, x = k === void 0 ? 200 : k, O = e.listItemHeight, P = O === void 0 ? 20 : O, I = e.value, $ = e.defaultValue, D = e.labelInValue, B = e.onChange, K = ut(e, kE), ne = fE(n), ce = Ei(r), j = !!(!S && C), H = u.useMemo(function() {
    return y === void 0 && r === "combobox" ? !1 : y;
  }, [y, r]), z = u.useMemo(
    function() {
      return hv(s, j);
    },
    /* eslint-disable react-hooks/exhaustive-deps */
    [
      // We stringify fieldNames to avoid unnecessary re-renders.
      JSON.stringify(s),
      j
    ]
    /* eslint-enable react-hooks/exhaustive-deps */
  ), G = di("", {
    value: l !== void 0 ? l : c,
    postState: function(X) {
      return X || "";
    }
  }), T = U(G, 2), q = T[0], F = T[1], Y = mE(S, C, z, E, w), te = Y.valueOptions, Q = Y.labelOptions, A = Y.options, re = u.useCallback(function(oe) {
    var X = dc(oe);
    return X.map(function(ve) {
      var ye, _e, He, Ct, bt;
      if (HE(ve))
        ye = ve;
      else {
        var Mt;
        He = ve.key, _e = ve.label, ye = (Mt = ve.value) !== null && Mt !== void 0 ? Mt : He;
      }
      var et = te.get(ye);
      if (et) {
        var Bt;
        if (_e === void 0 && (_e = et?.[w || z.label]), He === void 0 && (He = (Bt = et?.key) !== null && Bt !== void 0 ? Bt : ye), Ct = et?.disabled, bt = et?.title, process.env.NODE_ENV !== "production" && !w) {
          var It = et?.[z.label];
          It !== void 0 && !/* @__PURE__ */ u.isValidElement(It) && !/* @__PURE__ */ u.isValidElement(_e) && It !== _e && Fe(!1, "`label` of `value` is not same as `label` in Select options.");
        }
      }
      return {
        label: _e,
        value: ye,
        key: He,
        disabled: Ct,
        title: bt
      };
    });
  }, [z, w, te]), L = di($, {
    value: I
  }), Z = U(L, 2), se = Z[0], ae = Z[1], fe = u.useMemo(function() {
    var oe, X = re(se);
    return r === "combobox" && !((oe = X[0]) !== null && oe !== void 0 && oe.value) ? [] : X;
  }, [se, re, r]), ge = sE(fe, te), ee = U(ge, 2), le = ee[0], Ce = ee[1], Ne = u.useMemo(function() {
    if (!r && le.length === 1) {
      var oe = le[0];
      if (oe.value === null && (oe.label === null || oe.label === void 0))
        return [];
    }
    return le.map(function(X) {
      var ve;
      return V(V({}, X), {}, {
        label: (ve = X.label) !== null && ve !== void 0 ? ve : X.value
      });
    });
  }, [r, le]), ie = u.useMemo(function() {
    return new Set(le.map(function(oe) {
      return oe.value;
    }));
  }, [le]);
  u.useEffect(function() {
    if (r === "combobox") {
      var oe, X = (oe = le[0]) === null || oe === void 0 ? void 0 : oe.value;
      F(DS(X) ? String(X) : "");
    }
  }, [le]);
  var de = cu(function(oe, X) {
    var ve, ye = X ?? oe;
    return ve = {}, he(ve, z.value, oe), he(ve, z.label, ye), ve;
  }), ze = u.useMemo(function() {
    if (r !== "tags")
      return A;
    var oe = me(A), X = function(ye) {
      return te.has(ye);
    };
    return me(le).sort(function(ve, ye) {
      return ve.value < ye.value ? -1 : 1;
    }).forEach(function(ve) {
      var ye = ve.value;
      X(ye) || oe.push(de(ye, ve.label));
    }), oe;
  }, [de, A, te, le, r]), Ye = cE(ze, z, q, H, E), Ge = u.useMemo(function() {
    return r !== "tags" || !q || Ye.some(function(oe) {
      return oe[E || "value"] === q;
    }) ? Ye : [de(q)].concat(me(Ye));
  }, [de, E, r, Ye, q]), qe = u.useMemo(function() {
    return b ? me(Ge).sort(function(oe, X) {
      return b(oe, X);
    }) : Ge;
  }, [Ge, b]), Le = u.useMemo(function() {
    return rE(qe, {
      fieldNames: z,
      childrenAsData: j
    });
  }, [qe, z, j]), Xe = function(X) {
    var ve = re(X);
    if (ae(ve), B && // Trigger event only when value changed
    (ve.length !== le.length || ve.some(function(He, Ct) {
      var bt;
      return ((bt = le[Ct]) === null || bt === void 0 ? void 0 : bt.value) !== He?.value;
    }))) {
      var ye = D ? ve : ve.map(function(He) {
        return He.value;
      }), _e = ve.map(function(He) {
        return Cs(Ce(He.value));
      });
      B(
        // Value
        ce ? ye : ye[0],
        // Option
        ce ? _e : _e[0]
      );
    }
  }, Rt = u.useState(null), rt = U(Rt, 2), ue = rt[0], pe = rt[1], Qe = u.useState(0), Ve = U(Qe, 2), Je = Ve[0], Se = Ve[1], $e = _ !== void 0 ? _ : r !== "combobox", ot = u.useCallback(function(oe, X) {
    var ve = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, ye = ve.source, _e = ye === void 0 ? "keyboard" : ye;
    Se(X), a && r === "combobox" && oe !== null && _e === "keyboard" && pe(String(oe));
  }, [a, r]), Me = function(X, ve, ye) {
    var _e = function() {
      var Lt, $t = Ce(X);
      return [D ? {
        label: $t?.[z.label],
        value: X,
        key: (Lt = $t?.key) !== null && Lt !== void 0 ? Lt : X
      } : X, Cs($t)];
    };
    if (ve && g) {
      var He = _e(), Ct = U(He, 2), bt = Ct[0], Mt = Ct[1];
      g(bt, Mt);
    } else if (!ve && p && ye !== "clear") {
      var et = _e(), Bt = U(et, 2), It = Bt[0], yn = Bt[1];
      p(It, yn);
    }
  }, xe = cu(function(oe, X) {
    var ve, ye = ce ? X.selected : !0;
    ye ? ve = ce ? [].concat(me(le), [oe]) : [oe] : ve = le.filter(function(_e) {
      return _e.value !== oe;
    }), Xe(ve), Me(oe, ye), r === "combobox" ? pe("") : (!Ei || v) && (F(""), pe(""));
  }), tt = function(X, ve) {
    Xe(X);
    var ye = ve.type, _e = ve.values;
    (ye === "remove" || ye === "clear") && _e.forEach(function(He) {
      Me(He.value, !1, ye);
    });
  }, nt = function(X, ve) {
    if (F(X), pe(null), ve.source === "submit") {
      var ye = (X || "").trim();
      if (ye) {
        var _e = Array.from(new Set([].concat(me(ie), [ye])));
        Xe(_e), Me(ye, !0), F("");
      }
      return;
    }
    ve.source !== "blur" && (r === "combobox" && Xe(X), f?.(X));
  }, yt = function(X) {
    var ve = X;
    r !== "tags" && (ve = X.map(function(_e) {
      var He = Q.get(_e);
      return He?.value;
    }).filter(function(_e) {
      return _e !== void 0;
    }));
    var ye = Array.from(new Set([].concat(me(ie), me(ve))));
    Xe(ye), ye.forEach(function(_e) {
      Me(_e, !0);
    });
  }, Ee = u.useMemo(function() {
    var oe = M !== !1 && m !== !1;
    return V(V({}, Y), {}, {
      flattenOptions: Le,
      onActiveValue: ot,
      defaultActiveFirstOption: $e,
      onSelect: xe,
      menuItemSelectedIcon: N,
      rawValues: ie,
      fieldNames: z,
      virtual: oe,
      direction: R,
      listHeight: x,
      listItemHeight: P,
      childrenAsData: j
    });
  }, [Y, Le, ot, $e, xe, N, ie, z, M, m, x, P, j]);
  return process.env.NODE_ENV !== "production" && (DE(e), LE(A, z)), /* @__PURE__ */ u.createElement(bv.Provider, {
    value: Ee
  }, /* @__PURE__ */ u.createElement(mv, Te({}, K, {
    // >>> MISC
    id: ne,
    prefixCls: i,
    ref: t,
    omitDomProps: jE,
    mode: r,
    displayValues: Ne,
    onDisplayValuesChange: tt,
    direction: R,
    searchValue: q,
    onSearch: nt,
    autoClearSearchValue: v,
    onSearchSplit: yt,
    dropdownMatchSelectWidth: m,
    OptionList: Sv,
    emptyOptions: !Le.length,
    activeValue: ue,
    activeDescendantId: "".concat(ne, "_list_").concat(Je)
  })));
});
process.env.NODE_ENV !== "production" && (Ev.displayName = "Select");
var pc = Ev;
pc.Option = mc;
pc.OptGroup = hc;
function zE(e, t, n) {
  return Re({
    [`${e}-status-success`]: t === "success",
    [`${e}-status-warning`]: t === "warning",
    [`${e}-status-error`]: t === "error",
    [`${e}-status-validating`]: t === "validating",
    [`${e}-has-feedback`]: n
  });
}
const VE = (e, t) => t || e, wv = () => {
  const [, e] = $r(), n = new Pt(e.colorBgBase).toHsl().l < 0.5 ? {
    opacity: 0.65
  } : {};
  return /* @__PURE__ */ u.createElement("svg", {
    style: n,
    width: "184",
    height: "152",
    viewBox: "0 0 184 152",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ u.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /* @__PURE__ */ u.createElement("g", {
    transform: "translate(24 31.67)"
  }, /* @__PURE__ */ u.createElement("ellipse", {
    fillOpacity: ".8",
    fill: "#F5F5F7",
    cx: "67.797",
    cy: "106.89",
    rx: "67.797",
    ry: "12.668"
  }), /* @__PURE__ */ u.createElement("path", {
    d: "M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z",
    fill: "#AEB8C2"
  }), /* @__PURE__ */ u.createElement("path", {
    d: "M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z",
    fill: "url(#linearGradient-1)",
    transform: "translate(13.56)"
  }), /* @__PURE__ */ u.createElement("path", {
    d: "M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z",
    fill: "#F5F5F7"
  }), /* @__PURE__ */ u.createElement("path", {
    d: "M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z",
    fill: "#DCE0E6"
  })), /* @__PURE__ */ u.createElement("path", {
    d: "M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z",
    fill: "#DCE0E6"
  }), /* @__PURE__ */ u.createElement("g", {
    transform: "translate(149.65 15.383)",
    fill: "#FFF"
  }, /* @__PURE__ */ u.createElement("ellipse", {
    cx: "20.654",
    cy: "3.167",
    rx: "2.849",
    ry: "2.815"
  }), /* @__PURE__ */ u.createElement("path", {
    d: "M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"
  }))));
};
process.env.NODE_ENV !== "production" && (wv.displayName = "EmptyImage");
const BE = wv, Cv = () => {
  const [, e] = $r(), {
    colorFill: t,
    colorFillTertiary: n,
    colorFillQuaternary: r,
    colorBgContainer: o
  } = e, {
    borderColor: i,
    shadowColor: a,
    contentColor: s
  } = wr(() => ({
    borderColor: new Pt(t).onBackground(o).toHexShortString(),
    shadowColor: new Pt(n).onBackground(o).toHexShortString(),
    contentColor: new Pt(r).onBackground(o).toHexShortString()
  }), [t, n, r, o]);
  return /* @__PURE__ */ u.createElement("svg", {
    width: "64",
    height: "41",
    viewBox: "0 0 64 41",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ u.createElement("g", {
    transform: "translate(0 1)",
    fill: "none",
    fillRule: "evenodd"
  }, /* @__PURE__ */ u.createElement("ellipse", {
    fill: a,
    cx: "32",
    cy: "33",
    rx: "32",
    ry: "7"
  }), /* @__PURE__ */ u.createElement("g", {
    fillRule: "nonzero",
    stroke: i
  }, /* @__PURE__ */ u.createElement("path", {
    d: "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"
  }), /* @__PURE__ */ u.createElement("path", {
    d: "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",
    fill: s
  }))));
};
process.env.NODE_ENV !== "production" && (Cv.displayName = "SimpleImage");
const WE = Cv, UE = (e) => {
  const {
    componentCls: t,
    margin: n,
    marginXS: r,
    marginXL: o,
    fontSize: i,
    lineHeight: a
  } = e;
  return {
    [t]: {
      marginInline: r,
      fontSize: i,
      lineHeight: a,
      textAlign: "center",
      // 原来 &-image 没有父子结构，现在为了外层承担我们的hashId，改成父子结果
      [`${t}-image`]: {
        height: e.emptyImgHeight,
        marginBottom: r,
        opacity: e.opacityImage,
        img: {
          height: "100%"
        },
        svg: {
          maxWidth: "100%",
          height: "100%",
          margin: "auto"
        }
      },
      [`${t}-description`]: {
        color: e.colorText
      },
      // 原来 &-footer 没有父子结构，现在为了外层承担我们的hashId，改成父子结果
      [`${t}-footer`]: {
        marginTop: n
      },
      "&-normal": {
        marginBlock: o,
        color: e.colorTextDisabled,
        [`${t}-description`]: {
          color: e.colorTextDisabled
        },
        [`${t}-image`]: {
          height: e.emptyImgHeightMD
        }
      },
      "&-small": {
        marginBlock: r,
        color: e.colorTextDisabled,
        [`${t}-image`]: {
          height: e.emptyImgHeightSM
        }
      }
    }
  };
}, KE = yo("Empty", (e) => {
  const {
    componentCls: t,
    controlHeightLG: n
  } = e, r = Ht(e, {
    emptyImgCls: `${t}-img`,
    emptyImgHeight: n * 2.5,
    emptyImgHeightMD: n,
    emptyImgHeightSM: n * 0.875
  });
  return [UE(r)];
});
var GE = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const xv = /* @__PURE__ */ u.createElement(BE, null), Ov = /* @__PURE__ */ u.createElement(WE, null), Bi = (e) => {
  var {
    className: t,
    rootClassName: n,
    prefixCls: r,
    image: o = xv,
    description: i,
    children: a,
    imageStyle: s,
    style: c
  } = e, l = GE(e, ["className", "rootClassName", "prefixCls", "image", "description", "children", "imageStyle", "style"]);
  const {
    getPrefixCls: f,
    direction: d,
    empty: v
  } = u.useContext(Qt), g = f("empty", r), [p, h] = KE(g), [m] = Sg("Empty"), y = typeof i < "u" ? i : m?.description, b = typeof y == "string" ? y : "empty";
  let E = null;
  return typeof o == "string" ? E = /* @__PURE__ */ u.createElement("img", {
    alt: b,
    src: o
  }) : E = o, p(/* @__PURE__ */ u.createElement("div", Object.assign({
    className: Re(h, g, v?.className, {
      [`${g}-normal`]: o === Ov,
      [`${g}-rtl`]: d === "rtl"
    }, t, n),
    style: Object.assign(Object.assign({}, v?.style), c)
  }, l), /* @__PURE__ */ u.createElement("div", {
    className: `${g}-image`,
    style: s
  }, E), y && /* @__PURE__ */ u.createElement("div", {
    className: `${g}-description`
  }, y), a && /* @__PURE__ */ u.createElement("div", {
    className: `${g}-footer`
  }, a)));
};
Bi.PRESENTED_IMAGE_DEFAULT = xv;
Bi.PRESENTED_IMAGE_SIMPLE = Ov;
process.env.NODE_ENV !== "production" && (Bi.displayName = "Empty");
const Kr = Bi, qE = (e) => {
  const {
    componentName: t
  } = e, {
    getPrefixCls: n
  } = Ft(Qt), r = n("empty");
  switch (t) {
    case "Table":
    case "List":
      return /* @__PURE__ */ Pe.createElement(Kr, {
        image: Kr.PRESENTED_IMAGE_SIMPLE
      });
    case "Select":
    case "TreeSelect":
    case "Cascader":
    case "Transfer":
    case "Mentions":
      return /* @__PURE__ */ Pe.createElement(Kr, {
        image: Kr.PRESENTED_IMAGE_SIMPLE,
        className: `${r}-small`
      });
    default:
      return /* @__PURE__ */ Pe.createElement(Kr, null);
  }
}, YE = qE, XE = (e) => {
  const {
    controlPaddingHorizontal: t
  } = e;
  return {
    position: "relative",
    display: "block",
    minHeight: e.controlHeight,
    padding: `${(e.controlHeight - e.fontSize * e.lineHeight) / 2}px ${t}px`,
    color: e.colorText,
    fontWeight: "normal",
    fontSize: e.fontSize,
    lineHeight: e.lineHeight,
    boxSizing: "border-box"
  };
}, QE = (e) => {
  const {
    antCls: t,
    componentCls: n
  } = e, r = `${n}-item`;
  return [
    {
      [`${n}-dropdown`]: Object.assign(Object.assign({}, Li(e)), {
        position: "absolute",
        top: -9999,
        zIndex: e.zIndexPopup,
        boxSizing: "border-box",
        padding: e.paddingXXS,
        overflow: "hidden",
        fontSize: e.fontSize,
        // Fix select render lag of long text in chrome
        // https://github.com/ant-design/ant-design/issues/11456
        // https://github.com/ant-design/ant-design/issues/11843
        fontVariant: "initial",
        backgroundColor: e.colorBgElevated,
        borderRadius: e.borderRadiusLG,
        outline: "none",
        boxShadow: e.boxShadowSecondary,
        [`
            &${t}-slide-up-enter${t}-slide-up-enter-active${n}-dropdown-placement-bottomLeft,
            &${t}-slide-up-appear${t}-slide-up-appear-active${n}-dropdown-placement-bottomLeft
          `]: {
          animationName: Jd
        },
        [`
            &${t}-slide-up-enter${t}-slide-up-enter-active${n}-dropdown-placement-topLeft,
            &${t}-slide-up-appear${t}-slide-up-appear-active${n}-dropdown-placement-topLeft
          `]: {
          animationName: ev
        },
        [`&${t}-slide-up-leave${t}-slide-up-leave-active${n}-dropdown-placement-bottomLeft`]: {
          animationName: Zd
        },
        [`&${t}-slide-up-leave${t}-slide-up-leave-active${n}-dropdown-placement-topLeft`]: {
          animationName: tv
        },
        "&-hidden": {
          display: "none"
        },
        [`${r}`]: Object.assign(Object.assign({}, XE(e)), {
          cursor: "pointer",
          transition: `background ${e.motionDurationSlow} ease`,
          borderRadius: e.borderRadiusSM,
          // =========== Group ============
          "&-group": {
            color: e.colorTextDescription,
            fontSize: e.fontSizeSM,
            cursor: "default"
          },
          // =========== Option ===========
          "&-option": {
            display: "flex",
            "&-content": Object.assign({
              flex: "auto"
            }, Ja),
            "&-state": {
              flex: "none",
              display: "flex",
              alignItems: "center"
            },
            [`&-active:not(${r}-option-disabled)`]: {
              backgroundColor: e.controlItemBgHover
            },
            [`&-selected:not(${r}-option-disabled)`]: {
              color: e.colorText,
              fontWeight: e.fontWeightStrong,
              backgroundColor: e.controlItemBgActive,
              [`${r}-option-state`]: {
                color: e.colorPrimary
              }
            },
            "&-disabled": {
              [`&${r}-option-selected`]: {
                backgroundColor: e.colorBgContainerDisabled
              },
              color: e.colorTextDisabled,
              cursor: "not-allowed"
            },
            "&-grouped": {
              paddingInlineStart: e.controlPaddingHorizontal * 2
            }
          }
        }),
        // =========================== RTL ===========================
        "&-rtl": {
          direction: "rtl"
        }
      })
    },
    // Follow code may reuse in other components
    Xl(e, "slide-up"),
    Xl(e, "slide-down"),
    Yl(e, "move-up"),
    Yl(e, "move-down")
  ];
}, JE = QE, mr = 2, _v = (e) => {
  let {
    controlHeightSM: t,
    controlHeight: n,
    lineWidth: r
  } = e;
  const o = (n - t) / 2 - r, i = Math.ceil(o / 2);
  return [o, i];
};
function Ca(e, t) {
  const {
    componentCls: n,
    iconCls: r
  } = e, o = `${n}-selection-overflow`, i = e.controlHeightSM, [a] = _v(e), s = t ? `${n}-${t}` : "";
  return {
    [`${n}-multiple${s}`]: {
      fontSize: e.fontSize,
      /**
       * Do not merge `height` & `line-height` under style with `selection` & `search`, since chrome
       * may update to redesign with its align logic.
       */
      // =========================== Overflow ===========================
      [o]: {
        position: "relative",
        display: "flex",
        flex: "auto",
        flexWrap: "wrap",
        maxWidth: "100%",
        "&-item": {
          flex: "none",
          alignSelf: "center",
          maxWidth: "100%",
          display: "inline-flex"
        }
      },
      // ========================= Selector =========================
      [`${n}-selector`]: {
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        // Multiple is little different that horizontal is follow the vertical
        padding: `${a - mr}px ${mr * 2}px`,
        borderRadius: e.borderRadius,
        [`${n}-show-search&`]: {
          cursor: "text"
        },
        [`${n}-disabled&`]: {
          background: e.colorBgContainerDisabled,
          cursor: "not-allowed"
        },
        "&:after": {
          display: "inline-block",
          width: 0,
          margin: `${mr}px 0`,
          lineHeight: `${i}px`,
          visibility: "hidden",
          content: '"\\a0"'
        }
      },
      [`
        &${n}-show-arrow ${n}-selector,
        &${n}-allow-clear ${n}-selector
      `]: {
        paddingInlineEnd: e.fontSizeIcon + e.controlPaddingHorizontal
      },
      // ======================== Selections ========================
      [`${n}-selection-item`]: {
        position: "relative",
        display: "flex",
        flex: "none",
        boxSizing: "border-box",
        maxWidth: "100%",
        height: i,
        marginTop: mr,
        marginBottom: mr,
        lineHeight: `${i - e.lineWidth * 2}px`,
        background: e.colorFillSecondary,
        borderRadius: e.borderRadiusSM,
        cursor: "default",
        transition: `font-size ${e.motionDurationSlow}, line-height ${e.motionDurationSlow}, height ${e.motionDurationSlow}`,
        userSelect: "none",
        marginInlineEnd: mr * 2,
        paddingInlineStart: e.paddingXS,
        paddingInlineEnd: e.paddingXS / 2,
        [`${n}-disabled&`]: {
          color: e.colorTextDisabled,
          cursor: "not-allowed"
        },
        // It's ok not to do this, but 24px makes bottom narrow in view should adjust
        "&-content": {
          display: "inline-block",
          marginInlineEnd: e.paddingXS / 2,
          overflow: "hidden",
          whiteSpace: "pre",
          textOverflow: "ellipsis"
        },
        "&-remove": Object.assign(Object.assign({}, ec()), {
          display: "inline-flex",
          alignItems: "center",
          color: e.colorIcon,
          fontWeight: "bold",
          fontSize: 10,
          lineHeight: "inherit",
          cursor: "pointer",
          [`> ${r}`]: {
            verticalAlign: "-0.2em"
          },
          "&:hover": {
            color: e.colorIconHover
          }
        })
      },
      // ========================== Input ==========================
      [`${o}-item + ${o}-item`]: {
        [`${n}-selection-search`]: {
          marginInlineStart: 0
        }
      },
      [`${n}-selection-search`]: {
        display: "inline-flex",
        position: "relative",
        maxWidth: "100%",
        marginInlineStart: e.inputPaddingHorizontalBase - a,
        "\n          &-input,\n          &-mirror\n        ": {
          height: i,
          fontFamily: e.fontFamily,
          lineHeight: `${i}px`,
          transition: `all ${e.motionDurationSlow}`
        },
        "&-input": {
          width: "100%",
          minWidth: 4.1
          // fix search cursor missing
        },
        "&-mirror": {
          position: "absolute",
          top: 0,
          insetInlineStart: 0,
          insetInlineEnd: "auto",
          zIndex: 999,
          whiteSpace: "pre",
          visibility: "hidden"
        }
      },
      // ======================= Placeholder =======================
      [`${n}-selection-placeholder `]: {
        position: "absolute",
        top: "50%",
        insetInlineStart: e.inputPaddingHorizontalBase,
        insetInlineEnd: e.inputPaddingHorizontalBase,
        transform: "translateY(-50%)",
        transition: `all ${e.motionDurationSlow}`
      }
    }
  };
}
const ZE = (e) => {
  const {
    componentCls: t
  } = e, n = Ht(e, {
    controlHeight: e.controlHeightSM,
    controlHeightSM: e.controlHeightXS,
    borderRadius: e.borderRadiusSM,
    borderRadiusSM: e.borderRadiusXS
  }), r = Ht(e, {
    fontSize: e.fontSizeLG,
    controlHeight: e.controlHeightLG,
    controlHeightSM: e.controlHeight,
    borderRadius: e.borderRadiusLG,
    borderRadiusSM: e.borderRadius
  }), [, o] = _v(e);
  return [
    Ca(e),
    // ======================== Small ========================
    Ca(n, "sm"),
    // Padding
    {
      [`${t}-multiple${t}-sm`]: {
        [`${t}-selection-placeholder`]: {
          insetInline: e.controlPaddingHorizontalSM - e.lineWidth
        },
        // https://github.com/ant-design/ant-design/issues/29559
        [`${t}-selection-search`]: {
          marginInlineStart: o
        }
      }
    },
    // ======================== Large ========================
    Ca(r, "lg")
  ];
}, e2 = ZE;
function xa(e, t) {
  const {
    componentCls: n,
    inputPaddingHorizontalBase: r,
    borderRadius: o
  } = e, i = e.controlHeight - e.lineWidth * 2, a = Math.ceil(e.fontSize * 1.25), s = t ? `${n}-${t}` : "";
  return {
    [`${n}-single${s}`]: {
      fontSize: e.fontSize,
      // ========================= Selector =========================
      [`${n}-selector`]: Object.assign(Object.assign({}, Li(e)), {
        display: "flex",
        borderRadius: o,
        [`${n}-selection-search`]: {
          position: "absolute",
          top: 0,
          insetInlineStart: r,
          insetInlineEnd: r,
          bottom: 0,
          "&-input": {
            width: "100%"
          }
        },
        [`
          ${n}-selection-item,
          ${n}-selection-placeholder
        `]: {
          padding: 0,
          lineHeight: `${i}px`,
          transition: `all ${e.motionDurationSlow}, visibility 0s`,
          // Firefox inline-block position calculation is not same as Chrome & Safari. Patch this:
          "@supports (-moz-appearance: meterbar)": {
            lineHeight: `${i}px`
          }
        },
        [`${n}-selection-item`]: {
          position: "relative",
          userSelect: "none"
        },
        [`${n}-selection-placeholder`]: {
          transition: "none",
          pointerEvents: "none"
        },
        // For common baseline align
        [[
          "&:after",
          /* For '' value baseline align */
          `${n}-selection-item:after`,
          /* For undefined value baseline align */
          `${n}-selection-placeholder:after`
        ].join(",")]: {
          display: "inline-block",
          width: 0,
          visibility: "hidden",
          content: '"\\a0"'
        }
      }),
      [`
        &${n}-show-arrow ${n}-selection-item,
        &${n}-show-arrow ${n}-selection-placeholder
      `]: {
        paddingInlineEnd: a
      },
      // Opacity selection if open
      [`&${n}-open ${n}-selection-item`]: {
        color: e.colorTextPlaceholder
      },
      // ========================== Input ==========================
      // We only change the style of non-customize input which is only support by `combobox` mode.
      // Not customize
      [`&:not(${n}-customize-input)`]: {
        [`${n}-selector`]: {
          width: "100%",
          height: e.controlHeight,
          padding: `0 ${r}px`,
          [`${n}-selection-search-input`]: {
            height: i
          },
          "&:after": {
            lineHeight: `${i}px`
          }
        }
      },
      [`&${n}-customize-input`]: {
        [`${n}-selector`]: {
          "&:after": {
            display: "none"
          },
          [`${n}-selection-search`]: {
            position: "static",
            width: "100%"
          },
          [`${n}-selection-placeholder`]: {
            position: "absolute",
            insetInlineStart: 0,
            insetInlineEnd: 0,
            padding: `0 ${r}px`,
            "&:after": {
              display: "none"
            }
          }
        }
      }
    }
  };
}
function t2(e) {
  const {
    componentCls: t
  } = e, n = e.controlPaddingHorizontalSM - e.lineWidth;
  return [
    xa(e),
    // ======================== Small ========================
    // Shared
    xa(Ht(e, {
      controlHeight: e.controlHeightSM,
      borderRadius: e.borderRadiusSM
    }), "sm"),
    // padding
    {
      [`${t}-single${t}-sm`]: {
        [`&:not(${t}-customize-input)`]: {
          [`${t}-selection-search`]: {
            insetInlineStart: n,
            insetInlineEnd: n
          },
          [`${t}-selector`]: {
            padding: `0 ${n}px`
          },
          // With arrow should provides `padding-right` to show the arrow
          [`&${t}-show-arrow ${t}-selection-search`]: {
            insetInlineEnd: n + e.fontSize * 1.5
          },
          [`
            &${t}-show-arrow ${t}-selection-item,
            &${t}-show-arrow ${t}-selection-placeholder
          `]: {
            paddingInlineEnd: e.fontSize * 1.5
          }
        }
      }
    },
    // ======================== Large ========================
    // Shared
    xa(Ht(e, {
      controlHeight: e.controlHeightLG,
      fontSize: e.fontSizeLG,
      borderRadius: e.borderRadiusLG
    }), "lg")
  ];
}
const n2 = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    position: "relative",
    backgroundColor: e.colorBgContainer,
    border: `${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,
    transition: `all ${e.motionDurationMid} ${e.motionEaseInOut}`,
    input: {
      cursor: "pointer"
    },
    [`${t}-show-search&`]: {
      cursor: "text",
      input: {
        cursor: "auto",
        color: "inherit"
      }
    },
    [`${t}-disabled&`]: {
      color: e.colorTextDisabled,
      background: e.colorBgContainerDisabled,
      cursor: "not-allowed",
      [`${t}-multiple&`]: {
        background: e.colorBgContainerDisabled
      },
      input: {
        cursor: "not-allowed"
      }
    }
  };
}, Oa = function(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  const {
    componentCls: r,
    borderHoverColor: o,
    outlineColor: i,
    antCls: a
  } = t, s = n ? {
    [`${r}-selector`]: {
      borderColor: o
    }
  } : {};
  return {
    [e]: {
      [`&:not(${r}-disabled):not(${r}-customize-input):not(${a}-pagination-size-changer)`]: Object.assign(Object.assign({}, s), {
        [`${r}-focused& ${r}-selector`]: {
          borderColor: o,
          boxShadow: `0 0 0 ${t.controlOutlineWidth}px ${i}`,
          outline: 0
        },
        [`&:hover ${r}-selector`]: {
          borderColor: o
        }
      })
    }
  };
}, r2 = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [`${t}-selection-search-input`]: {
      margin: 0,
      padding: 0,
      background: "transparent",
      border: "none",
      outline: "none",
      appearance: "none",
      "&::-webkit-search-cancel-button": {
        display: "none",
        "-webkit-appearance": "none"
      }
    }
  };
}, o2 = (e) => {
  const {
    componentCls: t,
    inputPaddingHorizontalBase: n,
    iconCls: r
  } = e;
  return {
    [t]: Object.assign(Object.assign({}, Li(e)), {
      position: "relative",
      display: "inline-block",
      cursor: "pointer",
      [`&:not(${t}-customize-input) ${t}-selector`]: Object.assign(Object.assign({}, n2(e)), r2(e)),
      // [`&:not(&-disabled):hover ${selectCls}-selector`]: {
      //   ...genHoverStyle(token),
      // },
      // ======================== Selection ========================
      [`${t}-selection-item`]: Object.assign({
        flex: 1,
        fontWeight: "normal"
      }, Ja),
      // ======================= Placeholder =======================
      [`${t}-selection-placeholder`]: Object.assign(Object.assign({}, Ja), {
        flex: 1,
        color: e.colorTextPlaceholder,
        pointerEvents: "none"
      }),
      // ========================== Arrow ==========================
      [`${t}-arrow`]: Object.assign(Object.assign({}, ec()), {
        position: "absolute",
        top: "50%",
        insetInlineStart: "auto",
        insetInlineEnd: n,
        height: e.fontSizeIcon,
        marginTop: -e.fontSizeIcon / 2,
        color: e.colorTextQuaternary,
        fontSize: e.fontSizeIcon,
        lineHeight: 1,
        textAlign: "center",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        [r]: {
          verticalAlign: "top",
          transition: `transform ${e.motionDurationSlow}`,
          "> svg": {
            verticalAlign: "top"
          },
          [`&:not(${t}-suffix)`]: {
            pointerEvents: "auto"
          }
        },
        [`${t}-disabled &`]: {
          cursor: "not-allowed"
        },
        "> *:not(:last-child)": {
          marginInlineEnd: 8
          // FIXME: magic
        }
      }),
      // ========================== Clear ==========================
      [`${t}-clear`]: {
        position: "absolute",
        top: "50%",
        insetInlineStart: "auto",
        insetInlineEnd: n,
        zIndex: 1,
        display: "inline-block",
        width: e.fontSizeIcon,
        height: e.fontSizeIcon,
        marginTop: -e.fontSizeIcon / 2,
        color: e.colorTextQuaternary,
        fontSize: e.fontSizeIcon,
        fontStyle: "normal",
        lineHeight: 1,
        textAlign: "center",
        textTransform: "none",
        background: e.colorBgContainer,
        cursor: "pointer",
        opacity: 0,
        transition: `color ${e.motionDurationMid} ease, opacity ${e.motionDurationSlow} ease`,
        textRendering: "auto",
        "&:before": {
          display: "block"
        },
        "&:hover": {
          color: e.colorTextTertiary
        }
      },
      "&:hover": {
        [`${t}-clear`]: {
          opacity: 1
        }
      }
    }),
    // ========================= Feedback ==========================
    [`${t}-has-feedback`]: {
      [`${t}-clear`]: {
        insetInlineEnd: n + e.fontSize + e.paddingXS
      }
    }
  };
}, i2 = (e) => {
  const {
    componentCls: t
  } = e;
  return [
    {
      [t]: {
        // ==================== BorderLess ====================
        [`&-borderless ${t}-selector`]: {
          backgroundColor: "transparent !important",
          borderColor: "transparent !important",
          boxShadow: "none !important"
        },
        // ==================== In Form ====================
        [`&${t}-in-form-item`]: {
          width: "100%"
        }
      }
    },
    // =====================================================
    // ==                       LTR                       ==
    // =====================================================
    // Base
    o2(e),
    // Single
    t2(e),
    // Multiple
    e2(e),
    // Dropdown
    JE(e),
    // =====================================================
    // ==                       RTL                       ==
    // =====================================================
    {
      [`${t}-rtl`]: {
        direction: "rtl"
      }
    },
    // =====================================================
    // ==                     Status                      ==
    // =====================================================
    Oa(t, Ht(e, {
      borderHoverColor: e.colorPrimaryHover,
      outlineColor: e.controlOutline
    })),
    Oa(`${t}-status-error`, Ht(e, {
      borderHoverColor: e.colorErrorHover,
      outlineColor: e.colorErrorOutline
    }), !0),
    Oa(`${t}-status-warning`, Ht(e, {
      borderHoverColor: e.colorWarningHover,
      outlineColor: e.colorWarningOutline
    }), !0),
    // =====================================================
    // ==             Space Compact                       ==
    // =====================================================
    Ld(e, {
      borderElCls: `${t}-selector`,
      focusElCls: `${t}-focused`
    })
  ];
}, a2 = yo("Select", (e, t) => {
  let {
    rootPrefixCls: n
  } = t;
  const r = Ht(e, {
    rootPrefixCls: n,
    inputPaddingHorizontalBase: e.paddingSM - 1
  });
  return [i2(r)];
}, (e) => ({
  zIndexPopup: e.zIndexPopupBase + 50
})), s2 = (e) => {
  const n = {
    overflow: {
      adjustX: !0,
      adjustY: !0,
      shiftY: !0
    },
    htmlRegion: e === "scroll" ? "scroll" : "visible",
    _experimental: {
      dynamicInset: !0
    }
  };
  return {
    bottomLeft: Object.assign(Object.assign({}, n), {
      points: ["tl", "bl"],
      offset: [0, 4]
    }),
    bottomRight: Object.assign(Object.assign({}, n), {
      points: ["tr", "br"],
      offset: [0, 4]
    }),
    topLeft: Object.assign(Object.assign({}, n), {
      points: ["bl", "tl"],
      offset: [0, -4]
    }),
    topRight: Object.assign(Object.assign({}, n), {
      points: ["br", "tr"],
      offset: [0, -4]
    })
  };
};
function c2(e, t) {
  return e || s2(t);
}
function l2(e) {
  return e ?? !0;
}
function u2(e) {
  let {
    suffixIcon: t,
    clearIcon: n,
    menuItemSelectedIcon: r,
    removeIcon: o,
    loading: i,
    multiple: a,
    hasFeedback: s,
    prefixCls: c,
    showArrow: l,
    feedbackIcon: f
  } = e;
  const d = n ?? /* @__PURE__ */ u.createElement(gd, null), v = (m) => /* @__PURE__ */ u.createElement(u.Fragment, null, l !== !1 && m, s && f);
  let g = null;
  if (t !== void 0)
    g = v(t);
  else if (i)
    g = v(/* @__PURE__ */ u.createElement(ic, {
      spin: !0
    }));
  else {
    const m = `${c}-suffix`;
    g = (y) => {
      let {
        open: b,
        showSearch: E
      } = y;
      return v(b && E ? /* @__PURE__ */ u.createElement(X1, {
        className: m
      }) : /* @__PURE__ */ u.createElement(G1, {
        className: m
      }));
    };
  }
  let p = null;
  r !== void 0 ? p = r : a ? p = /* @__PURE__ */ u.createElement(W1, null) : p = null;
  let h = null;
  return o !== void 0 ? h = o : h = /* @__PURE__ */ u.createElement(bd, null), {
    clearIcon: d,
    suffixIcon: g,
    itemIcon: p,
    removeIcon: h
  };
}
var f2 = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const Rv = "SECRET_COMBOBOX_MODE_DO_NOT_USE", Pv = (e, t) => {
  var n, {
    prefixCls: r,
    bordered: o = !0,
    className: i,
    rootClassName: a,
    getPopupContainer: s,
    popupClassName: c,
    dropdownClassName: l,
    listHeight: f = 256,
    placement: d,
    listItemHeight: v = 24,
    size: g,
    disabled: p,
    notFoundContent: h,
    status: m,
    showArrow: y,
    builtinPlacements: b,
    dropdownMatchSelectWidth: E,
    popupMatchSelectWidth: w,
    direction: S,
    style: C
  } = e, _ = f2(e, ["prefixCls", "bordered", "className", "rootClassName", "getPopupContainer", "popupClassName", "dropdownClassName", "listHeight", "placement", "listItemHeight", "size", "disabled", "notFoundContent", "status", "showArrow", "builtinPlacements", "dropdownMatchSelectWidth", "popupMatchSelectWidth", "direction", "style"]);
  const {
    getPopupContainer: N,
    getPrefixCls: M,
    renderEmpty: R,
    direction: k,
    virtual: x,
    popupMatchSelectWidth: O,
    popupOverflow: P,
    select: I
  } = u.useContext(Qt), $ = M("select", r), D = M(), B = S ?? k, {
    compactSize: K,
    compactItemClassnames: ne
  } = Ad($, B), [ce, j] = a2($), H = u.useMemo(() => {
    const {
      mode: de
    } = _;
    if (de !== "combobox")
      return de === Rv ? "combobox" : de;
  }, [_.mode]), z = H === "multiple" || H === "tags", G = l2(y), T = (n = w ?? E) !== null && n !== void 0 ? n : O, {
    status: q,
    hasFeedback: F,
    isFormItemInput: Y,
    feedbackIcon: te
  } = u.useContext(tS), Q = VE(q, m);
  let A;
  h !== void 0 ? A = h : H === "combobox" ? A = null : A = R?.("Select") || /* @__PURE__ */ u.createElement(YE, {
    componentName: "Select"
  });
  const {
    suffixIcon: re,
    itemIcon: L,
    removeIcon: Z,
    clearIcon: se
  } = u2(Object.assign(Object.assign({}, _), {
    multiple: z,
    hasFeedback: F,
    feedbackIcon: te,
    showArrow: G,
    prefixCls: $
  })), ae = Bs(_, ["suffixIcon", "itemIcon"]), fe = Re(c || l, {
    [`${$}-dropdown-${B}`]: B === "rtl"
  }, a, j), ge = $d((de) => {
    var ze;
    return (ze = g ?? K) !== null && ze !== void 0 ? ze : de;
  }), ee = u.useContext(tc), le = p ?? ee, Ce = Re({
    [`${$}-lg`]: ge === "large",
    [`${$}-sm`]: ge === "small",
    [`${$}-rtl`]: B === "rtl",
    [`${$}-borderless`]: !o,
    [`${$}-in-form-item`]: Y
  }, zE($, Q, F), ne, I?.className, i, a, j), Ne = u.useMemo(() => d !== void 0 ? d : B === "rtl" ? "bottomRight" : "bottomLeft", [d, B]), ie = c2(b, P);
  return process.env.NODE_ENV !== "production" && (process.env.NODE_ENV !== "production" && rn(!l, "Select", "`dropdownClassName` is deprecated. Please use `popupClassName` instead."), process.env.NODE_ENV !== "production" && rn(E === void 0, "Select", "`dropdownMatchSelectWidth` is deprecated. Please use `popupMatchSelectWidth` instead.")), ce(/* @__PURE__ */ u.createElement(pc, Object.assign({
    ref: t,
    virtual: x,
    showSearch: I?.showSearch
  }, ae, {
    style: Object.assign(Object.assign({}, I?.style), C),
    dropdownMatchSelectWidth: T,
    builtinPlacements: ie,
    transitionName: z1(D, H1(d), _.transitionName),
    listHeight: f,
    listItemHeight: v,
    mode: H,
    prefixCls: $,
    placement: Ne,
    direction: B,
    inputIcon: re,
    menuItemSelectedIcon: L,
    removeIcon: Z,
    clearIcon: se,
    notFoundContent: A,
    className: Ce,
    getPopupContainer: s || N,
    dropdownClassName: fe,
    showArrow: F || G,
    disabled: le
  })));
};
process.env.NODE_ENV !== "production" && (Pv.displayName = "Select");
const tr = /* @__PURE__ */ u.forwardRef(Pv), d2 = yS(tr);
tr.SECRET_COMBOBOX_MODE_DO_NOT_USE = Rv;
tr.Option = mc;
tr.OptGroup = hc;
tr._InternalPanelDoNotUseOrYouWillBeFired = d2;
process.env.NODE_ENV !== "production" && (tr.displayName = "Select");
const v2 = tr;
let en = null, Gn = (e) => e(), co = [], wi = {};
function h2() {
  const {
    prefixCls: e,
    getContainer: t,
    duration: n,
    rtl: r,
    maxCount: o,
    top: i
  } = wi, a = e ?? ud().getPrefixCls("message"), s = t?.() || document.body;
  return {
    prefixCls: a,
    container: s,
    duration: n,
    rtl: r,
    maxCount: o,
    top: i
  };
}
const m2 = /* @__PURE__ */ u.forwardRef((e, t) => {
  const n = () => {
    const {
      prefixCls: v,
      container: g,
      maxCount: p,
      duration: h,
      rtl: m,
      top: y
    } = h2();
    return {
      prefixCls: v,
      getContainer: () => g,
      maxCount: p,
      duration: h,
      rtl: m,
      top: y
    };
  }, [r, o] = u.useState(n), [i, a] = Td(r), s = ud(), c = s.getRootPrefixCls(), l = s.getIconPrefixCls(), f = s.getTheme(), d = () => {
    o(n);
  };
  return u.useEffect(d, []), u.useImperativeHandle(t, () => {
    const v = Object.assign({}, i);
    return Object.keys(v).forEach((g) => {
      v[g] = function() {
        return d(), i[g].apply(i, arguments);
      };
    }), {
      instance: v,
      sync: d
    };
  }), /* @__PURE__ */ u.createElement(rc, {
    prefixCls: c,
    iconPrefixCls: l,
    theme: f
  }, a);
});
function Wi() {
  if (!en) {
    const e = document.createDocumentFragment(), t = {
      fragment: e
    };
    en = t, Gn(() => {
      Nd(/* @__PURE__ */ u.createElement(m2, {
        ref: (n) => {
          const {
            instance: r,
            sync: o
          } = n || {};
          Promise.resolve().then(() => {
            !t.instance && r && (t.instance = r, t.sync = o, Wi());
          });
        }
      }), e);
    });
    return;
  }
  en.instance && (co.forEach((e) => {
    const {
      type: t,
      skipped: n
    } = e;
    if (!n)
      switch (t) {
        case "open": {
          Gn(() => {
            const r = en.instance.open(Object.assign(Object.assign({}, wi), e.config));
            r?.then(e.resolve), e.setCloseFn(r);
          });
          break;
        }
        case "destroy":
          Gn(() => {
            en?.instance.destroy(e.key);
          });
          break;
        default:
          Gn(() => {
            var r;
            const o = (r = en.instance)[t].apply(r, me(e.args));
            o?.then(e.resolve), e.setCloseFn(o);
          });
      }
  }), co = []);
}
function p2(e) {
  wi = Object.assign(Object.assign({}, wi), e), Gn(() => {
    var t;
    (t = en?.sync) === null || t === void 0 || t.call(en);
  });
}
function g2(e) {
  const t = ac((n) => {
    let r;
    const o = {
      type: "open",
      config: e,
      resolve: n,
      setCloseFn: (i) => {
        r = i;
      }
    };
    return co.push(o), () => {
      r ? Gn(() => {
        r();
      }) : o.skipped = !0;
    };
  });
  return Wi(), t;
}
function y2(e, t) {
  process.env.NODE_ENV !== "production" && V0("message");
  const n = ac((r) => {
    let o;
    const i = {
      type: e,
      args: t,
      resolve: r,
      setCloseFn: (a) => {
        o = a;
      }
    };
    return co.push(i), () => {
      o ? Gn(() => {
        o();
      }) : i.skipped = !0;
    };
  });
  return Wi(), n;
}
function b2(e) {
  co.push({
    type: "destroy",
    key: e
  }), Wi();
}
const S2 = ["success", "info", "warning", "error", "loading"], E2 = {
  open: g2,
  destroy: b2,
  config: p2,
  useMessage: Hy,
  _InternalPanelDoNotUseOrYouWillBeFired: Ay
}, Tv = E2;
S2.forEach((e) => {
  Tv[e] = function() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return y2(e, n);
  };
});
process.env.NODE_ENV;
process.env.NODE_ENV;
const w2 = Tv, Nv = fo(
  {}
), Yw = ({ children: e }) => {
  const [t, n] = w2.useMessage(), r = ({ type: o, message: i }) => {
    t.open({
      type: o ?? "info",
      content: i,
      duration: 5
    });
  };
  return /* @__PURE__ */ _u(Is, { children: [
    n,
    /* @__PURE__ */ ct(Nv.Provider, { value: { open: r }, children: e })
  ] });
}, Xw = () => Ft(Nv), Qw = () => {
  jt(() => (document.body.style.overflow = "hidden", () => {
    document.body.style.overflow = "auto";
  }));
}, Jw = (e) => typeof e == "object" && e !== null, C2 = (e) => typeof e == "string", Zw = (e) => typeof e == "function";
class eC {
  constructor(t) {
    this.isDisabled = !1, this.isDisabled = t ?? this.isDisabled;
  }
  get(t, n) {
    if (this.isDisabled)
      return n;
    const r = localStorage.getItem(t);
    return r ? x2(r) ? JSON.parse(r) : r : n;
  }
  set(t, n) {
    if (!(this.isDisabled || !(t in pm))) {
      if (C2(n))
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
const x2 = (e) => {
  try {
    JSON.parse(e);
  } catch {
    return !1;
  }
  return !0;
};
var Mv = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, fu = Pe.createContext && Pe.createContext(Mv), Fn = globalThis && globalThis.__assign || function() {
  return Fn = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var o in t)
        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, Fn.apply(this, arguments);
}, O2 = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
function Iv(e) {
  return e && e.map(function(t, n) {
    return Pe.createElement(t.tag, Fn({
      key: n
    }, t.attr), Iv(t.child));
  });
}
function Vt(e) {
  return function(t) {
    return Pe.createElement(_2, Fn({
      attr: Fn({}, e.attr)
    }, t), Iv(e.child));
  };
}
function _2(e) {
  var t = function(n) {
    var r = e.attr, o = e.size, i = e.title, a = O2(e, ["attr", "size", "title"]), s = o || n.size || "1em", c;
    return n.className && (c = n.className), e.className && (c = (c ? c + " " : "") + e.className), Pe.createElement("svg", Fn({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, n.attr, r, a, {
      className: c,
      style: Fn(Fn({
        color: e.color || n.color
      }, n.style), e.style),
      height: s,
      width: s,
      xmlns: "http://www.w3.org/2000/svg"
    }), i && Pe.createElement("title", null, i), e.children);
  };
  return fu !== void 0 ? Pe.createElement(fu.Consumer, null, function(n) {
    return t(n);
  }) : t(Mv);
}
function tC(e) {
  return Vt({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" } }] })(e);
}
function nC(e) {
  return Vt({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M145 96l66 746.6L511.8 928l299.6-85.4L878.7 96H145zm610.9 700.6l-244.1 69.6-245.2-69.6-56.7-641.2h603.8l-57.8 641.2zM281 249l1.7 24.3 22.7 253.5h206.5v-.1h112.9l-11.4 118.5L511 672.9v.2h-.8l-102.4-27.7-6.5-73.2h-91l11.3 144.7 188.6 52h1.7v-.4l187.7-51.7 1.7-16.3 21.2-242.2 3.2-24.3H511v.2H389.9l-8.2-94.2h352.1l1.7-19.5 4.8-47.2L742 249H511z" } }] })(e);
}
function rC(e) {
  return Vt({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }, { tag: "path", attr: { d: "M464 336a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z" } }] })(e);
}
function oC(e) {
  return Vt({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M847.9 592H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h605.2L612.9 851c-4.1 5.2-.4 13 6.3 13h72.5c4.9 0 9.5-2.2 12.6-6.1l168.8-214.1c16.5-21 1.6-51.8-25.2-51.8zM872 356H266.8l144.3-183c4.1-5.2.4-13-6.3-13h-72.5c-4.9 0-9.5 2.2-12.6 6.1L150.9 380.2c-16.5 21-1.6 51.8 25.1 51.8h696c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z" } }] })(e);
}
function iC(e) {
  return Vt({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { d: "M5 0h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2 2 2 0 0 1-2 2H3a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1H1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1H3a2 2 0 0 1 2-2z" } }, { tag: "path", attr: { d: "M1 6v-.5a.5.5 0 0 1 1 0V6h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V9h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 2.5v.5H.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H2v-.5a.5.5 0 0 0-1 0z" } }] })(e);
}
function aC(e) {
  return Vt({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { d: "M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" } }] })(e);
}
function sC(e) {
  return Vt({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M9.25 12a.75.75 0 0 1-.22.53l-2.75 2.75a.75.75 0 0 1-1.06-1.06L7.44 12 5.22 9.78a.75.75 0 1 1 1.06-1.06l2.75 2.75c.141.14.22.331.22.53Zm2 2a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5h-5Z" } }, { tag: "path", attr: { d: "M0 4.75C0 3.784.784 3 1.75 3h20.5c.966 0 1.75.784 1.75 1.75v14.5A1.75 1.75 0 0 1 22.25 21H1.75A1.75 1.75 0 0 1 0 19.25Zm1.75-.25a.25.25 0 0 0-.25.25v14.5c0 .138.112.25.25.25h20.5a.25.25 0 0 0 .25-.25V4.75a.25.25 0 0 0-.25-.25Z" } }] })(e);
}
function cC(e) {
  return Vt({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", stroke: "#000", strokeWidth: "2", d: "M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M5,5 L19,19" } }] })(e);
}
function lC(e) {
  return Vt({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01v0a2.83 2.83 0 0 1 0-4L17 3" } }, { tag: "path", attr: { d: "m16 2 6 6" } }, { tag: "path", attr: { d: "M12 16H4" } }] })(e);
}
function uC(e) {
  return Vt({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M11 6c1.38 0 2.63.56 3.54 1.46L12 10h6V4l-2.05 2.05A6.976 6.976 0 0011 4c-3.53 0-6.43 2.61-6.92 6H6.1A5 5 0 0111 6zm5.64 9.14A6.89 6.89 0 0017.92 12H15.9a5 5 0 01-4.9 4c-1.38 0-2.63-.56-3.54-1.46L10 12H4v6l2.05-2.05A6.976 6.976 0 0011 18c1.55 0 2.98-.51 4.14-1.36L20 21.49 21.49 20l-4.85-4.86z" } }] })(e);
}
function fC(e) {
  return Vt({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M576 736l-32-.001v-286c0-.336-.096-.656-.096-1.008s.096-.655.096-.991c0-17.664-14.336-32-32-32h-64c-17.664 0-32 14.336-32 32s14.336 32 32 32h32v256h-32c-17.664 0-32 14.336-32 32s14.336 32 32 32h128c17.664 0 32-14.336 32-32s-14.336-32-32-32zm-64-384.001c35.344 0 64-28.656 64-64s-28.656-64-64-64-64 28.656-64 64 28.656 64 64 64zm0-352c-282.768 0-512 229.232-512 512 0 282.784 229.232 512 512 512 282.784 0 512-229.216 512-512 0-282.768-229.216-512-512-512zm0 961.008c-247.024 0-448-201.984-448-449.01 0-247.024 200.976-448 448-448s448 200.977 448 448-200.976 449.01-448 449.01z" } }] })(e);
}
function dC(e) {
  return Vt({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M685.904 383.184l275.264-273.572-.896 155.072c-.289 12.928 9.967 24.176 22.912 23.888l16.416-.016c12.944-.304 23.648-8 23.92-20.928l.672-231.008c0-.223-.88-.399-.88-.623l1.264-11.712c.128-6.496-1.391-12.288-5.584-16.431-4.143-4.176-9.951-6.72-16.4-6.544l-11.696.272c-.223 0-.399.08-.64.113L760.77.687c-12.928.288-23.632 10.976-23.92 23.92l-.032 16.417c1.967 15.248 13.952 24.16 26.88 23.872l151.248.4L640.657 337.92c-12.496 12.496-12.496 32.752 0 45.264 12.496 12.48 32.752 12.48 45.247 0zM339.088 640.812L63.825 913.532l.88-154.224c.304-12.944-9.969-24.192-22.897-23.904l-17.423.032c-12.96.32-23.649 8-23.921 20.944l-.672 231.008c0 .224.88.367.88.623l-1.264 11.68c-.144 6.496 1.376 12.32 5.584 16.433 4.128 4.192 9.952 6.72 16.384 6.56l11.712-.288c.223 0 .383-.096.64-.096l230.495 1.008c12.928-.32 23.617-11.009 23.92-23.936l.032-16.432c-1.967-15.216-13.952-24.16-26.88-23.872l-151.247-.4L384.32 686.076c12.496-12.497 12.496-32.752 0-45.248s-32.737-12.512-45.233-.016zm685.122 346.56l-.672-231.01c-.288-12.944-10.992-20.624-23.92-20.944l-16.416-.032c-12.944-.289-23.184 10.975-22.912 23.903l.896 155.072-275.28-273.552c-12.496-12.496-32.752-12.496-45.248 0s-12.496 32.752 0 45.248L914.93 958.649l-151.232.4c-12.928-.288-24.912 8.657-26.88 23.872l.032 16.432c.304 12.944 11.008 23.633 23.92 23.936l229.504-1.007c.24 0 .416.095.64.095l11.696.288c6.448.16 12.272-2.368 16.4-6.56 4.193-4.128 5.696-9.936 5.584-16.432l-1.263-11.68c0-.255.88-.399.88-.622zM110.049 65.321l151.264-.397c12.928.288 24.912-8.64 26.88-23.873l-.032-16.431C287.84 11.677 277.15.972 264.24.7l-230.512.992c-.256-.032-.416-.112-.64-.112l-11.712-.273C14.945 1.132 9.105 3.676 4.992 7.851.784 11.995-.735 17.787-.592 24.283L.672 35.995c0 .223-.88.384-.88.624l.672 231.008c.288 12.928 10.977 20.624 23.921 20.928l17.424.015c12.928.288 23.183-10.96 22.895-23.888l-.88-154.224 275.264 272.72c12.48 12.497 32.753 12.497 45.25 0s12.496-32.768 0-45.264z" } }] })(e);
}
function vC(e) {
  return Vt({ tag: "svg", attr: { version: "1.1", viewBox: "0 0 17 17" }, child: [{ tag: "g", attr: {}, child: [] }, { tag: "path", attr: { d: "M8.5 5.972c-1.378 0-2.5 1.122-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.122 2.5-2.5-1.122-2.5-2.5-2.5zM8.5 9.972c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5 1.5 0.673 1.5 1.5-0.673 1.5-1.5 1.5zM16.94 9.446c0.037-0.321 0.060-0.645 0.060-0.974s-0.023-0.653-0.060-0.974l-2.588-0.778c-0.119-0.402-0.278-0.787-0.474-1.149l1.279-2.377c-0.406-0.51-0.869-0.973-1.38-1.38l-2.377 1.28c-0.363-0.196-0.748-0.354-1.15-0.474l-0.776-2.588c-0.32-0.037-0.644-0.060-0.974-0.060s-0.654 0.023-0.974 0.060l-0.776 2.588c-0.403 0.119-0.789 0.278-1.15 0.475l-2.377-1.28c-0.511 0.406-0.974 0.869-1.379 1.38l1.279 2.375c-0.196 0.362-0.354 0.748-0.474 1.15l-2.589 0.778c-0.037 0.32-0.060 0.644-0.060 0.974s0.023 0.654 0.060 0.974l2.588 0.776c0.12 0.403 0.278 0.789 0.474 1.151l-1.279 2.376c0.406 0.511 0.869 0.974 1.38 1.38l2.377-1.279c0.362 0.196 0.748 0.354 1.15 0.474l0.776 2.588c0.321 0.037 0.645 0.060 0.974 0.060s0.654-0.023 0.974-0.060l0.776-2.588c0.402-0.12 0.788-0.278 1.15-0.474l2.376 1.279c0.511-0.407 0.974-0.87 1.38-1.381l-1.278-2.376c0.196-0.362 0.354-0.748 0.474-1.15l2.588-0.776zM13.548 9.419l-0.154 0.518c-0.1 0.337-0.233 0.66-0.396 0.959l-0.256 0.475 0.255 0.475 0.952 1.77c-0.099 0.105-0.201 0.207-0.306 0.306l-2.243-1.209-0.475 0.256c-0.301 0.163-0.624 0.295-0.96 0.396l-0.518 0.154-0.155 0.518-0.579 1.932c-0.072 0.002-0.143 0.003-0.213 0.003s-0.141-0.001-0.213-0.003l-0.579-1.932-0.155-0.518-0.518-0.154c-0.336-0.1-0.659-0.233-0.959-0.396l-0.475-0.256-2.245 1.207c-0.104-0.099-0.207-0.201-0.306-0.306l1.208-2.244-0.256-0.475c-0.162-0.3-0.295-0.623-0.396-0.96l-0.153-0.517-2.449-0.734c-0.003-0.072-0.004-0.143-0.004-0.212 0-0.070 0.001-0.141 0.004-0.213l2.448-0.734 0.154-0.518c0.1-0.337 0.233-0.66 0.396-0.959l0.256-0.475-1.208-2.245c0.099-0.104 0.201-0.207 0.305-0.306l2.247 1.21 0.476-0.259c0.297-0.162 0.619-0.295 0.956-0.395l0.518-0.154 0.155-0.518 0.579-1.932c0.073-0.001 0.144-0.002 0.214-0.002s0.141 0.001 0.213 0.003l0.579 1.932 0.155 0.518 0.518 0.154c0.335 0.1 0.659 0.233 0.96 0.396l0.475 0.255 2.244-1.208c0.104 0.099 0.207 0.201 0.306 0.306l-0.953 1.77-0.255 0.475 0.257 0.475c0.163 0.3 0.295 0.622 0.395 0.957l0.154 0.518 0.518 0.155 1.932 0.581c0.001 0.072 0.002 0.143 0.002 0.213s-0.001 0.141-0.004 0.213l-2.448 0.734z" } }] })(e);
}
function hC(e) {
  return Vt({ tag: "svg", attr: { viewBox: "0 0 16 16", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M3.78 2L3 2.41v12l.78.42 9-6V8l-9-6zM4 13.48V3.35l7.6 5.07L4 13.48z" } }] })(e);
}
const mC = ({ children: e, override: t, ...n }) => /* @__PURE__ */ ct(rc, { theme: {
  token: { colorPrimary: t }
}, children: /* @__PURE__ */ ct(j1, { ...n, children: e }) });
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
function R2() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function P2() {
  let [, e] = Yt(/* @__PURE__ */ Object.create(null));
  return Pa(() => {
    e(/* @__PURE__ */ Object.create(null));
  }, []);
}
var T2 = R2() ? Ou : jt, N2 = ({
  children: e,
  type: t = "reach-portal",
  containerRef: n
}) => {
  let r = u.useRef(null), o = u.useRef(null), i = P2();
  return u.useEffect(() => {
    n != null && (typeof n != "object" || !("current" in n) ? console.warn("@reach/portal: Invalid value passed to the `containerRef` of a `Portal`. The portal will be appended to the document body, but if you want to attach it to another DOM node you must pass a valid React ref object to `containerRef`.") : n.current == null && console.warn("@reach/portal: A ref was passed to the `containerRef` prop of a `Portal`, but no DOM node was attached to it. Be sure to pass the ref to a DOM component.\n\nIf you are forwarding the ref from another component, be sure to use the React.forwardRef API. See https://reactjs.org/docs/forwarding-refs.html."));
  }, [n]), T2(() => {
    if (!r.current)
      return;
    let a = r.current.ownerDocument, s = n?.current || a.body;
    return o.current = a?.createElement(t), s.appendChild(o.current), i(), () => {
      o.current && s && s.removeChild(o.current);
    };
  }, [t, i, n]), o.current ? $s(e, o.current) : /* @__PURE__ */ u.createElement("span", {
    ref: r
  });
}, $v = ({
  unstable_skipInitialRender: e,
  ...t
}) => {
  let [n, r] = u.useState(!1);
  return u.useEffect(() => {
    e && r(!0);
  }, [e]), e && !n ? null : /* @__PURE__ */ u.createElement(N2, {
    ...t
  });
};
$v.displayName = "Portal";
const M2 = () => ({
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
var xs = { exports: {} }, Ue = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var du;
function I2() {
  if (du)
    return Ue;
  du = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), p;
  p = Symbol.for("react.module.reference");
  function h(m) {
    if (typeof m == "object" && m !== null) {
      var y = m.$$typeof;
      switch (y) {
        case e:
          switch (m = m.type, m) {
            case n:
            case o:
            case r:
            case l:
            case f:
              return m;
            default:
              switch (m = m && m.$$typeof, m) {
                case s:
                case a:
                case c:
                case v:
                case d:
                case i:
                  return m;
                default:
                  return y;
              }
          }
        case t:
          return y;
      }
    }
  }
  return Ue.ContextConsumer = a, Ue.ContextProvider = i, Ue.Element = e, Ue.ForwardRef = c, Ue.Fragment = n, Ue.Lazy = v, Ue.Memo = d, Ue.Portal = t, Ue.Profiler = o, Ue.StrictMode = r, Ue.Suspense = l, Ue.SuspenseList = f, Ue.isAsyncMode = function() {
    return !1;
  }, Ue.isConcurrentMode = function() {
    return !1;
  }, Ue.isContextConsumer = function(m) {
    return h(m) === a;
  }, Ue.isContextProvider = function(m) {
    return h(m) === i;
  }, Ue.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === e;
  }, Ue.isForwardRef = function(m) {
    return h(m) === c;
  }, Ue.isFragment = function(m) {
    return h(m) === n;
  }, Ue.isLazy = function(m) {
    return h(m) === v;
  }, Ue.isMemo = function(m) {
    return h(m) === d;
  }, Ue.isPortal = function(m) {
    return h(m) === t;
  }, Ue.isProfiler = function(m) {
    return h(m) === o;
  }, Ue.isStrictMode = function(m) {
    return h(m) === r;
  }, Ue.isSuspense = function(m) {
    return h(m) === l;
  }, Ue.isSuspenseList = function(m) {
    return h(m) === f;
  }, Ue.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === n || m === o || m === r || m === l || m === f || m === g || typeof m == "object" && m !== null && (m.$$typeof === v || m.$$typeof === d || m.$$typeof === i || m.$$typeof === a || m.$$typeof === c || m.$$typeof === p || m.getModuleId !== void 0);
  }, Ue.typeOf = h, Ue;
}
var Ke = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vu;
function $2() {
  return vu || (vu = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), p = !1, h = !1, m = !1, y = !1, b = !1, E;
    E = Symbol.for("react.module.reference");
    function w(L) {
      return !!(typeof L == "string" || typeof L == "function" || L === n || L === o || b || L === r || L === l || L === f || y || L === g || p || h || m || typeof L == "object" && L !== null && (L.$$typeof === v || L.$$typeof === d || L.$$typeof === i || L.$$typeof === a || L.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      L.$$typeof === E || L.getModuleId !== void 0));
    }
    function S(L) {
      if (typeof L == "object" && L !== null) {
        var Z = L.$$typeof;
        switch (Z) {
          case e:
            var se = L.type;
            switch (se) {
              case n:
              case o:
              case r:
              case l:
              case f:
                return se;
              default:
                var ae = se && se.$$typeof;
                switch (ae) {
                  case s:
                  case a:
                  case c:
                  case v:
                  case d:
                  case i:
                    return ae;
                  default:
                    return Z;
                }
            }
          case t:
            return Z;
        }
      }
    }
    var C = a, _ = i, N = e, M = c, R = n, k = v, x = d, O = t, P = o, I = r, $ = l, D = f, B = !1, K = !1;
    function ne(L) {
      return B || (B = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function ce(L) {
      return K || (K = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function j(L) {
      return S(L) === a;
    }
    function H(L) {
      return S(L) === i;
    }
    function z(L) {
      return typeof L == "object" && L !== null && L.$$typeof === e;
    }
    function G(L) {
      return S(L) === c;
    }
    function T(L) {
      return S(L) === n;
    }
    function q(L) {
      return S(L) === v;
    }
    function F(L) {
      return S(L) === d;
    }
    function Y(L) {
      return S(L) === t;
    }
    function te(L) {
      return S(L) === o;
    }
    function Q(L) {
      return S(L) === r;
    }
    function A(L) {
      return S(L) === l;
    }
    function re(L) {
      return S(L) === f;
    }
    Ke.ContextConsumer = C, Ke.ContextProvider = _, Ke.Element = N, Ke.ForwardRef = M, Ke.Fragment = R, Ke.Lazy = k, Ke.Memo = x, Ke.Portal = O, Ke.Profiler = P, Ke.StrictMode = I, Ke.Suspense = $, Ke.SuspenseList = D, Ke.isAsyncMode = ne, Ke.isConcurrentMode = ce, Ke.isContextConsumer = j, Ke.isContextProvider = H, Ke.isElement = z, Ke.isForwardRef = G, Ke.isFragment = T, Ke.isLazy = q, Ke.isMemo = F, Ke.isPortal = Y, Ke.isProfiler = te, Ke.isStrictMode = Q, Ke.isSuspense = A, Ke.isSuspenseList = re, Ke.isValidElementType = w, Ke.typeOf = S;
  }()), Ke;
}
process.env.NODE_ENV === "production" ? xs.exports = I2() : xs.exports = $2();
var gc = xs.exports;
function A2(e) {
  function t(j, H, z, G, T) {
    for (var q = 0, F = 0, Y = 0, te = 0, Q, A, re = 0, L = 0, Z, se = Z = Q = 0, ae = 0, fe = 0, ge = 0, ee = 0, le = z.length, Ce = le - 1, Ne, ie = "", de = "", ze = "", Ye = "", Ge; ae < le; ) {
      if (A = z.charCodeAt(ae), ae === Ce && F + te + Y + q !== 0 && (F !== 0 && (A = F === 47 ? 10 : 47), te = Y = q = 0, le++, Ce++), F + te + Y + q === 0) {
        if (ae === Ce && (0 < fe && (ie = ie.replace(v, "")), 0 < ie.trim().length)) {
          switch (A) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              ie += z.charAt(ae);
          }
          A = 59;
        }
        switch (A) {
          case 123:
            for (ie = ie.trim(), Q = ie.charCodeAt(0), Z = 1, ee = ++ae; ae < le; ) {
              switch (A = z.charCodeAt(ae)) {
                case 123:
                  Z++;
                  break;
                case 125:
                  Z--;
                  break;
                case 47:
                  switch (A = z.charCodeAt(ae + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (se = ae + 1; se < Ce; ++se)
                          switch (z.charCodeAt(se)) {
                            case 47:
                              if (A === 42 && z.charCodeAt(se - 1) === 42 && ae + 2 !== se) {
                                ae = se + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (A === 47) {
                                ae = se + 1;
                                break e;
                              }
                          }
                        ae = se;
                      }
                  }
                  break;
                case 91:
                  A++;
                case 40:
                  A++;
                case 34:
                case 39:
                  for (; ae++ < Ce && z.charCodeAt(ae) !== A; )
                    ;
              }
              if (Z === 0)
                break;
              ae++;
            }
            switch (Z = z.substring(ee, ae), Q === 0 && (Q = (ie = ie.replace(d, "").trim()).charCodeAt(0)), Q) {
              case 64:
                switch (0 < fe && (ie = ie.replace(v, "")), A = ie.charCodeAt(1), A) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    fe = H;
                    break;
                  default:
                    fe = $;
                }
                if (Z = t(H, fe, Z, A, T + 1), ee = Z.length, 0 < B && (fe = n($, ie, ge), Ge = s(3, Z, fe, H, O, x, ee, A, T, G), ie = fe.join(""), Ge !== void 0 && (ee = (Z = Ge.trim()).length) === 0 && (A = 0, Z = "")), 0 < ee)
                  switch (A) {
                    case 115:
                      ie = ie.replace(C, a);
                    case 100:
                    case 109:
                    case 45:
                      Z = ie + "{" + Z + "}";
                      break;
                    case 107:
                      ie = ie.replace(b, "$1 $2"), Z = ie + "{" + Z + "}", Z = I === 1 || I === 2 && i("@" + Z, 3) ? "@-webkit-" + Z + "@" + Z : "@" + Z;
                      break;
                    default:
                      Z = ie + Z, G === 112 && (Z = (de += Z, ""));
                  }
                else
                  Z = "";
                break;
              default:
                Z = t(H, n(H, ie, ge), Z, G, T + 1);
            }
            ze += Z, Z = ge = fe = se = Q = 0, ie = "", A = z.charCodeAt(++ae);
            break;
          case 125:
          case 59:
            if (ie = (0 < fe ? ie.replace(v, "") : ie).trim(), 1 < (ee = ie.length))
              switch (se === 0 && (Q = ie.charCodeAt(0), Q === 45 || 96 < Q && 123 > Q) && (ee = (ie = ie.replace(" ", ":")).length), 0 < B && (Ge = s(1, ie, H, j, O, x, de.length, G, T, G)) !== void 0 && (ee = (ie = Ge.trim()).length) === 0 && (ie = "\0\0"), Q = ie.charCodeAt(0), A = ie.charCodeAt(1), Q) {
                case 0:
                  break;
                case 64:
                  if (A === 105 || A === 99) {
                    Ye += ie + z.charAt(ae);
                    break;
                  }
                default:
                  ie.charCodeAt(ee - 1) !== 58 && (de += o(ie, Q, A, ie.charCodeAt(2)));
              }
            ge = fe = se = Q = 0, ie = "", A = z.charCodeAt(++ae);
        }
      }
      switch (A) {
        case 13:
        case 10:
          F === 47 ? F = 0 : 1 + Q === 0 && G !== 107 && 0 < ie.length && (fe = 1, ie += "\0"), 0 < B * ne && s(0, ie, H, j, O, x, de.length, G, T, G), x = 1, O++;
          break;
        case 59:
        case 125:
          if (F + te + Y + q === 0) {
            x++;
            break;
          }
        default:
          switch (x++, Ne = z.charAt(ae), A) {
            case 9:
            case 32:
              if (te + q + F === 0)
                switch (re) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    Ne = "";
                    break;
                  default:
                    A !== 32 && (Ne = " ");
                }
              break;
            case 0:
              Ne = "\\0";
              break;
            case 12:
              Ne = "\\f";
              break;
            case 11:
              Ne = "\\v";
              break;
            case 38:
              te + F + q === 0 && (fe = ge = 1, Ne = "\f" + Ne);
              break;
            case 108:
              if (te + F + q + P === 0 && 0 < se)
                switch (ae - se) {
                  case 2:
                    re === 112 && z.charCodeAt(ae - 3) === 58 && (P = re);
                  case 8:
                    L === 111 && (P = L);
                }
              break;
            case 58:
              te + F + q === 0 && (se = ae);
              break;
            case 44:
              F + Y + te + q === 0 && (fe = 1, Ne += "\r");
              break;
            case 34:
            case 39:
              F === 0 && (te = te === A ? 0 : te === 0 ? A : te);
              break;
            case 91:
              te + F + Y === 0 && q++;
              break;
            case 93:
              te + F + Y === 0 && q--;
              break;
            case 41:
              te + F + q === 0 && Y--;
              break;
            case 40:
              if (te + F + q === 0) {
                if (Q === 0)
                  switch (2 * re + 3 * L) {
                    case 533:
                      break;
                    default:
                      Q = 1;
                  }
                Y++;
              }
              break;
            case 64:
              F + Y + te + q + se + Z === 0 && (Z = 1);
              break;
            case 42:
            case 47:
              if (!(0 < te + q + Y))
                switch (F) {
                  case 0:
                    switch (2 * A + 3 * z.charCodeAt(ae + 1)) {
                      case 235:
                        F = 47;
                        break;
                      case 220:
                        ee = ae, F = 42;
                    }
                    break;
                  case 42:
                    A === 47 && re === 42 && ee + 2 !== ae && (z.charCodeAt(ee + 2) === 33 && (de += z.substring(ee, ae + 1)), Ne = "", F = 0);
                }
          }
          F === 0 && (ie += Ne);
      }
      L = re, re = A, ae++;
    }
    if (ee = de.length, 0 < ee) {
      if (fe = H, 0 < B && (Ge = s(2, de, fe, j, O, x, ee, G, T, G), Ge !== void 0 && (de = Ge).length === 0))
        return Ye + de + ze;
      if (de = fe.join(",") + "{" + de + "}", I * P !== 0) {
        switch (I !== 2 || i(de, 2) || (P = 0), P) {
          case 111:
            de = de.replace(w, ":-moz-$1") + de;
            break;
          case 112:
            de = de.replace(E, "::-webkit-input-$1") + de.replace(E, "::-moz-$1") + de.replace(E, ":-ms-input-$1") + de;
        }
        P = 0;
      }
    }
    return Ye + de + ze;
  }
  function n(j, H, z) {
    var G = H.trim().split(m);
    H = G;
    var T = G.length, q = j.length;
    switch (q) {
      case 0:
      case 1:
        var F = 0;
        for (j = q === 0 ? "" : j[0] + " "; F < T; ++F)
          H[F] = r(j, H[F], z).trim();
        break;
      default:
        var Y = F = 0;
        for (H = []; F < T; ++F)
          for (var te = 0; te < q; ++te)
            H[Y++] = r(j[te] + " ", G[F], z).trim();
    }
    return H;
  }
  function r(j, H, z) {
    var G = H.charCodeAt(0);
    switch (33 > G && (G = (H = H.trim()).charCodeAt(0)), G) {
      case 38:
        return H.replace(y, "$1" + j.trim());
      case 58:
        return j.trim() + H.replace(y, "$1" + j.trim());
      default:
        if (0 < 1 * z && 0 < H.indexOf("\f"))
          return H.replace(y, (j.charCodeAt(0) === 58 ? "" : "$1") + j.trim());
    }
    return j + H;
  }
  function o(j, H, z, G) {
    var T = j + ";", q = 2 * H + 3 * z + 4 * G;
    if (q === 944) {
      j = T.indexOf(":", 9) + 1;
      var F = T.substring(j, T.length - 1).trim();
      return F = T.substring(0, j).trim() + F + ";", I === 1 || I === 2 && i(F, 1) ? "-webkit-" + F + F : F;
    }
    if (I === 0 || I === 2 && !i(T, 1))
      return T;
    switch (q) {
      case 1015:
        return T.charCodeAt(10) === 97 ? "-webkit-" + T + T : T;
      case 951:
        return T.charCodeAt(3) === 116 ? "-webkit-" + T + T : T;
      case 963:
        return T.charCodeAt(5) === 110 ? "-webkit-" + T + T : T;
      case 1009:
        if (T.charCodeAt(4) !== 100)
          break;
      case 969:
      case 942:
        return "-webkit-" + T + T;
      case 978:
        return "-webkit-" + T + "-moz-" + T + T;
      case 1019:
      case 983:
        return "-webkit-" + T + "-moz-" + T + "-ms-" + T + T;
      case 883:
        if (T.charCodeAt(8) === 45)
          return "-webkit-" + T + T;
        if (0 < T.indexOf("image-set(", 11))
          return T.replace(k, "$1-webkit-$2") + T;
        break;
      case 932:
        if (T.charCodeAt(4) === 45)
          switch (T.charCodeAt(5)) {
            case 103:
              return "-webkit-box-" + T.replace("-grow", "") + "-webkit-" + T + "-ms-" + T.replace("grow", "positive") + T;
            case 115:
              return "-webkit-" + T + "-ms-" + T.replace("shrink", "negative") + T;
            case 98:
              return "-webkit-" + T + "-ms-" + T.replace("basis", "preferred-size") + T;
          }
        return "-webkit-" + T + "-ms-" + T + T;
      case 964:
        return "-webkit-" + T + "-ms-flex-" + T + T;
      case 1023:
        if (T.charCodeAt(8) !== 99)
          break;
        return F = T.substring(T.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + F + "-webkit-" + T + "-ms-flex-pack" + F + T;
      case 1005:
        return p.test(T) ? T.replace(g, ":-webkit-") + T.replace(g, ":-moz-") + T : T;
      case 1e3:
        switch (F = T.substring(13).trim(), H = F.indexOf("-") + 1, F.charCodeAt(0) + F.charCodeAt(H)) {
          case 226:
            F = T.replace(S, "tb");
            break;
          case 232:
            F = T.replace(S, "tb-rl");
            break;
          case 220:
            F = T.replace(S, "lr");
            break;
          default:
            return T;
        }
        return "-webkit-" + T + "-ms-" + F + T;
      case 1017:
        if (T.indexOf("sticky", 9) === -1)
          break;
      case 975:
        switch (H = (T = j).length - 10, F = (T.charCodeAt(H) === 33 ? T.substring(0, H) : T).substring(j.indexOf(":", 7) + 1).trim(), q = F.charCodeAt(0) + (F.charCodeAt(7) | 0)) {
          case 203:
            if (111 > F.charCodeAt(8))
              break;
          case 115:
            T = T.replace(F, "-webkit-" + F) + ";" + T;
            break;
          case 207:
          case 102:
            T = T.replace(F, "-webkit-" + (102 < q ? "inline-" : "") + "box") + ";" + T.replace(F, "-webkit-" + F) + ";" + T.replace(F, "-ms-" + F + "box") + ";" + T;
        }
        return T + ";";
      case 938:
        if (T.charCodeAt(5) === 45)
          switch (T.charCodeAt(6)) {
            case 105:
              return F = T.replace("-items", ""), "-webkit-" + T + "-webkit-box-" + F + "-ms-flex-" + F + T;
            case 115:
              return "-webkit-" + T + "-ms-flex-item-" + T.replace(N, "") + T;
            default:
              return "-webkit-" + T + "-ms-flex-line-pack" + T.replace("align-content", "").replace(N, "") + T;
          }
        break;
      case 973:
      case 989:
        if (T.charCodeAt(3) !== 45 || T.charCodeAt(4) === 122)
          break;
      case 931:
      case 953:
        if (R.test(j) === !0)
          return (F = j.substring(j.indexOf(":") + 1)).charCodeAt(0) === 115 ? o(j.replace("stretch", "fill-available"), H, z, G).replace(":fill-available", ":stretch") : T.replace(F, "-webkit-" + F) + T.replace(F, "-moz-" + F.replace("fill-", "")) + T;
        break;
      case 962:
        if (T = "-webkit-" + T + (T.charCodeAt(5) === 102 ? "-ms-" + T : "") + T, z + G === 211 && T.charCodeAt(13) === 105 && 0 < T.indexOf("transform", 10))
          return T.substring(0, T.indexOf(";", 27) + 1).replace(h, "$1-webkit-$2") + T;
    }
    return T;
  }
  function i(j, H) {
    var z = j.indexOf(H === 1 ? ":" : "{"), G = j.substring(0, H !== 3 ? z : 10);
    return z = j.substring(z + 1, j.length - 1), K(H !== 2 ? G : G.replace(M, "$1"), z, H);
  }
  function a(j, H) {
    var z = o(H, H.charCodeAt(0), H.charCodeAt(1), H.charCodeAt(2));
    return z !== H + ";" ? z.replace(_, " or ($1)").substring(4) : "(" + H + ")";
  }
  function s(j, H, z, G, T, q, F, Y, te, Q) {
    for (var A = 0, re = H, L; A < B; ++A)
      switch (L = D[A].call(f, j, re, z, G, T, q, F, Y, te, Q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          re = L;
      }
    if (re !== H)
      return re;
  }
  function c(j) {
    switch (j) {
      case void 0:
      case null:
        B = D.length = 0;
        break;
      default:
        if (typeof j == "function")
          D[B++] = j;
        else if (typeof j == "object")
          for (var H = 0, z = j.length; H < z; ++H)
            c(j[H]);
        else
          ne = !!j | 0;
    }
    return c;
  }
  function l(j) {
    return j = j.prefix, j !== void 0 && (K = null, j ? typeof j != "function" ? I = 1 : (I = 2, K = j) : I = 0), l;
  }
  function f(j, H) {
    var z = j;
    if (33 > z.charCodeAt(0) && (z = z.trim()), ce = z, z = [ce], 0 < B) {
      var G = s(-1, H, z, z, O, x, 0, 0, 0, 0);
      G !== void 0 && typeof G == "string" && (H = G);
    }
    var T = t($, z, H, 0, 0);
    return 0 < B && (G = s(-2, T, z, z, O, x, T.length, 0, 0, 0), G !== void 0 && (T = G)), ce = "", P = 0, x = O = 1, T;
  }
  var d = /^\0+/g, v = /[\0\r\f]/g, g = /: */g, p = /zoo|gra/, h = /([,: ])(transform)/g, m = /,\r+?/g, y = /([\t\r\n ])*\f?&/g, b = /@(k\w+)\s*(\S*)\s*/, E = /::(place)/g, w = /:(read-only)/g, S = /[svh]\w+-[tblr]{2}/, C = /\(\s*(.*)\s*\)/g, _ = /([\s\S]*?);/g, N = /-self|flex-/g, M = /[^]*?(:[rp][el]a[\w-]+)[^]*/, R = /stretch|:\s*\w+\-(?:conte|avail)/, k = /([^-])(image-set\()/, x = 1, O = 1, P = 0, I = 1, $ = [], D = [], B = 0, K = null, ne = 0, ce = "";
  return f.use = c, f.set = l, e !== void 0 && l(e), f;
}
function F2(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var D2 = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, hu = /* @__PURE__ */ F2(
  function(e) {
    return D2.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), yc = js, L2 = {
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
}, k2 = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, j2 = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Av = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, bc = {};
bc[yc.ForwardRef] = j2;
bc[yc.Memo] = Av;
function mu(e) {
  return yc.isMemo(e) ? Av : bc[e.$$typeof] || L2;
}
var H2 = Object.defineProperty, z2 = Object.getOwnPropertyNames, pu = Object.getOwnPropertySymbols, V2 = Object.getOwnPropertyDescriptor, B2 = Object.getPrototypeOf, gu = Object.prototype;
function Fv(e, t, n) {
  if (typeof t != "string") {
    if (gu) {
      var r = B2(t);
      r && r !== gu && Fv(e, r, n);
    }
    var o = z2(t);
    pu && (o = o.concat(pu(t)));
    for (var i = mu(e), a = mu(t), s = 0; s < o.length; ++s) {
      var c = o[s];
      if (!k2[c] && !(n && n[c]) && !(a && a[c]) && !(i && i[c])) {
        var l = V2(t, c);
        try {
          H2(e, c, l);
        } catch {
        }
      }
    }
  }
  return e;
}
var W2 = Fv;
const U2 = /* @__PURE__ */ ef(W2);
function Rn() {
  return (Rn = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }).apply(this, arguments);
}
var yu = function(e, t) {
  for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1)
    n.push(t[r], e[r + 1]);
  return n;
}, Os = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !gc.typeOf(e);
}, Ci = Object.freeze([]), Dn = Object.freeze({});
function lo(e) {
  return typeof e == "function";
}
function _s(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function Sc(e) {
  return e && typeof e.styledComponentId == "string";
}
var Pr = typeof process < "u" && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Ec = typeof window < "u" && "HTMLElement" in window, K2 = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), G2 = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function q2() {
  for (var e = arguments.length <= 0 ? void 0 : arguments[0], t = [], n = 1, r = arguments.length; n < r; n += 1)
    t.push(n < 0 || arguments.length <= n ? void 0 : arguments[n]);
  return t.forEach(function(o) {
    e = e.replace(/%[a-z]/, o);
  }), e;
}
function Fr(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  throw process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (n.length > 0 ? " Args: " + n.join(", ") : "")) : new Error(q2.apply(void 0, [G2[e]].concat(n)).trim());
}
var Y2 = function() {
  function e(n) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = n;
  }
  var t = e.prototype;
  return t.indexOfGroup = function(n) {
    for (var r = 0, o = 0; o < n; o++)
      r += this.groupSizes[o];
    return r;
  }, t.insertRules = function(n, r) {
    if (n >= this.groupSizes.length) {
      for (var o = this.groupSizes, i = o.length, a = i; n >= a; )
        (a <<= 1) < 0 && Fr(16, "" + n);
      this.groupSizes = new Uint32Array(a), this.groupSizes.set(o), this.length = a;
      for (var s = i; s < a; s++)
        this.groupSizes[s] = 0;
    }
    for (var c = this.indexOfGroup(n + 1), l = 0, f = r.length; l < f; l++)
      this.tag.insertRule(c, r[l]) && (this.groupSizes[n]++, c++);
  }, t.clearGroup = function(n) {
    if (n < this.length) {
      var r = this.groupSizes[n], o = this.indexOfGroup(n), i = o + r;
      this.groupSizes[n] = 0;
      for (var a = o; a < i; a++)
        this.tag.deleteRule(o);
    }
  }, t.getGroup = function(n) {
    var r = "";
    if (n >= this.length || this.groupSizes[n] === 0)
      return r;
    for (var o = this.groupSizes[n], i = this.indexOfGroup(n), a = i + o, s = i; s < a; s++)
      r += this.tag.getRule(s) + `/*!sc*/
`;
    return r;
  }, e;
}(), ti = /* @__PURE__ */ new Map(), xi = /* @__PURE__ */ new Map(), Zr = 1, Ho = function(e) {
  if (ti.has(e))
    return ti.get(e);
  for (; xi.has(Zr); )
    Zr++;
  var t = Zr++;
  return process.env.NODE_ENV !== "production" && ((0 | t) < 0 || t > 1 << 30) && Fr(16, "" + t), ti.set(e, t), xi.set(t, e), t;
}, X2 = function(e) {
  return xi.get(e);
}, Q2 = function(e, t) {
  t >= Zr && (Zr = t + 1), ti.set(e, t), xi.set(t, e);
}, J2 = "style[" + Pr + '][data-styled-version="5.3.6"]', Z2 = new RegExp("^" + Pr + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), ew = function(e, t, n) {
  for (var r, o = n.split(","), i = 0, a = o.length; i < a; i++)
    (r = o[i]) && e.registerName(t, r);
}, tw = function(e, t) {
  for (var n = (t.textContent || "").split(`/*!sc*/
`), r = [], o = 0, i = n.length; o < i; o++) {
    var a = n[o].trim();
    if (a) {
      var s = a.match(Z2);
      if (s) {
        var c = 0 | parseInt(s[1], 10), l = s[2];
        c !== 0 && (Q2(l, c), ew(e, l, s[3]), e.getTag().insertRules(c, r)), r.length = 0;
      } else
        r.push(a);
    }
  }
}, nw = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, Dv = function(e) {
  var t = document.head, n = e || t, r = document.createElement("style"), o = function(s) {
    for (var c = s.childNodes, l = c.length; l >= 0; l--) {
      var f = c[l];
      if (f && f.nodeType === 1 && f.hasAttribute(Pr))
        return f;
    }
  }(n), i = o !== void 0 ? o.nextSibling : null;
  r.setAttribute(Pr, "active"), r.setAttribute("data-styled-version", "5.3.6");
  var a = nw();
  return a && r.setAttribute("nonce", a), n.insertBefore(r, i), r;
}, rw = function() {
  function e(n) {
    var r = this.element = Dv(n);
    r.appendChild(document.createTextNode("")), this.sheet = function(o) {
      if (o.sheet)
        return o.sheet;
      for (var i = document.styleSheets, a = 0, s = i.length; a < s; a++) {
        var c = i[a];
        if (c.ownerNode === o)
          return c;
      }
      Fr(17);
    }(r), this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(n, r) {
    try {
      return this.sheet.insertRule(r, n), this.length++, !0;
    } catch {
      return !1;
    }
  }, t.deleteRule = function(n) {
    this.sheet.deleteRule(n), this.length--;
  }, t.getRule = function(n) {
    var r = this.sheet.cssRules[n];
    return r !== void 0 && typeof r.cssText == "string" ? r.cssText : "";
  }, e;
}(), ow = function() {
  function e(n) {
    var r = this.element = Dv(n);
    this.nodes = r.childNodes, this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(n, r) {
    if (n <= this.length && n >= 0) {
      var o = document.createTextNode(r), i = this.nodes[n];
      return this.element.insertBefore(o, i || null), this.length++, !0;
    }
    return !1;
  }, t.deleteRule = function(n) {
    this.element.removeChild(this.nodes[n]), this.length--;
  }, t.getRule = function(n) {
    return n < this.length ? this.nodes[n].textContent : "";
  }, e;
}(), iw = function() {
  function e(n) {
    this.rules = [], this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(n, r) {
    return n <= this.length && (this.rules.splice(n, 0, r), this.length++, !0);
  }, t.deleteRule = function(n) {
    this.rules.splice(n, 1), this.length--;
  }, t.getRule = function(n) {
    return n < this.length ? this.rules[n] : "";
  }, e;
}(), bu = Ec, aw = { isServer: !Ec, useCSSOMInjection: !K2 }, Lv = function() {
  function e(n, r, o) {
    n === void 0 && (n = Dn), r === void 0 && (r = {}), this.options = Rn({}, aw, {}, n), this.gs = r, this.names = new Map(o), this.server = !!n.isServer, !this.server && Ec && bu && (bu = !1, function(i) {
      for (var a = document.querySelectorAll(J2), s = 0, c = a.length; s < c; s++) {
        var l = a[s];
        l && l.getAttribute(Pr) !== "active" && (tw(i, l), l.parentNode && l.parentNode.removeChild(l));
      }
    }(this));
  }
  e.registerId = function(n) {
    return Ho(n);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(n, r) {
    return r === void 0 && (r = !0), new e(Rn({}, this.options, {}, n), this.gs, r && this.names || void 0);
  }, t.allocateGSInstance = function(n) {
    return this.gs[n] = (this.gs[n] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (o = (r = this.options).isServer, i = r.useCSSOMInjection, a = r.target, n = o ? new iw(a) : i ? new rw(a) : new ow(a), new Y2(n)));
    var n, r, o, i, a;
  }, t.hasNameForId = function(n, r) {
    return this.names.has(n) && this.names.get(n).has(r);
  }, t.registerName = function(n, r) {
    if (Ho(n), this.names.has(n))
      this.names.get(n).add(r);
    else {
      var o = /* @__PURE__ */ new Set();
      o.add(r), this.names.set(n, o);
    }
  }, t.insertRules = function(n, r, o) {
    this.registerName(n, r), this.getTag().insertRules(Ho(n), o);
  }, t.clearNames = function(n) {
    this.names.has(n) && this.names.get(n).clear();
  }, t.clearRules = function(n) {
    this.getTag().clearGroup(Ho(n)), this.clearNames(n);
  }, t.clearTag = function() {
    this.tag = void 0;
  }, t.toString = function() {
    return function(n) {
      for (var r = n.getTag(), o = r.length, i = "", a = 0; a < o; a++) {
        var s = X2(a);
        if (s !== void 0) {
          var c = n.names.get(s), l = r.getGroup(a);
          if (c && l && c.size) {
            var f = Pr + ".g" + a + '[id="' + s + '"]', d = "";
            c !== void 0 && c.forEach(function(v) {
              v.length > 0 && (d += v + ",");
            }), i += "" + l + f + '{content:"' + d + `"}/*!sc*/
`;
          }
        }
      }
      return i;
    }(this);
  }, e;
}(), sw = /(a)(d)/gi, Su = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Rs(e) {
  var t, n = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0)
    n = Su(t % 52) + n;
  return (Su(t % 52) + n).replace(sw, "$1-$2");
}
var Bn = function(e, t) {
  for (var n = t.length; n; )
    e = 33 * e ^ t.charCodeAt(--n);
  return e;
}, kv = function(e) {
  return Bn(5381, e);
};
function cw(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (lo(n) && !Sc(n))
      return !1;
  }
  return !0;
}
var lw = kv("5.3.6"), uw = function() {
  function e(t, n, r) {
    this.rules = t, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (r === void 0 || r.isStatic) && cw(t), this.componentId = n, this.baseHash = Bn(lw, n), this.baseStyle = r, Lv.registerId(n);
  }
  return e.prototype.generateAndInjectStyles = function(t, n, r) {
    var o = this.componentId, i = [];
    if (this.baseStyle && i.push(this.baseStyle.generateAndInjectStyles(t, n, r)), this.isStatic && !r.hash)
      if (this.staticRulesId && n.hasNameForId(o, this.staticRulesId))
        i.push(this.staticRulesId);
      else {
        var a = Tr(this.rules, t, n, r).join(""), s = Rs(Bn(this.baseHash, a) >>> 0);
        if (!n.hasNameForId(o, s)) {
          var c = r(a, "." + s, void 0, o);
          n.insertRules(o, s, c);
        }
        i.push(s), this.staticRulesId = s;
      }
    else {
      for (var l = this.rules.length, f = Bn(this.baseHash, r.hash), d = "", v = 0; v < l; v++) {
        var g = this.rules[v];
        if (typeof g == "string")
          d += g, process.env.NODE_ENV !== "production" && (f = Bn(f, g + v));
        else if (g) {
          var p = Tr(g, t, n, r), h = Array.isArray(p) ? p.join("") : p;
          f = Bn(f, h + v), d += h;
        }
      }
      if (d) {
        var m = Rs(f >>> 0);
        if (!n.hasNameForId(o, m)) {
          var y = r(d, "." + m, void 0, o);
          n.insertRules(o, m, y);
        }
        i.push(m);
      }
    }
    return i.join(" ");
  }, e;
}(), fw = /^\s*\/\/.*$/gm, dw = [":", "[", ".", "#"];
function vw(e) {
  var t, n, r, o, i = e === void 0 ? Dn : e, a = i.options, s = a === void 0 ? Dn : a, c = i.plugins, l = c === void 0 ? Ci : c, f = new A2(s), d = [], v = function(h) {
    function m(y) {
      if (y)
        try {
          h(y + "}");
        } catch {
        }
    }
    return function(y, b, E, w, S, C, _, N, M, R) {
      switch (y) {
        case 1:
          if (M === 0 && b.charCodeAt(0) === 64)
            return h(b + ";"), "";
          break;
        case 2:
          if (N === 0)
            return b + "/*|*/";
          break;
        case 3:
          switch (N) {
            case 102:
            case 112:
              return h(E[0] + b), "";
            default:
              return b + (R === 0 ? "/*|*/" : "");
          }
        case -2:
          b.split("/*|*/}").forEach(m);
      }
    };
  }(function(h) {
    d.push(h);
  }), g = function(h, m, y) {
    return m === 0 && dw.indexOf(y[n.length]) !== -1 || y.match(o) ? h : "." + t;
  };
  function p(h, m, y, b) {
    b === void 0 && (b = "&");
    var E = h.replace(fw, ""), w = m && y ? y + " " + m + " { " + E + " }" : E;
    return t = b, n = m, r = new RegExp("\\" + n + "\\b", "g"), o = new RegExp("(\\" + n + "\\b){2,}"), f(y || !m ? "" : m, w);
  }
  return f.use([].concat(l, [function(h, m, y) {
    h === 2 && y.length && y[0].lastIndexOf(n) > 0 && (y[0] = y[0].replace(r, g));
  }, v, function(h) {
    if (h === -2) {
      var m = d;
      return d = [], m;
    }
  }])), p.hash = l.length ? l.reduce(function(h, m) {
    return m.name || Fr(15), Bn(h, m.name);
  }, 5381).toString() : "", p;
}
var jv = Pe.createContext();
jv.Consumer;
var Hv = Pe.createContext(), hw = (Hv.Consumer, new Lv()), Ps = vw();
function mw() {
  return Ft(jv) || hw;
}
function pw() {
  return Ft(Hv) || Ps;
}
var gw = function() {
  function e(t, n) {
    var r = this;
    this.inject = function(o, i) {
      i === void 0 && (i = Ps);
      var a = r.name + i.hash;
      o.hasNameForId(r.id, a) || o.insertRules(r.id, a, i(r.rules, a, "@keyframes"));
    }, this.toString = function() {
      return Fr(12, String(r.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = n;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = Ps), this.name + t.hash;
  }, e;
}(), yw = /([A-Z])/, bw = /([A-Z])/g, Sw = /^ms-/, Ew = function(e) {
  return "-" + e.toLowerCase();
};
function Eu(e) {
  return yw.test(e) ? e.replace(bw, Ew).replace(Sw, "-ms-") : e;
}
var wu = function(e) {
  return e == null || e === !1 || e === "";
};
function Tr(e, t, n, r) {
  if (Array.isArray(e)) {
    for (var o, i = [], a = 0, s = e.length; a < s; a += 1)
      (o = Tr(e[a], t, n, r)) !== "" && (Array.isArray(o) ? i.push.apply(i, o) : i.push(o));
    return i;
  }
  if (wu(e))
    return "";
  if (Sc(e))
    return "." + e.styledComponentId;
  if (lo(e)) {
    if (typeof (l = e) != "function" || l.prototype && l.prototype.isReactComponent || !t)
      return e;
    var c = e(t);
    return process.env.NODE_ENV !== "production" && gc.isElement(c) && console.warn(_s(e) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), Tr(c, t, n, r);
  }
  var l;
  return e instanceof gw ? n ? (e.inject(n, r), e.getName(r)) : e : Os(e) ? function f(d, v) {
    var g, p, h = [];
    for (var m in d)
      d.hasOwnProperty(m) && !wu(d[m]) && (Array.isArray(d[m]) && d[m].isCss || lo(d[m]) ? h.push(Eu(m) + ":", d[m], ";") : Os(d[m]) ? h.push.apply(h, f(d[m], m)) : h.push(Eu(m) + ": " + (g = m, (p = d[m]) == null || typeof p == "boolean" || p === "" ? "" : typeof p != "number" || p === 0 || g in Pf ? String(p).trim() : p + "px") + ";"));
    return v ? [v + " {"].concat(h, ["}"]) : h;
  }(e) : e.toString();
}
var Cu = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function Ln(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  return lo(e) || Os(e) ? Cu(Tr(yu(Ci, [e].concat(n)))) : n.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : Cu(Tr(yu(e, n)));
}
var xu = /invalid hook call/i, zo = /* @__PURE__ */ new Set(), ww = function(e, t) {
  if (process.env.NODE_ENV !== "production") {
    var n = "The component " + e + (t ? ' with the id of "' + t + '"' : "") + ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, r = console.error;
    try {
      var o = !0;
      console.error = function(i) {
        if (xu.test(i))
          o = !1, zo.delete(n);
        else {
          for (var a = arguments.length, s = new Array(a > 1 ? a - 1 : 0), c = 1; c < a; c++)
            s[c - 1] = arguments[c];
          r.apply(void 0, [i].concat(s));
        }
      }, Ae(), o && !zo.has(n) && (console.warn(n), zo.add(n));
    } catch (i) {
      xu.test(i.message) && zo.delete(n);
    } finally {
      console.error = r;
    }
  }
}, Cw = function(e, t, n) {
  return n === void 0 && (n = Dn), e.theme !== n.theme && e.theme || t || n.theme;
}, xw = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Ow = /(^-|-$)/g;
function _a(e) {
  return e.replace(xw, "-").replace(Ow, "");
}
var _w = function(e) {
  return Rs(kv(e) >>> 0);
};
function Vo(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var Ts = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, Rw = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function Pw(e, t, n) {
  var r = e[n];
  Ts(t) && Ts(r) ? zv(r, t) : e[n] = t;
}
function zv(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  for (var o = 0, i = n; o < i.length; o++) {
    var a = i[o];
    if (Ts(a))
      for (var s in a)
        Rw(s) && Pw(e, a[s], s);
  }
  return e;
}
var Vv = Pe.createContext();
Vv.Consumer;
var Ra = {};
function Bv(e, t, n) {
  var r = Sc(e), o = !Vo(e), i = t.attrs, a = i === void 0 ? Ci : i, s = t.componentId, c = s === void 0 ? function(b, E) {
    var w = typeof b != "string" ? "sc" : _a(b);
    Ra[w] = (Ra[w] || 0) + 1;
    var S = w + "-" + _w("5.3.6" + w + Ra[w]);
    return E ? E + "-" + S : S;
  }(t.displayName, t.parentComponentId) : s, l = t.displayName, f = l === void 0 ? function(b) {
    return Vo(b) ? "styled." + b : "Styled(" + _s(b) + ")";
  }(e) : l, d = t.displayName && t.componentId ? _a(t.displayName) + "-" + t.componentId : t.componentId || c, v = r && e.attrs ? Array.prototype.concat(e.attrs, a).filter(Boolean) : a, g = t.shouldForwardProp;
  r && e.shouldForwardProp && (g = t.shouldForwardProp ? function(b, E, w) {
    return e.shouldForwardProp(b, E, w) && t.shouldForwardProp(b, E, w);
  } : e.shouldForwardProp);
  var p, h = new uw(n, d, r ? e.componentStyle : void 0), m = h.isStatic && a.length === 0, y = function(b, E) {
    return function(w, S, C, _) {
      var N = w.attrs, M = w.componentStyle, R = w.defaultProps, k = w.foldedComponentIds, x = w.shouldForwardProp, O = w.styledComponentId, P = w.target;
      process.env.NODE_ENV !== "production" && Oc(O);
      var I = function(G, T, q) {
        G === void 0 && (G = Dn);
        var F = Rn({}, T, { theme: G }), Y = {};
        return q.forEach(function(te) {
          var Q, A, re, L = te;
          for (Q in lo(L) && (L = L(F)), L)
            F[Q] = Y[Q] = Q === "className" ? (A = Y[Q], re = L[Q], A && re ? A + " " + re : A || re) : L[Q];
        }), [F, Y];
      }(Cw(S, Ft(Vv), R) || Dn, S, N), $ = I[0], D = I[1], B = function(G, T, q, F) {
        var Y = mw(), te = pw(), Q = T ? G.generateAndInjectStyles(Dn, Y, te) : G.generateAndInjectStyles(q, Y, te);
        return process.env.NODE_ENV !== "production" && Oc(Q), process.env.NODE_ENV !== "production" && !T && F && F(Q), Q;
      }(M, _, $, process.env.NODE_ENV !== "production" ? w.warnTooManyClasses : void 0), K = C, ne = D.$as || S.$as || D.as || S.as || P, ce = Vo(ne), j = D !== S ? Rn({}, S, {}, D) : S, H = {};
      for (var z in j)
        z[0] !== "$" && z !== "as" && (z === "forwardedAs" ? H.as = j[z] : (x ? x(z, hu, ne) : !ce || hu(z)) && (H[z] = j[z]));
      return S.style && D.style !== S.style && (H.style = Rn({}, S.style, {}, D.style)), H.className = Array.prototype.concat(k, O, B !== O ? B : null, S.className, D.className).filter(Boolean).join(" "), H.ref = K, Gv(ne, H);
    }(p, b, E, m);
  };
  return y.displayName = f, (p = Pe.forwardRef(y)).attrs = v, p.componentStyle = h, p.displayName = f, p.shouldForwardProp = g, p.foldedComponentIds = r ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : Ci, p.styledComponentId = d, p.target = r ? e.target : e, p.withComponent = function(b) {
    var E = t.componentId, w = function(C, _) {
      if (C == null)
        return {};
      var N, M, R = {}, k = Object.keys(C);
      for (M = 0; M < k.length; M++)
        N = k[M], _.indexOf(N) >= 0 || (R[N] = C[N]);
      return R;
    }(t, ["componentId"]), S = E && E + "-" + (Vo(b) ? b : _a(_s(b)));
    return Bv(b, Rn({}, w, { attrs: v, componentId: S }), n);
  }, Object.defineProperty(p, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(b) {
    this._foldedDefaultProps = r ? zv({}, e.defaultProps, b) : b;
  } }), process.env.NODE_ENV !== "production" && (ww(f, d), p.warnTooManyClasses = function(b, E) {
    var w = {}, S = !1;
    return function(C) {
      if (!S && (w[C] = !0, Object.keys(w).length >= 200)) {
        var _ = E ? ' with the id of "' + E + '"' : "";
        console.warn("Over 200 classes were generated for component " + b + _ + `.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), S = !0, w = {};
      }
    };
  }(f, d)), p.toString = function() {
    return "." + p.styledComponentId;
  }, o && U2(p, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), p;
}
var Ns = function(e) {
  return function t(n, r, o) {
    if (o === void 0 && (o = Dn), !gc.isValidElementType(r))
      return Fr(1, String(r));
    var i = function() {
      return n(r, o, Ln.apply(void 0, arguments));
    };
    return i.withConfig = function(a) {
      return t(n, r, Rn({}, o, {}, a));
    }, i.attrs = function(a) {
      return t(n, r, Rn({}, o, { attrs: Array.prototype.concat(o.attrs, a).filter(Boolean) }));
    }, i;
  }(Bv, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  Ns[e] = Ns(e);
});
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const Ui = Ns, wc = (e = "100%", t = e) => Ln`
  width: ${e};
  height: ${t};
`;
Ln`
  border: 1px solid red;
`;
const Tw = (e = "flex-start", t = "stretch", n = "row") => Ln`
  display: flex;
  justify-content: ${e};
  align-items: ${t};
  flex-direction: ${n};
`, Wv = (e = "&") => Ln`
  ${e}::-webkit-scrollbar {
    width: 10px;
  }

  ${e}::-webkit-scrollbar-track {
    background-color: ${({ theme: t }) => t.lightGrey};
  }

  ${e}::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
`, uo = (e) => Ln`
  ${({ theme: t }) => t[e]}
`, Nw = (e) => Ln`
  position: absolute;
  ${Object.entries(e).map(([t, n]) => `${t}: ${n};`).join(`
`)}
`, Mw = Ln`
  -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
`, Iw = Ui.div`
  ${Tw("center", "center")};
  ${Nw({
  left: "0",
  top: "0"
})}
  ${wc("100vw", "100vh")};
  background: rgba(0, 0, 0, 0.44);
  z-index: 100;
`, $w = Ui.div`
  display: grid;
  position: relative;
  ${wc("50vw", "60vh")};
  background: ${uo("grey")};
  border: 2px solid ${uo("lightGrey")};
  min-height: 300px;
  border-radius: 6px;
  cursor: grab;
  ${Mw};
  touch-action: none;
  overflow-y: auto;
  scroll-behavior: smooth;
  ${Wv()};
`, Aw = Ui.div`
  margin: 0 auto;
  margin-top: 18px;
  ${wc("60%", "100%")}
  & > * {
    cursor: initial;
    color: ${uo("light")};
  }
`, Fw = ({ onClose: e, isOpen: t, children: n }) => {
  const { Spring: r, Gesture: o } = Yu(), { opacity: i, transform: a } = M2(), s = r.useTransition(t, {
    from: i.from(),
    enter: i.to(),
    leave: i.from(),
    config: r.config.stiff
  }), c = r.useSpring({
    from: a.from(),
    to: a.to(t),
    config: r.config.wobbly
  }), [l, f] = r.useSpring(() => ({
    y: 0,
    x: 0,
    scale: 1
  })), { y: d, x: v, scale: g } = l, p = o.useDrag(
    ({ offset: [m, y], down: b }) => {
      f.start({
        y: b ? y : 0,
        immediate: !1,
        x: b ? m : 0,
        scale: b ? 1.07 : 1
      });
    },
    { from: () => [0, 0], filterTaps: !0, rubberband: !0, delay: 200 }
  ), h = (m) => {
    m.stopPropagation();
  };
  return /* @__PURE__ */ ct(Is, { children: s((m, y) => /* @__PURE__ */ ct(Ku, { when: y, children: /* @__PURE__ */ ct($v, { children: /* @__PURE__ */ ct(Iw, { style: m, onClick: e, as: r.a.div, children: /* @__PURE__ */ ct(
    $w,
    {
      style: { ...c, x: v, y: d, scale: g },
      ...p(),
      onClick: h,
      as: r.a.div,
      children: /* @__PURE__ */ ct(
        Qv,
        {
          damping: 0.05,
          syncCallbacks: !0,
          alwaysShowTracks: !0,
          children: /* @__PURE__ */ ct(Aw, { children: n })
        }
      )
    }
  ) }) }) })) });
}, pC = (e) => /* @__PURE__ */ ct(qu, { children: /* @__PURE__ */ ct(Fw, { ...e }) }), Dw = (e, t) => {
  const { Spring: n, Gesture: r } = Yu(), [{ y: o }, i] = n.useSpring(() => ({ y: t })), a = () => {
    i.start({ y: 0, immediate: !1, config: n.config.gentle });
  }, s = (d = 0) => {
    e(), i.start({
      y: t,
      immediate: !1,
      config: { ...n.config.stiff, velocity: d }
    });
  }, c = r.useDrag(
    ({ last: d, velocity: [, v], direction: [, g], offset: [, p], cancel: h }) => {
      p < -70 && h(), d ? p > t * 0.5 || v > 0.5 && g === 1 ? s(v) : a() : i.start({ y: p, immediate: g === -1 });
    },
    {
      from: () => [0, o.get()],
      filterTaps: !0,
      bounds: { top: 0 },
      rubberband: !0
    }
  ), l = o.to((d) => d < t ? "block" : "none");
  return {
    toggle: (d) => {
      d ? a() : s();
    },
    bind: c,
    div: n.a.div,
    springs: {
      display: l,
      y: o
    }
  };
}, Lw = Ui.div`
  padding-left: 15px;
  z-index: 15;
  position: fixed;
  right: 0;
  height: calc(100vh + 100px);
  width: calc(100% - 54px);
  border-radius: 6px 6px 0;
  background: ${uo("darkBlue")};
  border-top: 2px solid ${uo("lightGrey")};
  touch-action: none;
  bottom: ${({ $bottom: e }) => `calc(-100vh + ${e - 100}px)`};
  overflow-y: auto;
  box-sizing: border-box;
  scroll-behavior: smooth;
  ${Wv()};
`, kw = ({ children: e, onClose: t, isOpen: n, height: r }) => {
  const o = Dw(t, r);
  return jt(() => {
    o.toggle(n);
  }, [n]), /* @__PURE__ */ ct(
    Lw,
    {
      $bottom: r,
      ...o.bind(),
      style: o.springs,
      as: o.div,
      children: e
    }
  );
}, gC = (e) => /* @__PURE__ */ ct(qu, { children: /* @__PURE__ */ ct(kw, { ...e }) }), yC = ({
  onChange: e,
  value: t,
  options: n,
  defaultValue: r
}) => /* @__PURE__ */ ct(
  v2,
  {
    size: "middle",
    onChange: e,
    value: t,
    style: { width: 200 },
    options: n,
    defaultValue: r
  }
);
export {
  tC as AiOutlineClose,
  nC as AiOutlineHtml5,
  rC as AiOutlineInfoCircle,
  oC as AiOutlineSwap,
  qu as AnimationProvider,
  iC as BsJournals,
  aC as BsSearch,
  mC as ColorButton,
  Ku as Display,
  Om as ErrorBoundary,
  sC as GoTerminal,
  cC as GrClear,
  pm as LocalStorage,
  eC as LocalStorageClient,
  lC as LuTestTube2,
  uC as MdFindReplace,
  pC as Modal,
  Nv as NotificationsContext,
  Yw as NotificationsProvider,
  qw as Page,
  gC as Popover,
  Ww as RoutePaths,
  yC as Select,
  fC as SlInfo,
  dC as SlSizeFullscreen,
  vC as TfiSettings,
  hC as VscPlay,
  Bw as httpService,
  Zw as isFunction,
  Jw as isObject,
  C2 as isString,
  Uw as useAltKeyDown,
  Yu as useAnimations,
  gm as useBooleanState,
  Kw as useDebounce,
  Gw as useFullScreen,
  Xw as useNotifications,
  Qw as useOverflow
};
