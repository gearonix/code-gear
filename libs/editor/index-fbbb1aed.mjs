import * as Dr from "react";
import Pe, { useState as ft, forwardRef as Lr, memo as Br, useContext as it, useRef as se, useCallback as Fn, useEffect as xe, createContext as ss, useMemo as Sn, createElement as ab, useImperativeHandle as Nh, useLayoutEffect as sb, useReducer as ub, lazy as cb } from "react";
import { jsx as K, jsxs as mt, Fragment as Ih } from "react/jsx-runtime";
import { unstable_batchedUpdates as Ah } from "react-dom";
import { message as lb, ConfigProvider as _b, Button as So, Select as db, Tabs as yh, Popconfirm as fb } from "antd";
import { Link as hb } from "react-router-dom";
import "react-smooth-scrollbar";
function he(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  throw new Error(typeof e == "number" ? "[MobX] minified error nr: " + e + (n.length ? " " + n.map(String).join(",") : "") + ". Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts" : "[MobX] " + e);
}
var pb = {};
function tl() {
  return typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : pb;
}
var Sh = Object.assign, Sa = Object.getOwnPropertyDescriptor, Yt = Object.defineProperty, fi = Object.prototype, ju = [];
Object.freeze(ju);
var Gh = {};
Object.freeze(Gh);
var mb = typeof Proxy < "u", Tb = /* @__PURE__ */ Object.toString();
function Dh() {
  mb || he("Proxy not available");
}
function Ch(e) {
  var t = !1;
  return function() {
    if (!t)
      return t = !0, e.apply(this, arguments);
  };
}
var Rr = function() {
};
function kt(e) {
  return typeof e == "function";
}
function rr(e) {
  var t = typeof e;
  switch (t) {
    case "string":
    case "symbol":
    case "number":
      return !0;
  }
  return !1;
}
function us(e) {
  return e !== null && typeof e == "object";
}
function fn(e) {
  if (!us(e))
    return !1;
  var t = Object.getPrototypeOf(e);
  if (t == null)
    return !0;
  var n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n.toString() === Tb;
}
function wh(e) {
  var t = e?.constructor;
  return t ? t.name === "GeneratorFunction" || t.displayName === "GeneratorFunction" : !1;
}
function hi(e, t, n) {
  Yt(e, t, {
    enumerable: !1,
    writable: !0,
    configurable: !0,
    value: n
  });
}
function Uh(e, t, n) {
  Yt(e, t, {
    enumerable: !1,
    writable: !1,
    configurable: !0,
    value: n
  });
}
function Xn(e, t) {
  var n = "isMobX" + e;
  return t.prototype[n] = !0, function(r) {
    return us(r) && r[n] === !0;
  };
}
function to(e) {
  return e instanceof Map;
}
function pi(e) {
  return e instanceof Set;
}
var Ph = typeof Object.getOwnPropertySymbols < "u";
function Eb(e) {
  var t = Object.keys(e);
  if (!Ph)
    return t;
  var n = Object.getOwnPropertySymbols(e);
  return n.length ? [].concat(t, n.filter(function(r) {
    return fi.propertyIsEnumerable.call(e, r);
  })) : t;
}
var Fr = typeof Reflect < "u" && Reflect.ownKeys ? Reflect.ownKeys : Ph ? function(e) {
  return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
} : (
  /* istanbul ignore next */
  Object.getOwnPropertyNames
);
function Hh(e) {
  return e === null ? null : typeof e == "object" ? "" + e : e;
}
function cn(e, t) {
  return fi.hasOwnProperty.call(e, t);
}
var bb = Object.getOwnPropertyDescriptors || function(t) {
  var n = {};
  return Fr(t).forEach(function(r) {
    n[r] = Sa(t, r);
  }), n;
};
function w_(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Rb(r.key), r);
  }
}
function nl(e, t, n) {
  return t && w_(e.prototype, t), n && w_(e, n), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function jr() {
  return jr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, jr.apply(this, arguments);
}
function kh(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Vu(e, t);
}
function Vu(e, t) {
  return Vu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, Vu(e, t);
}
function nu(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ob(e, t) {
  if (e) {
    if (typeof e == "string")
      return U_(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return U_(e, t);
  }
}
function U_(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function vr(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n)
    return (n = n.call(e)).next.bind(n);
  if (Array.isArray(e) || (n = Ob(e)) || t && e && typeof e.length == "number") {
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
function gb(e, t) {
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
function Rb(e) {
  var t = gb(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
var Wt = /* @__PURE__ */ Symbol("mobx-stored-annotations");
function Kt(e) {
  function t(n, r) {
    mi(n, r, e);
  }
  return Object.assign(t, e);
}
function mi(e, t, n) {
  cn(e, Wt) || hi(e, Wt, jr({}, e[Wt])), Cb(n) || (e[Wt][t] = n);
}
function vb(e) {
  return cn(e, Wt) || hi(e, Wt, jr({}, e[Wt])), e[Wt];
}
var $ = /* @__PURE__ */ Symbol("mobx administration"), Ti = /* @__PURE__ */ function() {
  function e(n) {
    n === void 0 && (n = "Atom"), this.name_ = void 0, this.isPendingUnobservation_ = !1, this.isBeingObserved_ = !1, this.observers_ = /* @__PURE__ */ new Set(), this.diffValue_ = 0, this.lastAccessedBy_ = 0, this.lowestObserverState_ = fe.NOT_TRACKING_, this.onBOL = void 0, this.onBUOL = void 0, this.name_ = n;
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
    return np(this);
  }, t.reportChanged = function() {
    lt(), rp(this), P.stateVersion = P.stateVersion < Number.MAX_SAFE_INTEGER ? P.stateVersion + 1 : Number.MIN_SAFE_INTEGER, _t();
  }, t.toString = function() {
    return this.name_;
  }, e;
}(), rl = /* @__PURE__ */ Xn("Atom", Ti);
function Mh(e, t, n) {
  t === void 0 && (t = Rr), n === void 0 && (n = Rr);
  var r = new Ti(e);
  return t !== Rr && wO(r, t), n !== Rr && lp(r, n), r;
}
function Nb(e, t) {
  return e === t;
}
function Ib(e, t) {
  return ll(e, t);
}
function Ab(e, t) {
  return ll(e, t, 1);
}
function yb(e, t) {
  return Object.is ? Object.is(e, t) : e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var Ga = {
  identity: Nb,
  structural: Ib,
  default: yb,
  shallow: Ab
};
function Vr(e, t, n) {
  return sl(e) ? e : Array.isArray(e) ? Je.array(e, {
    name: n
  }) : fn(e) ? Je.object(e, void 0, {
    name: n
  }) : to(e) ? Je.map(e, {
    name: n
  }) : pi(e) ? Je.set(e, {
    name: n
  }) : typeof e == "function" && !al(e) && !Pa(e) ? wh(e) ? Ko(e) : Yo(n, e) : e;
}
function Sb(e, t, n) {
  if (e == null || Xr(e) || Ni(e) || $n(e) || ur(e))
    return e;
  if (Array.isArray(e))
    return Je.array(e, {
      name: n,
      deep: !1
    });
  if (fn(e))
    return Je.object(e, void 0, {
      name: n,
      deep: !1
    });
  if (to(e))
    return Je.map(e, {
      name: n,
      deep: !1
    });
  if (pi(e))
    return Je.set(e, {
      name: n,
      deep: !1
    });
}
function cs(e) {
  return e;
}
function Gb(e, t) {
  return ll(e, t) ? t : e;
}
var Db = "override";
function Cb(e) {
  return e.annotationType_ === Db;
}
function Ei(e, t) {
  return {
    annotationType_: e,
    options_: t,
    make_: wb,
    extend_: Ub
  };
}
function wb(e, t, n, r) {
  var o;
  if ((o = this.options_) != null && o.bound)
    return this.extend_(e, t, n, !1) === null ? 0 : 1;
  if (r === e.target_)
    return this.extend_(e, t, n, !1) === null ? 0 : 2;
  if (al(n.value))
    return 1;
  var i = xh(e, this, t, n, !1);
  return Yt(r, t, i), 2;
}
function Ub(e, t, n, r) {
  var o = xh(e, this, t, n);
  return e.defineProperty_(t, o, r);
}
function Pb(e, t, n, r) {
  t.annotationType_, r.value;
}
function xh(e, t, n, r, o) {
  var i, a, s, u, c, _, l;
  o === void 0 && (o = P.safeDescriptors), Pb(e, t, n, r);
  var d = r.value;
  if ((i = t.options_) != null && i.bound) {
    var h;
    d = d.bind((h = e.proxy_) != null ? h : e.target_);
  }
  return {
    value: Wr(
      (a = (s = t.options_) == null ? void 0 : s.name) != null ? a : n.toString(),
      d,
      (u = (c = t.options_) == null ? void 0 : c.autoAction) != null ? u : !1,
      // https://github.com/mobxjs/mobx/discussions/3140
      (_ = t.options_) != null && _.bound ? (l = e.proxy_) != null ? l : e.target_ : void 0
    ),
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
function Lh(e, t) {
  return {
    annotationType_: e,
    options_: t,
    make_: Hb,
    extend_: kb
  };
}
function Hb(e, t, n, r) {
  var o;
  if (r === e.target_)
    return this.extend_(e, t, n, !1) === null ? 0 : 2;
  if ((o = this.options_) != null && o.bound && (!cn(e.target_, t) || !Pa(e.target_[t])) && this.extend_(e, t, n, !1) === null)
    return 0;
  if (Pa(n.value))
    return 1;
  var i = Bh(e, this, t, n, !1, !1);
  return Yt(r, t, i), 2;
}
function kb(e, t, n, r) {
  var o, i = Bh(e, this, t, n, (o = this.options_) == null ? void 0 : o.bound);
  return e.defineProperty_(t, i, r);
}
function Mb(e, t, n, r) {
  t.annotationType_, r.value;
}
function Bh(e, t, n, r, o, i) {
  i === void 0 && (i = P.safeDescriptors), Mb(e, t, n, r);
  var a = r.value;
  if (Pa(a) || (a = Ko(a)), o) {
    var s;
    a = a.bind((s = e.proxy_) != null ? s : e.target_), a.isMobXFlow = !0;
  }
  return {
    value: a,
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
function ol(e, t) {
  return {
    annotationType_: e,
    options_: t,
    make_: xb,
    extend_: Lb
  };
}
function xb(e, t, n) {
  return this.extend_(e, t, n, !1) === null ? 0 : 1;
}
function Lb(e, t, n, r) {
  return Bb(e, this, t, n), e.defineComputedProperty_(t, jr({}, this.options_, {
    get: n.get,
    set: n.set
  }), r);
}
function Bb(e, t, n, r) {
  t.annotationType_, r.get;
}
function ls(e, t) {
  return {
    annotationType_: e,
    options_: t,
    make_: Fb,
    extend_: jb
  };
}
function Fb(e, t, n) {
  return this.extend_(e, t, n, !1) === null ? 0 : 1;
}
function jb(e, t, n, r) {
  var o, i;
  return Vb(e, this), e.defineObservableProperty_(t, n.value, (o = (i = this.options_) == null ? void 0 : i.enhancer) != null ? o : Vr, r);
}
function Vb(e, t, n, r) {
  t.annotationType_;
}
var Wb = "true", Xb = /* @__PURE__ */ Fh();
function Fh(e) {
  return {
    annotationType_: Wb,
    options_: e,
    make_: Yb,
    extend_: Kb
  };
}
function Yb(e, t, n, r) {
  var o, i;
  if (n.get)
    return _s.make_(e, t, n, r);
  if (n.set) {
    var a = Wr(t.toString(), n.set);
    return r === e.target_ ? e.defineProperty_(t, {
      configurable: P.safeDescriptors ? e.isPlainObject_ : !0,
      set: a
    }) === null ? 0 : 2 : (Yt(r, t, {
      configurable: !0,
      set: a
    }), 2);
  }
  if (r !== e.target_ && typeof n.value == "function") {
    var s;
    if (wh(n.value)) {
      var u, c = (u = this.options_) != null && u.autoBind ? Ko.bound : Ko;
      return c.make_(e, t, n, r);
    }
    var _ = (s = this.options_) != null && s.autoBind ? Yo.bound : Yo;
    return _.make_(e, t, n, r);
  }
  var l = ((o = this.options_) == null ? void 0 : o.deep) === !1 ? Je.ref : Je;
  if (typeof n.value == "function" && (i = this.options_) != null && i.autoBind) {
    var d;
    n.value = n.value.bind((d = e.proxy_) != null ? d : e.target_);
  }
  return l.make_(e, t, n, r);
}
function Kb(e, t, n, r) {
  var o, i;
  if (n.get)
    return _s.extend_(e, t, n, r);
  if (n.set)
    return e.defineProperty_(t, {
      configurable: P.safeDescriptors ? e.isPlainObject_ : !0,
      set: Wr(t.toString(), n.set)
    }, r);
  if (typeof n.value == "function" && (o = this.options_) != null && o.autoBind) {
    var a;
    n.value = n.value.bind((a = e.proxy_) != null ? a : e.target_);
  }
  var s = ((i = this.options_) == null ? void 0 : i.deep) === !1 ? Je.ref : Je;
  return s.extend_(e, t, n, r);
}
var $b = "observable", zb = "observable.ref", qb = "observable.shallow", Jb = "observable.struct", jh = {
  deep: !0,
  name: void 0,
  defaultDecorator: void 0,
  proxy: !0
};
Object.freeze(jh);
function Bi(e) {
  return e || jh;
}
var Vh = /* @__PURE__ */ ls($b), Qb = /* @__PURE__ */ ls(zb, {
  enhancer: cs
}), Zb = /* @__PURE__ */ ls(qb, {
  enhancer: Sb
}), eO = /* @__PURE__ */ ls(Jb, {
  enhancer: Gb
}), Wh = /* @__PURE__ */ Kt(Vh);
function Fi(e) {
  return e.deep === !0 ? Vr : e.deep === !1 ? cs : nO(e.defaultDecorator);
}
function tO(e) {
  var t;
  return e ? (t = e.defaultDecorator) != null ? t : Fh(e) : void 0;
}
function nO(e) {
  var t, n;
  return e && (t = (n = e.options_) == null ? void 0 : n.enhancer) != null ? t : Vr;
}
function Xh(e, t, n) {
  if (rr(t)) {
    mi(e, t, Vh);
    return;
  }
  return sl(e) ? e : fn(e) ? Je.object(e, t, n) : Array.isArray(e) ? Je.array(e, t) : to(e) ? Je.map(e, t) : pi(e) ? Je.set(e, t) : typeof e == "object" && e !== null ? e : Je.box(e, t);
}
Sh(Xh, Wh);
var rO = {
  box: function(t, n) {
    var r = Bi(n);
    return new Zn(t, Fi(r), r.name, !0, r.equals);
  },
  array: function(t, n) {
    var r = Bi(n);
    return (P.useProxies === !1 || r.proxy === !1 ? ng : KO)(t, Fi(r), r.name);
  },
  map: function(t, n) {
    var r = Bi(n);
    return new bp(t, Fi(r), r.name);
  },
  set: function(t, n) {
    var r = Bi(n);
    return new Rp(t, Fi(r), r.name);
  },
  object: function(t, n, r) {
    return dp(P.useProxies === !1 || r?.proxy === !1 ? Ii({}, r) : VO({}, r), t, n);
  },
  ref: /* @__PURE__ */ Kt(Qb),
  shallow: /* @__PURE__ */ Kt(Zb),
  deep: Wh,
  struct: /* @__PURE__ */ Kt(eO)
}, Je = /* @__PURE__ */ Sh(Xh, rO), Yh = "computed", oO = "computed.struct", Kh = /* @__PURE__ */ ol(Yh), iO = /* @__PURE__ */ ol(oO, {
  equals: Ga.structural
}), _s = function(t, n) {
  if (rr(n))
    return mi(t, n, Kh);
  if (fn(t))
    return Kt(ol(Yh, t));
  var r = fn(n) ? n : {};
  return r.get = t, r.name || (r.name = t.name || ""), new Wo(r);
};
Object.assign(_s, Kh);
_s.struct = /* @__PURE__ */ Kt(iO);
var P_, H_, Da = 0, aO = 1, sO = (P_ = (H_ = /* @__PURE__ */ Sa(function() {
}, "name")) == null ? void 0 : H_.configurable) != null ? P_ : !1, k_ = {
  value: "action",
  configurable: !0,
  writable: !1,
  enumerable: !1
};
function Wr(e, t, n, r) {
  n === void 0 && (n = !1);
  function o() {
    return uO(e, n, t, r || this, arguments);
  }
  return o.isMobxAction = !0, sO && (k_.value = e, Yt(o, "name", k_)), o;
}
function uO(e, t, n, r, o) {
  var i = cO(e, t);
  try {
    return n.apply(r, o);
  } catch (a) {
    throw i.error_ = a, a;
  } finally {
    lO(i);
  }
}
function cO(e, t, n, r) {
  var o = !1, i = 0, a = P.trackingDerivation, s = !t || !a;
  lt();
  var u = P.allowStateChanges;
  s && (no(), u = bi(!0));
  var c = il(!0), _ = {
    runAsAction_: s,
    prevDerivation_: a,
    prevAllowStateChanges_: u,
    prevAllowStateReads_: c,
    notifySpy_: o,
    startTime_: i,
    actionId_: aO++,
    parentActionId_: Da
  };
  return Da = _.actionId_, _;
}
function lO(e) {
  Da !== e.actionId_ && he(30), Da = e.parentActionId_, e.error_ !== void 0 && (P.suppressReactionErrors = !0), Oi(e.prevAllowStateChanges_), Co(e.prevAllowStateReads_), _t(), e.runAsAction_ && Hn(e.prevDerivation_), P.suppressReactionErrors = !1;
}
function _O(e, t) {
  var n = bi(e);
  try {
    return t();
  } finally {
    Oi(n);
  }
}
function bi(e) {
  var t = P.allowStateChanges;
  return P.allowStateChanges = e, t;
}
function Oi(e) {
  P.allowStateChanges = e;
}
var $h;
$h = Symbol.toPrimitive;
var Zn = /* @__PURE__ */ function(e) {
  kh(t, e);
  function t(r, o, i, a, s) {
    var u;
    return i === void 0 && (i = "ObservableValue"), s === void 0 && (s = Ga.default), u = e.call(this, i) || this, u.enhancer = void 0, u.name_ = void 0, u.equals = void 0, u.hasUnreportedChange_ = !1, u.interceptors_ = void 0, u.changeListeners_ = void 0, u.value_ = void 0, u.dehancer = void 0, u.enhancer = o, u.name_ = i, u.equals = s, u.value_ = o(r, void 0, i), u;
  }
  var n = t.prototype;
  return n.dehanceValue = function(o) {
    return this.dehancer !== void 0 ? this.dehancer(o) : o;
  }, n.set = function(o) {
    this.value_, o = this.prepareNewValue_(o), o !== P.UNCHANGED && this.setNewValue_(o);
  }, n.prepareNewValue_ = function(o) {
    if (gt(this)) {
      var i = Rt(this, {
        object: this,
        type: $t,
        newValue: o
      });
      if (!i)
        return P.UNCHANGED;
      o = i.newValue;
    }
    return o = this.enhancer(o, this.value_, this.name_), this.equals(this.value_, o) ? P.UNCHANGED : o;
  }, n.setNewValue_ = function(o) {
    var i = this.value_;
    this.value_ = o, this.reportChanged(), Pt(this) && Ht(this, {
      type: $t,
      object: this,
      newValue: o,
      oldValue: i
    });
  }, n.get = function() {
    return this.reportObserved(), this.dehanceValue(this.value_);
  }, n.intercept_ = function(o) {
    return Ri(this, o);
  }, n.observe_ = function(o, i) {
    return i && o({
      observableKind: "value",
      debugObjectName: this.name_,
      object: this,
      type: $t,
      newValue: this.value_,
      oldValue: void 0
    }), vi(this, o);
  }, n.raw = function() {
    return this.value_;
  }, n.toJSON = function() {
    return this.get();
  }, n.toString = function() {
    return this.name_ + "[" + this.value_ + "]";
  }, n.valueOf = function() {
    return Hh(this.get());
  }, n[$h] = function() {
    return this.valueOf();
  }, t;
}(Ti), dO = /* @__PURE__ */ Xn("ObservableValue", Zn), zh;
zh = Symbol.toPrimitive;
var Wo = /* @__PURE__ */ function() {
  function e(n) {
    this.dependenciesState_ = fe.NOT_TRACKING_, this.observing_ = [], this.newObserving_ = null, this.isBeingObserved_ = !1, this.isPendingUnobservation_ = !1, this.observers_ = /* @__PURE__ */ new Set(), this.diffValue_ = 0, this.runId_ = 0, this.lastAccessedBy_ = 0, this.lowestObserverState_ = fe.UP_TO_DATE_, this.unboundDepsCount_ = 0, this.value_ = new wa(null), this.name_ = void 0, this.triggeredBy_ = void 0, this.isComputing_ = !1, this.isRunningSetter_ = !1, this.derivation = void 0, this.setter_ = void 0, this.isTracing_ = Ca.NONE, this.scope_ = void 0, this.equals_ = void 0, this.requiresReaction_ = void 0, this.keepAlive_ = void 0, this.onBOL = void 0, this.onBUOL = void 0, n.get || he(31), this.derivation = n.get, this.name_ = n.name || "ComputedValue", n.set && (this.setter_ = Wr("ComputedValue-setter", n.set)), this.equals_ = n.equals || (n.compareStructural || n.struct ? Ga.structural : Ga.default), this.scope_ = n.context, this.requiresReaction_ = n.requiresReaction, this.keepAlive_ = !!n.keepAlive;
  }
  var t = e.prototype;
  return t.onBecomeStale_ = function() {
    TO(this);
  }, t.onBO = function() {
    this.onBOL && this.onBOL.forEach(function(r) {
      return r();
    });
  }, t.onBUO = function() {
    this.onBUOL && this.onBUOL.forEach(function(r) {
      return r();
    });
  }, t.get = function() {
    if (this.isComputing_ && he(32, this.name_, this.derivation), P.inBatch === 0 && // !globalState.trackingDerivatpion &&
    this.observers_.size === 0 && !this.keepAlive_)
      Wu(this) && (this.warnAboutUntrackedRead_(), lt(), this.value_ = this.computeValue_(!1), _t());
    else if (np(this), Wu(this)) {
      var r = P.trackingContext;
      this.keepAlive_ && !r && (P.trackingContext = this), this.trackAndCompute() && mO(this), P.trackingContext = r;
    }
    var o = this.value_;
    if (ra(o))
      throw o.cause;
    return o;
  }, t.set = function(r) {
    if (this.setter_) {
      this.isRunningSetter_ && he(33, this.name_), this.isRunningSetter_ = !0;
      try {
        this.setter_.call(this.scope_, r);
      } finally {
        this.isRunningSetter_ = !1;
      }
    } else
      he(34, this.name_);
  }, t.trackAndCompute = function() {
    var r = this.value_, o = (
      /* see #1208 */
      this.dependenciesState_ === fe.NOT_TRACKING_
    ), i = this.computeValue_(!0), a = o || ra(r) || ra(i) || !this.equals_(r, i);
    return a && (this.value_ = i), a;
  }, t.computeValue_ = function(r) {
    this.isComputing_ = !0;
    var o = bi(!1), i;
    if (r)
      i = qh(this, this.derivation, this.scope_);
    else if (P.disableErrorBoundaries === !0)
      i = this.derivation.call(this.scope_);
    else
      try {
        i = this.derivation.call(this.scope_);
      } catch (a) {
        i = new wa(a);
      }
    return Oi(o), this.isComputing_ = !1, i;
  }, t.suspend_ = function() {
    this.keepAlive_ || (Xu(this), this.value_ = void 0);
  }, t.observe_ = function(r, o) {
    var i = this, a = !0, s = void 0;
    return yO(function() {
      var u = i.get();
      if (!a || o) {
        var c = no();
        r({
          observableKind: "computed",
          debugObjectName: i.name_,
          type: $t,
          object: i,
          newValue: u,
          oldValue: s
        }), Hn(c);
      }
      a = !1, s = u;
    });
  }, t.warnAboutUntrackedRead_ = function() {
  }, t.toString = function() {
    return this.name_ + "[" + this.derivation.toString() + "]";
  }, t.valueOf = function() {
    return Hh(this.get());
  }, t[zh] = function() {
    return this.valueOf();
  }, e;
}(), gi = /* @__PURE__ */ Xn("ComputedValue", Wo), fe;
(function(e) {
  e[e.NOT_TRACKING_ = -1] = "NOT_TRACKING_", e[e.UP_TO_DATE_ = 0] = "UP_TO_DATE_", e[e.POSSIBLY_STALE_ = 1] = "POSSIBLY_STALE_", e[e.STALE_ = 2] = "STALE_";
})(fe || (fe = {}));
var Ca;
(function(e) {
  e[e.NONE = 0] = "NONE", e[e.LOG = 1] = "LOG", e[e.BREAK = 2] = "BREAK";
})(Ca || (Ca = {}));
var wa = function(t) {
  this.cause = void 0, this.cause = t;
};
function ra(e) {
  return e instanceof wa;
}
function Wu(e) {
  switch (e.dependenciesState_) {
    case fe.UP_TO_DATE_:
      return !1;
    case fe.NOT_TRACKING_:
    case fe.STALE_:
      return !0;
    case fe.POSSIBLY_STALE_: {
      for (var t = il(!0), n = no(), r = e.observing_, o = r.length, i = 0; i < o; i++) {
        var a = r[i];
        if (gi(a)) {
          if (P.disableErrorBoundaries)
            a.get();
          else
            try {
              a.get();
            } catch {
              return Hn(n), Co(t), !0;
            }
          if (e.dependenciesState_ === fe.STALE_)
            return Hn(n), Co(t), !0;
        }
      }
      return Qh(e), Hn(n), Co(t), !1;
    }
  }
}
function qh(e, t, n) {
  var r = il(!0);
  Qh(e), e.newObserving_ = new Array(e.observing_.length + 100), e.unboundDepsCount_ = 0, e.runId_ = ++P.runId;
  var o = P.trackingDerivation;
  P.trackingDerivation = e, P.inBatch++;
  var i;
  if (P.disableErrorBoundaries === !0)
    i = t.call(n);
  else
    try {
      i = t.call(n);
    } catch (a) {
      i = new wa(a);
    }
  return P.inBatch--, P.trackingDerivation = o, fO(e), Co(r), i;
}
function fO(e) {
  for (var t = e.observing_, n = e.observing_ = e.newObserving_, r = fe.UP_TO_DATE_, o = 0, i = e.unboundDepsCount_, a = 0; a < i; a++) {
    var s = n[a];
    s.diffValue_ === 0 && (s.diffValue_ = 1, o !== a && (n[o] = s), o++), s.dependenciesState_ > r && (r = s.dependenciesState_);
  }
  for (n.length = o, e.newObserving_ = null, i = t.length; i--; ) {
    var u = t[i];
    u.diffValue_ === 0 && ep(u, e), u.diffValue_ = 0;
  }
  for (; o--; ) {
    var c = n[o];
    c.diffValue_ === 1 && (c.diffValue_ = 0, pO(c, e));
  }
  r !== fe.UP_TO_DATE_ && (e.dependenciesState_ = r, e.onBecomeStale_());
}
function Xu(e) {
  var t = e.observing_;
  e.observing_ = [];
  for (var n = t.length; n--; )
    ep(t[n], e);
  e.dependenciesState_ = fe.NOT_TRACKING_;
}
function Jh(e) {
  var t = no();
  try {
    return e();
  } finally {
    Hn(t);
  }
}
function no() {
  var e = P.trackingDerivation;
  return P.trackingDerivation = null, e;
}
function Hn(e) {
  P.trackingDerivation = e;
}
function il(e) {
  var t = P.allowStateReads;
  return P.allowStateReads = e, t;
}
function Co(e) {
  P.allowStateReads = e;
}
function Qh(e) {
  if (e.dependenciesState_ !== fe.UP_TO_DATE_) {
    e.dependenciesState_ = fe.UP_TO_DATE_;
    for (var t = e.observing_, n = t.length; n--; )
      t[n].lowestObserverState_ = fe.UP_TO_DATE_;
  }
}
var oa = function() {
  this.version = 6, this.UNCHANGED = {}, this.trackingDerivation = null, this.trackingContext = null, this.runId = 0, this.mobxGuid = 0, this.inBatch = 0, this.pendingUnobservations = [], this.pendingReactions = [], this.isRunningReactions = !1, this.allowStateChanges = !1, this.allowStateReads = !0, this.enforceActions = !0, this.spyListeners = [], this.globalReactionErrorHandlers = [], this.computedRequiresReaction = !1, this.reactionRequiresObservable = !1, this.observableRequiresReaction = !1, this.disableErrorBoundaries = !1, this.suppressReactionErrors = !1, this.useProxies = !0, this.verifyProxies = !1, this.safeDescriptors = !0, this.stateVersion = Number.MIN_SAFE_INTEGER;
}, ia = !0, Zh = !1, P = /* @__PURE__ */ function() {
  var e = /* @__PURE__ */ tl();
  return e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (ia = !1), e.__mobxGlobals && e.__mobxGlobals.version !== new oa().version && (ia = !1), ia ? e.__mobxGlobals ? (e.__mobxInstanceCount += 1, e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}), e.__mobxGlobals) : (e.__mobxInstanceCount = 1, e.__mobxGlobals = /* @__PURE__ */ new oa()) : (setTimeout(function() {
    Zh || he(35);
  }, 1), new oa());
}();
function hO() {
  if ((P.pendingReactions.length || P.inBatch || P.isRunningReactions) && he(36), Zh = !0, ia) {
    var e = tl();
    --e.__mobxInstanceCount === 0 && (e.__mobxGlobals = void 0), P = new oa();
  }
}
function pO(e, t) {
  e.observers_.add(t), e.lowestObserverState_ > t.dependenciesState_ && (e.lowestObserverState_ = t.dependenciesState_);
}
function ep(e, t) {
  e.observers_.delete(t), e.observers_.size === 0 && tp(e);
}
function tp(e) {
  e.isPendingUnobservation_ === !1 && (e.isPendingUnobservation_ = !0, P.pendingUnobservations.push(e));
}
function lt() {
  P.inBatch++;
}
function _t() {
  if (--P.inBatch === 0) {
    op();
    for (var e = P.pendingUnobservations, t = 0; t < e.length; t++) {
      var n = e[t];
      n.isPendingUnobservation_ = !1, n.observers_.size === 0 && (n.isBeingObserved_ && (n.isBeingObserved_ = !1, n.onBUO()), n instanceof Wo && n.suspend_());
    }
    P.pendingUnobservations = [];
  }
}
function np(e) {
  var t = P.trackingDerivation;
  return t !== null ? (t.runId_ !== e.lastAccessedBy_ && (e.lastAccessedBy_ = t.runId_, t.newObserving_[t.unboundDepsCount_++] = e, !e.isBeingObserved_ && P.trackingContext && (e.isBeingObserved_ = !0, e.onBO())), e.isBeingObserved_) : (e.observers_.size === 0 && P.inBatch > 0 && tp(e), !1);
}
function rp(e) {
  e.lowestObserverState_ !== fe.STALE_ && (e.lowestObserverState_ = fe.STALE_, e.observers_.forEach(function(t) {
    t.dependenciesState_ === fe.UP_TO_DATE_ && t.onBecomeStale_(), t.dependenciesState_ = fe.STALE_;
  }));
}
function mO(e) {
  e.lowestObserverState_ !== fe.STALE_ && (e.lowestObserverState_ = fe.STALE_, e.observers_.forEach(function(t) {
    t.dependenciesState_ === fe.POSSIBLY_STALE_ ? t.dependenciesState_ = fe.STALE_ : t.dependenciesState_ === fe.UP_TO_DATE_ && (e.lowestObserverState_ = fe.UP_TO_DATE_);
  }));
}
function TO(e) {
  e.lowestObserverState_ === fe.UP_TO_DATE_ && (e.lowestObserverState_ = fe.POSSIBLY_STALE_, e.observers_.forEach(function(t) {
    t.dependenciesState_ === fe.UP_TO_DATE_ && (t.dependenciesState_ = fe.POSSIBLY_STALE_, t.onBecomeStale_());
  }));
}
var Xo = /* @__PURE__ */ function() {
  function e(n, r, o, i) {
    n === void 0 && (n = "Reaction"), this.name_ = void 0, this.onInvalidate_ = void 0, this.errorHandler_ = void 0, this.requiresObservable_ = void 0, this.observing_ = [], this.newObserving_ = [], this.dependenciesState_ = fe.NOT_TRACKING_, this.diffValue_ = 0, this.runId_ = 0, this.unboundDepsCount_ = 0, this.isDisposed_ = !1, this.isScheduled_ = !1, this.isTrackPending_ = !1, this.isRunning_ = !1, this.isTracing_ = Ca.NONE, this.name_ = n, this.onInvalidate_ = r, this.errorHandler_ = o, this.requiresObservable_ = i;
  }
  var t = e.prototype;
  return t.onBecomeStale_ = function() {
    this.schedule_();
  }, t.schedule_ = function() {
    this.isScheduled_ || (this.isScheduled_ = !0, P.pendingReactions.push(this), op());
  }, t.isScheduled = function() {
    return this.isScheduled_;
  }, t.runReaction_ = function() {
    if (!this.isDisposed_) {
      lt(), this.isScheduled_ = !1;
      var r = P.trackingContext;
      if (P.trackingContext = this, Wu(this)) {
        this.isTrackPending_ = !0;
        try {
          this.onInvalidate_();
        } catch (o) {
          this.reportExceptionInDerivation_(o);
        }
      }
      P.trackingContext = r, _t();
    }
  }, t.track = function(r) {
    if (!this.isDisposed_) {
      lt(), this.isRunning_ = !0;
      var o = P.trackingContext;
      P.trackingContext = this;
      var i = qh(this, r, void 0);
      P.trackingContext = o, this.isRunning_ = !1, this.isTrackPending_ = !1, this.isDisposed_ && Xu(this), ra(i) && this.reportExceptionInDerivation_(i.cause), _t();
    }
  }, t.reportExceptionInDerivation_ = function(r) {
    var o = this;
    if (this.errorHandler_) {
      this.errorHandler_(r, this);
      return;
    }
    if (P.disableErrorBoundaries)
      throw r;
    var i = "[mobx] uncaught error in '" + this + "'";
    P.suppressReactionErrors || console.error(i, r), P.globalReactionErrorHandlers.forEach(function(a) {
      return a(r, o);
    });
  }, t.dispose = function() {
    this.isDisposed_ || (this.isDisposed_ = !0, this.isRunning_ || (lt(), Xu(this), _t()));
  }, t.getDisposer_ = function(r) {
    var o = this, i = function a() {
      o.dispose(), r == null || r.removeEventListener == null || r.removeEventListener("abort", a);
    };
    return r == null || r.addEventListener == null || r.addEventListener("abort", i), i[$] = this, i;
  }, t.toString = function() {
    return "Reaction[" + this.name_ + "]";
  }, t.trace = function(r) {
  }, e;
}(), EO = 100, Yu = function(t) {
  return t();
};
function op() {
  P.inBatch > 0 || P.isRunningReactions || Yu(bO);
}
function bO() {
  P.isRunningReactions = !0;
  for (var e = P.pendingReactions, t = 0; e.length > 0; ) {
    ++t === EO && (console.error("[mobx] cycle in reaction: " + e[0]), e.splice(0));
    for (var n = e.splice(0), r = 0, o = n.length; r < o; r++)
      n[r].runReaction_();
  }
  P.isRunningReactions = !1;
}
var Ua = /* @__PURE__ */ Xn("Reaction", Xo);
function OO(e) {
  var t = Yu;
  Yu = function(r) {
    return e(function() {
      return t(r);
    });
  };
}
function wo() {
  return !1;
}
function gO(e) {
  return console.warn("[mobx.spy] Is a no-op in production builds"), function() {
  };
}
var ip = "action", RO = "action.bound", ap = "autoAction", vO = "autoAction.bound", NO = "<unnamed action>", sp = /* @__PURE__ */ Ei(ip), IO = /* @__PURE__ */ Ei(RO, {
  bound: !0
}), up = /* @__PURE__ */ Ei(ap, {
  autoAction: !0
}), AO = /* @__PURE__ */ Ei(vO, {
  autoAction: !0,
  bound: !0
});
function cp(e) {
  var t = function(r, o) {
    if (kt(r))
      return Wr(r.name || NO, r, e);
    if (kt(o))
      return Wr(r, o, e);
    if (rr(o))
      return mi(r, o, e ? up : sp);
    if (rr(r))
      return Kt(Ei(e ? ap : ip, {
        name: r,
        autoAction: e
      }));
  };
  return t;
}
var Nr = /* @__PURE__ */ cp(!1);
Object.assign(Nr, sp);
var Yo = /* @__PURE__ */ cp(!0);
Object.assign(Yo, up);
Nr.bound = /* @__PURE__ */ Kt(IO);
Yo.bound = /* @__PURE__ */ Kt(AO);
function al(e) {
  return kt(e) && e.isMobxAction === !0;
}
function yO(e, t) {
  var n, r, o, i, a;
  t === void 0 && (t = Gh);
  var s = (n = (r = t) == null ? void 0 : r.name) != null ? n : "Autorun", u = !t.scheduler && !t.delay, c;
  if (u)
    c = new Xo(s, function() {
      this.track(d);
    }, t.onError, t.requiresObservable);
  else {
    var _ = GO(t), l = !1;
    c = new Xo(s, function() {
      l || (l = !0, _(function() {
        l = !1, c.isDisposed_ || c.track(d);
      }));
    }, t.onError, t.requiresObservable);
  }
  function d() {
    e(c);
  }
  return (o = t) != null && (i = o.signal) != null && i.aborted || c.schedule_(), c.getDisposer_((a = t) == null ? void 0 : a.signal);
}
var SO = function(t) {
  return t();
};
function GO(e) {
  return e.scheduler ? e.scheduler : e.delay ? function(t) {
    return setTimeout(t, e.delay);
  } : SO;
}
var DO = "onBO", CO = "onBUO";
function wO(e, t, n) {
  return _p(DO, e, t, n);
}
function lp(e, t, n) {
  return _p(CO, e, t, n);
}
function _p(e, t, n, r) {
  var o = typeof r == "function" ? Yr(t, n) : Yr(t), i = kt(r) ? r : n, a = e + "L";
  return o[a] ? o[a].add(i) : o[a] = /* @__PURE__ */ new Set([i]), function() {
    var s = o[a];
    s && (s.delete(i), s.size === 0 && delete o[a]);
  };
}
var UO = "never", ji = "always", PO = "observed";
function HO(e) {
  e.isolateGlobalState === !0 && hO();
  var t = e.useProxies, n = e.enforceActions;
  if (t !== void 0 && (P.useProxies = t === ji ? !0 : t === UO ? !1 : typeof Proxy < "u"), t === "ifavailable" && (P.verifyProxies = !0), n !== void 0) {
    var r = n === ji ? ji : n === PO;
    P.enforceActions = r, P.allowStateChanges = !(r === !0 || r === ji);
  }
  ["computedRequiresReaction", "reactionRequiresObservable", "observableRequiresReaction", "disableErrorBoundaries", "safeDescriptors"].forEach(function(o) {
    o in e && (P[o] = !!e[o]);
  }), P.allowStateReads = !P.observableRequiresReaction, e.reactionScheduler && OO(e.reactionScheduler);
}
function dp(e, t, n, r) {
  var o = bb(t), i = Ii(e, r)[$];
  lt();
  try {
    Fr(o).forEach(function(a) {
      i.extend_(
        a,
        o[a],
        // must pass "undefined" for { key: undefined }
        n && a in n ? n[a] : !0
      );
    });
  } finally {
    _t();
  }
  return e;
}
function kO(e, t) {
  return fp(Yr(e, t));
}
function fp(e) {
  var t = {
    name: e.name_
  };
  return e.observing_ && e.observing_.length > 0 && (t.dependencies = MO(e.observing_).map(fp)), t;
}
function MO(e) {
  return Array.from(new Set(e));
}
var xO = 0;
function hp() {
  this.message = "FLOW_CANCELLED";
}
hp.prototype = /* @__PURE__ */ Object.create(Error.prototype);
var M_ = /* @__PURE__ */ Lh("flow"), LO = /* @__PURE__ */ Lh("flow.bound", {
  bound: !0
}), Ko = /* @__PURE__ */ Object.assign(function(t, n) {
  if (rr(n))
    return mi(t, n, M_);
  var r = t, o = r.name || "<unnamed flow>", i = function() {
    var s = this, u = arguments, c = ++xO, _ = Nr(o + " - runid: " + c + " - init", r).apply(s, u), l, d = void 0, h = new Promise(function(f, p) {
      var m = 0;
      l = p;
      function b(g) {
        d = void 0;
        var O;
        try {
          O = Nr(o + " - runid: " + c + " - yield " + m++, _.next).call(_, g);
        } catch (I) {
          return p(I);
        }
        E(O);
      }
      function T(g) {
        d = void 0;
        var O;
        try {
          O = Nr(o + " - runid: " + c + " - yield " + m++, _.throw).call(_, g);
        } catch (I) {
          return p(I);
        }
        E(O);
      }
      function E(g) {
        if (kt(g?.then)) {
          g.then(E, p);
          return;
        }
        return g.done ? f(g.value) : (d = Promise.resolve(g.value), d.then(b, T));
      }
      b(void 0);
    });
    return h.cancel = Nr(o + " - runid: " + c + " - cancel", function() {
      try {
        d && x_(d);
        var f = _.return(void 0), p = Promise.resolve(f.value);
        p.then(Rr, Rr), x_(p), l(new hp());
      } catch (m) {
        l(m);
      }
    }), h;
  };
  return i.isMobXFlow = !0, i;
}, M_);
Ko.bound = /* @__PURE__ */ Kt(LO);
function x_(e) {
  kt(e.cancel) && e.cancel();
}
function Pa(e) {
  return e?.isMobXFlow === !0;
}
function BO(e, t) {
  return e ? t !== void 0 ? Xr(e) ? e[$].values_.has(t) : !1 : Xr(e) || !!e[$] || rl(e) || Ua(e) || gi(e) : !1;
}
function sl(e) {
  return BO(e);
}
function FO(e) {
  if (Xr(e))
    return e[$].ownKeys_();
  he(38);
}
function Vi(e, t, n) {
  return e.set(t, n), n;
}
function Er(e, t) {
  if (e == null || typeof e != "object" || e instanceof Date || !sl(e))
    return e;
  if (dO(e) || gi(e))
    return Er(e.get(), t);
  if (t.has(e))
    return t.get(e);
  if (Ni(e)) {
    var n = Vi(t, e, new Array(e.length));
    return e.forEach(function(a, s) {
      n[s] = Er(a, t);
    }), n;
  }
  if (ur(e)) {
    var r = Vi(t, e, /* @__PURE__ */ new Set());
    return e.forEach(function(a) {
      r.add(Er(a, t));
    }), r;
  }
  if ($n(e)) {
    var o = Vi(t, e, /* @__PURE__ */ new Map());
    return e.forEach(function(a, s) {
      o.set(s, Er(a, t));
    }), o;
  } else {
    var i = Vi(t, e, {});
    return FO(e).forEach(function(a) {
      fi.propertyIsEnumerable.call(e, a) && (i[a] = Er(e[a], t));
    }), i;
  }
}
function pp(e, t) {
  return Er(e, /* @__PURE__ */ new Map());
}
function on(e, t) {
  t === void 0 && (t = void 0), lt();
  try {
    return e.apply(t);
  } finally {
    _t();
  }
}
function fr(e) {
  return e[$];
}
var jO = {
  has: function(t, n) {
    return fr(t).has_(n);
  },
  get: function(t, n) {
    return fr(t).get_(n);
  },
  set: function(t, n, r) {
    var o;
    return rr(n) ? (o = fr(t).set_(n, r, !0)) != null ? o : !0 : !1;
  },
  deleteProperty: function(t, n) {
    var r;
    return rr(n) ? (r = fr(t).delete_(n, !0)) != null ? r : !0 : !1;
  },
  defineProperty: function(t, n, r) {
    var o;
    return (o = fr(t).defineProperty_(n, r)) != null ? o : !0;
  },
  ownKeys: function(t) {
    return fr(t).ownKeys_();
  },
  preventExtensions: function(t) {
    he(13);
  }
};
function VO(e, t) {
  var n, r;
  return Dh(), e = Ii(e, t), (r = (n = e[$]).proxy_) != null ? r : n.proxy_ = new Proxy(e, jO);
}
function gt(e) {
  return e.interceptors_ !== void 0 && e.interceptors_.length > 0;
}
function Ri(e, t) {
  var n = e.interceptors_ || (e.interceptors_ = []);
  return n.push(t), Ch(function() {
    var r = n.indexOf(t);
    r !== -1 && n.splice(r, 1);
  });
}
function Rt(e, t) {
  var n = no();
  try {
    for (var r = [].concat(e.interceptors_ || []), o = 0, i = r.length; o < i && (t = r[o](t), t && !t.type && he(14), !!t); o++)
      ;
    return t;
  } finally {
    Hn(n);
  }
}
function Pt(e) {
  return e.changeListeners_ !== void 0 && e.changeListeners_.length > 0;
}
function vi(e, t) {
  var n = e.changeListeners_ || (e.changeListeners_ = []);
  return n.push(t), Ch(function() {
    var r = n.indexOf(t);
    r !== -1 && n.splice(r, 1);
  });
}
function Ht(e, t) {
  var n = no(), r = e.changeListeners_;
  if (r) {
    r = r.slice();
    for (var o = 0, i = r.length; o < i; o++)
      r[o](t);
    Hn(n);
  }
}
function WO(e, t, n) {
  var r = Ii(e, n)[$];
  lt();
  try {
    var o;
    (o = t) != null || (t = vb(e)), Fr(t).forEach(function(i) {
      return r.make_(i, t[i]);
    });
  } finally {
    _t();
  }
  return e;
}
var ru = /* @__PURE__ */ Symbol("mobx-keys");
function Yn(e, t, n) {
  if (fn(e))
    return dp(e, e, t, n);
  var r = Ii(e, n)[$];
  if (!e[ru]) {
    var o = Object.getPrototypeOf(e), i = new Set([].concat(Fr(e), Fr(o)));
    i.delete("constructor"), i.delete($), hi(o, ru, i);
  }
  lt();
  try {
    e[ru].forEach(function(a) {
      return r.make_(
        a,
        // must pass "undefined" for { key: undefined }
        t && a in t ? t[a] : !0
      );
    });
  } finally {
    _t();
  }
  return e;
}
var L_ = "splice", $t = "update", XO = 1e4, YO = {
  get: function(t, n) {
    var r = t[$];
    return n === $ ? r : n === "length" ? r.getArrayLength_() : typeof n == "string" && !isNaN(n) ? r.get_(parseInt(n)) : cn(Ha, n) ? Ha[n] : t[n];
  },
  set: function(t, n, r) {
    var o = t[$];
    return n === "length" && o.setArrayLength_(r), typeof n == "symbol" || isNaN(n) ? t[n] = r : o.set_(parseInt(n), r), !0;
  },
  preventExtensions: function() {
    he(15);
  }
}, ul = /* @__PURE__ */ function() {
  function e(n, r, o, i) {
    n === void 0 && (n = "ObservableArray"), this.owned_ = void 0, this.legacyMode_ = void 0, this.atom_ = void 0, this.values_ = [], this.interceptors_ = void 0, this.changeListeners_ = void 0, this.enhancer_ = void 0, this.dehancer = void 0, this.proxy_ = void 0, this.lastKnownLength_ = 0, this.owned_ = o, this.legacyMode_ = i, this.atom_ = new Ti(n), this.enhancer_ = function(a, s) {
      return r(a, s, "ObservableArray[..]");
    };
  }
  var t = e.prototype;
  return t.dehanceValue_ = function(r) {
    return this.dehancer !== void 0 ? this.dehancer(r) : r;
  }, t.dehanceValues_ = function(r) {
    return this.dehancer !== void 0 && r.length > 0 ? r.map(this.dehancer) : r;
  }, t.intercept_ = function(r) {
    return Ri(this, r);
  }, t.observe_ = function(r, o) {
    return o === void 0 && (o = !1), o && r({
      observableKind: "array",
      object: this.proxy_,
      debugObjectName: this.atom_.name_,
      type: "splice",
      index: 0,
      added: this.values_.slice(),
      addedCount: this.values_.length,
      removed: [],
      removedCount: 0
    }), vi(this, r);
  }, t.getArrayLength_ = function() {
    return this.atom_.reportObserved(), this.values_.length;
  }, t.setArrayLength_ = function(r) {
    (typeof r != "number" || isNaN(r) || r < 0) && he("Out of range: " + r);
    var o = this.values_.length;
    if (r !== o)
      if (r > o) {
        for (var i = new Array(r - o), a = 0; a < r - o; a++)
          i[a] = void 0;
        this.spliceWithArray_(o, 0, i);
      } else
        this.spliceWithArray_(r, o - r);
  }, t.updateArrayLength_ = function(r, o) {
    r !== this.lastKnownLength_ && he(16), this.lastKnownLength_ += o, this.legacyMode_ && o > 0 && Ap(r + o + 1);
  }, t.spliceWithArray_ = function(r, o, i) {
    var a = this;
    this.atom_;
    var s = this.values_.length;
    if (r === void 0 ? r = 0 : r > s ? r = s : r < 0 && (r = Math.max(0, s + r)), arguments.length === 1 ? o = s - r : o == null ? o = 0 : o = Math.max(0, Math.min(o, s - r)), i === void 0 && (i = ju), gt(this)) {
      var u = Rt(this, {
        object: this.proxy_,
        type: L_,
        index: r,
        removedCount: o,
        added: i
      });
      if (!u)
        return ju;
      o = u.removedCount, i = u.added;
    }
    if (i = i.length === 0 ? i : i.map(function(l) {
      return a.enhancer_(l, void 0);
    }), this.legacyMode_) {
      var c = i.length - o;
      this.updateArrayLength_(s, c);
    }
    var _ = this.spliceItemsIntoValues_(r, o, i);
    return (o !== 0 || i.length !== 0) && this.notifyArraySplice_(r, i, _), this.dehanceValues_(_);
  }, t.spliceItemsIntoValues_ = function(r, o, i) {
    if (i.length < XO) {
      var a;
      return (a = this.values_).splice.apply(a, [r, o].concat(i));
    } else {
      var s = this.values_.slice(r, r + o), u = this.values_.slice(r + o);
      this.values_.length += i.length - o;
      for (var c = 0; c < i.length; c++)
        this.values_[r + c] = i[c];
      for (var _ = 0; _ < u.length; _++)
        this.values_[r + i.length + _] = u[_];
      return s;
    }
  }, t.notifyArrayChildUpdate_ = function(r, o, i) {
    var a = !this.owned_ && wo(), s = Pt(this), u = s || a ? {
      observableKind: "array",
      object: this.proxy_,
      type: $t,
      debugObjectName: this.atom_.name_,
      index: r,
      newValue: o,
      oldValue: i
    } : null;
    this.atom_.reportChanged(), s && Ht(this, u);
  }, t.notifyArraySplice_ = function(r, o, i) {
    var a = !this.owned_ && wo(), s = Pt(this), u = s || a ? {
      observableKind: "array",
      object: this.proxy_,
      debugObjectName: this.atom_.name_,
      type: L_,
      index: r,
      removed: i,
      added: o,
      removedCount: i.length,
      addedCount: o.length
    } : null;
    this.atom_.reportChanged(), s && Ht(this, u);
  }, t.get_ = function(r) {
    if (this.legacyMode_ && r >= this.values_.length) {
      console.warn("[mobx] Out of bounds read: " + r);
      return;
    }
    return this.atom_.reportObserved(), this.dehanceValue_(this.values_[r]);
  }, t.set_ = function(r, o) {
    var i = this.values_;
    if (this.legacyMode_ && r > i.length && he(17, r, i.length), r < i.length) {
      this.atom_;
      var a = i[r];
      if (gt(this)) {
        var s = Rt(this, {
          type: $t,
          object: this.proxy_,
          index: r,
          newValue: o
        });
        if (!s)
          return;
        o = s.newValue;
      }
      o = this.enhancer_(o, a);
      var u = o !== a;
      u && (i[r] = o, this.notifyArrayChildUpdate_(r, o, a));
    } else {
      for (var c = new Array(r + 1 - i.length), _ = 0; _ < c.length - 1; _++)
        c[_] = void 0;
      c[c.length - 1] = o, this.spliceWithArray_(i.length, 0, c);
    }
  }, e;
}();
function KO(e, t, n, r) {
  n === void 0 && (n = "ObservableArray"), r === void 0 && (r = !1), Dh();
  var o = new ul(n, t, r, !1);
  Uh(o.values_, $, o);
  var i = new Proxy(o.values_, YO);
  if (o.proxy_ = i, e && e.length) {
    var a = bi(!0);
    o.spliceWithArray_(0, 0, e), Oi(a);
  }
  return i;
}
var Ha = {
  clear: function() {
    return this.splice(0);
  },
  replace: function(t) {
    var n = this[$];
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
    for (var r = arguments.length, o = new Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++)
      o[i - 2] = arguments[i];
    var a = this[$];
    switch (arguments.length) {
      case 0:
        return [];
      case 1:
        return a.spliceWithArray_(t);
      case 2:
        return a.spliceWithArray_(t, n);
    }
    return a.spliceWithArray_(t, n, o);
  },
  spliceWithArray: function(t, n, r) {
    return this[$].spliceWithArray_(t, n, r);
  },
  push: function() {
    for (var t = this[$], n = arguments.length, r = new Array(n), o = 0; o < n; o++)
      r[o] = arguments[o];
    return t.spliceWithArray_(t.values_.length, 0, r), t.values_.length;
  },
  pop: function() {
    return this.splice(Math.max(this[$].values_.length - 1, 0), 1)[0];
  },
  shift: function() {
    return this.splice(0, 1)[0];
  },
  unshift: function() {
    for (var t = this[$], n = arguments.length, r = new Array(n), o = 0; o < n; o++)
      r[o] = arguments[o];
    return t.spliceWithArray_(0, 0, r), t.values_.length;
  },
  reverse: function() {
    return P.trackingDerivation && he(37, "reverse"), this.replace(this.slice().reverse()), this;
  },
  sort: function() {
    P.trackingDerivation && he(37, "sort");
    var t = this.slice();
    return t.sort.apply(t, arguments), this.replace(t), this;
  },
  remove: function(t) {
    var n = this[$], r = n.dehanceValues_(n.values_).indexOf(t);
    return r > -1 ? (this.splice(r, 1), !0) : !1;
  }
};
Ve("concat", mn);
Ve("flat", mn);
Ve("includes", mn);
Ve("indexOf", mn);
Ve("join", mn);
Ve("lastIndexOf", mn);
Ve("slice", mn);
Ve("toString", mn);
Ve("toLocaleString", mn);
Ve("every", Kn);
Ve("filter", Kn);
Ve("find", Kn);
Ve("findIndex", Kn);
Ve("flatMap", Kn);
Ve("forEach", Kn);
Ve("map", Kn);
Ve("some", Kn);
Ve("reduce", mp);
Ve("reduceRight", mp);
function Ve(e, t) {
  typeof Array.prototype[e] == "function" && (Ha[e] = t(e));
}
function mn(e) {
  return function() {
    var t = this[$];
    t.atom_.reportObserved();
    var n = t.dehanceValues_(t.values_);
    return n[e].apply(n, arguments);
  };
}
function Kn(e) {
  return function(t, n) {
    var r = this, o = this[$];
    o.atom_.reportObserved();
    var i = o.dehanceValues_(o.values_);
    return i[e](function(a, s) {
      return t.call(n, a, s, r);
    });
  };
}
function mp(e) {
  return function() {
    var t = this, n = this[$];
    n.atom_.reportObserved();
    var r = n.dehanceValues_(n.values_), o = arguments[0];
    return arguments[0] = function(i, a, s) {
      return o(i, a, s, t);
    }, r[e].apply(r, arguments);
  };
}
var $O = /* @__PURE__ */ Xn("ObservableArrayAdministration", ul);
function Ni(e) {
  return us(e) && $O(e[$]);
}
var Tp, Ep, zO = {}, Gn = "add", ka = "delete";
Tp = Symbol.iterator;
Ep = Symbol.toStringTag;
var bp = /* @__PURE__ */ function() {
  function e(n, r, o) {
    var i = this;
    r === void 0 && (r = Vr), o === void 0 && (o = "ObservableMap"), this.enhancer_ = void 0, this.name_ = void 0, this[$] = zO, this.data_ = void 0, this.hasMap_ = void 0, this.keysAtom_ = void 0, this.interceptors_ = void 0, this.changeListeners_ = void 0, this.dehancer = void 0, this.enhancer_ = r, this.name_ = o, kt(Map) || he(18), this.keysAtom_ = Mh("ObservableMap.keys()"), this.data_ = /* @__PURE__ */ new Map(), this.hasMap_ = /* @__PURE__ */ new Map(), _O(!0, function() {
      i.merge(n);
    });
  }
  var t = e.prototype;
  return t.has_ = function(r) {
    return this.data_.has(r);
  }, t.has = function(r) {
    var o = this;
    if (!P.trackingDerivation)
      return this.has_(r);
    var i = this.hasMap_.get(r);
    if (!i) {
      var a = i = new Zn(this.has_(r), cs, "ObservableMap.key?", !1);
      this.hasMap_.set(r, a), lp(a, function() {
        return o.hasMap_.delete(r);
      });
    }
    return i.get();
  }, t.set = function(r, o) {
    var i = this.has_(r);
    if (gt(this)) {
      var a = Rt(this, {
        type: i ? $t : Gn,
        object: this,
        newValue: o,
        name: r
      });
      if (!a)
        return this;
      o = a.newValue;
    }
    return i ? this.updateValue_(r, o) : this.addValue_(r, o), this;
  }, t.delete = function(r) {
    var o = this;
    if (this.keysAtom_, gt(this)) {
      var i = Rt(this, {
        type: ka,
        object: this,
        name: r
      });
      if (!i)
        return !1;
    }
    if (this.has_(r)) {
      var a = wo(), s = Pt(this), u = s || a ? {
        observableKind: "map",
        debugObjectName: this.name_,
        type: ka,
        object: this,
        oldValue: this.data_.get(r).value_,
        name: r
      } : null;
      return on(function() {
        var c;
        o.keysAtom_.reportChanged(), (c = o.hasMap_.get(r)) == null || c.setNewValue_(!1);
        var _ = o.data_.get(r);
        _.setNewValue_(void 0), o.data_.delete(r);
      }), s && Ht(this, u), !0;
    }
    return !1;
  }, t.updateValue_ = function(r, o) {
    var i = this.data_.get(r);
    if (o = i.prepareNewValue_(o), o !== P.UNCHANGED) {
      var a = wo(), s = Pt(this), u = s || a ? {
        observableKind: "map",
        debugObjectName: this.name_,
        type: $t,
        object: this,
        oldValue: i.value_,
        name: r,
        newValue: o
      } : null;
      i.setNewValue_(o), s && Ht(this, u);
    }
  }, t.addValue_ = function(r, o) {
    var i = this;
    this.keysAtom_, on(function() {
      var c, _ = new Zn(o, i.enhancer_, "ObservableMap.key", !1);
      i.data_.set(r, _), o = _.value_, (c = i.hasMap_.get(r)) == null || c.setNewValue_(!0), i.keysAtom_.reportChanged();
    });
    var a = wo(), s = Pt(this), u = s || a ? {
      observableKind: "map",
      debugObjectName: this.name_,
      type: Gn,
      object: this,
      name: r,
      newValue: o
    } : null;
    s && Ht(this, u);
  }, t.get = function(r) {
    return this.has(r) ? this.dehanceValue_(this.data_.get(r).get()) : this.dehanceValue_(void 0);
  }, t.dehanceValue_ = function(r) {
    return this.dehancer !== void 0 ? this.dehancer(r) : r;
  }, t.keys = function() {
    return this.keysAtom_.reportObserved(), this.data_.keys();
  }, t.values = function() {
    var r = this, o = this.keys();
    return $o({
      next: function() {
        var a = o.next(), s = a.done, u = a.value;
        return {
          done: s,
          value: s ? void 0 : r.get(u)
        };
      }
    });
  }, t.entries = function() {
    var r = this, o = this.keys();
    return $o({
      next: function() {
        var a = o.next(), s = a.done, u = a.value;
        return {
          done: s,
          value: s ? void 0 : [u, r.get(u)]
        };
      }
    });
  }, t[Tp] = function() {
    return this.entries();
  }, t.forEach = function(r, o) {
    for (var i = vr(this), a; !(a = i()).done; ) {
      var s = a.value, u = s[0], c = s[1];
      r.call(o, c, u, this);
    }
  }, t.merge = function(r) {
    var o = this;
    return $n(r) && (r = new Map(r)), on(function() {
      fn(r) ? Eb(r).forEach(function(i) {
        return o.set(i, r[i]);
      }) : Array.isArray(r) ? r.forEach(function(i) {
        var a = i[0], s = i[1];
        return o.set(a, s);
      }) : to(r) ? (r.constructor !== Map && he(19, r), r.forEach(function(i, a) {
        return o.set(a, i);
      })) : r != null && he(20, r);
    }), this;
  }, t.clear = function() {
    var r = this;
    on(function() {
      Jh(function() {
        for (var o = vr(r.keys()), i; !(i = o()).done; ) {
          var a = i.value;
          r.delete(a);
        }
      });
    });
  }, t.replace = function(r) {
    var o = this;
    return on(function() {
      for (var i = qO(r), a = /* @__PURE__ */ new Map(), s = !1, u = vr(o.data_.keys()), c; !(c = u()).done; ) {
        var _ = c.value;
        if (!i.has(_)) {
          var l = o.delete(_);
          if (l)
            s = !0;
          else {
            var d = o.data_.get(_);
            a.set(_, d);
          }
        }
      }
      for (var h = vr(i.entries()), f; !(f = h()).done; ) {
        var p = f.value, m = p[0], b = p[1], T = o.data_.has(m);
        if (o.set(m, b), o.data_.has(m)) {
          var E = o.data_.get(m);
          a.set(m, E), T || (s = !0);
        }
      }
      if (!s)
        if (o.data_.size !== a.size)
          o.keysAtom_.reportChanged();
        else
          for (var g = o.data_.keys(), O = a.keys(), I = g.next(), N = O.next(); !I.done; ) {
            if (I.value !== N.value) {
              o.keysAtom_.reportChanged();
              break;
            }
            I = g.next(), N = O.next();
          }
      o.data_ = a;
    }), this;
  }, t.toString = function() {
    return "[object ObservableMap]";
  }, t.toJSON = function() {
    return Array.from(this);
  }, t.observe_ = function(r, o) {
    return vi(this, r);
  }, t.intercept_ = function(r) {
    return Ri(this, r);
  }, nl(e, [{
    key: "size",
    get: function() {
      return this.keysAtom_.reportObserved(), this.data_.size;
    }
  }, {
    key: Ep,
    get: function() {
      return "Map";
    }
  }]), e;
}(), $n = /* @__PURE__ */ Xn("ObservableMap", bp);
function qO(e) {
  if (to(e) || $n(e))
    return e;
  if (Array.isArray(e))
    return new Map(e);
  if (fn(e)) {
    var t = /* @__PURE__ */ new Map();
    for (var n in e)
      t.set(n, e[n]);
    return t;
  } else
    return he(21, e);
}
var Op, gp, JO = {};
Op = Symbol.iterator;
gp = Symbol.toStringTag;
var Rp = /* @__PURE__ */ function() {
  function e(n, r, o) {
    r === void 0 && (r = Vr), o === void 0 && (o = "ObservableSet"), this.name_ = void 0, this[$] = JO, this.data_ = /* @__PURE__ */ new Set(), this.atom_ = void 0, this.changeListeners_ = void 0, this.interceptors_ = void 0, this.dehancer = void 0, this.enhancer_ = void 0, this.name_ = o, kt(Set) || he(22), this.atom_ = Mh(this.name_), this.enhancer_ = function(i, a) {
      return r(i, a, o);
    }, n && this.replace(n);
  }
  var t = e.prototype;
  return t.dehanceValue_ = function(r) {
    return this.dehancer !== void 0 ? this.dehancer(r) : r;
  }, t.clear = function() {
    var r = this;
    on(function() {
      Jh(function() {
        for (var o = vr(r.data_.values()), i; !(i = o()).done; ) {
          var a = i.value;
          r.delete(a);
        }
      });
    });
  }, t.forEach = function(r, o) {
    for (var i = vr(this), a; !(a = i()).done; ) {
      var s = a.value;
      r.call(o, s, s, this);
    }
  }, t.add = function(r) {
    var o = this;
    if (this.atom_, gt(this)) {
      var i = Rt(this, {
        type: Gn,
        object: this,
        newValue: r
      });
      if (!i)
        return this;
    }
    if (!this.has(r)) {
      on(function() {
        o.data_.add(o.enhancer_(r, void 0)), o.atom_.reportChanged();
      });
      var a = !1, s = Pt(this), u = s || a ? {
        observableKind: "set",
        debugObjectName: this.name_,
        type: Gn,
        object: this,
        newValue: r
      } : null;
      s && Ht(this, u);
    }
    return this;
  }, t.delete = function(r) {
    var o = this;
    if (gt(this)) {
      var i = Rt(this, {
        type: ka,
        object: this,
        oldValue: r
      });
      if (!i)
        return !1;
    }
    if (this.has(r)) {
      var a = !1, s = Pt(this), u = s || a ? {
        observableKind: "set",
        debugObjectName: this.name_,
        type: ka,
        object: this,
        oldValue: r
      } : null;
      return on(function() {
        o.atom_.reportChanged(), o.data_.delete(r);
      }), s && Ht(this, u), !0;
    }
    return !1;
  }, t.has = function(r) {
    return this.atom_.reportObserved(), this.data_.has(this.dehanceValue_(r));
  }, t.entries = function() {
    var r = 0, o = Array.from(this.keys()), i = Array.from(this.values());
    return $o({
      next: function() {
        var s = r;
        return r += 1, s < i.length ? {
          value: [o[s], i[s]],
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
    var r = this, o = 0, i = Array.from(this.data_.values());
    return $o({
      next: function() {
        return o < i.length ? {
          value: r.dehanceValue_(i[o++]),
          done: !1
        } : {
          done: !0
        };
      }
    });
  }, t.replace = function(r) {
    var o = this;
    return ur(r) && (r = new Set(r)), on(function() {
      Array.isArray(r) ? (o.clear(), r.forEach(function(i) {
        return o.add(i);
      })) : pi(r) ? (o.clear(), r.forEach(function(i) {
        return o.add(i);
      })) : r != null && he("Cannot initialize set from " + r);
    }), this;
  }, t.observe_ = function(r, o) {
    return vi(this, r);
  }, t.intercept_ = function(r) {
    return Ri(this, r);
  }, t.toJSON = function() {
    return Array.from(this);
  }, t.toString = function() {
    return "[object ObservableSet]";
  }, t[Op] = function() {
    return this.values();
  }, nl(e, [{
    key: "size",
    get: function() {
      return this.atom_.reportObserved(), this.data_.size;
    }
  }, {
    key: gp,
    get: function() {
      return "Set";
    }
  }]), e;
}(), ur = /* @__PURE__ */ Xn("ObservableSet", Rp), B_ = /* @__PURE__ */ Object.create(null), F_ = "remove", vp = /* @__PURE__ */ function() {
  function e(n, r, o, i) {
    r === void 0 && (r = /* @__PURE__ */ new Map()), i === void 0 && (i = Xb), this.target_ = void 0, this.values_ = void 0, this.name_ = void 0, this.defaultAnnotation_ = void 0, this.keysAtom_ = void 0, this.changeListeners_ = void 0, this.interceptors_ = void 0, this.proxy_ = void 0, this.isPlainObject_ = void 0, this.appliedAnnotations_ = void 0, this.pendingKeys_ = void 0, this.target_ = n, this.values_ = r, this.name_ = o, this.defaultAnnotation_ = i, this.keysAtom_ = new Ti("ObservableObject.keys"), this.isPlainObject_ = fn(this.target_);
  }
  var t = e.prototype;
  return t.getObservablePropValue_ = function(r) {
    return this.values_.get(r).get();
  }, t.setObservablePropValue_ = function(r, o) {
    var i = this.values_.get(r);
    if (i instanceof Wo)
      return i.set(o), !0;
    if (gt(this)) {
      var a = Rt(this, {
        type: $t,
        object: this.proxy_ || this.target_,
        name: r,
        newValue: o
      });
      if (!a)
        return null;
      o = a.newValue;
    }
    if (o = i.prepareNewValue_(o), o !== P.UNCHANGED) {
      var s = Pt(this), u = !1, c = s || u ? {
        type: $t,
        observableKind: "object",
        debugObjectName: this.name_,
        object: this.proxy_ || this.target_,
        oldValue: i.value_,
        name: r,
        newValue: o
      } : null;
      i.setNewValue_(o), s && Ht(this, c);
    }
    return !0;
  }, t.get_ = function(r) {
    return P.trackingDerivation && !cn(this.target_, r) && this.has_(r), this.target_[r];
  }, t.set_ = function(r, o, i) {
    return i === void 0 && (i = !1), cn(this.target_, r) ? this.values_.has(r) ? this.setObservablePropValue_(r, o) : i ? Reflect.set(this.target_, r, o) : (this.target_[r] = o, !0) : this.extend_(r, {
      value: o,
      enumerable: !0,
      writable: !0,
      configurable: !0
    }, this.defaultAnnotation_, i);
  }, t.has_ = function(r) {
    if (!P.trackingDerivation)
      return r in this.target_;
    this.pendingKeys_ || (this.pendingKeys_ = /* @__PURE__ */ new Map());
    var o = this.pendingKeys_.get(r);
    return o || (o = new Zn(r in this.target_, cs, "ObservableObject.key?", !1), this.pendingKeys_.set(r, o)), o.get();
  }, t.make_ = function(r, o) {
    if (o === !0 && (o = this.defaultAnnotation_), o !== !1) {
      if (!(r in this.target_)) {
        var i;
        if ((i = this.target_[Wt]) != null && i[r])
          return;
        he(1, o.annotationType_, this.name_ + "." + r.toString());
      }
      for (var a = this.target_; a && a !== fi; ) {
        var s = Sa(a, r);
        if (s) {
          var u = o.make_(this, r, s, a);
          if (u === 0)
            return;
          if (u === 1)
            break;
        }
        a = Object.getPrototypeOf(a);
      }
      V_(this, o, r);
    }
  }, t.extend_ = function(r, o, i, a) {
    if (a === void 0 && (a = !1), i === !0 && (i = this.defaultAnnotation_), i === !1)
      return this.defineProperty_(r, o, a);
    var s = i.extend_(this, r, o, a);
    return s && V_(this, i, r), s;
  }, t.defineProperty_ = function(r, o, i) {
    i === void 0 && (i = !1);
    try {
      lt();
      var a = this.delete_(r);
      if (!a)
        return a;
      if (gt(this)) {
        var s = Rt(this, {
          object: this.proxy_ || this.target_,
          name: r,
          type: Gn,
          newValue: o.value
        });
        if (!s)
          return null;
        var u = s.newValue;
        o.value !== u && (o = jr({}, o, {
          value: u
        }));
      }
      if (i) {
        if (!Reflect.defineProperty(this.target_, r, o))
          return !1;
      } else
        Yt(this.target_, r, o);
      this.notifyPropertyAddition_(r, o.value);
    } finally {
      _t();
    }
    return !0;
  }, t.defineObservableProperty_ = function(r, o, i, a) {
    a === void 0 && (a = !1);
    try {
      lt();
      var s = this.delete_(r);
      if (!s)
        return s;
      if (gt(this)) {
        var u = Rt(this, {
          object: this.proxy_ || this.target_,
          name: r,
          type: Gn,
          newValue: o
        });
        if (!u)
          return null;
        o = u.newValue;
      }
      var c = j_(r), _ = {
        configurable: P.safeDescriptors ? this.isPlainObject_ : !0,
        enumerable: !0,
        get: c.get,
        set: c.set
      };
      if (a) {
        if (!Reflect.defineProperty(this.target_, r, _))
          return !1;
      } else
        Yt(this.target_, r, _);
      var l = new Zn(o, i, "ObservableObject.key", !1);
      this.values_.set(r, l), this.notifyPropertyAddition_(r, l.value_);
    } finally {
      _t();
    }
    return !0;
  }, t.defineComputedProperty_ = function(r, o, i) {
    i === void 0 && (i = !1);
    try {
      lt();
      var a = this.delete_(r);
      if (!a)
        return a;
      if (gt(this)) {
        var s = Rt(this, {
          object: this.proxy_ || this.target_,
          name: r,
          type: Gn,
          newValue: void 0
        });
        if (!s)
          return null;
      }
      o.name || (o.name = "ObservableObject.key"), o.context = this.proxy_ || this.target_;
      var u = j_(r), c = {
        configurable: P.safeDescriptors ? this.isPlainObject_ : !0,
        enumerable: !1,
        get: u.get,
        set: u.set
      };
      if (i) {
        if (!Reflect.defineProperty(this.target_, r, c))
          return !1;
      } else
        Yt(this.target_, r, c);
      this.values_.set(r, new Wo(o)), this.notifyPropertyAddition_(r, void 0);
    } finally {
      _t();
    }
    return !0;
  }, t.delete_ = function(r, o) {
    if (o === void 0 && (o = !1), !cn(this.target_, r))
      return !0;
    if (gt(this)) {
      var i = Rt(this, {
        object: this.proxy_ || this.target_,
        name: r,
        type: F_
      });
      if (!i)
        return null;
    }
    try {
      var a, s;
      lt();
      var u = Pt(this), c = !1, _ = this.values_.get(r), l = void 0;
      if (!_ && (u || c)) {
        var d;
        l = (d = Sa(this.target_, r)) == null ? void 0 : d.value;
      }
      if (o) {
        if (!Reflect.deleteProperty(this.target_, r))
          return !1;
      } else
        delete this.target_[r];
      if (_ && (this.values_.delete(r), _ instanceof Zn && (l = _.value_), rp(_)), this.keysAtom_.reportChanged(), (a = this.pendingKeys_) == null || (s = a.get(r)) == null || s.set(r in this.target_), u || c) {
        var h = {
          type: F_,
          observableKind: "object",
          object: this.proxy_ || this.target_,
          debugObjectName: this.name_,
          oldValue: l,
          name: r
        };
        u && Ht(this, h);
      }
    } finally {
      _t();
    }
    return !0;
  }, t.observe_ = function(r, o) {
    return vi(this, r);
  }, t.intercept_ = function(r) {
    return Ri(this, r);
  }, t.notifyPropertyAddition_ = function(r, o) {
    var i, a, s = Pt(this), u = !1;
    if (s || u) {
      var c = s || u ? {
        type: Gn,
        observableKind: "object",
        debugObjectName: this.name_,
        object: this.proxy_ || this.target_,
        name: r,
        newValue: o
      } : null;
      s && Ht(this, c);
    }
    (i = this.pendingKeys_) == null || (a = i.get(r)) == null || a.set(!0), this.keysAtom_.reportChanged();
  }, t.ownKeys_ = function() {
    return this.keysAtom_.reportObserved(), Fr(this.target_);
  }, t.keys_ = function() {
    return this.keysAtom_.reportObserved(), Object.keys(this.target_);
  }, e;
}();
function Ii(e, t) {
  var n;
  if (cn(e, $))
    return e;
  var r = (n = t?.name) != null ? n : "ObservableObject", o = new vp(e, /* @__PURE__ */ new Map(), String(r), tO(t));
  return hi(e, $, o), e;
}
var QO = /* @__PURE__ */ Xn("ObservableObjectAdministration", vp);
function j_(e) {
  return B_[e] || (B_[e] = {
    get: function() {
      return this[$].getObservablePropValue_(e);
    },
    set: function(n) {
      return this[$].setObservablePropValue_(e, n);
    }
  });
}
function Xr(e) {
  return us(e) ? QO(e[$]) : !1;
}
function V_(e, t, n) {
  var r;
  (r = e.target_[Wt]) == null || delete r[n];
}
var ZO = /* @__PURE__ */ Ip(0), ou = 0, Np = function() {
};
function eg(e, t) {
  Object.setPrototypeOf ? Object.setPrototypeOf(e.prototype, t) : e.prototype.__proto__ !== void 0 ? e.prototype.__proto__ = t : e.prototype = t;
}
eg(Np, Array.prototype);
var cl = /* @__PURE__ */ function(e, t, n) {
  kh(r, e);
  function r(i, a, s, u) {
    var c;
    s === void 0 && (s = "ObservableArray"), u === void 0 && (u = !1), c = e.call(this) || this;
    var _ = new ul(s, a, u, !0);
    if (_.proxy_ = nu(c), Uh(nu(c), $, _), i && i.length) {
      var l = bi(!0);
      c.spliceWithArray(0, 0, i), Oi(l);
    }
    return Object.defineProperty(nu(c), "0", ZO), c;
  }
  var o = r.prototype;
  return o.concat = function() {
    this[$].atom_.reportObserved();
    for (var a = arguments.length, s = new Array(a), u = 0; u < a; u++)
      s[u] = arguments[u];
    return Array.prototype.concat.apply(
      this.slice(),
      //@ts-ignore
      s.map(function(c) {
        return Ni(c) ? c.slice() : c;
      })
    );
  }, o[n] = function() {
    var i = this, a = 0;
    return $o({
      next: function() {
        return a < i.length ? {
          value: i[a++],
          done: !1
        } : {
          done: !0,
          value: void 0
        };
      }
    });
  }, nl(r, [{
    key: "length",
    get: function() {
      return this[$].getArrayLength_();
    },
    set: function(a) {
      this[$].setArrayLength_(a);
    }
  }, {
    key: t,
    get: function() {
      return "Array";
    }
  }]), r;
}(Np, Symbol.toStringTag, Symbol.iterator);
Object.entries(Ha).forEach(function(e) {
  var t = e[0], n = e[1];
  t !== "concat" && hi(cl.prototype, t, n);
});
function Ip(e) {
  return {
    enumerable: !1,
    configurable: !0,
    get: function() {
      return this[$].get_(e);
    },
    set: function(n) {
      this[$].set_(e, n);
    }
  };
}
function tg(e) {
  Yt(cl.prototype, "" + e, Ip(e));
}
function Ap(e) {
  if (e > ou) {
    for (var t = ou; t < e + 100; t++)
      tg(t);
    ou = e;
  }
}
Ap(1e3);
function ng(e, t, n) {
  return new cl(e, t, n);
}
function Yr(e, t) {
  if (typeof e == "object" && e !== null) {
    if (Ni(e))
      return t !== void 0 && he(23), e[$].atom_;
    if (ur(e))
      return e.atom_;
    if ($n(e)) {
      if (t === void 0)
        return e.keysAtom_;
      var n = e.data_.get(t) || e.hasMap_.get(t);
      return n || he(25, t, Ku(e)), n;
    }
    if (Xr(e)) {
      if (!t)
        return he(26);
      var r = e[$].values_.get(t);
      return r || he(27, t, Ku(e)), r;
    }
    if (rl(e) || gi(e) || Ua(e))
      return e;
  } else if (kt(e) && Ua(e[$]))
    return e[$];
  he(28);
}
function yp(e, t) {
  if (e || he(29), t !== void 0)
    return yp(Yr(e, t));
  if (rl(e) || gi(e) || Ua(e) || $n(e) || ur(e))
    return e;
  if (e[$])
    return e[$];
  he(24, e);
}
function Ku(e, t) {
  var n;
  if (t !== void 0)
    n = Yr(e, t);
  else {
    if (al(e))
      return e.name;
    Xr(e) || $n(e) || ur(e) ? n = yp(e) : n = Yr(e);
  }
  return n.name_;
}
var W_ = fi.toString;
function ll(e, t, n) {
  return n === void 0 && (n = -1), $u(e, t, n);
}
function $u(e, t, n, r, o) {
  if (e === t)
    return e !== 0 || 1 / e === 1 / t;
  if (e == null || t == null)
    return !1;
  if (e !== e)
    return t !== t;
  var i = typeof e;
  if (i !== "function" && i !== "object" && typeof t != "object")
    return !1;
  var a = W_.call(e);
  if (a !== W_.call(t))
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
  e = X_(e), t = X_(t);
  var s = a === "[object Array]";
  if (!s) {
    if (typeof e != "object" || typeof t != "object")
      return !1;
    var u = e.constructor, c = t.constructor;
    if (u !== c && !(kt(u) && u instanceof u && kt(c) && c instanceof c) && "constructor" in e && "constructor" in t)
      return !1;
  }
  if (n === 0)
    return !1;
  n < 0 && (n = -1), r = r || [], o = o || [];
  for (var _ = r.length; _--; )
    if (r[_] === e)
      return o[_] === t;
  if (r.push(e), o.push(t), s) {
    if (_ = e.length, _ !== t.length)
      return !1;
    for (; _--; )
      if (!$u(e[_], t[_], n - 1, r, o))
        return !1;
  } else {
    var l = Object.keys(e), d;
    if (_ = l.length, Object.keys(t).length !== _)
      return !1;
    for (; _--; )
      if (d = l[_], !(cn(t, d) && $u(e[d], t[d], n - 1, r, o)))
        return !1;
  }
  return r.pop(), o.pop(), !0;
}
function X_(e) {
  return Ni(e) ? e.slice() : to(e) || $n(e) || pi(e) || ur(e) ? Array.from(e.entries()) : e;
}
function $o(e) {
  return e[Symbol.iterator] = rg, e;
}
function rg() {
  return this;
}
["Symbol", "Map", "Set"].forEach(function(e) {
  var t = tl();
  typeof t[e] > "u" && he("MobX requires global '" + e + "' to be available or polyfilled");
});
typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ == "object" && __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
  spy: gO,
  extras: {
    getDebugName: Ku
  },
  $mobx: $
});
class og {
  constructor(t) {
    Yn(this), this.state = t, this.getters = t.getters;
  }
  saveContent(t, n) {
    const r = this.getters.getActiveTab(n);
    r.content = t;
  }
}
if (!ft)
  throw new Error("mobx-react-lite requires React with Hooks support");
if (!WO)
  throw new Error("mobx-react-lite@3 requires mobx at least version 6 to be available");
function ig(e) {
  e();
}
function ag(e) {
  e || (e = ig), HO({ reactionScheduler: e });
}
function sg(e) {
  return kO(e);
}
var ug = 1e4, cg = 1e4, lg = (
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
          r === void 0 && (r = ug), clearTimeout(n.sweepTimeout), n.sweepTimeout = void 0;
          var o = Date.now();
          n.registrations.forEach(function(i, a) {
            o - i.registeredAt >= r && (n.finalize(i.value), n.registrations.delete(a));
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
        this.sweepTimeout === void 0 && (this.sweepTimeout = setTimeout(this.sweep, cg));
      }
    }), e;
  }()
), _g = typeof FinalizationRegistry < "u" ? FinalizationRegistry : lg, zu = new _g(function(e) {
  var t;
  (t = e.reaction) === null || t === void 0 || t.dispose(), e.reaction = null;
}), Y_ = globalThis && globalThis.__read || function(e, t) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n)
    return e;
  var r = n.call(e), o, i = [], a;
  try {
    for (; (t === void 0 || t-- > 0) && !(o = r.next()).done; )
      i.push(o.value);
  } catch (s) {
    a = { error: s };
  } finally {
    try {
      o && !o.done && (n = r.return) && n.call(r);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return i;
};
function K_(e) {
  return "observer".concat(e);
}
var dg = (
  /** @class */
  function() {
    function e() {
    }
    return e;
  }()
);
function fg() {
  return new dg();
}
function hg(e, t) {
  t === void 0 && (t = "observed");
  var n = Y_(Pe.useState(fg), 1), r = n[0], o = Y_(Pe.useState(), 2), i = o[1], a = function() {
    return i([]);
  }, s = Pe.useRef(null);
  s.current || (s.current = {
    reaction: null,
    mounted: !1,
    changedBeforeMount: !1
  });
  var u = s.current;
  u.reaction || (u.reaction = new Xo(K_(t), function() {
    u.mounted ? a() : u.changedBeforeMount = !0;
  }), zu.register(r, u, u)), Pe.useDebugValue(u.reaction, sg), Pe.useEffect(function() {
    return zu.unregister(u), u.mounted = !0, u.reaction ? u.changedBeforeMount && (u.changedBeforeMount = !1, a()) : (u.reaction = new Xo(K_(t), function() {
      a();
    }), a()), function() {
      u.reaction.dispose(), u.reaction = null, u.mounted = !1, u.changedBeforeMount = !1;
    };
  }, []);
  var c, _;
  if (u.reaction.track(function() {
    try {
      c = e();
    } catch (l) {
      _ = l;
    }
  }), _)
    throw _;
  return c;
}
var Sp = typeof Symbol == "function" && Symbol.for, $_ = Sp ? Symbol.for("react.forward_ref") : typeof Lr == "function" && Lr(function(e) {
  return null;
}).$$typeof, z_ = Sp ? Symbol.for("react.memo") : typeof Br == "function" && Br(function(e) {
  return null;
}).$$typeof;
function Tn(e, t) {
  var n;
  if (z_ && e.$$typeof === z_)
    throw new Error("[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.");
  var r = (n = t?.forwardRef) !== null && n !== void 0 ? n : !1, o = e, i = e.displayName || e.name;
  if ($_ && e.$$typeof === $_ && (r = !0, o = e.render, typeof o != "function"))
    throw new Error("[mobx-react-lite] `render` property of ForwardRef was not a function");
  var a = function(s, u) {
    return hg(function() {
      return o(s, u);
    }, i);
  };
  return i !== "" && (a.displayName = i), e.contextTypes && (a.contextTypes = e.contextTypes), r && (a = Lr(a)), a = Br(a), mg(e, a), a;
}
var pg = {
  $$typeof: !0,
  render: !0,
  compare: !0,
  type: !0,
  // Don't redefine `displayName`,
  // it's defined as getter-setter pair on `memo` (see #3192).
  displayName: !0
};
function mg(e, t) {
  Object.keys(e).forEach(function(n) {
    pg[n] || Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
  });
}
globalThis && globalThis.__read;
var iu;
ag(Ah);
iu = zu.finalizeAllImmediately;
const Tg = ({ fontSize: e, tabSize: t }) => ({
  fontSize: e,
  tabSize: t,
  glyphMargin: !1,
  lineNumbersMinChars: 2,
  lineDecorationsWidth: 0,
  minimap: {
    enabled: !1
  },
  scrollbar: {
    verticalScrollbarSize: 6
  }
}), cr = () => it(nb), Eg = () => cr().state, bg = (e) => {
  const t = cr(), n = t.state.selectedTerminalTab;
  return (r) => () => {
    if (n === r) {
      t.toggle(e), t.update({
        isHtmlPreviewOpened: !1
      });
      return;
    }
    t.update({
      selectedTerminalTab: r,
      isHtmlPreviewOpened: !1,
      [e]: !0
    });
  };
}, zn = () => it(fo).actions, ro = () => it(fo), ds = () => it(fo).getters, Og = () => it(fo).services, gg = () => it(fo).storage;
function Rg(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function q_(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function J_(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? q_(Object(n), !0).forEach(function(r) {
      Rg(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : q_(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function vg(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function Ng(e, t) {
  if (e == null)
    return {};
  var n = vg(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      r = i[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Ig(e, t) {
  return Ag(e) || yg(e, t) || Sg(e, t) || Gg();
}
function Ag(e) {
  if (Array.isArray(e))
    return e;
}
function yg(e, t) {
  if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(e)))) {
    var n = [], r = !0, o = !1, i = void 0;
    try {
      for (var a = e[Symbol.iterator](), s; !(r = (s = a.next()).done) && (n.push(s.value), !(t && n.length === t)); r = !0)
        ;
    } catch (u) {
      o = !0, i = u;
    } finally {
      try {
        !r && a.return != null && a.return();
      } finally {
        if (o)
          throw i;
      }
    }
    return n;
  }
}
function Sg(e, t) {
  if (e) {
    if (typeof e == "string")
      return Q_(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Q_(e, t);
  }
}
function Q_(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function Gg() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Dg(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Z_(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function ed(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Z_(Object(n), !0).forEach(function(r) {
      Dg(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Z_(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Cg() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function(r) {
    return t.reduceRight(function(o, i) {
      return i(o);
    }, r);
  };
}
function Go(e) {
  return function t() {
    for (var n = this, r = arguments.length, o = new Array(r), i = 0; i < r; i++)
      o[i] = arguments[i];
    return o.length >= e.length ? e.apply(this, o) : function() {
      for (var a = arguments.length, s = new Array(a), u = 0; u < a; u++)
        s[u] = arguments[u];
      return t.apply(n, [].concat(o, s));
    };
  };
}
function Ma(e) {
  return {}.toString.call(e).includes("Object");
}
function wg(e) {
  return !Object.keys(e).length;
}
function zo(e) {
  return typeof e == "function";
}
function Ug(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function Pg(e, t) {
  return Ma(t) || kn("changeType"), Object.keys(t).some(function(n) {
    return !Ug(e, n);
  }) && kn("changeField"), t;
}
function Hg(e) {
  zo(e) || kn("selectorType");
}
function kg(e) {
  zo(e) || Ma(e) || kn("handlerType"), Ma(e) && Object.values(e).some(function(t) {
    return !zo(t);
  }) && kn("handlersType");
}
function Mg(e) {
  e || kn("initialIsRequired"), Ma(e) || kn("initialType"), wg(e) && kn("initialContent");
}
function xg(e, t) {
  throw new Error(e[t] || e.default);
}
var Lg = {
  initialIsRequired: "initial state is required",
  initialType: "initial state should be an object",
  initialContent: "initial state shouldn't be an empty object",
  handlerType: "handler should be an object or a function",
  handlersType: "all handlers should be a functions",
  selectorType: "selector should be a function",
  changeType: "provided value of changes should be an object",
  changeField: 'it seams you want to change a field in the state which is not specified in the "initial" state',
  default: "an unknown error accured in `state-local` package"
}, kn = Go(xg)(Lg), Wi = {
  changes: Pg,
  selector: Hg,
  handler: kg,
  initial: Mg
};
function Bg(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  Wi.initial(e), Wi.handler(t);
  var n = {
    current: e
  }, r = Go(Vg)(n, t), o = Go(jg)(n), i = Go(Wi.changes)(e), a = Go(Fg)(n);
  function s() {
    var c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function(_) {
      return _;
    };
    return Wi.selector(c), c(n.current);
  }
  function u(c) {
    Cg(r, o, i, a)(c);
  }
  return [s, u];
}
function Fg(e, t) {
  return zo(t) ? t(e.current) : t;
}
function jg(e, t) {
  return e.current = ed(ed({}, e.current), t), t;
}
function Vg(e, t, n) {
  return zo(t) ? t(e.current) : Object.keys(n).forEach(function(r) {
    var o;
    return (o = t[r]) === null || o === void 0 ? void 0 : o.call(t, e.current[r]);
  }), n;
}
var Wg = {
  create: Bg
}, Xg = {
  paths: {
    vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.36.1/min/vs"
  }
};
function Yg(e) {
  return function t() {
    for (var n = this, r = arguments.length, o = new Array(r), i = 0; i < r; i++)
      o[i] = arguments[i];
    return o.length >= e.length ? e.apply(this, o) : function() {
      for (var a = arguments.length, s = new Array(a), u = 0; u < a; u++)
        s[u] = arguments[u];
      return t.apply(n, [].concat(o, s));
    };
  };
}
function Kg(e) {
  return {}.toString.call(e).includes("Object");
}
function $g(e) {
  return e || td("configIsRequired"), Kg(e) || td("configType"), e.urls ? (zg(), {
    paths: {
      vs: e.urls.monacoBase
    }
  }) : e;
}
function zg() {
  console.warn(Gp.deprecation);
}
function qg(e, t) {
  throw new Error(e[t] || e.default);
}
var Gp = {
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
}, td = Yg(qg)(Gp), Jg = {
  config: $g
}, Qg = function() {
  for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  return function(o) {
    return n.reduceRight(function(i, a) {
      return a(i);
    }, o);
  };
};
function Dp(e, t) {
  return Object.keys(t).forEach(function(n) {
    t[n] instanceof Object && e[n] && Object.assign(t[n], Dp(e[n], t[n]));
  }), J_(J_({}, e), t);
}
var Zg = {
  type: "cancelation",
  msg: "operation is manually canceled"
};
function au(e) {
  var t = !1, n = new Promise(function(r, o) {
    e.then(function(i) {
      return t ? o(Zg) : r(i);
    }), e.catch(o);
  });
  return n.cancel = function() {
    return t = !0;
  }, n;
}
var eR = Wg.create({
  config: Xg,
  isInitialized: !1,
  resolve: null,
  reject: null,
  monaco: null
}), Cp = Ig(eR, 2), Ai = Cp[0], fs = Cp[1];
function tR(e) {
  var t = Jg.config(e), n = t.monaco, r = Ng(t, ["monaco"]);
  fs(function(o) {
    return {
      config: Dp(o.config, r),
      monaco: n
    };
  });
}
function nR() {
  var e = Ai(function(t) {
    var n = t.monaco, r = t.isInitialized, o = t.resolve;
    return {
      monaco: n,
      isInitialized: r,
      resolve: o
    };
  });
  if (!e.isInitialized) {
    if (fs({
      isInitialized: !0
    }), e.monaco)
      return e.resolve(e.monaco), au(su);
    if (window.monaco && window.monaco.editor)
      return wp(window.monaco), e.resolve(window.monaco), au(su);
    Qg(rR, iR)(aR);
  }
  return au(su);
}
function rR(e) {
  return document.body.appendChild(e);
}
function oR(e) {
  var t = document.createElement("script");
  return e && (t.src = e), t;
}
function iR(e) {
  var t = Ai(function(r) {
    var o = r.config, i = r.reject;
    return {
      config: o,
      reject: i
    };
  }), n = oR("".concat(t.config.paths.vs, "/loader.js"));
  return n.onload = function() {
    return e();
  }, n.onerror = t.reject, n;
}
function aR() {
  var e = Ai(function(n) {
    var r = n.config, o = n.resolve, i = n.reject;
    return {
      config: r,
      resolve: o,
      reject: i
    };
  }), t = window.require;
  t.config(e.config), t(["vs/editor/editor.main"], function(n) {
    wp(n), e.resolve(n);
  }, function(n) {
    e.reject(n);
  });
}
function wp(e) {
  Ai().monaco || fs({
    monaco: e
  });
}
function sR() {
  return Ai(function(e) {
    var t = e.monaco;
    return t;
  });
}
var su = new Promise(function(e, t) {
  return fs({
    resolve: e,
    reject: t
  });
}), xa = {
  config: tR,
  init: nR,
  __getMonacoInstance: sR
}, uR = { wrapper: { display: "flex", position: "relative", textAlign: "initial" }, fullWidth: { width: "100%" }, hide: { display: "none" } }, uu = uR, cR = { container: { display: "flex", height: "100%", width: "100%", justifyContent: "center", alignItems: "center" } }, lR = cR;
function _R({ children: e }) {
  return Pe.createElement("div", { style: lR.container }, e);
}
var dR = _R, fR = dR;
function hR({ width: e, height: t, isEditorReady: n, loading: r, _ref: o, className: i, wrapperProps: a }) {
  return Pe.createElement("section", { style: { ...uu.wrapper, width: e, height: t }, ...a }, !n && Pe.createElement(fR, null, r), Pe.createElement("div", { ref: o, style: { ...uu.fullWidth, ...!n && uu.hide }, className: i }));
}
var pR = hR, Up = Br(pR);
function mR(e) {
  xe(e, []);
}
var _l = mR;
function TR(e, t, n = !0) {
  let r = se(!0);
  xe(r.current || !n ? () => {
    r.current = !1;
  } : e, t);
}
var ht = TR;
function Uo() {
}
function Ir(e, t, n, r) {
  return ER(e, r) || bR(e, t, n, r);
}
function ER(e, t) {
  return e.editor.getModel(Pp(e, t));
}
function bR(e, t, n, r) {
  return e.editor.createModel(t, n, r ? Pp(e, r) : void 0);
}
function Pp(e, t) {
  return e.Uri.parse(t);
}
function OR({ original: e, modified: t, language: n, originalLanguage: r, modifiedLanguage: o, originalModelPath: i, modifiedModelPath: a, keepCurrentOriginalModel: s = !1, keepCurrentModifiedModel: u = !1, theme: c = "light", loading: _ = "Loading...", options: l = {}, height: d = "100%", width: h = "100%", className: f, wrapperProps: p = {}, beforeMount: m = Uo, onMount: b = Uo }) {
  let [T, E] = ft(!1), [g, O] = ft(!0), I = se(null), N = se(null), w = se(null), G = se(b), D = se(m), Z = se(!1);
  _l(() => {
    let H = xa.init();
    return H.then((Q) => (N.current = Q) && O(!1)).catch((Q) => Q?.type !== "cancelation" && console.error("Monaco initialization: error:", Q)), () => I.current ? B() : H.cancel();
  }), ht(() => {
    let H = I.current.getModifiedEditor();
    H.getOption(N.current.editor.EditorOption.readOnly) ? H.setValue(t || "") : t !== H.getValue() && (H.executeEdits("", [{ range: H.getModel().getFullModelRange(), text: t || "", forceMoveMarkers: !0 }]), H.pushUndoStop());
  }, [t], T), ht(() => {
    I.current?.getModel()?.original.setValue(e || "");
  }, [e], T), ht(() => {
    let { original: H, modified: Q } = I.current.getModel();
    N.current.editor.setModelLanguage(H, r || n || "text"), N.current.editor.setModelLanguage(Q, o || n || "text");
  }, [n, r, o], T), ht(() => {
    N.current?.editor.setTheme(c);
  }, [c], T), ht(() => {
    I.current?.updateOptions(l);
  }, [l], T);
  let ne = Fn(() => {
    if (!N.current)
      return;
    D.current(N.current);
    let H = Ir(N.current, e || "", r || n || "text", i || ""), Q = Ir(N.current, t || "", o || n || "text", a || "");
    I.current?.setModel({ original: H, modified: Q });
  }, [n, t, o, e, r, i, a]), J = Fn(() => {
    !Z.current && w.current && (I.current = N.current.editor.createDiffEditor(w.current, { automaticLayout: !0, ...l }), ne(), N.current?.editor.setTheme(c), E(!0), Z.current = !0);
  }, [l, c, ne]);
  xe(() => {
    T && G.current(I.current, N.current);
  }, [T]), xe(() => {
    !g && !T && J();
  }, [g, T, J]), ht(() => {
    if (I.current && N.current) {
      let H = I.current.getOriginalEditor(), Q = Ir(N.current, e || "", r || n || "text", i || "");
      Q !== H.getModel() && H.setModel(Q);
    }
  }, [i], T), ht(() => {
    if (I.current && N.current) {
      let H = I.current.getModifiedEditor(), Q = Ir(N.current, t || "", o || n || "text", a || "");
      Q !== H.getModel() && H.setModel(Q);
    }
  }, [a], T);
  function B() {
    let H = I.current?.getModel();
    s || H?.original?.dispose(), u || H?.modified?.dispose(), I.current?.dispose();
  }
  return Pe.createElement(Up, { width: h, height: d, isEditorReady: T, loading: _, _ref: w, className: f, wrapperProps: p });
}
var gR = OR;
Br(gR);
function RR() {
  let [e, t] = ft(xa.__getMonacoInstance());
  return _l(() => {
    let n;
    return e || (n = xa.init(), n.then((r) => {
      t(r);
    })), () => n?.cancel();
  }), e;
}
var Hp = RR;
function vR(e) {
  let t = se();
  return xe(() => {
    t.current = e;
  }, [e]), t.current;
}
var NR = vR, Xi = /* @__PURE__ */ new Map();
function IR({ defaultValue: e, defaultLanguage: t, defaultPath: n, value: r, language: o, path: i, theme: a = "light", line: s, loading: u = "Loading...", options: c = {}, overrideServices: _ = {}, saveViewState: l = !0, keepCurrentModel: d = !1, width: h = "100%", height: f = "100%", className: p, wrapperProps: m = {}, beforeMount: b = Uo, onMount: T = Uo, onChange: E, onValidate: g = Uo }) {
  let [O, I] = ft(!1), [N, w] = ft(!0), G = se(null), D = se(null), Z = se(null), ne = se(T), J = se(b), B = se(), H = se(r), Q = NR(i), ue = se(!1), oe = se(!1);
  _l(() => {
    let Ae = xa.init();
    return Ae.then((C) => (G.current = C) && w(!1)).catch((C) => C?.type !== "cancelation" && console.error("Monaco initialization: error:", C)), () => D.current ? Le() : Ae.cancel();
  }), ht(() => {
    let Ae = Ir(G.current, e || r || "", t || o || "", i || n || "");
    Ae !== D.current?.getModel() && (l && Xi.set(Q, D.current?.saveViewState()), D.current?.setModel(Ae), l && D.current?.restoreViewState(Xi.get(i)));
  }, [i], O), ht(() => {
    D.current?.updateOptions(c);
  }, [c], O), ht(() => {
    !D.current || r === void 0 || (D.current.getOption(G.current.editor.EditorOption.readOnly) ? D.current.setValue(r) : r !== D.current.getValue() && (oe.current = !0, D.current.executeEdits("", [{ range: D.current.getModel().getFullModelRange(), text: r, forceMoveMarkers: !0 }]), D.current.pushUndoStop(), oe.current = !1));
  }, [r], O), ht(() => {
    let Ae = D.current?.getModel();
    Ae && o && G.current?.editor.setModelLanguage(Ae, o);
  }, [o], O), ht(() => {
    s !== void 0 && D.current?.revealLine(s);
  }, [s], O), ht(() => {
    G.current?.editor.setTheme(a);
  }, [a], O);
  let Se = Fn(() => {
    if (!(!Z.current || !G.current) && !ue.current) {
      J.current(G.current);
      let Ae = i || n, C = Ir(G.current, r || e || "", t || o || "", Ae || "");
      D.current = G.current?.editor.create(Z.current, { model: C, automaticLayout: !0, ...c }, _), l && D.current.restoreViewState(Xi.get(Ae)), G.current.editor.setTheme(a), I(!0), ue.current = !0;
    }
  }, [e, t, n, r, o, i, c, _, l, a]);
  xe(() => {
    O && ne.current(D.current, G.current);
  }, [O]), xe(() => {
    !N && !O && Se();
  }, [N, O, Se]), H.current = r, xe(() => {
    O && E && (B.current?.dispose(), B.current = D.current?.onDidChangeModelContent((Ae) => {
      oe.current || E(D.current.getValue(), Ae);
    }));
  }, [O, E]), xe(() => {
    if (O) {
      let Ae = G.current.editor.onDidChangeMarkers((C) => {
        let x = D.current.getModel()?.uri;
        if (x && C.find((k) => k.path === x.path)) {
          let k = G.current.editor.getModelMarkers({ resource: x });
          g?.(k);
        }
      });
      return () => {
        Ae?.dispose();
      };
    }
    return () => {
    };
  }, [O, g]);
  function Le() {
    B.current?.dispose(), d ? l && Xi.set(i, D.current.saveViewState()) : D.current.getModel()?.dispose(), D.current.dispose();
  }
  return Pe.createElement(Up, { width: h, height: f, isEditorReady: O, loading: u, _ref: Z, className: p, wrapperProps: m });
}
var AR = IR, yR = Br(AR), SR = yR;
const GR = {
  EDITOR_THEME: "EDITOR_THEME",
  EDITOR_CONTENT_DATA: "EDITOR_CONTENT_DATA",
  EDITOR_EXECUTE_MESSAGES: "EDITOR_EXECUTE_MESSAGES",
  EDITOR_FONT_SIZE: "EDITOR_FONT_SIZE",
  EDITOR_TAB_SIZE: "EDITOR_TAB_SIZE",
  EDITOR_CUSTOM_BACKGROUND: "EDITOR_CUSTOM_BACKGROUND",
  EDITOR_CUSTOM_COLOR: "EDITOR_CUSTOM_COLOR",
  EDITOR_HTML_PREVIEW: "EDITOR_HTML_PREVIEW",
  AUTH_TOKEN: "AUTH_TOKEN"
}, DR = (e) => typeof e == "object" && e !== null, kp = (e) => typeof e == "string", CR = (e) => typeof e == "function", wR = "code_gear", Mp = { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_86394af3-b4bf-426a-90ed-a3b5355c6ab2", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "npm/8.19.4 node/v16.20.1 linux x64 workspaces/false ci/github-actions", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_86394af3-b4bf-426a-90ed-a3b5355c6ab2", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", npm_config_noproxy: "", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-8.2.1", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "", npm_config_userconfig: "/home/runner/.npmrc", npm_config_local_prefix: "/home/runner/work/CodeGear/CodeGear", SYSTEMD_EXEC_PID: "667", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", COLOR: "0", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.6/x64", NVM_DIR: "/home/runner/.nvm", npm_config_metrics_registry: "https://registry.npmjs.org/", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230724.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", JOURNAL_STREAM: "8:16780", GITHUB_WORKFLOW: "CodeGear CI", _: "/opt/hostedtoolcache/node/16.20.1/x64/bin/npm", npm_config_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", GITHUB_RUN_ID: "5726768725", npm_config_cache: "/home/runner/.npm", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "8374588b72e979f590036af7eb8486e5f12392a0", GITHUB_BASE_REF: "", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/heads/develop", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", npm_config_node_gyp: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.bin:/home/runner/work/CodeGear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_4dc21800-4235-4f8a-a2db-e88d2665e77f", INVOCATION_ID: "83cb2f8c2f094435ae0afd3954bf1e9b", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.11/x64", NODE: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "35", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 3", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "develop", GITHUB_REPOSITORY: "Gearonix/CodeGear", npm_lifecycle_script: "nx run-many --targets=build --all", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", STATS_NM: "true", npm_package_version: "0.0.0", npm_lifecycle_event: "build", NODE_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/bin/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/node_modules", GITHUB_REF_PROTECTED: "false", npm_config_strict_peer_dependencies: "", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "8374588b72e979f590036af7eb8486e5f12392a0", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/heads/develop", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", npm_config_globalconfig: "/opt/hostedtoolcache/node/16.20.1/x64/etc/npmrc", npm_config_init_module: "/home/runner/.npm-init.js", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_86394af3-b4bf-426a-90ed-a3b5355c6ab2", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", npm_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/bin/npm-cli.js", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "push", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_86394af3-b4bf-426a-90ed-a3b5355c6ab2", npm_config_global_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", npm_command: "run-script", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_86394af3-b4bf-426a-90ed-a3b5355c6ab2", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", EDITOR: "vi", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/15228585155065571407", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "15228585155065571407", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.SERVER_URL ?? "http://localhost:6868", xp = {
  CODE_EXECUTOR_API: "execute",
  _GRAPHQL: "graphql"
};
class dl {
  constructor(t) {
    this.isDisabled = !1, this.isDisabled = t ?? this.isDisabled;
  }
  get(t, n) {
    if (this.isDisabled)
      return n;
    const r = localStorage.getItem(this.withPrefix(t));
    return r ? UR(r) ? JSON.parse(r) : r : n;
  }
  set(t, n) {
    if (!(this.isDisabled || !(t in GR))) {
      if (kp(n))
        return localStorage.setItem(this.withPrefix(t), n);
      localStorage.setItem(this.withPrefix(t), JSON.stringify(n));
    }
  }
  clear(t) {
    if (t)
      return localStorage.removeItem(this.withPrefix(t));
    localStorage.clear();
  }
  withPrefix(t) {
    return `${wR}__${t}`;
  }
}
const UR = (e) => {
  try {
    JSON.parse(e);
  } catch {
    return !1;
  }
  return !0;
};
var qu = function(e, t) {
  return qu = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var o in r)
      Object.prototype.hasOwnProperty.call(r, o) && (n[o] = r[o]);
  }, qu(e, t);
};
function Lt(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  qu(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
var v = function() {
  return v = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, v.apply(this, arguments);
};
function or(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function In(e, t, n, r) {
  function o(i) {
    return i instanceof n ? i : new n(function(a) {
      a(i);
    });
  }
  return new (n || (n = Promise))(function(i, a) {
    function s(_) {
      try {
        c(r.next(_));
      } catch (l) {
        a(l);
      }
    }
    function u(_) {
      try {
        c(r.throw(_));
      } catch (l) {
        a(l);
      }
    }
    function c(_) {
      _.done ? i(_.value) : o(_.value).then(s, u);
    }
    c((r = r.apply(e, t || [])).next());
  });
}
function An(e, t) {
  var n = { label: 0, sent: function() {
    if (i[0] & 1)
      throw i[1];
    return i[1];
  }, trys: [], ops: [] }, r, o, i, a;
  return a = { next: s(0), throw: s(1), return: s(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function() {
    return this;
  }), a;
  function s(c) {
    return function(_) {
      return u([c, _]);
    };
  }
  function u(c) {
    if (r)
      throw new TypeError("Generator is already executing.");
    for (; a && (a = 0, c[0] && (n = 0)), n; )
      try {
        if (r = 1, o && (i = c[0] & 2 ? o.return : c[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, c[1])).done)
          return i;
        switch (o = 0, i && (c = [c[0] & 2, i.value]), c[0]) {
          case 0:
          case 1:
            i = c;
            break;
          case 4:
            return n.label++, { value: c[1], done: !1 };
          case 5:
            n.label++, o = c[1], c = [0];
            continue;
          case 7:
            c = n.ops.pop(), n.trys.pop();
            continue;
          default:
            if (i = n.trys, !(i = i.length > 0 && i[i.length - 1]) && (c[0] === 6 || c[0] === 2)) {
              n = 0;
              continue;
            }
            if (c[0] === 3 && (!i || c[1] > i[0] && c[1] < i[3])) {
              n.label = c[1];
              break;
            }
            if (c[0] === 6 && n.label < i[1]) {
              n.label = i[1], i = c;
              break;
            }
            if (i && n.label < i[2]) {
              n.label = i[2], n.ops.push(c);
              break;
            }
            i[2] && n.ops.pop(), n.trys.pop();
            continue;
        }
        c = t.call(e, n);
      } catch (_) {
        c = [6, _], o = 0;
      } finally {
        r = i = 0;
      }
    if (c[0] & 5)
      throw c[1];
    return { value: c[0] ? c[1] : void 0, done: !0 };
  }
}
function er(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, i; r < o; r++)
      (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var cu = "Invariant Violation", nd = Object.setPrototypeOf, PR = nd === void 0 ? function(e, t) {
  return e.__proto__ = t, e;
} : nd, Te = (
  /** @class */
  function(e) {
    Lt(t, e);
    function t(n) {
      n === void 0 && (n = cu);
      var r = e.call(this, typeof n == "number" ? cu + ": " + n + " (see https://github.com/apollographql/invariant-packages)" : n) || this;
      return r.framesToPop = 1, r.name = cu, PR(r, t.prototype), r;
    }
    return t;
  }(Error)
);
function M(e, t) {
  if (!e)
    throw new Te(t);
}
var Lp = ["debug", "log", "warn", "error", "silent"], HR = Lp.indexOf("log");
function Yi(e) {
  return function() {
    if (Lp.indexOf(e) >= HR) {
      var t = console[e] || console.log;
      return t.apply(console, arguments);
    }
  };
}
(function(e) {
  e.debug = Yi("debug"), e.log = Yi("log"), e.warn = Yi("warn"), e.error = Yi("error");
})(M || (M = {}));
function Et(e) {
  try {
    return e();
  } catch {
  }
}
const rd = Et(function() {
  return globalThis;
}) || Et(function() {
  return window;
}) || Et(function() {
  return self;
}) || Et(function() {
  return global;
}) || Et(function() {
  return Et.constructor("return this")();
});
var od = "__", id = [od, od].join("DEV");
function kR() {
  try {
    return !!__DEV__;
  } catch {
    return Object.defineProperty(rd, id, {
      value: Et(function() {
        return "production";
      }) !== "production",
      enumerable: !1,
      configurable: !0,
      writable: !0
    }), rd[id];
  }
}
const lu = kR();
function yn(e) {
  try {
    return e();
  } catch {
  }
}
var Ju = yn(function() {
  return globalThis;
}) || yn(function() {
  return window;
}) || yn(function() {
  return self;
}) || yn(function() {
  return global;
}) || // We don't expect the Function constructor ever to be invoked at runtime, as
// long as at least one of globalThis, window, self, or global is defined, so
// we are under no obligation to make it easy for static analysis tools to
// detect syntactic usage of the Function constructor. If you think you can
// improve your static analysis to detect this obfuscation, think again. This
// is an arms race you cannot win, at least not in JavaScript.
yn(function() {
  return yn.constructor("return this")();
}), Qu = !1;
function MR() {
  Ju && !yn(function() {
    return "production";
  }) && !yn(function() {
    return process;
  }) && (Object.defineProperty(Ju, "process", {
    value: {
      env: {
        // This default needs to be "production" instead of "development", to
        // avoid the problem https://github.com/graphql/graphql-js/pull/2894
        // will eventually solve, once merged and released.
        NODE_ENV: "production"
      }
    },
    // Let anyone else change global.process as they see fit, but hide it from
    // Object.keys(global) enumeration.
    configurable: !0,
    enumerable: !1,
    writable: !0
  }), Qu = !0);
}
MR();
function ad() {
  Qu && (delete Ju.process, Qu = !1);
}
function aa(e, t) {
  if (!!!e)
    throw new Error(t);
}
const Bp = {
  Name: [],
  Document: ["definitions"],
  OperationDefinition: [
    "name",
    "variableDefinitions",
    "directives",
    "selectionSet"
  ],
  VariableDefinition: ["variable", "type", "defaultValue", "directives"],
  Variable: ["name"],
  SelectionSet: ["selections"],
  Field: ["alias", "name", "arguments", "directives", "selectionSet"],
  Argument: ["name", "value"],
  FragmentSpread: ["name", "directives"],
  InlineFragment: ["typeCondition", "directives", "selectionSet"],
  FragmentDefinition: [
    "name",
    // Note: fragment variable definitions are deprecated and will removed in v17.0.0
    "variableDefinitions",
    "typeCondition",
    "directives",
    "selectionSet"
  ],
  IntValue: [],
  FloatValue: [],
  StringValue: [],
  BooleanValue: [],
  NullValue: [],
  EnumValue: [],
  ListValue: ["values"],
  ObjectValue: ["fields"],
  ObjectField: ["name", "value"],
  Directive: ["name", "arguments"],
  NamedType: ["name"],
  ListType: ["type"],
  NonNullType: ["type"],
  SchemaDefinition: ["description", "directives", "operationTypes"],
  OperationTypeDefinition: ["type"],
  ScalarTypeDefinition: ["description", "name", "directives"],
  ObjectTypeDefinition: [
    "description",
    "name",
    "interfaces",
    "directives",
    "fields"
  ],
  FieldDefinition: ["description", "name", "arguments", "type", "directives"],
  InputValueDefinition: [
    "description",
    "name",
    "type",
    "defaultValue",
    "directives"
  ],
  InterfaceTypeDefinition: [
    "description",
    "name",
    "interfaces",
    "directives",
    "fields"
  ],
  UnionTypeDefinition: ["description", "name", "directives", "types"],
  EnumTypeDefinition: ["description", "name", "directives", "values"],
  EnumValueDefinition: ["description", "name", "directives"],
  InputObjectTypeDefinition: ["description", "name", "directives", "fields"],
  DirectiveDefinition: ["description", "name", "arguments", "locations"],
  SchemaExtension: ["directives", "operationTypes"],
  ScalarTypeExtension: ["name", "directives"],
  ObjectTypeExtension: ["name", "interfaces", "directives", "fields"],
  InterfaceTypeExtension: ["name", "interfaces", "directives", "fields"],
  UnionTypeExtension: ["name", "directives", "types"],
  EnumTypeExtension: ["name", "directives", "values"],
  InputObjectTypeExtension: ["name", "directives", "fields"]
}, xR = new Set(Object.keys(Bp));
function sd(e) {
  const t = e?.kind;
  return typeof t == "string" && xR.has(t);
}
var ud;
(function(e) {
  e.QUERY = "query", e.MUTATION = "mutation", e.SUBSCRIPTION = "subscription";
})(ud || (ud = {}));
var Xe;
(function(e) {
  e.NAME = "Name", e.DOCUMENT = "Document", e.OPERATION_DEFINITION = "OperationDefinition", e.VARIABLE_DEFINITION = "VariableDefinition", e.SELECTION_SET = "SelectionSet", e.FIELD = "Field", e.ARGUMENT = "Argument", e.FRAGMENT_SPREAD = "FragmentSpread", e.INLINE_FRAGMENT = "InlineFragment", e.FRAGMENT_DEFINITION = "FragmentDefinition", e.VARIABLE = "Variable", e.INT = "IntValue", e.FLOAT = "FloatValue", e.STRING = "StringValue", e.BOOLEAN = "BooleanValue", e.NULL = "NullValue", e.ENUM = "EnumValue", e.LIST = "ListValue", e.OBJECT = "ObjectValue", e.OBJECT_FIELD = "ObjectField", e.DIRECTIVE = "Directive", e.NAMED_TYPE = "NamedType", e.LIST_TYPE = "ListType", e.NON_NULL_TYPE = "NonNullType", e.SCHEMA_DEFINITION = "SchemaDefinition", e.OPERATION_TYPE_DEFINITION = "OperationTypeDefinition", e.SCALAR_TYPE_DEFINITION = "ScalarTypeDefinition", e.OBJECT_TYPE_DEFINITION = "ObjectTypeDefinition", e.FIELD_DEFINITION = "FieldDefinition", e.INPUT_VALUE_DEFINITION = "InputValueDefinition", e.INTERFACE_TYPE_DEFINITION = "InterfaceTypeDefinition", e.UNION_TYPE_DEFINITION = "UnionTypeDefinition", e.ENUM_TYPE_DEFINITION = "EnumTypeDefinition", e.ENUM_VALUE_DEFINITION = "EnumValueDefinition", e.INPUT_OBJECT_TYPE_DEFINITION = "InputObjectTypeDefinition", e.DIRECTIVE_DEFINITION = "DirectiveDefinition", e.SCHEMA_EXTENSION = "SchemaExtension", e.SCALAR_TYPE_EXTENSION = "ScalarTypeExtension", e.OBJECT_TYPE_EXTENSION = "ObjectTypeExtension", e.INTERFACE_TYPE_EXTENSION = "InterfaceTypeExtension", e.UNION_TYPE_EXTENSION = "UnionTypeExtension", e.ENUM_TYPE_EXTENSION = "EnumTypeExtension", e.INPUT_OBJECT_TYPE_EXTENSION = "InputObjectTypeExtension";
})(Xe || (Xe = {}));
function cd(e) {
  return e === 9 || e === 32;
}
function LR(e, t) {
  const n = e.replace(/"""/g, '\\"""'), r = n.split(/\r\n|[\n\r]/g), o = r.length === 1, i = r.length > 1 && r.slice(1).every((h) => h.length === 0 || cd(h.charCodeAt(0))), a = n.endsWith('\\"""'), s = e.endsWith('"') && !a, u = e.endsWith("\\"), c = s || u, _ = !(t != null && t.minimize) && // add leading and trailing new lines only if it improves readability
  (!o || e.length > 70 || c || i || a);
  let l = "";
  const d = o && cd(e.charCodeAt(0));
  return (_ && !d || i) && (l += `
`), l += n, (_ || c) && (l += `
`), '"""' + l + '"""';
}
const BR = 10, Fp = 2;
function jp(e) {
  return hs(e, []);
}
function hs(e, t) {
  switch (typeof e) {
    case "string":
      return JSON.stringify(e);
    case "function":
      return e.name ? `[function ${e.name}]` : "[function]";
    case "object":
      return FR(e, t);
    default:
      return String(e);
  }
}
function FR(e, t) {
  if (e === null)
    return "null";
  if (t.includes(e))
    return "[Circular]";
  const n = [...t, e];
  if (jR(e)) {
    const r = e.toJSON();
    if (r !== e)
      return typeof r == "string" ? r : hs(r, n);
  } else if (Array.isArray(e))
    return WR(e, n);
  return VR(e, n);
}
function jR(e) {
  return typeof e.toJSON == "function";
}
function VR(e, t) {
  const n = Object.entries(e);
  return n.length === 0 ? "{}" : t.length > Fp ? "[" + XR(e) + "]" : "{ " + n.map(
    ([o, i]) => o + ": " + hs(i, t)
  ).join(", ") + " }";
}
function WR(e, t) {
  if (e.length === 0)
    return "[]";
  if (t.length > Fp)
    return "[Array]";
  const n = Math.min(BR, e.length), r = e.length - n, o = [];
  for (let i = 0; i < n; ++i)
    o.push(hs(e[i], t));
  return r === 1 ? o.push("... 1 more item") : r > 1 && o.push(`... ${r} more items`), "[" + o.join(", ") + "]";
}
function XR(e) {
  const t = Object.prototype.toString.call(e).replace(/^\[object /, "").replace(/]$/, "");
  if (t === "Object" && typeof e.constructor == "function") {
    const n = e.constructor.name;
    if (typeof n == "string" && n !== "")
      return n;
  }
  return t;
}
class YR {
  constructor(t, n = "GraphQL request", r = {
    line: 1,
    column: 1
  }) {
    typeof t == "string" || aa(!1, `Body must be a string. Received: ${jp(t)}.`), this.body = t, this.name = n, this.locationOffset = r, this.locationOffset.line > 0 || aa(
      !1,
      "line in locationOffset is 1-indexed and must be positive."
    ), this.locationOffset.column > 0 || aa(
      !1,
      "column in locationOffset is 1-indexed and must be positive."
    );
  }
  get [Symbol.toStringTag]() {
    return "Source";
  }
}
function KR(e) {
  return `"${e.replace($R, zR)}"`;
}
const $R = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;
function zR(e) {
  return qR[e.charCodeAt(0)];
}
const qR = [
  "\\u0000",
  "\\u0001",
  "\\u0002",
  "\\u0003",
  "\\u0004",
  "\\u0005",
  "\\u0006",
  "\\u0007",
  "\\b",
  "\\t",
  "\\n",
  "\\u000B",
  "\\f",
  "\\r",
  "\\u000E",
  "\\u000F",
  "\\u0010",
  "\\u0011",
  "\\u0012",
  "\\u0013",
  "\\u0014",
  "\\u0015",
  "\\u0016",
  "\\u0017",
  "\\u0018",
  "\\u0019",
  "\\u001A",
  "\\u001B",
  "\\u001C",
  "\\u001D",
  "\\u001E",
  "\\u001F",
  "",
  "",
  '\\"',
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  // 2F
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  // 3F
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  // 4F
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "\\\\",
  "",
  "",
  "",
  // 5F
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  // 6F
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "\\u007F",
  "\\u0080",
  "\\u0081",
  "\\u0082",
  "\\u0083",
  "\\u0084",
  "\\u0085",
  "\\u0086",
  "\\u0087",
  "\\u0088",
  "\\u0089",
  "\\u008A",
  "\\u008B",
  "\\u008C",
  "\\u008D",
  "\\u008E",
  "\\u008F",
  "\\u0090",
  "\\u0091",
  "\\u0092",
  "\\u0093",
  "\\u0094",
  "\\u0095",
  "\\u0096",
  "\\u0097",
  "\\u0098",
  "\\u0099",
  "\\u009A",
  "\\u009B",
  "\\u009C",
  "\\u009D",
  "\\u009E",
  "\\u009F"
], fl = Object.freeze({});
function hn(e, t, n = Bp) {
  const r = /* @__PURE__ */ new Map();
  for (const b of Object.values(Xe))
    r.set(b, JR(t, b));
  let o, i = Array.isArray(e), a = [e], s = -1, u = [], c = e, _, l;
  const d = [], h = [];
  do {
    s++;
    const b = s === a.length, T = b && u.length !== 0;
    if (b) {
      if (_ = h.length === 0 ? void 0 : d[d.length - 1], c = l, l = h.pop(), T)
        if (i) {
          c = c.slice();
          let g = 0;
          for (const [O, I] of u) {
            const N = O - g;
            I === null ? (c.splice(N, 1), g++) : c[N] = I;
          }
        } else {
          c = Object.defineProperties(
            {},
            Object.getOwnPropertyDescriptors(c)
          );
          for (const [g, O] of u)
            c[g] = O;
        }
      s = o.index, a = o.keys, u = o.edits, i = o.inArray, o = o.prev;
    } else if (l) {
      if (_ = i ? s : a[s], c = l[_], c == null)
        continue;
      d.push(_);
    }
    let E;
    if (!Array.isArray(c)) {
      var f, p;
      sd(c) || aa(!1, `Invalid AST Node: ${jp(c)}.`);
      const g = b ? (f = r.get(c.kind)) === null || f === void 0 ? void 0 : f.leave : (p = r.get(c.kind)) === null || p === void 0 ? void 0 : p.enter;
      if (E = g?.call(t, c, _, l, d, h), E === fl)
        break;
      if (E === !1) {
        if (!b) {
          d.pop();
          continue;
        }
      } else if (E !== void 0 && (u.push([_, E]), !b))
        if (sd(E))
          c = E;
        else {
          d.pop();
          continue;
        }
    }
    if (E === void 0 && T && u.push([_, c]), b)
      d.pop();
    else {
      var m;
      o = {
        inArray: i,
        index: s,
        keys: a,
        edits: u,
        prev: o
      }, i = Array.isArray(c), a = i ? c : (m = n[c.kind]) !== null && m !== void 0 ? m : [], s = -1, u = [], l && h.push(l), l = c;
    }
  } while (o !== void 0);
  return u.length !== 0 ? u[u.length - 1][1] : e;
}
function JR(e, t) {
  const n = e[t];
  return typeof n == "object" ? n : typeof n == "function" ? {
    enter: n,
    leave: void 0
  } : {
    enter: e.enter,
    leave: e.leave
  };
}
function QR(e) {
  return hn(e, ev);
}
const ZR = 80, ev = {
  Name: {
    leave: (e) => e.value
  },
  Variable: {
    leave: (e) => "$" + e.name
  },
  // Document
  Document: {
    leave: (e) => j(e.definitions, `

`)
  },
  OperationDefinition: {
    leave(e) {
      const t = ae("(", j(e.variableDefinitions, ", "), ")"), n = j(
        [
          e.operation,
          j([e.name, t]),
          j(e.directives, " ")
        ],
        " "
      );
      return (n === "query" ? "" : n + " ") + e.selectionSet;
    }
  },
  VariableDefinition: {
    leave: ({ variable: e, type: t, defaultValue: n, directives: r }) => e + ": " + t + ae(" = ", n) + ae(" ", j(r, " "))
  },
  SelectionSet: {
    leave: ({ selections: e }) => Dt(e)
  },
  Field: {
    leave({ alias: e, name: t, arguments: n, directives: r, selectionSet: o }) {
      const i = ae("", e, ": ") + t;
      let a = i + ae("(", j(n, ", "), ")");
      return a.length > ZR && (a = i + ae(`(
`, sa(j(n, `
`)), `
)`)), j([a, j(r, " "), o], " ");
    }
  },
  Argument: {
    leave: ({ name: e, value: t }) => e + ": " + t
  },
  // Fragments
  FragmentSpread: {
    leave: ({ name: e, directives: t }) => "..." + e + ae(" ", j(t, " "))
  },
  InlineFragment: {
    leave: ({ typeCondition: e, directives: t, selectionSet: n }) => j(
      [
        "...",
        ae("on ", e),
        j(t, " "),
        n
      ],
      " "
    )
  },
  FragmentDefinition: {
    leave: ({ name: e, typeCondition: t, variableDefinitions: n, directives: r, selectionSet: o }) => (
      // or removed in the future.
      `fragment ${e}${ae("(", j(n, ", "), ")")} on ${t} ${ae("", j(r, " "), " ")}` + o
    )
  },
  // Value
  IntValue: {
    leave: ({ value: e }) => e
  },
  FloatValue: {
    leave: ({ value: e }) => e
  },
  StringValue: {
    leave: ({ value: e, block: t }) => t ? LR(e) : KR(e)
  },
  BooleanValue: {
    leave: ({ value: e }) => e ? "true" : "false"
  },
  NullValue: {
    leave: () => "null"
  },
  EnumValue: {
    leave: ({ value: e }) => e
  },
  ListValue: {
    leave: ({ values: e }) => "[" + j(e, ", ") + "]"
  },
  ObjectValue: {
    leave: ({ fields: e }) => "{" + j(e, ", ") + "}"
  },
  ObjectField: {
    leave: ({ name: e, value: t }) => e + ": " + t
  },
  // Directive
  Directive: {
    leave: ({ name: e, arguments: t }) => "@" + e + ae("(", j(t, ", "), ")")
  },
  // Type
  NamedType: {
    leave: ({ name: e }) => e
  },
  ListType: {
    leave: ({ type: e }) => "[" + e + "]"
  },
  NonNullType: {
    leave: ({ type: e }) => e + "!"
  },
  // Type System Definitions
  SchemaDefinition: {
    leave: ({ description: e, directives: t, operationTypes: n }) => ae("", e, `
`) + j(["schema", j(t, " "), Dt(n)], " ")
  },
  OperationTypeDefinition: {
    leave: ({ operation: e, type: t }) => e + ": " + t
  },
  ScalarTypeDefinition: {
    leave: ({ description: e, name: t, directives: n }) => ae("", e, `
`) + j(["scalar", t, j(n, " ")], " ")
  },
  ObjectTypeDefinition: {
    leave: ({ description: e, name: t, interfaces: n, directives: r, fields: o }) => ae("", e, `
`) + j(
      [
        "type",
        t,
        ae("implements ", j(n, " & ")),
        j(r, " "),
        Dt(o)
      ],
      " "
    )
  },
  FieldDefinition: {
    leave: ({ description: e, name: t, arguments: n, type: r, directives: o }) => ae("", e, `
`) + t + (ld(n) ? ae(`(
`, sa(j(n, `
`)), `
)`) : ae("(", j(n, ", "), ")")) + ": " + r + ae(" ", j(o, " "))
  },
  InputValueDefinition: {
    leave: ({ description: e, name: t, type: n, defaultValue: r, directives: o }) => ae("", e, `
`) + j(
      [t + ": " + n, ae("= ", r), j(o, " ")],
      " "
    )
  },
  InterfaceTypeDefinition: {
    leave: ({ description: e, name: t, interfaces: n, directives: r, fields: o }) => ae("", e, `
`) + j(
      [
        "interface",
        t,
        ae("implements ", j(n, " & ")),
        j(r, " "),
        Dt(o)
      ],
      " "
    )
  },
  UnionTypeDefinition: {
    leave: ({ description: e, name: t, directives: n, types: r }) => ae("", e, `
`) + j(
      ["union", t, j(n, " "), ae("= ", j(r, " | "))],
      " "
    )
  },
  EnumTypeDefinition: {
    leave: ({ description: e, name: t, directives: n, values: r }) => ae("", e, `
`) + j(["enum", t, j(n, " "), Dt(r)], " ")
  },
  EnumValueDefinition: {
    leave: ({ description: e, name: t, directives: n }) => ae("", e, `
`) + j([t, j(n, " ")], " ")
  },
  InputObjectTypeDefinition: {
    leave: ({ description: e, name: t, directives: n, fields: r }) => ae("", e, `
`) + j(["input", t, j(n, " "), Dt(r)], " ")
  },
  DirectiveDefinition: {
    leave: ({ description: e, name: t, arguments: n, repeatable: r, locations: o }) => ae("", e, `
`) + "directive @" + t + (ld(n) ? ae(`(
`, sa(j(n, `
`)), `
)`) : ae("(", j(n, ", "), ")")) + (r ? " repeatable" : "") + " on " + j(o, " | ")
  },
  SchemaExtension: {
    leave: ({ directives: e, operationTypes: t }) => j(
      ["extend schema", j(e, " "), Dt(t)],
      " "
    )
  },
  ScalarTypeExtension: {
    leave: ({ name: e, directives: t }) => j(["extend scalar", e, j(t, " ")], " ")
  },
  ObjectTypeExtension: {
    leave: ({ name: e, interfaces: t, directives: n, fields: r }) => j(
      [
        "extend type",
        e,
        ae("implements ", j(t, " & ")),
        j(n, " "),
        Dt(r)
      ],
      " "
    )
  },
  InterfaceTypeExtension: {
    leave: ({ name: e, interfaces: t, directives: n, fields: r }) => j(
      [
        "extend interface",
        e,
        ae("implements ", j(t, " & ")),
        j(n, " "),
        Dt(r)
      ],
      " "
    )
  },
  UnionTypeExtension: {
    leave: ({ name: e, directives: t, types: n }) => j(
      [
        "extend union",
        e,
        j(t, " "),
        ae("= ", j(n, " | "))
      ],
      " "
    )
  },
  EnumTypeExtension: {
    leave: ({ name: e, directives: t, values: n }) => j(["extend enum", e, j(t, " "), Dt(n)], " ")
  },
  InputObjectTypeExtension: {
    leave: ({ name: e, directives: t, fields: n }) => j(["extend input", e, j(t, " "), Dt(n)], " ")
  }
};
function j(e, t = "") {
  var n;
  return (n = e?.filter((r) => r).join(t)) !== null && n !== void 0 ? n : "";
}
function Dt(e) {
  return ae(`{
`, sa(j(e, `
`)), `
}`);
}
function ae(e, t, n = "") {
  return t != null && t !== "" ? e + t + n : "";
}
function sa(e) {
  return ae("  ", e.replace(/\n/g, `
  `));
}
function ld(e) {
  var t;
  return (t = e?.some((n) => n.includes(`
`))) !== null && t !== void 0 ? t : !1;
}
function _d(e) {
  return e.kind === Xe.FIELD || e.kind === Xe.FRAGMENT_SPREAD || e.kind === Xe.INLINE_FRAGMENT;
}
function tv() {
  return ad();
}
function nv() {
  __DEV__ ? M(typeof lu == "boolean", lu) : M(typeof lu == "boolean", 39);
}
tv();
nv();
function ps(e, t) {
  var n = e.directives;
  return !n || !n.length ? !0 : iv(n).every(function(r) {
    var o = r.directive, i = r.ifArgument, a = !1;
    return i.value.kind === "Variable" ? (a = t && t[i.value.name.value], __DEV__ ? M(a !== void 0, "Invalid variable referenced in @".concat(o.name.value, " directive.")) : M(a !== void 0, 40)) : a = i.value.value, o.name.value === "skip" ? !a : a;
  });
}
function hl(e, t, n) {
  var r = new Set(e), o = r.size;
  return hn(t, {
    Directive: function(i) {
      if (r.delete(i.name.value) && (!n || !r.size))
        return fl;
    }
  }), n ? !r.size : r.size < o;
}
function rv(e) {
  return e && hl(["client", "export"], e, !0);
}
function ov(e) {
  var t = e.name.value;
  return t === "skip" || t === "include";
}
function iv(e) {
  var t = [];
  return e && e.length && e.forEach(function(n) {
    if (ov(n)) {
      var r = n.arguments, o = n.name.value;
      __DEV__ ? M(r && r.length === 1, "Incorrect number of arguments for the @".concat(o, " directive.")) : M(r && r.length === 1, 41);
      var i = r[0];
      __DEV__ ? M(i.name && i.name.value === "if", "Invalid argument for the @".concat(o, " directive.")) : M(i.name && i.name.value === "if", 42);
      var a = i.value;
      __DEV__ ? M(a && (a.kind === "Variable" || a.kind === "BooleanValue"), "Argument for the @".concat(o, " directive must be a variable or a boolean value.")) : M(a && (a.kind === "Variable" || a.kind === "BooleanValue"), 43), t.push({ directive: n, ifArgument: i });
    }
  }), t;
}
function av(e, t) {
  var n = t, r = [];
  e.definitions.forEach(function(i) {
    if (i.kind === "OperationDefinition")
      throw __DEV__ ? new Te("Found a ".concat(i.operation, " operation").concat(i.name ? " named '".concat(i.name.value, "'") : "", ". ") + "No operations are allowed when using a fragment as a query. Only fragments are allowed.") : new Te(44);
    i.kind === "FragmentDefinition" && r.push(i);
  }), typeof n > "u" && (__DEV__ ? M(r.length === 1, "Found ".concat(r.length, " fragments. `fragmentName` must be provided when there is not exactly 1 fragment.")) : M(r.length === 1, 45), n = r[0].name.value);
  var o = v(v({}, e), { definitions: er([
    {
      kind: "OperationDefinition",
      operation: "query",
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "FragmentSpread",
            name: {
              kind: "Name",
              value: n
            }
          }
        ]
      }
    }
  ], e.definitions, !0) });
  return o;
}
function pl(e) {
  e === void 0 && (e = []);
  var t = {};
  return e.forEach(function(n) {
    t[n.name.value] = n;
  }), t;
}
function ml(e, t) {
  switch (e.kind) {
    case "InlineFragment":
      return e;
    case "FragmentSpread": {
      var n = e.name.value;
      if (typeof t == "function")
        return t(n);
      var r = t && t[n];
      return __DEV__ ? M(r, "No fragment named ".concat(n)) : M(r, 46), r || null;
    }
    default:
      return null;
  }
}
function we(e) {
  return e !== null && typeof e == "object";
}
function Cr(e) {
  return { __ref: String(e) };
}
function ve(e) {
  return !!(e && typeof e == "object" && typeof e.__ref == "string");
}
function sv(e) {
  return we(e) && e.kind === "Document" && Array.isArray(e.definitions);
}
function uv(e) {
  return e.kind === "StringValue";
}
function cv(e) {
  return e.kind === "BooleanValue";
}
function lv(e) {
  return e.kind === "IntValue";
}
function _v(e) {
  return e.kind === "FloatValue";
}
function dv(e) {
  return e.kind === "Variable";
}
function fv(e) {
  return e.kind === "ObjectValue";
}
function hv(e) {
  return e.kind === "ListValue";
}
function pv(e) {
  return e.kind === "EnumValue";
}
function mv(e) {
  return e.kind === "NullValue";
}
function Kr(e, t, n, r) {
  if (lv(n) || _v(n))
    e[t.value] = Number(n.value);
  else if (cv(n) || uv(n))
    e[t.value] = n.value;
  else if (fv(n)) {
    var o = {};
    n.fields.map(function(a) {
      return Kr(o, a.name, a.value, r);
    }), e[t.value] = o;
  } else if (dv(n)) {
    var i = (r || {})[n.name.value];
    e[t.value] = i;
  } else if (hv(n))
    e[t.value] = n.values.map(function(a) {
      var s = {};
      return Kr(s, t, a, r), s[t.value];
    });
  else if (pv(n))
    e[t.value] = n.value;
  else if (mv(n))
    e[t.value] = null;
  else
    throw __DEV__ ? new Te('The inline argument "'.concat(t.value, '" of kind "').concat(n.kind, '"') + "is not supported. Use variables instead of inline arguments to overcome this limitation.") : new Te(55);
}
function Tv(e, t) {
  var n = null;
  e.directives && (n = {}, e.directives.forEach(function(o) {
    n[o.name.value] = {}, o.arguments && o.arguments.forEach(function(i) {
      var a = i.name, s = i.value;
      return Kr(n[o.name.value], a, s, t);
    });
  }));
  var r = null;
  return e.arguments && e.arguments.length && (r = {}, e.arguments.forEach(function(o) {
    var i = o.name, a = o.value;
    return Kr(r, i, a, t);
  })), Tl(e.name.value, r, n);
}
var Ev = [
  "connection",
  "include",
  "skip",
  "client",
  "rest",
  "export"
], Tl = Object.assign(function(e, t, n) {
  if (t && n && n.connection && n.connection.key)
    if (n.connection.filter && n.connection.filter.length > 0) {
      var r = n.connection.filter ? n.connection.filter : [];
      r.sort();
      var o = {};
      return r.forEach(function(s) {
        o[s] = t[s];
      }), "".concat(n.connection.key, "(").concat(mo(o), ")");
    } else
      return n.connection.key;
  var i = e;
  if (t) {
    var a = mo(t);
    i += "(".concat(a, ")");
  }
  return n && Object.keys(n).forEach(function(s) {
    Ev.indexOf(s) === -1 && (n[s] && Object.keys(n[s]).length ? i += "@".concat(s, "(").concat(mo(n[s]), ")") : i += "@".concat(s));
  }), i;
}, {
  setStringify: function(e) {
    var t = mo;
    return mo = e, t;
  }
}), mo = function(t) {
  return JSON.stringify(t, bv);
};
function bv(e, t) {
  return we(t) && !Array.isArray(t) && (t = Object.keys(t).sort().reduce(function(n, r) {
    return n[r] = t[r], n;
  }, {})), t;
}
function ms(e, t) {
  if (e.arguments && e.arguments.length) {
    var n = {};
    return e.arguments.forEach(function(r) {
      var o = r.name, i = r.value;
      return Kr(n, o, i, t);
    }), n;
  }
  return null;
}
function ir(e) {
  return e.alias ? e.alias.value : e.name.value;
}
function Zu(e, t, n) {
  for (var r, o = 0, i = t.selections; o < i.length; o++) {
    var a = i[o];
    if (ar(a)) {
      if (a.name.value === "__typename")
        return e[ir(a)];
    } else
      r ? r.push(a) : r = [a];
  }
  if (typeof e.__typename == "string")
    return e.__typename;
  if (r)
    for (var s = 0, u = r; s < u.length; s++) {
      var a = u[s], c = Zu(e, ml(a, n).selectionSet, n);
      if (typeof c == "string")
        return c;
    }
}
function ar(e) {
  return e.kind === "Field";
}
function Ov(e) {
  return e.kind === "InlineFragment";
}
function Ts(e) {
  __DEV__ ? M(e && e.kind === "Document", 'Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a "gql" tag? http://docs.apollostack.com/apollo-client/core.html#gql') : M(e && e.kind === "Document", 47);
  var t = e.definitions.filter(function(n) {
    return n.kind !== "FragmentDefinition";
  }).map(function(n) {
    if (n.kind !== "OperationDefinition")
      throw __DEV__ ? new Te('Schema type definitions not allowed in queries. Found: "'.concat(n.kind, '"')) : new Te(48);
    return n;
  });
  return __DEV__ ? M(t.length <= 1, "Ambiguous GraphQL document: contains ".concat(t.length, " operations")) : M(t.length <= 1, 49), e;
}
function yi(e) {
  return Ts(e), e.definitions.filter(function(t) {
    return t.kind === "OperationDefinition";
  })[0];
}
function ec(e) {
  return e.definitions.filter(function(t) {
    return t.kind === "OperationDefinition" && !!t.name;
  }).map(function(t) {
    return t.name.value;
  })[0] || null;
}
function El(e) {
  return e.definitions.filter(function(t) {
    return t.kind === "FragmentDefinition";
  });
}
function Vp(e) {
  var t = yi(e);
  return __DEV__ ? M(t && t.operation === "query", "Must contain a query definition.") : M(t && t.operation === "query", 50), t;
}
function gv(e) {
  __DEV__ ? M(e.kind === "Document", 'Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a "gql" tag? http://docs.apollostack.com/apollo-client/core.html#gql') : M(e.kind === "Document", 51), __DEV__ ? M(e.definitions.length <= 1, "Fragment must have exactly one definition.") : M(e.definitions.length <= 1, 52);
  var t = e.definitions[0];
  return __DEV__ ? M(t.kind === "FragmentDefinition", "Must be a fragment definition.") : M(t.kind === "FragmentDefinition", 53), t;
}
function Es(e) {
  Ts(e);
  for (var t, n = 0, r = e.definitions; n < r.length; n++) {
    var o = r[n];
    if (o.kind === "OperationDefinition") {
      var i = o.operation;
      if (i === "query" || i === "mutation" || i === "subscription")
        return o;
    }
    o.kind === "FragmentDefinition" && !t && (t = o);
  }
  if (t)
    return t;
  throw __DEV__ ? new Te("Expected a parsed GraphQL query with a query, mutation, subscription, or a fragment.") : new Te(54);
}
function bl(e) {
  var t = /* @__PURE__ */ Object.create(null), n = e && e.variableDefinitions;
  return n && n.length && n.forEach(function(r) {
    r.defaultValue && Kr(t, r.variable.name, r.defaultValue);
  }), t;
}
var He = Array.isArray;
function zt(e) {
  return Array.isArray(e) && e.length > 0;
}
var dd = {
  kind: Xe.FIELD,
  name: {
    kind: Xe.NAME,
    value: "__typename"
  }
};
function Wp(e, t) {
  return !e || e.selectionSet.selections.every(function(n) {
    return n.kind === Xe.FRAGMENT_SPREAD && Wp(t[n.name.value], t);
  });
}
function Rv(e) {
  return Wp(yi(e) || gv(e), pl(El(e))) ? null : e;
}
function vv(e) {
  var t = /* @__PURE__ */ new Set(), n = [];
  return e.forEach(function(r) {
    r.name ? t.add(r.name) : r.test && n.push(r.test);
  }), function(r) {
    return t.has(r.name.value) || n.some(function(o) {
      return o(r);
    });
  };
}
function fd(e) {
  var t = /* @__PURE__ */ new Map();
  return function(r) {
    r === void 0 && (r = e);
    var o = t.get(r);
    return o || t.set(r, o = {
      variables: /* @__PURE__ */ new Set(),
      fragmentSpreads: /* @__PURE__ */ new Set()
    }), o;
  };
}
function Xp(e, t) {
  for (var n = fd(""), r = fd(""), o = function(T) {
    for (var E = 0, g = void 0; E < T.length && (g = T[E]); ++E)
      if (!He(g)) {
        if (g.kind === Xe.OPERATION_DEFINITION)
          return n(g.name && g.name.value);
        if (g.kind === Xe.FRAGMENT_DEFINITION)
          return r(g.name.value);
      }
    return __DEV__ && M.error("Could not find operation or fragment"), null;
  }, i = 0, a = t.definitions.length - 1; a >= 0; --a)
    t.definitions[a].kind === Xe.OPERATION_DEFINITION && ++i;
  var s = vv(e), u = e.some(function(T) {
    return T.remove;
  }), c = function(T) {
    return u && T && T.some(s);
  }, _ = /* @__PURE__ */ new Map(), l = !1, d = {
    enter: function(T) {
      if (c(T.directives))
        return l = !0, null;
    }
  }, h = hn(t, {
    Field: d,
    InlineFragment: d,
    VariableDefinition: {
      enter: function() {
        return !1;
      }
    },
    Variable: {
      enter: function(T, E, g, O, I) {
        var N = o(I);
        N && N.variables.add(T.name.value);
      }
    },
    FragmentSpread: {
      enter: function(T, E, g, O, I) {
        if (c(T.directives))
          return l = !0, null;
        var N = o(I);
        N && N.fragmentSpreads.add(T.name.value);
      }
    },
    FragmentDefinition: {
      enter: function(T, E, g, O) {
        _.set(JSON.stringify(O), T);
      },
      leave: function(T, E, g, O) {
        var I = _.get(JSON.stringify(O));
        if (T === I)
          return T;
        if (i > 0 && T.selectionSet.selections.every(function(N) {
          return N.kind === Xe.FIELD && N.name.value === "__typename";
        }))
          return r(T.name.value).removed = !0, l = !0, null;
      }
    },
    Directive: {
      leave: function(T) {
        if (s(T))
          return l = !0, null;
      }
    }
  });
  if (!l)
    return t;
  var f = function(T) {
    return T.transitiveVars || (T.transitiveVars = new Set(T.variables), T.removed || T.fragmentSpreads.forEach(function(E) {
      f(r(E)).transitiveVars.forEach(function(g) {
        T.transitiveVars.add(g);
      });
    })), T;
  }, p = /* @__PURE__ */ new Set();
  h.definitions.forEach(function(T) {
    T.kind === Xe.OPERATION_DEFINITION ? f(n(T.name && T.name.value)).fragmentSpreads.forEach(function(E) {
      p.add(E);
    }) : T.kind === Xe.FRAGMENT_DEFINITION && i === 0 && !r(T.name.value).removed && p.add(T.name.value);
  }), p.forEach(function(T) {
    f(r(T)).fragmentSpreads.forEach(function(E) {
      p.add(E);
    });
  });
  var m = function(T) {
    return !!(!p.has(T) || r(T).removed);
  }, b = {
    enter: function(T) {
      if (m(T.name.value))
        return null;
    }
  };
  return Rv(hn(h, {
    FragmentSpread: b,
    FragmentDefinition: b,
    OperationDefinition: {
      leave: function(T) {
        if (T.variableDefinitions) {
          var E = f(n(T.name && T.name.value)).transitiveVars;
          if (E.size < T.variableDefinitions.length)
            return v(v({}, T), { variableDefinitions: T.variableDefinitions.filter(function(g) {
              return E.has(g.variable.name.value);
            }) });
        }
      }
    }
  }));
}
var Ol = Object.assign(function(e) {
  return hn(e, {
    SelectionSet: {
      enter: function(t, n, r) {
        if (!(r && r.kind === Xe.OPERATION_DEFINITION)) {
          var o = t.selections;
          if (o) {
            var i = o.some(function(s) {
              return ar(s) && (s.name.value === "__typename" || s.name.value.lastIndexOf("__", 0) === 0);
            });
            if (!i) {
              var a = r;
              if (!(ar(a) && a.directives && a.directives.some(function(s) {
                return s.name.value === "export";
              })))
                return v(v({}, t), { selections: er(er([], o, !0), [dd], !1) });
            }
          }
        }
      }
    }
  });
}, {
  added: function(e) {
    return e === dd;
  }
}), Nv = {
  test: function(e) {
    var t = e.name.value === "connection";
    return t && (!e.arguments || !e.arguments.some(function(n) {
      return n.name.value === "key";
    })) && __DEV__ && M.warn("Removing an @connection directive even though it does not have a key. You may want to use the key parameter to specify a store key."), t;
  }
};
function Iv(e) {
  return Xp([Nv], Ts(e));
}
function Av(e) {
  var t = Es(e), n = t.operation;
  if (n === "query")
    return e;
  var r = hn(e, {
    OperationDefinition: {
      enter: function(o) {
        return v(v({}, o), { operation: "query" });
      }
    }
  });
  return r;
}
function yv(e) {
  Ts(e);
  var t = Xp([
    {
      test: function(n) {
        return n.name.value === "client";
      },
      remove: !0
    }
  ], e);
  return t;
}
var Sv = Object.prototype.hasOwnProperty;
function hd() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  return gl(e);
}
function gl(e) {
  var t = e[0] || {}, n = e.length;
  if (n > 1)
    for (var r = new jn(), o = 1; o < n; ++o)
      t = r.merge(t, e[o]);
  return t;
}
var Gv = function(e, t, n) {
  return this.merge(e[n], t[n]);
}, jn = function() {
  function e(t) {
    t === void 0 && (t = Gv), this.reconciler = t, this.isObject = we, this.pastCopies = /* @__PURE__ */ new Set();
  }
  return e.prototype.merge = function(t, n) {
    for (var r = this, o = [], i = 2; i < arguments.length; i++)
      o[i - 2] = arguments[i];
    return we(n) && we(t) ? (Object.keys(n).forEach(function(a) {
      if (Sv.call(t, a)) {
        var s = t[a];
        if (n[a] !== s) {
          var u = r.reconciler.apply(r, er([t, n, a], o, !1));
          u !== s && (t = r.shallowCopyForMerge(t), t[a] = u);
        }
      } else
        t = r.shallowCopyForMerge(t), t[a] = n[a];
    }), t) : n;
  }, e.prototype.shallowCopyForMerge = function(t) {
    return we(t) && (this.pastCopies.has(t) || (Array.isArray(t) ? t = t.slice(0) : t = v({ __proto__: Object.getPrototypeOf(t) }, t), this.pastCopies.add(t))), t;
  }, e;
}();
function Dv(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n)
    return (n = n.call(e)).next.bind(n);
  if (Array.isArray(e) || (n = Cv(e)) || t && e && typeof e.length == "number") {
    n && (e = n);
    var r = 0;
    return function() {
      return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Cv(e, t) {
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
function md(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Rl(e, t, n) {
  return t && md(e.prototype, t), n && md(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
var vl = function() {
  return typeof Symbol == "function";
}, Nl = function(e) {
  return vl() && !!Symbol[e];
}, Il = function(e) {
  return Nl(e) ? Symbol[e] : "@@" + e;
};
vl() && !Nl("observable") && (Symbol.observable = Symbol("observable"));
var wv = Il("iterator"), tc = Il("observable"), Yp = Il("species");
function La(e, t) {
  var n = e[t];
  if (n != null) {
    if (typeof n != "function")
      throw new TypeError(n + " is not a function");
    return n;
  }
}
function To(e) {
  var t = e.constructor;
  return t !== void 0 && (t = t[Yp], t === null && (t = void 0)), t !== void 0 ? t : ye;
}
function Uv(e) {
  return e instanceof ye;
}
function $r(e) {
  $r.log ? $r.log(e) : setTimeout(function() {
    throw e;
  });
}
function ua(e) {
  Promise.resolve().then(function() {
    try {
      e();
    } catch (t) {
      $r(t);
    }
  });
}
function Kp(e) {
  var t = e._cleanup;
  if (t !== void 0 && (e._cleanup = void 0, !!t))
    try {
      if (typeof t == "function")
        t();
      else {
        var n = La(t, "unsubscribe");
        n && n.call(t);
      }
    } catch (r) {
      $r(r);
    }
}
function nc(e) {
  e._observer = void 0, e._queue = void 0, e._state = "closed";
}
function Pv(e) {
  var t = e._queue;
  if (t) {
    e._queue = void 0, e._state = "ready";
    for (var n = 0; n < t.length && ($p(e, t[n].type, t[n].value), e._state !== "closed"); ++n)
      ;
  }
}
function $p(e, t, n) {
  e._state = "running";
  var r = e._observer;
  try {
    var o = La(r, t);
    switch (t) {
      case "next":
        o && o.call(r, n);
        break;
      case "error":
        if (nc(e), o)
          o.call(r, n);
        else
          throw n;
        break;
      case "complete":
        nc(e), o && o.call(r);
        break;
    }
  } catch (i) {
    $r(i);
  }
  e._state === "closed" ? Kp(e) : e._state === "running" && (e._state = "ready");
}
function _u(e, t, n) {
  if (e._state !== "closed") {
    if (e._state === "buffering") {
      e._queue.push({
        type: t,
        value: n
      });
      return;
    }
    if (e._state !== "ready") {
      e._state = "buffering", e._queue = [{
        type: t,
        value: n
      }], ua(function() {
        return Pv(e);
      });
      return;
    }
    $p(e, t, n);
  }
}
var Hv = /* @__PURE__ */ function() {
  function e(n, r) {
    this._cleanup = void 0, this._observer = n, this._queue = void 0, this._state = "initializing";
    var o = new kv(this);
    try {
      this._cleanup = r.call(void 0, o);
    } catch (i) {
      o.error(i);
    }
    this._state === "initializing" && (this._state = "ready");
  }
  var t = e.prototype;
  return t.unsubscribe = function() {
    this._state !== "closed" && (nc(this), Kp(this));
  }, Rl(e, [{
    key: "closed",
    get: function() {
      return this._state === "closed";
    }
  }]), e;
}(), kv = /* @__PURE__ */ function() {
  function e(n) {
    this._subscription = n;
  }
  var t = e.prototype;
  return t.next = function(r) {
    _u(this._subscription, "next", r);
  }, t.error = function(r) {
    _u(this._subscription, "error", r);
  }, t.complete = function() {
    _u(this._subscription, "complete");
  }, Rl(e, [{
    key: "closed",
    get: function() {
      return this._subscription._state === "closed";
    }
  }]), e;
}(), ye = /* @__PURE__ */ function() {
  function e(n) {
    if (!(this instanceof e))
      throw new TypeError("Observable cannot be called as a function");
    if (typeof n != "function")
      throw new TypeError("Observable initializer must be a function");
    this._subscriber = n;
  }
  var t = e.prototype;
  return t.subscribe = function(r) {
    return (typeof r != "object" || r === null) && (r = {
      next: r,
      error: arguments[1],
      complete: arguments[2]
    }), new Hv(r, this._subscriber);
  }, t.forEach = function(r) {
    var o = this;
    return new Promise(function(i, a) {
      if (typeof r != "function") {
        a(new TypeError(r + " is not a function"));
        return;
      }
      function s() {
        u.unsubscribe(), i();
      }
      var u = o.subscribe({
        next: function(c) {
          try {
            r(c, s);
          } catch (_) {
            a(_), u.unsubscribe();
          }
        },
        error: a,
        complete: i
      });
    });
  }, t.map = function(r) {
    var o = this;
    if (typeof r != "function")
      throw new TypeError(r + " is not a function");
    var i = To(this);
    return new i(function(a) {
      return o.subscribe({
        next: function(s) {
          try {
            s = r(s);
          } catch (u) {
            return a.error(u);
          }
          a.next(s);
        },
        error: function(s) {
          a.error(s);
        },
        complete: function() {
          a.complete();
        }
      });
    });
  }, t.filter = function(r) {
    var o = this;
    if (typeof r != "function")
      throw new TypeError(r + " is not a function");
    var i = To(this);
    return new i(function(a) {
      return o.subscribe({
        next: function(s) {
          try {
            if (!r(s))
              return;
          } catch (u) {
            return a.error(u);
          }
          a.next(s);
        },
        error: function(s) {
          a.error(s);
        },
        complete: function() {
          a.complete();
        }
      });
    });
  }, t.reduce = function(r) {
    var o = this;
    if (typeof r != "function")
      throw new TypeError(r + " is not a function");
    var i = To(this), a = arguments.length > 1, s = !1, u = arguments[1], c = u;
    return new i(function(_) {
      return o.subscribe({
        next: function(l) {
          var d = !s;
          if (s = !0, !d || a)
            try {
              c = r(c, l);
            } catch (h) {
              return _.error(h);
            }
          else
            c = l;
        },
        error: function(l) {
          _.error(l);
        },
        complete: function() {
          if (!s && !a)
            return _.error(new TypeError("Cannot reduce an empty sequence"));
          _.next(c), _.complete();
        }
      });
    });
  }, t.concat = function() {
    for (var r = this, o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    var s = To(this);
    return new s(function(u) {
      var c, _ = 0;
      function l(d) {
        c = d.subscribe({
          next: function(h) {
            u.next(h);
          },
          error: function(h) {
            u.error(h);
          },
          complete: function() {
            _ === i.length ? (c = void 0, u.complete()) : l(s.from(i[_++]));
          }
        });
      }
      return l(r), function() {
        c && (c.unsubscribe(), c = void 0);
      };
    });
  }, t.flatMap = function(r) {
    var o = this;
    if (typeof r != "function")
      throw new TypeError(r + " is not a function");
    var i = To(this);
    return new i(function(a) {
      var s = [], u = o.subscribe({
        next: function(_) {
          if (r)
            try {
              _ = r(_);
            } catch (d) {
              return a.error(d);
            }
          var l = i.from(_).subscribe({
            next: function(d) {
              a.next(d);
            },
            error: function(d) {
              a.error(d);
            },
            complete: function() {
              var d = s.indexOf(l);
              d >= 0 && s.splice(d, 1), c();
            }
          });
          s.push(l);
        },
        error: function(_) {
          a.error(_);
        },
        complete: function() {
          c();
        }
      });
      function c() {
        u.closed && s.length === 0 && a.complete();
      }
      return function() {
        s.forEach(function(_) {
          return _.unsubscribe();
        }), u.unsubscribe();
      };
    });
  }, t[tc] = function() {
    return this;
  }, e.from = function(r) {
    var o = typeof this == "function" ? this : e;
    if (r == null)
      throw new TypeError(r + " is not an object");
    var i = La(r, tc);
    if (i) {
      var a = i.call(r);
      if (Object(a) !== a)
        throw new TypeError(a + " is not an object");
      return Uv(a) && a.constructor === o ? a : new o(function(s) {
        return a.subscribe(s);
      });
    }
    if (Nl("iterator") && (i = La(r, wv), i))
      return new o(function(s) {
        ua(function() {
          if (!s.closed) {
            for (var u = Dv(i.call(r)), c; !(c = u()).done; ) {
              var _ = c.value;
              if (s.next(_), s.closed)
                return;
            }
            s.complete();
          }
        });
      });
    if (Array.isArray(r))
      return new o(function(s) {
        ua(function() {
          if (!s.closed) {
            for (var u = 0; u < r.length; ++u)
              if (s.next(r[u]), s.closed)
                return;
            s.complete();
          }
        });
      });
    throw new TypeError(r + " is not observable");
  }, e.of = function() {
    for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
      o[i] = arguments[i];
    var a = typeof this == "function" ? this : e;
    return new a(function(s) {
      ua(function() {
        if (!s.closed) {
          for (var u = 0; u < o.length; ++u)
            if (s.next(o[u]), s.closed)
              return;
          s.complete();
        }
      });
    });
  }, Rl(e, null, [{
    key: Yp,
    get: function() {
      return this;
    }
  }]), e;
}();
vl() && Object.defineProperty(ye, Symbol("extensions"), {
  value: {
    symbol: tc,
    hostReportError: $r
  },
  configurable: !0
});
function Mv(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function xv(e) {
  var t, n = e.Symbol;
  if (typeof n == "function")
    if (n.observable)
      t = n.observable;
    else {
      typeof n.for == "function" ? t = n.for("https://github.com/benlesh/symbol-observable") : t = n("https://github.com/benlesh/symbol-observable");
      try {
        n.observable = t;
      } catch {
      }
    }
  else
    t = "@@observable";
  return t;
}
var br;
typeof self < "u" ? br = self : typeof window < "u" ? br = window : typeof global < "u" ? br = global : typeof module < "u" ? br = module : br = Function("return this")();
xv(br);
var Td = ye.prototype, Ed = "@@observable";
Td[Ed] || (Td[Ed] = function() {
  return this;
});
var Lv = Object.prototype.toString;
function zp(e) {
  return rc(e);
}
function rc(e, t) {
  switch (Lv.call(e)) {
    case "[object Array]": {
      if (t = t || /* @__PURE__ */ new Map(), t.has(e))
        return t.get(e);
      var n = e.slice(0);
      return t.set(e, n), n.forEach(function(o, i) {
        n[i] = rc(o, t);
      }), n;
    }
    case "[object Object]": {
      if (t = t || /* @__PURE__ */ new Map(), t.has(e))
        return t.get(e);
      var r = Object.create(Object.getPrototypeOf(e));
      return t.set(e, r), Object.keys(e).forEach(function(o) {
        r[o] = rc(e[o], t);
      }), r;
    }
    default:
      return e;
  }
}
function Bv(e) {
  var t = /* @__PURE__ */ new Set([e]);
  return t.forEach(function(n) {
    we(n) && Fv(n) === n && Object.getOwnPropertyNames(n).forEach(function(r) {
      we(n[r]) && t.add(n[r]);
    });
  }), e;
}
function Fv(e) {
  if (__DEV__ && !Object.isFrozen(e))
    try {
      Object.freeze(e);
    } catch (t) {
      if (t instanceof TypeError)
        return null;
      throw t;
    }
  return e;
}
function oc(e) {
  return __DEV__ && Bv(e), e;
}
function Po(e, t, n) {
  var r = [];
  e.forEach(function(o) {
    return o[t] && r.push(o);
  }), r.forEach(function(o) {
    return o[t](n);
  });
}
function du(e, t, n) {
  return new ye(function(r) {
    var o = r.next, i = r.error, a = r.complete, s = 0, u = !1, c = {
      then: function(h) {
        return new Promise(function(f) {
          return f(h());
        });
      }
    };
    function _(h, f) {
      return h ? function(p) {
        ++s;
        var m = function() {
          return h(p);
        };
        c = c.then(m, m).then(function(b) {
          --s, o && o.call(r, b), u && l.complete();
        }, function(b) {
          throw --s, b;
        }).catch(function(b) {
          i && i.call(r, b);
        });
      } : function(p) {
        return f && f.call(r, p);
      };
    }
    var l = {
      next: _(t, o),
      error: _(n, i),
      complete: function() {
        u = !0, s || a && a.call(r);
      }
    }, d = e.subscribe(l);
    return function() {
      return d.unsubscribe();
    };
  });
}
var lr = typeof WeakMap == "function" && Et(function() {
  return navigator.product;
}) !== "ReactNative", jv = typeof WeakSet == "function", qp = typeof Symbol == "function" && typeof Symbol.for == "function", bs = qp && Symbol.asyncIterator;
Et(function() {
  return window.document.createElement;
});
Et(function() {
  return navigator.userAgent.indexOf("jsdom") >= 0;
});
function Jp(e) {
  function t(n) {
    Object.defineProperty(e, n, { value: ye });
  }
  return qp && Symbol.species && t(Symbol.species), t("@@species"), e;
}
function bd(e) {
  return e && typeof e.then == "function";
}
var Or = function(e) {
  Lt(t, e);
  function t(n) {
    var r = e.call(this, function(o) {
      return r.addObserver(o), function() {
        return r.removeObserver(o);
      };
    }) || this;
    return r.observers = /* @__PURE__ */ new Set(), r.promise = new Promise(function(o, i) {
      r.resolve = o, r.reject = i;
    }), r.handlers = {
      next: function(o) {
        r.sub !== null && (r.latest = ["next", o], r.notify("next", o), Po(r.observers, "next", o));
      },
      error: function(o) {
        var i = r.sub;
        i !== null && (i && setTimeout(function() {
          return i.unsubscribe();
        }), r.sub = null, r.latest = ["error", o], r.reject(o), r.notify("error", o), Po(r.observers, "error", o));
      },
      complete: function() {
        var o = r, i = o.sub, a = o.sources, s = a === void 0 ? [] : a;
        if (i !== null) {
          var u = s.shift();
          u ? bd(u) ? u.then(function(c) {
            return r.sub = c.subscribe(r.handlers);
          }) : r.sub = u.subscribe(r.handlers) : (i && setTimeout(function() {
            return i.unsubscribe();
          }), r.sub = null, r.latest && r.latest[0] === "next" ? r.resolve(r.latest[1]) : r.resolve(), r.notify("complete"), Po(r.observers, "complete"));
        }
      }
    }, r.nextResultListeners = /* @__PURE__ */ new Set(), r.cancel = function(o) {
      r.reject(o), r.sources = [], r.handlers.complete();
    }, r.promise.catch(function(o) {
    }), typeof n == "function" && (n = [new ye(n)]), bd(n) ? n.then(function(o) {
      return r.start(o);
    }, r.handlers.error) : r.start(n), r;
  }
  return t.prototype.start = function(n) {
    this.sub === void 0 && (this.sources = Array.from(n), this.handlers.complete());
  }, t.prototype.deliverLastMessage = function(n) {
    if (this.latest) {
      var r = this.latest[0], o = n[r];
      o && o.call(n, this.latest[1]), this.sub === null && r === "next" && n.complete && n.complete();
    }
  }, t.prototype.addObserver = function(n) {
    this.observers.has(n) || (this.deliverLastMessage(n), this.observers.add(n));
  }, t.prototype.removeObserver = function(n) {
    this.observers.delete(n) && this.observers.size < 1 && this.handlers.complete();
  }, t.prototype.notify = function(n, r) {
    var o = this.nextResultListeners;
    o.size && (this.nextResultListeners = /* @__PURE__ */ new Set(), o.forEach(function(i) {
      return i(n, r);
    }));
  }, t.prototype.beforeNext = function(n) {
    var r = !1;
    this.nextResultListeners.add(function(o, i) {
      r || (r = !0, n(o, i));
    });
  }, t;
}(ye);
Jp(Or);
function wr(e) {
  return "incremental" in e;
}
function Vv(e) {
  return "hasNext" in e && "data" in e;
}
function Wv(e) {
  return wr(e) || Vv(e);
}
function Xv(e) {
  return we(e) && "payload" in e;
}
function Qp(e, t) {
  var n = e, r = new jn();
  return wr(t) && zt(t.incremental) && t.incremental.forEach(function(o) {
    for (var i = o.data, a = o.path, s = a.length - 1; s >= 0; --s) {
      var u = a[s], c = !isNaN(+u), _ = c ? [] : {};
      _[u] = i, i = _;
    }
    n = r.merge(n, i);
  }), n;
}
function ca(e) {
  var t = ic(e);
  return zt(t);
}
function ic(e) {
  var t = zt(e.errors) ? e.errors.slice(0) : [];
  return wr(e) && zt(e.incremental) && e.incremental.forEach(function(n) {
    n.errors && t.push.apply(t, n.errors);
  }), t;
}
function Os() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  var n = /* @__PURE__ */ Object.create(null);
  return e.forEach(function(r) {
    r && Object.keys(r).forEach(function(o) {
      var i = r[o];
      i !== void 0 && (n[o] = i);
    });
  }), n;
}
var Od = /* @__PURE__ */ new Map();
function ac(e) {
  var t = Od.get(e) || 1;
  return Od.set(e, t + 1), "".concat(e, ":").concat(t, ":").concat(Math.random().toString(36).slice(2));
}
function Yv(e) {
  var t = ac("stringifyForDisplay");
  return JSON.stringify(e, function(n, r) {
    return r === void 0 ? t : r;
  }).split(JSON.stringify(t)).join("<undefined>");
}
function fu(e, t) {
  return Os(e, t, t.variables && {
    variables: v(v({}, e && e.variables), t.variables)
  });
}
function gd(e) {
  return new ye(function(t) {
    t.error(e);
  });
}
var sc = function(e, t, n) {
  var r = new Error(n);
  throw r.name = "ServerError", r.response = e, r.statusCode = e.status, r.result = t, r;
};
function Kv(e) {
  for (var t = [
    "query",
    "operationName",
    "variables",
    "extensions",
    "context"
  ], n = 0, r = Object.keys(e); n < r.length; n++) {
    var o = r[n];
    if (t.indexOf(o) < 0)
      throw __DEV__ ? new Te("illegal argument: ".concat(o)) : new Te(27);
  }
  return e;
}
function $v(e, t) {
  var n = v({}, e), r = function(i) {
    typeof i == "function" ? n = v(v({}, n), i(n)) : n = v(v({}, n), i);
  }, o = function() {
    return v({}, n);
  };
  return Object.defineProperty(t, "setContext", {
    enumerable: !1,
    value: r
  }), Object.defineProperty(t, "getContext", {
    enumerable: !1,
    value: o
  }), t;
}
function zv(e) {
  var t = {
    variables: e.variables || {},
    extensions: e.extensions || {},
    operationName: e.operationName,
    query: e.query
  };
  return t.operationName || (t.operationName = typeof t.query != "string" ? ec(t.query) || void 0 : ""), t;
}
function Rd(e, t) {
  return t ? t(e) : ye.of();
}
function Eo(e) {
  return typeof e == "function" ? new oo(e) : e;
}
function Ki(e) {
  return e.request.length <= 1;
}
var qv = function(e) {
  Lt(t, e);
  function t(n, r) {
    var o = e.call(this, n) || this;
    return o.link = r, o;
  }
  return t;
}(Error), oo = function() {
  function e(t) {
    t && (this.request = t);
  }
  return e.empty = function() {
    return new e(function() {
      return ye.of();
    });
  }, e.from = function(t) {
    return t.length === 0 ? e.empty() : t.map(Eo).reduce(function(n, r) {
      return n.concat(r);
    });
  }, e.split = function(t, n, r) {
    var o = Eo(n), i = Eo(r || new e(Rd));
    return Ki(o) && Ki(i) ? new e(function(a) {
      return t(a) ? o.request(a) || ye.of() : i.request(a) || ye.of();
    }) : new e(function(a, s) {
      return t(a) ? o.request(a, s) || ye.of() : i.request(a, s) || ye.of();
    });
  }, e.execute = function(t, n) {
    return t.request($v(n.context, zv(Kv(n)))) || ye.of();
  }, e.concat = function(t, n) {
    var r = Eo(t);
    if (Ki(r))
      return __DEV__ && M.warn(new qv("You are calling concat on a terminating link, which will have no effect", r)), r;
    var o = Eo(n);
    return Ki(o) ? new e(function(i) {
      return r.request(i, function(a) {
        return o.request(a) || ye.of();
      }) || ye.of();
    }) : new e(function(i, a) {
      return r.request(i, function(s) {
        return o.request(s, a) || ye.of();
      }) || ye.of();
    });
  }, e.prototype.split = function(t, n, r) {
    return this.concat(e.split(t, n, r || new e(Rd)));
  }, e.prototype.concat = function(t) {
    return e.concat(this, t);
  }, e.prototype.request = function(t, n) {
    throw __DEV__ ? new Te("request is not implemented") : new Te(22);
  }, e.prototype.onError = function(t, n) {
    if (n && n.error)
      return n.error(t), !1;
    throw t;
  }, e.prototype.setOnError = function(t) {
    return this.onError = t, this;
  }, e;
}(), uc = oo.execute, Jv = "3.7.17";
function Qv(e) {
  return !!e.body;
}
function Zv(e) {
  return !!e.getReader;
}
function eN(e) {
  return !!(bs && e[Symbol.asyncIterator]);
}
function tN(e) {
  return !!e.stream;
}
function nN(e) {
  return !!e.arrayBuffer;
}
function rN(e) {
  return !!e.pipe;
}
function oN(e) {
  var t, n = e[Symbol.asyncIterator]();
  return t = {
    next: function() {
      return n.next();
    }
  }, t[Symbol.asyncIterator] = function() {
    return this;
  }, t;
}
function iN(e) {
  var t = null, n = null, r = !1, o = [], i = [];
  function a(l) {
    if (!n) {
      if (i.length) {
        var d = i.shift();
        if (Array.isArray(d) && d[0])
          return d[0]({ value: l, done: !1 });
      }
      o.push(l);
    }
  }
  function s(l) {
    n = l;
    var d = i.slice();
    d.forEach(function(h) {
      h[1](l);
    }), !t || t();
  }
  function u() {
    r = !0;
    var l = i.slice();
    l.forEach(function(d) {
      d[0]({ value: void 0, done: !0 });
    }), !t || t();
  }
  t = function() {
    t = null, e.removeListener("data", a), e.removeListener("error", s), e.removeListener("end", u), e.removeListener("finish", u), e.removeListener("close", u);
  }, e.on("data", a), e.on("error", s), e.on("end", u), e.on("finish", u), e.on("close", u);
  function c() {
    return new Promise(function(l, d) {
      if (n)
        return d(n);
      if (o.length)
        return l({ value: o.shift(), done: !1 });
      if (r)
        return l({ value: void 0, done: !0 });
      i.push([l, d]);
    });
  }
  var _ = {
    next: function() {
      return c();
    }
  };
  return bs && (_[Symbol.asyncIterator] = function() {
    return this;
  }), _;
}
function aN(e) {
  var t = !1, n = {
    next: function() {
      return t ? Promise.resolve({
        value: void 0,
        done: !0
      }) : (t = !0, new Promise(function(r, o) {
        e.then(function(i) {
          r({ value: i, done: !1 });
        }).catch(o);
      }));
    }
  };
  return bs && (n[Symbol.asyncIterator] = function() {
    return this;
  }), n;
}
function vd(e) {
  var t = {
    next: function() {
      return e.read();
    }
  };
  return bs && (t[Symbol.asyncIterator] = function() {
    return this;
  }), t;
}
function sN(e) {
  var t = e;
  if (Qv(e) && (t = e.body), eN(t))
    return oN(t);
  if (Zv(t))
    return vd(t.getReader());
  if (tN(t))
    return vd(t.stream().getReader());
  if (nN(t))
    return aN(t.arrayBuffer());
  if (rN(t))
    return iN(t);
  throw new Error("Unknown body type for responseIterator. Please pass a streamable response.");
}
var Al = Symbol();
function uN(e) {
  return e.extensions ? Array.isArray(e.extensions[Al]) : !1;
}
function cN(e) {
  return e.hasOwnProperty("graphQLErrors");
}
var lN = function(e) {
  var t = er(er(er([], e.graphQLErrors, !0), e.clientErrors, !0), e.protocolErrors, !0);
  return e.networkError && t.push(e.networkError), t.map(function(n) {
    return we(n) && n.message || "Error message not found.";
  }).join(`
`);
}, hr = function(e) {
  Lt(t, e);
  function t(n) {
    var r = n.graphQLErrors, o = n.protocolErrors, i = n.clientErrors, a = n.networkError, s = n.errorMessage, u = n.extraInfo, c = e.call(this, s) || this;
    return c.name = "ApolloError", c.graphQLErrors = r || [], c.protocolErrors = o || [], c.clientErrors = i || [], c.networkError = a || null, c.message = s || lN(c), c.extraInfo = u, c.__proto__ = t.prototype, c;
  }
  return t;
}(Error), Nd = Object.prototype.hasOwnProperty;
function _N(e, t) {
  var n, r, o, i, a;
  return In(this, void 0, void 0, function() {
    var s, u, c, _, l, d, h, f, p, m, b, T, E, g, O, I, N, w, G, D, Z, ne, J;
    return An(this, function(B) {
      switch (B.label) {
        case 0:
          if (TextDecoder === void 0)
            throw new Error("TextDecoder must be defined in the environment: please import a polyfill.");
          s = new TextDecoder("utf-8"), u = (n = e.headers) === null || n === void 0 ? void 0 : n.get("content-type"), c = "boundary=", _ = u?.includes(c) ? u?.substring(u?.indexOf(c) + c.length).replace(/['"]/g, "").replace(/\;(.*)/gm, "").trim() : "-", l = `\r
--`.concat(_), d = "", h = sN(e), f = !0, B.label = 1;
        case 1:
          return f ? [4, h.next()] : [3, 3];
        case 2:
          for (p = B.sent(), m = p.value, b = p.done, T = typeof m == "string" ? m : s.decode(m), E = d.length - l.length + 1, f = !b, d += T, g = d.indexOf(l, E); g > -1; ) {
            if (O = void 0, ne = [
              d.slice(0, g),
              d.slice(g + l.length)
            ], O = ne[0], d = ne[1], I = O.indexOf(`\r
\r
`), N = dN(O.slice(0, I)), w = N["content-type"], w && w.toLowerCase().indexOf("application/json") === -1)
              throw new Error("Unsupported patch content type: application/json is required.");
            if (G = O.slice(I), G)
              try {
                D = Zp(e, G), Object.keys(D).length > 1 || "data" in D || "incremental" in D || "errors" in D || "payload" in D ? Xv(D) ? (Z = {}, "payload" in D && (Z = v({}, D.payload)), "errors" in D && (Z = v(v({}, Z), { extensions: v(v({}, "extensions" in Z ? Z.extensions : null), (J = {}, J[Al] = D.errors, J)) })), (r = t.next) === null || r === void 0 || r.call(t, Z)) : (o = t.next) === null || o === void 0 || o.call(t, D) : Object.keys(D).length === 1 && "hasNext" in D && !D.hasNext && ((i = t.complete) === null || i === void 0 || i.call(t));
              } catch (H) {
                yl(H, t);
              }
            g = d.indexOf(l);
          }
          return [3, 1];
        case 3:
          return (a = t.complete) === null || a === void 0 || a.call(t), [2];
      }
    });
  });
}
function dN(e) {
  var t = {};
  return e.split(`
`).forEach(function(n) {
    var r = n.indexOf(":");
    if (r > -1) {
      var o = n.slice(0, r).trim().toLowerCase(), i = n.slice(r + 1).trim();
      t[o] = i;
    }
  }), t;
}
function Zp(e, t) {
  if (e.status >= 300) {
    var n = function() {
      try {
        return JSON.parse(t);
      } catch {
        return t;
      }
    };
    sc(e, n(), "Response not successful: Received status code ".concat(e.status));
  }
  try {
    return JSON.parse(t);
  } catch (o) {
    var r = o;
    throw r.name = "ServerParseError", r.response = e, r.statusCode = e.status, r.bodyText = t, r;
  }
}
function yl(e, t) {
  var n, r;
  e.name !== "AbortError" && (e.result && e.result.errors && e.result.data && ((n = t.next) === null || n === void 0 || n.call(t, e.result)), (r = t.error) === null || r === void 0 || r.call(t, e));
}
function fN(e, t, n) {
  hN(t)(e).then(function(r) {
    var o, i;
    (o = n.next) === null || o === void 0 || o.call(n, r), (i = n.complete) === null || i === void 0 || i.call(n);
  }).catch(function(r) {
    return yl(r, n);
  });
}
function hN(e) {
  return function(t) {
    return t.text().then(function(n) {
      return Zp(t, n);
    }).then(function(n) {
      return t.status >= 300 && sc(t, n, "Response not successful: Received status code ".concat(t.status)), !Array.isArray(n) && !Nd.call(n, "data") && !Nd.call(n, "errors") && sc(t, n, "Server response was missing for query '".concat(Array.isArray(e) ? e.map(function(r) {
        return r.operationName;
      }) : e.operationName, "'.")), n;
    });
  };
}
var cc = function(e, t) {
  var n;
  try {
    n = JSON.stringify(e);
  } catch (o) {
    var r = __DEV__ ? new Te("Network request failed. ".concat(t, " is not serializable: ").concat(o.message)) : new Te(24);
    throw r.parseError = o, r;
  }
  return n;
}, pN = {
  includeQuery: !0,
  includeExtensions: !1,
  preserveHeaderCase: !1
}, mN = {
  accept: "*/*",
  "content-type": "application/json"
}, TN = {
  method: "POST"
}, EN = {
  http: pN,
  headers: mN,
  options: TN
}, bN = function(e, t) {
  return t(e);
};
function ON(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  var o = {}, i = {};
  n.forEach(function(l) {
    o = v(v(v({}, o), l.options), { headers: v(v({}, o.headers), l.headers) }), l.credentials && (o.credentials = l.credentials), i = v(v({}, i), l.http);
  }), o.headers && (o.headers = gN(o.headers, i.preserveHeaderCase));
  var a = e.operationName, s = e.extensions, u = e.variables, c = e.query, _ = { operationName: a, variables: u };
  return i.includeExtensions && (_.extensions = s), i.includeQuery && (_.query = t(c, QR)), {
    options: o,
    body: _
  };
}
function gN(e, t) {
  if (!t) {
    var n = /* @__PURE__ */ Object.create(null);
    return Object.keys(Object(e)).forEach(function(i) {
      n[i.toLowerCase()] = e[i];
    }), n;
  }
  var r = /* @__PURE__ */ Object.create(null);
  Object.keys(Object(e)).forEach(function(i) {
    r[i.toLowerCase()] = { originalName: i, value: e[i] };
  });
  var o = /* @__PURE__ */ Object.create(null);
  return Object.keys(r).forEach(function(i) {
    o[r[i].originalName] = r[i].value;
  }), o;
}
var RN = function(e) {
  if (!e && typeof fetch > "u")
    throw __DEV__ ? new Te(`
"fetch" has not been found globally and no fetcher has been configured. To fix this, install a fetch package (like https://www.npmjs.com/package/cross-fetch), instantiate the fetcher, and pass it into your HttpLink constructor. For example:

import fetch from 'cross-fetch';
import { ApolloClient, HttpLink } from '@apollo/client';
const client = new ApolloClient({
  link: new HttpLink({ uri: '/graphql', fetch })
});
    `) : new Te(23);
}, vN = function() {
  if (typeof AbortController > "u")
    return { controller: !1, signal: !1 };
  var e = new AbortController(), t = e.signal;
  return { controller: e, signal: t };
}, NN = function(e, t) {
  var n = e.getContext(), r = n.uri;
  return r || (typeof t == "function" ? t(e) : t || "/graphql");
};
function IN(e, t) {
  var n = [], r = function(l, d) {
    n.push("".concat(l, "=").concat(encodeURIComponent(d)));
  };
  if ("query" in t && r("query", t.query), t.operationName && r("operationName", t.operationName), t.variables) {
    var o = void 0;
    try {
      o = cc(t.variables, "Variables map");
    } catch (l) {
      return { parseError: l };
    }
    r("variables", o);
  }
  if (t.extensions) {
    var i = void 0;
    try {
      i = cc(t.extensions, "Extensions map");
    } catch (l) {
      return { parseError: l };
    }
    r("extensions", i);
  }
  var a = "", s = e, u = e.indexOf("#");
  u !== -1 && (a = e.substr(u), s = e.substr(0, u));
  var c = s.indexOf("?") === -1 ? "?" : "&", _ = s + c + n.join("&") + a;
  return { newURI: _ };
}
var Id = Et(function() {
  return fetch;
}), em = function(e) {
  e === void 0 && (e = {});
  var t = e.uri, n = t === void 0 ? "/graphql" : t, r = e.fetch, o = e.print, i = o === void 0 ? bN : o, a = e.includeExtensions, s = e.preserveHeaderCase, u = e.useGETForQueries, c = e.includeUnusedVariables, _ = c === void 0 ? !1 : c, l = or(e, ["uri", "fetch", "print", "includeExtensions", "preserveHeaderCase", "useGETForQueries", "includeUnusedVariables"]);
  __DEV__ && RN(r || Id);
  var d = {
    http: { includeExtensions: a, preserveHeaderCase: s },
    options: l.fetchOptions,
    credentials: l.credentials,
    headers: l.headers
  };
  return new oo(function(h) {
    var f = NN(h, n), p = h.getContext(), m = {};
    if (p.clientAwareness) {
      var b = p.clientAwareness, T = b.name, E = b.version;
      T && (m["apollographql-client-name"] = T), E && (m["apollographql-client-version"] = E);
    }
    var g = v(v({}, m), p.headers), O = {
      http: p.http,
      options: p.fetchOptions,
      credentials: p.credentials,
      headers: g
    }, I = ON(h, i, EN, d, O), N = I.options, w = I.body;
    if (w.variables && !_) {
      var G = new Set(Object.keys(w.variables));
      hn(h.query, {
        Variable: function(C, x, k) {
          k && k.kind !== "VariableDefinition" && G.delete(C.name.value);
        }
      }), G.size && (w.variables = v({}, w.variables), G.forEach(function(C) {
        delete w.variables[C];
      }));
    }
    var D;
    if (!N.signal) {
      var Z = vN(), ne = Z.controller, J = Z.signal;
      D = ne, D && (N.signal = J);
    }
    var B = function(C) {
      return C.kind === "OperationDefinition" && C.operation === "mutation";
    }, H = function(C) {
      return C.kind === "OperationDefinition" && C.operation === "subscription";
    }, Q = H(Es(h.query)), ue = hl(["defer"], h.query);
    if (u && !h.query.definitions.some(B) && (N.method = "GET"), ue || Q) {
      N.headers = N.headers || {};
      var oe = "multipart/mixed;";
      Q && ue && __DEV__ && M.warn("Multipart-subscriptions do not support @defer"), Q ? oe += "boundary=graphql;subscriptionSpec=1.0,application/json" : ue && (oe += "deferSpec=20220824,application/json"), N.headers.accept = oe;
    }
    if (N.method === "GET") {
      var Se = IN(f, w), Le = Se.newURI, Ae = Se.parseError;
      if (Ae)
        return gd(Ae);
      f = Le;
    } else
      try {
        N.body = cc(w, "Payload");
      } catch (C) {
        return gd(C);
      }
    return new ye(function(C) {
      var x = r || Et(function() {
        return fetch;
      }) || Id;
      return x(f, N).then(function(k) {
        var V;
        h.setContext({ response: k });
        var R = (V = k.headers) === null || V === void 0 ? void 0 : V.get("content-type");
        return R !== null && /^multipart\/mixed/i.test(R) ? _N(k, C) : fN(k, h, C);
      }).catch(function(k) {
        return yl(k, C);
      }), function() {
        D && D.abort();
      };
    });
  });
}, AN = function(e) {
  Lt(t, e);
  function t(n) {
    n === void 0 && (n = {});
    var r = e.call(this, em(n).request) || this;
    return r.options = n, r;
  }
  return t;
}(oo);
const { toString: Ad, hasOwnProperty: yN } = Object.prototype, yd = Function.prototype.toString, lc = /* @__PURE__ */ new Map();
function Be(e, t) {
  try {
    return _c(e, t);
  } finally {
    lc.clear();
  }
}
function _c(e, t) {
  if (e === t)
    return !0;
  const n = Ad.call(e), r = Ad.call(t);
  if (n !== r)
    return !1;
  switch (n) {
    case "[object Array]":
      if (e.length !== t.length)
        return !1;
    case "[object Object]": {
      if (Gd(e, t))
        return !0;
      const o = Sd(e), i = Sd(t), a = o.length;
      if (a !== i.length)
        return !1;
      for (let s = 0; s < a; ++s)
        if (!yN.call(t, o[s]))
          return !1;
      for (let s = 0; s < a; ++s) {
        const u = o[s];
        if (!_c(e[u], t[u]))
          return !1;
      }
      return !0;
    }
    case "[object Error]":
      return e.name === t.name && e.message === t.message;
    case "[object Number]":
      if (e !== e)
        return t !== t;
    case "[object Boolean]":
    case "[object Date]":
      return +e == +t;
    case "[object RegExp]":
    case "[object String]":
      return e == `${t}`;
    case "[object Map]":
    case "[object Set]": {
      if (e.size !== t.size)
        return !1;
      if (Gd(e, t))
        return !0;
      const o = e.entries(), i = n === "[object Map]";
      for (; ; ) {
        const a = o.next();
        if (a.done)
          break;
        const [s, u] = a.value;
        if (!t.has(s) || i && !_c(u, t.get(s)))
          return !1;
      }
      return !0;
    }
    case "[object Uint16Array]":
    case "[object Uint8Array]":
    case "[object Uint32Array]":
    case "[object Int32Array]":
    case "[object Int8Array]":
    case "[object Int16Array]":
    case "[object ArrayBuffer]":
      e = new Uint8Array(e), t = new Uint8Array(t);
    case "[object DataView]": {
      let o = e.byteLength;
      if (o === t.byteLength)
        for (; o-- && e[o] === t[o]; )
          ;
      return o === -1;
    }
    case "[object AsyncFunction]":
    case "[object GeneratorFunction]":
    case "[object AsyncGeneratorFunction]":
    case "[object Function]": {
      const o = yd.call(e);
      return o !== yd.call(t) ? !1 : !DN(o, GN);
    }
  }
  return !1;
}
function Sd(e) {
  return Object.keys(e).filter(SN, e);
}
function SN(e) {
  return this[e] !== void 0;
}
const GN = "{ [native code] }";
function DN(e, t) {
  const n = e.length - t.length;
  return n >= 0 && e.indexOf(t, n) === n;
}
function Gd(e, t) {
  let n = lc.get(e);
  if (n) {
    if (n.has(t))
      return !0;
  } else
    lc.set(e, n = /* @__PURE__ */ new Set());
  return n.add(t), !1;
}
var CN = function() {
  return /* @__PURE__ */ Object.create(null);
}, tm = Array.prototype, wN = tm.forEach, UN = tm.slice, PN = (
  /** @class */
  function() {
    function e(t, n) {
      t === void 0 && (t = !0), n === void 0 && (n = CN), this.weakness = t, this.makeData = n;
    }
    return e.prototype.lookup = function() {
      for (var t = [], n = 0; n < arguments.length; n++)
        t[n] = arguments[n];
      return this.lookupArray(t);
    }, e.prototype.lookupArray = function(t) {
      var n = this;
      return wN.call(t, function(r) {
        return n = n.getChildTrie(r);
      }), n.data || (n.data = this.makeData(UN.call(t)));
    }, e.prototype.getChildTrie = function(t) {
      var n = this.weakness && HN(t) ? this.weak || (this.weak = /* @__PURE__ */ new WeakMap()) : this.strong || (this.strong = /* @__PURE__ */ new Map()), r = n.get(t);
      return r || n.set(t, r = new e(this.weakness, this.makeData)), r;
    }, e;
  }()
);
function HN(e) {
  switch (typeof e) {
    case "object":
      if (e === null)
        break;
    case "function":
      return !0;
  }
  return !1;
}
let ze = null;
const Dd = {};
let kN = 1;
const MN = () => class {
  constructor() {
    this.id = [
      "slot",
      kN++,
      Date.now(),
      Math.random().toString(36).slice(2)
    ].join(":");
  }
  hasValue() {
    for (let t = ze; t; t = t.parent)
      if (this.id in t.slots) {
        const n = t.slots[this.id];
        if (n === Dd)
          break;
        return t !== ze && (ze.slots[this.id] = n), !0;
      }
    return ze && (ze.slots[this.id] = Dd), !1;
  }
  getValue() {
    if (this.hasValue())
      return ze.slots[this.id];
  }
  withValue(t, n, r, o) {
    const i = {
      __proto__: null,
      [this.id]: t
    }, a = ze;
    ze = { parent: a, slots: i };
    try {
      return n.apply(o, r);
    } finally {
      ze = a;
    }
  }
  // Capture the current context and wrap a callback function so that it
  // reestablishes the captured context when called.
  static bind(t) {
    const n = ze;
    return function() {
      const r = ze;
      try {
        return ze = n, t.apply(this, arguments);
      } finally {
        ze = r;
      }
    };
  }
  // Immediately run a callback function without any captured context.
  static noContext(t, n, r) {
    if (ze) {
      const o = ze;
      try {
        return ze = null, t.apply(r, n);
      } finally {
        ze = o;
      }
    } else
      return t.apply(r, n);
  }
};
function Cd(e) {
  try {
    return e();
  } catch {
  }
}
const hu = "@wry/context:Slot", xN = (
  // Prefer globalThis when available.
  // https://github.com/benjamn/wryware/issues/347
  Cd(() => globalThis) || // Fall back to global, which works in Node.js and may be converted by some
  // bundlers to the appropriate identifier (window, self, ...) depending on the
  // bundling target. https://github.com/endojs/endo/issues/576#issuecomment-1178515224
  Cd(() => global) || // Otherwise, use a dummy host that's local to this module. We used to fall
  // back to using the Array constructor as a namespace, but that was flagged in
  // https://github.com/benjamn/wryware/issues/347, and can be avoided.
  /* @__PURE__ */ Object.create(null)
), wd = xN, nm = wd[hu] || // Earlier versions of this package stored the globalKey property on the Array
// constructor, so we check there as well, to prevent Slot class duplication.
Array[hu] || function(e) {
  try {
    Object.defineProperty(wd, hu, {
      value: e,
      enumerable: !1,
      writable: !1,
      // When it was possible for globalHost to be the Array constructor (a
      // legacy Slot dedup strategy), it was important for the property to be
      // configurable:true so it could be deleted. That does not seem to be as
      // important when globalHost is the global object, but I don't want to
      // cause similar problems again, and configurable:true seems safest.
      // https://github.com/endojs/endo/issues/576#issuecomment-1178274008
      configurable: !0
    });
  } finally {
    return e;
  }
}(MN());
function LN() {
}
var BN = (
  /** @class */
  function() {
    function e(t, n) {
      t === void 0 && (t = 1 / 0), n === void 0 && (n = LN), this.max = t, this.dispose = n, this.map = /* @__PURE__ */ new Map(), this.newest = null, this.oldest = null;
    }
    return e.prototype.has = function(t) {
      return this.map.has(t);
    }, e.prototype.get = function(t) {
      var n = this.getNode(t);
      return n && n.value;
    }, e.prototype.getNode = function(t) {
      var n = this.map.get(t);
      if (n && n !== this.newest) {
        var r = n.older, o = n.newer;
        o && (o.older = r), r && (r.newer = o), n.older = this.newest, n.older.newer = n, n.newer = null, this.newest = n, n === this.oldest && (this.oldest = o);
      }
      return n;
    }, e.prototype.set = function(t, n) {
      var r = this.getNode(t);
      return r ? r.value = n : (r = {
        key: t,
        value: n,
        newer: null,
        older: this.newest
      }, this.newest && (this.newest.newer = r), this.newest = r, this.oldest = this.oldest || r, this.map.set(t, r), r.value);
    }, e.prototype.clean = function() {
      for (; this.oldest && this.map.size > this.max; )
        this.delete(this.oldest.key);
    }, e.prototype.delete = function(t) {
      var n = this.map.get(t);
      return n ? (n === this.newest && (this.newest = n.older), n === this.oldest && (this.oldest = n.newer), n.newer && (n.newer.older = n.older), n.older && (n.older.newer = n.newer), this.map.delete(t), this.dispose(n.value, t), !0) : !1;
    }, e;
  }()
), gs = new nm(), pu, FN = Object.prototype.hasOwnProperty, Sl = (pu = Array.from, pu === void 0 ? function(e) {
  var t = [];
  return e.forEach(function(n) {
    return t.push(n);
  }), t;
} : pu);
function Ba(e) {
  var t = e.unsubscribe;
  typeof t == "function" && (e.unsubscribe = void 0, t());
}
var qo = [], jN = 100;
function zr(e, t) {
  if (!e)
    throw new Error(t || "assertion failure");
}
function VN(e, t) {
  var n = e.length;
  return (
    // Unknown values are not equal to each other.
    n > 0 && // Both values must be ordinary (or both exceptional) to be equal.
    n === t.length && // The underlying value or exception must be the same.
    e[n - 1] === t[n - 1]
  );
}
function rm(e) {
  switch (e.length) {
    case 0:
      throw new Error("unknown value");
    case 1:
      return e[0];
    case 2:
      throw e[1];
  }
}
function WN(e) {
  return e.slice(0);
}
var XN = (
  /** @class */
  function() {
    function e(t) {
      this.fn = t, this.parents = /* @__PURE__ */ new Set(), this.childValues = /* @__PURE__ */ new Map(), this.dirtyChildren = null, this.dirty = !0, this.recomputing = !1, this.value = [], this.deps = null, ++e.count;
    }
    return e.prototype.peek = function() {
      if (this.value.length === 1 && !Vn(this))
        return Ud(this), this.value[0];
    }, e.prototype.recompute = function(t) {
      return zr(!this.recomputing, "already recomputing"), Ud(this), Vn(this) ? YN(this, t) : rm(this.value);
    }, e.prototype.setDirty = function() {
      this.dirty || (this.dirty = !0, this.value.length = 0, om(this), Ba(this));
    }, e.prototype.dispose = function() {
      var t = this;
      this.setDirty(), cm(this), Gl(this, function(n, r) {
        n.setDirty(), lm(n, t);
      });
    }, e.prototype.forget = function() {
      this.dispose();
    }, e.prototype.dependOn = function(t) {
      t.add(this), this.deps || (this.deps = qo.pop() || /* @__PURE__ */ new Set()), this.deps.add(t);
    }, e.prototype.forgetDeps = function() {
      var t = this;
      this.deps && (Sl(this.deps).forEach(function(n) {
        return n.delete(t);
      }), this.deps.clear(), qo.push(this.deps), this.deps = null);
    }, e.count = 0, e;
  }()
);
function Ud(e) {
  var t = gs.getValue();
  if (t)
    return e.parents.add(t), t.childValues.has(e) || t.childValues.set(e, []), Vn(e) ? am(t, e) : sm(t, e), t;
}
function YN(e, t) {
  return cm(e), gs.withValue(e, KN, [e, t]), zN(e, t) && $N(e), rm(e.value);
}
function KN(e, t) {
  e.recomputing = !0, e.value.length = 0;
  try {
    e.value[0] = e.fn.apply(null, t);
  } catch (n) {
    e.value[1] = n;
  }
  e.recomputing = !1;
}
function Vn(e) {
  return e.dirty || !!(e.dirtyChildren && e.dirtyChildren.size);
}
function $N(e) {
  e.dirty = !1, !Vn(e) && im(e);
}
function om(e) {
  Gl(e, am);
}
function im(e) {
  Gl(e, sm);
}
function Gl(e, t) {
  var n = e.parents.size;
  if (n)
    for (var r = Sl(e.parents), o = 0; o < n; ++o)
      t(r[o], e);
}
function am(e, t) {
  zr(e.childValues.has(t)), zr(Vn(t));
  var n = !Vn(e);
  if (!e.dirtyChildren)
    e.dirtyChildren = qo.pop() || /* @__PURE__ */ new Set();
  else if (e.dirtyChildren.has(t))
    return;
  e.dirtyChildren.add(t), n && om(e);
}
function sm(e, t) {
  zr(e.childValues.has(t)), zr(!Vn(t));
  var n = e.childValues.get(t);
  n.length === 0 ? e.childValues.set(t, WN(t.value)) : VN(n, t.value) || e.setDirty(), um(e, t), !Vn(e) && im(e);
}
function um(e, t) {
  var n = e.dirtyChildren;
  n && (n.delete(t), n.size === 0 && (qo.length < jN && qo.push(n), e.dirtyChildren = null));
}
function cm(e) {
  e.childValues.size > 0 && e.childValues.forEach(function(t, n) {
    lm(e, n);
  }), e.forgetDeps(), zr(e.dirtyChildren === null);
}
function lm(e, t) {
  t.parents.delete(e), e.childValues.delete(t), um(e, t);
}
function zN(e, t) {
  if (typeof e.subscribe == "function")
    try {
      Ba(e), e.unsubscribe = e.subscribe.apply(null, t);
    } catch {
      return e.setDirty(), !1;
    }
  return !0;
}
var qN = {
  setDirty: !0,
  dispose: !0,
  forget: !0
  // Fully remove parent Entry from LRU cache and computation graph
};
function _m(e) {
  var t = /* @__PURE__ */ new Map(), n = e && e.subscribe;
  function r(o) {
    var i = gs.getValue();
    if (i) {
      var a = t.get(o);
      a || t.set(o, a = /* @__PURE__ */ new Set()), i.dependOn(a), typeof n == "function" && (Ba(a), a.unsubscribe = n(o));
    }
  }
  return r.dirty = function(i, a) {
    var s = t.get(i);
    if (s) {
      var u = a && FN.call(qN, a) ? a : "setDirty";
      Sl(s).forEach(function(c) {
        return c[u]();
      }), t.delete(i), Ba(s);
    }
  }, r;
}
function dm() {
  var e = new PN(typeof WeakMap == "function");
  return function() {
    return e.lookupArray(arguments);
  };
}
dm();
var mu = /* @__PURE__ */ new Set();
function Fa(e, t) {
  t === void 0 && (t = /* @__PURE__ */ Object.create(null));
  var n = new BN(t.max || Math.pow(2, 16), function(c) {
    return c.dispose();
  }), r = t.keyArgs, o = t.makeCacheKey || dm(), i = function() {
    var c = o.apply(null, r ? r.apply(null, arguments) : arguments);
    if (c === void 0)
      return e.apply(null, arguments);
    var _ = n.get(c);
    _ || (n.set(c, _ = new XN(e)), _.subscribe = t.subscribe, _.forget = function() {
      return n.delete(c);
    });
    var l = _.recompute(Array.prototype.slice.call(arguments));
    return n.set(c, _), mu.add(n), gs.hasValue() || (mu.forEach(function(d) {
      return d.clean();
    }), mu.clear()), l;
  };
  Object.defineProperty(i, "size", {
    get: function() {
      return n.map.size;
    },
    configurable: !1,
    enumerable: !1
  });
  function a(c) {
    var _ = n.get(c);
    _ && _.setDirty();
  }
  i.dirtyKey = a, i.dirty = function() {
    a(o.apply(null, arguments));
  };
  function s(c) {
    var _ = n.get(c);
    if (_)
      return _.peek();
  }
  i.peekKey = s, i.peek = function() {
    return s(o.apply(null, arguments));
  };
  function u(c) {
    return n.delete(c);
  }
  return i.forgetKey = u, i.forget = function() {
    return u(o.apply(null, arguments));
  }, i.makeCacheKey = o, i.getKey = r ? function() {
    return o.apply(null, r.apply(null, arguments));
  } : o, Object.freeze(i);
}
var JN = function() {
  function e() {
    this.getFragmentDoc = Fa(av);
  }
  return e.prototype.batch = function(t) {
    var n = this, r = typeof t.optimistic == "string" ? t.optimistic : t.optimistic === !1 ? null : void 0, o;
    return this.performTransaction(function() {
      return o = t.update(n);
    }, r), o;
  }, e.prototype.recordOptimisticTransaction = function(t, n) {
    this.performTransaction(t, n);
  }, e.prototype.transformDocument = function(t) {
    return t;
  }, e.prototype.transformForLink = function(t) {
    return t;
  }, e.prototype.identify = function(t) {
  }, e.prototype.gc = function() {
    return [];
  }, e.prototype.modify = function(t) {
    return !1;
  }, e.prototype.readQuery = function(t, n) {
    return n === void 0 && (n = !!t.optimistic), this.read(v(v({}, t), { rootId: t.id || "ROOT_QUERY", optimistic: n }));
  }, e.prototype.readFragment = function(t, n) {
    return n === void 0 && (n = !!t.optimistic), this.read(v(v({}, t), { query: this.getFragmentDoc(t.fragment, t.fragmentName), rootId: t.id, optimistic: n }));
  }, e.prototype.writeQuery = function(t) {
    var n = t.id, r = t.data, o = or(t, ["id", "data"]);
    return this.write(Object.assign(o, {
      dataId: n || "ROOT_QUERY",
      result: r
    }));
  }, e.prototype.writeFragment = function(t) {
    var n = t.id, r = t.data, o = t.fragment, i = t.fragmentName, a = or(t, ["id", "data", "fragment", "fragmentName"]);
    return this.write(Object.assign(a, {
      query: this.getFragmentDoc(o, i),
      dataId: n,
      result: r
    }));
  }, e.prototype.updateQuery = function(t, n) {
    return this.batch({
      update: function(r) {
        var o = r.readQuery(t), i = n(o);
        return i == null ? o : (r.writeQuery(v(v({}, t), { data: i })), i);
      }
    });
  }, e.prototype.updateFragment = function(t, n) {
    return this.batch({
      update: function(r) {
        var o = r.readFragment(t), i = n(o);
        return i == null ? o : (r.writeFragment(v(v({}, t), { data: i })), i);
      }
    });
  }, e;
}(), fm = function(e) {
  Lt(t, e);
  function t(n, r, o, i) {
    var a, s = e.call(this, n) || this;
    if (s.message = n, s.path = r, s.query = o, s.variables = i, Array.isArray(s.path)) {
      s.missing = s.message;
      for (var u = s.path.length - 1; u >= 0; --u)
        s.missing = (a = {}, a[s.path[u]] = s.missing, a);
    } else
      s.missing = s.path;
    return s.__proto__ = t.prototype, s;
  }
  return t;
}(Error);
const QN = () => /* @__PURE__ */ Object.create(null), { forEach: ZN, slice: eI } = Array.prototype, { hasOwnProperty: tI } = Object.prototype;
class io {
  constructor(t = !0, n = QN) {
    this.weakness = t, this.makeData = n;
  }
  lookup(...t) {
    return this.lookupArray(t);
  }
  lookupArray(t) {
    let n = this;
    return ZN.call(t, (r) => n = n.getChildTrie(r)), tI.call(n, "data") ? n.data : n.data = this.makeData(eI.call(t));
  }
  peek(...t) {
    return this.peekArray(t);
  }
  peekArray(t) {
    let n = this;
    for (let r = 0, o = t.length; n && r < o; ++r) {
      const i = this.weakness && Pd(t[r]) ? n.weak : n.strong;
      n = i && i.get(t[r]);
    }
    return n && n.data;
  }
  getChildTrie(t) {
    const n = this.weakness && Pd(t) ? this.weak || (this.weak = /* @__PURE__ */ new WeakMap()) : this.strong || (this.strong = /* @__PURE__ */ new Map());
    let r = n.get(t);
    return r || n.set(t, r = new io(this.weakness, this.makeData)), r;
  }
}
function Pd(e) {
  switch (typeof e) {
    case "object":
      if (e === null)
        break;
    case "function":
      return !0;
  }
  return !1;
}
var We = Object.prototype.hasOwnProperty;
function bo(e) {
  return e == null;
}
function hm(e, t) {
  var n = e.__typename, r = e.id, o = e._id;
  if (typeof n == "string" && (t && (t.keyObject = bo(r) ? bo(o) ? void 0 : { _id: o } : { id: r }), bo(r) && !bo(o) && (r = o), !bo(r)))
    return "".concat(n, ":").concat(typeof r == "number" || typeof r == "string" ? r : JSON.stringify(r));
}
var pm = {
  dataIdFromObject: hm,
  addTypename: !0,
  resultCaching: !0,
  canonizeResults: !1
};
function nI(e) {
  return Os(pm, e);
}
function mm(e) {
  var t = e.canonizeResults;
  return t === void 0 ? pm.canonizeResults : t;
}
function rI(e, t) {
  return ve(t) ? e.get(t.__ref, "__typename") : t && t.__typename;
}
var Tm = /^[_a-z][_0-9a-z]*/i;
function Wn(e) {
  var t = e.match(Tm);
  return t ? t[0] : e;
}
function dc(e, t, n) {
  return we(t) ? He(t) ? t.every(function(r) {
    return dc(e, r, n);
  }) : e.selections.every(function(r) {
    if (ar(r) && ps(r, n)) {
      var o = ir(r);
      return We.call(t, o) && (!r.selectionSet || dc(r.selectionSet, t[o], n));
    }
    return !0;
  }) : !1;
}
function Ar(e) {
  return we(e) && !ve(e) && !He(e);
}
function oI() {
  return new jn();
}
function Em(e, t) {
  var n = pl(El(e));
  return {
    fragmentMap: n,
    lookupFragment: function(r) {
      var o = n[r];
      return !o && t && (o = t.lookup(r)), o || null;
    }
  };
}
var la = /* @__PURE__ */ Object.create(null), Tu = function() {
  return la;
}, Hd = /* @__PURE__ */ Object.create(null), Jo = function() {
  function e(t, n) {
    var r = this;
    this.policies = t, this.group = n, this.data = /* @__PURE__ */ Object.create(null), this.rootIds = /* @__PURE__ */ Object.create(null), this.refs = /* @__PURE__ */ Object.create(null), this.getFieldValue = function(o, i) {
      return oc(ve(o) ? r.get(o.__ref, i) : o && o[i]);
    }, this.canRead = function(o) {
      return ve(o) ? r.has(o.__ref) : typeof o == "object";
    }, this.toReference = function(o, i) {
      if (typeof o == "string")
        return Cr(o);
      if (ve(o))
        return o;
      var a = r.policies.identify(o)[0];
      if (a) {
        var s = Cr(a);
        return i && r.merge(a, o), s;
      }
    };
  }
  return e.prototype.toObject = function() {
    return v({}, this.data);
  }, e.prototype.has = function(t) {
    return this.lookup(t, !0) !== void 0;
  }, e.prototype.get = function(t, n) {
    if (this.group.depend(t, n), We.call(this.data, t)) {
      var r = this.data[t];
      if (r && We.call(r, n))
        return r[n];
    }
    if (n === "__typename" && We.call(this.policies.rootTypenamesById, t))
      return this.policies.rootTypenamesById[t];
    if (this instanceof vn)
      return this.parent.get(t, n);
  }, e.prototype.lookup = function(t, n) {
    if (n && this.group.depend(t, "__exists"), We.call(this.data, t))
      return this.data[t];
    if (this instanceof vn)
      return this.parent.lookup(t, n);
    if (this.policies.rootTypenamesById[t])
      return /* @__PURE__ */ Object.create(null);
  }, e.prototype.merge = function(t, n) {
    var r = this, o;
    ve(t) && (t = t.__ref), ve(n) && (n = n.__ref);
    var i = typeof t == "string" ? this.lookup(o = t) : t, a = typeof n == "string" ? this.lookup(o = n) : n;
    if (a) {
      __DEV__ ? M(typeof o == "string", "store.merge expects a string ID") : M(typeof o == "string", 1);
      var s = new jn(aI).merge(i, a);
      if (this.data[o] = s, s !== i && (delete this.refs[o], this.group.caching)) {
        var u = /* @__PURE__ */ Object.create(null);
        i || (u.__exists = 1), Object.keys(a).forEach(function(c) {
          if (!i || i[c] !== s[c]) {
            u[c] = 1;
            var _ = Wn(c);
            _ !== c && !r.policies.hasKeyArgs(s.__typename, _) && (u[_] = 1), s[c] === void 0 && !(r instanceof vn) && delete s[c];
          }
        }), u.__typename && !(i && i.__typename) && this.policies.rootTypenamesById[o] === s.__typename && delete u.__typename, Object.keys(u).forEach(function(c) {
          return r.group.dirty(o, c);
        });
      }
    }
  }, e.prototype.modify = function(t, n) {
    var r = this, o = this.lookup(t);
    if (o) {
      var i = /* @__PURE__ */ Object.create(null), a = !1, s = !0, u = {
        DELETE: la,
        INVALIDATE: Hd,
        isReference: ve,
        toReference: this.toReference,
        canRead: this.canRead,
        readField: function(c, _) {
          return r.policies.readField(typeof c == "string" ? {
            fieldName: c,
            from: _ || Cr(t)
          } : c, { store: r });
        }
      };
      if (Object.keys(o).forEach(function(c) {
        var _ = Wn(c), l = o[c];
        if (l !== void 0) {
          var d = typeof n == "function" ? n : n[c] || n[_];
          if (d) {
            var h = d === Tu ? la : d(oc(l), v(v({}, u), { fieldName: _, storeFieldName: c, storage: r.getStorage(t, c) }));
            h === Hd ? r.group.dirty(t, c) : (h === la && (h = void 0), h !== l && (i[c] = h, a = !0, l = h));
          }
          l !== void 0 && (s = !1);
        }
      }), a)
        return this.merge(t, i), s && (this instanceof vn ? this.data[t] = void 0 : delete this.data[t], this.group.dirty(t, "__exists")), !0;
    }
    return !1;
  }, e.prototype.delete = function(t, n, r) {
    var o, i = this.lookup(t);
    if (i) {
      var a = this.getFieldValue(i, "__typename"), s = n && r ? this.policies.getStoreFieldName({ typename: a, fieldName: n, args: r }) : n;
      return this.modify(t, s ? (o = {}, o[s] = Tu, o) : Tu);
    }
    return !1;
  }, e.prototype.evict = function(t, n) {
    var r = !1;
    return t.id && (We.call(this.data, t.id) && (r = this.delete(t.id, t.fieldName, t.args)), this instanceof vn && this !== n && (r = this.parent.evict(t, n) || r), (t.fieldName || r) && this.group.dirty(t.id, t.fieldName || "__exists")), r;
  }, e.prototype.clear = function() {
    this.replace(null);
  }, e.prototype.extract = function() {
    var t = this, n = this.toObject(), r = [];
    return this.getRootIdSet().forEach(function(o) {
      We.call(t.policies.rootTypenamesById, o) || r.push(o);
    }), r.length && (n.__META = { extraRootIds: r.sort() }), n;
  }, e.prototype.replace = function(t) {
    var n = this;
    if (Object.keys(this.data).forEach(function(i) {
      t && We.call(t, i) || n.delete(i);
    }), t) {
      var r = t.__META, o = or(t, ["__META"]);
      Object.keys(o).forEach(function(i) {
        n.merge(i, o[i]);
      }), r && r.extraRootIds.forEach(this.retain, this);
    }
  }, e.prototype.retain = function(t) {
    return this.rootIds[t] = (this.rootIds[t] || 0) + 1;
  }, e.prototype.release = function(t) {
    if (this.rootIds[t] > 0) {
      var n = --this.rootIds[t];
      return n || delete this.rootIds[t], n;
    }
    return 0;
  }, e.prototype.getRootIdSet = function(t) {
    return t === void 0 && (t = /* @__PURE__ */ new Set()), Object.keys(this.rootIds).forEach(t.add, t), this instanceof vn ? this.parent.getRootIdSet(t) : Object.keys(this.policies.rootTypenamesById).forEach(t.add, t), t;
  }, e.prototype.gc = function() {
    var t = this, n = this.getRootIdSet(), r = this.toObject();
    n.forEach(function(a) {
      We.call(r, a) && (Object.keys(t.findChildRefIds(a)).forEach(n.add, n), delete r[a]);
    });
    var o = Object.keys(r);
    if (o.length) {
      for (var i = this; i instanceof vn; )
        i = i.parent;
      o.forEach(function(a) {
        return i.delete(a);
      });
    }
    return o;
  }, e.prototype.findChildRefIds = function(t) {
    if (!We.call(this.refs, t)) {
      var n = this.refs[t] = /* @__PURE__ */ Object.create(null), r = this.data[t];
      if (!r)
        return n;
      var o = /* @__PURE__ */ new Set([r]);
      o.forEach(function(i) {
        ve(i) && (n[i.__ref] = !0), we(i) && Object.keys(i).forEach(function(a) {
          var s = i[a];
          we(s) && o.add(s);
        });
      });
    }
    return this.refs[t];
  }, e.prototype.makeCacheKey = function() {
    return this.group.keyMaker.lookupArray(arguments);
  }, e;
}(), bm = function() {
  function e(t, n) {
    n === void 0 && (n = null), this.caching = t, this.parent = n, this.d = null, this.resetCaching();
  }
  return e.prototype.resetCaching = function() {
    this.d = this.caching ? _m() : null, this.keyMaker = new io(lr);
  }, e.prototype.depend = function(t, n) {
    if (this.d) {
      this.d(Eu(t, n));
      var r = Wn(n);
      r !== n && this.d(Eu(t, r)), this.parent && this.parent.depend(t, n);
    }
  }, e.prototype.dirty = function(t, n) {
    this.d && this.d.dirty(Eu(t, n), n === "__exists" ? "forget" : "setDirty");
  }, e;
}();
function Eu(e, t) {
  return t + "#" + e;
}
function kd(e, t) {
  Ho(e) && e.group.depend(t, "__exists");
}
(function(e) {
  var t = function(n) {
    Lt(r, n);
    function r(o) {
      var i = o.policies, a = o.resultCaching, s = a === void 0 ? !0 : a, u = o.seed, c = n.call(this, i, new bm(s)) || this;
      return c.stump = new iI(c), c.storageTrie = new io(lr), u && c.replace(u), c;
    }
    return r.prototype.addLayer = function(o, i) {
      return this.stump.addLayer(o, i);
    }, r.prototype.removeLayer = function() {
      return this;
    }, r.prototype.getStorage = function() {
      return this.storageTrie.lookupArray(arguments);
    }, r;
  }(e);
  e.Root = t;
})(Jo || (Jo = {}));
var vn = function(e) {
  Lt(t, e);
  function t(n, r, o, i) {
    var a = e.call(this, r.policies, i) || this;
    return a.id = n, a.parent = r, a.replay = o, a.group = i, o(a), a;
  }
  return t.prototype.addLayer = function(n, r) {
    return new t(n, this, r, this.group);
  }, t.prototype.removeLayer = function(n) {
    var r = this, o = this.parent.removeLayer(n);
    return n === this.id ? (this.group.caching && Object.keys(this.data).forEach(function(i) {
      var a = r.data[i], s = o.lookup(i);
      s ? a ? a !== s && Object.keys(a).forEach(function(u) {
        Be(a[u], s[u]) || r.group.dirty(i, u);
      }) : (r.group.dirty(i, "__exists"), Object.keys(s).forEach(function(u) {
        r.group.dirty(i, u);
      })) : r.delete(i);
    }), o) : o === this.parent ? this : o.addLayer(this.id, this.replay);
  }, t.prototype.toObject = function() {
    return v(v({}, this.parent.toObject()), this.data);
  }, t.prototype.findChildRefIds = function(n) {
    var r = this.parent.findChildRefIds(n);
    return We.call(this.data, n) ? v(v({}, r), e.prototype.findChildRefIds.call(this, n)) : r;
  }, t.prototype.getStorage = function() {
    for (var n = this.parent; n.parent; )
      n = n.parent;
    return n.getStorage.apply(n, arguments);
  }, t;
}(Jo), iI = function(e) {
  Lt(t, e);
  function t(n) {
    return e.call(this, "EntityStore.Stump", n, function() {
    }, new bm(n.group.caching, n.group)) || this;
  }
  return t.prototype.removeLayer = function() {
    return this;
  }, t.prototype.merge = function() {
    return this.parent.merge.apply(this.parent, arguments);
  }, t;
}(vn);
function aI(e, t, n) {
  var r = e[n], o = t[n];
  return Be(r, o) ? r : o;
}
function Ho(e) {
  return !!(e instanceof Jo && e.group.caching);
}
function sI(e) {
  return we(e) ? He(e) ? e.slice(0) : v({ __proto__: Object.getPrototypeOf(e) }, e) : e;
}
var fc = function() {
  function e() {
    this.known = new (jv ? WeakSet : Set)(), this.pool = new io(lr), this.passes = /* @__PURE__ */ new WeakMap(), this.keysByJSON = /* @__PURE__ */ new Map(), this.empty = this.admit({});
  }
  return e.prototype.isKnown = function(t) {
    return we(t) && this.known.has(t);
  }, e.prototype.pass = function(t) {
    if (we(t)) {
      var n = sI(t);
      return this.passes.set(n, t), n;
    }
    return t;
  }, e.prototype.admit = function(t) {
    var n = this;
    if (we(t)) {
      var r = this.passes.get(t);
      if (r)
        return r;
      var o = Object.getPrototypeOf(t);
      switch (o) {
        case Array.prototype: {
          if (this.known.has(t))
            return t;
          var i = t.map(this.admit, this), a = this.pool.lookupArray(i);
          return a.array || (this.known.add(a.array = i), __DEV__ && Object.freeze(i)), a.array;
        }
        case null:
        case Object.prototype: {
          if (this.known.has(t))
            return t;
          var s = Object.getPrototypeOf(t), u = [s], c = this.sortedKeys(t);
          u.push(c.json);
          var _ = u.length;
          c.sorted.forEach(function(h) {
            u.push(n.admit(t[h]));
          });
          var a = this.pool.lookupArray(u);
          if (!a.object) {
            var l = a.object = Object.create(s);
            this.known.add(l), c.sorted.forEach(function(h, f) {
              l[h] = u[_ + f];
            }), __DEV__ && Object.freeze(l);
          }
          return a.object;
        }
      }
    }
    return t;
  }, e.prototype.sortedKeys = function(t) {
    var n = Object.keys(t), r = this.pool.lookupArray(n);
    if (!r.keys) {
      n.sort();
      var o = JSON.stringify(n);
      (r.keys = this.keysByJSON.get(o)) || this.keysByJSON.set(o, r.keys = { sorted: n, json: o });
    }
    return r.keys;
  }, e;
}(), tr = Object.assign(function(e) {
  if (we(e)) {
    hc === void 0 && Md();
    var t = hc.admit(e), n = pc.get(t);
    return n === void 0 && pc.set(t, n = JSON.stringify(t)), n;
  }
  return JSON.stringify(e);
}, {
  reset: Md
}), hc, pc;
function Md() {
  hc = new fc(), pc = new (lr ? WeakMap : Map)();
}
function xd(e) {
  return [
    e.selectionSet,
    e.objectOrReference,
    e.context,
    e.context.canonizeResults
  ];
}
var uI = function() {
  function e(t) {
    var n = this;
    this.knownResults = new (lr ? WeakMap : Map)(), this.config = Os(t, {
      addTypename: t.addTypename !== !1,
      canonizeResults: mm(t)
    }), this.canon = t.canon || new fc(), this.executeSelectionSet = Fa(function(r) {
      var o, i = r.context.canonizeResults, a = xd(r);
      a[3] = !i;
      var s = (o = n.executeSelectionSet).peek.apply(o, a);
      return s ? i ? v(v({}, s), { result: n.canon.admit(s.result) }) : s : (kd(r.context.store, r.enclosingRef.__ref), n.execSelectionSetImpl(r));
    }, {
      max: this.config.resultCacheMaxSize,
      keyArgs: xd,
      makeCacheKey: function(r, o, i, a) {
        if (Ho(i.store))
          return i.store.makeCacheKey(r, ve(o) ? o.__ref : o, i.varString, a);
      }
    }), this.executeSubSelectedArray = Fa(function(r) {
      return kd(r.context.store, r.enclosingRef.__ref), n.execSubSelectedArrayImpl(r);
    }, {
      max: this.config.resultCacheMaxSize,
      makeCacheKey: function(r) {
        var o = r.field, i = r.array, a = r.context;
        if (Ho(a.store))
          return a.store.makeCacheKey(o, i, a.varString);
      }
    });
  }
  return e.prototype.resetCanon = function() {
    this.canon = new fc();
  }, e.prototype.diffQueryAgainstStore = function(t) {
    var n = t.store, r = t.query, o = t.rootId, i = o === void 0 ? "ROOT_QUERY" : o, a = t.variables, s = t.returnPartialData, u = s === void 0 ? !0 : s, c = t.canonizeResults, _ = c === void 0 ? this.config.canonizeResults : c, l = this.config.cache.policies;
    a = v(v({}, bl(Vp(r))), a);
    var d = Cr(i), h = this.executeSelectionSet({
      selectionSet: Es(r).selectionSet,
      objectOrReference: d,
      enclosingRef: d,
      context: v({ store: n, query: r, policies: l, variables: a, varString: tr(a), canonizeResults: _ }, Em(r, this.config.fragments))
    }), f;
    if (h.missing && (f = [new fm(cI(h.missing), h.missing, r, a)], !u))
      throw f[0];
    return {
      result: h.result,
      complete: !f,
      missing: f
    };
  }, e.prototype.isFresh = function(t, n, r, o) {
    if (Ho(o.store) && this.knownResults.get(t) === r) {
      var i = this.executeSelectionSet.peek(r, n, o, this.canon.isKnown(t));
      if (i && t === i.result)
        return !0;
    }
    return !1;
  }, e.prototype.execSelectionSetImpl = function(t) {
    var n = this, r = t.selectionSet, o = t.objectOrReference, i = t.enclosingRef, a = t.context;
    if (ve(o) && !a.policies.rootTypenamesById[o.__ref] && !a.store.has(o.__ref))
      return {
        result: this.canon.empty,
        missing: "Dangling reference to missing ".concat(o.__ref, " object")
      };
    var s = a.variables, u = a.policies, c = a.store, _ = c.getFieldValue(o, "__typename"), l = [], d, h = new jn();
    this.config.addTypename && typeof _ == "string" && !u.rootIdsByTypename[_] && l.push({ __typename: _ });
    function f(E, g) {
      var O;
      return E.missing && (d = h.merge(d, (O = {}, O[g] = E.missing, O))), E.result;
    }
    var p = new Set(r.selections);
    p.forEach(function(E) {
      var g, O;
      if (ps(E, s))
        if (ar(E)) {
          var I = u.readField({
            fieldName: E.name.value,
            field: E,
            variables: a.variables,
            from: o
          }, a), N = ir(E);
          I === void 0 ? Ol.added(E) || (d = h.merge(d, (g = {}, g[N] = "Can't find field '".concat(E.name.value, "' on ").concat(ve(o) ? o.__ref + " object" : "object " + JSON.stringify(o, null, 2)), g))) : He(I) ? I = f(n.executeSubSelectedArray({
            field: E,
            array: I,
            enclosingRef: i,
            context: a
          }), N) : E.selectionSet ? I != null && (I = f(n.executeSelectionSet({
            selectionSet: E.selectionSet,
            objectOrReference: I,
            enclosingRef: ve(I) ? I : i,
            context: a
          }), N)) : a.canonizeResults && (I = n.canon.pass(I)), I !== void 0 && l.push((O = {}, O[N] = I, O));
        } else {
          var w = ml(E, a.lookupFragment);
          if (!w && E.kind === Xe.FRAGMENT_SPREAD)
            throw __DEV__ ? new Te("No fragment named ".concat(E.name.value)) : new Te(5);
          w && u.fragmentMatches(w, _) && w.selectionSet.selections.forEach(p.add, p);
        }
    });
    var m = gl(l), b = { result: m, missing: d }, T = a.canonizeResults ? this.canon.admit(b) : oc(b);
    return T.result && this.knownResults.set(T.result, r), T;
  }, e.prototype.execSubSelectedArrayImpl = function(t) {
    var n = this, r = t.field, o = t.array, i = t.enclosingRef, a = t.context, s, u = new jn();
    function c(_, l) {
      var d;
      return _.missing && (s = u.merge(s, (d = {}, d[l] = _.missing, d))), _.result;
    }
    return r.selectionSet && (o = o.filter(a.store.canRead)), o = o.map(function(_, l) {
      return _ === null ? null : He(_) ? c(n.executeSubSelectedArray({
        field: r,
        array: _,
        enclosingRef: i,
        context: a
      }), l) : r.selectionSet ? c(n.executeSelectionSet({
        selectionSet: r.selectionSet,
        objectOrReference: _,
        enclosingRef: ve(_) ? _ : i,
        context: a
      }), l) : (__DEV__ && lI(a.store, r, _), _);
    }), {
      result: a.canonizeResults ? this.canon.admit(o) : o,
      missing: s
    };
  }, e;
}();
function cI(e) {
  try {
    JSON.stringify(e, function(t, n) {
      if (typeof n == "string")
        throw n;
      return n;
    });
  } catch (t) {
    return t;
  }
}
function lI(e, t, n) {
  if (!t.selectionSet) {
    var r = /* @__PURE__ */ new Set([n]);
    r.forEach(function(o) {
      we(o) && (__DEV__ ? M(!ve(o), "Missing selection set for object of type ".concat(rI(e, o), " returned for query field ").concat(t.name.value)) : M(!ve(o), 6), Object.values(o).forEach(r.add, r));
    });
  }
}
var Dl = new nm(), Ld = /* @__PURE__ */ new WeakMap();
function ko(e) {
  var t = Ld.get(e);
  return t || Ld.set(e, t = {
    vars: /* @__PURE__ */ new Set(),
    dep: _m()
  }), t;
}
function Bd(e) {
  ko(e).vars.forEach(function(t) {
    return t.forgetCache(e);
  });
}
function _I(e) {
  ko(e).vars.forEach(function(t) {
    return t.attachCache(e);
  });
}
function dI(e) {
  var t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), r = function(i) {
    if (arguments.length > 0) {
      if (e !== i) {
        e = i, t.forEach(function(u) {
          ko(u).dep.dirty(r), fI(u);
        });
        var a = Array.from(n);
        n.clear(), a.forEach(function(u) {
          return u(e);
        });
      }
    } else {
      var s = Dl.getValue();
      s && (o(s), ko(s).dep(r));
    }
    return e;
  };
  r.onNextChange = function(i) {
    return n.add(i), function() {
      n.delete(i);
    };
  };
  var o = r.attachCache = function(i) {
    return t.add(i), ko(i).vars.add(r), r;
  };
  return r.forgetCache = function(i) {
    return t.delete(i);
  }, r;
}
function fI(e) {
  e.broadcastWatches && e.broadcastWatches();
}
var Fd = /* @__PURE__ */ Object.create(null);
function Cl(e) {
  var t = JSON.stringify(e);
  return Fd[t] || (Fd[t] = /* @__PURE__ */ Object.create(null));
}
function jd(e) {
  var t = Cl(e);
  return t.keyFieldsFn || (t.keyFieldsFn = function(n, r) {
    var o = function(a, s) {
      return r.readField(s, a);
    }, i = r.keyObject = wl(e, function(a) {
      var s = Ur(r.storeObject, a, o);
      return s === void 0 && n !== r.storeObject && We.call(n, a[0]) && (s = Ur(n, a, gm)), __DEV__ ? M(s !== void 0, "Missing field '".concat(a.join("."), "' while extracting keyFields from ").concat(JSON.stringify(n))) : M(s !== void 0, 2), s;
    });
    return "".concat(r.typename, ":").concat(JSON.stringify(i));
  });
}
function Vd(e) {
  var t = Cl(e);
  return t.keyArgsFn || (t.keyArgsFn = function(n, r) {
    var o = r.field, i = r.variables, a = r.fieldName, s = wl(e, function(c) {
      var _ = c[0], l = _.charAt(0);
      if (l === "@") {
        if (o && zt(o.directives)) {
          var d = _.slice(1), h = o.directives.find(function(b) {
            return b.name.value === d;
          }), f = h && ms(h, i);
          return f && Ur(f, c.slice(1));
        }
        return;
      }
      if (l === "$") {
        var p = _.slice(1);
        if (i && We.call(i, p)) {
          var m = c.slice(0);
          return m[0] = p, Ur(i, m);
        }
        return;
      }
      if (n)
        return Ur(n, c);
    }), u = JSON.stringify(s);
    return (n || u !== "{}") && (a += ":" + u), a;
  });
}
function wl(e, t) {
  var n = new jn();
  return Om(e).reduce(function(r, o) {
    var i, a = t(o);
    if (a !== void 0) {
      for (var s = o.length - 1; s >= 0; --s)
        a = (i = {}, i[o[s]] = a, i);
      r = n.merge(r, a);
    }
    return r;
  }, /* @__PURE__ */ Object.create(null));
}
function Om(e) {
  var t = Cl(e);
  if (!t.paths) {
    var n = t.paths = [], r = [];
    e.forEach(function(o, i) {
      He(o) ? (Om(o).forEach(function(a) {
        return n.push(r.concat(a));
      }), r.length = 0) : (r.push(o), He(e[i + 1]) || (n.push(r.slice(0)), r.length = 0));
    });
  }
  return t.paths;
}
function gm(e, t) {
  return e[t];
}
function Ur(e, t, n) {
  return n = n || gm, Rm(t.reduce(function r(o, i) {
    return He(o) ? o.map(function(a) {
      return r(a, i);
    }) : o && n(o, i);
  }, e));
}
function Rm(e) {
  return we(e) ? He(e) ? e.map(Rm) : wl(Object.keys(e).sort(), function(t) {
    return Ur(e, t);
  }) : e;
}
Tl.setStringify(tr);
function mc(e) {
  return e.args !== void 0 ? e.args : e.field ? ms(e.field, e.variables) : null;
}
var hI = function() {
}, Wd = function(e, t) {
  return t.fieldName;
}, Xd = function(e, t, n) {
  var r = n.mergeObjects;
  return r(e, t);
}, Yd = function(e, t) {
  return t;
}, pI = function() {
  function e(t) {
    this.config = t, this.typePolicies = /* @__PURE__ */ Object.create(null), this.toBeAdded = /* @__PURE__ */ Object.create(null), this.supertypeMap = /* @__PURE__ */ new Map(), this.fuzzySubtypes = /* @__PURE__ */ new Map(), this.rootIdsByTypename = /* @__PURE__ */ Object.create(null), this.rootTypenamesById = /* @__PURE__ */ Object.create(null), this.usingPossibleTypes = !1, this.config = v({ dataIdFromObject: hm }, t), this.cache = this.config.cache, this.setRootTypename("Query"), this.setRootTypename("Mutation"), this.setRootTypename("Subscription"), t.possibleTypes && this.addPossibleTypes(t.possibleTypes), t.typePolicies && this.addTypePolicies(t.typePolicies);
  }
  return e.prototype.identify = function(t, n) {
    var r, o = this, i = n && (n.typename || ((r = n.storeObject) === null || r === void 0 ? void 0 : r.__typename)) || t.__typename;
    if (i === this.rootTypenamesById.ROOT_QUERY)
      return ["ROOT_QUERY"];
    for (var a = n && n.storeObject || t, s = v(v({}, n), { typename: i, storeObject: a, readField: n && n.readField || function() {
      var d = Ul(arguments, a);
      return o.readField(d, {
        store: o.cache.data,
        variables: d.variables
      });
    } }), u, c = i && this.getTypePolicy(i), _ = c && c.keyFn || this.config.dataIdFromObject; _; ) {
      var l = _(v(v({}, t), a), s);
      if (He(l))
        _ = jd(l);
      else {
        u = l;
        break;
      }
    }
    return u = u ? String(u) : void 0, s.keyObject ? [u, s.keyObject] : [u];
  }, e.prototype.addTypePolicies = function(t) {
    var n = this;
    Object.keys(t).forEach(function(r) {
      var o = t[r], i = o.queryType, a = o.mutationType, s = o.subscriptionType, u = or(o, ["queryType", "mutationType", "subscriptionType"]);
      i && n.setRootTypename("Query", r), a && n.setRootTypename("Mutation", r), s && n.setRootTypename("Subscription", r), We.call(n.toBeAdded, r) ? n.toBeAdded[r].push(u) : n.toBeAdded[r] = [u];
    });
  }, e.prototype.updateTypePolicy = function(t, n) {
    var r = this, o = this.getTypePolicy(t), i = n.keyFields, a = n.fields;
    function s(u, c) {
      u.merge = typeof c == "function" ? c : c === !0 ? Xd : c === !1 ? Yd : u.merge;
    }
    s(o, n.merge), o.keyFn = i === !1 ? hI : He(i) ? jd(i) : typeof i == "function" ? i : o.keyFn, a && Object.keys(a).forEach(function(u) {
      var c = r.getFieldPolicy(t, u, !0), _ = a[u];
      if (typeof _ == "function")
        c.read = _;
      else {
        var l = _.keyArgs, d = _.read, h = _.merge;
        c.keyFn = l === !1 ? Wd : He(l) ? Vd(l) : typeof l == "function" ? l : c.keyFn, typeof d == "function" && (c.read = d), s(c, h);
      }
      c.read && c.merge && (c.keyFn = c.keyFn || Wd);
    });
  }, e.prototype.setRootTypename = function(t, n) {
    n === void 0 && (n = t);
    var r = "ROOT_" + t.toUpperCase(), o = this.rootTypenamesById[r];
    n !== o && (__DEV__ ? M(!o || o === t, "Cannot change root ".concat(t, " __typename more than once")) : M(!o || o === t, 3), o && delete this.rootIdsByTypename[o], this.rootIdsByTypename[n] = r, this.rootTypenamesById[r] = n);
  }, e.prototype.addPossibleTypes = function(t) {
    var n = this;
    this.usingPossibleTypes = !0, Object.keys(t).forEach(function(r) {
      n.getSupertypeSet(r, !0), t[r].forEach(function(o) {
        n.getSupertypeSet(o, !0).add(r);
        var i = o.match(Tm);
        (!i || i[0] !== o) && n.fuzzySubtypes.set(o, new RegExp(o));
      });
    });
  }, e.prototype.getTypePolicy = function(t) {
    var n = this;
    if (!We.call(this.typePolicies, t)) {
      var r = this.typePolicies[t] = /* @__PURE__ */ Object.create(null);
      r.fields = /* @__PURE__ */ Object.create(null);
      var o = this.supertypeMap.get(t);
      o && o.size && o.forEach(function(a) {
        var s = n.getTypePolicy(a), u = s.fields, c = or(s, ["fields"]);
        Object.assign(r, c), Object.assign(r.fields, u);
      });
    }
    var i = this.toBeAdded[t];
    return i && i.length && i.splice(0).forEach(function(a) {
      n.updateTypePolicy(t, a);
    }), this.typePolicies[t];
  }, e.prototype.getFieldPolicy = function(t, n, r) {
    if (t) {
      var o = this.getTypePolicy(t).fields;
      return o[n] || r && (o[n] = /* @__PURE__ */ Object.create(null));
    }
  }, e.prototype.getSupertypeSet = function(t, n) {
    var r = this.supertypeMap.get(t);
    return !r && n && this.supertypeMap.set(t, r = /* @__PURE__ */ new Set()), r;
  }, e.prototype.fragmentMatches = function(t, n, r, o) {
    var i = this;
    if (!t.typeCondition)
      return !0;
    if (!n)
      return !1;
    var a = t.typeCondition.name.value;
    if (n === a)
      return !0;
    if (this.usingPossibleTypes && this.supertypeMap.has(a))
      for (var s = this.getSupertypeSet(n, !0), u = [s], c = function(f) {
        var p = i.getSupertypeSet(f, !1);
        p && p.size && u.indexOf(p) < 0 && u.push(p);
      }, _ = !!(r && this.fuzzySubtypes.size), l = !1, d = 0; d < u.length; ++d) {
        var h = u[d];
        if (h.has(a))
          return s.has(a) || (l && __DEV__ && M.warn("Inferring subtype ".concat(n, " of supertype ").concat(a)), s.add(a)), !0;
        h.forEach(c), _ && d === u.length - 1 && dc(t.selectionSet, r, o) && (_ = !1, l = !0, this.fuzzySubtypes.forEach(function(f, p) {
          var m = n.match(f);
          m && m[0] === n && c(p);
        }));
      }
    return !1;
  }, e.prototype.hasKeyArgs = function(t, n) {
    var r = this.getFieldPolicy(t, n, !1);
    return !!(r && r.keyFn);
  }, e.prototype.getStoreFieldName = function(t) {
    var n = t.typename, r = t.fieldName, o = this.getFieldPolicy(n, r, !1), i, a = o && o.keyFn;
    if (a && n)
      for (var s = {
        typename: n,
        fieldName: r,
        field: t.field || null,
        variables: t.variables
      }, u = mc(t); a; ) {
        var c = a(u, s);
        if (He(c))
          a = Vd(c);
        else {
          i = c || r;
          break;
        }
      }
    return i === void 0 && (i = t.field ? Tv(t.field, t.variables) : Tl(r, mc(t))), i === !1 ? r : r === Wn(i) ? i : r + ":" + i;
  }, e.prototype.readField = function(t, n) {
    var r = t.from;
    if (r) {
      var o = t.field || t.fieldName;
      if (o) {
        if (t.typename === void 0) {
          var i = n.store.getFieldValue(r, "__typename");
          i && (t.typename = i);
        }
        var a = this.getStoreFieldName(t), s = Wn(a), u = n.store.getFieldValue(r, a), c = this.getFieldPolicy(t.typename, s, !1), _ = c && c.read;
        if (_) {
          var l = Kd(this, r, t, n, n.store.getStorage(ve(r) ? r.__ref : r, a));
          return Dl.withValue(this.cache, _, [u, l]);
        }
        return u;
      }
    }
  }, e.prototype.getReadFunction = function(t, n) {
    var r = this.getFieldPolicy(t, n, !1);
    return r && r.read;
  }, e.prototype.getMergeFunction = function(t, n, r) {
    var o = this.getFieldPolicy(t, n, !1), i = o && o.merge;
    return !i && r && (o = this.getTypePolicy(r), i = o && o.merge), i;
  }, e.prototype.runMergeFunction = function(t, n, r, o, i) {
    var a = r.field, s = r.typename, u = r.merge;
    return u === Xd ? vm(o.store)(t, n) : u === Yd ? n : (o.overwrite && (t = void 0), u(t, n, Kd(this, void 0, { typename: s, fieldName: a.name.value, field: a, variables: o.variables }, o, i || /* @__PURE__ */ Object.create(null))));
  }, e;
}();
function Kd(e, t, n, r, o) {
  var i = e.getStoreFieldName(n), a = Wn(i), s = n.variables || r.variables, u = r.store, c = u.toReference, _ = u.canRead;
  return {
    args: mc(n),
    field: n.field || null,
    fieldName: a,
    storeFieldName: i,
    variables: s,
    isReference: ve,
    toReference: c,
    storage: o,
    cache: e.cache,
    canRead: _,
    readField: function() {
      return e.readField(Ul(arguments, t, s), r);
    },
    mergeObjects: vm(r.store)
  };
}
function Ul(e, t, n) {
  var r = e[0], o = e[1], i = e.length, a;
  return typeof r == "string" ? a = {
    fieldName: r,
    from: i > 1 ? o : t
  } : (a = v({}, r), We.call(a, "from") || (a.from = t)), __DEV__ && a.from === void 0 && __DEV__ && M.warn("Undefined 'from' passed to readField with arguments ".concat(Yv(Array.from(e)))), a.variables === void 0 && (a.variables = n), a;
}
function vm(e) {
  return function(n, r) {
    if (He(n) || He(r))
      throw __DEV__ ? new Te("Cannot automatically merge arrays") : new Te(4);
    if (we(n) && we(r)) {
      var o = e.getFieldValue(n, "__typename"), i = e.getFieldValue(r, "__typename"), a = o && i && o !== i;
      if (a)
        return r;
      if (ve(n) && Ar(r))
        return e.merge(n.__ref, r), n;
      if (Ar(n) && ve(r))
        return e.merge(n, r.__ref), r;
      if (Ar(n) && Ar(r))
        return v(v({}, n), r);
    }
    return r;
  };
}
function bu(e, t, n) {
  var r = "".concat(t).concat(n), o = e.flavors.get(r);
  return o || e.flavors.set(r, o = e.clientOnly === t && e.deferred === n ? e : v(v({}, e), { clientOnly: t, deferred: n })), o;
}
var mI = function() {
  function e(t, n, r) {
    this.cache = t, this.reader = n, this.fragments = r;
  }
  return e.prototype.writeToStore = function(t, n) {
    var r = this, o = n.query, i = n.result, a = n.dataId, s = n.variables, u = n.overwrite, c = yi(o), _ = oI();
    s = v(v({}, bl(c)), s);
    var l = v(v({ store: t, written: /* @__PURE__ */ Object.create(null), merge: function(h, f) {
      return _.merge(h, f);
    }, variables: s, varString: tr(s) }, Em(o, this.fragments)), { overwrite: !!u, incomingById: /* @__PURE__ */ new Map(), clientOnly: !1, deferred: !1, flavors: /* @__PURE__ */ new Map() }), d = this.processSelectionSet({
      result: i || /* @__PURE__ */ Object.create(null),
      dataId: a,
      selectionSet: c.selectionSet,
      mergeTree: { map: /* @__PURE__ */ new Map() },
      context: l
    });
    if (!ve(d))
      throw __DEV__ ? new Te("Could not identify object ".concat(JSON.stringify(i))) : new Te(7);
    return l.incomingById.forEach(function(h, f) {
      var p = h.storeObject, m = h.mergeTree, b = h.fieldNodeSet, T = Cr(f);
      if (m && m.map.size) {
        var E = r.applyMerges(m, T, p, l);
        if (ve(E))
          return;
        p = E;
      }
      if (__DEV__ && !l.overwrite) {
        var g = /* @__PURE__ */ Object.create(null);
        b.forEach(function(N) {
          N.selectionSet && (g[N.name.value] = !0);
        });
        var O = function(N) {
          return g[Wn(N)] === !0;
        }, I = function(N) {
          var w = m && m.map.get(N);
          return !!(w && w.info && w.info.merge);
        };
        Object.keys(p).forEach(function(N) {
          O(N) && !I(N) && TI(T, p, N, l.store);
        });
      }
      t.merge(f, p);
    }), t.retain(d.__ref), d;
  }, e.prototype.processSelectionSet = function(t) {
    var n = this, r = t.dataId, o = t.result, i = t.selectionSet, a = t.context, s = t.mergeTree, u = this.cache.policies, c = /* @__PURE__ */ Object.create(null), _ = r && u.rootTypenamesById[r] || Zu(o, i, a.fragmentMap) || r && a.store.get(r, "__typename");
    typeof _ == "string" && (c.__typename = _);
    var l = function() {
      var E = Ul(arguments, c, a.variables);
      if (ve(E.from)) {
        var g = a.incomingById.get(E.from.__ref);
        if (g) {
          var O = u.readField(v(v({}, E), { from: g.storeObject }), a);
          if (O !== void 0)
            return O;
        }
      }
      return u.readField(E, a);
    }, d = /* @__PURE__ */ new Set();
    this.flattenFields(i, o, a, _).forEach(function(E, g) {
      var O, I = ir(g), N = o[I];
      if (d.add(g), N !== void 0) {
        var w = u.getStoreFieldName({
          typename: _,
          fieldName: g.name.value,
          field: g,
          variables: E.variables
        }), G = $d(s, w), D = n.processFieldValue(N, g, g.selectionSet ? bu(E, !1, !1) : E, G), Z = void 0;
        g.selectionSet && (ve(D) || Ar(D)) && (Z = l("__typename", D));
        var ne = u.getMergeFunction(_, g.name.value, Z);
        ne ? G.info = {
          field: g,
          typename: _,
          merge: ne
        } : zd(s, w), c = E.merge(c, (O = {}, O[w] = D, O));
      } else
        __DEV__ && !E.clientOnly && !E.deferred && !Ol.added(g) && !u.getReadFunction(_, g.name.value) && __DEV__ && M.error("Missing field '".concat(ir(g), "' while writing result ").concat(JSON.stringify(o, null, 2)).substring(0, 1e3));
    });
    try {
      var h = u.identify(o, {
        typename: _,
        selectionSet: i,
        fragmentMap: a.fragmentMap,
        storeObject: c,
        readField: l
      }), f = h[0], p = h[1];
      r = r || f, p && (c = a.merge(c, p));
    } catch (E) {
      if (!r)
        throw E;
    }
    if (typeof r == "string") {
      var m = Cr(r), b = a.written[r] || (a.written[r] = []);
      if (b.indexOf(i) >= 0 || (b.push(i), this.reader && this.reader.isFresh(o, m, i, a)))
        return m;
      var T = a.incomingById.get(r);
      return T ? (T.storeObject = a.merge(T.storeObject, c), T.mergeTree = Tc(T.mergeTree, s), d.forEach(function(E) {
        return T.fieldNodeSet.add(E);
      })) : a.incomingById.set(r, {
        storeObject: c,
        mergeTree: ja(s) ? void 0 : s,
        fieldNodeSet: d
      }), m;
    }
    return c;
  }, e.prototype.processFieldValue = function(t, n, r, o) {
    var i = this;
    return !n.selectionSet || t === null ? __DEV__ ? zp(t) : t : He(t) ? t.map(function(a, s) {
      var u = i.processFieldValue(a, n, r, $d(o, s));
      return zd(o, s), u;
    }) : this.processSelectionSet({
      result: t,
      selectionSet: n.selectionSet,
      context: r,
      mergeTree: o
    });
  }, e.prototype.flattenFields = function(t, n, r, o) {
    o === void 0 && (o = Zu(n, t, r.fragmentMap));
    var i = /* @__PURE__ */ new Map(), a = this.cache.policies, s = new io(!1);
    return function u(c, _) {
      var l = s.lookup(c, _.clientOnly, _.deferred);
      l.visited || (l.visited = !0, c.selections.forEach(function(d) {
        if (ps(d, r.variables)) {
          var h = _.clientOnly, f = _.deferred;
          if (!(h && f) && zt(d.directives) && d.directives.forEach(function(b) {
            var T = b.name.value;
            if (T === "client" && (h = !0), T === "defer") {
              var E = ms(b, r.variables);
              (!E || E.if !== !1) && (f = !0);
            }
          }), ar(d)) {
            var p = i.get(d);
            p && (h = h && p.clientOnly, f = f && p.deferred), i.set(d, bu(r, h, f));
          } else {
            var m = ml(d, r.lookupFragment);
            if (!m && d.kind === Xe.FRAGMENT_SPREAD)
              throw __DEV__ ? new Te("No fragment named ".concat(d.name.value)) : new Te(8);
            m && a.fragmentMatches(m, o, n, r.variables) && u(m.selectionSet, bu(r, h, f));
          }
        }
      }));
    }(t, r), i;
  }, e.prototype.applyMerges = function(t, n, r, o, i) {
    var a, s = this;
    if (t.map.size && !ve(r)) {
      var u = !He(r) && (ve(n) || Ar(n)) ? n : void 0, c = r;
      u && !i && (i = [ve(u) ? u.__ref : u]);
      var _, l = function(d, h) {
        return He(d) ? typeof h == "number" ? d[h] : void 0 : o.store.getFieldValue(d, String(h));
      };
      t.map.forEach(function(d, h) {
        var f = l(u, h), p = l(c, h);
        if (p !== void 0) {
          i && i.push(h);
          var m = s.applyMerges(d, f, p, o, i);
          m !== p && (_ = _ || /* @__PURE__ */ new Map(), _.set(h, m)), i && M(i.pop() === h);
        }
      }), _ && (r = He(c) ? c.slice(0) : v({}, c), _.forEach(function(d, h) {
        r[h] = d;
      }));
    }
    return t.info ? this.cache.policies.runMergeFunction(n, r, t.info, o, i && (a = o.store).getStorage.apply(a, i)) : r;
  }, e;
}(), Nm = [];
function $d(e, t) {
  var n = e.map;
  return n.has(t) || n.set(t, Nm.pop() || { map: /* @__PURE__ */ new Map() }), n.get(t);
}
function Tc(e, t) {
  if (e === t || !t || ja(t))
    return e;
  if (!e || ja(e))
    return t;
  var n = e.info && t.info ? v(v({}, e.info), t.info) : e.info || t.info, r = e.map.size && t.map.size, o = r ? /* @__PURE__ */ new Map() : e.map.size ? e.map : t.map, i = { info: n, map: o };
  if (r) {
    var a = new Set(t.map.keys());
    e.map.forEach(function(s, u) {
      i.map.set(u, Tc(s, t.map.get(u))), a.delete(u);
    }), a.forEach(function(s) {
      i.map.set(s, Tc(t.map.get(s), e.map.get(s)));
    });
  }
  return i;
}
function ja(e) {
  return !e || !(e.info || e.map.size);
}
function zd(e, t) {
  var n = e.map, r = n.get(t);
  r && ja(r) && (Nm.push(r), n.delete(t));
}
var qd = /* @__PURE__ */ new Set();
function TI(e, t, n, r) {
  var o = function(l) {
    var d = r.getFieldValue(l, n);
    return typeof d == "object" && d;
  }, i = o(e);
  if (i) {
    var a = o(t);
    if (a && !ve(i) && !Be(i, a) && !Object.keys(i).every(function(l) {
      return r.getFieldValue(a, l) !== void 0;
    })) {
      var s = r.getFieldValue(e, "__typename") || r.getFieldValue(t, "__typename"), u = Wn(n), c = "".concat(s, ".").concat(u);
      if (!qd.has(c)) {
        qd.add(c);
        var _ = [];
        !He(i) && !He(a) && [i, a].forEach(function(l) {
          var d = r.getFieldValue(l, "__typename");
          typeof d == "string" && !_.includes(d) && _.push(d);
        }), __DEV__ && M.warn("Cache data may be lost when replacing the ".concat(u, " field of a ").concat(s, ` object.

This could cause additional (usually avoidable) network requests to fetch data that were otherwise cached.

To address this problem (which is not a bug in Apollo Client), `).concat(_.length ? "either ensure all objects of type " + _.join(" and ") + " have an ID or a custom merge function, or " : "", "define a custom merge function for the ").concat(c, ` field, so InMemoryCache can safely merge these objects:

  existing: `).concat(JSON.stringify(i).slice(0, 1e3), `
  incoming: `).concat(JSON.stringify(a).slice(0, 1e3), `

For more information about these options, please refer to the documentation:

  * Ensuring entity objects have IDs: https://go.apollo.dev/c/generating-unique-identifiers
  * Defining custom merge functions: https://go.apollo.dev/c/merging-non-normalized-objects
`));
      }
    }
  }
}
var EI = function(e) {
  Lt(t, e);
  function t(n) {
    n === void 0 && (n = {});
    var r = e.call(this) || this;
    return r.watches = /* @__PURE__ */ new Set(), r.typenameDocumentCache = /* @__PURE__ */ new Map(), r.makeVar = dI, r.txCount = 0, r.config = nI(n), r.addTypename = !!r.config.addTypename, r.policies = new pI({
      cache: r,
      dataIdFromObject: r.config.dataIdFromObject,
      possibleTypes: r.config.possibleTypes,
      typePolicies: r.config.typePolicies
    }), r.init(), r;
  }
  return t.prototype.init = function() {
    var n = this.data = new Jo.Root({
      policies: this.policies,
      resultCaching: this.config.resultCaching
    });
    this.optimisticData = n.stump, this.resetResultCache();
  }, t.prototype.resetResultCache = function(n) {
    var r = this, o = this.storeReader, i = this.config.fragments;
    this.storeWriter = new mI(this, this.storeReader = new uI({
      cache: this,
      addTypename: this.addTypename,
      resultCacheMaxSize: this.config.resultCacheMaxSize,
      canonizeResults: mm(this.config),
      canon: n ? void 0 : o && o.canon,
      fragments: i
    }), i), this.maybeBroadcastWatch = Fa(function(a, s) {
      return r.broadcastWatch(a, s);
    }, {
      max: this.config.resultCacheMaxSize,
      makeCacheKey: function(a) {
        var s = a.optimistic ? r.optimisticData : r.data;
        if (Ho(s)) {
          var u = a.optimistic, c = a.id, _ = a.variables;
          return s.makeCacheKey(a.query, a.callback, tr({ optimistic: u, id: c, variables: _ }));
        }
      }
    }), (/* @__PURE__ */ new Set([
      this.data.group,
      this.optimisticData.group
    ])).forEach(function(a) {
      return a.resetCaching();
    });
  }, t.prototype.restore = function(n) {
    return this.init(), n && this.data.replace(n), this;
  }, t.prototype.extract = function(n) {
    return n === void 0 && (n = !1), (n ? this.optimisticData : this.data).extract();
  }, t.prototype.read = function(n) {
    var r = n.returnPartialData, o = r === void 0 ? !1 : r;
    try {
      return this.storeReader.diffQueryAgainstStore(v(v({}, n), { store: n.optimistic ? this.optimisticData : this.data, config: this.config, returnPartialData: o })).result || null;
    } catch (i) {
      if (i instanceof fm)
        return null;
      throw i;
    }
  }, t.prototype.write = function(n) {
    try {
      return ++this.txCount, this.storeWriter.writeToStore(this.data, n);
    } finally {
      !--this.txCount && n.broadcast !== !1 && this.broadcastWatches();
    }
  }, t.prototype.modify = function(n) {
    if (We.call(n, "id") && !n.id)
      return !1;
    var r = n.optimistic ? this.optimisticData : this.data;
    try {
      return ++this.txCount, r.modify(n.id || "ROOT_QUERY", n.fields);
    } finally {
      !--this.txCount && n.broadcast !== !1 && this.broadcastWatches();
    }
  }, t.prototype.diff = function(n) {
    return this.storeReader.diffQueryAgainstStore(v(v({}, n), { store: n.optimistic ? this.optimisticData : this.data, rootId: n.id || "ROOT_QUERY", config: this.config }));
  }, t.prototype.watch = function(n) {
    var r = this;
    return this.watches.size || _I(this), this.watches.add(n), n.immediate && this.maybeBroadcastWatch(n), function() {
      r.watches.delete(n) && !r.watches.size && Bd(r), r.maybeBroadcastWatch.forget(n);
    };
  }, t.prototype.gc = function(n) {
    tr.reset();
    var r = this.optimisticData.gc();
    return n && !this.txCount && (n.resetResultCache ? this.resetResultCache(n.resetResultIdentities) : n.resetResultIdentities && this.storeReader.resetCanon()), r;
  }, t.prototype.retain = function(n, r) {
    return (r ? this.optimisticData : this.data).retain(n);
  }, t.prototype.release = function(n, r) {
    return (r ? this.optimisticData : this.data).release(n);
  }, t.prototype.identify = function(n) {
    if (ve(n))
      return n.__ref;
    try {
      return this.policies.identify(n)[0];
    } catch (r) {
      __DEV__ && M.warn(r);
    }
  }, t.prototype.evict = function(n) {
    if (!n.id) {
      if (We.call(n, "id"))
        return !1;
      n = v(v({}, n), { id: "ROOT_QUERY" });
    }
    try {
      return ++this.txCount, this.optimisticData.evict(n, this.data);
    } finally {
      !--this.txCount && n.broadcast !== !1 && this.broadcastWatches();
    }
  }, t.prototype.reset = function(n) {
    var r = this;
    return this.init(), tr.reset(), n && n.discardWatches ? (this.watches.forEach(function(o) {
      return r.maybeBroadcastWatch.forget(o);
    }), this.watches.clear(), Bd(this)) : this.broadcastWatches(), Promise.resolve();
  }, t.prototype.removeOptimistic = function(n) {
    var r = this.optimisticData.removeLayer(n);
    r !== this.optimisticData && (this.optimisticData = r, this.broadcastWatches());
  }, t.prototype.batch = function(n) {
    var r = this, o = n.update, i = n.optimistic, a = i === void 0 ? !0 : i, s = n.removeOptimistic, u = n.onWatchUpdated, c, _ = function(d) {
      var h = r, f = h.data, p = h.optimisticData;
      ++r.txCount, d && (r.data = r.optimisticData = d);
      try {
        return c = o(r);
      } finally {
        --r.txCount, r.data = f, r.optimisticData = p;
      }
    }, l = /* @__PURE__ */ new Set();
    return u && !this.txCount && this.broadcastWatches(v(v({}, n), { onWatchUpdated: function(d) {
      return l.add(d), !1;
    } })), typeof a == "string" ? this.optimisticData = this.optimisticData.addLayer(a, _) : a === !1 ? _(this.data) : _(), typeof s == "string" && (this.optimisticData = this.optimisticData.removeLayer(s)), u && l.size ? (this.broadcastWatches(v(v({}, n), { onWatchUpdated: function(d, h) {
      var f = u.call(this, d, h);
      return f !== !1 && l.delete(d), f;
    } })), l.size && l.forEach(function(d) {
      return r.maybeBroadcastWatch.dirty(d);
    })) : this.broadcastWatches(n), c;
  }, t.prototype.performTransaction = function(n, r) {
    return this.batch({
      update: n,
      optimistic: r || r !== null
    });
  }, t.prototype.transformDocument = function(n) {
    if (this.addTypename) {
      var r = this.typenameDocumentCache.get(n);
      return r || (r = Ol(n), this.typenameDocumentCache.set(n, r), this.typenameDocumentCache.set(r, r)), r;
    }
    return n;
  }, t.prototype.transformForLink = function(n) {
    var r = this.config.fragments;
    return r ? r.transform(n) : n;
  }, t.prototype.broadcastWatches = function(n) {
    var r = this;
    this.txCount || this.watches.forEach(function(o) {
      return r.maybeBroadcastWatch(o, n);
    });
  }, t.prototype.broadcastWatch = function(n, r) {
    var o = n.lastDiff, i = this.diff(n);
    r && (n.optimistic && typeof r.optimistic == "string" && (i.fromOptimisticTransaction = !0), r.onWatchUpdated && r.onWatchUpdated.call(this, n, i, o) === !1) || (!o || !Be(o.result, i.result)) && n.callback(n.lastDiff = i, o);
  }, t;
}(JN), Ne;
(function(e) {
  e[e.loading = 1] = "loading", e[e.setVariables = 2] = "setVariables", e[e.fetchMore = 3] = "fetchMore", e[e.refetch = 4] = "refetch", e[e.poll = 6] = "poll", e[e.ready = 7] = "ready", e[e.error = 8] = "error";
})(Ne || (Ne = {}));
function Qo(e) {
  return e ? e < 7 : !1;
}
var bI = Object.assign, OI = Object.hasOwnProperty, Ec = function(e) {
  Lt(t, e);
  function t(n) {
    var r = n.queryManager, o = n.queryInfo, i = n.options, a = e.call(this, function(m) {
      try {
        var b = m._subscription._observer;
        b && !b.error && (b.error = gI);
      } catch {
      }
      var T = !a.observers.size;
      a.observers.add(m);
      var E = a.last;
      return E && E.error ? m.error && m.error(E.error) : E && E.result && m.next && m.next(E.result), T && a.reobserve().catch(function() {
      }), function() {
        a.observers.delete(m) && !a.observers.size && a.tearDownQuery();
      };
    }) || this;
    a.observers = /* @__PURE__ */ new Set(), a.subscriptions = /* @__PURE__ */ new Set(), a.queryInfo = o, a.queryManager = r, a.waitForOwnResult = Ou(i.fetchPolicy), a.isTornDown = !1;
    var s = r.defaultOptions.watchQuery, u = s === void 0 ? {} : s, c = u.fetchPolicy, _ = c === void 0 ? "cache-first" : c, l = i.fetchPolicy, d = l === void 0 ? _ : l, h = i.initialFetchPolicy, f = h === void 0 ? d === "standby" ? _ : d : h;
    a.options = v(v({}, i), { initialFetchPolicy: f, fetchPolicy: d }), a.queryId = o.queryId || r.generateQueryId();
    var p = yi(a.query);
    return a.queryName = p && p.name && p.name.value, a;
  }
  return Object.defineProperty(t.prototype, "query", {
    get: function() {
      return this.queryManager.transform(this.options.query).document;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "variables", {
    get: function() {
      return this.options.variables;
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype.result = function() {
    var n = this;
    return new Promise(function(r, o) {
      var i = {
        next: function(s) {
          r(s), n.observers.delete(i), n.observers.size || n.queryManager.removeQuery(n.queryId), setTimeout(function() {
            a.unsubscribe();
          }, 0);
        },
        error: o
      }, a = n.subscribe(i);
    });
  }, t.prototype.getCurrentResult = function(n) {
    n === void 0 && (n = !0);
    var r = this.getLastResult(!0), o = this.queryInfo.networkStatus || r && r.networkStatus || Ne.ready, i = v(v({}, r), { loading: Qo(o), networkStatus: o }), a = this.options.fetchPolicy, s = a === void 0 ? "cache-first" : a;
    if (!(Ou(s) || this.queryManager.transform(this.options.query).hasForcedResolvers))
      if (this.waitForOwnResult)
        this.queryInfo.updateWatch();
      else {
        var u = this.queryInfo.getDiff();
        (u.complete || this.options.returnPartialData) && (i.data = u.result), Be(i.data, {}) && (i.data = void 0), u.complete ? (delete i.partial, u.complete && i.networkStatus === Ne.loading && (s === "cache-first" || s === "cache-only") && (i.networkStatus = Ne.ready, i.loading = !1)) : i.partial = !0, __DEV__ && !u.complete && !this.options.partialRefetch && !i.loading && !i.data && !i.error && Am(u.missing);
      }
    return n && this.updateLastResult(i), i;
  }, t.prototype.isDifferentFromLastResult = function(n, r) {
    return !this.last || !Be(this.last.result, n) || r && !Be(this.last.variables, r);
  }, t.prototype.getLast = function(n, r) {
    var o = this.last;
    if (o && o[n] && (!r || Be(o.variables, this.variables)))
      return o[n];
  }, t.prototype.getLastResult = function(n) {
    return this.getLast("result", n);
  }, t.prototype.getLastError = function(n) {
    return this.getLast("error", n);
  }, t.prototype.resetLastResults = function() {
    delete this.last, this.isTornDown = !1;
  }, t.prototype.resetQueryStoreErrors = function() {
    this.queryManager.resetErrors(this.queryId);
  }, t.prototype.refetch = function(n) {
    var r, o = {
      pollInterval: 0
    }, i = this.options.fetchPolicy;
    if (i === "cache-and-network" ? o.fetchPolicy = i : i === "no-cache" ? o.fetchPolicy = "no-cache" : o.fetchPolicy = "network-only", __DEV__ && n && OI.call(n, "variables")) {
      var a = Vp(this.query), s = a.variableDefinitions;
      (!s || !s.some(function(u) {
        return u.variable.name.value === "variables";
      })) && __DEV__ && M.warn("Called refetch(".concat(JSON.stringify(n), ") for query ").concat(((r = a.name) === null || r === void 0 ? void 0 : r.value) || JSON.stringify(a), `, which does not declare a $variables variable.
Did you mean to call refetch(variables) instead of refetch({ variables })?`));
    }
    return n && !Be(this.options.variables, n) && (o.variables = this.options.variables = v(v({}, this.options.variables), n)), this.queryInfo.resetLastWrite(), this.reobserve(o, Ne.refetch);
  }, t.prototype.fetchMore = function(n) {
    var r = this, o = v(v({}, n.query ? n : v(v(v(v({}, this.options), { query: this.query }), n), { variables: v(v({}, this.options.variables), n.variables) })), { fetchPolicy: "no-cache" }), i = this.queryManager.generateQueryId(), a = this.queryInfo, s = a.networkStatus;
    a.networkStatus = Ne.fetchMore, o.notifyOnNetworkStatusChange && this.observe();
    var u = /* @__PURE__ */ new Set();
    return this.queryManager.fetchQuery(i, o, Ne.fetchMore).then(function(c) {
      return r.queryManager.removeQuery(i), a.networkStatus === Ne.fetchMore && (a.networkStatus = s), r.queryManager.cache.batch({
        update: function(_) {
          var l = n.updateQuery;
          l ? _.updateQuery({
            query: r.query,
            variables: r.variables,
            returnPartialData: !0,
            optimistic: !1
          }, function(d) {
            return l(d, {
              fetchMoreResult: c.data,
              variables: o.variables
            });
          }) : _.writeQuery({
            query: o.query,
            variables: o.variables,
            data: c.data
          });
        },
        onWatchUpdated: function(_) {
          u.add(_.query);
        }
      }), c;
    }).finally(function() {
      u.has(r.query) || Im(r);
    });
  }, t.prototype.subscribeToMore = function(n) {
    var r = this, o = this.queryManager.startGraphQLSubscription({
      query: n.document,
      variables: n.variables,
      context: n.context
    }).subscribe({
      next: function(i) {
        var a = n.updateQuery;
        a && r.updateQuery(function(s, u) {
          var c = u.variables;
          return a(s, {
            subscriptionData: i,
            variables: c
          });
        });
      },
      error: function(i) {
        if (n.onError) {
          n.onError(i);
          return;
        }
        __DEV__ && M.error("Unhandled GraphQL subscription error", i);
      }
    });
    return this.subscriptions.add(o), function() {
      r.subscriptions.delete(o) && o.unsubscribe();
    };
  }, t.prototype.setOptions = function(n) {
    return this.reobserve(n);
  }, t.prototype.setVariables = function(n) {
    return Be(this.variables, n) ? this.observers.size ? this.result() : Promise.resolve() : (this.options.variables = n, this.observers.size ? this.reobserve({
      fetchPolicy: this.options.initialFetchPolicy,
      variables: n
    }, Ne.setVariables) : Promise.resolve());
  }, t.prototype.updateQuery = function(n) {
    var r = this.queryManager, o = r.cache.diff({
      query: this.options.query,
      variables: this.variables,
      returnPartialData: !0,
      optimistic: !1
    }).result, i = n(o, {
      variables: this.variables
    });
    i && (r.cache.writeQuery({
      query: this.options.query,
      data: i,
      variables: this.variables
    }), r.broadcastQueries());
  }, t.prototype.startPolling = function(n) {
    this.options.pollInterval = n, this.updatePolling();
  }, t.prototype.stopPolling = function() {
    this.options.pollInterval = 0, this.updatePolling();
  }, t.prototype.applyNextFetchPolicy = function(n, r) {
    if (r.nextFetchPolicy) {
      var o = r.fetchPolicy, i = o === void 0 ? "cache-first" : o, a = r.initialFetchPolicy, s = a === void 0 ? i : a;
      i === "standby" || (typeof r.nextFetchPolicy == "function" ? r.fetchPolicy = r.nextFetchPolicy(i, {
        reason: n,
        options: r,
        observable: this,
        initialFetchPolicy: s
      }) : n === "variables-changed" ? r.fetchPolicy = s : r.fetchPolicy = r.nextFetchPolicy);
    }
    return r.fetchPolicy;
  }, t.prototype.fetch = function(n, r) {
    return this.queryManager.setObservableQuery(this), this.queryManager.fetchConcastWithInfo(this.queryId, n, r);
  }, t.prototype.updatePolling = function() {
    var n = this;
    if (!this.queryManager.ssrMode) {
      var r = this, o = r.pollingInfo, i = r.options.pollInterval;
      if (!i) {
        o && (clearTimeout(o.timeout), delete this.pollingInfo);
        return;
      }
      if (!(o && o.interval === i)) {
        __DEV__ ? M(i, "Attempted to start a polling query without a polling interval.") : M(i, 13);
        var a = o || (this.pollingInfo = {});
        a.interval = i;
        var s = function() {
          n.pollingInfo && (Qo(n.queryInfo.networkStatus) ? u() : n.reobserve({
            fetchPolicy: n.options.initialFetchPolicy === "no-cache" ? "no-cache" : "network-only"
          }, Ne.poll).then(u, u));
        }, u = function() {
          var c = n.pollingInfo;
          c && (clearTimeout(c.timeout), c.timeout = setTimeout(s, c.interval));
        };
        u();
      }
    }
  }, t.prototype.updateLastResult = function(n, r) {
    return r === void 0 && (r = this.variables), this.last = v(v({}, this.last), { result: this.queryManager.assumeImmutableResults ? n : zp(n), variables: r }), zt(n.errors) || delete this.last.error, this.last;
  }, t.prototype.reobserveAsConcast = function(n, r) {
    var o = this;
    this.isTornDown = !1;
    var i = r === Ne.refetch || r === Ne.fetchMore || r === Ne.poll, a = this.options.variables, s = this.options.fetchPolicy, u = Os(this.options, n || {}), c = i ? u : bI(this.options, u);
    i || (this.updatePolling(), n && n.variables && !Be(n.variables, a) && c.fetchPolicy !== "standby" && c.fetchPolicy === s && (this.applyNextFetchPolicy("variables-changed", c), r === void 0 && (r = Ne.setVariables))), this.waitForOwnResult && (this.waitForOwnResult = Ou(c.fetchPolicy));
    var _ = function() {
      o.concast === h && (o.waitForOwnResult = !1);
    }, l = c.variables && v({}, c.variables), d = this.fetch(c, r), h = d.concast, f = d.fromLink, p = {
      next: function(m) {
        _(), o.reportResult(m, l);
      },
      error: function(m) {
        _(), o.reportError(m, l);
      }
    };
    return !i && f && (this.concast && this.observer && this.concast.removeObserver(this.observer), this.concast = h, this.observer = p), h.addObserver(p), h;
  }, t.prototype.reobserve = function(n, r) {
    return this.reobserveAsConcast(n, r).promise;
  }, t.prototype.observe = function() {
    this.reportResult(this.getCurrentResult(!1), this.variables);
  }, t.prototype.reportResult = function(n, r) {
    var o = this.getLastError();
    (o || this.isDifferentFromLastResult(n, r)) && ((o || !n.partial || this.options.returnPartialData) && this.updateLastResult(n, r), Po(this.observers, "next", n));
  }, t.prototype.reportError = function(n, r) {
    var o = v(v({}, this.getLastResult()), { error: n, errors: n.graphQLErrors, networkStatus: Ne.error, loading: !1 });
    this.updateLastResult(o, r), Po(this.observers, "error", this.last.error = n);
  }, t.prototype.hasObservers = function() {
    return this.observers.size > 0;
  }, t.prototype.tearDownQuery = function() {
    this.isTornDown || (this.concast && this.observer && (this.concast.removeObserver(this.observer), delete this.concast, delete this.observer), this.stopPolling(), this.subscriptions.forEach(function(n) {
      return n.unsubscribe();
    }), this.subscriptions.clear(), this.queryManager.stopQuery(this.queryId), this.observers.clear(), this.isTornDown = !0);
  }, t;
}(ye);
Jp(Ec);
function Im(e) {
  var t = e.options, n = t.fetchPolicy, r = t.nextFetchPolicy;
  return n === "cache-and-network" || n === "network-only" ? e.reobserve({
    fetchPolicy: "cache-first",
    nextFetchPolicy: function() {
      return this.nextFetchPolicy = r, typeof r == "function" ? r.apply(this, arguments) : n;
    }
  }) : e.reobserve();
}
function gI(e) {
  __DEV__ && M.error("Unhandled error", e.message, e.stack);
}
function Am(e) {
  __DEV__ && e && __DEV__ && M.debug("Missing cache result fields: ".concat(JSON.stringify(e)), e);
}
function Ou(e) {
  return e === "network-only" || e === "no-cache" || e === "standby";
}
var ym = function() {
  function e(t) {
    var n = t.cache, r = t.client, o = t.resolvers, i = t.fragmentMatcher;
    this.selectionsToResolveCache = /* @__PURE__ */ new WeakMap(), this.cache = n, r && (this.client = r), o && this.addResolvers(o), i && this.setFragmentMatcher(i);
  }
  return e.prototype.addResolvers = function(t) {
    var n = this;
    this.resolvers = this.resolvers || {}, Array.isArray(t) ? t.forEach(function(r) {
      n.resolvers = hd(n.resolvers, r);
    }) : this.resolvers = hd(this.resolvers, t);
  }, e.prototype.setResolvers = function(t) {
    this.resolvers = {}, this.addResolvers(t);
  }, e.prototype.getResolvers = function() {
    return this.resolvers || {};
  }, e.prototype.runResolvers = function(t) {
    var n = t.document, r = t.remoteResult, o = t.context, i = t.variables, a = t.onlyRunForcedResolvers, s = a === void 0 ? !1 : a;
    return In(this, void 0, void 0, function() {
      return An(this, function(u) {
        return n ? [2, this.resolveDocument(n, r.data, o, i, this.fragmentMatcher, s).then(function(c) {
          return v(v({}, r), { data: c.result });
        })] : [2, r];
      });
    });
  }, e.prototype.setFragmentMatcher = function(t) {
    this.fragmentMatcher = t;
  }, e.prototype.getFragmentMatcher = function() {
    return this.fragmentMatcher;
  }, e.prototype.clientQuery = function(t) {
    return hl(["client"], t) && this.resolvers ? t : null;
  }, e.prototype.serverQuery = function(t) {
    return yv(t);
  }, e.prototype.prepareContext = function(t) {
    var n = this.cache;
    return v(v({}, t), { cache: n, getCacheKey: function(r) {
      return n.identify(r);
    } });
  }, e.prototype.addExportedVariables = function(t, n, r) {
    return n === void 0 && (n = {}), r === void 0 && (r = {}), In(this, void 0, void 0, function() {
      return An(this, function(o) {
        return t ? [2, this.resolveDocument(t, this.buildRootValueFromCache(t, n) || {}, this.prepareContext(r), n).then(function(i) {
          return v(v({}, n), i.exportedVariables);
        })] : [2, v({}, n)];
      });
    });
  }, e.prototype.shouldForceResolvers = function(t) {
    var n = !1;
    return hn(t, {
      Directive: {
        enter: function(r) {
          if (r.name.value === "client" && r.arguments && (n = r.arguments.some(function(o) {
            return o.name.value === "always" && o.value.kind === "BooleanValue" && o.value.value === !0;
          }), n))
            return fl;
        }
      }
    }), n;
  }, e.prototype.buildRootValueFromCache = function(t, n) {
    return this.cache.diff({
      query: Av(t),
      variables: n,
      returnPartialData: !0,
      optimistic: !1
    }).result;
  }, e.prototype.resolveDocument = function(t, n, r, o, i, a) {
    return r === void 0 && (r = {}), o === void 0 && (o = {}), i === void 0 && (i = function() {
      return !0;
    }), a === void 0 && (a = !1), In(this, void 0, void 0, function() {
      var s, u, c, _, l, d, h, f, p, m, b;
      return An(this, function(T) {
        return s = Es(t), u = El(t), c = pl(u), _ = this.collectSelectionsToResolve(s, c), l = s.operation, d = l ? l.charAt(0).toUpperCase() + l.slice(1) : "Query", h = this, f = h.cache, p = h.client, m = {
          fragmentMap: c,
          context: v(v({}, r), { cache: f, client: p }),
          variables: o,
          fragmentMatcher: i,
          defaultOperationType: d,
          exportedVariables: {},
          selectionsToResolve: _,
          onlyRunForcedResolvers: a
        }, b = !1, [2, this.resolveSelectionSet(s.selectionSet, b, n, m).then(function(E) {
          return {
            result: E,
            exportedVariables: m.exportedVariables
          };
        })];
      });
    });
  }, e.prototype.resolveSelectionSet = function(t, n, r, o) {
    return In(this, void 0, void 0, function() {
      var i, a, s, u, c, _ = this;
      return An(this, function(l) {
        return i = o.fragmentMap, a = o.context, s = o.variables, u = [r], c = function(d) {
          return In(_, void 0, void 0, function() {
            var h, f;
            return An(this, function(p) {
              return !n && !o.selectionsToResolve.has(d) ? [2] : ps(d, s) ? ar(d) ? [2, this.resolveField(d, n, r, o).then(function(m) {
                var b;
                typeof m < "u" && u.push((b = {}, b[ir(d)] = m, b));
              })] : (Ov(d) ? h = d : (h = i[d.name.value], __DEV__ ? M(h, "No fragment named ".concat(d.name.value)) : M(h, 11)), h && h.typeCondition && (f = h.typeCondition.name.value, o.fragmentMatcher(r, f, a)) ? [2, this.resolveSelectionSet(h.selectionSet, n, r, o).then(function(m) {
                u.push(m);
              })] : [2]) : [2];
            });
          });
        }, [2, Promise.all(t.selections.map(c)).then(function() {
          return gl(u);
        })];
      });
    });
  }, e.prototype.resolveField = function(t, n, r, o) {
    return In(this, void 0, void 0, function() {
      var i, a, s, u, c, _, l, d, h, f = this;
      return An(this, function(p) {
        return r ? (i = o.variables, a = t.name.value, s = ir(t), u = a !== s, c = r[s] || r[a], _ = Promise.resolve(c), (!o.onlyRunForcedResolvers || this.shouldForceResolvers(t)) && (l = r.__typename || o.defaultOperationType, d = this.resolvers && this.resolvers[l], d && (h = d[u ? a : s], h && (_ = Promise.resolve(Dl.withValue(this.cache, h, [
          r,
          ms(t, i),
          o.context,
          { field: t, fragmentMap: o.fragmentMap }
        ]))))), [2, _.then(function(m) {
          var b, T;
          if (m === void 0 && (m = c), t.directives && t.directives.forEach(function(g) {
            g.name.value === "export" && g.arguments && g.arguments.forEach(function(O) {
              O.name.value === "as" && O.value.kind === "StringValue" && (o.exportedVariables[O.value.value] = m);
            });
          }), !t.selectionSet || m == null)
            return m;
          var E = (T = (b = t.directives) === null || b === void 0 ? void 0 : b.some(function(g) {
            return g.name.value === "client";
          })) !== null && T !== void 0 ? T : !1;
          if (Array.isArray(m))
            return f.resolveSubSelectedArray(t, n || E, m, o);
          if (t.selectionSet)
            return f.resolveSelectionSet(t.selectionSet, n || E, m, o);
        })]) : [2, null];
      });
    });
  }, e.prototype.resolveSubSelectedArray = function(t, n, r, o) {
    var i = this;
    return Promise.all(r.map(function(a) {
      if (a === null)
        return null;
      if (Array.isArray(a))
        return i.resolveSubSelectedArray(t, n, a, o);
      if (t.selectionSet)
        return i.resolveSelectionSet(t.selectionSet, n, a, o);
    }));
  }, e.prototype.collectSelectionsToResolve = function(t, n) {
    var r = function(a) {
      return !Array.isArray(a);
    }, o = this.selectionsToResolveCache;
    function i(a) {
      if (!o.has(a)) {
        var s = /* @__PURE__ */ new Set();
        o.set(a, s), hn(a, {
          Directive: function(u, c, _, l, d) {
            u.name.value === "client" && d.forEach(function(h) {
              r(h) && _d(h) && s.add(h);
            });
          },
          FragmentSpread: function(u, c, _, l, d) {
            var h = n[u.name.value];
            __DEV__ ? M(h, "No fragment named ".concat(u.name.value)) : M(h, 12);
            var f = i(h);
            f.size > 0 && (d.forEach(function(p) {
              r(p) && _d(p) && s.add(p);
            }), s.add(u), f.forEach(function(p) {
              s.add(p);
            }));
          }
        });
      }
      return o.get(a);
    }
    return i(t);
  }, e;
}(), yr = new (lr ? WeakMap : Map)();
function gu(e, t) {
  var n = e[t];
  typeof n == "function" && (e[t] = function() {
    return yr.set(e, (yr.get(e) + 1) % 1e15), n.apply(this, arguments);
  });
}
function Jd(e) {
  e.notifyTimeout && (clearTimeout(e.notifyTimeout), e.notifyTimeout = void 0);
}
var Ru = function() {
  function e(t, n) {
    n === void 0 && (n = t.generateQueryId()), this.queryId = n, this.listeners = /* @__PURE__ */ new Set(), this.document = null, this.lastRequestId = 1, this.subscriptions = /* @__PURE__ */ new Set(), this.stopped = !1, this.dirty = !1, this.observableQuery = null;
    var r = this.cache = t.cache;
    yr.has(r) || (yr.set(r, 0), gu(r, "evict"), gu(r, "modify"), gu(r, "reset"));
  }
  return e.prototype.init = function(t) {
    var n = t.networkStatus || Ne.loading;
    return this.variables && this.networkStatus !== Ne.loading && !Be(this.variables, t.variables) && (n = Ne.setVariables), Be(t.variables, this.variables) || (this.lastDiff = void 0), Object.assign(this, {
      document: t.document,
      variables: t.variables,
      networkError: null,
      graphQLErrors: this.graphQLErrors || [],
      networkStatus: n
    }), t.observableQuery && this.setObservableQuery(t.observableQuery), t.lastRequestId && (this.lastRequestId = t.lastRequestId), this;
  }, e.prototype.reset = function() {
    Jd(this), this.dirty = !1;
  }, e.prototype.getDiff = function(t) {
    t === void 0 && (t = this.variables);
    var n = this.getDiffOptions(t);
    if (this.lastDiff && Be(n, this.lastDiff.options))
      return this.lastDiff.diff;
    this.updateWatch(this.variables = t);
    var r = this.observableQuery;
    if (r && r.options.fetchPolicy === "no-cache")
      return { complete: !1 };
    var o = this.cache.diff(n);
    return this.updateLastDiff(o, n), o;
  }, e.prototype.updateLastDiff = function(t, n) {
    this.lastDiff = t ? {
      diff: t,
      options: n || this.getDiffOptions()
    } : void 0;
  }, e.prototype.getDiffOptions = function(t) {
    var n;
    return t === void 0 && (t = this.variables), {
      query: this.document,
      variables: t,
      returnPartialData: !0,
      optimistic: !0,
      canonizeResults: (n = this.observableQuery) === null || n === void 0 ? void 0 : n.options.canonizeResults
    };
  }, e.prototype.setDiff = function(t) {
    var n = this, r = this.lastDiff && this.lastDiff.diff;
    this.updateLastDiff(t), !this.dirty && !Be(r && r.result, t && t.result) && (this.dirty = !0, this.notifyTimeout || (this.notifyTimeout = setTimeout(function() {
      return n.notify();
    }, 0)));
  }, e.prototype.setObservableQuery = function(t) {
    var n = this;
    t !== this.observableQuery && (this.oqListener && this.listeners.delete(this.oqListener), this.observableQuery = t, t ? (t.queryInfo = this, this.listeners.add(this.oqListener = function() {
      var r = n.getDiff();
      r.fromOptimisticTransaction ? t.observe() : Im(t);
    })) : delete this.oqListener);
  }, e.prototype.notify = function() {
    var t = this;
    Jd(this), this.shouldNotify() && this.listeners.forEach(function(n) {
      return n(t);
    }), this.dirty = !1;
  }, e.prototype.shouldNotify = function() {
    if (!this.dirty || !this.listeners.size)
      return !1;
    if (Qo(this.networkStatus) && this.observableQuery) {
      var t = this.observableQuery.options.fetchPolicy;
      if (t !== "cache-only" && t !== "cache-and-network")
        return !1;
    }
    return !0;
  }, e.prototype.stop = function() {
    if (!this.stopped) {
      this.stopped = !0, this.reset(), this.cancel(), this.cancel = e.prototype.cancel, this.subscriptions.forEach(function(n) {
        return n.unsubscribe();
      });
      var t = this.observableQuery;
      t && t.stopPolling();
    }
  }, e.prototype.cancel = function() {
  }, e.prototype.updateWatch = function(t) {
    var n = this;
    t === void 0 && (t = this.variables);
    var r = this.observableQuery;
    if (!(r && r.options.fetchPolicy === "no-cache")) {
      var o = v(v({}, this.getDiffOptions(t)), { watcher: this, callback: function(i) {
        return n.setDiff(i);
      } });
      (!this.lastWatch || !Be(o, this.lastWatch)) && (this.cancel(), this.cancel = this.cache.watch(this.lastWatch = o));
    }
  }, e.prototype.resetLastWrite = function() {
    this.lastWrite = void 0;
  }, e.prototype.shouldWrite = function(t, n) {
    var r = this.lastWrite;
    return !(r && r.dmCount === yr.get(this.cache) && Be(n, r.variables) && Be(t.data, r.result.data));
  }, e.prototype.markResult = function(t, n, r, o) {
    var i = this, a = new jn(), s = zt(t.errors) ? t.errors.slice(0) : [];
    if (this.reset(), "incremental" in t && zt(t.incremental)) {
      var u = Qp(this.getDiff().result, t);
      t.data = u;
    } else if ("hasNext" in t && t.hasNext) {
      var c = this.getDiff();
      t.data = a.merge(c.result, t.data);
    }
    this.graphQLErrors = s, r.fetchPolicy === "no-cache" ? this.updateLastDiff({ result: t.data, complete: !0 }, this.getDiffOptions(r.variables)) : o !== 0 && (bc(t, r.errorPolicy) ? this.cache.performTransaction(function(_) {
      if (i.shouldWrite(t, r.variables))
        _.writeQuery({
          query: n,
          data: t.data,
          variables: r.variables,
          overwrite: o === 1
        }), i.lastWrite = {
          result: t,
          variables: r.variables,
          dmCount: yr.get(i.cache)
        };
      else if (i.lastDiff && i.lastDiff.diff.complete) {
        t.data = i.lastDiff.diff.result;
        return;
      }
      var l = i.getDiffOptions(r.variables), d = _.diff(l);
      i.stopped || i.updateWatch(r.variables), i.updateLastDiff(d, l), d.complete && (t.data = d.result);
    }) : this.lastWrite = void 0);
  }, e.prototype.markReady = function() {
    return this.networkError = null, this.networkStatus = Ne.ready;
  }, e.prototype.markError = function(t) {
    return this.networkStatus = Ne.error, this.lastWrite = void 0, this.reset(), t.graphQLErrors && (this.graphQLErrors = t.graphQLErrors), t.networkError && (this.networkError = t.networkError), t;
  }, e;
}();
function bc(e, t) {
  t === void 0 && (t = "none");
  var n = t === "ignore" || t === "all", r = !ca(e);
  return !r && n && e.data && (r = !0), r;
}
var RI = Object.prototype.hasOwnProperty, vI = function() {
  function e(t) {
    var n = t.cache, r = t.link, o = t.defaultOptions, i = t.queryDeduplication, a = i === void 0 ? !1 : i, s = t.onBroadcast, u = t.ssrMode, c = u === void 0 ? !1 : u, _ = t.clientAwareness, l = _ === void 0 ? {} : _, d = t.localState, h = t.assumeImmutableResults;
    this.clientAwareness = {}, this.queries = /* @__PURE__ */ new Map(), this.fetchCancelFns = /* @__PURE__ */ new Map(), this.transformCache = new (lr ? WeakMap : Map)(), this.queryIdCounter = 1, this.requestIdCounter = 1, this.mutationIdCounter = 1, this.inFlightLinkObservables = /* @__PURE__ */ new Map(), this.cache = n, this.link = r, this.defaultOptions = o || /* @__PURE__ */ Object.create(null), this.queryDeduplication = a, this.clientAwareness = l, this.localState = d || new ym({ cache: n }), this.ssrMode = c, this.assumeImmutableResults = !!h, (this.onBroadcast = s) && (this.mutationStore = /* @__PURE__ */ Object.create(null));
  }
  return e.prototype.stop = function() {
    var t = this;
    this.queries.forEach(function(n, r) {
      t.stopQueryNoBroadcast(r);
    }), this.cancelPendingFetches(__DEV__ ? new Te("QueryManager stopped while query was in flight") : new Te(14));
  }, e.prototype.cancelPendingFetches = function(t) {
    this.fetchCancelFns.forEach(function(n) {
      return n(t);
    }), this.fetchCancelFns.clear();
  }, e.prototype.mutate = function(t) {
    var n, r, o = t.mutation, i = t.variables, a = t.optimisticResponse, s = t.updateQueries, u = t.refetchQueries, c = u === void 0 ? [] : u, _ = t.awaitRefetchQueries, l = _ === void 0 ? !1 : _, d = t.update, h = t.onQueryUpdated, f = t.fetchPolicy, p = f === void 0 ? ((n = this.defaultOptions.mutate) === null || n === void 0 ? void 0 : n.fetchPolicy) || "network-only" : f, m = t.errorPolicy, b = m === void 0 ? ((r = this.defaultOptions.mutate) === null || r === void 0 ? void 0 : r.errorPolicy) || "none" : m, T = t.keepRootFields, E = t.context;
    return In(this, void 0, void 0, function() {
      var g, O, I, N, w, G;
      return An(this, function(D) {
        switch (D.label) {
          case 0:
            return __DEV__ ? M(o, "mutation option is required. You must specify your GraphQL document in the mutation option.") : M(o, 15), __DEV__ ? M(p === "network-only" || p === "no-cache", "Mutations support only 'network-only' or 'no-cache' fetchPolicy strings. The default `network-only` behavior automatically writes mutation results to the cache. Passing `no-cache` skips the cache write.") : M(p === "network-only" || p === "no-cache", 16), g = this.generateMutationId(), O = this.transform(o), I = O.document, N = O.hasClientExports, o = this.cache.transformForLink(I), i = this.getVariables(o, i), N ? [4, this.localState.addExportedVariables(o, i, E)] : [3, 2];
          case 1:
            i = D.sent(), D.label = 2;
          case 2:
            return w = this.mutationStore && (this.mutationStore[g] = {
              mutation: o,
              variables: i,
              loading: !0,
              error: null
            }), a && this.markMutationOptimistic(a, {
              mutationId: g,
              document: o,
              variables: i,
              fetchPolicy: p,
              errorPolicy: b,
              context: E,
              updateQueries: s,
              update: d,
              keepRootFields: T
            }), this.broadcastQueries(), G = this, [2, new Promise(function(Z, ne) {
              return du(G.getObservableFromLink(o, v(v({}, E), { optimisticResponse: a }), i, !1), function(J) {
                if (ca(J) && b === "none")
                  throw new hr({
                    graphQLErrors: ic(J)
                  });
                w && (w.loading = !1, w.error = null);
                var B = v({}, J);
                return typeof c == "function" && (c = c(B)), b === "ignore" && ca(B) && delete B.errors, G.markMutationResult({
                  mutationId: g,
                  result: B,
                  document: o,
                  variables: i,
                  fetchPolicy: p,
                  errorPolicy: b,
                  context: E,
                  update: d,
                  updateQueries: s,
                  awaitRefetchQueries: l,
                  refetchQueries: c,
                  removeOptimistic: a ? g : void 0,
                  onQueryUpdated: h,
                  keepRootFields: T
                });
              }).subscribe({
                next: function(J) {
                  G.broadcastQueries(), (!("hasNext" in J) || J.hasNext === !1) && Z(J);
                },
                error: function(J) {
                  w && (w.loading = !1, w.error = J), a && G.cache.removeOptimistic(g), G.broadcastQueries(), ne(J instanceof hr ? J : new hr({
                    networkError: J
                  }));
                }
              });
            })];
        }
      });
    });
  }, e.prototype.markMutationResult = function(t, n) {
    var r = this;
    n === void 0 && (n = this.cache);
    var o = t.result, i = [], a = t.fetchPolicy === "no-cache";
    if (!a && bc(o, t.errorPolicy)) {
      if (wr(o) || i.push({
        result: o.data,
        dataId: "ROOT_MUTATION",
        query: t.document,
        variables: t.variables
      }), wr(o) && zt(o.incremental)) {
        var s = n.diff({
          id: "ROOT_MUTATION",
          query: this.transform(t.document).asQuery,
          variables: t.variables,
          optimistic: !1,
          returnPartialData: !0
        }), u = void 0;
        s.result && (u = Qp(s.result, o)), typeof u < "u" && (o.data = u, i.push({
          result: u,
          dataId: "ROOT_MUTATION",
          query: t.document,
          variables: t.variables
        }));
      }
      var c = t.updateQueries;
      c && this.queries.forEach(function(l, d) {
        var h = l.observableQuery, f = h && h.queryName;
        if (!(!f || !RI.call(c, f))) {
          var p = c[f], m = r.queries.get(d), b = m.document, T = m.variables, E = n.diff({
            query: b,
            variables: T,
            returnPartialData: !0,
            optimistic: !1
          }), g = E.result, O = E.complete;
          if (O && g) {
            var I = p(g, {
              mutationResult: o,
              queryName: b && ec(b) || void 0,
              queryVariables: T
            });
            I && i.push({
              result: I,
              dataId: "ROOT_QUERY",
              query: b,
              variables: T
            });
          }
        }
      });
    }
    if (i.length > 0 || t.refetchQueries || t.update || t.onQueryUpdated || t.removeOptimistic) {
      var _ = [];
      if (this.refetchQueries({
        updateCache: function(l) {
          a || i.forEach(function(p) {
            return l.write(p);
          });
          var d = t.update, h = !Wv(o) || wr(o) && !o.hasNext;
          if (d) {
            if (!a) {
              var f = l.diff({
                id: "ROOT_MUTATION",
                query: r.transform(t.document).asQuery,
                variables: t.variables,
                optimistic: !1,
                returnPartialData: !0
              });
              f.complete && (o = v(v({}, o), { data: f.result }), "incremental" in o && delete o.incremental, "hasNext" in o && delete o.hasNext);
            }
            h && d(l, o, {
              context: t.context,
              variables: t.variables
            });
          }
          !a && !t.keepRootFields && h && l.modify({
            id: "ROOT_MUTATION",
            fields: function(p, m) {
              var b = m.fieldName, T = m.DELETE;
              return b === "__typename" ? p : T;
            }
          });
        },
        include: t.refetchQueries,
        optimistic: !1,
        removeOptimistic: t.removeOptimistic,
        onQueryUpdated: t.onQueryUpdated || null
      }).forEach(function(l) {
        return _.push(l);
      }), t.awaitRefetchQueries || t.onQueryUpdated)
        return Promise.all(_).then(function() {
          return o;
        });
    }
    return Promise.resolve(o);
  }, e.prototype.markMutationOptimistic = function(t, n) {
    var r = this, o = typeof t == "function" ? t(n.variables) : t;
    return this.cache.recordOptimisticTransaction(function(i) {
      try {
        r.markMutationResult(v(v({}, n), { result: { data: o } }), i);
      } catch (a) {
        __DEV__ && M.error(a);
      }
    }, n.mutationId);
  }, e.prototype.fetchQuery = function(t, n, r) {
    return this.fetchQueryObservable(t, n, r).promise;
  }, e.prototype.getQueryStore = function() {
    var t = /* @__PURE__ */ Object.create(null);
    return this.queries.forEach(function(n, r) {
      t[r] = {
        variables: n.variables,
        networkStatus: n.networkStatus,
        networkError: n.networkError,
        graphQLErrors: n.graphQLErrors
      };
    }), t;
  }, e.prototype.resetErrors = function(t) {
    var n = this.queries.get(t);
    n && (n.networkError = void 0, n.graphQLErrors = []);
  }, e.prototype.transform = function(t) {
    var n = this.transformCache;
    if (!n.has(t)) {
      var r = this.cache.transformDocument(t), o = Iv(r), i = this.localState.clientQuery(r), a = o && this.localState.serverQuery(o), s = {
        document: r,
        hasClientExports: rv(r),
        hasForcedResolvers: this.localState.shouldForceResolvers(r),
        clientQuery: i,
        serverQuery: a,
        defaultVars: bl(yi(r)),
        asQuery: v(v({}, r), { definitions: r.definitions.map(function(c) {
          return c.kind === "OperationDefinition" && c.operation !== "query" ? v(v({}, c), { operation: "query" }) : c;
        }) })
      }, u = function(c) {
        c && !n.has(c) && n.set(c, s);
      };
      u(t), u(r), u(i), u(a);
    }
    return n.get(t);
  }, e.prototype.getVariables = function(t, n) {
    return v(v({}, this.transform(t).defaultVars), n);
  }, e.prototype.watchQuery = function(t) {
    t = v(v({}, t), { variables: this.getVariables(t.query, t.variables) }), typeof t.notifyOnNetworkStatusChange > "u" && (t.notifyOnNetworkStatusChange = !1);
    var n = new Ru(this), r = new Ec({
      queryManager: this,
      queryInfo: n,
      options: t
    });
    return this.queries.set(r.queryId, n), n.init({
      document: r.query,
      observableQuery: r,
      variables: r.variables
    }), r;
  }, e.prototype.query = function(t, n) {
    var r = this;
    return n === void 0 && (n = this.generateQueryId()), __DEV__ ? M(t.query, "query option is required. You must specify your GraphQL document in the query option.") : M(t.query, 17), __DEV__ ? M(t.query.kind === "Document", 'You must wrap the query string in a "gql" tag.') : M(t.query.kind === "Document", 18), __DEV__ ? M(!t.returnPartialData, "returnPartialData option only supported on watchQuery.") : M(!t.returnPartialData, 19), __DEV__ ? M(!t.pollInterval, "pollInterval option only supported on watchQuery.") : M(!t.pollInterval, 20), this.fetchQuery(n, t).finally(function() {
      return r.stopQuery(n);
    });
  }, e.prototype.generateQueryId = function() {
    return String(this.queryIdCounter++);
  }, e.prototype.generateRequestId = function() {
    return this.requestIdCounter++;
  }, e.prototype.generateMutationId = function() {
    return String(this.mutationIdCounter++);
  }, e.prototype.stopQueryInStore = function(t) {
    this.stopQueryInStoreNoBroadcast(t), this.broadcastQueries();
  }, e.prototype.stopQueryInStoreNoBroadcast = function(t) {
    var n = this.queries.get(t);
    n && n.stop();
  }, e.prototype.clearStore = function(t) {
    return t === void 0 && (t = {
      discardWatches: !0
    }), this.cancelPendingFetches(__DEV__ ? new Te("Store reset while query was in flight (not completed in link chain)") : new Te(21)), this.queries.forEach(function(n) {
      n.observableQuery ? n.networkStatus = Ne.loading : n.stop();
    }), this.mutationStore && (this.mutationStore = /* @__PURE__ */ Object.create(null)), this.cache.reset(t);
  }, e.prototype.getObservableQueries = function(t) {
    var n = this;
    t === void 0 && (t = "active");
    var r = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Set();
    return Array.isArray(t) && t.forEach(function(a) {
      typeof a == "string" ? o.set(a, !1) : sv(a) ? o.set(n.transform(a).document, !1) : we(a) && a.query && i.add(a);
    }), this.queries.forEach(function(a, s) {
      var u = a.observableQuery, c = a.document;
      if (u) {
        if (t === "all") {
          r.set(s, u);
          return;
        }
        var _ = u.queryName, l = u.options.fetchPolicy;
        if (l === "standby" || t === "active" && !u.hasObservers())
          return;
        (t === "active" || _ && o.has(_) || c && o.has(c)) && (r.set(s, u), _ && o.set(_, !0), c && o.set(c, !0));
      }
    }), i.size && i.forEach(function(a) {
      var s = ac("legacyOneTimeQuery"), u = n.getQuery(s).init({
        document: a.query,
        variables: a.variables
      }), c = new Ec({
        queryManager: n,
        queryInfo: u,
        options: v(v({}, a), { fetchPolicy: "network-only" })
      });
      M(c.queryId === s), u.setObservableQuery(c), r.set(s, c);
    }), __DEV__ && o.size && o.forEach(function(a, s) {
      a || __DEV__ && M.warn("Unknown query ".concat(typeof s == "string" ? "named " : "").concat(JSON.stringify(s, null, 2), " requested in refetchQueries options.include array"));
    }), r;
  }, e.prototype.reFetchObservableQueries = function(t) {
    var n = this;
    t === void 0 && (t = !1);
    var r = [];
    return this.getObservableQueries(t ? "all" : "active").forEach(function(o, i) {
      var a = o.options.fetchPolicy;
      o.resetLastResults(), (t || a !== "standby" && a !== "cache-only") && r.push(o.refetch()), n.getQuery(i).setDiff(null);
    }), this.broadcastQueries(), Promise.all(r);
  }, e.prototype.setObservableQuery = function(t) {
    this.getQuery(t.queryId).setObservableQuery(t);
  }, e.prototype.startGraphQLSubscription = function(t) {
    var n = this, r = t.query, o = t.fetchPolicy, i = t.errorPolicy, a = t.variables, s = t.context, u = s === void 0 ? {} : s;
    r = this.transform(r).document, a = this.getVariables(r, a);
    var c = function(l) {
      return n.getObservableFromLink(r, u, l).map(function(d) {
        o !== "no-cache" && (bc(d, i) && n.cache.write({
          query: r,
          result: d.data,
          dataId: "ROOT_SUBSCRIPTION",
          variables: l
        }), n.broadcastQueries());
        var h = ca(d), f = uN(d);
        if (h || f) {
          var p = {};
          throw h && (p.graphQLErrors = d.errors), f && (p.protocolErrors = d.extensions[Al]), new hr(p);
        }
        return d;
      });
    };
    if (this.transform(r).hasClientExports) {
      var _ = this.localState.addExportedVariables(r, a, u).then(c);
      return new ye(function(l) {
        var d = null;
        return _.then(function(h) {
          return d = h.subscribe(l);
        }, l.error), function() {
          return d && d.unsubscribe();
        };
      });
    }
    return c(a);
  }, e.prototype.stopQuery = function(t) {
    this.stopQueryNoBroadcast(t), this.broadcastQueries();
  }, e.prototype.stopQueryNoBroadcast = function(t) {
    this.stopQueryInStoreNoBroadcast(t), this.removeQuery(t);
  }, e.prototype.removeQuery = function(t) {
    this.fetchCancelFns.delete(t), this.queries.has(t) && (this.getQuery(t).stop(), this.queries.delete(t));
  }, e.prototype.broadcastQueries = function() {
    this.onBroadcast && this.onBroadcast(), this.queries.forEach(function(t) {
      return t.notify();
    });
  }, e.prototype.getLocalState = function() {
    return this.localState;
  }, e.prototype.getObservableFromLink = function(t, n, r, o) {
    var i = this, a;
    o === void 0 && (o = (a = n?.queryDeduplication) !== null && a !== void 0 ? a : this.queryDeduplication);
    var s, u = this.transform(t).serverQuery;
    if (u) {
      var c = this, _ = c.inFlightLinkObservables, l = c.link, d = {
        query: u,
        variables: r,
        operationName: ec(u) || void 0,
        context: this.prepareContext(v(v({}, n), { forceFetch: !o }))
      };
      if (n = d.context, o) {
        var h = _.get(u) || /* @__PURE__ */ new Map();
        _.set(u, h);
        var f = tr(r);
        if (s = h.get(f), !s) {
          var p = new Or([
            uc(l, d)
          ]);
          h.set(f, s = p), p.beforeNext(function() {
            h.delete(f) && h.size < 1 && _.delete(u);
          });
        }
      } else
        s = new Or([
          uc(l, d)
        ]);
    } else
      s = new Or([
        ye.of({ data: {} })
      ]), n = this.prepareContext(n);
    var m = this.transform(t).clientQuery;
    return m && (s = du(s, function(b) {
      return i.localState.runResolvers({
        document: m,
        remoteResult: b,
        context: n,
        variables: r
      });
    })), s;
  }, e.prototype.getResultsFromLink = function(t, n, r) {
    var o = t.lastRequestId = this.generateRequestId(), i = this.cache.transformForLink(this.transform(t.document).document);
    return du(this.getObservableFromLink(i, r.context, r.variables), function(a) {
      var s = ic(a), u = s.length > 0;
      if (o >= t.lastRequestId) {
        if (u && r.errorPolicy === "none")
          throw t.markError(new hr({
            graphQLErrors: s
          }));
        t.markResult(a, i, r, n), t.markReady();
      }
      var c = {
        data: a.data,
        loading: !1,
        networkStatus: Ne.ready
      };
      return u && r.errorPolicy !== "ignore" && (c.errors = s, c.networkStatus = Ne.error), c;
    }, function(a) {
      var s = cN(a) ? a : new hr({ networkError: a });
      throw o >= t.lastRequestId && t.markError(s), s;
    });
  }, e.prototype.fetchQueryObservable = function(t, n, r) {
    return this.fetchConcastWithInfo(t, n, r).concast;
  }, e.prototype.fetchConcastWithInfo = function(t, n, r) {
    var o = this;
    r === void 0 && (r = Ne.loading);
    var i = this.transform(n.query).document, a = this.getVariables(i, n.variables), s = this.getQuery(t), u = this.defaultOptions.watchQuery, c = n.fetchPolicy, _ = c === void 0 ? u && u.fetchPolicy || "cache-first" : c, l = n.errorPolicy, d = l === void 0 ? u && u.errorPolicy || "none" : l, h = n.returnPartialData, f = h === void 0 ? !1 : h, p = n.notifyOnNetworkStatusChange, m = p === void 0 ? !1 : p, b = n.context, T = b === void 0 ? {} : b, E = Object.assign({}, n, {
      query: i,
      variables: a,
      fetchPolicy: _,
      errorPolicy: d,
      returnPartialData: f,
      notifyOnNetworkStatusChange: m,
      context: T
    }), g = function(G) {
      E.variables = G;
      var D = o.fetchQueryByPolicy(s, E, r);
      return E.fetchPolicy !== "standby" && D.sources.length > 0 && s.observableQuery && s.observableQuery.applyNextFetchPolicy("after-fetch", n), D;
    }, O = function() {
      return o.fetchCancelFns.delete(t);
    };
    this.fetchCancelFns.set(t, function(G) {
      O(), setTimeout(function() {
        return I.cancel(G);
      });
    });
    var I, N;
    if (this.transform(E.query).hasClientExports)
      I = new Or(this.localState.addExportedVariables(E.query, E.variables, E.context).then(g).then(function(G) {
        return G.sources;
      })), N = !0;
    else {
      var w = g(E.variables);
      N = w.fromLink, I = new Or(w.sources);
    }
    return I.promise.then(O, O), {
      concast: I,
      fromLink: N
    };
  }, e.prototype.refetchQueries = function(t) {
    var n = this, r = t.updateCache, o = t.include, i = t.optimistic, a = i === void 0 ? !1 : i, s = t.removeOptimistic, u = s === void 0 ? a ? ac("refetchQueries") : void 0 : s, c = t.onQueryUpdated, _ = /* @__PURE__ */ new Map();
    o && this.getObservableQueries(o).forEach(function(d, h) {
      _.set(h, {
        oq: d,
        lastDiff: n.getQuery(h).getDiff()
      });
    });
    var l = /* @__PURE__ */ new Map();
    return r && this.cache.batch({
      update: r,
      optimistic: a && u || !1,
      removeOptimistic: u,
      onWatchUpdated: function(d, h, f) {
        var p = d.watcher instanceof Ru && d.watcher.observableQuery;
        if (p) {
          if (c) {
            _.delete(p.queryId);
            var m = c(p, h, f);
            return m === !0 && (m = p.refetch()), m !== !1 && l.set(p, m), m;
          }
          c !== null && _.set(p.queryId, { oq: p, lastDiff: f, diff: h });
        }
      }
    }), _.size && _.forEach(function(d, h) {
      var f = d.oq, p = d.lastDiff, m = d.diff, b;
      if (c) {
        if (!m) {
          var T = f.queryInfo;
          T.reset(), m = T.getDiff();
        }
        b = c(f, m, p);
      }
      (!c || b === !0) && (b = f.refetch()), b !== !1 && l.set(f, b), h.indexOf("legacyOneTimeQuery") >= 0 && n.stopQueryNoBroadcast(h);
    }), u && this.cache.removeOptimistic(u), l;
  }, e.prototype.fetchQueryByPolicy = function(t, n, r) {
    var o = this, i = n.query, a = n.variables, s = n.fetchPolicy, u = n.refetchWritePolicy, c = n.errorPolicy, _ = n.returnPartialData, l = n.context, d = n.notifyOnNetworkStatusChange, h = t.networkStatus;
    t.init({
      document: this.transform(i).document,
      variables: a,
      networkStatus: r
    });
    var f = function() {
      return t.getDiff(a);
    }, p = function(g, O) {
      O === void 0 && (O = t.networkStatus || Ne.loading);
      var I = g.result;
      __DEV__ && !_ && !Be(I, {}) && Am(g.missing);
      var N = function(w) {
        return ye.of(v({ data: w, loading: Qo(O), networkStatus: O }, g.complete ? null : { partial: !0 }));
      };
      return I && o.transform(i).hasForcedResolvers ? o.localState.runResolvers({
        document: i,
        remoteResult: { data: I },
        context: l,
        variables: a,
        onlyRunForcedResolvers: !0
      }).then(function(w) {
        return N(w.data || void 0);
      }) : c === "none" && O === Ne.refetch && Array.isArray(g.missing) ? N(void 0) : N(I);
    }, m = s === "no-cache" ? 0 : r === Ne.refetch && u !== "merge" ? 1 : 2, b = function() {
      return o.getResultsFromLink(t, m, {
        variables: a,
        context: l,
        fetchPolicy: s,
        errorPolicy: c
      });
    }, T = d && typeof h == "number" && h !== r && Qo(r);
    switch (s) {
      default:
      case "cache-first": {
        var E = f();
        return E.complete ? { fromLink: !1, sources: [p(E, t.markReady())] } : _ || T ? { fromLink: !0, sources: [p(E), b()] } : { fromLink: !0, sources: [b()] };
      }
      case "cache-and-network": {
        var E = f();
        return E.complete || _ || T ? { fromLink: !0, sources: [p(E), b()] } : { fromLink: !0, sources: [b()] };
      }
      case "cache-only":
        return { fromLink: !1, sources: [p(f(), t.markReady())] };
      case "network-only":
        return T ? { fromLink: !0, sources: [p(f()), b()] } : { fromLink: !0, sources: [b()] };
      case "no-cache":
        return T ? {
          fromLink: !0,
          sources: [
            p(t.getDiff()),
            b()
          ]
        } : { fromLink: !0, sources: [b()] };
      case "standby":
        return { fromLink: !1, sources: [] };
    }
  }, e.prototype.getQuery = function(t) {
    return t && !this.queries.has(t) && this.queries.set(t, new Ru(this, t)), this.queries.get(t);
  }, e.prototype.prepareContext = function(t) {
    t === void 0 && (t = {});
    var n = this.localState.prepareContext(t);
    return v(v({}, n), { clientAwareness: this.clientAwareness });
  }, e;
}(), Qd = !1, NI = function() {
  function e(t) {
    var n = this;
    this.resetStoreCallbacks = [], this.clearStoreCallbacks = [];
    var r = t.uri, o = t.credentials, i = t.headers, a = t.cache, s = t.ssrMode, u = s === void 0 ? !1 : s, c = t.ssrForceFetchDelay, _ = c === void 0 ? 0 : c, l = t.connectToDevTools, d = l === void 0 ? typeof window == "object" && !window.__APOLLO_CLIENT__ && __DEV__ : l, h = t.queryDeduplication, f = h === void 0 ? !0 : h, p = t.defaultOptions, m = t.assumeImmutableResults, b = m === void 0 ? !1 : m, T = t.resolvers, E = t.typeDefs, g = t.fragmentMatcher, O = t.name, I = t.version, N = t.link;
    if (N || (N = r ? new AN({ uri: r, credentials: o, headers: i }) : oo.empty()), !a)
      throw __DEV__ ? new Te(`To initialize Apollo Client, you must specify a 'cache' property in the options object. 
For more information, please visit: https://go.apollo.dev/c/docs`) : new Te(9);
    if (this.link = N, this.cache = a, this.disableNetworkFetches = u || _ > 0, this.queryDeduplication = f, this.defaultOptions = p || /* @__PURE__ */ Object.create(null), this.typeDefs = E, _ && setTimeout(function() {
      return n.disableNetworkFetches = !1;
    }, _), this.watchQuery = this.watchQuery.bind(this), this.query = this.query.bind(this), this.mutate = this.mutate.bind(this), this.resetStore = this.resetStore.bind(this), this.reFetchObservableQueries = this.reFetchObservableQueries.bind(this), d && typeof window == "object" && (window.__APOLLO_CLIENT__ = this), !Qd && d && __DEV__ && (Qd = !0, typeof window < "u" && window.document && window.top === window.self && !window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__)) {
      var w = window.navigator, G = w && w.userAgent, D = void 0;
      typeof G == "string" && (G.indexOf("Chrome/") > -1 ? D = "https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm" : G.indexOf("Firefox/") > -1 && (D = "https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/")), D && __DEV__ && M.log("Download the Apollo DevTools for a better development experience: " + D);
    }
    this.version = Jv, this.localState = new ym({
      cache: a,
      client: this,
      resolvers: T,
      fragmentMatcher: g
    }), this.queryManager = new vI({
      cache: this.cache,
      link: this.link,
      defaultOptions: this.defaultOptions,
      queryDeduplication: f,
      ssrMode: u,
      clientAwareness: {
        name: O,
        version: I
      },
      localState: this.localState,
      assumeImmutableResults: b,
      onBroadcast: d ? function() {
        n.devToolsHookCb && n.devToolsHookCb({
          action: {},
          state: {
            queries: n.queryManager.getQueryStore(),
            mutations: n.queryManager.mutationStore || {}
          },
          dataWithOptimisticResults: n.cache.extract(!0)
        });
      } : void 0
    });
  }
  return e.prototype.stop = function() {
    this.queryManager.stop();
  }, e.prototype.watchQuery = function(t) {
    return this.defaultOptions.watchQuery && (t = fu(this.defaultOptions.watchQuery, t)), this.disableNetworkFetches && (t.fetchPolicy === "network-only" || t.fetchPolicy === "cache-and-network") && (t = v(v({}, t), { fetchPolicy: "cache-first" })), this.queryManager.watchQuery(t);
  }, e.prototype.query = function(t) {
    return this.defaultOptions.query && (t = fu(this.defaultOptions.query, t)), __DEV__ ? M(t.fetchPolicy !== "cache-and-network", "The cache-and-network fetchPolicy does not work with client.query, because client.query can only return a single result. Please use client.watchQuery to receive multiple results from the cache and the network, or consider using a different fetchPolicy, such as cache-first or network-only.") : M(t.fetchPolicy !== "cache-and-network", 10), this.disableNetworkFetches && t.fetchPolicy === "network-only" && (t = v(v({}, t), { fetchPolicy: "cache-first" })), this.queryManager.query(t);
  }, e.prototype.mutate = function(t) {
    return this.defaultOptions.mutate && (t = fu(this.defaultOptions.mutate, t)), this.queryManager.mutate(t);
  }, e.prototype.subscribe = function(t) {
    return this.queryManager.startGraphQLSubscription(t);
  }, e.prototype.readQuery = function(t, n) {
    return n === void 0 && (n = !1), this.cache.readQuery(t, n);
  }, e.prototype.readFragment = function(t, n) {
    return n === void 0 && (n = !1), this.cache.readFragment(t, n);
  }, e.prototype.writeQuery = function(t) {
    var n = this.cache.writeQuery(t);
    return t.broadcast !== !1 && this.queryManager.broadcastQueries(), n;
  }, e.prototype.writeFragment = function(t) {
    var n = this.cache.writeFragment(t);
    return t.broadcast !== !1 && this.queryManager.broadcastQueries(), n;
  }, e.prototype.__actionHookForDevTools = function(t) {
    this.devToolsHookCb = t;
  }, e.prototype.__requestRaw = function(t) {
    return uc(this.link, t);
  }, e.prototype.resetStore = function() {
    var t = this;
    return Promise.resolve().then(function() {
      return t.queryManager.clearStore({
        discardWatches: !1
      });
    }).then(function() {
      return Promise.all(t.resetStoreCallbacks.map(function(n) {
        return n();
      }));
    }).then(function() {
      return t.reFetchObservableQueries();
    });
  }, e.prototype.clearStore = function() {
    var t = this;
    return Promise.resolve().then(function() {
      return t.queryManager.clearStore({
        discardWatches: !0
      });
    }).then(function() {
      return Promise.all(t.clearStoreCallbacks.map(function(n) {
        return n();
      }));
    });
  }, e.prototype.onResetStore = function(t) {
    var n = this;
    return this.resetStoreCallbacks.push(t), function() {
      n.resetStoreCallbacks = n.resetStoreCallbacks.filter(function(r) {
        return r !== t;
      });
    };
  }, e.prototype.onClearStore = function(t) {
    var n = this;
    return this.clearStoreCallbacks.push(t), function() {
      n.clearStoreCallbacks = n.clearStoreCallbacks.filter(function(r) {
        return r !== t;
      });
    };
  }, e.prototype.reFetchObservableQueries = function(t) {
    return this.queryManager.reFetchObservableQueries(t);
  }, e.prototype.refetchQueries = function(t) {
    var n = this.queryManager.refetchQueries(t), r = [], o = [];
    n.forEach(function(a, s) {
      r.push(s), o.push(a);
    });
    var i = Promise.all(o);
    return i.queries = r, i.results = o, i.catch(function(a) {
      __DEV__ && M.debug("In client.refetchQueries, Promise.all promise rejected with error ".concat(a));
    }), i;
  }, e.prototype.getObservableQueries = function(t) {
    return t === void 0 && (t = "active"), this.queryManager.getObservableQueries(t);
  }, e.prototype.extract = function(t) {
    return this.cache.extract(t);
  }, e.prototype.restore = function(t) {
    return this.cache.restore(t);
  }, e.prototype.addResolvers = function(t) {
    this.localState.addResolvers(t);
  }, e.prototype.setResolvers = function(t) {
    this.localState.setResolvers(t);
  }, e.prototype.getResolvers = function() {
    return this.localState.getResolvers();
  }, e.prototype.setLocalStateFragmentMatcher = function(t) {
    this.localState.setFragmentMatcher(t);
  }, e.prototype.setLink = function(t) {
    this.link = this.queryManager.link = t;
  }, e;
}();
function II(e) {
  return new oo(function(t, n) {
    var r = or(t, []);
    return new ye(function(o) {
      var i, a = !1;
      return Promise.resolve(r).then(function(s) {
        return e(s, t.getContext());
      }).then(t.setContext).then(function() {
        a || (i = n(t).subscribe({
          next: o.next.bind(o),
          error: o.error.bind(o),
          complete: o.complete.bind(o)
        }));
      }).catch(o.error.bind(o)), function() {
        a = !0, i && i.unsubscribe();
      };
    });
  });
}
const AI = `${Mp}/${xp._GRAPHQL}`, yI = new dl(), SI = em({
  uri: AI
}), GI = II((e, { headers: t }) => {
  const n = yI.get("AUTH_TOKEN", "");
  return {
    headers: {
      ...t,
      Authorization: `Bearer ${n}`,
      // Needed to upload files
      "apollo-require-preflight": !0
    }
  };
});
new NI({
  cache: new EI(),
  link: GI.concat(SI)
});
function Sm(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: DI } = Object.prototype, { getPrototypeOf: Pl } = Object, Rs = ((e) => (t) => {
  const n = DI.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Qt = (e) => (e = e.toLowerCase(), (t) => Rs(t) === e), vs = (e) => (t) => typeof t === e, { isArray: ao } = Array, Zo = vs("undefined");
function CI(e) {
  return e !== null && !Zo(e) && e.constructor !== null && !Zo(e.constructor) && Nt(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Gm = Qt("ArrayBuffer");
function wI(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Gm(e.buffer), t;
}
const UI = vs("string"), Nt = vs("function"), Dm = vs("number"), Ns = (e) => e !== null && typeof e == "object", PI = (e) => e === !0 || e === !1, _a = (e) => {
  if (Rs(e) !== "object")
    return !1;
  const t = Pl(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, HI = Qt("Date"), kI = Qt("File"), MI = Qt("Blob"), xI = Qt("FileList"), LI = (e) => Ns(e) && Nt(e.pipe), BI = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || Nt(e.append) && ((t = Rs(e)) === "formdata" || // detect form-data instance
  t === "object" && Nt(e.toString) && e.toString() === "[object FormData]"));
}, FI = Qt("URLSearchParams"), jI = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Si(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, o;
  if (typeof e != "object" && (e = [e]), ao(e))
    for (r = 0, o = e.length; r < o; r++)
      t.call(null, e[r], r, e);
  else {
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e), a = i.length;
    let s;
    for (r = 0; r < a; r++)
      s = i[r], t.call(null, e[s], s, e);
  }
}
function Cm(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, o;
  for (; r-- > 0; )
    if (o = n[r], t === o.toLowerCase())
      return o;
  return null;
}
const wm = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), Um = (e) => !Zo(e) && e !== wm;
function Oc() {
  const { caseless: e } = Um(this) && this || {}, t = {}, n = (r, o) => {
    const i = e && Cm(t, o) || o;
    _a(t[i]) && _a(r) ? t[i] = Oc(t[i], r) : _a(r) ? t[i] = Oc({}, r) : ao(r) ? t[i] = r.slice() : t[i] = r;
  };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && Si(arguments[r], n);
  return t;
}
const VI = (e, t, n, { allOwnKeys: r } = {}) => (Si(t, (o, i) => {
  n && Nt(o) ? e[i] = Sm(o, n) : e[i] = o;
}, { allOwnKeys: r }), e), WI = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), XI = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, YI = (e, t, n, r) => {
  let o, i, a;
  const s = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
      a = o[i], (!r || r(a, e, t)) && !s[a] && (t[a] = e[a], s[a] = !0);
    e = n !== !1 && Pl(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, KI = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, $I = (e) => {
  if (!e)
    return null;
  if (ao(e))
    return e;
  let t = e.length;
  if (!Dm(t))
    return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, zI = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Pl(Uint8Array)), qI = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const i = o.value;
    t.call(e, i[0], i[1]);
  }
}, JI = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, QI = Qt("HTMLFormElement"), ZI = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, o) {
    return r.toUpperCase() + o;
  }
), Zd = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), eA = Qt("RegExp"), Pm = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  Si(n, (o, i) => {
    t(o, i, e) !== !1 && (r[i] = o);
  }), Object.defineProperties(e, r);
}, tA = (e) => {
  Pm(e, (t, n) => {
    if (Nt(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (Nt(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, nA = (e, t) => {
  const n = {}, r = (o) => {
    o.forEach((i) => {
      n[i] = !0;
    });
  };
  return ao(e) ? r(e) : r(String(e).split(t)), n;
}, rA = () => {
}, oA = (e, t) => (e = +e, Number.isFinite(e) ? e : t), vu = "abcdefghijklmnopqrstuvwxyz", ef = "0123456789", Hm = {
  DIGIT: ef,
  ALPHA: vu,
  ALPHA_DIGIT: vu + vu.toUpperCase() + ef
}, iA = (e = 16, t = Hm.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t;
  for (; e--; )
    n += t[Math.random() * r | 0];
  return n;
};
function aA(e) {
  return !!(e && Nt(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const sA = (e) => {
  const t = new Array(10), n = (r, o) => {
    if (Ns(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[o] = r;
        const i = ao(r) ? [] : {};
        return Si(r, (a, s) => {
          const u = n(a, o + 1);
          !Zo(u) && (i[s] = u);
        }), t[o] = void 0, i;
      }
    }
    return r;
  };
  return n(e, 0);
}, uA = Qt("AsyncFunction"), cA = (e) => e && (Ns(e) || Nt(e)) && Nt(e.then) && Nt(e.catch), A = {
  isArray: ao,
  isArrayBuffer: Gm,
  isBuffer: CI,
  isFormData: BI,
  isArrayBufferView: wI,
  isString: UI,
  isNumber: Dm,
  isBoolean: PI,
  isObject: Ns,
  isPlainObject: _a,
  isUndefined: Zo,
  isDate: HI,
  isFile: kI,
  isBlob: MI,
  isRegExp: eA,
  isFunction: Nt,
  isStream: LI,
  isURLSearchParams: FI,
  isTypedArray: zI,
  isFileList: xI,
  forEach: Si,
  merge: Oc,
  extend: VI,
  trim: jI,
  stripBOM: WI,
  inherits: XI,
  toFlatObject: YI,
  kindOf: Rs,
  kindOfTest: Qt,
  endsWith: KI,
  toArray: $I,
  forEachEntry: qI,
  matchAll: JI,
  isHTMLForm: QI,
  hasOwnProperty: Zd,
  hasOwnProp: Zd,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Pm,
  freezeMethods: tA,
  toObjectSet: nA,
  toCamelCase: ZI,
  noop: rA,
  toFiniteNumber: oA,
  findKey: Cm,
  global: wm,
  isContextDefined: Um,
  ALPHABET: Hm,
  generateString: iA,
  isSpecCompliantForm: aA,
  toJSONObject: sA,
  isAsyncFn: uA,
  isThenable: cA
};
function _e(e, t, n, r, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), o && (this.response = o);
}
A.inherits(_e, Error, {
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
      config: A.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const km = _e.prototype, Mm = {};
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
  Mm[e] = { value: e };
});
Object.defineProperties(_e, Mm);
Object.defineProperty(km, "isAxiosError", { value: !0 });
_e.from = (e, t, n, r, o, i) => {
  const a = Object.create(km);
  return A.toFlatObject(e, a, function(u) {
    return u !== Error.prototype;
  }, (s) => s !== "isAxiosError"), _e.call(a, e.message, t, n, r, o), a.cause = e, a.name = e.name, i && Object.assign(a, i), a;
};
const lA = null;
function gc(e) {
  return A.isPlainObject(e) || A.isArray(e);
}
function xm(e) {
  return A.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function tf(e, t, n) {
  return e ? e.concat(t).map(function(o, i) {
    return o = xm(o), !n && i ? "[" + o + "]" : o;
  }).join(n ? "." : "") : t;
}
function _A(e) {
  return A.isArray(e) && !e.some(gc);
}
const dA = A.toFlatObject(A, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Is(e, t, n) {
  if (!A.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = A.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(p, m) {
    return !A.isUndefined(m[p]);
  });
  const r = n.metaTokens, o = n.visitor || _, i = n.dots, a = n.indexes, u = (n.Blob || typeof Blob < "u" && Blob) && A.isSpecCompliantForm(t);
  if (!A.isFunction(o))
    throw new TypeError("visitor must be a function");
  function c(f) {
    if (f === null)
      return "";
    if (A.isDate(f))
      return f.toISOString();
    if (!u && A.isBlob(f))
      throw new _e("Blob is not supported. Use a Buffer instead.");
    return A.isArrayBuffer(f) || A.isTypedArray(f) ? u && typeof Blob == "function" ? new Blob([f]) : Buffer.from(f) : f;
  }
  function _(f, p, m) {
    let b = f;
    if (f && !m && typeof f == "object") {
      if (A.endsWith(p, "{}"))
        p = r ? p : p.slice(0, -2), f = JSON.stringify(f);
      else if (A.isArray(f) && _A(f) || (A.isFileList(f) || A.endsWith(p, "[]")) && (b = A.toArray(f)))
        return p = xm(p), b.forEach(function(E, g) {
          !(A.isUndefined(E) || E === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? tf([p], g, i) : a === null ? p : p + "[]",
            c(E)
          );
        }), !1;
    }
    return gc(f) ? !0 : (t.append(tf(m, p, i), c(f)), !1);
  }
  const l = [], d = Object.assign(dA, {
    defaultVisitor: _,
    convertValue: c,
    isVisitable: gc
  });
  function h(f, p) {
    if (!A.isUndefined(f)) {
      if (l.indexOf(f) !== -1)
        throw Error("Circular reference detected in " + p.join("."));
      l.push(f), A.forEach(f, function(b, T) {
        (!(A.isUndefined(b) || b === null) && o.call(
          t,
          b,
          A.isString(T) ? T.trim() : T,
          p,
          d
        )) === !0 && h(b, p ? p.concat(T) : [T]);
      }), l.pop();
    }
  }
  if (!A.isObject(e))
    throw new TypeError("data must be an object");
  return h(e), t;
}
function nf(e) {
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
function Hl(e, t) {
  this._pairs = [], e && Is(e, this, t);
}
const Lm = Hl.prototype;
Lm.append = function(t, n) {
  this._pairs.push([t, n]);
};
Lm.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, nf);
  } : nf;
  return this._pairs.map(function(o) {
    return n(o[0]) + "=" + n(o[1]);
  }, "").join("&");
};
function fA(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Bm(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || fA, o = n && n.serialize;
  let i;
  if (o ? i = o(t, n) : i = A.isURLSearchParams(t) ? t.toString() : new Hl(t, n).toString(r), i) {
    const a = e.indexOf("#");
    a !== -1 && (e = e.slice(0, a)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class hA {
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
    A.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const rf = hA, Fm = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, pA = typeof URLSearchParams < "u" ? URLSearchParams : Hl, mA = typeof FormData < "u" ? FormData : null, TA = typeof Blob < "u" ? Blob : null, EA = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), bA = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), Xt = {
  isBrowser: !0,
  classes: {
    URLSearchParams: pA,
    FormData: mA,
    Blob: TA
  },
  isStandardBrowserEnv: EA,
  isStandardBrowserWebWorkerEnv: bA,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function OA(e, t) {
  return Is(e, new Xt.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, o, i) {
      return Xt.isNode && A.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function gA(e) {
  return A.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function RA(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const o = n.length;
  let i;
  for (r = 0; r < o; r++)
    i = n[r], t[i] = e[i];
  return t;
}
function jm(e) {
  function t(n, r, o, i) {
    let a = n[i++];
    const s = Number.isFinite(+a), u = i >= n.length;
    return a = !a && A.isArray(o) ? o.length : a, u ? (A.hasOwnProp(o, a) ? o[a] = [o[a], r] : o[a] = r, !s) : ((!o[a] || !A.isObject(o[a])) && (o[a] = []), t(n, r, o[a], i) && A.isArray(o[a]) && (o[a] = RA(o[a])), !s);
  }
  if (A.isFormData(e) && A.isFunction(e.entries)) {
    const n = {};
    return A.forEachEntry(e, (r, o) => {
      t(gA(r), o, n, 0);
    }), n;
  }
  return null;
}
const vA = {
  "Content-Type": void 0
};
function NA(e, t, n) {
  if (A.isString(e))
    try {
      return (t || JSON.parse)(e), A.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const As = {
  transitional: Fm,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", o = r.indexOf("application/json") > -1, i = A.isObject(t);
    if (i && A.isHTMLForm(t) && (t = new FormData(t)), A.isFormData(t))
      return o && o ? JSON.stringify(jm(t)) : t;
    if (A.isArrayBuffer(t) || A.isBuffer(t) || A.isStream(t) || A.isFile(t) || A.isBlob(t))
      return t;
    if (A.isArrayBufferView(t))
      return t.buffer;
    if (A.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let s;
    if (i) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return OA(t, this.formSerializer).toString();
      if ((s = A.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const u = this.env && this.env.FormData;
        return Is(
          s ? { "files[]": t } : t,
          u && new u(),
          this.formSerializer
        );
      }
    }
    return i || o ? (n.setContentType("application/json", !1), NA(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || As.transitional, r = n && n.forcedJSONParsing, o = this.responseType === "json";
    if (t && A.isString(t) && (r && !this.responseType || o)) {
      const a = !(n && n.silentJSONParsing) && o;
      try {
        return JSON.parse(t);
      } catch (s) {
        if (a)
          throw s.name === "SyntaxError" ? _e.from(s, _e.ERR_BAD_RESPONSE, this, null, this.response) : s;
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
    FormData: Xt.classes.FormData,
    Blob: Xt.classes.Blob
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
A.forEach(["delete", "get", "head"], function(t) {
  As.headers[t] = {};
});
A.forEach(["post", "put", "patch"], function(t) {
  As.headers[t] = A.merge(vA);
});
const kl = As, IA = A.toObjectSet([
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
]), AA = (e) => {
  const t = {};
  let n, r, o;
  return e && e.split(`
`).forEach(function(a) {
    o = a.indexOf(":"), n = a.substring(0, o).trim().toLowerCase(), r = a.substring(o + 1).trim(), !(!n || t[n] && IA[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, of = Symbol("internals");
function Oo(e) {
  return e && String(e).trim().toLowerCase();
}
function da(e) {
  return e === !1 || e == null ? e : A.isArray(e) ? e.map(da) : String(e);
}
function yA(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const SA = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Nu(e, t, n, r, o) {
  if (A.isFunction(r))
    return r.call(this, t, n);
  if (o && (t = n), !!A.isString(t)) {
    if (A.isString(r))
      return t.indexOf(r) !== -1;
    if (A.isRegExp(r))
      return r.test(t);
  }
}
function GA(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function DA(e, t) {
  const n = A.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(o, i, a) {
        return this[r].call(this, t, o, i, a);
      },
      configurable: !0
    });
  });
}
class ys {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const o = this;
    function i(s, u, c) {
      const _ = Oo(u);
      if (!_)
        throw new Error("header name must be a non-empty string");
      const l = A.findKey(o, _);
      (!l || o[l] === void 0 || c === !0 || c === void 0 && o[l] !== !1) && (o[l || u] = da(s));
    }
    const a = (s, u) => A.forEach(s, (c, _) => i(c, _, u));
    return A.isPlainObject(t) || t instanceof this.constructor ? a(t, n) : A.isString(t) && (t = t.trim()) && !SA(t) ? a(AA(t), n) : t != null && i(n, t, r), this;
  }
  get(t, n) {
    if (t = Oo(t), t) {
      const r = A.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n)
          return o;
        if (n === !0)
          return yA(o);
        if (A.isFunction(n))
          return n.call(this, o, r);
        if (A.isRegExp(n))
          return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = Oo(t), t) {
      const r = A.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Nu(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function i(a) {
      if (a = Oo(a), a) {
        const s = A.findKey(r, a);
        s && (!n || Nu(r, r[s], s, n)) && (delete r[s], o = !0);
      }
    }
    return A.isArray(t) ? t.forEach(i) : i(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, o = !1;
    for (; r--; ) {
      const i = n[r];
      (!t || Nu(this, this[i], i, t, !0)) && (delete this[i], o = !0);
    }
    return o;
  }
  normalize(t) {
    const n = this, r = {};
    return A.forEach(this, (o, i) => {
      const a = A.findKey(r, i);
      if (a) {
        n[a] = da(o), delete n[i];
        return;
      }
      const s = t ? GA(i) : String(i).trim();
      s !== i && delete n[i], n[s] = da(o), r[s] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return A.forEach(this, (r, o) => {
      r != null && r !== !1 && (n[o] = t && A.isArray(r) ? r.join(", ") : r);
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
    const r = (this[of] = this[of] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function i(a) {
      const s = Oo(a);
      r[s] || (DA(o, a), r[s] = !0);
    }
    return A.isArray(t) ? t.forEach(i) : i(t), this;
  }
}
ys.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
A.freezeMethods(ys.prototype);
A.freezeMethods(ys);
const ln = ys;
function Iu(e, t) {
  const n = this || kl, r = t || n, o = ln.from(r.headers);
  let i = r.data;
  return A.forEach(e, function(s) {
    i = s.call(n, i, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), i;
}
function Vm(e) {
  return !!(e && e.__CANCEL__);
}
function Gi(e, t, n) {
  _e.call(this, e ?? "canceled", _e.ERR_CANCELED, t, n), this.name = "CanceledError";
}
A.inherits(Gi, _e, {
  __CANCEL__: !0
});
function CA(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new _e(
    "Request failed with status code " + n.status,
    [_e.ERR_BAD_REQUEST, _e.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
const wA = Xt.isStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  function() {
    return {
      write: function(n, r, o, i, a, s) {
        const u = [];
        u.push(n + "=" + encodeURIComponent(r)), A.isNumber(o) && u.push("expires=" + new Date(o).toGMTString()), A.isString(i) && u.push("path=" + i), A.isString(a) && u.push("domain=" + a), s === !0 && u.push("secure"), document.cookie = u.join("; ");
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
function UA(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function PA(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Wm(e, t) {
  return e && !UA(t) ? PA(e, t) : t;
}
const HA = Xt.isStandardBrowserEnv ? (
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
      const s = A.isString(a) ? o(a) : a;
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
function kA(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function MA(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let o = 0, i = 0, a;
  return t = t !== void 0 ? t : 1e3, function(u) {
    const c = Date.now(), _ = r[i];
    a || (a = c), n[o] = u, r[o] = c;
    let l = i, d = 0;
    for (; l !== o; )
      d += n[l++], l = l % e;
    if (o = (o + 1) % e, o === i && (i = (i + 1) % e), c - a < t)
      return;
    const h = _ && c - _;
    return h ? Math.round(d * 1e3 / h) : void 0;
  };
}
function af(e, t) {
  let n = 0;
  const r = MA(50, 250);
  return (o) => {
    const i = o.loaded, a = o.lengthComputable ? o.total : void 0, s = i - n, u = r(s), c = i <= a;
    n = i;
    const _ = {
      loaded: i,
      total: a,
      progress: a ? i / a : void 0,
      bytes: s,
      rate: u || void 0,
      estimated: u && a && c ? (a - i) / u : void 0,
      event: o
    };
    _[t ? "download" : "upload"] = !0, e(_);
  };
}
const xA = typeof XMLHttpRequest < "u", LA = xA && function(e) {
  return new Promise(function(n, r) {
    let o = e.data;
    const i = ln.from(e.headers).normalize(), a = e.responseType;
    let s;
    function u() {
      e.cancelToken && e.cancelToken.unsubscribe(s), e.signal && e.signal.removeEventListener("abort", s);
    }
    A.isFormData(o) && (Xt.isStandardBrowserEnv || Xt.isStandardBrowserWebWorkerEnv ? i.setContentType(!1) : i.setContentType("multipart/form-data;", !1));
    let c = new XMLHttpRequest();
    if (e.auth) {
      const h = e.auth.username || "", f = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      i.set("Authorization", "Basic " + btoa(h + ":" + f));
    }
    const _ = Wm(e.baseURL, e.url);
    c.open(e.method.toUpperCase(), Bm(_, e.params, e.paramsSerializer), !0), c.timeout = e.timeout;
    function l() {
      if (!c)
        return;
      const h = ln.from(
        "getAllResponseHeaders" in c && c.getAllResponseHeaders()
      ), p = {
        data: !a || a === "text" || a === "json" ? c.responseText : c.response,
        status: c.status,
        statusText: c.statusText,
        headers: h,
        config: e,
        request: c
      };
      CA(function(b) {
        n(b), u();
      }, function(b) {
        r(b), u();
      }, p), c = null;
    }
    if ("onloadend" in c ? c.onloadend = l : c.onreadystatechange = function() {
      !c || c.readyState !== 4 || c.status === 0 && !(c.responseURL && c.responseURL.indexOf("file:") === 0) || setTimeout(l);
    }, c.onabort = function() {
      c && (r(new _e("Request aborted", _e.ECONNABORTED, e, c)), c = null);
    }, c.onerror = function() {
      r(new _e("Network Error", _e.ERR_NETWORK, e, c)), c = null;
    }, c.ontimeout = function() {
      let f = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const p = e.transitional || Fm;
      e.timeoutErrorMessage && (f = e.timeoutErrorMessage), r(new _e(
        f,
        p.clarifyTimeoutError ? _e.ETIMEDOUT : _e.ECONNABORTED,
        e,
        c
      )), c = null;
    }, Xt.isStandardBrowserEnv) {
      const h = (e.withCredentials || HA(_)) && e.xsrfCookieName && wA.read(e.xsrfCookieName);
      h && i.set(e.xsrfHeaderName, h);
    }
    o === void 0 && i.setContentType(null), "setRequestHeader" in c && A.forEach(i.toJSON(), function(f, p) {
      c.setRequestHeader(p, f);
    }), A.isUndefined(e.withCredentials) || (c.withCredentials = !!e.withCredentials), a && a !== "json" && (c.responseType = e.responseType), typeof e.onDownloadProgress == "function" && c.addEventListener("progress", af(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && c.upload && c.upload.addEventListener("progress", af(e.onUploadProgress)), (e.cancelToken || e.signal) && (s = (h) => {
      c && (r(!h || h.type ? new Gi(null, e, c) : h), c.abort(), c = null);
    }, e.cancelToken && e.cancelToken.subscribe(s), e.signal && (e.signal.aborted ? s() : e.signal.addEventListener("abort", s)));
    const d = kA(_);
    if (d && Xt.protocols.indexOf(d) === -1) {
      r(new _e("Unsupported protocol " + d + ":", _e.ERR_BAD_REQUEST, e));
      return;
    }
    c.send(o || null);
  });
}, fa = {
  http: lA,
  xhr: LA
};
A.forEach(fa, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const BA = {
  getAdapter: (e) => {
    e = A.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    for (let o = 0; o < t && (n = e[o], !(r = A.isString(n) ? fa[n.toLowerCase()] : n)); o++)
      ;
    if (!r)
      throw r === !1 ? new _e(
        `Adapter ${n} is not supported by the environment`,
        "ERR_NOT_SUPPORT"
      ) : new Error(
        A.hasOwnProp(fa, n) ? `Adapter '${n}' is not available in the build` : `Unknown adapter '${n}'`
      );
    if (!A.isFunction(r))
      throw new TypeError("adapter is not a function");
    return r;
  },
  adapters: fa
};
function Au(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Gi(null, e);
}
function sf(e) {
  return Au(e), e.headers = ln.from(e.headers), e.data = Iu.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), BA.getAdapter(e.adapter || kl.adapter)(e).then(function(r) {
    return Au(e), r.data = Iu.call(
      e,
      e.transformResponse,
      r
    ), r.headers = ln.from(r.headers), r;
  }, function(r) {
    return Vm(r) || (Au(e), r && r.response && (r.response.data = Iu.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = ln.from(r.response.headers))), Promise.reject(r);
  });
}
const uf = (e) => e instanceof ln ? e.toJSON() : e;
function qr(e, t) {
  t = t || {};
  const n = {};
  function r(c, _, l) {
    return A.isPlainObject(c) && A.isPlainObject(_) ? A.merge.call({ caseless: l }, c, _) : A.isPlainObject(_) ? A.merge({}, _) : A.isArray(_) ? _.slice() : _;
  }
  function o(c, _, l) {
    if (A.isUndefined(_)) {
      if (!A.isUndefined(c))
        return r(void 0, c, l);
    } else
      return r(c, _, l);
  }
  function i(c, _) {
    if (!A.isUndefined(_))
      return r(void 0, _);
  }
  function a(c, _) {
    if (A.isUndefined(_)) {
      if (!A.isUndefined(c))
        return r(void 0, c);
    } else
      return r(void 0, _);
  }
  function s(c, _, l) {
    if (l in t)
      return r(c, _);
    if (l in e)
      return r(void 0, c);
  }
  const u = {
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
    headers: (c, _) => o(uf(c), uf(_), !0)
  };
  return A.forEach(Object.keys(Object.assign({}, e, t)), function(_) {
    const l = u[_] || o, d = l(e[_], t[_], _);
    A.isUndefined(d) && l !== s || (n[_] = d);
  }), n;
}
const Xm = "1.4.0", Ml = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Ml[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const cf = {};
Ml.transitional = function(t, n, r) {
  function o(i, a) {
    return "[Axios v" + Xm + "] Transitional option '" + i + "'" + a + (r ? ". " + r : "");
  }
  return (i, a, s) => {
    if (t === !1)
      throw new _e(
        o(a, " has been removed" + (n ? " in " + n : "")),
        _e.ERR_DEPRECATED
      );
    return n && !cf[a] && (cf[a] = !0, console.warn(
      o(
        a,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(i, a, s) : !0;
  };
};
function FA(e, t, n) {
  if (typeof e != "object")
    throw new _e("options must be an object", _e.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const i = r[o], a = t[i];
    if (a) {
      const s = e[i], u = s === void 0 || a(s, i, e);
      if (u !== !0)
        throw new _e("option " + i + " must be " + u, _e.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new _e("Unknown option " + i, _e.ERR_BAD_OPTION);
  }
}
const Rc = {
  assertOptions: FA,
  validators: Ml
}, gn = Rc.validators;
class Va {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new rf(),
      response: new rf()
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
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = qr(this.defaults, n);
    const { transitional: r, paramsSerializer: o, headers: i } = n;
    r !== void 0 && Rc.assertOptions(r, {
      silentJSONParsing: gn.transitional(gn.boolean),
      forcedJSONParsing: gn.transitional(gn.boolean),
      clarifyTimeoutError: gn.transitional(gn.boolean)
    }, !1), o != null && (A.isFunction(o) ? n.paramsSerializer = {
      serialize: o
    } : Rc.assertOptions(o, {
      encode: gn.function,
      serialize: gn.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let a;
    a = i && A.merge(
      i.common,
      i[n.method]
    ), a && A.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (f) => {
        delete i[f];
      }
    ), n.headers = ln.concat(a, i);
    const s = [];
    let u = !0;
    this.interceptors.request.forEach(function(p) {
      typeof p.runWhen == "function" && p.runWhen(n) === !1 || (u = u && p.synchronous, s.unshift(p.fulfilled, p.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function(p) {
      c.push(p.fulfilled, p.rejected);
    });
    let _, l = 0, d;
    if (!u) {
      const f = [sf.bind(this), void 0];
      for (f.unshift.apply(f, s), f.push.apply(f, c), d = f.length, _ = Promise.resolve(n); l < d; )
        _ = _.then(f[l++], f[l++]);
      return _;
    }
    d = s.length;
    let h = n;
    for (l = 0; l < d; ) {
      const f = s[l++], p = s[l++];
      try {
        h = f(h);
      } catch (m) {
        p.call(this, m);
        break;
      }
    }
    try {
      _ = sf.call(this, h);
    } catch (f) {
      return Promise.reject(f);
    }
    for (l = 0, d = c.length; l < d; )
      _ = _.then(c[l++], c[l++]);
    return _;
  }
  getUri(t) {
    t = qr(this.defaults, t);
    const n = Wm(t.baseURL, t.url);
    return Bm(n, t.params, t.paramsSerializer);
  }
}
A.forEach(["delete", "get", "head", "options"], function(t) {
  Va.prototype[t] = function(n, r) {
    return this.request(qr(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
A.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(i, a, s) {
      return this.request(qr(s || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: a
      }));
    };
  }
  Va.prototype[t] = n(), Va.prototype[t + "Form"] = n(!0);
});
const ha = Va;
class xl {
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
      r.reason || (r.reason = new Gi(i, a, s), n(r.reason));
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
      token: new xl(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
}
const jA = xl;
function VA(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function WA(e) {
  return A.isObject(e) && e.isAxiosError === !0;
}
const vc = {
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
Object.entries(vc).forEach(([e, t]) => {
  vc[t] = e;
});
const XA = vc;
function Ym(e) {
  const t = new ha(e), n = Sm(ha.prototype.request, t);
  return A.extend(n, ha.prototype, t, { allOwnKeys: !0 }), A.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(o) {
    return Ym(qr(e, o));
  }, n;
}
const je = Ym(kl);
je.Axios = ha;
je.CanceledError = Gi;
je.CancelToken = jA;
je.isCancel = Vm;
je.VERSION = Xm;
je.toFormData = Is;
je.AxiosError = _e;
je.Cancel = je.CanceledError;
je.all = function(t) {
  return Promise.all(t);
};
je.spread = VA;
je.isAxiosError = WA;
je.mergeConfig = qr;
je.AxiosHeaders = ln;
je.formToJSON = (e) => jm(A.isHTMLForm(e) ? new FormData(e) : e);
je.HttpStatusCode = XA;
je.default = je;
const YA = je, KA = YA.create({
  baseURL: Mp,
  withCredentials: !0
}), $A = {
  MAIN: "/",
  EDITOR: "/edit",
  ABOUT: "/about",
  PROFILE: "/users"
}, Km = () => {
  const [e, t] = ft([]);
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
}, zA = (e = !1) => {
  const [t, n] = ft(e);
  return {
    off: () => n(!1),
    on: () => n(!0),
    toggle: () => n(!t),
    val: t
  };
}, qA = (e, t) => {
  const n = se();
  return (...r) => {
    n.current && clearTimeout(n.current), n.current = setTimeout(() => {
      e(...r);
    }, t);
  };
}, Nc = ({ when: e, children: t }) => e ? t : null, $m = ss({}), JA = async () => Promise.all([
  Promise.resolve().then(() => rU),
  import("./use-gesture-react.esm-7899cdd1.mjs")
]), Ll = ({ children: e }) => {
  const t = se(), n = se(), r = zA(), o = async () => {
    const [a, s] = await JA();
    t.current = a, n.current = s, r.on();
  };
  xe(() => {
    o();
  }, []);
  const i = Sn(
    () => ({
      Spring: t.current,
      Gesture: n.current,
      isLoaded: r.val
    }),
    [r.val]
  );
  return /* @__PURE__ */ K($m.Provider, { value: i, children: /* @__PURE__ */ K(Nc, { when: r.val, children: e }) });
}, Ss = () => it($m);
var Bl, Y, zm, Jn, lf, qm, Ic, pa = {}, Jm = [], QA = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Gs = Array.isArray;
function Dn(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Qm(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function _f(e, t, n) {
  var r, o, i, a = {};
  for (i in t)
    i == "key" ? r = t[i] : i == "ref" ? o = t[i] : a[i] = t[i];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Bl.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (i in e.defaultProps)
      a[i] === void 0 && (a[i] = e.defaultProps[i]);
  return ma(e, a, r, o, null);
}
function ma(e, t, n, r, o) {
  var i = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: o ?? ++zm };
  return o == null && Y.vnode != null && Y.vnode(i), i;
}
function ei(e) {
  return e.children;
}
function _n(e, t) {
  this.props = e, this.context = t;
}
function Wa(e, t) {
  if (t == null)
    return e.__ ? Wa(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? Wa(e) : null;
}
function Zm(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Zm(e);
  }
}
function df(e) {
  (!e.__d && (e.__d = !0) && Jn.push(e) && !Xa.__r++ || lf !== Y.debounceRendering) && ((lf = Y.debounceRendering) || qm)(Xa);
}
function Xa() {
  var e, t, n, r, o, i, a, s, u;
  for (Jn.sort(Ic); e = Jn.shift(); )
    e.__d && (t = Jn.length, r = void 0, o = void 0, i = void 0, s = (a = (n = e).__v).__e, (u = n.__P) && (r = [], o = [], (i = Dn({}, a)).__v = a.__v + 1, rT(u, a, i, n.__n, u.ownerSVGElement !== void 0, a.__h != null ? [s] : null, r, s ?? Wa(a), a.__h, o), ty(r, a, o), a.__e != s && Zm(a)), Jn.length > t && Jn.sort(Ic));
  Xa.__r = 0;
}
function eT(e, t, n, r, o, i, a, s, u, c, _) {
  var l, d, h, f, p, m, b, T, E, g, O = 0, I = r && r.__k || Jm, N = I.length, w = N, G = t.length;
  for (n.__k = [], l = 0; l < G; l++)
    (f = n.__k[l] = (f = t[l]) == null || typeof f == "boolean" || typeof f == "function" ? null : typeof f == "string" || typeof f == "number" || typeof f == "bigint" ? ma(null, f, null, null, f) : Gs(f) ? ma(ei, { children: f }, null, null, null) : f.__b > 0 ? ma(f.type, f.props, f.key, f.ref ? f.ref : null, f.__v) : f) != null && (f.__ = n, f.__b = n.__b + 1, (T = ZA(f, I, b = l + O, w)) === -1 ? h = pa : (h = I[T] || pa, I[T] = void 0, w--), rT(e, f, h, o, i, a, s, u, c, _), p = f.__e, (d = f.ref) && h.ref != d && (h.ref && Fl(h.ref, null, f), _.push(d, f.__c || p, f)), p != null && (m == null && (m = p), g = !(E = h === pa || h.__v === null) && T === b, E ? T == -1 && O-- : T !== b && (T === b + 1 ? (O++, g = !0) : T > b ? w > G - b ? (O += T - b, g = !0) : O-- : O = T < b && T == b - 1 ? T - b : 0), b = l + O, g = g || T == l && !E, typeof f.type != "function" || T === b && h.__k !== f.__k ? typeof f.type == "function" || g ? f.__d !== void 0 ? (u = f.__d, f.__d = void 0) : u = p.nextSibling : u = nT(e, p, u) : u = tT(f, u, e), typeof n.type == "function" && (n.__d = u)));
  for (n.__e = m, l = N; l--; )
    I[l] != null && (typeof n.type == "function" && I[l].__e != null && I[l].__e == n.__d && (n.__d = I[l].__e.nextSibling), oT(I[l], I[l]));
}
function tT(e, t, n) {
  for (var r, o = e.__k, i = 0; o && i < o.length; i++)
    (r = o[i]) && (r.__ = e, t = typeof r.type == "function" ? tT(r, t, n) : nT(n, r.__e, t));
  return t;
}
function Ya(e, t) {
  return t = t || [], e == null || typeof e == "boolean" || (Gs(e) ? e.some(function(n) {
    Ya(n, t);
  }) : t.push(e)), t;
}
function nT(e, t, n) {
  return n == null || n.parentNode !== e ? e.insertBefore(t, null) : t == n && t.parentNode != null || e.insertBefore(t, n), t.nextSibling;
}
function ZA(e, t, n, r) {
  var o = e.key, i = e.type, a = n - 1, s = n + 1, u = t[n];
  if (u === null || u && o == u.key && i === u.type)
    return n;
  if (r > (u != null ? 1 : 0))
    for (; a >= 0 || s < t.length; ) {
      if (a >= 0) {
        if ((u = t[a]) && o == u.key && i === u.type)
          return a;
        a--;
      }
      if (s < t.length) {
        if ((u = t[s]) && o == u.key && i === u.type)
          return s;
        s++;
      }
    }
  return -1;
}
function ey(e, t, n, r, o) {
  var i;
  for (i in n)
    i === "children" || i === "key" || i in t || Ka(e, i, null, n[i], r);
  for (i in t)
    o && typeof t[i] != "function" || i === "children" || i === "key" || i === "value" || i === "checked" || n[i] === t[i] || Ka(e, i, t[i], n[i], r);
}
function ff(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || QA.test(t) ? n : n + "px";
}
function Ka(e, t, n, r, o) {
  var i;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof r == "string" && (e.style.cssText = r = ""), r)
          for (t in r)
            n && t in n || ff(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || ff(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      i = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + i] = n, n ? r || e.addEventListener(t, i ? pf : hf, i) : e.removeEventListener(t, i ? pf : hf, i);
    else if (t !== "dangerouslySetInnerHTML") {
      if (o)
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
function hf(e) {
  return this.l[e.type + !1](Y.event ? Y.event(e) : e);
}
function pf(e) {
  return this.l[e.type + !0](Y.event ? Y.event(e) : e);
}
function rT(e, t, n, r, o, i, a, s, u, c) {
  var _, l, d, h, f, p, m, b, T, E, g, O, I, N, w, G = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (u = n.__h, s = t.__e = n.__e, t.__h = null, i = [s]), (_ = Y.__b) && _(t);
  try {
    e:
      if (typeof G == "function") {
        if (b = t.props, T = (_ = G.contextType) && r[_.__c], E = _ ? T ? T.props.value : _.__ : r, n.__c ? m = (l = t.__c = n.__c).__ = l.__E : ("prototype" in G && G.prototype.render ? t.__c = l = new G(b, E) : (t.__c = l = new _n(b, E), l.constructor = G, l.render = ry), T && T.sub(l), l.props = b, l.state || (l.state = {}), l.context = E, l.__n = r, d = l.__d = !0, l.__h = [], l._sb = []), l.__s == null && (l.__s = l.state), G.getDerivedStateFromProps != null && (l.__s == l.state && (l.__s = Dn({}, l.__s)), Dn(l.__s, G.getDerivedStateFromProps(b, l.__s))), h = l.props, f = l.state, l.__v = t, d)
          G.getDerivedStateFromProps == null && l.componentWillMount != null && l.componentWillMount(), l.componentDidMount != null && l.__h.push(l.componentDidMount);
        else {
          if (G.getDerivedStateFromProps == null && b !== h && l.componentWillReceiveProps != null && l.componentWillReceiveProps(b, E), !l.__e && (l.shouldComponentUpdate != null && l.shouldComponentUpdate(b, l.__s, E) === !1 || t.__v === n.__v)) {
            for (t.__v !== n.__v && (l.props = b, l.state = l.__s, l.__d = !1), t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(D) {
              D && (D.__ = t);
            }), g = 0; g < l._sb.length; g++)
              l.__h.push(l._sb[g]);
            l._sb = [], l.__h.length && a.push(l);
            break e;
          }
          l.componentWillUpdate != null && l.componentWillUpdate(b, l.__s, E), l.componentDidUpdate != null && l.__h.push(function() {
            l.componentDidUpdate(h, f, p);
          });
        }
        if (l.context = E, l.props = b, l.__P = e, l.__e = !1, O = Y.__r, I = 0, "prototype" in G && G.prototype.render) {
          for (l.state = l.__s, l.__d = !1, O && O(t), _ = l.render(l.props, l.state, l.context), N = 0; N < l._sb.length; N++)
            l.__h.push(l._sb[N]);
          l._sb = [];
        } else
          do
            l.__d = !1, O && O(t), _ = l.render(l.props, l.state, l.context), l.state = l.__s;
          while (l.__d && ++I < 25);
        l.state = l.__s, l.getChildContext != null && (r = Dn(Dn({}, r), l.getChildContext())), d || l.getSnapshotBeforeUpdate == null || (p = l.getSnapshotBeforeUpdate(h, f)), eT(e, Gs(w = _ != null && _.type === ei && _.key == null ? _.props.children : _) ? w : [w], t, n, r, o, i, a, s, u, c), l.base = t.__e, t.__h = null, l.__h.length && a.push(l), m && (l.__E = l.__ = null);
      } else
        i == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = ny(n.__e, t, n, r, o, i, a, u, c);
    (_ = Y.diffed) && _(t);
  } catch (D) {
    t.__v = null, (u || i != null) && (t.__e = s, t.__h = !!u, i[i.indexOf(s)] = null), Y.__e(D, t, n);
  }
}
function ty(e, t, n) {
  for (var r = 0; r < n.length; r++)
    Fl(n[r], n[++r], n[++r]);
  Y.__c && Y.__c(t, e), e.some(function(o) {
    try {
      e = o.__h, o.__h = [], e.some(function(i) {
        i.call(o);
      });
    } catch (i) {
      Y.__e(i, o.__v);
    }
  });
}
function ny(e, t, n, r, o, i, a, s, u) {
  var c, _, l, d = n.props, h = t.props, f = t.type, p = 0;
  if (f === "svg" && (o = !0), i != null) {
    for (; p < i.length; p++)
      if ((c = i[p]) && "setAttribute" in c == !!f && (f ? c.localName === f : c.nodeType === 3)) {
        e = c, i[p] = null;
        break;
      }
  }
  if (e == null) {
    if (f === null)
      return document.createTextNode(h);
    e = o ? document.createElementNS("http://www.w3.org/2000/svg", f) : document.createElement(f, h.is && h), i = null, s = !1;
  }
  if (f === null)
    d === h || s && e.data === h || (e.data = h);
  else {
    if (i = i && Bl.call(e.childNodes), _ = (d = n.props || pa).dangerouslySetInnerHTML, l = h.dangerouslySetInnerHTML, !s) {
      if (i != null)
        for (d = {}, p = 0; p < e.attributes.length; p++)
          d[e.attributes[p].name] = e.attributes[p].value;
      (l || _) && (l && (_ && l.__html == _.__html || l.__html === e.innerHTML) || (e.innerHTML = l && l.__html || ""));
    }
    if (ey(e, h, d, o, s), l)
      t.__k = [];
    else if (eT(e, Gs(p = t.props.children) ? p : [p], t, n, r, o && f !== "foreignObject", i, a, i ? i[0] : n.__k && Wa(n, 0), s, u), i != null)
      for (p = i.length; p--; )
        i[p] != null && Qm(i[p]);
    s || ("value" in h && (p = h.value) !== void 0 && (p !== e.value || f === "progress" && !p || f === "option" && p !== d.value) && Ka(e, "value", p, d.value, !1), "checked" in h && (p = h.checked) !== void 0 && p !== e.checked && Ka(e, "checked", p, d.checked, !1));
  }
  return e;
}
function Fl(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    Y.__e(r, n);
  }
}
function oT(e, t, n) {
  var r, o;
  if (Y.unmount && Y.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || Fl(r, null, t)), (r = e.__c) != null) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (i) {
        Y.__e(i, t);
      }
    r.base = r.__P = null, e.__c = void 0;
  }
  if (r = e.__k)
    for (o = 0; o < r.length; o++)
      r[o] && oT(r[o], t, n || typeof e.type != "function");
  n || e.__e == null || Qm(e.__e), e.__ = e.__e = e.__d = void 0;
}
function ry(e, t, n) {
  return this.constructor(e, n);
}
Bl = Jm.slice, Y = { __e: function(e, t, n, r) {
  for (var o, i, a; t = t.__; )
    if ((o = t.__c) && !o.__)
      try {
        if ((i = o.constructor) && i.getDerivedStateFromError != null && (o.setState(i.getDerivedStateFromError(e)), a = o.__d), o.componentDidCatch != null && (o.componentDidCatch(e, r || {}), a = o.__d), a)
          return o.__E = o;
      } catch (s) {
        e = s;
      }
  throw e;
} }, zm = 0, _n.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Dn({}, this.state), typeof e == "function" && (e = e(Dn({}, n), this.props)), e && Dn(n, e), e != null && this.__v && (t && this._sb.push(t), df(this));
}, _n.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), df(this));
}, _n.prototype.render = ei, Jn = [], qm = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Ic = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, Xa.__r = 0;
var Ac, ct, yu, mf, Tf = 0, iT = [], Ta = [], Ef = Y.__b, bf = Y.__r, Of = Y.diffed, gf = Y.__c, Rf = Y.unmount;
function oy(e, t) {
  Y.__h && Y.__h(ct, e, Tf || t), Tf = 0;
  var n = ct.__H || (ct.__H = { __: [], __h: [] });
  return e >= n.__.length && n.__.push({ __V: Ta }), n.__[e];
}
function DU(e, t) {
  var n = oy(Ac++, 3);
  !Y.__s && sy(n.__H, t) && (n.__ = e, n.i = t, ct.__H.__h.push(n));
}
function iy() {
  for (var e; e = iT.shift(); )
    if (e.__P && e.__H)
      try {
        e.__H.__h.forEach(Ea), e.__H.__h.forEach(yc), e.__H.__h = [];
      } catch (t) {
        e.__H.__h = [], Y.__e(t, e.__v);
      }
}
Y.__b = function(e) {
  ct = null, Ef && Ef(e);
}, Y.__r = function(e) {
  bf && bf(e), Ac = 0;
  var t = (ct = e.__c).__H;
  t && (yu === ct ? (t.__h = [], ct.__h = [], t.__.forEach(function(n) {
    n.__N && (n.__ = n.__N), n.__V = Ta, n.__N = n.i = void 0;
  })) : (t.__h.forEach(Ea), t.__h.forEach(yc), t.__h = [], Ac = 0)), yu = ct;
}, Y.diffed = function(e) {
  Of && Of(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (iT.push(t) !== 1 && mf === Y.requestAnimationFrame || ((mf = Y.requestAnimationFrame) || ay)(iy)), t.__H.__.forEach(function(n) {
    n.i && (n.__H = n.i), n.__V !== Ta && (n.__ = n.__V), n.i = void 0, n.__V = Ta;
  })), yu = ct = null;
}, Y.__c = function(e, t) {
  t.some(function(n) {
    try {
      n.__h.forEach(Ea), n.__h = n.__h.filter(function(r) {
        return !r.__ || yc(r);
      });
    } catch (r) {
      t.some(function(o) {
        o.__h && (o.__h = []);
      }), t = [], Y.__e(r, n.__v);
    }
  }), gf && gf(e, t);
}, Y.unmount = function(e) {
  Rf && Rf(e);
  var t, n = e.__c;
  n && n.__H && (n.__H.__.forEach(function(r) {
    try {
      Ea(r);
    } catch (o) {
      t = o;
    }
  }), n.__H = void 0, t && Y.__e(t, n.__v));
};
var vf = typeof requestAnimationFrame == "function";
function ay(e) {
  var t, n = function() {
    clearTimeout(r), vf && cancelAnimationFrame(t), setTimeout(e);
  }, r = setTimeout(n, 100);
  vf && (t = requestAnimationFrame(n));
}
function Ea(e) {
  var t = ct, n = e.__c;
  typeof n == "function" && (e.__c = void 0, n()), ct = t;
}
function yc(e) {
  var t = ct;
  e.__c = e.__(), ct = t;
}
function sy(e, t) {
  return !e || e.length !== t.length || t.some(function(n, r) {
    return n !== e[r];
  });
}
const aT = ss(
  {}
), CU = ({ children: e }) => {
  const [t, n] = lb.useMessage(), r = ({ type: o, message: i }) => {
    t.open({
      type: o ?? "info",
      content: i,
      duration: 5
    });
  };
  return /* @__PURE__ */ mt(Ih, { children: [
    n,
    /* @__PURE__ */ K(aT.Provider, { value: { open: r }, children: e })
  ] });
}, uy = () => it(aT);
var sT = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, Nf = Pe.createContext && Pe.createContext(sT), Mn = globalThis && globalThis.__assign || function() {
  return Mn = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var o in t)
        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, Mn.apply(this, arguments);
}, cy = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
function uT(e) {
  return e && e.map(function(t, n) {
    return Pe.createElement(t.tag, Mn({
      key: n
    }, t.attr), uT(t.child));
  });
}
function jl(e) {
  return function(t) {
    return Pe.createElement(ly, Mn({
      attr: Mn({}, e.attr)
    }, t), uT(e.child));
  };
}
function ly(e) {
  var t = function(n) {
    var r = e.attr, o = e.size, i = e.title, a = cy(e, ["attr", "size", "title"]), s = o || n.size || "1em", u;
    return n.className && (u = n.className), e.className && (u = (u ? u + " " : "") + e.className), Pe.createElement("svg", Mn({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, n.attr, r, a, {
      className: u,
      style: Mn(Mn({
        color: e.color || n.color
      }, n.style), e.style),
      height: s,
      width: s,
      xmlns: "http://www.w3.org/2000/svg"
    }), i && Pe.createElement("title", null, i), e.children);
  };
  return Nf !== void 0 ? Pe.createElement(Nf.Consumer, null, function(n) {
    return t(n);
  }) : t(sT);
}
function _y(e) {
  return jl({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" } }] })(e);
}
function wU(e) {
  return jl({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M145 96l66 746.6L511.8 928l299.6-85.4L878.7 96H145zm610.9 700.6l-244.1 69.6-245.2-69.6-56.7-641.2h603.8l-57.8 641.2zM281 249l1.7 24.3 22.7 253.5h206.5v-.1h112.9l-11.4 118.5L511 672.9v.2h-.8l-102.4-27.7-6.5-73.2h-91l11.3 144.7 188.6 52h1.7v-.4l187.7-51.7 1.7-16.3 21.2-242.2 3.2-24.3H511v.2H389.9l-8.2-94.2h352.1l1.7-19.5 4.8-47.2L742 249H511z" } }] })(e);
}
function dy(e) {
  return jl({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", stroke: "#000", strokeWidth: "2", d: "M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M5,5 L19,19" } }] })(e);
}
const If = ({ children: e, override: t, ...n }) => /* @__PURE__ */ K(_b, { theme: {
  token: { colorPrimary: t }
}, children: /* @__PURE__ */ K(So, { ...n, style: { minWidth: "85px" }, children: e }) });
var cT = { exports: {} }, Oe = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Af;
function fy() {
  if (Af)
    return Oe;
  Af = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), u = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), _ = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), f;
  f = Symbol.for("react.module.reference");
  function p(m) {
    if (typeof m == "object" && m !== null) {
      var b = m.$$typeof;
      switch (b) {
        case e:
          switch (m = m.type, m) {
            case n:
            case o:
            case r:
            case c:
            case _:
              return m;
            default:
              switch (m = m && m.$$typeof, m) {
                case s:
                case a:
                case u:
                case d:
                case l:
                case i:
                  return m;
                default:
                  return b;
              }
          }
        case t:
          return b;
      }
    }
  }
  return Oe.ContextConsumer = a, Oe.ContextProvider = i, Oe.Element = e, Oe.ForwardRef = u, Oe.Fragment = n, Oe.Lazy = d, Oe.Memo = l, Oe.Portal = t, Oe.Profiler = o, Oe.StrictMode = r, Oe.Suspense = c, Oe.SuspenseList = _, Oe.isAsyncMode = function() {
    return !1;
  }, Oe.isConcurrentMode = function() {
    return !1;
  }, Oe.isContextConsumer = function(m) {
    return p(m) === a;
  }, Oe.isContextProvider = function(m) {
    return p(m) === i;
  }, Oe.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === e;
  }, Oe.isForwardRef = function(m) {
    return p(m) === u;
  }, Oe.isFragment = function(m) {
    return p(m) === n;
  }, Oe.isLazy = function(m) {
    return p(m) === d;
  }, Oe.isMemo = function(m) {
    return p(m) === l;
  }, Oe.isPortal = function(m) {
    return p(m) === t;
  }, Oe.isProfiler = function(m) {
    return p(m) === o;
  }, Oe.isStrictMode = function(m) {
    return p(m) === r;
  }, Oe.isSuspense = function(m) {
    return p(m) === c;
  }, Oe.isSuspenseList = function(m) {
    return p(m) === _;
  }, Oe.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === n || m === o || m === r || m === c || m === _ || m === h || typeof m == "object" && m !== null && (m.$$typeof === d || m.$$typeof === l || m.$$typeof === i || m.$$typeof === a || m.$$typeof === u || m.$$typeof === f || m.getModuleId !== void 0);
  }, Oe.typeOf = p, Oe;
}
cT.exports = fy();
var lT = cT.exports;
function hy(e) {
  function t(C, x, k, V, R) {
    for (var re = 0, U = 0, Ee = 0, ce = 0, Re, ee, Ye = 0, at = 0, de, Qe = de = Re = 0, be = 0, Ke = 0, ho = 0, $e = 0, Li = k.length, po = Li - 1, Gt, q = "", ke = "", eu = "", tu = "", On; be < Li; ) {
      if (ee = k.charCodeAt(be), be === po && U + ce + Ee + re !== 0 && (U !== 0 && (ee = U === 47 ? 10 : 47), ce = Ee = re = 0, Li++, po++), U + ce + Ee + re === 0) {
        if (be === po && (0 < Ke && (q = q.replace(d, "")), 0 < q.trim().length)) {
          switch (ee) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              q += k.charAt(be);
          }
          ee = 59;
        }
        switch (ee) {
          case 123:
            for (q = q.trim(), Re = q.charCodeAt(0), de = 1, $e = ++be; be < Li; ) {
              switch (ee = k.charCodeAt(be)) {
                case 123:
                  de++;
                  break;
                case 125:
                  de--;
                  break;
                case 47:
                  switch (ee = k.charCodeAt(be + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (Qe = be + 1; Qe < po; ++Qe)
                          switch (k.charCodeAt(Qe)) {
                            case 47:
                              if (ee === 42 && k.charCodeAt(Qe - 1) === 42 && be + 2 !== Qe) {
                                be = Qe + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (ee === 47) {
                                be = Qe + 1;
                                break e;
                              }
                          }
                        be = Qe;
                      }
                  }
                  break;
                case 91:
                  ee++;
                case 40:
                  ee++;
                case 34:
                case 39:
                  for (; be++ < po && k.charCodeAt(be) !== ee; )
                    ;
              }
              if (de === 0)
                break;
              be++;
            }
            switch (de = k.substring($e, be), Re === 0 && (Re = (q = q.replace(l, "").trim()).charCodeAt(0)), Re) {
              case 64:
                switch (0 < Ke && (q = q.replace(d, "")), ee = q.charCodeAt(1), ee) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    Ke = x;
                    break;
                  default:
                    Ke = Q;
                }
                if (de = t(x, Ke, de, ee, R + 1), $e = de.length, 0 < oe && (Ke = n(Q, q, ho), On = s(3, de, Ke, x, J, ne, $e, ee, R, V), q = Ke.join(""), On !== void 0 && ($e = (de = On.trim()).length) === 0 && (ee = 0, de = "")), 0 < $e)
                  switch (ee) {
                    case 115:
                      q = q.replace(I, a);
                    case 100:
                    case 109:
                    case 45:
                      de = q + "{" + de + "}";
                      break;
                    case 107:
                      q = q.replace(T, "$1 $2"), de = q + "{" + de + "}", de = H === 1 || H === 2 && i("@" + de, 3) ? "@-webkit-" + de + "@" + de : "@" + de;
                      break;
                    default:
                      de = q + de, V === 112 && (de = (ke += de, ""));
                  }
                else
                  de = "";
                break;
              default:
                de = t(x, n(x, q, ho), de, V, R + 1);
            }
            eu += de, de = ho = Ke = Qe = Re = 0, q = "", ee = k.charCodeAt(++be);
            break;
          case 125:
          case 59:
            if (q = (0 < Ke ? q.replace(d, "") : q).trim(), 1 < ($e = q.length))
              switch (Qe === 0 && (Re = q.charCodeAt(0), Re === 45 || 96 < Re && 123 > Re) && ($e = (q = q.replace(" ", ":")).length), 0 < oe && (On = s(1, q, x, C, J, ne, ke.length, V, R, V)) !== void 0 && ($e = (q = On.trim()).length) === 0 && (q = "\0\0"), Re = q.charCodeAt(0), ee = q.charCodeAt(1), Re) {
                case 0:
                  break;
                case 64:
                  if (ee === 105 || ee === 99) {
                    tu += q + k.charAt(be);
                    break;
                  }
                default:
                  q.charCodeAt($e - 1) !== 58 && (ke += o(q, Re, ee, q.charCodeAt(2)));
              }
            ho = Ke = Qe = Re = 0, q = "", ee = k.charCodeAt(++be);
        }
      }
      switch (ee) {
        case 13:
        case 10:
          U === 47 ? U = 0 : 1 + Re === 0 && V !== 107 && 0 < q.length && (Ke = 1, q += "\0"), 0 < oe * Le && s(0, q, x, C, J, ne, ke.length, V, R, V), ne = 1, J++;
          break;
        case 59:
        case 125:
          if (U + ce + Ee + re === 0) {
            ne++;
            break;
          }
        default:
          switch (ne++, Gt = k.charAt(be), ee) {
            case 9:
            case 32:
              if (ce + re + U === 0)
                switch (Ye) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    Gt = "";
                    break;
                  default:
                    ee !== 32 && (Gt = " ");
                }
              break;
            case 0:
              Gt = "\\0";
              break;
            case 12:
              Gt = "\\f";
              break;
            case 11:
              Gt = "\\v";
              break;
            case 38:
              ce + U + re === 0 && (Ke = ho = 1, Gt = "\f" + Gt);
              break;
            case 108:
              if (ce + U + re + B === 0 && 0 < Qe)
                switch (be - Qe) {
                  case 2:
                    Ye === 112 && k.charCodeAt(be - 3) === 58 && (B = Ye);
                  case 8:
                    at === 111 && (B = at);
                }
              break;
            case 58:
              ce + U + re === 0 && (Qe = be);
              break;
            case 44:
              U + Ee + ce + re === 0 && (Ke = 1, Gt += "\r");
              break;
            case 34:
            case 39:
              U === 0 && (ce = ce === ee ? 0 : ce === 0 ? ee : ce);
              break;
            case 91:
              ce + U + Ee === 0 && re++;
              break;
            case 93:
              ce + U + Ee === 0 && re--;
              break;
            case 41:
              ce + U + re === 0 && Ee--;
              break;
            case 40:
              if (ce + U + re === 0) {
                if (Re === 0)
                  switch (2 * Ye + 3 * at) {
                    case 533:
                      break;
                    default:
                      Re = 1;
                  }
                Ee++;
              }
              break;
            case 64:
              U + Ee + ce + re + Qe + de === 0 && (de = 1);
              break;
            case 42:
            case 47:
              if (!(0 < ce + re + Ee))
                switch (U) {
                  case 0:
                    switch (2 * ee + 3 * k.charCodeAt(be + 1)) {
                      case 235:
                        U = 47;
                        break;
                      case 220:
                        $e = be, U = 42;
                    }
                    break;
                  case 42:
                    ee === 47 && Ye === 42 && $e + 2 !== be && (k.charCodeAt($e + 2) === 33 && (ke += k.substring($e, be + 1)), Gt = "", U = 0);
                }
          }
          U === 0 && (q += Gt);
      }
      at = Ye, Ye = ee, be++;
    }
    if ($e = ke.length, 0 < $e) {
      if (Ke = x, 0 < oe && (On = s(2, ke, Ke, C, J, ne, $e, V, R, V), On !== void 0 && (ke = On).length === 0))
        return tu + ke + eu;
      if (ke = Ke.join(",") + "{" + ke + "}", H * B !== 0) {
        switch (H !== 2 || i(ke, 2) || (B = 0), B) {
          case 111:
            ke = ke.replace(g, ":-moz-$1") + ke;
            break;
          case 112:
            ke = ke.replace(E, "::-webkit-input-$1") + ke.replace(E, "::-moz-$1") + ke.replace(E, ":-ms-input-$1") + ke;
        }
        B = 0;
      }
    }
    return tu + ke + eu;
  }
  function n(C, x, k) {
    var V = x.trim().split(m);
    x = V;
    var R = V.length, re = C.length;
    switch (re) {
      case 0:
      case 1:
        var U = 0;
        for (C = re === 0 ? "" : C[0] + " "; U < R; ++U)
          x[U] = r(C, x[U], k).trim();
        break;
      default:
        var Ee = U = 0;
        for (x = []; U < R; ++U)
          for (var ce = 0; ce < re; ++ce)
            x[Ee++] = r(C[ce] + " ", V[U], k).trim();
    }
    return x;
  }
  function r(C, x, k) {
    var V = x.charCodeAt(0);
    switch (33 > V && (V = (x = x.trim()).charCodeAt(0)), V) {
      case 38:
        return x.replace(b, "$1" + C.trim());
      case 58:
        return C.trim() + x.replace(b, "$1" + C.trim());
      default:
        if (0 < 1 * k && 0 < x.indexOf("\f"))
          return x.replace(b, (C.charCodeAt(0) === 58 ? "" : "$1") + C.trim());
    }
    return C + x;
  }
  function o(C, x, k, V) {
    var R = C + ";", re = 2 * x + 3 * k + 4 * V;
    if (re === 944) {
      C = R.indexOf(":", 9) + 1;
      var U = R.substring(C, R.length - 1).trim();
      return U = R.substring(0, C).trim() + U + ";", H === 1 || H === 2 && i(U, 1) ? "-webkit-" + U + U : U;
    }
    if (H === 0 || H === 2 && !i(R, 1))
      return R;
    switch (re) {
      case 1015:
        return R.charCodeAt(10) === 97 ? "-webkit-" + R + R : R;
      case 951:
        return R.charCodeAt(3) === 116 ? "-webkit-" + R + R : R;
      case 963:
        return R.charCodeAt(5) === 110 ? "-webkit-" + R + R : R;
      case 1009:
        if (R.charCodeAt(4) !== 100)
          break;
      case 969:
      case 942:
        return "-webkit-" + R + R;
      case 978:
        return "-webkit-" + R + "-moz-" + R + R;
      case 1019:
      case 983:
        return "-webkit-" + R + "-moz-" + R + "-ms-" + R + R;
      case 883:
        if (R.charCodeAt(8) === 45)
          return "-webkit-" + R + R;
        if (0 < R.indexOf("image-set(", 11))
          return R.replace(Z, "$1-webkit-$2") + R;
        break;
      case 932:
        if (R.charCodeAt(4) === 45)
          switch (R.charCodeAt(5)) {
            case 103:
              return "-webkit-box-" + R.replace("-grow", "") + "-webkit-" + R + "-ms-" + R.replace("grow", "positive") + R;
            case 115:
              return "-webkit-" + R + "-ms-" + R.replace("shrink", "negative") + R;
            case 98:
              return "-webkit-" + R + "-ms-" + R.replace("basis", "preferred-size") + R;
          }
        return "-webkit-" + R + "-ms-" + R + R;
      case 964:
        return "-webkit-" + R + "-ms-flex-" + R + R;
      case 1023:
        if (R.charCodeAt(8) !== 99)
          break;
        return U = R.substring(R.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + U + "-webkit-" + R + "-ms-flex-pack" + U + R;
      case 1005:
        return f.test(R) ? R.replace(h, ":-webkit-") + R.replace(h, ":-moz-") + R : R;
      case 1e3:
        switch (U = R.substring(13).trim(), x = U.indexOf("-") + 1, U.charCodeAt(0) + U.charCodeAt(x)) {
          case 226:
            U = R.replace(O, "tb");
            break;
          case 232:
            U = R.replace(O, "tb-rl");
            break;
          case 220:
            U = R.replace(O, "lr");
            break;
          default:
            return R;
        }
        return "-webkit-" + R + "-ms-" + U + R;
      case 1017:
        if (R.indexOf("sticky", 9) === -1)
          break;
      case 975:
        switch (x = (R = C).length - 10, U = (R.charCodeAt(x) === 33 ? R.substring(0, x) : R).substring(C.indexOf(":", 7) + 1).trim(), re = U.charCodeAt(0) + (U.charCodeAt(7) | 0)) {
          case 203:
            if (111 > U.charCodeAt(8))
              break;
          case 115:
            R = R.replace(U, "-webkit-" + U) + ";" + R;
            break;
          case 207:
          case 102:
            R = R.replace(U, "-webkit-" + (102 < re ? "inline-" : "") + "box") + ";" + R.replace(U, "-webkit-" + U) + ";" + R.replace(U, "-ms-" + U + "box") + ";" + R;
        }
        return R + ";";
      case 938:
        if (R.charCodeAt(5) === 45)
          switch (R.charCodeAt(6)) {
            case 105:
              return U = R.replace("-items", ""), "-webkit-" + R + "-webkit-box-" + U + "-ms-flex-" + U + R;
            case 115:
              return "-webkit-" + R + "-ms-flex-item-" + R.replace(w, "") + R;
            default:
              return "-webkit-" + R + "-ms-flex-line-pack" + R.replace("align-content", "").replace(w, "") + R;
          }
        break;
      case 973:
      case 989:
        if (R.charCodeAt(3) !== 45 || R.charCodeAt(4) === 122)
          break;
      case 931:
      case 953:
        if (D.test(C) === !0)
          return (U = C.substring(C.indexOf(":") + 1)).charCodeAt(0) === 115 ? o(C.replace("stretch", "fill-available"), x, k, V).replace(":fill-available", ":stretch") : R.replace(U, "-webkit-" + U) + R.replace(U, "-moz-" + U.replace("fill-", "")) + R;
        break;
      case 962:
        if (R = "-webkit-" + R + (R.charCodeAt(5) === 102 ? "-ms-" + R : "") + R, k + V === 211 && R.charCodeAt(13) === 105 && 0 < R.indexOf("transform", 10))
          return R.substring(0, R.indexOf(";", 27) + 1).replace(p, "$1-webkit-$2") + R;
    }
    return R;
  }
  function i(C, x) {
    var k = C.indexOf(x === 1 ? ":" : "{"), V = C.substring(0, x !== 3 ? k : 10);
    return k = C.substring(k + 1, C.length - 1), Se(x !== 2 ? V : V.replace(G, "$1"), k, x);
  }
  function a(C, x) {
    var k = o(x, x.charCodeAt(0), x.charCodeAt(1), x.charCodeAt(2));
    return k !== x + ";" ? k.replace(N, " or ($1)").substring(4) : "(" + x + ")";
  }
  function s(C, x, k, V, R, re, U, Ee, ce, Re) {
    for (var ee = 0, Ye = x, at; ee < oe; ++ee)
      switch (at = ue[ee].call(_, C, Ye, k, V, R, re, U, Ee, ce, Re)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          Ye = at;
      }
    if (Ye !== x)
      return Ye;
  }
  function u(C) {
    switch (C) {
      case void 0:
      case null:
        oe = ue.length = 0;
        break;
      default:
        if (typeof C == "function")
          ue[oe++] = C;
        else if (typeof C == "object")
          for (var x = 0, k = C.length; x < k; ++x)
            u(C[x]);
        else
          Le = !!C | 0;
    }
    return u;
  }
  function c(C) {
    return C = C.prefix, C !== void 0 && (Se = null, C ? typeof C != "function" ? H = 1 : (H = 2, Se = C) : H = 0), c;
  }
  function _(C, x) {
    var k = C;
    if (33 > k.charCodeAt(0) && (k = k.trim()), Ae = k, k = [Ae], 0 < oe) {
      var V = s(-1, x, k, k, J, ne, 0, 0, 0, 0);
      V !== void 0 && typeof V == "string" && (x = V);
    }
    var R = t(Q, k, x, 0, 0);
    return 0 < oe && (V = s(-2, R, k, k, J, ne, R.length, 0, 0, 0), V !== void 0 && (R = V)), Ae = "", B = 0, ne = J = 1, R;
  }
  var l = /^\0+/g, d = /[\0\r\f]/g, h = /: */g, f = /zoo|gra/, p = /([,: ])(transform)/g, m = /,\r+?/g, b = /([\t\r\n ])*\f?&/g, T = /@(k\w+)\s*(\S*)\s*/, E = /::(place)/g, g = /:(read-only)/g, O = /[svh]\w+-[tblr]{2}/, I = /\(\s*(.*)\s*\)/g, N = /([\s\S]*?);/g, w = /-self|flex-/g, G = /[^]*?(:[rp][el]a[\w-]+)[^]*/, D = /stretch|:\s*\w+\-(?:conte|avail)/, Z = /([^-])(image-set\()/, ne = 1, J = 1, B = 0, H = 1, Q = [], ue = [], oe = 0, Se = null, Le = 0, Ae = "";
  return _.use = u, _.set = c, e !== void 0 && c(e), _;
}
var py = {
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
function my(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var Ty = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, yf = /* @__PURE__ */ my(
  function(e) {
    return Ty.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), _T = { exports: {} }, ge = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sf;
function Ey() {
  if (Sf)
    return ge;
  Sf = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, _ = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, f = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, b = e ? Symbol.for("react.responder") : 60118, T = e ? Symbol.for("react.scope") : 60119;
  function E(O) {
    if (typeof O == "object" && O !== null) {
      var I = O.$$typeof;
      switch (I) {
        case t:
          switch (O = O.type, O) {
            case u:
            case c:
            case r:
            case i:
            case o:
            case l:
              return O;
            default:
              switch (O = O && O.$$typeof, O) {
                case s:
                case _:
                case f:
                case h:
                case a:
                  return O;
                default:
                  return I;
              }
          }
        case n:
          return I;
      }
    }
  }
  function g(O) {
    return E(O) === c;
  }
  return ge.AsyncMode = u, ge.ConcurrentMode = c, ge.ContextConsumer = s, ge.ContextProvider = a, ge.Element = t, ge.ForwardRef = _, ge.Fragment = r, ge.Lazy = f, ge.Memo = h, ge.Portal = n, ge.Profiler = i, ge.StrictMode = o, ge.Suspense = l, ge.isAsyncMode = function(O) {
    return g(O) || E(O) === u;
  }, ge.isConcurrentMode = g, ge.isContextConsumer = function(O) {
    return E(O) === s;
  }, ge.isContextProvider = function(O) {
    return E(O) === a;
  }, ge.isElement = function(O) {
    return typeof O == "object" && O !== null && O.$$typeof === t;
  }, ge.isForwardRef = function(O) {
    return E(O) === _;
  }, ge.isFragment = function(O) {
    return E(O) === r;
  }, ge.isLazy = function(O) {
    return E(O) === f;
  }, ge.isMemo = function(O) {
    return E(O) === h;
  }, ge.isPortal = function(O) {
    return E(O) === n;
  }, ge.isProfiler = function(O) {
    return E(O) === i;
  }, ge.isStrictMode = function(O) {
    return E(O) === o;
  }, ge.isSuspense = function(O) {
    return E(O) === l;
  }, ge.isValidElementType = function(O) {
    return typeof O == "string" || typeof O == "function" || O === r || O === c || O === i || O === o || O === l || O === d || typeof O == "object" && O !== null && (O.$$typeof === f || O.$$typeof === h || O.$$typeof === a || O.$$typeof === s || O.$$typeof === _ || O.$$typeof === m || O.$$typeof === b || O.$$typeof === T || O.$$typeof === p);
  }, ge.typeOf = E, ge;
}
_T.exports = Ey();
var by = _T.exports, Vl = by, Oy = {
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
}, gy = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, Ry = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, dT = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Wl = {};
Wl[Vl.ForwardRef] = Ry;
Wl[Vl.Memo] = dT;
function Gf(e) {
  return Vl.isMemo(e) ? dT : Wl[e.$$typeof] || Oy;
}
var vy = Object.defineProperty, Ny = Object.getOwnPropertyNames, Df = Object.getOwnPropertySymbols, Iy = Object.getOwnPropertyDescriptor, Ay = Object.getPrototypeOf, Cf = Object.prototype;
function fT(e, t, n) {
  if (typeof t != "string") {
    if (Cf) {
      var r = Ay(t);
      r && r !== Cf && fT(e, r, n);
    }
    var o = Ny(t);
    Df && (o = o.concat(Df(t)));
    for (var i = Gf(e), a = Gf(t), s = 0; s < o.length; ++s) {
      var u = o[s];
      if (!gy[u] && !(n && n[u]) && !(a && a[u]) && !(i && i[u])) {
        var c = Iy(t, u);
        try {
          vy(e, u, c);
        } catch {
        }
      }
    }
  }
  return e;
}
var yy = fT;
const Sy = /* @__PURE__ */ Mv(yy);
function an() {
  return (an = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }).apply(this, arguments);
}
var wf = function(e, t) {
  for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1)
    n.push(t[r], e[r + 1]);
  return n;
}, Sc = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !lT.typeOf(e);
}, $a = Object.freeze([]), xn = Object.freeze({});
function ti(e) {
  return typeof e == "function";
}
function Uf(e) {
  return e.displayName || e.name || "Component";
}
function Xl(e) {
  return e && typeof e.styledComponentId == "string";
}
var Jr = typeof process < "u" && ({ GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_86394af3-b4bf-426a-90ed-a3b5355c6ab2", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "npm/8.19.4 node/v16.20.1 linux x64 workspaces/false ci/github-actions", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_86394af3-b4bf-426a-90ed-a3b5355c6ab2", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", npm_config_noproxy: "", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-8.2.1", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "", npm_config_userconfig: "/home/runner/.npmrc", npm_config_local_prefix: "/home/runner/work/CodeGear/CodeGear", SYSTEMD_EXEC_PID: "667", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", COLOR: "0", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.6/x64", NVM_DIR: "/home/runner/.nvm", npm_config_metrics_registry: "https://registry.npmjs.org/", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230724.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", JOURNAL_STREAM: "8:16780", GITHUB_WORKFLOW: "CodeGear CI", _: "/opt/hostedtoolcache/node/16.20.1/x64/bin/npm", npm_config_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", GITHUB_RUN_ID: "5726768725", npm_config_cache: "/home/runner/.npm", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "8374588b72e979f590036af7eb8486e5f12392a0", GITHUB_BASE_REF: "", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/heads/develop", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", npm_config_node_gyp: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.bin:/home/runner/work/CodeGear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_4dc21800-4235-4f8a-a2db-e88d2665e77f", INVOCATION_ID: "83cb2f8c2f094435ae0afd3954bf1e9b", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.11/x64", NODE: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "35", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 3", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "develop", GITHUB_REPOSITORY: "Gearonix/CodeGear", npm_lifecycle_script: "nx run-many --targets=build --all", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", STATS_NM: "true", npm_package_version: "0.0.0", npm_lifecycle_event: "build", NODE_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/bin/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/node_modules", GITHUB_REF_PROTECTED: "false", npm_config_strict_peer_dependencies: "", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "8374588b72e979f590036af7eb8486e5f12392a0", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/heads/develop", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", npm_config_globalconfig: "/opt/hostedtoolcache/node/16.20.1/x64/etc/npmrc", npm_config_init_module: "/home/runner/.npm-init.js", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_86394af3-b4bf-426a-90ed-a3b5355c6ab2", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", npm_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/bin/npm-cli.js", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "push", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_86394af3-b4bf-426a-90ed-a3b5355c6ab2", npm_config_global_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", npm_command: "run-script", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_86394af3-b4bf-426a-90ed-a3b5355c6ab2", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", EDITOR: "vi", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/15228585155065571407", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "15228585155065571407", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.REACT_APP_SC_ATTR || { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_86394af3-b4bf-426a-90ed-a3b5355c6ab2", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "npm/8.19.4 node/v16.20.1 linux x64 workspaces/false ci/github-actions", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_86394af3-b4bf-426a-90ed-a3b5355c6ab2", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", npm_config_noproxy: "", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-8.2.1", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "", npm_config_userconfig: "/home/runner/.npmrc", npm_config_local_prefix: "/home/runner/work/CodeGear/CodeGear", SYSTEMD_EXEC_PID: "667", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", COLOR: "0", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.6/x64", NVM_DIR: "/home/runner/.nvm", npm_config_metrics_registry: "https://registry.npmjs.org/", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230724.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", JOURNAL_STREAM: "8:16780", GITHUB_WORKFLOW: "CodeGear CI", _: "/opt/hostedtoolcache/node/16.20.1/x64/bin/npm", npm_config_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", GITHUB_RUN_ID: "5726768725", npm_config_cache: "/home/runner/.npm", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "8374588b72e979f590036af7eb8486e5f12392a0", GITHUB_BASE_REF: "", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/heads/develop", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", npm_config_node_gyp: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.bin:/home/runner/work/CodeGear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_4dc21800-4235-4f8a-a2db-e88d2665e77f", INVOCATION_ID: "83cb2f8c2f094435ae0afd3954bf1e9b", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.11/x64", NODE: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "35", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 3", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "develop", GITHUB_REPOSITORY: "Gearonix/CodeGear", npm_lifecycle_script: "nx run-many --targets=build --all", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", STATS_NM: "true", npm_package_version: "0.0.0", npm_lifecycle_event: "build", NODE_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/bin/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/node_modules", GITHUB_REF_PROTECTED: "false", npm_config_strict_peer_dependencies: "", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "8374588b72e979f590036af7eb8486e5f12392a0", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/heads/develop", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", npm_config_globalconfig: "/opt/hostedtoolcache/node/16.20.1/x64/etc/npmrc", npm_config_init_module: "/home/runner/.npm-init.js", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_86394af3-b4bf-426a-90ed-a3b5355c6ab2", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", npm_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/bin/npm-cli.js", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "push", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_86394af3-b4bf-426a-90ed-a3b5355c6ab2", npm_config_global_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", npm_command: "run-script", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_86394af3-b4bf-426a-90ed-a3b5355c6ab2", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", EDITOR: "vi", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/15228585155065571407", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "15228585155065571407", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.SC_ATTR) || "data-styled", Yl = typeof window < "u" && "HTMLElement" in window, Gy = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_86394af3-b4bf-426a-90ed-a3b5355c6ab2", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "npm/8.19.4 node/v16.20.1 linux x64 workspaces/false ci/github-actions", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_86394af3-b4bf-426a-90ed-a3b5355c6ab2", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", npm_config_noproxy: "", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-8.2.1", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "", npm_config_userconfig: "/home/runner/.npmrc", npm_config_local_prefix: "/home/runner/work/CodeGear/CodeGear", SYSTEMD_EXEC_PID: "667", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", COLOR: "0", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.6/x64", NVM_DIR: "/home/runner/.nvm", npm_config_metrics_registry: "https://registry.npmjs.org/", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230724.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", JOURNAL_STREAM: "8:16780", GITHUB_WORKFLOW: "CodeGear CI", _: "/opt/hostedtoolcache/node/16.20.1/x64/bin/npm", npm_config_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", GITHUB_RUN_ID: "5726768725", npm_config_cache: "/home/runner/.npm", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "8374588b72e979f590036af7eb8486e5f12392a0", GITHUB_BASE_REF: "", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/heads/develop", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", npm_config_node_gyp: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.bin:/home/runner/work/CodeGear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_4dc21800-4235-4f8a-a2db-e88d2665e77f", INVOCATION_ID: "83cb2f8c2f094435ae0afd3954bf1e9b", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.11/x64", NODE: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "35", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 3", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "develop", GITHUB_REPOSITORY: "Gearonix/CodeGear", npm_lifecycle_script: "nx run-many --targets=build --all", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", STATS_NM: "true", npm_package_version: "0.0.0", npm_lifecycle_event: "build", NODE_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/bin/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/node_modules", GITHUB_REF_PROTECTED: "false", npm_config_strict_peer_dependencies: "", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "8374588b72e979f590036af7eb8486e5f12392a0", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/heads/develop", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", npm_config_globalconfig: "/opt/hostedtoolcache/node/16.20.1/x64/etc/npmrc", npm_config_init_module: "/home/runner/.npm-init.js", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_86394af3-b4bf-426a-90ed-a3b5355c6ab2", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", npm_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/bin/npm-cli.js", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "push", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_86394af3-b4bf-426a-90ed-a3b5355c6ab2", npm_config_global_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", npm_command: "run-script", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_86394af3-b4bf-426a-90ed-a3b5355c6ab2", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", EDITOR: "vi", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/15228585155065571407", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "15228585155065571407", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_86394af3-b4bf-426a-90ed-a3b5355c6ab2", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "npm/8.19.4 node/v16.20.1 linux x64 workspaces/false ci/github-actions", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_86394af3-b4bf-426a-90ed-a3b5355c6ab2", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", npm_config_noproxy: "", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-8.2.1", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "", npm_config_userconfig: "/home/runner/.npmrc", npm_config_local_prefix: "/home/runner/work/CodeGear/CodeGear", SYSTEMD_EXEC_PID: "667", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", COLOR: "0", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.6/x64", NVM_DIR: "/home/runner/.nvm", npm_config_metrics_registry: "https://registry.npmjs.org/", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230724.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", JOURNAL_STREAM: "8:16780", GITHUB_WORKFLOW: "CodeGear CI", _: "/opt/hostedtoolcache/node/16.20.1/x64/bin/npm", npm_config_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", GITHUB_RUN_ID: "5726768725", npm_config_cache: "/home/runner/.npm", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "8374588b72e979f590036af7eb8486e5f12392a0", GITHUB_BASE_REF: "", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/heads/develop", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", npm_config_node_gyp: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.bin:/home/runner/work/CodeGear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_4dc21800-4235-4f8a-a2db-e88d2665e77f", INVOCATION_ID: "83cb2f8c2f094435ae0afd3954bf1e9b", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.11/x64", NODE: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "35", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 3", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "develop", GITHUB_REPOSITORY: "Gearonix/CodeGear", npm_lifecycle_script: "nx run-many --targets=build --all", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", STATS_NM: "true", npm_package_version: "0.0.0", npm_lifecycle_event: "build", NODE_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/bin/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/node_modules", GITHUB_REF_PROTECTED: "false", npm_config_strict_peer_dependencies: "", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "8374588b72e979f590036af7eb8486e5f12392a0", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/heads/develop", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", npm_config_globalconfig: "/opt/hostedtoolcache/node/16.20.1/x64/etc/npmrc", npm_config_init_module: "/home/runner/.npm-init.js", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_86394af3-b4bf-426a-90ed-a3b5355c6ab2", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", npm_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/bin/npm-cli.js", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "push", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_86394af3-b4bf-426a-90ed-a3b5355c6ab2", npm_config_global_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", npm_command: "run-script", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_86394af3-b4bf-426a-90ed-a3b5355c6ab2", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", EDITOR: "vi", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/15228585155065571407", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "15228585155065571407", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.REACT_APP_SC_DISABLE_SPEEDY !== "" ? { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_86394af3-b4bf-426a-90ed-a3b5355c6ab2", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "npm/8.19.4 node/v16.20.1 linux x64 workspaces/false ci/github-actions", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_86394af3-b4bf-426a-90ed-a3b5355c6ab2", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", npm_config_noproxy: "", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-8.2.1", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "", npm_config_userconfig: "/home/runner/.npmrc", npm_config_local_prefix: "/home/runner/work/CodeGear/CodeGear", SYSTEMD_EXEC_PID: "667", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", COLOR: "0", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.6/x64", NVM_DIR: "/home/runner/.nvm", npm_config_metrics_registry: "https://registry.npmjs.org/", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230724.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", JOURNAL_STREAM: "8:16780", GITHUB_WORKFLOW: "CodeGear CI", _: "/opt/hostedtoolcache/node/16.20.1/x64/bin/npm", npm_config_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", GITHUB_RUN_ID: "5726768725", npm_config_cache: "/home/runner/.npm", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "8374588b72e979f590036af7eb8486e5f12392a0", GITHUB_BASE_REF: "", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/heads/develop", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", npm_config_node_gyp: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.bin:/home/runner/work/CodeGear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_4dc21800-4235-4f8a-a2db-e88d2665e77f", INVOCATION_ID: "83cb2f8c2f094435ae0afd3954bf1e9b", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.11/x64", NODE: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "35", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 3", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "develop", GITHUB_REPOSITORY: "Gearonix/CodeGear", npm_lifecycle_script: "nx run-many --targets=build --all", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", STATS_NM: "true", npm_package_version: "0.0.0", npm_lifecycle_event: "build", NODE_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/bin/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/node_modules", GITHUB_REF_PROTECTED: "false", npm_config_strict_peer_dependencies: "", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "8374588b72e979f590036af7eb8486e5f12392a0", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/heads/develop", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", npm_config_globalconfig: "/opt/hostedtoolcache/node/16.20.1/x64/etc/npmrc", npm_config_init_module: "/home/runner/.npm-init.js", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_86394af3-b4bf-426a-90ed-a3b5355c6ab2", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", npm_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/bin/npm-cli.js", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "push", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_86394af3-b4bf-426a-90ed-a3b5355c6ab2", npm_config_global_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", npm_command: "run-script", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_86394af3-b4bf-426a-90ed-a3b5355c6ab2", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", EDITOR: "vi", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/15228585155065571407", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "15228585155065571407", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.REACT_APP_SC_DISABLE_SPEEDY !== "false" && { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_86394af3-b4bf-426a-90ed-a3b5355c6ab2", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "npm/8.19.4 node/v16.20.1 linux x64 workspaces/false ci/github-actions", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_86394af3-b4bf-426a-90ed-a3b5355c6ab2", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", npm_config_noproxy: "", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-8.2.1", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "", npm_config_userconfig: "/home/runner/.npmrc", npm_config_local_prefix: "/home/runner/work/CodeGear/CodeGear", SYSTEMD_EXEC_PID: "667", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", COLOR: "0", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.6/x64", NVM_DIR: "/home/runner/.nvm", npm_config_metrics_registry: "https://registry.npmjs.org/", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230724.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", JOURNAL_STREAM: "8:16780", GITHUB_WORKFLOW: "CodeGear CI", _: "/opt/hostedtoolcache/node/16.20.1/x64/bin/npm", npm_config_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", GITHUB_RUN_ID: "5726768725", npm_config_cache: "/home/runner/.npm", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "8374588b72e979f590036af7eb8486e5f12392a0", GITHUB_BASE_REF: "", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/heads/develop", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", npm_config_node_gyp: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.bin:/home/runner/work/CodeGear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_4dc21800-4235-4f8a-a2db-e88d2665e77f", INVOCATION_ID: "83cb2f8c2f094435ae0afd3954bf1e9b", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.11/x64", NODE: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "35", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 3", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "develop", GITHUB_REPOSITORY: "Gearonix/CodeGear", npm_lifecycle_script: "nx run-many --targets=build --all", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", STATS_NM: "true", npm_package_version: "0.0.0", npm_lifecycle_event: "build", NODE_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/bin/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/node_modules", GITHUB_REF_PROTECTED: "false", npm_config_strict_peer_dependencies: "", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "8374588b72e979f590036af7eb8486e5f12392a0", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/heads/develop", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", npm_config_globalconfig: "/opt/hostedtoolcache/node/16.20.1/x64/etc/npmrc", npm_config_init_module: "/home/runner/.npm-init.js", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_86394af3-b4bf-426a-90ed-a3b5355c6ab2", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", npm_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/bin/npm-cli.js", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "push", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_86394af3-b4bf-426a-90ed-a3b5355c6ab2", npm_config_global_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", npm_command: "run-script", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_86394af3-b4bf-426a-90ed-a3b5355c6ab2", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", EDITOR: "vi", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/15228585155065571407", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "15228585155065571407", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_86394af3-b4bf-426a-90ed-a3b5355c6ab2", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "npm/8.19.4 node/v16.20.1 linux x64 workspaces/false ci/github-actions", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_86394af3-b4bf-426a-90ed-a3b5355c6ab2", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", npm_config_noproxy: "", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-8.2.1", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "", npm_config_userconfig: "/home/runner/.npmrc", npm_config_local_prefix: "/home/runner/work/CodeGear/CodeGear", SYSTEMD_EXEC_PID: "667", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", COLOR: "0", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.6/x64", NVM_DIR: "/home/runner/.nvm", npm_config_metrics_registry: "https://registry.npmjs.org/", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230724.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", JOURNAL_STREAM: "8:16780", GITHUB_WORKFLOW: "CodeGear CI", _: "/opt/hostedtoolcache/node/16.20.1/x64/bin/npm", npm_config_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", GITHUB_RUN_ID: "5726768725", npm_config_cache: "/home/runner/.npm", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "8374588b72e979f590036af7eb8486e5f12392a0", GITHUB_BASE_REF: "", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/heads/develop", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", npm_config_node_gyp: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.bin:/home/runner/work/CodeGear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_4dc21800-4235-4f8a-a2db-e88d2665e77f", INVOCATION_ID: "83cb2f8c2f094435ae0afd3954bf1e9b", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.11/x64", NODE: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "35", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 3", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "develop", GITHUB_REPOSITORY: "Gearonix/CodeGear", npm_lifecycle_script: "nx run-many --targets=build --all", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", STATS_NM: "true", npm_package_version: "0.0.0", npm_lifecycle_event: "build", NODE_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/bin/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/node_modules", GITHUB_REF_PROTECTED: "false", npm_config_strict_peer_dependencies: "", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "8374588b72e979f590036af7eb8486e5f12392a0", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/heads/develop", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", npm_config_globalconfig: "/opt/hostedtoolcache/node/16.20.1/x64/etc/npmrc", npm_config_init_module: "/home/runner/.npm-init.js", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_86394af3-b4bf-426a-90ed-a3b5355c6ab2", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", npm_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/bin/npm-cli.js", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "push", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_86394af3-b4bf-426a-90ed-a3b5355c6ab2", npm_config_global_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", npm_command: "run-script", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_86394af3-b4bf-426a-90ed-a3b5355c6ab2", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", EDITOR: "vi", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/15228585155065571407", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "15228585155065571407", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.SC_DISABLE_SPEEDY !== void 0 && { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_86394af3-b4bf-426a-90ed-a3b5355c6ab2", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "npm/8.19.4 node/v16.20.1 linux x64 workspaces/false ci/github-actions", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_86394af3-b4bf-426a-90ed-a3b5355c6ab2", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", npm_config_noproxy: "", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-8.2.1", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "", npm_config_userconfig: "/home/runner/.npmrc", npm_config_local_prefix: "/home/runner/work/CodeGear/CodeGear", SYSTEMD_EXEC_PID: "667", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", COLOR: "0", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.6/x64", NVM_DIR: "/home/runner/.nvm", npm_config_metrics_registry: "https://registry.npmjs.org/", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230724.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", JOURNAL_STREAM: "8:16780", GITHUB_WORKFLOW: "CodeGear CI", _: "/opt/hostedtoolcache/node/16.20.1/x64/bin/npm", npm_config_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", GITHUB_RUN_ID: "5726768725", npm_config_cache: "/home/runner/.npm", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "8374588b72e979f590036af7eb8486e5f12392a0", GITHUB_BASE_REF: "", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/heads/develop", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", npm_config_node_gyp: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.bin:/home/runner/work/CodeGear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_4dc21800-4235-4f8a-a2db-e88d2665e77f", INVOCATION_ID: "83cb2f8c2f094435ae0afd3954bf1e9b", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.11/x64", NODE: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "35", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 3", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "develop", GITHUB_REPOSITORY: "Gearonix/CodeGear", npm_lifecycle_script: "nx run-many --targets=build --all", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", STATS_NM: "true", npm_package_version: "0.0.0", npm_lifecycle_event: "build", NODE_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/bin/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/node_modules", GITHUB_REF_PROTECTED: "false", npm_config_strict_peer_dependencies: "", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "8374588b72e979f590036af7eb8486e5f12392a0", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/heads/develop", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", npm_config_globalconfig: "/opt/hostedtoolcache/node/16.20.1/x64/etc/npmrc", npm_config_init_module: "/home/runner/.npm-init.js", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_86394af3-b4bf-426a-90ed-a3b5355c6ab2", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", npm_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/bin/npm-cli.js", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "push", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_86394af3-b4bf-426a-90ed-a3b5355c6ab2", npm_config_global_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", npm_command: "run-script", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_86394af3-b4bf-426a-90ed-a3b5355c6ab2", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", EDITOR: "vi", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/15228585155065571407", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "15228585155065571407", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.SC_DISABLE_SPEEDY !== "" && { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_86394af3-b4bf-426a-90ed-a3b5355c6ab2", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "npm/8.19.4 node/v16.20.1 linux x64 workspaces/false ci/github-actions", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_86394af3-b4bf-426a-90ed-a3b5355c6ab2", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", npm_config_noproxy: "", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-8.2.1", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "", npm_config_userconfig: "/home/runner/.npmrc", npm_config_local_prefix: "/home/runner/work/CodeGear/CodeGear", SYSTEMD_EXEC_PID: "667", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", COLOR: "0", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.6/x64", NVM_DIR: "/home/runner/.nvm", npm_config_metrics_registry: "https://registry.npmjs.org/", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230724.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", JOURNAL_STREAM: "8:16780", GITHUB_WORKFLOW: "CodeGear CI", _: "/opt/hostedtoolcache/node/16.20.1/x64/bin/npm", npm_config_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", GITHUB_RUN_ID: "5726768725", npm_config_cache: "/home/runner/.npm", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "8374588b72e979f590036af7eb8486e5f12392a0", GITHUB_BASE_REF: "", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/heads/develop", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", npm_config_node_gyp: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.bin:/home/runner/work/CodeGear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_4dc21800-4235-4f8a-a2db-e88d2665e77f", INVOCATION_ID: "83cb2f8c2f094435ae0afd3954bf1e9b", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.11/x64", NODE: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "35", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 3", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "develop", GITHUB_REPOSITORY: "Gearonix/CodeGear", npm_lifecycle_script: "nx run-many --targets=build --all", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", STATS_NM: "true", npm_package_version: "0.0.0", npm_lifecycle_event: "build", NODE_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/bin/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/node_modules", GITHUB_REF_PROTECTED: "false", npm_config_strict_peer_dependencies: "", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "8374588b72e979f590036af7eb8486e5f12392a0", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/heads/develop", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", npm_config_globalconfig: "/opt/hostedtoolcache/node/16.20.1/x64/etc/npmrc", npm_config_init_module: "/home/runner/.npm-init.js", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_86394af3-b4bf-426a-90ed-a3b5355c6ab2", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", npm_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/bin/npm-cli.js", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "push", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_86394af3-b4bf-426a-90ed-a3b5355c6ab2", npm_config_global_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", npm_command: "run-script", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_86394af3-b4bf-426a-90ed-a3b5355c6ab2", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", EDITOR: "vi", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/15228585155065571407", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "15228585155065571407", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.SC_DISABLE_SPEEDY !== "false" && { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_86394af3-b4bf-426a-90ed-a3b5355c6ab2", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "npm/8.19.4 node/v16.20.1 linux x64 workspaces/false ci/github-actions", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_86394af3-b4bf-426a-90ed-a3b5355c6ab2", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", npm_config_noproxy: "", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-8.2.1", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "", npm_config_userconfig: "/home/runner/.npmrc", npm_config_local_prefix: "/home/runner/work/CodeGear/CodeGear", SYSTEMD_EXEC_PID: "667", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", COLOR: "0", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.6/x64", NVM_DIR: "/home/runner/.nvm", npm_config_metrics_registry: "https://registry.npmjs.org/", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230724.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", JOURNAL_STREAM: "8:16780", GITHUB_WORKFLOW: "CodeGear CI", _: "/opt/hostedtoolcache/node/16.20.1/x64/bin/npm", npm_config_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", GITHUB_RUN_ID: "5726768725", npm_config_cache: "/home/runner/.npm", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "8374588b72e979f590036af7eb8486e5f12392a0", GITHUB_BASE_REF: "", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/heads/develop", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", npm_config_node_gyp: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.bin:/home/runner/work/CodeGear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_4dc21800-4235-4f8a-a2db-e88d2665e77f", INVOCATION_ID: "83cb2f8c2f094435ae0afd3954bf1e9b", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.11/x64", NODE: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "35", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 3", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "develop", GITHUB_REPOSITORY: "Gearonix/CodeGear", npm_lifecycle_script: "nx run-many --targets=build --all", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", STATS_NM: "true", npm_package_version: "0.0.0", npm_lifecycle_event: "build", NODE_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/bin/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/node_modules", GITHUB_REF_PROTECTED: "false", npm_config_strict_peer_dependencies: "", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "8374588b72e979f590036af7eb8486e5f12392a0", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/heads/develop", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", npm_config_globalconfig: "/opt/hostedtoolcache/node/16.20.1/x64/etc/npmrc", npm_config_init_module: "/home/runner/.npm-init.js", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_86394af3-b4bf-426a-90ed-a3b5355c6ab2", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", npm_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/bin/npm-cli.js", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "push", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_86394af3-b4bf-426a-90ed-a3b5355c6ab2", npm_config_global_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", npm_command: "run-script", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_86394af3-b4bf-426a-90ed-a3b5355c6ab2", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", EDITOR: "vi", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/15228585155065571407", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "15228585155065571407", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.SC_DISABLE_SPEEDY);
function Di(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  throw new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (n.length > 0 ? " Args: " + n.join(", ") : ""));
}
var Dy = function() {
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
        (a <<= 1) < 0 && Di(16, "" + n);
      this.groupSizes = new Uint32Array(a), this.groupSizes.set(o), this.length = a;
      for (var s = i; s < a; s++)
        this.groupSizes[s] = 0;
    }
    for (var u = this.indexOfGroup(n + 1), c = 0, _ = r.length; c < _; c++)
      this.tag.insertRule(u, r[c]) && (this.groupSizes[n]++, u++);
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
}(), ba = /* @__PURE__ */ new Map(), za = /* @__PURE__ */ new Map(), Mo = 1, $i = function(e) {
  if (ba.has(e))
    return ba.get(e);
  for (; za.has(Mo); )
    Mo++;
  var t = Mo++;
  return ba.set(e, t), za.set(t, e), t;
}, Cy = function(e) {
  return za.get(e);
}, wy = function(e, t) {
  t >= Mo && (Mo = t + 1), ba.set(e, t), za.set(t, e);
}, Uy = "style[" + Jr + '][data-styled-version="5.3.6"]', Py = new RegExp("^" + Jr + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), Hy = function(e, t, n) {
  for (var r, o = n.split(","), i = 0, a = o.length; i < a; i++)
    (r = o[i]) && e.registerName(t, r);
}, ky = function(e, t) {
  for (var n = (t.textContent || "").split(`/*!sc*/
`), r = [], o = 0, i = n.length; o < i; o++) {
    var a = n[o].trim();
    if (a) {
      var s = a.match(Py);
      if (s) {
        var u = 0 | parseInt(s[1], 10), c = s[2];
        u !== 0 && (wy(c, u), Hy(e, c, s[3]), e.getTag().insertRules(u, r)), r.length = 0;
      } else
        r.push(a);
    }
  }
}, My = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, hT = function(e) {
  var t = document.head, n = e || t, r = document.createElement("style"), o = function(s) {
    for (var u = s.childNodes, c = u.length; c >= 0; c--) {
      var _ = u[c];
      if (_ && _.nodeType === 1 && _.hasAttribute(Jr))
        return _;
    }
  }(n), i = o !== void 0 ? o.nextSibling : null;
  r.setAttribute(Jr, "active"), r.setAttribute("data-styled-version", "5.3.6");
  var a = My();
  return a && r.setAttribute("nonce", a), n.insertBefore(r, i), r;
}, xy = function() {
  function e(n) {
    var r = this.element = hT(n);
    r.appendChild(document.createTextNode("")), this.sheet = function(o) {
      if (o.sheet)
        return o.sheet;
      for (var i = document.styleSheets, a = 0, s = i.length; a < s; a++) {
        var u = i[a];
        if (u.ownerNode === o)
          return u;
      }
      Di(17);
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
}(), Ly = function() {
  function e(n) {
    var r = this.element = hT(n);
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
}(), By = function() {
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
}(), Pf = Yl, Fy = { isServer: !Yl, useCSSOMInjection: !Gy }, pT = function() {
  function e(n, r, o) {
    n === void 0 && (n = xn), r === void 0 && (r = {}), this.options = an({}, Fy, {}, n), this.gs = r, this.names = new Map(o), this.server = !!n.isServer, !this.server && Yl && Pf && (Pf = !1, function(i) {
      for (var a = document.querySelectorAll(Uy), s = 0, u = a.length; s < u; s++) {
        var c = a[s];
        c && c.getAttribute(Jr) !== "active" && (ky(i, c), c.parentNode && c.parentNode.removeChild(c));
      }
    }(this));
  }
  e.registerId = function(n) {
    return $i(n);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(n, r) {
    return r === void 0 && (r = !0), new e(an({}, this.options, {}, n), this.gs, r && this.names || void 0);
  }, t.allocateGSInstance = function(n) {
    return this.gs[n] = (this.gs[n] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (o = (r = this.options).isServer, i = r.useCSSOMInjection, a = r.target, n = o ? new By(a) : i ? new xy(a) : new Ly(a), new Dy(n)));
    var n, r, o, i, a;
  }, t.hasNameForId = function(n, r) {
    return this.names.has(n) && this.names.get(n).has(r);
  }, t.registerName = function(n, r) {
    if ($i(n), this.names.has(n))
      this.names.get(n).add(r);
    else {
      var o = /* @__PURE__ */ new Set();
      o.add(r), this.names.set(n, o);
    }
  }, t.insertRules = function(n, r, o) {
    this.registerName(n, r), this.getTag().insertRules($i(n), o);
  }, t.clearNames = function(n) {
    this.names.has(n) && this.names.get(n).clear();
  }, t.clearRules = function(n) {
    this.getTag().clearGroup($i(n)), this.clearNames(n);
  }, t.clearTag = function() {
    this.tag = void 0;
  }, t.toString = function() {
    return function(n) {
      for (var r = n.getTag(), o = r.length, i = "", a = 0; a < o; a++) {
        var s = Cy(a);
        if (s !== void 0) {
          var u = n.names.get(s), c = r.getGroup(a);
          if (u && c && u.size) {
            var _ = Jr + ".g" + a + '[id="' + s + '"]', l = "";
            u !== void 0 && u.forEach(function(d) {
              d.length > 0 && (l += d + ",");
            }), i += "" + c + _ + '{content:"' + l + `"}/*!sc*/
`;
          }
        }
      }
      return i;
    }(this);
  }, e;
}(), jy = /(a)(d)/gi, Hf = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Gc(e) {
  var t, n = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0)
    n = Hf(t % 52) + n;
  return (Hf(t % 52) + n).replace(jy, "$1-$2");
}
var Sr = function(e, t) {
  for (var n = t.length; n; )
    e = 33 * e ^ t.charCodeAt(--n);
  return e;
}, mT = function(e) {
  return Sr(5381, e);
};
function Vy(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (ti(n) && !Xl(n))
      return !1;
  }
  return !0;
}
var Wy = mT("5.3.6"), Xy = function() {
  function e(t, n, r) {
    this.rules = t, this.staticRulesId = "", this.isStatic = (r === void 0 || r.isStatic) && Vy(t), this.componentId = n, this.baseHash = Sr(Wy, n), this.baseStyle = r, pT.registerId(n);
  }
  return e.prototype.generateAndInjectStyles = function(t, n, r) {
    var o = this.componentId, i = [];
    if (this.baseStyle && i.push(this.baseStyle.generateAndInjectStyles(t, n, r)), this.isStatic && !r.hash)
      if (this.staticRulesId && n.hasNameForId(o, this.staticRulesId))
        i.push(this.staticRulesId);
      else {
        var a = Qr(this.rules, t, n, r).join(""), s = Gc(Sr(this.baseHash, a) >>> 0);
        if (!n.hasNameForId(o, s)) {
          var u = r(a, "." + s, void 0, o);
          n.insertRules(o, s, u);
        }
        i.push(s), this.staticRulesId = s;
      }
    else {
      for (var c = this.rules.length, _ = Sr(this.baseHash, r.hash), l = "", d = 0; d < c; d++) {
        var h = this.rules[d];
        if (typeof h == "string")
          l += h;
        else if (h) {
          var f = Qr(h, t, n, r), p = Array.isArray(f) ? f.join("") : f;
          _ = Sr(_, p + d), l += p;
        }
      }
      if (l) {
        var m = Gc(_ >>> 0);
        if (!n.hasNameForId(o, m)) {
          var b = r(l, "." + m, void 0, o);
          n.insertRules(o, m, b);
        }
        i.push(m);
      }
    }
    return i.join(" ");
  }, e;
}(), Yy = /^\s*\/\/.*$/gm, Ky = [":", "[", ".", "#"];
function $y(e) {
  var t, n, r, o, i = e === void 0 ? xn : e, a = i.options, s = a === void 0 ? xn : a, u = i.plugins, c = u === void 0 ? $a : u, _ = new hy(s), l = [], d = function(p) {
    function m(b) {
      if (b)
        try {
          p(b + "}");
        } catch {
        }
    }
    return function(b, T, E, g, O, I, N, w, G, D) {
      switch (b) {
        case 1:
          if (G === 0 && T.charCodeAt(0) === 64)
            return p(T + ";"), "";
          break;
        case 2:
          if (w === 0)
            return T + "/*|*/";
          break;
        case 3:
          switch (w) {
            case 102:
            case 112:
              return p(E[0] + T), "";
            default:
              return T + (D === 0 ? "/*|*/" : "");
          }
        case -2:
          T.split("/*|*/}").forEach(m);
      }
    };
  }(function(p) {
    l.push(p);
  }), h = function(p, m, b) {
    return m === 0 && Ky.indexOf(b[n.length]) !== -1 || b.match(o) ? p : "." + t;
  };
  function f(p, m, b, T) {
    T === void 0 && (T = "&");
    var E = p.replace(Yy, ""), g = m && b ? b + " " + m + " { " + E + " }" : E;
    return t = T, n = m, r = new RegExp("\\" + n + "\\b", "g"), o = new RegExp("(\\" + n + "\\b){2,}"), _(b || !m ? "" : m, g);
  }
  return _.use([].concat(c, [function(p, m, b) {
    p === 2 && b.length && b[0].lastIndexOf(n) > 0 && (b[0] = b[0].replace(r, h));
  }, d, function(p) {
    if (p === -2) {
      var m = l;
      return l = [], m;
    }
  }])), f.hash = c.length ? c.reduce(function(p, m) {
    return m.name || Di(15), Sr(p, m.name);
  }, 5381).toString() : "", f;
}
var TT = Pe.createContext();
TT.Consumer;
var ET = Pe.createContext(), zy = (ET.Consumer, new pT()), Dc = $y();
function qy() {
  return it(TT) || zy;
}
function Jy() {
  return it(ET) || Dc;
}
var Qy = function() {
  function e(t, n) {
    var r = this;
    this.inject = function(o, i) {
      i === void 0 && (i = Dc);
      var a = r.name + i.hash;
      o.hasNameForId(r.id, a) || o.insertRules(r.id, a, i(r.rules, a, "@keyframes"));
    }, this.toString = function() {
      return Di(12, String(r.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = n;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = Dc), this.name + t.hash;
  }, e;
}(), Zy = /([A-Z])/, e0 = /([A-Z])/g, t0 = /^ms-/, n0 = function(e) {
  return "-" + e.toLowerCase();
};
function kf(e) {
  return Zy.test(e) ? e.replace(e0, n0).replace(t0, "-ms-") : e;
}
var Mf = function(e) {
  return e == null || e === !1 || e === "";
};
function Qr(e, t, n, r) {
  if (Array.isArray(e)) {
    for (var o, i = [], a = 0, s = e.length; a < s; a += 1)
      (o = Qr(e[a], t, n, r)) !== "" && (Array.isArray(o) ? i.push.apply(i, o) : i.push(o));
    return i;
  }
  if (Mf(e))
    return "";
  if (Xl(e))
    return "." + e.styledComponentId;
  if (ti(e)) {
    if (typeof (c = e) != "function" || c.prototype && c.prototype.isReactComponent || !t)
      return e;
    var u = e(t);
    return Qr(u, t, n, r);
  }
  var c;
  return e instanceof Qy ? n ? (e.inject(n, r), e.getName(r)) : e : Sc(e) ? function _(l, d) {
    var h, f, p = [];
    for (var m in l)
      l.hasOwnProperty(m) && !Mf(l[m]) && (Array.isArray(l[m]) && l[m].isCss || ti(l[m]) ? p.push(kf(m) + ":", l[m], ";") : Sc(l[m]) ? p.push.apply(p, _(l[m], m)) : p.push(kf(m) + ": " + (h = m, (f = l[m]) == null || typeof f == "boolean" || f === "" ? "" : typeof f != "number" || f === 0 || h in py ? String(f).trim() : f + "px") + ";"));
    return d ? [d + " {"].concat(p, ["}"]) : p;
  }(e) : e.toString();
}
var xf = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function Bt(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  return ti(e) || Sc(e) ? xf(Qr(wf($a, [e].concat(n)))) : n.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : xf(Qr(wf(e, n)));
}
var r0 = function(e, t, n) {
  return n === void 0 && (n = xn), e.theme !== n.theme && e.theme || t || n.theme;
}, o0 = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, i0 = /(^-|-$)/g;
function Su(e) {
  return e.replace(o0, "-").replace(i0, "");
}
var a0 = function(e) {
  return Gc(mT(e) >>> 0);
};
function zi(e) {
  return typeof e == "string" && !0;
}
var Cc = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, s0 = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function u0(e, t, n) {
  var r = e[n];
  Cc(t) && Cc(r) ? bT(r, t) : e[n] = t;
}
function bT(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  for (var o = 0, i = n; o < i.length; o++) {
    var a = i[o];
    if (Cc(a))
      for (var s in a)
        s0(s) && u0(e, a[s], s);
  }
  return e;
}
var Kl = Pe.createContext();
Kl.Consumer;
var Gu = {};
function OT(e, t, n) {
  var r = Xl(e), o = !zi(e), i = t.attrs, a = i === void 0 ? $a : i, s = t.componentId, u = s === void 0 ? function(T, E) {
    var g = typeof T != "string" ? "sc" : Su(T);
    Gu[g] = (Gu[g] || 0) + 1;
    var O = g + "-" + a0("5.3.6" + g + Gu[g]);
    return E ? E + "-" + O : O;
  }(t.displayName, t.parentComponentId) : s, c = t.displayName, _ = c === void 0 ? function(T) {
    return zi(T) ? "styled." + T : "Styled(" + Uf(T) + ")";
  }(e) : c, l = t.displayName && t.componentId ? Su(t.displayName) + "-" + t.componentId : t.componentId || u, d = r && e.attrs ? Array.prototype.concat(e.attrs, a).filter(Boolean) : a, h = t.shouldForwardProp;
  r && e.shouldForwardProp && (h = t.shouldForwardProp ? function(T, E, g) {
    return e.shouldForwardProp(T, E, g) && t.shouldForwardProp(T, E, g);
  } : e.shouldForwardProp);
  var f, p = new Xy(n, l, r ? e.componentStyle : void 0), m = p.isStatic && a.length === 0, b = function(T, E) {
    return function(g, O, I, N) {
      var w = g.attrs, G = g.componentStyle, D = g.defaultProps, Z = g.foldedComponentIds, ne = g.shouldForwardProp, J = g.styledComponentId, B = g.target, H = function(V, R, re) {
        V === void 0 && (V = xn);
        var U = an({}, R, { theme: V }), Ee = {};
        return re.forEach(function(ce) {
          var Re, ee, Ye, at = ce;
          for (Re in ti(at) && (at = at(U)), at)
            U[Re] = Ee[Re] = Re === "className" ? (ee = Ee[Re], Ye = at[Re], ee && Ye ? ee + " " + Ye : ee || Ye) : at[Re];
        }), [U, Ee];
      }(r0(O, it(Kl), D) || xn, O, w), Q = H[0], ue = H[1], oe = function(V, R, re, U) {
        var Ee = qy(), ce = Jy(), Re = R ? V.generateAndInjectStyles(xn, Ee, ce) : V.generateAndInjectStyles(re, Ee, ce);
        return Re;
      }(G, N, Q), Se = I, Le = ue.$as || O.$as || ue.as || O.as || B, Ae = zi(Le), C = ue !== O ? an({}, O, {}, ue) : O, x = {};
      for (var k in C)
        k[0] !== "$" && k !== "as" && (k === "forwardedAs" ? x.as = C[k] : (ne ? ne(k, yf, Le) : !Ae || yf(k)) && (x[k] = C[k]));
      return O.style && ue.style !== O.style && (x.style = an({}, O.style, {}, ue.style)), x.className = Array.prototype.concat(Z, J, oe !== J ? oe : null, O.className, ue.className).filter(Boolean).join(" "), x.ref = Se, ab(Le, x);
    }(f, T, E, m);
  };
  return b.displayName = _, (f = Pe.forwardRef(b)).attrs = d, f.componentStyle = p, f.displayName = _, f.shouldForwardProp = h, f.foldedComponentIds = r ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : $a, f.styledComponentId = l, f.target = r ? e.target : e, f.withComponent = function(T) {
    var E = t.componentId, g = function(I, N) {
      if (I == null)
        return {};
      var w, G, D = {}, Z = Object.keys(I);
      for (G = 0; G < Z.length; G++)
        w = Z[G], N.indexOf(w) >= 0 || (D[w] = I[w]);
      return D;
    }(t, ["componentId"]), O = E && E + "-" + (zi(T) ? T : Su(Uf(T)));
    return OT(T, an({}, g, { attrs: d, componentId: O }), n);
  }, Object.defineProperty(f, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(T) {
    this._foldedDefaultProps = r ? bT({}, e.defaultProps, T) : T;
  } }), f.toString = function() {
    return "." + f.styledComponentId;
  }, o && Sy(f, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), f;
}
var wc = function(e) {
  return function t(n, r, o) {
    if (o === void 0 && (o = xn), !lT.isValidElementType(r))
      return Di(1, String(r));
    var i = function() {
      return n(r, o, Bt.apply(void 0, arguments));
    };
    return i.withConfig = function(a) {
      return t(n, r, an({}, o, {}, a));
    }, i.attrs = function(a) {
      return t(n, r, an({}, o, { attrs: Array.prototype.concat(o.attrs, a).filter(Boolean) }));
    }, i;
  }(OT, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  wc[e] = wc(e);
});
var c0 = function() {
  return it(Kl);
};
const Ue = wc, It = (e = "100%", t = e) => Bt`
  width: ${e};
  height: ${t};
`;
Bt`
  border: 1px solid red;
`;
const l0 = (e) => Bt`
  padding-left: ${e}px;
  padding-right: ${e}px;
`, _r = (e = "flex-start", t = "stretch", n = "row") => Bt`
  display: flex;
  justify-content: ${e};
  align-items: ${t};
  flex-direction: ${n};
`, Uc = (e) => Bt`
  transition: color 200ms;
  &:hover {
    color: ${e};
  }
`, Oa = (e) => ({ theme: t }) => `${t[e]} !important;`, $l = (e = "&") => Bt`
  ${e}::-webkit-scrollbar {
    width: 10px;
  }

  ${e}::-webkit-scrollbar-track {
    background-color: ${({ theme: t }) => t.lightGrey};
  }

  ${e}::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
`, ot = (e) => Bt`
  ${({ theme: t }) => t[e]}
`, gT = (e) => Bt`
  position: absolute;
  ${Object.entries(e).map(([t, n]) => `${t}: ${n};`).join(`
`)}
`, _0 = (e, t) => Bt`
  margin-left: ${e}px;
  margin-top: ${t}px;
`, d0 = Bt`
  -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
`, f0 = "1px solid", UU = Ue.div`
  ${_r("center", "center")};
  ${gT({
  left: "0",
  top: "0"
})}
  ${It("100vw", "100vh")};
  background: rgba(0, 0, 0, 0.44);
  z-index: 100;
`, PU = Ue.div`
  display: grid;
  position: relative;
  width: ${({ $width: e }) => e ?? 50}vw;
  height: ${({ $height: e }) => e ?? 60}vh;
  background: ${ot("grey")};
  border: 2px solid ${ot("lightGrey")};
  min-height: 300px;
  border-radius: 6px;
  cursor: grab;
  ${d0};
  touch-action: none;
  overflow-y: auto;
  scroll-behavior: smooth;
  ${$l()};
`, HU = Ue.div`
  margin: 0 auto;
  margin-top: 18px;
  ${It("60%", "100%")}
  & > * {
    cursor: initial;
    color: ${ot("light")};
  }
`, kU = Ue.h1`
  text-align: center;
  padding-bottom: 18px;
  margin-bottom: 30px;
  font-size: ${({ theme: e }) => e.fz10};
  border-bottom: ${f0} ${ot("lightGrey")};
`, MU = Ue.div`
  background: ${ot("lightGrey")};
  ${It("100%", "2px")};
  margin-bottom: 30px;
  margin-top: -8px;
`, h0 = (e, t) => {
  const { Spring: n, Gesture: r } = Ss(), [{ y: o }, i] = n.useSpring(() => ({ y: t })), a = () => {
    i.start({ y: 0, immediate: !1, config: n.config.gentle });
  }, s = (l = 0) => {
    e(), i.start({
      y: t,
      immediate: !1,
      config: { ...n.config.stiff, velocity: l }
    });
  }, u = r.useDrag(
    ({ last: l, velocity: [, d], direction: [, h], offset: [, f], cancel: p }) => {
      f < -70 && p(), l ? f > t * 0.5 || d > 0.5 && h === 1 ? s(d) : a() : i.start({ y: f, immediate: h === -1 });
    },
    {
      from: () => [0, o.get()],
      filterTaps: !0,
      bounds: { top: 0 },
      rubberband: !0
    }
  ), c = o.to((l) => l < t ? "block" : "none");
  return {
    toggle: (l) => {
      l ? a() : s();
    },
    bind: u,
    div: n.a.div,
    springs: {
      display: c,
      y: o
    }
  };
}, p0 = Ue.div`
  padding-left: 15px;
  z-index: 15;
  position: fixed;
  right: 0;
  height: calc(100vh + 100px);
  width: calc(100% - 54px);
  border-radius: 6px 6px 0;
  background: ${ot("darkBlue")};
  border-top: 2px solid ${ot("lightGrey")};
  touch-action: none;
  bottom: ${({ $bottom: e }) => `calc(-100vh + ${e - 100}px)`};
  overflow-y: auto;
  box-sizing: border-box;
  scroll-behavior: smooth;
  ${$l()};
`, m0 = ({ children: e, onClose: t, isOpen: n, height: r }) => {
  const o = h0(t, r);
  return xe(() => {
    o.toggle(n);
  }, [n]), /* @__PURE__ */ K(
    p0,
    {
      $bottom: r,
      ...o.bind(),
      style: o.springs,
      as: o.div,
      children: e
    }
  );
}, T0 = (e) => /* @__PURE__ */ K(Ll, { children: /* @__PURE__ */ K(m0, { ...e }) }), RT = ({
  onChange: e,
  value: t,
  options: n,
  defaultValue: r
}) => /* @__PURE__ */ K(
  db,
  {
    size: "middle",
    onChange: e,
    value: t,
    style: { width: 200 },
    options: n,
    defaultValue: r
  }
), E0 = Tn(({ onChange: e }) => {
  const { fontSize: t, tabSize: n } = ro(), r = ds(), o = r.getActiveTabText(), i = r.getActiveLanguage();
  return /* @__PURE__ */ K(
    SR,
    {
      height: "90vh",
      theme: "vs-dark",
      onChange: e,
      language: i,
      value: pp(o),
      options: Tg({
        fontSize: t,
        tabSize: n
      })
    }
  );
}), b0 = ({ children: e }) => {
  const { Spring: t } = Ss(), n = t.useSpring({
    from: {
      opacity: 0,
      x: 100
    },
    to: {
      opacity: 1,
      x: 0
    },
    config: t.config.stiff
  });
  return /* @__PURE__ */ K(t.a.div, { style: { ...n }, children: e });
}, O0 = (e) => /* @__PURE__ */ K(b0, { children: /* @__PURE__ */ K(E0, { ...e }) }), zl = {
  js: "javascript",
  ts: "typescript",
  tsx: "typescript",
  jsx: "typescript",
  html: "html",
  htm: "html",
  txt: "text",
  css: "css",
  py: "python",
  cpp: "cpp",
  go: "go",
  c: "c",
  java: "java"
}, g0 = [
  "java",
  "python",
  "cpp",
  "c",
  "go",
  "javascript"
], R0 = () => [...new Set(Object.values(zl))].map((t) => ({
  value: t,
  label: t
})), v0 = Tn(() => {
  const e = R0(), t = ds(), n = t.getActiveLanguage(), r = t.getActiveTab();
  return /* @__PURE__ */ K(
    RT,
    {
      onChange: (i) => {
        r.lang = i;
      },
      value: n,
      options: e
    }
  );
}), vT = "Custom", N0 = [
  "vs-dark",
  "Monokai",
  "Dracula",
  "Dreamweaver",
  "GitHub",
  "Nord",
  "Twilight",
  "IDLE",
  "Eiffel",
  "Tomorrow",
  vT
], I0 = Tn(() => {
  const e = zn(), { theme: t } = ro();
  return /* @__PURE__ */ K(
    RT,
    {
      defaultValue: "vs-dark",
      onChange: (r) => {
        e.changeTheme(r);
      },
      value: t,
      options: N0.map((r) => ({
        value: r,
        label: r
      }))
    }
  );
});
let qi;
const A0 = new Uint8Array(16);
function y0() {
  if (!qi && (qi = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !qi))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return qi(A0);
}
const qe = [];
for (let e = 0; e < 256; ++e)
  qe.push((e + 256).toString(16).slice(1));
function S0(e, t = 0) {
  return (qe[e[t + 0]] + qe[e[t + 1]] + qe[e[t + 2]] + qe[e[t + 3]] + "-" + qe[e[t + 4]] + qe[e[t + 5]] + "-" + qe[e[t + 6]] + qe[e[t + 7]] + "-" + qe[e[t + 8]] + qe[e[t + 9]] + "-" + qe[e[t + 10]] + qe[e[t + 11]] + qe[e[t + 12]] + qe[e[t + 13]] + qe[e[t + 14]] + qe[e[t + 15]]).toLowerCase();
}
const G0 = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Lf = {
  randomUUID: G0
};
function D0(e, t, n) {
  if (Lf.randomUUID && !t && !e)
    return Lf.randomUUID();
  e = e || {};
  const r = e.random || (e.rng || y0)();
  if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, t) {
    n = n || 0;
    for (let o = 0; o < 16; ++o)
      t[n + o] = r[o];
    return t;
  }
  return S0(r);
}
const C0 = ({
  fileData: e,
  lastNumber: t
}) => ({
  fileHandle: e?.fileHandle ?? null,
  content: e?.content ?? "",
  label: e?.name ?? "Untitled",
  lang: e?.language ?? "text",
  idx: t ? t + 1 : 0,
  key: D0(),
  wasChanged: !1
}), NT = 9, xU = [14, 16, 18, 20, 22, 24, 26], LU = [4, 2], w0 = (e) => e.length >= NT;
class U0 {
  constructor(t) {
    Yn(this), this.state = t;
  }
  createTab(t) {
    const n = this.state.content;
    if (w0(n))
      return null;
    const r = n.at(-1)?.idx, o = C0({ fileData: t, lastNumber: r });
    return this.state.activeKey = o.key, this.state.content.push(o), o;
  }
  removeTab(t) {
    const n = this.state.getters.getTabIndex(t), r = this.state.content[n - 1];
    this.state.content.splice(n, 1), t === this.state.activeKey && (this.state.activeKey = r.key);
  }
  changeActiveTab(t) {
    this.state.activeKey = t;
  }
}
const P0 = () => {
  const [e, t] = ft(null);
  return {
    protect: (n) => (...r) => {
      e || n(...r);
    },
    off: () => {
      t(null);
    },
    on: (n) => {
      t(n);
    },
    val: e
  };
}, H0 = (e) => e.map((t) => ({
  label: t.label,
  key: t.key
})), k0 = Ue(yh)`
  color: ${Oa("secondaryGrey")};
  height: 50px;
  margin: 12px;
  min-width: 300px;
  .ant-tabs-nav::before {
    border-bottom: none;
  }
  .ant-tabs-tab {
    background: ${Oa("grey")};
  }
  .ant-tabs-tab-active {
    background: #2e3139 !important;
  }
  .ant-tabs-tab-btn {
    color: ${Oa("secondaryGrey")};
  }
`, M0 = Tn(() => {
  const { activeKey: e, content: t } = ro(), n = zn(), r = H0(t), o = P0(), i = o.protect(
    (u, c) => {
      if (c === "add")
        n.tabs.createTab();
      else {
        if (t.length === 1)
          return;
        o.on(u);
      }
    }
  ), a = o.protect((u) => {
    n.tabs.changeActiveTab(u);
  });
  return /* @__PURE__ */ K(Ih, { children: /* @__PURE__ */ K(
    fb,
    {
      title: "Delete the tab",
      description: "Are you sure to delete this tab?",
      okText: "Yes",
      cancelText: "No",
      onConfirm: () => {
        n.tabs.removeTab(o.val), o.off();
      },
      open: !!o.val,
      onCancel: o.off,
      arrow: !1,
      children: /* @__PURE__ */ K(
        k0,
        {
          type: "editable-card",
          onChange: a,
          activeKey: e,
          onEdit: i,
          items: pp(r),
          hideAdd: t.length >= NT
        }
      )
    }
  ) });
}), x0 = [1, 2, 3, 4, 5, 6, 7, 8, 9], L0 = () => {
  const e = Km(), { tabs: t } = zn(), { content: n } = ro();
  xe(() => (e.on(
    Object.fromEntries(
      x0.map((r) => {
        const i = n[r - 1]?.key;
        return [r.toString(), i ? () => t.changeActiveTab(i) : null];
      })
    )
  ), () => {
    e.clear();
  }), [n.length]);
}, B0 = (e) => DR(e) ? "name" in e && typeof e.name == "string" && "type" in e && typeof e.type == "string" && "content" in e && typeof e.content == "string" : !1, IT = (e) => {
  const t = e.split(".").at(-1);
  return F0(t) ? [zl[t], t] : ["text", t];
};
function F0(e) {
  return e in zl;
}
const AT = {
  ThemeUpload: (e) => `Unable to upload theme - ${e}.json`,
  NotSupportedByBrowser: () => "Your browser does not support saving and opening files.",
  WrongJsonObject: (e) => `Incoming json object should be must be ${e} type.`,
  WrongResponseType: (e) => `Incoming response object should be must be ${e} type.`
}, j0 = {
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
}, V0 = () => async () => {
  if ("showOpenFilePicker" in window) {
    const [e] = await window.showOpenFilePicker(j0), t = await e.getFile(), n = await t.text(), [r] = IT(t.name);
    return {
      name: t.name,
      type: t.type,
      content: n,
      fileHandle: e,
      language: r
    };
  }
  console.warn(AT.NotSupportedByBrowser());
}, W0 = () => async (e, t) => {
  try {
    let n = e;
    CR(e?.createWritable) || (n = await window.showSaveFilePicker());
    const r = await n.createWritable();
    return await r.write(t), await r.close(), n;
  } catch {
    console.warn(AT.NotSupportedByBrowser());
  }
}, yT = () => {
  const e = V0(), t = W0(), n = zn(), r = ds();
  return {
    openFile: Fn(async () => {
      const a = await e();
      B0(a) && n.tabs.createTab(a);
    }, [n.tabs, e]),
    saveFile: async () => {
      const a = r.getActiveTab(), s = a.fileHandle, u = a.content;
      if (!a.wasChanged)
        return;
      const c = await t(s, u);
      c && (a.fileHandle = c, a.lang = IT(c.name));
    }
  };
};
var Nn = /* @__PURE__ */ ((e) => (e.O = "O", e.S = "S", e.N = "N", e.T = "T", e.P = "P", e.J = "J", e.Q = "Q", e))(Nn || {});
const X0 = () => {
  const e = zn(), t = Km(), { openFile: n, saveFile: r } = yT();
  L0();
  const o = bg("isTerminalOpened"), i = cr(), a = Fn(() => {
    i.toggle("isSettingsOpened");
  }, [i]);
  xe(() => (t.on({
    [Nn.O]: n,
    [Nn.S]: r,
    [Nn.N]: () => {
      e.tabs.createTab();
    },
    [Nn.T]: () => {
      e.tabs.removeTab();
    },
    [Nn.P]: o("terminal"),
    [Nn.J]: o("test_cases"),
    [Nn.Q]: a
  }), () => {
    t.clear();
  }), [i.state.isSettingsOpened]);
}, Y0 = Ue.div`
  width: 100%;
`, K0 = Ue.div`
  ${_r("space-between")}
  ${It("100%", "48px")}
  margin-bottom: 10px;
`, $0 = Ue.div`
  width: 30%;
  display: flex;
  gap: 30px;
  align-items: flex-end;
`, BU = Tn(() => {
  const e = zn(), { theme: t, content: n, customBackground: r, customColor: o } = ro(), i = gg(), a = lU(), s = qA(() => {
    i.set("EDITOR_CONTENT_DATA", n);
  }, 1e3);
  X0();
  const u = Hp(), c = (_) => {
    kp(_) && (e.editor.saveContent(_), s());
  };
  return xe(() => {
    u?.editor.setTheme(t);
  }, [t]), xe(() => {
    a({
      background: r,
      color: o
    });
  }, [r, o]), /* @__PURE__ */ mt(Y0, { children: [
    /* @__PURE__ */ mt(K0, { children: [
      /* @__PURE__ */ K(M0, {}),
      /* @__PURE__ */ mt($0, { children: [
        /* @__PURE__ */ K(I0, {}),
        /* @__PURE__ */ K(v0, {})
      ] })
    ] }),
    /* @__PURE__ */ K(Ll, { children: /* @__PURE__ */ K(O0, { onChange: c }) })
  ] });
});
function z0(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
//! moment.js
//! version : 2.29.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var ST;
function L() {
  return ST.apply(null, arguments);
}
function q0(e) {
  ST = e;
}
function Mt(e) {
  return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]";
}
function nr(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Object]";
}
function pe(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function ql(e) {
  if (Object.getOwnPropertyNames)
    return Object.getOwnPropertyNames(e).length === 0;
  var t;
  for (t in e)
    if (pe(e, t))
      return !1;
  return !0;
}
function st(e) {
  return e === void 0;
}
function pn(e) {
  return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]";
}
function Ci(e) {
  return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
}
function GT(e, t) {
  var n = [], r, o = e.length;
  for (r = 0; r < o; ++r)
    n.push(t(e[r], r));
  return n;
}
function Cn(e, t) {
  for (var n in t)
    pe(t, n) && (e[n] = t[n]);
  return pe(t, "toString") && (e.toString = t.toString), pe(t, "valueOf") && (e.valueOf = t.valueOf), e;
}
function Zt(e, t, n, r) {
  return ZT(e, t, n, r, !0).utc();
}
function J0() {
  return {
    empty: !1,
    unusedTokens: [],
    unusedInput: [],
    overflow: -2,
    charsLeftOver: 0,
    nullInput: !1,
    invalidEra: null,
    invalidMonth: null,
    invalidFormat: !1,
    userInvalidated: !1,
    iso: !1,
    parsedDateParts: [],
    era: null,
    meridiem: null,
    rfc2822: !1,
    weekdayMismatch: !1
  };
}
function te(e) {
  return e._pf == null && (e._pf = J0()), e._pf;
}
var Pc;
Array.prototype.some ? Pc = Array.prototype.some : Pc = function(e) {
  var t = Object(this), n = t.length >>> 0, r;
  for (r = 0; r < n; r++)
    if (r in t && e.call(this, t[r], r, t))
      return !0;
  return !1;
};
function Jl(e) {
  if (e._isValid == null) {
    var t = te(e), n = Pc.call(t.parsedDateParts, function(o) {
      return o != null;
    }), r = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n);
    if (e._strict && (r = r && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === void 0), Object.isFrozen == null || !Object.isFrozen(e))
      e._isValid = r;
    else
      return r;
  }
  return e._isValid;
}
function Ds(e) {
  var t = Zt(NaN);
  return e != null ? Cn(te(t), e) : te(t).userInvalidated = !0, t;
}
var Bf = L.momentProperties = [], Du = !1;
function Ql(e, t) {
  var n, r, o, i = Bf.length;
  if (st(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), st(t._i) || (e._i = t._i), st(t._f) || (e._f = t._f), st(t._l) || (e._l = t._l), st(t._strict) || (e._strict = t._strict), st(t._tzm) || (e._tzm = t._tzm), st(t._isUTC) || (e._isUTC = t._isUTC), st(t._offset) || (e._offset = t._offset), st(t._pf) || (e._pf = te(t)), st(t._locale) || (e._locale = t._locale), i > 0)
    for (n = 0; n < i; n++)
      r = Bf[n], o = t[r], st(o) || (e[r] = o);
  return e;
}
function wi(e) {
  Ql(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = /* @__PURE__ */ new Date(NaN)), Du === !1 && (Du = !0, L.updateOffset(this), Du = !1);
}
function xt(e) {
  return e instanceof wi || e != null && e._isAMomentObject != null;
}
function DT(e) {
  L.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + e);
}
function yt(e, t) {
  var n = !0;
  return Cn(function() {
    if (L.deprecationHandler != null && L.deprecationHandler(null, e), n) {
      var r = [], o, i, a, s = arguments.length;
      for (i = 0; i < s; i++) {
        if (o = "", typeof arguments[i] == "object") {
          o += `
[` + i + "] ";
          for (a in arguments[0])
            pe(arguments[0], a) && (o += a + ": " + arguments[0][a] + ", ");
          o = o.slice(0, -2);
        } else
          o = arguments[i];
        r.push(o);
      }
      DT(
        e + `
Arguments: ` + Array.prototype.slice.call(r).join("") + `
` + new Error().stack
      ), n = !1;
    }
    return t.apply(this, arguments);
  }, t);
}
var Ff = {};
function CT(e, t) {
  L.deprecationHandler != null && L.deprecationHandler(e, t), Ff[e] || (DT(t), Ff[e] = !0);
}
L.suppressDeprecationWarnings = !1;
L.deprecationHandler = null;
function en(e) {
  return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
}
function Q0(e) {
  var t, n;
  for (n in e)
    pe(e, n) && (t = e[n], en(t) ? this[n] = t : this["_" + n] = t);
  this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp(
    (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
  );
}
function Hc(e, t) {
  var n = Cn({}, e), r;
  for (r in t)
    pe(t, r) && (nr(e[r]) && nr(t[r]) ? (n[r] = {}, Cn(n[r], e[r]), Cn(n[r], t[r])) : t[r] != null ? n[r] = t[r] : delete n[r]);
  for (r in e)
    pe(e, r) && !pe(t, r) && nr(e[r]) && (n[r] = Cn({}, n[r]));
  return n;
}
function Zl(e) {
  e != null && this.set(e);
}
var kc;
Object.keys ? kc = Object.keys : kc = function(e) {
  var t, n = [];
  for (t in e)
    pe(e, t) && n.push(t);
  return n;
};
var Z0 = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function e1(e, t, n) {
  var r = this._calendar[e] || this._calendar.sameElse;
  return en(r) ? r.call(t, n) : r;
}
function qt(e, t, n) {
  var r = "" + Math.abs(e), o = t - r.length, i = e >= 0;
  return (i ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, o)).toString().substr(1) + r;
}
var e_ = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, Ji = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, Cu = {}, Pr = {};
function W(e, t, n, r) {
  var o = r;
  typeof r == "string" && (o = function() {
    return this[r]();
  }), e && (Pr[e] = o), t && (Pr[t[0]] = function() {
    return qt(o.apply(this, arguments), t[1], t[2]);
  }), n && (Pr[n] = function() {
    return this.localeData().ordinal(
      o.apply(this, arguments),
      e
    );
  });
}
function t1(e) {
  return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
}
function n1(e) {
  var t = e.match(e_), n, r;
  for (n = 0, r = t.length; n < r; n++)
    Pr[t[n]] ? t[n] = Pr[t[n]] : t[n] = t1(t[n]);
  return function(o) {
    var i = "", a;
    for (a = 0; a < r; a++)
      i += en(t[a]) ? t[a].call(o, e) : t[a];
    return i;
  };
}
function ga(e, t) {
  return e.isValid() ? (t = wT(t, e.localeData()), Cu[t] = Cu[t] || n1(t), Cu[t](e)) : e.localeData().invalidDate();
}
function wT(e, t) {
  var n = 5;
  function r(o) {
    return t.longDateFormat(o) || o;
  }
  for (Ji.lastIndex = 0; n >= 0 && Ji.test(e); )
    e = e.replace(
      Ji,
      r
    ), Ji.lastIndex = 0, n -= 1;
  return e;
}
var r1 = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function o1(e) {
  var t = this._longDateFormat[e], n = this._longDateFormat[e.toUpperCase()];
  return t || !n ? t : (this._longDateFormat[e] = n.match(e_).map(function(r) {
    return r === "MMMM" || r === "MM" || r === "DD" || r === "dddd" ? r.slice(1) : r;
  }).join(""), this._longDateFormat[e]);
}
var i1 = "Invalid date";
function a1() {
  return this._invalidDate;
}
var s1 = "%d", u1 = /\d{1,2}/;
function c1(e) {
  return this._ordinal.replace("%d", e);
}
var l1 = {
  future: "in %s",
  past: "%s ago",
  s: "a few seconds",
  ss: "%d seconds",
  m: "a minute",
  mm: "%d minutes",
  h: "an hour",
  hh: "%d hours",
  d: "a day",
  dd: "%d days",
  w: "a week",
  ww: "%d weeks",
  M: "a month",
  MM: "%d months",
  y: "a year",
  yy: "%d years"
};
function _1(e, t, n, r) {
  var o = this._relativeTime[n];
  return en(o) ? o(e, t, n, r) : o.replace(/%d/i, e);
}
function d1(e, t) {
  var n = this._relativeTime[e > 0 ? "future" : "past"];
  return en(n) ? n(t) : n.replace(/%s/i, t);
}
var xo = {};
function et(e, t) {
  var n = e.toLowerCase();
  xo[n] = xo[n + "s"] = xo[t] = e;
}
function St(e) {
  return typeof e == "string" ? xo[e] || xo[e.toLowerCase()] : void 0;
}
function t_(e) {
  var t = {}, n, r;
  for (r in e)
    pe(e, r) && (n = St(r), n && (t[n] = e[r]));
  return t;
}
var UT = {};
function tt(e, t) {
  UT[e] = t;
}
function f1(e) {
  var t = [], n;
  for (n in e)
    pe(e, n) && t.push({ unit: n, priority: UT[n] });
  return t.sort(function(r, o) {
    return r.priority - o.priority;
  }), t;
}
function Cs(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
}
function bt(e) {
  return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
}
function ie(e) {
  var t = +e, n = 0;
  return t !== 0 && isFinite(t) && (n = bt(t)), n;
}
function so(e, t) {
  return function(n) {
    return n != null ? (PT(this, e, n), L.updateOffset(this, t), this) : qa(this, e);
  };
}
function qa(e, t) {
  return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN;
}
function PT(e, t, n) {
  e.isValid() && !isNaN(n) && (t === "FullYear" && Cs(e.year()) && e.month() === 1 && e.date() === 29 ? (n = ie(n), e._d["set" + (e._isUTC ? "UTC" : "") + t](
    n,
    e.month(),
    Ms(n, e.month())
  )) : e._d["set" + (e._isUTC ? "UTC" : "") + t](n));
}
function h1(e) {
  return e = St(e), en(this[e]) ? this[e]() : this;
}
function p1(e, t) {
  if (typeof e == "object") {
    e = t_(e);
    var n = f1(e), r, o = n.length;
    for (r = 0; r < o; r++)
      this[n[r].unit](e[n[r].unit]);
  } else if (e = St(e), en(this[e]))
    return this[e](t);
  return this;
}
var HT = /\d/, Tt = /\d\d/, kT = /\d{3}/, n_ = /\d{4}/, ws = /[+-]?\d{6}/, De = /\d\d?/, MT = /\d\d\d\d?/, xT = /\d\d\d\d\d\d?/, Us = /\d{1,3}/, r_ = /\d{1,4}/, Ps = /[+-]?\d{1,6}/, uo = /\d+/, Hs = /[+-]?\d+/, m1 = /Z|[+-]\d\d:?\d\d/gi, ks = /Z|[+-]\d\d(?::?\d\d)?/gi, T1 = /[+-]?\d+(\.\d{1,3})?/, Ui = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, Ja;
Ja = {};
function F(e, t, n) {
  Ja[e] = en(t) ? t : function(r, o) {
    return r && n ? n : t;
  };
}
function E1(e, t) {
  return pe(Ja, e) ? Ja[e](t._strict, t._locale) : new RegExp(b1(e));
}
function b1(e) {
  return pt(
    e.replace("\\", "").replace(
      /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
      function(t, n, r, o, i) {
        return n || r || o || i;
      }
    )
  );
}
function pt(e) {
  return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
var Mc = {};
function Ie(e, t) {
  var n, r = t, o;
  for (typeof e == "string" && (e = [e]), pn(t) && (r = function(i, a) {
    a[t] = ie(i);
  }), o = e.length, n = 0; n < o; n++)
    Mc[e[n]] = r;
}
function Pi(e, t) {
  Ie(e, function(n, r, o, i) {
    o._w = o._w || {}, t(n, o._w, o, i);
  });
}
function O1(e, t, n) {
  t != null && pe(Mc, e) && Mc[e](t, n._a, n, e);
}
var Ze = 0, sn = 1, Vt = 2, Fe = 3, wt = 4, un = 5, Qn = 6, g1 = 7, R1 = 8;
function v1(e, t) {
  return (e % t + t) % t;
}
var Me;
Array.prototype.indexOf ? Me = Array.prototype.indexOf : Me = function(e) {
  var t;
  for (t = 0; t < this.length; ++t)
    if (this[t] === e)
      return t;
  return -1;
};
function Ms(e, t) {
  if (isNaN(e) || isNaN(t))
    return NaN;
  var n = v1(t, 12);
  return e += (t - n) / 12, n === 1 ? Cs(e) ? 29 : 28 : 31 - n % 7 % 2;
}
W("M", ["MM", 2], "Mo", function() {
  return this.month() + 1;
});
W("MMM", 0, 0, function(e) {
  return this.localeData().monthsShort(this, e);
});
W("MMMM", 0, 0, function(e) {
  return this.localeData().months(this, e);
});
et("month", "M");
tt("month", 8);
F("M", De);
F("MM", De, Tt);
F("MMM", function(e, t) {
  return t.monthsShortRegex(e);
});
F("MMMM", function(e, t) {
  return t.monthsRegex(e);
});
Ie(["M", "MM"], function(e, t) {
  t[sn] = ie(e) - 1;
});
Ie(["MMM", "MMMM"], function(e, t, n, r) {
  var o = n._locale.monthsParse(e, r, n._strict);
  o != null ? t[sn] = o : te(n).invalidMonth = e;
});
var N1 = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), LT = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), BT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, I1 = Ui, A1 = Ui;
function y1(e, t) {
  return e ? Mt(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || BT).test(t) ? "format" : "standalone"][e.month()] : Mt(this._months) ? this._months : this._months.standalone;
}
function S1(e, t) {
  return e ? Mt(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[BT.test(t) ? "format" : "standalone"][e.month()] : Mt(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function G1(e, t, n) {
  var r, o, i, a = e.toLocaleLowerCase();
  if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], r = 0; r < 12; ++r)
      i = Zt([2e3, r]), this._shortMonthsParse[r] = this.monthsShort(
        i,
        ""
      ).toLocaleLowerCase(), this._longMonthsParse[r] = this.months(i, "").toLocaleLowerCase();
  return n ? t === "MMM" ? (o = Me.call(this._shortMonthsParse, a), o !== -1 ? o : null) : (o = Me.call(this._longMonthsParse, a), o !== -1 ? o : null) : t === "MMM" ? (o = Me.call(this._shortMonthsParse, a), o !== -1 ? o : (o = Me.call(this._longMonthsParse, a), o !== -1 ? o : null)) : (o = Me.call(this._longMonthsParse, a), o !== -1 ? o : (o = Me.call(this._shortMonthsParse, a), o !== -1 ? o : null));
}
function D1(e, t, n) {
  var r, o, i;
  if (this._monthsParseExact)
    return G1.call(this, e, t, n);
  for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), r = 0; r < 12; r++) {
    if (o = Zt([2e3, r]), n && !this._longMonthsParse[r] && (this._longMonthsParse[r] = new RegExp(
      "^" + this.months(o, "").replace(".", "") + "$",
      "i"
    ), this._shortMonthsParse[r] = new RegExp(
      "^" + this.monthsShort(o, "").replace(".", "") + "$",
      "i"
    )), !n && !this._monthsParse[r] && (i = "^" + this.months(o, "") + "|^" + this.monthsShort(o, ""), this._monthsParse[r] = new RegExp(i.replace(".", ""), "i")), n && t === "MMMM" && this._longMonthsParse[r].test(e))
      return r;
    if (n && t === "MMM" && this._shortMonthsParse[r].test(e))
      return r;
    if (!n && this._monthsParse[r].test(e))
      return r;
  }
}
function FT(e, t) {
  var n;
  if (!e.isValid())
    return e;
  if (typeof t == "string") {
    if (/^\d+$/.test(t))
      t = ie(t);
    else if (t = e.localeData().monthsParse(t), !pn(t))
      return e;
  }
  return n = Math.min(e.date(), Ms(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e;
}
function jT(e) {
  return e != null ? (FT(this, e), L.updateOffset(this, !0), this) : qa(this, "Month");
}
function C1() {
  return Ms(this.year(), this.month());
}
function w1(e) {
  return this._monthsParseExact ? (pe(this, "_monthsRegex") || VT.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (pe(this, "_monthsShortRegex") || (this._monthsShortRegex = I1), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function U1(e) {
  return this._monthsParseExact ? (pe(this, "_monthsRegex") || VT.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (pe(this, "_monthsRegex") || (this._monthsRegex = A1), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
}
function VT() {
  function e(a, s) {
    return s.length - a.length;
  }
  var t = [], n = [], r = [], o, i;
  for (o = 0; o < 12; o++)
    i = Zt([2e3, o]), t.push(this.monthsShort(i, "")), n.push(this.months(i, "")), r.push(this.months(i, "")), r.push(this.monthsShort(i, ""));
  for (t.sort(e), n.sort(e), r.sort(e), o = 0; o < 12; o++)
    t[o] = pt(t[o]), n[o] = pt(n[o]);
  for (o = 0; o < 24; o++)
    r[o] = pt(r[o]);
  this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp(
    "^(" + n.join("|") + ")",
    "i"
  ), this._monthsShortStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
W("Y", 0, 0, function() {
  var e = this.year();
  return e <= 9999 ? qt(e, 4) : "+" + e;
});
W(0, ["YY", 2], 0, function() {
  return this.year() % 100;
});
W(0, ["YYYY", 4], 0, "year");
W(0, ["YYYYY", 5], 0, "year");
W(0, ["YYYYYY", 6, !0], 0, "year");
et("year", "y");
tt("year", 1);
F("Y", Hs);
F("YY", De, Tt);
F("YYYY", r_, n_);
F("YYYYY", Ps, ws);
F("YYYYYY", Ps, ws);
Ie(["YYYYY", "YYYYYY"], Ze);
Ie("YYYY", function(e, t) {
  t[Ze] = e.length === 2 ? L.parseTwoDigitYear(e) : ie(e);
});
Ie("YY", function(e, t) {
  t[Ze] = L.parseTwoDigitYear(e);
});
Ie("Y", function(e, t) {
  t[Ze] = parseInt(e, 10);
});
function Lo(e) {
  return Cs(e) ? 366 : 365;
}
L.parseTwoDigitYear = function(e) {
  return ie(e) + (ie(e) > 68 ? 1900 : 2e3);
};
var WT = so("FullYear", !0);
function P1() {
  return Cs(this.year());
}
function H1(e, t, n, r, o, i, a) {
  var s;
  return e < 100 && e >= 0 ? (s = new Date(e + 400, t, n, r, o, i, a), isFinite(s.getFullYear()) && s.setFullYear(e)) : s = new Date(e, t, n, r, o, i, a), s;
}
function ni(e) {
  var t, n;
  return e < 100 && e >= 0 ? (n = Array.prototype.slice.call(arguments), n[0] = e + 400, t = new Date(Date.UTC.apply(null, n)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t;
}
function Qa(e, t, n) {
  var r = 7 + t - n, o = (7 + ni(e, 0, r).getUTCDay() - t) % 7;
  return -o + r - 1;
}
function XT(e, t, n, r, o) {
  var i = (7 + n - r) % 7, a = Qa(e, r, o), s = 1 + 7 * (t - 1) + i + a, u, c;
  return s <= 0 ? (u = e - 1, c = Lo(u) + s) : s > Lo(e) ? (u = e + 1, c = s - Lo(e)) : (u = e, c = s), {
    year: u,
    dayOfYear: c
  };
}
function ri(e, t, n) {
  var r = Qa(e.year(), t, n), o = Math.floor((e.dayOfYear() - r - 1) / 7) + 1, i, a;
  return o < 1 ? (a = e.year() - 1, i = o + dn(a, t, n)) : o > dn(e.year(), t, n) ? (i = o - dn(e.year(), t, n), a = e.year() + 1) : (a = e.year(), i = o), {
    week: i,
    year: a
  };
}
function dn(e, t, n) {
  var r = Qa(e, t, n), o = Qa(e + 1, t, n);
  return (Lo(e) - r + o) / 7;
}
W("w", ["ww", 2], "wo", "week");
W("W", ["WW", 2], "Wo", "isoWeek");
et("week", "w");
et("isoWeek", "W");
tt("week", 5);
tt("isoWeek", 5);
F("w", De);
F("ww", De, Tt);
F("W", De);
F("WW", De, Tt);
Pi(
  ["w", "ww", "W", "WW"],
  function(e, t, n, r) {
    t[r.substr(0, 1)] = ie(e);
  }
);
function k1(e) {
  return ri(e, this._week.dow, this._week.doy).week;
}
var M1 = {
  dow: 0,
  // Sunday is the first day of the week.
  doy: 6
  // The week that contains Jan 6th is the first week of the year.
};
function x1() {
  return this._week.dow;
}
function L1() {
  return this._week.doy;
}
function B1(e) {
  var t = this.localeData().week(this);
  return e == null ? t : this.add((e - t) * 7, "d");
}
function F1(e) {
  var t = ri(this, 1, 4).week;
  return e == null ? t : this.add((e - t) * 7, "d");
}
W("d", 0, "do", "day");
W("dd", 0, 0, function(e) {
  return this.localeData().weekdaysMin(this, e);
});
W("ddd", 0, 0, function(e) {
  return this.localeData().weekdaysShort(this, e);
});
W("dddd", 0, 0, function(e) {
  return this.localeData().weekdays(this, e);
});
W("e", 0, 0, "weekday");
W("E", 0, 0, "isoWeekday");
et("day", "d");
et("weekday", "e");
et("isoWeekday", "E");
tt("day", 11);
tt("weekday", 11);
tt("isoWeekday", 11);
F("d", De);
F("e", De);
F("E", De);
F("dd", function(e, t) {
  return t.weekdaysMinRegex(e);
});
F("ddd", function(e, t) {
  return t.weekdaysShortRegex(e);
});
F("dddd", function(e, t) {
  return t.weekdaysRegex(e);
});
Pi(["dd", "ddd", "dddd"], function(e, t, n, r) {
  var o = n._locale.weekdaysParse(e, r, n._strict);
  o != null ? t.d = o : te(n).invalidWeekday = e;
});
Pi(["d", "e", "E"], function(e, t, n, r) {
  t[r] = ie(e);
});
function j1(e, t) {
  return typeof e != "string" ? e : isNaN(e) ? (e = t.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10);
}
function V1(e, t) {
  return typeof e == "string" ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
}
function o_(e, t) {
  return e.slice(t, 7).concat(e.slice(0, t));
}
var W1 = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), YT = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), X1 = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), Y1 = Ui, K1 = Ui, $1 = Ui;
function z1(e, t) {
  var n = Mt(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
  return e === !0 ? o_(n, this._week.dow) : e ? n[e.day()] : n;
}
function q1(e) {
  return e === !0 ? o_(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
}
function J1(e) {
  return e === !0 ? o_(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
}
function Q1(e, t, n) {
  var r, o, i, a = e.toLocaleLowerCase();
  if (!this._weekdaysParse)
    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], r = 0; r < 7; ++r)
      i = Zt([2e3, 1]).day(r), this._minWeekdaysParse[r] = this.weekdaysMin(
        i,
        ""
      ).toLocaleLowerCase(), this._shortWeekdaysParse[r] = this.weekdaysShort(
        i,
        ""
      ).toLocaleLowerCase(), this._weekdaysParse[r] = this.weekdays(i, "").toLocaleLowerCase();
  return n ? t === "dddd" ? (o = Me.call(this._weekdaysParse, a), o !== -1 ? o : null) : t === "ddd" ? (o = Me.call(this._shortWeekdaysParse, a), o !== -1 ? o : null) : (o = Me.call(this._minWeekdaysParse, a), o !== -1 ? o : null) : t === "dddd" ? (o = Me.call(this._weekdaysParse, a), o !== -1 || (o = Me.call(this._shortWeekdaysParse, a), o !== -1) ? o : (o = Me.call(this._minWeekdaysParse, a), o !== -1 ? o : null)) : t === "ddd" ? (o = Me.call(this._shortWeekdaysParse, a), o !== -1 || (o = Me.call(this._weekdaysParse, a), o !== -1) ? o : (o = Me.call(this._minWeekdaysParse, a), o !== -1 ? o : null)) : (o = Me.call(this._minWeekdaysParse, a), o !== -1 || (o = Me.call(this._weekdaysParse, a), o !== -1) ? o : (o = Me.call(this._shortWeekdaysParse, a), o !== -1 ? o : null));
}
function Z1(e, t, n) {
  var r, o, i;
  if (this._weekdaysParseExact)
    return Q1.call(this, e, t, n);
  for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), r = 0; r < 7; r++) {
    if (o = Zt([2e3, 1]).day(r), n && !this._fullWeekdaysParse[r] && (this._fullWeekdaysParse[r] = new RegExp(
      "^" + this.weekdays(o, "").replace(".", "\\.?") + "$",
      "i"
    ), this._shortWeekdaysParse[r] = new RegExp(
      "^" + this.weekdaysShort(o, "").replace(".", "\\.?") + "$",
      "i"
    ), this._minWeekdaysParse[r] = new RegExp(
      "^" + this.weekdaysMin(o, "").replace(".", "\\.?") + "$",
      "i"
    )), this._weekdaysParse[r] || (i = "^" + this.weekdays(o, "") + "|^" + this.weekdaysShort(o, "") + "|^" + this.weekdaysMin(o, ""), this._weekdaysParse[r] = new RegExp(i.replace(".", ""), "i")), n && t === "dddd" && this._fullWeekdaysParse[r].test(e))
      return r;
    if (n && t === "ddd" && this._shortWeekdaysParse[r].test(e))
      return r;
    if (n && t === "dd" && this._minWeekdaysParse[r].test(e))
      return r;
    if (!n && this._weekdaysParse[r].test(e))
      return r;
  }
}
function eS(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
  return e != null ? (e = j1(e, this.localeData()), this.add(e - t, "d")) : t;
}
function tS(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return e == null ? t : this.add(e - t, "d");
}
function nS(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    var t = V1(e, this.localeData());
    return this.day(this.day() % 7 ? t : t - 7);
  } else
    return this.day() || 7;
}
function rS(e) {
  return this._weekdaysParseExact ? (pe(this, "_weekdaysRegex") || i_.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (pe(this, "_weekdaysRegex") || (this._weekdaysRegex = Y1), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function oS(e) {
  return this._weekdaysParseExact ? (pe(this, "_weekdaysRegex") || i_.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (pe(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = K1), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function iS(e) {
  return this._weekdaysParseExact ? (pe(this, "_weekdaysRegex") || i_.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (pe(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = $1), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function i_() {
  function e(_, l) {
    return l.length - _.length;
  }
  var t = [], n = [], r = [], o = [], i, a, s, u, c;
  for (i = 0; i < 7; i++)
    a = Zt([2e3, 1]).day(i), s = pt(this.weekdaysMin(a, "")), u = pt(this.weekdaysShort(a, "")), c = pt(this.weekdays(a, "")), t.push(s), n.push(u), r.push(c), o.push(s), o.push(u), o.push(c);
  t.sort(e), n.sort(e), r.sort(e), o.sort(e), this._weekdaysRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp(
    "^(" + r.join("|") + ")",
    "i"
  ), this._weekdaysShortStrictRegex = new RegExp(
    "^(" + n.join("|") + ")",
    "i"
  ), this._weekdaysMinStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
function a_() {
  return this.hours() % 12 || 12;
}
function aS() {
  return this.hours() || 24;
}
W("H", ["HH", 2], 0, "hour");
W("h", ["hh", 2], 0, a_);
W("k", ["kk", 2], 0, aS);
W("hmm", 0, 0, function() {
  return "" + a_.apply(this) + qt(this.minutes(), 2);
});
W("hmmss", 0, 0, function() {
  return "" + a_.apply(this) + qt(this.minutes(), 2) + qt(this.seconds(), 2);
});
W("Hmm", 0, 0, function() {
  return "" + this.hours() + qt(this.minutes(), 2);
});
W("Hmmss", 0, 0, function() {
  return "" + this.hours() + qt(this.minutes(), 2) + qt(this.seconds(), 2);
});
function KT(e, t) {
  W(e, 0, 0, function() {
    return this.localeData().meridiem(
      this.hours(),
      this.minutes(),
      t
    );
  });
}
KT("a", !0);
KT("A", !1);
et("hour", "h");
tt("hour", 13);
function $T(e, t) {
  return t._meridiemParse;
}
F("a", $T);
F("A", $T);
F("H", De);
F("h", De);
F("k", De);
F("HH", De, Tt);
F("hh", De, Tt);
F("kk", De, Tt);
F("hmm", MT);
F("hmmss", xT);
F("Hmm", MT);
F("Hmmss", xT);
Ie(["H", "HH"], Fe);
Ie(["k", "kk"], function(e, t, n) {
  var r = ie(e);
  t[Fe] = r === 24 ? 0 : r;
});
Ie(["a", "A"], function(e, t, n) {
  n._isPm = n._locale.isPM(e), n._meridiem = e;
});
Ie(["h", "hh"], function(e, t, n) {
  t[Fe] = ie(e), te(n).bigHour = !0;
});
Ie("hmm", function(e, t, n) {
  var r = e.length - 2;
  t[Fe] = ie(e.substr(0, r)), t[wt] = ie(e.substr(r)), te(n).bigHour = !0;
});
Ie("hmmss", function(e, t, n) {
  var r = e.length - 4, o = e.length - 2;
  t[Fe] = ie(e.substr(0, r)), t[wt] = ie(e.substr(r, 2)), t[un] = ie(e.substr(o)), te(n).bigHour = !0;
});
Ie("Hmm", function(e, t, n) {
  var r = e.length - 2;
  t[Fe] = ie(e.substr(0, r)), t[wt] = ie(e.substr(r));
});
Ie("Hmmss", function(e, t, n) {
  var r = e.length - 4, o = e.length - 2;
  t[Fe] = ie(e.substr(0, r)), t[wt] = ie(e.substr(r, 2)), t[un] = ie(e.substr(o));
});
function sS(e) {
  return (e + "").toLowerCase().charAt(0) === "p";
}
var uS = /[ap]\.?m?\.?/i, cS = so("Hours", !0);
function lS(e, t, n) {
  return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM";
}
var zT = {
  calendar: Z0,
  longDateFormat: r1,
  invalidDate: i1,
  ordinal: s1,
  dayOfMonthOrdinalParse: u1,
  relativeTime: l1,
  months: N1,
  monthsShort: LT,
  week: M1,
  weekdays: W1,
  weekdaysMin: X1,
  weekdaysShort: YT,
  meridiemParse: uS
}, Ce = {}, go = {}, oi;
function _S(e, t) {
  var n, r = Math.min(e.length, t.length);
  for (n = 0; n < r; n += 1)
    if (e[n] !== t[n])
      return n;
  return r;
}
function jf(e) {
  return e && e.toLowerCase().replace("_", "-");
}
function dS(e) {
  for (var t = 0, n, r, o, i; t < e.length; ) {
    for (i = jf(e[t]).split("-"), n = i.length, r = jf(e[t + 1]), r = r ? r.split("-") : null; n > 0; ) {
      if (o = xs(i.slice(0, n).join("-")), o)
        return o;
      if (r && r.length >= n && _S(i, r) >= n - 1)
        break;
      n--;
    }
    t++;
  }
  return oi;
}
function fS(e) {
  return e.match("^[^/\\\\]*$") != null;
}
function xs(e) {
  var t = null, n;
  if (Ce[e] === void 0 && typeof module < "u" && module && module.exports && fS(e))
    try {
      t = oi._abbr, n = z0, n("./locale/" + e), Ln(t);
    } catch {
      Ce[e] = null;
    }
  return Ce[e];
}
function Ln(e, t) {
  var n;
  return e && (st(t) ? n = En(e) : n = s_(e, t), n ? oi = n : typeof console < "u" && console.warn && console.warn(
    "Locale " + e + " not found. Did you forget to load it?"
  )), oi._abbr;
}
function s_(e, t) {
  if (t !== null) {
    var n, r = zT;
    if (t.abbr = e, Ce[e] != null)
      CT(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ), r = Ce[e]._config;
    else if (t.parentLocale != null)
      if (Ce[t.parentLocale] != null)
        r = Ce[t.parentLocale]._config;
      else if (n = xs(t.parentLocale), n != null)
        r = n._config;
      else
        return go[t.parentLocale] || (go[t.parentLocale] = []), go[t.parentLocale].push({
          name: e,
          config: t
        }), null;
    return Ce[e] = new Zl(Hc(r, t)), go[e] && go[e].forEach(function(o) {
      s_(o.name, o.config);
    }), Ln(e), Ce[e];
  } else
    return delete Ce[e], null;
}
function hS(e, t) {
  if (t != null) {
    var n, r, o = zT;
    Ce[e] != null && Ce[e].parentLocale != null ? Ce[e].set(Hc(Ce[e]._config, t)) : (r = xs(e), r != null && (o = r._config), t = Hc(o, t), r == null && (t.abbr = e), n = new Zl(t), n.parentLocale = Ce[e], Ce[e] = n), Ln(e);
  } else
    Ce[e] != null && (Ce[e].parentLocale != null ? (Ce[e] = Ce[e].parentLocale, e === Ln() && Ln(e)) : Ce[e] != null && delete Ce[e]);
  return Ce[e];
}
function En(e) {
  var t;
  if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
    return oi;
  if (!Mt(e)) {
    if (t = xs(e), t)
      return t;
    e = [e];
  }
  return dS(e);
}
function pS() {
  return kc(Ce);
}
function u_(e) {
  var t, n = e._a;
  return n && te(e).overflow === -2 && (t = n[sn] < 0 || n[sn] > 11 ? sn : n[Vt] < 1 || n[Vt] > Ms(n[Ze], n[sn]) ? Vt : n[Fe] < 0 || n[Fe] > 24 || n[Fe] === 24 && (n[wt] !== 0 || n[un] !== 0 || n[Qn] !== 0) ? Fe : n[wt] < 0 || n[wt] > 59 ? wt : n[un] < 0 || n[un] > 59 ? un : n[Qn] < 0 || n[Qn] > 999 ? Qn : -1, te(e)._overflowDayOfYear && (t < Ze || t > Vt) && (t = Vt), te(e)._overflowWeeks && t === -1 && (t = g1), te(e)._overflowWeekday && t === -1 && (t = R1), te(e).overflow = t), e;
}
var mS = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, TS = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, ES = /Z|[+-]\d\d(?::?\d\d)?/, Qi = [
  ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
  ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
  ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
  ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
  ["YYYY-DDD", /\d{4}-\d{3}/],
  ["YYYY-MM", /\d{4}-\d\d/, !1],
  ["YYYYYYMMDD", /[+-]\d{10}/],
  ["YYYYMMDD", /\d{8}/],
  ["GGGG[W]WWE", /\d{4}W\d{3}/],
  ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
  ["YYYYDDD", /\d{7}/],
  ["YYYYMM", /\d{6}/, !1],
  ["YYYY", /\d{4}/, !1]
], wu = [
  ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
  ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
  ["HH:mm:ss", /\d\d:\d\d:\d\d/],
  ["HH:mm", /\d\d:\d\d/],
  ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
  ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
  ["HHmmss", /\d\d\d\d\d\d/],
  ["HHmm", /\d\d\d\d/],
  ["HH", /\d\d/]
], bS = /^\/?Date\((-?\d+)/i, OS = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, gS = {
  UT: 0,
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60
};
function qT(e) {
  var t, n, r = e._i, o = mS.exec(r) || TS.exec(r), i, a, s, u, c = Qi.length, _ = wu.length;
  if (o) {
    for (te(e).iso = !0, t = 0, n = c; t < n; t++)
      if (Qi[t][1].exec(o[1])) {
        a = Qi[t][0], i = Qi[t][2] !== !1;
        break;
      }
    if (a == null) {
      e._isValid = !1;
      return;
    }
    if (o[3]) {
      for (t = 0, n = _; t < n; t++)
        if (wu[t][1].exec(o[3])) {
          s = (o[2] || " ") + wu[t][0];
          break;
        }
      if (s == null) {
        e._isValid = !1;
        return;
      }
    }
    if (!i && s != null) {
      e._isValid = !1;
      return;
    }
    if (o[4])
      if (ES.exec(o[4]))
        u = "Z";
      else {
        e._isValid = !1;
        return;
      }
    e._f = a + (s || "") + (u || ""), l_(e);
  } else
    e._isValid = !1;
}
function RS(e, t, n, r, o, i) {
  var a = [
    vS(e),
    LT.indexOf(t),
    parseInt(n, 10),
    parseInt(r, 10),
    parseInt(o, 10)
  ];
  return i && a.push(parseInt(i, 10)), a;
}
function vS(e) {
  var t = parseInt(e, 10);
  return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
}
function NS(e) {
  return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function IS(e, t, n) {
  if (e) {
    var r = YT.indexOf(e), o = new Date(
      t[0],
      t[1],
      t[2]
    ).getDay();
    if (r !== o)
      return te(n).weekdayMismatch = !0, n._isValid = !1, !1;
  }
  return !0;
}
function AS(e, t, n) {
  if (e)
    return gS[e];
  if (t)
    return 0;
  var r = parseInt(n, 10), o = r % 100, i = (r - o) / 100;
  return i * 60 + o;
}
function JT(e) {
  var t = OS.exec(NS(e._i)), n;
  if (t) {
    if (n = RS(
      t[4],
      t[3],
      t[2],
      t[5],
      t[6],
      t[7]
    ), !IS(t[1], n, e))
      return;
    e._a = n, e._tzm = AS(t[8], t[9], t[10]), e._d = ni.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), te(e).rfc2822 = !0;
  } else
    e._isValid = !1;
}
function yS(e) {
  var t = bS.exec(e._i);
  if (t !== null) {
    e._d = /* @__PURE__ */ new Date(+t[1]);
    return;
  }
  if (qT(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  if (JT(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  e._strict ? e._isValid = !1 : L.createFromInputFallback(e);
}
L.createFromInputFallback = yt(
  "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  function(e) {
    e._d = /* @__PURE__ */ new Date(e._i + (e._useUTC ? " UTC" : ""));
  }
);
function gr(e, t, n) {
  return e ?? t ?? n;
}
function SS(e) {
  var t = new Date(L.now());
  return e._useUTC ? [
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate()
  ] : [t.getFullYear(), t.getMonth(), t.getDate()];
}
function c_(e) {
  var t, n, r = [], o, i, a;
  if (!e._d) {
    for (o = SS(e), e._w && e._a[Vt] == null && e._a[sn] == null && GS(e), e._dayOfYear != null && (a = gr(e._a[Ze], o[Ze]), (e._dayOfYear > Lo(a) || e._dayOfYear === 0) && (te(e)._overflowDayOfYear = !0), n = ni(a, 0, e._dayOfYear), e._a[sn] = n.getUTCMonth(), e._a[Vt] = n.getUTCDate()), t = 0; t < 3 && e._a[t] == null; ++t)
      e._a[t] = r[t] = o[t];
    for (; t < 7; t++)
      e._a[t] = r[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
    e._a[Fe] === 24 && e._a[wt] === 0 && e._a[un] === 0 && e._a[Qn] === 0 && (e._nextDay = !0, e._a[Fe] = 0), e._d = (e._useUTC ? ni : H1).apply(
      null,
      r
    ), i = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[Fe] = 24), e._w && typeof e._w.d < "u" && e._w.d !== i && (te(e).weekdayMismatch = !0);
  }
}
function GS(e) {
  var t, n, r, o, i, a, s, u, c;
  t = e._w, t.GG != null || t.W != null || t.E != null ? (i = 1, a = 4, n = gr(
    t.GG,
    e._a[Ze],
    ri(Ge(), 1, 4).year
  ), r = gr(t.W, 1), o = gr(t.E, 1), (o < 1 || o > 7) && (u = !0)) : (i = e._locale._week.dow, a = e._locale._week.doy, c = ri(Ge(), i, a), n = gr(t.gg, e._a[Ze], c.year), r = gr(t.w, c.week), t.d != null ? (o = t.d, (o < 0 || o > 6) && (u = !0)) : t.e != null ? (o = t.e + i, (t.e < 0 || t.e > 6) && (u = !0)) : o = i), r < 1 || r > dn(n, i, a) ? te(e)._overflowWeeks = !0 : u != null ? te(e)._overflowWeekday = !0 : (s = XT(n, r, o, i, a), e._a[Ze] = s.year, e._dayOfYear = s.dayOfYear);
}
L.ISO_8601 = function() {
};
L.RFC_2822 = function() {
};
function l_(e) {
  if (e._f === L.ISO_8601) {
    qT(e);
    return;
  }
  if (e._f === L.RFC_2822) {
    JT(e);
    return;
  }
  e._a = [], te(e).empty = !0;
  var t = "" + e._i, n, r, o, i, a, s = t.length, u = 0, c, _;
  for (o = wT(e._f, e._locale).match(e_) || [], _ = o.length, n = 0; n < _; n++)
    i = o[n], r = (t.match(E1(i, e)) || [])[0], r && (a = t.substr(0, t.indexOf(r)), a.length > 0 && te(e).unusedInput.push(a), t = t.slice(
      t.indexOf(r) + r.length
    ), u += r.length), Pr[i] ? (r ? te(e).empty = !1 : te(e).unusedTokens.push(i), O1(i, r, e)) : e._strict && !r && te(e).unusedTokens.push(i);
  te(e).charsLeftOver = s - u, t.length > 0 && te(e).unusedInput.push(t), e._a[Fe] <= 12 && te(e).bigHour === !0 && e._a[Fe] > 0 && (te(e).bigHour = void 0), te(e).parsedDateParts = e._a.slice(0), te(e).meridiem = e._meridiem, e._a[Fe] = DS(
    e._locale,
    e._a[Fe],
    e._meridiem
  ), c = te(e).era, c !== null && (e._a[Ze] = e._locale.erasConvertYear(c, e._a[Ze])), c_(e), u_(e);
}
function DS(e, t, n) {
  var r;
  return n == null ? t : e.meridiemHour != null ? e.meridiemHour(t, n) : (e.isPM != null && (r = e.isPM(n), r && t < 12 && (t += 12), !r && t === 12 && (t = 0)), t);
}
function CS(e) {
  var t, n, r, o, i, a, s = !1, u = e._f.length;
  if (u === 0) {
    te(e).invalidFormat = !0, e._d = /* @__PURE__ */ new Date(NaN);
    return;
  }
  for (o = 0; o < u; o++)
    i = 0, a = !1, t = Ql({}, e), e._useUTC != null && (t._useUTC = e._useUTC), t._f = e._f[o], l_(t), Jl(t) && (a = !0), i += te(t).charsLeftOver, i += te(t).unusedTokens.length * 10, te(t).score = i, s ? i < r && (r = i, n = t) : (r == null || i < r || a) && (r = i, n = t, a && (s = !0));
  Cn(e, n || t);
}
function wS(e) {
  if (!e._d) {
    var t = t_(e._i), n = t.day === void 0 ? t.date : t.day;
    e._a = GT(
      [t.year, t.month, n, t.hour, t.minute, t.second, t.millisecond],
      function(r) {
        return r && parseInt(r, 10);
      }
    ), c_(e);
  }
}
function US(e) {
  var t = new wi(u_(QT(e)));
  return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t;
}
function QT(e) {
  var t = e._i, n = e._f;
  return e._locale = e._locale || En(e._l), t === null || n === void 0 && t === "" ? Ds({ nullInput: !0 }) : (typeof t == "string" && (e._i = t = e._locale.preparse(t)), xt(t) ? new wi(u_(t)) : (Ci(t) ? e._d = t : Mt(n) ? CS(e) : n ? l_(e) : PS(e), Jl(e) || (e._d = null), e));
}
function PS(e) {
  var t = e._i;
  st(t) ? e._d = new Date(L.now()) : Ci(t) ? e._d = new Date(t.valueOf()) : typeof t == "string" ? yS(e) : Mt(t) ? (e._a = GT(t.slice(0), function(n) {
    return parseInt(n, 10);
  }), c_(e)) : nr(t) ? wS(e) : pn(t) ? e._d = new Date(t) : L.createFromInputFallback(e);
}
function ZT(e, t, n, r, o) {
  var i = {};
  return (t === !0 || t === !1) && (r = t, t = void 0), (n === !0 || n === !1) && (r = n, n = void 0), (nr(e) && ql(e) || Mt(e) && e.length === 0) && (e = void 0), i._isAMomentObject = !0, i._useUTC = i._isUTC = o, i._l = n, i._i = e, i._f = t, i._strict = r, US(i);
}
function Ge(e, t, n, r) {
  return ZT(e, t, n, r, !1);
}
var HS = yt(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = Ge.apply(null, arguments);
    return this.isValid() && e.isValid() ? e < this ? this : e : Ds();
  }
), kS = yt(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = Ge.apply(null, arguments);
    return this.isValid() && e.isValid() ? e > this ? this : e : Ds();
  }
);
function eE(e, t) {
  var n, r;
  if (t.length === 1 && Mt(t[0]) && (t = t[0]), !t.length)
    return Ge();
  for (n = t[0], r = 1; r < t.length; ++r)
    (!t[r].isValid() || t[r][e](n)) && (n = t[r]);
  return n;
}
function MS() {
  var e = [].slice.call(arguments, 0);
  return eE("isBefore", e);
}
function xS() {
  var e = [].slice.call(arguments, 0);
  return eE("isAfter", e);
}
var LS = function() {
  return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
}, Ro = [
  "year",
  "quarter",
  "month",
  "week",
  "day",
  "hour",
  "minute",
  "second",
  "millisecond"
];
function BS(e) {
  var t, n = !1, r, o = Ro.length;
  for (t in e)
    if (pe(e, t) && !(Me.call(Ro, t) !== -1 && (e[t] == null || !isNaN(e[t]))))
      return !1;
  for (r = 0; r < o; ++r)
    if (e[Ro[r]]) {
      if (n)
        return !1;
      parseFloat(e[Ro[r]]) !== ie(e[Ro[r]]) && (n = !0);
    }
  return !0;
}
function FS() {
  return this._isValid;
}
function jS() {
  return Ft(NaN);
}
function Ls(e) {
  var t = t_(e), n = t.year || 0, r = t.quarter || 0, o = t.month || 0, i = t.week || t.isoWeek || 0, a = t.day || 0, s = t.hour || 0, u = t.minute || 0, c = t.second || 0, _ = t.millisecond || 0;
  this._isValid = BS(t), this._milliseconds = +_ + c * 1e3 + // 1000
  u * 6e4 + // 1000 * 60
  s * 1e3 * 60 * 60, this._days = +a + i * 7, this._months = +o + r * 3 + n * 12, this._data = {}, this._locale = En(), this._bubble();
}
function Ra(e) {
  return e instanceof Ls;
}
function xc(e) {
  return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
}
function VS(e, t, n) {
  var r = Math.min(e.length, t.length), o = Math.abs(e.length - t.length), i = 0, a;
  for (a = 0; a < r; a++)
    (n && e[a] !== t[a] || !n && ie(e[a]) !== ie(t[a])) && i++;
  return i + o;
}
function tE(e, t) {
  W(e, 0, 0, function() {
    var n = this.utcOffset(), r = "+";
    return n < 0 && (n = -n, r = "-"), r + qt(~~(n / 60), 2) + t + qt(~~n % 60, 2);
  });
}
tE("Z", ":");
tE("ZZ", "");
F("Z", ks);
F("ZZ", ks);
Ie(["Z", "ZZ"], function(e, t, n) {
  n._useUTC = !0, n._tzm = __(ks, e);
});
var WS = /([\+\-]|\d\d)/gi;
function __(e, t) {
  var n = (t || "").match(e), r, o, i;
  return n === null ? null : (r = n[n.length - 1] || [], o = (r + "").match(WS) || ["-", 0, 0], i = +(o[1] * 60) + ie(o[2]), i === 0 ? 0 : o[0] === "+" ? i : -i);
}
function d_(e, t) {
  var n, r;
  return t._isUTC ? (n = t.clone(), r = (xt(e) || Ci(e) ? e.valueOf() : Ge(e).valueOf()) - n.valueOf(), n._d.setTime(n._d.valueOf() + r), L.updateOffset(n, !1), n) : Ge(e).local();
}
function Lc(e) {
  return -Math.round(e._d.getTimezoneOffset());
}
L.updateOffset = function() {
};
function XS(e, t, n) {
  var r = this._offset || 0, o;
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    if (typeof e == "string") {
      if (e = __(ks, e), e === null)
        return this;
    } else
      Math.abs(e) < 16 && !n && (e = e * 60);
    return !this._isUTC && t && (o = Lc(this)), this._offset = e, this._isUTC = !0, o != null && this.add(o, "m"), r !== e && (!t || this._changeInProgress ? oE(
      this,
      Ft(e - r, "m"),
      1,
      !1
    ) : this._changeInProgress || (this._changeInProgress = !0, L.updateOffset(this, !0), this._changeInProgress = null)), this;
  } else
    return this._isUTC ? r : Lc(this);
}
function YS(e, t) {
  return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
}
function KS(e) {
  return this.utcOffset(0, e);
}
function $S(e) {
  return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Lc(this), "m")), this;
}
function zS() {
  if (this._tzm != null)
    this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var e = __(m1, this._i);
    e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
  }
  return this;
}
function qS(e) {
  return this.isValid() ? (e = e ? Ge(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1;
}
function JS() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function QS() {
  if (!st(this._isDSTShifted))
    return this._isDSTShifted;
  var e = {}, t;
  return Ql(e, this), e = QT(e), e._a ? (t = e._isUTC ? Zt(e._a) : Ge(e._a), this._isDSTShifted = this.isValid() && VS(e._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function ZS() {
  return this.isValid() ? !this._isUTC : !1;
}
function eG() {
  return this.isValid() ? this._isUTC : !1;
}
function nE() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var tG = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, nG = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function Ft(e, t) {
  var n = e, r = null, o, i, a;
  return Ra(e) ? n = {
    ms: e._milliseconds,
    d: e._days,
    M: e._months
  } : pn(e) || !isNaN(+e) ? (n = {}, t ? n[t] = +e : n.milliseconds = +e) : (r = tG.exec(e)) ? (o = r[1] === "-" ? -1 : 1, n = {
    y: 0,
    d: ie(r[Vt]) * o,
    h: ie(r[Fe]) * o,
    m: ie(r[wt]) * o,
    s: ie(r[un]) * o,
    ms: ie(xc(r[Qn] * 1e3)) * o
    // the millisecond decimal point is included in the match
  }) : (r = nG.exec(e)) ? (o = r[1] === "-" ? -1 : 1, n = {
    y: qn(r[2], o),
    M: qn(r[3], o),
    w: qn(r[4], o),
    d: qn(r[5], o),
    h: qn(r[6], o),
    m: qn(r[7], o),
    s: qn(r[8], o)
  }) : n == null ? n = {} : typeof n == "object" && ("from" in n || "to" in n) && (a = rG(
    Ge(n.from),
    Ge(n.to)
  ), n = {}, n.ms = a.milliseconds, n.M = a.months), i = new Ls(n), Ra(e) && pe(e, "_locale") && (i._locale = e._locale), Ra(e) && pe(e, "_isValid") && (i._isValid = e._isValid), i;
}
Ft.fn = Ls.prototype;
Ft.invalid = jS;
function qn(e, t) {
  var n = e && parseFloat(e.replace(",", "."));
  return (isNaN(n) ? 0 : n) * t;
}
function Vf(e, t) {
  var n = {};
  return n.months = t.month() - e.month() + (t.year() - e.year()) * 12, e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n;
}
function rG(e, t) {
  var n;
  return e.isValid() && t.isValid() ? (t = d_(t, e), e.isBefore(t) ? n = Vf(e, t) : (n = Vf(t, e), n.milliseconds = -n.milliseconds, n.months = -n.months), n) : { milliseconds: 0, months: 0 };
}
function rE(e, t) {
  return function(n, r) {
    var o, i;
    return r !== null && !isNaN(+r) && (CT(
      t,
      "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
    ), i = n, n = r, r = i), o = Ft(n, r), oE(this, o, e), this;
  };
}
function oE(e, t, n, r) {
  var o = t._milliseconds, i = xc(t._days), a = xc(t._months);
  e.isValid() && (r = r ?? !0, a && FT(e, qa(e, "Month") + a * n), i && PT(e, "Date", qa(e, "Date") + i * n), o && e._d.setTime(e._d.valueOf() + o * n), r && L.updateOffset(e, i || a));
}
var oG = rE(1, "add"), iG = rE(-1, "subtract");
function iE(e) {
  return typeof e == "string" || e instanceof String;
}
function aG(e) {
  return xt(e) || Ci(e) || iE(e) || pn(e) || uG(e) || sG(e) || e === null || e === void 0;
}
function sG(e) {
  var t = nr(e) && !ql(e), n = !1, r = [
    "years",
    "year",
    "y",
    "months",
    "month",
    "M",
    "days",
    "day",
    "d",
    "dates",
    "date",
    "D",
    "hours",
    "hour",
    "h",
    "minutes",
    "minute",
    "m",
    "seconds",
    "second",
    "s",
    "milliseconds",
    "millisecond",
    "ms"
  ], o, i, a = r.length;
  for (o = 0; o < a; o += 1)
    i = r[o], n = n || pe(e, i);
  return t && n;
}
function uG(e) {
  var t = Mt(e), n = !1;
  return t && (n = e.filter(function(r) {
    return !pn(r) && iE(e);
  }).length === 0), t && n;
}
function cG(e) {
  var t = nr(e) && !ql(e), n = !1, r = [
    "sameDay",
    "nextDay",
    "lastDay",
    "nextWeek",
    "lastWeek",
    "sameElse"
  ], o, i;
  for (o = 0; o < r.length; o += 1)
    i = r[o], n = n || pe(e, i);
  return t && n;
}
function lG(e, t) {
  var n = e.diff(t, "days", !0);
  return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse";
}
function _G(e, t) {
  arguments.length === 1 && (arguments[0] ? aG(arguments[0]) ? (e = arguments[0], t = void 0) : cG(arguments[0]) && (t = arguments[0], e = void 0) : (e = void 0, t = void 0));
  var n = e || Ge(), r = d_(n, this).startOf("day"), o = L.calendarFormat(this, r) || "sameElse", i = t && (en(t[o]) ? t[o].call(this, n) : t[o]);
  return this.format(
    i || this.localeData().calendar(o, this, Ge(n))
  );
}
function dG() {
  return new wi(this);
}
function fG(e, t) {
  var n = xt(e) ? e : Ge(e);
  return this.isValid() && n.isValid() ? (t = St(t) || "millisecond", t === "millisecond" ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf()) : !1;
}
function hG(e, t) {
  var n = xt(e) ? e : Ge(e);
  return this.isValid() && n.isValid() ? (t = St(t) || "millisecond", t === "millisecond" ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf()) : !1;
}
function pG(e, t, n, r) {
  var o = xt(e) ? e : Ge(e), i = xt(t) ? t : Ge(t);
  return this.isValid() && o.isValid() && i.isValid() ? (r = r || "()", (r[0] === "(" ? this.isAfter(o, n) : !this.isBefore(o, n)) && (r[1] === ")" ? this.isBefore(i, n) : !this.isAfter(i, n))) : !1;
}
function mG(e, t) {
  var n = xt(e) ? e : Ge(e), r;
  return this.isValid() && n.isValid() ? (t = St(t) || "millisecond", t === "millisecond" ? this.valueOf() === n.valueOf() : (r = n.valueOf(), this.clone().startOf(t).valueOf() <= r && r <= this.clone().endOf(t).valueOf())) : !1;
}
function TG(e, t) {
  return this.isSame(e, t) || this.isAfter(e, t);
}
function EG(e, t) {
  return this.isSame(e, t) || this.isBefore(e, t);
}
function bG(e, t, n) {
  var r, o, i;
  if (!this.isValid())
    return NaN;
  if (r = d_(e, this), !r.isValid())
    return NaN;
  switch (o = (r.utcOffset() - this.utcOffset()) * 6e4, t = St(t), t) {
    case "year":
      i = va(this, r) / 12;
      break;
    case "month":
      i = va(this, r);
      break;
    case "quarter":
      i = va(this, r) / 3;
      break;
    case "second":
      i = (this - r) / 1e3;
      break;
    case "minute":
      i = (this - r) / 6e4;
      break;
    case "hour":
      i = (this - r) / 36e5;
      break;
    case "day":
      i = (this - r - o) / 864e5;
      break;
    case "week":
      i = (this - r - o) / 6048e5;
      break;
    default:
      i = this - r;
  }
  return n ? i : bt(i);
}
function va(e, t) {
  if (e.date() < t.date())
    return -va(t, e);
  var n = (t.year() - e.year()) * 12 + (t.month() - e.month()), r = e.clone().add(n, "months"), o, i;
  return t - r < 0 ? (o = e.clone().add(n - 1, "months"), i = (t - r) / (r - o)) : (o = e.clone().add(n + 1, "months"), i = (t - r) / (o - r)), -(n + i) || 0;
}
L.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
L.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function OG() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function gG(e) {
  if (!this.isValid())
    return null;
  var t = e !== !0, n = t ? this.clone().utc() : this;
  return n.year() < 0 || n.year() > 9999 ? ga(
    n,
    t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
  ) : en(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", ga(n, "Z")) : ga(
    n,
    t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
  );
}
function RG() {
  if (!this.isValid())
    return "moment.invalid(/* " + this._i + " */)";
  var e = "moment", t = "", n, r, o, i;
  return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", t = "Z"), n = "[" + e + '("]', r = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", o = "-MM-DD[T]HH:mm:ss.SSS", i = t + '[")]', this.format(n + r + o + i);
}
function vG(e) {
  e || (e = this.isUtc() ? L.defaultFormatUtc : L.defaultFormat);
  var t = ga(this, e);
  return this.localeData().postformat(t);
}
function NG(e, t) {
  return this.isValid() && (xt(e) && e.isValid() || Ge(e).isValid()) ? Ft({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function IG(e) {
  return this.from(Ge(), e);
}
function AG(e, t) {
  return this.isValid() && (xt(e) && e.isValid() || Ge(e).isValid()) ? Ft({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function yG(e) {
  return this.to(Ge(), e);
}
function aE(e) {
  var t;
  return e === void 0 ? this._locale._abbr : (t = En(e), t != null && (this._locale = t), this);
}
var sE = yt(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function(e) {
    return e === void 0 ? this.localeData() : this.locale(e);
  }
);
function uE() {
  return this._locale;
}
var Za = 1e3, Hr = 60 * Za, es = 60 * Hr, cE = (365 * 400 + 97) * 24 * es;
function kr(e, t) {
  return (e % t + t) % t;
}
function lE(e, t, n) {
  return e < 100 && e >= 0 ? new Date(e + 400, t, n) - cE : new Date(e, t, n).valueOf();
}
function _E(e, t, n) {
  return e < 100 && e >= 0 ? Date.UTC(e + 400, t, n) - cE : Date.UTC(e, t, n);
}
function SG(e) {
  var t, n;
  if (e = St(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (n = this._isUTC ? _E : lE, e) {
    case "year":
      t = n(this.year(), 0, 1);
      break;
    case "quarter":
      t = n(
        this.year(),
        this.month() - this.month() % 3,
        1
      );
      break;
    case "month":
      t = n(this.year(), this.month(), 1);
      break;
    case "week":
      t = n(
        this.year(),
        this.month(),
        this.date() - this.weekday()
      );
      break;
    case "isoWeek":
      t = n(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1)
      );
      break;
    case "day":
    case "date":
      t = n(this.year(), this.month(), this.date());
      break;
    case "hour":
      t = this._d.valueOf(), t -= kr(
        t + (this._isUTC ? 0 : this.utcOffset() * Hr),
        es
      );
      break;
    case "minute":
      t = this._d.valueOf(), t -= kr(t, Hr);
      break;
    case "second":
      t = this._d.valueOf(), t -= kr(t, Za);
      break;
  }
  return this._d.setTime(t), L.updateOffset(this, !0), this;
}
function GG(e) {
  var t, n;
  if (e = St(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (n = this._isUTC ? _E : lE, e) {
    case "year":
      t = n(this.year() + 1, 0, 1) - 1;
      break;
    case "quarter":
      t = n(
        this.year(),
        this.month() - this.month() % 3 + 3,
        1
      ) - 1;
      break;
    case "month":
      t = n(this.year(), this.month() + 1, 1) - 1;
      break;
    case "week":
      t = n(
        this.year(),
        this.month(),
        this.date() - this.weekday() + 7
      ) - 1;
      break;
    case "isoWeek":
      t = n(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1) + 7
      ) - 1;
      break;
    case "day":
    case "date":
      t = n(this.year(), this.month(), this.date() + 1) - 1;
      break;
    case "hour":
      t = this._d.valueOf(), t += es - kr(
        t + (this._isUTC ? 0 : this.utcOffset() * Hr),
        es
      ) - 1;
      break;
    case "minute":
      t = this._d.valueOf(), t += Hr - kr(t, Hr) - 1;
      break;
    case "second":
      t = this._d.valueOf(), t += Za - kr(t, Za) - 1;
      break;
  }
  return this._d.setTime(t), L.updateOffset(this, !0), this;
}
function DG() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function CG() {
  return Math.floor(this.valueOf() / 1e3);
}
function wG() {
  return new Date(this.valueOf());
}
function UG() {
  var e = this;
  return [
    e.year(),
    e.month(),
    e.date(),
    e.hour(),
    e.minute(),
    e.second(),
    e.millisecond()
  ];
}
function PG() {
  var e = this;
  return {
    years: e.year(),
    months: e.month(),
    date: e.date(),
    hours: e.hours(),
    minutes: e.minutes(),
    seconds: e.seconds(),
    milliseconds: e.milliseconds()
  };
}
function HG() {
  return this.isValid() ? this.toISOString() : null;
}
function kG() {
  return Jl(this);
}
function MG() {
  return Cn({}, te(this));
}
function xG() {
  return te(this).overflow;
}
function LG() {
  return {
    input: this._i,
    format: this._f,
    locale: this._locale,
    isUTC: this._isUTC,
    strict: this._strict
  };
}
W("N", 0, 0, "eraAbbr");
W("NN", 0, 0, "eraAbbr");
W("NNN", 0, 0, "eraAbbr");
W("NNNN", 0, 0, "eraName");
W("NNNNN", 0, 0, "eraNarrow");
W("y", ["y", 1], "yo", "eraYear");
W("y", ["yy", 2], 0, "eraYear");
W("y", ["yyy", 3], 0, "eraYear");
W("y", ["yyyy", 4], 0, "eraYear");
F("N", f_);
F("NN", f_);
F("NNN", f_);
F("NNNN", qG);
F("NNNNN", JG);
Ie(
  ["N", "NN", "NNN", "NNNN", "NNNNN"],
  function(e, t, n, r) {
    var o = n._locale.erasParse(e, r, n._strict);
    o ? te(n).era = o : te(n).invalidEra = e;
  }
);
F("y", uo);
F("yy", uo);
F("yyy", uo);
F("yyyy", uo);
F("yo", QG);
Ie(["y", "yy", "yyy", "yyyy"], Ze);
Ie(["yo"], function(e, t, n, r) {
  var o;
  n._locale._eraYearOrdinalRegex && (o = e.match(n._locale._eraYearOrdinalRegex)), n._locale.eraYearOrdinalParse ? t[Ze] = n._locale.eraYearOrdinalParse(e, o) : t[Ze] = parseInt(e, 10);
});
function BG(e, t) {
  var n, r, o, i = this._eras || En("en")._eras;
  for (n = 0, r = i.length; n < r; ++n) {
    switch (typeof i[n].since) {
      case "string":
        o = L(i[n].since).startOf("day"), i[n].since = o.valueOf();
        break;
    }
    switch (typeof i[n].until) {
      case "undefined":
        i[n].until = 1 / 0;
        break;
      case "string":
        o = L(i[n].until).startOf("day").valueOf(), i[n].until = o.valueOf();
        break;
    }
  }
  return i;
}
function FG(e, t, n) {
  var r, o, i = this.eras(), a, s, u;
  for (e = e.toUpperCase(), r = 0, o = i.length; r < o; ++r)
    if (a = i[r].name.toUpperCase(), s = i[r].abbr.toUpperCase(), u = i[r].narrow.toUpperCase(), n)
      switch (t) {
        case "N":
        case "NN":
        case "NNN":
          if (s === e)
            return i[r];
          break;
        case "NNNN":
          if (a === e)
            return i[r];
          break;
        case "NNNNN":
          if (u === e)
            return i[r];
          break;
      }
    else if ([a, s, u].indexOf(e) >= 0)
      return i[r];
}
function jG(e, t) {
  var n = e.since <= e.until ? 1 : -1;
  return t === void 0 ? L(e.since).year() : L(e.since).year() + (t - e.offset) * n;
}
function VG() {
  var e, t, n, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (n = this.clone().startOf("day").valueOf(), r[e].since <= n && n <= r[e].until || r[e].until <= n && n <= r[e].since)
      return r[e].name;
  return "";
}
function WG() {
  var e, t, n, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (n = this.clone().startOf("day").valueOf(), r[e].since <= n && n <= r[e].until || r[e].until <= n && n <= r[e].since)
      return r[e].narrow;
  return "";
}
function XG() {
  var e, t, n, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (n = this.clone().startOf("day").valueOf(), r[e].since <= n && n <= r[e].until || r[e].until <= n && n <= r[e].since)
      return r[e].abbr;
  return "";
}
function YG() {
  var e, t, n, r, o = this.localeData().eras();
  for (e = 0, t = o.length; e < t; ++e)
    if (n = o[e].since <= o[e].until ? 1 : -1, r = this.clone().startOf("day").valueOf(), o[e].since <= r && r <= o[e].until || o[e].until <= r && r <= o[e].since)
      return (this.year() - L(o[e].since).year()) * n + o[e].offset;
  return this.year();
}
function KG(e) {
  return pe(this, "_erasNameRegex") || h_.call(this), e ? this._erasNameRegex : this._erasRegex;
}
function $G(e) {
  return pe(this, "_erasAbbrRegex") || h_.call(this), e ? this._erasAbbrRegex : this._erasRegex;
}
function zG(e) {
  return pe(this, "_erasNarrowRegex") || h_.call(this), e ? this._erasNarrowRegex : this._erasRegex;
}
function f_(e, t) {
  return t.erasAbbrRegex(e);
}
function qG(e, t) {
  return t.erasNameRegex(e);
}
function JG(e, t) {
  return t.erasNarrowRegex(e);
}
function QG(e, t) {
  return t._eraYearOrdinalRegex || uo;
}
function h_() {
  var e = [], t = [], n = [], r = [], o, i, a = this.eras();
  for (o = 0, i = a.length; o < i; ++o)
    t.push(pt(a[o].name)), e.push(pt(a[o].abbr)), n.push(pt(a[o].narrow)), r.push(pt(a[o].name)), r.push(pt(a[o].abbr)), r.push(pt(a[o].narrow));
  this._erasRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp(
    "^(" + n.join("|") + ")",
    "i"
  );
}
W(0, ["gg", 2], 0, function() {
  return this.weekYear() % 100;
});
W(0, ["GG", 2], 0, function() {
  return this.isoWeekYear() % 100;
});
function Bs(e, t) {
  W(0, [e, e.length], 0, t);
}
Bs("gggg", "weekYear");
Bs("ggggg", "weekYear");
Bs("GGGG", "isoWeekYear");
Bs("GGGGG", "isoWeekYear");
et("weekYear", "gg");
et("isoWeekYear", "GG");
tt("weekYear", 1);
tt("isoWeekYear", 1);
F("G", Hs);
F("g", Hs);
F("GG", De, Tt);
F("gg", De, Tt);
F("GGGG", r_, n_);
F("gggg", r_, n_);
F("GGGGG", Ps, ws);
F("ggggg", Ps, ws);
Pi(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(e, t, n, r) {
    t[r.substr(0, 2)] = ie(e);
  }
);
Pi(["gg", "GG"], function(e, t, n, r) {
  t[r] = L.parseTwoDigitYear(e);
});
function ZG(e) {
  return dE.call(
    this,
    e,
    this.week(),
    this.weekday(),
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function eD(e) {
  return dE.call(
    this,
    e,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function tD() {
  return dn(this.year(), 1, 4);
}
function nD() {
  return dn(this.isoWeekYear(), 1, 4);
}
function rD() {
  var e = this.localeData()._week;
  return dn(this.year(), e.dow, e.doy);
}
function oD() {
  var e = this.localeData()._week;
  return dn(this.weekYear(), e.dow, e.doy);
}
function dE(e, t, n, r, o) {
  var i;
  return e == null ? ri(this, r, o).year : (i = dn(e, r, o), t > i && (t = i), iD.call(this, e, t, n, r, o));
}
function iD(e, t, n, r, o) {
  var i = XT(e, t, n, r, o), a = ni(i.year, 0, i.dayOfYear);
  return this.year(a.getUTCFullYear()), this.month(a.getUTCMonth()), this.date(a.getUTCDate()), this;
}
W("Q", 0, "Qo", "quarter");
et("quarter", "Q");
tt("quarter", 7);
F("Q", HT);
Ie("Q", function(e, t) {
  t[sn] = (ie(e) - 1) * 3;
});
function aD(e) {
  return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3);
}
W("D", ["DD", 2], "Do", "date");
et("date", "D");
tt("date", 9);
F("D", De);
F("DD", De, Tt);
F("Do", function(e, t) {
  return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
});
Ie(["D", "DD"], Vt);
Ie("Do", function(e, t) {
  t[Vt] = ie(e.match(De)[0]);
});
var fE = so("Date", !0);
W("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
et("dayOfYear", "DDD");
tt("dayOfYear", 4);
F("DDD", Us);
F("DDDD", kT);
Ie(["DDD", "DDDD"], function(e, t, n) {
  n._dayOfYear = ie(e);
});
function sD(e) {
  var t = Math.round(
    (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
  ) + 1;
  return e == null ? t : this.add(e - t, "d");
}
W("m", ["mm", 2], 0, "minute");
et("minute", "m");
tt("minute", 14);
F("m", De);
F("mm", De, Tt);
Ie(["m", "mm"], wt);
var uD = so("Minutes", !1);
W("s", ["ss", 2], 0, "second");
et("second", "s");
tt("second", 15);
F("s", De);
F("ss", De, Tt);
Ie(["s", "ss"], un);
var cD = so("Seconds", !1);
W("S", 0, 0, function() {
  return ~~(this.millisecond() / 100);
});
W(0, ["SS", 2], 0, function() {
  return ~~(this.millisecond() / 10);
});
W(0, ["SSS", 3], 0, "millisecond");
W(0, ["SSSS", 4], 0, function() {
  return this.millisecond() * 10;
});
W(0, ["SSSSS", 5], 0, function() {
  return this.millisecond() * 100;
});
W(0, ["SSSSSS", 6], 0, function() {
  return this.millisecond() * 1e3;
});
W(0, ["SSSSSSS", 7], 0, function() {
  return this.millisecond() * 1e4;
});
W(0, ["SSSSSSSS", 8], 0, function() {
  return this.millisecond() * 1e5;
});
W(0, ["SSSSSSSSS", 9], 0, function() {
  return this.millisecond() * 1e6;
});
et("millisecond", "ms");
tt("millisecond", 16);
F("S", Us, HT);
F("SS", Us, Tt);
F("SSS", Us, kT);
var wn, hE;
for (wn = "SSSS"; wn.length <= 9; wn += "S")
  F(wn, uo);
function lD(e, t) {
  t[Qn] = ie(("0." + e) * 1e3);
}
for (wn = "S"; wn.length <= 9; wn += "S")
  Ie(wn, lD);
hE = so("Milliseconds", !1);
W("z", 0, 0, "zoneAbbr");
W("zz", 0, 0, "zoneName");
function _D() {
  return this._isUTC ? "UTC" : "";
}
function dD() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var S = wi.prototype;
S.add = oG;
S.calendar = _G;
S.clone = dG;
S.diff = bG;
S.endOf = GG;
S.format = vG;
S.from = NG;
S.fromNow = IG;
S.to = AG;
S.toNow = yG;
S.get = h1;
S.invalidAt = xG;
S.isAfter = fG;
S.isBefore = hG;
S.isBetween = pG;
S.isSame = mG;
S.isSameOrAfter = TG;
S.isSameOrBefore = EG;
S.isValid = kG;
S.lang = sE;
S.locale = aE;
S.localeData = uE;
S.max = kS;
S.min = HS;
S.parsingFlags = MG;
S.set = p1;
S.startOf = SG;
S.subtract = iG;
S.toArray = UG;
S.toObject = PG;
S.toDate = wG;
S.toISOString = gG;
S.inspect = RG;
typeof Symbol < "u" && Symbol.for != null && (S[Symbol.for("nodejs.util.inspect.custom")] = function() {
  return "Moment<" + this.format() + ">";
});
S.toJSON = HG;
S.toString = OG;
S.unix = CG;
S.valueOf = DG;
S.creationData = LG;
S.eraName = VG;
S.eraNarrow = WG;
S.eraAbbr = XG;
S.eraYear = YG;
S.year = WT;
S.isLeapYear = P1;
S.weekYear = ZG;
S.isoWeekYear = eD;
S.quarter = S.quarters = aD;
S.month = jT;
S.daysInMonth = C1;
S.week = S.weeks = B1;
S.isoWeek = S.isoWeeks = F1;
S.weeksInYear = rD;
S.weeksInWeekYear = oD;
S.isoWeeksInYear = tD;
S.isoWeeksInISOWeekYear = nD;
S.date = fE;
S.day = S.days = eS;
S.weekday = tS;
S.isoWeekday = nS;
S.dayOfYear = sD;
S.hour = S.hours = cS;
S.minute = S.minutes = uD;
S.second = S.seconds = cD;
S.millisecond = S.milliseconds = hE;
S.utcOffset = XS;
S.utc = KS;
S.local = $S;
S.parseZone = zS;
S.hasAlignedHourOffset = qS;
S.isDST = JS;
S.isLocal = ZS;
S.isUtcOffset = eG;
S.isUtc = nE;
S.isUTC = nE;
S.zoneAbbr = _D;
S.zoneName = dD;
S.dates = yt(
  "dates accessor is deprecated. Use date instead.",
  fE
);
S.months = yt(
  "months accessor is deprecated. Use month instead",
  jT
);
S.years = yt(
  "years accessor is deprecated. Use year instead",
  WT
);
S.zone = yt(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  YS
);
S.isDSTShifted = yt(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  QS
);
function fD(e) {
  return Ge(e * 1e3);
}
function hD() {
  return Ge.apply(null, arguments).parseZone();
}
function pE(e) {
  return e;
}
var me = Zl.prototype;
me.calendar = e1;
me.longDateFormat = o1;
me.invalidDate = a1;
me.ordinal = c1;
me.preparse = pE;
me.postformat = pE;
me.relativeTime = _1;
me.pastFuture = d1;
me.set = Q0;
me.eras = BG;
me.erasParse = FG;
me.erasConvertYear = jG;
me.erasAbbrRegex = $G;
me.erasNameRegex = KG;
me.erasNarrowRegex = zG;
me.months = y1;
me.monthsShort = S1;
me.monthsParse = D1;
me.monthsRegex = U1;
me.monthsShortRegex = w1;
me.week = k1;
me.firstDayOfYear = L1;
me.firstDayOfWeek = x1;
me.weekdays = z1;
me.weekdaysMin = J1;
me.weekdaysShort = q1;
me.weekdaysParse = Z1;
me.weekdaysRegex = rS;
me.weekdaysShortRegex = oS;
me.weekdaysMinRegex = iS;
me.isPM = sS;
me.meridiem = lS;
function ts(e, t, n, r) {
  var o = En(), i = Zt().set(r, t);
  return o[n](i, e);
}
function mE(e, t, n) {
  if (pn(e) && (t = e, e = void 0), e = e || "", t != null)
    return ts(e, t, n, "month");
  var r, o = [];
  for (r = 0; r < 12; r++)
    o[r] = ts(e, r, n, "month");
  return o;
}
function p_(e, t, n, r) {
  typeof e == "boolean" ? (pn(t) && (n = t, t = void 0), t = t || "") : (t = e, n = t, e = !1, pn(t) && (n = t, t = void 0), t = t || "");
  var o = En(), i = e ? o._week.dow : 0, a, s = [];
  if (n != null)
    return ts(t, (n + i) % 7, r, "day");
  for (a = 0; a < 7; a++)
    s[a] = ts(t, (a + i) % 7, r, "day");
  return s;
}
function pD(e, t) {
  return mE(e, t, "months");
}
function mD(e, t) {
  return mE(e, t, "monthsShort");
}
function TD(e, t, n) {
  return p_(e, t, n, "weekdays");
}
function ED(e, t, n) {
  return p_(e, t, n, "weekdaysShort");
}
function bD(e, t, n) {
  return p_(e, t, n, "weekdaysMin");
}
Ln("en", {
  eras: [
    {
      since: "0001-01-01",
      until: 1 / 0,
      offset: 1,
      name: "Anno Domini",
      narrow: "AD",
      abbr: "AD"
    },
    {
      since: "0000-12-31",
      until: -1 / 0,
      offset: 1,
      name: "Before Christ",
      narrow: "BC",
      abbr: "BC"
    }
  ],
  dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
  ordinal: function(e) {
    var t = e % 10, n = ie(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
    return e + n;
  }
});
L.lang = yt(
  "moment.lang is deprecated. Use moment.locale instead.",
  Ln
);
L.langData = yt(
  "moment.langData is deprecated. Use moment.localeData instead.",
  En
);
var tn = Math.abs;
function OD() {
  var e = this._data;
  return this._milliseconds = tn(this._milliseconds), this._days = tn(this._days), this._months = tn(this._months), e.milliseconds = tn(e.milliseconds), e.seconds = tn(e.seconds), e.minutes = tn(e.minutes), e.hours = tn(e.hours), e.months = tn(e.months), e.years = tn(e.years), this;
}
function TE(e, t, n, r) {
  var o = Ft(t, n);
  return e._milliseconds += r * o._milliseconds, e._days += r * o._days, e._months += r * o._months, e._bubble();
}
function gD(e, t) {
  return TE(this, e, t, 1);
}
function RD(e, t) {
  return TE(this, e, t, -1);
}
function Wf(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function vD() {
  var e = this._milliseconds, t = this._days, n = this._months, r = this._data, o, i, a, s, u;
  return e >= 0 && t >= 0 && n >= 0 || e <= 0 && t <= 0 && n <= 0 || (e += Wf(Bc(n) + t) * 864e5, t = 0, n = 0), r.milliseconds = e % 1e3, o = bt(e / 1e3), r.seconds = o % 60, i = bt(o / 60), r.minutes = i % 60, a = bt(i / 60), r.hours = a % 24, t += bt(a / 24), u = bt(EE(t)), n += u, t -= Wf(Bc(u)), s = bt(n / 12), n %= 12, r.days = t, r.months = n, r.years = s, this;
}
function EE(e) {
  return e * 4800 / 146097;
}
function Bc(e) {
  return e * 146097 / 4800;
}
function ND(e) {
  if (!this.isValid())
    return NaN;
  var t, n, r = this._milliseconds;
  if (e = St(e), e === "month" || e === "quarter" || e === "year")
    switch (t = this._days + r / 864e5, n = this._months + EE(t), e) {
      case "month":
        return n;
      case "quarter":
        return n / 3;
      case "year":
        return n / 12;
    }
  else
    switch (t = this._days + Math.round(Bc(this._months)), e) {
      case "week":
        return t / 7 + r / 6048e5;
      case "day":
        return t + r / 864e5;
      case "hour":
        return t * 24 + r / 36e5;
      case "minute":
        return t * 1440 + r / 6e4;
      case "second":
        return t * 86400 + r / 1e3;
      case "millisecond":
        return Math.floor(t * 864e5) + r;
      default:
        throw new Error("Unknown unit " + e);
    }
}
function ID() {
  return this.isValid() ? this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + ie(this._months / 12) * 31536e6 : NaN;
}
function bn(e) {
  return function() {
    return this.as(e);
  };
}
var AD = bn("ms"), yD = bn("s"), SD = bn("m"), GD = bn("h"), DD = bn("d"), CD = bn("w"), wD = bn("M"), UD = bn("Q"), PD = bn("y");
function HD() {
  return Ft(this);
}
function kD(e) {
  return e = St(e), this.isValid() ? this[e + "s"]() : NaN;
}
function dr(e) {
  return function() {
    return this.isValid() ? this._data[e] : NaN;
  };
}
var MD = dr("milliseconds"), xD = dr("seconds"), LD = dr("minutes"), BD = dr("hours"), FD = dr("days"), jD = dr("months"), VD = dr("years");
function WD() {
  return bt(this.days() / 7);
}
var nn = Math.round, Gr = {
  ss: 44,
  // a few seconds to seconds
  s: 45,
  // seconds to minute
  m: 45,
  // minutes to hour
  h: 22,
  // hours to day
  d: 26,
  // days to month/week
  w: null,
  // weeks to month
  M: 11
  // months to year
};
function XD(e, t, n, r, o) {
  return o.relativeTime(t || 1, !!n, e, r);
}
function YD(e, t, n, r) {
  var o = Ft(e).abs(), i = nn(o.as("s")), a = nn(o.as("m")), s = nn(o.as("h")), u = nn(o.as("d")), c = nn(o.as("M")), _ = nn(o.as("w")), l = nn(o.as("y")), d = i <= n.ss && ["s", i] || i < n.s && ["ss", i] || a <= 1 && ["m"] || a < n.m && ["mm", a] || s <= 1 && ["h"] || s < n.h && ["hh", s] || u <= 1 && ["d"] || u < n.d && ["dd", u];
  return n.w != null && (d = d || _ <= 1 && ["w"] || _ < n.w && ["ww", _]), d = d || c <= 1 && ["M"] || c < n.M && ["MM", c] || l <= 1 && ["y"] || ["yy", l], d[2] = t, d[3] = +e > 0, d[4] = r, XD.apply(null, d);
}
function KD(e) {
  return e === void 0 ? nn : typeof e == "function" ? (nn = e, !0) : !1;
}
function $D(e, t) {
  return Gr[e] === void 0 ? !1 : t === void 0 ? Gr[e] : (Gr[e] = t, e === "s" && (Gr.ss = t - 1), !0);
}
function zD(e, t) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var n = !1, r = Gr, o, i;
  return typeof e == "object" && (t = e, e = !1), typeof e == "boolean" && (n = e), typeof t == "object" && (r = Object.assign({}, Gr, t), t.s != null && t.ss == null && (r.ss = t.s - 1)), o = this.localeData(), i = YD(this, !n, r, o), n && (i = o.pastFuture(+this, i)), o.postformat(i);
}
var Uu = Math.abs;
function pr(e) {
  return (e > 0) - (e < 0) || +e;
}
function Fs() {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var e = Uu(this._milliseconds) / 1e3, t = Uu(this._days), n = Uu(this._months), r, o, i, a, s = this.asSeconds(), u, c, _, l;
  return s ? (r = bt(e / 60), o = bt(r / 60), e %= 60, r %= 60, i = bt(n / 12), n %= 12, a = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", u = s < 0 ? "-" : "", c = pr(this._months) !== pr(s) ? "-" : "", _ = pr(this._days) !== pr(s) ? "-" : "", l = pr(this._milliseconds) !== pr(s) ? "-" : "", u + "P" + (i ? c + i + "Y" : "") + (n ? c + n + "M" : "") + (t ? _ + t + "D" : "") + (o || r || e ? "T" : "") + (o ? l + o + "H" : "") + (r ? l + r + "M" : "") + (e ? l + a + "S" : "")) : "P0D";
}
var le = Ls.prototype;
le.isValid = FS;
le.abs = OD;
le.add = gD;
le.subtract = RD;
le.as = ND;
le.asMilliseconds = AD;
le.asSeconds = yD;
le.asMinutes = SD;
le.asHours = GD;
le.asDays = DD;
le.asWeeks = CD;
le.asMonths = wD;
le.asQuarters = UD;
le.asYears = PD;
le.valueOf = ID;
le._bubble = vD;
le.clone = HD;
le.get = kD;
le.milliseconds = MD;
le.seconds = xD;
le.minutes = LD;
le.hours = BD;
le.days = FD;
le.weeks = WD;
le.months = jD;
le.years = VD;
le.humanize = zD;
le.toISOString = Fs;
le.toString = Fs;
le.toJSON = Fs;
le.locale = aE;
le.localeData = uE;
le.toIsoString = yt(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  Fs
);
le.lang = sE;
W("X", 0, 0, "unix");
W("x", 0, 0, "valueOf");
F("x", Hs);
F("X", T1);
Ie("X", function(e, t, n) {
  n._d = new Date(parseFloat(e) * 1e3);
});
Ie("x", function(e, t, n) {
  n._d = new Date(ie(e));
});
//! moment.js
L.version = "2.29.4";
q0(Ge);
L.fn = S;
L.min = MS;
L.max = xS;
L.now = LS;
L.utc = Zt;
L.unix = fD;
L.months = pD;
L.isDate = Ci;
L.locale = Ln;
L.invalid = Ds;
L.duration = Ft;
L.isMoment = xt;
L.weekdays = TD;
L.parseZone = hD;
L.localeData = En;
L.isDuration = Ra;
L.monthsShort = mD;
L.weekdaysMin = bD;
L.defineLocale = s_;
L.updateLocale = hS;
L.locales = pS;
L.weekdaysShort = ED;
L.normalizeUnits = St;
L.relativeTimeRounding = KD;
L.relativeTimeThreshold = $D;
L.calendarFormat = lG;
L.prototype = S;
L.HTML5_FMT = {
  DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
  // <input type="datetime-local" />
  DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
  // <input type="datetime-local" step="1" />
  DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
  // <input type="datetime-local" step="0.001" />
  DATE: "YYYY-MM-DD",
  // <input type="date" />
  TIME: "HH:mm",
  // <input type="time" />
  TIME_SECONDS: "HH:mm:ss",
  // <input type="time" step="1" />
  TIME_MS: "HH:mm:ss.SSS",
  // <input type="time" step="0.001" />
  WEEK: "GGGG-[W]WW",
  // <input type="week" />
  MONTH: "YYYY-MM"
  // <input type="month" />
};
class qD {
  constructor(t) {
    Yn(this), this.state = t, this.getters = t.getters, this.storage = t.storage;
  }
  addExecuteMessage(t) {
    console.log(t);
    const n = this.getters.getActiveTab();
    let r = t.output;
    t.error && (r = t.error.split("^")[1].split("at")[0]), this.state.executeMessages.push({
      message: r,
      isError: !!t.error,
      fileName: n.label,
      date: L().format("HH:mm")
    }), this.storage.set("EDITOR_EXECUTE_MESSAGES", this.state.executeMessages);
  }
  clearExecuteMessages() {
    this.state.executeMessages = [], this.storage.clear("EDITOR_EXECUTE_MESSAGES");
  }
}
const JD = (e) => {
  const { Spring: t } = Ss(), [n, r] = t.useSpring(() => ({
    opacity: 1,
    x: 0
  }));
  return Nh(e, () => ({
    close: async () => (r.start({
      opacity: 0,
      x: -20,
      immediate: !1,
      config: t.config.wobbly
    }), new Promise(
      (o) => setTimeout(() => {
        r.start({
          opacity: 1,
          x: 0,
          immediate: !1,
          config: t.config.wobbly
        }), o(!0);
      }, 300)
    ))
  })), {
    ref: e,
    spring: n,
    SpringDiv: t.a.div
  };
}, QD = Ue.div`
  color: ${ot("light")};
  font-size: ${({ theme: e }) => e.fz7};
  margin-top: 4px;
  font-weight: normal;
  height: 200px;
  overflow-y: auto;
  overflow-x: hidden;
  ${$l()};

  span:first-child {
    margin-top: 22px;
  }
`, ZD = Ue.span`
  color: ${ot("light")};
  display: block;
  margin-top: 17px;
  cursor: pointer;
  font-size: ${({ theme: e }) => e.fz7};
  em {
    color: ${({ $isError: e }) => e ? "red" : ot("light")};
    font-weight: bold;
    font-style: italic;
  }
`, eC = Lr(
  ({ children: e }, t) => {
    const n = se(null), r = () => {
      n.current.scrollTo(0, n.current.scrollHeight);
    };
    return Nh(t, () => ({
      scrollToBottom: () => {
        r(), setTimeout(r, 50);
      }
    })), /* @__PURE__ */ K(QD, { ref: n, children: e });
  }
), tC = Tn(
  Lr((e, t) => {
    const n = se(null), r = se(null), { isTerminalOpened: o } = Eg(), { executeMessages: i } = ro(), { spring: a, SpringDiv: s } = JD(t), u = () => {
      r.current.scrollIntoView({ behavior: "smooth" });
    };
    return xe(() => {
      n.current.scrollToBottom();
    }, [i.length, o]), /* @__PURE__ */ mt(eC, { ref: n, children: [
      "CodeGear output console.",
      /* @__PURE__ */ mt(s, { style: { ...a }, children: [
        i.map((c, _) => /* @__PURE__ */ mt(
          ZD,
          {
            $isError: c.isError,
            onClick: u,
            children: [
              "User [",
              c.fileName,
              "] [",
              c.date,
              "] > ",
              /* @__PURE__ */ K("em", { children: c.message })
            ]
          },
          _
        )),
        /* @__PURE__ */ K("div", { ref: r })
      ] })
    ] });
  })
), nC = [
  { label: "Terminal", key: "terminal" },
  { label: "Test cases", key: "test_cases" }
], rC = () => {
  const e = cr(), t = e.state.selectedTerminalTab, n = Fn(
    (r) => {
      e.update({
        selectedTerminalTab: r
      });
    },
    [e]
  );
  return {
    key: t,
    set: n,
    val: nC
  };
}, oC = Ue.div`
  ${gT({
  right: "44px",
  top: "23px"
})}
  ${_r("flex-end")};
  gap: 23px;
  ${It("100px", "22px")};
  cursor: pointer;
  svg {
    path {
      stroke: ${ot("secondaryGrey")};
      ${({ theme: e }) => Uc(e.light)};
    }
    ${It("22px")}
    color: ${ot("secondaryGrey")};
    ${({ theme: e }) => Uc(e.light)}
  }
`, iC = Ue(yh)`
  ${_0(0, 6)};

  .ant-tabs-nav::before {
    border-bottom: none;
  }
  .ant-tabs-tab-active div {
    color: ${Oa("light")};
  }
  .ant-tabs-tab:hover,
  .ant-tabs-tab:active {
    color: ${ot("light")};
  }
  .ant-tabs-ink-bar {
    background: ${ot("light")};
  }
  .ant-tabs-tab {
    padding: 7px 0 !important;
  }

  font-size: ${({ theme: e }) => e.fz6};
`, aC = Ue.h3`
  color: ${ot("light")};
  font-size: ${({ theme: e }) => e.fz7};
`, FU = Tn(() => {
  const e = cr(), { isTerminalOpened: t } = e.state, n = rC(), r = zn(), o = se(), i = (u) => {
    n.set(u);
  }, a = Fn(() => {
    e.update({ isTerminalOpened: !1 });
  }, []), s = async () => {
    await o.current?.close(), r.terminal.clearExecuteMessages();
  };
  return /* @__PURE__ */ mt(T0, { onClose: a, isOpen: t, height: 300, children: [
    /* @__PURE__ */ K(
      iC,
      {
        items: n.val,
        size: "large",
        onChange: i,
        activeKey: n.key
      }
    ),
    /* @__PURE__ */ K(Nc, { when: n.key === "terminal", children: /* @__PURE__ */ K(tC, { ref: o }) }),
    /* @__PURE__ */ K(Nc, { when: n.key === "test_cases", children: /* @__PURE__ */ K(aC, { children: "Test cases are not supported yet." }) }),
    /* @__PURE__ */ mt(oC, { children: [
      /* @__PURE__ */ K(dy, { onClick: s }),
      /* @__PURE__ */ K(_y, { onClick: a })
    ] })
  ] });
});
class sC {
  constructor(t) {
    Yn(this), this.state = t, this.getters = t.getters, this.tabs = new U0(t), this.editor = new og(t), this.terminal = new qD(t);
  }
  changeTheme(t) {
    this.state.theme = t, this.state.storage.set("EDITOR_THEME", t);
  }
  changeFontSize(t) {
    this.state.fontSize = t, this.state.storage.set("EDITOR_FONT_SIZE", t);
  }
  changeTabSize(t) {
    this.state.tabSize = t, this.state.storage.set("EDITOR_TAB_SIZE", t);
  }
  changeCustomBackground(t) {
    this.state.customBackground = t, this.state.storage.set("EDITOR_CUSTOM_BACKGROUND", t);
  }
  changeCustomColor(t) {
    this.state.customColor = t, this.state.storage.set("EDITOR_CUSTOM_COLOR", t);
  }
  setIsLocalStorageDisabled(t) {
    this.state.storage = new dl(t);
  }
}
class uC {
  constructor(t) {
    this.state = t, Yn(this);
  }
  getActiveTab(t = this.state.activeKey) {
    return this.state.content.find((n) => n.key === t);
  }
  getActiveTabText() {
    return this.getActiveTab().content;
  }
  getTabIndex(t = this.state.activeKey) {
    return this.state.content.findIndex((n) => n.key === t);
  }
  getActiveLanguage() {
    return this.getActiveTab()?.lang;
  }
  isAllowedToExecute() {
    const t = this.getActiveLanguage();
    return g0.includes(t);
  }
}
const cC = `// Hello World! Here you can edit the code in 10 different languages. 😎

const camel = 'I like apples'

// Run the code and look in the terminal.
console.log(camel)

// You can edit and run the code in real time
// and your friends will see it! Sign in if you want to see more features.
`, lC = "javascript", _C = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMjMiIHZpZXdCb3g9IjAgMCAxNyAyMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0Ljk4OTcgMTUuNDA5NEwxNC40MjE2IDE1Ljc3NTJDMTQuNzcxMiAxNS40NTUxIDE1LjAzMzQgMTQuOTk3OCAxNS4wMzM0IDE0LjU0MDZDMTUuMDMzNCAxMy43NjMzIDE0LjY4MzggMTMuMTIzMSAxMy41NDc1IDEyLjU3NDRMMy44NDU3NSA4LjEzOTA3QzEuODc5MTcgNy4yMjQ1NiAwLjY1NTUxOCA2LjA4MTQ0IDAuNjU1NTE4IDQuMDIzODFDMC42NTU1MTggMi4xNDkwOCAxLjU3MzI1IDAuOTE0NTAyIDIuOTcxNzEgMEMyLjc1MzIgMC4zMjAwNzYgMi42MjIxIDAuNzMxNjAyIDIuNjIyMSAxLjIzNDU4QzIuNjIyMSAyLjM3NzcgMy41Mzk4NCAyLjg4MDY4IDQuNDU3NTcgMy4yOTIyMUwxMy44OTcyIDcuNjM2MDlDMTUuNjAxNSA4LjQxMzQyIDE3IDkuNjQ3OTkgMTcgMTEuNzk3MUMxNyAxMy41MzQ2IDE2LjIxMzQgMTQuNjMyIDE0Ljk4OTcgMTUuNDA5NFoiIGZpbGw9IiMwMTY4QTIiLz4KPHBhdGggZD0iTTEwLjU5MzMgMTEuMTM1OUwxMy42NTI0IDEyLjU1MzRDMTQuNzg4NyAxMy4xMDIxIDE1LjEzODMgMTMuNjk2NSAxNS4xMzgzIDE0LjUxOTZDMTUuMTM4MyAxNC45NzY4IDE0Ljg3NjEgMTUuNDM0MSAxNC41MjY0IDE1Ljc1NDJMOS4zNjk2MyAxMy4zNzY1TDEwLjI0MzcgMTIuODczNUMxMC45ODY2IDEyLjQ2MiAxMS4yMDUxIDEyLjE4NzYgMTEuMjA1MSAxMS45MTMzQzExLjI0ODggMTEuNTkzMiAxMS4wNzQgMTEuMzY0NiAxMC41OTMzIDExLjEzNTlaIiBmaWxsPSIjMDE2OEExIi8+CjxwYXRoIGQ9Ik01LjE1NjgxIDIyLjA4NTRDNC40NTc1OCAyMi40OTcgMy44NDU3NiAyMi43NzEzIDMuMTkwMjMgMjIuNzcxM0MxLjQ4NTg2IDIyLjc3MTMgMC4wODc0MDM1IDIxLjMwODEgMCAxOS41NzA1TDMuMjc3NjMgMTcuNTEyOUw4LjQzNDQ0IDE5LjkzNjNMNS4xNTY4MSAyMi4wODU0WiIgZmlsbD0iIzAxNjhBMSIvPgo8cGF0aCBkPSJNNi45MzI1NiAxMy4yODAxTDQuNDg1MjYgMTIuMTM3QzMuMzkyNzEgMTEuNjM0IDIuMzg3NTcgMTEuMjIyNSAyLjM4NzU3IDkuOTQyMTZDMi4zODc1NyA5LjMwMiAyLjU2MjM4IDguOTM2MiAyLjg2ODI5IDguNjE2MTNMOC4wMjUxIDEwLjk5MzhMNi43NTc3NSAxMS43NzEyQzYuNDA4MTQgMTEuOTk5OCA2LjE0NTkzIDEyLjE4MjcgNi4xNDU5MyAxMi41MDI4QzYuMTQ1OTMgMTIuNzc3MSA2LjQ5NTU0IDEzLjA1MTUgNi45MzI1NiAxMy4yODAxWiIgZmlsbD0iIzE1NTQ3NyIvPgo8cGF0aCBkPSJNMTUuOTA3NCAyM0MxNC41OTY0IDIxLjk0ODMgMTMuMTk3OSAyMS4yNjI0IDExLjUzNzMgMjAuNDM5NEwzLjc1ODM1IDE2LjgyNzFDMS43OTE3NyAxNS45MTI2IDAuNDgwNzEzIDE0LjY3OCAwLjQ4MDcxMyAxMi42NjYxQzAuNDgwNzEzIDEwLjY1NDIgMS4zOTg0NSA5LjY5Mzk5IDIuNTc4NCA4LjkxNjY2TDMuMDE1NDIgOC42NDIzMUMyLjcwOTUgOC45NjIzOSAyLjUzNDcgOS4zMjgxOSAyLjUzNDcgOS45NjgzNEMyLjUzNDcgMTEuMjAyOSAzLjU4MzU0IDExLjY2MDIgNC42MzIzOCAxMi4xNjMxTDEzLjY3ODcgMTYuMzI0MUMxNS4yNTE5IDE3LjAxIDE2LjY5NDEgMTguMjQ0NiAxNi42OTQxIDIwLjM0NzlDMTYuNzgxNSAyMS40OTExIDE2LjM0NDUgMjIuNDk3IDE1LjkwNzQgMjNaIiBmaWxsPSIjMTU1NDc3Ii8+Cjwvc3ZnPgo=", dC = Ue.div`
  ${It("23%", "28px")}
  ${_r("flex-start", "center")}
  gap: 25px;
  img {
    transition: transform 200ms;
    &:hover {
      transform: scale(1.1) rotate(3deg);
    }
  }
`;
Ue.span`
  color: ${({ theme: e }) => e.light};
  cursor: pointer;
`;
const fC = ({
  openFile: e,
  saveFile: t,
  createTab: n,
  runCode: r
}) => /* @__PURE__ */ mt(dC, { children: [
  /* @__PURE__ */ K(hb, { to: $A.MAIN, children: /* @__PURE__ */ K("img", { src: _C, alt: "" }) }),
  /* @__PURE__ */ K(So, { type: "dashed", size: "small", onClick: e, children: "Open" }),
  /* @__PURE__ */ K(So, { type: "dashed", size: "small", onClick: t, children: "Save" }),
  /* @__PURE__ */ K(So, { type: "dashed", size: "small", onClick: n, children: "New" }),
  /* @__PURE__ */ K(So, { type: "dashed", size: "small", onClick: r, children: "Run" })
] }), jU = Ue.div`
  background: ${({ theme: e }) => e.grey};
  border-right: 2px solid ${({ theme: e }) => e.lightGrey};
  box-sizing: border-box;
  ${It("52px", "100%")};
  ${_r("space-between", "center", "column")};
  padding-bottom: 15px;
  z-index: 3;
`, hC = Ue.div`
  ${It("23px")}
  svg {
    ${It()}
    color: ${({ theme: e }) => e.secondaryGrey};
    ${({ theme: e }) => Uc(e.light)}
  }
  transition: transform 200ms;
  &:hover {
    transform: scale(1.1);
  }
  margin-top: 20px;
  cursor: pointer;
  user-select: none;
`, pC = Ue.div`
  ${It("23%", "100%")};
  ${_r("flex-start", "center")};
  gap: 25px;
`;
Ue(hC)`
  margin-top: 0;
  margin-left: 20px;
  svg {
    color: ${({ theme: e, $disabled: t }) => t ? e.secondaryGrey : e.light};
  }
`;
const mC = Tn(
  ({ isDisabled: e, runCode: t, openSignIn: n }) => {
    const r = c0();
    return /* @__PURE__ */ mt(pC, { children: [
      /* @__PURE__ */ K(
        If,
        {
          type: "primary",
          onClick: t,
          disabled: e,
          override: "#38a886",
          children: "Run Code"
        }
      ),
      /* @__PURE__ */ K(
        If,
        {
          type: "primary",
          override: r.secondaryGrey,
          onClick: n,
          children: "Sign in"
        }
      )
    ] });
  }
), TC = {
  NOT_SUPPORTED: {
    isError: !0,
    message: "This file type is not supported to execute"
  },
  ERRORS_IN_CODE: {
    isError: !0,
    message: "It looks like there are some errors in your code."
  },
  SUCCESS: {
    isError: !1,
    message: "Code completed successfully!"
  },
  NETWORK_ERROR: {
    isError: !0,
    message: "Something went wrong"
  }
};
class EC {
  constructor(t) {
    Yn(this), this.state = t, this.getters = t.getters, this.actions = t.actions;
  }
  async requestCodeExecution() {
    const { NOT_SUPPORTED: t, ERRORS_IN_CODE: n, SUCCESS: r, NETWORK_ERROR: o } = TC;
    if (!this.getters.isAllowedToExecute())
      return t;
    const i = this.getters.getActiveTab(), a = {
      code: i.content,
      language: i.lang
    };
    try {
      const s = await KA.post(
        xp.CODE_EXECUTOR_API,
        a
      );
      return this.actions.terminal.addExecuteMessage(s.data), s.data.error ? n : r;
    } catch {
      return o;
    }
  }
}
const bC = () => {
  const { codeRunner: e } = Og(), t = cr(), n = uy();
  return async () => {
    const { isError: o, message: i } = await e.requestCodeExecution();
    t.update({
      isTerminalOpened: !0,
      selectedTerminalTab: "terminal"
    }), n.open({
      message: i,
      type: o ? "error" : "success"
    });
  };
};
var OC = Object.defineProperty, gC = (e, t) => {
  for (var n in t)
    OC(e, n, { get: t[n], enumerable: !0 });
}, At = {};
gC(At, {
  assign: () => AE,
  colors: () => Bn,
  createStringInterpolator: () => R_,
  skipAnimation: () => IE,
  to: () => NE,
  willAdvance: () => v_
});
var m_ = ki(), z = (e) => Hi(e, m_), T_ = ki();
z.write = (e) => Hi(e, T_);
var js = ki();
z.onStart = (e) => Hi(e, js);
var E_ = ki();
z.onFrame = (e) => Hi(e, E_);
var b_ = ki();
z.onFinish = (e) => Hi(e, b_);
var Mr = [];
z.setTimeout = (e, t) => {
  const n = z.now() + t, r = () => {
    const i = Mr.findIndex((a) => a.cancel == r);
    ~i && Mr.splice(i, 1), Pn -= ~i ? 1 : 0;
  }, o = { time: n, handler: e, cancel: r };
  return Mr.splice(bE(n), 0, o), Pn += 1, OE(), o;
};
var bE = (e) => ~(~Mr.findIndex((t) => t.time > e) || ~Mr.length);
z.cancel = (e) => {
  js.delete(e), E_.delete(e), b_.delete(e), m_.delete(e), T_.delete(e);
};
z.sync = (e) => {
  Fc = !0, z.batchedUpdates(e), Fc = !1;
};
z.throttle = (e) => {
  let t;
  function n() {
    try {
      e(...t);
    } finally {
      t = null;
    }
  }
  function r(...o) {
    t = o, z.onStart(n);
  }
  return r.handler = e, r.cancel = () => {
    js.delete(n), t = null;
  }, r;
};
var O_ = typeof window < "u" ? window.requestAnimationFrame : (
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  () => {
  }
);
z.use = (e) => O_ = e;
z.now = typeof performance < "u" ? () => performance.now() : Date.now;
z.batchedUpdates = (e) => e();
z.catch = console.error;
z.frameLoop = "always";
z.advance = () => {
  z.frameLoop !== "demand" ? console.warn(
    "Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"
  ) : RE();
};
var Un = -1, Pn = 0, Fc = !1;
function Hi(e, t) {
  Fc ? (t.delete(e), e(0)) : (t.add(e), OE());
}
function OE() {
  Un < 0 && (Un = 0, z.frameLoop !== "demand" && O_(gE));
}
function RC() {
  Un = -1;
}
function gE() {
  ~Un && (O_(gE), z.batchedUpdates(RE));
}
function RE() {
  const e = Un;
  Un = z.now();
  const t = bE(Un);
  if (t && (vE(Mr.splice(0, t), (n) => n.handler()), Pn -= t), !Pn) {
    RC();
    return;
  }
  js.flush(), m_.flush(e ? Math.min(64, Un - e) : 16.667), E_.flush(), T_.flush(), b_.flush();
}
function ki() {
  let e = /* @__PURE__ */ new Set(), t = e;
  return {
    add(n) {
      Pn += t == e && !e.has(n) ? 1 : 0, e.add(n);
    },
    delete(n) {
      return Pn -= t == e && e.has(n) ? 1 : 0, e.delete(n);
    },
    flush(n) {
      t.size && (e = /* @__PURE__ */ new Set(), Pn -= t.size, vE(t, (r) => r(n) && e.add(r)), Pn += e.size, t = e);
    }
  };
}
function vE(e, t) {
  e.forEach((n) => {
    try {
      t(n);
    } catch (r) {
      z.catch(r);
    }
  });
}
function jc() {
}
var vC = (e, t, n) => Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 }), y = {
  arr: Array.isArray,
  obj: (e) => !!e && e.constructor.name === "Object",
  fun: (e) => typeof e == "function",
  str: (e) => typeof e == "string",
  num: (e) => typeof e == "number",
  und: (e) => e === void 0
};
function rn(e, t) {
  if (y.arr(e)) {
    if (!y.arr(t) || e.length !== t.length)
      return !1;
    for (let n = 0; n < e.length; n++)
      if (e[n] !== t[n])
        return !1;
    return !0;
  }
  return e === t;
}
var X = (e, t) => e.forEach(t);
function Jt(e, t, n) {
  if (y.arr(e)) {
    for (let r = 0; r < e.length; r++)
      t.call(n, e[r], `${r}`);
    return;
  }
  for (const r in e)
    e.hasOwnProperty(r) && t.call(n, e[r], r);
}
var rt = (e) => y.und(e) ? [] : y.arr(e) ? e : [e];
function Bo(e, t) {
  if (e.size) {
    const n = Array.from(e);
    e.clear(), X(n, t);
  }
}
var Do = (e, ...t) => Bo(e, (n) => n(...t)), g_ = () => typeof window > "u" || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent), R_, NE, Bn = null, IE = !1, v_ = jc, AE = (e) => {
  e.to && (NE = e.to), e.now && (z.now = e.now), e.colors !== void 0 && (Bn = e.colors), e.skipAnimation != null && (IE = e.skipAnimation), e.createStringInterpolator && (R_ = e.createStringInterpolator), e.requestAnimationFrame && z.use(e.requestAnimationFrame), e.batchedUpdates && (z.batchedUpdates = e.batchedUpdates), e.willAdvance && (v_ = e.willAdvance), e.frameLoop && (z.frameLoop = e.frameLoop);
}, Fo = /* @__PURE__ */ new Set(), vt = [], Pu = [], ns = 0, Mi = {
  get idle() {
    return !Fo.size && !vt.length;
  },
  /** Advance the given animation on every frame until idle. */
  start(e) {
    ns > e.priority ? (Fo.add(e), z.onStart(NC)) : (yE(e), z(Vc));
  },
  /** Advance all animations by the given time. */
  advance: Vc,
  /** Call this when an animation's priority changes. */
  sort(e) {
    if (ns)
      z.onFrame(() => Mi.sort(e));
    else {
      const t = vt.indexOf(e);
      ~t && (vt.splice(t, 1), SE(e));
    }
  },
  /**
   * Clear all animations. For testing purposes.
   *
   * ☠️ Never call this from within the frameloop.
   */
  clear() {
    vt = [], Fo.clear();
  }
};
function NC() {
  Fo.forEach(yE), Fo.clear(), z(Vc);
}
function yE(e) {
  vt.includes(e) || SE(e);
}
function SE(e) {
  vt.splice(
    IC(vt, (t) => t.priority > e.priority),
    0,
    e
  );
}
function Vc(e) {
  const t = Pu;
  for (let n = 0; n < vt.length; n++) {
    const r = vt[n];
    ns = r.priority, r.idle || (v_(r), r.advance(e), r.idle || t.push(r));
  }
  return ns = 0, Pu = vt, Pu.length = 0, vt = t, vt.length > 0;
}
function IC(e, t) {
  const n = e.findIndex(t);
  return n < 0 ? e.length : n;
}
var AC = (e, t, n) => Math.min(Math.max(n, e), t), yC = {
  transparent: 0,
  aliceblue: 4042850303,
  antiquewhite: 4209760255,
  aqua: 16777215,
  aquamarine: 2147472639,
  azure: 4043309055,
  beige: 4126530815,
  bisque: 4293182719,
  black: 255,
  blanchedalmond: 4293643775,
  blue: 65535,
  blueviolet: 2318131967,
  brown: 2771004159,
  burlywood: 3736635391,
  burntsienna: 3934150143,
  cadetblue: 1604231423,
  chartreuse: 2147418367,
  chocolate: 3530104575,
  coral: 4286533887,
  cornflowerblue: 1687547391,
  cornsilk: 4294499583,
  crimson: 3692313855,
  cyan: 16777215,
  darkblue: 35839,
  darkcyan: 9145343,
  darkgoldenrod: 3095792639,
  darkgray: 2846468607,
  darkgreen: 6553855,
  darkgrey: 2846468607,
  darkkhaki: 3182914559,
  darkmagenta: 2332068863,
  darkolivegreen: 1433087999,
  darkorange: 4287365375,
  darkorchid: 2570243327,
  darkred: 2332033279,
  darksalmon: 3918953215,
  darkseagreen: 2411499519,
  darkslateblue: 1211993087,
  darkslategray: 793726975,
  darkslategrey: 793726975,
  darkturquoise: 13554175,
  darkviolet: 2483082239,
  deeppink: 4279538687,
  deepskyblue: 12582911,
  dimgray: 1768516095,
  dimgrey: 1768516095,
  dodgerblue: 512819199,
  firebrick: 2988581631,
  floralwhite: 4294635775,
  forestgreen: 579543807,
  fuchsia: 4278255615,
  gainsboro: 3705462015,
  ghostwhite: 4177068031,
  gold: 4292280575,
  goldenrod: 3668254975,
  gray: 2155905279,
  green: 8388863,
  greenyellow: 2919182335,
  grey: 2155905279,
  honeydew: 4043305215,
  hotpink: 4285117695,
  indianred: 3445382399,
  indigo: 1258324735,
  ivory: 4294963455,
  khaki: 4041641215,
  lavender: 3873897215,
  lavenderblush: 4293981695,
  lawngreen: 2096890111,
  lemonchiffon: 4294626815,
  lightblue: 2916673279,
  lightcoral: 4034953471,
  lightcyan: 3774873599,
  lightgoldenrodyellow: 4210742015,
  lightgray: 3553874943,
  lightgreen: 2431553791,
  lightgrey: 3553874943,
  lightpink: 4290167295,
  lightsalmon: 4288707327,
  lightseagreen: 548580095,
  lightskyblue: 2278488831,
  lightslategray: 2005441023,
  lightslategrey: 2005441023,
  lightsteelblue: 2965692159,
  lightyellow: 4294959359,
  lime: 16711935,
  limegreen: 852308735,
  linen: 4210091775,
  magenta: 4278255615,
  maroon: 2147483903,
  mediumaquamarine: 1724754687,
  mediumblue: 52735,
  mediumorchid: 3126187007,
  mediumpurple: 2473647103,
  mediumseagreen: 1018393087,
  mediumslateblue: 2070474495,
  mediumspringgreen: 16423679,
  mediumturquoise: 1221709055,
  mediumvioletred: 3340076543,
  midnightblue: 421097727,
  mintcream: 4127193855,
  mistyrose: 4293190143,
  moccasin: 4293178879,
  navajowhite: 4292783615,
  navy: 33023,
  oldlace: 4260751103,
  olive: 2155872511,
  olivedrab: 1804477439,
  orange: 4289003775,
  orangered: 4282712319,
  orchid: 3664828159,
  palegoldenrod: 4008225535,
  palegreen: 2566625535,
  paleturquoise: 2951671551,
  palevioletred: 3681588223,
  papayawhip: 4293907967,
  peachpuff: 4292524543,
  peru: 3448061951,
  pink: 4290825215,
  plum: 3718307327,
  powderblue: 2967529215,
  purple: 2147516671,
  rebeccapurple: 1714657791,
  red: 4278190335,
  rosybrown: 3163525119,
  royalblue: 1097458175,
  saddlebrown: 2336560127,
  salmon: 4202722047,
  sandybrown: 4104413439,
  seagreen: 780883967,
  seashell: 4294307583,
  sienna: 2689740287,
  silver: 3233857791,
  skyblue: 2278484991,
  slateblue: 1784335871,
  slategray: 1887473919,
  slategrey: 1887473919,
  snow: 4294638335,
  springgreen: 16744447,
  steelblue: 1182971135,
  tan: 3535047935,
  teal: 8421631,
  thistle: 3636451583,
  tomato: 4284696575,
  turquoise: 1088475391,
  violet: 4001558271,
  wheat: 4125012991,
  white: 4294967295,
  whitesmoke: 4126537215,
  yellow: 4294902015,
  yellowgreen: 2597139199
}, Ut = "[-+]?\\d*\\.?\\d+", rs = Ut + "%";
function Vs(...e) {
  return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)";
}
var SC = new RegExp("rgb" + Vs(Ut, Ut, Ut)), GC = new RegExp("rgba" + Vs(Ut, Ut, Ut, Ut)), DC = new RegExp("hsl" + Vs(Ut, rs, rs)), CC = new RegExp(
  "hsla" + Vs(Ut, rs, rs, Ut)
), wC = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, UC = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, PC = /^#([0-9a-fA-F]{6})$/, HC = /^#([0-9a-fA-F]{8})$/;
function kC(e) {
  let t;
  return typeof e == "number" ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = PC.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : Bn && Bn[e] !== void 0 ? Bn[e] : (t = SC.exec(e)) ? (mr(t[1]) << 24 | // r
  mr(t[2]) << 16 | // g
  mr(t[3]) << 8 | // b
  255) >>> // a
  0 : (t = GC.exec(e)) ? (mr(t[1]) << 24 | // r
  mr(t[2]) << 16 | // g
  mr(t[3]) << 8 | // b
  Kf(t[4])) >>> // a
  0 : (t = wC.exec(e)) ? parseInt(
    t[1] + t[1] + // r
    t[2] + t[2] + // g
    t[3] + t[3] + // b
    "ff",
    // a
    16
  ) >>> 0 : (t = HC.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = UC.exec(e)) ? parseInt(
    t[1] + t[1] + // r
    t[2] + t[2] + // g
    t[3] + t[3] + // b
    t[4] + t[4],
    // a
    16
  ) >>> 0 : (t = DC.exec(e)) ? (Xf(
    Yf(t[1]),
    // h
    Zi(t[2]),
    // s
    Zi(t[3])
    // l
  ) | 255) >>> // a
  0 : (t = CC.exec(e)) ? (Xf(
    Yf(t[1]),
    // h
    Zi(t[2]),
    // s
    Zi(t[3])
    // l
  ) | Kf(t[4])) >>> // a
  0 : null;
}
function Hu(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function Xf(e, t, n) {
  const r = n < 0.5 ? n * (1 + t) : n + t - n * t, o = 2 * n - r, i = Hu(o, r, e + 1 / 3), a = Hu(o, r, e), s = Hu(o, r, e - 1 / 3);
  return Math.round(i * 255) << 24 | Math.round(a * 255) << 16 | Math.round(s * 255) << 8;
}
function mr(e) {
  const t = parseInt(e, 10);
  return t < 0 ? 0 : t > 255 ? 255 : t;
}
function Yf(e) {
  return (parseFloat(e) % 360 + 360) % 360 / 360;
}
function Kf(e) {
  const t = parseFloat(e);
  return t < 0 ? 0 : t > 1 ? 255 : Math.round(t * 255);
}
function Zi(e) {
  const t = parseFloat(e);
  return t < 0 ? 0 : t > 100 ? 1 : t / 100;
}
function $f(e) {
  let t = kC(e);
  if (t === null)
    return e;
  t = t || 0;
  const n = (t & 4278190080) >>> 24, r = (t & 16711680) >>> 16, o = (t & 65280) >>> 8, i = (t & 255) / 255;
  return `rgba(${n}, ${r}, ${o}, ${i})`;
}
var Zr = (e, t, n) => {
  if (y.fun(e))
    return e;
  if (y.arr(e))
    return Zr({
      range: e,
      output: t,
      extrapolate: n
    });
  if (y.str(e.output[0]))
    return R_(e);
  const r = e, o = r.output, i = r.range || [0, 1], a = r.extrapolateLeft || r.extrapolate || "extend", s = r.extrapolateRight || r.extrapolate || "extend", u = r.easing || ((c) => c);
  return (c) => {
    const _ = xC(c, i);
    return MC(
      c,
      i[_],
      i[_ + 1],
      o[_],
      o[_ + 1],
      u,
      a,
      s,
      r.map
    );
  };
};
function MC(e, t, n, r, o, i, a, s, u) {
  let c = u ? u(e) : e;
  if (c < t) {
    if (a === "identity")
      return c;
    a === "clamp" && (c = t);
  }
  if (c > n) {
    if (s === "identity")
      return c;
    s === "clamp" && (c = n);
  }
  return r === o ? r : t === n ? e <= t ? r : o : (t === -1 / 0 ? c = -c : n === 1 / 0 ? c = c - t : c = (c - t) / (n - t), c = i(c), r === -1 / 0 ? c = -c : o === 1 / 0 ? c = c + r : c = c * (o - r) + r, c);
}
function xC(e, t) {
  for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n)
    ;
  return n - 1;
}
var LC = (e, t = "end") => (n) => {
  n = t === "end" ? Math.min(n, 0.999) : Math.max(n, 1e-3);
  const r = n * e, o = t === "end" ? Math.floor(r) : Math.ceil(r);
  return AC(0, 1, o / e);
}, os = 1.70158, ea = os * 1.525, zf = os + 1, qf = 2 * Math.PI / 3, Jf = 2 * Math.PI / 4.5, ta = (e) => e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375 : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375, GE = {
  linear: (e) => e,
  easeInQuad: (e) => e * e,
  easeOutQuad: (e) => 1 - (1 - e) * (1 - e),
  easeInOutQuad: (e) => e < 0.5 ? 2 * e * e : 1 - Math.pow(-2 * e + 2, 2) / 2,
  easeInCubic: (e) => e * e * e,
  easeOutCubic: (e) => 1 - Math.pow(1 - e, 3),
  easeInOutCubic: (e) => e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2,
  easeInQuart: (e) => e * e * e * e,
  easeOutQuart: (e) => 1 - Math.pow(1 - e, 4),
  easeInOutQuart: (e) => e < 0.5 ? 8 * e * e * e * e : 1 - Math.pow(-2 * e + 2, 4) / 2,
  easeInQuint: (e) => e * e * e * e * e,
  easeOutQuint: (e) => 1 - Math.pow(1 - e, 5),
  easeInOutQuint: (e) => e < 0.5 ? 16 * e * e * e * e * e : 1 - Math.pow(-2 * e + 2, 5) / 2,
  easeInSine: (e) => 1 - Math.cos(e * Math.PI / 2),
  easeOutSine: (e) => Math.sin(e * Math.PI / 2),
  easeInOutSine: (e) => -(Math.cos(Math.PI * e) - 1) / 2,
  easeInExpo: (e) => e === 0 ? 0 : Math.pow(2, 10 * e - 10),
  easeOutExpo: (e) => e === 1 ? 1 : 1 - Math.pow(2, -10 * e),
  easeInOutExpo: (e) => e === 0 ? 0 : e === 1 ? 1 : e < 0.5 ? Math.pow(2, 20 * e - 10) / 2 : (2 - Math.pow(2, -20 * e + 10)) / 2,
  easeInCirc: (e) => 1 - Math.sqrt(1 - Math.pow(e, 2)),
  easeOutCirc: (e) => Math.sqrt(1 - Math.pow(e - 1, 2)),
  easeInOutCirc: (e) => e < 0.5 ? (1 - Math.sqrt(1 - Math.pow(2 * e, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * e + 2, 2)) + 1) / 2,
  easeInBack: (e) => zf * e * e * e - os * e * e,
  easeOutBack: (e) => 1 + zf * Math.pow(e - 1, 3) + os * Math.pow(e - 1, 2),
  easeInOutBack: (e) => e < 0.5 ? Math.pow(2 * e, 2) * ((ea + 1) * 2 * e - ea) / 2 : (Math.pow(2 * e - 2, 2) * ((ea + 1) * (e * 2 - 2) + ea) + 2) / 2,
  easeInElastic: (e) => e === 0 ? 0 : e === 1 ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((e * 10 - 10.75) * qf),
  easeOutElastic: (e) => e === 0 ? 0 : e === 1 ? 1 : Math.pow(2, -10 * e) * Math.sin((e * 10 - 0.75) * qf) + 1,
  easeInOutElastic: (e) => e === 0 ? 0 : e === 1 ? 1 : e < 0.5 ? -(Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * Jf)) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * Jf) / 2 + 1,
  easeInBounce: (e) => 1 - ta(1 - e),
  easeOutBounce: ta,
  easeInOutBounce: (e) => e < 0.5 ? (1 - ta(1 - 2 * e)) / 2 : (1 + ta(2 * e - 1)) / 2,
  steps: LC
}, ii = Symbol.for("FluidValue.get"), eo = Symbol.for("FluidValue.observers"), Ot = (e) => !!(e && e[ii]), ut = (e) => e && e[ii] ? e[ii]() : e, Qf = (e) => e[eo] || null;
function BC(e, t) {
  e.eventObserved ? e.eventObserved(t) : e(t);
}
function ai(e, t) {
  const n = e[eo];
  n && n.forEach((r) => {
    BC(r, t);
  });
}
var DE = class {
  constructor(e) {
    if (!e && !(e = this.get))
      throw Error("Unknown getter");
    FC(this, e);
  }
}, FC = (e, t) => CE(e, ii, t);
function co(e, t) {
  if (e[ii]) {
    let n = e[eo];
    n || CE(e, eo, n = /* @__PURE__ */ new Set()), n.has(t) || (n.add(t), e.observerAdded && e.observerAdded(n.size, t));
  }
  return t;
}
function si(e, t) {
  const n = e[eo];
  if (n && n.has(t)) {
    const r = n.size - 1;
    r ? n.delete(t) : e[eo] = null, e.observerRemoved && e.observerRemoved(r, t);
  }
}
var CE = (e, t, n) => Object.defineProperty(e, t, {
  value: n,
  writable: !0,
  configurable: !0
}), Na = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, jC = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi, Zf = new RegExp(`(${Na.source})(%|[a-z]+)`, "i"), VC = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi, Ws = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/, wE = (e) => {
  const [t, n] = WC(e);
  if (!t || g_())
    return e;
  const r = window.getComputedStyle(document.documentElement).getPropertyValue(t);
  if (r)
    return r.trim();
  if (n && n.startsWith("--")) {
    const o = window.getComputedStyle(document.documentElement).getPropertyValue(n);
    return o || e;
  } else {
    if (n && Ws.test(n))
      return wE(n);
    if (n)
      return n;
  }
  return e;
}, WC = (e) => {
  const t = Ws.exec(e);
  if (!t)
    return [,];
  const [, n, r] = t;
  return [n, r];
}, ku, XC = (e, t, n, r, o) => `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${o})`, UE = (e) => {
  ku || (ku = Bn ? (
    // match color names, ignore partial matches
    new RegExp(`(${Object.keys(Bn).join("|")})(?!\\w)`, "g")
  ) : (
    // never match
    /^\b$/
  ));
  const t = e.output.map((i) => ut(i).replace(Ws, wE).replace(jC, $f).replace(ku, $f)), n = t.map((i) => i.match(Na).map(Number)), o = n[0].map(
    (i, a) => n.map((s) => {
      if (!(a in s))
        throw Error('The arity of each "output" value must be equal');
      return s[a];
    })
  ).map(
    (i) => Zr({ ...e, output: i })
  );
  return (i) => {
    const a = !Zf.test(t[0]) && t.find((u) => Zf.test(u))?.replace(Na, "");
    let s = 0;
    return t[0].replace(
      Na,
      () => `${o[s++](i)}${a || ""}`
    ).replace(VC, XC);
  };
}, N_ = "react-spring: ", PE = (e) => {
  const t = e;
  let n = !1;
  if (typeof t != "function")
    throw new TypeError(`${N_}once requires a function parameter`);
  return (...r) => {
    n || (t(...r), n = !0);
  };
}, YC = PE(console.warn);
function HE() {
  YC(
    `${N_}The "interpolate" function is deprecated in v9 (use "to" instead)`
  );
}
var KC = PE(console.warn);
function $C() {
  KC(
    `${N_}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`
  );
}
function Xs(e) {
  return y.str(e) && (e[0] == "#" || /\d/.test(e) || // Do not identify a CSS variable as an AnimatedString if its SSR
  !g_() && Ws.test(e) || e in (Bn || {}));
}
var Tr, Ia = /* @__PURE__ */ new WeakMap(), zC = (e) => e.forEach(({ target: t, contentRect: n }) => Ia.get(t)?.forEach((r) => r(n)));
function qC(e, t) {
  Tr || typeof ResizeObserver < "u" && (Tr = new ResizeObserver(zC));
  let n = Ia.get(t);
  return n || (n = /* @__PURE__ */ new Set(), Ia.set(t, n)), n.add(e), Tr && Tr.observe(t), () => {
    const r = Ia.get(t);
    r && (r.delete(e), !r.size && Tr && Tr.unobserve(t));
  };
}
var Aa = /* @__PURE__ */ new Set(), vo, JC = () => {
  const e = () => {
    Aa.forEach(
      (t) => t({
        width: window.innerWidth,
        height: window.innerHeight
      })
    );
  };
  return window.addEventListener("resize", e), () => {
    window.removeEventListener("resize", e);
  };
}, QC = (e) => (Aa.add(e), vo || (vo = JC()), () => {
  Aa.delete(e), !Aa.size && vo && (vo(), vo = void 0);
}), kE = (e, { container: t = document.documentElement } = {}) => t === document.documentElement ? QC(e) : qC(e, t), ZC = (e, t, n) => t - e === 0 ? 1 : (n - e) / (t - e), ew = {
  x: {
    length: "Width",
    position: "Left"
  },
  y: {
    length: "Height",
    position: "Top"
  }
}, tw = class {
  constructor(e, t) {
    this.createAxis = () => ({
      current: 0,
      progress: 0,
      scrollLength: 0
    }), this.updateAxis = (n) => {
      const r = this.info[n], { length: o, position: i } = ew[n];
      r.current = this.container[`scroll${i}`], r.scrollLength = this.container["scroll" + o] - this.container["client" + o], r.progress = ZC(0, r.scrollLength, r.current);
    }, this.update = () => {
      this.updateAxis("x"), this.updateAxis("y");
    }, this.sendEvent = () => {
      this.callback(this.info);
    }, this.advance = () => {
      this.update(), this.sendEvent();
    }, this.callback = e, this.container = t, this.info = {
      time: 0,
      x: this.createAxis(),
      y: this.createAxis()
    };
  }
}, No = /* @__PURE__ */ new WeakMap(), eh = /* @__PURE__ */ new WeakMap(), Mu = /* @__PURE__ */ new WeakMap(), th = (e) => e === document.documentElement ? window : e, nw = (e, { container: t = document.documentElement } = {}) => {
  let n = Mu.get(t);
  n || (n = /* @__PURE__ */ new Set(), Mu.set(t, n));
  const r = new tw(e, t);
  if (n.add(r), !No.has(t)) {
    const i = () => (n?.forEach((s) => s.advance()), !0);
    No.set(t, i);
    const a = th(t);
    window.addEventListener("resize", i, { passive: !0 }), t !== document.documentElement && eh.set(t, kE(i, { container: t })), a.addEventListener("scroll", i, { passive: !0 });
  }
  const o = No.get(t);
  return z(o), () => {
    z.cancel(o);
    const i = Mu.get(t);
    if (!i || (i.delete(r), i.size))
      return;
    const a = No.get(t);
    No.delete(t), a && (th(t).removeEventListener("scroll", a), window.removeEventListener("resize", a), eh.get(t)?.());
  };
};
function rw(e) {
  const t = se(null);
  return t.current === null && (t.current = e()), t.current;
}
var dt = g_() ? xe : sb, ow = () => {
  const e = se(!1);
  return dt(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
};
function I_() {
  const e = ft()[1], t = ow();
  return () => {
    t.current && e(Math.random());
  };
}
function iw(e, t) {
  const [n] = ft(
    () => ({
      inputs: t,
      result: e()
    })
  ), r = se(), o = r.current;
  let i = o;
  return i ? t && i.inputs && aw(t, i.inputs) || (i = {
    inputs: t,
    result: e()
  }) : i = n, xe(() => {
    r.current = i, o == n && (n.inputs = n.result = void 0);
  }, [i]), i.result;
}
function aw(e, t) {
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
var Ys = (e) => xe(e, sw), sw = [];
function Wc(e) {
  const t = se();
  return xe(() => {
    t.current = e;
  }), t.current;
}
var uw = () => {
  const [e, t] = ft(null);
  return dt(() => {
    const n = window.matchMedia("(prefers-reduced-motion)"), r = (o) => {
      t(o.matches), AE({
        skipAnimation: o.matches
      });
    };
    return r(n), n.addEventListener("change", r), () => {
      n.removeEventListener("change", r);
    };
  }, []), e;
}, ui = Symbol.for("Animated:node"), cw = (e) => !!e && e[ui] === e, jt = (e) => e && e[ui], A_ = (e, t) => vC(e, ui, t), Ks = (e) => e && e[ui] && e[ui].getPayload(), ME = class {
  constructor() {
    A_(this, this);
  }
  /** Get every `AnimatedValue` used by this node. */
  getPayload() {
    return this.payload || [];
  }
}, xi = class extends ME {
  constructor(e) {
    super(), this._value = e, this.done = !0, this.durationProgress = 0, y.num(this._value) && (this.lastPosition = this._value);
  }
  /** @internal */
  static create(e) {
    return new xi(e);
  }
  getPayload() {
    return [this];
  }
  getValue() {
    return this._value;
  }
  setValue(e, t) {
    return y.num(e) && (this.lastPosition = e, t && (e = Math.round(e / t) * t, this.done && (this.lastPosition = e))), this._value === e ? !1 : (this._value = e, !0);
  }
  reset() {
    const { done: e } = this;
    this.done = !1, y.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, e && (this.lastVelocity = null), this.v0 = null);
  }
}, ci = class extends xi {
  constructor(e) {
    super(0), this._string = null, this._toString = Zr({
      output: [e, e]
    });
  }
  /** @internal */
  static create(e) {
    return new ci(e);
  }
  getValue() {
    const e = this._string;
    return e ?? (this._string = this._toString(this._value));
  }
  setValue(e) {
    if (y.str(e)) {
      if (e == this._string)
        return !1;
      this._string = e, this._value = 1;
    } else if (super.setValue(e))
      this._string = null;
    else
      return !1;
    return !0;
  }
  reset(e) {
    e && (this._toString = Zr({
      output: [this.getValue(), e]
    })), this._value = 0, super.reset();
  }
}, is = { dependencies: null }, $s = class extends ME {
  constructor(e) {
    super(), this.source = e, this.setValue(e);
  }
  getValue(e) {
    const t = {};
    return Jt(this.source, (n, r) => {
      cw(n) ? t[r] = n.getValue(e) : Ot(n) ? t[r] = ut(n) : e || (t[r] = n);
    }), t;
  }
  /** Replace the raw object data */
  setValue(e) {
    this.source = e, this.payload = this._makePayload(e);
  }
  reset() {
    this.payload && X(this.payload, (e) => e.reset());
  }
  /** Create a payload set. */
  _makePayload(e) {
    if (e) {
      const t = /* @__PURE__ */ new Set();
      return Jt(e, this._addToPayload, t), Array.from(t);
    }
  }
  /** Add to a payload set. */
  _addToPayload(e) {
    is.dependencies && Ot(e) && is.dependencies.add(e);
    const t = Ks(e);
    t && X(t, (n) => this.add(n));
  }
}, xE = class extends $s {
  constructor(e) {
    super(e);
  }
  /** @internal */
  static create(e) {
    return new xE(e);
  }
  getValue() {
    return this.source.map((e) => e.getValue());
  }
  setValue(e) {
    const t = this.getPayload();
    return e.length == t.length ? t.map((n, r) => n.setValue(e[r])).some(Boolean) : (super.setValue(e.map(lw)), !0);
  }
};
function lw(e) {
  return (Xs(e) ? ci : xi).create(e);
}
function Xc(e) {
  const t = jt(e);
  return t ? t.constructor : y.arr(e) ? xE : Xs(e) ? ci : xi;
}
var nh = (e, t) => {
  const n = (
    // Function components must use "forwardRef" to avoid being
    // re-rendered on every animation frame.
    !y.fun(e) || e.prototype && e.prototype.isReactComponent
  );
  return Lr((r, o) => {
    const i = se(null), a = n && // eslint-disable-next-line react-hooks/rules-of-hooks
    Fn(
      (f) => {
        i.current = fw(o, f);
      },
      [o]
    ), [s, u] = dw(r, t), c = I_(), _ = () => {
      const f = i.current;
      if (n && !f)
        return;
      (f ? t.applyAnimatedValues(f, s.getValue(!0)) : !1) === !1 && c();
    }, l = new _w(_, u), d = se();
    dt(() => (d.current = l, X(u, (f) => co(f, l)), () => {
      d.current && (X(
        d.current.deps,
        (f) => si(f, d.current)
      ), z.cancel(d.current.update));
    })), xe(_, []), Ys(() => () => {
      const f = d.current;
      X(f.deps, (p) => si(p, f));
    });
    const h = t.getComponentProps(s.getValue());
    return /* @__PURE__ */ Dr.createElement(e, { ...h, ref: a });
  });
}, _w = class {
  constructor(e, t) {
    this.update = e, this.deps = t;
  }
  eventObserved(e) {
    e.type == "change" && z.write(this.update);
  }
};
function dw(e, t) {
  const n = /* @__PURE__ */ new Set();
  return is.dependencies = n, e.style && (e = {
    ...e,
    style: t.createAnimatedStyle(e.style)
  }), e = new $s(e), is.dependencies = null, [e, n];
}
function fw(e, t) {
  return e && (y.fun(e) ? e(t) : e.current = t), t;
}
var rh = Symbol.for("AnimatedComponent"), hw = (e, {
  applyAnimatedValues: t = () => !1,
  createAnimatedStyle: n = (o) => new $s(o),
  getComponentProps: r = (o) => o
} = {}) => {
  const o = {
    applyAnimatedValues: t,
    createAnimatedStyle: n,
    getComponentProps: r
  }, i = (a) => {
    const s = oh(a) || "Anonymous";
    return y.str(a) ? a = i[a] || (i[a] = nh(a, o)) : a = a[rh] || (a[rh] = nh(a, o)), a.displayName = `Animated(${s})`, a;
  };
  return Jt(e, (a, s) => {
    y.arr(e) && (s = oh(a)), i[s] = i(a);
  }), {
    animated: i
  };
}, oh = (e) => y.str(e) ? e : e && y.str(e.displayName) ? e.displayName : y.fun(e) && e.name || null, pw = class {
};
function nt(e, ...t) {
  return y.fun(e) ? e(...t) : e;
}
var jo = (e, t) => e === !0 || !!(t && e && (y.fun(e) ? e(t) : rt(e).includes(t))), LE = (e, t) => y.obj(e) ? t && e[t] : e, BE = (e, t) => e.default === !0 ? e[t] : e.default ? e.default[t] : void 0, mw = (e) => e, zs = (e, t = mw) => {
  let n = Tw;
  e.default && e.default !== !0 && (e = e.default, n = Object.keys(e));
  const r = {};
  for (const o of n) {
    const i = t(e[o], o);
    y.und(i) || (r[o] = i);
  }
  return r;
}, Tw = [
  "config",
  "onProps",
  "onStart",
  "onChange",
  "onPause",
  "onResume",
  "onRest"
], Ew = {
  config: 1,
  from: 1,
  to: 1,
  ref: 1,
  loop: 1,
  reset: 1,
  pause: 1,
  cancel: 1,
  reverse: 1,
  immediate: 1,
  default: 1,
  delay: 1,
  onProps: 1,
  onStart: 1,
  onChange: 1,
  onPause: 1,
  onResume: 1,
  onRest: 1,
  onResolve: 1,
  // Transition props
  items: 1,
  trail: 1,
  sort: 1,
  expires: 1,
  initial: 1,
  enter: 1,
  update: 1,
  leave: 1,
  children: 1,
  onDestroyed: 1,
  // Internal props
  keys: 1,
  callId: 1,
  parentId: 1
};
function bw(e) {
  const t = {};
  let n = 0;
  if (Jt(e, (r, o) => {
    Ew[o] || (t[o] = r, n++);
  }), n)
    return t;
}
function qs(e) {
  const t = bw(e);
  if (t) {
    const n = { to: t };
    return Jt(e, (r, o) => o in t || (n[o] = r)), n;
  }
  return { ...e };
}
function li(e) {
  return e = ut(e), y.arr(e) ? e.map(li) : Xs(e) ? At.createStringInterpolator({
    range: [0, 1],
    output: [e, e]
  })(1) : e;
}
function FE(e) {
  for (const t in e)
    return !0;
  return !1;
}
function Yc(e) {
  return y.fun(e) || y.arr(e) && y.obj(e[0]);
}
function Kc(e, t) {
  e.ref?.delete(e), t?.delete(e);
}
function y_(e, t) {
  t && e.ref !== t && (e.ref?.delete(e), t.add(e), e.ref = t);
}
function Ow(e, t, n = 1e3) {
  dt(() => {
    if (t) {
      let r = 0;
      X(e, (o, i) => {
        const a = o.current;
        if (a.length) {
          let s = n * t[i];
          isNaN(s) ? s = r : r = s, X(a, (u) => {
            X(u.queue, (c) => {
              const _ = c.delay;
              c.delay = (l) => s + nt(_ || 0, l);
            });
          }), o.start();
        }
      });
    } else {
      let r = Promise.resolve();
      X(e, (o) => {
        const i = o.current;
        if (i.length) {
          const a = i.map((s) => {
            const u = s.queue;
            return s.queue = [], u;
          });
          r = r.then(() => (X(
            i,
            (s, u) => X(a[u] || [], (c) => s.queue.push(c))
          ), Promise.all(o.start())));
        }
      });
    }
  });
}
var jE = {
  default: { tension: 170, friction: 26 },
  gentle: { tension: 120, friction: 14 },
  wobbly: { tension: 180, friction: 12 },
  stiff: { tension: 210, friction: 20 },
  slow: { tension: 280, friction: 60 },
  molasses: { tension: 280, friction: 120 }
}, $c = {
  ...jE.default,
  mass: 1,
  damping: 1,
  easing: GE.linear,
  clamp: !1
}, gw = class {
  constructor() {
    this.velocity = 0, Object.assign(this, $c);
  }
};
function Rw(e, t, n) {
  n && (n = { ...n }, ih(n, t), t = { ...n, ...t }), ih(e, t), Object.assign(e, t);
  for (const a in $c)
    e[a] == null && (e[a] = $c[a]);
  let { frequency: r, damping: o } = e;
  const { mass: i } = e;
  return y.und(r) || (r < 0.01 && (r = 0.01), o < 0 && (o = 0), e.tension = Math.pow(2 * Math.PI / r, 2) * i, e.friction = 4 * Math.PI * o * i / r), e;
}
function ih(e, t) {
  if (!y.und(t.decay))
    e.duration = void 0;
  else {
    const n = !y.und(t.tension) || !y.und(t.friction);
    (n || !y.und(t.frequency) || !y.und(t.damping) || !y.und(t.mass)) && (e.duration = void 0, e.decay = void 0), n && (e.frequency = void 0);
  }
}
var ah = [], vw = class {
  constructor() {
    this.changed = !1, this.values = ah, this.toValues = null, this.fromValues = ah, this.config = new gw(), this.immediate = !1;
  }
};
function VE(e, { key: t, props: n, defaultProps: r, state: o, actions: i }) {
  return new Promise((a, s) => {
    let u, c, _ = jo(n.cancel ?? r?.cancel, t);
    if (_)
      h();
    else {
      y.und(n.pause) || (o.paused = jo(n.pause, t));
      let f = r?.pause;
      f !== !0 && (f = o.paused || jo(f, t)), u = nt(n.delay || 0, t), f ? (o.resumeQueue.add(d), i.pause()) : (i.resume(), d());
    }
    function l() {
      o.resumeQueue.add(d), o.timeouts.delete(c), c.cancel(), u = c.time - z.now();
    }
    function d() {
      u > 0 && !At.skipAnimation ? (o.delayed = !0, c = z.setTimeout(h, u), o.pauseQueue.add(l), o.timeouts.add(c)) : h();
    }
    function h() {
      o.delayed && (o.delayed = !1), o.pauseQueue.delete(l), o.timeouts.delete(c), e <= (o.cancelId || 0) && (_ = !0);
      try {
        i.start({ ...n, callId: e, cancel: _ }, a);
      } catch (f) {
        s(f);
      }
    }
  });
}
var S_ = (e, t) => t.length == 1 ? t[0] : t.some((n) => n.cancelled) ? xr(e.get()) : t.every((n) => n.noop) ? WE(e.get()) : Ct(
  e.get(),
  t.every((n) => n.finished)
), WE = (e) => ({
  value: e,
  noop: !0,
  finished: !0,
  cancelled: !1
}), Ct = (e, t, n = !1) => ({
  value: e,
  finished: t,
  cancelled: n
}), xr = (e) => ({
  value: e,
  cancelled: !0,
  finished: !1
});
function XE(e, t, n, r) {
  const { callId: o, parentId: i, onRest: a } = t, { asyncTo: s, promise: u } = n;
  return !i && e === s && !t.reset ? u : n.promise = (async () => {
    n.asyncId = o, n.asyncTo = e;
    const c = zs(
      t,
      (m, b) => (
        // The `onRest` prop is only called when the `runAsync` promise is resolved.
        b === "onRest" ? void 0 : m
      )
    );
    let _, l;
    const d = new Promise(
      (m, b) => (_ = m, l = b)
    ), h = (m) => {
      const b = (
        // The `cancel` prop or `stop` method was used.
        o <= (n.cancelId || 0) && xr(r) || // The async `to` prop was replaced.
        o !== n.asyncId && Ct(r, !1)
      );
      if (b)
        throw m.result = b, l(m), m;
    }, f = (m, b) => {
      const T = new zc(), E = new sh();
      return (async () => {
        if (At.skipAnimation)
          throw _i(n), E.result = Ct(r, !1), l(E), E;
        h(T);
        const g = y.obj(m) ? { ...m } : { ...b, to: m };
        g.parentId = o, Jt(c, (I, N) => {
          y.und(g[N]) && (g[N] = I);
        });
        const O = await r.start(g);
        return h(T), n.paused && await new Promise((I) => {
          n.resumeQueue.add(I);
        }), O;
      })();
    };
    let p;
    if (At.skipAnimation)
      return _i(n), Ct(r, !1);
    try {
      let m;
      y.arr(e) ? m = (async (b) => {
        for (const T of b)
          await f(T);
      })(e) : m = Promise.resolve(e(f, r.stop.bind(r))), await Promise.all([m.then(_), d]), p = Ct(r.get(), !0, !1);
    } catch (m) {
      if (m instanceof zc)
        p = m.result;
      else if (m instanceof sh)
        p = m.result;
      else
        throw m;
    } finally {
      o == n.asyncId && (n.asyncId = i, n.asyncTo = i ? s : void 0, n.promise = i ? u : void 0);
    }
    return y.fun(a) && z.batchedUpdates(() => {
      a(p, r, r.item);
    }), p;
  })();
}
function _i(e, t) {
  Bo(e.timeouts, (n) => n.cancel()), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, t && (e.cancelId = t);
}
var zc = class extends Error {
  constructor() {
    super(
      "An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."
    );
  }
}, sh = class extends Error {
  constructor() {
    super("SkipAnimationSignal");
  }
}, qc = (e) => e instanceof Js, Nw = 1, Js = class extends DE {
  constructor() {
    super(...arguments), this.id = Nw++, this._priority = 0;
  }
  get priority() {
    return this._priority;
  }
  set priority(e) {
    this._priority != e && (this._priority = e, this._onPriorityChange(e));
  }
  /** Get the current value */
  get() {
    const e = jt(this);
    return e && e.getValue();
  }
  /** Create a spring that maps our value to another value */
  to(...e) {
    return At.to(this, e);
  }
  /** @deprecated Use the `to` method instead. */
  interpolate(...e) {
    return HE(), At.to(this, e);
  }
  toJSON() {
    return this.get();
  }
  observerAdded(e) {
    e == 1 && this._attach();
  }
  observerRemoved(e) {
    e == 0 && this._detach();
  }
  /** Called when the first child is added. */
  _attach() {
  }
  /** Called when the last child is removed. */
  _detach() {
  }
  /** Tell our children about our new value */
  _onChange(e, t = !1) {
    ai(this, {
      type: "change",
      parent: this,
      value: e,
      idle: t
    });
  }
  /** Tell our children about our new priority */
  _onPriorityChange(e) {
    this.idle || Mi.sort(this), ai(this, {
      type: "priority",
      parent: this,
      priority: e
    });
  }
}, sr = Symbol.for("SpringPhase"), YE = 1, Jc = 2, Qc = 4, xu = (e) => (e[sr] & YE) > 0, Rn = (e) => (e[sr] & Jc) > 0, Io = (e) => (e[sr] & Qc) > 0, uh = (e, t) => t ? e[sr] |= Jc | YE : e[sr] &= ~Jc, ch = (e, t) => t ? e[sr] |= Qc : e[sr] &= ~Qc, G_ = class extends Js {
  constructor(e, t) {
    if (super(), this.animation = new vw(), this.defaultProps = {}, this._state = {
      paused: !1,
      delayed: !1,
      pauseQueue: /* @__PURE__ */ new Set(),
      resumeQueue: /* @__PURE__ */ new Set(),
      timeouts: /* @__PURE__ */ new Set()
    }, this._pendingCalls = /* @__PURE__ */ new Set(), this._lastCallId = 0, this._lastToId = 0, this._memoizedDuration = 0, !y.und(e) || !y.und(t)) {
      const n = y.obj(e) ? { ...e } : { ...t, from: e };
      y.und(n.default) && (n.default = !0), this.start(n);
    }
  }
  /** Equals true when not advancing on each frame. */
  get idle() {
    return !(Rn(this) || this._state.asyncTo) || Io(this);
  }
  get goal() {
    return ut(this.animation.to);
  }
  get velocity() {
    const e = jt(this);
    return e instanceof xi ? e.lastVelocity || 0 : e.getPayload().map((t) => t.lastVelocity || 0);
  }
  /**
   * When true, this value has been animated at least once.
   */
  get hasAnimated() {
    return xu(this);
  }
  /**
   * When true, this value has an unfinished animation,
   * which is either active or paused.
   */
  get isAnimating() {
    return Rn(this);
  }
  /**
   * When true, all current and future animations are paused.
   */
  get isPaused() {
    return Io(this);
  }
  /**
   *
   *
   */
  get isDelayed() {
    return this._state.delayed;
  }
  /** Advance the current animation by a number of milliseconds */
  advance(e) {
    let t = !0, n = !1;
    const r = this.animation;
    let { toValues: o } = r;
    const { config: i } = r, a = Ks(r.to);
    !a && Ot(r.to) && (o = rt(ut(r.to))), r.values.forEach((c, _) => {
      if (c.done)
        return;
      const l = (
        // Animated strings always go from 0 to 1.
        c.constructor == ci ? 1 : a ? a[_].lastPosition : o[_]
      );
      let d = r.immediate, h = l;
      if (!d) {
        if (h = c.lastPosition, i.tension <= 0) {
          c.done = !0;
          return;
        }
        let f = c.elapsedTime += e;
        const p = r.fromValues[_], m = c.v0 != null ? c.v0 : c.v0 = y.arr(i.velocity) ? i.velocity[_] : i.velocity;
        let b;
        const T = i.precision || (p == l ? 5e-3 : Math.min(1, Math.abs(l - p) * 1e-3));
        if (y.und(i.duration))
          if (i.decay) {
            const E = i.decay === !0 ? 0.998 : i.decay, g = Math.exp(-(1 - E) * f);
            h = p + m / (1 - E) * (1 - g), d = Math.abs(c.lastPosition - h) <= T, b = m * g;
          } else {
            b = c.lastVelocity == null ? m : c.lastVelocity;
            const E = i.restVelocity || T / 10, g = i.clamp ? 0 : i.bounce, O = !y.und(g), I = p == l ? c.v0 > 0 : p < l;
            let N, w = !1;
            const G = 1, D = Math.ceil(e / G);
            for (let Z = 0; Z < D && (N = Math.abs(b) > E, !(!N && (d = Math.abs(l - h) <= T, d))); ++Z) {
              O && (w = h == l || h > l == I, w && (b = -b * g, h = l));
              const ne = -i.tension * 1e-6 * (h - l), J = -i.friction * 1e-3 * b, B = (ne + J) / i.mass;
              b = b + B * G, h = h + b * G;
            }
          }
        else {
          let E = 1;
          i.duration > 0 && (this._memoizedDuration !== i.duration && (this._memoizedDuration = i.duration, c.durationProgress > 0 && (c.elapsedTime = i.duration * c.durationProgress, f = c.elapsedTime += e)), E = (i.progress || 0) + f / this._memoizedDuration, E = E > 1 ? 1 : E < 0 ? 0 : E, c.durationProgress = E), h = p + i.easing(E) * (l - p), b = (h - c.lastPosition) / e, d = E == 1;
        }
        c.lastVelocity = b, Number.isNaN(h) && (console.warn("Got NaN while animating:", this), d = !0);
      }
      a && !a[_].done && (d = !1), d ? c.done = !0 : t = !1, c.setValue(h, i.round) && (n = !0);
    });
    const s = jt(this), u = s.getValue();
    if (t) {
      const c = ut(r.to);
      (u !== c || n) && !i.decay ? (s.setValue(c), this._onChange(c)) : n && i.decay && this._onChange(u), this._stop();
    } else
      n && this._onChange(u);
  }
  /** Set the current value, while stopping the current animation */
  set(e) {
    return z.batchedUpdates(() => {
      this._stop(), this._focus(e), this._set(e);
    }), this;
  }
  /**
   * Freeze the active animation in time, as well as any updates merged
   * before `resume` is called.
   */
  pause() {
    this._update({ pause: !0 });
  }
  /** Resume the animation if paused. */
  resume() {
    this._update({ pause: !1 });
  }
  /** Skip to the end of the current animation. */
  finish() {
    if (Rn(this)) {
      const { to: e, config: t } = this.animation;
      z.batchedUpdates(() => {
        this._onStart(), t.decay || this._set(e, !1), this._stop();
      });
    }
    return this;
  }
  /** Push props into the pending queue. */
  update(e) {
    return (this.queue || (this.queue = [])).push(e), this;
  }
  start(e, t) {
    let n;
    return y.und(e) ? (n = this.queue || [], this.queue = []) : n = [y.obj(e) ? e : { ...t, to: e }], Promise.all(
      n.map((r) => this._update(r))
    ).then((r) => S_(this, r));
  }
  /**
   * Stop the current animation, and cancel any delayed updates.
   *
   * Pass `true` to call `onRest` with `cancelled: true`.
   */
  stop(e) {
    const { to: t } = this.animation;
    return this._focus(this.get()), _i(this._state, e && this._lastCallId), z.batchedUpdates(() => this._stop(t, e)), this;
  }
  /** Restart the animation. */
  reset() {
    this._update({ reset: !0 });
  }
  /** @internal */
  eventObserved(e) {
    e.type == "change" ? this._start() : e.type == "priority" && (this.priority = e.priority + 1);
  }
  /**
   * Parse the `to` and `from` range from the given `props` object.
   *
   * This also ensures the initial value is available to animated components
   * during the render phase.
   */
  _prepareNode(e) {
    const t = this.key || "";
    let { to: n, from: r } = e;
    n = y.obj(n) ? n[t] : n, (n == null || Yc(n)) && (n = void 0), r = y.obj(r) ? r[t] : r, r == null && (r = void 0);
    const o = { to: n, from: r };
    return xu(this) || (e.reverse && ([n, r] = [r, n]), r = ut(r), y.und(r) ? jt(this) || this._set(n) : this._set(r)), o;
  }
  /** Every update is processed by this method before merging. */
  _update({ ...e }, t) {
    const { key: n, defaultProps: r } = this;
    e.default && Object.assign(
      r,
      zs(
        e,
        (a, s) => /^on/.test(s) ? LE(a, n) : a
      )
    ), _h(this, e, "onProps"), yo(this, "onProps", e, this);
    const o = this._prepareNode(e);
    if (Object.isFrozen(this))
      throw Error(
        "Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?"
      );
    const i = this._state;
    return VE(++this._lastCallId, {
      key: n,
      props: e,
      defaultProps: r,
      state: i,
      actions: {
        pause: () => {
          Io(this) || (ch(this, !0), Do(i.pauseQueue), yo(
            this,
            "onPause",
            Ct(this, Ao(this, this.animation.to)),
            this
          ));
        },
        resume: () => {
          Io(this) && (ch(this, !1), Rn(this) && this._resume(), Do(i.resumeQueue), yo(
            this,
            "onResume",
            Ct(this, Ao(this, this.animation.to)),
            this
          ));
        },
        start: this._merge.bind(this, o)
      }
    }).then((a) => {
      if (e.loop && a.finished && !(t && a.noop)) {
        const s = KE(e);
        if (s)
          return this._update(s, !0);
      }
      return a;
    });
  }
  /** Merge props into the current animation */
  _merge(e, t, n) {
    if (t.cancel)
      return this.stop(!0), n(xr(this));
    const r = !y.und(e.to), o = !y.und(e.from);
    if (r || o)
      if (t.callId > this._lastToId)
        this._lastToId = t.callId;
      else
        return n(xr(this));
    const { key: i, defaultProps: a, animation: s } = this, { to: u, from: c } = s;
    let { to: _ = u, from: l = c } = e;
    o && !r && (!t.default || y.und(_)) && (_ = l), t.reverse && ([_, l] = [l, _]);
    const d = !rn(l, c);
    d && (s.from = l), l = ut(l);
    const h = !rn(_, u);
    h && this._focus(_);
    const f = Yc(t.to), { config: p } = s, { decay: m, velocity: b } = p;
    (r || o) && (p.velocity = 0), t.config && !f && Rw(
      p,
      nt(t.config, i),
      // Avoid calling the same "config" prop twice.
      t.config !== a.config ? nt(a.config, i) : void 0
    );
    let T = jt(this);
    if (!T || y.und(_))
      return n(Ct(this, !0));
    const E = (
      // When `reset` is undefined, the `from` prop implies `reset: true`,
      // except for declarative updates. When `reset` is defined, there
      // must exist a value to animate from.
      y.und(t.reset) ? o && !t.default : !y.und(l) && jo(t.reset, i)
    ), g = E ? l : this.get(), O = li(_), I = y.num(O) || y.arr(O) || Xs(O), N = !f && (!I || jo(a.immediate || t.immediate, i));
    if (h) {
      const Z = Xc(_);
      if (Z !== T.constructor)
        if (N)
          T = this._set(O);
        else
          throw Error(
            `Cannot animate between ${T.constructor.name} and ${Z.name}, as the "to" prop suggests`
          );
    }
    const w = T.constructor;
    let G = Ot(_), D = !1;
    if (!G) {
      const Z = E || !xu(this) && d;
      (h || Z) && (D = rn(li(g), O), G = !D), (!rn(s.immediate, N) && !N || !rn(p.decay, m) || !rn(p.velocity, b)) && (G = !0);
    }
    if (D && Rn(this) && (s.changed && !E ? G = !0 : G || this._stop(u)), !f && ((G || Ot(u)) && (s.values = T.getPayload(), s.toValues = Ot(_) ? null : w == ci ? [1] : rt(O)), s.immediate != N && (s.immediate = N, !N && !E && this._set(u)), G)) {
      const { onRest: Z } = s;
      X(Aw, (J) => _h(this, t, J));
      const ne = Ct(this, Ao(this, u));
      Do(this._pendingCalls, ne), this._pendingCalls.add(n), s.changed && z.batchedUpdates(() => {
        s.changed = !E, Z?.(ne, this), E ? nt(a.onRest, ne) : s.onStart?.(ne, this);
      });
    }
    E && this._set(g), f ? n(XE(t.to, t, this._state, this)) : G ? this._start() : Rn(this) && !h ? this._pendingCalls.add(n) : n(WE(g));
  }
  /** Update the `animation.to` value, which might be a `FluidValue` */
  _focus(e) {
    const t = this.animation;
    e !== t.to && (Qf(this) && this._detach(), t.to = e, Qf(this) && this._attach());
  }
  _attach() {
    let e = 0;
    const { to: t } = this.animation;
    Ot(t) && (co(t, this), qc(t) && (e = t.priority + 1)), this.priority = e;
  }
  _detach() {
    const { to: e } = this.animation;
    Ot(e) && si(e, this);
  }
  /**
   * Update the current value from outside the frameloop,
   * and return the `Animated` node.
   */
  _set(e, t = !0) {
    const n = ut(e);
    if (!y.und(n)) {
      const r = jt(this);
      if (!r || !rn(n, r.getValue())) {
        const o = Xc(n);
        !r || r.constructor != o ? A_(this, o.create(n)) : r.setValue(n), r && z.batchedUpdates(() => {
          this._onChange(n, t);
        });
      }
    }
    return jt(this);
  }
  _onStart() {
    const e = this.animation;
    e.changed || (e.changed = !0, yo(
      this,
      "onStart",
      Ct(this, Ao(this, e.to)),
      this
    ));
  }
  _onChange(e, t) {
    t || (this._onStart(), nt(this.animation.onChange, e, this)), nt(this.defaultProps.onChange, e, this), super._onChange(e, t);
  }
  // This method resets the animation state (even if already animating) to
  // ensure the latest from/to range is used, and it also ensures this spring
  // is added to the frameloop.
  _start() {
    const e = this.animation;
    jt(this).reset(ut(e.to)), e.immediate || (e.fromValues = e.values.map((t) => t.lastPosition)), Rn(this) || (uh(this, !0), Io(this) || this._resume());
  }
  _resume() {
    At.skipAnimation ? this.finish() : Mi.start(this);
  }
  /**
   * Exit the frameloop and notify `onRest` listeners.
   *
   * Always wrap `_stop` calls with `batchedUpdates`.
   */
  _stop(e, t) {
    if (Rn(this)) {
      uh(this, !1);
      const n = this.animation;
      X(n.values, (o) => {
        o.done = !0;
      }), n.toValues && (n.onChange = n.onPause = n.onResume = void 0), ai(this, {
        type: "idle",
        parent: this
      });
      const r = t ? xr(this.get()) : Ct(this.get(), Ao(this, e ?? n.to));
      Do(this._pendingCalls, r), n.changed && (n.changed = !1, yo(this, "onRest", r, this));
    }
  }
};
function Ao(e, t) {
  const n = li(t), r = li(e.get());
  return rn(r, n);
}
function KE(e, t = e.loop, n = e.to) {
  const r = nt(t);
  if (r) {
    const o = r !== !0 && qs(r), i = (o || e).reverse, a = !o || o.reset;
    return di({
      ...e,
      loop: t,
      // Avoid updating default props when looping.
      default: !1,
      // Never loop the `pause` prop.
      pause: void 0,
      // For the "reverse" prop to loop as expected, the "to" prop
      // must be undefined. The "reverse" prop is ignored when the
      // "to" prop is an array or function.
      to: !i || Yc(n) ? n : void 0,
      // Ignore the "from" prop except on reset.
      from: a ? e.from : void 0,
      reset: a,
      // The "loop" prop can return a "useSpring" props object to
      // override any of the original props.
      ...o
    });
  }
}
function di(e) {
  const { to: t, from: n } = e = qs(e), r = /* @__PURE__ */ new Set();
  return y.obj(t) && lh(t, r), y.obj(n) && lh(n, r), e.keys = r.size ? Array.from(r) : null, e;
}
function Iw(e) {
  const t = di(e);
  return y.und(t.default) && (t.default = zs(t)), t;
}
function lh(e, t) {
  Jt(e, (n, r) => n != null && t.add(r));
}
var Aw = [
  "onStart",
  "onRest",
  "onChange",
  "onPause",
  "onResume"
];
function _h(e, t, n) {
  e.animation[n] = t[n] !== BE(t, n) ? LE(t[n], e.key) : void 0;
}
function yo(e, t, ...n) {
  e.animation[t]?.(...n), e.defaultProps[t]?.(...n);
}
var yw = ["onStart", "onChange", "onRest"], Sw = 1, D_ = class {
  constructor(e, t) {
    this.id = Sw++, this.springs = {}, this.queue = [], this._lastAsyncId = 0, this._active = /* @__PURE__ */ new Set(), this._changed = /* @__PURE__ */ new Set(), this._started = !1, this._state = {
      paused: !1,
      pauseQueue: /* @__PURE__ */ new Set(),
      resumeQueue: /* @__PURE__ */ new Set(),
      timeouts: /* @__PURE__ */ new Set()
    }, this._events = {
      onStart: /* @__PURE__ */ new Map(),
      onChange: /* @__PURE__ */ new Map(),
      onRest: /* @__PURE__ */ new Map()
    }, this._onFrame = this._onFrame.bind(this), t && (this._flush = t), e && this.start({ default: !0, ...e });
  }
  /**
   * Equals `true` when no spring values are in the frameloop, and
   * no async animation is currently active.
   */
  get idle() {
    return !this._state.asyncTo && Object.values(this.springs).every((e) => e.idle && !e.isDelayed && !e.isPaused);
  }
  get item() {
    return this._item;
  }
  set item(e) {
    this._item = e;
  }
  /** Get the current values of our springs */
  get() {
    const e = {};
    return this.each((t, n) => e[n] = t.get()), e;
  }
  /** Set the current values without animating. */
  set(e) {
    for (const t in e) {
      const n = e[t];
      y.und(n) || this.springs[t].set(n);
    }
  }
  /** Push an update onto the queue of each value. */
  update(e) {
    return e && this.queue.push(di(e)), this;
  }
  /**
   * Start the queued animations for every spring, and resolve the returned
   * promise once all queued animations have finished or been cancelled.
   *
   * When you pass a queue (instead of nothing), that queue is used instead of
   * the queued animations added with the `update` method, which are left alone.
   */
  start(e) {
    let { queue: t } = this;
    return e ? t = rt(e).map(di) : this.queue = [], this._flush ? this._flush(this, t) : (QE(this, t), Zc(this, t));
  }
  /** @internal */
  stop(e, t) {
    if (e !== !!e && (t = e), t) {
      const n = this.springs;
      X(rt(t), (r) => n[r].stop(!!e));
    } else
      _i(this._state, this._lastAsyncId), this.each((n) => n.stop(!!e));
    return this;
  }
  /** Freeze the active animation in time */
  pause(e) {
    if (y.und(e))
      this.start({ pause: !0 });
    else {
      const t = this.springs;
      X(rt(e), (n) => t[n].pause());
    }
    return this;
  }
  /** Resume the animation if paused. */
  resume(e) {
    if (y.und(e))
      this.start({ pause: !1 });
    else {
      const t = this.springs;
      X(rt(e), (n) => t[n].resume());
    }
    return this;
  }
  /** Call a function once per spring value */
  each(e) {
    Jt(this.springs, e);
  }
  /** @internal Called at the end of every animation frame */
  _onFrame() {
    const { onStart: e, onChange: t, onRest: n } = this._events, r = this._active.size > 0, o = this._changed.size > 0;
    (r && !this._started || o && !this._started) && (this._started = !0, Bo(e, ([s, u]) => {
      u.value = this.get(), s(u, this, this._item);
    }));
    const i = !r && this._started, a = o || i && n.size ? this.get() : null;
    o && t.size && Bo(t, ([s, u]) => {
      u.value = a, s(u, this, this._item);
    }), i && (this._started = !1, Bo(n, ([s, u]) => {
      u.value = a, s(u, this, this._item);
    }));
  }
  /** @internal */
  eventObserved(e) {
    if (e.type == "change")
      this._changed.add(e.parent), e.idle || this._active.add(e.parent);
    else if (e.type == "idle")
      this._active.delete(e.parent);
    else
      return;
    z.onFrame(this._onFrame);
  }
};
function Zc(e, t) {
  return Promise.all(t.map((n) => $E(e, n))).then(
    (n) => S_(e, n)
  );
}
async function $E(e, t, n) {
  const { keys: r, to: o, from: i, loop: a, onRest: s, onResolve: u } = t, c = y.obj(t.default) && t.default;
  a && (t.loop = !1), o === !1 && (t.to = null), i === !1 && (t.from = null);
  const _ = y.arr(o) || y.fun(o) ? o : void 0;
  _ ? (t.to = void 0, t.onRest = void 0, c && (c.onRest = void 0)) : X(yw, (p) => {
    const m = t[p];
    if (y.fun(m)) {
      const b = e._events[p];
      t[p] = ({ finished: T, cancelled: E }) => {
        const g = b.get(m);
        g ? (T || (g.finished = !1), E && (g.cancelled = !0)) : b.set(m, {
          value: null,
          finished: T || !1,
          cancelled: E || !1
        });
      }, c && (c[p] = t[p]);
    }
  });
  const l = e._state;
  t.pause === !l.paused ? (l.paused = t.pause, Do(t.pause ? l.pauseQueue : l.resumeQueue)) : l.paused && (t.pause = !0);
  const d = (r || Object.keys(e.springs)).map(
    (p) => e.springs[p].start(t)
  ), h = t.cancel === !0 || BE(t, "cancel") === !0;
  (_ || h && l.asyncId) && d.push(
    VE(++e._lastAsyncId, {
      props: t,
      state: l,
      actions: {
        pause: jc,
        resume: jc,
        start(p, m) {
          h ? (_i(l, e._lastAsyncId), m(xr(e))) : (p.onRest = s, m(
            XE(
              _,
              p,
              l,
              e
            )
          ));
        }
      }
    })
  ), l.paused && await new Promise((p) => {
    l.resumeQueue.add(p);
  });
  const f = S_(e, await Promise.all(d));
  if (a && f.finished && !(n && f.noop)) {
    const p = KE(t, a, o);
    if (p)
      return QE(e, [p]), $E(e, p, !0);
  }
  return u && z.batchedUpdates(() => u(f, e, e.item)), f;
}
function el(e, t) {
  const n = { ...e.springs };
  return t && X(rt(t), (r) => {
    y.und(r.keys) && (r = di(r)), y.obj(r.to) || (r = { ...r, to: void 0 }), JE(n, r, (o) => qE(o));
  }), zE(e, n), n;
}
function zE(e, t) {
  Jt(t, (n, r) => {
    e.springs[r] || (e.springs[r] = n, co(n, e));
  });
}
function qE(e, t) {
  const n = new G_();
  return n.key = e, t && co(n, t), n;
}
function JE(e, t, n) {
  t.keys && X(t.keys, (r) => {
    (e[r] || (e[r] = n(r)))._prepareNode(t);
  });
}
function QE(e, t) {
  X(t, (n) => {
    JE(e.springs, n, (r) => qE(r, e));
  });
}
var lo = ({
  children: e,
  ...t
}) => {
  const n = it(as), r = t.pause || !!n.pause, o = t.immediate || !!n.immediate;
  t = iw(() => ({ pause: r, immediate: o }), [r, o]);
  const { Provider: i } = as;
  return /* @__PURE__ */ Dr.createElement(i, { value: t }, e);
}, as = Gw(lo, {});
lo.Provider = as.Provider;
lo.Consumer = as.Consumer;
function Gw(e, t) {
  return Object.assign(e, Dr.createContext(t)), e.Provider._context = e, e.Consumer._context = e, e;
}
var Qs = () => {
  const e = [], t = function(r) {
    $C();
    const o = [];
    return X(e, (i, a) => {
      if (y.und(r))
        o.push(i.start());
      else {
        const s = n(r, i, a);
        s && o.push(i.start(s));
      }
    }), o;
  };
  t.current = e, t.add = function(r) {
    e.includes(r) || e.push(r);
  }, t.delete = function(r) {
    const o = e.indexOf(r);
    ~o && e.splice(o, 1);
  }, t.pause = function() {
    return X(e, (r) => r.pause(...arguments)), this;
  }, t.resume = function() {
    return X(e, (r) => r.resume(...arguments)), this;
  }, t.set = function(r) {
    X(e, (o, i) => {
      const a = y.fun(r) ? r(i, o) : r;
      a && o.set(a);
    });
  }, t.start = function(r) {
    const o = [];
    return X(e, (i, a) => {
      if (y.und(r))
        o.push(i.start());
      else {
        const s = this._getProps(r, i, a);
        s && o.push(i.start(s));
      }
    }), o;
  }, t.stop = function() {
    return X(e, (r) => r.stop(...arguments)), this;
  }, t.update = function(r) {
    return X(e, (o, i) => o.update(this._getProps(r, o, i))), this;
  };
  const n = function(r, o, i) {
    return y.fun(r) ? r(i, o) : r;
  };
  return t._getProps = n, t;
};
function C_(e, t, n) {
  const r = y.fun(t) && t;
  r && !n && (n = []);
  const o = Sn(
    () => r || arguments.length == 3 ? Qs() : void 0,
    []
  ), i = se(0), a = I_(), s = Sn(
    () => ({
      ctrls: [],
      queue: [],
      flush(b, T) {
        const E = el(b, T);
        return i.current > 0 && !s.queue.length && !Object.keys(E).some((O) => !b.springs[O]) ? Zc(b, T) : new Promise((O) => {
          zE(b, E), s.queue.push(() => {
            O(Zc(b, T));
          }), a();
        });
      }
    }),
    []
  ), u = se([...s.ctrls]), c = [], _ = Wc(e) || 0;
  Sn(() => {
    X(u.current.slice(e, _), (b) => {
      Kc(b, o), b.stop(!0);
    }), u.current.length = e, l(_, e);
  }, [e]), Sn(() => {
    l(0, Math.min(_, e));
  }, n);
  function l(b, T) {
    for (let E = b; E < T; E++) {
      const g = u.current[E] || (u.current[E] = new D_(null, s.flush)), O = r ? r(E, g) : t[E];
      O && (c[E] = Iw(O));
    }
  }
  const d = u.current.map((b, T) => el(b, c[T])), h = it(lo), f = Wc(h), p = h !== f && FE(h);
  dt(() => {
    i.current++, s.ctrls = u.current;
    const { queue: b } = s;
    b.length && (s.queue = [], X(b, (T) => T())), X(u.current, (T, E) => {
      o?.add(T), p && T.start({ default: h });
      const g = c[E];
      g && (y_(T, g.ref), T.ref ? T.queue.push(g) : T.start(g));
    });
  }), Ys(() => () => {
    X(s.ctrls, (b) => b.stop(!0));
  });
  const m = d.map((b) => ({ ...b }));
  return o ? [m, o] : m;
}
function _o(e, t) {
  const n = y.fun(e), [[r], o] = C_(
    1,
    n ? e : [e],
    n ? t || [] : t
  );
  return n || arguments.length == 2 ? [r, o] : r;
}
var Dw = () => Qs(), Cw = () => ft(Dw)[0], ww = (e, t) => {
  const n = rw(() => new G_(e, t));
  return Ys(() => () => {
    n.stop();
  }), n;
};
function ZE(e, t, n) {
  const r = y.fun(t) && t;
  r && !n && (n = []);
  let o = !0, i;
  const a = C_(
    e,
    (s, u) => {
      const c = r ? r(s, u) : t;
      return i = c.ref, o = o && c.reverse, c;
    },
    // Ensure the props function is called when no deps exist.
    // This works around the 3 argument rule.
    n || [{}]
  );
  if (dt(() => {
    X(a[1].current, (s, u) => {
      const c = a[1].current[u + (o ? 1 : -1)];
      if (y_(s, i), s.ref) {
        c && s.update({ to: c.springs });
        return;
      }
      c ? s.start({ to: c.springs }) : s.start();
    });
  }, n), r || arguments.length == 3) {
    const s = i ?? a[1];
    return s._getProps = (u, c, _) => {
      const l = y.fun(u) ? u(_, c) : u;
      if (l) {
        const d = s.current[_ + (l.reverse ? 1 : -1)];
        return d && (l.to = d.springs), l;
      }
    }, a;
  }
  return a[0];
}
function eb(e, t, n) {
  const r = y.fun(t) && t, {
    reset: o,
    sort: i,
    trail: a = 0,
    expires: s = !0,
    exitBeforeEnter: u = !1,
    onDestroyed: c,
    ref: _,
    config: l
  } = r ? r() : t, d = Sn(
    () => r || arguments.length == 3 ? Qs() : void 0,
    []
  ), h = rt(e), f = [], p = se(null), m = o ? null : p.current;
  dt(() => {
    p.current = f;
  }), Ys(() => (X(f, (B) => {
    d?.add(B.ctrl), B.ctrl.ref = d;
  }), () => {
    X(p.current, (B) => {
      B.expired && clearTimeout(B.expirationId), Kc(B.ctrl, d), B.ctrl.stop(!0);
    });
  }));
  const b = Pw(h, r ? r() : t, m), T = o && p.current || [];
  dt(
    () => X(T, ({ ctrl: B, item: H, key: Q }) => {
      Kc(B, d), nt(c, H, Q);
    })
  );
  const E = [];
  if (m && X(m, (B, H) => {
    B.expired ? (clearTimeout(B.expirationId), T.push(B)) : (H = E[H] = b.indexOf(B.key), ~H && (f[H] = B));
  }), X(h, (B, H) => {
    f[H] || (f[H] = {
      key: b[H],
      item: B,
      phase: "mount",
      ctrl: new D_()
    }, f[H].ctrl.item = B);
  }), E.length) {
    let B = -1;
    const { leave: H } = r ? r() : t;
    X(E, (Q, ue) => {
      const oe = m[ue];
      ~Q ? (B = f.indexOf(oe), f[B] = { ...oe, item: h[Q] }) : H && f.splice(++B, 0, oe);
    });
  }
  y.fun(i) && f.sort((B, H) => i(B.item, H.item));
  let g = -a;
  const O = I_(), I = zs(t), N = /* @__PURE__ */ new Map(), w = se(/* @__PURE__ */ new Map()), G = se(!1);
  X(f, (B, H) => {
    const Q = B.key, ue = B.phase, oe = r ? r() : t;
    let Se, Le;
    const Ae = nt(oe.delay || 0, Q);
    if (ue == "mount")
      Se = oe.enter, Le = "enter";
    else {
      const V = b.indexOf(Q) < 0;
      if (ue != "leave")
        if (V)
          Se = oe.leave, Le = "leave";
        else if (Se = oe.update)
          Le = "update";
        else
          return;
      else if (!V)
        Se = oe.enter, Le = "enter";
      else
        return;
    }
    if (Se = nt(Se, B.item, H), Se = y.obj(Se) ? qs(Se) : { to: Se }, !Se.config) {
      const V = l || I.config;
      Se.config = nt(V, B.item, H, Le);
    }
    g += a;
    const C = {
      ...I,
      // we need to add our props.delay value you here.
      delay: Ae + g,
      ref: _,
      immediate: oe.immediate,
      // This prevents implied resets.
      reset: !1,
      // Merge any phase-specific props.
      ...Se
    };
    if (Le == "enter" && y.und(C.from)) {
      const V = r ? r() : t, R = y.und(V.initial) || m ? V.from : V.initial;
      C.from = nt(R, B.item, H);
    }
    const { onResolve: x } = C;
    C.onResolve = (V) => {
      nt(x, V);
      const R = p.current, re = R.find((U) => U.key === Q);
      if (re && !(V.cancelled && re.phase != "update") && re.ctrl.idle) {
        const U = R.every((Ee) => Ee.ctrl.idle);
        if (re.phase == "leave") {
          const Ee = nt(s, re.item);
          if (Ee !== !1) {
            const ce = Ee === !0 ? 0 : Ee;
            if (re.expired = !0, !U && ce > 0) {
              ce <= 2147483647 && (re.expirationId = setTimeout(O, ce));
              return;
            }
          }
        }
        U && R.some((Ee) => Ee.expired) && (w.current.delete(re), u && (G.current = !0), O());
      }
    };
    const k = el(B.ctrl, C);
    Le === "leave" && u ? w.current.set(B, { phase: Le, springs: k, payload: C }) : N.set(B, { phase: Le, springs: k, payload: C });
  });
  const D = it(lo), Z = Wc(D), ne = D !== Z && FE(D);
  dt(() => {
    ne && X(f, (B) => {
      B.ctrl.start({ default: D });
    });
  }, [D]), X(N, (B, H) => {
    if (w.current.size) {
      const Q = f.findIndex((ue) => ue.key === H.key);
      f.splice(Q, 1);
    }
  }), dt(
    () => {
      X(
        w.current.size ? w.current : N,
        ({ phase: B, payload: H }, Q) => {
          const { ctrl: ue } = Q;
          Q.phase = B, d?.add(ue), ne && B == "enter" && ue.start({ default: D }), H && (y_(ue, H.ref), (ue.ref || d) && !G.current ? ue.update(H) : (ue.start(H), G.current && (G.current = !1)));
        }
      );
    },
    o ? void 0 : n
  );
  const J = (B) => /* @__PURE__ */ Dr.createElement(Dr.Fragment, null, f.map((H, Q) => {
    const { springs: ue } = N.get(H) || H.ctrl, oe = B({ ...ue }, H.item, H, Q);
    return oe && oe.type ? /* @__PURE__ */ Dr.createElement(
      oe.type,
      {
        ...oe.props,
        key: y.str(H.key) || y.num(H.key) ? H.key : H.ctrl.id,
        ref: oe.ref
      }
    ) : oe;
  }));
  return d ? [J, d] : J;
}
var Uw = 1;
function Pw(e, { key: t, keys: n = t }, r) {
  if (n === null) {
    const o = /* @__PURE__ */ new Set();
    return e.map((i) => {
      const a = r && r.find(
        (s) => s.item === i && s.phase !== "leave" && !o.has(s)
      );
      return a ? (o.add(a), a.key) : Uw++;
    });
  }
  return y.und(n) ? e : y.fun(n) ? e.map(n) : rt(n);
}
var Hw = ({
  container: e,
  ...t
} = {}) => {
  const [n, r] = _o(
    () => ({
      scrollX: 0,
      scrollY: 0,
      scrollXProgress: 0,
      scrollYProgress: 0,
      ...t
    }),
    []
  );
  return dt(() => {
    const o = nw(
      ({ x: i, y: a }) => {
        r.start({
          scrollX: i.current,
          scrollXProgress: i.progress,
          scrollY: a.current,
          scrollYProgress: a.progress
        });
      },
      { container: e?.current || void 0 }
    );
    return () => {
      X(Object.values(n), (i) => i.stop()), o();
    };
  }, []), n;
}, kw = ({
  container: e,
  ...t
}) => {
  const [n, r] = _o(
    () => ({
      width: 0,
      height: 0,
      ...t
    }),
    []
  );
  return dt(() => {
    const o = kE(
      ({ width: i, height: a }) => {
        r.start({
          width: i,
          height: a,
          immediate: n.width.get() === 0 || n.height.get() === 0
        });
      },
      { container: e?.current || void 0 }
    );
    return () => {
      X(Object.values(n), (i) => i.stop()), o();
    };
  }, []), n;
}, Mw = {
  any: 0,
  all: 1
};
function xw(e, t) {
  const [n, r] = ft(!1), o = se(), i = y.fun(e) && e, a = i ? i() : {}, { to: s = {}, from: u = {}, ...c } = a, _ = i ? t : e, [l, d] = _o(() => ({ from: u, ...c }), []);
  return dt(() => {
    const h = o.current, {
      root: f,
      once: p,
      amount: m = "any",
      ...b
    } = _ ?? {};
    if (!h || p && n || typeof IntersectionObserver > "u")
      return;
    const T = /* @__PURE__ */ new WeakMap(), E = () => (s && d.start(s), r(!0), p ? void 0 : () => {
      u && d.start(u), r(!1);
    }), g = (I) => {
      I.forEach((N) => {
        const w = T.get(N.target);
        if (N.isIntersecting !== !!w)
          if (N.isIntersecting) {
            const G = E();
            y.fun(G) ? T.set(N.target, G) : O.unobserve(N.target);
          } else
            w && (w(), T.delete(N.target));
      });
    }, O = new IntersectionObserver(g, {
      root: f && f.current || void 0,
      threshold: typeof m == "number" || Array.isArray(m) ? m : Mw[m],
      ...b
    });
    return O.observe(h), () => O.unobserve(h);
  }, [_]), i ? [o, l] : [o, n];
}
function Lw({ children: e, ...t }) {
  return e(_o(t));
}
function Bw({
  items: e,
  children: t,
  ...n
}) {
  const r = ZE(e.length, n);
  return e.map((o, i) => {
    const a = t(o, i);
    return y.fun(a) ? a(r[i]) : a;
  });
}
function Fw({
  items: e,
  children: t,
  ...n
}) {
  return eb(e, n)(t);
}
var Zs = class extends Js {
  constructor(e, t) {
    super(), this.source = e, this.idle = !0, this._active = /* @__PURE__ */ new Set(), this.calc = Zr(...t);
    const n = this._get(), r = Xc(n);
    A_(this, r.create(n));
  }
  advance(e) {
    const t = this._get(), n = this.get();
    rn(t, n) || (jt(this).setValue(t), this._onChange(t, this.idle)), !this.idle && dh(this._active) && Lu(this);
  }
  _get() {
    const e = y.arr(this.source) ? this.source.map(ut) : rt(ut(this.source));
    return this.calc(...e);
  }
  _start() {
    this.idle && !dh(this._active) && (this.idle = !1, X(Ks(this), (e) => {
      e.done = !1;
    }), At.skipAnimation ? (z.batchedUpdates(() => this.advance()), Lu(this)) : Mi.start(this));
  }
  // Observe our sources only when we're observed.
  _attach() {
    let e = 1;
    X(rt(this.source), (t) => {
      Ot(t) && co(t, this), qc(t) && (t.idle || this._active.add(t), e = Math.max(e, t.priority + 1));
    }), this.priority = e, this._start();
  }
  // Stop observing our sources once we have no observers.
  _detach() {
    X(rt(this.source), (e) => {
      Ot(e) && si(e, this);
    }), this._active.clear(), Lu(this);
  }
  /** @internal */
  eventObserved(e) {
    e.type == "change" ? e.idle ? this.advance() : (this._active.add(e.parent), this._start()) : e.type == "idle" ? this._active.delete(e.parent) : e.type == "priority" && (this.priority = rt(this.source).reduce(
      (t, n) => Math.max(t, (qc(n) ? n.priority : 0) + 1),
      0
    ));
  }
};
function jw(e) {
  return e.idle !== !1;
}
function dh(e) {
  return !e.size || Array.from(e).every(jw);
}
function Lu(e) {
  e.idle || (e.idle = !0, X(Ks(e), (t) => {
    t.done = !0;
  }), ai(e, {
    type: "idle",
    parent: e
  }));
}
var Vw = (e, ...t) => new Zs(e, t), Ww = (e, ...t) => (HE(), new Zs(e, t));
At.assign({
  createStringInterpolator: UE,
  to: (e, t) => new Zs(e, t)
});
var Xw = Mi.advance, tb = /^--/;
function Yw(e, t) {
  return t == null || typeof t == "boolean" || t === "" ? "" : typeof t == "number" && t !== 0 && !tb.test(e) && !(Vo.hasOwnProperty(e) && Vo[e]) ? t + "px" : ("" + t).trim();
}
var fh = {};
function Kw(e, t) {
  if (!e.nodeType || !e.setAttribute)
    return !1;
  const n = e.nodeName === "filter" || e.parentNode && e.parentNode.nodeName === "filter", { style: r, children: o, scrollTop: i, scrollLeft: a, viewBox: s, ...u } = t, c = Object.values(u), _ = Object.keys(u).map(
    (l) => n || e.hasAttribute(l) ? l : fh[l] || (fh[l] = l.replace(
      /([A-Z])/g,
      // Attributes are written in dash case
      (d) => "-" + d.toLowerCase()
    ))
  );
  o !== void 0 && (e.textContent = o);
  for (const l in r)
    if (r.hasOwnProperty(l)) {
      const d = Yw(l, r[l]);
      tb.test(l) ? e.style.setProperty(l, d) : e.style[l] = d;
    }
  _.forEach((l, d) => {
    e.setAttribute(l, c[d]);
  }), i !== void 0 && (e.scrollTop = i), a !== void 0 && (e.scrollLeft = a), s !== void 0 && e.setAttribute("viewBox", s);
}
var Vo = {
  animationIterationCount: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  // SVG-related properties
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}, $w = (e, t) => e + t.charAt(0).toUpperCase() + t.substring(1), zw = ["Webkit", "Ms", "Moz", "O"];
Vo = Object.keys(Vo).reduce((e, t) => (zw.forEach((n) => e[$w(n, t)] = e[t]), e), Vo);
var qw = /^(matrix|translate|scale|rotate|skew)/, Jw = /^(translate)/, Qw = /^(rotate|skew)/, Bu = (e, t) => y.num(e) && e !== 0 ? e + t : e, ya = (e, t) => y.arr(e) ? e.every((n) => ya(n, t)) : y.num(e) ? e === t : parseFloat(e) === t, Zw = class extends $s {
  constructor({ x: e, y: t, z: n, ...r }) {
    const o = [], i = [];
    (e || t || n) && (o.push([e || 0, t || 0, n || 0]), i.push((a) => [
      `translate3d(${a.map((s) => Bu(s, "px")).join(",")})`,
      // prettier-ignore
      ya(a, 0)
    ])), Jt(r, (a, s) => {
      if (s === "transform")
        o.push([a || ""]), i.push((u) => [u, u === ""]);
      else if (qw.test(s)) {
        if (delete r[s], y.und(a))
          return;
        const u = Jw.test(s) ? "px" : Qw.test(s) ? "deg" : "";
        o.push(rt(a)), i.push(
          s === "rotate3d" ? ([c, _, l, d]) => [
            `rotate3d(${c},${_},${l},${Bu(d, u)})`,
            ya(d, 0)
          ] : (c) => [
            `${s}(${c.map((_) => Bu(_, u)).join(",")})`,
            ya(c, s.startsWith("scale") ? 1 : 0)
          ]
        );
      }
    }), o.length && (r.transform = new eU(o, i)), super(r);
  }
}, eU = class extends DE {
  constructor(e, t) {
    super(), this.inputs = e, this.transforms = t, this._value = null;
  }
  get() {
    return this._value || (this._value = this._get());
  }
  _get() {
    let e = "", t = !0;
    return X(this.inputs, (n, r) => {
      const o = ut(n[0]), [i, a] = this.transforms[r](
        y.arr(o) ? o : n.map(ut)
      );
      e += " " + i, t = t && a;
    }), t ? "none" : e;
  }
  // Start observing our inputs once we have an observer.
  observerAdded(e) {
    e == 1 && X(
      this.inputs,
      (t) => X(
        t,
        (n) => Ot(n) && co(n, this)
      )
    );
  }
  // Stop observing our inputs once we have no observers.
  observerRemoved(e) {
    e == 0 && X(
      this.inputs,
      (t) => X(
        t,
        (n) => Ot(n) && si(n, this)
      )
    );
  }
  eventObserved(e) {
    e.type == "change" && (this._value = null), ai(this, e);
  }
}, tU = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
];
At.assign({
  batchedUpdates: Ah,
  createStringInterpolator: UE,
  colors: yC
});
var nU = hw(tU, {
  applyAnimatedValues: Kw,
  createAnimatedStyle: (e) => new Zw(e),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getComponentProps: ({ scrollTop: e, scrollLeft: t, ...n }) => n
}), hh = nU.animated;
const rU = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Any: pw,
  BailSignal: zc,
  Controller: D_,
  FrameValue: Js,
  Globals: At,
  Interpolation: Zs,
  Spring: Lw,
  SpringContext: lo,
  SpringRef: Qs,
  SpringValue: G_,
  Trail: Bw,
  Transition: Fw,
  a: hh,
  animated: hh,
  config: jE,
  createInterpolator: Zr,
  easings: GE,
  inferTo: qs,
  interpolate: Ww,
  to: Vw,
  update: Xw,
  useChain: Ow,
  useInView: xw,
  useIsomorphicLayoutEffect: dt,
  useReducedMotion: uw,
  useResize: kw,
  useScroll: Hw,
  useSpring: _o,
  useSpringRef: Cw,
  useSpringValue: ww,
  useSprings: C_,
  useTrail: ZE,
  useTransition: eb
}, Symbol.toStringTag, { value: "Module" })), oU = () => {
  const { Spring: e } = Ss(), t = _o({
    from: {
      x: -100
    },
    to: {
      x: 0
    },
    config: e.config.stiff
  });
  return {
    animatedDiv: e.a.div,
    spring: t
  };
}, iU = Ue.div`
  background: ${({ theme: e }) => e.grey};
  border-bottom: 2px solid ${({ theme: e }) => e.lightGrey};
  height: ${It("100%", "42px")};
  box-sizing: border-box;
  ${_r("space-between", "center")}
  ${l0(23)}
`, aU = Ue.h2`
  color: ${({ theme: e }) => e.light};
`, sU = Tn(() => {
  const e = ds(), t = e.getActiveTab(), { spring: n, animatedDiv: r } = oU(), o = zn(), { openFile: i, saveFile: a } = yT(), s = bC(), u = !e.isAllowedToExecute(), c = cr(), { isSignInOpened: _, ModalComponents: l } = c.state, d = () => {
    o.tabs.createTab();
  }, h = (f) => () => {
    c.update({
      isSignInOpened: f
    });
  };
  return /* @__PURE__ */ mt(iU, { as: r, style: n, children: [
    /* @__PURE__ */ K(
      fC,
      {
        runCode: s,
        createTab: d,
        openFile: i,
        saveFile: a
      }
    ),
    /* @__PURE__ */ mt(aU, { children: [
      t.label,
      " - CodeGear"
    ] }),
    /* @__PURE__ */ K(
      mC,
      {
        isDisabled: u,
        runCode: s,
        openSignIn: h(!0)
      }
    ),
    /* @__PURE__ */ K(
      l.SignIn,
      {
        isOpen: _,
        onClose: h(!1)
      }
    )
  ] });
}), VU = () => /* @__PURE__ */ K(Ll, { children: /* @__PURE__ */ K(sU, {}) });
class uU {
  constructor(t) {
    Yn(this), this.state = t, this.getters = t.getters, this.actions = t.actions, this.codeRunner = new EC(t);
  }
}
class cU {
  constructor() {
    this.activeKey = "", this.content = [], this.theme = "vs-dark", this.fontSize = 20, this.tabSize = 4, this.customBackground = "#3d3d3d", this.customColor = "#3d3d3d", this.isStorageDisabled = !1, this.executeMessages = [], Yn(this);
    const t = new dl(this.isStorageDisabled);
    this.storage = t, this.getters = new uC(this), this.actions = new sC(this), this.services = new uU(this), this.theme = t.get("EDITOR_THEME", "vs-dark"), this.fontSize = Number(
      t.get("EDITOR_FONT_SIZE", 20)
    ), this.tabSize = Number(
      t.get("EDITOR_TAB_SIZE", 4)
    ), this.customBackground = t.get(
      "EDITOR_CUSTOM_BACKGROUND",
      "#3d3d3d"
    ), this.customColor = t.get("EDITOR_CUSTOM_COLOR", "#3d3d3d");
    const n = t.get("EDITOR_CONTENT_DATA", []);
    if (this.executeMessages = t.get(
      "EDITOR_EXECUTE_MESSAGES",
      []
    ), n.length === 0) {
      this.actions.tabs.createTab();
      const r = this.content[0];
      r.lang = lC, r.content = cC;
    }
    this.content = [...this.content, ...n], this.activeKey = this.content[0].key;
  }
}
const fo = ss({}), WU = ({ children: e }) => {
  const t = new cU();
  return /* @__PURE__ */ K(fo.Provider, { value: t, children: e });
}, nb = ss({}), XU = ({ children: e, SignIn: t }) => {
  const n = Sn(
    () => ({
      isSettingsOpened: !1,
      isHtmlPreviewOpened: !1,
      isTerminalOpened: !0,
      isSignInOpened: !1,
      selectedTerminalTab: "terminal",
      ModalComponents: {
        SignIn: t
      }
    }),
    []
  ), r = (u, c) => ({ ...u, ...c }), [o, i] = ub(r, n), a = (u) => {
    o[u] ? i({ [u]: !1 }) : i({ [u]: !0 });
  }, s = Sn(
    () => ({
      state: o,
      update: i,
      toggle: a
    }),
    [o]
  );
  return /* @__PURE__ */ K(nb.Provider, { value: s, children: e });
}, lU = () => {
  const e = Hp();
  return ({ background: t, color: n }) => {
    e?.editor.defineTheme(vT, {
      base: "vs",
      inherit: !0,
      rules: [],
      colors: {
        "editor.background": t,
        "editor.foreground": n
      }
    });
  };
};
function _U(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function ph(e, t) {
  for (var n in e)
    if (n !== "__source" && !(n in t))
      return !0;
  for (var r in t)
    if (r !== "__source" && e[r] !== t[r])
      return !0;
  return !1;
}
function mh(e) {
  this.props = e;
}
(mh.prototype = new _n()).isPureReactComponent = !0, mh.prototype.shouldComponentUpdate = function(e, t) {
  return ph(this.props, e) || ph(this.state, t);
};
var Th = Y.__b;
Y.__b = function(e) {
  e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), Th && Th(e);
};
var dU = Y.__e;
Y.__e = function(e, t, n, r) {
  if (e.then) {
    for (var o, i = t; i = i.__; )
      if ((o = i.__c) && o.__c)
        return t.__e == null && (t.__e = n.__e, t.__k = n.__k), o.__c(e, t);
  }
  dU(e, t, n, r);
};
var Eh = Y.unmount;
function rb(e, t, n) {
  return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(r) {
    typeof r.__c == "function" && r.__c();
  }), e.__c.__H = null), (e = _U({}, e)).__c != null && (e.__c.__P === n && (e.__c.__P = t), e.__c = null), e.__k = e.__k && e.__k.map(function(r) {
    return rb(r, t, n);
  })), e;
}
function ob(e, t, n) {
  return e && (e.__v = null, e.__k = e.__k && e.__k.map(function(r) {
    return ob(r, t, n);
  }), e.__c && e.__c.__P === t && (e.__e && n.insertBefore(e.__e, e.__d), e.__c.__e = !0, e.__c.__P = n)), e;
}
function Fu() {
  this.__u = 0, this.t = null, this.__b = null;
}
function ib(e) {
  var t = e.__.__c;
  return t && t.__a && t.__a(e);
}
function na() {
  this.u = null, this.o = null;
}
Y.unmount = function(e) {
  var t = e.__c;
  t && t.__R && t.__R(), t && e.__h === !0 && (e.type = null), Eh && Eh(e);
}, (Fu.prototype = new _n()).__c = function(e, t) {
  var n = t.__c, r = this;
  r.t == null && (r.t = []), r.t.push(n);
  var o = ib(r.__v), i = !1, a = function() {
    i || (i = !0, n.__R = null, o ? o(s) : s());
  };
  n.__R = a;
  var s = function() {
    if (!--r.__u) {
      if (r.state.__a) {
        var c = r.state.__a;
        r.__v.__k[0] = ob(c, c.__c.__P, c.__c.__O);
      }
      var _;
      for (r.setState({ __a: r.__b = null }); _ = r.t.pop(); )
        _.forceUpdate();
    }
  }, u = t.__h === !0;
  r.__u++ || u || r.setState({ __a: r.__b = r.__v.__k[0] }), e.then(a, a);
}, Fu.prototype.componentWillUnmount = function() {
  this.t = [];
}, Fu.prototype.render = function(e, t) {
  if (this.__b) {
    if (this.__v.__k) {
      var n = document.createElement("div"), r = this.__v.__k[0].__c;
      this.__v.__k[0] = rb(this.__b, n, r.__O = r.__P);
    }
    this.__b = null;
  }
  var o = t.__a && _f(ei, null, e.fallback);
  return o && (o.__h = null), [_f(ei, null, t.__a ? null : e.children), o];
};
var bh = function(e, t, n) {
  if (++n[1] === n[0] && e.o.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.o.size))
    for (n = e.u; n; ) {
      for (; n.length > 3; )
        n.pop()();
      if (n[1] < n[0])
        break;
      e.u = n = n[2];
    }
};
(na.prototype = new _n()).__a = function(e) {
  var t = this, n = ib(t.__v), r = t.o.get(e);
  return r[0]++, function(o) {
    var i = function() {
      t.props.revealOrder ? (r.push(o), bh(t, e, r)) : o();
    };
    n ? n(i) : i();
  };
}, na.prototype.render = function(e) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var t = Ya(e.children);
  e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
  for (var n = t.length; n--; )
    this.o.set(t[n], this.u = [1, 0, this.u]);
  return e.children;
}, na.prototype.componentDidUpdate = na.prototype.componentDidMount = function() {
  var e = this;
  this.o.forEach(function(t, n) {
    bh(e, n, t);
  });
};
var fU = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, hU = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, pU = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, mU = /[A-Z0-9]/g, TU = typeof document < "u", EU = function(e) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e);
};
_n.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
  Object.defineProperty(_n.prototype, e, { configurable: !0, get: function() {
    return this["UNSAFE_" + e];
  }, set: function(t) {
    Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t });
  } });
});
var Oh = Y.event;
function bU() {
}
function OU() {
  return this.cancelBubble;
}
function gU() {
  return this.defaultPrevented;
}
Y.event = function(e) {
  return Oh && (e = Oh(e)), e.persist = bU, e.isPropagationStopped = OU, e.isDefaultPrevented = gU, e.nativeEvent = e;
};
var RU = { enumerable: !1, configurable: !0, get: function() {
  return this.class;
} }, gh = Y.vnode;
Y.vnode = function(e) {
  typeof e.type == "string" && function(t) {
    var n = t.props, r = t.type, o = {};
    for (var i in n) {
      var a = n[i];
      if (!(i === "value" && "defaultValue" in n && a == null || TU && i === "children" && r === "noscript" || i === "class" || i === "className")) {
        var s = i.toLowerCase();
        i === "defaultValue" && "value" in n && n.value == null ? i = "value" : i === "download" && a === !0 ? a = "" : s === "ondoubleclick" ? i = "ondblclick" : s !== "onchange" || r !== "input" && r !== "textarea" || EU(n.type) ? s === "onfocus" ? i = "onfocusin" : s === "onblur" ? i = "onfocusout" : pU.test(i) ? i = s : r.indexOf("-") === -1 && hU.test(i) ? i = i.replace(mU, "-$&").toLowerCase() : a === null && (a = void 0) : s = i = "oninput", s === "oninput" && o[i = s] && (i = "oninputCapture"), o[i] = a;
      }
    }
    r == "select" && o.multiple && Array.isArray(o.value) && (o.value = Ya(n.children).forEach(function(u) {
      u.props.selected = o.value.indexOf(u.props.value) != -1;
    })), r == "select" && o.defaultValue != null && (o.value = Ya(n.children).forEach(function(u) {
      u.props.selected = o.multiple ? o.defaultValue.indexOf(u.props.value) != -1 : o.defaultValue == u.props.value;
    })), n.class && !n.className ? (o.class = n.class, Object.defineProperty(o, "className", RU)) : (n.className && !n.class || n.class && n.className) && (o.class = o.className = n.className), t.props = o;
  }(e), e.$$typeof = fU, gh && gh(e);
};
var Rh = Y.__r;
Y.__r = function(e) {
  Rh && Rh(e), e.__c;
};
var vh = Y.diffed;
Y.diffed = function(e) {
  vh && vh(e);
  var t = e.props, n = e.__e;
  n != null && e.type === "textarea" && "value" in t && t.value !== n.value && (n.value = t.value == null ? "" : t.value);
};
const YU = cb(() => import("./editor-d2862522.mjs").then((e) => e.e));
export {
  fo as $,
  Ll as A,
  zn as B,
  xU as C,
  Nc as D,
  AT as E,
  SR as F,
  jl as G,
  VU as H,
  hC as I,
  LU as J,
  Nn as K,
  vT as L,
  XU as M,
  CU as N,
  kU as O,
  T0 as P,
  I0 as Q,
  $A as R,
  RT as S,
  FU as T,
  Hp as U,
  v0 as V,
  MU as W,
  YU as X,
  sC as Y,
  uC as Z,
  cU as _,
  ro as a,
  nb as a0,
  lU as b,
  Ss as c,
  cr as d,
  bg as e,
  jU as f,
  wU as g,
  gg as h,
  DR as i,
  ot as j,
  Tg as k,
  kp as l,
  qA as m,
  $l as n,
  Tn as o,
  DU as p,
  _r as q,
  WU as r,
  Ue as s,
  N0 as t,
  zA as u,
  BU as v,
  It as w,
  UU as x,
  PU as y,
  HU as z
};
