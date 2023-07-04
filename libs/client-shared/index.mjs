import { useState as C, useRef as j } from "react";
import { jsxs as w, jsx as d, Fragment as V } from "react/jsx-runtime";
const L = {
  EDITOR_THEME: "EDITOR_THEME",
  EDITOR_CONTENT_DATA: "EDITOR_CONTENT_DATA"
}, G = {
  MAIN: "/",
  EDITOR: "/edit"
}, Q = () => {
  const [_, t] = C([]);
  return {
    on: (r) => {
      Object.entries(r).forEach(([e, o]) => {
        const i = (u) => {
          if (u.altKey && u.key === e.toLowerCase())
            return u.preventDefault(), o?.(), !1;
        };
        t([..._, i]), document.addEventListener("keydown", i);
      });
    },
    clear: () => {
      _.forEach((r) => {
        document.removeEventListener("keydown", r);
      });
    }
  };
}, X = (_ = !1) => {
  const [t, r] = C(_);
  return {
    off: () => r(!1),
    on: () => r(!0),
    toggle: () => r(!t),
    val: t
  };
}, Y = (_, t) => {
  const r = j();
  return (...e) => {
    r.current && clearTimeout(r.current), r.current = setTimeout(() => {
      _(...e);
    }, t);
  };
}, Z = ({ when: _, children: t }) => _ ? t : null;
var c;
c = { __e: function(_, t, r, e) {
  for (var o, i, u; t = t.__; )
    if ((o = t.__c) && !o.__)
      try {
        if ((i = o.constructor) && i.getDerivedStateFromError != null && (o.setState(i.getDerivedStateFromError(_)), u = o.__d), o.componentDidCatch != null && (o.componentDidCatch(_, e || {}), u = o.__d), u)
          return o.__E = o;
      } catch (a) {
        _ = a;
      }
  throw _;
} }, typeof Promise == "function" && Promise.prototype.then.bind(Promise.resolve());
var p, n, E, H, g = 0, I = [], m = [], N = c.__b, D = c.__r, b = c.diffed, S = c.__c, O = c.unmount;
function F(_, t) {
  c.__h && c.__h(n, _, g || t), g = 0;
  var r = n.__H || (n.__H = { __: [], __h: [] });
  return _ >= r.__.length && r.__.push({ __V: m }), r.__[_];
}
function q(_) {
  return g = 1, B(R, _);
}
function B(_, t, r) {
  var e = F(p++, 2);
  if (e.t = _, !e.__c && (e.__ = [r ? r(t) : R(void 0, t), function(a) {
    var f = e.__N ? e.__N[0] : e.__[0], l = e.t(f, a);
    f !== l && (e.__N = [l, e.__[1]], e.__c.setState({}));
  }], e.__c = n, !n.u)) {
    var o = function(a, f, l) {
      if (!e.__c.__H)
        return !0;
      var h = e.__c.__H.__.filter(function(s) {
        return s.__c;
      });
      if (h.every(function(s) {
        return !s.__N;
      }))
        return !i || i.call(this, a, f, l);
      var T = !1;
      return h.forEach(function(s) {
        if (s.__N) {
          var P = s.__[0];
          s.__ = s.__N, s.__N = void 0, P !== s.__[0] && (T = !0);
        }
      }), !(!T && e.__c.props === a) && (!i || i.call(this, a, f, l));
    };
    n.u = !0;
    var i = n.shouldComponentUpdate, u = n.componentWillUpdate;
    n.componentWillUpdate = function(a, f, l) {
      if (this.__e) {
        var h = i;
        i = void 0, o(a, f, l), i = h;
      }
      u && u.call(this, a, f, l);
    }, n.shouldComponentUpdate = o;
  }
  return e.__N || e.__;
}
function J(_) {
  var t = F(p++, 10), r = q();
  return t.__ = _, n.componentDidCatch || (n.componentDidCatch = function(e, o) {
    t.__ && t.__(e, o), r[1](e);
  }), [r[0], function() {
    r[1](void 0);
  }];
}
function U() {
  for (var _; _ = I.shift(); )
    if (_.__P && _.__H)
      try {
        _.__H.__h.forEach(v), _.__H.__h.forEach(y), _.__H.__h = [];
      } catch (t) {
        _.__H.__h = [], c.__e(t, _.__v);
      }
}
c.__b = function(_) {
  n = null, N && N(_);
}, c.__r = function(_) {
  D && D(_), p = 0;
  var t = (n = _.__c).__H;
  t && (E === n ? (t.__h = [], n.__h = [], t.__.forEach(function(r) {
    r.__N && (r.__ = r.__N), r.__V = m, r.__N = r.i = void 0;
  })) : (t.__h.forEach(v), t.__h.forEach(y), t.__h = [], p = 0)), E = n;
}, c.diffed = function(_) {
  b && b(_);
  var t = _.__c;
  t && t.__H && (t.__H.__h.length && (I.push(t) !== 1 && H === c.requestAnimationFrame || ((H = c.requestAnimationFrame) || x)(U)), t.__H.__.forEach(function(r) {
    r.i && (r.__H = r.i), r.__V !== m && (r.__ = r.__V), r.i = void 0, r.__V = m;
  })), E = n = null;
}, c.__c = function(_, t) {
  t.some(function(r) {
    try {
      r.__h.forEach(v), r.__h = r.__h.filter(function(e) {
        return !e.__ || y(e);
      });
    } catch (e) {
      t.some(function(o) {
        o.__h && (o.__h = []);
      }), t = [], c.__e(e, r.__v);
    }
  }), S && S(_, t);
}, c.unmount = function(_) {
  O && O(_);
  var t, r = _.__c;
  r && r.__H && (r.__H.__.forEach(function(e) {
    try {
      v(e);
    } catch (o) {
      t = o;
    }
  }), r.__H = void 0, t && c.__e(t, r.__v));
};
var A = typeof requestAnimationFrame == "function";
function x(_) {
  var t, r = function() {
    clearTimeout(e), A && cancelAnimationFrame(t), setTimeout(_);
  }, e = setTimeout(r, 100);
  A && (t = requestAnimationFrame(r));
}
function v(_) {
  var t = n, r = _.__c;
  typeof r == "function" && (_.__c = void 0, r()), n = t;
}
function y(_) {
  var t = n;
  _.__c = _.__(), n = t;
}
function R(_, t) {
  return typeof t == "function" ? t(_) : t;
}
const M = ({ errorInfo: _ }) => /* @__PURE__ */ w("div", { children: [
  "Custom Error Boundary. ",
  /* @__PURE__ */ d("br", {})
] }), k = ({ children: _ }) => {
  const [t] = J();
  return console.error(t), t ? /* @__PURE__ */ d(M, { errorInfo: t }) : /* @__PURE__ */ d(V, { children: _ });
}, __ = ({ children: _ }) => /* @__PURE__ */ d(k, { children: _ }), t_ = (_) => typeof _ == "object" && _ !== null, K = (_) => typeof _ == "string", r_ = (_) => typeof _ == "function";
class e_ {
  get(t, r) {
    const e = localStorage.getItem(t);
    return e ? W(e) ? JSON.parse(e) : e : r;
  }
  set(t, r) {
    if (t in L) {
      if (K(r))
        return localStorage.setItem(t, r);
      localStorage.setItem(t, JSON.stringify(r));
    }
  }
}
const W = (_) => {
  try {
    JSON.parse(_);
  } catch {
    return !1;
  }
  return !0;
};
export {
  Z as Display,
  k as ErrorBoundary,
  L as LocalStorage,
  e_ as LocalStorageClient,
  __ as Page,
  G as RoutePaths,
  r_ as isFunction,
  t_ as isObject,
  K as isString,
  Q as useAltKeyDown,
  X as useBooleanState,
  Y as useDebounce
};
