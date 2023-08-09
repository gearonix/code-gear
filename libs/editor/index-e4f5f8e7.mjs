import * as Gn from "react";
import Pe, { useState as dt, forwardRef as Bn, memo as xn, useContext as ot, useRef as se, useCallback as xr, useEffect as Le, createContext as ss, useMemo as yr, createElement as aO, useImperativeHandle as Ih, useLayoutEffect as sO, useReducer as uO, lazy as cO } from "react";
import { jsx as K, jsxs as mt, Fragment as Nh } from "react/jsx-runtime";
import { unstable_batchedUpdates as Ah } from "react-dom";
import { message as lO, ConfigProvider as _O, Button as yi, Select as fO, Tabs as yh, Popconfirm as dO } from "antd";
import { Link as hO } from "react-router-dom";
import "react-smooth-scrollbar";
function he(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  throw new Error(typeof e == "number" ? "[MobX] minified error nr: " + e + (r.length ? " " + r.map(String).join(",") : "") + ". Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts" : "[MobX] " + e);
}
var pO = {};
function tl() {
  return typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : pO;
}
var Sh = Object.assign, Sa = Object.getOwnPropertyDescriptor, Yt = Object.defineProperty, fo = Object.prototype, ju = [];
Object.freeze(ju);
var Dh = {};
Object.freeze(Dh);
var mO = typeof Proxy < "u", EO = /* @__PURE__ */ Object.toString();
function Gh() {
  mO || he("Proxy not available");
}
function Uh(e) {
  var t = !1;
  return function() {
    if (!t)
      return t = !0, e.apply(this, arguments);
  };
}
var bn = function() {
};
function Mt(e) {
  return typeof e == "function";
}
function rn(e) {
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
function fr(e) {
  if (!us(e))
    return !1;
  var t = Object.getPrototypeOf(e);
  if (t == null)
    return !0;
  var r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r.toString() === EO;
}
function Ch(e) {
  var t = e?.constructor;
  return t ? t.name === "GeneratorFunction" || t.displayName === "GeneratorFunction" : !1;
}
function ho(e, t, r) {
  Yt(e, t, {
    enumerable: !1,
    writable: !0,
    configurable: !0,
    value: r
  });
}
function wh(e, t, r) {
  Yt(e, t, {
    enumerable: !1,
    writable: !1,
    configurable: !0,
    value: r
  });
}
function Wr(e, t) {
  var r = "isMobX" + e;
  return t.prototype[r] = !0, function(n) {
    return us(n) && n[r] === !0;
  };
}
function ti(e) {
  return e instanceof Map;
}
function po(e) {
  return e instanceof Set;
}
var Ph = typeof Object.getOwnPropertySymbols < "u";
function TO(e) {
  var t = Object.keys(e);
  if (!Ph)
    return t;
  var r = Object.getOwnPropertySymbols(e);
  return r.length ? [].concat(t, r.filter(function(n) {
    return fo.propertyIsEnumerable.call(e, n);
  })) : t;
}
var Fn = typeof Reflect < "u" && Reflect.ownKeys ? Reflect.ownKeys : Ph ? function(e) {
  return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
} : (
  /* istanbul ignore next */
  Object.getOwnPropertyNames
);
function Hh(e) {
  return e === null ? null : typeof e == "object" ? "" + e : e;
}
function ur(e, t) {
  return fo.hasOwnProperty.call(e, t);
}
var OO = Object.getOwnPropertyDescriptors || function(t) {
  var r = {};
  return Fn(t).forEach(function(n) {
    r[n] = Sa(t, n);
  }), r;
};
function C_(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, bO(n.key), n);
  }
}
function rl(e, t, r) {
  return t && C_(e.prototype, t), r && C_(e, r), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function jn() {
  return jn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, jn.apply(this, arguments);
}
function Mh(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Vu(e, t);
}
function Vu(e, t) {
  return Vu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Vu(e, t);
}
function ru(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function RO(e, t) {
  if (e) {
    if (typeof e == "string")
      return w_(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return w_(e, t);
  }
}
function w_(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function gn(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r)
    return (r = r.call(e)).next.bind(r);
  if (Array.isArray(e) || (r = RO(e)) || t && e && typeof e.length == "number") {
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
function vO(e, t) {
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
function bO(e) {
  var t = vO(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
var Wt = /* @__PURE__ */ Symbol("mobx-stored-annotations");
function Kt(e) {
  function t(r, n) {
    mo(r, n, e);
  }
  return Object.assign(t, e);
}
function mo(e, t, r) {
  ur(e, Wt) || ho(e, Wt, jn({}, e[Wt])), UO(r) || (e[Wt][t] = r);
}
function gO(e) {
  return ur(e, Wt) || ho(e, Wt, jn({}, e[Wt])), e[Wt];
}
var $ = /* @__PURE__ */ Symbol("mobx administration"), Eo = /* @__PURE__ */ function() {
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
    return rp(this);
  }, t.reportChanged = function() {
    lt(), np(this), P.stateVersion = P.stateVersion < Number.MAX_SAFE_INTEGER ? P.stateVersion + 1 : Number.MIN_SAFE_INTEGER, _t();
  }, t.toString = function() {
    return this.name_;
  }, e;
}(), nl = /* @__PURE__ */ Wr("Atom", Eo);
function kh(e, t, r) {
  t === void 0 && (t = bn), r === void 0 && (r = bn);
  var n = new Eo(e);
  return t !== bn && CR(n, t), r !== bn && lp(n, r), n;
}
function IO(e, t) {
  return e === t;
}
function NO(e, t) {
  return ll(e, t);
}
function AO(e, t) {
  return ll(e, t, 1);
}
function yO(e, t) {
  return Object.is ? Object.is(e, t) : e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var Da = {
  identity: IO,
  structural: NO,
  default: yO,
  shallow: AO
};
function Vn(e, t, r) {
  return sl(e) ? e : Array.isArray(e) ? Je.array(e, {
    name: r
  }) : fr(e) ? Je.object(e, void 0, {
    name: r
  }) : ti(e) ? Je.map(e, {
    name: r
  }) : po(e) ? Je.set(e, {
    name: r
  }) : typeof e == "function" && !al(e) && !Pa(e) ? Ch(e) ? Yi(e) : Xi(r, e) : e;
}
function SO(e, t, r) {
  if (e == null || Xn(e) || Io(e) || Kr(e) || un(e))
    return e;
  if (Array.isArray(e))
    return Je.array(e, {
      name: r,
      deep: !1
    });
  if (fr(e))
    return Je.object(e, void 0, {
      name: r,
      deep: !1
    });
  if (ti(e))
    return Je.map(e, {
      name: r,
      deep: !1
    });
  if (po(e))
    return Je.set(e, {
      name: r,
      deep: !1
    });
}
function cs(e) {
  return e;
}
function DO(e, t) {
  return ll(e, t) ? t : e;
}
var GO = "override";
function UO(e) {
  return e.annotationType_ === GO;
}
function To(e, t) {
  return {
    annotationType_: e,
    options_: t,
    make_: CO,
    extend_: wO
  };
}
function CO(e, t, r, n) {
  var i;
  if ((i = this.options_) != null && i.bound)
    return this.extend_(e, t, r, !1) === null ? 0 : 1;
  if (n === e.target_)
    return this.extend_(e, t, r, !1) === null ? 0 : 2;
  if (al(r.value))
    return 1;
  var o = Lh(e, this, t, r, !1);
  return Yt(n, t, o), 2;
}
function wO(e, t, r, n) {
  var i = Lh(e, this, t, r);
  return e.defineProperty_(t, i, n);
}
function PO(e, t, r, n) {
  t.annotationType_, n.value;
}
function Lh(e, t, r, n, i) {
  var o, a, s, u, c, _, l;
  i === void 0 && (i = P.safeDescriptors), PO(e, t, r, n);
  var f = n.value;
  if ((o = t.options_) != null && o.bound) {
    var h;
    f = f.bind((h = e.proxy_) != null ? h : e.target_);
  }
  return {
    value: Wn(
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
function Bh(e, t) {
  return {
    annotationType_: e,
    options_: t,
    make_: HO,
    extend_: MO
  };
}
function HO(e, t, r, n) {
  var i;
  if (n === e.target_)
    return this.extend_(e, t, r, !1) === null ? 0 : 2;
  if ((i = this.options_) != null && i.bound && (!ur(e.target_, t) || !Pa(e.target_[t])) && this.extend_(e, t, r, !1) === null)
    return 0;
  if (Pa(r.value))
    return 1;
  var o = xh(e, this, t, r, !1, !1);
  return Yt(n, t, o), 2;
}
function MO(e, t, r, n) {
  var i, o = xh(e, this, t, r, (i = this.options_) == null ? void 0 : i.bound);
  return e.defineProperty_(t, o, n);
}
function kO(e, t, r, n) {
  t.annotationType_, n.value;
}
function xh(e, t, r, n, i, o) {
  o === void 0 && (o = P.safeDescriptors), kO(e, t, r, n);
  var a = n.value;
  if (Pa(a) || (a = Yi(a)), i) {
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
function il(e, t) {
  return {
    annotationType_: e,
    options_: t,
    make_: LO,
    extend_: BO
  };
}
function LO(e, t, r) {
  return this.extend_(e, t, r, !1) === null ? 0 : 1;
}
function BO(e, t, r, n) {
  return xO(e, this, t, r), e.defineComputedProperty_(t, jn({}, this.options_, {
    get: r.get,
    set: r.set
  }), n);
}
function xO(e, t, r, n) {
  t.annotationType_, n.get;
}
function ls(e, t) {
  return {
    annotationType_: e,
    options_: t,
    make_: FO,
    extend_: jO
  };
}
function FO(e, t, r) {
  return this.extend_(e, t, r, !1) === null ? 0 : 1;
}
function jO(e, t, r, n) {
  var i, o;
  return VO(e, this), e.defineObservableProperty_(t, r.value, (i = (o = this.options_) == null ? void 0 : o.enhancer) != null ? i : Vn, n);
}
function VO(e, t, r, n) {
  t.annotationType_;
}
var WO = "true", XO = /* @__PURE__ */ Fh();
function Fh(e) {
  return {
    annotationType_: WO,
    options_: e,
    make_: YO,
    extend_: KO
  };
}
function YO(e, t, r, n) {
  var i, o;
  if (r.get)
    return _s.make_(e, t, r, n);
  if (r.set) {
    var a = Wn(t.toString(), r.set);
    return n === e.target_ ? e.defineProperty_(t, {
      configurable: P.safeDescriptors ? e.isPlainObject_ : !0,
      set: a
    }) === null ? 0 : 2 : (Yt(n, t, {
      configurable: !0,
      set: a
    }), 2);
  }
  if (n !== e.target_ && typeof r.value == "function") {
    var s;
    if (Ch(r.value)) {
      var u, c = (u = this.options_) != null && u.autoBind ? Yi.bound : Yi;
      return c.make_(e, t, r, n);
    }
    var _ = (s = this.options_) != null && s.autoBind ? Xi.bound : Xi;
    return _.make_(e, t, r, n);
  }
  var l = ((i = this.options_) == null ? void 0 : i.deep) === !1 ? Je.ref : Je;
  if (typeof r.value == "function" && (o = this.options_) != null && o.autoBind) {
    var f;
    r.value = r.value.bind((f = e.proxy_) != null ? f : e.target_);
  }
  return l.make_(e, t, r, n);
}
function KO(e, t, r, n) {
  var i, o;
  if (r.get)
    return _s.extend_(e, t, r, n);
  if (r.set)
    return e.defineProperty_(t, {
      configurable: P.safeDescriptors ? e.isPlainObject_ : !0,
      set: Wn(t.toString(), r.set)
    }, n);
  if (typeof r.value == "function" && (i = this.options_) != null && i.autoBind) {
    var a;
    r.value = r.value.bind((a = e.proxy_) != null ? a : e.target_);
  }
  var s = ((o = this.options_) == null ? void 0 : o.deep) === !1 ? Je.ref : Je;
  return s.extend_(e, t, r, n);
}
var $O = "observable", zO = "observable.ref", qO = "observable.shallow", JO = "observable.struct", jh = {
  deep: !0,
  name: void 0,
  defaultDecorator: void 0,
  proxy: !0
};
Object.freeze(jh);
function xo(e) {
  return e || jh;
}
var Vh = /* @__PURE__ */ ls($O), QO = /* @__PURE__ */ ls(zO, {
  enhancer: cs
}), ZO = /* @__PURE__ */ ls(qO, {
  enhancer: SO
}), eR = /* @__PURE__ */ ls(JO, {
  enhancer: DO
}), Wh = /* @__PURE__ */ Kt(Vh);
function Fo(e) {
  return e.deep === !0 ? Vn : e.deep === !1 ? cs : rR(e.defaultDecorator);
}
function tR(e) {
  var t;
  return e ? (t = e.defaultDecorator) != null ? t : Fh(e) : void 0;
}
function rR(e) {
  var t, r;
  return e && (t = (r = e.options_) == null ? void 0 : r.enhancer) != null ? t : Vn;
}
function Xh(e, t, r) {
  if (rn(t)) {
    mo(e, t, Vh);
    return;
  }
  return sl(e) ? e : fr(e) ? Je.object(e, t, r) : Array.isArray(e) ? Je.array(e, t) : ti(e) ? Je.map(e, t) : po(e) ? Je.set(e, t) : typeof e == "object" && e !== null ? e : Je.box(e, t);
}
Sh(Xh, Wh);
var nR = {
  box: function(t, r) {
    var n = xo(r);
    return new Qr(t, Fo(n), n.name, !0, n.equals);
  },
  array: function(t, r) {
    var n = xo(r);
    return (P.useProxies === !1 || n.proxy === !1 ? rv : KR)(t, Fo(n), n.name);
  },
  map: function(t, r) {
    var n = xo(r);
    return new Op(t, Fo(n), n.name);
  },
  set: function(t, r) {
    var n = xo(r);
    return new bp(t, Fo(n), n.name);
  },
  object: function(t, r, n) {
    return fp(P.useProxies === !1 || n?.proxy === !1 ? No({}, n) : VR({}, n), t, r);
  },
  ref: /* @__PURE__ */ Kt(QO),
  shallow: /* @__PURE__ */ Kt(ZO),
  deep: Wh,
  struct: /* @__PURE__ */ Kt(eR)
}, Je = /* @__PURE__ */ Sh(Xh, nR), Yh = "computed", iR = "computed.struct", Kh = /* @__PURE__ */ il(Yh), oR = /* @__PURE__ */ il(iR, {
  equals: Da.structural
}), _s = function(t, r) {
  if (rn(r))
    return mo(t, r, Kh);
  if (fr(t))
    return Kt(il(Yh, t));
  var n = fr(r) ? r : {};
  return n.get = t, n.name || (n.name = t.name || ""), new Vi(n);
};
Object.assign(_s, Kh);
_s.struct = /* @__PURE__ */ Kt(oR);
var P_, H_, Ga = 0, aR = 1, sR = (P_ = (H_ = /* @__PURE__ */ Sa(function() {
}, "name")) == null ? void 0 : H_.configurable) != null ? P_ : !1, M_ = {
  value: "action",
  configurable: !0,
  writable: !1,
  enumerable: !1
};
function Wn(e, t, r, n) {
  r === void 0 && (r = !1);
  function i() {
    return uR(e, r, t, n || this, arguments);
  }
  return i.isMobxAction = !0, sR && (M_.value = e, Yt(i, "name", M_)), i;
}
function uR(e, t, r, n, i) {
  var o = cR(e, t);
  try {
    return r.apply(n, i);
  } catch (a) {
    throw o.error_ = a, a;
  } finally {
    lR(o);
  }
}
function cR(e, t, r, n) {
  var i = !1, o = 0, a = P.trackingDerivation, s = !t || !a;
  lt();
  var u = P.allowStateChanges;
  s && (ri(), u = Oo(!0));
  var c = ol(!0), _ = {
    runAsAction_: s,
    prevDerivation_: a,
    prevAllowStateChanges_: u,
    prevAllowStateReads_: c,
    notifySpy_: i,
    startTime_: o,
    actionId_: aR++,
    parentActionId_: Ga
  };
  return Ga = _.actionId_, _;
}
function lR(e) {
  Ga !== e.actionId_ && he(30), Ga = e.parentActionId_, e.error_ !== void 0 && (P.suppressReactionErrors = !0), Ro(e.prevAllowStateChanges_), Gi(e.prevAllowStateReads_), _t(), e.runAsAction_ && Pr(e.prevDerivation_), P.suppressReactionErrors = !1;
}
function _R(e, t) {
  var r = Oo(e);
  try {
    return t();
  } finally {
    Ro(r);
  }
}
function Oo(e) {
  var t = P.allowStateChanges;
  return P.allowStateChanges = e, t;
}
function Ro(e) {
  P.allowStateChanges = e;
}
var $h;
$h = Symbol.toPrimitive;
var Qr = /* @__PURE__ */ function(e) {
  Mh(t, e);
  function t(n, i, o, a, s) {
    var u;
    return o === void 0 && (o = "ObservableValue"), s === void 0 && (s = Da.default), u = e.call(this, o) || this, u.enhancer = void 0, u.name_ = void 0, u.equals = void 0, u.hasUnreportedChange_ = !1, u.interceptors_ = void 0, u.changeListeners_ = void 0, u.value_ = void 0, u.dehancer = void 0, u.enhancer = i, u.name_ = o, u.equals = s, u.value_ = i(n, void 0, o), u;
  }
  var r = t.prototype;
  return r.dehanceValue = function(i) {
    return this.dehancer !== void 0 ? this.dehancer(i) : i;
  }, r.set = function(i) {
    this.value_, i = this.prepareNewValue_(i), i !== P.UNCHANGED && this.setNewValue_(i);
  }, r.prepareNewValue_ = function(i) {
    if (vt(this)) {
      var o = bt(this, {
        object: this,
        type: $t,
        newValue: i
      });
      if (!o)
        return P.UNCHANGED;
      i = o.newValue;
    }
    return i = this.enhancer(i, this.value_, this.name_), this.equals(this.value_, i) ? P.UNCHANGED : i;
  }, r.setNewValue_ = function(i) {
    var o = this.value_;
    this.value_ = i, this.reportChanged(), Pt(this) && Ht(this, {
      type: $t,
      object: this,
      newValue: i,
      oldValue: o
    });
  }, r.get = function() {
    return this.reportObserved(), this.dehanceValue(this.value_);
  }, r.intercept_ = function(i) {
    return bo(this, i);
  }, r.observe_ = function(i, o) {
    return o && i({
      observableKind: "value",
      debugObjectName: this.name_,
      object: this,
      type: $t,
      newValue: this.value_,
      oldValue: void 0
    }), go(this, i);
  }, r.raw = function() {
    return this.value_;
  }, r.toJSON = function() {
    return this.get();
  }, r.toString = function() {
    return this.name_ + "[" + this.value_ + "]";
  }, r.valueOf = function() {
    return Hh(this.get());
  }, r[$h] = function() {
    return this.valueOf();
  }, t;
}(Eo), fR = /* @__PURE__ */ Wr("ObservableValue", Qr), zh;
zh = Symbol.toPrimitive;
var Vi = /* @__PURE__ */ function() {
  function e(r) {
    this.dependenciesState_ = de.NOT_TRACKING_, this.observing_ = [], this.newObserving_ = null, this.isBeingObserved_ = !1, this.isPendingUnobservation_ = !1, this.observers_ = /* @__PURE__ */ new Set(), this.diffValue_ = 0, this.runId_ = 0, this.lastAccessedBy_ = 0, this.lowestObserverState_ = de.UP_TO_DATE_, this.unboundDepsCount_ = 0, this.value_ = new Ca(null), this.name_ = void 0, this.triggeredBy_ = void 0, this.isComputing_ = !1, this.isRunningSetter_ = !1, this.derivation = void 0, this.setter_ = void 0, this.isTracing_ = Ua.NONE, this.scope_ = void 0, this.equals_ = void 0, this.requiresReaction_ = void 0, this.keepAlive_ = void 0, this.onBOL = void 0, this.onBUOL = void 0, r.get || he(31), this.derivation = r.get, this.name_ = r.name || "ComputedValue", r.set && (this.setter_ = Wn("ComputedValue-setter", r.set)), this.equals_ = r.equals || (r.compareStructural || r.struct ? Da.structural : Da.default), this.scope_ = r.context, this.requiresReaction_ = r.requiresReaction, this.keepAlive_ = !!r.keepAlive;
  }
  var t = e.prototype;
  return t.onBecomeStale_ = function() {
    ER(this);
  }, t.onBO = function() {
    this.onBOL && this.onBOL.forEach(function(n) {
      return n();
    });
  }, t.onBUO = function() {
    this.onBUOL && this.onBUOL.forEach(function(n) {
      return n();
    });
  }, t.get = function() {
    if (this.isComputing_ && he(32, this.name_, this.derivation), P.inBatch === 0 && // !globalState.trackingDerivatpion &&
    this.observers_.size === 0 && !this.keepAlive_)
      Wu(this) && (this.warnAboutUntrackedRead_(), lt(), this.value_ = this.computeValue_(!1), _t());
    else if (rp(this), Wu(this)) {
      var n = P.trackingContext;
      this.keepAlive_ && !n && (P.trackingContext = this), this.trackAndCompute() && mR(this), P.trackingContext = n;
    }
    var i = this.value_;
    if (na(i))
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
    ), o = this.computeValue_(!0), a = i || na(n) || na(o) || !this.equals_(n, o);
    return a && (this.value_ = o), a;
  }, t.computeValue_ = function(n) {
    this.isComputing_ = !0;
    var i = Oo(!1), o;
    if (n)
      o = qh(this, this.derivation, this.scope_);
    else if (P.disableErrorBoundaries === !0)
      o = this.derivation.call(this.scope_);
    else
      try {
        o = this.derivation.call(this.scope_);
      } catch (a) {
        o = new Ca(a);
      }
    return Ro(i), this.isComputing_ = !1, o;
  }, t.suspend_ = function() {
    this.keepAlive_ || (Xu(this), this.value_ = void 0);
  }, t.observe_ = function(n, i) {
    var o = this, a = !0, s = void 0;
    return yR(function() {
      var u = o.get();
      if (!a || i) {
        var c = ri();
        n({
          observableKind: "computed",
          debugObjectName: o.name_,
          type: $t,
          object: o,
          newValue: u,
          oldValue: s
        }), Pr(c);
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
}(), vo = /* @__PURE__ */ Wr("ComputedValue", Vi), de;
(function(e) {
  e[e.NOT_TRACKING_ = -1] = "NOT_TRACKING_", e[e.UP_TO_DATE_ = 0] = "UP_TO_DATE_", e[e.POSSIBLY_STALE_ = 1] = "POSSIBLY_STALE_", e[e.STALE_ = 2] = "STALE_";
})(de || (de = {}));
var Ua;
(function(e) {
  e[e.NONE = 0] = "NONE", e[e.LOG = 1] = "LOG", e[e.BREAK = 2] = "BREAK";
})(Ua || (Ua = {}));
var Ca = function(t) {
  this.cause = void 0, this.cause = t;
};
function na(e) {
  return e instanceof Ca;
}
function Wu(e) {
  switch (e.dependenciesState_) {
    case de.UP_TO_DATE_:
      return !1;
    case de.NOT_TRACKING_:
    case de.STALE_:
      return !0;
    case de.POSSIBLY_STALE_: {
      for (var t = ol(!0), r = ri(), n = e.observing_, i = n.length, o = 0; o < i; o++) {
        var a = n[o];
        if (vo(a)) {
          if (P.disableErrorBoundaries)
            a.get();
          else
            try {
              a.get();
            } catch {
              return Pr(r), Gi(t), !0;
            }
          if (e.dependenciesState_ === de.STALE_)
            return Pr(r), Gi(t), !0;
        }
      }
      return Qh(e), Pr(r), Gi(t), !1;
    }
  }
}
function qh(e, t, r) {
  var n = ol(!0);
  Qh(e), e.newObserving_ = new Array(e.observing_.length + 100), e.unboundDepsCount_ = 0, e.runId_ = ++P.runId;
  var i = P.trackingDerivation;
  P.trackingDerivation = e, P.inBatch++;
  var o;
  if (P.disableErrorBoundaries === !0)
    o = t.call(r);
  else
    try {
      o = t.call(r);
    } catch (a) {
      o = new Ca(a);
    }
  return P.inBatch--, P.trackingDerivation = i, dR(e), Gi(n), o;
}
function dR(e) {
  for (var t = e.observing_, r = e.observing_ = e.newObserving_, n = de.UP_TO_DATE_, i = 0, o = e.unboundDepsCount_, a = 0; a < o; a++) {
    var s = r[a];
    s.diffValue_ === 0 && (s.diffValue_ = 1, i !== a && (r[i] = s), i++), s.dependenciesState_ > n && (n = s.dependenciesState_);
  }
  for (r.length = i, e.newObserving_ = null, o = t.length; o--; ) {
    var u = t[o];
    u.diffValue_ === 0 && ep(u, e), u.diffValue_ = 0;
  }
  for (; i--; ) {
    var c = r[i];
    c.diffValue_ === 1 && (c.diffValue_ = 0, pR(c, e));
  }
  n !== de.UP_TO_DATE_ && (e.dependenciesState_ = n, e.onBecomeStale_());
}
function Xu(e) {
  var t = e.observing_;
  e.observing_ = [];
  for (var r = t.length; r--; )
    ep(t[r], e);
  e.dependenciesState_ = de.NOT_TRACKING_;
}
function Jh(e) {
  var t = ri();
  try {
    return e();
  } finally {
    Pr(t);
  }
}
function ri() {
  var e = P.trackingDerivation;
  return P.trackingDerivation = null, e;
}
function Pr(e) {
  P.trackingDerivation = e;
}
function ol(e) {
  var t = P.allowStateReads;
  return P.allowStateReads = e, t;
}
function Gi(e) {
  P.allowStateReads = e;
}
function Qh(e) {
  if (e.dependenciesState_ !== de.UP_TO_DATE_) {
    e.dependenciesState_ = de.UP_TO_DATE_;
    for (var t = e.observing_, r = t.length; r--; )
      t[r].lowestObserverState_ = de.UP_TO_DATE_;
  }
}
var ia = function() {
  this.version = 6, this.UNCHANGED = {}, this.trackingDerivation = null, this.trackingContext = null, this.runId = 0, this.mobxGuid = 0, this.inBatch = 0, this.pendingUnobservations = [], this.pendingReactions = [], this.isRunningReactions = !1, this.allowStateChanges = !1, this.allowStateReads = !0, this.enforceActions = !0, this.spyListeners = [], this.globalReactionErrorHandlers = [], this.computedRequiresReaction = !1, this.reactionRequiresObservable = !1, this.observableRequiresReaction = !1, this.disableErrorBoundaries = !1, this.suppressReactionErrors = !1, this.useProxies = !0, this.verifyProxies = !1, this.safeDescriptors = !0, this.stateVersion = Number.MIN_SAFE_INTEGER;
}, oa = !0, Zh = !1, P = /* @__PURE__ */ function() {
  var e = /* @__PURE__ */ tl();
  return e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (oa = !1), e.__mobxGlobals && e.__mobxGlobals.version !== new ia().version && (oa = !1), oa ? e.__mobxGlobals ? (e.__mobxInstanceCount += 1, e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}), e.__mobxGlobals) : (e.__mobxInstanceCount = 1, e.__mobxGlobals = /* @__PURE__ */ new ia()) : (setTimeout(function() {
    Zh || he(35);
  }, 1), new ia());
}();
function hR() {
  if ((P.pendingReactions.length || P.inBatch || P.isRunningReactions) && he(36), Zh = !0, oa) {
    var e = tl();
    --e.__mobxInstanceCount === 0 && (e.__mobxGlobals = void 0), P = new ia();
  }
}
function pR(e, t) {
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
    ip();
    for (var e = P.pendingUnobservations, t = 0; t < e.length; t++) {
      var r = e[t];
      r.isPendingUnobservation_ = !1, r.observers_.size === 0 && (r.isBeingObserved_ && (r.isBeingObserved_ = !1, r.onBUO()), r instanceof Vi && r.suspend_());
    }
    P.pendingUnobservations = [];
  }
}
function rp(e) {
  var t = P.trackingDerivation;
  return t !== null ? (t.runId_ !== e.lastAccessedBy_ && (e.lastAccessedBy_ = t.runId_, t.newObserving_[t.unboundDepsCount_++] = e, !e.isBeingObserved_ && P.trackingContext && (e.isBeingObserved_ = !0, e.onBO())), e.isBeingObserved_) : (e.observers_.size === 0 && P.inBatch > 0 && tp(e), !1);
}
function np(e) {
  e.lowestObserverState_ !== de.STALE_ && (e.lowestObserverState_ = de.STALE_, e.observers_.forEach(function(t) {
    t.dependenciesState_ === de.UP_TO_DATE_ && t.onBecomeStale_(), t.dependenciesState_ = de.STALE_;
  }));
}
function mR(e) {
  e.lowestObserverState_ !== de.STALE_ && (e.lowestObserverState_ = de.STALE_, e.observers_.forEach(function(t) {
    t.dependenciesState_ === de.POSSIBLY_STALE_ ? t.dependenciesState_ = de.STALE_ : t.dependenciesState_ === de.UP_TO_DATE_ && (e.lowestObserverState_ = de.UP_TO_DATE_);
  }));
}
function ER(e) {
  e.lowestObserverState_ === de.UP_TO_DATE_ && (e.lowestObserverState_ = de.POSSIBLY_STALE_, e.observers_.forEach(function(t) {
    t.dependenciesState_ === de.UP_TO_DATE_ && (t.dependenciesState_ = de.POSSIBLY_STALE_, t.onBecomeStale_());
  }));
}
var Wi = /* @__PURE__ */ function() {
  function e(r, n, i, o) {
    r === void 0 && (r = "Reaction"), this.name_ = void 0, this.onInvalidate_ = void 0, this.errorHandler_ = void 0, this.requiresObservable_ = void 0, this.observing_ = [], this.newObserving_ = [], this.dependenciesState_ = de.NOT_TRACKING_, this.diffValue_ = 0, this.runId_ = 0, this.unboundDepsCount_ = 0, this.isDisposed_ = !1, this.isScheduled_ = !1, this.isTrackPending_ = !1, this.isRunning_ = !1, this.isTracing_ = Ua.NONE, this.name_ = r, this.onInvalidate_ = n, this.errorHandler_ = i, this.requiresObservable_ = o;
  }
  var t = e.prototype;
  return t.onBecomeStale_ = function() {
    this.schedule_();
  }, t.schedule_ = function() {
    this.isScheduled_ || (this.isScheduled_ = !0, P.pendingReactions.push(this), ip());
  }, t.isScheduled = function() {
    return this.isScheduled_;
  }, t.runReaction_ = function() {
    if (!this.isDisposed_) {
      lt(), this.isScheduled_ = !1;
      var n = P.trackingContext;
      if (P.trackingContext = this, Wu(this)) {
        this.isTrackPending_ = !0;
        try {
          this.onInvalidate_();
        } catch (i) {
          this.reportExceptionInDerivation_(i);
        }
      }
      P.trackingContext = n, _t();
    }
  }, t.track = function(n) {
    if (!this.isDisposed_) {
      lt(), this.isRunning_ = !0;
      var i = P.trackingContext;
      P.trackingContext = this;
      var o = qh(this, n, void 0);
      P.trackingContext = i, this.isRunning_ = !1, this.isTrackPending_ = !1, this.isDisposed_ && Xu(this), na(o) && this.reportExceptionInDerivation_(o.cause), _t();
    }
  }, t.reportExceptionInDerivation_ = function(n) {
    var i = this;
    if (this.errorHandler_) {
      this.errorHandler_(n, this);
      return;
    }
    if (P.disableErrorBoundaries)
      throw n;
    var o = "[mobx] uncaught error in '" + this + "'";
    P.suppressReactionErrors || console.error(o, n), P.globalReactionErrorHandlers.forEach(function(a) {
      return a(n, i);
    });
  }, t.dispose = function() {
    this.isDisposed_ || (this.isDisposed_ = !0, this.isRunning_ || (lt(), Xu(this), _t()));
  }, t.getDisposer_ = function(n) {
    var i = this, o = function a() {
      i.dispose(), n == null || n.removeEventListener == null || n.removeEventListener("abort", a);
    };
    return n == null || n.addEventListener == null || n.addEventListener("abort", o), o[$] = this, o;
  }, t.toString = function() {
    return "Reaction[" + this.name_ + "]";
  }, t.trace = function(n) {
  }, e;
}(), TR = 100, Yu = function(t) {
  return t();
};
function ip() {
  P.inBatch > 0 || P.isRunningReactions || Yu(OR);
}
function OR() {
  P.isRunningReactions = !0;
  for (var e = P.pendingReactions, t = 0; e.length > 0; ) {
    ++t === TR && (console.error("[mobx] cycle in reaction: " + e[0]), e.splice(0));
    for (var r = e.splice(0), n = 0, i = r.length; n < i; n++)
      r[n].runReaction_();
  }
  P.isRunningReactions = !1;
}
var wa = /* @__PURE__ */ Wr("Reaction", Wi);
function RR(e) {
  var t = Yu;
  Yu = function(n) {
    return e(function() {
      return t(n);
    });
  };
}
function Ui() {
  return !1;
}
function vR(e) {
  return console.warn("[mobx.spy] Is a no-op in production builds"), function() {
  };
}
var op = "action", bR = "action.bound", ap = "autoAction", gR = "autoAction.bound", IR = "<unnamed action>", sp = /* @__PURE__ */ To(op), NR = /* @__PURE__ */ To(bR, {
  bound: !0
}), up = /* @__PURE__ */ To(ap, {
  autoAction: !0
}), AR = /* @__PURE__ */ To(gR, {
  autoAction: !0,
  bound: !0
});
function cp(e) {
  var t = function(n, i) {
    if (Mt(n))
      return Wn(n.name || IR, n, e);
    if (Mt(i))
      return Wn(n, i, e);
    if (rn(i))
      return mo(n, i, e ? up : sp);
    if (rn(n))
      return Kt(To(e ? ap : op, {
        name: n,
        autoAction: e
      }));
  };
  return t;
}
var In = /* @__PURE__ */ cp(!1);
Object.assign(In, sp);
var Xi = /* @__PURE__ */ cp(!0);
Object.assign(Xi, up);
In.bound = /* @__PURE__ */ Kt(NR);
Xi.bound = /* @__PURE__ */ Kt(AR);
function al(e) {
  return Mt(e) && e.isMobxAction === !0;
}
function yR(e, t) {
  var r, n, i, o, a;
  t === void 0 && (t = Dh);
  var s = (r = (n = t) == null ? void 0 : n.name) != null ? r : "Autorun", u = !t.scheduler && !t.delay, c;
  if (u)
    c = new Wi(s, function() {
      this.track(f);
    }, t.onError, t.requiresObservable);
  else {
    var _ = DR(t), l = !1;
    c = new Wi(s, function() {
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
var SR = function(t) {
  return t();
};
function DR(e) {
  return e.scheduler ? e.scheduler : e.delay ? function(t) {
    return setTimeout(t, e.delay);
  } : SR;
}
var GR = "onBO", UR = "onBUO";
function CR(e, t, r) {
  return _p(GR, e, t, r);
}
function lp(e, t, r) {
  return _p(UR, e, t, r);
}
function _p(e, t, r, n) {
  var i = typeof n == "function" ? Yn(t, r) : Yn(t), o = Mt(n) ? n : r, a = e + "L";
  return i[a] ? i[a].add(o) : i[a] = /* @__PURE__ */ new Set([o]), function() {
    var s = i[a];
    s && (s.delete(o), s.size === 0 && delete i[a]);
  };
}
var wR = "never", jo = "always", PR = "observed";
function HR(e) {
  e.isolateGlobalState === !0 && hR();
  var t = e.useProxies, r = e.enforceActions;
  if (t !== void 0 && (P.useProxies = t === jo ? !0 : t === wR ? !1 : typeof Proxy < "u"), t === "ifavailable" && (P.verifyProxies = !0), r !== void 0) {
    var n = r === jo ? jo : r === PR;
    P.enforceActions = n, P.allowStateChanges = !(n === !0 || n === jo);
  }
  ["computedRequiresReaction", "reactionRequiresObservable", "observableRequiresReaction", "disableErrorBoundaries", "safeDescriptors"].forEach(function(i) {
    i in e && (P[i] = !!e[i]);
  }), P.allowStateReads = !P.observableRequiresReaction, e.reactionScheduler && RR(e.reactionScheduler);
}
function fp(e, t, r, n) {
  var i = OO(t), o = No(e, n)[$];
  lt();
  try {
    Fn(i).forEach(function(a) {
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
function MR(e, t) {
  return dp(Yn(e, t));
}
function dp(e) {
  var t = {
    name: e.name_
  };
  return e.observing_ && e.observing_.length > 0 && (t.dependencies = kR(e.observing_).map(dp)), t;
}
function kR(e) {
  return Array.from(new Set(e));
}
var LR = 0;
function hp() {
  this.message = "FLOW_CANCELLED";
}
hp.prototype = /* @__PURE__ */ Object.create(Error.prototype);
var k_ = /* @__PURE__ */ Bh("flow"), BR = /* @__PURE__ */ Bh("flow.bound", {
  bound: !0
}), Yi = /* @__PURE__ */ Object.assign(function(t, r) {
  if (rn(r))
    return mo(t, r, k_);
  var n = t, i = n.name || "<unnamed flow>", o = function() {
    var s = this, u = arguments, c = ++LR, _ = In(i + " - runid: " + c + " - init", n).apply(s, u), l, f = void 0, h = new Promise(function(d, p) {
      var m = 0;
      l = p;
      function O(v) {
        f = void 0;
        var R;
        try {
          R = In(i + " - runid: " + c + " - yield " + m++, _.next).call(_, v);
        } catch (N) {
          return p(N);
        }
        T(R);
      }
      function E(v) {
        f = void 0;
        var R;
        try {
          R = In(i + " - runid: " + c + " - yield " + m++, _.throw).call(_, v);
        } catch (N) {
          return p(N);
        }
        T(R);
      }
      function T(v) {
        if (Mt(v?.then)) {
          v.then(T, p);
          return;
        }
        return v.done ? d(v.value) : (f = Promise.resolve(v.value), f.then(O, E));
      }
      O(void 0);
    });
    return h.cancel = In(i + " - runid: " + c + " - cancel", function() {
      try {
        f && L_(f);
        var d = _.return(void 0), p = Promise.resolve(d.value);
        p.then(bn, bn), L_(p), l(new hp());
      } catch (m) {
        l(m);
      }
    }), h;
  };
  return o.isMobXFlow = !0, o;
}, k_);
Yi.bound = /* @__PURE__ */ Kt(BR);
function L_(e) {
  Mt(e.cancel) && e.cancel();
}
function Pa(e) {
  return e?.isMobXFlow === !0;
}
function xR(e, t) {
  return e ? t !== void 0 ? Xn(e) ? e[$].values_.has(t) : !1 : Xn(e) || !!e[$] || nl(e) || wa(e) || vo(e) : !1;
}
function sl(e) {
  return xR(e);
}
function FR(e) {
  if (Xn(e))
    return e[$].ownKeys_();
  he(38);
}
function Vo(e, t, r) {
  return e.set(t, r), r;
}
function Tn(e, t) {
  if (e == null || typeof e != "object" || e instanceof Date || !sl(e))
    return e;
  if (fR(e) || vo(e))
    return Tn(e.get(), t);
  if (t.has(e))
    return t.get(e);
  if (Io(e)) {
    var r = Vo(t, e, new Array(e.length));
    return e.forEach(function(a, s) {
      r[s] = Tn(a, t);
    }), r;
  }
  if (un(e)) {
    var n = Vo(t, e, /* @__PURE__ */ new Set());
    return e.forEach(function(a) {
      n.add(Tn(a, t));
    }), n;
  }
  if (Kr(e)) {
    var i = Vo(t, e, /* @__PURE__ */ new Map());
    return e.forEach(function(a, s) {
      i.set(s, Tn(a, t));
    }), i;
  } else {
    var o = Vo(t, e, {});
    return FR(e).forEach(function(a) {
      fo.propertyIsEnumerable.call(e, a) && (o[a] = Tn(e[a], t));
    }), o;
  }
}
function pp(e, t) {
  return Tn(e, /* @__PURE__ */ new Map());
}
function ir(e, t) {
  t === void 0 && (t = void 0), lt();
  try {
    return e.apply(t);
  } finally {
    _t();
  }
}
function dn(e) {
  return e[$];
}
var jR = {
  has: function(t, r) {
    return dn(t).has_(r);
  },
  get: function(t, r) {
    return dn(t).get_(r);
  },
  set: function(t, r, n) {
    var i;
    return rn(r) ? (i = dn(t).set_(r, n, !0)) != null ? i : !0 : !1;
  },
  deleteProperty: function(t, r) {
    var n;
    return rn(r) ? (n = dn(t).delete_(r, !0)) != null ? n : !0 : !1;
  },
  defineProperty: function(t, r, n) {
    var i;
    return (i = dn(t).defineProperty_(r, n)) != null ? i : !0;
  },
  ownKeys: function(t) {
    return dn(t).ownKeys_();
  },
  preventExtensions: function(t) {
    he(13);
  }
};
function VR(e, t) {
  var r, n;
  return Gh(), e = No(e, t), (n = (r = e[$]).proxy_) != null ? n : r.proxy_ = new Proxy(e, jR);
}
function vt(e) {
  return e.interceptors_ !== void 0 && e.interceptors_.length > 0;
}
function bo(e, t) {
  var r = e.interceptors_ || (e.interceptors_ = []);
  return r.push(t), Uh(function() {
    var n = r.indexOf(t);
    n !== -1 && r.splice(n, 1);
  });
}
function bt(e, t) {
  var r = ri();
  try {
    for (var n = [].concat(e.interceptors_ || []), i = 0, o = n.length; i < o && (t = n[i](t), t && !t.type && he(14), !!t); i++)
      ;
    return t;
  } finally {
    Pr(r);
  }
}
function Pt(e) {
  return e.changeListeners_ !== void 0 && e.changeListeners_.length > 0;
}
function go(e, t) {
  var r = e.changeListeners_ || (e.changeListeners_ = []);
  return r.push(t), Uh(function() {
    var n = r.indexOf(t);
    n !== -1 && r.splice(n, 1);
  });
}
function Ht(e, t) {
  var r = ri(), n = e.changeListeners_;
  if (n) {
    n = n.slice();
    for (var i = 0, o = n.length; i < o; i++)
      n[i](t);
    Pr(r);
  }
}
function WR(e, t, r) {
  var n = No(e, r)[$];
  lt();
  try {
    var i;
    (i = t) != null || (t = gO(e)), Fn(t).forEach(function(o) {
      return n.make_(o, t[o]);
    });
  } finally {
    _t();
  }
  return e;
}
var nu = /* @__PURE__ */ Symbol("mobx-keys");
function Xr(e, t, r) {
  if (fr(e))
    return fp(e, e, t, r);
  var n = No(e, r)[$];
  if (!e[nu]) {
    var i = Object.getPrototypeOf(e), o = new Set([].concat(Fn(e), Fn(i)));
    o.delete("constructor"), o.delete($), ho(i, nu, o);
  }
  lt();
  try {
    e[nu].forEach(function(a) {
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
var B_ = "splice", $t = "update", XR = 1e4, YR = {
  get: function(t, r) {
    var n = t[$];
    return r === $ ? n : r === "length" ? n.getArrayLength_() : typeof r == "string" && !isNaN(r) ? n.get_(parseInt(r)) : ur(Ha, r) ? Ha[r] : t[r];
  },
  set: function(t, r, n) {
    var i = t[$];
    return r === "length" && i.setArrayLength_(n), typeof r == "symbol" || isNaN(r) ? t[r] = n : i.set_(parseInt(r), n), !0;
  },
  preventExtensions: function() {
    he(15);
  }
}, ul = /* @__PURE__ */ function() {
  function e(r, n, i, o) {
    r === void 0 && (r = "ObservableArray"), this.owned_ = void 0, this.legacyMode_ = void 0, this.atom_ = void 0, this.values_ = [], this.interceptors_ = void 0, this.changeListeners_ = void 0, this.enhancer_ = void 0, this.dehancer = void 0, this.proxy_ = void 0, this.lastKnownLength_ = 0, this.owned_ = i, this.legacyMode_ = o, this.atom_ = new Eo(r), this.enhancer_ = function(a, s) {
      return n(a, s, "ObservableArray[..]");
    };
  }
  var t = e.prototype;
  return t.dehanceValue_ = function(n) {
    return this.dehancer !== void 0 ? this.dehancer(n) : n;
  }, t.dehanceValues_ = function(n) {
    return this.dehancer !== void 0 && n.length > 0 ? n.map(this.dehancer) : n;
  }, t.intercept_ = function(n) {
    return bo(this, n);
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
    }), go(this, n);
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
    n !== this.lastKnownLength_ && he(16), this.lastKnownLength_ += i, this.legacyMode_ && i > 0 && Ap(n + i + 1);
  }, t.spliceWithArray_ = function(n, i, o) {
    var a = this;
    this.atom_;
    var s = this.values_.length;
    if (n === void 0 ? n = 0 : n > s ? n = s : n < 0 && (n = Math.max(0, s + n)), arguments.length === 1 ? i = s - n : i == null ? i = 0 : i = Math.max(0, Math.min(i, s - n)), o === void 0 && (o = ju), vt(this)) {
      var u = bt(this, {
        object: this.proxy_,
        type: B_,
        index: n,
        removedCount: i,
        added: o
      });
      if (!u)
        return ju;
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
    if (o.length < XR) {
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
    var a = !this.owned_ && Ui(), s = Pt(this), u = s || a ? {
      observableKind: "array",
      object: this.proxy_,
      type: $t,
      debugObjectName: this.atom_.name_,
      index: n,
      newValue: i,
      oldValue: o
    } : null;
    this.atom_.reportChanged(), s && Ht(this, u);
  }, t.notifyArraySplice_ = function(n, i, o) {
    var a = !this.owned_ && Ui(), s = Pt(this), u = s || a ? {
      observableKind: "array",
      object: this.proxy_,
      debugObjectName: this.atom_.name_,
      type: B_,
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
      if (vt(this)) {
        var s = bt(this, {
          type: $t,
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
function KR(e, t, r, n) {
  r === void 0 && (r = "ObservableArray"), n === void 0 && (n = !1), Gh();
  var i = new ul(r, t, n, !1);
  wh(i.values_, $, i);
  var o = new Proxy(i.values_, YR);
  if (i.proxy_ = o, e && e.length) {
    var a = Oo(!0);
    i.spliceWithArray_(0, 0, e), Ro(a);
  }
  return o;
}
var Ha = {
  clear: function() {
    return this.splice(0);
  },
  replace: function(t) {
    var r = this[$];
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
    var a = this[$];
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
    return this[$].spliceWithArray_(t, r, n);
  },
  push: function() {
    for (var t = this[$], r = arguments.length, n = new Array(r), i = 0; i < r; i++)
      n[i] = arguments[i];
    return t.spliceWithArray_(t.values_.length, 0, n), t.values_.length;
  },
  pop: function() {
    return this.splice(Math.max(this[$].values_.length - 1, 0), 1)[0];
  },
  shift: function() {
    return this.splice(0, 1)[0];
  },
  unshift: function() {
    for (var t = this[$], r = arguments.length, n = new Array(r), i = 0; i < r; i++)
      n[i] = arguments[i];
    return t.spliceWithArray_(0, 0, n), t.values_.length;
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
    var r = this[$], n = r.dehanceValues_(r.values_).indexOf(t);
    return n > -1 ? (this.splice(n, 1), !0) : !1;
  }
};
Ve("concat", pr);
Ve("flat", pr);
Ve("includes", pr);
Ve("indexOf", pr);
Ve("join", pr);
Ve("lastIndexOf", pr);
Ve("slice", pr);
Ve("toString", pr);
Ve("toLocaleString", pr);
Ve("every", Yr);
Ve("filter", Yr);
Ve("find", Yr);
Ve("findIndex", Yr);
Ve("flatMap", Yr);
Ve("forEach", Yr);
Ve("map", Yr);
Ve("some", Yr);
Ve("reduce", mp);
Ve("reduceRight", mp);
function Ve(e, t) {
  typeof Array.prototype[e] == "function" && (Ha[e] = t(e));
}
function pr(e) {
  return function() {
    var t = this[$];
    t.atom_.reportObserved();
    var r = t.dehanceValues_(t.values_);
    return r[e].apply(r, arguments);
  };
}
function Yr(e) {
  return function(t, r) {
    var n = this, i = this[$];
    i.atom_.reportObserved();
    var o = i.dehanceValues_(i.values_);
    return o[e](function(a, s) {
      return t.call(r, a, s, n);
    });
  };
}
function mp(e) {
  return function() {
    var t = this, r = this[$];
    r.atom_.reportObserved();
    var n = r.dehanceValues_(r.values_), i = arguments[0];
    return arguments[0] = function(o, a, s) {
      return i(o, a, s, t);
    }, n[e].apply(n, arguments);
  };
}
var $R = /* @__PURE__ */ Wr("ObservableArrayAdministration", ul);
function Io(e) {
  return us(e) && $R(e[$]);
}
var Ep, Tp, zR = {}, Sr = "add", Ma = "delete";
Ep = Symbol.iterator;
Tp = Symbol.toStringTag;
var Op = /* @__PURE__ */ function() {
  function e(r, n, i) {
    var o = this;
    n === void 0 && (n = Vn), i === void 0 && (i = "ObservableMap"), this.enhancer_ = void 0, this.name_ = void 0, this[$] = zR, this.data_ = void 0, this.hasMap_ = void 0, this.keysAtom_ = void 0, this.interceptors_ = void 0, this.changeListeners_ = void 0, this.dehancer = void 0, this.enhancer_ = n, this.name_ = i, Mt(Map) || he(18), this.keysAtom_ = kh("ObservableMap.keys()"), this.data_ = /* @__PURE__ */ new Map(), this.hasMap_ = /* @__PURE__ */ new Map(), _R(!0, function() {
      o.merge(r);
    });
  }
  var t = e.prototype;
  return t.has_ = function(n) {
    return this.data_.has(n);
  }, t.has = function(n) {
    var i = this;
    if (!P.trackingDerivation)
      return this.has_(n);
    var o = this.hasMap_.get(n);
    if (!o) {
      var a = o = new Qr(this.has_(n), cs, "ObservableMap.key?", !1);
      this.hasMap_.set(n, a), lp(a, function() {
        return i.hasMap_.delete(n);
      });
    }
    return o.get();
  }, t.set = function(n, i) {
    var o = this.has_(n);
    if (vt(this)) {
      var a = bt(this, {
        type: o ? $t : Sr,
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
    if (this.keysAtom_, vt(this)) {
      var o = bt(this, {
        type: Ma,
        object: this,
        name: n
      });
      if (!o)
        return !1;
    }
    if (this.has_(n)) {
      var a = Ui(), s = Pt(this), u = s || a ? {
        observableKind: "map",
        debugObjectName: this.name_,
        type: Ma,
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
    if (i = o.prepareNewValue_(i), i !== P.UNCHANGED) {
      var a = Ui(), s = Pt(this), u = s || a ? {
        observableKind: "map",
        debugObjectName: this.name_,
        type: $t,
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
      var c, _ = new Qr(i, o.enhancer_, "ObservableMap.key", !1);
      o.data_.set(n, _), i = _.value_, (c = o.hasMap_.get(n)) == null || c.setNewValue_(!0), o.keysAtom_.reportChanged();
    });
    var a = Ui(), s = Pt(this), u = s || a ? {
      observableKind: "map",
      debugObjectName: this.name_,
      type: Sr,
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
    return Ki({
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
    return Ki({
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
    for (var o = gn(this), a; !(a = o()).done; ) {
      var s = a.value, u = s[0], c = s[1];
      n.call(i, c, u, this);
    }
  }, t.merge = function(n) {
    var i = this;
    return Kr(n) && (n = new Map(n)), ir(function() {
      fr(n) ? TO(n).forEach(function(o) {
        return i.set(o, n[o]);
      }) : Array.isArray(n) ? n.forEach(function(o) {
        var a = o[0], s = o[1];
        return i.set(a, s);
      }) : ti(n) ? (n.constructor !== Map && he(19, n), n.forEach(function(o, a) {
        return i.set(a, o);
      })) : n != null && he(20, n);
    }), this;
  }, t.clear = function() {
    var n = this;
    ir(function() {
      Jh(function() {
        for (var i = gn(n.keys()), o; !(o = i()).done; ) {
          var a = o.value;
          n.delete(a);
        }
      });
    });
  }, t.replace = function(n) {
    var i = this;
    return ir(function() {
      for (var o = qR(n), a = /* @__PURE__ */ new Map(), s = !1, u = gn(i.data_.keys()), c; !(c = u()).done; ) {
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
      for (var h = gn(o.entries()), d; !(d = h()).done; ) {
        var p = d.value, m = p[0], O = p[1], E = i.data_.has(m);
        if (i.set(m, O), i.data_.has(m)) {
          var T = i.data_.get(m);
          a.set(m, T), E || (s = !0);
        }
      }
      if (!s)
        if (i.data_.size !== a.size)
          i.keysAtom_.reportChanged();
        else
          for (var v = i.data_.keys(), R = a.keys(), N = v.next(), I = R.next(); !N.done; ) {
            if (N.value !== I.value) {
              i.keysAtom_.reportChanged();
              break;
            }
            N = v.next(), I = R.next();
          }
      i.data_ = a;
    }), this;
  }, t.toString = function() {
    return "[object ObservableMap]";
  }, t.toJSON = function() {
    return Array.from(this);
  }, t.observe_ = function(n, i) {
    return go(this, n);
  }, t.intercept_ = function(n) {
    return bo(this, n);
  }, rl(e, [{
    key: "size",
    get: function() {
      return this.keysAtom_.reportObserved(), this.data_.size;
    }
  }, {
    key: Tp,
    get: function() {
      return "Map";
    }
  }]), e;
}(), Kr = /* @__PURE__ */ Wr("ObservableMap", Op);
function qR(e) {
  if (ti(e) || Kr(e))
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
var Rp, vp, JR = {};
Rp = Symbol.iterator;
vp = Symbol.toStringTag;
var bp = /* @__PURE__ */ function() {
  function e(r, n, i) {
    n === void 0 && (n = Vn), i === void 0 && (i = "ObservableSet"), this.name_ = void 0, this[$] = JR, this.data_ = /* @__PURE__ */ new Set(), this.atom_ = void 0, this.changeListeners_ = void 0, this.interceptors_ = void 0, this.dehancer = void 0, this.enhancer_ = void 0, this.name_ = i, Mt(Set) || he(22), this.atom_ = kh(this.name_), this.enhancer_ = function(o, a) {
      return n(o, a, i);
    }, r && this.replace(r);
  }
  var t = e.prototype;
  return t.dehanceValue_ = function(n) {
    return this.dehancer !== void 0 ? this.dehancer(n) : n;
  }, t.clear = function() {
    var n = this;
    ir(function() {
      Jh(function() {
        for (var i = gn(n.data_.values()), o; !(o = i()).done; ) {
          var a = o.value;
          n.delete(a);
        }
      });
    });
  }, t.forEach = function(n, i) {
    for (var o = gn(this), a; !(a = o()).done; ) {
      var s = a.value;
      n.call(i, s, s, this);
    }
  }, t.add = function(n) {
    var i = this;
    if (this.atom_, vt(this)) {
      var o = bt(this, {
        type: Sr,
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
        type: Sr,
        object: this,
        newValue: n
      } : null;
      s && Ht(this, u);
    }
    return this;
  }, t.delete = function(n) {
    var i = this;
    if (vt(this)) {
      var o = bt(this, {
        type: Ma,
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
        type: Ma,
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
    return Ki({
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
    return Ki({
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
    return un(n) && (n = new Set(n)), ir(function() {
      Array.isArray(n) ? (i.clear(), n.forEach(function(o) {
        return i.add(o);
      })) : po(n) ? (i.clear(), n.forEach(function(o) {
        return i.add(o);
      })) : n != null && he("Cannot initialize set from " + n);
    }), this;
  }, t.observe_ = function(n, i) {
    return go(this, n);
  }, t.intercept_ = function(n) {
    return bo(this, n);
  }, t.toJSON = function() {
    return Array.from(this);
  }, t.toString = function() {
    return "[object ObservableSet]";
  }, t[Rp] = function() {
    return this.values();
  }, rl(e, [{
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
}(), un = /* @__PURE__ */ Wr("ObservableSet", bp), x_ = /* @__PURE__ */ Object.create(null), F_ = "remove", gp = /* @__PURE__ */ function() {
  function e(r, n, i, o) {
    n === void 0 && (n = /* @__PURE__ */ new Map()), o === void 0 && (o = XO), this.target_ = void 0, this.values_ = void 0, this.name_ = void 0, this.defaultAnnotation_ = void 0, this.keysAtom_ = void 0, this.changeListeners_ = void 0, this.interceptors_ = void 0, this.proxy_ = void 0, this.isPlainObject_ = void 0, this.appliedAnnotations_ = void 0, this.pendingKeys_ = void 0, this.target_ = r, this.values_ = n, this.name_ = i, this.defaultAnnotation_ = o, this.keysAtom_ = new Eo("ObservableObject.keys"), this.isPlainObject_ = fr(this.target_);
  }
  var t = e.prototype;
  return t.getObservablePropValue_ = function(n) {
    return this.values_.get(n).get();
  }, t.setObservablePropValue_ = function(n, i) {
    var o = this.values_.get(n);
    if (o instanceof Vi)
      return o.set(i), !0;
    if (vt(this)) {
      var a = bt(this, {
        type: $t,
        object: this.proxy_ || this.target_,
        name: n,
        newValue: i
      });
      if (!a)
        return null;
      i = a.newValue;
    }
    if (i = o.prepareNewValue_(i), i !== P.UNCHANGED) {
      var s = Pt(this), u = !1, c = s || u ? {
        type: $t,
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
    return P.trackingDerivation && !ur(this.target_, n) && this.has_(n), this.target_[n];
  }, t.set_ = function(n, i, o) {
    return o === void 0 && (o = !1), ur(this.target_, n) ? this.values_.has(n) ? this.setObservablePropValue_(n, i) : o ? Reflect.set(this.target_, n, i) : (this.target_[n] = i, !0) : this.extend_(n, {
      value: i,
      enumerable: !0,
      writable: !0,
      configurable: !0
    }, this.defaultAnnotation_, o);
  }, t.has_ = function(n) {
    if (!P.trackingDerivation)
      return n in this.target_;
    this.pendingKeys_ || (this.pendingKeys_ = /* @__PURE__ */ new Map());
    var i = this.pendingKeys_.get(n);
    return i || (i = new Qr(n in this.target_, cs, "ObservableObject.key?", !1), this.pendingKeys_.set(n, i)), i.get();
  }, t.make_ = function(n, i) {
    if (i === !0 && (i = this.defaultAnnotation_), i !== !1) {
      if (!(n in this.target_)) {
        var o;
        if ((o = this.target_[Wt]) != null && o[n])
          return;
        he(1, i.annotationType_, this.name_ + "." + n.toString());
      }
      for (var a = this.target_; a && a !== fo; ) {
        var s = Sa(a, n);
        if (s) {
          var u = i.make_(this, n, s, a);
          if (u === 0)
            return;
          if (u === 1)
            break;
        }
        a = Object.getPrototypeOf(a);
      }
      V_(this, i, n);
    }
  }, t.extend_ = function(n, i, o, a) {
    if (a === void 0 && (a = !1), o === !0 && (o = this.defaultAnnotation_), o === !1)
      return this.defineProperty_(n, i, a);
    var s = o.extend_(this, n, i, a);
    return s && V_(this, o, n), s;
  }, t.defineProperty_ = function(n, i, o) {
    o === void 0 && (o = !1);
    try {
      lt();
      var a = this.delete_(n);
      if (!a)
        return a;
      if (vt(this)) {
        var s = bt(this, {
          object: this.proxy_ || this.target_,
          name: n,
          type: Sr,
          newValue: i.value
        });
        if (!s)
          return null;
        var u = s.newValue;
        i.value !== u && (i = jn({}, i, {
          value: u
        }));
      }
      if (o) {
        if (!Reflect.defineProperty(this.target_, n, i))
          return !1;
      } else
        Yt(this.target_, n, i);
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
      if (vt(this)) {
        var u = bt(this, {
          object: this.proxy_ || this.target_,
          name: n,
          type: Sr,
          newValue: i
        });
        if (!u)
          return null;
        i = u.newValue;
      }
      var c = j_(n), _ = {
        configurable: P.safeDescriptors ? this.isPlainObject_ : !0,
        enumerable: !0,
        get: c.get,
        set: c.set
      };
      if (a) {
        if (!Reflect.defineProperty(this.target_, n, _))
          return !1;
      } else
        Yt(this.target_, n, _);
      var l = new Qr(i, o, "ObservableObject.key", !1);
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
      if (vt(this)) {
        var s = bt(this, {
          object: this.proxy_ || this.target_,
          name: n,
          type: Sr,
          newValue: void 0
        });
        if (!s)
          return null;
      }
      i.name || (i.name = "ObservableObject.key"), i.context = this.proxy_ || this.target_;
      var u = j_(n), c = {
        configurable: P.safeDescriptors ? this.isPlainObject_ : !0,
        enumerable: !1,
        get: u.get,
        set: u.set
      };
      if (o) {
        if (!Reflect.defineProperty(this.target_, n, c))
          return !1;
      } else
        Yt(this.target_, n, c);
      this.values_.set(n, new Vi(i)), this.notifyPropertyAddition_(n, void 0);
    } finally {
      _t();
    }
    return !0;
  }, t.delete_ = function(n, i) {
    if (i === void 0 && (i = !1), !ur(this.target_, n))
      return !0;
    if (vt(this)) {
      var o = bt(this, {
        object: this.proxy_ || this.target_,
        name: n,
        type: F_
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
        l = (f = Sa(this.target_, n)) == null ? void 0 : f.value;
      }
      if (i) {
        if (!Reflect.deleteProperty(this.target_, n))
          return !1;
      } else
        delete this.target_[n];
      if (_ && (this.values_.delete(n), _ instanceof Qr && (l = _.value_), np(_)), this.keysAtom_.reportChanged(), (a = this.pendingKeys_) == null || (s = a.get(n)) == null || s.set(n in this.target_), u || c) {
        var h = {
          type: F_,
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
    return go(this, n);
  }, t.intercept_ = function(n) {
    return bo(this, n);
  }, t.notifyPropertyAddition_ = function(n, i) {
    var o, a, s = Pt(this), u = !1;
    if (s || u) {
      var c = s || u ? {
        type: Sr,
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
    return this.keysAtom_.reportObserved(), Fn(this.target_);
  }, t.keys_ = function() {
    return this.keysAtom_.reportObserved(), Object.keys(this.target_);
  }, e;
}();
function No(e, t) {
  var r;
  if (ur(e, $))
    return e;
  var n = (r = t?.name) != null ? r : "ObservableObject", i = new gp(e, /* @__PURE__ */ new Map(), String(n), tR(t));
  return ho(e, $, i), e;
}
var QR = /* @__PURE__ */ Wr("ObservableObjectAdministration", gp);
function j_(e) {
  return x_[e] || (x_[e] = {
    get: function() {
      return this[$].getObservablePropValue_(e);
    },
    set: function(r) {
      return this[$].setObservablePropValue_(e, r);
    }
  });
}
function Xn(e) {
  return us(e) ? QR(e[$]) : !1;
}
function V_(e, t, r) {
  var n;
  (n = e.target_[Wt]) == null || delete n[r];
}
var ZR = /* @__PURE__ */ Np(0), iu = 0, Ip = function() {
};
function ev(e, t) {
  Object.setPrototypeOf ? Object.setPrototypeOf(e.prototype, t) : e.prototype.__proto__ !== void 0 ? e.prototype.__proto__ = t : e.prototype = t;
}
ev(Ip, Array.prototype);
var cl = /* @__PURE__ */ function(e, t, r) {
  Mh(n, e);
  function n(o, a, s, u) {
    var c;
    s === void 0 && (s = "ObservableArray"), u === void 0 && (u = !1), c = e.call(this) || this;
    var _ = new ul(s, a, u, !0);
    if (_.proxy_ = ru(c), wh(ru(c), $, _), o && o.length) {
      var l = Oo(!0);
      c.spliceWithArray(0, 0, o), Ro(l);
    }
    return Object.defineProperty(ru(c), "0", ZR), c;
  }
  var i = n.prototype;
  return i.concat = function() {
    this[$].atom_.reportObserved();
    for (var a = arguments.length, s = new Array(a), u = 0; u < a; u++)
      s[u] = arguments[u];
    return Array.prototype.concat.apply(
      this.slice(),
      //@ts-ignore
      s.map(function(c) {
        return Io(c) ? c.slice() : c;
      })
    );
  }, i[r] = function() {
    var o = this, a = 0;
    return Ki({
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
  }, rl(n, [{
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
  }]), n;
}(Ip, Symbol.toStringTag, Symbol.iterator);
Object.entries(Ha).forEach(function(e) {
  var t = e[0], r = e[1];
  t !== "concat" && ho(cl.prototype, t, r);
});
function Np(e) {
  return {
    enumerable: !1,
    configurable: !0,
    get: function() {
      return this[$].get_(e);
    },
    set: function(r) {
      this[$].set_(e, r);
    }
  };
}
function tv(e) {
  Yt(cl.prototype, "" + e, Np(e));
}
function Ap(e) {
  if (e > iu) {
    for (var t = iu; t < e + 100; t++)
      tv(t);
    iu = e;
  }
}
Ap(1e3);
function rv(e, t, r) {
  return new cl(e, t, r);
}
function Yn(e, t) {
  if (typeof e == "object" && e !== null) {
    if (Io(e))
      return t !== void 0 && he(23), e[$].atom_;
    if (un(e))
      return e.atom_;
    if (Kr(e)) {
      if (t === void 0)
        return e.keysAtom_;
      var r = e.data_.get(t) || e.hasMap_.get(t);
      return r || he(25, t, Ku(e)), r;
    }
    if (Xn(e)) {
      if (!t)
        return he(26);
      var n = e[$].values_.get(t);
      return n || he(27, t, Ku(e)), n;
    }
    if (nl(e) || vo(e) || wa(e))
      return e;
  } else if (Mt(e) && wa(e[$]))
    return e[$];
  he(28);
}
function yp(e, t) {
  if (e || he(29), t !== void 0)
    return yp(Yn(e, t));
  if (nl(e) || vo(e) || wa(e) || Kr(e) || un(e))
    return e;
  if (e[$])
    return e[$];
  he(24, e);
}
function Ku(e, t) {
  var r;
  if (t !== void 0)
    r = Yn(e, t);
  else {
    if (al(e))
      return e.name;
    Xn(e) || Kr(e) || un(e) ? r = yp(e) : r = Yn(e);
  }
  return r.name_;
}
var W_ = fo.toString;
function ll(e, t, r) {
  return r === void 0 && (r = -1), $u(e, t, r);
}
function $u(e, t, r, n, i) {
  if (e === t)
    return e !== 0 || 1 / e === 1 / t;
  if (e == null || t == null)
    return !1;
  if (e !== e)
    return t !== t;
  var o = typeof e;
  if (o !== "function" && o !== "object" && typeof t != "object")
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
      r >= 0 && r++;
      break;
  }
  e = X_(e), t = X_(t);
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
      if (!$u(e[_], t[_], r - 1, n, i))
        return !1;
  } else {
    var l = Object.keys(e), f;
    if (_ = l.length, Object.keys(t).length !== _)
      return !1;
    for (; _--; )
      if (f = l[_], !(ur(t, f) && $u(e[f], t[f], r - 1, n, i)))
        return !1;
  }
  return n.pop(), i.pop(), !0;
}
function X_(e) {
  return Io(e) ? e.slice() : ti(e) || Kr(e) || po(e) || un(e) ? Array.from(e.entries()) : e;
}
function Ki(e) {
  return e[Symbol.iterator] = nv, e;
}
function nv() {
  return this;
}
["Symbol", "Map", "Set"].forEach(function(e) {
  var t = tl();
  typeof t[e] > "u" && he("MobX requires global '" + e + "' to be available or polyfilled");
});
typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ == "object" && __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
  spy: vR,
  extras: {
    getDebugName: Ku
  },
  $mobx: $
});
class iv {
  constructor(t) {
    Xr(this), this.state = t, this.getters = t.getters;
  }
  saveContent(t, r) {
    const n = this.getters.getActiveTab(r);
    n.content = t;
  }
}
if (!dt)
  throw new Error("mobx-react-lite requires React with Hooks support");
if (!WR)
  throw new Error("mobx-react-lite@3 requires mobx at least version 6 to be available");
function ov(e) {
  e();
}
function av(e) {
  e || (e = ov), HR({ reactionScheduler: e });
}
function sv(e) {
  return MR(e);
}
var uv = 1e4, cv = 1e4, lv = (
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
          n === void 0 && (n = uv), clearTimeout(r.sweepTimeout), r.sweepTimeout = void 0;
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
        this.sweepTimeout === void 0 && (this.sweepTimeout = setTimeout(this.sweep, cv));
      }
    }), e;
  }()
), _v = typeof FinalizationRegistry < "u" ? FinalizationRegistry : lv, zu = new _v(function(e) {
  var t;
  (t = e.reaction) === null || t === void 0 || t.dispose(), e.reaction = null;
}), Y_ = globalThis && globalThis.__read || function(e, t) {
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
function K_(e) {
  return "observer".concat(e);
}
var fv = (
  /** @class */
  function() {
    function e() {
    }
    return e;
  }()
);
function dv() {
  return new fv();
}
function hv(e, t) {
  t === void 0 && (t = "observed");
  var r = Y_(Pe.useState(dv), 1), n = r[0], i = Y_(Pe.useState(), 2), o = i[1], a = function() {
    return o([]);
  }, s = Pe.useRef(null);
  s.current || (s.current = {
    reaction: null,
    mounted: !1,
    changedBeforeMount: !1
  });
  var u = s.current;
  u.reaction || (u.reaction = new Wi(K_(t), function() {
    u.mounted ? a() : u.changedBeforeMount = !0;
  }), zu.register(n, u, u)), Pe.useDebugValue(u.reaction, sv), Pe.useEffect(function() {
    return zu.unregister(u), u.mounted = !0, u.reaction ? u.changedBeforeMount && (u.changedBeforeMount = !1, a()) : (u.reaction = new Wi(K_(t), function() {
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
var Sp = typeof Symbol == "function" && Symbol.for, $_ = Sp ? Symbol.for("react.forward_ref") : typeof Bn == "function" && Bn(function(e) {
  return null;
}).$$typeof, z_ = Sp ? Symbol.for("react.memo") : typeof xn == "function" && xn(function(e) {
  return null;
}).$$typeof;
function mr(e, t) {
  var r;
  if (z_ && e.$$typeof === z_)
    throw new Error("[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.");
  var n = (r = t?.forwardRef) !== null && r !== void 0 ? r : !1, i = e, o = e.displayName || e.name;
  if ($_ && e.$$typeof === $_ && (n = !0, i = e.render, typeof i != "function"))
    throw new Error("[mobx-react-lite] `render` property of ForwardRef was not a function");
  var a = function(s, u) {
    return hv(function() {
      return i(s, u);
    }, o);
  };
  return o !== "" && (a.displayName = o), e.contextTypes && (a.contextTypes = e.contextTypes), n && (a = Bn(a)), a = xn(a), mv(e, a), a;
}
var pv = {
  $$typeof: !0,
  render: !0,
  compare: !0,
  type: !0,
  // Don't redefine `displayName`,
  // it's defined as getter-setter pair on `memo` (see #3192).
  displayName: !0
};
function mv(e, t) {
  Object.keys(e).forEach(function(r) {
    pv[r] || Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r));
  });
}
globalThis && globalThis.__read;
var ou;
av(Ah);
ou = zu.finalizeAllImmediately;
const Ev = ({ fontSize: e, tabSize: t }) => ({
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
}), cn = () => ot(rO), Tv = () => cn().state, Ov = (e) => {
  const t = cn(), r = t.state.selectedTerminalTab;
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
}, $r = () => ot(fi).actions, ni = () => ot(fi), fs = () => ot(fi).getters, Rv = () => ot(fi).services, vv = () => ot(fi).storage;
function bv(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function q_(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function J_(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? q_(Object(r), !0).forEach(function(n) {
      bv(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : q_(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function gv(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, o;
  for (o = 0; o < n.length; o++)
    i = n[o], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function Iv(e, t) {
  if (e == null)
    return {};
  var r = gv(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++)
      n = o[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Nv(e, t) {
  return Av(e) || yv(e, t) || Sv(e, t) || Dv();
}
function Av(e) {
  if (Array.isArray(e))
    return e;
}
function yv(e, t) {
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
function Sv(e, t) {
  if (e) {
    if (typeof e == "string")
      return Q_(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Q_(e, t);
  }
}
function Q_(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function Dv() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Gv(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function Z_(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ef(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Z_(Object(r), !0).forEach(function(n) {
      Gv(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Z_(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Uv() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return function(n) {
    return t.reduceRight(function(i, o) {
      return o(i);
    }, n);
  };
}
function Si(e) {
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
function ka(e) {
  return {}.toString.call(e).includes("Object");
}
function Cv(e) {
  return !Object.keys(e).length;
}
function $i(e) {
  return typeof e == "function";
}
function wv(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function Pv(e, t) {
  return ka(t) || Hr("changeType"), Object.keys(t).some(function(r) {
    return !wv(e, r);
  }) && Hr("changeField"), t;
}
function Hv(e) {
  $i(e) || Hr("selectorType");
}
function Mv(e) {
  $i(e) || ka(e) || Hr("handlerType"), ka(e) && Object.values(e).some(function(t) {
    return !$i(t);
  }) && Hr("handlersType");
}
function kv(e) {
  e || Hr("initialIsRequired"), ka(e) || Hr("initialType"), Cv(e) && Hr("initialContent");
}
function Lv(e, t) {
  throw new Error(e[t] || e.default);
}
var Bv = {
  initialIsRequired: "initial state is required",
  initialType: "initial state should be an object",
  initialContent: "initial state shouldn't be an empty object",
  handlerType: "handler should be an object or a function",
  handlersType: "all handlers should be a functions",
  selectorType: "selector should be a function",
  changeType: "provided value of changes should be an object",
  changeField: 'it seams you want to change a field in the state which is not specified in the "initial" state',
  default: "an unknown error accured in `state-local` package"
}, Hr = Si(Lv)(Bv), Wo = {
  changes: Pv,
  selector: Hv,
  handler: Mv,
  initial: kv
};
function xv(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  Wo.initial(e), Wo.handler(t);
  var r = {
    current: e
  }, n = Si(Vv)(r, t), i = Si(jv)(r), o = Si(Wo.changes)(e), a = Si(Fv)(r);
  function s() {
    var c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function(_) {
      return _;
    };
    return Wo.selector(c), c(r.current);
  }
  function u(c) {
    Uv(n, i, o, a)(c);
  }
  return [s, u];
}
function Fv(e, t) {
  return $i(t) ? t(e.current) : t;
}
function jv(e, t) {
  return e.current = ef(ef({}, e.current), t), t;
}
function Vv(e, t, r) {
  return $i(t) ? t(e.current) : Object.keys(r).forEach(function(n) {
    var i;
    return (i = t[n]) === null || i === void 0 ? void 0 : i.call(t, e.current[n]);
  }), r;
}
var Wv = {
  create: xv
}, Xv = {
  paths: {
    vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.36.1/min/vs"
  }
};
function Yv(e) {
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
function Kv(e) {
  return {}.toString.call(e).includes("Object");
}
function $v(e) {
  return e || tf("configIsRequired"), Kv(e) || tf("configType"), e.urls ? (zv(), {
    paths: {
      vs: e.urls.monacoBase
    }
  }) : e;
}
function zv() {
  console.warn(Dp.deprecation);
}
function qv(e, t) {
  throw new Error(e[t] || e.default);
}
var Dp = {
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
}, tf = Yv(qv)(Dp), Jv = {
  config: $v
}, Qv = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  return function(i) {
    return r.reduceRight(function(o, a) {
      return a(o);
    }, i);
  };
};
function Gp(e, t) {
  return Object.keys(t).forEach(function(r) {
    t[r] instanceof Object && e[r] && Object.assign(t[r], Gp(e[r], t[r]));
  }), J_(J_({}, e), t);
}
var Zv = {
  type: "cancelation",
  msg: "operation is manually canceled"
};
function au(e) {
  var t = !1, r = new Promise(function(n, i) {
    e.then(function(o) {
      return t ? i(Zv) : n(o);
    }), e.catch(i);
  });
  return r.cancel = function() {
    return t = !0;
  }, r;
}
var eb = Wv.create({
  config: Xv,
  isInitialized: !1,
  resolve: null,
  reject: null,
  monaco: null
}), Up = Nv(eb, 2), Ao = Up[0], ds = Up[1];
function tb(e) {
  var t = Jv.config(e), r = t.monaco, n = Iv(t, ["monaco"]);
  ds(function(i) {
    return {
      config: Gp(i.config, n),
      monaco: r
    };
  });
}
function rb() {
  var e = Ao(function(t) {
    var r = t.monaco, n = t.isInitialized, i = t.resolve;
    return {
      monaco: r,
      isInitialized: n,
      resolve: i
    };
  });
  if (!e.isInitialized) {
    if (ds({
      isInitialized: !0
    }), e.monaco)
      return e.resolve(e.monaco), au(su);
    if (window.monaco && window.monaco.editor)
      return Cp(window.monaco), e.resolve(window.monaco), au(su);
    Qv(nb, ob)(ab);
  }
  return au(su);
}
function nb(e) {
  return document.body.appendChild(e);
}
function ib(e) {
  var t = document.createElement("script");
  return e && (t.src = e), t;
}
function ob(e) {
  var t = Ao(function(n) {
    var i = n.config, o = n.reject;
    return {
      config: i,
      reject: o
    };
  }), r = ib("".concat(t.config.paths.vs, "/loader.js"));
  return r.onload = function() {
    return e();
  }, r.onerror = t.reject, r;
}
function ab() {
  var e = Ao(function(r) {
    var n = r.config, i = r.resolve, o = r.reject;
    return {
      config: n,
      resolve: i,
      reject: o
    };
  }), t = window.require;
  t.config(e.config), t(["vs/editor/editor.main"], function(r) {
    Cp(r), e.resolve(r);
  }, function(r) {
    e.reject(r);
  });
}
function Cp(e) {
  Ao().monaco || ds({
    monaco: e
  });
}
function sb() {
  return Ao(function(e) {
    var t = e.monaco;
    return t;
  });
}
var su = new Promise(function(e, t) {
  return ds({
    resolve: e,
    reject: t
  });
}), La = {
  config: tb,
  init: rb,
  __getMonacoInstance: sb
}, ub = { wrapper: { display: "flex", position: "relative", textAlign: "initial" }, fullWidth: { width: "100%" }, hide: { display: "none" } }, uu = ub, cb = { container: { display: "flex", height: "100%", width: "100%", justifyContent: "center", alignItems: "center" } }, lb = cb;
function _b({ children: e }) {
  return Pe.createElement("div", { style: lb.container }, e);
}
var fb = _b, db = fb;
function hb({ width: e, height: t, isEditorReady: r, loading: n, _ref: i, className: o, wrapperProps: a }) {
  return Pe.createElement("section", { style: { ...uu.wrapper, width: e, height: t }, ...a }, !r && Pe.createElement(db, null, n), Pe.createElement("div", { ref: i, style: { ...uu.fullWidth, ...!r && uu.hide }, className: o }));
}
var pb = hb, wp = xn(pb);
function mb(e) {
  Le(e, []);
}
var _l = mb;
function Eb(e, t, r = !0) {
  let n = se(!0);
  Le(n.current || !r ? () => {
    n.current = !1;
  } : e, t);
}
var ht = Eb;
function Ci() {
}
function Nn(e, t, r, n) {
  return Tb(e, n) || Ob(e, t, r, n);
}
function Tb(e, t) {
  return e.editor.getModel(Pp(e, t));
}
function Ob(e, t, r, n) {
  return e.editor.createModel(t, r, n ? Pp(e, n) : void 0);
}
function Pp(e, t) {
  return e.Uri.parse(t);
}
function Rb({ original: e, modified: t, language: r, originalLanguage: n, modifiedLanguage: i, originalModelPath: o, modifiedModelPath: a, keepCurrentOriginalModel: s = !1, keepCurrentModifiedModel: u = !1, theme: c = "light", loading: _ = "Loading...", options: l = {}, height: f = "100%", width: h = "100%", className: d, wrapperProps: p = {}, beforeMount: m = Ci, onMount: O = Ci }) {
  let [E, T] = dt(!1), [v, R] = dt(!0), N = se(null), I = se(null), C = se(null), D = se(O), G = se(m), Z = se(!1);
  _l(() => {
    let H = La.init();
    return H.then((Q) => (I.current = Q) && R(!1)).catch((Q) => Q?.type !== "cancelation" && console.error("Monaco initialization: error:", Q)), () => N.current ? x() : H.cancel();
  }), ht(() => {
    let H = N.current.getModifiedEditor();
    H.getOption(I.current.editor.EditorOption.readOnly) ? H.setValue(t || "") : t !== H.getValue() && (H.executeEdits("", [{ range: H.getModel().getFullModelRange(), text: t || "", forceMoveMarkers: !0 }]), H.pushUndoStop());
  }, [t], E), ht(() => {
    N.current?.getModel()?.original.setValue(e || "");
  }, [e], E), ht(() => {
    let { original: H, modified: Q } = N.current.getModel();
    I.current.editor.setModelLanguage(H, n || r || "text"), I.current.editor.setModelLanguage(Q, i || r || "text");
  }, [r, n, i], E), ht(() => {
    I.current?.editor.setTheme(c);
  }, [c], E), ht(() => {
    N.current?.updateOptions(l);
  }, [l], E);
  let re = xr(() => {
    if (!I.current)
      return;
    G.current(I.current);
    let H = Nn(I.current, e || "", n || r || "text", o || ""), Q = Nn(I.current, t || "", i || r || "text", a || "");
    N.current?.setModel({ original: H, modified: Q });
  }, [r, t, i, e, n, o, a]), J = xr(() => {
    !Z.current && C.current && (N.current = I.current.editor.createDiffEditor(C.current, { automaticLayout: !0, ...l }), re(), I.current?.editor.setTheme(c), T(!0), Z.current = !0);
  }, [l, c, re]);
  Le(() => {
    E && D.current(N.current, I.current);
  }, [E]), Le(() => {
    !v && !E && J();
  }, [v, E, J]), ht(() => {
    if (N.current && I.current) {
      let H = N.current.getOriginalEditor(), Q = Nn(I.current, e || "", n || r || "text", o || "");
      Q !== H.getModel() && H.setModel(Q);
    }
  }, [o], E), ht(() => {
    if (N.current && I.current) {
      let H = N.current.getModifiedEditor(), Q = Nn(I.current, t || "", i || r || "text", a || "");
      Q !== H.getModel() && H.setModel(Q);
    }
  }, [a], E);
  function x() {
    let H = N.current?.getModel();
    s || H?.original?.dispose(), u || H?.modified?.dispose(), N.current?.dispose();
  }
  return Pe.createElement(wp, { width: h, height: f, isEditorReady: E, loading: _, _ref: C, className: d, wrapperProps: p });
}
var vb = Rb;
xn(vb);
function bb() {
  let [e, t] = dt(La.__getMonacoInstance());
  return _l(() => {
    let r;
    return e || (r = La.init(), r.then((n) => {
      t(n);
    })), () => r?.cancel();
  }), e;
}
var Hp = bb;
function gb(e) {
  let t = se();
  return Le(() => {
    t.current = e;
  }, [e]), t.current;
}
var Ib = gb, Xo = /* @__PURE__ */ new Map();
function Nb({ defaultValue: e, defaultLanguage: t, defaultPath: r, value: n, language: i, path: o, theme: a = "light", line: s, loading: u = "Loading...", options: c = {}, overrideServices: _ = {}, saveViewState: l = !0, keepCurrentModel: f = !1, width: h = "100%", height: d = "100%", className: p, wrapperProps: m = {}, beforeMount: O = Ci, onMount: E = Ci, onChange: T, onValidate: v = Ci }) {
  let [R, N] = dt(!1), [I, C] = dt(!0), D = se(null), G = se(null), Z = se(null), re = se(E), J = se(O), x = se(), H = se(n), Q = Ib(o), ue = se(!1), ie = se(!1);
  _l(() => {
    let Ae = La.init();
    return Ae.then((U) => (D.current = U) && C(!1)).catch((U) => U?.type !== "cancelation" && console.error("Monaco initialization: error:", U)), () => G.current ? Be() : Ae.cancel();
  }), ht(() => {
    let Ae = Nn(D.current, e || n || "", t || i || "", o || r || "");
    Ae !== G.current?.getModel() && (l && Xo.set(Q, G.current?.saveViewState()), G.current?.setModel(Ae), l && G.current?.restoreViewState(Xo.get(o)));
  }, [o], R), ht(() => {
    G.current?.updateOptions(c);
  }, [c], R), ht(() => {
    !G.current || n === void 0 || (G.current.getOption(D.current.editor.EditorOption.readOnly) ? G.current.setValue(n) : n !== G.current.getValue() && (ie.current = !0, G.current.executeEdits("", [{ range: G.current.getModel().getFullModelRange(), text: n, forceMoveMarkers: !0 }]), G.current.pushUndoStop(), ie.current = !1));
  }, [n], R), ht(() => {
    let Ae = G.current?.getModel();
    Ae && i && D.current?.editor.setModelLanguage(Ae, i);
  }, [i], R), ht(() => {
    s !== void 0 && G.current?.revealLine(s);
  }, [s], R), ht(() => {
    D.current?.editor.setTheme(a);
  }, [a], R);
  let Se = xr(() => {
    if (!(!Z.current || !D.current) && !ue.current) {
      J.current(D.current);
      let Ae = o || r, U = Nn(D.current, n || e || "", t || i || "", Ae || "");
      G.current = D.current?.editor.create(Z.current, { model: U, automaticLayout: !0, ...c }, _), l && G.current.restoreViewState(Xo.get(Ae)), D.current.editor.setTheme(a), N(!0), ue.current = !0;
    }
  }, [e, t, r, n, i, o, c, _, l, a]);
  Le(() => {
    R && re.current(G.current, D.current);
  }, [R]), Le(() => {
    !I && !R && Se();
  }, [I, R, Se]), H.current = n, Le(() => {
    R && T && (x.current?.dispose(), x.current = G.current?.onDidChangeModelContent((Ae) => {
      ie.current || T(G.current.getValue(), Ae);
    }));
  }, [R, T]), Le(() => {
    if (R) {
      let Ae = D.current.editor.onDidChangeMarkers((U) => {
        let L = G.current.getModel()?.uri;
        if (L && U.find((M) => M.path === L.path)) {
          let M = D.current.editor.getModelMarkers({ resource: L });
          v?.(M);
        }
      });
      return () => {
        Ae?.dispose();
      };
    }
    return () => {
    };
  }, [R, v]);
  function Be() {
    x.current?.dispose(), f ? l && Xo.set(o, G.current.saveViewState()) : G.current.getModel()?.dispose(), G.current.dispose();
  }
  return Pe.createElement(wp, { width: h, height: d, isEditorReady: R, loading: u, _ref: Z, className: p, wrapperProps: m });
}
var Ab = Nb, yb = xn(Ab), Sb = yb;
const Db = {
  EDITOR_THEME: "EDITOR_THEME",
  EDITOR_CONTENT_DATA: "EDITOR_CONTENT_DATA",
  EDITOR_EXECUTE_MESSAGES: "EDITOR_EXECUTE_MESSAGES",
  EDITOR_FONT_SIZE: "EDITOR_FONT_SIZE",
  EDITOR_TAB_SIZE: "EDITOR_TAB_SIZE",
  EDITOR_CUSTOM_BACKGROUND: "EDITOR_CUSTOM_BACKGROUND",
  EDITOR_CUSTOM_COLOR: "EDITOR_CUSTOM_COLOR",
  EDITOR_HTML_PREVIEW: "EDITOR_HTML_PREVIEW",
  AUTH_TOKEN: "AUTH_TOKEN"
}, Gb = (e) => typeof e == "object" && e !== null, Mp = (e) => typeof e == "string", Ub = (e) => typeof e == "function", Cb = "code_gear", kp = { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_f872b67f-2b0c-4a61-87c1-7f7afaacee0c", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "yarn/3.6.0 npm/? node/v19.9.0 linux x64", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_f872b67f-2b0c-4a61-87c1-7f7afaacee0c", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/tmp/xfs-ee3ffe3f/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", GRADLE_HOME: "/usr/share/gradle-8.2.1", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "", SYSTEMD_EXEC_PID: "664", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.7/x64", NVM_DIR: "/home/runner/.nvm", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230806.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", JOURNAL_STREAM: "8:17664", GITHUB_WORKFLOW: "CodeGear CI", _: "/usr/local/bin/yarn", GITHUB_RUN_ID: "5812140137", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "66a4e938018152ae6922cd42186d319bf8500084", GITHUB_BASE_REF: "", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/heads/develop", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", PATH: "/tmp/xfs-ee3ffe3f:/opt/hostedtoolcache/node/19.9.0/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_b55c4856-a9ea-4c91-9d5a-8d57c0de1704", INVOCATION_ID: "25b14a0d9d12418588774fef7239d74f", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.12/x64", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "43", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 3", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "develop", GITHUB_REPOSITORY: "Gearonix/CodeGear", STATS_UE: "true", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", PROJECT_CWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", npm_package_version: "1.0.0", npm_lifecycle_event: "build", GITHUB_REF_PROTECTED: "false", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "66a4e938018152ae6922cd42186d319bf8500084", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/heads/develop", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_f872b67f-2b0c-4a61-87c1-7f7afaacee0c", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", BERRY_BIN_FOLDER: "/tmp/xfs-ee3ffe3f", npm_execpath: "/tmp/xfs-ee3ffe3f/yarn", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "push", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_f872b67f-2b0c-4a61-87c1-7f7afaacee0c", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_f872b67f-2b0c-4a61-87c1-7f7afaacee0c", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/4251781990744259245", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "4251781990744259245", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.SERVER_URL ?? "http://localhost:6868", Lp = {
  CODE_EXECUTOR_API: "execute",
  _GRAPHQL: "graphql"
};
class fl {
  constructor(t) {
    this.isDisabled = !1, this.isDisabled = t ?? this.isDisabled;
  }
  get(t, r) {
    if (this.isDisabled)
      return r;
    const n = localStorage.getItem(this.withPrefix(t));
    return n ? wb(n) ? JSON.parse(n) : n : r;
  }
  set(t, r) {
    if (!(this.isDisabled || !(t in Db))) {
      if (Mp(r))
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
    return `${Cb}__${t}`;
  }
}
const wb = (e) => {
  try {
    JSON.parse(e);
  } catch {
    return !1;
  }
  return !0;
};
var qu = function(e, t) {
  return qu = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var i in n)
      Object.prototype.hasOwnProperty.call(n, i) && (r[i] = n[i]);
  }, qu(e, t);
};
function Bt(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  qu(e, t);
  function r() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
}
var g = function() {
  return g = Object.assign || function(t) {
    for (var r, n = 1, i = arguments.length; n < i; n++) {
      r = arguments[n];
      for (var o in r)
        Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
    }
    return t;
  }, g.apply(this, arguments);
};
function nn(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
  return r;
}
function Ir(e, t, r, n) {
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
function Nr(e, t) {
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
function Zr(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, i = t.length, o; n < i; n++)
      (o || !(n in t)) && (o || (o = Array.prototype.slice.call(t, 0, n)), o[n] = t[n]);
  return e.concat(o || Array.prototype.slice.call(t));
}
var cu = "Invariant Violation", rf = Object.setPrototypeOf, Pb = rf === void 0 ? function(e, t) {
  return e.__proto__ = t, e;
} : rf, Ee = (
  /** @class */
  function(e) {
    Bt(t, e);
    function t(r) {
      r === void 0 && (r = cu);
      var n = e.call(this, typeof r == "number" ? cu + ": " + r + " (see https://github.com/apollographql/invariant-packages)" : r) || this;
      return n.framesToPop = 1, n.name = cu, Pb(n, t.prototype), n;
    }
    return t;
  }(Error)
);
function k(e, t) {
  if (!e)
    throw new Ee(t);
}
var Bp = ["debug", "log", "warn", "error", "silent"], Hb = Bp.indexOf("log");
function Yo(e) {
  return function() {
    if (Bp.indexOf(e) >= Hb) {
      var t = console[e] || console.log;
      return t.apply(console, arguments);
    }
  };
}
(function(e) {
  e.debug = Yo("debug"), e.log = Yo("log"), e.warn = Yo("warn"), e.error = Yo("error");
})(k || (k = {}));
function Tt(e) {
  try {
    return e();
  } catch {
  }
}
const nf = Tt(function() {
  return globalThis;
}) || Tt(function() {
  return window;
}) || Tt(function() {
  return self;
}) || Tt(function() {
  return global;
}) || Tt(function() {
  return Tt.constructor("return this")();
});
var of = "__", af = [of, of].join("DEV");
function Mb() {
  try {
    return !!__DEV__;
  } catch {
    return Object.defineProperty(nf, af, {
      value: Tt(function() {
        return "production";
      }) !== "production",
      enumerable: !1,
      configurable: !0,
      writable: !0
    }), nf[af];
  }
}
const lu = Mb();
function Ar(e) {
  try {
    return e();
  } catch {
  }
}
var Ju = Ar(function() {
  return globalThis;
}) || Ar(function() {
  return window;
}) || Ar(function() {
  return self;
}) || Ar(function() {
  return global;
}) || // We don't expect the Function constructor ever to be invoked at runtime, as
// long as at least one of globalThis, window, self, or global is defined, so
// we are under no obligation to make it easy for static analysis tools to
// detect syntactic usage of the Function constructor. If you think you can
// improve your static analysis to detect this obfuscation, think again. This
// is an arms race you cannot win, at least not in JavaScript.
Ar(function() {
  return Ar.constructor("return this")();
}), Qu = !1;
function kb() {
  Ju && !Ar(function() {
    return "production";
  }) && !Ar(function() {
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
kb();
function sf() {
  Qu && (delete Ju.process, Qu = !1);
}
function aa(e, t) {
  if (!!!e)
    throw new Error(t);
}
const xp = {
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
}, Lb = new Set(Object.keys(xp));
function uf(e) {
  const t = e?.kind;
  return typeof t == "string" && Lb.has(t);
}
var cf;
(function(e) {
  e.QUERY = "query", e.MUTATION = "mutation", e.SUBSCRIPTION = "subscription";
})(cf || (cf = {}));
var Xe;
(function(e) {
  e.NAME = "Name", e.DOCUMENT = "Document", e.OPERATION_DEFINITION = "OperationDefinition", e.VARIABLE_DEFINITION = "VariableDefinition", e.SELECTION_SET = "SelectionSet", e.FIELD = "Field", e.ARGUMENT = "Argument", e.FRAGMENT_SPREAD = "FragmentSpread", e.INLINE_FRAGMENT = "InlineFragment", e.FRAGMENT_DEFINITION = "FragmentDefinition", e.VARIABLE = "Variable", e.INT = "IntValue", e.FLOAT = "FloatValue", e.STRING = "StringValue", e.BOOLEAN = "BooleanValue", e.NULL = "NullValue", e.ENUM = "EnumValue", e.LIST = "ListValue", e.OBJECT = "ObjectValue", e.OBJECT_FIELD = "ObjectField", e.DIRECTIVE = "Directive", e.NAMED_TYPE = "NamedType", e.LIST_TYPE = "ListType", e.NON_NULL_TYPE = "NonNullType", e.SCHEMA_DEFINITION = "SchemaDefinition", e.OPERATION_TYPE_DEFINITION = "OperationTypeDefinition", e.SCALAR_TYPE_DEFINITION = "ScalarTypeDefinition", e.OBJECT_TYPE_DEFINITION = "ObjectTypeDefinition", e.FIELD_DEFINITION = "FieldDefinition", e.INPUT_VALUE_DEFINITION = "InputValueDefinition", e.INTERFACE_TYPE_DEFINITION = "InterfaceTypeDefinition", e.UNION_TYPE_DEFINITION = "UnionTypeDefinition", e.ENUM_TYPE_DEFINITION = "EnumTypeDefinition", e.ENUM_VALUE_DEFINITION = "EnumValueDefinition", e.INPUT_OBJECT_TYPE_DEFINITION = "InputObjectTypeDefinition", e.DIRECTIVE_DEFINITION = "DirectiveDefinition", e.SCHEMA_EXTENSION = "SchemaExtension", e.SCALAR_TYPE_EXTENSION = "ScalarTypeExtension", e.OBJECT_TYPE_EXTENSION = "ObjectTypeExtension", e.INTERFACE_TYPE_EXTENSION = "InterfaceTypeExtension", e.UNION_TYPE_EXTENSION = "UnionTypeExtension", e.ENUM_TYPE_EXTENSION = "EnumTypeExtension", e.INPUT_OBJECT_TYPE_EXTENSION = "InputObjectTypeExtension";
})(Xe || (Xe = {}));
function lf(e) {
  return e === 9 || e === 32;
}
function Bb(e, t) {
  const r = e.replace(/"""/g, '\\"""'), n = r.split(/\r\n|[\n\r]/g), i = n.length === 1, o = n.length > 1 && n.slice(1).every((h) => h.length === 0 || lf(h.charCodeAt(0))), a = r.endsWith('\\"""'), s = e.endsWith('"') && !a, u = e.endsWith("\\"), c = s || u, _ = !(t != null && t.minimize) && // add leading and trailing new lines only if it improves readability
  (!i || e.length > 70 || c || o || a);
  let l = "";
  const f = i && lf(e.charCodeAt(0));
  return (_ && !f || o) && (l += `
`), l += r, (_ || c) && (l += `
`), '"""' + l + '"""';
}
const xb = 10, Fp = 2;
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
      return Fb(e, t);
    default:
      return String(e);
  }
}
function Fb(e, t) {
  if (e === null)
    return "null";
  if (t.includes(e))
    return "[Circular]";
  const r = [...t, e];
  if (jb(e)) {
    const n = e.toJSON();
    if (n !== e)
      return typeof n == "string" ? n : hs(n, r);
  } else if (Array.isArray(e))
    return Wb(e, r);
  return Vb(e, r);
}
function jb(e) {
  return typeof e.toJSON == "function";
}
function Vb(e, t) {
  const r = Object.entries(e);
  return r.length === 0 ? "{}" : t.length > Fp ? "[" + Xb(e) + "]" : "{ " + r.map(
    ([i, o]) => i + ": " + hs(o, t)
  ).join(", ") + " }";
}
function Wb(e, t) {
  if (e.length === 0)
    return "[]";
  if (t.length > Fp)
    return "[Array]";
  const r = Math.min(xb, e.length), n = e.length - r, i = [];
  for (let o = 0; o < r; ++o)
    i.push(hs(e[o], t));
  return n === 1 ? i.push("... 1 more item") : n > 1 && i.push(`... ${n} more items`), "[" + i.join(", ") + "]";
}
function Xb(e) {
  const t = Object.prototype.toString.call(e).replace(/^\[object /, "").replace(/]$/, "");
  if (t === "Object" && typeof e.constructor == "function") {
    const r = e.constructor.name;
    if (typeof r == "string" && r !== "")
      return r;
  }
  return t;
}
class Yb {
  constructor(t, r = "GraphQL request", n = {
    line: 1,
    column: 1
  }) {
    typeof t == "string" || aa(!1, `Body must be a string. Received: ${jp(t)}.`), this.body = t, this.name = r, this.locationOffset = n, this.locationOffset.line > 0 || aa(
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
function Kb(e) {
  return `"${e.replace($b, zb)}"`;
}
const $b = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;
function zb(e) {
  return qb[e.charCodeAt(0)];
}
const qb = [
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
], dl = Object.freeze({});
function dr(e, t, r = xp) {
  const n = /* @__PURE__ */ new Map();
  for (const O of Object.values(Xe))
    n.set(O, Jb(t, O));
  let i, o = Array.isArray(e), a = [e], s = -1, u = [], c = e, _, l;
  const f = [], h = [];
  do {
    s++;
    const O = s === a.length, E = O && u.length !== 0;
    if (O) {
      if (_ = h.length === 0 ? void 0 : f[f.length - 1], c = l, l = h.pop(), E)
        if (o) {
          c = c.slice();
          let v = 0;
          for (const [R, N] of u) {
            const I = R - v;
            N === null ? (c.splice(I, 1), v++) : c[I] = N;
          }
        } else {
          c = Object.defineProperties(
            {},
            Object.getOwnPropertyDescriptors(c)
          );
          for (const [v, R] of u)
            c[v] = R;
        }
      s = i.index, a = i.keys, u = i.edits, o = i.inArray, i = i.prev;
    } else if (l) {
      if (_ = o ? s : a[s], c = l[_], c == null)
        continue;
      f.push(_);
    }
    let T;
    if (!Array.isArray(c)) {
      var d, p;
      uf(c) || aa(!1, `Invalid AST Node: ${jp(c)}.`);
      const v = O ? (d = n.get(c.kind)) === null || d === void 0 ? void 0 : d.leave : (p = n.get(c.kind)) === null || p === void 0 ? void 0 : p.enter;
      if (T = v?.call(t, c, _, l, f, h), T === dl)
        break;
      if (T === !1) {
        if (!O) {
          f.pop();
          continue;
        }
      } else if (T !== void 0 && (u.push([_, T]), !O))
        if (uf(T))
          c = T;
        else {
          f.pop();
          continue;
        }
    }
    if (T === void 0 && E && u.push([_, c]), O)
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
function Jb(e, t) {
  const r = e[t];
  return typeof r == "object" ? r : typeof r == "function" ? {
    enter: r,
    leave: void 0
  } : {
    enter: e.enter,
    leave: e.leave
  };
}
function Qb(e) {
  return dr(e, eg);
}
const Zb = 80, eg = {
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
      const t = ae("(", j(e.variableDefinitions, ", "), ")"), r = j(
        [
          e.operation,
          j([e.name, t]),
          j(e.directives, " ")
        ],
        " "
      );
      return (r === "query" ? "" : r + " ") + e.selectionSet;
    }
  },
  VariableDefinition: {
    leave: ({ variable: e, type: t, defaultValue: r, directives: n }) => e + ": " + t + ae(" = ", r) + ae(" ", j(n, " "))
  },
  SelectionSet: {
    leave: ({ selections: e }) => Gt(e)
  },
  Field: {
    leave({ alias: e, name: t, arguments: r, directives: n, selectionSet: i }) {
      const o = ae("", e, ": ") + t;
      let a = o + ae("(", j(r, ", "), ")");
      return a.length > Zb && (a = o + ae(`(
`, sa(j(r, `
`)), `
)`)), j([a, j(n, " "), i], " ");
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
    leave: ({ typeCondition: e, directives: t, selectionSet: r }) => j(
      [
        "...",
        ae("on ", e),
        j(t, " "),
        r
      ],
      " "
    )
  },
  FragmentDefinition: {
    leave: ({ name: e, typeCondition: t, variableDefinitions: r, directives: n, selectionSet: i }) => (
      // or removed in the future.
      `fragment ${e}${ae("(", j(r, ", "), ")")} on ${t} ${ae("", j(n, " "), " ")}` + i
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
    leave: ({ value: e, block: t }) => t ? Bb(e) : Kb(e)
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
    leave: ({ description: e, directives: t, operationTypes: r }) => ae("", e, `
`) + j(["schema", j(t, " "), Gt(r)], " ")
  },
  OperationTypeDefinition: {
    leave: ({ operation: e, type: t }) => e + ": " + t
  },
  ScalarTypeDefinition: {
    leave: ({ description: e, name: t, directives: r }) => ae("", e, `
`) + j(["scalar", t, j(r, " ")], " ")
  },
  ObjectTypeDefinition: {
    leave: ({ description: e, name: t, interfaces: r, directives: n, fields: i }) => ae("", e, `
`) + j(
      [
        "type",
        t,
        ae("implements ", j(r, " & ")),
        j(n, " "),
        Gt(i)
      ],
      " "
    )
  },
  FieldDefinition: {
    leave: ({ description: e, name: t, arguments: r, type: n, directives: i }) => ae("", e, `
`) + t + (_f(r) ? ae(`(
`, sa(j(r, `
`)), `
)`) : ae("(", j(r, ", "), ")")) + ": " + n + ae(" ", j(i, " "))
  },
  InputValueDefinition: {
    leave: ({ description: e, name: t, type: r, defaultValue: n, directives: i }) => ae("", e, `
`) + j(
      [t + ": " + r, ae("= ", n), j(i, " ")],
      " "
    )
  },
  InterfaceTypeDefinition: {
    leave: ({ description: e, name: t, interfaces: r, directives: n, fields: i }) => ae("", e, `
`) + j(
      [
        "interface",
        t,
        ae("implements ", j(r, " & ")),
        j(n, " "),
        Gt(i)
      ],
      " "
    )
  },
  UnionTypeDefinition: {
    leave: ({ description: e, name: t, directives: r, types: n }) => ae("", e, `
`) + j(
      ["union", t, j(r, " "), ae("= ", j(n, " | "))],
      " "
    )
  },
  EnumTypeDefinition: {
    leave: ({ description: e, name: t, directives: r, values: n }) => ae("", e, `
`) + j(["enum", t, j(r, " "), Gt(n)], " ")
  },
  EnumValueDefinition: {
    leave: ({ description: e, name: t, directives: r }) => ae("", e, `
`) + j([t, j(r, " ")], " ")
  },
  InputObjectTypeDefinition: {
    leave: ({ description: e, name: t, directives: r, fields: n }) => ae("", e, `
`) + j(["input", t, j(r, " "), Gt(n)], " ")
  },
  DirectiveDefinition: {
    leave: ({ description: e, name: t, arguments: r, repeatable: n, locations: i }) => ae("", e, `
`) + "directive @" + t + (_f(r) ? ae(`(
`, sa(j(r, `
`)), `
)`) : ae("(", j(r, ", "), ")")) + (n ? " repeatable" : "") + " on " + j(i, " | ")
  },
  SchemaExtension: {
    leave: ({ directives: e, operationTypes: t }) => j(
      ["extend schema", j(e, " "), Gt(t)],
      " "
    )
  },
  ScalarTypeExtension: {
    leave: ({ name: e, directives: t }) => j(["extend scalar", e, j(t, " ")], " ")
  },
  ObjectTypeExtension: {
    leave: ({ name: e, interfaces: t, directives: r, fields: n }) => j(
      [
        "extend type",
        e,
        ae("implements ", j(t, " & ")),
        j(r, " "),
        Gt(n)
      ],
      " "
    )
  },
  InterfaceTypeExtension: {
    leave: ({ name: e, interfaces: t, directives: r, fields: n }) => j(
      [
        "extend interface",
        e,
        ae("implements ", j(t, " & ")),
        j(r, " "),
        Gt(n)
      ],
      " "
    )
  },
  UnionTypeExtension: {
    leave: ({ name: e, directives: t, types: r }) => j(
      [
        "extend union",
        e,
        j(t, " "),
        ae("= ", j(r, " | "))
      ],
      " "
    )
  },
  EnumTypeExtension: {
    leave: ({ name: e, directives: t, values: r }) => j(["extend enum", e, j(t, " "), Gt(r)], " ")
  },
  InputObjectTypeExtension: {
    leave: ({ name: e, directives: t, fields: r }) => j(["extend input", e, j(t, " "), Gt(r)], " ")
  }
};
function j(e, t = "") {
  var r;
  return (r = e?.filter((n) => n).join(t)) !== null && r !== void 0 ? r : "";
}
function Gt(e) {
  return ae(`{
`, sa(j(e, `
`)), `
}`);
}
function ae(e, t, r = "") {
  return t != null && t !== "" ? e + t + r : "";
}
function sa(e) {
  return ae("  ", e.replace(/\n/g, `
  `));
}
function _f(e) {
  var t;
  return (t = e?.some((r) => r.includes(`
`))) !== null && t !== void 0 ? t : !1;
}
function ff(e) {
  return e.kind === Xe.FIELD || e.kind === Xe.FRAGMENT_SPREAD || e.kind === Xe.INLINE_FRAGMENT;
}
function tg() {
  return sf();
}
function rg() {
  __DEV__ ? k(typeof lu == "boolean", lu) : k(typeof lu == "boolean", 39);
}
tg();
rg();
function ps(e, t) {
  var r = e.directives;
  return !r || !r.length ? !0 : og(r).every(function(n) {
    var i = n.directive, o = n.ifArgument, a = !1;
    return o.value.kind === "Variable" ? (a = t && t[o.value.name.value], __DEV__ ? k(a !== void 0, "Invalid variable referenced in @".concat(i.name.value, " directive.")) : k(a !== void 0, 40)) : a = o.value.value, i.name.value === "skip" ? !a : a;
  });
}
function hl(e, t, r) {
  var n = new Set(e), i = n.size;
  return dr(t, {
    Directive: function(o) {
      if (n.delete(o.name.value) && (!r || !n.size))
        return dl;
    }
  }), r ? !n.size : n.size < i;
}
function ng(e) {
  return e && hl(["client", "export"], e, !0);
}
function ig(e) {
  var t = e.name.value;
  return t === "skip" || t === "include";
}
function og(e) {
  var t = [];
  return e && e.length && e.forEach(function(r) {
    if (ig(r)) {
      var n = r.arguments, i = r.name.value;
      __DEV__ ? k(n && n.length === 1, "Incorrect number of arguments for the @".concat(i, " directive.")) : k(n && n.length === 1, 41);
      var o = n[0];
      __DEV__ ? k(o.name && o.name.value === "if", "Invalid argument for the @".concat(i, " directive.")) : k(o.name && o.name.value === "if", 42);
      var a = o.value;
      __DEV__ ? k(a && (a.kind === "Variable" || a.kind === "BooleanValue"), "Argument for the @".concat(i, " directive must be a variable or a boolean value.")) : k(a && (a.kind === "Variable" || a.kind === "BooleanValue"), 43), t.push({ directive: r, ifArgument: o });
    }
  }), t;
}
function ag(e, t) {
  var r = t, n = [];
  e.definitions.forEach(function(o) {
    if (o.kind === "OperationDefinition")
      throw __DEV__ ? new Ee("Found a ".concat(o.operation, " operation").concat(o.name ? " named '".concat(o.name.value, "'") : "", ". ") + "No operations are allowed when using a fragment as a query. Only fragments are allowed.") : new Ee(44);
    o.kind === "FragmentDefinition" && n.push(o);
  }), typeof r > "u" && (__DEV__ ? k(n.length === 1, "Found ".concat(n.length, " fragments. `fragmentName` must be provided when there is not exactly 1 fragment.")) : k(n.length === 1, 45), r = n[0].name.value);
  var i = g(g({}, e), { definitions: Zr([
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
function pl(e) {
  e === void 0 && (e = []);
  var t = {};
  return e.forEach(function(r) {
    t[r.name.value] = r;
  }), t;
}
function ml(e, t) {
  switch (e.kind) {
    case "InlineFragment":
      return e;
    case "FragmentSpread": {
      var r = e.name.value;
      if (typeof t == "function")
        return t(r);
      var n = t && t[r];
      return __DEV__ ? k(n, "No fragment named ".concat(r)) : k(n, 46), n || null;
    }
    default:
      return null;
  }
}
function Ce(e) {
  return e !== null && typeof e == "object";
}
function Un(e) {
  return { __ref: String(e) };
}
function ge(e) {
  return !!(e && typeof e == "object" && typeof e.__ref == "string");
}
function sg(e) {
  return Ce(e) && e.kind === "Document" && Array.isArray(e.definitions);
}
function ug(e) {
  return e.kind === "StringValue";
}
function cg(e) {
  return e.kind === "BooleanValue";
}
function lg(e) {
  return e.kind === "IntValue";
}
function _g(e) {
  return e.kind === "FloatValue";
}
function fg(e) {
  return e.kind === "Variable";
}
function dg(e) {
  return e.kind === "ObjectValue";
}
function hg(e) {
  return e.kind === "ListValue";
}
function pg(e) {
  return e.kind === "EnumValue";
}
function mg(e) {
  return e.kind === "NullValue";
}
function Kn(e, t, r, n) {
  if (lg(r) || _g(r))
    e[t.value] = Number(r.value);
  else if (cg(r) || ug(r))
    e[t.value] = r.value;
  else if (dg(r)) {
    var i = {};
    r.fields.map(function(a) {
      return Kn(i, a.name, a.value, n);
    }), e[t.value] = i;
  } else if (fg(r)) {
    var o = (n || {})[r.name.value];
    e[t.value] = o;
  } else if (hg(r))
    e[t.value] = r.values.map(function(a) {
      var s = {};
      return Kn(s, t, a, n), s[t.value];
    });
  else if (pg(r))
    e[t.value] = r.value;
  else if (mg(r))
    e[t.value] = null;
  else
    throw __DEV__ ? new Ee('The inline argument "'.concat(t.value, '" of kind "').concat(r.kind, '"') + "is not supported. Use variables instead of inline arguments to overcome this limitation.") : new Ee(55);
}
function Eg(e, t) {
  var r = null;
  e.directives && (r = {}, e.directives.forEach(function(i) {
    r[i.name.value] = {}, i.arguments && i.arguments.forEach(function(o) {
      var a = o.name, s = o.value;
      return Kn(r[i.name.value], a, s, t);
    });
  }));
  var n = null;
  return e.arguments && e.arguments.length && (n = {}, e.arguments.forEach(function(i) {
    var o = i.name, a = i.value;
    return Kn(n, o, a, t);
  })), El(e.name.value, n, r);
}
var Tg = [
  "connection",
  "include",
  "skip",
  "client",
  "rest",
  "export"
], El = Object.assign(function(e, t, r) {
  if (t && r && r.connection && r.connection.key)
    if (r.connection.filter && r.connection.filter.length > 0) {
      var n = r.connection.filter ? r.connection.filter : [];
      n.sort();
      var i = {};
      return n.forEach(function(s) {
        i[s] = t[s];
      }), "".concat(r.connection.key, "(").concat(pi(i), ")");
    } else
      return r.connection.key;
  var o = e;
  if (t) {
    var a = pi(t);
    o += "(".concat(a, ")");
  }
  return r && Object.keys(r).forEach(function(s) {
    Tg.indexOf(s) === -1 && (r[s] && Object.keys(r[s]).length ? o += "@".concat(s, "(").concat(pi(r[s]), ")") : o += "@".concat(s));
  }), o;
}, {
  setStringify: function(e) {
    var t = pi;
    return pi = e, t;
  }
}), pi = function(t) {
  return JSON.stringify(t, Og);
};
function Og(e, t) {
  return Ce(t) && !Array.isArray(t) && (t = Object.keys(t).sort().reduce(function(r, n) {
    return r[n] = t[n], r;
  }, {})), t;
}
function ms(e, t) {
  if (e.arguments && e.arguments.length) {
    var r = {};
    return e.arguments.forEach(function(n) {
      var i = n.name, o = n.value;
      return Kn(r, i, o, t);
    }), r;
  }
  return null;
}
function on(e) {
  return e.alias ? e.alias.value : e.name.value;
}
function Zu(e, t, r) {
  for (var n, i = 0, o = t.selections; i < o.length; i++) {
    var a = o[i];
    if (an(a)) {
      if (a.name.value === "__typename")
        return e[on(a)];
    } else
      n ? n.push(a) : n = [a];
  }
  if (typeof e.__typename == "string")
    return e.__typename;
  if (n)
    for (var s = 0, u = n; s < u.length; s++) {
      var a = u[s], c = Zu(e, ml(a, r).selectionSet, r);
      if (typeof c == "string")
        return c;
    }
}
function an(e) {
  return e.kind === "Field";
}
function Rg(e) {
  return e.kind === "InlineFragment";
}
function Es(e) {
  __DEV__ ? k(e && e.kind === "Document", 'Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a "gql" tag? http://docs.apollostack.com/apollo-client/core.html#gql') : k(e && e.kind === "Document", 47);
  var t = e.definitions.filter(function(r) {
    return r.kind !== "FragmentDefinition";
  }).map(function(r) {
    if (r.kind !== "OperationDefinition")
      throw __DEV__ ? new Ee('Schema type definitions not allowed in queries. Found: "'.concat(r.kind, '"')) : new Ee(48);
    return r;
  });
  return __DEV__ ? k(t.length <= 1, "Ambiguous GraphQL document: contains ".concat(t.length, " operations")) : k(t.length <= 1, 49), e;
}
function yo(e) {
  return Es(e), e.definitions.filter(function(t) {
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
function Tl(e) {
  return e.definitions.filter(function(t) {
    return t.kind === "FragmentDefinition";
  });
}
function Vp(e) {
  var t = yo(e);
  return __DEV__ ? k(t && t.operation === "query", "Must contain a query definition.") : k(t && t.operation === "query", 50), t;
}
function vg(e) {
  __DEV__ ? k(e.kind === "Document", 'Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a "gql" tag? http://docs.apollostack.com/apollo-client/core.html#gql') : k(e.kind === "Document", 51), __DEV__ ? k(e.definitions.length <= 1, "Fragment must have exactly one definition.") : k(e.definitions.length <= 1, 52);
  var t = e.definitions[0];
  return __DEV__ ? k(t.kind === "FragmentDefinition", "Must be a fragment definition.") : k(t.kind === "FragmentDefinition", 53), t;
}
function Ts(e) {
  Es(e);
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
  throw __DEV__ ? new Ee("Expected a parsed GraphQL query with a query, mutation, subscription, or a fragment.") : new Ee(54);
}
function Ol(e) {
  var t = /* @__PURE__ */ Object.create(null), r = e && e.variableDefinitions;
  return r && r.length && r.forEach(function(n) {
    n.defaultValue && Kn(t, n.variable.name, n.defaultValue);
  }), t;
}
var He = Array.isArray;
function zt(e) {
  return Array.isArray(e) && e.length > 0;
}
var df = {
  kind: Xe.FIELD,
  name: {
    kind: Xe.NAME,
    value: "__typename"
  }
};
function Wp(e, t) {
  return !e || e.selectionSet.selections.every(function(r) {
    return r.kind === Xe.FRAGMENT_SPREAD && Wp(t[r.name.value], t);
  });
}
function bg(e) {
  return Wp(yo(e) || vg(e), pl(Tl(e))) ? null : e;
}
function gg(e) {
  var t = /* @__PURE__ */ new Set(), r = [];
  return e.forEach(function(n) {
    n.name ? t.add(n.name) : n.test && r.push(n.test);
  }), function(n) {
    return t.has(n.name.value) || r.some(function(i) {
      return i(n);
    });
  };
}
function hf(e) {
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
function Xp(e, t) {
  for (var r = hf(""), n = hf(""), i = function(E) {
    for (var T = 0, v = void 0; T < E.length && (v = E[T]); ++T)
      if (!He(v)) {
        if (v.kind === Xe.OPERATION_DEFINITION)
          return r(v.name && v.name.value);
        if (v.kind === Xe.FRAGMENT_DEFINITION)
          return n(v.name.value);
      }
    return __DEV__ && k.error("Could not find operation or fragment"), null;
  }, o = 0, a = t.definitions.length - 1; a >= 0; --a)
    t.definitions[a].kind === Xe.OPERATION_DEFINITION && ++o;
  var s = gg(e), u = e.some(function(E) {
    return E.remove;
  }), c = function(E) {
    return u && E && E.some(s);
  }, _ = /* @__PURE__ */ new Map(), l = !1, f = {
    enter: function(E) {
      if (c(E.directives))
        return l = !0, null;
    }
  }, h = dr(t, {
    Field: f,
    InlineFragment: f,
    VariableDefinition: {
      enter: function() {
        return !1;
      }
    },
    Variable: {
      enter: function(E, T, v, R, N) {
        var I = i(N);
        I && I.variables.add(E.name.value);
      }
    },
    FragmentSpread: {
      enter: function(E, T, v, R, N) {
        if (c(E.directives))
          return l = !0, null;
        var I = i(N);
        I && I.fragmentSpreads.add(E.name.value);
      }
    },
    FragmentDefinition: {
      enter: function(E, T, v, R) {
        _.set(JSON.stringify(R), E);
      },
      leave: function(E, T, v, R) {
        var N = _.get(JSON.stringify(R));
        if (E === N)
          return E;
        if (o > 0 && E.selectionSet.selections.every(function(I) {
          return I.kind === Xe.FIELD && I.name.value === "__typename";
        }))
          return n(E.name.value).removed = !0, l = !0, null;
      }
    },
    Directive: {
      leave: function(E) {
        if (s(E))
          return l = !0, null;
      }
    }
  });
  if (!l)
    return t;
  var d = function(E) {
    return E.transitiveVars || (E.transitiveVars = new Set(E.variables), E.removed || E.fragmentSpreads.forEach(function(T) {
      d(n(T)).transitiveVars.forEach(function(v) {
        E.transitiveVars.add(v);
      });
    })), E;
  }, p = /* @__PURE__ */ new Set();
  h.definitions.forEach(function(E) {
    E.kind === Xe.OPERATION_DEFINITION ? d(r(E.name && E.name.value)).fragmentSpreads.forEach(function(T) {
      p.add(T);
    }) : E.kind === Xe.FRAGMENT_DEFINITION && o === 0 && !n(E.name.value).removed && p.add(E.name.value);
  }), p.forEach(function(E) {
    d(n(E)).fragmentSpreads.forEach(function(T) {
      p.add(T);
    });
  });
  var m = function(E) {
    return !!(!p.has(E) || n(E).removed);
  }, O = {
    enter: function(E) {
      if (m(E.name.value))
        return null;
    }
  };
  return bg(dr(h, {
    FragmentSpread: O,
    FragmentDefinition: O,
    OperationDefinition: {
      leave: function(E) {
        if (E.variableDefinitions) {
          var T = d(r(E.name && E.name.value)).transitiveVars;
          if (T.size < E.variableDefinitions.length)
            return g(g({}, E), { variableDefinitions: E.variableDefinitions.filter(function(v) {
              return T.has(v.variable.name.value);
            }) });
        }
      }
    }
  }));
}
var Rl = Object.assign(function(e) {
  return dr(e, {
    SelectionSet: {
      enter: function(t, r, n) {
        if (!(n && n.kind === Xe.OPERATION_DEFINITION)) {
          var i = t.selections;
          if (i) {
            var o = i.some(function(s) {
              return an(s) && (s.name.value === "__typename" || s.name.value.lastIndexOf("__", 0) === 0);
            });
            if (!o) {
              var a = n;
              if (!(an(a) && a.directives && a.directives.some(function(s) {
                return s.name.value === "export";
              })))
                return g(g({}, t), { selections: Zr(Zr([], i, !0), [df], !1) });
            }
          }
        }
      }
    }
  });
}, {
  added: function(e) {
    return e === df;
  }
}), Ig = {
  test: function(e) {
    var t = e.name.value === "connection";
    return t && (!e.arguments || !e.arguments.some(function(r) {
      return r.name.value === "key";
    })) && __DEV__ && k.warn("Removing an @connection directive even though it does not have a key. You may want to use the key parameter to specify a store key."), t;
  }
};
function Ng(e) {
  return Xp([Ig], Es(e));
}
function Ag(e) {
  var t = Ts(e), r = t.operation;
  if (r === "query")
    return e;
  var n = dr(e, {
    OperationDefinition: {
      enter: function(i) {
        return g(g({}, i), { operation: "query" });
      }
    }
  });
  return n;
}
function yg(e) {
  Es(e);
  var t = Xp([
    {
      test: function(r) {
        return r.name.value === "client";
      },
      remove: !0
    }
  ], e);
  return t;
}
var Sg = Object.prototype.hasOwnProperty;
function pf() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  return vl(e);
}
function vl(e) {
  var t = e[0] || {}, r = e.length;
  if (r > 1)
    for (var n = new Fr(), i = 1; i < r; ++i)
      t = n.merge(t, e[i]);
  return t;
}
var Dg = function(e, t, r) {
  return this.merge(e[r], t[r]);
}, Fr = function() {
  function e(t) {
    t === void 0 && (t = Dg), this.reconciler = t, this.isObject = Ce, this.pastCopies = /* @__PURE__ */ new Set();
  }
  return e.prototype.merge = function(t, r) {
    for (var n = this, i = [], o = 2; o < arguments.length; o++)
      i[o - 2] = arguments[o];
    return Ce(r) && Ce(t) ? (Object.keys(r).forEach(function(a) {
      if (Sg.call(t, a)) {
        var s = t[a];
        if (r[a] !== s) {
          var u = n.reconciler.apply(n, Zr([t, r, a], i, !1));
          u !== s && (t = n.shallowCopyForMerge(t), t[a] = u);
        }
      } else
        t = n.shallowCopyForMerge(t), t[a] = r[a];
    }), t) : r;
  }, e.prototype.shallowCopyForMerge = function(t) {
    return Ce(t) && (this.pastCopies.has(t) || (Array.isArray(t) ? t = t.slice(0) : t = g({ __proto__: Object.getPrototypeOf(t) }, t), this.pastCopies.add(t))), t;
  }, e;
}();
function Gg(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r)
    return (r = r.call(e)).next.bind(r);
  if (Array.isArray(e) || (r = Ug(e)) || t && e && typeof e.length == "number") {
    r && (e = r);
    var n = 0;
    return function() {
      return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ug(e, t) {
  if (e) {
    if (typeof e == "string")
      return mf(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return mf(e, t);
  }
}
function mf(e, t) {
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
function bl(e, t, r) {
  return t && Ef(e.prototype, t), r && Ef(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
var gl = function() {
  return typeof Symbol == "function";
}, Il = function(e) {
  return gl() && !!Symbol[e];
}, Nl = function(e) {
  return Il(e) ? Symbol[e] : "@@" + e;
};
gl() && !Il("observable") && (Symbol.observable = Symbol("observable"));
var Cg = Nl("iterator"), tc = Nl("observable"), Yp = Nl("species");
function Ba(e, t) {
  var r = e[t];
  if (r != null) {
    if (typeof r != "function")
      throw new TypeError(r + " is not a function");
    return r;
  }
}
function mi(e) {
  var t = e.constructor;
  return t !== void 0 && (t = t[Yp], t === null && (t = void 0)), t !== void 0 ? t : ye;
}
function wg(e) {
  return e instanceof ye;
}
function $n(e) {
  $n.log ? $n.log(e) : setTimeout(function() {
    throw e;
  });
}
function ua(e) {
  Promise.resolve().then(function() {
    try {
      e();
    } catch (t) {
      $n(t);
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
        var r = Ba(t, "unsubscribe");
        r && r.call(t);
      }
    } catch (n) {
      $n(n);
    }
}
function rc(e) {
  e._observer = void 0, e._queue = void 0, e._state = "closed";
}
function Pg(e) {
  var t = e._queue;
  if (t) {
    e._queue = void 0, e._state = "ready";
    for (var r = 0; r < t.length && ($p(e, t[r].type, t[r].value), e._state !== "closed"); ++r)
      ;
  }
}
function $p(e, t, r) {
  e._state = "running";
  var n = e._observer;
  try {
    var i = Ba(n, t);
    switch (t) {
      case "next":
        i && i.call(n, r);
        break;
      case "error":
        if (rc(e), i)
          i.call(n, r);
        else
          throw r;
        break;
      case "complete":
        rc(e), i && i.call(n);
        break;
    }
  } catch (o) {
    $n(o);
  }
  e._state === "closed" ? Kp(e) : e._state === "running" && (e._state = "ready");
}
function _u(e, t, r) {
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
      }], ua(function() {
        return Pg(e);
      });
      return;
    }
    $p(e, t, r);
  }
}
var Hg = /* @__PURE__ */ function() {
  function e(r, n) {
    this._cleanup = void 0, this._observer = r, this._queue = void 0, this._state = "initializing";
    var i = new Mg(this);
    try {
      this._cleanup = n.call(void 0, i);
    } catch (o) {
      i.error(o);
    }
    this._state === "initializing" && (this._state = "ready");
  }
  var t = e.prototype;
  return t.unsubscribe = function() {
    this._state !== "closed" && (rc(this), Kp(this));
  }, bl(e, [{
    key: "closed",
    get: function() {
      return this._state === "closed";
    }
  }]), e;
}(), Mg = /* @__PURE__ */ function() {
  function e(r) {
    this._subscription = r;
  }
  var t = e.prototype;
  return t.next = function(n) {
    _u(this._subscription, "next", n);
  }, t.error = function(n) {
    _u(this._subscription, "error", n);
  }, t.complete = function() {
    _u(this._subscription, "complete");
  }, bl(e, [{
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
    }), new Hg(n, this._subscriber);
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
    var o = mi(this);
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
    var o = mi(this);
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
    var o = mi(this), a = arguments.length > 1, s = !1, u = arguments[1], c = u;
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
    var s = mi(this);
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
    var o = mi(this);
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
  }, t[tc] = function() {
    return this;
  }, e.from = function(n) {
    var i = typeof this == "function" ? this : e;
    if (n == null)
      throw new TypeError(n + " is not an object");
    var o = Ba(n, tc);
    if (o) {
      var a = o.call(n);
      if (Object(a) !== a)
        throw new TypeError(a + " is not an object");
      return wg(a) && a.constructor === i ? a : new i(function(s) {
        return a.subscribe(s);
      });
    }
    if (Il("iterator") && (o = Ba(n, Cg), o))
      return new i(function(s) {
        ua(function() {
          if (!s.closed) {
            for (var u = Gg(o.call(n)), c; !(c = u()).done; ) {
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
        ua(function() {
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
      ua(function() {
        if (!s.closed) {
          for (var u = 0; u < i.length; ++u)
            if (s.next(i[u]), s.closed)
              return;
          s.complete();
        }
      });
    });
  }, bl(e, null, [{
    key: Yp,
    get: function() {
      return this;
    }
  }]), e;
}();
gl() && Object.defineProperty(ye, Symbol("extensions"), {
  value: {
    symbol: tc,
    hostReportError: $n
  },
  configurable: !0
});
function kg(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Lg(e) {
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
var On;
typeof self < "u" ? On = self : typeof window < "u" ? On = window : typeof global < "u" ? On = global : typeof module < "u" ? On = module : On = Function("return this")();
Lg(On);
var Tf = ye.prototype, Of = "@@observable";
Tf[Of] || (Tf[Of] = function() {
  return this;
});
var Bg = Object.prototype.toString;
function zp(e) {
  return nc(e);
}
function nc(e, t) {
  switch (Bg.call(e)) {
    case "[object Array]": {
      if (t = t || /* @__PURE__ */ new Map(), t.has(e))
        return t.get(e);
      var r = e.slice(0);
      return t.set(e, r), r.forEach(function(i, o) {
        r[o] = nc(i, t);
      }), r;
    }
    case "[object Object]": {
      if (t = t || /* @__PURE__ */ new Map(), t.has(e))
        return t.get(e);
      var n = Object.create(Object.getPrototypeOf(e));
      return t.set(e, n), Object.keys(e).forEach(function(i) {
        n[i] = nc(e[i], t);
      }), n;
    }
    default:
      return e;
  }
}
function xg(e) {
  var t = /* @__PURE__ */ new Set([e]);
  return t.forEach(function(r) {
    Ce(r) && Fg(r) === r && Object.getOwnPropertyNames(r).forEach(function(n) {
      Ce(r[n]) && t.add(r[n]);
    });
  }), e;
}
function Fg(e) {
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
function ic(e) {
  return __DEV__ && xg(e), e;
}
function wi(e, t, r) {
  var n = [];
  e.forEach(function(i) {
    return i[t] && n.push(i);
  }), n.forEach(function(i) {
    return i[t](r);
  });
}
function fu(e, t, r) {
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
        c = c.then(m, m).then(function(O) {
          --s, i && i.call(n, O), u && l.complete();
        }, function(O) {
          throw --s, O;
        }).catch(function(O) {
          o && o.call(n, O);
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
var ln = typeof WeakMap == "function" && Tt(function() {
  return navigator.product;
}) !== "ReactNative", jg = typeof WeakSet == "function", qp = typeof Symbol == "function" && typeof Symbol.for == "function", Os = qp && Symbol.asyncIterator;
Tt(function() {
  return window.document.createElement;
});
Tt(function() {
  return navigator.userAgent.indexOf("jsdom") >= 0;
});
function Jp(e) {
  function t(r) {
    Object.defineProperty(e, r, { value: ye });
  }
  return qp && Symbol.species && t(Symbol.species), t("@@species"), e;
}
function Rf(e) {
  return e && typeof e.then == "function";
}
var Rn = function(e) {
  Bt(t, e);
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
        n.sub !== null && (n.latest = ["next", i], n.notify("next", i), wi(n.observers, "next", i));
      },
      error: function(i) {
        var o = n.sub;
        o !== null && (o && setTimeout(function() {
          return o.unsubscribe();
        }), n.sub = null, n.latest = ["error", i], n.reject(i), n.notify("error", i), wi(n.observers, "error", i));
      },
      complete: function() {
        var i = n, o = i.sub, a = i.sources, s = a === void 0 ? [] : a;
        if (o !== null) {
          var u = s.shift();
          u ? Rf(u) ? u.then(function(c) {
            return n.sub = c.subscribe(n.handlers);
          }) : n.sub = u.subscribe(n.handlers) : (o && setTimeout(function() {
            return o.unsubscribe();
          }), n.sub = null, n.latest && n.latest[0] === "next" ? n.resolve(n.latest[1]) : n.resolve(), n.notify("complete"), wi(n.observers, "complete"));
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
Jp(Rn);
function Cn(e) {
  return "incremental" in e;
}
function Vg(e) {
  return "hasNext" in e && "data" in e;
}
function Wg(e) {
  return Cn(e) || Vg(e);
}
function Xg(e) {
  return Ce(e) && "payload" in e;
}
function Qp(e, t) {
  var r = e, n = new Fr();
  return Cn(t) && zt(t.incremental) && t.incremental.forEach(function(i) {
    for (var o = i.data, a = i.path, s = a.length - 1; s >= 0; --s) {
      var u = a[s], c = !isNaN(+u), _ = c ? [] : {};
      _[u] = o, o = _;
    }
    r = n.merge(r, o);
  }), r;
}
function ca(e) {
  var t = oc(e);
  return zt(t);
}
function oc(e) {
  var t = zt(e.errors) ? e.errors.slice(0) : [];
  return Cn(e) && zt(e.incremental) && e.incremental.forEach(function(r) {
    r.errors && t.push.apply(t, r.errors);
  }), t;
}
function Rs() {
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
var vf = /* @__PURE__ */ new Map();
function ac(e) {
  var t = vf.get(e) || 1;
  return vf.set(e, t + 1), "".concat(e, ":").concat(t, ":").concat(Math.random().toString(36).slice(2));
}
function Yg(e) {
  var t = ac("stringifyForDisplay");
  return JSON.stringify(e, function(r, n) {
    return n === void 0 ? t : n;
  }).split(JSON.stringify(t)).join("<undefined>");
}
function du(e, t) {
  return Rs(e, t, t.variables && {
    variables: g(g({}, e && e.variables), t.variables)
  });
}
function bf(e) {
  return new ye(function(t) {
    t.error(e);
  });
}
var sc = function(e, t, r) {
  var n = new Error(r);
  throw n.name = "ServerError", n.response = e, n.statusCode = e.status, n.result = t, n;
};
function Kg(e) {
  for (var t = [
    "query",
    "operationName",
    "variables",
    "extensions",
    "context"
  ], r = 0, n = Object.keys(e); r < n.length; r++) {
    var i = n[r];
    if (t.indexOf(i) < 0)
      throw __DEV__ ? new Ee("illegal argument: ".concat(i)) : new Ee(27);
  }
  return e;
}
function $g(e, t) {
  var r = g({}, e), n = function(o) {
    typeof o == "function" ? r = g(g({}, r), o(r)) : r = g(g({}, r), o);
  }, i = function() {
    return g({}, r);
  };
  return Object.defineProperty(t, "setContext", {
    enumerable: !1,
    value: n
  }), Object.defineProperty(t, "getContext", {
    enumerable: !1,
    value: i
  }), t;
}
function zg(e) {
  var t = {
    variables: e.variables || {},
    extensions: e.extensions || {},
    operationName: e.operationName,
    query: e.query
  };
  return t.operationName || (t.operationName = typeof t.query != "string" ? ec(t.query) || void 0 : ""), t;
}
function gf(e, t) {
  return t ? t(e) : ye.of();
}
function Ei(e) {
  return typeof e == "function" ? new ii(e) : e;
}
function Ko(e) {
  return e.request.length <= 1;
}
var qg = function(e) {
  Bt(t, e);
  function t(r, n) {
    var i = e.call(this, r) || this;
    return i.link = n, i;
  }
  return t;
}(Error), ii = function() {
  function e(t) {
    t && (this.request = t);
  }
  return e.empty = function() {
    return new e(function() {
      return ye.of();
    });
  }, e.from = function(t) {
    return t.length === 0 ? e.empty() : t.map(Ei).reduce(function(r, n) {
      return r.concat(n);
    });
  }, e.split = function(t, r, n) {
    var i = Ei(r), o = Ei(n || new e(gf));
    return Ko(i) && Ko(o) ? new e(function(a) {
      return t(a) ? i.request(a) || ye.of() : o.request(a) || ye.of();
    }) : new e(function(a, s) {
      return t(a) ? i.request(a, s) || ye.of() : o.request(a, s) || ye.of();
    });
  }, e.execute = function(t, r) {
    return t.request($g(r.context, zg(Kg(r)))) || ye.of();
  }, e.concat = function(t, r) {
    var n = Ei(t);
    if (Ko(n))
      return __DEV__ && k.warn(new qg("You are calling concat on a terminating link, which will have no effect", n)), n;
    var i = Ei(r);
    return Ko(i) ? new e(function(o) {
      return n.request(o, function(a) {
        return i.request(a) || ye.of();
      }) || ye.of();
    }) : new e(function(o, a) {
      return n.request(o, function(s) {
        return i.request(s, a) || ye.of();
      }) || ye.of();
    });
  }, e.prototype.split = function(t, r, n) {
    return this.concat(e.split(t, r, n || new e(gf)));
  }, e.prototype.concat = function(t) {
    return e.concat(this, t);
  }, e.prototype.request = function(t, r) {
    throw __DEV__ ? new Ee("request is not implemented") : new Ee(22);
  }, e.prototype.onError = function(t, r) {
    if (r && r.error)
      return r.error(t), !1;
    throw t;
  }, e.prototype.setOnError = function(t) {
    return this.onError = t, this;
  }, e;
}(), uc = ii.execute, Jg = "3.7.17";
function Qg(e) {
  return !!e.body;
}
function Zg(e) {
  return !!e.getReader;
}
function eI(e) {
  return !!(Os && e[Symbol.asyncIterator]);
}
function tI(e) {
  return !!e.stream;
}
function rI(e) {
  return !!e.arrayBuffer;
}
function nI(e) {
  return !!e.pipe;
}
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
  return Os && (_[Symbol.asyncIterator] = function() {
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
  return Os && (r[Symbol.asyncIterator] = function() {
    return this;
  }), r;
}
function If(e) {
  var t = {
    next: function() {
      return e.read();
    }
  };
  return Os && (t[Symbol.asyncIterator] = function() {
    return this;
  }), t;
}
function sI(e) {
  var t = e;
  if (Qg(e) && (t = e.body), eI(t))
    return iI(t);
  if (Zg(t))
    return If(t.getReader());
  if (tI(t))
    return If(t.stream().getReader());
  if (rI(t))
    return aI(t.arrayBuffer());
  if (nI(t))
    return oI(t);
  throw new Error("Unknown body type for responseIterator. Please pass a streamable response.");
}
var Al = Symbol();
function uI(e) {
  return e.extensions ? Array.isArray(e.extensions[Al]) : !1;
}
function cI(e) {
  return e.hasOwnProperty("graphQLErrors");
}
var lI = function(e) {
  var t = Zr(Zr(Zr([], e.graphQLErrors, !0), e.clientErrors, !0), e.protocolErrors, !0);
  return e.networkError && t.push(e.networkError), t.map(function(r) {
    return Ce(r) && r.message || "Error message not found.";
  }).join(`
`);
}, hn = function(e) {
  Bt(t, e);
  function t(r) {
    var n = r.graphQLErrors, i = r.protocolErrors, o = r.clientErrors, a = r.networkError, s = r.errorMessage, u = r.extraInfo, c = e.call(this, s) || this;
    return c.name = "ApolloError", c.graphQLErrors = n || [], c.protocolErrors = i || [], c.clientErrors = o || [], c.networkError = a || null, c.message = s || lI(c), c.extraInfo = u, c.__proto__ = t.prototype, c;
  }
  return t;
}(Error), Nf = Object.prototype.hasOwnProperty;
function _I(e, t) {
  var r, n, i, o, a;
  return Ir(this, void 0, void 0, function() {
    var s, u, c, _, l, f, h, d, p, m, O, E, T, v, R, N, I, C, D, G, Z, re, J;
    return Nr(this, function(x) {
      switch (x.label) {
        case 0:
          if (TextDecoder === void 0)
            throw new Error("TextDecoder must be defined in the environment: please import a polyfill.");
          s = new TextDecoder("utf-8"), u = (r = e.headers) === null || r === void 0 ? void 0 : r.get("content-type"), c = "boundary=", _ = u?.includes(c) ? u?.substring(u?.indexOf(c) + c.length).replace(/['"]/g, "").replace(/\;(.*)/gm, "").trim() : "-", l = `\r
--`.concat(_), f = "", h = sI(e), d = !0, x.label = 1;
        case 1:
          return d ? [4, h.next()] : [3, 3];
        case 2:
          for (p = x.sent(), m = p.value, O = p.done, E = typeof m == "string" ? m : s.decode(m), T = f.length - l.length + 1, d = !O, f += E, v = f.indexOf(l, T); v > -1; ) {
            if (R = void 0, re = [
              f.slice(0, v),
              f.slice(v + l.length)
            ], R = re[0], f = re[1], N = R.indexOf(`\r
\r
`), I = fI(R.slice(0, N)), C = I["content-type"], C && C.toLowerCase().indexOf("application/json") === -1)
              throw new Error("Unsupported patch content type: application/json is required.");
            if (D = R.slice(N), D)
              try {
                G = Zp(e, D), Object.keys(G).length > 1 || "data" in G || "incremental" in G || "errors" in G || "payload" in G ? Xg(G) ? (Z = {}, "payload" in G && (Z = g({}, G.payload)), "errors" in G && (Z = g(g({}, Z), { extensions: g(g({}, "extensions" in Z ? Z.extensions : null), (J = {}, J[Al] = G.errors, J)) })), (n = t.next) === null || n === void 0 || n.call(t, Z)) : (i = t.next) === null || i === void 0 || i.call(t, G) : Object.keys(G).length === 1 && "hasNext" in G && !G.hasNext && ((o = t.complete) === null || o === void 0 || o.call(t));
              } catch (H) {
                yl(H, t);
              }
            v = f.indexOf(l);
          }
          return [3, 1];
        case 3:
          return (a = t.complete) === null || a === void 0 || a.call(t), [2];
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
function Zp(e, t) {
  if (e.status >= 300) {
    var r = function() {
      try {
        return JSON.parse(t);
      } catch {
        return t;
      }
    };
    sc(e, r(), "Response not successful: Received status code ".concat(e.status));
  }
  try {
    return JSON.parse(t);
  } catch (i) {
    var n = i;
    throw n.name = "ServerParseError", n.response = e, n.statusCode = e.status, n.bodyText = t, n;
  }
}
function yl(e, t) {
  var r, n;
  e.name !== "AbortError" && (e.result && e.result.errors && e.result.data && ((r = t.next) === null || r === void 0 || r.call(t, e.result)), (n = t.error) === null || n === void 0 || n.call(t, e));
}
function dI(e, t, r) {
  hI(t)(e).then(function(n) {
    var i, o;
    (i = r.next) === null || i === void 0 || i.call(r, n), (o = r.complete) === null || o === void 0 || o.call(r);
  }).catch(function(n) {
    return yl(n, r);
  });
}
function hI(e) {
  return function(t) {
    return t.text().then(function(r) {
      return Zp(t, r);
    }).then(function(r) {
      return t.status >= 300 && sc(t, r, "Response not successful: Received status code ".concat(t.status)), !Array.isArray(r) && !Nf.call(r, "data") && !Nf.call(r, "errors") && sc(t, r, "Server response was missing for query '".concat(Array.isArray(e) ? e.map(function(n) {
        return n.operationName;
      }) : e.operationName, "'.")), r;
    });
  };
}
var cc = function(e, t) {
  var r;
  try {
    r = JSON.stringify(e);
  } catch (i) {
    var n = __DEV__ ? new Ee("Network request failed. ".concat(t, " is not serializable: ").concat(i.message)) : new Ee(24);
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
}, EI = {
  method: "POST"
}, TI = {
  http: pI,
  headers: mI,
  options: EI
}, OI = function(e, t) {
  return t(e);
};
function RI(e, t) {
  for (var r = [], n = 2; n < arguments.length; n++)
    r[n - 2] = arguments[n];
  var i = {}, o = {};
  r.forEach(function(l) {
    i = g(g(g({}, i), l.options), { headers: g(g({}, i.headers), l.headers) }), l.credentials && (i.credentials = l.credentials), o = g(g({}, o), l.http);
  }), i.headers && (i.headers = vI(i.headers, o.preserveHeaderCase));
  var a = e.operationName, s = e.extensions, u = e.variables, c = e.query, _ = { operationName: a, variables: u };
  return o.includeExtensions && (_.extensions = s), o.includeQuery && (_.query = t(c, Qb)), {
    options: i,
    body: _
  };
}
function vI(e, t) {
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
var bI = function(e) {
  if (!e && typeof fetch > "u")
    throw __DEV__ ? new Ee(`
"fetch" has not been found globally and no fetcher has been configured. To fix this, install a fetch package (like https://www.npmjs.com/package/cross-fetch), instantiate the fetcher, and pass it into your HttpLink constructor. For example:

import fetch from 'cross-fetch';
import { ApolloClient, HttpLink } from '@apollo/client';
const client = new ApolloClient({
  link: new HttpLink({ uri: '/graphql', fetch })
});
    `) : new Ee(23);
}, gI = function() {
  if (typeof AbortController > "u")
    return { controller: !1, signal: !1 };
  var e = new AbortController(), t = e.signal;
  return { controller: e, signal: t };
}, II = function(e, t) {
  var r = e.getContext(), n = r.uri;
  return n || (typeof t == "function" ? t(e) : t || "/graphql");
};
function NI(e, t) {
  var r = [], n = function(l, f) {
    r.push("".concat(l, "=").concat(encodeURIComponent(f)));
  };
  if ("query" in t && n("query", t.query), t.operationName && n("operationName", t.operationName), t.variables) {
    var i = void 0;
    try {
      i = cc(t.variables, "Variables map");
    } catch (l) {
      return { parseError: l };
    }
    n("variables", i);
  }
  if (t.extensions) {
    var o = void 0;
    try {
      o = cc(t.extensions, "Extensions map");
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
var Af = Tt(function() {
  return fetch;
}), em = function(e) {
  e === void 0 && (e = {});
  var t = e.uri, r = t === void 0 ? "/graphql" : t, n = e.fetch, i = e.print, o = i === void 0 ? OI : i, a = e.includeExtensions, s = e.preserveHeaderCase, u = e.useGETForQueries, c = e.includeUnusedVariables, _ = c === void 0 ? !1 : c, l = nn(e, ["uri", "fetch", "print", "includeExtensions", "preserveHeaderCase", "useGETForQueries", "includeUnusedVariables"]);
  __DEV__ && bI(n || Af);
  var f = {
    http: { includeExtensions: a, preserveHeaderCase: s },
    options: l.fetchOptions,
    credentials: l.credentials,
    headers: l.headers
  };
  return new ii(function(h) {
    var d = II(h, r), p = h.getContext(), m = {};
    if (p.clientAwareness) {
      var O = p.clientAwareness, E = O.name, T = O.version;
      E && (m["apollographql-client-name"] = E), T && (m["apollographql-client-version"] = T);
    }
    var v = g(g({}, m), p.headers), R = {
      http: p.http,
      options: p.fetchOptions,
      credentials: p.credentials,
      headers: v
    }, N = RI(h, o, TI, f, R), I = N.options, C = N.body;
    if (C.variables && !_) {
      var D = new Set(Object.keys(C.variables));
      dr(h.query, {
        Variable: function(U, L, M) {
          M && M.kind !== "VariableDefinition" && D.delete(U.name.value);
        }
      }), D.size && (C.variables = g({}, C.variables), D.forEach(function(U) {
        delete C.variables[U];
      }));
    }
    var G;
    if (!I.signal) {
      var Z = gI(), re = Z.controller, J = Z.signal;
      G = re, G && (I.signal = J);
    }
    var x = function(U) {
      return U.kind === "OperationDefinition" && U.operation === "mutation";
    }, H = function(U) {
      return U.kind === "OperationDefinition" && U.operation === "subscription";
    }, Q = H(Ts(h.query)), ue = hl(["defer"], h.query);
    if (u && !h.query.definitions.some(x) && (I.method = "GET"), ue || Q) {
      I.headers = I.headers || {};
      var ie = "multipart/mixed;";
      Q && ue && __DEV__ && k.warn("Multipart-subscriptions do not support @defer"), Q ? ie += "boundary=graphql;subscriptionSpec=1.0,application/json" : ue && (ie += "deferSpec=20220824,application/json"), I.headers.accept = ie;
    }
    if (I.method === "GET") {
      var Se = NI(d, C), Be = Se.newURI, Ae = Se.parseError;
      if (Ae)
        return bf(Ae);
      d = Be;
    } else
      try {
        I.body = cc(C, "Payload");
      } catch (U) {
        return bf(U);
      }
    return new ye(function(U) {
      var L = n || Tt(function() {
        return fetch;
      }) || Af;
      return L(d, I).then(function(M) {
        var V;
        h.setContext({ response: M });
        var b = (V = M.headers) === null || V === void 0 ? void 0 : V.get("content-type");
        return b !== null && /^multipart\/mixed/i.test(b) ? _I(M, U) : dI(M, h, U);
      }).catch(function(M) {
        return yl(M, U);
      }), function() {
        G && G.abort();
      };
    });
  });
}, AI = function(e) {
  Bt(t, e);
  function t(r) {
    r === void 0 && (r = {});
    var n = e.call(this, em(r).request) || this;
    return n.options = r, n;
  }
  return t;
}(ii);
const { toString: yf, hasOwnProperty: yI } = Object.prototype, Sf = Function.prototype.toString, lc = /* @__PURE__ */ new Map();
function xe(e, t) {
  try {
    return _c(e, t);
  } finally {
    lc.clear();
  }
}
function _c(e, t) {
  if (e === t)
    return !0;
  const r = yf.call(e), n = yf.call(t);
  if (r !== n)
    return !1;
  switch (r) {
    case "[object Array]":
      if (e.length !== t.length)
        return !1;
    case "[object Object]": {
      if (Gf(e, t))
        return !0;
      const i = Df(e), o = Df(t), a = i.length;
      if (a !== o.length)
        return !1;
      for (let s = 0; s < a; ++s)
        if (!yI.call(t, i[s]))
          return !1;
      for (let s = 0; s < a; ++s) {
        const u = i[s];
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
      if (Gf(e, t))
        return !0;
      const i = e.entries(), o = r === "[object Map]";
      for (; ; ) {
        const a = i.next();
        if (a.done)
          break;
        const [s, u] = a.value;
        if (!t.has(s) || o && !_c(u, t.get(s)))
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
      const i = Sf.call(e);
      return i !== Sf.call(t) ? !1 : !GI(i, DI);
    }
  }
  return !1;
}
function Df(e) {
  return Object.keys(e).filter(SI, e);
}
function SI(e) {
  return this[e] !== void 0;
}
const DI = "{ [native code] }";
function GI(e, t) {
  const r = e.length - t.length;
  return r >= 0 && e.indexOf(t, r) === r;
}
function Gf(e, t) {
  let r = lc.get(e);
  if (r) {
    if (r.has(t))
      return !0;
  } else
    lc.set(e, r = /* @__PURE__ */ new Set());
  return r.add(t), !1;
}
var UI = function() {
  return /* @__PURE__ */ Object.create(null);
}, tm = Array.prototype, CI = tm.forEach, wI = tm.slice, PI = (
  /** @class */
  function() {
    function e(t, r) {
      t === void 0 && (t = !0), r === void 0 && (r = UI), this.weakness = t, this.makeData = r;
    }
    return e.prototype.lookup = function() {
      for (var t = [], r = 0; r < arguments.length; r++)
        t[r] = arguments[r];
      return this.lookupArray(t);
    }, e.prototype.lookupArray = function(t) {
      var r = this;
      return CI.call(t, function(n) {
        return r = r.getChildTrie(n);
      }), r.data || (r.data = this.makeData(wI.call(t)));
    }, e.prototype.getChildTrie = function(t) {
      var r = this.weakness && HI(t) ? this.weak || (this.weak = /* @__PURE__ */ new WeakMap()) : this.strong || (this.strong = /* @__PURE__ */ new Map()), n = r.get(t);
      return n || r.set(t, n = new e(this.weakness, this.makeData)), n;
    }, e;
  }()
);
function HI(e) {
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
const Uf = {};
let MI = 1;
const kI = () => class {
  constructor() {
    this.id = [
      "slot",
      MI++,
      Date.now(),
      Math.random().toString(36).slice(2)
    ].join(":");
  }
  hasValue() {
    for (let t = ze; t; t = t.parent)
      if (this.id in t.slots) {
        const r = t.slots[this.id];
        if (r === Uf)
          break;
        return t !== ze && (ze.slots[this.id] = r), !0;
      }
    return ze && (ze.slots[this.id] = Uf), !1;
  }
  getValue() {
    if (this.hasValue())
      return ze.slots[this.id];
  }
  withValue(t, r, n, i) {
    const o = {
      __proto__: null,
      [this.id]: t
    }, a = ze;
    ze = { parent: a, slots: o };
    try {
      return r.apply(i, n);
    } finally {
      ze = a;
    }
  }
  // Capture the current context and wrap a callback function so that it
  // reestablishes the captured context when called.
  static bind(t) {
    const r = ze;
    return function() {
      const n = ze;
      try {
        return ze = r, t.apply(this, arguments);
      } finally {
        ze = n;
      }
    };
  }
  // Immediately run a callback function without any captured context.
  static noContext(t, r, n) {
    if (ze) {
      const i = ze;
      try {
        return ze = null, t.apply(n, r);
      } finally {
        ze = i;
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
const hu = "@wry/context:Slot", LI = (
  // Prefer globalThis when available.
  // https://github.com/benjamn/wryware/issues/347
  Cf(() => globalThis) || // Fall back to global, which works in Node.js and may be converted by some
  // bundlers to the appropriate identifier (window, self, ...) depending on the
  // bundling target. https://github.com/endojs/endo/issues/576#issuecomment-1178515224
  Cf(() => global) || // Otherwise, use a dummy host that's local to this module. We used to fall
  // back to using the Array constructor as a namespace, but that was flagged in
  // https://github.com/benjamn/wryware/issues/347, and can be avoided.
  /* @__PURE__ */ Object.create(null)
), wf = LI, rm = wf[hu] || // Earlier versions of this package stored the globalKey property on the Array
// constructor, so we check there as well, to prevent Slot class duplication.
Array[hu] || function(e) {
  try {
    Object.defineProperty(wf, hu, {
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
}(kI());
function BI() {
}
var xI = (
  /** @class */
  function() {
    function e(t, r) {
      t === void 0 && (t = 1 / 0), r === void 0 && (r = BI), this.max = t, this.dispose = r, this.map = /* @__PURE__ */ new Map(), this.newest = null, this.oldest = null;
    }
    return e.prototype.has = function(t) {
      return this.map.has(t);
    }, e.prototype.get = function(t) {
      var r = this.getNode(t);
      return r && r.value;
    }, e.prototype.getNode = function(t) {
      var r = this.map.get(t);
      if (r && r !== this.newest) {
        var n = r.older, i = r.newer;
        i && (i.older = n), n && (n.newer = i), r.older = this.newest, r.older.newer = r, r.newer = null, this.newest = r, r === this.oldest && (this.oldest = i);
      }
      return r;
    }, e.prototype.set = function(t, r) {
      var n = this.getNode(t);
      return n ? n.value = r : (n = {
        key: t,
        value: r,
        newer: null,
        older: this.newest
      }, this.newest && (this.newest.newer = n), this.newest = n, this.oldest = this.oldest || n, this.map.set(t, n), n.value);
    }, e.prototype.clean = function() {
      for (; this.oldest && this.map.size > this.max; )
        this.delete(this.oldest.key);
    }, e.prototype.delete = function(t) {
      var r = this.map.get(t);
      return r ? (r === this.newest && (this.newest = r.older), r === this.oldest && (this.oldest = r.newer), r.newer && (r.newer.older = r.older), r.older && (r.older.newer = r.newer), this.map.delete(t), this.dispose(r.value, t), !0) : !1;
    }, e;
  }()
), vs = new rm(), pu, FI = Object.prototype.hasOwnProperty, Sl = (pu = Array.from, pu === void 0 ? function(e) {
  var t = [];
  return e.forEach(function(r) {
    return t.push(r);
  }), t;
} : pu);
function xa(e) {
  var t = e.unsubscribe;
  typeof t == "function" && (e.unsubscribe = void 0, t());
}
var zi = [], jI = 100;
function zn(e, t) {
  if (!e)
    throw new Error(t || "assertion failure");
}
function VI(e, t) {
  var r = e.length;
  return (
    // Unknown values are not equal to each other.
    r > 0 && // Both values must be ordinary (or both exceptional) to be equal.
    r === t.length && // The underlying value or exception must be the same.
    e[r - 1] === t[r - 1]
  );
}
function nm(e) {
  switch (e.length) {
    case 0:
      throw new Error("unknown value");
    case 1:
      return e[0];
    case 2:
      throw e[1];
  }
}
function WI(e) {
  return e.slice(0);
}
var XI = (
  /** @class */
  function() {
    function e(t) {
      this.fn = t, this.parents = /* @__PURE__ */ new Set(), this.childValues = /* @__PURE__ */ new Map(), this.dirtyChildren = null, this.dirty = !0, this.recomputing = !1, this.value = [], this.deps = null, ++e.count;
    }
    return e.prototype.peek = function() {
      if (this.value.length === 1 && !jr(this))
        return Pf(this), this.value[0];
    }, e.prototype.recompute = function(t) {
      return zn(!this.recomputing, "already recomputing"), Pf(this), jr(this) ? YI(this, t) : nm(this.value);
    }, e.prototype.setDirty = function() {
      this.dirty || (this.dirty = !0, this.value.length = 0, im(this), xa(this));
    }, e.prototype.dispose = function() {
      var t = this;
      this.setDirty(), cm(this), Dl(this, function(r, n) {
        r.setDirty(), lm(r, t);
      });
    }, e.prototype.forget = function() {
      this.dispose();
    }, e.prototype.dependOn = function(t) {
      t.add(this), this.deps || (this.deps = zi.pop() || /* @__PURE__ */ new Set()), this.deps.add(t);
    }, e.prototype.forgetDeps = function() {
      var t = this;
      this.deps && (Sl(this.deps).forEach(function(r) {
        return r.delete(t);
      }), this.deps.clear(), zi.push(this.deps), this.deps = null);
    }, e.count = 0, e;
  }()
);
function Pf(e) {
  var t = vs.getValue();
  if (t)
    return e.parents.add(t), t.childValues.has(e) || t.childValues.set(e, []), jr(e) ? am(t, e) : sm(t, e), t;
}
function YI(e, t) {
  return cm(e), vs.withValue(e, KI, [e, t]), zI(e, t) && $I(e), nm(e.value);
}
function KI(e, t) {
  e.recomputing = !0, e.value.length = 0;
  try {
    e.value[0] = e.fn.apply(null, t);
  } catch (r) {
    e.value[1] = r;
  }
  e.recomputing = !1;
}
function jr(e) {
  return e.dirty || !!(e.dirtyChildren && e.dirtyChildren.size);
}
function $I(e) {
  e.dirty = !1, !jr(e) && om(e);
}
function im(e) {
  Dl(e, am);
}
function om(e) {
  Dl(e, sm);
}
function Dl(e, t) {
  var r = e.parents.size;
  if (r)
    for (var n = Sl(e.parents), i = 0; i < r; ++i)
      t(n[i], e);
}
function am(e, t) {
  zn(e.childValues.has(t)), zn(jr(t));
  var r = !jr(e);
  if (!e.dirtyChildren)
    e.dirtyChildren = zi.pop() || /* @__PURE__ */ new Set();
  else if (e.dirtyChildren.has(t))
    return;
  e.dirtyChildren.add(t), r && im(e);
}
function sm(e, t) {
  zn(e.childValues.has(t)), zn(!jr(t));
  var r = e.childValues.get(t);
  r.length === 0 ? e.childValues.set(t, WI(t.value)) : VI(r, t.value) || e.setDirty(), um(e, t), !jr(e) && om(e);
}
function um(e, t) {
  var r = e.dirtyChildren;
  r && (r.delete(t), r.size === 0 && (zi.length < jI && zi.push(r), e.dirtyChildren = null));
}
function cm(e) {
  e.childValues.size > 0 && e.childValues.forEach(function(t, r) {
    lm(e, r);
  }), e.forgetDeps(), zn(e.dirtyChildren === null);
}
function lm(e, t) {
  t.parents.delete(e), e.childValues.delete(t), um(e, t);
}
function zI(e, t) {
  if (typeof e.subscribe == "function")
    try {
      xa(e), e.unsubscribe = e.subscribe.apply(null, t);
    } catch {
      return e.setDirty(), !1;
    }
  return !0;
}
var qI = {
  setDirty: !0,
  dispose: !0,
  forget: !0
  // Fully remove parent Entry from LRU cache and computation graph
};
function _m(e) {
  var t = /* @__PURE__ */ new Map(), r = e && e.subscribe;
  function n(i) {
    var o = vs.getValue();
    if (o) {
      var a = t.get(i);
      a || t.set(i, a = /* @__PURE__ */ new Set()), o.dependOn(a), typeof r == "function" && (xa(a), a.unsubscribe = r(i));
    }
  }
  return n.dirty = function(o, a) {
    var s = t.get(o);
    if (s) {
      var u = a && FI.call(qI, a) ? a : "setDirty";
      Sl(s).forEach(function(c) {
        return c[u]();
      }), t.delete(o), xa(s);
    }
  }, n;
}
function fm() {
  var e = new PI(typeof WeakMap == "function");
  return function() {
    return e.lookupArray(arguments);
  };
}
fm();
var mu = /* @__PURE__ */ new Set();
function Fa(e, t) {
  t === void 0 && (t = /* @__PURE__ */ Object.create(null));
  var r = new xI(t.max || Math.pow(2, 16), function(c) {
    return c.dispose();
  }), n = t.keyArgs, i = t.makeCacheKey || fm(), o = function() {
    var c = i.apply(null, n ? n.apply(null, arguments) : arguments);
    if (c === void 0)
      return e.apply(null, arguments);
    var _ = r.get(c);
    _ || (r.set(c, _ = new XI(e)), _.subscribe = t.subscribe, _.forget = function() {
      return r.delete(c);
    });
    var l = _.recompute(Array.prototype.slice.call(arguments));
    return r.set(c, _), mu.add(r), vs.hasValue() || (mu.forEach(function(f) {
      return f.clean();
    }), mu.clear()), l;
  };
  Object.defineProperty(o, "size", {
    get: function() {
      return r.map.size;
    },
    configurable: !1,
    enumerable: !1
  });
  function a(c) {
    var _ = r.get(c);
    _ && _.setDirty();
  }
  o.dirtyKey = a, o.dirty = function() {
    a(i.apply(null, arguments));
  };
  function s(c) {
    var _ = r.get(c);
    if (_)
      return _.peek();
  }
  o.peekKey = s, o.peek = function() {
    return s(i.apply(null, arguments));
  };
  function u(c) {
    return r.delete(c);
  }
  return o.forgetKey = u, o.forget = function() {
    return u(i.apply(null, arguments));
  }, o.makeCacheKey = i, o.getKey = n ? function() {
    return i.apply(null, n.apply(null, arguments));
  } : i, Object.freeze(o);
}
var JI = function() {
  function e() {
    this.getFragmentDoc = Fa(ag);
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
    return r === void 0 && (r = !!t.optimistic), this.read(g(g({}, t), { rootId: t.id || "ROOT_QUERY", optimistic: r }));
  }, e.prototype.readFragment = function(t, r) {
    return r === void 0 && (r = !!t.optimistic), this.read(g(g({}, t), { query: this.getFragmentDoc(t.fragment, t.fragmentName), rootId: t.id, optimistic: r }));
  }, e.prototype.writeQuery = function(t) {
    var r = t.id, n = t.data, i = nn(t, ["id", "data"]);
    return this.write(Object.assign(i, {
      dataId: r || "ROOT_QUERY",
      result: n
    }));
  }, e.prototype.writeFragment = function(t) {
    var r = t.id, n = t.data, i = t.fragment, o = t.fragmentName, a = nn(t, ["id", "data", "fragment", "fragmentName"]);
    return this.write(Object.assign(a, {
      query: this.getFragmentDoc(i, o),
      dataId: r,
      result: n
    }));
  }, e.prototype.updateQuery = function(t, r) {
    return this.batch({
      update: function(n) {
        var i = n.readQuery(t), o = r(i);
        return o == null ? i : (n.writeQuery(g(g({}, t), { data: o })), o);
      }
    });
  }, e.prototype.updateFragment = function(t, r) {
    return this.batch({
      update: function(n) {
        var i = n.readFragment(t), o = r(i);
        return o == null ? i : (n.writeFragment(g(g({}, t), { data: o })), o);
      }
    });
  }, e;
}(), dm = function(e) {
  Bt(t, e);
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
}(Error);
const QI = () => /* @__PURE__ */ Object.create(null), { forEach: ZI, slice: eN } = Array.prototype, { hasOwnProperty: tN } = Object.prototype;
class oi {
  constructor(t = !0, r = QI) {
    this.weakness = t, this.makeData = r;
  }
  lookup(...t) {
    return this.lookupArray(t);
  }
  lookupArray(t) {
    let r = this;
    return ZI.call(t, (n) => r = r.getChildTrie(n)), tN.call(r, "data") ? r.data : r.data = this.makeData(eN.call(t));
  }
  peek(...t) {
    return this.peekArray(t);
  }
  peekArray(t) {
    let r = this;
    for (let n = 0, i = t.length; r && n < i; ++n) {
      const o = this.weakness && Hf(t[n]) ? r.weak : r.strong;
      r = o && o.get(t[n]);
    }
    return r && r.data;
  }
  getChildTrie(t) {
    const r = this.weakness && Hf(t) ? this.weak || (this.weak = /* @__PURE__ */ new WeakMap()) : this.strong || (this.strong = /* @__PURE__ */ new Map());
    let n = r.get(t);
    return n || r.set(t, n = new oi(this.weakness, this.makeData)), n;
  }
}
function Hf(e) {
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
function Ti(e) {
  return e == null;
}
function hm(e, t) {
  var r = e.__typename, n = e.id, i = e._id;
  if (typeof r == "string" && (t && (t.keyObject = Ti(n) ? Ti(i) ? void 0 : { _id: i } : { id: n }), Ti(n) && !Ti(i) && (n = i), !Ti(n)))
    return "".concat(r, ":").concat(typeof n == "number" || typeof n == "string" ? n : JSON.stringify(n));
}
var pm = {
  dataIdFromObject: hm,
  addTypename: !0,
  resultCaching: !0,
  canonizeResults: !1
};
function rN(e) {
  return Rs(pm, e);
}
function mm(e) {
  var t = e.canonizeResults;
  return t === void 0 ? pm.canonizeResults : t;
}
function nN(e, t) {
  return ge(t) ? e.get(t.__ref, "__typename") : t && t.__typename;
}
var Em = /^[_a-z][_0-9a-z]*/i;
function Vr(e) {
  var t = e.match(Em);
  return t ? t[0] : e;
}
function fc(e, t, r) {
  return Ce(t) ? He(t) ? t.every(function(n) {
    return fc(e, n, r);
  }) : e.selections.every(function(n) {
    if (an(n) && ps(n, r)) {
      var i = on(n);
      return We.call(t, i) && (!n.selectionSet || fc(n.selectionSet, t[i], r));
    }
    return !0;
  }) : !1;
}
function An(e) {
  return Ce(e) && !ge(e) && !He(e);
}
function iN() {
  return new Fr();
}
function Tm(e, t) {
  var r = pl(Tl(e));
  return {
    fragmentMap: r,
    lookupFragment: function(n) {
      var i = r[n];
      return !i && t && (i = t.lookup(n)), i || null;
    }
  };
}
var la = /* @__PURE__ */ Object.create(null), Eu = function() {
  return la;
}, Mf = /* @__PURE__ */ Object.create(null), qi = function() {
  function e(t, r) {
    var n = this;
    this.policies = t, this.group = r, this.data = /* @__PURE__ */ Object.create(null), this.rootIds = /* @__PURE__ */ Object.create(null), this.refs = /* @__PURE__ */ Object.create(null), this.getFieldValue = function(i, o) {
      return ic(ge(i) ? n.get(i.__ref, o) : i && i[o]);
    }, this.canRead = function(i) {
      return ge(i) ? n.has(i.__ref) : typeof i == "object";
    }, this.toReference = function(i, o) {
      if (typeof i == "string")
        return Un(i);
      if (ge(i))
        return i;
      var a = n.policies.identify(i)[0];
      if (a) {
        var s = Un(a);
        return o && n.merge(a, i), s;
      }
    };
  }
  return e.prototype.toObject = function() {
    return g({}, this.data);
  }, e.prototype.has = function(t) {
    return this.lookup(t, !0) !== void 0;
  }, e.prototype.get = function(t, r) {
    if (this.group.depend(t, r), We.call(this.data, t)) {
      var n = this.data[t];
      if (n && We.call(n, r))
        return n[r];
    }
    if (r === "__typename" && We.call(this.policies.rootTypenamesById, t))
      return this.policies.rootTypenamesById[t];
    if (this instanceof br)
      return this.parent.get(t, r);
  }, e.prototype.lookup = function(t, r) {
    if (r && this.group.depend(t, "__exists"), We.call(this.data, t))
      return this.data[t];
    if (this instanceof br)
      return this.parent.lookup(t, r);
    if (this.policies.rootTypenamesById[t])
      return /* @__PURE__ */ Object.create(null);
  }, e.prototype.merge = function(t, r) {
    var n = this, i;
    ge(t) && (t = t.__ref), ge(r) && (r = r.__ref);
    var o = typeof t == "string" ? this.lookup(i = t) : t, a = typeof r == "string" ? this.lookup(i = r) : r;
    if (a) {
      __DEV__ ? k(typeof i == "string", "store.merge expects a string ID") : k(typeof i == "string", 1);
      var s = new Fr(aN).merge(o, a);
      if (this.data[i] = s, s !== o && (delete this.refs[i], this.group.caching)) {
        var u = /* @__PURE__ */ Object.create(null);
        o || (u.__exists = 1), Object.keys(a).forEach(function(c) {
          if (!o || o[c] !== s[c]) {
            u[c] = 1;
            var _ = Vr(c);
            _ !== c && !n.policies.hasKeyArgs(s.__typename, _) && (u[_] = 1), s[c] === void 0 && !(n instanceof br) && delete s[c];
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
        DELETE: la,
        INVALIDATE: Mf,
        isReference: ge,
        toReference: this.toReference,
        canRead: this.canRead,
        readField: function(c, _) {
          return n.policies.readField(typeof c == "string" ? {
            fieldName: c,
            from: _ || Un(t)
          } : c, { store: n });
        }
      };
      if (Object.keys(i).forEach(function(c) {
        var _ = Vr(c), l = i[c];
        if (l !== void 0) {
          var f = typeof r == "function" ? r : r[c] || r[_];
          if (f) {
            var h = f === Eu ? la : f(ic(l), g(g({}, u), { fieldName: _, storeFieldName: c, storage: n.getStorage(t, c) }));
            h === Mf ? n.group.dirty(t, c) : (h === la && (h = void 0), h !== l && (o[c] = h, a = !0, l = h));
          }
          l !== void 0 && (s = !1);
        }
      }), a)
        return this.merge(t, o), s && (this instanceof br ? this.data[t] = void 0 : delete this.data[t], this.group.dirty(t, "__exists")), !0;
    }
    return !1;
  }, e.prototype.delete = function(t, r, n) {
    var i, o = this.lookup(t);
    if (o) {
      var a = this.getFieldValue(o, "__typename"), s = r && n ? this.policies.getStoreFieldName({ typename: a, fieldName: r, args: n }) : r;
      return this.modify(t, s ? (i = {}, i[s] = Eu, i) : Eu);
    }
    return !1;
  }, e.prototype.evict = function(t, r) {
    var n = !1;
    return t.id && (We.call(this.data, t.id) && (n = this.delete(t.id, t.fieldName, t.args)), this instanceof br && this !== r && (n = this.parent.evict(t, r) || n), (t.fieldName || n) && this.group.dirty(t.id, t.fieldName || "__exists")), n;
  }, e.prototype.clear = function() {
    this.replace(null);
  }, e.prototype.extract = function() {
    var t = this, r = this.toObject(), n = [];
    return this.getRootIdSet().forEach(function(i) {
      We.call(t.policies.rootTypenamesById, i) || n.push(i);
    }), n.length && (r.__META = { extraRootIds: n.sort() }), r;
  }, e.prototype.replace = function(t) {
    var r = this;
    if (Object.keys(this.data).forEach(function(o) {
      t && We.call(t, o) || r.delete(o);
    }), t) {
      var n = t.__META, i = nn(t, ["__META"]);
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
    return t === void 0 && (t = /* @__PURE__ */ new Set()), Object.keys(this.rootIds).forEach(t.add, t), this instanceof br ? this.parent.getRootIdSet(t) : Object.keys(this.policies.rootTypenamesById).forEach(t.add, t), t;
  }, e.prototype.gc = function() {
    var t = this, r = this.getRootIdSet(), n = this.toObject();
    r.forEach(function(a) {
      We.call(n, a) && (Object.keys(t.findChildRefIds(a)).forEach(r.add, r), delete n[a]);
    });
    var i = Object.keys(n);
    if (i.length) {
      for (var o = this; o instanceof br; )
        o = o.parent;
      i.forEach(function(a) {
        return o.delete(a);
      });
    }
    return i;
  }, e.prototype.findChildRefIds = function(t) {
    if (!We.call(this.refs, t)) {
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
}(), Om = function() {
  function e(t, r) {
    r === void 0 && (r = null), this.caching = t, this.parent = r, this.d = null, this.resetCaching();
  }
  return e.prototype.resetCaching = function() {
    this.d = this.caching ? _m() : null, this.keyMaker = new oi(ln);
  }, e.prototype.depend = function(t, r) {
    if (this.d) {
      this.d(Tu(t, r));
      var n = Vr(r);
      n !== r && this.d(Tu(t, n)), this.parent && this.parent.depend(t, r);
    }
  }, e.prototype.dirty = function(t, r) {
    this.d && this.d.dirty(Tu(t, r), r === "__exists" ? "forget" : "setDirty");
  }, e;
}();
function Tu(e, t) {
  return t + "#" + e;
}
function kf(e, t) {
  Pi(e) && e.group.depend(t, "__exists");
}
(function(e) {
  var t = function(r) {
    Bt(n, r);
    function n(i) {
      var o = i.policies, a = i.resultCaching, s = a === void 0 ? !0 : a, u = i.seed, c = r.call(this, o, new Om(s)) || this;
      return c.stump = new oN(c), c.storageTrie = new oi(ln), u && c.replace(u), c;
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
})(qi || (qi = {}));
var br = function(e) {
  Bt(t, e);
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
        xe(a[u], s[u]) || n.group.dirty(o, u);
      }) : (n.group.dirty(o, "__exists"), Object.keys(s).forEach(function(u) {
        n.group.dirty(o, u);
      })) : n.delete(o);
    }), i) : i === this.parent ? this : i.addLayer(this.id, this.replay);
  }, t.prototype.toObject = function() {
    return g(g({}, this.parent.toObject()), this.data);
  }, t.prototype.findChildRefIds = function(r) {
    var n = this.parent.findChildRefIds(r);
    return We.call(this.data, r) ? g(g({}, n), e.prototype.findChildRefIds.call(this, r)) : n;
  }, t.prototype.getStorage = function() {
    for (var r = this.parent; r.parent; )
      r = r.parent;
    return r.getStorage.apply(r, arguments);
  }, t;
}(qi), oN = function(e) {
  Bt(t, e);
  function t(r) {
    return e.call(this, "EntityStore.Stump", r, function() {
    }, new Om(r.group.caching, r.group)) || this;
  }
  return t.prototype.removeLayer = function() {
    return this;
  }, t.prototype.merge = function() {
    return this.parent.merge.apply(this.parent, arguments);
  }, t;
}(br);
function aN(e, t, r) {
  var n = e[r], i = t[r];
  return xe(n, i) ? n : i;
}
function Pi(e) {
  return !!(e instanceof qi && e.group.caching);
}
function sN(e) {
  return Ce(e) ? He(e) ? e.slice(0) : g({ __proto__: Object.getPrototypeOf(e) }, e) : e;
}
var dc = function() {
  function e() {
    this.known = new (jg ? WeakSet : Set)(), this.pool = new oi(ln), this.passes = /* @__PURE__ */ new WeakMap(), this.keysByJSON = /* @__PURE__ */ new Map(), this.empty = this.admit({});
  }
  return e.prototype.isKnown = function(t) {
    return Ce(t) && this.known.has(t);
  }, e.prototype.pass = function(t) {
    if (Ce(t)) {
      var r = sN(t);
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
          return a.array || (this.known.add(a.array = o), __DEV__ && Object.freeze(o)), a.array;
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
            }), __DEV__ && Object.freeze(l);
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
}(), en = Object.assign(function(e) {
  if (Ce(e)) {
    hc === void 0 && Lf();
    var t = hc.admit(e), r = pc.get(t);
    return r === void 0 && pc.set(t, r = JSON.stringify(t)), r;
  }
  return JSON.stringify(e);
}, {
  reset: Lf
}), hc, pc;
function Lf() {
  hc = new dc(), pc = new (ln ? WeakMap : Map)();
}
function Bf(e) {
  return [
    e.selectionSet,
    e.objectOrReference,
    e.context,
    e.context.canonizeResults
  ];
}
var uN = function() {
  function e(t) {
    var r = this;
    this.knownResults = new (ln ? WeakMap : Map)(), this.config = Rs(t, {
      addTypename: t.addTypename !== !1,
      canonizeResults: mm(t)
    }), this.canon = t.canon || new dc(), this.executeSelectionSet = Fa(function(n) {
      var i, o = n.context.canonizeResults, a = Bf(n);
      a[3] = !o;
      var s = (i = r.executeSelectionSet).peek.apply(i, a);
      return s ? o ? g(g({}, s), { result: r.canon.admit(s.result) }) : s : (kf(n.context.store, n.enclosingRef.__ref), r.execSelectionSetImpl(n));
    }, {
      max: this.config.resultCacheMaxSize,
      keyArgs: Bf,
      makeCacheKey: function(n, i, o, a) {
        if (Pi(o.store))
          return o.store.makeCacheKey(n, ge(i) ? i.__ref : i, o.varString, a);
      }
    }), this.executeSubSelectedArray = Fa(function(n) {
      return kf(n.context.store, n.enclosingRef.__ref), r.execSubSelectedArrayImpl(n);
    }, {
      max: this.config.resultCacheMaxSize,
      makeCacheKey: function(n) {
        var i = n.field, o = n.array, a = n.context;
        if (Pi(a.store))
          return a.store.makeCacheKey(i, o, a.varString);
      }
    });
  }
  return e.prototype.resetCanon = function() {
    this.canon = new dc();
  }, e.prototype.diffQueryAgainstStore = function(t) {
    var r = t.store, n = t.query, i = t.rootId, o = i === void 0 ? "ROOT_QUERY" : i, a = t.variables, s = t.returnPartialData, u = s === void 0 ? !0 : s, c = t.canonizeResults, _ = c === void 0 ? this.config.canonizeResults : c, l = this.config.cache.policies;
    a = g(g({}, Ol(Vp(n))), a);
    var f = Un(o), h = this.executeSelectionSet({
      selectionSet: Ts(n).selectionSet,
      objectOrReference: f,
      enclosingRef: f,
      context: g({ store: r, query: n, policies: l, variables: a, varString: en(a), canonizeResults: _ }, Tm(n, this.config.fragments))
    }), d;
    if (h.missing && (d = [new dm(cN(h.missing), h.missing, n, a)], !u))
      throw d[0];
    return {
      result: h.result,
      complete: !d,
      missing: d
    };
  }, e.prototype.isFresh = function(t, r, n, i) {
    if (Pi(i.store) && this.knownResults.get(t) === n) {
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
    var s = a.variables, u = a.policies, c = a.store, _ = c.getFieldValue(i, "__typename"), l = [], f, h = new Fr();
    this.config.addTypename && typeof _ == "string" && !u.rootIdsByTypename[_] && l.push({ __typename: _ });
    function d(T, v) {
      var R;
      return T.missing && (f = h.merge(f, (R = {}, R[v] = T.missing, R))), T.result;
    }
    var p = new Set(n.selections);
    p.forEach(function(T) {
      var v, R;
      if (ps(T, s))
        if (an(T)) {
          var N = u.readField({
            fieldName: T.name.value,
            field: T,
            variables: a.variables,
            from: i
          }, a), I = on(T);
          N === void 0 ? Rl.added(T) || (f = h.merge(f, (v = {}, v[I] = "Can't find field '".concat(T.name.value, "' on ").concat(ge(i) ? i.__ref + " object" : "object " + JSON.stringify(i, null, 2)), v))) : He(N) ? N = d(r.executeSubSelectedArray({
            field: T,
            array: N,
            enclosingRef: o,
            context: a
          }), I) : T.selectionSet ? N != null && (N = d(r.executeSelectionSet({
            selectionSet: T.selectionSet,
            objectOrReference: N,
            enclosingRef: ge(N) ? N : o,
            context: a
          }), I)) : a.canonizeResults && (N = r.canon.pass(N)), N !== void 0 && l.push((R = {}, R[I] = N, R));
        } else {
          var C = ml(T, a.lookupFragment);
          if (!C && T.kind === Xe.FRAGMENT_SPREAD)
            throw __DEV__ ? new Ee("No fragment named ".concat(T.name.value)) : new Ee(5);
          C && u.fragmentMatches(C, _) && C.selectionSet.selections.forEach(p.add, p);
        }
    });
    var m = vl(l), O = { result: m, missing: f }, E = a.canonizeResults ? this.canon.admit(O) : ic(O);
    return E.result && this.knownResults.set(E.result, n), E;
  }, e.prototype.execSubSelectedArrayImpl = function(t) {
    var r = this, n = t.field, i = t.array, o = t.enclosingRef, a = t.context, s, u = new Fr();
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
      }), l) : (__DEV__ && lN(a.store, n, _), _);
    }), {
      result: a.canonizeResults ? this.canon.admit(i) : i,
      missing: s
    };
  }, e;
}();
function cN(e) {
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
function lN(e, t, r) {
  if (!t.selectionSet) {
    var n = /* @__PURE__ */ new Set([r]);
    n.forEach(function(i) {
      Ce(i) && (__DEV__ ? k(!ge(i), "Missing selection set for object of type ".concat(nN(e, i), " returned for query field ").concat(t.name.value)) : k(!ge(i), 6), Object.values(i).forEach(n.add, n));
    });
  }
}
var Gl = new rm(), xf = /* @__PURE__ */ new WeakMap();
function Hi(e) {
  var t = xf.get(e);
  return t || xf.set(e, t = {
    vars: /* @__PURE__ */ new Set(),
    dep: _m()
  }), t;
}
function Ff(e) {
  Hi(e).vars.forEach(function(t) {
    return t.forgetCache(e);
  });
}
function _N(e) {
  Hi(e).vars.forEach(function(t) {
    return t.attachCache(e);
  });
}
function fN(e) {
  var t = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set(), n = function(o) {
    if (arguments.length > 0) {
      if (e !== o) {
        e = o, t.forEach(function(u) {
          Hi(u).dep.dirty(n), dN(u);
        });
        var a = Array.from(r);
        r.clear(), a.forEach(function(u) {
          return u(e);
        });
      }
    } else {
      var s = Gl.getValue();
      s && (i(s), Hi(s).dep(n));
    }
    return e;
  };
  n.onNextChange = function(o) {
    return r.add(o), function() {
      r.delete(o);
    };
  };
  var i = n.attachCache = function(o) {
    return t.add(o), Hi(o).vars.add(n), n;
  };
  return n.forgetCache = function(o) {
    return t.delete(o);
  }, n;
}
function dN(e) {
  e.broadcastWatches && e.broadcastWatches();
}
var jf = /* @__PURE__ */ Object.create(null);
function Ul(e) {
  var t = JSON.stringify(e);
  return jf[t] || (jf[t] = /* @__PURE__ */ Object.create(null));
}
function Vf(e) {
  var t = Ul(e);
  return t.keyFieldsFn || (t.keyFieldsFn = function(r, n) {
    var i = function(a, s) {
      return n.readField(s, a);
    }, o = n.keyObject = Cl(e, function(a) {
      var s = wn(n.storeObject, a, i);
      return s === void 0 && r !== n.storeObject && We.call(r, a[0]) && (s = wn(r, a, vm)), __DEV__ ? k(s !== void 0, "Missing field '".concat(a.join("."), "' while extracting keyFields from ").concat(JSON.stringify(r))) : k(s !== void 0, 2), s;
    });
    return "".concat(n.typename, ":").concat(JSON.stringify(o));
  });
}
function Wf(e) {
  var t = Ul(e);
  return t.keyArgsFn || (t.keyArgsFn = function(r, n) {
    var i = n.field, o = n.variables, a = n.fieldName, s = Cl(e, function(c) {
      var _ = c[0], l = _.charAt(0);
      if (l === "@") {
        if (i && zt(i.directives)) {
          var f = _.slice(1), h = i.directives.find(function(O) {
            return O.name.value === f;
          }), d = h && ms(h, o);
          return d && wn(d, c.slice(1));
        }
        return;
      }
      if (l === "$") {
        var p = _.slice(1);
        if (o && We.call(o, p)) {
          var m = c.slice(0);
          return m[0] = p, wn(o, m);
        }
        return;
      }
      if (r)
        return wn(r, c);
    }), u = JSON.stringify(s);
    return (r || u !== "{}") && (a += ":" + u), a;
  });
}
function Cl(e, t) {
  var r = new Fr();
  return Rm(e).reduce(function(n, i) {
    var o, a = t(i);
    if (a !== void 0) {
      for (var s = i.length - 1; s >= 0; --s)
        a = (o = {}, o[i[s]] = a, o);
      n = r.merge(n, a);
    }
    return n;
  }, /* @__PURE__ */ Object.create(null));
}
function Rm(e) {
  var t = Ul(e);
  if (!t.paths) {
    var r = t.paths = [], n = [];
    e.forEach(function(i, o) {
      He(i) ? (Rm(i).forEach(function(a) {
        return r.push(n.concat(a));
      }), n.length = 0) : (n.push(i), He(e[o + 1]) || (r.push(n.slice(0)), n.length = 0));
    });
  }
  return t.paths;
}
function vm(e, t) {
  return e[t];
}
function wn(e, t, r) {
  return r = r || vm, bm(t.reduce(function n(i, o) {
    return He(i) ? i.map(function(a) {
      return n(a, o);
    }) : i && r(i, o);
  }, e));
}
function bm(e) {
  return Ce(e) ? He(e) ? e.map(bm) : Cl(Object.keys(e).sort(), function(t) {
    return wn(e, t);
  }) : e;
}
El.setStringify(en);
function mc(e) {
  return e.args !== void 0 ? e.args : e.field ? ms(e.field, e.variables) : null;
}
var hN = function() {
}, Xf = function(e, t) {
  return t.fieldName;
}, Yf = function(e, t, r) {
  var n = r.mergeObjects;
  return n(e, t);
}, Kf = function(e, t) {
  return t;
}, pN = function() {
  function e(t) {
    this.config = t, this.typePolicies = /* @__PURE__ */ Object.create(null), this.toBeAdded = /* @__PURE__ */ Object.create(null), this.supertypeMap = /* @__PURE__ */ new Map(), this.fuzzySubtypes = /* @__PURE__ */ new Map(), this.rootIdsByTypename = /* @__PURE__ */ Object.create(null), this.rootTypenamesById = /* @__PURE__ */ Object.create(null), this.usingPossibleTypes = !1, this.config = g({ dataIdFromObject: hm }, t), this.cache = this.config.cache, this.setRootTypename("Query"), this.setRootTypename("Mutation"), this.setRootTypename("Subscription"), t.possibleTypes && this.addPossibleTypes(t.possibleTypes), t.typePolicies && this.addTypePolicies(t.typePolicies);
  }
  return e.prototype.identify = function(t, r) {
    var n, i = this, o = r && (r.typename || ((n = r.storeObject) === null || n === void 0 ? void 0 : n.__typename)) || t.__typename;
    if (o === this.rootTypenamesById.ROOT_QUERY)
      return ["ROOT_QUERY"];
    for (var a = r && r.storeObject || t, s = g(g({}, r), { typename: o, storeObject: a, readField: r && r.readField || function() {
      var f = wl(arguments, a);
      return i.readField(f, {
        store: i.cache.data,
        variables: f.variables
      });
    } }), u, c = o && this.getTypePolicy(o), _ = c && c.keyFn || this.config.dataIdFromObject; _; ) {
      var l = _(g(g({}, t), a), s);
      if (He(l))
        _ = Vf(l);
      else {
        u = l;
        break;
      }
    }
    return u = u ? String(u) : void 0, s.keyObject ? [u, s.keyObject] : [u];
  }, e.prototype.addTypePolicies = function(t) {
    var r = this;
    Object.keys(t).forEach(function(n) {
      var i = t[n], o = i.queryType, a = i.mutationType, s = i.subscriptionType, u = nn(i, ["queryType", "mutationType", "subscriptionType"]);
      o && r.setRootTypename("Query", n), a && r.setRootTypename("Mutation", n), s && r.setRootTypename("Subscription", n), We.call(r.toBeAdded, n) ? r.toBeAdded[n].push(u) : r.toBeAdded[n] = [u];
    });
  }, e.prototype.updateTypePolicy = function(t, r) {
    var n = this, i = this.getTypePolicy(t), o = r.keyFields, a = r.fields;
    function s(u, c) {
      u.merge = typeof c == "function" ? c : c === !0 ? Yf : c === !1 ? Kf : u.merge;
    }
    s(i, r.merge), i.keyFn = o === !1 ? hN : He(o) ? Vf(o) : typeof o == "function" ? o : i.keyFn, a && Object.keys(a).forEach(function(u) {
      var c = n.getFieldPolicy(t, u, !0), _ = a[u];
      if (typeof _ == "function")
        c.read = _;
      else {
        var l = _.keyArgs, f = _.read, h = _.merge;
        c.keyFn = l === !1 ? Xf : He(l) ? Wf(l) : typeof l == "function" ? l : c.keyFn, typeof f == "function" && (c.read = f), s(c, h);
      }
      c.read && c.merge && (c.keyFn = c.keyFn || Xf);
    });
  }, e.prototype.setRootTypename = function(t, r) {
    r === void 0 && (r = t);
    var n = "ROOT_" + t.toUpperCase(), i = this.rootTypenamesById[n];
    r !== i && (__DEV__ ? k(!i || i === t, "Cannot change root ".concat(t, " __typename more than once")) : k(!i || i === t, 3), i && delete this.rootIdsByTypename[i], this.rootIdsByTypename[r] = n, this.rootTypenamesById[n] = r);
  }, e.prototype.addPossibleTypes = function(t) {
    var r = this;
    this.usingPossibleTypes = !0, Object.keys(t).forEach(function(n) {
      r.getSupertypeSet(n, !0), t[n].forEach(function(i) {
        r.getSupertypeSet(i, !0).add(n);
        var o = i.match(Em);
        (!o || o[0] !== i) && r.fuzzySubtypes.set(i, new RegExp(i));
      });
    });
  }, e.prototype.getTypePolicy = function(t) {
    var r = this;
    if (!We.call(this.typePolicies, t)) {
      var n = this.typePolicies[t] = /* @__PURE__ */ Object.create(null);
      n.fields = /* @__PURE__ */ Object.create(null);
      var i = this.supertypeMap.get(t);
      i && i.size && i.forEach(function(a) {
        var s = r.getTypePolicy(a), u = s.fields, c = nn(s, ["fields"]);
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
          return s.has(a) || (l && __DEV__ && k.warn("Inferring subtype ".concat(r, " of supertype ").concat(a)), s.add(a)), !0;
        h.forEach(c), _ && f === u.length - 1 && fc(t.selectionSet, n, i) && (_ = !1, l = !0, this.fuzzySubtypes.forEach(function(d, p) {
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
      }, u = mc(t); a; ) {
        var c = a(u, s);
        if (He(c))
          a = Wf(c);
        else {
          o = c || n;
          break;
        }
      }
    return o === void 0 && (o = t.field ? Eg(t.field, t.variables) : El(n, mc(t))), o === !1 ? n : n === Vr(o) ? o : n + ":" + o;
  }, e.prototype.readField = function(t, r) {
    var n = t.from;
    if (n) {
      var i = t.field || t.fieldName;
      if (i) {
        if (t.typename === void 0) {
          var o = r.store.getFieldValue(n, "__typename");
          o && (t.typename = o);
        }
        var a = this.getStoreFieldName(t), s = Vr(a), u = r.store.getFieldValue(n, a), c = this.getFieldPolicy(t.typename, s, !1), _ = c && c.read;
        if (_) {
          var l = $f(this, n, t, r, r.store.getStorage(ge(n) ? n.__ref : n, a));
          return Gl.withValue(this.cache, _, [u, l]);
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
    return u === Yf ? gm(i.store)(t, r) : u === Kf ? r : (i.overwrite && (t = void 0), u(t, r, $f(this, void 0, { typename: s, fieldName: a.name.value, field: a, variables: i.variables }, i, o || /* @__PURE__ */ Object.create(null))));
  }, e;
}();
function $f(e, t, r, n, i) {
  var o = e.getStoreFieldName(r), a = Vr(o), s = r.variables || n.variables, u = n.store, c = u.toReference, _ = u.canRead;
  return {
    args: mc(r),
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
      return e.readField(wl(arguments, t, s), n);
    },
    mergeObjects: gm(n.store)
  };
}
function wl(e, t, r) {
  var n = e[0], i = e[1], o = e.length, a;
  return typeof n == "string" ? a = {
    fieldName: n,
    from: o > 1 ? i : t
  } : (a = g({}, n), We.call(a, "from") || (a.from = t)), __DEV__ && a.from === void 0 && __DEV__ && k.warn("Undefined 'from' passed to readField with arguments ".concat(Yg(Array.from(e)))), a.variables === void 0 && (a.variables = r), a;
}
function gm(e) {
  return function(r, n) {
    if (He(r) || He(n))
      throw __DEV__ ? new Ee("Cannot automatically merge arrays") : new Ee(4);
    if (Ce(r) && Ce(n)) {
      var i = e.getFieldValue(r, "__typename"), o = e.getFieldValue(n, "__typename"), a = i && o && i !== o;
      if (a)
        return n;
      if (ge(r) && An(n))
        return e.merge(r.__ref, n), r;
      if (An(r) && ge(n))
        return e.merge(r, n.__ref), n;
      if (An(r) && An(n))
        return g(g({}, r), n);
    }
    return n;
  };
}
function Ou(e, t, r) {
  var n = "".concat(t).concat(r), i = e.flavors.get(n);
  return i || e.flavors.set(n, i = e.clientOnly === t && e.deferred === r ? e : g(g({}, e), { clientOnly: t, deferred: r })), i;
}
var mN = function() {
  function e(t, r, n) {
    this.cache = t, this.reader = r, this.fragments = n;
  }
  return e.prototype.writeToStore = function(t, r) {
    var n = this, i = r.query, o = r.result, a = r.dataId, s = r.variables, u = r.overwrite, c = yo(i), _ = iN();
    s = g(g({}, Ol(c)), s);
    var l = g(g({ store: t, written: /* @__PURE__ */ Object.create(null), merge: function(h, d) {
      return _.merge(h, d);
    }, variables: s, varString: en(s) }, Tm(i, this.fragments)), { overwrite: !!u, incomingById: /* @__PURE__ */ new Map(), clientOnly: !1, deferred: !1, flavors: /* @__PURE__ */ new Map() }), f = this.processSelectionSet({
      result: o || /* @__PURE__ */ Object.create(null),
      dataId: a,
      selectionSet: c.selectionSet,
      mergeTree: { map: /* @__PURE__ */ new Map() },
      context: l
    });
    if (!ge(f))
      throw __DEV__ ? new Ee("Could not identify object ".concat(JSON.stringify(o))) : new Ee(7);
    return l.incomingById.forEach(function(h, d) {
      var p = h.storeObject, m = h.mergeTree, O = h.fieldNodeSet, E = Un(d);
      if (m && m.map.size) {
        var T = n.applyMerges(m, E, p, l);
        if (ge(T))
          return;
        p = T;
      }
      if (__DEV__ && !l.overwrite) {
        var v = /* @__PURE__ */ Object.create(null);
        O.forEach(function(I) {
          I.selectionSet && (v[I.name.value] = !0);
        });
        var R = function(I) {
          return v[Vr(I)] === !0;
        }, N = function(I) {
          var C = m && m.map.get(I);
          return !!(C && C.info && C.info.merge);
        };
        Object.keys(p).forEach(function(I) {
          R(I) && !N(I) && EN(E, p, I, l.store);
        });
      }
      t.merge(d, p);
    }), t.retain(f.__ref), f;
  }, e.prototype.processSelectionSet = function(t) {
    var r = this, n = t.dataId, i = t.result, o = t.selectionSet, a = t.context, s = t.mergeTree, u = this.cache.policies, c = /* @__PURE__ */ Object.create(null), _ = n && u.rootTypenamesById[n] || Zu(i, o, a.fragmentMap) || n && a.store.get(n, "__typename");
    typeof _ == "string" && (c.__typename = _);
    var l = function() {
      var T = wl(arguments, c, a.variables);
      if (ge(T.from)) {
        var v = a.incomingById.get(T.from.__ref);
        if (v) {
          var R = u.readField(g(g({}, T), { from: v.storeObject }), a);
          if (R !== void 0)
            return R;
        }
      }
      return u.readField(T, a);
    }, f = /* @__PURE__ */ new Set();
    this.flattenFields(o, i, a, _).forEach(function(T, v) {
      var R, N = on(v), I = i[N];
      if (f.add(v), I !== void 0) {
        var C = u.getStoreFieldName({
          typename: _,
          fieldName: v.name.value,
          field: v,
          variables: T.variables
        }), D = zf(s, C), G = r.processFieldValue(I, v, v.selectionSet ? Ou(T, !1, !1) : T, D), Z = void 0;
        v.selectionSet && (ge(G) || An(G)) && (Z = l("__typename", G));
        var re = u.getMergeFunction(_, v.name.value, Z);
        re ? D.info = {
          field: v,
          typename: _,
          merge: re
        } : qf(s, C), c = T.merge(c, (R = {}, R[C] = G, R));
      } else
        __DEV__ && !T.clientOnly && !T.deferred && !Rl.added(v) && !u.getReadFunction(_, v.name.value) && __DEV__ && k.error("Missing field '".concat(on(v), "' while writing result ").concat(JSON.stringify(i, null, 2)).substring(0, 1e3));
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
    } catch (T) {
      if (!n)
        throw T;
    }
    if (typeof n == "string") {
      var m = Un(n), O = a.written[n] || (a.written[n] = []);
      if (O.indexOf(o) >= 0 || (O.push(o), this.reader && this.reader.isFresh(i, m, o, a)))
        return m;
      var E = a.incomingById.get(n);
      return E ? (E.storeObject = a.merge(E.storeObject, c), E.mergeTree = Ec(E.mergeTree, s), f.forEach(function(T) {
        return E.fieldNodeSet.add(T);
      })) : a.incomingById.set(n, {
        storeObject: c,
        mergeTree: ja(s) ? void 0 : s,
        fieldNodeSet: f
      }), m;
    }
    return c;
  }, e.prototype.processFieldValue = function(t, r, n, i) {
    var o = this;
    return !r.selectionSet || t === null ? __DEV__ ? zp(t) : t : He(t) ? t.map(function(a, s) {
      var u = o.processFieldValue(a, r, n, zf(i, s));
      return qf(i, s), u;
    }) : this.processSelectionSet({
      result: t,
      selectionSet: r.selectionSet,
      context: n,
      mergeTree: i
    });
  }, e.prototype.flattenFields = function(t, r, n, i) {
    i === void 0 && (i = Zu(r, t, n.fragmentMap));
    var o = /* @__PURE__ */ new Map(), a = this.cache.policies, s = new oi(!1);
    return function u(c, _) {
      var l = s.lookup(c, _.clientOnly, _.deferred);
      l.visited || (l.visited = !0, c.selections.forEach(function(f) {
        if (ps(f, n.variables)) {
          var h = _.clientOnly, d = _.deferred;
          if (!(h && d) && zt(f.directives) && f.directives.forEach(function(O) {
            var E = O.name.value;
            if (E === "client" && (h = !0), E === "defer") {
              var T = ms(O, n.variables);
              (!T || T.if !== !1) && (d = !0);
            }
          }), an(f)) {
            var p = o.get(f);
            p && (h = h && p.clientOnly, d = d && p.deferred), o.set(f, Ou(n, h, d));
          } else {
            var m = ml(f, n.lookupFragment);
            if (!m && f.kind === Xe.FRAGMENT_SPREAD)
              throw __DEV__ ? new Ee("No fragment named ".concat(f.name.value)) : new Ee(8);
            m && a.fragmentMatches(m, i, r, n.variables) && u(m.selectionSet, Ou(n, h, d));
          }
        }
      }));
    }(t, n), o;
  }, e.prototype.applyMerges = function(t, r, n, i, o) {
    var a, s = this;
    if (t.map.size && !ge(n)) {
      var u = !He(n) && (ge(r) || An(r)) ? r : void 0, c = n;
      u && !o && (o = [ge(u) ? u.__ref : u]);
      var _, l = function(f, h) {
        return He(f) ? typeof h == "number" ? f[h] : void 0 : i.store.getFieldValue(f, String(h));
      };
      t.map.forEach(function(f, h) {
        var d = l(u, h), p = l(c, h);
        if (p !== void 0) {
          o && o.push(h);
          var m = s.applyMerges(f, d, p, i, o);
          m !== p && (_ = _ || /* @__PURE__ */ new Map(), _.set(h, m)), o && k(o.pop() === h);
        }
      }), _ && (n = He(c) ? c.slice(0) : g({}, c), _.forEach(function(f, h) {
        n[h] = f;
      }));
    }
    return t.info ? this.cache.policies.runMergeFunction(r, n, t.info, i, o && (a = i.store).getStorage.apply(a, o)) : n;
  }, e;
}(), Im = [];
function zf(e, t) {
  var r = e.map;
  return r.has(t) || r.set(t, Im.pop() || { map: /* @__PURE__ */ new Map() }), r.get(t);
}
function Ec(e, t) {
  if (e === t || !t || ja(t))
    return e;
  if (!e || ja(e))
    return t;
  var r = e.info && t.info ? g(g({}, e.info), t.info) : e.info || t.info, n = e.map.size && t.map.size, i = n ? /* @__PURE__ */ new Map() : e.map.size ? e.map : t.map, o = { info: r, map: i };
  if (n) {
    var a = new Set(t.map.keys());
    e.map.forEach(function(s, u) {
      o.map.set(u, Ec(s, t.map.get(u))), a.delete(u);
    }), a.forEach(function(s) {
      o.map.set(s, Ec(t.map.get(s), e.map.get(s)));
    });
  }
  return o;
}
function ja(e) {
  return !e || !(e.info || e.map.size);
}
function qf(e, t) {
  var r = e.map, n = r.get(t);
  n && ja(n) && (Im.push(n), r.delete(t));
}
var Jf = /* @__PURE__ */ new Set();
function EN(e, t, r, n) {
  var i = function(l) {
    var f = n.getFieldValue(l, r);
    return typeof f == "object" && f;
  }, o = i(e);
  if (o) {
    var a = i(t);
    if (a && !ge(o) && !xe(o, a) && !Object.keys(o).every(function(l) {
      return n.getFieldValue(a, l) !== void 0;
    })) {
      var s = n.getFieldValue(e, "__typename") || n.getFieldValue(t, "__typename"), u = Vr(r), c = "".concat(s, ".").concat(u);
      if (!Jf.has(c)) {
        Jf.add(c);
        var _ = [];
        !He(o) && !He(a) && [o, a].forEach(function(l) {
          var f = n.getFieldValue(l, "__typename");
          typeof f == "string" && !_.includes(f) && _.push(f);
        }), __DEV__ && k.warn("Cache data may be lost when replacing the ".concat(u, " field of a ").concat(s, ` object.

This could cause additional (usually avoidable) network requests to fetch data that were otherwise cached.

To address this problem (which is not a bug in Apollo Client), `).concat(_.length ? "either ensure all objects of type " + _.join(" and ") + " have an ID or a custom merge function, or " : "", "define a custom merge function for the ").concat(c, ` field, so InMemoryCache can safely merge these objects:

  existing: `).concat(JSON.stringify(o).slice(0, 1e3), `
  incoming: `).concat(JSON.stringify(a).slice(0, 1e3), `

For more information about these options, please refer to the documentation:

  * Ensuring entity objects have IDs: https://go.apollo.dev/c/generating-unique-identifiers
  * Defining custom merge functions: https://go.apollo.dev/c/merging-non-normalized-objects
`));
      }
    }
  }
}
var TN = function(e) {
  Bt(t, e);
  function t(r) {
    r === void 0 && (r = {});
    var n = e.call(this) || this;
    return n.watches = /* @__PURE__ */ new Set(), n.typenameDocumentCache = /* @__PURE__ */ new Map(), n.makeVar = fN, n.txCount = 0, n.config = rN(r), n.addTypename = !!n.config.addTypename, n.policies = new pN({
      cache: n,
      dataIdFromObject: n.config.dataIdFromObject,
      possibleTypes: n.config.possibleTypes,
      typePolicies: n.config.typePolicies
    }), n.init(), n;
  }
  return t.prototype.init = function() {
    var r = this.data = new qi.Root({
      policies: this.policies,
      resultCaching: this.config.resultCaching
    });
    this.optimisticData = r.stump, this.resetResultCache();
  }, t.prototype.resetResultCache = function(r) {
    var n = this, i = this.storeReader, o = this.config.fragments;
    this.storeWriter = new mN(this, this.storeReader = new uN({
      cache: this,
      addTypename: this.addTypename,
      resultCacheMaxSize: this.config.resultCacheMaxSize,
      canonizeResults: mm(this.config),
      canon: r ? void 0 : i && i.canon,
      fragments: o
    }), o), this.maybeBroadcastWatch = Fa(function(a, s) {
      return n.broadcastWatch(a, s);
    }, {
      max: this.config.resultCacheMaxSize,
      makeCacheKey: function(a) {
        var s = a.optimistic ? n.optimisticData : n.data;
        if (Pi(s)) {
          var u = a.optimistic, c = a.id, _ = a.variables;
          return s.makeCacheKey(a.query, a.callback, en({ optimistic: u, id: c, variables: _ }));
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
      return this.storeReader.diffQueryAgainstStore(g(g({}, r), { store: r.optimistic ? this.optimisticData : this.data, config: this.config, returnPartialData: i })).result || null;
    } catch (o) {
      if (o instanceof dm)
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
    if (We.call(r, "id") && !r.id)
      return !1;
    var n = r.optimistic ? this.optimisticData : this.data;
    try {
      return ++this.txCount, n.modify(r.id || "ROOT_QUERY", r.fields);
    } finally {
      !--this.txCount && r.broadcast !== !1 && this.broadcastWatches();
    }
  }, t.prototype.diff = function(r) {
    return this.storeReader.diffQueryAgainstStore(g(g({}, r), { store: r.optimistic ? this.optimisticData : this.data, rootId: r.id || "ROOT_QUERY", config: this.config }));
  }, t.prototype.watch = function(r) {
    var n = this;
    return this.watches.size || _N(this), this.watches.add(r), r.immediate && this.maybeBroadcastWatch(r), function() {
      n.watches.delete(r) && !n.watches.size && Ff(n), n.maybeBroadcastWatch.forget(r);
    };
  }, t.prototype.gc = function(r) {
    en.reset();
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
      __DEV__ && k.warn(n);
    }
  }, t.prototype.evict = function(r) {
    if (!r.id) {
      if (We.call(r, "id"))
        return !1;
      r = g(g({}, r), { id: "ROOT_QUERY" });
    }
    try {
      return ++this.txCount, this.optimisticData.evict(r, this.data);
    } finally {
      !--this.txCount && r.broadcast !== !1 && this.broadcastWatches();
    }
  }, t.prototype.reset = function(r) {
    var n = this;
    return this.init(), en.reset(), r && r.discardWatches ? (this.watches.forEach(function(i) {
      return n.maybeBroadcastWatch.forget(i);
    }), this.watches.clear(), Ff(this)) : this.broadcastWatches(), Promise.resolve();
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
    return u && !this.txCount && this.broadcastWatches(g(g({}, r), { onWatchUpdated: function(f) {
      return l.add(f), !1;
    } })), typeof a == "string" ? this.optimisticData = this.optimisticData.addLayer(a, _) : a === !1 ? _(this.data) : _(), typeof s == "string" && (this.optimisticData = this.optimisticData.removeLayer(s)), u && l.size ? (this.broadcastWatches(g(g({}, r), { onWatchUpdated: function(f, h) {
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
    if (this.addTypename) {
      var n = this.typenameDocumentCache.get(r);
      return n || (n = Rl(r), this.typenameDocumentCache.set(r, n), this.typenameDocumentCache.set(n, n)), n;
    }
    return r;
  }, t.prototype.transformForLink = function(r) {
    var n = this.config.fragments;
    return n ? n.transform(r) : r;
  }, t.prototype.broadcastWatches = function(r) {
    var n = this;
    this.txCount || this.watches.forEach(function(i) {
      return n.maybeBroadcastWatch(i, r);
    });
  }, t.prototype.broadcastWatch = function(r, n) {
    var i = r.lastDiff, o = this.diff(r);
    n && (r.optimistic && typeof n.optimistic == "string" && (o.fromOptimisticTransaction = !0), n.onWatchUpdated && n.onWatchUpdated.call(this, r, o, i) === !1) || (!i || !xe(i.result, o.result)) && r.callback(r.lastDiff = o, i);
  }, t;
}(JI), Ie;
(function(e) {
  e[e.loading = 1] = "loading", e[e.setVariables = 2] = "setVariables", e[e.fetchMore = 3] = "fetchMore", e[e.refetch = 4] = "refetch", e[e.poll = 6] = "poll", e[e.ready = 7] = "ready", e[e.error = 8] = "error";
})(Ie || (Ie = {}));
function Ji(e) {
  return e ? e < 7 : !1;
}
var ON = Object.assign, RN = Object.hasOwnProperty, Tc = function(e) {
  Bt(t, e);
  function t(r) {
    var n = r.queryManager, i = r.queryInfo, o = r.options, a = e.call(this, function(m) {
      try {
        var O = m._subscription._observer;
        O && !O.error && (O.error = vN);
      } catch {
      }
      var E = !a.observers.size;
      a.observers.add(m);
      var T = a.last;
      return T && T.error ? m.error && m.error(T.error) : T && T.result && m.next && m.next(T.result), E && a.reobserve().catch(function() {
      }), function() {
        a.observers.delete(m) && !a.observers.size && a.tearDownQuery();
      };
    }) || this;
    a.observers = /* @__PURE__ */ new Set(), a.subscriptions = /* @__PURE__ */ new Set(), a.queryInfo = i, a.queryManager = n, a.waitForOwnResult = Ru(o.fetchPolicy), a.isTornDown = !1;
    var s = n.defaultOptions.watchQuery, u = s === void 0 ? {} : s, c = u.fetchPolicy, _ = c === void 0 ? "cache-first" : c, l = o.fetchPolicy, f = l === void 0 ? _ : l, h = o.initialFetchPolicy, d = h === void 0 ? f === "standby" ? _ : f : h;
    a.options = g(g({}, o), { initialFetchPolicy: d, fetchPolicy: f }), a.queryId = i.queryId || n.generateQueryId();
    var p = yo(a.query);
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
    var n = this.getLastResult(!0), i = this.queryInfo.networkStatus || n && n.networkStatus || Ie.ready, o = g(g({}, n), { loading: Ji(i), networkStatus: i }), a = this.options.fetchPolicy, s = a === void 0 ? "cache-first" : a;
    if (!(Ru(s) || this.queryManager.transform(this.options.query).hasForcedResolvers))
      if (this.waitForOwnResult)
        this.queryInfo.updateWatch();
      else {
        var u = this.queryInfo.getDiff();
        (u.complete || this.options.returnPartialData) && (o.data = u.result), xe(o.data, {}) && (o.data = void 0), u.complete ? (delete o.partial, u.complete && o.networkStatus === Ie.loading && (s === "cache-first" || s === "cache-only") && (o.networkStatus = Ie.ready, o.loading = !1)) : o.partial = !0, __DEV__ && !u.complete && !this.options.partialRefetch && !o.loading && !o.data && !o.error && Am(u.missing);
      }
    return r && this.updateLastResult(o), o;
  }, t.prototype.isDifferentFromLastResult = function(r, n) {
    return !this.last || !xe(this.last.result, r) || n && !xe(this.last.variables, n);
  }, t.prototype.getLast = function(r, n) {
    var i = this.last;
    if (i && i[r] && (!n || xe(i.variables, this.variables)))
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
    if (o === "cache-and-network" ? i.fetchPolicy = o : o === "no-cache" ? i.fetchPolicy = "no-cache" : i.fetchPolicy = "network-only", __DEV__ && r && RN.call(r, "variables")) {
      var a = Vp(this.query), s = a.variableDefinitions;
      (!s || !s.some(function(u) {
        return u.variable.name.value === "variables";
      })) && __DEV__ && k.warn("Called refetch(".concat(JSON.stringify(r), ") for query ").concat(((n = a.name) === null || n === void 0 ? void 0 : n.value) || JSON.stringify(a), `, which does not declare a $variables variable.
Did you mean to call refetch(variables) instead of refetch({ variables })?`));
    }
    return r && !xe(this.options.variables, r) && (i.variables = this.options.variables = g(g({}, this.options.variables), r)), this.queryInfo.resetLastWrite(), this.reobserve(i, Ie.refetch);
  }, t.prototype.fetchMore = function(r) {
    var n = this, i = g(g({}, r.query ? r : g(g(g(g({}, this.options), { query: this.query }), r), { variables: g(g({}, this.options.variables), r.variables) })), { fetchPolicy: "no-cache" }), o = this.queryManager.generateQueryId(), a = this.queryInfo, s = a.networkStatus;
    a.networkStatus = Ie.fetchMore, i.notifyOnNetworkStatusChange && this.observe();
    var u = /* @__PURE__ */ new Set();
    return this.queryManager.fetchQuery(o, i, Ie.fetchMore).then(function(c) {
      return n.queryManager.removeQuery(o), a.networkStatus === Ie.fetchMore && (a.networkStatus = s), n.queryManager.cache.batch({
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
      u.has(n.query) || Nm(n);
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
        __DEV__ && k.error("Unhandled GraphQL subscription error", o);
      }
    });
    return this.subscriptions.add(i), function() {
      n.subscriptions.delete(i) && i.unsubscribe();
    };
  }, t.prototype.setOptions = function(r) {
    return this.reobserve(r);
  }, t.prototype.setVariables = function(r) {
    return xe(this.variables, r) ? this.observers.size ? this.result() : Promise.resolve() : (this.options.variables = r, this.observers.size ? this.reobserve({
      fetchPolicy: this.options.initialFetchPolicy,
      variables: r
    }, Ie.setVariables) : Promise.resolve());
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
        __DEV__ ? k(o, "Attempted to start a polling query without a polling interval.") : k(o, 13);
        var a = i || (this.pollingInfo = {});
        a.interval = o;
        var s = function() {
          r.pollingInfo && (Ji(r.queryInfo.networkStatus) ? u() : r.reobserve({
            fetchPolicy: r.options.initialFetchPolicy === "no-cache" ? "no-cache" : "network-only"
          }, Ie.poll).then(u, u));
        }, u = function() {
          var c = r.pollingInfo;
          c && (clearTimeout(c.timeout), c.timeout = setTimeout(s, c.interval));
        };
        u();
      }
    }
  }, t.prototype.updateLastResult = function(r, n) {
    return n === void 0 && (n = this.variables), this.last = g(g({}, this.last), { result: this.queryManager.assumeImmutableResults ? r : zp(r), variables: n }), zt(r.errors) || delete this.last.error, this.last;
  }, t.prototype.reobserveAsConcast = function(r, n) {
    var i = this;
    this.isTornDown = !1;
    var o = n === Ie.refetch || n === Ie.fetchMore || n === Ie.poll, a = this.options.variables, s = this.options.fetchPolicy, u = Rs(this.options, r || {}), c = o ? u : ON(this.options, u);
    o || (this.updatePolling(), r && r.variables && !xe(r.variables, a) && c.fetchPolicy !== "standby" && c.fetchPolicy === s && (this.applyNextFetchPolicy("variables-changed", c), n === void 0 && (n = Ie.setVariables))), this.waitForOwnResult && (this.waitForOwnResult = Ru(c.fetchPolicy));
    var _ = function() {
      i.concast === h && (i.waitForOwnResult = !1);
    }, l = c.variables && g({}, c.variables), f = this.fetch(c, n), h = f.concast, d = f.fromLink, p = {
      next: function(m) {
        _(), i.reportResult(m, l);
      },
      error: function(m) {
        _(), i.reportError(m, l);
      }
    };
    return !o && d && (this.concast && this.observer && this.concast.removeObserver(this.observer), this.concast = h, this.observer = p), h.addObserver(p), h;
  }, t.prototype.reobserve = function(r, n) {
    return this.reobserveAsConcast(r, n).promise;
  }, t.prototype.observe = function() {
    this.reportResult(this.getCurrentResult(!1), this.variables);
  }, t.prototype.reportResult = function(r, n) {
    var i = this.getLastError();
    (i || this.isDifferentFromLastResult(r, n)) && ((i || !r.partial || this.options.returnPartialData) && this.updateLastResult(r, n), wi(this.observers, "next", r));
  }, t.prototype.reportError = function(r, n) {
    var i = g(g({}, this.getLastResult()), { error: r, errors: r.graphQLErrors, networkStatus: Ie.error, loading: !1 });
    this.updateLastResult(i, n), wi(this.observers, "error", this.last.error = r);
  }, t.prototype.hasObservers = function() {
    return this.observers.size > 0;
  }, t.prototype.tearDownQuery = function() {
    this.isTornDown || (this.concast && this.observer && (this.concast.removeObserver(this.observer), delete this.concast, delete this.observer), this.stopPolling(), this.subscriptions.forEach(function(r) {
      return r.unsubscribe();
    }), this.subscriptions.clear(), this.queryManager.stopQuery(this.queryId), this.observers.clear(), this.isTornDown = !0);
  }, t;
}(ye);
Jp(Tc);
function Nm(e) {
  var t = e.options, r = t.fetchPolicy, n = t.nextFetchPolicy;
  return r === "cache-and-network" || r === "network-only" ? e.reobserve({
    fetchPolicy: "cache-first",
    nextFetchPolicy: function() {
      return this.nextFetchPolicy = n, typeof n == "function" ? n.apply(this, arguments) : r;
    }
  }) : e.reobserve();
}
function vN(e) {
  __DEV__ && k.error("Unhandled error", e.message, e.stack);
}
function Am(e) {
  __DEV__ && e && __DEV__ && k.debug("Missing cache result fields: ".concat(JSON.stringify(e)), e);
}
function Ru(e) {
  return e === "network-only" || e === "no-cache" || e === "standby";
}
var ym = function() {
  function e(t) {
    var r = t.cache, n = t.client, i = t.resolvers, o = t.fragmentMatcher;
    this.selectionsToResolveCache = /* @__PURE__ */ new WeakMap(), this.cache = r, n && (this.client = n), i && this.addResolvers(i), o && this.setFragmentMatcher(o);
  }
  return e.prototype.addResolvers = function(t) {
    var r = this;
    this.resolvers = this.resolvers || {}, Array.isArray(t) ? t.forEach(function(n) {
      r.resolvers = pf(r.resolvers, n);
    }) : this.resolvers = pf(this.resolvers, t);
  }, e.prototype.setResolvers = function(t) {
    this.resolvers = {}, this.addResolvers(t);
  }, e.prototype.getResolvers = function() {
    return this.resolvers || {};
  }, e.prototype.runResolvers = function(t) {
    var r = t.document, n = t.remoteResult, i = t.context, o = t.variables, a = t.onlyRunForcedResolvers, s = a === void 0 ? !1 : a;
    return Ir(this, void 0, void 0, function() {
      return Nr(this, function(u) {
        return r ? [2, this.resolveDocument(r, n.data, i, o, this.fragmentMatcher, s).then(function(c) {
          return g(g({}, n), { data: c.result });
        })] : [2, n];
      });
    });
  }, e.prototype.setFragmentMatcher = function(t) {
    this.fragmentMatcher = t;
  }, e.prototype.getFragmentMatcher = function() {
    return this.fragmentMatcher;
  }, e.prototype.clientQuery = function(t) {
    return hl(["client"], t) && this.resolvers ? t : null;
  }, e.prototype.serverQuery = function(t) {
    return yg(t);
  }, e.prototype.prepareContext = function(t) {
    var r = this.cache;
    return g(g({}, t), { cache: r, getCacheKey: function(n) {
      return r.identify(n);
    } });
  }, e.prototype.addExportedVariables = function(t, r, n) {
    return r === void 0 && (r = {}), n === void 0 && (n = {}), Ir(this, void 0, void 0, function() {
      return Nr(this, function(i) {
        return t ? [2, this.resolveDocument(t, this.buildRootValueFromCache(t, r) || {}, this.prepareContext(n), r).then(function(o) {
          return g(g({}, r), o.exportedVariables);
        })] : [2, g({}, r)];
      });
    });
  }, e.prototype.shouldForceResolvers = function(t) {
    var r = !1;
    return dr(t, {
      Directive: {
        enter: function(n) {
          if (n.name.value === "client" && n.arguments && (r = n.arguments.some(function(i) {
            return i.name.value === "always" && i.value.kind === "BooleanValue" && i.value.value === !0;
          }), r))
            return dl;
        }
      }
    }), r;
  }, e.prototype.buildRootValueFromCache = function(t, r) {
    return this.cache.diff({
      query: Ag(t),
      variables: r,
      returnPartialData: !0,
      optimistic: !1
    }).result;
  }, e.prototype.resolveDocument = function(t, r, n, i, o, a) {
    return n === void 0 && (n = {}), i === void 0 && (i = {}), o === void 0 && (o = function() {
      return !0;
    }), a === void 0 && (a = !1), Ir(this, void 0, void 0, function() {
      var s, u, c, _, l, f, h, d, p, m, O;
      return Nr(this, function(E) {
        return s = Ts(t), u = Tl(t), c = pl(u), _ = this.collectSelectionsToResolve(s, c), l = s.operation, f = l ? l.charAt(0).toUpperCase() + l.slice(1) : "Query", h = this, d = h.cache, p = h.client, m = {
          fragmentMap: c,
          context: g(g({}, n), { cache: d, client: p }),
          variables: i,
          fragmentMatcher: o,
          defaultOperationType: f,
          exportedVariables: {},
          selectionsToResolve: _,
          onlyRunForcedResolvers: a
        }, O = !1, [2, this.resolveSelectionSet(s.selectionSet, O, r, m).then(function(T) {
          return {
            result: T,
            exportedVariables: m.exportedVariables
          };
        })];
      });
    });
  }, e.prototype.resolveSelectionSet = function(t, r, n, i) {
    return Ir(this, void 0, void 0, function() {
      var o, a, s, u, c, _ = this;
      return Nr(this, function(l) {
        return o = i.fragmentMap, a = i.context, s = i.variables, u = [n], c = function(f) {
          return Ir(_, void 0, void 0, function() {
            var h, d;
            return Nr(this, function(p) {
              return !r && !i.selectionsToResolve.has(f) ? [2] : ps(f, s) ? an(f) ? [2, this.resolveField(f, r, n, i).then(function(m) {
                var O;
                typeof m < "u" && u.push((O = {}, O[on(f)] = m, O));
              })] : (Rg(f) ? h = f : (h = o[f.name.value], __DEV__ ? k(h, "No fragment named ".concat(f.name.value)) : k(h, 11)), h && h.typeCondition && (d = h.typeCondition.name.value, i.fragmentMatcher(n, d, a)) ? [2, this.resolveSelectionSet(h.selectionSet, r, n, i).then(function(m) {
                u.push(m);
              })] : [2]) : [2];
            });
          });
        }, [2, Promise.all(t.selections.map(c)).then(function() {
          return vl(u);
        })];
      });
    });
  }, e.prototype.resolveField = function(t, r, n, i) {
    return Ir(this, void 0, void 0, function() {
      var o, a, s, u, c, _, l, f, h, d = this;
      return Nr(this, function(p) {
        return n ? (o = i.variables, a = t.name.value, s = on(t), u = a !== s, c = n[s] || n[a], _ = Promise.resolve(c), (!i.onlyRunForcedResolvers || this.shouldForceResolvers(t)) && (l = n.__typename || i.defaultOperationType, f = this.resolvers && this.resolvers[l], f && (h = f[u ? a : s], h && (_ = Promise.resolve(Gl.withValue(this.cache, h, [
          n,
          ms(t, o),
          i.context,
          { field: t, fragmentMap: i.fragmentMap }
        ]))))), [2, _.then(function(m) {
          var O, E;
          if (m === void 0 && (m = c), t.directives && t.directives.forEach(function(v) {
            v.name.value === "export" && v.arguments && v.arguments.forEach(function(R) {
              R.name.value === "as" && R.value.kind === "StringValue" && (i.exportedVariables[R.value.value] = m);
            });
          }), !t.selectionSet || m == null)
            return m;
          var T = (E = (O = t.directives) === null || O === void 0 ? void 0 : O.some(function(v) {
            return v.name.value === "client";
          })) !== null && E !== void 0 ? E : !1;
          if (Array.isArray(m))
            return d.resolveSubSelectedArray(t, r || T, m, i);
          if (t.selectionSet)
            return d.resolveSelectionSet(t.selectionSet, r || T, m, i);
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
        i.set(a, s), dr(a, {
          Directive: function(u, c, _, l, f) {
            u.name.value === "client" && f.forEach(function(h) {
              n(h) && ff(h) && s.add(h);
            });
          },
          FragmentSpread: function(u, c, _, l, f) {
            var h = r[u.name.value];
            __DEV__ ? k(h, "No fragment named ".concat(u.name.value)) : k(h, 12);
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
}(), yn = new (ln ? WeakMap : Map)();
function vu(e, t) {
  var r = e[t];
  typeof r == "function" && (e[t] = function() {
    return yn.set(e, (yn.get(e) + 1) % 1e15), r.apply(this, arguments);
  });
}
function Qf(e) {
  e.notifyTimeout && (clearTimeout(e.notifyTimeout), e.notifyTimeout = void 0);
}
var bu = function() {
  function e(t, r) {
    r === void 0 && (r = t.generateQueryId()), this.queryId = r, this.listeners = /* @__PURE__ */ new Set(), this.document = null, this.lastRequestId = 1, this.subscriptions = /* @__PURE__ */ new Set(), this.stopped = !1, this.dirty = !1, this.observableQuery = null;
    var n = this.cache = t.cache;
    yn.has(n) || (yn.set(n, 0), vu(n, "evict"), vu(n, "modify"), vu(n, "reset"));
  }
  return e.prototype.init = function(t) {
    var r = t.networkStatus || Ie.loading;
    return this.variables && this.networkStatus !== Ie.loading && !xe(this.variables, t.variables) && (r = Ie.setVariables), xe(t.variables, this.variables) || (this.lastDiff = void 0), Object.assign(this, {
      document: t.document,
      variables: t.variables,
      networkError: null,
      graphQLErrors: this.graphQLErrors || [],
      networkStatus: r
    }), t.observableQuery && this.setObservableQuery(t.observableQuery), t.lastRequestId && (this.lastRequestId = t.lastRequestId), this;
  }, e.prototype.reset = function() {
    Qf(this), this.dirty = !1;
  }, e.prototype.getDiff = function(t) {
    t === void 0 && (t = this.variables);
    var r = this.getDiffOptions(t);
    if (this.lastDiff && xe(r, this.lastDiff.options))
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
    this.updateLastDiff(t), !this.dirty && !xe(n && n.result, t && t.result) && (this.dirty = !0, this.notifyTimeout || (this.notifyTimeout = setTimeout(function() {
      return r.notify();
    }, 0)));
  }, e.prototype.setObservableQuery = function(t) {
    var r = this;
    t !== this.observableQuery && (this.oqListener && this.listeners.delete(this.oqListener), this.observableQuery = t, t ? (t.queryInfo = this, this.listeners.add(this.oqListener = function() {
      var n = r.getDiff();
      n.fromOptimisticTransaction ? t.observe() : Nm(t);
    })) : delete this.oqListener);
  }, e.prototype.notify = function() {
    var t = this;
    Qf(this), this.shouldNotify() && this.listeners.forEach(function(r) {
      return r(t);
    }), this.dirty = !1;
  }, e.prototype.shouldNotify = function() {
    if (!this.dirty || !this.listeners.size)
      return !1;
    if (Ji(this.networkStatus) && this.observableQuery) {
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
      var i = g(g({}, this.getDiffOptions(t)), { watcher: this, callback: function(o) {
        return r.setDiff(o);
      } });
      (!this.lastWatch || !xe(i, this.lastWatch)) && (this.cancel(), this.cancel = this.cache.watch(this.lastWatch = i));
    }
  }, e.prototype.resetLastWrite = function() {
    this.lastWrite = void 0;
  }, e.prototype.shouldWrite = function(t, r) {
    var n = this.lastWrite;
    return !(n && n.dmCount === yn.get(this.cache) && xe(r, n.variables) && xe(t.data, n.result.data));
  }, e.prototype.markResult = function(t, r, n, i) {
    var o = this, a = new Fr(), s = zt(t.errors) ? t.errors.slice(0) : [];
    if (this.reset(), "incremental" in t && zt(t.incremental)) {
      var u = Qp(this.getDiff().result, t);
      t.data = u;
    } else if ("hasNext" in t && t.hasNext) {
      var c = this.getDiff();
      t.data = a.merge(c.result, t.data);
    }
    this.graphQLErrors = s, n.fetchPolicy === "no-cache" ? this.updateLastDiff({ result: t.data, complete: !0 }, this.getDiffOptions(n.variables)) : i !== 0 && (Oc(t, n.errorPolicy) ? this.cache.performTransaction(function(_) {
      if (o.shouldWrite(t, n.variables))
        _.writeQuery({
          query: r,
          data: t.data,
          variables: n.variables,
          overwrite: i === 1
        }), o.lastWrite = {
          result: t,
          variables: n.variables,
          dmCount: yn.get(o.cache)
        };
      else if (o.lastDiff && o.lastDiff.diff.complete) {
        t.data = o.lastDiff.diff.result;
        return;
      }
      var l = o.getDiffOptions(n.variables), f = _.diff(l);
      o.stopped || o.updateWatch(n.variables), o.updateLastDiff(f, l), f.complete && (t.data = f.result);
    }) : this.lastWrite = void 0);
  }, e.prototype.markReady = function() {
    return this.networkError = null, this.networkStatus = Ie.ready;
  }, e.prototype.markError = function(t) {
    return this.networkStatus = Ie.error, this.lastWrite = void 0, this.reset(), t.graphQLErrors && (this.graphQLErrors = t.graphQLErrors), t.networkError && (this.networkError = t.networkError), t;
  }, e;
}();
function Oc(e, t) {
  t === void 0 && (t = "none");
  var r = t === "ignore" || t === "all", n = !ca(e);
  return !n && r && e.data && (n = !0), n;
}
var bN = Object.prototype.hasOwnProperty, gN = function() {
  function e(t) {
    var r = t.cache, n = t.link, i = t.defaultOptions, o = t.queryDeduplication, a = o === void 0 ? !1 : o, s = t.onBroadcast, u = t.ssrMode, c = u === void 0 ? !1 : u, _ = t.clientAwareness, l = _ === void 0 ? {} : _, f = t.localState, h = t.assumeImmutableResults;
    this.clientAwareness = {}, this.queries = /* @__PURE__ */ new Map(), this.fetchCancelFns = /* @__PURE__ */ new Map(), this.transformCache = new (ln ? WeakMap : Map)(), this.queryIdCounter = 1, this.requestIdCounter = 1, this.mutationIdCounter = 1, this.inFlightLinkObservables = /* @__PURE__ */ new Map(), this.cache = r, this.link = n, this.defaultOptions = i || /* @__PURE__ */ Object.create(null), this.queryDeduplication = a, this.clientAwareness = l, this.localState = f || new ym({ cache: r }), this.ssrMode = c, this.assumeImmutableResults = !!h, (this.onBroadcast = s) && (this.mutationStore = /* @__PURE__ */ Object.create(null));
  }
  return e.prototype.stop = function() {
    var t = this;
    this.queries.forEach(function(r, n) {
      t.stopQueryNoBroadcast(n);
    }), this.cancelPendingFetches(__DEV__ ? new Ee("QueryManager stopped while query was in flight") : new Ee(14));
  }, e.prototype.cancelPendingFetches = function(t) {
    this.fetchCancelFns.forEach(function(r) {
      return r(t);
    }), this.fetchCancelFns.clear();
  }, e.prototype.mutate = function(t) {
    var r, n, i = t.mutation, o = t.variables, a = t.optimisticResponse, s = t.updateQueries, u = t.refetchQueries, c = u === void 0 ? [] : u, _ = t.awaitRefetchQueries, l = _ === void 0 ? !1 : _, f = t.update, h = t.onQueryUpdated, d = t.fetchPolicy, p = d === void 0 ? ((r = this.defaultOptions.mutate) === null || r === void 0 ? void 0 : r.fetchPolicy) || "network-only" : d, m = t.errorPolicy, O = m === void 0 ? ((n = this.defaultOptions.mutate) === null || n === void 0 ? void 0 : n.errorPolicy) || "none" : m, E = t.keepRootFields, T = t.context;
    return Ir(this, void 0, void 0, function() {
      var v, R, N, I, C, D;
      return Nr(this, function(G) {
        switch (G.label) {
          case 0:
            return __DEV__ ? k(i, "mutation option is required. You must specify your GraphQL document in the mutation option.") : k(i, 15), __DEV__ ? k(p === "network-only" || p === "no-cache", "Mutations support only 'network-only' or 'no-cache' fetchPolicy strings. The default `network-only` behavior automatically writes mutation results to the cache. Passing `no-cache` skips the cache write.") : k(p === "network-only" || p === "no-cache", 16), v = this.generateMutationId(), R = this.transform(i), N = R.document, I = R.hasClientExports, i = this.cache.transformForLink(N), o = this.getVariables(i, o), I ? [4, this.localState.addExportedVariables(i, o, T)] : [3, 2];
          case 1:
            o = G.sent(), G.label = 2;
          case 2:
            return C = this.mutationStore && (this.mutationStore[v] = {
              mutation: i,
              variables: o,
              loading: !0,
              error: null
            }), a && this.markMutationOptimistic(a, {
              mutationId: v,
              document: i,
              variables: o,
              fetchPolicy: p,
              errorPolicy: O,
              context: T,
              updateQueries: s,
              update: f,
              keepRootFields: E
            }), this.broadcastQueries(), D = this, [2, new Promise(function(Z, re) {
              return fu(D.getObservableFromLink(i, g(g({}, T), { optimisticResponse: a }), o, !1), function(J) {
                if (ca(J) && O === "none")
                  throw new hn({
                    graphQLErrors: oc(J)
                  });
                C && (C.loading = !1, C.error = null);
                var x = g({}, J);
                return typeof c == "function" && (c = c(x)), O === "ignore" && ca(x) && delete x.errors, D.markMutationResult({
                  mutationId: v,
                  result: x,
                  document: i,
                  variables: o,
                  fetchPolicy: p,
                  errorPolicy: O,
                  context: T,
                  update: f,
                  updateQueries: s,
                  awaitRefetchQueries: l,
                  refetchQueries: c,
                  removeOptimistic: a ? v : void 0,
                  onQueryUpdated: h,
                  keepRootFields: E
                });
              }).subscribe({
                next: function(J) {
                  D.broadcastQueries(), (!("hasNext" in J) || J.hasNext === !1) && Z(J);
                },
                error: function(J) {
                  C && (C.loading = !1, C.error = J), a && D.cache.removeOptimistic(v), D.broadcastQueries(), re(J instanceof hn ? J : new hn({
                    networkError: J
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
    if (!a && Oc(i, t.errorPolicy)) {
      if (Cn(i) || o.push({
        result: i.data,
        dataId: "ROOT_MUTATION",
        query: t.document,
        variables: t.variables
      }), Cn(i) && zt(i.incremental)) {
        var s = r.diff({
          id: "ROOT_MUTATION",
          query: this.transform(t.document).asQuery,
          variables: t.variables,
          optimistic: !1,
          returnPartialData: !0
        }), u = void 0;
        s.result && (u = Qp(s.result, i)), typeof u < "u" && (i.data = u, o.push({
          result: u,
          dataId: "ROOT_MUTATION",
          query: t.document,
          variables: t.variables
        }));
      }
      var c = t.updateQueries;
      c && this.queries.forEach(function(l, f) {
        var h = l.observableQuery, d = h && h.queryName;
        if (!(!d || !bN.call(c, d))) {
          var p = c[d], m = n.queries.get(f), O = m.document, E = m.variables, T = r.diff({
            query: O,
            variables: E,
            returnPartialData: !0,
            optimistic: !1
          }), v = T.result, R = T.complete;
          if (R && v) {
            var N = p(v, {
              mutationResult: i,
              queryName: O && ec(O) || void 0,
              queryVariables: E
            });
            N && o.push({
              result: N,
              dataId: "ROOT_QUERY",
              query: O,
              variables: E
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
          var f = t.update, h = !Wg(i) || Cn(i) && !i.hasNext;
          if (f) {
            if (!a) {
              var d = l.diff({
                id: "ROOT_MUTATION",
                query: n.transform(t.document).asQuery,
                variables: t.variables,
                optimistic: !1,
                returnPartialData: !0
              });
              d.complete && (i = g(g({}, i), { data: d.result }), "incremental" in i && delete i.incremental, "hasNext" in i && delete i.hasNext);
            }
            h && f(l, i, {
              context: t.context,
              variables: t.variables
            });
          }
          !a && !t.keepRootFields && h && l.modify({
            id: "ROOT_MUTATION",
            fields: function(p, m) {
              var O = m.fieldName, E = m.DELETE;
              return O === "__typename" ? p : E;
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
        n.markMutationResult(g(g({}, r), { result: { data: i } }), o);
      } catch (a) {
        __DEV__ && k.error(a);
      }
    }, r.mutationId);
  }, e.prototype.fetchQuery = function(t, r, n) {
    return this.fetchQueryObservable(t, r, n).promise;
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
    var r = this.transformCache;
    if (!r.has(t)) {
      var n = this.cache.transformDocument(t), i = Ng(n), o = this.localState.clientQuery(n), a = i && this.localState.serverQuery(i), s = {
        document: n,
        hasClientExports: ng(n),
        hasForcedResolvers: this.localState.shouldForceResolvers(n),
        clientQuery: o,
        serverQuery: a,
        defaultVars: Ol(yo(n)),
        asQuery: g(g({}, n), { definitions: n.definitions.map(function(c) {
          return c.kind === "OperationDefinition" && c.operation !== "query" ? g(g({}, c), { operation: "query" }) : c;
        }) })
      }, u = function(c) {
        c && !r.has(c) && r.set(c, s);
      };
      u(t), u(n), u(o), u(a);
    }
    return r.get(t);
  }, e.prototype.getVariables = function(t, r) {
    return g(g({}, this.transform(t).defaultVars), r);
  }, e.prototype.watchQuery = function(t) {
    t = g(g({}, t), { variables: this.getVariables(t.query, t.variables) }), typeof t.notifyOnNetworkStatusChange > "u" && (t.notifyOnNetworkStatusChange = !1);
    var r = new bu(this), n = new Tc({
      queryManager: this,
      queryInfo: r,
      options: t
    });
    return this.queries.set(n.queryId, r), r.init({
      document: n.query,
      observableQuery: n,
      variables: n.variables
    }), n;
  }, e.prototype.query = function(t, r) {
    var n = this;
    return r === void 0 && (r = this.generateQueryId()), __DEV__ ? k(t.query, "query option is required. You must specify your GraphQL document in the query option.") : k(t.query, 17), __DEV__ ? k(t.query.kind === "Document", 'You must wrap the query string in a "gql" tag.') : k(t.query.kind === "Document", 18), __DEV__ ? k(!t.returnPartialData, "returnPartialData option only supported on watchQuery.") : k(!t.returnPartialData, 19), __DEV__ ? k(!t.pollInterval, "pollInterval option only supported on watchQuery.") : k(!t.pollInterval, 20), this.fetchQuery(r, t).finally(function() {
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
    }), this.cancelPendingFetches(__DEV__ ? new Ee("Store reset while query was in flight (not completed in link chain)") : new Ee(21)), this.queries.forEach(function(r) {
      r.observableQuery ? r.networkStatus = Ie.loading : r.stop();
    }), this.mutationStore && (this.mutationStore = /* @__PURE__ */ Object.create(null)), this.cache.reset(t);
  }, e.prototype.getObservableQueries = function(t) {
    var r = this;
    t === void 0 && (t = "active");
    var n = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set();
    return Array.isArray(t) && t.forEach(function(a) {
      typeof a == "string" ? i.set(a, !1) : sg(a) ? i.set(r.transform(a).document, !1) : Ce(a) && a.query && o.add(a);
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
      var s = ac("legacyOneTimeQuery"), u = r.getQuery(s).init({
        document: a.query,
        variables: a.variables
      }), c = new Tc({
        queryManager: r,
        queryInfo: u,
        options: g(g({}, a), { fetchPolicy: "network-only" })
      });
      k(c.queryId === s), u.setObservableQuery(c), n.set(s, c);
    }), __DEV__ && i.size && i.forEach(function(a, s) {
      a || __DEV__ && k.warn("Unknown query ".concat(typeof s == "string" ? "named " : "").concat(JSON.stringify(s, null, 2), " requested in refetchQueries options.include array"));
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
    n = this.transform(n).document, a = this.getVariables(n, a);
    var c = function(l) {
      return r.getObservableFromLink(n, u, l).map(function(f) {
        i !== "no-cache" && (Oc(f, o) && r.cache.write({
          query: n,
          result: f.data,
          dataId: "ROOT_SUBSCRIPTION",
          variables: l
        }), r.broadcastQueries());
        var h = ca(f), d = uI(f);
        if (h || d) {
          var p = {};
          throw h && (p.graphQLErrors = f.errors), d && (p.protocolErrors = f.extensions[Al]), new hn(p);
        }
        return f;
      });
    };
    if (this.transform(n).hasClientExports) {
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
    var s, u = this.transform(t).serverQuery;
    if (u) {
      var c = this, _ = c.inFlightLinkObservables, l = c.link, f = {
        query: u,
        variables: n,
        operationName: ec(u) || void 0,
        context: this.prepareContext(g(g({}, r), { forceFetch: !i }))
      };
      if (r = f.context, i) {
        var h = _.get(u) || /* @__PURE__ */ new Map();
        _.set(u, h);
        var d = en(n);
        if (s = h.get(d), !s) {
          var p = new Rn([
            uc(l, f)
          ]);
          h.set(d, s = p), p.beforeNext(function() {
            h.delete(d) && h.size < 1 && _.delete(u);
          });
        }
      } else
        s = new Rn([
          uc(l, f)
        ]);
    } else
      s = new Rn([
        ye.of({ data: {} })
      ]), r = this.prepareContext(r);
    var m = this.transform(t).clientQuery;
    return m && (s = fu(s, function(O) {
      return o.localState.runResolvers({
        document: m,
        remoteResult: O,
        context: r,
        variables: n
      });
    })), s;
  }, e.prototype.getResultsFromLink = function(t, r, n) {
    var i = t.lastRequestId = this.generateRequestId(), o = this.cache.transformForLink(this.transform(t.document).document);
    return fu(this.getObservableFromLink(o, n.context, n.variables), function(a) {
      var s = oc(a), u = s.length > 0;
      if (i >= t.lastRequestId) {
        if (u && n.errorPolicy === "none")
          throw t.markError(new hn({
            graphQLErrors: s
          }));
        t.markResult(a, o, n, r), t.markReady();
      }
      var c = {
        data: a.data,
        loading: !1,
        networkStatus: Ie.ready
      };
      return u && n.errorPolicy !== "ignore" && (c.errors = s, c.networkStatus = Ie.error), c;
    }, function(a) {
      var s = cI(a) ? a : new hn({ networkError: a });
      throw i >= t.lastRequestId && t.markError(s), s;
    });
  }, e.prototype.fetchQueryObservable = function(t, r, n) {
    return this.fetchConcastWithInfo(t, r, n).concast;
  }, e.prototype.fetchConcastWithInfo = function(t, r, n) {
    var i = this;
    n === void 0 && (n = Ie.loading);
    var o = this.transform(r.query).document, a = this.getVariables(o, r.variables), s = this.getQuery(t), u = this.defaultOptions.watchQuery, c = r.fetchPolicy, _ = c === void 0 ? u && u.fetchPolicy || "cache-first" : c, l = r.errorPolicy, f = l === void 0 ? u && u.errorPolicy || "none" : l, h = r.returnPartialData, d = h === void 0 ? !1 : h, p = r.notifyOnNetworkStatusChange, m = p === void 0 ? !1 : p, O = r.context, E = O === void 0 ? {} : O, T = Object.assign({}, r, {
      query: o,
      variables: a,
      fetchPolicy: _,
      errorPolicy: f,
      returnPartialData: d,
      notifyOnNetworkStatusChange: m,
      context: E
    }), v = function(D) {
      T.variables = D;
      var G = i.fetchQueryByPolicy(s, T, n);
      return T.fetchPolicy !== "standby" && G.sources.length > 0 && s.observableQuery && s.observableQuery.applyNextFetchPolicy("after-fetch", r), G;
    }, R = function() {
      return i.fetchCancelFns.delete(t);
    };
    this.fetchCancelFns.set(t, function(D) {
      R(), setTimeout(function() {
        return N.cancel(D);
      });
    });
    var N, I;
    if (this.transform(T.query).hasClientExports)
      N = new Rn(this.localState.addExportedVariables(T.query, T.variables, T.context).then(v).then(function(D) {
        return D.sources;
      })), I = !0;
    else {
      var C = v(T.variables);
      I = C.fromLink, N = new Rn(C.sources);
    }
    return N.promise.then(R, R), {
      concast: N,
      fromLink: I
    };
  }, e.prototype.refetchQueries = function(t) {
    var r = this, n = t.updateCache, i = t.include, o = t.optimistic, a = o === void 0 ? !1 : o, s = t.removeOptimistic, u = s === void 0 ? a ? ac("refetchQueries") : void 0 : s, c = t.onQueryUpdated, _ = /* @__PURE__ */ new Map();
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
        var p = f.watcher instanceof bu && f.watcher.observableQuery;
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
      var d = f.oq, p = f.lastDiff, m = f.diff, O;
      if (c) {
        if (!m) {
          var E = d.queryInfo;
          E.reset(), m = E.getDiff();
        }
        O = c(d, m, p);
      }
      (!c || O === !0) && (O = d.refetch()), O !== !1 && l.set(d, O), h.indexOf("legacyOneTimeQuery") >= 0 && r.stopQueryNoBroadcast(h);
    }), u && this.cache.removeOptimistic(u), l;
  }, e.prototype.fetchQueryByPolicy = function(t, r, n) {
    var i = this, o = r.query, a = r.variables, s = r.fetchPolicy, u = r.refetchWritePolicy, c = r.errorPolicy, _ = r.returnPartialData, l = r.context, f = r.notifyOnNetworkStatusChange, h = t.networkStatus;
    t.init({
      document: this.transform(o).document,
      variables: a,
      networkStatus: n
    });
    var d = function() {
      return t.getDiff(a);
    }, p = function(v, R) {
      R === void 0 && (R = t.networkStatus || Ie.loading);
      var N = v.result;
      __DEV__ && !_ && !xe(N, {}) && Am(v.missing);
      var I = function(C) {
        return ye.of(g({ data: C, loading: Ji(R), networkStatus: R }, v.complete ? null : { partial: !0 }));
      };
      return N && i.transform(o).hasForcedResolvers ? i.localState.runResolvers({
        document: o,
        remoteResult: { data: N },
        context: l,
        variables: a,
        onlyRunForcedResolvers: !0
      }).then(function(C) {
        return I(C.data || void 0);
      }) : c === "none" && R === Ie.refetch && Array.isArray(v.missing) ? I(void 0) : I(N);
    }, m = s === "no-cache" ? 0 : n === Ie.refetch && u !== "merge" ? 1 : 2, O = function() {
      return i.getResultsFromLink(t, m, {
        variables: a,
        context: l,
        fetchPolicy: s,
        errorPolicy: c
      });
    }, E = f && typeof h == "number" && h !== n && Ji(n);
    switch (s) {
      default:
      case "cache-first": {
        var T = d();
        return T.complete ? { fromLink: !1, sources: [p(T, t.markReady())] } : _ || E ? { fromLink: !0, sources: [p(T), O()] } : { fromLink: !0, sources: [O()] };
      }
      case "cache-and-network": {
        var T = d();
        return T.complete || _ || E ? { fromLink: !0, sources: [p(T), O()] } : { fromLink: !0, sources: [O()] };
      }
      case "cache-only":
        return { fromLink: !1, sources: [p(d(), t.markReady())] };
      case "network-only":
        return E ? { fromLink: !0, sources: [p(d()), O()] } : { fromLink: !0, sources: [O()] };
      case "no-cache":
        return E ? {
          fromLink: !0,
          sources: [
            p(t.getDiff()),
            O()
          ]
        } : { fromLink: !0, sources: [O()] };
      case "standby":
        return { fromLink: !1, sources: [] };
    }
  }, e.prototype.getQuery = function(t) {
    return t && !this.queries.has(t) && this.queries.set(t, new bu(this, t)), this.queries.get(t);
  }, e.prototype.prepareContext = function(t) {
    t === void 0 && (t = {});
    var r = this.localState.prepareContext(t);
    return g(g({}, r), { clientAwareness: this.clientAwareness });
  }, e;
}(), Zf = !1, IN = function() {
  function e(t) {
    var r = this;
    this.resetStoreCallbacks = [], this.clearStoreCallbacks = [];
    var n = t.uri, i = t.credentials, o = t.headers, a = t.cache, s = t.ssrMode, u = s === void 0 ? !1 : s, c = t.ssrForceFetchDelay, _ = c === void 0 ? 0 : c, l = t.connectToDevTools, f = l === void 0 ? typeof window == "object" && !window.__APOLLO_CLIENT__ && __DEV__ : l, h = t.queryDeduplication, d = h === void 0 ? !0 : h, p = t.defaultOptions, m = t.assumeImmutableResults, O = m === void 0 ? !1 : m, E = t.resolvers, T = t.typeDefs, v = t.fragmentMatcher, R = t.name, N = t.version, I = t.link;
    if (I || (I = n ? new AI({ uri: n, credentials: i, headers: o }) : ii.empty()), !a)
      throw __DEV__ ? new Ee(`To initialize Apollo Client, you must specify a 'cache' property in the options object. 
For more information, please visit: https://go.apollo.dev/c/docs`) : new Ee(9);
    if (this.link = I, this.cache = a, this.disableNetworkFetches = u || _ > 0, this.queryDeduplication = d, this.defaultOptions = p || /* @__PURE__ */ Object.create(null), this.typeDefs = T, _ && setTimeout(function() {
      return r.disableNetworkFetches = !1;
    }, _), this.watchQuery = this.watchQuery.bind(this), this.query = this.query.bind(this), this.mutate = this.mutate.bind(this), this.resetStore = this.resetStore.bind(this), this.reFetchObservableQueries = this.reFetchObservableQueries.bind(this), f && typeof window == "object" && (window.__APOLLO_CLIENT__ = this), !Zf && f && __DEV__ && (Zf = !0, typeof window < "u" && window.document && window.top === window.self && !window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__)) {
      var C = window.navigator, D = C && C.userAgent, G = void 0;
      typeof D == "string" && (D.indexOf("Chrome/") > -1 ? G = "https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm" : D.indexOf("Firefox/") > -1 && (G = "https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/")), G && __DEV__ && k.log("Download the Apollo DevTools for a better development experience: " + G);
    }
    this.version = Jg, this.localState = new ym({
      cache: a,
      client: this,
      resolvers: E,
      fragmentMatcher: v
    }), this.queryManager = new gN({
      cache: this.cache,
      link: this.link,
      defaultOptions: this.defaultOptions,
      queryDeduplication: d,
      ssrMode: u,
      clientAwareness: {
        name: R,
        version: N
      },
      localState: this.localState,
      assumeImmutableResults: O,
      onBroadcast: f ? function() {
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
  return e.prototype.stop = function() {
    this.queryManager.stop();
  }, e.prototype.watchQuery = function(t) {
    return this.defaultOptions.watchQuery && (t = du(this.defaultOptions.watchQuery, t)), this.disableNetworkFetches && (t.fetchPolicy === "network-only" || t.fetchPolicy === "cache-and-network") && (t = g(g({}, t), { fetchPolicy: "cache-first" })), this.queryManager.watchQuery(t);
  }, e.prototype.query = function(t) {
    return this.defaultOptions.query && (t = du(this.defaultOptions.query, t)), __DEV__ ? k(t.fetchPolicy !== "cache-and-network", "The cache-and-network fetchPolicy does not work with client.query, because client.query can only return a single result. Please use client.watchQuery to receive multiple results from the cache and the network, or consider using a different fetchPolicy, such as cache-first or network-only.") : k(t.fetchPolicy !== "cache-and-network", 10), this.disableNetworkFetches && t.fetchPolicy === "network-only" && (t = g(g({}, t), { fetchPolicy: "cache-first" })), this.queryManager.query(t);
  }, e.prototype.mutate = function(t) {
    return this.defaultOptions.mutate && (t = du(this.defaultOptions.mutate, t)), this.queryManager.mutate(t);
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
    return uc(this.link, t);
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
      __DEV__ && k.debug("In client.refetchQueries, Promise.all promise rejected with error ".concat(a));
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
function NN(e) {
  return new ii(function(t, r) {
    var n = nn(t, []);
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
const AN = `${kp}/${Lp._GRAPHQL}`, yN = new fl(), SN = em({
  uri: AN
}), DN = NN((e, { headers: t }) => {
  const r = yN.get("AUTH_TOKEN", "");
  return {
    headers: {
      ...t,
      Authorization: `Bearer ${r}`,
      // Needed to upload files
      "apollo-require-preflight": !0
    }
  };
});
new IN({
  cache: new TN(),
  link: DN.concat(SN)
});
function Sm(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: GN } = Object.prototype, { getPrototypeOf: Pl } = Object, bs = ((e) => (t) => {
  const r = GN.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Qt = (e) => (e = e.toLowerCase(), (t) => bs(t) === e), gs = (e) => (t) => typeof t === e, { isArray: ai } = Array, Qi = gs("undefined");
function UN(e) {
  return e !== null && !Qi(e) && e.constructor !== null && !Qi(e.constructor) && It(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Dm = Qt("ArrayBuffer");
function CN(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Dm(e.buffer), t;
}
const wN = gs("string"), It = gs("function"), Gm = gs("number"), Is = (e) => e !== null && typeof e == "object", PN = (e) => e === !0 || e === !1, _a = (e) => {
  if (bs(e) !== "object")
    return !1;
  const t = Pl(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, HN = Qt("Date"), MN = Qt("File"), kN = Qt("Blob"), LN = Qt("FileList"), BN = (e) => Is(e) && It(e.pipe), xN = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || It(e.append) && ((t = bs(e)) === "formdata" || // detect form-data instance
  t === "object" && It(e.toString) && e.toString() === "[object FormData]"));
}, FN = Qt("URLSearchParams"), jN = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function So(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, i;
  if (typeof e != "object" && (e = [e]), ai(e))
    for (n = 0, i = e.length; n < i; n++)
      t.call(null, e[n], n, e);
  else {
    const o = r ? Object.getOwnPropertyNames(e) : Object.keys(e), a = o.length;
    let s;
    for (n = 0; n < a; n++)
      s = o[n], t.call(null, e[s], s, e);
  }
}
function Um(e, t) {
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length, i;
  for (; n-- > 0; )
    if (i = r[n], t === i.toLowerCase())
      return i;
  return null;
}
const Cm = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), wm = (e) => !Qi(e) && e !== Cm;
function Rc() {
  const { caseless: e } = wm(this) && this || {}, t = {}, r = (n, i) => {
    const o = e && Um(t, i) || i;
    _a(t[o]) && _a(n) ? t[o] = Rc(t[o], n) : _a(n) ? t[o] = Rc({}, n) : ai(n) ? t[o] = n.slice() : t[o] = n;
  };
  for (let n = 0, i = arguments.length; n < i; n++)
    arguments[n] && So(arguments[n], r);
  return t;
}
const VN = (e, t, r, { allOwnKeys: n } = {}) => (So(t, (i, o) => {
  r && It(i) ? e[o] = Sm(i, r) : e[o] = i;
}, { allOwnKeys: n }), e), WN = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), XN = (e, t, r, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, YN = (e, t, r, n) => {
  let i, o, a;
  const s = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (i = Object.getOwnPropertyNames(e), o = i.length; o-- > 0; )
      a = i[o], (!n || n(a, e, t)) && !s[a] && (t[a] = e[a], s[a] = !0);
    e = r !== !1 && Pl(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, KN = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, $N = (e) => {
  if (!e)
    return null;
  if (ai(e))
    return e;
  let t = e.length;
  if (!Gm(t))
    return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, zN = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Pl(Uint8Array)), qN = (e, t) => {
  const n = (e && e[Symbol.iterator]).call(e);
  let i;
  for (; (i = n.next()) && !i.done; ) {
    const o = i.value;
    t.call(e, o[0], o[1]);
  }
}, JN = (e, t) => {
  let r;
  const n = [];
  for (; (r = e.exec(t)) !== null; )
    n.push(r);
  return n;
}, QN = Qt("HTMLFormElement"), ZN = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, i) {
    return n.toUpperCase() + i;
  }
), ed = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), eA = Qt("RegExp"), Pm = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  So(r, (i, o) => {
    t(i, o, e) !== !1 && (n[o] = i);
  }), Object.defineProperties(e, n);
}, tA = (e) => {
  Pm(e, (t, r) => {
    if (It(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = e[r];
    if (It(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, rA = (e, t) => {
  const r = {}, n = (i) => {
    i.forEach((o) => {
      r[o] = !0;
    });
  };
  return ai(e) ? n(e) : n(String(e).split(t)), r;
}, nA = () => {
}, iA = (e, t) => (e = +e, Number.isFinite(e) ? e : t), gu = "abcdefghijklmnopqrstuvwxyz", td = "0123456789", Hm = {
  DIGIT: td,
  ALPHA: gu,
  ALPHA_DIGIT: gu + gu.toUpperCase() + td
}, oA = (e = 16, t = Hm.ALPHA_DIGIT) => {
  let r = "";
  const { length: n } = t;
  for (; e--; )
    r += t[Math.random() * n | 0];
  return r;
};
function aA(e) {
  return !!(e && It(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const sA = (e) => {
  const t = new Array(10), r = (n, i) => {
    if (Is(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        t[i] = n;
        const o = ai(n) ? [] : {};
        return So(n, (a, s) => {
          const u = r(a, i + 1);
          !Qi(u) && (o[s] = u);
        }), t[i] = void 0, o;
      }
    }
    return n;
  };
  return r(e, 0);
}, uA = Qt("AsyncFunction"), cA = (e) => e && (Is(e) || It(e)) && It(e.then) && It(e.catch), A = {
  isArray: ai,
  isArrayBuffer: Dm,
  isBuffer: UN,
  isFormData: xN,
  isArrayBufferView: CN,
  isString: wN,
  isNumber: Gm,
  isBoolean: PN,
  isObject: Is,
  isPlainObject: _a,
  isUndefined: Qi,
  isDate: HN,
  isFile: MN,
  isBlob: kN,
  isRegExp: eA,
  isFunction: It,
  isStream: BN,
  isURLSearchParams: FN,
  isTypedArray: zN,
  isFileList: LN,
  forEach: So,
  merge: Rc,
  extend: VN,
  trim: jN,
  stripBOM: WN,
  inherits: XN,
  toFlatObject: YN,
  kindOf: bs,
  kindOfTest: Qt,
  endsWith: KN,
  toArray: $N,
  forEachEntry: qN,
  matchAll: JN,
  isHTMLForm: QN,
  hasOwnProperty: ed,
  hasOwnProp: ed,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Pm,
  freezeMethods: tA,
  toObjectSet: rA,
  toCamelCase: ZN,
  noop: nA,
  toFiniteNumber: iA,
  findKey: Um,
  global: Cm,
  isContextDefined: wm,
  ALPHABET: Hm,
  generateString: oA,
  isSpecCompliantForm: aA,
  toJSONObject: sA,
  isAsyncFn: uA,
  isThenable: cA
};
function _e(e, t, r, n, i) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), n && (this.request = n), i && (this.response = i);
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
const Mm = _e.prototype, km = {};
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
  km[e] = { value: e };
});
Object.defineProperties(_e, km);
Object.defineProperty(Mm, "isAxiosError", { value: !0 });
_e.from = (e, t, r, n, i, o) => {
  const a = Object.create(Mm);
  return A.toFlatObject(e, a, function(u) {
    return u !== Error.prototype;
  }, (s) => s !== "isAxiosError"), _e.call(a, e.message, t, r, n, i), a.cause = e, a.name = e.name, o && Object.assign(a, o), a;
};
const lA = null;
function vc(e) {
  return A.isPlainObject(e) || A.isArray(e);
}
function Lm(e) {
  return A.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function rd(e, t, r) {
  return e ? e.concat(t).map(function(i, o) {
    return i = Lm(i), !r && o ? "[" + i + "]" : i;
  }).join(r ? "." : "") : t;
}
function _A(e) {
  return A.isArray(e) && !e.some(vc);
}
const fA = A.toFlatObject(A, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Ns(e, t, r) {
  if (!A.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = A.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(p, m) {
    return !A.isUndefined(m[p]);
  });
  const n = r.metaTokens, i = r.visitor || _, o = r.dots, a = r.indexes, u = (r.Blob || typeof Blob < "u" && Blob) && A.isSpecCompliantForm(t);
  if (!A.isFunction(i))
    throw new TypeError("visitor must be a function");
  function c(d) {
    if (d === null)
      return "";
    if (A.isDate(d))
      return d.toISOString();
    if (!u && A.isBlob(d))
      throw new _e("Blob is not supported. Use a Buffer instead.");
    return A.isArrayBuffer(d) || A.isTypedArray(d) ? u && typeof Blob == "function" ? new Blob([d]) : Buffer.from(d) : d;
  }
  function _(d, p, m) {
    let O = d;
    if (d && !m && typeof d == "object") {
      if (A.endsWith(p, "{}"))
        p = n ? p : p.slice(0, -2), d = JSON.stringify(d);
      else if (A.isArray(d) && _A(d) || (A.isFileList(d) || A.endsWith(p, "[]")) && (O = A.toArray(d)))
        return p = Lm(p), O.forEach(function(T, v) {
          !(A.isUndefined(T) || T === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? rd([p], v, o) : a === null ? p : p + "[]",
            c(T)
          );
        }), !1;
    }
    return vc(d) ? !0 : (t.append(rd(m, p, o), c(d)), !1);
  }
  const l = [], f = Object.assign(fA, {
    defaultVisitor: _,
    convertValue: c,
    isVisitable: vc
  });
  function h(d, p) {
    if (!A.isUndefined(d)) {
      if (l.indexOf(d) !== -1)
        throw Error("Circular reference detected in " + p.join("."));
      l.push(d), A.forEach(d, function(O, E) {
        (!(A.isUndefined(O) || O === null) && i.call(
          t,
          O,
          A.isString(E) ? E.trim() : E,
          p,
          f
        )) === !0 && h(O, p ? p.concat(E) : [E]);
      }), l.pop();
    }
  }
  if (!A.isObject(e))
    throw new TypeError("data must be an object");
  return h(e), t;
}
function nd(e) {
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
function Hl(e, t) {
  this._pairs = [], e && Ns(e, this, t);
}
const Bm = Hl.prototype;
Bm.append = function(t, r) {
  this._pairs.push([t, r]);
};
Bm.toString = function(t) {
  const r = t ? function(n) {
    return t.call(this, n, nd);
  } : nd;
  return this._pairs.map(function(i) {
    return r(i[0]) + "=" + r(i[1]);
  }, "").join("&");
};
function dA(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function xm(e, t, r) {
  if (!t)
    return e;
  const n = r && r.encode || dA, i = r && r.serialize;
  let o;
  if (i ? o = i(t, r) : o = A.isURLSearchParams(t) ? t.toString() : new Hl(t, r).toString(n), o) {
    const a = e.indexOf("#");
    a !== -1 && (e = e.slice(0, a)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
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
    A.forEach(this.handlers, function(n) {
      n !== null && t(n);
    });
  }
}
const id = hA, Fm = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, pA = typeof URLSearchParams < "u" ? URLSearchParams : Hl, mA = typeof FormData < "u" ? FormData : null, EA = typeof Blob < "u" ? Blob : null, TA = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), OA = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), Xt = {
  isBrowser: !0,
  classes: {
    URLSearchParams: pA,
    FormData: mA,
    Blob: EA
  },
  isStandardBrowserEnv: TA,
  isStandardBrowserWebWorkerEnv: OA,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function RA(e, t) {
  return Ns(e, new Xt.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, i, o) {
      return Xt.isNode && A.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function vA(e) {
  return A.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function bA(e) {
  const t = {}, r = Object.keys(e);
  let n;
  const i = r.length;
  let o;
  for (n = 0; n < i; n++)
    o = r[n], t[o] = e[o];
  return t;
}
function jm(e) {
  function t(r, n, i, o) {
    let a = r[o++];
    const s = Number.isFinite(+a), u = o >= r.length;
    return a = !a && A.isArray(i) ? i.length : a, u ? (A.hasOwnProp(i, a) ? i[a] = [i[a], n] : i[a] = n, !s) : ((!i[a] || !A.isObject(i[a])) && (i[a] = []), t(r, n, i[a], o) && A.isArray(i[a]) && (i[a] = bA(i[a])), !s);
  }
  if (A.isFormData(e) && A.isFunction(e.entries)) {
    const r = {};
    return A.forEachEntry(e, (n, i) => {
      t(vA(n), i, r, 0);
    }), r;
  }
  return null;
}
const gA = {
  "Content-Type": void 0
};
function IA(e, t, r) {
  if (A.isString(e))
    try {
      return (t || JSON.parse)(e), A.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(e);
}
const As = {
  transitional: Fm,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, r) {
    const n = r.getContentType() || "", i = n.indexOf("application/json") > -1, o = A.isObject(t);
    if (o && A.isHTMLForm(t) && (t = new FormData(t)), A.isFormData(t))
      return i && i ? JSON.stringify(jm(t)) : t;
    if (A.isArrayBuffer(t) || A.isBuffer(t) || A.isStream(t) || A.isFile(t) || A.isBlob(t))
      return t;
    if (A.isArrayBufferView(t))
      return t.buffer;
    if (A.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let s;
    if (o) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return RA(t, this.formSerializer).toString();
      if ((s = A.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const u = this.env && this.env.FormData;
        return Ns(
          s ? { "files[]": t } : t,
          u && new u(),
          this.formSerializer
        );
      }
    }
    return o || i ? (r.setContentType("application/json", !1), IA(t)) : t;
  }],
  transformResponse: [function(t) {
    const r = this.transitional || As.transitional, n = r && r.forcedJSONParsing, i = this.responseType === "json";
    if (t && A.isString(t) && (n && !this.responseType || i)) {
      const a = !(r && r.silentJSONParsing) && i;
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
  As.headers[t] = A.merge(gA);
});
const Ml = As, NA = A.toObjectSet([
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
  let r, n, i;
  return e && e.split(`
`).forEach(function(a) {
    i = a.indexOf(":"), r = a.substring(0, i).trim().toLowerCase(), n = a.substring(i + 1).trim(), !(!r || t[r] && NA[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n);
  }), t;
}, od = Symbol("internals");
function Oi(e) {
  return e && String(e).trim().toLowerCase();
}
function fa(e) {
  return e === !1 || e == null ? e : A.isArray(e) ? e.map(fa) : String(e);
}
function yA(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const SA = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Iu(e, t, r, n, i) {
  if (A.isFunction(n))
    return n.call(this, t, r);
  if (i && (t = r), !!A.isString(t)) {
    if (A.isString(n))
      return t.indexOf(n) !== -1;
    if (A.isRegExp(n))
      return n.test(t);
  }
}
function DA(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function GA(e, t) {
  const r = A.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + r, {
      value: function(i, o, a) {
        return this[n].call(this, t, i, o, a);
      },
      configurable: !0
    });
  });
}
class ys {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    const i = this;
    function o(s, u, c) {
      const _ = Oi(u);
      if (!_)
        throw new Error("header name must be a non-empty string");
      const l = A.findKey(i, _);
      (!l || i[l] === void 0 || c === !0 || c === void 0 && i[l] !== !1) && (i[l || u] = fa(s));
    }
    const a = (s, u) => A.forEach(s, (c, _) => o(c, _, u));
    return A.isPlainObject(t) || t instanceof this.constructor ? a(t, r) : A.isString(t) && (t = t.trim()) && !SA(t) ? a(AA(t), r) : t != null && o(r, t, n), this;
  }
  get(t, r) {
    if (t = Oi(t), t) {
      const n = A.findKey(this, t);
      if (n) {
        const i = this[n];
        if (!r)
          return i;
        if (r === !0)
          return yA(i);
        if (A.isFunction(r))
          return r.call(this, i, n);
        if (A.isRegExp(r))
          return r.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = Oi(t), t) {
      const n = A.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || Iu(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let i = !1;
    function o(a) {
      if (a = Oi(a), a) {
        const s = A.findKey(n, a);
        s && (!r || Iu(n, n[s], s, r)) && (delete n[s], i = !0);
      }
    }
    return A.isArray(t) ? t.forEach(o) : o(t), i;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length, i = !1;
    for (; n--; ) {
      const o = r[n];
      (!t || Iu(this, this[o], o, t, !0)) && (delete this[o], i = !0);
    }
    return i;
  }
  normalize(t) {
    const r = this, n = {};
    return A.forEach(this, (i, o) => {
      const a = A.findKey(n, o);
      if (a) {
        r[a] = fa(i), delete r[o];
        return;
      }
      const s = t ? DA(o) : String(o).trim();
      s !== o && delete r[o], r[s] = fa(i), n[s] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = /* @__PURE__ */ Object.create(null);
    return A.forEach(this, (n, i) => {
      n != null && n !== !1 && (r[i] = t && A.isArray(n) ? n.join(", ") : n);
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
    const n = (this[od] = this[od] = {
      accessors: {}
    }).accessors, i = this.prototype;
    function o(a) {
      const s = Oi(a);
      n[s] || (GA(i, a), n[s] = !0);
    }
    return A.isArray(t) ? t.forEach(o) : o(t), this;
  }
}
ys.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
A.freezeMethods(ys.prototype);
A.freezeMethods(ys);
const cr = ys;
function Nu(e, t) {
  const r = this || Ml, n = t || r, i = cr.from(n.headers);
  let o = n.data;
  return A.forEach(e, function(s) {
    o = s.call(r, o, i.normalize(), t ? t.status : void 0);
  }), i.normalize(), o;
}
function Vm(e) {
  return !!(e && e.__CANCEL__);
}
function Do(e, t, r) {
  _e.call(this, e ?? "canceled", _e.ERR_CANCELED, t, r), this.name = "CanceledError";
}
A.inherits(Do, _e, {
  __CANCEL__: !0
});
function UA(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? e(r) : t(new _e(
    "Request failed with status code " + r.status,
    [_e.ERR_BAD_REQUEST, _e.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
const CA = Xt.isStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  function() {
    return {
      write: function(r, n, i, o, a, s) {
        const u = [];
        u.push(r + "=" + encodeURIComponent(n)), A.isNumber(i) && u.push("expires=" + new Date(i).toGMTString()), A.isString(o) && u.push("path=" + o), A.isString(a) && u.push("domain=" + a), s === !0 && u.push("secure"), document.cookie = u.join("; ");
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
function wA(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function PA(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Wm(e, t) {
  return e && !wA(t) ? PA(e, t) : t;
}
const HA = Xt.isStandardBrowserEnv ? (
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
      const s = A.isString(a) ? i(a) : a;
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
function MA(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function kA(e, t) {
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
function ad(e, t) {
  let r = 0;
  const n = kA(50, 250);
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
const LA = typeof XMLHttpRequest < "u", BA = LA && function(e) {
  return new Promise(function(r, n) {
    let i = e.data;
    const o = cr.from(e.headers).normalize(), a = e.responseType;
    let s;
    function u() {
      e.cancelToken && e.cancelToken.unsubscribe(s), e.signal && e.signal.removeEventListener("abort", s);
    }
    A.isFormData(i) && (Xt.isStandardBrowserEnv || Xt.isStandardBrowserWebWorkerEnv ? o.setContentType(!1) : o.setContentType("multipart/form-data;", !1));
    let c = new XMLHttpRequest();
    if (e.auth) {
      const h = e.auth.username || "", d = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      o.set("Authorization", "Basic " + btoa(h + ":" + d));
    }
    const _ = Wm(e.baseURL, e.url);
    c.open(e.method.toUpperCase(), xm(_, e.params, e.paramsSerializer), !0), c.timeout = e.timeout;
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
      UA(function(O) {
        r(O), u();
      }, function(O) {
        n(O), u();
      }, p), c = null;
    }
    if ("onloadend" in c ? c.onloadend = l : c.onreadystatechange = function() {
      !c || c.readyState !== 4 || c.status === 0 && !(c.responseURL && c.responseURL.indexOf("file:") === 0) || setTimeout(l);
    }, c.onabort = function() {
      c && (n(new _e("Request aborted", _e.ECONNABORTED, e, c)), c = null);
    }, c.onerror = function() {
      n(new _e("Network Error", _e.ERR_NETWORK, e, c)), c = null;
    }, c.ontimeout = function() {
      let d = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const p = e.transitional || Fm;
      e.timeoutErrorMessage && (d = e.timeoutErrorMessage), n(new _e(
        d,
        p.clarifyTimeoutError ? _e.ETIMEDOUT : _e.ECONNABORTED,
        e,
        c
      )), c = null;
    }, Xt.isStandardBrowserEnv) {
      const h = (e.withCredentials || HA(_)) && e.xsrfCookieName && CA.read(e.xsrfCookieName);
      h && o.set(e.xsrfHeaderName, h);
    }
    i === void 0 && o.setContentType(null), "setRequestHeader" in c && A.forEach(o.toJSON(), function(d, p) {
      c.setRequestHeader(p, d);
    }), A.isUndefined(e.withCredentials) || (c.withCredentials = !!e.withCredentials), a && a !== "json" && (c.responseType = e.responseType), typeof e.onDownloadProgress == "function" && c.addEventListener("progress", ad(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && c.upload && c.upload.addEventListener("progress", ad(e.onUploadProgress)), (e.cancelToken || e.signal) && (s = (h) => {
      c && (n(!h || h.type ? new Do(null, e, c) : h), c.abort(), c = null);
    }, e.cancelToken && e.cancelToken.subscribe(s), e.signal && (e.signal.aborted ? s() : e.signal.addEventListener("abort", s)));
    const f = MA(_);
    if (f && Xt.protocols.indexOf(f) === -1) {
      n(new _e("Unsupported protocol " + f + ":", _e.ERR_BAD_REQUEST, e));
      return;
    }
    c.send(i || null);
  });
}, da = {
  http: lA,
  xhr: BA
};
A.forEach(da, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const xA = {
  getAdapter: (e) => {
    e = A.isArray(e) ? e : [e];
    const { length: t } = e;
    let r, n;
    for (let i = 0; i < t && (r = e[i], !(n = A.isString(r) ? da[r.toLowerCase()] : r)); i++)
      ;
    if (!n)
      throw n === !1 ? new _e(
        `Adapter ${r} is not supported by the environment`,
        "ERR_NOT_SUPPORT"
      ) : new Error(
        A.hasOwnProp(da, r) ? `Adapter '${r}' is not available in the build` : `Unknown adapter '${r}'`
      );
    if (!A.isFunction(n))
      throw new TypeError("adapter is not a function");
    return n;
  },
  adapters: da
};
function Au(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Do(null, e);
}
function sd(e) {
  return Au(e), e.headers = cr.from(e.headers), e.data = Nu.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), xA.getAdapter(e.adapter || Ml.adapter)(e).then(function(n) {
    return Au(e), n.data = Nu.call(
      e,
      e.transformResponse,
      n
    ), n.headers = cr.from(n.headers), n;
  }, function(n) {
    return Vm(n) || (Au(e), n && n.response && (n.response.data = Nu.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = cr.from(n.response.headers))), Promise.reject(n);
  });
}
const ud = (e) => e instanceof cr ? e.toJSON() : e;
function qn(e, t) {
  t = t || {};
  const r = {};
  function n(c, _, l) {
    return A.isPlainObject(c) && A.isPlainObject(_) ? A.merge.call({ caseless: l }, c, _) : A.isPlainObject(_) ? A.merge({}, _) : A.isArray(_) ? _.slice() : _;
  }
  function i(c, _, l) {
    if (A.isUndefined(_)) {
      if (!A.isUndefined(c))
        return n(void 0, c, l);
    } else
      return n(c, _, l);
  }
  function o(c, _) {
    if (!A.isUndefined(_))
      return n(void 0, _);
  }
  function a(c, _) {
    if (A.isUndefined(_)) {
      if (!A.isUndefined(c))
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
    headers: (c, _) => i(ud(c), ud(_), !0)
  };
  return A.forEach(Object.keys(Object.assign({}, e, t)), function(_) {
    const l = u[_] || i, f = l(e[_], t[_], _);
    A.isUndefined(f) && l !== s || (r[_] = f);
  }), r;
}
const Xm = "1.4.0", kl = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  kl[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const cd = {};
kl.transitional = function(t, r, n) {
  function i(o, a) {
    return "[Axios v" + Xm + "] Transitional option '" + o + "'" + a + (n ? ". " + n : "");
  }
  return (o, a, s) => {
    if (t === !1)
      throw new _e(
        i(a, " has been removed" + (r ? " in " + r : "")),
        _e.ERR_DEPRECATED
      );
    return r && !cd[a] && (cd[a] = !0, console.warn(
      i(
        a,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(o, a, s) : !0;
  };
};
function FA(e, t, r) {
  if (typeof e != "object")
    throw new _e("options must be an object", _e.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let i = n.length;
  for (; i-- > 0; ) {
    const o = n[i], a = t[o];
    if (a) {
      const s = e[o], u = s === void 0 || a(s, o, e);
      if (u !== !0)
        throw new _e("option " + o + " must be " + u, _e.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new _e("Unknown option " + o, _e.ERR_BAD_OPTION);
  }
}
const bc = {
  assertOptions: FA,
  validators: kl
}, Rr = bc.validators;
class Va {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new id(),
      response: new id()
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
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = qn(this.defaults, r);
    const { transitional: n, paramsSerializer: i, headers: o } = r;
    n !== void 0 && bc.assertOptions(n, {
      silentJSONParsing: Rr.transitional(Rr.boolean),
      forcedJSONParsing: Rr.transitional(Rr.boolean),
      clarifyTimeoutError: Rr.transitional(Rr.boolean)
    }, !1), i != null && (A.isFunction(i) ? r.paramsSerializer = {
      serialize: i
    } : bc.assertOptions(i, {
      encode: Rr.function,
      serialize: Rr.function
    }, !0)), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let a;
    a = o && A.merge(
      o.common,
      o[r.method]
    ), a && A.forEach(
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
      const d = [sd.bind(this), void 0];
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
      _ = sd.call(this, h);
    } catch (d) {
      return Promise.reject(d);
    }
    for (l = 0, f = c.length; l < f; )
      _ = _.then(c[l++], c[l++]);
    return _;
  }
  getUri(t) {
    t = qn(this.defaults, t);
    const r = Wm(t.baseURL, t.url);
    return xm(r, t.params, t.paramsSerializer);
  }
}
A.forEach(["delete", "get", "head", "options"], function(t) {
  Va.prototype[t] = function(r, n) {
    return this.request(qn(n || {}, {
      method: t,
      url: r,
      data: (n || {}).data
    }));
  };
});
A.forEach(["post", "put", "patch"], function(t) {
  function r(n) {
    return function(o, a, s) {
      return this.request(qn(s || {}, {
        method: t,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: a
      }));
    };
  }
  Va.prototype[t] = r(), Va.prototype[t + "Form"] = r(!0);
});
const ha = Va;
class Ll {
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
      n.reason || (n.reason = new Do(o, a, s), r(n.reason));
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
      token: new Ll(function(i) {
        t = i;
      }),
      cancel: t
    };
  }
}
const jA = Ll;
function VA(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function WA(e) {
  return A.isObject(e) && e.isAxiosError === !0;
}
const gc = {
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
Object.entries(gc).forEach(([e, t]) => {
  gc[t] = e;
});
const XA = gc;
function Ym(e) {
  const t = new ha(e), r = Sm(ha.prototype.request, t);
  return A.extend(r, ha.prototype, t, { allOwnKeys: !0 }), A.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(i) {
    return Ym(qn(e, i));
  }, r;
}
const je = Ym(Ml);
je.Axios = ha;
je.CanceledError = Do;
je.CancelToken = jA;
je.isCancel = Vm;
je.VERSION = Xm;
je.toFormData = Ns;
je.AxiosError = _e;
je.Cancel = je.CanceledError;
je.all = function(t) {
  return Promise.all(t);
};
je.spread = VA;
je.isAxiosError = WA;
je.mergeConfig = qn;
je.AxiosHeaders = cr;
je.formToJSON = (e) => jm(A.isHTMLForm(e) ? new FormData(e) : e);
je.HttpStatusCode = XA;
je.default = je;
const YA = je, KA = YA.create({
  baseURL: kp,
  withCredentials: !0
}), $A = {
  MAIN: "/",
  EDITOR: "/edit",
  ABOUT: "/about",
  PROFILE: "/users"
}, Km = () => {
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
}, zA = (e = !1) => {
  const [t, r] = dt(e);
  return {
    off: () => r(!1),
    on: () => r(!0),
    toggle: () => r(!t),
    val: t
  };
}, qA = (e, t) => {
  const r = se();
  return (...n) => {
    r.current && clearTimeout(r.current), r.current = setTimeout(() => {
      e(...n);
    }, t);
  };
}, Ic = ({ when: e, children: t }) => e ? t : null, $m = ss({}), JA = async () => Promise.all([
  Promise.resolve().then(() => nw),
  import("./use-gesture-react.esm-7899cdd1.mjs")
]), Bl = ({ children: e }) => {
  const t = se(), r = se(), n = zA(), i = async () => {
    const [a, s] = await JA();
    t.current = a, r.current = s, n.on();
  };
  Le(() => {
    i();
  }, []);
  const o = yr(
    () => ({
      Spring: t.current,
      Gesture: r.current,
      isLoaded: n.val
    }),
    [n.val]
  );
  return /* @__PURE__ */ K($m.Provider, { value: o, children: /* @__PURE__ */ K(Ic, { when: n.val, children: e }) });
}, Ss = () => ot($m);
var xl, Y, zm, qr, ld, qm, Nc, pa = {}, Jm = [], QA = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Ds = Array.isArray;
function Dr(e, t) {
  for (var r in t)
    e[r] = t[r];
  return e;
}
function Qm(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function _d(e, t, r) {
  var n, i, o, a = {};
  for (o in t)
    o == "key" ? n = t[o] : o == "ref" ? i = t[o] : a[o] = t[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? xl.call(arguments, 2) : r), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      a[o] === void 0 && (a[o] = e.defaultProps[o]);
  return ma(e, a, n, i, null);
}
function ma(e, t, r, n, i) {
  var o = { type: e, props: t, key: r, ref: n, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++zm };
  return i == null && Y.vnode != null && Y.vnode(o), o;
}
function Zi(e) {
  return e.children;
}
function lr(e, t) {
  this.props = e, this.context = t;
}
function Wa(e, t) {
  if (t == null)
    return e.__ ? Wa(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var r; t < e.__k.length; t++)
    if ((r = e.__k[t]) != null && r.__e != null)
      return r.__e;
  return typeof e.type == "function" ? Wa(e) : null;
}
function Zm(e) {
  var t, r;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((r = e.__k[t]) != null && r.__e != null) {
        e.__e = e.__c.base = r.__e;
        break;
      }
    return Zm(e);
  }
}
function fd(e) {
  (!e.__d && (e.__d = !0) && qr.push(e) && !Xa.__r++ || ld !== Y.debounceRendering) && ((ld = Y.debounceRendering) || qm)(Xa);
}
function Xa() {
  var e, t, r, n, i, o, a, s, u;
  for (qr.sort(Nc); e = qr.shift(); )
    e.__d && (t = qr.length, n = void 0, i = void 0, o = void 0, s = (a = (r = e).__v).__e, (u = r.__P) && (n = [], i = [], (o = Dr({}, a)).__v = a.__v + 1, nE(u, a, o, r.__n, u.ownerSVGElement !== void 0, a.__h != null ? [s] : null, n, s ?? Wa(a), a.__h, i), ty(n, a, i), a.__e != s && Zm(a)), qr.length > t && qr.sort(Nc));
  Xa.__r = 0;
}
function eE(e, t, r, n, i, o, a, s, u, c, _) {
  var l, f, h, d, p, m, O, E, T, v, R = 0, N = n && n.__k || Jm, I = N.length, C = I, D = t.length;
  for (r.__k = [], l = 0; l < D; l++)
    (d = r.__k[l] = (d = t[l]) == null || typeof d == "boolean" || typeof d == "function" ? null : typeof d == "string" || typeof d == "number" || typeof d == "bigint" ? ma(null, d, null, null, d) : Ds(d) ? ma(Zi, { children: d }, null, null, null) : d.__b > 0 ? ma(d.type, d.props, d.key, d.ref ? d.ref : null, d.__v) : d) != null && (d.__ = r, d.__b = r.__b + 1, (E = ZA(d, N, O = l + R, C)) === -1 ? h = pa : (h = N[E] || pa, N[E] = void 0, C--), nE(e, d, h, i, o, a, s, u, c, _), p = d.__e, (f = d.ref) && h.ref != f && (h.ref && Fl(h.ref, null, d), _.push(f, d.__c || p, d)), p != null && (m == null && (m = p), v = !(T = h === pa || h.__v === null) && E === O, T ? E == -1 && R-- : E !== O && (E === O + 1 ? (R++, v = !0) : E > O ? C > D - O ? (R += E - O, v = !0) : R-- : R = E < O && E == O - 1 ? E - O : 0), O = l + R, v = v || E == l && !T, typeof d.type != "function" || E === O && h.__k !== d.__k ? typeof d.type == "function" || v ? d.__d !== void 0 ? (u = d.__d, d.__d = void 0) : u = p.nextSibling : u = rE(e, p, u) : u = tE(d, u, e), typeof r.type == "function" && (r.__d = u)));
  for (r.__e = m, l = I; l--; )
    N[l] != null && (typeof r.type == "function" && N[l].__e != null && N[l].__e == r.__d && (r.__d = N[l].__e.nextSibling), iE(N[l], N[l]));
}
function tE(e, t, r) {
  for (var n, i = e.__k, o = 0; i && o < i.length; o++)
    (n = i[o]) && (n.__ = e, t = typeof n.type == "function" ? tE(n, t, r) : rE(r, n.__e, t));
  return t;
}
function Ya(e, t) {
  return t = t || [], e == null || typeof e == "boolean" || (Ds(e) ? e.some(function(r) {
    Ya(r, t);
  }) : t.push(e)), t;
}
function rE(e, t, r) {
  return r == null || r.parentNode !== e ? e.insertBefore(t, null) : t == r && t.parentNode != null || e.insertBefore(t, r), t.nextSibling;
}
function ZA(e, t, r, n) {
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
function ey(e, t, r, n, i) {
  var o;
  for (o in r)
    o === "children" || o === "key" || o in t || Ka(e, o, null, r[o], n);
  for (o in t)
    i && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || r[o] === t[o] || Ka(e, o, t[o], r[o], n);
}
function dd(e, t, r) {
  t[0] === "-" ? e.setProperty(t, r ?? "") : e[t] = r == null ? "" : typeof r != "number" || QA.test(t) ? r : r + "px";
}
function Ka(e, t, r, n, i) {
  var o;
  e:
    if (t === "style")
      if (typeof r == "string")
        e.style.cssText = r;
      else {
        if (typeof n == "string" && (e.style.cssText = n = ""), n)
          for (t in n)
            r && t in r || dd(e.style, t, "");
        if (r)
          for (t in r)
            n && r[t] === n[t] || dd(e.style, t, r[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = r, r ? n || e.addEventListener(t, o ? pd : hd, o) : e.removeEventListener(t, o ? pd : hd, o);
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
function hd(e) {
  return this.l[e.type + !1](Y.event ? Y.event(e) : e);
}
function pd(e) {
  return this.l[e.type + !0](Y.event ? Y.event(e) : e);
}
function nE(e, t, r, n, i, o, a, s, u, c) {
  var _, l, f, h, d, p, m, O, E, T, v, R, N, I, C, D = t.type;
  if (t.constructor !== void 0)
    return null;
  r.__h != null && (u = r.__h, s = t.__e = r.__e, t.__h = null, o = [s]), (_ = Y.__b) && _(t);
  try {
    e:
      if (typeof D == "function") {
        if (O = t.props, E = (_ = D.contextType) && n[_.__c], T = _ ? E ? E.props.value : _.__ : n, r.__c ? m = (l = t.__c = r.__c).__ = l.__E : ("prototype" in D && D.prototype.render ? t.__c = l = new D(O, T) : (t.__c = l = new lr(O, T), l.constructor = D, l.render = ny), E && E.sub(l), l.props = O, l.state || (l.state = {}), l.context = T, l.__n = n, f = l.__d = !0, l.__h = [], l._sb = []), l.__s == null && (l.__s = l.state), D.getDerivedStateFromProps != null && (l.__s == l.state && (l.__s = Dr({}, l.__s)), Dr(l.__s, D.getDerivedStateFromProps(O, l.__s))), h = l.props, d = l.state, l.__v = t, f)
          D.getDerivedStateFromProps == null && l.componentWillMount != null && l.componentWillMount(), l.componentDidMount != null && l.__h.push(l.componentDidMount);
        else {
          if (D.getDerivedStateFromProps == null && O !== h && l.componentWillReceiveProps != null && l.componentWillReceiveProps(O, T), !l.__e && (l.shouldComponentUpdate != null && l.shouldComponentUpdate(O, l.__s, T) === !1 || t.__v === r.__v)) {
            for (t.__v !== r.__v && (l.props = O, l.state = l.__s, l.__d = !1), t.__e = r.__e, t.__k = r.__k, t.__k.forEach(function(G) {
              G && (G.__ = t);
            }), v = 0; v < l._sb.length; v++)
              l.__h.push(l._sb[v]);
            l._sb = [], l.__h.length && a.push(l);
            break e;
          }
          l.componentWillUpdate != null && l.componentWillUpdate(O, l.__s, T), l.componentDidUpdate != null && l.__h.push(function() {
            l.componentDidUpdate(h, d, p);
          });
        }
        if (l.context = T, l.props = O, l.__P = e, l.__e = !1, R = Y.__r, N = 0, "prototype" in D && D.prototype.render) {
          for (l.state = l.__s, l.__d = !1, R && R(t), _ = l.render(l.props, l.state, l.context), I = 0; I < l._sb.length; I++)
            l.__h.push(l._sb[I]);
          l._sb = [];
        } else
          do
            l.__d = !1, R && R(t), _ = l.render(l.props, l.state, l.context), l.state = l.__s;
          while (l.__d && ++N < 25);
        l.state = l.__s, l.getChildContext != null && (n = Dr(Dr({}, n), l.getChildContext())), f || l.getSnapshotBeforeUpdate == null || (p = l.getSnapshotBeforeUpdate(h, d)), eE(e, Ds(C = _ != null && _.type === Zi && _.key == null ? _.props.children : _) ? C : [C], t, r, n, i, o, a, s, u, c), l.base = t.__e, t.__h = null, l.__h.length && a.push(l), m && (l.__E = l.__ = null);
      } else
        o == null && t.__v === r.__v ? (t.__k = r.__k, t.__e = r.__e) : t.__e = ry(r.__e, t, r, n, i, o, a, u, c);
    (_ = Y.diffed) && _(t);
  } catch (G) {
    t.__v = null, (u || o != null) && (t.__e = s, t.__h = !!u, o[o.indexOf(s)] = null), Y.__e(G, t, r);
  }
}
function ty(e, t, r) {
  for (var n = 0; n < r.length; n++)
    Fl(r[n], r[++n], r[++n]);
  Y.__c && Y.__c(t, e), e.some(function(i) {
    try {
      e = i.__h, i.__h = [], e.some(function(o) {
        o.call(i);
      });
    } catch (o) {
      Y.__e(o, i.__v);
    }
  });
}
function ry(e, t, r, n, i, o, a, s, u) {
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
    if (o = o && xl.call(e.childNodes), _ = (f = r.props || pa).dangerouslySetInnerHTML, l = h.dangerouslySetInnerHTML, !s) {
      if (o != null)
        for (f = {}, p = 0; p < e.attributes.length; p++)
          f[e.attributes[p].name] = e.attributes[p].value;
      (l || _) && (l && (_ && l.__html == _.__html || l.__html === e.innerHTML) || (e.innerHTML = l && l.__html || ""));
    }
    if (ey(e, h, f, i, s), l)
      t.__k = [];
    else if (eE(e, Ds(p = t.props.children) ? p : [p], t, r, n, i && d !== "foreignObject", o, a, o ? o[0] : r.__k && Wa(r, 0), s, u), o != null)
      for (p = o.length; p--; )
        o[p] != null && Qm(o[p]);
    s || ("value" in h && (p = h.value) !== void 0 && (p !== e.value || d === "progress" && !p || d === "option" && p !== f.value) && Ka(e, "value", p, f.value, !1), "checked" in h && (p = h.checked) !== void 0 && p !== e.checked && Ka(e, "checked", p, f.checked, !1));
  }
  return e;
}
function Fl(e, t, r) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (n) {
    Y.__e(n, r);
  }
}
function iE(e, t, r) {
  var n, i;
  if (Y.unmount && Y.unmount(e), (n = e.ref) && (n.current && n.current !== e.__e || Fl(n, null, t)), (n = e.__c) != null) {
    if (n.componentWillUnmount)
      try {
        n.componentWillUnmount();
      } catch (o) {
        Y.__e(o, t);
      }
    n.base = n.__P = null, e.__c = void 0;
  }
  if (n = e.__k)
    for (i = 0; i < n.length; i++)
      n[i] && iE(n[i], t, r || typeof e.type != "function");
  r || e.__e == null || Qm(e.__e), e.__ = e.__e = e.__d = void 0;
}
function ny(e, t, r) {
  return this.constructor(e, r);
}
xl = Jm.slice, Y = { __e: function(e, t, r, n) {
  for (var i, o, a; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((o = i.constructor) && o.getDerivedStateFromError != null && (i.setState(o.getDerivedStateFromError(e)), a = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, n || {}), a = i.__d), a)
          return i.__E = i;
      } catch (s) {
        e = s;
      }
  throw e;
} }, zm = 0, lr.prototype.setState = function(e, t) {
  var r;
  r = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Dr({}, this.state), typeof e == "function" && (e = e(Dr({}, r), this.props)), e && Dr(r, e), e != null && this.__v && (t && this._sb.push(t), fd(this));
}, lr.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), fd(this));
}, lr.prototype.render = Zi, qr = [], qm = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Nc = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, Xa.__r = 0;
var Ac, ct, yu, md, Ed = 0, oE = [], Ea = [], Td = Y.__b, Od = Y.__r, Rd = Y.diffed, vd = Y.__c, bd = Y.unmount;
function iy(e, t) {
  Y.__h && Y.__h(ct, e, Ed || t), Ed = 0;
  var r = ct.__H || (ct.__H = { __: [], __h: [] });
  return e >= r.__.length && r.__.push({ __V: Ea }), r.__[e];
}
function Gw(e, t) {
  var r = iy(Ac++, 3);
  !Y.__s && sy(r.__H, t) && (r.__ = e, r.i = t, ct.__H.__h.push(r));
}
function oy() {
  for (var e; e = oE.shift(); )
    if (e.__P && e.__H)
      try {
        e.__H.__h.forEach(Ta), e.__H.__h.forEach(yc), e.__H.__h = [];
      } catch (t) {
        e.__H.__h = [], Y.__e(t, e.__v);
      }
}
Y.__b = function(e) {
  ct = null, Td && Td(e);
}, Y.__r = function(e) {
  Od && Od(e), Ac = 0;
  var t = (ct = e.__c).__H;
  t && (yu === ct ? (t.__h = [], ct.__h = [], t.__.forEach(function(r) {
    r.__N && (r.__ = r.__N), r.__V = Ea, r.__N = r.i = void 0;
  })) : (t.__h.forEach(Ta), t.__h.forEach(yc), t.__h = [], Ac = 0)), yu = ct;
}, Y.diffed = function(e) {
  Rd && Rd(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (oE.push(t) !== 1 && md === Y.requestAnimationFrame || ((md = Y.requestAnimationFrame) || ay)(oy)), t.__H.__.forEach(function(r) {
    r.i && (r.__H = r.i), r.__V !== Ea && (r.__ = r.__V), r.i = void 0, r.__V = Ea;
  })), yu = ct = null;
}, Y.__c = function(e, t) {
  t.some(function(r) {
    try {
      r.__h.forEach(Ta), r.__h = r.__h.filter(function(n) {
        return !n.__ || yc(n);
      });
    } catch (n) {
      t.some(function(i) {
        i.__h && (i.__h = []);
      }), t = [], Y.__e(n, r.__v);
    }
  }), vd && vd(e, t);
}, Y.unmount = function(e) {
  bd && bd(e);
  var t, r = e.__c;
  r && r.__H && (r.__H.__.forEach(function(n) {
    try {
      Ta(n);
    } catch (i) {
      t = i;
    }
  }), r.__H = void 0, t && Y.__e(t, r.__v));
};
var gd = typeof requestAnimationFrame == "function";
function ay(e) {
  var t, r = function() {
    clearTimeout(n), gd && cancelAnimationFrame(t), setTimeout(e);
  }, n = setTimeout(r, 100);
  gd && (t = requestAnimationFrame(r));
}
function Ta(e) {
  var t = ct, r = e.__c;
  typeof r == "function" && (e.__c = void 0, r()), ct = t;
}
function yc(e) {
  var t = ct;
  e.__c = e.__(), ct = t;
}
function sy(e, t) {
  return !e || e.length !== t.length || t.some(function(r, n) {
    return r !== e[n];
  });
}
const aE = ss(
  {}
), Uw = ({ children: e }) => {
  const [t, r] = lO.useMessage(), n = ({ type: i, message: o }) => {
    t.open({
      type: i ?? "info",
      content: o,
      duration: 5
    });
  };
  return /* @__PURE__ */ mt(Nh, { children: [
    r,
    /* @__PURE__ */ K(aE.Provider, { value: { open: n }, children: e })
  ] });
}, uy = () => ot(aE);
var sE = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, Id = Pe.createContext && Pe.createContext(sE), Mr = globalThis && globalThis.__assign || function() {
  return Mr = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, Mr.apply(this, arguments);
}, cy = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
  return r;
};
function uE(e) {
  return e && e.map(function(t, r) {
    return Pe.createElement(t.tag, Mr({
      key: r
    }, t.attr), uE(t.child));
  });
}
function jl(e) {
  return function(t) {
    return Pe.createElement(ly, Mr({
      attr: Mr({}, e.attr)
    }, t), uE(e.child));
  };
}
function ly(e) {
  var t = function(r) {
    var n = e.attr, i = e.size, o = e.title, a = cy(e, ["attr", "size", "title"]), s = i || r.size || "1em", u;
    return r.className && (u = r.className), e.className && (u = (u ? u + " " : "") + e.className), Pe.createElement("svg", Mr({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, r.attr, n, a, {
      className: u,
      style: Mr(Mr({
        color: e.color || r.color
      }, r.style), e.style),
      height: s,
      width: s,
      xmlns: "http://www.w3.org/2000/svg"
    }), o && Pe.createElement("title", null, o), e.children);
  };
  return Id !== void 0 ? Pe.createElement(Id.Consumer, null, function(r) {
    return t(r);
  }) : t(sE);
}
function _y(e) {
  return jl({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" } }] })(e);
}
function Cw(e) {
  return jl({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M145 96l66 746.6L511.8 928l299.6-85.4L878.7 96H145zm610.9 700.6l-244.1 69.6-245.2-69.6-56.7-641.2h603.8l-57.8 641.2zM281 249l1.7 24.3 22.7 253.5h206.5v-.1h112.9l-11.4 118.5L511 672.9v.2h-.8l-102.4-27.7-6.5-73.2h-91l11.3 144.7 188.6 52h1.7v-.4l187.7-51.7 1.7-16.3 21.2-242.2 3.2-24.3H511v.2H389.9l-8.2-94.2h352.1l1.7-19.5 4.8-47.2L742 249H511z" } }] })(e);
}
function fy(e) {
  return jl({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", stroke: "#000", strokeWidth: "2", d: "M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M5,5 L19,19" } }] })(e);
}
const Nd = ({ children: e, override: t, ...r }) => /* @__PURE__ */ K(_O, { theme: {
  token: { colorPrimary: t }
}, children: /* @__PURE__ */ K(yi, { ...r, style: { minWidth: "85px" }, children: e }) });
var cE = { exports: {} }, Re = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ad;
function dy() {
  if (Ad)
    return Re;
  Ad = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), u = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), _ = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), d;
  d = Symbol.for("react.module.reference");
  function p(m) {
    if (typeof m == "object" && m !== null) {
      var O = m.$$typeof;
      switch (O) {
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
                  return O;
              }
          }
        case t:
          return O;
      }
    }
  }
  return Re.ContextConsumer = a, Re.ContextProvider = o, Re.Element = e, Re.ForwardRef = u, Re.Fragment = r, Re.Lazy = f, Re.Memo = l, Re.Portal = t, Re.Profiler = i, Re.StrictMode = n, Re.Suspense = c, Re.SuspenseList = _, Re.isAsyncMode = function() {
    return !1;
  }, Re.isConcurrentMode = function() {
    return !1;
  }, Re.isContextConsumer = function(m) {
    return p(m) === a;
  }, Re.isContextProvider = function(m) {
    return p(m) === o;
  }, Re.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === e;
  }, Re.isForwardRef = function(m) {
    return p(m) === u;
  }, Re.isFragment = function(m) {
    return p(m) === r;
  }, Re.isLazy = function(m) {
    return p(m) === f;
  }, Re.isMemo = function(m) {
    return p(m) === l;
  }, Re.isPortal = function(m) {
    return p(m) === t;
  }, Re.isProfiler = function(m) {
    return p(m) === i;
  }, Re.isStrictMode = function(m) {
    return p(m) === n;
  }, Re.isSuspense = function(m) {
    return p(m) === c;
  }, Re.isSuspenseList = function(m) {
    return p(m) === _;
  }, Re.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === r || m === i || m === n || m === c || m === _ || m === h || typeof m == "object" && m !== null && (m.$$typeof === f || m.$$typeof === l || m.$$typeof === o || m.$$typeof === a || m.$$typeof === u || m.$$typeof === d || m.getModuleId !== void 0);
  }, Re.typeOf = p, Re;
}
cE.exports = dy();
var lE = cE.exports;
function hy(e) {
  function t(U, L, M, V, b) {
    for (var ne = 0, w = 0, Te = 0, ce = 0, be, ee, Ye = 0, at = 0, fe, Qe = fe = be = 0, Oe = 0, Ke = 0, di = 0, $e = 0, Bo = M.length, hi = Bo - 1, Dt, q = "", Me = "", eu = "", tu = "", Or; Oe < Bo; ) {
      if (ee = M.charCodeAt(Oe), Oe === hi && w + ce + Te + ne !== 0 && (w !== 0 && (ee = w === 47 ? 10 : 47), ce = Te = ne = 0, Bo++, hi++), w + ce + Te + ne === 0) {
        if (Oe === hi && (0 < Ke && (q = q.replace(f, "")), 0 < q.trim().length)) {
          switch (ee) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              q += M.charAt(Oe);
          }
          ee = 59;
        }
        switch (ee) {
          case 123:
            for (q = q.trim(), be = q.charCodeAt(0), fe = 1, $e = ++Oe; Oe < Bo; ) {
              switch (ee = M.charCodeAt(Oe)) {
                case 123:
                  fe++;
                  break;
                case 125:
                  fe--;
                  break;
                case 47:
                  switch (ee = M.charCodeAt(Oe + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (Qe = Oe + 1; Qe < hi; ++Qe)
                          switch (M.charCodeAt(Qe)) {
                            case 47:
                              if (ee === 42 && M.charCodeAt(Qe - 1) === 42 && Oe + 2 !== Qe) {
                                Oe = Qe + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (ee === 47) {
                                Oe = Qe + 1;
                                break e;
                              }
                          }
                        Oe = Qe;
                      }
                  }
                  break;
                case 91:
                  ee++;
                case 40:
                  ee++;
                case 34:
                case 39:
                  for (; Oe++ < hi && M.charCodeAt(Oe) !== ee; )
                    ;
              }
              if (fe === 0)
                break;
              Oe++;
            }
            switch (fe = M.substring($e, Oe), be === 0 && (be = (q = q.replace(l, "").trim()).charCodeAt(0)), be) {
              case 64:
                switch (0 < Ke && (q = q.replace(f, "")), ee = q.charCodeAt(1), ee) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    Ke = L;
                    break;
                  default:
                    Ke = Q;
                }
                if (fe = t(L, Ke, fe, ee, b + 1), $e = fe.length, 0 < ie && (Ke = r(Q, q, di), Or = s(3, fe, Ke, L, J, re, $e, ee, b, V), q = Ke.join(""), Or !== void 0 && ($e = (fe = Or.trim()).length) === 0 && (ee = 0, fe = "")), 0 < $e)
                  switch (ee) {
                    case 115:
                      q = q.replace(N, a);
                    case 100:
                    case 109:
                    case 45:
                      fe = q + "{" + fe + "}";
                      break;
                    case 107:
                      q = q.replace(E, "$1 $2"), fe = q + "{" + fe + "}", fe = H === 1 || H === 2 && o("@" + fe, 3) ? "@-webkit-" + fe + "@" + fe : "@" + fe;
                      break;
                    default:
                      fe = q + fe, V === 112 && (fe = (Me += fe, ""));
                  }
                else
                  fe = "";
                break;
              default:
                fe = t(L, r(L, q, di), fe, V, b + 1);
            }
            eu += fe, fe = di = Ke = Qe = be = 0, q = "", ee = M.charCodeAt(++Oe);
            break;
          case 125:
          case 59:
            if (q = (0 < Ke ? q.replace(f, "") : q).trim(), 1 < ($e = q.length))
              switch (Qe === 0 && (be = q.charCodeAt(0), be === 45 || 96 < be && 123 > be) && ($e = (q = q.replace(" ", ":")).length), 0 < ie && (Or = s(1, q, L, U, J, re, Me.length, V, b, V)) !== void 0 && ($e = (q = Or.trim()).length) === 0 && (q = "\0\0"), be = q.charCodeAt(0), ee = q.charCodeAt(1), be) {
                case 0:
                  break;
                case 64:
                  if (ee === 105 || ee === 99) {
                    tu += q + M.charAt(Oe);
                    break;
                  }
                default:
                  q.charCodeAt($e - 1) !== 58 && (Me += i(q, be, ee, q.charCodeAt(2)));
              }
            di = Ke = Qe = be = 0, q = "", ee = M.charCodeAt(++Oe);
        }
      }
      switch (ee) {
        case 13:
        case 10:
          w === 47 ? w = 0 : 1 + be === 0 && V !== 107 && 0 < q.length && (Ke = 1, q += "\0"), 0 < ie * Be && s(0, q, L, U, J, re, Me.length, V, b, V), re = 1, J++;
          break;
        case 59:
        case 125:
          if (w + ce + Te + ne === 0) {
            re++;
            break;
          }
        default:
          switch (re++, Dt = M.charAt(Oe), ee) {
            case 9:
            case 32:
              if (ce + ne + w === 0)
                switch (Ye) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    Dt = "";
                    break;
                  default:
                    ee !== 32 && (Dt = " ");
                }
              break;
            case 0:
              Dt = "\\0";
              break;
            case 12:
              Dt = "\\f";
              break;
            case 11:
              Dt = "\\v";
              break;
            case 38:
              ce + w + ne === 0 && (Ke = di = 1, Dt = "\f" + Dt);
              break;
            case 108:
              if (ce + w + ne + x === 0 && 0 < Qe)
                switch (Oe - Qe) {
                  case 2:
                    Ye === 112 && M.charCodeAt(Oe - 3) === 58 && (x = Ye);
                  case 8:
                    at === 111 && (x = at);
                }
              break;
            case 58:
              ce + w + ne === 0 && (Qe = Oe);
              break;
            case 44:
              w + Te + ce + ne === 0 && (Ke = 1, Dt += "\r");
              break;
            case 34:
            case 39:
              w === 0 && (ce = ce === ee ? 0 : ce === 0 ? ee : ce);
              break;
            case 91:
              ce + w + Te === 0 && ne++;
              break;
            case 93:
              ce + w + Te === 0 && ne--;
              break;
            case 41:
              ce + w + ne === 0 && Te--;
              break;
            case 40:
              if (ce + w + ne === 0) {
                if (be === 0)
                  switch (2 * Ye + 3 * at) {
                    case 533:
                      break;
                    default:
                      be = 1;
                  }
                Te++;
              }
              break;
            case 64:
              w + Te + ce + ne + Qe + fe === 0 && (fe = 1);
              break;
            case 42:
            case 47:
              if (!(0 < ce + ne + Te))
                switch (w) {
                  case 0:
                    switch (2 * ee + 3 * M.charCodeAt(Oe + 1)) {
                      case 235:
                        w = 47;
                        break;
                      case 220:
                        $e = Oe, w = 42;
                    }
                    break;
                  case 42:
                    ee === 47 && Ye === 42 && $e + 2 !== Oe && (M.charCodeAt($e + 2) === 33 && (Me += M.substring($e, Oe + 1)), Dt = "", w = 0);
                }
          }
          w === 0 && (q += Dt);
      }
      at = Ye, Ye = ee, Oe++;
    }
    if ($e = Me.length, 0 < $e) {
      if (Ke = L, 0 < ie && (Or = s(2, Me, Ke, U, J, re, $e, V, b, V), Or !== void 0 && (Me = Or).length === 0))
        return tu + Me + eu;
      if (Me = Ke.join(",") + "{" + Me + "}", H * x !== 0) {
        switch (H !== 2 || o(Me, 2) || (x = 0), x) {
          case 111:
            Me = Me.replace(v, ":-moz-$1") + Me;
            break;
          case 112:
            Me = Me.replace(T, "::-webkit-input-$1") + Me.replace(T, "::-moz-$1") + Me.replace(T, ":-ms-input-$1") + Me;
        }
        x = 0;
      }
    }
    return tu + Me + eu;
  }
  function r(U, L, M) {
    var V = L.trim().split(m);
    L = V;
    var b = V.length, ne = U.length;
    switch (ne) {
      case 0:
      case 1:
        var w = 0;
        for (U = ne === 0 ? "" : U[0] + " "; w < b; ++w)
          L[w] = n(U, L[w], M).trim();
        break;
      default:
        var Te = w = 0;
        for (L = []; w < b; ++w)
          for (var ce = 0; ce < ne; ++ce)
            L[Te++] = n(U[ce] + " ", V[w], M).trim();
    }
    return L;
  }
  function n(U, L, M) {
    var V = L.charCodeAt(0);
    switch (33 > V && (V = (L = L.trim()).charCodeAt(0)), V) {
      case 38:
        return L.replace(O, "$1" + U.trim());
      case 58:
        return U.trim() + L.replace(O, "$1" + U.trim());
      default:
        if (0 < 1 * M && 0 < L.indexOf("\f"))
          return L.replace(O, (U.charCodeAt(0) === 58 ? "" : "$1") + U.trim());
    }
    return U + L;
  }
  function i(U, L, M, V) {
    var b = U + ";", ne = 2 * L + 3 * M + 4 * V;
    if (ne === 944) {
      U = b.indexOf(":", 9) + 1;
      var w = b.substring(U, b.length - 1).trim();
      return w = b.substring(0, U).trim() + w + ";", H === 1 || H === 2 && o(w, 1) ? "-webkit-" + w + w : w;
    }
    if (H === 0 || H === 2 && !o(b, 1))
      return b;
    switch (ne) {
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
          return b.replace(Z, "$1-webkit-$2") + b;
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
        return w = b.substring(b.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + w + "-webkit-" + b + "-ms-flex-pack" + w + b;
      case 1005:
        return d.test(b) ? b.replace(h, ":-webkit-") + b.replace(h, ":-moz-") + b : b;
      case 1e3:
        switch (w = b.substring(13).trim(), L = w.indexOf("-") + 1, w.charCodeAt(0) + w.charCodeAt(L)) {
          case 226:
            w = b.replace(R, "tb");
            break;
          case 232:
            w = b.replace(R, "tb-rl");
            break;
          case 220:
            w = b.replace(R, "lr");
            break;
          default:
            return b;
        }
        return "-webkit-" + b + "-ms-" + w + b;
      case 1017:
        if (b.indexOf("sticky", 9) === -1)
          break;
      case 975:
        switch (L = (b = U).length - 10, w = (b.charCodeAt(L) === 33 ? b.substring(0, L) : b).substring(U.indexOf(":", 7) + 1).trim(), ne = w.charCodeAt(0) + (w.charCodeAt(7) | 0)) {
          case 203:
            if (111 > w.charCodeAt(8))
              break;
          case 115:
            b = b.replace(w, "-webkit-" + w) + ";" + b;
            break;
          case 207:
          case 102:
            b = b.replace(w, "-webkit-" + (102 < ne ? "inline-" : "") + "box") + ";" + b.replace(w, "-webkit-" + w) + ";" + b.replace(w, "-ms-" + w + "box") + ";" + b;
        }
        return b + ";";
      case 938:
        if (b.charCodeAt(5) === 45)
          switch (b.charCodeAt(6)) {
            case 105:
              return w = b.replace("-items", ""), "-webkit-" + b + "-webkit-box-" + w + "-ms-flex-" + w + b;
            case 115:
              return "-webkit-" + b + "-ms-flex-item-" + b.replace(C, "") + b;
            default:
              return "-webkit-" + b + "-ms-flex-line-pack" + b.replace("align-content", "").replace(C, "") + b;
          }
        break;
      case 973:
      case 989:
        if (b.charCodeAt(3) !== 45 || b.charCodeAt(4) === 122)
          break;
      case 931:
      case 953:
        if (G.test(U) === !0)
          return (w = U.substring(U.indexOf(":") + 1)).charCodeAt(0) === 115 ? i(U.replace("stretch", "fill-available"), L, M, V).replace(":fill-available", ":stretch") : b.replace(w, "-webkit-" + w) + b.replace(w, "-moz-" + w.replace("fill-", "")) + b;
        break;
      case 962:
        if (b = "-webkit-" + b + (b.charCodeAt(5) === 102 ? "-ms-" + b : "") + b, M + V === 211 && b.charCodeAt(13) === 105 && 0 < b.indexOf("transform", 10))
          return b.substring(0, b.indexOf(";", 27) + 1).replace(p, "$1-webkit-$2") + b;
    }
    return b;
  }
  function o(U, L) {
    var M = U.indexOf(L === 1 ? ":" : "{"), V = U.substring(0, L !== 3 ? M : 10);
    return M = U.substring(M + 1, U.length - 1), Se(L !== 2 ? V : V.replace(D, "$1"), M, L);
  }
  function a(U, L) {
    var M = i(L, L.charCodeAt(0), L.charCodeAt(1), L.charCodeAt(2));
    return M !== L + ";" ? M.replace(I, " or ($1)").substring(4) : "(" + L + ")";
  }
  function s(U, L, M, V, b, ne, w, Te, ce, be) {
    for (var ee = 0, Ye = L, at; ee < ie; ++ee)
      switch (at = ue[ee].call(_, U, Ye, M, V, b, ne, w, Te, ce, be)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          Ye = at;
      }
    if (Ye !== L)
      return Ye;
  }
  function u(U) {
    switch (U) {
      case void 0:
      case null:
        ie = ue.length = 0;
        break;
      default:
        if (typeof U == "function")
          ue[ie++] = U;
        else if (typeof U == "object")
          for (var L = 0, M = U.length; L < M; ++L)
            u(U[L]);
        else
          Be = !!U | 0;
    }
    return u;
  }
  function c(U) {
    return U = U.prefix, U !== void 0 && (Se = null, U ? typeof U != "function" ? H = 1 : (H = 2, Se = U) : H = 0), c;
  }
  function _(U, L) {
    var M = U;
    if (33 > M.charCodeAt(0) && (M = M.trim()), Ae = M, M = [Ae], 0 < ie) {
      var V = s(-1, L, M, M, J, re, 0, 0, 0, 0);
      V !== void 0 && typeof V == "string" && (L = V);
    }
    var b = t(Q, M, L, 0, 0);
    return 0 < ie && (V = s(-2, b, M, M, J, re, b.length, 0, 0, 0), V !== void 0 && (b = V)), Ae = "", x = 0, re = J = 1, b;
  }
  var l = /^\0+/g, f = /[\0\r\f]/g, h = /: */g, d = /zoo|gra/, p = /([,: ])(transform)/g, m = /,\r+?/g, O = /([\t\r\n ])*\f?&/g, E = /@(k\w+)\s*(\S*)\s*/, T = /::(place)/g, v = /:(read-only)/g, R = /[svh]\w+-[tblr]{2}/, N = /\(\s*(.*)\s*\)/g, I = /([\s\S]*?);/g, C = /-self|flex-/g, D = /[^]*?(:[rp][el]a[\w-]+)[^]*/, G = /stretch|:\s*\w+\-(?:conte|avail)/, Z = /([^-])(image-set\()/, re = 1, J = 1, x = 0, H = 1, Q = [], ue = [], ie = 0, Se = null, Be = 0, Ae = "";
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
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var Ey = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, yd = /* @__PURE__ */ my(
  function(e) {
    return Ey.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), _E = { exports: {} }, ve = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sd;
function Ty() {
  if (Sd)
    return ve;
  Sd = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, _ = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, d = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, O = e ? Symbol.for("react.responder") : 60118, E = e ? Symbol.for("react.scope") : 60119;
  function T(R) {
    if (typeof R == "object" && R !== null) {
      var N = R.$$typeof;
      switch (N) {
        case t:
          switch (R = R.type, R) {
            case u:
            case c:
            case n:
            case o:
            case i:
            case l:
              return R;
            default:
              switch (R = R && R.$$typeof, R) {
                case s:
                case _:
                case d:
                case h:
                case a:
                  return R;
                default:
                  return N;
              }
          }
        case r:
          return N;
      }
    }
  }
  function v(R) {
    return T(R) === c;
  }
  return ve.AsyncMode = u, ve.ConcurrentMode = c, ve.ContextConsumer = s, ve.ContextProvider = a, ve.Element = t, ve.ForwardRef = _, ve.Fragment = n, ve.Lazy = d, ve.Memo = h, ve.Portal = r, ve.Profiler = o, ve.StrictMode = i, ve.Suspense = l, ve.isAsyncMode = function(R) {
    return v(R) || T(R) === u;
  }, ve.isConcurrentMode = v, ve.isContextConsumer = function(R) {
    return T(R) === s;
  }, ve.isContextProvider = function(R) {
    return T(R) === a;
  }, ve.isElement = function(R) {
    return typeof R == "object" && R !== null && R.$$typeof === t;
  }, ve.isForwardRef = function(R) {
    return T(R) === _;
  }, ve.isFragment = function(R) {
    return T(R) === n;
  }, ve.isLazy = function(R) {
    return T(R) === d;
  }, ve.isMemo = function(R) {
    return T(R) === h;
  }, ve.isPortal = function(R) {
    return T(R) === r;
  }, ve.isProfiler = function(R) {
    return T(R) === o;
  }, ve.isStrictMode = function(R) {
    return T(R) === i;
  }, ve.isSuspense = function(R) {
    return T(R) === l;
  }, ve.isValidElementType = function(R) {
    return typeof R == "string" || typeof R == "function" || R === n || R === c || R === o || R === i || R === l || R === f || typeof R == "object" && R !== null && (R.$$typeof === d || R.$$typeof === h || R.$$typeof === a || R.$$typeof === s || R.$$typeof === _ || R.$$typeof === m || R.$$typeof === O || R.$$typeof === E || R.$$typeof === p);
  }, ve.typeOf = T, ve;
}
_E.exports = Ty();
var Oy = _E.exports, Vl = Oy, Ry = {
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
}, vy = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, by = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, fE = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Wl = {};
Wl[Vl.ForwardRef] = by;
Wl[Vl.Memo] = fE;
function Dd(e) {
  return Vl.isMemo(e) ? fE : Wl[e.$$typeof] || Ry;
}
var gy = Object.defineProperty, Iy = Object.getOwnPropertyNames, Gd = Object.getOwnPropertySymbols, Ny = Object.getOwnPropertyDescriptor, Ay = Object.getPrototypeOf, Ud = Object.prototype;
function dE(e, t, r) {
  if (typeof t != "string") {
    if (Ud) {
      var n = Ay(t);
      n && n !== Ud && dE(e, n, r);
    }
    var i = Iy(t);
    Gd && (i = i.concat(Gd(t)));
    for (var o = Dd(e), a = Dd(t), s = 0; s < i.length; ++s) {
      var u = i[s];
      if (!vy[u] && !(r && r[u]) && !(a && a[u]) && !(o && o[u])) {
        var c = Ny(t, u);
        try {
          gy(e, u, c);
        } catch {
        }
      }
    }
  }
  return e;
}
var yy = dE;
const Sy = /* @__PURE__ */ kg(yy);
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
var Cd = function(e, t) {
  for (var r = [e[0]], n = 0, i = t.length; n < i; n += 1)
    r.push(t[n], e[n + 1]);
  return r;
}, Sc = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !lE.typeOf(e);
}, $a = Object.freeze([]), kr = Object.freeze({});
function eo(e) {
  return typeof e == "function";
}
function wd(e) {
  return e.displayName || e.name || "Component";
}
function Xl(e) {
  return e && typeof e.styledComponentId == "string";
}
var Jn = typeof process < "u" && ({ GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_f872b67f-2b0c-4a61-87c1-7f7afaacee0c", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "yarn/3.6.0 npm/? node/v19.9.0 linux x64", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_f872b67f-2b0c-4a61-87c1-7f7afaacee0c", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/tmp/xfs-ee3ffe3f/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", GRADLE_HOME: "/usr/share/gradle-8.2.1", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "", SYSTEMD_EXEC_PID: "664", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.7/x64", NVM_DIR: "/home/runner/.nvm", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230806.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", JOURNAL_STREAM: "8:17664", GITHUB_WORKFLOW: "CodeGear CI", _: "/usr/local/bin/yarn", GITHUB_RUN_ID: "5812140137", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "66a4e938018152ae6922cd42186d319bf8500084", GITHUB_BASE_REF: "", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/heads/develop", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", PATH: "/tmp/xfs-ee3ffe3f:/opt/hostedtoolcache/node/19.9.0/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_b55c4856-a9ea-4c91-9d5a-8d57c0de1704", INVOCATION_ID: "25b14a0d9d12418588774fef7239d74f", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.12/x64", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "43", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 3", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "develop", GITHUB_REPOSITORY: "Gearonix/CodeGear", STATS_UE: "true", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", PROJECT_CWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", npm_package_version: "1.0.0", npm_lifecycle_event: "build", GITHUB_REF_PROTECTED: "false", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "66a4e938018152ae6922cd42186d319bf8500084", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/heads/develop", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_f872b67f-2b0c-4a61-87c1-7f7afaacee0c", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", BERRY_BIN_FOLDER: "/tmp/xfs-ee3ffe3f", npm_execpath: "/tmp/xfs-ee3ffe3f/yarn", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "push", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_f872b67f-2b0c-4a61-87c1-7f7afaacee0c", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_f872b67f-2b0c-4a61-87c1-7f7afaacee0c", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/4251781990744259245", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "4251781990744259245", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.REACT_APP_SC_ATTR || { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_f872b67f-2b0c-4a61-87c1-7f7afaacee0c", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "yarn/3.6.0 npm/? node/v19.9.0 linux x64", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_f872b67f-2b0c-4a61-87c1-7f7afaacee0c", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/tmp/xfs-ee3ffe3f/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", GRADLE_HOME: "/usr/share/gradle-8.2.1", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "", SYSTEMD_EXEC_PID: "664", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.7/x64", NVM_DIR: "/home/runner/.nvm", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230806.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", JOURNAL_STREAM: "8:17664", GITHUB_WORKFLOW: "CodeGear CI", _: "/usr/local/bin/yarn", GITHUB_RUN_ID: "5812140137", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "66a4e938018152ae6922cd42186d319bf8500084", GITHUB_BASE_REF: "", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/heads/develop", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", PATH: "/tmp/xfs-ee3ffe3f:/opt/hostedtoolcache/node/19.9.0/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_b55c4856-a9ea-4c91-9d5a-8d57c0de1704", INVOCATION_ID: "25b14a0d9d12418588774fef7239d74f", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.12/x64", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "43", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 3", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "develop", GITHUB_REPOSITORY: "Gearonix/CodeGear", STATS_UE: "true", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", PROJECT_CWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", npm_package_version: "1.0.0", npm_lifecycle_event: "build", GITHUB_REF_PROTECTED: "false", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "66a4e938018152ae6922cd42186d319bf8500084", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/heads/develop", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_f872b67f-2b0c-4a61-87c1-7f7afaacee0c", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", BERRY_BIN_FOLDER: "/tmp/xfs-ee3ffe3f", npm_execpath: "/tmp/xfs-ee3ffe3f/yarn", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "push", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_f872b67f-2b0c-4a61-87c1-7f7afaacee0c", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_f872b67f-2b0c-4a61-87c1-7f7afaacee0c", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/4251781990744259245", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "4251781990744259245", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.SC_ATTR) || "data-styled", Yl = typeof window < "u" && "HTMLElement" in window, Dy = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_f872b67f-2b0c-4a61-87c1-7f7afaacee0c", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "yarn/3.6.0 npm/? node/v19.9.0 linux x64", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_f872b67f-2b0c-4a61-87c1-7f7afaacee0c", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/tmp/xfs-ee3ffe3f/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", GRADLE_HOME: "/usr/share/gradle-8.2.1", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "", SYSTEMD_EXEC_PID: "664", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.7/x64", NVM_DIR: "/home/runner/.nvm", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230806.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", JOURNAL_STREAM: "8:17664", GITHUB_WORKFLOW: "CodeGear CI", _: "/usr/local/bin/yarn", GITHUB_RUN_ID: "5812140137", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "66a4e938018152ae6922cd42186d319bf8500084", GITHUB_BASE_REF: "", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/heads/develop", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", PATH: "/tmp/xfs-ee3ffe3f:/opt/hostedtoolcache/node/19.9.0/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_b55c4856-a9ea-4c91-9d5a-8d57c0de1704", INVOCATION_ID: "25b14a0d9d12418588774fef7239d74f", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.12/x64", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "43", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 3", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "develop", GITHUB_REPOSITORY: "Gearonix/CodeGear", STATS_UE: "true", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", PROJECT_CWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", npm_package_version: "1.0.0", npm_lifecycle_event: "build", GITHUB_REF_PROTECTED: "false", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "66a4e938018152ae6922cd42186d319bf8500084", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/heads/develop", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_f872b67f-2b0c-4a61-87c1-7f7afaacee0c", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", BERRY_BIN_FOLDER: "/tmp/xfs-ee3ffe3f", npm_execpath: "/tmp/xfs-ee3ffe3f/yarn", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "push", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_f872b67f-2b0c-4a61-87c1-7f7afaacee0c", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_f872b67f-2b0c-4a61-87c1-7f7afaacee0c", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/4251781990744259245", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "4251781990744259245", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_f872b67f-2b0c-4a61-87c1-7f7afaacee0c", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "yarn/3.6.0 npm/? node/v19.9.0 linux x64", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_f872b67f-2b0c-4a61-87c1-7f7afaacee0c", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/tmp/xfs-ee3ffe3f/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", GRADLE_HOME: "/usr/share/gradle-8.2.1", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "", SYSTEMD_EXEC_PID: "664", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.7/x64", NVM_DIR: "/home/runner/.nvm", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230806.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", JOURNAL_STREAM: "8:17664", GITHUB_WORKFLOW: "CodeGear CI", _: "/usr/local/bin/yarn", GITHUB_RUN_ID: "5812140137", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "66a4e938018152ae6922cd42186d319bf8500084", GITHUB_BASE_REF: "", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/heads/develop", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", PATH: "/tmp/xfs-ee3ffe3f:/opt/hostedtoolcache/node/19.9.0/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_b55c4856-a9ea-4c91-9d5a-8d57c0de1704", INVOCATION_ID: "25b14a0d9d12418588774fef7239d74f", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.12/x64", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "43", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 3", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "develop", GITHUB_REPOSITORY: "Gearonix/CodeGear", STATS_UE: "true", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", PROJECT_CWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", npm_package_version: "1.0.0", npm_lifecycle_event: "build", GITHUB_REF_PROTECTED: "false", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "66a4e938018152ae6922cd42186d319bf8500084", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/heads/develop", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_f872b67f-2b0c-4a61-87c1-7f7afaacee0c", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", BERRY_BIN_FOLDER: "/tmp/xfs-ee3ffe3f", npm_execpath: "/tmp/xfs-ee3ffe3f/yarn", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "push", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_f872b67f-2b0c-4a61-87c1-7f7afaacee0c", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_f872b67f-2b0c-4a61-87c1-7f7afaacee0c", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/4251781990744259245", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "4251781990744259245", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.REACT_APP_SC_DISABLE_SPEEDY !== "" ? { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_f872b67f-2b0c-4a61-87c1-7f7afaacee0c", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "yarn/3.6.0 npm/? node/v19.9.0 linux x64", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_f872b67f-2b0c-4a61-87c1-7f7afaacee0c", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/tmp/xfs-ee3ffe3f/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", GRADLE_HOME: "/usr/share/gradle-8.2.1", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "", SYSTEMD_EXEC_PID: "664", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.7/x64", NVM_DIR: "/home/runner/.nvm", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230806.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", JOURNAL_STREAM: "8:17664", GITHUB_WORKFLOW: "CodeGear CI", _: "/usr/local/bin/yarn", GITHUB_RUN_ID: "5812140137", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "66a4e938018152ae6922cd42186d319bf8500084", GITHUB_BASE_REF: "", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/heads/develop", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", PATH: "/tmp/xfs-ee3ffe3f:/opt/hostedtoolcache/node/19.9.0/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_b55c4856-a9ea-4c91-9d5a-8d57c0de1704", INVOCATION_ID: "25b14a0d9d12418588774fef7239d74f", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.12/x64", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "43", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 3", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "develop", GITHUB_REPOSITORY: "Gearonix/CodeGear", STATS_UE: "true", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", PROJECT_CWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", npm_package_version: "1.0.0", npm_lifecycle_event: "build", GITHUB_REF_PROTECTED: "false", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "66a4e938018152ae6922cd42186d319bf8500084", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/heads/develop", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_f872b67f-2b0c-4a61-87c1-7f7afaacee0c", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", BERRY_BIN_FOLDER: "/tmp/xfs-ee3ffe3f", npm_execpath: "/tmp/xfs-ee3ffe3f/yarn", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "push", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_f872b67f-2b0c-4a61-87c1-7f7afaacee0c", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_f872b67f-2b0c-4a61-87c1-7f7afaacee0c", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/4251781990744259245", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "4251781990744259245", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.REACT_APP_SC_DISABLE_SPEEDY !== "false" && { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_f872b67f-2b0c-4a61-87c1-7f7afaacee0c", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "yarn/3.6.0 npm/? node/v19.9.0 linux x64", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_f872b67f-2b0c-4a61-87c1-7f7afaacee0c", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/tmp/xfs-ee3ffe3f/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", GRADLE_HOME: "/usr/share/gradle-8.2.1", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "", SYSTEMD_EXEC_PID: "664", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.7/x64", NVM_DIR: "/home/runner/.nvm", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230806.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", JOURNAL_STREAM: "8:17664", GITHUB_WORKFLOW: "CodeGear CI", _: "/usr/local/bin/yarn", GITHUB_RUN_ID: "5812140137", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "66a4e938018152ae6922cd42186d319bf8500084", GITHUB_BASE_REF: "", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/heads/develop", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", PATH: "/tmp/xfs-ee3ffe3f:/opt/hostedtoolcache/node/19.9.0/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_b55c4856-a9ea-4c91-9d5a-8d57c0de1704", INVOCATION_ID: "25b14a0d9d12418588774fef7239d74f", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.12/x64", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "43", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 3", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "develop", GITHUB_REPOSITORY: "Gearonix/CodeGear", STATS_UE: "true", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", PROJECT_CWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", npm_package_version: "1.0.0", npm_lifecycle_event: "build", GITHUB_REF_PROTECTED: "false", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "66a4e938018152ae6922cd42186d319bf8500084", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/heads/develop", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_f872b67f-2b0c-4a61-87c1-7f7afaacee0c", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", BERRY_BIN_FOLDER: "/tmp/xfs-ee3ffe3f", npm_execpath: "/tmp/xfs-ee3ffe3f/yarn", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "push", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_f872b67f-2b0c-4a61-87c1-7f7afaacee0c", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_f872b67f-2b0c-4a61-87c1-7f7afaacee0c", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/4251781990744259245", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "4251781990744259245", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_f872b67f-2b0c-4a61-87c1-7f7afaacee0c", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "yarn/3.6.0 npm/? node/v19.9.0 linux x64", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_f872b67f-2b0c-4a61-87c1-7f7afaacee0c", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/tmp/xfs-ee3ffe3f/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", GRADLE_HOME: "/usr/share/gradle-8.2.1", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "", SYSTEMD_EXEC_PID: "664", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.7/x64", NVM_DIR: "/home/runner/.nvm", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230806.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", JOURNAL_STREAM: "8:17664", GITHUB_WORKFLOW: "CodeGear CI", _: "/usr/local/bin/yarn", GITHUB_RUN_ID: "5812140137", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "66a4e938018152ae6922cd42186d319bf8500084", GITHUB_BASE_REF: "", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/heads/develop", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", PATH: "/tmp/xfs-ee3ffe3f:/opt/hostedtoolcache/node/19.9.0/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_b55c4856-a9ea-4c91-9d5a-8d57c0de1704", INVOCATION_ID: "25b14a0d9d12418588774fef7239d74f", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.12/x64", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "43", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 3", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "develop", GITHUB_REPOSITORY: "Gearonix/CodeGear", STATS_UE: "true", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", PROJECT_CWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", npm_package_version: "1.0.0", npm_lifecycle_event: "build", GITHUB_REF_PROTECTED: "false", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "66a4e938018152ae6922cd42186d319bf8500084", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/heads/develop", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_f872b67f-2b0c-4a61-87c1-7f7afaacee0c", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", BERRY_BIN_FOLDER: "/tmp/xfs-ee3ffe3f", npm_execpath: "/tmp/xfs-ee3ffe3f/yarn", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "push", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_f872b67f-2b0c-4a61-87c1-7f7afaacee0c", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_f872b67f-2b0c-4a61-87c1-7f7afaacee0c", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/4251781990744259245", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "4251781990744259245", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.SC_DISABLE_SPEEDY !== void 0 && { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_f872b67f-2b0c-4a61-87c1-7f7afaacee0c", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "yarn/3.6.0 npm/? node/v19.9.0 linux x64", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_f872b67f-2b0c-4a61-87c1-7f7afaacee0c", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/tmp/xfs-ee3ffe3f/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", GRADLE_HOME: "/usr/share/gradle-8.2.1", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "", SYSTEMD_EXEC_PID: "664", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.7/x64", NVM_DIR: "/home/runner/.nvm", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230806.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", JOURNAL_STREAM: "8:17664", GITHUB_WORKFLOW: "CodeGear CI", _: "/usr/local/bin/yarn", GITHUB_RUN_ID: "5812140137", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "66a4e938018152ae6922cd42186d319bf8500084", GITHUB_BASE_REF: "", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/heads/develop", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", PATH: "/tmp/xfs-ee3ffe3f:/opt/hostedtoolcache/node/19.9.0/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_b55c4856-a9ea-4c91-9d5a-8d57c0de1704", INVOCATION_ID: "25b14a0d9d12418588774fef7239d74f", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.12/x64", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "43", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 3", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "develop", GITHUB_REPOSITORY: "Gearonix/CodeGear", STATS_UE: "true", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", PROJECT_CWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", npm_package_version: "1.0.0", npm_lifecycle_event: "build", GITHUB_REF_PROTECTED: "false", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "66a4e938018152ae6922cd42186d319bf8500084", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/heads/develop", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_f872b67f-2b0c-4a61-87c1-7f7afaacee0c", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", BERRY_BIN_FOLDER: "/tmp/xfs-ee3ffe3f", npm_execpath: "/tmp/xfs-ee3ffe3f/yarn", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "push", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_f872b67f-2b0c-4a61-87c1-7f7afaacee0c", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_f872b67f-2b0c-4a61-87c1-7f7afaacee0c", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/4251781990744259245", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "4251781990744259245", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.SC_DISABLE_SPEEDY !== "" && { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_f872b67f-2b0c-4a61-87c1-7f7afaacee0c", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "yarn/3.6.0 npm/? node/v19.9.0 linux x64", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_f872b67f-2b0c-4a61-87c1-7f7afaacee0c", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/tmp/xfs-ee3ffe3f/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", GRADLE_HOME: "/usr/share/gradle-8.2.1", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "", SYSTEMD_EXEC_PID: "664", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.7/x64", NVM_DIR: "/home/runner/.nvm", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230806.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", JOURNAL_STREAM: "8:17664", GITHUB_WORKFLOW: "CodeGear CI", _: "/usr/local/bin/yarn", GITHUB_RUN_ID: "5812140137", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "66a4e938018152ae6922cd42186d319bf8500084", GITHUB_BASE_REF: "", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/heads/develop", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", PATH: "/tmp/xfs-ee3ffe3f:/opt/hostedtoolcache/node/19.9.0/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_b55c4856-a9ea-4c91-9d5a-8d57c0de1704", INVOCATION_ID: "25b14a0d9d12418588774fef7239d74f", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.12/x64", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "43", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 3", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "develop", GITHUB_REPOSITORY: "Gearonix/CodeGear", STATS_UE: "true", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", PROJECT_CWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", npm_package_version: "1.0.0", npm_lifecycle_event: "build", GITHUB_REF_PROTECTED: "false", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "66a4e938018152ae6922cd42186d319bf8500084", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/heads/develop", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_f872b67f-2b0c-4a61-87c1-7f7afaacee0c", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", BERRY_BIN_FOLDER: "/tmp/xfs-ee3ffe3f", npm_execpath: "/tmp/xfs-ee3ffe3f/yarn", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "push", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_f872b67f-2b0c-4a61-87c1-7f7afaacee0c", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_f872b67f-2b0c-4a61-87c1-7f7afaacee0c", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/4251781990744259245", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "4251781990744259245", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.SC_DISABLE_SPEEDY !== "false" && { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_f872b67f-2b0c-4a61-87c1-7f7afaacee0c", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "yarn/3.6.0 npm/? node/v19.9.0 linux x64", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_f872b67f-2b0c-4a61-87c1-7f7afaacee0c", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/tmp/xfs-ee3ffe3f/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", GRADLE_HOME: "/usr/share/gradle-8.2.1", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "", SYSTEMD_EXEC_PID: "664", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.7/x64", NVM_DIR: "/home/runner/.nvm", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230806.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", JOURNAL_STREAM: "8:17664", GITHUB_WORKFLOW: "CodeGear CI", _: "/usr/local/bin/yarn", GITHUB_RUN_ID: "5812140137", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "66a4e938018152ae6922cd42186d319bf8500084", GITHUB_BASE_REF: "", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/heads/develop", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", PATH: "/tmp/xfs-ee3ffe3f:/opt/hostedtoolcache/node/19.9.0/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_b55c4856-a9ea-4c91-9d5a-8d57c0de1704", INVOCATION_ID: "25b14a0d9d12418588774fef7239d74f", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.12/x64", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "43", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 3", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "develop", GITHUB_REPOSITORY: "Gearonix/CodeGear", STATS_UE: "true", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", PROJECT_CWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", npm_package_version: "1.0.0", npm_lifecycle_event: "build", GITHUB_REF_PROTECTED: "false", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "66a4e938018152ae6922cd42186d319bf8500084", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/heads/develop", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_f872b67f-2b0c-4a61-87c1-7f7afaacee0c", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", BERRY_BIN_FOLDER: "/tmp/xfs-ee3ffe3f", npm_execpath: "/tmp/xfs-ee3ffe3f/yarn", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "push", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_f872b67f-2b0c-4a61-87c1-7f7afaacee0c", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_f872b67f-2b0c-4a61-87c1-7f7afaacee0c", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/4251781990744259245", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "4251781990744259245", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.SC_DISABLE_SPEEDY);
function Go(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  throw new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (r.length > 0 ? " Args: " + r.join(", ") : ""));
}
var Gy = function() {
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
        (a <<= 1) < 0 && Go(16, "" + r);
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
}(), Oa = /* @__PURE__ */ new Map(), za = /* @__PURE__ */ new Map(), Mi = 1, $o = function(e) {
  if (Oa.has(e))
    return Oa.get(e);
  for (; za.has(Mi); )
    Mi++;
  var t = Mi++;
  return Oa.set(e, t), za.set(t, e), t;
}, Uy = function(e) {
  return za.get(e);
}, Cy = function(e, t) {
  t >= Mi && (Mi = t + 1), Oa.set(e, t), za.set(t, e);
}, wy = "style[" + Jn + '][data-styled-version="5.3.6"]', Py = new RegExp("^" + Jn + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), Hy = function(e, t, r) {
  for (var n, i = r.split(","), o = 0, a = i.length; o < a; o++)
    (n = i[o]) && e.registerName(t, n);
}, My = function(e, t) {
  for (var r = (t.textContent || "").split(`/*!sc*/
`), n = [], i = 0, o = r.length; i < o; i++) {
    var a = r[i].trim();
    if (a) {
      var s = a.match(Py);
      if (s) {
        var u = 0 | parseInt(s[1], 10), c = s[2];
        u !== 0 && (Cy(c, u), Hy(e, c, s[3]), e.getTag().insertRules(u, n)), n.length = 0;
      } else
        n.push(a);
    }
  }
}, ky = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, hE = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), i = function(s) {
    for (var u = s.childNodes, c = u.length; c >= 0; c--) {
      var _ = u[c];
      if (_ && _.nodeType === 1 && _.hasAttribute(Jn))
        return _;
    }
  }(r), o = i !== void 0 ? i.nextSibling : null;
  n.setAttribute(Jn, "active"), n.setAttribute("data-styled-version", "5.3.6");
  var a = ky();
  return a && n.setAttribute("nonce", a), r.insertBefore(n, o), n;
}, Ly = function() {
  function e(r) {
    var n = this.element = hE(r);
    n.appendChild(document.createTextNode("")), this.sheet = function(i) {
      if (i.sheet)
        return i.sheet;
      for (var o = document.styleSheets, a = 0, s = o.length; a < s; a++) {
        var u = o[a];
        if (u.ownerNode === i)
          return u;
      }
      Go(17);
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
}(), By = function() {
  function e(r) {
    var n = this.element = hE(r);
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
}(), xy = function() {
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
}(), Pd = Yl, Fy = { isServer: !Yl, useCSSOMInjection: !Dy }, pE = function() {
  function e(r, n, i) {
    r === void 0 && (r = kr), n === void 0 && (n = {}), this.options = or({}, Fy, {}, r), this.gs = n, this.names = new Map(i), this.server = !!r.isServer, !this.server && Yl && Pd && (Pd = !1, function(o) {
      for (var a = document.querySelectorAll(wy), s = 0, u = a.length; s < u; s++) {
        var c = a[s];
        c && c.getAttribute(Jn) !== "active" && (My(o, c), c.parentNode && c.parentNode.removeChild(c));
      }
    }(this));
  }
  e.registerId = function(r) {
    return $o(r);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(r, n) {
    return n === void 0 && (n = !0), new e(or({}, this.options, {}, r), this.gs, n && this.names || void 0);
  }, t.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (i = (n = this.options).isServer, o = n.useCSSOMInjection, a = n.target, r = i ? new xy(a) : o ? new Ly(a) : new By(a), new Gy(r)));
    var r, n, i, o, a;
  }, t.hasNameForId = function(r, n) {
    return this.names.has(r) && this.names.get(r).has(n);
  }, t.registerName = function(r, n) {
    if ($o(r), this.names.has(r))
      this.names.get(r).add(n);
    else {
      var i = /* @__PURE__ */ new Set();
      i.add(n), this.names.set(r, i);
    }
  }, t.insertRules = function(r, n, i) {
    this.registerName(r, n), this.getTag().insertRules($o(r), i);
  }, t.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, t.clearRules = function(r) {
    this.getTag().clearGroup($o(r)), this.clearNames(r);
  }, t.clearTag = function() {
    this.tag = void 0;
  }, t.toString = function() {
    return function(r) {
      for (var n = r.getTag(), i = n.length, o = "", a = 0; a < i; a++) {
        var s = Uy(a);
        if (s !== void 0) {
          var u = r.names.get(s), c = n.getGroup(a);
          if (u && c && u.size) {
            var _ = Jn + ".g" + a + '[id="' + s + '"]', l = "";
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
}(), jy = /(a)(d)/gi, Hd = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Dc(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0)
    r = Hd(t % 52) + r;
  return (Hd(t % 52) + r).replace(jy, "$1-$2");
}
var Sn = function(e, t) {
  for (var r = t.length; r; )
    e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, mE = function(e) {
  return Sn(5381, e);
};
function Vy(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (eo(r) && !Xl(r))
      return !1;
  }
  return !0;
}
var Wy = mE("5.3.6"), Xy = function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = (n === void 0 || n.isStatic) && Vy(t), this.componentId = r, this.baseHash = Sn(Wy, r), this.baseStyle = n, pE.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, n) {
    var i = this.componentId, o = [];
    if (this.baseStyle && o.push(this.baseStyle.generateAndInjectStyles(t, r, n)), this.isStatic && !n.hash)
      if (this.staticRulesId && r.hasNameForId(i, this.staticRulesId))
        o.push(this.staticRulesId);
      else {
        var a = Qn(this.rules, t, r, n).join(""), s = Dc(Sn(this.baseHash, a) >>> 0);
        if (!r.hasNameForId(i, s)) {
          var u = n(a, "." + s, void 0, i);
          r.insertRules(i, s, u);
        }
        o.push(s), this.staticRulesId = s;
      }
    else {
      for (var c = this.rules.length, _ = Sn(this.baseHash, n.hash), l = "", f = 0; f < c; f++) {
        var h = this.rules[f];
        if (typeof h == "string")
          l += h;
        else if (h) {
          var d = Qn(h, t, r, n), p = Array.isArray(d) ? d.join("") : d;
          _ = Sn(_, p + f), l += p;
        }
      }
      if (l) {
        var m = Dc(_ >>> 0);
        if (!r.hasNameForId(i, m)) {
          var O = n(l, "." + m, void 0, i);
          r.insertRules(i, m, O);
        }
        o.push(m);
      }
    }
    return o.join(" ");
  }, e;
}(), Yy = /^\s*\/\/.*$/gm, Ky = [":", "[", ".", "#"];
function $y(e) {
  var t, r, n, i, o = e === void 0 ? kr : e, a = o.options, s = a === void 0 ? kr : a, u = o.plugins, c = u === void 0 ? $a : u, _ = new hy(s), l = [], f = function(p) {
    function m(O) {
      if (O)
        try {
          p(O + "}");
        } catch {
        }
    }
    return function(O, E, T, v, R, N, I, C, D, G) {
      switch (O) {
        case 1:
          if (D === 0 && E.charCodeAt(0) === 64)
            return p(E + ";"), "";
          break;
        case 2:
          if (C === 0)
            return E + "/*|*/";
          break;
        case 3:
          switch (C) {
            case 102:
            case 112:
              return p(T[0] + E), "";
            default:
              return E + (G === 0 ? "/*|*/" : "");
          }
        case -2:
          E.split("/*|*/}").forEach(m);
      }
    };
  }(function(p) {
    l.push(p);
  }), h = function(p, m, O) {
    return m === 0 && Ky.indexOf(O[r.length]) !== -1 || O.match(i) ? p : "." + t;
  };
  function d(p, m, O, E) {
    E === void 0 && (E = "&");
    var T = p.replace(Yy, ""), v = m && O ? O + " " + m + " { " + T + " }" : T;
    return t = E, r = m, n = new RegExp("\\" + r + "\\b", "g"), i = new RegExp("(\\" + r + "\\b){2,}"), _(O || !m ? "" : m, v);
  }
  return _.use([].concat(c, [function(p, m, O) {
    p === 2 && O.length && O[0].lastIndexOf(r) > 0 && (O[0] = O[0].replace(n, h));
  }, f, function(p) {
    if (p === -2) {
      var m = l;
      return l = [], m;
    }
  }])), d.hash = c.length ? c.reduce(function(p, m) {
    return m.name || Go(15), Sn(p, m.name);
  }, 5381).toString() : "", d;
}
var EE = Pe.createContext();
EE.Consumer;
var TE = Pe.createContext(), zy = (TE.Consumer, new pE()), Gc = $y();
function qy() {
  return ot(EE) || zy;
}
function Jy() {
  return ot(TE) || Gc;
}
var Qy = function() {
  function e(t, r) {
    var n = this;
    this.inject = function(i, o) {
      o === void 0 && (o = Gc);
      var a = n.name + o.hash;
      i.hasNameForId(n.id, a) || i.insertRules(n.id, a, o(n.rules, a, "@keyframes"));
    }, this.toString = function() {
      return Go(12, String(n.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = r;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = Gc), this.name + t.hash;
  }, e;
}(), Zy = /([A-Z])/, eS = /([A-Z])/g, tS = /^ms-/, rS = function(e) {
  return "-" + e.toLowerCase();
};
function Md(e) {
  return Zy.test(e) ? e.replace(eS, rS).replace(tS, "-ms-") : e;
}
var kd = function(e) {
  return e == null || e === !1 || e === "";
};
function Qn(e, t, r, n) {
  if (Array.isArray(e)) {
    for (var i, o = [], a = 0, s = e.length; a < s; a += 1)
      (i = Qn(e[a], t, r, n)) !== "" && (Array.isArray(i) ? o.push.apply(o, i) : o.push(i));
    return o;
  }
  if (kd(e))
    return "";
  if (Xl(e))
    return "." + e.styledComponentId;
  if (eo(e)) {
    if (typeof (c = e) != "function" || c.prototype && c.prototype.isReactComponent || !t)
      return e;
    var u = e(t);
    return Qn(u, t, r, n);
  }
  var c;
  return e instanceof Qy ? r ? (e.inject(r, n), e.getName(n)) : e : Sc(e) ? function _(l, f) {
    var h, d, p = [];
    for (var m in l)
      l.hasOwnProperty(m) && !kd(l[m]) && (Array.isArray(l[m]) && l[m].isCss || eo(l[m]) ? p.push(Md(m) + ":", l[m], ";") : Sc(l[m]) ? p.push.apply(p, _(l[m], m)) : p.push(Md(m) + ": " + (h = m, (d = l[m]) == null || typeof d == "boolean" || d === "" ? "" : typeof d != "number" || d === 0 || h in py ? String(d).trim() : d + "px") + ";"));
    return f ? [f + " {"].concat(p, ["}"]) : p;
  }(e) : e.toString();
}
var Ld = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function xt(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  return eo(e) || Sc(e) ? Ld(Qn(Cd($a, [e].concat(r)))) : r.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : Ld(Qn(Cd(e, r)));
}
var nS = function(e, t, r) {
  return r === void 0 && (r = kr), e.theme !== r.theme && e.theme || t || r.theme;
}, iS = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, oS = /(^-|-$)/g;
function Su(e) {
  return e.replace(iS, "-").replace(oS, "");
}
var aS = function(e) {
  return Dc(mE(e) >>> 0);
};
function zo(e) {
  return typeof e == "string" && !0;
}
var Uc = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, sS = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function uS(e, t, r) {
  var n = e[r];
  Uc(t) && Uc(n) ? OE(n, t) : e[r] = t;
}
function OE(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  for (var i = 0, o = r; i < o.length; i++) {
    var a = o[i];
    if (Uc(a))
      for (var s in a)
        sS(s) && uS(e, a[s], s);
  }
  return e;
}
var Kl = Pe.createContext();
Kl.Consumer;
var Du = {};
function RE(e, t, r) {
  var n = Xl(e), i = !zo(e), o = t.attrs, a = o === void 0 ? $a : o, s = t.componentId, u = s === void 0 ? function(E, T) {
    var v = typeof E != "string" ? "sc" : Su(E);
    Du[v] = (Du[v] || 0) + 1;
    var R = v + "-" + aS("5.3.6" + v + Du[v]);
    return T ? T + "-" + R : R;
  }(t.displayName, t.parentComponentId) : s, c = t.displayName, _ = c === void 0 ? function(E) {
    return zo(E) ? "styled." + E : "Styled(" + wd(E) + ")";
  }(e) : c, l = t.displayName && t.componentId ? Su(t.displayName) + "-" + t.componentId : t.componentId || u, f = n && e.attrs ? Array.prototype.concat(e.attrs, a).filter(Boolean) : a, h = t.shouldForwardProp;
  n && e.shouldForwardProp && (h = t.shouldForwardProp ? function(E, T, v) {
    return e.shouldForwardProp(E, T, v) && t.shouldForwardProp(E, T, v);
  } : e.shouldForwardProp);
  var d, p = new Xy(r, l, n ? e.componentStyle : void 0), m = p.isStatic && a.length === 0, O = function(E, T) {
    return function(v, R, N, I) {
      var C = v.attrs, D = v.componentStyle, G = v.defaultProps, Z = v.foldedComponentIds, re = v.shouldForwardProp, J = v.styledComponentId, x = v.target, H = function(V, b, ne) {
        V === void 0 && (V = kr);
        var w = or({}, b, { theme: V }), Te = {};
        return ne.forEach(function(ce) {
          var be, ee, Ye, at = ce;
          for (be in eo(at) && (at = at(w)), at)
            w[be] = Te[be] = be === "className" ? (ee = Te[be], Ye = at[be], ee && Ye ? ee + " " + Ye : ee || Ye) : at[be];
        }), [w, Te];
      }(nS(R, ot(Kl), G) || kr, R, C), Q = H[0], ue = H[1], ie = function(V, b, ne, w) {
        var Te = qy(), ce = Jy(), be = b ? V.generateAndInjectStyles(kr, Te, ce) : V.generateAndInjectStyles(ne, Te, ce);
        return be;
      }(D, I, Q), Se = N, Be = ue.$as || R.$as || ue.as || R.as || x, Ae = zo(Be), U = ue !== R ? or({}, R, {}, ue) : R, L = {};
      for (var M in U)
        M[0] !== "$" && M !== "as" && (M === "forwardedAs" ? L.as = U[M] : (re ? re(M, yd, Be) : !Ae || yd(M)) && (L[M] = U[M]));
      return R.style && ue.style !== R.style && (L.style = or({}, R.style, {}, ue.style)), L.className = Array.prototype.concat(Z, J, ie !== J ? ie : null, R.className, ue.className).filter(Boolean).join(" "), L.ref = Se, aO(Be, L);
    }(d, E, T, m);
  };
  return O.displayName = _, (d = Pe.forwardRef(O)).attrs = f, d.componentStyle = p, d.displayName = _, d.shouldForwardProp = h, d.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : $a, d.styledComponentId = l, d.target = n ? e.target : e, d.withComponent = function(E) {
    var T = t.componentId, v = function(N, I) {
      if (N == null)
        return {};
      var C, D, G = {}, Z = Object.keys(N);
      for (D = 0; D < Z.length; D++)
        C = Z[D], I.indexOf(C) >= 0 || (G[C] = N[C]);
      return G;
    }(t, ["componentId"]), R = T && T + "-" + (zo(E) ? E : Su(wd(E)));
    return RE(E, or({}, v, { attrs: f, componentId: R }), r);
  }, Object.defineProperty(d, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(E) {
    this._foldedDefaultProps = n ? OE({}, e.defaultProps, E) : E;
  } }), d.toString = function() {
    return "." + d.styledComponentId;
  }, i && Sy(d, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), d;
}
var Cc = function(e) {
  return function t(r, n, i) {
    if (i === void 0 && (i = kr), !lE.isValidElementType(n))
      return Go(1, String(n));
    var o = function() {
      return r(n, i, xt.apply(void 0, arguments));
    };
    return o.withConfig = function(a) {
      return t(r, n, or({}, i, {}, a));
    }, o.attrs = function(a) {
      return t(r, n, or({}, i, { attrs: Array.prototype.concat(i.attrs, a).filter(Boolean) }));
    }, o;
  }(RE, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  Cc[e] = Cc(e);
});
var cS = function() {
  return ot(Kl);
};
const we = Cc, Nt = (e = "100%", t = e) => xt`
  width: ${e};
  height: ${t};
`;
xt`
  border: 1px solid red;
`;
const lS = (e) => xt`
  padding-left: ${e}px;
  padding-right: ${e}px;
`, _n = (e = "flex-start", t = "stretch", r = "row") => xt`
  display: flex;
  justify-content: ${e};
  align-items: ${t};
  flex-direction: ${r};
`, wc = (e) => xt`
  transition: color 200ms;
  &:hover {
    color: ${e};
  }
`, Ra = (e) => ({ theme: t }) => `${t[e]} !important;`, $l = (e = "&") => xt`
  ${e}::-webkit-scrollbar {
    width: 10px;
  }

  ${e}::-webkit-scrollbar-track {
    background-color: ${({ theme: t }) => t.lightGrey};
  }

  ${e}::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
`, it = (e) => xt`
  ${({ theme: t }) => t[e]}
`, vE = (e) => xt`
  position: absolute;
  ${Object.entries(e).map(([t, r]) => `${t}: ${r};`).join(`
`)}
`, _S = (e, t) => xt`
  margin-left: ${e}px;
  margin-top: ${t}px;
`, fS = xt`
  -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
`, dS = "1px solid", ww = we.div`
  ${_n("center", "center")};
  ${vE({
  left: "0",
  top: "0"
})}
  ${Nt("100vw", "100vh")};
  background: rgba(0, 0, 0, 0.44);
  z-index: 100;
`, Pw = we.div`
  display: grid;
  position: relative;
  width: ${({ $width: e }) => e ?? 50}vw;
  height: ${({ $height: e }) => e ?? 60}vh;
  background: ${it("grey")};
  border: 2px solid ${it("lightGrey")};
  min-height: 300px;
  border-radius: 6px;
  cursor: grab;
  ${fS};
  touch-action: none;
  overflow-y: auto;
  scroll-behavior: smooth;
  ${$l()};
`, Hw = we.div`
  margin: 0 auto;
  margin-top: 18px;
  ${Nt("60%", "100%")}
  & > * {
    cursor: initial;
    color: ${it("light")};
  }
`, Mw = we.h1`
  text-align: center;
  padding-bottom: 18px;
  margin-bottom: 30px;
  font-size: ${({ theme: e }) => e.fz10};
  border-bottom: ${dS} ${it("lightGrey")};
`, kw = we.div`
  background: ${it("lightGrey")};
  ${Nt("100%", "2px")};
  margin-bottom: 30px;
  margin-top: -8px;
`, hS = (e, t) => {
  const { Spring: r, Gesture: n } = Ss(), [{ y: i }, o] = r.useSpring(() => ({ y: t })), a = () => {
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
}, pS = we.div`
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
  ${$l()};
`, mS = ({ children: e, onClose: t, isOpen: r, height: n }) => {
  const i = hS(t, n);
  return Le(() => {
    i.toggle(r);
  }, [r]), /* @__PURE__ */ K(
    pS,
    {
      $bottom: n,
      ...i.bind(),
      style: i.springs,
      as: i.div,
      children: e
    }
  );
}, ES = (e) => /* @__PURE__ */ K(Bl, { children: /* @__PURE__ */ K(mS, { ...e }) }), bE = ({
  onChange: e,
  value: t,
  options: r,
  defaultValue: n
}) => /* @__PURE__ */ K(
  fO,
  {
    size: "middle",
    onChange: e,
    value: t,
    style: { width: 200 },
    options: r,
    defaultValue: n
  }
), TS = mr(({ onChange: e }) => {
  const { fontSize: t, tabSize: r } = ni(), n = fs(), i = n.getActiveTabText(), o = n.getActiveLanguage();
  return /* @__PURE__ */ K(
    Sb,
    {
      height: "90vh",
      theme: "vs-dark",
      onChange: e,
      language: o,
      value: pp(i),
      options: Ev({
        fontSize: t,
        tabSize: r
      })
    }
  );
}), OS = ({ children: e }) => {
  const { Spring: t } = Ss(), r = t.useSpring({
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
}, RS = (e) => /* @__PURE__ */ K(OS, { children: /* @__PURE__ */ K(TS, { ...e }) }), zl = {
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
}, vS = [
  "java",
  "python",
  "cpp",
  "c",
  "go",
  "javascript"
], bS = () => [...new Set(Object.values(zl))].map((t) => ({
  value: t,
  label: t
})), gS = mr(() => {
  const e = bS(), t = fs(), r = t.getActiveLanguage(), n = t.getActiveTab();
  return /* @__PURE__ */ K(
    bE,
    {
      onChange: (o) => {
        n.lang = o;
      },
      value: r,
      options: e
    }
  );
}), gE = "Custom", IS = [
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
  gE
], NS = mr(() => {
  const e = $r(), { theme: t } = ni();
  return /* @__PURE__ */ K(
    bE,
    {
      defaultValue: "vs-dark",
      onChange: (n) => {
        e.changeTheme(n);
      },
      value: t,
      options: IS.map((n) => ({
        value: n,
        label: n
      }))
    }
  );
});
let qo;
const AS = new Uint8Array(16);
function yS() {
  if (!qo && (qo = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !qo))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return qo(AS);
}
const qe = [];
for (let e = 0; e < 256; ++e)
  qe.push((e + 256).toString(16).slice(1));
function SS(e, t = 0) {
  return (qe[e[t + 0]] + qe[e[t + 1]] + qe[e[t + 2]] + qe[e[t + 3]] + "-" + qe[e[t + 4]] + qe[e[t + 5]] + "-" + qe[e[t + 6]] + qe[e[t + 7]] + "-" + qe[e[t + 8]] + qe[e[t + 9]] + "-" + qe[e[t + 10]] + qe[e[t + 11]] + qe[e[t + 12]] + qe[e[t + 13]] + qe[e[t + 14]] + qe[e[t + 15]]).toLowerCase();
}
const DS = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Bd = {
  randomUUID: DS
};
function GS(e, t, r) {
  if (Bd.randomUUID && !t && !e)
    return Bd.randomUUID();
  e = e || {};
  const n = e.random || (e.rng || yS)();
  if (n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, t) {
    r = r || 0;
    for (let i = 0; i < 16; ++i)
      t[r + i] = n[i];
    return t;
  }
  return SS(n);
}
const US = ({
  fileData: e,
  lastNumber: t
}) => ({
  fileHandle: e?.fileHandle ?? null,
  content: e?.content ?? "",
  label: e?.name ?? "Untitled",
  lang: e?.language ?? "text",
  idx: t ? t + 1 : 0,
  key: GS(),
  wasChanged: !1
}), IE = 9, Lw = [14, 16, 18, 20, 22, 24, 26], Bw = [4, 2], CS = (e) => e.length >= IE;
class wS {
  constructor(t) {
    Xr(this), this.state = t;
  }
  createTab(t) {
    const r = this.state.content;
    if (CS(r))
      return null;
    const n = r.at(-1)?.idx, i = US({ fileData: t, lastNumber: n });
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
const PS = () => {
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
}, HS = (e) => e.map((t) => ({
  label: t.label,
  key: t.key
})), MS = we(yh)`
  color: ${Ra("secondaryGrey")};
  height: 50px;
  margin: 12px;
  min-width: 300px;
  .ant-tabs-nav::before {
    border-bottom: none;
  }
  .ant-tabs-tab {
    background: ${Ra("grey")};
  }
  .ant-tabs-tab-active {
    background: #2e3139 !important;
  }
  .ant-tabs-tab-btn {
    color: ${Ra("secondaryGrey")};
  }
`, kS = mr(() => {
  const { activeKey: e, content: t } = ni(), r = $r(), n = HS(t), i = PS(), o = i.protect(
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
  return /* @__PURE__ */ K(Nh, { children: /* @__PURE__ */ K(
    dO,
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
        MS,
        {
          type: "editable-card",
          onChange: a,
          activeKey: e,
          onEdit: o,
          items: pp(n),
          hideAdd: t.length >= IE
        }
      )
    }
  ) });
}), LS = [1, 2, 3, 4, 5, 6, 7, 8, 9], BS = () => {
  const e = Km(), { tabs: t } = $r(), { content: r } = ni();
  Le(() => (e.on(
    Object.fromEntries(
      LS.map((n) => {
        const o = r[n - 1]?.key;
        return [n.toString(), o ? () => t.changeActiveTab(o) : null];
      })
    )
  ), () => {
    e.clear();
  }), [r.length]);
}, xS = (e) => Gb(e) ? "name" in e && typeof e.name == "string" && "type" in e && typeof e.type == "string" && "content" in e && typeof e.content == "string" : !1, NE = (e) => {
  const t = e.split(".").at(-1);
  return FS(t) ? [zl[t], t] : ["text", t];
};
function FS(e) {
  return e in zl;
}
const AE = {
  ThemeUpload: (e) => `Unable to upload theme - ${e}.json`,
  NotSupportedByBrowser: () => "Your browser does not support saving and opening files.",
  WrongJsonObject: (e) => `Incoming json object should be must be ${e} type.`,
  WrongResponseType: (e) => `Incoming response object should be must be ${e} type.`
}, jS = {
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
}, VS = () => async () => {
  if ("showOpenFilePicker" in window) {
    const [e] = await window.showOpenFilePicker(jS), t = await e.getFile(), r = await t.text(), [n] = NE(t.name);
    return {
      name: t.name,
      type: t.type,
      content: r,
      fileHandle: e,
      language: n
    };
  }
  console.warn(AE.NotSupportedByBrowser());
}, WS = () => async (e, t) => {
  try {
    let r = e;
    Ub(e?.createWritable) || (r = await window.showSaveFilePicker());
    const n = await r.createWritable();
    return await n.write(t), await n.close(), r;
  } catch {
    console.warn(AE.NotSupportedByBrowser());
  }
}, yE = () => {
  const e = VS(), t = WS(), r = $r(), n = fs();
  return {
    openFile: xr(async () => {
      const a = await e();
      xS(a) && r.tabs.createTab(a);
    }, [r.tabs, e]),
    saveFile: async () => {
      const a = n.getActiveTab(), s = a.fileHandle, u = a.content;
      if (!a.wasChanged)
        return;
      const c = await t(s, u);
      c && (a.fileHandle = c, a.lang = NE(c.name));
    }
  };
};
var gr = /* @__PURE__ */ ((e) => (e.O = "O", e.S = "S", e.N = "N", e.T = "T", e.P = "P", e.J = "J", e.Q = "Q", e))(gr || {});
const XS = () => {
  const e = $r(), t = Km(), { openFile: r, saveFile: n } = yE();
  BS();
  const i = Ov("isTerminalOpened"), o = cn(), a = xr(() => {
    o.toggle("isSettingsOpened");
  }, [o]);
  Le(() => (t.on({
    [gr.O]: r,
    [gr.S]: n,
    [gr.N]: () => {
      e.tabs.createTab();
    },
    [gr.T]: () => {
      e.tabs.removeTab();
    },
    [gr.P]: i("terminal"),
    [gr.J]: i("test_cases"),
    [gr.Q]: a
  }), () => {
    t.clear();
  }), [o.state.isSettingsOpened]);
}, YS = we.div`
  width: 100%;
`, KS = we.div`
  ${_n("space-between")}
  ${Nt("100%", "48px")}
  margin-bottom: 10px;
`, $S = we.div`
  width: 30%;
  display: flex;
  gap: 30px;
  align-items: flex-end;
`, xw = mr(() => {
  const e = $r(), { theme: t, content: r, customBackground: n, customColor: i } = ni(), o = vv(), a = lw(), s = qA(() => {
    o.set("EDITOR_CONTENT_DATA", r);
  }, 1e3);
  XS();
  const u = Hp(), c = (_) => {
    Mp(_) && (e.editor.saveContent(_), s());
  };
  return Le(() => {
    u?.editor.setTheme(t);
  }, [t]), Le(() => {
    a({
      background: n,
      color: i
    });
  }, [n, i]), /* @__PURE__ */ mt(YS, { children: [
    /* @__PURE__ */ mt(KS, { children: [
      /* @__PURE__ */ K(kS, {}),
      /* @__PURE__ */ mt($S, { children: [
        /* @__PURE__ */ K(NS, {}),
        /* @__PURE__ */ K(gS, {})
      ] })
    ] }),
    /* @__PURE__ */ K(Bl, { children: /* @__PURE__ */ K(RS, { onChange: c }) })
  ] });
});
function zS(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
//! moment.js
//! version : 2.29.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var SE;
function B() {
  return SE.apply(null, arguments);
}
function qS(e) {
  SE = e;
}
function kt(e) {
  return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]";
}
function tn(e) {
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
function hr(e) {
  return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]";
}
function Uo(e) {
  return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
}
function DE(e, t) {
  var r = [], n, i = e.length;
  for (n = 0; n < i; ++n)
    r.push(t(e[n], n));
  return r;
}
function Gr(e, t) {
  for (var r in t)
    pe(t, r) && (e[r] = t[r]);
  return pe(t, "toString") && (e.toString = t.toString), pe(t, "valueOf") && (e.valueOf = t.valueOf), e;
}
function Zt(e, t, r, n) {
  return ZE(e, t, r, n, !0).utc();
}
function JS() {
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
  return e._pf == null && (e._pf = JS()), e._pf;
}
var Pc;
Array.prototype.some ? Pc = Array.prototype.some : Pc = function(e) {
  var t = Object(this), r = t.length >>> 0, n;
  for (n = 0; n < r; n++)
    if (n in t && e.call(this, t[n], n, t))
      return !0;
  return !1;
};
function Jl(e) {
  if (e._isValid == null) {
    var t = te(e), r = Pc.call(t.parsedDateParts, function(i) {
      return i != null;
    }), n = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && r);
    if (e._strict && (n = n && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === void 0), Object.isFrozen == null || !Object.isFrozen(e))
      e._isValid = n;
    else
      return n;
  }
  return e._isValid;
}
function Gs(e) {
  var t = Zt(NaN);
  return e != null ? Gr(te(t), e) : te(t).userInvalidated = !0, t;
}
var xd = B.momentProperties = [], Gu = !1;
function Ql(e, t) {
  var r, n, i, o = xd.length;
  if (st(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), st(t._i) || (e._i = t._i), st(t._f) || (e._f = t._f), st(t._l) || (e._l = t._l), st(t._strict) || (e._strict = t._strict), st(t._tzm) || (e._tzm = t._tzm), st(t._isUTC) || (e._isUTC = t._isUTC), st(t._offset) || (e._offset = t._offset), st(t._pf) || (e._pf = te(t)), st(t._locale) || (e._locale = t._locale), o > 0)
    for (r = 0; r < o; r++)
      n = xd[r], i = t[n], st(i) || (e[n] = i);
  return e;
}
function Co(e) {
  Ql(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = /* @__PURE__ */ new Date(NaN)), Gu === !1 && (Gu = !0, B.updateOffset(this), Gu = !1);
}
function Lt(e) {
  return e instanceof Co || e != null && e._isAMomentObject != null;
}
function GE(e) {
  B.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + e);
}
function yt(e, t) {
  var r = !0;
  return Gr(function() {
    if (B.deprecationHandler != null && B.deprecationHandler(null, e), r) {
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
      GE(
        e + `
Arguments: ` + Array.prototype.slice.call(n).join("") + `
` + new Error().stack
      ), r = !1;
    }
    return t.apply(this, arguments);
  }, t);
}
var Fd = {};
function UE(e, t) {
  B.deprecationHandler != null && B.deprecationHandler(e, t), Fd[e] || (GE(t), Fd[e] = !0);
}
B.suppressDeprecationWarnings = !1;
B.deprecationHandler = null;
function er(e) {
  return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
}
function QS(e) {
  var t, r;
  for (r in e)
    pe(e, r) && (t = e[r], er(t) ? this[r] = t : this["_" + r] = t);
  this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp(
    (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
  );
}
function Hc(e, t) {
  var r = Gr({}, e), n;
  for (n in t)
    pe(t, n) && (tn(e[n]) && tn(t[n]) ? (r[n] = {}, Gr(r[n], e[n]), Gr(r[n], t[n])) : t[n] != null ? r[n] = t[n] : delete r[n]);
  for (n in e)
    pe(e, n) && !pe(t, n) && tn(e[n]) && (r[n] = Gr({}, r[n]));
  return r;
}
function Zl(e) {
  e != null && this.set(e);
}
var Mc;
Object.keys ? Mc = Object.keys : Mc = function(e) {
  var t, r = [];
  for (t in e)
    pe(e, t) && r.push(t);
  return r;
};
var ZS = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function e0(e, t, r) {
  var n = this._calendar[e] || this._calendar.sameElse;
  return er(n) ? n.call(t, r) : n;
}
function qt(e, t, r) {
  var n = "" + Math.abs(e), i = t - n.length, o = e >= 0;
  return (o ? r ? "+" : "" : "-") + Math.pow(10, Math.max(0, i)).toString().substr(1) + n;
}
var e_ = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, Jo = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, Uu = {}, Pn = {};
function W(e, t, r, n) {
  var i = n;
  typeof n == "string" && (i = function() {
    return this[n]();
  }), e && (Pn[e] = i), t && (Pn[t[0]] = function() {
    return qt(i.apply(this, arguments), t[1], t[2]);
  }), r && (Pn[r] = function() {
    return this.localeData().ordinal(
      i.apply(this, arguments),
      e
    );
  });
}
function t0(e) {
  return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
}
function r0(e) {
  var t = e.match(e_), r, n;
  for (r = 0, n = t.length; r < n; r++)
    Pn[t[r]] ? t[r] = Pn[t[r]] : t[r] = t0(t[r]);
  return function(i) {
    var o = "", a;
    for (a = 0; a < n; a++)
      o += er(t[a]) ? t[a].call(i, e) : t[a];
    return o;
  };
}
function va(e, t) {
  return e.isValid() ? (t = CE(t, e.localeData()), Uu[t] = Uu[t] || r0(t), Uu[t](e)) : e.localeData().invalidDate();
}
function CE(e, t) {
  var r = 5;
  function n(i) {
    return t.longDateFormat(i) || i;
  }
  for (Jo.lastIndex = 0; r >= 0 && Jo.test(e); )
    e = e.replace(
      Jo,
      n
    ), Jo.lastIndex = 0, r -= 1;
  return e;
}
var n0 = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function i0(e) {
  var t = this._longDateFormat[e], r = this._longDateFormat[e.toUpperCase()];
  return t || !r ? t : (this._longDateFormat[e] = r.match(e_).map(function(n) {
    return n === "MMMM" || n === "MM" || n === "DD" || n === "dddd" ? n.slice(1) : n;
  }).join(""), this._longDateFormat[e]);
}
var o0 = "Invalid date";
function a0() {
  return this._invalidDate;
}
var s0 = "%d", u0 = /\d{1,2}/;
function c0(e) {
  return this._ordinal.replace("%d", e);
}
var l0 = {
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
function _0(e, t, r, n) {
  var i = this._relativeTime[r];
  return er(i) ? i(e, t, r, n) : i.replace(/%d/i, e);
}
function f0(e, t) {
  var r = this._relativeTime[e > 0 ? "future" : "past"];
  return er(r) ? r(t) : r.replace(/%s/i, t);
}
var ki = {};
function et(e, t) {
  var r = e.toLowerCase();
  ki[r] = ki[r + "s"] = ki[t] = e;
}
function St(e) {
  return typeof e == "string" ? ki[e] || ki[e.toLowerCase()] : void 0;
}
function t_(e) {
  var t = {}, r, n;
  for (n in e)
    pe(e, n) && (r = St(n), r && (t[r] = e[n]));
  return t;
}
var wE = {};
function tt(e, t) {
  wE[e] = t;
}
function d0(e) {
  var t = [], r;
  for (r in e)
    pe(e, r) && t.push({ unit: r, priority: wE[r] });
  return t.sort(function(n, i) {
    return n.priority - i.priority;
  }), t;
}
function Us(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
}
function Ot(e) {
  return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
}
function oe(e) {
  var t = +e, r = 0;
  return t !== 0 && isFinite(t) && (r = Ot(t)), r;
}
function si(e, t) {
  return function(r) {
    return r != null ? (PE(this, e, r), B.updateOffset(this, t), this) : qa(this, e);
  };
}
function qa(e, t) {
  return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN;
}
function PE(e, t, r) {
  e.isValid() && !isNaN(r) && (t === "FullYear" && Us(e.year()) && e.month() === 1 && e.date() === 29 ? (r = oe(r), e._d["set" + (e._isUTC ? "UTC" : "") + t](
    r,
    e.month(),
    ks(r, e.month())
  )) : e._d["set" + (e._isUTC ? "UTC" : "") + t](r));
}
function h0(e) {
  return e = St(e), er(this[e]) ? this[e]() : this;
}
function p0(e, t) {
  if (typeof e == "object") {
    e = t_(e);
    var r = d0(e), n, i = r.length;
    for (n = 0; n < i; n++)
      this[r[n].unit](e[r[n].unit]);
  } else if (e = St(e), er(this[e]))
    return this[e](t);
  return this;
}
var HE = /\d/, Et = /\d\d/, ME = /\d{3}/, r_ = /\d{4}/, Cs = /[+-]?\d{6}/, Ge = /\d\d?/, kE = /\d\d\d\d?/, LE = /\d\d\d\d\d\d?/, ws = /\d{1,3}/, n_ = /\d{1,4}/, Ps = /[+-]?\d{1,6}/, ui = /\d+/, Hs = /[+-]?\d+/, m0 = /Z|[+-]\d\d:?\d\d/gi, Ms = /Z|[+-]\d\d(?::?\d\d)?/gi, E0 = /[+-]?\d+(\.\d{1,3})?/, wo = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, Ja;
Ja = {};
function F(e, t, r) {
  Ja[e] = er(t) ? t : function(n, i) {
    return n && r ? r : t;
  };
}
function T0(e, t) {
  return pe(Ja, e) ? Ja[e](t._strict, t._locale) : new RegExp(O0(e));
}
function O0(e) {
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
var kc = {};
function Ne(e, t) {
  var r, n = t, i;
  for (typeof e == "string" && (e = [e]), hr(t) && (n = function(o, a) {
    a[t] = oe(o);
  }), i = e.length, r = 0; r < i; r++)
    kc[e[r]] = n;
}
function Po(e, t) {
  Ne(e, function(r, n, i, o) {
    i._w = i._w || {}, t(r, i._w, i, o);
  });
}
function R0(e, t, r) {
  t != null && pe(kc, e) && kc[e](t, r._a, r, e);
}
var Ze = 0, ar = 1, Vt = 2, Fe = 3, Ct = 4, sr = 5, Jr = 6, v0 = 7, b0 = 8;
function g0(e, t) {
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
function ks(e, t) {
  if (isNaN(e) || isNaN(t))
    return NaN;
  var r = g0(t, 12);
  return e += (t - r) / 12, r === 1 ? Us(e) ? 29 : 28 : 31 - r % 7 % 2;
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
F("M", Ge);
F("MM", Ge, Et);
F("MMM", function(e, t) {
  return t.monthsShortRegex(e);
});
F("MMMM", function(e, t) {
  return t.monthsRegex(e);
});
Ne(["M", "MM"], function(e, t) {
  t[ar] = oe(e) - 1;
});
Ne(["MMM", "MMMM"], function(e, t, r, n) {
  var i = r._locale.monthsParse(e, n, r._strict);
  i != null ? t[ar] = i : te(r).invalidMonth = e;
});
var I0 = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), BE = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), xE = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, N0 = wo, A0 = wo;
function y0(e, t) {
  return e ? kt(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || xE).test(t) ? "format" : "standalone"][e.month()] : kt(this._months) ? this._months : this._months.standalone;
}
function S0(e, t) {
  return e ? kt(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[xE.test(t) ? "format" : "standalone"][e.month()] : kt(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function D0(e, t, r) {
  var n, i, o, a = e.toLocaleLowerCase();
  if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], n = 0; n < 12; ++n)
      o = Zt([2e3, n]), this._shortMonthsParse[n] = this.monthsShort(
        o,
        ""
      ).toLocaleLowerCase(), this._longMonthsParse[n] = this.months(o, "").toLocaleLowerCase();
  return r ? t === "MMM" ? (i = ke.call(this._shortMonthsParse, a), i !== -1 ? i : null) : (i = ke.call(this._longMonthsParse, a), i !== -1 ? i : null) : t === "MMM" ? (i = ke.call(this._shortMonthsParse, a), i !== -1 ? i : (i = ke.call(this._longMonthsParse, a), i !== -1 ? i : null)) : (i = ke.call(this._longMonthsParse, a), i !== -1 ? i : (i = ke.call(this._shortMonthsParse, a), i !== -1 ? i : null));
}
function G0(e, t, r) {
  var n, i, o;
  if (this._monthsParseExact)
    return D0.call(this, e, t, r);
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
function FE(e, t) {
  var r;
  if (!e.isValid())
    return e;
  if (typeof t == "string") {
    if (/^\d+$/.test(t))
      t = oe(t);
    else if (t = e.localeData().monthsParse(t), !hr(t))
      return e;
  }
  return r = Math.min(e.date(), ks(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, r), e;
}
function jE(e) {
  return e != null ? (FE(this, e), B.updateOffset(this, !0), this) : qa(this, "Month");
}
function U0() {
  return ks(this.year(), this.month());
}
function C0(e) {
  return this._monthsParseExact ? (pe(this, "_monthsRegex") || VE.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (pe(this, "_monthsShortRegex") || (this._monthsShortRegex = N0), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function w0(e) {
  return this._monthsParseExact ? (pe(this, "_monthsRegex") || VE.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (pe(this, "_monthsRegex") || (this._monthsRegex = A0), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
}
function VE() {
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
F("YY", Ge, Et);
F("YYYY", n_, r_);
F("YYYYY", Ps, Cs);
F("YYYYYY", Ps, Cs);
Ne(["YYYYY", "YYYYYY"], Ze);
Ne("YYYY", function(e, t) {
  t[Ze] = e.length === 2 ? B.parseTwoDigitYear(e) : oe(e);
});
Ne("YY", function(e, t) {
  t[Ze] = B.parseTwoDigitYear(e);
});
Ne("Y", function(e, t) {
  t[Ze] = parseInt(e, 10);
});
function Li(e) {
  return Us(e) ? 366 : 365;
}
B.parseTwoDigitYear = function(e) {
  return oe(e) + (oe(e) > 68 ? 1900 : 2e3);
};
var WE = si("FullYear", !0);
function P0() {
  return Us(this.year());
}
function H0(e, t, r, n, i, o, a) {
  var s;
  return e < 100 && e >= 0 ? (s = new Date(e + 400, t, r, n, i, o, a), isFinite(s.getFullYear()) && s.setFullYear(e)) : s = new Date(e, t, r, n, i, o, a), s;
}
function to(e) {
  var t, r;
  return e < 100 && e >= 0 ? (r = Array.prototype.slice.call(arguments), r[0] = e + 400, t = new Date(Date.UTC.apply(null, r)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t;
}
function Qa(e, t, r) {
  var n = 7 + t - r, i = (7 + to(e, 0, n).getUTCDay() - t) % 7;
  return -i + n - 1;
}
function XE(e, t, r, n, i) {
  var o = (7 + r - n) % 7, a = Qa(e, n, i), s = 1 + 7 * (t - 1) + o + a, u, c;
  return s <= 0 ? (u = e - 1, c = Li(u) + s) : s > Li(e) ? (u = e + 1, c = s - Li(e)) : (u = e, c = s), {
    year: u,
    dayOfYear: c
  };
}
function ro(e, t, r) {
  var n = Qa(e.year(), t, r), i = Math.floor((e.dayOfYear() - n - 1) / 7) + 1, o, a;
  return i < 1 ? (a = e.year() - 1, o = i + _r(a, t, r)) : i > _r(e.year(), t, r) ? (o = i - _r(e.year(), t, r), a = e.year() + 1) : (a = e.year(), o = i), {
    week: o,
    year: a
  };
}
function _r(e, t, r) {
  var n = Qa(e, t, r), i = Qa(e + 1, t, r);
  return (Li(e) - n + i) / 7;
}
W("w", ["ww", 2], "wo", "week");
W("W", ["WW", 2], "Wo", "isoWeek");
et("week", "w");
et("isoWeek", "W");
tt("week", 5);
tt("isoWeek", 5);
F("w", Ge);
F("ww", Ge, Et);
F("W", Ge);
F("WW", Ge, Et);
Po(
  ["w", "ww", "W", "WW"],
  function(e, t, r, n) {
    t[n.substr(0, 1)] = oe(e);
  }
);
function M0(e) {
  return ro(e, this._week.dow, this._week.doy).week;
}
var k0 = {
  dow: 0,
  // Sunday is the first day of the week.
  doy: 6
  // The week that contains Jan 6th is the first week of the year.
};
function L0() {
  return this._week.dow;
}
function B0() {
  return this._week.doy;
}
function x0(e) {
  var t = this.localeData().week(this);
  return e == null ? t : this.add((e - t) * 7, "d");
}
function F0(e) {
  var t = ro(this, 1, 4).week;
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
F("d", Ge);
F("e", Ge);
F("E", Ge);
F("dd", function(e, t) {
  return t.weekdaysMinRegex(e);
});
F("ddd", function(e, t) {
  return t.weekdaysShortRegex(e);
});
F("dddd", function(e, t) {
  return t.weekdaysRegex(e);
});
Po(["dd", "ddd", "dddd"], function(e, t, r, n) {
  var i = r._locale.weekdaysParse(e, n, r._strict);
  i != null ? t.d = i : te(r).invalidWeekday = e;
});
Po(["d", "e", "E"], function(e, t, r, n) {
  t[n] = oe(e);
});
function j0(e, t) {
  return typeof e != "string" ? e : isNaN(e) ? (e = t.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10);
}
function V0(e, t) {
  return typeof e == "string" ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
}
function i_(e, t) {
  return e.slice(t, 7).concat(e.slice(0, t));
}
var W0 = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), YE = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), X0 = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), Y0 = wo, K0 = wo, $0 = wo;
function z0(e, t) {
  var r = kt(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
  return e === !0 ? i_(r, this._week.dow) : e ? r[e.day()] : r;
}
function q0(e) {
  return e === !0 ? i_(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
}
function J0(e) {
  return e === !0 ? i_(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
}
function Q0(e, t, r) {
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
function Z0(e, t, r) {
  var n, i, o;
  if (this._weekdaysParseExact)
    return Q0.call(this, e, t, r);
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
function e1(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
  return e != null ? (e = j0(e, this.localeData()), this.add(e - t, "d")) : t;
}
function t1(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return e == null ? t : this.add(e - t, "d");
}
function r1(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    var t = V0(e, this.localeData());
    return this.day(this.day() % 7 ? t : t - 7);
  } else
    return this.day() || 7;
}
function n1(e) {
  return this._weekdaysParseExact ? (pe(this, "_weekdaysRegex") || o_.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (pe(this, "_weekdaysRegex") || (this._weekdaysRegex = Y0), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function i1(e) {
  return this._weekdaysParseExact ? (pe(this, "_weekdaysRegex") || o_.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (pe(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = K0), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function o1(e) {
  return this._weekdaysParseExact ? (pe(this, "_weekdaysRegex") || o_.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (pe(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = $0), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function o_() {
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
function a_() {
  return this.hours() % 12 || 12;
}
function a1() {
  return this.hours() || 24;
}
W("H", ["HH", 2], 0, "hour");
W("h", ["hh", 2], 0, a_);
W("k", ["kk", 2], 0, a1);
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
function KE(e, t) {
  W(e, 0, 0, function() {
    return this.localeData().meridiem(
      this.hours(),
      this.minutes(),
      t
    );
  });
}
KE("a", !0);
KE("A", !1);
et("hour", "h");
tt("hour", 13);
function $E(e, t) {
  return t._meridiemParse;
}
F("a", $E);
F("A", $E);
F("H", Ge);
F("h", Ge);
F("k", Ge);
F("HH", Ge, Et);
F("hh", Ge, Et);
F("kk", Ge, Et);
F("hmm", kE);
F("hmmss", LE);
F("Hmm", kE);
F("Hmmss", LE);
Ne(["H", "HH"], Fe);
Ne(["k", "kk"], function(e, t, r) {
  var n = oe(e);
  t[Fe] = n === 24 ? 0 : n;
});
Ne(["a", "A"], function(e, t, r) {
  r._isPm = r._locale.isPM(e), r._meridiem = e;
});
Ne(["h", "hh"], function(e, t, r) {
  t[Fe] = oe(e), te(r).bigHour = !0;
});
Ne("hmm", function(e, t, r) {
  var n = e.length - 2;
  t[Fe] = oe(e.substr(0, n)), t[Ct] = oe(e.substr(n)), te(r).bigHour = !0;
});
Ne("hmmss", function(e, t, r) {
  var n = e.length - 4, i = e.length - 2;
  t[Fe] = oe(e.substr(0, n)), t[Ct] = oe(e.substr(n, 2)), t[sr] = oe(e.substr(i)), te(r).bigHour = !0;
});
Ne("Hmm", function(e, t, r) {
  var n = e.length - 2;
  t[Fe] = oe(e.substr(0, n)), t[Ct] = oe(e.substr(n));
});
Ne("Hmmss", function(e, t, r) {
  var n = e.length - 4, i = e.length - 2;
  t[Fe] = oe(e.substr(0, n)), t[Ct] = oe(e.substr(n, 2)), t[sr] = oe(e.substr(i));
});
function s1(e) {
  return (e + "").toLowerCase().charAt(0) === "p";
}
var u1 = /[ap]\.?m?\.?/i, c1 = si("Hours", !0);
function l1(e, t, r) {
  return e > 11 ? r ? "pm" : "PM" : r ? "am" : "AM";
}
var zE = {
  calendar: ZS,
  longDateFormat: n0,
  invalidDate: o0,
  ordinal: s0,
  dayOfMonthOrdinalParse: u0,
  relativeTime: l0,
  months: I0,
  monthsShort: BE,
  week: k0,
  weekdays: W0,
  weekdaysMin: X0,
  weekdaysShort: YE,
  meridiemParse: u1
}, Ue = {}, Ri = {}, no;
function _1(e, t) {
  var r, n = Math.min(e.length, t.length);
  for (r = 0; r < n; r += 1)
    if (e[r] !== t[r])
      return r;
  return n;
}
function jd(e) {
  return e && e.toLowerCase().replace("_", "-");
}
function f1(e) {
  for (var t = 0, r, n, i, o; t < e.length; ) {
    for (o = jd(e[t]).split("-"), r = o.length, n = jd(e[t + 1]), n = n ? n.split("-") : null; r > 0; ) {
      if (i = Ls(o.slice(0, r).join("-")), i)
        return i;
      if (n && n.length >= r && _1(o, n) >= r - 1)
        break;
      r--;
    }
    t++;
  }
  return no;
}
function d1(e) {
  return e.match("^[^/\\\\]*$") != null;
}
function Ls(e) {
  var t = null, r;
  if (Ue[e] === void 0 && typeof module < "u" && module && module.exports && d1(e))
    try {
      t = no._abbr, r = zS, r("./locale/" + e), Lr(t);
    } catch {
      Ue[e] = null;
    }
  return Ue[e];
}
function Lr(e, t) {
  var r;
  return e && (st(t) ? r = Er(e) : r = s_(e, t), r ? no = r : typeof console < "u" && console.warn && console.warn(
    "Locale " + e + " not found. Did you forget to load it?"
  )), no._abbr;
}
function s_(e, t) {
  if (t !== null) {
    var r, n = zE;
    if (t.abbr = e, Ue[e] != null)
      UE(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ), n = Ue[e]._config;
    else if (t.parentLocale != null)
      if (Ue[t.parentLocale] != null)
        n = Ue[t.parentLocale]._config;
      else if (r = Ls(t.parentLocale), r != null)
        n = r._config;
      else
        return Ri[t.parentLocale] || (Ri[t.parentLocale] = []), Ri[t.parentLocale].push({
          name: e,
          config: t
        }), null;
    return Ue[e] = new Zl(Hc(n, t)), Ri[e] && Ri[e].forEach(function(i) {
      s_(i.name, i.config);
    }), Lr(e), Ue[e];
  } else
    return delete Ue[e], null;
}
function h1(e, t) {
  if (t != null) {
    var r, n, i = zE;
    Ue[e] != null && Ue[e].parentLocale != null ? Ue[e].set(Hc(Ue[e]._config, t)) : (n = Ls(e), n != null && (i = n._config), t = Hc(i, t), n == null && (t.abbr = e), r = new Zl(t), r.parentLocale = Ue[e], Ue[e] = r), Lr(e);
  } else
    Ue[e] != null && (Ue[e].parentLocale != null ? (Ue[e] = Ue[e].parentLocale, e === Lr() && Lr(e)) : Ue[e] != null && delete Ue[e]);
  return Ue[e];
}
function Er(e) {
  var t;
  if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
    return no;
  if (!kt(e)) {
    if (t = Ls(e), t)
      return t;
    e = [e];
  }
  return f1(e);
}
function p1() {
  return Mc(Ue);
}
function u_(e) {
  var t, r = e._a;
  return r && te(e).overflow === -2 && (t = r[ar] < 0 || r[ar] > 11 ? ar : r[Vt] < 1 || r[Vt] > ks(r[Ze], r[ar]) ? Vt : r[Fe] < 0 || r[Fe] > 24 || r[Fe] === 24 && (r[Ct] !== 0 || r[sr] !== 0 || r[Jr] !== 0) ? Fe : r[Ct] < 0 || r[Ct] > 59 ? Ct : r[sr] < 0 || r[sr] > 59 ? sr : r[Jr] < 0 || r[Jr] > 999 ? Jr : -1, te(e)._overflowDayOfYear && (t < Ze || t > Vt) && (t = Vt), te(e)._overflowWeeks && t === -1 && (t = v0), te(e)._overflowWeekday && t === -1 && (t = b0), te(e).overflow = t), e;
}
var m1 = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, E1 = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, T1 = /Z|[+-]\d\d(?::?\d\d)?/, Qo = [
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
], Cu = [
  ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
  ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
  ["HH:mm:ss", /\d\d:\d\d:\d\d/],
  ["HH:mm", /\d\d:\d\d/],
  ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
  ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
  ["HHmmss", /\d\d\d\d\d\d/],
  ["HHmm", /\d\d\d\d/],
  ["HH", /\d\d/]
], O1 = /^\/?Date\((-?\d+)/i, R1 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, v1 = {
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
function qE(e) {
  var t, r, n = e._i, i = m1.exec(n) || E1.exec(n), o, a, s, u, c = Qo.length, _ = Cu.length;
  if (i) {
    for (te(e).iso = !0, t = 0, r = c; t < r; t++)
      if (Qo[t][1].exec(i[1])) {
        a = Qo[t][0], o = Qo[t][2] !== !1;
        break;
      }
    if (a == null) {
      e._isValid = !1;
      return;
    }
    if (i[3]) {
      for (t = 0, r = _; t < r; t++)
        if (Cu[t][1].exec(i[3])) {
          s = (i[2] || " ") + Cu[t][0];
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
      if (T1.exec(i[4]))
        u = "Z";
      else {
        e._isValid = !1;
        return;
      }
    e._f = a + (s || "") + (u || ""), l_(e);
  } else
    e._isValid = !1;
}
function b1(e, t, r, n, i, o) {
  var a = [
    g1(e),
    BE.indexOf(t),
    parseInt(r, 10),
    parseInt(n, 10),
    parseInt(i, 10)
  ];
  return o && a.push(parseInt(o, 10)), a;
}
function g1(e) {
  var t = parseInt(e, 10);
  return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
}
function I1(e) {
  return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function N1(e, t, r) {
  if (e) {
    var n = YE.indexOf(e), i = new Date(
      t[0],
      t[1],
      t[2]
    ).getDay();
    if (n !== i)
      return te(r).weekdayMismatch = !0, r._isValid = !1, !1;
  }
  return !0;
}
function A1(e, t, r) {
  if (e)
    return v1[e];
  if (t)
    return 0;
  var n = parseInt(r, 10), i = n % 100, o = (n - i) / 100;
  return o * 60 + i;
}
function JE(e) {
  var t = R1.exec(I1(e._i)), r;
  if (t) {
    if (r = b1(
      t[4],
      t[3],
      t[2],
      t[5],
      t[6],
      t[7]
    ), !N1(t[1], r, e))
      return;
    e._a = r, e._tzm = A1(t[8], t[9], t[10]), e._d = to.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), te(e).rfc2822 = !0;
  } else
    e._isValid = !1;
}
function y1(e) {
  var t = O1.exec(e._i);
  if (t !== null) {
    e._d = /* @__PURE__ */ new Date(+t[1]);
    return;
  }
  if (qE(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  if (JE(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  e._strict ? e._isValid = !1 : B.createFromInputFallback(e);
}
B.createFromInputFallback = yt(
  "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  function(e) {
    e._d = /* @__PURE__ */ new Date(e._i + (e._useUTC ? " UTC" : ""));
  }
);
function vn(e, t, r) {
  return e ?? t ?? r;
}
function S1(e) {
  var t = new Date(B.now());
  return e._useUTC ? [
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate()
  ] : [t.getFullYear(), t.getMonth(), t.getDate()];
}
function c_(e) {
  var t, r, n = [], i, o, a;
  if (!e._d) {
    for (i = S1(e), e._w && e._a[Vt] == null && e._a[ar] == null && D1(e), e._dayOfYear != null && (a = vn(e._a[Ze], i[Ze]), (e._dayOfYear > Li(a) || e._dayOfYear === 0) && (te(e)._overflowDayOfYear = !0), r = to(a, 0, e._dayOfYear), e._a[ar] = r.getUTCMonth(), e._a[Vt] = r.getUTCDate()), t = 0; t < 3 && e._a[t] == null; ++t)
      e._a[t] = n[t] = i[t];
    for (; t < 7; t++)
      e._a[t] = n[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
    e._a[Fe] === 24 && e._a[Ct] === 0 && e._a[sr] === 0 && e._a[Jr] === 0 && (e._nextDay = !0, e._a[Fe] = 0), e._d = (e._useUTC ? to : H0).apply(
      null,
      n
    ), o = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[Fe] = 24), e._w && typeof e._w.d < "u" && e._w.d !== o && (te(e).weekdayMismatch = !0);
  }
}
function D1(e) {
  var t, r, n, i, o, a, s, u, c;
  t = e._w, t.GG != null || t.W != null || t.E != null ? (o = 1, a = 4, r = vn(
    t.GG,
    e._a[Ze],
    ro(De(), 1, 4).year
  ), n = vn(t.W, 1), i = vn(t.E, 1), (i < 1 || i > 7) && (u = !0)) : (o = e._locale._week.dow, a = e._locale._week.doy, c = ro(De(), o, a), r = vn(t.gg, e._a[Ze], c.year), n = vn(t.w, c.week), t.d != null ? (i = t.d, (i < 0 || i > 6) && (u = !0)) : t.e != null ? (i = t.e + o, (t.e < 0 || t.e > 6) && (u = !0)) : i = o), n < 1 || n > _r(r, o, a) ? te(e)._overflowWeeks = !0 : u != null ? te(e)._overflowWeekday = !0 : (s = XE(r, n, i, o, a), e._a[Ze] = s.year, e._dayOfYear = s.dayOfYear);
}
B.ISO_8601 = function() {
};
B.RFC_2822 = function() {
};
function l_(e) {
  if (e._f === B.ISO_8601) {
    qE(e);
    return;
  }
  if (e._f === B.RFC_2822) {
    JE(e);
    return;
  }
  e._a = [], te(e).empty = !0;
  var t = "" + e._i, r, n, i, o, a, s = t.length, u = 0, c, _;
  for (i = CE(e._f, e._locale).match(e_) || [], _ = i.length, r = 0; r < _; r++)
    o = i[r], n = (t.match(T0(o, e)) || [])[0], n && (a = t.substr(0, t.indexOf(n)), a.length > 0 && te(e).unusedInput.push(a), t = t.slice(
      t.indexOf(n) + n.length
    ), u += n.length), Pn[o] ? (n ? te(e).empty = !1 : te(e).unusedTokens.push(o), R0(o, n, e)) : e._strict && !n && te(e).unusedTokens.push(o);
  te(e).charsLeftOver = s - u, t.length > 0 && te(e).unusedInput.push(t), e._a[Fe] <= 12 && te(e).bigHour === !0 && e._a[Fe] > 0 && (te(e).bigHour = void 0), te(e).parsedDateParts = e._a.slice(0), te(e).meridiem = e._meridiem, e._a[Fe] = G1(
    e._locale,
    e._a[Fe],
    e._meridiem
  ), c = te(e).era, c !== null && (e._a[Ze] = e._locale.erasConvertYear(c, e._a[Ze])), c_(e), u_(e);
}
function G1(e, t, r) {
  var n;
  return r == null ? t : e.meridiemHour != null ? e.meridiemHour(t, r) : (e.isPM != null && (n = e.isPM(r), n && t < 12 && (t += 12), !n && t === 12 && (t = 0)), t);
}
function U1(e) {
  var t, r, n, i, o, a, s = !1, u = e._f.length;
  if (u === 0) {
    te(e).invalidFormat = !0, e._d = /* @__PURE__ */ new Date(NaN);
    return;
  }
  for (i = 0; i < u; i++)
    o = 0, a = !1, t = Ql({}, e), e._useUTC != null && (t._useUTC = e._useUTC), t._f = e._f[i], l_(t), Jl(t) && (a = !0), o += te(t).charsLeftOver, o += te(t).unusedTokens.length * 10, te(t).score = o, s ? o < n && (n = o, r = t) : (n == null || o < n || a) && (n = o, r = t, a && (s = !0));
  Gr(e, r || t);
}
function C1(e) {
  if (!e._d) {
    var t = t_(e._i), r = t.day === void 0 ? t.date : t.day;
    e._a = DE(
      [t.year, t.month, r, t.hour, t.minute, t.second, t.millisecond],
      function(n) {
        return n && parseInt(n, 10);
      }
    ), c_(e);
  }
}
function w1(e) {
  var t = new Co(u_(QE(e)));
  return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t;
}
function QE(e) {
  var t = e._i, r = e._f;
  return e._locale = e._locale || Er(e._l), t === null || r === void 0 && t === "" ? Gs({ nullInput: !0 }) : (typeof t == "string" && (e._i = t = e._locale.preparse(t)), Lt(t) ? new Co(u_(t)) : (Uo(t) ? e._d = t : kt(r) ? U1(e) : r ? l_(e) : P1(e), Jl(e) || (e._d = null), e));
}
function P1(e) {
  var t = e._i;
  st(t) ? e._d = new Date(B.now()) : Uo(t) ? e._d = new Date(t.valueOf()) : typeof t == "string" ? y1(e) : kt(t) ? (e._a = DE(t.slice(0), function(r) {
    return parseInt(r, 10);
  }), c_(e)) : tn(t) ? C1(e) : hr(t) ? e._d = new Date(t) : B.createFromInputFallback(e);
}
function ZE(e, t, r, n, i) {
  var o = {};
  return (t === !0 || t === !1) && (n = t, t = void 0), (r === !0 || r === !1) && (n = r, r = void 0), (tn(e) && ql(e) || kt(e) && e.length === 0) && (e = void 0), o._isAMomentObject = !0, o._useUTC = o._isUTC = i, o._l = r, o._i = e, o._f = t, o._strict = n, w1(o);
}
function De(e, t, r, n) {
  return ZE(e, t, r, n, !1);
}
var H1 = yt(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = De.apply(null, arguments);
    return this.isValid() && e.isValid() ? e < this ? this : e : Gs();
  }
), M1 = yt(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = De.apply(null, arguments);
    return this.isValid() && e.isValid() ? e > this ? this : e : Gs();
  }
);
function eT(e, t) {
  var r, n;
  if (t.length === 1 && kt(t[0]) && (t = t[0]), !t.length)
    return De();
  for (r = t[0], n = 1; n < t.length; ++n)
    (!t[n].isValid() || t[n][e](r)) && (r = t[n]);
  return r;
}
function k1() {
  var e = [].slice.call(arguments, 0);
  return eT("isBefore", e);
}
function L1() {
  var e = [].slice.call(arguments, 0);
  return eT("isAfter", e);
}
var B1 = function() {
  return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
}, vi = [
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
function x1(e) {
  var t, r = !1, n, i = vi.length;
  for (t in e)
    if (pe(e, t) && !(ke.call(vi, t) !== -1 && (e[t] == null || !isNaN(e[t]))))
      return !1;
  for (n = 0; n < i; ++n)
    if (e[vi[n]]) {
      if (r)
        return !1;
      parseFloat(e[vi[n]]) !== oe(e[vi[n]]) && (r = !0);
    }
  return !0;
}
function F1() {
  return this._isValid;
}
function j1() {
  return Ft(NaN);
}
function Bs(e) {
  var t = t_(e), r = t.year || 0, n = t.quarter || 0, i = t.month || 0, o = t.week || t.isoWeek || 0, a = t.day || 0, s = t.hour || 0, u = t.minute || 0, c = t.second || 0, _ = t.millisecond || 0;
  this._isValid = x1(t), this._milliseconds = +_ + c * 1e3 + // 1000
  u * 6e4 + // 1000 * 60
  s * 1e3 * 60 * 60, this._days = +a + o * 7, this._months = +i + n * 3 + r * 12, this._data = {}, this._locale = Er(), this._bubble();
}
function ba(e) {
  return e instanceof Bs;
}
function Lc(e) {
  return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
}
function V1(e, t, r) {
  var n = Math.min(e.length, t.length), i = Math.abs(e.length - t.length), o = 0, a;
  for (a = 0; a < n; a++)
    (r && e[a] !== t[a] || !r && oe(e[a]) !== oe(t[a])) && o++;
  return o + i;
}
function tT(e, t) {
  W(e, 0, 0, function() {
    var r = this.utcOffset(), n = "+";
    return r < 0 && (r = -r, n = "-"), n + qt(~~(r / 60), 2) + t + qt(~~r % 60, 2);
  });
}
tT("Z", ":");
tT("ZZ", "");
F("Z", Ms);
F("ZZ", Ms);
Ne(["Z", "ZZ"], function(e, t, r) {
  r._useUTC = !0, r._tzm = __(Ms, e);
});
var W1 = /([\+\-]|\d\d)/gi;
function __(e, t) {
  var r = (t || "").match(e), n, i, o;
  return r === null ? null : (n = r[r.length - 1] || [], i = (n + "").match(W1) || ["-", 0, 0], o = +(i[1] * 60) + oe(i[2]), o === 0 ? 0 : i[0] === "+" ? o : -o);
}
function f_(e, t) {
  var r, n;
  return t._isUTC ? (r = t.clone(), n = (Lt(e) || Uo(e) ? e.valueOf() : De(e).valueOf()) - r.valueOf(), r._d.setTime(r._d.valueOf() + n), B.updateOffset(r, !1), r) : De(e).local();
}
function Bc(e) {
  return -Math.round(e._d.getTimezoneOffset());
}
B.updateOffset = function() {
};
function X1(e, t, r) {
  var n = this._offset || 0, i;
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    if (typeof e == "string") {
      if (e = __(Ms, e), e === null)
        return this;
    } else
      Math.abs(e) < 16 && !r && (e = e * 60);
    return !this._isUTC && t && (i = Bc(this)), this._offset = e, this._isUTC = !0, i != null && this.add(i, "m"), n !== e && (!t || this._changeInProgress ? iT(
      this,
      Ft(e - n, "m"),
      1,
      !1
    ) : this._changeInProgress || (this._changeInProgress = !0, B.updateOffset(this, !0), this._changeInProgress = null)), this;
  } else
    return this._isUTC ? n : Bc(this);
}
function Y1(e, t) {
  return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
}
function K1(e) {
  return this.utcOffset(0, e);
}
function $1(e) {
  return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Bc(this), "m")), this;
}
function z1() {
  if (this._tzm != null)
    this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var e = __(m0, this._i);
    e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
  }
  return this;
}
function q1(e) {
  return this.isValid() ? (e = e ? De(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1;
}
function J1() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function Q1() {
  if (!st(this._isDSTShifted))
    return this._isDSTShifted;
  var e = {}, t;
  return Ql(e, this), e = QE(e), e._a ? (t = e._isUTC ? Zt(e._a) : De(e._a), this._isDSTShifted = this.isValid() && V1(e._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function Z1() {
  return this.isValid() ? !this._isUTC : !1;
}
function eD() {
  return this.isValid() ? this._isUTC : !1;
}
function rT() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var tD = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, rD = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function Ft(e, t) {
  var r = e, n = null, i, o, a;
  return ba(e) ? r = {
    ms: e._milliseconds,
    d: e._days,
    M: e._months
  } : hr(e) || !isNaN(+e) ? (r = {}, t ? r[t] = +e : r.milliseconds = +e) : (n = tD.exec(e)) ? (i = n[1] === "-" ? -1 : 1, r = {
    y: 0,
    d: oe(n[Vt]) * i,
    h: oe(n[Fe]) * i,
    m: oe(n[Ct]) * i,
    s: oe(n[sr]) * i,
    ms: oe(Lc(n[Jr] * 1e3)) * i
    // the millisecond decimal point is included in the match
  }) : (n = rD.exec(e)) ? (i = n[1] === "-" ? -1 : 1, r = {
    y: zr(n[2], i),
    M: zr(n[3], i),
    w: zr(n[4], i),
    d: zr(n[5], i),
    h: zr(n[6], i),
    m: zr(n[7], i),
    s: zr(n[8], i)
  }) : r == null ? r = {} : typeof r == "object" && ("from" in r || "to" in r) && (a = nD(
    De(r.from),
    De(r.to)
  ), r = {}, r.ms = a.milliseconds, r.M = a.months), o = new Bs(r), ba(e) && pe(e, "_locale") && (o._locale = e._locale), ba(e) && pe(e, "_isValid") && (o._isValid = e._isValid), o;
}
Ft.fn = Bs.prototype;
Ft.invalid = j1;
function zr(e, t) {
  var r = e && parseFloat(e.replace(",", "."));
  return (isNaN(r) ? 0 : r) * t;
}
function Vd(e, t) {
  var r = {};
  return r.months = t.month() - e.month() + (t.year() - e.year()) * 12, e.clone().add(r.months, "M").isAfter(t) && --r.months, r.milliseconds = +t - +e.clone().add(r.months, "M"), r;
}
function nD(e, t) {
  var r;
  return e.isValid() && t.isValid() ? (t = f_(t, e), e.isBefore(t) ? r = Vd(e, t) : (r = Vd(t, e), r.milliseconds = -r.milliseconds, r.months = -r.months), r) : { milliseconds: 0, months: 0 };
}
function nT(e, t) {
  return function(r, n) {
    var i, o;
    return n !== null && !isNaN(+n) && (UE(
      t,
      "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
    ), o = r, r = n, n = o), i = Ft(r, n), iT(this, i, e), this;
  };
}
function iT(e, t, r, n) {
  var i = t._milliseconds, o = Lc(t._days), a = Lc(t._months);
  e.isValid() && (n = n ?? !0, a && FE(e, qa(e, "Month") + a * r), o && PE(e, "Date", qa(e, "Date") + o * r), i && e._d.setTime(e._d.valueOf() + i * r), n && B.updateOffset(e, o || a));
}
var iD = nT(1, "add"), oD = nT(-1, "subtract");
function oT(e) {
  return typeof e == "string" || e instanceof String;
}
function aD(e) {
  return Lt(e) || Uo(e) || oT(e) || hr(e) || uD(e) || sD(e) || e === null || e === void 0;
}
function sD(e) {
  var t = tn(e) && !ql(e), r = !1, n = [
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
function uD(e) {
  var t = kt(e), r = !1;
  return t && (r = e.filter(function(n) {
    return !hr(n) && oT(e);
  }).length === 0), t && r;
}
function cD(e) {
  var t = tn(e) && !ql(e), r = !1, n = [
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
function lD(e, t) {
  var r = e.diff(t, "days", !0);
  return r < -6 ? "sameElse" : r < -1 ? "lastWeek" : r < 0 ? "lastDay" : r < 1 ? "sameDay" : r < 2 ? "nextDay" : r < 7 ? "nextWeek" : "sameElse";
}
function _D(e, t) {
  arguments.length === 1 && (arguments[0] ? aD(arguments[0]) ? (e = arguments[0], t = void 0) : cD(arguments[0]) && (t = arguments[0], e = void 0) : (e = void 0, t = void 0));
  var r = e || De(), n = f_(r, this).startOf("day"), i = B.calendarFormat(this, n) || "sameElse", o = t && (er(t[i]) ? t[i].call(this, r) : t[i]);
  return this.format(
    o || this.localeData().calendar(i, this, De(r))
  );
}
function fD() {
  return new Co(this);
}
function dD(e, t) {
  var r = Lt(e) ? e : De(e);
  return this.isValid() && r.isValid() ? (t = St(t) || "millisecond", t === "millisecond" ? this.valueOf() > r.valueOf() : r.valueOf() < this.clone().startOf(t).valueOf()) : !1;
}
function hD(e, t) {
  var r = Lt(e) ? e : De(e);
  return this.isValid() && r.isValid() ? (t = St(t) || "millisecond", t === "millisecond" ? this.valueOf() < r.valueOf() : this.clone().endOf(t).valueOf() < r.valueOf()) : !1;
}
function pD(e, t, r, n) {
  var i = Lt(e) ? e : De(e), o = Lt(t) ? t : De(t);
  return this.isValid() && i.isValid() && o.isValid() ? (n = n || "()", (n[0] === "(" ? this.isAfter(i, r) : !this.isBefore(i, r)) && (n[1] === ")" ? this.isBefore(o, r) : !this.isAfter(o, r))) : !1;
}
function mD(e, t) {
  var r = Lt(e) ? e : De(e), n;
  return this.isValid() && r.isValid() ? (t = St(t) || "millisecond", t === "millisecond" ? this.valueOf() === r.valueOf() : (n = r.valueOf(), this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf())) : !1;
}
function ED(e, t) {
  return this.isSame(e, t) || this.isAfter(e, t);
}
function TD(e, t) {
  return this.isSame(e, t) || this.isBefore(e, t);
}
function OD(e, t, r) {
  var n, i, o;
  if (!this.isValid())
    return NaN;
  if (n = f_(e, this), !n.isValid())
    return NaN;
  switch (i = (n.utcOffset() - this.utcOffset()) * 6e4, t = St(t), t) {
    case "year":
      o = ga(this, n) / 12;
      break;
    case "month":
      o = ga(this, n);
      break;
    case "quarter":
      o = ga(this, n) / 3;
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
  return r ? o : Ot(o);
}
function ga(e, t) {
  if (e.date() < t.date())
    return -ga(t, e);
  var r = (t.year() - e.year()) * 12 + (t.month() - e.month()), n = e.clone().add(r, "months"), i, o;
  return t - n < 0 ? (i = e.clone().add(r - 1, "months"), o = (t - n) / (n - i)) : (i = e.clone().add(r + 1, "months"), o = (t - n) / (i - n)), -(r + o) || 0;
}
B.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
B.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function RD() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function vD(e) {
  if (!this.isValid())
    return null;
  var t = e !== !0, r = t ? this.clone().utc() : this;
  return r.year() < 0 || r.year() > 9999 ? va(
    r,
    t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
  ) : er(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", va(r, "Z")) : va(
    r,
    t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
  );
}
function bD() {
  if (!this.isValid())
    return "moment.invalid(/* " + this._i + " */)";
  var e = "moment", t = "", r, n, i, o;
  return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", t = "Z"), r = "[" + e + '("]', n = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", i = "-MM-DD[T]HH:mm:ss.SSS", o = t + '[")]', this.format(r + n + i + o);
}
function gD(e) {
  e || (e = this.isUtc() ? B.defaultFormatUtc : B.defaultFormat);
  var t = va(this, e);
  return this.localeData().postformat(t);
}
function ID(e, t) {
  return this.isValid() && (Lt(e) && e.isValid() || De(e).isValid()) ? Ft({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function ND(e) {
  return this.from(De(), e);
}
function AD(e, t) {
  return this.isValid() && (Lt(e) && e.isValid() || De(e).isValid()) ? Ft({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function yD(e) {
  return this.to(De(), e);
}
function aT(e) {
  var t;
  return e === void 0 ? this._locale._abbr : (t = Er(e), t != null && (this._locale = t), this);
}
var sT = yt(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function(e) {
    return e === void 0 ? this.localeData() : this.locale(e);
  }
);
function uT() {
  return this._locale;
}
var Za = 1e3, Hn = 60 * Za, es = 60 * Hn, cT = (365 * 400 + 97) * 24 * es;
function Mn(e, t) {
  return (e % t + t) % t;
}
function lT(e, t, r) {
  return e < 100 && e >= 0 ? new Date(e + 400, t, r) - cT : new Date(e, t, r).valueOf();
}
function _T(e, t, r) {
  return e < 100 && e >= 0 ? Date.UTC(e + 400, t, r) - cT : Date.UTC(e, t, r);
}
function SD(e) {
  var t, r;
  if (e = St(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (r = this._isUTC ? _T : lT, e) {
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
      t = this._d.valueOf(), t -= Mn(
        t + (this._isUTC ? 0 : this.utcOffset() * Hn),
        es
      );
      break;
    case "minute":
      t = this._d.valueOf(), t -= Mn(t, Hn);
      break;
    case "second":
      t = this._d.valueOf(), t -= Mn(t, Za);
      break;
  }
  return this._d.setTime(t), B.updateOffset(this, !0), this;
}
function DD(e) {
  var t, r;
  if (e = St(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (r = this._isUTC ? _T : lT, e) {
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
      t = this._d.valueOf(), t += es - Mn(
        t + (this._isUTC ? 0 : this.utcOffset() * Hn),
        es
      ) - 1;
      break;
    case "minute":
      t = this._d.valueOf(), t += Hn - Mn(t, Hn) - 1;
      break;
    case "second":
      t = this._d.valueOf(), t += Za - Mn(t, Za) - 1;
      break;
  }
  return this._d.setTime(t), B.updateOffset(this, !0), this;
}
function GD() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function UD() {
  return Math.floor(this.valueOf() / 1e3);
}
function CD() {
  return new Date(this.valueOf());
}
function wD() {
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
function PD() {
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
function HD() {
  return this.isValid() ? this.toISOString() : null;
}
function MD() {
  return Jl(this);
}
function kD() {
  return Gr({}, te(this));
}
function LD() {
  return te(this).overflow;
}
function BD() {
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
F("N", d_);
F("NN", d_);
F("NNN", d_);
F("NNNN", qD);
F("NNNNN", JD);
Ne(
  ["N", "NN", "NNN", "NNNN", "NNNNN"],
  function(e, t, r, n) {
    var i = r._locale.erasParse(e, n, r._strict);
    i ? te(r).era = i : te(r).invalidEra = e;
  }
);
F("y", ui);
F("yy", ui);
F("yyy", ui);
F("yyyy", ui);
F("yo", QD);
Ne(["y", "yy", "yyy", "yyyy"], Ze);
Ne(["yo"], function(e, t, r, n) {
  var i;
  r._locale._eraYearOrdinalRegex && (i = e.match(r._locale._eraYearOrdinalRegex)), r._locale.eraYearOrdinalParse ? t[Ze] = r._locale.eraYearOrdinalParse(e, i) : t[Ze] = parseInt(e, 10);
});
function xD(e, t) {
  var r, n, i, o = this._eras || Er("en")._eras;
  for (r = 0, n = o.length; r < n; ++r) {
    switch (typeof o[r].since) {
      case "string":
        i = B(o[r].since).startOf("day"), o[r].since = i.valueOf();
        break;
    }
    switch (typeof o[r].until) {
      case "undefined":
        o[r].until = 1 / 0;
        break;
      case "string":
        i = B(o[r].until).startOf("day").valueOf(), o[r].until = i.valueOf();
        break;
    }
  }
  return o;
}
function FD(e, t, r) {
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
function jD(e, t) {
  var r = e.since <= e.until ? 1 : -1;
  return t === void 0 ? B(e.since).year() : B(e.since).year() + (t - e.offset) * r;
}
function VD() {
  var e, t, r, n = this.localeData().eras();
  for (e = 0, t = n.length; e < t; ++e)
    if (r = this.clone().startOf("day").valueOf(), n[e].since <= r && r <= n[e].until || n[e].until <= r && r <= n[e].since)
      return n[e].name;
  return "";
}
function WD() {
  var e, t, r, n = this.localeData().eras();
  for (e = 0, t = n.length; e < t; ++e)
    if (r = this.clone().startOf("day").valueOf(), n[e].since <= r && r <= n[e].until || n[e].until <= r && r <= n[e].since)
      return n[e].narrow;
  return "";
}
function XD() {
  var e, t, r, n = this.localeData().eras();
  for (e = 0, t = n.length; e < t; ++e)
    if (r = this.clone().startOf("day").valueOf(), n[e].since <= r && r <= n[e].until || n[e].until <= r && r <= n[e].since)
      return n[e].abbr;
  return "";
}
function YD() {
  var e, t, r, n, i = this.localeData().eras();
  for (e = 0, t = i.length; e < t; ++e)
    if (r = i[e].since <= i[e].until ? 1 : -1, n = this.clone().startOf("day").valueOf(), i[e].since <= n && n <= i[e].until || i[e].until <= n && n <= i[e].since)
      return (this.year() - B(i[e].since).year()) * r + i[e].offset;
  return this.year();
}
function KD(e) {
  return pe(this, "_erasNameRegex") || h_.call(this), e ? this._erasNameRegex : this._erasRegex;
}
function $D(e) {
  return pe(this, "_erasAbbrRegex") || h_.call(this), e ? this._erasAbbrRegex : this._erasRegex;
}
function zD(e) {
  return pe(this, "_erasNarrowRegex") || h_.call(this), e ? this._erasNarrowRegex : this._erasRegex;
}
function d_(e, t) {
  return t.erasAbbrRegex(e);
}
function qD(e, t) {
  return t.erasNameRegex(e);
}
function JD(e, t) {
  return t.erasNarrowRegex(e);
}
function QD(e, t) {
  return t._eraYearOrdinalRegex || ui;
}
function h_() {
  var e = [], t = [], r = [], n = [], i, o, a = this.eras();
  for (i = 0, o = a.length; i < o; ++i)
    t.push(pt(a[i].name)), e.push(pt(a[i].abbr)), r.push(pt(a[i].narrow)), n.push(pt(a[i].name)), n.push(pt(a[i].abbr)), n.push(pt(a[i].narrow));
  this._erasRegex = new RegExp("^(" + n.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp(
    "^(" + r.join("|") + ")",
    "i"
  );
}
W(0, ["gg", 2], 0, function() {
  return this.weekYear() % 100;
});
W(0, ["GG", 2], 0, function() {
  return this.isoWeekYear() % 100;
});
function xs(e, t) {
  W(0, [e, e.length], 0, t);
}
xs("gggg", "weekYear");
xs("ggggg", "weekYear");
xs("GGGG", "isoWeekYear");
xs("GGGGG", "isoWeekYear");
et("weekYear", "gg");
et("isoWeekYear", "GG");
tt("weekYear", 1);
tt("isoWeekYear", 1);
F("G", Hs);
F("g", Hs);
F("GG", Ge, Et);
F("gg", Ge, Et);
F("GGGG", n_, r_);
F("gggg", n_, r_);
F("GGGGG", Ps, Cs);
F("ggggg", Ps, Cs);
Po(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(e, t, r, n) {
    t[n.substr(0, 2)] = oe(e);
  }
);
Po(["gg", "GG"], function(e, t, r, n) {
  t[n] = B.parseTwoDigitYear(e);
});
function ZD(e) {
  return fT.call(
    this,
    e,
    this.week(),
    this.weekday(),
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function eG(e) {
  return fT.call(
    this,
    e,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function tG() {
  return _r(this.year(), 1, 4);
}
function rG() {
  return _r(this.isoWeekYear(), 1, 4);
}
function nG() {
  var e = this.localeData()._week;
  return _r(this.year(), e.dow, e.doy);
}
function iG() {
  var e = this.localeData()._week;
  return _r(this.weekYear(), e.dow, e.doy);
}
function fT(e, t, r, n, i) {
  var o;
  return e == null ? ro(this, n, i).year : (o = _r(e, n, i), t > o && (t = o), oG.call(this, e, t, r, n, i));
}
function oG(e, t, r, n, i) {
  var o = XE(e, t, r, n, i), a = to(o.year, 0, o.dayOfYear);
  return this.year(a.getUTCFullYear()), this.month(a.getUTCMonth()), this.date(a.getUTCDate()), this;
}
W("Q", 0, "Qo", "quarter");
et("quarter", "Q");
tt("quarter", 7);
F("Q", HE);
Ne("Q", function(e, t) {
  t[ar] = (oe(e) - 1) * 3;
});
function aG(e) {
  return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3);
}
W("D", ["DD", 2], "Do", "date");
et("date", "D");
tt("date", 9);
F("D", Ge);
F("DD", Ge, Et);
F("Do", function(e, t) {
  return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
});
Ne(["D", "DD"], Vt);
Ne("Do", function(e, t) {
  t[Vt] = oe(e.match(Ge)[0]);
});
var dT = si("Date", !0);
W("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
et("dayOfYear", "DDD");
tt("dayOfYear", 4);
F("DDD", ws);
F("DDDD", ME);
Ne(["DDD", "DDDD"], function(e, t, r) {
  r._dayOfYear = oe(e);
});
function sG(e) {
  var t = Math.round(
    (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
  ) + 1;
  return e == null ? t : this.add(e - t, "d");
}
W("m", ["mm", 2], 0, "minute");
et("minute", "m");
tt("minute", 14);
F("m", Ge);
F("mm", Ge, Et);
Ne(["m", "mm"], Ct);
var uG = si("Minutes", !1);
W("s", ["ss", 2], 0, "second");
et("second", "s");
tt("second", 15);
F("s", Ge);
F("ss", Ge, Et);
Ne(["s", "ss"], sr);
var cG = si("Seconds", !1);
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
F("S", ws, HE);
F("SS", ws, Et);
F("SSS", ws, ME);
var Ur, hT;
for (Ur = "SSSS"; Ur.length <= 9; Ur += "S")
  F(Ur, ui);
function lG(e, t) {
  t[Jr] = oe(("0." + e) * 1e3);
}
for (Ur = "S"; Ur.length <= 9; Ur += "S")
  Ne(Ur, lG);
hT = si("Milliseconds", !1);
W("z", 0, 0, "zoneAbbr");
W("zz", 0, 0, "zoneName");
function _G() {
  return this._isUTC ? "UTC" : "";
}
function fG() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var S = Co.prototype;
S.add = iD;
S.calendar = _D;
S.clone = fD;
S.diff = OD;
S.endOf = DD;
S.format = gD;
S.from = ID;
S.fromNow = ND;
S.to = AD;
S.toNow = yD;
S.get = h0;
S.invalidAt = LD;
S.isAfter = dD;
S.isBefore = hD;
S.isBetween = pD;
S.isSame = mD;
S.isSameOrAfter = ED;
S.isSameOrBefore = TD;
S.isValid = MD;
S.lang = sT;
S.locale = aT;
S.localeData = uT;
S.max = M1;
S.min = H1;
S.parsingFlags = kD;
S.set = p0;
S.startOf = SD;
S.subtract = oD;
S.toArray = wD;
S.toObject = PD;
S.toDate = CD;
S.toISOString = vD;
S.inspect = bD;
typeof Symbol < "u" && Symbol.for != null && (S[Symbol.for("nodejs.util.inspect.custom")] = function() {
  return "Moment<" + this.format() + ">";
});
S.toJSON = HD;
S.toString = RD;
S.unix = UD;
S.valueOf = GD;
S.creationData = BD;
S.eraName = VD;
S.eraNarrow = WD;
S.eraAbbr = XD;
S.eraYear = YD;
S.year = WE;
S.isLeapYear = P0;
S.weekYear = ZD;
S.isoWeekYear = eG;
S.quarter = S.quarters = aG;
S.month = jE;
S.daysInMonth = U0;
S.week = S.weeks = x0;
S.isoWeek = S.isoWeeks = F0;
S.weeksInYear = nG;
S.weeksInWeekYear = iG;
S.isoWeeksInYear = tG;
S.isoWeeksInISOWeekYear = rG;
S.date = dT;
S.day = S.days = e1;
S.weekday = t1;
S.isoWeekday = r1;
S.dayOfYear = sG;
S.hour = S.hours = c1;
S.minute = S.minutes = uG;
S.second = S.seconds = cG;
S.millisecond = S.milliseconds = hT;
S.utcOffset = X1;
S.utc = K1;
S.local = $1;
S.parseZone = z1;
S.hasAlignedHourOffset = q1;
S.isDST = J1;
S.isLocal = Z1;
S.isUtcOffset = eD;
S.isUtc = rT;
S.isUTC = rT;
S.zoneAbbr = _G;
S.zoneName = fG;
S.dates = yt(
  "dates accessor is deprecated. Use date instead.",
  dT
);
S.months = yt(
  "months accessor is deprecated. Use month instead",
  jE
);
S.years = yt(
  "years accessor is deprecated. Use year instead",
  WE
);
S.zone = yt(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  Y1
);
S.isDSTShifted = yt(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  Q1
);
function dG(e) {
  return De(e * 1e3);
}
function hG() {
  return De.apply(null, arguments).parseZone();
}
function pT(e) {
  return e;
}
var me = Zl.prototype;
me.calendar = e0;
me.longDateFormat = i0;
me.invalidDate = a0;
me.ordinal = c0;
me.preparse = pT;
me.postformat = pT;
me.relativeTime = _0;
me.pastFuture = f0;
me.set = QS;
me.eras = xD;
me.erasParse = FD;
me.erasConvertYear = jD;
me.erasAbbrRegex = $D;
me.erasNameRegex = KD;
me.erasNarrowRegex = zD;
me.months = y0;
me.monthsShort = S0;
me.monthsParse = G0;
me.monthsRegex = w0;
me.monthsShortRegex = C0;
me.week = M0;
me.firstDayOfYear = B0;
me.firstDayOfWeek = L0;
me.weekdays = z0;
me.weekdaysMin = J0;
me.weekdaysShort = q0;
me.weekdaysParse = Z0;
me.weekdaysRegex = n1;
me.weekdaysShortRegex = i1;
me.weekdaysMinRegex = o1;
me.isPM = s1;
me.meridiem = l1;
function ts(e, t, r, n) {
  var i = Er(), o = Zt().set(n, t);
  return i[r](o, e);
}
function mT(e, t, r) {
  if (hr(e) && (t = e, e = void 0), e = e || "", t != null)
    return ts(e, t, r, "month");
  var n, i = [];
  for (n = 0; n < 12; n++)
    i[n] = ts(e, n, r, "month");
  return i;
}
function p_(e, t, r, n) {
  typeof e == "boolean" ? (hr(t) && (r = t, t = void 0), t = t || "") : (t = e, r = t, e = !1, hr(t) && (r = t, t = void 0), t = t || "");
  var i = Er(), o = e ? i._week.dow : 0, a, s = [];
  if (r != null)
    return ts(t, (r + o) % 7, n, "day");
  for (a = 0; a < 7; a++)
    s[a] = ts(t, (a + o) % 7, n, "day");
  return s;
}
function pG(e, t) {
  return mT(e, t, "months");
}
function mG(e, t) {
  return mT(e, t, "monthsShort");
}
function EG(e, t, r) {
  return p_(e, t, r, "weekdays");
}
function TG(e, t, r) {
  return p_(e, t, r, "weekdaysShort");
}
function OG(e, t, r) {
  return p_(e, t, r, "weekdaysMin");
}
Lr("en", {
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
    var t = e % 10, r = oe(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
    return e + r;
  }
});
B.lang = yt(
  "moment.lang is deprecated. Use moment.locale instead.",
  Lr
);
B.langData = yt(
  "moment.langData is deprecated. Use moment.localeData instead.",
  Er
);
var tr = Math.abs;
function RG() {
  var e = this._data;
  return this._milliseconds = tr(this._milliseconds), this._days = tr(this._days), this._months = tr(this._months), e.milliseconds = tr(e.milliseconds), e.seconds = tr(e.seconds), e.minutes = tr(e.minutes), e.hours = tr(e.hours), e.months = tr(e.months), e.years = tr(e.years), this;
}
function ET(e, t, r, n) {
  var i = Ft(t, r);
  return e._milliseconds += n * i._milliseconds, e._days += n * i._days, e._months += n * i._months, e._bubble();
}
function vG(e, t) {
  return ET(this, e, t, 1);
}
function bG(e, t) {
  return ET(this, e, t, -1);
}
function Wd(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function gG() {
  var e = this._milliseconds, t = this._days, r = this._months, n = this._data, i, o, a, s, u;
  return e >= 0 && t >= 0 && r >= 0 || e <= 0 && t <= 0 && r <= 0 || (e += Wd(xc(r) + t) * 864e5, t = 0, r = 0), n.milliseconds = e % 1e3, i = Ot(e / 1e3), n.seconds = i % 60, o = Ot(i / 60), n.minutes = o % 60, a = Ot(o / 60), n.hours = a % 24, t += Ot(a / 24), u = Ot(TT(t)), r += u, t -= Wd(xc(u)), s = Ot(r / 12), r %= 12, n.days = t, n.months = r, n.years = s, this;
}
function TT(e) {
  return e * 4800 / 146097;
}
function xc(e) {
  return e * 146097 / 4800;
}
function IG(e) {
  if (!this.isValid())
    return NaN;
  var t, r, n = this._milliseconds;
  if (e = St(e), e === "month" || e === "quarter" || e === "year")
    switch (t = this._days + n / 864e5, r = this._months + TT(t), e) {
      case "month":
        return r;
      case "quarter":
        return r / 3;
      case "year":
        return r / 12;
    }
  else
    switch (t = this._days + Math.round(xc(this._months)), e) {
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
function NG() {
  return this.isValid() ? this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + oe(this._months / 12) * 31536e6 : NaN;
}
function Tr(e) {
  return function() {
    return this.as(e);
  };
}
var AG = Tr("ms"), yG = Tr("s"), SG = Tr("m"), DG = Tr("h"), GG = Tr("d"), UG = Tr("w"), CG = Tr("M"), wG = Tr("Q"), PG = Tr("y");
function HG() {
  return Ft(this);
}
function MG(e) {
  return e = St(e), this.isValid() ? this[e + "s"]() : NaN;
}
function fn(e) {
  return function() {
    return this.isValid() ? this._data[e] : NaN;
  };
}
var kG = fn("milliseconds"), LG = fn("seconds"), BG = fn("minutes"), xG = fn("hours"), FG = fn("days"), jG = fn("months"), VG = fn("years");
function WG() {
  return Ot(this.days() / 7);
}
var rr = Math.round, Dn = {
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
function XG(e, t, r, n, i) {
  return i.relativeTime(t || 1, !!r, e, n);
}
function YG(e, t, r, n) {
  var i = Ft(e).abs(), o = rr(i.as("s")), a = rr(i.as("m")), s = rr(i.as("h")), u = rr(i.as("d")), c = rr(i.as("M")), _ = rr(i.as("w")), l = rr(i.as("y")), f = o <= r.ss && ["s", o] || o < r.s && ["ss", o] || a <= 1 && ["m"] || a < r.m && ["mm", a] || s <= 1 && ["h"] || s < r.h && ["hh", s] || u <= 1 && ["d"] || u < r.d && ["dd", u];
  return r.w != null && (f = f || _ <= 1 && ["w"] || _ < r.w && ["ww", _]), f = f || c <= 1 && ["M"] || c < r.M && ["MM", c] || l <= 1 && ["y"] || ["yy", l], f[2] = t, f[3] = +e > 0, f[4] = n, XG.apply(null, f);
}
function KG(e) {
  return e === void 0 ? rr : typeof e == "function" ? (rr = e, !0) : !1;
}
function $G(e, t) {
  return Dn[e] === void 0 ? !1 : t === void 0 ? Dn[e] : (Dn[e] = t, e === "s" && (Dn.ss = t - 1), !0);
}
function zG(e, t) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var r = !1, n = Dn, i, o;
  return typeof e == "object" && (t = e, e = !1), typeof e == "boolean" && (r = e), typeof t == "object" && (n = Object.assign({}, Dn, t), t.s != null && t.ss == null && (n.ss = t.s - 1)), i = this.localeData(), o = YG(this, !r, n, i), r && (o = i.pastFuture(+this, o)), i.postformat(o);
}
var wu = Math.abs;
function pn(e) {
  return (e > 0) - (e < 0) || +e;
}
function Fs() {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var e = wu(this._milliseconds) / 1e3, t = wu(this._days), r = wu(this._months), n, i, o, a, s = this.asSeconds(), u, c, _, l;
  return s ? (n = Ot(e / 60), i = Ot(n / 60), e %= 60, n %= 60, o = Ot(r / 12), r %= 12, a = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", u = s < 0 ? "-" : "", c = pn(this._months) !== pn(s) ? "-" : "", _ = pn(this._days) !== pn(s) ? "-" : "", l = pn(this._milliseconds) !== pn(s) ? "-" : "", u + "P" + (o ? c + o + "Y" : "") + (r ? c + r + "M" : "") + (t ? _ + t + "D" : "") + (i || n || e ? "T" : "") + (i ? l + i + "H" : "") + (n ? l + n + "M" : "") + (e ? l + a + "S" : "")) : "P0D";
}
var le = Bs.prototype;
le.isValid = F1;
le.abs = RG;
le.add = vG;
le.subtract = bG;
le.as = IG;
le.asMilliseconds = AG;
le.asSeconds = yG;
le.asMinutes = SG;
le.asHours = DG;
le.asDays = GG;
le.asWeeks = UG;
le.asMonths = CG;
le.asQuarters = wG;
le.asYears = PG;
le.valueOf = NG;
le._bubble = gG;
le.clone = HG;
le.get = MG;
le.milliseconds = kG;
le.seconds = LG;
le.minutes = BG;
le.hours = xG;
le.days = FG;
le.weeks = WG;
le.months = jG;
le.years = VG;
le.humanize = zG;
le.toISOString = Fs;
le.toString = Fs;
le.toJSON = Fs;
le.locale = aT;
le.localeData = uT;
le.toIsoString = yt(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  Fs
);
le.lang = sT;
W("X", 0, 0, "unix");
W("x", 0, 0, "valueOf");
F("x", Hs);
F("X", E0);
Ne("X", function(e, t, r) {
  r._d = new Date(parseFloat(e) * 1e3);
});
Ne("x", function(e, t, r) {
  r._d = new Date(oe(e));
});
//! moment.js
B.version = "2.29.4";
qS(De);
B.fn = S;
B.min = k1;
B.max = L1;
B.now = B1;
B.utc = Zt;
B.unix = dG;
B.months = pG;
B.isDate = Uo;
B.locale = Lr;
B.invalid = Gs;
B.duration = Ft;
B.isMoment = Lt;
B.weekdays = EG;
B.parseZone = hG;
B.localeData = Er;
B.isDuration = ba;
B.monthsShort = mG;
B.weekdaysMin = OG;
B.defineLocale = s_;
B.updateLocale = h1;
B.locales = p1;
B.weekdaysShort = TG;
B.normalizeUnits = St;
B.relativeTimeRounding = KG;
B.relativeTimeThreshold = $G;
B.calendarFormat = lD;
B.prototype = S;
B.HTML5_FMT = {
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
class qG {
  constructor(t) {
    Xr(this), this.state = t, this.getters = t.getters, this.storage = t.storage;
  }
  addExecuteMessage(t) {
    console.log(t);
    const r = this.getters.getActiveTab();
    let n = t.output;
    t.error && (n = t.error.split("^")[1].split("at")[0]), this.state.executeMessages.push({
      message: n,
      isError: !!t.error,
      fileName: r.label,
      date: B().format("HH:mm")
    }), this.storage.set("EDITOR_EXECUTE_MESSAGES", this.state.executeMessages);
  }
  clearExecuteMessages() {
    this.state.executeMessages = [], this.storage.clear("EDITOR_EXECUTE_MESSAGES");
  }
}
const JG = (e) => {
  const { Spring: t } = Ss(), [r, n] = t.useSpring(() => ({
    opacity: 1,
    x: 0
  }));
  return Ih(e, () => ({
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
}, QG = we.div`
  color: ${it("light")};
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
`, ZG = we.span`
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
`, eU = Bn(
  ({ children: e }, t) => {
    const r = se(null), n = () => {
      r.current.scrollTo(0, r.current.scrollHeight);
    };
    return Ih(t, () => ({
      scrollToBottom: () => {
        n(), setTimeout(n, 50);
      }
    })), /* @__PURE__ */ K(QG, { ref: r, children: e });
  }
), tU = mr(
  Bn((e, t) => {
    const r = se(null), n = se(null), { isTerminalOpened: i } = Tv(), { executeMessages: o } = ni(), { spring: a, SpringDiv: s } = JG(t), u = () => {
      n.current.scrollIntoView({ behavior: "smooth" });
    };
    return Le(() => {
      r.current.scrollToBottom();
    }, [o.length, i]), /* @__PURE__ */ mt(eU, { ref: r, children: [
      "CodeGear output console.",
      /* @__PURE__ */ mt(s, { style: { ...a }, children: [
        o.map((c, _) => /* @__PURE__ */ mt(
          ZG,
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
), rU = [
  { label: "Terminal", key: "terminal" },
  { label: "Test cases", key: "test_cases" }
], nU = () => {
  const e = cn(), t = e.state.selectedTerminalTab, r = xr(
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
    val: rU
  };
}, iU = we.div`
  ${vE({
  right: "44px",
  top: "23px"
})}
  ${_n("flex-end")};
  gap: 23px;
  ${Nt("100px", "22px")};
  cursor: pointer;
  svg {
    path {
      stroke: ${it("secondaryGrey")};
      ${({ theme: e }) => wc(e.light)};
    }
    ${Nt("22px")}
    color: ${it("secondaryGrey")};
    ${({ theme: e }) => wc(e.light)}
  }
`, oU = we(yh)`
  ${_S(0, 6)};

  .ant-tabs-nav::before {
    border-bottom: none;
  }
  .ant-tabs-tab-active div {
    color: ${Ra("light")};
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
`, aU = we.h3`
  color: ${it("light")};
  font-size: ${({ theme: e }) => e.fz7};
`, Fw = mr(() => {
  const e = cn(), { isTerminalOpened: t } = e.state, r = nU(), n = $r(), i = se(), o = (u) => {
    r.set(u);
  }, a = xr(() => {
    e.update({ isTerminalOpened: !1 });
  }, []), s = async () => {
    await i.current?.close(), n.terminal.clearExecuteMessages();
  };
  return /* @__PURE__ */ mt(ES, { onClose: a, isOpen: t, height: 300, children: [
    /* @__PURE__ */ K(
      oU,
      {
        items: r.val,
        size: "large",
        onChange: o,
        activeKey: r.key
      }
    ),
    /* @__PURE__ */ K(Ic, { when: r.key === "terminal", children: /* @__PURE__ */ K(tU, { ref: i }) }),
    /* @__PURE__ */ K(Ic, { when: r.key === "test_cases", children: /* @__PURE__ */ K(aU, { children: "Test cases are not supported yet." }) }),
    /* @__PURE__ */ mt(iU, { children: [
      /* @__PURE__ */ K(fy, { onClick: s }),
      /* @__PURE__ */ K(_y, { onClick: a })
    ] })
  ] });
});
class sU {
  constructor(t) {
    Xr(this), this.state = t, this.getters = t.getters, this.tabs = new wS(t), this.editor = new iv(t), this.terminal = new qG(t);
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
    this.state.storage = new fl(t);
  }
}
class uU {
  constructor(t) {
    this.state = t, Xr(this);
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
    return vS.includes(t);
  }
}
const cU = `// Hello World! Here you can edit the code in 10 different languages. 😎

const camel = 'I like apples'

// Run the code and look in the terminal.
console.log(camel)

// You can edit and run the code in real time
// and your friends will see it! Sign in if you want to see more features.
`, lU = "javascript", _U = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMjMiIHZpZXdCb3g9IjAgMCAxNyAyMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0Ljk4OTcgMTUuNDA5NEwxNC40MjE2IDE1Ljc3NTJDMTQuNzcxMiAxNS40NTUxIDE1LjAzMzQgMTQuOTk3OCAxNS4wMzM0IDE0LjU0MDZDMTUuMDMzNCAxMy43NjMzIDE0LjY4MzggMTMuMTIzMSAxMy41NDc1IDEyLjU3NDRMMy44NDU3NSA4LjEzOTA3QzEuODc5MTcgNy4yMjQ1NiAwLjY1NTUxOCA2LjA4MTQ0IDAuNjU1NTE4IDQuMDIzODFDMC42NTU1MTggMi4xNDkwOCAxLjU3MzI1IDAuOTE0NTAyIDIuOTcxNzEgMEMyLjc1MzIgMC4zMjAwNzYgMi42MjIxIDAuNzMxNjAyIDIuNjIyMSAxLjIzNDU4QzIuNjIyMSAyLjM3NzcgMy41Mzk4NCAyLjg4MDY4IDQuNDU3NTcgMy4yOTIyMUwxMy44OTcyIDcuNjM2MDlDMTUuNjAxNSA4LjQxMzQyIDE3IDkuNjQ3OTkgMTcgMTEuNzk3MUMxNyAxMy41MzQ2IDE2LjIxMzQgMTQuNjMyIDE0Ljk4OTcgMTUuNDA5NFoiIGZpbGw9IiMwMTY4QTIiLz4KPHBhdGggZD0iTTEwLjU5MzMgMTEuMTM1OUwxMy42NTI0IDEyLjU1MzRDMTQuNzg4NyAxMy4xMDIxIDE1LjEzODMgMTMuNjk2NSAxNS4xMzgzIDE0LjUxOTZDMTUuMTM4MyAxNC45NzY4IDE0Ljg3NjEgMTUuNDM0MSAxNC41MjY0IDE1Ljc1NDJMOS4zNjk2MyAxMy4zNzY1TDEwLjI0MzcgMTIuODczNUMxMC45ODY2IDEyLjQ2MiAxMS4yMDUxIDEyLjE4NzYgMTEuMjA1MSAxMS45MTMzQzExLjI0ODggMTEuNTkzMiAxMS4wNzQgMTEuMzY0NiAxMC41OTMzIDExLjEzNTlaIiBmaWxsPSIjMDE2OEExIi8+CjxwYXRoIGQ9Ik01LjE1NjgxIDIyLjA4NTRDNC40NTc1OCAyMi40OTcgMy44NDU3NiAyMi43NzEzIDMuMTkwMjMgMjIuNzcxM0MxLjQ4NTg2IDIyLjc3MTMgMC4wODc0MDM1IDIxLjMwODEgMCAxOS41NzA1TDMuMjc3NjMgMTcuNTEyOUw4LjQzNDQ0IDE5LjkzNjNMNS4xNTY4MSAyMi4wODU0WiIgZmlsbD0iIzAxNjhBMSIvPgo8cGF0aCBkPSJNNi45MzI1NiAxMy4yODAxTDQuNDg1MjYgMTIuMTM3QzMuMzkyNzEgMTEuNjM0IDIuMzg3NTcgMTEuMjIyNSAyLjM4NzU3IDkuOTQyMTZDMi4zODc1NyA5LjMwMiAyLjU2MjM4IDguOTM2MiAyLjg2ODI5IDguNjE2MTNMOC4wMjUxIDEwLjk5MzhMNi43NTc3NSAxMS43NzEyQzYuNDA4MTQgMTEuOTk5OCA2LjE0NTkzIDEyLjE4MjcgNi4xNDU5MyAxMi41MDI4QzYuMTQ1OTMgMTIuNzc3MSA2LjQ5NTU0IDEzLjA1MTUgNi45MzI1NiAxMy4yODAxWiIgZmlsbD0iIzE1NTQ3NyIvPgo8cGF0aCBkPSJNMTUuOTA3NCAyM0MxNC41OTY0IDIxLjk0ODMgMTMuMTk3OSAyMS4yNjI0IDExLjUzNzMgMjAuNDM5NEwzLjc1ODM1IDE2LjgyNzFDMS43OTE3NyAxNS45MTI2IDAuNDgwNzEzIDE0LjY3OCAwLjQ4MDcxMyAxMi42NjYxQzAuNDgwNzEzIDEwLjY1NDIgMS4zOTg0NSA5LjY5Mzk5IDIuNTc4NCA4LjkxNjY2TDMuMDE1NDIgOC42NDIzMUMyLjcwOTUgOC45NjIzOSAyLjUzNDcgOS4zMjgxOSAyLjUzNDcgOS45NjgzNEMyLjUzNDcgMTEuMjAyOSAzLjU4MzU0IDExLjY2MDIgNC42MzIzOCAxMi4xNjMxTDEzLjY3ODcgMTYuMzI0MUMxNS4yNTE5IDE3LjAxIDE2LjY5NDEgMTguMjQ0NiAxNi42OTQxIDIwLjM0NzlDMTYuNzgxNSAyMS40OTExIDE2LjM0NDUgMjIuNDk3IDE1LjkwNzQgMjNaIiBmaWxsPSIjMTU1NDc3Ii8+Cjwvc3ZnPgo=", fU = we.div`
  ${Nt("23%", "28px")}
  ${_n("flex-start", "center")}
  gap: 25px;
  img {
    transition: transform 200ms;
    &:hover {
      transform: scale(1.1) rotate(3deg);
    }
  }
`;
we.span`
  color: ${({ theme: e }) => e.light};
  cursor: pointer;
`;
const dU = ({
  openFile: e,
  saveFile: t,
  createTab: r,
  runCode: n
}) => /* @__PURE__ */ mt(fU, { children: [
  /* @__PURE__ */ K(hO, { to: $A.MAIN, children: /* @__PURE__ */ K("img", { src: _U, alt: "" }) }),
  /* @__PURE__ */ K(yi, { type: "dashed", size: "small", onClick: e, children: "Open" }),
  /* @__PURE__ */ K(yi, { type: "dashed", size: "small", onClick: t, children: "Save" }),
  /* @__PURE__ */ K(yi, { type: "dashed", size: "small", onClick: r, children: "New" }),
  /* @__PURE__ */ K(yi, { type: "dashed", size: "small", onClick: n, children: "Run" })
] }), jw = we.div`
  background: ${({ theme: e }) => e.grey};
  border-right: 2px solid ${({ theme: e }) => e.lightGrey};
  box-sizing: border-box;
  ${Nt("52px", "100%")};
  ${_n("space-between", "center", "column")};
  padding-bottom: 15px;
  z-index: 3;
`, hU = we.div`
  ${Nt("23px")}
  svg {
    ${Nt()}
    color: ${({ theme: e }) => e.secondaryGrey};
    ${({ theme: e }) => wc(e.light)}
  }
  transition: transform 200ms;
  &:hover {
    transform: scale(1.1);
  }
  margin-top: 20px;
  cursor: pointer;
  user-select: none;
`, pU = we.div`
  ${Nt("23%", "100%")};
  ${_n("flex-start", "center")};
  gap: 25px;
`;
we(hU)`
  margin-top: 0;
  margin-left: 20px;
  svg {
    color: ${({ theme: e, $disabled: t }) => t ? e.secondaryGrey : e.light};
  }
`;
const mU = mr(
  ({ isDisabled: e, runCode: t, openSignIn: r }) => {
    const n = cS();
    return /* @__PURE__ */ mt(pU, { children: [
      /* @__PURE__ */ K(
        Nd,
        {
          type: "primary",
          onClick: t,
          disabled: e,
          override: "#38a886",
          children: "Run Code"
        }
      ),
      /* @__PURE__ */ K(
        Nd,
        {
          type: "primary",
          override: n.secondaryGrey,
          onClick: r,
          children: "Sign in"
        }
      )
    ] });
  }
), EU = {
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
class TU {
  constructor(t) {
    Xr(this), this.state = t, this.getters = t.getters, this.actions = t.actions;
  }
  async requestCodeExecution() {
    const { NOT_SUPPORTED: t, ERRORS_IN_CODE: r, SUCCESS: n, NETWORK_ERROR: i } = EU;
    if (!this.getters.isAllowedToExecute())
      return t;
    const o = this.getters.getActiveTab(), a = {
      code: o.content,
      language: o.lang
    };
    try {
      const s = await KA.post(
        Lp.CODE_EXECUTOR_API,
        a
      );
      return this.actions.terminal.addExecuteMessage(s.data), s.data.error ? r : n;
    } catch {
      return i;
    }
  }
}
const OU = () => {
  const { codeRunner: e } = Rv(), t = cn(), r = uy();
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
var RU = Object.defineProperty, vU = (e, t) => {
  for (var r in t)
    RU(e, r, { get: t[r], enumerable: !0 });
}, At = {};
vU(At, {
  assign: () => AT,
  colors: () => Br,
  createStringInterpolator: () => b_,
  skipAnimation: () => NT,
  to: () => IT,
  willAdvance: () => g_
});
var m_ = Mo(), z = (e) => Ho(e, m_), E_ = Mo();
z.write = (e) => Ho(e, E_);
var js = Mo();
z.onStart = (e) => Ho(e, js);
var T_ = Mo();
z.onFrame = (e) => Ho(e, T_);
var O_ = Mo();
z.onFinish = (e) => Ho(e, O_);
var kn = [];
z.setTimeout = (e, t) => {
  const r = z.now() + t, n = () => {
    const o = kn.findIndex((a) => a.cancel == n);
    ~o && kn.splice(o, 1), wr -= ~o ? 1 : 0;
  }, i = { time: r, handler: e, cancel: n };
  return kn.splice(OT(r), 0, i), wr += 1, RT(), i;
};
var OT = (e) => ~(~kn.findIndex((t) => t.time > e) || ~kn.length);
z.cancel = (e) => {
  js.delete(e), T_.delete(e), O_.delete(e), m_.delete(e), E_.delete(e);
};
z.sync = (e) => {
  Fc = !0, z.batchedUpdates(e), Fc = !1;
};
z.throttle = (e) => {
  let t;
  function r() {
    try {
      e(...t);
    } finally {
      t = null;
    }
  }
  function n(...i) {
    t = i, z.onStart(r);
  }
  return n.handler = e, n.cancel = () => {
    js.delete(r), t = null;
  }, n;
};
var R_ = typeof window < "u" ? window.requestAnimationFrame : (
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  () => {
  }
);
z.use = (e) => R_ = e;
z.now = typeof performance < "u" ? () => performance.now() : Date.now;
z.batchedUpdates = (e) => e();
z.catch = console.error;
z.frameLoop = "always";
z.advance = () => {
  z.frameLoop !== "demand" ? console.warn(
    "Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"
  ) : bT();
};
var Cr = -1, wr = 0, Fc = !1;
function Ho(e, t) {
  Fc ? (t.delete(e), e(0)) : (t.add(e), RT());
}
function RT() {
  Cr < 0 && (Cr = 0, z.frameLoop !== "demand" && R_(vT));
}
function bU() {
  Cr = -1;
}
function vT() {
  ~Cr && (R_(vT), z.batchedUpdates(bT));
}
function bT() {
  const e = Cr;
  Cr = z.now();
  const t = OT(Cr);
  if (t && (gT(kn.splice(0, t), (r) => r.handler()), wr -= t), !wr) {
    bU();
    return;
  }
  js.flush(), m_.flush(e ? Math.min(64, Cr - e) : 16.667), T_.flush(), E_.flush(), O_.flush();
}
function Mo() {
  let e = /* @__PURE__ */ new Set(), t = e;
  return {
    add(r) {
      wr += t == e && !e.has(r) ? 1 : 0, e.add(r);
    },
    delete(r) {
      return wr -= t == e && e.has(r) ? 1 : 0, e.delete(r);
    },
    flush(r) {
      t.size && (e = /* @__PURE__ */ new Set(), wr -= t.size, gT(t, (n) => n(r) && e.add(n)), wr += e.size, t = e);
    }
  };
}
function gT(e, t) {
  e.forEach((r) => {
    try {
      t(r);
    } catch (n) {
      z.catch(n);
    }
  });
}
function jc() {
}
var gU = (e, t, r) => Object.defineProperty(e, t, { value: r, writable: !0, configurable: !0 }), y = {
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
var X = (e, t) => e.forEach(t);
function Jt(e, t, r) {
  if (y.arr(e)) {
    for (let n = 0; n < e.length; n++)
      t.call(r, e[n], `${n}`);
    return;
  }
  for (const n in e)
    e.hasOwnProperty(n) && t.call(r, e[n], n);
}
var nt = (e) => y.und(e) ? [] : y.arr(e) ? e : [e];
function Bi(e, t) {
  if (e.size) {
    const r = Array.from(e);
    e.clear(), X(r, t);
  }
}
var Di = (e, ...t) => Bi(e, (r) => r(...t)), v_ = () => typeof window > "u" || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent), b_, IT, Br = null, NT = !1, g_ = jc, AT = (e) => {
  e.to && (IT = e.to), e.now && (z.now = e.now), e.colors !== void 0 && (Br = e.colors), e.skipAnimation != null && (NT = e.skipAnimation), e.createStringInterpolator && (b_ = e.createStringInterpolator), e.requestAnimationFrame && z.use(e.requestAnimationFrame), e.batchedUpdates && (z.batchedUpdates = e.batchedUpdates), e.willAdvance && (g_ = e.willAdvance), e.frameLoop && (z.frameLoop = e.frameLoop);
}, xi = /* @__PURE__ */ new Set(), gt = [], Pu = [], rs = 0, ko = {
  get idle() {
    return !xi.size && !gt.length;
  },
  /** Advance the given animation on every frame until idle. */
  start(e) {
    rs > e.priority ? (xi.add(e), z.onStart(IU)) : (yT(e), z(Vc));
  },
  /** Advance all animations by the given time. */
  advance: Vc,
  /** Call this when an animation's priority changes. */
  sort(e) {
    if (rs)
      z.onFrame(() => ko.sort(e));
    else {
      const t = gt.indexOf(e);
      ~t && (gt.splice(t, 1), ST(e));
    }
  },
  /**
   * Clear all animations. For testing purposes.
   *
   * ☠️ Never call this from within the frameloop.
   */
  clear() {
    gt = [], xi.clear();
  }
};
function IU() {
  xi.forEach(yT), xi.clear(), z(Vc);
}
function yT(e) {
  gt.includes(e) || ST(e);
}
function ST(e) {
  gt.splice(
    NU(gt, (t) => t.priority > e.priority),
    0,
    e
  );
}
function Vc(e) {
  const t = Pu;
  for (let r = 0; r < gt.length; r++) {
    const n = gt[r];
    rs = n.priority, n.idle || (g_(n), n.advance(e), n.idle || t.push(n));
  }
  return rs = 0, Pu = gt, Pu.length = 0, gt = t, gt.length > 0;
}
function NU(e, t) {
  const r = e.findIndex(t);
  return r < 0 ? e.length : r;
}
var AU = (e, t, r) => Math.min(Math.max(r, e), t), yU = {
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
}, wt = "[-+]?\\d*\\.?\\d+", ns = wt + "%";
function Vs(...e) {
  return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)";
}
var SU = new RegExp("rgb" + Vs(wt, wt, wt)), DU = new RegExp("rgba" + Vs(wt, wt, wt, wt)), GU = new RegExp("hsl" + Vs(wt, ns, ns)), UU = new RegExp(
  "hsla" + Vs(wt, ns, ns, wt)
), CU = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, wU = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, PU = /^#([0-9a-fA-F]{6})$/, HU = /^#([0-9a-fA-F]{8})$/;
function MU(e) {
  let t;
  return typeof e == "number" ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = PU.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : Br && Br[e] !== void 0 ? Br[e] : (t = SU.exec(e)) ? (mn(t[1]) << 24 | // r
  mn(t[2]) << 16 | // g
  mn(t[3]) << 8 | // b
  255) >>> // a
  0 : (t = DU.exec(e)) ? (mn(t[1]) << 24 | // r
  mn(t[2]) << 16 | // g
  mn(t[3]) << 8 | // b
  Kd(t[4])) >>> // a
  0 : (t = CU.exec(e)) ? parseInt(
    t[1] + t[1] + // r
    t[2] + t[2] + // g
    t[3] + t[3] + // b
    "ff",
    // a
    16
  ) >>> 0 : (t = HU.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = wU.exec(e)) ? parseInt(
    t[1] + t[1] + // r
    t[2] + t[2] + // g
    t[3] + t[3] + // b
    t[4] + t[4],
    // a
    16
  ) >>> 0 : (t = GU.exec(e)) ? (Xd(
    Yd(t[1]),
    // h
    Zo(t[2]),
    // s
    Zo(t[3])
    // l
  ) | 255) >>> // a
  0 : (t = UU.exec(e)) ? (Xd(
    Yd(t[1]),
    // h
    Zo(t[2]),
    // s
    Zo(t[3])
    // l
  ) | Kd(t[4])) >>> // a
  0 : null;
}
function Hu(e, t, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (t - e) * 6 * r : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e;
}
function Xd(e, t, r) {
  const n = r < 0.5 ? r * (1 + t) : r + t - r * t, i = 2 * r - n, o = Hu(i, n, e + 1 / 3), a = Hu(i, n, e), s = Hu(i, n, e - 1 / 3);
  return Math.round(o * 255) << 24 | Math.round(a * 255) << 16 | Math.round(s * 255) << 8;
}
function mn(e) {
  const t = parseInt(e, 10);
  return t < 0 ? 0 : t > 255 ? 255 : t;
}
function Yd(e) {
  return (parseFloat(e) % 360 + 360) % 360 / 360;
}
function Kd(e) {
  const t = parseFloat(e);
  return t < 0 ? 0 : t > 1 ? 255 : Math.round(t * 255);
}
function Zo(e) {
  const t = parseFloat(e);
  return t < 0 ? 0 : t > 100 ? 1 : t / 100;
}
function $d(e) {
  let t = MU(e);
  if (t === null)
    return e;
  t = t || 0;
  const r = (t & 4278190080) >>> 24, n = (t & 16711680) >>> 16, i = (t & 65280) >>> 8, o = (t & 255) / 255;
  return `rgba(${r}, ${n}, ${i}, ${o})`;
}
var Zn = (e, t, r) => {
  if (y.fun(e))
    return e;
  if (y.arr(e))
    return Zn({
      range: e,
      output: t,
      extrapolate: r
    });
  if (y.str(e.output[0]))
    return b_(e);
  const n = e, i = n.output, o = n.range || [0, 1], a = n.extrapolateLeft || n.extrapolate || "extend", s = n.extrapolateRight || n.extrapolate || "extend", u = n.easing || ((c) => c);
  return (c) => {
    const _ = LU(c, o);
    return kU(
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
function kU(e, t, r, n, i, o, a, s, u) {
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
function LU(e, t) {
  for (var r = 1; r < t.length - 1 && !(t[r] >= e); ++r)
    ;
  return r - 1;
}
var BU = (e, t = "end") => (r) => {
  r = t === "end" ? Math.min(r, 0.999) : Math.max(r, 1e-3);
  const n = r * e, i = t === "end" ? Math.floor(n) : Math.ceil(n);
  return AU(0, 1, i / e);
}, is = 1.70158, ea = is * 1.525, zd = is + 1, qd = 2 * Math.PI / 3, Jd = 2 * Math.PI / 4.5, ta = (e) => e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375 : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375, DT = {
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
  easeInBack: (e) => zd * e * e * e - is * e * e,
  easeOutBack: (e) => 1 + zd * Math.pow(e - 1, 3) + is * Math.pow(e - 1, 2),
  easeInOutBack: (e) => e < 0.5 ? Math.pow(2 * e, 2) * ((ea + 1) * 2 * e - ea) / 2 : (Math.pow(2 * e - 2, 2) * ((ea + 1) * (e * 2 - 2) + ea) + 2) / 2,
  easeInElastic: (e) => e === 0 ? 0 : e === 1 ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((e * 10 - 10.75) * qd),
  easeOutElastic: (e) => e === 0 ? 0 : e === 1 ? 1 : Math.pow(2, -10 * e) * Math.sin((e * 10 - 0.75) * qd) + 1,
  easeInOutElastic: (e) => e === 0 ? 0 : e === 1 ? 1 : e < 0.5 ? -(Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * Jd)) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * Jd) / 2 + 1,
  easeInBounce: (e) => 1 - ta(1 - e),
  easeOutBounce: ta,
  easeInOutBounce: (e) => e < 0.5 ? (1 - ta(1 - 2 * e)) / 2 : (1 + ta(2 * e - 1)) / 2,
  steps: BU
}, io = Symbol.for("FluidValue.get"), ei = Symbol.for("FluidValue.observers"), Rt = (e) => !!(e && e[io]), ut = (e) => e && e[io] ? e[io]() : e, Qd = (e) => e[ei] || null;
function xU(e, t) {
  e.eventObserved ? e.eventObserved(t) : e(t);
}
function oo(e, t) {
  const r = e[ei];
  r && r.forEach((n) => {
    xU(n, t);
  });
}
var GT = class {
  constructor(e) {
    if (!e && !(e = this.get))
      throw Error("Unknown getter");
    FU(this, e);
  }
}, FU = (e, t) => UT(e, io, t);
function ci(e, t) {
  if (e[io]) {
    let r = e[ei];
    r || UT(e, ei, r = /* @__PURE__ */ new Set()), r.has(t) || (r.add(t), e.observerAdded && e.observerAdded(r.size, t));
  }
  return t;
}
function ao(e, t) {
  const r = e[ei];
  if (r && r.has(t)) {
    const n = r.size - 1;
    n ? r.delete(t) : e[ei] = null, e.observerRemoved && e.observerRemoved(n, t);
  }
}
var UT = (e, t, r) => Object.defineProperty(e, t, {
  value: r,
  writable: !0,
  configurable: !0
}), Ia = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, jU = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi, Zd = new RegExp(`(${Ia.source})(%|[a-z]+)`, "i"), VU = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi, Ws = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/, CT = (e) => {
  const [t, r] = WU(e);
  if (!t || v_())
    return e;
  const n = window.getComputedStyle(document.documentElement).getPropertyValue(t);
  if (n)
    return n.trim();
  if (r && r.startsWith("--")) {
    const i = window.getComputedStyle(document.documentElement).getPropertyValue(r);
    return i || e;
  } else {
    if (r && Ws.test(r))
      return CT(r);
    if (r)
      return r;
  }
  return e;
}, WU = (e) => {
  const t = Ws.exec(e);
  if (!t)
    return [,];
  const [, r, n] = t;
  return [r, n];
}, Mu, XU = (e, t, r, n, i) => `rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${i})`, wT = (e) => {
  Mu || (Mu = Br ? (
    // match color names, ignore partial matches
    new RegExp(`(${Object.keys(Br).join("|")})(?!\\w)`, "g")
  ) : (
    // never match
    /^\b$/
  ));
  const t = e.output.map((o) => ut(o).replace(Ws, CT).replace(jU, $d).replace(Mu, $d)), r = t.map((o) => o.match(Ia).map(Number)), i = r[0].map(
    (o, a) => r.map((s) => {
      if (!(a in s))
        throw Error('The arity of each "output" value must be equal');
      return s[a];
    })
  ).map(
    (o) => Zn({ ...e, output: o })
  );
  return (o) => {
    const a = !Zd.test(t[0]) && t.find((u) => Zd.test(u))?.replace(Ia, "");
    let s = 0;
    return t[0].replace(
      Ia,
      () => `${i[s++](o)}${a || ""}`
    ).replace(VU, XU);
  };
}, I_ = "react-spring: ", PT = (e) => {
  const t = e;
  let r = !1;
  if (typeof t != "function")
    throw new TypeError(`${I_}once requires a function parameter`);
  return (...n) => {
    r || (t(...n), r = !0);
  };
}, YU = PT(console.warn);
function HT() {
  YU(
    `${I_}The "interpolate" function is deprecated in v9 (use "to" instead)`
  );
}
var KU = PT(console.warn);
function $U() {
  KU(
    `${I_}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`
  );
}
function Xs(e) {
  return y.str(e) && (e[0] == "#" || /\d/.test(e) || // Do not identify a CSS variable as an AnimatedString if its SSR
  !v_() && Ws.test(e) || e in (Br || {}));
}
var En, Na = /* @__PURE__ */ new WeakMap(), zU = (e) => e.forEach(({ target: t, contentRect: r }) => Na.get(t)?.forEach((n) => n(r)));
function qU(e, t) {
  En || typeof ResizeObserver < "u" && (En = new ResizeObserver(zU));
  let r = Na.get(t);
  return r || (r = /* @__PURE__ */ new Set(), Na.set(t, r)), r.add(e), En && En.observe(t), () => {
    const n = Na.get(t);
    n && (n.delete(e), !n.size && En && En.unobserve(t));
  };
}
var Aa = /* @__PURE__ */ new Set(), bi, JU = () => {
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
}, QU = (e) => (Aa.add(e), bi || (bi = JU()), () => {
  Aa.delete(e), !Aa.size && bi && (bi(), bi = void 0);
}), MT = (e, { container: t = document.documentElement } = {}) => t === document.documentElement ? QU(e) : qU(e, t), ZU = (e, t, r) => t - e === 0 ? 1 : (r - e) / (t - e), eC = {
  x: {
    length: "Width",
    position: "Left"
  },
  y: {
    length: "Height",
    position: "Top"
  }
}, tC = class {
  constructor(e, t) {
    this.createAxis = () => ({
      current: 0,
      progress: 0,
      scrollLength: 0
    }), this.updateAxis = (r) => {
      const n = this.info[r], { length: i, position: o } = eC[r];
      n.current = this.container[`scroll${o}`], n.scrollLength = this.container["scroll" + i] - this.container["client" + i], n.progress = ZU(0, n.scrollLength, n.current);
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
}, gi = /* @__PURE__ */ new WeakMap(), eh = /* @__PURE__ */ new WeakMap(), ku = /* @__PURE__ */ new WeakMap(), th = (e) => e === document.documentElement ? window : e, rC = (e, { container: t = document.documentElement } = {}) => {
  let r = ku.get(t);
  r || (r = /* @__PURE__ */ new Set(), ku.set(t, r));
  const n = new tC(e, t);
  if (r.add(n), !gi.has(t)) {
    const o = () => (r?.forEach((s) => s.advance()), !0);
    gi.set(t, o);
    const a = th(t);
    window.addEventListener("resize", o, { passive: !0 }), t !== document.documentElement && eh.set(t, MT(o, { container: t })), a.addEventListener("scroll", o, { passive: !0 });
  }
  const i = gi.get(t);
  return z(i), () => {
    z.cancel(i);
    const o = ku.get(t);
    if (!o || (o.delete(n), o.size))
      return;
    const a = gi.get(t);
    gi.delete(t), a && (th(t).removeEventListener("scroll", a), window.removeEventListener("resize", a), eh.get(t)?.());
  };
};
function nC(e) {
  const t = se(null);
  return t.current === null && (t.current = e()), t.current;
}
var ft = v_() ? Le : sO, iC = () => {
  const e = se(!1);
  return ft(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
};
function N_() {
  const e = dt()[1], t = iC();
  return () => {
    t.current && e(Math.random());
  };
}
function oC(e, t) {
  const [r] = dt(
    () => ({
      inputs: t,
      result: e()
    })
  ), n = se(), i = n.current;
  let o = i;
  return o ? t && o.inputs && aC(t, o.inputs) || (o = {
    inputs: t,
    result: e()
  }) : o = r, Le(() => {
    n.current = o, i == r && (r.inputs = r.result = void 0);
  }, [o]), o.result;
}
function aC(e, t) {
  if (e.length !== t.length)
    return !1;
  for (let r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
var Ys = (e) => Le(e, sC), sC = [];
function Wc(e) {
  const t = se();
  return Le(() => {
    t.current = e;
  }), t.current;
}
var uC = () => {
  const [e, t] = dt(null);
  return ft(() => {
    const r = window.matchMedia("(prefers-reduced-motion)"), n = (i) => {
      t(i.matches), AT({
        skipAnimation: i.matches
      });
    };
    return n(r), r.addEventListener("change", n), () => {
      r.removeEventListener("change", n);
    };
  }, []), e;
}, so = Symbol.for("Animated:node"), cC = (e) => !!e && e[so] === e, jt = (e) => e && e[so], A_ = (e, t) => gU(e, so, t), Ks = (e) => e && e[so] && e[so].getPayload(), kT = class {
  constructor() {
    A_(this, this);
  }
  /** Get every `AnimatedValue` used by this node. */
  getPayload() {
    return this.payload || [];
  }
}, Lo = class extends kT {
  constructor(e) {
    super(), this._value = e, this.done = !0, this.durationProgress = 0, y.num(this._value) && (this.lastPosition = this._value);
  }
  /** @internal */
  static create(e) {
    return new Lo(e);
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
}, uo = class extends Lo {
  constructor(e) {
    super(0), this._string = null, this._toString = Zn({
      output: [e, e]
    });
  }
  /** @internal */
  static create(e) {
    return new uo(e);
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
    e && (this._toString = Zn({
      output: [this.getValue(), e]
    })), this._value = 0, super.reset();
  }
}, os = { dependencies: null }, $s = class extends kT {
  constructor(e) {
    super(), this.source = e, this.setValue(e);
  }
  getValue(e) {
    const t = {};
    return Jt(this.source, (r, n) => {
      cC(r) ? t[n] = r.getValue(e) : Rt(r) ? t[n] = ut(r) : e || (t[n] = r);
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
    os.dependencies && Rt(e) && os.dependencies.add(e);
    const t = Ks(e);
    t && X(t, (r) => this.add(r));
  }
}, LT = class extends $s {
  constructor(e) {
    super(e);
  }
  /** @internal */
  static create(e) {
    return new LT(e);
  }
  getValue() {
    return this.source.map((e) => e.getValue());
  }
  setValue(e) {
    const t = this.getPayload();
    return e.length == t.length ? t.map((r, n) => r.setValue(e[n])).some(Boolean) : (super.setValue(e.map(lC)), !0);
  }
};
function lC(e) {
  return (Xs(e) ? uo : Lo).create(e);
}
function Xc(e) {
  const t = jt(e);
  return t ? t.constructor : y.arr(e) ? LT : Xs(e) ? uo : Lo;
}
var rh = (e, t) => {
  const r = (
    // Function components must use "forwardRef" to avoid being
    // re-rendered on every animation frame.
    !y.fun(e) || e.prototype && e.prototype.isReactComponent
  );
  return Bn((n, i) => {
    const o = se(null), a = r && // eslint-disable-next-line react-hooks/rules-of-hooks
    xr(
      (d) => {
        o.current = dC(i, d);
      },
      [i]
    ), [s, u] = fC(n, t), c = N_(), _ = () => {
      const d = o.current;
      if (r && !d)
        return;
      (d ? t.applyAnimatedValues(d, s.getValue(!0)) : !1) === !1 && c();
    }, l = new _C(_, u), f = se();
    ft(() => (f.current = l, X(u, (d) => ci(d, l)), () => {
      f.current && (X(
        f.current.deps,
        (d) => ao(d, f.current)
      ), z.cancel(f.current.update));
    })), Le(_, []), Ys(() => () => {
      const d = f.current;
      X(d.deps, (p) => ao(p, d));
    });
    const h = t.getComponentProps(s.getValue());
    return /* @__PURE__ */ Gn.createElement(e, { ...h, ref: a });
  });
}, _C = class {
  constructor(e, t) {
    this.update = e, this.deps = t;
  }
  eventObserved(e) {
    e.type == "change" && z.write(this.update);
  }
};
function fC(e, t) {
  const r = /* @__PURE__ */ new Set();
  return os.dependencies = r, e.style && (e = {
    ...e,
    style: t.createAnimatedStyle(e.style)
  }), e = new $s(e), os.dependencies = null, [e, r];
}
function dC(e, t) {
  return e && (y.fun(e) ? e(t) : e.current = t), t;
}
var nh = Symbol.for("AnimatedComponent"), hC = (e, {
  applyAnimatedValues: t = () => !1,
  createAnimatedStyle: r = (i) => new $s(i),
  getComponentProps: n = (i) => i
} = {}) => {
  const i = {
    applyAnimatedValues: t,
    createAnimatedStyle: r,
    getComponentProps: n
  }, o = (a) => {
    const s = ih(a) || "Anonymous";
    return y.str(a) ? a = o[a] || (o[a] = rh(a, i)) : a = a[nh] || (a[nh] = rh(a, i)), a.displayName = `Animated(${s})`, a;
  };
  return Jt(e, (a, s) => {
    y.arr(e) && (s = ih(a)), o[s] = o(a);
  }), {
    animated: o
  };
}, ih = (e) => y.str(e) ? e : e && y.str(e.displayName) ? e.displayName : y.fun(e) && e.name || null, pC = class {
};
function rt(e, ...t) {
  return y.fun(e) ? e(...t) : e;
}
var Fi = (e, t) => e === !0 || !!(t && e && (y.fun(e) ? e(t) : nt(e).includes(t))), BT = (e, t) => y.obj(e) ? t && e[t] : e, xT = (e, t) => e.default === !0 ? e[t] : e.default ? e.default[t] : void 0, mC = (e) => e, zs = (e, t = mC) => {
  let r = EC;
  e.default && e.default !== !0 && (e = e.default, r = Object.keys(e));
  const n = {};
  for (const i of r) {
    const o = t(e[i], i);
    y.und(o) || (n[i] = o);
  }
  return n;
}, EC = [
  "config",
  "onProps",
  "onStart",
  "onChange",
  "onPause",
  "onResume",
  "onRest"
], TC = {
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
function OC(e) {
  const t = {};
  let r = 0;
  if (Jt(e, (n, i) => {
    TC[i] || (t[i] = n, r++);
  }), r)
    return t;
}
function qs(e) {
  const t = OC(e);
  if (t) {
    const r = { to: t };
    return Jt(e, (n, i) => i in t || (r[i] = n)), r;
  }
  return { ...e };
}
function co(e) {
  return e = ut(e), y.arr(e) ? e.map(co) : Xs(e) ? At.createStringInterpolator({
    range: [0, 1],
    output: [e, e]
  })(1) : e;
}
function FT(e) {
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
function RC(e, t, r = 1e3) {
  ft(() => {
    if (t) {
      let n = 0;
      X(e, (i, o) => {
        const a = i.current;
        if (a.length) {
          let s = r * t[o];
          isNaN(s) ? s = n : n = s, X(a, (u) => {
            X(u.queue, (c) => {
              const _ = c.delay;
              c.delay = (l) => s + rt(_ || 0, l);
            });
          }), i.start();
        }
      });
    } else {
      let n = Promise.resolve();
      X(e, (i) => {
        const o = i.current;
        if (o.length) {
          const a = o.map((s) => {
            const u = s.queue;
            return s.queue = [], u;
          });
          n = n.then(() => (X(
            o,
            (s, u) => X(a[u] || [], (c) => s.queue.push(c))
          ), Promise.all(i.start())));
        }
      });
    }
  });
}
var jT = {
  default: { tension: 170, friction: 26 },
  gentle: { tension: 120, friction: 14 },
  wobbly: { tension: 180, friction: 12 },
  stiff: { tension: 210, friction: 20 },
  slow: { tension: 280, friction: 60 },
  molasses: { tension: 280, friction: 120 }
}, $c = {
  ...jT.default,
  mass: 1,
  damping: 1,
  easing: DT.linear,
  clamp: !1
}, vC = class {
  constructor() {
    this.velocity = 0, Object.assign(this, $c);
  }
};
function bC(e, t, r) {
  r && (r = { ...r }, oh(r, t), t = { ...r, ...t }), oh(e, t), Object.assign(e, t);
  for (const a in $c)
    e[a] == null && (e[a] = $c[a]);
  let { frequency: n, damping: i } = e;
  const { mass: o } = e;
  return y.und(n) || (n < 0.01 && (n = 0.01), i < 0 && (i = 0), e.tension = Math.pow(2 * Math.PI / n, 2) * o, e.friction = 4 * Math.PI * i * o / n), e;
}
function oh(e, t) {
  if (!y.und(t.decay))
    e.duration = void 0;
  else {
    const r = !y.und(t.tension) || !y.und(t.friction);
    (r || !y.und(t.frequency) || !y.und(t.damping) || !y.und(t.mass)) && (e.duration = void 0, e.decay = void 0), r && (e.frequency = void 0);
  }
}
var ah = [], gC = class {
  constructor() {
    this.changed = !1, this.values = ah, this.toValues = null, this.fromValues = ah, this.config = new vC(), this.immediate = !1;
  }
};
function VT(e, { key: t, props: r, defaultProps: n, state: i, actions: o }) {
  return new Promise((a, s) => {
    let u, c, _ = Fi(r.cancel ?? n?.cancel, t);
    if (_)
      h();
    else {
      y.und(r.pause) || (i.paused = Fi(r.pause, t));
      let d = n?.pause;
      d !== !0 && (d = i.paused || Fi(d, t)), u = rt(r.delay || 0, t), d ? (i.resumeQueue.add(f), o.pause()) : (o.resume(), f());
    }
    function l() {
      i.resumeQueue.add(f), i.timeouts.delete(c), c.cancel(), u = c.time - z.now();
    }
    function f() {
      u > 0 && !At.skipAnimation ? (i.delayed = !0, c = z.setTimeout(h, u), i.pauseQueue.add(l), i.timeouts.add(c)) : h();
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
var S_ = (e, t) => t.length == 1 ? t[0] : t.some((r) => r.cancelled) ? Ln(e.get()) : t.every((r) => r.noop) ? WT(e.get()) : Ut(
  e.get(),
  t.every((r) => r.finished)
), WT = (e) => ({
  value: e,
  noop: !0,
  finished: !0,
  cancelled: !1
}), Ut = (e, t, r = !1) => ({
  value: e,
  finished: t,
  cancelled: r
}), Ln = (e) => ({
  value: e,
  cancelled: !0,
  finished: !1
});
function XT(e, t, r, n) {
  const { callId: i, parentId: o, onRest: a } = t, { asyncTo: s, promise: u } = r;
  return !o && e === s && !t.reset ? u : r.promise = (async () => {
    r.asyncId = i, r.asyncTo = e;
    const c = zs(
      t,
      (m, O) => (
        // The `onRest` prop is only called when the `runAsync` promise is resolved.
        O === "onRest" ? void 0 : m
      )
    );
    let _, l;
    const f = new Promise(
      (m, O) => (_ = m, l = O)
    ), h = (m) => {
      const O = (
        // The `cancel` prop or `stop` method was used.
        i <= (r.cancelId || 0) && Ln(n) || // The async `to` prop was replaced.
        i !== r.asyncId && Ut(n, !1)
      );
      if (O)
        throw m.result = O, l(m), m;
    }, d = (m, O) => {
      const E = new zc(), T = new sh();
      return (async () => {
        if (At.skipAnimation)
          throw lo(r), T.result = Ut(n, !1), l(T), T;
        h(E);
        const v = y.obj(m) ? { ...m } : { ...O, to: m };
        v.parentId = i, Jt(c, (N, I) => {
          y.und(v[I]) && (v[I] = N);
        });
        const R = await n.start(v);
        return h(E), r.paused && await new Promise((N) => {
          r.resumeQueue.add(N);
        }), R;
      })();
    };
    let p;
    if (At.skipAnimation)
      return lo(r), Ut(n, !1);
    try {
      let m;
      y.arr(e) ? m = (async (O) => {
        for (const E of O)
          await d(E);
      })(e) : m = Promise.resolve(e(d, n.stop.bind(n))), await Promise.all([m.then(_), f]), p = Ut(n.get(), !0, !1);
    } catch (m) {
      if (m instanceof zc)
        p = m.result;
      else if (m instanceof sh)
        p = m.result;
      else
        throw m;
    } finally {
      i == r.asyncId && (r.asyncId = o, r.asyncTo = o ? s : void 0, r.promise = o ? u : void 0);
    }
    return y.fun(a) && z.batchedUpdates(() => {
      a(p, n, n.item);
    }), p;
  })();
}
function lo(e, t) {
  Bi(e.timeouts, (r) => r.cancel()), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, t && (e.cancelId = t);
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
}, qc = (e) => e instanceof Js, IC = 1, Js = class extends GT {
  constructor() {
    super(...arguments), this.id = IC++, this._priority = 0;
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
    return HT(), At.to(this, e);
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
    oo(this, {
      type: "change",
      parent: this,
      value: e,
      idle: t
    });
  }
  /** Tell our children about our new priority */
  _onPriorityChange(e) {
    this.idle || ko.sort(this), oo(this, {
      type: "priority",
      parent: this,
      priority: e
    });
  }
}, sn = Symbol.for("SpringPhase"), YT = 1, Jc = 2, Qc = 4, Lu = (e) => (e[sn] & YT) > 0, vr = (e) => (e[sn] & Jc) > 0, Ii = (e) => (e[sn] & Qc) > 0, uh = (e, t) => t ? e[sn] |= Jc | YT : e[sn] &= ~Jc, ch = (e, t) => t ? e[sn] |= Qc : e[sn] &= ~Qc, D_ = class extends Js {
  constructor(e, t) {
    if (super(), this.animation = new gC(), this.defaultProps = {}, this._state = {
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
    return !(vr(this) || this._state.asyncTo) || Ii(this);
  }
  get goal() {
    return ut(this.animation.to);
  }
  get velocity() {
    const e = jt(this);
    return e instanceof Lo ? e.lastVelocity || 0 : e.getPayload().map((t) => t.lastVelocity || 0);
  }
  /**
   * When true, this value has been animated at least once.
   */
  get hasAnimated() {
    return Lu(this);
  }
  /**
   * When true, this value has an unfinished animation,
   * which is either active or paused.
   */
  get isAnimating() {
    return vr(this);
  }
  /**
   * When true, all current and future animations are paused.
   */
  get isPaused() {
    return Ii(this);
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
    const { config: o } = n, a = Ks(n.to);
    !a && Rt(n.to) && (i = nt(ut(n.to))), n.values.forEach((c, _) => {
      if (c.done)
        return;
      const l = (
        // Animated strings always go from 0 to 1.
        c.constructor == uo ? 1 : a ? a[_].lastPosition : i[_]
      );
      let f = n.immediate, h = l;
      if (!f) {
        if (h = c.lastPosition, o.tension <= 0) {
          c.done = !0;
          return;
        }
        let d = c.elapsedTime += e;
        const p = n.fromValues[_], m = c.v0 != null ? c.v0 : c.v0 = y.arr(o.velocity) ? o.velocity[_] : o.velocity;
        let O;
        const E = o.precision || (p == l ? 5e-3 : Math.min(1, Math.abs(l - p) * 1e-3));
        if (y.und(o.duration))
          if (o.decay) {
            const T = o.decay === !0 ? 0.998 : o.decay, v = Math.exp(-(1 - T) * d);
            h = p + m / (1 - T) * (1 - v), f = Math.abs(c.lastPosition - h) <= E, O = m * v;
          } else {
            O = c.lastVelocity == null ? m : c.lastVelocity;
            const T = o.restVelocity || E / 10, v = o.clamp ? 0 : o.bounce, R = !y.und(v), N = p == l ? c.v0 > 0 : p < l;
            let I, C = !1;
            const D = 1, G = Math.ceil(e / D);
            for (let Z = 0; Z < G && (I = Math.abs(O) > T, !(!I && (f = Math.abs(l - h) <= E, f))); ++Z) {
              R && (C = h == l || h > l == N, C && (O = -O * v, h = l));
              const re = -o.tension * 1e-6 * (h - l), J = -o.friction * 1e-3 * O, x = (re + J) / o.mass;
              O = O + x * D, h = h + O * D;
            }
          }
        else {
          let T = 1;
          o.duration > 0 && (this._memoizedDuration !== o.duration && (this._memoizedDuration = o.duration, c.durationProgress > 0 && (c.elapsedTime = o.duration * c.durationProgress, d = c.elapsedTime += e)), T = (o.progress || 0) + d / this._memoizedDuration, T = T > 1 ? 1 : T < 0 ? 0 : T, c.durationProgress = T), h = p + o.easing(T) * (l - p), O = (h - c.lastPosition) / e, f = T == 1;
        }
        c.lastVelocity = O, Number.isNaN(h) && (console.warn("Got NaN while animating:", this), f = !0);
      }
      a && !a[_].done && (f = !1), f ? c.done = !0 : t = !1, c.setValue(h, o.round) && (r = !0);
    });
    const s = jt(this), u = s.getValue();
    if (t) {
      const c = ut(n.to);
      (u !== c || r) && !o.decay ? (s.setValue(c), this._onChange(c)) : r && o.decay && this._onChange(u), this._stop();
    } else
      r && this._onChange(u);
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
    if (vr(this)) {
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
    let r;
    return y.und(e) ? (r = this.queue || [], this.queue = []) : r = [y.obj(e) ? e : { ...t, to: e }], Promise.all(
      r.map((n) => this._update(n))
    ).then((n) => S_(this, n));
  }
  /**
   * Stop the current animation, and cancel any delayed updates.
   *
   * Pass `true` to call `onRest` with `cancelled: true`.
   */
  stop(e) {
    const { to: t } = this.animation;
    return this._focus(this.get()), lo(this._state, e && this._lastCallId), z.batchedUpdates(() => this._stop(t, e)), this;
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
    r = y.obj(r) ? r[t] : r, (r == null || Yc(r)) && (r = void 0), n = y.obj(n) ? n[t] : n, n == null && (n = void 0);
    const i = { to: r, from: n };
    return Lu(this) || (e.reverse && ([r, n] = [n, r]), n = ut(n), y.und(n) ? jt(this) || this._set(r) : this._set(n)), i;
  }
  /** Every update is processed by this method before merging. */
  _update({ ...e }, t) {
    const { key: r, defaultProps: n } = this;
    e.default && Object.assign(
      n,
      zs(
        e,
        (a, s) => /^on/.test(s) ? BT(a, r) : a
      )
    ), _h(this, e, "onProps"), Ai(this, "onProps", e, this);
    const i = this._prepareNode(e);
    if (Object.isFrozen(this))
      throw Error(
        "Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?"
      );
    const o = this._state;
    return VT(++this._lastCallId, {
      key: r,
      props: e,
      defaultProps: n,
      state: o,
      actions: {
        pause: () => {
          Ii(this) || (ch(this, !0), Di(o.pauseQueue), Ai(
            this,
            "onPause",
            Ut(this, Ni(this, this.animation.to)),
            this
          ));
        },
        resume: () => {
          Ii(this) && (ch(this, !1), vr(this) && this._resume(), Di(o.resumeQueue), Ai(
            this,
            "onResume",
            Ut(this, Ni(this, this.animation.to)),
            this
          ));
        },
        start: this._merge.bind(this, i)
      }
    }).then((a) => {
      if (e.loop && a.finished && !(t && a.noop)) {
        const s = KT(e);
        if (s)
          return this._update(s, !0);
      }
      return a;
    });
  }
  /** Merge props into the current animation */
  _merge(e, t, r) {
    if (t.cancel)
      return this.stop(!0), r(Ln(this));
    const n = !y.und(e.to), i = !y.und(e.from);
    if (n || i)
      if (t.callId > this._lastToId)
        this._lastToId = t.callId;
      else
        return r(Ln(this));
    const { key: o, defaultProps: a, animation: s } = this, { to: u, from: c } = s;
    let { to: _ = u, from: l = c } = e;
    i && !n && (!t.default || y.und(_)) && (_ = l), t.reverse && ([_, l] = [l, _]);
    const f = !nr(l, c);
    f && (s.from = l), l = ut(l);
    const h = !nr(_, u);
    h && this._focus(_);
    const d = Yc(t.to), { config: p } = s, { decay: m, velocity: O } = p;
    (n || i) && (p.velocity = 0), t.config && !d && bC(
      p,
      rt(t.config, o),
      // Avoid calling the same "config" prop twice.
      t.config !== a.config ? rt(a.config, o) : void 0
    );
    let E = jt(this);
    if (!E || y.und(_))
      return r(Ut(this, !0));
    const T = (
      // When `reset` is undefined, the `from` prop implies `reset: true`,
      // except for declarative updates. When `reset` is defined, there
      // must exist a value to animate from.
      y.und(t.reset) ? i && !t.default : !y.und(l) && Fi(t.reset, o)
    ), v = T ? l : this.get(), R = co(_), N = y.num(R) || y.arr(R) || Xs(R), I = !d && (!N || Fi(a.immediate || t.immediate, o));
    if (h) {
      const Z = Xc(_);
      if (Z !== E.constructor)
        if (I)
          E = this._set(R);
        else
          throw Error(
            `Cannot animate between ${E.constructor.name} and ${Z.name}, as the "to" prop suggests`
          );
    }
    const C = E.constructor;
    let D = Rt(_), G = !1;
    if (!D) {
      const Z = T || !Lu(this) && f;
      (h || Z) && (G = nr(co(v), R), D = !G), (!nr(s.immediate, I) && !I || !nr(p.decay, m) || !nr(p.velocity, O)) && (D = !0);
    }
    if (G && vr(this) && (s.changed && !T ? D = !0 : D || this._stop(u)), !d && ((D || Rt(u)) && (s.values = E.getPayload(), s.toValues = Rt(_) ? null : C == uo ? [1] : nt(R)), s.immediate != I && (s.immediate = I, !I && !T && this._set(u)), D)) {
      const { onRest: Z } = s;
      X(AC, (J) => _h(this, t, J));
      const re = Ut(this, Ni(this, u));
      Di(this._pendingCalls, re), this._pendingCalls.add(r), s.changed && z.batchedUpdates(() => {
        s.changed = !T, Z?.(re, this), T ? rt(a.onRest, re) : s.onStart?.(re, this);
      });
    }
    T && this._set(v), d ? r(XT(t.to, t, this._state, this)) : D ? this._start() : vr(this) && !h ? this._pendingCalls.add(r) : r(WT(v));
  }
  /** Update the `animation.to` value, which might be a `FluidValue` */
  _focus(e) {
    const t = this.animation;
    e !== t.to && (Qd(this) && this._detach(), t.to = e, Qd(this) && this._attach());
  }
  _attach() {
    let e = 0;
    const { to: t } = this.animation;
    Rt(t) && (ci(t, this), qc(t) && (e = t.priority + 1)), this.priority = e;
  }
  _detach() {
    const { to: e } = this.animation;
    Rt(e) && ao(e, this);
  }
  /**
   * Update the current value from outside the frameloop,
   * and return the `Animated` node.
   */
  _set(e, t = !0) {
    const r = ut(e);
    if (!y.und(r)) {
      const n = jt(this);
      if (!n || !nr(r, n.getValue())) {
        const i = Xc(r);
        !n || n.constructor != i ? A_(this, i.create(r)) : n.setValue(r), n && z.batchedUpdates(() => {
          this._onChange(r, t);
        });
      }
    }
    return jt(this);
  }
  _onStart() {
    const e = this.animation;
    e.changed || (e.changed = !0, Ai(
      this,
      "onStart",
      Ut(this, Ni(this, e.to)),
      this
    ));
  }
  _onChange(e, t) {
    t || (this._onStart(), rt(this.animation.onChange, e, this)), rt(this.defaultProps.onChange, e, this), super._onChange(e, t);
  }
  // This method resets the animation state (even if already animating) to
  // ensure the latest from/to range is used, and it also ensures this spring
  // is added to the frameloop.
  _start() {
    const e = this.animation;
    jt(this).reset(ut(e.to)), e.immediate || (e.fromValues = e.values.map((t) => t.lastPosition)), vr(this) || (uh(this, !0), Ii(this) || this._resume());
  }
  _resume() {
    At.skipAnimation ? this.finish() : ko.start(this);
  }
  /**
   * Exit the frameloop and notify `onRest` listeners.
   *
   * Always wrap `_stop` calls with `batchedUpdates`.
   */
  _stop(e, t) {
    if (vr(this)) {
      uh(this, !1);
      const r = this.animation;
      X(r.values, (i) => {
        i.done = !0;
      }), r.toValues && (r.onChange = r.onPause = r.onResume = void 0), oo(this, {
        type: "idle",
        parent: this
      });
      const n = t ? Ln(this.get()) : Ut(this.get(), Ni(this, e ?? r.to));
      Di(this._pendingCalls, n), r.changed && (r.changed = !1, Ai(this, "onRest", n, this));
    }
  }
};
function Ni(e, t) {
  const r = co(t), n = co(e.get());
  return nr(n, r);
}
function KT(e, t = e.loop, r = e.to) {
  const n = rt(t);
  if (n) {
    const i = n !== !0 && qs(n), o = (i || e).reverse, a = !i || i.reset;
    return _o({
      ...e,
      loop: t,
      // Avoid updating default props when looping.
      default: !1,
      // Never loop the `pause` prop.
      pause: void 0,
      // For the "reverse" prop to loop as expected, the "to" prop
      // must be undefined. The "reverse" prop is ignored when the
      // "to" prop is an array or function.
      to: !o || Yc(r) ? r : void 0,
      // Ignore the "from" prop except on reset.
      from: a ? e.from : void 0,
      reset: a,
      // The "loop" prop can return a "useSpring" props object to
      // override any of the original props.
      ...i
    });
  }
}
function _o(e) {
  const { to: t, from: r } = e = qs(e), n = /* @__PURE__ */ new Set();
  return y.obj(t) && lh(t, n), y.obj(r) && lh(r, n), e.keys = n.size ? Array.from(n) : null, e;
}
function NC(e) {
  const t = _o(e);
  return y.und(t.default) && (t.default = zs(t)), t;
}
function lh(e, t) {
  Jt(e, (r, n) => r != null && t.add(n));
}
var AC = [
  "onStart",
  "onRest",
  "onChange",
  "onPause",
  "onResume"
];
function _h(e, t, r) {
  e.animation[r] = t[r] !== xT(t, r) ? BT(t[r], e.key) : void 0;
}
function Ai(e, t, ...r) {
  e.animation[t]?.(...r), e.defaultProps[t]?.(...r);
}
var yC = ["onStart", "onChange", "onRest"], SC = 1, G_ = class {
  constructor(e, t) {
    this.id = SC++, this.springs = {}, this.queue = [], this._lastAsyncId = 0, this._active = /* @__PURE__ */ new Set(), this._changed = /* @__PURE__ */ new Set(), this._started = !1, this._state = {
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
    return e && this.queue.push(_o(e)), this;
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
    return e ? t = nt(e).map(_o) : this.queue = [], this._flush ? this._flush(this, t) : (QT(this, t), Zc(this, t));
  }
  /** @internal */
  stop(e, t) {
    if (e !== !!e && (t = e), t) {
      const r = this.springs;
      X(nt(t), (n) => r[n].stop(!!e));
    } else
      lo(this._state, this._lastAsyncId), this.each((r) => r.stop(!!e));
    return this;
  }
  /** Freeze the active animation in time */
  pause(e) {
    if (y.und(e))
      this.start({ pause: !0 });
    else {
      const t = this.springs;
      X(nt(e), (r) => t[r].pause());
    }
    return this;
  }
  /** Resume the animation if paused. */
  resume(e) {
    if (y.und(e))
      this.start({ pause: !1 });
    else {
      const t = this.springs;
      X(nt(e), (r) => t[r].resume());
    }
    return this;
  }
  /** Call a function once per spring value */
  each(e) {
    Jt(this.springs, e);
  }
  /** @internal Called at the end of every animation frame */
  _onFrame() {
    const { onStart: e, onChange: t, onRest: r } = this._events, n = this._active.size > 0, i = this._changed.size > 0;
    (n && !this._started || i && !this._started) && (this._started = !0, Bi(e, ([s, u]) => {
      u.value = this.get(), s(u, this, this._item);
    }));
    const o = !n && this._started, a = i || o && r.size ? this.get() : null;
    i && t.size && Bi(t, ([s, u]) => {
      u.value = a, s(u, this, this._item);
    }), o && (this._started = !1, Bi(r, ([s, u]) => {
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
  return Promise.all(t.map((r) => $T(e, r))).then(
    (r) => S_(e, r)
  );
}
async function $T(e, t, r) {
  const { keys: n, to: i, from: o, loop: a, onRest: s, onResolve: u } = t, c = y.obj(t.default) && t.default;
  a && (t.loop = !1), i === !1 && (t.to = null), o === !1 && (t.from = null);
  const _ = y.arr(i) || y.fun(i) ? i : void 0;
  _ ? (t.to = void 0, t.onRest = void 0, c && (c.onRest = void 0)) : X(yC, (p) => {
    const m = t[p];
    if (y.fun(m)) {
      const O = e._events[p];
      t[p] = ({ finished: E, cancelled: T }) => {
        const v = O.get(m);
        v ? (E || (v.finished = !1), T && (v.cancelled = !0)) : O.set(m, {
          value: null,
          finished: E || !1,
          cancelled: T || !1
        });
      }, c && (c[p] = t[p]);
    }
  });
  const l = e._state;
  t.pause === !l.paused ? (l.paused = t.pause, Di(t.pause ? l.pauseQueue : l.resumeQueue)) : l.paused && (t.pause = !0);
  const f = (n || Object.keys(e.springs)).map(
    (p) => e.springs[p].start(t)
  ), h = t.cancel === !0 || xT(t, "cancel") === !0;
  (_ || h && l.asyncId) && f.push(
    VT(++e._lastAsyncId, {
      props: t,
      state: l,
      actions: {
        pause: jc,
        resume: jc,
        start(p, m) {
          h ? (lo(l, e._lastAsyncId), m(Ln(e))) : (p.onRest = s, m(
            XT(
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
  const d = S_(e, await Promise.all(f));
  if (a && d.finished && !(r && d.noop)) {
    const p = KT(t, a, i);
    if (p)
      return QT(e, [p]), $T(e, p, !0);
  }
  return u && z.batchedUpdates(() => u(d, e, e.item)), d;
}
function el(e, t) {
  const r = { ...e.springs };
  return t && X(nt(t), (n) => {
    y.und(n.keys) && (n = _o(n)), y.obj(n.to) || (n = { ...n, to: void 0 }), JT(r, n, (i) => qT(i));
  }), zT(e, r), r;
}
function zT(e, t) {
  Jt(t, (r, n) => {
    e.springs[n] || (e.springs[n] = r, ci(r, e));
  });
}
function qT(e, t) {
  const r = new D_();
  return r.key = e, t && ci(r, t), r;
}
function JT(e, t, r) {
  t.keys && X(t.keys, (n) => {
    (e[n] || (e[n] = r(n)))._prepareNode(t);
  });
}
function QT(e, t) {
  X(t, (r) => {
    JT(e.springs, r, (n) => qT(n, e));
  });
}
var li = ({
  children: e,
  ...t
}) => {
  const r = ot(as), n = t.pause || !!r.pause, i = t.immediate || !!r.immediate;
  t = oC(() => ({ pause: n, immediate: i }), [n, i]);
  const { Provider: o } = as;
  return /* @__PURE__ */ Gn.createElement(o, { value: t }, e);
}, as = DC(li, {});
li.Provider = as.Provider;
li.Consumer = as.Consumer;
function DC(e, t) {
  return Object.assign(e, Gn.createContext(t)), e.Provider._context = e, e.Consumer._context = e, e;
}
var Qs = () => {
  const e = [], t = function(n) {
    $U();
    const i = [];
    return X(e, (o, a) => {
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
    return X(e, (n) => n.pause(...arguments)), this;
  }, t.resume = function() {
    return X(e, (n) => n.resume(...arguments)), this;
  }, t.set = function(n) {
    X(e, (i, o) => {
      const a = y.fun(n) ? n(o, i) : n;
      a && i.set(a);
    });
  }, t.start = function(n) {
    const i = [];
    return X(e, (o, a) => {
      if (y.und(n))
        i.push(o.start());
      else {
        const s = this._getProps(n, o, a);
        s && i.push(o.start(s));
      }
    }), i;
  }, t.stop = function() {
    return X(e, (n) => n.stop(...arguments)), this;
  }, t.update = function(n) {
    return X(e, (i, o) => i.update(this._getProps(n, i, o))), this;
  };
  const r = function(n, i, o) {
    return y.fun(n) ? n(o, i) : n;
  };
  return t._getProps = r, t;
};
function U_(e, t, r) {
  const n = y.fun(t) && t;
  n && !r && (r = []);
  const i = yr(
    () => n || arguments.length == 3 ? Qs() : void 0,
    []
  ), o = se(0), a = N_(), s = yr(
    () => ({
      ctrls: [],
      queue: [],
      flush(O, E) {
        const T = el(O, E);
        return o.current > 0 && !s.queue.length && !Object.keys(T).some((R) => !O.springs[R]) ? Zc(O, E) : new Promise((R) => {
          zT(O, T), s.queue.push(() => {
            R(Zc(O, E));
          }), a();
        });
      }
    }),
    []
  ), u = se([...s.ctrls]), c = [], _ = Wc(e) || 0;
  yr(() => {
    X(u.current.slice(e, _), (O) => {
      Kc(O, i), O.stop(!0);
    }), u.current.length = e, l(_, e);
  }, [e]), yr(() => {
    l(0, Math.min(_, e));
  }, r);
  function l(O, E) {
    for (let T = O; T < E; T++) {
      const v = u.current[T] || (u.current[T] = new G_(null, s.flush)), R = n ? n(T, v) : t[T];
      R && (c[T] = NC(R));
    }
  }
  const f = u.current.map((O, E) => el(O, c[E])), h = ot(li), d = Wc(h), p = h !== d && FT(h);
  ft(() => {
    o.current++, s.ctrls = u.current;
    const { queue: O } = s;
    O.length && (s.queue = [], X(O, (E) => E())), X(u.current, (E, T) => {
      i?.add(E), p && E.start({ default: h });
      const v = c[T];
      v && (y_(E, v.ref), E.ref ? E.queue.push(v) : E.start(v));
    });
  }), Ys(() => () => {
    X(s.ctrls, (O) => O.stop(!0));
  });
  const m = f.map((O) => ({ ...O }));
  return i ? [m, i] : m;
}
function _i(e, t) {
  const r = y.fun(e), [[n], i] = U_(
    1,
    r ? e : [e],
    r ? t || [] : t
  );
  return r || arguments.length == 2 ? [n, i] : n;
}
var GC = () => Qs(), UC = () => dt(GC)[0], CC = (e, t) => {
  const r = nC(() => new D_(e, t));
  return Ys(() => () => {
    r.stop();
  }), r;
};
function ZT(e, t, r) {
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
    X(a[1].current, (s, u) => {
      const c = a[1].current[u + (i ? 1 : -1)];
      if (y_(s, o), s.ref) {
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
function eO(e, t, r) {
  const n = y.fun(t) && t, {
    reset: i,
    sort: o,
    trail: a = 0,
    expires: s = !0,
    exitBeforeEnter: u = !1,
    onDestroyed: c,
    ref: _,
    config: l
  } = n ? n() : t, f = yr(
    () => n || arguments.length == 3 ? Qs() : void 0,
    []
  ), h = nt(e), d = [], p = se(null), m = i ? null : p.current;
  ft(() => {
    p.current = d;
  }), Ys(() => (X(d, (x) => {
    f?.add(x.ctrl), x.ctrl.ref = f;
  }), () => {
    X(p.current, (x) => {
      x.expired && clearTimeout(x.expirationId), Kc(x.ctrl, f), x.ctrl.stop(!0);
    });
  }));
  const O = PC(h, n ? n() : t, m), E = i && p.current || [];
  ft(
    () => X(E, ({ ctrl: x, item: H, key: Q }) => {
      Kc(x, f), rt(c, H, Q);
    })
  );
  const T = [];
  if (m && X(m, (x, H) => {
    x.expired ? (clearTimeout(x.expirationId), E.push(x)) : (H = T[H] = O.indexOf(x.key), ~H && (d[H] = x));
  }), X(h, (x, H) => {
    d[H] || (d[H] = {
      key: O[H],
      item: x,
      phase: "mount",
      ctrl: new G_()
    }, d[H].ctrl.item = x);
  }), T.length) {
    let x = -1;
    const { leave: H } = n ? n() : t;
    X(T, (Q, ue) => {
      const ie = m[ue];
      ~Q ? (x = d.indexOf(ie), d[x] = { ...ie, item: h[Q] }) : H && d.splice(++x, 0, ie);
    });
  }
  y.fun(o) && d.sort((x, H) => o(x.item, H.item));
  let v = -a;
  const R = N_(), N = zs(t), I = /* @__PURE__ */ new Map(), C = se(/* @__PURE__ */ new Map()), D = se(!1);
  X(d, (x, H) => {
    const Q = x.key, ue = x.phase, ie = n ? n() : t;
    let Se, Be;
    const Ae = rt(ie.delay || 0, Q);
    if (ue == "mount")
      Se = ie.enter, Be = "enter";
    else {
      const V = O.indexOf(Q) < 0;
      if (ue != "leave")
        if (V)
          Se = ie.leave, Be = "leave";
        else if (Se = ie.update)
          Be = "update";
        else
          return;
      else if (!V)
        Se = ie.enter, Be = "enter";
      else
        return;
    }
    if (Se = rt(Se, x.item, H), Se = y.obj(Se) ? qs(Se) : { to: Se }, !Se.config) {
      const V = l || N.config;
      Se.config = rt(V, x.item, H, Be);
    }
    v += a;
    const U = {
      ...N,
      // we need to add our props.delay value you here.
      delay: Ae + v,
      ref: _,
      immediate: ie.immediate,
      // This prevents implied resets.
      reset: !1,
      // Merge any phase-specific props.
      ...Se
    };
    if (Be == "enter" && y.und(U.from)) {
      const V = n ? n() : t, b = y.und(V.initial) || m ? V.from : V.initial;
      U.from = rt(b, x.item, H);
    }
    const { onResolve: L } = U;
    U.onResolve = (V) => {
      rt(L, V);
      const b = p.current, ne = b.find((w) => w.key === Q);
      if (ne && !(V.cancelled && ne.phase != "update") && ne.ctrl.idle) {
        const w = b.every((Te) => Te.ctrl.idle);
        if (ne.phase == "leave") {
          const Te = rt(s, ne.item);
          if (Te !== !1) {
            const ce = Te === !0 ? 0 : Te;
            if (ne.expired = !0, !w && ce > 0) {
              ce <= 2147483647 && (ne.expirationId = setTimeout(R, ce));
              return;
            }
          }
        }
        w && b.some((Te) => Te.expired) && (C.current.delete(ne), u && (D.current = !0), R());
      }
    };
    const M = el(x.ctrl, U);
    Be === "leave" && u ? C.current.set(x, { phase: Be, springs: M, payload: U }) : I.set(x, { phase: Be, springs: M, payload: U });
  });
  const G = ot(li), Z = Wc(G), re = G !== Z && FT(G);
  ft(() => {
    re && X(d, (x) => {
      x.ctrl.start({ default: G });
    });
  }, [G]), X(I, (x, H) => {
    if (C.current.size) {
      const Q = d.findIndex((ue) => ue.key === H.key);
      d.splice(Q, 1);
    }
  }), ft(
    () => {
      X(
        C.current.size ? C.current : I,
        ({ phase: x, payload: H }, Q) => {
          const { ctrl: ue } = Q;
          Q.phase = x, f?.add(ue), re && x == "enter" && ue.start({ default: G }), H && (y_(ue, H.ref), (ue.ref || f) && !D.current ? ue.update(H) : (ue.start(H), D.current && (D.current = !1)));
        }
      );
    },
    i ? void 0 : r
  );
  const J = (x) => /* @__PURE__ */ Gn.createElement(Gn.Fragment, null, d.map((H, Q) => {
    const { springs: ue } = I.get(H) || H.ctrl, ie = x({ ...ue }, H.item, H, Q);
    return ie && ie.type ? /* @__PURE__ */ Gn.createElement(
      ie.type,
      {
        ...ie.props,
        key: y.str(H.key) || y.num(H.key) ? H.key : H.ctrl.id,
        ref: ie.ref
      }
    ) : ie;
  }));
  return f ? [J, f] : J;
}
var wC = 1;
function PC(e, { key: t, keys: r = t }, n) {
  if (r === null) {
    const i = /* @__PURE__ */ new Set();
    return e.map((o) => {
      const a = n && n.find(
        (s) => s.item === o && s.phase !== "leave" && !i.has(s)
      );
      return a ? (i.add(a), a.key) : wC++;
    });
  }
  return y.und(r) ? e : y.fun(r) ? e.map(r) : nt(r);
}
var HC = ({
  container: e,
  ...t
} = {}) => {
  const [r, n] = _i(
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
    const i = rC(
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
      X(Object.values(r), (o) => o.stop()), i();
    };
  }, []), r;
}, MC = ({
  container: e,
  ...t
}) => {
  const [r, n] = _i(
    () => ({
      width: 0,
      height: 0,
      ...t
    }),
    []
  );
  return ft(() => {
    const i = MT(
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
      X(Object.values(r), (o) => o.stop()), i();
    };
  }, []), r;
}, kC = {
  any: 0,
  all: 1
};
function LC(e, t) {
  const [r, n] = dt(!1), i = se(), o = y.fun(e) && e, a = o ? o() : {}, { to: s = {}, from: u = {}, ...c } = a, _ = o ? t : e, [l, f] = _i(() => ({ from: u, ...c }), []);
  return ft(() => {
    const h = i.current, {
      root: d,
      once: p,
      amount: m = "any",
      ...O
    } = _ ?? {};
    if (!h || p && r || typeof IntersectionObserver > "u")
      return;
    const E = /* @__PURE__ */ new WeakMap(), T = () => (s && f.start(s), n(!0), p ? void 0 : () => {
      u && f.start(u), n(!1);
    }), v = (N) => {
      N.forEach((I) => {
        const C = E.get(I.target);
        if (I.isIntersecting !== !!C)
          if (I.isIntersecting) {
            const D = T();
            y.fun(D) ? E.set(I.target, D) : R.unobserve(I.target);
          } else
            C && (C(), E.delete(I.target));
      });
    }, R = new IntersectionObserver(v, {
      root: d && d.current || void 0,
      threshold: typeof m == "number" || Array.isArray(m) ? m : kC[m],
      ...O
    });
    return R.observe(h), () => R.unobserve(h);
  }, [_]), o ? [i, l] : [i, r];
}
function BC({ children: e, ...t }) {
  return e(_i(t));
}
function xC({
  items: e,
  children: t,
  ...r
}) {
  const n = ZT(e.length, r);
  return e.map((i, o) => {
    const a = t(i, o);
    return y.fun(a) ? a(n[o]) : a;
  });
}
function FC({
  items: e,
  children: t,
  ...r
}) {
  return eO(e, r)(t);
}
var Zs = class extends Js {
  constructor(e, t) {
    super(), this.source = e, this.idle = !0, this._active = /* @__PURE__ */ new Set(), this.calc = Zn(...t);
    const r = this._get(), n = Xc(r);
    A_(this, n.create(r));
  }
  advance(e) {
    const t = this._get(), r = this.get();
    nr(t, r) || (jt(this).setValue(t), this._onChange(t, this.idle)), !this.idle && fh(this._active) && Bu(this);
  }
  _get() {
    const e = y.arr(this.source) ? this.source.map(ut) : nt(ut(this.source));
    return this.calc(...e);
  }
  _start() {
    this.idle && !fh(this._active) && (this.idle = !1, X(Ks(this), (e) => {
      e.done = !1;
    }), At.skipAnimation ? (z.batchedUpdates(() => this.advance()), Bu(this)) : ko.start(this));
  }
  // Observe our sources only when we're observed.
  _attach() {
    let e = 1;
    X(nt(this.source), (t) => {
      Rt(t) && ci(t, this), qc(t) && (t.idle || this._active.add(t), e = Math.max(e, t.priority + 1));
    }), this.priority = e, this._start();
  }
  // Stop observing our sources once we have no observers.
  _detach() {
    X(nt(this.source), (e) => {
      Rt(e) && ao(e, this);
    }), this._active.clear(), Bu(this);
  }
  /** @internal */
  eventObserved(e) {
    e.type == "change" ? e.idle ? this.advance() : (this._active.add(e.parent), this._start()) : e.type == "idle" ? this._active.delete(e.parent) : e.type == "priority" && (this.priority = nt(this.source).reduce(
      (t, r) => Math.max(t, (qc(r) ? r.priority : 0) + 1),
      0
    ));
  }
};
function jC(e) {
  return e.idle !== !1;
}
function fh(e) {
  return !e.size || Array.from(e).every(jC);
}
function Bu(e) {
  e.idle || (e.idle = !0, X(Ks(e), (t) => {
    t.done = !0;
  }), oo(e, {
    type: "idle",
    parent: e
  }));
}
var VC = (e, ...t) => new Zs(e, t), WC = (e, ...t) => (HT(), new Zs(e, t));
At.assign({
  createStringInterpolator: wT,
  to: (e, t) => new Zs(e, t)
});
var XC = ko.advance, tO = /^--/;
function YC(e, t) {
  return t == null || typeof t == "boolean" || t === "" ? "" : typeof t == "number" && t !== 0 && !tO.test(e) && !(ji.hasOwnProperty(e) && ji[e]) ? t + "px" : ("" + t).trim();
}
var dh = {};
function KC(e, t) {
  if (!e.nodeType || !e.setAttribute)
    return !1;
  const r = e.nodeName === "filter" || e.parentNode && e.parentNode.nodeName === "filter", { style: n, children: i, scrollTop: o, scrollLeft: a, viewBox: s, ...u } = t, c = Object.values(u), _ = Object.keys(u).map(
    (l) => r || e.hasAttribute(l) ? l : dh[l] || (dh[l] = l.replace(
      /([A-Z])/g,
      // Attributes are written in dash case
      (f) => "-" + f.toLowerCase()
    ))
  );
  i !== void 0 && (e.textContent = i);
  for (const l in n)
    if (n.hasOwnProperty(l)) {
      const f = YC(l, n[l]);
      tO.test(l) ? e.style.setProperty(l, f) : e.style[l] = f;
    }
  _.forEach((l, f) => {
    e.setAttribute(l, c[f]);
  }), o !== void 0 && (e.scrollTop = o), a !== void 0 && (e.scrollLeft = a), s !== void 0 && e.setAttribute("viewBox", s);
}
var ji = {
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
}, $C = (e, t) => e + t.charAt(0).toUpperCase() + t.substring(1), zC = ["Webkit", "Ms", "Moz", "O"];
ji = Object.keys(ji).reduce((e, t) => (zC.forEach((r) => e[$C(r, t)] = e[t]), e), ji);
var qC = /^(matrix|translate|scale|rotate|skew)/, JC = /^(translate)/, QC = /^(rotate|skew)/, xu = (e, t) => y.num(e) && e !== 0 ? e + t : e, ya = (e, t) => y.arr(e) ? e.every((r) => ya(r, t)) : y.num(e) ? e === t : parseFloat(e) === t, ZC = class extends $s {
  constructor({ x: e, y: t, z: r, ...n }) {
    const i = [], o = [];
    (e || t || r) && (i.push([e || 0, t || 0, r || 0]), o.push((a) => [
      `translate3d(${a.map((s) => xu(s, "px")).join(",")})`,
      // prettier-ignore
      ya(a, 0)
    ])), Jt(n, (a, s) => {
      if (s === "transform")
        i.push([a || ""]), o.push((u) => [u, u === ""]);
      else if (qC.test(s)) {
        if (delete n[s], y.und(a))
          return;
        const u = JC.test(s) ? "px" : QC.test(s) ? "deg" : "";
        i.push(nt(a)), o.push(
          s === "rotate3d" ? ([c, _, l, f]) => [
            `rotate3d(${c},${_},${l},${xu(f, u)})`,
            ya(f, 0)
          ] : (c) => [
            `${s}(${c.map((_) => xu(_, u)).join(",")})`,
            ya(c, s.startsWith("scale") ? 1 : 0)
          ]
        );
      }
    }), i.length && (n.transform = new ew(i, o)), super(n);
  }
}, ew = class extends GT {
  constructor(e, t) {
    super(), this.inputs = e, this.transforms = t, this._value = null;
  }
  get() {
    return this._value || (this._value = this._get());
  }
  _get() {
    let e = "", t = !0;
    return X(this.inputs, (r, n) => {
      const i = ut(r[0]), [o, a] = this.transforms[n](
        y.arr(i) ? i : r.map(ut)
      );
      e += " " + o, t = t && a;
    }), t ? "none" : e;
  }
  // Start observing our inputs once we have an observer.
  observerAdded(e) {
    e == 1 && X(
      this.inputs,
      (t) => X(
        t,
        (r) => Rt(r) && ci(r, this)
      )
    );
  }
  // Stop observing our inputs once we have no observers.
  observerRemoved(e) {
    e == 0 && X(
      this.inputs,
      (t) => X(
        t,
        (r) => Rt(r) && ao(r, this)
      )
    );
  }
  eventObserved(e) {
    e.type == "change" && (this._value = null), oo(this, e);
  }
}, tw = [
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
  createStringInterpolator: wT,
  colors: yU
});
var rw = hC(tw, {
  applyAnimatedValues: KC,
  createAnimatedStyle: (e) => new ZC(e),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getComponentProps: ({ scrollTop: e, scrollLeft: t, ...r }) => r
}), hh = rw.animated;
const nw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Any: pC,
  BailSignal: zc,
  Controller: G_,
  FrameValue: Js,
  Globals: At,
  Interpolation: Zs,
  Spring: BC,
  SpringContext: li,
  SpringRef: Qs,
  SpringValue: D_,
  Trail: xC,
  Transition: FC,
  a: hh,
  animated: hh,
  config: jT,
  createInterpolator: Zn,
  easings: DT,
  inferTo: qs,
  interpolate: WC,
  to: VC,
  update: XC,
  useChain: RC,
  useInView: LC,
  useIsomorphicLayoutEffect: ft,
  useReducedMotion: uC,
  useResize: MC,
  useScroll: HC,
  useSpring: _i,
  useSpringRef: UC,
  useSpringValue: CC,
  useSprings: U_,
  useTrail: ZT,
  useTransition: eO
}, Symbol.toStringTag, { value: "Module" })), iw = () => {
  const { Spring: e } = Ss(), t = _i({
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
}, ow = we.div`
  background: ${({ theme: e }) => e.grey};
  border-bottom: 2px solid ${({ theme: e }) => e.lightGrey};
  height: ${Nt("100%", "42px")};
  box-sizing: border-box;
  ${_n("space-between", "center")}
  ${lS(23)}
`, aw = we.h2`
  color: ${({ theme: e }) => e.light};
`, sw = mr(() => {
  const e = fs(), t = e.getActiveTab(), { spring: r, animatedDiv: n } = iw(), i = $r(), { openFile: o, saveFile: a } = yE(), s = OU(), u = !e.isAllowedToExecute(), c = cn(), { isSignInOpened: _, ModalComponents: l } = c.state, f = () => {
    i.tabs.createTab();
  }, h = (d) => () => {
    c.update({
      isSignInOpened: d
    });
  };
  return /* @__PURE__ */ mt(ow, { as: n, style: r, children: [
    /* @__PURE__ */ K(
      dU,
      {
        runCode: s,
        createTab: f,
        openFile: o,
        saveFile: a
      }
    ),
    /* @__PURE__ */ mt(aw, { children: [
      t.label,
      " - CodeGear"
    ] }),
    /* @__PURE__ */ K(
      mU,
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
}), Vw = () => /* @__PURE__ */ K(Bl, { children: /* @__PURE__ */ K(sw, {}) });
class uw {
  constructor(t) {
    Xr(this), this.state = t, this.getters = t.getters, this.actions = t.actions, this.codeRunner = new TU(t);
  }
}
class cw {
  constructor() {
    this.activeKey = "", this.content = [], this.theme = "vs-dark", this.fontSize = 20, this.tabSize = 4, this.customBackground = "#3d3d3d", this.customColor = "#3d3d3d", this.isStorageDisabled = !1, this.executeMessages = [], Xr(this);
    const t = new fl(this.isStorageDisabled);
    this.storage = t, this.getters = new uU(this), this.actions = new sU(this), this.services = new uw(this), this.theme = t.get("EDITOR_THEME", "vs-dark"), this.fontSize = Number(
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
      n.lang = lU, n.content = cU;
    }
    this.content = [...this.content, ...r], this.activeKey = this.content[0].key;
  }
}
const fi = ss({}), Ww = ({ children: e }) => {
  const t = new cw();
  return /* @__PURE__ */ K(fi.Provider, { value: t, children: e });
}, rO = ss({}), Xw = ({ children: e, SignIn: t }) => {
  const r = yr(
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
  ), n = (u, c) => ({ ...u, ...c }), [i, o] = uO(n, r), a = (u) => {
    i[u] ? o({ [u]: !1 }) : o({ [u]: !0 });
  }, s = yr(
    () => ({
      state: i,
      update: o,
      toggle: a
    }),
    [i]
  );
  return /* @__PURE__ */ K(rO.Provider, { value: s, children: e });
}, lw = () => {
  const e = Hp();
  return ({ background: t, color: r }) => {
    e?.editor.defineTheme(gE, {
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
function _w(e, t) {
  for (var r in t)
    e[r] = t[r];
  return e;
}
function ph(e, t) {
  for (var r in e)
    if (r !== "__source" && !(r in t))
      return !0;
  for (var n in t)
    if (n !== "__source" && e[n] !== t[n])
      return !0;
  return !1;
}
function mh(e) {
  this.props = e;
}
(mh.prototype = new lr()).isPureReactComponent = !0, mh.prototype.shouldComponentUpdate = function(e, t) {
  return ph(this.props, e) || ph(this.state, t);
};
var Eh = Y.__b;
Y.__b = function(e) {
  e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), Eh && Eh(e);
};
var fw = Y.__e;
Y.__e = function(e, t, r, n) {
  if (e.then) {
    for (var i, o = t; o = o.__; )
      if ((i = o.__c) && i.__c)
        return t.__e == null && (t.__e = r.__e, t.__k = r.__k), i.__c(e, t);
  }
  fw(e, t, r, n);
};
var Th = Y.unmount;
function nO(e, t, r) {
  return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(n) {
    typeof n.__c == "function" && n.__c();
  }), e.__c.__H = null), (e = _w({}, e)).__c != null && (e.__c.__P === r && (e.__c.__P = t), e.__c = null), e.__k = e.__k && e.__k.map(function(n) {
    return nO(n, t, r);
  })), e;
}
function iO(e, t, r) {
  return e && (e.__v = null, e.__k = e.__k && e.__k.map(function(n) {
    return iO(n, t, r);
  }), e.__c && e.__c.__P === t && (e.__e && r.insertBefore(e.__e, e.__d), e.__c.__e = !0, e.__c.__P = r)), e;
}
function Fu() {
  this.__u = 0, this.t = null, this.__b = null;
}
function oO(e) {
  var t = e.__.__c;
  return t && t.__a && t.__a(e);
}
function ra() {
  this.u = null, this.o = null;
}
Y.unmount = function(e) {
  var t = e.__c;
  t && t.__R && t.__R(), t && e.__h === !0 && (e.type = null), Th && Th(e);
}, (Fu.prototype = new lr()).__c = function(e, t) {
  var r = t.__c, n = this;
  n.t == null && (n.t = []), n.t.push(r);
  var i = oO(n.__v), o = !1, a = function() {
    o || (o = !0, r.__R = null, i ? i(s) : s());
  };
  r.__R = a;
  var s = function() {
    if (!--n.__u) {
      if (n.state.__a) {
        var c = n.state.__a;
        n.__v.__k[0] = iO(c, c.__c.__P, c.__c.__O);
      }
      var _;
      for (n.setState({ __a: n.__b = null }); _ = n.t.pop(); )
        _.forceUpdate();
    }
  }, u = t.__h === !0;
  n.__u++ || u || n.setState({ __a: n.__b = n.__v.__k[0] }), e.then(a, a);
}, Fu.prototype.componentWillUnmount = function() {
  this.t = [];
}, Fu.prototype.render = function(e, t) {
  if (this.__b) {
    if (this.__v.__k) {
      var r = document.createElement("div"), n = this.__v.__k[0].__c;
      this.__v.__k[0] = nO(this.__b, r, n.__O = n.__P);
    }
    this.__b = null;
  }
  var i = t.__a && _d(Zi, null, e.fallback);
  return i && (i.__h = null), [_d(Zi, null, t.__a ? null : e.children), i];
};
var Oh = function(e, t, r) {
  if (++r[1] === r[0] && e.o.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.o.size))
    for (r = e.u; r; ) {
      for (; r.length > 3; )
        r.pop()();
      if (r[1] < r[0])
        break;
      e.u = r = r[2];
    }
};
(ra.prototype = new lr()).__a = function(e) {
  var t = this, r = oO(t.__v), n = t.o.get(e);
  return n[0]++, function(i) {
    var o = function() {
      t.props.revealOrder ? (n.push(i), Oh(t, e, n)) : i();
    };
    r ? r(o) : o();
  };
}, ra.prototype.render = function(e) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var t = Ya(e.children);
  e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
  for (var r = t.length; r--; )
    this.o.set(t[r], this.u = [1, 0, this.u]);
  return e.children;
}, ra.prototype.componentDidUpdate = ra.prototype.componentDidMount = function() {
  var e = this;
  this.o.forEach(function(t, r) {
    Oh(e, r, t);
  });
};
var dw = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, hw = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, pw = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, mw = /[A-Z0-9]/g, Ew = typeof document < "u", Tw = function(e) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e);
};
lr.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
  Object.defineProperty(lr.prototype, e, { configurable: !0, get: function() {
    return this["UNSAFE_" + e];
  }, set: function(t) {
    Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t });
  } });
});
var Rh = Y.event;
function Ow() {
}
function Rw() {
  return this.cancelBubble;
}
function vw() {
  return this.defaultPrevented;
}
Y.event = function(e) {
  return Rh && (e = Rh(e)), e.persist = Ow, e.isPropagationStopped = Rw, e.isDefaultPrevented = vw, e.nativeEvent = e;
};
var bw = { enumerable: !1, configurable: !0, get: function() {
  return this.class;
} }, vh = Y.vnode;
Y.vnode = function(e) {
  typeof e.type == "string" && function(t) {
    var r = t.props, n = t.type, i = {};
    for (var o in r) {
      var a = r[o];
      if (!(o === "value" && "defaultValue" in r && a == null || Ew && o === "children" && n === "noscript" || o === "class" || o === "className")) {
        var s = o.toLowerCase();
        o === "defaultValue" && "value" in r && r.value == null ? o = "value" : o === "download" && a === !0 ? a = "" : s === "ondoubleclick" ? o = "ondblclick" : s !== "onchange" || n !== "input" && n !== "textarea" || Tw(r.type) ? s === "onfocus" ? o = "onfocusin" : s === "onblur" ? o = "onfocusout" : pw.test(o) ? o = s : n.indexOf("-") === -1 && hw.test(o) ? o = o.replace(mw, "-$&").toLowerCase() : a === null && (a = void 0) : s = o = "oninput", s === "oninput" && i[o = s] && (o = "oninputCapture"), i[o] = a;
      }
    }
    n == "select" && i.multiple && Array.isArray(i.value) && (i.value = Ya(r.children).forEach(function(u) {
      u.props.selected = i.value.indexOf(u.props.value) != -1;
    })), n == "select" && i.defaultValue != null && (i.value = Ya(r.children).forEach(function(u) {
      u.props.selected = i.multiple ? i.defaultValue.indexOf(u.props.value) != -1 : i.defaultValue == u.props.value;
    })), r.class && !r.className ? (i.class = r.class, Object.defineProperty(i, "className", bw)) : (r.className && !r.class || r.class && r.className) && (i.class = i.className = r.className), t.props = i;
  }(e), e.$$typeof = dw, vh && vh(e);
};
var bh = Y.__r;
Y.__r = function(e) {
  bh && bh(e), e.__c;
};
var gh = Y.diffed;
Y.diffed = function(e) {
  gh && gh(e);
  var t = e.props, r = e.__e;
  r != null && e.type === "textarea" && "value" in t && t.value !== r.value && (r.value = t.value == null ? "" : t.value);
};
const Yw = cO(() => import("./editor-37497c2a.mjs").then((e) => e.e));
export {
  fi as $,
  Bl as A,
  $r as B,
  Lw as C,
  Ic as D,
  AE as E,
  Sb as F,
  jl as G,
  Vw as H,
  hU as I,
  Bw as J,
  gr as K,
  gE as L,
  Xw as M,
  Uw as N,
  Mw as O,
  ES as P,
  NS as Q,
  $A as R,
  bE as S,
  Fw as T,
  Hp as U,
  gS as V,
  kw as W,
  Yw as X,
  sU as Y,
  uU as Z,
  cw as _,
  ni as a,
  rO as a0,
  lw as b,
  Ss as c,
  cn as d,
  Ov as e,
  jw as f,
  Cw as g,
  vv as h,
  Gb as i,
  it as j,
  Ev as k,
  Mp as l,
  qA as m,
  $l as n,
  mr as o,
  Gw as p,
  _n as q,
  Ww as r,
  we as s,
  IS as t,
  zA as u,
  xw as v,
  Nt as w,
  ww as x,
  Pw as y,
  Hw as z
};
