import { jsxs as ve, jsx as U, Fragment as Pc } from "react/jsx-runtime";
import he, { useState as qn, useRef as le, useEffect as ye, createContext as ca, useMemo as Pi, useContext as yn, forwardRef as To, memo as Gr, useCallback as vr, useImperativeHandle as A_, createElement as wc, useReducer as Mc } from "react";
import { unstable_batchedUpdates as kc } from "react-dom";
import { Link as S_ } from "react-router-dom";
import { Tabs as G_, Select as v_ } from "antd";
function Y(e) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), t = 1; t < n; t++)
    r[t - 1] = arguments[t];
  throw new Error(typeof e == "number" ? "[MobX] minified error nr: " + e + (r.length ? " " + r.map(String).join(",") : "") + ". Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts" : "[MobX] " + e);
}
var xc = {};
function da() {
  return typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : xc;
}
var C_ = Object.assign, Eo = Object.getOwnPropertyDescriptor, cn = Object.defineProperty, pt = Object.prototype, wi = [];
Object.freeze(wi);
var D_ = {};
Object.freeze(D_);
var Lc = typeof Proxy < "u", Bc = /* @__PURE__ */ Object.toString();
function U_() {
  Lc || Y("Proxy not available");
}
function H_(e) {
  var n = !1;
  return function() {
    if (!n)
      return n = !0, e.apply(this, arguments);
  };
}
var Er = function() {
};
function rn(e) {
  return typeof e == "function";
}
function cr(e) {
  var n = typeof e;
  switch (n) {
    case "string":
    case "symbol":
    case "number":
      return !0;
  }
  return !1;
}
function Fo(e) {
  return e !== null && typeof e == "object";
}
function Dn(e) {
  if (!Fo(e))
    return !1;
  var n = Object.getPrototypeOf(e);
  if (n == null)
    return !0;
  var r = Object.hasOwnProperty.call(n, "constructor") && n.constructor;
  return typeof r == "function" && r.toString() === Bc;
}
function y_(e) {
  var n = e?.constructor;
  return n ? n.name === "GeneratorFunction" || n.displayName === "GeneratorFunction" : !1;
}
function ft(e, n, r) {
  cn(e, n, {
    enumerable: !1,
    writable: !0,
    configurable: !0,
    value: r
  });
}
function P_(e, n, r) {
  cn(e, n, {
    enumerable: !1,
    writable: !1,
    configurable: !0,
    value: r
  });
}
function Qn(e, n) {
  var r = "isMobX" + e;
  return n.prototype[r] = !0, function(t) {
    return Fo(t) && t[r] === !0;
  };
}
function kr(e) {
  return e instanceof Map;
}
function Tt(e) {
  return e instanceof Set;
}
var w_ = typeof Object.getOwnPropertySymbols < "u";
function jc(e) {
  var n = Object.keys(e);
  if (!w_)
    return n;
  var r = Object.getOwnPropertySymbols(e);
  return r.length ? [].concat(n, r.filter(function(t) {
    return pt.propertyIsEnumerable.call(e, t);
  })) : n;
}
var Cr = typeof Reflect < "u" && Reflect.ownKeys ? Reflect.ownKeys : w_ ? function(e) {
  return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
} : (
  /* istanbul ignore next */
  Object.getOwnPropertyNames
);
function M_(e) {
  return e === null ? null : typeof e == "object" ? "" + e : e;
}
function Sn(e, n) {
  return pt.hasOwnProperty.call(e, n);
}
var Fc = Object.getOwnPropertyDescriptors || function(n) {
  var r = {};
  return Cr(n).forEach(function(t) {
    r[t] = Eo(n, t);
  }), r;
};
function ts(e, n) {
  for (var r = 0; r < n.length; r++) {
    var t = n[r];
    t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(e, Xc(t.key), t);
  }
}
function ma(e, n, r) {
  return n && ts(e.prototype, n), r && ts(e, r), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function Dr() {
  return Dr = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var t in r)
        Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t]);
    }
    return e;
  }, Dr.apply(this, arguments);
}
function k_(e, n) {
  e.prototype = Object.create(n.prototype), e.prototype.constructor = e, Mi(e, n);
}
function Mi(e, n) {
  return Mi = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, o) {
    return t.__proto__ = o, t;
  }, Mi(e, n);
}
function pi(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Vc(e, n) {
  if (e) {
    if (typeof e == "string")
      return os(e, n);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return os(e, n);
  }
}
function os(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var r = 0, t = new Array(n); r < n; r++)
    t[r] = e[r];
  return t;
}
function br(e, n) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r)
    return (r = r.call(e)).next.bind(r);
  if (Array.isArray(e) || (r = Vc(e)) || n && e && typeof e.length == "number") {
    r && (e = r);
    var t = 0;
    return function() {
      return t >= e.length ? {
        done: !0
      } : {
        done: !1,
        value: e[t++]
      };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Wc(e, n) {
  if (typeof e != "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var t = r.call(e, n || "default");
    if (typeof t != "object")
      return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(e);
}
function Xc(e) {
  var n = Wc(e, "string");
  return typeof n == "symbol" ? n : String(n);
}
var un = /* @__PURE__ */ Symbol("mobx-stored-annotations");
function dn(e) {
  function n(r, t) {
    Et(r, t, e);
  }
  return Object.assign(n, e);
}
function Et(e, n, r) {
  Sn(e, un) || ft(e, un, Dr({}, e[un])), ed(r) || (e[un][n] = r);
}
function Yc(e) {
  return Sn(e, un) || ft(e, un, Dr({}, e[un])), e[un];
}
var M = /* @__PURE__ */ Symbol("mobx administration"), bt = /* @__PURE__ */ function() {
  function e(r) {
    r === void 0 && (r = "Atom"), this.name_ = void 0, this.isPendingUnobservation_ = !1, this.isBeingObserved_ = !1, this.observers_ = /* @__PURE__ */ new Set(), this.diffValue_ = 0, this.lastAccessedBy_ = 0, this.lowestObserverState_ = J.NOT_TRACKING_, this.onBOL = void 0, this.onBUOL = void 0, this.name_ = r;
  }
  var n = e.prototype;
  return n.onBO = function() {
    this.onBOL && this.onBOL.forEach(function(t) {
      return t();
    });
  }, n.onBUO = function() {
    this.onBUOL && this.onBUOL.forEach(function(t) {
      return t();
    });
  }, n.reportObserved = function() {
    return tu(this);
  }, n.reportChanged = function() {
    Be(), ou(this), N.stateVersion = N.stateVersion < Number.MAX_SAFE_INTEGER ? N.stateVersion + 1 : Number.MIN_SAFE_INTEGER, je();
  }, n.toString = function() {
    return this.name_;
  }, e;
}(), ha = /* @__PURE__ */ Qn("Atom", bt);
function x_(e, n, r) {
  n === void 0 && (n = Er), r === void 0 && (r = Er);
  var t = new bt(e);
  return n !== Er && nm(t, n), r !== Er && cu(t, r), t;
}
function Kc(e, n) {
  return e === n;
}
function $c(e, n) {
  return Ra(e, n);
}
function zc(e, n) {
  return Ra(e, n, 1);
}
function Jc(e, n) {
  return Object.is ? Object.is(e, n) : e === n ? e !== 0 || 1 / e === 1 / n : e !== e && n !== n;
}
var bo = {
  identity: Kc,
  structural: $c,
  default: Jc,
  shallow: zc
};
function Ur(e, n, r) {
  return Ea(e) ? e : Array.isArray(e) ? Ge.array(e, {
    name: r
  }) : Dn(e) ? Ge.object(e, void 0, {
    name: r
  }) : kr(e) ? Ge.map(e, {
    name: r
  }) : Tt(e) ? Ge.set(e, {
    name: r
  }) : typeof e == "function" && !Ta(e) && !Io(e) ? y_(e) ? it(e) : ot(r, e) : e;
}
function qc(e, n, r) {
  if (e == null || yr(e) || St(e) || rr(e) || dr(e))
    return e;
  if (Array.isArray(e))
    return Ge.array(e, {
      name: r,
      deep: !1
    });
  if (Dn(e))
    return Ge.object(e, void 0, {
      name: r,
      deep: !1
    });
  if (kr(e))
    return Ge.map(e, {
      name: r,
      deep: !1
    });
  if (Tt(e))
    return Ge.set(e, {
      name: r,
      deep: !1
    });
}
function Vo(e) {
  return e;
}
function Zc(e, n) {
  return Ra(e, n) ? n : e;
}
var Qc = "override";
function ed(e) {
  return e.annotationType_ === Qc;
}
function Ot(e, n) {
  return {
    annotationType_: e,
    options_: n,
    make_: nd,
    extend_: rd
  };
}
function nd(e, n, r, t) {
  var o;
  if ((o = this.options_) != null && o.bound)
    return this.extend_(e, n, r, !1) === null ? 0 : 1;
  if (t === e.target_)
    return this.extend_(e, n, r, !1) === null ? 0 : 2;
  if (Ta(r.value))
    return 1;
  var i = L_(e, this, n, r, !1);
  return cn(t, n, i), 2;
}
function rd(e, n, r, t) {
  var o = L_(e, this, n, r);
  return e.defineProperty_(n, o, t);
}
function td(e, n, r, t) {
  n.annotationType_, t.value;
}
function L_(e, n, r, t, o) {
  var i, a, s, _, u, c, l;
  o === void 0 && (o = N.safeDescriptors), td(e, n, r, t);
  var E = t.value;
  if ((i = n.options_) != null && i.bound) {
    var b;
    E = E.bind((b = e.proxy_) != null ? b : e.target_);
  }
  return {
    value: Hr(
      (a = (s = n.options_) == null ? void 0 : s.name) != null ? a : r.toString(),
      E,
      (_ = (u = n.options_) == null ? void 0 : u.autoAction) != null ? _ : !1,
      // https://github.com/mobxjs/mobx/discussions/3140
      (c = n.options_) != null && c.bound ? (l = e.proxy_) != null ? l : e.target_ : void 0
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
function B_(e, n) {
  return {
    annotationType_: e,
    options_: n,
    make_: od,
    extend_: id
  };
}
function od(e, n, r, t) {
  var o;
  if (t === e.target_)
    return this.extend_(e, n, r, !1) === null ? 0 : 2;
  if ((o = this.options_) != null && o.bound && (!Sn(e.target_, n) || !Io(e.target_[n])) && this.extend_(e, n, r, !1) === null)
    return 0;
  if (Io(r.value))
    return 1;
  var i = j_(e, this, n, r, !1, !1);
  return cn(t, n, i), 2;
}
function id(e, n, r, t) {
  var o, i = j_(e, this, n, r, (o = this.options_) == null ? void 0 : o.bound);
  return e.defineProperty_(n, i, t);
}
function ad(e, n, r, t) {
  n.annotationType_, t.value;
}
function j_(e, n, r, t, o, i) {
  i === void 0 && (i = N.safeDescriptors), ad(e, n, r, t);
  var a = t.value;
  if (Io(a) || (a = it(a)), o) {
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
function pa(e, n) {
  return {
    annotationType_: e,
    options_: n,
    make_: sd,
    extend_: _d
  };
}
function sd(e, n, r) {
  return this.extend_(e, n, r, !1) === null ? 0 : 1;
}
function _d(e, n, r, t) {
  return ud(e, this, n, r), e.defineComputedProperty_(n, Dr({}, this.options_, {
    get: r.get,
    set: r.set
  }), t);
}
function ud(e, n, r, t) {
  n.annotationType_, t.get;
}
function Wo(e, n) {
  return {
    annotationType_: e,
    options_: n,
    make_: ld,
    extend_: cd
  };
}
function ld(e, n, r) {
  return this.extend_(e, n, r, !1) === null ? 0 : 1;
}
function cd(e, n, r, t) {
  var o, i;
  return dd(e, this), e.defineObservableProperty_(n, r.value, (o = (i = this.options_) == null ? void 0 : i.enhancer) != null ? o : Ur, t);
}
function dd(e, n, r, t) {
  n.annotationType_;
}
var md = "true", hd = /* @__PURE__ */ F_();
function F_(e) {
  return {
    annotationType_: md,
    options_: e,
    make_: pd,
    extend_: fd
  };
}
function pd(e, n, r, t) {
  var o, i;
  if (r.get)
    return Xo.make_(e, n, r, t);
  if (r.set) {
    var a = Hr(n.toString(), r.set);
    return t === e.target_ ? e.defineProperty_(n, {
      configurable: N.safeDescriptors ? e.isPlainObject_ : !0,
      set: a
    }) === null ? 0 : 2 : (cn(t, n, {
      configurable: !0,
      set: a
    }), 2);
  }
  if (t !== e.target_ && typeof r.value == "function") {
    var s;
    if (y_(r.value)) {
      var _, u = (_ = this.options_) != null && _.autoBind ? it.bound : it;
      return u.make_(e, n, r, t);
    }
    var c = (s = this.options_) != null && s.autoBind ? ot.bound : ot;
    return c.make_(e, n, r, t);
  }
  var l = ((o = this.options_) == null ? void 0 : o.deep) === !1 ? Ge.ref : Ge;
  if (typeof r.value == "function" && (i = this.options_) != null && i.autoBind) {
    var E;
    r.value = r.value.bind((E = e.proxy_) != null ? E : e.target_);
  }
  return l.make_(e, n, r, t);
}
function fd(e, n, r, t) {
  var o, i;
  if (r.get)
    return Xo.extend_(e, n, r, t);
  if (r.set)
    return e.defineProperty_(n, {
      configurable: N.safeDescriptors ? e.isPlainObject_ : !0,
      set: Hr(n.toString(), r.set)
    }, t);
  if (typeof r.value == "function" && (o = this.options_) != null && o.autoBind) {
    var a;
    r.value = r.value.bind((a = e.proxy_) != null ? a : e.target_);
  }
  var s = ((i = this.options_) == null ? void 0 : i.deep) === !1 ? Ge.ref : Ge;
  return s.extend_(e, n, r, t);
}
var Td = "observable", Ed = "observable.ref", bd = "observable.shallow", Od = "observable.struct", V_ = {
  deep: !0,
  name: void 0,
  defaultDecorator: void 0,
  proxy: !0
};
Object.freeze(V_);
function jt(e) {
  return e || V_;
}
var W_ = /* @__PURE__ */ Wo(Td), Rd = /* @__PURE__ */ Wo(Ed, {
  enhancer: Vo
}), Nd = /* @__PURE__ */ Wo(bd, {
  enhancer: qc
}), Id = /* @__PURE__ */ Wo(Od, {
  enhancer: Zc
}), X_ = /* @__PURE__ */ dn(W_);
function Ft(e) {
  return e.deep === !0 ? Ur : e.deep === !1 ? Vo : Ad(e.defaultDecorator);
}
function gd(e) {
  var n;
  return e ? (n = e.defaultDecorator) != null ? n : F_(e) : void 0;
}
function Ad(e) {
  var n, r;
  return e && (n = (r = e.options_) == null ? void 0 : r.enhancer) != null ? n : Ur;
}
function Y_(e, n, r) {
  if (cr(n)) {
    Et(e, n, W_);
    return;
  }
  return Ea(e) ? e : Dn(e) ? Ge.object(e, n, r) : Array.isArray(e) ? Ge.array(e, n) : kr(e) ? Ge.map(e, n) : Tt(e) ? Ge.set(e, n) : typeof e == "object" && e !== null ? e : Ge.box(e, n);
}
C_(Y_, X_);
var Sd = {
  box: function(n, r) {
    var t = jt(r);
    return new _r(n, Ft(t), t.name, !0, t.equals);
  },
  array: function(n, r) {
    var t = jt(r);
    return (N.useProxies === !1 || t.proxy === !1 ? Gm : Em)(n, Ft(t), t.name);
  },
  map: function(n, r) {
    var t = jt(r);
    return new Ou(n, Ft(t), t.name);
  },
  set: function(n, r) {
    var t = jt(r);
    return new Iu(n, Ft(t), t.name);
  },
  object: function(n, r, t) {
    return mu(N.useProxies === !1 || t?.proxy === !1 ? Gt({}, t) : hm({}, t), n, r);
  },
  ref: /* @__PURE__ */ dn(Rd),
  shallow: /* @__PURE__ */ dn(Nd),
  deep: X_,
  struct: /* @__PURE__ */ dn(Id)
}, Ge = /* @__PURE__ */ C_(Y_, Sd), K_ = "computed", Gd = "computed.struct", $_ = /* @__PURE__ */ pa(K_), vd = /* @__PURE__ */ pa(Gd, {
  equals: bo.structural
}), Xo = function(n, r) {
  if (cr(r))
    return Et(n, r, $_);
  if (Dn(n))
    return dn(pa(K_, n));
  var t = Dn(r) ? r : {};
  return t.get = n, t.name || (t.name = n.name || ""), new rt(t);
};
Object.assign(Xo, $_);
Xo.struct = /* @__PURE__ */ dn(vd);
var is, as, Oo = 0, Cd = 1, Dd = (is = (as = /* @__PURE__ */ Eo(function() {
}, "name")) == null ? void 0 : as.configurable) != null ? is : !1, ss = {
  value: "action",
  configurable: !0,
  writable: !1,
  enumerable: !1
};
function Hr(e, n, r, t) {
  r === void 0 && (r = !1);
  function o() {
    return Ud(e, r, n, t || this, arguments);
  }
  return o.isMobxAction = !0, Dd && (ss.value = e, cn(o, "name", ss)), o;
}
function Ud(e, n, r, t, o) {
  var i = Hd(e, n);
  try {
    return r.apply(t, o);
  } catch (a) {
    throw i.error_ = a, a;
  } finally {
    yd(i);
  }
}
function Hd(e, n, r, t) {
  var o = !1, i = 0, a = N.trackingDerivation, s = !n || !a;
  Be();
  var _ = N.allowStateChanges;
  s && (xr(), _ = Rt(!0));
  var u = fa(!0), c = {
    runAsAction_: s,
    prevDerivation_: a,
    prevAllowStateChanges_: _,
    prevAllowStateReads_: u,
    notifySpy_: o,
    startTime_: i,
    actionId_: Cd++,
    parentActionId_: Oo
  };
  return Oo = c.actionId_, c;
}
function yd(e) {
  Oo !== e.actionId_ && Y(30), Oo = e.parentActionId_, e.error_ !== void 0 && (N.suppressReactionErrors = !0), Nt(e.prevAllowStateChanges_), Jr(e.prevAllowStateReads_), je(), e.runAsAction_ && Yn(e.prevDerivation_), N.suppressReactionErrors = !1;
}
function Pd(e, n) {
  var r = Rt(e);
  try {
    return n();
  } finally {
    Nt(r);
  }
}
function Rt(e) {
  var n = N.allowStateChanges;
  return N.allowStateChanges = e, n;
}
function Nt(e) {
  N.allowStateChanges = e;
}
var z_;
z_ = Symbol.toPrimitive;
var _r = /* @__PURE__ */ function(e) {
  k_(n, e);
  function n(t, o, i, a, s) {
    var _;
    return i === void 0 && (i = "ObservableValue"), s === void 0 && (s = bo.default), _ = e.call(this, i) || this, _.enhancer = void 0, _.name_ = void 0, _.equals = void 0, _.hasUnreportedChange_ = !1, _.interceptors_ = void 0, _.changeListeners_ = void 0, _.value_ = void 0, _.dehancer = void 0, _.enhancer = o, _.name_ = i, _.equals = s, _.value_ = o(t, void 0, i), _;
  }
  var r = n.prototype;
  return r.dehanceValue = function(o) {
    return this.dehancer !== void 0 ? this.dehancer(o) : o;
  }, r.set = function(o) {
    this.value_, o = this.prepareNewValue_(o), o !== N.UNCHANGED && this.setNewValue_(o);
  }, r.prepareNewValue_ = function(o) {
    if (Ke(this)) {
      var i = $e(this, {
        object: this,
        type: mn,
        newValue: o
      });
      if (!i)
        return N.UNCHANGED;
      o = i.newValue;
    }
    return o = this.enhancer(o, this.value_, this.name_), this.equals(this.value_, o) ? N.UNCHANGED : o;
  }, r.setNewValue_ = function(o) {
    var i = this.value_;
    this.value_ = o, this.reportChanged(), en(this) && nn(this, {
      type: mn,
      object: this,
      newValue: o,
      oldValue: i
    });
  }, r.get = function() {
    return this.reportObserved(), this.dehanceValue(this.value_);
  }, r.intercept_ = function(o) {
    return gt(this, o);
  }, r.observe_ = function(o, i) {
    return i && o({
      observableKind: "value",
      debugObjectName: this.name_,
      object: this,
      type: mn,
      newValue: this.value_,
      oldValue: void 0
    }), At(this, o);
  }, r.raw = function() {
    return this.value_;
  }, r.toJSON = function() {
    return this.get();
  }, r.toString = function() {
    return this.name_ + "[" + this.value_ + "]";
  }, r.valueOf = function() {
    return M_(this.get());
  }, r[z_] = function() {
    return this.valueOf();
  }, n;
}(bt), wd = /* @__PURE__ */ Qn("ObservableValue", _r), J_;
J_ = Symbol.toPrimitive;
var rt = /* @__PURE__ */ function() {
  function e(r) {
    this.dependenciesState_ = J.NOT_TRACKING_, this.observing_ = [], this.newObserving_ = null, this.isBeingObserved_ = !1, this.isPendingUnobservation_ = !1, this.observers_ = /* @__PURE__ */ new Set(), this.diffValue_ = 0, this.runId_ = 0, this.lastAccessedBy_ = 0, this.lowestObserverState_ = J.UP_TO_DATE_, this.unboundDepsCount_ = 0, this.value_ = new Ro(null), this.name_ = void 0, this.triggeredBy_ = void 0, this.isComputing_ = !1, this.isRunningSetter_ = !1, this.derivation = void 0, this.setter_ = void 0, this.isTracing_ = ur.NONE, this.scope_ = void 0, this.equals_ = void 0, this.requiresReaction_ = void 0, this.keepAlive_ = void 0, this.onBOL = void 0, this.onBUOL = void 0, r.get || Y(31), this.derivation = r.get, this.name_ = r.name || "ComputedValue", r.set && (this.setter_ = Hr("ComputedValue-setter", r.set)), this.equals_ = r.equals || (r.compareStructural || r.struct ? bo.structural : bo.default), this.scope_ = r.context, this.requiresReaction_ = r.requiresReaction, this.keepAlive_ = !!r.keepAlive;
  }
  var n = e.prototype;
  return n.onBecomeStale_ = function() {
    Bd(this);
  }, n.onBO = function() {
    this.onBOL && this.onBOL.forEach(function(t) {
      return t();
    });
  }, n.onBUO = function() {
    this.onBUOL && this.onBUOL.forEach(function(t) {
      return t();
    });
  }, n.get = function() {
    if (this.isComputing_ && Y(32, this.name_, this.derivation), N.inBatch === 0 && // !globalState.trackingDerivatpion &&
    this.observers_.size === 0 && !this.keepAlive_)
      ki(this) && (this.warnAboutUntrackedRead_(), Be(), this.value_ = this.computeValue_(!1), je());
    else if (tu(this), ki(this)) {
      var t = N.trackingContext;
      this.keepAlive_ && !t && (N.trackingContext = this), this.trackAndCompute() && Ld(this), N.trackingContext = t;
    }
    var o = this.value_;
    if (eo(o))
      throw o.cause;
    return o;
  }, n.set = function(t) {
    if (this.setter_) {
      this.isRunningSetter_ && Y(33, this.name_), this.isRunningSetter_ = !0;
      try {
        this.setter_.call(this.scope_, t);
      } finally {
        this.isRunningSetter_ = !1;
      }
    } else
      Y(34, this.name_);
  }, n.trackAndCompute = function() {
    var t = this.value_, o = (
      /* see #1208 */
      this.dependenciesState_ === J.NOT_TRACKING_
    ), i = this.computeValue_(!0), a = o || eo(t) || eo(i) || !this.equals_(t, i);
    return a && (this.value_ = i), a;
  }, n.computeValue_ = function(t) {
    this.isComputing_ = !0;
    var o = Rt(!1), i;
    if (t)
      i = q_(this, this.derivation, this.scope_);
    else if (N.disableErrorBoundaries === !0)
      i = this.derivation.call(this.scope_);
    else
      try {
        i = this.derivation.call(this.scope_);
      } catch (a) {
        i = new Ro(a);
      }
    return Nt(o), this.isComputing_ = !1, i;
  }, n.suspend_ = function() {
    this.keepAlive_ || (xi(this), this.value_ = void 0);
  }, n.observe_ = function(t, o) {
    var i = this, a = !0, s = void 0;
    return Jd(function() {
      var _ = i.get();
      if (!a || o) {
        var u = xr();
        t({
          observableKind: "computed",
          debugObjectName: i.name_,
          type: mn,
          object: i,
          newValue: _,
          oldValue: s
        }), Yn(u);
      }
      a = !1, s = _;
    });
  }, n.warnAboutUntrackedRead_ = function() {
  }, n.toString = function() {
    return this.name_ + "[" + this.derivation.toString() + "]";
  }, n.valueOf = function() {
    return M_(this.get());
  }, n[J_] = function() {
    return this.valueOf();
  }, e;
}(), It = /* @__PURE__ */ Qn("ComputedValue", rt), J;
(function(e) {
  e[e.NOT_TRACKING_ = -1] = "NOT_TRACKING_", e[e.UP_TO_DATE_ = 0] = "UP_TO_DATE_", e[e.POSSIBLY_STALE_ = 1] = "POSSIBLY_STALE_", e[e.STALE_ = 2] = "STALE_";
})(J || (J = {}));
var ur;
(function(e) {
  e[e.NONE = 0] = "NONE", e[e.LOG = 1] = "LOG", e[e.BREAK = 2] = "BREAK";
})(ur || (ur = {}));
var Ro = function(n) {
  this.cause = void 0, this.cause = n;
};
function eo(e) {
  return e instanceof Ro;
}
function ki(e) {
  switch (e.dependenciesState_) {
    case J.UP_TO_DATE_:
      return !1;
    case J.NOT_TRACKING_:
    case J.STALE_:
      return !0;
    case J.POSSIBLY_STALE_: {
      for (var n = fa(!0), r = xr(), t = e.observing_, o = t.length, i = 0; i < o; i++) {
        var a = t[i];
        if (It(a)) {
          if (N.disableErrorBoundaries)
            a.get();
          else
            try {
              a.get();
            } catch {
              return Yn(r), Jr(n), !0;
            }
          if (e.dependenciesState_ === J.STALE_)
            return Yn(r), Jr(n), !0;
        }
      }
      return Q_(e), Yn(r), Jr(n), !1;
    }
  }
}
function q_(e, n, r) {
  var t = fa(!0);
  Q_(e), e.newObserving_ = new Array(e.observing_.length + 100), e.unboundDepsCount_ = 0, e.runId_ = ++N.runId;
  var o = N.trackingDerivation;
  N.trackingDerivation = e, N.inBatch++;
  var i;
  if (N.disableErrorBoundaries === !0)
    i = n.call(r);
  else
    try {
      i = n.call(r);
    } catch (a) {
      i = new Ro(a);
    }
  return N.inBatch--, N.trackingDerivation = o, Md(e), Jr(t), i;
}
function Md(e) {
  for (var n = e.observing_, r = e.observing_ = e.newObserving_, t = J.UP_TO_DATE_, o = 0, i = e.unboundDepsCount_, a = 0; a < i; a++) {
    var s = r[a];
    s.diffValue_ === 0 && (s.diffValue_ = 1, o !== a && (r[o] = s), o++), s.dependenciesState_ > t && (t = s.dependenciesState_);
  }
  for (r.length = o, e.newObserving_ = null, i = n.length; i--; ) {
    var _ = n[i];
    _.diffValue_ === 0 && nu(_, e), _.diffValue_ = 0;
  }
  for (; o--; ) {
    var u = r[o];
    u.diffValue_ === 1 && (u.diffValue_ = 0, xd(u, e));
  }
  t !== J.UP_TO_DATE_ && (e.dependenciesState_ = t, e.onBecomeStale_());
}
function xi(e) {
  var n = e.observing_;
  e.observing_ = [];
  for (var r = n.length; r--; )
    nu(n[r], e);
  e.dependenciesState_ = J.NOT_TRACKING_;
}
function Z_(e) {
  var n = xr();
  try {
    return e();
  } finally {
    Yn(n);
  }
}
function xr() {
  var e = N.trackingDerivation;
  return N.trackingDerivation = null, e;
}
function Yn(e) {
  N.trackingDerivation = e;
}
function fa(e) {
  var n = N.allowStateReads;
  return N.allowStateReads = e, n;
}
function Jr(e) {
  N.allowStateReads = e;
}
function Q_(e) {
  if (e.dependenciesState_ !== J.UP_TO_DATE_) {
    e.dependenciesState_ = J.UP_TO_DATE_;
    for (var n = e.observing_, r = n.length; r--; )
      n[r].lowestObserverState_ = J.UP_TO_DATE_;
  }
}
var no = function() {
  this.version = 6, this.UNCHANGED = {}, this.trackingDerivation = null, this.trackingContext = null, this.runId = 0, this.mobxGuid = 0, this.inBatch = 0, this.pendingUnobservations = [], this.pendingReactions = [], this.isRunningReactions = !1, this.allowStateChanges = !1, this.allowStateReads = !0, this.enforceActions = !0, this.spyListeners = [], this.globalReactionErrorHandlers = [], this.computedRequiresReaction = !1, this.reactionRequiresObservable = !1, this.observableRequiresReaction = !1, this.disableErrorBoundaries = !1, this.suppressReactionErrors = !1, this.useProxies = !0, this.verifyProxies = !1, this.safeDescriptors = !0, this.stateVersion = Number.MIN_SAFE_INTEGER;
}, ro = !0, eu = !1, N = /* @__PURE__ */ function() {
  var e = /* @__PURE__ */ da();
  return e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (ro = !1), e.__mobxGlobals && e.__mobxGlobals.version !== new no().version && (ro = !1), ro ? e.__mobxGlobals ? (e.__mobxInstanceCount += 1, e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}), e.__mobxGlobals) : (e.__mobxInstanceCount = 1, e.__mobxGlobals = /* @__PURE__ */ new no()) : (setTimeout(function() {
    eu || Y(35);
  }, 1), new no());
}();
function kd() {
  if ((N.pendingReactions.length || N.inBatch || N.isRunningReactions) && Y(36), eu = !0, ro) {
    var e = da();
    --e.__mobxInstanceCount === 0 && (e.__mobxGlobals = void 0), N = new no();
  }
}
function xd(e, n) {
  e.observers_.add(n), e.lowestObserverState_ > n.dependenciesState_ && (e.lowestObserverState_ = n.dependenciesState_);
}
function nu(e, n) {
  e.observers_.delete(n), e.observers_.size === 0 && ru(e);
}
function ru(e) {
  e.isPendingUnobservation_ === !1 && (e.isPendingUnobservation_ = !0, N.pendingUnobservations.push(e));
}
function Be() {
  N.inBatch++;
}
function je() {
  if (--N.inBatch === 0) {
    iu();
    for (var e = N.pendingUnobservations, n = 0; n < e.length; n++) {
      var r = e[n];
      r.isPendingUnobservation_ = !1, r.observers_.size === 0 && (r.isBeingObserved_ && (r.isBeingObserved_ = !1, r.onBUO()), r instanceof rt && r.suspend_());
    }
    N.pendingUnobservations = [];
  }
}
function tu(e) {
  var n = N.trackingDerivation;
  return n !== null ? (n.runId_ !== e.lastAccessedBy_ && (e.lastAccessedBy_ = n.runId_, n.newObserving_[n.unboundDepsCount_++] = e, !e.isBeingObserved_ && N.trackingContext && (e.isBeingObserved_ = !0, e.onBO())), e.isBeingObserved_) : (e.observers_.size === 0 && N.inBatch > 0 && ru(e), !1);
}
function ou(e) {
  e.lowestObserverState_ !== J.STALE_ && (e.lowestObserverState_ = J.STALE_, e.observers_.forEach(function(n) {
    n.dependenciesState_ === J.UP_TO_DATE_ && n.onBecomeStale_(), n.dependenciesState_ = J.STALE_;
  }));
}
function Ld(e) {
  e.lowestObserverState_ !== J.STALE_ && (e.lowestObserverState_ = J.STALE_, e.observers_.forEach(function(n) {
    n.dependenciesState_ === J.POSSIBLY_STALE_ ? n.dependenciesState_ = J.STALE_ : n.dependenciesState_ === J.UP_TO_DATE_ && (e.lowestObserverState_ = J.UP_TO_DATE_);
  }));
}
function Bd(e) {
  e.lowestObserverState_ === J.UP_TO_DATE_ && (e.lowestObserverState_ = J.POSSIBLY_STALE_, e.observers_.forEach(function(n) {
    n.dependenciesState_ === J.UP_TO_DATE_ && (n.dependenciesState_ = J.POSSIBLY_STALE_, n.onBecomeStale_());
  }));
}
var tt = /* @__PURE__ */ function() {
  function e(r, t, o, i) {
    r === void 0 && (r = "Reaction"), this.name_ = void 0, this.onInvalidate_ = void 0, this.errorHandler_ = void 0, this.requiresObservable_ = void 0, this.observing_ = [], this.newObserving_ = [], this.dependenciesState_ = J.NOT_TRACKING_, this.diffValue_ = 0, this.runId_ = 0, this.unboundDepsCount_ = 0, this.isDisposed_ = !1, this.isScheduled_ = !1, this.isTrackPending_ = !1, this.isRunning_ = !1, this.isTracing_ = ur.NONE, this.name_ = r, this.onInvalidate_ = t, this.errorHandler_ = o, this.requiresObservable_ = i;
  }
  var n = e.prototype;
  return n.onBecomeStale_ = function() {
    this.schedule_();
  }, n.schedule_ = function() {
    this.isScheduled_ || (this.isScheduled_ = !0, N.pendingReactions.push(this), iu());
  }, n.isScheduled = function() {
    return this.isScheduled_;
  }, n.runReaction_ = function() {
    if (!this.isDisposed_) {
      Be(), this.isScheduled_ = !1;
      var t = N.trackingContext;
      if (N.trackingContext = this, ki(this)) {
        this.isTrackPending_ = !0;
        try {
          this.onInvalidate_();
        } catch (o) {
          this.reportExceptionInDerivation_(o);
        }
      }
      N.trackingContext = t, je();
    }
  }, n.track = function(t) {
    if (!this.isDisposed_) {
      Be(), this.isRunning_ = !0;
      var o = N.trackingContext;
      N.trackingContext = this;
      var i = q_(this, t, void 0);
      N.trackingContext = o, this.isRunning_ = !1, this.isTrackPending_ = !1, this.isDisposed_ && xi(this), eo(i) && this.reportExceptionInDerivation_(i.cause), je();
    }
  }, n.reportExceptionInDerivation_ = function(t) {
    var o = this;
    if (this.errorHandler_) {
      this.errorHandler_(t, this);
      return;
    }
    if (N.disableErrorBoundaries)
      throw t;
    var i = "[mobx] uncaught error in '" + this + "'";
    N.suppressReactionErrors || console.error(i, t), N.globalReactionErrorHandlers.forEach(function(a) {
      return a(t, o);
    });
  }, n.dispose = function() {
    this.isDisposed_ || (this.isDisposed_ = !0, this.isRunning_ || (Be(), xi(this), je()));
  }, n.getDisposer_ = function() {
    var t = this.dispose.bind(this);
    return t[M] = this, t;
  }, n.toString = function() {
    return "Reaction[" + this.name_ + "]";
  }, n.trace = function(t) {
    t === void 0 && (t = !1), cm(this, t);
  }, e;
}(), jd = 100, Li = function(n) {
  return n();
};
function iu() {
  N.inBatch > 0 || N.isRunningReactions || Li(Fd);
}
function Fd() {
  N.isRunningReactions = !0;
  for (var e = N.pendingReactions, n = 0; e.length > 0; ) {
    ++n === jd && (console.error("[mobx] cycle in reaction: " + e[0]), e.splice(0));
    for (var r = e.splice(0), t = 0, o = r.length; t < o; t++)
      r[t].runReaction_();
  }
  N.isRunningReactions = !1;
}
var No = /* @__PURE__ */ Qn("Reaction", tt);
function Vd(e) {
  var n = Li;
  Li = function(t) {
    return e(function() {
      return n(t);
    });
  };
}
function qr() {
  return !1;
}
function Wd(e) {
  return console.warn("[mobx.spy] Is a no-op in production builds"), function() {
  };
}
var au = "action", Xd = "action.bound", su = "autoAction", Yd = "autoAction.bound", Kd = "<unnamed action>", _u = /* @__PURE__ */ Ot(au), $d = /* @__PURE__ */ Ot(Xd, {
  bound: !0
}), uu = /* @__PURE__ */ Ot(su, {
  autoAction: !0
}), zd = /* @__PURE__ */ Ot(Yd, {
  autoAction: !0,
  bound: !0
});
function lu(e) {
  var n = function(t, o) {
    if (rn(t))
      return Hr(t.name || Kd, t, e);
    if (rn(o))
      return Hr(t, o, e);
    if (cr(o))
      return Et(t, o, e ? uu : _u);
    if (cr(t))
      return dn(Ot(e ? su : au, {
        name: t,
        autoAction: e
      }));
  };
  return n;
}
var Or = /* @__PURE__ */ lu(!1);
Object.assign(Or, _u);
var ot = /* @__PURE__ */ lu(!0);
Object.assign(ot, uu);
Or.bound = /* @__PURE__ */ dn($d);
ot.bound = /* @__PURE__ */ dn(zd);
function Ta(e) {
  return rn(e) && e.isMobxAction === !0;
}
function Jd(e, n) {
  var r, t;
  n === void 0 && (n = D_);
  var o = (r = (t = n) == null ? void 0 : t.name) != null ? r : "Autorun", i = !n.scheduler && !n.delay, a;
  if (i)
    a = new tt(o, function() {
      this.track(u);
    }, n.onError, n.requiresObservable);
  else {
    var s = Zd(n), _ = !1;
    a = new tt(o, function() {
      _ || (_ = !0, s(function() {
        _ = !1, a.isDisposed_ || a.track(u);
      }));
    }, n.onError, n.requiresObservable);
  }
  function u() {
    e(a);
  }
  return a.schedule_(), a.getDisposer_();
}
var qd = function(n) {
  return n();
};
function Zd(e) {
  return e.scheduler ? e.scheduler : e.delay ? function(n) {
    return setTimeout(n, e.delay);
  } : qd;
}
var Qd = "onBO", em = "onBUO";
function nm(e, n, r) {
  return du(Qd, e, n, r);
}
function cu(e, n, r) {
  return du(em, e, n, r);
}
function du(e, n, r, t) {
  var o = typeof t == "function" ? Zn(n, r) : Zn(n), i = rn(t) ? t : r, a = e + "L";
  return o[a] ? o[a].add(i) : o[a] = /* @__PURE__ */ new Set([i]), function() {
    var s = o[a];
    s && (s.delete(i), s.size === 0 && delete o[a]);
  };
}
var rm = "never", Vt = "always", tm = "observed";
function om(e) {
  e.isolateGlobalState === !0 && kd();
  var n = e.useProxies, r = e.enforceActions;
  if (n !== void 0 && (N.useProxies = n === Vt ? !0 : n === rm ? !1 : typeof Proxy < "u"), n === "ifavailable" && (N.verifyProxies = !0), r !== void 0) {
    var t = r === Vt ? Vt : r === tm;
    N.enforceActions = t, N.allowStateChanges = !(t === !0 || t === Vt);
  }
  ["computedRequiresReaction", "reactionRequiresObservable", "observableRequiresReaction", "disableErrorBoundaries", "safeDescriptors"].forEach(function(o) {
    o in e && (N[o] = !!e[o]);
  }), N.allowStateReads = !N.observableRequiresReaction, e.reactionScheduler && Vd(e.reactionScheduler);
}
function mu(e, n, r, t) {
  var o = Fc(n), i = Gt(e, t)[M];
  Be();
  try {
    Cr(o).forEach(function(a) {
      i.extend_(
        a,
        o[a],
        // must pass "undefined" for { key: undefined }
        r && a in r ? r[a] : !0
      );
    });
  } finally {
    je();
  }
  return e;
}
function im(e, n) {
  return hu(Zn(e, n));
}
function hu(e) {
  var n = {
    name: e.name_
  };
  return e.observing_ && e.observing_.length > 0 && (n.dependencies = am(e.observing_).map(hu)), n;
}
function am(e) {
  return Array.from(new Set(e));
}
var sm = 0;
function pu() {
  this.message = "FLOW_CANCELLED";
}
pu.prototype = /* @__PURE__ */ Object.create(Error.prototype);
var _s = /* @__PURE__ */ B_("flow"), _m = /* @__PURE__ */ B_("flow.bound", {
  bound: !0
}), it = /* @__PURE__ */ Object.assign(function(n, r) {
  if (cr(r))
    return Et(n, r, _s);
  var t = n, o = t.name || "<unnamed flow>", i = function() {
    var s = this, _ = arguments, u = ++sm, c = Or(o + " - runid: " + u + " - init", t).apply(s, _), l, E = void 0, b = new Promise(function(d, m) {
      var p = 0;
      l = m;
      function I(H) {
        E = void 0;
        var f;
        try {
          f = Or(o + " - runid: " + u + " - yield " + p++, c.next).call(c, H);
        } catch (w) {
          return m(w);
        }
        C(f);
      }
      function R(H) {
        E = void 0;
        var f;
        try {
          f = Or(o + " - runid: " + u + " - yield " + p++, c.throw).call(c, H);
        } catch (w) {
          return m(w);
        }
        C(f);
      }
      function C(H) {
        if (rn(H?.then)) {
          H.then(C, m);
          return;
        }
        return H.done ? d(H.value) : (E = Promise.resolve(H.value), E.then(I, R));
      }
      I(void 0);
    });
    return b.cancel = Or(o + " - runid: " + u + " - cancel", function() {
      try {
        E && us(E);
        var d = c.return(void 0), m = Promise.resolve(d.value);
        m.then(Er, Er), us(m), l(new pu());
      } catch (p) {
        l(p);
      }
    }), b;
  };
  return i.isMobXFlow = !0, i;
}, _s);
it.bound = /* @__PURE__ */ dn(_m);
function us(e) {
  rn(e.cancel) && e.cancel();
}
function Io(e) {
  return e?.isMobXFlow === !0;
}
function um(e, n) {
  return e ? n !== void 0 ? yr(e) ? e[M].values_.has(n) : !1 : yr(e) || !!e[M] || ha(e) || No(e) || It(e) : !1;
}
function Ea(e) {
  return um(e);
}
function lm(e) {
  if (yr(e))
    return e[M].ownKeys_();
  Y(38);
}
function Wt(e, n, r) {
  return e.set(n, r), r;
}
function fr(e, n) {
  if (e == null || typeof e != "object" || e instanceof Date || !Ea(e))
    return e;
  if (wd(e) || It(e))
    return fr(e.get(), n);
  if (n.has(e))
    return n.get(e);
  if (St(e)) {
    var r = Wt(n, e, new Array(e.length));
    return e.forEach(function(a, s) {
      r[s] = fr(a, n);
    }), r;
  }
  if (dr(e)) {
    var t = Wt(n, e, /* @__PURE__ */ new Set());
    return e.forEach(function(a) {
      t.add(fr(a, n));
    }), t;
  }
  if (rr(e)) {
    var o = Wt(n, e, /* @__PURE__ */ new Map());
    return e.forEach(function(a, s) {
      o.set(s, fr(a, n));
    }), o;
  } else {
    var i = Wt(n, e, {});
    return lm(e).forEach(function(a) {
      pt.propertyIsEnumerable.call(e, a) && (i[a] = fr(e[a], n));
    }), i;
  }
}
function fu(e, n) {
  return fr(e, /* @__PURE__ */ new Map());
}
function cm() {
  Y("trace() is not available in production builds");
  for (var e = !1, n = arguments.length, r = new Array(n), t = 0; t < n; t++)
    r[t] = arguments[t];
  typeof r[r.length - 1] == "boolean" && (e = r.pop());
  var o = dm(r);
  if (!o)
    return Y("'trace(break?)' can only be used inside a tracked computed value or a Reaction. Consider passing in the computed value or reaction explicitly");
  o.isTracing_ === ur.NONE && console.log("[mobx.trace] '" + o.name_ + "' tracing enabled"), o.isTracing_ = e ? ur.BREAK : ur.LOG;
}
function dm(e) {
  switch (e.length) {
    case 0:
      return N.trackingDerivation;
    case 1:
      return Zn(e[0]);
    case 2:
      return Zn(e[0], e[1]);
  }
}
function Nn(e, n) {
  n === void 0 && (n = void 0), Be();
  try {
    return e.apply(n);
  } finally {
    je();
  }
}
function hr(e) {
  return e[M];
}
var mm = {
  has: function(n, r) {
    return hr(n).has_(r);
  },
  get: function(n, r) {
    return hr(n).get_(r);
  },
  set: function(n, r, t) {
    var o;
    return cr(r) ? (o = hr(n).set_(r, t, !0)) != null ? o : !0 : !1;
  },
  deleteProperty: function(n, r) {
    var t;
    return cr(r) ? (t = hr(n).delete_(r, !0)) != null ? t : !0 : !1;
  },
  defineProperty: function(n, r, t) {
    var o;
    return (o = hr(n).defineProperty_(r, t)) != null ? o : !0;
  },
  ownKeys: function(n) {
    return hr(n).ownKeys_();
  },
  preventExtensions: function(n) {
    Y(13);
  }
};
function hm(e, n) {
  var r, t;
  return U_(), e = Gt(e, n), (t = (r = e[M]).proxy_) != null ? t : r.proxy_ = new Proxy(e, mm);
}
function Ke(e) {
  return e.interceptors_ !== void 0 && e.interceptors_.length > 0;
}
function gt(e, n) {
  var r = e.interceptors_ || (e.interceptors_ = []);
  return r.push(n), H_(function() {
    var t = r.indexOf(n);
    t !== -1 && r.splice(t, 1);
  });
}
function $e(e, n) {
  var r = xr();
  try {
    for (var t = [].concat(e.interceptors_ || []), o = 0, i = t.length; o < i && (n = t[o](n), n && !n.type && Y(14), !!n); o++)
      ;
    return n;
  } finally {
    Yn(r);
  }
}
function en(e) {
  return e.changeListeners_ !== void 0 && e.changeListeners_.length > 0;
}
function At(e, n) {
  var r = e.changeListeners_ || (e.changeListeners_ = []);
  return r.push(n), H_(function() {
    var t = r.indexOf(n);
    t !== -1 && r.splice(t, 1);
  });
}
function nn(e, n) {
  var r = xr(), t = e.changeListeners_;
  if (t) {
    t = t.slice();
    for (var o = 0, i = t.length; o < i; o++)
      t[o](n);
    Yn(r);
  }
}
function pm(e, n, r) {
  var t = Gt(e, r)[M];
  Be();
  try {
    var o;
    (o = n) != null || (n = Yc(e)), Cr(n).forEach(function(i) {
      return t.make_(i, n[i]);
    });
  } finally {
    je();
  }
  return e;
}
var fi = /* @__PURE__ */ Symbol("mobx-keys");
function er(e, n, r) {
  if (Dn(e))
    return mu(e, e, n, r);
  var t = Gt(e, r)[M];
  if (!e[fi]) {
    var o = Object.getPrototypeOf(e), i = new Set([].concat(Cr(e), Cr(o)));
    i.delete("constructor"), i.delete(M), ft(o, fi, i);
  }
  Be();
  try {
    e[fi].forEach(function(a) {
      return t.make_(
        a,
        // must pass "undefined" for { key: undefined }
        n && a in n ? n[a] : !0
      );
    });
  } finally {
    je();
  }
  return e;
}
var ls = "splice", mn = "update", fm = 1e4, Tm = {
  get: function(n, r) {
    var t = n[M];
    return r === M ? t : r === "length" ? t.getArrayLength_() : typeof r == "string" && !isNaN(r) ? t.get_(parseInt(r)) : Sn(go, r) ? go[r] : n[r];
  },
  set: function(n, r, t) {
    var o = n[M];
    return r === "length" && o.setArrayLength_(t), typeof r == "symbol" || isNaN(r) ? n[r] = t : o.set_(parseInt(r), t), !0;
  },
  preventExtensions: function() {
    Y(15);
  }
}, ba = /* @__PURE__ */ function() {
  function e(r, t, o, i) {
    r === void 0 && (r = "ObservableArray"), this.owned_ = void 0, this.legacyMode_ = void 0, this.atom_ = void 0, this.values_ = [], this.interceptors_ = void 0, this.changeListeners_ = void 0, this.enhancer_ = void 0, this.dehancer = void 0, this.proxy_ = void 0, this.lastKnownLength_ = 0, this.owned_ = o, this.legacyMode_ = i, this.atom_ = new bt(r), this.enhancer_ = function(a, s) {
      return t(a, s, "ObservableArray[..]");
    };
  }
  var n = e.prototype;
  return n.dehanceValue_ = function(t) {
    return this.dehancer !== void 0 ? this.dehancer(t) : t;
  }, n.dehanceValues_ = function(t) {
    return this.dehancer !== void 0 && t.length > 0 ? t.map(this.dehancer) : t;
  }, n.intercept_ = function(t) {
    return gt(this, t);
  }, n.observe_ = function(t, o) {
    return o === void 0 && (o = !1), o && t({
      observableKind: "array",
      object: this.proxy_,
      debugObjectName: this.atom_.name_,
      type: "splice",
      index: 0,
      added: this.values_.slice(),
      addedCount: this.values_.length,
      removed: [],
      removedCount: 0
    }), At(this, t);
  }, n.getArrayLength_ = function() {
    return this.atom_.reportObserved(), this.values_.length;
  }, n.setArrayLength_ = function(t) {
    (typeof t != "number" || isNaN(t) || t < 0) && Y("Out of range: " + t);
    var o = this.values_.length;
    if (t !== o)
      if (t > o) {
        for (var i = new Array(t - o), a = 0; a < t - o; a++)
          i[a] = void 0;
        this.spliceWithArray_(o, 0, i);
      } else
        this.spliceWithArray_(t, o - t);
  }, n.updateArrayLength_ = function(t, o) {
    t !== this.lastKnownLength_ && Y(16), this.lastKnownLength_ += o, this.legacyMode_ && o > 0 && Gu(t + o + 1);
  }, n.spliceWithArray_ = function(t, o, i) {
    var a = this;
    this.atom_;
    var s = this.values_.length;
    if (t === void 0 ? t = 0 : t > s ? t = s : t < 0 && (t = Math.max(0, s + t)), arguments.length === 1 ? o = s - t : o == null ? o = 0 : o = Math.max(0, Math.min(o, s - t)), i === void 0 && (i = wi), Ke(this)) {
      var _ = $e(this, {
        object: this.proxy_,
        type: ls,
        index: t,
        removedCount: o,
        added: i
      });
      if (!_)
        return wi;
      o = _.removedCount, i = _.added;
    }
    if (i = i.length === 0 ? i : i.map(function(l) {
      return a.enhancer_(l, void 0);
    }), this.legacyMode_) {
      var u = i.length - o;
      this.updateArrayLength_(s, u);
    }
    var c = this.spliceItemsIntoValues_(t, o, i);
    return (o !== 0 || i.length !== 0) && this.notifyArraySplice_(t, i, c), this.dehanceValues_(c);
  }, n.spliceItemsIntoValues_ = function(t, o, i) {
    if (i.length < fm) {
      var a;
      return (a = this.values_).splice.apply(a, [t, o].concat(i));
    } else {
      var s = this.values_.slice(t, t + o), _ = this.values_.slice(t + o);
      this.values_.length += i.length - o;
      for (var u = 0; u < i.length; u++)
        this.values_[t + u] = i[u];
      for (var c = 0; c < _.length; c++)
        this.values_[t + i.length + c] = _[c];
      return s;
    }
  }, n.notifyArrayChildUpdate_ = function(t, o, i) {
    var a = !this.owned_ && qr(), s = en(this), _ = s || a ? {
      observableKind: "array",
      object: this.proxy_,
      type: mn,
      debugObjectName: this.atom_.name_,
      index: t,
      newValue: o,
      oldValue: i
    } : null;
    this.atom_.reportChanged(), s && nn(this, _);
  }, n.notifyArraySplice_ = function(t, o, i) {
    var a = !this.owned_ && qr(), s = en(this), _ = s || a ? {
      observableKind: "array",
      object: this.proxy_,
      debugObjectName: this.atom_.name_,
      type: ls,
      index: t,
      removed: i,
      added: o,
      removedCount: i.length,
      addedCount: o.length
    } : null;
    this.atom_.reportChanged(), s && nn(this, _);
  }, n.get_ = function(t) {
    if (this.legacyMode_ && t >= this.values_.length) {
      console.warn("[mobx] Out of bounds read: " + t);
      return;
    }
    return this.atom_.reportObserved(), this.dehanceValue_(this.values_[t]);
  }, n.set_ = function(t, o) {
    var i = this.values_;
    if (this.legacyMode_ && t > i.length && Y(17, t, i.length), t < i.length) {
      this.atom_;
      var a = i[t];
      if (Ke(this)) {
        var s = $e(this, {
          type: mn,
          object: this.proxy_,
          index: t,
          newValue: o
        });
        if (!s)
          return;
        o = s.newValue;
      }
      o = this.enhancer_(o, a);
      var _ = o !== a;
      _ && (i[t] = o, this.notifyArrayChildUpdate_(t, o, a));
    } else {
      for (var u = new Array(t + 1 - i.length), c = 0; c < u.length - 1; c++)
        u[c] = void 0;
      u[u.length - 1] = o, this.spliceWithArray_(i.length, 0, u);
    }
  }, e;
}();
function Em(e, n, r, t) {
  r === void 0 && (r = "ObservableArray"), t === void 0 && (t = !1), U_();
  var o = new ba(r, n, t, !1);
  P_(o.values_, M, o);
  var i = new Proxy(o.values_, Tm);
  if (o.proxy_ = i, e && e.length) {
    var a = Rt(!0);
    o.spliceWithArray_(0, 0, e), Nt(a);
  }
  return i;
}
var go = {
  clear: function() {
    return this.splice(0);
  },
  replace: function(n) {
    var r = this[M];
    return r.spliceWithArray_(0, r.values_.length, n);
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
  splice: function(n, r) {
    for (var t = arguments.length, o = new Array(t > 2 ? t - 2 : 0), i = 2; i < t; i++)
      o[i - 2] = arguments[i];
    var a = this[M];
    switch (arguments.length) {
      case 0:
        return [];
      case 1:
        return a.spliceWithArray_(n);
      case 2:
        return a.spliceWithArray_(n, r);
    }
    return a.spliceWithArray_(n, r, o);
  },
  spliceWithArray: function(n, r, t) {
    return this[M].spliceWithArray_(n, r, t);
  },
  push: function() {
    for (var n = this[M], r = arguments.length, t = new Array(r), o = 0; o < r; o++)
      t[o] = arguments[o];
    return n.spliceWithArray_(n.values_.length, 0, t), n.values_.length;
  },
  pop: function() {
    return this.splice(Math.max(this[M].values_.length - 1, 0), 1)[0];
  },
  shift: function() {
    return this.splice(0, 1)[0];
  },
  unshift: function() {
    for (var n = this[M], r = arguments.length, t = new Array(r), o = 0; o < r; o++)
      t[o] = arguments[o];
    return n.spliceWithArray_(0, 0, t), n.values_.length;
  },
  reverse: function() {
    return N.trackingDerivation && Y(37, "reverse"), this.replace(this.slice().reverse()), this;
  },
  sort: function() {
    N.trackingDerivation && Y(37, "sort");
    var n = this.slice();
    return n.sort.apply(n, arguments), this.replace(n), this;
  },
  remove: function(n) {
    var r = this[M], t = r.dehanceValues_(r.values_).indexOf(n);
    return t > -1 ? (this.splice(t, 1), !0) : !1;
  }
};
Oe("concat", Pn);
Oe("flat", Pn);
Oe("includes", Pn);
Oe("indexOf", Pn);
Oe("join", Pn);
Oe("lastIndexOf", Pn);
Oe("slice", Pn);
Oe("toString", Pn);
Oe("toLocaleString", Pn);
Oe("every", nr);
Oe("filter", nr);
Oe("find", nr);
Oe("findIndex", nr);
Oe("flatMap", nr);
Oe("forEach", nr);
Oe("map", nr);
Oe("some", nr);
Oe("reduce", Tu);
Oe("reduceRight", Tu);
function Oe(e, n) {
  typeof Array.prototype[e] == "function" && (go[e] = n(e));
}
function Pn(e) {
  return function() {
    var n = this[M];
    n.atom_.reportObserved();
    var r = n.dehanceValues_(n.values_);
    return r[e].apply(r, arguments);
  };
}
function nr(e) {
  return function(n, r) {
    var t = this, o = this[M];
    o.atom_.reportObserved();
    var i = o.dehanceValues_(o.values_);
    return i[e](function(a, s) {
      return n.call(r, a, s, t);
    });
  };
}
function Tu(e) {
  return function() {
    var n = this, r = this[M];
    r.atom_.reportObserved();
    var t = r.dehanceValues_(r.values_), o = arguments[0];
    return arguments[0] = function(i, a, s) {
      return o(i, a, s, n);
    }, t[e].apply(t, arguments);
  };
}
var bm = /* @__PURE__ */ Qn("ObservableArrayAdministration", ba);
function St(e) {
  return Fo(e) && bm(e[M]);
}
var Eu, bu, Om = {}, Fn = "add", Ao = "delete";
Eu = Symbol.iterator;
bu = Symbol.toStringTag;
var Ou = /* @__PURE__ */ function() {
  function e(r, t, o) {
    var i = this;
    t === void 0 && (t = Ur), o === void 0 && (o = "ObservableMap"), this.enhancer_ = void 0, this.name_ = void 0, this[M] = Om, this.data_ = void 0, this.hasMap_ = void 0, this.keysAtom_ = void 0, this.interceptors_ = void 0, this.changeListeners_ = void 0, this.dehancer = void 0, this.enhancer_ = t, this.name_ = o, rn(Map) || Y(18), this.keysAtom_ = x_("ObservableMap.keys()"), this.data_ = /* @__PURE__ */ new Map(), this.hasMap_ = /* @__PURE__ */ new Map(), Pd(!0, function() {
      i.merge(r);
    });
  }
  var n = e.prototype;
  return n.has_ = function(t) {
    return this.data_.has(t);
  }, n.has = function(t) {
    var o = this;
    if (!N.trackingDerivation)
      return this.has_(t);
    var i = this.hasMap_.get(t);
    if (!i) {
      var a = i = new _r(this.has_(t), Vo, "ObservableMap.key?", !1);
      this.hasMap_.set(t, a), cu(a, function() {
        return o.hasMap_.delete(t);
      });
    }
    return i.get();
  }, n.set = function(t, o) {
    var i = this.has_(t);
    if (Ke(this)) {
      var a = $e(this, {
        type: i ? mn : Fn,
        object: this,
        newValue: o,
        name: t
      });
      if (!a)
        return this;
      o = a.newValue;
    }
    return i ? this.updateValue_(t, o) : this.addValue_(t, o), this;
  }, n.delete = function(t) {
    var o = this;
    if (this.keysAtom_, Ke(this)) {
      var i = $e(this, {
        type: Ao,
        object: this,
        name: t
      });
      if (!i)
        return !1;
    }
    if (this.has_(t)) {
      var a = qr(), s = en(this), _ = s || a ? {
        observableKind: "map",
        debugObjectName: this.name_,
        type: Ao,
        object: this,
        oldValue: this.data_.get(t).value_,
        name: t
      } : null;
      return Nn(function() {
        var u;
        o.keysAtom_.reportChanged(), (u = o.hasMap_.get(t)) == null || u.setNewValue_(!1);
        var c = o.data_.get(t);
        c.setNewValue_(void 0), o.data_.delete(t);
      }), s && nn(this, _), !0;
    }
    return !1;
  }, n.updateValue_ = function(t, o) {
    var i = this.data_.get(t);
    if (o = i.prepareNewValue_(o), o !== N.UNCHANGED) {
      var a = qr(), s = en(this), _ = s || a ? {
        observableKind: "map",
        debugObjectName: this.name_,
        type: mn,
        object: this,
        oldValue: i.value_,
        name: t,
        newValue: o
      } : null;
      i.setNewValue_(o), s && nn(this, _);
    }
  }, n.addValue_ = function(t, o) {
    var i = this;
    this.keysAtom_, Nn(function() {
      var u, c = new _r(o, i.enhancer_, "ObservableMap.key", !1);
      i.data_.set(t, c), o = c.value_, (u = i.hasMap_.get(t)) == null || u.setNewValue_(!0), i.keysAtom_.reportChanged();
    });
    var a = qr(), s = en(this), _ = s || a ? {
      observableKind: "map",
      debugObjectName: this.name_,
      type: Fn,
      object: this,
      name: t,
      newValue: o
    } : null;
    s && nn(this, _);
  }, n.get = function(t) {
    return this.has(t) ? this.dehanceValue_(this.data_.get(t).get()) : this.dehanceValue_(void 0);
  }, n.dehanceValue_ = function(t) {
    return this.dehancer !== void 0 ? this.dehancer(t) : t;
  }, n.keys = function() {
    return this.keysAtom_.reportObserved(), this.data_.keys();
  }, n.values = function() {
    var t = this, o = this.keys();
    return at({
      next: function() {
        var a = o.next(), s = a.done, _ = a.value;
        return {
          done: s,
          value: s ? void 0 : t.get(_)
        };
      }
    });
  }, n.entries = function() {
    var t = this, o = this.keys();
    return at({
      next: function() {
        var a = o.next(), s = a.done, _ = a.value;
        return {
          done: s,
          value: s ? void 0 : [_, t.get(_)]
        };
      }
    });
  }, n[Eu] = function() {
    return this.entries();
  }, n.forEach = function(t, o) {
    for (var i = br(this), a; !(a = i()).done; ) {
      var s = a.value, _ = s[0], u = s[1];
      t.call(o, u, _, this);
    }
  }, n.merge = function(t) {
    var o = this;
    return rr(t) && (t = new Map(t)), Nn(function() {
      Dn(t) ? jc(t).forEach(function(i) {
        return o.set(i, t[i]);
      }) : Array.isArray(t) ? t.forEach(function(i) {
        var a = i[0], s = i[1];
        return o.set(a, s);
      }) : kr(t) ? (t.constructor !== Map && Y(19, t), t.forEach(function(i, a) {
        return o.set(a, i);
      })) : t != null && Y(20, t);
    }), this;
  }, n.clear = function() {
    var t = this;
    Nn(function() {
      Z_(function() {
        for (var o = br(t.keys()), i; !(i = o()).done; ) {
          var a = i.value;
          t.delete(a);
        }
      });
    });
  }, n.replace = function(t) {
    var o = this;
    return Nn(function() {
      for (var i = Rm(t), a = /* @__PURE__ */ new Map(), s = !1, _ = br(o.data_.keys()), u; !(u = _()).done; ) {
        var c = u.value;
        if (!i.has(c)) {
          var l = o.delete(c);
          if (l)
            s = !0;
          else {
            var E = o.data_.get(c);
            a.set(c, E);
          }
        }
      }
      for (var b = br(i.entries()), d; !(d = b()).done; ) {
        var m = d.value, p = m[0], I = m[1], R = o.data_.has(p);
        if (o.set(p, I), o.data_.has(p)) {
          var C = o.data_.get(p);
          a.set(p, C), R || (s = !0);
        }
      }
      if (!s)
        if (o.data_.size !== a.size)
          o.keysAtom_.reportChanged();
        else
          for (var H = o.data_.keys(), f = a.keys(), w = H.next(), X = f.next(); !w.done; ) {
            if (w.value !== X.value) {
              o.keysAtom_.reportChanged();
              break;
            }
            w = H.next(), X = f.next();
          }
      o.data_ = a;
    }), this;
  }, n.toString = function() {
    return "[object ObservableMap]";
  }, n.toJSON = function() {
    return Array.from(this);
  }, n.observe_ = function(t, o) {
    return At(this, t);
  }, n.intercept_ = function(t) {
    return gt(this, t);
  }, ma(e, [{
    key: "size",
    get: function() {
      return this.keysAtom_.reportObserved(), this.data_.size;
    }
  }, {
    key: bu,
    get: function() {
      return "Map";
    }
  }]), e;
}(), rr = /* @__PURE__ */ Qn("ObservableMap", Ou);
function Rm(e) {
  if (kr(e) || rr(e))
    return e;
  if (Array.isArray(e))
    return new Map(e);
  if (Dn(e)) {
    var n = /* @__PURE__ */ new Map();
    for (var r in e)
      n.set(r, e[r]);
    return n;
  } else
    return Y(21, e);
}
var Ru, Nu, Nm = {};
Ru = Symbol.iterator;
Nu = Symbol.toStringTag;
var Iu = /* @__PURE__ */ function() {
  function e(r, t, o) {
    t === void 0 && (t = Ur), o === void 0 && (o = "ObservableSet"), this.name_ = void 0, this[M] = Nm, this.data_ = /* @__PURE__ */ new Set(), this.atom_ = void 0, this.changeListeners_ = void 0, this.interceptors_ = void 0, this.dehancer = void 0, this.enhancer_ = void 0, this.name_ = o, rn(Set) || Y(22), this.atom_ = x_(this.name_), this.enhancer_ = function(i, a) {
      return t(i, a, o);
    }, r && this.replace(r);
  }
  var n = e.prototype;
  return n.dehanceValue_ = function(t) {
    return this.dehancer !== void 0 ? this.dehancer(t) : t;
  }, n.clear = function() {
    var t = this;
    Nn(function() {
      Z_(function() {
        for (var o = br(t.data_.values()), i; !(i = o()).done; ) {
          var a = i.value;
          t.delete(a);
        }
      });
    });
  }, n.forEach = function(t, o) {
    for (var i = br(this), a; !(a = i()).done; ) {
      var s = a.value;
      t.call(o, s, s, this);
    }
  }, n.add = function(t) {
    var o = this;
    if (this.atom_, Ke(this)) {
      var i = $e(this, {
        type: Fn,
        object: this,
        newValue: t
      });
      if (!i)
        return this;
    }
    if (!this.has(t)) {
      Nn(function() {
        o.data_.add(o.enhancer_(t, void 0)), o.atom_.reportChanged();
      });
      var a = !1, s = en(this), _ = s || a ? {
        observableKind: "set",
        debugObjectName: this.name_,
        type: Fn,
        object: this,
        newValue: t
      } : null;
      s && nn(this, _);
    }
    return this;
  }, n.delete = function(t) {
    var o = this;
    if (Ke(this)) {
      var i = $e(this, {
        type: Ao,
        object: this,
        oldValue: t
      });
      if (!i)
        return !1;
    }
    if (this.has(t)) {
      var a = !1, s = en(this), _ = s || a ? {
        observableKind: "set",
        debugObjectName: this.name_,
        type: Ao,
        object: this,
        oldValue: t
      } : null;
      return Nn(function() {
        o.atom_.reportChanged(), o.data_.delete(t);
      }), s && nn(this, _), !0;
    }
    return !1;
  }, n.has = function(t) {
    return this.atom_.reportObserved(), this.data_.has(this.dehanceValue_(t));
  }, n.entries = function() {
    var t = 0, o = Array.from(this.keys()), i = Array.from(this.values());
    return at({
      next: function() {
        var s = t;
        return t += 1, s < i.length ? {
          value: [o[s], i[s]],
          done: !1
        } : {
          done: !0
        };
      }
    });
  }, n.keys = function() {
    return this.values();
  }, n.values = function() {
    this.atom_.reportObserved();
    var t = this, o = 0, i = Array.from(this.data_.values());
    return at({
      next: function() {
        return o < i.length ? {
          value: t.dehanceValue_(i[o++]),
          done: !1
        } : {
          done: !0
        };
      }
    });
  }, n.replace = function(t) {
    var o = this;
    return dr(t) && (t = new Set(t)), Nn(function() {
      Array.isArray(t) ? (o.clear(), t.forEach(function(i) {
        return o.add(i);
      })) : Tt(t) ? (o.clear(), t.forEach(function(i) {
        return o.add(i);
      })) : t != null && Y("Cannot initialize set from " + t);
    }), this;
  }, n.observe_ = function(t, o) {
    return At(this, t);
  }, n.intercept_ = function(t) {
    return gt(this, t);
  }, n.toJSON = function() {
    return Array.from(this);
  }, n.toString = function() {
    return "[object ObservableSet]";
  }, n[Ru] = function() {
    return this.values();
  }, ma(e, [{
    key: "size",
    get: function() {
      return this.atom_.reportObserved(), this.data_.size;
    }
  }, {
    key: Nu,
    get: function() {
      return "Set";
    }
  }]), e;
}(), dr = /* @__PURE__ */ Qn("ObservableSet", Iu), cs = /* @__PURE__ */ Object.create(null), ds = "remove", gu = /* @__PURE__ */ function() {
  function e(r, t, o, i) {
    t === void 0 && (t = /* @__PURE__ */ new Map()), i === void 0 && (i = hd), this.target_ = void 0, this.values_ = void 0, this.name_ = void 0, this.defaultAnnotation_ = void 0, this.keysAtom_ = void 0, this.changeListeners_ = void 0, this.interceptors_ = void 0, this.proxy_ = void 0, this.isPlainObject_ = void 0, this.appliedAnnotations_ = void 0, this.pendingKeys_ = void 0, this.target_ = r, this.values_ = t, this.name_ = o, this.defaultAnnotation_ = i, this.keysAtom_ = new bt("ObservableObject.keys"), this.isPlainObject_ = Dn(this.target_);
  }
  var n = e.prototype;
  return n.getObservablePropValue_ = function(t) {
    return this.values_.get(t).get();
  }, n.setObservablePropValue_ = function(t, o) {
    var i = this.values_.get(t);
    if (i instanceof rt)
      return i.set(o), !0;
    if (Ke(this)) {
      var a = $e(this, {
        type: mn,
        object: this.proxy_ || this.target_,
        name: t,
        newValue: o
      });
      if (!a)
        return null;
      o = a.newValue;
    }
    if (o = i.prepareNewValue_(o), o !== N.UNCHANGED) {
      var s = en(this), _ = !1, u = s || _ ? {
        type: mn,
        observableKind: "object",
        debugObjectName: this.name_,
        object: this.proxy_ || this.target_,
        oldValue: i.value_,
        name: t,
        newValue: o
      } : null;
      i.setNewValue_(o), s && nn(this, u);
    }
    return !0;
  }, n.get_ = function(t) {
    return N.trackingDerivation && !Sn(this.target_, t) && this.has_(t), this.target_[t];
  }, n.set_ = function(t, o, i) {
    return i === void 0 && (i = !1), Sn(this.target_, t) ? this.values_.has(t) ? this.setObservablePropValue_(t, o) : i ? Reflect.set(this.target_, t, o) : (this.target_[t] = o, !0) : this.extend_(t, {
      value: o,
      enumerable: !0,
      writable: !0,
      configurable: !0
    }, this.defaultAnnotation_, i);
  }, n.has_ = function(t) {
    if (!N.trackingDerivation)
      return t in this.target_;
    this.pendingKeys_ || (this.pendingKeys_ = /* @__PURE__ */ new Map());
    var o = this.pendingKeys_.get(t);
    return o || (o = new _r(t in this.target_, Vo, "ObservableObject.key?", !1), this.pendingKeys_.set(t, o)), o.get();
  }, n.make_ = function(t, o) {
    if (o === !0 && (o = this.defaultAnnotation_), o !== !1) {
      if (!(t in this.target_)) {
        var i;
        if ((i = this.target_[un]) != null && i[t])
          return;
        Y(1, o.annotationType_, this.name_ + "." + t.toString());
      }
      for (var a = this.target_; a && a !== pt; ) {
        var s = Eo(a, t);
        if (s) {
          var _ = o.make_(this, t, s, a);
          if (_ === 0)
            return;
          if (_ === 1)
            break;
        }
        a = Object.getPrototypeOf(a);
      }
      hs(this, o, t);
    }
  }, n.extend_ = function(t, o, i, a) {
    if (a === void 0 && (a = !1), i === !0 && (i = this.defaultAnnotation_), i === !1)
      return this.defineProperty_(t, o, a);
    var s = i.extend_(this, t, o, a);
    return s && hs(this, i, t), s;
  }, n.defineProperty_ = function(t, o, i) {
    i === void 0 && (i = !1);
    try {
      Be();
      var a = this.delete_(t);
      if (!a)
        return a;
      if (Ke(this)) {
        var s = $e(this, {
          object: this.proxy_ || this.target_,
          name: t,
          type: Fn,
          newValue: o.value
        });
        if (!s)
          return null;
        var _ = s.newValue;
        o.value !== _ && (o = Dr({}, o, {
          value: _
        }));
      }
      if (i) {
        if (!Reflect.defineProperty(this.target_, t, o))
          return !1;
      } else
        cn(this.target_, t, o);
      this.notifyPropertyAddition_(t, o.value);
    } finally {
      je();
    }
    return !0;
  }, n.defineObservableProperty_ = function(t, o, i, a) {
    a === void 0 && (a = !1);
    try {
      Be();
      var s = this.delete_(t);
      if (!s)
        return s;
      if (Ke(this)) {
        var _ = $e(this, {
          object: this.proxy_ || this.target_,
          name: t,
          type: Fn,
          newValue: o
        });
        if (!_)
          return null;
        o = _.newValue;
      }
      var u = ms(t), c = {
        configurable: N.safeDescriptors ? this.isPlainObject_ : !0,
        enumerable: !0,
        get: u.get,
        set: u.set
      };
      if (a) {
        if (!Reflect.defineProperty(this.target_, t, c))
          return !1;
      } else
        cn(this.target_, t, c);
      var l = new _r(o, i, "ObservableObject.key", !1);
      this.values_.set(t, l), this.notifyPropertyAddition_(t, l.value_);
    } finally {
      je();
    }
    return !0;
  }, n.defineComputedProperty_ = function(t, o, i) {
    i === void 0 && (i = !1);
    try {
      Be();
      var a = this.delete_(t);
      if (!a)
        return a;
      if (Ke(this)) {
        var s = $e(this, {
          object: this.proxy_ || this.target_,
          name: t,
          type: Fn,
          newValue: void 0
        });
        if (!s)
          return null;
      }
      o.name || (o.name = "ObservableObject.key"), o.context = this.proxy_ || this.target_;
      var _ = ms(t), u = {
        configurable: N.safeDescriptors ? this.isPlainObject_ : !0,
        enumerable: !1,
        get: _.get,
        set: _.set
      };
      if (i) {
        if (!Reflect.defineProperty(this.target_, t, u))
          return !1;
      } else
        cn(this.target_, t, u);
      this.values_.set(t, new rt(o)), this.notifyPropertyAddition_(t, void 0);
    } finally {
      je();
    }
    return !0;
  }, n.delete_ = function(t, o) {
    if (o === void 0 && (o = !1), !Sn(this.target_, t))
      return !0;
    if (Ke(this)) {
      var i = $e(this, {
        object: this.proxy_ || this.target_,
        name: t,
        type: ds
      });
      if (!i)
        return null;
    }
    try {
      var a, s;
      Be();
      var _ = en(this), u = !1, c = this.values_.get(t), l = void 0;
      if (!c && (_ || u)) {
        var E;
        l = (E = Eo(this.target_, t)) == null ? void 0 : E.value;
      }
      if (o) {
        if (!Reflect.deleteProperty(this.target_, t))
          return !1;
      } else
        delete this.target_[t];
      if (c && (this.values_.delete(t), c instanceof _r && (l = c.value_), ou(c)), this.keysAtom_.reportChanged(), (a = this.pendingKeys_) == null || (s = a.get(t)) == null || s.set(t in this.target_), _ || u) {
        var b = {
          type: ds,
          observableKind: "object",
          object: this.proxy_ || this.target_,
          debugObjectName: this.name_,
          oldValue: l,
          name: t
        };
        _ && nn(this, b);
      }
    } finally {
      je();
    }
    return !0;
  }, n.observe_ = function(t, o) {
    return At(this, t);
  }, n.intercept_ = function(t) {
    return gt(this, t);
  }, n.notifyPropertyAddition_ = function(t, o) {
    var i, a, s = en(this), _ = !1;
    if (s || _) {
      var u = s || _ ? {
        type: Fn,
        observableKind: "object",
        debugObjectName: this.name_,
        object: this.proxy_ || this.target_,
        name: t,
        newValue: o
      } : null;
      s && nn(this, u);
    }
    (i = this.pendingKeys_) == null || (a = i.get(t)) == null || a.set(!0), this.keysAtom_.reportChanged();
  }, n.ownKeys_ = function() {
    return this.keysAtom_.reportObserved(), Cr(this.target_);
  }, n.keys_ = function() {
    return this.keysAtom_.reportObserved(), Object.keys(this.target_);
  }, e;
}();
function Gt(e, n) {
  var r;
  if (Sn(e, M))
    return e;
  var t = (r = n?.name) != null ? r : "ObservableObject", o = new gu(e, /* @__PURE__ */ new Map(), String(t), gd(n));
  return ft(e, M, o), e;
}
var Im = /* @__PURE__ */ Qn("ObservableObjectAdministration", gu);
function ms(e) {
  return cs[e] || (cs[e] = {
    get: function() {
      return this[M].getObservablePropValue_(e);
    },
    set: function(r) {
      return this[M].setObservablePropValue_(e, r);
    }
  });
}
function yr(e) {
  return Fo(e) ? Im(e[M]) : !1;
}
function hs(e, n, r) {
  var t;
  (t = e.target_[un]) == null || delete t[r];
}
var gm = /* @__PURE__ */ Su(0), Ti = 0, Au = function() {
};
function Am(e, n) {
  Object.setPrototypeOf ? Object.setPrototypeOf(e.prototype, n) : e.prototype.__proto__ !== void 0 ? e.prototype.__proto__ = n : e.prototype = n;
}
Am(Au, Array.prototype);
var Oa = /* @__PURE__ */ function(e, n, r) {
  k_(t, e);
  function t(i, a, s, _) {
    var u;
    s === void 0 && (s = "ObservableArray"), _ === void 0 && (_ = !1), u = e.call(this) || this;
    var c = new ba(s, a, _, !0);
    if (c.proxy_ = pi(u), P_(pi(u), M, c), i && i.length) {
      var l = Rt(!0);
      u.spliceWithArray(0, 0, i), Nt(l);
    }
    return Object.defineProperty(pi(u), "0", gm), u;
  }
  var o = t.prototype;
  return o.concat = function() {
    this[M].atom_.reportObserved();
    for (var a = arguments.length, s = new Array(a), _ = 0; _ < a; _++)
      s[_] = arguments[_];
    return Array.prototype.concat.apply(
      this.slice(),
      //@ts-ignore
      s.map(function(u) {
        return St(u) ? u.slice() : u;
      })
    );
  }, o[r] = function() {
    var i = this, a = 0;
    return at({
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
  }, ma(t, [{
    key: "length",
    get: function() {
      return this[M].getArrayLength_();
    },
    set: function(a) {
      this[M].setArrayLength_(a);
    }
  }, {
    key: n,
    get: function() {
      return "Array";
    }
  }]), t;
}(Au, Symbol.toStringTag, Symbol.iterator);
Object.entries(go).forEach(function(e) {
  var n = e[0], r = e[1];
  n !== "concat" && ft(Oa.prototype, n, r);
});
function Su(e) {
  return {
    enumerable: !1,
    configurable: !0,
    get: function() {
      return this[M].get_(e);
    },
    set: function(r) {
      this[M].set_(e, r);
    }
  };
}
function Sm(e) {
  cn(Oa.prototype, "" + e, Su(e));
}
function Gu(e) {
  if (e > Ti) {
    for (var n = Ti; n < e + 100; n++)
      Sm(n);
    Ti = e;
  }
}
Gu(1e3);
function Gm(e, n, r) {
  return new Oa(e, n, r);
}
function Zn(e, n) {
  if (typeof e == "object" && e !== null) {
    if (St(e))
      return n !== void 0 && Y(23), e[M].atom_;
    if (dr(e))
      return e.atom_;
    if (rr(e)) {
      if (n === void 0)
        return e.keysAtom_;
      var r = e.data_.get(n) || e.hasMap_.get(n);
      return r || Y(25, n, Bi(e)), r;
    }
    if (yr(e)) {
      if (!n)
        return Y(26);
      var t = e[M].values_.get(n);
      return t || Y(27, n, Bi(e)), t;
    }
    if (ha(e) || It(e) || No(e))
      return e;
  } else if (rn(e) && No(e[M]))
    return e[M];
  Y(28);
}
function vu(e, n) {
  if (e || Y(29), n !== void 0)
    return vu(Zn(e, n));
  if (ha(e) || It(e) || No(e) || rr(e) || dr(e))
    return e;
  if (e[M])
    return e[M];
  Y(24, e);
}
function Bi(e, n) {
  var r;
  if (n !== void 0)
    r = Zn(e, n);
  else {
    if (Ta(e))
      return e.name;
    yr(e) || rr(e) || dr(e) ? r = vu(e) : r = Zn(e);
  }
  return r.name_;
}
var ps = pt.toString;
function Ra(e, n, r) {
  return r === void 0 && (r = -1), ji(e, n, r);
}
function ji(e, n, r, t, o) {
  if (e === n)
    return e !== 0 || 1 / e === 1 / n;
  if (e == null || n == null)
    return !1;
  if (e !== e)
    return n !== n;
  var i = typeof e;
  if (i !== "function" && i !== "object" && typeof n != "object")
    return !1;
  var a = ps.call(e);
  if (a !== ps.call(n))
    return !1;
  switch (a) {
    case "[object RegExp]":
    case "[object String]":
      return "" + e == "" + n;
    case "[object Number]":
      return +e != +e ? +n != +n : +e == 0 ? 1 / +e === 1 / n : +e == +n;
    case "[object Date]":
    case "[object Boolean]":
      return +e == +n;
    case "[object Symbol]":
      return typeof Symbol < "u" && Symbol.valueOf.call(e) === Symbol.valueOf.call(n);
    case "[object Map]":
    case "[object Set]":
      r >= 0 && r++;
      break;
  }
  e = fs(e), n = fs(n);
  var s = a === "[object Array]";
  if (!s) {
    if (typeof e != "object" || typeof n != "object")
      return !1;
    var _ = e.constructor, u = n.constructor;
    if (_ !== u && !(rn(_) && _ instanceof _ && rn(u) && u instanceof u) && "constructor" in e && "constructor" in n)
      return !1;
  }
  if (r === 0)
    return !1;
  r < 0 && (r = -1), t = t || [], o = o || [];
  for (var c = t.length; c--; )
    if (t[c] === e)
      return o[c] === n;
  if (t.push(e), o.push(n), s) {
    if (c = e.length, c !== n.length)
      return !1;
    for (; c--; )
      if (!ji(e[c], n[c], r - 1, t, o))
        return !1;
  } else {
    var l = Object.keys(e), E;
    if (c = l.length, Object.keys(n).length !== c)
      return !1;
    for (; c--; )
      if (E = l[c], !(Sn(n, E) && ji(e[E], n[E], r - 1, t, o)))
        return !1;
  }
  return t.pop(), o.pop(), !0;
}
function fs(e) {
  return St(e) ? e.slice() : kr(e) || rr(e) || Tt(e) || dr(e) ? Array.from(e.entries()) : e;
}
function at(e) {
  return e[Symbol.iterator] = vm, e;
}
function vm() {
  return this;
}
["Symbol", "Map", "Set"].forEach(function(e) {
  var n = da();
  typeof n[e] > "u" && Y("MobX requires global '" + e + "' to be available or polyfilled");
});
typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ == "object" && __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
  spy: Wd,
  extras: {
    getDebugName: Bi
  },
  $mobx: M
});
function Cm(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Dm(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
//! moment.js
//! version : 2.29.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var Cu;
function A() {
  return Cu.apply(null, arguments);
}
function Um(e) {
  Cu = e;
}
function tn(e) {
  return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]";
}
function lr(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Object]";
}
function q(e, n) {
  return Object.prototype.hasOwnProperty.call(e, n);
}
function Na(e) {
  if (Object.getOwnPropertyNames)
    return Object.getOwnPropertyNames(e).length === 0;
  var n;
  for (n in e)
    if (q(e, n))
      return !1;
  return !0;
}
function Le(e) {
  return e === void 0;
}
function Un(e) {
  return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]";
}
function vt(e) {
  return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
}
function Du(e, n) {
  var r = [], t, o = e.length;
  for (t = 0; t < o; ++t)
    r.push(n(e[t], t));
  return r;
}
function Vn(e, n) {
  for (var r in n)
    q(n, r) && (e[r] = n[r]);
  return q(n, "toString") && (e.toString = n.toString), q(n, "valueOf") && (e.valueOf = n.valueOf), e;
}
function pn(e, n, r, t) {
  return el(e, n, r, t, !0).utc();
}
function Hm() {
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
function j(e) {
  return e._pf == null && (e._pf = Hm()), e._pf;
}
var Fi;
Array.prototype.some ? Fi = Array.prototype.some : Fi = function(e) {
  var n = Object(this), r = n.length >>> 0, t;
  for (t = 0; t < r; t++)
    if (t in n && e.call(this, n[t], t, n))
      return !0;
  return !1;
};
function Ia(e) {
  if (e._isValid == null) {
    var n = j(e), r = Fi.call(n.parsedDateParts, function(o) {
      return o != null;
    }), t = !isNaN(e._d.getTime()) && n.overflow < 0 && !n.empty && !n.invalidEra && !n.invalidMonth && !n.invalidWeekday && !n.weekdayMismatch && !n.nullInput && !n.invalidFormat && !n.userInvalidated && (!n.meridiem || n.meridiem && r);
    if (e._strict && (t = t && n.charsLeftOver === 0 && n.unusedTokens.length === 0 && n.bigHour === void 0), Object.isFrozen == null || !Object.isFrozen(e))
      e._isValid = t;
    else
      return t;
  }
  return e._isValid;
}
function Yo(e) {
  var n = pn(NaN);
  return e != null ? Vn(j(n), e) : j(n).userInvalidated = !0, n;
}
var Ts = A.momentProperties = [], Ei = !1;
function ga(e, n) {
  var r, t, o, i = Ts.length;
  if (Le(n._isAMomentObject) || (e._isAMomentObject = n._isAMomentObject), Le(n._i) || (e._i = n._i), Le(n._f) || (e._f = n._f), Le(n._l) || (e._l = n._l), Le(n._strict) || (e._strict = n._strict), Le(n._tzm) || (e._tzm = n._tzm), Le(n._isUTC) || (e._isUTC = n._isUTC), Le(n._offset) || (e._offset = n._offset), Le(n._pf) || (e._pf = j(n)), Le(n._locale) || (e._locale = n._locale), i > 0)
    for (r = 0; r < i; r++)
      t = Ts[r], o = n[t], Le(o) || (e[t] = o);
  return e;
}
function Ct(e) {
  ga(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = /* @__PURE__ */ new Date(NaN)), Ei === !1 && (Ei = !0, A.updateOffset(this), Ei = !1);
}
function on(e) {
  return e instanceof Ct || e != null && e._isAMomentObject != null;
}
function Uu(e) {
  A.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + e);
}
function Je(e, n) {
  var r = !0;
  return Vn(function() {
    if (A.deprecationHandler != null && A.deprecationHandler(null, e), r) {
      var t = [], o, i, a, s = arguments.length;
      for (i = 0; i < s; i++) {
        if (o = "", typeof arguments[i] == "object") {
          o += `
[` + i + "] ";
          for (a in arguments[0])
            q(arguments[0], a) && (o += a + ": " + arguments[0][a] + ", ");
          o = o.slice(0, -2);
        } else
          o = arguments[i];
        t.push(o);
      }
      Uu(
        e + `
Arguments: ` + Array.prototype.slice.call(t).join("") + `
` + new Error().stack
      ), r = !1;
    }
    return n.apply(this, arguments);
  }, n);
}
var Es = {};
function Hu(e, n) {
  A.deprecationHandler != null && A.deprecationHandler(e, n), Es[e] || (Uu(n), Es[e] = !0);
}
A.suppressDeprecationWarnings = !1;
A.deprecationHandler = null;
function fn(e) {
  return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
}
function ym(e) {
  var n, r;
  for (r in e)
    q(e, r) && (n = e[r], fn(n) ? this[r] = n : this["_" + r] = n);
  this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp(
    (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
  );
}
function Vi(e, n) {
  var r = Vn({}, e), t;
  for (t in n)
    q(n, t) && (lr(e[t]) && lr(n[t]) ? (r[t] = {}, Vn(r[t], e[t]), Vn(r[t], n[t])) : n[t] != null ? r[t] = n[t] : delete r[t]);
  for (t in e)
    q(e, t) && !q(n, t) && lr(e[t]) && (r[t] = Vn({}, r[t]));
  return r;
}
function Aa(e) {
  e != null && this.set(e);
}
var Wi;
Object.keys ? Wi = Object.keys : Wi = function(e) {
  var n, r = [];
  for (n in e)
    q(e, n) && r.push(n);
  return r;
};
var Pm = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function wm(e, n, r) {
  var t = this._calendar[e] || this._calendar.sameElse;
  return fn(t) ? t.call(n, r) : t;
}
function hn(e, n, r) {
  var t = "" + Math.abs(e), o = n - t.length, i = e >= 0;
  return (i ? r ? "+" : "" : "-") + Math.pow(10, Math.max(0, o)).toString().substr(1) + t;
}
var Sa = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, Xt = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, bi = {}, gr = {};
function y(e, n, r, t) {
  var o = t;
  typeof t == "string" && (o = function() {
    return this[t]();
  }), e && (gr[e] = o), n && (gr[n[0]] = function() {
    return hn(o.apply(this, arguments), n[1], n[2]);
  }), r && (gr[r] = function() {
    return this.localeData().ordinal(
      o.apply(this, arguments),
      e
    );
  });
}
function Mm(e) {
  return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
}
function km(e) {
  var n = e.match(Sa), r, t;
  for (r = 0, t = n.length; r < t; r++)
    gr[n[r]] ? n[r] = gr[n[r]] : n[r] = Mm(n[r]);
  return function(o) {
    var i = "", a;
    for (a = 0; a < t; a++)
      i += fn(n[a]) ? n[a].call(o, e) : n[a];
    return i;
  };
}
function to(e, n) {
  return e.isValid() ? (n = yu(n, e.localeData()), bi[n] = bi[n] || km(n), bi[n](e)) : e.localeData().invalidDate();
}
function yu(e, n) {
  var r = 5;
  function t(o) {
    return n.longDateFormat(o) || o;
  }
  for (Xt.lastIndex = 0; r >= 0 && Xt.test(e); )
    e = e.replace(
      Xt,
      t
    ), Xt.lastIndex = 0, r -= 1;
  return e;
}
var xm = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function Lm(e) {
  var n = this._longDateFormat[e], r = this._longDateFormat[e.toUpperCase()];
  return n || !r ? n : (this._longDateFormat[e] = r.match(Sa).map(function(t) {
    return t === "MMMM" || t === "MM" || t === "DD" || t === "dddd" ? t.slice(1) : t;
  }).join(""), this._longDateFormat[e]);
}
var Bm = "Invalid date";
function jm() {
  return this._invalidDate;
}
var Fm = "%d", Vm = /\d{1,2}/;
function Wm(e) {
  return this._ordinal.replace("%d", e);
}
var Xm = {
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
function Ym(e, n, r, t) {
  var o = this._relativeTime[r];
  return fn(o) ? o(e, n, r, t) : o.replace(/%d/i, e);
}
function Km(e, n) {
  var r = this._relativeTime[e > 0 ? "future" : "past"];
  return fn(r) ? r(n) : r.replace(/%s/i, n);
}
var Zr = {};
function we(e, n) {
  var r = e.toLowerCase();
  Zr[r] = Zr[r + "s"] = Zr[n] = e;
}
function qe(e) {
  return typeof e == "string" ? Zr[e] || Zr[e.toLowerCase()] : void 0;
}
function Ga(e) {
  var n = {}, r, t;
  for (t in e)
    q(e, t) && (r = qe(t), r && (n[r] = e[t]));
  return n;
}
var Pu = {};
function Me(e, n) {
  Pu[e] = n;
}
function $m(e) {
  var n = [], r;
  for (r in e)
    q(e, r) && n.push({ unit: r, priority: Pu[r] });
  return n.sort(function(t, o) {
    return t.priority - o.priority;
  }), n;
}
function Ko(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
}
function Ye(e) {
  return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
}
function W(e) {
  var n = +e, r = 0;
  return n !== 0 && isFinite(n) && (r = Ye(n)), r;
}
function Lr(e, n) {
  return function(r) {
    return r != null ? (wu(this, e, r), A.updateOffset(this, n), this) : So(this, e);
  };
}
function So(e, n) {
  return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + n]() : NaN;
}
function wu(e, n, r) {
  e.isValid() && !isNaN(r) && (n === "FullYear" && Ko(e.year()) && e.month() === 1 && e.date() === 29 ? (r = W(r), e._d["set" + (e._isUTC ? "UTC" : "") + n](
    r,
    e.month(),
    Qo(r, e.month())
  )) : e._d["set" + (e._isUTC ? "UTC" : "") + n](r));
}
function zm(e) {
  return e = qe(e), fn(this[e]) ? this[e]() : this;
}
function Jm(e, n) {
  if (typeof e == "object") {
    e = Ga(e);
    var r = $m(e), t, o = r.length;
    for (t = 0; t < o; t++)
      this[r[t].unit](e[r[t].unit]);
  } else if (e = qe(e), fn(this[e]))
    return this[e](n);
  return this;
}
var Mu = /\d/, Xe = /\d\d/, ku = /\d{3}/, va = /\d{4}/, $o = /[+-]?\d{6}/, _e = /\d\d?/, xu = /\d\d\d\d?/, Lu = /\d\d\d\d\d\d?/, zo = /\d{1,3}/, Ca = /\d{1,4}/, Jo = /[+-]?\d{1,6}/, Br = /\d+/, qo = /[+-]?\d+/, qm = /Z|[+-]\d\d:?\d\d/gi, Zo = /Z|[+-]\d\d(?::?\d\d)?/gi, Zm = /[+-]?\d+(\.\d{1,3})?/, Dt = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, Go;
Go = {};
function G(e, n, r) {
  Go[e] = fn(n) ? n : function(t, o) {
    return t && r ? r : n;
  };
}
function Qm(e, n) {
  return q(Go, e) ? Go[e](n._strict, n._locale) : new RegExp(eh(e));
}
function eh(e) {
  return We(
    e.replace("\\", "").replace(
      /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
      function(n, r, t, o, i) {
        return r || t || o || i;
      }
    )
  );
}
function We(e) {
  return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
var Xi = {};
function ie(e, n) {
  var r, t = n, o;
  for (typeof e == "string" && (e = [e]), Un(n) && (t = function(i, a) {
    a[n] = W(i);
  }), o = e.length, r = 0; r < o; r++)
    Xi[e[r]] = t;
}
function Ut(e, n) {
  ie(e, function(r, t, o, i) {
    o._w = o._w || {}, n(r, o._w, o, i);
  });
}
function nh(e, n, r) {
  n != null && q(Xi, e) && Xi[e](n, r._a, r, e);
}
var Pe = 0, In = 1, _n = 2, Ee = 3, Qe = 4, gn = 5, sr = 6, rh = 7, th = 8;
function oh(e, n) {
  return (e % n + n) % n;
}
var Te;
Array.prototype.indexOf ? Te = Array.prototype.indexOf : Te = function(e) {
  var n;
  for (n = 0; n < this.length; ++n)
    if (this[n] === e)
      return n;
  return -1;
};
function Qo(e, n) {
  if (isNaN(e) || isNaN(n))
    return NaN;
  var r = oh(n, 12);
  return e += (n - r) / 12, r === 1 ? Ko(e) ? 29 : 28 : 31 - r % 7 % 2;
}
y("M", ["MM", 2], "Mo", function() {
  return this.month() + 1;
});
y("MMM", 0, 0, function(e) {
  return this.localeData().monthsShort(this, e);
});
y("MMMM", 0, 0, function(e) {
  return this.localeData().months(this, e);
});
we("month", "M");
Me("month", 8);
G("M", _e);
G("MM", _e, Xe);
G("MMM", function(e, n) {
  return n.monthsShortRegex(e);
});
G("MMMM", function(e, n) {
  return n.monthsRegex(e);
});
ie(["M", "MM"], function(e, n) {
  n[In] = W(e) - 1;
});
ie(["MMM", "MMMM"], function(e, n, r, t) {
  var o = r._locale.monthsParse(e, t, r._strict);
  o != null ? n[In] = o : j(r).invalidMonth = e;
});
var ih = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), Bu = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), ju = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, ah = Dt, sh = Dt;
function _h(e, n) {
  return e ? tn(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || ju).test(n) ? "format" : "standalone"][e.month()] : tn(this._months) ? this._months : this._months.standalone;
}
function uh(e, n) {
  return e ? tn(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[ju.test(n) ? "format" : "standalone"][e.month()] : tn(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function lh(e, n, r) {
  var t, o, i, a = e.toLocaleLowerCase();
  if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], t = 0; t < 12; ++t)
      i = pn([2e3, t]), this._shortMonthsParse[t] = this.monthsShort(
        i,
        ""
      ).toLocaleLowerCase(), this._longMonthsParse[t] = this.months(i, "").toLocaleLowerCase();
  return r ? n === "MMM" ? (o = Te.call(this._shortMonthsParse, a), o !== -1 ? o : null) : (o = Te.call(this._longMonthsParse, a), o !== -1 ? o : null) : n === "MMM" ? (o = Te.call(this._shortMonthsParse, a), o !== -1 ? o : (o = Te.call(this._longMonthsParse, a), o !== -1 ? o : null)) : (o = Te.call(this._longMonthsParse, a), o !== -1 ? o : (o = Te.call(this._shortMonthsParse, a), o !== -1 ? o : null));
}
function ch(e, n, r) {
  var t, o, i;
  if (this._monthsParseExact)
    return lh.call(this, e, n, r);
  for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), t = 0; t < 12; t++) {
    if (o = pn([2e3, t]), r && !this._longMonthsParse[t] && (this._longMonthsParse[t] = new RegExp(
      "^" + this.months(o, "").replace(".", "") + "$",
      "i"
    ), this._shortMonthsParse[t] = new RegExp(
      "^" + this.monthsShort(o, "").replace(".", "") + "$",
      "i"
    )), !r && !this._monthsParse[t] && (i = "^" + this.months(o, "") + "|^" + this.monthsShort(o, ""), this._monthsParse[t] = new RegExp(i.replace(".", ""), "i")), r && n === "MMMM" && this._longMonthsParse[t].test(e))
      return t;
    if (r && n === "MMM" && this._shortMonthsParse[t].test(e))
      return t;
    if (!r && this._monthsParse[t].test(e))
      return t;
  }
}
function Fu(e, n) {
  var r;
  if (!e.isValid())
    return e;
  if (typeof n == "string") {
    if (/^\d+$/.test(n))
      n = W(n);
    else if (n = e.localeData().monthsParse(n), !Un(n))
      return e;
  }
  return r = Math.min(e.date(), Qo(e.year(), n)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](n, r), e;
}
function Vu(e) {
  return e != null ? (Fu(this, e), A.updateOffset(this, !0), this) : So(this, "Month");
}
function dh() {
  return Qo(this.year(), this.month());
}
function mh(e) {
  return this._monthsParseExact ? (q(this, "_monthsRegex") || Wu.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (q(this, "_monthsShortRegex") || (this._monthsShortRegex = ah), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function hh(e) {
  return this._monthsParseExact ? (q(this, "_monthsRegex") || Wu.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (q(this, "_monthsRegex") || (this._monthsRegex = sh), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
}
function Wu() {
  function e(a, s) {
    return s.length - a.length;
  }
  var n = [], r = [], t = [], o, i;
  for (o = 0; o < 12; o++)
    i = pn([2e3, o]), n.push(this.monthsShort(i, "")), r.push(this.months(i, "")), t.push(this.months(i, "")), t.push(this.monthsShort(i, ""));
  for (n.sort(e), r.sort(e), t.sort(e), o = 0; o < 12; o++)
    n[o] = We(n[o]), r[o] = We(r[o]);
  for (o = 0; o < 24; o++)
    t[o] = We(t[o]);
  this._monthsRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp(
    "^(" + r.join("|") + ")",
    "i"
  ), this._monthsShortStrictRegex = new RegExp(
    "^(" + n.join("|") + ")",
    "i"
  );
}
y("Y", 0, 0, function() {
  var e = this.year();
  return e <= 9999 ? hn(e, 4) : "+" + e;
});
y(0, ["YY", 2], 0, function() {
  return this.year() % 100;
});
y(0, ["YYYY", 4], 0, "year");
y(0, ["YYYYY", 5], 0, "year");
y(0, ["YYYYYY", 6, !0], 0, "year");
we("year", "y");
Me("year", 1);
G("Y", qo);
G("YY", _e, Xe);
G("YYYY", Ca, va);
G("YYYYY", Jo, $o);
G("YYYYYY", Jo, $o);
ie(["YYYYY", "YYYYYY"], Pe);
ie("YYYY", function(e, n) {
  n[Pe] = e.length === 2 ? A.parseTwoDigitYear(e) : W(e);
});
ie("YY", function(e, n) {
  n[Pe] = A.parseTwoDigitYear(e);
});
ie("Y", function(e, n) {
  n[Pe] = parseInt(e, 10);
});
function Qr(e) {
  return Ko(e) ? 366 : 365;
}
A.parseTwoDigitYear = function(e) {
  return W(e) + (W(e) > 68 ? 1900 : 2e3);
};
var Xu = Lr("FullYear", !0);
function ph() {
  return Ko(this.year());
}
function fh(e, n, r, t, o, i, a) {
  var s;
  return e < 100 && e >= 0 ? (s = new Date(e + 400, n, r, t, o, i, a), isFinite(s.getFullYear()) && s.setFullYear(e)) : s = new Date(e, n, r, t, o, i, a), s;
}
function st(e) {
  var n, r;
  return e < 100 && e >= 0 ? (r = Array.prototype.slice.call(arguments), r[0] = e + 400, n = new Date(Date.UTC.apply(null, r)), isFinite(n.getUTCFullYear()) && n.setUTCFullYear(e)) : n = new Date(Date.UTC.apply(null, arguments)), n;
}
function vo(e, n, r) {
  var t = 7 + n - r, o = (7 + st(e, 0, t).getUTCDay() - n) % 7;
  return -o + t - 1;
}
function Yu(e, n, r, t, o) {
  var i = (7 + r - t) % 7, a = vo(e, t, o), s = 1 + 7 * (n - 1) + i + a, _, u;
  return s <= 0 ? (_ = e - 1, u = Qr(_) + s) : s > Qr(e) ? (_ = e + 1, u = s - Qr(e)) : (_ = e, u = s), {
    year: _,
    dayOfYear: u
  };
}
function _t(e, n, r) {
  var t = vo(e.year(), n, r), o = Math.floor((e.dayOfYear() - t - 1) / 7) + 1, i, a;
  return o < 1 ? (a = e.year() - 1, i = o + Gn(a, n, r)) : o > Gn(e.year(), n, r) ? (i = o - Gn(e.year(), n, r), a = e.year() + 1) : (a = e.year(), i = o), {
    week: i,
    year: a
  };
}
function Gn(e, n, r) {
  var t = vo(e, n, r), o = vo(e + 1, n, r);
  return (Qr(e) - t + o) / 7;
}
y("w", ["ww", 2], "wo", "week");
y("W", ["WW", 2], "Wo", "isoWeek");
we("week", "w");
we("isoWeek", "W");
Me("week", 5);
Me("isoWeek", 5);
G("w", _e);
G("ww", _e, Xe);
G("W", _e);
G("WW", _e, Xe);
Ut(
  ["w", "ww", "W", "WW"],
  function(e, n, r, t) {
    n[t.substr(0, 1)] = W(e);
  }
);
function Th(e) {
  return _t(e, this._week.dow, this._week.doy).week;
}
var Eh = {
  dow: 0,
  // Sunday is the first day of the week.
  doy: 6
  // The week that contains Jan 6th is the first week of the year.
};
function bh() {
  return this._week.dow;
}
function Oh() {
  return this._week.doy;
}
function Rh(e) {
  var n = this.localeData().week(this);
  return e == null ? n : this.add((e - n) * 7, "d");
}
function Nh(e) {
  var n = _t(this, 1, 4).week;
  return e == null ? n : this.add((e - n) * 7, "d");
}
y("d", 0, "do", "day");
y("dd", 0, 0, function(e) {
  return this.localeData().weekdaysMin(this, e);
});
y("ddd", 0, 0, function(e) {
  return this.localeData().weekdaysShort(this, e);
});
y("dddd", 0, 0, function(e) {
  return this.localeData().weekdays(this, e);
});
y("e", 0, 0, "weekday");
y("E", 0, 0, "isoWeekday");
we("day", "d");
we("weekday", "e");
we("isoWeekday", "E");
Me("day", 11);
Me("weekday", 11);
Me("isoWeekday", 11);
G("d", _e);
G("e", _e);
G("E", _e);
G("dd", function(e, n) {
  return n.weekdaysMinRegex(e);
});
G("ddd", function(e, n) {
  return n.weekdaysShortRegex(e);
});
G("dddd", function(e, n) {
  return n.weekdaysRegex(e);
});
Ut(["dd", "ddd", "dddd"], function(e, n, r, t) {
  var o = r._locale.weekdaysParse(e, t, r._strict);
  o != null ? n.d = o : j(r).invalidWeekday = e;
});
Ut(["d", "e", "E"], function(e, n, r, t) {
  n[t] = W(e);
});
function Ih(e, n) {
  return typeof e != "string" ? e : isNaN(e) ? (e = n.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10);
}
function gh(e, n) {
  return typeof e == "string" ? n.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
}
function Da(e, n) {
  return e.slice(n, 7).concat(e.slice(0, n));
}
var Ah = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), Ku = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), Sh = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), Gh = Dt, vh = Dt, Ch = Dt;
function Dh(e, n) {
  var r = tn(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(n) ? "format" : "standalone"];
  return e === !0 ? Da(r, this._week.dow) : e ? r[e.day()] : r;
}
function Uh(e) {
  return e === !0 ? Da(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
}
function Hh(e) {
  return e === !0 ? Da(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
}
function yh(e, n, r) {
  var t, o, i, a = e.toLocaleLowerCase();
  if (!this._weekdaysParse)
    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], t = 0; t < 7; ++t)
      i = pn([2e3, 1]).day(t), this._minWeekdaysParse[t] = this.weekdaysMin(
        i,
        ""
      ).toLocaleLowerCase(), this._shortWeekdaysParse[t] = this.weekdaysShort(
        i,
        ""
      ).toLocaleLowerCase(), this._weekdaysParse[t] = this.weekdays(i, "").toLocaleLowerCase();
  return r ? n === "dddd" ? (o = Te.call(this._weekdaysParse, a), o !== -1 ? o : null) : n === "ddd" ? (o = Te.call(this._shortWeekdaysParse, a), o !== -1 ? o : null) : (o = Te.call(this._minWeekdaysParse, a), o !== -1 ? o : null) : n === "dddd" ? (o = Te.call(this._weekdaysParse, a), o !== -1 || (o = Te.call(this._shortWeekdaysParse, a), o !== -1) ? o : (o = Te.call(this._minWeekdaysParse, a), o !== -1 ? o : null)) : n === "ddd" ? (o = Te.call(this._shortWeekdaysParse, a), o !== -1 || (o = Te.call(this._weekdaysParse, a), o !== -1) ? o : (o = Te.call(this._minWeekdaysParse, a), o !== -1 ? o : null)) : (o = Te.call(this._minWeekdaysParse, a), o !== -1 || (o = Te.call(this._weekdaysParse, a), o !== -1) ? o : (o = Te.call(this._shortWeekdaysParse, a), o !== -1 ? o : null));
}
function Ph(e, n, r) {
  var t, o, i;
  if (this._weekdaysParseExact)
    return yh.call(this, e, n, r);
  for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), t = 0; t < 7; t++) {
    if (o = pn([2e3, 1]).day(t), r && !this._fullWeekdaysParse[t] && (this._fullWeekdaysParse[t] = new RegExp(
      "^" + this.weekdays(o, "").replace(".", "\\.?") + "$",
      "i"
    ), this._shortWeekdaysParse[t] = new RegExp(
      "^" + this.weekdaysShort(o, "").replace(".", "\\.?") + "$",
      "i"
    ), this._minWeekdaysParse[t] = new RegExp(
      "^" + this.weekdaysMin(o, "").replace(".", "\\.?") + "$",
      "i"
    )), this._weekdaysParse[t] || (i = "^" + this.weekdays(o, "") + "|^" + this.weekdaysShort(o, "") + "|^" + this.weekdaysMin(o, ""), this._weekdaysParse[t] = new RegExp(i.replace(".", ""), "i")), r && n === "dddd" && this._fullWeekdaysParse[t].test(e))
      return t;
    if (r && n === "ddd" && this._shortWeekdaysParse[t].test(e))
      return t;
    if (r && n === "dd" && this._minWeekdaysParse[t].test(e))
      return t;
    if (!r && this._weekdaysParse[t].test(e))
      return t;
  }
}
function wh(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var n = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
  return e != null ? (e = Ih(e, this.localeData()), this.add(e - n, "d")) : n;
}
function Mh(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var n = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return e == null ? n : this.add(e - n, "d");
}
function kh(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    var n = gh(e, this.localeData());
    return this.day(this.day() % 7 ? n : n - 7);
  } else
    return this.day() || 7;
}
function xh(e) {
  return this._weekdaysParseExact ? (q(this, "_weekdaysRegex") || Ua.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (q(this, "_weekdaysRegex") || (this._weekdaysRegex = Gh), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function Lh(e) {
  return this._weekdaysParseExact ? (q(this, "_weekdaysRegex") || Ua.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (q(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = vh), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function Bh(e) {
  return this._weekdaysParseExact ? (q(this, "_weekdaysRegex") || Ua.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (q(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Ch), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function Ua() {
  function e(c, l) {
    return l.length - c.length;
  }
  var n = [], r = [], t = [], o = [], i, a, s, _, u;
  for (i = 0; i < 7; i++)
    a = pn([2e3, 1]).day(i), s = We(this.weekdaysMin(a, "")), _ = We(this.weekdaysShort(a, "")), u = We(this.weekdays(a, "")), n.push(s), r.push(_), t.push(u), o.push(s), o.push(_), o.push(u);
  n.sort(e), r.sort(e), t.sort(e), o.sort(e), this._weekdaysRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  ), this._weekdaysShortStrictRegex = new RegExp(
    "^(" + r.join("|") + ")",
    "i"
  ), this._weekdaysMinStrictRegex = new RegExp(
    "^(" + n.join("|") + ")",
    "i"
  );
}
function Ha() {
  return this.hours() % 12 || 12;
}
function jh() {
  return this.hours() || 24;
}
y("H", ["HH", 2], 0, "hour");
y("h", ["hh", 2], 0, Ha);
y("k", ["kk", 2], 0, jh);
y("hmm", 0, 0, function() {
  return "" + Ha.apply(this) + hn(this.minutes(), 2);
});
y("hmmss", 0, 0, function() {
  return "" + Ha.apply(this) + hn(this.minutes(), 2) + hn(this.seconds(), 2);
});
y("Hmm", 0, 0, function() {
  return "" + this.hours() + hn(this.minutes(), 2);
});
y("Hmmss", 0, 0, function() {
  return "" + this.hours() + hn(this.minutes(), 2) + hn(this.seconds(), 2);
});
function $u(e, n) {
  y(e, 0, 0, function() {
    return this.localeData().meridiem(
      this.hours(),
      this.minutes(),
      n
    );
  });
}
$u("a", !0);
$u("A", !1);
we("hour", "h");
Me("hour", 13);
function zu(e, n) {
  return n._meridiemParse;
}
G("a", zu);
G("A", zu);
G("H", _e);
G("h", _e);
G("k", _e);
G("HH", _e, Xe);
G("hh", _e, Xe);
G("kk", _e, Xe);
G("hmm", xu);
G("hmmss", Lu);
G("Hmm", xu);
G("Hmmss", Lu);
ie(["H", "HH"], Ee);
ie(["k", "kk"], function(e, n, r) {
  var t = W(e);
  n[Ee] = t === 24 ? 0 : t;
});
ie(["a", "A"], function(e, n, r) {
  r._isPm = r._locale.isPM(e), r._meridiem = e;
});
ie(["h", "hh"], function(e, n, r) {
  n[Ee] = W(e), j(r).bigHour = !0;
});
ie("hmm", function(e, n, r) {
  var t = e.length - 2;
  n[Ee] = W(e.substr(0, t)), n[Qe] = W(e.substr(t)), j(r).bigHour = !0;
});
ie("hmmss", function(e, n, r) {
  var t = e.length - 4, o = e.length - 2;
  n[Ee] = W(e.substr(0, t)), n[Qe] = W(e.substr(t, 2)), n[gn] = W(e.substr(o)), j(r).bigHour = !0;
});
ie("Hmm", function(e, n, r) {
  var t = e.length - 2;
  n[Ee] = W(e.substr(0, t)), n[Qe] = W(e.substr(t));
});
ie("Hmmss", function(e, n, r) {
  var t = e.length - 4, o = e.length - 2;
  n[Ee] = W(e.substr(0, t)), n[Qe] = W(e.substr(t, 2)), n[gn] = W(e.substr(o));
});
function Fh(e) {
  return (e + "").toLowerCase().charAt(0) === "p";
}
var Vh = /[ap]\.?m?\.?/i, Wh = Lr("Hours", !0);
function Xh(e, n, r) {
  return e > 11 ? r ? "pm" : "PM" : r ? "am" : "AM";
}
var Ju = {
  calendar: Pm,
  longDateFormat: xm,
  invalidDate: Bm,
  ordinal: Fm,
  dayOfMonthOrdinalParse: Vm,
  relativeTime: Xm,
  months: ih,
  monthsShort: Bu,
  week: Eh,
  weekdays: Ah,
  weekdaysMin: Sh,
  weekdaysShort: Ku,
  meridiemParse: Vh
}, ue = {}, Yr = {}, ut;
function Yh(e, n) {
  var r, t = Math.min(e.length, n.length);
  for (r = 0; r < t; r += 1)
    if (e[r] !== n[r])
      return r;
  return t;
}
function bs(e) {
  return e && e.toLowerCase().replace("_", "-");
}
function Kh(e) {
  for (var n = 0, r, t, o, i; n < e.length; ) {
    for (i = bs(e[n]).split("-"), r = i.length, t = bs(e[n + 1]), t = t ? t.split("-") : null; r > 0; ) {
      if (o = ei(i.slice(0, r).join("-")), o)
        return o;
      if (t && t.length >= r && Yh(i, t) >= r - 1)
        break;
      r--;
    }
    n++;
  }
  return ut;
}
function $h(e) {
  return e.match("^[^/\\\\]*$") != null;
}
function ei(e) {
  var n = null, r;
  if (ue[e] === void 0 && typeof module < "u" && module && module.exports && $h(e))
    try {
      n = ut._abbr, r = Dm, r("./locale/" + e), Kn(n);
    } catch {
      ue[e] = null;
    }
  return ue[e];
}
function Kn(e, n) {
  var r;
  return e && (Le(n) ? r = wn(e) : r = ya(e, n), r ? ut = r : typeof console < "u" && console.warn && console.warn(
    "Locale " + e + " not found. Did you forget to load it?"
  )), ut._abbr;
}
function ya(e, n) {
  if (n !== null) {
    var r, t = Ju;
    if (n.abbr = e, ue[e] != null)
      Hu(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ), t = ue[e]._config;
    else if (n.parentLocale != null)
      if (ue[n.parentLocale] != null)
        t = ue[n.parentLocale]._config;
      else if (r = ei(n.parentLocale), r != null)
        t = r._config;
      else
        return Yr[n.parentLocale] || (Yr[n.parentLocale] = []), Yr[n.parentLocale].push({
          name: e,
          config: n
        }), null;
    return ue[e] = new Aa(Vi(t, n)), Yr[e] && Yr[e].forEach(function(o) {
      ya(o.name, o.config);
    }), Kn(e), ue[e];
  } else
    return delete ue[e], null;
}
function zh(e, n) {
  if (n != null) {
    var r, t, o = Ju;
    ue[e] != null && ue[e].parentLocale != null ? ue[e].set(Vi(ue[e]._config, n)) : (t = ei(e), t != null && (o = t._config), n = Vi(o, n), t == null && (n.abbr = e), r = new Aa(n), r.parentLocale = ue[e], ue[e] = r), Kn(e);
  } else
    ue[e] != null && (ue[e].parentLocale != null ? (ue[e] = ue[e].parentLocale, e === Kn() && Kn(e)) : ue[e] != null && delete ue[e]);
  return ue[e];
}
function wn(e) {
  var n;
  if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
    return ut;
  if (!tn(e)) {
    if (n = ei(e), n)
      return n;
    e = [e];
  }
  return Kh(e);
}
function Jh() {
  return Wi(ue);
}
function Pa(e) {
  var n, r = e._a;
  return r && j(e).overflow === -2 && (n = r[In] < 0 || r[In] > 11 ? In : r[_n] < 1 || r[_n] > Qo(r[Pe], r[In]) ? _n : r[Ee] < 0 || r[Ee] > 24 || r[Ee] === 24 && (r[Qe] !== 0 || r[gn] !== 0 || r[sr] !== 0) ? Ee : r[Qe] < 0 || r[Qe] > 59 ? Qe : r[gn] < 0 || r[gn] > 59 ? gn : r[sr] < 0 || r[sr] > 999 ? sr : -1, j(e)._overflowDayOfYear && (n < Pe || n > _n) && (n = _n), j(e)._overflowWeeks && n === -1 && (n = rh), j(e)._overflowWeekday && n === -1 && (n = th), j(e).overflow = n), e;
}
var qh = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Zh = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Qh = /Z|[+-]\d\d(?::?\d\d)?/, Yt = [
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
], Oi = [
  ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
  ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
  ["HH:mm:ss", /\d\d:\d\d:\d\d/],
  ["HH:mm", /\d\d:\d\d/],
  ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
  ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
  ["HHmmss", /\d\d\d\d\d\d/],
  ["HHmm", /\d\d\d\d/],
  ["HH", /\d\d/]
], ep = /^\/?Date\((-?\d+)/i, np = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, rp = {
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
function qu(e) {
  var n, r, t = e._i, o = qh.exec(t) || Zh.exec(t), i, a, s, _, u = Yt.length, c = Oi.length;
  if (o) {
    for (j(e).iso = !0, n = 0, r = u; n < r; n++)
      if (Yt[n][1].exec(o[1])) {
        a = Yt[n][0], i = Yt[n][2] !== !1;
        break;
      }
    if (a == null) {
      e._isValid = !1;
      return;
    }
    if (o[3]) {
      for (n = 0, r = c; n < r; n++)
        if (Oi[n][1].exec(o[3])) {
          s = (o[2] || " ") + Oi[n][0];
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
      if (Qh.exec(o[4]))
        _ = "Z";
      else {
        e._isValid = !1;
        return;
      }
    e._f = a + (s || "") + (_ || ""), Ma(e);
  } else
    e._isValid = !1;
}
function tp(e, n, r, t, o, i) {
  var a = [
    op(e),
    Bu.indexOf(n),
    parseInt(r, 10),
    parseInt(t, 10),
    parseInt(o, 10)
  ];
  return i && a.push(parseInt(i, 10)), a;
}
function op(e) {
  var n = parseInt(e, 10);
  return n <= 49 ? 2e3 + n : n <= 999 ? 1900 + n : n;
}
function ip(e) {
  return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function ap(e, n, r) {
  if (e) {
    var t = Ku.indexOf(e), o = new Date(
      n[0],
      n[1],
      n[2]
    ).getDay();
    if (t !== o)
      return j(r).weekdayMismatch = !0, r._isValid = !1, !1;
  }
  return !0;
}
function sp(e, n, r) {
  if (e)
    return rp[e];
  if (n)
    return 0;
  var t = parseInt(r, 10), o = t % 100, i = (t - o) / 100;
  return i * 60 + o;
}
function Zu(e) {
  var n = np.exec(ip(e._i)), r;
  if (n) {
    if (r = tp(
      n[4],
      n[3],
      n[2],
      n[5],
      n[6],
      n[7]
    ), !ap(n[1], r, e))
      return;
    e._a = r, e._tzm = sp(n[8], n[9], n[10]), e._d = st.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), j(e).rfc2822 = !0;
  } else
    e._isValid = !1;
}
function _p(e) {
  var n = ep.exec(e._i);
  if (n !== null) {
    e._d = /* @__PURE__ */ new Date(+n[1]);
    return;
  }
  if (qu(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  if (Zu(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  e._strict ? e._isValid = !1 : A.createFromInputFallback(e);
}
A.createFromInputFallback = Je(
  "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  function(e) {
    e._d = /* @__PURE__ */ new Date(e._i + (e._useUTC ? " UTC" : ""));
  }
);
function Tr(e, n, r) {
  return e ?? n ?? r;
}
function up(e) {
  var n = new Date(A.now());
  return e._useUTC ? [
    n.getUTCFullYear(),
    n.getUTCMonth(),
    n.getUTCDate()
  ] : [n.getFullYear(), n.getMonth(), n.getDate()];
}
function wa(e) {
  var n, r, t = [], o, i, a;
  if (!e._d) {
    for (o = up(e), e._w && e._a[_n] == null && e._a[In] == null && lp(e), e._dayOfYear != null && (a = Tr(e._a[Pe], o[Pe]), (e._dayOfYear > Qr(a) || e._dayOfYear === 0) && (j(e)._overflowDayOfYear = !0), r = st(a, 0, e._dayOfYear), e._a[In] = r.getUTCMonth(), e._a[_n] = r.getUTCDate()), n = 0; n < 3 && e._a[n] == null; ++n)
      e._a[n] = t[n] = o[n];
    for (; n < 7; n++)
      e._a[n] = t[n] = e._a[n] == null ? n === 2 ? 1 : 0 : e._a[n];
    e._a[Ee] === 24 && e._a[Qe] === 0 && e._a[gn] === 0 && e._a[sr] === 0 && (e._nextDay = !0, e._a[Ee] = 0), e._d = (e._useUTC ? st : fh).apply(
      null,
      t
    ), i = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[Ee] = 24), e._w && typeof e._w.d < "u" && e._w.d !== i && (j(e).weekdayMismatch = !0);
  }
}
function lp(e) {
  var n, r, t, o, i, a, s, _, u;
  n = e._w, n.GG != null || n.W != null || n.E != null ? (i = 1, a = 4, r = Tr(
    n.GG,
    e._a[Pe],
    _t(se(), 1, 4).year
  ), t = Tr(n.W, 1), o = Tr(n.E, 1), (o < 1 || o > 7) && (_ = !0)) : (i = e._locale._week.dow, a = e._locale._week.doy, u = _t(se(), i, a), r = Tr(n.gg, e._a[Pe], u.year), t = Tr(n.w, u.week), n.d != null ? (o = n.d, (o < 0 || o > 6) && (_ = !0)) : n.e != null ? (o = n.e + i, (n.e < 0 || n.e > 6) && (_ = !0)) : o = i), t < 1 || t > Gn(r, i, a) ? j(e)._overflowWeeks = !0 : _ != null ? j(e)._overflowWeekday = !0 : (s = Yu(r, t, o, i, a), e._a[Pe] = s.year, e._dayOfYear = s.dayOfYear);
}
A.ISO_8601 = function() {
};
A.RFC_2822 = function() {
};
function Ma(e) {
  if (e._f === A.ISO_8601) {
    qu(e);
    return;
  }
  if (e._f === A.RFC_2822) {
    Zu(e);
    return;
  }
  e._a = [], j(e).empty = !0;
  var n = "" + e._i, r, t, o, i, a, s = n.length, _ = 0, u, c;
  for (o = yu(e._f, e._locale).match(Sa) || [], c = o.length, r = 0; r < c; r++)
    i = o[r], t = (n.match(Qm(i, e)) || [])[0], t && (a = n.substr(0, n.indexOf(t)), a.length > 0 && j(e).unusedInput.push(a), n = n.slice(
      n.indexOf(t) + t.length
    ), _ += t.length), gr[i] ? (t ? j(e).empty = !1 : j(e).unusedTokens.push(i), nh(i, t, e)) : e._strict && !t && j(e).unusedTokens.push(i);
  j(e).charsLeftOver = s - _, n.length > 0 && j(e).unusedInput.push(n), e._a[Ee] <= 12 && j(e).bigHour === !0 && e._a[Ee] > 0 && (j(e).bigHour = void 0), j(e).parsedDateParts = e._a.slice(0), j(e).meridiem = e._meridiem, e._a[Ee] = cp(
    e._locale,
    e._a[Ee],
    e._meridiem
  ), u = j(e).era, u !== null && (e._a[Pe] = e._locale.erasConvertYear(u, e._a[Pe])), wa(e), Pa(e);
}
function cp(e, n, r) {
  var t;
  return r == null ? n : e.meridiemHour != null ? e.meridiemHour(n, r) : (e.isPM != null && (t = e.isPM(r), t && n < 12 && (n += 12), !t && n === 12 && (n = 0)), n);
}
function dp(e) {
  var n, r, t, o, i, a, s = !1, _ = e._f.length;
  if (_ === 0) {
    j(e).invalidFormat = !0, e._d = /* @__PURE__ */ new Date(NaN);
    return;
  }
  for (o = 0; o < _; o++)
    i = 0, a = !1, n = ga({}, e), e._useUTC != null && (n._useUTC = e._useUTC), n._f = e._f[o], Ma(n), Ia(n) && (a = !0), i += j(n).charsLeftOver, i += j(n).unusedTokens.length * 10, j(n).score = i, s ? i < t && (t = i, r = n) : (t == null || i < t || a) && (t = i, r = n, a && (s = !0));
  Vn(e, r || n);
}
function mp(e) {
  if (!e._d) {
    var n = Ga(e._i), r = n.day === void 0 ? n.date : n.day;
    e._a = Du(
      [n.year, n.month, r, n.hour, n.minute, n.second, n.millisecond],
      function(t) {
        return t && parseInt(t, 10);
      }
    ), wa(e);
  }
}
function hp(e) {
  var n = new Ct(Pa(Qu(e)));
  return n._nextDay && (n.add(1, "d"), n._nextDay = void 0), n;
}
function Qu(e) {
  var n = e._i, r = e._f;
  return e._locale = e._locale || wn(e._l), n === null || r === void 0 && n === "" ? Yo({ nullInput: !0 }) : (typeof n == "string" && (e._i = n = e._locale.preparse(n)), on(n) ? new Ct(Pa(n)) : (vt(n) ? e._d = n : tn(r) ? dp(e) : r ? Ma(e) : pp(e), Ia(e) || (e._d = null), e));
}
function pp(e) {
  var n = e._i;
  Le(n) ? e._d = new Date(A.now()) : vt(n) ? e._d = new Date(n.valueOf()) : typeof n == "string" ? _p(e) : tn(n) ? (e._a = Du(n.slice(0), function(r) {
    return parseInt(r, 10);
  }), wa(e)) : lr(n) ? mp(e) : Un(n) ? e._d = new Date(n) : A.createFromInputFallback(e);
}
function el(e, n, r, t, o) {
  var i = {};
  return (n === !0 || n === !1) && (t = n, n = void 0), (r === !0 || r === !1) && (t = r, r = void 0), (lr(e) && Na(e) || tn(e) && e.length === 0) && (e = void 0), i._isAMomentObject = !0, i._useUTC = i._isUTC = o, i._l = r, i._i = e, i._f = n, i._strict = t, hp(i);
}
function se(e, n, r, t) {
  return el(e, n, r, t, !1);
}
var fp = Je(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = se.apply(null, arguments);
    return this.isValid() && e.isValid() ? e < this ? this : e : Yo();
  }
), Tp = Je(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = se.apply(null, arguments);
    return this.isValid() && e.isValid() ? e > this ? this : e : Yo();
  }
);
function nl(e, n) {
  var r, t;
  if (n.length === 1 && tn(n[0]) && (n = n[0]), !n.length)
    return se();
  for (r = n[0], t = 1; t < n.length; ++t)
    (!n[t].isValid() || n[t][e](r)) && (r = n[t]);
  return r;
}
function Ep() {
  var e = [].slice.call(arguments, 0);
  return nl("isBefore", e);
}
function bp() {
  var e = [].slice.call(arguments, 0);
  return nl("isAfter", e);
}
var Op = function() {
  return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
}, Kr = [
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
function Rp(e) {
  var n, r = !1, t, o = Kr.length;
  for (n in e)
    if (q(e, n) && !(Te.call(Kr, n) !== -1 && (e[n] == null || !isNaN(e[n]))))
      return !1;
  for (t = 0; t < o; ++t)
    if (e[Kr[t]]) {
      if (r)
        return !1;
      parseFloat(e[Kr[t]]) !== W(e[Kr[t]]) && (r = !0);
    }
  return !0;
}
function Np() {
  return this._isValid;
}
function Ip() {
  return sn(NaN);
}
function ni(e) {
  var n = Ga(e), r = n.year || 0, t = n.quarter || 0, o = n.month || 0, i = n.week || n.isoWeek || 0, a = n.day || 0, s = n.hour || 0, _ = n.minute || 0, u = n.second || 0, c = n.millisecond || 0;
  this._isValid = Rp(n), this._milliseconds = +c + u * 1e3 + // 1000
  _ * 6e4 + // 1000 * 60
  s * 1e3 * 60 * 60, this._days = +a + i * 7, this._months = +o + t * 3 + r * 12, this._data = {}, this._locale = wn(), this._bubble();
}
function oo(e) {
  return e instanceof ni;
}
function Yi(e) {
  return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
}
function gp(e, n, r) {
  var t = Math.min(e.length, n.length), o = Math.abs(e.length - n.length), i = 0, a;
  for (a = 0; a < t; a++)
    (r && e[a] !== n[a] || !r && W(e[a]) !== W(n[a])) && i++;
  return i + o;
}
function rl(e, n) {
  y(e, 0, 0, function() {
    var r = this.utcOffset(), t = "+";
    return r < 0 && (r = -r, t = "-"), t + hn(~~(r / 60), 2) + n + hn(~~r % 60, 2);
  });
}
rl("Z", ":");
rl("ZZ", "");
G("Z", Zo);
G("ZZ", Zo);
ie(["Z", "ZZ"], function(e, n, r) {
  r._useUTC = !0, r._tzm = ka(Zo, e);
});
var Ap = /([\+\-]|\d\d)/gi;
function ka(e, n) {
  var r = (n || "").match(e), t, o, i;
  return r === null ? null : (t = r[r.length - 1] || [], o = (t + "").match(Ap) || ["-", 0, 0], i = +(o[1] * 60) + W(o[2]), i === 0 ? 0 : o[0] === "+" ? i : -i);
}
function xa(e, n) {
  var r, t;
  return n._isUTC ? (r = n.clone(), t = (on(e) || vt(e) ? e.valueOf() : se(e).valueOf()) - r.valueOf(), r._d.setTime(r._d.valueOf() + t), A.updateOffset(r, !1), r) : se(e).local();
}
function Ki(e) {
  return -Math.round(e._d.getTimezoneOffset());
}
A.updateOffset = function() {
};
function Sp(e, n, r) {
  var t = this._offset || 0, o;
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    if (typeof e == "string") {
      if (e = ka(Zo, e), e === null)
        return this;
    } else
      Math.abs(e) < 16 && !r && (e = e * 60);
    return !this._isUTC && n && (o = Ki(this)), this._offset = e, this._isUTC = !0, o != null && this.add(o, "m"), t !== e && (!n || this._changeInProgress ? il(
      this,
      sn(e - t, "m"),
      1,
      !1
    ) : this._changeInProgress || (this._changeInProgress = !0, A.updateOffset(this, !0), this._changeInProgress = null)), this;
  } else
    return this._isUTC ? t : Ki(this);
}
function Gp(e, n) {
  return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, n), this) : -this.utcOffset();
}
function vp(e) {
  return this.utcOffset(0, e);
}
function Cp(e) {
  return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Ki(this), "m")), this;
}
function Dp() {
  if (this._tzm != null)
    this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var e = ka(qm, this._i);
    e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
  }
  return this;
}
function Up(e) {
  return this.isValid() ? (e = e ? se(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1;
}
function Hp() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function yp() {
  if (!Le(this._isDSTShifted))
    return this._isDSTShifted;
  var e = {}, n;
  return ga(e, this), e = Qu(e), e._a ? (n = e._isUTC ? pn(e._a) : se(e._a), this._isDSTShifted = this.isValid() && gp(e._a, n.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function Pp() {
  return this.isValid() ? !this._isUTC : !1;
}
function wp() {
  return this.isValid() ? this._isUTC : !1;
}
function tl() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var Mp = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, kp = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function sn(e, n) {
  var r = e, t = null, o, i, a;
  return oo(e) ? r = {
    ms: e._milliseconds,
    d: e._days,
    M: e._months
  } : Un(e) || !isNaN(+e) ? (r = {}, n ? r[n] = +e : r.milliseconds = +e) : (t = Mp.exec(e)) ? (o = t[1] === "-" ? -1 : 1, r = {
    y: 0,
    d: W(t[_n]) * o,
    h: W(t[Ee]) * o,
    m: W(t[Qe]) * o,
    s: W(t[gn]) * o,
    ms: W(Yi(t[sr] * 1e3)) * o
    // the millisecond decimal point is included in the match
  }) : (t = kp.exec(e)) ? (o = t[1] === "-" ? -1 : 1, r = {
    y: ir(t[2], o),
    M: ir(t[3], o),
    w: ir(t[4], o),
    d: ir(t[5], o),
    h: ir(t[6], o),
    m: ir(t[7], o),
    s: ir(t[8], o)
  }) : r == null ? r = {} : typeof r == "object" && ("from" in r || "to" in r) && (a = xp(
    se(r.from),
    se(r.to)
  ), r = {}, r.ms = a.milliseconds, r.M = a.months), i = new ni(r), oo(e) && q(e, "_locale") && (i._locale = e._locale), oo(e) && q(e, "_isValid") && (i._isValid = e._isValid), i;
}
sn.fn = ni.prototype;
sn.invalid = Ip;
function ir(e, n) {
  var r = e && parseFloat(e.replace(",", "."));
  return (isNaN(r) ? 0 : r) * n;
}
function Os(e, n) {
  var r = {};
  return r.months = n.month() - e.month() + (n.year() - e.year()) * 12, e.clone().add(r.months, "M").isAfter(n) && --r.months, r.milliseconds = +n - +e.clone().add(r.months, "M"), r;
}
function xp(e, n) {
  var r;
  return e.isValid() && n.isValid() ? (n = xa(n, e), e.isBefore(n) ? r = Os(e, n) : (r = Os(n, e), r.milliseconds = -r.milliseconds, r.months = -r.months), r) : { milliseconds: 0, months: 0 };
}
function ol(e, n) {
  return function(r, t) {
    var o, i;
    return t !== null && !isNaN(+t) && (Hu(
      n,
      "moment()." + n + "(period, number) is deprecated. Please use moment()." + n + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
    ), i = r, r = t, t = i), o = sn(r, t), il(this, o, e), this;
  };
}
function il(e, n, r, t) {
  var o = n._milliseconds, i = Yi(n._days), a = Yi(n._months);
  e.isValid() && (t = t ?? !0, a && Fu(e, So(e, "Month") + a * r), i && wu(e, "Date", So(e, "Date") + i * r), o && e._d.setTime(e._d.valueOf() + o * r), t && A.updateOffset(e, i || a));
}
var Lp = ol(1, "add"), Bp = ol(-1, "subtract");
function al(e) {
  return typeof e == "string" || e instanceof String;
}
function jp(e) {
  return on(e) || vt(e) || al(e) || Un(e) || Vp(e) || Fp(e) || e === null || e === void 0;
}
function Fp(e) {
  var n = lr(e) && !Na(e), r = !1, t = [
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
  ], o, i, a = t.length;
  for (o = 0; o < a; o += 1)
    i = t[o], r = r || q(e, i);
  return n && r;
}
function Vp(e) {
  var n = tn(e), r = !1;
  return n && (r = e.filter(function(t) {
    return !Un(t) && al(e);
  }).length === 0), n && r;
}
function Wp(e) {
  var n = lr(e) && !Na(e), r = !1, t = [
    "sameDay",
    "nextDay",
    "lastDay",
    "nextWeek",
    "lastWeek",
    "sameElse"
  ], o, i;
  for (o = 0; o < t.length; o += 1)
    i = t[o], r = r || q(e, i);
  return n && r;
}
function Xp(e, n) {
  var r = e.diff(n, "days", !0);
  return r < -6 ? "sameElse" : r < -1 ? "lastWeek" : r < 0 ? "lastDay" : r < 1 ? "sameDay" : r < 2 ? "nextDay" : r < 7 ? "nextWeek" : "sameElse";
}
function Yp(e, n) {
  arguments.length === 1 && (arguments[0] ? jp(arguments[0]) ? (e = arguments[0], n = void 0) : Wp(arguments[0]) && (n = arguments[0], e = void 0) : (e = void 0, n = void 0));
  var r = e || se(), t = xa(r, this).startOf("day"), o = A.calendarFormat(this, t) || "sameElse", i = n && (fn(n[o]) ? n[o].call(this, r) : n[o]);
  return this.format(
    i || this.localeData().calendar(o, this, se(r))
  );
}
function Kp() {
  return new Ct(this);
}
function $p(e, n) {
  var r = on(e) ? e : se(e);
  return this.isValid() && r.isValid() ? (n = qe(n) || "millisecond", n === "millisecond" ? this.valueOf() > r.valueOf() : r.valueOf() < this.clone().startOf(n).valueOf()) : !1;
}
function zp(e, n) {
  var r = on(e) ? e : se(e);
  return this.isValid() && r.isValid() ? (n = qe(n) || "millisecond", n === "millisecond" ? this.valueOf() < r.valueOf() : this.clone().endOf(n).valueOf() < r.valueOf()) : !1;
}
function Jp(e, n, r, t) {
  var o = on(e) ? e : se(e), i = on(n) ? n : se(n);
  return this.isValid() && o.isValid() && i.isValid() ? (t = t || "()", (t[0] === "(" ? this.isAfter(o, r) : !this.isBefore(o, r)) && (t[1] === ")" ? this.isBefore(i, r) : !this.isAfter(i, r))) : !1;
}
function qp(e, n) {
  var r = on(e) ? e : se(e), t;
  return this.isValid() && r.isValid() ? (n = qe(n) || "millisecond", n === "millisecond" ? this.valueOf() === r.valueOf() : (t = r.valueOf(), this.clone().startOf(n).valueOf() <= t && t <= this.clone().endOf(n).valueOf())) : !1;
}
function Zp(e, n) {
  return this.isSame(e, n) || this.isAfter(e, n);
}
function Qp(e, n) {
  return this.isSame(e, n) || this.isBefore(e, n);
}
function ef(e, n, r) {
  var t, o, i;
  if (!this.isValid())
    return NaN;
  if (t = xa(e, this), !t.isValid())
    return NaN;
  switch (o = (t.utcOffset() - this.utcOffset()) * 6e4, n = qe(n), n) {
    case "year":
      i = io(this, t) / 12;
      break;
    case "month":
      i = io(this, t);
      break;
    case "quarter":
      i = io(this, t) / 3;
      break;
    case "second":
      i = (this - t) / 1e3;
      break;
    case "minute":
      i = (this - t) / 6e4;
      break;
    case "hour":
      i = (this - t) / 36e5;
      break;
    case "day":
      i = (this - t - o) / 864e5;
      break;
    case "week":
      i = (this - t - o) / 6048e5;
      break;
    default:
      i = this - t;
  }
  return r ? i : Ye(i);
}
function io(e, n) {
  if (e.date() < n.date())
    return -io(n, e);
  var r = (n.year() - e.year()) * 12 + (n.month() - e.month()), t = e.clone().add(r, "months"), o, i;
  return n - t < 0 ? (o = e.clone().add(r - 1, "months"), i = (n - t) / (t - o)) : (o = e.clone().add(r + 1, "months"), i = (n - t) / (o - t)), -(r + i) || 0;
}
A.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
A.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function nf() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function rf(e) {
  if (!this.isValid())
    return null;
  var n = e !== !0, r = n ? this.clone().utc() : this;
  return r.year() < 0 || r.year() > 9999 ? to(
    r,
    n ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
  ) : fn(Date.prototype.toISOString) ? n ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", to(r, "Z")) : to(
    r,
    n ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
  );
}
function tf() {
  if (!this.isValid())
    return "moment.invalid(/* " + this._i + " */)";
  var e = "moment", n = "", r, t, o, i;
  return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", n = "Z"), r = "[" + e + '("]', t = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", o = "-MM-DD[T]HH:mm:ss.SSS", i = n + '[")]', this.format(r + t + o + i);
}
function of(e) {
  e || (e = this.isUtc() ? A.defaultFormatUtc : A.defaultFormat);
  var n = to(this, e);
  return this.localeData().postformat(n);
}
function af(e, n) {
  return this.isValid() && (on(e) && e.isValid() || se(e).isValid()) ? sn({ to: this, from: e }).locale(this.locale()).humanize(!n) : this.localeData().invalidDate();
}
function sf(e) {
  return this.from(se(), e);
}
function _f(e, n) {
  return this.isValid() && (on(e) && e.isValid() || se(e).isValid()) ? sn({ from: this, to: e }).locale(this.locale()).humanize(!n) : this.localeData().invalidDate();
}
function uf(e) {
  return this.to(se(), e);
}
function sl(e) {
  var n;
  return e === void 0 ? this._locale._abbr : (n = wn(e), n != null && (this._locale = n), this);
}
var _l = Je(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function(e) {
    return e === void 0 ? this.localeData() : this.locale(e);
  }
);
function ul() {
  return this._locale;
}
var Co = 1e3, Ar = 60 * Co, Do = 60 * Ar, ll = (365 * 400 + 97) * 24 * Do;
function Sr(e, n) {
  return (e % n + n) % n;
}
function cl(e, n, r) {
  return e < 100 && e >= 0 ? new Date(e + 400, n, r) - ll : new Date(e, n, r).valueOf();
}
function dl(e, n, r) {
  return e < 100 && e >= 0 ? Date.UTC(e + 400, n, r) - ll : Date.UTC(e, n, r);
}
function lf(e) {
  var n, r;
  if (e = qe(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (r = this._isUTC ? dl : cl, e) {
    case "year":
      n = r(this.year(), 0, 1);
      break;
    case "quarter":
      n = r(
        this.year(),
        this.month() - this.month() % 3,
        1
      );
      break;
    case "month":
      n = r(this.year(), this.month(), 1);
      break;
    case "week":
      n = r(
        this.year(),
        this.month(),
        this.date() - this.weekday()
      );
      break;
    case "isoWeek":
      n = r(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1)
      );
      break;
    case "day":
    case "date":
      n = r(this.year(), this.month(), this.date());
      break;
    case "hour":
      n = this._d.valueOf(), n -= Sr(
        n + (this._isUTC ? 0 : this.utcOffset() * Ar),
        Do
      );
      break;
    case "minute":
      n = this._d.valueOf(), n -= Sr(n, Ar);
      break;
    case "second":
      n = this._d.valueOf(), n -= Sr(n, Co);
      break;
  }
  return this._d.setTime(n), A.updateOffset(this, !0), this;
}
function cf(e) {
  var n, r;
  if (e = qe(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (r = this._isUTC ? dl : cl, e) {
    case "year":
      n = r(this.year() + 1, 0, 1) - 1;
      break;
    case "quarter":
      n = r(
        this.year(),
        this.month() - this.month() % 3 + 3,
        1
      ) - 1;
      break;
    case "month":
      n = r(this.year(), this.month() + 1, 1) - 1;
      break;
    case "week":
      n = r(
        this.year(),
        this.month(),
        this.date() - this.weekday() + 7
      ) - 1;
      break;
    case "isoWeek":
      n = r(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1) + 7
      ) - 1;
      break;
    case "day":
    case "date":
      n = r(this.year(), this.month(), this.date() + 1) - 1;
      break;
    case "hour":
      n = this._d.valueOf(), n += Do - Sr(
        n + (this._isUTC ? 0 : this.utcOffset() * Ar),
        Do
      ) - 1;
      break;
    case "minute":
      n = this._d.valueOf(), n += Ar - Sr(n, Ar) - 1;
      break;
    case "second":
      n = this._d.valueOf(), n += Co - Sr(n, Co) - 1;
      break;
  }
  return this._d.setTime(n), A.updateOffset(this, !0), this;
}
function df() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function mf() {
  return Math.floor(this.valueOf() / 1e3);
}
function hf() {
  return new Date(this.valueOf());
}
function pf() {
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
function ff() {
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
function Tf() {
  return this.isValid() ? this.toISOString() : null;
}
function Ef() {
  return Ia(this);
}
function bf() {
  return Vn({}, j(this));
}
function Of() {
  return j(this).overflow;
}
function Rf() {
  return {
    input: this._i,
    format: this._f,
    locale: this._locale,
    isUTC: this._isUTC,
    strict: this._strict
  };
}
y("N", 0, 0, "eraAbbr");
y("NN", 0, 0, "eraAbbr");
y("NNN", 0, 0, "eraAbbr");
y("NNNN", 0, 0, "eraName");
y("NNNNN", 0, 0, "eraNarrow");
y("y", ["y", 1], "yo", "eraYear");
y("y", ["yy", 2], 0, "eraYear");
y("y", ["yyy", 3], 0, "eraYear");
y("y", ["yyyy", 4], 0, "eraYear");
G("N", La);
G("NN", La);
G("NNN", La);
G("NNNN", Hf);
G("NNNNN", yf);
ie(
  ["N", "NN", "NNN", "NNNN", "NNNNN"],
  function(e, n, r, t) {
    var o = r._locale.erasParse(e, t, r._strict);
    o ? j(r).era = o : j(r).invalidEra = e;
  }
);
G("y", Br);
G("yy", Br);
G("yyy", Br);
G("yyyy", Br);
G("yo", Pf);
ie(["y", "yy", "yyy", "yyyy"], Pe);
ie(["yo"], function(e, n, r, t) {
  var o;
  r._locale._eraYearOrdinalRegex && (o = e.match(r._locale._eraYearOrdinalRegex)), r._locale.eraYearOrdinalParse ? n[Pe] = r._locale.eraYearOrdinalParse(e, o) : n[Pe] = parseInt(e, 10);
});
function Nf(e, n) {
  var r, t, o, i = this._eras || wn("en")._eras;
  for (r = 0, t = i.length; r < t; ++r) {
    switch (typeof i[r].since) {
      case "string":
        o = A(i[r].since).startOf("day"), i[r].since = o.valueOf();
        break;
    }
    switch (typeof i[r].until) {
      case "undefined":
        i[r].until = 1 / 0;
        break;
      case "string":
        o = A(i[r].until).startOf("day").valueOf(), i[r].until = o.valueOf();
        break;
    }
  }
  return i;
}
function If(e, n, r) {
  var t, o, i = this.eras(), a, s, _;
  for (e = e.toUpperCase(), t = 0, o = i.length; t < o; ++t)
    if (a = i[t].name.toUpperCase(), s = i[t].abbr.toUpperCase(), _ = i[t].narrow.toUpperCase(), r)
      switch (n) {
        case "N":
        case "NN":
        case "NNN":
          if (s === e)
            return i[t];
          break;
        case "NNNN":
          if (a === e)
            return i[t];
          break;
        case "NNNNN":
          if (_ === e)
            return i[t];
          break;
      }
    else if ([a, s, _].indexOf(e) >= 0)
      return i[t];
}
function gf(e, n) {
  var r = e.since <= e.until ? 1 : -1;
  return n === void 0 ? A(e.since).year() : A(e.since).year() + (n - e.offset) * r;
}
function Af() {
  var e, n, r, t = this.localeData().eras();
  for (e = 0, n = t.length; e < n; ++e)
    if (r = this.clone().startOf("day").valueOf(), t[e].since <= r && r <= t[e].until || t[e].until <= r && r <= t[e].since)
      return t[e].name;
  return "";
}
function Sf() {
  var e, n, r, t = this.localeData().eras();
  for (e = 0, n = t.length; e < n; ++e)
    if (r = this.clone().startOf("day").valueOf(), t[e].since <= r && r <= t[e].until || t[e].until <= r && r <= t[e].since)
      return t[e].narrow;
  return "";
}
function Gf() {
  var e, n, r, t = this.localeData().eras();
  for (e = 0, n = t.length; e < n; ++e)
    if (r = this.clone().startOf("day").valueOf(), t[e].since <= r && r <= t[e].until || t[e].until <= r && r <= t[e].since)
      return t[e].abbr;
  return "";
}
function vf() {
  var e, n, r, t, o = this.localeData().eras();
  for (e = 0, n = o.length; e < n; ++e)
    if (r = o[e].since <= o[e].until ? 1 : -1, t = this.clone().startOf("day").valueOf(), o[e].since <= t && t <= o[e].until || o[e].until <= t && t <= o[e].since)
      return (this.year() - A(o[e].since).year()) * r + o[e].offset;
  return this.year();
}
function Cf(e) {
  return q(this, "_erasNameRegex") || Ba.call(this), e ? this._erasNameRegex : this._erasRegex;
}
function Df(e) {
  return q(this, "_erasAbbrRegex") || Ba.call(this), e ? this._erasAbbrRegex : this._erasRegex;
}
function Uf(e) {
  return q(this, "_erasNarrowRegex") || Ba.call(this), e ? this._erasNarrowRegex : this._erasRegex;
}
function La(e, n) {
  return n.erasAbbrRegex(e);
}
function Hf(e, n) {
  return n.erasNameRegex(e);
}
function yf(e, n) {
  return n.erasNarrowRegex(e);
}
function Pf(e, n) {
  return n._eraYearOrdinalRegex || Br;
}
function Ba() {
  var e = [], n = [], r = [], t = [], o, i, a = this.eras();
  for (o = 0, i = a.length; o < i; ++o)
    n.push(We(a[o].name)), e.push(We(a[o].abbr)), r.push(We(a[o].narrow)), t.push(We(a[o].name)), t.push(We(a[o].abbr)), t.push(We(a[o].narrow));
  this._erasRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + n.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp(
    "^(" + r.join("|") + ")",
    "i"
  );
}
y(0, ["gg", 2], 0, function() {
  return this.weekYear() % 100;
});
y(0, ["GG", 2], 0, function() {
  return this.isoWeekYear() % 100;
});
function ri(e, n) {
  y(0, [e, e.length], 0, n);
}
ri("gggg", "weekYear");
ri("ggggg", "weekYear");
ri("GGGG", "isoWeekYear");
ri("GGGGG", "isoWeekYear");
we("weekYear", "gg");
we("isoWeekYear", "GG");
Me("weekYear", 1);
Me("isoWeekYear", 1);
G("G", qo);
G("g", qo);
G("GG", _e, Xe);
G("gg", _e, Xe);
G("GGGG", Ca, va);
G("gggg", Ca, va);
G("GGGGG", Jo, $o);
G("ggggg", Jo, $o);
Ut(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(e, n, r, t) {
    n[t.substr(0, 2)] = W(e);
  }
);
Ut(["gg", "GG"], function(e, n, r, t) {
  n[t] = A.parseTwoDigitYear(e);
});
function wf(e) {
  return ml.call(
    this,
    e,
    this.week(),
    this.weekday(),
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function Mf(e) {
  return ml.call(
    this,
    e,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function kf() {
  return Gn(this.year(), 1, 4);
}
function xf() {
  return Gn(this.isoWeekYear(), 1, 4);
}
function Lf() {
  var e = this.localeData()._week;
  return Gn(this.year(), e.dow, e.doy);
}
function Bf() {
  var e = this.localeData()._week;
  return Gn(this.weekYear(), e.dow, e.doy);
}
function ml(e, n, r, t, o) {
  var i;
  return e == null ? _t(this, t, o).year : (i = Gn(e, t, o), n > i && (n = i), jf.call(this, e, n, r, t, o));
}
function jf(e, n, r, t, o) {
  var i = Yu(e, n, r, t, o), a = st(i.year, 0, i.dayOfYear);
  return this.year(a.getUTCFullYear()), this.month(a.getUTCMonth()), this.date(a.getUTCDate()), this;
}
y("Q", 0, "Qo", "quarter");
we("quarter", "Q");
Me("quarter", 7);
G("Q", Mu);
ie("Q", function(e, n) {
  n[In] = (W(e) - 1) * 3;
});
function Ff(e) {
  return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3);
}
y("D", ["DD", 2], "Do", "date");
we("date", "D");
Me("date", 9);
G("D", _e);
G("DD", _e, Xe);
G("Do", function(e, n) {
  return e ? n._dayOfMonthOrdinalParse || n._ordinalParse : n._dayOfMonthOrdinalParseLenient;
});
ie(["D", "DD"], _n);
ie("Do", function(e, n) {
  n[_n] = W(e.match(_e)[0]);
});
var hl = Lr("Date", !0);
y("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
we("dayOfYear", "DDD");
Me("dayOfYear", 4);
G("DDD", zo);
G("DDDD", ku);
ie(["DDD", "DDDD"], function(e, n, r) {
  r._dayOfYear = W(e);
});
function Vf(e) {
  var n = Math.round(
    (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
  ) + 1;
  return e == null ? n : this.add(e - n, "d");
}
y("m", ["mm", 2], 0, "minute");
we("minute", "m");
Me("minute", 14);
G("m", _e);
G("mm", _e, Xe);
ie(["m", "mm"], Qe);
var Wf = Lr("Minutes", !1);
y("s", ["ss", 2], 0, "second");
we("second", "s");
Me("second", 15);
G("s", _e);
G("ss", _e, Xe);
ie(["s", "ss"], gn);
var Xf = Lr("Seconds", !1);
y("S", 0, 0, function() {
  return ~~(this.millisecond() / 100);
});
y(0, ["SS", 2], 0, function() {
  return ~~(this.millisecond() / 10);
});
y(0, ["SSS", 3], 0, "millisecond");
y(0, ["SSSS", 4], 0, function() {
  return this.millisecond() * 10;
});
y(0, ["SSSSS", 5], 0, function() {
  return this.millisecond() * 100;
});
y(0, ["SSSSSS", 6], 0, function() {
  return this.millisecond() * 1e3;
});
y(0, ["SSSSSSS", 7], 0, function() {
  return this.millisecond() * 1e4;
});
y(0, ["SSSSSSSS", 8], 0, function() {
  return this.millisecond() * 1e5;
});
y(0, ["SSSSSSSSS", 9], 0, function() {
  return this.millisecond() * 1e6;
});
we("millisecond", "ms");
Me("millisecond", 16);
G("S", zo, Mu);
G("SS", zo, Xe);
G("SSS", zo, ku);
var Wn, pl;
for (Wn = "SSSS"; Wn.length <= 9; Wn += "S")
  G(Wn, Br);
function Yf(e, n) {
  n[sr] = W(("0." + e) * 1e3);
}
for (Wn = "S"; Wn.length <= 9; Wn += "S")
  ie(Wn, Yf);
pl = Lr("Milliseconds", !1);
y("z", 0, 0, "zoneAbbr");
y("zz", 0, 0, "zoneName");
function Kf() {
  return this._isUTC ? "UTC" : "";
}
function $f() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var O = Ct.prototype;
O.add = Lp;
O.calendar = Yp;
O.clone = Kp;
O.diff = ef;
O.endOf = cf;
O.format = of;
O.from = af;
O.fromNow = sf;
O.to = _f;
O.toNow = uf;
O.get = zm;
O.invalidAt = Of;
O.isAfter = $p;
O.isBefore = zp;
O.isBetween = Jp;
O.isSame = qp;
O.isSameOrAfter = Zp;
O.isSameOrBefore = Qp;
O.isValid = Ef;
O.lang = _l;
O.locale = sl;
O.localeData = ul;
O.max = Tp;
O.min = fp;
O.parsingFlags = bf;
O.set = Jm;
O.startOf = lf;
O.subtract = Bp;
O.toArray = pf;
O.toObject = ff;
O.toDate = hf;
O.toISOString = rf;
O.inspect = tf;
typeof Symbol < "u" && Symbol.for != null && (O[Symbol.for("nodejs.util.inspect.custom")] = function() {
  return "Moment<" + this.format() + ">";
});
O.toJSON = Tf;
O.toString = nf;
O.unix = mf;
O.valueOf = df;
O.creationData = Rf;
O.eraName = Af;
O.eraNarrow = Sf;
O.eraAbbr = Gf;
O.eraYear = vf;
O.year = Xu;
O.isLeapYear = ph;
O.weekYear = wf;
O.isoWeekYear = Mf;
O.quarter = O.quarters = Ff;
O.month = Vu;
O.daysInMonth = dh;
O.week = O.weeks = Rh;
O.isoWeek = O.isoWeeks = Nh;
O.weeksInYear = Lf;
O.weeksInWeekYear = Bf;
O.isoWeeksInYear = kf;
O.isoWeeksInISOWeekYear = xf;
O.date = hl;
O.day = O.days = wh;
O.weekday = Mh;
O.isoWeekday = kh;
O.dayOfYear = Vf;
O.hour = O.hours = Wh;
O.minute = O.minutes = Wf;
O.second = O.seconds = Xf;
O.millisecond = O.milliseconds = pl;
O.utcOffset = Sp;
O.utc = vp;
O.local = Cp;
O.parseZone = Dp;
O.hasAlignedHourOffset = Up;
O.isDST = Hp;
O.isLocal = Pp;
O.isUtcOffset = wp;
O.isUtc = tl;
O.isUTC = tl;
O.zoneAbbr = Kf;
O.zoneName = $f;
O.dates = Je(
  "dates accessor is deprecated. Use date instead.",
  hl
);
O.months = Je(
  "months accessor is deprecated. Use month instead",
  Vu
);
O.years = Je(
  "years accessor is deprecated. Use year instead",
  Xu
);
O.zone = Je(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  Gp
);
O.isDSTShifted = Je(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  yp
);
function zf(e) {
  return se(e * 1e3);
}
function Jf() {
  return se.apply(null, arguments).parseZone();
}
function fl(e) {
  return e;
}
var Z = Aa.prototype;
Z.calendar = wm;
Z.longDateFormat = Lm;
Z.invalidDate = jm;
Z.ordinal = Wm;
Z.preparse = fl;
Z.postformat = fl;
Z.relativeTime = Ym;
Z.pastFuture = Km;
Z.set = ym;
Z.eras = Nf;
Z.erasParse = If;
Z.erasConvertYear = gf;
Z.erasAbbrRegex = Df;
Z.erasNameRegex = Cf;
Z.erasNarrowRegex = Uf;
Z.months = _h;
Z.monthsShort = uh;
Z.monthsParse = ch;
Z.monthsRegex = hh;
Z.monthsShortRegex = mh;
Z.week = Th;
Z.firstDayOfYear = Oh;
Z.firstDayOfWeek = bh;
Z.weekdays = Dh;
Z.weekdaysMin = Hh;
Z.weekdaysShort = Uh;
Z.weekdaysParse = Ph;
Z.weekdaysRegex = xh;
Z.weekdaysShortRegex = Lh;
Z.weekdaysMinRegex = Bh;
Z.isPM = Fh;
Z.meridiem = Xh;
function Uo(e, n, r, t) {
  var o = wn(), i = pn().set(t, n);
  return o[r](i, e);
}
function Tl(e, n, r) {
  if (Un(e) && (n = e, e = void 0), e = e || "", n != null)
    return Uo(e, n, r, "month");
  var t, o = [];
  for (t = 0; t < 12; t++)
    o[t] = Uo(e, t, r, "month");
  return o;
}
function ja(e, n, r, t) {
  typeof e == "boolean" ? (Un(n) && (r = n, n = void 0), n = n || "") : (n = e, r = n, e = !1, Un(n) && (r = n, n = void 0), n = n || "");
  var o = wn(), i = e ? o._week.dow : 0, a, s = [];
  if (r != null)
    return Uo(n, (r + i) % 7, t, "day");
  for (a = 0; a < 7; a++)
    s[a] = Uo(n, (a + i) % 7, t, "day");
  return s;
}
function qf(e, n) {
  return Tl(e, n, "months");
}
function Zf(e, n) {
  return Tl(e, n, "monthsShort");
}
function Qf(e, n, r) {
  return ja(e, n, r, "weekdays");
}
function eT(e, n, r) {
  return ja(e, n, r, "weekdaysShort");
}
function nT(e, n, r) {
  return ja(e, n, r, "weekdaysMin");
}
Kn("en", {
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
    var n = e % 10, r = W(e % 100 / 10) === 1 ? "th" : n === 1 ? "st" : n === 2 ? "nd" : n === 3 ? "rd" : "th";
    return e + r;
  }
});
A.lang = Je(
  "moment.lang is deprecated. Use moment.locale instead.",
  Kn
);
A.langData = Je(
  "moment.langData is deprecated. Use moment.localeData instead.",
  wn
);
var On = Math.abs;
function rT() {
  var e = this._data;
  return this._milliseconds = On(this._milliseconds), this._days = On(this._days), this._months = On(this._months), e.milliseconds = On(e.milliseconds), e.seconds = On(e.seconds), e.minutes = On(e.minutes), e.hours = On(e.hours), e.months = On(e.months), e.years = On(e.years), this;
}
function El(e, n, r, t) {
  var o = sn(n, r);
  return e._milliseconds += t * o._milliseconds, e._days += t * o._days, e._months += t * o._months, e._bubble();
}
function tT(e, n) {
  return El(this, e, n, 1);
}
function oT(e, n) {
  return El(this, e, n, -1);
}
function Rs(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function iT() {
  var e = this._milliseconds, n = this._days, r = this._months, t = this._data, o, i, a, s, _;
  return e >= 0 && n >= 0 && r >= 0 || e <= 0 && n <= 0 && r <= 0 || (e += Rs($i(r) + n) * 864e5, n = 0, r = 0), t.milliseconds = e % 1e3, o = Ye(e / 1e3), t.seconds = o % 60, i = Ye(o / 60), t.minutes = i % 60, a = Ye(i / 60), t.hours = a % 24, n += Ye(a / 24), _ = Ye(bl(n)), r += _, n -= Rs($i(_)), s = Ye(r / 12), r %= 12, t.days = n, t.months = r, t.years = s, this;
}
function bl(e) {
  return e * 4800 / 146097;
}
function $i(e) {
  return e * 146097 / 4800;
}
function aT(e) {
  if (!this.isValid())
    return NaN;
  var n, r, t = this._milliseconds;
  if (e = qe(e), e === "month" || e === "quarter" || e === "year")
    switch (n = this._days + t / 864e5, r = this._months + bl(n), e) {
      case "month":
        return r;
      case "quarter":
        return r / 3;
      case "year":
        return r / 12;
    }
  else
    switch (n = this._days + Math.round($i(this._months)), e) {
      case "week":
        return n / 7 + t / 6048e5;
      case "day":
        return n + t / 864e5;
      case "hour":
        return n * 24 + t / 36e5;
      case "minute":
        return n * 1440 + t / 6e4;
      case "second":
        return n * 86400 + t / 1e3;
      case "millisecond":
        return Math.floor(n * 864e5) + t;
      default:
        throw new Error("Unknown unit " + e);
    }
}
function sT() {
  return this.isValid() ? this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + W(this._months / 12) * 31536e6 : NaN;
}
function Mn(e) {
  return function() {
    return this.as(e);
  };
}
var _T = Mn("ms"), uT = Mn("s"), lT = Mn("m"), cT = Mn("h"), dT = Mn("d"), mT = Mn("w"), hT = Mn("M"), pT = Mn("Q"), fT = Mn("y");
function TT() {
  return sn(this);
}
function ET(e) {
  return e = qe(e), this.isValid() ? this[e + "s"]() : NaN;
}
function mr(e) {
  return function() {
    return this.isValid() ? this._data[e] : NaN;
  };
}
var bT = mr("milliseconds"), OT = mr("seconds"), RT = mr("minutes"), NT = mr("hours"), IT = mr("days"), gT = mr("months"), AT = mr("years");
function ST() {
  return Ye(this.days() / 7);
}
var Rn = Math.round, Rr = {
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
function GT(e, n, r, t, o) {
  return o.relativeTime(n || 1, !!r, e, t);
}
function vT(e, n, r, t) {
  var o = sn(e).abs(), i = Rn(o.as("s")), a = Rn(o.as("m")), s = Rn(o.as("h")), _ = Rn(o.as("d")), u = Rn(o.as("M")), c = Rn(o.as("w")), l = Rn(o.as("y")), E = i <= r.ss && ["s", i] || i < r.s && ["ss", i] || a <= 1 && ["m"] || a < r.m && ["mm", a] || s <= 1 && ["h"] || s < r.h && ["hh", s] || _ <= 1 && ["d"] || _ < r.d && ["dd", _];
  return r.w != null && (E = E || c <= 1 && ["w"] || c < r.w && ["ww", c]), E = E || u <= 1 && ["M"] || u < r.M && ["MM", u] || l <= 1 && ["y"] || ["yy", l], E[2] = n, E[3] = +e > 0, E[4] = t, GT.apply(null, E);
}
function CT(e) {
  return e === void 0 ? Rn : typeof e == "function" ? (Rn = e, !0) : !1;
}
function DT(e, n) {
  return Rr[e] === void 0 ? !1 : n === void 0 ? Rr[e] : (Rr[e] = n, e === "s" && (Rr.ss = n - 1), !0);
}
function UT(e, n) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var r = !1, t = Rr, o, i;
  return typeof e == "object" && (n = e, e = !1), typeof e == "boolean" && (r = e), typeof n == "object" && (t = Object.assign({}, Rr, n), n.s != null && n.ss == null && (t.ss = n.s - 1)), o = this.localeData(), i = vT(this, !r, t, o), r && (i = o.pastFuture(+this, i)), o.postformat(i);
}
var Ri = Math.abs;
function pr(e) {
  return (e > 0) - (e < 0) || +e;
}
function ti() {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var e = Ri(this._milliseconds) / 1e3, n = Ri(this._days), r = Ri(this._months), t, o, i, a, s = this.asSeconds(), _, u, c, l;
  return s ? (t = Ye(e / 60), o = Ye(t / 60), e %= 60, t %= 60, i = Ye(r / 12), r %= 12, a = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", _ = s < 0 ? "-" : "", u = pr(this._months) !== pr(s) ? "-" : "", c = pr(this._days) !== pr(s) ? "-" : "", l = pr(this._milliseconds) !== pr(s) ? "-" : "", _ + "P" + (i ? u + i + "Y" : "") + (r ? u + r + "M" : "") + (n ? c + n + "D" : "") + (o || t || e ? "T" : "") + (o ? l + o + "H" : "") + (t ? l + t + "M" : "") + (e ? l + a + "S" : "")) : "P0D";
}
var K = ni.prototype;
K.isValid = Np;
K.abs = rT;
K.add = tT;
K.subtract = oT;
K.as = aT;
K.asMilliseconds = _T;
K.asSeconds = uT;
K.asMinutes = lT;
K.asHours = cT;
K.asDays = dT;
K.asWeeks = mT;
K.asMonths = hT;
K.asQuarters = pT;
K.asYears = fT;
K.valueOf = sT;
K._bubble = iT;
K.clone = TT;
K.get = ET;
K.milliseconds = bT;
K.seconds = OT;
K.minutes = RT;
K.hours = NT;
K.days = IT;
K.weeks = ST;
K.months = gT;
K.years = AT;
K.humanize = UT;
K.toISOString = ti;
K.toString = ti;
K.toJSON = ti;
K.locale = sl;
K.localeData = ul;
K.toIsoString = Je(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  ti
);
K.lang = _l;
y("X", 0, 0, "unix");
y("x", 0, 0, "valueOf");
G("x", qo);
G("X", Zm);
ie("X", function(e, n, r) {
  r._d = new Date(parseFloat(e) * 1e3);
});
ie("x", function(e, n, r) {
  r._d = new Date(W(e));
});
//! moment.js
A.version = "2.29.4";
Um(se);
A.fn = O;
A.min = Ep;
A.max = bp;
A.now = Op;
A.utc = pn;
A.unix = zf;
A.months = qf;
A.isDate = vt;
A.locale = Kn;
A.invalid = Yo;
A.duration = sn;
A.isMoment = on;
A.weekdays = Qf;
A.parseZone = Jf;
A.localeData = wn;
A.isDuration = oo;
A.monthsShort = Zf;
A.weekdaysMin = nT;
A.defineLocale = ya;
A.updateLocale = zh;
A.locales = Jh;
A.weekdaysShort = eT;
A.normalizeUnits = qe;
A.relativeTimeRounding = CT;
A.relativeTimeThreshold = DT;
A.calendarFormat = Xp;
A.prototype = O;
A.HTML5_FMT = {
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
function Ol(e, n) {
  return function() {
    return e.apply(n, arguments);
  };
}
const { toString: HT } = Object.prototype, { getPrototypeOf: Fa } = Object, oi = ((e) => (n) => {
  const r = HT.call(n);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Tn = (e) => (e = e.toLowerCase(), (n) => oi(n) === e), ii = (e) => (n) => typeof n === e, { isArray: jr } = Array, lt = ii("undefined");
function yT(e) {
  return e !== null && !lt(e) && e.constructor !== null && !lt(e.constructor) && ze(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Rl = Tn("ArrayBuffer");
function PT(e) {
  let n;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? n = ArrayBuffer.isView(e) : n = e && e.buffer && Rl(e.buffer), n;
}
const wT = ii("string"), ze = ii("function"), Nl = ii("number"), ai = (e) => e !== null && typeof e == "object", MT = (e) => e === !0 || e === !1, ao = (e) => {
  if (oi(e) !== "object")
    return !1;
  const n = Fa(e);
  return (n === null || n === Object.prototype || Object.getPrototypeOf(n) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, kT = Tn("Date"), xT = Tn("File"), LT = Tn("Blob"), BT = Tn("FileList"), jT = (e) => ai(e) && ze(e.pipe), FT = (e) => {
  let n;
  return e && (typeof FormData == "function" && e instanceof FormData || ze(e.append) && ((n = oi(e)) === "formdata" || // detect form-data instance
  n === "object" && ze(e.toString) && e.toString() === "[object FormData]"));
}, VT = Tn("URLSearchParams"), WT = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Ht(e, n, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let t, o;
  if (typeof e != "object" && (e = [e]), jr(e))
    for (t = 0, o = e.length; t < o; t++)
      n.call(null, e[t], t, e);
  else {
    const i = r ? Object.getOwnPropertyNames(e) : Object.keys(e), a = i.length;
    let s;
    for (t = 0; t < a; t++)
      s = i[t], n.call(null, e[s], s, e);
  }
}
function Il(e, n) {
  n = n.toLowerCase();
  const r = Object.keys(e);
  let t = r.length, o;
  for (; t-- > 0; )
    if (o = r[t], n === o.toLowerCase())
      return o;
  return null;
}
const gl = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), Al = (e) => !lt(e) && e !== gl;
function zi() {
  const { caseless: e } = Al(this) && this || {}, n = {}, r = (t, o) => {
    const i = e && Il(n, o) || o;
    ao(n[i]) && ao(t) ? n[i] = zi(n[i], t) : ao(t) ? n[i] = zi({}, t) : jr(t) ? n[i] = t.slice() : n[i] = t;
  };
  for (let t = 0, o = arguments.length; t < o; t++)
    arguments[t] && Ht(arguments[t], r);
  return n;
}
const XT = (e, n, r, { allOwnKeys: t } = {}) => (Ht(n, (o, i) => {
  r && ze(o) ? e[i] = Ol(o, r) : e[i] = o;
}, { allOwnKeys: t }), e), YT = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), KT = (e, n, r, t) => {
  e.prototype = Object.create(n.prototype, t), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: n.prototype
  }), r && Object.assign(e.prototype, r);
}, $T = (e, n, r, t) => {
  let o, i, a;
  const s = {};
  if (n = n || {}, e == null)
    return n;
  do {
    for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
      a = o[i], (!t || t(a, e, n)) && !s[a] && (n[a] = e[a], s[a] = !0);
    e = r !== !1 && Fa(e);
  } while (e && (!r || r(e, n)) && e !== Object.prototype);
  return n;
}, zT = (e, n, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= n.length;
  const t = e.indexOf(n, r);
  return t !== -1 && t === r;
}, JT = (e) => {
  if (!e)
    return null;
  if (jr(e))
    return e;
  let n = e.length;
  if (!Nl(n))
    return null;
  const r = new Array(n);
  for (; n-- > 0; )
    r[n] = e[n];
  return r;
}, qT = ((e) => (n) => e && n instanceof e)(typeof Uint8Array < "u" && Fa(Uint8Array)), ZT = (e, n) => {
  const t = (e && e[Symbol.iterator]).call(e);
  let o;
  for (; (o = t.next()) && !o.done; ) {
    const i = o.value;
    n.call(e, i[0], i[1]);
  }
}, QT = (e, n) => {
  let r;
  const t = [];
  for (; (r = e.exec(n)) !== null; )
    t.push(r);
  return t;
}, eE = Tn("HTMLFormElement"), nE = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, t, o) {
    return t.toUpperCase() + o;
  }
), Ns = (({ hasOwnProperty: e }) => (n, r) => e.call(n, r))(Object.prototype), rE = Tn("RegExp"), Sl = (e, n) => {
  const r = Object.getOwnPropertyDescriptors(e), t = {};
  Ht(r, (o, i) => {
    n(o, i, e) !== !1 && (t[i] = o);
  }), Object.defineProperties(e, t);
}, tE = (e) => {
  Sl(e, (n, r) => {
    if (ze(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const t = e[r];
    if (ze(t)) {
      if (n.enumerable = !1, "writable" in n) {
        n.writable = !1;
        return;
      }
      n.set || (n.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, oE = (e, n) => {
  const r = {}, t = (o) => {
    o.forEach((i) => {
      r[i] = !0;
    });
  };
  return jr(e) ? t(e) : t(String(e).split(n)), r;
}, iE = () => {
}, aE = (e, n) => (e = +e, Number.isFinite(e) ? e : n), Ni = "abcdefghijklmnopqrstuvwxyz", Is = "0123456789", Gl = {
  DIGIT: Is,
  ALPHA: Ni,
  ALPHA_DIGIT: Ni + Ni.toUpperCase() + Is
}, sE = (e = 16, n = Gl.ALPHA_DIGIT) => {
  let r = "";
  const { length: t } = n;
  for (; e--; )
    r += n[Math.random() * t | 0];
  return r;
};
function _E(e) {
  return !!(e && ze(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const uE = (e) => {
  const n = new Array(10), r = (t, o) => {
    if (ai(t)) {
      if (n.indexOf(t) >= 0)
        return;
      if (!("toJSON" in t)) {
        n[o] = t;
        const i = jr(t) ? [] : {};
        return Ht(t, (a, s) => {
          const _ = r(a, o + 1);
          !lt(_) && (i[s] = _);
        }), n[o] = void 0, i;
      }
    }
    return t;
  };
  return r(e, 0);
}, lE = Tn("AsyncFunction"), cE = (e) => e && (ai(e) || ze(e)) && ze(e.then) && ze(e.catch), T = {
  isArray: jr,
  isArrayBuffer: Rl,
  isBuffer: yT,
  isFormData: FT,
  isArrayBufferView: PT,
  isString: wT,
  isNumber: Nl,
  isBoolean: MT,
  isObject: ai,
  isPlainObject: ao,
  isUndefined: lt,
  isDate: kT,
  isFile: xT,
  isBlob: LT,
  isRegExp: rE,
  isFunction: ze,
  isStream: jT,
  isURLSearchParams: VT,
  isTypedArray: qT,
  isFileList: BT,
  forEach: Ht,
  merge: zi,
  extend: XT,
  trim: WT,
  stripBOM: YT,
  inherits: KT,
  toFlatObject: $T,
  kindOf: oi,
  kindOfTest: Tn,
  endsWith: zT,
  toArray: JT,
  forEachEntry: ZT,
  matchAll: QT,
  isHTMLForm: eE,
  hasOwnProperty: Ns,
  hasOwnProp: Ns,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Sl,
  freezeMethods: tE,
  toObjectSet: oE,
  toCamelCase: nE,
  noop: iE,
  toFiniteNumber: aE,
  findKey: Il,
  global: gl,
  isContextDefined: Al,
  ALPHABET: Gl,
  generateString: sE,
  isSpecCompliantForm: _E,
  toJSONObject: uE,
  isAsyncFn: lE,
  isThenable: cE
};
function $(e, n, r, t, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", n && (this.code = n), r && (this.config = r), t && (this.request = t), o && (this.response = o);
}
T.inherits($, Error, {
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
const vl = $.prototype, Cl = {};
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
  Cl[e] = { value: e };
});
Object.defineProperties($, Cl);
Object.defineProperty(vl, "isAxiosError", { value: !0 });
$.from = (e, n, r, t, o, i) => {
  const a = Object.create(vl);
  return T.toFlatObject(e, a, function(_) {
    return _ !== Error.prototype;
  }, (s) => s !== "isAxiosError"), $.call(a, e.message, n, r, t, o), a.cause = e, a.name = e.name, i && Object.assign(a, i), a;
};
const dE = null;
function Ji(e) {
  return T.isPlainObject(e) || T.isArray(e);
}
function Dl(e) {
  return T.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function gs(e, n, r) {
  return e ? e.concat(n).map(function(o, i) {
    return o = Dl(o), !r && i ? "[" + o + "]" : o;
  }).join(r ? "." : "") : n;
}
function mE(e) {
  return T.isArray(e) && !e.some(Ji);
}
const hE = T.toFlatObject(T, {}, null, function(n) {
  return /^is[A-Z]/.test(n);
});
function si(e, n, r) {
  if (!T.isObject(e))
    throw new TypeError("target must be an object");
  n = n || new FormData(), r = T.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(m, p) {
    return !T.isUndefined(p[m]);
  });
  const t = r.metaTokens, o = r.visitor || c, i = r.dots, a = r.indexes, _ = (r.Blob || typeof Blob < "u" && Blob) && T.isSpecCompliantForm(n);
  if (!T.isFunction(o))
    throw new TypeError("visitor must be a function");
  function u(d) {
    if (d === null)
      return "";
    if (T.isDate(d))
      return d.toISOString();
    if (!_ && T.isBlob(d))
      throw new $("Blob is not supported. Use a Buffer instead.");
    return T.isArrayBuffer(d) || T.isTypedArray(d) ? _ && typeof Blob == "function" ? new Blob([d]) : Buffer.from(d) : d;
  }
  function c(d, m, p) {
    let I = d;
    if (d && !p && typeof d == "object") {
      if (T.endsWith(m, "{}"))
        m = t ? m : m.slice(0, -2), d = JSON.stringify(d);
      else if (T.isArray(d) && mE(d) || (T.isFileList(d) || T.endsWith(m, "[]")) && (I = T.toArray(d)))
        return m = Dl(m), I.forEach(function(C, H) {
          !(T.isUndefined(C) || C === null) && n.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? gs([m], H, i) : a === null ? m : m + "[]",
            u(C)
          );
        }), !1;
    }
    return Ji(d) ? !0 : (n.append(gs(p, m, i), u(d)), !1);
  }
  const l = [], E = Object.assign(hE, {
    defaultVisitor: c,
    convertValue: u,
    isVisitable: Ji
  });
  function b(d, m) {
    if (!T.isUndefined(d)) {
      if (l.indexOf(d) !== -1)
        throw Error("Circular reference detected in " + m.join("."));
      l.push(d), T.forEach(d, function(I, R) {
        (!(T.isUndefined(I) || I === null) && o.call(
          n,
          I,
          T.isString(R) ? R.trim() : R,
          m,
          E
        )) === !0 && b(I, m ? m.concat(R) : [R]);
      }), l.pop();
    }
  }
  if (!T.isObject(e))
    throw new TypeError("data must be an object");
  return b(e), n;
}
function As(e) {
  const n = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(t) {
    return n[t];
  });
}
function Va(e, n) {
  this._pairs = [], e && si(e, this, n);
}
const Ul = Va.prototype;
Ul.append = function(n, r) {
  this._pairs.push([n, r]);
};
Ul.toString = function(n) {
  const r = n ? function(t) {
    return n.call(this, t, As);
  } : As;
  return this._pairs.map(function(o) {
    return r(o[0]) + "=" + r(o[1]);
  }, "").join("&");
};
function pE(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Hl(e, n, r) {
  if (!n)
    return e;
  const t = r && r.encode || pE, o = r && r.serialize;
  let i;
  if (o ? i = o(n, r) : i = T.isURLSearchParams(n) ? n.toString() : new Va(n, r).toString(t), i) {
    const a = e.indexOf("#");
    a !== -1 && (e = e.slice(0, a)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class fE {
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
  use(n, r, t) {
    return this.handlers.push({
      fulfilled: n,
      rejected: r,
      synchronous: t ? t.synchronous : !1,
      runWhen: t ? t.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(n) {
    this.handlers[n] && (this.handlers[n] = null);
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
  forEach(n) {
    T.forEach(this.handlers, function(t) {
      t !== null && n(t);
    });
  }
}
const Ss = fE, yl = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, TE = typeof URLSearchParams < "u" ? URLSearchParams : Va, EE = typeof FormData < "u" ? FormData : null, bE = typeof Blob < "u" ? Blob : null, OE = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), RE = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), ln = {
  isBrowser: !0,
  classes: {
    URLSearchParams: TE,
    FormData: EE,
    Blob: bE
  },
  isStandardBrowserEnv: OE,
  isStandardBrowserWebWorkerEnv: RE,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function NE(e, n) {
  return si(e, new ln.classes.URLSearchParams(), Object.assign({
    visitor: function(r, t, o, i) {
      return ln.isNode && T.isBuffer(r) ? (this.append(t, r.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, n));
}
function IE(e) {
  return T.matchAll(/\w+|\[(\w*)]/g, e).map((n) => n[0] === "[]" ? "" : n[1] || n[0]);
}
function gE(e) {
  const n = {}, r = Object.keys(e);
  let t;
  const o = r.length;
  let i;
  for (t = 0; t < o; t++)
    i = r[t], n[i] = e[i];
  return n;
}
function Pl(e) {
  function n(r, t, o, i) {
    let a = r[i++];
    const s = Number.isFinite(+a), _ = i >= r.length;
    return a = !a && T.isArray(o) ? o.length : a, _ ? (T.hasOwnProp(o, a) ? o[a] = [o[a], t] : o[a] = t, !s) : ((!o[a] || !T.isObject(o[a])) && (o[a] = []), n(r, t, o[a], i) && T.isArray(o[a]) && (o[a] = gE(o[a])), !s);
  }
  if (T.isFormData(e) && T.isFunction(e.entries)) {
    const r = {};
    return T.forEachEntry(e, (t, o) => {
      n(IE(t), o, r, 0);
    }), r;
  }
  return null;
}
const AE = {
  "Content-Type": void 0
};
function SE(e, n, r) {
  if (T.isString(e))
    try {
      return (n || JSON.parse)(e), T.trim(e);
    } catch (t) {
      if (t.name !== "SyntaxError")
        throw t;
    }
  return (r || JSON.stringify)(e);
}
const _i = {
  transitional: yl,
  adapter: ["xhr", "http"],
  transformRequest: [function(n, r) {
    const t = r.getContentType() || "", o = t.indexOf("application/json") > -1, i = T.isObject(n);
    if (i && T.isHTMLForm(n) && (n = new FormData(n)), T.isFormData(n))
      return o && o ? JSON.stringify(Pl(n)) : n;
    if (T.isArrayBuffer(n) || T.isBuffer(n) || T.isStream(n) || T.isFile(n) || T.isBlob(n))
      return n;
    if (T.isArrayBufferView(n))
      return n.buffer;
    if (T.isURLSearchParams(n))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), n.toString();
    let s;
    if (i) {
      if (t.indexOf("application/x-www-form-urlencoded") > -1)
        return NE(n, this.formSerializer).toString();
      if ((s = T.isFileList(n)) || t.indexOf("multipart/form-data") > -1) {
        const _ = this.env && this.env.FormData;
        return si(
          s ? { "files[]": n } : n,
          _ && new _(),
          this.formSerializer
        );
      }
    }
    return i || o ? (r.setContentType("application/json", !1), SE(n)) : n;
  }],
  transformResponse: [function(n) {
    const r = this.transitional || _i.transitional, t = r && r.forcedJSONParsing, o = this.responseType === "json";
    if (n && T.isString(n) && (t && !this.responseType || o)) {
      const a = !(r && r.silentJSONParsing) && o;
      try {
        return JSON.parse(n);
      } catch (s) {
        if (a)
          throw s.name === "SyntaxError" ? $.from(s, $.ERR_BAD_RESPONSE, this, null, this.response) : s;
      }
    }
    return n;
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
    FormData: ln.classes.FormData,
    Blob: ln.classes.Blob
  },
  validateStatus: function(n) {
    return n >= 200 && n < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*"
    }
  }
};
T.forEach(["delete", "get", "head"], function(n) {
  _i.headers[n] = {};
});
T.forEach(["post", "put", "patch"], function(n) {
  _i.headers[n] = T.merge(AE);
});
const Wa = _i, GE = T.toObjectSet([
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
]), vE = (e) => {
  const n = {};
  let r, t, o;
  return e && e.split(`
`).forEach(function(a) {
    o = a.indexOf(":"), r = a.substring(0, o).trim().toLowerCase(), t = a.substring(o + 1).trim(), !(!r || n[r] && GE[r]) && (r === "set-cookie" ? n[r] ? n[r].push(t) : n[r] = [t] : n[r] = n[r] ? n[r] + ", " + t : t);
  }), n;
}, Gs = Symbol("internals");
function $r(e) {
  return e && String(e).trim().toLowerCase();
}
function so(e) {
  return e === !1 || e == null ? e : T.isArray(e) ? e.map(so) : String(e);
}
function CE(e) {
  const n = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let t;
  for (; t = r.exec(e); )
    n[t[1]] = t[2];
  return n;
}
const DE = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Ii(e, n, r, t, o) {
  if (T.isFunction(t))
    return t.call(this, n, r);
  if (o && (n = r), !!T.isString(n)) {
    if (T.isString(t))
      return n.indexOf(t) !== -1;
    if (T.isRegExp(t))
      return t.test(n);
  }
}
function UE(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (n, r, t) => r.toUpperCase() + t);
}
function HE(e, n) {
  const r = T.toCamelCase(" " + n);
  ["get", "set", "has"].forEach((t) => {
    Object.defineProperty(e, t + r, {
      value: function(o, i, a) {
        return this[t].call(this, n, o, i, a);
      },
      configurable: !0
    });
  });
}
class ui {
  constructor(n) {
    n && this.set(n);
  }
  set(n, r, t) {
    const o = this;
    function i(s, _, u) {
      const c = $r(_);
      if (!c)
        throw new Error("header name must be a non-empty string");
      const l = T.findKey(o, c);
      (!l || o[l] === void 0 || u === !0 || u === void 0 && o[l] !== !1) && (o[l || _] = so(s));
    }
    const a = (s, _) => T.forEach(s, (u, c) => i(u, c, _));
    return T.isPlainObject(n) || n instanceof this.constructor ? a(n, r) : T.isString(n) && (n = n.trim()) && !DE(n) ? a(vE(n), r) : n != null && i(r, n, t), this;
  }
  get(n, r) {
    if (n = $r(n), n) {
      const t = T.findKey(this, n);
      if (t) {
        const o = this[t];
        if (!r)
          return o;
        if (r === !0)
          return CE(o);
        if (T.isFunction(r))
          return r.call(this, o, t);
        if (T.isRegExp(r))
          return r.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(n, r) {
    if (n = $r(n), n) {
      const t = T.findKey(this, n);
      return !!(t && this[t] !== void 0 && (!r || Ii(this, this[t], t, r)));
    }
    return !1;
  }
  delete(n, r) {
    const t = this;
    let o = !1;
    function i(a) {
      if (a = $r(a), a) {
        const s = T.findKey(t, a);
        s && (!r || Ii(t, t[s], s, r)) && (delete t[s], o = !0);
      }
    }
    return T.isArray(n) ? n.forEach(i) : i(n), o;
  }
  clear(n) {
    const r = Object.keys(this);
    let t = r.length, o = !1;
    for (; t--; ) {
      const i = r[t];
      (!n || Ii(this, this[i], i, n, !0)) && (delete this[i], o = !0);
    }
    return o;
  }
  normalize(n) {
    const r = this, t = {};
    return T.forEach(this, (o, i) => {
      const a = T.findKey(t, i);
      if (a) {
        r[a] = so(o), delete r[i];
        return;
      }
      const s = n ? UE(i) : String(i).trim();
      s !== i && delete r[i], r[s] = so(o), t[s] = !0;
    }), this;
  }
  concat(...n) {
    return this.constructor.concat(this, ...n);
  }
  toJSON(n) {
    const r = /* @__PURE__ */ Object.create(null);
    return T.forEach(this, (t, o) => {
      t != null && t !== !1 && (r[o] = n && T.isArray(t) ? t.join(", ") : t);
    }), r;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([n, r]) => n + ": " + r).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(n) {
    return n instanceof this ? n : new this(n);
  }
  static concat(n, ...r) {
    const t = new this(n);
    return r.forEach((o) => t.set(o)), t;
  }
  static accessor(n) {
    const t = (this[Gs] = this[Gs] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function i(a) {
      const s = $r(a);
      t[s] || (HE(o, a), t[s] = !0);
    }
    return T.isArray(n) ? n.forEach(i) : i(n), this;
  }
}
ui.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
T.freezeMethods(ui.prototype);
T.freezeMethods(ui);
const vn = ui;
function gi(e, n) {
  const r = this || Wa, t = n || r, o = vn.from(t.headers);
  let i = t.data;
  return T.forEach(e, function(s) {
    i = s.call(r, i, o.normalize(), n ? n.status : void 0);
  }), o.normalize(), i;
}
function wl(e) {
  return !!(e && e.__CANCEL__);
}
function yt(e, n, r) {
  $.call(this, e ?? "canceled", $.ERR_CANCELED, n, r), this.name = "CanceledError";
}
T.inherits(yt, $, {
  __CANCEL__: !0
});
function yE(e, n, r) {
  const t = r.config.validateStatus;
  !r.status || !t || t(r.status) ? e(r) : n(new $(
    "Request failed with status code " + r.status,
    [$.ERR_BAD_REQUEST, $.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
const PE = ln.isStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  function() {
    return {
      write: function(r, t, o, i, a, s) {
        const _ = [];
        _.push(r + "=" + encodeURIComponent(t)), T.isNumber(o) && _.push("expires=" + new Date(o).toGMTString()), T.isString(i) && _.push("path=" + i), T.isString(a) && _.push("domain=" + a), s === !0 && _.push("secure"), document.cookie = _.join("; ");
      },
      read: function(r) {
        const t = document.cookie.match(new RegExp("(^|;\\s*)(" + r + ")=([^;]*)"));
        return t ? decodeURIComponent(t[3]) : null;
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
function wE(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function ME(e, n) {
  return n ? e.replace(/\/+$/, "") + "/" + n.replace(/^\/+/, "") : e;
}
function Ml(e, n) {
  return e && !wE(n) ? ME(e, n) : n;
}
const kE = ln.isStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const n = /(msie|trident)/i.test(navigator.userAgent), r = document.createElement("a");
    let t;
    function o(i) {
      let a = i;
      return n && (r.setAttribute("href", a), a = r.href), r.setAttribute("href", a), {
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
    return t = o(window.location.href), function(a) {
      const s = T.isString(a) ? o(a) : a;
      return s.protocol === t.protocol && s.host === t.host;
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
function xE(e) {
  const n = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return n && n[1] || "";
}
function LE(e, n) {
  e = e || 10;
  const r = new Array(e), t = new Array(e);
  let o = 0, i = 0, a;
  return n = n !== void 0 ? n : 1e3, function(_) {
    const u = Date.now(), c = t[i];
    a || (a = u), r[o] = _, t[o] = u;
    let l = i, E = 0;
    for (; l !== o; )
      E += r[l++], l = l % e;
    if (o = (o + 1) % e, o === i && (i = (i + 1) % e), u - a < n)
      return;
    const b = c && u - c;
    return b ? Math.round(E * 1e3 / b) : void 0;
  };
}
function vs(e, n) {
  let r = 0;
  const t = LE(50, 250);
  return (o) => {
    const i = o.loaded, a = o.lengthComputable ? o.total : void 0, s = i - r, _ = t(s), u = i <= a;
    r = i;
    const c = {
      loaded: i,
      total: a,
      progress: a ? i / a : void 0,
      bytes: s,
      rate: _ || void 0,
      estimated: _ && a && u ? (a - i) / _ : void 0,
      event: o
    };
    c[n ? "download" : "upload"] = !0, e(c);
  };
}
const BE = typeof XMLHttpRequest < "u", jE = BE && function(e) {
  return new Promise(function(r, t) {
    let o = e.data;
    const i = vn.from(e.headers).normalize(), a = e.responseType;
    let s;
    function _() {
      e.cancelToken && e.cancelToken.unsubscribe(s), e.signal && e.signal.removeEventListener("abort", s);
    }
    T.isFormData(o) && (ln.isStandardBrowserEnv || ln.isStandardBrowserWebWorkerEnv ? i.setContentType(!1) : i.setContentType("multipart/form-data;", !1));
    let u = new XMLHttpRequest();
    if (e.auth) {
      const b = e.auth.username || "", d = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      i.set("Authorization", "Basic " + btoa(b + ":" + d));
    }
    const c = Ml(e.baseURL, e.url);
    u.open(e.method.toUpperCase(), Hl(c, e.params, e.paramsSerializer), !0), u.timeout = e.timeout;
    function l() {
      if (!u)
        return;
      const b = vn.from(
        "getAllResponseHeaders" in u && u.getAllResponseHeaders()
      ), m = {
        data: !a || a === "text" || a === "json" ? u.responseText : u.response,
        status: u.status,
        statusText: u.statusText,
        headers: b,
        config: e,
        request: u
      };
      yE(function(I) {
        r(I), _();
      }, function(I) {
        t(I), _();
      }, m), u = null;
    }
    if ("onloadend" in u ? u.onloadend = l : u.onreadystatechange = function() {
      !u || u.readyState !== 4 || u.status === 0 && !(u.responseURL && u.responseURL.indexOf("file:") === 0) || setTimeout(l);
    }, u.onabort = function() {
      u && (t(new $("Request aborted", $.ECONNABORTED, e, u)), u = null);
    }, u.onerror = function() {
      t(new $("Network Error", $.ERR_NETWORK, e, u)), u = null;
    }, u.ontimeout = function() {
      let d = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const m = e.transitional || yl;
      e.timeoutErrorMessage && (d = e.timeoutErrorMessage), t(new $(
        d,
        m.clarifyTimeoutError ? $.ETIMEDOUT : $.ECONNABORTED,
        e,
        u
      )), u = null;
    }, ln.isStandardBrowserEnv) {
      const b = (e.withCredentials || kE(c)) && e.xsrfCookieName && PE.read(e.xsrfCookieName);
      b && i.set(e.xsrfHeaderName, b);
    }
    o === void 0 && i.setContentType(null), "setRequestHeader" in u && T.forEach(i.toJSON(), function(d, m) {
      u.setRequestHeader(m, d);
    }), T.isUndefined(e.withCredentials) || (u.withCredentials = !!e.withCredentials), a && a !== "json" && (u.responseType = e.responseType), typeof e.onDownloadProgress == "function" && u.addEventListener("progress", vs(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && u.upload && u.upload.addEventListener("progress", vs(e.onUploadProgress)), (e.cancelToken || e.signal) && (s = (b) => {
      u && (t(!b || b.type ? new yt(null, e, u) : b), u.abort(), u = null);
    }, e.cancelToken && e.cancelToken.subscribe(s), e.signal && (e.signal.aborted ? s() : e.signal.addEventListener("abort", s)));
    const E = xE(c);
    if (E && ln.protocols.indexOf(E) === -1) {
      t(new $("Unsupported protocol " + E + ":", $.ERR_BAD_REQUEST, e));
      return;
    }
    u.send(o || null);
  });
}, _o = {
  http: dE,
  xhr: jE
};
T.forEach(_o, (e, n) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: n });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: n });
  }
});
const FE = {
  getAdapter: (e) => {
    e = T.isArray(e) ? e : [e];
    const { length: n } = e;
    let r, t;
    for (let o = 0; o < n && (r = e[o], !(t = T.isString(r) ? _o[r.toLowerCase()] : r)); o++)
      ;
    if (!t)
      throw t === !1 ? new $(
        `Adapter ${r} is not supported by the environment`,
        "ERR_NOT_SUPPORT"
      ) : new Error(
        T.hasOwnProp(_o, r) ? `Adapter '${r}' is not available in the build` : `Unknown adapter '${r}'`
      );
    if (!T.isFunction(t))
      throw new TypeError("adapter is not a function");
    return t;
  },
  adapters: _o
};
function Ai(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new yt(null, e);
}
function Cs(e) {
  return Ai(e), e.headers = vn.from(e.headers), e.data = gi.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), FE.getAdapter(e.adapter || Wa.adapter)(e).then(function(t) {
    return Ai(e), t.data = gi.call(
      e,
      e.transformResponse,
      t
    ), t.headers = vn.from(t.headers), t;
  }, function(t) {
    return wl(t) || (Ai(e), t && t.response && (t.response.data = gi.call(
      e,
      e.transformResponse,
      t.response
    ), t.response.headers = vn.from(t.response.headers))), Promise.reject(t);
  });
}
const Ds = (e) => e instanceof vn ? e.toJSON() : e;
function Pr(e, n) {
  n = n || {};
  const r = {};
  function t(u, c, l) {
    return T.isPlainObject(u) && T.isPlainObject(c) ? T.merge.call({ caseless: l }, u, c) : T.isPlainObject(c) ? T.merge({}, c) : T.isArray(c) ? c.slice() : c;
  }
  function o(u, c, l) {
    if (T.isUndefined(c)) {
      if (!T.isUndefined(u))
        return t(void 0, u, l);
    } else
      return t(u, c, l);
  }
  function i(u, c) {
    if (!T.isUndefined(c))
      return t(void 0, c);
  }
  function a(u, c) {
    if (T.isUndefined(c)) {
      if (!T.isUndefined(u))
        return t(void 0, u);
    } else
      return t(void 0, c);
  }
  function s(u, c, l) {
    if (l in n)
      return t(u, c);
    if (l in e)
      return t(void 0, u);
  }
  const _ = {
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
    headers: (u, c) => o(Ds(u), Ds(c), !0)
  };
  return T.forEach(Object.keys(Object.assign({}, e, n)), function(c) {
    const l = _[c] || o, E = l(e[c], n[c], c);
    T.isUndefined(E) && l !== s || (r[c] = E);
  }), r;
}
const kl = "1.4.0", Xa = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, n) => {
  Xa[e] = function(t) {
    return typeof t === e || "a" + (n < 1 ? "n " : " ") + e;
  };
});
const Us = {};
Xa.transitional = function(n, r, t) {
  function o(i, a) {
    return "[Axios v" + kl + "] Transitional option '" + i + "'" + a + (t ? ". " + t : "");
  }
  return (i, a, s) => {
    if (n === !1)
      throw new $(
        o(a, " has been removed" + (r ? " in " + r : "")),
        $.ERR_DEPRECATED
      );
    return r && !Us[a] && (Us[a] = !0, console.warn(
      o(
        a,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), n ? n(i, a, s) : !0;
  };
};
function VE(e, n, r) {
  if (typeof e != "object")
    throw new $("options must be an object", $.ERR_BAD_OPTION_VALUE);
  const t = Object.keys(e);
  let o = t.length;
  for (; o-- > 0; ) {
    const i = t[o], a = n[i];
    if (a) {
      const s = e[i], _ = s === void 0 || a(s, i, e);
      if (_ !== !0)
        throw new $("option " + i + " must be " + _, $.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new $("Unknown option " + i, $.ERR_BAD_OPTION);
  }
}
const qi = {
  assertOptions: VE,
  validators: Xa
}, Bn = qi.validators;
class Ho {
  constructor(n) {
    this.defaults = n, this.interceptors = {
      request: new Ss(),
      response: new Ss()
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
  request(n, r) {
    typeof n == "string" ? (r = r || {}, r.url = n) : r = n || {}, r = Pr(this.defaults, r);
    const { transitional: t, paramsSerializer: o, headers: i } = r;
    t !== void 0 && qi.assertOptions(t, {
      silentJSONParsing: Bn.transitional(Bn.boolean),
      forcedJSONParsing: Bn.transitional(Bn.boolean),
      clarifyTimeoutError: Bn.transitional(Bn.boolean)
    }, !1), o != null && (T.isFunction(o) ? r.paramsSerializer = {
      serialize: o
    } : qi.assertOptions(o, {
      encode: Bn.function,
      serialize: Bn.function
    }, !0)), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let a;
    a = i && T.merge(
      i.common,
      i[r.method]
    ), a && T.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (d) => {
        delete i[d];
      }
    ), r.headers = vn.concat(a, i);
    const s = [];
    let _ = !0;
    this.interceptors.request.forEach(function(m) {
      typeof m.runWhen == "function" && m.runWhen(r) === !1 || (_ = _ && m.synchronous, s.unshift(m.fulfilled, m.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(m) {
      u.push(m.fulfilled, m.rejected);
    });
    let c, l = 0, E;
    if (!_) {
      const d = [Cs.bind(this), void 0];
      for (d.unshift.apply(d, s), d.push.apply(d, u), E = d.length, c = Promise.resolve(r); l < E; )
        c = c.then(d[l++], d[l++]);
      return c;
    }
    E = s.length;
    let b = r;
    for (l = 0; l < E; ) {
      const d = s[l++], m = s[l++];
      try {
        b = d(b);
      } catch (p) {
        m.call(this, p);
        break;
      }
    }
    try {
      c = Cs.call(this, b);
    } catch (d) {
      return Promise.reject(d);
    }
    for (l = 0, E = u.length; l < E; )
      c = c.then(u[l++], u[l++]);
    return c;
  }
  getUri(n) {
    n = Pr(this.defaults, n);
    const r = Ml(n.baseURL, n.url);
    return Hl(r, n.params, n.paramsSerializer);
  }
}
T.forEach(["delete", "get", "head", "options"], function(n) {
  Ho.prototype[n] = function(r, t) {
    return this.request(Pr(t || {}, {
      method: n,
      url: r,
      data: (t || {}).data
    }));
  };
});
T.forEach(["post", "put", "patch"], function(n) {
  function r(t) {
    return function(i, a, s) {
      return this.request(Pr(s || {}, {
        method: n,
        headers: t ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: a
      }));
    };
  }
  Ho.prototype[n] = r(), Ho.prototype[n + "Form"] = r(!0);
});
const uo = Ho;
class Ya {
  constructor(n) {
    if (typeof n != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(i) {
      r = i;
    });
    const t = this;
    this.promise.then((o) => {
      if (!t._listeners)
        return;
      let i = t._listeners.length;
      for (; i-- > 0; )
        t._listeners[i](o);
      t._listeners = null;
    }), this.promise.then = (o) => {
      let i;
      const a = new Promise((s) => {
        t.subscribe(s), i = s;
      }).then(o);
      return a.cancel = function() {
        t.unsubscribe(i);
      }, a;
    }, n(function(i, a, s) {
      t.reason || (t.reason = new yt(i, a, s), r(t.reason));
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
  subscribe(n) {
    if (this.reason) {
      n(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(n) : this._listeners = [n];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(n) {
    if (!this._listeners)
      return;
    const r = this._listeners.indexOf(n);
    r !== -1 && this._listeners.splice(r, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let n;
    return {
      token: new Ya(function(o) {
        n = o;
      }),
      cancel: n
    };
  }
}
const WE = Ya;
function XE(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function YE(e) {
  return T.isObject(e) && e.isAxiosError === !0;
}
const Zi = {
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
Object.entries(Zi).forEach(([e, n]) => {
  Zi[n] = e;
});
const KE = Zi;
function xl(e) {
  const n = new uo(e), r = Ol(uo.prototype.request, n);
  return T.extend(r, uo.prototype, n, { allOwnKeys: !0 }), T.extend(r, n, null, { allOwnKeys: !0 }), r.create = function(o) {
    return xl(Pr(e, o));
  }, r;
}
const be = xl(Wa);
be.Axios = uo;
be.CanceledError = yt;
be.CancelToken = WE;
be.isCancel = wl;
be.VERSION = kl;
be.toFormData = si;
be.AxiosError = $;
be.Cancel = be.CanceledError;
be.all = function(n) {
  return Promise.all(n);
};
be.spread = XE;
be.isAxiosError = YE;
be.mergeConfig = Pr;
be.AxiosHeaders = vn;
be.formToJSON = (e) => Pl(T.isHTMLForm(e) ? new FormData(e) : e);
be.HttpStatusCode = KE;
be.default = be;
const $E = be, zE = { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_c0bea9c6-1da0-4ab1-b7bd-d514b4a679b0", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "npm/8.19.4 node/v16.20.1 linux x64 workspaces/false ci/github-actions", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_c0bea9c6-1da0-4ab1-b7bd-d514b4a679b0", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", npm_config_noproxy: "", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-8.2", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "terminal", npm_config_userconfig: "/home/runner/.npmrc", npm_config_local_prefix: "/home/runner/work/CodeGear/CodeGear", SYSTEMD_EXEC_PID: "664", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", COLOR: "0", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.5/x64", NVM_DIR: "/home/runner/.nvm", npm_config_metrics_registry: "https://registry.npmjs.org/", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230702.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chrome_driver", JOURNAL_STREAM: "8:16336", GITHUB_WORKFLOW: "CodeGear CI", _: "/opt/hostedtoolcache/node/16.20.1/x64/bin/npm", npm_config_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", GITHUB_RUN_ID: "5523375040", npm_config_cache: "/home/runner/.npm", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "06afe0f467f7cc496f3a5a632badc23bb2da81bb", GITHUB_BASE_REF: "develop", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/pull/5/merge", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", npm_config_node_gyp: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.bin:/home/runner/work/CodeGear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_e69064f3-1714-4e18-a773-c9f1c82b8d1b", INVOCATION_ID: "67c14a02b0f14ae3b6eab84eaa78856d", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.10/x64", NODE: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "11", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 2", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "5/merge", GITHUB_REPOSITORY: "Gearonix/CodeGear", npm_lifecycle_script: " nx run-many --targets=build --all", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", STATS_NM: "true", npm_package_version: "0.0.0", npm_lifecycle_event: "build", NODE_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/bin/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/node_modules", GITHUB_REF_PROTECTED: "false", npm_config_strict_peer_dependencies: "", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "06afe0f467f7cc496f3a5a632badc23bb2da81bb", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/pull/5/merge", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", npm_config_globalconfig: "/opt/hostedtoolcache/node/16.20.1/x64/etc/npmrc", npm_config_init_module: "/home/runner/.npm-init.js", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_c0bea9c6-1da0-4ab1-b7bd-d514b4a679b0", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", npm_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/bin/npm-cli.js", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "pull_request", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_c0bea9c6-1da0-4ab1-b7bd-d514b4a679b0", npm_config_global_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", npm_command: "run-script", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.146+9/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_c0bea9c6-1da0-4ab1-b7bd-d514b4a679b0", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", EDITOR: "vi", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/5407298341986919404", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "5407298341986919404", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.SERVER_URL ?? "http://localhost:6868", JE = {
  CODE_EXECUTOR_API: "execute"
}, qE = $E.create({
  baseURL: zE,
  withCredentials: !0
}), ZE = {
  EDITOR_THEME: "EDITOR_THEME",
  EDITOR_CONTENT_DATA: "EDITOR_CONTENT_DATA",
  EDITOR_EXECUTE_MESSAGES: "EDITOR_EXECUTE_MESSAGES"
}, Ll = {
  MAIN: "/",
  EDITOR: "/edit",
  ABOUT: "/about"
}, Bl = () => {
  const [e, n] = qn([]);
  return {
    on: (r) => {
      Object.entries(r).forEach(([t, o]) => {
        const i = (a) => {
          if (a.altKey && a.key === t.toLowerCase())
            return a.preventDefault(), o?.(), !1;
        };
        n([...e, i]), document.addEventListener("keydown", i);
      });
    },
    clear: () => {
      e.forEach((r) => {
        document.removeEventListener("keydown", r);
      });
    }
  };
}, jl = (e = !1) => {
  const [n, r] = qn(e);
  return {
    off: () => r(!1),
    on: () => r(!0),
    toggle: () => r(!n),
    val: n
  };
}, QE = (e, n) => {
  const r = le();
  return (...t) => {
    r.current && clearTimeout(r.current), r.current = setTimeout(() => {
      e(...t);
    }, n);
  };
}, eb = () => () => {
  if (!document.fullscreenElement)
    return document.documentElement.requestFullscreen();
  document.exitFullscreen && document.exitFullscreen();
}, nb = () => {
  ye(() => (document.body.style.overflow = "hidden", () => {
    document.body.style.overflow = "auto";
  }));
}, yo = ({ when: e, children: n }) => e ? n : null;
var Ka, P, Fl, ar, Hs, Vl, Qi, lo = {}, Wl = [], rb = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, li = Array.isArray;
function Xn(e, n) {
  for (var r in n)
    e[r] = n[r];
  return e;
}
function Xl(e) {
  var n = e.parentNode;
  n && n.removeChild(e);
}
function ys(e, n, r) {
  var t, o, i, a = {};
  for (i in n)
    i == "key" ? t = n[i] : i == "ref" ? o = n[i] : a[i] = n[i];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Ka.call(arguments, 2) : r), typeof e == "function" && e.defaultProps != null)
    for (i in e.defaultProps)
      a[i] === void 0 && (a[i] = e.defaultProps[i]);
  return co(e, a, t, o, null);
}
function co(e, n, r, t, o) {
  var i = { type: e, props: n, key: r, ref: t, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: o ?? ++Fl };
  return o == null && P.vnode != null && P.vnode(i), i;
}
function ct(e) {
  return e.children;
}
function Cn(e, n) {
  this.props = e, this.context = n;
}
function Po(e, n) {
  if (n == null)
    return e.__ ? Po(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var r; n < e.__k.length; n++)
    if ((r = e.__k[n]) != null && r.__e != null)
      return r.__e;
  return typeof e.type == "function" ? Po(e) : null;
}
function Yl(e) {
  var n, r;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, n = 0; n < e.__k.length; n++)
      if ((r = e.__k[n]) != null && r.__e != null) {
        e.__e = e.__c.base = r.__e;
        break;
      }
    return Yl(e);
  }
}
function Ps(e) {
  (!e.__d && (e.__d = !0) && ar.push(e) && !wo.__r++ || Hs !== P.debounceRendering) && ((Hs = P.debounceRendering) || Vl)(wo);
}
function wo() {
  var e, n, r, t, o, i, a, s, _;
  for (ar.sort(Qi); e = ar.shift(); )
    e.__d && (n = ar.length, t = void 0, o = void 0, i = void 0, s = (a = (r = e).__v).__e, (_ = r.__P) && (t = [], o = [], (i = Xn({}, a)).__v = a.__v + 1, Jl(_, a, i, r.__n, _.ownerSVGElement !== void 0, a.__h != null ? [s] : null, t, s ?? Po(a), a.__h, o), ib(t, a, o), a.__e != s && Yl(a)), ar.length > n && ar.sort(Qi));
  wo.__r = 0;
}
function Kl(e, n, r, t, o, i, a, s, _, u, c) {
  var l, E, b, d, m, p, I, R, C, H, f = 0, w = t && t.__k || Wl, X = w.length, ae = X, x = n.length;
  for (r.__k = [], l = 0; l < x; l++)
    (d = r.__k[l] = (d = n[l]) == null || typeof d == "boolean" || typeof d == "function" ? null : typeof d == "string" || typeof d == "number" || typeof d == "bigint" ? co(null, d, null, null, d) : li(d) ? co(ct, { children: d }, null, null, null) : d.__b > 0 ? co(d.type, d.props, d.key, d.ref ? d.ref : null, d.__v) : d) != null && (d.__ = r, d.__b = r.__b + 1, (R = tb(d, w, I = l + f, ae)) === -1 ? b = lo : (b = w[R] || lo, w[R] = void 0, ae--), Jl(e, d, b, o, i, a, s, _, u, c), m = d.__e, (E = d.ref) && b.ref != E && (b.ref && $a(b.ref, null, d), c.push(E, d.__c || m, d)), m != null && (p == null && (p = m), H = !(C = b === lo || b.__v === null) && R === I, C ? R == -1 && f-- : R !== I && (R === I + 1 ? (f++, H = !0) : R > I ? ae > x - I ? (f += R - I, H = !0) : f-- : f = R < I && R == I - 1 ? R - I : 0), I = l + f, H = H || R == l && !C, typeof d.type != "function" || R === I && b.__k !== d.__k ? typeof d.type == "function" || H ? d.__d !== void 0 ? (_ = d.__d, d.__d = void 0) : _ = m.nextSibling : _ = zl(e, m, _) : _ = $l(d, _, e), typeof r.type == "function" && (r.__d = _)));
  for (r.__e = p, l = X; l--; )
    w[l] != null && (typeof r.type == "function" && w[l].__e != null && w[l].__e == r.__d && (r.__d = w[l].__e.nextSibling), ql(w[l], w[l]));
}
function $l(e, n, r) {
  for (var t, o = e.__k, i = 0; o && i < o.length; i++)
    (t = o[i]) && (t.__ = e, n = typeof t.type == "function" ? $l(t, n, r) : zl(r, t.__e, n));
  return n;
}
function Mo(e, n) {
  return n = n || [], e == null || typeof e == "boolean" || (li(e) ? e.some(function(r) {
    Mo(r, n);
  }) : n.push(e)), n;
}
function zl(e, n, r) {
  return r == null || r.parentNode !== e ? e.insertBefore(n, null) : n == r && n.parentNode != null || e.insertBefore(n, r), n.nextSibling;
}
function tb(e, n, r, t) {
  var o = e.key, i = e.type, a = r - 1, s = r + 1, _ = n[r];
  if (_ === null || _ && o == _.key && i === _.type)
    return r;
  if (t > (_ != null ? 1 : 0))
    for (; a >= 0 || s < n.length; ) {
      if (a >= 0) {
        if ((_ = n[a]) && o == _.key && i === _.type)
          return a;
        a--;
      }
      if (s < n.length) {
        if ((_ = n[s]) && o == _.key && i === _.type)
          return s;
        s++;
      }
    }
  return -1;
}
function ob(e, n, r, t, o) {
  var i;
  for (i in r)
    i === "children" || i === "key" || i in n || ko(e, i, null, r[i], t);
  for (i in n)
    o && typeof n[i] != "function" || i === "children" || i === "key" || i === "value" || i === "checked" || r[i] === n[i] || ko(e, i, n[i], r[i], t);
}
function ws(e, n, r) {
  n[0] === "-" ? e.setProperty(n, r ?? "") : e[n] = r == null ? "" : typeof r != "number" || rb.test(n) ? r : r + "px";
}
function ko(e, n, r, t, o) {
  var i;
  e:
    if (n === "style")
      if (typeof r == "string")
        e.style.cssText = r;
      else {
        if (typeof t == "string" && (e.style.cssText = t = ""), t)
          for (n in t)
            r && n in r || ws(e.style, n, "");
        if (r)
          for (n in r)
            t && r[n] === t[n] || ws(e.style, n, r[n]);
      }
    else if (n[0] === "o" && n[1] === "n")
      i = n !== (n = n.replace(/Capture$/, "")), n = n.toLowerCase() in e ? n.toLowerCase().slice(2) : n.slice(2), e.l || (e.l = {}), e.l[n + i] = r, r ? t || e.addEventListener(n, i ? ks : Ms, i) : e.removeEventListener(n, i ? ks : Ms, i);
    else if (n !== "dangerouslySetInnerHTML") {
      if (o)
        n = n.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (n !== "width" && n !== "height" && n !== "href" && n !== "list" && n !== "form" && n !== "tabIndex" && n !== "download" && n !== "rowSpan" && n !== "colSpan" && n in e)
        try {
          e[n] = r ?? "";
          break e;
        } catch {
        }
      typeof r == "function" || (r == null || r === !1 && n[4] !== "-" ? e.removeAttribute(n) : e.setAttribute(n, r));
    }
}
function Ms(e) {
  return this.l[e.type + !1](P.event ? P.event(e) : e);
}
function ks(e) {
  return this.l[e.type + !0](P.event ? P.event(e) : e);
}
function Jl(e, n, r, t, o, i, a, s, _, u) {
  var c, l, E, b, d, m, p, I, R, C, H, f, w, X, ae, x = n.type;
  if (n.constructor !== void 0)
    return null;
  r.__h != null && (_ = r.__h, s = n.__e = r.__e, n.__h = null, i = [s]), (c = P.__b) && c(n);
  try {
    e:
      if (typeof x == "function") {
        if (I = n.props, R = (c = x.contextType) && t[c.__c], C = c ? R ? R.props.value : c.__ : t, r.__c ? p = (l = n.__c = r.__c).__ = l.__E : ("prototype" in x && x.prototype.render ? n.__c = l = new x(I, C) : (n.__c = l = new Cn(I, C), l.constructor = x, l.render = sb), R && R.sub(l), l.props = I, l.state || (l.state = {}), l.context = C, l.__n = t, E = l.__d = !0, l.__h = [], l._sb = []), l.__s == null && (l.__s = l.state), x.getDerivedStateFromProps != null && (l.__s == l.state && (l.__s = Xn({}, l.__s)), Xn(l.__s, x.getDerivedStateFromProps(I, l.__s))), b = l.props, d = l.state, l.__v = n, E)
          x.getDerivedStateFromProps == null && l.componentWillMount != null && l.componentWillMount(), l.componentDidMount != null && l.__h.push(l.componentDidMount);
        else {
          if (x.getDerivedStateFromProps == null && I !== b && l.componentWillReceiveProps != null && l.componentWillReceiveProps(I, C), !l.__e && (l.shouldComponentUpdate != null && l.shouldComponentUpdate(I, l.__s, C) === !1 || n.__v === r.__v)) {
            for (n.__v !== r.__v && (l.props = I, l.state = l.__s, l.__d = !1), n.__e = r.__e, n.__k = r.__k, n.__k.forEach(function(F) {
              F && (F.__ = n);
            }), H = 0; H < l._sb.length; H++)
              l.__h.push(l._sb[H]);
            l._sb = [], l.__h.length && a.push(l);
            break e;
          }
          l.componentWillUpdate != null && l.componentWillUpdate(I, l.__s, C), l.componentDidUpdate != null && l.__h.push(function() {
            l.componentDidUpdate(b, d, m);
          });
        }
        if (l.context = C, l.props = I, l.__P = e, l.__e = !1, f = P.__r, w = 0, "prototype" in x && x.prototype.render) {
          for (l.state = l.__s, l.__d = !1, f && f(n), c = l.render(l.props, l.state, l.context), X = 0; X < l._sb.length; X++)
            l.__h.push(l._sb[X]);
          l._sb = [];
        } else
          do
            l.__d = !1, f && f(n), c = l.render(l.props, l.state, l.context), l.state = l.__s;
          while (l.__d && ++w < 25);
        l.state = l.__s, l.getChildContext != null && (t = Xn(Xn({}, t), l.getChildContext())), E || l.getSnapshotBeforeUpdate == null || (m = l.getSnapshotBeforeUpdate(b, d)), Kl(e, li(ae = c != null && c.type === ct && c.key == null ? c.props.children : c) ? ae : [ae], n, r, t, o, i, a, s, _, u), l.base = n.__e, n.__h = null, l.__h.length && a.push(l), p && (l.__E = l.__ = null);
      } else
        i == null && n.__v === r.__v ? (n.__k = r.__k, n.__e = r.__e) : n.__e = ab(r.__e, n, r, t, o, i, a, _, u);
    (c = P.diffed) && c(n);
  } catch (F) {
    n.__v = null, (_ || i != null) && (n.__e = s, n.__h = !!_, i[i.indexOf(s)] = null), P.__e(F, n, r);
  }
}
function ib(e, n, r) {
  for (var t = 0; t < r.length; t++)
    $a(r[t], r[++t], r[++t]);
  P.__c && P.__c(n, e), e.some(function(o) {
    try {
      e = o.__h, o.__h = [], e.some(function(i) {
        i.call(o);
      });
    } catch (i) {
      P.__e(i, o.__v);
    }
  });
}
function ab(e, n, r, t, o, i, a, s, _) {
  var u, c, l, E = r.props, b = n.props, d = n.type, m = 0;
  if (d === "svg" && (o = !0), i != null) {
    for (; m < i.length; m++)
      if ((u = i[m]) && "setAttribute" in u == !!d && (d ? u.localName === d : u.nodeType === 3)) {
        e = u, i[m] = null;
        break;
      }
  }
  if (e == null) {
    if (d === null)
      return document.createTextNode(b);
    e = o ? document.createElementNS("http://www.w3.org/2000/svg", d) : document.createElement(d, b.is && b), i = null, s = !1;
  }
  if (d === null)
    E === b || s && e.data === b || (e.data = b);
  else {
    if (i = i && Ka.call(e.childNodes), c = (E = r.props || lo).dangerouslySetInnerHTML, l = b.dangerouslySetInnerHTML, !s) {
      if (i != null)
        for (E = {}, m = 0; m < e.attributes.length; m++)
          E[e.attributes[m].name] = e.attributes[m].value;
      (l || c) && (l && (c && l.__html == c.__html || l.__html === e.innerHTML) || (e.innerHTML = l && l.__html || ""));
    }
    if (ob(e, b, E, o, s), l)
      n.__k = [];
    else if (Kl(e, li(m = n.props.children) ? m : [m], n, r, t, o && d !== "foreignObject", i, a, i ? i[0] : r.__k && Po(r, 0), s, _), i != null)
      for (m = i.length; m--; )
        i[m] != null && Xl(i[m]);
    s || ("value" in b && (m = b.value) !== void 0 && (m !== e.value || d === "progress" && !m || d === "option" && m !== E.value) && ko(e, "value", m, E.value, !1), "checked" in b && (m = b.checked) !== void 0 && m !== e.checked && ko(e, "checked", m, E.checked, !1));
  }
  return e;
}
function $a(e, n, r) {
  try {
    typeof e == "function" ? e(n) : e.current = n;
  } catch (t) {
    P.__e(t, r);
  }
}
function ql(e, n, r) {
  var t, o;
  if (P.unmount && P.unmount(e), (t = e.ref) && (t.current && t.current !== e.__e || $a(t, null, n)), (t = e.__c) != null) {
    if (t.componentWillUnmount)
      try {
        t.componentWillUnmount();
      } catch (i) {
        P.__e(i, n);
      }
    t.base = t.__P = null, e.__c = void 0;
  }
  if (t = e.__k)
    for (o = 0; o < t.length; o++)
      t[o] && ql(t[o], n, r || typeof e.type != "function");
  r || e.__e == null || Xl(e.__e), e.__ = e.__e = e.__d = void 0;
}
function sb(e, n, r) {
  return this.constructor(e, r);
}
Ka = Wl.slice, P = { __e: function(e, n, r, t) {
  for (var o, i, a; n = n.__; )
    if ((o = n.__c) && !o.__)
      try {
        if ((i = o.constructor) && i.getDerivedStateFromError != null && (o.setState(i.getDerivedStateFromError(e)), a = o.__d), o.componentDidCatch != null && (o.componentDidCatch(e, t || {}), a = o.__d), a)
          return o.__E = o;
      } catch (s) {
        e = s;
      }
  throw e;
} }, Fl = 0, Cn.prototype.setState = function(e, n) {
  var r;
  r = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Xn({}, this.state), typeof e == "function" && (e = e(Xn({}, r), this.props)), e && Xn(r, e), e != null && this.__v && (n && this._sb.push(n), Ps(this));
}, Cn.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Ps(this));
}, Cn.prototype.render = ct, ar = [], Vl = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Qi = function(e, n) {
  return e.__v.__b - n.__v.__b;
}, wo.__r = 0;
var dt, ce, Si, xs, ea = 0, Zl = [], mo = [], Ls = P.__b, Bs = P.__r, js = P.diffed, Fs = P.__c, Vs = P.unmount;
function za(e, n) {
  P.__h && P.__h(ce, e, ea || n), ea = 0;
  var r = ce.__H || (ce.__H = { __: [], __h: [] });
  return e >= r.__.length && r.__.push({ __V: mo }), r.__[e];
}
function _b(e) {
  return ea = 1, ub(Ql, e);
}
function ub(e, n, r) {
  var t = za(dt++, 2);
  if (t.t = e, !t.__c && (t.__ = [r ? r(n) : Ql(void 0, n), function(s) {
    var _ = t.__N ? t.__N[0] : t.__[0], u = t.t(_, s);
    _ !== u && (t.__N = [u, t.__[1]], t.__c.setState({}));
  }], t.__c = ce, !ce.u)) {
    var o = function(s, _, u) {
      if (!t.__c.__H)
        return !0;
      var c = t.__c.__H.__.filter(function(E) {
        return E.__c;
      });
      if (c.every(function(E) {
        return !E.__N;
      }))
        return !i || i.call(this, s, _, u);
      var l = !1;
      return c.forEach(function(E) {
        if (E.__N) {
          var b = E.__[0];
          E.__ = E.__N, E.__N = void 0, b !== E.__[0] && (l = !0);
        }
      }), !(!l && t.__c.props === s) && (!i || i.call(this, s, _, u));
    };
    ce.u = !0;
    var i = ce.shouldComponentUpdate, a = ce.componentWillUpdate;
    ce.componentWillUpdate = function(s, _, u) {
      if (this.__e) {
        var c = i;
        i = void 0, o(s, _, u), i = c;
      }
      a && a.call(this, s, _, u);
    }, ce.shouldComponentUpdate = o;
  }
  return t.__N || t.__;
}
function lb(e, n) {
  var r = za(dt++, 3);
  !P.__s && hb(r.__H, n) && (r.__ = e, r.i = n, ce.__H.__h.push(r));
}
function cb(e) {
  var n = za(dt++, 10), r = _b();
  return n.__ = e, ce.componentDidCatch || (ce.componentDidCatch = function(t, o) {
    n.__ && n.__(t, o), r[1](t);
  }), [r[0], function() {
    r[1](void 0);
  }];
}
function db() {
  for (var e; e = Zl.shift(); )
    if (e.__P && e.__H)
      try {
        e.__H.__h.forEach(ho), e.__H.__h.forEach(na), e.__H.__h = [];
      } catch (n) {
        e.__H.__h = [], P.__e(n, e.__v);
      }
}
P.__b = function(e) {
  ce = null, Ls && Ls(e);
}, P.__r = function(e) {
  Bs && Bs(e), dt = 0;
  var n = (ce = e.__c).__H;
  n && (Si === ce ? (n.__h = [], ce.__h = [], n.__.forEach(function(r) {
    r.__N && (r.__ = r.__N), r.__V = mo, r.__N = r.i = void 0;
  })) : (n.__h.forEach(ho), n.__h.forEach(na), n.__h = [], dt = 0)), Si = ce;
}, P.diffed = function(e) {
  js && js(e);
  var n = e.__c;
  n && n.__H && (n.__H.__h.length && (Zl.push(n) !== 1 && xs === P.requestAnimationFrame || ((xs = P.requestAnimationFrame) || mb)(db)), n.__H.__.forEach(function(r) {
    r.i && (r.__H = r.i), r.__V !== mo && (r.__ = r.__V), r.i = void 0, r.__V = mo;
  })), Si = ce = null;
}, P.__c = function(e, n) {
  n.some(function(r) {
    try {
      r.__h.forEach(ho), r.__h = r.__h.filter(function(t) {
        return !t.__ || na(t);
      });
    } catch (t) {
      n.some(function(o) {
        o.__h && (o.__h = []);
      }), n = [], P.__e(t, r.__v);
    }
  }), Fs && Fs(e, n);
}, P.unmount = function(e) {
  Vs && Vs(e);
  var n, r = e.__c;
  r && r.__H && (r.__H.__.forEach(function(t) {
    try {
      ho(t);
    } catch (o) {
      n = o;
    }
  }), r.__H = void 0, n && P.__e(n, r.__v));
};
var Ws = typeof requestAnimationFrame == "function";
function mb(e) {
  var n, r = function() {
    clearTimeout(t), Ws && cancelAnimationFrame(n), setTimeout(e);
  }, t = setTimeout(r, 100);
  Ws && (n = requestAnimationFrame(r));
}
function ho(e) {
  var n = ce, r = e.__c;
  typeof r == "function" && (e.__c = void 0, r()), ce = n;
}
function na(e) {
  var n = ce;
  e.__c = e.__(), ce = n;
}
function hb(e, n) {
  return !e || e.length !== n.length || n.some(function(r, t) {
    return r !== e[t];
  });
}
function Ql(e, n) {
  return typeof n == "function" ? n(e) : n;
}
const pb = ({ errorInfo: e }) => /* @__PURE__ */ ve("div", { children: [
  "Custom Error Boundary. ",
  /* @__PURE__ */ U("br", {})
] }), fb = ({ children: e }) => {
  const [n] = cb();
  return console.error(n), n ? /* @__PURE__ */ U(pb, { errorInfo: n }) : /* @__PURE__ */ U(Pc, { children: e });
}, Tb = ({ children: e }) => /* @__PURE__ */ U(fb, { children: e }), ec = ca({}), Eb = async () => Promise.all([
  import("./react-spring_web.modern-d55cb301.mjs"),
  import("./use-gesture-react.esm-7899cdd1.mjs")
]), bb = ({ children: e }) => {
  const n = le(), r = le(), t = jl(), o = async () => {
    const [a, s] = await Eb();
    n.current = a, r.current = s, t.on();
  };
  ye(() => {
    o();
  }, []);
  const i = Pi(() => ({
    Spring: n.current,
    Gesture: r.current,
    isLoaded: t.val
  }), [t.val]);
  return /* @__PURE__ */ U(ec.Provider, { value: i, children: /* @__PURE__ */ U(yo, { when: t.val, children: e }) });
}, nc = () => yn(ec), ra = (e) => typeof e == "object" && e !== null, rc = (e) => typeof e == "string", Ob = (e) => typeof e == "function";
class Pt {
  get(n, r) {
    const t = localStorage.getItem(n);
    return t ? Rb(t) ? JSON.parse(t) : t : r;
  }
  set(n, r) {
    if (n in ZE) {
      if (rc(r))
        return localStorage.setItem(n, r);
      localStorage.setItem(n, JSON.stringify(r));
    }
  }
  clear(n) {
    if (n)
      return localStorage.removeItem(n);
    localStorage.clear();
  }
}
const Rb = (e) => {
  try {
    JSON.parse(e);
  } catch {
    return !1;
  }
  return !0;
};
class Nb {
  constructor(n) {
    er(this), this.state = n, this.getters = n.getters, this.storage = new Pt();
  }
  addExecuteMessage(n) {
    const r = this.getters.getActiveTab();
    let t = n.output;
    n.error && (t = n.error.split("^")[1].split(".")[0]), this.state.executeMessages.push({
      message: t,
      isError: !!n.error,
      fileName: r.getLabel(),
      date: A().format("HH:mm")
    }), this.storage.set("EDITOR_EXECUTE_MESSAGES", this.state.executeMessages);
  }
  clearExecuteMessages() {
    this.state.executeMessages = [], this.storage.clear("EDITOR_EXECUTE_MESSAGES");
  }
}
if (!qn)
  throw new Error("mobx-react-lite requires React with Hooks support");
if (!pm)
  throw new Error("mobx-react-lite@3 requires mobx at least version 6 to be available");
function Ib(e) {
  e();
}
function gb(e) {
  e || (e = Ib), om({ reactionScheduler: e });
}
function Ab(e) {
  return im(e);
}
var Sb = 1e4, Gb = 1e4, vb = (
  /** @class */
  function() {
    function e(n) {
      var r = this;
      Object.defineProperty(this, "finalize", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
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
        value: function(t) {
          t === void 0 && (t = Sb), clearTimeout(r.sweepTimeout), r.sweepTimeout = void 0;
          var o = Date.now();
          r.registrations.forEach(function(i, a) {
            o - i.registeredAt >= t && (r.finalize(i.value), r.registrations.delete(a));
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
      value: function(n, r, t) {
        this.registrations.set(t, {
          value: r,
          registeredAt: Date.now()
        }), this.scheduleSweep();
      }
    }), Object.defineProperty(e.prototype, "unregister", {
      enumerable: !1,
      configurable: !0,
      writable: !0,
      value: function(n) {
        this.registrations.delete(n);
      }
    }), Object.defineProperty(e.prototype, "scheduleSweep", {
      enumerable: !1,
      configurable: !0,
      writable: !0,
      value: function() {
        this.sweepTimeout === void 0 && (this.sweepTimeout = setTimeout(this.sweep, Gb));
      }
    }), e;
  }()
), Cb = typeof FinalizationRegistry < "u" ? FinalizationRegistry : vb, ta = new Cb(function(e) {
  var n;
  (n = e.reaction) === null || n === void 0 || n.dispose(), e.reaction = null;
}), Xs = globalThis && globalThis.__read || function(e, n) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var t = r.call(e), o, i = [], a;
  try {
    for (; (n === void 0 || n-- > 0) && !(o = t.next()).done; )
      i.push(o.value);
  } catch (s) {
    a = { error: s };
  } finally {
    try {
      o && !o.done && (r = t.return) && r.call(t);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return i;
};
function Ys(e) {
  return "observer".concat(e);
}
var Db = (
  /** @class */
  function() {
    function e() {
    }
    return e;
  }()
);
function Ub() {
  return new Db();
}
function Hb(e, n) {
  n === void 0 && (n = "observed");
  var r = Xs(he.useState(Ub), 1), t = r[0], o = Xs(he.useState(), 2), i = o[1], a = function() {
    return i([]);
  }, s = he.useRef(null);
  s.current || (s.current = {
    reaction: null,
    mounted: !1,
    changedBeforeMount: !1
  });
  var _ = s.current;
  _.reaction || (_.reaction = new tt(Ys(n), function() {
    _.mounted ? a() : _.changedBeforeMount = !0;
  }), ta.register(t, _, _)), he.useDebugValue(_.reaction, Ab), he.useEffect(function() {
    return ta.unregister(_), _.mounted = !0, _.reaction ? _.changedBeforeMount && (_.changedBeforeMount = !1, a()) : (_.reaction = new tt(Ys(n), function() {
      a();
    }), a()), function() {
      _.reaction.dispose(), _.reaction = null, _.mounted = !1, _.changedBeforeMount = !1;
    };
  }, []);
  var u, c;
  if (_.reaction.track(function() {
    try {
      u = e();
    } catch (l) {
      c = l;
    }
  }), c)
    throw c;
  return u;
}
var tc = typeof Symbol == "function" && Symbol.for, Ks = tc ? Symbol.for("react.forward_ref") : typeof To == "function" && To(function(e) {
  return null;
}).$$typeof, $s = tc ? Symbol.for("react.memo") : typeof Gr == "function" && Gr(function(e) {
  return null;
}).$$typeof;
function tr(e, n) {
  var r;
  if ($s && e.$$typeof === $s)
    throw new Error("[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.");
  var t = (r = n?.forwardRef) !== null && r !== void 0 ? r : !1, o = e, i = e.displayName || e.name;
  if (Ks && e.$$typeof === Ks && (t = !0, o = e.render, typeof o != "function"))
    throw new Error("[mobx-react-lite] `render` property of ForwardRef was not a function");
  var a = function(s, _) {
    return Hb(function() {
      return o(s, _);
    }, i);
  };
  return i !== "" && (a.displayName = i), e.contextTypes && (a.contextTypes = e.contextTypes), t && (a = To(a)), a = Gr(a), Pb(e, a), a;
}
var yb = {
  $$typeof: !0,
  render: !0,
  compare: !0,
  type: !0,
  // Don't redefine `displayName`,
  // it's defined as getter-setter pair on `memo` (see #3192).
  displayName: !0
};
function Pb(e, n) {
  Object.keys(e).forEach(function(r) {
    yb[r] || Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(e, r));
  });
}
globalThis && globalThis.__read;
var Gi;
gb(kc);
Gi = ta.finalizeAllImmediately;
const wb = (e) => {
  const { Spring: r, Gesture: t } = nc(), [{ y: o }, i] = r.useSpring(() => ({ y: 300 })), a = () => {
    i.start({ y: 0, immediate: !1, config: r.config.gentle });
  }, s = (l = 0) => {
    e(), i.start({ y: 300, immediate: !1, config: { ...r.config.stiff, velocity: l } });
  }, _ = t.useDrag(
    ({ last: l, velocity: [, E], direction: [, b], offset: [, d], cancel: m }) => {
      d < -70 && m(), l ? d > 300 * 0.5 || E > 0.5 && b === 1 ? s(E) : a() : i.start({ y: d, immediate: b === -1 });
    },
    { from: () => [0, o.get()], filterTaps: !0, bounds: { top: 0 }, rubberband: !0 }
  ), u = o.to((l) => l < 300 ? "block" : "none");
  return {
    toggle: (l) => {
      l ? a() : s();
    },
    open: a,
    close: s,
    bind: _,
    div: r.a.div,
    springs: {
      display: u,
      y: o
    },
    terminalHeight: 300
  };
}, wt = () => yn(Dc), Mb = () => wt().state, or = () => yn(Lt).actions, Fr = () => yn(Lt), Mt = () => yn(Lt).getters, oc = () => yn(Lt).services, kb = [
  { label: "Terminal", key: "terminal" },
  { label: "Test cases", key: "test_cases" }
], xb = () => {
  const e = wt(), n = e.state.selectedTerminalTab, r = vr((t) => {
    e.update({
      selectedTerminalTab: t
    });
  }, []);
  return {
    key: n,
    set: r,
    val: kb
  };
}, Lb = (e) => {
  const { Spring: n } = nc(), [r, t] = n.useSpring(() => ({
    opacity: 1,
    x: 0
  }));
  return A_(e, () => ({
    close: async () => (t.start(
      { opacity: 0, x: -20, immediate: !1, config: n.config.wobbly }
    ), new Promise((o) => setTimeout(() => {
      t.start({ opacity: 1, x: 0, immediate: !1, config: n.config.wobbly }), o(!0);
    }, 300)))
  })), {
    ref: e,
    spring: r,
    SpringDiv: n.a.div
  };
};
var ic = { exports: {} }, re = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zs;
function Bb() {
  if (zs)
    return re;
  zs = 1;
  var e = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), t = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), _ = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), b = Symbol.for("react.offscreen"), d;
  d = Symbol.for("react.module.reference");
  function m(p) {
    if (typeof p == "object" && p !== null) {
      var I = p.$$typeof;
      switch (I) {
        case e:
          switch (p = p.type, p) {
            case r:
            case o:
            case t:
            case u:
            case c:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case s:
                case a:
                case _:
                case E:
                case l:
                case i:
                  return p;
                default:
                  return I;
              }
          }
        case n:
          return I;
      }
    }
  }
  return re.ContextConsumer = a, re.ContextProvider = i, re.Element = e, re.ForwardRef = _, re.Fragment = r, re.Lazy = E, re.Memo = l, re.Portal = n, re.Profiler = o, re.StrictMode = t, re.Suspense = u, re.SuspenseList = c, re.isAsyncMode = function() {
    return !1;
  }, re.isConcurrentMode = function() {
    return !1;
  }, re.isContextConsumer = function(p) {
    return m(p) === a;
  }, re.isContextProvider = function(p) {
    return m(p) === i;
  }, re.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === e;
  }, re.isForwardRef = function(p) {
    return m(p) === _;
  }, re.isFragment = function(p) {
    return m(p) === r;
  }, re.isLazy = function(p) {
    return m(p) === E;
  }, re.isMemo = function(p) {
    return m(p) === l;
  }, re.isPortal = function(p) {
    return m(p) === n;
  }, re.isProfiler = function(p) {
    return m(p) === o;
  }, re.isStrictMode = function(p) {
    return m(p) === t;
  }, re.isSuspense = function(p) {
    return m(p) === u;
  }, re.isSuspenseList = function(p) {
    return m(p) === c;
  }, re.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === r || p === o || p === t || p === u || p === c || p === b || typeof p == "object" && p !== null && (p.$$typeof === E || p.$$typeof === l || p.$$typeof === i || p.$$typeof === a || p.$$typeof === _ || p.$$typeof === d || p.getModuleId !== void 0);
  }, re.typeOf = m, re;
}
ic.exports = Bb();
var ac = ic.exports;
function jb(e) {
  function n(v, S, D, L, h) {
    for (var Q = 0, g = 0, me = 0, ee = 0, oe, B, Ie = 0, xe = 0, z, He = z = oe = 0, ne = 0, ge = 0, Wr = 0, Ae = 0, Bt = D.length, Xr = Bt - 1, Ze, k = "", fe = "", mi = "", hi = "", Ln; ne < Bt; ) {
      if (B = D.charCodeAt(ne), ne === Xr && g + ee + me + Q !== 0 && (g !== 0 && (B = g === 47 ? 10 : 47), ee = me = Q = 0, Bt++, Xr++), g + ee + me + Q === 0) {
        if (ne === Xr && (0 < ge && (k = k.replace(E, "")), 0 < k.trim().length)) {
          switch (B) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              k += D.charAt(ne);
          }
          B = 59;
        }
        switch (B) {
          case 123:
            for (k = k.trim(), oe = k.charCodeAt(0), z = 1, Ae = ++ne; ne < Bt; ) {
              switch (B = D.charCodeAt(ne)) {
                case 123:
                  z++;
                  break;
                case 125:
                  z--;
                  break;
                case 47:
                  switch (B = D.charCodeAt(ne + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (He = ne + 1; He < Xr; ++He)
                          switch (D.charCodeAt(He)) {
                            case 47:
                              if (B === 42 && D.charCodeAt(He - 1) === 42 && ne + 2 !== He) {
                                ne = He + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (B === 47) {
                                ne = He + 1;
                                break e;
                              }
                          }
                        ne = He;
                      }
                  }
                  break;
                case 91:
                  B++;
                case 40:
                  B++;
                case 34:
                case 39:
                  for (; ne++ < Xr && D.charCodeAt(ne) !== B; )
                    ;
              }
              if (z === 0)
                break;
              ne++;
            }
            switch (z = D.substring(Ae, ne), oe === 0 && (oe = (k = k.replace(l, "").trim()).charCodeAt(0)), oe) {
              case 64:
                switch (0 < ge && (k = k.replace(E, "")), B = k.charCodeAt(1), B) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    ge = S;
                    break;
                  default:
                    ge = de;
                }
                if (z = n(S, ge, z, B, h + 1), Ae = z.length, 0 < Ue && (ge = r(de, k, Wr), Ln = s(3, z, ge, S, Ce, Ne, Ae, B, h, L), k = ge.join(""), Ln !== void 0 && (Ae = (z = Ln.trim()).length) === 0 && (B = 0, z = "")), 0 < Ae)
                  switch (B) {
                    case 115:
                      k = k.replace(w, a);
                    case 100:
                    case 109:
                    case 45:
                      z = k + "{" + z + "}";
                      break;
                    case 107:
                      k = k.replace(R, "$1 $2"), z = k + "{" + z + "}", z = V === 1 || V === 2 && i("@" + z, 3) ? "@-webkit-" + z + "@" + z : "@" + z;
                      break;
                    default:
                      z = k + z, L === 112 && (z = (fe += z, ""));
                  }
                else
                  z = "";
                break;
              default:
                z = n(S, r(S, k, Wr), z, L, h + 1);
            }
            mi += z, z = Wr = ge = He = oe = 0, k = "", B = D.charCodeAt(++ne);
            break;
          case 125:
          case 59:
            if (k = (0 < ge ? k.replace(E, "") : k).trim(), 1 < (Ae = k.length))
              switch (He === 0 && (oe = k.charCodeAt(0), oe === 45 || 96 < oe && 123 > oe) && (Ae = (k = k.replace(" ", ":")).length), 0 < Ue && (Ln = s(1, k, S, v, Ce, Ne, fe.length, L, h, L)) !== void 0 && (Ae = (k = Ln.trim()).length) === 0 && (k = "\0\0"), oe = k.charCodeAt(0), B = k.charCodeAt(1), oe) {
                case 0:
                  break;
                case 64:
                  if (B === 105 || B === 99) {
                    hi += k + D.charAt(ne);
                    break;
                  }
                default:
                  k.charCodeAt(Ae - 1) !== 58 && (fe += o(k, oe, B, k.charCodeAt(2)));
              }
            Wr = ge = He = oe = 0, k = "", B = D.charCodeAt(++ne);
        }
      }
      switch (B) {
        case 13:
        case 10:
          g === 47 ? g = 0 : 1 + oe === 0 && L !== 107 && 0 < k.length && (ge = 1, k += "\0"), 0 < Ue * xn && s(0, k, S, v, Ce, Ne, fe.length, L, h, L), Ne = 1, Ce++;
          break;
        case 59:
        case 125:
          if (g + ee + me + Q === 0) {
            Ne++;
            break;
          }
        default:
          switch (Ne++, Ze = D.charAt(ne), B) {
            case 9:
            case 32:
              if (ee + Q + g === 0)
                switch (Ie) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    Ze = "";
                    break;
                  default:
                    B !== 32 && (Ze = " ");
                }
              break;
            case 0:
              Ze = "\\0";
              break;
            case 12:
              Ze = "\\f";
              break;
            case 11:
              Ze = "\\v";
              break;
            case 38:
              ee + g + Q === 0 && (ge = Wr = 1, Ze = "\f" + Ze);
              break;
            case 108:
              if (ee + g + Q + De === 0 && 0 < He)
                switch (ne - He) {
                  case 2:
                    Ie === 112 && D.charCodeAt(ne - 3) === 58 && (De = Ie);
                  case 8:
                    xe === 111 && (De = xe);
                }
              break;
            case 58:
              ee + g + Q === 0 && (He = ne);
              break;
            case 44:
              g + me + ee + Q === 0 && (ge = 1, Ze += "\r");
              break;
            case 34:
            case 39:
              g === 0 && (ee = ee === B ? 0 : ee === 0 ? B : ee);
              break;
            case 91:
              ee + g + me === 0 && Q++;
              break;
            case 93:
              ee + g + me === 0 && Q--;
              break;
            case 41:
              ee + g + Q === 0 && me--;
              break;
            case 40:
              if (ee + g + Q === 0) {
                if (oe === 0)
                  switch (2 * Ie + 3 * xe) {
                    case 533:
                      break;
                    default:
                      oe = 1;
                  }
                me++;
              }
              break;
            case 64:
              g + me + ee + Q + He + z === 0 && (z = 1);
              break;
            case 42:
            case 47:
              if (!(0 < ee + Q + me))
                switch (g) {
                  case 0:
                    switch (2 * B + 3 * D.charCodeAt(ne + 1)) {
                      case 235:
                        g = 47;
                        break;
                      case 220:
                        Ae = ne, g = 42;
                    }
                    break;
                  case 42:
                    B === 47 && Ie === 42 && Ae + 2 !== ne && (D.charCodeAt(Ae + 2) === 33 && (fe += D.substring(Ae, ne + 1)), Ze = "", g = 0);
                }
          }
          g === 0 && (k += Ze);
      }
      xe = Ie, Ie = B, ne++;
    }
    if (Ae = fe.length, 0 < Ae) {
      if (ge = S, 0 < Ue && (Ln = s(2, fe, ge, v, Ce, Ne, Ae, L, h, L), Ln !== void 0 && (fe = Ln).length === 0))
        return hi + fe + mi;
      if (fe = ge.join(",") + "{" + fe + "}", V * De !== 0) {
        switch (V !== 2 || i(fe, 2) || (De = 0), De) {
          case 111:
            fe = fe.replace(H, ":-moz-$1") + fe;
            break;
          case 112:
            fe = fe.replace(C, "::-webkit-input-$1") + fe.replace(C, "::-moz-$1") + fe.replace(C, ":-ms-input-$1") + fe;
        }
        De = 0;
      }
    }
    return hi + fe + mi;
  }
  function r(v, S, D) {
    var L = S.trim().split(p);
    S = L;
    var h = L.length, Q = v.length;
    switch (Q) {
      case 0:
      case 1:
        var g = 0;
        for (v = Q === 0 ? "" : v[0] + " "; g < h; ++g)
          S[g] = t(v, S[g], D).trim();
        break;
      default:
        var me = g = 0;
        for (S = []; g < h; ++g)
          for (var ee = 0; ee < Q; ++ee)
            S[me++] = t(v[ee] + " ", L[g], D).trim();
    }
    return S;
  }
  function t(v, S, D) {
    var L = S.charCodeAt(0);
    switch (33 > L && (L = (S = S.trim()).charCodeAt(0)), L) {
      case 38:
        return S.replace(I, "$1" + v.trim());
      case 58:
        return v.trim() + S.replace(I, "$1" + v.trim());
      default:
        if (0 < 1 * D && 0 < S.indexOf("\f"))
          return S.replace(I, (v.charCodeAt(0) === 58 ? "" : "$1") + v.trim());
    }
    return v + S;
  }
  function o(v, S, D, L) {
    var h = v + ";", Q = 2 * S + 3 * D + 4 * L;
    if (Q === 944) {
      v = h.indexOf(":", 9) + 1;
      var g = h.substring(v, h.length - 1).trim();
      return g = h.substring(0, v).trim() + g + ";", V === 1 || V === 2 && i(g, 1) ? "-webkit-" + g + g : g;
    }
    if (V === 0 || V === 2 && !i(h, 1))
      return h;
    switch (Q) {
      case 1015:
        return h.charCodeAt(10) === 97 ? "-webkit-" + h + h : h;
      case 951:
        return h.charCodeAt(3) === 116 ? "-webkit-" + h + h : h;
      case 963:
        return h.charCodeAt(5) === 110 ? "-webkit-" + h + h : h;
      case 1009:
        if (h.charCodeAt(4) !== 100)
          break;
      case 969:
      case 942:
        return "-webkit-" + h + h;
      case 978:
        return "-webkit-" + h + "-moz-" + h + h;
      case 1019:
      case 983:
        return "-webkit-" + h + "-moz-" + h + "-ms-" + h + h;
      case 883:
        if (h.charCodeAt(8) === 45)
          return "-webkit-" + h + h;
        if (0 < h.indexOf("image-set(", 11))
          return h.replace(Fe, "$1-webkit-$2") + h;
        break;
      case 932:
        if (h.charCodeAt(4) === 45)
          switch (h.charCodeAt(5)) {
            case 103:
              return "-webkit-box-" + h.replace("-grow", "") + "-webkit-" + h + "-ms-" + h.replace("grow", "positive") + h;
            case 115:
              return "-webkit-" + h + "-ms-" + h.replace("shrink", "negative") + h;
            case 98:
              return "-webkit-" + h + "-ms-" + h.replace("basis", "preferred-size") + h;
          }
        return "-webkit-" + h + "-ms-" + h + h;
      case 964:
        return "-webkit-" + h + "-ms-flex-" + h + h;
      case 1023:
        if (h.charCodeAt(8) !== 99)
          break;
        return g = h.substring(h.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + g + "-webkit-" + h + "-ms-flex-pack" + g + h;
      case 1005:
        return d.test(h) ? h.replace(b, ":-webkit-") + h.replace(b, ":-moz-") + h : h;
      case 1e3:
        switch (g = h.substring(13).trim(), S = g.indexOf("-") + 1, g.charCodeAt(0) + g.charCodeAt(S)) {
          case 226:
            g = h.replace(f, "tb");
            break;
          case 232:
            g = h.replace(f, "tb-rl");
            break;
          case 220:
            g = h.replace(f, "lr");
            break;
          default:
            return h;
        }
        return "-webkit-" + h + "-ms-" + g + h;
      case 1017:
        if (h.indexOf("sticky", 9) === -1)
          break;
      case 975:
        switch (S = (h = v).length - 10, g = (h.charCodeAt(S) === 33 ? h.substring(0, S) : h).substring(v.indexOf(":", 7) + 1).trim(), Q = g.charCodeAt(0) + (g.charCodeAt(7) | 0)) {
          case 203:
            if (111 > g.charCodeAt(8))
              break;
          case 115:
            h = h.replace(g, "-webkit-" + g) + ";" + h;
            break;
          case 207:
          case 102:
            h = h.replace(g, "-webkit-" + (102 < Q ? "inline-" : "") + "box") + ";" + h.replace(g, "-webkit-" + g) + ";" + h.replace(g, "-ms-" + g + "box") + ";" + h;
        }
        return h + ";";
      case 938:
        if (h.charCodeAt(5) === 45)
          switch (h.charCodeAt(6)) {
            case 105:
              return g = h.replace("-items", ""), "-webkit-" + h + "-webkit-box-" + g + "-ms-flex-" + g + h;
            case 115:
              return "-webkit-" + h + "-ms-flex-item-" + h.replace(ae, "") + h;
            default:
              return "-webkit-" + h + "-ms-flex-line-pack" + h.replace("align-content", "").replace(ae, "") + h;
          }
        break;
      case 973:
      case 989:
        if (h.charCodeAt(3) !== 45 || h.charCodeAt(4) === 122)
          break;
      case 931:
      case 953:
        if (F.test(v) === !0)
          return (g = v.substring(v.indexOf(":") + 1)).charCodeAt(0) === 115 ? o(v.replace("stretch", "fill-available"), S, D, L).replace(":fill-available", ":stretch") : h.replace(g, "-webkit-" + g) + h.replace(g, "-moz-" + g.replace("fill-", "")) + h;
        break;
      case 962:
        if (h = "-webkit-" + h + (h.charCodeAt(5) === 102 ? "-ms-" + h : "") + h, D + L === 211 && h.charCodeAt(13) === 105 && 0 < h.indexOf("transform", 10))
          return h.substring(0, h.indexOf(";", 27) + 1).replace(m, "$1-webkit-$2") + h;
    }
    return h;
  }
  function i(v, S) {
    var D = v.indexOf(S === 1 ? ":" : "{"), L = v.substring(0, S !== 3 ? D : 10);
    return D = v.substring(D + 1, v.length - 1), kn(S !== 2 ? L : L.replace(x, "$1"), D, S);
  }
  function a(v, S) {
    var D = o(S, S.charCodeAt(0), S.charCodeAt(1), S.charCodeAt(2));
    return D !== S + ";" ? D.replace(X, " or ($1)").substring(4) : "(" + S + ")";
  }
  function s(v, S, D, L, h, Q, g, me, ee, oe) {
    for (var B = 0, Ie = S, xe; B < Ue; ++B)
      switch (xe = ke[B].call(c, v, Ie, D, L, h, Q, g, me, ee, oe)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          Ie = xe;
      }
    if (Ie !== S)
      return Ie;
  }
  function _(v) {
    switch (v) {
      case void 0:
      case null:
        Ue = ke.length = 0;
        break;
      default:
        if (typeof v == "function")
          ke[Ue++] = v;
        else if (typeof v == "object")
          for (var S = 0, D = v.length; S < D; ++S)
            _(v[S]);
        else
          xn = !!v | 0;
    }
    return _;
  }
  function u(v) {
    return v = v.prefix, v !== void 0 && (kn = null, v ? typeof v != "function" ? V = 1 : (V = 2, kn = v) : V = 0), u;
  }
  function c(v, S) {
    var D = v;
    if (33 > D.charCodeAt(0) && (D = D.trim()), pe = D, D = [pe], 0 < Ue) {
      var L = s(-1, S, D, D, Ce, Ne, 0, 0, 0, 0);
      L !== void 0 && typeof L == "string" && (S = L);
    }
    var h = n(de, D, S, 0, 0);
    return 0 < Ue && (L = s(-2, h, D, D, Ce, Ne, h.length, 0, 0, 0), L !== void 0 && (h = L)), pe = "", De = 0, Ne = Ce = 1, h;
  }
  var l = /^\0+/g, E = /[\0\r\f]/g, b = /: */g, d = /zoo|gra/, m = /([,: ])(transform)/g, p = /,\r+?/g, I = /([\t\r\n ])*\f?&/g, R = /@(k\w+)\s*(\S*)\s*/, C = /::(place)/g, H = /:(read-only)/g, f = /[svh]\w+-[tblr]{2}/, w = /\(\s*(.*)\s*\)/g, X = /([\s\S]*?);/g, ae = /-self|flex-/g, x = /[^]*?(:[rp][el]a[\w-]+)[^]*/, F = /stretch|:\s*\w+\-(?:conte|avail)/, Fe = /([^-])(image-set\()/, Ne = 1, Ce = 1, De = 0, V = 1, de = [], ke = [], Ue = 0, kn = null, xn = 0, pe = "";
  return c.use = _, c.set = u, e !== void 0 && u(e), c;
}
var Fb = {
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
function Vb(e) {
  var n = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return n[r] === void 0 && (n[r] = e(r)), n[r];
  };
}
var Wb = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Js = /* @__PURE__ */ Vb(
  function(e) {
    return Wb.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), sc = { exports: {} }, te = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qs;
function Xb() {
  if (qs)
    return te;
  qs = 1;
  var e = typeof Symbol == "function" && Symbol.for, n = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, t = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, _ = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, c = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, E = e ? Symbol.for("react.suspense_list") : 60120, b = e ? Symbol.for("react.memo") : 60115, d = e ? Symbol.for("react.lazy") : 60116, m = e ? Symbol.for("react.block") : 60121, p = e ? Symbol.for("react.fundamental") : 60117, I = e ? Symbol.for("react.responder") : 60118, R = e ? Symbol.for("react.scope") : 60119;
  function C(f) {
    if (typeof f == "object" && f !== null) {
      var w = f.$$typeof;
      switch (w) {
        case n:
          switch (f = f.type, f) {
            case _:
            case u:
            case t:
            case i:
            case o:
            case l:
              return f;
            default:
              switch (f = f && f.$$typeof, f) {
                case s:
                case c:
                case d:
                case b:
                case a:
                  return f;
                default:
                  return w;
              }
          }
        case r:
          return w;
      }
    }
  }
  function H(f) {
    return C(f) === u;
  }
  return te.AsyncMode = _, te.ConcurrentMode = u, te.ContextConsumer = s, te.ContextProvider = a, te.Element = n, te.ForwardRef = c, te.Fragment = t, te.Lazy = d, te.Memo = b, te.Portal = r, te.Profiler = i, te.StrictMode = o, te.Suspense = l, te.isAsyncMode = function(f) {
    return H(f) || C(f) === _;
  }, te.isConcurrentMode = H, te.isContextConsumer = function(f) {
    return C(f) === s;
  }, te.isContextProvider = function(f) {
    return C(f) === a;
  }, te.isElement = function(f) {
    return typeof f == "object" && f !== null && f.$$typeof === n;
  }, te.isForwardRef = function(f) {
    return C(f) === c;
  }, te.isFragment = function(f) {
    return C(f) === t;
  }, te.isLazy = function(f) {
    return C(f) === d;
  }, te.isMemo = function(f) {
    return C(f) === b;
  }, te.isPortal = function(f) {
    return C(f) === r;
  }, te.isProfiler = function(f) {
    return C(f) === i;
  }, te.isStrictMode = function(f) {
    return C(f) === o;
  }, te.isSuspense = function(f) {
    return C(f) === l;
  }, te.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === t || f === u || f === i || f === o || f === l || f === E || typeof f == "object" && f !== null && (f.$$typeof === d || f.$$typeof === b || f.$$typeof === a || f.$$typeof === s || f.$$typeof === c || f.$$typeof === p || f.$$typeof === I || f.$$typeof === R || f.$$typeof === m);
  }, te.typeOf = C, te;
}
sc.exports = Xb();
var Yb = sc.exports, Ja = Yb, Kb = {
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
}, $b = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, zb = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, _c = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, qa = {};
qa[Ja.ForwardRef] = zb;
qa[Ja.Memo] = _c;
function Zs(e) {
  return Ja.isMemo(e) ? _c : qa[e.$$typeof] || Kb;
}
var Jb = Object.defineProperty, qb = Object.getOwnPropertyNames, Qs = Object.getOwnPropertySymbols, Zb = Object.getOwnPropertyDescriptor, Qb = Object.getPrototypeOf, e_ = Object.prototype;
function uc(e, n, r) {
  if (typeof n != "string") {
    if (e_) {
      var t = Qb(n);
      t && t !== e_ && uc(e, t, r);
    }
    var o = qb(n);
    Qs && (o = o.concat(Qs(n)));
    for (var i = Zs(e), a = Zs(n), s = 0; s < o.length; ++s) {
      var _ = o[s];
      if (!$b[_] && !(r && r[_]) && !(a && a[_]) && !(i && i[_])) {
        var u = Zb(n, _);
        try {
          Jb(e, _, u);
        } catch {
        }
      }
    }
  }
  return e;
}
var eO = uc;
const nO = /* @__PURE__ */ Cm(eO);
function An() {
  return (An = Object.assign || function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var t in r)
        Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t]);
    }
    return e;
  }).apply(this, arguments);
}
var n_ = function(e, n) {
  for (var r = [e[0]], t = 0, o = n.length; t < o; t += 1)
    r.push(n[t], e[t + 1]);
  return r;
}, oa = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !ac.typeOf(e);
}, xo = Object.freeze([]), $n = Object.freeze({});
function mt(e) {
  return typeof e == "function";
}
function r_(e) {
  return e.displayName || e.name || "Component";
}
function Za(e) {
  return e && typeof e.styledComponentId == "string";
}
var wr = typeof process < "u" && ({ GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_c0bea9c6-1da0-4ab1-b7bd-d514b4a679b0", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "npm/8.19.4 node/v16.20.1 linux x64 workspaces/false ci/github-actions", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_c0bea9c6-1da0-4ab1-b7bd-d514b4a679b0", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", npm_config_noproxy: "", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-8.2", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "terminal", npm_config_userconfig: "/home/runner/.npmrc", npm_config_local_prefix: "/home/runner/work/CodeGear/CodeGear", SYSTEMD_EXEC_PID: "664", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", COLOR: "0", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.5/x64", NVM_DIR: "/home/runner/.nvm", npm_config_metrics_registry: "https://registry.npmjs.org/", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230702.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chrome_driver", JOURNAL_STREAM: "8:16336", GITHUB_WORKFLOW: "CodeGear CI", _: "/opt/hostedtoolcache/node/16.20.1/x64/bin/npm", npm_config_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", GITHUB_RUN_ID: "5523375040", npm_config_cache: "/home/runner/.npm", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "06afe0f467f7cc496f3a5a632badc23bb2da81bb", GITHUB_BASE_REF: "develop", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/pull/5/merge", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", npm_config_node_gyp: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.bin:/home/runner/work/CodeGear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_e69064f3-1714-4e18-a773-c9f1c82b8d1b", INVOCATION_ID: "67c14a02b0f14ae3b6eab84eaa78856d", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.10/x64", NODE: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "11", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 2", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "5/merge", GITHUB_REPOSITORY: "Gearonix/CodeGear", npm_lifecycle_script: " nx run-many --targets=build --all", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", STATS_NM: "true", npm_package_version: "0.0.0", npm_lifecycle_event: "build", NODE_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/bin/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/node_modules", GITHUB_REF_PROTECTED: "false", npm_config_strict_peer_dependencies: "", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "06afe0f467f7cc496f3a5a632badc23bb2da81bb", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/pull/5/merge", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", npm_config_globalconfig: "/opt/hostedtoolcache/node/16.20.1/x64/etc/npmrc", npm_config_init_module: "/home/runner/.npm-init.js", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_c0bea9c6-1da0-4ab1-b7bd-d514b4a679b0", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", npm_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/bin/npm-cli.js", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "pull_request", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_c0bea9c6-1da0-4ab1-b7bd-d514b4a679b0", npm_config_global_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", npm_command: "run-script", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.146+9/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_c0bea9c6-1da0-4ab1-b7bd-d514b4a679b0", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", EDITOR: "vi", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/5407298341986919404", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "5407298341986919404", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.REACT_APP_SC_ATTR || { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_c0bea9c6-1da0-4ab1-b7bd-d514b4a679b0", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "npm/8.19.4 node/v16.20.1 linux x64 workspaces/false ci/github-actions", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_c0bea9c6-1da0-4ab1-b7bd-d514b4a679b0", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", npm_config_noproxy: "", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-8.2", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "terminal", npm_config_userconfig: "/home/runner/.npmrc", npm_config_local_prefix: "/home/runner/work/CodeGear/CodeGear", SYSTEMD_EXEC_PID: "664", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", COLOR: "0", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.5/x64", NVM_DIR: "/home/runner/.nvm", npm_config_metrics_registry: "https://registry.npmjs.org/", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230702.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chrome_driver", JOURNAL_STREAM: "8:16336", GITHUB_WORKFLOW: "CodeGear CI", _: "/opt/hostedtoolcache/node/16.20.1/x64/bin/npm", npm_config_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", GITHUB_RUN_ID: "5523375040", npm_config_cache: "/home/runner/.npm", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "06afe0f467f7cc496f3a5a632badc23bb2da81bb", GITHUB_BASE_REF: "develop", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/pull/5/merge", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", npm_config_node_gyp: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.bin:/home/runner/work/CodeGear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_e69064f3-1714-4e18-a773-c9f1c82b8d1b", INVOCATION_ID: "67c14a02b0f14ae3b6eab84eaa78856d", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.10/x64", NODE: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "11", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 2", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "5/merge", GITHUB_REPOSITORY: "Gearonix/CodeGear", npm_lifecycle_script: " nx run-many --targets=build --all", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", STATS_NM: "true", npm_package_version: "0.0.0", npm_lifecycle_event: "build", NODE_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/bin/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/node_modules", GITHUB_REF_PROTECTED: "false", npm_config_strict_peer_dependencies: "", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "06afe0f467f7cc496f3a5a632badc23bb2da81bb", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/pull/5/merge", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", npm_config_globalconfig: "/opt/hostedtoolcache/node/16.20.1/x64/etc/npmrc", npm_config_init_module: "/home/runner/.npm-init.js", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_c0bea9c6-1da0-4ab1-b7bd-d514b4a679b0", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", npm_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/bin/npm-cli.js", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "pull_request", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_c0bea9c6-1da0-4ab1-b7bd-d514b4a679b0", npm_config_global_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", npm_command: "run-script", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.146+9/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_c0bea9c6-1da0-4ab1-b7bd-d514b4a679b0", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", EDITOR: "vi", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/5407298341986919404", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "5407298341986919404", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.SC_ATTR) || "data-styled", Qa = typeof window < "u" && "HTMLElement" in window, rO = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_c0bea9c6-1da0-4ab1-b7bd-d514b4a679b0", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "npm/8.19.4 node/v16.20.1 linux x64 workspaces/false ci/github-actions", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_c0bea9c6-1da0-4ab1-b7bd-d514b4a679b0", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", npm_config_noproxy: "", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-8.2", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "terminal", npm_config_userconfig: "/home/runner/.npmrc", npm_config_local_prefix: "/home/runner/work/CodeGear/CodeGear", SYSTEMD_EXEC_PID: "664", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", COLOR: "0", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.5/x64", NVM_DIR: "/home/runner/.nvm", npm_config_metrics_registry: "https://registry.npmjs.org/", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230702.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chrome_driver", JOURNAL_STREAM: "8:16336", GITHUB_WORKFLOW: "CodeGear CI", _: "/opt/hostedtoolcache/node/16.20.1/x64/bin/npm", npm_config_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", GITHUB_RUN_ID: "5523375040", npm_config_cache: "/home/runner/.npm", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "06afe0f467f7cc496f3a5a632badc23bb2da81bb", GITHUB_BASE_REF: "develop", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/pull/5/merge", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", npm_config_node_gyp: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.bin:/home/runner/work/CodeGear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_e69064f3-1714-4e18-a773-c9f1c82b8d1b", INVOCATION_ID: "67c14a02b0f14ae3b6eab84eaa78856d", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.10/x64", NODE: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "11", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 2", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "5/merge", GITHUB_REPOSITORY: "Gearonix/CodeGear", npm_lifecycle_script: " nx run-many --targets=build --all", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", STATS_NM: "true", npm_package_version: "0.0.0", npm_lifecycle_event: "build", NODE_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/bin/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/node_modules", GITHUB_REF_PROTECTED: "false", npm_config_strict_peer_dependencies: "", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "06afe0f467f7cc496f3a5a632badc23bb2da81bb", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/pull/5/merge", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", npm_config_globalconfig: "/opt/hostedtoolcache/node/16.20.1/x64/etc/npmrc", npm_config_init_module: "/home/runner/.npm-init.js", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_c0bea9c6-1da0-4ab1-b7bd-d514b4a679b0", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", npm_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/bin/npm-cli.js", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "pull_request", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_c0bea9c6-1da0-4ab1-b7bd-d514b4a679b0", npm_config_global_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", npm_command: "run-script", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.146+9/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_c0bea9c6-1da0-4ab1-b7bd-d514b4a679b0", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", EDITOR: "vi", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/5407298341986919404", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "5407298341986919404", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_c0bea9c6-1da0-4ab1-b7bd-d514b4a679b0", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "npm/8.19.4 node/v16.20.1 linux x64 workspaces/false ci/github-actions", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_c0bea9c6-1da0-4ab1-b7bd-d514b4a679b0", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", npm_config_noproxy: "", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-8.2", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "terminal", npm_config_userconfig: "/home/runner/.npmrc", npm_config_local_prefix: "/home/runner/work/CodeGear/CodeGear", SYSTEMD_EXEC_PID: "664", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", COLOR: "0", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.5/x64", NVM_DIR: "/home/runner/.nvm", npm_config_metrics_registry: "https://registry.npmjs.org/", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230702.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chrome_driver", JOURNAL_STREAM: "8:16336", GITHUB_WORKFLOW: "CodeGear CI", _: "/opt/hostedtoolcache/node/16.20.1/x64/bin/npm", npm_config_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", GITHUB_RUN_ID: "5523375040", npm_config_cache: "/home/runner/.npm", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "06afe0f467f7cc496f3a5a632badc23bb2da81bb", GITHUB_BASE_REF: "develop", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/pull/5/merge", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", npm_config_node_gyp: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.bin:/home/runner/work/CodeGear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_e69064f3-1714-4e18-a773-c9f1c82b8d1b", INVOCATION_ID: "67c14a02b0f14ae3b6eab84eaa78856d", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.10/x64", NODE: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "11", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 2", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "5/merge", GITHUB_REPOSITORY: "Gearonix/CodeGear", npm_lifecycle_script: " nx run-many --targets=build --all", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", STATS_NM: "true", npm_package_version: "0.0.0", npm_lifecycle_event: "build", NODE_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/bin/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/node_modules", GITHUB_REF_PROTECTED: "false", npm_config_strict_peer_dependencies: "", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "06afe0f467f7cc496f3a5a632badc23bb2da81bb", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/pull/5/merge", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", npm_config_globalconfig: "/opt/hostedtoolcache/node/16.20.1/x64/etc/npmrc", npm_config_init_module: "/home/runner/.npm-init.js", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_c0bea9c6-1da0-4ab1-b7bd-d514b4a679b0", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", npm_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/bin/npm-cli.js", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "pull_request", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_c0bea9c6-1da0-4ab1-b7bd-d514b4a679b0", npm_config_global_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", npm_command: "run-script", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.146+9/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_c0bea9c6-1da0-4ab1-b7bd-d514b4a679b0", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", EDITOR: "vi", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/5407298341986919404", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "5407298341986919404", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.REACT_APP_SC_DISABLE_SPEEDY !== "" ? { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_c0bea9c6-1da0-4ab1-b7bd-d514b4a679b0", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "npm/8.19.4 node/v16.20.1 linux x64 workspaces/false ci/github-actions", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_c0bea9c6-1da0-4ab1-b7bd-d514b4a679b0", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", npm_config_noproxy: "", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-8.2", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "terminal", npm_config_userconfig: "/home/runner/.npmrc", npm_config_local_prefix: "/home/runner/work/CodeGear/CodeGear", SYSTEMD_EXEC_PID: "664", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", COLOR: "0", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.5/x64", NVM_DIR: "/home/runner/.nvm", npm_config_metrics_registry: "https://registry.npmjs.org/", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230702.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chrome_driver", JOURNAL_STREAM: "8:16336", GITHUB_WORKFLOW: "CodeGear CI", _: "/opt/hostedtoolcache/node/16.20.1/x64/bin/npm", npm_config_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", GITHUB_RUN_ID: "5523375040", npm_config_cache: "/home/runner/.npm", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "06afe0f467f7cc496f3a5a632badc23bb2da81bb", GITHUB_BASE_REF: "develop", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/pull/5/merge", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", npm_config_node_gyp: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.bin:/home/runner/work/CodeGear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_e69064f3-1714-4e18-a773-c9f1c82b8d1b", INVOCATION_ID: "67c14a02b0f14ae3b6eab84eaa78856d", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.10/x64", NODE: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "11", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 2", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "5/merge", GITHUB_REPOSITORY: "Gearonix/CodeGear", npm_lifecycle_script: " nx run-many --targets=build --all", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", STATS_NM: "true", npm_package_version: "0.0.0", npm_lifecycle_event: "build", NODE_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/bin/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/node_modules", GITHUB_REF_PROTECTED: "false", npm_config_strict_peer_dependencies: "", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "06afe0f467f7cc496f3a5a632badc23bb2da81bb", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/pull/5/merge", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", npm_config_globalconfig: "/opt/hostedtoolcache/node/16.20.1/x64/etc/npmrc", npm_config_init_module: "/home/runner/.npm-init.js", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_c0bea9c6-1da0-4ab1-b7bd-d514b4a679b0", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", npm_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/bin/npm-cli.js", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "pull_request", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_c0bea9c6-1da0-4ab1-b7bd-d514b4a679b0", npm_config_global_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", npm_command: "run-script", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.146+9/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_c0bea9c6-1da0-4ab1-b7bd-d514b4a679b0", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", EDITOR: "vi", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/5407298341986919404", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "5407298341986919404", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.REACT_APP_SC_DISABLE_SPEEDY !== "false" && { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_c0bea9c6-1da0-4ab1-b7bd-d514b4a679b0", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "npm/8.19.4 node/v16.20.1 linux x64 workspaces/false ci/github-actions", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_c0bea9c6-1da0-4ab1-b7bd-d514b4a679b0", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", npm_config_noproxy: "", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-8.2", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "terminal", npm_config_userconfig: "/home/runner/.npmrc", npm_config_local_prefix: "/home/runner/work/CodeGear/CodeGear", SYSTEMD_EXEC_PID: "664", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", COLOR: "0", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.5/x64", NVM_DIR: "/home/runner/.nvm", npm_config_metrics_registry: "https://registry.npmjs.org/", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230702.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chrome_driver", JOURNAL_STREAM: "8:16336", GITHUB_WORKFLOW: "CodeGear CI", _: "/opt/hostedtoolcache/node/16.20.1/x64/bin/npm", npm_config_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", GITHUB_RUN_ID: "5523375040", npm_config_cache: "/home/runner/.npm", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "06afe0f467f7cc496f3a5a632badc23bb2da81bb", GITHUB_BASE_REF: "develop", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/pull/5/merge", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", npm_config_node_gyp: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.bin:/home/runner/work/CodeGear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_e69064f3-1714-4e18-a773-c9f1c82b8d1b", INVOCATION_ID: "67c14a02b0f14ae3b6eab84eaa78856d", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.10/x64", NODE: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "11", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 2", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "5/merge", GITHUB_REPOSITORY: "Gearonix/CodeGear", npm_lifecycle_script: " nx run-many --targets=build --all", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", STATS_NM: "true", npm_package_version: "0.0.0", npm_lifecycle_event: "build", NODE_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/bin/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/node_modules", GITHUB_REF_PROTECTED: "false", npm_config_strict_peer_dependencies: "", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "06afe0f467f7cc496f3a5a632badc23bb2da81bb", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/pull/5/merge", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", npm_config_globalconfig: "/opt/hostedtoolcache/node/16.20.1/x64/etc/npmrc", npm_config_init_module: "/home/runner/.npm-init.js", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_c0bea9c6-1da0-4ab1-b7bd-d514b4a679b0", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", npm_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/bin/npm-cli.js", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "pull_request", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_c0bea9c6-1da0-4ab1-b7bd-d514b4a679b0", npm_config_global_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", npm_command: "run-script", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.146+9/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_c0bea9c6-1da0-4ab1-b7bd-d514b4a679b0", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", EDITOR: "vi", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/5407298341986919404", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "5407298341986919404", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_c0bea9c6-1da0-4ab1-b7bd-d514b4a679b0", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "npm/8.19.4 node/v16.20.1 linux x64 workspaces/false ci/github-actions", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_c0bea9c6-1da0-4ab1-b7bd-d514b4a679b0", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", npm_config_noproxy: "", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-8.2", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "terminal", npm_config_userconfig: "/home/runner/.npmrc", npm_config_local_prefix: "/home/runner/work/CodeGear/CodeGear", SYSTEMD_EXEC_PID: "664", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", COLOR: "0", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.5/x64", NVM_DIR: "/home/runner/.nvm", npm_config_metrics_registry: "https://registry.npmjs.org/", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230702.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chrome_driver", JOURNAL_STREAM: "8:16336", GITHUB_WORKFLOW: "CodeGear CI", _: "/opt/hostedtoolcache/node/16.20.1/x64/bin/npm", npm_config_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", GITHUB_RUN_ID: "5523375040", npm_config_cache: "/home/runner/.npm", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "06afe0f467f7cc496f3a5a632badc23bb2da81bb", GITHUB_BASE_REF: "develop", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/pull/5/merge", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", npm_config_node_gyp: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.bin:/home/runner/work/CodeGear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_e69064f3-1714-4e18-a773-c9f1c82b8d1b", INVOCATION_ID: "67c14a02b0f14ae3b6eab84eaa78856d", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.10/x64", NODE: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "11", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 2", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "5/merge", GITHUB_REPOSITORY: "Gearonix/CodeGear", npm_lifecycle_script: " nx run-many --targets=build --all", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", STATS_NM: "true", npm_package_version: "0.0.0", npm_lifecycle_event: "build", NODE_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/bin/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/node_modules", GITHUB_REF_PROTECTED: "false", npm_config_strict_peer_dependencies: "", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "06afe0f467f7cc496f3a5a632badc23bb2da81bb", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/pull/5/merge", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", npm_config_globalconfig: "/opt/hostedtoolcache/node/16.20.1/x64/etc/npmrc", npm_config_init_module: "/home/runner/.npm-init.js", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_c0bea9c6-1da0-4ab1-b7bd-d514b4a679b0", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", npm_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/bin/npm-cli.js", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "pull_request", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_c0bea9c6-1da0-4ab1-b7bd-d514b4a679b0", npm_config_global_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", npm_command: "run-script", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.146+9/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_c0bea9c6-1da0-4ab1-b7bd-d514b4a679b0", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", EDITOR: "vi", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/5407298341986919404", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "5407298341986919404", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.SC_DISABLE_SPEEDY !== void 0 && { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_c0bea9c6-1da0-4ab1-b7bd-d514b4a679b0", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "npm/8.19.4 node/v16.20.1 linux x64 workspaces/false ci/github-actions", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_c0bea9c6-1da0-4ab1-b7bd-d514b4a679b0", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", npm_config_noproxy: "", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-8.2", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "terminal", npm_config_userconfig: "/home/runner/.npmrc", npm_config_local_prefix: "/home/runner/work/CodeGear/CodeGear", SYSTEMD_EXEC_PID: "664", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", COLOR: "0", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.5/x64", NVM_DIR: "/home/runner/.nvm", npm_config_metrics_registry: "https://registry.npmjs.org/", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230702.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chrome_driver", JOURNAL_STREAM: "8:16336", GITHUB_WORKFLOW: "CodeGear CI", _: "/opt/hostedtoolcache/node/16.20.1/x64/bin/npm", npm_config_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", GITHUB_RUN_ID: "5523375040", npm_config_cache: "/home/runner/.npm", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "06afe0f467f7cc496f3a5a632badc23bb2da81bb", GITHUB_BASE_REF: "develop", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/pull/5/merge", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", npm_config_node_gyp: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.bin:/home/runner/work/CodeGear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_e69064f3-1714-4e18-a773-c9f1c82b8d1b", INVOCATION_ID: "67c14a02b0f14ae3b6eab84eaa78856d", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.10/x64", NODE: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "11", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 2", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "5/merge", GITHUB_REPOSITORY: "Gearonix/CodeGear", npm_lifecycle_script: " nx run-many --targets=build --all", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", STATS_NM: "true", npm_package_version: "0.0.0", npm_lifecycle_event: "build", NODE_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/bin/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/node_modules", GITHUB_REF_PROTECTED: "false", npm_config_strict_peer_dependencies: "", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "06afe0f467f7cc496f3a5a632badc23bb2da81bb", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/pull/5/merge", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", npm_config_globalconfig: "/opt/hostedtoolcache/node/16.20.1/x64/etc/npmrc", npm_config_init_module: "/home/runner/.npm-init.js", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_c0bea9c6-1da0-4ab1-b7bd-d514b4a679b0", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", npm_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/bin/npm-cli.js", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "pull_request", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_c0bea9c6-1da0-4ab1-b7bd-d514b4a679b0", npm_config_global_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", npm_command: "run-script", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.146+9/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_c0bea9c6-1da0-4ab1-b7bd-d514b4a679b0", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", EDITOR: "vi", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/5407298341986919404", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "5407298341986919404", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.SC_DISABLE_SPEEDY !== "" && { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_c0bea9c6-1da0-4ab1-b7bd-d514b4a679b0", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "npm/8.19.4 node/v16.20.1 linux x64 workspaces/false ci/github-actions", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_c0bea9c6-1da0-4ab1-b7bd-d514b4a679b0", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", npm_config_noproxy: "", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-8.2", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "terminal", npm_config_userconfig: "/home/runner/.npmrc", npm_config_local_prefix: "/home/runner/work/CodeGear/CodeGear", SYSTEMD_EXEC_PID: "664", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", COLOR: "0", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.5/x64", NVM_DIR: "/home/runner/.nvm", npm_config_metrics_registry: "https://registry.npmjs.org/", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230702.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chrome_driver", JOURNAL_STREAM: "8:16336", GITHUB_WORKFLOW: "CodeGear CI", _: "/opt/hostedtoolcache/node/16.20.1/x64/bin/npm", npm_config_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", GITHUB_RUN_ID: "5523375040", npm_config_cache: "/home/runner/.npm", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "06afe0f467f7cc496f3a5a632badc23bb2da81bb", GITHUB_BASE_REF: "develop", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/pull/5/merge", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", npm_config_node_gyp: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.bin:/home/runner/work/CodeGear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_e69064f3-1714-4e18-a773-c9f1c82b8d1b", INVOCATION_ID: "67c14a02b0f14ae3b6eab84eaa78856d", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.10/x64", NODE: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "11", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 2", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "5/merge", GITHUB_REPOSITORY: "Gearonix/CodeGear", npm_lifecycle_script: " nx run-many --targets=build --all", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", STATS_NM: "true", npm_package_version: "0.0.0", npm_lifecycle_event: "build", NODE_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/bin/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/node_modules", GITHUB_REF_PROTECTED: "false", npm_config_strict_peer_dependencies: "", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "06afe0f467f7cc496f3a5a632badc23bb2da81bb", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/pull/5/merge", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", npm_config_globalconfig: "/opt/hostedtoolcache/node/16.20.1/x64/etc/npmrc", npm_config_init_module: "/home/runner/.npm-init.js", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_c0bea9c6-1da0-4ab1-b7bd-d514b4a679b0", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", npm_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/bin/npm-cli.js", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "pull_request", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_c0bea9c6-1da0-4ab1-b7bd-d514b4a679b0", npm_config_global_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", npm_command: "run-script", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.146+9/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_c0bea9c6-1da0-4ab1-b7bd-d514b4a679b0", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", EDITOR: "vi", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/5407298341986919404", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "5407298341986919404", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.SC_DISABLE_SPEEDY !== "false" && { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_c0bea9c6-1da0-4ab1-b7bd-d514b4a679b0", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "npm/8.19.4 node/v16.20.1 linux x64 workspaces/false ci/github-actions", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_c0bea9c6-1da0-4ab1-b7bd-d514b4a679b0", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", npm_config_noproxy: "", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-8.2", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "terminal", npm_config_userconfig: "/home/runner/.npmrc", npm_config_local_prefix: "/home/runner/work/CodeGear/CodeGear", SYSTEMD_EXEC_PID: "664", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", COLOR: "0", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.5/x64", NVM_DIR: "/home/runner/.nvm", npm_config_metrics_registry: "https://registry.npmjs.org/", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230702.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chrome_driver", JOURNAL_STREAM: "8:16336", GITHUB_WORKFLOW: "CodeGear CI", _: "/opt/hostedtoolcache/node/16.20.1/x64/bin/npm", npm_config_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", GITHUB_RUN_ID: "5523375040", npm_config_cache: "/home/runner/.npm", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "06afe0f467f7cc496f3a5a632badc23bb2da81bb", GITHUB_BASE_REF: "develop", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/pull/5/merge", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", npm_config_node_gyp: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.bin:/home/runner/work/CodeGear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_e69064f3-1714-4e18-a773-c9f1c82b8d1b", INVOCATION_ID: "67c14a02b0f14ae3b6eab84eaa78856d", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.10/x64", NODE: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "11", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 2", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "5/merge", GITHUB_REPOSITORY: "Gearonix/CodeGear", npm_lifecycle_script: " nx run-many --targets=build --all", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", STATS_NM: "true", npm_package_version: "0.0.0", npm_lifecycle_event: "build", NODE_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/bin/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/node_modules", GITHUB_REF_PROTECTED: "false", npm_config_strict_peer_dependencies: "", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "06afe0f467f7cc496f3a5a632badc23bb2da81bb", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/pull/5/merge", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", npm_config_globalconfig: "/opt/hostedtoolcache/node/16.20.1/x64/etc/npmrc", npm_config_init_module: "/home/runner/.npm-init.js", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_c0bea9c6-1da0-4ab1-b7bd-d514b4a679b0", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", npm_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/bin/npm-cli.js", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "pull_request", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_c0bea9c6-1da0-4ab1-b7bd-d514b4a679b0", npm_config_global_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", npm_command: "run-script", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.146+9/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_c0bea9c6-1da0-4ab1-b7bd-d514b4a679b0", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", EDITOR: "vi", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/5407298341986919404", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "5407298341986919404", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.SC_DISABLE_SPEEDY);
function kt(e) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), t = 1; t < n; t++)
    r[t - 1] = arguments[t];
  throw new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (r.length > 0 ? " Args: " + r.join(", ") : ""));
}
var tO = function() {
  function e(r) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = r;
  }
  var n = e.prototype;
  return n.indexOfGroup = function(r) {
    for (var t = 0, o = 0; o < r; o++)
      t += this.groupSizes[o];
    return t;
  }, n.insertRules = function(r, t) {
    if (r >= this.groupSizes.length) {
      for (var o = this.groupSizes, i = o.length, a = i; r >= a; )
        (a <<= 1) < 0 && kt(16, "" + r);
      this.groupSizes = new Uint32Array(a), this.groupSizes.set(o), this.length = a;
      for (var s = i; s < a; s++)
        this.groupSizes[s] = 0;
    }
    for (var _ = this.indexOfGroup(r + 1), u = 0, c = t.length; u < c; u++)
      this.tag.insertRule(_, t[u]) && (this.groupSizes[r]++, _++);
  }, n.clearGroup = function(r) {
    if (r < this.length) {
      var t = this.groupSizes[r], o = this.indexOfGroup(r), i = o + t;
      this.groupSizes[r] = 0;
      for (var a = o; a < i; a++)
        this.tag.deleteRule(o);
    }
  }, n.getGroup = function(r) {
    var t = "";
    if (r >= this.length || this.groupSizes[r] === 0)
      return t;
    for (var o = this.groupSizes[r], i = this.indexOfGroup(r), a = i + o, s = i; s < a; s++)
      t += this.tag.getRule(s) + `/*!sc*/
`;
    return t;
  }, e;
}(), po = /* @__PURE__ */ new Map(), Lo = /* @__PURE__ */ new Map(), et = 1, Kt = function(e) {
  if (po.has(e))
    return po.get(e);
  for (; Lo.has(et); )
    et++;
  var n = et++;
  return po.set(e, n), Lo.set(n, e), n;
}, oO = function(e) {
  return Lo.get(e);
}, iO = function(e, n) {
  n >= et && (et = n + 1), po.set(e, n), Lo.set(n, e);
}, aO = "style[" + wr + '][data-styled-version="5.3.6"]', sO = new RegExp("^" + wr + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), _O = function(e, n, r) {
  for (var t, o = r.split(","), i = 0, a = o.length; i < a; i++)
    (t = o[i]) && e.registerName(n, t);
}, uO = function(e, n) {
  for (var r = (n.textContent || "").split(`/*!sc*/
`), t = [], o = 0, i = r.length; o < i; o++) {
    var a = r[o].trim();
    if (a) {
      var s = a.match(sO);
      if (s) {
        var _ = 0 | parseInt(s[1], 10), u = s[2];
        _ !== 0 && (iO(u, _), _O(e, u, s[3]), e.getTag().insertRules(_, t)), t.length = 0;
      } else
        t.push(a);
    }
  }
}, lO = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, lc = function(e) {
  var n = document.head, r = e || n, t = document.createElement("style"), o = function(s) {
    for (var _ = s.childNodes, u = _.length; u >= 0; u--) {
      var c = _[u];
      if (c && c.nodeType === 1 && c.hasAttribute(wr))
        return c;
    }
  }(r), i = o !== void 0 ? o.nextSibling : null;
  t.setAttribute(wr, "active"), t.setAttribute("data-styled-version", "5.3.6");
  var a = lO();
  return a && t.setAttribute("nonce", a), r.insertBefore(t, i), t;
}, cO = function() {
  function e(r) {
    var t = this.element = lc(r);
    t.appendChild(document.createTextNode("")), this.sheet = function(o) {
      if (o.sheet)
        return o.sheet;
      for (var i = document.styleSheets, a = 0, s = i.length; a < s; a++) {
        var _ = i[a];
        if (_.ownerNode === o)
          return _;
      }
      kt(17);
    }(t), this.length = 0;
  }
  var n = e.prototype;
  return n.insertRule = function(r, t) {
    try {
      return this.sheet.insertRule(t, r), this.length++, !0;
    } catch {
      return !1;
    }
  }, n.deleteRule = function(r) {
    this.sheet.deleteRule(r), this.length--;
  }, n.getRule = function(r) {
    var t = this.sheet.cssRules[r];
    return t !== void 0 && typeof t.cssText == "string" ? t.cssText : "";
  }, e;
}(), dO = function() {
  function e(r) {
    var t = this.element = lc(r);
    this.nodes = t.childNodes, this.length = 0;
  }
  var n = e.prototype;
  return n.insertRule = function(r, t) {
    if (r <= this.length && r >= 0) {
      var o = document.createTextNode(t), i = this.nodes[r];
      return this.element.insertBefore(o, i || null), this.length++, !0;
    }
    return !1;
  }, n.deleteRule = function(r) {
    this.element.removeChild(this.nodes[r]), this.length--;
  }, n.getRule = function(r) {
    return r < this.length ? this.nodes[r].textContent : "";
  }, e;
}(), mO = function() {
  function e(r) {
    this.rules = [], this.length = 0;
  }
  var n = e.prototype;
  return n.insertRule = function(r, t) {
    return r <= this.length && (this.rules.splice(r, 0, t), this.length++, !0);
  }, n.deleteRule = function(r) {
    this.rules.splice(r, 1), this.length--;
  }, n.getRule = function(r) {
    return r < this.length ? this.rules[r] : "";
  }, e;
}(), t_ = Qa, hO = { isServer: !Qa, useCSSOMInjection: !rO }, cc = function() {
  function e(r, t, o) {
    r === void 0 && (r = $n), t === void 0 && (t = {}), this.options = An({}, hO, {}, r), this.gs = t, this.names = new Map(o), this.server = !!r.isServer, !this.server && Qa && t_ && (t_ = !1, function(i) {
      for (var a = document.querySelectorAll(aO), s = 0, _ = a.length; s < _; s++) {
        var u = a[s];
        u && u.getAttribute(wr) !== "active" && (uO(i, u), u.parentNode && u.parentNode.removeChild(u));
      }
    }(this));
  }
  e.registerId = function(r) {
    return Kt(r);
  };
  var n = e.prototype;
  return n.reconstructWithOptions = function(r, t) {
    return t === void 0 && (t = !0), new e(An({}, this.options, {}, r), this.gs, t && this.names || void 0);
  }, n.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, n.getTag = function() {
    return this.tag || (this.tag = (o = (t = this.options).isServer, i = t.useCSSOMInjection, a = t.target, r = o ? new mO(a) : i ? new cO(a) : new dO(a), new tO(r)));
    var r, t, o, i, a;
  }, n.hasNameForId = function(r, t) {
    return this.names.has(r) && this.names.get(r).has(t);
  }, n.registerName = function(r, t) {
    if (Kt(r), this.names.has(r))
      this.names.get(r).add(t);
    else {
      var o = /* @__PURE__ */ new Set();
      o.add(t), this.names.set(r, o);
    }
  }, n.insertRules = function(r, t, o) {
    this.registerName(r, t), this.getTag().insertRules(Kt(r), o);
  }, n.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, n.clearRules = function(r) {
    this.getTag().clearGroup(Kt(r)), this.clearNames(r);
  }, n.clearTag = function() {
    this.tag = void 0;
  }, n.toString = function() {
    return function(r) {
      for (var t = r.getTag(), o = t.length, i = "", a = 0; a < o; a++) {
        var s = oO(a);
        if (s !== void 0) {
          var _ = r.names.get(s), u = t.getGroup(a);
          if (_ && u && _.size) {
            var c = wr + ".g" + a + '[id="' + s + '"]', l = "";
            _ !== void 0 && _.forEach(function(E) {
              E.length > 0 && (l += E + ",");
            }), i += "" + u + c + '{content:"' + l + `"}/*!sc*/
`;
          }
        }
      }
      return i;
    }(this);
  }, e;
}(), pO = /(a)(d)/gi, o_ = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function ia(e) {
  var n, r = "";
  for (n = Math.abs(e); n > 52; n = n / 52 | 0)
    r = o_(n % 52) + r;
  return (o_(n % 52) + r).replace(pO, "$1-$2");
}
var Nr = function(e, n) {
  for (var r = n.length; r; )
    e = 33 * e ^ n.charCodeAt(--r);
  return e;
}, dc = function(e) {
  return Nr(5381, e);
};
function fO(e) {
  for (var n = 0; n < e.length; n += 1) {
    var r = e[n];
    if (mt(r) && !Za(r))
      return !1;
  }
  return !0;
}
var TO = dc("5.3.6"), EO = function() {
  function e(n, r, t) {
    this.rules = n, this.staticRulesId = "", this.isStatic = (t === void 0 || t.isStatic) && fO(n), this.componentId = r, this.baseHash = Nr(TO, r), this.baseStyle = t, cc.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(n, r, t) {
    var o = this.componentId, i = [];
    if (this.baseStyle && i.push(this.baseStyle.generateAndInjectStyles(n, r, t)), this.isStatic && !t.hash)
      if (this.staticRulesId && r.hasNameForId(o, this.staticRulesId))
        i.push(this.staticRulesId);
      else {
        var a = Mr(this.rules, n, r, t).join(""), s = ia(Nr(this.baseHash, a) >>> 0);
        if (!r.hasNameForId(o, s)) {
          var _ = t(a, "." + s, void 0, o);
          r.insertRules(o, s, _);
        }
        i.push(s), this.staticRulesId = s;
      }
    else {
      for (var u = this.rules.length, c = Nr(this.baseHash, t.hash), l = "", E = 0; E < u; E++) {
        var b = this.rules[E];
        if (typeof b == "string")
          l += b;
        else if (b) {
          var d = Mr(b, n, r, t), m = Array.isArray(d) ? d.join("") : d;
          c = Nr(c, m + E), l += m;
        }
      }
      if (l) {
        var p = ia(c >>> 0);
        if (!r.hasNameForId(o, p)) {
          var I = t(l, "." + p, void 0, o);
          r.insertRules(o, p, I);
        }
        i.push(p);
      }
    }
    return i.join(" ");
  }, e;
}(), bO = /^\s*\/\/.*$/gm, OO = [":", "[", ".", "#"];
function RO(e) {
  var n, r, t, o, i = e === void 0 ? $n : e, a = i.options, s = a === void 0 ? $n : a, _ = i.plugins, u = _ === void 0 ? xo : _, c = new jb(s), l = [], E = function(m) {
    function p(I) {
      if (I)
        try {
          m(I + "}");
        } catch {
        }
    }
    return function(I, R, C, H, f, w, X, ae, x, F) {
      switch (I) {
        case 1:
          if (x === 0 && R.charCodeAt(0) === 64)
            return m(R + ";"), "";
          break;
        case 2:
          if (ae === 0)
            return R + "/*|*/";
          break;
        case 3:
          switch (ae) {
            case 102:
            case 112:
              return m(C[0] + R), "";
            default:
              return R + (F === 0 ? "/*|*/" : "");
          }
        case -2:
          R.split("/*|*/}").forEach(p);
      }
    };
  }(function(m) {
    l.push(m);
  }), b = function(m, p, I) {
    return p === 0 && OO.indexOf(I[r.length]) !== -1 || I.match(o) ? m : "." + n;
  };
  function d(m, p, I, R) {
    R === void 0 && (R = "&");
    var C = m.replace(bO, ""), H = p && I ? I + " " + p + " { " + C + " }" : C;
    return n = R, r = p, t = new RegExp("\\" + r + "\\b", "g"), o = new RegExp("(\\" + r + "\\b){2,}"), c(I || !p ? "" : p, H);
  }
  return c.use([].concat(u, [function(m, p, I) {
    m === 2 && I.length && I[0].lastIndexOf(r) > 0 && (I[0] = I[0].replace(t, b));
  }, E, function(m) {
    if (m === -2) {
      var p = l;
      return l = [], p;
    }
  }])), d.hash = u.length ? u.reduce(function(m, p) {
    return p.name || kt(15), Nr(m, p.name);
  }, 5381).toString() : "", d;
}
var mc = he.createContext();
mc.Consumer;
var hc = he.createContext(), NO = (hc.Consumer, new cc()), aa = RO();
function IO() {
  return yn(mc) || NO;
}
function gO() {
  return yn(hc) || aa;
}
var AO = function() {
  function e(n, r) {
    var t = this;
    this.inject = function(o, i) {
      i === void 0 && (i = aa);
      var a = t.name + i.hash;
      o.hasNameForId(t.id, a) || o.insertRules(t.id, a, i(t.rules, a, "@keyframes"));
    }, this.toString = function() {
      return kt(12, String(t.name));
    }, this.name = n, this.id = "sc-keyframes-" + n, this.rules = r;
  }
  return e.prototype.getName = function(n) {
    return n === void 0 && (n = aa), this.name + n.hash;
  }, e;
}(), SO = /([A-Z])/, GO = /([A-Z])/g, vO = /^ms-/, CO = function(e) {
  return "-" + e.toLowerCase();
};
function i_(e) {
  return SO.test(e) ? e.replace(GO, CO).replace(vO, "-ms-") : e;
}
var a_ = function(e) {
  return e == null || e === !1 || e === "";
};
function Mr(e, n, r, t) {
  if (Array.isArray(e)) {
    for (var o, i = [], a = 0, s = e.length; a < s; a += 1)
      (o = Mr(e[a], n, r, t)) !== "" && (Array.isArray(o) ? i.push.apply(i, o) : i.push(o));
    return i;
  }
  if (a_(e))
    return "";
  if (Za(e))
    return "." + e.styledComponentId;
  if (mt(e)) {
    if (typeof (u = e) != "function" || u.prototype && u.prototype.isReactComponent || !n)
      return e;
    var _ = e(n);
    return Mr(_, n, r, t);
  }
  var u;
  return e instanceof AO ? r ? (e.inject(r, t), e.getName(t)) : e : oa(e) ? function c(l, E) {
    var b, d, m = [];
    for (var p in l)
      l.hasOwnProperty(p) && !a_(l[p]) && (Array.isArray(l[p]) && l[p].isCss || mt(l[p]) ? m.push(i_(p) + ":", l[p], ";") : oa(l[p]) ? m.push.apply(m, c(l[p], p)) : m.push(i_(p) + ": " + (b = p, (d = l[p]) == null || typeof d == "boolean" || d === "" ? "" : typeof d != "number" || d === 0 || b in Fb ? String(d).trim() : d + "px") + ";"));
    return E ? [E + " {"].concat(m, ["}"]) : m;
  }(e) : e.toString();
}
var s_ = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function En(e) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), t = 1; t < n; t++)
    r[t - 1] = arguments[t];
  return mt(e) || oa(e) ? s_(Mr(n_(xo, [e].concat(r)))) : r.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : s_(Mr(n_(e, r)));
}
var DO = function(e, n, r) {
  return r === void 0 && (r = $n), e.theme !== r.theme && e.theme || n || r.theme;
}, UO = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, HO = /(^-|-$)/g;
function vi(e) {
  return e.replace(UO, "-").replace(HO, "");
}
var yO = function(e) {
  return ia(dc(e) >>> 0);
};
function $t(e) {
  return typeof e == "string" && !0;
}
var sa = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, PO = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function wO(e, n, r) {
  var t = e[r];
  sa(n) && sa(t) ? pc(t, n) : e[r] = n;
}
function pc(e) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), t = 1; t < n; t++)
    r[t - 1] = arguments[t];
  for (var o = 0, i = r; o < i.length; o++) {
    var a = i[o];
    if (sa(a))
      for (var s in a)
        PO(s) && wO(e, a[s], s);
  }
  return e;
}
var fc = he.createContext();
fc.Consumer;
var Ci = {};
function Tc(e, n, r) {
  var t = Za(e), o = !$t(e), i = n.attrs, a = i === void 0 ? xo : i, s = n.componentId, _ = s === void 0 ? function(R, C) {
    var H = typeof R != "string" ? "sc" : vi(R);
    Ci[H] = (Ci[H] || 0) + 1;
    var f = H + "-" + yO("5.3.6" + H + Ci[H]);
    return C ? C + "-" + f : f;
  }(n.displayName, n.parentComponentId) : s, u = n.displayName, c = u === void 0 ? function(R) {
    return $t(R) ? "styled." + R : "Styled(" + r_(R) + ")";
  }(e) : u, l = n.displayName && n.componentId ? vi(n.displayName) + "-" + n.componentId : n.componentId || _, E = t && e.attrs ? Array.prototype.concat(e.attrs, a).filter(Boolean) : a, b = n.shouldForwardProp;
  t && e.shouldForwardProp && (b = n.shouldForwardProp ? function(R, C, H) {
    return e.shouldForwardProp(R, C, H) && n.shouldForwardProp(R, C, H);
  } : e.shouldForwardProp);
  var d, m = new EO(r, l, t ? e.componentStyle : void 0), p = m.isStatic && a.length === 0, I = function(R, C) {
    return function(H, f, w, X) {
      var ae = H.attrs, x = H.componentStyle, F = H.defaultProps, Fe = H.foldedComponentIds, Ne = H.shouldForwardProp, Ce = H.styledComponentId, De = H.target, V = function(L, h, Q) {
        L === void 0 && (L = $n);
        var g = An({}, h, { theme: L }), me = {};
        return Q.forEach(function(ee) {
          var oe, B, Ie, xe = ee;
          for (oe in mt(xe) && (xe = xe(g)), xe)
            g[oe] = me[oe] = oe === "className" ? (B = me[oe], Ie = xe[oe], B && Ie ? B + " " + Ie : B || Ie) : xe[oe];
        }), [g, me];
      }(DO(f, yn(fc), F) || $n, f, ae), de = V[0], ke = V[1], Ue = function(L, h, Q, g) {
        var me = IO(), ee = gO(), oe = h ? L.generateAndInjectStyles($n, me, ee) : L.generateAndInjectStyles(Q, me, ee);
        return oe;
      }(x, X, de), kn = w, xn = ke.$as || f.$as || ke.as || f.as || De, pe = $t(xn), v = ke !== f ? An({}, f, {}, ke) : f, S = {};
      for (var D in v)
        D[0] !== "$" && D !== "as" && (D === "forwardedAs" ? S.as = v[D] : (Ne ? Ne(D, Js, xn) : !pe || Js(D)) && (S[D] = v[D]));
      return f.style && ke.style !== f.style && (S.style = An({}, f.style, {}, ke.style)), S.className = Array.prototype.concat(Fe, Ce, Ue !== Ce ? Ue : null, f.className, ke.className).filter(Boolean).join(" "), S.ref = kn, wc(xn, S);
    }(d, R, C, p);
  };
  return I.displayName = c, (d = he.forwardRef(I)).attrs = E, d.componentStyle = m, d.displayName = c, d.shouldForwardProp = b, d.foldedComponentIds = t ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : xo, d.styledComponentId = l, d.target = t ? e.target : e, d.withComponent = function(R) {
    var C = n.componentId, H = function(w, X) {
      if (w == null)
        return {};
      var ae, x, F = {}, Fe = Object.keys(w);
      for (x = 0; x < Fe.length; x++)
        ae = Fe[x], X.indexOf(ae) >= 0 || (F[ae] = w[ae]);
      return F;
    }(n, ["componentId"]), f = C && C + "-" + ($t(R) ? R : vi(r_(R)));
    return Tc(R, An({}, H, { attrs: E, componentId: f }), r);
  }, Object.defineProperty(d, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(R) {
    this._foldedDefaultProps = t ? pc({}, e.defaultProps, R) : R;
  } }), d.toString = function() {
    return "." + d.styledComponentId;
  }, o && nO(d, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), d;
}
var _a = function(e) {
  return function n(r, t, o) {
    if (o === void 0 && (o = $n), !ac.isValidElementType(t))
      return kt(1, String(t));
    var i = function() {
      return r(t, o, En.apply(void 0, arguments));
    };
    return i.withConfig = function(a) {
      return n(r, t, An({}, o, {}, a));
    }, i.attrs = function(a) {
      return n(r, t, An({}, o, { attrs: Array.prototype.concat(o.attrs, a).filter(Boolean) }));
    }, i;
  }(Tc, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  _a[e] = _a(e);
});
const Re = _a, an = (e = "100%", n = e) => En`
  width: ${e};
  height: ${n};
`;
En`
  border: 1px solid red;
`;
const MO = (e) => En`
  padding-left: ${e}px;
  padding-right: ${e}px;
`, Vr = (e = "flex-start", n = "stretch", r = "row") => En`
  display: flex;
  justify-content: ${e};
  align-items: ${n};
  flex-direction: ${r};
`, ua = (e) => En`
  transition: color 200ms;
  &:hover {
    color: ${e}
  }
`, fo = (e) => ({ theme: n }) => `${n[e]} !important;`, kO = (e = "&") => En`
  ${e}::-webkit-scrollbar {
    width: 10px;
  }

  ${e}::-webkit-scrollbar-track {
    background-color: ${({ theme: n }) => n.lightGrey};
  }

  ${e}::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
`, Hn = (e) => En`
  ${({ theme: n }) => n[e]}
`, xO = (e) => En`
  position: absolute;
  ${Object.entries(e).map(([n, r]) => `${n}: ${r};`).join(`
`)}
`, LO = (e, n) => En`
  margin-left: ${e}px;
  margin-top: ${n}px;
`, BO = Re.div`
  color: ${Hn("light")};
  font-size: ${({ theme: e }) => e.fz7};
  margin-top: 4px;
  font-weight: normal;
  height: 200px;
  overflow-y: auto;
  overflow-x: hidden;
  ${kO()};

  span:first-child {
    margin-top: 22px;
  }

`, jO = Re.span`
  color: ${Hn("light")};
  display: block;
  margin-top: 17px;
  cursor: pointer;
  font-size: ${({ theme: e }) => e.fz7};
  em {
    color: ${({ $isError: e }) => e ? "red" : Hn("light")};
    font-weight: bold;
    font-style: italic;
  }
`, FO = To(({ children: e }, n) => {
  const r = le(null), t = () => {
    r.current?.scrollTo(0, r.current.scrollHeight);
  };
  return A_(n, () => ({
    scrollToBottom: () => {
      t(), setTimeout(t, 50);
    }
  })), /* @__PURE__ */ U(BO, { ref: r, children: e });
}), VO = tr((e, n) => {
  const r = le(null), t = le(null), { isTerminalOpened: o } = Mb(), { executeMessages: i } = Fr(), { spring: a, SpringDiv: s } = Lb(n), _ = () => {
    t.current?.scrollIntoView({ behavior: "smooth" });
  };
  return ye(() => {
    r.current?.scrollToBottom();
  }, [i.length, o]), /* @__PURE__ */ ve(FO, { ref: r, children: [
    "CodeGear output console.",
    /* @__PURE__ */ ve(s, { style: { ...a }, children: [
      i.map((u, c) => /* @__PURE__ */ ve(
        jO,
        {
          $isError: u.isError,
          onClick: _,
          children: [
            "User [",
            u.fileName,
            "] [",
            u.date,
            "] >  ",
            /* @__PURE__ */ U("em", { children: u.message })
          ]
        },
        c
      )),
      /* @__PURE__ */ U("div", { ref: t })
    ] })
  ] });
}, { forwardRef: !0 }), WO = Re.div`
  padding-left: 28px;
  z-index: 15;
  position: fixed;
  right: 0;
  height: calc(100vh + 100px);
  width: calc(100% - 59px);
  border-radius: 6px 6px 0;
  background: ${Hn("darkBlue")};
  border-top: 2px solid ${Hn("lightGrey")};
  touch-action: none;
  bottom: ${({ $bottom: e }) => `calc(-100vh + ${e - 100}px)`};
  overflow-y: auto;
  box-sizing: border-box;
  user-select: none;
`, XO = Re.div`
  ${xO({
  right: "44px",
  top: "23px"
})}
  ${Vr("flex-end")};
  gap: 23px;
  ${an("100px", "22px")};
  cursor: pointer;
  svg {
    path {
      stroke: ${Hn("secondaryGrey")};
      ${({ theme: e }) => ua(e.light)};
    }
    ${an("22px")}
    color: ${Hn("secondaryGrey")};
    ${({ theme: e }) => ua(e.light)}
  }
`, YO = Re(G_)`
  ${LO(0, 6)};

  .ant-tabs-nav::before{
    border-bottom: none;
  }
  .ant-tabs-tab-active div{
    color: ${fo("light")};
  }
  .ant-tabs-tab:hover, .ant-tabs-tab:active{
    color: ${Hn("light")};
  }
  .ant-tabs-ink-bar{
    background: ${Hn("light")};
  }
  .ant-tabs-tab {
    padding: 7px 0 !important;
  }

  font-size: ${({ theme: e }) => e.fz6};
`;
var Ec = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, __ = he.createContext && he.createContext(Ec), zn = globalThis && globalThis.__assign || function() {
  return zn = Object.assign || function(e) {
    for (var n, r = 1, t = arguments.length; r < t; r++) {
      n = arguments[r];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
    }
    return e;
  }, zn.apply(this, arguments);
}, KO = globalThis && globalThis.__rest || function(e, n) {
  var r = {};
  for (var t in e)
    Object.prototype.hasOwnProperty.call(e, t) && n.indexOf(t) < 0 && (r[t] = e[t]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, t = Object.getOwnPropertySymbols(e); o < t.length; o++)
      n.indexOf(t[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[o]) && (r[t[o]] = e[t[o]]);
  return r;
};
function bc(e) {
  return e && e.map(function(n, r) {
    return he.createElement(n.tag, zn({
      key: r
    }, n.attr), bc(n.child));
  });
}
function bn(e) {
  return function(n) {
    return he.createElement($O, zn({
      attr: zn({}, e.attr)
    }, n), bc(e.child));
  };
}
function $O(e) {
  var n = function(r) {
    var t = e.attr, o = e.size, i = e.title, a = KO(e, ["attr", "size", "title"]), s = o || r.size || "1em", _;
    return r.className && (_ = r.className), e.className && (_ = (_ ? _ + " " : "") + e.className), he.createElement("svg", zn({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, r.attr, t, a, {
      className: _,
      style: zn(zn({
        color: e.color || r.color
      }, r.style), e.style),
      height: s,
      width: s,
      xmlns: "http://www.w3.org/2000/svg"
    }), i && he.createElement("title", null, i), e.children);
  };
  return __ !== void 0 ? he.createElement(__.Consumer, null, function(r) {
    return n(r);
  }) : n(Ec);
}
function zO(e) {
  return bn({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" } }] })(e);
}
function JO(e) {
  return bn({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { d: "M5 0h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2 2 2 0 0 1-2 2H3a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1H1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1H3a2 2 0 0 1 2-2z" } }, { tag: "path", attr: { d: "M1 6v-.5a.5.5 0 0 1 1 0V6h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V9h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 2.5v.5H.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H2v-.5a.5.5 0 0 0-1 0z" } }] })(e);
}
function qO(e) {
  return bn({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { d: "M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" } }] })(e);
}
function ZO(e) {
  return bn({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M9.25 12a.75.75 0 0 1-.22.53l-2.75 2.75a.75.75 0 0 1-1.06-1.06L7.44 12 5.22 9.78a.75.75 0 1 1 1.06-1.06l2.75 2.75c.141.14.22.331.22.53Zm2 2a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5h-5Z" } }, { tag: "path", attr: { d: "M0 4.75C0 3.784.784 3 1.75 3h20.5c.966 0 1.75.784 1.75 1.75v14.5A1.75 1.75 0 0 1 22.25 21H1.75A1.75 1.75 0 0 1 0 19.25Zm1.75-.25a.25.25 0 0 0-.25.25v14.5c0 .138.112.25.25.25h20.5a.25.25 0 0 0 .25-.25V4.75a.25.25 0 0 0-.25-.25Z" } }] })(e);
}
function QO(e) {
  return bn({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", stroke: "#000", strokeWidth: "2", d: "M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M5,5 L19,19" } }] })(e);
}
function eR(e) {
  return bn({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01v0a2.83 2.83 0 0 1 0-4L17 3" } }, { tag: "path", attr: { d: "m16 2 6 6" } }, { tag: "path", attr: { d: "M12 16H4" } }] })(e);
}
function nR(e) {
  return bn({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M576 736l-32-.001v-286c0-.336-.096-.656-.096-1.008s.096-.655.096-.991c0-17.664-14.336-32-32-32h-64c-17.664 0-32 14.336-32 32s14.336 32 32 32h32v256h-32c-17.664 0-32 14.336-32 32s14.336 32 32 32h128c17.664 0 32-14.336 32-32s-14.336-32-32-32zm-64-384.001c35.344 0 64-28.656 64-64s-28.656-64-64-64-64 28.656-64 64 28.656 64 64 64zm0-352c-282.768 0-512 229.232-512 512 0 282.784 229.232 512 512 512 282.784 0 512-229.216 512-512 0-282.768-229.216-512-512-512zm0 961.008c-247.024 0-448-201.984-448-449.01 0-247.024 200.976-448 448-448s448 200.977 448 448-200.976 449.01-448 449.01z" } }] })(e);
}
function rR(e) {
  return bn({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M685.904 383.184l275.264-273.572-.896 155.072c-.289 12.928 9.967 24.176 22.912 23.888l16.416-.016c12.944-.304 23.648-8 23.92-20.928l.672-231.008c0-.223-.88-.399-.88-.623l1.264-11.712c.128-6.496-1.391-12.288-5.584-16.431-4.143-4.176-9.951-6.72-16.4-6.544l-11.696.272c-.223 0-.399.08-.64.113L760.77.687c-12.928.288-23.632 10.976-23.92 23.92l-.032 16.417c1.967 15.248 13.952 24.16 26.88 23.872l151.248.4L640.657 337.92c-12.496 12.496-12.496 32.752 0 45.264 12.496 12.48 32.752 12.48 45.247 0zM339.088 640.812L63.825 913.532l.88-154.224c.304-12.944-9.969-24.192-22.897-23.904l-17.423.032c-12.96.32-23.649 8-23.921 20.944l-.672 231.008c0 .224.88.367.88.623l-1.264 11.68c-.144 6.496 1.376 12.32 5.584 16.433 4.128 4.192 9.952 6.72 16.384 6.56l11.712-.288c.223 0 .383-.096.64-.096l230.495 1.008c12.928-.32 23.617-11.009 23.92-23.936l.032-16.432c-1.967-15.216-13.952-24.16-26.88-23.872l-151.247-.4L384.32 686.076c12.496-12.497 12.496-32.752 0-45.248s-32.737-12.512-45.233-.016zm685.122 346.56l-.672-231.01c-.288-12.944-10.992-20.624-23.92-20.944l-16.416-.032c-12.944-.289-23.184 10.975-22.912 23.903l.896 155.072-275.28-273.552c-12.496-12.496-32.752-12.496-45.248 0s-12.496 32.752 0 45.248L914.93 958.649l-151.232.4c-12.928-.288-24.912 8.657-26.88 23.872l.032 16.432c.304 12.944 11.008 23.633 23.92 23.936l229.504-1.007c.24 0 .416.095.64.095l11.696.288c6.448.16 12.272-2.368 16.4-6.56 4.193-4.128 5.696-9.936 5.584-16.432l-1.263-11.68c0-.255.88-.399.88-.622zM110.049 65.321l151.264-.397c12.928.288 24.912-8.64 26.88-23.873l-.032-16.431C287.84 11.677 277.15.972 264.24.7l-230.512.992c-.256-.032-.416-.112-.64-.112l-11.712-.273C14.945 1.132 9.105 3.676 4.992 7.851.784 11.995-.735 17.787-.592 24.283L.672 35.995c0 .223-.88.384-.88.624l.672 231.008c.288 12.928 10.977 20.624 23.921 20.928l17.424.015c12.928.288 23.183-10.96 22.895-23.888l-.88-154.224 275.264 272.72c12.48 12.497 32.753 12.497 45.25 0s12.496-32.768 0-45.264z" } }] })(e);
}
function tR(e) {
  return bn({ tag: "svg", attr: { version: "1.1", viewBox: "0 0 17 17" }, child: [{ tag: "g", attr: {}, child: [] }, { tag: "path", attr: { d: "M8.5 5.972c-1.378 0-2.5 1.122-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.122 2.5-2.5-1.122-2.5-2.5-2.5zM8.5 9.972c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5 1.5 0.673 1.5 1.5-0.673 1.5-1.5 1.5zM16.94 9.446c0.037-0.321 0.060-0.645 0.060-0.974s-0.023-0.653-0.060-0.974l-2.588-0.778c-0.119-0.402-0.278-0.787-0.474-1.149l1.279-2.377c-0.406-0.51-0.869-0.973-1.38-1.38l-2.377 1.28c-0.363-0.196-0.748-0.354-1.15-0.474l-0.776-2.588c-0.32-0.037-0.644-0.060-0.974-0.060s-0.654 0.023-0.974 0.060l-0.776 2.588c-0.403 0.119-0.789 0.278-1.15 0.475l-2.377-1.28c-0.511 0.406-0.974 0.869-1.379 1.38l1.279 2.375c-0.196 0.362-0.354 0.748-0.474 1.15l-2.589 0.778c-0.037 0.32-0.060 0.644-0.060 0.974s0.023 0.654 0.060 0.974l2.588 0.776c0.12 0.403 0.278 0.789 0.474 1.151l-1.279 2.376c0.406 0.511 0.869 0.974 1.38 1.38l2.377-1.279c0.362 0.196 0.748 0.354 1.15 0.474l0.776 2.588c0.321 0.037 0.645 0.060 0.974 0.060s0.654-0.023 0.974-0.060l0.776-2.588c0.402-0.12 0.788-0.278 1.15-0.474l2.376 1.279c0.511-0.407 0.974-0.87 1.38-1.381l-1.278-2.376c0.196-0.362 0.354-0.748 0.474-1.15l2.588-0.776zM13.548 9.419l-0.154 0.518c-0.1 0.337-0.233 0.66-0.396 0.959l-0.256 0.475 0.255 0.475 0.952 1.77c-0.099 0.105-0.201 0.207-0.306 0.306l-2.243-1.209-0.475 0.256c-0.301 0.163-0.624 0.295-0.96 0.396l-0.518 0.154-0.155 0.518-0.579 1.932c-0.072 0.002-0.143 0.003-0.213 0.003s-0.141-0.001-0.213-0.003l-0.579-1.932-0.155-0.518-0.518-0.154c-0.336-0.1-0.659-0.233-0.959-0.396l-0.475-0.256-2.245 1.207c-0.104-0.099-0.207-0.201-0.306-0.306l1.208-2.244-0.256-0.475c-0.162-0.3-0.295-0.623-0.396-0.96l-0.153-0.517-2.449-0.734c-0.003-0.072-0.004-0.143-0.004-0.212 0-0.070 0.001-0.141 0.004-0.213l2.448-0.734 0.154-0.518c0.1-0.337 0.233-0.66 0.396-0.959l0.256-0.475-1.208-2.245c0.099-0.104 0.201-0.207 0.305-0.306l2.247 1.21 0.476-0.259c0.297-0.162 0.619-0.295 0.956-0.395l0.518-0.154 0.155-0.518 0.579-1.932c0.073-0.001 0.144-0.002 0.214-0.002s0.141 0.001 0.213 0.003l0.579 1.932 0.155 0.518 0.518 0.154c0.335 0.1 0.659 0.233 0.96 0.396l0.475 0.255 2.244-1.208c0.104 0.099 0.207 0.201 0.306 0.306l-0.953 1.77-0.255 0.475 0.257 0.475c0.163 0.3 0.295 0.622 0.395 0.957l0.154 0.518 0.518 0.155 1.932 0.581c0.001 0.072 0.002 0.143 0.002 0.213s-0.001 0.141-0.004 0.213l-2.448 0.734z" } }] })(e);
}
function oR(e) {
  return bn({ tag: "svg", attr: { viewBox: "0 0 16 16", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M3.78 2L3 2.41v12l.78.42 9-6V8l-9-6zM4 13.48V3.35l7.6 5.07L4 13.48z" } }] })(e);
}
const iR = tr(() => {
  const e = wt(), { isTerminalOpened: n } = e.state, r = xb(), t = or(), o = le(), i = (u) => {
    r.set(u);
  }, a = vr(() => {
    e.update({ isTerminalOpened: !1 });
  }, []), s = async () => {
    await o.current?.close(), t.terminal.clearExecuteMessages();
  }, _ = wb(a);
  return ye(() => {
    _.toggle(n);
  }, [n]), /* @__PURE__ */ ve(
    WO,
    {
      $bottom: _.terminalHeight,
      ..._.bind(),
      style: _.springs,
      as: _.div,
      children: [
        /* @__PURE__ */ U(
          YO,
          {
            items: r.val,
            size: "large",
            onChange: i,
            activeKey: r.key
          }
        ),
        /* @__PURE__ */ U(yo, { when: r.key === "terminal", children: /* @__PURE__ */ U(VO, { ref: o }) }),
        /* @__PURE__ */ U(yo, { when: r.key === "test_cases", children: "test cases" }),
        /* @__PURE__ */ ve(XO, { children: [
          /* @__PURE__ */ U(QO, { onClick: s }),
          /* @__PURE__ */ U(zO, { onClick: a })
        ] })
      ]
    }
  );
}), aR = () => /* @__PURE__ */ U(bb, { children: /* @__PURE__ */ U(iR, {}) });
function sR(e, n, r) {
  return n in e ? Object.defineProperty(e, n, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[n] = r, e;
}
function u_(e, n) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    n && (t = t.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, t);
  }
  return r;
}
function l_(e) {
  for (var n = 1; n < arguments.length; n++) {
    var r = arguments[n] != null ? arguments[n] : {};
    n % 2 ? u_(Object(r), !0).forEach(function(t) {
      sR(e, t, r[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : u_(Object(r)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
    });
  }
  return e;
}
function _R(e, n) {
  if (e == null)
    return {};
  var r = {}, t = Object.keys(e), o, i;
  for (i = 0; i < t.length; i++)
    o = t[i], !(n.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
function uR(e, n) {
  if (e == null)
    return {};
  var r = _R(e, n), t, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      t = i[o], !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t]);
  }
  return r;
}
function lR(e, n) {
  return cR(e) || dR(e, n) || mR(e, n) || hR();
}
function cR(e) {
  if (Array.isArray(e))
    return e;
}
function dR(e, n) {
  if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(e)))) {
    var r = [], t = !0, o = !1, i = void 0;
    try {
      for (var a = e[Symbol.iterator](), s; !(t = (s = a.next()).done) && (r.push(s.value), !(n && r.length === n)); t = !0)
        ;
    } catch (_) {
      o = !0, i = _;
    } finally {
      try {
        !t && a.return != null && a.return();
      } finally {
        if (o)
          throw i;
      }
    }
    return r;
  }
}
function mR(e, n) {
  if (e) {
    if (typeof e == "string")
      return c_(e, n);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return c_(e, n);
  }
}
function c_(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var r = 0, t = new Array(n); r < n; r++)
    t[r] = e[r];
  return t;
}
function hR() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function pR(e, n, r) {
  return n in e ? Object.defineProperty(e, n, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[n] = r, e;
}
function d_(e, n) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    n && (t = t.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, t);
  }
  return r;
}
function m_(e) {
  for (var n = 1; n < arguments.length; n++) {
    var r = arguments[n] != null ? arguments[n] : {};
    n % 2 ? d_(Object(r), !0).forEach(function(t) {
      pR(e, t, r[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : d_(Object(r)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
    });
  }
  return e;
}
function fR() {
  for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
    n[r] = arguments[r];
  return function(t) {
    return n.reduceRight(function(o, i) {
      return i(o);
    }, t);
  };
}
function zr(e) {
  return function n() {
    for (var r = this, t = arguments.length, o = new Array(t), i = 0; i < t; i++)
      o[i] = arguments[i];
    return o.length >= e.length ? e.apply(this, o) : function() {
      for (var a = arguments.length, s = new Array(a), _ = 0; _ < a; _++)
        s[_] = arguments[_];
      return n.apply(r, [].concat(o, s));
    };
  };
}
function Bo(e) {
  return {}.toString.call(e).includes("Object");
}
function TR(e) {
  return !Object.keys(e).length;
}
function ht(e) {
  return typeof e == "function";
}
function ER(e, n) {
  return Object.prototype.hasOwnProperty.call(e, n);
}
function bR(e, n) {
  return Bo(n) || Jn("changeType"), Object.keys(n).some(function(r) {
    return !ER(e, r);
  }) && Jn("changeField"), n;
}
function OR(e) {
  ht(e) || Jn("selectorType");
}
function RR(e) {
  ht(e) || Bo(e) || Jn("handlerType"), Bo(e) && Object.values(e).some(function(n) {
    return !ht(n);
  }) && Jn("handlersType");
}
function NR(e) {
  e || Jn("initialIsRequired"), Bo(e) || Jn("initialType"), TR(e) && Jn("initialContent");
}
function IR(e, n) {
  throw new Error(e[n] || e.default);
}
var gR = {
  initialIsRequired: "initial state is required",
  initialType: "initial state should be an object",
  initialContent: "initial state shouldn't be an empty object",
  handlerType: "handler should be an object or a function",
  handlersType: "all handlers should be a functions",
  selectorType: "selector should be a function",
  changeType: "provided value of changes should be an object",
  changeField: 'it seams you want to change a field in the state which is not specified in the "initial" state',
  default: "an unknown error accured in `state-local` package"
}, Jn = zr(IR)(gR), zt = {
  changes: bR,
  selector: OR,
  handler: RR,
  initial: NR
};
function AR(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  zt.initial(e), zt.handler(n);
  var r = {
    current: e
  }, t = zr(vR)(r, n), o = zr(GR)(r), i = zr(zt.changes)(e), a = zr(SR)(r);
  function s() {
    var u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function(c) {
      return c;
    };
    return zt.selector(u), u(r.current);
  }
  function _(u) {
    fR(t, o, i, a)(u);
  }
  return [s, _];
}
function SR(e, n) {
  return ht(n) ? n(e.current) : n;
}
function GR(e, n) {
  return e.current = m_(m_({}, e.current), n), n;
}
function vR(e, n, r) {
  return ht(n) ? n(e.current) : Object.keys(r).forEach(function(t) {
    var o;
    return (o = n[t]) === null || o === void 0 ? void 0 : o.call(n, e.current[t]);
  }), r;
}
var CR = {
  create: AR
}, DR = {
  paths: {
    vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.36.1/min/vs"
  }
};
function UR(e) {
  return function n() {
    for (var r = this, t = arguments.length, o = new Array(t), i = 0; i < t; i++)
      o[i] = arguments[i];
    return o.length >= e.length ? e.apply(this, o) : function() {
      for (var a = arguments.length, s = new Array(a), _ = 0; _ < a; _++)
        s[_] = arguments[_];
      return n.apply(r, [].concat(o, s));
    };
  };
}
function HR(e) {
  return {}.toString.call(e).includes("Object");
}
function yR(e) {
  return e || h_("configIsRequired"), HR(e) || h_("configType"), e.urls ? (PR(), {
    paths: {
      vs: e.urls.monacoBase
    }
  }) : e;
}
function PR() {
  console.warn(Oc.deprecation);
}
function wR(e, n) {
  throw new Error(e[n] || e.default);
}
var Oc = {
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
}, h_ = UR(wR)(Oc), MR = {
  config: yR
}, kR = function() {
  for (var n = arguments.length, r = new Array(n), t = 0; t < n; t++)
    r[t] = arguments[t];
  return function(o) {
    return r.reduceRight(function(i, a) {
      return a(i);
    }, o);
  };
};
function Rc(e, n) {
  return Object.keys(n).forEach(function(r) {
    n[r] instanceof Object && e[r] && Object.assign(n[r], Rc(e[r], n[r]));
  }), l_(l_({}, e), n);
}
var xR = {
  type: "cancelation",
  msg: "operation is manually canceled"
};
function Di(e) {
  var n = !1, r = new Promise(function(t, o) {
    e.then(function(i) {
      return n ? o(xR) : t(i);
    }), e.catch(o);
  });
  return r.cancel = function() {
    return n = !0;
  }, r;
}
var LR = CR.create({
  config: DR,
  isInitialized: !1,
  resolve: null,
  reject: null,
  monaco: null
}), Nc = lR(LR, 2), xt = Nc[0], ci = Nc[1];
function BR(e) {
  var n = MR.config(e), r = n.monaco, t = uR(n, ["monaco"]);
  ci(function(o) {
    return {
      config: Rc(o.config, t),
      monaco: r
    };
  });
}
function jR() {
  var e = xt(function(n) {
    var r = n.monaco, t = n.isInitialized, o = n.resolve;
    return {
      monaco: r,
      isInitialized: t,
      resolve: o
    };
  });
  if (!e.isInitialized) {
    if (ci({
      isInitialized: !0
    }), e.monaco)
      return e.resolve(e.monaco), Di(Ui);
    if (window.monaco && window.monaco.editor)
      return Ic(window.monaco), e.resolve(window.monaco), Di(Ui);
    kR(FR, WR)(XR);
  }
  return Di(Ui);
}
function FR(e) {
  return document.body.appendChild(e);
}
function VR(e) {
  var n = document.createElement("script");
  return e && (n.src = e), n;
}
function WR(e) {
  var n = xt(function(t) {
    var o = t.config, i = t.reject;
    return {
      config: o,
      reject: i
    };
  }), r = VR("".concat(n.config.paths.vs, "/loader.js"));
  return r.onload = function() {
    return e();
  }, r.onerror = n.reject, r;
}
function XR() {
  var e = xt(function(r) {
    var t = r.config, o = r.resolve, i = r.reject;
    return {
      config: t,
      resolve: o,
      reject: i
    };
  }), n = window.require;
  n.config(e.config), n(["vs/editor/editor.main"], function(r) {
    Ic(r), e.resolve(r);
  }, function(r) {
    e.reject(r);
  });
}
function Ic(e) {
  xt().monaco || ci({
    monaco: e
  });
}
function YR() {
  return xt(function(e) {
    var n = e.monaco;
    return n;
  });
}
var Ui = new Promise(function(e, n) {
  return ci({
    resolve: e,
    reject: n
  });
}), jo = {
  config: BR,
  init: jR,
  __getMonacoInstance: YR
}, KR = { wrapper: { display: "flex", position: "relative", textAlign: "initial" }, fullWidth: { width: "100%" }, hide: { display: "none" } }, Hi = KR, $R = { container: { display: "flex", height: "100%", width: "100%", justifyContent: "center", alignItems: "center" } }, zR = $R;
function JR({ children: e }) {
  return he.createElement("div", { style: zR.container }, e);
}
var qR = JR, ZR = qR;
function QR({ width: e, height: n, isEditorReady: r, loading: t, _ref: o, className: i, wrapperProps: a }) {
  return he.createElement("section", { style: { ...Hi.wrapper, width: e, height: n }, ...a }, !r && he.createElement(ZR, null, t), he.createElement("div", { ref: o, style: { ...Hi.fullWidth, ...!r && Hi.hide }, className: i }));
}
var e1 = QR, gc = Gr(e1);
function n1(e) {
  ye(e, []);
}
var es = n1;
function r1(e, n, r = !0) {
  let t = le(!0);
  ye(t.current || !r ? () => {
    t.current = !1;
  } : e, n);
}
var Ve = r1;
function nt() {
}
function Ir(e, n, r, t) {
  return t1(e, t) || o1(e, n, r, t);
}
function t1(e, n) {
  return e.editor.getModel(Ac(e, n));
}
function o1(e, n, r, t) {
  return e.editor.createModel(n, r, t ? Ac(e, t) : void 0);
}
function Ac(e, n) {
  return e.Uri.parse(n);
}
function i1({ original: e, modified: n, language: r, originalLanguage: t, modifiedLanguage: o, originalModelPath: i, modifiedModelPath: a, keepCurrentOriginalModel: s = !1, keepCurrentModifiedModel: _ = !1, theme: u = "light", loading: c = "Loading...", options: l = {}, height: E = "100%", width: b = "100%", className: d, wrapperProps: m = {}, beforeMount: p = nt, onMount: I = nt }) {
  let [R, C] = qn(!1), [H, f] = qn(!0), w = le(null), X = le(null), ae = le(null), x = le(I), F = le(p), Fe = le(!1);
  es(() => {
    let V = jo.init();
    return V.then((de) => (X.current = de) && f(!1)).catch((de) => de?.type !== "cancelation" && console.error("Monaco initialization: error:", de)), () => w.current ? De() : V.cancel();
  }), Ve(() => {
    let V = w.current.getModifiedEditor();
    V.getOption(X.current.editor.EditorOption.readOnly) ? V.setValue(n || "") : n !== V.getValue() && (V.executeEdits("", [{ range: V.getModel().getFullModelRange(), text: n || "", forceMoveMarkers: !0 }]), V.pushUndoStop());
  }, [n], R), Ve(() => {
    w.current?.getModel()?.original.setValue(e || "");
  }, [e], R), Ve(() => {
    let { original: V, modified: de } = w.current.getModel();
    X.current.editor.setModelLanguage(V, t || r || "text"), X.current.editor.setModelLanguage(de, o || r || "text");
  }, [r, t, o], R), Ve(() => {
    X.current?.editor.setTheme(u);
  }, [u], R), Ve(() => {
    w.current?.updateOptions(l);
  }, [l], R);
  let Ne = vr(() => {
    if (!X.current)
      return;
    F.current(X.current);
    let V = Ir(X.current, e || "", t || r || "text", i || ""), de = Ir(X.current, n || "", o || r || "text", a || "");
    w.current?.setModel({ original: V, modified: de });
  }, [r, n, o, e, t, i, a]), Ce = vr(() => {
    !Fe.current && ae.current && (w.current = X.current.editor.createDiffEditor(ae.current, { automaticLayout: !0, ...l }), Ne(), X.current?.editor.setTheme(u), C(!0), Fe.current = !0);
  }, [l, u, Ne]);
  ye(() => {
    R && x.current(w.current, X.current);
  }, [R]), ye(() => {
    !H && !R && Ce();
  }, [H, R, Ce]), Ve(() => {
    if (w.current && X.current) {
      let V = w.current.getOriginalEditor(), de = Ir(X.current, e || "", t || r || "text", i || "");
      de !== V.getModel() && V.setModel(de);
    }
  }, [i], R), Ve(() => {
    if (w.current && X.current) {
      let V = w.current.getModifiedEditor(), de = Ir(X.current, n || "", o || r || "text", a || "");
      de !== V.getModel() && V.setModel(de);
    }
  }, [a], R);
  function De() {
    let V = w.current?.getModel();
    s || V?.original?.dispose(), _ || V?.modified?.dispose(), w.current?.dispose();
  }
  return he.createElement(gc, { width: b, height: E, isEditorReady: R, loading: c, _ref: ae, className: d, wrapperProps: m });
}
var a1 = i1;
Gr(a1);
function s1() {
  let [e, n] = qn(jo.__getMonacoInstance());
  return es(() => {
    let r;
    return e || (r = jo.init(), r.then((t) => {
      n(t);
    })), () => r?.cancel();
  }), e;
}
var ns = s1;
function _1(e) {
  let n = le();
  return ye(() => {
    n.current = e;
  }, [e]), n.current;
}
var u1 = _1, Jt = /* @__PURE__ */ new Map();
function l1({ defaultValue: e, defaultLanguage: n, defaultPath: r, value: t, language: o, path: i, theme: a = "light", line: s, loading: _ = "Loading...", options: u = {}, overrideServices: c = {}, saveViewState: l = !0, keepCurrentModel: E = !1, width: b = "100%", height: d = "100%", className: m, wrapperProps: p = {}, beforeMount: I = nt, onMount: R = nt, onChange: C, onValidate: H = nt }) {
  let [f, w] = qn(!1), [X, ae] = qn(!0), x = le(null), F = le(null), Fe = le(null), Ne = le(R), Ce = le(I), De = le(), V = le(t), de = u1(i), ke = le(!1), Ue = le(!1);
  es(() => {
    let pe = jo.init();
    return pe.then((v) => (x.current = v) && ae(!1)).catch((v) => v?.type !== "cancelation" && console.error("Monaco initialization: error:", v)), () => F.current ? xn() : pe.cancel();
  }), Ve(() => {
    let pe = Ir(x.current, e || t || "", n || o || "", i || r || "");
    pe !== F.current?.getModel() && (l && Jt.set(de, F.current?.saveViewState()), F.current?.setModel(pe), l && F.current?.restoreViewState(Jt.get(i)));
  }, [i], f), Ve(() => {
    F.current?.updateOptions(u);
  }, [u], f), Ve(() => {
    !F.current || t === void 0 || (F.current.getOption(x.current.editor.EditorOption.readOnly) ? F.current.setValue(t) : t !== F.current.getValue() && (Ue.current = !0, F.current.executeEdits("", [{ range: F.current.getModel().getFullModelRange(), text: t, forceMoveMarkers: !0 }]), F.current.pushUndoStop(), Ue.current = !1));
  }, [t], f), Ve(() => {
    let pe = F.current?.getModel();
    pe && o && x.current?.editor.setModelLanguage(pe, o);
  }, [o], f), Ve(() => {
    s !== void 0 && F.current?.revealLine(s);
  }, [s], f), Ve(() => {
    x.current?.editor.setTheme(a);
  }, [a], f);
  let kn = vr(() => {
    if (!(!Fe.current || !x.current) && !ke.current) {
      Ce.current(x.current);
      let pe = i || r, v = Ir(x.current, t || e || "", n || o || "", pe || "");
      F.current = x.current?.editor.create(Fe.current, { model: v, automaticLayout: !0, ...u }, c), l && F.current.restoreViewState(Jt.get(pe)), x.current.editor.setTheme(a), w(!0), ke.current = !0;
    }
  }, [e, n, r, t, o, i, u, c, l, a]);
  ye(() => {
    f && Ne.current(F.current, x.current);
  }, [f]), ye(() => {
    !X && !f && kn();
  }, [X, f, kn]), V.current = t, ye(() => {
    f && C && (De.current?.dispose(), De.current = F.current?.onDidChangeModelContent((pe) => {
      Ue.current || C(F.current.getValue(), pe);
    }));
  }, [f, C]), ye(() => {
    if (f) {
      let pe = x.current.editor.onDidChangeMarkers((v) => {
        let S = F.current.getModel()?.uri;
        if (S && v.find((D) => D.path === S.path)) {
          let D = x.current.editor.getModelMarkers({ resource: S });
          H?.(D);
        }
      });
      return () => {
        pe?.dispose();
      };
    }
    return () => {
    };
  }, [f, H]);
  function xn() {
    De.current?.dispose(), E ? l && Jt.set(i, F.current.saveViewState()) : F.current.getModel()?.dispose(), F.current.dispose();
  }
  return he.createElement(gc, { width: b, height: d, isEditorReady: f, loading: _, _ref: Fe, className: m, wrapperProps: p });
}
var c1 = l1, d1 = Gr(c1), m1 = d1;
const h1 = () => ns()?.editor.getEditors()[0], p1 = () => {
  const e = h1();
  return {
    find: async () => {
      await e.getAction("actions.find")?.run();
    },
    replace: async () => {
      await e.getAction("editor.action.startFindReplaceAction")?.run();
    }
  };
}, f1 = Re.div`
  background: ${({ theme: e }) => e.grey};
  border-right: 2px solid ${({ theme: e }) => e.lightGrey};
  box-sizing: border-box;
  ${an("60px", "100%")};
  ${Vr("space-between", "center", "column")};
  padding-bottom: 15px;
`, jn = Re.div`
  ${an("23px")}
  svg {
    ${an()}
    color: ${({ theme: e }) => e.secondaryGrey};
    ${({ theme: e }) => ua(e.light)}
  }
  margin-top: 20px;
  cursor: pointer;
  user-select: none;
`, T1 = () => {
  const e = eb(), n = wt(), r = p1(), t = n.state.selectedTerminalTab, o = (i) => () => {
    if (t === i)
      return n.toggle("isTerminalOpened");
    n.update({
      selectedTerminalTab: i,
      isTerminalOpened: !0
    });
  };
  return /* @__PURE__ */ ve(f1, { children: [
    /* @__PURE__ */ ve("div", { children: [
      /* @__PURE__ */ U(jn, { onClick: r.find, children: /* @__PURE__ */ U(qO, {}) }),
      /* @__PURE__ */ U(jn, { onClick: r.replace, children: /* @__PURE__ */ U(JO, {}) }),
      /* @__PURE__ */ U(jn, { onClick: e, children: /* @__PURE__ */ U(rR, {}) }),
      /* @__PURE__ */ U(jn, { onClick: o("terminal"), children: /* @__PURE__ */ U(ZO, {}) }),
      /* @__PURE__ */ U(jn, { onClick: o("test_cases"), children: /* @__PURE__ */ U(eR, {}) })
    ] }),
    /* @__PURE__ */ ve("div", { children: [
      /* @__PURE__ */ U(jn, { children: /* @__PURE__ */ U(tR, {}) }),
      /* @__PURE__ */ U(jn, { children: /* @__PURE__ */ U(S_, { to: Ll.ABOUT, children: /* @__PURE__ */ U(nR, {}) }) })
    ] })
  ] });
};
class E1 {
  constructor(n) {
    er(this), this.state = n, this.getters = n.getters;
  }
  saveContent(n, r) {
    this.getters.getActiveTab(r).setTabContent(n);
  }
}
const la = [
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
], rs = {
  js: "javascript",
  ts: "typescript",
  tsx: "typescript",
  jsx: "typescript",
  html: "html",
  htm: "html",
  txt: "text",
  css: "css"
}, Sc = 9, b1 = [
  "java",
  "python",
  "cpp",
  "c",
  "go",
  "cs",
  "javascript"
], O1 = () => [...new Set(Object.values(rs))].map((n) => ({
  value: n,
  label: n
})), R1 = tr(() => {
  const e = O1(), n = Mt(), r = n.getActiveLanguage(), t = n.getActiveTab();
  return /* @__PURE__ */ U(
    v_,
    {
      size: "middle",
      onChange: (i) => {
        t.lang = i;
      },
      value: r,
      style: { width: 200 },
      options: e
    }
  );
});
let qt;
const N1 = new Uint8Array(16);
function I1() {
  if (!qt && (qt = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !qt))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return qt(N1);
}
const Se = [];
for (let e = 0; e < 256; ++e)
  Se.push((e + 256).toString(16).slice(1));
function g1(e, n = 0) {
  return (Se[e[n + 0]] + Se[e[n + 1]] + Se[e[n + 2]] + Se[e[n + 3]] + "-" + Se[e[n + 4]] + Se[e[n + 5]] + "-" + Se[e[n + 6]] + Se[e[n + 7]] + "-" + Se[e[n + 8]] + Se[e[n + 9]] + "-" + Se[e[n + 10]] + Se[e[n + 11]] + Se[e[n + 12]] + Se[e[n + 13]] + Se[e[n + 14]] + Se[e[n + 15]]).toLowerCase();
}
const A1 = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), p_ = {
  randomUUID: A1
};
function S1(e, n, r) {
  if (p_.randomUUID && !n && !e)
    return p_.randomUUID();
  e = e || {};
  const t = e.random || (e.rng || I1)();
  if (t[6] = t[6] & 15 | 64, t[8] = t[8] & 63 | 128, n) {
    r = r || 0;
    for (let o = 0; o < 16; ++o)
      n[r + o] = t[o];
    return n;
  }
  return g1(t);
}
class Gc {
  constructor({ lastNumber: n, fileData: r, instance: t }) {
    this._key = S1(), this._fileHandle = null, this._label = "Untitled", this._content = "", this.idx = 0, this.lang = "text", this.wasChanged = !1, er(this), t ? this.initUsingInstance(t) : r && this.initUsingFileData(r), n && (this.idx = n + 1);
  }
  setFileHandle(n) {
    this._fileHandle = n, this.wasChanged = !1, this.setLabel(n.name);
  }
  getFileHandle() {
    return this._fileHandle;
  }
  setLabel(n) {
    this._label = n;
  }
  getLabel() {
    return this._label;
  }
  updateLabel() {
    if (this._fileHandle) {
      this.wasChanged || this.setLabel(`${this.getLabel()}  •`), this.wasChanged = !0;
      return;
    }
    const n = this._content.split(`
`)[0].slice(0, 10), t = `${n.replace(" ", "").replace(`
`, "").length > 1 ? n : "Untitled"} •`;
    this.wasChanged = !0, this.setLabel(t);
  }
  setTabContent(n) {
    this._content = n, this.updateLabel();
  }
  getContent() {
    return this._content;
  }
  getKeyId() {
    return this._key;
  }
  initUsingFileData(n) {
    this._fileHandle = n.fileHandle, this.lang = n.language, this._content = n.content, this._label = n.name;
  }
  initUsingInstance(n) {
    this._key = n._key, this._label = n._label, this.idx = n.idx, this._content = n._content, this._fileHandle = n._fileHandle, this.wasChanged = n.wasChanged, this.lang = n.lang;
  }
}
const G1 = (e) => e.length >= Sc;
class v1 {
  constructor(n) {
    er(this), this.state = n;
  }
  createTab(n) {
    const r = this.state.content;
    if (G1(r))
      return;
    const t = r.at(-1)?.idx, o = new Gc({ fileData: n, lastNumber: t });
    this.state.activeKey = o.getKeyId(), this.state.content.push(o);
  }
  removeTab(n) {
    const r = this.state.getters.getTabIndex(n), t = this.state.content[r - 1];
    this.state.content.splice(r, 1), n === this.state.activeKey && (this.state.activeKey = t.getKeyId());
  }
  changeActiveTab(n) {
    this.state.activeKey = n;
  }
}
const C1 = (e) => e.map((n) => ({
  label: n.getLabel(),
  key: n.getKeyId()
})), D1 = Re(G_)`
  color: ${fo("secondaryGrey")};
  height: 50px;
  margin: 12px;
  min-width: 300px;
  .ant-tabs-nav::before{
    border-bottom: none;
  }
  .ant-tabs-tab {
    background: ${fo("grey")};
  }
  .ant-tabs-tab-active {
    background: #2E3139 !important;
  }
  .ant-tabs-tab-btn{
    color: ${fo("secondaryGrey")};
  }
`, U1 = tr(() => {
  const { activeKey: e, content: n } = Fr(), r = or(), t = C1(n);
  return /* @__PURE__ */ U(
    D1,
    {
      type: "editable-card",
      onChange: (a) => {
        r.tabs.changeActiveTab(a);
      },
      activeKey: e,
      onEdit: (a, s) => {
        s === "add" ? r.tabs.createTab() : r.tabs.removeTab(a);
      },
      items: fu(t),
      hideAdd: n.length >= Sc
    }
  );
}), H1 = tr(() => {
  const e = or(), { theme: n } = Fr(), r = new Pt();
  return /* @__PURE__ */ U(
    v_,
    {
      size: "middle",
      defaultValue: "vs-dark",
      onChange: (o) => {
        r.set("EDITOR_THEME", o), e.changeTheme(o);
      },
      value: n,
      style: { width: 200 },
      options: la.map((o) => ({
        value: o,
        label: o
      }))
    }
  );
}), y1 = {
  fontSize: 20,
  glyphMargin: !1,
  lineNumbersMinChars: 3,
  lineDecorationsWidth: 0,
  minimap: {
    enabled: !1
  },
  scrollbar: {
    verticalScrollbarSize: 6
  }
}, P1 = [1, 2, 3, 4, 5, 6, 7, 8, 9], w1 = () => {
  const e = Bl(), { tabs: n } = or(), { content: r } = Fr();
  ye(() => (e.on(Object.fromEntries(P1.map((t) => {
    const i = r[t - 1]?.getKeyId();
    return [
      t.toString(),
      i ? () => n.changeActiveTab(i) : null
    ];
  }))), () => {
    e.clear();
  }), [r.length]);
}, M1 = (e) => ra(e) ? "name" in e && typeof e.name == "string" && "type" in e && typeof e.type == "string" && "content" in e && typeof e.content == "string" : !1, vc = (e) => {
  const n = e.split(".").at(-1);
  return k1(n) ? [rs[n], n] : ["text", n];
};
function k1(e) {
  return e in rs;
}
const di = {
  ThemeUpload(e) {
    return `Unable to upload theme - ${e}.json`;
  },
  NotSupportedByBrowser() {
    return "Your browser does not support saving and opening files.";
  },
  WrongJsonObject(e) {
    return `Incoming json object should be must be ${e} type.`;
  },
  WrongResponseType(e) {
    return `Incoming response object should be must be ${e} type.`;
  }
}, x1 = {
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
}, L1 = () => async () => {
  if ("showOpenFilePicker" in window) {
    const [e] = await window.showOpenFilePicker(x1), n = await e.getFile(), r = await n.text(), [t] = vc(n.name);
    return {
      name: n.name,
      type: n.type,
      content: r,
      fileHandle: e,
      language: t
    };
  }
  console.warn(di.NotSupportedByBrowser());
}, B1 = () => async (e, n) => {
  try {
    let r = e;
    Ob(e?.createWritable) || (r = await window.showSaveFilePicker());
    const t = await r.createWritable();
    return await t.write(n), await t.close(), r;
  } catch {
    console.warn(di.NotSupportedByBrowser());
  }
}, Cc = () => {
  const e = L1(), n = B1(), r = or(), t = Mt();
  return {
    openFile: vr(async () => {
      const a = await e();
      M1(a) && r.tabs.createTab(a);
    }, []),
    saveFile: async () => {
      const a = t.getActiveTab(), s = a.getFileHandle(), _ = a.getContent();
      if (!a.wasChanged)
        return;
      const u = await n(s, _);
      u && (a.setFileHandle(u), a.lang = vc(u.name));
    }
  };
}, j1 = () => {
  const e = or(), n = Bl(), { openFile: r, saveFile: t } = Cc();
  w1(), ye(() => (n.on({
    O: r,
    S: t,
    N: () => {
      e.tabs.createTab();
    },
    T: () => {
      e.tabs.removeTab();
    }
  }), () => {
    n.clear();
  }), []);
}, F1 = Re.div`
  width: 100%;
`, V1 = Re.div`
  ${Vr("space-between")}
  ${an("100%", "48px")}
  margin-bottom: 10px;
`, W1 = Re.div`
  width: 30%;
  display: flex;
  gap: 30px;
  align-items: flex-end;
`, X1 = tr(() => {
  const { editor: e } = or(), n = Mt(), { theme: r, content: t } = Fr(), o = new Pt(), i = QE(() => {
    o.set("EDITOR_CONTENT_DATA", t);
  }, 1e3), a = n.getActiveTabText(), s = n.getActiveLanguage();
  j1();
  const _ = ns(), u = (c) => {
    rc(c) && (e.saveContent(c), i());
  };
  return ye(() => {
    _?.editor.setTheme(r);
  }, [r]), /* @__PURE__ */ ve(F1, { children: [
    /* @__PURE__ */ ve(V1, { children: [
      /* @__PURE__ */ U(U1, {}),
      /* @__PURE__ */ ve(W1, { children: [
        /* @__PURE__ */ U(H1, {}),
        /* @__PURE__ */ U(R1, {})
      ] })
    ] }),
    /* @__PURE__ */ U(
      m1,
      {
        height: "90vh",
        theme: "vs-dark",
        onChange: u,
        language: s,
        value: fu(a),
        options: y1
      }
    )
  ] });
}), Y1 = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMjMiIHZpZXdCb3g9IjAgMCAxNyAyMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0Ljk4OTcgMTUuNDA5NEwxNC40MjE2IDE1Ljc3NTJDMTQuNzcxMiAxNS40NTUxIDE1LjAzMzQgMTQuOTk3OCAxNS4wMzM0IDE0LjU0MDZDMTUuMDMzNCAxMy43NjMzIDE0LjY4MzggMTMuMTIzMSAxMy41NDc1IDEyLjU3NDRMMy44NDU3NSA4LjEzOTA3QzEuODc5MTcgNy4yMjQ1NiAwLjY1NTUxOCA2LjA4MTQ0IDAuNjU1NTE4IDQuMDIzODFDMC42NTU1MTggMi4xNDkwOCAxLjU3MzI1IDAuOTE0NTAyIDIuOTcxNzEgMEMyLjc1MzIgMC4zMjAwNzYgMi42MjIxIDAuNzMxNjAyIDIuNjIyMSAxLjIzNDU4QzIuNjIyMSAyLjM3NzcgMy41Mzk4NCAyLjg4MDY4IDQuNDU3NTcgMy4yOTIyMUwxMy44OTcyIDcuNjM2MDlDMTUuNjAxNSA4LjQxMzQyIDE3IDkuNjQ3OTkgMTcgMTEuNzk3MUMxNyAxMy41MzQ2IDE2LjIxMzQgMTQuNjMyIDE0Ljk4OTcgMTUuNDA5NFoiIGZpbGw9IiMwMTY4QTIiLz4KPHBhdGggZD0iTTEwLjU5MzMgMTEuMTM1OUwxMy42NTI0IDEyLjU1MzRDMTQuNzg4NyAxMy4xMDIxIDE1LjEzODMgMTMuNjk2NSAxNS4xMzgzIDE0LjUxOTZDMTUuMTM4MyAxNC45NzY4IDE0Ljg3NjEgMTUuNDM0MSAxNC41MjY0IDE1Ljc1NDJMOS4zNjk2MyAxMy4zNzY1TDEwLjI0MzcgMTIuODczNUMxMC45ODY2IDEyLjQ2MiAxMS4yMDUxIDEyLjE4NzYgMTEuMjA1MSAxMS45MTMzQzExLjI0ODggMTEuNTkzMiAxMS4wNzQgMTEuMzY0NiAxMC41OTMzIDExLjEzNTlaIiBmaWxsPSIjMDE2OEExIi8+CjxwYXRoIGQ9Ik01LjE1NjgxIDIyLjA4NTRDNC40NTc1OCAyMi40OTcgMy44NDU3NiAyMi43NzEzIDMuMTkwMjMgMjIuNzcxM0MxLjQ4NTg2IDIyLjc3MTMgMC4wODc0MDM1IDIxLjMwODEgMCAxOS41NzA1TDMuMjc3NjMgMTcuNTEyOUw4LjQzNDQ0IDE5LjkzNjNMNS4xNTY4MSAyMi4wODU0WiIgZmlsbD0iIzAxNjhBMSIvPgo8cGF0aCBkPSJNNi45MzI1NiAxMy4yODAxTDQuNDg1MjYgMTIuMTM3QzMuMzkyNzEgMTEuNjM0IDIuMzg3NTcgMTEuMjIyNSAyLjM4NzU3IDkuOTQyMTZDMi4zODc1NyA5LjMwMiAyLjU2MjM4IDguOTM2MiAyLjg2ODI5IDguNjE2MTNMOC4wMjUxIDEwLjk5MzhMNi43NTc3NSAxMS43NzEyQzYuNDA4MTQgMTEuOTk5OCA2LjE0NTkzIDEyLjE4MjcgNi4xNDU5MyAxMi41MDI4QzYuMTQ1OTMgMTIuNzc3MSA2LjQ5NTU0IDEzLjA1MTUgNi45MzI1NiAxMy4yODAxWiIgZmlsbD0iIzE1NTQ3NyIvPgo8cGF0aCBkPSJNMTUuOTA3NCAyM0MxNC41OTY0IDIxLjk0ODMgMTMuMTk3OSAyMS4yNjI0IDExLjUzNzMgMjAuNDM5NEwzLjc1ODM1IDE2LjgyNzFDMS43OTE3NyAxNS45MTI2IDAuNDgwNzEzIDE0LjY3OCAwLjQ4MDcxMyAxMi42NjYxQzAuNDgwNzEzIDEwLjY1NDIgMS4zOTg0NSA5LjY5Mzk5IDIuNTc4NCA4LjkxNjY2TDMuMDE1NDIgOC42NDIzMUMyLjcwOTUgOC45NjIzOSAyLjUzNDcgOS4zMjgxOSAyLjUzNDcgOS45NjgzNEMyLjUzNDcgMTEuMjAyOSAzLjU4MzU0IDExLjY2MDIgNC42MzIzOCAxMi4xNjMxTDEzLjY3ODcgMTYuMzI0MUMxNS4yNTE5IDE3LjAxIDE2LjY5NDEgMTguMjQ0NiAxNi42OTQxIDIwLjM0NzlDMTYuNzgxNSAyMS40OTExIDE2LjM0NDUgMjIuNDk3IDE1LjkwNzQgMjNaIiBmaWxsPSIjMTU1NDc3Ii8+Cjwvc3ZnPgo=", K1 = Re.div`
  ${an("23%", "28px")}
  ${Vr("flex-start", "center")}
  gap: 23px;
`, Zt = Re.span`
  color: ${({ theme: e }) => e.light};
  cursor: pointer;
`, $1 = () => {
  const e = oc(), n = or(), { openFile: r, saveFile: t } = Cc(), o = async () => {
    await e.requestCodeExecution();
  }, i = () => {
    n.tabs.createTab();
  };
  return /* @__PURE__ */ ve(K1, { children: [
    /* @__PURE__ */ U(S_, { to: Ll.MAIN, children: /* @__PURE__ */ U("img", { src: Y1 }) }),
    /* @__PURE__ */ U(Zt, { onClick: r, children: "Open" }),
    /* @__PURE__ */ U(Zt, { onClick: t, children: "Save" }),
    /* @__PURE__ */ U(Zt, { onClick: i, children: "New" }),
    /* @__PURE__ */ U(Zt, { onClick: o, children: "Run" })
  ] });
}, z1 = Re.div`
  ${an("23%", "100%")};
  ${Vr("flex-start", "center")};
`, J1 = Re(jn)`
  margin-top: 0;
  margin-left: 20px;
  svg {
    color: ${({ theme: e, $disabled: n }) => n ? e.secondaryGrey : e.light};
  }
`, q1 = tr(() => {
  const e = oc(), r = !Mt().isAllowedToExecute(), t = wt();
  return /* @__PURE__ */ U(z1, { children: /* @__PURE__ */ U(J1, { onClick: async () => {
    r || (await e.requestCodeExecution(), t.update({
      isTerminalOpened: !0,
      selectedTerminalTab: "terminal"
    }));
  }, $disabled: r, children: /* @__PURE__ */ U(oR, {}) }) });
}), Z1 = Re.div`
  background: ${({ theme: e }) => e.grey};
  border-bottom: 2px solid ${({ theme: e }) => e.lightGrey};
  height: ${an("100%", "44px")};
  box-sizing: border-box;
  ${Vr("space-between", "center")}
  ${MO(23)}
`, Q1 = Re.h2`
  color: ${({ theme: e }) => e.light}
`, eN = tr(() => {
  const n = Mt().getActiveTab();
  return /* @__PURE__ */ ve(Z1, { children: [
    /* @__PURE__ */ U($1, {}),
    /* @__PURE__ */ ve(Q1, { children: [
      "$",
      n.getLabel(),
      " - CodeGear"
    ] }),
    /* @__PURE__ */ U(q1, {})
  ] });
});
class nN {
  constructor(n) {
    this.state = n, er(this);
  }
  getActiveTab(n = this.state.activeKey) {
    return this.state.content.find((r) => r.getKeyId() === n);
  }
  getActiveTabText() {
    return this.getActiveTab()?.getContent();
  }
  getTabIndex(n = this.state.activeKey) {
    return this.state.content.findIndex((r) => r.getKeyId() === n);
  }
  getActiveLanguage() {
    return this.getActiveTab()?.lang;
  }
  isAllowedToExecute() {
    const n = this.getActiveLanguage();
    return b1.includes(n);
  }
}
class rN {
  constructor(n) {
    er(this), this.state = n, this.getters = n.getters, this.tabs = new v1(n), this.editor = new E1(n), this.terminal = new Nb(n), this.storage = new Pt();
  }
  changeTheme(n) {
    this.state.theme = n;
  }
}
class tN {
  constructor(n) {
    er(this), this.state = n, this.getters = n.getters, this.actions = n.actions;
  }
  async requestCodeExecution() {
    if (!this.getters.isAllowedToExecute())
      return;
    const n = this.getters.getActiveTab(), r = {
      code: n.getContent(),
      language: n.lang
    }, t = await qE.post(
      JE.CODE_EXECUTOR_API,
      r
    );
    this.actions.terminal.addExecuteMessage(t.data);
  }
}
class oN {
  constructor() {
    this.activeKey = "", this.content = [], this.theme = "vs-dark", this.executeMessages = [], er(this), this.getters = new nN(this), this.actions = new rN(this), this.services = new tN(this);
    const n = new Pt();
    this.theme = n.get("EDITOR_THEME", "vs-dark");
    const r = n.get("EDITOR_CONTENT_DATA", []);
    this.executeMessages = n.get("EDITOR_EXECUTE_MESSAGES", []), r.length || this.actions.tabs.createTab();
    for (const o of r)
      this.content.push(new Gc({ instance: o }));
    const t = this.content[0];
    this.activeKey = t.getKeyId();
  }
}
const Lt = ca({}), iN = ({ children: e }) => {
  const n = new oN();
  return /* @__PURE__ */ U(Lt.Provider, { value: n, children: e });
}, Dc = ca({}), aN = ({ children: e }) => {
  const n = Pi(() => ({
    isSettingsOpened: !1,
    isTerminalOpened: !1,
    selectedTerminalTab: "terminal"
  }), []), r = (s, _) => ({ ...s, ..._ }), [t, o] = Mc(r, n), i = (s) => {
    t[s] ? o({ [s]: !1 }) : o({ [s]: !0 });
  }, a = Pi(() => ({
    state: t,
    update: o,
    toggle: i
  }), [t]);
  return /* @__PURE__ */ U(Dc.Provider, { value: a, children: e });
};
function sN(e, n) {
  for (var r in n)
    e[r] = n[r];
  return e;
}
function f_(e, n) {
  for (var r in e)
    if (r !== "__source" && !(r in n))
      return !0;
  for (var t in n)
    if (t !== "__source" && e[t] !== n[t])
      return !0;
  return !1;
}
function T_(e) {
  this.props = e;
}
(T_.prototype = new Cn()).isPureReactComponent = !0, T_.prototype.shouldComponentUpdate = function(e, n) {
  return f_(this.props, e) || f_(this.state, n);
};
var E_ = P.__b;
P.__b = function(e) {
  e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), E_ && E_(e);
};
var _N = P.__e;
P.__e = function(e, n, r, t) {
  if (e.then) {
    for (var o, i = n; i = i.__; )
      if ((o = i.__c) && o.__c)
        return n.__e == null && (n.__e = r.__e, n.__k = r.__k), o.__c(e, n);
  }
  _N(e, n, r, t);
};
var b_ = P.unmount;
function Uc(e, n, r) {
  return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(t) {
    typeof t.__c == "function" && t.__c();
  }), e.__c.__H = null), (e = sN({}, e)).__c != null && (e.__c.__P === r && (e.__c.__P = n), e.__c = null), e.__k = e.__k && e.__k.map(function(t) {
    return Uc(t, n, r);
  })), e;
}
function Hc(e, n, r) {
  return e && (e.__v = null, e.__k = e.__k && e.__k.map(function(t) {
    return Hc(t, n, r);
  }), e.__c && e.__c.__P === n && (e.__e && r.insertBefore(e.__e, e.__d), e.__c.__e = !0, e.__c.__P = r)), e;
}
function yi() {
  this.__u = 0, this.t = null, this.__b = null;
}
function yc(e) {
  var n = e.__.__c;
  return n && n.__a && n.__a(e);
}
function Qt() {
  this.u = null, this.o = null;
}
P.unmount = function(e) {
  var n = e.__c;
  n && n.__R && n.__R(), n && e.__h === !0 && (e.type = null), b_ && b_(e);
}, (yi.prototype = new Cn()).__c = function(e, n) {
  var r = n.__c, t = this;
  t.t == null && (t.t = []), t.t.push(r);
  var o = yc(t.__v), i = !1, a = function() {
    i || (i = !0, r.__R = null, o ? o(s) : s());
  };
  r.__R = a;
  var s = function() {
    if (!--t.__u) {
      if (t.state.__a) {
        var u = t.state.__a;
        t.__v.__k[0] = Hc(u, u.__c.__P, u.__c.__O);
      }
      var c;
      for (t.setState({ __a: t.__b = null }); c = t.t.pop(); )
        c.forceUpdate();
    }
  }, _ = n.__h === !0;
  t.__u++ || _ || t.setState({ __a: t.__b = t.__v.__k[0] }), e.then(a, a);
}, yi.prototype.componentWillUnmount = function() {
  this.t = [];
}, yi.prototype.render = function(e, n) {
  if (this.__b) {
    if (this.__v.__k) {
      var r = document.createElement("div"), t = this.__v.__k[0].__c;
      this.__v.__k[0] = Uc(this.__b, r, t.__O = t.__P);
    }
    this.__b = null;
  }
  var o = n.__a && ys(ct, null, e.fallback);
  return o && (o.__h = null), [ys(ct, null, n.__a ? null : e.children), o];
};
var O_ = function(e, n, r) {
  if (++r[1] === r[0] && e.o.delete(n), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.o.size))
    for (r = e.u; r; ) {
      for (; r.length > 3; )
        r.pop()();
      if (r[1] < r[0])
        break;
      e.u = r = r[2];
    }
};
(Qt.prototype = new Cn()).__a = function(e) {
  var n = this, r = yc(n.__v), t = n.o.get(e);
  return t[0]++, function(o) {
    var i = function() {
      n.props.revealOrder ? (t.push(o), O_(n, e, t)) : o();
    };
    r ? r(i) : i();
  };
}, Qt.prototype.render = function(e) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var n = Mo(e.children);
  e.revealOrder && e.revealOrder[0] === "b" && n.reverse();
  for (var r = n.length; r--; )
    this.o.set(n[r], this.u = [1, 0, this.u]);
  return e.children;
}, Qt.prototype.componentDidUpdate = Qt.prototype.componentDidMount = function() {
  var e = this;
  this.o.forEach(function(n, r) {
    O_(e, r, n);
  });
};
var uN = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, lN = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, cN = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, dN = /[A-Z0-9]/g, mN = typeof document < "u", hN = function(e) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e);
};
Cn.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
  Object.defineProperty(Cn.prototype, e, { configurable: !0, get: function() {
    return this["UNSAFE_" + e];
  }, set: function(n) {
    Object.defineProperty(this, e, { configurable: !0, writable: !0, value: n });
  } });
});
var R_ = P.event;
function pN() {
}
function fN() {
  return this.cancelBubble;
}
function TN() {
  return this.defaultPrevented;
}
P.event = function(e) {
  return R_ && (e = R_(e)), e.persist = pN, e.isPropagationStopped = fN, e.isDefaultPrevented = TN, e.nativeEvent = e;
};
var EN = { enumerable: !1, configurable: !0, get: function() {
  return this.class;
} }, N_ = P.vnode;
P.vnode = function(e) {
  typeof e.type == "string" && function(n) {
    var r = n.props, t = n.type, o = {};
    for (var i in r) {
      var a = r[i];
      if (!(i === "value" && "defaultValue" in r && a == null || mN && i === "children" && t === "noscript" || i === "class" || i === "className")) {
        var s = i.toLowerCase();
        i === "defaultValue" && "value" in r && r.value == null ? i = "value" : i === "download" && a === !0 ? a = "" : s === "ondoubleclick" ? i = "ondblclick" : s !== "onchange" || t !== "input" && t !== "textarea" || hN(r.type) ? s === "onfocus" ? i = "onfocusin" : s === "onblur" ? i = "onfocusout" : cN.test(i) ? i = s : t.indexOf("-") === -1 && lN.test(i) ? i = i.replace(dN, "-$&").toLowerCase() : a === null && (a = void 0) : s = i = "oninput", s === "oninput" && o[i = s] && (i = "oninputCapture"), o[i] = a;
      }
    }
    t == "select" && o.multiple && Array.isArray(o.value) && (o.value = Mo(r.children).forEach(function(_) {
      _.props.selected = o.value.indexOf(_.props.value) != -1;
    })), t == "select" && o.defaultValue != null && (o.value = Mo(r.children).forEach(function(_) {
      _.props.selected = o.multiple ? o.defaultValue.indexOf(_.props.value) != -1 : o.defaultValue == _.props.value;
    })), r.class && !r.className ? (o.class = r.class, Object.defineProperty(o, "className", EN)) : (r.className && !r.class || r.class && r.className) && (o.class = o.className = r.className), n.props = o;
  }(e), e.$$typeof = uN, N_ && N_(e);
};
var I_ = P.__r;
P.__r = function(e) {
  I_ && I_(e), e.__c;
};
var g_ = P.diffed;
P.diffed = function(e) {
  g_ && g_(e);
  var n = e.props, r = e.__e;
  r != null && e.type === "textarea" && "value" in n && n.value !== r.value && (r.value = n.value == null ? "" : n.value);
};
function bN(e) {
  if (!(ra(e) && "base" in e && typeof e.base == "string" && "colors" in e && ra(e.colors)))
    throw new Error(di.WrongJsonObject("ThemeObject"));
}
const ON = () => {
  const e = ns(), n = jl(), { theme: r } = Fr();
  return lb(() => {
    let t = 0;
    la.forEach(async (o) => {
      try {
        const i = await RN(`./themes/${o}.json`);
        bN(i), e?.editor.defineTheme(o, i);
      } catch {
        console.log(di.ThemeUpload(o));
      }
      t += 1, t === la.length && (e?.editor.setTheme(r), n.on());
    });
  }, [e]), n.val;
};
function RN(e) {
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
      return new Promise(function(n, r) {
        (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(
          r.bind(null, new Error("Unknown variable dynamic import: " + e))
        );
      });
  }
}
const NN = ({ children: e }) => {
  const n = ON();
  return /* @__PURE__ */ U(yo, { when: n, children: e });
}, IN = Re.div`
  ${an("100vw", "100vh")}
`, gN = Re.div`
  ${an("100%", "calc(100% - 45px)")};
  display: flex;
`, DN = () => (nb(), /* @__PURE__ */ U(Tb, { children: /* @__PURE__ */ U(iN, { children: /* @__PURE__ */ U(NN, { children: /* @__PURE__ */ U(aN, { children: /* @__PURE__ */ ve(IN, { children: [
  /* @__PURE__ */ U(eN, {}),
  /* @__PURE__ */ ve(gN, { children: [
    /* @__PURE__ */ U(T1, {}),
    /* @__PURE__ */ U(X1, {}),
    /* @__PURE__ */ U(aR, {})
  ] })
] }) }) }) }) }));
export {
  DN as Editor,
  nN as EditorGetters,
  oN as EditorStore,
  Lt as EditorStoreContext,
  Dc as ModalsContext
};