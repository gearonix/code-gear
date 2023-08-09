import * as Un from "react";
import Pe, { useState as dt, forwardRef as Fn, memo as jn, useContext as ot, useRef as ae, useCallback as jr, useEffect as Le, createContext as hs, useMemo as Sr, createElement as lO, useImperativeHandle as Nh, useLayoutEffect as _O, useReducer as fO, lazy as dO } from "react";
import { jsx as K, jsxs as mt, Fragment as Ah } from "react/jsx-runtime";
import { unstable_batchedUpdates as yh } from "react-dom";
import { message as hO, ConfigProvider as pO, Button as Di, Select as mO, Tabs as Sh, Popconfirm as TO } from "antd";
import { Link as EO } from "react-router-dom";
import "react-smooth-scrollbar";
function he(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  throw new Error(typeof e == "number" ? "[MobX] minified error nr: " + e + (r.length ? " " + r.map(String).join(",") : "") + ". Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts" : "[MobX] " + e);
}
var OO = {};
function ol() {
  return typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : OO;
}
var Dh = Object.assign, Ha = Object.getOwnPropertyDescriptor, Xt = Object.defineProperty, mo = Object.prototype, $u = [];
Object.freeze($u);
var Gh = {};
Object.freeze(Gh);
var bO = typeof Proxy < "u", RO = /* @__PURE__ */ Object.toString();
function Ch() {
  bO || he("Proxy not available");
}
function Uh(e) {
  var t = !1;
  return function() {
    if (!t)
      return t = !0, e.apply(this, arguments);
  };
}
var In = function() {
};
function Mt(e) {
  return typeof e == "function";
}
function un(e) {
  var t = typeof e;
  switch (t) {
    case "string":
    case "symbol":
    case "number":
      return !0;
  }
  return !1;
}
function ps(e) {
  return e !== null && typeof e == "object";
}
function fr(e) {
  if (!ps(e))
    return !1;
  var t = Object.getPrototypeOf(e);
  if (t == null)
    return !0;
  var r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r.toString() === RO;
}
function wh(e) {
  var t = e?.constructor;
  return t ? t.name === "GeneratorFunction" || t.displayName === "GeneratorFunction" : !1;
}
function To(e, t, r) {
  Xt(e, t, {
    enumerable: !1,
    writable: !0,
    configurable: !0,
    value: r
  });
}
function Ph(e, t, r) {
  Xt(e, t, {
    enumerable: !1,
    writable: !1,
    configurable: !0,
    value: r
  });
}
function $r(e, t) {
  var r = "isMobX" + e;
  return t.prototype[r] = !0, function(n) {
    return ps(n) && n[r] === !0;
  };
}
function ii(e) {
  return e instanceof Map;
}
function Eo(e) {
  return e instanceof Set;
}
var Hh = typeof Object.getOwnPropertySymbols < "u";
function vO(e) {
  var t = Object.keys(e);
  if (!Hh)
    return t;
  var r = Object.getOwnPropertySymbols(e);
  return r.length ? [].concat(t, r.filter(function(n) {
    return mo.propertyIsEnumerable.call(e, n);
  })) : t;
}
var Vn = typeof Reflect < "u" && Reflect.ownKeys ? Reflect.ownKeys : Hh ? function(e) {
  return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
} : (
  /* istanbul ignore next */
  Object.getOwnPropertyNames
);
function Mh(e) {
  return e === null ? null : typeof e == "object" ? "" + e : e;
}
function ur(e, t) {
  return mo.hasOwnProperty.call(e, t);
}
var gO = Object.getOwnPropertyDescriptors || function(t) {
  var r = {};
  return Vn(t).forEach(function(n) {
    r[n] = Ha(t, n);
  }), r;
};
function w_(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, AO(n.key), n);
  }
}
function al(e, t, r) {
  return t && w_(e.prototype, t), r && w_(e, r), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function Wn() {
  return Wn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Wn.apply(this, arguments);
}
function kh(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, zu(e, t);
}
function zu(e, t) {
  return zu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, zu(e, t);
}
function cu(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function IO(e, t) {
  if (e) {
    if (typeof e == "string")
      return P_(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return P_(e, t);
  }
}
function P_(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function Nn(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r)
    return (r = r.call(e)).next.bind(r);
  if (Array.isArray(e) || (r = IO(e)) || t && e && typeof e.length == "number") {
    r && (e = r);
    var n = 0;
    return function() {
      return n >= e.length ? {
        done: !0
      } : {
        done: !1,
        value: e[n++]
      };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function NO(e, t) {
  if (typeof e != "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (typeof n != "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function AO(e) {
  var t = NO(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
var Vt = /* @__PURE__ */ Symbol("mobx-stored-annotations");
function Yt(e) {
  function t(r, n) {
    Oo(r, n, e);
  }
  return Object.assign(t, e);
}
function Oo(e, t, r) {
  ur(e, Vt) || To(e, Vt, Wn({}, e[Vt])), HO(r) || (e[Vt][t] = r);
}
function yO(e) {
  return ur(e, Vt) || To(e, Vt, Wn({}, e[Vt])), e[Vt];
}
var z = /* @__PURE__ */ Symbol("mobx administration"), bo = /* @__PURE__ */ function() {
  function e(r) {
    r === void 0 && (r = "Atom"), this.name_ = void 0, this.isPendingUnobservation_ = !1, this.isBeingObserved_ = !1, this.observers_ = /* @__PURE__ */ new Set(), this.diffValue_ = 0, this.lastAccessedBy_ = 0, this.lowestObserverState_ = de.NOT_TRACKING_, this.onBOL = void 0, this.onBUOL = void 0, this.name_ = r;
  }
  var t = e.prototype;
  return t.onBO = function() {
    this.onBOL && this.onBOL.forEach(function(n) {
      return n();
    });
  }, t.onBUO = function() {
    this.onBUOL && this.onBUOL.forEach(function(n) {
      return n();
    });
  }, t.reportObserved = function() {
    return np(this);
  }, t.reportChanged = function() {
    lt(), ip(this), U.stateVersion = U.stateVersion < Number.MAX_SAFE_INTEGER ? U.stateVersion + 1 : Number.MIN_SAFE_INTEGER, _t();
  }, t.toString = function() {
    return this.name_;
  }, e;
}(), sl = /* @__PURE__ */ $r("Atom", bo);
function Lh(e, t, r) {
  t === void 0 && (t = In), r === void 0 && (r = In);
  var n = new bo(e);
  return t !== In && Mb(n, t), r !== In && _p(n, r), n;
}
function SO(e, t) {
  return e === t;
}
function DO(e, t) {
  return hl(e, t);
}
function GO(e, t) {
  return hl(e, t, 1);
}
function CO(e, t) {
  return Object.is ? Object.is(e, t) : e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var Ma = {
  identity: SO,
  structural: DO,
  default: CO,
  shallow: GO
};
function Xn(e, t, r) {
  return _l(e) ? e : Array.isArray(e) ? qe.array(e, {
    name: r
  }) : fr(e) ? qe.object(e, void 0, {
    name: r
  }) : ii(e) ? qe.map(e, {
    name: r
  }) : Eo(e) ? qe.set(e, {
    name: r
  }) : typeof e == "function" && !ll(e) && !Fa(e) ? wh(e) ? $i(e) : Ki(r, e) : e;
}
function UO(e, t, r) {
  if (e == null || Kn(e) || yo(e) || Jr(e) || ln(e))
    return e;
  if (Array.isArray(e))
    return qe.array(e, {
      name: r,
      deep: !1
    });
  if (fr(e))
    return qe.object(e, void 0, {
      name: r,
      deep: !1
    });
  if (ii(e))
    return qe.map(e, {
      name: r,
      deep: !1
    });
  if (Eo(e))
    return qe.set(e, {
      name: r,
      deep: !1
    });
}
function ms(e) {
  return e;
}
function wO(e, t) {
  return hl(e, t) ? t : e;
}
var PO = "override";
function HO(e) {
  return e.annotationType_ === PO;
}
function Ro(e, t) {
  return {
    annotationType_: e,
    options_: t,
    make_: MO,
    extend_: kO
  };
}
function MO(e, t, r, n) {
  var i;
  if ((i = this.options_) != null && i.bound)
    return this.extend_(e, t, r, !1) === null ? 0 : 1;
  if (n === e.target_)
    return this.extend_(e, t, r, !1) === null ? 0 : 2;
  if (ll(r.value))
    return 1;
  var o = Bh(e, this, t, r, !1);
  return Xt(n, t, o), 2;
}
function kO(e, t, r, n) {
  var i = Bh(e, this, t, r);
  return e.defineProperty_(t, i, n);
}
function LO(e, t, r, n) {
  t.annotationType_, n.value;
}
function Bh(e, t, r, n, i) {
  var o, a, s, u, c, _, l;
  i === void 0 && (i = U.safeDescriptors), LO(e, t, r, n);
  var f = n.value;
  if ((o = t.options_) != null && o.bound) {
    var h;
    f = f.bind((h = e.proxy_) != null ? h : e.target_);
  }
  return {
    value: Yn(
      (a = (s = t.options_) == null ? void 0 : s.name) != null ? a : r.toString(),
      f,
      (u = (c = t.options_) == null ? void 0 : c.autoAction) != null ? u : !1,
      // https://github.com/mobxjs/mobx/discussions/3140
      (_ = t.options_) != null && _.bound ? (l = e.proxy_) != null ? l : e.target_ : void 0
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
function xh(e, t) {
  return {
    annotationType_: e,
    options_: t,
    make_: BO,
    extend_: xO
  };
}
function BO(e, t, r, n) {
  var i;
  if (n === e.target_)
    return this.extend_(e, t, r, !1) === null ? 0 : 2;
  if ((i = this.options_) != null && i.bound && (!ur(e.target_, t) || !Fa(e.target_[t])) && this.extend_(e, t, r, !1) === null)
    return 0;
  if (Fa(r.value))
    return 1;
  var o = Fh(e, this, t, r, !1, !1);
  return Xt(n, t, o), 2;
}
function xO(e, t, r, n) {
  var i, o = Fh(e, this, t, r, (i = this.options_) == null ? void 0 : i.bound);
  return e.defineProperty_(t, o, n);
}
function FO(e, t, r, n) {
  t.annotationType_, n.value;
}
function Fh(e, t, r, n, i, o) {
  o === void 0 && (o = U.safeDescriptors), FO(e, t, r, n);
  var a = n.value;
  if (Fa(a) || (a = $i(a)), i) {
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
function ul(e, t) {
  return {
    annotationType_: e,
    options_: t,
    make_: jO,
    extend_: VO
  };
}
function jO(e, t, r) {
  return this.extend_(e, t, r, !1) === null ? 0 : 1;
}
function VO(e, t, r, n) {
  return WO(e, this, t, r), e.defineComputedProperty_(t, Wn({}, this.options_, {
    get: r.get,
    set: r.set
  }), n);
}
function WO(e, t, r, n) {
  t.annotationType_, n.get;
}
function Ts(e, t) {
  return {
    annotationType_: e,
    options_: t,
    make_: XO,
    extend_: YO
  };
}
function XO(e, t, r) {
  return this.extend_(e, t, r, !1) === null ? 0 : 1;
}
function YO(e, t, r, n) {
  var i, o;
  return KO(e, this), e.defineObservableProperty_(t, r.value, (i = (o = this.options_) == null ? void 0 : o.enhancer) != null ? i : Xn, n);
}
function KO(e, t, r, n) {
  t.annotationType_;
}
var $O = "true", zO = /* @__PURE__ */ jh();
function jh(e) {
  return {
    annotationType_: $O,
    options_: e,
    make_: qO,
    extend_: JO
  };
}
function qO(e, t, r, n) {
  var i, o;
  if (r.get)
    return Es.make_(e, t, r, n);
  if (r.set) {
    var a = Yn(t.toString(), r.set);
    return n === e.target_ ? e.defineProperty_(t, {
      configurable: U.safeDescriptors ? e.isPlainObject_ : !0,
      set: a
    }) === null ? 0 : 2 : (Xt(n, t, {
      configurable: !0,
      set: a
    }), 2);
  }
  if (n !== e.target_ && typeof r.value == "function") {
    var s;
    if (wh(r.value)) {
      var u, c = (u = this.options_) != null && u.autoBind ? $i.bound : $i;
      return c.make_(e, t, r, n);
    }
    var _ = (s = this.options_) != null && s.autoBind ? Ki.bound : Ki;
    return _.make_(e, t, r, n);
  }
  var l = ((i = this.options_) == null ? void 0 : i.deep) === !1 ? qe.ref : qe;
  if (typeof r.value == "function" && (o = this.options_) != null && o.autoBind) {
    var f;
    r.value = r.value.bind((f = e.proxy_) != null ? f : e.target_);
  }
  return l.make_(e, t, r, n);
}
function JO(e, t, r, n) {
  var i, o;
  if (r.get)
    return Es.extend_(e, t, r, n);
  if (r.set)
    return e.defineProperty_(t, {
      configurable: U.safeDescriptors ? e.isPlainObject_ : !0,
      set: Yn(t.toString(), r.set)
    }, n);
  if (typeof r.value == "function" && (i = this.options_) != null && i.autoBind) {
    var a;
    r.value = r.value.bind((a = e.proxy_) != null ? a : e.target_);
  }
  var s = ((o = this.options_) == null ? void 0 : o.deep) === !1 ? qe.ref : qe;
  return s.extend_(e, t, r, n);
}
var QO = "observable", ZO = "observable.ref", eb = "observable.shallow", tb = "observable.struct", Vh = {
  deep: !0,
  name: void 0,
  defaultDecorator: void 0,
  proxy: !0
};
Object.freeze(Vh);
function Yo(e) {
  return e || Vh;
}
var Wh = /* @__PURE__ */ Ts(QO), rb = /* @__PURE__ */ Ts(ZO, {
  enhancer: ms
}), nb = /* @__PURE__ */ Ts(eb, {
  enhancer: UO
}), ib = /* @__PURE__ */ Ts(tb, {
  enhancer: wO
}), Xh = /* @__PURE__ */ Yt(Wh);
function Ko(e) {
  return e.deep === !0 ? Xn : e.deep === !1 ? ms : ab(e.defaultDecorator);
}
function ob(e) {
  var t;
  return e ? (t = e.defaultDecorator) != null ? t : jh(e) : void 0;
}
function ab(e) {
  var t, r;
  return e && (t = (r = e.options_) == null ? void 0 : r.enhancer) != null ? t : Xn;
}
function Yh(e, t, r) {
  if (un(t)) {
    Oo(e, t, Wh);
    return;
  }
  return _l(e) ? e : fr(e) ? qe.object(e, t, r) : Array.isArray(e) ? qe.array(e, t) : ii(e) ? qe.map(e, t) : Eo(e) ? qe.set(e, t) : typeof e == "object" && e !== null ? e : qe.box(e, t);
}
Dh(Yh, Xh);
var sb = {
  box: function(t, r) {
    var n = Yo(r);
    return new on(t, Ko(n), n.name, !0, n.equals);
  },
  array: function(t, r) {
    var n = Yo(r);
    return (U.useProxies === !1 || n.proxy === !1 ? aR : Jb)(t, Ko(n), n.name);
  },
  map: function(t, r) {
    var n = Yo(r);
    return new bp(t, Ko(n), n.name);
  },
  set: function(t, r) {
    var n = Yo(r);
    return new gp(t, Ko(n), n.name);
  },
  object: function(t, r, n) {
    return dp(U.useProxies === !1 || n?.proxy === !1 ? So({}, n) : Kb({}, n), t, r);
  },
  ref: /* @__PURE__ */ Yt(rb),
  shallow: /* @__PURE__ */ Yt(nb),
  deep: Xh,
  struct: /* @__PURE__ */ Yt(ib)
}, qe = /* @__PURE__ */ Dh(Yh, sb), Kh = "computed", ub = "computed.struct", $h = /* @__PURE__ */ ul(Kh), cb = /* @__PURE__ */ ul(ub, {
  equals: Ma.structural
}), Es = function(t, r) {
  if (un(r))
    return Oo(t, r, $h);
  if (fr(t))
    return Yt(ul(Kh, t));
  var n = fr(r) ? r : {};
  return n.get = t, n.name || (n.name = t.name || ""), new Xi(n);
};
Object.assign(Es, $h);
Es.struct = /* @__PURE__ */ Yt(cb);
var H_, M_, ka = 0, lb = 1, _b = (H_ = (M_ = /* @__PURE__ */ Ha(function() {
}, "name")) == null ? void 0 : M_.configurable) != null ? H_ : !1, k_ = {
  value: "action",
  configurable: !0,
  writable: !1,
  enumerable: !1
};
function Yn(e, t, r, n) {
  r === void 0 && (r = !1);
  function i() {
    return fb(e, r, t, n || this, arguments);
  }
  return i.isMobxAction = !0, _b && (k_.value = e, Xt(i, "name", k_)), i;
}
function fb(e, t, r, n, i) {
  var o = db(e, t);
  try {
    return r.apply(n, i);
  } catch (a) {
    throw o.error_ = a, a;
  } finally {
    hb(o);
  }
}
function db(e, t, r, n) {
  var i = !1, o = 0, a = U.trackingDerivation, s = !t || !a;
  lt();
  var u = U.allowStateChanges;
  s && (oi(), u = vo(!0));
  var c = cl(!0), _ = {
    runAsAction_: s,
    prevDerivation_: a,
    prevAllowStateChanges_: u,
    prevAllowStateReads_: c,
    notifySpy_: i,
    startTime_: o,
    actionId_: lb++,
    parentActionId_: ka
  };
  return ka = _.actionId_, _;
}
function hb(e) {
  ka !== e.actionId_ && he(30), ka = e.parentActionId_, e.error_ !== void 0 && (U.suppressReactionErrors = !0), go(e.prevAllowStateChanges_), Ui(e.prevAllowStateReads_), _t(), e.runAsAction_ && Hr(e.prevDerivation_), U.suppressReactionErrors = !1;
}
function pb(e, t) {
  var r = vo(e);
  try {
    return t();
  } finally {
    go(r);
  }
}
function vo(e) {
  var t = U.allowStateChanges;
  return U.allowStateChanges = e, t;
}
function go(e) {
  U.allowStateChanges = e;
}
var zh;
zh = Symbol.toPrimitive;
var on = /* @__PURE__ */ function(e) {
  kh(t, e);
  function t(n, i, o, a, s) {
    var u;
    return o === void 0 && (o = "ObservableValue"), s === void 0 && (s = Ma.default), u = e.call(this, o) || this, u.enhancer = void 0, u.name_ = void 0, u.equals = void 0, u.hasUnreportedChange_ = !1, u.interceptors_ = void 0, u.changeListeners_ = void 0, u.value_ = void 0, u.dehancer = void 0, u.enhancer = i, u.name_ = o, u.equals = s, u.value_ = i(n, void 0, o), u;
  }
  var r = t.prototype;
  return r.dehanceValue = function(i) {
    return this.dehancer !== void 0 ? this.dehancer(i) : i;
  }, r.set = function(i) {
    this.value_, i = this.prepareNewValue_(i), i !== U.UNCHANGED && this.setNewValue_(i);
  }, r.prepareNewValue_ = function(i) {
    if (bt(this)) {
      var o = Rt(this, {
        object: this,
        type: Kt,
        newValue: i
      });
      if (!o)
        return U.UNCHANGED;
      i = o.newValue;
    }
    return i = this.enhancer(i, this.value_, this.name_), this.equals(this.value_, i) ? U.UNCHANGED : i;
  }, r.setNewValue_ = function(i) {
    var o = this.value_;
    this.value_ = i, this.reportChanged(), Pt(this) && Ht(this, {
      type: Kt,
      object: this,
      newValue: i,
      oldValue: o
    });
  }, r.get = function() {
    return this.reportObserved(), this.dehanceValue(this.value_);
  }, r.intercept_ = function(i) {
    return No(this, i);
  }, r.observe_ = function(i, o) {
    return o && i({
      observableKind: "value",
      debugObjectName: this.name_,
      object: this,
      type: Kt,
      newValue: this.value_,
      oldValue: void 0
    }), Ao(this, i);
  }, r.raw = function() {
    return this.value_;
  }, r.toJSON = function() {
    return this.get();
  }, r.toString = function() {
    return this.name_ + "[" + this.value_ + "]";
  }, r.valueOf = function() {
    return Mh(this.get());
  }, r[zh] = function() {
    return this.valueOf();
  }, t;
}(bo), mb = /* @__PURE__ */ $r("ObservableValue", on), qh;
qh = Symbol.toPrimitive;
var Xi = /* @__PURE__ */ function() {
  function e(r) {
    this.dependenciesState_ = de.NOT_TRACKING_, this.observing_ = [], this.newObserving_ = null, this.isBeingObserved_ = !1, this.isPendingUnobservation_ = !1, this.observers_ = /* @__PURE__ */ new Set(), this.diffValue_ = 0, this.runId_ = 0, this.lastAccessedBy_ = 0, this.lowestObserverState_ = de.UP_TO_DATE_, this.unboundDepsCount_ = 0, this.value_ = new Ba(null), this.name_ = void 0, this.triggeredBy_ = void 0, this.isComputing_ = !1, this.isRunningSetter_ = !1, this.derivation = void 0, this.setter_ = void 0, this.isTracing_ = La.NONE, this.scope_ = void 0, this.equals_ = void 0, this.requiresReaction_ = void 0, this.keepAlive_ = void 0, this.onBOL = void 0, this.onBUOL = void 0, r.get || he(31), this.derivation = r.get, this.name_ = r.name || "ComputedValue", r.set && (this.setter_ = Yn("ComputedValue-setter", r.set)), this.equals_ = r.equals || (r.compareStructural || r.struct ? Ma.structural : Ma.default), this.scope_ = r.context, this.requiresReaction_ = r.requiresReaction, this.keepAlive_ = !!r.keepAlive;
  }
  var t = e.prototype;
  return t.onBecomeStale_ = function() {
    Rb(this);
  }, t.onBO = function() {
    this.onBOL && this.onBOL.forEach(function(n) {
      return n();
    });
  }, t.onBUO = function() {
    this.onBUOL && this.onBUOL.forEach(function(n) {
      return n();
    });
  }, t.get = function() {
    if (this.isComputing_ && he(32, this.name_, this.derivation), U.inBatch === 0 && // !globalState.trackingDerivatpion &&
    this.observers_.size === 0 && !this.keepAlive_)
      qu(this) && (this.warnAboutUntrackedRead_(), lt(), this.value_ = this.computeValue_(!1), _t());
    else if (np(this), qu(this)) {
      var n = U.trackingContext;
      this.keepAlive_ && !n && (U.trackingContext = this), this.trackAndCompute() && bb(this), U.trackingContext = n;
    }
    var i = this.value_;
    if (la(i))
      throw i.cause;
    return i;
  }, t.set = function(n) {
    if (this.setter_) {
      this.isRunningSetter_ && he(33, this.name_), this.isRunningSetter_ = !0;
      try {
        this.setter_.call(this.scope_, n);
      } finally {
        this.isRunningSetter_ = !1;
      }
    } else
      he(34, this.name_);
  }, t.trackAndCompute = function() {
    var n = this.value_, i = (
      /* see #1208 */
      this.dependenciesState_ === de.NOT_TRACKING_
    ), o = this.computeValue_(!0), a = i || la(n) || la(o) || !this.equals_(n, o);
    return a && (this.value_ = o), a;
  }, t.computeValue_ = function(n) {
    this.isComputing_ = !0;
    var i = vo(!1), o;
    if (n)
      o = Jh(this, this.derivation, this.scope_);
    else if (U.disableErrorBoundaries === !0)
      o = this.derivation.call(this.scope_);
    else
      try {
        o = this.derivation.call(this.scope_);
      } catch (a) {
        o = new Ba(a);
      }
    return go(i), this.isComputing_ = !1, o;
  }, t.suspend_ = function() {
    this.keepAlive_ || (Ju(this), this.value_ = void 0);
  }, t.observe_ = function(n, i) {
    var o = this, a = !0, s = void 0;
    return Cb(function() {
      var u = o.get();
      if (!a || i) {
        var c = oi();
        n({
          observableKind: "computed",
          debugObjectName: o.name_,
          type: Kt,
          object: o,
          newValue: u,
          oldValue: s
        }), Hr(c);
      }
      a = !1, s = u;
    });
  }, t.warnAboutUntrackedRead_ = function() {
  }, t.toString = function() {
    return this.name_ + "[" + this.derivation.toString() + "]";
  }, t.valueOf = function() {
    return Mh(this.get());
  }, t[qh] = function() {
    return this.valueOf();
  }, e;
}(), Io = /* @__PURE__ */ $r("ComputedValue", Xi), de;
(function(e) {
  e[e.NOT_TRACKING_ = -1] = "NOT_TRACKING_", e[e.UP_TO_DATE_ = 0] = "UP_TO_DATE_", e[e.POSSIBLY_STALE_ = 1] = "POSSIBLY_STALE_", e[e.STALE_ = 2] = "STALE_";
})(de || (de = {}));
var La;
(function(e) {
  e[e.NONE = 0] = "NONE", e[e.LOG = 1] = "LOG", e[e.BREAK = 2] = "BREAK";
})(La || (La = {}));
var Ba = function(t) {
  this.cause = void 0, this.cause = t;
};
function la(e) {
  return e instanceof Ba;
}
function qu(e) {
  switch (e.dependenciesState_) {
    case de.UP_TO_DATE_:
      return !1;
    case de.NOT_TRACKING_:
    case de.STALE_:
      return !0;
    case de.POSSIBLY_STALE_: {
      for (var t = cl(!0), r = oi(), n = e.observing_, i = n.length, o = 0; o < i; o++) {
        var a = n[o];
        if (Io(a)) {
          if (U.disableErrorBoundaries)
            a.get();
          else
            try {
              a.get();
            } catch {
              return Hr(r), Ui(t), !0;
            }
          if (e.dependenciesState_ === de.STALE_)
            return Hr(r), Ui(t), !0;
        }
      }
      return Zh(e), Hr(r), Ui(t), !1;
    }
  }
}
function Jh(e, t, r) {
  var n = cl(!0);
  Zh(e), e.newObserving_ = new Array(e.observing_.length + 100), e.unboundDepsCount_ = 0, e.runId_ = ++U.runId;
  var i = U.trackingDerivation;
  U.trackingDerivation = e, U.inBatch++;
  var o;
  if (U.disableErrorBoundaries === !0)
    o = t.call(r);
  else
    try {
      o = t.call(r);
    } catch (a) {
      o = new Ba(a);
    }
  return U.inBatch--, U.trackingDerivation = i, Tb(e), Ui(n), o;
}
function Tb(e) {
  for (var t = e.observing_, r = e.observing_ = e.newObserving_, n = de.UP_TO_DATE_, i = 0, o = e.unboundDepsCount_, a = 0; a < o; a++) {
    var s = r[a];
    s.diffValue_ === 0 && (s.diffValue_ = 1, i !== a && (r[i] = s), i++), s.dependenciesState_ > n && (n = s.dependenciesState_);
  }
  for (r.length = i, e.newObserving_ = null, o = t.length; o--; ) {
    var u = t[o];
    u.diffValue_ === 0 && tp(u, e), u.diffValue_ = 0;
  }
  for (; i--; ) {
    var c = r[i];
    c.diffValue_ === 1 && (c.diffValue_ = 0, Ob(c, e));
  }
  n !== de.UP_TO_DATE_ && (e.dependenciesState_ = n, e.onBecomeStale_());
}
function Ju(e) {
  var t = e.observing_;
  e.observing_ = [];
  for (var r = t.length; r--; )
    tp(t[r], e);
  e.dependenciesState_ = de.NOT_TRACKING_;
}
function Qh(e) {
  var t = oi();
  try {
    return e();
  } finally {
    Hr(t);
  }
}
function oi() {
  var e = U.trackingDerivation;
  return U.trackingDerivation = null, e;
}
function Hr(e) {
  U.trackingDerivation = e;
}
function cl(e) {
  var t = U.allowStateReads;
  return U.allowStateReads = e, t;
}
function Ui(e) {
  U.allowStateReads = e;
}
function Zh(e) {
  if (e.dependenciesState_ !== de.UP_TO_DATE_) {
    e.dependenciesState_ = de.UP_TO_DATE_;
    for (var t = e.observing_, r = t.length; r--; )
      t[r].lowestObserverState_ = de.UP_TO_DATE_;
  }
}
var _a = function() {
  this.version = 6, this.UNCHANGED = {}, this.trackingDerivation = null, this.trackingContext = null, this.runId = 0, this.mobxGuid = 0, this.inBatch = 0, this.pendingUnobservations = [], this.pendingReactions = [], this.isRunningReactions = !1, this.allowStateChanges = !1, this.allowStateReads = !0, this.enforceActions = !0, this.spyListeners = [], this.globalReactionErrorHandlers = [], this.computedRequiresReaction = !1, this.reactionRequiresObservable = !1, this.observableRequiresReaction = !1, this.disableErrorBoundaries = !1, this.suppressReactionErrors = !1, this.useProxies = !0, this.verifyProxies = !1, this.safeDescriptors = !0, this.stateVersion = Number.MIN_SAFE_INTEGER;
}, fa = !0, ep = !1, U = /* @__PURE__ */ function() {
  var e = /* @__PURE__ */ ol();
  return e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (fa = !1), e.__mobxGlobals && e.__mobxGlobals.version !== new _a().version && (fa = !1), fa ? e.__mobxGlobals ? (e.__mobxInstanceCount += 1, e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}), e.__mobxGlobals) : (e.__mobxInstanceCount = 1, e.__mobxGlobals = /* @__PURE__ */ new _a()) : (setTimeout(function() {
    ep || he(35);
  }, 1), new _a());
}();
function Eb() {
  if ((U.pendingReactions.length || U.inBatch || U.isRunningReactions) && he(36), ep = !0, fa) {
    var e = ol();
    --e.__mobxInstanceCount === 0 && (e.__mobxGlobals = void 0), U = new _a();
  }
}
function Ob(e, t) {
  e.observers_.add(t), e.lowestObserverState_ > t.dependenciesState_ && (e.lowestObserverState_ = t.dependenciesState_);
}
function tp(e, t) {
  e.observers_.delete(t), e.observers_.size === 0 && rp(e);
}
function rp(e) {
  e.isPendingUnobservation_ === !1 && (e.isPendingUnobservation_ = !0, U.pendingUnobservations.push(e));
}
function lt() {
  U.inBatch++;
}
function _t() {
  if (--U.inBatch === 0) {
    op();
    for (var e = U.pendingUnobservations, t = 0; t < e.length; t++) {
      var r = e[t];
      r.isPendingUnobservation_ = !1, r.observers_.size === 0 && (r.isBeingObserved_ && (r.isBeingObserved_ = !1, r.onBUO()), r instanceof Xi && r.suspend_());
    }
    U.pendingUnobservations = [];
  }
}
function np(e) {
  var t = U.trackingDerivation;
  return t !== null ? (t.runId_ !== e.lastAccessedBy_ && (e.lastAccessedBy_ = t.runId_, t.newObserving_[t.unboundDepsCount_++] = e, !e.isBeingObserved_ && U.trackingContext && (e.isBeingObserved_ = !0, e.onBO())), e.isBeingObserved_) : (e.observers_.size === 0 && U.inBatch > 0 && rp(e), !1);
}
function ip(e) {
  e.lowestObserverState_ !== de.STALE_ && (e.lowestObserverState_ = de.STALE_, e.observers_.forEach(function(t) {
    t.dependenciesState_ === de.UP_TO_DATE_ && t.onBecomeStale_(), t.dependenciesState_ = de.STALE_;
  }));
}
function bb(e) {
  e.lowestObserverState_ !== de.STALE_ && (e.lowestObserverState_ = de.STALE_, e.observers_.forEach(function(t) {
    t.dependenciesState_ === de.POSSIBLY_STALE_ ? t.dependenciesState_ = de.STALE_ : t.dependenciesState_ === de.UP_TO_DATE_ && (e.lowestObserverState_ = de.UP_TO_DATE_);
  }));
}
function Rb(e) {
  e.lowestObserverState_ === de.UP_TO_DATE_ && (e.lowestObserverState_ = de.POSSIBLY_STALE_, e.observers_.forEach(function(t) {
    t.dependenciesState_ === de.UP_TO_DATE_ && (t.dependenciesState_ = de.POSSIBLY_STALE_, t.onBecomeStale_());
  }));
}
var Yi = /* @__PURE__ */ function() {
  function e(r, n, i, o) {
    r === void 0 && (r = "Reaction"), this.name_ = void 0, this.onInvalidate_ = void 0, this.errorHandler_ = void 0, this.requiresObservable_ = void 0, this.observing_ = [], this.newObserving_ = [], this.dependenciesState_ = de.NOT_TRACKING_, this.diffValue_ = 0, this.runId_ = 0, this.unboundDepsCount_ = 0, this.isDisposed_ = !1, this.isScheduled_ = !1, this.isTrackPending_ = !1, this.isRunning_ = !1, this.isTracing_ = La.NONE, this.name_ = r, this.onInvalidate_ = n, this.errorHandler_ = i, this.requiresObservable_ = o;
  }
  var t = e.prototype;
  return t.onBecomeStale_ = function() {
    this.schedule_();
  }, t.schedule_ = function() {
    this.isScheduled_ || (this.isScheduled_ = !0, U.pendingReactions.push(this), op());
  }, t.isScheduled = function() {
    return this.isScheduled_;
  }, t.runReaction_ = function() {
    if (!this.isDisposed_) {
      lt(), this.isScheduled_ = !1;
      var n = U.trackingContext;
      if (U.trackingContext = this, qu(this)) {
        this.isTrackPending_ = !0;
        try {
          this.onInvalidate_();
        } catch (i) {
          this.reportExceptionInDerivation_(i);
        }
      }
      U.trackingContext = n, _t();
    }
  }, t.track = function(n) {
    if (!this.isDisposed_) {
      lt(), this.isRunning_ = !0;
      var i = U.trackingContext;
      U.trackingContext = this;
      var o = Jh(this, n, void 0);
      U.trackingContext = i, this.isRunning_ = !1, this.isTrackPending_ = !1, this.isDisposed_ && Ju(this), la(o) && this.reportExceptionInDerivation_(o.cause), _t();
    }
  }, t.reportExceptionInDerivation_ = function(n) {
    var i = this;
    if (this.errorHandler_) {
      this.errorHandler_(n, this);
      return;
    }
    if (U.disableErrorBoundaries)
      throw n;
    var o = "[mobx] uncaught error in '" + this + "'";
    U.suppressReactionErrors || console.error(o, n), U.globalReactionErrorHandlers.forEach(function(a) {
      return a(n, i);
    });
  }, t.dispose = function() {
    this.isDisposed_ || (this.isDisposed_ = !0, this.isRunning_ || (lt(), Ju(this), _t()));
  }, t.getDisposer_ = function(n) {
    var i = this, o = function a() {
      i.dispose(), n == null || n.removeEventListener == null || n.removeEventListener("abort", a);
    };
    return n == null || n.addEventListener == null || n.addEventListener("abort", o), o[z] = this, o;
  }, t.toString = function() {
    return "Reaction[" + this.name_ + "]";
  }, t.trace = function(n) {
  }, e;
}(), vb = 100, Qu = function(t) {
  return t();
};
function op() {
  U.inBatch > 0 || U.isRunningReactions || Qu(gb);
}
function gb() {
  U.isRunningReactions = !0;
  for (var e = U.pendingReactions, t = 0; e.length > 0; ) {
    ++t === vb && (console.error("[mobx] cycle in reaction: " + e[0]), e.splice(0));
    for (var r = e.splice(0), n = 0, i = r.length; n < i; n++)
      r[n].runReaction_();
  }
  U.isRunningReactions = !1;
}
var xa = /* @__PURE__ */ $r("Reaction", Yi);
function Ib(e) {
  var t = Qu;
  Qu = function(n) {
    return e(function() {
      return t(n);
    });
  };
}
function wi() {
  return !1;
}
function Nb(e) {
  return console.warn("[mobx.spy] Is a no-op in production builds"), function() {
  };
}
var ap = "action", Ab = "action.bound", sp = "autoAction", yb = "autoAction.bound", Sb = "<unnamed action>", up = /* @__PURE__ */ Ro(ap), Db = /* @__PURE__ */ Ro(Ab, {
  bound: !0
}), cp = /* @__PURE__ */ Ro(sp, {
  autoAction: !0
}), Gb = /* @__PURE__ */ Ro(yb, {
  autoAction: !0,
  bound: !0
});
function lp(e) {
  var t = function(n, i) {
    if (Mt(n))
      return Yn(n.name || Sb, n, e);
    if (Mt(i))
      return Yn(n, i, e);
    if (un(i))
      return Oo(n, i, e ? cp : up);
    if (un(n))
      return Yt(Ro(e ? sp : ap, {
        name: n,
        autoAction: e
      }));
  };
  return t;
}
var An = /* @__PURE__ */ lp(!1);
Object.assign(An, up);
var Ki = /* @__PURE__ */ lp(!0);
Object.assign(Ki, cp);
An.bound = /* @__PURE__ */ Yt(Db);
Ki.bound = /* @__PURE__ */ Yt(Gb);
function ll(e) {
  return Mt(e) && e.isMobxAction === !0;
}
function Cb(e, t) {
  var r, n, i, o, a;
  t === void 0 && (t = Gh);
  var s = (r = (n = t) == null ? void 0 : n.name) != null ? r : "Autorun", u = !t.scheduler && !t.delay, c;
  if (u)
    c = new Yi(s, function() {
      this.track(f);
    }, t.onError, t.requiresObservable);
  else {
    var _ = wb(t), l = !1;
    c = new Yi(s, function() {
      l || (l = !0, _(function() {
        l = !1, c.isDisposed_ || c.track(f);
      }));
    }, t.onError, t.requiresObservable);
  }
  function f() {
    e(c);
  }
  return (i = t) != null && (o = i.signal) != null && o.aborted || c.schedule_(), c.getDisposer_((a = t) == null ? void 0 : a.signal);
}
var Ub = function(t) {
  return t();
};
function wb(e) {
  return e.scheduler ? e.scheduler : e.delay ? function(t) {
    return setTimeout(t, e.delay);
  } : Ub;
}
var Pb = "onBO", Hb = "onBUO";
function Mb(e, t, r) {
  return fp(Pb, e, t, r);
}
function _p(e, t, r) {
  return fp(Hb, e, t, r);
}
function fp(e, t, r, n) {
  var i = typeof n == "function" ? $n(t, r) : $n(t), o = Mt(n) ? n : r, a = e + "L";
  return i[a] ? i[a].add(o) : i[a] = /* @__PURE__ */ new Set([o]), function() {
    var s = i[a];
    s && (s.delete(o), s.size === 0 && delete i[a]);
  };
}
var kb = "never", $o = "always", Lb = "observed";
function Bb(e) {
  e.isolateGlobalState === !0 && Eb();
  var t = e.useProxies, r = e.enforceActions;
  if (t !== void 0 && (U.useProxies = t === $o ? !0 : t === kb ? !1 : typeof Proxy < "u"), t === "ifavailable" && (U.verifyProxies = !0), r !== void 0) {
    var n = r === $o ? $o : r === Lb;
    U.enforceActions = n, U.allowStateChanges = !(n === !0 || n === $o);
  }
  ["computedRequiresReaction", "reactionRequiresObservable", "observableRequiresReaction", "disableErrorBoundaries", "safeDescriptors"].forEach(function(i) {
    i in e && (U[i] = !!e[i]);
  }), U.allowStateReads = !U.observableRequiresReaction, e.reactionScheduler && Ib(e.reactionScheduler);
}
function dp(e, t, r, n) {
  var i = gO(t), o = So(e, n)[z];
  lt();
  try {
    Vn(i).forEach(function(a) {
      o.extend_(
        a,
        i[a],
        // must pass "undefined" for { key: undefined }
        r && a in r ? r[a] : !0
      );
    });
  } finally {
    _t();
  }
  return e;
}
function xb(e, t) {
  return hp($n(e, t));
}
function hp(e) {
  var t = {
    name: e.name_
  };
  return e.observing_ && e.observing_.length > 0 && (t.dependencies = Fb(e.observing_).map(hp)), t;
}
function Fb(e) {
  return Array.from(new Set(e));
}
var jb = 0;
function pp() {
  this.message = "FLOW_CANCELLED";
}
pp.prototype = /* @__PURE__ */ Object.create(Error.prototype);
var L_ = /* @__PURE__ */ xh("flow"), Vb = /* @__PURE__ */ xh("flow.bound", {
  bound: !0
}), $i = /* @__PURE__ */ Object.assign(function(t, r) {
  if (un(r))
    return Oo(t, r, L_);
  var n = t, i = n.name || "<unnamed flow>", o = function() {
    var s = this, u = arguments, c = ++jb, _ = An(i + " - runid: " + c + " - init", n).apply(s, u), l, f = void 0, h = new Promise(function(d, p) {
      var m = 0;
      l = p;
      function T(R) {
        f = void 0;
        var b;
        try {
          b = An(i + " - runid: " + c + " - yield " + m++, _.next).call(_, R);
        } catch (g) {
          return p(g);
        }
        E(b);
      }
      function O(R) {
        f = void 0;
        var b;
        try {
          b = An(i + " - runid: " + c + " - yield " + m++, _.throw).call(_, R);
        } catch (g) {
          return p(g);
        }
        E(b);
      }
      function E(R) {
        if (Mt(R?.then)) {
          R.then(E, p);
          return;
        }
        return R.done ? d(R.value) : (f = Promise.resolve(R.value), f.then(T, O));
      }
      T(void 0);
    });
    return h.cancel = An(i + " - runid: " + c + " - cancel", function() {
      try {
        f && B_(f);
        var d = _.return(void 0), p = Promise.resolve(d.value);
        p.then(In, In), B_(p), l(new pp());
      } catch (m) {
        l(m);
      }
    }), h;
  };
  return o.isMobXFlow = !0, o;
}, L_);
$i.bound = /* @__PURE__ */ Yt(Vb);
function B_(e) {
  Mt(e.cancel) && e.cancel();
}
function Fa(e) {
  return e?.isMobXFlow === !0;
}
function Wb(e, t) {
  return e ? t !== void 0 ? Kn(e) ? e[z].values_.has(t) : !1 : Kn(e) || !!e[z] || sl(e) || xa(e) || Io(e) : !1;
}
function _l(e) {
  return Wb(e);
}
function Xb(e) {
  if (Kn(e))
    return e[z].ownKeys_();
  he(38);
}
function zo(e, t, r) {
  return e.set(t, r), r;
}
function bn(e, t) {
  if (e == null || typeof e != "object" || e instanceof Date || !_l(e))
    return e;
  if (mb(e) || Io(e))
    return bn(e.get(), t);
  if (t.has(e))
    return t.get(e);
  if (yo(e)) {
    var r = zo(t, e, new Array(e.length));
    return e.forEach(function(a, s) {
      r[s] = bn(a, t);
    }), r;
  }
  if (ln(e)) {
    var n = zo(t, e, /* @__PURE__ */ new Set());
    return e.forEach(function(a) {
      n.add(bn(a, t));
    }), n;
  }
  if (Jr(e)) {
    var i = zo(t, e, /* @__PURE__ */ new Map());
    return e.forEach(function(a, s) {
      i.set(s, bn(a, t));
    }), i;
  } else {
    var o = zo(t, e, {});
    return Xb(e).forEach(function(a) {
      mo.propertyIsEnumerable.call(e, a) && (o[a] = bn(e[a], t));
    }), o;
  }
}
function mp(e, t) {
  return bn(e, /* @__PURE__ */ new Map());
}
function ir(e, t) {
  t === void 0 && (t = void 0), lt();
  try {
    return e.apply(t);
  } finally {
    _t();
  }
}
function hn(e) {
  return e[z];
}
var Yb = {
  has: function(t, r) {
    return hn(t).has_(r);
  },
  get: function(t, r) {
    return hn(t).get_(r);
  },
  set: function(t, r, n) {
    var i;
    return un(r) ? (i = hn(t).set_(r, n, !0)) != null ? i : !0 : !1;
  },
  deleteProperty: function(t, r) {
    var n;
    return un(r) ? (n = hn(t).delete_(r, !0)) != null ? n : !0 : !1;
  },
  defineProperty: function(t, r, n) {
    var i;
    return (i = hn(t).defineProperty_(r, n)) != null ? i : !0;
  },
  ownKeys: function(t) {
    return hn(t).ownKeys_();
  },
  preventExtensions: function(t) {
    he(13);
  }
};
function Kb(e, t) {
  var r, n;
  return Ch(), e = So(e, t), (n = (r = e[z]).proxy_) != null ? n : r.proxy_ = new Proxy(e, Yb);
}
function bt(e) {
  return e.interceptors_ !== void 0 && e.interceptors_.length > 0;
}
function No(e, t) {
  var r = e.interceptors_ || (e.interceptors_ = []);
  return r.push(t), Uh(function() {
    var n = r.indexOf(t);
    n !== -1 && r.splice(n, 1);
  });
}
function Rt(e, t) {
  var r = oi();
  try {
    for (var n = [].concat(e.interceptors_ || []), i = 0, o = n.length; i < o && (t = n[i](t), t && !t.type && he(14), !!t); i++)
      ;
    return t;
  } finally {
    Hr(r);
  }
}
function Pt(e) {
  return e.changeListeners_ !== void 0 && e.changeListeners_.length > 0;
}
function Ao(e, t) {
  var r = e.changeListeners_ || (e.changeListeners_ = []);
  return r.push(t), Uh(function() {
    var n = r.indexOf(t);
    n !== -1 && r.splice(n, 1);
  });
}
function Ht(e, t) {
  var r = oi(), n = e.changeListeners_;
  if (n) {
    n = n.slice();
    for (var i = 0, o = n.length; i < o; i++)
      n[i](t);
    Hr(r);
  }
}
function $b(e, t, r) {
  var n = So(e, r)[z];
  lt();
  try {
    var i;
    (i = t) != null || (t = yO(e)), Vn(t).forEach(function(o) {
      return n.make_(o, t[o]);
    });
  } finally {
    _t();
  }
  return e;
}
var lu = /* @__PURE__ */ Symbol("mobx-keys");
function zr(e, t, r) {
  if (fr(e))
    return dp(e, e, t, r);
  var n = So(e, r)[z];
  if (!e[lu]) {
    var i = Object.getPrototypeOf(e), o = new Set([].concat(Vn(e), Vn(i)));
    o.delete("constructor"), o.delete(z), To(i, lu, o);
  }
  lt();
  try {
    e[lu].forEach(function(a) {
      return n.make_(
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
var x_ = "splice", Kt = "update", zb = 1e4, qb = {
  get: function(t, r) {
    var n = t[z];
    return r === z ? n : r === "length" ? n.getArrayLength_() : typeof r == "string" && !isNaN(r) ? n.get_(parseInt(r)) : ur(ja, r) ? ja[r] : t[r];
  },
  set: function(t, r, n) {
    var i = t[z];
    return r === "length" && i.setArrayLength_(n), typeof r == "symbol" || isNaN(r) ? t[r] = n : i.set_(parseInt(r), n), !0;
  },
  preventExtensions: function() {
    he(15);
  }
}, fl = /* @__PURE__ */ function() {
  function e(r, n, i, o) {
    r === void 0 && (r = "ObservableArray"), this.owned_ = void 0, this.legacyMode_ = void 0, this.atom_ = void 0, this.values_ = [], this.interceptors_ = void 0, this.changeListeners_ = void 0, this.enhancer_ = void 0, this.dehancer = void 0, this.proxy_ = void 0, this.lastKnownLength_ = 0, this.owned_ = i, this.legacyMode_ = o, this.atom_ = new bo(r), this.enhancer_ = function(a, s) {
      return n(a, s, "ObservableArray[..]");
    };
  }
  var t = e.prototype;
  return t.dehanceValue_ = function(n) {
    return this.dehancer !== void 0 ? this.dehancer(n) : n;
  }, t.dehanceValues_ = function(n) {
    return this.dehancer !== void 0 && n.length > 0 ? n.map(this.dehancer) : n;
  }, t.intercept_ = function(n) {
    return No(this, n);
  }, t.observe_ = function(n, i) {
    return i === void 0 && (i = !1), i && n({
      observableKind: "array",
      object: this.proxy_,
      debugObjectName: this.atom_.name_,
      type: "splice",
      index: 0,
      added: this.values_.slice(),
      addedCount: this.values_.length,
      removed: [],
      removedCount: 0
    }), Ao(this, n);
  }, t.getArrayLength_ = function() {
    return this.atom_.reportObserved(), this.values_.length;
  }, t.setArrayLength_ = function(n) {
    (typeof n != "number" || isNaN(n) || n < 0) && he("Out of range: " + n);
    var i = this.values_.length;
    if (n !== i)
      if (n > i) {
        for (var o = new Array(n - i), a = 0; a < n - i; a++)
          o[a] = void 0;
        this.spliceWithArray_(i, 0, o);
      } else
        this.spliceWithArray_(n, i - n);
  }, t.updateArrayLength_ = function(n, i) {
    n !== this.lastKnownLength_ && he(16), this.lastKnownLength_ += i, this.legacyMode_ && i > 0 && yp(n + i + 1);
  }, t.spliceWithArray_ = function(n, i, o) {
    var a = this;
    this.atom_;
    var s = this.values_.length;
    if (n === void 0 ? n = 0 : n > s ? n = s : n < 0 && (n = Math.max(0, s + n)), arguments.length === 1 ? i = s - n : i == null ? i = 0 : i = Math.max(0, Math.min(i, s - n)), o === void 0 && (o = $u), bt(this)) {
      var u = Rt(this, {
        object: this.proxy_,
        type: x_,
        index: n,
        removedCount: i,
        added: o
      });
      if (!u)
        return $u;
      i = u.removedCount, o = u.added;
    }
    if (o = o.length === 0 ? o : o.map(function(l) {
      return a.enhancer_(l, void 0);
    }), this.legacyMode_) {
      var c = o.length - i;
      this.updateArrayLength_(s, c);
    }
    var _ = this.spliceItemsIntoValues_(n, i, o);
    return (i !== 0 || o.length !== 0) && this.notifyArraySplice_(n, o, _), this.dehanceValues_(_);
  }, t.spliceItemsIntoValues_ = function(n, i, o) {
    if (o.length < zb) {
      var a;
      return (a = this.values_).splice.apply(a, [n, i].concat(o));
    } else {
      var s = this.values_.slice(n, n + i), u = this.values_.slice(n + i);
      this.values_.length += o.length - i;
      for (var c = 0; c < o.length; c++)
        this.values_[n + c] = o[c];
      for (var _ = 0; _ < u.length; _++)
        this.values_[n + o.length + _] = u[_];
      return s;
    }
  }, t.notifyArrayChildUpdate_ = function(n, i, o) {
    var a = !this.owned_ && wi(), s = Pt(this), u = s || a ? {
      observableKind: "array",
      object: this.proxy_,
      type: Kt,
      debugObjectName: this.atom_.name_,
      index: n,
      newValue: i,
      oldValue: o
    } : null;
    this.atom_.reportChanged(), s && Ht(this, u);
  }, t.notifyArraySplice_ = function(n, i, o) {
    var a = !this.owned_ && wi(), s = Pt(this), u = s || a ? {
      observableKind: "array",
      object: this.proxy_,
      debugObjectName: this.atom_.name_,
      type: x_,
      index: n,
      removed: o,
      added: i,
      removedCount: o.length,
      addedCount: i.length
    } : null;
    this.atom_.reportChanged(), s && Ht(this, u);
  }, t.get_ = function(n) {
    if (this.legacyMode_ && n >= this.values_.length) {
      console.warn("[mobx] Out of bounds read: " + n);
      return;
    }
    return this.atom_.reportObserved(), this.dehanceValue_(this.values_[n]);
  }, t.set_ = function(n, i) {
    var o = this.values_;
    if (this.legacyMode_ && n > o.length && he(17, n, o.length), n < o.length) {
      this.atom_;
      var a = o[n];
      if (bt(this)) {
        var s = Rt(this, {
          type: Kt,
          object: this.proxy_,
          index: n,
          newValue: i
        });
        if (!s)
          return;
        i = s.newValue;
      }
      i = this.enhancer_(i, a);
      var u = i !== a;
      u && (o[n] = i, this.notifyArrayChildUpdate_(n, i, a));
    } else {
      for (var c = new Array(n + 1 - o.length), _ = 0; _ < c.length - 1; _++)
        c[_] = void 0;
      c[c.length - 1] = i, this.spliceWithArray_(o.length, 0, c);
    }
  }, e;
}();
function Jb(e, t, r, n) {
  r === void 0 && (r = "ObservableArray"), n === void 0 && (n = !1), Ch();
  var i = new fl(r, t, n, !1);
  Ph(i.values_, z, i);
  var o = new Proxy(i.values_, qb);
  if (i.proxy_ = o, e && e.length) {
    var a = vo(!0);
    i.spliceWithArray_(0, 0, e), go(a);
  }
  return o;
}
var ja = {
  clear: function() {
    return this.splice(0);
  },
  replace: function(t) {
    var r = this[z];
    return r.spliceWithArray_(0, r.values_.length, t);
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
  splice: function(t, r) {
    for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
      i[o - 2] = arguments[o];
    var a = this[z];
    switch (arguments.length) {
      case 0:
        return [];
      case 1:
        return a.spliceWithArray_(t);
      case 2:
        return a.spliceWithArray_(t, r);
    }
    return a.spliceWithArray_(t, r, i);
  },
  spliceWithArray: function(t, r, n) {
    return this[z].spliceWithArray_(t, r, n);
  },
  push: function() {
    for (var t = this[z], r = arguments.length, n = new Array(r), i = 0; i < r; i++)
      n[i] = arguments[i];
    return t.spliceWithArray_(t.values_.length, 0, n), t.values_.length;
  },
  pop: function() {
    return this.splice(Math.max(this[z].values_.length - 1, 0), 1)[0];
  },
  shift: function() {
    return this.splice(0, 1)[0];
  },
  unshift: function() {
    for (var t = this[z], r = arguments.length, n = new Array(r), i = 0; i < r; i++)
      n[i] = arguments[i];
    return t.spliceWithArray_(0, 0, n), t.values_.length;
  },
  reverse: function() {
    return U.trackingDerivation && he(37, "reverse"), this.replace(this.slice().reverse()), this;
  },
  sort: function() {
    U.trackingDerivation && he(37, "sort");
    var t = this.slice();
    return t.sort.apply(t, arguments), this.replace(t), this;
  },
  remove: function(t) {
    var r = this[z], n = r.dehanceValues_(r.values_).indexOf(t);
    return n > -1 ? (this.splice(n, 1), !0) : !1;
  }
};
je("concat", mr);
je("flat", mr);
je("includes", mr);
je("indexOf", mr);
je("join", mr);
je("lastIndexOf", mr);
je("slice", mr);
je("toString", mr);
je("toLocaleString", mr);
je("every", qr);
je("filter", qr);
je("find", qr);
je("findIndex", qr);
je("flatMap", qr);
je("forEach", qr);
je("map", qr);
je("some", qr);
je("reduce", Tp);
je("reduceRight", Tp);
function je(e, t) {
  typeof Array.prototype[e] == "function" && (ja[e] = t(e));
}
function mr(e) {
  return function() {
    var t = this[z];
    t.atom_.reportObserved();
    var r = t.dehanceValues_(t.values_);
    return r[e].apply(r, arguments);
  };
}
function qr(e) {
  return function(t, r) {
    var n = this, i = this[z];
    i.atom_.reportObserved();
    var o = i.dehanceValues_(i.values_);
    return o[e](function(a, s) {
      return t.call(r, a, s, n);
    });
  };
}
function Tp(e) {
  return function() {
    var t = this, r = this[z];
    r.atom_.reportObserved();
    var n = r.dehanceValues_(r.values_), i = arguments[0];
    return arguments[0] = function(o, a, s) {
      return i(o, a, s, t);
    }, n[e].apply(n, arguments);
  };
}
var Qb = /* @__PURE__ */ $r("ObservableArrayAdministration", fl);
function yo(e) {
  return ps(e) && Qb(e[z]);
}
var Ep, Op, Zb = {}, Dr = "add", Va = "delete";
Ep = Symbol.iterator;
Op = Symbol.toStringTag;
var bp = /* @__PURE__ */ function() {
  function e(r, n, i) {
    var o = this;
    n === void 0 && (n = Xn), i === void 0 && (i = "ObservableMap"), this.enhancer_ = void 0, this.name_ = void 0, this[z] = Zb, this.data_ = void 0, this.hasMap_ = void 0, this.keysAtom_ = void 0, this.interceptors_ = void 0, this.changeListeners_ = void 0, this.dehancer = void 0, this.enhancer_ = n, this.name_ = i, Mt(Map) || he(18), this.keysAtom_ = Lh("ObservableMap.keys()"), this.data_ = /* @__PURE__ */ new Map(), this.hasMap_ = /* @__PURE__ */ new Map(), pb(!0, function() {
      o.merge(r);
    });
  }
  var t = e.prototype;
  return t.has_ = function(n) {
    return this.data_.has(n);
  }, t.has = function(n) {
    var i = this;
    if (!U.trackingDerivation)
      return this.has_(n);
    var o = this.hasMap_.get(n);
    if (!o) {
      var a = o = new on(this.has_(n), ms, "ObservableMap.key?", !1);
      this.hasMap_.set(n, a), _p(a, function() {
        return i.hasMap_.delete(n);
      });
    }
    return o.get();
  }, t.set = function(n, i) {
    var o = this.has_(n);
    if (bt(this)) {
      var a = Rt(this, {
        type: o ? Kt : Dr,
        object: this,
        newValue: i,
        name: n
      });
      if (!a)
        return this;
      i = a.newValue;
    }
    return o ? this.updateValue_(n, i) : this.addValue_(n, i), this;
  }, t.delete = function(n) {
    var i = this;
    if (this.keysAtom_, bt(this)) {
      var o = Rt(this, {
        type: Va,
        object: this,
        name: n
      });
      if (!o)
        return !1;
    }
    if (this.has_(n)) {
      var a = wi(), s = Pt(this), u = s || a ? {
        observableKind: "map",
        debugObjectName: this.name_,
        type: Va,
        object: this,
        oldValue: this.data_.get(n).value_,
        name: n
      } : null;
      return ir(function() {
        var c;
        i.keysAtom_.reportChanged(), (c = i.hasMap_.get(n)) == null || c.setNewValue_(!1);
        var _ = i.data_.get(n);
        _.setNewValue_(void 0), i.data_.delete(n);
      }), s && Ht(this, u), !0;
    }
    return !1;
  }, t.updateValue_ = function(n, i) {
    var o = this.data_.get(n);
    if (i = o.prepareNewValue_(i), i !== U.UNCHANGED) {
      var a = wi(), s = Pt(this), u = s || a ? {
        observableKind: "map",
        debugObjectName: this.name_,
        type: Kt,
        object: this,
        oldValue: o.value_,
        name: n,
        newValue: i
      } : null;
      o.setNewValue_(i), s && Ht(this, u);
    }
  }, t.addValue_ = function(n, i) {
    var o = this;
    this.keysAtom_, ir(function() {
      var c, _ = new on(i, o.enhancer_, "ObservableMap.key", !1);
      o.data_.set(n, _), i = _.value_, (c = o.hasMap_.get(n)) == null || c.setNewValue_(!0), o.keysAtom_.reportChanged();
    });
    var a = wi(), s = Pt(this), u = s || a ? {
      observableKind: "map",
      debugObjectName: this.name_,
      type: Dr,
      object: this,
      name: n,
      newValue: i
    } : null;
    s && Ht(this, u);
  }, t.get = function(n) {
    return this.has(n) ? this.dehanceValue_(this.data_.get(n).get()) : this.dehanceValue_(void 0);
  }, t.dehanceValue_ = function(n) {
    return this.dehancer !== void 0 ? this.dehancer(n) : n;
  }, t.keys = function() {
    return this.keysAtom_.reportObserved(), this.data_.keys();
  }, t.values = function() {
    var n = this, i = this.keys();
    return zi({
      next: function() {
        var a = i.next(), s = a.done, u = a.value;
        return {
          done: s,
          value: s ? void 0 : n.get(u)
        };
      }
    });
  }, t.entries = function() {
    var n = this, i = this.keys();
    return zi({
      next: function() {
        var a = i.next(), s = a.done, u = a.value;
        return {
          done: s,
          value: s ? void 0 : [u, n.get(u)]
        };
      }
    });
  }, t[Ep] = function() {
    return this.entries();
  }, t.forEach = function(n, i) {
    for (var o = Nn(this), a; !(a = o()).done; ) {
      var s = a.value, u = s[0], c = s[1];
      n.call(i, c, u, this);
    }
  }, t.merge = function(n) {
    var i = this;
    return Jr(n) && (n = new Map(n)), ir(function() {
      fr(n) ? vO(n).forEach(function(o) {
        return i.set(o, n[o]);
      }) : Array.isArray(n) ? n.forEach(function(o) {
        var a = o[0], s = o[1];
        return i.set(a, s);
      }) : ii(n) ? (n.constructor !== Map && he(19, n), n.forEach(function(o, a) {
        return i.set(a, o);
      })) : n != null && he(20, n);
    }), this;
  }, t.clear = function() {
    var n = this;
    ir(function() {
      Qh(function() {
        for (var i = Nn(n.keys()), o; !(o = i()).done; ) {
          var a = o.value;
          n.delete(a);
        }
      });
    });
  }, t.replace = function(n) {
    var i = this;
    return ir(function() {
      for (var o = eR(n), a = /* @__PURE__ */ new Map(), s = !1, u = Nn(i.data_.keys()), c; !(c = u()).done; ) {
        var _ = c.value;
        if (!o.has(_)) {
          var l = i.delete(_);
          if (l)
            s = !0;
          else {
            var f = i.data_.get(_);
            a.set(_, f);
          }
        }
      }
      for (var h = Nn(o.entries()), d; !(d = h()).done; ) {
        var p = d.value, m = p[0], T = p[1], O = i.data_.has(m);
        if (i.set(m, T), i.data_.has(m)) {
          var E = i.data_.get(m);
          a.set(m, E), O || (s = !0);
        }
      }
      if (!s)
        if (i.data_.size !== a.size)
          i.keysAtom_.reportChanged();
        else
          for (var R = i.data_.keys(), b = a.keys(), g = R.next(), A = b.next(); !g.done; ) {
            if (g.value !== A.value) {
              i.keysAtom_.reportChanged();
              break;
            }
            g = R.next(), A = b.next();
          }
      i.data_ = a;
    }), this;
  }, t.toString = function() {
    return "[object ObservableMap]";
  }, t.toJSON = function() {
    return Array.from(this);
  }, t.observe_ = function(n, i) {
    return Ao(this, n);
  }, t.intercept_ = function(n) {
    return No(this, n);
  }, al(e, [{
    key: "size",
    get: function() {
      return this.keysAtom_.reportObserved(), this.data_.size;
    }
  }, {
    key: Op,
    get: function() {
      return "Map";
    }
  }]), e;
}(), Jr = /* @__PURE__ */ $r("ObservableMap", bp);
function eR(e) {
  if (ii(e) || Jr(e))
    return e;
  if (Array.isArray(e))
    return new Map(e);
  if (fr(e)) {
    var t = /* @__PURE__ */ new Map();
    for (var r in e)
      t.set(r, e[r]);
    return t;
  } else
    return he(21, e);
}
var Rp, vp, tR = {};
Rp = Symbol.iterator;
vp = Symbol.toStringTag;
var gp = /* @__PURE__ */ function() {
  function e(r, n, i) {
    n === void 0 && (n = Xn), i === void 0 && (i = "ObservableSet"), this.name_ = void 0, this[z] = tR, this.data_ = /* @__PURE__ */ new Set(), this.atom_ = void 0, this.changeListeners_ = void 0, this.interceptors_ = void 0, this.dehancer = void 0, this.enhancer_ = void 0, this.name_ = i, Mt(Set) || he(22), this.atom_ = Lh(this.name_), this.enhancer_ = function(o, a) {
      return n(o, a, i);
    }, r && this.replace(r);
  }
  var t = e.prototype;
  return t.dehanceValue_ = function(n) {
    return this.dehancer !== void 0 ? this.dehancer(n) : n;
  }, t.clear = function() {
    var n = this;
    ir(function() {
      Qh(function() {
        for (var i = Nn(n.data_.values()), o; !(o = i()).done; ) {
          var a = o.value;
          n.delete(a);
        }
      });
    });
  }, t.forEach = function(n, i) {
    for (var o = Nn(this), a; !(a = o()).done; ) {
      var s = a.value;
      n.call(i, s, s, this);
    }
  }, t.add = function(n) {
    var i = this;
    if (this.atom_, bt(this)) {
      var o = Rt(this, {
        type: Dr,
        object: this,
        newValue: n
      });
      if (!o)
        return this;
    }
    if (!this.has(n)) {
      ir(function() {
        i.data_.add(i.enhancer_(n, void 0)), i.atom_.reportChanged();
      });
      var a = !1, s = Pt(this), u = s || a ? {
        observableKind: "set",
        debugObjectName: this.name_,
        type: Dr,
        object: this,
        newValue: n
      } : null;
      s && Ht(this, u);
    }
    return this;
  }, t.delete = function(n) {
    var i = this;
    if (bt(this)) {
      var o = Rt(this, {
        type: Va,
        object: this,
        oldValue: n
      });
      if (!o)
        return !1;
    }
    if (this.has(n)) {
      var a = !1, s = Pt(this), u = s || a ? {
        observableKind: "set",
        debugObjectName: this.name_,
        type: Va,
        object: this,
        oldValue: n
      } : null;
      return ir(function() {
        i.atom_.reportChanged(), i.data_.delete(n);
      }), s && Ht(this, u), !0;
    }
    return !1;
  }, t.has = function(n) {
    return this.atom_.reportObserved(), this.data_.has(this.dehanceValue_(n));
  }, t.entries = function() {
    var n = 0, i = Array.from(this.keys()), o = Array.from(this.values());
    return zi({
      next: function() {
        var s = n;
        return n += 1, s < o.length ? {
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
    var n = this, i = 0, o = Array.from(this.data_.values());
    return zi({
      next: function() {
        return i < o.length ? {
          value: n.dehanceValue_(o[i++]),
          done: !1
        } : {
          done: !0
        };
      }
    });
  }, t.replace = function(n) {
    var i = this;
    return ln(n) && (n = new Set(n)), ir(function() {
      Array.isArray(n) ? (i.clear(), n.forEach(function(o) {
        return i.add(o);
      })) : Eo(n) ? (i.clear(), n.forEach(function(o) {
        return i.add(o);
      })) : n != null && he("Cannot initialize set from " + n);
    }), this;
  }, t.observe_ = function(n, i) {
    return Ao(this, n);
  }, t.intercept_ = function(n) {
    return No(this, n);
  }, t.toJSON = function() {
    return Array.from(this);
  }, t.toString = function() {
    return "[object ObservableSet]";
  }, t[Rp] = function() {
    return this.values();
  }, al(e, [{
    key: "size",
    get: function() {
      return this.atom_.reportObserved(), this.data_.size;
    }
  }, {
    key: vp,
    get: function() {
      return "Set";
    }
  }]), e;
}(), ln = /* @__PURE__ */ $r("ObservableSet", gp), F_ = /* @__PURE__ */ Object.create(null), j_ = "remove", Ip = /* @__PURE__ */ function() {
  function e(r, n, i, o) {
    n === void 0 && (n = /* @__PURE__ */ new Map()), o === void 0 && (o = zO), this.target_ = void 0, this.values_ = void 0, this.name_ = void 0, this.defaultAnnotation_ = void 0, this.keysAtom_ = void 0, this.changeListeners_ = void 0, this.interceptors_ = void 0, this.proxy_ = void 0, this.isPlainObject_ = void 0, this.appliedAnnotations_ = void 0, this.pendingKeys_ = void 0, this.target_ = r, this.values_ = n, this.name_ = i, this.defaultAnnotation_ = o, this.keysAtom_ = new bo("ObservableObject.keys"), this.isPlainObject_ = fr(this.target_);
  }
  var t = e.prototype;
  return t.getObservablePropValue_ = function(n) {
    return this.values_.get(n).get();
  }, t.setObservablePropValue_ = function(n, i) {
    var o = this.values_.get(n);
    if (o instanceof Xi)
      return o.set(i), !0;
    if (bt(this)) {
      var a = Rt(this, {
        type: Kt,
        object: this.proxy_ || this.target_,
        name: n,
        newValue: i
      });
      if (!a)
        return null;
      i = a.newValue;
    }
    if (i = o.prepareNewValue_(i), i !== U.UNCHANGED) {
      var s = Pt(this), u = !1, c = s || u ? {
        type: Kt,
        observableKind: "object",
        debugObjectName: this.name_,
        object: this.proxy_ || this.target_,
        oldValue: o.value_,
        name: n,
        newValue: i
      } : null;
      o.setNewValue_(i), s && Ht(this, c);
    }
    return !0;
  }, t.get_ = function(n) {
    return U.trackingDerivation && !ur(this.target_, n) && this.has_(n), this.target_[n];
  }, t.set_ = function(n, i, o) {
    return o === void 0 && (o = !1), ur(this.target_, n) ? this.values_.has(n) ? this.setObservablePropValue_(n, i) : o ? Reflect.set(this.target_, n, i) : (this.target_[n] = i, !0) : this.extend_(n, {
      value: i,
      enumerable: !0,
      writable: !0,
      configurable: !0
    }, this.defaultAnnotation_, o);
  }, t.has_ = function(n) {
    if (!U.trackingDerivation)
      return n in this.target_;
    this.pendingKeys_ || (this.pendingKeys_ = /* @__PURE__ */ new Map());
    var i = this.pendingKeys_.get(n);
    return i || (i = new on(n in this.target_, ms, "ObservableObject.key?", !1), this.pendingKeys_.set(n, i)), i.get();
  }, t.make_ = function(n, i) {
    if (i === !0 && (i = this.defaultAnnotation_), i !== !1) {
      if (!(n in this.target_)) {
        var o;
        if ((o = this.target_[Vt]) != null && o[n])
          return;
        he(1, i.annotationType_, this.name_ + "." + n.toString());
      }
      for (var a = this.target_; a && a !== mo; ) {
        var s = Ha(a, n);
        if (s) {
          var u = i.make_(this, n, s, a);
          if (u === 0)
            return;
          if (u === 1)
            break;
        }
        a = Object.getPrototypeOf(a);
      }
      W_(this, i, n);
    }
  }, t.extend_ = function(n, i, o, a) {
    if (a === void 0 && (a = !1), o === !0 && (o = this.defaultAnnotation_), o === !1)
      return this.defineProperty_(n, i, a);
    var s = o.extend_(this, n, i, a);
    return s && W_(this, o, n), s;
  }, t.defineProperty_ = function(n, i, o) {
    o === void 0 && (o = !1);
    try {
      lt();
      var a = this.delete_(n);
      if (!a)
        return a;
      if (bt(this)) {
        var s = Rt(this, {
          object: this.proxy_ || this.target_,
          name: n,
          type: Dr,
          newValue: i.value
        });
        if (!s)
          return null;
        var u = s.newValue;
        i.value !== u && (i = Wn({}, i, {
          value: u
        }));
      }
      if (o) {
        if (!Reflect.defineProperty(this.target_, n, i))
          return !1;
      } else
        Xt(this.target_, n, i);
      this.notifyPropertyAddition_(n, i.value);
    } finally {
      _t();
    }
    return !0;
  }, t.defineObservableProperty_ = function(n, i, o, a) {
    a === void 0 && (a = !1);
    try {
      lt();
      var s = this.delete_(n);
      if (!s)
        return s;
      if (bt(this)) {
        var u = Rt(this, {
          object: this.proxy_ || this.target_,
          name: n,
          type: Dr,
          newValue: i
        });
        if (!u)
          return null;
        i = u.newValue;
      }
      var c = V_(n), _ = {
        configurable: U.safeDescriptors ? this.isPlainObject_ : !0,
        enumerable: !0,
        get: c.get,
        set: c.set
      };
      if (a) {
        if (!Reflect.defineProperty(this.target_, n, _))
          return !1;
      } else
        Xt(this.target_, n, _);
      var l = new on(i, o, "ObservableObject.key", !1);
      this.values_.set(n, l), this.notifyPropertyAddition_(n, l.value_);
    } finally {
      _t();
    }
    return !0;
  }, t.defineComputedProperty_ = function(n, i, o) {
    o === void 0 && (o = !1);
    try {
      lt();
      var a = this.delete_(n);
      if (!a)
        return a;
      if (bt(this)) {
        var s = Rt(this, {
          object: this.proxy_ || this.target_,
          name: n,
          type: Dr,
          newValue: void 0
        });
        if (!s)
          return null;
      }
      i.name || (i.name = "ObservableObject.key"), i.context = this.proxy_ || this.target_;
      var u = V_(n), c = {
        configurable: U.safeDescriptors ? this.isPlainObject_ : !0,
        enumerable: !1,
        get: u.get,
        set: u.set
      };
      if (o) {
        if (!Reflect.defineProperty(this.target_, n, c))
          return !1;
      } else
        Xt(this.target_, n, c);
      this.values_.set(n, new Xi(i)), this.notifyPropertyAddition_(n, void 0);
    } finally {
      _t();
    }
    return !0;
  }, t.delete_ = function(n, i) {
    if (i === void 0 && (i = !1), !ur(this.target_, n))
      return !0;
    if (bt(this)) {
      var o = Rt(this, {
        object: this.proxy_ || this.target_,
        name: n,
        type: j_
      });
      if (!o)
        return null;
    }
    try {
      var a, s;
      lt();
      var u = Pt(this), c = !1, _ = this.values_.get(n), l = void 0;
      if (!_ && (u || c)) {
        var f;
        l = (f = Ha(this.target_, n)) == null ? void 0 : f.value;
      }
      if (i) {
        if (!Reflect.deleteProperty(this.target_, n))
          return !1;
      } else
        delete this.target_[n];
      if (_ && (this.values_.delete(n), _ instanceof on && (l = _.value_), ip(_)), this.keysAtom_.reportChanged(), (a = this.pendingKeys_) == null || (s = a.get(n)) == null || s.set(n in this.target_), u || c) {
        var h = {
          type: j_,
          observableKind: "object",
          object: this.proxy_ || this.target_,
          debugObjectName: this.name_,
          oldValue: l,
          name: n
        };
        u && Ht(this, h);
      }
    } finally {
      _t();
    }
    return !0;
  }, t.observe_ = function(n, i) {
    return Ao(this, n);
  }, t.intercept_ = function(n) {
    return No(this, n);
  }, t.notifyPropertyAddition_ = function(n, i) {
    var o, a, s = Pt(this), u = !1;
    if (s || u) {
      var c = s || u ? {
        type: Dr,
        observableKind: "object",
        debugObjectName: this.name_,
        object: this.proxy_ || this.target_,
        name: n,
        newValue: i
      } : null;
      s && Ht(this, c);
    }
    (o = this.pendingKeys_) == null || (a = o.get(n)) == null || a.set(!0), this.keysAtom_.reportChanged();
  }, t.ownKeys_ = function() {
    return this.keysAtom_.reportObserved(), Vn(this.target_);
  }, t.keys_ = function() {
    return this.keysAtom_.reportObserved(), Object.keys(this.target_);
  }, e;
}();
function So(e, t) {
  var r;
  if (ur(e, z))
    return e;
  var n = (r = t?.name) != null ? r : "ObservableObject", i = new Ip(e, /* @__PURE__ */ new Map(), String(n), ob(t));
  return To(e, z, i), e;
}
var rR = /* @__PURE__ */ $r("ObservableObjectAdministration", Ip);
function V_(e) {
  return F_[e] || (F_[e] = {
    get: function() {
      return this[z].getObservablePropValue_(e);
    },
    set: function(r) {
      return this[z].setObservablePropValue_(e, r);
    }
  });
}
function Kn(e) {
  return ps(e) ? rR(e[z]) : !1;
}
function W_(e, t, r) {
  var n;
  (n = e.target_[Vt]) == null || delete n[r];
}
var nR = /* @__PURE__ */ Ap(0), _u = 0, Np = function() {
};
function iR(e, t) {
  Object.setPrototypeOf ? Object.setPrototypeOf(e.prototype, t) : e.prototype.__proto__ !== void 0 ? e.prototype.__proto__ = t : e.prototype = t;
}
iR(Np, Array.prototype);
var dl = /* @__PURE__ */ function(e, t, r) {
  kh(n, e);
  function n(o, a, s, u) {
    var c;
    s === void 0 && (s = "ObservableArray"), u === void 0 && (u = !1), c = e.call(this) || this;
    var _ = new fl(s, a, u, !0);
    if (_.proxy_ = cu(c), Ph(cu(c), z, _), o && o.length) {
      var l = vo(!0);
      c.spliceWithArray(0, 0, o), go(l);
    }
    return Object.defineProperty(cu(c), "0", nR), c;
  }
  var i = n.prototype;
  return i.concat = function() {
    this[z].atom_.reportObserved();
    for (var a = arguments.length, s = new Array(a), u = 0; u < a; u++)
      s[u] = arguments[u];
    return Array.prototype.concat.apply(
      this.slice(),
      //@ts-ignore
      s.map(function(c) {
        return yo(c) ? c.slice() : c;
      })
    );
  }, i[r] = function() {
    var o = this, a = 0;
    return zi({
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
  }, al(n, [{
    key: "length",
    get: function() {
      return this[z].getArrayLength_();
    },
    set: function(a) {
      this[z].setArrayLength_(a);
    }
  }, {
    key: t,
    get: function() {
      return "Array";
    }
  }]), n;
}(Np, Symbol.toStringTag, Symbol.iterator);
Object.entries(ja).forEach(function(e) {
  var t = e[0], r = e[1];
  t !== "concat" && To(dl.prototype, t, r);
});
function Ap(e) {
  return {
    enumerable: !1,
    configurable: !0,
    get: function() {
      return this[z].get_(e);
    },
    set: function(r) {
      this[z].set_(e, r);
    }
  };
}
function oR(e) {
  Xt(dl.prototype, "" + e, Ap(e));
}
function yp(e) {
  if (e > _u) {
    for (var t = _u; t < e + 100; t++)
      oR(t);
    _u = e;
  }
}
yp(1e3);
function aR(e, t, r) {
  return new dl(e, t, r);
}
function $n(e, t) {
  if (typeof e == "object" && e !== null) {
    if (yo(e))
      return t !== void 0 && he(23), e[z].atom_;
    if (ln(e))
      return e.atom_;
    if (Jr(e)) {
      if (t === void 0)
        return e.keysAtom_;
      var r = e.data_.get(t) || e.hasMap_.get(t);
      return r || he(25, t, Zu(e)), r;
    }
    if (Kn(e)) {
      if (!t)
        return he(26);
      var n = e[z].values_.get(t);
      return n || he(27, t, Zu(e)), n;
    }
    if (sl(e) || Io(e) || xa(e))
      return e;
  } else if (Mt(e) && xa(e[z]))
    return e[z];
  he(28);
}
function Sp(e, t) {
  if (e || he(29), t !== void 0)
    return Sp($n(e, t));
  if (sl(e) || Io(e) || xa(e) || Jr(e) || ln(e))
    return e;
  if (e[z])
    return e[z];
  he(24, e);
}
function Zu(e, t) {
  var r;
  if (t !== void 0)
    r = $n(e, t);
  else {
    if (ll(e))
      return e.name;
    Kn(e) || Jr(e) || ln(e) ? r = Sp(e) : r = $n(e);
  }
  return r.name_;
}
var X_ = mo.toString;
function hl(e, t, r) {
  return r === void 0 && (r = -1), ec(e, t, r);
}
function ec(e, t, r, n, i) {
  if (e === t)
    return e !== 0 || 1 / e === 1 / t;
  if (e == null || t == null)
    return !1;
  if (e !== e)
    return t !== t;
  var o = typeof e;
  if (o !== "function" && o !== "object" && typeof t != "object")
    return !1;
  var a = X_.call(e);
  if (a !== X_.call(t))
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
      r >= 0 && r++;
      break;
  }
  e = Y_(e), t = Y_(t);
  var s = a === "[object Array]";
  if (!s) {
    if (typeof e != "object" || typeof t != "object")
      return !1;
    var u = e.constructor, c = t.constructor;
    if (u !== c && !(Mt(u) && u instanceof u && Mt(c) && c instanceof c) && "constructor" in e && "constructor" in t)
      return !1;
  }
  if (r === 0)
    return !1;
  r < 0 && (r = -1), n = n || [], i = i || [];
  for (var _ = n.length; _--; )
    if (n[_] === e)
      return i[_] === t;
  if (n.push(e), i.push(t), s) {
    if (_ = e.length, _ !== t.length)
      return !1;
    for (; _--; )
      if (!ec(e[_], t[_], r - 1, n, i))
        return !1;
  } else {
    var l = Object.keys(e), f;
    if (_ = l.length, Object.keys(t).length !== _)
      return !1;
    for (; _--; )
      if (f = l[_], !(ur(t, f) && ec(e[f], t[f], r - 1, n, i)))
        return !1;
  }
  return n.pop(), i.pop(), !0;
}
function Y_(e) {
  return yo(e) ? e.slice() : ii(e) || Jr(e) || Eo(e) || ln(e) ? Array.from(e.entries()) : e;
}
function zi(e) {
  return e[Symbol.iterator] = sR, e;
}
function sR() {
  return this;
}
["Symbol", "Map", "Set"].forEach(function(e) {
  var t = ol();
  typeof t[e] > "u" && he("MobX requires global '" + e + "' to be available or polyfilled");
});
typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ == "object" && __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
  spy: Nb,
  extras: {
    getDebugName: Zu
  },
  $mobx: z
});
class uR {
  constructor(t) {
    zr(this), this.state = t, this.getters = t.getters;
  }
  saveContent(t, r) {
    const n = this.getters.getActiveTab(r);
    n.content = t;
  }
}
if (!dt)
  throw new Error("mobx-react-lite requires React with Hooks support");
if (!$b)
  throw new Error("mobx-react-lite@3 requires mobx at least version 6 to be available");
function cR(e) {
  e();
}
function lR(e) {
  e || (e = cR), Bb({ reactionScheduler: e });
}
function _R(e) {
  return xb(e);
}
var fR = 1e4, dR = 1e4, hR = (
  /** @class */
  function() {
    function e(t) {
      var r = this;
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
        value: function(n) {
          n === void 0 && (n = fR), clearTimeout(r.sweepTimeout), r.sweepTimeout = void 0;
          var i = Date.now();
          r.registrations.forEach(function(o, a) {
            i - o.registeredAt >= n && (r.finalize(o.value), r.registrations.delete(a));
          }), r.registrations.size > 0 && r.scheduleSweep();
        }
      }), Object.defineProperty(this, "finalizeAllImmediately", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: function() {
          r.sweep(0);
        }
      });
    }
    return Object.defineProperty(e.prototype, "register", {
      enumerable: !1,
      configurable: !0,
      writable: !0,
      value: function(t, r, n) {
        this.registrations.set(n, {
          value: r,
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
        this.sweepTimeout === void 0 && (this.sweepTimeout = setTimeout(this.sweep, dR));
      }
    }), e;
  }()
), pR = typeof FinalizationRegistry < "u" ? FinalizationRegistry : hR, tc = new pR(function(e) {
  var t;
  (t = e.reaction) === null || t === void 0 || t.dispose(), e.reaction = null;
}), K_ = globalThis && globalThis.__read || function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), i, o = [], a;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; )
      o.push(i.value);
  } catch (s) {
    a = { error: s };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return o;
};
function $_(e) {
  return "observer".concat(e);
}
var mR = (
  /** @class */
  function() {
    function e() {
    }
    return e;
  }()
);
function TR() {
  return new mR();
}
function ER(e, t) {
  t === void 0 && (t = "observed");
  var r = K_(Pe.useState(TR), 1), n = r[0], i = K_(Pe.useState(), 2), o = i[1], a = function() {
    return o([]);
  }, s = Pe.useRef(null);
  s.current || (s.current = {
    reaction: null,
    mounted: !1,
    changedBeforeMount: !1
  });
  var u = s.current;
  u.reaction || (u.reaction = new Yi($_(t), function() {
    u.mounted ? a() : u.changedBeforeMount = !0;
  }), tc.register(n, u, u)), Pe.useDebugValue(u.reaction, _R), Pe.useEffect(function() {
    return tc.unregister(u), u.mounted = !0, u.reaction ? u.changedBeforeMount && (u.changedBeforeMount = !1, a()) : (u.reaction = new Yi($_(t), function() {
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
var Dp = typeof Symbol == "function" && Symbol.for, z_ = Dp ? Symbol.for("react.forward_ref") : typeof Fn == "function" && Fn(function(e) {
  return null;
}).$$typeof, q_ = Dp ? Symbol.for("react.memo") : typeof jn == "function" && jn(function(e) {
  return null;
}).$$typeof;
function Tr(e, t) {
  var r;
  if (q_ && e.$$typeof === q_)
    throw new Error("[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.");
  var n = (r = t?.forwardRef) !== null && r !== void 0 ? r : !1, i = e, o = e.displayName || e.name;
  if (z_ && e.$$typeof === z_ && (n = !0, i = e.render, typeof i != "function"))
    throw new Error("[mobx-react-lite] `render` property of ForwardRef was not a function");
  var a = function(s, u) {
    return ER(function() {
      return i(s, u);
    }, o);
  };
  return o !== "" && (a.displayName = o), e.contextTypes && (a.contextTypes = e.contextTypes), n && (a = Fn(a)), a = jn(a), bR(e, a), a;
}
var OR = {
  $$typeof: !0,
  render: !0,
  compare: !0,
  type: !0,
  // Don't redefine `displayName`,
  // it's defined as getter-setter pair on `memo` (see #3192).
  displayName: !0
};
function bR(e, t) {
  Object.keys(e).forEach(function(r) {
    OR[r] || Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r));
  });
}
globalThis && globalThis.__read;
var fu;
lR(yh);
fu = tc.finalizeAllImmediately;
const RR = ({ fontSize: e, tabSize: t }) => ({
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
}), _n = () => ot(aO), vR = () => _n().state, gR = (e) => {
  const t = _n(), r = t.state.selectedTerminalTab;
  return (n) => () => {
    if (r === n) {
      t.toggle(e), t.update({
        isHtmlPreviewOpened: !1
      });
      return;
    }
    t.update({
      selectedTerminalTab: n,
      isHtmlPreviewOpened: !1,
      [e]: !0
    });
  };
}, Qr = () => ot(hi).actions, ai = () => ot(hi), Os = () => ot(hi).getters, IR = () => ot(hi).services, NR = () => ot(hi).storage;
function AR(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function J_(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Q_(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? J_(Object(r), !0).forEach(function(n) {
      AR(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : J_(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function yR(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, o;
  for (o = 0; o < n.length; o++)
    i = n[o], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function SR(e, t) {
  if (e == null)
    return {};
  var r = yR(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++)
      n = o[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function DR(e, t) {
  return GR(e) || CR(e, t) || UR(e, t) || wR();
}
function GR(e) {
  if (Array.isArray(e))
    return e;
}
function CR(e, t) {
  if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(e)))) {
    var r = [], n = !0, i = !1, o = void 0;
    try {
      for (var a = e[Symbol.iterator](), s; !(n = (s = a.next()).done) && (r.push(s.value), !(t && r.length === t)); n = !0)
        ;
    } catch (u) {
      i = !0, o = u;
    } finally {
      try {
        !n && a.return != null && a.return();
      } finally {
        if (i)
          throw o;
      }
    }
    return r;
  }
}
function UR(e, t) {
  if (e) {
    if (typeof e == "string")
      return Z_(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Z_(e, t);
  }
}
function Z_(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function wR() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function PR(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function ef(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function tf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ef(Object(r), !0).forEach(function(n) {
      PR(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ef(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function HR() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return function(n) {
    return t.reduceRight(function(i, o) {
      return o(i);
    }, n);
  };
}
function Gi(e) {
  return function t() {
    for (var r = this, n = arguments.length, i = new Array(n), o = 0; o < n; o++)
      i[o] = arguments[o];
    return i.length >= e.length ? e.apply(this, i) : function() {
      for (var a = arguments.length, s = new Array(a), u = 0; u < a; u++)
        s[u] = arguments[u];
      return t.apply(r, [].concat(i, s));
    };
  };
}
function Wa(e) {
  return {}.toString.call(e).includes("Object");
}
function MR(e) {
  return !Object.keys(e).length;
}
function qi(e) {
  return typeof e == "function";
}
function kR(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function LR(e, t) {
  return Wa(t) || Mr("changeType"), Object.keys(t).some(function(r) {
    return !kR(e, r);
  }) && Mr("changeField"), t;
}
function BR(e) {
  qi(e) || Mr("selectorType");
}
function xR(e) {
  qi(e) || Wa(e) || Mr("handlerType"), Wa(e) && Object.values(e).some(function(t) {
    return !qi(t);
  }) && Mr("handlersType");
}
function FR(e) {
  e || Mr("initialIsRequired"), Wa(e) || Mr("initialType"), MR(e) && Mr("initialContent");
}
function jR(e, t) {
  throw new Error(e[t] || e.default);
}
var VR = {
  initialIsRequired: "initial state is required",
  initialType: "initial state should be an object",
  initialContent: "initial state shouldn't be an empty object",
  handlerType: "handler should be an object or a function",
  handlersType: "all handlers should be a functions",
  selectorType: "selector should be a function",
  changeType: "provided value of changes should be an object",
  changeField: 'it seams you want to change a field in the state which is not specified in the "initial" state',
  default: "an unknown error accured in `state-local` package"
}, Mr = Gi(jR)(VR), qo = {
  changes: LR,
  selector: BR,
  handler: xR,
  initial: FR
};
function WR(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  qo.initial(e), qo.handler(t);
  var r = {
    current: e
  }, n = Gi(KR)(r, t), i = Gi(YR)(r), o = Gi(qo.changes)(e), a = Gi(XR)(r);
  function s() {
    var c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function(_) {
      return _;
    };
    return qo.selector(c), c(r.current);
  }
  function u(c) {
    HR(n, i, o, a)(c);
  }
  return [s, u];
}
function XR(e, t) {
  return qi(t) ? t(e.current) : t;
}
function YR(e, t) {
  return e.current = tf(tf({}, e.current), t), t;
}
function KR(e, t, r) {
  return qi(t) ? t(e.current) : Object.keys(r).forEach(function(n) {
    var i;
    return (i = t[n]) === null || i === void 0 ? void 0 : i.call(t, e.current[n]);
  }), r;
}
var $R = {
  create: WR
}, zR = {
  paths: {
    vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.36.1/min/vs"
  }
};
function qR(e) {
  return function t() {
    for (var r = this, n = arguments.length, i = new Array(n), o = 0; o < n; o++)
      i[o] = arguments[o];
    return i.length >= e.length ? e.apply(this, i) : function() {
      for (var a = arguments.length, s = new Array(a), u = 0; u < a; u++)
        s[u] = arguments[u];
      return t.apply(r, [].concat(i, s));
    };
  };
}
function JR(e) {
  return {}.toString.call(e).includes("Object");
}
function QR(e) {
  return e || rf("configIsRequired"), JR(e) || rf("configType"), e.urls ? (ZR(), {
    paths: {
      vs: e.urls.monacoBase
    }
  }) : e;
}
function ZR() {
  console.warn(Gp.deprecation);
}
function ev(e, t) {
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
}, rf = qR(ev)(Gp), tv = {
  config: QR
}, rv = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  return function(i) {
    return r.reduceRight(function(o, a) {
      return a(o);
    }, i);
  };
};
function Cp(e, t) {
  return Object.keys(t).forEach(function(r) {
    t[r] instanceof Object && e[r] && Object.assign(t[r], Cp(e[r], t[r]));
  }), Q_(Q_({}, e), t);
}
var nv = {
  type: "cancelation",
  msg: "operation is manually canceled"
};
function du(e) {
  var t = !1, r = new Promise(function(n, i) {
    e.then(function(o) {
      return t ? i(nv) : n(o);
    }), e.catch(i);
  });
  return r.cancel = function() {
    return t = !0;
  }, r;
}
var iv = $R.create({
  config: zR,
  isInitialized: !1,
  resolve: null,
  reject: null,
  monaco: null
}), Up = DR(iv, 2), Do = Up[0], bs = Up[1];
function ov(e) {
  var t = tv.config(e), r = t.monaco, n = SR(t, ["monaco"]);
  bs(function(i) {
    return {
      config: Cp(i.config, n),
      monaco: r
    };
  });
}
function av() {
  var e = Do(function(t) {
    var r = t.monaco, n = t.isInitialized, i = t.resolve;
    return {
      monaco: r,
      isInitialized: n,
      resolve: i
    };
  });
  if (!e.isInitialized) {
    if (bs({
      isInitialized: !0
    }), e.monaco)
      return e.resolve(e.monaco), du(hu);
    if (window.monaco && window.monaco.editor)
      return wp(window.monaco), e.resolve(window.monaco), du(hu);
    rv(sv, cv)(lv);
  }
  return du(hu);
}
function sv(e) {
  return document.body.appendChild(e);
}
function uv(e) {
  var t = document.createElement("script");
  return e && (t.src = e), t;
}
function cv(e) {
  var t = Do(function(n) {
    var i = n.config, o = n.reject;
    return {
      config: i,
      reject: o
    };
  }), r = uv("".concat(t.config.paths.vs, "/loader.js"));
  return r.onload = function() {
    return e();
  }, r.onerror = t.reject, r;
}
function lv() {
  var e = Do(function(r) {
    var n = r.config, i = r.resolve, o = r.reject;
    return {
      config: n,
      resolve: i,
      reject: o
    };
  }), t = window.require;
  t.config(e.config), t(["vs/editor/editor.main"], function(r) {
    wp(r), e.resolve(r);
  }, function(r) {
    e.reject(r);
  });
}
function wp(e) {
  Do().monaco || bs({
    monaco: e
  });
}
function _v() {
  return Do(function(e) {
    var t = e.monaco;
    return t;
  });
}
var hu = new Promise(function(e, t) {
  return bs({
    resolve: e,
    reject: t
  });
}), Xa = {
  config: ov,
  init: av,
  __getMonacoInstance: _v
}, fv = { wrapper: { display: "flex", position: "relative", textAlign: "initial" }, fullWidth: { width: "100%" }, hide: { display: "none" } }, pu = fv, dv = { container: { display: "flex", height: "100%", width: "100%", justifyContent: "center", alignItems: "center" } }, hv = dv;
function pv({ children: e }) {
  return Pe.createElement("div", { style: hv.container }, e);
}
var mv = pv, Tv = mv;
function Ev({ width: e, height: t, isEditorReady: r, loading: n, _ref: i, className: o, wrapperProps: a }) {
  return Pe.createElement("section", { style: { ...pu.wrapper, width: e, height: t }, ...a }, !r && Pe.createElement(Tv, null, n), Pe.createElement("div", { ref: i, style: { ...pu.fullWidth, ...!r && pu.hide }, className: o }));
}
var Ov = Ev, Pp = jn(Ov);
function bv(e) {
  Le(e, []);
}
var pl = bv;
function Rv(e, t, r = !0) {
  let n = ae(!0);
  Le(n.current || !r ? () => {
    n.current = !1;
  } : e, t);
}
var ht = Rv;
function Pi() {
}
function yn(e, t, r, n) {
  return vv(e, n) || gv(e, t, r, n);
}
function vv(e, t) {
  return e.editor.getModel(Hp(e, t));
}
function gv(e, t, r, n) {
  return e.editor.createModel(t, r, n ? Hp(e, n) : void 0);
}
function Hp(e, t) {
  return e.Uri.parse(t);
}
function Iv({ original: e, modified: t, language: r, originalLanguage: n, modifiedLanguage: i, originalModelPath: o, modifiedModelPath: a, keepCurrentOriginalModel: s = !1, keepCurrentModifiedModel: u = !1, theme: c = "light", loading: _ = "Loading...", options: l = {}, height: f = "100%", width: h = "100%", className: d, wrapperProps: p = {}, beforeMount: m = Pi, onMount: T = Pi }) {
  let [O, E] = dt(!1), [R, b] = dt(!0), g = ae(null), A = ae(null), G = ae(null), D = ae(T), H = ae(m), Y = ae(!1);
  pl(() => {
    let P = Xa.init();
    return P.then((Q) => (A.current = Q) && b(!1)).catch((Q) => Q?.type !== "cancelation" && console.error("Monaco initialization: error:", Q)), () => g.current ? x() : P.cancel();
  }), ht(() => {
    let P = g.current.getModifiedEditor();
    P.getOption(A.current.editor.EditorOption.readOnly) ? P.setValue(t || "") : t !== P.getValue() && (P.executeEdits("", [{ range: P.getModel().getFullModelRange(), text: t || "", forceMoveMarkers: !0 }]), P.pushUndoStop());
  }, [t], O), ht(() => {
    g.current?.getModel()?.original.setValue(e || "");
  }, [e], O), ht(() => {
    let { original: P, modified: Q } = g.current.getModel();
    A.current.editor.setModelLanguage(P, n || r || "text"), A.current.editor.setModelLanguage(Q, i || r || "text");
  }, [r, n, i], O), ht(() => {
    A.current?.editor.setTheme(c);
  }, [c], O), ht(() => {
    g.current?.updateOptions(l);
  }, [l], O);
  let re = jr(() => {
    if (!A.current)
      return;
    H.current(A.current);
    let P = yn(A.current, e || "", n || r || "text", o || ""), Q = yn(A.current, t || "", i || r || "text", a || "");
    g.current?.setModel({ original: P, modified: Q });
  }, [r, t, i, e, n, o, a]), Ne = jr(() => {
    !Y.current && G.current && (g.current = A.current.editor.createDiffEditor(G.current, { automaticLayout: !0, ...l }), re(), A.current?.editor.setTheme(c), E(!0), Y.current = !0);
  }, [l, c, re]);
  Le(() => {
    O && D.current(g.current, A.current);
  }, [O]), Le(() => {
    !R && !O && Ne();
  }, [R, O, Ne]), ht(() => {
    if (g.current && A.current) {
      let P = g.current.getOriginalEditor(), Q = yn(A.current, e || "", n || r || "text", o || "");
      Q !== P.getModel() && P.setModel(Q);
    }
  }, [o], O), ht(() => {
    if (g.current && A.current) {
      let P = g.current.getModifiedEditor(), Q = yn(A.current, t || "", i || r || "text", a || "");
      Q !== P.getModel() && P.setModel(Q);
    }
  }, [a], O);
  function x() {
    let P = g.current?.getModel();
    s || P?.original?.dispose(), u || P?.modified?.dispose(), g.current?.dispose();
  }
  return Pe.createElement(Pp, { width: h, height: f, isEditorReady: O, loading: _, _ref: G, className: d, wrapperProps: p });
}
var Nv = Iv;
jn(Nv);
function Av() {
  let [e, t] = dt(Xa.__getMonacoInstance());
  return pl(() => {
    let r;
    return e || (r = Xa.init(), r.then((n) => {
      t(n);
    })), () => r?.cancel();
  }), e;
}
var Mp = Av;
function yv(e) {
  let t = ae();
  return Le(() => {
    t.current = e;
  }, [e]), t.current;
}
var Sv = yv, Jo = /* @__PURE__ */ new Map();
function Dv({ defaultValue: e, defaultLanguage: t, defaultPath: r, value: n, language: i, path: o, theme: a = "light", line: s, loading: u = "Loading...", options: c = {}, overrideServices: _ = {}, saveViewState: l = !0, keepCurrentModel: f = !1, width: h = "100%", height: d = "100%", className: p, wrapperProps: m = {}, beforeMount: T = Pi, onMount: O = Pi, onChange: E, onValidate: R = Pi }) {
  let [b, g] = dt(!1), [A, G] = dt(!0), D = ae(null), H = ae(null), Y = ae(null), re = ae(O), Ne = ae(T), x = ae(), P = ae(n), Q = Sv(o), _e = ae(!1), ie = ae(!1);
  pl(() => {
    let Ae = Xa.init();
    return Ae.then((w) => (D.current = w) && G(!1)).catch((w) => w?.type !== "cancelation" && console.error("Monaco initialization: error:", w)), () => H.current ? Be() : Ae.cancel();
  }), ht(() => {
    let Ae = yn(D.current, e || n || "", t || i || "", o || r || "");
    Ae !== H.current?.getModel() && (l && Jo.set(Q, H.current?.saveViewState()), H.current?.setModel(Ae), l && H.current?.restoreViewState(Jo.get(o)));
  }, [o], b), ht(() => {
    H.current?.updateOptions(c);
  }, [c], b), ht(() => {
    !H.current || n === void 0 || (H.current.getOption(D.current.editor.EditorOption.readOnly) ? H.current.setValue(n) : n !== H.current.getValue() && (ie.current = !0, H.current.executeEdits("", [{ range: H.current.getModel().getFullModelRange(), text: n, forceMoveMarkers: !0 }]), H.current.pushUndoStop(), ie.current = !1));
  }, [n], b), ht(() => {
    let Ae = H.current?.getModel();
    Ae && i && D.current?.editor.setModelLanguage(Ae, i);
  }, [i], b), ht(() => {
    s !== void 0 && H.current?.revealLine(s);
  }, [s], b), ht(() => {
    D.current?.editor.setTheme(a);
  }, [a], b);
  let se = jr(() => {
    if (!(!Y.current || !D.current) && !_e.current) {
      Ne.current(D.current);
      let Ae = o || r, w = yn(D.current, n || e || "", t || i || "", Ae || "");
      H.current = D.current?.editor.create(Y.current, { model: w, automaticLayout: !0, ...c }, _), l && H.current.restoreViewState(Jo.get(Ae)), D.current.editor.setTheme(a), g(!0), _e.current = !0;
    }
  }, [e, t, r, n, i, o, c, _, l, a]);
  Le(() => {
    b && re.current(H.current, D.current);
  }, [b]), Le(() => {
    !A && !b && se();
  }, [A, b, se]), P.current = n, Le(() => {
    b && E && (x.current?.dispose(), x.current = H.current?.onDidChangeModelContent((Ae) => {
      ie.current || E(H.current.getValue(), Ae);
    }));
  }, [b, E]), Le(() => {
    if (b) {
      let Ae = D.current.editor.onDidChangeMarkers((w) => {
        let M = H.current.getModel()?.uri;
        if (M && w.find((L) => L.path === M.path)) {
          let L = D.current.editor.getModelMarkers({ resource: M });
          R?.(L);
        }
      });
      return () => {
        Ae?.dispose();
      };
    }
    return () => {
    };
  }, [b, R]);
  function Be() {
    x.current?.dispose(), f ? l && Jo.set(o, H.current.saveViewState()) : H.current.getModel()?.dispose(), H.current.dispose();
  }
  return Pe.createElement(Pp, { width: h, height: d, isEditorReady: b, loading: u, _ref: Y, className: p, wrapperProps: m });
}
var Gv = Dv, Cv = jn(Gv), Uv = Cv;
const wv = {
  EDITOR_THEME: "EDITOR_THEME",
  EDITOR_CONTENT_DATA: "EDITOR_CONTENT_DATA",
  EDITOR_EXECUTE_MESSAGES: "EDITOR_EXECUTE_MESSAGES",
  EDITOR_FONT_SIZE: "EDITOR_FONT_SIZE",
  EDITOR_TAB_SIZE: "EDITOR_TAB_SIZE",
  EDITOR_CUSTOM_BACKGROUND: "EDITOR_CUSTOM_BACKGROUND",
  EDITOR_CUSTOM_COLOR: "EDITOR_CUSTOM_COLOR",
  EDITOR_HTML_PREVIEW: "EDITOR_HTML_PREVIEW",
  AUTH_TOKEN: "AUTH_TOKEN"
}, Pv = (e) => typeof e == "object" && e !== null, kp = (e) => typeof e == "string", Hv = (e) => typeof e == "function", Mv = "code_gear", Lp = { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_bf4a7242-89a4-4796-81b0-f5c1dfa1fca5", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "yarn/3.6.0 npm/? node/v19.9.0 linux x64", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_bf4a7242-89a4-4796-81b0-f5c1dfa1fca5", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/tmp/xfs-6c27b37b/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", GRADLE_HOME: "/usr/share/gradle-8.2.1", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "dependabot/npm_and_yarn/apollo/client-3.8.0", SYSTEMD_EXEC_PID: "664", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.7/x64", NVM_DIR: "/home/runner/.nvm", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230806.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", JOURNAL_STREAM: "8:16745", GITHUB_WORKFLOW: "CodeGear CI", _: "/usr/local/bin/yarn", GITHUB_RUN_ID: "5813666703", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "7718eeecae826845b1d922f201314e132dc1d614", GITHUB_BASE_REF: "master", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/pull/19/merge", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", PATH: "/tmp/xfs-6c27b37b:/opt/hostedtoolcache/node/19.9.0/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_0eef41c6-42a6-45ac-823a-2b1fc6667979", INVOCATION_ID: "db7248d7fbec4a249c4252e1476a29a4", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.12/x64", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "51", GITHUB_TRIGGERING_ACTOR: "dependabot[bot]", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 5", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "19/merge", GITHUB_REPOSITORY: "Gearonix/CodeGear", STATS_UE: "true", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", PROJECT_CWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", STATS_NM: "true", npm_package_version: "1.1.0", npm_lifecycle_event: "build", GITHUB_REF_PROTECTED: "false", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "7718eeecae826845b1d922f201314e132dc1d614", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/pull/19/merge", GITHUB_ACTOR: "dependabot[bot]", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_bf4a7242-89a4-4796-81b0-f5c1dfa1fca5", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "49699333", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", BERRY_BIN_FOLDER: "/tmp/xfs-6c27b37b", npm_execpath: "/tmp/xfs-6c27b37b/yarn", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "pull_request", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_bf4a7242-89a4-4796-81b0-f5c1dfa1fca5", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_bf4a7242-89a4-4796-81b0-f5c1dfa1fca5", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/4251781990744259245", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "4251781990744259245", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.SERVER_URL ?? "http://localhost:6868", Bp = {
  CODE_EXECUTOR_API: "execute",
  _GRAPHQL: "graphql"
};
class ml {
  constructor(t) {
    this.isDisabled = !1, this.isDisabled = t ?? this.isDisabled;
  }
  get(t, r) {
    if (this.isDisabled)
      return r;
    const n = localStorage.getItem(this.withPrefix(t));
    return n ? kv(n) ? JSON.parse(n) : n : r;
  }
  set(t, r) {
    if (!(this.isDisabled || !(t in wv))) {
      if (kp(r))
        return localStorage.setItem(this.withPrefix(t), r);
      localStorage.setItem(this.withPrefix(t), JSON.stringify(r));
    }
  }
  clear(t) {
    if (t)
      return localStorage.removeItem(this.withPrefix(t));
    localStorage.clear();
  }
  withPrefix(t) {
    return `${Mv}__${t}`;
  }
}
const kv = (e) => {
  try {
    JSON.parse(e);
  } catch {
    return !1;
  }
  return !0;
};
var rc = function(e, t) {
  return rc = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var i in n)
      Object.prototype.hasOwnProperty.call(n, i) && (r[i] = n[i]);
  }, rc(e, t);
};
function Jt(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  rc(e, t);
  function r() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
}
var v = function() {
  return v = Object.assign || function(t) {
    for (var r, n = 1, i = arguments.length; n < i; n++) {
      r = arguments[n];
      for (var o in r)
        Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
    }
    return t;
  }, v.apply(this, arguments);
};
function dr(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
  return r;
}
function Ar(e, t, r, n) {
  function i(o) {
    return o instanceof r ? o : new r(function(a) {
      a(o);
    });
  }
  return new (r || (r = Promise))(function(o, a) {
    function s(_) {
      try {
        c(n.next(_));
      } catch (l) {
        a(l);
      }
    }
    function u(_) {
      try {
        c(n.throw(_));
      } catch (l) {
        a(l);
      }
    }
    function c(_) {
      _.done ? o(_.value) : i(_.value).then(s, u);
    }
    c((n = n.apply(e, t || [])).next());
  });
}
function yr(e, t) {
  var r = { label: 0, sent: function() {
    if (o[0] & 1)
      throw o[1];
    return o[1];
  }, trys: [], ops: [] }, n, i, o, a;
  return a = { next: s(0), throw: s(1), return: s(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function() {
    return this;
  }), a;
  function s(c) {
    return function(_) {
      return u([c, _]);
    };
  }
  function u(c) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; a && (a = 0, c[0] && (r = 0)), r; )
      try {
        if (n = 1, i && (o = c[0] & 2 ? i.return : c[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, c[1])).done)
          return o;
        switch (i = 0, o && (c = [c[0] & 2, o.value]), c[0]) {
          case 0:
          case 1:
            o = c;
            break;
          case 4:
            return r.label++, { value: c[1], done: !1 };
          case 5:
            r.label++, i = c[1], c = [0];
            continue;
          case 7:
            c = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (o = r.trys, !(o = o.length > 0 && o[o.length - 1]) && (c[0] === 6 || c[0] === 2)) {
              r = 0;
              continue;
            }
            if (c[0] === 3 && (!o || c[1] > o[0] && c[1] < o[3])) {
              r.label = c[1];
              break;
            }
            if (c[0] === 6 && r.label < o[1]) {
              r.label = o[1], o = c;
              break;
            }
            if (o && r.label < o[2]) {
              r.label = o[2], r.ops.push(c);
              break;
            }
            o[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        c = t.call(e, r);
      } catch (_) {
        c = [6, _], i = 0;
      } finally {
        n = o = 0;
      }
    if (c[0] & 5)
      throw c[1];
    return { value: c[0] ? c[1] : void 0, done: !0 };
  }
}
function kr(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, i = t.length, o; n < i; n++)
      (o || !(n in t)) && (o || (o = Array.prototype.slice.call(t, 0, n)), o[n] = t[n]);
  return e.concat(o || Array.prototype.slice.call(t));
}
var mu = "Invariant Violation", nf = Object.setPrototypeOf, Lv = nf === void 0 ? function(e, t) {
  return e.__proto__ = t, e;
} : nf, xp = (
  /** @class */
  function(e) {
    Jt(t, e);
    function t(r) {
      r === void 0 && (r = mu);
      var n = e.call(this, typeof r == "number" ? mu + ": " + r + " (see https://github.com/apollographql/invariant-packages)" : r) || this;
      return n.framesToPop = 1, n.name = mu, Lv(n, t.prototype), n;
    }
    return t;
  }(Error)
);
function tn(e, t) {
  if (!e)
    throw new xp(t);
}
var Fp = ["debug", "log", "warn", "error", "silent"], Bv = Fp.indexOf("log");
function Qo(e) {
  return function() {
    if (Fp.indexOf(e) >= Bv) {
      var t = console[e] || console.log;
      return t.apply(console, arguments);
    }
  };
}
(function(e) {
  e.debug = Qo("debug"), e.log = Qo("log"), e.warn = Qo("warn"), e.error = Qo("error");
})(tn || (tn = {}));
var Tl = "3.8.0";
function Gt(e) {
  try {
    return e();
  } catch {
  }
}
const of = Gt(function() {
  return globalThis;
}) || Gt(function() {
  return window;
}) || Gt(function() {
  return self;
}) || Gt(function() {
  return global;
}) || Gt(function() {
  return Gt.constructor("return this")();
});
var af = /* @__PURE__ */ new Map();
function nc(e) {
  var t = af.get(e) || 1;
  return af.set(e, t + 1), "".concat(e, ":").concat(t, ":").concat(Math.random().toString(36).slice(2));
}
function jp(e, t) {
  t === void 0 && (t = 0);
  var r = nc("stringifyForDisplay");
  return JSON.stringify(e, function(n, i) {
    return i === void 0 ? r : i;
  }, t).split(JSON.stringify(r)).join("<undefined>");
}
function Zo(e) {
  return function(t) {
    for (var r = [], n = 1; n < arguments.length; n++)
      r[n - 1] = arguments[n];
    e.apply(void 0, kr([typeof t == "number" ? El(t) : t], r, !1));
  };
}
var $ = Object.assign(function(t, r) {
  for (var n = [], i = 2; i < arguments.length; i++)
    n[i - 2] = arguments[i];
  t || tn(t, El(r, n));
}, {
  debug: Zo(tn.debug),
  log: Zo(tn.log),
  warn: Zo(tn.warn),
  error: Zo(tn.error)
});
function nt(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  return new xp(El(e, t));
}
var sf = Symbol.for("ApolloErrorMessageHandler_" + Tl);
function El(e, t) {
  if (t === void 0 && (t = []), !!e) {
    var r = t.map(function(n) {
      return typeof n == "string" ? n : jp(n, 2).slice(0, 1e3);
    });
    return of[sf] && of[sf](e, r) || "An error occured! For more details, see the full error text at https://go.apollo.dev/c/err#".concat(encodeURIComponent(JSON.stringify({
      version: Tl,
      message: e,
      args: r
    })));
  }
}
function xv(e, t) {
  if (!!!e)
    throw new Error(t);
}
const Vp = {
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
}, Fv = new Set(Object.keys(Vp));
function uf(e) {
  const t = e?.kind;
  return typeof t == "string" && Fv.has(t);
}
var cf;
(function(e) {
  e.QUERY = "query", e.MUTATION = "mutation", e.SUBSCRIPTION = "subscription";
})(cf || (cf = {}));
var We;
(function(e) {
  e.NAME = "Name", e.DOCUMENT = "Document", e.OPERATION_DEFINITION = "OperationDefinition", e.VARIABLE_DEFINITION = "VariableDefinition", e.SELECTION_SET = "SelectionSet", e.FIELD = "Field", e.ARGUMENT = "Argument", e.FRAGMENT_SPREAD = "FragmentSpread", e.INLINE_FRAGMENT = "InlineFragment", e.FRAGMENT_DEFINITION = "FragmentDefinition", e.VARIABLE = "Variable", e.INT = "IntValue", e.FLOAT = "FloatValue", e.STRING = "StringValue", e.BOOLEAN = "BooleanValue", e.NULL = "NullValue", e.ENUM = "EnumValue", e.LIST = "ListValue", e.OBJECT = "ObjectValue", e.OBJECT_FIELD = "ObjectField", e.DIRECTIVE = "Directive", e.NAMED_TYPE = "NamedType", e.LIST_TYPE = "ListType", e.NON_NULL_TYPE = "NonNullType", e.SCHEMA_DEFINITION = "SchemaDefinition", e.OPERATION_TYPE_DEFINITION = "OperationTypeDefinition", e.SCALAR_TYPE_DEFINITION = "ScalarTypeDefinition", e.OBJECT_TYPE_DEFINITION = "ObjectTypeDefinition", e.FIELD_DEFINITION = "FieldDefinition", e.INPUT_VALUE_DEFINITION = "InputValueDefinition", e.INTERFACE_TYPE_DEFINITION = "InterfaceTypeDefinition", e.UNION_TYPE_DEFINITION = "UnionTypeDefinition", e.ENUM_TYPE_DEFINITION = "EnumTypeDefinition", e.ENUM_VALUE_DEFINITION = "EnumValueDefinition", e.INPUT_OBJECT_TYPE_DEFINITION = "InputObjectTypeDefinition", e.DIRECTIVE_DEFINITION = "DirectiveDefinition", e.SCHEMA_EXTENSION = "SchemaExtension", e.SCALAR_TYPE_EXTENSION = "ScalarTypeExtension", e.OBJECT_TYPE_EXTENSION = "ObjectTypeExtension", e.INTERFACE_TYPE_EXTENSION = "InterfaceTypeExtension", e.UNION_TYPE_EXTENSION = "UnionTypeExtension", e.ENUM_TYPE_EXTENSION = "EnumTypeExtension", e.INPUT_OBJECT_TYPE_EXTENSION = "InputObjectTypeExtension";
})(We || (We = {}));
function lf(e) {
  return e === 9 || e === 32;
}
function jv(e, t) {
  const r = e.replace(/"""/g, '\\"""'), n = r.split(/\r\n|[\n\r]/g), i = n.length === 1, o = n.length > 1 && n.slice(1).every((h) => h.length === 0 || lf(h.charCodeAt(0))), a = r.endsWith('\\"""'), s = e.endsWith('"') && !a, u = e.endsWith("\\"), c = s || u, _ = !(t != null && t.minimize) && // add leading and trailing new lines only if it improves readability
  (!i || e.length > 70 || c || o || a);
  let l = "";
  const f = i && lf(e.charCodeAt(0));
  return (_ && !f || o) && (l += `
`), l += r, (_ || c) && (l += `
`), '"""' + l + '"""';
}
const Vv = 10, Wp = 2;
function Wv(e) {
  return Rs(e, []);
}
function Rs(e, t) {
  switch (typeof e) {
    case "string":
      return JSON.stringify(e);
    case "function":
      return e.name ? `[function ${e.name}]` : "[function]";
    case "object":
      return Xv(e, t);
    default:
      return String(e);
  }
}
function Xv(e, t) {
  if (e === null)
    return "null";
  if (t.includes(e))
    return "[Circular]";
  const r = [...t, e];
  if (Yv(e)) {
    const n = e.toJSON();
    if (n !== e)
      return typeof n == "string" ? n : Rs(n, r);
  } else if (Array.isArray(e))
    return $v(e, r);
  return Kv(e, r);
}
function Yv(e) {
  return typeof e.toJSON == "function";
}
function Kv(e, t) {
  const r = Object.entries(e);
  return r.length === 0 ? "{}" : t.length > Wp ? "[" + zv(e) + "]" : "{ " + r.map(
    ([i, o]) => i + ": " + Rs(o, t)
  ).join(", ") + " }";
}
function $v(e, t) {
  if (e.length === 0)
    return "[]";
  if (t.length > Wp)
    return "[Array]";
  const r = Math.min(Vv, e.length), n = e.length - r, i = [];
  for (let o = 0; o < r; ++o)
    i.push(Rs(e[o], t));
  return n === 1 ? i.push("... 1 more item") : n > 1 && i.push(`... ${n} more items`), "[" + i.join(", ") + "]";
}
function zv(e) {
  const t = Object.prototype.toString.call(e).replace(/^\[object /, "").replace(/]$/, "");
  if (t === "Object" && typeof e.constructor == "function") {
    const r = e.constructor.name;
    if (typeof r == "string" && r !== "")
      return r;
  }
  return t;
}
function qv(e) {
  return `"${e.replace(Jv, Qv)}"`;
}
const Jv = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;
function Qv(e) {
  return Zv[e.charCodeAt(0)];
}
const Zv = [
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
], Ol = Object.freeze({});
function hr(e, t, r = Vp) {
  const n = /* @__PURE__ */ new Map();
  for (const T of Object.values(We))
    n.set(T, eg(t, T));
  let i, o = Array.isArray(e), a = [e], s = -1, u = [], c = e, _, l;
  const f = [], h = [];
  do {
    s++;
    const T = s === a.length, O = T && u.length !== 0;
    if (T) {
      if (_ = h.length === 0 ? void 0 : f[f.length - 1], c = l, l = h.pop(), O)
        if (o) {
          c = c.slice();
          let R = 0;
          for (const [b, g] of u) {
            const A = b - R;
            g === null ? (c.splice(A, 1), R++) : c[A] = g;
          }
        } else {
          c = Object.defineProperties(
            {},
            Object.getOwnPropertyDescriptors(c)
          );
          for (const [R, b] of u)
            c[R] = b;
        }
      s = i.index, a = i.keys, u = i.edits, o = i.inArray, i = i.prev;
    } else if (l) {
      if (_ = o ? s : a[s], c = l[_], c == null)
        continue;
      f.push(_);
    }
    let E;
    if (!Array.isArray(c)) {
      var d, p;
      uf(c) || xv(!1, `Invalid AST Node: ${Wv(c)}.`);
      const R = T ? (d = n.get(c.kind)) === null || d === void 0 ? void 0 : d.leave : (p = n.get(c.kind)) === null || p === void 0 ? void 0 : p.enter;
      if (E = R?.call(t, c, _, l, f, h), E === Ol)
        break;
      if (E === !1) {
        if (!T) {
          f.pop();
          continue;
        }
      } else if (E !== void 0 && (u.push([_, E]), !T))
        if (uf(E))
          c = E;
        else {
          f.pop();
          continue;
        }
    }
    if (E === void 0 && O && u.push([_, c]), T)
      f.pop();
    else {
      var m;
      i = {
        inArray: o,
        index: s,
        keys: a,
        edits: u,
        prev: i
      }, o = Array.isArray(c), a = o ? c : (m = r[c.kind]) !== null && m !== void 0 ? m : [], s = -1, u = [], l && h.push(l), l = c;
    }
  } while (i !== void 0);
  return u.length !== 0 ? u[u.length - 1][1] : e;
}
function eg(e, t) {
  const r = e[t];
  return typeof r == "object" ? r : typeof r == "function" ? {
    enter: r,
    leave: void 0
  } : {
    enter: e.enter,
    leave: e.leave
  };
}
function tg(e) {
  return hr(e, ng);
}
const rg = 80, ng = {
  Name: {
    leave: (e) => e.value
  },
  Variable: {
    leave: (e) => "$" + e.name
  },
  // Document
  Document: {
    leave: (e) => F(e.definitions, `

`)
  },
  OperationDefinition: {
    leave(e) {
      const t = oe("(", F(e.variableDefinitions, ", "), ")"), r = F(
        [
          e.operation,
          F([e.name, t]),
          F(e.directives, " ")
        ],
        " "
      );
      return (r === "query" ? "" : r + " ") + e.selectionSet;
    }
  },
  VariableDefinition: {
    leave: ({ variable: e, type: t, defaultValue: r, directives: n }) => e + ": " + t + oe(" = ", r) + oe(" ", F(n, " "))
  },
  SelectionSet: {
    leave: ({ selections: e }) => Dt(e)
  },
  Field: {
    leave({ alias: e, name: t, arguments: r, directives: n, selectionSet: i }) {
      const o = oe("", e, ": ") + t;
      let a = o + oe("(", F(r, ", "), ")");
      return a.length > rg && (a = o + oe(`(
`, da(F(r, `
`)), `
)`)), F([a, F(n, " "), i], " ");
    }
  },
  Argument: {
    leave: ({ name: e, value: t }) => e + ": " + t
  },
  // Fragments
  FragmentSpread: {
    leave: ({ name: e, directives: t }) => "..." + e + oe(" ", F(t, " "))
  },
  InlineFragment: {
    leave: ({ typeCondition: e, directives: t, selectionSet: r }) => F(
      [
        "...",
        oe("on ", e),
        F(t, " "),
        r
      ],
      " "
    )
  },
  FragmentDefinition: {
    leave: ({ name: e, typeCondition: t, variableDefinitions: r, directives: n, selectionSet: i }) => (
      // or removed in the future.
      `fragment ${e}${oe("(", F(r, ", "), ")")} on ${t} ${oe("", F(n, " "), " ")}` + i
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
    leave: ({ value: e, block: t }) => t ? jv(e) : qv(e)
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
    leave: ({ values: e }) => "[" + F(e, ", ") + "]"
  },
  ObjectValue: {
    leave: ({ fields: e }) => "{" + F(e, ", ") + "}"
  },
  ObjectField: {
    leave: ({ name: e, value: t }) => e + ": " + t
  },
  // Directive
  Directive: {
    leave: ({ name: e, arguments: t }) => "@" + e + oe("(", F(t, ", "), ")")
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
    leave: ({ description: e, directives: t, operationTypes: r }) => oe("", e, `
`) + F(["schema", F(t, " "), Dt(r)], " ")
  },
  OperationTypeDefinition: {
    leave: ({ operation: e, type: t }) => e + ": " + t
  },
  ScalarTypeDefinition: {
    leave: ({ description: e, name: t, directives: r }) => oe("", e, `
`) + F(["scalar", t, F(r, " ")], " ")
  },
  ObjectTypeDefinition: {
    leave: ({ description: e, name: t, interfaces: r, directives: n, fields: i }) => oe("", e, `
`) + F(
      [
        "type",
        t,
        oe("implements ", F(r, " & ")),
        F(n, " "),
        Dt(i)
      ],
      " "
    )
  },
  FieldDefinition: {
    leave: ({ description: e, name: t, arguments: r, type: n, directives: i }) => oe("", e, `
`) + t + (_f(r) ? oe(`(
`, da(F(r, `
`)), `
)`) : oe("(", F(r, ", "), ")")) + ": " + n + oe(" ", F(i, " "))
  },
  InputValueDefinition: {
    leave: ({ description: e, name: t, type: r, defaultValue: n, directives: i }) => oe("", e, `
`) + F(
      [t + ": " + r, oe("= ", n), F(i, " ")],
      " "
    )
  },
  InterfaceTypeDefinition: {
    leave: ({ description: e, name: t, interfaces: r, directives: n, fields: i }) => oe("", e, `
`) + F(
      [
        "interface",
        t,
        oe("implements ", F(r, " & ")),
        F(n, " "),
        Dt(i)
      ],
      " "
    )
  },
  UnionTypeDefinition: {
    leave: ({ description: e, name: t, directives: r, types: n }) => oe("", e, `
`) + F(
      ["union", t, F(r, " "), oe("= ", F(n, " | "))],
      " "
    )
  },
  EnumTypeDefinition: {
    leave: ({ description: e, name: t, directives: r, values: n }) => oe("", e, `
`) + F(["enum", t, F(r, " "), Dt(n)], " ")
  },
  EnumValueDefinition: {
    leave: ({ description: e, name: t, directives: r }) => oe("", e, `
`) + F([t, F(r, " ")], " ")
  },
  InputObjectTypeDefinition: {
    leave: ({ description: e, name: t, directives: r, fields: n }) => oe("", e, `
`) + F(["input", t, F(r, " "), Dt(n)], " ")
  },
  DirectiveDefinition: {
    leave: ({ description: e, name: t, arguments: r, repeatable: n, locations: i }) => oe("", e, `
`) + "directive @" + t + (_f(r) ? oe(`(
`, da(F(r, `
`)), `
)`) : oe("(", F(r, ", "), ")")) + (n ? " repeatable" : "") + " on " + F(i, " | ")
  },
  SchemaExtension: {
    leave: ({ directives: e, operationTypes: t }) => F(
      ["extend schema", F(e, " "), Dt(t)],
      " "
    )
  },
  ScalarTypeExtension: {
    leave: ({ name: e, directives: t }) => F(["extend scalar", e, F(t, " ")], " ")
  },
  ObjectTypeExtension: {
    leave: ({ name: e, interfaces: t, directives: r, fields: n }) => F(
      [
        "extend type",
        e,
        oe("implements ", F(t, " & ")),
        F(r, " "),
        Dt(n)
      ],
      " "
    )
  },
  InterfaceTypeExtension: {
    leave: ({ name: e, interfaces: t, directives: r, fields: n }) => F(
      [
        "extend interface",
        e,
        oe("implements ", F(t, " & ")),
        F(r, " "),
        Dt(n)
      ],
      " "
    )
  },
  UnionTypeExtension: {
    leave: ({ name: e, directives: t, types: r }) => F(
      [
        "extend union",
        e,
        F(t, " "),
        oe("= ", F(r, " | "))
      ],
      " "
    )
  },
  EnumTypeExtension: {
    leave: ({ name: e, directives: t, values: r }) => F(["extend enum", e, F(t, " "), Dt(r)], " ")
  },
  InputObjectTypeExtension: {
    leave: ({ name: e, directives: t, fields: r }) => F(["extend input", e, F(t, " "), Dt(r)], " ")
  }
};
function F(e, t = "") {
  var r;
  return (r = e?.filter((n) => n).join(t)) !== null && r !== void 0 ? r : "";
}
function Dt(e) {
  return oe(`{
`, da(F(e, `
`)), `
}`);
}
function oe(e, t, r = "") {
  return t != null && t !== "" ? e + t + r : "";
}
function da(e) {
  return oe("  ", e.replace(/\n/g, `
  `));
}
function _f(e) {
  var t;
  return (t = e?.some((r) => r.includes(`
`))) !== null && t !== void 0 ? t : !1;
}
function ff(e) {
  return e.kind === We.FIELD || e.kind === We.FRAGMENT_SPREAD || e.kind === We.INLINE_FRAGMENT;
}
function Go(e, t) {
  var r = e.directives;
  return !r || !r.length ? !0 : ag(r).every(function(n) {
    var i = n.directive, o = n.ifArgument, a = !1;
    return o.value.kind === "Variable" ? (a = t && t[o.value.name.value], $(a !== void 0, 64, i.name.value)) : a = o.value.value, i.name.value === "skip" ? !a : a;
  });
}
function Ji(e, t, r) {
  var n = new Set(e), i = n.size;
  return hr(t, {
    Directive: function(o) {
      if (n.delete(o.name.value) && (!r || !n.size))
        return Ol;
    }
  }), r ? !n.size : n.size < i;
}
function ig(e) {
  return e && Ji(["client", "export"], e, !0);
}
function og(e) {
  var t = e.name.value;
  return t === "skip" || t === "include";
}
function ag(e) {
  var t = [];
  return e && e.length && e.forEach(function(r) {
    if (og(r)) {
      var n = r.arguments, i = r.name.value;
      $(n && n.length === 1, 65, i);
      var o = n[0];
      $(o.name && o.name.value === "if", 66, i);
      var a = o.value;
      $(a && (a.kind === "Variable" || a.kind === "BooleanValue"), 67, i), t.push({ directive: r, ifArgument: o });
    }
  }), t;
}
const sg = () => /* @__PURE__ */ Object.create(null), { forEach: ug, slice: cg } = Array.prototype, { hasOwnProperty: lg } = Object.prototype;
class Zr {
  constructor(t = !0, r = sg) {
    this.weakness = t, this.makeData = r;
  }
  lookup(...t) {
    return this.lookupArray(t);
  }
  lookupArray(t) {
    let r = this;
    return ug.call(t, (n) => r = r.getChildTrie(n)), lg.call(r, "data") ? r.data : r.data = this.makeData(cg.call(t));
  }
  peek(...t) {
    return this.peekArray(t);
  }
  peekArray(t) {
    let r = this;
    for (let n = 0, i = t.length; r && n < i; ++n) {
      const o = this.weakness && df(t[n]) ? r.weak : r.strong;
      r = o && o.get(t[n]);
    }
    return r && r.data;
  }
  getChildTrie(t) {
    const r = this.weakness && df(t) ? this.weak || (this.weak = /* @__PURE__ */ new WeakMap()) : this.strong || (this.strong = /* @__PURE__ */ new Map());
    let n = r.get(t);
    return n || r.set(t, n = new Zr(this.weakness, this.makeData)), n;
  }
}
function df(e) {
  switch (typeof e) {
    case "object":
      if (e === null)
        break;
    case "function":
      return !0;
  }
  return !1;
}
var Er = typeof WeakMap == "function" && Gt(function() {
  return navigator.product;
}) !== "ReactNative", Xp = typeof WeakSet == "function", Yp = typeof Symbol == "function" && typeof Symbol.for == "function", vs = Yp && Symbol.asyncIterator;
Gt(function() {
  return window.document.createElement;
});
Gt(function() {
  return navigator.userAgent.indexOf("jsdom") >= 0;
});
function Ce(e) {
  return e !== null && typeof e == "object";
}
function _g(e, t) {
  var r = t, n = [];
  e.definitions.forEach(function(o) {
    if (o.kind === "OperationDefinition")
      throw nt(
        68,
        o.operation,
        o.name ? " named '".concat(o.name.value, "'") : ""
      );
    o.kind === "FragmentDefinition" && n.push(o);
  }), typeof r > "u" && ($(n.length === 1, 69, n.length), r = n[0].name.value);
  var i = v(v({}, e), { definitions: kr([
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
              value: r
            }
          }
        ]
      }
    }
  ], e.definitions, !0) });
  return i;
}
function gs(e) {
  e === void 0 && (e = []);
  var t = {};
  return e.forEach(function(r) {
    t[r.name.value] = r;
  }), t;
}
function Is(e, t) {
  switch (e.kind) {
    case "InlineFragment":
      return e;
    case "FragmentSpread": {
      var r = e.name.value;
      if (typeof t == "function")
        return t(r);
      var n = t && t[r];
      return $(n, 70, r), n || null;
    }
    default:
      return null;
  }
}
function wn(e) {
  return { __ref: String(e) };
}
function ge(e) {
  return !!(e && typeof e == "object" && typeof e.__ref == "string");
}
function fg(e) {
  return Ce(e) && e.kind === "Document" && Array.isArray(e.definitions);
}
function dg(e) {
  return e.kind === "StringValue";
}
function hg(e) {
  return e.kind === "BooleanValue";
}
function pg(e) {
  return e.kind === "IntValue";
}
function mg(e) {
  return e.kind === "FloatValue";
}
function Tg(e) {
  return e.kind === "Variable";
}
function Eg(e) {
  return e.kind === "ObjectValue";
}
function Og(e) {
  return e.kind === "ListValue";
}
function bg(e) {
  return e.kind === "EnumValue";
}
function Rg(e) {
  return e.kind === "NullValue";
}
function zn(e, t, r, n) {
  if (pg(r) || mg(r))
    e[t.value] = Number(r.value);
  else if (hg(r) || dg(r))
    e[t.value] = r.value;
  else if (Eg(r)) {
    var i = {};
    r.fields.map(function(a) {
      return zn(i, a.name, a.value, n);
    }), e[t.value] = i;
  } else if (Tg(r)) {
    var o = (n || {})[r.name.value];
    e[t.value] = o;
  } else if (Og(r))
    e[t.value] = r.values.map(function(a) {
      var s = {};
      return zn(s, t, a, n), s[t.value];
    });
  else if (bg(r))
    e[t.value] = r.value;
  else if (Rg(r))
    e[t.value] = null;
  else
    throw nt(79, t.value, r.kind);
}
function vg(e, t) {
  var r = null;
  e.directives && (r = {}, e.directives.forEach(function(i) {
    r[i.name.value] = {}, i.arguments && i.arguments.forEach(function(o) {
      var a = o.name, s = o.value;
      return zn(r[i.name.value], a, s, t);
    });
  }));
  var n = null;
  return e.arguments && e.arguments.length && (n = {}, e.arguments.forEach(function(i) {
    var o = i.name, a = i.value;
    return zn(n, o, a, t);
  })), bl(e.name.value, n, r);
}
var gg = [
  "connection",
  "include",
  "skip",
  "client",
  "rest",
  "export",
  "nonreactive"
], bl = Object.assign(function(e, t, r) {
  if (t && r && r.connection && r.connection.key)
    if (r.connection.filter && r.connection.filter.length > 0) {
      var n = r.connection.filter ? r.connection.filter : [];
      n.sort();
      var i = {};
      return n.forEach(function(s) {
        i[s] = t[s];
      }), "".concat(r.connection.key, "(").concat(Ti(i), ")");
    } else
      return r.connection.key;
  var o = e;
  if (t) {
    var a = Ti(t);
    o += "(".concat(a, ")");
  }
  return r && Object.keys(r).forEach(function(s) {
    gg.indexOf(s) === -1 && (r[s] && Object.keys(r[s]).length ? o += "@".concat(s, "(").concat(Ti(r[s]), ")") : o += "@".concat(s));
  }), o;
}, {
  setStringify: function(e) {
    var t = Ti;
    return Ti = e, t;
  }
}), Ti = function(t) {
  return JSON.stringify(t, Ig);
};
function Ig(e, t) {
  return Ce(t) && !Array.isArray(t) && (t = Object.keys(t).sort().reduce(function(r, n) {
    return r[n] = t[n], r;
  }, {})), t;
}
function Ns(e, t) {
  if (e.arguments && e.arguments.length) {
    var r = {};
    return e.arguments.forEach(function(n) {
      var i = n.name, o = n.value;
      return zn(r, i, o, t);
    }), r;
  }
  return null;
}
function Vr(e) {
  return e.alias ? e.alias.value : e.name.value;
}
function ic(e, t, r) {
  for (var n, i = 0, o = t.selections; i < o.length; i++) {
    var a = o[i];
    if (Wr(a)) {
      if (a.name.value === "__typename")
        return e[Vr(a)];
    } else
      n ? n.push(a) : n = [a];
  }
  if (typeof e.__typename == "string")
    return e.__typename;
  if (n)
    for (var s = 0, u = n; s < u.length; s++) {
      var a = u[s], c = ic(e, Is(a, r).selectionSet, r);
      if (typeof c == "string")
        return c;
    }
}
function Wr(e) {
  return e.kind === "Field";
}
function Ng(e) {
  return e.kind === "InlineFragment";
}
function Co(e) {
  $(e && e.kind === "Document", 71);
  var t = e.definitions.filter(function(r) {
    return r.kind !== "FragmentDefinition";
  }).map(function(r) {
    if (r.kind !== "OperationDefinition")
      throw nt(72, r.kind);
    return r;
  });
  return $(t.length <= 1, 73, t.length), e;
}
function Uo(e) {
  return Co(e), e.definitions.filter(function(t) {
    return t.kind === "OperationDefinition";
  })[0];
}
function oc(e) {
  return e.definitions.filter(function(t) {
    return t.kind === "OperationDefinition" && !!t.name;
  }).map(function(t) {
    return t.name.value;
  })[0] || null;
}
function As(e) {
  return e.definitions.filter(function(t) {
    return t.kind === "FragmentDefinition";
  });
}
function Kp(e) {
  var t = Uo(e);
  return $(t && t.operation === "query", 74), t;
}
function Ag(e) {
  $(e.kind === "Document", 75), $(e.definitions.length <= 1, 76);
  var t = e.definitions[0];
  return $(t.kind === "FragmentDefinition", 77), t;
}
function wo(e) {
  Co(e);
  for (var t, r = 0, n = e.definitions; r < n.length; r++) {
    var i = n[r];
    if (i.kind === "OperationDefinition") {
      var o = i.operation;
      if (o === "query" || o === "mutation" || o === "subscription")
        return i;
    }
    i.kind === "FragmentDefinition" && !t && (t = i);
  }
  if (t)
    return t;
  throw nt(78);
}
function Rl(e) {
  var t = /* @__PURE__ */ Object.create(null), r = e && e.variableDefinitions;
  return r && r.length && r.forEach(function(n) {
    n.defaultValue && zn(t, n.variable.name, n.defaultValue);
  }), t;
}
function yg(e) {
  return e;
}
var $p = function() {
  function e(t, r) {
    r === void 0 && (r = /* @__PURE__ */ Object.create(null)), this.resultCache = Xp ? /* @__PURE__ */ new WeakSet() : /* @__PURE__ */ new Set(), this.transform = t, r.getCacheKey && (this.getCacheKey = r.getCacheKey), r.cache !== !1 && (this.stableCacheKeys = new Zr(Er, function(n) {
      return { key: n };
    }));
  }
  return e.prototype.getCacheKey = function(t) {
    return [t];
  }, e.identity = function() {
    return new e(yg, { cache: !1 });
  }, e.split = function(t, r, n) {
    return n === void 0 && (n = e.identity()), new e(function(i) {
      var o = t(i) ? r : n;
      return o.transformDocument(i);
    }, { cache: !1 });
  }, e.prototype.transformDocument = function(t) {
    if (this.resultCache.has(t))
      return t;
    var r = this.getStableCacheEntry(t);
    if (r && r.value)
      return r.value;
    Co(t);
    var n = this.transform(t);
    return this.resultCache.add(n), r && (r.value = n), n;
  }, e.prototype.concat = function(t) {
    var r = this;
    return new e(function(n) {
      return t.transformDocument(r.transformDocument(n));
    }, { cache: !1 });
  }, e.prototype.getStableCacheEntry = function(t) {
    if (this.stableCacheKeys) {
      var r = this.getCacheKey(t);
      if (r)
        return $(Array.isArray(r), 63), this.stableCacheKeys.lookupArray(r);
    }
  }, e;
}(), pn = Er ? /* @__PURE__ */ new WeakMap() : void 0, zp = function(e) {
  var t;
  return t = pn?.get(e), t || (t = tg(e), pn?.set(e, t)), t;
}, He = Array.isArray;
function $t(e) {
  return Array.isArray(e) && e.length > 0;
}
var hf = {
  kind: We.FIELD,
  name: {
    kind: We.NAME,
    value: "__typename"
  }
};
function qp(e, t) {
  return !e || e.selectionSet.selections.every(function(r) {
    return r.kind === We.FRAGMENT_SPREAD && qp(t[r.name.value], t);
  });
}
function Sg(e) {
  return qp(Uo(e) || Ag(e), gs(As(e))) ? null : e;
}
function Dg(e) {
  var t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  return e.forEach(function(n) {
    n && (n.name ? t.set(n.name, n) : n.test && r.set(n.test, n));
  }), function(n) {
    var i = t.get(n.name.value);
    return !i && r.size && r.forEach(function(o, a) {
      a(n) && (i = o);
    }), i;
  };
}
function pf(e) {
  var t = /* @__PURE__ */ new Map();
  return function(n) {
    n === void 0 && (n = e);
    var i = t.get(n);
    return i || t.set(n, i = {
      variables: /* @__PURE__ */ new Set(),
      fragmentSpreads: /* @__PURE__ */ new Set()
    }), i;
  };
}
function Jp(e, t) {
  Co(t);
  for (var r = pf(""), n = pf(""), i = function(T) {
    for (var O = 0, E = void 0; O < T.length && (E = T[O]); ++O)
      if (!He(E)) {
        if (E.kind === We.OPERATION_DEFINITION)
          return r(E.name && E.name.value);
        if (E.kind === We.FRAGMENT_DEFINITION)
          return n(E.name.value);
      }
    return globalThis.__DEV__ !== !1 && $.error(80), null;
  }, o = 0, a = t.definitions.length - 1; a >= 0; --a)
    t.definitions[a].kind === We.OPERATION_DEFINITION && ++o;
  var s = Dg(e), u = function(T) {
    return $t(T) && T.map(s).some(function(O) {
      return O && O.remove;
    });
  }, c = /* @__PURE__ */ new Map(), _ = !1, l = {
    enter: function(T) {
      if (u(T.directives))
        return _ = !0, null;
    }
  }, f = hr(t, {
    Field: l,
    InlineFragment: l,
    VariableDefinition: {
      enter: function() {
        return !1;
      }
    },
    Variable: {
      enter: function(T, O, E, R, b) {
        var g = i(b);
        g && g.variables.add(T.name.value);
      }
    },
    FragmentSpread: {
      enter: function(T, O, E, R, b) {
        if (u(T.directives))
          return _ = !0, null;
        var g = i(b);
        g && g.fragmentSpreads.add(T.name.value);
      }
    },
    FragmentDefinition: {
      enter: function(T, O, E, R) {
        c.set(JSON.stringify(R), T);
      },
      leave: function(T, O, E, R) {
        var b = c.get(JSON.stringify(R));
        if (T === b)
          return T;
        if (o > 0 && T.selectionSet.selections.every(function(g) {
          return g.kind === We.FIELD && g.name.value === "__typename";
        }))
          return n(T.name.value).removed = !0, _ = !0, null;
      }
    },
    Directive: {
      leave: function(T) {
        if (s(T))
          return _ = !0, null;
      }
    }
  });
  if (!_)
    return t;
  var h = function(T) {
    return T.transitiveVars || (T.transitiveVars = new Set(T.variables), T.removed || T.fragmentSpreads.forEach(function(O) {
      h(n(O)).transitiveVars.forEach(function(E) {
        T.transitiveVars.add(E);
      });
    })), T;
  }, d = /* @__PURE__ */ new Set();
  f.definitions.forEach(function(T) {
    T.kind === We.OPERATION_DEFINITION ? h(r(T.name && T.name.value)).fragmentSpreads.forEach(function(O) {
      d.add(O);
    }) : T.kind === We.FRAGMENT_DEFINITION && o === 0 && !n(T.name.value).removed && d.add(T.name.value);
  }), d.forEach(function(T) {
    h(n(T)).fragmentSpreads.forEach(function(O) {
      d.add(O);
    });
  });
  var p = function(T) {
    return !!(!d.has(T) || n(T).removed);
  }, m = {
    enter: function(T) {
      if (p(T.name.value))
        return null;
    }
  };
  return Sg(hr(f, {
    FragmentSpread: m,
    FragmentDefinition: m,
    OperationDefinition: {
      leave: function(T) {
        if (T.variableDefinitions) {
          var O = h(r(T.name && T.name.value)).transitiveVars;
          if (O.size < T.variableDefinitions.length)
            return v(v({}, T), { variableDefinitions: T.variableDefinitions.filter(function(E) {
              return O.has(E.variable.name.value);
            }) });
        }
      }
    }
  }));
}
var vl = Object.assign(function(e) {
  return hr(e, {
    SelectionSet: {
      enter: function(t, r, n) {
        if (!(n && n.kind === We.OPERATION_DEFINITION)) {
          var i = t.selections;
          if (i) {
            var o = i.some(function(s) {
              return Wr(s) && (s.name.value === "__typename" || s.name.value.lastIndexOf("__", 0) === 0);
            });
            if (!o) {
              var a = n;
              if (!(Wr(a) && a.directives && a.directives.some(function(s) {
                return s.name.value === "export";
              })))
                return v(v({}, t), { selections: kr(kr([], i, !0), [hf], !1) });
            }
          }
        }
      }
    }
  });
}, {
  added: function(e) {
    return e === hf;
  }
});
function Gg(e) {
  var t = wo(e), r = t.operation;
  if (r === "query")
    return e;
  var n = hr(e, {
    OperationDefinition: {
      enter: function(i) {
        return v(v({}, i), { operation: "query" });
      }
    }
  });
  return n;
}
function Qp(e) {
  Co(e);
  var t = Jp([
    {
      test: function(r) {
        return r.name.value === "client";
      },
      remove: !0
    }
  ], e);
  return t;
}
var Cg = Object.prototype.hasOwnProperty;
function mf() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  return gl(e);
}
function gl(e) {
  var t = e[0] || {}, r = e.length;
  if (r > 1)
    for (var n = new Xr(), i = 1; i < r; ++i)
      t = n.merge(t, e[i]);
  return t;
}
var Ug = function(e, t, r) {
  return this.merge(e[r], t[r]);
}, Xr = function() {
  function e(t) {
    t === void 0 && (t = Ug), this.reconciler = t, this.isObject = Ce, this.pastCopies = /* @__PURE__ */ new Set();
  }
  return e.prototype.merge = function(t, r) {
    for (var n = this, i = [], o = 2; o < arguments.length; o++)
      i[o - 2] = arguments[o];
    return Ce(r) && Ce(t) ? (Object.keys(r).forEach(function(a) {
      if (Cg.call(t, a)) {
        var s = t[a];
        if (r[a] !== s) {
          var u = n.reconciler.apply(n, kr([t, r, a], i, !1));
          u !== s && (t = n.shallowCopyForMerge(t), t[a] = u);
        }
      } else
        t = n.shallowCopyForMerge(t), t[a] = r[a];
    }), t) : r;
  }, e.prototype.shallowCopyForMerge = function(t) {
    return Ce(t) && (this.pastCopies.has(t) || (Array.isArray(t) ? t = t.slice(0) : t = v({ __proto__: Object.getPrototypeOf(t) }, t), this.pastCopies.add(t))), t;
  }, e;
}();
function wg(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r)
    return (r = r.call(e)).next.bind(r);
  if (Array.isArray(e) || (r = Pg(e)) || t && e && typeof e.length == "number") {
    r && (e = r);
    var n = 0;
    return function() {
      return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Pg(e, t) {
  if (e) {
    if (typeof e == "string")
      return Tf(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Tf(e, t);
  }
}
function Tf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function Ef(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function Il(e, t, r) {
  return t && Ef(e.prototype, t), r && Ef(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
var Nl = function() {
  return typeof Symbol == "function";
}, Al = function(e) {
  return Nl() && !!Symbol[e];
}, yl = function(e) {
  return Al(e) ? Symbol[e] : "@@" + e;
};
Nl() && !Al("observable") && (Symbol.observable = Symbol("observable"));
var Hg = yl("iterator"), ac = yl("observable"), Zp = yl("species");
function Ya(e, t) {
  var r = e[t];
  if (r != null) {
    if (typeof r != "function")
      throw new TypeError(r + " is not a function");
    return r;
  }
}
function Ei(e) {
  var t = e.constructor;
  return t !== void 0 && (t = t[Zp], t === null && (t = void 0)), t !== void 0 ? t : ye;
}
function Mg(e) {
  return e instanceof ye;
}
function qn(e) {
  qn.log ? qn.log(e) : setTimeout(function() {
    throw e;
  });
}
function ha(e) {
  Promise.resolve().then(function() {
    try {
      e();
    } catch (t) {
      qn(t);
    }
  });
}
function em(e) {
  var t = e._cleanup;
  if (t !== void 0 && (e._cleanup = void 0, !!t))
    try {
      if (typeof t == "function")
        t();
      else {
        var r = Ya(t, "unsubscribe");
        r && r.call(t);
      }
    } catch (n) {
      qn(n);
    }
}
function sc(e) {
  e._observer = void 0, e._queue = void 0, e._state = "closed";
}
function kg(e) {
  var t = e._queue;
  if (t) {
    e._queue = void 0, e._state = "ready";
    for (var r = 0; r < t.length && (tm(e, t[r].type, t[r].value), e._state !== "closed"); ++r)
      ;
  }
}
function tm(e, t, r) {
  e._state = "running";
  var n = e._observer;
  try {
    var i = Ya(n, t);
    switch (t) {
      case "next":
        i && i.call(n, r);
        break;
      case "error":
        if (sc(e), i)
          i.call(n, r);
        else
          throw r;
        break;
      case "complete":
        sc(e), i && i.call(n);
        break;
    }
  } catch (o) {
    qn(o);
  }
  e._state === "closed" ? em(e) : e._state === "running" && (e._state = "ready");
}
function Tu(e, t, r) {
  if (e._state !== "closed") {
    if (e._state === "buffering") {
      e._queue.push({
        type: t,
        value: r
      });
      return;
    }
    if (e._state !== "ready") {
      e._state = "buffering", e._queue = [{
        type: t,
        value: r
      }], ha(function() {
        return kg(e);
      });
      return;
    }
    tm(e, t, r);
  }
}
var Lg = /* @__PURE__ */ function() {
  function e(r, n) {
    this._cleanup = void 0, this._observer = r, this._queue = void 0, this._state = "initializing";
    var i = new Bg(this);
    try {
      this._cleanup = n.call(void 0, i);
    } catch (o) {
      i.error(o);
    }
    this._state === "initializing" && (this._state = "ready");
  }
  var t = e.prototype;
  return t.unsubscribe = function() {
    this._state !== "closed" && (sc(this), em(this));
  }, Il(e, [{
    key: "closed",
    get: function() {
      return this._state === "closed";
    }
  }]), e;
}(), Bg = /* @__PURE__ */ function() {
  function e(r) {
    this._subscription = r;
  }
  var t = e.prototype;
  return t.next = function(n) {
    Tu(this._subscription, "next", n);
  }, t.error = function(n) {
    Tu(this._subscription, "error", n);
  }, t.complete = function() {
    Tu(this._subscription, "complete");
  }, Il(e, [{
    key: "closed",
    get: function() {
      return this._subscription._state === "closed";
    }
  }]), e;
}(), ye = /* @__PURE__ */ function() {
  function e(r) {
    if (!(this instanceof e))
      throw new TypeError("Observable cannot be called as a function");
    if (typeof r != "function")
      throw new TypeError("Observable initializer must be a function");
    this._subscriber = r;
  }
  var t = e.prototype;
  return t.subscribe = function(n) {
    return (typeof n != "object" || n === null) && (n = {
      next: n,
      error: arguments[1],
      complete: arguments[2]
    }), new Lg(n, this._subscriber);
  }, t.forEach = function(n) {
    var i = this;
    return new Promise(function(o, a) {
      if (typeof n != "function") {
        a(new TypeError(n + " is not a function"));
        return;
      }
      function s() {
        u.unsubscribe(), o();
      }
      var u = i.subscribe({
        next: function(c) {
          try {
            n(c, s);
          } catch (_) {
            a(_), u.unsubscribe();
          }
        },
        error: a,
        complete: o
      });
    });
  }, t.map = function(n) {
    var i = this;
    if (typeof n != "function")
      throw new TypeError(n + " is not a function");
    var o = Ei(this);
    return new o(function(a) {
      return i.subscribe({
        next: function(s) {
          try {
            s = n(s);
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
  }, t.filter = function(n) {
    var i = this;
    if (typeof n != "function")
      throw new TypeError(n + " is not a function");
    var o = Ei(this);
    return new o(function(a) {
      return i.subscribe({
        next: function(s) {
          try {
            if (!n(s))
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
  }, t.reduce = function(n) {
    var i = this;
    if (typeof n != "function")
      throw new TypeError(n + " is not a function");
    var o = Ei(this), a = arguments.length > 1, s = !1, u = arguments[1], c = u;
    return new o(function(_) {
      return i.subscribe({
        next: function(l) {
          var f = !s;
          if (s = !0, !f || a)
            try {
              c = n(c, l);
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
    for (var n = this, i = arguments.length, o = new Array(i), a = 0; a < i; a++)
      o[a] = arguments[a];
    var s = Ei(this);
    return new s(function(u) {
      var c, _ = 0;
      function l(f) {
        c = f.subscribe({
          next: function(h) {
            u.next(h);
          },
          error: function(h) {
            u.error(h);
          },
          complete: function() {
            _ === o.length ? (c = void 0, u.complete()) : l(s.from(o[_++]));
          }
        });
      }
      return l(n), function() {
        c && (c.unsubscribe(), c = void 0);
      };
    });
  }, t.flatMap = function(n) {
    var i = this;
    if (typeof n != "function")
      throw new TypeError(n + " is not a function");
    var o = Ei(this);
    return new o(function(a) {
      var s = [], u = i.subscribe({
        next: function(_) {
          if (n)
            try {
              _ = n(_);
            } catch (f) {
              return a.error(f);
            }
          var l = o.from(_).subscribe({
            next: function(f) {
              a.next(f);
            },
            error: function(f) {
              a.error(f);
            },
            complete: function() {
              var f = s.indexOf(l);
              f >= 0 && s.splice(f, 1), c();
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
  }, t[ac] = function() {
    return this;
  }, e.from = function(n) {
    var i = typeof this == "function" ? this : e;
    if (n == null)
      throw new TypeError(n + " is not an object");
    var o = Ya(n, ac);
    if (o) {
      var a = o.call(n);
      if (Object(a) !== a)
        throw new TypeError(a + " is not an object");
      return Mg(a) && a.constructor === i ? a : new i(function(s) {
        return a.subscribe(s);
      });
    }
    if (Al("iterator") && (o = Ya(n, Hg), o))
      return new i(function(s) {
        ha(function() {
          if (!s.closed) {
            for (var u = wg(o.call(n)), c; !(c = u()).done; ) {
              var _ = c.value;
              if (s.next(_), s.closed)
                return;
            }
            s.complete();
          }
        });
      });
    if (Array.isArray(n))
      return new i(function(s) {
        ha(function() {
          if (!s.closed) {
            for (var u = 0; u < n.length; ++u)
              if (s.next(n[u]), s.closed)
                return;
            s.complete();
          }
        });
      });
    throw new TypeError(n + " is not observable");
  }, e.of = function() {
    for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++)
      i[o] = arguments[o];
    var a = typeof this == "function" ? this : e;
    return new a(function(s) {
      ha(function() {
        if (!s.closed) {
          for (var u = 0; u < i.length; ++u)
            if (s.next(i[u]), s.closed)
              return;
          s.complete();
        }
      });
    });
  }, Il(e, null, [{
    key: Zp,
    get: function() {
      return this;
    }
  }]), e;
}();
Nl() && Object.defineProperty(ye, Symbol("extensions"), {
  value: {
    symbol: ac,
    hostReportError: qn
  },
  configurable: !0
});
function xg(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Fg(e) {
  var t, r = e.Symbol;
  if (typeof r == "function")
    if (r.observable)
      t = r.observable;
    else {
      typeof r.for == "function" ? t = r.for("https://github.com/benlesh/symbol-observable") : t = r("https://github.com/benlesh/symbol-observable");
      try {
        r.observable = t;
      } catch {
      }
    }
  else
    t = "@@observable";
  return t;
}
var Rn;
typeof self < "u" ? Rn = self : typeof window < "u" ? Rn = window : typeof global < "u" ? Rn = global : typeof module < "u" ? Rn = module : Rn = Function("return this")();
Fg(Rn);
var Of = ye.prototype, bf = "@@observable";
Of[bf] || (Of[bf] = function() {
  return this;
});
var jg = Object.prototype.toString;
function rm(e) {
  return uc(e);
}
function uc(e, t) {
  switch (jg.call(e)) {
    case "[object Array]": {
      if (t = t || /* @__PURE__ */ new Map(), t.has(e))
        return t.get(e);
      var r = e.slice(0);
      return t.set(e, r), r.forEach(function(i, o) {
        r[o] = uc(i, t);
      }), r;
    }
    case "[object Object]": {
      if (t = t || /* @__PURE__ */ new Map(), t.has(e))
        return t.get(e);
      var n = Object.create(Object.getPrototypeOf(e));
      return t.set(e, n), Object.keys(e).forEach(function(i) {
        n[i] = uc(e[i], t);
      }), n;
    }
    default:
      return e;
  }
}
function Vg(e) {
  var t = /* @__PURE__ */ new Set([e]);
  return t.forEach(function(r) {
    Ce(r) && Wg(r) === r && Object.getOwnPropertyNames(r).forEach(function(n) {
      Ce(r[n]) && t.add(r[n]);
    });
  }), e;
}
function Wg(e) {
  if (globalThis.__DEV__ !== !1 && !Object.isFrozen(e))
    try {
      Object.freeze(e);
    } catch (t) {
      if (t instanceof TypeError)
        return null;
      throw t;
    }
  return e;
}
function cc(e) {
  return globalThis.__DEV__ !== !1 && Vg(e), e;
}
function Hi(e, t, r) {
  var n = [];
  e.forEach(function(i) {
    return i[t] && n.push(i);
  }), n.forEach(function(i) {
    return i[t](r);
  });
}
function Eu(e, t, r) {
  return new ye(function(n) {
    var i = n.next, o = n.error, a = n.complete, s = 0, u = !1, c = {
      then: function(h) {
        return new Promise(function(d) {
          return d(h());
        });
      }
    };
    function _(h, d) {
      return h ? function(p) {
        ++s;
        var m = function() {
          return h(p);
        };
        c = c.then(m, m).then(function(T) {
          --s, i && i.call(n, T), u && l.complete();
        }, function(T) {
          throw --s, T;
        }).catch(function(T) {
          o && o.call(n, T);
        });
      } : function(p) {
        return d && d.call(n, p);
      };
    }
    var l = {
      next: _(t, i),
      error: _(r, o),
      complete: function() {
        u = !0, s || a && a.call(n);
      }
    }, f = e.subscribe(l);
    return function() {
      return f.unsubscribe();
    };
  });
}
function nm(e) {
  function t(r) {
    Object.defineProperty(e, r, { value: ye });
  }
  return Yp && Symbol.species && t(Symbol.species), t("@@species"), e;
}
function Rf(e) {
  return e && typeof e.then == "function";
}
var vn = function(e) {
  Jt(t, e);
  function t(r) {
    var n = e.call(this, function(i) {
      return n.addObserver(i), function() {
        return n.removeObserver(i);
      };
    }) || this;
    return n.observers = /* @__PURE__ */ new Set(), n.promise = new Promise(function(i, o) {
      n.resolve = i, n.reject = o;
    }), n.handlers = {
      next: function(i) {
        n.sub !== null && (n.latest = ["next", i], n.notify("next", i), Hi(n.observers, "next", i));
      },
      error: function(i) {
        var o = n.sub;
        o !== null && (o && setTimeout(function() {
          return o.unsubscribe();
        }), n.sub = null, n.latest = ["error", i], n.reject(i), n.notify("error", i), Hi(n.observers, "error", i));
      },
      complete: function() {
        var i = n, o = i.sub, a = i.sources, s = a === void 0 ? [] : a;
        if (o !== null) {
          var u = s.shift();
          u ? Rf(u) ? u.then(function(c) {
            return n.sub = c.subscribe(n.handlers);
          }) : n.sub = u.subscribe(n.handlers) : (o && setTimeout(function() {
            return o.unsubscribe();
          }), n.sub = null, n.latest && n.latest[0] === "next" ? n.resolve(n.latest[1]) : n.resolve(), n.notify("complete"), Hi(n.observers, "complete"));
        }
      }
    }, n.nextResultListeners = /* @__PURE__ */ new Set(), n.cancel = function(i) {
      n.reject(i), n.sources = [], n.handlers.complete();
    }, n.promise.catch(function(i) {
    }), typeof r == "function" && (r = [new ye(r)]), Rf(r) ? r.then(function(i) {
      return n.start(i);
    }, n.handlers.error) : n.start(r), n;
  }
  return t.prototype.start = function(r) {
    this.sub === void 0 && (this.sources = Array.from(r), this.handlers.complete());
  }, t.prototype.deliverLastMessage = function(r) {
    if (this.latest) {
      var n = this.latest[0], i = r[n];
      i && i.call(r, this.latest[1]), this.sub === null && n === "next" && r.complete && r.complete();
    }
  }, t.prototype.addObserver = function(r) {
    this.observers.has(r) || (this.deliverLastMessage(r), this.observers.add(r));
  }, t.prototype.removeObserver = function(r) {
    this.observers.delete(r) && this.observers.size < 1 && this.handlers.complete();
  }, t.prototype.notify = function(r, n) {
    var i = this.nextResultListeners;
    i.size && (this.nextResultListeners = /* @__PURE__ */ new Set(), i.forEach(function(o) {
      return o(r, n);
    }));
  }, t.prototype.beforeNext = function(r) {
    var n = !1;
    this.nextResultListeners.add(function(i, o) {
      n || (n = !0, r(i, o));
    });
  }, t;
}(ye);
nm(vn);
function Pn(e) {
  return "incremental" in e;
}
function Xg(e) {
  return "hasNext" in e && "data" in e;
}
function Yg(e) {
  return Pn(e) || Xg(e);
}
function Kg(e) {
  return Ce(e) && "payload" in e;
}
function im(e, t) {
  var r = e, n = new Xr();
  return Pn(t) && $t(t.incremental) && t.incremental.forEach(function(i) {
    for (var o = i.data, a = i.path, s = a.length - 1; s >= 0; --s) {
      var u = a[s], c = !isNaN(+u), _ = c ? [] : {};
      _[u] = o, o = _;
    }
    r = n.merge(r, o);
  }), r;
}
function pa(e) {
  var t = lc(e);
  return $t(t);
}
function lc(e) {
  var t = $t(e.errors) ? e.errors.slice(0) : [];
  return Pn(e) && $t(e.incremental) && e.incremental.forEach(function(r) {
    r.errors && t.push.apply(t, r.errors);
  }), t;
}
function Jn() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  var r = /* @__PURE__ */ Object.create(null);
  return e.forEach(function(n) {
    n && Object.keys(n).forEach(function(i) {
      var o = n[i];
      o !== void 0 && (r[i] = o);
    });
  }), r;
}
function Ou(e, t) {
  return Jn(e, t, t.variables && {
    variables: Jn(v(v({}, e && e.variables), t.variables))
  });
}
function $g(e) {
  return !!e.body;
}
function zg(e) {
  return !!e.getReader;
}
function qg(e) {
  return !!(vs && e[Symbol.asyncIterator]);
}
function Jg(e) {
  return !!e.stream;
}
function Qg(e) {
  return !!e.arrayBuffer;
}
function Zg(e) {
  return !!e.pipe;
}
function bu(e) {
  return new ye(function(t) {
    t.error(e);
  });
}
var _c = function(e, t, r) {
  var n = new Error(r);
  throw n.name = "ServerError", n.response = e, n.statusCode = e.status, n.result = t, n;
};
function eI(e) {
  for (var t = [
    "query",
    "operationName",
    "variables",
    "extensions",
    "context"
  ], r = 0, n = Object.keys(e); r < n.length; r++) {
    var i = n[r];
    if (t.indexOf(i) < 0)
      throw nt(41, i);
  }
  return e;
}
function tI(e, t) {
  var r = v({}, e), n = function(o) {
    typeof o == "function" ? r = v(v({}, r), o(r)) : r = v(v({}, r), o);
  }, i = function() {
    return v({}, r);
  };
  return Object.defineProperty(t, "setContext", {
    enumerable: !1,
    value: n
  }), Object.defineProperty(t, "getContext", {
    enumerable: !1,
    value: i
  }), t;
}
function rI(e) {
  var t = {
    variables: e.variables || {},
    extensions: e.extensions || {},
    operationName: e.operationName,
    query: e.query
  };
  return t.operationName || (t.operationName = typeof t.query != "string" ? oc(t.query) || void 0 : ""), t;
}
function nI(e, t) {
  var r = v({}, e), n = new Set(Object.keys(e));
  return hr(t, {
    Variable: function(i, o, a) {
      a && a.kind !== "VariableDefinition" && n.delete(i.name.value);
    }
  }), n.forEach(function(i) {
    delete r[i];
  }), r;
}
function vf(e, t) {
  return t ? t(e) : ye.of();
}
function Oi(e) {
  return typeof e == "function" ? new si(e) : e;
}
function ea(e) {
  return e.request.length <= 1;
}
var si = function() {
  function e(t) {
    t && (this.request = t);
  }
  return e.empty = function() {
    return new e(function() {
      return ye.of();
    });
  }, e.from = function(t) {
    return t.length === 0 ? e.empty() : t.map(Oi).reduce(function(r, n) {
      return r.concat(n);
    });
  }, e.split = function(t, r, n) {
    var i = Oi(r), o = Oi(n || new e(vf));
    return ea(i) && ea(o) ? new e(function(a) {
      return t(a) ? i.request(a) || ye.of() : o.request(a) || ye.of();
    }) : new e(function(a, s) {
      return t(a) ? i.request(a, s) || ye.of() : o.request(a, s) || ye.of();
    });
  }, e.execute = function(t, r) {
    return t.request(tI(r.context, rI(eI(r)))) || ye.of();
  }, e.concat = function(t, r) {
    var n = Oi(t);
    if (ea(n))
      return globalThis.__DEV__ !== !1 && $.warn(33, n), n;
    var i = Oi(r);
    return ea(i) ? new e(function(o) {
      return n.request(o, function(a) {
        return i.request(a) || ye.of();
      }) || ye.of();
    }) : new e(function(o, a) {
      return n.request(o, function(s) {
        return i.request(s, a) || ye.of();
      }) || ye.of();
    });
  }, e.prototype.split = function(t, r, n) {
    return this.concat(e.split(t, r, n || new e(vf)));
  }, e.prototype.concat = function(t) {
    return e.concat(this, t);
  }, e.prototype.request = function(t, r) {
    throw nt(34);
  }, e.prototype.onError = function(t, r) {
    if (r && r.error)
      return r.error(t), !1;
    throw t;
  }, e.prototype.setOnError = function(t) {
    return this.onError = t, this;
  }, e;
}(), fc = si.execute;
function iI(e) {
  var t, r = e[Symbol.asyncIterator]();
  return t = {
    next: function() {
      return r.next();
    }
  }, t[Symbol.asyncIterator] = function() {
    return this;
  }, t;
}
function oI(e) {
  var t = null, r = null, n = !1, i = [], o = [];
  function a(l) {
    if (!r) {
      if (o.length) {
        var f = o.shift();
        if (Array.isArray(f) && f[0])
          return f[0]({ value: l, done: !1 });
      }
      i.push(l);
    }
  }
  function s(l) {
    r = l;
    var f = o.slice();
    f.forEach(function(h) {
      h[1](l);
    }), !t || t();
  }
  function u() {
    n = !0;
    var l = o.slice();
    l.forEach(function(f) {
      f[0]({ value: void 0, done: !0 });
    }), !t || t();
  }
  t = function() {
    t = null, e.removeListener("data", a), e.removeListener("error", s), e.removeListener("end", u), e.removeListener("finish", u), e.removeListener("close", u);
  }, e.on("data", a), e.on("error", s), e.on("end", u), e.on("finish", u), e.on("close", u);
  function c() {
    return new Promise(function(l, f) {
      if (r)
        return f(r);
      if (i.length)
        return l({ value: i.shift(), done: !1 });
      if (n)
        return l({ value: void 0, done: !0 });
      o.push([l, f]);
    });
  }
  var _ = {
    next: function() {
      return c();
    }
  };
  return vs && (_[Symbol.asyncIterator] = function() {
    return this;
  }), _;
}
function aI(e) {
  var t = !1, r = {
    next: function() {
      return t ? Promise.resolve({
        value: void 0,
        done: !0
      }) : (t = !0, new Promise(function(n, i) {
        e.then(function(o) {
          n({ value: o, done: !1 });
        }).catch(i);
      }));
    }
  };
  return vs && (r[Symbol.asyncIterator] = function() {
    return this;
  }), r;
}
function gf(e) {
  var t = {
    next: function() {
      return e.read();
    }
  };
  return vs && (t[Symbol.asyncIterator] = function() {
    return this;
  }), t;
}
function sI(e) {
  var t = e;
  if ($g(e) && (t = e.body), qg(t))
    return iI(t);
  if (zg(t))
    return gf(t.getReader());
  if (Jg(t))
    return gf(t.stream().getReader());
  if (Qg(t))
    return aI(t.arrayBuffer());
  if (Zg(t))
    return oI(t);
  throw new Error("Unknown body type for responseIterator. Please pass a streamable response.");
}
var Sl = Symbol();
function uI(e) {
  return e.extensions ? Array.isArray(e.extensions[Sl]) : !1;
}
function cI(e) {
  return e.hasOwnProperty("graphQLErrors");
}
var lI = function(e) {
  var t = kr(kr(kr([], e.graphQLErrors, !0), e.clientErrors, !0), e.protocolErrors, !0);
  return e.networkError && t.push(e.networkError), t.map(function(r) {
    return Ce(r) && r.message || "Error message not found.";
  }).join(`
`);
}, mn = function(e) {
  Jt(t, e);
  function t(r) {
    var n = r.graphQLErrors, i = r.protocolErrors, o = r.clientErrors, a = r.networkError, s = r.errorMessage, u = r.extraInfo, c = e.call(this, s) || this;
    return c.name = "ApolloError", c.graphQLErrors = n || [], c.protocolErrors = i || [], c.clientErrors = o || [], c.networkError = a || null, c.message = s || lI(c), c.extraInfo = u, c.__proto__ = t.prototype, c;
  }
  return t;
}(Error), If = Object.prototype.hasOwnProperty;
function _I(e, t) {
  var r;
  return Ar(this, void 0, void 0, function() {
    var n, i, o, a, s, u, c, _, l, f, h, d, p, m, T, O, E, R, b, g, A, G, D;
    return yr(this, function(H) {
      switch (H.label) {
        case 0:
          if (TextDecoder === void 0)
            throw new Error("TextDecoder must be defined in the environment: please import a polyfill.");
          n = new TextDecoder("utf-8"), i = (r = e.headers) === null || r === void 0 ? void 0 : r.get("content-type"), o = "boundary=", a = i?.includes(o) ? i?.substring(i?.indexOf(o) + o.length).replace(/['"]/g, "").replace(/\;(.*)/gm, "").trim() : "-", s = `\r
--`.concat(a), u = "", c = sI(e), _ = !0, H.label = 1;
        case 1:
          return _ ? [4, c.next()] : [3, 3];
        case 2:
          for (l = H.sent(), f = l.value, h = l.done, d = typeof f == "string" ? f : n.decode(f), p = u.length - s.length + 1, _ = !h, u += d, m = u.indexOf(s, p); m > -1; ) {
            if (T = void 0, G = [
              u.slice(0, m),
              u.slice(m + s.length)
            ], T = G[0], u = G[1], O = T.indexOf(`\r
\r
`), E = fI(T.slice(0, O)), R = E["content-type"], R && R.toLowerCase().indexOf("application/json") === -1)
              throw new Error("Unsupported patch content type: application/json is required.");
            if (b = T.slice(O), b) {
              if (g = om(e, b), Object.keys(g).length > 1 || "data" in g || "incremental" in g || "errors" in g || "payload" in g)
                Kg(g) ? (A = {}, "payload" in g && (A = v({}, g.payload)), "errors" in g && (A = v(v({}, A), { extensions: v(v({}, "extensions" in A ? A.extensions : null), (D = {}, D[Sl] = g.errors, D)) })), t(A)) : t(g);
              else if (Object.keys(g).length === 1 && "hasNext" in g && !g.hasNext)
                return [2];
            }
            m = u.indexOf(s);
          }
          return [3, 1];
        case 3:
          return [2];
      }
    });
  });
}
function fI(e) {
  var t = {};
  return e.split(`
`).forEach(function(r) {
    var n = r.indexOf(":");
    if (n > -1) {
      var i = r.slice(0, n).trim().toLowerCase(), o = r.slice(n + 1).trim();
      t[i] = o;
    }
  }), t;
}
function om(e, t) {
  if (e.status >= 300) {
    var r = function() {
      try {
        return JSON.parse(t);
      } catch {
        return t;
      }
    };
    _c(e, r(), "Response not successful: Received status code ".concat(e.status));
  }
  try {
    return JSON.parse(t);
  } catch (i) {
    var n = i;
    throw n.name = "ServerParseError", n.response = e, n.statusCode = e.status, n.bodyText = t, n;
  }
}
function dI(e, t) {
  e.result && e.result.errors && e.result.data && t.next(e.result), t.error(e);
}
function hI(e) {
  return function(t) {
    return t.text().then(function(r) {
      return om(t, r);
    }).then(function(r) {
      return t.status >= 300 && _c(t, r, "Response not successful: Received status code ".concat(t.status)), !Array.isArray(r) && !If.call(r, "data") && !If.call(r, "errors") && _c(t, r, "Server response was missing for query '".concat(Array.isArray(e) ? e.map(function(n) {
        return n.operationName;
      }) : e.operationName, "'.")), r;
    });
  };
}
var dc = function(e, t) {
  var r;
  try {
    r = JSON.stringify(e);
  } catch (i) {
    var n = nt(37, t, i.message);
    throw n.parseError = i, n;
  }
  return r;
}, pI = {
  includeQuery: !0,
  includeExtensions: !1,
  preserveHeaderCase: !1
}, mI = {
  accept: "*/*",
  "content-type": "application/json"
}, TI = {
  method: "POST"
}, EI = {
  http: pI,
  headers: mI,
  options: TI
}, OI = function(e, t) {
  return t(e);
};
function bI(e, t) {
  for (var r = [], n = 2; n < arguments.length; n++)
    r[n - 2] = arguments[n];
  var i = {}, o = {};
  r.forEach(function(l) {
    i = v(v(v({}, i), l.options), { headers: v(v({}, i.headers), l.headers) }), l.credentials && (i.credentials = l.credentials), o = v(v({}, o), l.http);
  }), i.headers && (i.headers = RI(i.headers, o.preserveHeaderCase));
  var a = e.operationName, s = e.extensions, u = e.variables, c = e.query, _ = { operationName: a, variables: u };
  return o.includeExtensions && (_.extensions = s), o.includeQuery && (_.query = t(c, zp)), {
    options: i,
    body: _
  };
}
function RI(e, t) {
  if (!t) {
    var r = /* @__PURE__ */ Object.create(null);
    return Object.keys(Object(e)).forEach(function(o) {
      r[o.toLowerCase()] = e[o];
    }), r;
  }
  var n = /* @__PURE__ */ Object.create(null);
  Object.keys(Object(e)).forEach(function(o) {
    n[o.toLowerCase()] = { originalName: o, value: e[o] };
  });
  var i = /* @__PURE__ */ Object.create(null);
  return Object.keys(n).forEach(function(o) {
    i[n[o].originalName] = n[o].value;
  }), i;
}
var vI = function(e) {
  if (!e && typeof fetch > "u")
    throw nt(35);
}, gI = function(e, t) {
  var r = e.getContext(), n = r.uri;
  return n || (typeof t == "function" ? t(e) : t || "/graphql");
};
function II(e, t) {
  var r = [], n = function(l, f) {
    r.push("".concat(l, "=").concat(encodeURIComponent(f)));
  };
  if ("query" in t && n("query", t.query), t.operationName && n("operationName", t.operationName), t.variables) {
    var i = void 0;
    try {
      i = dc(t.variables, "Variables map");
    } catch (l) {
      return { parseError: l };
    }
    n("variables", i);
  }
  if (t.extensions) {
    var o = void 0;
    try {
      o = dc(t.extensions, "Extensions map");
    } catch (l) {
      return { parseError: l };
    }
    n("extensions", o);
  }
  var a = "", s = e, u = e.indexOf("#");
  u !== -1 && (a = e.substr(u), s = e.substr(0, u));
  var c = s.indexOf("?") === -1 ? "?" : "&", _ = s + c + r.join("&") + a;
  return { newURI: _ };
}
var Nf = Gt(function() {
  return fetch;
}), am = function(e) {
  e === void 0 && (e = {});
  var t = e.uri, r = t === void 0 ? "/graphql" : t, n = e.fetch, i = e.print, o = i === void 0 ? OI : i, a = e.includeExtensions, s = e.preserveHeaderCase, u = e.useGETForQueries, c = e.includeUnusedVariables, _ = c === void 0 ? !1 : c, l = dr(e, ["uri", "fetch", "print", "includeExtensions", "preserveHeaderCase", "useGETForQueries", "includeUnusedVariables"]);
  globalThis.__DEV__ !== !1 && vI(n || Nf);
  var f = {
    http: { includeExtensions: a, preserveHeaderCase: s },
    options: l.fetchOptions,
    credentials: l.credentials,
    headers: l.headers
  };
  return new si(function(h) {
    var d = gI(h, r), p = h.getContext(), m = {};
    if (p.clientAwareness) {
      var T = p.clientAwareness, O = T.name, E = T.version;
      O && (m["apollographql-client-name"] = O), E && (m["apollographql-client-version"] = E);
    }
    var R = v(v({}, m), p.headers), b = {
      http: p.http,
      options: p.fetchOptions,
      credentials: p.credentials,
      headers: R
    };
    if (Ji(["client"], h.query)) {
      var g = Qp(h.query);
      if (!g)
        return bu(new Error("HttpLink: Trying to send a client-only query to the server. To send to the server, ensure a non-client field is added to the query or set the `transformOptions.removeClientFields` option to `true`."));
      h.query = g;
    }
    var A = bI(h, o, EI, f, b), G = A.options, D = A.body;
    D.variables && !_ && (D.variables = nI(D.variables, h.query));
    var H;
    !G.signal && typeof AbortController < "u" && (H = new AbortController(), G.signal = H.signal);
    var Y = function(se) {
      return se.kind === "OperationDefinition" && se.operation === "mutation";
    }, re = function(se) {
      return se.kind === "OperationDefinition" && se.operation === "subscription";
    }, Ne = re(wo(h.query)), x = Ji(["defer"], h.query);
    if (u && !h.query.definitions.some(Y) && (G.method = "GET"), x || Ne) {
      G.headers = G.headers || {};
      var P = "multipart/mixed;";
      Ne && x && globalThis.__DEV__ !== !1 && $.warn(36), Ne ? P += "boundary=graphql;subscriptionSpec=1.0,application/json" : x && (P += "deferSpec=20220824,application/json"), G.headers.accept = P;
    }
    if (G.method === "GET") {
      var Q = II(d, D), _e = Q.newURI, ie = Q.parseError;
      if (ie)
        return bu(ie);
      d = _e;
    } else
      try {
        G.body = dc(D, "Payload");
      } catch (se) {
        return bu(se);
      }
    return new ye(function(se) {
      var Be = n || Gt(function() {
        return fetch;
      }) || Nf, Ae = se.next.bind(se);
      return Be(d, G).then(function(w) {
        var M;
        h.setContext({ response: w });
        var L = (M = w.headers) === null || M === void 0 ? void 0 : M.get("content-type");
        return L !== null && /^multipart\/mixed/i.test(L) ? _I(w, Ae) : hI(h)(w).then(Ae);
      }).then(function() {
        H = void 0, se.complete();
      }).catch(function(w) {
        H = void 0, dI(w, se);
      }), function() {
        H && H.abort();
      };
    });
  });
}, NI = function(e) {
  Jt(t, e);
  function t(r) {
    r === void 0 && (r = {});
    var n = e.call(this, am(r).request) || this;
    return n.options = r, n;
  }
  return t;
}(si);
const { toString: Af, hasOwnProperty: AI } = Object.prototype, yf = Function.prototype.toString, hc = /* @__PURE__ */ new Map();
function we(e, t) {
  try {
    return pc(e, t);
  } finally {
    hc.clear();
  }
}
function pc(e, t) {
  if (e === t)
    return !0;
  const r = Af.call(e), n = Af.call(t);
  if (r !== n)
    return !1;
  switch (r) {
    case "[object Array]":
      if (e.length !== t.length)
        return !1;
    case "[object Object]": {
      if (Df(e, t))
        return !0;
      const i = Sf(e), o = Sf(t), a = i.length;
      if (a !== o.length)
        return !1;
      for (let s = 0; s < a; ++s)
        if (!AI.call(t, i[s]))
          return !1;
      for (let s = 0; s < a; ++s) {
        const u = i[s];
        if (!pc(e[u], t[u]))
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
      if (Df(e, t))
        return !0;
      const i = e.entries(), o = r === "[object Map]";
      for (; ; ) {
        const a = i.next();
        if (a.done)
          break;
        const [s, u] = a.value;
        if (!t.has(s) || o && !pc(u, t.get(s)))
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
      let i = e.byteLength;
      if (i === t.byteLength)
        for (; i-- && e[i] === t[i]; )
          ;
      return i === -1;
    }
    case "[object AsyncFunction]":
    case "[object GeneratorFunction]":
    case "[object AsyncGeneratorFunction]":
    case "[object Function]": {
      const i = yf.call(e);
      return i !== yf.call(t) ? !1 : !DI(i, SI);
    }
  }
  return !1;
}
function Sf(e) {
  return Object.keys(e).filter(yI, e);
}
function yI(e) {
  return this[e] !== void 0;
}
const SI = "{ [native code] }";
function DI(e, t) {
  const r = e.length - t.length;
  return r >= 0 && e.indexOf(t, r) === r;
}
function Df(e, t) {
  let r = hc.get(e);
  if (r) {
    if (r.has(t))
      return !0;
  } else
    hc.set(e, r = /* @__PURE__ */ new Set());
  return r.add(t), !1;
}
function GI() {
}
class CI {
  constructor(t = 1 / 0, r = GI) {
    this.max = t, this.dispose = r, this.map = /* @__PURE__ */ new Map(), this.newest = null, this.oldest = null;
  }
  has(t) {
    return this.map.has(t);
  }
  get(t) {
    const r = this.getNode(t);
    return r && r.value;
  }
  getNode(t) {
    const r = this.map.get(t);
    if (r && r !== this.newest) {
      const { older: n, newer: i } = r;
      i && (i.older = n), n && (n.newer = i), r.older = this.newest, r.older.newer = r, r.newer = null, this.newest = r, r === this.oldest && (this.oldest = i);
    }
    return r;
  }
  set(t, r) {
    let n = this.getNode(t);
    return n ? n.value = r : (n = {
      key: t,
      value: r,
      newer: null,
      older: this.newest
    }, this.newest && (this.newest.newer = n), this.newest = n, this.oldest = this.oldest || n, this.map.set(t, n), n.value);
  }
  clean() {
    for (; this.oldest && this.map.size > this.max; )
      this.delete(this.oldest.key);
  }
  delete(t) {
    const r = this.map.get(t);
    return r ? (r === this.newest && (this.newest = r.older), r === this.oldest && (this.oldest = r.newer), r.newer && (r.newer.older = r.older), r.older && (r.older.newer = r.newer), this.map.delete(t), this.dispose(r.value, t), !0) : !1;
  }
}
let $e = null;
const Gf = {};
let UI = 1;
const wI = () => class {
  constructor() {
    this.id = [
      "slot",
      UI++,
      Date.now(),
      Math.random().toString(36).slice(2)
    ].join(":");
  }
  hasValue() {
    for (let t = $e; t; t = t.parent)
      if (this.id in t.slots) {
        const r = t.slots[this.id];
        if (r === Gf)
          break;
        return t !== $e && ($e.slots[this.id] = r), !0;
      }
    return $e && ($e.slots[this.id] = Gf), !1;
  }
  getValue() {
    if (this.hasValue())
      return $e.slots[this.id];
  }
  withValue(t, r, n, i) {
    const o = {
      __proto__: null,
      [this.id]: t
    }, a = $e;
    $e = { parent: a, slots: o };
    try {
      return r.apply(i, n);
    } finally {
      $e = a;
    }
  }
  // Capture the current context and wrap a callback function so that it
  // reestablishes the captured context when called.
  static bind(t) {
    const r = $e;
    return function() {
      const n = $e;
      try {
        return $e = r, t.apply(this, arguments);
      } finally {
        $e = n;
      }
    };
  }
  // Immediately run a callback function without any captured context.
  static noContext(t, r, n) {
    if ($e) {
      const i = $e;
      try {
        return $e = null, t.apply(n, r);
      } finally {
        $e = i;
      }
    } else
      return t.apply(n, r);
  }
};
function Cf(e) {
  try {
    return e();
  } catch {
  }
}
const Ru = "@wry/context:Slot", PI = (
  // Prefer globalThis when available.
  // https://github.com/benjamn/wryware/issues/347
  Cf(() => globalThis) || // Fall back to global, which works in Node.js and may be converted by some
  // bundlers to the appropriate identifier (window, self, ...) depending on the
  // bundling target. https://github.com/endojs/endo/issues/576#issuecomment-1178515224
  Cf(() => global) || // Otherwise, use a dummy host that's local to this module. We used to fall
  // back to using the Array constructor as a namespace, but that was flagged in
  // https://github.com/benjamn/wryware/issues/347, and can be avoided.
  /* @__PURE__ */ Object.create(null)
), Uf = PI, sm = Uf[Ru] || // Earlier versions of this package stored the globalKey property on the Array
// constructor, so we check there as well, to prevent Slot class duplication.
Array[Ru] || function(e) {
  try {
    Object.defineProperty(Uf, Ru, {
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
}(wI()), ys = new sm(), { hasOwnProperty: HI } = Object.prototype, Dl = Array.from || function(e) {
  const t = [];
  return e.forEach((r) => t.push(r)), t;
};
function Ka(e) {
  const { unsubscribe: t } = e;
  typeof t == "function" && (e.unsubscribe = void 0, t());
}
const Qi = [], MI = 100;
function Qn(e, t) {
  if (!e)
    throw new Error(t || "assertion failure");
}
function kI(e, t) {
  const r = e.length;
  return (
    // Unknown values are not equal to each other.
    r > 0 && // Both values must be ordinary (or both exceptional) to be equal.
    r === t.length && // The underlying value or exception must be the same.
    e[r - 1] === t[r - 1]
  );
}
function um(e) {
  switch (e.length) {
    case 0:
      throw new Error("unknown value");
    case 1:
      return e[0];
    case 2:
      throw e[1];
  }
}
function LI(e) {
  return e.slice(0);
}
class Ss {
  constructor(t) {
    this.fn = t, this.parents = /* @__PURE__ */ new Set(), this.childValues = /* @__PURE__ */ new Map(), this.dirtyChildren = null, this.dirty = !0, this.recomputing = !1, this.value = [], this.deps = null, ++Ss.count;
  }
  peek() {
    if (this.value.length === 1 && !Yr(this))
      return wf(this), this.value[0];
  }
  // This is the most important method of the Entry API, because it
  // determines whether the cached this.value can be returned immediately,
  // or must be recomputed. The overall performance of the caching system
  // depends on the truth of the following observations: (1) this.dirty is
  // usually false, (2) this.dirtyChildren is usually null/empty, and thus
  // (3) valueGet(this.value) is usually returned without recomputation.
  recompute(t) {
    return Qn(!this.recomputing, "already recomputing"), wf(this), Yr(this) ? BI(this, t) : um(this.value);
  }
  setDirty() {
    this.dirty || (this.dirty = !0, this.value.length = 0, cm(this), Ka(this));
  }
  dispose() {
    this.setDirty(), hm(this), Gl(this, (t, r) => {
      t.setDirty(), pm(t, this);
    });
  }
  forget() {
    this.dispose();
  }
  dependOn(t) {
    t.add(this), this.deps || (this.deps = Qi.pop() || /* @__PURE__ */ new Set()), this.deps.add(t);
  }
  forgetDeps() {
    this.deps && (Dl(this.deps).forEach((t) => t.delete(this)), this.deps.clear(), Qi.push(this.deps), this.deps = null);
  }
}
Ss.count = 0;
function wf(e) {
  const t = ys.getValue();
  if (t)
    return e.parents.add(t), t.childValues.has(e) || t.childValues.set(e, []), Yr(e) ? _m(t, e) : fm(t, e), t;
}
function BI(e, t) {
  return hm(e), ys.withValue(e, xI, [e, t]), jI(e, t) && FI(e), um(e.value);
}
function xI(e, t) {
  e.recomputing = !0, e.value.length = 0;
  try {
    e.value[0] = e.fn.apply(null, t);
  } catch (r) {
    e.value[1] = r;
  }
  e.recomputing = !1;
}
function Yr(e) {
  return e.dirty || !!(e.dirtyChildren && e.dirtyChildren.size);
}
function FI(e) {
  e.dirty = !1, !Yr(e) && lm(e);
}
function cm(e) {
  Gl(e, _m);
}
function lm(e) {
  Gl(e, fm);
}
function Gl(e, t) {
  const r = e.parents.size;
  if (r) {
    const n = Dl(e.parents);
    for (let i = 0; i < r; ++i)
      t(n[i], e);
  }
}
function _m(e, t) {
  Qn(e.childValues.has(t)), Qn(Yr(t));
  const r = !Yr(e);
  if (!e.dirtyChildren)
    e.dirtyChildren = Qi.pop() || /* @__PURE__ */ new Set();
  else if (e.dirtyChildren.has(t))
    return;
  e.dirtyChildren.add(t), r && cm(e);
}
function fm(e, t) {
  Qn(e.childValues.has(t)), Qn(!Yr(t));
  const r = e.childValues.get(t);
  r.length === 0 ? e.childValues.set(t, LI(t.value)) : kI(r, t.value) || e.setDirty(), dm(e, t), !Yr(e) && lm(e);
}
function dm(e, t) {
  const r = e.dirtyChildren;
  r && (r.delete(t), r.size === 0 && (Qi.length < MI && Qi.push(r), e.dirtyChildren = null));
}
function hm(e) {
  e.childValues.size > 0 && e.childValues.forEach((t, r) => {
    pm(e, r);
  }), e.forgetDeps(), Qn(e.dirtyChildren === null);
}
function pm(e, t) {
  t.parents.delete(e), e.childValues.delete(t), dm(e, t);
}
function jI(e, t) {
  if (typeof e.subscribe == "function")
    try {
      Ka(e), e.unsubscribe = e.subscribe.apply(null, t);
    } catch {
      return e.setDirty(), !1;
    }
  return !0;
}
const VI = {
  setDirty: !0,
  dispose: !0,
  forget: !0
  // Fully remove parent Entry from LRU cache and computation graph
};
function mm(e) {
  const t = /* @__PURE__ */ new Map(), r = e && e.subscribe;
  function n(i) {
    const o = ys.getValue();
    if (o) {
      let a = t.get(i);
      a || t.set(i, a = /* @__PURE__ */ new Set()), o.dependOn(a), typeof r == "function" && (Ka(a), a.unsubscribe = r(i));
    }
  }
  return n.dirty = function(o, a) {
    const s = t.get(o);
    if (s) {
      const u = a && HI.call(VI, a) ? a : "setDirty";
      Dl(s).forEach((c) => c[u]()), t.delete(o), Ka(s);
    }
  }, n;
}
let Pf;
function WI(...e) {
  return (Pf || (Pf = new Zr(typeof WeakMap == "function"))).lookupArray(e);
}
const vu = /* @__PURE__ */ new Set();
function $a(e, { max: t = Math.pow(2, 16), makeCacheKey: r = WI, keyArgs: n, subscribe: i } = /* @__PURE__ */ Object.create(null)) {
  const o = new CI(t, (_) => _.dispose()), a = function() {
    const _ = r.apply(null, n ? n.apply(null, arguments) : arguments);
    if (_ === void 0)
      return e.apply(null, arguments);
    let l = o.get(_);
    l || (o.set(_, l = new Ss(e)), l.subscribe = i, l.forget = () => o.delete(_));
    const f = l.recompute(Array.prototype.slice.call(arguments));
    return o.set(_, l), vu.add(o), ys.hasValue() || (vu.forEach((h) => h.clean()), vu.clear()), f;
  };
  Object.defineProperty(a, "size", {
    get() {
      return o.map.size;
    },
    configurable: !1,
    enumerable: !1
  }), Object.freeze(a.options = {
    max: t,
    makeCacheKey: r,
    keyArgs: n,
    subscribe: i
  });
  function s(_) {
    const l = o.get(_);
    l && l.setDirty();
  }
  a.dirtyKey = s, a.dirty = function() {
    s(r.apply(null, arguments));
  };
  function u(_) {
    const l = o.get(_);
    if (l)
      return l.peek();
  }
  a.peekKey = u, a.peek = function() {
    return u(r.apply(null, arguments));
  };
  function c(_) {
    return o.delete(_);
  }
  return a.forgetKey = c, a.forget = function() {
    return c(r.apply(null, arguments));
  }, a.makeCacheKey = r, a.getKey = n ? function() {
    return r.apply(null, n.apply(null, arguments));
  } : r, Object.freeze(a);
}
var XI = function() {
  function e() {
    this.assumeImmutableResults = !1, this.getFragmentDoc = $a(_g);
  }
  return e.prototype.batch = function(t) {
    var r = this, n = typeof t.optimistic == "string" ? t.optimistic : t.optimistic === !1 ? null : void 0, i;
    return this.performTransaction(function() {
      return i = t.update(r);
    }, n), i;
  }, e.prototype.recordOptimisticTransaction = function(t, r) {
    this.performTransaction(t, r);
  }, e.prototype.transformDocument = function(t) {
    return t;
  }, e.prototype.transformForLink = function(t) {
    return t;
  }, e.prototype.identify = function(t) {
  }, e.prototype.gc = function() {
    return [];
  }, e.prototype.modify = function(t) {
    return !1;
  }, e.prototype.readQuery = function(t, r) {
    return r === void 0 && (r = !!t.optimistic), this.read(v(v({}, t), { rootId: t.id || "ROOT_QUERY", optimistic: r }));
  }, e.prototype.readFragment = function(t, r) {
    return r === void 0 && (r = !!t.optimistic), this.read(v(v({}, t), { query: this.getFragmentDoc(t.fragment, t.fragmentName), rootId: t.id, optimistic: r }));
  }, e.prototype.writeQuery = function(t) {
    var r = t.id, n = t.data, i = dr(t, ["id", "data"]);
    return this.write(Object.assign(i, {
      dataId: r || "ROOT_QUERY",
      result: n
    }));
  }, e.prototype.writeFragment = function(t) {
    var r = t.id, n = t.data, i = t.fragment, o = t.fragmentName, a = dr(t, ["id", "data", "fragment", "fragmentName"]);
    return this.write(Object.assign(a, {
      query: this.getFragmentDoc(i, o),
      dataId: r,
      result: n
    }));
  }, e.prototype.updateQuery = function(t, r) {
    return this.batch({
      update: function(n) {
        var i = n.readQuery(t), o = r(i);
        return o == null ? i : (n.writeQuery(v(v({}, t), { data: o })), o);
      }
    });
  }, e.prototype.updateFragment = function(t, r) {
    return this.batch({
      update: function(n) {
        var i = n.readFragment(t), o = r(i);
        return o == null ? i : (n.writeFragment(v(v({}, t), { data: o })), o);
      }
    });
  }, e;
}(), Tm = function(e) {
  Jt(t, e);
  function t(r, n, i, o) {
    var a, s = e.call(this, r) || this;
    if (s.message = r, s.path = n, s.query = i, s.variables = o, Array.isArray(s.path)) {
      s.missing = s.message;
      for (var u = s.path.length - 1; u >= 0; --u)
        s.missing = (a = {}, a[s.path[u]] = s.missing, a);
    } else
      s.missing = s.path;
    return s.__proto__ = t.prototype, s;
  }
  return t;
}(Error), Ve = Object.prototype.hasOwnProperty;
function bi(e) {
  return e == null;
}
function Em(e, t) {
  var r = e.__typename, n = e.id, i = e._id;
  if (typeof r == "string" && (t && (t.keyObject = bi(n) ? bi(i) ? void 0 : { _id: i } : { id: n }), bi(n) && !bi(i) && (n = i), !bi(n)))
    return "".concat(r, ":").concat(typeof n == "number" || typeof n == "string" ? n : JSON.stringify(n));
}
var Om = {
  dataIdFromObject: Em,
  addTypename: !0,
  resultCaching: !0,
  canonizeResults: !1
};
function YI(e) {
  return Jn(Om, e);
}
function bm(e) {
  var t = e.canonizeResults;
  return t === void 0 ? Om.canonizeResults : t;
}
function KI(e, t) {
  return ge(t) ? e.get(t.__ref, "__typename") : t && t.__typename;
}
var Rm = /^[_a-z][_0-9a-z]*/i;
function Kr(e) {
  var t = e.match(Rm);
  return t ? t[0] : e;
}
function mc(e, t, r) {
  return Ce(t) ? He(t) ? t.every(function(n) {
    return mc(e, n, r);
  }) : e.selections.every(function(n) {
    if (Wr(n) && Go(n, r)) {
      var i = Vr(n);
      return Ve.call(t, i) && (!n.selectionSet || mc(n.selectionSet, t[i], r));
    }
    return !0;
  }) : !1;
}
function Sn(e) {
  return Ce(e) && !ge(e) && !He(e);
}
function $I() {
  return new Xr();
}
function vm(e, t) {
  var r = gs(As(e));
  return {
    fragmentMap: r,
    lookupFragment: function(n) {
      var i = r[n];
      return !i && t && (i = t.lookup(n)), i || null;
    }
  };
}
var ma = /* @__PURE__ */ Object.create(null), gu = function() {
  return ma;
}, Hf = /* @__PURE__ */ Object.create(null), Zi = function() {
  function e(t, r) {
    var n = this;
    this.policies = t, this.group = r, this.data = /* @__PURE__ */ Object.create(null), this.rootIds = /* @__PURE__ */ Object.create(null), this.refs = /* @__PURE__ */ Object.create(null), this.getFieldValue = function(i, o) {
      return cc(ge(i) ? n.get(i.__ref, o) : i && i[o]);
    }, this.canRead = function(i) {
      return ge(i) ? n.has(i.__ref) : typeof i == "object";
    }, this.toReference = function(i, o) {
      if (typeof i == "string")
        return wn(i);
      if (ge(i))
        return i;
      var a = n.policies.identify(i)[0];
      if (a) {
        var s = wn(a);
        return o && n.merge(a, i), s;
      }
    };
  }
  return e.prototype.toObject = function() {
    return v({}, this.data);
  }, e.prototype.has = function(t) {
    return this.lookup(t, !0) !== void 0;
  }, e.prototype.get = function(t, r) {
    if (this.group.depend(t, r), Ve.call(this.data, t)) {
      var n = this.data[t];
      if (n && Ve.call(n, r))
        return n[r];
    }
    if (r === "__typename" && Ve.call(this.policies.rootTypenamesById, t))
      return this.policies.rootTypenamesById[t];
    if (this instanceof Ir)
      return this.parent.get(t, r);
  }, e.prototype.lookup = function(t, r) {
    if (r && this.group.depend(t, "__exists"), Ve.call(this.data, t))
      return this.data[t];
    if (this instanceof Ir)
      return this.parent.lookup(t, r);
    if (this.policies.rootTypenamesById[t])
      return /* @__PURE__ */ Object.create(null);
  }, e.prototype.merge = function(t, r) {
    var n = this, i;
    ge(t) && (t = t.__ref), ge(r) && (r = r.__ref);
    var o = typeof t == "string" ? this.lookup(i = t) : t, a = typeof r == "string" ? this.lookup(i = r) : r;
    if (a) {
      $(typeof i == "string", 1);
      var s = new Xr(qI).merge(o, a);
      if (this.data[i] = s, s !== o && (delete this.refs[i], this.group.caching)) {
        var u = /* @__PURE__ */ Object.create(null);
        o || (u.__exists = 1), Object.keys(a).forEach(function(c) {
          if (!o || o[c] !== s[c]) {
            u[c] = 1;
            var _ = Kr(c);
            _ !== c && !n.policies.hasKeyArgs(s.__typename, _) && (u[_] = 1), s[c] === void 0 && !(n instanceof Ir) && delete s[c];
          }
        }), u.__typename && !(o && o.__typename) && this.policies.rootTypenamesById[i] === s.__typename && delete u.__typename, Object.keys(u).forEach(function(c) {
          return n.group.dirty(i, c);
        });
      }
    }
  }, e.prototype.modify = function(t, r) {
    var n = this, i = this.lookup(t);
    if (i) {
      var o = /* @__PURE__ */ Object.create(null), a = !1, s = !0, u = {
        DELETE: ma,
        INVALIDATE: Hf,
        isReference: ge,
        toReference: this.toReference,
        canRead: this.canRead,
        readField: function(c, _) {
          return n.policies.readField(typeof c == "string" ? {
            fieldName: c,
            from: _ || wn(t)
          } : c, { store: n });
        }
      };
      if (Object.keys(i).forEach(function(c) {
        var _ = Kr(c), l = i[c];
        if (l !== void 0) {
          var f = typeof r == "function" ? r : r[c] || r[_];
          if (f) {
            var h = f === gu ? ma : f(cc(l), v(v({}, u), { fieldName: _, storeFieldName: c, storage: n.getStorage(t, c) }));
            h === Hf ? n.group.dirty(t, c) : (h === ma && (h = void 0), h !== l && (o[c] = h, a = !0, l = h));
          }
          l !== void 0 && (s = !1);
        }
      }), a)
        return this.merge(t, o), s && (this instanceof Ir ? this.data[t] = void 0 : delete this.data[t], this.group.dirty(t, "__exists")), !0;
    }
    return !1;
  }, e.prototype.delete = function(t, r, n) {
    var i, o = this.lookup(t);
    if (o) {
      var a = this.getFieldValue(o, "__typename"), s = r && n ? this.policies.getStoreFieldName({ typename: a, fieldName: r, args: n }) : r;
      return this.modify(t, s ? (i = {}, i[s] = gu, i) : gu);
    }
    return !1;
  }, e.prototype.evict = function(t, r) {
    var n = !1;
    return t.id && (Ve.call(this.data, t.id) && (n = this.delete(t.id, t.fieldName, t.args)), this instanceof Ir && this !== r && (n = this.parent.evict(t, r) || n), (t.fieldName || n) && this.group.dirty(t.id, t.fieldName || "__exists")), n;
  }, e.prototype.clear = function() {
    this.replace(null);
  }, e.prototype.extract = function() {
    var t = this, r = this.toObject(), n = [];
    return this.getRootIdSet().forEach(function(i) {
      Ve.call(t.policies.rootTypenamesById, i) || n.push(i);
    }), n.length && (r.__META = { extraRootIds: n.sort() }), r;
  }, e.prototype.replace = function(t) {
    var r = this;
    if (Object.keys(this.data).forEach(function(o) {
      t && Ve.call(t, o) || r.delete(o);
    }), t) {
      var n = t.__META, i = dr(t, ["__META"]);
      Object.keys(i).forEach(function(o) {
        r.merge(o, i[o]);
      }), n && n.extraRootIds.forEach(this.retain, this);
    }
  }, e.prototype.retain = function(t) {
    return this.rootIds[t] = (this.rootIds[t] || 0) + 1;
  }, e.prototype.release = function(t) {
    if (this.rootIds[t] > 0) {
      var r = --this.rootIds[t];
      return r || delete this.rootIds[t], r;
    }
    return 0;
  }, e.prototype.getRootIdSet = function(t) {
    return t === void 0 && (t = /* @__PURE__ */ new Set()), Object.keys(this.rootIds).forEach(t.add, t), this instanceof Ir ? this.parent.getRootIdSet(t) : Object.keys(this.policies.rootTypenamesById).forEach(t.add, t), t;
  }, e.prototype.gc = function() {
    var t = this, r = this.getRootIdSet(), n = this.toObject();
    r.forEach(function(a) {
      Ve.call(n, a) && (Object.keys(t.findChildRefIds(a)).forEach(r.add, r), delete n[a]);
    });
    var i = Object.keys(n);
    if (i.length) {
      for (var o = this; o instanceof Ir; )
        o = o.parent;
      i.forEach(function(a) {
        return o.delete(a);
      });
    }
    return i;
  }, e.prototype.findChildRefIds = function(t) {
    if (!Ve.call(this.refs, t)) {
      var r = this.refs[t] = /* @__PURE__ */ Object.create(null), n = this.data[t];
      if (!n)
        return r;
      var i = /* @__PURE__ */ new Set([n]);
      i.forEach(function(o) {
        ge(o) && (r[o.__ref] = !0), Ce(o) && Object.keys(o).forEach(function(a) {
          var s = o[a];
          Ce(s) && i.add(s);
        });
      });
    }
    return this.refs[t];
  }, e.prototype.makeCacheKey = function() {
    return this.group.keyMaker.lookupArray(arguments);
  }, e;
}(), gm = function() {
  function e(t, r) {
    r === void 0 && (r = null), this.caching = t, this.parent = r, this.d = null, this.resetCaching();
  }
  return e.prototype.resetCaching = function() {
    this.d = this.caching ? mm() : null, this.keyMaker = new Zr(Er);
  }, e.prototype.depend = function(t, r) {
    if (this.d) {
      this.d(Iu(t, r));
      var n = Kr(r);
      n !== r && this.d(Iu(t, n)), this.parent && this.parent.depend(t, r);
    }
  }, e.prototype.dirty = function(t, r) {
    this.d && this.d.dirty(Iu(t, r), r === "__exists" ? "forget" : "setDirty");
  }, e;
}();
function Iu(e, t) {
  return t + "#" + e;
}
function Mf(e, t) {
  Mi(e) && e.group.depend(t, "__exists");
}
(function(e) {
  var t = function(r) {
    Jt(n, r);
    function n(i) {
      var o = i.policies, a = i.resultCaching, s = a === void 0 ? !0 : a, u = i.seed, c = r.call(this, o, new gm(s)) || this;
      return c.stump = new zI(c), c.storageTrie = new Zr(Er), u && c.replace(u), c;
    }
    return n.prototype.addLayer = function(i, o) {
      return this.stump.addLayer(i, o);
    }, n.prototype.removeLayer = function() {
      return this;
    }, n.prototype.getStorage = function() {
      return this.storageTrie.lookupArray(arguments);
    }, n;
  }(e);
  e.Root = t;
})(Zi || (Zi = {}));
var Ir = function(e) {
  Jt(t, e);
  function t(r, n, i, o) {
    var a = e.call(this, n.policies, o) || this;
    return a.id = r, a.parent = n, a.replay = i, a.group = o, i(a), a;
  }
  return t.prototype.addLayer = function(r, n) {
    return new t(r, this, n, this.group);
  }, t.prototype.removeLayer = function(r) {
    var n = this, i = this.parent.removeLayer(r);
    return r === this.id ? (this.group.caching && Object.keys(this.data).forEach(function(o) {
      var a = n.data[o], s = i.lookup(o);
      s ? a ? a !== s && Object.keys(a).forEach(function(u) {
        we(a[u], s[u]) || n.group.dirty(o, u);
      }) : (n.group.dirty(o, "__exists"), Object.keys(s).forEach(function(u) {
        n.group.dirty(o, u);
      })) : n.delete(o);
    }), i) : i === this.parent ? this : i.addLayer(this.id, this.replay);
  }, t.prototype.toObject = function() {
    return v(v({}, this.parent.toObject()), this.data);
  }, t.prototype.findChildRefIds = function(r) {
    var n = this.parent.findChildRefIds(r);
    return Ve.call(this.data, r) ? v(v({}, n), e.prototype.findChildRefIds.call(this, r)) : n;
  }, t.prototype.getStorage = function() {
    for (var r = this.parent; r.parent; )
      r = r.parent;
    return r.getStorage.apply(r, arguments);
  }, t;
}(Zi), zI = function(e) {
  Jt(t, e);
  function t(r) {
    return e.call(this, "EntityStore.Stump", r, function() {
    }, new gm(r.group.caching, r.group)) || this;
  }
  return t.prototype.removeLayer = function() {
    return this;
  }, t.prototype.merge = function() {
    return this.parent.merge.apply(this.parent, arguments);
  }, t;
}(Ir);
function qI(e, t, r) {
  var n = e[r], i = t[r];
  return we(n, i) ? n : i;
}
function Mi(e) {
  return !!(e instanceof Zi && e.group.caching);
}
function JI(e) {
  return Ce(e) ? He(e) ? e.slice(0) : v({ __proto__: Object.getPrototypeOf(e) }, e) : e;
}
var Tc = function() {
  function e() {
    this.known = new (Xp ? WeakSet : Set)(), this.pool = new Zr(Er), this.passes = /* @__PURE__ */ new WeakMap(), this.keysByJSON = /* @__PURE__ */ new Map(), this.empty = this.admit({});
  }
  return e.prototype.isKnown = function(t) {
    return Ce(t) && this.known.has(t);
  }, e.prototype.pass = function(t) {
    if (Ce(t)) {
      var r = JI(t);
      return this.passes.set(r, t), r;
    }
    return t;
  }, e.prototype.admit = function(t) {
    var r = this;
    if (Ce(t)) {
      var n = this.passes.get(t);
      if (n)
        return n;
      var i = Object.getPrototypeOf(t);
      switch (i) {
        case Array.prototype: {
          if (this.known.has(t))
            return t;
          var o = t.map(this.admit, this), a = this.pool.lookupArray(o);
          return a.array || (this.known.add(a.array = o), globalThis.__DEV__ !== !1 && Object.freeze(o)), a.array;
        }
        case null:
        case Object.prototype: {
          if (this.known.has(t))
            return t;
          var s = Object.getPrototypeOf(t), u = [s], c = this.sortedKeys(t);
          u.push(c.json);
          var _ = u.length;
          c.sorted.forEach(function(h) {
            u.push(r.admit(t[h]));
          });
          var a = this.pool.lookupArray(u);
          if (!a.object) {
            var l = a.object = Object.create(s);
            this.known.add(l), c.sorted.forEach(function(h, d) {
              l[h] = u[_ + d];
            }), globalThis.__DEV__ !== !1 && Object.freeze(l);
          }
          return a.object;
        }
      }
    }
    return t;
  }, e.prototype.sortedKeys = function(t) {
    var r = Object.keys(t), n = this.pool.lookupArray(r);
    if (!n.keys) {
      r.sort();
      var i = JSON.stringify(r);
      (n.keys = this.keysByJSON.get(i)) || this.keysByJSON.set(i, n.keys = { sorted: r, json: i });
    }
    return n.keys;
  }, e;
}(), an = Object.assign(function(e) {
  if (Ce(e)) {
    Ec === void 0 && kf();
    var t = Ec.admit(e), r = Oc.get(t);
    return r === void 0 && Oc.set(t, r = JSON.stringify(t)), r;
  }
  return JSON.stringify(e);
}, {
  reset: kf
}), Ec, Oc;
function kf() {
  Ec = new Tc(), Oc = new (Er ? WeakMap : Map)();
}
function Lf(e) {
  return [
    e.selectionSet,
    e.objectOrReference,
    e.context,
    e.context.canonizeResults
  ];
}
var QI = function() {
  function e(t) {
    var r = this;
    this.knownResults = new (Er ? WeakMap : Map)(), this.config = Jn(t, {
      addTypename: t.addTypename !== !1,
      canonizeResults: bm(t)
    }), this.canon = t.canon || new Tc(), this.executeSelectionSet = $a(function(n) {
      var i, o = n.context.canonizeResults, a = Lf(n);
      a[3] = !o;
      var s = (i = r.executeSelectionSet).peek.apply(i, a);
      return s ? o ? v(v({}, s), { result: r.canon.admit(s.result) }) : s : (Mf(n.context.store, n.enclosingRef.__ref), r.execSelectionSetImpl(n));
    }, {
      max: this.config.resultCacheMaxSize,
      keyArgs: Lf,
      makeCacheKey: function(n, i, o, a) {
        if (Mi(o.store))
          return o.store.makeCacheKey(n, ge(i) ? i.__ref : i, o.varString, a);
      }
    }), this.executeSubSelectedArray = $a(function(n) {
      return Mf(n.context.store, n.enclosingRef.__ref), r.execSubSelectedArrayImpl(n);
    }, {
      max: this.config.resultCacheMaxSize,
      makeCacheKey: function(n) {
        var i = n.field, o = n.array, a = n.context;
        if (Mi(a.store))
          return a.store.makeCacheKey(i, o, a.varString);
      }
    });
  }
  return e.prototype.resetCanon = function() {
    this.canon = new Tc();
  }, e.prototype.diffQueryAgainstStore = function(t) {
    var r = t.store, n = t.query, i = t.rootId, o = i === void 0 ? "ROOT_QUERY" : i, a = t.variables, s = t.returnPartialData, u = s === void 0 ? !0 : s, c = t.canonizeResults, _ = c === void 0 ? this.config.canonizeResults : c, l = this.config.cache.policies;
    a = v(v({}, Rl(Kp(n))), a);
    var f = wn(o), h = this.executeSelectionSet({
      selectionSet: wo(n).selectionSet,
      objectOrReference: f,
      enclosingRef: f,
      context: v({ store: r, query: n, policies: l, variables: a, varString: an(a), canonizeResults: _ }, vm(n, this.config.fragments))
    }), d;
    if (h.missing && (d = [new Tm(ZI(h.missing), h.missing, n, a)], !u))
      throw d[0];
    return {
      result: h.result,
      complete: !d,
      missing: d
    };
  }, e.prototype.isFresh = function(t, r, n, i) {
    if (Mi(i.store) && this.knownResults.get(t) === n) {
      var o = this.executeSelectionSet.peek(n, r, i, this.canon.isKnown(t));
      if (o && t === o.result)
        return !0;
    }
    return !1;
  }, e.prototype.execSelectionSetImpl = function(t) {
    var r = this, n = t.selectionSet, i = t.objectOrReference, o = t.enclosingRef, a = t.context;
    if (ge(i) && !a.policies.rootTypenamesById[i.__ref] && !a.store.has(i.__ref))
      return {
        result: this.canon.empty,
        missing: "Dangling reference to missing ".concat(i.__ref, " object")
      };
    var s = a.variables, u = a.policies, c = a.store, _ = c.getFieldValue(i, "__typename"), l = [], f, h = new Xr();
    this.config.addTypename && typeof _ == "string" && !u.rootIdsByTypename[_] && l.push({ __typename: _ });
    function d(E, R) {
      var b;
      return E.missing && (f = h.merge(f, (b = {}, b[R] = E.missing, b))), E.result;
    }
    var p = new Set(n.selections);
    p.forEach(function(E) {
      var R, b;
      if (Go(E, s))
        if (Wr(E)) {
          var g = u.readField({
            fieldName: E.name.value,
            field: E,
            variables: a.variables,
            from: i
          }, a), A = Vr(E);
          g === void 0 ? vl.added(E) || (f = h.merge(f, (R = {}, R[A] = "Can't find field '".concat(E.name.value, "' on ").concat(ge(i) ? i.__ref + " object" : "object " + JSON.stringify(i, null, 2)), R))) : He(g) ? g = d(r.executeSubSelectedArray({
            field: E,
            array: g,
            enclosingRef: o,
            context: a
          }), A) : E.selectionSet ? g != null && (g = d(r.executeSelectionSet({
            selectionSet: E.selectionSet,
            objectOrReference: g,
            enclosingRef: ge(g) ? g : o,
            context: a
          }), A)) : a.canonizeResults && (g = r.canon.pass(g)), g !== void 0 && l.push((b = {}, b[A] = g, b));
        } else {
          var G = Is(E, a.lookupFragment);
          if (!G && E.kind === We.FRAGMENT_SPREAD)
            throw nt(7, E.name.value);
          G && u.fragmentMatches(G, _) && G.selectionSet.selections.forEach(p.add, p);
        }
    });
    var m = gl(l), T = { result: m, missing: f }, O = a.canonizeResults ? this.canon.admit(T) : cc(T);
    return O.result && this.knownResults.set(O.result, n), O;
  }, e.prototype.execSubSelectedArrayImpl = function(t) {
    var r = this, n = t.field, i = t.array, o = t.enclosingRef, a = t.context, s, u = new Xr();
    function c(_, l) {
      var f;
      return _.missing && (s = u.merge(s, (f = {}, f[l] = _.missing, f))), _.result;
    }
    return n.selectionSet && (i = i.filter(a.store.canRead)), i = i.map(function(_, l) {
      return _ === null ? null : He(_) ? c(r.executeSubSelectedArray({
        field: n,
        array: _,
        enclosingRef: o,
        context: a
      }), l) : n.selectionSet ? c(r.executeSelectionSet({
        selectionSet: n.selectionSet,
        objectOrReference: _,
        enclosingRef: ge(_) ? _ : o,
        context: a
      }), l) : (globalThis.__DEV__ !== !1 && eN(a.store, n, _), _);
    }), {
      result: a.canonizeResults ? this.canon.admit(i) : i,
      missing: s
    };
  }, e;
}();
function ZI(e) {
  try {
    JSON.stringify(e, function(t, r) {
      if (typeof r == "string")
        throw r;
      return r;
    });
  } catch (t) {
    return t;
  }
}
function eN(e, t, r) {
  if (!t.selectionSet) {
    var n = /* @__PURE__ */ new Set([r]);
    n.forEach(function(i) {
      Ce(i) && ($(
        !ge(i),
        8,
        KI(e, i),
        t.name.value
      ), Object.values(i).forEach(n.add, n));
    });
  }
}
var Cl = new sm(), Bf = /* @__PURE__ */ new WeakMap();
function ki(e) {
  var t = Bf.get(e);
  return t || Bf.set(e, t = {
    vars: /* @__PURE__ */ new Set(),
    dep: mm()
  }), t;
}
function xf(e) {
  ki(e).vars.forEach(function(t) {
    return t.forgetCache(e);
  });
}
function tN(e) {
  ki(e).vars.forEach(function(t) {
    return t.attachCache(e);
  });
}
function rN(e) {
  var t = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set(), n = function(o) {
    if (arguments.length > 0) {
      if (e !== o) {
        e = o, t.forEach(function(u) {
          ki(u).dep.dirty(n), nN(u);
        });
        var a = Array.from(r);
        r.clear(), a.forEach(function(u) {
          return u(e);
        });
      }
    } else {
      var s = Cl.getValue();
      s && (i(s), ki(s).dep(n));
    }
    return e;
  };
  n.onNextChange = function(o) {
    return r.add(o), function() {
      r.delete(o);
    };
  };
  var i = n.attachCache = function(o) {
    return t.add(o), ki(o).vars.add(n), n;
  };
  return n.forgetCache = function(o) {
    return t.delete(o);
  }, n;
}
function nN(e) {
  e.broadcastWatches && e.broadcastWatches();
}
var Ff = /* @__PURE__ */ Object.create(null);
function Ul(e) {
  var t = JSON.stringify(e);
  return Ff[t] || (Ff[t] = /* @__PURE__ */ Object.create(null));
}
function jf(e) {
  var t = Ul(e);
  return t.keyFieldsFn || (t.keyFieldsFn = function(r, n) {
    var i = function(a, s) {
      return n.readField(s, a);
    }, o = n.keyObject = wl(e, function(a) {
      var s = Hn(n.storeObject, a, i);
      return s === void 0 && r !== n.storeObject && Ve.call(r, a[0]) && (s = Hn(r, a, Nm)), $(s !== void 0, 2, a.join("."), r), s;
    });
    return "".concat(n.typename, ":").concat(JSON.stringify(o));
  });
}
function Vf(e) {
  var t = Ul(e);
  return t.keyArgsFn || (t.keyArgsFn = function(r, n) {
    var i = n.field, o = n.variables, a = n.fieldName, s = wl(e, function(c) {
      var _ = c[0], l = _.charAt(0);
      if (l === "@") {
        if (i && $t(i.directives)) {
          var f = _.slice(1), h = i.directives.find(function(T) {
            return T.name.value === f;
          }), d = h && Ns(h, o);
          return d && Hn(d, c.slice(1));
        }
        return;
      }
      if (l === "$") {
        var p = _.slice(1);
        if (o && Ve.call(o, p)) {
          var m = c.slice(0);
          return m[0] = p, Hn(o, m);
        }
        return;
      }
      if (r)
        return Hn(r, c);
    }), u = JSON.stringify(s);
    return (r || u !== "{}") && (a += ":" + u), a;
  });
}
function wl(e, t) {
  var r = new Xr();
  return Im(e).reduce(function(n, i) {
    var o, a = t(i);
    if (a !== void 0) {
      for (var s = i.length - 1; s >= 0; --s)
        a = (o = {}, o[i[s]] = a, o);
      n = r.merge(n, a);
    }
    return n;
  }, /* @__PURE__ */ Object.create(null));
}
function Im(e) {
  var t = Ul(e);
  if (!t.paths) {
    var r = t.paths = [], n = [];
    e.forEach(function(i, o) {
      He(i) ? (Im(i).forEach(function(a) {
        return r.push(n.concat(a));
      }), n.length = 0) : (n.push(i), He(e[o + 1]) || (r.push(n.slice(0)), n.length = 0));
    });
  }
  return t.paths;
}
function Nm(e, t) {
  return e[t];
}
function Hn(e, t, r) {
  return r = r || Nm, Am(t.reduce(function n(i, o) {
    return He(i) ? i.map(function(a) {
      return n(a, o);
    }) : i && r(i, o);
  }, e));
}
function Am(e) {
  return Ce(e) ? He(e) ? e.map(Am) : wl(Object.keys(e).sort(), function(t) {
    return Hn(e, t);
  }) : e;
}
bl.setStringify(an);
function bc(e) {
  return e.args !== void 0 ? e.args : e.field ? Ns(e.field, e.variables) : null;
}
var iN = function() {
}, Wf = function(e, t) {
  return t.fieldName;
}, Xf = function(e, t, r) {
  var n = r.mergeObjects;
  return n(e, t);
}, Yf = function(e, t) {
  return t;
}, oN = function() {
  function e(t) {
    this.config = t, this.typePolicies = /* @__PURE__ */ Object.create(null), this.toBeAdded = /* @__PURE__ */ Object.create(null), this.supertypeMap = /* @__PURE__ */ new Map(), this.fuzzySubtypes = /* @__PURE__ */ new Map(), this.rootIdsByTypename = /* @__PURE__ */ Object.create(null), this.rootTypenamesById = /* @__PURE__ */ Object.create(null), this.usingPossibleTypes = !1, this.config = v({ dataIdFromObject: Em }, t), this.cache = this.config.cache, this.setRootTypename("Query"), this.setRootTypename("Mutation"), this.setRootTypename("Subscription"), t.possibleTypes && this.addPossibleTypes(t.possibleTypes), t.typePolicies && this.addTypePolicies(t.typePolicies);
  }
  return e.prototype.identify = function(t, r) {
    var n, i = this, o = r && (r.typename || ((n = r.storeObject) === null || n === void 0 ? void 0 : n.__typename)) || t.__typename;
    if (o === this.rootTypenamesById.ROOT_QUERY)
      return ["ROOT_QUERY"];
    for (var a = r && r.storeObject || t, s = v(v({}, r), { typename: o, storeObject: a, readField: r && r.readField || function() {
      var f = Pl(arguments, a);
      return i.readField(f, {
        store: i.cache.data,
        variables: f.variables
      });
    } }), u, c = o && this.getTypePolicy(o), _ = c && c.keyFn || this.config.dataIdFromObject; _; ) {
      var l = _(v(v({}, t), a), s);
      if (He(l))
        _ = jf(l);
      else {
        u = l;
        break;
      }
    }
    return u = u ? String(u) : void 0, s.keyObject ? [u, s.keyObject] : [u];
  }, e.prototype.addTypePolicies = function(t) {
    var r = this;
    Object.keys(t).forEach(function(n) {
      var i = t[n], o = i.queryType, a = i.mutationType, s = i.subscriptionType, u = dr(i, ["queryType", "mutationType", "subscriptionType"]);
      o && r.setRootTypename("Query", n), a && r.setRootTypename("Mutation", n), s && r.setRootTypename("Subscription", n), Ve.call(r.toBeAdded, n) ? r.toBeAdded[n].push(u) : r.toBeAdded[n] = [u];
    });
  }, e.prototype.updateTypePolicy = function(t, r) {
    var n = this, i = this.getTypePolicy(t), o = r.keyFields, a = r.fields;
    function s(u, c) {
      u.merge = typeof c == "function" ? c : c === !0 ? Xf : c === !1 ? Yf : u.merge;
    }
    s(i, r.merge), i.keyFn = o === !1 ? iN : He(o) ? jf(o) : typeof o == "function" ? o : i.keyFn, a && Object.keys(a).forEach(function(u) {
      var c = n.getFieldPolicy(t, u, !0), _ = a[u];
      if (typeof _ == "function")
        c.read = _;
      else {
        var l = _.keyArgs, f = _.read, h = _.merge;
        c.keyFn = l === !1 ? Wf : He(l) ? Vf(l) : typeof l == "function" ? l : c.keyFn, typeof f == "function" && (c.read = f), s(c, h);
      }
      c.read && c.merge && (c.keyFn = c.keyFn || Wf);
    });
  }, e.prototype.setRootTypename = function(t, r) {
    r === void 0 && (r = t);
    var n = "ROOT_" + t.toUpperCase(), i = this.rootTypenamesById[n];
    r !== i && ($(!i || i === t, 3, t), i && delete this.rootIdsByTypename[i], this.rootIdsByTypename[r] = n, this.rootTypenamesById[n] = r);
  }, e.prototype.addPossibleTypes = function(t) {
    var r = this;
    this.usingPossibleTypes = !0, Object.keys(t).forEach(function(n) {
      r.getSupertypeSet(n, !0), t[n].forEach(function(i) {
        r.getSupertypeSet(i, !0).add(n);
        var o = i.match(Rm);
        (!o || o[0] !== i) && r.fuzzySubtypes.set(i, new RegExp(i));
      });
    });
  }, e.prototype.getTypePolicy = function(t) {
    var r = this;
    if (!Ve.call(this.typePolicies, t)) {
      var n = this.typePolicies[t] = /* @__PURE__ */ Object.create(null);
      n.fields = /* @__PURE__ */ Object.create(null);
      var i = this.supertypeMap.get(t);
      !i && this.fuzzySubtypes.size && (i = this.getSupertypeSet(t, !0), this.fuzzySubtypes.forEach(function(a, s) {
        if (a.test(t)) {
          var u = r.supertypeMap.get(s);
          u && u.forEach(function(c) {
            return i.add(c);
          });
        }
      })), i && i.size && i.forEach(function(a) {
        var s = r.getTypePolicy(a), u = s.fields, c = dr(s, ["fields"]);
        Object.assign(n, c), Object.assign(n.fields, u);
      });
    }
    var o = this.toBeAdded[t];
    return o && o.length && o.splice(0).forEach(function(a) {
      r.updateTypePolicy(t, a);
    }), this.typePolicies[t];
  }, e.prototype.getFieldPolicy = function(t, r, n) {
    if (t) {
      var i = this.getTypePolicy(t).fields;
      return i[r] || n && (i[r] = /* @__PURE__ */ Object.create(null));
    }
  }, e.prototype.getSupertypeSet = function(t, r) {
    var n = this.supertypeMap.get(t);
    return !n && r && this.supertypeMap.set(t, n = /* @__PURE__ */ new Set()), n;
  }, e.prototype.fragmentMatches = function(t, r, n, i) {
    var o = this;
    if (!t.typeCondition)
      return !0;
    if (!r)
      return !1;
    var a = t.typeCondition.name.value;
    if (r === a)
      return !0;
    if (this.usingPossibleTypes && this.supertypeMap.has(a))
      for (var s = this.getSupertypeSet(r, !0), u = [s], c = function(d) {
        var p = o.getSupertypeSet(d, !1);
        p && p.size && u.indexOf(p) < 0 && u.push(p);
      }, _ = !!(n && this.fuzzySubtypes.size), l = !1, f = 0; f < u.length; ++f) {
        var h = u[f];
        if (h.has(a))
          return s.has(a) || (l && globalThis.__DEV__ !== !1 && $.warn(4, r, a), s.add(a)), !0;
        h.forEach(c), _ && f === u.length - 1 && mc(t.selectionSet, n, i) && (_ = !1, l = !0, this.fuzzySubtypes.forEach(function(d, p) {
          var m = r.match(d);
          m && m[0] === r && c(p);
        }));
      }
    return !1;
  }, e.prototype.hasKeyArgs = function(t, r) {
    var n = this.getFieldPolicy(t, r, !1);
    return !!(n && n.keyFn);
  }, e.prototype.getStoreFieldName = function(t) {
    var r = t.typename, n = t.fieldName, i = this.getFieldPolicy(r, n, !1), o, a = i && i.keyFn;
    if (a && r)
      for (var s = {
        typename: r,
        fieldName: n,
        field: t.field || null,
        variables: t.variables
      }, u = bc(t); a; ) {
        var c = a(u, s);
        if (He(c))
          a = Vf(c);
        else {
          o = c || n;
          break;
        }
      }
    return o === void 0 && (o = t.field ? vg(t.field, t.variables) : bl(n, bc(t))), o === !1 ? n : n === Kr(o) ? o : n + ":" + o;
  }, e.prototype.readField = function(t, r) {
    var n = t.from;
    if (n) {
      var i = t.field || t.fieldName;
      if (i) {
        if (t.typename === void 0) {
          var o = r.store.getFieldValue(n, "__typename");
          o && (t.typename = o);
        }
        var a = this.getStoreFieldName(t), s = Kr(a), u = r.store.getFieldValue(n, a), c = this.getFieldPolicy(t.typename, s, !1), _ = c && c.read;
        if (_) {
          var l = Kf(this, n, t, r, r.store.getStorage(ge(n) ? n.__ref : n, a));
          return Cl.withValue(this.cache, _, [u, l]);
        }
        return u;
      }
    }
  }, e.prototype.getReadFunction = function(t, r) {
    var n = this.getFieldPolicy(t, r, !1);
    return n && n.read;
  }, e.prototype.getMergeFunction = function(t, r, n) {
    var i = this.getFieldPolicy(t, r, !1), o = i && i.merge;
    return !o && n && (i = this.getTypePolicy(n), o = i && i.merge), o;
  }, e.prototype.runMergeFunction = function(t, r, n, i, o) {
    var a = n.field, s = n.typename, u = n.merge;
    return u === Xf ? ym(i.store)(t, r) : u === Yf ? r : (i.overwrite && (t = void 0), u(t, r, Kf(this, void 0, { typename: s, fieldName: a.name.value, field: a, variables: i.variables }, i, o || /* @__PURE__ */ Object.create(null))));
  }, e;
}();
function Kf(e, t, r, n, i) {
  var o = e.getStoreFieldName(r), a = Kr(o), s = r.variables || n.variables, u = n.store, c = u.toReference, _ = u.canRead;
  return {
    args: bc(r),
    field: r.field || null,
    fieldName: a,
    storeFieldName: o,
    variables: s,
    isReference: ge,
    toReference: c,
    storage: i,
    cache: e.cache,
    canRead: _,
    readField: function() {
      return e.readField(Pl(arguments, t, s), n);
    },
    mergeObjects: ym(n.store)
  };
}
function Pl(e, t, r) {
  var n = e[0], i = e[1], o = e.length, a;
  return typeof n == "string" ? a = {
    fieldName: n,
    from: o > 1 ? i : t
  } : (a = v({}, n), Ve.call(a, "from") || (a.from = t)), globalThis.__DEV__ !== !1 && a.from === void 0 && globalThis.__DEV__ !== !1 && $.warn(5, jp(Array.from(e))), a.variables === void 0 && (a.variables = r), a;
}
function ym(e) {
  return function(r, n) {
    if (He(r) || He(n))
      throw nt(6);
    if (Ce(r) && Ce(n)) {
      var i = e.getFieldValue(r, "__typename"), o = e.getFieldValue(n, "__typename"), a = i && o && i !== o;
      if (a)
        return n;
      if (ge(r) && Sn(n))
        return e.merge(r.__ref, n), r;
      if (Sn(r) && ge(n))
        return e.merge(r, n.__ref), n;
      if (Sn(r) && Sn(n))
        return v(v({}, r), n);
    }
    return n;
  };
}
function Nu(e, t, r) {
  var n = "".concat(t).concat(r), i = e.flavors.get(n);
  return i || e.flavors.set(n, i = e.clientOnly === t && e.deferred === r ? e : v(v({}, e), { clientOnly: t, deferred: r })), i;
}
var aN = function() {
  function e(t, r, n) {
    this.cache = t, this.reader = r, this.fragments = n;
  }
  return e.prototype.writeToStore = function(t, r) {
    var n = this, i = r.query, o = r.result, a = r.dataId, s = r.variables, u = r.overwrite, c = Uo(i), _ = $I();
    s = v(v({}, Rl(c)), s);
    var l = v(v({ store: t, written: /* @__PURE__ */ Object.create(null), merge: function(h, d) {
      return _.merge(h, d);
    }, variables: s, varString: an(s) }, vm(i, this.fragments)), { overwrite: !!u, incomingById: /* @__PURE__ */ new Map(), clientOnly: !1, deferred: !1, flavors: /* @__PURE__ */ new Map() }), f = this.processSelectionSet({
      result: o || /* @__PURE__ */ Object.create(null),
      dataId: a,
      selectionSet: c.selectionSet,
      mergeTree: { map: /* @__PURE__ */ new Map() },
      context: l
    });
    if (!ge(f))
      throw nt(9, o);
    return l.incomingById.forEach(function(h, d) {
      var p = h.storeObject, m = h.mergeTree, T = h.fieldNodeSet, O = wn(d);
      if (m && m.map.size) {
        var E = n.applyMerges(m, O, p, l);
        if (ge(E))
          return;
        p = E;
      }
      if (globalThis.__DEV__ !== !1 && !l.overwrite) {
        var R = /* @__PURE__ */ Object.create(null);
        T.forEach(function(A) {
          A.selectionSet && (R[A.name.value] = !0);
        });
        var b = function(A) {
          return R[Kr(A)] === !0;
        }, g = function(A) {
          var G = m && m.map.get(A);
          return !!(G && G.info && G.info.merge);
        };
        Object.keys(p).forEach(function(A) {
          b(A) && !g(A) && sN(O, p, A, l.store);
        });
      }
      t.merge(d, p);
    }), t.retain(f.__ref), f;
  }, e.prototype.processSelectionSet = function(t) {
    var r = this, n = t.dataId, i = t.result, o = t.selectionSet, a = t.context, s = t.mergeTree, u = this.cache.policies, c = /* @__PURE__ */ Object.create(null), _ = n && u.rootTypenamesById[n] || ic(i, o, a.fragmentMap) || n && a.store.get(n, "__typename");
    typeof _ == "string" && (c.__typename = _);
    var l = function() {
      var E = Pl(arguments, c, a.variables);
      if (ge(E.from)) {
        var R = a.incomingById.get(E.from.__ref);
        if (R) {
          var b = u.readField(v(v({}, E), { from: R.storeObject }), a);
          if (b !== void 0)
            return b;
        }
      }
      return u.readField(E, a);
    }, f = /* @__PURE__ */ new Set();
    this.flattenFields(o, i, a, _).forEach(function(E, R) {
      var b, g = Vr(R), A = i[g];
      if (f.add(R), A !== void 0) {
        var G = u.getStoreFieldName({
          typename: _,
          fieldName: R.name.value,
          field: R,
          variables: E.variables
        }), D = $f(s, G), H = r.processFieldValue(A, R, R.selectionSet ? Nu(E, !1, !1) : E, D), Y = void 0;
        R.selectionSet && (ge(H) || Sn(H)) && (Y = l("__typename", H));
        var re = u.getMergeFunction(_, R.name.value, Y);
        re ? D.info = {
          field: R,
          typename: _,
          merge: re
        } : zf(s, G), c = E.merge(c, (b = {}, b[G] = H, b));
      } else
        globalThis.__DEV__ !== !1 && !E.clientOnly && !E.deferred && !vl.added(R) && !u.getReadFunction(_, R.name.value) && globalThis.__DEV__ !== !1 && $.error(10, Vr(R), i);
    });
    try {
      var h = u.identify(i, {
        typename: _,
        selectionSet: o,
        fragmentMap: a.fragmentMap,
        storeObject: c,
        readField: l
      }), d = h[0], p = h[1];
      n = n || d, p && (c = a.merge(c, p));
    } catch (E) {
      if (!n)
        throw E;
    }
    if (typeof n == "string") {
      var m = wn(n), T = a.written[n] || (a.written[n] = []);
      if (T.indexOf(o) >= 0 || (T.push(o), this.reader && this.reader.isFresh(i, m, o, a)))
        return m;
      var O = a.incomingById.get(n);
      return O ? (O.storeObject = a.merge(O.storeObject, c), O.mergeTree = Rc(O.mergeTree, s), f.forEach(function(E) {
        return O.fieldNodeSet.add(E);
      })) : a.incomingById.set(n, {
        storeObject: c,
        mergeTree: za(s) ? void 0 : s,
        fieldNodeSet: f
      }), m;
    }
    return c;
  }, e.prototype.processFieldValue = function(t, r, n, i) {
    var o = this;
    return !r.selectionSet || t === null ? globalThis.__DEV__ !== !1 ? rm(t) : t : He(t) ? t.map(function(a, s) {
      var u = o.processFieldValue(a, r, n, $f(i, s));
      return zf(i, s), u;
    }) : this.processSelectionSet({
      result: t,
      selectionSet: r.selectionSet,
      context: n,
      mergeTree: i
    });
  }, e.prototype.flattenFields = function(t, r, n, i) {
    i === void 0 && (i = ic(r, t, n.fragmentMap));
    var o = /* @__PURE__ */ new Map(), a = this.cache.policies, s = new Zr(!1);
    return function u(c, _) {
      var l = s.lookup(c, _.clientOnly, _.deferred);
      l.visited || (l.visited = !0, c.selections.forEach(function(f) {
        if (Go(f, n.variables)) {
          var h = _.clientOnly, d = _.deferred;
          if (!(h && d) && $t(f.directives) && f.directives.forEach(function(T) {
            var O = T.name.value;
            if (O === "client" && (h = !0), O === "defer") {
              var E = Ns(T, n.variables);
              (!E || E.if !== !1) && (d = !0);
            }
          }), Wr(f)) {
            var p = o.get(f);
            p && (h = h && p.clientOnly, d = d && p.deferred), o.set(f, Nu(n, h, d));
          } else {
            var m = Is(f, n.lookupFragment);
            if (!m && f.kind === We.FRAGMENT_SPREAD)
              throw nt(11, f.name.value);
            m && a.fragmentMatches(m, i, r, n.variables) && u(m.selectionSet, Nu(n, h, d));
          }
        }
      }));
    }(t, n), o;
  }, e.prototype.applyMerges = function(t, r, n, i, o) {
    var a, s = this;
    if (t.map.size && !ge(n)) {
      var u = !He(n) && (ge(r) || Sn(r)) ? r : void 0, c = n;
      u && !o && (o = [ge(u) ? u.__ref : u]);
      var _, l = function(f, h) {
        return He(f) ? typeof h == "number" ? f[h] : void 0 : i.store.getFieldValue(f, String(h));
      };
      t.map.forEach(function(f, h) {
        var d = l(u, h), p = l(c, h);
        if (p !== void 0) {
          o && o.push(h);
          var m = s.applyMerges(f, d, p, i, o);
          m !== p && (_ = _ || /* @__PURE__ */ new Map(), _.set(h, m)), o && $(o.pop() === h);
        }
      }), _ && (n = He(c) ? c.slice(0) : v({}, c), _.forEach(function(f, h) {
        n[h] = f;
      }));
    }
    return t.info ? this.cache.policies.runMergeFunction(r, n, t.info, i, o && (a = i.store).getStorage.apply(a, o)) : n;
  }, e;
}(), Sm = [];
function $f(e, t) {
  var r = e.map;
  return r.has(t) || r.set(t, Sm.pop() || { map: /* @__PURE__ */ new Map() }), r.get(t);
}
function Rc(e, t) {
  if (e === t || !t || za(t))
    return e;
  if (!e || za(e))
    return t;
  var r = e.info && t.info ? v(v({}, e.info), t.info) : e.info || t.info, n = e.map.size && t.map.size, i = n ? /* @__PURE__ */ new Map() : e.map.size ? e.map : t.map, o = { info: r, map: i };
  if (n) {
    var a = new Set(t.map.keys());
    e.map.forEach(function(s, u) {
      o.map.set(u, Rc(s, t.map.get(u))), a.delete(u);
    }), a.forEach(function(s) {
      o.map.set(s, Rc(t.map.get(s), e.map.get(s)));
    });
  }
  return o;
}
function za(e) {
  return !e || !(e.info || e.map.size);
}
function zf(e, t) {
  var r = e.map, n = r.get(t);
  n && za(n) && (Sm.push(n), r.delete(t));
}
var qf = /* @__PURE__ */ new Set();
function sN(e, t, r, n) {
  var i = function(l) {
    var f = n.getFieldValue(l, r);
    return typeof f == "object" && f;
  }, o = i(e);
  if (o) {
    var a = i(t);
    if (a && !ge(o) && !we(o, a) && !Object.keys(o).every(function(l) {
      return n.getFieldValue(a, l) !== void 0;
    })) {
      var s = n.getFieldValue(e, "__typename") || n.getFieldValue(t, "__typename"), u = Kr(r), c = "".concat(s, ".").concat(u);
      if (!qf.has(c)) {
        qf.add(c);
        var _ = [];
        !He(o) && !He(a) && [o, a].forEach(function(l) {
          var f = n.getFieldValue(l, "__typename");
          typeof f == "string" && !_.includes(f) && _.push(f);
        }), globalThis.__DEV__ !== !1 && $.warn(12, u, s, _.length ? "either ensure all objects of type " + _.join(" and ") + " have an ID or a custom merge function, or " : "", c, o, a);
      }
    }
  }
}
var uN = function(e) {
  Jt(t, e);
  function t(r) {
    r === void 0 && (r = {});
    var n = e.call(this) || this;
    return n.watches = /* @__PURE__ */ new Set(), n.addTypenameTransform = new $p(vl), n.assumeImmutableResults = !0, n.makeVar = rN, n.txCount = 0, n.config = YI(r), n.addTypename = !!n.config.addTypename, n.policies = new oN({
      cache: n,
      dataIdFromObject: n.config.dataIdFromObject,
      possibleTypes: n.config.possibleTypes,
      typePolicies: n.config.typePolicies
    }), n.init(), n;
  }
  return t.prototype.init = function() {
    var r = this.data = new Zi.Root({
      policies: this.policies,
      resultCaching: this.config.resultCaching
    });
    this.optimisticData = r.stump, this.resetResultCache();
  }, t.prototype.resetResultCache = function(r) {
    var n = this, i = this.storeReader, o = this.config.fragments;
    this.storeWriter = new aN(this, this.storeReader = new QI({
      cache: this,
      addTypename: this.addTypename,
      resultCacheMaxSize: this.config.resultCacheMaxSize,
      canonizeResults: bm(this.config),
      canon: r ? void 0 : i && i.canon,
      fragments: o
    }), o), this.maybeBroadcastWatch = $a(function(a, s) {
      return n.broadcastWatch(a, s);
    }, {
      max: this.config.resultCacheMaxSize,
      makeCacheKey: function(a) {
        var s = a.optimistic ? n.optimisticData : n.data;
        if (Mi(s)) {
          var u = a.optimistic, c = a.id, _ = a.variables;
          return s.makeCacheKey(a.query, a.callback, an({ optimistic: u, id: c, variables: _ }));
        }
      }
    }), (/* @__PURE__ */ new Set([
      this.data.group,
      this.optimisticData.group
    ])).forEach(function(a) {
      return a.resetCaching();
    });
  }, t.prototype.restore = function(r) {
    return this.init(), r && this.data.replace(r), this;
  }, t.prototype.extract = function(r) {
    return r === void 0 && (r = !1), (r ? this.optimisticData : this.data).extract();
  }, t.prototype.read = function(r) {
    var n = r.returnPartialData, i = n === void 0 ? !1 : n;
    try {
      return this.storeReader.diffQueryAgainstStore(v(v({}, r), { store: r.optimistic ? this.optimisticData : this.data, config: this.config, returnPartialData: i })).result || null;
    } catch (o) {
      if (o instanceof Tm)
        return null;
      throw o;
    }
  }, t.prototype.write = function(r) {
    try {
      return ++this.txCount, this.storeWriter.writeToStore(this.data, r);
    } finally {
      !--this.txCount && r.broadcast !== !1 && this.broadcastWatches();
    }
  }, t.prototype.modify = function(r) {
    if (Ve.call(r, "id") && !r.id)
      return !1;
    var n = r.optimistic ? this.optimisticData : this.data;
    try {
      return ++this.txCount, n.modify(r.id || "ROOT_QUERY", r.fields);
    } finally {
      !--this.txCount && r.broadcast !== !1 && this.broadcastWatches();
    }
  }, t.prototype.diff = function(r) {
    return this.storeReader.diffQueryAgainstStore(v(v({}, r), { store: r.optimistic ? this.optimisticData : this.data, rootId: r.id || "ROOT_QUERY", config: this.config }));
  }, t.prototype.watch = function(r) {
    var n = this;
    return this.watches.size || tN(this), this.watches.add(r), r.immediate && this.maybeBroadcastWatch(r), function() {
      n.watches.delete(r) && !n.watches.size && xf(n), n.maybeBroadcastWatch.forget(r);
    };
  }, t.prototype.gc = function(r) {
    an.reset();
    var n = this.optimisticData.gc();
    return r && !this.txCount && (r.resetResultCache ? this.resetResultCache(r.resetResultIdentities) : r.resetResultIdentities && this.storeReader.resetCanon()), n;
  }, t.prototype.retain = function(r, n) {
    return (n ? this.optimisticData : this.data).retain(r);
  }, t.prototype.release = function(r, n) {
    return (n ? this.optimisticData : this.data).release(r);
  }, t.prototype.identify = function(r) {
    if (ge(r))
      return r.__ref;
    try {
      return this.policies.identify(r)[0];
    } catch (n) {
      globalThis.__DEV__ !== !1 && $.warn(n);
    }
  }, t.prototype.evict = function(r) {
    if (!r.id) {
      if (Ve.call(r, "id"))
        return !1;
      r = v(v({}, r), { id: "ROOT_QUERY" });
    }
    try {
      return ++this.txCount, this.optimisticData.evict(r, this.data);
    } finally {
      !--this.txCount && r.broadcast !== !1 && this.broadcastWatches();
    }
  }, t.prototype.reset = function(r) {
    var n = this;
    return this.init(), an.reset(), r && r.discardWatches ? (this.watches.forEach(function(i) {
      return n.maybeBroadcastWatch.forget(i);
    }), this.watches.clear(), xf(this)) : this.broadcastWatches(), Promise.resolve();
  }, t.prototype.removeOptimistic = function(r) {
    var n = this.optimisticData.removeLayer(r);
    n !== this.optimisticData && (this.optimisticData = n, this.broadcastWatches());
  }, t.prototype.batch = function(r) {
    var n = this, i = r.update, o = r.optimistic, a = o === void 0 ? !0 : o, s = r.removeOptimistic, u = r.onWatchUpdated, c, _ = function(f) {
      var h = n, d = h.data, p = h.optimisticData;
      ++n.txCount, f && (n.data = n.optimisticData = f);
      try {
        return c = i(n);
      } finally {
        --n.txCount, n.data = d, n.optimisticData = p;
      }
    }, l = /* @__PURE__ */ new Set();
    return u && !this.txCount && this.broadcastWatches(v(v({}, r), { onWatchUpdated: function(f) {
      return l.add(f), !1;
    } })), typeof a == "string" ? this.optimisticData = this.optimisticData.addLayer(a, _) : a === !1 ? _(this.data) : _(), typeof s == "string" && (this.optimisticData = this.optimisticData.removeLayer(s)), u && l.size ? (this.broadcastWatches(v(v({}, r), { onWatchUpdated: function(f, h) {
      var d = u.call(this, f, h);
      return d !== !1 && l.delete(f), d;
    } })), l.size && l.forEach(function(f) {
      return n.maybeBroadcastWatch.dirty(f);
    })) : this.broadcastWatches(r), c;
  }, t.prototype.performTransaction = function(r, n) {
    return this.batch({
      update: r,
      optimistic: n || n !== null
    });
  }, t.prototype.transformDocument = function(r) {
    return this.addTypenameToDocument(this.addFragmentsToDocument(r));
  }, t.prototype.broadcastWatches = function(r) {
    var n = this;
    this.txCount || this.watches.forEach(function(i) {
      return n.maybeBroadcastWatch(i, r);
    });
  }, t.prototype.addFragmentsToDocument = function(r) {
    var n = this.config.fragments;
    return n ? n.transform(r) : r;
  }, t.prototype.addTypenameToDocument = function(r) {
    return this.addTypename ? this.addTypenameTransform.transformDocument(r) : r;
  }, t.prototype.broadcastWatch = function(r, n) {
    var i = r.lastDiff, o = this.diff(r);
    n && (r.optimistic && typeof n.optimistic == "string" && (o.fromOptimisticTransaction = !0), n.onWatchUpdated && n.onWatchUpdated.call(this, r, o, i) === !1) || (!i || !we(i.result, o.result)) && r.callback(r.lastDiff = o, i);
  }, t;
}(XI), ve;
(function(e) {
  e[e.loading = 1] = "loading", e[e.setVariables = 2] = "setVariables", e[e.fetchMore = 3] = "fetchMore", e[e.refetch = 4] = "refetch", e[e.poll = 6] = "poll", e[e.ready = 7] = "ready", e[e.error = 8] = "error";
})(ve || (ve = {}));
function eo(e) {
  return e ? e < 7 : !1;
}
function cN(e, t, r, n) {
  var i = t.data, o = dr(t, ["data"]), a = r.data, s = dr(r, ["data"]);
  return we(o, s) && Ta(wo(e).selectionSet, i, a, {
    fragmentMap: gs(As(e)),
    variables: n
  });
}
function Ta(e, t, r, n) {
  if (t === r)
    return !0;
  var i = /* @__PURE__ */ new Set();
  return e.selections.every(function(o) {
    if (i.has(o) || (i.add(o), !Go(o, n.variables)) || Jf(o))
      return !0;
    if (Wr(o)) {
      var a = Vr(o), s = t && t[a], u = r && r[a], c = o.selectionSet;
      if (!c)
        return we(s, u);
      var _ = Array.isArray(s), l = Array.isArray(u);
      if (_ !== l)
        return !1;
      if (_ && l) {
        var f = s.length;
        if (u.length !== f)
          return !1;
        for (var h = 0; h < f; ++h)
          if (!Ta(c, s[h], u[h], n))
            return !1;
        return !0;
      }
      return Ta(c, s, u, n);
    } else {
      var d = Is(o, n.fragmentMap);
      if (d)
        return Jf(d) ? !0 : Ta(d.selectionSet, t, r, n);
    }
  });
}
function Jf(e) {
  return !!e.directives && e.directives.some(lN);
}
function lN(e) {
  return e.name.value === "nonreactive";
}
var Qf = Object.assign, _N = Object.hasOwnProperty, vc = function(e) {
  Jt(t, e);
  function t(r) {
    var n = r.queryManager, i = r.queryInfo, o = r.options, a = e.call(this, function(m) {
      try {
        var T = m._subscription._observer;
        T && !T.error && (T.error = fN);
      } catch {
      }
      var O = !a.observers.size;
      a.observers.add(m);
      var E = a.last;
      return E && E.error ? m.error && m.error(E.error) : E && E.result && m.next && m.next(E.result), O && a.reobserve().catch(function() {
      }), function() {
        a.observers.delete(m) && !a.observers.size && a.tearDownQuery();
      };
    }) || this;
    a.observers = /* @__PURE__ */ new Set(), a.subscriptions = /* @__PURE__ */ new Set(), a.queryInfo = i, a.queryManager = n, a.waitForOwnResult = Au(o.fetchPolicy), a.isTornDown = !1;
    var s = n.defaultOptions.watchQuery, u = s === void 0 ? {} : s, c = u.fetchPolicy, _ = c === void 0 ? "cache-first" : c, l = o.fetchPolicy, f = l === void 0 ? _ : l, h = o.initialFetchPolicy, d = h === void 0 ? f === "standby" ? _ : f : h;
    a.options = v(v({}, o), { initialFetchPolicy: d, fetchPolicy: f }), a.queryId = i.queryId || n.generateQueryId();
    var p = Uo(a.query);
    return a.queryName = p && p.name && p.name.value, a;
  }
  return Object.defineProperty(t.prototype, "query", {
    get: function() {
      return this.lastQuery || this.options.query;
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
    var r = this;
    return new Promise(function(n, i) {
      var o = {
        next: function(s) {
          n(s), r.observers.delete(o), r.observers.size || r.queryManager.removeQuery(r.queryId), setTimeout(function() {
            a.unsubscribe();
          }, 0);
        },
        error: i
      }, a = r.subscribe(o);
    });
  }, t.prototype.getCurrentResult = function(r) {
    r === void 0 && (r = !0);
    var n = this.getLastResult(!0), i = this.queryInfo.networkStatus || n && n.networkStatus || ve.ready, o = v(v({}, n), { loading: eo(i), networkStatus: i }), a = this.options.fetchPolicy, s = a === void 0 ? "cache-first" : a;
    if (!(Au(s) || this.queryManager.getDocumentInfo(this.query).hasForcedResolvers))
      if (this.waitForOwnResult)
        this.queryInfo.updateWatch();
      else {
        var u = this.queryInfo.getDiff();
        (u.complete || this.options.returnPartialData) && (o.data = u.result), we(o.data, {}) && (o.data = void 0), u.complete ? (delete o.partial, u.complete && o.networkStatus === ve.loading && (s === "cache-first" || s === "cache-only") && (o.networkStatus = ve.ready, o.loading = !1)) : o.partial = !0, globalThis.__DEV__ !== !1 && !u.complete && !this.options.partialRefetch && !o.loading && !o.data && !o.error && Gm(u.missing);
      }
    return r && this.updateLastResult(o), o;
  }, t.prototype.isDifferentFromLastResult = function(r, n) {
    if (!this.last)
      return !0;
    var i = this.queryManager.getDocumentInfo(this.query).hasNonreactiveDirective ? !cN(this.query, this.last.result, r, this.variables) : !we(this.last.result, r);
    return i || n && !we(this.last.variables, n);
  }, t.prototype.getLast = function(r, n) {
    var i = this.last;
    if (i && i[r] && (!n || we(i.variables, this.variables)))
      return i[r];
  }, t.prototype.getLastResult = function(r) {
    return this.getLast("result", r);
  }, t.prototype.getLastError = function(r) {
    return this.getLast("error", r);
  }, t.prototype.resetLastResults = function() {
    delete this.last, this.isTornDown = !1;
  }, t.prototype.resetQueryStoreErrors = function() {
    this.queryManager.resetErrors(this.queryId);
  }, t.prototype.refetch = function(r) {
    var n, i = {
      pollInterval: 0
    }, o = this.options.fetchPolicy;
    if (o === "cache-and-network" ? i.fetchPolicy = o : o === "no-cache" ? i.fetchPolicy = "no-cache" : i.fetchPolicy = "network-only", globalThis.__DEV__ !== !1 && r && _N.call(r, "variables")) {
      var a = Kp(this.query), s = a.variableDefinitions;
      (!s || !s.some(function(u) {
        return u.variable.name.value === "variables";
      })) && globalThis.__DEV__ !== !1 && $.warn(
        18,
        r,
        ((n = a.name) === null || n === void 0 ? void 0 : n.value) || a
      );
    }
    return r && !we(this.options.variables, r) && (i.variables = this.options.variables = v(v({}, this.options.variables), r)), this.queryInfo.resetLastWrite(), this.reobserve(i, ve.refetch);
  }, t.prototype.fetchMore = function(r) {
    var n = this, i = v(v({}, r.query ? r : v(v(v(v({}, this.options), { query: this.options.query }), r), { variables: v(v({}, this.options.variables), r.variables) })), { fetchPolicy: "no-cache" });
    i.query = this.transformDocument(i.query);
    var o = this.queryManager.generateQueryId();
    this.lastQuery = r.query ? this.transformDocument(this.options.query) : i.query;
    var a = this.queryInfo, s = a.networkStatus;
    a.networkStatus = ve.fetchMore, i.notifyOnNetworkStatusChange && this.observe();
    var u = /* @__PURE__ */ new Set();
    return this.queryManager.fetchQuery(o, i, ve.fetchMore).then(function(c) {
      return n.queryManager.removeQuery(o), a.networkStatus === ve.fetchMore && (a.networkStatus = s), n.queryManager.cache.batch({
        update: function(_) {
          var l = r.updateQuery;
          l ? _.updateQuery({
            query: n.query,
            variables: n.variables,
            returnPartialData: !0,
            optimistic: !1
          }, function(f) {
            return l(f, {
              fetchMoreResult: c.data,
              variables: i.variables
            });
          }) : _.writeQuery({
            query: i.query,
            variables: i.variables,
            data: c.data
          });
        },
        onWatchUpdated: function(_) {
          u.add(_.query);
        }
      }), c;
    }).finally(function() {
      u.has(n.query) || Dm(n);
    });
  }, t.prototype.subscribeToMore = function(r) {
    var n = this, i = this.queryManager.startGraphQLSubscription({
      query: r.document,
      variables: r.variables,
      context: r.context
    }).subscribe({
      next: function(o) {
        var a = r.updateQuery;
        a && n.updateQuery(function(s, u) {
          var c = u.variables;
          return a(s, {
            subscriptionData: o,
            variables: c
          });
        });
      },
      error: function(o) {
        if (r.onError) {
          r.onError(o);
          return;
        }
        globalThis.__DEV__ !== !1 && $.error(19, o);
      }
    });
    return this.subscriptions.add(i), function() {
      n.subscriptions.delete(i) && i.unsubscribe();
    };
  }, t.prototype.setOptions = function(r) {
    return this.reobserve(r);
  }, t.prototype.silentSetOptions = function(r) {
    var n = Jn(this.options, r || {});
    Qf(this.options, n);
  }, t.prototype.setVariables = function(r) {
    return we(this.variables, r) ? this.observers.size ? this.result() : Promise.resolve() : (this.options.variables = r, this.observers.size ? this.reobserve({
      fetchPolicy: this.options.initialFetchPolicy,
      variables: r
    }, ve.setVariables) : Promise.resolve());
  }, t.prototype.updateQuery = function(r) {
    var n = this.queryManager, i = n.cache.diff({
      query: this.options.query,
      variables: this.variables,
      returnPartialData: !0,
      optimistic: !1
    }).result, o = r(i, {
      variables: this.variables
    });
    o && (n.cache.writeQuery({
      query: this.options.query,
      data: o,
      variables: this.variables
    }), n.broadcastQueries());
  }, t.prototype.startPolling = function(r) {
    this.options.pollInterval = r, this.updatePolling();
  }, t.prototype.stopPolling = function() {
    this.options.pollInterval = 0, this.updatePolling();
  }, t.prototype.applyNextFetchPolicy = function(r, n) {
    if (n.nextFetchPolicy) {
      var i = n.fetchPolicy, o = i === void 0 ? "cache-first" : i, a = n.initialFetchPolicy, s = a === void 0 ? o : a;
      o === "standby" || (typeof n.nextFetchPolicy == "function" ? n.fetchPolicy = n.nextFetchPolicy(o, {
        reason: r,
        options: n,
        observable: this,
        initialFetchPolicy: s
      }) : r === "variables-changed" ? n.fetchPolicy = s : n.fetchPolicy = n.nextFetchPolicy);
    }
    return n.fetchPolicy;
  }, t.prototype.fetch = function(r, n) {
    return this.queryManager.setObservableQuery(this), this.queryManager.fetchConcastWithInfo(this.queryId, r, n);
  }, t.prototype.updatePolling = function() {
    var r = this;
    if (!this.queryManager.ssrMode) {
      var n = this, i = n.pollingInfo, o = n.options.pollInterval;
      if (!o) {
        i && (clearTimeout(i.timeout), delete this.pollingInfo);
        return;
      }
      if (!(i && i.interval === o)) {
        $(o, 20);
        var a = i || (this.pollingInfo = {});
        a.interval = o;
        var s = function() {
          r.pollingInfo && (eo(r.queryInfo.networkStatus) ? u() : r.reobserve({
            fetchPolicy: r.options.initialFetchPolicy === "no-cache" ? "no-cache" : "network-only"
          }, ve.poll).then(u, u));
        }, u = function() {
          var c = r.pollingInfo;
          c && (clearTimeout(c.timeout), c.timeout = setTimeout(s, c.interval));
        };
        u();
      }
    }
  }, t.prototype.updateLastResult = function(r, n) {
    n === void 0 && (n = this.variables);
    var i = this.getLastError();
    return i && this.last && !we(n, this.last.variables) && (i = void 0), this.last = v({ result: this.queryManager.assumeImmutableResults ? r : rm(r), variables: n }, i ? { error: i } : null);
  }, t.prototype.reobserveAsConcast = function(r, n) {
    var i = this;
    this.isTornDown = !1;
    var o = n === ve.refetch || n === ve.fetchMore || n === ve.poll, a = this.options.variables, s = this.options.fetchPolicy, u = Jn(this.options, r || {}), c = o ? u : Qf(this.options, u), _ = this.transformDocument(c.query);
    this.lastQuery = _, o || (this.updatePolling(), r && r.variables && !we(r.variables, a) && c.fetchPolicy !== "standby" && c.fetchPolicy === s && (this.applyNextFetchPolicy("variables-changed", c), n === void 0 && (n = ve.setVariables)));
    var l = _ === c.query ? c : v(v({}, c), { query: _ });
    this.waitForOwnResult && (this.waitForOwnResult = Au(l.fetchPolicy));
    var f = function() {
      i.concast === p && (i.waitForOwnResult = !1);
    }, h = l.variables && v({}, l.variables), d = this.fetch(l, n), p = d.concast, m = d.fromLink, T = {
      next: function(O) {
        f(), i.reportResult(O, h);
      },
      error: function(O) {
        f(), i.reportError(O, h);
      }
    };
    return !o && (m || !this.concast) && (this.concast && this.observer && this.concast.removeObserver(this.observer), this.concast = p, this.observer = T), p.addObserver(T), p;
  }, t.prototype.reobserve = function(r, n) {
    return this.reobserveAsConcast(r, n).promise;
  }, t.prototype.observe = function() {
    this.reportResult(this.getCurrentResult(!1), this.variables);
  }, t.prototype.reportResult = function(r, n) {
    var i = this.getLastError(), o = this.isDifferentFromLastResult(r, n);
    (i || !r.partial || this.options.returnPartialData) && this.updateLastResult(r, n), (i || o) && Hi(this.observers, "next", r);
  }, t.prototype.reportError = function(r, n) {
    var i = v(v({}, this.getLastResult()), { error: r, errors: r.graphQLErrors, networkStatus: ve.error, loading: !1 });
    this.updateLastResult(i, n), Hi(this.observers, "error", this.last.error = r);
  }, t.prototype.hasObservers = function() {
    return this.observers.size > 0;
  }, t.prototype.tearDownQuery = function() {
    this.isTornDown || (this.concast && this.observer && (this.concast.removeObserver(this.observer), delete this.concast, delete this.observer), this.stopPolling(), this.subscriptions.forEach(function(r) {
      return r.unsubscribe();
    }), this.subscriptions.clear(), this.queryManager.stopQuery(this.queryId), this.observers.clear(), this.isTornDown = !0);
  }, t.prototype.transformDocument = function(r) {
    return this.queryManager.transform(r);
  }, t;
}(ye);
nm(vc);
function Dm(e) {
  var t = e.options, r = t.fetchPolicy, n = t.nextFetchPolicy;
  return r === "cache-and-network" || r === "network-only" ? e.reobserve({
    fetchPolicy: "cache-first",
    nextFetchPolicy: function() {
      return this.nextFetchPolicy = n, typeof n == "function" ? n.apply(this, arguments) : r;
    }
  }) : e.reobserve();
}
function fN(e) {
  globalThis.__DEV__ !== !1 && $.error(21, e.message, e.stack);
}
function Gm(e) {
  globalThis.__DEV__ !== !1 && e && globalThis.__DEV__ !== !1 && $.debug(22, e);
}
function Au(e) {
  return e === "network-only" || e === "no-cache" || e === "standby";
}
var Cm = function() {
  function e(t) {
    var r = t.cache, n = t.client, i = t.resolvers, o = t.fragmentMatcher;
    this.selectionsToResolveCache = /* @__PURE__ */ new WeakMap(), this.cache = r, n && (this.client = n), i && this.addResolvers(i), o && this.setFragmentMatcher(o);
  }
  return e.prototype.addResolvers = function(t) {
    var r = this;
    this.resolvers = this.resolvers || {}, Array.isArray(t) ? t.forEach(function(n) {
      r.resolvers = mf(r.resolvers, n);
    }) : this.resolvers = mf(this.resolvers, t);
  }, e.prototype.setResolvers = function(t) {
    this.resolvers = {}, this.addResolvers(t);
  }, e.prototype.getResolvers = function() {
    return this.resolvers || {};
  }, e.prototype.runResolvers = function(t) {
    var r = t.document, n = t.remoteResult, i = t.context, o = t.variables, a = t.onlyRunForcedResolvers, s = a === void 0 ? !1 : a;
    return Ar(this, void 0, void 0, function() {
      return yr(this, function(u) {
        return r ? [2, this.resolveDocument(r, n.data, i, o, this.fragmentMatcher, s).then(function(c) {
          return v(v({}, n), { data: c.result });
        })] : [2, n];
      });
    });
  }, e.prototype.setFragmentMatcher = function(t) {
    this.fragmentMatcher = t;
  }, e.prototype.getFragmentMatcher = function() {
    return this.fragmentMatcher;
  }, e.prototype.clientQuery = function(t) {
    return Ji(["client"], t) && this.resolvers ? t : null;
  }, e.prototype.serverQuery = function(t) {
    return Qp(t);
  }, e.prototype.prepareContext = function(t) {
    var r = this.cache;
    return v(v({}, t), { cache: r, getCacheKey: function(n) {
      return r.identify(n);
    } });
  }, e.prototype.addExportedVariables = function(t, r, n) {
    return r === void 0 && (r = {}), n === void 0 && (n = {}), Ar(this, void 0, void 0, function() {
      return yr(this, function(i) {
        return t ? [2, this.resolveDocument(t, this.buildRootValueFromCache(t, r) || {}, this.prepareContext(n), r).then(function(o) {
          return v(v({}, r), o.exportedVariables);
        })] : [2, v({}, r)];
      });
    });
  }, e.prototype.shouldForceResolvers = function(t) {
    var r = !1;
    return hr(t, {
      Directive: {
        enter: function(n) {
          if (n.name.value === "client" && n.arguments && (r = n.arguments.some(function(i) {
            return i.name.value === "always" && i.value.kind === "BooleanValue" && i.value.value === !0;
          }), r))
            return Ol;
        }
      }
    }), r;
  }, e.prototype.buildRootValueFromCache = function(t, r) {
    return this.cache.diff({
      query: Gg(t),
      variables: r,
      returnPartialData: !0,
      optimistic: !1
    }).result;
  }, e.prototype.resolveDocument = function(t, r, n, i, o, a) {
    return n === void 0 && (n = {}), i === void 0 && (i = {}), o === void 0 && (o = function() {
      return !0;
    }), a === void 0 && (a = !1), Ar(this, void 0, void 0, function() {
      var s, u, c, _, l, f, h, d, p, m, T;
      return yr(this, function(O) {
        return s = wo(t), u = As(t), c = gs(u), _ = this.collectSelectionsToResolve(s, c), l = s.operation, f = l ? l.charAt(0).toUpperCase() + l.slice(1) : "Query", h = this, d = h.cache, p = h.client, m = {
          fragmentMap: c,
          context: v(v({}, n), { cache: d, client: p }),
          variables: i,
          fragmentMatcher: o,
          defaultOperationType: f,
          exportedVariables: {},
          selectionsToResolve: _,
          onlyRunForcedResolvers: a
        }, T = !1, [2, this.resolveSelectionSet(s.selectionSet, T, r, m).then(function(E) {
          return {
            result: E,
            exportedVariables: m.exportedVariables
          };
        })];
      });
    });
  }, e.prototype.resolveSelectionSet = function(t, r, n, i) {
    return Ar(this, void 0, void 0, function() {
      var o, a, s, u, c, _ = this;
      return yr(this, function(l) {
        return o = i.fragmentMap, a = i.context, s = i.variables, u = [n], c = function(f) {
          return Ar(_, void 0, void 0, function() {
            var h, d;
            return yr(this, function(p) {
              return !r && !i.selectionsToResolve.has(f) ? [2] : Go(f, s) ? Wr(f) ? [2, this.resolveField(f, r, n, i).then(function(m) {
                var T;
                typeof m < "u" && u.push((T = {}, T[Vr(f)] = m, T));
              })] : (Ng(f) ? h = f : (h = o[f.name.value], $(h, 16, f.name.value)), h && h.typeCondition && (d = h.typeCondition.name.value, i.fragmentMatcher(n, d, a)) ? [2, this.resolveSelectionSet(h.selectionSet, r, n, i).then(function(m) {
                u.push(m);
              })] : [2]) : [2];
            });
          });
        }, [2, Promise.all(t.selections.map(c)).then(function() {
          return gl(u);
        })];
      });
    });
  }, e.prototype.resolveField = function(t, r, n, i) {
    return Ar(this, void 0, void 0, function() {
      var o, a, s, u, c, _, l, f, h, d = this;
      return yr(this, function(p) {
        return n ? (o = i.variables, a = t.name.value, s = Vr(t), u = a !== s, c = n[s] || n[a], _ = Promise.resolve(c), (!i.onlyRunForcedResolvers || this.shouldForceResolvers(t)) && (l = n.__typename || i.defaultOperationType, f = this.resolvers && this.resolvers[l], f && (h = f[u ? a : s], h && (_ = Promise.resolve(Cl.withValue(this.cache, h, [
          n,
          Ns(t, o),
          i.context,
          { field: t, fragmentMap: i.fragmentMap }
        ]))))), [2, _.then(function(m) {
          var T, O;
          if (m === void 0 && (m = c), t.directives && t.directives.forEach(function(R) {
            R.name.value === "export" && R.arguments && R.arguments.forEach(function(b) {
              b.name.value === "as" && b.value.kind === "StringValue" && (i.exportedVariables[b.value.value] = m);
            });
          }), !t.selectionSet || m == null)
            return m;
          var E = (O = (T = t.directives) === null || T === void 0 ? void 0 : T.some(function(R) {
            return R.name.value === "client";
          })) !== null && O !== void 0 ? O : !1;
          if (Array.isArray(m))
            return d.resolveSubSelectedArray(t, r || E, m, i);
          if (t.selectionSet)
            return d.resolveSelectionSet(t.selectionSet, r || E, m, i);
        })]) : [2, null];
      });
    });
  }, e.prototype.resolveSubSelectedArray = function(t, r, n, i) {
    var o = this;
    return Promise.all(n.map(function(a) {
      if (a === null)
        return null;
      if (Array.isArray(a))
        return o.resolveSubSelectedArray(t, r, a, i);
      if (t.selectionSet)
        return o.resolveSelectionSet(t.selectionSet, r, a, i);
    }));
  }, e.prototype.collectSelectionsToResolve = function(t, r) {
    var n = function(a) {
      return !Array.isArray(a);
    }, i = this.selectionsToResolveCache;
    function o(a) {
      if (!i.has(a)) {
        var s = /* @__PURE__ */ new Set();
        i.set(a, s), hr(a, {
          Directive: function(u, c, _, l, f) {
            u.name.value === "client" && f.forEach(function(h) {
              n(h) && ff(h) && s.add(h);
            });
          },
          FragmentSpread: function(u, c, _, l, f) {
            var h = r[u.name.value];
            $(h, 17, u.name.value);
            var d = o(h);
            d.size > 0 && (f.forEach(function(p) {
              n(p) && ff(p) && s.add(p);
            }), s.add(u), d.forEach(function(p) {
              s.add(p);
            }));
          }
        });
      }
      return i.get(a);
    }
    return o(t);
  }, e;
}(), Dn = new (Er ? WeakMap : Map)();
function yu(e, t) {
  var r = e[t];
  typeof r == "function" && (e[t] = function() {
    return Dn.set(e, (Dn.get(e) + 1) % 1e15), r.apply(this, arguments);
  });
}
function Zf(e) {
  e.notifyTimeout && (clearTimeout(e.notifyTimeout), e.notifyTimeout = void 0);
}
var Su = function() {
  function e(t, r) {
    r === void 0 && (r = t.generateQueryId()), this.queryId = r, this.listeners = /* @__PURE__ */ new Set(), this.document = null, this.lastRequestId = 1, this.subscriptions = /* @__PURE__ */ new Set(), this.stopped = !1, this.dirty = !1, this.observableQuery = null;
    var n = this.cache = t.cache;
    Dn.has(n) || (Dn.set(n, 0), yu(n, "evict"), yu(n, "modify"), yu(n, "reset"));
  }
  return e.prototype.init = function(t) {
    var r = t.networkStatus || ve.loading;
    return this.variables && this.networkStatus !== ve.loading && !we(this.variables, t.variables) && (r = ve.setVariables), we(t.variables, this.variables) || (this.lastDiff = void 0), Object.assign(this, {
      document: t.document,
      variables: t.variables,
      networkError: null,
      graphQLErrors: this.graphQLErrors || [],
      networkStatus: r
    }), t.observableQuery && this.setObservableQuery(t.observableQuery), t.lastRequestId && (this.lastRequestId = t.lastRequestId), this;
  }, e.prototype.reset = function() {
    Zf(this), this.dirty = !1;
  }, e.prototype.getDiff = function(t) {
    t === void 0 && (t = this.variables);
    var r = this.getDiffOptions(t);
    if (this.lastDiff && we(r, this.lastDiff.options))
      return this.lastDiff.diff;
    this.updateWatch(this.variables = t);
    var n = this.observableQuery;
    if (n && n.options.fetchPolicy === "no-cache")
      return { complete: !1 };
    var i = this.cache.diff(r);
    return this.updateLastDiff(i, r), i;
  }, e.prototype.updateLastDiff = function(t, r) {
    this.lastDiff = t ? {
      diff: t,
      options: r || this.getDiffOptions()
    } : void 0;
  }, e.prototype.getDiffOptions = function(t) {
    var r;
    return t === void 0 && (t = this.variables), {
      query: this.document,
      variables: t,
      returnPartialData: !0,
      optimistic: !0,
      canonizeResults: (r = this.observableQuery) === null || r === void 0 ? void 0 : r.options.canonizeResults
    };
  }, e.prototype.setDiff = function(t) {
    var r = this, n = this.lastDiff && this.lastDiff.diff;
    this.updateLastDiff(t), !this.dirty && !we(n && n.result, t && t.result) && (this.dirty = !0, this.notifyTimeout || (this.notifyTimeout = setTimeout(function() {
      return r.notify();
    }, 0)));
  }, e.prototype.setObservableQuery = function(t) {
    var r = this;
    t !== this.observableQuery && (this.oqListener && this.listeners.delete(this.oqListener), this.observableQuery = t, t ? (t.queryInfo = this, this.listeners.add(this.oqListener = function() {
      var n = r.getDiff();
      n.fromOptimisticTransaction ? t.observe() : Dm(t);
    })) : delete this.oqListener);
  }, e.prototype.notify = function() {
    var t = this;
    Zf(this), this.shouldNotify() && this.listeners.forEach(function(r) {
      return r(t);
    }), this.dirty = !1;
  }, e.prototype.shouldNotify = function() {
    if (!this.dirty || !this.listeners.size)
      return !1;
    if (eo(this.networkStatus) && this.observableQuery) {
      var t = this.observableQuery.options.fetchPolicy;
      if (t !== "cache-only" && t !== "cache-and-network")
        return !1;
    }
    return !0;
  }, e.prototype.stop = function() {
    if (!this.stopped) {
      this.stopped = !0, this.reset(), this.cancel(), this.cancel = e.prototype.cancel, this.subscriptions.forEach(function(r) {
        return r.unsubscribe();
      });
      var t = this.observableQuery;
      t && t.stopPolling();
    }
  }, e.prototype.cancel = function() {
  }, e.prototype.updateWatch = function(t) {
    var r = this;
    t === void 0 && (t = this.variables);
    var n = this.observableQuery;
    if (!(n && n.options.fetchPolicy === "no-cache")) {
      var i = v(v({}, this.getDiffOptions(t)), { watcher: this, callback: function(o) {
        return r.setDiff(o);
      } });
      (!this.lastWatch || !we(i, this.lastWatch)) && (this.cancel(), this.cancel = this.cache.watch(this.lastWatch = i));
    }
  }, e.prototype.resetLastWrite = function() {
    this.lastWrite = void 0;
  }, e.prototype.shouldWrite = function(t, r) {
    var n = this.lastWrite;
    return !(n && n.dmCount === Dn.get(this.cache) && we(r, n.variables) && we(t.data, n.result.data));
  }, e.prototype.markResult = function(t, r, n, i) {
    var o = this, a = new Xr(), s = $t(t.errors) ? t.errors.slice(0) : [];
    if (this.reset(), "incremental" in t && $t(t.incremental)) {
      var u = im(this.getDiff().result, t);
      t.data = u;
    } else if ("hasNext" in t && t.hasNext) {
      var c = this.getDiff();
      t.data = a.merge(c.result, t.data);
    }
    this.graphQLErrors = s, n.fetchPolicy === "no-cache" ? this.updateLastDiff({ result: t.data, complete: !0 }, this.getDiffOptions(n.variables)) : i !== 0 && (gc(t, n.errorPolicy) ? this.cache.performTransaction(function(_) {
      if (o.shouldWrite(t, n.variables))
        _.writeQuery({
          query: r,
          data: t.data,
          variables: n.variables,
          overwrite: i === 1
        }), o.lastWrite = {
          result: t,
          variables: n.variables,
          dmCount: Dn.get(o.cache)
        };
      else if (o.lastDiff && o.lastDiff.diff.complete) {
        t.data = o.lastDiff.diff.result;
        return;
      }
      var l = o.getDiffOptions(n.variables), f = _.diff(l);
      o.stopped || o.updateWatch(n.variables), o.updateLastDiff(f, l), f.complete && (t.data = f.result);
    }) : this.lastWrite = void 0);
  }, e.prototype.markReady = function() {
    return this.networkError = null, this.networkStatus = ve.ready;
  }, e.prototype.markError = function(t) {
    return this.networkStatus = ve.error, this.lastWrite = void 0, this.reset(), t.graphQLErrors && (this.graphQLErrors = t.graphQLErrors), t.networkError && (this.networkError = t.networkError), t;
  }, e;
}();
function gc(e, t) {
  t === void 0 && (t = "none");
  var r = t === "ignore" || t === "all", n = !pa(e);
  return !n && r && e.data && (n = !0), n;
}
var dN = Object.prototype.hasOwnProperty, hN = function() {
  function e(t) {
    var r = t.cache, n = t.link, i = t.defaultOptions, o = t.documentTransform, a = t.queryDeduplication, s = a === void 0 ? !1 : a, u = t.onBroadcast, c = t.ssrMode, _ = c === void 0 ? !1 : c, l = t.clientAwareness, f = l === void 0 ? {} : l, h = t.localState, d = t.assumeImmutableResults, p = d === void 0 ? !!r.assumeImmutableResults : d, m = this;
    this.clientAwareness = {}, this.queries = /* @__PURE__ */ new Map(), this.fetchCancelFns = /* @__PURE__ */ new Map(), this.transformCache = new (Er ? WeakMap : Map)(), this.queryIdCounter = 1, this.requestIdCounter = 1, this.mutationIdCounter = 1, this.inFlightLinkObservables = /* @__PURE__ */ new Map();
    var T = new $p(function(O) {
      return m.cache.transformDocument(O);
    }, { cache: !1 });
    this.cache = r, this.link = n, this.defaultOptions = i || /* @__PURE__ */ Object.create(null), this.queryDeduplication = s, this.clientAwareness = f, this.localState = h || new Cm({ cache: r }), this.ssrMode = _, this.assumeImmutableResults = p, this.documentTransform = o ? T.concat(o).concat(T) : T, (this.onBroadcast = u) && (this.mutationStore = /* @__PURE__ */ Object.create(null));
  }
  return e.prototype.stop = function() {
    var t = this;
    this.queries.forEach(function(r, n) {
      t.stopQueryNoBroadcast(n);
    }), this.cancelPendingFetches(nt(23));
  }, e.prototype.cancelPendingFetches = function(t) {
    this.fetchCancelFns.forEach(function(r) {
      return r(t);
    }), this.fetchCancelFns.clear();
  }, e.prototype.mutate = function(t) {
    var r, n, i = t.mutation, o = t.variables, a = t.optimisticResponse, s = t.updateQueries, u = t.refetchQueries, c = u === void 0 ? [] : u, _ = t.awaitRefetchQueries, l = _ === void 0 ? !1 : _, f = t.update, h = t.onQueryUpdated, d = t.fetchPolicy, p = d === void 0 ? ((r = this.defaultOptions.mutate) === null || r === void 0 ? void 0 : r.fetchPolicy) || "network-only" : d, m = t.errorPolicy, T = m === void 0 ? ((n = this.defaultOptions.mutate) === null || n === void 0 ? void 0 : n.errorPolicy) || "none" : m, O = t.keepRootFields, E = t.context;
    return Ar(this, void 0, void 0, function() {
      var R, b, g, A;
      return yr(this, function(G) {
        switch (G.label) {
          case 0:
            return $(i, 24), $(p === "network-only" || p === "no-cache", 25), R = this.generateMutationId(), i = this.cache.transformForLink(this.transform(i)), b = this.getDocumentInfo(i).hasClientExports, o = this.getVariables(i, o), b ? [4, this.localState.addExportedVariables(i, o, E)] : [3, 2];
          case 1:
            o = G.sent(), G.label = 2;
          case 2:
            return g = this.mutationStore && (this.mutationStore[R] = {
              mutation: i,
              variables: o,
              loading: !0,
              error: null
            }), a && this.markMutationOptimistic(a, {
              mutationId: R,
              document: i,
              variables: o,
              fetchPolicy: p,
              errorPolicy: T,
              context: E,
              updateQueries: s,
              update: f,
              keepRootFields: O
            }), this.broadcastQueries(), A = this, [2, new Promise(function(D, H) {
              return Eu(A.getObservableFromLink(i, v(v({}, E), { optimisticResponse: a }), o, !1), function(Y) {
                if (pa(Y) && T === "none")
                  throw new mn({
                    graphQLErrors: lc(Y)
                  });
                g && (g.loading = !1, g.error = null);
                var re = v({}, Y);
                return typeof c == "function" && (c = c(re)), T === "ignore" && pa(re) && delete re.errors, A.markMutationResult({
                  mutationId: R,
                  result: re,
                  document: i,
                  variables: o,
                  fetchPolicy: p,
                  errorPolicy: T,
                  context: E,
                  update: f,
                  updateQueries: s,
                  awaitRefetchQueries: l,
                  refetchQueries: c,
                  removeOptimistic: a ? R : void 0,
                  onQueryUpdated: h,
                  keepRootFields: O
                });
              }).subscribe({
                next: function(Y) {
                  A.broadcastQueries(), (!("hasNext" in Y) || Y.hasNext === !1) && D(Y);
                },
                error: function(Y) {
                  g && (g.loading = !1, g.error = Y), a && A.cache.removeOptimistic(R), A.broadcastQueries(), H(Y instanceof mn ? Y : new mn({
                    networkError: Y
                  }));
                }
              });
            })];
        }
      });
    });
  }, e.prototype.markMutationResult = function(t, r) {
    var n = this;
    r === void 0 && (r = this.cache);
    var i = t.result, o = [], a = t.fetchPolicy === "no-cache";
    if (!a && gc(i, t.errorPolicy)) {
      if (Pn(i) || o.push({
        result: i.data,
        dataId: "ROOT_MUTATION",
        query: t.document,
        variables: t.variables
      }), Pn(i) && $t(i.incremental)) {
        var s = r.diff({
          id: "ROOT_MUTATION",
          query: this.getDocumentInfo(t.document).asQuery,
          variables: t.variables,
          optimistic: !1,
          returnPartialData: !0
        }), u = void 0;
        s.result && (u = im(s.result, i)), typeof u < "u" && (i.data = u, o.push({
          result: u,
          dataId: "ROOT_MUTATION",
          query: t.document,
          variables: t.variables
        }));
      }
      var c = t.updateQueries;
      c && this.queries.forEach(function(l, f) {
        var h = l.observableQuery, d = h && h.queryName;
        if (!(!d || !dN.call(c, d))) {
          var p = c[d], m = n.queries.get(f), T = m.document, O = m.variables, E = r.diff({
            query: T,
            variables: O,
            returnPartialData: !0,
            optimistic: !1
          }), R = E.result, b = E.complete;
          if (b && R) {
            var g = p(R, {
              mutationResult: i,
              queryName: T && oc(T) || void 0,
              queryVariables: O
            });
            g && o.push({
              result: g,
              dataId: "ROOT_QUERY",
              query: T,
              variables: O
            });
          }
        }
      });
    }
    if (o.length > 0 || t.refetchQueries || t.update || t.onQueryUpdated || t.removeOptimistic) {
      var _ = [];
      if (this.refetchQueries({
        updateCache: function(l) {
          a || o.forEach(function(p) {
            return l.write(p);
          });
          var f = t.update, h = !Yg(i) || Pn(i) && !i.hasNext;
          if (f) {
            if (!a) {
              var d = l.diff({
                id: "ROOT_MUTATION",
                query: n.getDocumentInfo(t.document).asQuery,
                variables: t.variables,
                optimistic: !1,
                returnPartialData: !0
              });
              d.complete && (i = v(v({}, i), { data: d.result }), "incremental" in i && delete i.incremental, "hasNext" in i && delete i.hasNext);
            }
            h && f(l, i, {
              context: t.context,
              variables: t.variables
            });
          }
          !a && !t.keepRootFields && h && l.modify({
            id: "ROOT_MUTATION",
            fields: function(p, m) {
              var T = m.fieldName, O = m.DELETE;
              return T === "__typename" ? p : O;
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
          return i;
        });
    }
    return Promise.resolve(i);
  }, e.prototype.markMutationOptimistic = function(t, r) {
    var n = this, i = typeof t == "function" ? t(r.variables) : t;
    return this.cache.recordOptimisticTransaction(function(o) {
      try {
        n.markMutationResult(v(v({}, r), { result: { data: i } }), o);
      } catch (a) {
        globalThis.__DEV__ !== !1 && $.error(a);
      }
    }, r.mutationId);
  }, e.prototype.fetchQuery = function(t, r, n) {
    return this.fetchConcastWithInfo(t, r, n).concast.promise;
  }, e.prototype.getQueryStore = function() {
    var t = /* @__PURE__ */ Object.create(null);
    return this.queries.forEach(function(r, n) {
      t[n] = {
        variables: r.variables,
        networkStatus: r.networkStatus,
        networkError: r.networkError,
        graphQLErrors: r.graphQLErrors
      };
    }), t;
  }, e.prototype.resetErrors = function(t) {
    var r = this.queries.get(t);
    r && (r.networkError = void 0, r.graphQLErrors = []);
  }, e.prototype.transform = function(t) {
    return this.documentTransform.transformDocument(t);
  }, e.prototype.getDocumentInfo = function(t) {
    var r = this.transformCache;
    if (!r.has(t)) {
      var n = {
        hasClientExports: ig(t),
        hasForcedResolvers: this.localState.shouldForceResolvers(t),
        hasNonreactiveDirective: Ji(["nonreactive"], t),
        clientQuery: this.localState.clientQuery(t),
        serverQuery: Jp([
          { name: "client", remove: !0 },
          { name: "connection" },
          { name: "nonreactive" }
        ], t),
        defaultVars: Rl(Uo(t)),
        asQuery: v(v({}, t), { definitions: t.definitions.map(function(i) {
          return i.kind === "OperationDefinition" && i.operation !== "query" ? v(v({}, i), { operation: "query" }) : i;
        }) })
      };
      r.set(t, n);
    }
    return r.get(t);
  }, e.prototype.getVariables = function(t, r) {
    return v(v({}, this.getDocumentInfo(t).defaultVars), r);
  }, e.prototype.watchQuery = function(t) {
    var r = this.transform(t.query);
    t = v(v({}, t), { variables: this.getVariables(r, t.variables) }), typeof t.notifyOnNetworkStatusChange > "u" && (t.notifyOnNetworkStatusChange = !1);
    var n = new Su(this), i = new vc({
      queryManager: this,
      queryInfo: n,
      options: t
    });
    return i.lastQuery = r, this.queries.set(i.queryId, n), n.init({
      document: r,
      observableQuery: i,
      variables: i.variables
    }), i;
  }, e.prototype.query = function(t, r) {
    var n = this;
    return r === void 0 && (r = this.generateQueryId()), $(t.query, 26), $(t.query.kind === "Document", 27), $(!t.returnPartialData, 28), $(!t.pollInterval, 29), this.fetchQuery(r, v(v({}, t), { query: this.transform(t.query) })).finally(function() {
      return n.stopQuery(r);
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
    var r = this.queries.get(t);
    r && r.stop();
  }, e.prototype.clearStore = function(t) {
    return t === void 0 && (t = {
      discardWatches: !0
    }), this.cancelPendingFetches(nt(30)), this.queries.forEach(function(r) {
      r.observableQuery ? r.networkStatus = ve.loading : r.stop();
    }), this.mutationStore && (this.mutationStore = /* @__PURE__ */ Object.create(null)), this.cache.reset(t);
  }, e.prototype.getObservableQueries = function(t) {
    var r = this;
    t === void 0 && (t = "active");
    var n = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set();
    return Array.isArray(t) && t.forEach(function(a) {
      typeof a == "string" ? i.set(a, !1) : fg(a) ? i.set(r.transform(a), !1) : Ce(a) && a.query && o.add(a);
    }), this.queries.forEach(function(a, s) {
      var u = a.observableQuery, c = a.document;
      if (u) {
        if (t === "all") {
          n.set(s, u);
          return;
        }
        var _ = u.queryName, l = u.options.fetchPolicy;
        if (l === "standby" || t === "active" && !u.hasObservers())
          return;
        (t === "active" || _ && i.has(_) || c && i.has(c)) && (n.set(s, u), _ && i.set(_, !0), c && i.set(c, !0));
      }
    }), o.size && o.forEach(function(a) {
      var s = nc("legacyOneTimeQuery"), u = r.getQuery(s).init({
        document: a.query,
        variables: a.variables
      }), c = new vc({
        queryManager: r,
        queryInfo: u,
        options: v(v({}, a), { fetchPolicy: "network-only" })
      });
      $(c.queryId === s), u.setObservableQuery(c), n.set(s, c);
    }), globalThis.__DEV__ !== !1 && i.size && i.forEach(function(a, s) {
      a || globalThis.__DEV__ !== !1 && $.warn(typeof s == "string" ? 31 : 32, s);
    }), n;
  }, e.prototype.reFetchObservableQueries = function(t) {
    var r = this;
    t === void 0 && (t = !1);
    var n = [];
    return this.getObservableQueries(t ? "all" : "active").forEach(function(i, o) {
      var a = i.options.fetchPolicy;
      i.resetLastResults(), (t || a !== "standby" && a !== "cache-only") && n.push(i.refetch()), r.getQuery(o).setDiff(null);
    }), this.broadcastQueries(), Promise.all(n);
  }, e.prototype.setObservableQuery = function(t) {
    this.getQuery(t.queryId).setObservableQuery(t);
  }, e.prototype.startGraphQLSubscription = function(t) {
    var r = this, n = t.query, i = t.fetchPolicy, o = t.errorPolicy, a = t.variables, s = t.context, u = s === void 0 ? {} : s;
    n = this.transform(n), a = this.getVariables(n, a);
    var c = function(l) {
      return r.getObservableFromLink(n, u, l).map(function(f) {
        i !== "no-cache" && (gc(f, o) && r.cache.write({
          query: n,
          result: f.data,
          dataId: "ROOT_SUBSCRIPTION",
          variables: l
        }), r.broadcastQueries());
        var h = pa(f), d = uI(f);
        if (h || d) {
          var p = {};
          throw h && (p.graphQLErrors = f.errors), d && (p.protocolErrors = f.extensions[Sl]), new mn(p);
        }
        return f;
      });
    };
    if (this.getDocumentInfo(n).hasClientExports) {
      var _ = this.localState.addExportedVariables(n, a, u).then(c);
      return new ye(function(l) {
        var f = null;
        return _.then(function(h) {
          return f = h.subscribe(l);
        }, l.error), function() {
          return f && f.unsubscribe();
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
  }, e.prototype.getObservableFromLink = function(t, r, n, i) {
    var o = this, a;
    i === void 0 && (i = (a = r?.queryDeduplication) !== null && a !== void 0 ? a : this.queryDeduplication);
    var s, u = this.getDocumentInfo(t), c = u.serverQuery, _ = u.clientQuery;
    if (c) {
      var l = this, f = l.inFlightLinkObservables, h = l.link, d = {
        query: c,
        variables: n,
        operationName: oc(c) || void 0,
        context: this.prepareContext(v(v({}, r), { forceFetch: !i }))
      };
      if (r = d.context, i) {
        var p = zp(c), m = f.get(p) || /* @__PURE__ */ new Map();
        f.set(p, m);
        var T = an(n);
        if (s = m.get(T), !s) {
          var O = new vn([
            fc(h, d)
          ]);
          m.set(T, s = O), O.beforeNext(function() {
            m.delete(T) && m.size < 1 && f.delete(p);
          });
        }
      } else
        s = new vn([
          fc(h, d)
        ]);
    } else
      s = new vn([
        ye.of({ data: {} })
      ]), r = this.prepareContext(r);
    return _ && (s = Eu(s, function(E) {
      return o.localState.runResolvers({
        document: _,
        remoteResult: E,
        context: r,
        variables: n
      });
    })), s;
  }, e.prototype.getResultsFromLink = function(t, r, n) {
    var i = t.lastRequestId = this.generateRequestId(), o = this.cache.transformForLink(n.query);
    return Eu(this.getObservableFromLink(o, n.context, n.variables), function(a) {
      var s = lc(a), u = s.length > 0;
      if (i >= t.lastRequestId) {
        if (u && n.errorPolicy === "none")
          throw t.markError(new mn({
            graphQLErrors: s
          }));
        t.markResult(a, o, n, r), t.markReady();
      }
      var c = {
        data: a.data,
        loading: !1,
        networkStatus: ve.ready
      };
      return u && n.errorPolicy !== "ignore" && (c.errors = s, c.networkStatus = ve.error), c;
    }, function(a) {
      var s = cI(a) ? a : new mn({ networkError: a });
      throw i >= t.lastRequestId && t.markError(s), s;
    });
  }, e.prototype.fetchConcastWithInfo = function(t, r, n) {
    var i = this;
    n === void 0 && (n = ve.loading);
    var o = r.query, a = this.getVariables(o, r.variables), s = this.getQuery(t), u = this.defaultOptions.watchQuery, c = r.fetchPolicy, _ = c === void 0 ? u && u.fetchPolicy || "cache-first" : c, l = r.errorPolicy, f = l === void 0 ? u && u.errorPolicy || "none" : l, h = r.returnPartialData, d = h === void 0 ? !1 : h, p = r.notifyOnNetworkStatusChange, m = p === void 0 ? !1 : p, T = r.context, O = T === void 0 ? {} : T, E = Object.assign({}, r, {
      query: o,
      variables: a,
      fetchPolicy: _,
      errorPolicy: f,
      returnPartialData: d,
      notifyOnNetworkStatusChange: m,
      context: O
    }), R = function(D) {
      E.variables = D;
      var H = i.fetchQueryByPolicy(s, E, n);
      return E.fetchPolicy !== "standby" && H.sources.length > 0 && s.observableQuery && s.observableQuery.applyNextFetchPolicy("after-fetch", r), H;
    }, b = function() {
      return i.fetchCancelFns.delete(t);
    };
    this.fetchCancelFns.set(t, function(D) {
      b(), setTimeout(function() {
        return g.cancel(D);
      });
    });
    var g, A;
    if (this.getDocumentInfo(E.query).hasClientExports)
      g = new vn(this.localState.addExportedVariables(E.query, E.variables, E.context).then(R).then(function(D) {
        return D.sources;
      })), A = !0;
    else {
      var G = R(E.variables);
      A = G.fromLink, g = new vn(G.sources);
    }
    return g.promise.then(b, b), {
      concast: g,
      fromLink: A
    };
  }, e.prototype.refetchQueries = function(t) {
    var r = this, n = t.updateCache, i = t.include, o = t.optimistic, a = o === void 0 ? !1 : o, s = t.removeOptimistic, u = s === void 0 ? a ? nc("refetchQueries") : void 0 : s, c = t.onQueryUpdated, _ = /* @__PURE__ */ new Map();
    i && this.getObservableQueries(i).forEach(function(f, h) {
      _.set(h, {
        oq: f,
        lastDiff: r.getQuery(h).getDiff()
      });
    });
    var l = /* @__PURE__ */ new Map();
    return n && this.cache.batch({
      update: n,
      optimistic: a && u || !1,
      removeOptimistic: u,
      onWatchUpdated: function(f, h, d) {
        var p = f.watcher instanceof Su && f.watcher.observableQuery;
        if (p) {
          if (c) {
            _.delete(p.queryId);
            var m = c(p, h, d);
            return m === !0 && (m = p.refetch()), m !== !1 && l.set(p, m), m;
          }
          c !== null && _.set(p.queryId, { oq: p, lastDiff: d, diff: h });
        }
      }
    }), _.size && _.forEach(function(f, h) {
      var d = f.oq, p = f.lastDiff, m = f.diff, T;
      if (c) {
        if (!m) {
          var O = d.queryInfo;
          O.reset(), m = O.getDiff();
        }
        T = c(d, m, p);
      }
      (!c || T === !0) && (T = d.refetch()), T !== !1 && l.set(d, T), h.indexOf("legacyOneTimeQuery") >= 0 && r.stopQueryNoBroadcast(h);
    }), u && this.cache.removeOptimistic(u), l;
  }, e.prototype.fetchQueryByPolicy = function(t, r, n) {
    var i = this, o = r.query, a = r.variables, s = r.fetchPolicy, u = r.refetchWritePolicy, c = r.errorPolicy, _ = r.returnPartialData, l = r.context, f = r.notifyOnNetworkStatusChange, h = t.networkStatus;
    t.init({
      document: o,
      variables: a,
      networkStatus: n
    });
    var d = function() {
      return t.getDiff(a);
    }, p = function(R, b) {
      b === void 0 && (b = t.networkStatus || ve.loading);
      var g = R.result;
      globalThis.__DEV__ !== !1 && !_ && !we(g, {}) && Gm(R.missing);
      var A = function(G) {
        return ye.of(v({ data: G, loading: eo(b), networkStatus: b }, R.complete ? null : { partial: !0 }));
      };
      return g && i.getDocumentInfo(o).hasForcedResolvers ? i.localState.runResolvers({
        document: o,
        remoteResult: { data: g },
        context: l,
        variables: a,
        onlyRunForcedResolvers: !0
      }).then(function(G) {
        return A(G.data || void 0);
      }) : c === "none" && b === ve.refetch && Array.isArray(R.missing) ? A(void 0) : A(g);
    }, m = s === "no-cache" ? 0 : n === ve.refetch && u !== "merge" ? 1 : 2, T = function() {
      return i.getResultsFromLink(t, m, {
        query: o,
        variables: a,
        context: l,
        fetchPolicy: s,
        errorPolicy: c
      });
    }, O = f && typeof h == "number" && h !== n && eo(n);
    switch (s) {
      default:
      case "cache-first": {
        var E = d();
        return E.complete ? { fromLink: !1, sources: [p(E, t.markReady())] } : _ || O ? { fromLink: !0, sources: [p(E), T()] } : { fromLink: !0, sources: [T()] };
      }
      case "cache-and-network": {
        var E = d();
        return E.complete || _ || O ? { fromLink: !0, sources: [p(E), T()] } : { fromLink: !0, sources: [T()] };
      }
      case "cache-only":
        return { fromLink: !1, sources: [p(d(), t.markReady())] };
      case "network-only":
        return O ? { fromLink: !0, sources: [p(d()), T()] } : { fromLink: !0, sources: [T()] };
      case "no-cache":
        return O ? {
          fromLink: !0,
          sources: [
            p(t.getDiff()),
            T()
          ]
        } : { fromLink: !0, sources: [T()] };
      case "standby":
        return { fromLink: !1, sources: [] };
    }
  }, e.prototype.getQuery = function(t) {
    return t && !this.queries.has(t) && this.queries.set(t, new Su(this, t)), this.queries.get(t);
  }, e.prototype.prepareContext = function(t) {
    t === void 0 && (t = {});
    var r = this.localState.prepareContext(t);
    return v(v({}, r), { clientAwareness: this.clientAwareness });
  }, e;
}(), ed = !1, pN = function() {
  function e(t) {
    var r = this;
    if (this.resetStoreCallbacks = [], this.clearStoreCallbacks = [], !t.cache)
      throw nt(13);
    var n = t.uri, i = t.credentials, o = t.headers, a = t.cache, s = t.documentTransform, u = t.ssrMode, c = u === void 0 ? !1 : u, _ = t.ssrForceFetchDelay, l = _ === void 0 ? 0 : _, f = t.connectToDevTools, h = f === void 0 ? typeof window == "object" && !window.__APOLLO_CLIENT__ && globalThis.__DEV__ !== !1 : f, d = t.queryDeduplication, p = d === void 0 ? !0 : d, m = t.defaultOptions, T = t.assumeImmutableResults, O = T === void 0 ? a.assumeImmutableResults : T, E = t.resolvers, R = t.typeDefs, b = t.fragmentMatcher, g = t.name, A = t.version, G = t.link;
    if (G || (G = n ? new NI({ uri: n, credentials: i, headers: o }) : si.empty()), this.link = G, this.cache = a, this.disableNetworkFetches = c || l > 0, this.queryDeduplication = p, this.defaultOptions = m || /* @__PURE__ */ Object.create(null), this.typeDefs = R, l && setTimeout(function() {
      return r.disableNetworkFetches = !1;
    }, l), this.watchQuery = this.watchQuery.bind(this), this.query = this.query.bind(this), this.mutate = this.mutate.bind(this), this.resetStore = this.resetStore.bind(this), this.reFetchObservableQueries = this.reFetchObservableQueries.bind(this), h && typeof window == "object" && (window.__APOLLO_CLIENT__ = this), !ed && h && globalThis.__DEV__ !== !1 && (ed = !0, typeof window < "u" && window.document && window.top === window.self && !window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__)) {
      var D = window.navigator, H = D && D.userAgent, Y = void 0;
      typeof H == "string" && (H.indexOf("Chrome/") > -1 ? Y = "https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm" : H.indexOf("Firefox/") > -1 && (Y = "https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/")), Y && globalThis.__DEV__ !== !1 && $.log("Download the Apollo DevTools for a better development experience: %s", Y);
    }
    this.version = Tl, this.localState = new Cm({
      cache: a,
      client: this,
      resolvers: E,
      fragmentMatcher: b
    }), this.queryManager = new hN({
      cache: this.cache,
      link: this.link,
      defaultOptions: this.defaultOptions,
      documentTransform: s,
      queryDeduplication: p,
      ssrMode: c,
      clientAwareness: {
        name: g,
        version: A
      },
      localState: this.localState,
      assumeImmutableResults: O,
      onBroadcast: h ? function() {
        r.devToolsHookCb && r.devToolsHookCb({
          action: {},
          state: {
            queries: r.queryManager.getQueryStore(),
            mutations: r.queryManager.mutationStore || {}
          },
          dataWithOptimisticResults: r.cache.extract(!0)
        });
      } : void 0
    });
  }
  return Object.defineProperty(e.prototype, "documentTransform", {
    get: function() {
      return this.queryManager.documentTransform;
    },
    enumerable: !1,
    configurable: !0
  }), e.prototype.stop = function() {
    this.queryManager.stop();
  }, e.prototype.watchQuery = function(t) {
    return this.defaultOptions.watchQuery && (t = Ou(this.defaultOptions.watchQuery, t)), this.disableNetworkFetches && (t.fetchPolicy === "network-only" || t.fetchPolicy === "cache-and-network") && (t = v(v({}, t), { fetchPolicy: "cache-first" })), this.queryManager.watchQuery(t);
  }, e.prototype.query = function(t) {
    return this.defaultOptions.query && (t = Ou(this.defaultOptions.query, t)), $(t.fetchPolicy !== "cache-and-network", 14), this.disableNetworkFetches && t.fetchPolicy === "network-only" && (t = v(v({}, t), { fetchPolicy: "cache-first" })), this.queryManager.query(t);
  }, e.prototype.mutate = function(t) {
    return this.defaultOptions.mutate && (t = Ou(this.defaultOptions.mutate, t)), this.queryManager.mutate(t);
  }, e.prototype.subscribe = function(t) {
    return this.queryManager.startGraphQLSubscription(t);
  }, e.prototype.readQuery = function(t, r) {
    return r === void 0 && (r = !1), this.cache.readQuery(t, r);
  }, e.prototype.readFragment = function(t, r) {
    return r === void 0 && (r = !1), this.cache.readFragment(t, r);
  }, e.prototype.writeQuery = function(t) {
    var r = this.cache.writeQuery(t);
    return t.broadcast !== !1 && this.queryManager.broadcastQueries(), r;
  }, e.prototype.writeFragment = function(t) {
    var r = this.cache.writeFragment(t);
    return t.broadcast !== !1 && this.queryManager.broadcastQueries(), r;
  }, e.prototype.__actionHookForDevTools = function(t) {
    this.devToolsHookCb = t;
  }, e.prototype.__requestRaw = function(t) {
    return fc(this.link, t);
  }, e.prototype.resetStore = function() {
    var t = this;
    return Promise.resolve().then(function() {
      return t.queryManager.clearStore({
        discardWatches: !1
      });
    }).then(function() {
      return Promise.all(t.resetStoreCallbacks.map(function(r) {
        return r();
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
      return Promise.all(t.clearStoreCallbacks.map(function(r) {
        return r();
      }));
    });
  }, e.prototype.onResetStore = function(t) {
    var r = this;
    return this.resetStoreCallbacks.push(t), function() {
      r.resetStoreCallbacks = r.resetStoreCallbacks.filter(function(n) {
        return n !== t;
      });
    };
  }, e.prototype.onClearStore = function(t) {
    var r = this;
    return this.clearStoreCallbacks.push(t), function() {
      r.clearStoreCallbacks = r.clearStoreCallbacks.filter(function(n) {
        return n !== t;
      });
    };
  }, e.prototype.reFetchObservableQueries = function(t) {
    return this.queryManager.reFetchObservableQueries(t);
  }, e.prototype.refetchQueries = function(t) {
    var r = this.queryManager.refetchQueries(t), n = [], i = [];
    r.forEach(function(a, s) {
      n.push(s), i.push(a);
    });
    var o = Promise.all(i);
    return o.queries = n, o.results = i, o.catch(function(a) {
      globalThis.__DEV__ !== !1 && $.debug(15, a);
    }), o;
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
function mN(e) {
  return new si(function(t, r) {
    var n = dr(t, []);
    return new ye(function(i) {
      var o, a = !1;
      return Promise.resolve(n).then(function(s) {
        return e(s, t.getContext());
      }).then(t.setContext).then(function() {
        a || (o = r(t).subscribe({
          next: i.next.bind(i),
          error: i.error.bind(i),
          complete: i.complete.bind(i)
        }));
      }).catch(i.error.bind(i)), function() {
        a = !0, o && o.unsubscribe();
      };
    });
  });
}
const TN = `${Lp}/${Bp._GRAPHQL}`, EN = new ml(), ON = am({
  uri: TN
}), bN = mN((e, { headers: t }) => {
  const r = EN.get("AUTH_TOKEN", "");
  return {
    headers: {
      ...t,
      Authorization: `Bearer ${r}`,
      // Needed to upload files
      "apollo-require-preflight": !0
    }
  };
});
new pN({
  cache: new uN(),
  link: bN.concat(ON)
});
function Um(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: RN } = Object.prototype, { getPrototypeOf: Hl } = Object, Ds = ((e) => (t) => {
  const r = RN.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Qt = (e) => (e = e.toLowerCase(), (t) => Ds(t) === e), Gs = (e) => (t) => typeof t === e, { isArray: ui } = Array, to = Gs("undefined");
function vN(e) {
  return e !== null && !to(e) && e.constructor !== null && !to(e.constructor) && gt(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const wm = Qt("ArrayBuffer");
function gN(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && wm(e.buffer), t;
}
const IN = Gs("string"), gt = Gs("function"), Pm = Gs("number"), Cs = (e) => e !== null && typeof e == "object", NN = (e) => e === !0 || e === !1, Ea = (e) => {
  if (Ds(e) !== "object")
    return !1;
  const t = Hl(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, AN = Qt("Date"), yN = Qt("File"), SN = Qt("Blob"), DN = Qt("FileList"), GN = (e) => Cs(e) && gt(e.pipe), CN = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || gt(e.append) && ((t = Ds(e)) === "formdata" || // detect form-data instance
  t === "object" && gt(e.toString) && e.toString() === "[object FormData]"));
}, UN = Qt("URLSearchParams"), wN = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Po(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, i;
  if (typeof e != "object" && (e = [e]), ui(e))
    for (n = 0, i = e.length; n < i; n++)
      t.call(null, e[n], n, e);
  else {
    const o = r ? Object.getOwnPropertyNames(e) : Object.keys(e), a = o.length;
    let s;
    for (n = 0; n < a; n++)
      s = o[n], t.call(null, e[s], s, e);
  }
}
function Hm(e, t) {
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length, i;
  for (; n-- > 0; )
    if (i = r[n], t === i.toLowerCase())
      return i;
  return null;
}
const Mm = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), km = (e) => !to(e) && e !== Mm;
function Ic() {
  const { caseless: e } = km(this) && this || {}, t = {}, r = (n, i) => {
    const o = e && Hm(t, i) || i;
    Ea(t[o]) && Ea(n) ? t[o] = Ic(t[o], n) : Ea(n) ? t[o] = Ic({}, n) : ui(n) ? t[o] = n.slice() : t[o] = n;
  };
  for (let n = 0, i = arguments.length; n < i; n++)
    arguments[n] && Po(arguments[n], r);
  return t;
}
const PN = (e, t, r, { allOwnKeys: n } = {}) => (Po(t, (i, o) => {
  r && gt(i) ? e[o] = Um(i, r) : e[o] = i;
}, { allOwnKeys: n }), e), HN = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), MN = (e, t, r, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, kN = (e, t, r, n) => {
  let i, o, a;
  const s = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (i = Object.getOwnPropertyNames(e), o = i.length; o-- > 0; )
      a = i[o], (!n || n(a, e, t)) && !s[a] && (t[a] = e[a], s[a] = !0);
    e = r !== !1 && Hl(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, LN = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, BN = (e) => {
  if (!e)
    return null;
  if (ui(e))
    return e;
  let t = e.length;
  if (!Pm(t))
    return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, xN = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Hl(Uint8Array)), FN = (e, t) => {
  const n = (e && e[Symbol.iterator]).call(e);
  let i;
  for (; (i = n.next()) && !i.done; ) {
    const o = i.value;
    t.call(e, o[0], o[1]);
  }
}, jN = (e, t) => {
  let r;
  const n = [];
  for (; (r = e.exec(t)) !== null; )
    n.push(r);
  return n;
}, VN = Qt("HTMLFormElement"), WN = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, i) {
    return n.toUpperCase() + i;
  }
), td = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), XN = Qt("RegExp"), Lm = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  Po(r, (i, o) => {
    t(i, o, e) !== !1 && (n[o] = i);
  }), Object.defineProperties(e, n);
}, YN = (e) => {
  Lm(e, (t, r) => {
    if (gt(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = e[r];
    if (gt(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, KN = (e, t) => {
  const r = {}, n = (i) => {
    i.forEach((o) => {
      r[o] = !0;
    });
  };
  return ui(e) ? n(e) : n(String(e).split(t)), r;
}, $N = () => {
}, zN = (e, t) => (e = +e, Number.isFinite(e) ? e : t), Du = "abcdefghijklmnopqrstuvwxyz", rd = "0123456789", Bm = {
  DIGIT: rd,
  ALPHA: Du,
  ALPHA_DIGIT: Du + Du.toUpperCase() + rd
}, qN = (e = 16, t = Bm.ALPHA_DIGIT) => {
  let r = "";
  const { length: n } = t;
  for (; e--; )
    r += t[Math.random() * n | 0];
  return r;
};
function JN(e) {
  return !!(e && gt(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const QN = (e) => {
  const t = new Array(10), r = (n, i) => {
    if (Cs(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        t[i] = n;
        const o = ui(n) ? [] : {};
        return Po(n, (a, s) => {
          const u = r(a, i + 1);
          !to(u) && (o[s] = u);
        }), t[i] = void 0, o;
      }
    }
    return n;
  };
  return r(e, 0);
}, ZN = Qt("AsyncFunction"), eA = (e) => e && (Cs(e) || gt(e)) && gt(e.then) && gt(e.catch), N = {
  isArray: ui,
  isArrayBuffer: wm,
  isBuffer: vN,
  isFormData: CN,
  isArrayBufferView: gN,
  isString: IN,
  isNumber: Pm,
  isBoolean: NN,
  isObject: Cs,
  isPlainObject: Ea,
  isUndefined: to,
  isDate: AN,
  isFile: yN,
  isBlob: SN,
  isRegExp: XN,
  isFunction: gt,
  isStream: GN,
  isURLSearchParams: UN,
  isTypedArray: xN,
  isFileList: DN,
  forEach: Po,
  merge: Ic,
  extend: PN,
  trim: wN,
  stripBOM: HN,
  inherits: MN,
  toFlatObject: kN,
  kindOf: Ds,
  kindOfTest: Qt,
  endsWith: LN,
  toArray: BN,
  forEachEntry: FN,
  matchAll: jN,
  isHTMLForm: VN,
  hasOwnProperty: td,
  hasOwnProp: td,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Lm,
  freezeMethods: YN,
  toObjectSet: KN,
  toCamelCase: WN,
  noop: $N,
  toFiniteNumber: zN,
  findKey: Hm,
  global: Mm,
  isContextDefined: km,
  ALPHABET: Bm,
  generateString: qN,
  isSpecCompliantForm: JN,
  toJSONObject: QN,
  isAsyncFn: ZN,
  isThenable: eA
};
function le(e, t, r, n, i) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), n && (this.request = n), i && (this.response = i);
}
N.inherits(le, Error, {
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
      config: N.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const xm = le.prototype, Fm = {};
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
  Fm[e] = { value: e };
});
Object.defineProperties(le, Fm);
Object.defineProperty(xm, "isAxiosError", { value: !0 });
le.from = (e, t, r, n, i, o) => {
  const a = Object.create(xm);
  return N.toFlatObject(e, a, function(u) {
    return u !== Error.prototype;
  }, (s) => s !== "isAxiosError"), le.call(a, e.message, t, r, n, i), a.cause = e, a.name = e.name, o && Object.assign(a, o), a;
};
const tA = null;
function Nc(e) {
  return N.isPlainObject(e) || N.isArray(e);
}
function jm(e) {
  return N.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function nd(e, t, r) {
  return e ? e.concat(t).map(function(i, o) {
    return i = jm(i), !r && o ? "[" + i + "]" : i;
  }).join(r ? "." : "") : t;
}
function rA(e) {
  return N.isArray(e) && !e.some(Nc);
}
const nA = N.toFlatObject(N, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Us(e, t, r) {
  if (!N.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = N.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(p, m) {
    return !N.isUndefined(m[p]);
  });
  const n = r.metaTokens, i = r.visitor || _, o = r.dots, a = r.indexes, u = (r.Blob || typeof Blob < "u" && Blob) && N.isSpecCompliantForm(t);
  if (!N.isFunction(i))
    throw new TypeError("visitor must be a function");
  function c(d) {
    if (d === null)
      return "";
    if (N.isDate(d))
      return d.toISOString();
    if (!u && N.isBlob(d))
      throw new le("Blob is not supported. Use a Buffer instead.");
    return N.isArrayBuffer(d) || N.isTypedArray(d) ? u && typeof Blob == "function" ? new Blob([d]) : Buffer.from(d) : d;
  }
  function _(d, p, m) {
    let T = d;
    if (d && !m && typeof d == "object") {
      if (N.endsWith(p, "{}"))
        p = n ? p : p.slice(0, -2), d = JSON.stringify(d);
      else if (N.isArray(d) && rA(d) || (N.isFileList(d) || N.endsWith(p, "[]")) && (T = N.toArray(d)))
        return p = jm(p), T.forEach(function(E, R) {
          !(N.isUndefined(E) || E === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? nd([p], R, o) : a === null ? p : p + "[]",
            c(E)
          );
        }), !1;
    }
    return Nc(d) ? !0 : (t.append(nd(m, p, o), c(d)), !1);
  }
  const l = [], f = Object.assign(nA, {
    defaultVisitor: _,
    convertValue: c,
    isVisitable: Nc
  });
  function h(d, p) {
    if (!N.isUndefined(d)) {
      if (l.indexOf(d) !== -1)
        throw Error("Circular reference detected in " + p.join("."));
      l.push(d), N.forEach(d, function(T, O) {
        (!(N.isUndefined(T) || T === null) && i.call(
          t,
          T,
          N.isString(O) ? O.trim() : O,
          p,
          f
        )) === !0 && h(T, p ? p.concat(O) : [O]);
      }), l.pop();
    }
  }
  if (!N.isObject(e))
    throw new TypeError("data must be an object");
  return h(e), t;
}
function id(e) {
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
function Ml(e, t) {
  this._pairs = [], e && Us(e, this, t);
}
const Vm = Ml.prototype;
Vm.append = function(t, r) {
  this._pairs.push([t, r]);
};
Vm.toString = function(t) {
  const r = t ? function(n) {
    return t.call(this, n, id);
  } : id;
  return this._pairs.map(function(i) {
    return r(i[0]) + "=" + r(i[1]);
  }, "").join("&");
};
function iA(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Wm(e, t, r) {
  if (!t)
    return e;
  const n = r && r.encode || iA, i = r && r.serialize;
  let o;
  if (i ? o = i(t, r) : o = N.isURLSearchParams(t) ? t.toString() : new Ml(t, r).toString(n), o) {
    const a = e.indexOf("#");
    a !== -1 && (e = e.slice(0, a)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class oA {
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
    N.forEach(this.handlers, function(n) {
      n !== null && t(n);
    });
  }
}
const od = oA, Xm = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, aA = typeof URLSearchParams < "u" ? URLSearchParams : Ml, sA = typeof FormData < "u" ? FormData : null, uA = typeof Blob < "u" ? Blob : null, cA = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), lA = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), Wt = {
  isBrowser: !0,
  classes: {
    URLSearchParams: aA,
    FormData: sA,
    Blob: uA
  },
  isStandardBrowserEnv: cA,
  isStandardBrowserWebWorkerEnv: lA,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function _A(e, t) {
  return Us(e, new Wt.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, i, o) {
      return Wt.isNode && N.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function fA(e) {
  return N.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function dA(e) {
  const t = {}, r = Object.keys(e);
  let n;
  const i = r.length;
  let o;
  for (n = 0; n < i; n++)
    o = r[n], t[o] = e[o];
  return t;
}
function Ym(e) {
  function t(r, n, i, o) {
    let a = r[o++];
    const s = Number.isFinite(+a), u = o >= r.length;
    return a = !a && N.isArray(i) ? i.length : a, u ? (N.hasOwnProp(i, a) ? i[a] = [i[a], n] : i[a] = n, !s) : ((!i[a] || !N.isObject(i[a])) && (i[a] = []), t(r, n, i[a], o) && N.isArray(i[a]) && (i[a] = dA(i[a])), !s);
  }
  if (N.isFormData(e) && N.isFunction(e.entries)) {
    const r = {};
    return N.forEachEntry(e, (n, i) => {
      t(fA(n), i, r, 0);
    }), r;
  }
  return null;
}
const hA = {
  "Content-Type": void 0
};
function pA(e, t, r) {
  if (N.isString(e))
    try {
      return (t || JSON.parse)(e), N.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(e);
}
const ws = {
  transitional: Xm,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, r) {
    const n = r.getContentType() || "", i = n.indexOf("application/json") > -1, o = N.isObject(t);
    if (o && N.isHTMLForm(t) && (t = new FormData(t)), N.isFormData(t))
      return i && i ? JSON.stringify(Ym(t)) : t;
    if (N.isArrayBuffer(t) || N.isBuffer(t) || N.isStream(t) || N.isFile(t) || N.isBlob(t))
      return t;
    if (N.isArrayBufferView(t))
      return t.buffer;
    if (N.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let s;
    if (o) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return _A(t, this.formSerializer).toString();
      if ((s = N.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const u = this.env && this.env.FormData;
        return Us(
          s ? { "files[]": t } : t,
          u && new u(),
          this.formSerializer
        );
      }
    }
    return o || i ? (r.setContentType("application/json", !1), pA(t)) : t;
  }],
  transformResponse: [function(t) {
    const r = this.transitional || ws.transitional, n = r && r.forcedJSONParsing, i = this.responseType === "json";
    if (t && N.isString(t) && (n && !this.responseType || i)) {
      const a = !(r && r.silentJSONParsing) && i;
      try {
        return JSON.parse(t);
      } catch (s) {
        if (a)
          throw s.name === "SyntaxError" ? le.from(s, le.ERR_BAD_RESPONSE, this, null, this.response) : s;
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
    FormData: Wt.classes.FormData,
    Blob: Wt.classes.Blob
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
N.forEach(["delete", "get", "head"], function(t) {
  ws.headers[t] = {};
});
N.forEach(["post", "put", "patch"], function(t) {
  ws.headers[t] = N.merge(hA);
});
const kl = ws, mA = N.toObjectSet([
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
]), TA = (e) => {
  const t = {};
  let r, n, i;
  return e && e.split(`
`).forEach(function(a) {
    i = a.indexOf(":"), r = a.substring(0, i).trim().toLowerCase(), n = a.substring(i + 1).trim(), !(!r || t[r] && mA[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n);
  }), t;
}, ad = Symbol("internals");
function Ri(e) {
  return e && String(e).trim().toLowerCase();
}
function Oa(e) {
  return e === !1 || e == null ? e : N.isArray(e) ? e.map(Oa) : String(e);
}
function EA(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const OA = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Gu(e, t, r, n, i) {
  if (N.isFunction(n))
    return n.call(this, t, r);
  if (i && (t = r), !!N.isString(t)) {
    if (N.isString(n))
      return t.indexOf(n) !== -1;
    if (N.isRegExp(n))
      return n.test(t);
  }
}
function bA(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function RA(e, t) {
  const r = N.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + r, {
      value: function(i, o, a) {
        return this[n].call(this, t, i, o, a);
      },
      configurable: !0
    });
  });
}
class Ps {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    const i = this;
    function o(s, u, c) {
      const _ = Ri(u);
      if (!_)
        throw new Error("header name must be a non-empty string");
      const l = N.findKey(i, _);
      (!l || i[l] === void 0 || c === !0 || c === void 0 && i[l] !== !1) && (i[l || u] = Oa(s));
    }
    const a = (s, u) => N.forEach(s, (c, _) => o(c, _, u));
    return N.isPlainObject(t) || t instanceof this.constructor ? a(t, r) : N.isString(t) && (t = t.trim()) && !OA(t) ? a(TA(t), r) : t != null && o(r, t, n), this;
  }
  get(t, r) {
    if (t = Ri(t), t) {
      const n = N.findKey(this, t);
      if (n) {
        const i = this[n];
        if (!r)
          return i;
        if (r === !0)
          return EA(i);
        if (N.isFunction(r))
          return r.call(this, i, n);
        if (N.isRegExp(r))
          return r.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = Ri(t), t) {
      const n = N.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || Gu(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let i = !1;
    function o(a) {
      if (a = Ri(a), a) {
        const s = N.findKey(n, a);
        s && (!r || Gu(n, n[s], s, r)) && (delete n[s], i = !0);
      }
    }
    return N.isArray(t) ? t.forEach(o) : o(t), i;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length, i = !1;
    for (; n--; ) {
      const o = r[n];
      (!t || Gu(this, this[o], o, t, !0)) && (delete this[o], i = !0);
    }
    return i;
  }
  normalize(t) {
    const r = this, n = {};
    return N.forEach(this, (i, o) => {
      const a = N.findKey(n, o);
      if (a) {
        r[a] = Oa(i), delete r[o];
        return;
      }
      const s = t ? bA(o) : String(o).trim();
      s !== o && delete r[o], r[s] = Oa(i), n[s] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = /* @__PURE__ */ Object.create(null);
    return N.forEach(this, (n, i) => {
      n != null && n !== !1 && (r[i] = t && N.isArray(n) ? n.join(", ") : n);
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
    return r.forEach((i) => n.set(i)), n;
  }
  static accessor(t) {
    const n = (this[ad] = this[ad] = {
      accessors: {}
    }).accessors, i = this.prototype;
    function o(a) {
      const s = Ri(a);
      n[s] || (RA(i, a), n[s] = !0);
    }
    return N.isArray(t) ? t.forEach(o) : o(t), this;
  }
}
Ps.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
N.freezeMethods(Ps.prototype);
N.freezeMethods(Ps);
const cr = Ps;
function Cu(e, t) {
  const r = this || kl, n = t || r, i = cr.from(n.headers);
  let o = n.data;
  return N.forEach(e, function(s) {
    o = s.call(r, o, i.normalize(), t ? t.status : void 0);
  }), i.normalize(), o;
}
function Km(e) {
  return !!(e && e.__CANCEL__);
}
function Ho(e, t, r) {
  le.call(this, e ?? "canceled", le.ERR_CANCELED, t, r), this.name = "CanceledError";
}
N.inherits(Ho, le, {
  __CANCEL__: !0
});
function vA(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? e(r) : t(new le(
    "Request failed with status code " + r.status,
    [le.ERR_BAD_REQUEST, le.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
const gA = Wt.isStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  function() {
    return {
      write: function(r, n, i, o, a, s) {
        const u = [];
        u.push(r + "=" + encodeURIComponent(n)), N.isNumber(i) && u.push("expires=" + new Date(i).toGMTString()), N.isString(o) && u.push("path=" + o), N.isString(a) && u.push("domain=" + a), s === !0 && u.push("secure"), document.cookie = u.join("; ");
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
function IA(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function NA(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function $m(e, t) {
  return e && !IA(t) ? NA(e, t) : t;
}
const AA = Wt.isStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = /(msie|trident)/i.test(navigator.userAgent), r = document.createElement("a");
    let n;
    function i(o) {
      let a = o;
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
    return n = i(window.location.href), function(a) {
      const s = N.isString(a) ? i(a) : a;
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
function yA(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function SA(e, t) {
  e = e || 10;
  const r = new Array(e), n = new Array(e);
  let i = 0, o = 0, a;
  return t = t !== void 0 ? t : 1e3, function(u) {
    const c = Date.now(), _ = n[o];
    a || (a = c), r[i] = u, n[i] = c;
    let l = o, f = 0;
    for (; l !== i; )
      f += r[l++], l = l % e;
    if (i = (i + 1) % e, i === o && (o = (o + 1) % e), c - a < t)
      return;
    const h = _ && c - _;
    return h ? Math.round(f * 1e3 / h) : void 0;
  };
}
function sd(e, t) {
  let r = 0;
  const n = SA(50, 250);
  return (i) => {
    const o = i.loaded, a = i.lengthComputable ? i.total : void 0, s = o - r, u = n(s), c = o <= a;
    r = o;
    const _ = {
      loaded: o,
      total: a,
      progress: a ? o / a : void 0,
      bytes: s,
      rate: u || void 0,
      estimated: u && a && c ? (a - o) / u : void 0,
      event: i
    };
    _[t ? "download" : "upload"] = !0, e(_);
  };
}
const DA = typeof XMLHttpRequest < "u", GA = DA && function(e) {
  return new Promise(function(r, n) {
    let i = e.data;
    const o = cr.from(e.headers).normalize(), a = e.responseType;
    let s;
    function u() {
      e.cancelToken && e.cancelToken.unsubscribe(s), e.signal && e.signal.removeEventListener("abort", s);
    }
    N.isFormData(i) && (Wt.isStandardBrowserEnv || Wt.isStandardBrowserWebWorkerEnv ? o.setContentType(!1) : o.setContentType("multipart/form-data;", !1));
    let c = new XMLHttpRequest();
    if (e.auth) {
      const h = e.auth.username || "", d = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      o.set("Authorization", "Basic " + btoa(h + ":" + d));
    }
    const _ = $m(e.baseURL, e.url);
    c.open(e.method.toUpperCase(), Wm(_, e.params, e.paramsSerializer), !0), c.timeout = e.timeout;
    function l() {
      if (!c)
        return;
      const h = cr.from(
        "getAllResponseHeaders" in c && c.getAllResponseHeaders()
      ), p = {
        data: !a || a === "text" || a === "json" ? c.responseText : c.response,
        status: c.status,
        statusText: c.statusText,
        headers: h,
        config: e,
        request: c
      };
      vA(function(T) {
        r(T), u();
      }, function(T) {
        n(T), u();
      }, p), c = null;
    }
    if ("onloadend" in c ? c.onloadend = l : c.onreadystatechange = function() {
      !c || c.readyState !== 4 || c.status === 0 && !(c.responseURL && c.responseURL.indexOf("file:") === 0) || setTimeout(l);
    }, c.onabort = function() {
      c && (n(new le("Request aborted", le.ECONNABORTED, e, c)), c = null);
    }, c.onerror = function() {
      n(new le("Network Error", le.ERR_NETWORK, e, c)), c = null;
    }, c.ontimeout = function() {
      let d = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const p = e.transitional || Xm;
      e.timeoutErrorMessage && (d = e.timeoutErrorMessage), n(new le(
        d,
        p.clarifyTimeoutError ? le.ETIMEDOUT : le.ECONNABORTED,
        e,
        c
      )), c = null;
    }, Wt.isStandardBrowserEnv) {
      const h = (e.withCredentials || AA(_)) && e.xsrfCookieName && gA.read(e.xsrfCookieName);
      h && o.set(e.xsrfHeaderName, h);
    }
    i === void 0 && o.setContentType(null), "setRequestHeader" in c && N.forEach(o.toJSON(), function(d, p) {
      c.setRequestHeader(p, d);
    }), N.isUndefined(e.withCredentials) || (c.withCredentials = !!e.withCredentials), a && a !== "json" && (c.responseType = e.responseType), typeof e.onDownloadProgress == "function" && c.addEventListener("progress", sd(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && c.upload && c.upload.addEventListener("progress", sd(e.onUploadProgress)), (e.cancelToken || e.signal) && (s = (h) => {
      c && (n(!h || h.type ? new Ho(null, e, c) : h), c.abort(), c = null);
    }, e.cancelToken && e.cancelToken.subscribe(s), e.signal && (e.signal.aborted ? s() : e.signal.addEventListener("abort", s)));
    const f = yA(_);
    if (f && Wt.protocols.indexOf(f) === -1) {
      n(new le("Unsupported protocol " + f + ":", le.ERR_BAD_REQUEST, e));
      return;
    }
    c.send(i || null);
  });
}, ba = {
  http: tA,
  xhr: GA
};
N.forEach(ba, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const CA = {
  getAdapter: (e) => {
    e = N.isArray(e) ? e : [e];
    const { length: t } = e;
    let r, n;
    for (let i = 0; i < t && (r = e[i], !(n = N.isString(r) ? ba[r.toLowerCase()] : r)); i++)
      ;
    if (!n)
      throw n === !1 ? new le(
        `Adapter ${r} is not supported by the environment`,
        "ERR_NOT_SUPPORT"
      ) : new Error(
        N.hasOwnProp(ba, r) ? `Adapter '${r}' is not available in the build` : `Unknown adapter '${r}'`
      );
    if (!N.isFunction(n))
      throw new TypeError("adapter is not a function");
    return n;
  },
  adapters: ba
};
function Uu(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Ho(null, e);
}
function ud(e) {
  return Uu(e), e.headers = cr.from(e.headers), e.data = Cu.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), CA.getAdapter(e.adapter || kl.adapter)(e).then(function(n) {
    return Uu(e), n.data = Cu.call(
      e,
      e.transformResponse,
      n
    ), n.headers = cr.from(n.headers), n;
  }, function(n) {
    return Km(n) || (Uu(e), n && n.response && (n.response.data = Cu.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = cr.from(n.response.headers))), Promise.reject(n);
  });
}
const cd = (e) => e instanceof cr ? e.toJSON() : e;
function Zn(e, t) {
  t = t || {};
  const r = {};
  function n(c, _, l) {
    return N.isPlainObject(c) && N.isPlainObject(_) ? N.merge.call({ caseless: l }, c, _) : N.isPlainObject(_) ? N.merge({}, _) : N.isArray(_) ? _.slice() : _;
  }
  function i(c, _, l) {
    if (N.isUndefined(_)) {
      if (!N.isUndefined(c))
        return n(void 0, c, l);
    } else
      return n(c, _, l);
  }
  function o(c, _) {
    if (!N.isUndefined(_))
      return n(void 0, _);
  }
  function a(c, _) {
    if (N.isUndefined(_)) {
      if (!N.isUndefined(c))
        return n(void 0, c);
    } else
      return n(void 0, _);
  }
  function s(c, _, l) {
    if (l in t)
      return n(c, _);
    if (l in e)
      return n(void 0, c);
  }
  const u = {
    url: o,
    method: o,
    data: o,
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
    headers: (c, _) => i(cd(c), cd(_), !0)
  };
  return N.forEach(Object.keys(Object.assign({}, e, t)), function(_) {
    const l = u[_] || i, f = l(e[_], t[_], _);
    N.isUndefined(f) && l !== s || (r[_] = f);
  }), r;
}
const zm = "1.4.0", Ll = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Ll[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const ld = {};
Ll.transitional = function(t, r, n) {
  function i(o, a) {
    return "[Axios v" + zm + "] Transitional option '" + o + "'" + a + (n ? ". " + n : "");
  }
  return (o, a, s) => {
    if (t === !1)
      throw new le(
        i(a, " has been removed" + (r ? " in " + r : "")),
        le.ERR_DEPRECATED
      );
    return r && !ld[a] && (ld[a] = !0, console.warn(
      i(
        a,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(o, a, s) : !0;
  };
};
function UA(e, t, r) {
  if (typeof e != "object")
    throw new le("options must be an object", le.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let i = n.length;
  for (; i-- > 0; ) {
    const o = n[i], a = t[o];
    if (a) {
      const s = e[o], u = s === void 0 || a(s, o, e);
      if (u !== !0)
        throw new le("option " + o + " must be " + u, le.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new le("Unknown option " + o, le.ERR_BAD_OPTION);
  }
}
const Ac = {
  assertOptions: UA,
  validators: Ll
}, vr = Ac.validators;
class qa {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new od(),
      response: new od()
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
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = Zn(this.defaults, r);
    const { transitional: n, paramsSerializer: i, headers: o } = r;
    n !== void 0 && Ac.assertOptions(n, {
      silentJSONParsing: vr.transitional(vr.boolean),
      forcedJSONParsing: vr.transitional(vr.boolean),
      clarifyTimeoutError: vr.transitional(vr.boolean)
    }, !1), i != null && (N.isFunction(i) ? r.paramsSerializer = {
      serialize: i
    } : Ac.assertOptions(i, {
      encode: vr.function,
      serialize: vr.function
    }, !0)), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let a;
    a = o && N.merge(
      o.common,
      o[r.method]
    ), a && N.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (d) => {
        delete o[d];
      }
    ), r.headers = cr.concat(a, o);
    const s = [];
    let u = !0;
    this.interceptors.request.forEach(function(p) {
      typeof p.runWhen == "function" && p.runWhen(r) === !1 || (u = u && p.synchronous, s.unshift(p.fulfilled, p.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function(p) {
      c.push(p.fulfilled, p.rejected);
    });
    let _, l = 0, f;
    if (!u) {
      const d = [ud.bind(this), void 0];
      for (d.unshift.apply(d, s), d.push.apply(d, c), f = d.length, _ = Promise.resolve(r); l < f; )
        _ = _.then(d[l++], d[l++]);
      return _;
    }
    f = s.length;
    let h = r;
    for (l = 0; l < f; ) {
      const d = s[l++], p = s[l++];
      try {
        h = d(h);
      } catch (m) {
        p.call(this, m);
        break;
      }
    }
    try {
      _ = ud.call(this, h);
    } catch (d) {
      return Promise.reject(d);
    }
    for (l = 0, f = c.length; l < f; )
      _ = _.then(c[l++], c[l++]);
    return _;
  }
  getUri(t) {
    t = Zn(this.defaults, t);
    const r = $m(t.baseURL, t.url);
    return Wm(r, t.params, t.paramsSerializer);
  }
}
N.forEach(["delete", "get", "head", "options"], function(t) {
  qa.prototype[t] = function(r, n) {
    return this.request(Zn(n || {}, {
      method: t,
      url: r,
      data: (n || {}).data
    }));
  };
});
N.forEach(["post", "put", "patch"], function(t) {
  function r(n) {
    return function(o, a, s) {
      return this.request(Zn(s || {}, {
        method: t,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: a
      }));
    };
  }
  qa.prototype[t] = r(), qa.prototype[t + "Form"] = r(!0);
});
const Ra = qa;
class Bl {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(o) {
      r = o;
    });
    const n = this;
    this.promise.then((i) => {
      if (!n._listeners)
        return;
      let o = n._listeners.length;
      for (; o-- > 0; )
        n._listeners[o](i);
      n._listeners = null;
    }), this.promise.then = (i) => {
      let o;
      const a = new Promise((s) => {
        n.subscribe(s), o = s;
      }).then(i);
      return a.cancel = function() {
        n.unsubscribe(o);
      }, a;
    }, t(function(o, a, s) {
      n.reason || (n.reason = new Ho(o, a, s), r(n.reason));
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
      token: new Bl(function(i) {
        t = i;
      }),
      cancel: t
    };
  }
}
const wA = Bl;
function PA(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function HA(e) {
  return N.isObject(e) && e.isAxiosError === !0;
}
const yc = {
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
Object.entries(yc).forEach(([e, t]) => {
  yc[t] = e;
});
const MA = yc;
function qm(e) {
  const t = new Ra(e), r = Um(Ra.prototype.request, t);
  return N.extend(r, Ra.prototype, t, { allOwnKeys: !0 }), N.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(i) {
    return qm(Zn(e, i));
  }, r;
}
const Fe = qm(kl);
Fe.Axios = Ra;
Fe.CanceledError = Ho;
Fe.CancelToken = wA;
Fe.isCancel = Km;
Fe.VERSION = zm;
Fe.toFormData = Us;
Fe.AxiosError = le;
Fe.Cancel = Fe.CanceledError;
Fe.all = function(t) {
  return Promise.all(t);
};
Fe.spread = PA;
Fe.isAxiosError = HA;
Fe.mergeConfig = Zn;
Fe.AxiosHeaders = cr;
Fe.formToJSON = (e) => Ym(N.isHTMLForm(e) ? new FormData(e) : e);
Fe.HttpStatusCode = MA;
Fe.default = Fe;
const kA = Fe, LA = kA.create({
  baseURL: Lp,
  withCredentials: !0
}), BA = {
  MAIN: "/",
  EDITOR: "/edit",
  ABOUT: "/about",
  PROFILE: "/users"
}, Jm = () => {
  const [e, t] = dt([]);
  return {
    on: (r) => {
      Object.entries(r).forEach(([n, i]) => {
        const o = (a) => {
          if (a.altKey && a.key === n.toLowerCase())
            return a.preventDefault(), i?.(), !1;
        };
        t([...e, o]), document.addEventListener("keydown", o);
      });
    },
    clear: () => {
      e.forEach((r) => {
        document.removeEventListener("keydown", r);
      });
    }
  };
}, xA = (e = !1) => {
  const [t, r] = dt(e);
  return {
    off: () => r(!1),
    on: () => r(!0),
    toggle: () => r(!t),
    val: t
  };
}, FA = (e, t) => {
  const r = ae();
  return (...n) => {
    r.current && clearTimeout(r.current), r.current = setTimeout(() => {
      e(...n);
    }, t);
  };
}, Sc = ({ when: e, children: t }) => e ? t : null, Qm = hs({}), jA = async () => Promise.all([
  Promise.resolve().then(() => $U),
  import("./use-gesture-react.esm-7899cdd1.mjs")
]), xl = ({ children: e }) => {
  const t = ae(), r = ae(), n = xA(), i = async () => {
    const [a, s] = await jA();
    t.current = a, r.current = s, n.on();
  };
  Le(() => {
    i();
  }, []);
  const o = Sr(
    () => ({
      Spring: t.current,
      Gesture: r.current,
      isLoaded: n.val
    }),
    [n.val]
  );
  return /* @__PURE__ */ K(Qm.Provider, { value: o, children: /* @__PURE__ */ K(Sc, { when: n.val, children: e }) });
}, Hs = () => ot(Qm);
var Fl, X, Zm, rn, _d, eT, Dc, va = {}, tT = [], VA = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Ms = Array.isArray;
function Gr(e, t) {
  for (var r in t)
    e[r] = t[r];
  return e;
}
function rT(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function fd(e, t, r) {
  var n, i, o, a = {};
  for (o in t)
    o == "key" ? n = t[o] : o == "ref" ? i = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Fl.call(arguments, 2) : r), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return ga(e, a, n, i, null);
}
function ga(e, t, r, n, i) {
  var o = { type: e, props: t, key: r, ref: n, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Zm };
  return i == null && X.vnode != null && X.vnode(o), o;
}
function ro(e) {
  return e.children;
}
function lr(e, t) {
  this.props = e, this.context = t;
}
function Ja(e, t) {
  if (t == null)
    return e.__ ? Ja(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var r; t < e.__k.length; t++)
    if ((r = e.__k[t]) != null && r.__e != null)
      return r.__e;
  return typeof e.type == "function" ? Ja(e) : null;
}
function nT(e) {
  var t, r;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((r = e.__k[t]) != null && r.__e != null) {
        e.__e = e.__c.base = r.__e;
        break;
      }
    return nT(e);
  }
}
function dd(e) {
  (!e.__d && (e.__d = !0) && rn.push(e) && !Qa.__r++ || _d !== X.debounceRendering) && ((_d = X.debounceRendering) || eT)(Qa);
}
function Qa() {
  var e, t, r, n, i, o, a, s, u;
  for (rn.sort(Dc); e = rn.shift(); )
    e.__d && (t = rn.length, n = void 0, i = void 0, o = void 0, s = (a = (r = e).__v).__e, (u = r.__P) && (n = [], i = [], (o = Gr({}, a)).__v = a.__v + 1, sT(u, a, o, r.__n, u.ownerSVGElement !== void 0, a.__h != null ? [s] : null, n, s ?? Ja(a), a.__h, i), YA(n, a, i), a.__e != s && nT(a)), rn.length > t && rn.sort(Dc));
  Qa.__r = 0;
}
function iT(e, t, r, n, i, o, a, s, u, c, _) {
  var l, f, h, d, p, m, T, O, E, R, b = 0, g = n && n.__k || tT, A = g.length, G = A, D = t.length;
  for (r.__k = [], l = 0; l < D; l++)
    (d = r.__k[l] = (d = t[l]) == null || typeof d == "boolean" || typeof d == "function" ? null : typeof d == "string" || typeof d == "number" || typeof d == "bigint" ? ga(null, d, null, null, d) : Ms(d) ? ga(ro, { children: d }, null, null, null) : d.__b > 0 ? ga(d.type, d.props, d.key, d.ref ? d.ref : null, d.__v) : d) != null && (d.__ = r, d.__b = r.__b + 1, (O = WA(d, g, T = l + b, G)) === -1 ? h = va : (h = g[O] || va, g[O] = void 0, G--), sT(e, d, h, i, o, a, s, u, c, _), p = d.__e, (f = d.ref) && h.ref != f && (h.ref && jl(h.ref, null, d), _.push(f, d.__c || p, d)), p != null && (m == null && (m = p), R = !(E = h === va || h.__v === null) && O === T, E ? O == -1 && b-- : O !== T && (O === T + 1 ? (b++, R = !0) : O > T ? G > D - T ? (b += O - T, R = !0) : b-- : b = O < T && O == T - 1 ? O - T : 0), T = l + b, R = R || O == l && !E, typeof d.type != "function" || O === T && h.__k !== d.__k ? typeof d.type == "function" || R ? d.__d !== void 0 ? (u = d.__d, d.__d = void 0) : u = p.nextSibling : u = aT(e, p, u) : u = oT(d, u, e), typeof r.type == "function" && (r.__d = u)));
  for (r.__e = m, l = A; l--; )
    g[l] != null && (typeof r.type == "function" && g[l].__e != null && g[l].__e == r.__d && (r.__d = g[l].__e.nextSibling), uT(g[l], g[l]));
}
function oT(e, t, r) {
  for (var n, i = e.__k, o = 0; i && o < i.length; o++)
    (n = i[o]) && (n.__ = e, t = typeof n.type == "function" ? oT(n, t, r) : aT(r, n.__e, t));
  return t;
}
function Za(e, t) {
  return t = t || [], e == null || typeof e == "boolean" || (Ms(e) ? e.some(function(r) {
    Za(r, t);
  }) : t.push(e)), t;
}
function aT(e, t, r) {
  return r == null || r.parentNode !== e ? e.insertBefore(t, null) : t == r && t.parentNode != null || e.insertBefore(t, r), t.nextSibling;
}
function WA(e, t, r, n) {
  var i = e.key, o = e.type, a = r - 1, s = r + 1, u = t[r];
  if (u === null || u && i == u.key && o === u.type)
    return r;
  if (n > (u != null ? 1 : 0))
    for (; a >= 0 || s < t.length; ) {
      if (a >= 0) {
        if ((u = t[a]) && i == u.key && o === u.type)
          return a;
        a--;
      }
      if (s < t.length) {
        if ((u = t[s]) && i == u.key && o === u.type)
          return s;
        s++;
      }
    }
  return -1;
}
function XA(e, t, r, n, i) {
  var o;
  for (o in r)
    o === "children" || o === "key" || o in t || es(e, o, null, r[o], n);
  for (o in t)
    i && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || r[o] === t[o] || es(e, o, t[o], r[o], n);
}
function hd(e, t, r) {
  t[0] === "-" ? e.setProperty(t, r ?? "") : e[t] = r == null ? "" : typeof r != "number" || VA.test(t) ? r : r + "px";
}
function es(e, t, r, n, i) {
  var o;
  e:
    if (t === "style")
      if (typeof r == "string")
        e.style.cssText = r;
      else {
        if (typeof n == "string" && (e.style.cssText = n = ""), n)
          for (t in n)
            r && t in r || hd(e.style, t, "");
        if (r)
          for (t in r)
            n && r[t] === n[t] || hd(e.style, t, r[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = r, r ? n || e.addEventListener(t, o ? md : pd, o) : e.removeEventListener(t, o ? md : pd, o);
    else if (t !== "dangerouslySetInnerHTML") {
      if (i)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "width" && t !== "height" && t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t !== "rowSpan" && t !== "colSpan" && t in e)
        try {
          e[t] = r ?? "";
          break e;
        } catch {
        }
      typeof r == "function" || (r == null || r === !1 && t[4] !== "-" ? e.removeAttribute(t) : e.setAttribute(t, r));
    }
}
function pd(e) {
  return this.l[e.type + !1](X.event ? X.event(e) : e);
}
function md(e) {
  return this.l[e.type + !0](X.event ? X.event(e) : e);
}
function sT(e, t, r, n, i, o, a, s, u, c) {
  var _, l, f, h, d, p, m, T, O, E, R, b, g, A, G, D = t.type;
  if (t.constructor !== void 0)
    return null;
  r.__h != null && (u = r.__h, s = t.__e = r.__e, t.__h = null, o = [s]), (_ = X.__b) && _(t);
  try {
    e:
      if (typeof D == "function") {
        if (T = t.props, O = (_ = D.contextType) && n[_.__c], E = _ ? O ? O.props.value : _.__ : n, r.__c ? m = (l = t.__c = r.__c).__ = l.__E : ("prototype" in D && D.prototype.render ? t.__c = l = new D(T, E) : (t.__c = l = new lr(T, E), l.constructor = D, l.render = $A), O && O.sub(l), l.props = T, l.state || (l.state = {}), l.context = E, l.__n = n, f = l.__d = !0, l.__h = [], l._sb = []), l.__s == null && (l.__s = l.state), D.getDerivedStateFromProps != null && (l.__s == l.state && (l.__s = Gr({}, l.__s)), Gr(l.__s, D.getDerivedStateFromProps(T, l.__s))), h = l.props, d = l.state, l.__v = t, f)
          D.getDerivedStateFromProps == null && l.componentWillMount != null && l.componentWillMount(), l.componentDidMount != null && l.__h.push(l.componentDidMount);
        else {
          if (D.getDerivedStateFromProps == null && T !== h && l.componentWillReceiveProps != null && l.componentWillReceiveProps(T, E), !l.__e && (l.shouldComponentUpdate != null && l.shouldComponentUpdate(T, l.__s, E) === !1 || t.__v === r.__v)) {
            for (t.__v !== r.__v && (l.props = T, l.state = l.__s, l.__d = !1), t.__e = r.__e, t.__k = r.__k, t.__k.forEach(function(H) {
              H && (H.__ = t);
            }), R = 0; R < l._sb.length; R++)
              l.__h.push(l._sb[R]);
            l._sb = [], l.__h.length && a.push(l);
            break e;
          }
          l.componentWillUpdate != null && l.componentWillUpdate(T, l.__s, E), l.componentDidUpdate != null && l.__h.push(function() {
            l.componentDidUpdate(h, d, p);
          });
        }
        if (l.context = E, l.props = T, l.__P = e, l.__e = !1, b = X.__r, g = 0, "prototype" in D && D.prototype.render) {
          for (l.state = l.__s, l.__d = !1, b && b(t), _ = l.render(l.props, l.state, l.context), A = 0; A < l._sb.length; A++)
            l.__h.push(l._sb[A]);
          l._sb = [];
        } else
          do
            l.__d = !1, b && b(t), _ = l.render(l.props, l.state, l.context), l.state = l.__s;
          while (l.__d && ++g < 25);
        l.state = l.__s, l.getChildContext != null && (n = Gr(Gr({}, n), l.getChildContext())), f || l.getSnapshotBeforeUpdate == null || (p = l.getSnapshotBeforeUpdate(h, d)), iT(e, Ms(G = _ != null && _.type === ro && _.key == null ? _.props.children : _) ? G : [G], t, r, n, i, o, a, s, u, c), l.base = t.__e, t.__h = null, l.__h.length && a.push(l), m && (l.__E = l.__ = null);
      } else
        o == null && t.__v === r.__v ? (t.__k = r.__k, t.__e = r.__e) : t.__e = KA(r.__e, t, r, n, i, o, a, u, c);
    (_ = X.diffed) && _(t);
  } catch (H) {
    t.__v = null, (u || o != null) && (t.__e = s, t.__h = !!u, o[o.indexOf(s)] = null), X.__e(H, t, r);
  }
}
function YA(e, t, r) {
  for (var n = 0; n < r.length; n++)
    jl(r[n], r[++n], r[++n]);
  X.__c && X.__c(t, e), e.some(function(i) {
    try {
      e = i.__h, i.__h = [], e.some(function(o) {
        o.call(i);
      });
    } catch (o) {
      X.__e(o, i.__v);
    }
  });
}
function KA(e, t, r, n, i, o, a, s, u) {
  var c, _, l, f = r.props, h = t.props, d = t.type, p = 0;
  if (d === "svg" && (i = !0), o != null) {
    for (; p < o.length; p++)
      if ((c = o[p]) && "setAttribute" in c == !!d && (d ? c.localName === d : c.nodeType === 3)) {
        e = c, o[p] = null;
        break;
      }
  }
  if (e == null) {
    if (d === null)
      return document.createTextNode(h);
    e = i ? document.createElementNS("http://www.w3.org/2000/svg", d) : document.createElement(d, h.is && h), o = null, s = !1;
  }
  if (d === null)
    f === h || s && e.data === h || (e.data = h);
  else {
    if (o = o && Fl.call(e.childNodes), _ = (f = r.props || va).dangerouslySetInnerHTML, l = h.dangerouslySetInnerHTML, !s) {
      if (o != null)
        for (f = {}, p = 0; p < e.attributes.length; p++)
          f[e.attributes[p].name] = e.attributes[p].value;
      (l || _) && (l && (_ && l.__html == _.__html || l.__html === e.innerHTML) || (e.innerHTML = l && l.__html || ""));
    }
    if (XA(e, h, f, i, s), l)
      t.__k = [];
    else if (iT(e, Ms(p = t.props.children) ? p : [p], t, r, n, i && d !== "foreignObject", o, a, o ? o[0] : r.__k && Ja(r, 0), s, u), o != null)
      for (p = o.length; p--; )
        o[p] != null && rT(o[p]);
    s || ("value" in h && (p = h.value) !== void 0 && (p !== e.value || d === "progress" && !p || d === "option" && p !== f.value) && es(e, "value", p, f.value, !1), "checked" in h && (p = h.checked) !== void 0 && p !== e.checked && es(e, "checked", p, f.checked, !1));
  }
  return e;
}
function jl(e, t, r) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (n) {
    X.__e(n, r);
  }
}
function uT(e, t, r) {
  var n, i;
  if (X.unmount && X.unmount(e), (n = e.ref) && (n.current && n.current !== e.__e || jl(n, null, t)), (n = e.__c) != null) {
    if (n.componentWillUnmount)
      try {
        n.componentWillUnmount();
      } catch (o) {
        X.__e(o, t);
      }
    n.base = n.__P = null, e.__c = void 0;
  }
  if (n = e.__k)
    for (i = 0; i < n.length; i++)
      n[i] && uT(n[i], t, r || typeof e.type != "function");
  r || e.__e == null || rT(e.__e), e.__ = e.__e = e.__d = void 0;
}
function $A(e, t, r) {
  return this.constructor(e, r);
}
Fl = tT.slice, X = { __e: function(e, t, r, n) {
  for (var i, o, a; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((o = i.constructor) && o.getDerivedStateFromError != null && (i.setState(o.getDerivedStateFromError(e)), a = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, n || {}), a = i.__d), a)
          return i.__E = i;
      } catch (s) {
        e = s;
      }
  throw e;
} }, Zm = 0, lr.prototype.setState = function(e, t) {
  var r;
  r = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Gr({}, this.state), typeof e == "function" && (e = e(Gr({}, r), this.props)), e && Gr(r, e), e != null && this.__v && (t && this._sb.push(t), dd(this));
}, lr.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), dd(this));
}, lr.prototype.render = ro, rn = [], eT = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Dc = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, Qa.__r = 0;
var Gc, ct, wu, Td, Ed = 0, cT = [], Ia = [], Od = X.__b, bd = X.__r, Rd = X.diffed, vd = X.__c, gd = X.unmount;
function zA(e, t) {
  X.__h && X.__h(ct, e, Ed || t), Ed = 0;
  var r = ct.__H || (ct.__H = { __: [], __h: [] });
  return e >= r.__.length && r.__.push({ __V: Ia }), r.__[e];
}
function Rw(e, t) {
  var r = zA(Gc++, 3);
  !X.__s && QA(r.__H, t) && (r.__ = e, r.i = t, ct.__H.__h.push(r));
}
function qA() {
  for (var e; e = cT.shift(); )
    if (e.__P && e.__H)
      try {
        e.__H.__h.forEach(Na), e.__H.__h.forEach(Cc), e.__H.__h = [];
      } catch (t) {
        e.__H.__h = [], X.__e(t, e.__v);
      }
}
X.__b = function(e) {
  ct = null, Od && Od(e);
}, X.__r = function(e) {
  bd && bd(e), Gc = 0;
  var t = (ct = e.__c).__H;
  t && (wu === ct ? (t.__h = [], ct.__h = [], t.__.forEach(function(r) {
    r.__N && (r.__ = r.__N), r.__V = Ia, r.__N = r.i = void 0;
  })) : (t.__h.forEach(Na), t.__h.forEach(Cc), t.__h = [], Gc = 0)), wu = ct;
}, X.diffed = function(e) {
  Rd && Rd(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (cT.push(t) !== 1 && Td === X.requestAnimationFrame || ((Td = X.requestAnimationFrame) || JA)(qA)), t.__H.__.forEach(function(r) {
    r.i && (r.__H = r.i), r.__V !== Ia && (r.__ = r.__V), r.i = void 0, r.__V = Ia;
  })), wu = ct = null;
}, X.__c = function(e, t) {
  t.some(function(r) {
    try {
      r.__h.forEach(Na), r.__h = r.__h.filter(function(n) {
        return !n.__ || Cc(n);
      });
    } catch (n) {
      t.some(function(i) {
        i.__h && (i.__h = []);
      }), t = [], X.__e(n, r.__v);
    }
  }), vd && vd(e, t);
}, X.unmount = function(e) {
  gd && gd(e);
  var t, r = e.__c;
  r && r.__H && (r.__H.__.forEach(function(n) {
    try {
      Na(n);
    } catch (i) {
      t = i;
    }
  }), r.__H = void 0, t && X.__e(t, r.__v));
};
var Id = typeof requestAnimationFrame == "function";
function JA(e) {
  var t, r = function() {
    clearTimeout(n), Id && cancelAnimationFrame(t), setTimeout(e);
  }, n = setTimeout(r, 100);
  Id && (t = requestAnimationFrame(r));
}
function Na(e) {
  var t = ct, r = e.__c;
  typeof r == "function" && (e.__c = void 0, r()), ct = t;
}
function Cc(e) {
  var t = ct;
  e.__c = e.__(), ct = t;
}
function QA(e, t) {
  return !e || e.length !== t.length || t.some(function(r, n) {
    return r !== e[n];
  });
}
const lT = hs(
  {}
), vw = ({ children: e }) => {
  const [t, r] = hO.useMessage(), n = ({ type: i, message: o }) => {
    t.open({
      type: i ?? "info",
      content: o,
      duration: 5
    });
  };
  return /* @__PURE__ */ mt(Ah, { children: [
    r,
    /* @__PURE__ */ K(lT.Provider, { value: { open: n }, children: e })
  ] });
}, ZA = () => ot(lT);
var _T = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, Nd = Pe.createContext && Pe.createContext(_T), Lr = globalThis && globalThis.__assign || function() {
  return Lr = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, Lr.apply(this, arguments);
}, ey = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
  return r;
};
function fT(e) {
  return e && e.map(function(t, r) {
    return Pe.createElement(t.tag, Lr({
      key: r
    }, t.attr), fT(t.child));
  });
}
function Vl(e) {
  return function(t) {
    return Pe.createElement(ty, Lr({
      attr: Lr({}, e.attr)
    }, t), fT(e.child));
  };
}
function ty(e) {
  var t = function(r) {
    var n = e.attr, i = e.size, o = e.title, a = ey(e, ["attr", "size", "title"]), s = i || r.size || "1em", u;
    return r.className && (u = r.className), e.className && (u = (u ? u + " " : "") + e.className), Pe.createElement("svg", Lr({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, r.attr, n, a, {
      className: u,
      style: Lr(Lr({
        color: e.color || r.color
      }, r.style), e.style),
      height: s,
      width: s,
      xmlns: "http://www.w3.org/2000/svg"
    }), o && Pe.createElement("title", null, o), e.children);
  };
  return Nd !== void 0 ? Pe.createElement(Nd.Consumer, null, function(r) {
    return t(r);
  }) : t(_T);
}
function ry(e) {
  return Vl({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" } }] })(e);
}
function gw(e) {
  return Vl({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M145 96l66 746.6L511.8 928l299.6-85.4L878.7 96H145zm610.9 700.6l-244.1 69.6-245.2-69.6-56.7-641.2h603.8l-57.8 641.2zM281 249l1.7 24.3 22.7 253.5h206.5v-.1h112.9l-11.4 118.5L511 672.9v.2h-.8l-102.4-27.7-6.5-73.2h-91l11.3 144.7 188.6 52h1.7v-.4l187.7-51.7 1.7-16.3 21.2-242.2 3.2-24.3H511v.2H389.9l-8.2-94.2h352.1l1.7-19.5 4.8-47.2L742 249H511z" } }] })(e);
}
function ny(e) {
  return Vl({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", stroke: "#000", strokeWidth: "2", d: "M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M5,5 L19,19" } }] })(e);
}
const Ad = ({ children: e, override: t, ...r }) => /* @__PURE__ */ K(pO, { theme: {
  token: { colorPrimary: t }
}, children: /* @__PURE__ */ K(Di, { ...r, style: { minWidth: "85px" }, children: e }) });
var dT = { exports: {} }, Oe = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yd;
function iy() {
  if (yd)
    return Oe;
  yd = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), u = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), _ = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), d;
  d = Symbol.for("react.module.reference");
  function p(m) {
    if (typeof m == "object" && m !== null) {
      var T = m.$$typeof;
      switch (T) {
        case e:
          switch (m = m.type, m) {
            case r:
            case i:
            case n:
            case c:
            case _:
              return m;
            default:
              switch (m = m && m.$$typeof, m) {
                case s:
                case a:
                case u:
                case f:
                case l:
                case o:
                  return m;
                default:
                  return T;
              }
          }
        case t:
          return T;
      }
    }
  }
  return Oe.ContextConsumer = a, Oe.ContextProvider = o, Oe.Element = e, Oe.ForwardRef = u, Oe.Fragment = r, Oe.Lazy = f, Oe.Memo = l, Oe.Portal = t, Oe.Profiler = i, Oe.StrictMode = n, Oe.Suspense = c, Oe.SuspenseList = _, Oe.isAsyncMode = function() {
    return !1;
  }, Oe.isConcurrentMode = function() {
    return !1;
  }, Oe.isContextConsumer = function(m) {
    return p(m) === a;
  }, Oe.isContextProvider = function(m) {
    return p(m) === o;
  }, Oe.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === e;
  }, Oe.isForwardRef = function(m) {
    return p(m) === u;
  }, Oe.isFragment = function(m) {
    return p(m) === r;
  }, Oe.isLazy = function(m) {
    return p(m) === f;
  }, Oe.isMemo = function(m) {
    return p(m) === l;
  }, Oe.isPortal = function(m) {
    return p(m) === t;
  }, Oe.isProfiler = function(m) {
    return p(m) === i;
  }, Oe.isStrictMode = function(m) {
    return p(m) === n;
  }, Oe.isSuspense = function(m) {
    return p(m) === c;
  }, Oe.isSuspenseList = function(m) {
    return p(m) === _;
  }, Oe.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === r || m === i || m === n || m === c || m === _ || m === h || typeof m == "object" && m !== null && (m.$$typeof === f || m.$$typeof === l || m.$$typeof === o || m.$$typeof === a || m.$$typeof === u || m.$$typeof === d || m.getModuleId !== void 0);
  }, Oe.typeOf = p, Oe;
}
dT.exports = iy();
var hT = dT.exports;
function oy(e) {
  function t(w, M, L, W, I) {
    for (var te = 0, C = 0, Te = 0, ue = 0, Re, Z, Xe = 0, at = 0, fe, Je = fe = Re = 0, Ee = 0, Ye = 0, pi = 0, Ke = 0, Xo = L.length, mi = Xo - 1, St, J = "", Me = "", su = "", uu = "", Rr; Ee < Xo; ) {
      if (Z = L.charCodeAt(Ee), Ee === mi && C + ue + Te + te !== 0 && (C !== 0 && (Z = C === 47 ? 10 : 47), ue = Te = te = 0, Xo++, mi++), C + ue + Te + te === 0) {
        if (Ee === mi && (0 < Ye && (J = J.replace(f, "")), 0 < J.trim().length)) {
          switch (Z) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              J += L.charAt(Ee);
          }
          Z = 59;
        }
        switch (Z) {
          case 123:
            for (J = J.trim(), Re = J.charCodeAt(0), fe = 1, Ke = ++Ee; Ee < Xo; ) {
              switch (Z = L.charCodeAt(Ee)) {
                case 123:
                  fe++;
                  break;
                case 125:
                  fe--;
                  break;
                case 47:
                  switch (Z = L.charCodeAt(Ee + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (Je = Ee + 1; Je < mi; ++Je)
                          switch (L.charCodeAt(Je)) {
                            case 47:
                              if (Z === 42 && L.charCodeAt(Je - 1) === 42 && Ee + 2 !== Je) {
                                Ee = Je + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (Z === 47) {
                                Ee = Je + 1;
                                break e;
                              }
                          }
                        Ee = Je;
                      }
                  }
                  break;
                case 91:
                  Z++;
                case 40:
                  Z++;
                case 34:
                case 39:
                  for (; Ee++ < mi && L.charCodeAt(Ee) !== Z; )
                    ;
              }
              if (fe === 0)
                break;
              Ee++;
            }
            switch (fe = L.substring(Ke, Ee), Re === 0 && (Re = (J = J.replace(l, "").trim()).charCodeAt(0)), Re) {
              case 64:
                switch (0 < Ye && (J = J.replace(f, "")), Z = J.charCodeAt(1), Z) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    Ye = M;
                    break;
                  default:
                    Ye = Q;
                }
                if (fe = t(M, Ye, fe, Z, I + 1), Ke = fe.length, 0 < ie && (Ye = r(Q, J, pi), Rr = s(3, fe, Ye, M, Ne, re, Ke, Z, I, W), J = Ye.join(""), Rr !== void 0 && (Ke = (fe = Rr.trim()).length) === 0 && (Z = 0, fe = "")), 0 < Ke)
                  switch (Z) {
                    case 115:
                      J = J.replace(g, a);
                    case 100:
                    case 109:
                    case 45:
                      fe = J + "{" + fe + "}";
                      break;
                    case 107:
                      J = J.replace(O, "$1 $2"), fe = J + "{" + fe + "}", fe = P === 1 || P === 2 && o("@" + fe, 3) ? "@-webkit-" + fe + "@" + fe : "@" + fe;
                      break;
                    default:
                      fe = J + fe, W === 112 && (fe = (Me += fe, ""));
                  }
                else
                  fe = "";
                break;
              default:
                fe = t(M, r(M, J, pi), fe, W, I + 1);
            }
            su += fe, fe = pi = Ye = Je = Re = 0, J = "", Z = L.charCodeAt(++Ee);
            break;
          case 125:
          case 59:
            if (J = (0 < Ye ? J.replace(f, "") : J).trim(), 1 < (Ke = J.length))
              switch (Je === 0 && (Re = J.charCodeAt(0), Re === 45 || 96 < Re && 123 > Re) && (Ke = (J = J.replace(" ", ":")).length), 0 < ie && (Rr = s(1, J, M, w, Ne, re, Me.length, W, I, W)) !== void 0 && (Ke = (J = Rr.trim()).length) === 0 && (J = "\0\0"), Re = J.charCodeAt(0), Z = J.charCodeAt(1), Re) {
                case 0:
                  break;
                case 64:
                  if (Z === 105 || Z === 99) {
                    uu += J + L.charAt(Ee);
                    break;
                  }
                default:
                  J.charCodeAt(Ke - 1) !== 58 && (Me += i(J, Re, Z, J.charCodeAt(2)));
              }
            pi = Ye = Je = Re = 0, J = "", Z = L.charCodeAt(++Ee);
        }
      }
      switch (Z) {
        case 13:
        case 10:
          C === 47 ? C = 0 : 1 + Re === 0 && W !== 107 && 0 < J.length && (Ye = 1, J += "\0"), 0 < ie * Be && s(0, J, M, w, Ne, re, Me.length, W, I, W), re = 1, Ne++;
          break;
        case 59:
        case 125:
          if (C + ue + Te + te === 0) {
            re++;
            break;
          }
        default:
          switch (re++, St = L.charAt(Ee), Z) {
            case 9:
            case 32:
              if (ue + te + C === 0)
                switch (Xe) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    St = "";
                    break;
                  default:
                    Z !== 32 && (St = " ");
                }
              break;
            case 0:
              St = "\\0";
              break;
            case 12:
              St = "\\f";
              break;
            case 11:
              St = "\\v";
              break;
            case 38:
              ue + C + te === 0 && (Ye = pi = 1, St = "\f" + St);
              break;
            case 108:
              if (ue + C + te + x === 0 && 0 < Je)
                switch (Ee - Je) {
                  case 2:
                    Xe === 112 && L.charCodeAt(Ee - 3) === 58 && (x = Xe);
                  case 8:
                    at === 111 && (x = at);
                }
              break;
            case 58:
              ue + C + te === 0 && (Je = Ee);
              break;
            case 44:
              C + Te + ue + te === 0 && (Ye = 1, St += "\r");
              break;
            case 34:
            case 39:
              C === 0 && (ue = ue === Z ? 0 : ue === 0 ? Z : ue);
              break;
            case 91:
              ue + C + Te === 0 && te++;
              break;
            case 93:
              ue + C + Te === 0 && te--;
              break;
            case 41:
              ue + C + te === 0 && Te--;
              break;
            case 40:
              if (ue + C + te === 0) {
                if (Re === 0)
                  switch (2 * Xe + 3 * at) {
                    case 533:
                      break;
                    default:
                      Re = 1;
                  }
                Te++;
              }
              break;
            case 64:
              C + Te + ue + te + Je + fe === 0 && (fe = 1);
              break;
            case 42:
            case 47:
              if (!(0 < ue + te + Te))
                switch (C) {
                  case 0:
                    switch (2 * Z + 3 * L.charCodeAt(Ee + 1)) {
                      case 235:
                        C = 47;
                        break;
                      case 220:
                        Ke = Ee, C = 42;
                    }
                    break;
                  case 42:
                    Z === 47 && Xe === 42 && Ke + 2 !== Ee && (L.charCodeAt(Ke + 2) === 33 && (Me += L.substring(Ke, Ee + 1)), St = "", C = 0);
                }
          }
          C === 0 && (J += St);
      }
      at = Xe, Xe = Z, Ee++;
    }
    if (Ke = Me.length, 0 < Ke) {
      if (Ye = M, 0 < ie && (Rr = s(2, Me, Ye, w, Ne, re, Ke, W, I, W), Rr !== void 0 && (Me = Rr).length === 0))
        return uu + Me + su;
      if (Me = Ye.join(",") + "{" + Me + "}", P * x !== 0) {
        switch (P !== 2 || o(Me, 2) || (x = 0), x) {
          case 111:
            Me = Me.replace(R, ":-moz-$1") + Me;
            break;
          case 112:
            Me = Me.replace(E, "::-webkit-input-$1") + Me.replace(E, "::-moz-$1") + Me.replace(E, ":-ms-input-$1") + Me;
        }
        x = 0;
      }
    }
    return uu + Me + su;
  }
  function r(w, M, L) {
    var W = M.trim().split(m);
    M = W;
    var I = W.length, te = w.length;
    switch (te) {
      case 0:
      case 1:
        var C = 0;
        for (w = te === 0 ? "" : w[0] + " "; C < I; ++C)
          M[C] = n(w, M[C], L).trim();
        break;
      default:
        var Te = C = 0;
        for (M = []; C < I; ++C)
          for (var ue = 0; ue < te; ++ue)
            M[Te++] = n(w[ue] + " ", W[C], L).trim();
    }
    return M;
  }
  function n(w, M, L) {
    var W = M.charCodeAt(0);
    switch (33 > W && (W = (M = M.trim()).charCodeAt(0)), W) {
      case 38:
        return M.replace(T, "$1" + w.trim());
      case 58:
        return w.trim() + M.replace(T, "$1" + w.trim());
      default:
        if (0 < 1 * L && 0 < M.indexOf("\f"))
          return M.replace(T, (w.charCodeAt(0) === 58 ? "" : "$1") + w.trim());
    }
    return w + M;
  }
  function i(w, M, L, W) {
    var I = w + ";", te = 2 * M + 3 * L + 4 * W;
    if (te === 944) {
      w = I.indexOf(":", 9) + 1;
      var C = I.substring(w, I.length - 1).trim();
      return C = I.substring(0, w).trim() + C + ";", P === 1 || P === 2 && o(C, 1) ? "-webkit-" + C + C : C;
    }
    if (P === 0 || P === 2 && !o(I, 1))
      return I;
    switch (te) {
      case 1015:
        return I.charCodeAt(10) === 97 ? "-webkit-" + I + I : I;
      case 951:
        return I.charCodeAt(3) === 116 ? "-webkit-" + I + I : I;
      case 963:
        return I.charCodeAt(5) === 110 ? "-webkit-" + I + I : I;
      case 1009:
        if (I.charCodeAt(4) !== 100)
          break;
      case 969:
      case 942:
        return "-webkit-" + I + I;
      case 978:
        return "-webkit-" + I + "-moz-" + I + I;
      case 1019:
      case 983:
        return "-webkit-" + I + "-moz-" + I + "-ms-" + I + I;
      case 883:
        if (I.charCodeAt(8) === 45)
          return "-webkit-" + I + I;
        if (0 < I.indexOf("image-set(", 11))
          return I.replace(Y, "$1-webkit-$2") + I;
        break;
      case 932:
        if (I.charCodeAt(4) === 45)
          switch (I.charCodeAt(5)) {
            case 103:
              return "-webkit-box-" + I.replace("-grow", "") + "-webkit-" + I + "-ms-" + I.replace("grow", "positive") + I;
            case 115:
              return "-webkit-" + I + "-ms-" + I.replace("shrink", "negative") + I;
            case 98:
              return "-webkit-" + I + "-ms-" + I.replace("basis", "preferred-size") + I;
          }
        return "-webkit-" + I + "-ms-" + I + I;
      case 964:
        return "-webkit-" + I + "-ms-flex-" + I + I;
      case 1023:
        if (I.charCodeAt(8) !== 99)
          break;
        return C = I.substring(I.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + C + "-webkit-" + I + "-ms-flex-pack" + C + I;
      case 1005:
        return d.test(I) ? I.replace(h, ":-webkit-") + I.replace(h, ":-moz-") + I : I;
      case 1e3:
        switch (C = I.substring(13).trim(), M = C.indexOf("-") + 1, C.charCodeAt(0) + C.charCodeAt(M)) {
          case 226:
            C = I.replace(b, "tb");
            break;
          case 232:
            C = I.replace(b, "tb-rl");
            break;
          case 220:
            C = I.replace(b, "lr");
            break;
          default:
            return I;
        }
        return "-webkit-" + I + "-ms-" + C + I;
      case 1017:
        if (I.indexOf("sticky", 9) === -1)
          break;
      case 975:
        switch (M = (I = w).length - 10, C = (I.charCodeAt(M) === 33 ? I.substring(0, M) : I).substring(w.indexOf(":", 7) + 1).trim(), te = C.charCodeAt(0) + (C.charCodeAt(7) | 0)) {
          case 203:
            if (111 > C.charCodeAt(8))
              break;
          case 115:
            I = I.replace(C, "-webkit-" + C) + ";" + I;
            break;
          case 207:
          case 102:
            I = I.replace(C, "-webkit-" + (102 < te ? "inline-" : "") + "box") + ";" + I.replace(C, "-webkit-" + C) + ";" + I.replace(C, "-ms-" + C + "box") + ";" + I;
        }
        return I + ";";
      case 938:
        if (I.charCodeAt(5) === 45)
          switch (I.charCodeAt(6)) {
            case 105:
              return C = I.replace("-items", ""), "-webkit-" + I + "-webkit-box-" + C + "-ms-flex-" + C + I;
            case 115:
              return "-webkit-" + I + "-ms-flex-item-" + I.replace(G, "") + I;
            default:
              return "-webkit-" + I + "-ms-flex-line-pack" + I.replace("align-content", "").replace(G, "") + I;
          }
        break;
      case 973:
      case 989:
        if (I.charCodeAt(3) !== 45 || I.charCodeAt(4) === 122)
          break;
      case 931:
      case 953:
        if (H.test(w) === !0)
          return (C = w.substring(w.indexOf(":") + 1)).charCodeAt(0) === 115 ? i(w.replace("stretch", "fill-available"), M, L, W).replace(":fill-available", ":stretch") : I.replace(C, "-webkit-" + C) + I.replace(C, "-moz-" + C.replace("fill-", "")) + I;
        break;
      case 962:
        if (I = "-webkit-" + I + (I.charCodeAt(5) === 102 ? "-ms-" + I : "") + I, L + W === 211 && I.charCodeAt(13) === 105 && 0 < I.indexOf("transform", 10))
          return I.substring(0, I.indexOf(";", 27) + 1).replace(p, "$1-webkit-$2") + I;
    }
    return I;
  }
  function o(w, M) {
    var L = w.indexOf(M === 1 ? ":" : "{"), W = w.substring(0, M !== 3 ? L : 10);
    return L = w.substring(L + 1, w.length - 1), se(M !== 2 ? W : W.replace(D, "$1"), L, M);
  }
  function a(w, M) {
    var L = i(M, M.charCodeAt(0), M.charCodeAt(1), M.charCodeAt(2));
    return L !== M + ";" ? L.replace(A, " or ($1)").substring(4) : "(" + M + ")";
  }
  function s(w, M, L, W, I, te, C, Te, ue, Re) {
    for (var Z = 0, Xe = M, at; Z < ie; ++Z)
      switch (at = _e[Z].call(_, w, Xe, L, W, I, te, C, Te, ue, Re)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          Xe = at;
      }
    if (Xe !== M)
      return Xe;
  }
  function u(w) {
    switch (w) {
      case void 0:
      case null:
        ie = _e.length = 0;
        break;
      default:
        if (typeof w == "function")
          _e[ie++] = w;
        else if (typeof w == "object")
          for (var M = 0, L = w.length; M < L; ++M)
            u(w[M]);
        else
          Be = !!w | 0;
    }
    return u;
  }
  function c(w) {
    return w = w.prefix, w !== void 0 && (se = null, w ? typeof w != "function" ? P = 1 : (P = 2, se = w) : P = 0), c;
  }
  function _(w, M) {
    var L = w;
    if (33 > L.charCodeAt(0) && (L = L.trim()), Ae = L, L = [Ae], 0 < ie) {
      var W = s(-1, M, L, L, Ne, re, 0, 0, 0, 0);
      W !== void 0 && typeof W == "string" && (M = W);
    }
    var I = t(Q, L, M, 0, 0);
    return 0 < ie && (W = s(-2, I, L, L, Ne, re, I.length, 0, 0, 0), W !== void 0 && (I = W)), Ae = "", x = 0, re = Ne = 1, I;
  }
  var l = /^\0+/g, f = /[\0\r\f]/g, h = /: */g, d = /zoo|gra/, p = /([,: ])(transform)/g, m = /,\r+?/g, T = /([\t\r\n ])*\f?&/g, O = /@(k\w+)\s*(\S*)\s*/, E = /::(place)/g, R = /:(read-only)/g, b = /[svh]\w+-[tblr]{2}/, g = /\(\s*(.*)\s*\)/g, A = /([\s\S]*?);/g, G = /-self|flex-/g, D = /[^]*?(:[rp][el]a[\w-]+)[^]*/, H = /stretch|:\s*\w+\-(?:conte|avail)/, Y = /([^-])(image-set\()/, re = 1, Ne = 1, x = 0, P = 1, Q = [], _e = [], ie = 0, se = null, Be = 0, Ae = "";
  return _.use = u, _.set = c, e !== void 0 && c(e), _;
}
var ay = {
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
function sy(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var uy = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Sd = /* @__PURE__ */ sy(
  function(e) {
    return uy.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), pT = { exports: {} }, be = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Dd;
function cy() {
  if (Dd)
    return be;
  Dd = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, _ = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, d = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, T = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
  function E(b) {
    if (typeof b == "object" && b !== null) {
      var g = b.$$typeof;
      switch (g) {
        case t:
          switch (b = b.type, b) {
            case u:
            case c:
            case n:
            case o:
            case i:
            case l:
              return b;
            default:
              switch (b = b && b.$$typeof, b) {
                case s:
                case _:
                case d:
                case h:
                case a:
                  return b;
                default:
                  return g;
              }
          }
        case r:
          return g;
      }
    }
  }
  function R(b) {
    return E(b) === c;
  }
  return be.AsyncMode = u, be.ConcurrentMode = c, be.ContextConsumer = s, be.ContextProvider = a, be.Element = t, be.ForwardRef = _, be.Fragment = n, be.Lazy = d, be.Memo = h, be.Portal = r, be.Profiler = o, be.StrictMode = i, be.Suspense = l, be.isAsyncMode = function(b) {
    return R(b) || E(b) === u;
  }, be.isConcurrentMode = R, be.isContextConsumer = function(b) {
    return E(b) === s;
  }, be.isContextProvider = function(b) {
    return E(b) === a;
  }, be.isElement = function(b) {
    return typeof b == "object" && b !== null && b.$$typeof === t;
  }, be.isForwardRef = function(b) {
    return E(b) === _;
  }, be.isFragment = function(b) {
    return E(b) === n;
  }, be.isLazy = function(b) {
    return E(b) === d;
  }, be.isMemo = function(b) {
    return E(b) === h;
  }, be.isPortal = function(b) {
    return E(b) === r;
  }, be.isProfiler = function(b) {
    return E(b) === o;
  }, be.isStrictMode = function(b) {
    return E(b) === i;
  }, be.isSuspense = function(b) {
    return E(b) === l;
  }, be.isValidElementType = function(b) {
    return typeof b == "string" || typeof b == "function" || b === n || b === c || b === o || b === i || b === l || b === f || typeof b == "object" && b !== null && (b.$$typeof === d || b.$$typeof === h || b.$$typeof === a || b.$$typeof === s || b.$$typeof === _ || b.$$typeof === m || b.$$typeof === T || b.$$typeof === O || b.$$typeof === p);
  }, be.typeOf = E, be;
}
pT.exports = cy();
var ly = pT.exports, Wl = ly, _y = {
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
}, fy = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, dy = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, mT = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Xl = {};
Xl[Wl.ForwardRef] = dy;
Xl[Wl.Memo] = mT;
function Gd(e) {
  return Wl.isMemo(e) ? mT : Xl[e.$$typeof] || _y;
}
var hy = Object.defineProperty, py = Object.getOwnPropertyNames, Cd = Object.getOwnPropertySymbols, my = Object.getOwnPropertyDescriptor, Ty = Object.getPrototypeOf, Ud = Object.prototype;
function TT(e, t, r) {
  if (typeof t != "string") {
    if (Ud) {
      var n = Ty(t);
      n && n !== Ud && TT(e, n, r);
    }
    var i = py(t);
    Cd && (i = i.concat(Cd(t)));
    for (var o = Gd(e), a = Gd(t), s = 0; s < i.length; ++s) {
      var u = i[s];
      if (!fy[u] && !(r && r[u]) && !(a && a[u]) && !(o && o[u])) {
        var c = my(t, u);
        try {
          hy(e, u, c);
        } catch {
        }
      }
    }
  }
  return e;
}
var Ey = TT;
const Oy = /* @__PURE__ */ xg(Ey);
function or() {
  return (or = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }).apply(this, arguments);
}
var wd = function(e, t) {
  for (var r = [e[0]], n = 0, i = t.length; n < i; n += 1)
    r.push(t[n], e[n + 1]);
  return r;
}, Uc = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !hT.typeOf(e);
}, ts = Object.freeze([]), Br = Object.freeze({});
function no(e) {
  return typeof e == "function";
}
function Pd(e) {
  return e.displayName || e.name || "Component";
}
function Yl(e) {
  return e && typeof e.styledComponentId == "string";
}
var ei = typeof process < "u" && ({ GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_bf4a7242-89a4-4796-81b0-f5c1dfa1fca5", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "yarn/3.6.0 npm/? node/v19.9.0 linux x64", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_bf4a7242-89a4-4796-81b0-f5c1dfa1fca5", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/tmp/xfs-6c27b37b/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", GRADLE_HOME: "/usr/share/gradle-8.2.1", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "dependabot/npm_and_yarn/apollo/client-3.8.0", SYSTEMD_EXEC_PID: "664", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.7/x64", NVM_DIR: "/home/runner/.nvm", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230806.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", JOURNAL_STREAM: "8:16745", GITHUB_WORKFLOW: "CodeGear CI", _: "/usr/local/bin/yarn", GITHUB_RUN_ID: "5813666703", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "7718eeecae826845b1d922f201314e132dc1d614", GITHUB_BASE_REF: "master", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/pull/19/merge", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", PATH: "/tmp/xfs-6c27b37b:/opt/hostedtoolcache/node/19.9.0/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_0eef41c6-42a6-45ac-823a-2b1fc6667979", INVOCATION_ID: "db7248d7fbec4a249c4252e1476a29a4", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.12/x64", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "51", GITHUB_TRIGGERING_ACTOR: "dependabot[bot]", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 5", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "19/merge", GITHUB_REPOSITORY: "Gearonix/CodeGear", STATS_UE: "true", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", PROJECT_CWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", STATS_NM: "true", npm_package_version: "1.1.0", npm_lifecycle_event: "build", GITHUB_REF_PROTECTED: "false", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "7718eeecae826845b1d922f201314e132dc1d614", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/pull/19/merge", GITHUB_ACTOR: "dependabot[bot]", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_bf4a7242-89a4-4796-81b0-f5c1dfa1fca5", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "49699333", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", BERRY_BIN_FOLDER: "/tmp/xfs-6c27b37b", npm_execpath: "/tmp/xfs-6c27b37b/yarn", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "pull_request", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_bf4a7242-89a4-4796-81b0-f5c1dfa1fca5", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_bf4a7242-89a4-4796-81b0-f5c1dfa1fca5", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/4251781990744259245", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "4251781990744259245", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.REACT_APP_SC_ATTR || { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_bf4a7242-89a4-4796-81b0-f5c1dfa1fca5", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "yarn/3.6.0 npm/? node/v19.9.0 linux x64", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_bf4a7242-89a4-4796-81b0-f5c1dfa1fca5", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/tmp/xfs-6c27b37b/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", GRADLE_HOME: "/usr/share/gradle-8.2.1", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "dependabot/npm_and_yarn/apollo/client-3.8.0", SYSTEMD_EXEC_PID: "664", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.7/x64", NVM_DIR: "/home/runner/.nvm", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230806.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", JOURNAL_STREAM: "8:16745", GITHUB_WORKFLOW: "CodeGear CI", _: "/usr/local/bin/yarn", GITHUB_RUN_ID: "5813666703", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "7718eeecae826845b1d922f201314e132dc1d614", GITHUB_BASE_REF: "master", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/pull/19/merge", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", PATH: "/tmp/xfs-6c27b37b:/opt/hostedtoolcache/node/19.9.0/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_0eef41c6-42a6-45ac-823a-2b1fc6667979", INVOCATION_ID: "db7248d7fbec4a249c4252e1476a29a4", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.12/x64", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "51", GITHUB_TRIGGERING_ACTOR: "dependabot[bot]", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 5", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "19/merge", GITHUB_REPOSITORY: "Gearonix/CodeGear", STATS_UE: "true", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", PROJECT_CWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", STATS_NM: "true", npm_package_version: "1.1.0", npm_lifecycle_event: "build", GITHUB_REF_PROTECTED: "false", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "7718eeecae826845b1d922f201314e132dc1d614", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/pull/19/merge", GITHUB_ACTOR: "dependabot[bot]", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_bf4a7242-89a4-4796-81b0-f5c1dfa1fca5", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "49699333", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", BERRY_BIN_FOLDER: "/tmp/xfs-6c27b37b", npm_execpath: "/tmp/xfs-6c27b37b/yarn", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "pull_request", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_bf4a7242-89a4-4796-81b0-f5c1dfa1fca5", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_bf4a7242-89a4-4796-81b0-f5c1dfa1fca5", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/4251781990744259245", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "4251781990744259245", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.SC_ATTR) || "data-styled", Kl = typeof window < "u" && "HTMLElement" in window, by = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_bf4a7242-89a4-4796-81b0-f5c1dfa1fca5", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "yarn/3.6.0 npm/? node/v19.9.0 linux x64", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_bf4a7242-89a4-4796-81b0-f5c1dfa1fca5", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/tmp/xfs-6c27b37b/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", GRADLE_HOME: "/usr/share/gradle-8.2.1", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "dependabot/npm_and_yarn/apollo/client-3.8.0", SYSTEMD_EXEC_PID: "664", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.7/x64", NVM_DIR: "/home/runner/.nvm", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230806.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", JOURNAL_STREAM: "8:16745", GITHUB_WORKFLOW: "CodeGear CI", _: "/usr/local/bin/yarn", GITHUB_RUN_ID: "5813666703", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "7718eeecae826845b1d922f201314e132dc1d614", GITHUB_BASE_REF: "master", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/pull/19/merge", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", PATH: "/tmp/xfs-6c27b37b:/opt/hostedtoolcache/node/19.9.0/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_0eef41c6-42a6-45ac-823a-2b1fc6667979", INVOCATION_ID: "db7248d7fbec4a249c4252e1476a29a4", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.12/x64", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "51", GITHUB_TRIGGERING_ACTOR: "dependabot[bot]", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 5", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "19/merge", GITHUB_REPOSITORY: "Gearonix/CodeGear", STATS_UE: "true", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", PROJECT_CWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", STATS_NM: "true", npm_package_version: "1.1.0", npm_lifecycle_event: "build", GITHUB_REF_PROTECTED: "false", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "7718eeecae826845b1d922f201314e132dc1d614", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/pull/19/merge", GITHUB_ACTOR: "dependabot[bot]", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_bf4a7242-89a4-4796-81b0-f5c1dfa1fca5", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "49699333", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", BERRY_BIN_FOLDER: "/tmp/xfs-6c27b37b", npm_execpath: "/tmp/xfs-6c27b37b/yarn", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "pull_request", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_bf4a7242-89a4-4796-81b0-f5c1dfa1fca5", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_bf4a7242-89a4-4796-81b0-f5c1dfa1fca5", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/4251781990744259245", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "4251781990744259245", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_bf4a7242-89a4-4796-81b0-f5c1dfa1fca5", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "yarn/3.6.0 npm/? node/v19.9.0 linux x64", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_bf4a7242-89a4-4796-81b0-f5c1dfa1fca5", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/tmp/xfs-6c27b37b/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", GRADLE_HOME: "/usr/share/gradle-8.2.1", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "dependabot/npm_and_yarn/apollo/client-3.8.0", SYSTEMD_EXEC_PID: "664", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.7/x64", NVM_DIR: "/home/runner/.nvm", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230806.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", JOURNAL_STREAM: "8:16745", GITHUB_WORKFLOW: "CodeGear CI", _: "/usr/local/bin/yarn", GITHUB_RUN_ID: "5813666703", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "7718eeecae826845b1d922f201314e132dc1d614", GITHUB_BASE_REF: "master", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/pull/19/merge", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", PATH: "/tmp/xfs-6c27b37b:/opt/hostedtoolcache/node/19.9.0/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_0eef41c6-42a6-45ac-823a-2b1fc6667979", INVOCATION_ID: "db7248d7fbec4a249c4252e1476a29a4", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.12/x64", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "51", GITHUB_TRIGGERING_ACTOR: "dependabot[bot]", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 5", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "19/merge", GITHUB_REPOSITORY: "Gearonix/CodeGear", STATS_UE: "true", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", PROJECT_CWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", STATS_NM: "true", npm_package_version: "1.1.0", npm_lifecycle_event: "build", GITHUB_REF_PROTECTED: "false", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "7718eeecae826845b1d922f201314e132dc1d614", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/pull/19/merge", GITHUB_ACTOR: "dependabot[bot]", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_bf4a7242-89a4-4796-81b0-f5c1dfa1fca5", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "49699333", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", BERRY_BIN_FOLDER: "/tmp/xfs-6c27b37b", npm_execpath: "/tmp/xfs-6c27b37b/yarn", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "pull_request", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_bf4a7242-89a4-4796-81b0-f5c1dfa1fca5", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_bf4a7242-89a4-4796-81b0-f5c1dfa1fca5", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/4251781990744259245", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "4251781990744259245", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.REACT_APP_SC_DISABLE_SPEEDY !== "" ? { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_bf4a7242-89a4-4796-81b0-f5c1dfa1fca5", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "yarn/3.6.0 npm/? node/v19.9.0 linux x64", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_bf4a7242-89a4-4796-81b0-f5c1dfa1fca5", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/tmp/xfs-6c27b37b/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", GRADLE_HOME: "/usr/share/gradle-8.2.1", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "dependabot/npm_and_yarn/apollo/client-3.8.0", SYSTEMD_EXEC_PID: "664", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.7/x64", NVM_DIR: "/home/runner/.nvm", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230806.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", JOURNAL_STREAM: "8:16745", GITHUB_WORKFLOW: "CodeGear CI", _: "/usr/local/bin/yarn", GITHUB_RUN_ID: "5813666703", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "7718eeecae826845b1d922f201314e132dc1d614", GITHUB_BASE_REF: "master", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/pull/19/merge", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", PATH: "/tmp/xfs-6c27b37b:/opt/hostedtoolcache/node/19.9.0/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_0eef41c6-42a6-45ac-823a-2b1fc6667979", INVOCATION_ID: "db7248d7fbec4a249c4252e1476a29a4", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.12/x64", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "51", GITHUB_TRIGGERING_ACTOR: "dependabot[bot]", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 5", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "19/merge", GITHUB_REPOSITORY: "Gearonix/CodeGear", STATS_UE: "true", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", PROJECT_CWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", STATS_NM: "true", npm_package_version: "1.1.0", npm_lifecycle_event: "build", GITHUB_REF_PROTECTED: "false", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "7718eeecae826845b1d922f201314e132dc1d614", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/pull/19/merge", GITHUB_ACTOR: "dependabot[bot]", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_bf4a7242-89a4-4796-81b0-f5c1dfa1fca5", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "49699333", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", BERRY_BIN_FOLDER: "/tmp/xfs-6c27b37b", npm_execpath: "/tmp/xfs-6c27b37b/yarn", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "pull_request", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_bf4a7242-89a4-4796-81b0-f5c1dfa1fca5", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_bf4a7242-89a4-4796-81b0-f5c1dfa1fca5", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/4251781990744259245", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "4251781990744259245", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.REACT_APP_SC_DISABLE_SPEEDY !== "false" && { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_bf4a7242-89a4-4796-81b0-f5c1dfa1fca5", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "yarn/3.6.0 npm/? node/v19.9.0 linux x64", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_bf4a7242-89a4-4796-81b0-f5c1dfa1fca5", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/tmp/xfs-6c27b37b/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", GRADLE_HOME: "/usr/share/gradle-8.2.1", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "dependabot/npm_and_yarn/apollo/client-3.8.0", SYSTEMD_EXEC_PID: "664", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.7/x64", NVM_DIR: "/home/runner/.nvm", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230806.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", JOURNAL_STREAM: "8:16745", GITHUB_WORKFLOW: "CodeGear CI", _: "/usr/local/bin/yarn", GITHUB_RUN_ID: "5813666703", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "7718eeecae826845b1d922f201314e132dc1d614", GITHUB_BASE_REF: "master", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/pull/19/merge", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", PATH: "/tmp/xfs-6c27b37b:/opt/hostedtoolcache/node/19.9.0/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_0eef41c6-42a6-45ac-823a-2b1fc6667979", INVOCATION_ID: "db7248d7fbec4a249c4252e1476a29a4", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.12/x64", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "51", GITHUB_TRIGGERING_ACTOR: "dependabot[bot]", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 5", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "19/merge", GITHUB_REPOSITORY: "Gearonix/CodeGear", STATS_UE: "true", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", PROJECT_CWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", STATS_NM: "true", npm_package_version: "1.1.0", npm_lifecycle_event: "build", GITHUB_REF_PROTECTED: "false", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "7718eeecae826845b1d922f201314e132dc1d614", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/pull/19/merge", GITHUB_ACTOR: "dependabot[bot]", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_bf4a7242-89a4-4796-81b0-f5c1dfa1fca5", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "49699333", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", BERRY_BIN_FOLDER: "/tmp/xfs-6c27b37b", npm_execpath: "/tmp/xfs-6c27b37b/yarn", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "pull_request", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_bf4a7242-89a4-4796-81b0-f5c1dfa1fca5", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_bf4a7242-89a4-4796-81b0-f5c1dfa1fca5", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/4251781990744259245", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "4251781990744259245", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_bf4a7242-89a4-4796-81b0-f5c1dfa1fca5", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "yarn/3.6.0 npm/? node/v19.9.0 linux x64", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_bf4a7242-89a4-4796-81b0-f5c1dfa1fca5", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/tmp/xfs-6c27b37b/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", GRADLE_HOME: "/usr/share/gradle-8.2.1", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "dependabot/npm_and_yarn/apollo/client-3.8.0", SYSTEMD_EXEC_PID: "664", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.7/x64", NVM_DIR: "/home/runner/.nvm", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230806.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", JOURNAL_STREAM: "8:16745", GITHUB_WORKFLOW: "CodeGear CI", _: "/usr/local/bin/yarn", GITHUB_RUN_ID: "5813666703", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "7718eeecae826845b1d922f201314e132dc1d614", GITHUB_BASE_REF: "master", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/pull/19/merge", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", PATH: "/tmp/xfs-6c27b37b:/opt/hostedtoolcache/node/19.9.0/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_0eef41c6-42a6-45ac-823a-2b1fc6667979", INVOCATION_ID: "db7248d7fbec4a249c4252e1476a29a4", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.12/x64", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "51", GITHUB_TRIGGERING_ACTOR: "dependabot[bot]", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 5", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "19/merge", GITHUB_REPOSITORY: "Gearonix/CodeGear", STATS_UE: "true", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", PROJECT_CWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", STATS_NM: "true", npm_package_version: "1.1.0", npm_lifecycle_event: "build", GITHUB_REF_PROTECTED: "false", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "7718eeecae826845b1d922f201314e132dc1d614", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/pull/19/merge", GITHUB_ACTOR: "dependabot[bot]", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_bf4a7242-89a4-4796-81b0-f5c1dfa1fca5", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "49699333", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", BERRY_BIN_FOLDER: "/tmp/xfs-6c27b37b", npm_execpath: "/tmp/xfs-6c27b37b/yarn", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "pull_request", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_bf4a7242-89a4-4796-81b0-f5c1dfa1fca5", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_bf4a7242-89a4-4796-81b0-f5c1dfa1fca5", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/4251781990744259245", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "4251781990744259245", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.SC_DISABLE_SPEEDY !== void 0 && { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_bf4a7242-89a4-4796-81b0-f5c1dfa1fca5", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "yarn/3.6.0 npm/? node/v19.9.0 linux x64", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_bf4a7242-89a4-4796-81b0-f5c1dfa1fca5", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/tmp/xfs-6c27b37b/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", GRADLE_HOME: "/usr/share/gradle-8.2.1", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "dependabot/npm_and_yarn/apollo/client-3.8.0", SYSTEMD_EXEC_PID: "664", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.7/x64", NVM_DIR: "/home/runner/.nvm", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230806.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", JOURNAL_STREAM: "8:16745", GITHUB_WORKFLOW: "CodeGear CI", _: "/usr/local/bin/yarn", GITHUB_RUN_ID: "5813666703", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "7718eeecae826845b1d922f201314e132dc1d614", GITHUB_BASE_REF: "master", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/pull/19/merge", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", PATH: "/tmp/xfs-6c27b37b:/opt/hostedtoolcache/node/19.9.0/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_0eef41c6-42a6-45ac-823a-2b1fc6667979", INVOCATION_ID: "db7248d7fbec4a249c4252e1476a29a4", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.12/x64", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "51", GITHUB_TRIGGERING_ACTOR: "dependabot[bot]", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 5", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "19/merge", GITHUB_REPOSITORY: "Gearonix/CodeGear", STATS_UE: "true", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", PROJECT_CWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", STATS_NM: "true", npm_package_version: "1.1.0", npm_lifecycle_event: "build", GITHUB_REF_PROTECTED: "false", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "7718eeecae826845b1d922f201314e132dc1d614", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/pull/19/merge", GITHUB_ACTOR: "dependabot[bot]", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_bf4a7242-89a4-4796-81b0-f5c1dfa1fca5", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "49699333", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", BERRY_BIN_FOLDER: "/tmp/xfs-6c27b37b", npm_execpath: "/tmp/xfs-6c27b37b/yarn", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "pull_request", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_bf4a7242-89a4-4796-81b0-f5c1dfa1fca5", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_bf4a7242-89a4-4796-81b0-f5c1dfa1fca5", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/4251781990744259245", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "4251781990744259245", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.SC_DISABLE_SPEEDY !== "" && { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_bf4a7242-89a4-4796-81b0-f5c1dfa1fca5", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "yarn/3.6.0 npm/? node/v19.9.0 linux x64", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_bf4a7242-89a4-4796-81b0-f5c1dfa1fca5", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/tmp/xfs-6c27b37b/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", GRADLE_HOME: "/usr/share/gradle-8.2.1", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "dependabot/npm_and_yarn/apollo/client-3.8.0", SYSTEMD_EXEC_PID: "664", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.7/x64", NVM_DIR: "/home/runner/.nvm", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230806.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", JOURNAL_STREAM: "8:16745", GITHUB_WORKFLOW: "CodeGear CI", _: "/usr/local/bin/yarn", GITHUB_RUN_ID: "5813666703", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "7718eeecae826845b1d922f201314e132dc1d614", GITHUB_BASE_REF: "master", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/pull/19/merge", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", PATH: "/tmp/xfs-6c27b37b:/opt/hostedtoolcache/node/19.9.0/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_0eef41c6-42a6-45ac-823a-2b1fc6667979", INVOCATION_ID: "db7248d7fbec4a249c4252e1476a29a4", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.12/x64", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "51", GITHUB_TRIGGERING_ACTOR: "dependabot[bot]", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 5", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "19/merge", GITHUB_REPOSITORY: "Gearonix/CodeGear", STATS_UE: "true", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", PROJECT_CWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", STATS_NM: "true", npm_package_version: "1.1.0", npm_lifecycle_event: "build", GITHUB_REF_PROTECTED: "false", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "7718eeecae826845b1d922f201314e132dc1d614", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/pull/19/merge", GITHUB_ACTOR: "dependabot[bot]", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_bf4a7242-89a4-4796-81b0-f5c1dfa1fca5", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "49699333", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", BERRY_BIN_FOLDER: "/tmp/xfs-6c27b37b", npm_execpath: "/tmp/xfs-6c27b37b/yarn", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "pull_request", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_bf4a7242-89a4-4796-81b0-f5c1dfa1fca5", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_bf4a7242-89a4-4796-81b0-f5c1dfa1fca5", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/4251781990744259245", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "4251781990744259245", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.SC_DISABLE_SPEEDY !== "false" && { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_bf4a7242-89a4-4796-81b0-f5c1dfa1fca5", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "yarn/3.6.0 npm/? node/v19.9.0 linux x64", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_bf4a7242-89a4-4796-81b0-f5c1dfa1fca5", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/tmp/xfs-6c27b37b/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", GRADLE_HOME: "/usr/share/gradle-8.2.1", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "dependabot/npm_and_yarn/apollo/client-3.8.0", SYSTEMD_EXEC_PID: "664", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.7/x64", NVM_DIR: "/home/runner/.nvm", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230806.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", JOURNAL_STREAM: "8:16745", GITHUB_WORKFLOW: "CodeGear CI", _: "/usr/local/bin/yarn", GITHUB_RUN_ID: "5813666703", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "7718eeecae826845b1d922f201314e132dc1d614", GITHUB_BASE_REF: "master", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/pull/19/merge", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", PATH: "/tmp/xfs-6c27b37b:/opt/hostedtoolcache/node/19.9.0/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_0eef41c6-42a6-45ac-823a-2b1fc6667979", INVOCATION_ID: "db7248d7fbec4a249c4252e1476a29a4", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.12/x64", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "51", GITHUB_TRIGGERING_ACTOR: "dependabot[bot]", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 5", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "19/merge", GITHUB_REPOSITORY: "Gearonix/CodeGear", STATS_UE: "true", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", PROJECT_CWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", STATS_NM: "true", npm_package_version: "1.1.0", npm_lifecycle_event: "build", GITHUB_REF_PROTECTED: "false", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "7718eeecae826845b1d922f201314e132dc1d614", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/pull/19/merge", GITHUB_ACTOR: "dependabot[bot]", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_bf4a7242-89a4-4796-81b0-f5c1dfa1fca5", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "49699333", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", BERRY_BIN_FOLDER: "/tmp/xfs-6c27b37b", npm_execpath: "/tmp/xfs-6c27b37b/yarn", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "pull_request", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_bf4a7242-89a4-4796-81b0-f5c1dfa1fca5", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_bf4a7242-89a4-4796-81b0-f5c1dfa1fca5", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/4251781990744259245", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "4251781990744259245", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.SC_DISABLE_SPEEDY);
function Mo(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  throw new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (r.length > 0 ? " Args: " + r.join(", ") : ""));
}
var Ry = function() {
  function e(r) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = r;
  }
  var t = e.prototype;
  return t.indexOfGroup = function(r) {
    for (var n = 0, i = 0; i < r; i++)
      n += this.groupSizes[i];
    return n;
  }, t.insertRules = function(r, n) {
    if (r >= this.groupSizes.length) {
      for (var i = this.groupSizes, o = i.length, a = o; r >= a; )
        (a <<= 1) < 0 && Mo(16, "" + r);
      this.groupSizes = new Uint32Array(a), this.groupSizes.set(i), this.length = a;
      for (var s = o; s < a; s++)
        this.groupSizes[s] = 0;
    }
    for (var u = this.indexOfGroup(r + 1), c = 0, _ = n.length; c < _; c++)
      this.tag.insertRule(u, n[c]) && (this.groupSizes[r]++, u++);
  }, t.clearGroup = function(r) {
    if (r < this.length) {
      var n = this.groupSizes[r], i = this.indexOfGroup(r), o = i + n;
      this.groupSizes[r] = 0;
      for (var a = i; a < o; a++)
        this.tag.deleteRule(i);
    }
  }, t.getGroup = function(r) {
    var n = "";
    if (r >= this.length || this.groupSizes[r] === 0)
      return n;
    for (var i = this.groupSizes[r], o = this.indexOfGroup(r), a = o + i, s = o; s < a; s++)
      n += this.tag.getRule(s) + `/*!sc*/
`;
    return n;
  }, e;
}(), Aa = /* @__PURE__ */ new Map(), rs = /* @__PURE__ */ new Map(), Li = 1, ta = function(e) {
  if (Aa.has(e))
    return Aa.get(e);
  for (; rs.has(Li); )
    Li++;
  var t = Li++;
  return Aa.set(e, t), rs.set(t, e), t;
}, vy = function(e) {
  return rs.get(e);
}, gy = function(e, t) {
  t >= Li && (Li = t + 1), Aa.set(e, t), rs.set(t, e);
}, Iy = "style[" + ei + '][data-styled-version="5.3.6"]', Ny = new RegExp("^" + ei + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), Ay = function(e, t, r) {
  for (var n, i = r.split(","), o = 0, a = i.length; o < a; o++)
    (n = i[o]) && e.registerName(t, n);
}, yy = function(e, t) {
  for (var r = (t.textContent || "").split(`/*!sc*/
`), n = [], i = 0, o = r.length; i < o; i++) {
    var a = r[i].trim();
    if (a) {
      var s = a.match(Ny);
      if (s) {
        var u = 0 | parseInt(s[1], 10), c = s[2];
        u !== 0 && (gy(c, u), Ay(e, c, s[3]), e.getTag().insertRules(u, n)), n.length = 0;
      } else
        n.push(a);
    }
  }
}, Sy = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, ET = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), i = function(s) {
    for (var u = s.childNodes, c = u.length; c >= 0; c--) {
      var _ = u[c];
      if (_ && _.nodeType === 1 && _.hasAttribute(ei))
        return _;
    }
  }(r), o = i !== void 0 ? i.nextSibling : null;
  n.setAttribute(ei, "active"), n.setAttribute("data-styled-version", "5.3.6");
  var a = Sy();
  return a && n.setAttribute("nonce", a), r.insertBefore(n, o), n;
}, Dy = function() {
  function e(r) {
    var n = this.element = ET(r);
    n.appendChild(document.createTextNode("")), this.sheet = function(i) {
      if (i.sheet)
        return i.sheet;
      for (var o = document.styleSheets, a = 0, s = o.length; a < s; a++) {
        var u = o[a];
        if (u.ownerNode === i)
          return u;
      }
      Mo(17);
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
}(), Gy = function() {
  function e(r) {
    var n = this.element = ET(r);
    this.nodes = n.childNodes, this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(r, n) {
    if (r <= this.length && r >= 0) {
      var i = document.createTextNode(n), o = this.nodes[r];
      return this.element.insertBefore(i, o || null), this.length++, !0;
    }
    return !1;
  }, t.deleteRule = function(r) {
    this.element.removeChild(this.nodes[r]), this.length--;
  }, t.getRule = function(r) {
    return r < this.length ? this.nodes[r].textContent : "";
  }, e;
}(), Cy = function() {
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
}(), Hd = Kl, Uy = { isServer: !Kl, useCSSOMInjection: !by }, OT = function() {
  function e(r, n, i) {
    r === void 0 && (r = Br), n === void 0 && (n = {}), this.options = or({}, Uy, {}, r), this.gs = n, this.names = new Map(i), this.server = !!r.isServer, !this.server && Kl && Hd && (Hd = !1, function(o) {
      for (var a = document.querySelectorAll(Iy), s = 0, u = a.length; s < u; s++) {
        var c = a[s];
        c && c.getAttribute(ei) !== "active" && (yy(o, c), c.parentNode && c.parentNode.removeChild(c));
      }
    }(this));
  }
  e.registerId = function(r) {
    return ta(r);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(r, n) {
    return n === void 0 && (n = !0), new e(or({}, this.options, {}, r), this.gs, n && this.names || void 0);
  }, t.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (i = (n = this.options).isServer, o = n.useCSSOMInjection, a = n.target, r = i ? new Cy(a) : o ? new Dy(a) : new Gy(a), new Ry(r)));
    var r, n, i, o, a;
  }, t.hasNameForId = function(r, n) {
    return this.names.has(r) && this.names.get(r).has(n);
  }, t.registerName = function(r, n) {
    if (ta(r), this.names.has(r))
      this.names.get(r).add(n);
    else {
      var i = /* @__PURE__ */ new Set();
      i.add(n), this.names.set(r, i);
    }
  }, t.insertRules = function(r, n, i) {
    this.registerName(r, n), this.getTag().insertRules(ta(r), i);
  }, t.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, t.clearRules = function(r) {
    this.getTag().clearGroup(ta(r)), this.clearNames(r);
  }, t.clearTag = function() {
    this.tag = void 0;
  }, t.toString = function() {
    return function(r) {
      for (var n = r.getTag(), i = n.length, o = "", a = 0; a < i; a++) {
        var s = vy(a);
        if (s !== void 0) {
          var u = r.names.get(s), c = n.getGroup(a);
          if (u && c && u.size) {
            var _ = ei + ".g" + a + '[id="' + s + '"]', l = "";
            u !== void 0 && u.forEach(function(f) {
              f.length > 0 && (l += f + ",");
            }), o += "" + c + _ + '{content:"' + l + `"}/*!sc*/
`;
          }
        }
      }
      return o;
    }(this);
  }, e;
}(), wy = /(a)(d)/gi, Md = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function wc(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0)
    r = Md(t % 52) + r;
  return (Md(t % 52) + r).replace(wy, "$1-$2");
}
var Gn = function(e, t) {
  for (var r = t.length; r; )
    e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, bT = function(e) {
  return Gn(5381, e);
};
function Py(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (no(r) && !Yl(r))
      return !1;
  }
  return !0;
}
var Hy = bT("5.3.6"), My = function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = (n === void 0 || n.isStatic) && Py(t), this.componentId = r, this.baseHash = Gn(Hy, r), this.baseStyle = n, OT.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, n) {
    var i = this.componentId, o = [];
    if (this.baseStyle && o.push(this.baseStyle.generateAndInjectStyles(t, r, n)), this.isStatic && !n.hash)
      if (this.staticRulesId && r.hasNameForId(i, this.staticRulesId))
        o.push(this.staticRulesId);
      else {
        var a = ti(this.rules, t, r, n).join(""), s = wc(Gn(this.baseHash, a) >>> 0);
        if (!r.hasNameForId(i, s)) {
          var u = n(a, "." + s, void 0, i);
          r.insertRules(i, s, u);
        }
        o.push(s), this.staticRulesId = s;
      }
    else {
      for (var c = this.rules.length, _ = Gn(this.baseHash, n.hash), l = "", f = 0; f < c; f++) {
        var h = this.rules[f];
        if (typeof h == "string")
          l += h;
        else if (h) {
          var d = ti(h, t, r, n), p = Array.isArray(d) ? d.join("") : d;
          _ = Gn(_, p + f), l += p;
        }
      }
      if (l) {
        var m = wc(_ >>> 0);
        if (!r.hasNameForId(i, m)) {
          var T = n(l, "." + m, void 0, i);
          r.insertRules(i, m, T);
        }
        o.push(m);
      }
    }
    return o.join(" ");
  }, e;
}(), ky = /^\s*\/\/.*$/gm, Ly = [":", "[", ".", "#"];
function By(e) {
  var t, r, n, i, o = e === void 0 ? Br : e, a = o.options, s = a === void 0 ? Br : a, u = o.plugins, c = u === void 0 ? ts : u, _ = new oy(s), l = [], f = function(p) {
    function m(T) {
      if (T)
        try {
          p(T + "}");
        } catch {
        }
    }
    return function(T, O, E, R, b, g, A, G, D, H) {
      switch (T) {
        case 1:
          if (D === 0 && O.charCodeAt(0) === 64)
            return p(O + ";"), "";
          break;
        case 2:
          if (G === 0)
            return O + "/*|*/";
          break;
        case 3:
          switch (G) {
            case 102:
            case 112:
              return p(E[0] + O), "";
            default:
              return O + (H === 0 ? "/*|*/" : "");
          }
        case -2:
          O.split("/*|*/}").forEach(m);
      }
    };
  }(function(p) {
    l.push(p);
  }), h = function(p, m, T) {
    return m === 0 && Ly.indexOf(T[r.length]) !== -1 || T.match(i) ? p : "." + t;
  };
  function d(p, m, T, O) {
    O === void 0 && (O = "&");
    var E = p.replace(ky, ""), R = m && T ? T + " " + m + " { " + E + " }" : E;
    return t = O, r = m, n = new RegExp("\\" + r + "\\b", "g"), i = new RegExp("(\\" + r + "\\b){2,}"), _(T || !m ? "" : m, R);
  }
  return _.use([].concat(c, [function(p, m, T) {
    p === 2 && T.length && T[0].lastIndexOf(r) > 0 && (T[0] = T[0].replace(n, h));
  }, f, function(p) {
    if (p === -2) {
      var m = l;
      return l = [], m;
    }
  }])), d.hash = c.length ? c.reduce(function(p, m) {
    return m.name || Mo(15), Gn(p, m.name);
  }, 5381).toString() : "", d;
}
var RT = Pe.createContext();
RT.Consumer;
var vT = Pe.createContext(), xy = (vT.Consumer, new OT()), Pc = By();
function Fy() {
  return ot(RT) || xy;
}
function jy() {
  return ot(vT) || Pc;
}
var Vy = function() {
  function e(t, r) {
    var n = this;
    this.inject = function(i, o) {
      o === void 0 && (o = Pc);
      var a = n.name + o.hash;
      i.hasNameForId(n.id, a) || i.insertRules(n.id, a, o(n.rules, a, "@keyframes"));
    }, this.toString = function() {
      return Mo(12, String(n.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = r;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = Pc), this.name + t.hash;
  }, e;
}(), Wy = /([A-Z])/, Xy = /([A-Z])/g, Yy = /^ms-/, Ky = function(e) {
  return "-" + e.toLowerCase();
};
function kd(e) {
  return Wy.test(e) ? e.replace(Xy, Ky).replace(Yy, "-ms-") : e;
}
var Ld = function(e) {
  return e == null || e === !1 || e === "";
};
function ti(e, t, r, n) {
  if (Array.isArray(e)) {
    for (var i, o = [], a = 0, s = e.length; a < s; a += 1)
      (i = ti(e[a], t, r, n)) !== "" && (Array.isArray(i) ? o.push.apply(o, i) : o.push(i));
    return o;
  }
  if (Ld(e))
    return "";
  if (Yl(e))
    return "." + e.styledComponentId;
  if (no(e)) {
    if (typeof (c = e) != "function" || c.prototype && c.prototype.isReactComponent || !t)
      return e;
    var u = e(t);
    return ti(u, t, r, n);
  }
  var c;
  return e instanceof Vy ? r ? (e.inject(r, n), e.getName(n)) : e : Uc(e) ? function _(l, f) {
    var h, d, p = [];
    for (var m in l)
      l.hasOwnProperty(m) && !Ld(l[m]) && (Array.isArray(l[m]) && l[m].isCss || no(l[m]) ? p.push(kd(m) + ":", l[m], ";") : Uc(l[m]) ? p.push.apply(p, _(l[m], m)) : p.push(kd(m) + ": " + (h = m, (d = l[m]) == null || typeof d == "boolean" || d === "" ? "" : typeof d != "number" || d === 0 || h in ay ? String(d).trim() : d + "px") + ";"));
    return f ? [f + " {"].concat(p, ["}"]) : p;
  }(e) : e.toString();
}
var Bd = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function Bt(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  return no(e) || Uc(e) ? Bd(ti(wd(ts, [e].concat(r)))) : r.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : Bd(ti(wd(e, r)));
}
var $y = function(e, t, r) {
  return r === void 0 && (r = Br), e.theme !== r.theme && e.theme || t || r.theme;
}, zy = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, qy = /(^-|-$)/g;
function Pu(e) {
  return e.replace(zy, "-").replace(qy, "");
}
var Jy = function(e) {
  return wc(bT(e) >>> 0);
};
function ra(e) {
  return typeof e == "string" && !0;
}
var Hc = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, Qy = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function Zy(e, t, r) {
  var n = e[r];
  Hc(t) && Hc(n) ? gT(n, t) : e[r] = t;
}
function gT(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  for (var i = 0, o = r; i < o.length; i++) {
    var a = o[i];
    if (Hc(a))
      for (var s in a)
        Qy(s) && Zy(e, a[s], s);
  }
  return e;
}
var $l = Pe.createContext();
$l.Consumer;
var Hu = {};
function IT(e, t, r) {
  var n = Yl(e), i = !ra(e), o = t.attrs, a = o === void 0 ? ts : o, s = t.componentId, u = s === void 0 ? function(O, E) {
    var R = typeof O != "string" ? "sc" : Pu(O);
    Hu[R] = (Hu[R] || 0) + 1;
    var b = R + "-" + Jy("5.3.6" + R + Hu[R]);
    return E ? E + "-" + b : b;
  }(t.displayName, t.parentComponentId) : s, c = t.displayName, _ = c === void 0 ? function(O) {
    return ra(O) ? "styled." + O : "Styled(" + Pd(O) + ")";
  }(e) : c, l = t.displayName && t.componentId ? Pu(t.displayName) + "-" + t.componentId : t.componentId || u, f = n && e.attrs ? Array.prototype.concat(e.attrs, a).filter(Boolean) : a, h = t.shouldForwardProp;
  n && e.shouldForwardProp && (h = t.shouldForwardProp ? function(O, E, R) {
    return e.shouldForwardProp(O, E, R) && t.shouldForwardProp(O, E, R);
  } : e.shouldForwardProp);
  var d, p = new My(r, l, n ? e.componentStyle : void 0), m = p.isStatic && a.length === 0, T = function(O, E) {
    return function(R, b, g, A) {
      var G = R.attrs, D = R.componentStyle, H = R.defaultProps, Y = R.foldedComponentIds, re = R.shouldForwardProp, Ne = R.styledComponentId, x = R.target, P = function(W, I, te) {
        W === void 0 && (W = Br);
        var C = or({}, I, { theme: W }), Te = {};
        return te.forEach(function(ue) {
          var Re, Z, Xe, at = ue;
          for (Re in no(at) && (at = at(C)), at)
            C[Re] = Te[Re] = Re === "className" ? (Z = Te[Re], Xe = at[Re], Z && Xe ? Z + " " + Xe : Z || Xe) : at[Re];
        }), [C, Te];
      }($y(b, ot($l), H) || Br, b, G), Q = P[0], _e = P[1], ie = function(W, I, te, C) {
        var Te = Fy(), ue = jy(), Re = I ? W.generateAndInjectStyles(Br, Te, ue) : W.generateAndInjectStyles(te, Te, ue);
        return Re;
      }(D, A, Q), se = g, Be = _e.$as || b.$as || _e.as || b.as || x, Ae = ra(Be), w = _e !== b ? or({}, b, {}, _e) : b, M = {};
      for (var L in w)
        L[0] !== "$" && L !== "as" && (L === "forwardedAs" ? M.as = w[L] : (re ? re(L, Sd, Be) : !Ae || Sd(L)) && (M[L] = w[L]));
      return b.style && _e.style !== b.style && (M.style = or({}, b.style, {}, _e.style)), M.className = Array.prototype.concat(Y, Ne, ie !== Ne ? ie : null, b.className, _e.className).filter(Boolean).join(" "), M.ref = se, lO(Be, M);
    }(d, O, E, m);
  };
  return T.displayName = _, (d = Pe.forwardRef(T)).attrs = f, d.componentStyle = p, d.displayName = _, d.shouldForwardProp = h, d.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : ts, d.styledComponentId = l, d.target = n ? e.target : e, d.withComponent = function(O) {
    var E = t.componentId, R = function(g, A) {
      if (g == null)
        return {};
      var G, D, H = {}, Y = Object.keys(g);
      for (D = 0; D < Y.length; D++)
        G = Y[D], A.indexOf(G) >= 0 || (H[G] = g[G]);
      return H;
    }(t, ["componentId"]), b = E && E + "-" + (ra(O) ? O : Pu(Pd(O)));
    return IT(O, or({}, R, { attrs: f, componentId: b }), r);
  }, Object.defineProperty(d, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(O) {
    this._foldedDefaultProps = n ? gT({}, e.defaultProps, O) : O;
  } }), d.toString = function() {
    return "." + d.styledComponentId;
  }, i && Oy(d, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), d;
}
var Mc = function(e) {
  return function t(r, n, i) {
    if (i === void 0 && (i = Br), !hT.isValidElementType(n))
      return Mo(1, String(n));
    var o = function() {
      return r(n, i, Bt.apply(void 0, arguments));
    };
    return o.withConfig = function(a) {
      return t(r, n, or({}, i, {}, a));
    }, o.attrs = function(a) {
      return t(r, n, or({}, i, { attrs: Array.prototype.concat(i.attrs, a).filter(Boolean) }));
    }, o;
  }(IT, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  Mc[e] = Mc(e);
});
var e1 = function() {
  return ot($l);
};
const Ue = Mc, It = (e = "100%", t = e) => Bt`
  width: ${e};
  height: ${t};
`;
Bt`
  border: 1px solid red;
`;
const t1 = (e) => Bt`
  padding-left: ${e}px;
  padding-right: ${e}px;
`, fn = (e = "flex-start", t = "stretch", r = "row") => Bt`
  display: flex;
  justify-content: ${e};
  align-items: ${t};
  flex-direction: ${r};
`, kc = (e) => Bt`
  transition: color 200ms;
  &:hover {
    color: ${e};
  }
`, ya = (e) => ({ theme: t }) => `${t[e]} !important;`, zl = (e = "&") => Bt`
  ${e}::-webkit-scrollbar {
    width: 10px;
  }

  ${e}::-webkit-scrollbar-track {
    background-color: ${({ theme: t }) => t.lightGrey};
  }

  ${e}::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
`, it = (e) => Bt`
  ${({ theme: t }) => t[e]}
`, NT = (e) => Bt`
  position: absolute;
  ${Object.entries(e).map(([t, r]) => `${t}: ${r};`).join(`
`)}
`, r1 = (e, t) => Bt`
  margin-left: ${e}px;
  margin-top: ${t}px;
`, n1 = Bt`
  -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
`, i1 = "1px solid", Iw = Ue.div`
  ${fn("center", "center")};
  ${NT({
  left: "0",
  top: "0"
})}
  ${It("100vw", "100vh")};
  background: rgba(0, 0, 0, 0.44);
  z-index: 100;
`, Nw = Ue.div`
  display: grid;
  position: relative;
  width: ${({ $width: e }) => e ?? 50}vw;
  height: ${({ $height: e }) => e ?? 60}vh;
  background: ${it("grey")};
  border: 2px solid ${it("lightGrey")};
  min-height: 300px;
  border-radius: 6px;
  cursor: grab;
  ${n1};
  touch-action: none;
  overflow-y: auto;
  scroll-behavior: smooth;
  ${zl()};
`, Aw = Ue.div`
  margin: 0 auto;
  margin-top: 18px;
  ${It("60%", "100%")}
  & > * {
    cursor: initial;
    color: ${it("light")};
  }
`, yw = Ue.h1`
  text-align: center;
  padding-bottom: 18px;
  margin-bottom: 30px;
  font-size: ${({ theme: e }) => e.fz10};
  border-bottom: ${i1} ${it("lightGrey")};
`, Sw = Ue.div`
  background: ${it("lightGrey")};
  ${It("100%", "2px")};
  margin-bottom: 30px;
  margin-top: -8px;
`, o1 = (e, t) => {
  const { Spring: r, Gesture: n } = Hs(), [{ y: i }, o] = r.useSpring(() => ({ y: t })), a = () => {
    o.start({ y: 0, immediate: !1, config: r.config.gentle });
  }, s = (l = 0) => {
    e(), o.start({
      y: t,
      immediate: !1,
      config: { ...r.config.stiff, velocity: l }
    });
  }, u = n.useDrag(
    ({ last: l, velocity: [, f], direction: [, h], offset: [, d], cancel: p }) => {
      d < -70 && p(), l ? d > t * 0.5 || f > 0.5 && h === 1 ? s(f) : a() : o.start({ y: d, immediate: h === -1 });
    },
    {
      from: () => [0, i.get()],
      filterTaps: !0,
      bounds: { top: 0 },
      rubberband: !0
    }
  ), c = i.to((l) => l < t ? "block" : "none");
  return {
    toggle: (l) => {
      l ? a() : s();
    },
    bind: u,
    div: r.a.div,
    springs: {
      display: c,
      y: i
    }
  };
}, a1 = Ue.div`
  padding-left: 15px;
  z-index: 15;
  position: fixed;
  right: 0;
  height: calc(100vh + 100px);
  width: calc(100% - 54px);
  border-radius: 6px 6px 0;
  background: ${it("darkBlue")};
  border-top: 2px solid ${it("lightGrey")};
  touch-action: none;
  bottom: ${({ $bottom: e }) => `calc(-100vh + ${e - 100}px)`};
  overflow-y: auto;
  box-sizing: border-box;
  scroll-behavior: smooth;
  ${zl()};
`, s1 = ({ children: e, onClose: t, isOpen: r, height: n }) => {
  const i = o1(t, n);
  return Le(() => {
    i.toggle(r);
  }, [r]), /* @__PURE__ */ K(
    a1,
    {
      $bottom: n,
      ...i.bind(),
      style: i.springs,
      as: i.div,
      children: e
    }
  );
}, u1 = (e) => /* @__PURE__ */ K(xl, { children: /* @__PURE__ */ K(s1, { ...e }) }), AT = ({
  onChange: e,
  value: t,
  options: r,
  defaultValue: n
}) => /* @__PURE__ */ K(
  mO,
  {
    size: "middle",
    onChange: e,
    value: t,
    style: { width: 200 },
    options: r,
    defaultValue: n
  }
), c1 = Tr(({ onChange: e }) => {
  const { fontSize: t, tabSize: r } = ai(), n = Os(), i = n.getActiveTabText(), o = n.getActiveLanguage();
  return /* @__PURE__ */ K(
    Uv,
    {
      height: "90vh",
      theme: "vs-dark",
      onChange: e,
      language: o,
      value: mp(i),
      options: RR({
        fontSize: t,
        tabSize: r
      })
    }
  );
}), l1 = ({ children: e }) => {
  const { Spring: t } = Hs(), r = t.useSpring({
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
  return /* @__PURE__ */ K(t.a.div, { style: { ...r }, children: e });
}, _1 = (e) => /* @__PURE__ */ K(l1, { children: /* @__PURE__ */ K(c1, { ...e }) }), ql = {
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
}, f1 = [
  "java",
  "python",
  "cpp",
  "c",
  "go",
  "javascript"
], d1 = () => [...new Set(Object.values(ql))].map((t) => ({
  value: t,
  label: t
})), h1 = Tr(() => {
  const e = d1(), t = Os(), r = t.getActiveLanguage(), n = t.getActiveTab();
  return /* @__PURE__ */ K(
    AT,
    {
      onChange: (o) => {
        n.lang = o;
      },
      value: r,
      options: e
    }
  );
}), yT = "Custom", p1 = [
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
  yT
], m1 = Tr(() => {
  const e = Qr(), { theme: t } = ai();
  return /* @__PURE__ */ K(
    AT,
    {
      defaultValue: "vs-dark",
      onChange: (n) => {
        e.changeTheme(n);
      },
      value: t,
      options: p1.map((n) => ({
        value: n,
        label: n
      }))
    }
  );
});
let na;
const T1 = new Uint8Array(16);
function E1() {
  if (!na && (na = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !na))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return na(T1);
}
const ze = [];
for (let e = 0; e < 256; ++e)
  ze.push((e + 256).toString(16).slice(1));
function O1(e, t = 0) {
  return (ze[e[t + 0]] + ze[e[t + 1]] + ze[e[t + 2]] + ze[e[t + 3]] + "-" + ze[e[t + 4]] + ze[e[t + 5]] + "-" + ze[e[t + 6]] + ze[e[t + 7]] + "-" + ze[e[t + 8]] + ze[e[t + 9]] + "-" + ze[e[t + 10]] + ze[e[t + 11]] + ze[e[t + 12]] + ze[e[t + 13]] + ze[e[t + 14]] + ze[e[t + 15]]).toLowerCase();
}
const b1 = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), xd = {
  randomUUID: b1
};
function R1(e, t, r) {
  if (xd.randomUUID && !t && !e)
    return xd.randomUUID();
  e = e || {};
  const n = e.random || (e.rng || E1)();
  if (n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, t) {
    r = r || 0;
    for (let i = 0; i < 16; ++i)
      t[r + i] = n[i];
    return t;
  }
  return O1(n);
}
const v1 = ({
  fileData: e,
  lastNumber: t
}) => ({
  fileHandle: e?.fileHandle ?? null,
  content: e?.content ?? "",
  label: e?.name ?? "Untitled",
  lang: e?.language ?? "text",
  idx: t ? t + 1 : 0,
  key: R1(),
  wasChanged: !1
}), ST = 9, Dw = [14, 16, 18, 20, 22, 24, 26], Gw = [4, 2], g1 = (e) => e.length >= ST;
class I1 {
  constructor(t) {
    zr(this), this.state = t;
  }
  createTab(t) {
    const r = this.state.content;
    if (g1(r))
      return null;
    const n = r.at(-1)?.idx, i = v1({ fileData: t, lastNumber: n });
    return this.state.activeKey = i.key, this.state.content.push(i), i;
  }
  removeTab(t) {
    const r = this.state.getters.getTabIndex(t), n = this.state.content[r - 1];
    this.state.content.splice(r, 1), t === this.state.activeKey && (this.state.activeKey = n.key);
  }
  changeActiveTab(t) {
    this.state.activeKey = t;
  }
}
const N1 = () => {
  const [e, t] = dt(null);
  return {
    protect: (r) => (...n) => {
      e || r(...n);
    },
    off: () => {
      t(null);
    },
    on: (r) => {
      t(r);
    },
    val: e
  };
}, A1 = (e) => e.map((t) => ({
  label: t.label,
  key: t.key
})), y1 = Ue(Sh)`
  color: ${ya("secondaryGrey")};
  height: 50px;
  margin: 12px;
  min-width: 300px;
  .ant-tabs-nav::before {
    border-bottom: none;
  }
  .ant-tabs-tab {
    background: ${ya("grey")};
  }
  .ant-tabs-tab-active {
    background: #2e3139 !important;
  }
  .ant-tabs-tab-btn {
    color: ${ya("secondaryGrey")};
  }
`, S1 = Tr(() => {
  const { activeKey: e, content: t } = ai(), r = Qr(), n = A1(t), i = N1(), o = i.protect(
    (u, c) => {
      if (c === "add")
        r.tabs.createTab();
      else {
        if (t.length === 1)
          return;
        i.on(u);
      }
    }
  ), a = i.protect((u) => {
    r.tabs.changeActiveTab(u);
  });
  return /* @__PURE__ */ K(Ah, { children: /* @__PURE__ */ K(
    TO,
    {
      title: "Delete the tab",
      description: "Are you sure to delete this tab?",
      okText: "Yes",
      cancelText: "No",
      onConfirm: () => {
        r.tabs.removeTab(i.val), i.off();
      },
      open: !!i.val,
      onCancel: i.off,
      arrow: !1,
      children: /* @__PURE__ */ K(
        y1,
        {
          type: "editable-card",
          onChange: a,
          activeKey: e,
          onEdit: o,
          items: mp(n),
          hideAdd: t.length >= ST
        }
      )
    }
  ) });
}), D1 = [1, 2, 3, 4, 5, 6, 7, 8, 9], G1 = () => {
  const e = Jm(), { tabs: t } = Qr(), { content: r } = ai();
  Le(() => (e.on(
    Object.fromEntries(
      D1.map((n) => {
        const o = r[n - 1]?.key;
        return [n.toString(), o ? () => t.changeActiveTab(o) : null];
      })
    )
  ), () => {
    e.clear();
  }), [r.length]);
}, C1 = (e) => Pv(e) ? "name" in e && typeof e.name == "string" && "type" in e && typeof e.type == "string" && "content" in e && typeof e.content == "string" : !1, DT = (e) => {
  const t = e.split(".").at(-1);
  return U1(t) ? [ql[t], t] : ["text", t];
};
function U1(e) {
  return e in ql;
}
const GT = {
  ThemeUpload: (e) => `Unable to upload theme - ${e}.json`,
  NotSupportedByBrowser: () => "Your browser does not support saving and opening files.",
  WrongJsonObject: (e) => `Incoming json object should be must be ${e} type.`,
  WrongResponseType: (e) => `Incoming response object should be must be ${e} type.`
}, w1 = {
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
}, P1 = () => async () => {
  if ("showOpenFilePicker" in window) {
    const [e] = await window.showOpenFilePicker(w1), t = await e.getFile(), r = await t.text(), [n] = DT(t.name);
    return {
      name: t.name,
      type: t.type,
      content: r,
      fileHandle: e,
      language: n
    };
  }
  console.warn(GT.NotSupportedByBrowser());
}, H1 = () => async (e, t) => {
  try {
    let r = e;
    Hv(e?.createWritable) || (r = await window.showSaveFilePicker());
    const n = await r.createWritable();
    return await n.write(t), await n.close(), r;
  } catch {
    console.warn(GT.NotSupportedByBrowser());
  }
}, CT = () => {
  const e = P1(), t = H1(), r = Qr(), n = Os();
  return {
    openFile: jr(async () => {
      const a = await e();
      C1(a) && r.tabs.createTab(a);
    }, [r.tabs, e]),
    saveFile: async () => {
      const a = n.getActiveTab(), s = a.fileHandle, u = a.content;
      if (!a.wasChanged)
        return;
      const c = await t(s, u);
      c && (a.fileHandle = c, a.lang = DT(c.name));
    }
  };
};
var Nr = /* @__PURE__ */ ((e) => (e.O = "O", e.S = "S", e.N = "N", e.T = "T", e.P = "P", e.J = "J", e.Q = "Q", e))(Nr || {});
const M1 = () => {
  const e = Qr(), t = Jm(), { openFile: r, saveFile: n } = CT();
  G1();
  const i = gR("isTerminalOpened"), o = _n(), a = jr(() => {
    o.toggle("isSettingsOpened");
  }, [o]);
  Le(() => (t.on({
    [Nr.O]: r,
    [Nr.S]: n,
    [Nr.N]: () => {
      e.tabs.createTab();
    },
    [Nr.T]: () => {
      e.tabs.removeTab();
    },
    [Nr.P]: i("terminal"),
    [Nr.J]: i("test_cases"),
    [Nr.Q]: a
  }), () => {
    t.clear();
  }), [o.state.isSettingsOpened]);
}, k1 = Ue.div`
  width: 100%;
`, L1 = Ue.div`
  ${fn("space-between")}
  ${It("100%", "48px")}
  margin-bottom: 10px;
`, B1 = Ue.div`
  width: 30%;
  display: flex;
  gap: 30px;
  align-items: flex-end;
`, Cw = Tr(() => {
  const e = Qr(), { theme: t, content: r, customBackground: n, customColor: i } = ai(), o = NR(), a = tw(), s = FA(() => {
    o.set("EDITOR_CONTENT_DATA", r);
  }, 1e3);
  M1();
  const u = Mp(), c = (_) => {
    kp(_) && (e.editor.saveContent(_), s());
  };
  return Le(() => {
    u?.editor.setTheme(t);
  }, [t]), Le(() => {
    a({
      background: n,
      color: i
    });
  }, [n, i]), /* @__PURE__ */ mt(k1, { children: [
    /* @__PURE__ */ mt(L1, { children: [
      /* @__PURE__ */ K(S1, {}),
      /* @__PURE__ */ mt(B1, { children: [
        /* @__PURE__ */ K(m1, {}),
        /* @__PURE__ */ K(h1, {})
      ] })
    ] }),
    /* @__PURE__ */ K(xl, { children: /* @__PURE__ */ K(_1, { onChange: c }) })
  ] });
});
function x1(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
//! moment.js
//! version : 2.29.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var UT;
function k() {
  return UT.apply(null, arguments);
}
function F1(e) {
  UT = e;
}
function kt(e) {
  return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]";
}
function sn(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Object]";
}
function pe(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function Jl(e) {
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
function pr(e) {
  return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]";
}
function ko(e) {
  return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
}
function wT(e, t) {
  var r = [], n, i = e.length;
  for (n = 0; n < i; ++n)
    r.push(t(e[n], n));
  return r;
}
function Cr(e, t) {
  for (var r in t)
    pe(t, r) && (e[r] = t[r]);
  return pe(t, "toString") && (e.toString = t.toString), pe(t, "valueOf") && (e.valueOf = t.valueOf), e;
}
function Zt(e, t, r, n) {
  return nE(e, t, r, n, !0).utc();
}
function j1() {
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
function ee(e) {
  return e._pf == null && (e._pf = j1()), e._pf;
}
var Lc;
Array.prototype.some ? Lc = Array.prototype.some : Lc = function(e) {
  var t = Object(this), r = t.length >>> 0, n;
  for (n = 0; n < r; n++)
    if (n in t && e.call(this, t[n], n, t))
      return !0;
  return !1;
};
function Ql(e) {
  if (e._isValid == null) {
    var t = ee(e), r = Lc.call(t.parsedDateParts, function(i) {
      return i != null;
    }), n = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && r);
    if (e._strict && (n = n && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === void 0), Object.isFrozen == null || !Object.isFrozen(e))
      e._isValid = n;
    else
      return n;
  }
  return e._isValid;
}
function ks(e) {
  var t = Zt(NaN);
  return e != null ? Cr(ee(t), e) : ee(t).userInvalidated = !0, t;
}
var Fd = k.momentProperties = [], Mu = !1;
function Zl(e, t) {
  var r, n, i, o = Fd.length;
  if (st(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), st(t._i) || (e._i = t._i), st(t._f) || (e._f = t._f), st(t._l) || (e._l = t._l), st(t._strict) || (e._strict = t._strict), st(t._tzm) || (e._tzm = t._tzm), st(t._isUTC) || (e._isUTC = t._isUTC), st(t._offset) || (e._offset = t._offset), st(t._pf) || (e._pf = ee(t)), st(t._locale) || (e._locale = t._locale), o > 0)
    for (r = 0; r < o; r++)
      n = Fd[r], i = t[n], st(i) || (e[n] = i);
  return e;
}
function Lo(e) {
  Zl(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = /* @__PURE__ */ new Date(NaN)), Mu === !1 && (Mu = !0, k.updateOffset(this), Mu = !1);
}
function Lt(e) {
  return e instanceof Lo || e != null && e._isAMomentObject != null;
}
function PT(e) {
  k.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + e);
}
function At(e, t) {
  var r = !0;
  return Cr(function() {
    if (k.deprecationHandler != null && k.deprecationHandler(null, e), r) {
      var n = [], i, o, a, s = arguments.length;
      for (o = 0; o < s; o++) {
        if (i = "", typeof arguments[o] == "object") {
          i += `
[` + o + "] ";
          for (a in arguments[0])
            pe(arguments[0], a) && (i += a + ": " + arguments[0][a] + ", ");
          i = i.slice(0, -2);
        } else
          i = arguments[o];
        n.push(i);
      }
      PT(
        e + `
Arguments: ` + Array.prototype.slice.call(n).join("") + `
` + new Error().stack
      ), r = !1;
    }
    return t.apply(this, arguments);
  }, t);
}
var jd = {};
function HT(e, t) {
  k.deprecationHandler != null && k.deprecationHandler(e, t), jd[e] || (PT(t), jd[e] = !0);
}
k.suppressDeprecationWarnings = !1;
k.deprecationHandler = null;
function er(e) {
  return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
}
function V1(e) {
  var t, r;
  for (r in e)
    pe(e, r) && (t = e[r], er(t) ? this[r] = t : this["_" + r] = t);
  this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp(
    (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
  );
}
function Bc(e, t) {
  var r = Cr({}, e), n;
  for (n in t)
    pe(t, n) && (sn(e[n]) && sn(t[n]) ? (r[n] = {}, Cr(r[n], e[n]), Cr(r[n], t[n])) : t[n] != null ? r[n] = t[n] : delete r[n]);
  for (n in e)
    pe(e, n) && !pe(t, n) && sn(e[n]) && (r[n] = Cr({}, r[n]));
  return r;
}
function e_(e) {
  e != null && this.set(e);
}
var xc;
Object.keys ? xc = Object.keys : xc = function(e) {
  var t, r = [];
  for (t in e)
    pe(e, t) && r.push(t);
  return r;
};
var W1 = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function X1(e, t, r) {
  var n = this._calendar[e] || this._calendar.sameElse;
  return er(n) ? n.call(t, r) : n;
}
function zt(e, t, r) {
  var n = "" + Math.abs(e), i = t - n.length, o = e >= 0;
  return (o ? r ? "+" : "" : "-") + Math.pow(10, Math.max(0, i)).toString().substr(1) + n;
}
var t_ = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, ia = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, ku = {}, Mn = {};
function j(e, t, r, n) {
  var i = n;
  typeof n == "string" && (i = function() {
    return this[n]();
  }), e && (Mn[e] = i), t && (Mn[t[0]] = function() {
    return zt(i.apply(this, arguments), t[1], t[2]);
  }), r && (Mn[r] = function() {
    return this.localeData().ordinal(
      i.apply(this, arguments),
      e
    );
  });
}
function Y1(e) {
  return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
}
function K1(e) {
  var t = e.match(t_), r, n;
  for (r = 0, n = t.length; r < n; r++)
    Mn[t[r]] ? t[r] = Mn[t[r]] : t[r] = Y1(t[r]);
  return function(i) {
    var o = "", a;
    for (a = 0; a < n; a++)
      o += er(t[a]) ? t[a].call(i, e) : t[a];
    return o;
  };
}
function Sa(e, t) {
  return e.isValid() ? (t = MT(t, e.localeData()), ku[t] = ku[t] || K1(t), ku[t](e)) : e.localeData().invalidDate();
}
function MT(e, t) {
  var r = 5;
  function n(i) {
    return t.longDateFormat(i) || i;
  }
  for (ia.lastIndex = 0; r >= 0 && ia.test(e); )
    e = e.replace(
      ia,
      n
    ), ia.lastIndex = 0, r -= 1;
  return e;
}
var $1 = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function z1(e) {
  var t = this._longDateFormat[e], r = this._longDateFormat[e.toUpperCase()];
  return t || !r ? t : (this._longDateFormat[e] = r.match(t_).map(function(n) {
    return n === "MMMM" || n === "MM" || n === "DD" || n === "dddd" ? n.slice(1) : n;
  }).join(""), this._longDateFormat[e]);
}
var q1 = "Invalid date";
function J1() {
  return this._invalidDate;
}
var Q1 = "%d", Z1 = /\d{1,2}/;
function eS(e) {
  return this._ordinal.replace("%d", e);
}
var tS = {
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
function rS(e, t, r, n) {
  var i = this._relativeTime[r];
  return er(i) ? i(e, t, r, n) : i.replace(/%d/i, e);
}
function nS(e, t) {
  var r = this._relativeTime[e > 0 ? "future" : "past"];
  return er(r) ? r(t) : r.replace(/%s/i, t);
}
var Bi = {};
function Ze(e, t) {
  var r = e.toLowerCase();
  Bi[r] = Bi[r + "s"] = Bi[t] = e;
}
function yt(e) {
  return typeof e == "string" ? Bi[e] || Bi[e.toLowerCase()] : void 0;
}
function r_(e) {
  var t = {}, r, n;
  for (n in e)
    pe(e, n) && (r = yt(n), r && (t[r] = e[n]));
  return t;
}
var kT = {};
function et(e, t) {
  kT[e] = t;
}
function iS(e) {
  var t = [], r;
  for (r in e)
    pe(e, r) && t.push({ unit: r, priority: kT[r] });
  return t.sort(function(n, i) {
    return n.priority - i.priority;
  }), t;
}
function Ls(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
}
function Et(e) {
  return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
}
function ne(e) {
  var t = +e, r = 0;
  return t !== 0 && isFinite(t) && (r = Et(t)), r;
}
function ci(e, t) {
  return function(r) {
    return r != null ? (LT(this, e, r), k.updateOffset(this, t), this) : ns(this, e);
  };
}
function ns(e, t) {
  return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN;
}
function LT(e, t, r) {
  e.isValid() && !isNaN(r) && (t === "FullYear" && Ls(e.year()) && e.month() === 1 && e.date() === 29 ? (r = ne(r), e._d["set" + (e._isUTC ? "UTC" : "") + t](
    r,
    e.month(),
    Ws(r, e.month())
  )) : e._d["set" + (e._isUTC ? "UTC" : "") + t](r));
}
function oS(e) {
  return e = yt(e), er(this[e]) ? this[e]() : this;
}
function aS(e, t) {
  if (typeof e == "object") {
    e = r_(e);
    var r = iS(e), n, i = r.length;
    for (n = 0; n < i; n++)
      this[r[n].unit](e[r[n].unit]);
  } else if (e = yt(e), er(this[e]))
    return this[e](t);
  return this;
}
var BT = /\d/, Tt = /\d\d/, xT = /\d{3}/, n_ = /\d{4}/, Bs = /[+-]?\d{6}/, De = /\d\d?/, FT = /\d\d\d\d?/, jT = /\d\d\d\d\d\d?/, xs = /\d{1,3}/, i_ = /\d{1,4}/, Fs = /[+-]?\d{1,6}/, li = /\d+/, js = /[+-]?\d+/, sS = /Z|[+-]\d\d:?\d\d/gi, Vs = /Z|[+-]\d\d(?::?\d\d)?/gi, uS = /[+-]?\d+(\.\d{1,3})?/, Bo = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, is;
is = {};
function B(e, t, r) {
  is[e] = er(t) ? t : function(n, i) {
    return n && r ? r : t;
  };
}
function cS(e, t) {
  return pe(is, e) ? is[e](t._strict, t._locale) : new RegExp(lS(e));
}
function lS(e) {
  return pt(
    e.replace("\\", "").replace(
      /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
      function(t, r, n, i, o) {
        return r || n || i || o;
      }
    )
  );
}
function pt(e) {
  return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
var Fc = {};
function Ie(e, t) {
  var r, n = t, i;
  for (typeof e == "string" && (e = [e]), pr(t) && (n = function(o, a) {
    a[t] = ne(o);
  }), i = e.length, r = 0; r < i; r++)
    Fc[e[r]] = n;
}
function xo(e, t) {
  Ie(e, function(r, n, i, o) {
    i._w = i._w || {}, t(r, i._w, i, o);
  });
}
function _S(e, t, r) {
  t != null && pe(Fc, e) && Fc[e](t, r._a, r, e);
}
var Qe = 0, ar = 1, jt = 2, xe = 3, Ut = 4, sr = 5, nn = 6, fS = 7, dS = 8;
function hS(e, t) {
  return (e % t + t) % t;
}
var ke;
Array.prototype.indexOf ? ke = Array.prototype.indexOf : ke = function(e) {
  var t;
  for (t = 0; t < this.length; ++t)
    if (this[t] === e)
      return t;
  return -1;
};
function Ws(e, t) {
  if (isNaN(e) || isNaN(t))
    return NaN;
  var r = hS(t, 12);
  return e += (t - r) / 12, r === 1 ? Ls(e) ? 29 : 28 : 31 - r % 7 % 2;
}
j("M", ["MM", 2], "Mo", function() {
  return this.month() + 1;
});
j("MMM", 0, 0, function(e) {
  return this.localeData().monthsShort(this, e);
});
j("MMMM", 0, 0, function(e) {
  return this.localeData().months(this, e);
});
Ze("month", "M");
et("month", 8);
B("M", De);
B("MM", De, Tt);
B("MMM", function(e, t) {
  return t.monthsShortRegex(e);
});
B("MMMM", function(e, t) {
  return t.monthsRegex(e);
});
Ie(["M", "MM"], function(e, t) {
  t[ar] = ne(e) - 1;
});
Ie(["MMM", "MMMM"], function(e, t, r, n) {
  var i = r._locale.monthsParse(e, n, r._strict);
  i != null ? t[ar] = i : ee(r).invalidMonth = e;
});
var pS = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), VT = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), WT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, mS = Bo, TS = Bo;
function ES(e, t) {
  return e ? kt(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || WT).test(t) ? "format" : "standalone"][e.month()] : kt(this._months) ? this._months : this._months.standalone;
}
function OS(e, t) {
  return e ? kt(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[WT.test(t) ? "format" : "standalone"][e.month()] : kt(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function bS(e, t, r) {
  var n, i, o, a = e.toLocaleLowerCase();
  if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], n = 0; n < 12; ++n)
      o = Zt([2e3, n]), this._shortMonthsParse[n] = this.monthsShort(
        o,
        ""
      ).toLocaleLowerCase(), this._longMonthsParse[n] = this.months(o, "").toLocaleLowerCase();
  return r ? t === "MMM" ? (i = ke.call(this._shortMonthsParse, a), i !== -1 ? i : null) : (i = ke.call(this._longMonthsParse, a), i !== -1 ? i : null) : t === "MMM" ? (i = ke.call(this._shortMonthsParse, a), i !== -1 ? i : (i = ke.call(this._longMonthsParse, a), i !== -1 ? i : null)) : (i = ke.call(this._longMonthsParse, a), i !== -1 ? i : (i = ke.call(this._shortMonthsParse, a), i !== -1 ? i : null));
}
function RS(e, t, r) {
  var n, i, o;
  if (this._monthsParseExact)
    return bS.call(this, e, t, r);
  for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), n = 0; n < 12; n++) {
    if (i = Zt([2e3, n]), r && !this._longMonthsParse[n] && (this._longMonthsParse[n] = new RegExp(
      "^" + this.months(i, "").replace(".", "") + "$",
      "i"
    ), this._shortMonthsParse[n] = new RegExp(
      "^" + this.monthsShort(i, "").replace(".", "") + "$",
      "i"
    )), !r && !this._monthsParse[n] && (o = "^" + this.months(i, "") + "|^" + this.monthsShort(i, ""), this._monthsParse[n] = new RegExp(o.replace(".", ""), "i")), r && t === "MMMM" && this._longMonthsParse[n].test(e))
      return n;
    if (r && t === "MMM" && this._shortMonthsParse[n].test(e))
      return n;
    if (!r && this._monthsParse[n].test(e))
      return n;
  }
}
function XT(e, t) {
  var r;
  if (!e.isValid())
    return e;
  if (typeof t == "string") {
    if (/^\d+$/.test(t))
      t = ne(t);
    else if (t = e.localeData().monthsParse(t), !pr(t))
      return e;
  }
  return r = Math.min(e.date(), Ws(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, r), e;
}
function YT(e) {
  return e != null ? (XT(this, e), k.updateOffset(this, !0), this) : ns(this, "Month");
}
function vS() {
  return Ws(this.year(), this.month());
}
function gS(e) {
  return this._monthsParseExact ? (pe(this, "_monthsRegex") || KT.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (pe(this, "_monthsShortRegex") || (this._monthsShortRegex = mS), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function IS(e) {
  return this._monthsParseExact ? (pe(this, "_monthsRegex") || KT.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (pe(this, "_monthsRegex") || (this._monthsRegex = TS), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
}
function KT() {
  function e(a, s) {
    return s.length - a.length;
  }
  var t = [], r = [], n = [], i, o;
  for (i = 0; i < 12; i++)
    o = Zt([2e3, i]), t.push(this.monthsShort(o, "")), r.push(this.months(o, "")), n.push(this.months(o, "")), n.push(this.monthsShort(o, ""));
  for (t.sort(e), r.sort(e), n.sort(e), i = 0; i < 12; i++)
    t[i] = pt(t[i]), r[i] = pt(r[i]);
  for (i = 0; i < 24; i++)
    n[i] = pt(n[i]);
  this._monthsRegex = new RegExp("^(" + n.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp(
    "^(" + r.join("|") + ")",
    "i"
  ), this._monthsShortStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
j("Y", 0, 0, function() {
  var e = this.year();
  return e <= 9999 ? zt(e, 4) : "+" + e;
});
j(0, ["YY", 2], 0, function() {
  return this.year() % 100;
});
j(0, ["YYYY", 4], 0, "year");
j(0, ["YYYYY", 5], 0, "year");
j(0, ["YYYYYY", 6, !0], 0, "year");
Ze("year", "y");
et("year", 1);
B("Y", js);
B("YY", De, Tt);
B("YYYY", i_, n_);
B("YYYYY", Fs, Bs);
B("YYYYYY", Fs, Bs);
Ie(["YYYYY", "YYYYYY"], Qe);
Ie("YYYY", function(e, t) {
  t[Qe] = e.length === 2 ? k.parseTwoDigitYear(e) : ne(e);
});
Ie("YY", function(e, t) {
  t[Qe] = k.parseTwoDigitYear(e);
});
Ie("Y", function(e, t) {
  t[Qe] = parseInt(e, 10);
});
function xi(e) {
  return Ls(e) ? 366 : 365;
}
k.parseTwoDigitYear = function(e) {
  return ne(e) + (ne(e) > 68 ? 1900 : 2e3);
};
var $T = ci("FullYear", !0);
function NS() {
  return Ls(this.year());
}
function AS(e, t, r, n, i, o, a) {
  var s;
  return e < 100 && e >= 0 ? (s = new Date(e + 400, t, r, n, i, o, a), isFinite(s.getFullYear()) && s.setFullYear(e)) : s = new Date(e, t, r, n, i, o, a), s;
}
function io(e) {
  var t, r;
  return e < 100 && e >= 0 ? (r = Array.prototype.slice.call(arguments), r[0] = e + 400, t = new Date(Date.UTC.apply(null, r)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t;
}
function os(e, t, r) {
  var n = 7 + t - r, i = (7 + io(e, 0, n).getUTCDay() - t) % 7;
  return -i + n - 1;
}
function zT(e, t, r, n, i) {
  var o = (7 + r - n) % 7, a = os(e, n, i), s = 1 + 7 * (t - 1) + o + a, u, c;
  return s <= 0 ? (u = e - 1, c = xi(u) + s) : s > xi(e) ? (u = e + 1, c = s - xi(e)) : (u = e, c = s), {
    year: u,
    dayOfYear: c
  };
}
function oo(e, t, r) {
  var n = os(e.year(), t, r), i = Math.floor((e.dayOfYear() - n - 1) / 7) + 1, o, a;
  return i < 1 ? (a = e.year() - 1, o = i + _r(a, t, r)) : i > _r(e.year(), t, r) ? (o = i - _r(e.year(), t, r), a = e.year() + 1) : (a = e.year(), o = i), {
    week: o,
    year: a
  };
}
function _r(e, t, r) {
  var n = os(e, t, r), i = os(e + 1, t, r);
  return (xi(e) - n + i) / 7;
}
j("w", ["ww", 2], "wo", "week");
j("W", ["WW", 2], "Wo", "isoWeek");
Ze("week", "w");
Ze("isoWeek", "W");
et("week", 5);
et("isoWeek", 5);
B("w", De);
B("ww", De, Tt);
B("W", De);
B("WW", De, Tt);
xo(
  ["w", "ww", "W", "WW"],
  function(e, t, r, n) {
    t[n.substr(0, 1)] = ne(e);
  }
);
function yS(e) {
  return oo(e, this._week.dow, this._week.doy).week;
}
var SS = {
  dow: 0,
  // Sunday is the first day of the week.
  doy: 6
  // The week that contains Jan 6th is the first week of the year.
};
function DS() {
  return this._week.dow;
}
function GS() {
  return this._week.doy;
}
function CS(e) {
  var t = this.localeData().week(this);
  return e == null ? t : this.add((e - t) * 7, "d");
}
function US(e) {
  var t = oo(this, 1, 4).week;
  return e == null ? t : this.add((e - t) * 7, "d");
}
j("d", 0, "do", "day");
j("dd", 0, 0, function(e) {
  return this.localeData().weekdaysMin(this, e);
});
j("ddd", 0, 0, function(e) {
  return this.localeData().weekdaysShort(this, e);
});
j("dddd", 0, 0, function(e) {
  return this.localeData().weekdays(this, e);
});
j("e", 0, 0, "weekday");
j("E", 0, 0, "isoWeekday");
Ze("day", "d");
Ze("weekday", "e");
Ze("isoWeekday", "E");
et("day", 11);
et("weekday", 11);
et("isoWeekday", 11);
B("d", De);
B("e", De);
B("E", De);
B("dd", function(e, t) {
  return t.weekdaysMinRegex(e);
});
B("ddd", function(e, t) {
  return t.weekdaysShortRegex(e);
});
B("dddd", function(e, t) {
  return t.weekdaysRegex(e);
});
xo(["dd", "ddd", "dddd"], function(e, t, r, n) {
  var i = r._locale.weekdaysParse(e, n, r._strict);
  i != null ? t.d = i : ee(r).invalidWeekday = e;
});
xo(["d", "e", "E"], function(e, t, r, n) {
  t[n] = ne(e);
});
function wS(e, t) {
  return typeof e != "string" ? e : isNaN(e) ? (e = t.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10);
}
function PS(e, t) {
  return typeof e == "string" ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
}
function o_(e, t) {
  return e.slice(t, 7).concat(e.slice(0, t));
}
var HS = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), qT = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), MS = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), kS = Bo, LS = Bo, BS = Bo;
function xS(e, t) {
  var r = kt(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
  return e === !0 ? o_(r, this._week.dow) : e ? r[e.day()] : r;
}
function FS(e) {
  return e === !0 ? o_(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
}
function jS(e) {
  return e === !0 ? o_(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
}
function VS(e, t, r) {
  var n, i, o, a = e.toLocaleLowerCase();
  if (!this._weekdaysParse)
    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], n = 0; n < 7; ++n)
      o = Zt([2e3, 1]).day(n), this._minWeekdaysParse[n] = this.weekdaysMin(
        o,
        ""
      ).toLocaleLowerCase(), this._shortWeekdaysParse[n] = this.weekdaysShort(
        o,
        ""
      ).toLocaleLowerCase(), this._weekdaysParse[n] = this.weekdays(o, "").toLocaleLowerCase();
  return r ? t === "dddd" ? (i = ke.call(this._weekdaysParse, a), i !== -1 ? i : null) : t === "ddd" ? (i = ke.call(this._shortWeekdaysParse, a), i !== -1 ? i : null) : (i = ke.call(this._minWeekdaysParse, a), i !== -1 ? i : null) : t === "dddd" ? (i = ke.call(this._weekdaysParse, a), i !== -1 || (i = ke.call(this._shortWeekdaysParse, a), i !== -1) ? i : (i = ke.call(this._minWeekdaysParse, a), i !== -1 ? i : null)) : t === "ddd" ? (i = ke.call(this._shortWeekdaysParse, a), i !== -1 || (i = ke.call(this._weekdaysParse, a), i !== -1) ? i : (i = ke.call(this._minWeekdaysParse, a), i !== -1 ? i : null)) : (i = ke.call(this._minWeekdaysParse, a), i !== -1 || (i = ke.call(this._weekdaysParse, a), i !== -1) ? i : (i = ke.call(this._shortWeekdaysParse, a), i !== -1 ? i : null));
}
function WS(e, t, r) {
  var n, i, o;
  if (this._weekdaysParseExact)
    return VS.call(this, e, t, r);
  for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), n = 0; n < 7; n++) {
    if (i = Zt([2e3, 1]).day(n), r && !this._fullWeekdaysParse[n] && (this._fullWeekdaysParse[n] = new RegExp(
      "^" + this.weekdays(i, "").replace(".", "\\.?") + "$",
      "i"
    ), this._shortWeekdaysParse[n] = new RegExp(
      "^" + this.weekdaysShort(i, "").replace(".", "\\.?") + "$",
      "i"
    ), this._minWeekdaysParse[n] = new RegExp(
      "^" + this.weekdaysMin(i, "").replace(".", "\\.?") + "$",
      "i"
    )), this._weekdaysParse[n] || (o = "^" + this.weekdays(i, "") + "|^" + this.weekdaysShort(i, "") + "|^" + this.weekdaysMin(i, ""), this._weekdaysParse[n] = new RegExp(o.replace(".", ""), "i")), r && t === "dddd" && this._fullWeekdaysParse[n].test(e))
      return n;
    if (r && t === "ddd" && this._shortWeekdaysParse[n].test(e))
      return n;
    if (r && t === "dd" && this._minWeekdaysParse[n].test(e))
      return n;
    if (!r && this._weekdaysParse[n].test(e))
      return n;
  }
}
function XS(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
  return e != null ? (e = wS(e, this.localeData()), this.add(e - t, "d")) : t;
}
function YS(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return e == null ? t : this.add(e - t, "d");
}
function KS(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    var t = PS(e, this.localeData());
    return this.day(this.day() % 7 ? t : t - 7);
  } else
    return this.day() || 7;
}
function $S(e) {
  return this._weekdaysParseExact ? (pe(this, "_weekdaysRegex") || a_.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (pe(this, "_weekdaysRegex") || (this._weekdaysRegex = kS), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function zS(e) {
  return this._weekdaysParseExact ? (pe(this, "_weekdaysRegex") || a_.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (pe(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = LS), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function qS(e) {
  return this._weekdaysParseExact ? (pe(this, "_weekdaysRegex") || a_.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (pe(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = BS), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function a_() {
  function e(_, l) {
    return l.length - _.length;
  }
  var t = [], r = [], n = [], i = [], o, a, s, u, c;
  for (o = 0; o < 7; o++)
    a = Zt([2e3, 1]).day(o), s = pt(this.weekdaysMin(a, "")), u = pt(this.weekdaysShort(a, "")), c = pt(this.weekdays(a, "")), t.push(s), r.push(u), n.push(c), i.push(s), i.push(u), i.push(c);
  t.sort(e), r.sort(e), n.sort(e), i.sort(e), this._weekdaysRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp(
    "^(" + n.join("|") + ")",
    "i"
  ), this._weekdaysShortStrictRegex = new RegExp(
    "^(" + r.join("|") + ")",
    "i"
  ), this._weekdaysMinStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
function s_() {
  return this.hours() % 12 || 12;
}
function JS() {
  return this.hours() || 24;
}
j("H", ["HH", 2], 0, "hour");
j("h", ["hh", 2], 0, s_);
j("k", ["kk", 2], 0, JS);
j("hmm", 0, 0, function() {
  return "" + s_.apply(this) + zt(this.minutes(), 2);
});
j("hmmss", 0, 0, function() {
  return "" + s_.apply(this) + zt(this.minutes(), 2) + zt(this.seconds(), 2);
});
j("Hmm", 0, 0, function() {
  return "" + this.hours() + zt(this.minutes(), 2);
});
j("Hmmss", 0, 0, function() {
  return "" + this.hours() + zt(this.minutes(), 2) + zt(this.seconds(), 2);
});
function JT(e, t) {
  j(e, 0, 0, function() {
    return this.localeData().meridiem(
      this.hours(),
      this.minutes(),
      t
    );
  });
}
JT("a", !0);
JT("A", !1);
Ze("hour", "h");
et("hour", 13);
function QT(e, t) {
  return t._meridiemParse;
}
B("a", QT);
B("A", QT);
B("H", De);
B("h", De);
B("k", De);
B("HH", De, Tt);
B("hh", De, Tt);
B("kk", De, Tt);
B("hmm", FT);
B("hmmss", jT);
B("Hmm", FT);
B("Hmmss", jT);
Ie(["H", "HH"], xe);
Ie(["k", "kk"], function(e, t, r) {
  var n = ne(e);
  t[xe] = n === 24 ? 0 : n;
});
Ie(["a", "A"], function(e, t, r) {
  r._isPm = r._locale.isPM(e), r._meridiem = e;
});
Ie(["h", "hh"], function(e, t, r) {
  t[xe] = ne(e), ee(r).bigHour = !0;
});
Ie("hmm", function(e, t, r) {
  var n = e.length - 2;
  t[xe] = ne(e.substr(0, n)), t[Ut] = ne(e.substr(n)), ee(r).bigHour = !0;
});
Ie("hmmss", function(e, t, r) {
  var n = e.length - 4, i = e.length - 2;
  t[xe] = ne(e.substr(0, n)), t[Ut] = ne(e.substr(n, 2)), t[sr] = ne(e.substr(i)), ee(r).bigHour = !0;
});
Ie("Hmm", function(e, t, r) {
  var n = e.length - 2;
  t[xe] = ne(e.substr(0, n)), t[Ut] = ne(e.substr(n));
});
Ie("Hmmss", function(e, t, r) {
  var n = e.length - 4, i = e.length - 2;
  t[xe] = ne(e.substr(0, n)), t[Ut] = ne(e.substr(n, 2)), t[sr] = ne(e.substr(i));
});
function QS(e) {
  return (e + "").toLowerCase().charAt(0) === "p";
}
var ZS = /[ap]\.?m?\.?/i, e0 = ci("Hours", !0);
function t0(e, t, r) {
  return e > 11 ? r ? "pm" : "PM" : r ? "am" : "AM";
}
var ZT = {
  calendar: W1,
  longDateFormat: $1,
  invalidDate: q1,
  ordinal: Q1,
  dayOfMonthOrdinalParse: Z1,
  relativeTime: tS,
  months: pS,
  monthsShort: VT,
  week: SS,
  weekdays: HS,
  weekdaysMin: MS,
  weekdaysShort: qT,
  meridiemParse: ZS
}, Ge = {}, vi = {}, ao;
function r0(e, t) {
  var r, n = Math.min(e.length, t.length);
  for (r = 0; r < n; r += 1)
    if (e[r] !== t[r])
      return r;
  return n;
}
function Vd(e) {
  return e && e.toLowerCase().replace("_", "-");
}
function n0(e) {
  for (var t = 0, r, n, i, o; t < e.length; ) {
    for (o = Vd(e[t]).split("-"), r = o.length, n = Vd(e[t + 1]), n = n ? n.split("-") : null; r > 0; ) {
      if (i = Xs(o.slice(0, r).join("-")), i)
        return i;
      if (n && n.length >= r && r0(o, n) >= r - 1)
        break;
      r--;
    }
    t++;
  }
  return ao;
}
function i0(e) {
  return e.match("^[^/\\\\]*$") != null;
}
function Xs(e) {
  var t = null, r;
  if (Ge[e] === void 0 && typeof module < "u" && module && module.exports && i0(e))
    try {
      t = ao._abbr, r = x1, r("./locale/" + e), xr(t);
    } catch {
      Ge[e] = null;
    }
  return Ge[e];
}
function xr(e, t) {
  var r;
  return e && (st(t) ? r = Or(e) : r = u_(e, t), r ? ao = r : typeof console < "u" && console.warn && console.warn(
    "Locale " + e + " not found. Did you forget to load it?"
  )), ao._abbr;
}
function u_(e, t) {
  if (t !== null) {
    var r, n = ZT;
    if (t.abbr = e, Ge[e] != null)
      HT(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ), n = Ge[e]._config;
    else if (t.parentLocale != null)
      if (Ge[t.parentLocale] != null)
        n = Ge[t.parentLocale]._config;
      else if (r = Xs(t.parentLocale), r != null)
        n = r._config;
      else
        return vi[t.parentLocale] || (vi[t.parentLocale] = []), vi[t.parentLocale].push({
          name: e,
          config: t
        }), null;
    return Ge[e] = new e_(Bc(n, t)), vi[e] && vi[e].forEach(function(i) {
      u_(i.name, i.config);
    }), xr(e), Ge[e];
  } else
    return delete Ge[e], null;
}
function o0(e, t) {
  if (t != null) {
    var r, n, i = ZT;
    Ge[e] != null && Ge[e].parentLocale != null ? Ge[e].set(Bc(Ge[e]._config, t)) : (n = Xs(e), n != null && (i = n._config), t = Bc(i, t), n == null && (t.abbr = e), r = new e_(t), r.parentLocale = Ge[e], Ge[e] = r), xr(e);
  } else
    Ge[e] != null && (Ge[e].parentLocale != null ? (Ge[e] = Ge[e].parentLocale, e === xr() && xr(e)) : Ge[e] != null && delete Ge[e]);
  return Ge[e];
}
function Or(e) {
  var t;
  if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
    return ao;
  if (!kt(e)) {
    if (t = Xs(e), t)
      return t;
    e = [e];
  }
  return n0(e);
}
function a0() {
  return xc(Ge);
}
function c_(e) {
  var t, r = e._a;
  return r && ee(e).overflow === -2 && (t = r[ar] < 0 || r[ar] > 11 ? ar : r[jt] < 1 || r[jt] > Ws(r[Qe], r[ar]) ? jt : r[xe] < 0 || r[xe] > 24 || r[xe] === 24 && (r[Ut] !== 0 || r[sr] !== 0 || r[nn] !== 0) ? xe : r[Ut] < 0 || r[Ut] > 59 ? Ut : r[sr] < 0 || r[sr] > 59 ? sr : r[nn] < 0 || r[nn] > 999 ? nn : -1, ee(e)._overflowDayOfYear && (t < Qe || t > jt) && (t = jt), ee(e)._overflowWeeks && t === -1 && (t = fS), ee(e)._overflowWeekday && t === -1 && (t = dS), ee(e).overflow = t), e;
}
var s0 = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, u0 = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, c0 = /Z|[+-]\d\d(?::?\d\d)?/, oa = [
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
], Lu = [
  ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
  ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
  ["HH:mm:ss", /\d\d:\d\d:\d\d/],
  ["HH:mm", /\d\d:\d\d/],
  ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
  ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
  ["HHmmss", /\d\d\d\d\d\d/],
  ["HHmm", /\d\d\d\d/],
  ["HH", /\d\d/]
], l0 = /^\/?Date\((-?\d+)/i, _0 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, f0 = {
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
function eE(e) {
  var t, r, n = e._i, i = s0.exec(n) || u0.exec(n), o, a, s, u, c = oa.length, _ = Lu.length;
  if (i) {
    for (ee(e).iso = !0, t = 0, r = c; t < r; t++)
      if (oa[t][1].exec(i[1])) {
        a = oa[t][0], o = oa[t][2] !== !1;
        break;
      }
    if (a == null) {
      e._isValid = !1;
      return;
    }
    if (i[3]) {
      for (t = 0, r = _; t < r; t++)
        if (Lu[t][1].exec(i[3])) {
          s = (i[2] || " ") + Lu[t][0];
          break;
        }
      if (s == null) {
        e._isValid = !1;
        return;
      }
    }
    if (!o && s != null) {
      e._isValid = !1;
      return;
    }
    if (i[4])
      if (c0.exec(i[4]))
        u = "Z";
      else {
        e._isValid = !1;
        return;
      }
    e._f = a + (s || "") + (u || ""), __(e);
  } else
    e._isValid = !1;
}
function d0(e, t, r, n, i, o) {
  var a = [
    h0(e),
    VT.indexOf(t),
    parseInt(r, 10),
    parseInt(n, 10),
    parseInt(i, 10)
  ];
  return o && a.push(parseInt(o, 10)), a;
}
function h0(e) {
  var t = parseInt(e, 10);
  return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
}
function p0(e) {
  return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function m0(e, t, r) {
  if (e) {
    var n = qT.indexOf(e), i = new Date(
      t[0],
      t[1],
      t[2]
    ).getDay();
    if (n !== i)
      return ee(r).weekdayMismatch = !0, r._isValid = !1, !1;
  }
  return !0;
}
function T0(e, t, r) {
  if (e)
    return f0[e];
  if (t)
    return 0;
  var n = parseInt(r, 10), i = n % 100, o = (n - i) / 100;
  return o * 60 + i;
}
function tE(e) {
  var t = _0.exec(p0(e._i)), r;
  if (t) {
    if (r = d0(
      t[4],
      t[3],
      t[2],
      t[5],
      t[6],
      t[7]
    ), !m0(t[1], r, e))
      return;
    e._a = r, e._tzm = T0(t[8], t[9], t[10]), e._d = io.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), ee(e).rfc2822 = !0;
  } else
    e._isValid = !1;
}
function E0(e) {
  var t = l0.exec(e._i);
  if (t !== null) {
    e._d = /* @__PURE__ */ new Date(+t[1]);
    return;
  }
  if (eE(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  if (tE(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  e._strict ? e._isValid = !1 : k.createFromInputFallback(e);
}
k.createFromInputFallback = At(
  "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  function(e) {
    e._d = /* @__PURE__ */ new Date(e._i + (e._useUTC ? " UTC" : ""));
  }
);
function gn(e, t, r) {
  return e ?? t ?? r;
}
function O0(e) {
  var t = new Date(k.now());
  return e._useUTC ? [
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate()
  ] : [t.getFullYear(), t.getMonth(), t.getDate()];
}
function l_(e) {
  var t, r, n = [], i, o, a;
  if (!e._d) {
    for (i = O0(e), e._w && e._a[jt] == null && e._a[ar] == null && b0(e), e._dayOfYear != null && (a = gn(e._a[Qe], i[Qe]), (e._dayOfYear > xi(a) || e._dayOfYear === 0) && (ee(e)._overflowDayOfYear = !0), r = io(a, 0, e._dayOfYear), e._a[ar] = r.getUTCMonth(), e._a[jt] = r.getUTCDate()), t = 0; t < 3 && e._a[t] == null; ++t)
      e._a[t] = n[t] = i[t];
    for (; t < 7; t++)
      e._a[t] = n[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
    e._a[xe] === 24 && e._a[Ut] === 0 && e._a[sr] === 0 && e._a[nn] === 0 && (e._nextDay = !0, e._a[xe] = 0), e._d = (e._useUTC ? io : AS).apply(
      null,
      n
    ), o = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[xe] = 24), e._w && typeof e._w.d < "u" && e._w.d !== o && (ee(e).weekdayMismatch = !0);
  }
}
function b0(e) {
  var t, r, n, i, o, a, s, u, c;
  t = e._w, t.GG != null || t.W != null || t.E != null ? (o = 1, a = 4, r = gn(
    t.GG,
    e._a[Qe],
    oo(Se(), 1, 4).year
  ), n = gn(t.W, 1), i = gn(t.E, 1), (i < 1 || i > 7) && (u = !0)) : (o = e._locale._week.dow, a = e._locale._week.doy, c = oo(Se(), o, a), r = gn(t.gg, e._a[Qe], c.year), n = gn(t.w, c.week), t.d != null ? (i = t.d, (i < 0 || i > 6) && (u = !0)) : t.e != null ? (i = t.e + o, (t.e < 0 || t.e > 6) && (u = !0)) : i = o), n < 1 || n > _r(r, o, a) ? ee(e)._overflowWeeks = !0 : u != null ? ee(e)._overflowWeekday = !0 : (s = zT(r, n, i, o, a), e._a[Qe] = s.year, e._dayOfYear = s.dayOfYear);
}
k.ISO_8601 = function() {
};
k.RFC_2822 = function() {
};
function __(e) {
  if (e._f === k.ISO_8601) {
    eE(e);
    return;
  }
  if (e._f === k.RFC_2822) {
    tE(e);
    return;
  }
  e._a = [], ee(e).empty = !0;
  var t = "" + e._i, r, n, i, o, a, s = t.length, u = 0, c, _;
  for (i = MT(e._f, e._locale).match(t_) || [], _ = i.length, r = 0; r < _; r++)
    o = i[r], n = (t.match(cS(o, e)) || [])[0], n && (a = t.substr(0, t.indexOf(n)), a.length > 0 && ee(e).unusedInput.push(a), t = t.slice(
      t.indexOf(n) + n.length
    ), u += n.length), Mn[o] ? (n ? ee(e).empty = !1 : ee(e).unusedTokens.push(o), _S(o, n, e)) : e._strict && !n && ee(e).unusedTokens.push(o);
  ee(e).charsLeftOver = s - u, t.length > 0 && ee(e).unusedInput.push(t), e._a[xe] <= 12 && ee(e).bigHour === !0 && e._a[xe] > 0 && (ee(e).bigHour = void 0), ee(e).parsedDateParts = e._a.slice(0), ee(e).meridiem = e._meridiem, e._a[xe] = R0(
    e._locale,
    e._a[xe],
    e._meridiem
  ), c = ee(e).era, c !== null && (e._a[Qe] = e._locale.erasConvertYear(c, e._a[Qe])), l_(e), c_(e);
}
function R0(e, t, r) {
  var n;
  return r == null ? t : e.meridiemHour != null ? e.meridiemHour(t, r) : (e.isPM != null && (n = e.isPM(r), n && t < 12 && (t += 12), !n && t === 12 && (t = 0)), t);
}
function v0(e) {
  var t, r, n, i, o, a, s = !1, u = e._f.length;
  if (u === 0) {
    ee(e).invalidFormat = !0, e._d = /* @__PURE__ */ new Date(NaN);
    return;
  }
  for (i = 0; i < u; i++)
    o = 0, a = !1, t = Zl({}, e), e._useUTC != null && (t._useUTC = e._useUTC), t._f = e._f[i], __(t), Ql(t) && (a = !0), o += ee(t).charsLeftOver, o += ee(t).unusedTokens.length * 10, ee(t).score = o, s ? o < n && (n = o, r = t) : (n == null || o < n || a) && (n = o, r = t, a && (s = !0));
  Cr(e, r || t);
}
function g0(e) {
  if (!e._d) {
    var t = r_(e._i), r = t.day === void 0 ? t.date : t.day;
    e._a = wT(
      [t.year, t.month, r, t.hour, t.minute, t.second, t.millisecond],
      function(n) {
        return n && parseInt(n, 10);
      }
    ), l_(e);
  }
}
function I0(e) {
  var t = new Lo(c_(rE(e)));
  return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t;
}
function rE(e) {
  var t = e._i, r = e._f;
  return e._locale = e._locale || Or(e._l), t === null || r === void 0 && t === "" ? ks({ nullInput: !0 }) : (typeof t == "string" && (e._i = t = e._locale.preparse(t)), Lt(t) ? new Lo(c_(t)) : (ko(t) ? e._d = t : kt(r) ? v0(e) : r ? __(e) : N0(e), Ql(e) || (e._d = null), e));
}
function N0(e) {
  var t = e._i;
  st(t) ? e._d = new Date(k.now()) : ko(t) ? e._d = new Date(t.valueOf()) : typeof t == "string" ? E0(e) : kt(t) ? (e._a = wT(t.slice(0), function(r) {
    return parseInt(r, 10);
  }), l_(e)) : sn(t) ? g0(e) : pr(t) ? e._d = new Date(t) : k.createFromInputFallback(e);
}
function nE(e, t, r, n, i) {
  var o = {};
  return (t === !0 || t === !1) && (n = t, t = void 0), (r === !0 || r === !1) && (n = r, r = void 0), (sn(e) && Jl(e) || kt(e) && e.length === 0) && (e = void 0), o._isAMomentObject = !0, o._useUTC = o._isUTC = i, o._l = r, o._i = e, o._f = t, o._strict = n, I0(o);
}
function Se(e, t, r, n) {
  return nE(e, t, r, n, !1);
}
var A0 = At(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = Se.apply(null, arguments);
    return this.isValid() && e.isValid() ? e < this ? this : e : ks();
  }
), y0 = At(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = Se.apply(null, arguments);
    return this.isValid() && e.isValid() ? e > this ? this : e : ks();
  }
);
function iE(e, t) {
  var r, n;
  if (t.length === 1 && kt(t[0]) && (t = t[0]), !t.length)
    return Se();
  for (r = t[0], n = 1; n < t.length; ++n)
    (!t[n].isValid() || t[n][e](r)) && (r = t[n]);
  return r;
}
function S0() {
  var e = [].slice.call(arguments, 0);
  return iE("isBefore", e);
}
function D0() {
  var e = [].slice.call(arguments, 0);
  return iE("isAfter", e);
}
var G0 = function() {
  return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
}, gi = [
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
function C0(e) {
  var t, r = !1, n, i = gi.length;
  for (t in e)
    if (pe(e, t) && !(ke.call(gi, t) !== -1 && (e[t] == null || !isNaN(e[t]))))
      return !1;
  for (n = 0; n < i; ++n)
    if (e[gi[n]]) {
      if (r)
        return !1;
      parseFloat(e[gi[n]]) !== ne(e[gi[n]]) && (r = !0);
    }
  return !0;
}
function U0() {
  return this._isValid;
}
function w0() {
  return xt(NaN);
}
function Ys(e) {
  var t = r_(e), r = t.year || 0, n = t.quarter || 0, i = t.month || 0, o = t.week || t.isoWeek || 0, a = t.day || 0, s = t.hour || 0, u = t.minute || 0, c = t.second || 0, _ = t.millisecond || 0;
  this._isValid = C0(t), this._milliseconds = +_ + c * 1e3 + // 1000
  u * 6e4 + // 1000 * 60
  s * 1e3 * 60 * 60, this._days = +a + o * 7, this._months = +i + n * 3 + r * 12, this._data = {}, this._locale = Or(), this._bubble();
}
function Da(e) {
  return e instanceof Ys;
}
function jc(e) {
  return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
}
function P0(e, t, r) {
  var n = Math.min(e.length, t.length), i = Math.abs(e.length - t.length), o = 0, a;
  for (a = 0; a < n; a++)
    (r && e[a] !== t[a] || !r && ne(e[a]) !== ne(t[a])) && o++;
  return o + i;
}
function oE(e, t) {
  j(e, 0, 0, function() {
    var r = this.utcOffset(), n = "+";
    return r < 0 && (r = -r, n = "-"), n + zt(~~(r / 60), 2) + t + zt(~~r % 60, 2);
  });
}
oE("Z", ":");
oE("ZZ", "");
B("Z", Vs);
B("ZZ", Vs);
Ie(["Z", "ZZ"], function(e, t, r) {
  r._useUTC = !0, r._tzm = f_(Vs, e);
});
var H0 = /([\+\-]|\d\d)/gi;
function f_(e, t) {
  var r = (t || "").match(e), n, i, o;
  return r === null ? null : (n = r[r.length - 1] || [], i = (n + "").match(H0) || ["-", 0, 0], o = +(i[1] * 60) + ne(i[2]), o === 0 ? 0 : i[0] === "+" ? o : -o);
}
function d_(e, t) {
  var r, n;
  return t._isUTC ? (r = t.clone(), n = (Lt(e) || ko(e) ? e.valueOf() : Se(e).valueOf()) - r.valueOf(), r._d.setTime(r._d.valueOf() + n), k.updateOffset(r, !1), r) : Se(e).local();
}
function Vc(e) {
  return -Math.round(e._d.getTimezoneOffset());
}
k.updateOffset = function() {
};
function M0(e, t, r) {
  var n = this._offset || 0, i;
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    if (typeof e == "string") {
      if (e = f_(Vs, e), e === null)
        return this;
    } else
      Math.abs(e) < 16 && !r && (e = e * 60);
    return !this._isUTC && t && (i = Vc(this)), this._offset = e, this._isUTC = !0, i != null && this.add(i, "m"), n !== e && (!t || this._changeInProgress ? uE(
      this,
      xt(e - n, "m"),
      1,
      !1
    ) : this._changeInProgress || (this._changeInProgress = !0, k.updateOffset(this, !0), this._changeInProgress = null)), this;
  } else
    return this._isUTC ? n : Vc(this);
}
function k0(e, t) {
  return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
}
function L0(e) {
  return this.utcOffset(0, e);
}
function B0(e) {
  return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Vc(this), "m")), this;
}
function x0() {
  if (this._tzm != null)
    this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var e = f_(sS, this._i);
    e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
  }
  return this;
}
function F0(e) {
  return this.isValid() ? (e = e ? Se(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1;
}
function j0() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function V0() {
  if (!st(this._isDSTShifted))
    return this._isDSTShifted;
  var e = {}, t;
  return Zl(e, this), e = rE(e), e._a ? (t = e._isUTC ? Zt(e._a) : Se(e._a), this._isDSTShifted = this.isValid() && P0(e._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function W0() {
  return this.isValid() ? !this._isUTC : !1;
}
function X0() {
  return this.isValid() ? this._isUTC : !1;
}
function aE() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var Y0 = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, K0 = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function xt(e, t) {
  var r = e, n = null, i, o, a;
  return Da(e) ? r = {
    ms: e._milliseconds,
    d: e._days,
    M: e._months
  } : pr(e) || !isNaN(+e) ? (r = {}, t ? r[t] = +e : r.milliseconds = +e) : (n = Y0.exec(e)) ? (i = n[1] === "-" ? -1 : 1, r = {
    y: 0,
    d: ne(n[jt]) * i,
    h: ne(n[xe]) * i,
    m: ne(n[Ut]) * i,
    s: ne(n[sr]) * i,
    ms: ne(jc(n[nn] * 1e3)) * i
    // the millisecond decimal point is included in the match
  }) : (n = K0.exec(e)) ? (i = n[1] === "-" ? -1 : 1, r = {
    y: en(n[2], i),
    M: en(n[3], i),
    w: en(n[4], i),
    d: en(n[5], i),
    h: en(n[6], i),
    m: en(n[7], i),
    s: en(n[8], i)
  }) : r == null ? r = {} : typeof r == "object" && ("from" in r || "to" in r) && (a = $0(
    Se(r.from),
    Se(r.to)
  ), r = {}, r.ms = a.milliseconds, r.M = a.months), o = new Ys(r), Da(e) && pe(e, "_locale") && (o._locale = e._locale), Da(e) && pe(e, "_isValid") && (o._isValid = e._isValid), o;
}
xt.fn = Ys.prototype;
xt.invalid = w0;
function en(e, t) {
  var r = e && parseFloat(e.replace(",", "."));
  return (isNaN(r) ? 0 : r) * t;
}
function Wd(e, t) {
  var r = {};
  return r.months = t.month() - e.month() + (t.year() - e.year()) * 12, e.clone().add(r.months, "M").isAfter(t) && --r.months, r.milliseconds = +t - +e.clone().add(r.months, "M"), r;
}
function $0(e, t) {
  var r;
  return e.isValid() && t.isValid() ? (t = d_(t, e), e.isBefore(t) ? r = Wd(e, t) : (r = Wd(t, e), r.milliseconds = -r.milliseconds, r.months = -r.months), r) : { milliseconds: 0, months: 0 };
}
function sE(e, t) {
  return function(r, n) {
    var i, o;
    return n !== null && !isNaN(+n) && (HT(
      t,
      "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
    ), o = r, r = n, n = o), i = xt(r, n), uE(this, i, e), this;
  };
}
function uE(e, t, r, n) {
  var i = t._milliseconds, o = jc(t._days), a = jc(t._months);
  e.isValid() && (n = n ?? !0, a && XT(e, ns(e, "Month") + a * r), o && LT(e, "Date", ns(e, "Date") + o * r), i && e._d.setTime(e._d.valueOf() + i * r), n && k.updateOffset(e, o || a));
}
var z0 = sE(1, "add"), q0 = sE(-1, "subtract");
function cE(e) {
  return typeof e == "string" || e instanceof String;
}
function J0(e) {
  return Lt(e) || ko(e) || cE(e) || pr(e) || Z0(e) || Q0(e) || e === null || e === void 0;
}
function Q0(e) {
  var t = sn(e) && !Jl(e), r = !1, n = [
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
  ], i, o, a = n.length;
  for (i = 0; i < a; i += 1)
    o = n[i], r = r || pe(e, o);
  return t && r;
}
function Z0(e) {
  var t = kt(e), r = !1;
  return t && (r = e.filter(function(n) {
    return !pr(n) && cE(e);
  }).length === 0), t && r;
}
function eD(e) {
  var t = sn(e) && !Jl(e), r = !1, n = [
    "sameDay",
    "nextDay",
    "lastDay",
    "nextWeek",
    "lastWeek",
    "sameElse"
  ], i, o;
  for (i = 0; i < n.length; i += 1)
    o = n[i], r = r || pe(e, o);
  return t && r;
}
function tD(e, t) {
  var r = e.diff(t, "days", !0);
  return r < -6 ? "sameElse" : r < -1 ? "lastWeek" : r < 0 ? "lastDay" : r < 1 ? "sameDay" : r < 2 ? "nextDay" : r < 7 ? "nextWeek" : "sameElse";
}
function rD(e, t) {
  arguments.length === 1 && (arguments[0] ? J0(arguments[0]) ? (e = arguments[0], t = void 0) : eD(arguments[0]) && (t = arguments[0], e = void 0) : (e = void 0, t = void 0));
  var r = e || Se(), n = d_(r, this).startOf("day"), i = k.calendarFormat(this, n) || "sameElse", o = t && (er(t[i]) ? t[i].call(this, r) : t[i]);
  return this.format(
    o || this.localeData().calendar(i, this, Se(r))
  );
}
function nD() {
  return new Lo(this);
}
function iD(e, t) {
  var r = Lt(e) ? e : Se(e);
  return this.isValid() && r.isValid() ? (t = yt(t) || "millisecond", t === "millisecond" ? this.valueOf() > r.valueOf() : r.valueOf() < this.clone().startOf(t).valueOf()) : !1;
}
function oD(e, t) {
  var r = Lt(e) ? e : Se(e);
  return this.isValid() && r.isValid() ? (t = yt(t) || "millisecond", t === "millisecond" ? this.valueOf() < r.valueOf() : this.clone().endOf(t).valueOf() < r.valueOf()) : !1;
}
function aD(e, t, r, n) {
  var i = Lt(e) ? e : Se(e), o = Lt(t) ? t : Se(t);
  return this.isValid() && i.isValid() && o.isValid() ? (n = n || "()", (n[0] === "(" ? this.isAfter(i, r) : !this.isBefore(i, r)) && (n[1] === ")" ? this.isBefore(o, r) : !this.isAfter(o, r))) : !1;
}
function sD(e, t) {
  var r = Lt(e) ? e : Se(e), n;
  return this.isValid() && r.isValid() ? (t = yt(t) || "millisecond", t === "millisecond" ? this.valueOf() === r.valueOf() : (n = r.valueOf(), this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf())) : !1;
}
function uD(e, t) {
  return this.isSame(e, t) || this.isAfter(e, t);
}
function cD(e, t) {
  return this.isSame(e, t) || this.isBefore(e, t);
}
function lD(e, t, r) {
  var n, i, o;
  if (!this.isValid())
    return NaN;
  if (n = d_(e, this), !n.isValid())
    return NaN;
  switch (i = (n.utcOffset() - this.utcOffset()) * 6e4, t = yt(t), t) {
    case "year":
      o = Ga(this, n) / 12;
      break;
    case "month":
      o = Ga(this, n);
      break;
    case "quarter":
      o = Ga(this, n) / 3;
      break;
    case "second":
      o = (this - n) / 1e3;
      break;
    case "minute":
      o = (this - n) / 6e4;
      break;
    case "hour":
      o = (this - n) / 36e5;
      break;
    case "day":
      o = (this - n - i) / 864e5;
      break;
    case "week":
      o = (this - n - i) / 6048e5;
      break;
    default:
      o = this - n;
  }
  return r ? o : Et(o);
}
function Ga(e, t) {
  if (e.date() < t.date())
    return -Ga(t, e);
  var r = (t.year() - e.year()) * 12 + (t.month() - e.month()), n = e.clone().add(r, "months"), i, o;
  return t - n < 0 ? (i = e.clone().add(r - 1, "months"), o = (t - n) / (n - i)) : (i = e.clone().add(r + 1, "months"), o = (t - n) / (i - n)), -(r + o) || 0;
}
k.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
k.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function _D() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function fD(e) {
  if (!this.isValid())
    return null;
  var t = e !== !0, r = t ? this.clone().utc() : this;
  return r.year() < 0 || r.year() > 9999 ? Sa(
    r,
    t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
  ) : er(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", Sa(r, "Z")) : Sa(
    r,
    t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
  );
}
function dD() {
  if (!this.isValid())
    return "moment.invalid(/* " + this._i + " */)";
  var e = "moment", t = "", r, n, i, o;
  return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", t = "Z"), r = "[" + e + '("]', n = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", i = "-MM-DD[T]HH:mm:ss.SSS", o = t + '[")]', this.format(r + n + i + o);
}
function hD(e) {
  e || (e = this.isUtc() ? k.defaultFormatUtc : k.defaultFormat);
  var t = Sa(this, e);
  return this.localeData().postformat(t);
}
function pD(e, t) {
  return this.isValid() && (Lt(e) && e.isValid() || Se(e).isValid()) ? xt({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function mD(e) {
  return this.from(Se(), e);
}
function TD(e, t) {
  return this.isValid() && (Lt(e) && e.isValid() || Se(e).isValid()) ? xt({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function ED(e) {
  return this.to(Se(), e);
}
function lE(e) {
  var t;
  return e === void 0 ? this._locale._abbr : (t = Or(e), t != null && (this._locale = t), this);
}
var _E = At(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function(e) {
    return e === void 0 ? this.localeData() : this.locale(e);
  }
);
function fE() {
  return this._locale;
}
var as = 1e3, kn = 60 * as, ss = 60 * kn, dE = (365 * 400 + 97) * 24 * ss;
function Ln(e, t) {
  return (e % t + t) % t;
}
function hE(e, t, r) {
  return e < 100 && e >= 0 ? new Date(e + 400, t, r) - dE : new Date(e, t, r).valueOf();
}
function pE(e, t, r) {
  return e < 100 && e >= 0 ? Date.UTC(e + 400, t, r) - dE : Date.UTC(e, t, r);
}
function OD(e) {
  var t, r;
  if (e = yt(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (r = this._isUTC ? pE : hE, e) {
    case "year":
      t = r(this.year(), 0, 1);
      break;
    case "quarter":
      t = r(
        this.year(),
        this.month() - this.month() % 3,
        1
      );
      break;
    case "month":
      t = r(this.year(), this.month(), 1);
      break;
    case "week":
      t = r(
        this.year(),
        this.month(),
        this.date() - this.weekday()
      );
      break;
    case "isoWeek":
      t = r(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1)
      );
      break;
    case "day":
    case "date":
      t = r(this.year(), this.month(), this.date());
      break;
    case "hour":
      t = this._d.valueOf(), t -= Ln(
        t + (this._isUTC ? 0 : this.utcOffset() * kn),
        ss
      );
      break;
    case "minute":
      t = this._d.valueOf(), t -= Ln(t, kn);
      break;
    case "second":
      t = this._d.valueOf(), t -= Ln(t, as);
      break;
  }
  return this._d.setTime(t), k.updateOffset(this, !0), this;
}
function bD(e) {
  var t, r;
  if (e = yt(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (r = this._isUTC ? pE : hE, e) {
    case "year":
      t = r(this.year() + 1, 0, 1) - 1;
      break;
    case "quarter":
      t = r(
        this.year(),
        this.month() - this.month() % 3 + 3,
        1
      ) - 1;
      break;
    case "month":
      t = r(this.year(), this.month() + 1, 1) - 1;
      break;
    case "week":
      t = r(
        this.year(),
        this.month(),
        this.date() - this.weekday() + 7
      ) - 1;
      break;
    case "isoWeek":
      t = r(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1) + 7
      ) - 1;
      break;
    case "day":
    case "date":
      t = r(this.year(), this.month(), this.date() + 1) - 1;
      break;
    case "hour":
      t = this._d.valueOf(), t += ss - Ln(
        t + (this._isUTC ? 0 : this.utcOffset() * kn),
        ss
      ) - 1;
      break;
    case "minute":
      t = this._d.valueOf(), t += kn - Ln(t, kn) - 1;
      break;
    case "second":
      t = this._d.valueOf(), t += as - Ln(t, as) - 1;
      break;
  }
  return this._d.setTime(t), k.updateOffset(this, !0), this;
}
function RD() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function vD() {
  return Math.floor(this.valueOf() / 1e3);
}
function gD() {
  return new Date(this.valueOf());
}
function ID() {
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
function ND() {
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
function AD() {
  return this.isValid() ? this.toISOString() : null;
}
function yD() {
  return Ql(this);
}
function SD() {
  return Cr({}, ee(this));
}
function DD() {
  return ee(this).overflow;
}
function GD() {
  return {
    input: this._i,
    format: this._f,
    locale: this._locale,
    isUTC: this._isUTC,
    strict: this._strict
  };
}
j("N", 0, 0, "eraAbbr");
j("NN", 0, 0, "eraAbbr");
j("NNN", 0, 0, "eraAbbr");
j("NNNN", 0, 0, "eraName");
j("NNNNN", 0, 0, "eraNarrow");
j("y", ["y", 1], "yo", "eraYear");
j("y", ["yy", 2], 0, "eraYear");
j("y", ["yyy", 3], 0, "eraYear");
j("y", ["yyyy", 4], 0, "eraYear");
B("N", h_);
B("NN", h_);
B("NNN", h_);
B("NNNN", FD);
B("NNNNN", jD);
Ie(
  ["N", "NN", "NNN", "NNNN", "NNNNN"],
  function(e, t, r, n) {
    var i = r._locale.erasParse(e, n, r._strict);
    i ? ee(r).era = i : ee(r).invalidEra = e;
  }
);
B("y", li);
B("yy", li);
B("yyy", li);
B("yyyy", li);
B("yo", VD);
Ie(["y", "yy", "yyy", "yyyy"], Qe);
Ie(["yo"], function(e, t, r, n) {
  var i;
  r._locale._eraYearOrdinalRegex && (i = e.match(r._locale._eraYearOrdinalRegex)), r._locale.eraYearOrdinalParse ? t[Qe] = r._locale.eraYearOrdinalParse(e, i) : t[Qe] = parseInt(e, 10);
});
function CD(e, t) {
  var r, n, i, o = this._eras || Or("en")._eras;
  for (r = 0, n = o.length; r < n; ++r) {
    switch (typeof o[r].since) {
      case "string":
        i = k(o[r].since).startOf("day"), o[r].since = i.valueOf();
        break;
    }
    switch (typeof o[r].until) {
      case "undefined":
        o[r].until = 1 / 0;
        break;
      case "string":
        i = k(o[r].until).startOf("day").valueOf(), o[r].until = i.valueOf();
        break;
    }
  }
  return o;
}
function UD(e, t, r) {
  var n, i, o = this.eras(), a, s, u;
  for (e = e.toUpperCase(), n = 0, i = o.length; n < i; ++n)
    if (a = o[n].name.toUpperCase(), s = o[n].abbr.toUpperCase(), u = o[n].narrow.toUpperCase(), r)
      switch (t) {
        case "N":
        case "NN":
        case "NNN":
          if (s === e)
            return o[n];
          break;
        case "NNNN":
          if (a === e)
            return o[n];
          break;
        case "NNNNN":
          if (u === e)
            return o[n];
          break;
      }
    else if ([a, s, u].indexOf(e) >= 0)
      return o[n];
}
function wD(e, t) {
  var r = e.since <= e.until ? 1 : -1;
  return t === void 0 ? k(e.since).year() : k(e.since).year() + (t - e.offset) * r;
}
function PD() {
  var e, t, r, n = this.localeData().eras();
  for (e = 0, t = n.length; e < t; ++e)
    if (r = this.clone().startOf("day").valueOf(), n[e].since <= r && r <= n[e].until || n[e].until <= r && r <= n[e].since)
      return n[e].name;
  return "";
}
function HD() {
  var e, t, r, n = this.localeData().eras();
  for (e = 0, t = n.length; e < t; ++e)
    if (r = this.clone().startOf("day").valueOf(), n[e].since <= r && r <= n[e].until || n[e].until <= r && r <= n[e].since)
      return n[e].narrow;
  return "";
}
function MD() {
  var e, t, r, n = this.localeData().eras();
  for (e = 0, t = n.length; e < t; ++e)
    if (r = this.clone().startOf("day").valueOf(), n[e].since <= r && r <= n[e].until || n[e].until <= r && r <= n[e].since)
      return n[e].abbr;
  return "";
}
function kD() {
  var e, t, r, n, i = this.localeData().eras();
  for (e = 0, t = i.length; e < t; ++e)
    if (r = i[e].since <= i[e].until ? 1 : -1, n = this.clone().startOf("day").valueOf(), i[e].since <= n && n <= i[e].until || i[e].until <= n && n <= i[e].since)
      return (this.year() - k(i[e].since).year()) * r + i[e].offset;
  return this.year();
}
function LD(e) {
  return pe(this, "_erasNameRegex") || p_.call(this), e ? this._erasNameRegex : this._erasRegex;
}
function BD(e) {
  return pe(this, "_erasAbbrRegex") || p_.call(this), e ? this._erasAbbrRegex : this._erasRegex;
}
function xD(e) {
  return pe(this, "_erasNarrowRegex") || p_.call(this), e ? this._erasNarrowRegex : this._erasRegex;
}
function h_(e, t) {
  return t.erasAbbrRegex(e);
}
function FD(e, t) {
  return t.erasNameRegex(e);
}
function jD(e, t) {
  return t.erasNarrowRegex(e);
}
function VD(e, t) {
  return t._eraYearOrdinalRegex || li;
}
function p_() {
  var e = [], t = [], r = [], n = [], i, o, a = this.eras();
  for (i = 0, o = a.length; i < o; ++i)
    t.push(pt(a[i].name)), e.push(pt(a[i].abbr)), r.push(pt(a[i].narrow)), n.push(pt(a[i].name)), n.push(pt(a[i].abbr)), n.push(pt(a[i].narrow));
  this._erasRegex = new RegExp("^(" + n.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp(
    "^(" + r.join("|") + ")",
    "i"
  );
}
j(0, ["gg", 2], 0, function() {
  return this.weekYear() % 100;
});
j(0, ["GG", 2], 0, function() {
  return this.isoWeekYear() % 100;
});
function Ks(e, t) {
  j(0, [e, e.length], 0, t);
}
Ks("gggg", "weekYear");
Ks("ggggg", "weekYear");
Ks("GGGG", "isoWeekYear");
Ks("GGGGG", "isoWeekYear");
Ze("weekYear", "gg");
Ze("isoWeekYear", "GG");
et("weekYear", 1);
et("isoWeekYear", 1);
B("G", js);
B("g", js);
B("GG", De, Tt);
B("gg", De, Tt);
B("GGGG", i_, n_);
B("gggg", i_, n_);
B("GGGGG", Fs, Bs);
B("ggggg", Fs, Bs);
xo(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(e, t, r, n) {
    t[n.substr(0, 2)] = ne(e);
  }
);
xo(["gg", "GG"], function(e, t, r, n) {
  t[n] = k.parseTwoDigitYear(e);
});
function WD(e) {
  return mE.call(
    this,
    e,
    this.week(),
    this.weekday(),
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function XD(e) {
  return mE.call(
    this,
    e,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function YD() {
  return _r(this.year(), 1, 4);
}
function KD() {
  return _r(this.isoWeekYear(), 1, 4);
}
function $D() {
  var e = this.localeData()._week;
  return _r(this.year(), e.dow, e.doy);
}
function zD() {
  var e = this.localeData()._week;
  return _r(this.weekYear(), e.dow, e.doy);
}
function mE(e, t, r, n, i) {
  var o;
  return e == null ? oo(this, n, i).year : (o = _r(e, n, i), t > o && (t = o), qD.call(this, e, t, r, n, i));
}
function qD(e, t, r, n, i) {
  var o = zT(e, t, r, n, i), a = io(o.year, 0, o.dayOfYear);
  return this.year(a.getUTCFullYear()), this.month(a.getUTCMonth()), this.date(a.getUTCDate()), this;
}
j("Q", 0, "Qo", "quarter");
Ze("quarter", "Q");
et("quarter", 7);
B("Q", BT);
Ie("Q", function(e, t) {
  t[ar] = (ne(e) - 1) * 3;
});
function JD(e) {
  return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3);
}
j("D", ["DD", 2], "Do", "date");
Ze("date", "D");
et("date", 9);
B("D", De);
B("DD", De, Tt);
B("Do", function(e, t) {
  return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
});
Ie(["D", "DD"], jt);
Ie("Do", function(e, t) {
  t[jt] = ne(e.match(De)[0]);
});
var TE = ci("Date", !0);
j("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
Ze("dayOfYear", "DDD");
et("dayOfYear", 4);
B("DDD", xs);
B("DDDD", xT);
Ie(["DDD", "DDDD"], function(e, t, r) {
  r._dayOfYear = ne(e);
});
function QD(e) {
  var t = Math.round(
    (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
  ) + 1;
  return e == null ? t : this.add(e - t, "d");
}
j("m", ["mm", 2], 0, "minute");
Ze("minute", "m");
et("minute", 14);
B("m", De);
B("mm", De, Tt);
Ie(["m", "mm"], Ut);
var ZD = ci("Minutes", !1);
j("s", ["ss", 2], 0, "second");
Ze("second", "s");
et("second", 15);
B("s", De);
B("ss", De, Tt);
Ie(["s", "ss"], sr);
var eG = ci("Seconds", !1);
j("S", 0, 0, function() {
  return ~~(this.millisecond() / 100);
});
j(0, ["SS", 2], 0, function() {
  return ~~(this.millisecond() / 10);
});
j(0, ["SSS", 3], 0, "millisecond");
j(0, ["SSSS", 4], 0, function() {
  return this.millisecond() * 10;
});
j(0, ["SSSSS", 5], 0, function() {
  return this.millisecond() * 100;
});
j(0, ["SSSSSS", 6], 0, function() {
  return this.millisecond() * 1e3;
});
j(0, ["SSSSSSS", 7], 0, function() {
  return this.millisecond() * 1e4;
});
j(0, ["SSSSSSSS", 8], 0, function() {
  return this.millisecond() * 1e5;
});
j(0, ["SSSSSSSSS", 9], 0, function() {
  return this.millisecond() * 1e6;
});
Ze("millisecond", "ms");
et("millisecond", 16);
B("S", xs, BT);
B("SS", xs, Tt);
B("SSS", xs, xT);
var Ur, EE;
for (Ur = "SSSS"; Ur.length <= 9; Ur += "S")
  B(Ur, li);
function tG(e, t) {
  t[nn] = ne(("0." + e) * 1e3);
}
for (Ur = "S"; Ur.length <= 9; Ur += "S")
  Ie(Ur, tG);
EE = ci("Milliseconds", !1);
j("z", 0, 0, "zoneAbbr");
j("zz", 0, 0, "zoneName");
function rG() {
  return this._isUTC ? "UTC" : "";
}
function nG() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var S = Lo.prototype;
S.add = z0;
S.calendar = rD;
S.clone = nD;
S.diff = lD;
S.endOf = bD;
S.format = hD;
S.from = pD;
S.fromNow = mD;
S.to = TD;
S.toNow = ED;
S.get = oS;
S.invalidAt = DD;
S.isAfter = iD;
S.isBefore = oD;
S.isBetween = aD;
S.isSame = sD;
S.isSameOrAfter = uD;
S.isSameOrBefore = cD;
S.isValid = yD;
S.lang = _E;
S.locale = lE;
S.localeData = fE;
S.max = y0;
S.min = A0;
S.parsingFlags = SD;
S.set = aS;
S.startOf = OD;
S.subtract = q0;
S.toArray = ID;
S.toObject = ND;
S.toDate = gD;
S.toISOString = fD;
S.inspect = dD;
typeof Symbol < "u" && Symbol.for != null && (S[Symbol.for("nodejs.util.inspect.custom")] = function() {
  return "Moment<" + this.format() + ">";
});
S.toJSON = AD;
S.toString = _D;
S.unix = vD;
S.valueOf = RD;
S.creationData = GD;
S.eraName = PD;
S.eraNarrow = HD;
S.eraAbbr = MD;
S.eraYear = kD;
S.year = $T;
S.isLeapYear = NS;
S.weekYear = WD;
S.isoWeekYear = XD;
S.quarter = S.quarters = JD;
S.month = YT;
S.daysInMonth = vS;
S.week = S.weeks = CS;
S.isoWeek = S.isoWeeks = US;
S.weeksInYear = $D;
S.weeksInWeekYear = zD;
S.isoWeeksInYear = YD;
S.isoWeeksInISOWeekYear = KD;
S.date = TE;
S.day = S.days = XS;
S.weekday = YS;
S.isoWeekday = KS;
S.dayOfYear = QD;
S.hour = S.hours = e0;
S.minute = S.minutes = ZD;
S.second = S.seconds = eG;
S.millisecond = S.milliseconds = EE;
S.utcOffset = M0;
S.utc = L0;
S.local = B0;
S.parseZone = x0;
S.hasAlignedHourOffset = F0;
S.isDST = j0;
S.isLocal = W0;
S.isUtcOffset = X0;
S.isUtc = aE;
S.isUTC = aE;
S.zoneAbbr = rG;
S.zoneName = nG;
S.dates = At(
  "dates accessor is deprecated. Use date instead.",
  TE
);
S.months = At(
  "months accessor is deprecated. Use month instead",
  YT
);
S.years = At(
  "years accessor is deprecated. Use year instead",
  $T
);
S.zone = At(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  k0
);
S.isDSTShifted = At(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  V0
);
function iG(e) {
  return Se(e * 1e3);
}
function oG() {
  return Se.apply(null, arguments).parseZone();
}
function OE(e) {
  return e;
}
var me = e_.prototype;
me.calendar = X1;
me.longDateFormat = z1;
me.invalidDate = J1;
me.ordinal = eS;
me.preparse = OE;
me.postformat = OE;
me.relativeTime = rS;
me.pastFuture = nS;
me.set = V1;
me.eras = CD;
me.erasParse = UD;
me.erasConvertYear = wD;
me.erasAbbrRegex = BD;
me.erasNameRegex = LD;
me.erasNarrowRegex = xD;
me.months = ES;
me.monthsShort = OS;
me.monthsParse = RS;
me.monthsRegex = IS;
me.monthsShortRegex = gS;
me.week = yS;
me.firstDayOfYear = GS;
me.firstDayOfWeek = DS;
me.weekdays = xS;
me.weekdaysMin = jS;
me.weekdaysShort = FS;
me.weekdaysParse = WS;
me.weekdaysRegex = $S;
me.weekdaysShortRegex = zS;
me.weekdaysMinRegex = qS;
me.isPM = QS;
me.meridiem = t0;
function us(e, t, r, n) {
  var i = Or(), o = Zt().set(n, t);
  return i[r](o, e);
}
function bE(e, t, r) {
  if (pr(e) && (t = e, e = void 0), e = e || "", t != null)
    return us(e, t, r, "month");
  var n, i = [];
  for (n = 0; n < 12; n++)
    i[n] = us(e, n, r, "month");
  return i;
}
function m_(e, t, r, n) {
  typeof e == "boolean" ? (pr(t) && (r = t, t = void 0), t = t || "") : (t = e, r = t, e = !1, pr(t) && (r = t, t = void 0), t = t || "");
  var i = Or(), o = e ? i._week.dow : 0, a, s = [];
  if (r != null)
    return us(t, (r + o) % 7, n, "day");
  for (a = 0; a < 7; a++)
    s[a] = us(t, (a + o) % 7, n, "day");
  return s;
}
function aG(e, t) {
  return bE(e, t, "months");
}
function sG(e, t) {
  return bE(e, t, "monthsShort");
}
function uG(e, t, r) {
  return m_(e, t, r, "weekdays");
}
function cG(e, t, r) {
  return m_(e, t, r, "weekdaysShort");
}
function lG(e, t, r) {
  return m_(e, t, r, "weekdaysMin");
}
xr("en", {
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
    var t = e % 10, r = ne(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
    return e + r;
  }
});
k.lang = At(
  "moment.lang is deprecated. Use moment.locale instead.",
  xr
);
k.langData = At(
  "moment.langData is deprecated. Use moment.localeData instead.",
  Or
);
var tr = Math.abs;
function _G() {
  var e = this._data;
  return this._milliseconds = tr(this._milliseconds), this._days = tr(this._days), this._months = tr(this._months), e.milliseconds = tr(e.milliseconds), e.seconds = tr(e.seconds), e.minutes = tr(e.minutes), e.hours = tr(e.hours), e.months = tr(e.months), e.years = tr(e.years), this;
}
function RE(e, t, r, n) {
  var i = xt(t, r);
  return e._milliseconds += n * i._milliseconds, e._days += n * i._days, e._months += n * i._months, e._bubble();
}
function fG(e, t) {
  return RE(this, e, t, 1);
}
function dG(e, t) {
  return RE(this, e, t, -1);
}
function Xd(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function hG() {
  var e = this._milliseconds, t = this._days, r = this._months, n = this._data, i, o, a, s, u;
  return e >= 0 && t >= 0 && r >= 0 || e <= 0 && t <= 0 && r <= 0 || (e += Xd(Wc(r) + t) * 864e5, t = 0, r = 0), n.milliseconds = e % 1e3, i = Et(e / 1e3), n.seconds = i % 60, o = Et(i / 60), n.minutes = o % 60, a = Et(o / 60), n.hours = a % 24, t += Et(a / 24), u = Et(vE(t)), r += u, t -= Xd(Wc(u)), s = Et(r / 12), r %= 12, n.days = t, n.months = r, n.years = s, this;
}
function vE(e) {
  return e * 4800 / 146097;
}
function Wc(e) {
  return e * 146097 / 4800;
}
function pG(e) {
  if (!this.isValid())
    return NaN;
  var t, r, n = this._milliseconds;
  if (e = yt(e), e === "month" || e === "quarter" || e === "year")
    switch (t = this._days + n / 864e5, r = this._months + vE(t), e) {
      case "month":
        return r;
      case "quarter":
        return r / 3;
      case "year":
        return r / 12;
    }
  else
    switch (t = this._days + Math.round(Wc(this._months)), e) {
      case "week":
        return t / 7 + n / 6048e5;
      case "day":
        return t + n / 864e5;
      case "hour":
        return t * 24 + n / 36e5;
      case "minute":
        return t * 1440 + n / 6e4;
      case "second":
        return t * 86400 + n / 1e3;
      case "millisecond":
        return Math.floor(t * 864e5) + n;
      default:
        throw new Error("Unknown unit " + e);
    }
}
function mG() {
  return this.isValid() ? this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + ne(this._months / 12) * 31536e6 : NaN;
}
function br(e) {
  return function() {
    return this.as(e);
  };
}
var TG = br("ms"), EG = br("s"), OG = br("m"), bG = br("h"), RG = br("d"), vG = br("w"), gG = br("M"), IG = br("Q"), NG = br("y");
function AG() {
  return xt(this);
}
function yG(e) {
  return e = yt(e), this.isValid() ? this[e + "s"]() : NaN;
}
function dn(e) {
  return function() {
    return this.isValid() ? this._data[e] : NaN;
  };
}
var SG = dn("milliseconds"), DG = dn("seconds"), GG = dn("minutes"), CG = dn("hours"), UG = dn("days"), wG = dn("months"), PG = dn("years");
function HG() {
  return Et(this.days() / 7);
}
var rr = Math.round, Cn = {
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
function MG(e, t, r, n, i) {
  return i.relativeTime(t || 1, !!r, e, n);
}
function kG(e, t, r, n) {
  var i = xt(e).abs(), o = rr(i.as("s")), a = rr(i.as("m")), s = rr(i.as("h")), u = rr(i.as("d")), c = rr(i.as("M")), _ = rr(i.as("w")), l = rr(i.as("y")), f = o <= r.ss && ["s", o] || o < r.s && ["ss", o] || a <= 1 && ["m"] || a < r.m && ["mm", a] || s <= 1 && ["h"] || s < r.h && ["hh", s] || u <= 1 && ["d"] || u < r.d && ["dd", u];
  return r.w != null && (f = f || _ <= 1 && ["w"] || _ < r.w && ["ww", _]), f = f || c <= 1 && ["M"] || c < r.M && ["MM", c] || l <= 1 && ["y"] || ["yy", l], f[2] = t, f[3] = +e > 0, f[4] = n, MG.apply(null, f);
}
function LG(e) {
  return e === void 0 ? rr : typeof e == "function" ? (rr = e, !0) : !1;
}
function BG(e, t) {
  return Cn[e] === void 0 ? !1 : t === void 0 ? Cn[e] : (Cn[e] = t, e === "s" && (Cn.ss = t - 1), !0);
}
function xG(e, t) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var r = !1, n = Cn, i, o;
  return typeof e == "object" && (t = e, e = !1), typeof e == "boolean" && (r = e), typeof t == "object" && (n = Object.assign({}, Cn, t), t.s != null && t.ss == null && (n.ss = t.s - 1)), i = this.localeData(), o = kG(this, !r, n, i), r && (o = i.pastFuture(+this, o)), i.postformat(o);
}
var Bu = Math.abs;
function Tn(e) {
  return (e > 0) - (e < 0) || +e;
}
function $s() {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var e = Bu(this._milliseconds) / 1e3, t = Bu(this._days), r = Bu(this._months), n, i, o, a, s = this.asSeconds(), u, c, _, l;
  return s ? (n = Et(e / 60), i = Et(n / 60), e %= 60, n %= 60, o = Et(r / 12), r %= 12, a = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", u = s < 0 ? "-" : "", c = Tn(this._months) !== Tn(s) ? "-" : "", _ = Tn(this._days) !== Tn(s) ? "-" : "", l = Tn(this._milliseconds) !== Tn(s) ? "-" : "", u + "P" + (o ? c + o + "Y" : "") + (r ? c + r + "M" : "") + (t ? _ + t + "D" : "") + (i || n || e ? "T" : "") + (i ? l + i + "H" : "") + (n ? l + n + "M" : "") + (e ? l + a + "S" : "")) : "P0D";
}
var ce = Ys.prototype;
ce.isValid = U0;
ce.abs = _G;
ce.add = fG;
ce.subtract = dG;
ce.as = pG;
ce.asMilliseconds = TG;
ce.asSeconds = EG;
ce.asMinutes = OG;
ce.asHours = bG;
ce.asDays = RG;
ce.asWeeks = vG;
ce.asMonths = gG;
ce.asQuarters = IG;
ce.asYears = NG;
ce.valueOf = mG;
ce._bubble = hG;
ce.clone = AG;
ce.get = yG;
ce.milliseconds = SG;
ce.seconds = DG;
ce.minutes = GG;
ce.hours = CG;
ce.days = UG;
ce.weeks = HG;
ce.months = wG;
ce.years = PG;
ce.humanize = xG;
ce.toISOString = $s;
ce.toString = $s;
ce.toJSON = $s;
ce.locale = lE;
ce.localeData = fE;
ce.toIsoString = At(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  $s
);
ce.lang = _E;
j("X", 0, 0, "unix");
j("x", 0, 0, "valueOf");
B("x", js);
B("X", uS);
Ie("X", function(e, t, r) {
  r._d = new Date(parseFloat(e) * 1e3);
});
Ie("x", function(e, t, r) {
  r._d = new Date(ne(e));
});
//! moment.js
k.version = "2.29.4";
F1(Se);
k.fn = S;
k.min = S0;
k.max = D0;
k.now = G0;
k.utc = Zt;
k.unix = iG;
k.months = aG;
k.isDate = ko;
k.locale = xr;
k.invalid = ks;
k.duration = xt;
k.isMoment = Lt;
k.weekdays = uG;
k.parseZone = oG;
k.localeData = Or;
k.isDuration = Da;
k.monthsShort = sG;
k.weekdaysMin = lG;
k.defineLocale = u_;
k.updateLocale = o0;
k.locales = a0;
k.weekdaysShort = cG;
k.normalizeUnits = yt;
k.relativeTimeRounding = LG;
k.relativeTimeThreshold = BG;
k.calendarFormat = tD;
k.prototype = S;
k.HTML5_FMT = {
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
class FG {
  constructor(t) {
    zr(this), this.state = t, this.getters = t.getters, this.storage = t.storage;
  }
  addExecuteMessage(t) {
    console.log(t);
    const r = this.getters.getActiveTab();
    let n = t.output;
    t.error && (n = t.error.split("^")[1].split("at")[0]), this.state.executeMessages.push({
      message: n,
      isError: !!t.error,
      fileName: r.label,
      date: k().format("HH:mm")
    }), this.storage.set("EDITOR_EXECUTE_MESSAGES", this.state.executeMessages);
  }
  clearExecuteMessages() {
    this.state.executeMessages = [], this.storage.clear("EDITOR_EXECUTE_MESSAGES");
  }
}
const jG = (e) => {
  const { Spring: t } = Hs(), [r, n] = t.useSpring(() => ({
    opacity: 1,
    x: 0
  }));
  return Nh(e, () => ({
    close: async () => (n.start({
      opacity: 0,
      x: -20,
      immediate: !1,
      config: t.config.wobbly
    }), new Promise(
      (i) => setTimeout(() => {
        n.start({
          opacity: 1,
          x: 0,
          immediate: !1,
          config: t.config.wobbly
        }), i(!0);
      }, 300)
    ))
  })), {
    ref: e,
    spring: r,
    SpringDiv: t.a.div
  };
}, VG = Ue.div`
  color: ${it("light")};
  font-size: ${({ theme: e }) => e.fz7};
  margin-top: 4px;
  font-weight: normal;
  height: 200px;
  overflow-y: auto;
  overflow-x: hidden;
  ${zl()};

  span:first-child {
    margin-top: 22px;
  }
`, WG = Ue.span`
  color: ${it("light")};
  display: block;
  margin-top: 17px;
  cursor: pointer;
  font-size: ${({ theme: e }) => e.fz7};
  em {
    color: ${({ $isError: e }) => e ? "red" : it("light")};
    font-weight: bold;
    font-style: italic;
  }
`, XG = Fn(
  ({ children: e }, t) => {
    const r = ae(null), n = () => {
      r.current.scrollTo(0, r.current.scrollHeight);
    };
    return Nh(t, () => ({
      scrollToBottom: () => {
        n(), setTimeout(n, 50);
      }
    })), /* @__PURE__ */ K(VG, { ref: r, children: e });
  }
), YG = Tr(
  Fn((e, t) => {
    const r = ae(null), n = ae(null), { isTerminalOpened: i } = vR(), { executeMessages: o } = ai(), { spring: a, SpringDiv: s } = jG(t), u = () => {
      n.current.scrollIntoView({ behavior: "smooth" });
    };
    return Le(() => {
      r.current.scrollToBottom();
    }, [o.length, i]), /* @__PURE__ */ mt(XG, { ref: r, children: [
      "CodeGear output console.",
      /* @__PURE__ */ mt(s, { style: { ...a }, children: [
        o.map((c, _) => /* @__PURE__ */ mt(
          WG,
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
        /* @__PURE__ */ K("div", { ref: n })
      ] })
    ] });
  })
), KG = [
  { label: "Terminal", key: "terminal" },
  { label: "Test cases", key: "test_cases" }
], $G = () => {
  const e = _n(), t = e.state.selectedTerminalTab, r = jr(
    (n) => {
      e.update({
        selectedTerminalTab: n
      });
    },
    [e]
  );
  return {
    key: t,
    set: r,
    val: KG
  };
}, zG = Ue.div`
  ${NT({
  right: "44px",
  top: "23px"
})}
  ${fn("flex-end")};
  gap: 23px;
  ${It("100px", "22px")};
  cursor: pointer;
  svg {
    path {
      stroke: ${it("secondaryGrey")};
      ${({ theme: e }) => kc(e.light)};
    }
    ${It("22px")}
    color: ${it("secondaryGrey")};
    ${({ theme: e }) => kc(e.light)}
  }
`, qG = Ue(Sh)`
  ${r1(0, 6)};

  .ant-tabs-nav::before {
    border-bottom: none;
  }
  .ant-tabs-tab-active div {
    color: ${ya("light")};
  }
  .ant-tabs-tab:hover,
  .ant-tabs-tab:active {
    color: ${it("light")};
  }
  .ant-tabs-ink-bar {
    background: ${it("light")};
  }
  .ant-tabs-tab {
    padding: 7px 0 !important;
  }

  font-size: ${({ theme: e }) => e.fz6};
`, JG = Ue.h3`
  color: ${it("light")};
  font-size: ${({ theme: e }) => e.fz7};
`, Uw = Tr(() => {
  const e = _n(), { isTerminalOpened: t } = e.state, r = $G(), n = Qr(), i = ae(), o = (u) => {
    r.set(u);
  }, a = jr(() => {
    e.update({ isTerminalOpened: !1 });
  }, []), s = async () => {
    await i.current?.close(), n.terminal.clearExecuteMessages();
  };
  return /* @__PURE__ */ mt(u1, { onClose: a, isOpen: t, height: 300, children: [
    /* @__PURE__ */ K(
      qG,
      {
        items: r.val,
        size: "large",
        onChange: o,
        activeKey: r.key
      }
    ),
    /* @__PURE__ */ K(Sc, { when: r.key === "terminal", children: /* @__PURE__ */ K(YG, { ref: i }) }),
    /* @__PURE__ */ K(Sc, { when: r.key === "test_cases", children: /* @__PURE__ */ K(JG, { children: "Test cases are not supported yet." }) }),
    /* @__PURE__ */ mt(zG, { children: [
      /* @__PURE__ */ K(ny, { onClick: s }),
      /* @__PURE__ */ K(ry, { onClick: a })
    ] })
  ] });
});
class QG {
  constructor(t) {
    zr(this), this.state = t, this.getters = t.getters, this.tabs = new I1(t), this.editor = new uR(t), this.terminal = new FG(t);
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
    this.state.storage = new ml(t);
  }
}
class ZG {
  constructor(t) {
    this.state = t, zr(this);
  }
  getActiveTab(t = this.state.activeKey) {
    return this.state.content.find((r) => r.key === t);
  }
  getActiveTabText() {
    return this.getActiveTab().content;
  }
  getTabIndex(t = this.state.activeKey) {
    return this.state.content.findIndex((r) => r.key === t);
  }
  getActiveLanguage() {
    return this.getActiveTab()?.lang;
  }
  isAllowedToExecute() {
    const t = this.getActiveLanguage();
    return f1.includes(t);
  }
}
const eC = `// Hello World! Here you can edit the code in 10 different languages. 😎

const camel = 'I like apples'

// Run the code and look in the terminal.
console.log(camel)

// You can edit and run the code in real time
// and your friends will see it! Sign in if you want to see more features.
`, tC = "javascript", rC = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMjMiIHZpZXdCb3g9IjAgMCAxNyAyMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0Ljk4OTcgMTUuNDA5NEwxNC40MjE2IDE1Ljc3NTJDMTQuNzcxMiAxNS40NTUxIDE1LjAzMzQgMTQuOTk3OCAxNS4wMzM0IDE0LjU0MDZDMTUuMDMzNCAxMy43NjMzIDE0LjY4MzggMTMuMTIzMSAxMy41NDc1IDEyLjU3NDRMMy44NDU3NSA4LjEzOTA3QzEuODc5MTcgNy4yMjQ1NiAwLjY1NTUxOCA2LjA4MTQ0IDAuNjU1NTE4IDQuMDIzODFDMC42NTU1MTggMi4xNDkwOCAxLjU3MzI1IDAuOTE0NTAyIDIuOTcxNzEgMEMyLjc1MzIgMC4zMjAwNzYgMi42MjIxIDAuNzMxNjAyIDIuNjIyMSAxLjIzNDU4QzIuNjIyMSAyLjM3NzcgMy41Mzk4NCAyLjg4MDY4IDQuNDU3NTcgMy4yOTIyMUwxMy44OTcyIDcuNjM2MDlDMTUuNjAxNSA4LjQxMzQyIDE3IDkuNjQ3OTkgMTcgMTEuNzk3MUMxNyAxMy41MzQ2IDE2LjIxMzQgMTQuNjMyIDE0Ljk4OTcgMTUuNDA5NFoiIGZpbGw9IiMwMTY4QTIiLz4KPHBhdGggZD0iTTEwLjU5MzMgMTEuMTM1OUwxMy42NTI0IDEyLjU1MzRDMTQuNzg4NyAxMy4xMDIxIDE1LjEzODMgMTMuNjk2NSAxNS4xMzgzIDE0LjUxOTZDMTUuMTM4MyAxNC45NzY4IDE0Ljg3NjEgMTUuNDM0MSAxNC41MjY0IDE1Ljc1NDJMOS4zNjk2MyAxMy4zNzY1TDEwLjI0MzcgMTIuODczNUMxMC45ODY2IDEyLjQ2MiAxMS4yMDUxIDEyLjE4NzYgMTEuMjA1MSAxMS45MTMzQzExLjI0ODggMTEuNTkzMiAxMS4wNzQgMTEuMzY0NiAxMC41OTMzIDExLjEzNTlaIiBmaWxsPSIjMDE2OEExIi8+CjxwYXRoIGQ9Ik01LjE1NjgxIDIyLjA4NTRDNC40NTc1OCAyMi40OTcgMy44NDU3NiAyMi43NzEzIDMuMTkwMjMgMjIuNzcxM0MxLjQ4NTg2IDIyLjc3MTMgMC4wODc0MDM1IDIxLjMwODEgMCAxOS41NzA1TDMuMjc3NjMgMTcuNTEyOUw4LjQzNDQ0IDE5LjkzNjNMNS4xNTY4MSAyMi4wODU0WiIgZmlsbD0iIzAxNjhBMSIvPgo8cGF0aCBkPSJNNi45MzI1NiAxMy4yODAxTDQuNDg1MjYgMTIuMTM3QzMuMzkyNzEgMTEuNjM0IDIuMzg3NTcgMTEuMjIyNSAyLjM4NzU3IDkuOTQyMTZDMi4zODc1NyA5LjMwMiAyLjU2MjM4IDguOTM2MiAyLjg2ODI5IDguNjE2MTNMOC4wMjUxIDEwLjk5MzhMNi43NTc3NSAxMS43NzEyQzYuNDA4MTQgMTEuOTk5OCA2LjE0NTkzIDEyLjE4MjcgNi4xNDU5MyAxMi41MDI4QzYuMTQ1OTMgMTIuNzc3MSA2LjQ5NTU0IDEzLjA1MTUgNi45MzI1NiAxMy4yODAxWiIgZmlsbD0iIzE1NTQ3NyIvPgo8cGF0aCBkPSJNMTUuOTA3NCAyM0MxNC41OTY0IDIxLjk0ODMgMTMuMTk3OSAyMS4yNjI0IDExLjUzNzMgMjAuNDM5NEwzLjc1ODM1IDE2LjgyNzFDMS43OTE3NyAxNS45MTI2IDAuNDgwNzEzIDE0LjY3OCAwLjQ4MDcxMyAxMi42NjYxQzAuNDgwNzEzIDEwLjY1NDIgMS4zOTg0NSA5LjY5Mzk5IDIuNTc4NCA4LjkxNjY2TDMuMDE1NDIgOC42NDIzMUMyLjcwOTUgOC45NjIzOSAyLjUzNDcgOS4zMjgxOSAyLjUzNDcgOS45NjgzNEMyLjUzNDcgMTEuMjAyOSAzLjU4MzU0IDExLjY2MDIgNC42MzIzOCAxMi4xNjMxTDEzLjY3ODcgMTYuMzI0MUMxNS4yNTE5IDE3LjAxIDE2LjY5NDEgMTguMjQ0NiAxNi42OTQxIDIwLjM0NzlDMTYuNzgxNSAyMS40OTExIDE2LjM0NDUgMjIuNDk3IDE1LjkwNzQgMjNaIiBmaWxsPSIjMTU1NDc3Ii8+Cjwvc3ZnPgo=", nC = Ue.div`
  ${It("23%", "28px")}
  ${fn("flex-start", "center")}
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
const iC = ({
  openFile: e,
  saveFile: t,
  createTab: r,
  runCode: n
}) => /* @__PURE__ */ mt(nC, { children: [
  /* @__PURE__ */ K(EO, { to: BA.MAIN, children: /* @__PURE__ */ K("img", { src: rC, alt: "" }) }),
  /* @__PURE__ */ K(Di, { type: "dashed", size: "small", onClick: e, children: "Open" }),
  /* @__PURE__ */ K(Di, { type: "dashed", size: "small", onClick: t, children: "Save" }),
  /* @__PURE__ */ K(Di, { type: "dashed", size: "small", onClick: r, children: "New" }),
  /* @__PURE__ */ K(Di, { type: "dashed", size: "small", onClick: n, children: "Run" })
] }), ww = Ue.div`
  background: ${({ theme: e }) => e.grey};
  border-right: 2px solid ${({ theme: e }) => e.lightGrey};
  box-sizing: border-box;
  ${It("52px", "100%")};
  ${fn("space-between", "center", "column")};
  padding-bottom: 15px;
  z-index: 3;
`, oC = Ue.div`
  ${It("23px")}
  svg {
    ${It()}
    color: ${({ theme: e }) => e.secondaryGrey};
    ${({ theme: e }) => kc(e.light)}
  }
  transition: transform 200ms;
  &:hover {
    transform: scale(1.1);
  }
  margin-top: 20px;
  cursor: pointer;
  user-select: none;
`, aC = Ue.div`
  ${It("23%", "100%")};
  ${fn("flex-start", "center")};
  gap: 25px;
`;
Ue(oC)`
  margin-top: 0;
  margin-left: 20px;
  svg {
    color: ${({ theme: e, $disabled: t }) => t ? e.secondaryGrey : e.light};
  }
`;
const sC = Tr(
  ({ isDisabled: e, runCode: t, openSignIn: r }) => {
    const n = e1();
    return /* @__PURE__ */ mt(aC, { children: [
      /* @__PURE__ */ K(
        Ad,
        {
          type: "primary",
          onClick: t,
          disabled: e,
          override: "#38a886",
          children: "Run Code"
        }
      ),
      /* @__PURE__ */ K(
        Ad,
        {
          type: "primary",
          override: n.secondaryGrey,
          onClick: r,
          children: "Sign in"
        }
      )
    ] });
  }
), uC = {
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
class cC {
  constructor(t) {
    zr(this), this.state = t, this.getters = t.getters, this.actions = t.actions;
  }
  async requestCodeExecution() {
    const { NOT_SUPPORTED: t, ERRORS_IN_CODE: r, SUCCESS: n, NETWORK_ERROR: i } = uC;
    if (!this.getters.isAllowedToExecute())
      return t;
    const o = this.getters.getActiveTab(), a = {
      code: o.content,
      language: o.lang
    };
    try {
      const s = await LA.post(
        Bp.CODE_EXECUTOR_API,
        a
      );
      return this.actions.terminal.addExecuteMessage(s.data), s.data.error ? r : n;
    } catch {
      return i;
    }
  }
}
const lC = () => {
  const { codeRunner: e } = IR(), t = _n(), r = ZA();
  return async () => {
    const { isError: i, message: o } = await e.requestCodeExecution();
    t.update({
      isTerminalOpened: !0,
      selectedTerminalTab: "terminal"
    }), r.open({
      message: o,
      type: i ? "error" : "success"
    });
  };
};
var _C = Object.defineProperty, fC = (e, t) => {
  for (var r in t)
    _C(e, r, { get: t[r], enumerable: !0 });
}, Nt = {};
fC(Nt, {
  assign: () => GE,
  colors: () => Fr,
  createStringInterpolator: () => g_,
  skipAnimation: () => DE,
  to: () => SE,
  willAdvance: () => I_
});
var T_ = jo(), q = (e) => Fo(e, T_), E_ = jo();
q.write = (e) => Fo(e, E_);
var zs = jo();
q.onStart = (e) => Fo(e, zs);
var O_ = jo();
q.onFrame = (e) => Fo(e, O_);
var b_ = jo();
q.onFinish = (e) => Fo(e, b_);
var Bn = [];
q.setTimeout = (e, t) => {
  const r = q.now() + t, n = () => {
    const o = Bn.findIndex((a) => a.cancel == n);
    ~o && Bn.splice(o, 1), Pr -= ~o ? 1 : 0;
  }, i = { time: r, handler: e, cancel: n };
  return Bn.splice(gE(r), 0, i), Pr += 1, IE(), i;
};
var gE = (e) => ~(~Bn.findIndex((t) => t.time > e) || ~Bn.length);
q.cancel = (e) => {
  zs.delete(e), O_.delete(e), b_.delete(e), T_.delete(e), E_.delete(e);
};
q.sync = (e) => {
  Xc = !0, q.batchedUpdates(e), Xc = !1;
};
q.throttle = (e) => {
  let t;
  function r() {
    try {
      e(...t);
    } finally {
      t = null;
    }
  }
  function n(...i) {
    t = i, q.onStart(r);
  }
  return n.handler = e, n.cancel = () => {
    zs.delete(r), t = null;
  }, n;
};
var R_ = typeof window < "u" ? window.requestAnimationFrame : (
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  () => {
  }
);
q.use = (e) => R_ = e;
q.now = typeof performance < "u" ? () => performance.now() : Date.now;
q.batchedUpdates = (e) => e();
q.catch = console.error;
q.frameLoop = "always";
q.advance = () => {
  q.frameLoop !== "demand" ? console.warn(
    "Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"
  ) : AE();
};
var wr = -1, Pr = 0, Xc = !1;
function Fo(e, t) {
  Xc ? (t.delete(e), e(0)) : (t.add(e), IE());
}
function IE() {
  wr < 0 && (wr = 0, q.frameLoop !== "demand" && R_(NE));
}
function dC() {
  wr = -1;
}
function NE() {
  ~wr && (R_(NE), q.batchedUpdates(AE));
}
function AE() {
  const e = wr;
  wr = q.now();
  const t = gE(wr);
  if (t && (yE(Bn.splice(0, t), (r) => r.handler()), Pr -= t), !Pr) {
    dC();
    return;
  }
  zs.flush(), T_.flush(e ? Math.min(64, wr - e) : 16.667), O_.flush(), E_.flush(), b_.flush();
}
function jo() {
  let e = /* @__PURE__ */ new Set(), t = e;
  return {
    add(r) {
      Pr += t == e && !e.has(r) ? 1 : 0, e.add(r);
    },
    delete(r) {
      return Pr -= t == e && e.has(r) ? 1 : 0, e.delete(r);
    },
    flush(r) {
      t.size && (e = /* @__PURE__ */ new Set(), Pr -= t.size, yE(t, (n) => n(r) && e.add(n)), Pr += e.size, t = e);
    }
  };
}
function yE(e, t) {
  e.forEach((r) => {
    try {
      t(r);
    } catch (n) {
      q.catch(n);
    }
  });
}
function Yc() {
}
var hC = (e, t, r) => Object.defineProperty(e, t, { value: r, writable: !0, configurable: !0 }), y = {
  arr: Array.isArray,
  obj: (e) => !!e && e.constructor.name === "Object",
  fun: (e) => typeof e == "function",
  str: (e) => typeof e == "string",
  num: (e) => typeof e == "number",
  und: (e) => e === void 0
};
function nr(e, t) {
  if (y.arr(e)) {
    if (!y.arr(t) || e.length !== t.length)
      return !1;
    for (let r = 0; r < e.length; r++)
      if (e[r] !== t[r])
        return !1;
    return !0;
  }
  return e === t;
}
var V = (e, t) => e.forEach(t);
function qt(e, t, r) {
  if (y.arr(e)) {
    for (let n = 0; n < e.length; n++)
      t.call(r, e[n], `${n}`);
    return;
  }
  for (const n in e)
    e.hasOwnProperty(n) && t.call(r, e[n], n);
}
var rt = (e) => y.und(e) ? [] : y.arr(e) ? e : [e];
function Fi(e, t) {
  if (e.size) {
    const r = Array.from(e);
    e.clear(), V(r, t);
  }
}
var Ci = (e, ...t) => Fi(e, (r) => r(...t)), v_ = () => typeof window > "u" || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent), g_, SE, Fr = null, DE = !1, I_ = Yc, GE = (e) => {
  e.to && (SE = e.to), e.now && (q.now = e.now), e.colors !== void 0 && (Fr = e.colors), e.skipAnimation != null && (DE = e.skipAnimation), e.createStringInterpolator && (g_ = e.createStringInterpolator), e.requestAnimationFrame && q.use(e.requestAnimationFrame), e.batchedUpdates && (q.batchedUpdates = e.batchedUpdates), e.willAdvance && (I_ = e.willAdvance), e.frameLoop && (q.frameLoop = e.frameLoop);
}, ji = /* @__PURE__ */ new Set(), vt = [], xu = [], cs = 0, Vo = {
  get idle() {
    return !ji.size && !vt.length;
  },
  /** Advance the given animation on every frame until idle. */
  start(e) {
    cs > e.priority ? (ji.add(e), q.onStart(pC)) : (CE(e), q(Kc));
  },
  /** Advance all animations by the given time. */
  advance: Kc,
  /** Call this when an animation's priority changes. */
  sort(e) {
    if (cs)
      q.onFrame(() => Vo.sort(e));
    else {
      const t = vt.indexOf(e);
      ~t && (vt.splice(t, 1), UE(e));
    }
  },
  /**
   * Clear all animations. For testing purposes.
   *
   * ☠️ Never call this from within the frameloop.
   */
  clear() {
    vt = [], ji.clear();
  }
};
function pC() {
  ji.forEach(CE), ji.clear(), q(Kc);
}
function CE(e) {
  vt.includes(e) || UE(e);
}
function UE(e) {
  vt.splice(
    mC(vt, (t) => t.priority > e.priority),
    0,
    e
  );
}
function Kc(e) {
  const t = xu;
  for (let r = 0; r < vt.length; r++) {
    const n = vt[r];
    cs = n.priority, n.idle || (I_(n), n.advance(e), n.idle || t.push(n));
  }
  return cs = 0, xu = vt, xu.length = 0, vt = t, vt.length > 0;
}
function mC(e, t) {
  const r = e.findIndex(t);
  return r < 0 ? e.length : r;
}
var TC = (e, t, r) => Math.min(Math.max(r, e), t), EC = {
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
}, wt = "[-+]?\\d*\\.?\\d+", ls = wt + "%";
function qs(...e) {
  return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)";
}
var OC = new RegExp("rgb" + qs(wt, wt, wt)), bC = new RegExp("rgba" + qs(wt, wt, wt, wt)), RC = new RegExp("hsl" + qs(wt, ls, ls)), vC = new RegExp(
  "hsla" + qs(wt, ls, ls, wt)
), gC = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, IC = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, NC = /^#([0-9a-fA-F]{6})$/, AC = /^#([0-9a-fA-F]{8})$/;
function yC(e) {
  let t;
  return typeof e == "number" ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = NC.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : Fr && Fr[e] !== void 0 ? Fr[e] : (t = OC.exec(e)) ? (En(t[1]) << 24 | // r
  En(t[2]) << 16 | // g
  En(t[3]) << 8 | // b
  255) >>> // a
  0 : (t = bC.exec(e)) ? (En(t[1]) << 24 | // r
  En(t[2]) << 16 | // g
  En(t[3]) << 8 | // b
  $d(t[4])) >>> // a
  0 : (t = gC.exec(e)) ? parseInt(
    t[1] + t[1] + // r
    t[2] + t[2] + // g
    t[3] + t[3] + // b
    "ff",
    // a
    16
  ) >>> 0 : (t = AC.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = IC.exec(e)) ? parseInt(
    t[1] + t[1] + // r
    t[2] + t[2] + // g
    t[3] + t[3] + // b
    t[4] + t[4],
    // a
    16
  ) >>> 0 : (t = RC.exec(e)) ? (Yd(
    Kd(t[1]),
    // h
    aa(t[2]),
    // s
    aa(t[3])
    // l
  ) | 255) >>> // a
  0 : (t = vC.exec(e)) ? (Yd(
    Kd(t[1]),
    // h
    aa(t[2]),
    // s
    aa(t[3])
    // l
  ) | $d(t[4])) >>> // a
  0 : null;
}
function Fu(e, t, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (t - e) * 6 * r : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e;
}
function Yd(e, t, r) {
  const n = r < 0.5 ? r * (1 + t) : r + t - r * t, i = 2 * r - n, o = Fu(i, n, e + 1 / 3), a = Fu(i, n, e), s = Fu(i, n, e - 1 / 3);
  return Math.round(o * 255) << 24 | Math.round(a * 255) << 16 | Math.round(s * 255) << 8;
}
function En(e) {
  const t = parseInt(e, 10);
  return t < 0 ? 0 : t > 255 ? 255 : t;
}
function Kd(e) {
  return (parseFloat(e) % 360 + 360) % 360 / 360;
}
function $d(e) {
  const t = parseFloat(e);
  return t < 0 ? 0 : t > 1 ? 255 : Math.round(t * 255);
}
function aa(e) {
  const t = parseFloat(e);
  return t < 0 ? 0 : t > 100 ? 1 : t / 100;
}
function zd(e) {
  let t = yC(e);
  if (t === null)
    return e;
  t = t || 0;
  const r = (t & 4278190080) >>> 24, n = (t & 16711680) >>> 16, i = (t & 65280) >>> 8, o = (t & 255) / 255;
  return `rgba(${r}, ${n}, ${i}, ${o})`;
}
var ri = (e, t, r) => {
  if (y.fun(e))
    return e;
  if (y.arr(e))
    return ri({
      range: e,
      output: t,
      extrapolate: r
    });
  if (y.str(e.output[0]))
    return g_(e);
  const n = e, i = n.output, o = n.range || [0, 1], a = n.extrapolateLeft || n.extrapolate || "extend", s = n.extrapolateRight || n.extrapolate || "extend", u = n.easing || ((c) => c);
  return (c) => {
    const _ = DC(c, o);
    return SC(
      c,
      o[_],
      o[_ + 1],
      i[_],
      i[_ + 1],
      u,
      a,
      s,
      n.map
    );
  };
};
function SC(e, t, r, n, i, o, a, s, u) {
  let c = u ? u(e) : e;
  if (c < t) {
    if (a === "identity")
      return c;
    a === "clamp" && (c = t);
  }
  if (c > r) {
    if (s === "identity")
      return c;
    s === "clamp" && (c = r);
  }
  return n === i ? n : t === r ? e <= t ? n : i : (t === -1 / 0 ? c = -c : r === 1 / 0 ? c = c - t : c = (c - t) / (r - t), c = o(c), n === -1 / 0 ? c = -c : i === 1 / 0 ? c = c + n : c = c * (i - n) + n, c);
}
function DC(e, t) {
  for (var r = 1; r < t.length - 1 && !(t[r] >= e); ++r)
    ;
  return r - 1;
}
var GC = (e, t = "end") => (r) => {
  r = t === "end" ? Math.min(r, 0.999) : Math.max(r, 1e-3);
  const n = r * e, i = t === "end" ? Math.floor(n) : Math.ceil(n);
  return TC(0, 1, i / e);
}, _s = 1.70158, sa = _s * 1.525, qd = _s + 1, Jd = 2 * Math.PI / 3, Qd = 2 * Math.PI / 4.5, ua = (e) => e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375 : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375, wE = {
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
  easeInBack: (e) => qd * e * e * e - _s * e * e,
  easeOutBack: (e) => 1 + qd * Math.pow(e - 1, 3) + _s * Math.pow(e - 1, 2),
  easeInOutBack: (e) => e < 0.5 ? Math.pow(2 * e, 2) * ((sa + 1) * 2 * e - sa) / 2 : (Math.pow(2 * e - 2, 2) * ((sa + 1) * (e * 2 - 2) + sa) + 2) / 2,
  easeInElastic: (e) => e === 0 ? 0 : e === 1 ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((e * 10 - 10.75) * Jd),
  easeOutElastic: (e) => e === 0 ? 0 : e === 1 ? 1 : Math.pow(2, -10 * e) * Math.sin((e * 10 - 0.75) * Jd) + 1,
  easeInOutElastic: (e) => e === 0 ? 0 : e === 1 ? 1 : e < 0.5 ? -(Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * Qd)) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * Qd) / 2 + 1,
  easeInBounce: (e) => 1 - ua(1 - e),
  easeOutBounce: ua,
  easeInOutBounce: (e) => e < 0.5 ? (1 - ua(1 - 2 * e)) / 2 : (1 + ua(2 * e - 1)) / 2,
  steps: GC
}, so = Symbol.for("FluidValue.get"), ni = Symbol.for("FluidValue.observers"), Ot = (e) => !!(e && e[so]), ut = (e) => e && e[so] ? e[so]() : e, Zd = (e) => e[ni] || null;
function CC(e, t) {
  e.eventObserved ? e.eventObserved(t) : e(t);
}
function uo(e, t) {
  const r = e[ni];
  r && r.forEach((n) => {
    CC(n, t);
  });
}
var PE = class {
  constructor(e) {
    if (!e && !(e = this.get))
      throw Error("Unknown getter");
    UC(this, e);
  }
}, UC = (e, t) => HE(e, so, t);
function _i(e, t) {
  if (e[so]) {
    let r = e[ni];
    r || HE(e, ni, r = /* @__PURE__ */ new Set()), r.has(t) || (r.add(t), e.observerAdded && e.observerAdded(r.size, t));
  }
  return t;
}
function co(e, t) {
  const r = e[ni];
  if (r && r.has(t)) {
    const n = r.size - 1;
    n ? r.delete(t) : e[ni] = null, e.observerRemoved && e.observerRemoved(n, t);
  }
}
var HE = (e, t, r) => Object.defineProperty(e, t, {
  value: r,
  writable: !0,
  configurable: !0
}), Ca = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, wC = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi, eh = new RegExp(`(${Ca.source})(%|[a-z]+)`, "i"), PC = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi, Js = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/, ME = (e) => {
  const [t, r] = HC(e);
  if (!t || v_())
    return e;
  const n = window.getComputedStyle(document.documentElement).getPropertyValue(t);
  if (n)
    return n.trim();
  if (r && r.startsWith("--")) {
    const i = window.getComputedStyle(document.documentElement).getPropertyValue(r);
    return i || e;
  } else {
    if (r && Js.test(r))
      return ME(r);
    if (r)
      return r;
  }
  return e;
}, HC = (e) => {
  const t = Js.exec(e);
  if (!t)
    return [,];
  const [, r, n] = t;
  return [r, n];
}, ju, MC = (e, t, r, n, i) => `rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${i})`, kE = (e) => {
  ju || (ju = Fr ? (
    // match color names, ignore partial matches
    new RegExp(`(${Object.keys(Fr).join("|")})(?!\\w)`, "g")
  ) : (
    // never match
    /^\b$/
  ));
  const t = e.output.map((o) => ut(o).replace(Js, ME).replace(wC, zd).replace(ju, zd)), r = t.map((o) => o.match(Ca).map(Number)), i = r[0].map(
    (o, a) => r.map((s) => {
      if (!(a in s))
        throw Error('The arity of each "output" value must be equal');
      return s[a];
    })
  ).map(
    (o) => ri({ ...e, output: o })
  );
  return (o) => {
    const a = !eh.test(t[0]) && t.find((u) => eh.test(u))?.replace(Ca, "");
    let s = 0;
    return t[0].replace(
      Ca,
      () => `${i[s++](o)}${a || ""}`
    ).replace(PC, MC);
  };
}, N_ = "react-spring: ", LE = (e) => {
  const t = e;
  let r = !1;
  if (typeof t != "function")
    throw new TypeError(`${N_}once requires a function parameter`);
  return (...n) => {
    r || (t(...n), r = !0);
  };
}, kC = LE(console.warn);
function BE() {
  kC(
    `${N_}The "interpolate" function is deprecated in v9 (use "to" instead)`
  );
}
var LC = LE(console.warn);
function BC() {
  LC(
    `${N_}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`
  );
}
function Qs(e) {
  return y.str(e) && (e[0] == "#" || /\d/.test(e) || // Do not identify a CSS variable as an AnimatedString if its SSR
  !v_() && Js.test(e) || e in (Fr || {}));
}
var On, Ua = /* @__PURE__ */ new WeakMap(), xC = (e) => e.forEach(({ target: t, contentRect: r }) => Ua.get(t)?.forEach((n) => n(r)));
function FC(e, t) {
  On || typeof ResizeObserver < "u" && (On = new ResizeObserver(xC));
  let r = Ua.get(t);
  return r || (r = /* @__PURE__ */ new Set(), Ua.set(t, r)), r.add(e), On && On.observe(t), () => {
    const n = Ua.get(t);
    n && (n.delete(e), !n.size && On && On.unobserve(t));
  };
}
var wa = /* @__PURE__ */ new Set(), Ii, jC = () => {
  const e = () => {
    wa.forEach(
      (t) => t({
        width: window.innerWidth,
        height: window.innerHeight
      })
    );
  };
  return window.addEventListener("resize", e), () => {
    window.removeEventListener("resize", e);
  };
}, VC = (e) => (wa.add(e), Ii || (Ii = jC()), () => {
  wa.delete(e), !wa.size && Ii && (Ii(), Ii = void 0);
}), xE = (e, { container: t = document.documentElement } = {}) => t === document.documentElement ? VC(e) : FC(e, t), WC = (e, t, r) => t - e === 0 ? 1 : (r - e) / (t - e), XC = {
  x: {
    length: "Width",
    position: "Left"
  },
  y: {
    length: "Height",
    position: "Top"
  }
}, YC = class {
  constructor(e, t) {
    this.createAxis = () => ({
      current: 0,
      progress: 0,
      scrollLength: 0
    }), this.updateAxis = (r) => {
      const n = this.info[r], { length: i, position: o } = XC[r];
      n.current = this.container[`scroll${o}`], n.scrollLength = this.container["scroll" + i] - this.container["client" + i], n.progress = WC(0, n.scrollLength, n.current);
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
}, Ni = /* @__PURE__ */ new WeakMap(), th = /* @__PURE__ */ new WeakMap(), Vu = /* @__PURE__ */ new WeakMap(), rh = (e) => e === document.documentElement ? window : e, KC = (e, { container: t = document.documentElement } = {}) => {
  let r = Vu.get(t);
  r || (r = /* @__PURE__ */ new Set(), Vu.set(t, r));
  const n = new YC(e, t);
  if (r.add(n), !Ni.has(t)) {
    const o = () => (r?.forEach((s) => s.advance()), !0);
    Ni.set(t, o);
    const a = rh(t);
    window.addEventListener("resize", o, { passive: !0 }), t !== document.documentElement && th.set(t, xE(o, { container: t })), a.addEventListener("scroll", o, { passive: !0 });
  }
  const i = Ni.get(t);
  return q(i), () => {
    q.cancel(i);
    const o = Vu.get(t);
    if (!o || (o.delete(n), o.size))
      return;
    const a = Ni.get(t);
    Ni.delete(t), a && (rh(t).removeEventListener("scroll", a), window.removeEventListener("resize", a), th.get(t)?.());
  };
};
function $C(e) {
  const t = ae(null);
  return t.current === null && (t.current = e()), t.current;
}
var ft = v_() ? Le : _O, zC = () => {
  const e = ae(!1);
  return ft(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
};
function A_() {
  const e = dt()[1], t = zC();
  return () => {
    t.current && e(Math.random());
  };
}
function qC(e, t) {
  const [r] = dt(
    () => ({
      inputs: t,
      result: e()
    })
  ), n = ae(), i = n.current;
  let o = i;
  return o ? t && o.inputs && JC(t, o.inputs) || (o = {
    inputs: t,
    result: e()
  }) : o = r, Le(() => {
    n.current = o, i == r && (r.inputs = r.result = void 0);
  }, [o]), o.result;
}
function JC(e, t) {
  if (e.length !== t.length)
    return !1;
  for (let r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
var Zs = (e) => Le(e, QC), QC = [];
function $c(e) {
  const t = ae();
  return Le(() => {
    t.current = e;
  }), t.current;
}
var ZC = () => {
  const [e, t] = dt(null);
  return ft(() => {
    const r = window.matchMedia("(prefers-reduced-motion)"), n = (i) => {
      t(i.matches), GE({
        skipAnimation: i.matches
      });
    };
    return n(r), r.addEventListener("change", n), () => {
      r.removeEventListener("change", n);
    };
  }, []), e;
}, lo = Symbol.for("Animated:node"), eU = (e) => !!e && e[lo] === e, Ft = (e) => e && e[lo], y_ = (e, t) => hC(e, lo, t), eu = (e) => e && e[lo] && e[lo].getPayload(), FE = class {
  constructor() {
    y_(this, this);
  }
  /** Get every `AnimatedValue` used by this node. */
  getPayload() {
    return this.payload || [];
  }
}, Wo = class extends FE {
  constructor(e) {
    super(), this._value = e, this.done = !0, this.durationProgress = 0, y.num(this._value) && (this.lastPosition = this._value);
  }
  /** @internal */
  static create(e) {
    return new Wo(e);
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
}, _o = class extends Wo {
  constructor(e) {
    super(0), this._string = null, this._toString = ri({
      output: [e, e]
    });
  }
  /** @internal */
  static create(e) {
    return new _o(e);
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
    e && (this._toString = ri({
      output: [this.getValue(), e]
    })), this._value = 0, super.reset();
  }
}, fs = { dependencies: null }, tu = class extends FE {
  constructor(e) {
    super(), this.source = e, this.setValue(e);
  }
  getValue(e) {
    const t = {};
    return qt(this.source, (r, n) => {
      eU(r) ? t[n] = r.getValue(e) : Ot(r) ? t[n] = ut(r) : e || (t[n] = r);
    }), t;
  }
  /** Replace the raw object data */
  setValue(e) {
    this.source = e, this.payload = this._makePayload(e);
  }
  reset() {
    this.payload && V(this.payload, (e) => e.reset());
  }
  /** Create a payload set. */
  _makePayload(e) {
    if (e) {
      const t = /* @__PURE__ */ new Set();
      return qt(e, this._addToPayload, t), Array.from(t);
    }
  }
  /** Add to a payload set. */
  _addToPayload(e) {
    fs.dependencies && Ot(e) && fs.dependencies.add(e);
    const t = eu(e);
    t && V(t, (r) => this.add(r));
  }
}, jE = class extends tu {
  constructor(e) {
    super(e);
  }
  /** @internal */
  static create(e) {
    return new jE(e);
  }
  getValue() {
    return this.source.map((e) => e.getValue());
  }
  setValue(e) {
    const t = this.getPayload();
    return e.length == t.length ? t.map((r, n) => r.setValue(e[n])).some(Boolean) : (super.setValue(e.map(tU)), !0);
  }
};
function tU(e) {
  return (Qs(e) ? _o : Wo).create(e);
}
function zc(e) {
  const t = Ft(e);
  return t ? t.constructor : y.arr(e) ? jE : Qs(e) ? _o : Wo;
}
var nh = (e, t) => {
  const r = (
    // Function components must use "forwardRef" to avoid being
    // re-rendered on every animation frame.
    !y.fun(e) || e.prototype && e.prototype.isReactComponent
  );
  return Fn((n, i) => {
    const o = ae(null), a = r && // eslint-disable-next-line react-hooks/rules-of-hooks
    jr(
      (d) => {
        o.current = iU(i, d);
      },
      [i]
    ), [s, u] = nU(n, t), c = A_(), _ = () => {
      const d = o.current;
      if (r && !d)
        return;
      (d ? t.applyAnimatedValues(d, s.getValue(!0)) : !1) === !1 && c();
    }, l = new rU(_, u), f = ae();
    ft(() => (f.current = l, V(u, (d) => _i(d, l)), () => {
      f.current && (V(
        f.current.deps,
        (d) => co(d, f.current)
      ), q.cancel(f.current.update));
    })), Le(_, []), Zs(() => () => {
      const d = f.current;
      V(d.deps, (p) => co(p, d));
    });
    const h = t.getComponentProps(s.getValue());
    return /* @__PURE__ */ Un.createElement(e, { ...h, ref: a });
  });
}, rU = class {
  constructor(e, t) {
    this.update = e, this.deps = t;
  }
  eventObserved(e) {
    e.type == "change" && q.write(this.update);
  }
};
function nU(e, t) {
  const r = /* @__PURE__ */ new Set();
  return fs.dependencies = r, e.style && (e = {
    ...e,
    style: t.createAnimatedStyle(e.style)
  }), e = new tu(e), fs.dependencies = null, [e, r];
}
function iU(e, t) {
  return e && (y.fun(e) ? e(t) : e.current = t), t;
}
var ih = Symbol.for("AnimatedComponent"), oU = (e, {
  applyAnimatedValues: t = () => !1,
  createAnimatedStyle: r = (i) => new tu(i),
  getComponentProps: n = (i) => i
} = {}) => {
  const i = {
    applyAnimatedValues: t,
    createAnimatedStyle: r,
    getComponentProps: n
  }, o = (a) => {
    const s = oh(a) || "Anonymous";
    return y.str(a) ? a = o[a] || (o[a] = nh(a, i)) : a = a[ih] || (a[ih] = nh(a, i)), a.displayName = `Animated(${s})`, a;
  };
  return qt(e, (a, s) => {
    y.arr(e) && (s = oh(a)), o[s] = o(a);
  }), {
    animated: o
  };
}, oh = (e) => y.str(e) ? e : e && y.str(e.displayName) ? e.displayName : y.fun(e) && e.name || null, aU = class {
};
function tt(e, ...t) {
  return y.fun(e) ? e(...t) : e;
}
var Vi = (e, t) => e === !0 || !!(t && e && (y.fun(e) ? e(t) : rt(e).includes(t))), VE = (e, t) => y.obj(e) ? t && e[t] : e, WE = (e, t) => e.default === !0 ? e[t] : e.default ? e.default[t] : void 0, sU = (e) => e, ru = (e, t = sU) => {
  let r = uU;
  e.default && e.default !== !0 && (e = e.default, r = Object.keys(e));
  const n = {};
  for (const i of r) {
    const o = t(e[i], i);
    y.und(o) || (n[i] = o);
  }
  return n;
}, uU = [
  "config",
  "onProps",
  "onStart",
  "onChange",
  "onPause",
  "onResume",
  "onRest"
], cU = {
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
function lU(e) {
  const t = {};
  let r = 0;
  if (qt(e, (n, i) => {
    cU[i] || (t[i] = n, r++);
  }), r)
    return t;
}
function nu(e) {
  const t = lU(e);
  if (t) {
    const r = { to: t };
    return qt(e, (n, i) => i in t || (r[i] = n)), r;
  }
  return { ...e };
}
function fo(e) {
  return e = ut(e), y.arr(e) ? e.map(fo) : Qs(e) ? Nt.createStringInterpolator({
    range: [0, 1],
    output: [e, e]
  })(1) : e;
}
function XE(e) {
  for (const t in e)
    return !0;
  return !1;
}
function qc(e) {
  return y.fun(e) || y.arr(e) && y.obj(e[0]);
}
function Jc(e, t) {
  e.ref?.delete(e), t?.delete(e);
}
function S_(e, t) {
  t && e.ref !== t && (e.ref?.delete(e), t.add(e), e.ref = t);
}
function _U(e, t, r = 1e3) {
  ft(() => {
    if (t) {
      let n = 0;
      V(e, (i, o) => {
        const a = i.current;
        if (a.length) {
          let s = r * t[o];
          isNaN(s) ? s = n : n = s, V(a, (u) => {
            V(u.queue, (c) => {
              const _ = c.delay;
              c.delay = (l) => s + tt(_ || 0, l);
            });
          }), i.start();
        }
      });
    } else {
      let n = Promise.resolve();
      V(e, (i) => {
        const o = i.current;
        if (o.length) {
          const a = o.map((s) => {
            const u = s.queue;
            return s.queue = [], u;
          });
          n = n.then(() => (V(
            o,
            (s, u) => V(a[u] || [], (c) => s.queue.push(c))
          ), Promise.all(i.start())));
        }
      });
    }
  });
}
var YE = {
  default: { tension: 170, friction: 26 },
  gentle: { tension: 120, friction: 14 },
  wobbly: { tension: 180, friction: 12 },
  stiff: { tension: 210, friction: 20 },
  slow: { tension: 280, friction: 60 },
  molasses: { tension: 280, friction: 120 }
}, Qc = {
  ...YE.default,
  mass: 1,
  damping: 1,
  easing: wE.linear,
  clamp: !1
}, fU = class {
  constructor() {
    this.velocity = 0, Object.assign(this, Qc);
  }
};
function dU(e, t, r) {
  r && (r = { ...r }, ah(r, t), t = { ...r, ...t }), ah(e, t), Object.assign(e, t);
  for (const a in Qc)
    e[a] == null && (e[a] = Qc[a]);
  let { frequency: n, damping: i } = e;
  const { mass: o } = e;
  return y.und(n) || (n < 0.01 && (n = 0.01), i < 0 && (i = 0), e.tension = Math.pow(2 * Math.PI / n, 2) * o, e.friction = 4 * Math.PI * i * o / n), e;
}
function ah(e, t) {
  if (!y.und(t.decay))
    e.duration = void 0;
  else {
    const r = !y.und(t.tension) || !y.und(t.friction);
    (r || !y.und(t.frequency) || !y.und(t.damping) || !y.und(t.mass)) && (e.duration = void 0, e.decay = void 0), r && (e.frequency = void 0);
  }
}
var sh = [], hU = class {
  constructor() {
    this.changed = !1, this.values = sh, this.toValues = null, this.fromValues = sh, this.config = new fU(), this.immediate = !1;
  }
};
function KE(e, { key: t, props: r, defaultProps: n, state: i, actions: o }) {
  return new Promise((a, s) => {
    let u, c, _ = Vi(r.cancel ?? n?.cancel, t);
    if (_)
      h();
    else {
      y.und(r.pause) || (i.paused = Vi(r.pause, t));
      let d = n?.pause;
      d !== !0 && (d = i.paused || Vi(d, t)), u = tt(r.delay || 0, t), d ? (i.resumeQueue.add(f), o.pause()) : (o.resume(), f());
    }
    function l() {
      i.resumeQueue.add(f), i.timeouts.delete(c), c.cancel(), u = c.time - q.now();
    }
    function f() {
      u > 0 && !Nt.skipAnimation ? (i.delayed = !0, c = q.setTimeout(h, u), i.pauseQueue.add(l), i.timeouts.add(c)) : h();
    }
    function h() {
      i.delayed && (i.delayed = !1), i.pauseQueue.delete(l), i.timeouts.delete(c), e <= (i.cancelId || 0) && (_ = !0);
      try {
        o.start({ ...r, callId: e, cancel: _ }, a);
      } catch (d) {
        s(d);
      }
    }
  });
}
var D_ = (e, t) => t.length == 1 ? t[0] : t.some((r) => r.cancelled) ? xn(e.get()) : t.every((r) => r.noop) ? $E(e.get()) : Ct(
  e.get(),
  t.every((r) => r.finished)
), $E = (e) => ({
  value: e,
  noop: !0,
  finished: !0,
  cancelled: !1
}), Ct = (e, t, r = !1) => ({
  value: e,
  finished: t,
  cancelled: r
}), xn = (e) => ({
  value: e,
  cancelled: !0,
  finished: !1
});
function zE(e, t, r, n) {
  const { callId: i, parentId: o, onRest: a } = t, { asyncTo: s, promise: u } = r;
  return !o && e === s && !t.reset ? u : r.promise = (async () => {
    r.asyncId = i, r.asyncTo = e;
    const c = ru(
      t,
      (m, T) => (
        // The `onRest` prop is only called when the `runAsync` promise is resolved.
        T === "onRest" ? void 0 : m
      )
    );
    let _, l;
    const f = new Promise(
      (m, T) => (_ = m, l = T)
    ), h = (m) => {
      const T = (
        // The `cancel` prop or `stop` method was used.
        i <= (r.cancelId || 0) && xn(n) || // The async `to` prop was replaced.
        i !== r.asyncId && Ct(n, !1)
      );
      if (T)
        throw m.result = T, l(m), m;
    }, d = (m, T) => {
      const O = new Zc(), E = new uh();
      return (async () => {
        if (Nt.skipAnimation)
          throw ho(r), E.result = Ct(n, !1), l(E), E;
        h(O);
        const R = y.obj(m) ? { ...m } : { ...T, to: m };
        R.parentId = i, qt(c, (g, A) => {
          y.und(R[A]) && (R[A] = g);
        });
        const b = await n.start(R);
        return h(O), r.paused && await new Promise((g) => {
          r.resumeQueue.add(g);
        }), b;
      })();
    };
    let p;
    if (Nt.skipAnimation)
      return ho(r), Ct(n, !1);
    try {
      let m;
      y.arr(e) ? m = (async (T) => {
        for (const O of T)
          await d(O);
      })(e) : m = Promise.resolve(e(d, n.stop.bind(n))), await Promise.all([m.then(_), f]), p = Ct(n.get(), !0, !1);
    } catch (m) {
      if (m instanceof Zc)
        p = m.result;
      else if (m instanceof uh)
        p = m.result;
      else
        throw m;
    } finally {
      i == r.asyncId && (r.asyncId = o, r.asyncTo = o ? s : void 0, r.promise = o ? u : void 0);
    }
    return y.fun(a) && q.batchedUpdates(() => {
      a(p, n, n.item);
    }), p;
  })();
}
function ho(e, t) {
  Fi(e.timeouts, (r) => r.cancel()), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, t && (e.cancelId = t);
}
var Zc = class extends Error {
  constructor() {
    super(
      "An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."
    );
  }
}, uh = class extends Error {
  constructor() {
    super("SkipAnimationSignal");
  }
}, el = (e) => e instanceof iu, pU = 1, iu = class extends PE {
  constructor() {
    super(...arguments), this.id = pU++, this._priority = 0;
  }
  get priority() {
    return this._priority;
  }
  set priority(e) {
    this._priority != e && (this._priority = e, this._onPriorityChange(e));
  }
  /** Get the current value */
  get() {
    const e = Ft(this);
    return e && e.getValue();
  }
  /** Create a spring that maps our value to another value */
  to(...e) {
    return Nt.to(this, e);
  }
  /** @deprecated Use the `to` method instead. */
  interpolate(...e) {
    return BE(), Nt.to(this, e);
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
    uo(this, {
      type: "change",
      parent: this,
      value: e,
      idle: t
    });
  }
  /** Tell our children about our new priority */
  _onPriorityChange(e) {
    this.idle || Vo.sort(this), uo(this, {
      type: "priority",
      parent: this,
      priority: e
    });
  }
}, cn = Symbol.for("SpringPhase"), qE = 1, tl = 2, rl = 4, Wu = (e) => (e[cn] & qE) > 0, gr = (e) => (e[cn] & tl) > 0, Ai = (e) => (e[cn] & rl) > 0, ch = (e, t) => t ? e[cn] |= tl | qE : e[cn] &= ~tl, lh = (e, t) => t ? e[cn] |= rl : e[cn] &= ~rl, G_ = class extends iu {
  constructor(e, t) {
    if (super(), this.animation = new hU(), this.defaultProps = {}, this._state = {
      paused: !1,
      delayed: !1,
      pauseQueue: /* @__PURE__ */ new Set(),
      resumeQueue: /* @__PURE__ */ new Set(),
      timeouts: /* @__PURE__ */ new Set()
    }, this._pendingCalls = /* @__PURE__ */ new Set(), this._lastCallId = 0, this._lastToId = 0, this._memoizedDuration = 0, !y.und(e) || !y.und(t)) {
      const r = y.obj(e) ? { ...e } : { ...t, from: e };
      y.und(r.default) && (r.default = !0), this.start(r);
    }
  }
  /** Equals true when not advancing on each frame. */
  get idle() {
    return !(gr(this) || this._state.asyncTo) || Ai(this);
  }
  get goal() {
    return ut(this.animation.to);
  }
  get velocity() {
    const e = Ft(this);
    return e instanceof Wo ? e.lastVelocity || 0 : e.getPayload().map((t) => t.lastVelocity || 0);
  }
  /**
   * When true, this value has been animated at least once.
   */
  get hasAnimated() {
    return Wu(this);
  }
  /**
   * When true, this value has an unfinished animation,
   * which is either active or paused.
   */
  get isAnimating() {
    return gr(this);
  }
  /**
   * When true, all current and future animations are paused.
   */
  get isPaused() {
    return Ai(this);
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
    let t = !0, r = !1;
    const n = this.animation;
    let { toValues: i } = n;
    const { config: o } = n, a = eu(n.to);
    !a && Ot(n.to) && (i = rt(ut(n.to))), n.values.forEach((c, _) => {
      if (c.done)
        return;
      const l = (
        // Animated strings always go from 0 to 1.
        c.constructor == _o ? 1 : a ? a[_].lastPosition : i[_]
      );
      let f = n.immediate, h = l;
      if (!f) {
        if (h = c.lastPosition, o.tension <= 0) {
          c.done = !0;
          return;
        }
        let d = c.elapsedTime += e;
        const p = n.fromValues[_], m = c.v0 != null ? c.v0 : c.v0 = y.arr(o.velocity) ? o.velocity[_] : o.velocity;
        let T;
        const O = o.precision || (p == l ? 5e-3 : Math.min(1, Math.abs(l - p) * 1e-3));
        if (y.und(o.duration))
          if (o.decay) {
            const E = o.decay === !0 ? 0.998 : o.decay, R = Math.exp(-(1 - E) * d);
            h = p + m / (1 - E) * (1 - R), f = Math.abs(c.lastPosition - h) <= O, T = m * R;
          } else {
            T = c.lastVelocity == null ? m : c.lastVelocity;
            const E = o.restVelocity || O / 10, R = o.clamp ? 0 : o.bounce, b = !y.und(R), g = p == l ? c.v0 > 0 : p < l;
            let A, G = !1;
            const D = 1, H = Math.ceil(e / D);
            for (let Y = 0; Y < H && (A = Math.abs(T) > E, !(!A && (f = Math.abs(l - h) <= O, f))); ++Y) {
              b && (G = h == l || h > l == g, G && (T = -T * R, h = l));
              const re = -o.tension * 1e-6 * (h - l), Ne = -o.friction * 1e-3 * T, x = (re + Ne) / o.mass;
              T = T + x * D, h = h + T * D;
            }
          }
        else {
          let E = 1;
          o.duration > 0 && (this._memoizedDuration !== o.duration && (this._memoizedDuration = o.duration, c.durationProgress > 0 && (c.elapsedTime = o.duration * c.durationProgress, d = c.elapsedTime += e)), E = (o.progress || 0) + d / this._memoizedDuration, E = E > 1 ? 1 : E < 0 ? 0 : E, c.durationProgress = E), h = p + o.easing(E) * (l - p), T = (h - c.lastPosition) / e, f = E == 1;
        }
        c.lastVelocity = T, Number.isNaN(h) && (console.warn("Got NaN while animating:", this), f = !0);
      }
      a && !a[_].done && (f = !1), f ? c.done = !0 : t = !1, c.setValue(h, o.round) && (r = !0);
    });
    const s = Ft(this), u = s.getValue();
    if (t) {
      const c = ut(n.to);
      (u !== c || r) && !o.decay ? (s.setValue(c), this._onChange(c)) : r && o.decay && this._onChange(u), this._stop();
    } else
      r && this._onChange(u);
  }
  /** Set the current value, while stopping the current animation */
  set(e) {
    return q.batchedUpdates(() => {
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
    if (gr(this)) {
      const { to: e, config: t } = this.animation;
      q.batchedUpdates(() => {
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
    let r;
    return y.und(e) ? (r = this.queue || [], this.queue = []) : r = [y.obj(e) ? e : { ...t, to: e }], Promise.all(
      r.map((n) => this._update(n))
    ).then((n) => D_(this, n));
  }
  /**
   * Stop the current animation, and cancel any delayed updates.
   *
   * Pass `true` to call `onRest` with `cancelled: true`.
   */
  stop(e) {
    const { to: t } = this.animation;
    return this._focus(this.get()), ho(this._state, e && this._lastCallId), q.batchedUpdates(() => this._stop(t, e)), this;
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
    let { to: r, from: n } = e;
    r = y.obj(r) ? r[t] : r, (r == null || qc(r)) && (r = void 0), n = y.obj(n) ? n[t] : n, n == null && (n = void 0);
    const i = { to: r, from: n };
    return Wu(this) || (e.reverse && ([r, n] = [n, r]), n = ut(n), y.und(n) ? Ft(this) || this._set(r) : this._set(n)), i;
  }
  /** Every update is processed by this method before merging. */
  _update({ ...e }, t) {
    const { key: r, defaultProps: n } = this;
    e.default && Object.assign(
      n,
      ru(
        e,
        (a, s) => /^on/.test(s) ? VE(a, r) : a
      )
    ), fh(this, e, "onProps"), Si(this, "onProps", e, this);
    const i = this._prepareNode(e);
    if (Object.isFrozen(this))
      throw Error(
        "Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?"
      );
    const o = this._state;
    return KE(++this._lastCallId, {
      key: r,
      props: e,
      defaultProps: n,
      state: o,
      actions: {
        pause: () => {
          Ai(this) || (lh(this, !0), Ci(o.pauseQueue), Si(
            this,
            "onPause",
            Ct(this, yi(this, this.animation.to)),
            this
          ));
        },
        resume: () => {
          Ai(this) && (lh(this, !1), gr(this) && this._resume(), Ci(o.resumeQueue), Si(
            this,
            "onResume",
            Ct(this, yi(this, this.animation.to)),
            this
          ));
        },
        start: this._merge.bind(this, i)
      }
    }).then((a) => {
      if (e.loop && a.finished && !(t && a.noop)) {
        const s = JE(e);
        if (s)
          return this._update(s, !0);
      }
      return a;
    });
  }
  /** Merge props into the current animation */
  _merge(e, t, r) {
    if (t.cancel)
      return this.stop(!0), r(xn(this));
    const n = !y.und(e.to), i = !y.und(e.from);
    if (n || i)
      if (t.callId > this._lastToId)
        this._lastToId = t.callId;
      else
        return r(xn(this));
    const { key: o, defaultProps: a, animation: s } = this, { to: u, from: c } = s;
    let { to: _ = u, from: l = c } = e;
    i && !n && (!t.default || y.und(_)) && (_ = l), t.reverse && ([_, l] = [l, _]);
    const f = !nr(l, c);
    f && (s.from = l), l = ut(l);
    const h = !nr(_, u);
    h && this._focus(_);
    const d = qc(t.to), { config: p } = s, { decay: m, velocity: T } = p;
    (n || i) && (p.velocity = 0), t.config && !d && dU(
      p,
      tt(t.config, o),
      // Avoid calling the same "config" prop twice.
      t.config !== a.config ? tt(a.config, o) : void 0
    );
    let O = Ft(this);
    if (!O || y.und(_))
      return r(Ct(this, !0));
    const E = (
      // When `reset` is undefined, the `from` prop implies `reset: true`,
      // except for declarative updates. When `reset` is defined, there
      // must exist a value to animate from.
      y.und(t.reset) ? i && !t.default : !y.und(l) && Vi(t.reset, o)
    ), R = E ? l : this.get(), b = fo(_), g = y.num(b) || y.arr(b) || Qs(b), A = !d && (!g || Vi(a.immediate || t.immediate, o));
    if (h) {
      const Y = zc(_);
      if (Y !== O.constructor)
        if (A)
          O = this._set(b);
        else
          throw Error(
            `Cannot animate between ${O.constructor.name} and ${Y.name}, as the "to" prop suggests`
          );
    }
    const G = O.constructor;
    let D = Ot(_), H = !1;
    if (!D) {
      const Y = E || !Wu(this) && f;
      (h || Y) && (H = nr(fo(R), b), D = !H), (!nr(s.immediate, A) && !A || !nr(p.decay, m) || !nr(p.velocity, T)) && (D = !0);
    }
    if (H && gr(this) && (s.changed && !E ? D = !0 : D || this._stop(u)), !d && ((D || Ot(u)) && (s.values = O.getPayload(), s.toValues = Ot(_) ? null : G == _o ? [1] : rt(b)), s.immediate != A && (s.immediate = A, !A && !E && this._set(u)), D)) {
      const { onRest: Y } = s;
      V(TU, (Ne) => fh(this, t, Ne));
      const re = Ct(this, yi(this, u));
      Ci(this._pendingCalls, re), this._pendingCalls.add(r), s.changed && q.batchedUpdates(() => {
        s.changed = !E, Y?.(re, this), E ? tt(a.onRest, re) : s.onStart?.(re, this);
      });
    }
    E && this._set(R), d ? r(zE(t.to, t, this._state, this)) : D ? this._start() : gr(this) && !h ? this._pendingCalls.add(r) : r($E(R));
  }
  /** Update the `animation.to` value, which might be a `FluidValue` */
  _focus(e) {
    const t = this.animation;
    e !== t.to && (Zd(this) && this._detach(), t.to = e, Zd(this) && this._attach());
  }
  _attach() {
    let e = 0;
    const { to: t } = this.animation;
    Ot(t) && (_i(t, this), el(t) && (e = t.priority + 1)), this.priority = e;
  }
  _detach() {
    const { to: e } = this.animation;
    Ot(e) && co(e, this);
  }
  /**
   * Update the current value from outside the frameloop,
   * and return the `Animated` node.
   */
  _set(e, t = !0) {
    const r = ut(e);
    if (!y.und(r)) {
      const n = Ft(this);
      if (!n || !nr(r, n.getValue())) {
        const i = zc(r);
        !n || n.constructor != i ? y_(this, i.create(r)) : n.setValue(r), n && q.batchedUpdates(() => {
          this._onChange(r, t);
        });
      }
    }
    return Ft(this);
  }
  _onStart() {
    const e = this.animation;
    e.changed || (e.changed = !0, Si(
      this,
      "onStart",
      Ct(this, yi(this, e.to)),
      this
    ));
  }
  _onChange(e, t) {
    t || (this._onStart(), tt(this.animation.onChange, e, this)), tt(this.defaultProps.onChange, e, this), super._onChange(e, t);
  }
  // This method resets the animation state (even if already animating) to
  // ensure the latest from/to range is used, and it also ensures this spring
  // is added to the frameloop.
  _start() {
    const e = this.animation;
    Ft(this).reset(ut(e.to)), e.immediate || (e.fromValues = e.values.map((t) => t.lastPosition)), gr(this) || (ch(this, !0), Ai(this) || this._resume());
  }
  _resume() {
    Nt.skipAnimation ? this.finish() : Vo.start(this);
  }
  /**
   * Exit the frameloop and notify `onRest` listeners.
   *
   * Always wrap `_stop` calls with `batchedUpdates`.
   */
  _stop(e, t) {
    if (gr(this)) {
      ch(this, !1);
      const r = this.animation;
      V(r.values, (i) => {
        i.done = !0;
      }), r.toValues && (r.onChange = r.onPause = r.onResume = void 0), uo(this, {
        type: "idle",
        parent: this
      });
      const n = t ? xn(this.get()) : Ct(this.get(), yi(this, e ?? r.to));
      Ci(this._pendingCalls, n), r.changed && (r.changed = !1, Si(this, "onRest", n, this));
    }
  }
};
function yi(e, t) {
  const r = fo(t), n = fo(e.get());
  return nr(n, r);
}
function JE(e, t = e.loop, r = e.to) {
  const n = tt(t);
  if (n) {
    const i = n !== !0 && nu(n), o = (i || e).reverse, a = !i || i.reset;
    return po({
      ...e,
      loop: t,
      // Avoid updating default props when looping.
      default: !1,
      // Never loop the `pause` prop.
      pause: void 0,
      // For the "reverse" prop to loop as expected, the "to" prop
      // must be undefined. The "reverse" prop is ignored when the
      // "to" prop is an array or function.
      to: !o || qc(r) ? r : void 0,
      // Ignore the "from" prop except on reset.
      from: a ? e.from : void 0,
      reset: a,
      // The "loop" prop can return a "useSpring" props object to
      // override any of the original props.
      ...i
    });
  }
}
function po(e) {
  const { to: t, from: r } = e = nu(e), n = /* @__PURE__ */ new Set();
  return y.obj(t) && _h(t, n), y.obj(r) && _h(r, n), e.keys = n.size ? Array.from(n) : null, e;
}
function mU(e) {
  const t = po(e);
  return y.und(t.default) && (t.default = ru(t)), t;
}
function _h(e, t) {
  qt(e, (r, n) => r != null && t.add(n));
}
var TU = [
  "onStart",
  "onRest",
  "onChange",
  "onPause",
  "onResume"
];
function fh(e, t, r) {
  e.animation[r] = t[r] !== WE(t, r) ? VE(t[r], e.key) : void 0;
}
function Si(e, t, ...r) {
  e.animation[t]?.(...r), e.defaultProps[t]?.(...r);
}
var EU = ["onStart", "onChange", "onRest"], OU = 1, C_ = class {
  constructor(e, t) {
    this.id = OU++, this.springs = {}, this.queue = [], this._lastAsyncId = 0, this._active = /* @__PURE__ */ new Set(), this._changed = /* @__PURE__ */ new Set(), this._started = !1, this._state = {
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
    return this.each((t, r) => e[r] = t.get()), e;
  }
  /** Set the current values without animating. */
  set(e) {
    for (const t in e) {
      const r = e[t];
      y.und(r) || this.springs[t].set(r);
    }
  }
  /** Push an update onto the queue of each value. */
  update(e) {
    return e && this.queue.push(po(e)), this;
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
    return e ? t = rt(e).map(po) : this.queue = [], this._flush ? this._flush(this, t) : (rO(this, t), nl(this, t));
  }
  /** @internal */
  stop(e, t) {
    if (e !== !!e && (t = e), t) {
      const r = this.springs;
      V(rt(t), (n) => r[n].stop(!!e));
    } else
      ho(this._state, this._lastAsyncId), this.each((r) => r.stop(!!e));
    return this;
  }
  /** Freeze the active animation in time */
  pause(e) {
    if (y.und(e))
      this.start({ pause: !0 });
    else {
      const t = this.springs;
      V(rt(e), (r) => t[r].pause());
    }
    return this;
  }
  /** Resume the animation if paused. */
  resume(e) {
    if (y.und(e))
      this.start({ pause: !1 });
    else {
      const t = this.springs;
      V(rt(e), (r) => t[r].resume());
    }
    return this;
  }
  /** Call a function once per spring value */
  each(e) {
    qt(this.springs, e);
  }
  /** @internal Called at the end of every animation frame */
  _onFrame() {
    const { onStart: e, onChange: t, onRest: r } = this._events, n = this._active.size > 0, i = this._changed.size > 0;
    (n && !this._started || i && !this._started) && (this._started = !0, Fi(e, ([s, u]) => {
      u.value = this.get(), s(u, this, this._item);
    }));
    const o = !n && this._started, a = i || o && r.size ? this.get() : null;
    i && t.size && Fi(t, ([s, u]) => {
      u.value = a, s(u, this, this._item);
    }), o && (this._started = !1, Fi(r, ([s, u]) => {
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
    q.onFrame(this._onFrame);
  }
};
function nl(e, t) {
  return Promise.all(t.map((r) => QE(e, r))).then(
    (r) => D_(e, r)
  );
}
async function QE(e, t, r) {
  const { keys: n, to: i, from: o, loop: a, onRest: s, onResolve: u } = t, c = y.obj(t.default) && t.default;
  a && (t.loop = !1), i === !1 && (t.to = null), o === !1 && (t.from = null);
  const _ = y.arr(i) || y.fun(i) ? i : void 0;
  _ ? (t.to = void 0, t.onRest = void 0, c && (c.onRest = void 0)) : V(EU, (p) => {
    const m = t[p];
    if (y.fun(m)) {
      const T = e._events[p];
      t[p] = ({ finished: O, cancelled: E }) => {
        const R = T.get(m);
        R ? (O || (R.finished = !1), E && (R.cancelled = !0)) : T.set(m, {
          value: null,
          finished: O || !1,
          cancelled: E || !1
        });
      }, c && (c[p] = t[p]);
    }
  });
  const l = e._state;
  t.pause === !l.paused ? (l.paused = t.pause, Ci(t.pause ? l.pauseQueue : l.resumeQueue)) : l.paused && (t.pause = !0);
  const f = (n || Object.keys(e.springs)).map(
    (p) => e.springs[p].start(t)
  ), h = t.cancel === !0 || WE(t, "cancel") === !0;
  (_ || h && l.asyncId) && f.push(
    KE(++e._lastAsyncId, {
      props: t,
      state: l,
      actions: {
        pause: Yc,
        resume: Yc,
        start(p, m) {
          h ? (ho(l, e._lastAsyncId), m(xn(e))) : (p.onRest = s, m(
            zE(
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
  const d = D_(e, await Promise.all(f));
  if (a && d.finished && !(r && d.noop)) {
    const p = JE(t, a, i);
    if (p)
      return rO(e, [p]), QE(e, p, !0);
  }
  return u && q.batchedUpdates(() => u(d, e, e.item)), d;
}
function il(e, t) {
  const r = { ...e.springs };
  return t && V(rt(t), (n) => {
    y.und(n.keys) && (n = po(n)), y.obj(n.to) || (n = { ...n, to: void 0 }), tO(r, n, (i) => eO(i));
  }), ZE(e, r), r;
}
function ZE(e, t) {
  qt(t, (r, n) => {
    e.springs[n] || (e.springs[n] = r, _i(r, e));
  });
}
function eO(e, t) {
  const r = new G_();
  return r.key = e, t && _i(r, t), r;
}
function tO(e, t, r) {
  t.keys && V(t.keys, (n) => {
    (e[n] || (e[n] = r(n)))._prepareNode(t);
  });
}
function rO(e, t) {
  V(t, (r) => {
    tO(e.springs, r, (n) => eO(n, e));
  });
}
var fi = ({
  children: e,
  ...t
}) => {
  const r = ot(ds), n = t.pause || !!r.pause, i = t.immediate || !!r.immediate;
  t = qC(() => ({ pause: n, immediate: i }), [n, i]);
  const { Provider: o } = ds;
  return /* @__PURE__ */ Un.createElement(o, { value: t }, e);
}, ds = bU(fi, {});
fi.Provider = ds.Provider;
fi.Consumer = ds.Consumer;
function bU(e, t) {
  return Object.assign(e, Un.createContext(t)), e.Provider._context = e, e.Consumer._context = e, e;
}
var ou = () => {
  const e = [], t = function(n) {
    BC();
    const i = [];
    return V(e, (o, a) => {
      if (y.und(n))
        i.push(o.start());
      else {
        const s = r(n, o, a);
        s && i.push(o.start(s));
      }
    }), i;
  };
  t.current = e, t.add = function(n) {
    e.includes(n) || e.push(n);
  }, t.delete = function(n) {
    const i = e.indexOf(n);
    ~i && e.splice(i, 1);
  }, t.pause = function() {
    return V(e, (n) => n.pause(...arguments)), this;
  }, t.resume = function() {
    return V(e, (n) => n.resume(...arguments)), this;
  }, t.set = function(n) {
    V(e, (i, o) => {
      const a = y.fun(n) ? n(o, i) : n;
      a && i.set(a);
    });
  }, t.start = function(n) {
    const i = [];
    return V(e, (o, a) => {
      if (y.und(n))
        i.push(o.start());
      else {
        const s = this._getProps(n, o, a);
        s && i.push(o.start(s));
      }
    }), i;
  }, t.stop = function() {
    return V(e, (n) => n.stop(...arguments)), this;
  }, t.update = function(n) {
    return V(e, (i, o) => i.update(this._getProps(n, i, o))), this;
  };
  const r = function(n, i, o) {
    return y.fun(n) ? n(o, i) : n;
  };
  return t._getProps = r, t;
};
function U_(e, t, r) {
  const n = y.fun(t) && t;
  n && !r && (r = []);
  const i = Sr(
    () => n || arguments.length == 3 ? ou() : void 0,
    []
  ), o = ae(0), a = A_(), s = Sr(
    () => ({
      ctrls: [],
      queue: [],
      flush(T, O) {
        const E = il(T, O);
        return o.current > 0 && !s.queue.length && !Object.keys(E).some((b) => !T.springs[b]) ? nl(T, O) : new Promise((b) => {
          ZE(T, E), s.queue.push(() => {
            b(nl(T, O));
          }), a();
        });
      }
    }),
    []
  ), u = ae([...s.ctrls]), c = [], _ = $c(e) || 0;
  Sr(() => {
    V(u.current.slice(e, _), (T) => {
      Jc(T, i), T.stop(!0);
    }), u.current.length = e, l(_, e);
  }, [e]), Sr(() => {
    l(0, Math.min(_, e));
  }, r);
  function l(T, O) {
    for (let E = T; E < O; E++) {
      const R = u.current[E] || (u.current[E] = new C_(null, s.flush)), b = n ? n(E, R) : t[E];
      b && (c[E] = mU(b));
    }
  }
  const f = u.current.map((T, O) => il(T, c[O])), h = ot(fi), d = $c(h), p = h !== d && XE(h);
  ft(() => {
    o.current++, s.ctrls = u.current;
    const { queue: T } = s;
    T.length && (s.queue = [], V(T, (O) => O())), V(u.current, (O, E) => {
      i?.add(O), p && O.start({ default: h });
      const R = c[E];
      R && (S_(O, R.ref), O.ref ? O.queue.push(R) : O.start(R));
    });
  }), Zs(() => () => {
    V(s.ctrls, (T) => T.stop(!0));
  });
  const m = f.map((T) => ({ ...T }));
  return i ? [m, i] : m;
}
function di(e, t) {
  const r = y.fun(e), [[n], i] = U_(
    1,
    r ? e : [e],
    r ? t || [] : t
  );
  return r || arguments.length == 2 ? [n, i] : n;
}
var RU = () => ou(), vU = () => dt(RU)[0], gU = (e, t) => {
  const r = $C(() => new G_(e, t));
  return Zs(() => () => {
    r.stop();
  }), r;
};
function nO(e, t, r) {
  const n = y.fun(t) && t;
  n && !r && (r = []);
  let i = !0, o;
  const a = U_(
    e,
    (s, u) => {
      const c = n ? n(s, u) : t;
      return o = c.ref, i = i && c.reverse, c;
    },
    // Ensure the props function is called when no deps exist.
    // This works around the 3 argument rule.
    r || [{}]
  );
  if (ft(() => {
    V(a[1].current, (s, u) => {
      const c = a[1].current[u + (i ? 1 : -1)];
      if (S_(s, o), s.ref) {
        c && s.update({ to: c.springs });
        return;
      }
      c ? s.start({ to: c.springs }) : s.start();
    });
  }, r), n || arguments.length == 3) {
    const s = o ?? a[1];
    return s._getProps = (u, c, _) => {
      const l = y.fun(u) ? u(_, c) : u;
      if (l) {
        const f = s.current[_ + (l.reverse ? 1 : -1)];
        return f && (l.to = f.springs), l;
      }
    }, a;
  }
  return a[0];
}
function iO(e, t, r) {
  const n = y.fun(t) && t, {
    reset: i,
    sort: o,
    trail: a = 0,
    expires: s = !0,
    exitBeforeEnter: u = !1,
    onDestroyed: c,
    ref: _,
    config: l
  } = n ? n() : t, f = Sr(
    () => n || arguments.length == 3 ? ou() : void 0,
    []
  ), h = rt(e), d = [], p = ae(null), m = i ? null : p.current;
  ft(() => {
    p.current = d;
  }), Zs(() => (V(d, (x) => {
    f?.add(x.ctrl), x.ctrl.ref = f;
  }), () => {
    V(p.current, (x) => {
      x.expired && clearTimeout(x.expirationId), Jc(x.ctrl, f), x.ctrl.stop(!0);
    });
  }));
  const T = NU(h, n ? n() : t, m), O = i && p.current || [];
  ft(
    () => V(O, ({ ctrl: x, item: P, key: Q }) => {
      Jc(x, f), tt(c, P, Q);
    })
  );
  const E = [];
  if (m && V(m, (x, P) => {
    x.expired ? (clearTimeout(x.expirationId), O.push(x)) : (P = E[P] = T.indexOf(x.key), ~P && (d[P] = x));
  }), V(h, (x, P) => {
    d[P] || (d[P] = {
      key: T[P],
      item: x,
      phase: "mount",
      ctrl: new C_()
    }, d[P].ctrl.item = x);
  }), E.length) {
    let x = -1;
    const { leave: P } = n ? n() : t;
    V(E, (Q, _e) => {
      const ie = m[_e];
      ~Q ? (x = d.indexOf(ie), d[x] = { ...ie, item: h[Q] }) : P && d.splice(++x, 0, ie);
    });
  }
  y.fun(o) && d.sort((x, P) => o(x.item, P.item));
  let R = -a;
  const b = A_(), g = ru(t), A = /* @__PURE__ */ new Map(), G = ae(/* @__PURE__ */ new Map()), D = ae(!1);
  V(d, (x, P) => {
    const Q = x.key, _e = x.phase, ie = n ? n() : t;
    let se, Be;
    const Ae = tt(ie.delay || 0, Q);
    if (_e == "mount")
      se = ie.enter, Be = "enter";
    else {
      const W = T.indexOf(Q) < 0;
      if (_e != "leave")
        if (W)
          se = ie.leave, Be = "leave";
        else if (se = ie.update)
          Be = "update";
        else
          return;
      else if (!W)
        se = ie.enter, Be = "enter";
      else
        return;
    }
    if (se = tt(se, x.item, P), se = y.obj(se) ? nu(se) : { to: se }, !se.config) {
      const W = l || g.config;
      se.config = tt(W, x.item, P, Be);
    }
    R += a;
    const w = {
      ...g,
      // we need to add our props.delay value you here.
      delay: Ae + R,
      ref: _,
      immediate: ie.immediate,
      // This prevents implied resets.
      reset: !1,
      // Merge any phase-specific props.
      ...se
    };
    if (Be == "enter" && y.und(w.from)) {
      const W = n ? n() : t, I = y.und(W.initial) || m ? W.from : W.initial;
      w.from = tt(I, x.item, P);
    }
    const { onResolve: M } = w;
    w.onResolve = (W) => {
      tt(M, W);
      const I = p.current, te = I.find((C) => C.key === Q);
      if (te && !(W.cancelled && te.phase != "update") && te.ctrl.idle) {
        const C = I.every((Te) => Te.ctrl.idle);
        if (te.phase == "leave") {
          const Te = tt(s, te.item);
          if (Te !== !1) {
            const ue = Te === !0 ? 0 : Te;
            if (te.expired = !0, !C && ue > 0) {
              ue <= 2147483647 && (te.expirationId = setTimeout(b, ue));
              return;
            }
          }
        }
        C && I.some((Te) => Te.expired) && (G.current.delete(te), u && (D.current = !0), b());
      }
    };
    const L = il(x.ctrl, w);
    Be === "leave" && u ? G.current.set(x, { phase: Be, springs: L, payload: w }) : A.set(x, { phase: Be, springs: L, payload: w });
  });
  const H = ot(fi), Y = $c(H), re = H !== Y && XE(H);
  ft(() => {
    re && V(d, (x) => {
      x.ctrl.start({ default: H });
    });
  }, [H]), V(A, (x, P) => {
    if (G.current.size) {
      const Q = d.findIndex((_e) => _e.key === P.key);
      d.splice(Q, 1);
    }
  }), ft(
    () => {
      V(
        G.current.size ? G.current : A,
        ({ phase: x, payload: P }, Q) => {
          const { ctrl: _e } = Q;
          Q.phase = x, f?.add(_e), re && x == "enter" && _e.start({ default: H }), P && (S_(_e, P.ref), (_e.ref || f) && !D.current ? _e.update(P) : (_e.start(P), D.current && (D.current = !1)));
        }
      );
    },
    i ? void 0 : r
  );
  const Ne = (x) => /* @__PURE__ */ Un.createElement(Un.Fragment, null, d.map((P, Q) => {
    const { springs: _e } = A.get(P) || P.ctrl, ie = x({ ..._e }, P.item, P, Q);
    return ie && ie.type ? /* @__PURE__ */ Un.createElement(
      ie.type,
      {
        ...ie.props,
        key: y.str(P.key) || y.num(P.key) ? P.key : P.ctrl.id,
        ref: ie.ref
      }
    ) : ie;
  }));
  return f ? [Ne, f] : Ne;
}
var IU = 1;
function NU(e, { key: t, keys: r = t }, n) {
  if (r === null) {
    const i = /* @__PURE__ */ new Set();
    return e.map((o) => {
      const a = n && n.find(
        (s) => s.item === o && s.phase !== "leave" && !i.has(s)
      );
      return a ? (i.add(a), a.key) : IU++;
    });
  }
  return y.und(r) ? e : y.fun(r) ? e.map(r) : rt(r);
}
var AU = ({
  container: e,
  ...t
} = {}) => {
  const [r, n] = di(
    () => ({
      scrollX: 0,
      scrollY: 0,
      scrollXProgress: 0,
      scrollYProgress: 0,
      ...t
    }),
    []
  );
  return ft(() => {
    const i = KC(
      ({ x: o, y: a }) => {
        n.start({
          scrollX: o.current,
          scrollXProgress: o.progress,
          scrollY: a.current,
          scrollYProgress: a.progress
        });
      },
      { container: e?.current || void 0 }
    );
    return () => {
      V(Object.values(r), (o) => o.stop()), i();
    };
  }, []), r;
}, yU = ({
  container: e,
  ...t
}) => {
  const [r, n] = di(
    () => ({
      width: 0,
      height: 0,
      ...t
    }),
    []
  );
  return ft(() => {
    const i = xE(
      ({ width: o, height: a }) => {
        n.start({
          width: o,
          height: a,
          immediate: r.width.get() === 0 || r.height.get() === 0
        });
      },
      { container: e?.current || void 0 }
    );
    return () => {
      V(Object.values(r), (o) => o.stop()), i();
    };
  }, []), r;
}, SU = {
  any: 0,
  all: 1
};
function DU(e, t) {
  const [r, n] = dt(!1), i = ae(), o = y.fun(e) && e, a = o ? o() : {}, { to: s = {}, from: u = {}, ...c } = a, _ = o ? t : e, [l, f] = di(() => ({ from: u, ...c }), []);
  return ft(() => {
    const h = i.current, {
      root: d,
      once: p,
      amount: m = "any",
      ...T
    } = _ ?? {};
    if (!h || p && r || typeof IntersectionObserver > "u")
      return;
    const O = /* @__PURE__ */ new WeakMap(), E = () => (s && f.start(s), n(!0), p ? void 0 : () => {
      u && f.start(u), n(!1);
    }), R = (g) => {
      g.forEach((A) => {
        const G = O.get(A.target);
        if (A.isIntersecting !== !!G)
          if (A.isIntersecting) {
            const D = E();
            y.fun(D) ? O.set(A.target, D) : b.unobserve(A.target);
          } else
            G && (G(), O.delete(A.target));
      });
    }, b = new IntersectionObserver(R, {
      root: d && d.current || void 0,
      threshold: typeof m == "number" || Array.isArray(m) ? m : SU[m],
      ...T
    });
    return b.observe(h), () => b.unobserve(h);
  }, [_]), o ? [i, l] : [i, r];
}
function GU({ children: e, ...t }) {
  return e(di(t));
}
function CU({
  items: e,
  children: t,
  ...r
}) {
  const n = nO(e.length, r);
  return e.map((i, o) => {
    const a = t(i, o);
    return y.fun(a) ? a(n[o]) : a;
  });
}
function UU({
  items: e,
  children: t,
  ...r
}) {
  return iO(e, r)(t);
}
var au = class extends iu {
  constructor(e, t) {
    super(), this.source = e, this.idle = !0, this._active = /* @__PURE__ */ new Set(), this.calc = ri(...t);
    const r = this._get(), n = zc(r);
    y_(this, n.create(r));
  }
  advance(e) {
    const t = this._get(), r = this.get();
    nr(t, r) || (Ft(this).setValue(t), this._onChange(t, this.idle)), !this.idle && dh(this._active) && Xu(this);
  }
  _get() {
    const e = y.arr(this.source) ? this.source.map(ut) : rt(ut(this.source));
    return this.calc(...e);
  }
  _start() {
    this.idle && !dh(this._active) && (this.idle = !1, V(eu(this), (e) => {
      e.done = !1;
    }), Nt.skipAnimation ? (q.batchedUpdates(() => this.advance()), Xu(this)) : Vo.start(this));
  }
  // Observe our sources only when we're observed.
  _attach() {
    let e = 1;
    V(rt(this.source), (t) => {
      Ot(t) && _i(t, this), el(t) && (t.idle || this._active.add(t), e = Math.max(e, t.priority + 1));
    }), this.priority = e, this._start();
  }
  // Stop observing our sources once we have no observers.
  _detach() {
    V(rt(this.source), (e) => {
      Ot(e) && co(e, this);
    }), this._active.clear(), Xu(this);
  }
  /** @internal */
  eventObserved(e) {
    e.type == "change" ? e.idle ? this.advance() : (this._active.add(e.parent), this._start()) : e.type == "idle" ? this._active.delete(e.parent) : e.type == "priority" && (this.priority = rt(this.source).reduce(
      (t, r) => Math.max(t, (el(r) ? r.priority : 0) + 1),
      0
    ));
  }
};
function wU(e) {
  return e.idle !== !1;
}
function dh(e) {
  return !e.size || Array.from(e).every(wU);
}
function Xu(e) {
  e.idle || (e.idle = !0, V(eu(e), (t) => {
    t.done = !0;
  }), uo(e, {
    type: "idle",
    parent: e
  }));
}
var PU = (e, ...t) => new au(e, t), HU = (e, ...t) => (BE(), new au(e, t));
Nt.assign({
  createStringInterpolator: kE,
  to: (e, t) => new au(e, t)
});
var MU = Vo.advance, oO = /^--/;
function kU(e, t) {
  return t == null || typeof t == "boolean" || t === "" ? "" : typeof t == "number" && t !== 0 && !oO.test(e) && !(Wi.hasOwnProperty(e) && Wi[e]) ? t + "px" : ("" + t).trim();
}
var hh = {};
function LU(e, t) {
  if (!e.nodeType || !e.setAttribute)
    return !1;
  const r = e.nodeName === "filter" || e.parentNode && e.parentNode.nodeName === "filter", { style: n, children: i, scrollTop: o, scrollLeft: a, viewBox: s, ...u } = t, c = Object.values(u), _ = Object.keys(u).map(
    (l) => r || e.hasAttribute(l) ? l : hh[l] || (hh[l] = l.replace(
      /([A-Z])/g,
      // Attributes are written in dash case
      (f) => "-" + f.toLowerCase()
    ))
  );
  i !== void 0 && (e.textContent = i);
  for (const l in n)
    if (n.hasOwnProperty(l)) {
      const f = kU(l, n[l]);
      oO.test(l) ? e.style.setProperty(l, f) : e.style[l] = f;
    }
  _.forEach((l, f) => {
    e.setAttribute(l, c[f]);
  }), o !== void 0 && (e.scrollTop = o), a !== void 0 && (e.scrollLeft = a), s !== void 0 && e.setAttribute("viewBox", s);
}
var Wi = {
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
}, BU = (e, t) => e + t.charAt(0).toUpperCase() + t.substring(1), xU = ["Webkit", "Ms", "Moz", "O"];
Wi = Object.keys(Wi).reduce((e, t) => (xU.forEach((r) => e[BU(r, t)] = e[t]), e), Wi);
var FU = /^(matrix|translate|scale|rotate|skew)/, jU = /^(translate)/, VU = /^(rotate|skew)/, Yu = (e, t) => y.num(e) && e !== 0 ? e + t : e, Pa = (e, t) => y.arr(e) ? e.every((r) => Pa(r, t)) : y.num(e) ? e === t : parseFloat(e) === t, WU = class extends tu {
  constructor({ x: e, y: t, z: r, ...n }) {
    const i = [], o = [];
    (e || t || r) && (i.push([e || 0, t || 0, r || 0]), o.push((a) => [
      `translate3d(${a.map((s) => Yu(s, "px")).join(",")})`,
      // prettier-ignore
      Pa(a, 0)
    ])), qt(n, (a, s) => {
      if (s === "transform")
        i.push([a || ""]), o.push((u) => [u, u === ""]);
      else if (FU.test(s)) {
        if (delete n[s], y.und(a))
          return;
        const u = jU.test(s) ? "px" : VU.test(s) ? "deg" : "";
        i.push(rt(a)), o.push(
          s === "rotate3d" ? ([c, _, l, f]) => [
            `rotate3d(${c},${_},${l},${Yu(f, u)})`,
            Pa(f, 0)
          ] : (c) => [
            `${s}(${c.map((_) => Yu(_, u)).join(",")})`,
            Pa(c, s.startsWith("scale") ? 1 : 0)
          ]
        );
      }
    }), i.length && (n.transform = new XU(i, o)), super(n);
  }
}, XU = class extends PE {
  constructor(e, t) {
    super(), this.inputs = e, this.transforms = t, this._value = null;
  }
  get() {
    return this._value || (this._value = this._get());
  }
  _get() {
    let e = "", t = !0;
    return V(this.inputs, (r, n) => {
      const i = ut(r[0]), [o, a] = this.transforms[n](
        y.arr(i) ? i : r.map(ut)
      );
      e += " " + o, t = t && a;
    }), t ? "none" : e;
  }
  // Start observing our inputs once we have an observer.
  observerAdded(e) {
    e == 1 && V(
      this.inputs,
      (t) => V(
        t,
        (r) => Ot(r) && _i(r, this)
      )
    );
  }
  // Stop observing our inputs once we have no observers.
  observerRemoved(e) {
    e == 0 && V(
      this.inputs,
      (t) => V(
        t,
        (r) => Ot(r) && co(r, this)
      )
    );
  }
  eventObserved(e) {
    e.type == "change" && (this._value = null), uo(this, e);
  }
}, YU = [
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
Nt.assign({
  batchedUpdates: yh,
  createStringInterpolator: kE,
  colors: EC
});
var KU = oU(YU, {
  applyAnimatedValues: LU,
  createAnimatedStyle: (e) => new WU(e),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getComponentProps: ({ scrollTop: e, scrollLeft: t, ...r }) => r
}), ph = KU.animated;
const $U = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Any: aU,
  BailSignal: Zc,
  Controller: C_,
  FrameValue: iu,
  Globals: Nt,
  Interpolation: au,
  Spring: GU,
  SpringContext: fi,
  SpringRef: ou,
  SpringValue: G_,
  Trail: CU,
  Transition: UU,
  a: ph,
  animated: ph,
  config: YE,
  createInterpolator: ri,
  easings: wE,
  inferTo: nu,
  interpolate: HU,
  to: PU,
  update: MU,
  useChain: _U,
  useInView: DU,
  useIsomorphicLayoutEffect: ft,
  useReducedMotion: ZC,
  useResize: yU,
  useScroll: AU,
  useSpring: di,
  useSpringRef: vU,
  useSpringValue: gU,
  useSprings: U_,
  useTrail: nO,
  useTransition: iO
}, Symbol.toStringTag, { value: "Module" })), zU = () => {
  const { Spring: e } = Hs(), t = di({
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
}, qU = Ue.div`
  background: ${({ theme: e }) => e.grey};
  border-bottom: 2px solid ${({ theme: e }) => e.lightGrey};
  height: ${It("100%", "42px")};
  box-sizing: border-box;
  ${fn("space-between", "center")}
  ${t1(23)}
`, JU = Ue.h2`
  color: ${({ theme: e }) => e.light};
`, QU = Tr(() => {
  const e = Os(), t = e.getActiveTab(), { spring: r, animatedDiv: n } = zU(), i = Qr(), { openFile: o, saveFile: a } = CT(), s = lC(), u = !e.isAllowedToExecute(), c = _n(), { isSignInOpened: _, ModalComponents: l } = c.state, f = () => {
    i.tabs.createTab();
  }, h = (d) => () => {
    c.update({
      isSignInOpened: d
    });
  };
  return /* @__PURE__ */ mt(qU, { as: n, style: r, children: [
    /* @__PURE__ */ K(
      iC,
      {
        runCode: s,
        createTab: f,
        openFile: o,
        saveFile: a
      }
    ),
    /* @__PURE__ */ mt(JU, { children: [
      t.label,
      " - CodeGear"
    ] }),
    /* @__PURE__ */ K(
      sC,
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
}), Pw = () => /* @__PURE__ */ K(xl, { children: /* @__PURE__ */ K(QU, {}) });
class ZU {
  constructor(t) {
    zr(this), this.state = t, this.getters = t.getters, this.actions = t.actions, this.codeRunner = new cC(t);
  }
}
class ew {
  constructor() {
    this.activeKey = "", this.content = [], this.theme = "vs-dark", this.fontSize = 20, this.tabSize = 4, this.customBackground = "#3d3d3d", this.customColor = "#3d3d3d", this.isStorageDisabled = !1, this.executeMessages = [], zr(this);
    const t = new ml(this.isStorageDisabled);
    this.storage = t, this.getters = new ZG(this), this.actions = new QG(this), this.services = new ZU(this), this.theme = t.get("EDITOR_THEME", "vs-dark"), this.fontSize = Number(
      t.get("EDITOR_FONT_SIZE", 20)
    ), this.tabSize = Number(
      t.get("EDITOR_TAB_SIZE", 4)
    ), this.customBackground = t.get(
      "EDITOR_CUSTOM_BACKGROUND",
      "#3d3d3d"
    ), this.customColor = t.get("EDITOR_CUSTOM_COLOR", "#3d3d3d");
    const r = t.get("EDITOR_CONTENT_DATA", []);
    if (this.executeMessages = t.get(
      "EDITOR_EXECUTE_MESSAGES",
      []
    ), r.length === 0) {
      this.actions.tabs.createTab();
      const n = this.content[0];
      n.lang = tC, n.content = eC;
    }
    this.content = [...this.content, ...r], this.activeKey = this.content[0].key;
  }
}
const hi = hs({}), Hw = ({ children: e }) => {
  const t = new ew();
  return /* @__PURE__ */ K(hi.Provider, { value: t, children: e });
}, aO = hs({}), Mw = ({ children: e, SignIn: t }) => {
  const r = Sr(
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
  ), n = (u, c) => ({ ...u, ...c }), [i, o] = fO(n, r), a = (u) => {
    i[u] ? o({ [u]: !1 }) : o({ [u]: !0 });
  }, s = Sr(
    () => ({
      state: i,
      update: o,
      toggle: a
    }),
    [i]
  );
  return /* @__PURE__ */ K(aO.Provider, { value: s, children: e });
}, tw = () => {
  const e = Mp();
  return ({ background: t, color: r }) => {
    e?.editor.defineTheme(yT, {
      base: "vs",
      inherit: !0,
      rules: [],
      colors: {
        "editor.background": t,
        "editor.foreground": r
      }
    });
  };
};
function rw(e, t) {
  for (var r in t)
    e[r] = t[r];
  return e;
}
function mh(e, t) {
  for (var r in e)
    if (r !== "__source" && !(r in t))
      return !0;
  for (var n in t)
    if (n !== "__source" && e[n] !== t[n])
      return !0;
  return !1;
}
function Th(e) {
  this.props = e;
}
(Th.prototype = new lr()).isPureReactComponent = !0, Th.prototype.shouldComponentUpdate = function(e, t) {
  return mh(this.props, e) || mh(this.state, t);
};
var Eh = X.__b;
X.__b = function(e) {
  e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), Eh && Eh(e);
};
var nw = X.__e;
X.__e = function(e, t, r, n) {
  if (e.then) {
    for (var i, o = t; o = o.__; )
      if ((i = o.__c) && i.__c)
        return t.__e == null && (t.__e = r.__e, t.__k = r.__k), i.__c(e, t);
  }
  nw(e, t, r, n);
};
var Oh = X.unmount;
function sO(e, t, r) {
  return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(n) {
    typeof n.__c == "function" && n.__c();
  }), e.__c.__H = null), (e = rw({}, e)).__c != null && (e.__c.__P === r && (e.__c.__P = t), e.__c = null), e.__k = e.__k && e.__k.map(function(n) {
    return sO(n, t, r);
  })), e;
}
function uO(e, t, r) {
  return e && (e.__v = null, e.__k = e.__k && e.__k.map(function(n) {
    return uO(n, t, r);
  }), e.__c && e.__c.__P === t && (e.__e && r.insertBefore(e.__e, e.__d), e.__c.__e = !0, e.__c.__P = r)), e;
}
function Ku() {
  this.__u = 0, this.t = null, this.__b = null;
}
function cO(e) {
  var t = e.__.__c;
  return t && t.__a && t.__a(e);
}
function ca() {
  this.u = null, this.o = null;
}
X.unmount = function(e) {
  var t = e.__c;
  t && t.__R && t.__R(), t && e.__h === !0 && (e.type = null), Oh && Oh(e);
}, (Ku.prototype = new lr()).__c = function(e, t) {
  var r = t.__c, n = this;
  n.t == null && (n.t = []), n.t.push(r);
  var i = cO(n.__v), o = !1, a = function() {
    o || (o = !0, r.__R = null, i ? i(s) : s());
  };
  r.__R = a;
  var s = function() {
    if (!--n.__u) {
      if (n.state.__a) {
        var c = n.state.__a;
        n.__v.__k[0] = uO(c, c.__c.__P, c.__c.__O);
      }
      var _;
      for (n.setState({ __a: n.__b = null }); _ = n.t.pop(); )
        _.forceUpdate();
    }
  }, u = t.__h === !0;
  n.__u++ || u || n.setState({ __a: n.__b = n.__v.__k[0] }), e.then(a, a);
}, Ku.prototype.componentWillUnmount = function() {
  this.t = [];
}, Ku.prototype.render = function(e, t) {
  if (this.__b) {
    if (this.__v.__k) {
      var r = document.createElement("div"), n = this.__v.__k[0].__c;
      this.__v.__k[0] = sO(this.__b, r, n.__O = n.__P);
    }
    this.__b = null;
  }
  var i = t.__a && fd(ro, null, e.fallback);
  return i && (i.__h = null), [fd(ro, null, t.__a ? null : e.children), i];
};
var bh = function(e, t, r) {
  if (++r[1] === r[0] && e.o.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.o.size))
    for (r = e.u; r; ) {
      for (; r.length > 3; )
        r.pop()();
      if (r[1] < r[0])
        break;
      e.u = r = r[2];
    }
};
(ca.prototype = new lr()).__a = function(e) {
  var t = this, r = cO(t.__v), n = t.o.get(e);
  return n[0]++, function(i) {
    var o = function() {
      t.props.revealOrder ? (n.push(i), bh(t, e, n)) : i();
    };
    r ? r(o) : o();
  };
}, ca.prototype.render = function(e) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var t = Za(e.children);
  e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
  for (var r = t.length; r--; )
    this.o.set(t[r], this.u = [1, 0, this.u]);
  return e.children;
}, ca.prototype.componentDidUpdate = ca.prototype.componentDidMount = function() {
  var e = this;
  this.o.forEach(function(t, r) {
    bh(e, r, t);
  });
};
var iw = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, ow = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, aw = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, sw = /[A-Z0-9]/g, uw = typeof document < "u", cw = function(e) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e);
};
lr.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
  Object.defineProperty(lr.prototype, e, { configurable: !0, get: function() {
    return this["UNSAFE_" + e];
  }, set: function(t) {
    Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t });
  } });
});
var Rh = X.event;
function lw() {
}
function _w() {
  return this.cancelBubble;
}
function fw() {
  return this.defaultPrevented;
}
X.event = function(e) {
  return Rh && (e = Rh(e)), e.persist = lw, e.isPropagationStopped = _w, e.isDefaultPrevented = fw, e.nativeEvent = e;
};
var dw = { enumerable: !1, configurable: !0, get: function() {
  return this.class;
} }, vh = X.vnode;
X.vnode = function(e) {
  typeof e.type == "string" && function(t) {
    var r = t.props, n = t.type, i = {};
    for (var o in r) {
      var a = r[o];
      if (!(o === "value" && "defaultValue" in r && a == null || uw && o === "children" && n === "noscript" || o === "class" || o === "className")) {
        var s = o.toLowerCase();
        o === "defaultValue" && "value" in r && r.value == null ? o = "value" : o === "download" && a === !0 ? a = "" : s === "ondoubleclick" ? o = "ondblclick" : s !== "onchange" || n !== "input" && n !== "textarea" || cw(r.type) ? s === "onfocus" ? o = "onfocusin" : s === "onblur" ? o = "onfocusout" : aw.test(o) ? o = s : n.indexOf("-") === -1 && ow.test(o) ? o = o.replace(sw, "-$&").toLowerCase() : a === null && (a = void 0) : s = o = "oninput", s === "oninput" && i[o = s] && (o = "oninputCapture"), i[o] = a;
      }
    }
    n == "select" && i.multiple && Array.isArray(i.value) && (i.value = Za(r.children).forEach(function(u) {
      u.props.selected = i.value.indexOf(u.props.value) != -1;
    })), n == "select" && i.defaultValue != null && (i.value = Za(r.children).forEach(function(u) {
      u.props.selected = i.multiple ? i.defaultValue.indexOf(u.props.value) != -1 : i.defaultValue == u.props.value;
    })), r.class && !r.className ? (i.class = r.class, Object.defineProperty(i, "className", dw)) : (r.className && !r.class || r.class && r.className) && (i.class = i.className = r.className), t.props = i;
  }(e), e.$$typeof = iw, vh && vh(e);
};
var gh = X.__r;
X.__r = function(e) {
  gh && gh(e), e.__c;
};
var Ih = X.diffed;
X.diffed = function(e) {
  Ih && Ih(e);
  var t = e.props, r = e.__e;
  r != null && e.type === "textarea" && "value" in t && t.value !== r.value && (r.value = t.value == null ? "" : t.value);
};
const kw = dO(() => import("./editor-9ff59f79.mjs").then((e) => e.e));
export {
  hi as $,
  xl as A,
  Qr as B,
  Dw as C,
  Sc as D,
  GT as E,
  Uv as F,
  Vl as G,
  Pw as H,
  oC as I,
  Gw as J,
  Nr as K,
  yT as L,
  Mw as M,
  vw as N,
  yw as O,
  u1 as P,
  m1 as Q,
  BA as R,
  AT as S,
  Uw as T,
  Mp as U,
  h1 as V,
  Sw as W,
  kw as X,
  QG as Y,
  ZG as Z,
  ew as _,
  ai as a,
  aO as a0,
  tw as b,
  Hs as c,
  _n as d,
  gR as e,
  ww as f,
  gw as g,
  NR as h,
  Pv as i,
  it as j,
  RR as k,
  kp as l,
  FA as m,
  zl as n,
  Tr as o,
  Rw as p,
  fn as q,
  Hw as r,
  Ue as s,
  p1 as t,
  xA as u,
  Cw as v,
  It as w,
  Iw as x,
  Nw as y,
  Aw as z
};
