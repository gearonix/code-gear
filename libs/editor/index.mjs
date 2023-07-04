import { jsx as Xt, jsxs as Md, Fragment as Dm } from "react/jsx-runtime";
import * as f from "react";
import Xe, { useContext as Gn, createContext as vo, useRef as ae, useLayoutEffect as Fm, useEffect as ot, useState as rt, useMemo as Fr, useCallback as _n, forwardRef as wa, useImperativeHandle as Lm, memo as ci } from "react";
import Vm, { createPortal as km, unstable_batchedUpdates as Rd, flushSync as jm } from "react-dom";
function hn(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Qe(e) {
  "@babel/helpers - typeof";
  return Qe = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Qe(e);
}
function Hm(e, t) {
  if (Qe(e) !== "object" || e === null)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Qe(r) !== "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Td(e) {
  var t = Hm(e, "string");
  return Qe(t) === "symbol" ? t : String(t);
}
function cc(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Td(r.key), r);
  }
}
function pn(e, t, n) {
  return t && cc(e.prototype, t), n && cc(e, n), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function al(e, t) {
  return al = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
    return r.__proto__ = i, r;
  }, al(e, t);
}
function Si(e, t) {
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
  }), t && al(e, t);
}
function Ca(e) {
  return Ca = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Ca(e);
}
function zm() {
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
function Oa(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Bm(e, t) {
  if (t && (Qe(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Oa(e);
}
function Ei(e) {
  var t = zm();
  return function() {
    var r = Ca(e), i;
    if (t) {
      var o = Ca(this).constructor;
      i = Reflect.construct(r, arguments, o);
    } else
      i = r.apply(this, arguments);
    return Bm(this, i);
  };
}
function Um(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var $d = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function n() {
      for (var r = [], i = 0; i < arguments.length; i++) {
        var o = arguments[i];
        if (o) {
          var a = typeof o;
          if (a === "string" || a === "number")
            r.push(o);
          else if (Array.isArray(o)) {
            if (o.length) {
              var s = n.apply(null, o);
              s && r.push(s);
            }
          } else if (a === "object") {
            if (o.toString !== Object.prototype.toString && !o.toString.toString().includes("[native code]")) {
              r.push(o.toString());
              continue;
            }
            for (var l in o)
              t.call(o, l) && o[l] && r.push(l);
          }
        }
      }
      return r.join(" ");
    }
    e.exports ? (n.default = n, e.exports = n) : window.classNames = n;
  })();
})($d);
var Wm = $d.exports;
const Ee = /* @__PURE__ */ Um(Wm);
function ge() {
  return ge = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, ge.apply(this, arguments);
}
var sl = { exports: {} }, st = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fc;
function Km() {
  if (fc)
    return st;
  fc = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, c = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, p = e ? Symbol.for("react.lazy") : 60116, m = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, g = e ? Symbol.for("react.responder") : 60118, y = e ? Symbol.for("react.scope") : 60119;
  function S(_) {
    if (typeof _ == "object" && _ !== null) {
      var E = _.$$typeof;
      switch (E) {
        case t:
          switch (_ = _.type, _) {
            case l:
            case u:
            case r:
            case o:
            case i:
            case d:
              return _;
            default:
              switch (_ = _ && _.$$typeof, _) {
                case s:
                case c:
                case p:
                case h:
                case a:
                  return _;
                default:
                  return E;
              }
          }
        case n:
          return E;
      }
    }
  }
  function C(_) {
    return S(_) === u;
  }
  return st.AsyncMode = l, st.ConcurrentMode = u, st.ContextConsumer = s, st.ContextProvider = a, st.Element = t, st.ForwardRef = c, st.Fragment = r, st.Lazy = p, st.Memo = h, st.Portal = n, st.Profiler = o, st.StrictMode = i, st.Suspense = d, st.isAsyncMode = function(_) {
    return C(_) || S(_) === l;
  }, st.isConcurrentMode = C, st.isContextConsumer = function(_) {
    return S(_) === s;
  }, st.isContextProvider = function(_) {
    return S(_) === a;
  }, st.isElement = function(_) {
    return typeof _ == "object" && _ !== null && _.$$typeof === t;
  }, st.isForwardRef = function(_) {
    return S(_) === c;
  }, st.isFragment = function(_) {
    return S(_) === r;
  }, st.isLazy = function(_) {
    return S(_) === p;
  }, st.isMemo = function(_) {
    return S(_) === h;
  }, st.isPortal = function(_) {
    return S(_) === n;
  }, st.isProfiler = function(_) {
    return S(_) === o;
  }, st.isStrictMode = function(_) {
    return S(_) === i;
  }, st.isSuspense = function(_) {
    return S(_) === d;
  }, st.isValidElementType = function(_) {
    return typeof _ == "string" || typeof _ == "function" || _ === r || _ === u || _ === o || _ === i || _ === d || _ === v || typeof _ == "object" && _ !== null && (_.$$typeof === p || _.$$typeof === h || _.$$typeof === a || _.$$typeof === s || _.$$typeof === c || _.$$typeof === b || _.$$typeof === g || _.$$typeof === y || _.$$typeof === m);
  }, st.typeOf = S, st;
}
var lt = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dc;
function Gm() {
  return dc || (dc = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, c = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, p = e ? Symbol.for("react.lazy") : 60116, m = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, g = e ? Symbol.for("react.responder") : 60118, y = e ? Symbol.for("react.scope") : 60119;
    function S(L) {
      return typeof L == "string" || typeof L == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      L === r || L === u || L === o || L === i || L === d || L === v || typeof L == "object" && L !== null && (L.$$typeof === p || L.$$typeof === h || L.$$typeof === a || L.$$typeof === s || L.$$typeof === c || L.$$typeof === b || L.$$typeof === g || L.$$typeof === y || L.$$typeof === m);
    }
    function C(L) {
      if (typeof L == "object" && L !== null) {
        var le = L.$$typeof;
        switch (le) {
          case t:
            var J = L.type;
            switch (J) {
              case l:
              case u:
              case r:
              case o:
              case i:
              case d:
                return J;
              default:
                var pe = J && J.$$typeof;
                switch (pe) {
                  case s:
                  case c:
                  case p:
                  case h:
                  case a:
                    return pe;
                  default:
                    return le;
                }
            }
          case n:
            return le;
        }
      }
    }
    var _ = l, E = u, x = s, I = a, R = t, N = c, $ = r, w = p, O = h, P = n, M = o, T = i, A = d, k = !1;
    function H(L) {
      return k || (k = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), Y(L) || C(L) === l;
    }
    function Y(L) {
      return C(L) === u;
    }
    function K(L) {
      return C(L) === s;
    }
    function V(L) {
      return C(L) === a;
    }
    function G(L) {
      return typeof L == "object" && L !== null && L.$$typeof === t;
    }
    function q(L) {
      return C(L) === c;
    }
    function Z(L) {
      return C(L) === r;
    }
    function ce(L) {
      return C(L) === p;
    }
    function ee(L) {
      return C(L) === h;
    }
    function B(L) {
      return C(L) === n;
    }
    function Q(L) {
      return C(L) === o;
    }
    function me(L) {
      return C(L) === i;
    }
    function te(L) {
      return C(L) === d;
    }
    lt.AsyncMode = _, lt.ConcurrentMode = E, lt.ContextConsumer = x, lt.ContextProvider = I, lt.Element = R, lt.ForwardRef = N, lt.Fragment = $, lt.Lazy = w, lt.Memo = O, lt.Portal = P, lt.Profiler = M, lt.StrictMode = T, lt.Suspense = A, lt.isAsyncMode = H, lt.isConcurrentMode = Y, lt.isContextConsumer = K, lt.isContextProvider = V, lt.isElement = G, lt.isForwardRef = q, lt.isFragment = Z, lt.isLazy = ce, lt.isMemo = ee, lt.isPortal = B, lt.isProfiler = Q, lt.isStrictMode = me, lt.isSuspense = te, lt.isValidElementType = S, lt.typeOf = C;
  }()), lt;
}
process.env.NODE_ENV === "production" ? sl.exports = Km() : sl.exports = Gm();
var Id = sl.exports;
function or(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = [];
  return Xe.Children.forEach(e, function(r) {
    r == null && !t.keepEmpty || (Array.isArray(r) ? n = n.concat(or(r)) : Id.isFragment(r) && r.props ? n = n.concat(or(r.props.children, t)) : n.push(r));
  }), n;
}
var ll = {}, cu = [], qm = function(t) {
  cu.push(t);
};
function Qi(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var n = cu.reduce(function(r, i) {
      return i(r ?? "", "warning");
    }, t);
    n && console.error("Warning: ".concat(n));
  }
}
function Xm(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var n = cu.reduce(function(r, i) {
      return i(r ?? "", "note");
    }, t);
    n && console.warn("Note: ".concat(n));
  }
}
function Ad() {
  ll = {};
}
function Dd(e, t, n) {
  !t && !ll[n] && (e(!1, n), ll[n] = !0);
}
function $e(e, t) {
  Dd(Qi, e, t);
}
function ul(e, t) {
  Dd(Xm, e, t);
}
$e.preMessage = qm;
$e.resetWarned = Ad;
$e.noteOnce = ul;
function U(e, t, n) {
  return t = Td(t), t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function vc(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function D(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? vc(Object(n), !0).forEach(function(r) {
      U(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : vc(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function ho(e, t, n) {
  var r = f.useRef({});
  return (!("value" in r.current) || n(r.current.condition, t)) && (r.current.value = e(), r.current.condition = t), r.current.value;
}
function fu(e, t) {
  typeof e == "function" ? e(t) : Qe(e) === "object" && e && "current" in e && (e.current = t);
}
function wi() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r = t.filter(function(i) {
    return i;
  });
  return r.length <= 1 ? r[0] : function(i) {
    t.forEach(function(o) {
      fu(o, i);
    });
  };
}
function po() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return ho(function() {
    return wi.apply(void 0, t);
  }, t, function(r, i) {
    return r.length === i.length && r.every(function(o, a) {
      return o === i[a];
    });
  });
}
function Ci(e) {
  var t, n, r = Id.isMemo(e) ? e.type.type : e.type;
  return !(typeof r == "function" && !((t = r.prototype) !== null && t !== void 0 && t.render) || typeof e == "function" && !((n = e.prototype) !== null && n !== void 0 && n.render));
}
function xa(e) {
  return e instanceof HTMLElement || e instanceof SVGElement;
}
function Na(e) {
  return xa(e) ? e : e instanceof Xe.Component ? Vm.findDOMNode(e) : null;
}
var Fd = function() {
  if (typeof Map < "u")
    return Map;
  function e(t, n) {
    var r = -1;
    return t.some(function(i, o) {
      return i[0] === n ? (r = o, !0) : !1;
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
        var r = e(this.__entries__, n), i = this.__entries__[r];
        return i && i[1];
      }, t.prototype.set = function(n, r) {
        var i = e(this.__entries__, n);
        ~i ? this.__entries__[i][1] = r : this.__entries__.push([n, r]);
      }, t.prototype.delete = function(n) {
        var r = this.__entries__, i = e(r, n);
        ~i && r.splice(i, 1);
      }, t.prototype.has = function(n) {
        return !!~e(this.__entries__, n);
      }, t.prototype.clear = function() {
        this.__entries__.splice(0);
      }, t.prototype.forEach = function(n, r) {
        r === void 0 && (r = null);
        for (var i = 0, o = this.__entries__; i < o.length; i++) {
          var a = o[i];
          n.call(r, a[1], a[0]);
        }
      }, t;
    }()
  );
}(), cl = typeof window < "u" && typeof document < "u" && window.document === document, Pa = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), Ym = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(Pa) : function(e) {
    return setTimeout(function() {
      return e(Date.now());
    }, 1e3 / 60);
  };
}(), Qm = 2;
function Jm(e, t) {
  var n = !1, r = !1, i = 0;
  function o() {
    n && (n = !1, e()), r && s();
  }
  function a() {
    Ym(o);
  }
  function s() {
    var l = Date.now();
    if (n) {
      if (l - i < Qm)
        return;
      r = !0;
    } else
      n = !0, r = !1, setTimeout(a, t);
    i = l;
  }
  return s;
}
var Zm = 20, eg = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], tg = typeof MutationObserver < "u", ng = (
  /** @class */
  function() {
    function e() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = Jm(this.refresh.bind(this), Zm);
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
      !cl || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), tg ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, e.prototype.disconnect_ = function() {
      !cl || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, e.prototype.onTransitionEnd_ = function(t) {
      var n = t.propertyName, r = n === void 0 ? "" : n, i = eg.some(function(o) {
        return !!~r.indexOf(o);
      });
      i && this.refresh();
    }, e.getInstance = function() {
      return this.instance_ || (this.instance_ = new e()), this.instance_;
    }, e.instance_ = null, e;
  }()
), Ld = function(e, t) {
  for (var n = 0, r = Object.keys(t); n < r.length; n++) {
    var i = r[n];
    Object.defineProperty(e, i, {
      value: t[i],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return e;
}, fi = function(e) {
  var t = e && e.ownerDocument && e.ownerDocument.defaultView;
  return t || Pa;
}, Vd = rs(0, 0, 0, 0);
function Ma(e) {
  return parseFloat(e) || 0;
}
function hc(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  return t.reduce(function(r, i) {
    var o = e["border-" + i + "-width"];
    return r + Ma(o);
  }, 0);
}
function rg(e) {
  for (var t = ["top", "right", "bottom", "left"], n = {}, r = 0, i = t; r < i.length; r++) {
    var o = i[r], a = e["padding-" + o];
    n[o] = Ma(a);
  }
  return n;
}
function ig(e) {
  var t = e.getBBox();
  return rs(0, 0, t.width, t.height);
}
function og(e) {
  var t = e.clientWidth, n = e.clientHeight;
  if (!t && !n)
    return Vd;
  var r = fi(e).getComputedStyle(e), i = rg(r), o = i.left + i.right, a = i.top + i.bottom, s = Ma(r.width), l = Ma(r.height);
  if (r.boxSizing === "border-box" && (Math.round(s + o) !== t && (s -= hc(r, "left", "right") + o), Math.round(l + a) !== n && (l -= hc(r, "top", "bottom") + a)), !sg(e)) {
    var u = Math.round(s + o) - t, c = Math.round(l + a) - n;
    Math.abs(u) !== 1 && (s -= u), Math.abs(c) !== 1 && (l -= c);
  }
  return rs(i.left, i.top, s, l);
}
var ag = function() {
  return typeof SVGGraphicsElement < "u" ? function(e) {
    return e instanceof fi(e).SVGGraphicsElement;
  } : function(e) {
    return e instanceof fi(e).SVGElement && typeof e.getBBox == "function";
  };
}();
function sg(e) {
  return e === fi(e).document.documentElement;
}
function lg(e) {
  return cl ? ag(e) ? ig(e) : og(e) : Vd;
}
function ug(e) {
  var t = e.x, n = e.y, r = e.width, i = e.height, o = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, a = Object.create(o.prototype);
  return Ld(a, {
    x: t,
    y: n,
    width: r,
    height: i,
    top: n,
    right: t + r,
    bottom: i + n,
    left: t
  }), a;
}
function rs(e, t, n, r) {
  return { x: e, y: t, width: n, height: r };
}
var cg = (
  /** @class */
  function() {
    function e(t) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = rs(0, 0, 0, 0), this.target = t;
    }
    return e.prototype.isActive = function() {
      var t = lg(this.target);
      return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight;
    }, e.prototype.broadcastRect = function() {
      var t = this.contentRect_;
      return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t;
    }, e;
  }()
), fg = (
  /** @class */
  function() {
    function e(t, n) {
      var r = ug(n);
      Ld(this, { target: t, contentRect: r });
    }
    return e;
  }()
), dg = (
  /** @class */
  function() {
    function e(t, n, r) {
      if (this.activeObservations_ = [], this.observations_ = new Fd(), typeof t != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = t, this.controller_ = n, this.callbackCtx_ = r;
    }
    return e.prototype.observe = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof fi(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var n = this.observations_;
        n.has(t) || (n.set(t, new cg(t)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, e.prototype.unobserve = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof fi(t).Element))
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
          return new fg(r.target, r.broadcastRect());
        });
        this.callback_.call(t, n, t), this.clearActive();
      }
    }, e.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, e.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, e;
  }()
), kd = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new Fd(), jd = (
  /** @class */
  function() {
    function e(t) {
      if (!(this instanceof e))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var n = ng.getInstance(), r = new dg(t, n, this);
      kd.set(this, r);
    }
    return e;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(e) {
  jd.prototype[e] = function() {
    var t;
    return (t = kd.get(this))[e].apply(t, arguments);
  };
});
var vg = function() {
  return typeof Pa.ResizeObserver < "u" ? Pa.ResizeObserver : jd;
}(), rr = /* @__PURE__ */ new Map();
function Hd(e) {
  e.forEach(function(t) {
    var n, r = t.target;
    (n = rr.get(r)) === null || n === void 0 || n.forEach(function(i) {
      return i(r);
    });
  });
}
var zd = new vg(Hd);
process.env.NODE_ENV;
process.env.NODE_ENV;
function hg(e, t) {
  rr.has(e) || (rr.set(e, /* @__PURE__ */ new Set()), zd.observe(e)), rr.get(e).add(t);
}
function pg(e, t) {
  rr.has(e) && (rr.get(e).delete(t), rr.get(e).size || (zd.unobserve(e), rr.delete(e)));
}
var mg = /* @__PURE__ */ function(e) {
  Si(n, e);
  var t = Ei(n);
  function n() {
    return hn(this, n), t.apply(this, arguments);
  }
  return pn(n, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), n;
}(f.Component), fl = /* @__PURE__ */ f.createContext(null);
function gg(e) {
  var t = e.children, n = e.onBatchResize, r = f.useRef(0), i = f.useRef([]), o = f.useContext(fl), a = f.useCallback(function(s, l, u) {
    r.current += 1;
    var c = r.current;
    i.current.push({
      size: s,
      element: l,
      data: u
    }), Promise.resolve().then(function() {
      c === r.current && (n?.(i.current), i.current = []);
    }), o?.(s, l, u);
  }, [n, o]);
  return /* @__PURE__ */ f.createElement(fl.Provider, {
    value: a
  }, t);
}
function bg(e, t) {
  var n = e.children, r = e.disabled, i = f.useRef(null), o = f.useRef(null), a = f.useContext(fl), s = typeof n == "function", l = s ? n(i) : n, u = f.useRef({
    width: -1,
    height: -1,
    offsetWidth: -1,
    offsetHeight: -1
  }), c = !s && /* @__PURE__ */ f.isValidElement(l) && Ci(l), d = c ? l.ref : null, v = f.useMemo(function() {
    return wi(d, i);
  }, [d, i]), h = function() {
    return Na(i.current) || Na(o.current);
  };
  f.useImperativeHandle(t, function() {
    return h();
  });
  var p = f.useRef(e);
  p.current = e;
  var m = f.useCallback(function(b) {
    var g = p.current, y = g.onResize, S = g.data, C = b.getBoundingClientRect(), _ = C.width, E = C.height, x = b.offsetWidth, I = b.offsetHeight, R = Math.floor(_), N = Math.floor(E);
    if (u.current.width !== R || u.current.height !== N || u.current.offsetWidth !== x || u.current.offsetHeight !== I) {
      var $ = {
        width: R,
        height: N,
        offsetWidth: x,
        offsetHeight: I
      };
      u.current = $;
      var w = x === Math.round(_) ? _ : x, O = I === Math.round(E) ? E : I, P = D(D({}, $), {}, {
        offsetWidth: w,
        offsetHeight: O
      });
      a?.(P, b, S), y && Promise.resolve().then(function() {
        y(P, b);
      });
    }
  }, []);
  return f.useEffect(function() {
    var b = h();
    return b && !r && hg(b, m), function() {
      return pg(b, m);
    };
  }, [i.current, r]), /* @__PURE__ */ f.createElement(mg, {
    ref: o
  }, c ? /* @__PURE__ */ f.cloneElement(l, {
    ref: v
  }) : l);
}
var Bd = /* @__PURE__ */ f.forwardRef(bg);
process.env.NODE_ENV !== "production" && (Bd.displayName = "SingleObserver");
var yg = "rc-observer-key";
function _g(e, t) {
  var n = e.children, r = typeof n == "function" ? [n] : or(n);
  return process.env.NODE_ENV !== "production" && (r.length > 1 ? Qi(!1, "Find more than one child node with `children` in ResizeObserver. Please use ResizeObserver.Collection instead.") : r.length === 0 && Qi(!1, "`children` of ResizeObserver is empty. Nothing is in observe.")), r.map(function(i, o) {
    var a = i?.key || "".concat(yg, "-").concat(o);
    return /* @__PURE__ */ f.createElement(Bd, ge({}, e, {
      key: a,
      ref: o === 0 ? t : void 0
    }), i);
  });
}
var ar = /* @__PURE__ */ f.forwardRef(_g);
process.env.NODE_ENV !== "production" && (ar.displayName = "ResizeObserver");
ar.Collection = gg;
function is(e, t) {
  var n = D({}, e);
  return Array.isArray(t) && t.forEach(function(r) {
    delete n[r];
  }), n;
}
function dl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function Sg(e) {
  if (Array.isArray(e))
    return dl(e);
}
function Ud(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function du(e, t) {
  if (e) {
    if (typeof e == "string")
      return dl(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return dl(e, t);
  }
}
function Eg() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function de(e) {
  return Sg(e) || Ud(e) || du(e) || Eg();
}
var Wd = function(t) {
  return +setTimeout(t, 16);
}, Kd = function(t) {
  return clearTimeout(t);
};
typeof window < "u" && "requestAnimationFrame" in window && (Wd = function(t) {
  return window.requestAnimationFrame(t);
}, Kd = function(t) {
  return window.cancelAnimationFrame(t);
});
var pc = 0, vu = /* @__PURE__ */ new Map();
function Gd(e) {
  vu.delete(e);
}
var Ot = function(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  pc += 1;
  var r = pc;
  function i(o) {
    if (o === 0)
      Gd(r), t();
    else {
      var a = Wd(function() {
        i(o - 1);
      });
      vu.set(r, a);
    }
  }
  return i(n), r;
};
Ot.cancel = function(e) {
  var t = vu.get(e);
  return Gd(t), Kd(t);
};
function hu(e) {
  for (var t = 0, n, r = 0, i = e.length; i >= 4; ++r, i -= 4)
    n = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24, n = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= /* k >>> r: */
    n >>> 24, t = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (i) {
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
function wg(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), i, o;
  for (o = 0; o < r.length; o++)
    i = r[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function We(e, t) {
  if (e == null)
    return {};
  var n = wg(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++)
      r = o[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function pu(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, r = /* @__PURE__ */ new Set();
  function i(o, a) {
    var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, l = r.has(o);
    if ($e(!l, "Warning: There may be circular references"), l)
      return !1;
    if (o === a)
      return !0;
    if (n && s > 1)
      return !1;
    r.add(o);
    var u = s + 1;
    if (Array.isArray(o)) {
      if (!Array.isArray(a) || o.length !== a.length)
        return !1;
      for (var c = 0; c < o.length; c++)
        if (!i(o[c], a[c], u))
          return !1;
      return !0;
    }
    if (o && a && Qe(o) === "object" && Qe(a) === "object") {
      var d = Object.keys(o);
      return d.length !== Object.keys(a).length ? !1 : d.every(function(v) {
        return i(o[v], a[v], u);
      });
    }
    return !1;
  }
  return i(e, t);
}
var Cg = /* @__PURE__ */ function() {
  function e(t) {
    hn(this, e), U(this, "instanceId", void 0), U(this, "cache", /* @__PURE__ */ new Map()), this.instanceId = t;
  }
  return pn(e, [{
    key: "get",
    value: function(n) {
      return this.cache.get(n.join("%")) || null;
    }
  }, {
    key: "update",
    value: function(n, r) {
      var i = n.join("%"), o = this.cache.get(i), a = r(o);
      a === null ? this.cache.delete(i) : this.cache.set(i, a);
    }
  }]), e;
}(), vl = "data-token-hash", li = "data-css-hash", Og = "data-dev-cache-path", ei = "__cssinjs_instance__";
function xg() {
  var e = Math.random().toString(12).slice(2);
  if (typeof document < "u" && document.head && document.body) {
    var t = document.body.querySelectorAll("style[".concat(li, "]")) || [], n = document.head.firstChild;
    Array.from(t).forEach(function(i) {
      i[ei] = i[ei] || e, i[ei] === e && document.head.insertBefore(i, n);
    });
    var r = {};
    Array.from(document.querySelectorAll("style[".concat(li, "]"))).forEach(function(i) {
      var o = i.getAttribute(li);
      if (r[o]) {
        if (i[ei] === e) {
          var a;
          (a = i.parentNode) === null || a === void 0 || a.removeChild(i);
        }
      } else
        r[o] = !0;
    });
  }
  return new Cg(e);
}
var Ng = /* @__PURE__ */ f.createContext({
  hashPriority: "low",
  cache: xg(),
  defaultCache: !0
});
const mu = Ng;
function nn() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Pg(e, t) {
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
var mc = "data-rc-order", Mg = "rc-util-key", hl = /* @__PURE__ */ new Map();
function qd() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.mark;
  return t ? t.startsWith("data-") ? t : "data-".concat(t) : Mg;
}
function os(e) {
  if (e.attachTo)
    return e.attachTo;
  var t = document.querySelector("head");
  return t || document.body;
}
function Rg(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function Xd(e) {
  return Array.from((hl.get(e) || e).children).filter(function(t) {
    return t.tagName === "STYLE";
  });
}
function Yd(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!nn())
    return null;
  var n = t.csp, r = t.prepend, i = document.createElement("style");
  i.setAttribute(mc, Rg(r)), n != null && n.nonce && (i.nonce = n?.nonce), i.innerHTML = e;
  var o = os(t), a = o.firstChild;
  if (r) {
    if (r === "queue") {
      var s = Xd(o).filter(function(l) {
        return ["prepend", "prependQueue"].includes(l.getAttribute(mc));
      });
      if (s.length)
        return o.insertBefore(i, s[s.length - 1].nextSibling), i;
    }
    o.insertBefore(i, a);
  } else
    o.appendChild(i);
  return i;
}
function Qd(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = os(t);
  return Xd(n).find(function(r) {
    return r.getAttribute(qd(t)) === e;
  });
}
function Ra(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = Qd(e, t);
  if (n) {
    var r = os(t);
    r.removeChild(n);
  }
}
function Tg(e, t) {
  var n = hl.get(e);
  if (!n || !Pg(document, n)) {
    var r = Yd("", t), i = r.parentNode;
    hl.set(e, i), e.removeChild(r);
  }
}
function di(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = os(n);
  Tg(r, n);
  var i = Qd(t, n);
  if (i) {
    var o, a;
    if ((o = n.csp) !== null && o !== void 0 && o.nonce && i.nonce !== ((a = n.csp) === null || a === void 0 ? void 0 : a.nonce)) {
      var s;
      i.nonce = (s = n.csp) === null || s === void 0 ? void 0 : s.nonce;
    }
    return i.innerHTML !== e && (i.innerHTML = e), i;
  }
  var l = Yd(e, n);
  return l.setAttribute(qd(n), t), l;
}
function Ta(e) {
  var t = "";
  return Object.keys(e).forEach(function(n) {
    var r = e[n];
    t += n, r && Qe(r) === "object" ? t += Ta(r) : t += r;
  }), t;
}
function $g(e, t) {
  return hu("".concat(t, "_").concat(Ta(e)));
}
var Ui = "layer-".concat(Date.now(), "-").concat(Math.random()).replace(/\./g, ""), Jd = "903px";
function Ig(e, t) {
  if (nn()) {
    var n;
    di(e, Ui);
    var r = document.createElement("div");
    r.style.position = "fixed", r.style.left = "0", r.style.top = "0", t?.(r), document.body.appendChild(r), process.env.NODE_ENV !== "production" && (r.innerHTML = "Test", r.style.zIndex = "9999999");
    var i = getComputedStyle(r).width === Jd;
    return (n = r.parentNode) === null || n === void 0 || n.removeChild(r), Ra(Ui), i;
  }
  return !1;
}
var $s = void 0;
function Ag() {
  return $s === void 0 && ($s = Ig("@layer ".concat(Ui, " { .").concat(Ui, " { width: ").concat(Jd, "!important; } }"), function(e) {
    e.className = Ui;
  })), $s;
}
function Zd(e) {
  if (Array.isArray(e))
    return e;
}
function Dg(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, i, o, a, s = [], l = !0, u = !1;
    try {
      if (o = (n = n.call(e)).next, t === 0) {
        if (Object(n) !== n)
          return;
        l = !1;
      } else
        for (; !(l = (r = o.call(n)).done) && (s.push(r.value), s.length !== t); l = !0)
          ;
    } catch (c) {
      u = !0, i = c;
    } finally {
      try {
        if (!l && n.return != null && (a = n.return(), Object(a) !== a))
          return;
      } finally {
        if (u)
          throw i;
      }
    }
    return s;
  }
}
function ev() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function F(e, t) {
  return Zd(e) || Dg(e, t) || du(e, t) || ev();
}
function Fg() {
  return !1;
}
var pl = !1;
function Lg() {
  return pl;
}
const Vg = process.env.NODE_ENV === "production" ? Fg : Lg;
if (process.env.NODE_ENV !== "production" && typeof module < "u" && module && module.hot) {
  var Is = window;
  if (typeof Is.webpackHotUpdate == "function") {
    var kg = Is.webpackHotUpdate;
    Is.webpackHotUpdate = function() {
      return pl = !0, setTimeout(function() {
        pl = !1;
      }, 0), kg.apply(void 0, arguments);
    };
  }
}
var gc = process.env.NODE_ENV !== "test" && nn() ? f.useLayoutEffect : f.useEffect, Mt = function(t, n) {
  var r = f.useRef(!0);
  gc(function() {
    return t(r.current);
  }, n), gc(function() {
    return r.current = !1, function() {
      r.current = !0;
    };
  }, []);
}, ml = function(t, n) {
  Mt(function(r) {
    if (!r)
      return t();
  }, n);
}, jg = D({}, f), Hg = jg.useInsertionEffect, zg = Hg || Mt;
const Bg = zg;
function tv(e, t, n, r, i) {
  var o = f.useContext(mu), a = o.cache, s = [e].concat(de(t)), l = s.join("_"), u = Vg(), c = function(h) {
    a.update(s, function(p) {
      var m = p || [], b = F(m, 2), g = b[0], y = g === void 0 ? 0 : g, S = b[1], C = S;
      process.env.NODE_ENV !== "production" && S && u && (r?.(C, u), C = null);
      var _ = C || n(), E = [y, _];
      return h ? h(E) : E;
    });
  };
  f.useMemo(
    function() {
      return c();
    },
    /* eslint-disable react-hooks/exhaustive-deps */
    [l]
    /* eslint-enable */
  );
  var d = a.get(s)[1];
  return Bg(function() {
    return i?.(d), c(function(v) {
      var h = F(v, 2), p = h[0], m = h[1];
      return [p + 1, m];
    }), function() {
      a.update(s, function(v) {
        var h = v || [], p = F(h, 2), m = p[0], b = m === void 0 ? 0 : m, g = p[1], y = b - 1;
        return y === 0 ? (r?.(g, !1), null) : [b - 1, g];
      });
    };
  }, [l]), d;
}
var Ug = {}, Wg = process.env.NODE_ENV !== "production" ? "css-dev-only-do-not-override" : "css", Mr = /* @__PURE__ */ new Map();
function Kg(e) {
  Mr.set(e, (Mr.get(e) || 0) + 1);
}
function Gg(e, t) {
  if (typeof document < "u") {
    var n = document.querySelectorAll("style[".concat(vl, '="').concat(e, '"]'));
    n.forEach(function(r) {
      if (r[ei] === t) {
        var i;
        (i = r.parentNode) === null || i === void 0 || i.removeChild(r);
      }
    });
  }
}
function qg(e, t) {
  Mr.set(e, (Mr.get(e) || 0) - 1);
  var n = Array.from(Mr.keys()), r = n.filter(function(i) {
    var o = Mr.get(i) || 0;
    return o <= 0;
  });
  r.length < n.length && r.forEach(function(i) {
    Gg(i, t), Mr.delete(i);
  });
}
var Xg = function(t, n, r, i) {
  var o = r.getDerivativeToken(t), a = D(D({}, o), n);
  return i && (a = i(a)), a;
};
function Yg(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = Gn(mu), i = r.cache.instanceId, o = n.salt, a = o === void 0 ? "" : o, s = n.override, l = s === void 0 ? Ug : s, u = n.formatToken, c = f.useMemo(function() {
    return Object.assign.apply(Object, [{}].concat(de(t)));
  }, [t]), d = f.useMemo(function() {
    return Ta(c);
  }, [c]), v = f.useMemo(function() {
    return Ta(l);
  }, [l]), h = tv("token", [a, e.id, d, v], function() {
    var p = Xg(c, l, e, u), m = $g(p, a);
    p._tokenKey = m, Kg(m);
    var b = "".concat(Wg, "-").concat(hu(m));
    return p._hashId = b, [p, b];
  }, function(p) {
    qg(p[0]._tokenKey, i);
  });
  return h;
}
var Qg = {
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
}, nv = "comm", rv = "rule", iv = "decl", Jg = "@import", Zg = "@keyframes", eb = "@layer", tb = Math.abs, gu = String.fromCharCode;
function ov(e) {
  return e.trim();
}
function la(e, t, n) {
  return e.replace(t, n);
}
function nb(e, t) {
  return e.indexOf(t);
}
function Ji(e, t) {
  return e.charCodeAt(t) | 0;
}
function Zi(e, t, n) {
  return e.slice(t, n);
}
function tr(e) {
  return e.length;
}
function rb(e) {
  return e.length;
}
function zo(e, t) {
  return t.push(e), e;
}
var as = 1, vi = 1, av = 0, xn = 0, Dt = 0, Oi = "";
function bu(e, t, n, r, i, o, a, s) {
  return { value: e, root: t, parent: n, type: r, props: i, children: o, line: as, column: vi, length: a, return: "", siblings: s };
}
function ib() {
  return Dt;
}
function ob() {
  return Dt = xn > 0 ? Ji(Oi, --xn) : 0, vi--, Dt === 10 && (vi = 1, as--), Dt;
}
function Dn() {
  return Dt = xn < av ? Ji(Oi, xn++) : 0, vi++, Dt === 10 && (vi = 1, as++), Dt;
}
function Ar() {
  return Ji(Oi, xn);
}
function ua() {
  return xn;
}
function ss(e, t) {
  return Zi(Oi, e, t);
}
function gl(e) {
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
function ab(e) {
  return as = vi = 1, av = tr(Oi = e), xn = 0, [];
}
function sb(e) {
  return Oi = "", e;
}
function As(e) {
  return ov(ss(xn - 1, bl(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function lb(e) {
  for (; (Dt = Ar()) && Dt < 33; )
    Dn();
  return gl(e) > 2 || gl(Dt) > 3 ? "" : " ";
}
function ub(e, t) {
  for (; --t && Dn() && !(Dt < 48 || Dt > 102 || Dt > 57 && Dt < 65 || Dt > 70 && Dt < 97); )
    ;
  return ss(e, ua() + (t < 6 && Ar() == 32 && Dn() == 32));
}
function bl(e) {
  for (; Dn(); )
    switch (Dt) {
      case e:
        return xn;
      case 34:
      case 39:
        e !== 34 && e !== 39 && bl(Dt);
        break;
      case 40:
        e === 41 && bl(e);
        break;
      case 92:
        Dn();
        break;
    }
  return xn;
}
function cb(e, t) {
  for (; Dn() && e + Dt !== 47 + 10; )
    if (e + Dt === 42 + 42 && Ar() === 47)
      break;
  return "/*" + ss(t, xn - 1) + "*" + gu(e === 47 ? e : Dn());
}
function fb(e) {
  for (; !gl(Ar()); )
    Dn();
  return ss(e, xn);
}
function db(e) {
  return sb(ca("", null, null, null, [""], e = ab(e), 0, [0], e));
}
function ca(e, t, n, r, i, o, a, s, l) {
  for (var u = 0, c = 0, d = a, v = 0, h = 0, p = 0, m = 1, b = 1, g = 1, y = 0, S = "", C = i, _ = o, E = r, x = S; b; )
    switch (p = y, y = Dn()) {
      case 40:
        if (p != 108 && Ji(x, d - 1) == 58) {
          nb(x += la(As(y), "&", "&\f"), "&\f") != -1 && (g = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        x += As(y);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        x += lb(p);
        break;
      case 92:
        x += ub(ua() - 1, 7);
        continue;
      case 47:
        switch (Ar()) {
          case 42:
          case 47:
            zo(vb(cb(Dn(), ua()), t, n, l), l);
            break;
          default:
            x += "/";
        }
        break;
      case 123 * m:
        s[u++] = tr(x) * g;
      case 125 * m:
      case 59:
      case 0:
        switch (y) {
          case 0:
          case 125:
            b = 0;
          case 59 + c:
            g == -1 && (x = la(x, /\f/g, "")), h > 0 && tr(x) - d && zo(h > 32 ? yc(x + ";", r, n, d - 1, l) : yc(la(x, " ", "") + ";", r, n, d - 2, l), l);
            break;
          case 59:
            x += ";";
          default:
            if (zo(E = bc(x, t, n, u, c, i, s, S, C = [], _ = [], d, o), o), y === 123)
              if (c === 0)
                ca(x, t, E, E, C, o, d, s, _);
              else
                switch (v === 99 && Ji(x, 3) === 110 ? 100 : v) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ca(e, E, E, r && zo(bc(e, E, E, 0, 0, i, s, S, i, C = [], d, _), _), i, _, d, s, r ? C : _);
                    break;
                  default:
                    ca(x, E, E, E, [""], _, 0, s, _);
                }
        }
        u = c = h = 0, m = g = 1, S = x = "", d = a;
        break;
      case 58:
        d = 1 + tr(x), h = p;
      default:
        if (m < 1) {
          if (y == 123)
            --m;
          else if (y == 125 && m++ == 0 && ob() == 125)
            continue;
        }
        switch (x += gu(y), y * m) {
          case 38:
            g = c > 0 ? 1 : (x += "\f", -1);
            break;
          case 44:
            s[u++] = (tr(x) - 1) * g, g = 1;
            break;
          case 64:
            Ar() === 45 && (x += As(Dn())), v = Ar(), c = d = tr(S = x += fb(ua())), y++;
            break;
          case 45:
            p === 45 && tr(x) == 2 && (m = 0);
        }
    }
  return o;
}
function bc(e, t, n, r, i, o, a, s, l, u, c, d) {
  for (var v = i - 1, h = i === 0 ? o : [""], p = rb(h), m = 0, b = 0, g = 0; m < r; ++m)
    for (var y = 0, S = Zi(e, v + 1, v = tb(b = a[m])), C = e; y < p; ++y)
      (C = ov(b > 0 ? h[y] + " " + S : la(S, /&\f/g, h[y]))) && (l[g++] = C);
  return bu(e, t, n, i === 0 ? rv : s, l, u, c, d);
}
function vb(e, t, n, r) {
  return bu(e, t, n, nv, gu(ib()), Zi(e, 2, -2), 0, r);
}
function yc(e, t, n, r, i) {
  return bu(e, t, n, iv, Zi(e, 0, r), Zi(e, r + 1, -1), r, i);
}
function yl(e, t) {
  for (var n = "", r = 0; r < e.length; r++)
    n += t(e[r], r, e, t) || "";
  return n;
}
function hb(e, t, n, r) {
  switch (e.type) {
    case eb:
      if (e.children.length)
        break;
    case Jg:
    case iv:
      return e.return = e.return || e.value;
    case nv:
      return "";
    case Zg:
      return e.return = e.value + "{" + yl(e.children, r) + "}";
    case rv:
      if (!tr(e.value = e.props.join(",")))
        return "";
  }
  return tr(n = yl(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function sv(e, t) {
  var n = t.path, r = t.parentSelectors;
  $e(!1, "[Ant Design CSS-in-JS] ".concat(n ? "Error in ".concat(n, ": ") : "").concat(e).concat(r.length ? " Selector: ".concat(r.join(" | ")) : ""));
}
var pb = function(t, n, r) {
  if (t === "content") {
    var i = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, o = ["normal", "none", "initial", "inherit", "unset"];
    (typeof n != "string" || o.indexOf(n) === -1 && !i.test(n) && (n.charAt(0) !== n.charAt(n.length - 1) || n.charAt(0) !== '"' && n.charAt(0) !== "'")) && sv("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(n, "\"'`."), r);
  }
}, mb = function(t, n, r) {
  t === "animation" && r.hashId && n !== "none" && sv("You seem to be using hashed animation '".concat(n, "', in which case 'animationName' with Keyframe as value is recommended."), r);
}, _c = nn(), lv = "_skip_check_", uv = "_multi_value_";
function Sc(e) {
  var t = yl(db(e), hb);
  return t.replace(/\{%%%\:[^;];}/g, ";");
}
function gb(e) {
  return Qe(e) === "object" && e && (lv in e || uv in e);
}
function bb(e, t, n) {
  if (!t)
    return e;
  var r = ".".concat(t), i = n === "low" ? ":where(".concat(r, ")") : r, o = e.split(",").map(function(a) {
    var s, l = a.trim().split(/\s+/), u = l[0] || "", c = ((s = u.match(/^\w+/)) === null || s === void 0 ? void 0 : s[0]) || "";
    return u = "".concat(c).concat(i).concat(u.slice(c.length)), [u].concat(de(l.slice(1))).join(" ");
  });
  return o.join(",");
}
var yb = function e(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  }, i = r.root, o = r.injectHash, a = r.parentSelectors, s = n.hashId, l = n.layer, u = n.path, c = n.hashPriority, d = n.transformers, v = d === void 0 ? [] : d, h = n.linters, p = h === void 0 ? [] : h, m = "", b = {};
  function g(E) {
    var x = E.getName(s);
    if (!b[x]) {
      var I = e(E.style, n, {
        root: !1,
        parentSelectors: a
      }), R = F(I, 1), N = R[0];
      b[x] = "@keyframes ".concat(E.getName(s)).concat(N);
    }
  }
  function y(E) {
    var x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return E.forEach(function(I) {
      Array.isArray(I) ? y(I, x) : I && x.push(I);
    }), x;
  }
  var S = y(Array.isArray(t) ? t : [t]);
  if (S.forEach(function(E) {
    var x = typeof E == "string" && !i ? {} : E;
    if (typeof x == "string")
      m += "".concat(x, `
`);
    else if (x._keyframe)
      g(x);
    else {
      var I = v.reduce(function(R, N) {
        var $;
        return (N == null || ($ = N.visit) === null || $ === void 0 ? void 0 : $.call(N, R)) || R;
      }, x);
      Object.keys(I).forEach(function(R) {
        var N = I[R];
        if (Qe(N) === "object" && N && (R !== "animationName" || !N._keyframe) && !gb(N)) {
          var $ = !1, w = R.trim(), O = !1;
          (i || o) && s ? w.startsWith("@") ? $ = !0 : w = bb(R, s, c) : i && !s && (w === "&" || w === "") && (w = "", O = !0);
          var P = e(N, n, {
            root: O,
            injectHash: $,
            parentSelectors: [].concat(de(a), [w])
          }), M = F(P, 2), T = M[0], A = M[1];
          b = D(D({}, b), A), m += "".concat(w).concat(T);
        } else {
          let Y = function(K, V) {
            process.env.NODE_ENV !== "production" && (Qe(N) !== "object" || !(N != null && N[lv])) && [pb, mb].concat(de(p)).forEach(function(Z) {
              return Z(K, V, {
                path: u,
                hashId: s,
                parentSelectors: a
              });
            });
            var G = K.replace(/[A-Z]/g, function(Z) {
              return "-".concat(Z.toLowerCase());
            }), q = V;
            !Qg[K] && typeof q == "number" && q !== 0 && (q = "".concat(q, "px")), K === "animationName" && V !== null && V !== void 0 && V._keyframe && (g(V), q = V.getName(s)), m += "".concat(G, ":").concat(q, ";");
          };
          var k, H = (k = N?.value) !== null && k !== void 0 ? k : N;
          Qe(N) === "object" && N !== null && N !== void 0 && N[uv] && Array.isArray(H) ? H.forEach(function(K) {
            Y(R, K);
          }) : Y(R, H);
        }
      });
    }
  }), !i)
    m = "{".concat(m, "}");
  else if (l && Ag()) {
    var C = l.split(","), _ = C[C.length - 1].trim();
    m = "@layer ".concat(_, " {").concat(m, "}"), C.length > 1 && (m = "@layer ".concat(l, "{%%%:%}").concat(m));
  }
  return [m, b];
};
function _b(e, t) {
  return hu("".concat(e.join("%")).concat(t));
}
function Sb() {
  return null;
}
function _l(e, t) {
  var n = e.token, r = e.path, i = e.hashId, o = e.layer, a = e.nonce, s = f.useContext(mu), l = s.autoClear, u = s.mock, c = s.defaultCache, d = s.hashPriority, v = s.container, h = s.ssrInline, p = s.transformers, m = s.linters, b = s.cache, g = n._tokenKey, y = [g].concat(de(r)), S = _c;
  process.env.NODE_ENV !== "production" && u !== void 0 && (S = u === "client");
  var C = tv(
    "style",
    y,
    // Create cache if needed
    function() {
      var R = t(), N = yb(R, {
        hashId: i,
        hashPriority: d,
        layer: o,
        path: r.join("-"),
        transformers: p,
        linters: m
      }), $ = F(N, 2), w = $[0], O = $[1], P = Sc(w), M = _b(y, P);
      return [P, g, M, O];
    },
    // Remove cache if no need
    function(R, N) {
      var $ = F(R, 3), w = $[2];
      (N || l) && _c && Ra(w, {
        mark: li
      });
    },
    // Inject style here
    function(R) {
      var N = F(R, 4), $ = N[0];
      N[1];
      var w = N[2], O = N[3];
      if (S) {
        var P = {
          mark: li,
          prepend: "queue",
          attachTo: v
        }, M = typeof a == "function" ? a() : a;
        M && (P.csp = {
          nonce: M
        });
        var T = di($, w, P);
        T[ei] = b.instanceId, T.setAttribute(vl, g), process.env.NODE_ENV !== "production" && T.setAttribute(Og, y.join("|")), Object.keys(O).forEach(function(A) {
          di(Sc(O[A]), "_effect-".concat(A), P);
        });
      }
    }
  ), _ = F(C, 3), E = _[0], x = _[1], I = _[2];
  return function(R) {
    var N;
    if (!h || S || !c)
      N = /* @__PURE__ */ f.createElement(Sb, null);
    else {
      var $;
      N = /* @__PURE__ */ f.createElement("style", ge({}, ($ = {}, U($, vl, x), U($, li, I), $), {
        dangerouslySetInnerHTML: {
          __html: E
        }
      }));
    }
    return /* @__PURE__ */ f.createElement(f.Fragment, null, N, R);
  };
}
var Yt = /* @__PURE__ */ function() {
  function e(t, n) {
    hn(this, e), U(this, "name", void 0), U(this, "style", void 0), U(this, "_keyframe", !0), this.name = t, this.style = n;
  }
  return pn(e, [{
    key: "getName",
    value: function() {
      var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return n ? "".concat(n, "-").concat(this.name) : this.name;
    }
  }]), e;
}();
function Eb(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
var yu = /* @__PURE__ */ function() {
  function e() {
    hn(this, e), U(this, "cache", void 0), U(this, "keys", void 0), U(this, "cacheCallTimes", void 0), this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
  }
  return pn(e, [{
    key: "size",
    value: function() {
      return this.keys.length;
    }
  }, {
    key: "internalGet",
    value: function(n) {
      var r, i, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, a = {
        map: this.cache
      };
      return n.forEach(function(s) {
        if (!a)
          a = void 0;
        else {
          var l, u;
          a = (l = a) === null || l === void 0 || (u = l.map) === null || u === void 0 ? void 0 : u.get(s);
        }
      }), (r = a) !== null && r !== void 0 && r.value && o && (a.value[1] = this.cacheCallTimes++), (i = a) === null || i === void 0 ? void 0 : i.value;
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
      var i = this;
      if (!this.has(n)) {
        if (this.size() + 1 > e.MAX_CACHE_SIZE + e.MAX_CACHE_OFFSET) {
          var o = this.keys.reduce(function(u, c) {
            var d = F(u, 2), v = d[1];
            return i.internalGet(c)[1] < v ? [c, i.internalGet(c)[1]] : u;
          }, [this.keys[0], this.cacheCallTimes]), a = F(o, 1), s = a[0];
          this.delete(s);
        }
        this.keys.push(n);
      }
      var l = this.cache;
      n.forEach(function(u, c) {
        if (c === n.length - 1)
          l.set(u, {
            value: [r, i.cacheCallTimes++]
          });
        else {
          var d = l.get(u);
          d ? d.map || (d.map = /* @__PURE__ */ new Map()) : l.set(u, {
            map: /* @__PURE__ */ new Map()
          }), l = l.get(u).map;
        }
      });
    }
  }, {
    key: "deleteByPath",
    value: function(n, r) {
      var i = n.get(r[0]);
      if (r.length === 1) {
        var o;
        return i.map ? n.set(r[0], {
          map: i.map
        }) : n.delete(r[0]), (o = i.value) === null || o === void 0 ? void 0 : o[0];
      }
      var a = this.deleteByPath(i.map, r.slice(1));
      return (!i.map || i.map.size === 0) && !i.value && n.delete(r[0]), a;
    }
  }, {
    key: "delete",
    value: function(n) {
      if (this.has(n))
        return this.keys = this.keys.filter(function(r) {
          return !Eb(r, n);
        }), this.deleteByPath(this.cache, n);
    }
  }]), e;
}();
U(yu, "MAX_CACHE_SIZE", 20);
U(yu, "MAX_CACHE_OFFSET", 5);
var Ec = 0, wb = /* @__PURE__ */ function() {
  function e(t) {
    hn(this, e), U(this, "derivatives", void 0), U(this, "id", void 0), this.derivatives = Array.isArray(t) ? t : [t], this.id = Ec, t.length === 0 && Qi(t.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function."), Ec += 1;
  }
  return pn(e, [{
    key: "getDerivativeToken",
    value: function(n) {
      return this.derivatives.reduce(function(r, i) {
        return i(n, r);
      }, void 0);
    }
  }]), e;
}(), Ds = new yu();
function cv(e) {
  var t = Array.isArray(e) ? e : [e];
  return Ds.has(t) || Ds.set(t, new wb(t)), Ds.get(t);
}
function zr(e) {
  return e.notSplit = !0, e;
}
zr(["borderTop", "borderBottom"]), zr(["borderTop"]), zr(["borderBottom"]), zr(["borderLeft", "borderRight"]), zr(["borderLeft"]), zr(["borderRight"]);
var Cb = /* @__PURE__ */ vo({});
const _u = Cb;
function fv(e) {
  return Zd(e) || Ud(e) || du(e) || ev();
}
function In(e, t) {
  for (var n = e, r = 0; r < t.length; r += 1) {
    if (n == null)
      return;
    n = n[t[r]];
  }
  return n;
}
function dv(e, t, n, r) {
  if (!t.length)
    return n;
  var i = fv(t), o = i[0], a = i.slice(1), s;
  return !e && typeof o == "number" ? s = [] : Array.isArray(e) ? s = de(e) : s = D({}, e), r && n === void 0 && a.length === 1 ? delete s[o][a[0]] : s[o] = dv(s[o], a, n, r), s;
}
function Rn(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return t.length && r && n === void 0 && !In(e, t.slice(0, -1)) ? e : dv(e, t, n, r);
}
function Ob(e) {
  return Qe(e) === "object" && e !== null && Object.getPrototypeOf(e) === Object.prototype;
}
function wc(e) {
  return Array.isArray(e) ? [] : {};
}
var xb = typeof Reflect > "u" ? Object.keys : Reflect.ownKeys;
function ti() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r = wc(t[0]);
  return t.forEach(function(i) {
    function o(a, s) {
      var l = new Set(s), u = In(i, a), c = Array.isArray(u);
      if (c || Ob(u)) {
        if (!l.has(u)) {
          l.add(u);
          var d = In(r, a);
          c ? r = Rn(r, a, []) : (!d || Qe(d) !== "object") && (r = Rn(r, a, wc(u))), xb(u).forEach(function(v) {
            o([].concat(de(a), [v]), l);
          });
        }
      } else
        r = Rn(r, a, u);
    }
    o([]);
  }), r;
}
function Nb() {
}
let vv = Nb;
process.env.NODE_ENV !== "production" && (vv = (e, t, n) => {
  $e(e, `[antd: ${t}] ${n}`), process.env.NODE_ENV === "test" && Ad();
});
const qn = vv, Pb = /* @__PURE__ */ vo(void 0), Mb = {
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
var Rb = {
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
const Tb = {
  placeholder: "Select time",
  rangePlaceholder: ["Start time", "End time"]
}, hv = Tb, $b = {
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
  }, Rb),
  timePickerLocale: Object.assign({}, hv)
}, Cc = $b, an = "${label} is not a valid ${type}", Ib = {
  locale: "en",
  Pagination: Mb,
  DatePicker: Cc,
  TimePicker: hv,
  Calendar: Cc,
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
        string: an,
        method: an,
        array: an,
        object: an,
        number: an,
        date: an,
        boolean: an,
        integer: an,
        float: an,
        regexp: an,
        email: an,
        url: an,
        hex: an
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
}, eo = Ib;
let Fs = Object.assign({}, eo.Modal);
function Oc(e) {
  e ? Fs = Object.assign(Object.assign({}, Fs), e) : Fs = Object.assign({}, eo.Modal);
}
const Ab = /* @__PURE__ */ vo(void 0), Su = Ab, Db = (e, t) => {
  const n = f.useContext(Su), r = f.useMemo(() => {
    var o;
    const a = t || eo[e], s = (o = n?.[e]) !== null && o !== void 0 ? o : {};
    return Object.assign(Object.assign({}, typeof a == "function" ? a() : a), s || {});
  }, [e, t, n]), i = f.useMemo(() => {
    const o = n?.locale;
    return n?.exist && !o ? eo.locale : o;
  }, [n]);
  return [r, i];
}, Fb = Db, pv = "internalMark", mv = (e) => {
  const {
    locale: t = {},
    children: n,
    _ANT_MARK__: r
  } = e;
  process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && qn(r === pv, "LocaleProvider", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale"), f.useEffect(() => (Oc(t && t.Modal), () => {
    Oc();
  }), [t]);
  const i = f.useMemo(() => Object.assign(Object.assign({}, t), {
    exist: !0
  }), [t]);
  return /* @__PURE__ */ f.createElement(Su.Provider, {
    value: i
  }, n);
};
process.env.NODE_ENV !== "production" && (mv.displayName = "LocaleProvider");
const Lb = mv, Vb = "5.6.4";
function Bt(e, t) {
  kb(e) && (e = "100%");
  var n = jb(e);
  return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), n && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e);
}
function Bo(e) {
  return Math.min(1, Math.max(0, e));
}
function kb(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function jb(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function gv(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function Uo(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function Tr(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function Hb(e, t, n) {
  return {
    r: Bt(e, 255) * 255,
    g: Bt(t, 255) * 255,
    b: Bt(n, 255) * 255
  };
}
function xc(e, t, n) {
  e = Bt(e, 255), t = Bt(t, 255), n = Bt(n, 255);
  var r = Math.max(e, t, n), i = Math.min(e, t, n), o = 0, a = 0, s = (r + i) / 2;
  if (r === i)
    a = 0, o = 0;
  else {
    var l = r - i;
    switch (a = s > 0.5 ? l / (2 - r - i) : l / (r + i), r) {
      case e:
        o = (t - n) / l + (t < n ? 6 : 0);
        break;
      case t:
        o = (n - e) / l + 2;
        break;
      case n:
        o = (e - t) / l + 4;
        break;
    }
    o /= 6;
  }
  return { h: o, s: a, l: s };
}
function Ls(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * (6 * n) : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function zb(e, t, n) {
  var r, i, o;
  if (e = Bt(e, 360), t = Bt(t, 100), n = Bt(n, 100), t === 0)
    i = n, o = n, r = n;
  else {
    var a = n < 0.5 ? n * (1 + t) : n + t - n * t, s = 2 * n - a;
    r = Ls(s, a, e + 1 / 3), i = Ls(s, a, e), o = Ls(s, a, e - 1 / 3);
  }
  return { r: r * 255, g: i * 255, b: o * 255 };
}
function Sl(e, t, n) {
  e = Bt(e, 255), t = Bt(t, 255), n = Bt(n, 255);
  var r = Math.max(e, t, n), i = Math.min(e, t, n), o = 0, a = r, s = r - i, l = r === 0 ? 0 : s / r;
  if (r === i)
    o = 0;
  else {
    switch (r) {
      case e:
        o = (t - n) / s + (t < n ? 6 : 0);
        break;
      case t:
        o = (n - e) / s + 2;
        break;
      case n:
        o = (e - t) / s + 4;
        break;
    }
    o /= 6;
  }
  return { h: o, s: l, v: a };
}
function Bb(e, t, n) {
  e = Bt(e, 360) * 6, t = Bt(t, 100), n = Bt(n, 100);
  var r = Math.floor(e), i = e - r, o = n * (1 - t), a = n * (1 - i * t), s = n * (1 - (1 - i) * t), l = r % 6, u = [n, a, o, o, s, n][l], c = [s, n, n, a, o, o][l], d = [o, o, s, n, n, a][l];
  return { r: u * 255, g: c * 255, b: d * 255 };
}
function El(e, t, n, r) {
  var i = [
    Tr(Math.round(e).toString(16)),
    Tr(Math.round(t).toString(16)),
    Tr(Math.round(n).toString(16))
  ];
  return r && i[0].startsWith(i[0].charAt(1)) && i[1].startsWith(i[1].charAt(1)) && i[2].startsWith(i[2].charAt(1)) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) : i.join("");
}
function Ub(e, t, n, r, i) {
  var o = [
    Tr(Math.round(e).toString(16)),
    Tr(Math.round(t).toString(16)),
    Tr(Math.round(n).toString(16)),
    Tr(Wb(r))
  ];
  return i && o[0].startsWith(o[0].charAt(1)) && o[1].startsWith(o[1].charAt(1)) && o[2].startsWith(o[2].charAt(1)) && o[3].startsWith(o[3].charAt(1)) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) + o[3].charAt(0) : o.join("");
}
function Wb(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function Nc(e) {
  return ln(e) / 255;
}
function ln(e) {
  return parseInt(e, 16);
}
function Kb(e) {
  return {
    r: e >> 16,
    g: (e & 65280) >> 8,
    b: e & 255
  };
}
var wl = {
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
function Jr(e) {
  var t = { r: 0, g: 0, b: 0 }, n = 1, r = null, i = null, o = null, a = !1, s = !1;
  return typeof e == "string" && (e = Xb(e)), typeof e == "object" && (Zn(e.r) && Zn(e.g) && Zn(e.b) ? (t = Hb(e.r, e.g, e.b), a = !0, s = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : Zn(e.h) && Zn(e.s) && Zn(e.v) ? (r = Uo(e.s), i = Uo(e.v), t = Bb(e.h, r, i), a = !0, s = "hsv") : Zn(e.h) && Zn(e.s) && Zn(e.l) && (r = Uo(e.s), o = Uo(e.l), t = zb(e.h, r, o), a = !0, s = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (n = e.a)), n = gv(n), {
    ok: a,
    format: e.format || s,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: n
  };
}
var Gb = "[-\\+]?\\d+%?", qb = "[-\\+]?\\d*\\.\\d+%?", hr = "(?:".concat(qb, ")|(?:").concat(Gb, ")"), Vs = "[\\s|\\(]+(".concat(hr, ")[,|\\s]+(").concat(hr, ")[,|\\s]+(").concat(hr, ")\\s*\\)?"), ks = "[\\s|\\(]+(".concat(hr, ")[,|\\s]+(").concat(hr, ")[,|\\s]+(").concat(hr, ")[,|\\s]+(").concat(hr, ")\\s*\\)?"), Mn = {
  CSS_UNIT: new RegExp(hr),
  rgb: new RegExp("rgb" + Vs),
  rgba: new RegExp("rgba" + ks),
  hsl: new RegExp("hsl" + Vs),
  hsla: new RegExp("hsla" + ks),
  hsv: new RegExp("hsv" + Vs),
  hsva: new RegExp("hsva" + ks),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function Xb(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var t = !1;
  if (wl[e])
    e = wl[e], t = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var n = Mn.rgb.exec(e);
  return n ? { r: n[1], g: n[2], b: n[3] } : (n = Mn.rgba.exec(e), n ? { r: n[1], g: n[2], b: n[3], a: n[4] } : (n = Mn.hsl.exec(e), n ? { h: n[1], s: n[2], l: n[3] } : (n = Mn.hsla.exec(e), n ? { h: n[1], s: n[2], l: n[3], a: n[4] } : (n = Mn.hsv.exec(e), n ? { h: n[1], s: n[2], v: n[3] } : (n = Mn.hsva.exec(e), n ? { h: n[1], s: n[2], v: n[3], a: n[4] } : (n = Mn.hex8.exec(e), n ? {
    r: ln(n[1]),
    g: ln(n[2]),
    b: ln(n[3]),
    a: Nc(n[4]),
    format: t ? "name" : "hex8"
  } : (n = Mn.hex6.exec(e), n ? {
    r: ln(n[1]),
    g: ln(n[2]),
    b: ln(n[3]),
    format: t ? "name" : "hex"
  } : (n = Mn.hex4.exec(e), n ? {
    r: ln(n[1] + n[1]),
    g: ln(n[2] + n[2]),
    b: ln(n[3] + n[3]),
    a: Nc(n[4] + n[4]),
    format: t ? "name" : "hex8"
  } : (n = Mn.hex3.exec(e), n ? {
    r: ln(n[1] + n[1]),
    g: ln(n[2] + n[2]),
    b: ln(n[3] + n[3]),
    format: t ? "name" : "hex"
  } : !1)))))))));
}
function Zn(e) {
  return !!Mn.CSS_UNIT.exec(String(e));
}
var zt = (
  /** @class */
  function() {
    function e(t, n) {
      t === void 0 && (t = ""), n === void 0 && (n = {});
      var r;
      if (t instanceof e)
        return t;
      typeof t == "number" && (t = Kb(t)), this.originalInput = t;
      var i = Jr(t);
      this.originalInput = t, this.r = i.r, this.g = i.g, this.b = i.b, this.a = i.a, this.roundA = Math.round(100 * this.a) / 100, this.format = (r = n.format) !== null && r !== void 0 ? r : i.format, this.gradientType = n.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = i.ok;
    }
    return e.prototype.isDark = function() {
      return this.getBrightness() < 128;
    }, e.prototype.isLight = function() {
      return !this.isDark();
    }, e.prototype.getBrightness = function() {
      var t = this.toRgb();
      return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3;
    }, e.prototype.getLuminance = function() {
      var t = this.toRgb(), n, r, i, o = t.r / 255, a = t.g / 255, s = t.b / 255;
      return o <= 0.03928 ? n = o / 12.92 : n = Math.pow((o + 0.055) / 1.055, 2.4), a <= 0.03928 ? r = a / 12.92 : r = Math.pow((a + 0.055) / 1.055, 2.4), s <= 0.03928 ? i = s / 12.92 : i = Math.pow((s + 0.055) / 1.055, 2.4), 0.2126 * n + 0.7152 * r + 0.0722 * i;
    }, e.prototype.getAlpha = function() {
      return this.a;
    }, e.prototype.setAlpha = function(t) {
      return this.a = gv(t), this.roundA = Math.round(100 * this.a) / 100, this;
    }, e.prototype.isMonochrome = function() {
      var t = this.toHsl().s;
      return t === 0;
    }, e.prototype.toHsv = function() {
      var t = Sl(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
    }, e.prototype.toHsvString = function() {
      var t = Sl(this.r, this.g, this.b), n = Math.round(t.h * 360), r = Math.round(t.s * 100), i = Math.round(t.v * 100);
      return this.a === 1 ? "hsv(".concat(n, ", ").concat(r, "%, ").concat(i, "%)") : "hsva(".concat(n, ", ").concat(r, "%, ").concat(i, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHsl = function() {
      var t = xc(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
    }, e.prototype.toHslString = function() {
      var t = xc(this.r, this.g, this.b), n = Math.round(t.h * 360), r = Math.round(t.s * 100), i = Math.round(t.l * 100);
      return this.a === 1 ? "hsl(".concat(n, ", ").concat(r, "%, ").concat(i, "%)") : "hsla(".concat(n, ", ").concat(r, "%, ").concat(i, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHex = function(t) {
      return t === void 0 && (t = !1), El(this.r, this.g, this.b, t);
    }, e.prototype.toHexString = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex(t);
    }, e.prototype.toHex8 = function(t) {
      return t === void 0 && (t = !1), Ub(this.r, this.g, this.b, this.a, t);
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
        return "".concat(Math.round(Bt(n, 255) * 100), "%");
      };
      return {
        r: t(this.r),
        g: t(this.g),
        b: t(this.b),
        a: this.a
      };
    }, e.prototype.toPercentageRgbString = function() {
      var t = function(n) {
        return Math.round(Bt(n, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%)") : "rgba(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%, ").concat(this.roundA, ")");
    }, e.prototype.toName = function() {
      if (this.a === 0)
        return "transparent";
      if (this.a < 1)
        return !1;
      for (var t = "#" + El(this.r, this.g, this.b, !1), n = 0, r = Object.entries(wl); n < r.length; n++) {
        var i = r[n], o = i[0], a = i[1];
        if (t === a)
          return o;
      }
      return !1;
    }, e.prototype.toString = function(t) {
      var n = !!t;
      t = t ?? this.format;
      var r = !1, i = this.a < 1 && this.a >= 0, o = !n && i && (t.startsWith("hex") || t === "name");
      return o ? t === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (t === "rgb" && (r = this.toRgbString()), t === "prgb" && (r = this.toPercentageRgbString()), (t === "hex" || t === "hex6") && (r = this.toHexString()), t === "hex3" && (r = this.toHexString(!0)), t === "hex4" && (r = this.toHex8String(!0)), t === "hex8" && (r = this.toHex8String()), t === "name" && (r = this.toName()), t === "hsl" && (r = this.toHslString()), t === "hsv" && (r = this.toHsvString()), r || this.toHexString());
    }, e.prototype.toNumber = function() {
      return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
    }, e.prototype.clone = function() {
      return new e(this.toString());
    }, e.prototype.lighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l += t / 100, n.l = Bo(n.l), new e(n);
    }, e.prototype.brighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toRgb();
      return n.r = Math.max(0, Math.min(255, n.r - Math.round(255 * -(t / 100)))), n.g = Math.max(0, Math.min(255, n.g - Math.round(255 * -(t / 100)))), n.b = Math.max(0, Math.min(255, n.b - Math.round(255 * -(t / 100)))), new e(n);
    }, e.prototype.darken = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l -= t / 100, n.l = Bo(n.l), new e(n);
    }, e.prototype.tint = function(t) {
      return t === void 0 && (t = 10), this.mix("white", t);
    }, e.prototype.shade = function(t) {
      return t === void 0 && (t = 10), this.mix("black", t);
    }, e.prototype.desaturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s -= t / 100, n.s = Bo(n.s), new e(n);
    }, e.prototype.saturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s += t / 100, n.s = Bo(n.s), new e(n);
    }, e.prototype.greyscale = function() {
      return this.desaturate(100);
    }, e.prototype.spin = function(t) {
      var n = this.toHsl(), r = (n.h + t) % 360;
      return n.h = r < 0 ? 360 + r : r, new e(n);
    }, e.prototype.mix = function(t, n) {
      n === void 0 && (n = 50);
      var r = this.toRgb(), i = new e(t).toRgb(), o = n / 100, a = {
        r: (i.r - r.r) * o + r.r,
        g: (i.g - r.g) * o + r.g,
        b: (i.b - r.b) * o + r.b,
        a: (i.a - r.a) * o + r.a
      };
      return new e(a);
    }, e.prototype.analogous = function(t, n) {
      t === void 0 && (t = 6), n === void 0 && (n = 30);
      var r = this.toHsl(), i = 360 / n, o = [this];
      for (r.h = (r.h - (i * t >> 1) + 720) % 360; --t; )
        r.h = (r.h + i) % 360, o.push(new e(r));
      return o;
    }, e.prototype.complement = function() {
      var t = this.toHsl();
      return t.h = (t.h + 180) % 360, new e(t);
    }, e.prototype.monochromatic = function(t) {
      t === void 0 && (t = 6);
      for (var n = this.toHsv(), r = n.h, i = n.s, o = n.v, a = [], s = 1 / t; t--; )
        a.push(new e({ h: r, s: i, v: o })), o = (o + s) % 1;
      return a;
    }, e.prototype.splitcomplement = function() {
      var t = this.toHsl(), n = t.h;
      return [
        this,
        new e({ h: (n + 72) % 360, s: t.s, l: t.l }),
        new e({ h: (n + 216) % 360, s: t.s, l: t.l })
      ];
    }, e.prototype.onBackground = function(t) {
      var n = this.toRgb(), r = new e(t).toRgb(), i = n.a + r.a * (1 - n.a);
      return new e({
        r: (n.r * n.a + r.r * r.a * (1 - n.a)) / i,
        g: (n.g * n.a + r.g * r.a * (1 - n.a)) / i,
        b: (n.b * n.a + r.b * r.a * (1 - n.a)) / i,
        a: i
      });
    }, e.prototype.triad = function() {
      return this.polyad(3);
    }, e.prototype.tetrad = function() {
      return this.polyad(4);
    }, e.prototype.polyad = function(t) {
      for (var n = this.toHsl(), r = n.h, i = [this], o = 360 / t, a = 1; a < t; a++)
        i.push(new e({ h: (r + a * o) % 360, s: n.s, l: n.l }));
      return i;
    }, e.prototype.equals = function(t) {
      return this.toRgbString() === new e(t).toRgbString();
    }, e;
  }()
), Wo = 2, Pc = 0.16, Yb = 0.05, Qb = 0.05, Jb = 0.15, bv = 5, yv = 4, Zb = [{
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
function Mc(e) {
  var t = e.r, n = e.g, r = e.b, i = Sl(t, n, r);
  return {
    h: i.h * 360,
    s: i.s,
    v: i.v
  };
}
function Ko(e) {
  var t = e.r, n = e.g, r = e.b;
  return "#".concat(El(t, n, r, !1));
}
function e0(e, t, n) {
  var r = n / 100, i = {
    r: (t.r - e.r) * r + e.r,
    g: (t.g - e.g) * r + e.g,
    b: (t.b - e.b) * r + e.b
  };
  return i;
}
function Rc(e, t, n) {
  var r;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? r = n ? Math.round(e.h) - Wo * t : Math.round(e.h) + Wo * t : r = n ? Math.round(e.h) + Wo * t : Math.round(e.h) - Wo * t, r < 0 ? r += 360 : r >= 360 && (r -= 360), r;
}
function Tc(e, t, n) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  var r;
  return n ? r = e.s - Pc * t : t === yv ? r = e.s + Pc : r = e.s + Yb * t, r > 1 && (r = 1), n && t === bv && r > 0.1 && (r = 0.1), r < 0.06 && (r = 0.06), Number(r.toFixed(2));
}
function $c(e, t, n) {
  var r;
  return n ? r = e.v + Qb * t : r = e.v - Jb * t, r > 1 && (r = 1), Number(r.toFixed(2));
}
function Lr(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = [], r = Jr(e), i = bv; i > 0; i -= 1) {
    var o = Mc(r), a = Ko(Jr({
      h: Rc(o, i, !0),
      s: Tc(o, i, !0),
      v: $c(o, i, !0)
    }));
    n.push(a);
  }
  n.push(Ko(r));
  for (var s = 1; s <= yv; s += 1) {
    var l = Mc(r), u = Ko(Jr({
      h: Rc(l, s),
      s: Tc(l, s),
      v: $c(l, s)
    }));
    n.push(u);
  }
  return t.theme === "dark" ? Zb.map(function(c) {
    var d = c.index, v = c.opacity, h = Ko(e0(Jr(t.backgroundColor || "#141414"), Jr(n[d]), v * 100));
    return h;
  }) : n;
}
var js = {
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
}, fa = {}, Hs = {};
Object.keys(js).forEach(function(e) {
  fa[e] = Lr(js[e]), fa[e].primary = fa[e][5], Hs[e] = Lr(js[e], {
    theme: "dark",
    backgroundColor: "#141414"
  }), Hs[e].primary = Hs[e][5];
});
var t0 = fa.blue;
const n0 = (e) => {
  const {
    controlHeight: t
  } = e;
  return {
    controlHeightSM: t * 0.75,
    controlHeightXS: t * 0.5,
    controlHeightLG: t * 1.25
  };
}, r0 = n0;
function i0(e) {
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
const _v = {
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
}, o0 = Object.assign(Object.assign({}, _v), {
  // Color
  colorPrimary: "#1677ff",
  colorSuccess: "#52c41a",
  colorWarning: "#faad14",
  colorError: "#ff4d4f",
  colorInfo: "#1677ff",
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
}), ls = o0;
function a0(e, t) {
  let {
    generateColorPalettes: n,
    generateNeutralColorPalettes: r
  } = t;
  const {
    colorSuccess: i,
    colorWarning: o,
    colorError: a,
    colorInfo: s,
    colorPrimary: l,
    colorBgBase: u,
    colorTextBase: c
  } = e, d = n(l), v = n(i), h = n(o), p = n(a), m = n(s), b = r(u, c);
  return Object.assign(Object.assign({}, b), {
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
    colorWarningBg: h[1],
    colorWarningBgHover: h[2],
    colorWarningBorder: h[3],
    colorWarningBorderHover: h[4],
    colorWarningHover: h[4],
    colorWarning: h[6],
    colorWarningActive: h[7],
    colorWarningTextHover: h[8],
    colorWarningText: h[9],
    colorWarningTextActive: h[10],
    colorInfoBg: m[1],
    colorInfoBgHover: m[2],
    colorInfoBorder: m[3],
    colorInfoBorderHover: m[4],
    colorInfoHover: m[4],
    colorInfo: m[6],
    colorInfoActive: m[7],
    colorInfoTextHover: m[8],
    colorInfoText: m[9],
    colorInfoTextActive: m[10],
    colorBgMask: new zt("#000").setAlpha(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
const s0 = (e) => {
  let t = e, n = e, r = e, i = e;
  return e < 6 && e >= 5 ? t = e + 1 : e < 16 && e >= 6 ? t = e + 2 : e >= 16 && (t = 16), e < 7 && e >= 5 ? n = 4 : e < 8 && e >= 7 ? n = 5 : e < 14 && e >= 8 ? n = 6 : e < 16 && e >= 14 ? n = 7 : e >= 16 && (n = 8), e < 6 && e >= 2 ? r = 1 : e >= 6 && (r = 2), e > 4 && e < 8 ? i = 4 : e >= 8 && (i = 6), {
    borderRadius: e > 16 ? 16 : e,
    borderRadiusXS: r,
    borderRadiusSM: n,
    borderRadiusLG: t,
    borderRadiusOuter: i
  };
}, l0 = s0;
function u0(e) {
  const {
    motionUnit: t,
    motionBase: n,
    borderRadius: r,
    lineWidth: i
  } = e;
  return Object.assign({
    // motion
    motionDurationFast: `${(n + t).toFixed(1)}s`,
    motionDurationMid: `${(n + t * 2).toFixed(1)}s`,
    motionDurationSlow: `${(n + t * 3).toFixed(1)}s`,
    // line
    lineWidthBold: i + 1
  }, l0(r));
}
const er = (e, t) => new zt(e).setAlpha(t).toRgbString(), Ai = (e, t) => new zt(e).darken(t).toHexString(), c0 = (e) => {
  const t = Lr(e);
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
}, f0 = (e, t) => {
  const n = e || "#fff", r = t || "#000";
  return {
    colorBgBase: n,
    colorTextBase: r,
    colorText: er(r, 0.88),
    colorTextSecondary: er(r, 0.65),
    colorTextTertiary: er(r, 0.45),
    colorTextQuaternary: er(r, 0.25),
    colorFill: er(r, 0.15),
    colorFillSecondary: er(r, 0.06),
    colorFillTertiary: er(r, 0.04),
    colorFillQuaternary: er(r, 0.02),
    colorBgLayout: Ai(n, 4),
    colorBgContainer: Ai(n, 0),
    colorBgElevated: Ai(n, 0),
    colorBgSpotlight: er(r, 0.85),
    colorBorder: Ai(n, 15),
    colorBorderSecondary: Ai(n, 6)
  };
};
function d0(e) {
  const t = new Array(10).fill(null).map((n, r) => {
    const i = r - 1, o = e * Math.pow(2.71828, i / 5), a = r > 1 ? Math.floor(o) : Math.ceil(o);
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
const v0 = (e) => {
  const t = d0(e), n = t.map((i) => i.size), r = t.map((i) => i.lineHeight);
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
}, h0 = v0;
function p0(e) {
  const t = Object.keys(_v).map((n) => {
    const r = Lr(e[n]);
    return new Array(10).fill(1).reduce((i, o, a) => (i[`${n}-${a + 1}`] = r[a], i[`${n}${a + 1}`] = r[a], i), {});
  }).reduce((n, r) => (n = Object.assign(Object.assign({}, n), r), n), {});
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), a0(e, {
    generateColorPalettes: c0,
    generateNeutralColorPalettes: f0
  })), h0(e.fontSize)), i0(e)), r0(e)), u0(e));
}
function zs(e) {
  return e >= 0 && e <= 255;
}
function Go(e, t) {
  const {
    r: n,
    g: r,
    b: i,
    a: o
  } = new zt(e).toRgb();
  if (o < 1)
    return e;
  const {
    r: a,
    g: s,
    b: l
  } = new zt(t).toRgb();
  for (let u = 0.01; u <= 1; u += 0.01) {
    const c = Math.round((n - a * (1 - u)) / u), d = Math.round((r - s * (1 - u)) / u), v = Math.round((i - l * (1 - u)) / u);
    if (zs(c) && zs(d) && zs(v))
      return new zt({
        r: c,
        g: d,
        b: v,
        a: Math.round(u * 100) / 100
      }).toRgbString();
  }
  return new zt({
    r: n,
    g: r,
    b: i,
    a: 1
  }).toRgbString();
}
var m0 = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  return n;
};
function g0(e) {
  const {
    override: t
  } = e, n = m0(e, ["override"]), r = Object.assign({}, t);
  Object.keys(ls).forEach((v) => {
    delete r[v];
  });
  const i = Object.assign(Object.assign({}, n), r), o = 480, a = 576, s = 768, l = 992, u = 1200, c = 1600;
  if (i.motion === !1) {
    const v = "0s";
    i.motionDurationFast = v, i.motionDurationMid = v, i.motionDurationSlow = v;
  }
  return Object.assign(Object.assign(Object.assign({}, i), {
    colorLink: i.colorInfoText,
    colorLinkHover: i.colorInfoHover,
    colorLinkActive: i.colorInfoActive,
    // ============== Background ============== //
    colorFillContent: i.colorFillSecondary,
    colorFillContentHover: i.colorFill,
    colorFillAlter: i.colorFillQuaternary,
    colorBgContainerDisabled: i.colorFillTertiary,
    // ============== Split ============== //
    colorBorderBg: i.colorBgContainer,
    colorSplit: Go(i.colorBorderSecondary, i.colorBgContainer),
    // ============== Text ============== //
    colorTextPlaceholder: i.colorTextQuaternary,
    colorTextDisabled: i.colorTextQuaternary,
    colorTextHeading: i.colorText,
    colorTextLabel: i.colorTextSecondary,
    colorTextDescription: i.colorTextTertiary,
    colorTextLightSolid: i.colorWhite,
    colorHighlight: i.colorError,
    colorBgTextHover: i.colorFillSecondary,
    colorBgTextActive: i.colorFill,
    colorIcon: i.colorTextTertiary,
    colorIconHover: i.colorText,
    colorErrorOutline: Go(i.colorErrorBg, i.colorBgContainer),
    colorWarningOutline: Go(i.colorWarningBg, i.colorBgContainer),
    // Font
    fontSizeIcon: i.fontSizeSM,
    // Line
    lineWidthFocus: i.lineWidth * 4,
    // Control
    lineWidth: i.lineWidth,
    controlOutlineWidth: i.lineWidth * 2,
    // Checkbox size and expand icon size
    controlInteractiveSize: i.controlHeight / 2,
    controlItemBgHover: i.colorFillTertiary,
    controlItemBgActive: i.colorPrimaryBg,
    controlItemBgActiveHover: i.colorPrimaryBgHover,
    controlItemBgActiveDisabled: i.colorFill,
    controlTmpOutline: i.colorFillQuaternary,
    controlOutline: Go(i.colorPrimaryBg, i.colorBgContainer),
    lineType: i.lineType,
    borderRadius: i.borderRadius,
    borderRadiusXS: i.borderRadiusXS,
    borderRadiusSM: i.borderRadiusSM,
    borderRadiusLG: i.borderRadiusLG,
    fontWeightStrong: 600,
    opacityLoading: 0.65,
    linkDecoration: "none",
    linkHoverDecoration: "none",
    linkFocusDecoration: "none",
    controlPaddingHorizontal: 12,
    controlPaddingHorizontalSM: 8,
    paddingXXS: i.sizeXXS,
    paddingXS: i.sizeXS,
    paddingSM: i.sizeSM,
    padding: i.size,
    paddingMD: i.sizeMD,
    paddingLG: i.sizeLG,
    paddingXL: i.sizeXL,
    paddingContentHorizontalLG: i.sizeLG,
    paddingContentVerticalLG: i.sizeMS,
    paddingContentHorizontal: i.sizeMS,
    paddingContentVertical: i.sizeSM,
    paddingContentHorizontalSM: i.size,
    paddingContentVerticalSM: i.sizeXS,
    marginXXS: i.sizeXXS,
    marginXS: i.sizeXS,
    marginSM: i.sizeSM,
    margin: i.size,
    marginMD: i.sizeMD,
    marginLG: i.sizeLG,
    marginXL: i.sizeXL,
    marginXXL: i.sizeXXL,
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
    screenXS: o,
    screenXSMin: o,
    screenXSMax: a - 1,
    screenSM: a,
    screenSMMin: a,
    screenSMMax: s - 1,
    screenMD: s,
    screenMDMin: s,
    screenMDMax: l - 1,
    screenLG: l,
    screenLGMin: l,
    screenLGMax: u - 1,
    screenXL: u,
    screenXLMin: u,
    screenXLMax: c - 1,
    screenXXL: c,
    screenXXLMin: c,
    boxShadowPopoverArrow: "2px 2px 5px rgba(0, 0, 0, 0.05)",
    boxShadowCard: `
      0 1px 2px -2px ${new zt("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new zt("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new zt("rgba(0, 0, 0, 0.09)").toRgbString()}
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
function $n(e) {
  var t = f.useRef();
  t.current = e;
  var n = f.useCallback(function() {
    for (var r, i = arguments.length, o = new Array(i), a = 0; a < i; a++)
      o[a] = arguments[a];
    return (r = t.current) === null || r === void 0 ? void 0 : r.call.apply(r, [t].concat(o));
  }, []);
  return n;
}
function ui(e) {
  var t = f.useRef(!1), n = f.useState(e), r = F(n, 2), i = r[0], o = r[1];
  f.useEffect(function() {
    return t.current = !1, function() {
      t.current = !0;
    };
  }, []);
  function a(s, l) {
    l && t.current || o(s);
  }
  return [i, a];
}
function Bs(e) {
  return e !== void 0;
}
function Bn(e, t) {
  var n = t || {}, r = n.defaultValue, i = n.value, o = n.onChange, a = n.postState, s = ui(function() {
    return Bs(i) ? i : Bs(r) ? typeof r == "function" ? r() : r : typeof e == "function" ? e() : e;
  }), l = F(s, 2), u = l[0], c = l[1], d = i !== void 0 ? i : u, v = a ? a(d) : d, h = $n(o), p = ui([d]), m = F(p, 2), b = m[0], g = m[1];
  ml(function() {
    var S = b[0];
    u !== S && h(u, S);
  }, [b]), ml(function() {
    Bs(i) || c(i);
  }, [i]);
  var y = $n(function(S, C) {
    c(S, C), g([d], C);
  });
  return [v, y];
}
const Sv = "anticon", b0 = (e, t) => t || (e ? `ant-${e}` : "ant"), lr = /* @__PURE__ */ f.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: b0,
  iconPrefixCls: Sv
}), $a = {
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis"
}, mo = (e) => ({
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
}), Eu = () => ({
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
}), y0 = (e) => ({
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
    [`&:active,
  &:hover`]: {
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
}), _0 = (e, t) => {
  const {
    fontFamily: n,
    fontSize: r
  } = e, i = `[class^="${t}"], [class*=" ${t}"]`;
  return {
    [i]: {
      fontFamily: n,
      fontSize: r,
      boxSizing: "border-box",
      "&::before, &::after": {
        boxSizing: "border-box"
      },
      [i]: {
        boxSizing: "border-box",
        "&::before, &::after": {
          boxSizing: "border-box"
        }
      }
    }
  };
}, S0 = (e) => ({
  outline: `${e.lineWidthFocus}px solid ${e.colorPrimaryBorder}`,
  outlineOffset: 1,
  transition: "outline-offset 0s, outline 0s"
}), Ev = (e) => ({
  "&:focus-visible": Object.assign({}, S0(e))
});
function wu(e, t, n, r) {
  return (i) => {
    const [o, a, s] = go(), {
      getPrefixCls: l,
      iconPrefixCls: u,
      csp: c
    } = Gn(lr), d = l(), v = {
      theme: o,
      token: a,
      hashId: s,
      nonce: () => c?.nonce
    };
    return _l(Object.assign(Object.assign({}, v), {
      path: ["Shared", d]
    }), () => [{
      // Link
      "&": y0(a)
    }]), [_l(Object.assign(Object.assign({}, v), {
      path: [e, i, u]
    }), () => {
      const {
        token: h,
        flush: p
      } = w0(a), m = Object.assign({}, a[e]);
      if (r?.deprecatedTokens) {
        const {
          deprecatedTokens: _
        } = r;
        _.forEach((E) => {
          let [x, I] = E;
          var R;
          process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && $e(!m?.[x], `The token '${String(x)}' of ${e} had deprecated, use '${String(I)}' instead.`), (m?.[x] || m?.[I]) && ((R = m[I]) !== null && R !== void 0 || (m[I] = m?.[x]));
        });
      }
      const b = typeof n == "function" ? n(wn(h, m ?? {})) : n, g = Object.assign(Object.assign({}, b), m), y = `.${i}`, S = wn(h, {
        componentCls: y,
        prefixCls: i,
        iconCls: `.${u}`,
        antCls: `.${d}`
      }, g), C = t(S, {
        hashId: s,
        prefixCls: i,
        rootPrefixCls: d,
        iconPrefixCls: u,
        overrideComponentToken: m
      });
      return p(e, g), [r?.resetStyle === !1 ? null : _0(a, i), C];
    }), s];
  };
}
const wv = process.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC < "u";
let Cl = !0;
function wn() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  if (!wv)
    return Object.assign.apply(Object, [{}].concat(t));
  Cl = !1;
  const r = {};
  return t.forEach((i) => {
    Object.keys(i).forEach((a) => {
      Object.defineProperty(r, a, {
        configurable: !0,
        enumerable: !0,
        get: () => i[a]
      });
    });
  }), Cl = !0, r;
}
function E0() {
}
function w0(e) {
  let t, n = e, r = E0;
  return wv && (t = /* @__PURE__ */ new Set(), n = new Proxy(e, {
    get(i, o) {
      return Cl && t.add(o), i[o];
    }
  }), r = (i, o) => {
    Array.from(t);
  }), {
    token: n,
    keys: t,
    flush: r
  };
}
const C0 = cv(p0), Cv = {
  token: ls,
  hashed: !0
}, Ov = /* @__PURE__ */ Xe.createContext(Cv);
function go() {
  const {
    token: e,
    hashed: t,
    theme: n,
    components: r
  } = Xe.useContext(Ov), i = `${Vb}-${t || ""}`, o = n || C0, [a, s] = Yg(o, [ls, e], {
    salt: i,
    override: Object.assign({
      override: e
    }, r),
    formatToken: g0
  });
  return [o, a, t ? s : ""];
}
const O0 = `-ant-${Date.now()}-${Math.random()}`;
function x0(e, t) {
  const n = {}, r = (a, s) => {
    let l = a.clone();
    return l = s?.(l) || l, l.toRgbString();
  }, i = (a, s) => {
    const l = new zt(a), u = Lr(l.toRgbString());
    n[`${s}-color`] = r(l), n[`${s}-color-disabled`] = u[1], n[`${s}-color-hover`] = u[4], n[`${s}-color-active`] = u[6], n[`${s}-color-outline`] = l.clone().setAlpha(0.2).toRgbString(), n[`${s}-color-deprecated-bg`] = u[0], n[`${s}-color-deprecated-border`] = u[2];
  };
  if (t.primaryColor) {
    i(t.primaryColor, "primary");
    const a = new zt(t.primaryColor), s = Lr(a.toRgbString());
    s.forEach((u, c) => {
      n[`primary-${c + 1}`] = u;
    }), n["primary-color-deprecated-l-35"] = r(a, (u) => u.lighten(35)), n["primary-color-deprecated-l-20"] = r(a, (u) => u.lighten(20)), n["primary-color-deprecated-t-20"] = r(a, (u) => u.tint(20)), n["primary-color-deprecated-t-50"] = r(a, (u) => u.tint(50)), n["primary-color-deprecated-f-12"] = r(a, (u) => u.setAlpha(u.getAlpha() * 0.12));
    const l = new zt(s[0]);
    n["primary-color-active-deprecated-f-30"] = r(l, (u) => u.setAlpha(u.getAlpha() * 0.3)), n["primary-color-active-deprecated-d-02"] = r(l, (u) => u.darken(2));
  }
  return t.successColor && i(t.successColor, "success"), t.warningColor && i(t.warningColor, "warning"), t.errorColor && i(t.errorColor, "error"), t.infoColor && i(t.infoColor, "info"), `
  :root {
    ${Object.keys(n).map((a) => `--${e}-${a}: ${n[a]};`).join(`
`)}
  }
  `.trim();
}
function N0(e, t) {
  const n = x0(e, t);
  nn() ? di(n, `${O0}-dynamic-theme`) : process.env.NODE_ENV !== "production" && qn(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
const Ol = /* @__PURE__ */ f.createContext(!1), P0 = (e) => {
  let {
    children: t,
    disabled: n
  } = e;
  const r = f.useContext(Ol);
  return /* @__PURE__ */ f.createElement(Ol.Provider, {
    value: n ?? r
  }, t);
}, xv = Ol, M0 = (e) => {
  const t = Xe.useContext(us);
  return Xe.useMemo(() => e ? typeof e == "string" ? e ?? t : e instanceof Function ? e(t) : t : t, [e, t]);
}, Cu = M0, Nv = /* @__PURE__ */ f.createContext(void 0), R0 = (e) => {
  let {
    children: t,
    size: n
  } = e;
  const r = Cu(n);
  return /* @__PURE__ */ f.createElement(Nv.Provider, {
    value: r
  }, t);
}, us = Nv;
function T0() {
  const e = Gn(xv), t = Gn(us);
  return {
    componentDisabled: e,
    componentSize: t
  };
}
function $0(e, t) {
  const n = e || {}, r = n.inherit === !1 || !t ? Cv : t;
  return ho(() => {
    if (!e)
      return t;
    const o = Object.assign({}, r.components);
    return Object.keys(e.components || {}).forEach((a) => {
      o[a] = Object.assign(Object.assign({}, o[a]), e.components[a]);
    }), Object.assign(Object.assign(Object.assign({}, r), n), {
      token: Object.assign(Object.assign({}, r.token), n.token),
      components: o
    });
  }, [n, r], (o, a) => o.some((s, l) => {
    const u = a[l];
    return !pu(s, u, !0);
  }));
}
var I0 = ["children"], Pv = /* @__PURE__ */ f.createContext({});
function A0(e) {
  var t = e.children, n = We(e, I0);
  return /* @__PURE__ */ f.createElement(Pv.Provider, {
    value: n
  }, t);
}
var D0 = /* @__PURE__ */ function(e) {
  Si(n, e);
  var t = Ei(n);
  function n() {
    return hn(this, n), t.apply(this, arguments);
  }
  return pn(n, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), n;
}(f.Component), Pr = "none", qo = "appear", Xo = "enter", Yo = "leave", Ic = "none", Tn = "prepare", ni = "start", ri = "active", Ou = "end", Mv = "prepared";
function Ac(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit".concat(e)] = "webkit".concat(t), n["Moz".concat(e)] = "moz".concat(t), n["ms".concat(e)] = "MS".concat(t), n["O".concat(e)] = "o".concat(t.toLowerCase()), n;
}
function F0(e, t) {
  var n = {
    animationend: Ac("Animation", "AnimationEnd"),
    transitionend: Ac("Transition", "TransitionEnd")
  };
  return e && ("AnimationEvent" in t || delete n.animationend.animation, "TransitionEvent" in t || delete n.transitionend.transition), n;
}
var L0 = F0(nn(), typeof window < "u" ? window : {}), Rv = {};
if (nn()) {
  var V0 = document.createElement("div");
  Rv = V0.style;
}
var Qo = {};
function Tv(e) {
  if (Qo[e])
    return Qo[e];
  var t = L0[e];
  if (t)
    for (var n = Object.keys(t), r = n.length, i = 0; i < r; i += 1) {
      var o = n[i];
      if (Object.prototype.hasOwnProperty.call(t, o) && o in Rv)
        return Qo[e] = t[o], Qo[e];
    }
  return "";
}
var $v = Tv("animationend"), Iv = Tv("transitionend"), Av = !!($v && Iv), Dc = $v || "animationend", Fc = Iv || "transitionend";
function Lc(e, t) {
  if (!e)
    return null;
  if (Qe(e) === "object") {
    var n = t.replace(/-\w/g, function(r) {
      return r[1].toUpperCase();
    });
    return e[n];
  }
  return "".concat(e, "-").concat(t);
}
const k0 = function(e) {
  var t = ae(), n = ae(e);
  n.current = e;
  var r = f.useCallback(function(a) {
    n.current(a);
  }, []);
  function i(a) {
    a && (a.removeEventListener(Fc, r), a.removeEventListener(Dc, r));
  }
  function o(a) {
    t.current && t.current !== a && i(t.current), a && a !== t.current && (a.addEventListener(Fc, r), a.addEventListener(Dc, r), t.current = a);
  }
  return f.useEffect(function() {
    return function() {
      i(t.current);
    };
  }, []), [o, i];
};
var Dv = nn() ? Fm : ot;
const j0 = function() {
  var e = f.useRef(null);
  function t() {
    Ot.cancel(e.current);
  }
  function n(r) {
    var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    t();
    var o = Ot(function() {
      i <= 1 ? r({
        isCanceled: function() {
          return o !== e.current;
        }
      }) : n(r, i - 1);
    });
    e.current = o;
  }
  return f.useEffect(function() {
    return function() {
      t();
    };
  }, []), [n, t];
};
var H0 = [Tn, ni, ri, Ou], z0 = [Tn, Mv], Fv = !1, B0 = !0;
function Lv(e) {
  return e === ri || e === Ou;
}
const U0 = function(e, t, n) {
  var r = ui(Ic), i = F(r, 2), o = i[0], a = i[1], s = j0(), l = F(s, 2), u = l[0], c = l[1];
  function d() {
    a(Tn, !0);
  }
  var v = t ? z0 : H0;
  return Dv(function() {
    if (o !== Ic && o !== Ou) {
      var h = v.indexOf(o), p = v[h + 1], m = n(o);
      m === Fv ? a(p, !0) : p && u(function(b) {
        function g() {
          b.isCanceled() || a(p, !0);
        }
        m === !0 ? g() : Promise.resolve(m).then(g);
      });
    }
  }, [e, o]), f.useEffect(function() {
    return function() {
      c();
    };
  }, []), [d, o];
};
function W0(e, t, n, r) {
  var i = r.motionEnter, o = i === void 0 ? !0 : i, a = r.motionAppear, s = a === void 0 ? !0 : a, l = r.motionLeave, u = l === void 0 ? !0 : l, c = r.motionDeadline, d = r.motionLeaveImmediately, v = r.onAppearPrepare, h = r.onEnterPrepare, p = r.onLeavePrepare, m = r.onAppearStart, b = r.onEnterStart, g = r.onLeaveStart, y = r.onAppearActive, S = r.onEnterActive, C = r.onLeaveActive, _ = r.onAppearEnd, E = r.onEnterEnd, x = r.onLeaveEnd, I = r.onVisibleChanged, R = ui(), N = F(R, 2), $ = N[0], w = N[1], O = ui(Pr), P = F(O, 2), M = P[0], T = P[1], A = ui(null), k = F(A, 2), H = k[0], Y = k[1], K = ae(!1), V = ae(null);
  function G() {
    return n();
  }
  var q = ae(!1);
  function Z() {
    T(Pr, !0), Y(null, !0);
  }
  function ce(Ce) {
    var fe = G();
    if (!(Ce && !Ce.deadline && Ce.target !== fe)) {
      var he = q.current, Ie;
      M === qo && he ? Ie = _?.(fe, Ce) : M === Xo && he ? Ie = E?.(fe, Ce) : M === Yo && he && (Ie = x?.(fe, Ce)), M !== Pr && he && Ie !== !1 && Z();
    }
  }
  var ee = k0(ce), B = F(ee, 1), Q = B[0], me = function(fe) {
    var he, Ie, Ve;
    switch (fe) {
      case qo:
        return he = {}, U(he, Tn, v), U(he, ni, m), U(he, ri, y), he;
      case Xo:
        return Ie = {}, U(Ie, Tn, h), U(Ie, ni, b), U(Ie, ri, S), Ie;
      case Yo:
        return Ve = {}, U(Ve, Tn, p), U(Ve, ni, g), U(Ve, ri, C), Ve;
      default:
        return {};
    }
  }, te = f.useMemo(function() {
    return me(M);
  }, [M]), L = U0(M, !e, function(Ce) {
    if (Ce === Tn) {
      var fe = te[Tn];
      return fe ? fe(G()) : Fv;
    }
    if (pe in te) {
      var he;
      Y(((he = te[pe]) === null || he === void 0 ? void 0 : he.call(te, G(), null)) || null);
    }
    return pe === ri && (Q(G()), c > 0 && (clearTimeout(V.current), V.current = setTimeout(function() {
      ce({
        deadline: !0
      });
    }, c))), pe === Mv && Z(), B0;
  }), le = F(L, 2), J = le[0], pe = le[1], ne = Lv(pe);
  q.current = ne, Dv(function() {
    w(t);
    var Ce = K.current;
    K.current = !0;
    var fe;
    !Ce && t && s && (fe = qo), Ce && t && o && (fe = Xo), (Ce && !t && u || !Ce && d && !t && u) && (fe = Yo);
    var he = me(fe);
    fe && (e || he[Tn]) ? (T(fe), J()) : T(Pr);
  }, [t]), ot(function() {
    // Cancel appear
    (M === qo && !s || // Cancel enter
    M === Xo && !o || // Cancel leave
    M === Yo && !u) && T(Pr);
  }, [s, o, u]), ot(function() {
    return function() {
      K.current = !1, clearTimeout(V.current);
    };
  }, []);
  var Ne = f.useRef(!1);
  ot(function() {
    $ && (Ne.current = !0), $ !== void 0 && M === Pr && ((Ne.current || $) && I?.($), Ne.current = !0);
  }, [$, M]);
  var ye = H;
  return te[Tn] && pe === ni && (ye = D({
    transition: "none"
  }, ye)), [M, pe, ye, $ ?? t];
}
function K0(e) {
  var t = e;
  Qe(e) === "object" && (t = e.transitionSupport);
  function n(i, o) {
    return !!(i.motionName && t && o !== !1);
  }
  var r = /* @__PURE__ */ f.forwardRef(function(i, o) {
    var a = i.visible, s = a === void 0 ? !0 : a, l = i.removeOnLeave, u = l === void 0 ? !0 : l, c = i.forceRender, d = i.children, v = i.motionName, h = i.leavedClassName, p = i.eventProps, m = f.useContext(Pv), b = m.motion, g = n(i, b), y = ae(), S = ae();
    function C() {
      try {
        return y.current instanceof HTMLElement ? y.current : Na(S.current);
      } catch {
        return null;
      }
    }
    var _ = W0(g, s, C, i), E = F(_, 4), x = E[0], I = E[1], R = E[2], N = E[3], $ = f.useRef(N);
    N && ($.current = !0);
    var w = f.useCallback(function(Y) {
      y.current = Y, fu(o, Y);
    }, [o]), O, P = D(D({}, p), {}, {
      visible: s
    });
    if (!d)
      O = null;
    else if (x === Pr)
      N ? O = d(D({}, P), w) : !u && $.current && h ? O = d(D(D({}, P), {}, {
        className: h
      }), w) : c || !u && !h ? O = d(D(D({}, P), {}, {
        style: {
          display: "none"
        }
      }), w) : O = null;
    else {
      var M, T;
      I === Tn ? T = "prepare" : Lv(I) ? T = "active" : I === ni && (T = "start");
      var A = Lc(v, "".concat(x, "-").concat(T));
      O = d(D(D({}, P), {}, {
        className: Ee(Lc(v, x), (M = {}, U(M, A, A && T), U(M, v, typeof v == "string"), M)),
        style: R
      }), w);
    }
    if (/* @__PURE__ */ f.isValidElement(O) && Ci(O)) {
      var k = O, H = k.ref;
      H || (O = /* @__PURE__ */ f.cloneElement(O, {
        ref: w
      }));
    }
    return /* @__PURE__ */ f.createElement(D0, {
      ref: S
    }, O);
  });
  return r.displayName = "CSSMotion", r;
}
const bo = K0(Av);
var xl = "add", Nl = "keep", Pl = "remove", Us = "removed";
function G0(e) {
  var t;
  return e && Qe(e) === "object" && "key" in e ? t = e : t = {
    key: e
  }, D(D({}, t), {}, {
    key: String(t.key)
  });
}
function Ml() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return e.map(G0);
}
function q0() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], n = [], r = 0, i = t.length, o = Ml(e), a = Ml(t);
  o.forEach(function(u) {
    for (var c = !1, d = r; d < i; d += 1) {
      var v = a[d];
      if (v.key === u.key) {
        r < d && (n = n.concat(a.slice(r, d).map(function(h) {
          return D(D({}, h), {}, {
            status: xl
          });
        })), r = d), n.push(D(D({}, v), {}, {
          status: Nl
        })), r += 1, c = !0;
        break;
      }
    }
    c || n.push(D(D({}, u), {}, {
      status: Pl
    }));
  }), r < i && (n = n.concat(a.slice(r).map(function(u) {
    return D(D({}, u), {}, {
      status: xl
    });
  })));
  var s = {};
  n.forEach(function(u) {
    var c = u.key;
    s[c] = (s[c] || 0) + 1;
  });
  var l = Object.keys(s).filter(function(u) {
    return s[u] > 1;
  });
  return l.forEach(function(u) {
    n = n.filter(function(c) {
      var d = c.key, v = c.status;
      return d !== u || v !== Pl;
    }), n.forEach(function(c) {
      c.key === u && (c.status = Nl);
    });
  }), n;
}
var X0 = ["component", "children", "onVisibleChanged", "onAllRemoved"], Y0 = ["status"], Q0 = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function J0(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : bo, n = /* @__PURE__ */ function(r) {
    Si(o, r);
    var i = Ei(o);
    function o() {
      var a;
      hn(this, o);
      for (var s = arguments.length, l = new Array(s), u = 0; u < s; u++)
        l[u] = arguments[u];
      return a = i.call.apply(i, [this].concat(l)), U(Oa(a), "state", {
        keyEntities: []
      }), U(Oa(a), "removeKey", function(c) {
        var d = a.state.keyEntities, v = d.map(function(h) {
          return h.key !== c ? h : D(D({}, h), {}, {
            status: Us
          });
        });
        return a.setState({
          keyEntities: v
        }), v.filter(function(h) {
          var p = h.status;
          return p !== Us;
        }).length;
      }), a;
    }
    return pn(o, [{
      key: "render",
      value: function() {
        var s = this, l = this.state.keyEntities, u = this.props, c = u.component, d = u.children, v = u.onVisibleChanged, h = u.onAllRemoved, p = We(u, X0), m = c || f.Fragment, b = {};
        return Q0.forEach(function(g) {
          b[g] = p[g], delete p[g];
        }), delete p.keys, /* @__PURE__ */ f.createElement(m, p, l.map(function(g) {
          var y = g.status, S = We(g, Y0), C = y === xl || y === Nl;
          return /* @__PURE__ */ f.createElement(t, ge({}, b, {
            key: S.key,
            visible: C,
            eventProps: S,
            onVisibleChanged: function(E) {
              if (v?.(E, {
                key: S.key
              }), !E) {
                var x = s.removeKey(S.key);
                x === 0 && h && h();
              }
            }
          }), d);
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(s, l) {
        var u = s.keys, c = l.keyEntities, d = Ml(u), v = q0(c, d);
        return {
          keyEntities: v.filter(function(h) {
            var p = c.find(function(m) {
              var b = m.key;
              return h.key === b;
            });
            return !(p && p.status === Us && h.status === Pl);
          })
        };
      }
      // ZombieJ: Return the count of rest keys. It's safe to refactor if need more info.
    }]), o;
  }(f.Component);
  return U(n, "defaultProps", {
    component: "div"
  }), n;
}
J0(Av);
function Z0(e) {
  const {
    children: t
  } = e, [, n] = go(), {
    motion: r
  } = n, i = f.useRef(!1);
  return i.current = i.current || r === !1, i.current ? /* @__PURE__ */ f.createElement(A0, {
    motion: r
  }, t) : t;
}
const ey = (e, t) => {
  const [n, r] = go();
  return _l({
    theme: n,
    token: r,
    hashId: "",
    path: ["ant-design-icons", e],
    nonce: () => t?.nonce
  }, () => [{
    [`.${e}`]: Object.assign(Object.assign({}, Eu()), {
      [`.${e} .${e}-icon`]: {
        display: "block"
      }
    })
  }]);
}, ty = ey;
var ny = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  return n;
};
let Rl = !1;
process.env.NODE_ENV;
const ry = ["getTargetContainer", "getPopupContainer", "renderEmpty", "pageHeader", "input", "pagination", "form", "select", "button"], iy = "ant";
let Vv;
function oy() {
  return Vv || iy;
}
function ay(e) {
  return Object.keys(e).some((t) => t.endsWith("Color"));
}
const sy = (e) => {
  let {
    prefixCls: t,
    iconPrefixCls: n,
    theme: r
  } = e;
  t !== void 0 && (Vv = t), r && ay(r) && (process.env.NODE_ENV !== "production" && qn(!1, "ConfigProvider", "`config` of css variable theme is not work in v5. Please use new `theme` config instead."), N0(oy(), r));
}, ly = (e) => {
  const {
    children: t,
    csp: n,
    autoInsertSpaceInButton: r,
    form: i,
    locale: o,
    componentSize: a,
    direction: s,
    space: l,
    virtual: u,
    dropdownMatchSelectWidth: c,
    popupMatchSelectWidth: d,
    popupOverflow: v,
    legacyLocale: h,
    parentContext: p,
    iconPrefixCls: m,
    theme: b,
    componentDisabled: g
  } = e;
  process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && qn(c === void 0, "ConfigProvider", "`dropdownMatchSelectWidth` is deprecated. Please use `popupMatchSelectWidth` instead.");
  const y = f.useCallback((M, T) => {
    const {
      prefixCls: A
    } = e;
    if (T)
      return T;
    const k = A || p.getPrefixCls("");
    return M ? `${k}-${M}` : k;
  }, [p.getPrefixCls, e.prefixCls]), S = m || p.iconPrefixCls || Sv, C = S !== p.iconPrefixCls, _ = n || p.csp, E = ty(S, _), x = $0(b, p.theme);
  process.env.NODE_ENV !== "production" && (Rl = Rl || !!x);
  const I = {
    csp: _,
    autoInsertSpaceInButton: r,
    locale: o || h,
    direction: s,
    space: l,
    virtual: u,
    popupMatchSelectWidth: d ?? c,
    popupOverflow: v,
    getPrefixCls: y,
    iconPrefixCls: S,
    theme: x
  }, R = Object.assign({}, p);
  Object.keys(I).forEach((M) => {
    I[M] !== void 0 && (R[M] = I[M]);
  }), ry.forEach((M) => {
    const T = e[M];
    T && (R[M] = T);
  });
  const N = ho(() => R, R, (M, T) => {
    const A = Object.keys(M), k = Object.keys(T);
    return A.length !== k.length || A.some((H) => M[H] !== T[H]);
  }), $ = f.useMemo(() => ({
    prefixCls: S,
    csp: _
  }), [S, _]);
  let w = C ? E(t) : t;
  const O = f.useMemo(() => {
    var M, T, A;
    return ti(((M = eo.Form) === null || M === void 0 ? void 0 : M.defaultValidateMessages) || {}, ((A = (T = N.locale) === null || T === void 0 ? void 0 : T.Form) === null || A === void 0 ? void 0 : A.defaultValidateMessages) || {}, i?.validateMessages || {});
  }, [N, i?.validateMessages]);
  Object.keys(O).length > 0 && (w = /* @__PURE__ */ f.createElement(Pb.Provider, {
    value: O
  }, t)), o && (w = /* @__PURE__ */ f.createElement(Lb, {
    locale: o,
    _ANT_MARK__: pv
  }, w)), (S || _) && (w = /* @__PURE__ */ f.createElement(_u.Provider, {
    value: $
  }, w)), a && (w = /* @__PURE__ */ f.createElement(R0, {
    size: a
  }, w)), w = /* @__PURE__ */ f.createElement(Z0, null, w);
  const P = f.useMemo(() => {
    const M = x || {}, {
      algorithm: T,
      token: A
    } = M, k = ny(M, ["algorithm", "token"]), H = T && (!Array.isArray(T) || T.length > 0) ? cv(T) : void 0;
    return Object.assign(Object.assign({}, k), {
      theme: H,
      token: Object.assign(Object.assign({}, ls), A)
    });
  }, [x]);
  return b && (w = /* @__PURE__ */ f.createElement(Ov.Provider, {
    value: P
  }, w)), g !== void 0 && (w = /* @__PURE__ */ f.createElement(P0, {
    disabled: g
  }, w)), /* @__PURE__ */ f.createElement(lr.Provider, {
    value: N
  }, w);
}, jr = (e) => {
  const t = f.useContext(lr), n = f.useContext(Su);
  return /* @__PURE__ */ f.createElement(ly, Object.assign({
    parentContext: t,
    legacyLocale: n
  }, e));
};
jr.ConfigContext = lr;
jr.SizeContext = us;
jr.config = sy;
jr.useConfig = T0;
Object.defineProperty(jr, "SizeContext", {
  get: () => (process.env.NODE_ENV !== "production" && qn(!1, "ConfigProvider", "ConfigProvider.SizeContext is deprecated. Please use `ConfigProvider.useConfig().componentSize` instead."), us)
});
process.env.NODE_ENV !== "production" && (jr.displayName = "ConfigProvider");
function kv(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
}
function uy(e) {
  return kv(e) !== e?.ownerDocument;
}
function Ia(e) {
  return uy(e) ? kv(e) : null;
}
function cy(e, t) {
  $e(e, "[@ant-design/icons] ".concat(t));
}
function Vc(e) {
  return Qe(e) === "object" && typeof e.name == "string" && typeof e.theme == "string" && (Qe(e.icon) === "object" || typeof e.icon == "function");
}
function kc() {
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
function Tl(e, t, n) {
  return n ? /* @__PURE__ */ Xe.createElement(e.tag, D(D({
    key: t
  }, kc(e.attrs)), n), (e.children || []).map(function(r, i) {
    return Tl(r, "".concat(t, "-").concat(e.tag, "-").concat(i));
  })) : /* @__PURE__ */ Xe.createElement(e.tag, D({
    key: t
  }, kc(e.attrs)), (e.children || []).map(function(r, i) {
    return Tl(r, "".concat(t, "-").concat(e.tag, "-").concat(i));
  }));
}
function jv(e) {
  return Lr(e)[0];
}
function Hv(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
var fy = `
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
`, dy = function(t) {
  var n = Gn(_u), r = n.csp, i = n.prefixCls, o = fy;
  i && (o = o.replace(/anticon/g, i)), ot(function() {
    var a = t.current, s = Ia(a);
    di(o, "@ant-design-icons", {
      prepend: !0,
      csp: r,
      attachTo: s
    });
  }, []);
}, vy = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"], Wi = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function hy(e) {
  var t = e.primaryColor, n = e.secondaryColor;
  Wi.primaryColor = t, Wi.secondaryColor = n || jv(t), Wi.calculated = !!n;
}
function py() {
  return D({}, Wi);
}
var cs = function(t) {
  var n = t.icon, r = t.className, i = t.onClick, o = t.style, a = t.primaryColor, s = t.secondaryColor, l = We(t, vy), u = f.useRef(), c = Wi;
  if (a && (c = {
    primaryColor: a,
    secondaryColor: s || jv(a)
  }), dy(u), cy(Vc(n), "icon should be icon definiton, but got ".concat(n)), !Vc(n))
    return null;
  var d = n;
  return d && typeof d.icon == "function" && (d = D(D({}, d), {}, {
    icon: d.icon(c.primaryColor, c.secondaryColor)
  })), Tl(d.icon, "svg-".concat(d.name), D(D({
    className: r,
    onClick: i,
    style: o,
    "data-icon": d.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true"
  }, l), {}, {
    ref: u
  }));
};
cs.displayName = "IconReact";
cs.getTwoToneColors = py;
cs.setTwoToneColors = hy;
const xu = cs;
function zv(e) {
  var t = Hv(e), n = F(t, 2), r = n[0], i = n[1];
  return xu.setTwoToneColors({
    primaryColor: r,
    secondaryColor: i
  });
}
function my() {
  var e = xu.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var gy = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
zv(t0.primary);
var fs = /* @__PURE__ */ f.forwardRef(function(e, t) {
  var n, r = e.className, i = e.icon, o = e.spin, a = e.rotate, s = e.tabIndex, l = e.onClick, u = e.twoToneColor, c = We(e, gy), d = f.useContext(_u), v = d.prefixCls, h = v === void 0 ? "anticon" : v, p = d.rootClassName, m = Ee(p, h, (n = {}, U(n, "".concat(h, "-").concat(i.name), !!i.name), U(n, "".concat(h, "-spin"), !!o || i.name === "loading"), n), r), b = s;
  b === void 0 && l && (b = -1);
  var g = a ? {
    msTransform: "rotate(".concat(a, "deg)"),
    transform: "rotate(".concat(a, "deg)")
  } : void 0, y = Hv(u), S = F(y, 2), C = S[0], _ = S[1];
  return /* @__PURE__ */ f.createElement("span", ge({
    role: "img",
    "aria-label": i.name
  }, c, {
    ref: t,
    tabIndex: b,
    onClick: l,
    className: m
  }), /* @__PURE__ */ f.createElement(xu, {
    icon: i,
    primaryColor: C,
    secondaryColor: _,
    style: g
  }));
});
fs.displayName = "AntdIcon";
fs.getTwoToneColor = my;
fs.setTwoToneColor = zv;
const Er = fs;
var by = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z" } }] }, name: "close-circle", theme: "filled" };
const yy = by;
var Bv = function(t, n) {
  return /* @__PURE__ */ f.createElement(Er, ge({}, t, {
    ref: n,
    icon: yy
  }));
};
process.env.NODE_ENV !== "production" && (Bv.displayName = "CloseCircleFilled");
const _y = /* @__PURE__ */ f.forwardRef(Bv);
var Sy = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" } }] }, name: "close", theme: "outlined" };
const Ey = Sy;
var Uv = function(t, n) {
  return /* @__PURE__ */ f.createElement(Er, ge({}, t, {
    ref: n,
    icon: Ey
  }));
};
process.env.NODE_ENV !== "production" && (Uv.displayName = "CloseOutlined");
const Wv = /* @__PURE__ */ f.forwardRef(Uv);
var wy = `accept acceptCharset accessKey action allowFullScreen allowTransparency
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
    summary tabIndex target title type useMap value width wmode wrap`, Cy = `onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`, Oy = "".concat(wy, " ").concat(Cy).split(/[\s\n]+/), xy = "aria-", Ny = "data-";
function jc(e, t) {
  return e.indexOf(t) === 0;
}
function Aa(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n;
  t === !1 ? n = {
    aria: !0,
    data: !0,
    attr: !0
  } : t === !0 ? n = {
    aria: !0
  } : n = D({}, t);
  var r = {};
  return Object.keys(e).forEach(function(i) {
    // Aria
    (n.aria && (i === "role" || jc(i, xy)) || // Data
    n.data && jc(i, Ny) || // Attr
    n.attr && Oy.includes(i)) && (r[i] = e[i]);
  }), r;
}
var j = {
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
    n >= j.F1 && n <= j.F12)
      return !1;
    switch (n) {
      case j.ALT:
      case j.CAPS_LOCK:
      case j.CONTEXT_MENU:
      case j.CTRL:
      case j.DOWN:
      case j.END:
      case j.ESC:
      case j.HOME:
      case j.INSERT:
      case j.LEFT:
      case j.MAC_FF_META:
      case j.META:
      case j.NUMLOCK:
      case j.NUM_CENTER:
      case j.PAGE_DOWN:
      case j.PAGE_UP:
      case j.PAUSE:
      case j.PRINT_SCREEN:
      case j.RIGHT:
      case j.SHIFT:
      case j.UP:
      case j.WIN_KEY:
      case j.WIN_KEY_RIGHT:
        return !1;
      default:
        return !0;
    }
  },
  /**
   * whether character is entered.
   */
  isCharacterKey: function(t) {
    if (t >= j.ZERO && t <= j.NINE || t >= j.NUM_ZERO && t <= j.NUM_MULTIPLY || t >= j.A && t <= j.Z || window.navigator.userAgent.indexOf("WebKit") !== -1 && t === 0)
      return !0;
    switch (t) {
      case j.SPACE:
      case j.QUESTION_MARK:
      case j.NUM_PLUS:
      case j.NUM_MINUS:
      case j.NUM_PERIOD:
      case j.NUM_DIVISION:
      case j.SEMICOLON:
      case j.DASH:
      case j.EQUALS:
      case j.COMMA:
      case j.PERIOD:
      case j.SLASH:
      case j.APOSTROPHE:
      case j.SINGLE_QUOTE:
      case j.OPEN_SQUARE_BRACKET:
      case j.BACKSLASH:
      case j.CLOSE_SQUARE_BRACKET:
        return !0;
      default:
        return !1;
    }
  }
}, Py = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, name: "loading", theme: "outlined" };
const My = Py;
var Kv = function(t, n) {
  return /* @__PURE__ */ f.createElement(Er, ge({}, t, {
    ref: n,
    icon: My
  }));
};
process.env.NODE_ENV !== "production" && (Kv.displayName = "LoadingOutlined");
const Ry = /* @__PURE__ */ f.forwardRef(Kv);
function sr() {
  sr = function() {
    return e;
  };
  var e = {}, t = Object.prototype, n = t.hasOwnProperty, r = Object.defineProperty || function(w, O, P) {
    w[O] = P.value;
  }, i = typeof Symbol == "function" ? Symbol : {}, o = i.iterator || "@@iterator", a = i.asyncIterator || "@@asyncIterator", s = i.toStringTag || "@@toStringTag";
  function l(w, O, P) {
    return Object.defineProperty(w, O, {
      value: P,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), w[O];
  }
  try {
    l({}, "");
  } catch {
    l = function(P, M, T) {
      return P[M] = T;
    };
  }
  function u(w, O, P, M) {
    var T = O && O.prototype instanceof v ? O : v, A = Object.create(T.prototype), k = new R(M || []);
    return r(A, "_invoke", {
      value: _(w, P, k)
    }), A;
  }
  function c(w, O, P) {
    try {
      return {
        type: "normal",
        arg: w.call(O, P)
      };
    } catch (M) {
      return {
        type: "throw",
        arg: M
      };
    }
  }
  e.wrap = u;
  var d = {};
  function v() {
  }
  function h() {
  }
  function p() {
  }
  var m = {};
  l(m, o, function() {
    return this;
  });
  var b = Object.getPrototypeOf, g = b && b(b(N([])));
  g && g !== t && n.call(g, o) && (m = g);
  var y = p.prototype = v.prototype = Object.create(m);
  function S(w) {
    ["next", "throw", "return"].forEach(function(O) {
      l(w, O, function(P) {
        return this._invoke(O, P);
      });
    });
  }
  function C(w, O) {
    function P(T, A, k, H) {
      var Y = c(w[T], w, A);
      if (Y.type !== "throw") {
        var K = Y.arg, V = K.value;
        return V && Qe(V) == "object" && n.call(V, "__await") ? O.resolve(V.__await).then(function(G) {
          P("next", G, k, H);
        }, function(G) {
          P("throw", G, k, H);
        }) : O.resolve(V).then(function(G) {
          K.value = G, k(K);
        }, function(G) {
          return P("throw", G, k, H);
        });
      }
      H(Y.arg);
    }
    var M;
    r(this, "_invoke", {
      value: function(A, k) {
        function H() {
          return new O(function(Y, K) {
            P(A, k, Y, K);
          });
        }
        return M = M ? M.then(H, H) : H();
      }
    });
  }
  function _(w, O, P) {
    var M = "suspendedStart";
    return function(T, A) {
      if (M === "executing")
        throw new Error("Generator is already running");
      if (M === "completed") {
        if (T === "throw")
          throw A;
        return $();
      }
      for (P.method = T, P.arg = A; ; ) {
        var k = P.delegate;
        if (k) {
          var H = E(k, P);
          if (H) {
            if (H === d)
              continue;
            return H;
          }
        }
        if (P.method === "next")
          P.sent = P._sent = P.arg;
        else if (P.method === "throw") {
          if (M === "suspendedStart")
            throw M = "completed", P.arg;
          P.dispatchException(P.arg);
        } else
          P.method === "return" && P.abrupt("return", P.arg);
        M = "executing";
        var Y = c(w, O, P);
        if (Y.type === "normal") {
          if (M = P.done ? "completed" : "suspendedYield", Y.arg === d)
            continue;
          return {
            value: Y.arg,
            done: P.done
          };
        }
        Y.type === "throw" && (M = "completed", P.method = "throw", P.arg = Y.arg);
      }
    };
  }
  function E(w, O) {
    var P = O.method, M = w.iterator[P];
    if (M === void 0)
      return O.delegate = null, P === "throw" && w.iterator.return && (O.method = "return", O.arg = void 0, E(w, O), O.method === "throw") || P !== "return" && (O.method = "throw", O.arg = new TypeError("The iterator does not provide a '" + P + "' method")), d;
    var T = c(M, w.iterator, O.arg);
    if (T.type === "throw")
      return O.method = "throw", O.arg = T.arg, O.delegate = null, d;
    var A = T.arg;
    return A ? A.done ? (O[w.resultName] = A.value, O.next = w.nextLoc, O.method !== "return" && (O.method = "next", O.arg = void 0), O.delegate = null, d) : A : (O.method = "throw", O.arg = new TypeError("iterator result is not an object"), O.delegate = null, d);
  }
  function x(w) {
    var O = {
      tryLoc: w[0]
    };
    1 in w && (O.catchLoc = w[1]), 2 in w && (O.finallyLoc = w[2], O.afterLoc = w[3]), this.tryEntries.push(O);
  }
  function I(w) {
    var O = w.completion || {};
    O.type = "normal", delete O.arg, w.completion = O;
  }
  function R(w) {
    this.tryEntries = [{
      tryLoc: "root"
    }], w.forEach(x, this), this.reset(!0);
  }
  function N(w) {
    if (w) {
      var O = w[o];
      if (O)
        return O.call(w);
      if (typeof w.next == "function")
        return w;
      if (!isNaN(w.length)) {
        var P = -1, M = function T() {
          for (; ++P < w.length; )
            if (n.call(w, P))
              return T.value = w[P], T.done = !1, T;
          return T.value = void 0, T.done = !0, T;
        };
        return M.next = M;
      }
    }
    return {
      next: $
    };
  }
  function $() {
    return {
      value: void 0,
      done: !0
    };
  }
  return h.prototype = p, r(y, "constructor", {
    value: p,
    configurable: !0
  }), r(p, "constructor", {
    value: h,
    configurable: !0
  }), h.displayName = l(p, s, "GeneratorFunction"), e.isGeneratorFunction = function(w) {
    var O = typeof w == "function" && w.constructor;
    return !!O && (O === h || (O.displayName || O.name) === "GeneratorFunction");
  }, e.mark = function(w) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(w, p) : (w.__proto__ = p, l(w, s, "GeneratorFunction")), w.prototype = Object.create(y), w;
  }, e.awrap = function(w) {
    return {
      __await: w
    };
  }, S(C.prototype), l(C.prototype, a, function() {
    return this;
  }), e.AsyncIterator = C, e.async = function(w, O, P, M, T) {
    T === void 0 && (T = Promise);
    var A = new C(u(w, O, P, M), T);
    return e.isGeneratorFunction(O) ? A : A.next().then(function(k) {
      return k.done ? k.value : A.next();
    });
  }, S(y), l(y, s, "Generator"), l(y, o, function() {
    return this;
  }), l(y, "toString", function() {
    return "[object Generator]";
  }), e.keys = function(w) {
    var O = Object(w), P = [];
    for (var M in O)
      P.push(M);
    return P.reverse(), function T() {
      for (; P.length; ) {
        var A = P.pop();
        if (A in O)
          return T.value = A, T.done = !1, T;
      }
      return T.done = !0, T;
    };
  }, e.values = N, R.prototype = {
    constructor: R,
    reset: function(O) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(I), !O)
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
      function M(K, V) {
        return k.type = "throw", k.arg = O, P.next = K, V && (P.method = "next", P.arg = void 0), !!V;
      }
      for (var T = this.tryEntries.length - 1; T >= 0; --T) {
        var A = this.tryEntries[T], k = A.completion;
        if (A.tryLoc === "root")
          return M("end");
        if (A.tryLoc <= this.prev) {
          var H = n.call(A, "catchLoc"), Y = n.call(A, "finallyLoc");
          if (H && Y) {
            if (this.prev < A.catchLoc)
              return M(A.catchLoc, !0);
            if (this.prev < A.finallyLoc)
              return M(A.finallyLoc);
          } else if (H) {
            if (this.prev < A.catchLoc)
              return M(A.catchLoc, !0);
          } else {
            if (!Y)
              throw new Error("try statement without catch or finally");
            if (this.prev < A.finallyLoc)
              return M(A.finallyLoc);
          }
        }
      }
    },
    abrupt: function(O, P) {
      for (var M = this.tryEntries.length - 1; M >= 0; --M) {
        var T = this.tryEntries[M];
        if (T.tryLoc <= this.prev && n.call(T, "finallyLoc") && this.prev < T.finallyLoc) {
          var A = T;
          break;
        }
      }
      A && (O === "break" || O === "continue") && A.tryLoc <= P && P <= A.finallyLoc && (A = null);
      var k = A ? A.completion : {};
      return k.type = O, k.arg = P, A ? (this.method = "next", this.next = A.finallyLoc, d) : this.complete(k);
    },
    complete: function(O, P) {
      if (O.type === "throw")
        throw O.arg;
      return O.type === "break" || O.type === "continue" ? this.next = O.arg : O.type === "return" ? (this.rval = this.arg = O.arg, this.method = "return", this.next = "end") : O.type === "normal" && P && (this.next = P), d;
    },
    finish: function(O) {
      for (var P = this.tryEntries.length - 1; P >= 0; --P) {
        var M = this.tryEntries[P];
        if (M.finallyLoc === O)
          return this.complete(M.completion, M.afterLoc), I(M), d;
      }
    },
    catch: function(O) {
      for (var P = this.tryEntries.length - 1; P >= 0; --P) {
        var M = this.tryEntries[P];
        if (M.tryLoc === O) {
          var T = M.completion;
          if (T.type === "throw") {
            var A = T.arg;
            I(M);
          }
          return A;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function(O, P, M) {
      return this.delegate = {
        iterator: N(O),
        resultName: P,
        nextLoc: M
      }, this.method === "next" && (this.arg = void 0), d;
    }
  }, e;
}
function Hc(e, t, n, r, i, o, a) {
  try {
    var s = e[o](a), l = s.value;
  } catch (u) {
    n(u);
    return;
  }
  s.done ? t(l) : Promise.resolve(l).then(r, i);
}
function ds(e) {
  return function() {
    var t = this, n = arguments;
    return new Promise(function(r, i) {
      var o = e.apply(t, n);
      function a(l) {
        Hc(o, r, i, a, s, "next", l);
      }
      function s(l) {
        Hc(o, r, i, a, s, "throw", l);
      }
      a(void 0);
    });
  };
}
const Gv = function(e) {
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
      var i = e.getBoundingClientRect(), o = i.width, a = i.height;
      if (o || a)
        return !0;
    }
  }
  return !1;
};
globalThis && globalThis.__rest;
const Ty = /* @__PURE__ */ f.createContext(null), $y = (e, t) => {
  const n = f.useContext(Ty), r = f.useMemo(() => {
    if (!n)
      return "";
    const {
      compactDirection: i,
      isFirstItem: o,
      isLastItem: a
    } = n, s = i === "vertical" ? "-vertical-" : "-";
    return Ee({
      [`${e}-compact${s}item`]: !0,
      [`${e}-compact${s}first-item`]: o,
      [`${e}-compact${s}last-item`]: a,
      [`${e}-compact${s}item-rtl`]: t === "rtl"
    });
  }, [e, t, n]);
  return {
    compactSize: n?.compactSize,
    compactDirection: n?.compactDirection,
    compactItemClassnames: r
  };
};
function Iy(e, t, n) {
  const {
    focusElCls: r,
    focus: i,
    borderElCls: o
  } = n, a = o ? "> *" : "", s = ["hover", i ? "focus" : null, "active"].filter(Boolean).map((l) => `&:${l} ${a}`).join(",");
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
function Ay(e, t, n) {
  const {
    borderElCls: r
  } = n, i = r ? `> ${r}` : "";
  return {
    [`&-item:not(${t}-first-item):not(${t}-last-item) ${i}`]: {
      borderRadius: 0
    },
    [`&-item:not(${t}-last-item)${t}-first-item`]: {
      [`& ${i}, &${e}-sm ${i}, &${e}-lg ${i}`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`&-item:not(${t}-first-item)${t}-last-item`]: {
      [`& ${i}, &${e}-sm ${i}, &${e}-lg ${i}`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    }
  };
}
function Dy(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    focus: !0
  };
  const {
    componentCls: n
  } = e, r = `${n}-compact`;
  return {
    [r]: Object.assign(Object.assign({}, Iy(e, r, t)), Ay(n, r, t))
  };
}
const Fy = (e) => e !== void 0 && (e === "topLeft" || e === "topRight") ? "slide-down" : "slide-up", qv = (e, t, n) => n !== void 0 ? n : `${e}-${t}`;
var Xv = /* @__PURE__ */ f.createContext(null), zc = [];
function Ly(e, t) {
  var n = f.useState(function() {
    if (!nn())
      return null;
    var p = document.createElement("div");
    return process.env.NODE_ENV !== "production" && t && p.setAttribute("data-debug", t), p;
  }), r = F(n, 1), i = r[0], o = f.useRef(!1), a = f.useContext(Xv), s = f.useState(zc), l = F(s, 2), u = l[0], c = l[1], d = a || (o.current ? void 0 : function(p) {
    c(function(m) {
      var b = [p].concat(de(m));
      return b;
    });
  });
  function v() {
    i.parentElement || document.body.appendChild(i), o.current = !0;
  }
  function h() {
    var p;
    (p = i.parentElement) === null || p === void 0 || p.removeChild(i), o.current = !1;
  }
  return Mt(function() {
    return e ? a ? a(v) : v() : h(), h;
  }, [e]), Mt(function() {
    u.length && (u.forEach(function(p) {
      return p();
    }), c(zc));
  }, [u]), [i, d];
}
var Ws;
function Vy(e) {
  if (typeof document > "u")
    return 0;
  if (e || Ws === void 0) {
    var t = document.createElement("div");
    t.style.width = "100%", t.style.height = "200px";
    var n = document.createElement("div"), r = n.style;
    r.position = "absolute", r.top = "0", r.left = "0", r.pointerEvents = "none", r.visibility = "hidden", r.width = "200px", r.height = "150px", r.overflow = "hidden", n.appendChild(t), document.body.appendChild(n);
    var i = t.offsetWidth;
    n.style.overflow = "scroll";
    var o = t.offsetWidth;
    i === o && (o = n.clientWidth), document.body.removeChild(n), Ws = i - o;
  }
  return Ws;
}
function ky() {
  return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth;
}
var jy = "rc-util-locker-".concat(Date.now()), Bc = 0;
function Hy(e) {
  var t = !!e, n = f.useState(function() {
    return Bc += 1, "".concat(jy, "_").concat(Bc);
  }), r = F(n, 1), i = r[0];
  Mt(function() {
    if (t) {
      var o = Vy(), a = ky();
      di(`
html body {
  overflow-y: hidden;
  `.concat(a ? "width: calc(100% - ".concat(o, "px);") : "", `
}`), i);
    } else
      Ra(i);
    return function() {
      Ra(i);
    };
  }, [t, i]);
}
var Uc = !1;
function zy(e) {
  return typeof e == "boolean" && (Uc = e), Uc;
}
var Wc = function(t) {
  return t === !1 ? !1 : !nn() || !t ? null : typeof t == "string" ? document.querySelector(t) : typeof t == "function" ? t() : t;
}, Nu = /* @__PURE__ */ f.forwardRef(function(e, t) {
  var n = e.open, r = e.autoLock, i = e.getContainer, o = e.debug, a = e.autoDestroy, s = a === void 0 ? !0 : a, l = e.children, u = f.useState(n), c = F(u, 2), d = c[0], v = c[1], h = d || n;
  process.env.NODE_ENV !== "production" && $e(nn() || !n, "Portal only work in client side. Please call 'useEffect' to show Portal instead default render in SSR."), f.useEffect(function() {
    (s || n) && v(n);
  }, [n, s]);
  var p = f.useState(function() {
    return Wc(i);
  }), m = F(p, 2), b = m[0], g = m[1];
  f.useEffect(function() {
    var w = Wc(i);
    g(w ?? null);
  });
  var y = Ly(h && !b, o), S = F(y, 2), C = S[0], _ = S[1], E = b ?? C;
  Hy(r && n && nn() && (E === C || E === document.body));
  var x = null;
  if (l && Ci(l) && t) {
    var I = l;
    x = I.ref;
  }
  var R = po(x, t);
  if (!h || !nn() || b === void 0)
    return null;
  var N = E === !1 || zy(), $ = l;
  return t && ($ = /* @__PURE__ */ f.cloneElement(l, {
    ref: R
  })), /* @__PURE__ */ f.createElement(Xv.Provider, {
    value: _
  }, N ? $ : /* @__PURE__ */ km($, E));
});
process.env.NODE_ENV !== "production" && (Nu.displayName = "Portal");
function By() {
  var e = D({}, f);
  return e.useId;
}
var Kc = 0;
function Uy(e) {
  var t = f.useState("ssr-id"), n = F(t, 2), r = n[0], i = n[1], o = By(), a = o?.();
  return f.useEffect(function() {
    if (!o) {
      var s = Kc;
      Kc += 1, i("rc_unique_".concat(s));
    }
  }, []), e || (process.env.NODE_ENV === "test" ? "test-id" : a || r);
}
var $r = "RC_FORM_INTERNAL_HOOKS", vt = function() {
  $e(!1, "Can not find FormContext. Please make sure you wrap Field under Form.");
}, hi = /* @__PURE__ */ f.createContext({
  getFieldValue: vt,
  getFieldsValue: vt,
  getFieldError: vt,
  getFieldWarning: vt,
  getFieldsError: vt,
  isFieldsTouched: vt,
  isFieldTouched: vt,
  isFieldValidating: vt,
  isFieldsValidating: vt,
  resetFields: vt,
  setFields: vt,
  setFieldValue: vt,
  setFieldsValue: vt,
  validateFields: vt,
  submit: vt,
  getInternalHooks: function() {
    return vt(), {
      dispatch: vt,
      initEntityValue: vt,
      registerField: vt,
      useSubscribe: vt,
      setInitialValues: vt,
      destroyForm: vt,
      setCallbacks: vt,
      registerWatch: vt,
      getFields: vt,
      setValidateMessages: vt,
      setPreserve: vt,
      getInitialValue: vt
    };
  }
}), Da = /* @__PURE__ */ f.createContext(null);
function $l(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function Wy(e) {
  return e && !!e._init;
}
function Ir() {
  return Ir = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Ir.apply(this, arguments);
}
function Ky(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, to(e, t);
}
function Il(e) {
  return Il = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Il(e);
}
function to(e, t) {
  return to = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
    return r.__proto__ = i, r;
  }, to(e, t);
}
function Gy() {
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
function da(e, t, n) {
  return Gy() ? da = Reflect.construct.bind() : da = function(i, o, a) {
    var s = [null];
    s.push.apply(s, o);
    var l = Function.bind.apply(i, s), u = new l();
    return a && to(u, a.prototype), u;
  }, da.apply(null, arguments);
}
function qy(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function Al(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Al = function(r) {
    if (r === null || !qy(r))
      return r;
    if (typeof r != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof t < "u") {
      if (t.has(r))
        return t.get(r);
      t.set(r, i);
    }
    function i() {
      return da(r, arguments, Il(this).constructor);
    }
    return i.prototype = Object.create(r.prototype, {
      constructor: {
        value: i,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), to(i, r);
  }, Al(e);
}
var Xy = /%[sdj%]/g, Yv = function() {
};
typeof process < "u" && process.env && process.env.NODE_ENV !== "production" && typeof window < "u" && typeof document < "u" && (Yv = function(t, n) {
  typeof console < "u" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING > "u" && n.every(function(r) {
    return typeof r == "string";
  }) && console.warn(t, n);
});
function Dl(e) {
  if (!e || !e.length)
    return null;
  var t = {};
  return e.forEach(function(n) {
    var r = n.field;
    t[r] = t[r] || [], t[r].push(n);
  }), t;
}
function cn(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  var i = 0, o = n.length;
  if (typeof e == "function")
    return e.apply(null, n);
  if (typeof e == "string") {
    var a = e.replace(Xy, function(s) {
      if (s === "%%")
        return "%";
      if (i >= o)
        return s;
      switch (s) {
        case "%s":
          return String(n[i++]);
        case "%d":
          return Number(n[i++]);
        case "%j":
          try {
            return JSON.stringify(n[i++]);
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
function Yy(e) {
  return e === "string" || e === "url" || e === "hex" || e === "email" || e === "date" || e === "pattern";
}
function Lt(e, t) {
  return !!(e == null || t === "array" && Array.isArray(e) && !e.length || Yy(t) && typeof e == "string" && !e);
}
function Qy(e, t, n) {
  var r = [], i = 0, o = e.length;
  function a(s) {
    r.push.apply(r, s || []), i++, i === o && n(r);
  }
  e.forEach(function(s) {
    t(s, a);
  });
}
function Gc(e, t, n) {
  var r = 0, i = e.length;
  function o(a) {
    if (a && a.length) {
      n(a);
      return;
    }
    var s = r;
    r = r + 1, s < i ? t(e[s], o) : n([]);
  }
  o([]);
}
function Jy(e) {
  var t = [];
  return Object.keys(e).forEach(function(n) {
    t.push.apply(t, e[n] || []);
  }), t;
}
var qc = /* @__PURE__ */ function(e) {
  Ky(t, e);
  function t(n, r) {
    var i;
    return i = e.call(this, "Async Validation Error") || this, i.errors = n, i.fields = r, i;
  }
  return t;
}(/* @__PURE__ */ Al(Error));
function Zy(e, t, n, r, i) {
  if (t.first) {
    var o = new Promise(function(v, h) {
      var p = function(g) {
        return r(g), g.length ? h(new qc(g, Dl(g))) : v(i);
      }, m = Jy(e);
      Gc(m, n, p);
    });
    return o.catch(function(v) {
      return v;
    }), o;
  }
  var a = t.firstFields === !0 ? Object.keys(e) : t.firstFields || [], s = Object.keys(e), l = s.length, u = 0, c = [], d = new Promise(function(v, h) {
    var p = function(b) {
      if (c.push.apply(c, b), u++, u === l)
        return r(c), c.length ? h(new qc(c, Dl(c))) : v(i);
    };
    s.length || (r(c), v(i)), s.forEach(function(m) {
      var b = e[m];
      a.indexOf(m) !== -1 ? Gc(b, n, p) : Qy(b, n, p);
    });
  });
  return d.catch(function(v) {
    return v;
  }), d;
}
function e_(e) {
  return !!(e && e.message !== void 0);
}
function t_(e, t) {
  for (var n = e, r = 0; r < t.length; r++) {
    if (n == null)
      return n;
    n = n[t[r]];
  }
  return n;
}
function Xc(e, t) {
  return function(n) {
    var r;
    return e.fullFields ? r = t_(t, e.fullFields) : r = t[n.field || e.fullField], e_(n) ? (n.field = n.field || e.fullField, n.fieldValue = r, n) : {
      message: typeof n == "function" ? n() : n,
      fieldValue: r,
      field: n.field || e.fullField
    };
  };
}
function Yc(e, t) {
  if (t) {
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = t[n];
        typeof r == "object" && typeof e[n] == "object" ? e[n] = Ir({}, e[n], r) : e[n] = r;
      }
  }
  return e;
}
var Qv = function(t, n, r, i, o, a) {
  t.required && (!r.hasOwnProperty(t.field) || Lt(n, a || t.type)) && i.push(cn(o.messages.required, t.fullField));
}, n_ = function(t, n, r, i, o) {
  (/^\s+$/.test(n) || n === "") && i.push(cn(o.messages.whitespace, t.fullField));
}, Jo, r_ = function() {
  if (Jo)
    return Jo;
  var e = "[a-fA-F\\d:]", t = function(C) {
    return C && C.includeBoundaries ? "(?:(?<=\\s|^)(?=" + e + ")|(?<=" + e + ")(?=\\s|$))" : "";
  }, n = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}", r = "[a-fA-F\\d]{1,4}", i = (`
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
`).replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim(), o = new RegExp("(?:^" + n + "$)|(?:^" + i + "$)"), a = new RegExp("^" + n + "$"), s = new RegExp("^" + i + "$"), l = function(C) {
    return C && C.exact ? o : new RegExp("(?:" + t(C) + n + t(C) + ")|(?:" + t(C) + i + t(C) + ")", "g");
  };
  l.v4 = function(S) {
    return S && S.exact ? a : new RegExp("" + t(S) + n + t(S), "g");
  }, l.v6 = function(S) {
    return S && S.exact ? s : new RegExp("" + t(S) + i + t(S), "g");
  };
  var u = "(?:(?:[a-z]+:)?//)", c = "(?:\\S+(?::\\S*)?@)?", d = l.v4().source, v = l.v6().source, h = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", p = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", m = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", b = "(?::\\d{2,5})?", g = '(?:[/?#][^\\s"]*)?', y = "(?:" + u + "|www\\.)" + c + "(?:localhost|" + d + "|" + v + "|" + h + p + m + ")" + b + g;
  return Jo = new RegExp("(?:^" + y + "$)", "i"), Jo;
}, Qc = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  // url: new RegExp(
  //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
  //   'i',
  // ),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
}, Hi = {
  integer: function(t) {
    return Hi.number(t) && parseInt(t, 10) === t;
  },
  float: function(t) {
    return Hi.number(t) && !Hi.integer(t);
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
    return typeof t == "object" && !Hi.array(t);
  },
  method: function(t) {
    return typeof t == "function";
  },
  email: function(t) {
    return typeof t == "string" && t.length <= 320 && !!t.match(Qc.email);
  },
  url: function(t) {
    return typeof t == "string" && t.length <= 2048 && !!t.match(r_());
  },
  hex: function(t) {
    return typeof t == "string" && !!t.match(Qc.hex);
  }
}, i_ = function(t, n, r, i, o) {
  if (t.required && n === void 0) {
    Qv(t, n, r, i, o);
    return;
  }
  var a = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"], s = t.type;
  a.indexOf(s) > -1 ? Hi[s](n) || i.push(cn(o.messages.types[s], t.fullField, t.type)) : s && typeof n !== t.type && i.push(cn(o.messages.types[s], t.fullField, t.type));
}, o_ = function(t, n, r, i, o) {
  var a = typeof t.len == "number", s = typeof t.min == "number", l = typeof t.max == "number", u = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, c = n, d = null, v = typeof n == "number", h = typeof n == "string", p = Array.isArray(n);
  if (v ? d = "number" : h ? d = "string" : p && (d = "array"), !d)
    return !1;
  p && (c = n.length), h && (c = n.replace(u, "_").length), a ? c !== t.len && i.push(cn(o.messages[d].len, t.fullField, t.len)) : s && !l && c < t.min ? i.push(cn(o.messages[d].min, t.fullField, t.min)) : l && !s && c > t.max ? i.push(cn(o.messages[d].max, t.fullField, t.max)) : s && l && (c < t.min || c > t.max) && i.push(cn(o.messages[d].range, t.fullField, t.min, t.max));
}, Br = "enum", a_ = function(t, n, r, i, o) {
  t[Br] = Array.isArray(t[Br]) ? t[Br] : [], t[Br].indexOf(n) === -1 && i.push(cn(o.messages[Br], t.fullField, t[Br].join(", ")));
}, s_ = function(t, n, r, i, o) {
  if (t.pattern) {
    if (t.pattern instanceof RegExp)
      t.pattern.lastIndex = 0, t.pattern.test(n) || i.push(cn(o.messages.pattern.mismatch, t.fullField, n, t.pattern));
    else if (typeof t.pattern == "string") {
      var a = new RegExp(t.pattern);
      a.test(n) || i.push(cn(o.messages.pattern.mismatch, t.fullField, n, t.pattern));
    }
  }
}, Ye = {
  required: Qv,
  whitespace: n_,
  type: i_,
  range: o_,
  enum: a_,
  pattern: s_
}, l_ = function(t, n, r, i, o) {
  var a = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (Lt(n, "string") && !t.required)
      return r();
    Ye.required(t, n, i, a, o, "string"), Lt(n, "string") || (Ye.type(t, n, i, a, o), Ye.range(t, n, i, a, o), Ye.pattern(t, n, i, a, o), t.whitespace === !0 && Ye.whitespace(t, n, i, a, o));
  }
  r(a);
}, u_ = function(t, n, r, i, o) {
  var a = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (Lt(n) && !t.required)
      return r();
    Ye.required(t, n, i, a, o), n !== void 0 && Ye.type(t, n, i, a, o);
  }
  r(a);
}, c_ = function(t, n, r, i, o) {
  var a = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (n === "" && (n = void 0), Lt(n) && !t.required)
      return r();
    Ye.required(t, n, i, a, o), n !== void 0 && (Ye.type(t, n, i, a, o), Ye.range(t, n, i, a, o));
  }
  r(a);
}, f_ = function(t, n, r, i, o) {
  var a = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (Lt(n) && !t.required)
      return r();
    Ye.required(t, n, i, a, o), n !== void 0 && Ye.type(t, n, i, a, o);
  }
  r(a);
}, d_ = function(t, n, r, i, o) {
  var a = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (Lt(n) && !t.required)
      return r();
    Ye.required(t, n, i, a, o), Lt(n) || Ye.type(t, n, i, a, o);
  }
  r(a);
}, v_ = function(t, n, r, i, o) {
  var a = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (Lt(n) && !t.required)
      return r();
    Ye.required(t, n, i, a, o), n !== void 0 && (Ye.type(t, n, i, a, o), Ye.range(t, n, i, a, o));
  }
  r(a);
}, h_ = function(t, n, r, i, o) {
  var a = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (Lt(n) && !t.required)
      return r();
    Ye.required(t, n, i, a, o), n !== void 0 && (Ye.type(t, n, i, a, o), Ye.range(t, n, i, a, o));
  }
  r(a);
}, p_ = function(t, n, r, i, o) {
  var a = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (n == null && !t.required)
      return r();
    Ye.required(t, n, i, a, o, "array"), n != null && (Ye.type(t, n, i, a, o), Ye.range(t, n, i, a, o));
  }
  r(a);
}, m_ = function(t, n, r, i, o) {
  var a = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (Lt(n) && !t.required)
      return r();
    Ye.required(t, n, i, a, o), n !== void 0 && Ye.type(t, n, i, a, o);
  }
  r(a);
}, g_ = "enum", b_ = function(t, n, r, i, o) {
  var a = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (Lt(n) && !t.required)
      return r();
    Ye.required(t, n, i, a, o), n !== void 0 && Ye[g_](t, n, i, a, o);
  }
  r(a);
}, y_ = function(t, n, r, i, o) {
  var a = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (Lt(n, "string") && !t.required)
      return r();
    Ye.required(t, n, i, a, o), Lt(n, "string") || Ye.pattern(t, n, i, a, o);
  }
  r(a);
}, __ = function(t, n, r, i, o) {
  var a = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (Lt(n, "date") && !t.required)
      return r();
    if (Ye.required(t, n, i, a, o), !Lt(n, "date")) {
      var l;
      n instanceof Date ? l = n : l = new Date(n), Ye.type(t, l, i, a, o), l && Ye.range(t, l.getTime(), i, a, o);
    }
  }
  r(a);
}, S_ = function(t, n, r, i, o) {
  var a = [], s = Array.isArray(n) ? "array" : typeof n;
  Ye.required(t, n, i, a, o, s), r(a);
}, Ks = function(t, n, r, i, o) {
  var a = t.type, s = [], l = t.required || !t.required && i.hasOwnProperty(t.field);
  if (l) {
    if (Lt(n, a) && !t.required)
      return r();
    Ye.required(t, n, i, s, o, a), Lt(n, a) || Ye.type(t, n, i, s, o);
  }
  r(s);
}, E_ = function(t, n, r, i, o) {
  var a = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (Lt(n) && !t.required)
      return r();
    Ye.required(t, n, i, a, o);
  }
  r(a);
}, Ki = {
  string: l_,
  method: u_,
  number: c_,
  boolean: f_,
  regexp: d_,
  integer: v_,
  float: h_,
  array: p_,
  object: m_,
  enum: b_,
  pattern: y_,
  date: __,
  url: Ks,
  hex: Ks,
  email: Ks,
  required: S_,
  any: E_
};
function Fl() {
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
var Ll = Fl(), yo = /* @__PURE__ */ function() {
  function e(n) {
    this.rules = null, this._messages = Ll, this.define(n);
  }
  var t = e.prototype;
  return t.define = function(r) {
    var i = this;
    if (!r)
      throw new Error("Cannot configure a schema with no rules");
    if (typeof r != "object" || Array.isArray(r))
      throw new Error("Rules must be an object");
    this.rules = {}, Object.keys(r).forEach(function(o) {
      var a = r[o];
      i.rules[o] = Array.isArray(a) ? a : [a];
    });
  }, t.messages = function(r) {
    return r && (this._messages = Yc(Fl(), r)), this._messages;
  }, t.validate = function(r, i, o) {
    var a = this;
    i === void 0 && (i = {}), o === void 0 && (o = function() {
    });
    var s = r, l = i, u = o;
    if (typeof l == "function" && (u = l, l = {}), !this.rules || Object.keys(this.rules).length === 0)
      return u && u(null, s), Promise.resolve(s);
    function c(m) {
      var b = [], g = {};
      function y(C) {
        if (Array.isArray(C)) {
          var _;
          b = (_ = b).concat.apply(_, C);
        } else
          b.push(C);
      }
      for (var S = 0; S < m.length; S++)
        y(m[S]);
      b.length ? (g = Dl(b), u(b, g)) : u(null, s);
    }
    if (l.messages) {
      var d = this.messages();
      d === Ll && (d = Fl()), Yc(d, l.messages), l.messages = d;
    } else
      l.messages = this.messages();
    var v = {}, h = l.keys || Object.keys(this.rules);
    h.forEach(function(m) {
      var b = a.rules[m], g = s[m];
      b.forEach(function(y) {
        var S = y;
        typeof S.transform == "function" && (s === r && (s = Ir({}, s)), g = s[m] = S.transform(g)), typeof S == "function" ? S = {
          validator: S
        } : S = Ir({}, S), S.validator = a.getValidationMethod(S), S.validator && (S.field = m, S.fullField = S.fullField || m, S.type = a.getType(S), v[m] = v[m] || [], v[m].push({
          rule: S,
          value: g,
          source: s,
          field: m
        }));
      });
    });
    var p = {};
    return Zy(v, l, function(m, b) {
      var g = m.rule, y = (g.type === "object" || g.type === "array") && (typeof g.fields == "object" || typeof g.defaultField == "object");
      y = y && (g.required || !g.required && m.value), g.field = m.field;
      function S(E, x) {
        return Ir({}, x, {
          fullField: g.fullField + "." + E,
          fullFields: g.fullFields ? [].concat(g.fullFields, [E]) : [E]
        });
      }
      function C(E) {
        E === void 0 && (E = []);
        var x = Array.isArray(E) ? E : [E];
        !l.suppressWarning && x.length && e.warning("async-validator:", x), x.length && g.message !== void 0 && (x = [].concat(g.message));
        var I = x.map(Xc(g, s));
        if (l.first && I.length)
          return p[g.field] = 1, b(I);
        if (!y)
          b(I);
        else {
          if (g.required && !m.value)
            return g.message !== void 0 ? I = [].concat(g.message).map(Xc(g, s)) : l.error && (I = [l.error(g, cn(l.messages.required, g.field))]), b(I);
          var R = {};
          g.defaultField && Object.keys(m.value).map(function(w) {
            R[w] = g.defaultField;
          }), R = Ir({}, R, m.rule.fields);
          var N = {};
          Object.keys(R).forEach(function(w) {
            var O = R[w], P = Array.isArray(O) ? O : [O];
            N[w] = P.map(S.bind(null, w));
          });
          var $ = new e(N);
          $.messages(l.messages), m.rule.options && (m.rule.options.messages = l.messages, m.rule.options.error = l.error), $.validate(m.value, m.rule.options || l, function(w) {
            var O = [];
            I && I.length && O.push.apply(O, I), w && w.length && O.push.apply(O, w), b(O.length ? O : null);
          });
        }
      }
      var _;
      if (g.asyncValidator)
        _ = g.asyncValidator(g, m.value, C, m.source, l);
      else if (g.validator) {
        try {
          _ = g.validator(g, m.value, C, m.source, l);
        } catch (E) {
          console.error?.(E), l.suppressValidatorError || setTimeout(function() {
            throw E;
          }, 0), C(E.message);
        }
        _ === !0 ? C() : _ === !1 ? C(typeof g.message == "function" ? g.message(g.fullField || g.field) : g.message || (g.fullField || g.field) + " fails") : _ instanceof Array ? C(_) : _ instanceof Error && C(_.message);
      }
      _ && _.then && _.then(function() {
        return C();
      }, function(E) {
        return C(E);
      });
    }, function(m) {
      c(m);
    }, s);
  }, t.getType = function(r) {
    if (r.type === void 0 && r.pattern instanceof RegExp && (r.type = "pattern"), typeof r.validator != "function" && r.type && !Ki.hasOwnProperty(r.type))
      throw new Error(cn("Unknown rule type %s", r.type));
    return r.type || "string";
  }, t.getValidationMethod = function(r) {
    if (typeof r.validator == "function")
      return r.validator;
    var i = Object.keys(r), o = i.indexOf("message");
    return o !== -1 && i.splice(o, 1), i.length === 1 && i[0] === "required" ? Ki.required : Ki[this.getType(r)] || void 0;
  }, e;
}();
yo.register = function(t, n) {
  if (typeof n != "function")
    throw new Error("Cannot register a validator by type, validator is not a function");
  Ki[t] = n;
};
yo.warning = Yv;
yo.messages = Ll;
yo.validators = Ki;
var sn = "'${name}' is not a valid ${type}", Jv = {
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
    string: sn,
    method: sn,
    array: sn,
    object: sn,
    number: sn,
    date: sn,
    boolean: sn,
    integer: sn,
    float: sn,
    regexp: sn,
    email: sn,
    url: sn,
    hex: sn
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
}, Jc = yo;
function w_(e, t) {
  return e.replace(/\$\{\w+\}/g, function(n) {
    var r = n.slice(2, -1);
    return t[r];
  });
}
var Zc = "CODE_LOGIC_ERROR";
function Vl(e, t, n, r, i) {
  return kl.apply(this, arguments);
}
function kl() {
  return kl = ds(/* @__PURE__ */ sr().mark(function e(t, n, r, i, o) {
    var a, s, l, u, c, d, v, h, p;
    return sr().wrap(function(b) {
      for (; ; )
        switch (b.prev = b.next) {
          case 0:
            return a = D({}, r), delete a.ruleIndex, Jc.warning = function() {
            }, a.validator && (s = a.validator, a.validator = function() {
              try {
                return s.apply(void 0, arguments);
              } catch (g) {
                return console.error(g), Promise.reject(Zc);
              }
            }), l = null, a && a.type === "array" && a.defaultField && (l = a.defaultField, delete a.defaultField), u = new Jc(U({}, t, [a])), c = ti(Jv, i.validateMessages), u.messages(c), d = [], b.prev = 10, b.next = 13, Promise.resolve(u.validate(U({}, t, n), D({}, i)));
          case 13:
            b.next = 18;
            break;
          case 15:
            b.prev = 15, b.t0 = b.catch(10), b.t0.errors && (d = b.t0.errors.map(function(g, y) {
              var S = g.message, C = S === Zc ? c.default : S;
              return /* @__PURE__ */ f.isValidElement(C) ? (
                // Wrap ReactNode with `key`
                /* @__PURE__ */ f.cloneElement(C, {
                  key: "error_".concat(y)
                })
              ) : C;
            }));
          case 18:
            if (!(!d.length && l)) {
              b.next = 23;
              break;
            }
            return b.next = 21, Promise.all(n.map(function(g, y) {
              return Vl("".concat(t, ".").concat(y), g, l, i, o);
            }));
          case 21:
            return v = b.sent, b.abrupt("return", v.reduce(function(g, y) {
              return [].concat(de(g), de(y));
            }, []));
          case 23:
            return h = D(D({}, r), {}, {
              name: t,
              enum: (r.enum || []).join(", ")
            }, o), p = d.map(function(g) {
              return typeof g == "string" ? w_(g, h) : g;
            }), b.abrupt("return", p);
          case 26:
          case "end":
            return b.stop();
        }
    }, e, null, [[10, 15]]);
  })), kl.apply(this, arguments);
}
function C_(e, t, n, r, i, o) {
  var a = e.join("."), s = n.map(function(c, d) {
    var v = c.validator, h = D(D({}, c), {}, {
      ruleIndex: d
    });
    return v && (h.validator = function(p, m, b) {
      var g = !1, y = function() {
        for (var _ = arguments.length, E = new Array(_), x = 0; x < _; x++)
          E[x] = arguments[x];
        Promise.resolve().then(function() {
          $e(!g, "Your validator function has already return a promise. `callback` will be ignored."), g || b.apply(void 0, E);
        });
      }, S = v(p, m, y);
      g = S && typeof S.then == "function" && typeof S.catch == "function", $e(g, "`callback` is deprecated. Please return a promise instead."), g && S.then(function() {
        b();
      }).catch(function(C) {
        b(C || " ");
      });
    }), h;
  }).sort(function(c, d) {
    var v = c.warningOnly, h = c.ruleIndex, p = d.warningOnly, m = d.ruleIndex;
    return !!v == !!p ? h - m : v ? 1 : -1;
  }), l;
  if (i === !0)
    l = new Promise(/* @__PURE__ */ function() {
      var c = ds(/* @__PURE__ */ sr().mark(function d(v, h) {
        var p, m, b;
        return sr().wrap(function(y) {
          for (; ; )
            switch (y.prev = y.next) {
              case 0:
                p = 0;
              case 1:
                if (!(p < s.length)) {
                  y.next = 12;
                  break;
                }
                return m = s[p], y.next = 5, Vl(a, t, m, r, o);
              case 5:
                if (b = y.sent, !b.length) {
                  y.next = 9;
                  break;
                }
                return h([{
                  errors: b,
                  rule: m
                }]), y.abrupt("return");
              case 9:
                p += 1, y.next = 1;
                break;
              case 12:
                v([]);
              case 13:
              case "end":
                return y.stop();
            }
        }, d);
      }));
      return function(d, v) {
        return c.apply(this, arguments);
      };
    }());
  else {
    var u = s.map(function(c) {
      return Vl(a, t, c, r, o).then(function(d) {
        return {
          errors: d,
          rule: c
        };
      });
    });
    l = (i ? x_(u) : O_(u)).then(function(c) {
      return Promise.reject(c);
    });
  }
  return l.catch(function(c) {
    return c;
  }), l;
}
function O_(e) {
  return jl.apply(this, arguments);
}
function jl() {
  return jl = ds(/* @__PURE__ */ sr().mark(function e(t) {
    return sr().wrap(function(r) {
      for (; ; )
        switch (r.prev = r.next) {
          case 0:
            return r.abrupt("return", Promise.all(t).then(function(i) {
              var o, a = (o = []).concat.apply(o, de(i));
              return a;
            }));
          case 1:
          case "end":
            return r.stop();
        }
    }, e);
  })), jl.apply(this, arguments);
}
function x_(e) {
  return Hl.apply(this, arguments);
}
function Hl() {
  return Hl = ds(/* @__PURE__ */ sr().mark(function e(t) {
    var n;
    return sr().wrap(function(i) {
      for (; ; )
        switch (i.prev = i.next) {
          case 0:
            return n = 0, i.abrupt("return", new Promise(function(o) {
              t.forEach(function(a) {
                a.then(function(s) {
                  s.errors.length && o([s]), n += 1, n === t.length && o([]);
                });
              });
            }));
          case 2:
          case "end":
            return i.stop();
        }
    }, e);
  })), Hl.apply(this, arguments);
}
function Pt(e) {
  return $l(e);
}
function ef(e, t) {
  var n = {};
  return t.forEach(function(r) {
    var i = In(e, r);
    n = Rn(n, r, i);
  }), n;
}
function Gi(e, t) {
  return e && e.some(function(n) {
    return Zv(n, t);
  });
}
function Zv(e, t) {
  return !e || !t || e.length !== t.length ? !1 : e.every(function(n, r) {
    return t[r] === n;
  });
}
function N_(e, t) {
  if (e === t)
    return !0;
  if (!e && t || e && !t || !e || !t || Qe(e) !== "object" || Qe(t) !== "object")
    return !1;
  var n = Object.keys(e), r = Object.keys(t), i = new Set([].concat(n, r));
  return de(i).every(function(o) {
    var a = e[o], s = t[o];
    return typeof a == "function" && typeof s == "function" ? !0 : a === s;
  });
}
function P_(e) {
  var t = arguments.length <= 1 ? void 0 : arguments[1];
  return t && t.target && Qe(t.target) === "object" && e in t.target ? t.target[e] : t;
}
function tf(e, t, n) {
  var r = e.length;
  if (t < 0 || t >= r || n < 0 || n >= r)
    return e;
  var i = e[t], o = t - n;
  return o > 0 ? [].concat(de(e.slice(0, n)), [i], de(e.slice(n, t)), de(e.slice(t + 1, r))) : o < 0 ? [].concat(de(e.slice(0, t)), de(e.slice(t + 1, n + 1)), [i], de(e.slice(n + 1, r))) : e;
}
var M_ = ["name"], yn = [];
function nf(e, t, n, r, i, o) {
  return typeof e == "function" ? e(t, n, "source" in o ? {
    source: o.source
  } : {}) : r !== i;
}
var Pu = /* @__PURE__ */ function(e) {
  Si(n, e);
  var t = Ei(n);
  function n(r) {
    var i;
    if (hn(this, n), i = t.call(this, r), i.state = {
      resetCount: 0
    }, i.cancelRegisterFunc = null, i.mounted = !1, i.touched = !1, i.dirty = !1, i.validatePromise = void 0, i.prevValidating = void 0, i.errors = yn, i.warnings = yn, i.cancelRegister = function() {
      var l = i.props, u = l.preserve, c = l.isListField, d = l.name;
      i.cancelRegisterFunc && i.cancelRegisterFunc(c, u, Pt(d)), i.cancelRegisterFunc = null;
    }, i.getNamePath = function() {
      var l = i.props, u = l.name, c = l.fieldContext, d = c.prefixName, v = d === void 0 ? [] : d;
      return u !== void 0 ? [].concat(de(v), de(u)) : [];
    }, i.getRules = function() {
      var l = i.props, u = l.rules, c = u === void 0 ? [] : u, d = l.fieldContext;
      return c.map(function(v) {
        return typeof v == "function" ? v(d) : v;
      });
    }, i.refresh = function() {
      i.mounted && i.setState(function(l) {
        var u = l.resetCount;
        return {
          resetCount: u + 1
        };
      });
    }, i.triggerMetaEvent = function(l) {
      var u = i.props.onMetaChange;
      u?.(D(D({}, i.getMeta()), {}, {
        destroy: l
      }));
    }, i.onStoreChange = function(l, u, c) {
      var d = i.props, v = d.shouldUpdate, h = d.dependencies, p = h === void 0 ? [] : h, m = d.onReset, b = c.store, g = i.getNamePath(), y = i.getValue(l), S = i.getValue(b), C = u && Gi(u, g);
      switch (c.type === "valueUpdate" && c.source === "external" && y !== S && (i.touched = !0, i.dirty = !0, i.validatePromise = null, i.errors = yn, i.warnings = yn, i.triggerMetaEvent()), c.type) {
        case "reset":
          if (!u || C) {
            i.touched = !1, i.dirty = !1, i.validatePromise = void 0, i.errors = yn, i.warnings = yn, i.triggerMetaEvent(), m?.(), i.refresh();
            return;
          }
          break;
        case "remove": {
          if (v) {
            i.reRender();
            return;
          }
          break;
        }
        case "setField": {
          if (C) {
            var _ = c.data;
            "touched" in _ && (i.touched = _.touched), "validating" in _ && !("originRCField" in _) && (i.validatePromise = _.validating ? Promise.resolve([]) : null), "errors" in _ && (i.errors = _.errors || yn), "warnings" in _ && (i.warnings = _.warnings || yn), i.dirty = !0, i.triggerMetaEvent(), i.reRender();
            return;
          }
          if (v && !g.length && nf(v, l, b, y, S, c)) {
            i.reRender();
            return;
          }
          break;
        }
        case "dependenciesUpdate": {
          var E = p.map(Pt);
          if (E.some(function(x) {
            return Gi(c.relatedFields, x);
          })) {
            i.reRender();
            return;
          }
          break;
        }
        default:
          if (C || (!p.length || g.length || v) && nf(v, l, b, y, S, c)) {
            i.reRender();
            return;
          }
          break;
      }
      v === !0 && i.reRender();
    }, i.validateRules = function(l) {
      var u = i.getNamePath(), c = i.getValue(), d = l || {}, v = d.triggerName, h = d.validateOnly, p = h === void 0 ? !1 : h, m = Promise.resolve().then(function() {
        if (!i.mounted)
          return [];
        var b = i.props, g = b.validateFirst, y = g === void 0 ? !1 : g, S = b.messageVariables, C = i.getRules();
        v && (C = C.filter(function(E) {
          return E;
        }).filter(function(E) {
          var x = E.validateTrigger;
          if (!x)
            return !0;
          var I = $l(x);
          return I.includes(v);
        }));
        var _ = C_(u, c, C, l, y, S);
        return _.catch(function(E) {
          return E;
        }).then(function() {
          var E = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : yn;
          if (i.validatePromise === m) {
            var x;
            i.validatePromise = null;
            var I = [], R = [];
            (x = E.forEach) === null || x === void 0 || x.call(E, function(N) {
              var $ = N.rule.warningOnly, w = N.errors, O = w === void 0 ? yn : w;
              $ ? R.push.apply(R, de(O)) : I.push.apply(I, de(O));
            }), i.errors = I, i.warnings = R, i.triggerMetaEvent(), i.reRender();
          }
        }), _;
      });
      return p || (i.validatePromise = m, i.dirty = !0, i.errors = yn, i.warnings = yn, i.triggerMetaEvent(), i.reRender()), m;
    }, i.isFieldValidating = function() {
      return !!i.validatePromise;
    }, i.isFieldTouched = function() {
      return i.touched;
    }, i.isFieldDirty = function() {
      if (i.dirty || i.props.initialValue !== void 0)
        return !0;
      var l = i.props.fieldContext, u = l.getInternalHooks($r), c = u.getInitialValue;
      return c(i.getNamePath()) !== void 0;
    }, i.getErrors = function() {
      return i.errors;
    }, i.getWarnings = function() {
      return i.warnings;
    }, i.isListField = function() {
      return i.props.isListField;
    }, i.isList = function() {
      return i.props.isList;
    }, i.isPreserve = function() {
      return i.props.preserve;
    }, i.getMeta = function() {
      i.prevValidating = i.isFieldValidating();
      var l = {
        touched: i.isFieldTouched(),
        validating: i.prevValidating,
        errors: i.errors,
        warnings: i.warnings,
        name: i.getNamePath(),
        validated: i.validatePromise === null
      };
      return l;
    }, i.getOnlyChild = function(l) {
      if (typeof l == "function") {
        var u = i.getMeta();
        return D(D({}, i.getOnlyChild(l(i.getControlled(), u, i.props.fieldContext))), {}, {
          isFunction: !0
        });
      }
      var c = or(l);
      return c.length !== 1 || !/* @__PURE__ */ f.isValidElement(c[0]) ? {
        child: c,
        isFunction: !1
      } : {
        child: c[0],
        isFunction: !1
      };
    }, i.getValue = function(l) {
      var u = i.props.fieldContext.getFieldsValue, c = i.getNamePath();
      return In(l || u(!0), c);
    }, i.getControlled = function() {
      var l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, u = i.props, c = u.trigger, d = u.validateTrigger, v = u.getValueFromEvent, h = u.normalize, p = u.valuePropName, m = u.getValueProps, b = u.fieldContext, g = d !== void 0 ? d : b.validateTrigger, y = i.getNamePath(), S = b.getInternalHooks, C = b.getFieldsValue, _ = S($r), E = _.dispatch, x = i.getValue(), I = m || function(w) {
        return U({}, p, w);
      }, R = l[c], N = D(D({}, l), I(x));
      N[c] = function() {
        i.touched = !0, i.dirty = !0, i.triggerMetaEvent();
        for (var w, O = arguments.length, P = new Array(O), M = 0; M < O; M++)
          P[M] = arguments[M];
        v ? w = v.apply(void 0, P) : w = P_.apply(void 0, [p].concat(P)), h && (w = h(w, x, C(!0))), E({
          type: "updateValue",
          namePath: y,
          value: w
        }), R && R.apply(void 0, P);
      };
      var $ = $l(g || []);
      return $.forEach(function(w) {
        var O = N[w];
        N[w] = function() {
          O && O.apply(void 0, arguments);
          var P = i.props.rules;
          P && P.length && E({
            type: "validateField",
            namePath: y,
            triggerName: w
          });
        };
      }), N;
    }, r.fieldContext) {
      var o = r.fieldContext.getInternalHooks, a = o($r), s = a.initEntityValue;
      s(Oa(i));
    }
    return i;
  }
  return pn(n, [{
    key: "componentDidMount",
    value: function() {
      var i = this.props, o = i.shouldUpdate, a = i.fieldContext;
      if (this.mounted = !0, a) {
        var s = a.getInternalHooks, l = s($r), u = l.registerField;
        this.cancelRegisterFunc = u(this);
      }
      o === !0 && this.reRender();
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
      var i = this.state.resetCount, o = this.props.children, a = this.getOnlyChild(o), s = a.child, l = a.isFunction, u;
      return l ? u = s : /* @__PURE__ */ f.isValidElement(s) ? u = /* @__PURE__ */ f.cloneElement(s, this.getControlled(s.props)) : ($e(!s, "`children` of Field is not validate ReactElement."), u = s), /* @__PURE__ */ f.createElement(f.Fragment, {
        key: i
      }, u);
    }
  }]), n;
}(f.Component);
Pu.contextType = hi;
Pu.defaultProps = {
  trigger: "onChange",
  valuePropName: "value"
};
function eh(e) {
  var t = e.name, n = We(e, M_), r = f.useContext(hi), i = f.useContext(Da), o = t !== void 0 ? Pt(t) : void 0, a = "keep";
  return n.isListField || (a = "_".concat((o || []).join("_"))), process.env.NODE_ENV !== "production" && n.preserve === !1 && n.isListField && o.length <= 1 && $e(!1, "`preserve` should not apply on Form.List fields."), /* @__PURE__ */ f.createElement(Pu, ge({
    key: a,
    name: o,
    isListField: !!i
  }, n, {
    fieldContext: r
  }));
}
var R_ = function(t) {
  var n = t.name, r = t.initialValue, i = t.children, o = t.rules, a = t.validateTrigger, s = t.isListField, l = f.useContext(hi), u = f.useContext(Da), c = f.useRef({
    keys: [],
    id: 0
  }), d = c.current, v = f.useMemo(function() {
    var b = Pt(l.prefixName) || [];
    return [].concat(de(b), de(Pt(n)));
  }, [l.prefixName, n]), h = f.useMemo(function() {
    return D(D({}, l), {}, {
      prefixName: v
    });
  }, [l, v]), p = f.useMemo(function() {
    return {
      getKey: function(g) {
        var y = v.length, S = g[y];
        return [d.keys[S], g.slice(y + 1)];
      }
    };
  }, [v]);
  if (typeof i != "function")
    return $e(!1, "Form.List only accepts function as children."), null;
  var m = function(g, y, S) {
    var C = S.source;
    return C === "internal" ? !1 : g !== y;
  };
  return /* @__PURE__ */ f.createElement(Da.Provider, {
    value: p
  }, /* @__PURE__ */ f.createElement(hi.Provider, {
    value: h
  }, /* @__PURE__ */ f.createElement(eh, {
    name: [],
    shouldUpdate: m,
    rules: o,
    validateTrigger: a,
    initialValue: r,
    isList: !0,
    isListField: s ?? !!u
  }, function(b, g) {
    var y = b.value, S = y === void 0 ? [] : y, C = b.onChange, _ = l.getFieldValue, E = function() {
      var N = _(v || []);
      return N || [];
    }, x = {
      add: function(N, $) {
        var w = E();
        $ >= 0 && $ <= w.length ? (d.keys = [].concat(de(d.keys.slice(0, $)), [d.id], de(d.keys.slice($))), C([].concat(de(w.slice(0, $)), [N], de(w.slice($))))) : (process.env.NODE_ENV !== "production" && ($ < 0 || $ > w.length) && $e(!1, "The second parameter of the add function should be a valid positive number."), d.keys = [].concat(de(d.keys), [d.id]), C([].concat(de(w), [N]))), d.id += 1;
      },
      remove: function(N) {
        var $ = E(), w = new Set(Array.isArray(N) ? N : [N]);
        w.size <= 0 || (d.keys = d.keys.filter(function(O, P) {
          return !w.has(P);
        }), C($.filter(function(O, P) {
          return !w.has(P);
        })));
      },
      move: function(N, $) {
        if (N !== $) {
          var w = E();
          N < 0 || N >= w.length || $ < 0 || $ >= w.length || (d.keys = tf(d.keys, N, $), C(tf(w, N, $)));
        }
      }
    }, I = S || [];
    return Array.isArray(I) || (I = [], process.env.NODE_ENV !== "production" && $e(!1, "Current value of '".concat(v.join(" > "), "' is not an array type."))), i(I.map(function(R, N) {
      var $ = d.keys[N];
      return $ === void 0 && (d.keys[N] = d.id, $ = d.keys[N], d.id += 1), {
        name: N,
        key: $,
        isListField: !0
      };
    }), x, g);
  })));
};
function T_(e) {
  var t = !1, n = e.length, r = [];
  return e.length ? new Promise(function(i, o) {
    e.forEach(function(a, s) {
      a.catch(function(l) {
        return t = !0, l;
      }).then(function(l) {
        n -= 1, r[s] = l, !(n > 0) && (t && o(r), i(r));
      });
    });
  }) : Promise.resolve([]);
}
var th = "__@field_split__";
function Gs(e) {
  return e.map(function(t) {
    return "".concat(Qe(t), ":").concat(t);
  }).join(th);
}
var Ur = /* @__PURE__ */ function() {
  function e() {
    hn(this, e), this.kvs = /* @__PURE__ */ new Map();
  }
  return pn(e, [{
    key: "set",
    value: function(n, r) {
      this.kvs.set(Gs(n), r);
    }
  }, {
    key: "get",
    value: function(n) {
      return this.kvs.get(Gs(n));
    }
  }, {
    key: "update",
    value: function(n, r) {
      var i = this.get(n), o = r(i);
      o ? this.set(n, o) : this.delete(n);
    }
  }, {
    key: "delete",
    value: function(n) {
      this.kvs.delete(Gs(n));
    }
    // Since we only use this in test, let simply realize this
  }, {
    key: "map",
    value: function(n) {
      return de(this.kvs.entries()).map(function(r) {
        var i = F(r, 2), o = i[0], a = i[1], s = o.split(th);
        return n({
          key: s.map(function(l) {
            var u = l.match(/^([^:]*):(.*)$/), c = F(u, 3), d = c[1], v = c[2];
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
        var i = r.key, o = r.value;
        return n[i.join(".")] = o, null;
      }), n;
    }
  }]), e;
}(), $_ = ["name"], I_ = /* @__PURE__ */ pn(function e(t) {
  var n = this;
  hn(this, e), this.formHooked = !1, this.forceRootUpdate = void 0, this.subscribable = !0, this.store = {}, this.fieldEntities = [], this.initialValues = {}, this.callbacks = {}, this.validateMessages = null, this.preserve = null, this.lastValidatePromise = null, this.getForm = function() {
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
    return r === $r ? (n.formHooked = !0, {
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
    }) : ($e(!1, "`getInternalHooks` is internal usage. Should not call directly."), null);
  }, this.useSubscribe = function(r) {
    n.subscribable = r;
  }, this.prevWithoutPreserves = null, this.setInitialValues = function(r, i) {
    if (n.initialValues = r || {}, i) {
      var o, a = ti(r, n.store);
      (o = n.prevWithoutPreserves) === null || o === void 0 || o.map(function(s) {
        var l = s.key;
        a = Rn(a, l, In(r, l));
      }), n.prevWithoutPreserves = null, n.updateStore(a);
    }
  }, this.destroyForm = function() {
    var r = new Ur();
    n.getFieldEntities(!0).forEach(function(i) {
      n.isMergedPreserve(i.isPreserve()) || r.set(i.getNamePath(), !0);
    }), n.prevWithoutPreserves = r;
  }, this.getInitialValue = function(r) {
    var i = In(n.initialValues, r);
    return r.length ? ti(i) : i;
  }, this.setCallbacks = function(r) {
    n.callbacks = r;
  }, this.setValidateMessages = function(r) {
    n.validateMessages = r;
  }, this.setPreserve = function(r) {
    n.preserve = r;
  }, this.watchList = [], this.registerWatch = function(r) {
    return n.watchList.push(r), function() {
      n.watchList = n.watchList.filter(function(i) {
        return i !== r;
      });
    };
  }, this.notifyWatch = function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    if (n.watchList.length) {
      var i = n.getFieldsValue(), o = n.getFieldsValue(!0);
      n.watchList.forEach(function(a) {
        a(i, o, r);
      });
    }
  }, this.timeoutId = null, this.warningUnhooked = function() {
    process.env.NODE_ENV !== "production" && !n.timeoutId && typeof window < "u" && (n.timeoutId = setTimeout(function() {
      n.timeoutId = null, n.formHooked || $e(!1, "Instance created by `useForm` is not connected to any Form element. Forget to pass `form` prop?");
    }));
  }, this.updateStore = function(r) {
    n.store = r;
  }, this.getFieldEntities = function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    return r ? n.fieldEntities.filter(function(i) {
      return i.getNamePath().length;
    }) : n.fieldEntities;
  }, this.getFieldsMap = function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, i = new Ur();
    return n.getFieldEntities(r).forEach(function(o) {
      var a = o.getNamePath();
      i.set(a, o);
    }), i;
  }, this.getFieldEntitiesForNamePathList = function(r) {
    if (!r)
      return n.getFieldEntities(!0);
    var i = n.getFieldsMap(!0);
    return r.map(function(o) {
      var a = Pt(o);
      return i.get(a) || {
        INVALIDATE_NAME_PATH: Pt(o)
      };
    });
  }, this.getFieldsValue = function(r, i) {
    if (n.warningUnhooked(), r === !0 && !i)
      return n.store;
    var o = n.getFieldEntitiesForNamePathList(Array.isArray(r) ? r : null), a = [];
    return o.forEach(function(s) {
      var l, u = "INVALIDATE_NAME_PATH" in s ? s.INVALIDATE_NAME_PATH : s.getNamePath();
      if (!(!r && (!((l = s.isListField) === null || l === void 0) && l.call(s))))
        if (!i)
          a.push(u);
        else {
          var c = "getMeta" in s ? s.getMeta() : null;
          i(c) && a.push(u);
        }
    }), ef(n.store, a.map(Pt));
  }, this.getFieldValue = function(r) {
    n.warningUnhooked();
    var i = Pt(r);
    return In(n.store, i);
  }, this.getFieldsError = function(r) {
    n.warningUnhooked();
    var i = n.getFieldEntitiesForNamePathList(r);
    return i.map(function(o, a) {
      return o && !("INVALIDATE_NAME_PATH" in o) ? {
        name: o.getNamePath(),
        errors: o.getErrors(),
        warnings: o.getWarnings()
      } : {
        name: Pt(r[a]),
        errors: [],
        warnings: []
      };
    });
  }, this.getFieldError = function(r) {
    n.warningUnhooked();
    var i = Pt(r), o = n.getFieldsError([i])[0];
    return o.errors;
  }, this.getFieldWarning = function(r) {
    n.warningUnhooked();
    var i = Pt(r), o = n.getFieldsError([i])[0];
    return o.warnings;
  }, this.isFieldsTouched = function() {
    n.warningUnhooked();
    for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
      i[o] = arguments[o];
    var a = i[0], s = i[1], l, u = !1;
    i.length === 0 ? l = null : i.length === 1 ? Array.isArray(a) ? (l = a.map(Pt), u = !1) : (l = null, u = a) : (l = a.map(Pt), u = s);
    var c = n.getFieldEntities(!0), d = function(b) {
      return b.isFieldTouched();
    };
    if (!l)
      return u ? c.every(d) : c.some(d);
    var v = new Ur();
    l.forEach(function(m) {
      v.set(m, []);
    }), c.forEach(function(m) {
      var b = m.getNamePath();
      l.forEach(function(g) {
        g.every(function(y, S) {
          return b[S] === y;
        }) && v.update(g, function(y) {
          return [].concat(de(y), [m]);
        });
      });
    });
    var h = function(b) {
      return b.some(d);
    }, p = v.map(function(m) {
      var b = m.value;
      return b;
    });
    return u ? p.every(h) : p.some(h);
  }, this.isFieldTouched = function(r) {
    return n.warningUnhooked(), n.isFieldsTouched([r]);
  }, this.isFieldsValidating = function(r) {
    n.warningUnhooked();
    var i = n.getFieldEntities();
    if (!r)
      return i.some(function(a) {
        return a.isFieldValidating();
      });
    var o = r.map(Pt);
    return i.some(function(a) {
      var s = a.getNamePath();
      return Gi(o, s) && a.isFieldValidating();
    });
  }, this.isFieldValidating = function(r) {
    return n.warningUnhooked(), n.isFieldsValidating([r]);
  }, this.resetWithFieldInitialValue = function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, i = new Ur(), o = n.getFieldEntities(!0);
    o.forEach(function(l) {
      var u = l.props.initialValue, c = l.getNamePath();
      if (u !== void 0) {
        var d = i.get(c) || /* @__PURE__ */ new Set();
        d.add({
          entity: l,
          value: u
        }), i.set(c, d);
      }
    });
    var a = function(u) {
      u.forEach(function(c) {
        var d = c.props.initialValue;
        if (d !== void 0) {
          var v = c.getNamePath(), h = n.getInitialValue(v);
          if (h !== void 0)
            $e(!1, "Form already set 'initialValues' with path '".concat(v.join("."), "'. Field can not overwrite it."));
          else {
            var p = i.get(v);
            if (p && p.size > 1)
              $e(!1, "Multiple Field with path '".concat(v.join("."), "' set 'initialValue'. Can not decide which one to pick."));
            else if (p) {
              var m = n.getFieldValue(v);
              (!r.skipExist || m === void 0) && n.updateStore(Rn(n.store, v, de(p)[0].value));
            }
          }
        }
      });
    }, s;
    r.entities ? s = r.entities : r.namePathList ? (s = [], r.namePathList.forEach(function(l) {
      var u = i.get(l);
      if (u) {
        var c;
        (c = s).push.apply(c, de(de(u).map(function(d) {
          return d.entity;
        })));
      }
    })) : s = o, a(s);
  }, this.resetFields = function(r) {
    n.warningUnhooked();
    var i = n.store;
    if (!r) {
      n.updateStore(ti(n.initialValues)), n.resetWithFieldInitialValue(), n.notifyObservers(i, null, {
        type: "reset"
      }), n.notifyWatch();
      return;
    }
    var o = r.map(Pt);
    o.forEach(function(a) {
      var s = n.getInitialValue(a);
      n.updateStore(Rn(n.store, a, s));
    }), n.resetWithFieldInitialValue({
      namePathList: o
    }), n.notifyObservers(i, o, {
      type: "reset"
    }), n.notifyWatch(o);
  }, this.setFields = function(r) {
    n.warningUnhooked();
    var i = n.store, o = [];
    r.forEach(function(a) {
      var s = a.name, l = We(a, $_), u = Pt(s);
      o.push(u), "value" in l && n.updateStore(Rn(n.store, u, l.value)), n.notifyObservers(i, [u], {
        type: "setField",
        data: a
      });
    }), n.notifyWatch(o);
  }, this.getFields = function() {
    var r = n.getFieldEntities(!0), i = r.map(function(o) {
      var a = o.getNamePath(), s = o.getMeta(), l = D(D({}, s), {}, {
        name: a,
        value: n.getFieldValue(a)
      });
      return Object.defineProperty(l, "originRCField", {
        value: !0
      }), l;
    });
    return i;
  }, this.initEntityValue = function(r) {
    var i = r.props.initialValue;
    if (i !== void 0) {
      var o = r.getNamePath(), a = In(n.store, o);
      a === void 0 && n.updateStore(Rn(n.store, o, i));
    }
  }, this.isMergedPreserve = function(r) {
    var i = r !== void 0 ? r : n.preserve;
    return i ?? !0;
  }, this.registerField = function(r) {
    n.fieldEntities.push(r);
    var i = r.getNamePath();
    if (n.notifyWatch([i]), r.props.initialValue !== void 0) {
      var o = n.store;
      n.resetWithFieldInitialValue({
        entities: [r],
        skipExist: !0
      }), n.notifyObservers(o, [r.getNamePath()], {
        type: "valueUpdate",
        source: "internal"
      });
    }
    return function(a, s) {
      var l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
      if (n.fieldEntities = n.fieldEntities.filter(function(d) {
        return d !== r;
      }), !n.isMergedPreserve(s) && (!a || l.length > 1)) {
        var u = a ? void 0 : n.getInitialValue(i);
        if (i.length && n.getFieldValue(i) !== u && n.fieldEntities.every(function(d) {
          return (
            // Only reset when no namePath exist
            !Zv(d.getNamePath(), i)
          );
        })) {
          var c = n.store;
          n.updateStore(Rn(c, i, u, !0)), n.notifyObservers(c, [i], {
            type: "remove"
          }), n.triggerDependenciesUpdate(c, i);
        }
      }
      n.notifyWatch([i]);
    };
  }, this.dispatch = function(r) {
    switch (r.type) {
      case "updateValue": {
        var i = r.namePath, o = r.value;
        n.updateValue(i, o);
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
  }, this.notifyObservers = function(r, i, o) {
    if (n.subscribable) {
      var a = D(D({}, o), {}, {
        store: n.getFieldsValue(!0)
      });
      n.getFieldEntities().forEach(function(s) {
        var l = s.onStoreChange;
        l(r, i, a);
      });
    } else
      n.forceRootUpdate();
  }, this.triggerDependenciesUpdate = function(r, i) {
    var o = n.getDependencyChildrenFields(i);
    return o.length && n.validateFields(o), n.notifyObservers(r, o, {
      type: "dependenciesUpdate",
      relatedFields: [i].concat(de(o))
    }), o;
  }, this.updateValue = function(r, i) {
    var o = Pt(r), a = n.store;
    n.updateStore(Rn(n.store, o, i)), n.notifyObservers(a, [o], {
      type: "valueUpdate",
      source: "internal"
    }), n.notifyWatch([o]);
    var s = n.triggerDependenciesUpdate(a, o), l = n.callbacks.onValuesChange;
    if (l) {
      var u = ef(n.store, [o]);
      l(u, n.getFieldsValue());
    }
    n.triggerOnFieldsChange([o].concat(de(s)));
  }, this.setFieldsValue = function(r) {
    n.warningUnhooked();
    var i = n.store;
    if (r) {
      var o = ti(n.store, r);
      n.updateStore(o);
    }
    n.notifyObservers(i, null, {
      type: "valueUpdate",
      source: "external"
    }), n.notifyWatch();
  }, this.setFieldValue = function(r, i) {
    n.setFields([{
      name: r,
      value: i
    }]);
  }, this.getDependencyChildrenFields = function(r) {
    var i = /* @__PURE__ */ new Set(), o = [], a = new Ur();
    n.getFieldEntities().forEach(function(l) {
      var u = l.props.dependencies;
      (u || []).forEach(function(c) {
        var d = Pt(c);
        a.update(d, function() {
          var v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : /* @__PURE__ */ new Set();
          return v.add(l), v;
        });
      });
    });
    var s = function l(u) {
      var c = a.get(u) || /* @__PURE__ */ new Set();
      c.forEach(function(d) {
        if (!i.has(d)) {
          i.add(d);
          var v = d.getNamePath();
          d.isFieldDirty() && v.length && (o.push(v), l(v));
        }
      });
    };
    return s(r), o;
  }, this.triggerOnFieldsChange = function(r, i) {
    var o = n.callbacks.onFieldsChange;
    if (o) {
      var a = n.getFields();
      if (i) {
        var s = new Ur();
        i.forEach(function(u) {
          var c = u.name, d = u.errors;
          s.set(c, d);
        }), a.forEach(function(u) {
          u.errors = s.get(u.name) || u.errors;
        });
      }
      var l = a.filter(function(u) {
        var c = u.name;
        return Gi(r, c);
      });
      l.length && o(l, a);
    }
  }, this.validateFields = function(r, i) {
    n.warningUnhooked();
    var o, a;
    Array.isArray(r) || typeof r == "string" || typeof i == "string" ? (o = r, a = i) : a = r;
    var s = !!o, l = s ? o.map(Pt) : [], u = [], c = String(Date.now()), d = /* @__PURE__ */ new Set();
    n.getFieldEntities(!0).forEach(function(m) {
      var b;
      if (s || l.push(m.getNamePath()), !((b = a) === null || b === void 0) && b.recursive && s) {
        var g = m.getNamePath();
        // nameList[i] === undefined 说明是以 nameList 开头的
        // ['name'] -> ['name','list']
        g.every(function(C, _) {
          return o[_] === C || o[_] === void 0;
        }) && l.push(g);
      }
      if (!(!m.props.rules || !m.props.rules.length)) {
        var y = m.getNamePath();
        if (d.add(y.join(c)), !s || Gi(l, y)) {
          var S = m.validateRules(D({
            validateMessages: D(D({}, Jv), n.validateMessages)
          }, a));
          u.push(S.then(function() {
            return {
              name: y,
              errors: [],
              warnings: []
            };
          }).catch(function(C) {
            var _, E = [], x = [];
            return (_ = C.forEach) === null || _ === void 0 || _.call(C, function(I) {
              var R = I.rule.warningOnly, N = I.errors;
              R ? x.push.apply(x, de(N)) : E.push.apply(E, de(N));
            }), E.length ? Promise.reject({
              name: y,
              errors: E,
              warnings: x
            }) : {
              name: y,
              errors: E,
              warnings: x
            };
          }));
        }
      }
    });
    var v = T_(u);
    n.lastValidatePromise = v, v.catch(function(m) {
      return m;
    }).then(function(m) {
      var b = m.map(function(g) {
        var y = g.name;
        return y;
      });
      n.notifyObservers(n.store, b, {
        type: "validateFinish"
      }), n.triggerOnFieldsChange(b, m);
    });
    var h = v.then(function() {
      return n.lastValidatePromise === v ? Promise.resolve(n.getFieldsValue(l)) : Promise.reject([]);
    }).catch(function(m) {
      var b = m.filter(function(g) {
        return g && g.errors.length;
      });
      return Promise.reject({
        values: n.getFieldsValue(l),
        errorFields: b,
        outOfDate: n.lastValidatePromise !== v
      });
    });
    h.catch(function(m) {
      return m;
    });
    var p = l.filter(function(m) {
      return d.has(m.join(c));
    });
    return n.triggerOnFieldsChange(p), h;
  }, this.submit = function() {
    n.warningUnhooked(), n.validateFields().then(function(r) {
      var i = n.callbacks.onFinish;
      if (i)
        try {
          i(r);
        } catch (o) {
          console.error(o);
        }
    }).catch(function(r) {
      var i = n.callbacks.onFinishFailed;
      i && i(r);
    });
  }, this.forceRootUpdate = t;
});
function nh(e) {
  var t = f.useRef(), n = f.useState({}), r = F(n, 2), i = r[1];
  if (!t.current)
    if (e)
      t.current = e;
    else {
      var o = function() {
        i({});
      }, a = new I_(o);
      t.current = a.getForm();
    }
  return [t.current];
}
var zl = /* @__PURE__ */ f.createContext({
  triggerFormChange: function() {
  },
  triggerFormFinish: function() {
  },
  registerForm: function() {
  },
  unregisterForm: function() {
  }
}), A_ = function(t) {
  var n = t.validateMessages, r = t.onFormChange, i = t.onFormFinish, o = t.children, a = f.useContext(zl), s = f.useRef({});
  return /* @__PURE__ */ f.createElement(zl.Provider, {
    value: D(D({}, a), {}, {
      validateMessages: D(D({}, a.validateMessages), n),
      // =========================================================
      // =                  Global Form Control                  =
      // =========================================================
      triggerFormChange: function(u, c) {
        r && r(u, {
          changedFields: c,
          forms: s.current
        }), a.triggerFormChange(u, c);
      },
      triggerFormFinish: function(u, c) {
        i && i(u, {
          values: c,
          forms: s.current
        }), a.triggerFormFinish(u, c);
      },
      registerForm: function(u, c) {
        u && (s.current = D(D({}, s.current), {}, U({}, u, c))), a.registerForm(u, c);
      },
      unregisterForm: function(u) {
        var c = D({}, s.current);
        delete c[u], s.current = c, a.unregisterForm(u);
      }
    })
  }, o);
}, D_ = ["name", "initialValues", "fields", "form", "preserve", "children", "component", "validateMessages", "validateTrigger", "onValuesChange", "onFieldsChange", "onFinish", "onFinishFailed"], F_ = function(t, n) {
  var r = t.name, i = t.initialValues, o = t.fields, a = t.form, s = t.preserve, l = t.children, u = t.component, c = u === void 0 ? "form" : u, d = t.validateMessages, v = t.validateTrigger, h = v === void 0 ? "onChange" : v, p = t.onValuesChange, m = t.onFieldsChange, b = t.onFinish, g = t.onFinishFailed, y = We(t, D_), S = f.useContext(zl), C = nh(a), _ = F(C, 1), E = _[0], x = E.getInternalHooks($r), I = x.useSubscribe, R = x.setInitialValues, N = x.setCallbacks, $ = x.setValidateMessages, w = x.setPreserve, O = x.destroyForm;
  f.useImperativeHandle(n, function() {
    return E;
  }), f.useEffect(function() {
    return S.registerForm(r, E), function() {
      S.unregisterForm(r);
    };
  }, [S, E, r]), $(D(D({}, S.validateMessages), d)), N({
    onValuesChange: p,
    onFieldsChange: function(V) {
      if (S.triggerFormChange(r, V), m) {
        for (var G = arguments.length, q = new Array(G > 1 ? G - 1 : 0), Z = 1; Z < G; Z++)
          q[Z - 1] = arguments[Z];
        m.apply(void 0, [V].concat(q));
      }
    },
    onFinish: function(V) {
      S.triggerFormFinish(r, V), b && b(V);
    },
    onFinishFailed: g
  }), w(s);
  var P = f.useRef(null);
  R(i, !P.current), P.current || (P.current = !0), f.useEffect(
    function() {
      return O;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  var M, T = typeof l == "function";
  if (T) {
    var A = E.getFieldsValue(!0);
    M = l(A, E);
  } else
    M = l;
  I(!T);
  var k = f.useRef();
  f.useEffect(function() {
    N_(k.current || [], o || []) || E.setFields(o || []), k.current = o;
  }, [o, E]);
  var H = f.useMemo(function() {
    return D(D({}, E), {}, {
      validateTrigger: h
    });
  }, [E, h]), Y = /* @__PURE__ */ f.createElement(Da.Provider, {
    value: null
  }, /* @__PURE__ */ f.createElement(hi.Provider, {
    value: H
  }, M));
  return c === !1 ? Y : /* @__PURE__ */ f.createElement(c, ge({}, y, {
    onSubmit: function(V) {
      V.preventDefault(), V.stopPropagation(), E.submit();
    },
    onReset: function(V) {
      var G;
      V.preventDefault(), E.resetFields(), (G = y.onReset) === null || G === void 0 || G.call(y, V);
    }
  }), Y);
};
function rf(e) {
  try {
    return JSON.stringify(e);
  } catch {
    return Math.random();
  }
}
var L_ = process.env.NODE_ENV !== "production" ? function(e) {
  var t = e.join("__RC_FIELD_FORM_SPLIT__"), n = ae(t);
  $e(n.current === t, "`useWatch` is not support dynamic `namePath`. Please provide static instead.");
} : function() {
};
function V_() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r = t[0], i = r === void 0 ? [] : r, o = t[1], a = o === void 0 ? {} : o, s = Wy(a) ? {
    form: a
  } : a, l = s.form, u = rt(), c = F(u, 2), d = c[0], v = c[1], h = Fr(function() {
    return rf(d);
  }, [d]), p = ae(h);
  p.current = h;
  var m = Gn(hi), b = l || m, g = b && b._init;
  process.env.NODE_ENV !== "production" && $e(t.length === 2 ? l ? g : !0 : g, "useWatch requires a form instance since it can not auto detect from context.");
  var y = Pt(i), S = ae(y);
  return S.current = y, L_(y), ot(
    function() {
      if (g) {
        var C = b.getFieldsValue, _ = b.getInternalHooks, E = _($r), x = E.registerWatch, I = x(function(N, $) {
          var w = In(s.preserve ? $ : N, S.current), O = rf(w);
          p.current !== O && (p.current = O, v(w));
        }), R = In(s.preserve ? C(!0) : C(), S.current);
        return v(R), I;
      }
    },
    // We do not need re-register since namePath content is the same
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [g]
  ), d;
}
var k_ = /* @__PURE__ */ f.forwardRef(F_), _o = k_;
_o.FormProvider = A_;
_o.Field = eh;
_o.List = R_;
_o.useForm = nh;
_o.useWatch = V_;
const j_ = /* @__PURE__ */ f.createContext({}), H_ = (e) => ({
  animationDuration: e,
  animationFillMode: "both"
}), z_ = (e) => ({
  animationDuration: e,
  animationFillMode: "both"
}), rh = function(e, t, n, r) {
  const o = (arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1) ? "&" : "";
  return {
    [`
      ${o}${e}-enter,
      ${o}${e}-appear
    `]: Object.assign(Object.assign({}, H_(r)), {
      animationPlayState: "paused"
    }),
    [`${o}${e}-leave`]: Object.assign(Object.assign({}, z_(r)), {
      animationPlayState: "paused"
    }),
    [`
      ${o}${e}-enter${e}-enter-active,
      ${o}${e}-appear${e}-appear-active
    `]: {
      animationName: t,
      animationPlayState: "running"
    },
    [`${o}${e}-leave${e}-leave-active`]: {
      animationName: n,
      animationPlayState: "running",
      pointerEvents: "none"
    }
  };
}, B_ = new Yt("antMoveDownIn", {
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
}), U_ = new Yt("antMoveDownOut", {
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
}), W_ = new Yt("antMoveLeftIn", {
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
}), K_ = new Yt("antMoveLeftOut", {
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
}), G_ = new Yt("antMoveRightIn", {
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
}), q_ = new Yt("antMoveRightOut", {
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
}), X_ = new Yt("antMoveUpIn", {
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
}), Y_ = new Yt("antMoveUpOut", {
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
}), Q_ = {
  "move-up": {
    inKeyframes: X_,
    outKeyframes: Y_
  },
  "move-down": {
    inKeyframes: B_,
    outKeyframes: U_
  },
  "move-left": {
    inKeyframes: W_,
    outKeyframes: K_
  },
  "move-right": {
    inKeyframes: G_,
    outKeyframes: q_
  }
}, of = (e, t) => {
  const {
    antCls: n
  } = e, r = `${n}-${t}`, {
    inKeyframes: i,
    outKeyframes: o
  } = Q_[t];
  return [rh(r, i, o, e.motionDurationMid), {
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
}, ih = new Yt("antSlideUpIn", {
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
}), oh = new Yt("antSlideUpOut", {
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
}), ah = new Yt("antSlideDownIn", {
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
}), sh = new Yt("antSlideDownOut", {
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
}), J_ = new Yt("antSlideLeftIn", {
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
}), Z_ = new Yt("antSlideLeftOut", {
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
}), eS = new Yt("antSlideRightIn", {
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
}), tS = new Yt("antSlideRightOut", {
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
}), nS = {
  "slide-up": {
    inKeyframes: ih,
    outKeyframes: oh
  },
  "slide-down": {
    inKeyframes: ah,
    outKeyframes: sh
  },
  "slide-left": {
    inKeyframes: J_,
    outKeyframes: Z_
  },
  "slide-right": {
    inKeyframes: eS,
    outKeyframes: tS
  }
}, Fa = (e, t) => {
  const {
    antCls: n
  } = e, r = `${n}-${t}`, {
    inKeyframes: i,
    outKeyframes: o
  } = nS[t];
  return [rh(r, i, o, e.motionDurationMid), {
    [`
      ${r}-enter,
      ${r}-appear
    `]: {
      transform: "scale(0)",
      transformOrigin: "0% 0%",
      opacity: 0,
      animationTimingFunction: e.motionEaseOutQuint,
      ["&-prepare"]: {
        transform: "scale(1)"
      }
    },
    [`${r}-leave`]: {
      animationTimingFunction: e.motionEaseInQuint
    }
  }];
};
function rS(e, t, n, r) {
  return function(o) {
    const {
      prefixCls: a,
      style: s
    } = o, l = f.useRef(null), [u, c] = f.useState(0), [d, v] = f.useState(0), [h, p] = Bn(!1, {
      value: o.open
    }), {
      getPrefixCls: m
    } = f.useContext(lr), b = m(t || "select", a);
    f.useEffect(() => {
      if (p(!0), typeof ResizeObserver < "u") {
        const y = new ResizeObserver((C) => {
          const _ = C[0].target;
          c(_.offsetHeight + 8), v(_.offsetWidth);
        }), S = setInterval(() => {
          var C;
          const _ = n ? `.${n(b)}` : `.${b}-dropdown`, E = (C = l.current) === null || C === void 0 ? void 0 : C.querySelector(_);
          E && (clearInterval(S), y.observe(E));
        }, 10);
        return () => {
          clearInterval(S), y.disconnect();
        };
      }
    }, []);
    let g = Object.assign(Object.assign({}, o), {
      style: Object.assign(Object.assign({}, s), {
        margin: 0
      }),
      open: h,
      visible: h,
      getPopupContainer: () => l.current
    });
    return r && (g = r(g)), /* @__PURE__ */ f.createElement(jr, {
      theme: {
        token: {
          motion: !1
        }
      }
    }, /* @__PURE__ */ f.createElement("div", {
      ref: l,
      style: {
        paddingBottom: u,
        position: "relative",
        minWidth: d
      }
    }, /* @__PURE__ */ f.createElement(e, Object.assign({}, g))));
  };
}
const Mu = function() {
  if (typeof navigator > "u" || typeof window > "u")
    return !1;
  var e = navigator.userAgent || navigator.vendor || window.opera;
  return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(e?.substr(0, 4));
};
var lh = /* @__PURE__ */ f.createContext(null);
function iS() {
  return f.useContext(lh);
}
function oS() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 10, t = f.useState(!1), n = F(t, 2), r = n[0], i = n[1], o = f.useRef(null), a = function() {
    window.clearTimeout(o.current);
  };
  f.useEffect(function() {
    return a;
  }, []);
  var s = function(u, c) {
    a(), o.current = window.setTimeout(function() {
      i(u), c && c();
    }, e);
  };
  return [r, s, a];
}
function uh() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 250, t = f.useRef(null), n = f.useRef(null);
  f.useEffect(function() {
    return function() {
      window.clearTimeout(n.current);
    };
  }, []);
  function r(i) {
    (i || t.current === null) && (t.current = i), window.clearTimeout(n.current), n.current = window.setTimeout(function() {
      t.current = null;
    }, e);
  }
  return [function() {
    return t.current;
  }, r];
}
function aS(e, t, n, r) {
  var i = f.useRef(null);
  i.current = {
    open: t,
    triggerOpen: n,
    customizedTrigger: r
  }, f.useEffect(function() {
    function o(a) {
      var s;
      if (!((s = i.current) !== null && s !== void 0 && s.customizedTrigger)) {
        var l = a.target;
        l.shadowRoot && a.composed && (l = a.composedPath()[0] || l), i.current.open && e().filter(function(u) {
          return u;
        }).every(function(u) {
          return !u.contains(l) && u !== l;
        }) && i.current.triggerOpen(!1);
      }
    }
    return window.addEventListener("mousedown", o), function() {
      return window.removeEventListener("mousedown", o);
    };
  }, []);
}
var sS = ["prefixCls", "invalidate", "item", "renderItem", "responsive", "responsiveDisabled", "registerSize", "itemKey", "className", "style", "children", "display", "order", "component"], Wr = void 0;
function lS(e, t) {
  var n = e.prefixCls, r = e.invalidate, i = e.item, o = e.renderItem, a = e.responsive, s = e.responsiveDisabled, l = e.registerSize, u = e.itemKey, c = e.className, d = e.style, v = e.children, h = e.display, p = e.order, m = e.component, b = m === void 0 ? "div" : m, g = We(e, sS), y = a && !h;
  function S(I) {
    l(u, I);
  }
  f.useEffect(function() {
    return function() {
      S(null);
    };
  }, []);
  var C = o && i !== Wr ? o(i) : v, _;
  r || (_ = {
    opacity: y ? 0 : 1,
    height: y ? 0 : Wr,
    overflowY: y ? "hidden" : Wr,
    order: a ? p : Wr,
    pointerEvents: y ? "none" : Wr,
    position: y ? "absolute" : Wr
  });
  var E = {};
  y && (E["aria-hidden"] = !0);
  var x = /* @__PURE__ */ f.createElement(b, ge({
    className: Ee(!r && n, c),
    style: D(D({}, _), d)
  }, E, g, {
    ref: t
  }), C);
  return a && (x = /* @__PURE__ */ f.createElement(ar, {
    onResize: function(R) {
      var N = R.offsetWidth;
      S(N);
    },
    disabled: s
  }, x)), x;
}
var qi = /* @__PURE__ */ f.forwardRef(lS);
qi.displayName = "Item";
function uS(e) {
  if (typeof MessageChannel > "u")
    Ot(e);
  else {
    var t = new MessageChannel();
    t.port1.onmessage = function() {
      return e();
    }, t.port2.postMessage(void 0);
  }
}
function cS() {
  var e = f.useRef(null), t = function(r) {
    e.current || (e.current = [], uS(function() {
      Rd(function() {
        e.current.forEach(function(i) {
          i();
        }), e.current = null;
      });
    })), e.current.push(r);
  };
  return t;
}
function Di(e, t) {
  var n = f.useState(t), r = F(n, 2), i = r[0], o = r[1], a = $n(function(s) {
    e(function() {
      o(s);
    });
  });
  return [i, a];
}
var La = /* @__PURE__ */ Xe.createContext(null), fS = ["component"], dS = ["className"], vS = ["className"], hS = function(t, n) {
  var r = f.useContext(La);
  if (!r) {
    var i = t.component, o = i === void 0 ? "div" : i, a = We(t, fS);
    return /* @__PURE__ */ f.createElement(o, ge({}, a, {
      ref: n
    }));
  }
  var s = r.className, l = We(r, dS), u = t.className, c = We(t, vS);
  return /* @__PURE__ */ f.createElement(La.Provider, {
    value: null
  }, /* @__PURE__ */ f.createElement(qi, ge({
    ref: n,
    className: Ee(s, u)
  }, l, c)));
}, ch = /* @__PURE__ */ f.forwardRef(hS);
ch.displayName = "RawItem";
var pS = ["prefixCls", "data", "renderItem", "renderRawItem", "itemKey", "itemWidth", "ssr", "style", "className", "maxCount", "renderRest", "renderRawRest", "suffix", "component", "itemComponent", "onVisibleChange"], fh = "responsive", dh = "invalidate";
function mS(e) {
  return "+ ".concat(e.length, " ...");
}
function gS(e, t) {
  var n = e.prefixCls, r = n === void 0 ? "rc-overflow" : n, i = e.data, o = i === void 0 ? [] : i, a = e.renderItem, s = e.renderRawItem, l = e.itemKey, u = e.itemWidth, c = u === void 0 ? 10 : u, d = e.ssr, v = e.style, h = e.className, p = e.maxCount, m = e.renderRest, b = e.renderRawRest, g = e.suffix, y = e.component, S = y === void 0 ? "div" : y, C = e.itemComponent, _ = e.onVisibleChange, E = We(e, pS), x = d === "full", I = cS(), R = Di(I, null), N = F(R, 2), $ = N[0], w = N[1], O = $ || 0, P = Di(I, /* @__PURE__ */ new Map()), M = F(P, 2), T = M[0], A = M[1], k = Di(I, 0), H = F(k, 2), Y = H[0], K = H[1], V = Di(I, 0), G = F(V, 2), q = G[0], Z = G[1], ce = Di(I, 0), ee = F(ce, 2), B = ee[0], Q = ee[1], me = rt(null), te = F(me, 2), L = te[0], le = te[1], J = rt(null), pe = F(J, 2), ne = pe[0], Ne = pe[1], ye = f.useMemo(function() {
    return ne === null && x ? Number.MAX_SAFE_INTEGER : ne || 0;
  }, [ne, $]), Ce = rt(!1), fe = F(Ce, 2), he = fe[0], Ie = fe[1], Ve = "".concat(r, "-item"), ke = Math.max(Y, q), Re = p === fh, Ke = o.length && Re, ft = p === dh, Ze = Ke || typeof p == "number" && o.length > p, De = Fr(function() {
    var be = o;
    return Ke ? $ === null && x ? be = o : be = o.slice(0, Math.min(o.length, O / c)) : typeof p == "number" && (be = o.slice(0, p)), be;
  }, [o, c, $, p, Ke]), je = Fr(function() {
    return Ke ? o.slice(ye + 1) : o.slice(De.length);
  }, [o, De, Ke, ye]), Je = _n(function(be, X) {
    var W;
    return typeof l == "function" ? l(be) : (W = l && be?.[l]) !== null && W !== void 0 ? W : X;
  }, [l]), Rt = _n(a || function(be) {
    return be;
  }, [a]);
  function ze(be, X, W) {
    ne === be && (X === void 0 || X === L) || (Ne(be), W || (Ie(be < o.length - 1), _?.(be)), X !== void 0 && le(X));
  }
  function re(be, X) {
    w(X.clientWidth);
  }
  function se(be, X) {
    A(function(W) {
      var ue = new Map(W);
      return X === null ? ue.delete(be) : ue.set(be, X), ue;
    });
  }
  function Be(be, X) {
    Z(X), K(q);
  }
  function tt(be, X) {
    Q(X);
  }
  function at(be) {
    return T.get(Je(De[be], be));
  }
  Mt(function() {
    if (O && typeof ke == "number" && De) {
      var be = B, X = De.length, W = X - 1;
      if (!X) {
        ze(0, null);
        return;
      }
      for (var ue = 0; ue < X; ue += 1) {
        var ve = at(ue);
        if (x && (ve = ve || 0), ve === void 0) {
          ze(ue - 1, void 0, !0);
          break;
        }
        if (be += ve, // Only one means `totalWidth` is the final width
        W === 0 && be <= O || // Last two width will be the final width
        ue === W - 1 && be + at(W) <= O) {
          ze(W, null);
          break;
        } else if (be + ke > O) {
          ze(ue - 1, be - ve - B + q);
          break;
        }
      }
      g && at(0) + B > O && le(null);
    }
  }, [O, T, q, B, Je, De]);
  var Fe = he && !!je.length, Le = {};
  L !== null && Ke && (Le = {
    position: "absolute",
    left: L,
    top: 0
  });
  var ht = {
    prefixCls: Ve,
    responsive: Ke,
    component: C,
    invalidate: ft
  }, bt = s ? function(be, X) {
    var W = Je(be, X);
    return /* @__PURE__ */ f.createElement(La.Provider, {
      key: W,
      value: D(D({}, ht), {}, {
        order: X,
        item: be,
        itemKey: W,
        registerSize: se,
        display: X <= ye
      })
    }, s(be, X));
  } : function(be, X) {
    var W = Je(be, X);
    return /* @__PURE__ */ f.createElement(qi, ge({}, ht, {
      order: X,
      key: W,
      item: be,
      renderItem: Rt,
      itemKey: W,
      registerSize: se,
      display: X <= ye
    }));
  }, Ge, xt = {
    order: Fe ? ye : Number.MAX_SAFE_INTEGER,
    className: "".concat(Ve, "-rest"),
    registerSize: Be,
    display: Fe
  };
  if (b)
    b && (Ge = /* @__PURE__ */ f.createElement(La.Provider, {
      value: D(D({}, ht), xt)
    }, b(je)));
  else {
    var Nt = m || mS;
    Ge = /* @__PURE__ */ f.createElement(qi, ge({}, ht, xt), typeof Nt == "function" ? Nt(je) : Nt);
  }
  var Tt = /* @__PURE__ */ f.createElement(S, ge({
    className: Ee(!ft && r, h),
    style: v,
    ref: t
  }, E), De.map(bt), Ze ? Ge : null, g && /* @__PURE__ */ f.createElement(qi, ge({}, ht, {
    responsive: Re,
    responsiveDisabled: !Ke,
    order: ye,
    className: "".concat(Ve, "-suffix"),
    registerSize: tt,
    display: !0,
    style: Le
  }), g));
  return Re && (Tt = /* @__PURE__ */ f.createElement(ar, {
    onResize: re,
    disabled: !Ke
  }, Tt)), Tt;
}
var Un = /* @__PURE__ */ f.forwardRef(gS);
Un.displayName = "Overflow";
Un.Item = ch;
Un.RESPONSIVE = fh;
Un.INVALIDATE = dh;
var Va = function(t) {
  var n = t.className, r = t.customizeIcon, i = t.customizeIconProps, o = t.onMouseDown, a = t.onClick, s = t.children, l;
  return typeof r == "function" ? l = r(i) : l = r, /* @__PURE__ */ f.createElement("span", {
    className: n,
    onMouseDown: function(c) {
      c.preventDefault(), o && o(c);
    },
    style: {
      userSelect: "none",
      WebkitUserSelect: "none"
    },
    unselectable: "on",
    onClick: a,
    "aria-hidden": !0
  }, l !== void 0 ? l : /* @__PURE__ */ f.createElement("span", {
    className: Ee(n.split(/\s+/).map(function(u) {
      return "".concat(u, "-icon");
    }))
  }, s));
}, bS = function(t, n) {
  var r, i, o = t.prefixCls, a = t.id, s = t.inputElement, l = t.disabled, u = t.tabIndex, c = t.autoFocus, d = t.autoComplete, v = t.editable, h = t.activeDescendantId, p = t.value, m = t.maxLength, b = t.onKeyDown, g = t.onMouseDown, y = t.onChange, S = t.onPaste, C = t.onCompositionStart, _ = t.onCompositionEnd, E = t.open, x = t.attrs, I = s || /* @__PURE__ */ f.createElement("input", null), R = I, N = R.ref, $ = R.props, w = $.onKeyDown, O = $.onChange, P = $.onMouseDown, M = $.onCompositionStart, T = $.onCompositionEnd, A = $.style;
  return Qi(!("maxLength" in I.props), "Passing 'maxLength' to input element directly may not work because input in BaseSelect is controlled."), I = /* @__PURE__ */ f.cloneElement(I, D(D(D({
    type: "search"
  }, $), {}, {
    // Override over origin props
    id: a,
    ref: wi(n, N),
    disabled: l,
    tabIndex: u,
    autoComplete: d || "off",
    autoFocus: c,
    className: Ee("".concat(o, "-selection-search-input"), (r = I) === null || r === void 0 || (i = r.props) === null || i === void 0 ? void 0 : i.className),
    role: "combobox",
    "aria-expanded": E,
    "aria-haspopup": "listbox",
    "aria-owns": "".concat(a, "_list"),
    "aria-autocomplete": "list",
    "aria-controls": "".concat(a, "_list"),
    "aria-activedescendant": h
  }, x), {}, {
    value: v ? p : "",
    maxLength: m,
    readOnly: !v,
    unselectable: v ? null : "on",
    style: D(D({}, A), {}, {
      opacity: v ? null : 0
    }),
    onKeyDown: function(H) {
      b(H), w && w(H);
    },
    onMouseDown: function(H) {
      g(H), P && P(H);
    },
    onChange: function(H) {
      y(H), O && O(H);
    },
    onCompositionStart: function(H) {
      C(H), M && M(H);
    },
    onCompositionEnd: function(H) {
      _(H), T && T(H);
    },
    onPaste: S
  })), I;
}, Ru = /* @__PURE__ */ f.forwardRef(bS);
Ru.displayName = "Input";
function Tu(e) {
  return Array.isArray(e) ? e : e !== void 0 ? [e] : [];
}
var yS = typeof window < "u" && window.document && window.document.documentElement, _S = process.env.NODE_ENV !== "test" && yS;
function SS(e) {
  return e != null;
}
function af(e) {
  return ["string", "number"].includes(Qe(e));
}
function vh(e) {
  var t = void 0;
  return e && (af(e.title) ? t = e.title.toString() : af(e.label) && (t = e.label.toString())), t;
}
function ES(e, t) {
  _S ? f.useLayoutEffect(e, t) : f.useEffect(e, t);
}
function wS(e) {
  var t;
  return (t = e.key) !== null && t !== void 0 ? t : e.value;
}
var sf = function(t) {
  t.preventDefault(), t.stopPropagation();
}, CS = function(t) {
  var n = t.id, r = t.prefixCls, i = t.values, o = t.open, a = t.searchValue, s = t.autoClearSearchValue, l = t.inputRef, u = t.placeholder, c = t.disabled, d = t.mode, v = t.showSearch, h = t.autoFocus, p = t.autoComplete, m = t.activeDescendantId, b = t.tabIndex, g = t.removeIcon, y = t.maxTagCount, S = t.maxTagTextLength, C = t.maxTagPlaceholder, _ = C === void 0 ? function(le) {
    return "+ ".concat(le.length, " ...");
  } : C, E = t.tagRender, x = t.onToggleOpen, I = t.onRemove, R = t.onInputChange, N = t.onInputPaste, $ = t.onInputKeyDown, w = t.onInputMouseDown, O = t.onInputCompositionStart, P = t.onInputCompositionEnd, M = f.useRef(null), T = rt(0), A = F(T, 2), k = A[0], H = A[1], Y = rt(!1), K = F(Y, 2), V = K[0], G = K[1], q = "".concat(r, "-selection"), Z = o || d === "multiple" && s === !1 || d === "tags" ? a : "", ce = d === "tags" || d === "multiple" && s === !1 || v && (o || V);
  ES(function() {
    H(M.current.scrollWidth);
  }, [Z]);
  function ee(le, J, pe, ne, Ne) {
    return /* @__PURE__ */ f.createElement("span", {
      className: Ee("".concat(q, "-item"), U({}, "".concat(q, "-item-disabled"), pe)),
      title: vh(le)
    }, /* @__PURE__ */ f.createElement("span", {
      className: "".concat(q, "-item-content")
    }, J), ne && /* @__PURE__ */ f.createElement(Va, {
      className: "".concat(q, "-item-remove"),
      onMouseDown: sf,
      onClick: Ne,
      customizeIcon: g
    }, "×"));
  }
  function B(le, J, pe, ne, Ne) {
    var ye = function(fe) {
      sf(fe), x(!o);
    };
    return /* @__PURE__ */ f.createElement("span", {
      onMouseDown: ye
    }, E({
      label: J,
      value: le,
      disabled: pe,
      closable: ne,
      onClose: Ne
    }));
  }
  function Q(le) {
    var J = le.disabled, pe = le.label, ne = le.value, Ne = !c && !J, ye = pe;
    if (typeof S == "number" && (typeof pe == "string" || typeof pe == "number")) {
      var Ce = String(ye);
      Ce.length > S && (ye = "".concat(Ce.slice(0, S), "..."));
    }
    var fe = function(Ie) {
      Ie && Ie.stopPropagation(), I(le);
    };
    return typeof E == "function" ? B(ne, ye, J, Ne, fe) : ee(le, ye, J, Ne, fe);
  }
  function me(le) {
    var J = typeof _ == "function" ? _(le) : _;
    return ee({
      title: J
    }, J, !1);
  }
  var te = /* @__PURE__ */ f.createElement("div", {
    className: "".concat(q, "-search"),
    style: {
      width: k
    },
    onFocus: function() {
      G(!0);
    },
    onBlur: function() {
      G(!1);
    }
  }, /* @__PURE__ */ f.createElement(Ru, {
    ref: l,
    open: o,
    prefixCls: r,
    id: n,
    inputElement: null,
    disabled: c,
    autoFocus: h,
    autoComplete: p,
    editable: ce,
    activeDescendantId: m,
    value: Z,
    onKeyDown: $,
    onMouseDown: w,
    onChange: R,
    onPaste: N,
    onCompositionStart: O,
    onCompositionEnd: P,
    tabIndex: b,
    attrs: Aa(t, !0)
  }), /* @__PURE__ */ f.createElement("span", {
    ref: M,
    className: "".concat(q, "-search-mirror"),
    "aria-hidden": !0
  }, Z, " ")), L = /* @__PURE__ */ f.createElement(Un, {
    prefixCls: "".concat(q, "-overflow"),
    data: i,
    renderItem: Q,
    renderRest: me,
    suffix: te,
    itemKey: wS,
    maxCount: y
  });
  return /* @__PURE__ */ f.createElement(f.Fragment, null, L, !i.length && !Z && /* @__PURE__ */ f.createElement("span", {
    className: "".concat(q, "-placeholder")
  }, u));
}, OS = function(t) {
  var n = t.inputElement, r = t.prefixCls, i = t.id, o = t.inputRef, a = t.disabled, s = t.autoFocus, l = t.autoComplete, u = t.activeDescendantId, c = t.mode, d = t.open, v = t.values, h = t.placeholder, p = t.tabIndex, m = t.showSearch, b = t.searchValue, g = t.activeValue, y = t.maxLength, S = t.onInputKeyDown, C = t.onInputMouseDown, _ = t.onInputChange, E = t.onInputPaste, x = t.onInputCompositionStart, I = t.onInputCompositionEnd, R = t.title, N = f.useState(!1), $ = F(N, 2), w = $[0], O = $[1], P = c === "combobox", M = P || m, T = v[0], A = b || "";
  P && g && !w && (A = g), f.useEffect(function() {
    P && O(!1);
  }, [P, g]);
  var k = c !== "combobox" && !d && !m ? !1 : !!A, H = R === void 0 ? vh(T) : R, Y = function() {
    if (T)
      return null;
    var V = k ? {
      visibility: "hidden"
    } : void 0;
    return /* @__PURE__ */ f.createElement("span", {
      className: "".concat(r, "-selection-placeholder"),
      style: V
    }, h);
  };
  return /* @__PURE__ */ f.createElement(f.Fragment, null, /* @__PURE__ */ f.createElement("span", {
    className: "".concat(r, "-selection-search")
  }, /* @__PURE__ */ f.createElement(Ru, {
    ref: o,
    prefixCls: r,
    id: i,
    open: d,
    inputElement: n,
    disabled: a,
    autoFocus: s,
    autoComplete: l,
    editable: M,
    activeDescendantId: u,
    value: A,
    onKeyDown: S,
    onMouseDown: C,
    onChange: function(V) {
      O(!0), _(V);
    },
    onPaste: E,
    onCompositionStart: x,
    onCompositionEnd: I,
    tabIndex: p,
    attrs: Aa(t, !0),
    maxLength: P ? y : void 0
  })), !P && T ? /* @__PURE__ */ f.createElement("span", {
    className: "".concat(r, "-selection-item"),
    title: H,
    style: k ? {
      visibility: "hidden"
    } : void 0
  }, T.label) : null, Y());
};
function xS(e) {
  return ![
    // System function button
    j.ESC,
    j.SHIFT,
    j.BACKSPACE,
    j.TAB,
    j.WIN_KEY,
    j.ALT,
    j.META,
    j.WIN_KEY_RIGHT,
    j.CTRL,
    j.SEMICOLON,
    j.EQUALS,
    j.CAPS_LOCK,
    j.CONTEXT_MENU,
    // F1-F12
    j.F1,
    j.F2,
    j.F3,
    j.F4,
    j.F5,
    j.F6,
    j.F7,
    j.F8,
    j.F9,
    j.F10,
    j.F11,
    j.F12
  ].includes(e);
}
var NS = function(t, n) {
  var r = ae(null), i = ae(!1), o = t.prefixCls, a = t.open, s = t.mode, l = t.showSearch, u = t.tokenWithEnter, c = t.autoClearSearchValue, d = t.onSearch, v = t.onSearchSubmit, h = t.onToggleOpen, p = t.onInputKeyDown, m = t.domRef;
  f.useImperativeHandle(n, function() {
    return {
      focus: function() {
        r.current.focus();
      },
      blur: function() {
        r.current.blur();
      }
    };
  });
  var b = uh(0), g = F(b, 2), y = g[0], S = g[1], C = function(A) {
    var k = A.which;
    (k === j.UP || k === j.DOWN) && A.preventDefault(), p && p(A), k === j.ENTER && s === "tags" && !i.current && !a && v?.(A.target.value), xS(k) && h(!0);
  }, _ = function() {
    S(!0);
  }, E = ae(null), x = function(A) {
    d(A, !0, i.current) !== !1 && h(!0);
  }, I = function() {
    i.current = !0;
  }, R = function(A) {
    i.current = !1, s !== "combobox" && x(A.target.value);
  }, N = function(A) {
    var k = A.target.value;
    if (u && E.current && /[\r\n]/.test(E.current)) {
      var H = E.current.replace(/[\r\n]+$/, "").replace(/\r\n/g, " ").replace(/[\r\n]/g, " ");
      k = k.replace(H, E.current);
    }
    E.current = null, x(k);
  }, $ = function(A) {
    var k = A.clipboardData, H = k.getData("text");
    E.current = H;
  }, w = function(A) {
    var k = A.target;
    if (k !== r.current) {
      var H = document.body.style.msTouchAction !== void 0;
      H ? setTimeout(function() {
        r.current.focus();
      }) : r.current.focus();
    }
  }, O = function(A) {
    var k = y();
    A.target !== r.current && !k && s !== "combobox" && A.preventDefault(), (s !== "combobox" && (!l || !k) || !a) && (a && c !== !1 && d("", !0, !1), h());
  }, P = {
    inputRef: r,
    onInputKeyDown: C,
    onInputMouseDown: _,
    onInputChange: N,
    onInputPaste: $,
    onInputCompositionStart: I,
    onInputCompositionEnd: R
  }, M = s === "multiple" || s === "tags" ? /* @__PURE__ */ f.createElement(CS, ge({}, t, P)) : /* @__PURE__ */ f.createElement(OS, ge({}, t, P));
  return /* @__PURE__ */ f.createElement("div", {
    ref: m,
    className: "".concat(o, "-selector"),
    onClick: w,
    onMouseDown: O
  }, M);
}, hh = /* @__PURE__ */ f.forwardRef(NS);
hh.displayName = "Selector";
var lf = /* @__PURE__ */ f.createContext(null);
function uf(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
function PS(e, t, n, r) {
  return f.useMemo(function() {
    var i = uf(n ?? t), o = uf(r ?? t), a = new Set(i), s = new Set(o);
    return e && (a.has("hover") && (a.delete("hover"), a.add("click")), s.has("hover") && (s.delete("hover"), s.add("click"))), [a, s];
  }, [e, t, n, r]);
}
function MS() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], n = arguments.length > 2 ? arguments[2] : void 0;
  return n ? e[0] === t[0] : e[0] === t[0] && e[1] === t[1];
}
function RS(e, t, n, r) {
  for (var i = n.points, o = Object.keys(e), a = 0; a < o.length; a += 1) {
    var s, l = o[a];
    if (MS((s = e[l]) === null || s === void 0 ? void 0 : s.points, i, r))
      return "".concat(t, "-placement-").concat(l);
  }
  return "";
}
function cf(e, t, n, r) {
  return t || (n ? {
    motionName: "".concat(e, "-").concat(n)
  } : r ? {
    motionName: r
  } : null);
}
function So(e) {
  return e.ownerDocument.defaultView;
}
function Bl(e) {
  for (var t = [], n = e?.parentElement, r = ["hidden", "scroll", "clip", "auto"]; n; ) {
    var i = So(n).getComputedStyle(n), o = i.overflowX, a = i.overflowY, s = i.overflow;
    [o, a, s].some(function(l) {
      return r.includes(l);
    }) && t.push(n), n = n.parentElement;
  }
  return t;
}
function no(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  return Number.isNaN(e) ? t : e;
}
function Fi(e) {
  return no(parseFloat(e), 0);
}
function ff(e, t) {
  var n = D({}, e);
  return (t || []).forEach(function(r) {
    if (!(r instanceof HTMLBodyElement)) {
      var i = So(r).getComputedStyle(r), o = i.overflow, a = i.overflowClipMargin, s = i.borderTopWidth, l = i.borderBottomWidth, u = i.borderLeftWidth, c = i.borderRightWidth, d = r.getBoundingClientRect(), v = r.offsetHeight, h = r.clientHeight, p = r.offsetWidth, m = r.clientWidth, b = Fi(s), g = Fi(l), y = Fi(u), S = Fi(c), C = no(Math.round(d.width / p * 1e3) / 1e3), _ = no(Math.round(d.height / v * 1e3) / 1e3), E = (p - m - y - S) * C, x = (v - h - b - g) * _, I = b * _, R = g * _, N = y * C, $ = S * C, w = 0, O = 0;
      if (o === "clip") {
        var P = Fi(a);
        w = P * C, O = P * _;
      }
      var M = d.x + N - w, T = d.y + I - O, A = M + d.width + 2 * w - N - $ - E, k = T + d.height + 2 * O - I - R - x;
      n.left = Math.max(n.left, M), n.top = Math.max(n.top, T), n.right = Math.min(n.right, A), n.bottom = Math.min(n.bottom, k);
    }
  }), n;
}
function df(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = "".concat(t), r = n.match(/^(.*)\%$/);
  return r ? e * (parseFloat(r[1]) / 100) : parseFloat(n);
}
function vf(e, t) {
  var n = t || [], r = F(n, 2), i = r[0], o = r[1];
  return [df(e.width, i), df(e.height, o)];
}
function hf() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  return [e[0], e[1]];
}
function Kr(e, t) {
  var n = t[0], r = t[1], i, o;
  return n === "t" ? o = e.y : n === "b" ? o = e.y + e.height : o = e.y + e.height / 2, r === "l" ? i = e.x : r === "r" ? i = e.x + e.width : i = e.x + e.width / 2, {
    x: i,
    y: o
  };
}
function vr(e, t) {
  var n = {
    t: "b",
    b: "t",
    l: "r",
    r: "l"
  };
  return e.map(function(r, i) {
    return i === t ? n[r] || "c" : r;
  }).join("");
}
function TS(e, t, n, r, i, o, a) {
  var s = f.useState({
    ready: !1,
    offsetX: 0,
    offsetY: 0,
    offsetR: 0,
    offsetB: 0,
    arrowX: 0,
    arrowY: 0,
    scaleX: 1,
    scaleY: 1,
    align: i[r] || {}
  }), l = F(s, 2), u = l[0], c = l[1], d = f.useRef(0), v = f.useMemo(function() {
    return t ? Bl(t) : [];
  }, [t]), h = f.useRef({}), p = function() {
    h.current = {};
  };
  e || p();
  var m = $n(function() {
    if (t && n && e) {
      let gt = function(on, Gt) {
        var Jn = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : pe, Ti = w.x + on, $i = w.y + Gt, Ii = Ti + q, ko = $i + G, Ns = Math.max(Ti, Jn.left), Ps = Math.max($i, Jn.top), Ms = Math.min(Ii, Jn.right), Rs = Math.min(ko, Jn.bottom);
        return Math.max(0, (Ms - Ns) * (Rs - Ps));
      }, Kt = function() {
        qe = w.y + Le, ut = qe + G, yt = w.x + Fe, _t = yt + q;
      };
      var y = t, S = y.style.left, C = y.style.top, _ = y.style.right, E = y.style.bottom, x = y.ownerDocument, I = So(y), R = D(D({}, i[r]), o);
      y.style.left = "0", y.style.top = "0", y.style.right = "auto", y.style.bottom = "auto";
      var N;
      if (Array.isArray(n))
        N = {
          x: n[0],
          y: n[1],
          width: 0,
          height: 0
        };
      else {
        var $ = n.getBoundingClientRect();
        N = {
          x: $.x,
          y: $.y,
          width: $.width,
          height: $.height
        };
      }
      var w = y.getBoundingClientRect(), O = I.getComputedStyle(y), P = O.width, M = O.height, T = x.documentElement, A = T.clientWidth, k = T.clientHeight, H = T.scrollWidth, Y = T.scrollHeight, K = T.scrollTop, V = T.scrollLeft, G = w.height, q = w.width, Z = N.height, ce = N.width, ee = {
        left: 0,
        top: 0,
        right: A,
        bottom: k
      }, B = {
        left: -V,
        top: -K,
        right: H - V,
        bottom: Y - K
      }, Q = R.htmlRegion, me = "visible", te = "visibleFirst";
      Q !== "scroll" && Q !== te && (Q = me);
      var L = Q === te, le = ff(B, v), J = ff(ee, v), pe = Q === me ? J : le, ne = L ? J : pe;
      y.style.left = "auto", y.style.top = "auto", y.style.right = "0", y.style.bottom = "0";
      var Ne = y.getBoundingClientRect();
      y.style.left = S, y.style.top = C, y.style.right = _, y.style.bottom = E;
      var ye = no(Math.round(q / parseFloat(P) * 1e3) / 1e3), Ce = no(Math.round(G / parseFloat(M) * 1e3) / 1e3);
      if (ye === 0 || Ce === 0 || xa(n) && !Gv(n))
        return;
      var fe = R.offset, he = R.targetOffset, Ie = vf(w, fe), Ve = F(Ie, 2), ke = Ve[0], Re = Ve[1], Ke = vf(N, he), ft = F(Ke, 2), Ze = ft[0], De = ft[1];
      N.x -= Ze, N.y -= De;
      var je = R.points || [], Je = F(je, 2), Rt = Je[0], ze = Je[1], re = hf(ze), se = hf(Rt), Be = Kr(N, re), tt = Kr(w, se), at = D({}, R), Fe = Be.x - tt.x + ke, Le = Be.y - tt.y + Re, ht = gt(Fe, Le), bt = gt(Fe, Le, J), Ge = Kr(N, ["t", "l"]), xt = Kr(w, ["t", "l"]), Nt = Kr(N, ["b", "r"]), Tt = Kr(w, ["b", "r"]), be = R.overflow || {}, X = be.adjustX, W = be.adjustY, ue = be.shiftX, ve = be.shiftY, Pe = function(Gt) {
        return typeof Gt == "boolean" ? Gt : Gt >= 0;
      }, qe, ut, yt, _t;
      Kt();
      var nt = Pe(W), Et = se[0] === re[0];
      if (nt && se[0] === "t" && (ut > ne.bottom || h.current.bt)) {
        var dt = Le;
        Et ? dt -= G - Z : dt = Ge.y - Tt.y - Re;
        var Wt = gt(Fe, dt), mn = gt(Fe, dt, J);
        // Of course use larger one
        Wt > ht || Wt === ht && (!L || // Choose recommend one
        mn >= bt) ? (h.current.bt = !0, Le = dt, at.points = [vr(se, 0), vr(re, 0)]) : h.current.bt = !1;
      }
      if (nt && se[0] === "b" && (qe < ne.top || h.current.tb)) {
        var $t = Le;
        Et ? $t += G - Z : $t = Nt.y - xt.y - Re;
        var Oe = gt(Fe, $t), we = gt(Fe, $t, J);
        // Of course use larger one
        Oe > ht || Oe === ht && (!L || // Choose recommend one
        we >= bt) ? (h.current.tb = !0, Le = $t, at.points = [vr(se, 0), vr(re, 0)]) : h.current.tb = !1;
      }
      var pt = Pe(X), ct = se[1] === re[1];
      if (pt && se[1] === "l" && (_t > ne.right || h.current.rl)) {
        var It = Fe;
        ct ? It -= q - ce : It = Ge.x - Tt.x - ke;
        var Ft = gt(It, Le), jn = gt(It, Le, J);
        // Of course use larger one
        Ft > ht || Ft === ht && (!L || // Choose recommend one
        jn >= bt) ? (h.current.rl = !0, Fe = It, at.points = [vr(se, 1), vr(re, 1)]) : h.current.rl = !1;
      }
      if (pt && se[1] === "r" && (yt < ne.left || h.current.lr)) {
        var rn = Fe;
        ct ? rn += q - ce : rn = Nt.x - xt.x - ke;
        var gn = gt(rn, Le), Yn = gt(rn, Le, J);
        // Of course use larger one
        gn > ht || gn === ht && (!L || // Choose recommend one
        Yn >= bt) ? (h.current.lr = !0, Fe = rn, at.points = [vr(se, 1), vr(re, 1)]) : h.current.lr = !1;
      }
      Kt();
      var Nn = ue === !0 ? 0 : ue;
      typeof Nn == "number" && (yt < J.left && (Fe -= yt - J.left, N.x + ce < J.left + Nn && (Fe += N.x - J.left + ce - Nn)), _t > J.right && (Fe -= _t - J.right, N.x > J.right - Nn && (Fe += N.x - J.right + Nn)));
      var Jt = ve === !0 ? 0 : ve;
      typeof Jt == "number" && (qe < J.top && (Le -= qe - J.top, N.y + Z < J.top + Jt && (Le += N.y - J.top + Z - Jt)), ut > J.bottom && (Le -= ut - J.bottom, N.y > J.bottom - Jt && (Le += N.y - J.bottom + Jt)));
      var Pn = w.x + Fe, Zt = Pn + q, bn = w.y + Le, cr = bn + G, Qn = N.x, fr = Qn + ce, Hn = N.y, Or = Hn + Z, xr = Math.max(Pn, Qn), dr = Math.min(Zt, fr), zn = (xr + dr) / 2, Me = zn - Pn, ie = Math.max(bn, Hn), xe = Math.min(cr, Or), Ae = (ie + xe) / 2, He = Ae - bn;
      a?.(t, at);
      var et = Ne.right - w.x - (Fe + w.width), mt = Ne.bottom - w.y - (Le + w.height);
      c({
        ready: !0,
        offsetX: Fe / ye,
        offsetY: Le / Ce,
        offsetR: et / ye,
        offsetB: mt / Ce,
        arrowX: Me / ye,
        arrowY: He / Ce,
        scaleX: ye,
        scaleY: Ce,
        align: at
      });
    }
  }), b = function() {
    d.current += 1;
    var S = d.current;
    Promise.resolve().then(function() {
      d.current === S && m();
    });
  }, g = function() {
    c(function(S) {
      return D(D({}, S), {}, {
        ready: !1
      });
    });
  };
  return Mt(g, [r]), Mt(function() {
    e || g();
  }, [e]), [u.ready, u.offsetX, u.offsetY, u.offsetR, u.offsetB, u.arrowX, u.arrowY, u.scaleX, u.scaleY, u.align, b];
}
function $S(e, t, n, r) {
  Mt(function() {
    if (e && t && n) {
      let c = function() {
        r();
      };
      var i = t, o = n, a = Bl(i), s = Bl(o), l = So(o), u = new Set([l].concat(de(a), de(s)));
      return u.forEach(function(d) {
        d.addEventListener("scroll", c, {
          passive: !0
        });
      }), l.addEventListener("resize", c, {
        passive: !0
      }), r(), function() {
        u.forEach(function(d) {
          d.removeEventListener("scroll", c), l.removeEventListener("resize", c);
        });
      };
    }
  }, [e, t, n]);
}
function IS(e, t, n, r, i, o, a, s) {
  var l = f.useRef(e), u = f.useRef(!1);
  l.current !== e && (u.current = !0, l.current = e), f.useEffect(function() {
    var c = Ot(function() {
      u.current = !1;
    });
    return function() {
      Ot.cancel(c);
    };
  }, [e]), f.useEffect(function() {
    if (t && r && (!i || o)) {
      var c = function() {
        var N = !1, $ = function(P) {
          var M = P.target;
          N = a(M);
        }, w = function(P) {
          var M = P.target;
          !u.current && l.current && !N && !a(M) && s(!1);
        };
        return [$, w];
      }, d = c(), v = F(d, 2), h = v[0], p = v[1], m = c(), b = F(m, 2), g = b[0], y = b[1], S = So(r);
      S.addEventListener("mousedown", h), S.addEventListener("click", p), S.addEventListener("contextmenu", p);
      var C = Ia(n);
      if (C && (C.addEventListener("mousedown", g), C.addEventListener("click", y), C.addEventListener("contextmenu", y)), process.env.NODE_ENV !== "production") {
        var _, E, x = n == null || (_ = n.getRootNode) === null || _ === void 0 ? void 0 : _.call(n), I = (E = r.getRootNode) === null || E === void 0 ? void 0 : E.call(r);
        $e(x === I, "trigger element and popup element should in same shadow root.");
      }
      return function() {
        S.removeEventListener("mousedown", h), S.removeEventListener("click", p), S.removeEventListener("contextmenu", p), C && (C.removeEventListener("mousedown", g), C.removeEventListener("click", y), C.removeEventListener("contextmenu", y));
      };
    }
  }, [t, n, r, i, o]);
}
function AS(e) {
  var t = e.prefixCls, n = e.align, r = e.arrow, i = e.arrowPos, o = r || {}, a = o.className, s = o.content, l = i.x, u = l === void 0 ? 0 : l, c = i.y, d = c === void 0 ? 0 : c, v = f.useRef();
  if (!n || !n.points)
    return null;
  var h = {
    position: "absolute"
  };
  if (n.autoArrow !== !1) {
    var p = n.points[0], m = n.points[1], b = p[0], g = p[1], y = m[0], S = m[1];
    b === y || !["t", "b"].includes(b) ? h.top = d : b === "t" ? h.top = 0 : h.bottom = 0, g === S || !["l", "r"].includes(g) ? h.left = u : g === "l" ? h.left = 0 : h.right = 0;
  }
  return /* @__PURE__ */ f.createElement("div", {
    ref: v,
    className: Ee("".concat(t, "-arrow"), a),
    style: h
  }, s);
}
function DS(e) {
  var t = e.prefixCls, n = e.open, r = e.zIndex, i = e.mask, o = e.motion;
  return i ? /* @__PURE__ */ f.createElement(bo, ge({}, o, {
    motionAppear: !0,
    visible: n,
    removeOnLeave: !0
  }), function(a) {
    var s = a.className;
    return /* @__PURE__ */ f.createElement("div", {
      style: {
        zIndex: r
      },
      className: Ee("".concat(t, "-mask"), s)
    });
  }) : null;
}
var ph = /* @__PURE__ */ f.memo(function(e) {
  var t = e.children;
  return t;
}, function(e, t) {
  return t.cache;
});
process.env.NODE_ENV !== "production" && (ph.displayName = "PopupContent");
var mh = /* @__PURE__ */ f.forwardRef(function(e, t) {
  var n = e.popup, r = e.className, i = e.prefixCls, o = e.style, a = e.target, s = e.onVisibleChanged, l = e.open, u = e.keepDom, c = e.onClick, d = e.mask, v = e.arrow, h = e.arrowPos, p = e.align, m = e.motion, b = e.maskMotion, g = e.forceRender, y = e.getPopupContainer, S = e.autoDestroy, C = e.portal, _ = e.zIndex, E = e.onMouseEnter, x = e.onMouseLeave, I = e.ready, R = e.offsetX, N = e.offsetY, $ = e.offsetR, w = e.offsetB, O = e.onAlign, P = e.onPrepare, M = e.stretch, T = e.targetWidth, A = e.targetHeight, k = typeof n == "function" ? n() : n, H = l || u, Y = y?.length > 0, K = f.useState(!y || !Y), V = F(K, 2), G = V[0], q = V[1];
  if (Mt(function() {
    !G && Y && a && q(!0);
  }, [G, Y, a]), !G)
    return null;
  var Z = "auto", ce = {
    left: "-1000vw",
    top: "-1000vh",
    right: Z,
    bottom: Z
  };
  if (I || !l) {
    var ee = p.points, B = p._experimental, Q = B?.dynamicInset, me = Q && ee[0][1] === "r", te = Q && ee[0][0] === "b";
    me ? (ce.right = $, ce.left = Z) : (ce.left = R, ce.right = Z), te ? (ce.bottom = w, ce.top = Z) : (ce.top = N, ce.bottom = Z);
  }
  var L = {};
  return M && (M.includes("height") && A ? L.height = A : M.includes("minHeight") && A && (L.minHeight = A), M.includes("width") && T ? L.width = T : M.includes("minWidth") && T && (L.minWidth = T)), l || (L.pointerEvents = "none"), /* @__PURE__ */ f.createElement(C, {
    open: g || H,
    getContainer: y && function() {
      return y(a);
    },
    autoDestroy: S
  }, /* @__PURE__ */ f.createElement(DS, {
    prefixCls: i,
    open: l,
    zIndex: _,
    mask: d,
    motion: b
  }), /* @__PURE__ */ f.createElement(ar, {
    onResize: O,
    disabled: !l
  }, function(le) {
    return /* @__PURE__ */ f.createElement(bo, ge({
      motionAppear: !0,
      motionEnter: !0,
      motionLeave: !0,
      removeOnLeave: !1,
      forceRender: g,
      leavedClassName: "".concat(i, "-hidden")
    }, m, {
      onAppearPrepare: P,
      onEnterPrepare: P,
      visible: l,
      onVisibleChanged: function(pe) {
        var ne;
        m == null || (ne = m.onVisibleChanged) === null || ne === void 0 || ne.call(m, pe), s(pe);
      }
    }), function(J, pe) {
      var ne = J.className, Ne = J.style, ye = Ee(i, ne, r);
      return /* @__PURE__ */ f.createElement("div", {
        ref: wi(le, t, pe),
        className: ye,
        style: D(D(D(D({
          "--arrow-x": "".concat(h.x || 0, "px"),
          "--arrow-y": "".concat(h.y || 0, "px")
        }, ce), L), Ne), {}, {
          boxSizing: "border-box",
          zIndex: _
        }, o),
        onMouseEnter: E,
        onMouseLeave: x,
        onClick: c
      }, v && /* @__PURE__ */ f.createElement(AS, {
        prefixCls: i,
        arrow: v,
        arrowPos: h,
        align: p
      }), /* @__PURE__ */ f.createElement(ph, {
        cache: !l
      }, k));
    });
  }));
});
process.env.NODE_ENV !== "production" && (mh.displayName = "Popup");
var gh = /* @__PURE__ */ f.forwardRef(function(e, t) {
  var n = e.children, r = e.getTriggerDOMNode, i = Ci(n), o = f.useCallback(function(s) {
    fu(t, r ? r(s) : s);
  }, [r]), a = po(o, n.ref);
  return i ? /* @__PURE__ */ f.cloneElement(n, {
    ref: a
  }) : n;
});
process.env.NODE_ENV !== "production" && (gh.displayName = "TriggerWrapper");
var FS = ["prefixCls", "children", "action", "showAction", "hideAction", "popupVisible", "defaultPopupVisible", "onPopupVisibleChange", "afterPopupVisibleChange", "mouseEnterDelay", "mouseLeaveDelay", "focusDelay", "blurDelay", "mask", "maskClosable", "getPopupContainer", "forceRender", "autoDestroy", "destroyPopupOnHide", "popup", "popupClassName", "popupStyle", "popupPlacement", "builtinPlacements", "popupAlign", "zIndex", "stretch", "getPopupClassNameFromAlign", "alignPoint", "onPopupClick", "onPopupAlign", "arrow", "popupMotion", "maskMotion", "popupTransitionName", "popupAnimation", "maskTransitionName", "maskAnimation", "className", "getTriggerDOMNode"];
function LS() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Nu, t = /* @__PURE__ */ f.forwardRef(function(n, r) {
    var i = n.prefixCls, o = i === void 0 ? "rc-trigger-popup" : i, a = n.children, s = n.action, l = s === void 0 ? "hover" : s, u = n.showAction, c = n.hideAction, d = n.popupVisible, v = n.defaultPopupVisible, h = n.onPopupVisibleChange, p = n.afterPopupVisibleChange, m = n.mouseEnterDelay, b = n.mouseLeaveDelay, g = b === void 0 ? 0.1 : b, y = n.focusDelay, S = n.blurDelay, C = n.mask, _ = n.maskClosable, E = _ === void 0 ? !0 : _, x = n.getPopupContainer, I = n.forceRender, R = n.autoDestroy, N = n.destroyPopupOnHide, $ = n.popup, w = n.popupClassName, O = n.popupStyle, P = n.popupPlacement, M = n.builtinPlacements, T = M === void 0 ? {} : M, A = n.popupAlign, k = n.zIndex, H = n.stretch, Y = n.getPopupClassNameFromAlign, K = n.alignPoint, V = n.onPopupClick, G = n.onPopupAlign, q = n.arrow, Z = n.popupMotion, ce = n.maskMotion, ee = n.popupTransitionName, B = n.popupAnimation, Q = n.maskTransitionName, me = n.maskAnimation, te = n.className, L = n.getTriggerDOMNode, le = We(n, FS), J = R || N || !1, pe = f.useState(!1), ne = F(pe, 2), Ne = ne[0], ye = ne[1];
    Mt(function() {
      ye(Mu());
    }, []);
    var Ce = f.useRef({}), fe = f.useContext(lf), he = f.useMemo(function() {
      return {
        registerSubPopup: function(Ue, St) {
          Ce.current[Ue] = St, fe?.registerSubPopup(Ue, St);
        }
      };
    }, [fe]), Ie = Uy(), Ve = f.useState(null), ke = F(Ve, 2), Re = ke[0], Ke = ke[1], ft = $n(function(_e) {
      xa(_e) && Re !== _e && Ke(_e), fe?.registerSubPopup(Ie, _e);
    }), Ze = f.useState(null), De = F(Ze, 2), je = De[0], Je = De[1], Rt = $n(function(_e) {
      xa(_e) && je !== _e && Je(_e);
    }), ze = f.Children.only(a), re = ze?.props || {}, se = {}, Be = $n(function(_e) {
      var Ue, St, At = je;
      return At?.contains(_e) || ((Ue = Ia(At)) === null || Ue === void 0 ? void 0 : Ue.host) === _e || _e === At || Re?.contains(_e) || ((St = Ia(Re)) === null || St === void 0 ? void 0 : St.host) === _e || _e === Re || Object.values(Ce.current).some(function(wt) {
        return wt?.contains(_e) || _e === wt;
      });
    }), tt = cf(o, Z, B, ee), at = cf(o, ce, me, Q), Fe = f.useState(v || !1), Le = F(Fe, 2), ht = Le[0], bt = Le[1], Ge = d ?? ht, xt = $n(function(_e) {
      d === void 0 && bt(_e);
    });
    Mt(function() {
      bt(d || !1);
    }, [d]);
    var Nt = f.useRef(Ge);
    Nt.current = Ge;
    var Tt = $n(function(_e) {
      Ge !== _e && (xt(_e), h?.(_e));
    }), be = f.useRef(), X = function() {
      clearTimeout(be.current);
    }, W = function(Ue) {
      var St = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      X(), St === 0 ? Tt(Ue) : be.current = setTimeout(function() {
        Tt(Ue);
      }, St * 1e3);
    };
    f.useEffect(function() {
      return X;
    }, []);
    var ue = f.useState(!1), ve = F(ue, 2), Pe = ve[0], qe = ve[1];
    Mt(function(_e) {
      (!_e || Ge) && qe(!0);
    }, [Ge]);
    var ut = f.useState(null), yt = F(ut, 2), _t = yt[0], nt = yt[1], Et = f.useState([0, 0]), dt = F(Et, 2), Wt = dt[0], mn = dt[1], $t = function(Ue) {
      mn([Ue.clientX, Ue.clientY]);
    }, Oe = TS(Ge, Re, K ? Wt : je, P, T, A, G), we = F(Oe, 11), pt = we[0], ct = we[1], It = we[2], Ft = we[3], jn = we[4], rn = we[5], gn = we[6], Yn = we[7], Nn = we[8], Jt = we[9], Pn = we[10], Zt = $n(function() {
      Pe || Pn();
    });
    $S(Ge, je, Re, Zt), Mt(function() {
      Zt();
    }, [Wt, P]), Mt(function() {
      Ge && !(T != null && T[P]) && Zt();
    }, [JSON.stringify(A)]);
    var bn = f.useMemo(function() {
      var _e = RS(T, o, Jt, K);
      return Ee(_e, Y?.(Jt));
    }, [Jt, Y, T, o, K]);
    f.useImperativeHandle(r, function() {
      return {
        forceAlign: Zt
      };
    });
    var cr = function(Ue) {
      qe(!1), Pn(), p?.(Ue);
    }, Qn = function() {
      return new Promise(function(Ue) {
        nt(function() {
          return Ue;
        });
      });
    };
    Mt(function() {
      _t && (Pn(), _t(), nt(null));
    }, [_t]);
    var fr = f.useState(0), Hn = F(fr, 2), Or = Hn[0], xr = Hn[1], dr = f.useState(0), zn = F(dr, 2), Me = zn[0], ie = zn[1], xe = function(Ue, St) {
      if (Zt(), H) {
        var At = St.getBoundingClientRect();
        xr(At.width), ie(At.height);
      }
    }, Ae = PS(Ne, l, u, c), He = F(Ae, 2), et = He[0], mt = He[1], gt = function(Ue, St, At, wt) {
      se[Ue] = function(lc) {
        var jo;
        wt?.(lc), W(St, At);
        for (var Ts = arguments.length, uc = new Array(Ts > 1 ? Ts - 1 : 0), Ho = 1; Ho < Ts; Ho++)
          uc[Ho - 1] = arguments[Ho];
        (jo = re[Ue]) === null || jo === void 0 || jo.call.apply(jo, [re, lc].concat(uc));
      };
    }, Kt = et.has("click"), on = mt.has("click") || mt.has("contextMenu");
    (Kt || on) && (se.onClick = function(_e) {
      var Ue;
      Nt.current && on ? W(!1) : !Nt.current && Kt && ($t(_e), W(!0));
      for (var St = arguments.length, At = new Array(St > 1 ? St - 1 : 0), wt = 1; wt < St; wt++)
        At[wt - 1] = arguments[wt];
      (Ue = re.onClick) === null || Ue === void 0 || Ue.call.apply(Ue, [re, _e].concat(At));
    }), IS(Ge, on, je, Re, C, E, Be, W);
    var Gt = et.has("hover"), Jn = mt.has("hover"), Ti, $i;
    Gt && (gt("onMouseEnter", !0, m, function(_e) {
      $t(_e);
    }), Ti = function() {
      W(!0, m);
    }, K && (se.onMouseMove = function(_e) {
      var Ue;
      (Ue = re.onMouseMove) === null || Ue === void 0 || Ue.call(re, _e);
    })), Jn && (gt("onMouseLeave", !1, g), $i = function() {
      W(!1, g);
    }), et.has("focus") && gt("onFocus", !0, y), mt.has("focus") && gt("onBlur", !1, S), et.has("contextMenu") && (se.onContextMenu = function(_e) {
      var Ue;
      Nt.current && mt.has("contextMenu") ? W(!1) : ($t(_e), W(!0)), _e.preventDefault();
      for (var St = arguments.length, At = new Array(St > 1 ? St - 1 : 0), wt = 1; wt < St; wt++)
        At[wt - 1] = arguments[wt];
      (Ue = re.onContextMenu) === null || Ue === void 0 || Ue.call.apply(Ue, [re, _e].concat(At));
    }), te && (se.className = Ee(re.className, te));
    var Ii = D(D({}, re), se), ko = {}, Ns = ["onContextMenu", "onClick", "onMouseDown", "onTouchStart", "onMouseEnter", "onMouseLeave", "onFocus", "onBlur"];
    Ns.forEach(function(_e) {
      le[_e] && (ko[_e] = function() {
        for (var Ue, St = arguments.length, At = new Array(St), wt = 0; wt < St; wt++)
          At[wt] = arguments[wt];
        (Ue = Ii[_e]) === null || Ue === void 0 || Ue.call.apply(Ue, [Ii].concat(At)), le[_e].apply(le, At);
      });
    });
    var Ps = /* @__PURE__ */ f.cloneElement(ze, D(D({}, Ii), ko)), Ms = {
      x: rn,
      y: gn
    }, Rs = q ? D({}, q !== !0 ? q : {}) : null;
    return /* @__PURE__ */ f.createElement(f.Fragment, null, /* @__PURE__ */ f.createElement(ar, {
      disabled: !Ge,
      ref: Rt,
      onResize: xe
    }, /* @__PURE__ */ f.createElement(gh, {
      getTriggerDOMNode: L
    }, Ps)), /* @__PURE__ */ f.createElement(lf.Provider, {
      value: he
    }, /* @__PURE__ */ f.createElement(mh, {
      portal: e,
      ref: ft,
      prefixCls: o,
      popup: $,
      className: Ee(w, bn),
      style: O,
      target: je,
      onMouseEnter: Ti,
      onMouseLeave: $i,
      zIndex: k,
      open: Ge,
      keepDom: Pe,
      onClick: V,
      mask: C,
      motion: tt,
      maskMotion: at,
      onVisibleChanged: cr,
      onPrepare: Qn,
      forceRender: I,
      autoDestroy: J,
      getPopupContainer: x,
      align: Jt,
      arrow: Rs,
      arrowPos: Ms,
      ready: pt,
      offsetX: ct,
      offsetY: It,
      offsetR: Ft,
      offsetB: jn,
      onAlign: Zt,
      stretch: H,
      targetWidth: Or / Yn,
      targetHeight: Me / Nn
    })));
  });
  return process.env.NODE_ENV !== "production" && (t.displayName = "Trigger"), t;
}
const $u = LS(Nu);
var VS = ["prefixCls", "disabled", "visible", "children", "popupElement", "containerWidth", "animation", "transitionName", "dropdownStyle", "dropdownClassName", "direction", "placement", "builtinPlacements", "dropdownMatchSelectWidth", "dropdownRender", "dropdownAlign", "getPopupContainer", "empty", "getTriggerDOMNode", "onPopupVisibleChange", "onPopupMouseEnter"], kS = function(t) {
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
}, jS = function(t, n) {
  var r = t.prefixCls;
  t.disabled;
  var i = t.visible, o = t.children, a = t.popupElement, s = t.containerWidth, l = t.animation, u = t.transitionName, c = t.dropdownStyle, d = t.dropdownClassName, v = t.direction, h = v === void 0 ? "ltr" : v, p = t.placement, m = t.builtinPlacements, b = t.dropdownMatchSelectWidth, g = t.dropdownRender, y = t.dropdownAlign, S = t.getPopupContainer, C = t.empty, _ = t.getTriggerDOMNode, E = t.onPopupVisibleChange, x = t.onPopupMouseEnter, I = We(t, VS), R = "".concat(r, "-dropdown"), N = a;
  g && (N = g(a));
  var $ = f.useMemo(function() {
    return m || kS(b);
  }, [m, b]), w = l ? "".concat(R, "-").concat(l) : u, O = f.useRef(null);
  f.useImperativeHandle(n, function() {
    return {
      getPopupElement: function() {
        return O.current;
      }
    };
  });
  var P = D({
    minWidth: s
  }, c);
  return typeof b == "number" ? P.width = b : b && (P.width = s), /* @__PURE__ */ f.createElement($u, ge({}, I, {
    showAction: E ? ["click"] : [],
    hideAction: E ? ["click"] : [],
    popupPlacement: p || (h === "rtl" ? "bottomRight" : "bottomLeft"),
    builtinPlacements: $,
    prefixCls: R,
    popupTransitionName: w,
    popup: /* @__PURE__ */ f.createElement("div", {
      ref: O,
      onMouseEnter: x
    }, N),
    popupAlign: y,
    popupVisible: i,
    getPopupContainer: S,
    popupClassName: Ee(d, U({}, "".concat(R, "-empty"), C)),
    popupStyle: P,
    getTriggerDOMNode: _,
    onPopupVisibleChange: E
  }), o);
}, bh = /* @__PURE__ */ f.forwardRef(jS);
bh.displayName = "SelectTrigger";
function pf(e, t) {
  var n = e.key, r;
  return "value" in e && (r = e.value), n ?? (r !== void 0 ? r : "rc-index-key-".concat(t));
}
function yh(e, t) {
  var n = e || {}, r = n.label, i = n.value, o = n.options, a = n.groupLabel, s = r || (t ? "children" : "label");
  return {
    label: s,
    value: i || "value",
    options: o || "options",
    groupLabel: a || s
  };
}
function HS(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = t.fieldNames, r = t.childrenAsData, i = [], o = yh(n, !1), a = o.label, s = o.value, l = o.options, u = o.groupLabel;
  function c(d, v) {
    d.forEach(function(h) {
      if (v || !(l in h)) {
        var p = h[s];
        i.push({
          key: pf(h, i.length),
          groupOption: v,
          data: h,
          label: h[a],
          value: p
        });
      } else {
        var m = h[u];
        m === void 0 && r && (m = h.label), i.push({
          key: pf(h, i.length),
          group: !0,
          data: h,
          label: m
        }), c(h[l], !0);
      }
    });
  }
  return c(e, !1), i;
}
function Ul(e) {
  var t = D({}, e);
  return "props" in t || Object.defineProperty(t, "props", {
    get: function() {
      return $e(!1, "Return type is option instead of Option instance. Please read value directly instead of reading from `props`."), t;
    }
  }), t;
}
function zS(e, t) {
  if (!t || !t.length)
    return null;
  var n = !1;
  function r(o, a) {
    var s = fv(a), l = s[0], u = s.slice(1);
    if (!l)
      return [o];
    var c = o.split(l);
    return n = n || c.length > 1, c.reduce(function(d, v) {
      return [].concat(de(d), de(r(v, u)));
    }, []).filter(function(d) {
      return d;
    });
  }
  var i = r(e, t);
  return n ? i : null;
}
var BS = ["id", "prefixCls", "className", "showSearch", "tagRender", "direction", "omitDomProps", "displayValues", "onDisplayValuesChange", "emptyOptions", "notFoundContent", "onClear", "mode", "disabled", "loading", "getInputElement", "getRawInputElement", "open", "defaultOpen", "onDropdownVisibleChange", "activeValue", "onActiveValueChange", "activeDescendantId", "searchValue", "autoClearSearchValue", "onSearch", "onSearchSplit", "tokenSeparators", "allowClear", "showArrow", "inputIcon", "clearIcon", "OptionList", "animation", "transitionName", "dropdownStyle", "dropdownClassName", "dropdownMatchSelectWidth", "dropdownRender", "dropdownAlign", "placement", "builtinPlacements", "getPopupContainer", "showAction", "onFocus", "onBlur", "onKeyUp", "onKeyDown", "onMouseDown"], US = ["value", "onChange", "removeIcon", "placeholder", "autoFocus", "maxTagCount", "maxTagTextLength", "maxTagPlaceholder", "choiceTransitionName", "onInputKeyDown", "onPopupScroll", "tabIndex"];
function ka(e) {
  return e === "tags" || e === "multiple";
}
var _h = /* @__PURE__ */ f.forwardRef(function(e, t) {
  var n, r, i = e.id, o = e.prefixCls, a = e.className, s = e.showSearch, l = e.tagRender, u = e.direction, c = e.omitDomProps, d = e.displayValues, v = e.onDisplayValuesChange, h = e.emptyOptions, p = e.notFoundContent, m = p === void 0 ? "Not Found" : p, b = e.onClear, g = e.mode, y = e.disabled, S = e.loading, C = e.getInputElement, _ = e.getRawInputElement, E = e.open, x = e.defaultOpen, I = e.onDropdownVisibleChange, R = e.activeValue, N = e.onActiveValueChange, $ = e.activeDescendantId, w = e.searchValue, O = e.autoClearSearchValue, P = e.onSearch, M = e.onSearchSplit, T = e.tokenSeparators, A = e.allowClear, k = e.showArrow, H = e.inputIcon, Y = e.clearIcon, K = e.OptionList, V = e.animation, G = e.transitionName, q = e.dropdownStyle, Z = e.dropdownClassName, ce = e.dropdownMatchSelectWidth, ee = e.dropdownRender, B = e.dropdownAlign, Q = e.placement, me = e.builtinPlacements, te = e.getPopupContainer, L = e.showAction, le = L === void 0 ? [] : L, J = e.onFocus, pe = e.onBlur, ne = e.onKeyUp, Ne = e.onKeyDown, ye = e.onMouseDown, Ce = We(e, BS), fe = ka(g), he = (s !== void 0 ? s : fe) || g === "combobox", Ie = D({}, Ce);
  US.forEach(function(Me) {
    delete Ie[Me];
  }), c?.forEach(function(Me) {
    delete Ie[Me];
  });
  var Ve = f.useState(!1), ke = F(Ve, 2), Re = ke[0], Ke = ke[1];
  f.useEffect(function() {
    Ke(Mu());
  }, []);
  var ft = f.useRef(null), Ze = f.useRef(null), De = f.useRef(null), je = f.useRef(null), Je = f.useRef(null), Rt = oS(), ze = F(Rt, 3), re = ze[0], se = ze[1], Be = ze[2];
  f.useImperativeHandle(t, function() {
    var Me, ie;
    return {
      focus: (Me = je.current) === null || Me === void 0 ? void 0 : Me.focus,
      blur: (ie = je.current) === null || ie === void 0 ? void 0 : ie.blur,
      scrollTo: function(Ae) {
        var He;
        return (He = Je.current) === null || He === void 0 ? void 0 : He.scrollTo(Ae);
      }
    };
  });
  var tt = f.useMemo(function() {
    var Me;
    if (g !== "combobox")
      return w;
    var ie = (Me = d[0]) === null || Me === void 0 ? void 0 : Me.value;
    return typeof ie == "string" || typeof ie == "number" ? String(ie) : "";
  }, [w, g, d]), at = g === "combobox" && typeof C == "function" && C() || null, Fe = typeof _ == "function" && _(), Le = po(Ze, Fe == null || (n = Fe.props) === null || n === void 0 ? void 0 : n.ref), ht = f.useState(!1), bt = F(ht, 2), Ge = bt[0], xt = bt[1];
  Mt(function() {
    xt(!0);
  }, []);
  var Nt = Bn(!1, {
    defaultValue: x,
    value: E
  }), Tt = F(Nt, 2), be = Tt[0], X = Tt[1], W = Ge ? be : !1, ue = !m && h;
  (y || ue && W && g === "combobox") && (W = !1);
  var ve = ue ? !1 : W, Pe = f.useCallback(function(Me) {
    var ie = Me !== void 0 ? Me : !W;
    y || (X(ie), W !== ie && I?.(ie));
  }, [y, W, X, I]), qe = f.useMemo(function() {
    return (T || []).some(function(Me) {
      return [`
`, `\r
`].includes(Me);
    });
  }, [T]), ut = function(ie, xe, Ae) {
    var He = !0, et = ie;
    N?.(null);
    var mt = Ae ? null : zS(ie, T);
    return g !== "combobox" && mt && (et = "", M?.(mt), Pe(!1), He = !1), P && tt !== et && P(et, {
      source: xe ? "typing" : "effect"
    }), He;
  }, yt = function(ie) {
    !ie || !ie.trim() || P(ie, {
      source: "submit"
    });
  };
  f.useEffect(function() {
    !W && !fe && g !== "combobox" && ut("", !1, !1);
  }, [W]), f.useEffect(function() {
    be && y && X(!1), y && se(!1);
  }, [y]);
  var _t = uh(), nt = F(_t, 2), Et = nt[0], dt = nt[1], Wt = function(ie) {
    var xe = Et(), Ae = ie.which;
    if (Ae === j.ENTER && (g !== "combobox" && ie.preventDefault(), W || Pe(!0)), dt(!!tt), Ae === j.BACKSPACE && !xe && fe && !tt && d.length) {
      for (var He = de(d), et = null, mt = He.length - 1; mt >= 0; mt -= 1) {
        var gt = He[mt];
        if (!gt.disabled) {
          He.splice(mt, 1), et = gt;
          break;
        }
      }
      et && v(He, {
        type: "remove",
        values: [et]
      });
    }
    for (var Kt = arguments.length, on = new Array(Kt > 1 ? Kt - 1 : 0), Gt = 1; Gt < Kt; Gt++)
      on[Gt - 1] = arguments[Gt];
    if (W && Je.current) {
      var Jn;
      (Jn = Je.current).onKeyDown.apply(Jn, [ie].concat(on));
    }
    Ne?.apply(void 0, [ie].concat(on));
  }, mn = function(ie) {
    for (var xe = arguments.length, Ae = new Array(xe > 1 ? xe - 1 : 0), He = 1; He < xe; He++)
      Ae[He - 1] = arguments[He];
    if (W && Je.current) {
      var et;
      (et = Je.current).onKeyUp.apply(et, [ie].concat(Ae));
    }
    ne?.apply(void 0, [ie].concat(Ae));
  }, $t = function(ie) {
    var xe = d.filter(function(Ae) {
      return Ae !== ie;
    });
    v(xe, {
      type: "remove",
      values: [ie]
    });
  }, Oe = f.useRef(!1), we = function() {
    se(!0), y || (J && !Oe.current && J.apply(void 0, arguments), le.includes("focus") && Pe(!0)), Oe.current = !0;
  }, pt = function() {
    se(!1, function() {
      Oe.current = !1, Pe(!1);
    }), !y && (tt && (g === "tags" ? P(tt, {
      source: "submit"
    }) : g === "multiple" && P("", {
      source: "blur"
    })), pe && pe.apply(void 0, arguments));
  }, ct = [];
  f.useEffect(function() {
    return function() {
      ct.forEach(function(Me) {
        return clearTimeout(Me);
      }), ct.splice(0, ct.length);
    };
  }, []);
  var It = function(ie) {
    var xe, Ae = ie.target, He = (xe = De.current) === null || xe === void 0 ? void 0 : xe.getPopupElement();
    if (He && He.contains(Ae)) {
      var et = setTimeout(function() {
        var on = ct.indexOf(et);
        if (on !== -1 && ct.splice(on, 1), Be(), !Re && !He.contains(document.activeElement)) {
          var Gt;
          (Gt = je.current) === null || Gt === void 0 || Gt.focus();
        }
      });
      ct.push(et);
    }
    for (var mt = arguments.length, gt = new Array(mt > 1 ? mt - 1 : 0), Kt = 1; Kt < mt; Kt++)
      gt[Kt - 1] = arguments[Kt];
    ye?.apply(void 0, [ie].concat(gt));
  }, Ft = f.useState(null), jn = F(Ft, 2), rn = jn[0], gn = jn[1], Yn = f.useState({}), Nn = F(Yn, 2), Jt = Nn[1];
  function Pn() {
    Jt({});
  }
  Mt(function() {
    if (ve) {
      var Me, ie = Math.ceil((Me = ft.current) === null || Me === void 0 ? void 0 : Me.offsetWidth);
      rn !== ie && !Number.isNaN(ie) && gn(ie);
    }
  }, [ve]);
  var Zt;
  Fe && (Zt = function(ie) {
    Pe(ie);
  }), aS(function() {
    var Me;
    return [ft.current, (Me = De.current) === null || Me === void 0 ? void 0 : Me.getPopupElement()];
  }, ve, Pe, !!Fe);
  var bn = f.useMemo(function() {
    return D(D({}, e), {}, {
      notFoundContent: m,
      open: W,
      triggerOpen: ve,
      id: i,
      showSearch: he,
      multiple: fe,
      toggleOpen: Pe
    });
  }, [e, m, ve, W, i, he, fe, Pe]), cr = k !== void 0 ? k : S || !fe && g !== "combobox", Qn;
  cr && (Qn = /* @__PURE__ */ f.createElement(Va, {
    className: Ee("".concat(o, "-arrow"), U({}, "".concat(o, "-arrow-loading"), S)),
    customizeIcon: H,
    customizeIconProps: {
      loading: S,
      searchValue: tt,
      open: W,
      focused: re,
      showSearch: he
    }
  }));
  var fr, Hn = function() {
    var ie;
    b?.(), (ie = je.current) === null || ie === void 0 || ie.focus(), v([], {
      type: "clear",
      values: d
    }), ut("", !1, !1);
  };
  !y && A && (d.length || tt) && !(g === "combobox" && tt === "") && (fr = /* @__PURE__ */ f.createElement(Va, {
    className: "".concat(o, "-clear"),
    onMouseDown: Hn,
    customizeIcon: Y
  }, "×"));
  var Or = /* @__PURE__ */ f.createElement(K, {
    ref: Je
  }), xr = Ee(o, a, (r = {}, U(r, "".concat(o, "-focused"), re), U(r, "".concat(o, "-multiple"), fe), U(r, "".concat(o, "-single"), !fe), U(r, "".concat(o, "-allow-clear"), A), U(r, "".concat(o, "-show-arrow"), cr), U(r, "".concat(o, "-disabled"), y), U(r, "".concat(o, "-loading"), S), U(r, "".concat(o, "-open"), W), U(r, "".concat(o, "-customize-input"), at), U(r, "".concat(o, "-show-search"), he), r)), dr = /* @__PURE__ */ f.createElement(bh, {
    ref: De,
    disabled: y,
    prefixCls: o,
    visible: ve,
    popupElement: Or,
    containerWidth: rn,
    animation: V,
    transitionName: G,
    dropdownStyle: q,
    dropdownClassName: Z,
    direction: u,
    dropdownMatchSelectWidth: ce,
    dropdownRender: ee,
    dropdownAlign: B,
    placement: Q,
    builtinPlacements: me,
    getPopupContainer: te,
    empty: h,
    getTriggerDOMNode: function() {
      return Ze.current;
    },
    onPopupVisibleChange: Zt,
    onPopupMouseEnter: Pn
  }, Fe ? /* @__PURE__ */ f.cloneElement(Fe, {
    ref: Le
  }) : /* @__PURE__ */ f.createElement(hh, ge({}, e, {
    domRef: Ze,
    prefixCls: o,
    inputElement: at,
    ref: je,
    id: i,
    showSearch: he,
    autoClearSearchValue: O,
    mode: g,
    activeDescendantId: $,
    tagRender: l,
    values: d,
    open: W,
    onToggleOpen: Pe,
    activeValue: R,
    searchValue: tt,
    onSearch: ut,
    onSearchSubmit: yt,
    onRemove: $t,
    tokenWithEnter: qe
  }))), zn;
  return Fe ? zn = dr : zn = /* @__PURE__ */ f.createElement("div", ge({
    className: xr
  }, Ie, {
    ref: ft,
    onMouseDown: It,
    onKeyDown: Wt,
    onKeyUp: mn,
    onFocus: we,
    onBlur: pt
  }), re && !W && /* @__PURE__ */ f.createElement("span", {
    style: {
      width: 0,
      height: 0,
      position: "absolute",
      overflow: "hidden",
      opacity: 0
    },
    "aria-live": "polite"
  }, "".concat(d.map(function(Me) {
    var ie = Me.label, xe = Me.value;
    return ["number", "string"].includes(Qe(ie)) ? ie : xe;
  }).join(", "))), dr, Qn, fr), /* @__PURE__ */ f.createElement(lh.Provider, {
    value: bn
  }, zn);
});
process.env.NODE_ENV !== "production" && (_h.displayName = "BaseSelect");
const WS = function(e, t) {
  var n = f.useRef({
    values: /* @__PURE__ */ new Map(),
    options: /* @__PURE__ */ new Map()
  }), r = f.useMemo(function() {
    var o = n.current, a = o.values, s = o.options, l = e.map(function(d) {
      if (d.label === void 0) {
        var v;
        return D(D({}, d), {}, {
          label: (v = a.get(d.value)) === null || v === void 0 ? void 0 : v.label
        });
      }
      return d;
    }), u = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map();
    return l.forEach(function(d) {
      u.set(d.value, d), c.set(d.value, t.get(d.value) || s.get(d.value));
    }), n.current.values = u, n.current.options = c, l;
  }, [e, t]), i = f.useCallback(function(o) {
    return t.get(o) || n.current.options.get(o);
  }, [t]);
  return [r, i];
};
function qs(e, t) {
  return Tu(e).join("").toUpperCase().includes(t);
}
const KS = function(e, t, n, r, i) {
  return f.useMemo(function() {
    if (!n || r === !1)
      return e;
    var o = t.options, a = t.label, s = t.value, l = [], u = typeof r == "function", c = n.toUpperCase(), d = u ? r : function(h, p) {
      return i ? qs(p[i], c) : p[o] ? qs(p[a !== "children" ? a : "label"], c) : qs(p[s], c);
    }, v = u ? function(h) {
      return Ul(h);
    } : function(h) {
      return h;
    };
    return e.forEach(function(h) {
      if (h[o]) {
        var p = d(n, v(h));
        if (p)
          l.push(h);
        else {
          var m = h[o].filter(function(b) {
            return d(n, v(b));
          });
          m.length && l.push(D(D({}, h), {}, U({}, o, m)));
        }
        return;
      }
      d(n, v(h)) && l.push(h);
    }), l;
  }, [e, r, i, n, t]);
};
var mf = 0, GS = process.env.NODE_ENV !== "test" && nn();
function qS() {
  var e;
  return GS ? (e = mf, mf += 1) : e = "TEST_OR_SSR", e;
}
function XS(e) {
  var t = f.useState(), n = F(t, 2), r = n[0], i = n[1];
  return f.useEffect(function() {
    i("rc_select_".concat(qS()));
  }, []), e || r;
}
var YS = ["children", "value"], QS = ["children"];
function JS(e) {
  var t = e, n = t.key, r = t.props, i = r.children, o = r.value, a = We(r, YS);
  return D({
    key: n,
    value: o !== void 0 ? o : n,
    children: i
  }, a);
}
function Iu(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  return or(e).map(function(n, r) {
    if (!/* @__PURE__ */ f.isValidElement(n) || !n.type)
      return null;
    var i = n, o = i.type.isSelectOptGroup, a = i.key, s = i.props, l = s.children, u = We(s, QS);
    return t || !o ? JS(n) : D(D({
      key: "__RC_SELECT_GRP__".concat(a === null ? r : a, "__"),
      label: a
    }, u), {}, {
      options: Iu(l)
    });
  }).filter(function(n) {
    return n;
  });
}
function ZS(e, t, n, r, i) {
  return f.useMemo(function() {
    var o = e, a = !e;
    a && (o = Iu(t));
    var s = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), u = function(v, h, p) {
      p && typeof p == "string" && v.set(h[p], h);
    };
    function c(d) {
      for (var v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, h = 0; h < d.length; h += 1) {
        var p = d[h];
        !p[n.options] || v ? (s.set(p[n.value], p), u(l, p, n.label), u(l, p, r), u(l, p, i)) : c(p[n.options], !0);
      }
    }
    return c(o), {
      options: o,
      valueOptions: s,
      labelOptions: l
    };
  }, [e, t, n, r, i]);
}
function gf(e) {
  var t = f.useRef();
  t.current = e;
  var n = f.useCallback(function() {
    return t.current.apply(t, arguments);
  }, []);
  return n;
}
var Au = function() {
  return null;
};
Au.isSelectOptGroup = !0;
var Du = function() {
  return null;
};
Du.isSelectOption = !0;
var Sh = /* @__PURE__ */ f.forwardRef(function(e, t) {
  var n = e.height, r = e.offset, i = e.children, o = e.prefixCls, a = e.onInnerResize, s = e.innerProps, l = {}, u = {
    display: "flex",
    flexDirection: "column"
  };
  return r !== void 0 && (l = {
    height: n,
    position: "relative",
    overflow: "hidden"
  }, u = D(D({}, u), {}, {
    transform: "translateY(".concat(r, "px)"),
    position: "absolute",
    left: 0,
    right: 0,
    top: 0
  })), /* @__PURE__ */ f.createElement("div", {
    style: l
  }, /* @__PURE__ */ f.createElement(ar, {
    onResize: function(d) {
      var v = d.offsetHeight;
      v && a && a();
    }
  }, /* @__PURE__ */ f.createElement("div", ge({
    style: u,
    className: Ee(U({}, "".concat(o, "-holder-inner"), o)),
    ref: t
  }, s), i)));
});
Sh.displayName = "Filler";
var eE = 20;
function bf(e) {
  return "touches" in e ? e.touches[0].pageY : e.pageY;
}
var tE = /* @__PURE__ */ function(e) {
  Si(n, e);
  var t = Ei(n);
  function n() {
    var r;
    hn(this, n);
    for (var i = arguments.length, o = new Array(i), a = 0; a < i; a++)
      o[a] = arguments[a];
    return r = t.call.apply(t, [this].concat(o)), r.moveRaf = null, r.scrollbarRef = /* @__PURE__ */ f.createRef(), r.thumbRef = /* @__PURE__ */ f.createRef(), r.visibleTimeout = null, r.state = {
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
      var s;
      window.removeEventListener("mousemove", r.onMouseMove), window.removeEventListener("mouseup", r.onMouseUp), (s = r.scrollbarRef.current) === null || s === void 0 || s.removeEventListener("touchstart", r.onScrollbarTouchStart), r.thumbRef.current && (r.thumbRef.current.removeEventListener("touchstart", r.onMouseDown), r.thumbRef.current.removeEventListener("touchmove", r.onMouseMove), r.thumbRef.current.removeEventListener("touchend", r.onMouseUp)), Ot.cancel(r.moveRaf);
    }, r.onMouseDown = function(s) {
      var l = r.props.onStartMove;
      r.setState({
        dragging: !0,
        pageY: bf(s),
        startTop: r.getTop()
      }), l(), r.patchEvents(), s.stopPropagation(), s.preventDefault();
    }, r.onMouseMove = function(s) {
      var l = r.state, u = l.dragging, c = l.pageY, d = l.startTop, v = r.props.onScroll;
      if (Ot.cancel(r.moveRaf), u) {
        var h = bf(s) - c, p = d + h, m = r.getEnableScrollRange(), b = r.getEnableHeightRange(), g = b ? p / b : 0, y = Math.ceil(g * m);
        r.moveRaf = Ot(function() {
          v(y);
        });
      }
    }, r.onMouseUp = function() {
      var s = r.props.onStopMove;
      r.setState({
        dragging: !1
      }), s(), r.removeEvents();
    }, r.getSpinHeight = function() {
      var s = r.props, l = s.height, u = s.count, c = l / u * 10;
      return c = Math.max(c, eE), c = Math.min(c, l / 2), Math.floor(c);
    }, r.getEnableScrollRange = function() {
      var s = r.props, l = s.scrollHeight, u = s.height;
      return l - u || 0;
    }, r.getEnableHeightRange = function() {
      var s = r.props.height, l = r.getSpinHeight();
      return s - l || 0;
    }, r.getTop = function() {
      var s = r.props.scrollTop, l = r.getEnableScrollRange(), u = r.getEnableHeightRange();
      if (s === 0 || l === 0)
        return 0;
      var c = s / l;
      return c * u;
    }, r.showScroll = function() {
      var s = r.props, l = s.height, u = s.scrollHeight;
      return u > l;
    }, r;
  }
  return pn(n, [{
    key: "componentDidMount",
    value: function() {
      this.scrollbarRef.current.addEventListener("touchstart", this.onScrollbarTouchStart), this.thumbRef.current.addEventListener("touchstart", this.onMouseDown);
    }
  }, {
    key: "componentDidUpdate",
    value: function(i) {
      i.scrollTop !== this.props.scrollTop && this.delayHidden();
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this.removeEvents(), clearTimeout(this.visibleTimeout);
    }
  }, {
    key: "render",
    value: (
      // ====================== Render =======================
      function() {
        var i = this.state, o = i.dragging, a = i.visible, s = this.props, l = s.prefixCls, u = s.direction, c = this.getSpinHeight(), d = this.getTop(), v = this.showScroll(), h = v && a, p = u === "rtl" ? {
          left: 0
        } : {
          right: 0
        };
        return /* @__PURE__ */ f.createElement("div", {
          ref: this.scrollbarRef,
          className: Ee("".concat(l, "-scrollbar"), U({}, "".concat(l, "-scrollbar-show"), v)),
          style: D(D({
            width: 8,
            top: 0,
            bottom: 0
          }, p), {}, {
            position: "absolute",
            display: h ? null : "none"
          }),
          onMouseDown: this.onContainerMouseDown,
          onMouseMove: this.delayHidden
        }, /* @__PURE__ */ f.createElement("div", {
          ref: this.thumbRef,
          className: Ee("".concat(l, "-scrollbar-thumb"), U({}, "".concat(l, "-scrollbar-thumb-moving"), o)),
          style: {
            width: "100%",
            height: c,
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
}(f.Component);
function nE(e) {
  var t = e.children, n = e.setRef, r = f.useCallback(function(i) {
    n(i);
  }, []);
  return /* @__PURE__ */ f.cloneElement(t, {
    ref: r
  });
}
function rE(e, t, n, r, i, o) {
  var a = o.getKey;
  return e.slice(t, n + 1).map(function(s, l) {
    var u = t + l, c = i(s, u, {
      // style: status === 'MEASURE_START' ? { visibility: 'hidden' } : {},
    }), d = a(s);
    return /* @__PURE__ */ f.createElement(nE, {
      key: d,
      setRef: function(h) {
        return r(s, h);
      }
    }, c);
  });
}
var iE = /* @__PURE__ */ function() {
  function e() {
    hn(this, e), this.maps = void 0, this.maps = /* @__PURE__ */ Object.create(null);
  }
  return pn(e, [{
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
function oE(e, t, n) {
  var r = f.useState(0), i = F(r, 2), o = i[0], a = i[1], s = ae(/* @__PURE__ */ new Map()), l = ae(new iE()), u = ae();
  function c() {
    Ot.cancel(u.current);
  }
  function d() {
    c(), u.current = Ot(function() {
      s.current.forEach(function(h, p) {
        if (h && h.offsetParent) {
          var m = Na(h), b = m.offsetHeight;
          l.current.get(p) !== b && l.current.set(p, m.offsetHeight);
        }
      }), a(function(h) {
        return h + 1;
      });
    });
  }
  function v(h, p) {
    var m = e(h), b = s.current.get(m);
    p ? (s.current.set(m, p), d()) : s.current.delete(m), !b != !p && (p ? t?.(h) : n?.(h));
  }
  return ot(function() {
    return c;
  }, []), [v, d, l.current, o];
}
function aE(e, t, n, r, i, o, a, s) {
  var l = f.useRef();
  return function(u) {
    if (u == null) {
      s();
      return;
    }
    if (Ot.cancel(l.current), typeof u == "number")
      a(u);
    else if (u && Qe(u) === "object") {
      var c, d = u.align;
      "index" in u ? c = u.index : c = t.findIndex(function(m) {
        return i(m) === u.key;
      });
      var v = u.offset, h = v === void 0 ? 0 : v, p = function m(b, g) {
        if (!(b < 0 || !e.current)) {
          var y = e.current.clientHeight, S = !1, C = g;
          if (y) {
            for (var _ = g || d, E = 0, x = 0, I = 0, R = Math.min(t.length, c), N = 0; N <= R; N += 1) {
              var $ = i(t[N]);
              x = E;
              var w = n.get($);
              I = x + (w === void 0 ? r : w), E = I, N === c && w === void 0 && (S = !0);
            }
            var O = null;
            switch (_) {
              case "top":
                O = x - h;
                break;
              case "bottom":
                O = I - y + h;
                break;
              default: {
                var P = e.current.scrollTop, M = P + y;
                x < P ? C = "top" : I > M && (C = "bottom");
              }
            }
            O !== null && O !== e.current.scrollTop && a(O);
          }
          l.current = Ot(function() {
            S && o(), m(b - 1, C);
          }, 2);
        }
      };
      p(3);
    }
  };
}
function sE(e, t, n) {
  var r = e.length, i = t.length, o, a;
  if (r === 0 && i === 0)
    return null;
  r < i ? (o = e, a = t) : (o = t, a = e);
  var s = {
    __EMPTY_ITEM__: !0
  };
  function l(p) {
    return p !== void 0 ? n(p) : s;
  }
  for (var u = null, c = Math.abs(r - i) !== 1, d = 0; d < a.length; d += 1) {
    var v = l(o[d]), h = l(a[d]);
    if (v !== h) {
      u = d, c = c || v !== l(a[d + 1]);
      break;
    }
  }
  return u === null ? null : {
    index: u,
    multiple: c
  };
}
function lE(e, t, n) {
  var r = f.useState(e), i = F(r, 2), o = i[0], a = i[1], s = f.useState(null), l = F(s, 2), u = l[0], c = l[1];
  return f.useEffect(function() {
    var d = sE(o || [], e || [], t);
    d?.index !== void 0 && (n?.(d.index), c(e[d.index])), a(e);
  }, [e]), [u];
}
var uE = (typeof navigator > "u" ? "undefined" : Qe(navigator)) === "object" && /Firefox/i.test(navigator.userAgent);
const Eh = function(e, t) {
  var n = ae(!1), r = ae(null);
  function i() {
    clearTimeout(r.current), n.current = !0, r.current = setTimeout(function() {
      n.current = !1;
    }, 50);
  }
  var o = ae({
    top: e,
    bottom: t
  });
  return o.current.top = e, o.current.bottom = t, function(a) {
    var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, l = (
      // Pass origin wheel when on the top
      a < 0 && o.current.top || // Pass origin wheel when on the bottom
      a > 0 && o.current.bottom
    );
    return s && l ? (clearTimeout(r.current), n.current = !1) : (!l || n.current) && i(), !n.current && l;
  };
};
function cE(e, t, n, r) {
  var i = ae(0), o = ae(null), a = ae(null), s = ae(!1), l = Eh(t, n);
  function u(d) {
    if (e) {
      Ot.cancel(o.current);
      var v = d.deltaY;
      i.current += v, a.current = v, !l(v) && (uE || d.preventDefault(), o.current = Ot(function() {
        var h = s.current ? 10 : 1;
        r(i.current * h), i.current = 0;
      }));
    }
  }
  function c(d) {
    e && (s.current = d.detail === a.current);
  }
  return [u, c];
}
var fE = 14 / 15;
function dE(e, t, n) {
  var r = ae(!1), i = ae(0), o = ae(null), a = ae(null), s, l = function(v) {
    if (r.current) {
      var h = Math.ceil(v.touches[0].pageY), p = i.current - h;
      i.current = h, n(p) && v.preventDefault(), clearInterval(a.current), a.current = setInterval(function() {
        p *= fE, (!n(p, !0) || Math.abs(p) <= 0.1) && clearInterval(a.current);
      }, 16);
    }
  }, u = function() {
    r.current = !1, s();
  }, c = function(v) {
    s(), v.touches.length === 1 && !r.current && (r.current = !0, i.current = Math.ceil(v.touches[0].pageY), o.current = v.target, o.current.addEventListener("touchmove", l), o.current.addEventListener("touchend", u));
  };
  s = function() {
    o.current && (o.current.removeEventListener("touchmove", l), o.current.removeEventListener("touchend", u));
  }, Mt(function() {
    return e && t.current.addEventListener("touchstart", c), function() {
      var d;
      (d = t.current) === null || d === void 0 || d.removeEventListener("touchstart", c), s(), clearInterval(a.current);
    };
  }, [e]);
}
var vE = ["prefixCls", "className", "height", "itemHeight", "fullHeight", "style", "data", "children", "itemKey", "virtual", "direction", "component", "onScroll", "onVisibleChange", "innerProps"], hE = [], pE = {
  overflowY: "auto",
  overflowAnchor: "none"
};
function mE(e, t) {
  var n = e.prefixCls, r = n === void 0 ? "rc-virtual-list" : n, i = e.className, o = e.height, a = e.itemHeight, s = e.fullHeight, l = s === void 0 ? !0 : s, u = e.style, c = e.data, d = e.children, v = e.itemKey, h = e.virtual, p = e.direction, m = e.component, b = m === void 0 ? "div" : m, g = e.onScroll, y = e.onVisibleChange, S = e.innerProps, C = We(e, vE), _ = !!(h !== !1 && o && a), E = _ && c && a * c.length > o, x = rt(0), I = F(x, 2), R = I[0], N = I[1], $ = rt(!1), w = F($, 2), O = w[0], P = w[1], M = Ee(r, U({}, "".concat(r, "-rtl"), p === "rtl"), i), T = c || hE, A = ae(), k = ae(), H = ae(), Y = f.useCallback(function(re) {
    return typeof v == "function" ? v(re) : re?.[v];
  }, [v]), K = {
    getKey: Y
  };
  function V(re) {
    N(function(se) {
      var Be;
      typeof re == "function" ? Be = re(se) : Be = re;
      var tt = he(Be);
      return A.current.scrollTop = tt, tt;
    });
  }
  var G = ae({
    start: 0,
    end: T.length
  }), q = ae(), Z = lE(T, Y), ce = F(Z, 1), ee = ce[0];
  q.current = ee;
  var B = oE(Y, null, null), Q = F(B, 4), me = Q[0], te = Q[1], L = Q[2], le = Q[3], J = f.useMemo(function() {
    if (!_)
      return {
        scrollHeight: void 0,
        start: 0,
        end: T.length - 1,
        offset: void 0
      };
    if (!E) {
      var re;
      return {
        scrollHeight: ((re = k.current) === null || re === void 0 ? void 0 : re.offsetHeight) || 0,
        start: 0,
        end: T.length - 1,
        offset: void 0
      };
    }
    for (var se = 0, Be, tt, at, Fe = T.length, Le = 0; Le < Fe; Le += 1) {
      var ht = T[Le], bt = Y(ht), Ge = L.get(bt), xt = se + (Ge === void 0 ? a : Ge);
      xt >= R && Be === void 0 && (Be = Le, tt = se), xt > R + o && at === void 0 && (at = Le), se = xt;
    }
    return Be === void 0 && (Be = 0, tt = 0, at = Math.ceil(o / a)), at === void 0 && (at = T.length - 1), at = Math.min(at + 1, T.length), {
      scrollHeight: se,
      start: Be,
      end: at,
      offset: tt
    };
  }, [E, _, R, T, le, o]), pe = J.scrollHeight, ne = J.start, Ne = J.end, ye = J.offset;
  G.current.start = ne, G.current.end = Ne;
  var Ce = pe - o, fe = ae(Ce);
  fe.current = Ce;
  function he(re) {
    var se = re;
    return Number.isNaN(fe.current) || (se = Math.min(se, fe.current)), se = Math.max(se, 0), se;
  }
  var Ie = R <= 0, Ve = R >= Ce, ke = Eh(Ie, Ve);
  function Re(re) {
    var se = re;
    V(se);
  }
  function Ke(re) {
    var se = re.currentTarget.scrollTop;
    se !== R && V(se), g?.(re);
  }
  var ft = cE(_, Ie, Ve, function(re) {
    V(function(se) {
      var Be = se + re;
      return Be;
    });
  }), Ze = F(ft, 2), De = Ze[0], je = Ze[1];
  dE(_, A, function(re, se) {
    return ke(re, se) ? !1 : (De({
      preventDefault: function() {
      },
      deltaY: re
    }), !0);
  }), Mt(function() {
    function re(se) {
      _ && se.preventDefault();
    }
    return A.current.addEventListener("wheel", De), A.current.addEventListener("DOMMouseScroll", je), A.current.addEventListener("MozMousePixelScroll", re), function() {
      A.current && (A.current.removeEventListener("wheel", De), A.current.removeEventListener("DOMMouseScroll", je), A.current.removeEventListener("MozMousePixelScroll", re));
    };
  }, [_]);
  var Je = aE(A, T, L, a, Y, te, V, function() {
    var re;
    (re = H.current) === null || re === void 0 || re.delayHidden();
  });
  f.useImperativeHandle(t, function() {
    return {
      scrollTo: Je
    };
  }), Mt(function() {
    if (y) {
      var re = T.slice(ne, Ne + 1);
      y(re, T);
    }
  }, [ne, Ne, T]);
  var Rt = rE(T, ne, Ne, me, d, K), ze = null;
  return o && (ze = D(U({}, l ? "height" : "maxHeight", o), pE), _ && (ze.overflowY = "hidden", O && (ze.pointerEvents = "none"))), /* @__PURE__ */ f.createElement("div", ge({
    style: D(D({}, u), {}, {
      position: "relative"
    }),
    className: M
  }, C), /* @__PURE__ */ f.createElement(b, {
    className: "".concat(r, "-holder"),
    style: ze,
    ref: A,
    onScroll: Ke
  }, /* @__PURE__ */ f.createElement(Sh, {
    prefixCls: r,
    height: pe,
    offset: ye,
    onInnerResize: te,
    ref: k,
    innerProps: S
  }, Rt)), _ && /* @__PURE__ */ f.createElement(tE, {
    ref: H,
    prefixCls: r,
    scrollTop: R,
    height: o,
    scrollHeight: pe,
    count: T.length,
    direction: p,
    onScroll: Re,
    onStartMove: function() {
      P(!0);
    },
    onStopMove: function() {
      P(!1);
    }
  }));
}
var wh = /* @__PURE__ */ f.forwardRef(mE);
wh.displayName = "List";
var Ch = /* @__PURE__ */ f.createContext(null);
function gE() {
  return /(mac\sos|macintosh)/i.test(navigator.appVersion);
}
var bE = ["disabled", "title", "children", "style", "className"];
function yf(e) {
  return typeof e == "string" || typeof e == "number";
}
var yE = function(t, n) {
  var r = iS(), i = r.prefixCls, o = r.id, a = r.open, s = r.multiple, l = r.mode, u = r.searchValue, c = r.toggleOpen, d = r.notFoundContent, v = r.onPopupScroll, h = f.useContext(Ch), p = h.flattenOptions, m = h.onActiveValue, b = h.defaultActiveFirstOption, g = h.onSelect, y = h.menuItemSelectedIcon, S = h.rawValues, C = h.fieldNames, _ = h.virtual, E = h.direction, x = h.listHeight, I = h.listItemHeight, R = "".concat(i, "-item"), N = ho(function() {
    return p;
  }, [a, p], function(ee, B) {
    return B[0] && ee[1] !== B[1];
  }), $ = f.useRef(null), w = function(B) {
    B.preventDefault();
  }, O = function(B) {
    $.current && $.current.scrollTo(typeof B == "number" ? {
      index: B
    } : B);
  }, P = function(B) {
    for (var Q = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1, me = N.length, te = 0; te < me; te += 1) {
      var L = (B + te * Q + me) % me, le = N[L], J = le.group, pe = le.data;
      if (!J && !pe.disabled)
        return L;
    }
    return -1;
  }, M = f.useState(function() {
    return P(0);
  }), T = F(M, 2), A = T[0], k = T[1], H = function(B) {
    var Q = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    k(B);
    var me = {
      source: Q ? "keyboard" : "mouse"
    }, te = N[B];
    if (!te) {
      m(null, -1, me);
      return;
    }
    m(te.value, B, me);
  };
  ot(function() {
    H(b !== !1 ? P(0) : -1);
  }, [N.length, u]);
  var Y = f.useCallback(function(ee) {
    return S.has(ee) && l !== "combobox";
  }, [l, de(S).toString(), S.size]);
  ot(function() {
    var ee = setTimeout(function() {
      if (!s && a && S.size === 1) {
        var Q = Array.from(S)[0], me = N.findIndex(function(te) {
          var L = te.data;
          return L.value === Q;
        });
        me !== -1 && (H(me), O(me));
      }
    });
    if (a) {
      var B;
      (B = $.current) === null || B === void 0 || B.scrollTo(void 0);
    }
    return function() {
      return clearTimeout(ee);
    };
  }, [a, u, p.length]);
  var K = function(B) {
    B !== void 0 && g(B, {
      selected: !S.has(B)
    }), s || c(!1);
  };
  if (f.useImperativeHandle(n, function() {
    return {
      onKeyDown: function(B) {
        var Q = B.which, me = B.ctrlKey;
        switch (Q) {
          case j.N:
          case j.P:
          case j.UP:
          case j.DOWN: {
            var te = 0;
            if (Q === j.UP ? te = -1 : Q === j.DOWN ? te = 1 : gE() && me && (Q === j.N ? te = 1 : Q === j.P && (te = -1)), te !== 0) {
              var L = P(A + te, te);
              O(L), H(L, !0);
            }
            break;
          }
          case j.ENTER: {
            var le = N[A];
            le && !le.data.disabled ? K(le.value) : K(void 0), a && B.preventDefault();
            break;
          }
          case j.ESC:
            c(!1), a && B.stopPropagation();
        }
      },
      onKeyUp: function() {
      },
      scrollTo: function(B) {
        O(B);
      }
    };
  }), N.length === 0)
    return /* @__PURE__ */ f.createElement("div", {
      role: "listbox",
      id: "".concat(o, "_list"),
      className: "".concat(R, "-empty"),
      onMouseDown: w
    }, d);
  var V = Object.keys(C).map(function(ee) {
    return C[ee];
  }), G = function(B) {
    return B.label;
  };
  function q(ee, B) {
    var Q = ee.group;
    return {
      role: Q ? "presentation" : "option",
      id: "".concat(o, "_list_").concat(B)
    };
  }
  var Z = function(B) {
    var Q = N[B];
    if (!Q)
      return null;
    var me = Q.data || {}, te = me.value, L = Q.group, le = Aa(me, !0), J = G(Q);
    return Q ? /* @__PURE__ */ f.createElement("div", ge({
      "aria-label": typeof J == "string" && !L ? J : null
    }, le, {
      key: B
    }, q(Q, B), {
      "aria-selected": Y(te)
    }), te) : null;
  }, ce = {
    role: "listbox",
    id: "".concat(o, "_list")
  };
  return /* @__PURE__ */ f.createElement(f.Fragment, null, _ && /* @__PURE__ */ f.createElement("div", ge({}, ce, {
    style: {
      height: 0,
      width: 0,
      overflow: "hidden"
    }
  }), Z(A - 1), Z(A), Z(A + 1)), /* @__PURE__ */ f.createElement(wh, {
    itemKey: "key",
    ref: $,
    data: N,
    height: x,
    itemHeight: I,
    fullHeight: !1,
    onMouseDown: w,
    onScroll: v,
    virtual: _,
    direction: E,
    innerProps: _ ? null : ce
  }, function(ee, B) {
    var Q, me = ee.group, te = ee.groupOption, L = ee.data, le = ee.label, J = ee.value, pe = L.key;
    if (me) {
      var ne, Ne = (ne = L.title) !== null && ne !== void 0 ? ne : yf(le) ? le.toString() : void 0;
      return /* @__PURE__ */ f.createElement("div", {
        className: Ee(R, "".concat(R, "-group")),
        title: Ne
      }, le !== void 0 ? le : pe);
    }
    var ye = L.disabled, Ce = L.title;
    L.children;
    var fe = L.style, he = L.className, Ie = We(L, bE), Ve = is(Ie, V), ke = Y(J), Re = "".concat(R, "-option"), Ke = Ee(R, Re, he, (Q = {}, U(Q, "".concat(Re, "-grouped"), te), U(Q, "".concat(Re, "-active"), A === B && !ye), U(Q, "".concat(Re, "-disabled"), ye), U(Q, "".concat(Re, "-selected"), ke), Q)), ft = G(ee), Ze = !y || typeof y == "function" || ke, De = typeof ft == "number" ? ft : ft || J, je = yf(De) ? De.toString() : void 0;
    return Ce !== void 0 && (je = Ce), /* @__PURE__ */ f.createElement("div", ge({}, Aa(Ve), _ ? {} : q(ee, B), {
      "aria-selected": ke,
      className: Ke,
      title: je,
      onMouseMove: function() {
        A === B || ye || H(B);
      },
      onClick: function() {
        ye || K(J);
      },
      style: fe
    }), /* @__PURE__ */ f.createElement("div", {
      className: "".concat(Re, "-content")
    }, De), /* @__PURE__ */ f.isValidElement(y) || ke, Ze && /* @__PURE__ */ f.createElement(Va, {
      className: "".concat(R, "-option-state"),
      customizeIcon: y,
      customizeIconProps: {
        isSelected: ke
      }
    }, ke ? "✓" : null));
  }));
}, Oh = /* @__PURE__ */ f.forwardRef(yE);
Oh.displayName = "OptionList";
function _E(e) {
  var t = e.mode, n = e.options, r = e.children, i = e.backfill, o = e.allowClear, a = e.placeholder, s = e.getInputElement, l = e.showSearch, u = e.onSearch, c = e.defaultOpen, d = e.autoFocus, v = e.labelInValue, h = e.value, p = e.inputValue, m = e.optionLabelProp, b = ka(t), g = l !== void 0 ? l : b || t === "combobox", y = n || Iu(r);
  if ($e(t !== "tags" || y.every(function(E) {
    return !E.disabled;
  }), "Please avoid setting option to disabled in tags mode since user can always type text as tag."), t === "tags" || t === "combobox") {
    var S = y.some(function(E) {
      return E.options ? E.options.some(function(x) {
        return typeof ("value" in x ? x.value : x.key) == "number";
      }) : typeof ("value" in E ? E.value : E.key) == "number";
    });
    $e(!S, "`value` of Option should not use number type when `mode` is `tags` or `combobox`.");
  }
  if ($e(t !== "combobox" || !m, "`combobox` mode not support `optionLabelProp`. Please set `value` on Option directly."), $e(t === "combobox" || !i, "`backfill` only works with `combobox` mode."), $e(t === "combobox" || !s, "`getInputElement` only work with `combobox` mode."), ul(t !== "combobox" || !s || !o || !a, "Customize `getInputElement` should customize clear and placeholder logic instead of configuring `allowClear` and `placeholder`."), u && !g && t !== "combobox" && t !== "tags" && $e(!1, "`onSearch` should work with `showSearch` instead of use alone."), ul(!c || d, "`defaultOpen` makes Select open without focus which means it will not close by click outside. You can set `autoFocus` if needed."), h != null) {
    var C = Tu(h);
    $e(!v || C.every(function(E) {
      return Qe(E) === "object" && ("key" in E || "value" in E);
    }), "`value` should in shape of `{ value: string | number, label?: ReactNode }` when you set `labelInValue` to `true`"), $e(!b || Array.isArray(h), "`value` should be array when `mode` is `multiple` or `tags`");
  }
  if (r) {
    var _ = null;
    or(r).some(function(E) {
      if (!/* @__PURE__ */ f.isValidElement(E) || !E.type)
        return !1;
      var x = E, I = x.type;
      if (I.isSelectOption)
        return !1;
      if (I.isSelectOptGroup) {
        var R = or(E.props.children).every(function(N) {
          return !/* @__PURE__ */ f.isValidElement(N) || !E.type || N.type.isSelectOption ? !0 : (_ = N.type, !1);
        });
        return !R;
      }
      return _ = I, !0;
    }), _ && $e(!1, "`children` should be `Select.Option` or `Select.OptGroup` instead of `".concat(_.displayName || _.name || _, "`.")), $e(p === void 0, "`inputValue` is deprecated, please use `searchValue` instead.");
  }
}
function SE(e, t) {
  if (e) {
    var n = function r(i) {
      for (var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, a = 0; a < i.length; a++) {
        var s = i[a];
        if (s[t?.value] === null)
          return $e(!1, "`value` in Select options should not be `null`."), !0;
        if (!o && Array.isArray(s[t?.options]) && r(s[t?.options], !0))
          break;
      }
    };
    n(e);
  }
}
var EE = ["id", "mode", "prefixCls", "backfill", "fieldNames", "inputValue", "searchValue", "onSearch", "autoClearSearchValue", "onSelect", "onDeselect", "dropdownMatchSelectWidth", "filterOption", "filterSort", "optionFilterProp", "optionLabelProp", "options", "children", "defaultActiveFirstOption", "menuItemSelectedIcon", "virtual", "direction", "listHeight", "listItemHeight", "value", "defaultValue", "labelInValue", "onChange"], wE = ["inputValue"];
function CE(e) {
  return !e || Qe(e) !== "object";
}
var xh = /* @__PURE__ */ f.forwardRef(function(e, t) {
  var n = e.id, r = e.mode, i = e.prefixCls, o = i === void 0 ? "rc-select" : i, a = e.backfill, s = e.fieldNames, l = e.inputValue, u = e.searchValue, c = e.onSearch, d = e.autoClearSearchValue, v = d === void 0 ? !0 : d, h = e.onSelect, p = e.onDeselect, m = e.dropdownMatchSelectWidth, b = m === void 0 ? !0 : m, g = e.filterOption, y = e.filterSort, S = e.optionFilterProp, C = e.optionLabelProp, _ = e.options, E = e.children, x = e.defaultActiveFirstOption, I = e.menuItemSelectedIcon, R = e.virtual, N = e.direction, $ = e.listHeight, w = $ === void 0 ? 200 : $, O = e.listItemHeight, P = O === void 0 ? 20 : O, M = e.value, T = e.defaultValue, A = e.labelInValue, k = e.onChange, H = We(e, EE), Y = XS(n), K = ka(r), V = !!(!_ && E), G = f.useMemo(function() {
    return g === void 0 && r === "combobox" ? !1 : g;
  }, [g, r]), q = f.useMemo(
    function() {
      return yh(s, V);
    },
    /* eslint-disable react-hooks/exhaustive-deps */
    [
      // We stringify fieldNames to avoid unnecessary re-renders.
      JSON.stringify(s),
      V
    ]
    /* eslint-enable react-hooks/exhaustive-deps */
  ), Z = Bn("", {
    value: u !== void 0 ? u : l,
    postState: function(W) {
      return W || "";
    }
  }), ce = F(Z, 2), ee = ce[0], B = ce[1], Q = ZS(_, E, q, S, C), me = Q.valueOptions, te = Q.labelOptions, L = Q.options, le = f.useCallback(function(X) {
    var W = Tu(X);
    return W.map(function(ue) {
      var ve, Pe, qe, ut, yt;
      if (CE(ue))
        ve = ue;
      else {
        var _t;
        qe = ue.key, Pe = ue.label, ve = (_t = ue.value) !== null && _t !== void 0 ? _t : qe;
      }
      var nt = me.get(ve);
      if (nt) {
        var Et;
        if (Pe === void 0 && (Pe = nt?.[C || q.label]), qe === void 0 && (qe = (Et = nt?.key) !== null && Et !== void 0 ? Et : ve), ut = nt?.disabled, yt = nt?.title, process.env.NODE_ENV !== "production" && !C) {
          var dt = nt?.[q.label];
          dt !== void 0 && !/* @__PURE__ */ f.isValidElement(dt) && !/* @__PURE__ */ f.isValidElement(Pe) && dt !== Pe && $e(!1, "`label` of `value` is not same as `label` in Select options.");
        }
      }
      return {
        label: Pe,
        value: ve,
        key: qe,
        disabled: ut,
        title: yt
      };
    });
  }, [q, C, me]), J = Bn(T, {
    value: M
  }), pe = F(J, 2), ne = pe[0], Ne = pe[1], ye = f.useMemo(function() {
    var X, W = le(ne);
    return r === "combobox" && !((X = W[0]) !== null && X !== void 0 && X.value) ? [] : W;
  }, [ne, le, r]), Ce = WS(ye, me), fe = F(Ce, 2), he = fe[0], Ie = fe[1], Ve = f.useMemo(function() {
    if (!r && he.length === 1) {
      var X = he[0];
      if (X.value === null && (X.label === null || X.label === void 0))
        return [];
    }
    return he.map(function(W) {
      var ue;
      return D(D({}, W), {}, {
        label: (ue = W.label) !== null && ue !== void 0 ? ue : W.value
      });
    });
  }, [r, he]), ke = f.useMemo(function() {
    return new Set(he.map(function(X) {
      return X.value;
    }));
  }, [he]);
  f.useEffect(function() {
    if (r === "combobox") {
      var X, W = (X = he[0]) === null || X === void 0 ? void 0 : X.value;
      B(SS(W) ? String(W) : "");
    }
  }, [he]);
  var Re = gf(function(X, W) {
    var ue, ve = W ?? X;
    return ue = {}, U(ue, q.value, X), U(ue, q.label, ve), ue;
  }), Ke = f.useMemo(function() {
    if (r !== "tags")
      return L;
    var X = de(L), W = function(ve) {
      return me.has(ve);
    };
    return de(he).sort(function(ue, ve) {
      return ue.value < ve.value ? -1 : 1;
    }).forEach(function(ue) {
      var ve = ue.value;
      W(ve) || X.push(Re(ve, ue.label));
    }), X;
  }, [Re, L, me, he, r]), ft = KS(Ke, q, ee, G, S), Ze = f.useMemo(function() {
    return r !== "tags" || !ee || ft.some(function(X) {
      return X[S || "value"] === ee;
    }) ? ft : [Re(ee)].concat(de(ft));
  }, [Re, S, r, ft, ee]), De = f.useMemo(function() {
    return y ? de(Ze).sort(function(X, W) {
      return y(X, W);
    }) : Ze;
  }, [Ze, y]), je = f.useMemo(function() {
    return HS(De, {
      fieldNames: q,
      childrenAsData: V
    });
  }, [De, q, V]), Je = function(W) {
    var ue = le(W);
    if (Ne(ue), k && // Trigger event only when value changed
    (ue.length !== he.length || ue.some(function(qe, ut) {
      var yt;
      return ((yt = he[ut]) === null || yt === void 0 ? void 0 : yt.value) !== qe?.value;
    }))) {
      var ve = A ? ue : ue.map(function(qe) {
        return qe.value;
      }), Pe = ue.map(function(qe) {
        return Ul(Ie(qe.value));
      });
      k(
        // Value
        K ? ve : ve[0],
        // Option
        K ? Pe : Pe[0]
      );
    }
  }, Rt = f.useState(null), ze = F(Rt, 2), re = ze[0], se = ze[1], Be = f.useState(0), tt = F(Be, 2), at = tt[0], Fe = tt[1], Le = x !== void 0 ? x : r !== "combobox", ht = f.useCallback(function(X, W) {
    var ue = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, ve = ue.source, Pe = ve === void 0 ? "keyboard" : ve;
    Fe(W), a && r === "combobox" && X !== null && Pe === "keyboard" && se(String(X));
  }, [a, r]), bt = function(W, ue, ve) {
    var Pe = function() {
      var $t, Oe = Ie(W);
      return [A ? {
        label: Oe?.[q.label],
        value: W,
        key: ($t = Oe?.key) !== null && $t !== void 0 ? $t : W
      } : W, Ul(Oe)];
    };
    if (ue && h) {
      var qe = Pe(), ut = F(qe, 2), yt = ut[0], _t = ut[1];
      h(yt, _t);
    } else if (!ue && p && ve !== "clear") {
      var nt = Pe(), Et = F(nt, 2), dt = Et[0], Wt = Et[1];
      p(dt, Wt);
    }
  }, Ge = gf(function(X, W) {
    var ue, ve = K ? W.selected : !0;
    ve ? ue = K ? [].concat(de(he), [X]) : [X] : ue = he.filter(function(Pe) {
      return Pe.value !== X;
    }), Je(ue), bt(X, ve), r === "combobox" ? se("") : (!ka || v) && (B(""), se(""));
  }), xt = function(W, ue) {
    Je(W);
    var ve = ue.type, Pe = ue.values;
    (ve === "remove" || ve === "clear") && Pe.forEach(function(qe) {
      bt(qe.value, !1, ve);
    });
  }, Nt = function(W, ue) {
    if (B(W), se(null), ue.source === "submit") {
      var ve = (W || "").trim();
      if (ve) {
        var Pe = Array.from(new Set([].concat(de(ke), [ve])));
        Je(Pe), bt(ve, !0), B("");
      }
      return;
    }
    ue.source !== "blur" && (r === "combobox" && Je(W), c?.(W));
  }, Tt = function(W) {
    var ue = W;
    r !== "tags" && (ue = W.map(function(Pe) {
      var qe = te.get(Pe);
      return qe?.value;
    }).filter(function(Pe) {
      return Pe !== void 0;
    }));
    var ve = Array.from(new Set([].concat(de(ke), de(ue))));
    Je(ve), ve.forEach(function(Pe) {
      bt(Pe, !0);
    });
  }, be = f.useMemo(function() {
    var X = R !== !1 && b !== !1;
    return D(D({}, Q), {}, {
      flattenOptions: je,
      onActiveValue: ht,
      defaultActiveFirstOption: Le,
      onSelect: Ge,
      menuItemSelectedIcon: I,
      rawValues: ke,
      fieldNames: q,
      virtual: X,
      direction: N,
      listHeight: w,
      listItemHeight: P,
      childrenAsData: V
    });
  }, [Q, je, ht, Le, Ge, I, ke, q, R, b, w, P, V]);
  return process.env.NODE_ENV !== "production" && (_E(e), SE(L, q)), /* @__PURE__ */ f.createElement(Ch.Provider, {
    value: be
  }, /* @__PURE__ */ f.createElement(_h, ge({}, H, {
    // >>> MISC
    id: Y,
    prefixCls: o,
    ref: t,
    omitDomProps: wE,
    mode: r,
    displayValues: Ve,
    onDisplayValuesChange: xt,
    direction: N,
    searchValue: ee,
    onSearch: Nt,
    autoClearSearchValue: v,
    onSearchSplit: Tt,
    dropdownMatchSelectWidth: b,
    OptionList: Oh,
    emptyOptions: !je.length,
    activeValue: re,
    activeDescendantId: "".concat(Y, "_list_").concat(at)
  })));
});
process.env.NODE_ENV !== "production" && (xh.displayName = "Select");
var Fu = xh;
Fu.Option = Du;
Fu.OptGroup = Au;
function OE(e, t, n) {
  return Ee({
    [`${e}-status-success`]: t === "success",
    [`${e}-status-warning`]: t === "warning",
    [`${e}-status-error`]: t === "error",
    [`${e}-status-validating`]: t === "validating",
    [`${e}-has-feedback`]: n
  });
}
const xE = (e, t) => t || e, Nh = () => {
  const [, e] = go(), n = new zt(e.colorBgBase).toHsl().l < 0.5 ? {
    opacity: 0.65
  } : {};
  return /* @__PURE__ */ f.createElement("svg", {
    style: n,
    width: "184",
    height: "152",
    viewBox: "0 0 184 152",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ f.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /* @__PURE__ */ f.createElement("g", {
    transform: "translate(24 31.67)"
  }, /* @__PURE__ */ f.createElement("ellipse", {
    fillOpacity: ".8",
    fill: "#F5F5F7",
    cx: "67.797",
    cy: "106.89",
    rx: "67.797",
    ry: "12.668"
  }), /* @__PURE__ */ f.createElement("path", {
    d: "M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z",
    fill: "#AEB8C2"
  }), /* @__PURE__ */ f.createElement("path", {
    d: "M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z",
    fill: "url(#linearGradient-1)",
    transform: "translate(13.56)"
  }), /* @__PURE__ */ f.createElement("path", {
    d: "M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z",
    fill: "#F5F5F7"
  }), /* @__PURE__ */ f.createElement("path", {
    d: "M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z",
    fill: "#DCE0E6"
  })), /* @__PURE__ */ f.createElement("path", {
    d: "M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z",
    fill: "#DCE0E6"
  }), /* @__PURE__ */ f.createElement("g", {
    transform: "translate(149.65 15.383)",
    fill: "#FFF"
  }, /* @__PURE__ */ f.createElement("ellipse", {
    cx: "20.654",
    cy: "3.167",
    rx: "2.849",
    ry: "2.815"
  }), /* @__PURE__ */ f.createElement("path", {
    d: "M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"
  }))));
};
process.env.NODE_ENV !== "production" && (Nh.displayName = "EmptyImage");
const NE = Nh, Ph = () => {
  const [, e] = go(), {
    colorFill: t,
    colorFillTertiary: n,
    colorFillQuaternary: r,
    colorBgContainer: i
  } = e, {
    borderColor: o,
    shadowColor: a,
    contentColor: s
  } = Fr(() => ({
    borderColor: new zt(t).onBackground(i).toHexShortString(),
    shadowColor: new zt(n).onBackground(i).toHexShortString(),
    contentColor: new zt(r).onBackground(i).toHexShortString()
  }), [t, n, r, i]);
  return /* @__PURE__ */ f.createElement("svg", {
    width: "64",
    height: "41",
    viewBox: "0 0 64 41",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ f.createElement("g", {
    transform: "translate(0 1)",
    fill: "none",
    fillRule: "evenodd"
  }, /* @__PURE__ */ f.createElement("ellipse", {
    fill: a,
    cx: "32",
    cy: "33",
    rx: "32",
    ry: "7"
  }), /* @__PURE__ */ f.createElement("g", {
    fillRule: "nonzero",
    stroke: o
  }, /* @__PURE__ */ f.createElement("path", {
    d: "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"
  }), /* @__PURE__ */ f.createElement("path", {
    d: "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",
    fill: s
  }))));
};
process.env.NODE_ENV !== "production" && (Ph.displayName = "SimpleImage");
const PE = Ph, ME = (e) => {
  const {
    componentCls: t,
    margin: n,
    marginXS: r,
    marginXL: i,
    fontSize: o,
    lineHeight: a
  } = e;
  return {
    [t]: {
      marginInline: r,
      fontSize: o,
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
        marginBlock: i,
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
}, RE = wu("Empty", (e) => {
  const {
    componentCls: t,
    controlHeightLG: n
  } = e, r = wn(e, {
    emptyImgCls: `${t}-img`,
    emptyImgHeight: n * 2.5,
    emptyImgHeightMD: n,
    emptyImgHeightSM: n * 0.875
  });
  return [ME(r)];
});
var TE = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  return n;
};
const Mh = /* @__PURE__ */ f.createElement(NE, null), Rh = /* @__PURE__ */ f.createElement(PE, null), vs = (e) => {
  var {
    className: t,
    rootClassName: n,
    prefixCls: r,
    image: i = Mh,
    description: o,
    children: a,
    imageStyle: s
  } = e, l = TE(e, ["className", "rootClassName", "prefixCls", "image", "description", "children", "imageStyle"]);
  const {
    getPrefixCls: u,
    direction: c
  } = f.useContext(lr), d = u("empty", r), [v, h] = RE(d), [p] = Fb("Empty"), m = typeof o < "u" ? o : p?.description, b = typeof m == "string" ? m : "empty";
  let g = null;
  return typeof i == "string" ? g = /* @__PURE__ */ f.createElement("img", {
    alt: b,
    src: i
  }) : g = i, v(/* @__PURE__ */ f.createElement("div", Object.assign({
    className: Ee(h, d, {
      [`${d}-normal`]: i === Rh,
      [`${d}-rtl`]: c === "rtl"
    }, t, n)
  }, l), /* @__PURE__ */ f.createElement("div", {
    className: `${d}-image`,
    style: s
  }, g), m && /* @__PURE__ */ f.createElement("div", {
    className: `${d}-description`
  }, m), a && /* @__PURE__ */ f.createElement("div", {
    className: `${d}-footer`
  }, a)));
};
vs.PRESENTED_IMAGE_DEFAULT = Mh;
vs.PRESENTED_IMAGE_SIMPLE = Rh;
process.env.NODE_ENV !== "production" && (vs.displayName = "Empty");
const Li = vs, $E = (e) => {
  const {
    componentName: t
  } = e, {
    getPrefixCls: n
  } = Gn(lr), r = n("empty");
  switch (t) {
    case "Table":
    case "List":
      return /* @__PURE__ */ Xe.createElement(Li, {
        image: Li.PRESENTED_IMAGE_SIMPLE
      });
    case "Select":
    case "TreeSelect":
    case "Cascader":
    case "Transfer":
    case "Mentions":
      return /* @__PURE__ */ Xe.createElement(Li, {
        image: Li.PRESENTED_IMAGE_SIMPLE,
        className: `${r}-small`
      });
    default:
      return /* @__PURE__ */ Xe.createElement(Li, null);
  }
}, IE = $E, AE = (e) => {
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
}, DE = (e) => {
  const {
    antCls: t,
    componentCls: n
  } = e, r = `${n}-item`;
  return [
    {
      [`${n}-dropdown`]: Object.assign(Object.assign({}, mo(e)), {
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
          animationName: ih
        },
        [`
            &${t}-slide-up-enter${t}-slide-up-enter-active${n}-dropdown-placement-topLeft,
            &${t}-slide-up-appear${t}-slide-up-appear-active${n}-dropdown-placement-topLeft
          `]: {
          animationName: ah
        },
        [`&${t}-slide-up-leave${t}-slide-up-leave-active${n}-dropdown-placement-bottomLeft`]: {
          animationName: oh
        },
        [`&${t}-slide-up-leave${t}-slide-up-leave-active${n}-dropdown-placement-topLeft`]: {
          animationName: sh
        },
        "&-hidden": {
          display: "none"
        },
        [`${r}`]: Object.assign(Object.assign({}, AE(e)), {
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
            }, $a),
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
    Fa(e, "slide-up"),
    Fa(e, "slide-down"),
    of(e, "move-up"),
    of(e, "move-down")
  ];
}, FE = DE, Gr = 2, Th = (e) => {
  let {
    controlHeightSM: t,
    controlHeight: n,
    lineWidth: r
  } = e;
  const i = (n - t) / 2 - r, o = Math.ceil(i / 2);
  return [i, o];
};
function Xs(e, t) {
  const {
    componentCls: n,
    iconCls: r
  } = e, i = `${n}-selection-overflow`, o = e.controlHeightSM, [a] = Th(e), s = t ? `${n}-${t}` : "";
  return {
    [`${n}-multiple${s}`]: {
      fontSize: e.fontSize,
      /**
       * Do not merge `height` & `line-height` under style with `selection` & `search`, since chrome
       * may update to redesign with its align logic.
       */
      // =========================== Overflow ===========================
      [i]: {
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
        padding: `${a - Gr}px ${Gr * 2}px`,
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
          margin: `${Gr}px 0`,
          lineHeight: `${o}px`,
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
        height: o,
        marginTop: Gr,
        marginBottom: Gr,
        lineHeight: `${o - e.lineWidth * 2}px`,
        background: e.colorFillSecondary,
        borderRadius: e.borderRadiusSM,
        cursor: "default",
        transition: `font-size ${e.motionDurationSlow}, line-height ${e.motionDurationSlow}, height ${e.motionDurationSlow}`,
        userSelect: "none",
        marginInlineEnd: Gr * 2,
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
        "&-remove": Object.assign(Object.assign({}, Eu()), {
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
      [`${i}-item + ${i}-item`]: {
        [`${n}-selection-search`]: {
          marginInlineStart: 0
        }
      },
      [`${n}-selection-search`]: {
        display: "inline-flex",
        position: "relative",
        maxWidth: "100%",
        marginInlineStart: e.inputPaddingHorizontalBase - a,
        [`
          &-input,
          &-mirror
        `]: {
          height: o,
          fontFamily: e.fontFamily,
          lineHeight: `${o}px`,
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
const LE = (e) => {
  const {
    componentCls: t
  } = e, n = wn(e, {
    controlHeight: e.controlHeightSM,
    controlHeightSM: e.controlHeightXS,
    borderRadius: e.borderRadiusSM,
    borderRadiusSM: e.borderRadiusXS
  }), r = wn(e, {
    fontSize: e.fontSizeLG,
    controlHeight: e.controlHeightLG,
    controlHeightSM: e.controlHeight,
    borderRadius: e.borderRadiusLG,
    borderRadiusSM: e.borderRadius
  }), [, i] = Th(e);
  return [
    Xs(e),
    // ======================== Small ========================
    Xs(n, "sm"),
    // Padding
    {
      [`${t}-multiple${t}-sm`]: {
        [`${t}-selection-placeholder`]: {
          insetInline: e.controlPaddingHorizontalSM - e.lineWidth
        },
        // https://github.com/ant-design/ant-design/issues/29559
        [`${t}-selection-search`]: {
          marginInlineStart: i
        }
      }
    },
    // ======================== Large ========================
    Xs(r, "lg")
  ];
}, VE = LE;
function Ys(e, t) {
  const {
    componentCls: n,
    inputPaddingHorizontalBase: r,
    borderRadius: i
  } = e, o = e.controlHeight - e.lineWidth * 2, a = Math.ceil(e.fontSize * 1.25), s = t ? `${n}-${t}` : "";
  return {
    [`${n}-single${s}`]: {
      fontSize: e.fontSize,
      // ========================= Selector =========================
      [`${n}-selector`]: Object.assign(Object.assign({}, mo(e)), {
        display: "flex",
        borderRadius: i,
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
          lineHeight: `${o}px`,
          transition: `all ${e.motionDurationSlow}, visibility 0s`,
          // Firefox inline-block position calculation is not same as Chrome & Safari. Patch this:
          "@supports (-moz-appearance: meterbar)": {
            lineHeight: `${o}px`
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
            height: o
          },
          "&:after": {
            lineHeight: `${o}px`
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
function kE(e) {
  const {
    componentCls: t
  } = e, n = e.controlPaddingHorizontalSM - e.lineWidth;
  return [
    Ys(e),
    // ======================== Small ========================
    // Shared
    Ys(wn(e, {
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
    Ys(wn(e, {
      controlHeight: e.controlHeightLG,
      fontSize: e.fontSizeLG,
      borderRadius: e.borderRadiusLG
    }), "lg")
  ];
}
const jE = (e) => {
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
}, Qs = function(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  const {
    componentCls: r,
    borderHoverColor: i,
    outlineColor: o,
    antCls: a
  } = t, s = n ? {
    [`${r}-selector`]: {
      borderColor: i
    }
  } : {};
  return {
    [e]: {
      [`&:not(${r}-disabled):not(${r}-customize-input):not(${a}-pagination-size-changer)`]: Object.assign(Object.assign({}, s), {
        [`${r}-focused& ${r}-selector`]: {
          borderColor: i,
          boxShadow: `0 0 0 ${t.controlOutlineWidth}px ${o}`,
          outline: 0
        },
        [`&:hover ${r}-selector`]: {
          borderColor: i
        }
      })
    }
  };
}, HE = (e) => {
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
}, zE = (e) => {
  const {
    componentCls: t,
    inputPaddingHorizontalBase: n,
    iconCls: r
  } = e;
  return {
    [t]: Object.assign(Object.assign({}, mo(e)), {
      position: "relative",
      display: "inline-block",
      cursor: "pointer",
      [`&:not(${t}-customize-input) ${t}-selector`]: Object.assign(Object.assign({}, jE(e)), HE(e)),
      // [`&:not(&-disabled):hover ${selectCls}-selector`]: {
      //   ...genHoverStyle(token),
      // },
      // ======================== Selection ========================
      [`${t}-selection-item`]: Object.assign({
        flex: 1,
        fontWeight: "normal"
      }, $a),
      // ======================= Placeholder =======================
      [`${t}-selection-placeholder`]: Object.assign(Object.assign({}, $a), {
        flex: 1,
        color: e.colorTextPlaceholder,
        pointerEvents: "none"
      }),
      // ========================== Arrow ==========================
      [`${t}-arrow`]: Object.assign(Object.assign({}, Eu()), {
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
}, BE = (e) => {
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
    zE(e),
    // Single
    kE(e),
    // Multiple
    VE(e),
    // Dropdown
    FE(e),
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
    Qs(t, wn(e, {
      borderHoverColor: e.colorPrimaryHover,
      outlineColor: e.controlOutline
    })),
    Qs(`${t}-status-error`, wn(e, {
      borderHoverColor: e.colorErrorHover,
      outlineColor: e.colorErrorOutline
    }), !0),
    Qs(`${t}-status-warning`, wn(e, {
      borderHoverColor: e.colorWarningHover,
      outlineColor: e.colorWarningOutline
    }), !0),
    // =====================================================
    // ==             Space Compact                       ==
    // =====================================================
    Dy(e, {
      borderElCls: `${t}-selector`,
      focusElCls: `${t}-focused`
    })
  ];
}, UE = wu("Select", (e, t) => {
  let {
    rootPrefixCls: n
  } = t;
  const r = wn(e, {
    rootPrefixCls: n,
    inputPaddingHorizontalBase: e.paddingSM - 1
  });
  return [BE(r)];
}, (e) => ({
  zIndexPopup: e.zIndexPopupBase + 50
})), WE = (e) => {
  const n = {
    overflow: {
      adjustX: !0,
      adjustY: !0,
      shiftY: !0
    },
    htmlRegion: e === "scroll" ? "scroll" : "visible"
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
function KE(e, t) {
  return e || WE(t);
}
function GE(e) {
  return e ?? !0;
}
var qE = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z" } }] }, name: "check", theme: "outlined" };
const XE = qE;
var $h = function(t, n) {
  return /* @__PURE__ */ f.createElement(Er, ge({}, t, {
    ref: n,
    icon: XE
  }));
};
process.env.NODE_ENV !== "production" && ($h.displayName = "CheckOutlined");
const YE = /* @__PURE__ */ f.forwardRef($h);
var QE = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z" } }] }, name: "down", theme: "outlined" };
const JE = QE;
var Ih = function(t, n) {
  return /* @__PURE__ */ f.createElement(Er, ge({}, t, {
    ref: n,
    icon: JE
  }));
};
process.env.NODE_ENV !== "production" && (Ih.displayName = "DownOutlined");
const ZE = /* @__PURE__ */ f.forwardRef(Ih);
var e1 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" } }] }, name: "search", theme: "outlined" };
const t1 = e1;
var Ah = function(t, n) {
  return /* @__PURE__ */ f.createElement(Er, ge({}, t, {
    ref: n,
    icon: t1
  }));
};
process.env.NODE_ENV !== "production" && (Ah.displayName = "SearchOutlined");
const n1 = /* @__PURE__ */ f.forwardRef(Ah);
function r1(e) {
  let {
    suffixIcon: t,
    clearIcon: n,
    menuItemSelectedIcon: r,
    removeIcon: i,
    loading: o,
    multiple: a,
    hasFeedback: s,
    prefixCls: l,
    showArrow: u,
    feedbackIcon: c
  } = e;
  const d = n ?? /* @__PURE__ */ f.createElement(_y, null), v = (b) => /* @__PURE__ */ f.createElement(f.Fragment, null, u !== !1 && b, s && c);
  let h = null;
  if (t !== void 0)
    h = v(t);
  else if (o)
    h = v(/* @__PURE__ */ f.createElement(Ry, {
      spin: !0
    }));
  else {
    const b = `${l}-suffix`;
    h = (g) => {
      let {
        open: y,
        showSearch: S
      } = g;
      return v(y && S ? /* @__PURE__ */ f.createElement(n1, {
        className: b
      }) : /* @__PURE__ */ f.createElement(ZE, {
        className: b
      }));
    };
  }
  let p = null;
  r !== void 0 ? p = r : a ? p = /* @__PURE__ */ f.createElement(YE, null) : p = null;
  let m = null;
  return i !== void 0 ? m = i : m = /* @__PURE__ */ f.createElement(Wv, null), {
    clearIcon: d,
    suffixIcon: h,
    itemIcon: p,
    removeIcon: m
  };
}
var i1 = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  return n;
};
const Dh = "SECRET_COMBOBOX_MODE_DO_NOT_USE", Fh = (e, t) => {
  var n, {
    prefixCls: r,
    bordered: i = !0,
    className: o,
    rootClassName: a,
    getPopupContainer: s,
    popupClassName: l,
    dropdownClassName: u,
    listHeight: c = 256,
    placement: d,
    listItemHeight: v = 24,
    size: h,
    disabled: p,
    notFoundContent: m,
    status: b,
    showArrow: g,
    builtinPlacements: y,
    dropdownMatchSelectWidth: S,
    popupMatchSelectWidth: C,
    direction: _
  } = e, E = i1(e, ["prefixCls", "bordered", "className", "rootClassName", "getPopupContainer", "popupClassName", "dropdownClassName", "listHeight", "placement", "listItemHeight", "size", "disabled", "notFoundContent", "status", "showArrow", "builtinPlacements", "dropdownMatchSelectWidth", "popupMatchSelectWidth", "direction"]);
  const {
    getPopupContainer: x,
    getPrefixCls: I,
    renderEmpty: R,
    direction: N,
    virtual: $,
    popupMatchSelectWidth: w,
    popupOverflow: O,
    select: P
  } = f.useContext(lr), M = I("select", r), T = I(), A = _ ?? N, {
    compactSize: k,
    compactItemClassnames: H
  } = $y(M, A), [Y, K] = UE(M), V = f.useMemo(() => {
    const {
      mode: ke
    } = E;
    if (ke !== "combobox")
      return ke === Dh ? "combobox" : ke;
  }, [E.mode]), G = V === "multiple" || V === "tags", q = GE(g), Z = (n = C ?? S) !== null && n !== void 0 ? n : w, {
    status: ce,
    hasFeedback: ee,
    isFormItemInput: B,
    feedbackIcon: Q
  } = f.useContext(j_), me = xE(ce, b);
  let te;
  m !== void 0 ? te = m : V === "combobox" ? te = null : te = R?.("Select") || /* @__PURE__ */ f.createElement(IE, {
    componentName: "Select"
  });
  const {
    suffixIcon: L,
    itemIcon: le,
    removeIcon: J,
    clearIcon: pe
  } = r1(Object.assign(Object.assign({}, E), {
    multiple: G,
    hasFeedback: ee,
    feedbackIcon: Q,
    showArrow: q,
    prefixCls: M
  })), ne = is(E, ["suffixIcon", "itemIcon"]), Ne = Ee(l || u, {
    [`${M}-dropdown-${A}`]: A === "rtl"
  }, a, K), ye = Cu((ke) => {
    var Re;
    return (Re = h ?? k) !== null && Re !== void 0 ? Re : ke;
  }), Ce = f.useContext(xv), fe = p ?? Ce, he = Ee({
    [`${M}-lg`]: ye === "large",
    [`${M}-sm`]: ye === "small",
    [`${M}-rtl`]: A === "rtl",
    [`${M}-borderless`]: !i,
    [`${M}-in-form-item`]: B
  }, OE(M, me, ee), H, o, a, K), Ie = f.useMemo(() => d !== void 0 ? d : A === "rtl" ? "bottomRight" : "bottomLeft", [d, A]), Ve = KE(y, O);
  return process.env.NODE_ENV !== "production" && (process.env.NODE_ENV !== "production" && qn(!u, "Select", "`dropdownClassName` is deprecated. Please use `popupClassName` instead."), process.env.NODE_ENV !== "production" && qn(S === void 0, "Select", "`dropdownMatchSelectWidth` is deprecated. Please use `popupMatchSelectWidth` instead.")), Y(/* @__PURE__ */ f.createElement(Fu, Object.assign({
    ref: t,
    virtual: $,
    showSearch: P?.showSearch
  }, ne, {
    dropdownMatchSelectWidth: Z,
    builtinPlacements: Ve,
    transitionName: qv(T, Fy(d), E.transitionName),
    listHeight: c,
    listItemHeight: v,
    mode: V,
    prefixCls: M,
    placement: Ie,
    direction: A,
    inputIcon: L,
    menuItemSelectedIcon: le,
    removeIcon: J,
    clearIcon: pe,
    notFoundContent: te,
    className: he,
    getPopupContainer: s || x,
    dropdownClassName: Ne,
    showArrow: ee || q,
    disabled: fe
  })));
};
process.env.NODE_ENV !== "production" && (Fh.displayName = "Select");
const xi = /* @__PURE__ */ f.forwardRef(Fh), o1 = rS(xi);
xi.SECRET_COMBOBOX_MODE_DO_NOT_USE = Dh;
xi.Option = Du;
xi.OptGroup = Au;
xi._InternalPanelDoNotUseOrYouWillBeFired = o1;
const Lh = xi;
var a1 = j.ESC, s1 = j.TAB;
function l1(e) {
  var t = e.visible, n = e.triggerRef, r = e.onVisibleChange, i = e.autoFocus, o = e.overlayRef, a = f.useRef(!1), s = function() {
    if (t) {
      var d, v;
      (d = n.current) === null || d === void 0 || (v = d.focus) === null || v === void 0 || v.call(d), r?.(!1);
    }
  }, l = function() {
    var d;
    return (d = o.current) !== null && d !== void 0 && d.focus ? (o.current.focus(), a.current = !0, !0) : !1;
  }, u = function(d) {
    switch (d.keyCode) {
      case a1:
        s();
        break;
      case s1: {
        var v = !1;
        a.current || (v = l()), v ? d.preventDefault() : s();
        break;
      }
    }
  };
  f.useEffect(function() {
    return t ? (window.addEventListener("keydown", u), i && Ot(l, 3), function() {
      window.removeEventListener("keydown", u), a.current = !1;
    }) : function() {
      a.current = !1;
    };
  }, [t]);
}
var u1 = /* @__PURE__ */ wa(function(e, t) {
  var n = e.overlay, r = e.arrow, i = e.prefixCls, o = Fr(function() {
    var s;
    return typeof n == "function" ? s = n() : s = n, s;
  }, [n]), a = wi(t, o?.ref);
  return /* @__PURE__ */ Xe.createElement(Xe.Fragment, null, r && /* @__PURE__ */ Xe.createElement("div", {
    className: "".concat(i, "-arrow")
  }), /* @__PURE__ */ Xe.cloneElement(o, {
    ref: Ci(o) ? a : void 0
  }));
}), qr = {
  adjustX: 1,
  adjustY: 1
}, Xr = [0, 0], c1 = {
  topLeft: {
    points: ["bl", "tl"],
    overflow: qr,
    offset: [0, -4],
    targetOffset: Xr
  },
  top: {
    points: ["bc", "tc"],
    overflow: qr,
    offset: [0, -4],
    targetOffset: Xr
  },
  topRight: {
    points: ["br", "tr"],
    overflow: qr,
    offset: [0, -4],
    targetOffset: Xr
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: qr,
    offset: [0, 4],
    targetOffset: Xr
  },
  bottom: {
    points: ["tc", "bc"],
    overflow: qr,
    offset: [0, 4],
    targetOffset: Xr
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: qr,
    offset: [0, 4],
    targetOffset: Xr
  }
}, f1 = ["arrow", "prefixCls", "transitionName", "animation", "align", "placement", "placements", "getPopupContainer", "showAction", "hideAction", "overlayClassName", "overlayStyle", "visible", "trigger", "autoFocus", "overlay", "children", "onVisibleChange"];
function d1(e, t) {
  var n, r = e.arrow, i = r === void 0 ? !1 : r, o = e.prefixCls, a = o === void 0 ? "rc-dropdown" : o, s = e.transitionName, l = e.animation, u = e.align, c = e.placement, d = c === void 0 ? "bottomLeft" : c, v = e.placements, h = v === void 0 ? c1 : v, p = e.getPopupContainer, m = e.showAction, b = e.hideAction, g = e.overlayClassName, y = e.overlayStyle, S = e.visible, C = e.trigger, _ = C === void 0 ? ["hover"] : C, E = e.autoFocus, x = e.overlay, I = e.children, R = e.onVisibleChange, N = We(e, f1), $ = Xe.useState(), w = F($, 2), O = w[0], P = w[1], M = "visible" in e ? S : O, T = Xe.useRef(null), A = Xe.useRef(null), k = Xe.useRef(null);
  Xe.useImperativeHandle(t, function() {
    return T.current;
  });
  var H = function(B) {
    P(B), R?.(B);
  };
  l1({
    visible: M,
    triggerRef: k,
    onVisibleChange: H,
    autoFocus: E,
    overlayRef: A
  });
  var Y = function(B) {
    var Q = e.onOverlayClick;
    P(!1), Q && Q(B);
  }, K = function() {
    return /* @__PURE__ */ Xe.createElement(u1, {
      ref: A,
      overlay: x,
      prefixCls: a,
      arrow: i
    });
  }, V = function() {
    return typeof x == "function" ? K : K();
  }, G = function() {
    var B = e.minOverlayWidthMatchTrigger, Q = e.alignPoint;
    return "minOverlayWidthMatchTrigger" in e ? B : !Q;
  }, q = function() {
    var B = e.openClassName;
    return B !== void 0 ? B : "".concat(a, "-open");
  }, Z = /* @__PURE__ */ Xe.cloneElement(I, {
    className: Ee((n = I.props) === null || n === void 0 ? void 0 : n.className, M && q()),
    ref: Ci(I) ? wi(k, I.ref) : void 0
  }), ce = b;
  return !ce && _.indexOf("contextMenu") !== -1 && (ce = ["click"]), /* @__PURE__ */ Xe.createElement($u, ge({
    builtinPlacements: h
  }, N, {
    prefixCls: a,
    ref: T,
    popupClassName: Ee(g, U({}, "".concat(a, "-show-arrow"), i)),
    popupStyle: y,
    action: _,
    showAction: m,
    hideAction: ce,
    popupPlacement: d,
    popupAlign: u,
    popupTransitionName: s,
    popupAnimation: l,
    popupVisible: M,
    stretch: G() ? "minWidth" : "",
    popup: V(),
    onPopupVisibleChange: H,
    onPopupClick: Y,
    getPopupContainer: p
  }), Z);
}
const v1 = /* @__PURE__ */ Xe.forwardRef(d1);
var Vh = /* @__PURE__ */ f.createContext(null);
function Lu(e, t) {
  return e === void 0 ? null : "".concat(e, "-").concat(t);
}
function kh(e) {
  var t = f.useContext(Vh);
  return Lu(t, e);
}
var h1 = ["children", "locked"], Vn = /* @__PURE__ */ f.createContext(null);
function p1(e, t) {
  var n = D({}, e);
  return Object.keys(t).forEach(function(r) {
    var i = t[r];
    i !== void 0 && (n[r] = i);
  }), n;
}
function ro(e) {
  var t = e.children, n = e.locked, r = We(e, h1), i = f.useContext(Vn), o = ho(function() {
    return p1(i, r);
  }, [i, r], function(a, s) {
    return !n && (a[0] !== s[0] || !pu(a[1], s[1], !0));
  });
  return /* @__PURE__ */ f.createElement(Vn.Provider, {
    value: o
  }, t);
}
var m1 = [], jh = /* @__PURE__ */ f.createContext(null);
function hs() {
  return f.useContext(jh);
}
var Hh = /* @__PURE__ */ f.createContext(m1);
function Eo(e) {
  var t = f.useContext(Hh);
  return f.useMemo(function() {
    return e !== void 0 ? [].concat(de(t), [e]) : t;
  }, [t, e]);
}
var zh = /* @__PURE__ */ f.createContext(null), Vu = /* @__PURE__ */ f.createContext({});
function _f(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  if (Gv(e)) {
    var n = e.nodeName.toLowerCase(), r = (
      // Focusable element
      ["input", "select", "textarea", "button"].includes(n) || // Editable element
      e.isContentEditable || // Anchor with href element
      n === "a" && !!e.getAttribute("href")
    ), i = e.getAttribute("tabindex"), o = Number(i), a = null;
    return i && !Number.isNaN(o) ? a = o : r && a === null && (a = 0), r && e.disabled && (a = null), a !== null && (a >= 0 || t && a < 0);
  }
  return !1;
}
function g1(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = de(e.querySelectorAll("*")).filter(function(r) {
    return _f(r, t);
  });
  return _f(e, t) && n.unshift(e), n;
}
var Wl = j.LEFT, Kl = j.RIGHT, Gl = j.UP, va = j.DOWN, ha = j.ENTER, Bh = j.ESC, Vi = j.HOME, ki = j.END, Sf = [Gl, va, Wl, Kl];
function b1(e, t, n, r) {
  var i, o, a, s, l = "prev", u = "next", c = "children", d = "parent";
  if (e === "inline" && r === ha)
    return {
      inlineTrigger: !0
    };
  var v = (i = {}, U(i, Gl, l), U(i, va, u), i), h = (o = {}, U(o, Wl, n ? u : l), U(o, Kl, n ? l : u), U(o, va, c), U(o, ha, c), o), p = (a = {}, U(a, Gl, l), U(a, va, u), U(a, ha, c), U(a, Bh, d), U(a, Wl, n ? c : d), U(a, Kl, n ? d : c), a), m = {
    inline: v,
    horizontal: h,
    vertical: p,
    inlineSub: v,
    horizontalSub: p,
    verticalSub: p
  }, b = (s = m["".concat(e).concat(t ? "" : "Sub")]) === null || s === void 0 ? void 0 : s[r];
  switch (b) {
    case l:
      return {
        offset: -1,
        sibling: !0
      };
    case u:
      return {
        offset: 1,
        sibling: !0
      };
    case d:
      return {
        offset: -1,
        sibling: !1
      };
    case c:
      return {
        offset: 1,
        sibling: !1
      };
    default:
      return null;
  }
}
function y1(e) {
  for (var t = e; t; ) {
    if (t.getAttribute("data-menu-list"))
      return t;
    t = t.parentElement;
  }
  return null;
}
function _1(e, t) {
  for (var n = e || document.activeElement; n; ) {
    if (t.has(n))
      return n;
    n = n.parentElement;
  }
  return null;
}
function Uh(e, t) {
  var n = g1(e, !0);
  return n.filter(function(r) {
    return t.has(r);
  });
}
function Ef(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1;
  if (!e)
    return null;
  var i = Uh(e, t), o = i.length, a = i.findIndex(function(s) {
    return n === s;
  });
  return r < 0 ? a === -1 ? a = o - 1 : a -= 1 : r > 0 && (a += 1), a = (a + o) % o, i[a];
}
function S1(e, t, n, r, i, o, a, s, l, u) {
  var c = f.useRef(), d = f.useRef();
  d.current = t;
  var v = function() {
    Ot.cancel(c.current);
  };
  return f.useEffect(function() {
    return function() {
      v();
    };
  }, []), function(h) {
    var p = h.which;
    if ([].concat(Sf, [ha, Bh, Vi, ki]).includes(p)) {
      var m, b, g, y = function() {
        m = /* @__PURE__ */ new Set(), b = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map();
        var M = o();
        return M.forEach(function(T) {
          var A = document.querySelector("[data-menu-id='".concat(Lu(r, T), "']"));
          A && (m.add(A), g.set(A, T), b.set(T, A));
        }), m;
      };
      y();
      var S = b.get(t), C = _1(S, m), _ = g.get(C), E = b1(e, a(_, !0).length === 1, n, p);
      if (!E && p !== Vi && p !== ki)
        return;
      (Sf.includes(p) || [Vi, ki].includes(p)) && h.preventDefault();
      var x = function(M) {
        if (M) {
          var T = M, A = M.querySelector("a");
          A != null && A.getAttribute("href") && (T = A);
          var k = g.get(M);
          s(k), v(), c.current = Ot(function() {
            d.current === k && T.focus();
          });
        }
      };
      if ([Vi, ki].includes(p) || E.sibling || !C) {
        var I;
        !C || e === "inline" ? I = i.current : I = y1(C);
        var R, N = Uh(I, m);
        p === Vi ? R = N[0] : p === ki ? R = N[N.length - 1] : R = Ef(I, m, C, E.offset), x(R);
      } else if (E.inlineTrigger)
        l(_);
      else if (E.offset > 0)
        l(_, !0), v(), c.current = Ot(function() {
          y();
          var P = C.getAttribute("aria-controls"), M = document.getElementById(P), T = Ef(M, m);
          x(T);
        }, 5);
      else if (E.offset < 0) {
        var $ = a(_, !0), w = $[$.length - 2], O = b.get(w);
        l(w, !1), x(O);
      }
    }
    u?.(h);
  };
}
function E1(e) {
  Promise.resolve().then(e);
}
var ku = "__RC_UTIL_PATH_SPLIT__", wf = function(t) {
  return t.join(ku);
}, w1 = function(t) {
  return t.split(ku);
}, ql = "rc-menu-more";
function C1() {
  var e = f.useState({}), t = F(e, 2), n = t[1], r = ae(/* @__PURE__ */ new Map()), i = ae(/* @__PURE__ */ new Map()), o = f.useState([]), a = F(o, 2), s = a[0], l = a[1], u = ae(0), c = ae(!1), d = function() {
    c.current || n({});
  }, v = _n(function(S, C) {
    process.env.NODE_ENV !== "production" && $e(!r.current.has(S), "Duplicated key '".concat(S, "' used in Menu by path [").concat(C.join(" > "), "]"));
    var _ = wf(C);
    i.current.set(_, S), r.current.set(S, _), u.current += 1;
    var E = u.current;
    E1(function() {
      E === u.current && d();
    });
  }, []), h = _n(function(S, C) {
    var _ = wf(C);
    i.current.delete(_), r.current.delete(S);
  }, []), p = _n(function(S) {
    l(S);
  }, []), m = _n(function(S, C) {
    var _ = r.current.get(S) || "", E = w1(_);
    return C && s.includes(E[0]) && E.unshift(ql), E;
  }, [s]), b = _n(function(S, C) {
    return S.some(function(_) {
      var E = m(_, !0);
      return E.includes(C);
    });
  }, [m]), g = function() {
    var C = de(r.current.keys());
    return s.length && C.push(ql), C;
  }, y = _n(function(S) {
    var C = "".concat(r.current.get(S)).concat(ku), _ = /* @__PURE__ */ new Set();
    return de(i.current.keys()).forEach(function(E) {
      E.startsWith(C) && _.add(i.current.get(E));
    }), _;
  }, []);
  return f.useEffect(function() {
    return function() {
      c.current = !0;
    };
  }, []), {
    // Register
    registerPath: v,
    unregisterPath: h,
    refreshOverflowKeys: p,
    // Util
    isSubPathKey: b,
    getKeyPath: m,
    getKeys: g,
    getSubPathKeys: y
  };
}
function zi(e) {
  var t = f.useRef(e);
  t.current = e;
  var n = f.useCallback(function() {
    for (var r, i = arguments.length, o = new Array(i), a = 0; a < i; a++)
      o[a] = arguments[a];
    return (r = t.current) === null || r === void 0 ? void 0 : r.call.apply(r, [t].concat(o));
  }, []);
  return e ? n : void 0;
}
var O1 = Math.random().toFixed(5).toString().slice(2), Cf = 0;
function x1(e) {
  var t = Bn(e, {
    value: e
  }), n = F(t, 2), r = n[0], i = n[1];
  return f.useEffect(function() {
    Cf += 1;
    var o = process.env.NODE_ENV === "test" ? "test" : "".concat(O1, "-").concat(Cf);
    i("rc-menu-uuid-".concat(o));
  }, []), r;
}
function Wh(e, t, n, r) {
  var i = f.useContext(Vn), o = i.activeKey, a = i.onActive, s = i.onInactive, l = {
    active: o === e
  };
  return t || (l.onMouseEnter = function(u) {
    n?.({
      key: e,
      domEvent: u
    }), a(e);
  }, l.onMouseLeave = function(u) {
    r?.({
      key: e,
      domEvent: u
    }), s(e);
  }), l;
}
function Kh(e) {
  var t = f.useContext(Vn), n = t.mode, r = t.rtl, i = t.inlineIndent;
  if (n !== "inline")
    return null;
  var o = e;
  return r ? {
    paddingRight: o * i
  } : {
    paddingLeft: o * i
  };
}
function Gh(e) {
  var t = e.icon, n = e.props, r = e.children, i;
  return typeof t == "function" ? i = /* @__PURE__ */ f.createElement(t, D({}, n)) : i = t, i || r || null;
}
var N1 = ["item"];
function ja(e) {
  var t = e.item, n = We(e, N1);
  return Object.defineProperty(n, "item", {
    get: function() {
      return $e(!1, "`info.item` is deprecated since we will move to function component that not provides React Node instance in future."), t;
    }
  }), n;
}
var P1 = ["title", "attribute", "elementRef"], M1 = ["style", "className", "eventKey", "warnKey", "disabled", "itemIcon", "children", "role", "onMouseEnter", "onMouseLeave", "onClick", "onKeyDown", "onFocus"], R1 = ["active"], T1 = /* @__PURE__ */ function(e) {
  Si(n, e);
  var t = Ei(n);
  function n() {
    return hn(this, n), t.apply(this, arguments);
  }
  return pn(n, [{
    key: "render",
    value: function() {
      var i = this.props, o = i.title, a = i.attribute, s = i.elementRef, l = We(i, P1), u = is(l, ["eventKey", "popupClassName", "popupOffset", "onTitleClick"]);
      return $e(!a, "`attribute` of Menu.Item is deprecated. Please pass attribute directly."), /* @__PURE__ */ f.createElement(Un.Item, ge({}, a, {
        title: typeof o == "string" ? o : void 0
      }, u, {
        ref: s
      }));
    }
  }]), n;
}(f.Component), $1 = /* @__PURE__ */ f.forwardRef(function(e, t) {
  var n, r = e.style, i = e.className, o = e.eventKey, a = e.warnKey, s = e.disabled, l = e.itemIcon, u = e.children, c = e.role, d = e.onMouseEnter, v = e.onMouseLeave, h = e.onClick, p = e.onKeyDown, m = e.onFocus, b = We(e, M1), g = kh(o), y = f.useContext(Vn), S = y.prefixCls, C = y.onItemClick, _ = y.disabled, E = y.overflowDisabled, x = y.itemIcon, I = y.selectedKeys, R = y.onActive, N = f.useContext(Vu), $ = N._internalRenderMenuItem, w = "".concat(S, "-item"), O = f.useRef(), P = f.useRef(), M = _ || s, T = po(t, P), A = Eo(o);
  process.env.NODE_ENV !== "production" && a && $e(!1, "MenuItem should not leave undefined `key`.");
  var k = function(te) {
    return {
      key: o,
      // Note: For legacy code is reversed which not like other antd component
      keyPath: de(A).reverse(),
      item: O.current,
      domEvent: te
    };
  }, H = l || x, Y = Wh(o, M, d, v), K = Y.active, V = We(Y, R1), G = I.includes(o), q = Kh(A.length), Z = function(te) {
    if (!M) {
      var L = k(te);
      h?.(ja(L)), C(L);
    }
  }, ce = function(te) {
    if (p?.(te), te.which === j.ENTER) {
      var L = k(te);
      h?.(ja(L)), C(L);
    }
  }, ee = function(te) {
    R(o), m?.(te);
  }, B = {};
  e.role === "option" && (B["aria-selected"] = G);
  var Q = /* @__PURE__ */ f.createElement(T1, ge({
    ref: O,
    elementRef: T,
    role: c === null ? "none" : c || "menuitem",
    tabIndex: s ? null : -1,
    "data-menu-id": E && g ? null : g
  }, b, V, B, {
    component: "li",
    "aria-disabled": s,
    style: D(D({}, q), r),
    className: Ee(w, (n = {}, U(n, "".concat(w, "-active"), K), U(n, "".concat(w, "-selected"), G), U(n, "".concat(w, "-disabled"), M), n), i),
    onClick: Z,
    onKeyDown: ce,
    onFocus: ee
  }), u, /* @__PURE__ */ f.createElement(Gh, {
    props: D(D({}, e), {}, {
      isSelected: G
    }),
    icon: H
  }));
  return $ && (Q = $(Q, e, {
    selected: G
  })), Q;
});
function I1(e, t) {
  var n = e.eventKey, r = hs(), i = Eo(n);
  return f.useEffect(function() {
    if (r)
      return r.registerPath(n, i), function() {
        r.unregisterPath(n, i);
      };
  }, [i]), r ? null : /* @__PURE__ */ f.createElement($1, ge({}, e, {
    ref: t
  }));
}
const ps = /* @__PURE__ */ f.forwardRef(I1);
var A1 = ["className", "children"], D1 = function(t, n) {
  var r = t.className, i = t.children, o = We(t, A1), a = f.useContext(Vn), s = a.prefixCls, l = a.mode, u = a.rtl;
  return /* @__PURE__ */ f.createElement("ul", ge({
    className: Ee(s, u && "".concat(s, "-rtl"), "".concat(s, "-sub"), "".concat(s, "-").concat(l === "inline" ? "inline" : "vertical"), r),
    role: "menu"
  }, o, {
    "data-menu-list": !0,
    ref: n
  }), i);
}, ju = /* @__PURE__ */ f.forwardRef(D1);
ju.displayName = "SubMenuList";
var F1 = ["label", "children", "key", "type"];
function Hu(e, t) {
  return or(e).map(function(n, r) {
    if (/* @__PURE__ */ f.isValidElement(n)) {
      var i, o, a = n.key, s = (i = (o = n.props) === null || o === void 0 ? void 0 : o.eventKey) !== null && i !== void 0 ? i : a, l = s == null;
      l && (s = "tmp_key-".concat([].concat(de(t), [r]).join("-")));
      var u = {
        key: s,
        eventKey: s
      };
      return process.env.NODE_ENV !== "production" && l && (u.warnKey = !0), /* @__PURE__ */ f.cloneElement(n, u);
    }
    return n;
  });
}
function Xl(e) {
  return (e || []).map(function(t, n) {
    if (t && Qe(t) === "object") {
      var r = t, i = r.label, o = r.children, a = r.key, s = r.type, l = We(r, F1), u = a ?? "tmp-".concat(n);
      return o || s === "group" ? s === "group" ? /* @__PURE__ */ f.createElement(Xh, ge({
        key: u
      }, l, {
        title: i
      }), Xl(o)) : /* @__PURE__ */ f.createElement(zu, ge({
        key: u
      }, l, {
        title: i
      }), Xl(o)) : s === "divider" ? /* @__PURE__ */ f.createElement(Yh, ge({
        key: u
      }, l)) : /* @__PURE__ */ f.createElement(ps, ge({
        key: u
      }, l), i);
    }
    return null;
  }).filter(function(t) {
    return t;
  });
}
function L1(e, t, n) {
  var r = e;
  return t && (r = Xl(t)), Hu(r, n);
}
var qt = {
  adjustX: 1,
  adjustY: 1
}, V1 = {
  topLeft: {
    points: ["bl", "tl"],
    overflow: qt
  },
  topRight: {
    points: ["br", "tr"],
    overflow: qt
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: qt
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: qt
  },
  leftTop: {
    points: ["tr", "tl"],
    overflow: qt
  },
  leftBottom: {
    points: ["br", "bl"],
    overflow: qt
  },
  rightTop: {
    points: ["tl", "tr"],
    overflow: qt
  },
  rightBottom: {
    points: ["bl", "br"],
    overflow: qt
  }
}, k1 = {
  topLeft: {
    points: ["bl", "tl"],
    overflow: qt
  },
  topRight: {
    points: ["br", "tr"],
    overflow: qt
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: qt
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: qt
  },
  rightTop: {
    points: ["tr", "tl"],
    overflow: qt
  },
  rightBottom: {
    points: ["br", "bl"],
    overflow: qt
  },
  leftTop: {
    points: ["tl", "tr"],
    overflow: qt
  },
  leftBottom: {
    points: ["bl", "br"],
    overflow: qt
  }
};
function qh(e, t, n) {
  if (t)
    return t;
  if (n)
    return n[e] || n.other;
}
var j1 = {
  horizontal: "bottomLeft",
  vertical: "rightTop",
  "vertical-left": "rightTop",
  "vertical-right": "leftTop"
};
function H1(e) {
  var t = e.prefixCls, n = e.visible, r = e.children, i = e.popup, o = e.popupClassName, a = e.popupOffset, s = e.disabled, l = e.mode, u = e.onVisibleChange, c = f.useContext(Vn), d = c.getPopupContainer, v = c.rtl, h = c.subMenuOpenDelay, p = c.subMenuCloseDelay, m = c.builtinPlacements, b = c.triggerSubMenuAction, g = c.forceSubMenuRender, y = c.rootClassName, S = c.motion, C = c.defaultMotions, _ = f.useState(!1), E = F(_, 2), x = E[0], I = E[1], R = D(v ? D({}, k1) : D({}, V1), m), N = j1[l], $ = qh(l, S, C), w = f.useRef($);
  l !== "inline" && (w.current = $);
  var O = D(D({}, w.current), {}, {
    leavedClassName: "".concat(t, "-hidden"),
    removeOnLeave: !1,
    motionAppear: !0
  }), P = f.useRef();
  return f.useEffect(function() {
    return P.current = Ot(function() {
      I(n);
    }), function() {
      Ot.cancel(P.current);
    };
  }, [n]), /* @__PURE__ */ f.createElement($u, {
    prefixCls: t,
    popupClassName: Ee("".concat(t, "-popup"), U({}, "".concat(t, "-rtl"), v), o, y),
    stretch: l === "horizontal" ? "minWidth" : null,
    getPopupContainer: d,
    builtinPlacements: R,
    popupPlacement: N,
    popupVisible: x,
    popup: i,
    popupAlign: a && {
      offset: a
    },
    action: s ? [] : [b],
    mouseEnterDelay: h,
    mouseLeaveDelay: p,
    onPopupVisibleChange: u,
    forceRender: g,
    popupMotion: O
  }, r);
}
function z1(e) {
  var t = e.id, n = e.open, r = e.keyPath, i = e.children, o = "inline", a = f.useContext(Vn), s = a.prefixCls, l = a.forceSubMenuRender, u = a.motion, c = a.defaultMotions, d = a.mode, v = f.useRef(!1);
  v.current = d === o;
  var h = f.useState(!v.current), p = F(h, 2), m = p[0], b = p[1], g = v.current ? n : !1;
  f.useEffect(function() {
    v.current && b(!1);
  }, [d]);
  var y = D({}, qh(o, u, c));
  r.length > 1 && (y.motionAppear = !1);
  var S = y.onVisibleChanged;
  return y.onVisibleChanged = function(C) {
    return !v.current && !C && b(!0), S?.(C);
  }, m ? null : /* @__PURE__ */ f.createElement(ro, {
    mode: o,
    locked: !v.current
  }, /* @__PURE__ */ f.createElement(bo, ge({
    visible: g
  }, y, {
    forceRender: l,
    removeOnLeave: !1,
    leavedClassName: "".concat(s, "-hidden")
  }), function(C) {
    var _ = C.className, E = C.style;
    return /* @__PURE__ */ f.createElement(ju, {
      id: t,
      className: _,
      style: E
    }, i);
  }));
}
var B1 = ["style", "className", "title", "eventKey", "warnKey", "disabled", "internalPopupClose", "children", "itemIcon", "expandIcon", "popupClassName", "popupOffset", "onClick", "onMouseEnter", "onMouseLeave", "onTitleClick", "onTitleMouseEnter", "onTitleMouseLeave"], U1 = ["active"], W1 = function(t) {
  var n, r = t.style, i = t.className, o = t.title, a = t.eventKey, s = t.warnKey, l = t.disabled, u = t.internalPopupClose, c = t.children, d = t.itemIcon, v = t.expandIcon, h = t.popupClassName, p = t.popupOffset, m = t.onClick, b = t.onMouseEnter, g = t.onMouseLeave, y = t.onTitleClick, S = t.onTitleMouseEnter, C = t.onTitleMouseLeave, _ = We(t, B1), E = kh(a), x = f.useContext(Vn), I = x.prefixCls, R = x.mode, N = x.openKeys, $ = x.disabled, w = x.overflowDisabled, O = x.activeKey, P = x.selectedKeys, M = x.itemIcon, T = x.expandIcon, A = x.onItemClick, k = x.onOpenChange, H = x.onActive, Y = f.useContext(Vu), K = Y._internalRenderSubMenuItem, V = f.useContext(zh), G = V.isSubPathKey, q = Eo(), Z = "".concat(I, "-submenu"), ce = $ || l, ee = f.useRef(), B = f.useRef();
  process.env.NODE_ENV !== "production" && s && $e(!1, "SubMenu should not leave undefined `key`.");
  var Q = d || M, me = v || T, te = N.includes(a), L = !w && te, le = G(P, a), J = Wh(a, ce, S, C), pe = J.active, ne = We(J, U1), Ne = f.useState(!1), ye = F(Ne, 2), Ce = ye[0], fe = ye[1], he = function(Be) {
    ce || fe(Be);
  }, Ie = function(Be) {
    he(!0), b?.({
      key: a,
      domEvent: Be
    });
  }, Ve = function(Be) {
    he(!1), g?.({
      key: a,
      domEvent: Be
    });
  }, ke = f.useMemo(function() {
    return pe || (R !== "inline" ? Ce || G([O], a) : !1);
  }, [R, pe, O, Ce, a, G]), Re = Kh(q.length), Ke = function(Be) {
    ce || (y?.({
      key: a,
      domEvent: Be
    }), R === "inline" && k(a, !te));
  }, ft = zi(function(se) {
    m?.(ja(se)), A(se);
  }), Ze = function(Be) {
    R !== "inline" && k(a, Be);
  }, De = function() {
    H(a);
  }, je = E && "".concat(E, "-popup"), Je = /* @__PURE__ */ f.createElement("div", ge({
    role: "menuitem",
    style: Re,
    className: "".concat(Z, "-title"),
    tabIndex: ce ? null : -1,
    ref: ee,
    title: typeof o == "string" ? o : null,
    "data-menu-id": w && E ? null : E,
    "aria-expanded": L,
    "aria-haspopup": !0,
    "aria-controls": je,
    "aria-disabled": ce,
    onClick: Ke,
    onFocus: De
  }, ne), o, /* @__PURE__ */ f.createElement(Gh, {
    icon: R !== "horizontal" ? me : null,
    props: D(D({}, t), {}, {
      isOpen: L,
      // [Legacy] Not sure why need this mark
      isSubMenu: !0
    })
  }, /* @__PURE__ */ f.createElement("i", {
    className: "".concat(Z, "-arrow")
  }))), Rt = f.useRef(R);
  if (R !== "inline" && q.length > 1 ? Rt.current = "vertical" : Rt.current = R, !w) {
    var ze = Rt.current;
    Je = /* @__PURE__ */ f.createElement(H1, {
      mode: ze,
      prefixCls: Z,
      visible: !u && L && R !== "inline",
      popupClassName: h,
      popupOffset: p,
      popup: /* @__PURE__ */ f.createElement(
        ro,
        {
          mode: ze === "horizontal" ? "vertical" : ze
        },
        /* @__PURE__ */ f.createElement(ju, {
          id: je,
          ref: B
        }, c)
      ),
      disabled: ce,
      onVisibleChange: Ze
    }, Je);
  }
  var re = /* @__PURE__ */ f.createElement(Un.Item, ge({
    role: "none"
  }, _, {
    component: "li",
    style: r,
    className: Ee(Z, "".concat(Z, "-").concat(R), i, (n = {}, U(n, "".concat(Z, "-open"), L), U(n, "".concat(Z, "-active"), ke), U(n, "".concat(Z, "-selected"), le), U(n, "".concat(Z, "-disabled"), ce), n)),
    onMouseEnter: Ie,
    onMouseLeave: Ve
  }), Je, !w && /* @__PURE__ */ f.createElement(z1, {
    id: je,
    open: L,
    keyPath: q
  }, c));
  return K && (re = K(re, t, {
    selected: le,
    active: ke,
    open: L,
    disabled: ce
  })), /* @__PURE__ */ f.createElement(ro, {
    onItemClick: ft,
    mode: R === "horizontal" ? "vertical" : R,
    itemIcon: Q,
    expandIcon: me
  }, re);
};
function zu(e) {
  var t = e.eventKey, n = e.children, r = Eo(t), i = Hu(n, r), o = hs();
  f.useEffect(function() {
    if (o)
      return o.registerPath(t, r), function() {
        o.unregisterPath(t, r);
      };
  }, [r]);
  var a;
  return o ? a = i : a = /* @__PURE__ */ f.createElement(W1, e, i), /* @__PURE__ */ f.createElement(Hh.Provider, {
    value: r
  }, a);
}
var K1 = ["prefixCls", "rootClassName", "style", "className", "tabIndex", "items", "children", "direction", "id", "mode", "inlineCollapsed", "disabled", "disabledOverflow", "subMenuOpenDelay", "subMenuCloseDelay", "forceSubMenuRender", "defaultOpenKeys", "openKeys", "activeKey", "defaultActiveFirst", "selectable", "multiple", "defaultSelectedKeys", "selectedKeys", "onSelect", "onDeselect", "inlineIndent", "motion", "defaultMotions", "triggerSubMenuAction", "builtinPlacements", "itemIcon", "expandIcon", "overflowedIndicator", "overflowedIndicatorPopupClassName", "getPopupContainer", "onClick", "onOpenChange", "onKeyDown", "openAnimation", "openTransitionName", "_internalRenderMenuItem", "_internalRenderSubMenuItem"], Yr = [], G1 = /* @__PURE__ */ f.forwardRef(function(e, t) {
  var n, r, i = e, o = i.prefixCls, a = o === void 0 ? "rc-menu" : o, s = i.rootClassName, l = i.style, u = i.className, c = i.tabIndex, d = c === void 0 ? 0 : c, v = i.items, h = i.children, p = i.direction, m = i.id, b = i.mode, g = b === void 0 ? "vertical" : b, y = i.inlineCollapsed, S = i.disabled, C = i.disabledOverflow, _ = i.subMenuOpenDelay, E = _ === void 0 ? 0.1 : _, x = i.subMenuCloseDelay, I = x === void 0 ? 0.1 : x, R = i.forceSubMenuRender, N = i.defaultOpenKeys, $ = i.openKeys, w = i.activeKey, O = i.defaultActiveFirst, P = i.selectable, M = P === void 0 ? !0 : P, T = i.multiple, A = T === void 0 ? !1 : T, k = i.defaultSelectedKeys, H = i.selectedKeys, Y = i.onSelect, K = i.onDeselect, V = i.inlineIndent, G = V === void 0 ? 24 : V, q = i.motion, Z = i.defaultMotions, ce = i.triggerSubMenuAction, ee = ce === void 0 ? "hover" : ce, B = i.builtinPlacements, Q = i.itemIcon, me = i.expandIcon, te = i.overflowedIndicator, L = te === void 0 ? "..." : te, le = i.overflowedIndicatorPopupClassName, J = i.getPopupContainer, pe = i.onClick, ne = i.onOpenChange, Ne = i.onKeyDown, ye = i.openAnimation, Ce = i.openTransitionName, fe = i._internalRenderMenuItem, he = i._internalRenderSubMenuItem, Ie = We(i, K1), Ve = f.useMemo(function() {
    return L1(h, v, Yr);
  }, [h, v]), ke = f.useState(!1), Re = F(ke, 2), Ke = Re[0], ft = Re[1], Ze = f.useRef(), De = x1(m), je = p === "rtl";
  process.env.NODE_ENV !== "production" && $e(!ye && !Ce, "`openAnimation` and `openTransitionName` is removed. Please use `motion` or `defaultMotion` instead.");
  var Je = Bn(N, {
    value: $,
    postState: function(xe) {
      return xe || Yr;
    }
  }), Rt = F(Je, 2), ze = Rt[0], re = Rt[1], se = function(xe) {
    var Ae = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    function He() {
      re(xe), ne?.(xe);
    }
    Ae ? jm(He) : He();
  }, Be = f.useState(ze), tt = F(Be, 2), at = tt[0], Fe = tt[1], Le = f.useRef(!1), ht = f.useMemo(function() {
    return (g === "inline" || g === "vertical") && y ? ["vertical", y] : [g, !1];
  }, [g, y]), bt = F(ht, 2), Ge = bt[0], xt = bt[1], Nt = Ge === "inline", Tt = f.useState(Ge), be = F(Tt, 2), X = be[0], W = be[1], ue = f.useState(xt), ve = F(ue, 2), Pe = ve[0], qe = ve[1];
  f.useEffect(function() {
    W(Ge), qe(xt), Le.current && (Nt ? re(at) : se(Yr));
  }, [Ge, xt]);
  var ut = f.useState(0), yt = F(ut, 2), _t = yt[0], nt = yt[1], Et = _t >= Ve.length - 1 || X !== "horizontal" || C;
  f.useEffect(function() {
    Nt && Fe(ze);
  }, [ze]), f.useEffect(function() {
    return Le.current = !0, function() {
      Le.current = !1;
    };
  }, []);
  var dt = C1(), Wt = dt.registerPath, mn = dt.unregisterPath, $t = dt.refreshOverflowKeys, Oe = dt.isSubPathKey, we = dt.getKeyPath, pt = dt.getKeys, ct = dt.getSubPathKeys, It = f.useMemo(function() {
    return {
      registerPath: Wt,
      unregisterPath: mn
    };
  }, [Wt, mn]), Ft = f.useMemo(function() {
    return {
      isSubPathKey: Oe
    };
  }, [Oe]);
  f.useEffect(function() {
    $t(Et ? Yr : Ve.slice(_t + 1).map(function(ie) {
      return ie.key;
    }));
  }, [_t, Et]);
  var jn = Bn(w || O && ((n = Ve[0]) === null || n === void 0 ? void 0 : n.key), {
    value: w
  }), rn = F(jn, 2), gn = rn[0], Yn = rn[1], Nn = zi(function(ie) {
    Yn(ie);
  }), Jt = zi(function() {
    Yn(void 0);
  });
  Lm(t, function() {
    return {
      list: Ze.current,
      focus: function(xe) {
        var Ae, He = gn ?? ((Ae = Ve.find(function(Kt) {
          return !Kt.props.disabled;
        })) === null || Ae === void 0 ? void 0 : Ae.key);
        if (He) {
          var et, mt, gt;
          (et = Ze.current) === null || et === void 0 || (mt = et.querySelector("li[data-menu-id='".concat(Lu(De, He), "']"))) === null || mt === void 0 || (gt = mt.focus) === null || gt === void 0 || gt.call(mt, xe);
        }
      }
    };
  });
  var Pn = Bn(k || [], {
    value: H,
    // Legacy convert key to array
    postState: function(xe) {
      return Array.isArray(xe) ? xe : xe == null ? Yr : [xe];
    }
  }), Zt = F(Pn, 2), bn = Zt[0], cr = Zt[1], Qn = function(xe) {
    if (M) {
      var Ae = xe.key, He = bn.includes(Ae), et;
      A ? He ? et = bn.filter(function(gt) {
        return gt !== Ae;
      }) : et = [].concat(de(bn), [Ae]) : et = [Ae], cr(et);
      var mt = D(D({}, xe), {}, {
        selectedKeys: et
      });
      He ? K?.(mt) : Y?.(mt);
    }
    !A && ze.length && X !== "inline" && se(Yr);
  }, fr = zi(function(ie) {
    pe?.(ja(ie)), Qn(ie);
  }), Hn = zi(function(ie, xe) {
    var Ae = ze.filter(function(et) {
      return et !== ie;
    });
    if (xe)
      Ae.push(ie);
    else if (X !== "inline") {
      var He = ct(ie);
      Ae = Ae.filter(function(et) {
        return !He.has(et);
      });
    }
    pu(ze, Ae, !0) || se(Ae, !0);
  }), Or = function(xe, Ae) {
    var He = Ae ?? !ze.includes(xe);
    Hn(xe, He);
  }, xr = S1(X, gn, je, De, Ze, pt, we, Yn, Or, Ne);
  f.useEffect(function() {
    ft(!0);
  }, []);
  var dr = f.useMemo(function() {
    return {
      _internalRenderMenuItem: fe,
      _internalRenderSubMenuItem: he
    };
  }, [fe, he]), zn = X !== "horizontal" || C ? Ve : (
    // Need wrap for overflow dropdown that do not response for open
    Ve.map(function(ie, xe) {
      return (
        // Always wrap provider to avoid sub node re-mount
        /* @__PURE__ */ f.createElement(ro, {
          key: ie.key,
          overflowDisabled: xe > _t
        }, ie)
      );
    })
  ), Me = /* @__PURE__ */ f.createElement(Un, ge({
    id: m,
    ref: Ze,
    prefixCls: "".concat(a, "-overflow"),
    component: "ul",
    itemComponent: ps,
    className: Ee(a, "".concat(a, "-root"), "".concat(a, "-").concat(X), u, (r = {}, U(r, "".concat(a, "-inline-collapsed"), Pe), U(r, "".concat(a, "-rtl"), je), r), s),
    dir: p,
    style: l,
    role: "menu",
    tabIndex: d,
    data: zn,
    renderRawItem: function(xe) {
      return xe;
    },
    renderRawRest: function(xe) {
      var Ae = xe.length, He = Ae ? Ve.slice(-Ae) : null;
      return /* @__PURE__ */ f.createElement(zu, {
        eventKey: ql,
        title: L,
        disabled: Et,
        internalPopupClose: Ae === 0,
        popupClassName: le
      }, He);
    },
    maxCount: X !== "horizontal" || C ? Un.INVALIDATE : Un.RESPONSIVE,
    ssr: "full",
    "data-menu-list": !0,
    onVisibleChange: function(xe) {
      nt(xe);
    },
    onKeyDown: xr
  }, Ie));
  return /* @__PURE__ */ f.createElement(Vu.Provider, {
    value: dr
  }, /* @__PURE__ */ f.createElement(Vh.Provider, {
    value: De
  }, /* @__PURE__ */ f.createElement(ro, {
    prefixCls: a,
    rootClassName: s,
    mode: X,
    openKeys: ze,
    rtl: je,
    disabled: S,
    motion: Ke ? q : null,
    defaultMotions: Ke ? Z : null,
    activeKey: gn,
    onActive: Nn,
    onInactive: Jt,
    selectedKeys: bn,
    inlineIndent: G,
    subMenuOpenDelay: E,
    subMenuCloseDelay: I,
    forceSubMenuRender: R,
    builtinPlacements: B,
    triggerSubMenuAction: ee,
    getPopupContainer: J,
    itemIcon: Q,
    expandIcon: me,
    onItemClick: fr,
    onOpenChange: Hn
  }, /* @__PURE__ */ f.createElement(zh.Provider, {
    value: Ft
  }, Me), /* @__PURE__ */ f.createElement("div", {
    style: {
      display: "none"
    },
    "aria-hidden": !0
  }, /* @__PURE__ */ f.createElement(jh.Provider, {
    value: It
  }, Ve)))));
}), q1 = ["className", "title", "eventKey", "children"], X1 = ["children"], Y1 = function(t) {
  var n = t.className, r = t.title;
  t.eventKey;
  var i = t.children, o = We(t, q1), a = f.useContext(Vn), s = a.prefixCls, l = "".concat(s, "-item-group");
  return /* @__PURE__ */ f.createElement("li", ge({
    role: "presentation"
  }, o, {
    onClick: function(c) {
      return c.stopPropagation();
    },
    className: Ee(l, n)
  }), /* @__PURE__ */ f.createElement("div", {
    role: "presentation",
    className: "".concat(l, "-title"),
    title: typeof r == "string" ? r : void 0
  }, r), /* @__PURE__ */ f.createElement("ul", {
    role: "group",
    className: "".concat(l, "-list")
  }, i));
};
function Xh(e) {
  var t = e.children, n = We(e, X1), r = Eo(n.eventKey), i = Hu(t, r), o = hs();
  return o ? i : /* @__PURE__ */ f.createElement(Y1, is(n, ["warnKey"]), i);
}
function Yh(e) {
  var t = e.className, n = e.style, r = f.useContext(Vn), i = r.prefixCls, o = hs();
  return o ? null : /* @__PURE__ */ f.createElement("li", {
    className: Ee("".concat(i, "-item-divider"), t),
    style: n
  });
}
var wo = G1;
wo.Item = ps;
wo.SubMenu = zu;
wo.ItemGroup = Xh;
wo.Divider = Yh;
var Q1 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z" } }] }, name: "ellipsis", theme: "outlined" };
const J1 = Q1;
var Qh = function(t, n) {
  return /* @__PURE__ */ f.createElement(Er, ge({}, t, {
    ref: n,
    icon: J1
  }));
};
process.env.NODE_ENV !== "production" && (Qh.displayName = "EllipsisOutlined");
const Z1 = /* @__PURE__ */ f.forwardRef(Qh);
var ew = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "defs", attrs: {}, children: [{ tag: "style", attrs: {} }] }, { tag: "path", attrs: { d: "M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z" } }, { tag: "path", attrs: { d: "M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z" } }] }, name: "plus", theme: "outlined" };
const tw = ew;
var Jh = function(t, n) {
  return /* @__PURE__ */ f.createElement(Er, ge({}, t, {
    ref: n,
    icon: tw
  }));
};
process.env.NODE_ENV !== "production" && (Jh.displayName = "PlusOutlined");
const nw = /* @__PURE__ */ f.forwardRef(Jh), ms = /* @__PURE__ */ vo(null);
var Bu = /* @__PURE__ */ f.forwardRef(function(e, t) {
  var n = e.prefixCls, r = e.className, i = e.style, o = e.id, a = e.active, s = e.tabKey, l = e.children;
  return /* @__PURE__ */ f.createElement("div", {
    id: o && "".concat(o, "-panel-").concat(s),
    role: "tabpanel",
    tabIndex: a ? 0 : -1,
    "aria-labelledby": o && "".concat(o, "-tab-").concat(s),
    "aria-hidden": !a,
    style: i,
    className: Ee(n, a && "".concat(n, "-active"), r),
    ref: t
  }, l);
});
process.env.NODE_ENV !== "production" && (Bu.displayName = "TabPane");
var rw = ["key", "forceRender", "style", "className"];
function iw(e) {
  var t = e.id, n = e.activeKey, r = e.animated, i = e.tabPosition, o = e.destroyInactiveTabPane, a = f.useContext(ms), s = a.prefixCls, l = a.tabs, u = r.tabPane, c = "".concat(s, "-tabpane");
  return /* @__PURE__ */ f.createElement("div", {
    className: Ee("".concat(s, "-content-holder"))
  }, /* @__PURE__ */ f.createElement("div", {
    className: Ee("".concat(s, "-content"), "".concat(s, "-content-").concat(i), U({}, "".concat(s, "-content-animated"), u))
  }, l.map(function(d) {
    var v = d.key, h = d.forceRender, p = d.style, m = d.className, b = We(d, rw), g = v === n;
    return /* @__PURE__ */ f.createElement(bo, ge({
      key: v,
      visible: g,
      forceRender: h,
      removeOnLeave: !!o,
      leavedClassName: "".concat(c, "-hidden")
    }, r.tabPaneMotion), function(y, S) {
      var C = y.style, _ = y.className;
      return /* @__PURE__ */ f.createElement(Bu, ge({}, b, {
        prefixCls: c,
        id: t,
        tabKey: v,
        animated: u,
        active: g,
        style: D(D({}, p), C),
        className: Ee(m, _),
        ref: S
      }));
    });
  })));
}
var Of = {
  width: 0,
  height: 0,
  left: 0,
  top: 0
};
function ow(e, t, n) {
  return Fr(function() {
    for (var r, i = /* @__PURE__ */ new Map(), o = t.get((r = e[0]) === null || r === void 0 ? void 0 : r.key) || Of, a = o.left + o.width, s = 0; s < e.length; s += 1) {
      var l = e[s].key, u = t.get(l);
      if (!u) {
        var c;
        u = t.get((c = e[s - 1]) === null || c === void 0 ? void 0 : c.key) || Of;
      }
      var d = i.get(l) || D({}, u);
      d.right = a - d.left - d.width, i.set(l, d);
    }
    return i;
  }, [e.map(function(r) {
    return r.key;
  }).join("_"), t, n]);
}
function xf(e, t) {
  var n = f.useRef(e), r = f.useState({}), i = F(r, 2), o = i[1];
  function a(s) {
    var l = typeof s == "function" ? s(n.current) : s;
    l !== n.current && t(l, n.current), n.current = l, o({});
  }
  return [n.current, a];
}
var aw = 0.1, Nf = 0.01, pa = 20, Pf = Math.pow(0.995, pa);
function sw(e, t) {
  var n = rt(), r = F(n, 2), i = r[0], o = r[1], a = rt(0), s = F(a, 2), l = s[0], u = s[1], c = rt(0), d = F(c, 2), v = d[0], h = d[1], p = rt(), m = F(p, 2), b = m[0], g = m[1], y = ae();
  function S(R) {
    var N = R.touches[0], $ = N.screenX, w = N.screenY;
    o({
      x: $,
      y: w
    }), window.clearInterval(y.current);
  }
  function C(R) {
    if (i) {
      R.preventDefault();
      var N = R.touches[0], $ = N.screenX, w = N.screenY;
      o({
        x: $,
        y: w
      });
      var O = $ - i.x, P = w - i.y;
      t(O, P);
      var M = Date.now();
      u(M), h(M - l), g({
        x: O,
        y: P
      });
    }
  }
  function _() {
    if (i && (o(null), g(null), b)) {
      var R = b.x / v, N = b.y / v, $ = Math.abs(R), w = Math.abs(N);
      if (Math.max($, w) < aw)
        return;
      var O = R, P = N;
      y.current = window.setInterval(function() {
        if (Math.abs(O) < Nf && Math.abs(P) < Nf) {
          window.clearInterval(y.current);
          return;
        }
        O *= Pf, P *= Pf, t(O * pa, P * pa);
      }, pa);
    }
  }
  var E = ae();
  function x(R) {
    var N = R.deltaX, $ = R.deltaY, w = 0, O = Math.abs(N), P = Math.abs($);
    O === P ? w = E.current === "x" ? N : $ : O > P ? (w = N, E.current = "x") : (w = $, E.current = "y"), t(-w, -w) && R.preventDefault();
  }
  var I = ae(null);
  I.current = {
    onTouchStart: S,
    onTouchMove: C,
    onTouchEnd: _,
    onWheel: x
  }, f.useEffect(function() {
    function R(O) {
      I.current.onTouchStart(O);
    }
    function N(O) {
      I.current.onTouchMove(O);
    }
    function $(O) {
      I.current.onTouchEnd(O);
    }
    function w(O) {
      I.current.onWheel(O);
    }
    return document.addEventListener("touchmove", N, {
      passive: !1
    }), document.addEventListener("touchend", $, {
      passive: !1
    }), e.current.addEventListener("touchstart", R, {
      passive: !1
    }), e.current.addEventListener("wheel", w), function() {
      document.removeEventListener("touchmove", N), document.removeEventListener("touchend", $);
    };
  }, []);
}
function Zh(e) {
  var t = rt(0), n = F(t, 2), r = n[0], i = n[1], o = ae(0), a = ae();
  return a.current = e, ml(function() {
    var s;
    (s = a.current) === null || s === void 0 || s.call(a);
  }, [r]), function() {
    o.current === r && (o.current += 1, i(o.current));
  };
}
function lw(e) {
  var t = ae([]), n = rt({}), r = F(n, 2), i = r[1], o = ae(typeof e == "function" ? e() : e), a = Zh(function() {
    var l = o.current;
    t.current.forEach(function(u) {
      l = u(l);
    }), t.current = [], o.current = l, i({});
  });
  function s(l) {
    t.current.push(l), a();
  }
  return [o.current, s];
}
var Mf = {
  width: 0,
  height: 0,
  left: 0,
  top: 0,
  right: 0
};
function uw(e, t, n, r, i, o, a) {
  var s = a.tabs, l = a.tabPosition, u = a.rtl, c, d, v;
  return ["top", "bottom"].includes(l) ? (c = "width", d = u ? "right" : "left", v = Math.abs(n)) : (c = "height", d = "top", v = -n), Fr(function() {
    if (!s.length)
      return [0, 0];
    for (var h = s.length, p = h, m = 0; m < h; m += 1) {
      var b = e.get(s[m].key) || Mf;
      if (b[d] + b[c] > v + t) {
        p = m - 1;
        break;
      }
    }
    for (var g = 0, y = h - 1; y >= 0; y -= 1) {
      var S = e.get(s[y].key) || Mf;
      if (S[d] < v) {
        g = y + 1;
        break;
      }
    }
    return g >= p ? [0, 0] : [g, p];
  }, [e, t, r, i, o, v, l, s.map(function(h) {
    return h.key;
  }).join("_"), u]);
}
function Rf(e) {
  var t;
  return e instanceof Map ? (t = {}, e.forEach(function(n, r) {
    t[r] = n;
  })) : t = e, JSON.stringify(t);
}
var cw = "TABS_DQ";
function ep(e) {
  return String(e).replace(/"/g, cw);
}
function fw(e, t) {
  var n = e.prefixCls, r = e.editable, i = e.locale, o = e.style;
  return !r || r.showAdd === !1 ? null : /* @__PURE__ */ f.createElement("button", {
    ref: t,
    type: "button",
    className: "".concat(n, "-nav-add"),
    style: o,
    "aria-label": i?.addAriaLabel || "Add tab",
    onClick: function(s) {
      r.onEdit("add", {
        event: s
      });
    }
  }, r.addIcon || "+");
}
const tp = /* @__PURE__ */ f.forwardRef(fw);
var Yl = /* @__PURE__ */ f.forwardRef(function(e, t) {
  var n = e.position, r = e.prefixCls, i = e.extra;
  if (!i)
    return null;
  var o, a = {};
  return Qe(i) === "object" && !/* @__PURE__ */ f.isValidElement(i) ? a = i : a.right = i, n === "right" && (o = a.right), n === "left" && (o = a.left), o ? /* @__PURE__ */ f.createElement("div", {
    className: "".concat(r, "-extra-content"),
    ref: t
  }, o) : null;
});
process.env.NODE_ENV !== "production" && (Yl.displayName = "ExtraContent");
function dw(e, t) {
  var n = e.prefixCls, r = e.id, i = e.tabs, o = e.locale, a = e.mobile, s = e.moreIcon, l = s === void 0 ? "More" : s, u = e.moreTransitionName, c = e.style, d = e.className, v = e.editable, h = e.tabBarGutter, p = e.rtl, m = e.removeAriaLabel, b = e.onTabClick, g = e.getPopupContainer, y = e.popupClassName, S = rt(!1), C = F(S, 2), _ = C[0], E = C[1], x = rt(null), I = F(x, 2), R = I[0], N = I[1], $ = "".concat(r, "-more-popup"), w = "".concat(n, "-dropdown"), O = R !== null ? "".concat($, "-").concat(R) : null, P = o?.dropdownAriaLabel;
  function M(V, G) {
    V.preventDefault(), V.stopPropagation(), v.onEdit("remove", {
      key: G,
      event: V
    });
  }
  var T = /* @__PURE__ */ f.createElement(wo, {
    onClick: function(G) {
      var q = G.key, Z = G.domEvent;
      b(q, Z), E(!1);
    },
    prefixCls: "".concat(w, "-menu"),
    id: $,
    tabIndex: -1,
    role: "listbox",
    "aria-activedescendant": O,
    selectedKeys: [R],
    "aria-label": P !== void 0 ? P : "expanded dropdown"
  }, i.map(function(V) {
    var G = v && V.closable !== !1 && !V.disabled;
    return /* @__PURE__ */ f.createElement(ps, {
      key: V.key,
      id: "".concat($, "-").concat(V.key),
      role: "option",
      "aria-controls": r && "".concat(r, "-panel-").concat(V.key),
      disabled: V.disabled
    }, /* @__PURE__ */ f.createElement("span", null, V.label), G && /* @__PURE__ */ f.createElement("button", {
      type: "button",
      "aria-label": m || "remove",
      tabIndex: 0,
      className: "".concat(w, "-menu-item-remove"),
      onClick: function(Z) {
        Z.stopPropagation(), M(Z, V.key);
      }
    }, V.closeIcon || v.removeIcon || "×"));
  }));
  function A(V) {
    for (var G = i.filter(function(B) {
      return !B.disabled;
    }), q = G.findIndex(function(B) {
      return B.key === R;
    }) || 0, Z = G.length, ce = 0; ce < Z; ce += 1) {
      q = (q + V + Z) % Z;
      var ee = G[q];
      if (!ee.disabled) {
        N(ee.key);
        return;
      }
    }
  }
  function k(V) {
    var G = V.which;
    if (!_) {
      [j.DOWN, j.SPACE, j.ENTER].includes(G) && (E(!0), V.preventDefault());
      return;
    }
    switch (G) {
      case j.UP:
        A(-1), V.preventDefault();
        break;
      case j.DOWN:
        A(1), V.preventDefault();
        break;
      case j.ESC:
        E(!1);
        break;
      case j.SPACE:
      case j.ENTER:
        R !== null && b(R, V);
        break;
    }
  }
  ot(function() {
    var V = document.getElementById(O);
    V && V.scrollIntoView && V.scrollIntoView(!1);
  }, [R]), ot(function() {
    _ || N(null);
  }, [_]);
  var H = U({}, p ? "marginRight" : "marginLeft", h);
  i.length || (H.visibility = "hidden", H.order = 1);
  var Y = Ee(U({}, "".concat(w, "-rtl"), p)), K = a ? null : /* @__PURE__ */ f.createElement(v1, {
    prefixCls: w,
    overlay: T,
    trigger: ["hover"],
    visible: i.length ? _ : !1,
    transitionName: u,
    onVisibleChange: E,
    overlayClassName: Ee(Y, y),
    mouseEnterDelay: 0.1,
    mouseLeaveDelay: 0.1,
    getPopupContainer: g
  }, /* @__PURE__ */ f.createElement("button", {
    type: "button",
    className: "".concat(n, "-nav-more"),
    style: H,
    tabIndex: -1,
    "aria-hidden": "true",
    "aria-haspopup": "listbox",
    "aria-controls": $,
    id: "".concat(r, "-more"),
    "aria-expanded": _,
    onKeyDown: k
  }, l));
  return /* @__PURE__ */ f.createElement("div", {
    className: Ee("".concat(n, "-nav-operations"), d),
    style: c,
    ref: t
  }, K, /* @__PURE__ */ f.createElement(tp, {
    prefixCls: n,
    locale: o,
    editable: v
  }));
}
const vw = /* @__PURE__ */ f.memo(/* @__PURE__ */ f.forwardRef(dw), function(e, t) {
  return (
    // https://github.com/ant-design/ant-design/issues/32544
    // We'd better remove syntactic sugar in `rc-menu` since this has perf issue
    t.tabMoving
  );
});
function hw(e) {
  var t, n = e.prefixCls, r = e.id, i = e.active, o = e.tab, a = o.key, s = o.label, l = o.disabled, u = o.closeIcon, c = e.closable, d = e.renderWrapper, v = e.removeAriaLabel, h = e.editable, p = e.onClick, m = e.onFocus, b = e.style, g = "".concat(n, "-tab"), y = h && c !== !1 && !l;
  function S(E) {
    l || p(E);
  }
  function C(E) {
    E.preventDefault(), E.stopPropagation(), h.onEdit("remove", {
      key: a,
      event: E
    });
  }
  var _ = /* @__PURE__ */ f.createElement("div", {
    key: a,
    "data-node-key": ep(a),
    className: Ee(g, (t = {}, U(t, "".concat(g, "-with-remove"), y), U(t, "".concat(g, "-active"), i), U(t, "".concat(g, "-disabled"), l), t)),
    style: b,
    onClick: S
  }, /* @__PURE__ */ f.createElement("div", {
    role: "tab",
    "aria-selected": i,
    id: r && "".concat(r, "-tab-").concat(a),
    className: "".concat(g, "-btn"),
    "aria-controls": r && "".concat(r, "-panel-").concat(a),
    "aria-disabled": l,
    tabIndex: l ? null : 0,
    onClick: function(x) {
      x.stopPropagation(), S(x);
    },
    onKeyDown: function(x) {
      [j.SPACE, j.ENTER].includes(x.which) && (x.preventDefault(), S(x));
    },
    onFocus: m
  }, s), y && /* @__PURE__ */ f.createElement("button", {
    type: "button",
    "aria-label": v || "remove",
    tabIndex: 0,
    className: "".concat(g, "-remove"),
    onClick: function(x) {
      x.stopPropagation(), C(x);
    }
  }, u || h.removeIcon || "×"));
  return d ? d(_) : _;
}
var Qr = function(t) {
  var n = t.current || {}, r = n.offsetWidth, i = r === void 0 ? 0 : r, o = n.offsetHeight, a = o === void 0 ? 0 : o;
  return [i, a];
}, Zo = function(t, n) {
  return t[n ? 0 : 1];
};
function pw(e, t) {
  var n, r = f.useContext(ms), i = r.prefixCls, o = r.tabs, a = e.className, s = e.style, l = e.id, u = e.animated, c = e.activeKey, d = e.rtl, v = e.extra, h = e.editable, p = e.locale, m = e.tabPosition, b = e.tabBarGutter, g = e.children, y = e.onTabClick, S = e.onTabScroll, C = ae(), _ = ae(), E = ae(), x = ae(), I = ae(), R = ae(), N = ae(), $ = m === "top" || m === "bottom", w = xf(0, function(Oe, we) {
    $ && S && S({
      direction: Oe > we ? "left" : "right"
    });
  }), O = F(w, 2), P = O[0], M = O[1], T = xf(0, function(Oe, we) {
    !$ && S && S({
      direction: Oe > we ? "top" : "bottom"
    });
  }), A = F(T, 2), k = A[0], H = A[1], Y = rt([0, 0]), K = F(Y, 2), V = K[0], G = K[1], q = rt([0, 0]), Z = F(q, 2), ce = Z[0], ee = Z[1], B = rt([0, 0]), Q = F(B, 2), me = Q[0], te = Q[1], L = rt([0, 0]), le = F(L, 2), J = le[0], pe = le[1], ne = lw(/* @__PURE__ */ new Map()), Ne = F(ne, 2), ye = Ne[0], Ce = Ne[1], fe = ow(o, ye, ce[0]), he = Zo(V, $), Ie = Zo(ce, $), Ve = Zo(me, $), ke = Zo(J, $), Re = he < Ie + Ve, Ke = Re ? he - ke : he - Ve, ft = "".concat(i, "-nav-operations-hidden"), Ze = 0, De = 0;
  $ && d ? (Ze = 0, De = Math.max(0, Ie - Ke)) : (Ze = Math.min(0, Ke - Ie), De = 0);
  function je(Oe) {
    return Oe < Ze ? Ze : Oe > De ? De : Oe;
  }
  var Je = ae(), Rt = rt(), ze = F(Rt, 2), re = ze[0], se = ze[1];
  function Be() {
    se(Date.now());
  }
  function tt() {
    window.clearTimeout(Je.current);
  }
  sw(x, function(Oe, we) {
    function pt(ct, It) {
      ct(function(Ft) {
        var jn = je(Ft + It);
        return jn;
      });
    }
    return Re ? ($ ? pt(M, Oe) : pt(H, we), tt(), Be(), !0) : !1;
  }), ot(function() {
    return tt(), re && (Je.current = window.setTimeout(function() {
      se(0);
    }, 100)), tt;
  }, [re]);
  var at = uw(
    fe,
    // Container
    Ke,
    // Transform
    $ ? P : k,
    // Tabs
    Ie,
    // Add
    Ve,
    // Operation
    ke,
    D(D({}, e), {}, {
      tabs: o
    })
  ), Fe = F(at, 2), Le = Fe[0], ht = Fe[1], bt = $n(function() {
    var Oe = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : c, we = fe.get(Oe) || {
      width: 0,
      height: 0,
      left: 0,
      right: 0,
      top: 0
    };
    if ($) {
      var pt = P;
      d ? we.right < P ? pt = we.right : we.right + we.width > P + Ke && (pt = we.right + we.width - Ke) : we.left < -P ? pt = -we.left : we.left + we.width > -P + Ke && (pt = -(we.left + we.width - Ke)), H(0), M(je(pt));
    } else {
      var ct = k;
      we.top < -k ? ct = -we.top : we.top + we.height > -k + Ke && (ct = -(we.top + we.height - Ke)), M(0), H(je(ct));
    }
  }), Ge = {};
  m === "top" || m === "bottom" ? Ge[d ? "marginRight" : "marginLeft"] = b : Ge.marginTop = b;
  var xt = o.map(function(Oe, we) {
    var pt = Oe.key;
    return /* @__PURE__ */ f.createElement(hw, {
      id: l,
      prefixCls: i,
      key: pt,
      tab: Oe,
      style: we === 0 ? void 0 : Ge,
      closable: Oe.closable,
      editable: h,
      active: pt === c,
      renderWrapper: g,
      removeAriaLabel: p?.removeAriaLabel,
      onClick: function(It) {
        y(pt, It);
      },
      onFocus: function() {
        bt(pt), Be(), x.current && (d || (x.current.scrollLeft = 0), x.current.scrollTop = 0);
      }
    });
  }), Nt = function() {
    return Ce(function() {
      var we = /* @__PURE__ */ new Map();
      return o.forEach(function(pt) {
        var ct, It = pt.key, Ft = (ct = I.current) === null || ct === void 0 ? void 0 : ct.querySelector('[data-node-key="'.concat(ep(It), '"]'));
        Ft && we.set(It, {
          width: Ft.offsetWidth,
          height: Ft.offsetHeight,
          left: Ft.offsetLeft,
          top: Ft.offsetTop
        });
      }), we;
    });
  };
  ot(function() {
    Nt();
  }, [o.map(function(Oe) {
    return Oe.key;
  }).join("_")]);
  var Tt = Zh(function() {
    var Oe = Qr(C), we = Qr(_), pt = Qr(E);
    G([Oe[0] - we[0] - pt[0], Oe[1] - we[1] - pt[1]]);
    var ct = Qr(N);
    te(ct);
    var It = Qr(R);
    pe(It);
    var Ft = Qr(I);
    ee([Ft[0] - ct[0], Ft[1] - ct[1]]), Nt();
  }), be = o.slice(0, Le), X = o.slice(ht + 1), W = [].concat(de(be), de(X)), ue = rt(), ve = F(ue, 2), Pe = ve[0], qe = ve[1], ut = fe.get(c), yt = ae();
  function _t() {
    Ot.cancel(yt.current);
  }
  ot(function() {
    var Oe = {};
    return ut && ($ ? (d ? Oe.right = ut.right : Oe.left = ut.left, Oe.width = ut.width) : (Oe.top = ut.top, Oe.height = ut.height)), _t(), yt.current = Ot(function() {
      qe(Oe);
    }), _t;
  }, [ut, $, d]), ot(function() {
    bt();
  }, [c, Ze, De, Rf(ut), Rf(fe), $]), ot(function() {
    Tt();
  }, [d]);
  var nt = !!W.length, Et = "".concat(i, "-nav-wrap"), dt, Wt, mn, $t;
  return $ ? d ? (Wt = P > 0, dt = P !== De) : (dt = P < 0, Wt = P !== Ze) : (mn = k < 0, $t = k !== Ze), /* @__PURE__ */ f.createElement(ar, {
    onResize: Tt
  }, /* @__PURE__ */ f.createElement("div", {
    ref: po(t, C),
    role: "tablist",
    className: Ee("".concat(i, "-nav"), a),
    style: s,
    onKeyDown: function() {
      Be();
    }
  }, /* @__PURE__ */ f.createElement(Yl, {
    ref: _,
    position: "left",
    extra: v,
    prefixCls: i
  }), /* @__PURE__ */ f.createElement("div", {
    className: Ee(Et, (n = {}, U(n, "".concat(Et, "-ping-left"), dt), U(n, "".concat(Et, "-ping-right"), Wt), U(n, "".concat(Et, "-ping-top"), mn), U(n, "".concat(Et, "-ping-bottom"), $t), n)),
    ref: x
  }, /* @__PURE__ */ f.createElement(ar, {
    onResize: Tt
  }, /* @__PURE__ */ f.createElement("div", {
    ref: I,
    className: "".concat(i, "-nav-list"),
    style: {
      transform: "translate(".concat(P, "px, ").concat(k, "px)"),
      transition: re ? "none" : void 0
    }
  }, xt, /* @__PURE__ */ f.createElement(tp, {
    ref: N,
    prefixCls: i,
    locale: p,
    editable: h,
    style: D(D({}, xt.length === 0 ? void 0 : Ge), {}, {
      visibility: nt ? "hidden" : null
    })
  }), /* @__PURE__ */ f.createElement("div", {
    className: Ee("".concat(i, "-ink-bar"), U({}, "".concat(i, "-ink-bar-animated"), u.inkBar)),
    style: Pe
  })))), /* @__PURE__ */ f.createElement(vw, ge({}, e, {
    removeAriaLabel: p?.removeAriaLabel,
    ref: R,
    prefixCls: i,
    tabs: W,
    className: !nt && ft,
    tabMoving: !!re
  })), /* @__PURE__ */ f.createElement(Yl, {
    ref: E,
    position: "right",
    extra: v,
    prefixCls: i
  })));
}
const Tf = /* @__PURE__ */ f.forwardRef(pw);
var mw = ["renderTabBar"], gw = ["label", "key"];
function bw(e) {
  var t = e.renderTabBar, n = We(e, mw), r = f.useContext(ms), i = r.tabs;
  if (t) {
    var o = D(D({}, n), {}, {
      // Legacy support. We do not use this actually
      panes: i.map(function(a) {
        var s = a.label, l = a.key, u = We(a, gw);
        return /* @__PURE__ */ f.createElement(Bu, ge({
          tab: s,
          key: l,
          tabKey: l
        }, u));
      })
    });
    return t(o, Tf);
  }
  return /* @__PURE__ */ f.createElement(Tf, n);
}
function yw() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
    inkBar: !0,
    tabPane: !1
  }, t;
  return e === !1 ? t = {
    inkBar: !1,
    tabPane: !1
  } : e === !0 ? t = {
    inkBar: !0,
    tabPane: !1
  } : t = D({
    inkBar: !0
  }, Qe(e) === "object" ? e : {}), t.tabPaneMotion && t.tabPane === void 0 && (t.tabPane = !0), !t.tabPaneMotion && t.tabPane && (process.env.NODE_ENV !== "production" && $e(!1, "`animated.tabPane` is true but `animated.tabPaneMotion` is not provided. Motion will not work."), t.tabPane = !1), t;
}
var _w = ["id", "prefixCls", "className", "items", "direction", "activeKey", "defaultActiveKey", "editable", "animated", "tabPosition", "tabBarGutter", "tabBarStyle", "tabBarExtraContent", "locale", "moreIcon", "moreTransitionName", "destroyInactiveTabPane", "renderTabBar", "onChange", "onTabClick", "onTabScroll", "getPopupContainer", "popupClassName"], $f = 0;
function Sw(e, t) {
  var n, r = e.id, i = e.prefixCls, o = i === void 0 ? "rc-tabs" : i, a = e.className, s = e.items, l = e.direction, u = e.activeKey, c = e.defaultActiveKey, d = e.editable, v = e.animated, h = e.tabPosition, p = h === void 0 ? "top" : h, m = e.tabBarGutter, b = e.tabBarStyle, g = e.tabBarExtraContent, y = e.locale, S = e.moreIcon, C = e.moreTransitionName, _ = e.destroyInactiveTabPane, E = e.renderTabBar, x = e.onChange, I = e.onTabClick, R = e.onTabScroll, N = e.getPopupContainer, $ = e.popupClassName, w = We(e, _w), O = f.useMemo(function() {
    return (s || []).filter(function(ne) {
      return ne && Qe(ne) === "object" && "key" in ne;
    });
  }, [s]), P = l === "rtl", M = yw(v), T = rt(!1), A = F(T, 2), k = A[0], H = A[1];
  ot(function() {
    H(Mu());
  }, []);
  var Y = Bn(function() {
    var ne;
    return (ne = O[0]) === null || ne === void 0 ? void 0 : ne.key;
  }, {
    value: u,
    defaultValue: c
  }), K = F(Y, 2), V = K[0], G = K[1], q = rt(function() {
    return O.findIndex(function(ne) {
      return ne.key === V;
    });
  }), Z = F(q, 2), ce = Z[0], ee = Z[1];
  ot(function() {
    var ne = O.findIndex(function(ye) {
      return ye.key === V;
    });
    if (ne === -1) {
      var Ne;
      ne = Math.max(0, Math.min(ce, O.length - 1)), G((Ne = O[ne]) === null || Ne === void 0 ? void 0 : Ne.key);
    }
    ee(ne);
  }, [O.map(function(ne) {
    return ne.key;
  }).join("_"), V, ce]);
  var B = Bn(null, {
    value: r
  }), Q = F(B, 2), me = Q[0], te = Q[1];
  ot(function() {
    r || (te("rc-tabs-".concat(process.env.NODE_ENV === "test" ? "test" : $f)), $f += 1);
  }, []);
  function L(ne, Ne) {
    I?.(ne, Ne);
    var ye = ne !== V;
    G(ne), ye && x?.(ne);
  }
  var le = {
    id: me,
    activeKey: V,
    animated: M,
    tabPosition: p,
    rtl: P,
    mobile: k
  }, J, pe = D(D({}, le), {}, {
    editable: d,
    locale: y,
    moreIcon: S,
    moreTransitionName: C,
    tabBarGutter: m,
    onTabClick: L,
    onTabScroll: R,
    extra: g,
    style: b,
    panes: null,
    getPopupContainer: N,
    popupClassName: $
  });
  return /* @__PURE__ */ f.createElement(ms.Provider, {
    value: {
      tabs: O,
      prefixCls: o
    }
  }, /* @__PURE__ */ f.createElement("div", ge({
    ref: t,
    id: r,
    className: Ee(o, "".concat(o, "-").concat(p), (n = {}, U(n, "".concat(o, "-mobile"), k), U(n, "".concat(o, "-editable"), d), U(n, "".concat(o, "-rtl"), P), n), a)
  }, w), J, /* @__PURE__ */ f.createElement(bw, ge({}, pe, {
    renderTabBar: E
  })), /* @__PURE__ */ f.createElement(iw, ge({
    destroyInactiveTabPane: _
  }, le, {
    animated: M
  }))));
}
var np = /* @__PURE__ */ f.forwardRef(Sw);
process.env.NODE_ENV !== "production" && (np.displayName = "Tabs");
const rp = () => null;
process.env.NODE_ENV !== "production" && (rp.displayName = "DeprecatedTabPane");
const Ew = rp, ww = {
  motionAppear: !1,
  motionEnter: !0,
  motionLeave: !0
};
function Cw(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    inkBar: !0,
    tabPane: !1
  }, n;
  return t === !1 ? n = {
    inkBar: !1,
    tabPane: !1
  } : t === !0 ? n = {
    inkBar: !0,
    tabPane: !0
  } : n = Object.assign({
    inkBar: !0
  }, typeof t == "object" ? t : {}), n.tabPane && (n.tabPaneMotion = Object.assign(Object.assign({}, ww), {
    motionName: qv(e, "switch")
  })), n;
}
var Ow = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  return n;
};
function xw(e) {
  return e.filter((t) => t);
}
function Nw(e, t) {
  if (e)
    return e;
  process.env.NODE_ENV !== "production" && qn(!t, "Tabs", "Tabs.TabPane is deprecated. Please use `items` directly.");
  const n = or(t).map((r) => {
    if (/* @__PURE__ */ f.isValidElement(r)) {
      const {
        key: i,
        props: o
      } = r, a = o || {}, {
        tab: s
      } = a, l = Ow(a, ["tab"]);
      return Object.assign(Object.assign({
        key: String(i)
      }, l), {
        label: s
      });
    }
    return null;
  });
  return xw(n);
}
const Pw = (e) => {
  const {
    componentCls: t,
    motionDurationSlow: n
  } = e;
  return [
    {
      [t]: {
        [`${t}-switch`]: {
          "&-appear, &-enter": {
            transition: "none",
            "&-start": {
              opacity: 0
            },
            "&-active": {
              opacity: 1,
              transition: `opacity ${n}`
            }
          },
          "&-leave": {
            position: "absolute",
            transition: "none",
            inset: 0,
            "&-start": {
              opacity: 1
            },
            "&-active": {
              opacity: 0,
              transition: `opacity ${n}`
            }
          }
        }
      }
    },
    // Follow code may reuse in other components
    [Fa(e, "slide-up"), Fa(e, "slide-down")]
  ];
}, Mw = Pw, Rw = (e) => {
  const {
    componentCls: t,
    tabsCardPadding: n,
    cardBg: r,
    cardGutter: i,
    colorBorderSecondary: o,
    itemSelectedColor: a
  } = e;
  return {
    [`${t}-card`]: {
      [`> ${t}-nav, > div > ${t}-nav`]: {
        [`${t}-tab`]: {
          margin: 0,
          padding: n,
          background: r,
          border: `${e.lineWidth}px ${e.lineType} ${o}`,
          transition: `all ${e.motionDurationSlow} ${e.motionEaseInOut}`
        },
        [`${t}-tab-active`]: {
          color: a,
          background: e.colorBgContainer
        },
        [`${t}-ink-bar`]: {
          visibility: "hidden"
        }
      },
      // ========================== Top & Bottom ==========================
      [`&${t}-top, &${t}-bottom`]: {
        [`> ${t}-nav, > div > ${t}-nav`]: {
          [`${t}-tab + ${t}-tab`]: {
            marginLeft: {
              _skip_check_: !0,
              value: `${i}px`
            }
          }
        }
      },
      [`&${t}-top`]: {
        [`> ${t}-nav, > div > ${t}-nav`]: {
          [`${t}-tab`]: {
            borderRadius: `${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`
          },
          [`${t}-tab-active`]: {
            borderBottomColor: e.colorBgContainer
          }
        }
      },
      [`&${t}-bottom`]: {
        [`> ${t}-nav, > div > ${t}-nav`]: {
          [`${t}-tab`]: {
            borderRadius: `0 0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px`
          },
          [`${t}-tab-active`]: {
            borderTopColor: e.colorBgContainer
          }
        }
      },
      // ========================== Left & Right ==========================
      [`&${t}-left, &${t}-right`]: {
        [`> ${t}-nav, > div > ${t}-nav`]: {
          [`${t}-tab + ${t}-tab`]: {
            marginTop: `${i}px`
          }
        }
      },
      [`&${t}-left`]: {
        [`> ${t}-nav, > div > ${t}-nav`]: {
          [`${t}-tab`]: {
            borderRadius: {
              _skip_check_: !0,
              value: `${e.borderRadiusLG}px 0 0 ${e.borderRadiusLG}px`
            }
          },
          [`${t}-tab-active`]: {
            borderRightColor: {
              _skip_check_: !0,
              value: e.colorBgContainer
            }
          }
        }
      },
      [`&${t}-right`]: {
        [`> ${t}-nav, > div > ${t}-nav`]: {
          [`${t}-tab`]: {
            borderRadius: {
              _skip_check_: !0,
              value: `0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px 0`
            }
          },
          [`${t}-tab-active`]: {
            borderLeftColor: {
              _skip_check_: !0,
              value: e.colorBgContainer
            }
          }
        }
      }
    }
  };
}, Tw = (e) => {
  const {
    componentCls: t,
    itemHoverColor: n,
    dropdownEdgeChildVerticalPadding: r
  } = e;
  return {
    [`${t}-dropdown`]: Object.assign(Object.assign({}, mo(e)), {
      position: "absolute",
      top: -9999,
      left: {
        _skip_check_: !0,
        value: -9999
      },
      zIndex: e.zIndexPopup,
      display: "block",
      "&-hidden": {
        display: "none"
      },
      [`${t}-dropdown-menu`]: {
        maxHeight: e.tabsDropdownHeight,
        margin: 0,
        padding: `${r}px 0`,
        overflowX: "hidden",
        overflowY: "auto",
        textAlign: {
          _skip_check_: !0,
          value: "left"
        },
        listStyleType: "none",
        backgroundColor: e.colorBgContainer,
        backgroundClip: "padding-box",
        borderRadius: e.borderRadiusLG,
        outline: "none",
        boxShadow: e.boxShadowSecondary,
        "&-item": Object.assign(Object.assign({}, $a), {
          display: "flex",
          alignItems: "center",
          minWidth: e.tabsDropdownWidth,
          margin: 0,
          padding: `${e.paddingXXS}px ${e.paddingSM}px`,
          color: e.colorText,
          fontWeight: "normal",
          fontSize: e.fontSize,
          lineHeight: e.lineHeight,
          cursor: "pointer",
          transition: `all ${e.motionDurationSlow}`,
          "> span": {
            flex: 1,
            whiteSpace: "nowrap"
          },
          "&-remove": {
            flex: "none",
            marginLeft: {
              _skip_check_: !0,
              value: e.marginSM
            },
            color: e.colorTextDescription,
            fontSize: e.fontSizeSM,
            background: "transparent",
            border: 0,
            cursor: "pointer",
            "&:hover": {
              color: n
            }
          },
          "&:hover": {
            background: e.controlItemBgHover
          },
          "&-disabled": {
            "&, &:hover": {
              color: e.colorTextDisabled,
              background: "transparent",
              cursor: "not-allowed"
            }
          }
        })
      }
    })
  };
}, $w = (e) => {
  const {
    componentCls: t,
    margin: n,
    colorBorderSecondary: r,
    horizontalMargin: i,
    verticalItemPadding: o,
    verticalItemMargin: a
  } = e;
  return {
    // ========================== Top & Bottom ==========================
    [`${t}-top, ${t}-bottom`]: {
      flexDirection: "column",
      [`> ${t}-nav, > div > ${t}-nav`]: {
        margin: i,
        "&::before": {
          position: "absolute",
          right: {
            _skip_check_: !0,
            value: 0
          },
          left: {
            _skip_check_: !0,
            value: 0
          },
          borderBottom: `${e.lineWidth}px ${e.lineType} ${r}`,
          content: "''"
        },
        [`${t}-ink-bar`]: {
          height: e.lineWidthBold,
          "&-animated": {
            transition: `width ${e.motionDurationSlow}, left ${e.motionDurationSlow},
            right ${e.motionDurationSlow}`
          }
        },
        [`${t}-nav-wrap`]: {
          "&::before, &::after": {
            top: 0,
            bottom: 0,
            width: e.controlHeight
          },
          "&::before": {
            left: {
              _skip_check_: !0,
              value: 0
            },
            boxShadow: e.boxShadowTabsOverflowLeft
          },
          "&::after": {
            right: {
              _skip_check_: !0,
              value: 0
            },
            boxShadow: e.boxShadowTabsOverflowRight
          },
          [`&${t}-nav-wrap-ping-left::before`]: {
            opacity: 1
          },
          [`&${t}-nav-wrap-ping-right::after`]: {
            opacity: 1
          }
        }
      }
    },
    [`${t}-top`]: {
      [`> ${t}-nav,
        > div > ${t}-nav`]: {
        "&::before": {
          bottom: 0
        },
        [`${t}-ink-bar`]: {
          bottom: 0
        }
      }
    },
    [`${t}-bottom`]: {
      [`> ${t}-nav, > div > ${t}-nav`]: {
        order: 1,
        marginTop: `${n}px`,
        marginBottom: 0,
        "&::before": {
          top: 0
        },
        [`${t}-ink-bar`]: {
          top: 0
        }
      },
      [`> ${t}-content-holder, > div > ${t}-content-holder`]: {
        order: 0
      }
    },
    // ========================== Left & Right ==========================
    [`${t}-left, ${t}-right`]: {
      [`> ${t}-nav, > div > ${t}-nav`]: {
        flexDirection: "column",
        minWidth: e.controlHeight * 1.25,
        // >>>>>>>>>>> Tab
        [`${t}-tab`]: {
          padding: o,
          textAlign: "center"
        },
        [`${t}-tab + ${t}-tab`]: {
          margin: a
        },
        // >>>>>>>>>>> Nav
        [`${t}-nav-wrap`]: {
          flexDirection: "column",
          "&::before, &::after": {
            right: {
              _skip_check_: !0,
              value: 0
            },
            left: {
              _skip_check_: !0,
              value: 0
            },
            height: e.controlHeight
          },
          "&::before": {
            top: 0,
            boxShadow: e.boxShadowTabsOverflowTop
          },
          "&::after": {
            bottom: 0,
            boxShadow: e.boxShadowTabsOverflowBottom
          },
          [`&${t}-nav-wrap-ping-top::before`]: {
            opacity: 1
          },
          [`&${t}-nav-wrap-ping-bottom::after`]: {
            opacity: 1
          }
        },
        // >>>>>>>>>>> Ink Bar
        [`${t}-ink-bar`]: {
          width: e.lineWidthBold,
          "&-animated": {
            transition: `height ${e.motionDurationSlow}, top ${e.motionDurationSlow}`
          }
        },
        [`${t}-nav-list, ${t}-nav-operations`]: {
          flex: "1 0 auto",
          flexDirection: "column"
        }
      }
    },
    [`${t}-left`]: {
      [`> ${t}-nav, > div > ${t}-nav`]: {
        [`${t}-ink-bar`]: {
          right: {
            _skip_check_: !0,
            value: 0
          }
        }
      },
      [`> ${t}-content-holder, > div > ${t}-content-holder`]: {
        marginLeft: {
          _skip_check_: !0,
          value: `-${e.lineWidth}px`
        },
        borderLeft: {
          _skip_check_: !0,
          value: `${e.lineWidth}px ${e.lineType} ${e.colorBorder}`
        },
        [`> ${t}-content > ${t}-tabpane`]: {
          paddingLeft: {
            _skip_check_: !0,
            value: e.paddingLG
          }
        }
      }
    },
    [`${t}-right`]: {
      [`> ${t}-nav, > div > ${t}-nav`]: {
        order: 1,
        [`${t}-ink-bar`]: {
          left: {
            _skip_check_: !0,
            value: 0
          }
        }
      },
      [`> ${t}-content-holder, > div > ${t}-content-holder`]: {
        order: 0,
        marginRight: {
          _skip_check_: !0,
          value: -e.lineWidth
        },
        borderRight: {
          _skip_check_: !0,
          value: `${e.lineWidth}px ${e.lineType} ${e.colorBorder}`
        },
        [`> ${t}-content > ${t}-tabpane`]: {
          paddingRight: {
            _skip_check_: !0,
            value: e.paddingLG
          }
        }
      }
    }
  };
}, Iw = (e) => {
  const {
    componentCls: t,
    cardPaddingSM: n,
    cardPaddingLG: r,
    horizontalItemPaddingSM: i,
    horizontalItemPaddingLG: o
  } = e;
  return {
    [t]: {
      "&-small": {
        [`> ${t}-nav`]: {
          [`${t}-tab`]: {
            padding: i,
            fontSize: e.titleFontSizeSM
          }
        }
      },
      "&-large": {
        [`> ${t}-nav`]: {
          [`${t}-tab`]: {
            padding: o,
            fontSize: e.titleFontSizeLG
          }
        }
      }
    },
    [`${t}-card`]: {
      [`&${t}-small`]: {
        [`> ${t}-nav`]: {
          [`${t}-tab`]: {
            padding: n
          }
        },
        [`&${t}-bottom`]: {
          [`> ${t}-nav ${t}-tab`]: {
            borderRadius: `0 0 ${e.borderRadius}px ${e.borderRadius}px`
          }
        },
        [`&${t}-top`]: {
          [`> ${t}-nav ${t}-tab`]: {
            borderRadius: `${e.borderRadius}px ${e.borderRadius}px 0 0`
          }
        },
        [`&${t}-right`]: {
          [`> ${t}-nav ${t}-tab`]: {
            borderRadius: {
              _skip_check_: !0,
              value: `0 ${e.borderRadius}px ${e.borderRadius}px 0`
            }
          }
        },
        [`&${t}-left`]: {
          [`> ${t}-nav ${t}-tab`]: {
            borderRadius: {
              _skip_check_: !0,
              value: `${e.borderRadius}px 0 0 ${e.borderRadius}px`
            }
          }
        }
      },
      [`&${t}-large`]: {
        [`> ${t}-nav`]: {
          [`${t}-tab`]: {
            padding: r
          }
        }
      }
    }
  };
}, Aw = (e) => {
  const {
    componentCls: t,
    itemActiveColor: n,
    itemHoverColor: r,
    iconCls: i,
    tabsHorizontalItemMargin: o,
    horizontalItemPadding: a,
    itemSelectedColor: s
  } = e, l = `${t}-tab`;
  return {
    [l]: {
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      padding: a,
      fontSize: e.titleFontSize,
      background: "transparent",
      border: 0,
      outline: "none",
      cursor: "pointer",
      "&-btn, &-remove": Object.assign({
        "&:focus:not(:focus-visible), &:active": {
          color: n
        }
      }, Ev(e)),
      "&-btn": {
        outline: "none",
        transition: "all 0.3s"
      },
      "&-remove": {
        flex: "none",
        marginRight: {
          _skip_check_: !0,
          value: -e.marginXXS
        },
        marginLeft: {
          _skip_check_: !0,
          value: e.marginXS
        },
        color: e.colorTextDescription,
        fontSize: e.fontSizeSM,
        background: "transparent",
        border: "none",
        outline: "none",
        cursor: "pointer",
        transition: `all ${e.motionDurationSlow}`,
        "&:hover": {
          color: e.colorTextHeading
        }
      },
      "&:hover": {
        color: r
      },
      [`&${l}-active ${l}-btn`]: {
        color: s,
        textShadow: e.tabsActiveTextShadow
      },
      [`&${l}-disabled`]: {
        color: e.colorTextDisabled,
        cursor: "not-allowed"
      },
      [`&${l}-disabled ${l}-btn, &${l}-disabled ${t}-remove`]: {
        "&:focus, &:active": {
          color: e.colorTextDisabled
        }
      },
      [`& ${l}-remove ${i}`]: {
        margin: 0
      },
      [i]: {
        marginRight: {
          _skip_check_: !0,
          value: e.marginSM
        }
      }
    },
    [`${l} + ${l}`]: {
      margin: {
        _skip_check_: !0,
        value: o
      }
    }
  };
}, Dw = (e) => {
  const {
    componentCls: t,
    tabsHorizontalItemMarginRTL: n,
    iconCls: r,
    cardGutter: i
  } = e;
  return {
    [`${t}-rtl`]: {
      direction: "rtl",
      [`${t}-nav`]: {
        [`${t}-tab`]: {
          margin: {
            _skip_check_: !0,
            value: n
          },
          [`${t}-tab:last-of-type`]: {
            marginLeft: {
              _skip_check_: !0,
              value: 0
            }
          },
          [r]: {
            marginRight: {
              _skip_check_: !0,
              value: 0
            },
            marginLeft: {
              _skip_check_: !0,
              value: `${e.marginSM}px`
            }
          },
          [`${t}-tab-remove`]: {
            marginRight: {
              _skip_check_: !0,
              value: `${e.marginXS}px`
            },
            marginLeft: {
              _skip_check_: !0,
              value: `-${e.marginXXS}px`
            },
            [r]: {
              margin: 0
            }
          }
        }
      },
      [`&${t}-left`]: {
        [`> ${t}-nav`]: {
          order: 1
        },
        [`> ${t}-content-holder`]: {
          order: 0
        }
      },
      [`&${t}-right`]: {
        [`> ${t}-nav`]: {
          order: 0
        },
        [`> ${t}-content-holder`]: {
          order: 1
        }
      },
      // ====================== Card ======================
      [`&${t}-card${t}-top, &${t}-card${t}-bottom`]: {
        [`> ${t}-nav, > div > ${t}-nav`]: {
          [`${t}-tab + ${t}-tab`]: {
            marginRight: {
              _skip_check_: !0,
              value: i
            },
            marginLeft: {
              _skip_check_: !0,
              value: 0
            }
          }
        }
      }
    },
    [`${t}-dropdown-rtl`]: {
      direction: "rtl"
    },
    [`${t}-menu-item`]: {
      [`${t}-dropdown-rtl`]: {
        textAlign: {
          _skip_check_: !0,
          value: "right"
        }
      }
    }
  };
}, Fw = (e) => {
  const {
    componentCls: t,
    tabsCardPadding: n,
    cardHeight: r,
    cardGutter: i,
    itemHoverColor: o,
    itemActiveColor: a,
    colorBorderSecondary: s
  } = e;
  return {
    [t]: Object.assign(Object.assign(Object.assign(Object.assign({}, mo(e)), {
      display: "flex",
      // ========================== Navigation ==========================
      [`> ${t}-nav, > div > ${t}-nav`]: {
        position: "relative",
        display: "flex",
        flex: "none",
        alignItems: "center",
        [`${t}-nav-wrap`]: {
          position: "relative",
          display: "flex",
          flex: "auto",
          alignSelf: "stretch",
          overflow: "hidden",
          whiteSpace: "nowrap",
          transform: "translate(0)",
          // >>>>> Ping shadow
          "&::before, &::after": {
            position: "absolute",
            zIndex: 1,
            opacity: 0,
            transition: `opacity ${e.motionDurationSlow}`,
            content: "''",
            pointerEvents: "none"
          }
        },
        [`${t}-nav-list`]: {
          position: "relative",
          display: "flex",
          transition: `opacity ${e.motionDurationSlow}`
        },
        // >>>>>>>> Operations
        [`${t}-nav-operations`]: {
          display: "flex",
          alignSelf: "stretch"
        },
        [`${t}-nav-operations-hidden`]: {
          position: "absolute",
          visibility: "hidden",
          pointerEvents: "none"
        },
        [`${t}-nav-more`]: {
          position: "relative",
          padding: n,
          background: "transparent",
          border: 0,
          color: e.colorText,
          "&::after": {
            position: "absolute",
            right: {
              _skip_check_: !0,
              value: 0
            },
            bottom: 0,
            left: {
              _skip_check_: !0,
              value: 0
            },
            height: e.controlHeightLG / 8,
            transform: "translateY(100%)",
            content: "''"
          }
        },
        [`${t}-nav-add`]: Object.assign({
          minWidth: r,
          marginLeft: {
            _skip_check_: !0,
            value: i
          },
          padding: `0 ${e.paddingXS}px`,
          background: "transparent",
          border: `${e.lineWidth}px ${e.lineType} ${s}`,
          borderRadius: `${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`,
          outline: "none",
          cursor: "pointer",
          color: e.colorText,
          transition: `all ${e.motionDurationSlow} ${e.motionEaseInOut}`,
          "&:hover": {
            color: o
          },
          "&:active, &:focus:not(:focus-visible)": {
            color: a
          }
        }, Ev(e))
      },
      [`${t}-extra-content`]: {
        flex: "none"
      },
      // ============================ InkBar ============================
      [`${t}-ink-bar`]: {
        position: "absolute",
        background: e.inkBarColor,
        pointerEvents: "none"
      }
    }), Aw(e)), {
      // =========================== TabPanes ===========================
      [`${t}-content`]: {
        position: "relative",
        width: "100%"
      },
      [`${t}-content-holder`]: {
        flex: "auto",
        minWidth: 0,
        minHeight: 0
      },
      [`${t}-tabpane`]: {
        outline: "none",
        "&-hidden": {
          display: "none"
        }
      }
    }),
    [`${t}-centered`]: {
      [`> ${t}-nav, > div > ${t}-nav`]: {
        [`${t}-nav-wrap`]: {
          [`&:not([class*='${t}-nav-wrap-ping'])`]: {
            justifyContent: "center"
          }
        }
      }
    }
  };
}, Lw = wu("Tabs", (e) => {
  const t = wn(e, {
    // `cardPadding` is empty by default, so we could calculate with dynamic `cardHeight`
    tabsCardPadding: e.cardPadding || `${(e.cardHeight - Math.round(e.fontSize * e.lineHeight)) / 2 - e.lineWidth}px ${e.padding}px`,
    dropdownEdgeChildVerticalPadding: e.paddingXXS,
    tabsActiveTextShadow: "0 0 0.25px currentcolor",
    tabsDropdownHeight: 200,
    tabsDropdownWidth: 120,
    tabsHorizontalItemMargin: `0 0 0 ${e.horizontalItemGutter}px`,
    tabsHorizontalItemMarginRTL: `0 0 0 ${e.horizontalItemGutter}px`
  });
  return [Iw(t), Dw(t), $w(t), Tw(t), Rw(t), Fw(t), Mw(t)];
}, (e) => {
  const t = e.controlHeightLG;
  return {
    zIndexPopup: e.zIndexPopupBase + 50,
    cardBg: e.colorFillAlter,
    cardHeight: t,
    // Initialize with empty string, because cardPadding will be calculated with cardHeight by default.
    cardPadding: "",
    cardPaddingSM: `${e.paddingXXS * 1.5}px ${e.padding}px`,
    cardPaddingLG: `${e.paddingXS}px ${e.padding}px ${e.paddingXXS * 1.5}px`,
    titleFontSize: e.fontSize,
    titleFontSizeLG: e.fontSizeLG,
    titleFontSizeSM: e.fontSize,
    inkBarColor: e.colorPrimary,
    horizontalMargin: `0 0 ${e.margin}px 0`,
    horizontalItemGutter: 32,
    // Initialize with empty string, because horizontalItemMargin will be calculated with horizontalItemGutter by default.
    horizontalItemMargin: "",
    horizontalItemMarginRTL: "",
    horizontalItemPadding: `${e.paddingSM}px 0`,
    horizontalItemPaddingSM: `${e.paddingXS}px 0`,
    horizontalItemPaddingLG: `${e.padding}px 0`,
    verticalItemPadding: `${e.paddingXS}px ${e.paddingLG}px`,
    verticalItemMargin: `${e.margin}px 0 0 0`,
    itemSelectedColor: e.colorPrimary,
    itemHoverColor: e.colorPrimaryHover,
    itemActiveColor: e.colorPrimaryActive,
    cardGutter: e.marginXXS / 2
  };
});
var Vw = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  return n;
};
function Uu(e) {
  var {
    type: t,
    className: n,
    rootClassName: r,
    size: i,
    onEdit: o,
    hideAdd: a,
    centered: s,
    addIcon: l,
    popupClassName: u,
    children: c,
    items: d,
    animated: v
  } = e, h = Vw(e, ["type", "className", "rootClassName", "size", "onEdit", "hideAdd", "centered", "addIcon", "popupClassName", "children", "items", "animated"]);
  const {
    prefixCls: p,
    moreIcon: m = /* @__PURE__ */ f.createElement(Z1, null)
  } = h, {
    direction: b,
    getPrefixCls: g,
    getPopupContainer: y
  } = f.useContext(lr), S = g("tabs", p), [C, _] = Lw(S);
  let E;
  t === "editable-card" && (E = {
    onEdit: ($, w) => {
      let {
        key: O,
        event: P
      } = w;
      o?.($ === "add" ? P : O, $);
    },
    removeIcon: /* @__PURE__ */ f.createElement(Wv, null),
    addIcon: l || /* @__PURE__ */ f.createElement(nw, null),
    showAdd: a !== !0
  });
  const x = g();
  process.env.NODE_ENV !== "production" && qn(!("onPrevClick" in h) && !("onNextClick" in h), "Tabs", "`onPrevClick` and `onNextClick` has been removed. Please use `onTabScroll` instead.");
  const I = Nw(d, c), R = Cw(S, v), N = Cu(i);
  return C(/* @__PURE__ */ f.createElement(np, Object.assign({
    direction: b,
    getPopupContainer: y,
    moreTransitionName: `${x}-slide-up`
  }, h, {
    items: I,
    className: Ee({
      [`${S}-${N}`]: N,
      [`${S}-card`]: ["card", "editable-card"].includes(t),
      [`${S}-editable-card`]: t === "editable-card",
      [`${S}-centered`]: s
    }, n, r, _),
    popupClassName: Ee(u, _),
    editable: E,
    moreIcon: m,
    prefixCls: S,
    animated: R
  })));
}
Uu.TabPane = Ew;
process.env.NODE_ENV !== "production" && (Uu.displayName = "Tabs");
var kw = {
  0: "Invalid value for configuration 'enforceActions', expected 'never', 'always' or 'observed'",
  1: function(t, n) {
    return "Cannot apply '" + t + "' to '" + n.toString() + "': Field not found.";
  },
  /*
  2(prop) {
      return `invalid decorator for '${prop.toString()}'`
  },
  3(prop) {
      return `Cannot decorate '${prop.toString()}': action can only be used on properties with a function value.`
  },
  4(prop) {
      return `Cannot decorate '${prop.toString()}': computed can only be used on getter properties.`
  },
  */
  5: "'keys()' can only be used on observable objects, arrays, sets and maps",
  6: "'values()' can only be used on observable objects, arrays, sets and maps",
  7: "'entries()' can only be used on observable objects, arrays and maps",
  8: "'set()' can only be used on observable objects, arrays and maps",
  9: "'remove()' can only be used on observable objects, arrays and maps",
  10: "'has()' can only be used on observable objects, arrays and maps",
  11: "'get()' can only be used on observable objects, arrays and maps",
  12: "Invalid annotation",
  13: "Dynamic observable objects cannot be frozen. If you're passing observables to 3rd party component/function that calls Object.freeze, pass copy instead: toJS(observable)",
  14: "Intercept handlers should return nothing or a change object",
  15: "Observable arrays cannot be frozen. If you're passing observables to 3rd party component/function that calls Object.freeze, pass copy instead: toJS(observable)",
  16: "Modification exception: the internal structure of an observable array was changed.",
  17: function(t, n) {
    return "[mobx.array] Index out of bounds, " + t + " is larger than " + n;
  },
  18: "mobx.map requires Map polyfill for the current browser. Check babel-polyfill or core-js/es6/map.js",
  19: function(t) {
    return "Cannot initialize from classes that inherit from Map: " + t.constructor.name;
  },
  20: function(t) {
    return "Cannot initialize map from " + t;
  },
  21: function(t) {
    return "Cannot convert to map from '" + t + "'";
  },
  22: "mobx.set requires Set polyfill for the current browser. Check babel-polyfill or core-js/es6/set.js",
  23: "It is not possible to get index atoms from arrays",
  24: function(t) {
    return "Cannot obtain administration from " + t;
  },
  25: function(t, n) {
    return "the entry '" + t + "' does not exist in the observable map '" + n + "'";
  },
  26: "please specify a property",
  27: function(t, n) {
    return "no observable property '" + t.toString() + "' found on the observable object '" + n + "'";
  },
  28: function(t) {
    return "Cannot obtain atom from " + t;
  },
  29: "Expecting some object",
  30: "invalid action stack. did you forget to finish an action?",
  31: "missing option for computed: get",
  32: function(t, n) {
    return "Cycle detected in computation " + t + ": " + n;
  },
  33: function(t) {
    return "The setter of computed value '" + t + "' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?";
  },
  34: function(t) {
    return "[ComputedValue '" + t + "'] It is not possible to assign a new value to a computed value.";
  },
  35: "There are multiple, different versions of MobX active. Make sure MobX is loaded only once or use `configure({ isolateGlobalState: true })`",
  36: "isolateGlobalState should be called before MobX is running any reactions",
  37: function(t) {
    return "[mobx] `observableArray." + t + "()` mutates the array in-place, which is not allowed inside a derivation. Use `array.slice()." + t + "()` instead";
  },
  38: "'ownKeys()' can only be used on observable objects",
  39: "'defineProperty()' can only be used on observable objects"
}, jw = process.env.NODE_ENV !== "production" ? kw : {};
function oe(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  if (process.env.NODE_ENV !== "production") {
    var i = typeof e == "string" ? e : jw[e];
    throw typeof i == "function" && (i = i.apply(null, n)), new Error("[MobX] " + i);
  }
  throw new Error(typeof e == "number" ? "[MobX] minified error nr: " + e + (n.length ? " " + n.map(String).join(",") : "") + ". Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts" : "[MobX] " + e);
}
var Hw = {};
function Wu() {
  return typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : Hw;
}
var ip = Object.assign, Ha = Object.getOwnPropertyDescriptor, Wn = Object.defineProperty, Co = Object.prototype, za = [];
Object.freeze(za);
var op = {};
Object.freeze(op);
var zw = typeof Proxy < "u", Bw = /* @__PURE__ */ Object.toString();
function ap() {
  zw || oe(process.env.NODE_ENV !== "production" ? "`Proxy` objects are not available in the current environment. Please configure MobX to enable a fallback implementation.`" : "Proxy not available");
}
function ji(e) {
  process.env.NODE_ENV !== "production" && z.verifyProxies && oe("MobX is currently configured to be able to run in ES5 mode, but in ES5 MobX won't be able to " + e);
}
function kn() {
  return ++z.mobxGuid;
}
function Ku(e) {
  var t = !1;
  return function() {
    if (!t)
      return t = !0, e.apply(this, arguments);
  };
}
var ii = function() {
};
function Vt(e) {
  return typeof e == "function";
}
function Vr(e) {
  var t = typeof e;
  switch (t) {
    case "string":
    case "symbol":
    case "number":
      return !0;
  }
  return !1;
}
function gs(e) {
  return e !== null && typeof e == "object";
}
function fn(e) {
  if (!gs(e))
    return !1;
  var t = Object.getPrototypeOf(e);
  if (t == null)
    return !0;
  var n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n.toString() === Bw;
}
function sp(e) {
  var t = e?.constructor;
  return t ? t.name === "GeneratorFunction" || t.displayName === "GeneratorFunction" : !1;
}
function Oo(e, t, n) {
  Wn(e, t, {
    enumerable: !1,
    writable: !0,
    configurable: !0,
    value: n
  });
}
function lp(e, t, n) {
  Wn(e, t, {
    enumerable: !1,
    writable: !1,
    configurable: !0,
    value: n
  });
}
function wr(e, t) {
  var n = "isMobX" + e;
  return t.prototype[n] = !0, function(r) {
    return gs(r) && r[n] === !0;
  };
}
function Ni(e) {
  return e instanceof Map;
}
function xo(e) {
  return e instanceof Set;
}
var up = typeof Object.getOwnPropertySymbols < "u";
function Uw(e) {
  var t = Object.keys(e);
  if (!up)
    return t;
  var n = Object.getOwnPropertySymbols(e);
  return n.length ? [].concat(t, n.filter(function(r) {
    return Co.propertyIsEnumerable.call(e, r);
  })) : t;
}
var pi = typeof Reflect < "u" && Reflect.ownKeys ? Reflect.ownKeys : up ? function(e) {
  return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
} : (
  /* istanbul ignore next */
  Object.getOwnPropertyNames
);
function Ql(e) {
  return typeof e == "string" ? e : typeof e == "symbol" ? e.toString() : new String(e).toString();
}
function cp(e) {
  return e === null ? null : typeof e == "object" ? "" + e : e;
}
function Cn(e, t) {
  return Co.hasOwnProperty.call(e, t);
}
var Ww = Object.getOwnPropertyDescriptors || function(t) {
  var n = {};
  return pi(t).forEach(function(r) {
    n[r] = Ha(t, r);
  }), n;
};
function If(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, qw(r.key), r);
  }
}
function Gu(e, t, n) {
  return t && If(e.prototype, t), n && If(e, n), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function yr() {
  return yr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, yr.apply(this, arguments);
}
function fp(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Jl(e, t);
}
function Jl(e, t) {
  return Jl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
    return r.__proto__ = i, r;
  }, Jl(e, t);
}
function ma(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Kw(e, t) {
  if (e) {
    if (typeof e == "string")
      return Af(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Af(e, t);
  }
}
function Af(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function oi(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n)
    return (n = n.call(e)).next.bind(n);
  if (Array.isArray(e) || (n = Kw(e)) || t && e && typeof e.length == "number") {
    n && (e = n);
    var r = 0;
    return function() {
      return r >= e.length ? {
        done: !0
      } : {
        done: !1,
        value: e[r++]
      };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Gw(e, t) {
  if (typeof e != "object" || e === null)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function qw(e) {
  var t = Gw(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
var Qt = /* @__PURE__ */ Symbol("mobx-stored-annotations");
function Kn(e) {
  function t(n, r) {
    No(n, r, e);
  }
  return Object.assign(t, e);
}
function No(e, t, n) {
  if (Cn(e, Qt) || Oo(e, Qt, yr({}, e[Qt])), process.env.NODE_ENV !== "production" && Ua(n) && !Cn(e[Qt], t)) {
    var r = e.constructor.name + ".prototype." + t.toString();
    oe("'" + r + "' is decorated with 'override', but no such decorated member was found on prototype.");
  }
  Xw(e, n, t), Ua(n) || (e[Qt][t] = n);
}
function Xw(e, t, n) {
  if (process.env.NODE_ENV !== "production" && !Ua(t) && Cn(e[Qt], n)) {
    var r = e.constructor.name + ".prototype." + n.toString(), i = e[Qt][n].annotationType_, o = t.annotationType_;
    oe("Cannot apply '@" + o + "' to '" + r + "':" + (`
The field is already decorated with '@` + i + "'.") + `
Re-decorating fields is not allowed.
Use '@override' decorator for methods overridden by subclass.`);
  }
}
function Yw(e) {
  return Cn(e, Qt) || (process.env.NODE_ENV !== "production" && !e[Qt] && oe("No annotations were passed to makeObservable, but no decorated members have been found either"), Oo(e, Qt, yr({}, e[Qt]))), e[Qt];
}
var Te = /* @__PURE__ */ Symbol("mobx administration"), Po = /* @__PURE__ */ function() {
  function e(n) {
    n === void 0 && (n = process.env.NODE_ENV !== "production" ? "Atom@" + kn() : "Atom"), this.name_ = void 0, this.isPendingUnobservation_ = !1, this.isBeingObserved_ = !1, this.observers_ = /* @__PURE__ */ new Set(), this.diffValue_ = 0, this.lastAccessedBy_ = 0, this.lowestObserverState_ = it.NOT_TRACKING_, this.onBOL = void 0, this.onBUOL = void 0, this.name_ = n;
  }
  var t = e.prototype;
  return t.onBO = function() {
    this.onBOL && this.onBOL.forEach(function(r) {
      return r();
    });
  }, t.onBUO = function() {
    this.onBUOL && this.onBUOL.forEach(function(r) {
      return r();
    });
  }, t.reportObserved = function() {
    return Tp(this);
  }, t.reportChanged = function() {
    en(), $p(this), z.stateVersion = z.stateVersion < Number.MAX_SAFE_INTEGER ? z.stateVersion + 1 : Number.MIN_SAFE_INTEGER, tn();
  }, t.toString = function() {
    return this.name_;
  }, e;
}(), qu = /* @__PURE__ */ wr("Atom", Po);
function dp(e, t, n) {
  t === void 0 && (t = ii), n === void 0 && (n = ii);
  var r = new Po(e);
  return t !== ii && sO(r, t), n !== ii && jp(r, n), r;
}
function Qw(e, t) {
  return e === t;
}
function Jw(e, t) {
  return tc(e, t);
}
function Zw(e, t) {
  return tc(e, t, 1);
}
function eC(e, t) {
  return Object.is ? Object.is(e, t) : e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var Ba = {
  identity: Qw,
  structural: Jw,
  default: eC,
  shallow: Zw
};
function mi(e, t, n) {
  return _i(e) ? e : Array.isArray(e) ? Ht.array(e, {
    name: n
  }) : fn(e) ? Ht.object(e, void 0, {
    name: n
  }) : Ni(e) ? Ht.map(e, {
    name: n
  }) : xo(e) ? Ht.set(e, {
    name: n
  }) : typeof e == "function" && !Ss(e) && !qa(e) ? sp(e) ? ao(e) : oo(n, e) : e;
}
function tC(e, t, n) {
  if (e == null || _r(e) || Ri(e) || Xn(e) || Hr(e))
    return e;
  if (Array.isArray(e))
    return Ht.array(e, {
      name: n,
      deep: !1
    });
  if (fn(e))
    return Ht.object(e, void 0, {
      name: n,
      deep: !1
    });
  if (Ni(e))
    return Ht.map(e, {
      name: n,
      deep: !1
    });
  if (xo(e))
    return Ht.set(e, {
      name: n,
      deep: !1
    });
  process.env.NODE_ENV !== "production" && oe("The shallow modifier / decorator can only used in combination with arrays, objects, maps and sets");
}
function bs(e) {
  return e;
}
function nC(e, t) {
  return process.env.NODE_ENV !== "production" && _i(e) && oe("observable.struct should not be used with observable values"), tc(e, t) ? t : e;
}
var rC = "override";
function Ua(e) {
  return e.annotationType_ === rC;
}
function Mo(e, t) {
  return {
    annotationType_: e,
    options_: t,
    make_: iC,
    extend_: oC
  };
}
function iC(e, t, n, r) {
  var i;
  if ((i = this.options_) != null && i.bound)
    return this.extend_(e, t, n, !1) === null ? 0 : 1;
  if (r === e.target_)
    return this.extend_(e, t, n, !1) === null ? 0 : 2;
  if (Ss(n.value))
    return 1;
  var o = vp(e, this, t, n, !1);
  return Wn(r, t, o), 2;
}
function oC(e, t, n, r) {
  var i = vp(e, this, t, n);
  return e.defineProperty_(t, i, r);
}
function aC(e, t, n, r) {
  var i = t.annotationType_, o = r.value;
  process.env.NODE_ENV !== "production" && !Vt(o) && oe("Cannot apply '" + i + "' to '" + e.name_ + "." + n.toString() + "':" + (`
'` + i + "' can only be used on properties with a function value."));
}
function vp(e, t, n, r, i) {
  var o, a, s, l, u, c, d;
  i === void 0 && (i = z.safeDescriptors), aC(e, t, n, r);
  var v = r.value;
  if ((o = t.options_) != null && o.bound) {
    var h;
    v = v.bind((h = e.proxy_) != null ? h : e.target_);
  }
  return {
    value: gi(
      (a = (s = t.options_) == null ? void 0 : s.name) != null ? a : n.toString(),
      v,
      (l = (u = t.options_) == null ? void 0 : u.autoAction) != null ? l : !1,
      // https://github.com/mobxjs/mobx/discussions/3140
      (c = t.options_) != null && c.bound ? (d = e.proxy_) != null ? d : e.target_ : void 0
    ),
    // Non-configurable for classes
    // prevents accidental field redefinition in subclass
    configurable: i ? e.isPlainObject_ : !0,
    // https://github.com/mobxjs/mobx/pull/2641#issuecomment-737292058
    enumerable: !1,
    // Non-obsevable, therefore non-writable
    // Also prevents rewriting in subclass constructor
    writable: !i
  };
}
function hp(e, t) {
  return {
    annotationType_: e,
    options_: t,
    make_: sC,
    extend_: lC
  };
}
function sC(e, t, n, r) {
  var i;
  if (r === e.target_)
    return this.extend_(e, t, n, !1) === null ? 0 : 2;
  if ((i = this.options_) != null && i.bound && (!Cn(e.target_, t) || !qa(e.target_[t])) && this.extend_(e, t, n, !1) === null)
    return 0;
  if (qa(n.value))
    return 1;
  var o = pp(e, this, t, n, !1, !1);
  return Wn(r, t, o), 2;
}
function lC(e, t, n, r) {
  var i, o = pp(e, this, t, n, (i = this.options_) == null ? void 0 : i.bound);
  return e.defineProperty_(t, o, r);
}
function uC(e, t, n, r) {
  var i = t.annotationType_, o = r.value;
  process.env.NODE_ENV !== "production" && !Vt(o) && oe("Cannot apply '" + i + "' to '" + e.name_ + "." + n.toString() + "':" + (`
'` + i + "' can only be used on properties with a generator function value."));
}
function pp(e, t, n, r, i, o) {
  o === void 0 && (o = z.safeDescriptors), uC(e, t, n, r);
  var a = r.value;
  if (qa(a) || (a = ao(a)), i) {
    var s;
    a = a.bind((s = e.proxy_) != null ? s : e.target_), a.isMobXFlow = !0;
  }
  return {
    value: a,
    // Non-configurable for classes
    // prevents accidental field redefinition in subclass
    configurable: o ? e.isPlainObject_ : !0,
    // https://github.com/mobxjs/mobx/pull/2641#issuecomment-737292058
    enumerable: !1,
    // Non-obsevable, therefore non-writable
    // Also prevents rewriting in subclass constructor
    writable: !o
  };
}
function Xu(e, t) {
  return {
    annotationType_: e,
    options_: t,
    make_: cC,
    extend_: fC
  };
}
function cC(e, t, n) {
  return this.extend_(e, t, n, !1) === null ? 0 : 1;
}
function fC(e, t, n, r) {
  return dC(e, this, t, n), e.defineComputedProperty_(t, yr({}, this.options_, {
    get: n.get,
    set: n.set
  }), r);
}
function dC(e, t, n, r) {
  var i = t.annotationType_, o = r.get;
  process.env.NODE_ENV !== "production" && !o && oe("Cannot apply '" + i + "' to '" + e.name_ + "." + n.toString() + "':" + (`
'` + i + "' can only be used on getter(+setter) properties."));
}
function ys(e, t) {
  return {
    annotationType_: e,
    options_: t,
    make_: vC,
    extend_: hC
  };
}
function vC(e, t, n) {
  return this.extend_(e, t, n, !1) === null ? 0 : 1;
}
function hC(e, t, n, r) {
  var i, o;
  return pC(e, this, t, n), e.defineObservableProperty_(t, n.value, (i = (o = this.options_) == null ? void 0 : o.enhancer) != null ? i : mi, r);
}
function pC(e, t, n, r) {
  var i = t.annotationType_;
  process.env.NODE_ENV !== "production" && !("value" in r) && oe("Cannot apply '" + i + "' to '" + e.name_ + "." + n.toString() + "':" + (`
'` + i + "' cannot be used on getter/setter properties"));
}
var mC = "true", gC = /* @__PURE__ */ mp();
function mp(e) {
  return {
    annotationType_: mC,
    options_: e,
    make_: bC,
    extend_: yC
  };
}
function bC(e, t, n, r) {
  var i, o;
  if (n.get)
    return _s.make_(e, t, n, r);
  if (n.set) {
    var a = gi(t.toString(), n.set);
    return r === e.target_ ? e.defineProperty_(t, {
      configurable: z.safeDescriptors ? e.isPlainObject_ : !0,
      set: a
    }) === null ? 0 : 2 : (Wn(r, t, {
      configurable: !0,
      set: a
    }), 2);
  }
  if (r !== e.target_ && typeof n.value == "function") {
    var s;
    if (sp(n.value)) {
      var l, u = (l = this.options_) != null && l.autoBind ? ao.bound : ao;
      return u.make_(e, t, n, r);
    }
    var c = (s = this.options_) != null && s.autoBind ? oo.bound : oo;
    return c.make_(e, t, n, r);
  }
  var d = ((i = this.options_) == null ? void 0 : i.deep) === !1 ? Ht.ref : Ht;
  if (typeof n.value == "function" && (o = this.options_) != null && o.autoBind) {
    var v;
    n.value = n.value.bind((v = e.proxy_) != null ? v : e.target_);
  }
  return d.make_(e, t, n, r);
}
function yC(e, t, n, r) {
  var i, o;
  if (n.get)
    return _s.extend_(e, t, n, r);
  if (n.set)
    return e.defineProperty_(t, {
      configurable: z.safeDescriptors ? e.isPlainObject_ : !0,
      set: gi(t.toString(), n.set)
    }, r);
  if (typeof n.value == "function" && (i = this.options_) != null && i.autoBind) {
    var a;
    n.value = n.value.bind((a = e.proxy_) != null ? a : e.target_);
  }
  var s = ((o = this.options_) == null ? void 0 : o.deep) === !1 ? Ht.ref : Ht;
  return s.extend_(e, t, n, r);
}
var _C = "observable", SC = "observable.ref", EC = "observable.shallow", wC = "observable.struct", gp = {
  deep: !0,
  name: void 0,
  defaultDecorator: void 0,
  proxy: !0
};
Object.freeze(gp);
function ea(e) {
  return e || gp;
}
var bp = /* @__PURE__ */ ys(_C), CC = /* @__PURE__ */ ys(SC, {
  enhancer: bs
}), OC = /* @__PURE__ */ ys(EC, {
  enhancer: tC
}), xC = /* @__PURE__ */ ys(wC, {
  enhancer: nC
}), yp = /* @__PURE__ */ Kn(bp);
function ta(e) {
  return e.deep === !0 ? mi : e.deep === !1 ? bs : PC(e.defaultDecorator);
}
function NC(e) {
  var t;
  return e ? (t = e.defaultDecorator) != null ? t : mp(e) : void 0;
}
function PC(e) {
  var t, n;
  return e && (t = (n = e.options_) == null ? void 0 : n.enhancer) != null ? t : mi;
}
function _p(e, t, n) {
  if (Vr(t)) {
    No(e, t, bp);
    return;
  }
  return _i(e) ? e : fn(e) ? Ht.object(e, t, n) : Array.isArray(e) ? Ht.array(e, t) : Ni(e) ? Ht.map(e, t) : xo(e) ? Ht.set(e, t) : typeof e == "object" && e !== null ? e : Ht.box(e, t);
}
ip(_p, yp);
var MC = {
  box: function(t, n) {
    var r = ea(n);
    return new Dr(t, ta(r), r.name, !0, r.equals);
  },
  array: function(t, n) {
    var r = ea(n);
    return (z.useProxies === !1 || r.proxy === !1 ? $O : wO)(t, ta(r), r.name);
  },
  map: function(t, n) {
    var r = ea(n);
    return new Yp(t, ta(r), r.name);
  },
  set: function(t, n) {
    var r = ea(n);
    return new Zp(t, ta(r), r.name);
  },
  object: function(t, n, r) {
    return zp(z.useProxies === !1 || r?.proxy === !1 ? Do({}, r) : yO({}, r), t, n);
  },
  ref: /* @__PURE__ */ Kn(CC),
  shallow: /* @__PURE__ */ Kn(OC),
  deep: yp,
  struct: /* @__PURE__ */ Kn(xC)
}, Ht = /* @__PURE__ */ ip(_p, MC), Sp = "computed", RC = "computed.struct", Ep = /* @__PURE__ */ Xu(Sp), TC = /* @__PURE__ */ Xu(RC, {
  equals: Ba.structural
}), _s = function(t, n) {
  if (Vr(n))
    return No(t, n, Ep);
  if (fn(t))
    return Kn(Xu(Sp, t));
  process.env.NODE_ENV !== "production" && (Vt(t) || oe("First argument to `computed` should be an expression."), Vt(n) && oe("A setter as second argument is no longer supported, use `{ set: fn }` option instead"));
  var r = fn(n) ? n : {};
  return r.get = t, r.name || (r.name = t.name || ""), new bi(r);
};
Object.assign(_s, Ep);
_s.struct = /* @__PURE__ */ Kn(TC);
var Df, Ff, Wa = 0, $C = 1, IC = (Df = (Ff = /* @__PURE__ */ Ha(function() {
}, "name")) == null ? void 0 : Ff.configurable) != null ? Df : !1, Lf = {
  value: "action",
  configurable: !0,
  writable: !1,
  enumerable: !1
};
function gi(e, t, n, r) {
  n === void 0 && (n = !1), process.env.NODE_ENV !== "production" && (Vt(t) || oe("`action` can only be invoked on functions"), (typeof e != "string" || !e) && oe("actions should have valid names, got: '" + e + "'"));
  function i() {
    return AC(e, n, t, r || this, arguments);
  }
  return i.isMobxAction = !0, IC && (Lf.value = e, Wn(i, "name", Lf)), i;
}
function AC(e, t, n, r, i) {
  var o = DC(e, t, r, i);
  try {
    return n.apply(r, i);
  } catch (a) {
    throw o.error_ = a, a;
  } finally {
    FC(o);
  }
}
function DC(e, t, n, r) {
  var i = process.env.NODE_ENV !== "production" && Ut() && !!e, o = 0;
  if (process.env.NODE_ENV !== "production" && i) {
    o = Date.now();
    var a = r ? Array.from(r) : za;
    dn({
      type: Qu,
      name: e,
      object: n,
      arguments: a
    });
  }
  var s = z.trackingDerivation, l = !t || !s;
  en();
  var u = z.allowStateChanges;
  l && (Pi(), u = Ro(!0));
  var c = Yu(!0), d = {
    runAsAction_: l,
    prevDerivation_: s,
    prevAllowStateChanges_: u,
    prevAllowStateReads_: c,
    notifySpy_: i,
    startTime_: o,
    actionId_: $C++,
    parentActionId_: Wa
  };
  return Wa = d.actionId_, d;
}
function FC(e) {
  Wa !== e.actionId_ && oe(30), Wa = e.parentActionId_, e.error_ !== void 0 && (z.suppressReactionErrors = !0), To(e.prevAllowStateChanges_), Xi(e.prevAllowStateReads_), tn(), e.runAsAction_ && gr(e.prevDerivation_), process.env.NODE_ENV !== "production" && e.notifySpy_ && vn({
    time: Date.now() - e.startTime_
  }), z.suppressReactionErrors = !1;
}
function LC(e, t) {
  var n = Ro(e);
  try {
    return t();
  } finally {
    To(n);
  }
}
function Ro(e) {
  var t = z.allowStateChanges;
  return z.allowStateChanges = e, t;
}
function To(e) {
  z.allowStateChanges = e;
}
var wp, VC = "create";
wp = Symbol.toPrimitive;
var Dr = /* @__PURE__ */ function(e) {
  fp(t, e);
  function t(r, i, o, a, s) {
    var l;
    return o === void 0 && (o = process.env.NODE_ENV !== "production" ? "ObservableValue@" + kn() : "ObservableValue"), a === void 0 && (a = !0), s === void 0 && (s = Ba.default), l = e.call(this, o) || this, l.enhancer = void 0, l.name_ = void 0, l.equals = void 0, l.hasUnreportedChange_ = !1, l.interceptors_ = void 0, l.changeListeners_ = void 0, l.value_ = void 0, l.dehancer = void 0, l.enhancer = i, l.name_ = o, l.equals = s, l.value_ = i(r, void 0, o), process.env.NODE_ENV !== "production" && a && Ut() && kr({
      type: VC,
      object: ma(l),
      observableKind: "value",
      debugObjectName: l.name_,
      newValue: "" + l.value_
    }), l;
  }
  var n = t.prototype;
  return n.dehanceValue = function(i) {
    return this.dehancer !== void 0 ? this.dehancer(i) : i;
  }, n.set = function(i) {
    var o = this.value_;
    if (i = this.prepareNewValue_(i), i !== z.UNCHANGED) {
      var a = Ut();
      process.env.NODE_ENV !== "production" && a && dn({
        type: An,
        object: this,
        observableKind: "value",
        debugObjectName: this.name_,
        newValue: i,
        oldValue: o
      }), this.setNewValue_(i), process.env.NODE_ENV !== "production" && a && vn();
    }
  }, n.prepareNewValue_ = function(i) {
    if (yi(this), Sn(this)) {
      var o = En(this, {
        object: this,
        type: An,
        newValue: i
      });
      if (!o)
        return z.UNCHANGED;
      i = o.newValue;
    }
    return i = this.enhancer(i, this.value_, this.name_), this.equals(this.value_, i) ? z.UNCHANGED : i;
  }, n.setNewValue_ = function(i) {
    var o = this.value_;
    this.value_ = i, this.reportChanged(), Fn(this) && Ln(this, {
      type: An,
      object: this,
      newValue: i,
      oldValue: o
    });
  }, n.get = function() {
    return this.reportObserved(), this.dehanceValue(this.value_);
  }, n.intercept_ = function(i) {
    return Io(this, i);
  }, n.observe_ = function(i, o) {
    return o && i({
      observableKind: "value",
      debugObjectName: this.name_,
      object: this,
      type: An,
      newValue: this.value_,
      oldValue: void 0
    }), Ao(this, i);
  }, n.raw = function() {
    return this.value_;
  }, n.toJSON = function() {
    return this.get();
  }, n.toString = function() {
    return this.name_ + "[" + this.value_ + "]";
  }, n.valueOf = function() {
    return cp(this.get());
  }, n[wp] = function() {
    return this.valueOf();
  }, t;
}(Po), kC = /* @__PURE__ */ wr("ObservableValue", Dr), Cp;
Cp = Symbol.toPrimitive;
var bi = /* @__PURE__ */ function() {
  function e(n) {
    this.dependenciesState_ = it.NOT_TRACKING_, this.observing_ = [], this.newObserving_ = null, this.isBeingObserved_ = !1, this.isPendingUnobservation_ = !1, this.observers_ = /* @__PURE__ */ new Set(), this.diffValue_ = 0, this.runId_ = 0, this.lastAccessedBy_ = 0, this.lowestObserverState_ = it.UP_TO_DATE_, this.unboundDepsCount_ = 0, this.value_ = new Ka(null), this.name_ = void 0, this.triggeredBy_ = void 0, this.isComputing_ = !1, this.isRunningSetter_ = !1, this.derivation = void 0, this.setter_ = void 0, this.isTracing_ = On.NONE, this.scope_ = void 0, this.equals_ = void 0, this.requiresReaction_ = void 0, this.keepAlive_ = void 0, this.onBOL = void 0, this.onBUOL = void 0, n.get || oe(31), this.derivation = n.get, this.name_ = n.name || (process.env.NODE_ENV !== "production" ? "ComputedValue@" + kn() : "ComputedValue"), n.set && (this.setter_ = gi(process.env.NODE_ENV !== "production" ? this.name_ + "-setter" : "ComputedValue-setter", n.set)), this.equals_ = n.equals || (n.compareStructural || n.struct ? Ba.structural : Ba.default), this.scope_ = n.context, this.requiresReaction_ = n.requiresReaction, this.keepAlive_ = !!n.keepAlive;
  }
  var t = e.prototype;
  return t.onBecomeStale_ = function() {
    KC(this);
  }, t.onBO = function() {
    this.onBOL && this.onBOL.forEach(function(r) {
      return r();
    });
  }, t.onBUO = function() {
    this.onBUOL && this.onBUOL.forEach(function(r) {
      return r();
    });
  }, t.get = function() {
    if (this.isComputing_ && oe(32, this.name_, this.derivation), z.inBatch === 0 && // !globalState.trackingDerivatpion &&
    this.observers_.size === 0 && !this.keepAlive_)
      Zl(this) && (this.warnAboutUntrackedRead_(), en(), this.value_ = this.computeValue_(!1), tn());
    else if (Tp(this), Zl(this)) {
      var r = z.trackingContext;
      this.keepAlive_ && !r && (z.trackingContext = this), this.trackAndCompute() && WC(this), z.trackingContext = r;
    }
    var i = this.value_;
    if (ga(i))
      throw i.cause;
    return i;
  }, t.set = function(r) {
    if (this.setter_) {
      this.isRunningSetter_ && oe(33, this.name_), this.isRunningSetter_ = !0;
      try {
        this.setter_.call(this.scope_, r);
      } finally {
        this.isRunningSetter_ = !1;
      }
    } else
      oe(34, this.name_);
  }, t.trackAndCompute = function() {
    var r = this.value_, i = (
      /* see #1208 */
      this.dependenciesState_ === it.NOT_TRACKING_
    ), o = this.computeValue_(!0), a = i || ga(r) || ga(o) || !this.equals_(r, o);
    return a && (this.value_ = o, process.env.NODE_ENV !== "production" && Ut() && kr({
      observableKind: "computed",
      debugObjectName: this.name_,
      object: this.scope_,
      type: "update",
      oldValue: r,
      newValue: o
    })), a;
  }, t.computeValue_ = function(r) {
    this.isComputing_ = !0;
    var i = Ro(!1), o;
    if (r)
      o = Op(this, this.derivation, this.scope_);
    else if (z.disableErrorBoundaries === !0)
      o = this.derivation.call(this.scope_);
    else
      try {
        o = this.derivation.call(this.scope_);
      } catch (a) {
        o = new Ka(a);
      }
    return To(i), this.isComputing_ = !1, o;
  }, t.suspend_ = function() {
    this.keepAlive_ || (eu(this), this.value_ = void 0, process.env.NODE_ENV !== "production" && this.isTracing_ !== On.NONE && console.log("[mobx.trace] Computed value '" + this.name_ + "' was suspended and it will recompute on the next access."));
  }, t.observe_ = function(r, i) {
    var o = this, a = !0, s = void 0;
    return nO(function() {
      var l = o.get();
      if (!a || i) {
        var u = Pi();
        r({
          observableKind: "computed",
          debugObjectName: o.name_,
          type: An,
          object: o,
          newValue: l,
          oldValue: s
        }), gr(u);
      }
      a = !1, s = l;
    });
  }, t.warnAboutUntrackedRead_ = function() {
    process.env.NODE_ENV !== "production" && (this.isTracing_ !== On.NONE && console.log("[mobx.trace] Computed value '" + this.name_ + "' is being read outside a reactive context. Doing a full recompute."), (typeof this.requiresReaction_ == "boolean" ? this.requiresReaction_ : z.computedRequiresReaction) && console.warn("[mobx] Computed value '" + this.name_ + "' is being read outside a reactive context. Doing a full recompute."));
  }, t.toString = function() {
    return this.name_ + "[" + this.derivation.toString() + "]";
  }, t.valueOf = function() {
    return cp(this.get());
  }, t[Cp] = function() {
    return this.valueOf();
  }, e;
}(), $o = /* @__PURE__ */ wr("ComputedValue", bi), it;
(function(e) {
  e[e.NOT_TRACKING_ = -1] = "NOT_TRACKING_", e[e.UP_TO_DATE_ = 0] = "UP_TO_DATE_", e[e.POSSIBLY_STALE_ = 1] = "POSSIBLY_STALE_", e[e.STALE_ = 2] = "STALE_";
})(it || (it = {}));
var On;
(function(e) {
  e[e.NONE = 0] = "NONE", e[e.LOG = 1] = "LOG", e[e.BREAK = 2] = "BREAK";
})(On || (On = {}));
var Ka = function(t) {
  this.cause = void 0, this.cause = t;
};
function ga(e) {
  return e instanceof Ka;
}
function Zl(e) {
  switch (e.dependenciesState_) {
    case it.UP_TO_DATE_:
      return !1;
    case it.NOT_TRACKING_:
    case it.STALE_:
      return !0;
    case it.POSSIBLY_STALE_: {
      for (var t = Yu(!0), n = Pi(), r = e.observing_, i = r.length, o = 0; o < i; o++) {
        var a = r[o];
        if ($o(a)) {
          if (z.disableErrorBoundaries)
            a.get();
          else
            try {
              a.get();
            } catch {
              return gr(n), Xi(t), !0;
            }
          if (e.dependenciesState_ === it.STALE_)
            return gr(n), Xi(t), !0;
        }
      }
      return Np(e), gr(n), Xi(t), !1;
    }
  }
}
function yi(e) {
  if (process.env.NODE_ENV !== "production") {
    var t = e.observers_.size > 0;
    !z.allowStateChanges && (t || z.enforceActions === "always") && console.warn("[MobX] " + (z.enforceActions ? "Since strict-mode is enabled, changing (observed) observable values without using an action is not allowed. Tried to modify: " : "Side effects like changing state are not allowed at this point. Are you trying to modify state from, for example, a computed value or the render function of a React component? You can wrap side effects in 'runInAction' (or decorate functions with 'action') if needed. Tried to modify: ") + e.name_);
  }
}
function jC(e) {
  process.env.NODE_ENV !== "production" && !z.allowStateReads && z.observableRequiresReaction && console.warn("[mobx] Observable '" + e.name_ + "' being read outside a reactive context.");
}
function Op(e, t, n) {
  var r = Yu(!0);
  Np(e), e.newObserving_ = new Array(e.observing_.length + 100), e.unboundDepsCount_ = 0, e.runId_ = ++z.runId;
  var i = z.trackingDerivation;
  z.trackingDerivation = e, z.inBatch++;
  var o;
  if (z.disableErrorBoundaries === !0)
    o = t.call(n);
  else
    try {
      o = t.call(n);
    } catch (a) {
      o = new Ka(a);
    }
  return z.inBatch--, z.trackingDerivation = i, zC(e), HC(e), Xi(r), o;
}
function HC(e) {
  process.env.NODE_ENV !== "production" && e.observing_.length === 0 && (typeof e.requiresObservable_ == "boolean" ? e.requiresObservable_ : z.reactionRequiresObservable) && console.warn("[mobx] Derivation '" + e.name_ + "' is created/updated without reading any observable value.");
}
function zC(e) {
  for (var t = e.observing_, n = e.observing_ = e.newObserving_, r = it.UP_TO_DATE_, i = 0, o = e.unboundDepsCount_, a = 0; a < o; a++) {
    var s = n[a];
    s.diffValue_ === 0 && (s.diffValue_ = 1, i !== a && (n[i] = s), i++), s.dependenciesState_ > r && (r = s.dependenciesState_);
  }
  for (n.length = i, e.newObserving_ = null, o = t.length; o--; ) {
    var l = t[o];
    l.diffValue_ === 0 && Mp(l, e), l.diffValue_ = 0;
  }
  for (; i--; ) {
    var u = n[i];
    u.diffValue_ === 1 && (u.diffValue_ = 0, UC(u, e));
  }
  r !== it.UP_TO_DATE_ && (e.dependenciesState_ = r, e.onBecomeStale_());
}
function eu(e) {
  var t = e.observing_;
  e.observing_ = [];
  for (var n = t.length; n--; )
    Mp(t[n], e);
  e.dependenciesState_ = it.NOT_TRACKING_;
}
function xp(e) {
  var t = Pi();
  try {
    return e();
  } finally {
    gr(t);
  }
}
function Pi() {
  var e = z.trackingDerivation;
  return z.trackingDerivation = null, e;
}
function gr(e) {
  z.trackingDerivation = e;
}
function Yu(e) {
  var t = z.allowStateReads;
  return z.allowStateReads = e, t;
}
function Xi(e) {
  z.allowStateReads = e;
}
function Np(e) {
  if (e.dependenciesState_ !== it.UP_TO_DATE_) {
    e.dependenciesState_ = it.UP_TO_DATE_;
    for (var t = e.observing_, n = t.length; n--; )
      t[n].lowestObserverState_ = it.UP_TO_DATE_;
  }
}
var ba = function() {
  this.version = 6, this.UNCHANGED = {}, this.trackingDerivation = null, this.trackingContext = null, this.runId = 0, this.mobxGuid = 0, this.inBatch = 0, this.pendingUnobservations = [], this.pendingReactions = [], this.isRunningReactions = !1, this.allowStateChanges = !1, this.allowStateReads = !0, this.enforceActions = !0, this.spyListeners = [], this.globalReactionErrorHandlers = [], this.computedRequiresReaction = !1, this.reactionRequiresObservable = !1, this.observableRequiresReaction = !1, this.disableErrorBoundaries = !1, this.suppressReactionErrors = !1, this.useProxies = !0, this.verifyProxies = !1, this.safeDescriptors = !0, this.stateVersion = Number.MIN_SAFE_INTEGER;
}, ya = !0, Pp = !1, z = /* @__PURE__ */ function() {
  var e = /* @__PURE__ */ Wu();
  return e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (ya = !1), e.__mobxGlobals && e.__mobxGlobals.version !== new ba().version && (ya = !1), ya ? e.__mobxGlobals ? (e.__mobxInstanceCount += 1, e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}), e.__mobxGlobals) : (e.__mobxInstanceCount = 1, e.__mobxGlobals = /* @__PURE__ */ new ba()) : (setTimeout(function() {
    Pp || oe(35);
  }, 1), new ba());
}();
function BC() {
  if ((z.pendingReactions.length || z.inBatch || z.isRunningReactions) && oe(36), Pp = !0, ya) {
    var e = Wu();
    --e.__mobxInstanceCount === 0 && (e.__mobxGlobals = void 0), z = new ba();
  }
}
function UC(e, t) {
  e.observers_.add(t), e.lowestObserverState_ > t.dependenciesState_ && (e.lowestObserverState_ = t.dependenciesState_);
}
function Mp(e, t) {
  e.observers_.delete(t), e.observers_.size === 0 && Rp(e);
}
function Rp(e) {
  e.isPendingUnobservation_ === !1 && (e.isPendingUnobservation_ = !0, z.pendingUnobservations.push(e));
}
function en() {
  z.inBatch++;
}
function tn() {
  if (--z.inBatch === 0) {
    Dp();
    for (var e = z.pendingUnobservations, t = 0; t < e.length; t++) {
      var n = e[t];
      n.isPendingUnobservation_ = !1, n.observers_.size === 0 && (n.isBeingObserved_ && (n.isBeingObserved_ = !1, n.onBUO()), n instanceof bi && n.suspend_());
    }
    z.pendingUnobservations = [];
  }
}
function Tp(e) {
  jC(e);
  var t = z.trackingDerivation;
  return t !== null ? (t.runId_ !== e.lastAccessedBy_ && (e.lastAccessedBy_ = t.runId_, t.newObserving_[t.unboundDepsCount_++] = e, !e.isBeingObserved_ && z.trackingContext && (e.isBeingObserved_ = !0, e.onBO())), e.isBeingObserved_) : (e.observers_.size === 0 && z.inBatch > 0 && Rp(e), !1);
}
function $p(e) {
  e.lowestObserverState_ !== it.STALE_ && (e.lowestObserverState_ = it.STALE_, e.observers_.forEach(function(t) {
    t.dependenciesState_ === it.UP_TO_DATE_ && (process.env.NODE_ENV !== "production" && t.isTracing_ !== On.NONE && Ip(t, e), t.onBecomeStale_()), t.dependenciesState_ = it.STALE_;
  }));
}
function WC(e) {
  e.lowestObserverState_ !== it.STALE_ && (e.lowestObserverState_ = it.STALE_, e.observers_.forEach(function(t) {
    t.dependenciesState_ === it.POSSIBLY_STALE_ ? (t.dependenciesState_ = it.STALE_, process.env.NODE_ENV !== "production" && t.isTracing_ !== On.NONE && Ip(t, e)) : t.dependenciesState_ === it.UP_TO_DATE_ && (e.lowestObserverState_ = it.UP_TO_DATE_);
  }));
}
function KC(e) {
  e.lowestObserverState_ === it.UP_TO_DATE_ && (e.lowestObserverState_ = it.POSSIBLY_STALE_, e.observers_.forEach(function(t) {
    t.dependenciesState_ === it.UP_TO_DATE_ && (t.dependenciesState_ = it.POSSIBLY_STALE_, t.onBecomeStale_());
  }));
}
function Ip(e, t) {
  if (console.log("[mobx.trace] '" + e.name_ + "' is invalidated due to a change in: '" + t.name_ + "'"), e.isTracing_ === On.BREAK) {
    var n = [];
    Ap(Bp(e), n, 1), new Function(`debugger;
/*
Tracing '` + e.name_ + `'

You are entering this break point because derivation '` + e.name_ + "' is being traced and '" + t.name_ + `' is now forcing it to update.
Just follow the stacktrace you should now see in the devtools to see precisely what piece of your code is causing this update
The stackframe you are looking for is at least ~6-8 stack-frames up.

` + (e instanceof bi ? e.derivation.toString().replace(/[*]\//g, "/") : "") + `

The dependencies for this derivation are:

` + n.join(`
`) + `
*/
    `)();
  }
}
function Ap(e, t, n) {
  if (t.length >= 1e3) {
    t.push("(and many more)");
    return;
  }
  t.push("" + "	".repeat(n - 1) + e.name), e.dependencies && e.dependencies.forEach(function(r) {
    return Ap(r, t, n + 1);
  });
}
var io = /* @__PURE__ */ function() {
  function e(n, r, i, o) {
    n === void 0 && (n = process.env.NODE_ENV !== "production" ? "Reaction@" + kn() : "Reaction"), this.name_ = void 0, this.onInvalidate_ = void 0, this.errorHandler_ = void 0, this.requiresObservable_ = void 0, this.observing_ = [], this.newObserving_ = [], this.dependenciesState_ = it.NOT_TRACKING_, this.diffValue_ = 0, this.runId_ = 0, this.unboundDepsCount_ = 0, this.isDisposed_ = !1, this.isScheduled_ = !1, this.isTrackPending_ = !1, this.isRunning_ = !1, this.isTracing_ = On.NONE, this.name_ = n, this.onInvalidate_ = r, this.errorHandler_ = i, this.requiresObservable_ = o;
  }
  var t = e.prototype;
  return t.onBecomeStale_ = function() {
    this.schedule_();
  }, t.schedule_ = function() {
    this.isScheduled_ || (this.isScheduled_ = !0, z.pendingReactions.push(this), Dp());
  }, t.isScheduled = function() {
    return this.isScheduled_;
  }, t.runReaction_ = function() {
    if (!this.isDisposed_) {
      en(), this.isScheduled_ = !1;
      var r = z.trackingContext;
      if (z.trackingContext = this, Zl(this)) {
        this.isTrackPending_ = !0;
        try {
          this.onInvalidate_(), process.env.NODE_ENV !== "production" && this.isTrackPending_ && Ut() && kr({
            name: this.name_,
            type: "scheduled-reaction"
          });
        } catch (i) {
          this.reportExceptionInDerivation_(i);
        }
      }
      z.trackingContext = r, tn();
    }
  }, t.track = function(r) {
    if (!this.isDisposed_) {
      en();
      var i = Ut(), o;
      process.env.NODE_ENV !== "production" && i && (o = Date.now(), dn({
        name: this.name_,
        type: "reaction"
      })), this.isRunning_ = !0;
      var a = z.trackingContext;
      z.trackingContext = this;
      var s = Op(this, r, void 0);
      z.trackingContext = a, this.isRunning_ = !1, this.isTrackPending_ = !1, this.isDisposed_ && eu(this), ga(s) && this.reportExceptionInDerivation_(s.cause), process.env.NODE_ENV !== "production" && i && vn({
        time: Date.now() - o
      }), tn();
    }
  }, t.reportExceptionInDerivation_ = function(r) {
    var i = this;
    if (this.errorHandler_) {
      this.errorHandler_(r, this);
      return;
    }
    if (z.disableErrorBoundaries)
      throw r;
    var o = process.env.NODE_ENV !== "production" ? "[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '" + this + "'" : "[mobx] uncaught error in '" + this + "'";
    z.suppressReactionErrors ? process.env.NODE_ENV !== "production" && console.warn("[mobx] (error in reaction '" + this.name_ + "' suppressed, fix error of causing action below)") : console.error(o, r), process.env.NODE_ENV !== "production" && Ut() && kr({
      type: "error",
      name: this.name_,
      message: o,
      error: "" + r
    }), z.globalReactionErrorHandlers.forEach(function(a) {
      return a(r, i);
    });
  }, t.dispose = function() {
    this.isDisposed_ || (this.isDisposed_ = !0, this.isRunning_ || (en(), eu(this), tn()));
  }, t.getDisposer_ = function() {
    var r = this.dispose.bind(this);
    return r[Te] = this, r;
  }, t.toString = function() {
    return "Reaction[" + this.name_ + "]";
  }, t.trace = function(r) {
    r === void 0 && (r = !1), mO(this, r);
  }, e;
}(), Vf = 100, tu = function(t) {
  return t();
};
function Dp() {
  z.inBatch > 0 || z.isRunningReactions || tu(GC);
}
function GC() {
  z.isRunningReactions = !0;
  for (var e = z.pendingReactions, t = 0; e.length > 0; ) {
    ++t === Vf && (console.error(process.env.NODE_ENV !== "production" ? "Reaction doesn't converge to a stable state after " + Vf + " iterations." + (" Probably there is a cycle in the reactive function: " + e[0]) : "[mobx] cycle in reaction: " + e[0]), e.splice(0));
    for (var n = e.splice(0), r = 0, i = n.length; r < i; r++)
      n[r].runReaction_();
  }
  z.isRunningReactions = !1;
}
var Ga = /* @__PURE__ */ wr("Reaction", io);
function qC(e) {
  var t = tu;
  tu = function(r) {
    return e(function() {
      return t(r);
    });
  };
}
function Ut() {
  return process.env.NODE_ENV !== "production" && !!z.spyListeners.length;
}
function kr(e) {
  if (process.env.NODE_ENV !== "production" && z.spyListeners.length)
    for (var t = z.spyListeners, n = 0, r = t.length; n < r; n++)
      t[n](e);
}
function dn(e) {
  if (process.env.NODE_ENV !== "production") {
    var t = yr({}, e, {
      spyReportStart: !0
    });
    kr(t);
  }
}
var XC = {
  type: "report-end",
  spyReportEnd: !0
};
function vn(e) {
  process.env.NODE_ENV !== "production" && kr(e ? yr({}, e, {
    type: "report-end",
    spyReportEnd: !0
  }) : XC);
}
function YC(e) {
  return process.env.NODE_ENV === "production" ? (console.warn("[mobx.spy] Is a no-op in production builds"), function() {
  }) : (z.spyListeners.push(e), Ku(function() {
    z.spyListeners = z.spyListeners.filter(function(t) {
      return t !== e;
    });
  }));
}
var Qu = "action", QC = "action.bound", Fp = "autoAction", JC = "autoAction.bound", ZC = "<unnamed action>", Lp = /* @__PURE__ */ Mo(Qu), eO = /* @__PURE__ */ Mo(QC, {
  bound: !0
}), Vp = /* @__PURE__ */ Mo(Fp, {
  autoAction: !0
}), tO = /* @__PURE__ */ Mo(JC, {
  autoAction: !0,
  bound: !0
});
function kp(e) {
  var t = function(r, i) {
    if (Vt(r))
      return gi(r.name || ZC, r, e);
    if (Vt(i))
      return gi(r, i, e);
    if (Vr(i))
      return No(r, i, e ? Vp : Lp);
    if (Vr(r))
      return Kn(Mo(e ? Fp : Qu, {
        name: r,
        autoAction: e
      }));
    process.env.NODE_ENV !== "production" && oe("Invalid arguments for `action`");
  };
  return t;
}
var ai = /* @__PURE__ */ kp(!1);
Object.assign(ai, Lp);
var oo = /* @__PURE__ */ kp(!0);
Object.assign(oo, Vp);
ai.bound = /* @__PURE__ */ Kn(eO);
oo.bound = /* @__PURE__ */ Kn(tO);
function Ss(e) {
  return Vt(e) && e.isMobxAction === !0;
}
function nO(e, t) {
  var n, r;
  t === void 0 && (t = op), process.env.NODE_ENV !== "production" && (Vt(e) || oe("Autorun expects a function as first argument"), Ss(e) && oe("Autorun does not accept actions since actions are untrackable"));
  var i = (n = (r = t) == null ? void 0 : r.name) != null ? n : process.env.NODE_ENV !== "production" ? e.name || "Autorun@" + kn() : "Autorun", o = !t.scheduler && !t.delay, a;
  if (o)
    a = new io(i, function() {
      this.track(u);
    }, t.onError, t.requiresObservable);
  else {
    var s = iO(t), l = !1;
    a = new io(i, function() {
      l || (l = !0, s(function() {
        l = !1, a.isDisposed_ || a.track(u);
      }));
    }, t.onError, t.requiresObservable);
  }
  function u() {
    e(a);
  }
  return a.schedule_(), a.getDisposer_();
}
var rO = function(t) {
  return t();
};
function iO(e) {
  return e.scheduler ? e.scheduler : e.delay ? function(t) {
    return setTimeout(t, e.delay);
  } : rO;
}
var oO = "onBO", aO = "onBUO";
function sO(e, t, n) {
  return Hp(oO, e, t, n);
}
function jp(e, t, n) {
  return Hp(aO, e, t, n);
}
function Hp(e, t, n, r) {
  var i = typeof r == "function" ? Sr(t, n) : Sr(t), o = Vt(r) ? r : n, a = e + "L";
  return i[a] ? i[a].add(o) : i[a] = /* @__PURE__ */ new Set([o]), function() {
    var s = i[a];
    s && (s.delete(o), s.size === 0 && delete i[a]);
  };
}
var lO = "never", na = "always", uO = "observed";
function cO(e) {
  e.isolateGlobalState === !0 && BC();
  var t = e.useProxies, n = e.enforceActions;
  if (t !== void 0 && (z.useProxies = t === na ? !0 : t === lO ? !1 : typeof Proxy < "u"), t === "ifavailable" && (z.verifyProxies = !0), n !== void 0) {
    var r = n === na ? na : n === uO;
    z.enforceActions = r, z.allowStateChanges = !(r === !0 || r === na);
  }
  ["computedRequiresReaction", "reactionRequiresObservable", "observableRequiresReaction", "disableErrorBoundaries", "safeDescriptors"].forEach(function(i) {
    i in e && (z[i] = !!e[i]);
  }), z.allowStateReads = !z.observableRequiresReaction, process.env.NODE_ENV !== "production" && z.disableErrorBoundaries === !0 && console.warn("WARNING: Debug feature only. MobX will NOT recover from errors when `disableErrorBoundaries` is enabled."), e.reactionScheduler && qC(e.reactionScheduler);
}
function zp(e, t, n, r) {
  process.env.NODE_ENV !== "production" && (arguments.length > 4 && oe("'extendObservable' expected 2-4 arguments"), typeof e != "object" && oe("'extendObservable' expects an object as first argument"), Xn(e) && oe("'extendObservable' should not be used on maps, use map.merge instead"), fn(t) || oe("'extendObservable' only accepts plain objects as second argument"), (_i(t) || _i(n)) && oe("Extending an object with another observable (object) is not supported"));
  var i = Ww(t), o = Do(e, r)[Te];
  en();
  try {
    pi(i).forEach(function(a) {
      o.extend_(
        a,
        i[a],
        // must pass "undefined" for { key: undefined }
        n && a in n ? n[a] : !0
      );
    });
  } finally {
    tn();
  }
  return e;
}
function Bp(e, t) {
  return Up(Sr(e, t));
}
function Up(e) {
  var t = {
    name: e.name_
  };
  return e.observing_ && e.observing_.length > 0 && (t.dependencies = fO(e.observing_).map(Up)), t;
}
function fO(e) {
  return Array.from(new Set(e));
}
var dO = 0;
function Wp() {
  this.message = "FLOW_CANCELLED";
}
Wp.prototype = /* @__PURE__ */ Object.create(Error.prototype);
var kf = /* @__PURE__ */ hp("flow"), vO = /* @__PURE__ */ hp("flow.bound", {
  bound: !0
}), ao = /* @__PURE__ */ Object.assign(function(t, n) {
  if (Vr(n))
    return No(t, n, kf);
  process.env.NODE_ENV !== "production" && arguments.length !== 1 && oe("Flow expects single argument with generator function");
  var r = t, i = r.name || "<unnamed flow>", o = function() {
    var s = this, l = arguments, u = ++dO, c = ai(i + " - runid: " + u + " - init", r).apply(s, l), d, v = void 0, h = new Promise(function(p, m) {
      var b = 0;
      d = m;
      function g(C) {
        v = void 0;
        var _;
        try {
          _ = ai(i + " - runid: " + u + " - yield " + b++, c.next).call(c, C);
        } catch (E) {
          return m(E);
        }
        S(_);
      }
      function y(C) {
        v = void 0;
        var _;
        try {
          _ = ai(i + " - runid: " + u + " - yield " + b++, c.throw).call(c, C);
        } catch (E) {
          return m(E);
        }
        S(_);
      }
      function S(C) {
        if (Vt(C?.then)) {
          C.then(S, m);
          return;
        }
        return C.done ? p(C.value) : (v = Promise.resolve(C.value), v.then(g, y));
      }
      g(void 0);
    });
    return h.cancel = ai(i + " - runid: " + u + " - cancel", function() {
      try {
        v && jf(v);
        var p = c.return(void 0), m = Promise.resolve(p.value);
        m.then(ii, ii), jf(m), d(new Wp());
      } catch (b) {
        d(b);
      }
    }), h;
  };
  return o.isMobXFlow = !0, o;
}, kf);
ao.bound = /* @__PURE__ */ Kn(vO);
function jf(e) {
  Vt(e.cancel) && e.cancel();
}
function qa(e) {
  return e?.isMobXFlow === !0;
}
function hO(e, t) {
  return e ? t !== void 0 ? process.env.NODE_ENV !== "production" && (Xn(e) || Ri(e)) ? oe("isObservable(object, propertyName) is not supported for arrays and maps. Use map.has or array.length instead.") : _r(e) ? e[Te].values_.has(t) : !1 : _r(e) || !!e[Te] || qu(e) || Ga(e) || $o(e) : !1;
}
function _i(e) {
  return process.env.NODE_ENV !== "production" && arguments.length !== 1 && oe("isObservable expects only 1 argument. Use isObservableProp to inspect the observability of a property"), hO(e);
}
function pO(e) {
  if (_r(e))
    return e[Te].ownKeys_();
  oe(38);
}
function ra(e, t, n) {
  return e.set(t, n), n;
}
function Zr(e, t) {
  if (e == null || typeof e != "object" || e instanceof Date || !_i(e))
    return e;
  if (kC(e) || $o(e))
    return Zr(e.get(), t);
  if (t.has(e))
    return t.get(e);
  if (Ri(e)) {
    var n = ra(t, e, new Array(e.length));
    return e.forEach(function(a, s) {
      n[s] = Zr(a, t);
    }), n;
  }
  if (Hr(e)) {
    var r = ra(t, e, /* @__PURE__ */ new Set());
    return e.forEach(function(a) {
      r.add(Zr(a, t));
    }), r;
  }
  if (Xn(e)) {
    var i = ra(t, e, /* @__PURE__ */ new Map());
    return e.forEach(function(a, s) {
      i.set(s, Zr(a, t));
    }), i;
  } else {
    var o = ra(t, e, {});
    return pO(e).forEach(function(a) {
      Co.propertyIsEnumerable.call(e, a) && (o[a] = Zr(e[a], t));
    }), o;
  }
}
function Kp(e, t) {
  return process.env.NODE_ENV !== "production" && t && oe("toJS no longer supports options"), Zr(e, /* @__PURE__ */ new Map());
}
function mO() {
  process.env.NODE_ENV === "production" && oe("trace() is not available in production builds");
  for (var e = !1, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  typeof n[n.length - 1] == "boolean" && (e = n.pop());
  var i = gO(n);
  if (!i)
    return oe("'trace(break?)' can only be used inside a tracked computed value or a Reaction. Consider passing in the computed value or reaction explicitly");
  i.isTracing_ === On.NONE && console.log("[mobx.trace] '" + i.name_ + "' tracing enabled"), i.isTracing_ = e ? On.BREAK : On.LOG;
}
function gO(e) {
  switch (e.length) {
    case 0:
      return z.trackingDerivation;
    case 1:
      return Sr(e[0]);
    case 2:
      return Sr(e[0], e[1]);
  }
}
function nr(e, t) {
  t === void 0 && (t = void 0), en();
  try {
    return e.apply(t);
  } finally {
    tn();
  }
}
function Nr(e) {
  return e[Te];
}
var bO = {
  has: function(t, n) {
    return process.env.NODE_ENV !== "production" && z.trackingDerivation && ji("detect new properties using the 'in' operator. Use 'has' from 'mobx' instead."), Nr(t).has_(n);
  },
  get: function(t, n) {
    return Nr(t).get_(n);
  },
  set: function(t, n, r) {
    var i;
    return Vr(n) ? (process.env.NODE_ENV !== "production" && !Nr(t).values_.has(n) && ji("add a new observable property through direct assignment. Use 'set' from 'mobx' instead."), (i = Nr(t).set_(n, r, !0)) != null ? i : !0) : !1;
  },
  deleteProperty: function(t, n) {
    var r;
    return process.env.NODE_ENV !== "production" && ji("delete properties from an observable object. Use 'remove' from 'mobx' instead."), Vr(n) ? (r = Nr(t).delete_(n, !0)) != null ? r : !0 : !1;
  },
  defineProperty: function(t, n, r) {
    var i;
    return process.env.NODE_ENV !== "production" && ji("define property on an observable object. Use 'defineProperty' from 'mobx' instead."), (i = Nr(t).defineProperty_(n, r)) != null ? i : !0;
  },
  ownKeys: function(t) {
    return process.env.NODE_ENV !== "production" && z.trackingDerivation && ji("iterate keys to detect added / removed properties. Use 'keys' from 'mobx' instead."), Nr(t).ownKeys_();
  },
  preventExtensions: function(t) {
    oe(13);
  }
};
function yO(e, t) {
  var n, r;
  return ap(), e = Do(e, t), (r = (n = e[Te]).proxy_) != null ? r : n.proxy_ = new Proxy(e, bO);
}
function Sn(e) {
  return e.interceptors_ !== void 0 && e.interceptors_.length > 0;
}
function Io(e, t) {
  var n = e.interceptors_ || (e.interceptors_ = []);
  return n.push(t), Ku(function() {
    var r = n.indexOf(t);
    r !== -1 && n.splice(r, 1);
  });
}
function En(e, t) {
  var n = Pi();
  try {
    for (var r = [].concat(e.interceptors_ || []), i = 0, o = r.length; i < o && (t = r[i](t), t && !t.type && oe(14), !!t); i++)
      ;
    return t;
  } finally {
    gr(n);
  }
}
function Fn(e) {
  return e.changeListeners_ !== void 0 && e.changeListeners_.length > 0;
}
function Ao(e, t) {
  var n = e.changeListeners_ || (e.changeListeners_ = []);
  return n.push(t), Ku(function() {
    var r = n.indexOf(t);
    r !== -1 && n.splice(r, 1);
  });
}
function Ln(e, t) {
  var n = Pi(), r = e.changeListeners_;
  if (r) {
    r = r.slice();
    for (var i = 0, o = r.length; i < o; i++)
      r[i](t);
    gr(n);
  }
}
function _O(e, t, n) {
  var r = Do(e, n)[Te];
  en();
  try {
    var i;
    process.env.NODE_ENV !== "production" && t && e[Qt] && oe("makeObservable second arg must be nullish when using decorators. Mixing @decorator syntax with annotations is not supported."), (i = t) != null || (t = Yw(e)), pi(t).forEach(function(o) {
      return r.make_(o, t[o]);
    });
  } finally {
    tn();
  }
  return e;
}
var Js = /* @__PURE__ */ Symbol("mobx-keys");
function Mi(e, t, n) {
  if (process.env.NODE_ENV !== "production" && (!fn(e) && !fn(Object.getPrototypeOf(e)) && oe("'makeAutoObservable' can only be used for classes that don't have a superclass"), _r(e) && oe("makeAutoObservable can only be used on objects not already made observable")), fn(e))
    return zp(e, e, t, n);
  var r = Do(e, n)[Te];
  if (!e[Js]) {
    var i = Object.getPrototypeOf(e), o = new Set([].concat(pi(e), pi(i)));
    o.delete("constructor"), o.delete(Te), Oo(i, Js, o);
  }
  en();
  try {
    e[Js].forEach(function(a) {
      return r.make_(
        a,
        // must pass "undefined" for { key: undefined }
        t && a in t ? t[a] : !0
      );
    });
  } finally {
    tn();
  }
  return e;
}
var Hf = "splice", An = "update", SO = 1e4, EO = {
  get: function(t, n) {
    var r = t[Te];
    return n === Te ? r : n === "length" ? r.getArrayLength_() : typeof n == "string" && !isNaN(n) ? r.get_(parseInt(n)) : Cn(Xa, n) ? Xa[n] : t[n];
  },
  set: function(t, n, r) {
    var i = t[Te];
    return n === "length" && i.setArrayLength_(r), typeof n == "symbol" || isNaN(n) ? t[n] = r : i.set_(parseInt(n), r), !0;
  },
  preventExtensions: function() {
    oe(15);
  }
}, Ju = /* @__PURE__ */ function() {
  function e(n, r, i, o) {
    n === void 0 && (n = process.env.NODE_ENV !== "production" ? "ObservableArray@" + kn() : "ObservableArray"), this.owned_ = void 0, this.legacyMode_ = void 0, this.atom_ = void 0, this.values_ = [], this.interceptors_ = void 0, this.changeListeners_ = void 0, this.enhancer_ = void 0, this.dehancer = void 0, this.proxy_ = void 0, this.lastKnownLength_ = 0, this.owned_ = i, this.legacyMode_ = o, this.atom_ = new Po(n), this.enhancer_ = function(a, s) {
      return r(a, s, process.env.NODE_ENV !== "production" ? n + "[..]" : "ObservableArray[..]");
    };
  }
  var t = e.prototype;
  return t.dehanceValue_ = function(r) {
    return this.dehancer !== void 0 ? this.dehancer(r) : r;
  }, t.dehanceValues_ = function(r) {
    return this.dehancer !== void 0 && r.length > 0 ? r.map(this.dehancer) : r;
  }, t.intercept_ = function(r) {
    return Io(this, r);
  }, t.observe_ = function(r, i) {
    return i === void 0 && (i = !1), i && r({
      observableKind: "array",
      object: this.proxy_,
      debugObjectName: this.atom_.name_,
      type: "splice",
      index: 0,
      added: this.values_.slice(),
      addedCount: this.values_.length,
      removed: [],
      removedCount: 0
    }), Ao(this, r);
  }, t.getArrayLength_ = function() {
    return this.atom_.reportObserved(), this.values_.length;
  }, t.setArrayLength_ = function(r) {
    (typeof r != "number" || isNaN(r) || r < 0) && oe("Out of range: " + r);
    var i = this.values_.length;
    if (r !== i)
      if (r > i) {
        for (var o = new Array(r - i), a = 0; a < r - i; a++)
          o[a] = void 0;
        this.spliceWithArray_(i, 0, o);
      } else
        this.spliceWithArray_(r, i - r);
  }, t.updateArrayLength_ = function(r, i) {
    r !== this.lastKnownLength_ && oe(16), this.lastKnownLength_ += i, this.legacyMode_ && i > 0 && nm(r + i + 1);
  }, t.spliceWithArray_ = function(r, i, o) {
    var a = this;
    yi(this.atom_);
    var s = this.values_.length;
    if (r === void 0 ? r = 0 : r > s ? r = s : r < 0 && (r = Math.max(0, s + r)), arguments.length === 1 ? i = s - r : i == null ? i = 0 : i = Math.max(0, Math.min(i, s - r)), o === void 0 && (o = za), Sn(this)) {
      var l = En(this, {
        object: this.proxy_,
        type: Hf,
        index: r,
        removedCount: i,
        added: o
      });
      if (!l)
        return za;
      i = l.removedCount, o = l.added;
    }
    if (o = o.length === 0 ? o : o.map(function(d) {
      return a.enhancer_(d, void 0);
    }), this.legacyMode_ || process.env.NODE_ENV !== "production") {
      var u = o.length - i;
      this.updateArrayLength_(s, u);
    }
    var c = this.spliceItemsIntoValues_(r, i, o);
    return (i !== 0 || o.length !== 0) && this.notifyArraySplice_(r, o, c), this.dehanceValues_(c);
  }, t.spliceItemsIntoValues_ = function(r, i, o) {
    if (o.length < SO) {
      var a;
      return (a = this.values_).splice.apply(a, [r, i].concat(o));
    } else {
      var s = this.values_.slice(r, r + i), l = this.values_.slice(r + i);
      this.values_.length += o.length - i;
      for (var u = 0; u < o.length; u++)
        this.values_[r + u] = o[u];
      for (var c = 0; c < l.length; c++)
        this.values_[r + o.length + c] = l[c];
      return s;
    }
  }, t.notifyArrayChildUpdate_ = function(r, i, o) {
    var a = !this.owned_ && Ut(), s = Fn(this), l = s || a ? {
      observableKind: "array",
      object: this.proxy_,
      type: An,
      debugObjectName: this.atom_.name_,
      index: r,
      newValue: i,
      oldValue: o
    } : null;
    process.env.NODE_ENV !== "production" && a && dn(l), this.atom_.reportChanged(), s && Ln(this, l), process.env.NODE_ENV !== "production" && a && vn();
  }, t.notifyArraySplice_ = function(r, i, o) {
    var a = !this.owned_ && Ut(), s = Fn(this), l = s || a ? {
      observableKind: "array",
      object: this.proxy_,
      debugObjectName: this.atom_.name_,
      type: Hf,
      index: r,
      removed: o,
      added: i,
      removedCount: o.length,
      addedCount: i.length
    } : null;
    process.env.NODE_ENV !== "production" && a && dn(l), this.atom_.reportChanged(), s && Ln(this, l), process.env.NODE_ENV !== "production" && a && vn();
  }, t.get_ = function(r) {
    if (this.legacyMode_ && r >= this.values_.length) {
      console.warn(process.env.NODE_ENV !== "production" ? "[mobx.array] Attempt to read an array index (" + r + ") that is out of bounds (" + this.values_.length + "). Please check length first. Out of bound indices will not be tracked by MobX" : "[mobx] Out of bounds read: " + r);
      return;
    }
    return this.atom_.reportObserved(), this.dehanceValue_(this.values_[r]);
  }, t.set_ = function(r, i) {
    var o = this.values_;
    if (this.legacyMode_ && r > o.length && oe(17, r, o.length), r < o.length) {
      yi(this.atom_);
      var a = o[r];
      if (Sn(this)) {
        var s = En(this, {
          type: An,
          object: this.proxy_,
          index: r,
          newValue: i
        });
        if (!s)
          return;
        i = s.newValue;
      }
      i = this.enhancer_(i, a);
      var l = i !== a;
      l && (o[r] = i, this.notifyArrayChildUpdate_(r, i, a));
    } else {
      for (var u = new Array(r + 1 - o.length), c = 0; c < u.length - 1; c++)
        u[c] = void 0;
      u[u.length - 1] = i, this.spliceWithArray_(o.length, 0, u);
    }
  }, e;
}();
function wO(e, t, n, r) {
  n === void 0 && (n = process.env.NODE_ENV !== "production" ? "ObservableArray@" + kn() : "ObservableArray"), r === void 0 && (r = !1), ap();
  var i = new Ju(n, t, r, !1);
  lp(i.values_, Te, i);
  var o = new Proxy(i.values_, EO);
  if (i.proxy_ = o, e && e.length) {
    var a = Ro(!0);
    i.spliceWithArray_(0, 0, e), To(a);
  }
  return o;
}
var Xa = {
  clear: function() {
    return this.splice(0);
  },
  replace: function(t) {
    var n = this[Te];
    return n.spliceWithArray_(0, n.values_.length, t);
  },
  // Used by JSON.stringify
  toJSON: function() {
    return this.slice();
  },
  /*
   * functions that do alter the internal structure of the array, (based on lib.es6.d.ts)
   * since these functions alter the inner structure of the array, the have side effects.
   * Because the have side effects, they should not be used in computed function,
   * and for that reason the do not call dependencyState.notifyObserved
   */
  splice: function(t, n) {
    for (var r = arguments.length, i = new Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++)
      i[o - 2] = arguments[o];
    var a = this[Te];
    switch (arguments.length) {
      case 0:
        return [];
      case 1:
        return a.spliceWithArray_(t);
      case 2:
        return a.spliceWithArray_(t, n);
    }
    return a.spliceWithArray_(t, n, i);
  },
  spliceWithArray: function(t, n, r) {
    return this[Te].spliceWithArray_(t, n, r);
  },
  push: function() {
    for (var t = this[Te], n = arguments.length, r = new Array(n), i = 0; i < n; i++)
      r[i] = arguments[i];
    return t.spliceWithArray_(t.values_.length, 0, r), t.values_.length;
  },
  pop: function() {
    return this.splice(Math.max(this[Te].values_.length - 1, 0), 1)[0];
  },
  shift: function() {
    return this.splice(0, 1)[0];
  },
  unshift: function() {
    for (var t = this[Te], n = arguments.length, r = new Array(n), i = 0; i < n; i++)
      r[i] = arguments[i];
    return t.spliceWithArray_(0, 0, r), t.values_.length;
  },
  reverse: function() {
    return z.trackingDerivation && oe(37, "reverse"), this.replace(this.slice().reverse()), this;
  },
  sort: function() {
    z.trackingDerivation && oe(37, "sort");
    var t = this.slice();
    return t.sort.apply(t, arguments), this.replace(t), this;
  },
  remove: function(t) {
    var n = this[Te], r = n.dehanceValues_(n.values_).indexOf(t);
    return r > -1 ? (this.splice(r, 1), !0) : !1;
  }
};
kt("concat", ur);
kt("flat", ur);
kt("includes", ur);
kt("indexOf", ur);
kt("join", ur);
kt("lastIndexOf", ur);
kt("slice", ur);
kt("toString", ur);
kt("toLocaleString", ur);
kt("every", Cr);
kt("filter", Cr);
kt("find", Cr);
kt("findIndex", Cr);
kt("flatMap", Cr);
kt("forEach", Cr);
kt("map", Cr);
kt("some", Cr);
kt("reduce", Gp);
kt("reduceRight", Gp);
function kt(e, t) {
  typeof Array.prototype[e] == "function" && (Xa[e] = t(e));
}
function ur(e) {
  return function() {
    var t = this[Te];
    t.atom_.reportObserved();
    var n = t.dehanceValues_(t.values_);
    return n[e].apply(n, arguments);
  };
}
function Cr(e) {
  return function(t, n) {
    var r = this, i = this[Te];
    i.atom_.reportObserved();
    var o = i.dehanceValues_(i.values_);
    return o[e](function(a, s) {
      return t.call(n, a, s, r);
    });
  };
}
function Gp(e) {
  return function() {
    var t = this, n = this[Te];
    n.atom_.reportObserved();
    var r = n.dehanceValues_(n.values_), i = arguments[0];
    return arguments[0] = function(o, a, s) {
      return i(o, a, s, t);
    }, r[e].apply(r, arguments);
  };
}
var CO = /* @__PURE__ */ wr("ObservableArrayAdministration", Ju);
function Ri(e) {
  return gs(e) && CO(e[Te]);
}
var qp, Xp, OO = {}, pr = "add", Ya = "delete";
qp = Symbol.iterator;
Xp = Symbol.toStringTag;
var Yp = /* @__PURE__ */ function() {
  function e(n, r, i) {
    var o = this;
    r === void 0 && (r = mi), i === void 0 && (i = process.env.NODE_ENV !== "production" ? "ObservableMap@" + kn() : "ObservableMap"), this.enhancer_ = void 0, this.name_ = void 0, this[Te] = OO, this.data_ = void 0, this.hasMap_ = void 0, this.keysAtom_ = void 0, this.interceptors_ = void 0, this.changeListeners_ = void 0, this.dehancer = void 0, this.enhancer_ = r, this.name_ = i, Vt(Map) || oe(18), this.keysAtom_ = dp(process.env.NODE_ENV !== "production" ? this.name_ + ".keys()" : "ObservableMap.keys()"), this.data_ = /* @__PURE__ */ new Map(), this.hasMap_ = /* @__PURE__ */ new Map(), LC(!0, function() {
      o.merge(n);
    });
  }
  var t = e.prototype;
  return t.has_ = function(r) {
    return this.data_.has(r);
  }, t.has = function(r) {
    var i = this;
    if (!z.trackingDerivation)
      return this.has_(r);
    var o = this.hasMap_.get(r);
    if (!o) {
      var a = o = new Dr(this.has_(r), bs, process.env.NODE_ENV !== "production" ? this.name_ + "." + Ql(r) + "?" : "ObservableMap.key?", !1);
      this.hasMap_.set(r, a), jp(a, function() {
        return i.hasMap_.delete(r);
      });
    }
    return o.get();
  }, t.set = function(r, i) {
    var o = this.has_(r);
    if (Sn(this)) {
      var a = En(this, {
        type: o ? An : pr,
        object: this,
        newValue: i,
        name: r
      });
      if (!a)
        return this;
      i = a.newValue;
    }
    return o ? this.updateValue_(r, i) : this.addValue_(r, i), this;
  }, t.delete = function(r) {
    var i = this;
    if (yi(this.keysAtom_), Sn(this)) {
      var o = En(this, {
        type: Ya,
        object: this,
        name: r
      });
      if (!o)
        return !1;
    }
    if (this.has_(r)) {
      var a = Ut(), s = Fn(this), l = s || a ? {
        observableKind: "map",
        debugObjectName: this.name_,
        type: Ya,
        object: this,
        oldValue: this.data_.get(r).value_,
        name: r
      } : null;
      return process.env.NODE_ENV !== "production" && a && dn(l), nr(function() {
        var u;
        i.keysAtom_.reportChanged(), (u = i.hasMap_.get(r)) == null || u.setNewValue_(!1);
        var c = i.data_.get(r);
        c.setNewValue_(void 0), i.data_.delete(r);
      }), s && Ln(this, l), process.env.NODE_ENV !== "production" && a && vn(), !0;
    }
    return !1;
  }, t.updateValue_ = function(r, i) {
    var o = this.data_.get(r);
    if (i = o.prepareNewValue_(i), i !== z.UNCHANGED) {
      var a = Ut(), s = Fn(this), l = s || a ? {
        observableKind: "map",
        debugObjectName: this.name_,
        type: An,
        object: this,
        oldValue: o.value_,
        name: r,
        newValue: i
      } : null;
      process.env.NODE_ENV !== "production" && a && dn(l), o.setNewValue_(i), s && Ln(this, l), process.env.NODE_ENV !== "production" && a && vn();
    }
  }, t.addValue_ = function(r, i) {
    var o = this;
    yi(this.keysAtom_), nr(function() {
      var u, c = new Dr(i, o.enhancer_, process.env.NODE_ENV !== "production" ? o.name_ + "." + Ql(r) : "ObservableMap.key", !1);
      o.data_.set(r, c), i = c.value_, (u = o.hasMap_.get(r)) == null || u.setNewValue_(!0), o.keysAtom_.reportChanged();
    });
    var a = Ut(), s = Fn(this), l = s || a ? {
      observableKind: "map",
      debugObjectName: this.name_,
      type: pr,
      object: this,
      name: r,
      newValue: i
    } : null;
    process.env.NODE_ENV !== "production" && a && dn(l), s && Ln(this, l), process.env.NODE_ENV !== "production" && a && vn();
  }, t.get = function(r) {
    return this.has(r) ? this.dehanceValue_(this.data_.get(r).get()) : this.dehanceValue_(void 0);
  }, t.dehanceValue_ = function(r) {
    return this.dehancer !== void 0 ? this.dehancer(r) : r;
  }, t.keys = function() {
    return this.keysAtom_.reportObserved(), this.data_.keys();
  }, t.values = function() {
    var r = this, i = this.keys();
    return so({
      next: function() {
        var a = i.next(), s = a.done, l = a.value;
        return {
          done: s,
          value: s ? void 0 : r.get(l)
        };
      }
    });
  }, t.entries = function() {
    var r = this, i = this.keys();
    return so({
      next: function() {
        var a = i.next(), s = a.done, l = a.value;
        return {
          done: s,
          value: s ? void 0 : [l, r.get(l)]
        };
      }
    });
  }, t[qp] = function() {
    return this.entries();
  }, t.forEach = function(r, i) {
    for (var o = oi(this), a; !(a = o()).done; ) {
      var s = a.value, l = s[0], u = s[1];
      r.call(i, u, l, this);
    }
  }, t.merge = function(r) {
    var i = this;
    return Xn(r) && (r = new Map(r)), nr(function() {
      fn(r) ? Uw(r).forEach(function(o) {
        return i.set(o, r[o]);
      }) : Array.isArray(r) ? r.forEach(function(o) {
        var a = o[0], s = o[1];
        return i.set(a, s);
      }) : Ni(r) ? (r.constructor !== Map && oe(19, r), r.forEach(function(o, a) {
        return i.set(a, o);
      })) : r != null && oe(20, r);
    }), this;
  }, t.clear = function() {
    var r = this;
    nr(function() {
      xp(function() {
        for (var i = oi(r.keys()), o; !(o = i()).done; ) {
          var a = o.value;
          r.delete(a);
        }
      });
    });
  }, t.replace = function(r) {
    var i = this;
    return nr(function() {
      for (var o = xO(r), a = /* @__PURE__ */ new Map(), s = !1, l = oi(i.data_.keys()), u; !(u = l()).done; ) {
        var c = u.value;
        if (!o.has(c)) {
          var d = i.delete(c);
          if (d)
            s = !0;
          else {
            var v = i.data_.get(c);
            a.set(c, v);
          }
        }
      }
      for (var h = oi(o.entries()), p; !(p = h()).done; ) {
        var m = p.value, b = m[0], g = m[1], y = i.data_.has(b);
        if (i.set(b, g), i.data_.has(b)) {
          var S = i.data_.get(b);
          a.set(b, S), y || (s = !0);
        }
      }
      if (!s)
        if (i.data_.size !== a.size)
          i.keysAtom_.reportChanged();
        else
          for (var C = i.data_.keys(), _ = a.keys(), E = C.next(), x = _.next(); !E.done; ) {
            if (E.value !== x.value) {
              i.keysAtom_.reportChanged();
              break;
            }
            E = C.next(), x = _.next();
          }
      i.data_ = a;
    }), this;
  }, t.toString = function() {
    return "[object ObservableMap]";
  }, t.toJSON = function() {
    return Array.from(this);
  }, t.observe_ = function(r, i) {
    return process.env.NODE_ENV !== "production" && i === !0 && oe("`observe` doesn't support fireImmediately=true in combination with maps."), Ao(this, r);
  }, t.intercept_ = function(r) {
    return Io(this, r);
  }, Gu(e, [{
    key: "size",
    get: function() {
      return this.keysAtom_.reportObserved(), this.data_.size;
    }
  }, {
    key: Xp,
    get: function() {
      return "Map";
    }
  }]), e;
}(), Xn = /* @__PURE__ */ wr("ObservableMap", Yp);
function xO(e) {
  if (Ni(e) || Xn(e))
    return e;
  if (Array.isArray(e))
    return new Map(e);
  if (fn(e)) {
    var t = /* @__PURE__ */ new Map();
    for (var n in e)
      t.set(n, e[n]);
    return t;
  } else
    return oe(21, e);
}
var Qp, Jp, NO = {};
Qp = Symbol.iterator;
Jp = Symbol.toStringTag;
var Zp = /* @__PURE__ */ function() {
  function e(n, r, i) {
    r === void 0 && (r = mi), i === void 0 && (i = process.env.NODE_ENV !== "production" ? "ObservableSet@" + kn() : "ObservableSet"), this.name_ = void 0, this[Te] = NO, this.data_ = /* @__PURE__ */ new Set(), this.atom_ = void 0, this.changeListeners_ = void 0, this.interceptors_ = void 0, this.dehancer = void 0, this.enhancer_ = void 0, this.name_ = i, Vt(Set) || oe(22), this.atom_ = dp(this.name_), this.enhancer_ = function(o, a) {
      return r(o, a, i);
    }, n && this.replace(n);
  }
  var t = e.prototype;
  return t.dehanceValue_ = function(r) {
    return this.dehancer !== void 0 ? this.dehancer(r) : r;
  }, t.clear = function() {
    var r = this;
    nr(function() {
      xp(function() {
        for (var i = oi(r.data_.values()), o; !(o = i()).done; ) {
          var a = o.value;
          r.delete(a);
        }
      });
    });
  }, t.forEach = function(r, i) {
    for (var o = oi(this), a; !(a = o()).done; ) {
      var s = a.value;
      r.call(i, s, s, this);
    }
  }, t.add = function(r) {
    var i = this;
    if (yi(this.atom_), Sn(this)) {
      var o = En(this, {
        type: pr,
        object: this,
        newValue: r
      });
      if (!o)
        return this;
    }
    if (!this.has(r)) {
      nr(function() {
        i.data_.add(i.enhancer_(r, void 0)), i.atom_.reportChanged();
      });
      var a = process.env.NODE_ENV !== "production" && Ut(), s = Fn(this), l = s || a ? {
        observableKind: "set",
        debugObjectName: this.name_,
        type: pr,
        object: this,
        newValue: r
      } : null;
      a && process.env.NODE_ENV !== "production" && dn(l), s && Ln(this, l), a && process.env.NODE_ENV !== "production" && vn();
    }
    return this;
  }, t.delete = function(r) {
    var i = this;
    if (Sn(this)) {
      var o = En(this, {
        type: Ya,
        object: this,
        oldValue: r
      });
      if (!o)
        return !1;
    }
    if (this.has(r)) {
      var a = process.env.NODE_ENV !== "production" && Ut(), s = Fn(this), l = s || a ? {
        observableKind: "set",
        debugObjectName: this.name_,
        type: Ya,
        object: this,
        oldValue: r
      } : null;
      return a && process.env.NODE_ENV !== "production" && dn(l), nr(function() {
        i.atom_.reportChanged(), i.data_.delete(r);
      }), s && Ln(this, l), a && process.env.NODE_ENV !== "production" && vn(), !0;
    }
    return !1;
  }, t.has = function(r) {
    return this.atom_.reportObserved(), this.data_.has(this.dehanceValue_(r));
  }, t.entries = function() {
    var r = 0, i = Array.from(this.keys()), o = Array.from(this.values());
    return so({
      next: function() {
        var s = r;
        return r += 1, s < o.length ? {
          value: [i[s], o[s]],
          done: !1
        } : {
          done: !0
        };
      }
    });
  }, t.keys = function() {
    return this.values();
  }, t.values = function() {
    this.atom_.reportObserved();
    var r = this, i = 0, o = Array.from(this.data_.values());
    return so({
      next: function() {
        return i < o.length ? {
          value: r.dehanceValue_(o[i++]),
          done: !1
        } : {
          done: !0
        };
      }
    });
  }, t.replace = function(r) {
    var i = this;
    return Hr(r) && (r = new Set(r)), nr(function() {
      Array.isArray(r) ? (i.clear(), r.forEach(function(o) {
        return i.add(o);
      })) : xo(r) ? (i.clear(), r.forEach(function(o) {
        return i.add(o);
      })) : r != null && oe("Cannot initialize set from " + r);
    }), this;
  }, t.observe_ = function(r, i) {
    return process.env.NODE_ENV !== "production" && i === !0 && oe("`observe` doesn't support fireImmediately=true in combination with sets."), Ao(this, r);
  }, t.intercept_ = function(r) {
    return Io(this, r);
  }, t.toJSON = function() {
    return Array.from(this);
  }, t.toString = function() {
    return "[object ObservableSet]";
  }, t[Qp] = function() {
    return this.values();
  }, Gu(e, [{
    key: "size",
    get: function() {
      return this.atom_.reportObserved(), this.data_.size;
    }
  }, {
    key: Jp,
    get: function() {
      return "Set";
    }
  }]), e;
}(), Hr = /* @__PURE__ */ wr("ObservableSet", Zp), zf = /* @__PURE__ */ Object.create(null), Bf = "remove", nu = /* @__PURE__ */ function() {
  function e(n, r, i, o) {
    r === void 0 && (r = /* @__PURE__ */ new Map()), o === void 0 && (o = gC), this.target_ = void 0, this.values_ = void 0, this.name_ = void 0, this.defaultAnnotation_ = void 0, this.keysAtom_ = void 0, this.changeListeners_ = void 0, this.interceptors_ = void 0, this.proxy_ = void 0, this.isPlainObject_ = void 0, this.appliedAnnotations_ = void 0, this.pendingKeys_ = void 0, this.target_ = n, this.values_ = r, this.name_ = i, this.defaultAnnotation_ = o, this.keysAtom_ = new Po(process.env.NODE_ENV !== "production" ? this.name_ + ".keys" : "ObservableObject.keys"), this.isPlainObject_ = fn(this.target_), process.env.NODE_ENV !== "production" && !rm(this.defaultAnnotation_) && oe("defaultAnnotation must be valid annotation"), process.env.NODE_ENV !== "production" && (this.appliedAnnotations_ = {});
  }
  var t = e.prototype;
  return t.getObservablePropValue_ = function(r) {
    return this.values_.get(r).get();
  }, t.setObservablePropValue_ = function(r, i) {
    var o = this.values_.get(r);
    if (o instanceof bi)
      return o.set(i), !0;
    if (Sn(this)) {
      var a = En(this, {
        type: An,
        object: this.proxy_ || this.target_,
        name: r,
        newValue: i
      });
      if (!a)
        return null;
      i = a.newValue;
    }
    if (i = o.prepareNewValue_(i), i !== z.UNCHANGED) {
      var s = Fn(this), l = process.env.NODE_ENV !== "production" && Ut(), u = s || l ? {
        type: An,
        observableKind: "object",
        debugObjectName: this.name_,
        object: this.proxy_ || this.target_,
        oldValue: o.value_,
        name: r,
        newValue: i
      } : null;
      process.env.NODE_ENV !== "production" && l && dn(u), o.setNewValue_(i), s && Ln(this, u), process.env.NODE_ENV !== "production" && l && vn();
    }
    return !0;
  }, t.get_ = function(r) {
    return z.trackingDerivation && !Cn(this.target_, r) && this.has_(r), this.target_[r];
  }, t.set_ = function(r, i, o) {
    return o === void 0 && (o = !1), Cn(this.target_, r) ? this.values_.has(r) ? this.setObservablePropValue_(r, i) : o ? Reflect.set(this.target_, r, i) : (this.target_[r] = i, !0) : this.extend_(r, {
      value: i,
      enumerable: !0,
      writable: !0,
      configurable: !0
    }, this.defaultAnnotation_, o);
  }, t.has_ = function(r) {
    if (!z.trackingDerivation)
      return r in this.target_;
    this.pendingKeys_ || (this.pendingKeys_ = /* @__PURE__ */ new Map());
    var i = this.pendingKeys_.get(r);
    return i || (i = new Dr(r in this.target_, bs, process.env.NODE_ENV !== "production" ? this.name_ + "." + Ql(r) + "?" : "ObservableObject.key?", !1), this.pendingKeys_.set(r, i)), i.get();
  }, t.make_ = function(r, i) {
    if (i === !0 && (i = this.defaultAnnotation_), i !== !1) {
      if (Kf(this, i, r), !(r in this.target_)) {
        var o;
        if ((o = this.target_[Qt]) != null && o[r])
          return;
        oe(1, i.annotationType_, this.name_ + "." + r.toString());
      }
      for (var a = this.target_; a && a !== Co; ) {
        var s = Ha(a, r);
        if (s) {
          var l = i.make_(this, r, s, a);
          if (l === 0)
            return;
          if (l === 1)
            break;
        }
        a = Object.getPrototypeOf(a);
      }
      Wf(this, i, r);
    }
  }, t.extend_ = function(r, i, o, a) {
    if (a === void 0 && (a = !1), o === !0 && (o = this.defaultAnnotation_), o === !1)
      return this.defineProperty_(r, i, a);
    Kf(this, o, r);
    var s = o.extend_(this, r, i, a);
    return s && Wf(this, o, r), s;
  }, t.defineProperty_ = function(r, i, o) {
    o === void 0 && (o = !1);
    try {
      en();
      var a = this.delete_(r);
      if (!a)
        return a;
      if (Sn(this)) {
        var s = En(this, {
          object: this.proxy_ || this.target_,
          name: r,
          type: pr,
          newValue: i.value
        });
        if (!s)
          return null;
        var l = s.newValue;
        i.value !== l && (i = yr({}, i, {
          value: l
        }));
      }
      if (o) {
        if (!Reflect.defineProperty(this.target_, r, i))
          return !1;
      } else
        Wn(this.target_, r, i);
      this.notifyPropertyAddition_(r, i.value);
    } finally {
      tn();
    }
    return !0;
  }, t.defineObservableProperty_ = function(r, i, o, a) {
    a === void 0 && (a = !1);
    try {
      en();
      var s = this.delete_(r);
      if (!s)
        return s;
      if (Sn(this)) {
        var l = En(this, {
          object: this.proxy_ || this.target_,
          name: r,
          type: pr,
          newValue: i
        });
        if (!l)
          return null;
        i = l.newValue;
      }
      var u = Uf(r), c = {
        configurable: z.safeDescriptors ? this.isPlainObject_ : !0,
        enumerable: !0,
        get: u.get,
        set: u.set
      };
      if (a) {
        if (!Reflect.defineProperty(this.target_, r, c))
          return !1;
      } else
        Wn(this.target_, r, c);
      var d = new Dr(i, o, process.env.NODE_ENV !== "production" ? this.name_ + "." + r.toString() : "ObservableObject.key", !1);
      this.values_.set(r, d), this.notifyPropertyAddition_(r, d.value_);
    } finally {
      tn();
    }
    return !0;
  }, t.defineComputedProperty_ = function(r, i, o) {
    o === void 0 && (o = !1);
    try {
      en();
      var a = this.delete_(r);
      if (!a)
        return a;
      if (Sn(this)) {
        var s = En(this, {
          object: this.proxy_ || this.target_,
          name: r,
          type: pr,
          newValue: void 0
        });
        if (!s)
          return null;
      }
      i.name || (i.name = process.env.NODE_ENV !== "production" ? this.name_ + "." + r.toString() : "ObservableObject.key"), i.context = this.proxy_ || this.target_;
      var l = Uf(r), u = {
        configurable: z.safeDescriptors ? this.isPlainObject_ : !0,
        enumerable: !1,
        get: l.get,
        set: l.set
      };
      if (o) {
        if (!Reflect.defineProperty(this.target_, r, u))
          return !1;
      } else
        Wn(this.target_, r, u);
      this.values_.set(r, new bi(i)), this.notifyPropertyAddition_(r, void 0);
    } finally {
      tn();
    }
    return !0;
  }, t.delete_ = function(r, i) {
    if (i === void 0 && (i = !1), !Cn(this.target_, r))
      return !0;
    if (Sn(this)) {
      var o = En(this, {
        object: this.proxy_ || this.target_,
        name: r,
        type: Bf
      });
      if (!o)
        return null;
    }
    try {
      var a, s;
      en();
      var l = Fn(this), u = process.env.NODE_ENV !== "production" && Ut(), c = this.values_.get(r), d = void 0;
      if (!c && (l || u)) {
        var v;
        d = (v = Ha(this.target_, r)) == null ? void 0 : v.value;
      }
      if (i) {
        if (!Reflect.deleteProperty(this.target_, r))
          return !1;
      } else
        delete this.target_[r];
      if (process.env.NODE_ENV !== "production" && delete this.appliedAnnotations_[r], c && (this.values_.delete(r), c instanceof Dr && (d = c.value_), $p(c)), this.keysAtom_.reportChanged(), (a = this.pendingKeys_) == null || (s = a.get(r)) == null || s.set(r in this.target_), l || u) {
        var h = {
          type: Bf,
          observableKind: "object",
          object: this.proxy_ || this.target_,
          debugObjectName: this.name_,
          oldValue: d,
          name: r
        };
        process.env.NODE_ENV !== "production" && u && dn(h), l && Ln(this, h), process.env.NODE_ENV !== "production" && u && vn();
      }
    } finally {
      tn();
    }
    return !0;
  }, t.observe_ = function(r, i) {
    return process.env.NODE_ENV !== "production" && i === !0 && oe("`observe` doesn't support the fire immediately property for observable objects."), Ao(this, r);
  }, t.intercept_ = function(r) {
    return Io(this, r);
  }, t.notifyPropertyAddition_ = function(r, i) {
    var o, a, s = Fn(this), l = process.env.NODE_ENV !== "production" && Ut();
    if (s || l) {
      var u = s || l ? {
        type: pr,
        observableKind: "object",
        debugObjectName: this.name_,
        object: this.proxy_ || this.target_,
        name: r,
        newValue: i
      } : null;
      process.env.NODE_ENV !== "production" && l && dn(u), s && Ln(this, u), process.env.NODE_ENV !== "production" && l && vn();
    }
    (o = this.pendingKeys_) == null || (a = o.get(r)) == null || a.set(!0), this.keysAtom_.reportChanged();
  }, t.ownKeys_ = function() {
    return this.keysAtom_.reportObserved(), pi(this.target_);
  }, t.keys_ = function() {
    return this.keysAtom_.reportObserved(), Object.keys(this.target_);
  }, e;
}();
function Do(e, t) {
  var n;
  if (process.env.NODE_ENV !== "production" && t && _r(e) && oe("Options can't be provided for already observable objects."), Cn(e, Te))
    return process.env.NODE_ENV !== "production" && !(ec(e) instanceof nu) && oe("Cannot convert '" + Qa(e) + `' into observable object:
The target is already observable of different type.
Extending builtins is not supported.`), e;
  process.env.NODE_ENV !== "production" && !Object.isExtensible(e) && oe("Cannot make the designated object observable; it is not extensible");
  var r = (n = t?.name) != null ? n : process.env.NODE_ENV !== "production" ? (fn(e) ? "ObservableObject" : e.constructor.name) + "@" + kn() : "ObservableObject", i = new nu(e, /* @__PURE__ */ new Map(), String(r), NC(t));
  return Oo(e, Te, i), e;
}
var PO = /* @__PURE__ */ wr("ObservableObjectAdministration", nu);
function Uf(e) {
  return zf[e] || (zf[e] = {
    get: function() {
      return this[Te].getObservablePropValue_(e);
    },
    set: function(n) {
      return this[Te].setObservablePropValue_(e, n);
    }
  });
}
function _r(e) {
  return gs(e) ? PO(e[Te]) : !1;
}
function Wf(e, t, n) {
  var r;
  process.env.NODE_ENV !== "production" && (e.appliedAnnotations_[n] = t), (r = e.target_[Qt]) == null || delete r[n];
}
function Kf(e, t, n) {
  if (process.env.NODE_ENV !== "production" && !rm(t) && oe("Cannot annotate '" + e.name_ + "." + n.toString() + "': Invalid annotation."), process.env.NODE_ENV !== "production" && !Ua(t) && Cn(e.appliedAnnotations_, n)) {
    var r = e.name_ + "." + n.toString(), i = e.appliedAnnotations_[n].annotationType_, o = t.annotationType_;
    oe("Cannot apply '" + o + "' to '" + r + "':" + (`
The field is already annotated with '` + i + "'.") + `
Re-annotating fields is not allowed.
Use 'override' annotation for methods overridden by subclass.`);
  }
}
var MO = /* @__PURE__ */ tm(0), Zs = 0, em = function() {
};
function RO(e, t) {
  Object.setPrototypeOf ? Object.setPrototypeOf(e.prototype, t) : e.prototype.__proto__ !== void 0 ? e.prototype.__proto__ = t : e.prototype = t;
}
RO(em, Array.prototype);
var Zu = /* @__PURE__ */ function(e, t, n) {
  fp(r, e);
  function r(o, a, s, l) {
    var u;
    s === void 0 && (s = process.env.NODE_ENV !== "production" ? "ObservableArray@" + kn() : "ObservableArray"), l === void 0 && (l = !1), u = e.call(this) || this;
    var c = new Ju(s, a, l, !0);
    if (c.proxy_ = ma(u), lp(ma(u), Te, c), o && o.length) {
      var d = Ro(!0);
      u.spliceWithArray(0, 0, o), To(d);
    }
    return Object.defineProperty(ma(u), "0", MO), u;
  }
  var i = r.prototype;
  return i.concat = function() {
    this[Te].atom_.reportObserved();
    for (var a = arguments.length, s = new Array(a), l = 0; l < a; l++)
      s[l] = arguments[l];
    return Array.prototype.concat.apply(
      this.slice(),
      //@ts-ignore
      s.map(function(u) {
        return Ri(u) ? u.slice() : u;
      })
    );
  }, i[n] = function() {
    var o = this, a = 0;
    return so({
      next: function() {
        return a < o.length ? {
          value: o[a++],
          done: !1
        } : {
          done: !0,
          value: void 0
        };
      }
    });
  }, Gu(r, [{
    key: "length",
    get: function() {
      return this[Te].getArrayLength_();
    },
    set: function(a) {
      this[Te].setArrayLength_(a);
    }
  }, {
    key: t,
    get: function() {
      return "Array";
    }
  }]), r;
}(em, Symbol.toStringTag, Symbol.iterator);
Object.entries(Xa).forEach(function(e) {
  var t = e[0], n = e[1];
  t !== "concat" && Oo(Zu.prototype, t, n);
});
function tm(e) {
  return {
    enumerable: !1,
    configurable: !0,
    get: function() {
      return this[Te].get_(e);
    },
    set: function(n) {
      this[Te].set_(e, n);
    }
  };
}
function TO(e) {
  Wn(Zu.prototype, "" + e, tm(e));
}
function nm(e) {
  if (e > Zs) {
    for (var t = Zs; t < e + 100; t++)
      TO(t);
    Zs = e;
  }
}
nm(1e3);
function $O(e, t, n) {
  return new Zu(e, t, n);
}
function Sr(e, t) {
  if (typeof e == "object" && e !== null) {
    if (Ri(e))
      return t !== void 0 && oe(23), e[Te].atom_;
    if (Hr(e))
      return e.atom_;
    if (Xn(e)) {
      if (t === void 0)
        return e.keysAtom_;
      var n = e.data_.get(t) || e.hasMap_.get(t);
      return n || oe(25, t, Qa(e)), n;
    }
    if (_r(e)) {
      if (!t)
        return oe(26);
      var r = e[Te].values_.get(t);
      return r || oe(27, t, Qa(e)), r;
    }
    if (qu(e) || $o(e) || Ga(e))
      return e;
  } else if (Vt(e) && Ga(e[Te]))
    return e[Te];
  oe(28);
}
function ec(e, t) {
  if (e || oe(29), t !== void 0)
    return ec(Sr(e, t));
  if (qu(e) || $o(e) || Ga(e) || Xn(e) || Hr(e))
    return e;
  if (e[Te])
    return e[Te];
  oe(24, e);
}
function Qa(e, t) {
  var n;
  if (t !== void 0)
    n = Sr(e, t);
  else {
    if (Ss(e))
      return e.name;
    _r(e) || Xn(e) || Hr(e) ? n = ec(e) : n = Sr(e);
  }
  return n.name_;
}
var Gf = Co.toString;
function tc(e, t, n) {
  return n === void 0 && (n = -1), ru(e, t, n);
}
function ru(e, t, n, r, i) {
  if (e === t)
    return e !== 0 || 1 / e === 1 / t;
  if (e == null || t == null)
    return !1;
  if (e !== e)
    return t !== t;
  var o = typeof e;
  if (o !== "function" && o !== "object" && typeof t != "object")
    return !1;
  var a = Gf.call(e);
  if (a !== Gf.call(t))
    return !1;
  switch (a) {
    case "[object RegExp]":
    case "[object String]":
      return "" + e == "" + t;
    case "[object Number]":
      return +e != +e ? +t != +t : +e == 0 ? 1 / +e === 1 / t : +e == +t;
    case "[object Date]":
    case "[object Boolean]":
      return +e == +t;
    case "[object Symbol]":
      return typeof Symbol < "u" && Symbol.valueOf.call(e) === Symbol.valueOf.call(t);
    case "[object Map]":
    case "[object Set]":
      n >= 0 && n++;
      break;
  }
  e = qf(e), t = qf(t);
  var s = a === "[object Array]";
  if (!s) {
    if (typeof e != "object" || typeof t != "object")
      return !1;
    var l = e.constructor, u = t.constructor;
    if (l !== u && !(Vt(l) && l instanceof l && Vt(u) && u instanceof u) && "constructor" in e && "constructor" in t)
      return !1;
  }
  if (n === 0)
    return !1;
  n < 0 && (n = -1), r = r || [], i = i || [];
  for (var c = r.length; c--; )
    if (r[c] === e)
      return i[c] === t;
  if (r.push(e), i.push(t), s) {
    if (c = e.length, c !== t.length)
      return !1;
    for (; c--; )
      if (!ru(e[c], t[c], n - 1, r, i))
        return !1;
  } else {
    var d = Object.keys(e), v;
    if (c = d.length, Object.keys(t).length !== c)
      return !1;
    for (; c--; )
      if (v = d[c], !(Cn(t, v) && ru(e[v], t[v], n - 1, r, i)))
        return !1;
  }
  return r.pop(), i.pop(), !0;
}
function qf(e) {
  return Ri(e) ? e.slice() : Ni(e) || Xn(e) || xo(e) || Hr(e) ? Array.from(e.entries()) : e;
}
function so(e) {
  return e[Symbol.iterator] = IO, e;
}
function IO() {
  return this;
}
function rm(e) {
  return (
    // Can be function
    e instanceof Object && typeof e.annotationType_ == "string" && Vt(e.make_) && Vt(e.extend_)
  );
}
["Symbol", "Map", "Set"].forEach(function(e) {
  var t = Wu();
  typeof t[e] > "u" && oe("MobX requires global '" + e + "' to be available or polyfilled");
});
typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ == "object" && __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
  spy: YC,
  extras: {
    getDebugName: Qa
  },
  $mobx: Te
});
if (!rt)
  throw new Error("mobx-react-lite requires React with Hooks support");
if (!_O)
  throw new Error("mobx-react-lite@3 requires mobx at least version 6 to be available");
function AO(e) {
  e();
}
function DO(e) {
  e || (e = AO, process.env.NODE_ENV !== "production" && console.warn("[MobX] Failed to get unstable_batched updates from react-dom / react-native")), cO({ reactionScheduler: e });
}
function FO(e) {
  return Bp(e);
}
var LO = 1e4, VO = 1e4, kO = (
  /** @class */
  function() {
    function e(t) {
      var n = this;
      Object.defineProperty(this, "finalize", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
      }), Object.defineProperty(this, "registrations", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /* @__PURE__ */ new Map()
      }), Object.defineProperty(this, "sweepTimeout", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "sweep", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: function(r) {
          r === void 0 && (r = LO), clearTimeout(n.sweepTimeout), n.sweepTimeout = void 0;
          var i = Date.now();
          n.registrations.forEach(function(o, a) {
            i - o.registeredAt >= r && (n.finalize(o.value), n.registrations.delete(a));
          }), n.registrations.size > 0 && n.scheduleSweep();
        }
      }), Object.defineProperty(this, "finalizeAllImmediately", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: function() {
          n.sweep(0);
        }
      });
    }
    return Object.defineProperty(e.prototype, "register", {
      enumerable: !1,
      configurable: !0,
      writable: !0,
      value: function(t, n, r) {
        this.registrations.set(r, {
          value: n,
          registeredAt: Date.now()
        }), this.scheduleSweep();
      }
    }), Object.defineProperty(e.prototype, "unregister", {
      enumerable: !1,
      configurable: !0,
      writable: !0,
      value: function(t) {
        this.registrations.delete(t);
      }
    }), Object.defineProperty(e.prototype, "scheduleSweep", {
      enumerable: !1,
      configurable: !0,
      writable: !0,
      value: function() {
        this.sweepTimeout === void 0 && (this.sweepTimeout = setTimeout(this.sweep, VO));
      }
    }), e;
  }()
), jO = typeof FinalizationRegistry < "u" ? FinalizationRegistry : kO, iu = new jO(function(e) {
  var t;
  (t = e.reaction) === null || t === void 0 || t.dispose(), e.reaction = null;
}), Xf = globalThis && globalThis.__read || function(e, t) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n)
    return e;
  var r = n.call(e), i, o = [], a;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = r.next()).done; )
      o.push(i.value);
  } catch (s) {
    a = { error: s };
  } finally {
    try {
      i && !i.done && (n = r.return) && n.call(r);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return o;
};
function Yf(e) {
  return "observer".concat(e);
}
var HO = (
  /** @class */
  function() {
    function e() {
    }
    return e;
  }()
);
function zO() {
  return new HO();
}
function BO(e, t) {
  t === void 0 && (t = "observed");
  var n = Xf(Xe.useState(zO), 1), r = n[0], i = Xf(Xe.useState(), 2), o = i[1], a = function() {
    return o([]);
  }, s = Xe.useRef(null);
  s.current || (s.current = {
    reaction: null,
    mounted: !1,
    changedBeforeMount: !1
  });
  var l = s.current;
  l.reaction || (l.reaction = new io(Yf(t), function() {
    l.mounted ? a() : l.changedBeforeMount = !0;
  }), iu.register(r, l, l)), Xe.useDebugValue(l.reaction, FO), Xe.useEffect(function() {
    return iu.unregister(l), l.mounted = !0, l.reaction ? l.changedBeforeMount && (l.changedBeforeMount = !1, a()) : (l.reaction = new io(Yf(t), function() {
      a();
    }), a()), function() {
      l.reaction.dispose(), l.reaction = null, l.mounted = !1, l.changedBeforeMount = !1;
    };
  }, []);
  var u, c;
  if (l.reaction.track(function() {
    try {
      u = e();
    } catch (d) {
      c = d;
    }
  }), c)
    throw c;
  return u;
}
var Qf = !0, im = typeof Symbol == "function" && Symbol.for, Jf = im ? Symbol.for("react.forward_ref") : typeof wa == "function" && wa(function(e) {
  return null;
}).$$typeof, Zf = im ? Symbol.for("react.memo") : typeof ci == "function" && ci(function(e) {
  return null;
}).$$typeof;
function Es(e, t) {
  var n;
  if (process.env.NODE_ENV !== "production" && Qf && t && (Qf = !1, console.warn("[mobx-react-lite] `observer(fn, { forwardRef: true })` is deprecated, use `observer(React.forwardRef(fn))`")), Zf && e.$$typeof === Zf)
    throw new Error("[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.");
  var r = (n = t?.forwardRef) !== null && n !== void 0 ? n : !1, i = e, o = e.displayName || e.name;
  if (Jf && e.$$typeof === Jf && (r = !0, i = e.render, typeof i != "function"))
    throw new Error("[mobx-react-lite] `render` property of ForwardRef was not a function");
  var a = function(s, l) {
    return BO(function() {
      return i(s, l);
    }, o);
  };
  return o !== "" && (a.displayName = o), e.contextTypes && (a.contextTypes = e.contextTypes), r && (a = wa(a)), a = ci(a), WO(e, a), process.env.NODE_ENV !== "production" && Object.defineProperty(a, "contextTypes", {
    set: function() {
      var s;
      throw new Error("[mobx-react-lite] `".concat(this.displayName || ((s = this.type) === null || s === void 0 ? void 0 : s.displayName) || "Component", ".contextTypes` must be set before applying `observer`."));
    }
  }), a;
}
var UO = {
  $$typeof: !0,
  render: !0,
  compare: !0,
  type: !0,
  // Don't redefine `displayName`,
  // it's defined as getter-setter pair on `memo` (see #3192).
  displayName: !0
};
function WO(e, t) {
  Object.keys(e).forEach(function(n) {
    UO[n] || Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
  });
}
process.env.NODE_ENV;
globalThis && globalThis.__read;
var el;
DO(Rd);
el = iu.finalizeAllImmediately;
const Fo = () => Gn(xs).actions, Lo = () => Gn(xs), nc = () => Gn(xs).getters, ou = [
  "vs-dark",
  "Monokai",
  "Dracula",
  "Dreamweaver",
  "GitHub",
  "Nord",
  "Twilight",
  "IDLE",
  "Eiffel",
  "Tomorrow"
], rc = {
  js: "javascript",
  ts: "typescript",
  tsx: "typescript",
  jsx: "typescript",
  html: "html",
  htm: "html",
  txt: "text",
  css: "css"
}, om = 9, KO = () => [...new Set(Object.values(rc))].map((t) => ({
  value: t,
  label: t
})), GO = Es(() => {
  const e = KO(), t = nc(), n = t.getActiveLanguage(), r = t.getActiveTab();
  return /* @__PURE__ */ Xt(
    Lh,
    {
      size: "middle",
      onChange: (o) => {
        r.lang = o;
      },
      value: n,
      style: { width: 200 },
      options: e
    }
  );
}), qO = (e) => e.map((t) => ({
  label: t.getLabel(),
  key: t.getKeyId()
})), XO = Es(() => {
  const { activeKey: e, content: t } = Lo(), n = Fo(), r = qO(t);
  return /* @__PURE__ */ Xt(
    Uu,
    {
      type: "editable-card",
      onChange: (a) => {
        n.tabs.changeActiveTab(a);
      },
      activeKey: e,
      onEdit: (a, s) => {
        s === "add" ? n.tabs.createTab() : n.tabs.removeTab(a);
      },
      items: Kp(r),
      hideAdd: t.length >= om
    }
  );
}), YO = {
  EDITOR_THEME: "EDITOR_THEME",
  EDITOR_CONTENT_DATA: "EDITOR_CONTENT_DATA"
}, am = () => {
  const [e, t] = rt([]);
  return {
    on: (n) => {
      Object.entries(n).forEach(([r, i]) => {
        const o = (a) => {
          if (a.altKey && a.key === r.toLowerCase())
            return a.preventDefault(), i?.(), !1;
        };
        t([...e, o]), document.addEventListener("keydown", o);
      });
    },
    clear: () => {
      e.forEach((n) => {
        document.removeEventListener("keydown", n);
      });
    }
  };
}, QO = (e = !1) => {
  const [t, n] = rt(e);
  return {
    off: () => n(!1),
    on: () => n(!0),
    toggle: () => n(!t),
    val: t
  };
}, JO = (e, t) => {
  const n = ae();
  return (...r) => {
    n.current && clearTimeout(n.current), n.current = setTimeout(() => {
      e(...r);
    }, t);
  };
}, ZO = ({ when: e, children: t }) => e ? t : null;
var ic, Se, sm, Rr, ed, lm, au, um = {}, cm = [], ex = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, ws = Array.isArray;
function mr(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function fm(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function td(e, t, n) {
  var r, i, o, a = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? i = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? ic.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return _a(e, a, r, i, null);
}
function _a(e, t, n, r, i) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++sm };
  return i == null && Se.vnode != null && Se.vnode(o), o;
}
function lo(e) {
  return e.children;
}
function ir(e, t) {
  this.props = e, this.context = t;
}
function uo(e, t) {
  if (t == null)
    return e.__ ? uo(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? uo(e) : null;
}
function dm(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return dm(e);
  }
}
function nd(e) {
  (!e.__d && (e.__d = !0) && Rr.push(e) && !Ja.__r++ || ed !== Se.debounceRendering) && ((ed = Se.debounceRendering) || lm)(Ja);
}
function Ja() {
  var e, t, n, r, i, o, a, s;
  for (Rr.sort(au); e = Rr.shift(); )
    e.__d && (t = Rr.length, r = void 0, i = void 0, a = (o = (n = e).__v).__e, (s = n.__P) && (r = [], (i = mr({}, o)).__v = o.__v + 1, gm(s, o, i, n.__n, s.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a ?? uo(o), o.__h), nx(r, o), o.__e != a && dm(o)), Rr.length > t && Rr.sort(au));
  Ja.__r = 0;
}
function vm(e, t, n, r, i, o, a, s, l, u) {
  var c, d, v, h, p, m, b, g = r && r.__k || cm, y = g.length;
  for (n.__k = [], c = 0; c < t.length; c++)
    if ((h = n.__k[c] = (h = t[c]) == null || typeof h == "boolean" || typeof h == "function" ? null : typeof h == "string" || typeof h == "number" || typeof h == "bigint" ? _a(null, h, null, null, h) : ws(h) ? _a(lo, { children: h }, null, null, null) : h.__b > 0 ? _a(h.type, h.props, h.key, h.ref ? h.ref : null, h.__v) : h) != null) {
      if (h.__ = n, h.__b = n.__b + 1, (v = g[c]) === null || v && h.key == v.key && h.type === v.type)
        g[c] = void 0;
      else
        for (d = 0; d < y; d++) {
          if ((v = g[d]) && h.key == v.key && h.type === v.type) {
            g[d] = void 0;
            break;
          }
          v = null;
        }
      gm(e, h, v = v || um, i, o, a, s, l, u), p = h.__e, (d = h.ref) && v.ref != d && (b || (b = []), v.ref && b.push(v.ref, null, h), b.push(d, h.__c || p, h)), p != null ? (m == null && (m = p), typeof h.type == "function" && h.__k === v.__k ? h.__d = l = hm(h, l, e) : l = pm(e, h, v, g, p, l), typeof n.type == "function" && (n.__d = l)) : l && v.__e == l && l.parentNode != e && (l = uo(v));
    }
  for (n.__e = m, c = y; c--; )
    g[c] != null && (typeof n.type == "function" && g[c].__e != null && g[c].__e == n.__d && (n.__d = mm(r).nextSibling), ym(g[c], g[c]));
  if (b)
    for (c = 0; c < b.length; c++)
      bm(b[c], b[++c], b[++c]);
}
function hm(e, t, n) {
  for (var r, i = e.__k, o = 0; i && o < i.length; o++)
    (r = i[o]) && (r.__ = e, t = typeof r.type == "function" ? hm(r, t, n) : pm(n, r, r, i, r.__e, t));
  return t;
}
function Za(e, t) {
  return t = t || [], e == null || typeof e == "boolean" || (ws(e) ? e.some(function(n) {
    Za(n, t);
  }) : t.push(e)), t;
}
function pm(e, t, n, r, i, o) {
  var a, s, l;
  if (t.__d !== void 0)
    a = t.__d, t.__d = void 0;
  else if (n == null || i != o || i.parentNode == null)
    e:
      if (o == null || o.parentNode !== e)
        e.appendChild(i), a = null;
      else {
        for (s = o, l = 0; (s = s.nextSibling) && l < r.length; l += 1)
          if (s == i)
            break e;
        e.insertBefore(i, o), a = o;
      }
  return a !== void 0 ? a : i.nextSibling;
}
function mm(e) {
  var t, n, r;
  if (e.type == null || typeof e.type == "string")
    return e.__e;
  if (e.__k) {
    for (t = e.__k.length - 1; t >= 0; t--)
      if ((n = e.__k[t]) && (r = mm(n)))
        return r;
  }
  return null;
}
function tx(e, t, n, r, i) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || es(e, o, null, n[o], r);
  for (o in t)
    i && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || es(e, o, t[o], n[o], r);
}
function rd(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || ex.test(t) ? n : n + "px";
}
function es(e, t, n, r, i) {
  var o;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof r == "string" && (e.style.cssText = r = ""), r)
          for (t in r)
            n && t in n || rd(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || rd(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? od : id, o) : e.removeEventListener(t, o ? od : id, o);
    else if (t !== "dangerouslySetInnerHTML") {
      if (i)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "width" && t !== "height" && t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t !== "rowSpan" && t !== "colSpan" && t in e)
        try {
          e[t] = n ?? "";
          break e;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && t[4] !== "-" ? e.removeAttribute(t) : e.setAttribute(t, n));
    }
}
function id(e) {
  return this.l[e.type + !1](Se.event ? Se.event(e) : e);
}
function od(e) {
  return this.l[e.type + !0](Se.event ? Se.event(e) : e);
}
function gm(e, t, n, r, i, o, a, s, l) {
  var u, c, d, v, h, p, m, b, g, y, S, C, _, E, x, I = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (l = n.__h, s = t.__e = n.__e, t.__h = null, o = [s]), (u = Se.__b) && u(t);
  try {
    e:
      if (typeof I == "function") {
        if (b = t.props, g = (u = I.contextType) && r[u.__c], y = u ? g ? g.props.value : u.__ : r, n.__c ? m = (c = t.__c = n.__c).__ = c.__E : ("prototype" in I && I.prototype.render ? t.__c = c = new I(b, y) : (t.__c = c = new ir(b, y), c.constructor = I, c.render = ix), g && g.sub(c), c.props = b, c.state || (c.state = {}), c.context = y, c.__n = r, d = c.__d = !0, c.__h = [], c._sb = []), c.__s == null && (c.__s = c.state), I.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = mr({}, c.__s)), mr(c.__s, I.getDerivedStateFromProps(b, c.__s))), v = c.props, h = c.state, c.__v = t, d)
          I.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), c.componentDidMount != null && c.__h.push(c.componentDidMount);
        else {
          if (I.getDerivedStateFromProps == null && b !== v && c.componentWillReceiveProps != null && c.componentWillReceiveProps(b, y), !c.__e && c.shouldComponentUpdate != null && c.shouldComponentUpdate(b, c.__s, y) === !1 || t.__v === n.__v) {
            for (t.__v !== n.__v && (c.props = b, c.state = c.__s, c.__d = !1), c.__e = !1, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(R) {
              R && (R.__ = t);
            }), S = 0; S < c._sb.length; S++)
              c.__h.push(c._sb[S]);
            c._sb = [], c.__h.length && a.push(c);
            break e;
          }
          c.componentWillUpdate != null && c.componentWillUpdate(b, c.__s, y), c.componentDidUpdate != null && c.__h.push(function() {
            c.componentDidUpdate(v, h, p);
          });
        }
        if (c.context = y, c.props = b, c.__P = e, C = Se.__r, _ = 0, "prototype" in I && I.prototype.render) {
          for (c.state = c.__s, c.__d = !1, C && C(t), u = c.render(c.props, c.state, c.context), E = 0; E < c._sb.length; E++)
            c.__h.push(c._sb[E]);
          c._sb = [];
        } else
          do
            c.__d = !1, C && C(t), u = c.render(c.props, c.state, c.context), c.state = c.__s;
          while (c.__d && ++_ < 25);
        c.state = c.__s, c.getChildContext != null && (r = mr(mr({}, r), c.getChildContext())), d || c.getSnapshotBeforeUpdate == null || (p = c.getSnapshotBeforeUpdate(v, h)), vm(e, ws(x = u != null && u.type === lo && u.key == null ? u.props.children : u) ? x : [x], t, n, r, i, o, a, s, l), c.base = t.__e, t.__h = null, c.__h.length && a.push(c), m && (c.__E = c.__ = null), c.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = rx(n.__e, t, n, r, i, o, a, l);
    (u = Se.diffed) && u(t);
  } catch (R) {
    t.__v = null, (l || o != null) && (t.__e = s, t.__h = !!l, o[o.indexOf(s)] = null), Se.__e(R, t, n);
  }
}
function nx(e, t) {
  Se.__c && Se.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(r) {
        r.call(n);
      });
    } catch (r) {
      Se.__e(r, n.__v);
    }
  });
}
function rx(e, t, n, r, i, o, a, s) {
  var l, u, c, d = n.props, v = t.props, h = t.type, p = 0;
  if (h === "svg" && (i = !0), o != null) {
    for (; p < o.length; p++)
      if ((l = o[p]) && "setAttribute" in l == !!h && (h ? l.localName === h : l.nodeType === 3)) {
        e = l, o[p] = null;
        break;
      }
  }
  if (e == null) {
    if (h === null)
      return document.createTextNode(v);
    e = i ? document.createElementNS("http://www.w3.org/2000/svg", h) : document.createElement(h, v.is && v), o = null, s = !1;
  }
  if (h === null)
    d === v || s && e.data === v || (e.data = v);
  else {
    if (o = o && ic.call(e.childNodes), u = (d = n.props || um).dangerouslySetInnerHTML, c = v.dangerouslySetInnerHTML, !s) {
      if (o != null)
        for (d = {}, p = 0; p < e.attributes.length; p++)
          d[e.attributes[p].name] = e.attributes[p].value;
      (c || u) && (c && (u && c.__html == u.__html || c.__html === e.innerHTML) || (e.innerHTML = c && c.__html || ""));
    }
    if (tx(e, v, d, i, s), c)
      t.__k = [];
    else if (vm(e, ws(p = t.props.children) ? p : [p], t, n, r, i && h !== "foreignObject", o, a, o ? o[0] : n.__k && uo(n, 0), s), o != null)
      for (p = o.length; p--; )
        o[p] != null && fm(o[p]);
    s || ("value" in v && (p = v.value) !== void 0 && (p !== e.value || h === "progress" && !p || h === "option" && p !== d.value) && es(e, "value", p, d.value, !1), "checked" in v && (p = v.checked) !== void 0 && p !== e.checked && es(e, "checked", p, d.checked, !1));
  }
  return e;
}
function bm(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    Se.__e(r, n);
  }
}
function ym(e, t, n) {
  var r, i;
  if (Se.unmount && Se.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || bm(r, null, t)), (r = e.__c) != null) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (o) {
        Se.__e(o, t);
      }
    r.base = r.__P = null, e.__c = void 0;
  }
  if (r = e.__k)
    for (i = 0; i < r.length; i++)
      r[i] && ym(r[i], t, n || typeof e.type != "function");
  n || e.__e == null || fm(e.__e), e.__ = e.__e = e.__d = void 0;
}
function ix(e, t, n) {
  return this.constructor(e, n);
}
ic = cm.slice, Se = { __e: function(e, t, n, r) {
  for (var i, o, a; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((o = i.constructor) && o.getDerivedStateFromError != null && (i.setState(o.getDerivedStateFromError(e)), a = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, r || {}), a = i.__d), a)
          return i.__E = i;
      } catch (s) {
        e = s;
      }
  throw e;
} }, sm = 0, ir.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = mr({}, this.state), typeof e == "function" && (e = e(mr({}, n), this.props)), e && mr(n, e), e != null && this.__v && (t && this._sb.push(t), nd(this));
}, ir.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), nd(this));
}, ir.prototype.render = lo, Rr = [], lm = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, au = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, Ja.__r = 0;
var co, Ct, tl, ad, su = 0, _m = [], Sa = [], sd = Se.__b, ld = Se.__r, ud = Se.diffed, cd = Se.__c, fd = Se.unmount;
function oc(e, t) {
  Se.__h && Se.__h(Ct, e, su || t), su = 0;
  var n = Ct.__H || (Ct.__H = { __: [], __h: [] });
  return e >= n.__.length && n.__.push({ __V: Sa }), n.__[e];
}
function ox(e) {
  return su = 1, ax(Sm, e);
}
function ax(e, t, n) {
  var r = oc(co++, 2);
  if (r.t = e, !r.__c && (r.__ = [n ? n(t) : Sm(void 0, t), function(s) {
    var l = r.__N ? r.__N[0] : r.__[0], u = r.t(l, s);
    l !== u && (r.__N = [u, r.__[1]], r.__c.setState({}));
  }], r.__c = Ct, !Ct.u)) {
    var i = function(s, l, u) {
      if (!r.__c.__H)
        return !0;
      var c = r.__c.__H.__.filter(function(v) {
        return v.__c;
      });
      if (c.every(function(v) {
        return !v.__N;
      }))
        return !o || o.call(this, s, l, u);
      var d = !1;
      return c.forEach(function(v) {
        if (v.__N) {
          var h = v.__[0];
          v.__ = v.__N, v.__N = void 0, h !== v.__[0] && (d = !0);
        }
      }), !(!d && r.__c.props === s) && (!o || o.call(this, s, l, u));
    };
    Ct.u = !0;
    var o = Ct.shouldComponentUpdate, a = Ct.componentWillUpdate;
    Ct.componentWillUpdate = function(s, l, u) {
      if (this.__e) {
        var c = o;
        o = void 0, i(s, l, u), o = c;
      }
      a && a.call(this, s, l, u);
    }, Ct.shouldComponentUpdate = i;
  }
  return r.__N || r.__;
}
function sx(e, t) {
  var n = oc(co++, 3);
  !Se.__s && fx(n.__H, t) && (n.__ = e, n.i = t, Ct.__H.__h.push(n));
}
function lx(e) {
  var t = oc(co++, 10), n = ox();
  return t.__ = e, Ct.componentDidCatch || (Ct.componentDidCatch = function(r, i) {
    t.__ && t.__(r, i), n[1](r);
  }), [n[0], function() {
    n[1](void 0);
  }];
}
function ux() {
  for (var e; e = _m.shift(); )
    if (e.__P && e.__H)
      try {
        e.__H.__h.forEach(Ea), e.__H.__h.forEach(lu), e.__H.__h = [];
      } catch (t) {
        e.__H.__h = [], Se.__e(t, e.__v);
      }
}
Se.__b = function(e) {
  Ct = null, sd && sd(e);
}, Se.__r = function(e) {
  ld && ld(e), co = 0;
  var t = (Ct = e.__c).__H;
  t && (tl === Ct ? (t.__h = [], Ct.__h = [], t.__.forEach(function(n) {
    n.__N && (n.__ = n.__N), n.__V = Sa, n.__N = n.i = void 0;
  })) : (t.__h.forEach(Ea), t.__h.forEach(lu), t.__h = [], co = 0)), tl = Ct;
}, Se.diffed = function(e) {
  ud && ud(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (_m.push(t) !== 1 && ad === Se.requestAnimationFrame || ((ad = Se.requestAnimationFrame) || cx)(ux)), t.__H.__.forEach(function(n) {
    n.i && (n.__H = n.i), n.__V !== Sa && (n.__ = n.__V), n.i = void 0, n.__V = Sa;
  })), tl = Ct = null;
}, Se.__c = function(e, t) {
  t.some(function(n) {
    try {
      n.__h.forEach(Ea), n.__h = n.__h.filter(function(r) {
        return !r.__ || lu(r);
      });
    } catch (r) {
      t.some(function(i) {
        i.__h && (i.__h = []);
      }), t = [], Se.__e(r, n.__v);
    }
  }), cd && cd(e, t);
}, Se.unmount = function(e) {
  fd && fd(e);
  var t, n = e.__c;
  n && n.__H && (n.__H.__.forEach(function(r) {
    try {
      Ea(r);
    } catch (i) {
      t = i;
    }
  }), n.__H = void 0, t && Se.__e(t, n.__v));
};
var dd = typeof requestAnimationFrame == "function";
function cx(e) {
  var t, n = function() {
    clearTimeout(r), dd && cancelAnimationFrame(t), setTimeout(e);
  }, r = setTimeout(n, 100);
  dd && (t = requestAnimationFrame(n));
}
function Ea(e) {
  var t = Ct, n = e.__c;
  typeof n == "function" && (e.__c = void 0, n()), Ct = t;
}
function lu(e) {
  var t = Ct;
  e.__c = e.__(), Ct = t;
}
function fx(e, t) {
  return !e || e.length !== t.length || t.some(function(n, r) {
    return n !== e[r];
  });
}
function Sm(e, t) {
  return typeof t == "function" ? t(e) : t;
}
const dx = ({ errorInfo: e }) => /* @__PURE__ */ Md("div", { children: [
  "Custom Error Boundary. ",
  /* @__PURE__ */ Xt("br", {})
] }), vx = ({ children: e }) => {
  const [t] = lx();
  return console.error(t), t ? /* @__PURE__ */ Xt(dx, { errorInfo: t }) : /* @__PURE__ */ Xt(Dm, { children: e });
}, hx = ({ children: e }) => /* @__PURE__ */ Xt(vx, { children: e }), uu = (e) => typeof e == "object" && e !== null, Em = (e) => typeof e == "string", px = (e) => typeof e == "function";
class ac {
  get(t, n) {
    const r = localStorage.getItem(t);
    return r ? mx(r) ? JSON.parse(r) : r : n;
  }
  set(t, n) {
    if (t in YO) {
      if (Em(n))
        return localStorage.setItem(t, n);
      localStorage.setItem(t, JSON.stringify(n));
    }
  }
}
const mx = (e) => {
  try {
    JSON.parse(e);
  } catch {
    return !1;
  }
  return !0;
}, gx = Es(() => {
  const e = Fo(), { theme: t } = Lo(), n = new ac();
  return /* @__PURE__ */ Xt(
    Lh,
    {
      size: "middle",
      defaultValue: "vs-dark",
      onChange: (i) => {
        n.set("EDITOR_THEME", i), e.changeTheme(i);
      },
      value: t,
      style: { width: 200 },
      options: ou.map((i) => ({
        value: i,
        label: i
      }))
    }
  );
});
class bx {
  constructor(t) {
    Mi(this), this.state = t, this.getters = t.getters;
  }
  saveContent(t, n) {
    this.getters.getActiveTab(n).setTabContent(t);
  }
}
function yx(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function vd(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function hd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? vd(Object(n), !0).forEach(function(r) {
      yx(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : vd(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function _x(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), i, o;
  for (o = 0; o < r.length; o++)
    i = r[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Sx(e, t) {
  if (e == null)
    return {};
  var n = _x(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++)
      r = o[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Ex(e, t) {
  return wx(e) || Cx(e, t) || Ox(e, t) || xx();
}
function wx(e) {
  if (Array.isArray(e))
    return e;
}
function Cx(e, t) {
  if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(e)))) {
    var n = [], r = !0, i = !1, o = void 0;
    try {
      for (var a = e[Symbol.iterator](), s; !(r = (s = a.next()).done) && (n.push(s.value), !(t && n.length === t)); r = !0)
        ;
    } catch (l) {
      i = !0, o = l;
    } finally {
      try {
        !r && a.return != null && a.return();
      } finally {
        if (i)
          throw o;
      }
    }
    return n;
  }
}
function Ox(e, t) {
  if (e) {
    if (typeof e == "string")
      return pd(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return pd(e, t);
  }
}
function pd(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function xx() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Nx(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function md(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function gd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? md(Object(n), !0).forEach(function(r) {
      Nx(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : md(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Px() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function(r) {
    return t.reduceRight(function(i, o) {
      return o(i);
    }, r);
  };
}
function Bi(e) {
  return function t() {
    for (var n = this, r = arguments.length, i = new Array(r), o = 0; o < r; o++)
      i[o] = arguments[o];
    return i.length >= e.length ? e.apply(this, i) : function() {
      for (var a = arguments.length, s = new Array(a), l = 0; l < a; l++)
        s[l] = arguments[l];
      return t.apply(n, [].concat(i, s));
    };
  };
}
function ts(e) {
  return {}.toString.call(e).includes("Object");
}
function Mx(e) {
  return !Object.keys(e).length;
}
function fo(e) {
  return typeof e == "function";
}
function Rx(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function Tx(e, t) {
  return ts(t) || br("changeType"), Object.keys(t).some(function(n) {
    return !Rx(e, n);
  }) && br("changeField"), t;
}
function $x(e) {
  fo(e) || br("selectorType");
}
function Ix(e) {
  fo(e) || ts(e) || br("handlerType"), ts(e) && Object.values(e).some(function(t) {
    return !fo(t);
  }) && br("handlersType");
}
function Ax(e) {
  e || br("initialIsRequired"), ts(e) || br("initialType"), Mx(e) && br("initialContent");
}
function Dx(e, t) {
  throw new Error(e[t] || e.default);
}
var Fx = {
  initialIsRequired: "initial state is required",
  initialType: "initial state should be an object",
  initialContent: "initial state shouldn't be an empty object",
  handlerType: "handler should be an object or a function",
  handlersType: "all handlers should be a functions",
  selectorType: "selector should be a function",
  changeType: "provided value of changes should be an object",
  changeField: 'it seams you want to change a field in the state which is not specified in the "initial" state',
  default: "an unknown error accured in `state-local` package"
}, br = Bi(Dx)(Fx), ia = {
  changes: Tx,
  selector: $x,
  handler: Ix,
  initial: Ax
};
function Lx(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  ia.initial(e), ia.handler(t);
  var n = {
    current: e
  }, r = Bi(jx)(n, t), i = Bi(kx)(n), o = Bi(ia.changes)(e), a = Bi(Vx)(n);
  function s() {
    var u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function(c) {
      return c;
    };
    return ia.selector(u), u(n.current);
  }
  function l(u) {
    Px(r, i, o, a)(u);
  }
  return [s, l];
}
function Vx(e, t) {
  return fo(t) ? t(e.current) : t;
}
function kx(e, t) {
  return e.current = gd(gd({}, e.current), t), t;
}
function jx(e, t, n) {
  return fo(t) ? t(e.current) : Object.keys(n).forEach(function(r) {
    var i;
    return (i = t[r]) === null || i === void 0 ? void 0 : i.call(t, e.current[r]);
  }), n;
}
var Hx = {
  create: Lx
}, zx = {
  paths: {
    vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.36.1/min/vs"
  }
};
function Bx(e) {
  return function t() {
    for (var n = this, r = arguments.length, i = new Array(r), o = 0; o < r; o++)
      i[o] = arguments[o];
    return i.length >= e.length ? e.apply(this, i) : function() {
      for (var a = arguments.length, s = new Array(a), l = 0; l < a; l++)
        s[l] = arguments[l];
      return t.apply(n, [].concat(i, s));
    };
  };
}
function Ux(e) {
  return {}.toString.call(e).includes("Object");
}
function Wx(e) {
  return e || bd("configIsRequired"), Ux(e) || bd("configType"), e.urls ? (Kx(), {
    paths: {
      vs: e.urls.monacoBase
    }
  }) : e;
}
function Kx() {
  console.warn(wm.deprecation);
}
function Gx(e, t) {
  throw new Error(e[t] || e.default);
}
var wm = {
  configIsRequired: "the configuration object is required",
  configType: "the configuration object should be an object",
  default: "an unknown error accured in `@monaco-editor/loader` package",
  deprecation: `Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `
}, bd = Bx(Gx)(wm), qx = {
  config: Wx
}, Xx = function() {
  for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  return function(i) {
    return n.reduceRight(function(o, a) {
      return a(o);
    }, i);
  };
};
function Cm(e, t) {
  return Object.keys(t).forEach(function(n) {
    t[n] instanceof Object && e[n] && Object.assign(t[n], Cm(e[n], t[n]));
  }), hd(hd({}, e), t);
}
var Yx = {
  type: "cancelation",
  msg: "operation is manually canceled"
};
function nl(e) {
  var t = !1, n = new Promise(function(r, i) {
    e.then(function(o) {
      return t ? i(Yx) : r(o);
    }), e.catch(i);
  });
  return n.cancel = function() {
    return t = !0;
  }, n;
}
var Qx = Hx.create({
  config: zx,
  isInitialized: !1,
  resolve: null,
  reject: null,
  monaco: null
}), Om = Ex(Qx, 2), Vo = Om[0], Cs = Om[1];
function Jx(e) {
  var t = qx.config(e), n = t.monaco, r = Sx(t, ["monaco"]);
  Cs(function(i) {
    return {
      config: Cm(i.config, r),
      monaco: n
    };
  });
}
function Zx() {
  var e = Vo(function(t) {
    var n = t.monaco, r = t.isInitialized, i = t.resolve;
    return {
      monaco: n,
      isInitialized: r,
      resolve: i
    };
  });
  if (!e.isInitialized) {
    if (Cs({
      isInitialized: !0
    }), e.monaco)
      return e.resolve(e.monaco), nl(rl);
    if (window.monaco && window.monaco.editor)
      return xm(window.monaco), e.resolve(window.monaco), nl(rl);
    Xx(eN, nN)(rN);
  }
  return nl(rl);
}
function eN(e) {
  return document.body.appendChild(e);
}
function tN(e) {
  var t = document.createElement("script");
  return e && (t.src = e), t;
}
function nN(e) {
  var t = Vo(function(r) {
    var i = r.config, o = r.reject;
    return {
      config: i,
      reject: o
    };
  }), n = tN("".concat(t.config.paths.vs, "/loader.js"));
  return n.onload = function() {
    return e();
  }, n.onerror = t.reject, n;
}
function rN() {
  var e = Vo(function(n) {
    var r = n.config, i = n.resolve, o = n.reject;
    return {
      config: r,
      resolve: i,
      reject: o
    };
  }), t = window.require;
  t.config(e.config), t(["vs/editor/editor.main"], function(n) {
    xm(n), e.resolve(n);
  }, function(n) {
    e.reject(n);
  });
}
function xm(e) {
  Vo().monaco || Cs({
    monaco: e
  });
}
function iN() {
  return Vo(function(e) {
    var t = e.monaco;
    return t;
  });
}
var rl = new Promise(function(e, t) {
  return Cs({
    resolve: e,
    reject: t
  });
}), ns = {
  config: Jx,
  init: Zx,
  __getMonacoInstance: iN
}, oN = { wrapper: { display: "flex", position: "relative", textAlign: "initial" }, fullWidth: { width: "100%" }, hide: { display: "none" } }, il = oN, aN = { container: { display: "flex", height: "100%", width: "100%", justifyContent: "center", alignItems: "center" } }, sN = aN;
function lN({ children: e }) {
  return Xe.createElement("div", { style: sN.container }, e);
}
var uN = lN, cN = uN;
function fN({ width: e, height: t, isEditorReady: n, loading: r, _ref: i, className: o, wrapperProps: a }) {
  return Xe.createElement("section", { style: { ...il.wrapper, width: e, height: t }, ...a }, !n && Xe.createElement(cN, null, r), Xe.createElement("div", { ref: i, style: { ...il.fullWidth, ...!n && il.hide }, className: o }));
}
var dN = fN, Nm = ci(dN);
function vN(e) {
  ot(e, []);
}
var sc = vN;
function hN(e, t, n = !0) {
  let r = ae(!0);
  ot(r.current || !n ? () => {
    r.current = !1;
  } : e, t);
}
var un = hN;
function Yi() {
}
function si(e, t, n, r) {
  return pN(e, r) || mN(e, t, n, r);
}
function pN(e, t) {
  return e.editor.getModel(Pm(e, t));
}
function mN(e, t, n, r) {
  return e.editor.createModel(t, n, r ? Pm(e, r) : void 0);
}
function Pm(e, t) {
  return e.Uri.parse(t);
}
function gN({ original: e, modified: t, language: n, originalLanguage: r, modifiedLanguage: i, originalModelPath: o, modifiedModelPath: a, keepCurrentOriginalModel: s = !1, keepCurrentModifiedModel: l = !1, theme: u = "light", loading: c = "Loading...", options: d = {}, height: v = "100%", width: h = "100%", className: p, wrapperProps: m = {}, beforeMount: b = Yi, onMount: g = Yi }) {
  let [y, S] = rt(!1), [C, _] = rt(!0), E = ae(null), x = ae(null), I = ae(null), R = ae(g), N = ae(b), $ = ae(!1);
  sc(() => {
    let M = ns.init();
    return M.then((T) => (x.current = T) && _(!1)).catch((T) => T?.type !== "cancelation" && console.error("Monaco initialization: error:", T)), () => E.current ? P() : M.cancel();
  }), un(() => {
    let M = E.current.getModifiedEditor();
    M.getOption(x.current.editor.EditorOption.readOnly) ? M.setValue(t || "") : t !== M.getValue() && (M.executeEdits("", [{ range: M.getModel().getFullModelRange(), text: t || "", forceMoveMarkers: !0 }]), M.pushUndoStop());
  }, [t], y), un(() => {
    E.current?.getModel()?.original.setValue(e || "");
  }, [e], y), un(() => {
    let { original: M, modified: T } = E.current.getModel();
    x.current.editor.setModelLanguage(M, r || n || "text"), x.current.editor.setModelLanguage(T, i || n || "text");
  }, [n, r, i], y), un(() => {
    x.current?.editor.setTheme(u);
  }, [u], y), un(() => {
    E.current?.updateOptions(d);
  }, [d], y);
  let w = _n(() => {
    if (!x.current)
      return;
    N.current(x.current);
    let M = si(x.current, e || "", r || n || "text", o || ""), T = si(x.current, t || "", i || n || "text", a || "");
    E.current?.setModel({ original: M, modified: T });
  }, [n, t, i, e, r, o, a]), O = _n(() => {
    !$.current && I.current && (E.current = x.current.editor.createDiffEditor(I.current, { automaticLayout: !0, ...d }), w(), x.current?.editor.setTheme(u), S(!0), $.current = !0);
  }, [d, u, w]);
  ot(() => {
    y && R.current(E.current, x.current);
  }, [y]), ot(() => {
    !C && !y && O();
  }, [C, y, O]), un(() => {
    if (E.current && x.current) {
      let M = E.current.getOriginalEditor(), T = si(x.current, e || "", r || n || "text", o || "");
      T !== M.getModel() && M.setModel(T);
    }
  }, [o], y), un(() => {
    if (E.current && x.current) {
      let M = E.current.getModifiedEditor(), T = si(x.current, t || "", i || n || "text", a || "");
      T !== M.getModel() && M.setModel(T);
    }
  }, [a], y);
  function P() {
    let M = E.current?.getModel();
    s || M?.original?.dispose(), l || M?.modified?.dispose(), E.current?.dispose();
  }
  return Xe.createElement(Nm, { width: h, height: v, isEditorReady: y, loading: c, _ref: I, className: p, wrapperProps: m });
}
var bN = gN;
ci(bN);
function yN() {
  let [e, t] = rt(ns.__getMonacoInstance());
  return sc(() => {
    let n;
    return e || (n = ns.init(), n.then((r) => {
      t(r);
    })), () => n?.cancel();
  }), e;
}
var Mm = yN;
function _N(e) {
  let t = ae();
  return ot(() => {
    t.current = e;
  }, [e]), t.current;
}
var SN = _N, oa = /* @__PURE__ */ new Map();
function EN({ defaultValue: e, defaultLanguage: t, defaultPath: n, value: r, language: i, path: o, theme: a = "light", line: s, loading: l = "Loading...", options: u = {}, overrideServices: c = {}, saveViewState: d = !0, keepCurrentModel: v = !1, width: h = "100%", height: p = "100%", className: m, wrapperProps: b = {}, beforeMount: g = Yi, onMount: y = Yi, onChange: S, onValidate: C = Yi }) {
  let [_, E] = rt(!1), [x, I] = rt(!0), R = ae(null), N = ae(null), $ = ae(null), w = ae(y), O = ae(g), P = ae(), M = ae(r), T = SN(o), A = ae(!1), k = ae(!1);
  sc(() => {
    let K = ns.init();
    return K.then((V) => (R.current = V) && I(!1)).catch((V) => V?.type !== "cancelation" && console.error("Monaco initialization: error:", V)), () => N.current ? Y() : K.cancel();
  }), un(() => {
    let K = si(R.current, e || r || "", t || i || "", o || n || "");
    K !== N.current?.getModel() && (d && oa.set(T, N.current?.saveViewState()), N.current?.setModel(K), d && N.current?.restoreViewState(oa.get(o)));
  }, [o], _), un(() => {
    N.current?.updateOptions(u);
  }, [u], _), un(() => {
    !N.current || r === void 0 || (N.current.getOption(R.current.editor.EditorOption.readOnly) ? N.current.setValue(r) : r !== N.current.getValue() && (k.current = !0, N.current.executeEdits("", [{ range: N.current.getModel().getFullModelRange(), text: r, forceMoveMarkers: !0 }]), N.current.pushUndoStop(), k.current = !1));
  }, [r], _), un(() => {
    let K = N.current?.getModel();
    K && i && R.current?.editor.setModelLanguage(K, i);
  }, [i], _), un(() => {
    s !== void 0 && N.current?.revealLine(s);
  }, [s], _), un(() => {
    R.current?.editor.setTheme(a);
  }, [a], _);
  let H = _n(() => {
    if (!(!$.current || !R.current) && !A.current) {
      O.current(R.current);
      let K = o || n, V = si(R.current, r || e || "", t || i || "", K || "");
      N.current = R.current?.editor.create($.current, { model: V, automaticLayout: !0, ...u }, c), d && N.current.restoreViewState(oa.get(K)), R.current.editor.setTheme(a), E(!0), A.current = !0;
    }
  }, [e, t, n, r, i, o, u, c, d, a]);
  ot(() => {
    _ && w.current(N.current, R.current);
  }, [_]), ot(() => {
    !x && !_ && H();
  }, [x, _, H]), M.current = r, ot(() => {
    _ && S && (P.current?.dispose(), P.current = N.current?.onDidChangeModelContent((K) => {
      k.current || S(N.current.getValue(), K);
    }));
  }, [_, S]), ot(() => {
    if (_) {
      let K = R.current.editor.onDidChangeMarkers((V) => {
        let G = N.current.getModel()?.uri;
        if (G && V.find((q) => q.path === G.path)) {
          let q = R.current.editor.getModelMarkers({ resource: G });
          C?.(q);
        }
      });
      return () => {
        K?.dispose();
      };
    }
    return () => {
    };
  }, [_, C]);
  function Y() {
    P.current?.dispose(), v ? d && oa.set(o, N.current.saveViewState()) : N.current.getModel()?.dispose(), N.current.dispose();
  }
  return Xe.createElement(Nm, { width: h, height: p, isEditorReady: _, loading: l, _ref: $, className: m, wrapperProps: b });
}
var wN = EN, CN = ci(wN), ON = CN;
const xN = [1, 2, 3, 4, 5, 6, 7, 8, 9], NN = () => {
  const e = am(), { tabs: t } = Fo(), { content: n } = Lo();
  ot(() => (e.on(Object.fromEntries(xN.map((r) => {
    const o = n[r - 1]?.getKeyId();
    return [
      r.toString(),
      o ? () => t.changeActiveTab(o) : null
    ];
  }))), () => {
    e.clear();
  }), [n.length]);
}, Os = {
  ThemeUpload(e) {
    return `Unable to upload theme - ${e}.json`;
  },
  NotSupportedByBrowser() {
    return "Your browser does not support saving and opening files.";
  },
  WrongJsonObject(e) {
    return `incoming json object should be must be ${e} type.`;
  }
}, PN = {
  types: [
    {
      accept: {
        "text/*": [
          ".ts",
          ".tsx",
          ".js",
          ".jsx",
          ".vue",
          ".txt",
          ".py",
          ".yaml",
          ".yml"
        ]
      },
      description: "Text Files"
    }
  ]
}, Rm = (e) => {
  const t = e.split(".").at(-1);
  return MN(t) ? rc[t] : "text";
};
function MN(e) {
  return e in rc;
}
const RN = () => async () => {
  if ("showOpenFilePicker" in window) {
    const [e] = await window.showOpenFilePicker(PN), t = await e.getFile(), n = await t.text(), r = Rm(t.name);
    return {
      name: t.name,
      type: t.type,
      content: n,
      fileHandle: e,
      language: r
    };
  }
  console.warn(Os.NotSupportedByBrowser());
}, TN = () => async (e, t) => {
  try {
    let n = e;
    px(e?.createWritable) || (n = await window.showSaveFilePicker());
    const r = await n.createWritable();
    return await r.write(t), await r.close(), n;
  } catch {
    console.warn(Os.NotSupportedByBrowser());
  }
}, $N = () => {
  const e = RN(), t = TN();
  return {
    open: e,
    save: t
  };
}, IN = (e) => uu(e) ? "name" in e && typeof e.name == "string" && "type" in e && typeof e.type == "string" && "content" in e && typeof e.content == "string" : !1, AN = () => {
  const e = Fo(), t = nc(), n = am(), r = $N();
  NN();
  const i = _n(async () => {
    const a = await r.open();
    IN(a) && e.tabs.createTab(a);
  }, []), o = async () => {
    const a = t.getActiveTab(), s = a.getFileHandle(), l = a.getContent();
    if (!a.wasChanged)
      return;
    const u = await r.save(s, l);
    u && (a.setFileHandle(u), a.lang = Rm(u.name));
  };
  ot(() => (n.on({
    O: i,
    S: o,
    N: () => {
      e.tabs.createTab();
    },
    T: () => {
      e.tabs.removeTab();
    }
  }), () => {
    n.clear();
  }), []);
}, DN = Es(() => {
  const { editor: e } = Fo(), t = nc(), { theme: n, content: r } = Lo(), i = new ac(), o = JO(() => {
    console.log("saved to localStorage."), i.set("EDITOR_CONTENT_DATA", r);
  }, 1e3), a = t.getActiveTabText(), s = t.getActiveLanguage();
  AN();
  const l = Mm(), u = (c) => {
    Em(c) && (e.saveContent(c), o());
  };
  return ot(() => {
    l?.editor.setTheme(n);
  }, [n]), /* @__PURE__ */ Xt(
    ON,
    {
      height: "90vh",
      theme: "vs-dark",
      onChange: u,
      language: s,
      value: Kp(a),
      options: {
        fontSize: 20
      }
    }
  );
});
class FN {
  constructor(t) {
    this.state = t, Mi(this);
  }
  getActiveTab(t = this.state.activeKey) {
    return this.state.content.find((n) => n.getKeyId() === t);
  }
  getActiveTabText() {
    return this.getActiveTab()?.getContent();
  }
  getTabIndex(t = this.state.activeKey) {
    return this.state.content.findIndex((n) => n.getKeyId() === t);
  }
  getActiveLanguage() {
    return this.getActiveTab()?.lang;
  }
}
let aa;
const LN = new Uint8Array(16);
function VN() {
  if (!aa && (aa = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !aa))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return aa(LN);
}
const jt = [];
for (let e = 0; e < 256; ++e)
  jt.push((e + 256).toString(16).slice(1));
function kN(e, t = 0) {
  return (jt[e[t + 0]] + jt[e[t + 1]] + jt[e[t + 2]] + jt[e[t + 3]] + "-" + jt[e[t + 4]] + jt[e[t + 5]] + "-" + jt[e[t + 6]] + jt[e[t + 7]] + "-" + jt[e[t + 8]] + jt[e[t + 9]] + "-" + jt[e[t + 10]] + jt[e[t + 11]] + jt[e[t + 12]] + jt[e[t + 13]] + jt[e[t + 14]] + jt[e[t + 15]]).toLowerCase();
}
const jN = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), yd = {
  randomUUID: jN
};
function HN(e, t, n) {
  if (yd.randomUUID && !t && !e)
    return yd.randomUUID();
  e = e || {};
  const r = e.random || (e.rng || VN)();
  if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, t) {
    n = n || 0;
    for (let i = 0; i < 16; ++i)
      t[n + i] = r[i];
    return t;
  }
  return kN(r);
}
class Tm {
  constructor({ lastNumber: t, fileData: n, instance: r }) {
    this._key = HN(), this._fileHandle = null, this._label = "Untitled", this._content = "", this.idx = 0, this.lang = "text", this.wasChanged = !1, Mi(this), r ? this.initUsingInstance(r) : n && this.initUsingFileData(n), t && (this.idx = t + 1);
  }
  setFileHandle(t) {
    this._fileHandle = t, this.wasChanged = !1, this.setLabel(t.name);
  }
  getFileHandle() {
    return this._fileHandle;
  }
  setLabel(t) {
    this._label = t;
  }
  getLabel() {
    return this._label;
  }
  updateLabel() {
    if (this._fileHandle) {
      this.wasChanged || this.setLabel(`${this.getLabel()}  •`), this.wasChanged = !0;
      return;
    }
    const t = this._content.split(`
`)[0].slice(0, 10), r = `${t.replace(" ", "").replace(`
`, "").length > 1 ? t : "Untitled"} •`;
    this.wasChanged = !0, this.setLabel(r);
  }
  setTabContent(t) {
    this._content = t, this.updateLabel();
  }
  getContent() {
    return this._content;
  }
  getKeyId() {
    return this._key;
  }
  initUsingFileData(t) {
    this._fileHandle = t.fileHandle, this.lang = t.language, this._content = t.content, this._label = t.name;
  }
  initUsingInstance(t) {
    this._key = t._key, this._label = t._label, this.idx = t.idx, this._content = t._content, this._fileHandle = t._fileHandle, this.wasChanged = t.wasChanged, this.lang = t.lang;
  }
}
const zN = (e) => e.length >= om;
class BN {
  constructor(t) {
    Mi(this), this.state = t;
  }
  createTab(t) {
    const n = this.state.content;
    if (zN(n))
      return;
    const r = n.at(-1)?.idx, i = new Tm({ fileData: t, lastNumber: r });
    this.state.activeKey = i.getKeyId(), this.state.content.push(i);
  }
  removeTab(t) {
    const n = this.state.getters.getTabIndex(t), r = this.state.content[n - 1];
    this.state.content.splice(n, 1), t === this.state.activeKey && (this.state.activeKey = r.getKeyId());
  }
  changeActiveTab(t) {
    this.state.activeKey = t;
  }
}
class UN {
  constructor(t) {
    Mi(this), this.state = t, this.getters = t.getters, this.tabs = new BN(t), this.editor = new bx(t);
  }
  changeTheme(t) {
    this.state.theme = t;
  }
}
class WN {
  constructor() {
    this.activeKey = "", this.content = [], this.theme = "vs-dark", Mi(this), this.getters = new FN(this), this.actions = new UN(this);
    const t = new ac();
    this.theme = t.get("EDITOR_THEME", "vs-dark");
    const n = t.get("EDITOR_CONTENT_DATA", []);
    n.length || this.actions.tabs.createTab();
    for (const i of n)
      this.content.push(new Tm({ instance: i }));
    const r = this.content[0];
    this.activeKey = r.getKeyId();
  }
}
const xs = vo({}), KN = ({ children: e }) => {
  const t = new WN();
  return /* @__PURE__ */ Xt(xs.Provider, { value: t, children: e });
};
function GN(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function _d(e, t) {
  for (var n in e)
    if (n !== "__source" && !(n in t))
      return !0;
  for (var r in t)
    if (r !== "__source" && e[r] !== t[r])
      return !0;
  return !1;
}
function Sd(e) {
  this.props = e;
}
(Sd.prototype = new ir()).isPureReactComponent = !0, Sd.prototype.shouldComponentUpdate = function(e, t) {
  return _d(this.props, e) || _d(this.state, t);
};
var Ed = Se.__b;
Se.__b = function(e) {
  e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), Ed && Ed(e);
};
var qN = Se.__e;
Se.__e = function(e, t, n, r) {
  if (e.then) {
    for (var i, o = t; o = o.__; )
      if ((i = o.__c) && i.__c)
        return t.__e == null && (t.__e = n.__e, t.__k = n.__k), i.__c(e, t);
  }
  qN(e, t, n, r);
};
var wd = Se.unmount;
function $m(e, t, n) {
  return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(r) {
    typeof r.__c == "function" && r.__c();
  }), e.__c.__H = null), (e = GN({}, e)).__c != null && (e.__c.__P === n && (e.__c.__P = t), e.__c = null), e.__k = e.__k && e.__k.map(function(r) {
    return $m(r, t, n);
  })), e;
}
function Im(e, t, n) {
  return e && (e.__v = null, e.__k = e.__k && e.__k.map(function(r) {
    return Im(r, t, n);
  }), e.__c && e.__c.__P === t && (e.__e && n.insertBefore(e.__e, e.__d), e.__c.__e = !0, e.__c.__P = n)), e;
}
function ol() {
  this.__u = 0, this.t = null, this.__b = null;
}
function Am(e) {
  var t = e.__.__c;
  return t && t.__a && t.__a(e);
}
function sa() {
  this.u = null, this.o = null;
}
Se.unmount = function(e) {
  var t = e.__c;
  t && t.__R && t.__R(), t && e.__h === !0 && (e.type = null), wd && wd(e);
}, (ol.prototype = new ir()).__c = function(e, t) {
  var n = t.__c, r = this;
  r.t == null && (r.t = []), r.t.push(n);
  var i = Am(r.__v), o = !1, a = function() {
    o || (o = !0, n.__R = null, i ? i(s) : s());
  };
  n.__R = a;
  var s = function() {
    if (!--r.__u) {
      if (r.state.__a) {
        var u = r.state.__a;
        r.__v.__k[0] = Im(u, u.__c.__P, u.__c.__O);
      }
      var c;
      for (r.setState({ __a: r.__b = null }); c = r.t.pop(); )
        c.forceUpdate();
    }
  }, l = t.__h === !0;
  r.__u++ || l || r.setState({ __a: r.__b = r.__v.__k[0] }), e.then(a, a);
}, ol.prototype.componentWillUnmount = function() {
  this.t = [];
}, ol.prototype.render = function(e, t) {
  if (this.__b) {
    if (this.__v.__k) {
      var n = document.createElement("div"), r = this.__v.__k[0].__c;
      this.__v.__k[0] = $m(this.__b, n, r.__O = r.__P);
    }
    this.__b = null;
  }
  var i = t.__a && td(lo, null, e.fallback);
  return i && (i.__h = null), [td(lo, null, t.__a ? null : e.children), i];
};
var Cd = function(e, t, n) {
  if (++n[1] === n[0] && e.o.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.o.size))
    for (n = e.u; n; ) {
      for (; n.length > 3; )
        n.pop()();
      if (n[1] < n[0])
        break;
      e.u = n = n[2];
    }
};
(sa.prototype = new ir()).__a = function(e) {
  var t = this, n = Am(t.__v), r = t.o.get(e);
  return r[0]++, function(i) {
    var o = function() {
      t.props.revealOrder ? (r.push(i), Cd(t, e, r)) : i();
    };
    n ? n(o) : o();
  };
}, sa.prototype.render = function(e) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var t = Za(e.children);
  e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
  for (var n = t.length; n--; )
    this.o.set(t[n], this.u = [1, 0, this.u]);
  return e.children;
}, sa.prototype.componentDidUpdate = sa.prototype.componentDidMount = function() {
  var e = this;
  this.o.forEach(function(t, n) {
    Cd(e, n, t);
  });
};
var XN = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, YN = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, QN = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, JN = /[A-Z0-9]/g, ZN = typeof document < "u", eP = function(e) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e);
};
ir.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
  Object.defineProperty(ir.prototype, e, { configurable: !0, get: function() {
    return this["UNSAFE_" + e];
  }, set: function(t) {
    Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t });
  } });
});
var Od = Se.event;
function tP() {
}
function nP() {
  return this.cancelBubble;
}
function rP() {
  return this.defaultPrevented;
}
Se.event = function(e) {
  return Od && (e = Od(e)), e.persist = tP, e.isPropagationStopped = nP, e.isDefaultPrevented = rP, e.nativeEvent = e;
};
var iP = { enumerable: !1, configurable: !0, get: function() {
  return this.class;
} }, xd = Se.vnode;
Se.vnode = function(e) {
  typeof e.type == "string" && function(t) {
    var n = t.props, r = t.type, i = {};
    for (var o in n) {
      var a = n[o];
      if (!(o === "value" && "defaultValue" in n && a == null || ZN && o === "children" && r === "noscript" || o === "class" || o === "className")) {
        var s = o.toLowerCase();
        o === "defaultValue" && "value" in n && n.value == null ? o = "value" : o === "download" && a === !0 ? a = "" : s === "ondoubleclick" ? o = "ondblclick" : s !== "onchange" || r !== "input" && r !== "textarea" || eP(n.type) ? s === "onfocus" ? o = "onfocusin" : s === "onblur" ? o = "onfocusout" : QN.test(o) ? o = s : r.indexOf("-") === -1 && YN.test(o) ? o = o.replace(JN, "-$&").toLowerCase() : a === null && (a = void 0) : s = o = "oninput", s === "oninput" && i[o = s] && (o = "oninputCapture"), i[o] = a;
      }
    }
    r == "select" && i.multiple && Array.isArray(i.value) && (i.value = Za(n.children).forEach(function(l) {
      l.props.selected = i.value.indexOf(l.props.value) != -1;
    })), r == "select" && i.defaultValue != null && (i.value = Za(n.children).forEach(function(l) {
      l.props.selected = i.multiple ? i.defaultValue.indexOf(l.props.value) != -1 : i.defaultValue == l.props.value;
    })), n.class && !n.className ? (i.class = n.class, Object.defineProperty(i, "className", iP)) : (n.className && !n.class || n.class && n.className) && (i.class = i.className = n.className), t.props = i;
  }(e), e.$$typeof = XN, xd && xd(e);
};
var Nd = Se.__r;
Se.__r = function(e) {
  Nd && Nd(e), e.__c;
};
var Pd = Se.diffed;
Se.diffed = function(e) {
  Pd && Pd(e);
  var t = e.props, n = e.__e;
  n != null && e.type === "textarea" && "value" in t && t.value !== n.value && (n.value = t.value == null ? "" : t.value);
};
function oP(e) {
  if (!(uu(e) && "base" in e && typeof e.base == "string" && "colors" in e && uu(e.colors)))
    throw new Error(Os.WrongJsonObject("ThemeObject"));
}
const aP = () => {
  const e = Mm(), t = QO(), { theme: n } = Lo();
  return sx(() => {
    let r = 0;
    ou.forEach(async (i) => {
      try {
        const o = await sP(`./themes/${i}.json`);
        oP(o), e?.editor.defineTheme(i, o);
      } catch {
        console.log(Os.ThemeUpload(i));
      }
      r += 1, r === ou.length && (e?.editor.setTheme(n), t.on());
    });
  }, [e]), t.val;
};
function sP(e) {
  switch (e) {
    case "./themes/Dracula":
    case "./themes/Dracula.json":
      return import("./Dracula-251da18d.mjs");
    case "./themes/Dreamweaver":
    case "./themes/Dreamweaver.json":
      return import("./Dreamweaver-82078f18.mjs");
    case "./themes/Eiffel":
    case "./themes/Eiffel.json":
      return import("./Eiffel-7608f31a.mjs");
    case "./themes/GitHub":
    case "./themes/GitHub.json":
      return import("./GitHub-72e63ab5.mjs");
    case "./themes/IDLE":
    case "./themes/IDLE.json":
      return import("./IDLE-da69797d.mjs");
    case "./themes/Monokai":
    case "./themes/Monokai.json":
      return import("./Monokai-9f1769eb.mjs");
    case "./themes/Nord":
    case "./themes/Nord.json":
      return import("./Nord-67572ab4.mjs");
    case "./themes/Tomorrow":
    case "./themes/Tomorrow.json":
      return import("./Tomorrow-e0163b38.mjs");
    case "./themes/Twilight":
    case "./themes/Twilight.json":
      return import("./Twilight-5684df89.mjs");
    default:
      return new Promise(function(t, n) {
        (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(
          n.bind(null, new Error("Unknown variable dynamic import: " + e))
        );
      });
  }
}
const lP = ({ children: e }) => {
  const t = aP();
  return /* @__PURE__ */ Xt(ZO, { when: t, children: e });
}, dP = () => /* @__PURE__ */ Xt(hx, { children: /* @__PURE__ */ Xt(KN, { children: /* @__PURE__ */ Md(lP, { children: [
  /* @__PURE__ */ Xt(XO, {}),
  /* @__PURE__ */ Xt(gx, {}),
  /* @__PURE__ */ Xt(GO, {}),
  /* @__PURE__ */ Xt(DN, {})
] }) }) });
export {
  dP as Editor,
  FN as EditorGetters,
  WN as EditorStore,
  xs as EditorStoreContext
};
