import { jsxs as ve, jsx as U, Fragment as Pl } from "react/jsx-runtime";
import me, { useState as qn, useRef as ce, useEffect as ye, createContext as ls, useMemo as Pi, useContext as yn, forwardRef as To, memo as Gr, useCallback as vr, useImperativeHandle as A_, createElement as wl, useReducer as Ml } from "react";
import { unstable_batchedUpdates as kl } from "react-dom";
import { Link as S_ } from "react-router-dom";
import { Tabs as G_, Select as v_ } from "antd";
function Y(e) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), t = 1; t < n; t++)
    r[t - 1] = arguments[t];
  throw new Error(typeof e == "number" ? "[MobX] minified error nr: " + e + (r.length ? " " + r.map(String).join(",") : "") + ". Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts" : "[MobX] " + e);
}
var xl = {};
function ds() {
  return typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : xl;
}
var C_ = Object.assign, Eo = Object.getOwnPropertyDescriptor, ln = Object.defineProperty, pt = Object.prototype, wi = [];
Object.freeze(wi);
var D_ = {};
Object.freeze(D_);
var Ll = typeof Proxy < "u", Bl = /* @__PURE__ */ Object.toString();
function U_() {
  Ll || Y("Proxy not available");
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
function lr(e) {
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
  return typeof r == "function" && r.toString() === Bl;
}
function y_(e) {
  var n = e?.constructor;
  return n ? n.name === "GeneratorFunction" || n.displayName === "GeneratorFunction" : !1;
}
function ft(e, n, r) {
  ln(e, n, {
    enumerable: !1,
    writable: !0,
    configurable: !0,
    value: r
  });
}
function P_(e, n, r) {
  ln(e, n, {
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
function jl(e) {
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
var Fl = Object.getOwnPropertyDescriptors || function(n) {
  var r = {};
  return Cr(n).forEach(function(t) {
    r[t] = Eo(n, t);
  }), r;
};
function ta(e, n) {
  for (var r = 0; r < n.length; r++) {
    var t = n[r];
    t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(e, Xl(t.key), t);
  }
}
function hs(e, n, r) {
  return n && ta(e.prototype, n), r && ta(e, r), Object.defineProperty(e, "prototype", {
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
function Vl(e, n) {
  if (e) {
    if (typeof e == "string")
      return oa(e, n);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return oa(e, n);
  }
}
function oa(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var r = 0, t = new Array(n); r < n; r++)
    t[r] = e[r];
  return t;
}
function Or(e, n) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r)
    return (r = r.call(e)).next.bind(r);
  if (Array.isArray(e) || (r = Vl(e)) || n && e && typeof e.length == "number") {
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
function Wl(e, n) {
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
function Xl(e) {
  var n = Wl(e, "string");
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
function Yl(e) {
  return Sn(e, un) || ft(e, un, Dr({}, e[un])), e[un];
}
var M = /* @__PURE__ */ Symbol("mobx administration"), Ot = /* @__PURE__ */ function() {
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
    Be(), ou(this), b.stateVersion = b.stateVersion < Number.MAX_SAFE_INTEGER ? b.stateVersion + 1 : Number.MIN_SAFE_INTEGER, je();
  }, n.toString = function() {
    return this.name_;
  }, e;
}(), ms = /* @__PURE__ */ Qn("Atom", Ot);
function x_(e, n, r) {
  n === void 0 && (n = Er), r === void 0 && (r = Er);
  var t = new Ot(e);
  return n !== Er && nh(t, n), r !== Er && lu(t, r), t;
}
function Kl(e, n) {
  return e === n;
}
function $l(e, n) {
  return Ns(e, n);
}
function zl(e, n) {
  return Ns(e, n, 1);
}
function Jl(e, n) {
  return Object.is ? Object.is(e, n) : e === n ? e !== 0 || 1 / e === 1 / n : e !== e && n !== n;
}
var Oo = {
  identity: Kl,
  structural: $l,
  default: Jl,
  shallow: zl
};
function Ur(e, n, r) {
  return Es(e) ? e : Array.isArray(e) ? Ge.array(e, {
    name: r
  }) : Dn(e) ? Ge.object(e, void 0, {
    name: r
  }) : kr(e) ? Ge.map(e, {
    name: r
  }) : Tt(e) ? Ge.set(e, {
    name: r
  }) : typeof e == "function" && !Ts(e) && !Io(e) ? y_(e) ? it(e) : ot(r, e) : e;
}
function ql(e, n, r) {
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
function Zl(e, n) {
  return Ns(e, n) ? n : e;
}
var Ql = "override";
function ed(e) {
  return e.annotationType_ === Ql;
}
function Rt(e, n) {
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
  if (Ts(r.value))
    return 1;
  var i = L_(e, this, n, r, !1);
  return ln(t, n, i), 2;
}
function rd(e, n, r, t) {
  var o = L_(e, this, n, r);
  return e.defineProperty_(n, o, t);
}
function td(e, n, r, t) {
  n.annotationType_, t.value;
}
function L_(e, n, r, t, o) {
  var i, s, a, _, u, l, c;
  o === void 0 && (o = b.safeDescriptors), td(e, n, r, t);
  var E = t.value;
  if ((i = n.options_) != null && i.bound) {
    var O;
    E = E.bind((O = e.proxy_) != null ? O : e.target_);
  }
  return {
    value: Hr(
      (s = (a = n.options_) == null ? void 0 : a.name) != null ? s : r.toString(),
      E,
      (_ = (u = n.options_) == null ? void 0 : u.autoAction) != null ? _ : !1,
      // https://github.com/mobxjs/mobx/discussions/3140
      (l = n.options_) != null && l.bound ? (c = e.proxy_) != null ? c : e.target_ : void 0
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
  return ln(t, n, i), 2;
}
function id(e, n, r, t) {
  var o, i = j_(e, this, n, r, (o = this.options_) == null ? void 0 : o.bound);
  return e.defineProperty_(n, i, t);
}
function sd(e, n, r, t) {
  n.annotationType_, t.value;
}
function j_(e, n, r, t, o, i) {
  i === void 0 && (i = b.safeDescriptors), sd(e, n, r, t);
  var s = t.value;
  if (Io(s) || (s = it(s)), o) {
    var a;
    s = s.bind((a = e.proxy_) != null ? a : e.target_), s.isMobXFlow = !0;
  }
  return {
    value: s,
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
function ps(e, n) {
  return {
    annotationType_: e,
    options_: n,
    make_: ad,
    extend_: _d
  };
}
function ad(e, n, r) {
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
    make_: cd,
    extend_: ld
  };
}
function cd(e, n, r) {
  return this.extend_(e, n, r, !1) === null ? 0 : 1;
}
function ld(e, n, r, t) {
  var o, i;
  return dd(e, this), e.defineObservableProperty_(n, r.value, (o = (i = this.options_) == null ? void 0 : i.enhancer) != null ? o : Ur, t);
}
function dd(e, n, r, t) {
  n.annotationType_;
}
var hd = "true", md = /* @__PURE__ */ F_();
function F_(e) {
  return {
    annotationType_: hd,
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
    var s = Hr(n.toString(), r.set);
    return t === e.target_ ? e.defineProperty_(n, {
      configurable: b.safeDescriptors ? e.isPlainObject_ : !0,
      set: s
    }) === null ? 0 : 2 : (ln(t, n, {
      configurable: !0,
      set: s
    }), 2);
  }
  if (t !== e.target_ && typeof r.value == "function") {
    var a;
    if (y_(r.value)) {
      var _, u = (_ = this.options_) != null && _.autoBind ? it.bound : it;
      return u.make_(e, n, r, t);
    }
    var l = (a = this.options_) != null && a.autoBind ? ot.bound : ot;
    return l.make_(e, n, r, t);
  }
  var c = ((o = this.options_) == null ? void 0 : o.deep) === !1 ? Ge.ref : Ge;
  if (typeof r.value == "function" && (i = this.options_) != null && i.autoBind) {
    var E;
    r.value = r.value.bind((E = e.proxy_) != null ? E : e.target_);
  }
  return c.make_(e, n, r, t);
}
function fd(e, n, r, t) {
  var o, i;
  if (r.get)
    return Xo.extend_(e, n, r, t);
  if (r.set)
    return e.defineProperty_(n, {
      configurable: b.safeDescriptors ? e.isPlainObject_ : !0,
      set: Hr(n.toString(), r.set)
    }, t);
  if (typeof r.value == "function" && (o = this.options_) != null && o.autoBind) {
    var s;
    r.value = r.value.bind((s = e.proxy_) != null ? s : e.target_);
  }
  var a = ((i = this.options_) == null ? void 0 : i.deep) === !1 ? Ge.ref : Ge;
  return a.extend_(e, n, r, t);
}
var Td = "observable", Ed = "observable.ref", Od = "observable.shallow", Rd = "observable.struct", V_ = {
  deep: !0,
  name: void 0,
  defaultDecorator: void 0,
  proxy: !0
};
Object.freeze(V_);
function jt(e) {
  return e || V_;
}
var W_ = /* @__PURE__ */ Wo(Td), Nd = /* @__PURE__ */ Wo(Ed, {
  enhancer: Vo
}), bd = /* @__PURE__ */ Wo(Od, {
  enhancer: ql
}), Id = /* @__PURE__ */ Wo(Rd, {
  enhancer: Zl
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
  if (lr(n)) {
    Et(e, n, W_);
    return;
  }
  return Es(e) ? e : Dn(e) ? Ge.object(e, n, r) : Array.isArray(e) ? Ge.array(e, n) : kr(e) ? Ge.map(e, n) : Tt(e) ? Ge.set(e, n) : typeof e == "object" && e !== null ? e : Ge.box(e, n);
}
C_(Y_, X_);
var Sd = {
  box: function(n, r) {
    var t = jt(r);
    return new _r(n, Ft(t), t.name, !0, t.equals);
  },
  array: function(n, r) {
    var t = jt(r);
    return (b.useProxies === !1 || t.proxy === !1 ? Gh : Eh)(n, Ft(t), t.name);
  },
  map: function(n, r) {
    var t = jt(r);
    return new Ru(n, Ft(t), t.name);
  },
  set: function(n, r) {
    var t = jt(r);
    return new Iu(n, Ft(t), t.name);
  },
  object: function(n, r, t) {
    return hu(b.useProxies === !1 || t?.proxy === !1 ? Gt({}, t) : mh({}, t), n, r);
  },
  ref: /* @__PURE__ */ dn(Nd),
  shallow: /* @__PURE__ */ dn(bd),
  deep: X_,
  struct: /* @__PURE__ */ dn(Id)
}, Ge = /* @__PURE__ */ C_(Y_, Sd), K_ = "computed", Gd = "computed.struct", $_ = /* @__PURE__ */ ps(K_), vd = /* @__PURE__ */ ps(Gd, {
  equals: Oo.structural
}), Xo = function(n, r) {
  if (lr(r))
    return Et(n, r, $_);
  if (Dn(n))
    return dn(ps(K_, n));
  var t = Dn(r) ? r : {};
  return t.get = n, t.name || (t.name = n.name || ""), new rt(t);
};
Object.assign(Xo, $_);
Xo.struct = /* @__PURE__ */ dn(vd);
var ia, sa, Ro = 0, Cd = 1, Dd = (ia = (sa = /* @__PURE__ */ Eo(function() {
}, "name")) == null ? void 0 : sa.configurable) != null ? ia : !1, aa = {
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
  return o.isMobxAction = !0, Dd && (aa.value = e, ln(o, "name", aa)), o;
}
function Ud(e, n, r, t, o) {
  var i = Hd(e, n);
  try {
    return r.apply(t, o);
  } catch (s) {
    throw i.error_ = s, s;
  } finally {
    yd(i);
  }
}
function Hd(e, n, r, t) {
  var o = !1, i = 0, s = b.trackingDerivation, a = !n || !s;
  Be();
  var _ = b.allowStateChanges;
  a && (xr(), _ = Nt(!0));
  var u = fs(!0), l = {
    runAsAction_: a,
    prevDerivation_: s,
    prevAllowStateChanges_: _,
    prevAllowStateReads_: u,
    notifySpy_: o,
    startTime_: i,
    actionId_: Cd++,
    parentActionId_: Ro
  };
  return Ro = l.actionId_, l;
}
function yd(e) {
  Ro !== e.actionId_ && Y(30), Ro = e.parentActionId_, e.error_ !== void 0 && (b.suppressReactionErrors = !0), bt(e.prevAllowStateChanges_), Jr(e.prevAllowStateReads_), je(), e.runAsAction_ && Yn(e.prevDerivation_), b.suppressReactionErrors = !1;
}
function Pd(e, n) {
  var r = Nt(e);
  try {
    return n();
  } finally {
    bt(r);
  }
}
function Nt(e) {
  var n = b.allowStateChanges;
  return b.allowStateChanges = e, n;
}
function bt(e) {
  b.allowStateChanges = e;
}
var z_;
z_ = Symbol.toPrimitive;
var _r = /* @__PURE__ */ function(e) {
  k_(n, e);
  function n(t, o, i, s, a) {
    var _;
    return i === void 0 && (i = "ObservableValue"), a === void 0 && (a = Oo.default), _ = e.call(this, i) || this, _.enhancer = void 0, _.name_ = void 0, _.equals = void 0, _.hasUnreportedChange_ = !1, _.interceptors_ = void 0, _.changeListeners_ = void 0, _.value_ = void 0, _.dehancer = void 0, _.enhancer = o, _.name_ = i, _.equals = a, _.value_ = o(t, void 0, i), _;
  }
  var r = n.prototype;
  return r.dehanceValue = function(o) {
    return this.dehancer !== void 0 ? this.dehancer(o) : o;
  }, r.set = function(o) {
    this.value_, o = this.prepareNewValue_(o), o !== b.UNCHANGED && this.setNewValue_(o);
  }, r.prepareNewValue_ = function(o) {
    if (Ke(this)) {
      var i = $e(this, {
        object: this,
        type: hn,
        newValue: o
      });
      if (!i)
        return b.UNCHANGED;
      o = i.newValue;
    }
    return o = this.enhancer(o, this.value_, this.name_), this.equals(this.value_, o) ? b.UNCHANGED : o;
  }, r.setNewValue_ = function(o) {
    var i = this.value_;
    this.value_ = o, this.reportChanged(), en(this) && nn(this, {
      type: hn,
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
      type: hn,
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
}(Ot), wd = /* @__PURE__ */ Qn("ObservableValue", _r), J_;
J_ = Symbol.toPrimitive;
var rt = /* @__PURE__ */ function() {
  function e(r) {
    this.dependenciesState_ = J.NOT_TRACKING_, this.observing_ = [], this.newObserving_ = null, this.isBeingObserved_ = !1, this.isPendingUnobservation_ = !1, this.observers_ = /* @__PURE__ */ new Set(), this.diffValue_ = 0, this.runId_ = 0, this.lastAccessedBy_ = 0, this.lowestObserverState_ = J.UP_TO_DATE_, this.unboundDepsCount_ = 0, this.value_ = new No(null), this.name_ = void 0, this.triggeredBy_ = void 0, this.isComputing_ = !1, this.isRunningSetter_ = !1, this.derivation = void 0, this.setter_ = void 0, this.isTracing_ = ur.NONE, this.scope_ = void 0, this.equals_ = void 0, this.requiresReaction_ = void 0, this.keepAlive_ = void 0, this.onBOL = void 0, this.onBUOL = void 0, r.get || Y(31), this.derivation = r.get, this.name_ = r.name || "ComputedValue", r.set && (this.setter_ = Hr("ComputedValue-setter", r.set)), this.equals_ = r.equals || (r.compareStructural || r.struct ? Oo.structural : Oo.default), this.scope_ = r.context, this.requiresReaction_ = r.requiresReaction, this.keepAlive_ = !!r.keepAlive;
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
    if (this.isComputing_ && Y(32, this.name_, this.derivation), b.inBatch === 0 && // !globalState.trackingDerivatpion &&
    this.observers_.size === 0 && !this.keepAlive_)
      ki(this) && (this.warnAboutUntrackedRead_(), Be(), this.value_ = this.computeValue_(!1), je());
    else if (tu(this), ki(this)) {
      var t = b.trackingContext;
      this.keepAlive_ && !t && (b.trackingContext = this), this.trackAndCompute() && Ld(this), b.trackingContext = t;
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
    ), i = this.computeValue_(!0), s = o || eo(t) || eo(i) || !this.equals_(t, i);
    return s && (this.value_ = i), s;
  }, n.computeValue_ = function(t) {
    this.isComputing_ = !0;
    var o = Nt(!1), i;
    if (t)
      i = q_(this, this.derivation, this.scope_);
    else if (b.disableErrorBoundaries === !0)
      i = this.derivation.call(this.scope_);
    else
      try {
        i = this.derivation.call(this.scope_);
      } catch (s) {
        i = new No(s);
      }
    return bt(o), this.isComputing_ = !1, i;
  }, n.suspend_ = function() {
    this.keepAlive_ || (xi(this), this.value_ = void 0);
  }, n.observe_ = function(t, o) {
    var i = this, s = !0, a = void 0;
    return Jd(function() {
      var _ = i.get();
      if (!s || o) {
        var u = xr();
        t({
          observableKind: "computed",
          debugObjectName: i.name_,
          type: hn,
          object: i,
          newValue: _,
          oldValue: a
        }), Yn(u);
      }
      s = !1, a = _;
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
var No = function(n) {
  this.cause = void 0, this.cause = n;
};
function eo(e) {
  return e instanceof No;
}
function ki(e) {
  switch (e.dependenciesState_) {
    case J.UP_TO_DATE_:
      return !1;
    case J.NOT_TRACKING_:
    case J.STALE_:
      return !0;
    case J.POSSIBLY_STALE_: {
      for (var n = fs(!0), r = xr(), t = e.observing_, o = t.length, i = 0; i < o; i++) {
        var s = t[i];
        if (It(s)) {
          if (b.disableErrorBoundaries)
            s.get();
          else
            try {
              s.get();
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
  var t = fs(!0);
  Q_(e), e.newObserving_ = new Array(e.observing_.length + 100), e.unboundDepsCount_ = 0, e.runId_ = ++b.runId;
  var o = b.trackingDerivation;
  b.trackingDerivation = e, b.inBatch++;
  var i;
  if (b.disableErrorBoundaries === !0)
    i = n.call(r);
  else
    try {
      i = n.call(r);
    } catch (s) {
      i = new No(s);
    }
  return b.inBatch--, b.trackingDerivation = o, Md(e), Jr(t), i;
}
function Md(e) {
  for (var n = e.observing_, r = e.observing_ = e.newObserving_, t = J.UP_TO_DATE_, o = 0, i = e.unboundDepsCount_, s = 0; s < i; s++) {
    var a = r[s];
    a.diffValue_ === 0 && (a.diffValue_ = 1, o !== s && (r[o] = a), o++), a.dependenciesState_ > t && (t = a.dependenciesState_);
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
  var e = b.trackingDerivation;
  return b.trackingDerivation = null, e;
}
function Yn(e) {
  b.trackingDerivation = e;
}
function fs(e) {
  var n = b.allowStateReads;
  return b.allowStateReads = e, n;
}
function Jr(e) {
  b.allowStateReads = e;
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
}, ro = !0, eu = !1, b = /* @__PURE__ */ function() {
  var e = /* @__PURE__ */ ds();
  return e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (ro = !1), e.__mobxGlobals && e.__mobxGlobals.version !== new no().version && (ro = !1), ro ? e.__mobxGlobals ? (e.__mobxInstanceCount += 1, e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}), e.__mobxGlobals) : (e.__mobxInstanceCount = 1, e.__mobxGlobals = /* @__PURE__ */ new no()) : (setTimeout(function() {
    eu || Y(35);
  }, 1), new no());
}();
function kd() {
  if ((b.pendingReactions.length || b.inBatch || b.isRunningReactions) && Y(36), eu = !0, ro) {
    var e = ds();
    --e.__mobxInstanceCount === 0 && (e.__mobxGlobals = void 0), b = new no();
  }
}
function xd(e, n) {
  e.observers_.add(n), e.lowestObserverState_ > n.dependenciesState_ && (e.lowestObserverState_ = n.dependenciesState_);
}
function nu(e, n) {
  e.observers_.delete(n), e.observers_.size === 0 && ru(e);
}
function ru(e) {
  e.isPendingUnobservation_ === !1 && (e.isPendingUnobservation_ = !0, b.pendingUnobservations.push(e));
}
function Be() {
  b.inBatch++;
}
function je() {
  if (--b.inBatch === 0) {
    iu();
    for (var e = b.pendingUnobservations, n = 0; n < e.length; n++) {
      var r = e[n];
      r.isPendingUnobservation_ = !1, r.observers_.size === 0 && (r.isBeingObserved_ && (r.isBeingObserved_ = !1, r.onBUO()), r instanceof rt && r.suspend_());
    }
    b.pendingUnobservations = [];
  }
}
function tu(e) {
  var n = b.trackingDerivation;
  return n !== null ? (n.runId_ !== e.lastAccessedBy_ && (e.lastAccessedBy_ = n.runId_, n.newObserving_[n.unboundDepsCount_++] = e, !e.isBeingObserved_ && b.trackingContext && (e.isBeingObserved_ = !0, e.onBO())), e.isBeingObserved_) : (e.observers_.size === 0 && b.inBatch > 0 && ru(e), !1);
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
    this.isScheduled_ || (this.isScheduled_ = !0, b.pendingReactions.push(this), iu());
  }, n.isScheduled = function() {
    return this.isScheduled_;
  }, n.runReaction_ = function() {
    if (!this.isDisposed_) {
      Be(), this.isScheduled_ = !1;
      var t = b.trackingContext;
      if (b.trackingContext = this, ki(this)) {
        this.isTrackPending_ = !0;
        try {
          this.onInvalidate_();
        } catch (o) {
          this.reportExceptionInDerivation_(o);
        }
      }
      b.trackingContext = t, je();
    }
  }, n.track = function(t) {
    if (!this.isDisposed_) {
      Be(), this.isRunning_ = !0;
      var o = b.trackingContext;
      b.trackingContext = this;
      var i = q_(this, t, void 0);
      b.trackingContext = o, this.isRunning_ = !1, this.isTrackPending_ = !1, this.isDisposed_ && xi(this), eo(i) && this.reportExceptionInDerivation_(i.cause), je();
    }
  }, n.reportExceptionInDerivation_ = function(t) {
    var o = this;
    if (this.errorHandler_) {
      this.errorHandler_(t, this);
      return;
    }
    if (b.disableErrorBoundaries)
      throw t;
    var i = "[mobx] uncaught error in '" + this + "'";
    b.suppressReactionErrors || console.error(i, t), b.globalReactionErrorHandlers.forEach(function(s) {
      return s(t, o);
    });
  }, n.dispose = function() {
    this.isDisposed_ || (this.isDisposed_ = !0, this.isRunning_ || (Be(), xi(this), je()));
  }, n.getDisposer_ = function() {
    var t = this.dispose.bind(this);
    return t[M] = this, t;
  }, n.toString = function() {
    return "Reaction[" + this.name_ + "]";
  }, n.trace = function(t) {
    t === void 0 && (t = !1), lh(this, t);
  }, e;
}(), jd = 100, Li = function(n) {
  return n();
};
function iu() {
  b.inBatch > 0 || b.isRunningReactions || Li(Fd);
}
function Fd() {
  b.isRunningReactions = !0;
  for (var e = b.pendingReactions, n = 0; e.length > 0; ) {
    ++n === jd && (console.error("[mobx] cycle in reaction: " + e[0]), e.splice(0));
    for (var r = e.splice(0), t = 0, o = r.length; t < o; t++)
      r[t].runReaction_();
  }
  b.isRunningReactions = !1;
}
var bo = /* @__PURE__ */ Qn("Reaction", tt);
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
var su = "action", Xd = "action.bound", au = "autoAction", Yd = "autoAction.bound", Kd = "<unnamed action>", _u = /* @__PURE__ */ Rt(su), $d = /* @__PURE__ */ Rt(Xd, {
  bound: !0
}), uu = /* @__PURE__ */ Rt(au, {
  autoAction: !0
}), zd = /* @__PURE__ */ Rt(Yd, {
  autoAction: !0,
  bound: !0
});
function cu(e) {
  var n = function(t, o) {
    if (rn(t))
      return Hr(t.name || Kd, t, e);
    if (rn(o))
      return Hr(t, o, e);
    if (lr(o))
      return Et(t, o, e ? uu : _u);
    if (lr(t))
      return dn(Rt(e ? au : su, {
        name: t,
        autoAction: e
      }));
  };
  return n;
}
var Rr = /* @__PURE__ */ cu(!1);
Object.assign(Rr, _u);
var ot = /* @__PURE__ */ cu(!0);
Object.assign(ot, uu);
Rr.bound = /* @__PURE__ */ dn($d);
ot.bound = /* @__PURE__ */ dn(zd);
function Ts(e) {
  return rn(e) && e.isMobxAction === !0;
}
function Jd(e, n) {
  var r, t;
  n === void 0 && (n = D_);
  var o = (r = (t = n) == null ? void 0 : t.name) != null ? r : "Autorun", i = !n.scheduler && !n.delay, s;
  if (i)
    s = new tt(o, function() {
      this.track(u);
    }, n.onError, n.requiresObservable);
  else {
    var a = Zd(n), _ = !1;
    s = new tt(o, function() {
      _ || (_ = !0, a(function() {
        _ = !1, s.isDisposed_ || s.track(u);
      }));
    }, n.onError, n.requiresObservable);
  }
  function u() {
    e(s);
  }
  return s.schedule_(), s.getDisposer_();
}
var qd = function(n) {
  return n();
};
function Zd(e) {
  return e.scheduler ? e.scheduler : e.delay ? function(n) {
    return setTimeout(n, e.delay);
  } : qd;
}
var Qd = "onBO", eh = "onBUO";
function nh(e, n, r) {
  return du(Qd, e, n, r);
}
function lu(e, n, r) {
  return du(eh, e, n, r);
}
function du(e, n, r, t) {
  var o = typeof t == "function" ? Zn(n, r) : Zn(n), i = rn(t) ? t : r, s = e + "L";
  return o[s] ? o[s].add(i) : o[s] = /* @__PURE__ */ new Set([i]), function() {
    var a = o[s];
    a && (a.delete(i), a.size === 0 && delete o[s]);
  };
}
var rh = "never", Vt = "always", th = "observed";
function oh(e) {
  e.isolateGlobalState === !0 && kd();
  var n = e.useProxies, r = e.enforceActions;
  if (n !== void 0 && (b.useProxies = n === Vt ? !0 : n === rh ? !1 : typeof Proxy < "u"), n === "ifavailable" && (b.verifyProxies = !0), r !== void 0) {
    var t = r === Vt ? Vt : r === th;
    b.enforceActions = t, b.allowStateChanges = !(t === !0 || t === Vt);
  }
  ["computedRequiresReaction", "reactionRequiresObservable", "observableRequiresReaction", "disableErrorBoundaries", "safeDescriptors"].forEach(function(o) {
    o in e && (b[o] = !!e[o]);
  }), b.allowStateReads = !b.observableRequiresReaction, e.reactionScheduler && Vd(e.reactionScheduler);
}
function hu(e, n, r, t) {
  var o = Fl(n), i = Gt(e, t)[M];
  Be();
  try {
    Cr(o).forEach(function(s) {
      i.extend_(
        s,
        o[s],
        // must pass "undefined" for { key: undefined }
        r && s in r ? r[s] : !0
      );
    });
  } finally {
    je();
  }
  return e;
}
function ih(e, n) {
  return mu(Zn(e, n));
}
function mu(e) {
  var n = {
    name: e.name_
  };
  return e.observing_ && e.observing_.length > 0 && (n.dependencies = sh(e.observing_).map(mu)), n;
}
function sh(e) {
  return Array.from(new Set(e));
}
var ah = 0;
function pu() {
  this.message = "FLOW_CANCELLED";
}
pu.prototype = /* @__PURE__ */ Object.create(Error.prototype);
var _a = /* @__PURE__ */ B_("flow"), _h = /* @__PURE__ */ B_("flow.bound", {
  bound: !0
}), it = /* @__PURE__ */ Object.assign(function(n, r) {
  if (lr(r))
    return Et(n, r, _a);
  var t = n, o = t.name || "<unnamed flow>", i = function() {
    var a = this, _ = arguments, u = ++ah, l = Rr(o + " - runid: " + u + " - init", t).apply(a, _), c, E = void 0, O = new Promise(function(d, h) {
      var p = 0;
      c = h;
      function I(H) {
        E = void 0;
        var f;
        try {
          f = Rr(o + " - runid: " + u + " - yield " + p++, l.next).call(l, H);
        } catch (w) {
          return h(w);
        }
        C(f);
      }
      function N(H) {
        E = void 0;
        var f;
        try {
          f = Rr(o + " - runid: " + u + " - yield " + p++, l.throw).call(l, H);
        } catch (w) {
          return h(w);
        }
        C(f);
      }
      function C(H) {
        if (rn(H?.then)) {
          H.then(C, h);
          return;
        }
        return H.done ? d(H.value) : (E = Promise.resolve(H.value), E.then(I, N));
      }
      I(void 0);
    });
    return O.cancel = Rr(o + " - runid: " + u + " - cancel", function() {
      try {
        E && ua(E);
        var d = l.return(void 0), h = Promise.resolve(d.value);
        h.then(Er, Er), ua(h), c(new pu());
      } catch (p) {
        c(p);
      }
    }), O;
  };
  return i.isMobXFlow = !0, i;
}, _a);
it.bound = /* @__PURE__ */ dn(_h);
function ua(e) {
  rn(e.cancel) && e.cancel();
}
function Io(e) {
  return e?.isMobXFlow === !0;
}
function uh(e, n) {
  return e ? n !== void 0 ? yr(e) ? e[M].values_.has(n) : !1 : yr(e) || !!e[M] || ms(e) || bo(e) || It(e) : !1;
}
function Es(e) {
  return uh(e);
}
function ch(e) {
  if (yr(e))
    return e[M].ownKeys_();
  Y(38);
}
function Wt(e, n, r) {
  return e.set(n, r), r;
}
function fr(e, n) {
  if (e == null || typeof e != "object" || e instanceof Date || !Es(e))
    return e;
  if (wd(e) || It(e))
    return fr(e.get(), n);
  if (n.has(e))
    return n.get(e);
  if (St(e)) {
    var r = Wt(n, e, new Array(e.length));
    return e.forEach(function(s, a) {
      r[a] = fr(s, n);
    }), r;
  }
  if (dr(e)) {
    var t = Wt(n, e, /* @__PURE__ */ new Set());
    return e.forEach(function(s) {
      t.add(fr(s, n));
    }), t;
  }
  if (rr(e)) {
    var o = Wt(n, e, /* @__PURE__ */ new Map());
    return e.forEach(function(s, a) {
      o.set(a, fr(s, n));
    }), o;
  } else {
    var i = Wt(n, e, {});
    return ch(e).forEach(function(s) {
      pt.propertyIsEnumerable.call(e, s) && (i[s] = fr(e[s], n));
    }), i;
  }
}
function fu(e, n) {
  return fr(e, /* @__PURE__ */ new Map());
}
function lh() {
  Y("trace() is not available in production builds");
  for (var e = !1, n = arguments.length, r = new Array(n), t = 0; t < n; t++)
    r[t] = arguments[t];
  typeof r[r.length - 1] == "boolean" && (e = r.pop());
  var o = dh(r);
  if (!o)
    return Y("'trace(break?)' can only be used inside a tracked computed value or a Reaction. Consider passing in the computed value or reaction explicitly");
  o.isTracing_ === ur.NONE && console.log("[mobx.trace] '" + o.name_ + "' tracing enabled"), o.isTracing_ = e ? ur.BREAK : ur.LOG;
}
function dh(e) {
  switch (e.length) {
    case 0:
      return b.trackingDerivation;
    case 1:
      return Zn(e[0]);
    case 2:
      return Zn(e[0], e[1]);
  }
}
function bn(e, n) {
  n === void 0 && (n = void 0), Be();
  try {
    return e.apply(n);
  } finally {
    je();
  }
}
function mr(e) {
  return e[M];
}
var hh = {
  has: function(n, r) {
    return mr(n).has_(r);
  },
  get: function(n, r) {
    return mr(n).get_(r);
  },
  set: function(n, r, t) {
    var o;
    return lr(r) ? (o = mr(n).set_(r, t, !0)) != null ? o : !0 : !1;
  },
  deleteProperty: function(n, r) {
    var t;
    return lr(r) ? (t = mr(n).delete_(r, !0)) != null ? t : !0 : !1;
  },
  defineProperty: function(n, r, t) {
    var o;
    return (o = mr(n).defineProperty_(r, t)) != null ? o : !0;
  },
  ownKeys: function(n) {
    return mr(n).ownKeys_();
  },
  preventExtensions: function(n) {
    Y(13);
  }
};
function mh(e, n) {
  var r, t;
  return U_(), e = Gt(e, n), (t = (r = e[M]).proxy_) != null ? t : r.proxy_ = new Proxy(e, hh);
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
function ph(e, n, r) {
  var t = Gt(e, r)[M];
  Be();
  try {
    var o;
    (o = n) != null || (n = Yl(e)), Cr(n).forEach(function(i) {
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
    return hu(e, e, n, r);
  var t = Gt(e, r)[M];
  if (!e[fi]) {
    var o = Object.getPrototypeOf(e), i = new Set([].concat(Cr(e), Cr(o)));
    i.delete("constructor"), i.delete(M), ft(o, fi, i);
  }
  Be();
  try {
    e[fi].forEach(function(s) {
      return t.make_(
        s,
        // must pass "undefined" for { key: undefined }
        n && s in n ? n[s] : !0
      );
    });
  } finally {
    je();
  }
  return e;
}
var ca = "splice", hn = "update", fh = 1e4, Th = {
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
}, Os = /* @__PURE__ */ function() {
  function e(r, t, o, i) {
    r === void 0 && (r = "ObservableArray"), this.owned_ = void 0, this.legacyMode_ = void 0, this.atom_ = void 0, this.values_ = [], this.interceptors_ = void 0, this.changeListeners_ = void 0, this.enhancer_ = void 0, this.dehancer = void 0, this.proxy_ = void 0, this.lastKnownLength_ = 0, this.owned_ = o, this.legacyMode_ = i, this.atom_ = new Ot(r), this.enhancer_ = function(s, a) {
      return t(s, a, "ObservableArray[..]");
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
        for (var i = new Array(t - o), s = 0; s < t - o; s++)
          i[s] = void 0;
        this.spliceWithArray_(o, 0, i);
      } else
        this.spliceWithArray_(t, o - t);
  }, n.updateArrayLength_ = function(t, o) {
    t !== this.lastKnownLength_ && Y(16), this.lastKnownLength_ += o, this.legacyMode_ && o > 0 && Gu(t + o + 1);
  }, n.spliceWithArray_ = function(t, o, i) {
    var s = this;
    this.atom_;
    var a = this.values_.length;
    if (t === void 0 ? t = 0 : t > a ? t = a : t < 0 && (t = Math.max(0, a + t)), arguments.length === 1 ? o = a - t : o == null ? o = 0 : o = Math.max(0, Math.min(o, a - t)), i === void 0 && (i = wi), Ke(this)) {
      var _ = $e(this, {
        object: this.proxy_,
        type: ca,
        index: t,
        removedCount: o,
        added: i
      });
      if (!_)
        return wi;
      o = _.removedCount, i = _.added;
    }
    if (i = i.length === 0 ? i : i.map(function(c) {
      return s.enhancer_(c, void 0);
    }), this.legacyMode_) {
      var u = i.length - o;
      this.updateArrayLength_(a, u);
    }
    var l = this.spliceItemsIntoValues_(t, o, i);
    return (o !== 0 || i.length !== 0) && this.notifyArraySplice_(t, i, l), this.dehanceValues_(l);
  }, n.spliceItemsIntoValues_ = function(t, o, i) {
    if (i.length < fh) {
      var s;
      return (s = this.values_).splice.apply(s, [t, o].concat(i));
    } else {
      var a = this.values_.slice(t, t + o), _ = this.values_.slice(t + o);
      this.values_.length += i.length - o;
      for (var u = 0; u < i.length; u++)
        this.values_[t + u] = i[u];
      for (var l = 0; l < _.length; l++)
        this.values_[t + i.length + l] = _[l];
      return a;
    }
  }, n.notifyArrayChildUpdate_ = function(t, o, i) {
    var s = !this.owned_ && qr(), a = en(this), _ = a || s ? {
      observableKind: "array",
      object: this.proxy_,
      type: hn,
      debugObjectName: this.atom_.name_,
      index: t,
      newValue: o,
      oldValue: i
    } : null;
    this.atom_.reportChanged(), a && nn(this, _);
  }, n.notifyArraySplice_ = function(t, o, i) {
    var s = !this.owned_ && qr(), a = en(this), _ = a || s ? {
      observableKind: "array",
      object: this.proxy_,
      debugObjectName: this.atom_.name_,
      type: ca,
      index: t,
      removed: i,
      added: o,
      removedCount: i.length,
      addedCount: o.length
    } : null;
    this.atom_.reportChanged(), a && nn(this, _);
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
      var s = i[t];
      if (Ke(this)) {
        var a = $e(this, {
          type: hn,
          object: this.proxy_,
          index: t,
          newValue: o
        });
        if (!a)
          return;
        o = a.newValue;
      }
      o = this.enhancer_(o, s);
      var _ = o !== s;
      _ && (i[t] = o, this.notifyArrayChildUpdate_(t, o, s));
    } else {
      for (var u = new Array(t + 1 - i.length), l = 0; l < u.length - 1; l++)
        u[l] = void 0;
      u[u.length - 1] = o, this.spliceWithArray_(i.length, 0, u);
    }
  }, e;
}();
function Eh(e, n, r, t) {
  r === void 0 && (r = "ObservableArray"), t === void 0 && (t = !1), U_();
  var o = new Os(r, n, t, !1);
  P_(o.values_, M, o);
  var i = new Proxy(o.values_, Th);
  if (o.proxy_ = i, e && e.length) {
    var s = Nt(!0);
    o.spliceWithArray_(0, 0, e), bt(s);
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
    var s = this[M];
    switch (arguments.length) {
      case 0:
        return [];
      case 1:
        return s.spliceWithArray_(n);
      case 2:
        return s.spliceWithArray_(n, r);
    }
    return s.spliceWithArray_(n, r, o);
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
    return b.trackingDerivation && Y(37, "reverse"), this.replace(this.slice().reverse()), this;
  },
  sort: function() {
    b.trackingDerivation && Y(37, "sort");
    var n = this.slice();
    return n.sort.apply(n, arguments), this.replace(n), this;
  },
  remove: function(n) {
    var r = this[M], t = r.dehanceValues_(r.values_).indexOf(n);
    return t > -1 ? (this.splice(t, 1), !0) : !1;
  }
};
Re("concat", Pn);
Re("flat", Pn);
Re("includes", Pn);
Re("indexOf", Pn);
Re("join", Pn);
Re("lastIndexOf", Pn);
Re("slice", Pn);
Re("toString", Pn);
Re("toLocaleString", Pn);
Re("every", nr);
Re("filter", nr);
Re("find", nr);
Re("findIndex", nr);
Re("flatMap", nr);
Re("forEach", nr);
Re("map", nr);
Re("some", nr);
Re("reduce", Tu);
Re("reduceRight", Tu);
function Re(e, n) {
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
    return i[e](function(s, a) {
      return n.call(r, s, a, t);
    });
  };
}
function Tu(e) {
  return function() {
    var n = this, r = this[M];
    r.atom_.reportObserved();
    var t = r.dehanceValues_(r.values_), o = arguments[0];
    return arguments[0] = function(i, s, a) {
      return o(i, s, a, n);
    }, t[e].apply(t, arguments);
  };
}
var Oh = /* @__PURE__ */ Qn("ObservableArrayAdministration", Os);
function St(e) {
  return Fo(e) && Oh(e[M]);
}
var Eu, Ou, Rh = {}, Fn = "add", Ao = "delete";
Eu = Symbol.iterator;
Ou = Symbol.toStringTag;
var Ru = /* @__PURE__ */ function() {
  function e(r, t, o) {
    var i = this;
    t === void 0 && (t = Ur), o === void 0 && (o = "ObservableMap"), this.enhancer_ = void 0, this.name_ = void 0, this[M] = Rh, this.data_ = void 0, this.hasMap_ = void 0, this.keysAtom_ = void 0, this.interceptors_ = void 0, this.changeListeners_ = void 0, this.dehancer = void 0, this.enhancer_ = t, this.name_ = o, rn(Map) || Y(18), this.keysAtom_ = x_("ObservableMap.keys()"), this.data_ = /* @__PURE__ */ new Map(), this.hasMap_ = /* @__PURE__ */ new Map(), Pd(!0, function() {
      i.merge(r);
    });
  }
  var n = e.prototype;
  return n.has_ = function(t) {
    return this.data_.has(t);
  }, n.has = function(t) {
    var o = this;
    if (!b.trackingDerivation)
      return this.has_(t);
    var i = this.hasMap_.get(t);
    if (!i) {
      var s = i = new _r(this.has_(t), Vo, "ObservableMap.key?", !1);
      this.hasMap_.set(t, s), lu(s, function() {
        return o.hasMap_.delete(t);
      });
    }
    return i.get();
  }, n.set = function(t, o) {
    var i = this.has_(t);
    if (Ke(this)) {
      var s = $e(this, {
        type: i ? hn : Fn,
        object: this,
        newValue: o,
        name: t
      });
      if (!s)
        return this;
      o = s.newValue;
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
      var s = qr(), a = en(this), _ = a || s ? {
        observableKind: "map",
        debugObjectName: this.name_,
        type: Ao,
        object: this,
        oldValue: this.data_.get(t).value_,
        name: t
      } : null;
      return bn(function() {
        var u;
        o.keysAtom_.reportChanged(), (u = o.hasMap_.get(t)) == null || u.setNewValue_(!1);
        var l = o.data_.get(t);
        l.setNewValue_(void 0), o.data_.delete(t);
      }), a && nn(this, _), !0;
    }
    return !1;
  }, n.updateValue_ = function(t, o) {
    var i = this.data_.get(t);
    if (o = i.prepareNewValue_(o), o !== b.UNCHANGED) {
      var s = qr(), a = en(this), _ = a || s ? {
        observableKind: "map",
        debugObjectName: this.name_,
        type: hn,
        object: this,
        oldValue: i.value_,
        name: t,
        newValue: o
      } : null;
      i.setNewValue_(o), a && nn(this, _);
    }
  }, n.addValue_ = function(t, o) {
    var i = this;
    this.keysAtom_, bn(function() {
      var u, l = new _r(o, i.enhancer_, "ObservableMap.key", !1);
      i.data_.set(t, l), o = l.value_, (u = i.hasMap_.get(t)) == null || u.setNewValue_(!0), i.keysAtom_.reportChanged();
    });
    var s = qr(), a = en(this), _ = a || s ? {
      observableKind: "map",
      debugObjectName: this.name_,
      type: Fn,
      object: this,
      name: t,
      newValue: o
    } : null;
    a && nn(this, _);
  }, n.get = function(t) {
    return this.has(t) ? this.dehanceValue_(this.data_.get(t).get()) : this.dehanceValue_(void 0);
  }, n.dehanceValue_ = function(t) {
    return this.dehancer !== void 0 ? this.dehancer(t) : t;
  }, n.keys = function() {
    return this.keysAtom_.reportObserved(), this.data_.keys();
  }, n.values = function() {
    var t = this, o = this.keys();
    return st({
      next: function() {
        var s = o.next(), a = s.done, _ = s.value;
        return {
          done: a,
          value: a ? void 0 : t.get(_)
        };
      }
    });
  }, n.entries = function() {
    var t = this, o = this.keys();
    return st({
      next: function() {
        var s = o.next(), a = s.done, _ = s.value;
        return {
          done: a,
          value: a ? void 0 : [_, t.get(_)]
        };
      }
    });
  }, n[Eu] = function() {
    return this.entries();
  }, n.forEach = function(t, o) {
    for (var i = Or(this), s; !(s = i()).done; ) {
      var a = s.value, _ = a[0], u = a[1];
      t.call(o, u, _, this);
    }
  }, n.merge = function(t) {
    var o = this;
    return rr(t) && (t = new Map(t)), bn(function() {
      Dn(t) ? jl(t).forEach(function(i) {
        return o.set(i, t[i]);
      }) : Array.isArray(t) ? t.forEach(function(i) {
        var s = i[0], a = i[1];
        return o.set(s, a);
      }) : kr(t) ? (t.constructor !== Map && Y(19, t), t.forEach(function(i, s) {
        return o.set(s, i);
      })) : t != null && Y(20, t);
    }), this;
  }, n.clear = function() {
    var t = this;
    bn(function() {
      Z_(function() {
        for (var o = Or(t.keys()), i; !(i = o()).done; ) {
          var s = i.value;
          t.delete(s);
        }
      });
    });
  }, n.replace = function(t) {
    var o = this;
    return bn(function() {
      for (var i = Nh(t), s = /* @__PURE__ */ new Map(), a = !1, _ = Or(o.data_.keys()), u; !(u = _()).done; ) {
        var l = u.value;
        if (!i.has(l)) {
          var c = o.delete(l);
          if (c)
            a = !0;
          else {
            var E = o.data_.get(l);
            s.set(l, E);
          }
        }
      }
      for (var O = Or(i.entries()), d; !(d = O()).done; ) {
        var h = d.value, p = h[0], I = h[1], N = o.data_.has(p);
        if (o.set(p, I), o.data_.has(p)) {
          var C = o.data_.get(p);
          s.set(p, C), N || (a = !0);
        }
      }
      if (!a)
        if (o.data_.size !== s.size)
          o.keysAtom_.reportChanged();
        else
          for (var H = o.data_.keys(), f = s.keys(), w = H.next(), X = f.next(); !w.done; ) {
            if (w.value !== X.value) {
              o.keysAtom_.reportChanged();
              break;
            }
            w = H.next(), X = f.next();
          }
      o.data_ = s;
    }), this;
  }, n.toString = function() {
    return "[object ObservableMap]";
  }, n.toJSON = function() {
    return Array.from(this);
  }, n.observe_ = function(t, o) {
    return At(this, t);
  }, n.intercept_ = function(t) {
    return gt(this, t);
  }, hs(e, [{
    key: "size",
    get: function() {
      return this.keysAtom_.reportObserved(), this.data_.size;
    }
  }, {
    key: Ou,
    get: function() {
      return "Map";
    }
  }]), e;
}(), rr = /* @__PURE__ */ Qn("ObservableMap", Ru);
function Nh(e) {
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
var Nu, bu, bh = {};
Nu = Symbol.iterator;
bu = Symbol.toStringTag;
var Iu = /* @__PURE__ */ function() {
  function e(r, t, o) {
    t === void 0 && (t = Ur), o === void 0 && (o = "ObservableSet"), this.name_ = void 0, this[M] = bh, this.data_ = /* @__PURE__ */ new Set(), this.atom_ = void 0, this.changeListeners_ = void 0, this.interceptors_ = void 0, this.dehancer = void 0, this.enhancer_ = void 0, this.name_ = o, rn(Set) || Y(22), this.atom_ = x_(this.name_), this.enhancer_ = function(i, s) {
      return t(i, s, o);
    }, r && this.replace(r);
  }
  var n = e.prototype;
  return n.dehanceValue_ = function(t) {
    return this.dehancer !== void 0 ? this.dehancer(t) : t;
  }, n.clear = function() {
    var t = this;
    bn(function() {
      Z_(function() {
        for (var o = Or(t.data_.values()), i; !(i = o()).done; ) {
          var s = i.value;
          t.delete(s);
        }
      });
    });
  }, n.forEach = function(t, o) {
    for (var i = Or(this), s; !(s = i()).done; ) {
      var a = s.value;
      t.call(o, a, a, this);
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
      bn(function() {
        o.data_.add(o.enhancer_(t, void 0)), o.atom_.reportChanged();
      });
      var s = !1, a = en(this), _ = a || s ? {
        observableKind: "set",
        debugObjectName: this.name_,
        type: Fn,
        object: this,
        newValue: t
      } : null;
      a && nn(this, _);
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
      var s = !1, a = en(this), _ = a || s ? {
        observableKind: "set",
        debugObjectName: this.name_,
        type: Ao,
        object: this,
        oldValue: t
      } : null;
      return bn(function() {
        o.atom_.reportChanged(), o.data_.delete(t);
      }), a && nn(this, _), !0;
    }
    return !1;
  }, n.has = function(t) {
    return this.atom_.reportObserved(), this.data_.has(this.dehanceValue_(t));
  }, n.entries = function() {
    var t = 0, o = Array.from(this.keys()), i = Array.from(this.values());
    return st({
      next: function() {
        var a = t;
        return t += 1, a < i.length ? {
          value: [o[a], i[a]],
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
    return st({
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
    return dr(t) && (t = new Set(t)), bn(function() {
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
  }, n[Nu] = function() {
    return this.values();
  }, hs(e, [{
    key: "size",
    get: function() {
      return this.atom_.reportObserved(), this.data_.size;
    }
  }, {
    key: bu,
    get: function() {
      return "Set";
    }
  }]), e;
}(), dr = /* @__PURE__ */ Qn("ObservableSet", Iu), la = /* @__PURE__ */ Object.create(null), da = "remove", gu = /* @__PURE__ */ function() {
  function e(r, t, o, i) {
    t === void 0 && (t = /* @__PURE__ */ new Map()), i === void 0 && (i = md), this.target_ = void 0, this.values_ = void 0, this.name_ = void 0, this.defaultAnnotation_ = void 0, this.keysAtom_ = void 0, this.changeListeners_ = void 0, this.interceptors_ = void 0, this.proxy_ = void 0, this.isPlainObject_ = void 0, this.appliedAnnotations_ = void 0, this.pendingKeys_ = void 0, this.target_ = r, this.values_ = t, this.name_ = o, this.defaultAnnotation_ = i, this.keysAtom_ = new Ot("ObservableObject.keys"), this.isPlainObject_ = Dn(this.target_);
  }
  var n = e.prototype;
  return n.getObservablePropValue_ = function(t) {
    return this.values_.get(t).get();
  }, n.setObservablePropValue_ = function(t, o) {
    var i = this.values_.get(t);
    if (i instanceof rt)
      return i.set(o), !0;
    if (Ke(this)) {
      var s = $e(this, {
        type: hn,
        object: this.proxy_ || this.target_,
        name: t,
        newValue: o
      });
      if (!s)
        return null;
      o = s.newValue;
    }
    if (o = i.prepareNewValue_(o), o !== b.UNCHANGED) {
      var a = en(this), _ = !1, u = a || _ ? {
        type: hn,
        observableKind: "object",
        debugObjectName: this.name_,
        object: this.proxy_ || this.target_,
        oldValue: i.value_,
        name: t,
        newValue: o
      } : null;
      i.setNewValue_(o), a && nn(this, u);
    }
    return !0;
  }, n.get_ = function(t) {
    return b.trackingDerivation && !Sn(this.target_, t) && this.has_(t), this.target_[t];
  }, n.set_ = function(t, o, i) {
    return i === void 0 && (i = !1), Sn(this.target_, t) ? this.values_.has(t) ? this.setObservablePropValue_(t, o) : i ? Reflect.set(this.target_, t, o) : (this.target_[t] = o, !0) : this.extend_(t, {
      value: o,
      enumerable: !0,
      writable: !0,
      configurable: !0
    }, this.defaultAnnotation_, i);
  }, n.has_ = function(t) {
    if (!b.trackingDerivation)
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
      for (var s = this.target_; s && s !== pt; ) {
        var a = Eo(s, t);
        if (a) {
          var _ = o.make_(this, t, a, s);
          if (_ === 0)
            return;
          if (_ === 1)
            break;
        }
        s = Object.getPrototypeOf(s);
      }
      ma(this, o, t);
    }
  }, n.extend_ = function(t, o, i, s) {
    if (s === void 0 && (s = !1), i === !0 && (i = this.defaultAnnotation_), i === !1)
      return this.defineProperty_(t, o, s);
    var a = i.extend_(this, t, o, s);
    return a && ma(this, i, t), a;
  }, n.defineProperty_ = function(t, o, i) {
    i === void 0 && (i = !1);
    try {
      Be();
      var s = this.delete_(t);
      if (!s)
        return s;
      if (Ke(this)) {
        var a = $e(this, {
          object: this.proxy_ || this.target_,
          name: t,
          type: Fn,
          newValue: o.value
        });
        if (!a)
          return null;
        var _ = a.newValue;
        o.value !== _ && (o = Dr({}, o, {
          value: _
        }));
      }
      if (i) {
        if (!Reflect.defineProperty(this.target_, t, o))
          return !1;
      } else
        ln(this.target_, t, o);
      this.notifyPropertyAddition_(t, o.value);
    } finally {
      je();
    }
    return !0;
  }, n.defineObservableProperty_ = function(t, o, i, s) {
    s === void 0 && (s = !1);
    try {
      Be();
      var a = this.delete_(t);
      if (!a)
        return a;
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
      var u = ha(t), l = {
        configurable: b.safeDescriptors ? this.isPlainObject_ : !0,
        enumerable: !0,
        get: u.get,
        set: u.set
      };
      if (s) {
        if (!Reflect.defineProperty(this.target_, t, l))
          return !1;
      } else
        ln(this.target_, t, l);
      var c = new _r(o, i, "ObservableObject.key", !1);
      this.values_.set(t, c), this.notifyPropertyAddition_(t, c.value_);
    } finally {
      je();
    }
    return !0;
  }, n.defineComputedProperty_ = function(t, o, i) {
    i === void 0 && (i = !1);
    try {
      Be();
      var s = this.delete_(t);
      if (!s)
        return s;
      if (Ke(this)) {
        var a = $e(this, {
          object: this.proxy_ || this.target_,
          name: t,
          type: Fn,
          newValue: void 0
        });
        if (!a)
          return null;
      }
      o.name || (o.name = "ObservableObject.key"), o.context = this.proxy_ || this.target_;
      var _ = ha(t), u = {
        configurable: b.safeDescriptors ? this.isPlainObject_ : !0,
        enumerable: !1,
        get: _.get,
        set: _.set
      };
      if (i) {
        if (!Reflect.defineProperty(this.target_, t, u))
          return !1;
      } else
        ln(this.target_, t, u);
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
        type: da
      });
      if (!i)
        return null;
    }
    try {
      var s, a;
      Be();
      var _ = en(this), u = !1, l = this.values_.get(t), c = void 0;
      if (!l && (_ || u)) {
        var E;
        c = (E = Eo(this.target_, t)) == null ? void 0 : E.value;
      }
      if (o) {
        if (!Reflect.deleteProperty(this.target_, t))
          return !1;
      } else
        delete this.target_[t];
      if (l && (this.values_.delete(t), l instanceof _r && (c = l.value_), ou(l)), this.keysAtom_.reportChanged(), (s = this.pendingKeys_) == null || (a = s.get(t)) == null || a.set(t in this.target_), _ || u) {
        var O = {
          type: da,
          observableKind: "object",
          object: this.proxy_ || this.target_,
          debugObjectName: this.name_,
          oldValue: c,
          name: t
        };
        _ && nn(this, O);
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
    var i, s, a = en(this), _ = !1;
    if (a || _) {
      var u = a || _ ? {
        type: Fn,
        observableKind: "object",
        debugObjectName: this.name_,
        object: this.proxy_ || this.target_,
        name: t,
        newValue: o
      } : null;
      a && nn(this, u);
    }
    (i = this.pendingKeys_) == null || (s = i.get(t)) == null || s.set(!0), this.keysAtom_.reportChanged();
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
var Ih = /* @__PURE__ */ Qn("ObservableObjectAdministration", gu);
function ha(e) {
  return la[e] || (la[e] = {
    get: function() {
      return this[M].getObservablePropValue_(e);
    },
    set: function(r) {
      return this[M].setObservablePropValue_(e, r);
    }
  });
}
function yr(e) {
  return Fo(e) ? Ih(e[M]) : !1;
}
function ma(e, n, r) {
  var t;
  (t = e.target_[un]) == null || delete t[r];
}
var gh = /* @__PURE__ */ Su(0), Ti = 0, Au = function() {
};
function Ah(e, n) {
  Object.setPrototypeOf ? Object.setPrototypeOf(e.prototype, n) : e.prototype.__proto__ !== void 0 ? e.prototype.__proto__ = n : e.prototype = n;
}
Ah(Au, Array.prototype);
var Rs = /* @__PURE__ */ function(e, n, r) {
  k_(t, e);
  function t(i, s, a, _) {
    var u;
    a === void 0 && (a = "ObservableArray"), _ === void 0 && (_ = !1), u = e.call(this) || this;
    var l = new Os(a, s, _, !0);
    if (l.proxy_ = pi(u), P_(pi(u), M, l), i && i.length) {
      var c = Nt(!0);
      u.spliceWithArray(0, 0, i), bt(c);
    }
    return Object.defineProperty(pi(u), "0", gh), u;
  }
  var o = t.prototype;
  return o.concat = function() {
    this[M].atom_.reportObserved();
    for (var s = arguments.length, a = new Array(s), _ = 0; _ < s; _++)
      a[_] = arguments[_];
    return Array.prototype.concat.apply(
      this.slice(),
      //@ts-ignore
      a.map(function(u) {
        return St(u) ? u.slice() : u;
      })
    );
  }, o[r] = function() {
    var i = this, s = 0;
    return st({
      next: function() {
        return s < i.length ? {
          value: i[s++],
          done: !1
        } : {
          done: !0,
          value: void 0
        };
      }
    });
  }, hs(t, [{
    key: "length",
    get: function() {
      return this[M].getArrayLength_();
    },
    set: function(s) {
      this[M].setArrayLength_(s);
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
  n !== "concat" && ft(Rs.prototype, n, r);
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
function Sh(e) {
  ln(Rs.prototype, "" + e, Su(e));
}
function Gu(e) {
  if (e > Ti) {
    for (var n = Ti; n < e + 100; n++)
      Sh(n);
    Ti = e;
  }
}
Gu(1e3);
function Gh(e, n, r) {
  return new Rs(e, n, r);
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
    if (ms(e) || It(e) || bo(e))
      return e;
  } else if (rn(e) && bo(e[M]))
    return e[M];
  Y(28);
}
function vu(e, n) {
  if (e || Y(29), n !== void 0)
    return vu(Zn(e, n));
  if (ms(e) || It(e) || bo(e) || rr(e) || dr(e))
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
    if (Ts(e))
      return e.name;
    yr(e) || rr(e) || dr(e) ? r = vu(e) : r = Zn(e);
  }
  return r.name_;
}
var pa = pt.toString;
function Ns(e, n, r) {
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
  var s = pa.call(e);
  if (s !== pa.call(n))
    return !1;
  switch (s) {
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
  e = fa(e), n = fa(n);
  var a = s === "[object Array]";
  if (!a) {
    if (typeof e != "object" || typeof n != "object")
      return !1;
    var _ = e.constructor, u = n.constructor;
    if (_ !== u && !(rn(_) && _ instanceof _ && rn(u) && u instanceof u) && "constructor" in e && "constructor" in n)
      return !1;
  }
  if (r === 0)
    return !1;
  r < 0 && (r = -1), t = t || [], o = o || [];
  for (var l = t.length; l--; )
    if (t[l] === e)
      return o[l] === n;
  if (t.push(e), o.push(n), a) {
    if (l = e.length, l !== n.length)
      return !1;
    for (; l--; )
      if (!ji(e[l], n[l], r - 1, t, o))
        return !1;
  } else {
    var c = Object.keys(e), E;
    if (l = c.length, Object.keys(n).length !== l)
      return !1;
    for (; l--; )
      if (E = c[l], !(Sn(n, E) && ji(e[E], n[E], r - 1, t, o)))
        return !1;
  }
  return t.pop(), o.pop(), !0;
}
function fa(e) {
  return St(e) ? e.slice() : kr(e) || rr(e) || Tt(e) || dr(e) ? Array.from(e.entries()) : e;
}
function st(e) {
  return e[Symbol.iterator] = vh, e;
}
function vh() {
  return this;
}
["Symbol", "Map", "Set"].forEach(function(e) {
  var n = ds();
  typeof n[e] > "u" && Y("MobX requires global '" + e + "' to be available or polyfilled");
});
typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ == "object" && __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
  spy: Wd,
  extras: {
    getDebugName: Bi
  },
  $mobx: M
});
function Ch(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Dh(e) {
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
function Uh(e) {
  Cu = e;
}
function tn(e) {
  return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]";
}
function cr(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Object]";
}
function q(e, n) {
  return Object.prototype.hasOwnProperty.call(e, n);
}
function bs(e) {
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
  return ec(e, n, r, t, !0).utc();
}
function Hh() {
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
  return e._pf == null && (e._pf = Hh()), e._pf;
}
var Fi;
Array.prototype.some ? Fi = Array.prototype.some : Fi = function(e) {
  var n = Object(this), r = n.length >>> 0, t;
  for (t = 0; t < r; t++)
    if (t in n && e.call(this, n[t], t, n))
      return !0;
  return !1;
};
function Is(e) {
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
var Ta = A.momentProperties = [], Ei = !1;
function gs(e, n) {
  var r, t, o, i = Ta.length;
  if (Le(n._isAMomentObject) || (e._isAMomentObject = n._isAMomentObject), Le(n._i) || (e._i = n._i), Le(n._f) || (e._f = n._f), Le(n._l) || (e._l = n._l), Le(n._strict) || (e._strict = n._strict), Le(n._tzm) || (e._tzm = n._tzm), Le(n._isUTC) || (e._isUTC = n._isUTC), Le(n._offset) || (e._offset = n._offset), Le(n._pf) || (e._pf = j(n)), Le(n._locale) || (e._locale = n._locale), i > 0)
    for (r = 0; r < i; r++)
      t = Ta[r], o = n[t], Le(o) || (e[t] = o);
  return e;
}
function Ct(e) {
  gs(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = /* @__PURE__ */ new Date(NaN)), Ei === !1 && (Ei = !0, A.updateOffset(this), Ei = !1);
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
      var t = [], o, i, s, a = arguments.length;
      for (i = 0; i < a; i++) {
        if (o = "", typeof arguments[i] == "object") {
          o += `
[` + i + "] ";
          for (s in arguments[0])
            q(arguments[0], s) && (o += s + ": " + arguments[0][s] + ", ");
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
var Ea = {};
function Hu(e, n) {
  A.deprecationHandler != null && A.deprecationHandler(e, n), Ea[e] || (Uu(n), Ea[e] = !0);
}
A.suppressDeprecationWarnings = !1;
A.deprecationHandler = null;
function fn(e) {
  return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
}
function yh(e) {
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
    q(n, t) && (cr(e[t]) && cr(n[t]) ? (r[t] = {}, Vn(r[t], e[t]), Vn(r[t], n[t])) : n[t] != null ? r[t] = n[t] : delete r[t]);
  for (t in e)
    q(e, t) && !q(n, t) && cr(e[t]) && (r[t] = Vn({}, r[t]));
  return r;
}
function As(e) {
  e != null && this.set(e);
}
var Wi;
Object.keys ? Wi = Object.keys : Wi = function(e) {
  var n, r = [];
  for (n in e)
    q(e, n) && r.push(n);
  return r;
};
var Ph = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function wh(e, n, r) {
  var t = this._calendar[e] || this._calendar.sameElse;
  return fn(t) ? t.call(n, r) : t;
}
function mn(e, n, r) {
  var t = "" + Math.abs(e), o = n - t.length, i = e >= 0;
  return (i ? r ? "+" : "" : "-") + Math.pow(10, Math.max(0, o)).toString().substr(1) + t;
}
var Ss = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, Xt = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, Oi = {}, gr = {};
function y(e, n, r, t) {
  var o = t;
  typeof t == "string" && (o = function() {
    return this[t]();
  }), e && (gr[e] = o), n && (gr[n[0]] = function() {
    return mn(o.apply(this, arguments), n[1], n[2]);
  }), r && (gr[r] = function() {
    return this.localeData().ordinal(
      o.apply(this, arguments),
      e
    );
  });
}
function Mh(e) {
  return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
}
function kh(e) {
  var n = e.match(Ss), r, t;
  for (r = 0, t = n.length; r < t; r++)
    gr[n[r]] ? n[r] = gr[n[r]] : n[r] = Mh(n[r]);
  return function(o) {
    var i = "", s;
    for (s = 0; s < t; s++)
      i += fn(n[s]) ? n[s].call(o, e) : n[s];
    return i;
  };
}
function to(e, n) {
  return e.isValid() ? (n = yu(n, e.localeData()), Oi[n] = Oi[n] || kh(n), Oi[n](e)) : e.localeData().invalidDate();
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
var xh = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function Lh(e) {
  var n = this._longDateFormat[e], r = this._longDateFormat[e.toUpperCase()];
  return n || !r ? n : (this._longDateFormat[e] = r.match(Ss).map(function(t) {
    return t === "MMMM" || t === "MM" || t === "DD" || t === "dddd" ? t.slice(1) : t;
  }).join(""), this._longDateFormat[e]);
}
var Bh = "Invalid date";
function jh() {
  return this._invalidDate;
}
var Fh = "%d", Vh = /\d{1,2}/;
function Wh(e) {
  return this._ordinal.replace("%d", e);
}
var Xh = {
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
function Yh(e, n, r, t) {
  var o = this._relativeTime[r];
  return fn(o) ? o(e, n, r, t) : o.replace(/%d/i, e);
}
function Kh(e, n) {
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
function Gs(e) {
  var n = {}, r, t;
  for (t in e)
    q(e, t) && (r = qe(t), r && (n[r] = e[t]));
  return n;
}
var Pu = {};
function Me(e, n) {
  Pu[e] = n;
}
function $h(e) {
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
function zh(e) {
  return e = qe(e), fn(this[e]) ? this[e]() : this;
}
function Jh(e, n) {
  if (typeof e == "object") {
    e = Gs(e);
    var r = $h(e), t, o = r.length;
    for (t = 0; t < o; t++)
      this[r[t].unit](e[r[t].unit]);
  } else if (e = qe(e), fn(this[e]))
    return this[e](n);
  return this;
}
var Mu = /\d/, Xe = /\d\d/, ku = /\d{3}/, vs = /\d{4}/, $o = /[+-]?\d{6}/, _e = /\d\d?/, xu = /\d\d\d\d?/, Lu = /\d\d\d\d\d\d?/, zo = /\d{1,3}/, Cs = /\d{1,4}/, Jo = /[+-]?\d{1,6}/, Br = /\d+/, qo = /[+-]?\d+/, qh = /Z|[+-]\d\d:?\d\d/gi, Zo = /Z|[+-]\d\d(?::?\d\d)?/gi, Zh = /[+-]?\d+(\.\d{1,3})?/, Dt = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, Go;
Go = {};
function G(e, n, r) {
  Go[e] = fn(n) ? n : function(t, o) {
    return t && r ? r : n;
  };
}
function Qh(e, n) {
  return q(Go, e) ? Go[e](n._strict, n._locale) : new RegExp(em(e));
}
function em(e) {
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
  for (typeof e == "string" && (e = [e]), Un(n) && (t = function(i, s) {
    s[n] = W(i);
  }), o = e.length, r = 0; r < o; r++)
    Xi[e[r]] = t;
}
function Ut(e, n) {
  ie(e, function(r, t, o, i) {
    o._w = o._w || {}, n(r, o._w, o, i);
  });
}
function nm(e, n, r) {
  n != null && q(Xi, e) && Xi[e](n, r._a, r, e);
}
var Pe = 0, In = 1, _n = 2, Ee = 3, Qe = 4, gn = 5, ar = 6, rm = 7, tm = 8;
function om(e, n) {
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
  var r = om(n, 12);
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
var im = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), Bu = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), ju = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, sm = Dt, am = Dt;
function _m(e, n) {
  return e ? tn(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || ju).test(n) ? "format" : "standalone"][e.month()] : tn(this._months) ? this._months : this._months.standalone;
}
function um(e, n) {
  return e ? tn(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[ju.test(n) ? "format" : "standalone"][e.month()] : tn(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function cm(e, n, r) {
  var t, o, i, s = e.toLocaleLowerCase();
  if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], t = 0; t < 12; ++t)
      i = pn([2e3, t]), this._shortMonthsParse[t] = this.monthsShort(
        i,
        ""
      ).toLocaleLowerCase(), this._longMonthsParse[t] = this.months(i, "").toLocaleLowerCase();
  return r ? n === "MMM" ? (o = Te.call(this._shortMonthsParse, s), o !== -1 ? o : null) : (o = Te.call(this._longMonthsParse, s), o !== -1 ? o : null) : n === "MMM" ? (o = Te.call(this._shortMonthsParse, s), o !== -1 ? o : (o = Te.call(this._longMonthsParse, s), o !== -1 ? o : null)) : (o = Te.call(this._longMonthsParse, s), o !== -1 ? o : (o = Te.call(this._shortMonthsParse, s), o !== -1 ? o : null));
}
function lm(e, n, r) {
  var t, o, i;
  if (this._monthsParseExact)
    return cm.call(this, e, n, r);
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
function dm() {
  return Qo(this.year(), this.month());
}
function hm(e) {
  return this._monthsParseExact ? (q(this, "_monthsRegex") || Wu.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (q(this, "_monthsShortRegex") || (this._monthsShortRegex = sm), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function mm(e) {
  return this._monthsParseExact ? (q(this, "_monthsRegex") || Wu.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (q(this, "_monthsRegex") || (this._monthsRegex = am), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
}
function Wu() {
  function e(s, a) {
    return a.length - s.length;
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
  return e <= 9999 ? mn(e, 4) : "+" + e;
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
G("YYYY", Cs, vs);
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
function pm() {
  return Ko(this.year());
}
function fm(e, n, r, t, o, i, s) {
  var a;
  return e < 100 && e >= 0 ? (a = new Date(e + 400, n, r, t, o, i, s), isFinite(a.getFullYear()) && a.setFullYear(e)) : a = new Date(e, n, r, t, o, i, s), a;
}
function at(e) {
  var n, r;
  return e < 100 && e >= 0 ? (r = Array.prototype.slice.call(arguments), r[0] = e + 400, n = new Date(Date.UTC.apply(null, r)), isFinite(n.getUTCFullYear()) && n.setUTCFullYear(e)) : n = new Date(Date.UTC.apply(null, arguments)), n;
}
function vo(e, n, r) {
  var t = 7 + n - r, o = (7 + at(e, 0, t).getUTCDay() - n) % 7;
  return -o + t - 1;
}
function Yu(e, n, r, t, o) {
  var i = (7 + r - t) % 7, s = vo(e, t, o), a = 1 + 7 * (n - 1) + i + s, _, u;
  return a <= 0 ? (_ = e - 1, u = Qr(_) + a) : a > Qr(e) ? (_ = e + 1, u = a - Qr(e)) : (_ = e, u = a), {
    year: _,
    dayOfYear: u
  };
}
function _t(e, n, r) {
  var t = vo(e.year(), n, r), o = Math.floor((e.dayOfYear() - t - 1) / 7) + 1, i, s;
  return o < 1 ? (s = e.year() - 1, i = o + Gn(s, n, r)) : o > Gn(e.year(), n, r) ? (i = o - Gn(e.year(), n, r), s = e.year() + 1) : (s = e.year(), i = o), {
    week: i,
    year: s
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
function Tm(e) {
  return _t(e, this._week.dow, this._week.doy).week;
}
var Em = {
  dow: 0,
  // Sunday is the first day of the week.
  doy: 6
  // The week that contains Jan 6th is the first week of the year.
};
function Om() {
  return this._week.dow;
}
function Rm() {
  return this._week.doy;
}
function Nm(e) {
  var n = this.localeData().week(this);
  return e == null ? n : this.add((e - n) * 7, "d");
}
function bm(e) {
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
function Im(e, n) {
  return typeof e != "string" ? e : isNaN(e) ? (e = n.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10);
}
function gm(e, n) {
  return typeof e == "string" ? n.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
}
function Ds(e, n) {
  return e.slice(n, 7).concat(e.slice(0, n));
}
var Am = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), Ku = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), Sm = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), Gm = Dt, vm = Dt, Cm = Dt;
function Dm(e, n) {
  var r = tn(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(n) ? "format" : "standalone"];
  return e === !0 ? Ds(r, this._week.dow) : e ? r[e.day()] : r;
}
function Um(e) {
  return e === !0 ? Ds(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
}
function Hm(e) {
  return e === !0 ? Ds(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
}
function ym(e, n, r) {
  var t, o, i, s = e.toLocaleLowerCase();
  if (!this._weekdaysParse)
    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], t = 0; t < 7; ++t)
      i = pn([2e3, 1]).day(t), this._minWeekdaysParse[t] = this.weekdaysMin(
        i,
        ""
      ).toLocaleLowerCase(), this._shortWeekdaysParse[t] = this.weekdaysShort(
        i,
        ""
      ).toLocaleLowerCase(), this._weekdaysParse[t] = this.weekdays(i, "").toLocaleLowerCase();
  return r ? n === "dddd" ? (o = Te.call(this._weekdaysParse, s), o !== -1 ? o : null) : n === "ddd" ? (o = Te.call(this._shortWeekdaysParse, s), o !== -1 ? o : null) : (o = Te.call(this._minWeekdaysParse, s), o !== -1 ? o : null) : n === "dddd" ? (o = Te.call(this._weekdaysParse, s), o !== -1 || (o = Te.call(this._shortWeekdaysParse, s), o !== -1) ? o : (o = Te.call(this._minWeekdaysParse, s), o !== -1 ? o : null)) : n === "ddd" ? (o = Te.call(this._shortWeekdaysParse, s), o !== -1 || (o = Te.call(this._weekdaysParse, s), o !== -1) ? o : (o = Te.call(this._minWeekdaysParse, s), o !== -1 ? o : null)) : (o = Te.call(this._minWeekdaysParse, s), o !== -1 || (o = Te.call(this._weekdaysParse, s), o !== -1) ? o : (o = Te.call(this._shortWeekdaysParse, s), o !== -1 ? o : null));
}
function Pm(e, n, r) {
  var t, o, i;
  if (this._weekdaysParseExact)
    return ym.call(this, e, n, r);
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
function wm(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var n = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
  return e != null ? (e = Im(e, this.localeData()), this.add(e - n, "d")) : n;
}
function Mm(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var n = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return e == null ? n : this.add(e - n, "d");
}
function km(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    var n = gm(e, this.localeData());
    return this.day(this.day() % 7 ? n : n - 7);
  } else
    return this.day() || 7;
}
function xm(e) {
  return this._weekdaysParseExact ? (q(this, "_weekdaysRegex") || Us.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (q(this, "_weekdaysRegex") || (this._weekdaysRegex = Gm), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function Lm(e) {
  return this._weekdaysParseExact ? (q(this, "_weekdaysRegex") || Us.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (q(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = vm), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function Bm(e) {
  return this._weekdaysParseExact ? (q(this, "_weekdaysRegex") || Us.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (q(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Cm), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function Us() {
  function e(l, c) {
    return c.length - l.length;
  }
  var n = [], r = [], t = [], o = [], i, s, a, _, u;
  for (i = 0; i < 7; i++)
    s = pn([2e3, 1]).day(i), a = We(this.weekdaysMin(s, "")), _ = We(this.weekdaysShort(s, "")), u = We(this.weekdays(s, "")), n.push(a), r.push(_), t.push(u), o.push(a), o.push(_), o.push(u);
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
function Hs() {
  return this.hours() % 12 || 12;
}
function jm() {
  return this.hours() || 24;
}
y("H", ["HH", 2], 0, "hour");
y("h", ["hh", 2], 0, Hs);
y("k", ["kk", 2], 0, jm);
y("hmm", 0, 0, function() {
  return "" + Hs.apply(this) + mn(this.minutes(), 2);
});
y("hmmss", 0, 0, function() {
  return "" + Hs.apply(this) + mn(this.minutes(), 2) + mn(this.seconds(), 2);
});
y("Hmm", 0, 0, function() {
  return "" + this.hours() + mn(this.minutes(), 2);
});
y("Hmmss", 0, 0, function() {
  return "" + this.hours() + mn(this.minutes(), 2) + mn(this.seconds(), 2);
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
function Fm(e) {
  return (e + "").toLowerCase().charAt(0) === "p";
}
var Vm = /[ap]\.?m?\.?/i, Wm = Lr("Hours", !0);
function Xm(e, n, r) {
  return e > 11 ? r ? "pm" : "PM" : r ? "am" : "AM";
}
var Ju = {
  calendar: Ph,
  longDateFormat: xh,
  invalidDate: Bh,
  ordinal: Fh,
  dayOfMonthOrdinalParse: Vh,
  relativeTime: Xh,
  months: im,
  monthsShort: Bu,
  week: Em,
  weekdays: Am,
  weekdaysMin: Sm,
  weekdaysShort: Ku,
  meridiemParse: Vm
}, ue = {}, Yr = {}, ut;
function Ym(e, n) {
  var r, t = Math.min(e.length, n.length);
  for (r = 0; r < t; r += 1)
    if (e[r] !== n[r])
      return r;
  return t;
}
function Oa(e) {
  return e && e.toLowerCase().replace("_", "-");
}
function Km(e) {
  for (var n = 0, r, t, o, i; n < e.length; ) {
    for (i = Oa(e[n]).split("-"), r = i.length, t = Oa(e[n + 1]), t = t ? t.split("-") : null; r > 0; ) {
      if (o = ei(i.slice(0, r).join("-")), o)
        return o;
      if (t && t.length >= r && Ym(i, t) >= r - 1)
        break;
      r--;
    }
    n++;
  }
  return ut;
}
function $m(e) {
  return e.match("^[^/\\\\]*$") != null;
}
function ei(e) {
  var n = null, r;
  if (ue[e] === void 0 && typeof module < "u" && module && module.exports && $m(e))
    try {
      n = ut._abbr, r = Dh, r("./locale/" + e), Kn(n);
    } catch {
      ue[e] = null;
    }
  return ue[e];
}
function Kn(e, n) {
  var r;
  return e && (Le(n) ? r = wn(e) : r = ys(e, n), r ? ut = r : typeof console < "u" && console.warn && console.warn(
    "Locale " + e + " not found. Did you forget to load it?"
  )), ut._abbr;
}
function ys(e, n) {
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
    return ue[e] = new As(Vi(t, n)), Yr[e] && Yr[e].forEach(function(o) {
      ys(o.name, o.config);
    }), Kn(e), ue[e];
  } else
    return delete ue[e], null;
}
function zm(e, n) {
  if (n != null) {
    var r, t, o = Ju;
    ue[e] != null && ue[e].parentLocale != null ? ue[e].set(Vi(ue[e]._config, n)) : (t = ei(e), t != null && (o = t._config), n = Vi(o, n), t == null && (n.abbr = e), r = new As(n), r.parentLocale = ue[e], ue[e] = r), Kn(e);
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
  return Km(e);
}
function Jm() {
  return Wi(ue);
}
function Ps(e) {
  var n, r = e._a;
  return r && j(e).overflow === -2 && (n = r[In] < 0 || r[In] > 11 ? In : r[_n] < 1 || r[_n] > Qo(r[Pe], r[In]) ? _n : r[Ee] < 0 || r[Ee] > 24 || r[Ee] === 24 && (r[Qe] !== 0 || r[gn] !== 0 || r[ar] !== 0) ? Ee : r[Qe] < 0 || r[Qe] > 59 ? Qe : r[gn] < 0 || r[gn] > 59 ? gn : r[ar] < 0 || r[ar] > 999 ? ar : -1, j(e)._overflowDayOfYear && (n < Pe || n > _n) && (n = _n), j(e)._overflowWeeks && n === -1 && (n = rm), j(e)._overflowWeekday && n === -1 && (n = tm), j(e).overflow = n), e;
}
var qm = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Zm = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Qm = /Z|[+-]\d\d(?::?\d\d)?/, Yt = [
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
], Ri = [
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
  var n, r, t = e._i, o = qm.exec(t) || Zm.exec(t), i, s, a, _, u = Yt.length, l = Ri.length;
  if (o) {
    for (j(e).iso = !0, n = 0, r = u; n < r; n++)
      if (Yt[n][1].exec(o[1])) {
        s = Yt[n][0], i = Yt[n][2] !== !1;
        break;
      }
    if (s == null) {
      e._isValid = !1;
      return;
    }
    if (o[3]) {
      for (n = 0, r = l; n < r; n++)
        if (Ri[n][1].exec(o[3])) {
          a = (o[2] || " ") + Ri[n][0];
          break;
        }
      if (a == null) {
        e._isValid = !1;
        return;
      }
    }
    if (!i && a != null) {
      e._isValid = !1;
      return;
    }
    if (o[4])
      if (Qm.exec(o[4]))
        _ = "Z";
      else {
        e._isValid = !1;
        return;
      }
    e._f = s + (a || "") + (_ || ""), Ms(e);
  } else
    e._isValid = !1;
}
function tp(e, n, r, t, o, i) {
  var s = [
    op(e),
    Bu.indexOf(n),
    parseInt(r, 10),
    parseInt(t, 10),
    parseInt(o, 10)
  ];
  return i && s.push(parseInt(i, 10)), s;
}
function op(e) {
  var n = parseInt(e, 10);
  return n <= 49 ? 2e3 + n : n <= 999 ? 1900 + n : n;
}
function ip(e) {
  return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function sp(e, n, r) {
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
function ap(e, n, r) {
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
    ), !sp(n[1], r, e))
      return;
    e._a = r, e._tzm = ap(n[8], n[9], n[10]), e._d = at.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), j(e).rfc2822 = !0;
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
function ws(e) {
  var n, r, t = [], o, i, s;
  if (!e._d) {
    for (o = up(e), e._w && e._a[_n] == null && e._a[In] == null && cp(e), e._dayOfYear != null && (s = Tr(e._a[Pe], o[Pe]), (e._dayOfYear > Qr(s) || e._dayOfYear === 0) && (j(e)._overflowDayOfYear = !0), r = at(s, 0, e._dayOfYear), e._a[In] = r.getUTCMonth(), e._a[_n] = r.getUTCDate()), n = 0; n < 3 && e._a[n] == null; ++n)
      e._a[n] = t[n] = o[n];
    for (; n < 7; n++)
      e._a[n] = t[n] = e._a[n] == null ? n === 2 ? 1 : 0 : e._a[n];
    e._a[Ee] === 24 && e._a[Qe] === 0 && e._a[gn] === 0 && e._a[ar] === 0 && (e._nextDay = !0, e._a[Ee] = 0), e._d = (e._useUTC ? at : fm).apply(
      null,
      t
    ), i = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[Ee] = 24), e._w && typeof e._w.d < "u" && e._w.d !== i && (j(e).weekdayMismatch = !0);
  }
}
function cp(e) {
  var n, r, t, o, i, s, a, _, u;
  n = e._w, n.GG != null || n.W != null || n.E != null ? (i = 1, s = 4, r = Tr(
    n.GG,
    e._a[Pe],
    _t(ae(), 1, 4).year
  ), t = Tr(n.W, 1), o = Tr(n.E, 1), (o < 1 || o > 7) && (_ = !0)) : (i = e._locale._week.dow, s = e._locale._week.doy, u = _t(ae(), i, s), r = Tr(n.gg, e._a[Pe], u.year), t = Tr(n.w, u.week), n.d != null ? (o = n.d, (o < 0 || o > 6) && (_ = !0)) : n.e != null ? (o = n.e + i, (n.e < 0 || n.e > 6) && (_ = !0)) : o = i), t < 1 || t > Gn(r, i, s) ? j(e)._overflowWeeks = !0 : _ != null ? j(e)._overflowWeekday = !0 : (a = Yu(r, t, o, i, s), e._a[Pe] = a.year, e._dayOfYear = a.dayOfYear);
}
A.ISO_8601 = function() {
};
A.RFC_2822 = function() {
};
function Ms(e) {
  if (e._f === A.ISO_8601) {
    qu(e);
    return;
  }
  if (e._f === A.RFC_2822) {
    Zu(e);
    return;
  }
  e._a = [], j(e).empty = !0;
  var n = "" + e._i, r, t, o, i, s, a = n.length, _ = 0, u, l;
  for (o = yu(e._f, e._locale).match(Ss) || [], l = o.length, r = 0; r < l; r++)
    i = o[r], t = (n.match(Qh(i, e)) || [])[0], t && (s = n.substr(0, n.indexOf(t)), s.length > 0 && j(e).unusedInput.push(s), n = n.slice(
      n.indexOf(t) + t.length
    ), _ += t.length), gr[i] ? (t ? j(e).empty = !1 : j(e).unusedTokens.push(i), nm(i, t, e)) : e._strict && !t && j(e).unusedTokens.push(i);
  j(e).charsLeftOver = a - _, n.length > 0 && j(e).unusedInput.push(n), e._a[Ee] <= 12 && j(e).bigHour === !0 && e._a[Ee] > 0 && (j(e).bigHour = void 0), j(e).parsedDateParts = e._a.slice(0), j(e).meridiem = e._meridiem, e._a[Ee] = lp(
    e._locale,
    e._a[Ee],
    e._meridiem
  ), u = j(e).era, u !== null && (e._a[Pe] = e._locale.erasConvertYear(u, e._a[Pe])), ws(e), Ps(e);
}
function lp(e, n, r) {
  var t;
  return r == null ? n : e.meridiemHour != null ? e.meridiemHour(n, r) : (e.isPM != null && (t = e.isPM(r), t && n < 12 && (n += 12), !t && n === 12 && (n = 0)), n);
}
function dp(e) {
  var n, r, t, o, i, s, a = !1, _ = e._f.length;
  if (_ === 0) {
    j(e).invalidFormat = !0, e._d = /* @__PURE__ */ new Date(NaN);
    return;
  }
  for (o = 0; o < _; o++)
    i = 0, s = !1, n = gs({}, e), e._useUTC != null && (n._useUTC = e._useUTC), n._f = e._f[o], Ms(n), Is(n) && (s = !0), i += j(n).charsLeftOver, i += j(n).unusedTokens.length * 10, j(n).score = i, a ? i < t && (t = i, r = n) : (t == null || i < t || s) && (t = i, r = n, s && (a = !0));
  Vn(e, r || n);
}
function hp(e) {
  if (!e._d) {
    var n = Gs(e._i), r = n.day === void 0 ? n.date : n.day;
    e._a = Du(
      [n.year, n.month, r, n.hour, n.minute, n.second, n.millisecond],
      function(t) {
        return t && parseInt(t, 10);
      }
    ), ws(e);
  }
}
function mp(e) {
  var n = new Ct(Ps(Qu(e)));
  return n._nextDay && (n.add(1, "d"), n._nextDay = void 0), n;
}
function Qu(e) {
  var n = e._i, r = e._f;
  return e._locale = e._locale || wn(e._l), n === null || r === void 0 && n === "" ? Yo({ nullInput: !0 }) : (typeof n == "string" && (e._i = n = e._locale.preparse(n)), on(n) ? new Ct(Ps(n)) : (vt(n) ? e._d = n : tn(r) ? dp(e) : r ? Ms(e) : pp(e), Is(e) || (e._d = null), e));
}
function pp(e) {
  var n = e._i;
  Le(n) ? e._d = new Date(A.now()) : vt(n) ? e._d = new Date(n.valueOf()) : typeof n == "string" ? _p(e) : tn(n) ? (e._a = Du(n.slice(0), function(r) {
    return parseInt(r, 10);
  }), ws(e)) : cr(n) ? hp(e) : Un(n) ? e._d = new Date(n) : A.createFromInputFallback(e);
}
function ec(e, n, r, t, o) {
  var i = {};
  return (n === !0 || n === !1) && (t = n, n = void 0), (r === !0 || r === !1) && (t = r, r = void 0), (cr(e) && bs(e) || tn(e) && e.length === 0) && (e = void 0), i._isAMomentObject = !0, i._useUTC = i._isUTC = o, i._l = r, i._i = e, i._f = n, i._strict = t, mp(i);
}
function ae(e, n, r, t) {
  return ec(e, n, r, t, !1);
}
var fp = Je(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = ae.apply(null, arguments);
    return this.isValid() && e.isValid() ? e < this ? this : e : Yo();
  }
), Tp = Je(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = ae.apply(null, arguments);
    return this.isValid() && e.isValid() ? e > this ? this : e : Yo();
  }
);
function nc(e, n) {
  var r, t;
  if (n.length === 1 && tn(n[0]) && (n = n[0]), !n.length)
    return ae();
  for (r = n[0], t = 1; t < n.length; ++t)
    (!n[t].isValid() || n[t][e](r)) && (r = n[t]);
  return r;
}
function Ep() {
  var e = [].slice.call(arguments, 0);
  return nc("isBefore", e);
}
function Op() {
  var e = [].slice.call(arguments, 0);
  return nc("isAfter", e);
}
var Rp = function() {
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
function Np(e) {
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
function bp() {
  return this._isValid;
}
function Ip() {
  return an(NaN);
}
function ni(e) {
  var n = Gs(e), r = n.year || 0, t = n.quarter || 0, o = n.month || 0, i = n.week || n.isoWeek || 0, s = n.day || 0, a = n.hour || 0, _ = n.minute || 0, u = n.second || 0, l = n.millisecond || 0;
  this._isValid = Np(n), this._milliseconds = +l + u * 1e3 + // 1000
  _ * 6e4 + // 1000 * 60
  a * 1e3 * 60 * 60, this._days = +s + i * 7, this._months = +o + t * 3 + r * 12, this._data = {}, this._locale = wn(), this._bubble();
}
function oo(e) {
  return e instanceof ni;
}
function Yi(e) {
  return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
}
function gp(e, n, r) {
  var t = Math.min(e.length, n.length), o = Math.abs(e.length - n.length), i = 0, s;
  for (s = 0; s < t; s++)
    (r && e[s] !== n[s] || !r && W(e[s]) !== W(n[s])) && i++;
  return i + o;
}
function rc(e, n) {
  y(e, 0, 0, function() {
    var r = this.utcOffset(), t = "+";
    return r < 0 && (r = -r, t = "-"), t + mn(~~(r / 60), 2) + n + mn(~~r % 60, 2);
  });
}
rc("Z", ":");
rc("ZZ", "");
G("Z", Zo);
G("ZZ", Zo);
ie(["Z", "ZZ"], function(e, n, r) {
  r._useUTC = !0, r._tzm = ks(Zo, e);
});
var Ap = /([\+\-]|\d\d)/gi;
function ks(e, n) {
  var r = (n || "").match(e), t, o, i;
  return r === null ? null : (t = r[r.length - 1] || [], o = (t + "").match(Ap) || ["-", 0, 0], i = +(o[1] * 60) + W(o[2]), i === 0 ? 0 : o[0] === "+" ? i : -i);
}
function xs(e, n) {
  var r, t;
  return n._isUTC ? (r = n.clone(), t = (on(e) || vt(e) ? e.valueOf() : ae(e).valueOf()) - r.valueOf(), r._d.setTime(r._d.valueOf() + t), A.updateOffset(r, !1), r) : ae(e).local();
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
      if (e = ks(Zo, e), e === null)
        return this;
    } else
      Math.abs(e) < 16 && !r && (e = e * 60);
    return !this._isUTC && n && (o = Ki(this)), this._offset = e, this._isUTC = !0, o != null && this.add(o, "m"), t !== e && (!n || this._changeInProgress ? ic(
      this,
      an(e - t, "m"),
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
    var e = ks(qh, this._i);
    e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
  }
  return this;
}
function Up(e) {
  return this.isValid() ? (e = e ? ae(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1;
}
function Hp() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function yp() {
  if (!Le(this._isDSTShifted))
    return this._isDSTShifted;
  var e = {}, n;
  return gs(e, this), e = Qu(e), e._a ? (n = e._isUTC ? pn(e._a) : ae(e._a), this._isDSTShifted = this.isValid() && gp(e._a, n.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function Pp() {
  return this.isValid() ? !this._isUTC : !1;
}
function wp() {
  return this.isValid() ? this._isUTC : !1;
}
function tc() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var Mp = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, kp = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function an(e, n) {
  var r = e, t = null, o, i, s;
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
    ms: W(Yi(t[ar] * 1e3)) * o
    // the millisecond decimal point is included in the match
  }) : (t = kp.exec(e)) ? (o = t[1] === "-" ? -1 : 1, r = {
    y: ir(t[2], o),
    M: ir(t[3], o),
    w: ir(t[4], o),
    d: ir(t[5], o),
    h: ir(t[6], o),
    m: ir(t[7], o),
    s: ir(t[8], o)
  }) : r == null ? r = {} : typeof r == "object" && ("from" in r || "to" in r) && (s = xp(
    ae(r.from),
    ae(r.to)
  ), r = {}, r.ms = s.milliseconds, r.M = s.months), i = new ni(r), oo(e) && q(e, "_locale") && (i._locale = e._locale), oo(e) && q(e, "_isValid") && (i._isValid = e._isValid), i;
}
an.fn = ni.prototype;
an.invalid = Ip;
function ir(e, n) {
  var r = e && parseFloat(e.replace(",", "."));
  return (isNaN(r) ? 0 : r) * n;
}
function Ra(e, n) {
  var r = {};
  return r.months = n.month() - e.month() + (n.year() - e.year()) * 12, e.clone().add(r.months, "M").isAfter(n) && --r.months, r.milliseconds = +n - +e.clone().add(r.months, "M"), r;
}
function xp(e, n) {
  var r;
  return e.isValid() && n.isValid() ? (n = xs(n, e), e.isBefore(n) ? r = Ra(e, n) : (r = Ra(n, e), r.milliseconds = -r.milliseconds, r.months = -r.months), r) : { milliseconds: 0, months: 0 };
}
function oc(e, n) {
  return function(r, t) {
    var o, i;
    return t !== null && !isNaN(+t) && (Hu(
      n,
      "moment()." + n + "(period, number) is deprecated. Please use moment()." + n + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
    ), i = r, r = t, t = i), o = an(r, t), ic(this, o, e), this;
  };
}
function ic(e, n, r, t) {
  var o = n._milliseconds, i = Yi(n._days), s = Yi(n._months);
  e.isValid() && (t = t ?? !0, s && Fu(e, So(e, "Month") + s * r), i && wu(e, "Date", So(e, "Date") + i * r), o && e._d.setTime(e._d.valueOf() + o * r), t && A.updateOffset(e, i || s));
}
var Lp = oc(1, "add"), Bp = oc(-1, "subtract");
function sc(e) {
  return typeof e == "string" || e instanceof String;
}
function jp(e) {
  return on(e) || vt(e) || sc(e) || Un(e) || Vp(e) || Fp(e) || e === null || e === void 0;
}
function Fp(e) {
  var n = cr(e) && !bs(e), r = !1, t = [
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
  ], o, i, s = t.length;
  for (o = 0; o < s; o += 1)
    i = t[o], r = r || q(e, i);
  return n && r;
}
function Vp(e) {
  var n = tn(e), r = !1;
  return n && (r = e.filter(function(t) {
    return !Un(t) && sc(e);
  }).length === 0), n && r;
}
function Wp(e) {
  var n = cr(e) && !bs(e), r = !1, t = [
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
  var r = e || ae(), t = xs(r, this).startOf("day"), o = A.calendarFormat(this, t) || "sameElse", i = n && (fn(n[o]) ? n[o].call(this, r) : n[o]);
  return this.format(
    i || this.localeData().calendar(o, this, ae(r))
  );
}
function Kp() {
  return new Ct(this);
}
function $p(e, n) {
  var r = on(e) ? e : ae(e);
  return this.isValid() && r.isValid() ? (n = qe(n) || "millisecond", n === "millisecond" ? this.valueOf() > r.valueOf() : r.valueOf() < this.clone().startOf(n).valueOf()) : !1;
}
function zp(e, n) {
  var r = on(e) ? e : ae(e);
  return this.isValid() && r.isValid() ? (n = qe(n) || "millisecond", n === "millisecond" ? this.valueOf() < r.valueOf() : this.clone().endOf(n).valueOf() < r.valueOf()) : !1;
}
function Jp(e, n, r, t) {
  var o = on(e) ? e : ae(e), i = on(n) ? n : ae(n);
  return this.isValid() && o.isValid() && i.isValid() ? (t = t || "()", (t[0] === "(" ? this.isAfter(o, r) : !this.isBefore(o, r)) && (t[1] === ")" ? this.isBefore(i, r) : !this.isAfter(i, r))) : !1;
}
function qp(e, n) {
  var r = on(e) ? e : ae(e), t;
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
  if (t = xs(e, this), !t.isValid())
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
function sf(e, n) {
  return this.isValid() && (on(e) && e.isValid() || ae(e).isValid()) ? an({ to: this, from: e }).locale(this.locale()).humanize(!n) : this.localeData().invalidDate();
}
function af(e) {
  return this.from(ae(), e);
}
function _f(e, n) {
  return this.isValid() && (on(e) && e.isValid() || ae(e).isValid()) ? an({ from: this, to: e }).locale(this.locale()).humanize(!n) : this.localeData().invalidDate();
}
function uf(e) {
  return this.to(ae(), e);
}
function ac(e) {
  var n;
  return e === void 0 ? this._locale._abbr : (n = wn(e), n != null && (this._locale = n), this);
}
var _c = Je(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function(e) {
    return e === void 0 ? this.localeData() : this.locale(e);
  }
);
function uc() {
  return this._locale;
}
var Co = 1e3, Ar = 60 * Co, Do = 60 * Ar, cc = (365 * 400 + 97) * 24 * Do;
function Sr(e, n) {
  return (e % n + n) % n;
}
function lc(e, n, r) {
  return e < 100 && e >= 0 ? new Date(e + 400, n, r) - cc : new Date(e, n, r).valueOf();
}
function dc(e, n, r) {
  return e < 100 && e >= 0 ? Date.UTC(e + 400, n, r) - cc : Date.UTC(e, n, r);
}
function cf(e) {
  var n, r;
  if (e = qe(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (r = this._isUTC ? dc : lc, e) {
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
function lf(e) {
  var n, r;
  if (e = qe(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (r = this._isUTC ? dc : lc, e) {
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
function hf() {
  return Math.floor(this.valueOf() / 1e3);
}
function mf() {
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
  return Is(this);
}
function Of() {
  return Vn({}, j(this));
}
function Rf() {
  return j(this).overflow;
}
function Nf() {
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
G("N", Ls);
G("NN", Ls);
G("NNN", Ls);
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
function bf(e, n) {
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
  var t, o, i = this.eras(), s, a, _;
  for (e = e.toUpperCase(), t = 0, o = i.length; t < o; ++t)
    if (s = i[t].name.toUpperCase(), a = i[t].abbr.toUpperCase(), _ = i[t].narrow.toUpperCase(), r)
      switch (n) {
        case "N":
        case "NN":
        case "NNN":
          if (a === e)
            return i[t];
          break;
        case "NNNN":
          if (s === e)
            return i[t];
          break;
        case "NNNNN":
          if (_ === e)
            return i[t];
          break;
      }
    else if ([s, a, _].indexOf(e) >= 0)
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
  return q(this, "_erasNameRegex") || Bs.call(this), e ? this._erasNameRegex : this._erasRegex;
}
function Df(e) {
  return q(this, "_erasAbbrRegex") || Bs.call(this), e ? this._erasAbbrRegex : this._erasRegex;
}
function Uf(e) {
  return q(this, "_erasNarrowRegex") || Bs.call(this), e ? this._erasNarrowRegex : this._erasRegex;
}
function Ls(e, n) {
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
function Bs() {
  var e = [], n = [], r = [], t = [], o, i, s = this.eras();
  for (o = 0, i = s.length; o < i; ++o)
    n.push(We(s[o].name)), e.push(We(s[o].abbr)), r.push(We(s[o].narrow)), t.push(We(s[o].name)), t.push(We(s[o].abbr)), t.push(We(s[o].narrow));
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
G("GGGG", Cs, vs);
G("gggg", Cs, vs);
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
  return hc.call(
    this,
    e,
    this.week(),
    this.weekday(),
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function Mf(e) {
  return hc.call(
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
function hc(e, n, r, t, o) {
  var i;
  return e == null ? _t(this, t, o).year : (i = Gn(e, t, o), n > i && (n = i), jf.call(this, e, n, r, t, o));
}
function jf(e, n, r, t, o) {
  var i = Yu(e, n, r, t, o), s = at(i.year, 0, i.dayOfYear);
  return this.year(s.getUTCFullYear()), this.month(s.getUTCMonth()), this.date(s.getUTCDate()), this;
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
var mc = Lr("Date", !0);
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
var Wn, pc;
for (Wn = "SSSS"; Wn.length <= 9; Wn += "S")
  G(Wn, Br);
function Yf(e, n) {
  n[ar] = W(("0." + e) * 1e3);
}
for (Wn = "S"; Wn.length <= 9; Wn += "S")
  ie(Wn, Yf);
pc = Lr("Milliseconds", !1);
y("z", 0, 0, "zoneAbbr");
y("zz", 0, 0, "zoneName");
function Kf() {
  return this._isUTC ? "UTC" : "";
}
function $f() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var R = Ct.prototype;
R.add = Lp;
R.calendar = Yp;
R.clone = Kp;
R.diff = ef;
R.endOf = lf;
R.format = of;
R.from = sf;
R.fromNow = af;
R.to = _f;
R.toNow = uf;
R.get = zh;
R.invalidAt = Rf;
R.isAfter = $p;
R.isBefore = zp;
R.isBetween = Jp;
R.isSame = qp;
R.isSameOrAfter = Zp;
R.isSameOrBefore = Qp;
R.isValid = Ef;
R.lang = _c;
R.locale = ac;
R.localeData = uc;
R.max = Tp;
R.min = fp;
R.parsingFlags = Of;
R.set = Jh;
R.startOf = cf;
R.subtract = Bp;
R.toArray = pf;
R.toObject = ff;
R.toDate = mf;
R.toISOString = rf;
R.inspect = tf;
typeof Symbol < "u" && Symbol.for != null && (R[Symbol.for("nodejs.util.inspect.custom")] = function() {
  return "Moment<" + this.format() + ">";
});
R.toJSON = Tf;
R.toString = nf;
R.unix = hf;
R.valueOf = df;
R.creationData = Nf;
R.eraName = Af;
R.eraNarrow = Sf;
R.eraAbbr = Gf;
R.eraYear = vf;
R.year = Xu;
R.isLeapYear = pm;
R.weekYear = wf;
R.isoWeekYear = Mf;
R.quarter = R.quarters = Ff;
R.month = Vu;
R.daysInMonth = dm;
R.week = R.weeks = Nm;
R.isoWeek = R.isoWeeks = bm;
R.weeksInYear = Lf;
R.weeksInWeekYear = Bf;
R.isoWeeksInYear = kf;
R.isoWeeksInISOWeekYear = xf;
R.date = mc;
R.day = R.days = wm;
R.weekday = Mm;
R.isoWeekday = km;
R.dayOfYear = Vf;
R.hour = R.hours = Wm;
R.minute = R.minutes = Wf;
R.second = R.seconds = Xf;
R.millisecond = R.milliseconds = pc;
R.utcOffset = Sp;
R.utc = vp;
R.local = Cp;
R.parseZone = Dp;
R.hasAlignedHourOffset = Up;
R.isDST = Hp;
R.isLocal = Pp;
R.isUtcOffset = wp;
R.isUtc = tc;
R.isUTC = tc;
R.zoneAbbr = Kf;
R.zoneName = $f;
R.dates = Je(
  "dates accessor is deprecated. Use date instead.",
  mc
);
R.months = Je(
  "months accessor is deprecated. Use month instead",
  Vu
);
R.years = Je(
  "years accessor is deprecated. Use year instead",
  Xu
);
R.zone = Je(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  Gp
);
R.isDSTShifted = Je(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  yp
);
function zf(e) {
  return ae(e * 1e3);
}
function Jf() {
  return ae.apply(null, arguments).parseZone();
}
function fc(e) {
  return e;
}
var Z = As.prototype;
Z.calendar = wh;
Z.longDateFormat = Lh;
Z.invalidDate = jh;
Z.ordinal = Wh;
Z.preparse = fc;
Z.postformat = fc;
Z.relativeTime = Yh;
Z.pastFuture = Kh;
Z.set = yh;
Z.eras = bf;
Z.erasParse = If;
Z.erasConvertYear = gf;
Z.erasAbbrRegex = Df;
Z.erasNameRegex = Cf;
Z.erasNarrowRegex = Uf;
Z.months = _m;
Z.monthsShort = um;
Z.monthsParse = lm;
Z.monthsRegex = mm;
Z.monthsShortRegex = hm;
Z.week = Tm;
Z.firstDayOfYear = Rm;
Z.firstDayOfWeek = Om;
Z.weekdays = Dm;
Z.weekdaysMin = Hm;
Z.weekdaysShort = Um;
Z.weekdaysParse = Pm;
Z.weekdaysRegex = xm;
Z.weekdaysShortRegex = Lm;
Z.weekdaysMinRegex = Bm;
Z.isPM = Fm;
Z.meridiem = Xm;
function Uo(e, n, r, t) {
  var o = wn(), i = pn().set(t, n);
  return o[r](i, e);
}
function Tc(e, n, r) {
  if (Un(e) && (n = e, e = void 0), e = e || "", n != null)
    return Uo(e, n, r, "month");
  var t, o = [];
  for (t = 0; t < 12; t++)
    o[t] = Uo(e, t, r, "month");
  return o;
}
function js(e, n, r, t) {
  typeof e == "boolean" ? (Un(n) && (r = n, n = void 0), n = n || "") : (n = e, r = n, e = !1, Un(n) && (r = n, n = void 0), n = n || "");
  var o = wn(), i = e ? o._week.dow : 0, s, a = [];
  if (r != null)
    return Uo(n, (r + i) % 7, t, "day");
  for (s = 0; s < 7; s++)
    a[s] = Uo(n, (s + i) % 7, t, "day");
  return a;
}
function qf(e, n) {
  return Tc(e, n, "months");
}
function Zf(e, n) {
  return Tc(e, n, "monthsShort");
}
function Qf(e, n, r) {
  return js(e, n, r, "weekdays");
}
function eT(e, n, r) {
  return js(e, n, r, "weekdaysShort");
}
function nT(e, n, r) {
  return js(e, n, r, "weekdaysMin");
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
var Rn = Math.abs;
function rT() {
  var e = this._data;
  return this._milliseconds = Rn(this._milliseconds), this._days = Rn(this._days), this._months = Rn(this._months), e.milliseconds = Rn(e.milliseconds), e.seconds = Rn(e.seconds), e.minutes = Rn(e.minutes), e.hours = Rn(e.hours), e.months = Rn(e.months), e.years = Rn(e.years), this;
}
function Ec(e, n, r, t) {
  var o = an(n, r);
  return e._milliseconds += t * o._milliseconds, e._days += t * o._days, e._months += t * o._months, e._bubble();
}
function tT(e, n) {
  return Ec(this, e, n, 1);
}
function oT(e, n) {
  return Ec(this, e, n, -1);
}
function Na(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function iT() {
  var e = this._milliseconds, n = this._days, r = this._months, t = this._data, o, i, s, a, _;
  return e >= 0 && n >= 0 && r >= 0 || e <= 0 && n <= 0 && r <= 0 || (e += Na($i(r) + n) * 864e5, n = 0, r = 0), t.milliseconds = e % 1e3, o = Ye(e / 1e3), t.seconds = o % 60, i = Ye(o / 60), t.minutes = i % 60, s = Ye(i / 60), t.hours = s % 24, n += Ye(s / 24), _ = Ye(Oc(n)), r += _, n -= Na($i(_)), a = Ye(r / 12), r %= 12, t.days = n, t.months = r, t.years = a, this;
}
function Oc(e) {
  return e * 4800 / 146097;
}
function $i(e) {
  return e * 146097 / 4800;
}
function sT(e) {
  if (!this.isValid())
    return NaN;
  var n, r, t = this._milliseconds;
  if (e = qe(e), e === "month" || e === "quarter" || e === "year")
    switch (n = this._days + t / 864e5, r = this._months + Oc(n), e) {
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
function aT() {
  return this.isValid() ? this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + W(this._months / 12) * 31536e6 : NaN;
}
function Mn(e) {
  return function() {
    return this.as(e);
  };
}
var _T = Mn("ms"), uT = Mn("s"), cT = Mn("m"), lT = Mn("h"), dT = Mn("d"), hT = Mn("w"), mT = Mn("M"), pT = Mn("Q"), fT = Mn("y");
function TT() {
  return an(this);
}
function ET(e) {
  return e = qe(e), this.isValid() ? this[e + "s"]() : NaN;
}
function hr(e) {
  return function() {
    return this.isValid() ? this._data[e] : NaN;
  };
}
var OT = hr("milliseconds"), RT = hr("seconds"), NT = hr("minutes"), bT = hr("hours"), IT = hr("days"), gT = hr("months"), AT = hr("years");
function ST() {
  return Ye(this.days() / 7);
}
var Nn = Math.round, Nr = {
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
  var o = an(e).abs(), i = Nn(o.as("s")), s = Nn(o.as("m")), a = Nn(o.as("h")), _ = Nn(o.as("d")), u = Nn(o.as("M")), l = Nn(o.as("w")), c = Nn(o.as("y")), E = i <= r.ss && ["s", i] || i < r.s && ["ss", i] || s <= 1 && ["m"] || s < r.m && ["mm", s] || a <= 1 && ["h"] || a < r.h && ["hh", a] || _ <= 1 && ["d"] || _ < r.d && ["dd", _];
  return r.w != null && (E = E || l <= 1 && ["w"] || l < r.w && ["ww", l]), E = E || u <= 1 && ["M"] || u < r.M && ["MM", u] || c <= 1 && ["y"] || ["yy", c], E[2] = n, E[3] = +e > 0, E[4] = t, GT.apply(null, E);
}
function CT(e) {
  return e === void 0 ? Nn : typeof e == "function" ? (Nn = e, !0) : !1;
}
function DT(e, n) {
  return Nr[e] === void 0 ? !1 : n === void 0 ? Nr[e] : (Nr[e] = n, e === "s" && (Nr.ss = n - 1), !0);
}
function UT(e, n) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var r = !1, t = Nr, o, i;
  return typeof e == "object" && (n = e, e = !1), typeof e == "boolean" && (r = e), typeof n == "object" && (t = Object.assign({}, Nr, n), n.s != null && n.ss == null && (t.ss = n.s - 1)), o = this.localeData(), i = vT(this, !r, t, o), r && (i = o.pastFuture(+this, i)), o.postformat(i);
}
var Ni = Math.abs;
function pr(e) {
  return (e > 0) - (e < 0) || +e;
}
function ti() {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var e = Ni(this._milliseconds) / 1e3, n = Ni(this._days), r = Ni(this._months), t, o, i, s, a = this.asSeconds(), _, u, l, c;
  return a ? (t = Ye(e / 60), o = Ye(t / 60), e %= 60, t %= 60, i = Ye(r / 12), r %= 12, s = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", _ = a < 0 ? "-" : "", u = pr(this._months) !== pr(a) ? "-" : "", l = pr(this._days) !== pr(a) ? "-" : "", c = pr(this._milliseconds) !== pr(a) ? "-" : "", _ + "P" + (i ? u + i + "Y" : "") + (r ? u + r + "M" : "") + (n ? l + n + "D" : "") + (o || t || e ? "T" : "") + (o ? c + o + "H" : "") + (t ? c + t + "M" : "") + (e ? c + s + "S" : "")) : "P0D";
}
var K = ni.prototype;
K.isValid = bp;
K.abs = rT;
K.add = tT;
K.subtract = oT;
K.as = sT;
K.asMilliseconds = _T;
K.asSeconds = uT;
K.asMinutes = cT;
K.asHours = lT;
K.asDays = dT;
K.asWeeks = hT;
K.asMonths = mT;
K.asQuarters = pT;
K.asYears = fT;
K.valueOf = aT;
K._bubble = iT;
K.clone = TT;
K.get = ET;
K.milliseconds = OT;
K.seconds = RT;
K.minutes = NT;
K.hours = bT;
K.days = IT;
K.weeks = ST;
K.months = gT;
K.years = AT;
K.humanize = UT;
K.toISOString = ti;
K.toString = ti;
K.toJSON = ti;
K.locale = ac;
K.localeData = uc;
K.toIsoString = Je(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  ti
);
K.lang = _c;
y("X", 0, 0, "unix");
y("x", 0, 0, "valueOf");
G("x", qo);
G("X", Zh);
ie("X", function(e, n, r) {
  r._d = new Date(parseFloat(e) * 1e3);
});
ie("x", function(e, n, r) {
  r._d = new Date(W(e));
});
//! moment.js
A.version = "2.29.4";
Uh(ae);
A.fn = R;
A.min = Ep;
A.max = Op;
A.now = Rp;
A.utc = pn;
A.unix = zf;
A.months = qf;
A.isDate = vt;
A.locale = Kn;
A.invalid = Yo;
A.duration = an;
A.isMoment = on;
A.weekdays = Qf;
A.parseZone = Jf;
A.localeData = wn;
A.isDuration = oo;
A.monthsShort = Zf;
A.weekdaysMin = nT;
A.defineLocale = ys;
A.updateLocale = zm;
A.locales = Jm;
A.weekdaysShort = eT;
A.normalizeUnits = qe;
A.relativeTimeRounding = CT;
A.relativeTimeThreshold = DT;
A.calendarFormat = Xp;
A.prototype = R;
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
function Rc(e, n) {
  return function() {
    return e.apply(n, arguments);
  };
}
const { toString: HT } = Object.prototype, { getPrototypeOf: Fs } = Object, oi = ((e) => (n) => {
  const r = HT.call(n);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Tn = (e) => (e = e.toLowerCase(), (n) => oi(n) === e), ii = (e) => (n) => typeof n === e, { isArray: jr } = Array, ct = ii("undefined");
function yT(e) {
  return e !== null && !ct(e) && e.constructor !== null && !ct(e.constructor) && ze(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Nc = Tn("ArrayBuffer");
function PT(e) {
  let n;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? n = ArrayBuffer.isView(e) : n = e && e.buffer && Nc(e.buffer), n;
}
const wT = ii("string"), ze = ii("function"), bc = ii("number"), si = (e) => e !== null && typeof e == "object", MT = (e) => e === !0 || e === !1, so = (e) => {
  if (oi(e) !== "object")
    return !1;
  const n = Fs(e);
  return (n === null || n === Object.prototype || Object.getPrototypeOf(n) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, kT = Tn("Date"), xT = Tn("File"), LT = Tn("Blob"), BT = Tn("FileList"), jT = (e) => si(e) && ze(e.pipe), FT = (e) => {
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
    const i = r ? Object.getOwnPropertyNames(e) : Object.keys(e), s = i.length;
    let a;
    for (t = 0; t < s; t++)
      a = i[t], n.call(null, e[a], a, e);
  }
}
function Ic(e, n) {
  n = n.toLowerCase();
  const r = Object.keys(e);
  let t = r.length, o;
  for (; t-- > 0; )
    if (o = r[t], n === o.toLowerCase())
      return o;
  return null;
}
const gc = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), Ac = (e) => !ct(e) && e !== gc;
function zi() {
  const { caseless: e } = Ac(this) && this || {}, n = {}, r = (t, o) => {
    const i = e && Ic(n, o) || o;
    so(n[i]) && so(t) ? n[i] = zi(n[i], t) : so(t) ? n[i] = zi({}, t) : jr(t) ? n[i] = t.slice() : n[i] = t;
  };
  for (let t = 0, o = arguments.length; t < o; t++)
    arguments[t] && Ht(arguments[t], r);
  return n;
}
const XT = (e, n, r, { allOwnKeys: t } = {}) => (Ht(n, (o, i) => {
  r && ze(o) ? e[i] = Rc(o, r) : e[i] = o;
}, { allOwnKeys: t }), e), YT = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), KT = (e, n, r, t) => {
  e.prototype = Object.create(n.prototype, t), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: n.prototype
  }), r && Object.assign(e.prototype, r);
}, $T = (e, n, r, t) => {
  let o, i, s;
  const a = {};
  if (n = n || {}, e == null)
    return n;
  do {
    for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
      s = o[i], (!t || t(s, e, n)) && !a[s] && (n[s] = e[s], a[s] = !0);
    e = r !== !1 && Fs(e);
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
  if (!bc(n))
    return null;
  const r = new Array(n);
  for (; n-- > 0; )
    r[n] = e[n];
  return r;
}, qT = ((e) => (n) => e && n instanceof e)(typeof Uint8Array < "u" && Fs(Uint8Array)), ZT = (e, n) => {
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
), ba = (({ hasOwnProperty: e }) => (n, r) => e.call(n, r))(Object.prototype), rE = Tn("RegExp"), Sc = (e, n) => {
  const r = Object.getOwnPropertyDescriptors(e), t = {};
  Ht(r, (o, i) => {
    n(o, i, e) !== !1 && (t[i] = o);
  }), Object.defineProperties(e, t);
}, tE = (e) => {
  Sc(e, (n, r) => {
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
}, sE = (e, n) => (e = +e, Number.isFinite(e) ? e : n), bi = "abcdefghijklmnopqrstuvwxyz", Ia = "0123456789", Gc = {
  DIGIT: Ia,
  ALPHA: bi,
  ALPHA_DIGIT: bi + bi.toUpperCase() + Ia
}, aE = (e = 16, n = Gc.ALPHA_DIGIT) => {
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
    if (si(t)) {
      if (n.indexOf(t) >= 0)
        return;
      if (!("toJSON" in t)) {
        n[o] = t;
        const i = jr(t) ? [] : {};
        return Ht(t, (s, a) => {
          const _ = r(s, o + 1);
          !ct(_) && (i[a] = _);
        }), n[o] = void 0, i;
      }
    }
    return t;
  };
  return r(e, 0);
}, cE = Tn("AsyncFunction"), lE = (e) => e && (si(e) || ze(e)) && ze(e.then) && ze(e.catch), T = {
  isArray: jr,
  isArrayBuffer: Nc,
  isBuffer: yT,
  isFormData: FT,
  isArrayBufferView: PT,
  isString: wT,
  isNumber: bc,
  isBoolean: MT,
  isObject: si,
  isPlainObject: so,
  isUndefined: ct,
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
  hasOwnProperty: ba,
  hasOwnProp: ba,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Sc,
  freezeMethods: tE,
  toObjectSet: oE,
  toCamelCase: nE,
  noop: iE,
  toFiniteNumber: sE,
  findKey: Ic,
  global: gc,
  isContextDefined: Ac,
  ALPHABET: Gc,
  generateString: aE,
  isSpecCompliantForm: _E,
  toJSONObject: uE,
  isAsyncFn: cE,
  isThenable: lE
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
const vc = $.prototype, Cc = {};
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
  Cc[e] = { value: e };
});
Object.defineProperties($, Cc);
Object.defineProperty(vc, "isAxiosError", { value: !0 });
$.from = (e, n, r, t, o, i) => {
  const s = Object.create(vc);
  return T.toFlatObject(e, s, function(_) {
    return _ !== Error.prototype;
  }, (a) => a !== "isAxiosError"), $.call(s, e.message, n, r, t, o), s.cause = e, s.name = e.name, i && Object.assign(s, i), s;
};
const dE = null;
function Ji(e) {
  return T.isPlainObject(e) || T.isArray(e);
}
function Dc(e) {
  return T.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function ga(e, n, r) {
  return e ? e.concat(n).map(function(o, i) {
    return o = Dc(o), !r && i ? "[" + o + "]" : o;
  }).join(r ? "." : "") : n;
}
function hE(e) {
  return T.isArray(e) && !e.some(Ji);
}
const mE = T.toFlatObject(T, {}, null, function(n) {
  return /^is[A-Z]/.test(n);
});
function ai(e, n, r) {
  if (!T.isObject(e))
    throw new TypeError("target must be an object");
  n = n || new FormData(), r = T.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(h, p) {
    return !T.isUndefined(p[h]);
  });
  const t = r.metaTokens, o = r.visitor || l, i = r.dots, s = r.indexes, _ = (r.Blob || typeof Blob < "u" && Blob) && T.isSpecCompliantForm(n);
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
  function l(d, h, p) {
    let I = d;
    if (d && !p && typeof d == "object") {
      if (T.endsWith(h, "{}"))
        h = t ? h : h.slice(0, -2), d = JSON.stringify(d);
      else if (T.isArray(d) && hE(d) || (T.isFileList(d) || T.endsWith(h, "[]")) && (I = T.toArray(d)))
        return h = Dc(h), I.forEach(function(C, H) {
          !(T.isUndefined(C) || C === null) && n.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? ga([h], H, i) : s === null ? h : h + "[]",
            u(C)
          );
        }), !1;
    }
    return Ji(d) ? !0 : (n.append(ga(p, h, i), u(d)), !1);
  }
  const c = [], E = Object.assign(mE, {
    defaultVisitor: l,
    convertValue: u,
    isVisitable: Ji
  });
  function O(d, h) {
    if (!T.isUndefined(d)) {
      if (c.indexOf(d) !== -1)
        throw Error("Circular reference detected in " + h.join("."));
      c.push(d), T.forEach(d, function(I, N) {
        (!(T.isUndefined(I) || I === null) && o.call(
          n,
          I,
          T.isString(N) ? N.trim() : N,
          h,
          E
        )) === !0 && O(I, h ? h.concat(N) : [N]);
      }), c.pop();
    }
  }
  if (!T.isObject(e))
    throw new TypeError("data must be an object");
  return O(e), n;
}
function Aa(e) {
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
function Vs(e, n) {
  this._pairs = [], e && ai(e, this, n);
}
const Uc = Vs.prototype;
Uc.append = function(n, r) {
  this._pairs.push([n, r]);
};
Uc.toString = function(n) {
  const r = n ? function(t) {
    return n.call(this, t, Aa);
  } : Aa;
  return this._pairs.map(function(o) {
    return r(o[0]) + "=" + r(o[1]);
  }, "").join("&");
};
function pE(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Hc(e, n, r) {
  if (!n)
    return e;
  const t = r && r.encode || pE, o = r && r.serialize;
  let i;
  if (o ? i = o(n, r) : i = T.isURLSearchParams(n) ? n.toString() : new Vs(n, r).toString(t), i) {
    const s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
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
const Sa = fE, yc = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, TE = typeof URLSearchParams < "u" ? URLSearchParams : Vs, EE = typeof FormData < "u" ? FormData : null, OE = typeof Blob < "u" ? Blob : null, RE = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), NE = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), cn = {
  isBrowser: !0,
  classes: {
    URLSearchParams: TE,
    FormData: EE,
    Blob: OE
  },
  isStandardBrowserEnv: RE,
  isStandardBrowserWebWorkerEnv: NE,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function bE(e, n) {
  return ai(e, new cn.classes.URLSearchParams(), Object.assign({
    visitor: function(r, t, o, i) {
      return cn.isNode && T.isBuffer(r) ? (this.append(t, r.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
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
function Pc(e) {
  function n(r, t, o, i) {
    let s = r[i++];
    const a = Number.isFinite(+s), _ = i >= r.length;
    return s = !s && T.isArray(o) ? o.length : s, _ ? (T.hasOwnProp(o, s) ? o[s] = [o[s], t] : o[s] = t, !a) : ((!o[s] || !T.isObject(o[s])) && (o[s] = []), n(r, t, o[s], i) && T.isArray(o[s]) && (o[s] = gE(o[s])), !a);
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
  transitional: yc,
  adapter: ["xhr", "http"],
  transformRequest: [function(n, r) {
    const t = r.getContentType() || "", o = t.indexOf("application/json") > -1, i = T.isObject(n);
    if (i && T.isHTMLForm(n) && (n = new FormData(n)), T.isFormData(n))
      return o && o ? JSON.stringify(Pc(n)) : n;
    if (T.isArrayBuffer(n) || T.isBuffer(n) || T.isStream(n) || T.isFile(n) || T.isBlob(n))
      return n;
    if (T.isArrayBufferView(n))
      return n.buffer;
    if (T.isURLSearchParams(n))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), n.toString();
    let a;
    if (i) {
      if (t.indexOf("application/x-www-form-urlencoded") > -1)
        return bE(n, this.formSerializer).toString();
      if ((a = T.isFileList(n)) || t.indexOf("multipart/form-data") > -1) {
        const _ = this.env && this.env.FormData;
        return ai(
          a ? { "files[]": n } : n,
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
      const s = !(r && r.silentJSONParsing) && o;
      try {
        return JSON.parse(n);
      } catch (a) {
        if (s)
          throw a.name === "SyntaxError" ? $.from(a, $.ERR_BAD_RESPONSE, this, null, this.response) : a;
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
    FormData: cn.classes.FormData,
    Blob: cn.classes.Blob
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
const Ws = _i, GE = T.toObjectSet([
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
`).forEach(function(s) {
    o = s.indexOf(":"), r = s.substring(0, o).trim().toLowerCase(), t = s.substring(o + 1).trim(), !(!r || n[r] && GE[r]) && (r === "set-cookie" ? n[r] ? n[r].push(t) : n[r] = [t] : n[r] = n[r] ? n[r] + ", " + t : t);
  }), n;
}, Ga = Symbol("internals");
function $r(e) {
  return e && String(e).trim().toLowerCase();
}
function ao(e) {
  return e === !1 || e == null ? e : T.isArray(e) ? e.map(ao) : String(e);
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
      value: function(o, i, s) {
        return this[t].call(this, n, o, i, s);
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
    function i(a, _, u) {
      const l = $r(_);
      if (!l)
        throw new Error("header name must be a non-empty string");
      const c = T.findKey(o, l);
      (!c || o[c] === void 0 || u === !0 || u === void 0 && o[c] !== !1) && (o[c || _] = ao(a));
    }
    const s = (a, _) => T.forEach(a, (u, l) => i(u, l, _));
    return T.isPlainObject(n) || n instanceof this.constructor ? s(n, r) : T.isString(n) && (n = n.trim()) && !DE(n) ? s(vE(n), r) : n != null && i(r, n, t), this;
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
    function i(s) {
      if (s = $r(s), s) {
        const a = T.findKey(t, s);
        a && (!r || Ii(t, t[a], a, r)) && (delete t[a], o = !0);
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
      const s = T.findKey(t, i);
      if (s) {
        r[s] = ao(o), delete r[i];
        return;
      }
      const a = n ? UE(i) : String(i).trim();
      a !== i && delete r[i], r[a] = ao(o), t[a] = !0;
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
    const t = (this[Ga] = this[Ga] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function i(s) {
      const a = $r(s);
      t[a] || (HE(o, s), t[a] = !0);
    }
    return T.isArray(n) ? n.forEach(i) : i(n), this;
  }
}
ui.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
T.freezeMethods(ui.prototype);
T.freezeMethods(ui);
const vn = ui;
function gi(e, n) {
  const r = this || Ws, t = n || r, o = vn.from(t.headers);
  let i = t.data;
  return T.forEach(e, function(a) {
    i = a.call(r, i, o.normalize(), n ? n.status : void 0);
  }), o.normalize(), i;
}
function wc(e) {
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
const PE = cn.isStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  function() {
    return {
      write: function(r, t, o, i, s, a) {
        const _ = [];
        _.push(r + "=" + encodeURIComponent(t)), T.isNumber(o) && _.push("expires=" + new Date(o).toGMTString()), T.isString(i) && _.push("path=" + i), T.isString(s) && _.push("domain=" + s), a === !0 && _.push("secure"), document.cookie = _.join("; ");
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
function Mc(e, n) {
  return e && !wE(n) ? ME(e, n) : n;
}
const kE = cn.isStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const n = /(msie|trident)/i.test(navigator.userAgent), r = document.createElement("a");
    let t;
    function o(i) {
      let s = i;
      return n && (r.setAttribute("href", s), s = r.href), r.setAttribute("href", s), {
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
    return t = o(window.location.href), function(s) {
      const a = T.isString(s) ? o(s) : s;
      return a.protocol === t.protocol && a.host === t.host;
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
  let o = 0, i = 0, s;
  return n = n !== void 0 ? n : 1e3, function(_) {
    const u = Date.now(), l = t[i];
    s || (s = u), r[o] = _, t[o] = u;
    let c = i, E = 0;
    for (; c !== o; )
      E += r[c++], c = c % e;
    if (o = (o + 1) % e, o === i && (i = (i + 1) % e), u - s < n)
      return;
    const O = l && u - l;
    return O ? Math.round(E * 1e3 / O) : void 0;
  };
}
function va(e, n) {
  let r = 0;
  const t = LE(50, 250);
  return (o) => {
    const i = o.loaded, s = o.lengthComputable ? o.total : void 0, a = i - r, _ = t(a), u = i <= s;
    r = i;
    const l = {
      loaded: i,
      total: s,
      progress: s ? i / s : void 0,
      bytes: a,
      rate: _ || void 0,
      estimated: _ && s && u ? (s - i) / _ : void 0,
      event: o
    };
    l[n ? "download" : "upload"] = !0, e(l);
  };
}
const BE = typeof XMLHttpRequest < "u", jE = BE && function(e) {
  return new Promise(function(r, t) {
    let o = e.data;
    const i = vn.from(e.headers).normalize(), s = e.responseType;
    let a;
    function _() {
      e.cancelToken && e.cancelToken.unsubscribe(a), e.signal && e.signal.removeEventListener("abort", a);
    }
    T.isFormData(o) && (cn.isStandardBrowserEnv || cn.isStandardBrowserWebWorkerEnv ? i.setContentType(!1) : i.setContentType("multipart/form-data;", !1));
    let u = new XMLHttpRequest();
    if (e.auth) {
      const O = e.auth.username || "", d = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      i.set("Authorization", "Basic " + btoa(O + ":" + d));
    }
    const l = Mc(e.baseURL, e.url);
    u.open(e.method.toUpperCase(), Hc(l, e.params, e.paramsSerializer), !0), u.timeout = e.timeout;
    function c() {
      if (!u)
        return;
      const O = vn.from(
        "getAllResponseHeaders" in u && u.getAllResponseHeaders()
      ), h = {
        data: !s || s === "text" || s === "json" ? u.responseText : u.response,
        status: u.status,
        statusText: u.statusText,
        headers: O,
        config: e,
        request: u
      };
      yE(function(I) {
        r(I), _();
      }, function(I) {
        t(I), _();
      }, h), u = null;
    }
    if ("onloadend" in u ? u.onloadend = c : u.onreadystatechange = function() {
      !u || u.readyState !== 4 || u.status === 0 && !(u.responseURL && u.responseURL.indexOf("file:") === 0) || setTimeout(c);
    }, u.onabort = function() {
      u && (t(new $("Request aborted", $.ECONNABORTED, e, u)), u = null);
    }, u.onerror = function() {
      t(new $("Network Error", $.ERR_NETWORK, e, u)), u = null;
    }, u.ontimeout = function() {
      let d = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const h = e.transitional || yc;
      e.timeoutErrorMessage && (d = e.timeoutErrorMessage), t(new $(
        d,
        h.clarifyTimeoutError ? $.ETIMEDOUT : $.ECONNABORTED,
        e,
        u
      )), u = null;
    }, cn.isStandardBrowserEnv) {
      const O = (e.withCredentials || kE(l)) && e.xsrfCookieName && PE.read(e.xsrfCookieName);
      O && i.set(e.xsrfHeaderName, O);
    }
    o === void 0 && i.setContentType(null), "setRequestHeader" in u && T.forEach(i.toJSON(), function(d, h) {
      u.setRequestHeader(h, d);
    }), T.isUndefined(e.withCredentials) || (u.withCredentials = !!e.withCredentials), s && s !== "json" && (u.responseType = e.responseType), typeof e.onDownloadProgress == "function" && u.addEventListener("progress", va(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && u.upload && u.upload.addEventListener("progress", va(e.onUploadProgress)), (e.cancelToken || e.signal) && (a = (O) => {
      u && (t(!O || O.type ? new yt(null, e, u) : O), u.abort(), u = null);
    }, e.cancelToken && e.cancelToken.subscribe(a), e.signal && (e.signal.aborted ? a() : e.signal.addEventListener("abort", a)));
    const E = xE(l);
    if (E && cn.protocols.indexOf(E) === -1) {
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
function Ca(e) {
  return Ai(e), e.headers = vn.from(e.headers), e.data = gi.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), FE.getAdapter(e.adapter || Ws.adapter)(e).then(function(t) {
    return Ai(e), t.data = gi.call(
      e,
      e.transformResponse,
      t
    ), t.headers = vn.from(t.headers), t;
  }, function(t) {
    return wc(t) || (Ai(e), t && t.response && (t.response.data = gi.call(
      e,
      e.transformResponse,
      t.response
    ), t.response.headers = vn.from(t.response.headers))), Promise.reject(t);
  });
}
const Da = (e) => e instanceof vn ? e.toJSON() : e;
function Pr(e, n) {
  n = n || {};
  const r = {};
  function t(u, l, c) {
    return T.isPlainObject(u) && T.isPlainObject(l) ? T.merge.call({ caseless: c }, u, l) : T.isPlainObject(l) ? T.merge({}, l) : T.isArray(l) ? l.slice() : l;
  }
  function o(u, l, c) {
    if (T.isUndefined(l)) {
      if (!T.isUndefined(u))
        return t(void 0, u, c);
    } else
      return t(u, l, c);
  }
  function i(u, l) {
    if (!T.isUndefined(l))
      return t(void 0, l);
  }
  function s(u, l) {
    if (T.isUndefined(l)) {
      if (!T.isUndefined(u))
        return t(void 0, u);
    } else
      return t(void 0, l);
  }
  function a(u, l, c) {
    if (c in n)
      return t(u, l);
    if (c in e)
      return t(void 0, u);
  }
  const _ = {
    url: i,
    method: i,
    data: i,
    baseURL: s,
    transformRequest: s,
    transformResponse: s,
    paramsSerializer: s,
    timeout: s,
    timeoutMessage: s,
    withCredentials: s,
    adapter: s,
    responseType: s,
    xsrfCookieName: s,
    xsrfHeaderName: s,
    onUploadProgress: s,
    onDownloadProgress: s,
    decompress: s,
    maxContentLength: s,
    maxBodyLength: s,
    beforeRedirect: s,
    transport: s,
    httpAgent: s,
    httpsAgent: s,
    cancelToken: s,
    socketPath: s,
    responseEncoding: s,
    validateStatus: a,
    headers: (u, l) => o(Da(u), Da(l), !0)
  };
  return T.forEach(Object.keys(Object.assign({}, e, n)), function(l) {
    const c = _[l] || o, E = c(e[l], n[l], l);
    T.isUndefined(E) && c !== a || (r[l] = E);
  }), r;
}
const kc = "1.4.0", Xs = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, n) => {
  Xs[e] = function(t) {
    return typeof t === e || "a" + (n < 1 ? "n " : " ") + e;
  };
});
const Ua = {};
Xs.transitional = function(n, r, t) {
  function o(i, s) {
    return "[Axios v" + kc + "] Transitional option '" + i + "'" + s + (t ? ". " + t : "");
  }
  return (i, s, a) => {
    if (n === !1)
      throw new $(
        o(s, " has been removed" + (r ? " in " + r : "")),
        $.ERR_DEPRECATED
      );
    return r && !Ua[s] && (Ua[s] = !0, console.warn(
      o(
        s,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), n ? n(i, s, a) : !0;
  };
};
function VE(e, n, r) {
  if (typeof e != "object")
    throw new $("options must be an object", $.ERR_BAD_OPTION_VALUE);
  const t = Object.keys(e);
  let o = t.length;
  for (; o-- > 0; ) {
    const i = t[o], s = n[i];
    if (s) {
      const a = e[i], _ = a === void 0 || s(a, i, e);
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
  validators: Xs
}, Bn = qi.validators;
class Ho {
  constructor(n) {
    this.defaults = n, this.interceptors = {
      request: new Sa(),
      response: new Sa()
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
    let s;
    s = i && T.merge(
      i.common,
      i[r.method]
    ), s && T.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (d) => {
        delete i[d];
      }
    ), r.headers = vn.concat(s, i);
    const a = [];
    let _ = !0;
    this.interceptors.request.forEach(function(h) {
      typeof h.runWhen == "function" && h.runWhen(r) === !1 || (_ = _ && h.synchronous, a.unshift(h.fulfilled, h.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(h) {
      u.push(h.fulfilled, h.rejected);
    });
    let l, c = 0, E;
    if (!_) {
      const d = [Ca.bind(this), void 0];
      for (d.unshift.apply(d, a), d.push.apply(d, u), E = d.length, l = Promise.resolve(r); c < E; )
        l = l.then(d[c++], d[c++]);
      return l;
    }
    E = a.length;
    let O = r;
    for (c = 0; c < E; ) {
      const d = a[c++], h = a[c++];
      try {
        O = d(O);
      } catch (p) {
        h.call(this, p);
        break;
      }
    }
    try {
      l = Ca.call(this, O);
    } catch (d) {
      return Promise.reject(d);
    }
    for (c = 0, E = u.length; c < E; )
      l = l.then(u[c++], u[c++]);
    return l;
  }
  getUri(n) {
    n = Pr(this.defaults, n);
    const r = Mc(n.baseURL, n.url);
    return Hc(r, n.params, n.paramsSerializer);
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
    return function(i, s, a) {
      return this.request(Pr(a || {}, {
        method: n,
        headers: t ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: s
      }));
    };
  }
  Ho.prototype[n] = r(), Ho.prototype[n + "Form"] = r(!0);
});
const uo = Ho;
class Ys {
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
      const s = new Promise((a) => {
        t.subscribe(a), i = a;
      }).then(o);
      return s.cancel = function() {
        t.unsubscribe(i);
      }, s;
    }, n(function(i, s, a) {
      t.reason || (t.reason = new yt(i, s, a), r(t.reason));
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
      token: new Ys(function(o) {
        n = o;
      }),
      cancel: n
    };
  }
}
const WE = Ys;
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
function xc(e) {
  const n = new uo(e), r = Rc(uo.prototype.request, n);
  return T.extend(r, uo.prototype, n, { allOwnKeys: !0 }), T.extend(r, n, null, { allOwnKeys: !0 }), r.create = function(o) {
    return xc(Pr(e, o));
  }, r;
}
const Oe = xc(Ws);
Oe.Axios = uo;
Oe.CanceledError = yt;
Oe.CancelToken = WE;
Oe.isCancel = wc;
Oe.VERSION = kc;
Oe.toFormData = ai;
Oe.AxiosError = $;
Oe.Cancel = Oe.CanceledError;
Oe.all = function(n) {
  return Promise.all(n);
};
Oe.spread = XE;
Oe.isAxiosError = YE;
Oe.mergeConfig = Pr;
Oe.AxiosHeaders = vn;
Oe.formToJSON = (e) => Pc(T.isHTMLForm(e) ? new FormData(e) : e);
Oe.HttpStatusCode = KE;
Oe.default = Oe;
const $E = Oe, zE = { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_026a82c8-4fcd-40a9-84f6-eb5ecd61cd50", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "npm/8.19.4 node/v16.20.1 linux x64 workspaces/false ci/github-actions", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_026a82c8-4fcd-40a9-84f6-eb5ecd61cd50", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", npm_config_noproxy: "", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-8.2", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "", npm_config_userconfig: "/home/runner/.npmrc", npm_config_local_prefix: "/home/runner/work/CodeGear/CodeGear", SYSTEMD_EXEC_PID: "660", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", COLOR: "0", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.5/x64", NVM_DIR: "/home/runner/.nvm", npm_config_metrics_registry: "https://registry.npmjs.org/", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230702.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chrome_driver", JOURNAL_STREAM: "8:15284", GITHUB_WORKFLOW: "CodeGear CI", _: "/opt/hostedtoolcache/node/16.20.1/x64/bin/npm", npm_config_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", GITHUB_RUN_ID: "5523471966", npm_config_cache: "/home/runner/.npm", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "ac0f84c8aa72cfb46bf37148899f504dfe41c131", GITHUB_BASE_REF: "", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/heads/settings-popup", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", npm_config_node_gyp: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.bin:/home/runner/work/CodeGear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_b8fc4c49-12db-4c27-b275-7e4b48143402", INVOCATION_ID: "c05c8d76deac491f8c661337131feb1a", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.10/x64", NODE: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "14", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 5", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "settings-popup", GITHUB_REPOSITORY: "Gearonix/CodeGear", npm_lifecycle_script: " nx run-many --targets=build --all", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", STATS_NM: "true", npm_package_version: "0.0.0", npm_lifecycle_event: "build", NODE_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/bin/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/node_modules", GITHUB_REF_PROTECTED: "false", npm_config_strict_peer_dependencies: "", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "ac0f84c8aa72cfb46bf37148899f504dfe41c131", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/heads/settings-popup", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", npm_config_globalconfig: "/opt/hostedtoolcache/node/16.20.1/x64/etc/npmrc", npm_config_init_module: "/home/runner/.npm-init.js", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_026a82c8-4fcd-40a9-84f6-eb5ecd61cd50", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", npm_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/bin/npm-cli.js", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "push", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_026a82c8-4fcd-40a9-84f6-eb5ecd61cd50", npm_config_global_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", npm_command: "run-script", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.146+9/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_026a82c8-4fcd-40a9-84f6-eb5ecd61cd50", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", EDITOR: "vi", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/5407298341986919404", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "5407298341986919404", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.SERVER_URL ?? "http://localhost:6868", JE = {
  CODE_EXECUTOR_API: "execute"
}, qE = $E.create({
  baseURL: zE,
  withCredentials: !0
}), ZE = {
  EDITOR_THEME: "EDITOR_THEME",
  EDITOR_CONTENT_DATA: "EDITOR_CONTENT_DATA",
  EDITOR_EXECUTE_MESSAGES: "EDITOR_EXECUTE_MESSAGES"
}, Lc = {
  MAIN: "/",
  EDITOR: "/edit",
  ABOUT: "/about"
}, Bc = () => {
  const [e, n] = qn([]);
  return {
    on: (r) => {
      Object.entries(r).forEach(([t, o]) => {
        const i = (s) => {
          if (s.altKey && s.key === t.toLowerCase())
            return s.preventDefault(), o?.(), !1;
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
}, jc = (e = !1) => {
  const [n, r] = qn(e);
  return {
    off: () => r(!1),
    on: () => r(!0),
    toggle: () => r(!n),
    val: n
  };
}, QE = (e, n) => {
  const r = ce();
  return (...t) => {
    r.current && clearTimeout(r.current), r.current = setTimeout(() => {
      e(...t);
    }, n);
  };
}, eO = () => () => {
  if (!document.fullscreenElement)
    return document.documentElement.requestFullscreen();
  document.exitFullscreen && document.exitFullscreen();
}, nO = () => {
  ye(() => (document.body.style.overflow = "hidden", () => {
    document.body.style.overflow = "auto";
  }));
}, yo = ({ when: e, children: n }) => e ? n : null;
var Ks, P, Fc, sr, Ha, Vc, Qi, co = {}, Wc = [], rO = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, ci = Array.isArray;
function Xn(e, n) {
  for (var r in n)
    e[r] = n[r];
  return e;
}
function Xc(e) {
  var n = e.parentNode;
  n && n.removeChild(e);
}
function ya(e, n, r) {
  var t, o, i, s = {};
  for (i in n)
    i == "key" ? t = n[i] : i == "ref" ? o = n[i] : s[i] = n[i];
  if (arguments.length > 2 && (s.children = arguments.length > 3 ? Ks.call(arguments, 2) : r), typeof e == "function" && e.defaultProps != null)
    for (i in e.defaultProps)
      s[i] === void 0 && (s[i] = e.defaultProps[i]);
  return lo(e, s, t, o, null);
}
function lo(e, n, r, t, o) {
  var i = { type: e, props: n, key: r, ref: t, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: o ?? ++Fc };
  return o == null && P.vnode != null && P.vnode(i), i;
}
function lt(e) {
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
function Yc(e) {
  var n, r;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, n = 0; n < e.__k.length; n++)
      if ((r = e.__k[n]) != null && r.__e != null) {
        e.__e = e.__c.base = r.__e;
        break;
      }
    return Yc(e);
  }
}
function Pa(e) {
  (!e.__d && (e.__d = !0) && sr.push(e) && !wo.__r++ || Ha !== P.debounceRendering) && ((Ha = P.debounceRendering) || Vc)(wo);
}
function wo() {
  var e, n, r, t, o, i, s, a, _;
  for (sr.sort(Qi); e = sr.shift(); )
    e.__d && (n = sr.length, t = void 0, o = void 0, i = void 0, a = (s = (r = e).__v).__e, (_ = r.__P) && (t = [], o = [], (i = Xn({}, s)).__v = s.__v + 1, Jc(_, s, i, r.__n, _.ownerSVGElement !== void 0, s.__h != null ? [a] : null, t, a ?? Po(s), s.__h, o), iO(t, s, o), s.__e != a && Yc(s)), sr.length > n && sr.sort(Qi));
  wo.__r = 0;
}
function Kc(e, n, r, t, o, i, s, a, _, u, l) {
  var c, E, O, d, h, p, I, N, C, H, f = 0, w = t && t.__k || Wc, X = w.length, se = X, x = n.length;
  for (r.__k = [], c = 0; c < x; c++)
    (d = r.__k[c] = (d = n[c]) == null || typeof d == "boolean" || typeof d == "function" ? null : typeof d == "string" || typeof d == "number" || typeof d == "bigint" ? lo(null, d, null, null, d) : ci(d) ? lo(lt, { children: d }, null, null, null) : d.__b > 0 ? lo(d.type, d.props, d.key, d.ref ? d.ref : null, d.__v) : d) != null && (d.__ = r, d.__b = r.__b + 1, (N = tO(d, w, I = c + f, se)) === -1 ? O = co : (O = w[N] || co, w[N] = void 0, se--), Jc(e, d, O, o, i, s, a, _, u, l), h = d.__e, (E = d.ref) && O.ref != E && (O.ref && $s(O.ref, null, d), l.push(E, d.__c || h, d)), h != null && (p == null && (p = h), H = !(C = O === co || O.__v === null) && N === I, C ? N == -1 && f-- : N !== I && (N === I + 1 ? (f++, H = !0) : N > I ? se > x - I ? (f += N - I, H = !0) : f-- : f = N < I && N == I - 1 ? N - I : 0), I = c + f, H = H || N == c && !C, typeof d.type != "function" || N === I && O.__k !== d.__k ? typeof d.type == "function" || H ? d.__d !== void 0 ? (_ = d.__d, d.__d = void 0) : _ = h.nextSibling : _ = zc(e, h, _) : _ = $c(d, _, e), typeof r.type == "function" && (r.__d = _)));
  for (r.__e = p, c = X; c--; )
    w[c] != null && (typeof r.type == "function" && w[c].__e != null && w[c].__e == r.__d && (r.__d = w[c].__e.nextSibling), qc(w[c], w[c]));
}
function $c(e, n, r) {
  for (var t, o = e.__k, i = 0; o && i < o.length; i++)
    (t = o[i]) && (t.__ = e, n = typeof t.type == "function" ? $c(t, n, r) : zc(r, t.__e, n));
  return n;
}
function Mo(e, n) {
  return n = n || [], e == null || typeof e == "boolean" || (ci(e) ? e.some(function(r) {
    Mo(r, n);
  }) : n.push(e)), n;
}
function zc(e, n, r) {
  return r == null || r.parentNode !== e ? e.insertBefore(n, null) : n == r && n.parentNode != null || e.insertBefore(n, r), n.nextSibling;
}
function tO(e, n, r, t) {
  var o = e.key, i = e.type, s = r - 1, a = r + 1, _ = n[r];
  if (_ === null || _ && o == _.key && i === _.type)
    return r;
  if (t > (_ != null ? 1 : 0))
    for (; s >= 0 || a < n.length; ) {
      if (s >= 0) {
        if ((_ = n[s]) && o == _.key && i === _.type)
          return s;
        s--;
      }
      if (a < n.length) {
        if ((_ = n[a]) && o == _.key && i === _.type)
          return a;
        a++;
      }
    }
  return -1;
}
function oO(e, n, r, t, o) {
  var i;
  for (i in r)
    i === "children" || i === "key" || i in n || ko(e, i, null, r[i], t);
  for (i in n)
    o && typeof n[i] != "function" || i === "children" || i === "key" || i === "value" || i === "checked" || r[i] === n[i] || ko(e, i, n[i], r[i], t);
}
function wa(e, n, r) {
  n[0] === "-" ? e.setProperty(n, r ?? "") : e[n] = r == null ? "" : typeof r != "number" || rO.test(n) ? r : r + "px";
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
            r && n in r || wa(e.style, n, "");
        if (r)
          for (n in r)
            t && r[n] === t[n] || wa(e.style, n, r[n]);
      }
    else if (n[0] === "o" && n[1] === "n")
      i = n !== (n = n.replace(/Capture$/, "")), n = n.toLowerCase() in e ? n.toLowerCase().slice(2) : n.slice(2), e.l || (e.l = {}), e.l[n + i] = r, r ? t || e.addEventListener(n, i ? ka : Ma, i) : e.removeEventListener(n, i ? ka : Ma, i);
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
function Ma(e) {
  return this.l[e.type + !1](P.event ? P.event(e) : e);
}
function ka(e) {
  return this.l[e.type + !0](P.event ? P.event(e) : e);
}
function Jc(e, n, r, t, o, i, s, a, _, u) {
  var l, c, E, O, d, h, p, I, N, C, H, f, w, X, se, x = n.type;
  if (n.constructor !== void 0)
    return null;
  r.__h != null && (_ = r.__h, a = n.__e = r.__e, n.__h = null, i = [a]), (l = P.__b) && l(n);
  try {
    e:
      if (typeof x == "function") {
        if (I = n.props, N = (l = x.contextType) && t[l.__c], C = l ? N ? N.props.value : l.__ : t, r.__c ? p = (c = n.__c = r.__c).__ = c.__E : ("prototype" in x && x.prototype.render ? n.__c = c = new x(I, C) : (n.__c = c = new Cn(I, C), c.constructor = x, c.render = aO), N && N.sub(c), c.props = I, c.state || (c.state = {}), c.context = C, c.__n = t, E = c.__d = !0, c.__h = [], c._sb = []), c.__s == null && (c.__s = c.state), x.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = Xn({}, c.__s)), Xn(c.__s, x.getDerivedStateFromProps(I, c.__s))), O = c.props, d = c.state, c.__v = n, E)
          x.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), c.componentDidMount != null && c.__h.push(c.componentDidMount);
        else {
          if (x.getDerivedStateFromProps == null && I !== O && c.componentWillReceiveProps != null && c.componentWillReceiveProps(I, C), !c.__e && (c.shouldComponentUpdate != null && c.shouldComponentUpdate(I, c.__s, C) === !1 || n.__v === r.__v)) {
            for (n.__v !== r.__v && (c.props = I, c.state = c.__s, c.__d = !1), n.__e = r.__e, n.__k = r.__k, n.__k.forEach(function(F) {
              F && (F.__ = n);
            }), H = 0; H < c._sb.length; H++)
              c.__h.push(c._sb[H]);
            c._sb = [], c.__h.length && s.push(c);
            break e;
          }
          c.componentWillUpdate != null && c.componentWillUpdate(I, c.__s, C), c.componentDidUpdate != null && c.__h.push(function() {
            c.componentDidUpdate(O, d, h);
          });
        }
        if (c.context = C, c.props = I, c.__P = e, c.__e = !1, f = P.__r, w = 0, "prototype" in x && x.prototype.render) {
          for (c.state = c.__s, c.__d = !1, f && f(n), l = c.render(c.props, c.state, c.context), X = 0; X < c._sb.length; X++)
            c.__h.push(c._sb[X]);
          c._sb = [];
        } else
          do
            c.__d = !1, f && f(n), l = c.render(c.props, c.state, c.context), c.state = c.__s;
          while (c.__d && ++w < 25);
        c.state = c.__s, c.getChildContext != null && (t = Xn(Xn({}, t), c.getChildContext())), E || c.getSnapshotBeforeUpdate == null || (h = c.getSnapshotBeforeUpdate(O, d)), Kc(e, ci(se = l != null && l.type === lt && l.key == null ? l.props.children : l) ? se : [se], n, r, t, o, i, s, a, _, u), c.base = n.__e, n.__h = null, c.__h.length && s.push(c), p && (c.__E = c.__ = null);
      } else
        i == null && n.__v === r.__v ? (n.__k = r.__k, n.__e = r.__e) : n.__e = sO(r.__e, n, r, t, o, i, s, _, u);
    (l = P.diffed) && l(n);
  } catch (F) {
    n.__v = null, (_ || i != null) && (n.__e = a, n.__h = !!_, i[i.indexOf(a)] = null), P.__e(F, n, r);
  }
}
function iO(e, n, r) {
  for (var t = 0; t < r.length; t++)
    $s(r[t], r[++t], r[++t]);
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
function sO(e, n, r, t, o, i, s, a, _) {
  var u, l, c, E = r.props, O = n.props, d = n.type, h = 0;
  if (d === "svg" && (o = !0), i != null) {
    for (; h < i.length; h++)
      if ((u = i[h]) && "setAttribute" in u == !!d && (d ? u.localName === d : u.nodeType === 3)) {
        e = u, i[h] = null;
        break;
      }
  }
  if (e == null) {
    if (d === null)
      return document.createTextNode(O);
    e = o ? document.createElementNS("http://www.w3.org/2000/svg", d) : document.createElement(d, O.is && O), i = null, a = !1;
  }
  if (d === null)
    E === O || a && e.data === O || (e.data = O);
  else {
    if (i = i && Ks.call(e.childNodes), l = (E = r.props || co).dangerouslySetInnerHTML, c = O.dangerouslySetInnerHTML, !a) {
      if (i != null)
        for (E = {}, h = 0; h < e.attributes.length; h++)
          E[e.attributes[h].name] = e.attributes[h].value;
      (c || l) && (c && (l && c.__html == l.__html || c.__html === e.innerHTML) || (e.innerHTML = c && c.__html || ""));
    }
    if (oO(e, O, E, o, a), c)
      n.__k = [];
    else if (Kc(e, ci(h = n.props.children) ? h : [h], n, r, t, o && d !== "foreignObject", i, s, i ? i[0] : r.__k && Po(r, 0), a, _), i != null)
      for (h = i.length; h--; )
        i[h] != null && Xc(i[h]);
    a || ("value" in O && (h = O.value) !== void 0 && (h !== e.value || d === "progress" && !h || d === "option" && h !== E.value) && ko(e, "value", h, E.value, !1), "checked" in O && (h = O.checked) !== void 0 && h !== e.checked && ko(e, "checked", h, E.checked, !1));
  }
  return e;
}
function $s(e, n, r) {
  try {
    typeof e == "function" ? e(n) : e.current = n;
  } catch (t) {
    P.__e(t, r);
  }
}
function qc(e, n, r) {
  var t, o;
  if (P.unmount && P.unmount(e), (t = e.ref) && (t.current && t.current !== e.__e || $s(t, null, n)), (t = e.__c) != null) {
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
      t[o] && qc(t[o], n, r || typeof e.type != "function");
  r || e.__e == null || Xc(e.__e), e.__ = e.__e = e.__d = void 0;
}
function aO(e, n, r) {
  return this.constructor(e, r);
}
Ks = Wc.slice, P = { __e: function(e, n, r, t) {
  for (var o, i, s; n = n.__; )
    if ((o = n.__c) && !o.__)
      try {
        if ((i = o.constructor) && i.getDerivedStateFromError != null && (o.setState(i.getDerivedStateFromError(e)), s = o.__d), o.componentDidCatch != null && (o.componentDidCatch(e, t || {}), s = o.__d), s)
          return o.__E = o;
      } catch (a) {
        e = a;
      }
  throw e;
} }, Fc = 0, Cn.prototype.setState = function(e, n) {
  var r;
  r = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Xn({}, this.state), typeof e == "function" && (e = e(Xn({}, r), this.props)), e && Xn(r, e), e != null && this.__v && (n && this._sb.push(n), Pa(this));
}, Cn.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Pa(this));
}, Cn.prototype.render = lt, sr = [], Vc = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Qi = function(e, n) {
  return e.__v.__b - n.__v.__b;
}, wo.__r = 0;
var dt, le, Si, xa, es = 0, Zc = [], ho = [], La = P.__b, Ba = P.__r, ja = P.diffed, Fa = P.__c, Va = P.unmount;
function zs(e, n) {
  P.__h && P.__h(le, e, es || n), es = 0;
  var r = le.__H || (le.__H = { __: [], __h: [] });
  return e >= r.__.length && r.__.push({ __V: ho }), r.__[e];
}
function _O(e) {
  return es = 1, uO(Qc, e);
}
function uO(e, n, r) {
  var t = zs(dt++, 2);
  if (t.t = e, !t.__c && (t.__ = [r ? r(n) : Qc(void 0, n), function(a) {
    var _ = t.__N ? t.__N[0] : t.__[0], u = t.t(_, a);
    _ !== u && (t.__N = [u, t.__[1]], t.__c.setState({}));
  }], t.__c = le, !le.u)) {
    var o = function(a, _, u) {
      if (!t.__c.__H)
        return !0;
      var l = t.__c.__H.__.filter(function(E) {
        return E.__c;
      });
      if (l.every(function(E) {
        return !E.__N;
      }))
        return !i || i.call(this, a, _, u);
      var c = !1;
      return l.forEach(function(E) {
        if (E.__N) {
          var O = E.__[0];
          E.__ = E.__N, E.__N = void 0, O !== E.__[0] && (c = !0);
        }
      }), !(!c && t.__c.props === a) && (!i || i.call(this, a, _, u));
    };
    le.u = !0;
    var i = le.shouldComponentUpdate, s = le.componentWillUpdate;
    le.componentWillUpdate = function(a, _, u) {
      if (this.__e) {
        var l = i;
        i = void 0, o(a, _, u), i = l;
      }
      s && s.call(this, a, _, u);
    }, le.shouldComponentUpdate = o;
  }
  return t.__N || t.__;
}
function cO(e, n) {
  var r = zs(dt++, 3);
  !P.__s && mO(r.__H, n) && (r.__ = e, r.i = n, le.__H.__h.push(r));
}
function lO(e) {
  var n = zs(dt++, 10), r = _O();
  return n.__ = e, le.componentDidCatch || (le.componentDidCatch = function(t, o) {
    n.__ && n.__(t, o), r[1](t);
  }), [r[0], function() {
    r[1](void 0);
  }];
}
function dO() {
  for (var e; e = Zc.shift(); )
    if (e.__P && e.__H)
      try {
        e.__H.__h.forEach(mo), e.__H.__h.forEach(ns), e.__H.__h = [];
      } catch (n) {
        e.__H.__h = [], P.__e(n, e.__v);
      }
}
P.__b = function(e) {
  le = null, La && La(e);
}, P.__r = function(e) {
  Ba && Ba(e), dt = 0;
  var n = (le = e.__c).__H;
  n && (Si === le ? (n.__h = [], le.__h = [], n.__.forEach(function(r) {
    r.__N && (r.__ = r.__N), r.__V = ho, r.__N = r.i = void 0;
  })) : (n.__h.forEach(mo), n.__h.forEach(ns), n.__h = [], dt = 0)), Si = le;
}, P.diffed = function(e) {
  ja && ja(e);
  var n = e.__c;
  n && n.__H && (n.__H.__h.length && (Zc.push(n) !== 1 && xa === P.requestAnimationFrame || ((xa = P.requestAnimationFrame) || hO)(dO)), n.__H.__.forEach(function(r) {
    r.i && (r.__H = r.i), r.__V !== ho && (r.__ = r.__V), r.i = void 0, r.__V = ho;
  })), Si = le = null;
}, P.__c = function(e, n) {
  n.some(function(r) {
    try {
      r.__h.forEach(mo), r.__h = r.__h.filter(function(t) {
        return !t.__ || ns(t);
      });
    } catch (t) {
      n.some(function(o) {
        o.__h && (o.__h = []);
      }), n = [], P.__e(t, r.__v);
    }
  }), Fa && Fa(e, n);
}, P.unmount = function(e) {
  Va && Va(e);
  var n, r = e.__c;
  r && r.__H && (r.__H.__.forEach(function(t) {
    try {
      mo(t);
    } catch (o) {
      n = o;
    }
  }), r.__H = void 0, n && P.__e(n, r.__v));
};
var Wa = typeof requestAnimationFrame == "function";
function hO(e) {
  var n, r = function() {
    clearTimeout(t), Wa && cancelAnimationFrame(n), setTimeout(e);
  }, t = setTimeout(r, 100);
  Wa && (n = requestAnimationFrame(r));
}
function mo(e) {
  var n = le, r = e.__c;
  typeof r == "function" && (e.__c = void 0, r()), le = n;
}
function ns(e) {
  var n = le;
  e.__c = e.__(), le = n;
}
function mO(e, n) {
  return !e || e.length !== n.length || n.some(function(r, t) {
    return r !== e[t];
  });
}
function Qc(e, n) {
  return typeof n == "function" ? n(e) : n;
}
const pO = ({ errorInfo: e }) => /* @__PURE__ */ ve("div", { children: [
  "Custom Error Boundary. ",
  /* @__PURE__ */ U("br", {})
] }), fO = ({ children: e }) => {
  const [n] = lO();
  return console.error(n), n ? /* @__PURE__ */ U(pO, { errorInfo: n }) : /* @__PURE__ */ U(Pl, { children: e });
}, TO = ({ children: e }) => /* @__PURE__ */ U(fO, { children: e }), el = ls({}), EO = async () => Promise.all([
  import("./react-spring_web.modern-d55cb301.mjs"),
  import("./use-gesture-react.esm-7899cdd1.mjs")
]), OO = ({ children: e }) => {
  const n = ce(), r = ce(), t = jc(), o = async () => {
    const [s, a] = await EO();
    n.current = s, r.current = a, t.on();
  };
  ye(() => {
    o();
  }, []);
  const i = Pi(() => ({
    Spring: n.current,
    Gesture: r.current,
    isLoaded: t.val
  }), [t.val]);
  return /* @__PURE__ */ U(el.Provider, { value: i, children: /* @__PURE__ */ U(yo, { when: t.val, children: e }) });
}, nl = () => yn(el), rs = (e) => typeof e == "object" && e !== null, rl = (e) => typeof e == "string", RO = (e) => typeof e == "function";
class Pt {
  get(n, r) {
    const t = localStorage.getItem(n);
    return t ? NO(t) ? JSON.parse(t) : t : r;
  }
  set(n, r) {
    if (n in ZE) {
      if (rl(r))
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
const NO = (e) => {
  try {
    JSON.parse(e);
  } catch {
    return !1;
  }
  return !0;
};
class bO {
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
if (!ph)
  throw new Error("mobx-react-lite@3 requires mobx at least version 6 to be available");
function IO(e) {
  e();
}
function gO(e) {
  e || (e = IO), oh({ reactionScheduler: e });
}
function AO(e) {
  return ih(e);
}
var SO = 1e4, GO = 1e4, vO = (
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
          t === void 0 && (t = SO), clearTimeout(r.sweepTimeout), r.sweepTimeout = void 0;
          var o = Date.now();
          r.registrations.forEach(function(i, s) {
            o - i.registeredAt >= t && (r.finalize(i.value), r.registrations.delete(s));
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
        this.sweepTimeout === void 0 && (this.sweepTimeout = setTimeout(this.sweep, GO));
      }
    }), e;
  }()
), CO = typeof FinalizationRegistry < "u" ? FinalizationRegistry : vO, ts = new CO(function(e) {
  var n;
  (n = e.reaction) === null || n === void 0 || n.dispose(), e.reaction = null;
}), Xa = globalThis && globalThis.__read || function(e, n) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var t = r.call(e), o, i = [], s;
  try {
    for (; (n === void 0 || n-- > 0) && !(o = t.next()).done; )
      i.push(o.value);
  } catch (a) {
    s = { error: a };
  } finally {
    try {
      o && !o.done && (r = t.return) && r.call(t);
    } finally {
      if (s)
        throw s.error;
    }
  }
  return i;
};
function Ya(e) {
  return "observer".concat(e);
}
var DO = (
  /** @class */
  function() {
    function e() {
    }
    return e;
  }()
);
function UO() {
  return new DO();
}
function HO(e, n) {
  n === void 0 && (n = "observed");
  var r = Xa(me.useState(UO), 1), t = r[0], o = Xa(me.useState(), 2), i = o[1], s = function() {
    return i([]);
  }, a = me.useRef(null);
  a.current || (a.current = {
    reaction: null,
    mounted: !1,
    changedBeforeMount: !1
  });
  var _ = a.current;
  _.reaction || (_.reaction = new tt(Ya(n), function() {
    _.mounted ? s() : _.changedBeforeMount = !0;
  }), ts.register(t, _, _)), me.useDebugValue(_.reaction, AO), me.useEffect(function() {
    return ts.unregister(_), _.mounted = !0, _.reaction ? _.changedBeforeMount && (_.changedBeforeMount = !1, s()) : (_.reaction = new tt(Ya(n), function() {
      s();
    }), s()), function() {
      _.reaction.dispose(), _.reaction = null, _.mounted = !1, _.changedBeforeMount = !1;
    };
  }, []);
  var u, l;
  if (_.reaction.track(function() {
    try {
      u = e();
    } catch (c) {
      l = c;
    }
  }), l)
    throw l;
  return u;
}
var tl = typeof Symbol == "function" && Symbol.for, Ka = tl ? Symbol.for("react.forward_ref") : typeof To == "function" && To(function(e) {
  return null;
}).$$typeof, $a = tl ? Symbol.for("react.memo") : typeof Gr == "function" && Gr(function(e) {
  return null;
}).$$typeof;
function tr(e, n) {
  var r;
  if ($a && e.$$typeof === $a)
    throw new Error("[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.");
  var t = (r = n?.forwardRef) !== null && r !== void 0 ? r : !1, o = e, i = e.displayName || e.name;
  if (Ka && e.$$typeof === Ka && (t = !0, o = e.render, typeof o != "function"))
    throw new Error("[mobx-react-lite] `render` property of ForwardRef was not a function");
  var s = function(a, _) {
    return HO(function() {
      return o(a, _);
    }, i);
  };
  return i !== "" && (s.displayName = i), e.contextTypes && (s.contextTypes = e.contextTypes), t && (s = To(s)), s = Gr(s), PO(e, s), s;
}
var yO = {
  $$typeof: !0,
  render: !0,
  compare: !0,
  type: !0,
  // Don't redefine `displayName`,
  // it's defined as getter-setter pair on `memo` (see #3192).
  displayName: !0
};
function PO(e, n) {
  Object.keys(e).forEach(function(r) {
    yO[r] || Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(e, r));
  });
}
globalThis && globalThis.__read;
var Gi;
gO(kl);
Gi = ts.finalizeAllImmediately;
const wO = (e) => {
  const { Spring: r, Gesture: t } = nl(), [{ y: o }, i] = r.useSpring(() => ({ y: 300 })), s = () => {
    i.start({ y: 0, immediate: !1, config: r.config.gentle });
  }, a = (c = 0) => {
    e(), i.start({ y: 300, immediate: !1, config: { ...r.config.stiff, velocity: c } });
  }, _ = t.useDrag(
    ({ last: c, velocity: [, E], direction: [, O], offset: [, d], cancel: h }) => {
      d < -70 && h(), c ? d > 300 * 0.5 || E > 0.5 && O === 1 ? a(E) : s() : i.start({ y: d, immediate: O === -1 });
    },
    { from: () => [0, o.get()], filterTaps: !0, bounds: { top: 0 }, rubberband: !0 }
  ), u = o.to((c) => c < 300 ? "block" : "none");
  return {
    toggle: (c) => {
      c ? s() : a();
    },
    open: s,
    close: a,
    bind: _,
    div: r.a.div,
    springs: {
      display: u,
      y: o
    },
    terminalHeight: 300
  };
}, wt = () => yn(Dl), MO = () => wt().state, or = () => yn(Lt).actions, Fr = () => yn(Lt), Mt = () => yn(Lt).getters, ol = () => yn(Lt).services, kO = [
  { label: "Terminal", key: "terminal" },
  { label: "Test cases", key: "test_cases" }
], xO = () => {
  const e = wt(), n = e.state.selectedTerminalTab, r = vr((t) => {
    e.update({
      selectedTerminalTab: t
    });
  }, []);
  return {
    key: n,
    set: r,
    val: kO
  };
}, LO = (e) => {
  const { Spring: n } = nl(), [r, t] = n.useSpring(() => ({
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
var il = { exports: {} }, re = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var za;
function BO() {
  if (za)
    return re;
  za = 1;
  var e = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), t = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), a = Symbol.for("react.server_context"), _ = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), O = Symbol.for("react.offscreen"), d;
  d = Symbol.for("react.module.reference");
  function h(p) {
    if (typeof p == "object" && p !== null) {
      var I = p.$$typeof;
      switch (I) {
        case e:
          switch (p = p.type, p) {
            case r:
            case o:
            case t:
            case u:
            case l:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case a:
                case s:
                case _:
                case E:
                case c:
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
  return re.ContextConsumer = s, re.ContextProvider = i, re.Element = e, re.ForwardRef = _, re.Fragment = r, re.Lazy = E, re.Memo = c, re.Portal = n, re.Profiler = o, re.StrictMode = t, re.Suspense = u, re.SuspenseList = l, re.isAsyncMode = function() {
    return !1;
  }, re.isConcurrentMode = function() {
    return !1;
  }, re.isContextConsumer = function(p) {
    return h(p) === s;
  }, re.isContextProvider = function(p) {
    return h(p) === i;
  }, re.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === e;
  }, re.isForwardRef = function(p) {
    return h(p) === _;
  }, re.isFragment = function(p) {
    return h(p) === r;
  }, re.isLazy = function(p) {
    return h(p) === E;
  }, re.isMemo = function(p) {
    return h(p) === c;
  }, re.isPortal = function(p) {
    return h(p) === n;
  }, re.isProfiler = function(p) {
    return h(p) === o;
  }, re.isStrictMode = function(p) {
    return h(p) === t;
  }, re.isSuspense = function(p) {
    return h(p) === u;
  }, re.isSuspenseList = function(p) {
    return h(p) === l;
  }, re.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === r || p === o || p === t || p === u || p === l || p === O || typeof p == "object" && p !== null && (p.$$typeof === E || p.$$typeof === c || p.$$typeof === i || p.$$typeof === s || p.$$typeof === _ || p.$$typeof === d || p.getModuleId !== void 0);
  }, re.typeOf = h, re;
}
il.exports = BO();
var sl = il.exports;
function jO(e) {
  function n(v, S, D, L, m) {
    for (var Q = 0, g = 0, he = 0, ee = 0, oe, B, Ie = 0, xe = 0, z, He = z = oe = 0, ne = 0, ge = 0, Wr = 0, Ae = 0, Bt = D.length, Xr = Bt - 1, Ze, k = "", fe = "", hi = "", mi = "", Ln; ne < Bt; ) {
      if (B = D.charCodeAt(ne), ne === Xr && g + ee + he + Q !== 0 && (g !== 0 && (B = g === 47 ? 10 : 47), ee = he = Q = 0, Bt++, Xr++), g + ee + he + Q === 0) {
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
            switch (z = D.substring(Ae, ne), oe === 0 && (oe = (k = k.replace(c, "").trim()).charCodeAt(0)), oe) {
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
                if (z = n(S, ge, z, B, m + 1), Ae = z.length, 0 < Ue && (ge = r(de, k, Wr), Ln = a(3, z, ge, S, Ce, be, Ae, B, m, L), k = ge.join(""), Ln !== void 0 && (Ae = (z = Ln.trim()).length) === 0 && (B = 0, z = "")), 0 < Ae)
                  switch (B) {
                    case 115:
                      k = k.replace(w, s);
                    case 100:
                    case 109:
                    case 45:
                      z = k + "{" + z + "}";
                      break;
                    case 107:
                      k = k.replace(N, "$1 $2"), z = k + "{" + z + "}", z = V === 1 || V === 2 && i("@" + z, 3) ? "@-webkit-" + z + "@" + z : "@" + z;
                      break;
                    default:
                      z = k + z, L === 112 && (z = (fe += z, ""));
                  }
                else
                  z = "";
                break;
              default:
                z = n(S, r(S, k, Wr), z, L, m + 1);
            }
            hi += z, z = Wr = ge = He = oe = 0, k = "", B = D.charCodeAt(++ne);
            break;
          case 125:
          case 59:
            if (k = (0 < ge ? k.replace(E, "") : k).trim(), 1 < (Ae = k.length))
              switch (He === 0 && (oe = k.charCodeAt(0), oe === 45 || 96 < oe && 123 > oe) && (Ae = (k = k.replace(" ", ":")).length), 0 < Ue && (Ln = a(1, k, S, v, Ce, be, fe.length, L, m, L)) !== void 0 && (Ae = (k = Ln.trim()).length) === 0 && (k = "\0\0"), oe = k.charCodeAt(0), B = k.charCodeAt(1), oe) {
                case 0:
                  break;
                case 64:
                  if (B === 105 || B === 99) {
                    mi += k + D.charAt(ne);
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
          g === 47 ? g = 0 : 1 + oe === 0 && L !== 107 && 0 < k.length && (ge = 1, k += "\0"), 0 < Ue * xn && a(0, k, S, v, Ce, be, fe.length, L, m, L), be = 1, Ce++;
          break;
        case 59:
        case 125:
          if (g + ee + he + Q === 0) {
            be++;
            break;
          }
        default:
          switch (be++, Ze = D.charAt(ne), B) {
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
              g + he + ee + Q === 0 && (ge = 1, Ze += "\r");
              break;
            case 34:
            case 39:
              g === 0 && (ee = ee === B ? 0 : ee === 0 ? B : ee);
              break;
            case 91:
              ee + g + he === 0 && Q++;
              break;
            case 93:
              ee + g + he === 0 && Q--;
              break;
            case 41:
              ee + g + Q === 0 && he--;
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
                he++;
              }
              break;
            case 64:
              g + he + ee + Q + He + z === 0 && (z = 1);
              break;
            case 42:
            case 47:
              if (!(0 < ee + Q + he))
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
      if (ge = S, 0 < Ue && (Ln = a(2, fe, ge, v, Ce, be, Ae, L, m, L), Ln !== void 0 && (fe = Ln).length === 0))
        return mi + fe + hi;
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
    return mi + fe + hi;
  }
  function r(v, S, D) {
    var L = S.trim().split(p);
    S = L;
    var m = L.length, Q = v.length;
    switch (Q) {
      case 0:
      case 1:
        var g = 0;
        for (v = Q === 0 ? "" : v[0] + " "; g < m; ++g)
          S[g] = t(v, S[g], D).trim();
        break;
      default:
        var he = g = 0;
        for (S = []; g < m; ++g)
          for (var ee = 0; ee < Q; ++ee)
            S[he++] = t(v[ee] + " ", L[g], D).trim();
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
    var m = v + ";", Q = 2 * S + 3 * D + 4 * L;
    if (Q === 944) {
      v = m.indexOf(":", 9) + 1;
      var g = m.substring(v, m.length - 1).trim();
      return g = m.substring(0, v).trim() + g + ";", V === 1 || V === 2 && i(g, 1) ? "-webkit-" + g + g : g;
    }
    if (V === 0 || V === 2 && !i(m, 1))
      return m;
    switch (Q) {
      case 1015:
        return m.charCodeAt(10) === 97 ? "-webkit-" + m + m : m;
      case 951:
        return m.charCodeAt(3) === 116 ? "-webkit-" + m + m : m;
      case 963:
        return m.charCodeAt(5) === 110 ? "-webkit-" + m + m : m;
      case 1009:
        if (m.charCodeAt(4) !== 100)
          break;
      case 969:
      case 942:
        return "-webkit-" + m + m;
      case 978:
        return "-webkit-" + m + "-moz-" + m + m;
      case 1019:
      case 983:
        return "-webkit-" + m + "-moz-" + m + "-ms-" + m + m;
      case 883:
        if (m.charCodeAt(8) === 45)
          return "-webkit-" + m + m;
        if (0 < m.indexOf("image-set(", 11))
          return m.replace(Fe, "$1-webkit-$2") + m;
        break;
      case 932:
        if (m.charCodeAt(4) === 45)
          switch (m.charCodeAt(5)) {
            case 103:
              return "-webkit-box-" + m.replace("-grow", "") + "-webkit-" + m + "-ms-" + m.replace("grow", "positive") + m;
            case 115:
              return "-webkit-" + m + "-ms-" + m.replace("shrink", "negative") + m;
            case 98:
              return "-webkit-" + m + "-ms-" + m.replace("basis", "preferred-size") + m;
          }
        return "-webkit-" + m + "-ms-" + m + m;
      case 964:
        return "-webkit-" + m + "-ms-flex-" + m + m;
      case 1023:
        if (m.charCodeAt(8) !== 99)
          break;
        return g = m.substring(m.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + g + "-webkit-" + m + "-ms-flex-pack" + g + m;
      case 1005:
        return d.test(m) ? m.replace(O, ":-webkit-") + m.replace(O, ":-moz-") + m : m;
      case 1e3:
        switch (g = m.substring(13).trim(), S = g.indexOf("-") + 1, g.charCodeAt(0) + g.charCodeAt(S)) {
          case 226:
            g = m.replace(f, "tb");
            break;
          case 232:
            g = m.replace(f, "tb-rl");
            break;
          case 220:
            g = m.replace(f, "lr");
            break;
          default:
            return m;
        }
        return "-webkit-" + m + "-ms-" + g + m;
      case 1017:
        if (m.indexOf("sticky", 9) === -1)
          break;
      case 975:
        switch (S = (m = v).length - 10, g = (m.charCodeAt(S) === 33 ? m.substring(0, S) : m).substring(v.indexOf(":", 7) + 1).trim(), Q = g.charCodeAt(0) + (g.charCodeAt(7) | 0)) {
          case 203:
            if (111 > g.charCodeAt(8))
              break;
          case 115:
            m = m.replace(g, "-webkit-" + g) + ";" + m;
            break;
          case 207:
          case 102:
            m = m.replace(g, "-webkit-" + (102 < Q ? "inline-" : "") + "box") + ";" + m.replace(g, "-webkit-" + g) + ";" + m.replace(g, "-ms-" + g + "box") + ";" + m;
        }
        return m + ";";
      case 938:
        if (m.charCodeAt(5) === 45)
          switch (m.charCodeAt(6)) {
            case 105:
              return g = m.replace("-items", ""), "-webkit-" + m + "-webkit-box-" + g + "-ms-flex-" + g + m;
            case 115:
              return "-webkit-" + m + "-ms-flex-item-" + m.replace(se, "") + m;
            default:
              return "-webkit-" + m + "-ms-flex-line-pack" + m.replace("align-content", "").replace(se, "") + m;
          }
        break;
      case 973:
      case 989:
        if (m.charCodeAt(3) !== 45 || m.charCodeAt(4) === 122)
          break;
      case 931:
      case 953:
        if (F.test(v) === !0)
          return (g = v.substring(v.indexOf(":") + 1)).charCodeAt(0) === 115 ? o(v.replace("stretch", "fill-available"), S, D, L).replace(":fill-available", ":stretch") : m.replace(g, "-webkit-" + g) + m.replace(g, "-moz-" + g.replace("fill-", "")) + m;
        break;
      case 962:
        if (m = "-webkit-" + m + (m.charCodeAt(5) === 102 ? "-ms-" + m : "") + m, D + L === 211 && m.charCodeAt(13) === 105 && 0 < m.indexOf("transform", 10))
          return m.substring(0, m.indexOf(";", 27) + 1).replace(h, "$1-webkit-$2") + m;
    }
    return m;
  }
  function i(v, S) {
    var D = v.indexOf(S === 1 ? ":" : "{"), L = v.substring(0, S !== 3 ? D : 10);
    return D = v.substring(D + 1, v.length - 1), kn(S !== 2 ? L : L.replace(x, "$1"), D, S);
  }
  function s(v, S) {
    var D = o(S, S.charCodeAt(0), S.charCodeAt(1), S.charCodeAt(2));
    return D !== S + ";" ? D.replace(X, " or ($1)").substring(4) : "(" + S + ")";
  }
  function a(v, S, D, L, m, Q, g, he, ee, oe) {
    for (var B = 0, Ie = S, xe; B < Ue; ++B)
      switch (xe = ke[B].call(l, v, Ie, D, L, m, Q, g, he, ee, oe)) {
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
  function l(v, S) {
    var D = v;
    if (33 > D.charCodeAt(0) && (D = D.trim()), pe = D, D = [pe], 0 < Ue) {
      var L = a(-1, S, D, D, Ce, be, 0, 0, 0, 0);
      L !== void 0 && typeof L == "string" && (S = L);
    }
    var m = n(de, D, S, 0, 0);
    return 0 < Ue && (L = a(-2, m, D, D, Ce, be, m.length, 0, 0, 0), L !== void 0 && (m = L)), pe = "", De = 0, be = Ce = 1, m;
  }
  var c = /^\0+/g, E = /[\0\r\f]/g, O = /: */g, d = /zoo|gra/, h = /([,: ])(transform)/g, p = /,\r+?/g, I = /([\t\r\n ])*\f?&/g, N = /@(k\w+)\s*(\S*)\s*/, C = /::(place)/g, H = /:(read-only)/g, f = /[svh]\w+-[tblr]{2}/, w = /\(\s*(.*)\s*\)/g, X = /([\s\S]*?);/g, se = /-self|flex-/g, x = /[^]*?(:[rp][el]a[\w-]+)[^]*/, F = /stretch|:\s*\w+\-(?:conte|avail)/, Fe = /([^-])(image-set\()/, be = 1, Ce = 1, De = 0, V = 1, de = [], ke = [], Ue = 0, kn = null, xn = 0, pe = "";
  return l.use = _, l.set = u, e !== void 0 && u(e), l;
}
var FO = {
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
function VO(e) {
  var n = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return n[r] === void 0 && (n[r] = e(r)), n[r];
  };
}
var WO = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Ja = /* @__PURE__ */ VO(
  function(e) {
    return WO.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), al = { exports: {} }, te = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qa;
function XO() {
  if (qa)
    return te;
  qa = 1;
  var e = typeof Symbol == "function" && Symbol.for, n = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, t = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, _ = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, c = e ? Symbol.for("react.suspense") : 60113, E = e ? Symbol.for("react.suspense_list") : 60120, O = e ? Symbol.for("react.memo") : 60115, d = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, p = e ? Symbol.for("react.fundamental") : 60117, I = e ? Symbol.for("react.responder") : 60118, N = e ? Symbol.for("react.scope") : 60119;
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
            case c:
              return f;
            default:
              switch (f = f && f.$$typeof, f) {
                case a:
                case l:
                case d:
                case O:
                case s:
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
  return te.AsyncMode = _, te.ConcurrentMode = u, te.ContextConsumer = a, te.ContextProvider = s, te.Element = n, te.ForwardRef = l, te.Fragment = t, te.Lazy = d, te.Memo = O, te.Portal = r, te.Profiler = i, te.StrictMode = o, te.Suspense = c, te.isAsyncMode = function(f) {
    return H(f) || C(f) === _;
  }, te.isConcurrentMode = H, te.isContextConsumer = function(f) {
    return C(f) === a;
  }, te.isContextProvider = function(f) {
    return C(f) === s;
  }, te.isElement = function(f) {
    return typeof f == "object" && f !== null && f.$$typeof === n;
  }, te.isForwardRef = function(f) {
    return C(f) === l;
  }, te.isFragment = function(f) {
    return C(f) === t;
  }, te.isLazy = function(f) {
    return C(f) === d;
  }, te.isMemo = function(f) {
    return C(f) === O;
  }, te.isPortal = function(f) {
    return C(f) === r;
  }, te.isProfiler = function(f) {
    return C(f) === i;
  }, te.isStrictMode = function(f) {
    return C(f) === o;
  }, te.isSuspense = function(f) {
    return C(f) === c;
  }, te.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === t || f === u || f === i || f === o || f === c || f === E || typeof f == "object" && f !== null && (f.$$typeof === d || f.$$typeof === O || f.$$typeof === s || f.$$typeof === a || f.$$typeof === l || f.$$typeof === p || f.$$typeof === I || f.$$typeof === N || f.$$typeof === h);
  }, te.typeOf = C, te;
}
al.exports = XO();
var YO = al.exports, Js = YO, KO = {
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
}, $O = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, zO = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, _l = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, qs = {};
qs[Js.ForwardRef] = zO;
qs[Js.Memo] = _l;
function Za(e) {
  return Js.isMemo(e) ? _l : qs[e.$$typeof] || KO;
}
var JO = Object.defineProperty, qO = Object.getOwnPropertyNames, Qa = Object.getOwnPropertySymbols, ZO = Object.getOwnPropertyDescriptor, QO = Object.getPrototypeOf, e_ = Object.prototype;
function ul(e, n, r) {
  if (typeof n != "string") {
    if (e_) {
      var t = QO(n);
      t && t !== e_ && ul(e, t, r);
    }
    var o = qO(n);
    Qa && (o = o.concat(Qa(n)));
    for (var i = Za(e), s = Za(n), a = 0; a < o.length; ++a) {
      var _ = o[a];
      if (!$O[_] && !(r && r[_]) && !(s && s[_]) && !(i && i[_])) {
        var u = ZO(n, _);
        try {
          JO(e, _, u);
        } catch {
        }
      }
    }
  }
  return e;
}
var eR = ul;
const nR = /* @__PURE__ */ Ch(eR);
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
}, os = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !sl.typeOf(e);
}, xo = Object.freeze([]), $n = Object.freeze({});
function ht(e) {
  return typeof e == "function";
}
function r_(e) {
  return e.displayName || e.name || "Component";
}
function Zs(e) {
  return e && typeof e.styledComponentId == "string";
}
var wr = typeof process < "u" && ({ GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_026a82c8-4fcd-40a9-84f6-eb5ecd61cd50", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "npm/8.19.4 node/v16.20.1 linux x64 workspaces/false ci/github-actions", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_026a82c8-4fcd-40a9-84f6-eb5ecd61cd50", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", npm_config_noproxy: "", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-8.2", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "", npm_config_userconfig: "/home/runner/.npmrc", npm_config_local_prefix: "/home/runner/work/CodeGear/CodeGear", SYSTEMD_EXEC_PID: "660", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", COLOR: "0", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.5/x64", NVM_DIR: "/home/runner/.nvm", npm_config_metrics_registry: "https://registry.npmjs.org/", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230702.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chrome_driver", JOURNAL_STREAM: "8:15284", GITHUB_WORKFLOW: "CodeGear CI", _: "/opt/hostedtoolcache/node/16.20.1/x64/bin/npm", npm_config_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", GITHUB_RUN_ID: "5523471966", npm_config_cache: "/home/runner/.npm", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "ac0f84c8aa72cfb46bf37148899f504dfe41c131", GITHUB_BASE_REF: "", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/heads/settings-popup", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", npm_config_node_gyp: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.bin:/home/runner/work/CodeGear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_b8fc4c49-12db-4c27-b275-7e4b48143402", INVOCATION_ID: "c05c8d76deac491f8c661337131feb1a", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.10/x64", NODE: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "14", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 5", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "settings-popup", GITHUB_REPOSITORY: "Gearonix/CodeGear", npm_lifecycle_script: " nx run-many --targets=build --all", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", STATS_NM: "true", npm_package_version: "0.0.0", npm_lifecycle_event: "build", NODE_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/bin/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/node_modules", GITHUB_REF_PROTECTED: "false", npm_config_strict_peer_dependencies: "", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "ac0f84c8aa72cfb46bf37148899f504dfe41c131", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/heads/settings-popup", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", npm_config_globalconfig: "/opt/hostedtoolcache/node/16.20.1/x64/etc/npmrc", npm_config_init_module: "/home/runner/.npm-init.js", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_026a82c8-4fcd-40a9-84f6-eb5ecd61cd50", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", npm_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/bin/npm-cli.js", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "push", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_026a82c8-4fcd-40a9-84f6-eb5ecd61cd50", npm_config_global_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", npm_command: "run-script", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.146+9/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_026a82c8-4fcd-40a9-84f6-eb5ecd61cd50", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", EDITOR: "vi", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/5407298341986919404", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "5407298341986919404", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.REACT_APP_SC_ATTR || { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_026a82c8-4fcd-40a9-84f6-eb5ecd61cd50", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "npm/8.19.4 node/v16.20.1 linux x64 workspaces/false ci/github-actions", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_026a82c8-4fcd-40a9-84f6-eb5ecd61cd50", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", npm_config_noproxy: "", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-8.2", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "", npm_config_userconfig: "/home/runner/.npmrc", npm_config_local_prefix: "/home/runner/work/CodeGear/CodeGear", SYSTEMD_EXEC_PID: "660", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", COLOR: "0", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.5/x64", NVM_DIR: "/home/runner/.nvm", npm_config_metrics_registry: "https://registry.npmjs.org/", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230702.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chrome_driver", JOURNAL_STREAM: "8:15284", GITHUB_WORKFLOW: "CodeGear CI", _: "/opt/hostedtoolcache/node/16.20.1/x64/bin/npm", npm_config_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", GITHUB_RUN_ID: "5523471966", npm_config_cache: "/home/runner/.npm", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "ac0f84c8aa72cfb46bf37148899f504dfe41c131", GITHUB_BASE_REF: "", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/heads/settings-popup", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", npm_config_node_gyp: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.bin:/home/runner/work/CodeGear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_b8fc4c49-12db-4c27-b275-7e4b48143402", INVOCATION_ID: "c05c8d76deac491f8c661337131feb1a", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.10/x64", NODE: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "14", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 5", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "settings-popup", GITHUB_REPOSITORY: "Gearonix/CodeGear", npm_lifecycle_script: " nx run-many --targets=build --all", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", STATS_NM: "true", npm_package_version: "0.0.0", npm_lifecycle_event: "build", NODE_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/bin/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/node_modules", GITHUB_REF_PROTECTED: "false", npm_config_strict_peer_dependencies: "", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "ac0f84c8aa72cfb46bf37148899f504dfe41c131", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/heads/settings-popup", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", npm_config_globalconfig: "/opt/hostedtoolcache/node/16.20.1/x64/etc/npmrc", npm_config_init_module: "/home/runner/.npm-init.js", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_026a82c8-4fcd-40a9-84f6-eb5ecd61cd50", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", npm_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/bin/npm-cli.js", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "push", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_026a82c8-4fcd-40a9-84f6-eb5ecd61cd50", npm_config_global_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", npm_command: "run-script", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.146+9/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_026a82c8-4fcd-40a9-84f6-eb5ecd61cd50", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", EDITOR: "vi", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/5407298341986919404", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "5407298341986919404", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.SC_ATTR) || "data-styled", Qs = typeof window < "u" && "HTMLElement" in window, rR = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_026a82c8-4fcd-40a9-84f6-eb5ecd61cd50", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "npm/8.19.4 node/v16.20.1 linux x64 workspaces/false ci/github-actions", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_026a82c8-4fcd-40a9-84f6-eb5ecd61cd50", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", npm_config_noproxy: "", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-8.2", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "", npm_config_userconfig: "/home/runner/.npmrc", npm_config_local_prefix: "/home/runner/work/CodeGear/CodeGear", SYSTEMD_EXEC_PID: "660", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", COLOR: "0", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.5/x64", NVM_DIR: "/home/runner/.nvm", npm_config_metrics_registry: "https://registry.npmjs.org/", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230702.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chrome_driver", JOURNAL_STREAM: "8:15284", GITHUB_WORKFLOW: "CodeGear CI", _: "/opt/hostedtoolcache/node/16.20.1/x64/bin/npm", npm_config_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", GITHUB_RUN_ID: "5523471966", npm_config_cache: "/home/runner/.npm", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "ac0f84c8aa72cfb46bf37148899f504dfe41c131", GITHUB_BASE_REF: "", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/heads/settings-popup", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", npm_config_node_gyp: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.bin:/home/runner/work/CodeGear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_b8fc4c49-12db-4c27-b275-7e4b48143402", INVOCATION_ID: "c05c8d76deac491f8c661337131feb1a", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.10/x64", NODE: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "14", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 5", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "settings-popup", GITHUB_REPOSITORY: "Gearonix/CodeGear", npm_lifecycle_script: " nx run-many --targets=build --all", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", STATS_NM: "true", npm_package_version: "0.0.0", npm_lifecycle_event: "build", NODE_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/bin/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/node_modules", GITHUB_REF_PROTECTED: "false", npm_config_strict_peer_dependencies: "", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "ac0f84c8aa72cfb46bf37148899f504dfe41c131", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/heads/settings-popup", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", npm_config_globalconfig: "/opt/hostedtoolcache/node/16.20.1/x64/etc/npmrc", npm_config_init_module: "/home/runner/.npm-init.js", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_026a82c8-4fcd-40a9-84f6-eb5ecd61cd50", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", npm_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/bin/npm-cli.js", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "push", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_026a82c8-4fcd-40a9-84f6-eb5ecd61cd50", npm_config_global_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", npm_command: "run-script", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.146+9/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_026a82c8-4fcd-40a9-84f6-eb5ecd61cd50", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", EDITOR: "vi", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/5407298341986919404", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "5407298341986919404", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_026a82c8-4fcd-40a9-84f6-eb5ecd61cd50", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "npm/8.19.4 node/v16.20.1 linux x64 workspaces/false ci/github-actions", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_026a82c8-4fcd-40a9-84f6-eb5ecd61cd50", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", npm_config_noproxy: "", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-8.2", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "", npm_config_userconfig: "/home/runner/.npmrc", npm_config_local_prefix: "/home/runner/work/CodeGear/CodeGear", SYSTEMD_EXEC_PID: "660", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", COLOR: "0", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.5/x64", NVM_DIR: "/home/runner/.nvm", npm_config_metrics_registry: "https://registry.npmjs.org/", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230702.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chrome_driver", JOURNAL_STREAM: "8:15284", GITHUB_WORKFLOW: "CodeGear CI", _: "/opt/hostedtoolcache/node/16.20.1/x64/bin/npm", npm_config_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", GITHUB_RUN_ID: "5523471966", npm_config_cache: "/home/runner/.npm", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "ac0f84c8aa72cfb46bf37148899f504dfe41c131", GITHUB_BASE_REF: "", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/heads/settings-popup", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", npm_config_node_gyp: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.bin:/home/runner/work/CodeGear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_b8fc4c49-12db-4c27-b275-7e4b48143402", INVOCATION_ID: "c05c8d76deac491f8c661337131feb1a", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.10/x64", NODE: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "14", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 5", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "settings-popup", GITHUB_REPOSITORY: "Gearonix/CodeGear", npm_lifecycle_script: " nx run-many --targets=build --all", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", STATS_NM: "true", npm_package_version: "0.0.0", npm_lifecycle_event: "build", NODE_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/bin/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/node_modules", GITHUB_REF_PROTECTED: "false", npm_config_strict_peer_dependencies: "", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "ac0f84c8aa72cfb46bf37148899f504dfe41c131", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/heads/settings-popup", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", npm_config_globalconfig: "/opt/hostedtoolcache/node/16.20.1/x64/etc/npmrc", npm_config_init_module: "/home/runner/.npm-init.js", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_026a82c8-4fcd-40a9-84f6-eb5ecd61cd50", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", npm_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/bin/npm-cli.js", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "push", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_026a82c8-4fcd-40a9-84f6-eb5ecd61cd50", npm_config_global_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", npm_command: "run-script", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.146+9/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_026a82c8-4fcd-40a9-84f6-eb5ecd61cd50", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", EDITOR: "vi", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/5407298341986919404", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "5407298341986919404", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.REACT_APP_SC_DISABLE_SPEEDY !== "" ? { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_026a82c8-4fcd-40a9-84f6-eb5ecd61cd50", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "npm/8.19.4 node/v16.20.1 linux x64 workspaces/false ci/github-actions", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_026a82c8-4fcd-40a9-84f6-eb5ecd61cd50", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", npm_config_noproxy: "", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-8.2", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "", npm_config_userconfig: "/home/runner/.npmrc", npm_config_local_prefix: "/home/runner/work/CodeGear/CodeGear", SYSTEMD_EXEC_PID: "660", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", COLOR: "0", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.5/x64", NVM_DIR: "/home/runner/.nvm", npm_config_metrics_registry: "https://registry.npmjs.org/", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230702.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chrome_driver", JOURNAL_STREAM: "8:15284", GITHUB_WORKFLOW: "CodeGear CI", _: "/opt/hostedtoolcache/node/16.20.1/x64/bin/npm", npm_config_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", GITHUB_RUN_ID: "5523471966", npm_config_cache: "/home/runner/.npm", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "ac0f84c8aa72cfb46bf37148899f504dfe41c131", GITHUB_BASE_REF: "", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/heads/settings-popup", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", npm_config_node_gyp: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.bin:/home/runner/work/CodeGear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_b8fc4c49-12db-4c27-b275-7e4b48143402", INVOCATION_ID: "c05c8d76deac491f8c661337131feb1a", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.10/x64", NODE: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "14", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 5", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "settings-popup", GITHUB_REPOSITORY: "Gearonix/CodeGear", npm_lifecycle_script: " nx run-many --targets=build --all", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", STATS_NM: "true", npm_package_version: "0.0.0", npm_lifecycle_event: "build", NODE_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/bin/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/node_modules", GITHUB_REF_PROTECTED: "false", npm_config_strict_peer_dependencies: "", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "ac0f84c8aa72cfb46bf37148899f504dfe41c131", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/heads/settings-popup", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", npm_config_globalconfig: "/opt/hostedtoolcache/node/16.20.1/x64/etc/npmrc", npm_config_init_module: "/home/runner/.npm-init.js", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_026a82c8-4fcd-40a9-84f6-eb5ecd61cd50", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", npm_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/bin/npm-cli.js", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "push", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_026a82c8-4fcd-40a9-84f6-eb5ecd61cd50", npm_config_global_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", npm_command: "run-script", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.146+9/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_026a82c8-4fcd-40a9-84f6-eb5ecd61cd50", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", EDITOR: "vi", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/5407298341986919404", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "5407298341986919404", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.REACT_APP_SC_DISABLE_SPEEDY !== "false" && { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_026a82c8-4fcd-40a9-84f6-eb5ecd61cd50", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "npm/8.19.4 node/v16.20.1 linux x64 workspaces/false ci/github-actions", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_026a82c8-4fcd-40a9-84f6-eb5ecd61cd50", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", npm_config_noproxy: "", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-8.2", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "", npm_config_userconfig: "/home/runner/.npmrc", npm_config_local_prefix: "/home/runner/work/CodeGear/CodeGear", SYSTEMD_EXEC_PID: "660", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", COLOR: "0", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.5/x64", NVM_DIR: "/home/runner/.nvm", npm_config_metrics_registry: "https://registry.npmjs.org/", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230702.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chrome_driver", JOURNAL_STREAM: "8:15284", GITHUB_WORKFLOW: "CodeGear CI", _: "/opt/hostedtoolcache/node/16.20.1/x64/bin/npm", npm_config_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", GITHUB_RUN_ID: "5523471966", npm_config_cache: "/home/runner/.npm", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "ac0f84c8aa72cfb46bf37148899f504dfe41c131", GITHUB_BASE_REF: "", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/heads/settings-popup", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", npm_config_node_gyp: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.bin:/home/runner/work/CodeGear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_b8fc4c49-12db-4c27-b275-7e4b48143402", INVOCATION_ID: "c05c8d76deac491f8c661337131feb1a", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.10/x64", NODE: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "14", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 5", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "settings-popup", GITHUB_REPOSITORY: "Gearonix/CodeGear", npm_lifecycle_script: " nx run-many --targets=build --all", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", STATS_NM: "true", npm_package_version: "0.0.0", npm_lifecycle_event: "build", NODE_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/bin/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/node_modules", GITHUB_REF_PROTECTED: "false", npm_config_strict_peer_dependencies: "", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "ac0f84c8aa72cfb46bf37148899f504dfe41c131", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/heads/settings-popup", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", npm_config_globalconfig: "/opt/hostedtoolcache/node/16.20.1/x64/etc/npmrc", npm_config_init_module: "/home/runner/.npm-init.js", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_026a82c8-4fcd-40a9-84f6-eb5ecd61cd50", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", npm_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/bin/npm-cli.js", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "push", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_026a82c8-4fcd-40a9-84f6-eb5ecd61cd50", npm_config_global_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", npm_command: "run-script", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.146+9/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_026a82c8-4fcd-40a9-84f6-eb5ecd61cd50", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", EDITOR: "vi", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/5407298341986919404", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "5407298341986919404", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_026a82c8-4fcd-40a9-84f6-eb5ecd61cd50", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "npm/8.19.4 node/v16.20.1 linux x64 workspaces/false ci/github-actions", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_026a82c8-4fcd-40a9-84f6-eb5ecd61cd50", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", npm_config_noproxy: "", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-8.2", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "", npm_config_userconfig: "/home/runner/.npmrc", npm_config_local_prefix: "/home/runner/work/CodeGear/CodeGear", SYSTEMD_EXEC_PID: "660", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", COLOR: "0", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.5/x64", NVM_DIR: "/home/runner/.nvm", npm_config_metrics_registry: "https://registry.npmjs.org/", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230702.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chrome_driver", JOURNAL_STREAM: "8:15284", GITHUB_WORKFLOW: "CodeGear CI", _: "/opt/hostedtoolcache/node/16.20.1/x64/bin/npm", npm_config_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", GITHUB_RUN_ID: "5523471966", npm_config_cache: "/home/runner/.npm", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "ac0f84c8aa72cfb46bf37148899f504dfe41c131", GITHUB_BASE_REF: "", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/heads/settings-popup", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", npm_config_node_gyp: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.bin:/home/runner/work/CodeGear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_b8fc4c49-12db-4c27-b275-7e4b48143402", INVOCATION_ID: "c05c8d76deac491f8c661337131feb1a", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.10/x64", NODE: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "14", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 5", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "settings-popup", GITHUB_REPOSITORY: "Gearonix/CodeGear", npm_lifecycle_script: " nx run-many --targets=build --all", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", STATS_NM: "true", npm_package_version: "0.0.0", npm_lifecycle_event: "build", NODE_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/bin/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/node_modules", GITHUB_REF_PROTECTED: "false", npm_config_strict_peer_dependencies: "", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "ac0f84c8aa72cfb46bf37148899f504dfe41c131", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/heads/settings-popup", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", npm_config_globalconfig: "/opt/hostedtoolcache/node/16.20.1/x64/etc/npmrc", npm_config_init_module: "/home/runner/.npm-init.js", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_026a82c8-4fcd-40a9-84f6-eb5ecd61cd50", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", npm_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/bin/npm-cli.js", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "push", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_026a82c8-4fcd-40a9-84f6-eb5ecd61cd50", npm_config_global_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", npm_command: "run-script", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.146+9/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_026a82c8-4fcd-40a9-84f6-eb5ecd61cd50", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", EDITOR: "vi", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/5407298341986919404", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "5407298341986919404", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.SC_DISABLE_SPEEDY !== void 0 && { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_026a82c8-4fcd-40a9-84f6-eb5ecd61cd50", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "npm/8.19.4 node/v16.20.1 linux x64 workspaces/false ci/github-actions", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_026a82c8-4fcd-40a9-84f6-eb5ecd61cd50", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", npm_config_noproxy: "", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-8.2", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "", npm_config_userconfig: "/home/runner/.npmrc", npm_config_local_prefix: "/home/runner/work/CodeGear/CodeGear", SYSTEMD_EXEC_PID: "660", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", COLOR: "0", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.5/x64", NVM_DIR: "/home/runner/.nvm", npm_config_metrics_registry: "https://registry.npmjs.org/", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230702.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chrome_driver", JOURNAL_STREAM: "8:15284", GITHUB_WORKFLOW: "CodeGear CI", _: "/opt/hostedtoolcache/node/16.20.1/x64/bin/npm", npm_config_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", GITHUB_RUN_ID: "5523471966", npm_config_cache: "/home/runner/.npm", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "ac0f84c8aa72cfb46bf37148899f504dfe41c131", GITHUB_BASE_REF: "", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/heads/settings-popup", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", npm_config_node_gyp: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.bin:/home/runner/work/CodeGear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_b8fc4c49-12db-4c27-b275-7e4b48143402", INVOCATION_ID: "c05c8d76deac491f8c661337131feb1a", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.10/x64", NODE: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "14", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 5", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "settings-popup", GITHUB_REPOSITORY: "Gearonix/CodeGear", npm_lifecycle_script: " nx run-many --targets=build --all", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", STATS_NM: "true", npm_package_version: "0.0.0", npm_lifecycle_event: "build", NODE_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/bin/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/node_modules", GITHUB_REF_PROTECTED: "false", npm_config_strict_peer_dependencies: "", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "ac0f84c8aa72cfb46bf37148899f504dfe41c131", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/heads/settings-popup", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", npm_config_globalconfig: "/opt/hostedtoolcache/node/16.20.1/x64/etc/npmrc", npm_config_init_module: "/home/runner/.npm-init.js", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_026a82c8-4fcd-40a9-84f6-eb5ecd61cd50", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", npm_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/bin/npm-cli.js", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "push", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_026a82c8-4fcd-40a9-84f6-eb5ecd61cd50", npm_config_global_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", npm_command: "run-script", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.146+9/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_026a82c8-4fcd-40a9-84f6-eb5ecd61cd50", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", EDITOR: "vi", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/5407298341986919404", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "5407298341986919404", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.SC_DISABLE_SPEEDY !== "" && { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_026a82c8-4fcd-40a9-84f6-eb5ecd61cd50", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "npm/8.19.4 node/v16.20.1 linux x64 workspaces/false ci/github-actions", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_026a82c8-4fcd-40a9-84f6-eb5ecd61cd50", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", npm_config_noproxy: "", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-8.2", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "", npm_config_userconfig: "/home/runner/.npmrc", npm_config_local_prefix: "/home/runner/work/CodeGear/CodeGear", SYSTEMD_EXEC_PID: "660", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", COLOR: "0", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.5/x64", NVM_DIR: "/home/runner/.nvm", npm_config_metrics_registry: "https://registry.npmjs.org/", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230702.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chrome_driver", JOURNAL_STREAM: "8:15284", GITHUB_WORKFLOW: "CodeGear CI", _: "/opt/hostedtoolcache/node/16.20.1/x64/bin/npm", npm_config_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", GITHUB_RUN_ID: "5523471966", npm_config_cache: "/home/runner/.npm", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "ac0f84c8aa72cfb46bf37148899f504dfe41c131", GITHUB_BASE_REF: "", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/heads/settings-popup", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", npm_config_node_gyp: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.bin:/home/runner/work/CodeGear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_b8fc4c49-12db-4c27-b275-7e4b48143402", INVOCATION_ID: "c05c8d76deac491f8c661337131feb1a", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.10/x64", NODE: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "14", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 5", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "settings-popup", GITHUB_REPOSITORY: "Gearonix/CodeGear", npm_lifecycle_script: " nx run-many --targets=build --all", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", STATS_NM: "true", npm_package_version: "0.0.0", npm_lifecycle_event: "build", NODE_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/bin/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/node_modules", GITHUB_REF_PROTECTED: "false", npm_config_strict_peer_dependencies: "", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "ac0f84c8aa72cfb46bf37148899f504dfe41c131", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/heads/settings-popup", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", npm_config_globalconfig: "/opt/hostedtoolcache/node/16.20.1/x64/etc/npmrc", npm_config_init_module: "/home/runner/.npm-init.js", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_026a82c8-4fcd-40a9-84f6-eb5ecd61cd50", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", npm_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/bin/npm-cli.js", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "push", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_026a82c8-4fcd-40a9-84f6-eb5ecd61cd50", npm_config_global_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", npm_command: "run-script", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.146+9/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_026a82c8-4fcd-40a9-84f6-eb5ecd61cd50", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", EDITOR: "vi", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/5407298341986919404", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "5407298341986919404", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.SC_DISABLE_SPEEDY !== "false" && { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_026a82c8-4fcd-40a9-84f6-eb5ecd61cd50", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "npm/8.19.4 node/v16.20.1 linux x64 workspaces/false ci/github-actions", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_026a82c8-4fcd-40a9-84f6-eb5ecd61cd50", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", npm_config_noproxy: "", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-8.2", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "", npm_config_userconfig: "/home/runner/.npmrc", npm_config_local_prefix: "/home/runner/work/CodeGear/CodeGear", SYSTEMD_EXEC_PID: "660", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", COLOR: "0", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.5/x64", NVM_DIR: "/home/runner/.nvm", npm_config_metrics_registry: "https://registry.npmjs.org/", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230702.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chrome_driver", JOURNAL_STREAM: "8:15284", GITHUB_WORKFLOW: "CodeGear CI", _: "/opt/hostedtoolcache/node/16.20.1/x64/bin/npm", npm_config_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", GITHUB_RUN_ID: "5523471966", npm_config_cache: "/home/runner/.npm", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "ac0f84c8aa72cfb46bf37148899f504dfe41c131", GITHUB_BASE_REF: "", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/heads/settings-popup", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", npm_config_node_gyp: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.bin:/home/runner/work/CodeGear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_b8fc4c49-12db-4c27-b275-7e4b48143402", INVOCATION_ID: "c05c8d76deac491f8c661337131feb1a", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.10/x64", NODE: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "14", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 5", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "settings-popup", GITHUB_REPOSITORY: "Gearonix/CodeGear", npm_lifecycle_script: " nx run-many --targets=build --all", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", STATS_NM: "true", npm_package_version: "0.0.0", npm_lifecycle_event: "build", NODE_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/bin/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/node_modules", GITHUB_REF_PROTECTED: "false", npm_config_strict_peer_dependencies: "", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "ac0f84c8aa72cfb46bf37148899f504dfe41c131", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/heads/settings-popup", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", npm_config_globalconfig: "/opt/hostedtoolcache/node/16.20.1/x64/etc/npmrc", npm_config_init_module: "/home/runner/.npm-init.js", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_026a82c8-4fcd-40a9-84f6-eb5ecd61cd50", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", npm_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/bin/npm-cli.js", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "push", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_026a82c8-4fcd-40a9-84f6-eb5ecd61cd50", npm_config_global_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", npm_command: "run-script", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.146+9/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_026a82c8-4fcd-40a9-84f6-eb5ecd61cd50", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", EDITOR: "vi", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/5407298341986919404", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "5407298341986919404", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.SC_DISABLE_SPEEDY);
function kt(e) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), t = 1; t < n; t++)
    r[t - 1] = arguments[t];
  throw new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (r.length > 0 ? " Args: " + r.join(", ") : ""));
}
var tR = function() {
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
      for (var o = this.groupSizes, i = o.length, s = i; r >= s; )
        (s <<= 1) < 0 && kt(16, "" + r);
      this.groupSizes = new Uint32Array(s), this.groupSizes.set(o), this.length = s;
      for (var a = i; a < s; a++)
        this.groupSizes[a] = 0;
    }
    for (var _ = this.indexOfGroup(r + 1), u = 0, l = t.length; u < l; u++)
      this.tag.insertRule(_, t[u]) && (this.groupSizes[r]++, _++);
  }, n.clearGroup = function(r) {
    if (r < this.length) {
      var t = this.groupSizes[r], o = this.indexOfGroup(r), i = o + t;
      this.groupSizes[r] = 0;
      for (var s = o; s < i; s++)
        this.tag.deleteRule(o);
    }
  }, n.getGroup = function(r) {
    var t = "";
    if (r >= this.length || this.groupSizes[r] === 0)
      return t;
    for (var o = this.groupSizes[r], i = this.indexOfGroup(r), s = i + o, a = i; a < s; a++)
      t += this.tag.getRule(a) + `/*!sc*/
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
}, oR = function(e) {
  return Lo.get(e);
}, iR = function(e, n) {
  n >= et && (et = n + 1), po.set(e, n), Lo.set(n, e);
}, sR = "style[" + wr + '][data-styled-version="5.3.6"]', aR = new RegExp("^" + wr + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), _R = function(e, n, r) {
  for (var t, o = r.split(","), i = 0, s = o.length; i < s; i++)
    (t = o[i]) && e.registerName(n, t);
}, uR = function(e, n) {
  for (var r = (n.textContent || "").split(`/*!sc*/
`), t = [], o = 0, i = r.length; o < i; o++) {
    var s = r[o].trim();
    if (s) {
      var a = s.match(aR);
      if (a) {
        var _ = 0 | parseInt(a[1], 10), u = a[2];
        _ !== 0 && (iR(u, _), _R(e, u, a[3]), e.getTag().insertRules(_, t)), t.length = 0;
      } else
        t.push(s);
    }
  }
}, cR = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, cl = function(e) {
  var n = document.head, r = e || n, t = document.createElement("style"), o = function(a) {
    for (var _ = a.childNodes, u = _.length; u >= 0; u--) {
      var l = _[u];
      if (l && l.nodeType === 1 && l.hasAttribute(wr))
        return l;
    }
  }(r), i = o !== void 0 ? o.nextSibling : null;
  t.setAttribute(wr, "active"), t.setAttribute("data-styled-version", "5.3.6");
  var s = cR();
  return s && t.setAttribute("nonce", s), r.insertBefore(t, i), t;
}, lR = function() {
  function e(r) {
    var t = this.element = cl(r);
    t.appendChild(document.createTextNode("")), this.sheet = function(o) {
      if (o.sheet)
        return o.sheet;
      for (var i = document.styleSheets, s = 0, a = i.length; s < a; s++) {
        var _ = i[s];
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
}(), dR = function() {
  function e(r) {
    var t = this.element = cl(r);
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
}(), hR = function() {
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
}(), t_ = Qs, mR = { isServer: !Qs, useCSSOMInjection: !rR }, ll = function() {
  function e(r, t, o) {
    r === void 0 && (r = $n), t === void 0 && (t = {}), this.options = An({}, mR, {}, r), this.gs = t, this.names = new Map(o), this.server = !!r.isServer, !this.server && Qs && t_ && (t_ = !1, function(i) {
      for (var s = document.querySelectorAll(sR), a = 0, _ = s.length; a < _; a++) {
        var u = s[a];
        u && u.getAttribute(wr) !== "active" && (uR(i, u), u.parentNode && u.parentNode.removeChild(u));
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
    return this.tag || (this.tag = (o = (t = this.options).isServer, i = t.useCSSOMInjection, s = t.target, r = o ? new hR(s) : i ? new lR(s) : new dR(s), new tR(r)));
    var r, t, o, i, s;
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
      for (var t = r.getTag(), o = t.length, i = "", s = 0; s < o; s++) {
        var a = oR(s);
        if (a !== void 0) {
          var _ = r.names.get(a), u = t.getGroup(s);
          if (_ && u && _.size) {
            var l = wr + ".g" + s + '[id="' + a + '"]', c = "";
            _ !== void 0 && _.forEach(function(E) {
              E.length > 0 && (c += E + ",");
            }), i += "" + u + l + '{content:"' + c + `"}/*!sc*/
`;
          }
        }
      }
      return i;
    }(this);
  }, e;
}(), pR = /(a)(d)/gi, o_ = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function is(e) {
  var n, r = "";
  for (n = Math.abs(e); n > 52; n = n / 52 | 0)
    r = o_(n % 52) + r;
  return (o_(n % 52) + r).replace(pR, "$1-$2");
}
var br = function(e, n) {
  for (var r = n.length; r; )
    e = 33 * e ^ n.charCodeAt(--r);
  return e;
}, dl = function(e) {
  return br(5381, e);
};
function fR(e) {
  for (var n = 0; n < e.length; n += 1) {
    var r = e[n];
    if (ht(r) && !Zs(r))
      return !1;
  }
  return !0;
}
var TR = dl("5.3.6"), ER = function() {
  function e(n, r, t) {
    this.rules = n, this.staticRulesId = "", this.isStatic = (t === void 0 || t.isStatic) && fR(n), this.componentId = r, this.baseHash = br(TR, r), this.baseStyle = t, ll.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(n, r, t) {
    var o = this.componentId, i = [];
    if (this.baseStyle && i.push(this.baseStyle.generateAndInjectStyles(n, r, t)), this.isStatic && !t.hash)
      if (this.staticRulesId && r.hasNameForId(o, this.staticRulesId))
        i.push(this.staticRulesId);
      else {
        var s = Mr(this.rules, n, r, t).join(""), a = is(br(this.baseHash, s) >>> 0);
        if (!r.hasNameForId(o, a)) {
          var _ = t(s, "." + a, void 0, o);
          r.insertRules(o, a, _);
        }
        i.push(a), this.staticRulesId = a;
      }
    else {
      for (var u = this.rules.length, l = br(this.baseHash, t.hash), c = "", E = 0; E < u; E++) {
        var O = this.rules[E];
        if (typeof O == "string")
          c += O;
        else if (O) {
          var d = Mr(O, n, r, t), h = Array.isArray(d) ? d.join("") : d;
          l = br(l, h + E), c += h;
        }
      }
      if (c) {
        var p = is(l >>> 0);
        if (!r.hasNameForId(o, p)) {
          var I = t(c, "." + p, void 0, o);
          r.insertRules(o, p, I);
        }
        i.push(p);
      }
    }
    return i.join(" ");
  }, e;
}(), OR = /^\s*\/\/.*$/gm, RR = [":", "[", ".", "#"];
function NR(e) {
  var n, r, t, o, i = e === void 0 ? $n : e, s = i.options, a = s === void 0 ? $n : s, _ = i.plugins, u = _ === void 0 ? xo : _, l = new jO(a), c = [], E = function(h) {
    function p(I) {
      if (I)
        try {
          h(I + "}");
        } catch {
        }
    }
    return function(I, N, C, H, f, w, X, se, x, F) {
      switch (I) {
        case 1:
          if (x === 0 && N.charCodeAt(0) === 64)
            return h(N + ";"), "";
          break;
        case 2:
          if (se === 0)
            return N + "/*|*/";
          break;
        case 3:
          switch (se) {
            case 102:
            case 112:
              return h(C[0] + N), "";
            default:
              return N + (F === 0 ? "/*|*/" : "");
          }
        case -2:
          N.split("/*|*/}").forEach(p);
      }
    };
  }(function(h) {
    c.push(h);
  }), O = function(h, p, I) {
    return p === 0 && RR.indexOf(I[r.length]) !== -1 || I.match(o) ? h : "." + n;
  };
  function d(h, p, I, N) {
    N === void 0 && (N = "&");
    var C = h.replace(OR, ""), H = p && I ? I + " " + p + " { " + C + " }" : C;
    return n = N, r = p, t = new RegExp("\\" + r + "\\b", "g"), o = new RegExp("(\\" + r + "\\b){2,}"), l(I || !p ? "" : p, H);
  }
  return l.use([].concat(u, [function(h, p, I) {
    h === 2 && I.length && I[0].lastIndexOf(r) > 0 && (I[0] = I[0].replace(t, O));
  }, E, function(h) {
    if (h === -2) {
      var p = c;
      return c = [], p;
    }
  }])), d.hash = u.length ? u.reduce(function(h, p) {
    return p.name || kt(15), br(h, p.name);
  }, 5381).toString() : "", d;
}
var hl = me.createContext();
hl.Consumer;
var ml = me.createContext(), bR = (ml.Consumer, new ll()), ss = NR();
function IR() {
  return yn(hl) || bR;
}
function gR() {
  return yn(ml) || ss;
}
var AR = function() {
  function e(n, r) {
    var t = this;
    this.inject = function(o, i) {
      i === void 0 && (i = ss);
      var s = t.name + i.hash;
      o.hasNameForId(t.id, s) || o.insertRules(t.id, s, i(t.rules, s, "@keyframes"));
    }, this.toString = function() {
      return kt(12, String(t.name));
    }, this.name = n, this.id = "sc-keyframes-" + n, this.rules = r;
  }
  return e.prototype.getName = function(n) {
    return n === void 0 && (n = ss), this.name + n.hash;
  }, e;
}(), SR = /([A-Z])/, GR = /([A-Z])/g, vR = /^ms-/, CR = function(e) {
  return "-" + e.toLowerCase();
};
function i_(e) {
  return SR.test(e) ? e.replace(GR, CR).replace(vR, "-ms-") : e;
}
var s_ = function(e) {
  return e == null || e === !1 || e === "";
};
function Mr(e, n, r, t) {
  if (Array.isArray(e)) {
    for (var o, i = [], s = 0, a = e.length; s < a; s += 1)
      (o = Mr(e[s], n, r, t)) !== "" && (Array.isArray(o) ? i.push.apply(i, o) : i.push(o));
    return i;
  }
  if (s_(e))
    return "";
  if (Zs(e))
    return "." + e.styledComponentId;
  if (ht(e)) {
    if (typeof (u = e) != "function" || u.prototype && u.prototype.isReactComponent || !n)
      return e;
    var _ = e(n);
    return Mr(_, n, r, t);
  }
  var u;
  return e instanceof AR ? r ? (e.inject(r, t), e.getName(t)) : e : os(e) ? function l(c, E) {
    var O, d, h = [];
    for (var p in c)
      c.hasOwnProperty(p) && !s_(c[p]) && (Array.isArray(c[p]) && c[p].isCss || ht(c[p]) ? h.push(i_(p) + ":", c[p], ";") : os(c[p]) ? h.push.apply(h, l(c[p], p)) : h.push(i_(p) + ": " + (O = p, (d = c[p]) == null || typeof d == "boolean" || d === "" ? "" : typeof d != "number" || d === 0 || O in FO ? String(d).trim() : d + "px") + ";"));
    return E ? [E + " {"].concat(h, ["}"]) : h;
  }(e) : e.toString();
}
var a_ = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function En(e) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), t = 1; t < n; t++)
    r[t - 1] = arguments[t];
  return ht(e) || os(e) ? a_(Mr(n_(xo, [e].concat(r)))) : r.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : a_(Mr(n_(e, r)));
}
var DR = function(e, n, r) {
  return r === void 0 && (r = $n), e.theme !== r.theme && e.theme || n || r.theme;
}, UR = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, HR = /(^-|-$)/g;
function vi(e) {
  return e.replace(UR, "-").replace(HR, "");
}
var yR = function(e) {
  return is(dl(e) >>> 0);
};
function $t(e) {
  return typeof e == "string" && !0;
}
var as = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, PR = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function wR(e, n, r) {
  var t = e[r];
  as(n) && as(t) ? pl(t, n) : e[r] = n;
}
function pl(e) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), t = 1; t < n; t++)
    r[t - 1] = arguments[t];
  for (var o = 0, i = r; o < i.length; o++) {
    var s = i[o];
    if (as(s))
      for (var a in s)
        PR(a) && wR(e, s[a], a);
  }
  return e;
}
var fl = me.createContext();
fl.Consumer;
var Ci = {};
function Tl(e, n, r) {
  var t = Zs(e), o = !$t(e), i = n.attrs, s = i === void 0 ? xo : i, a = n.componentId, _ = a === void 0 ? function(N, C) {
    var H = typeof N != "string" ? "sc" : vi(N);
    Ci[H] = (Ci[H] || 0) + 1;
    var f = H + "-" + yR("5.3.6" + H + Ci[H]);
    return C ? C + "-" + f : f;
  }(n.displayName, n.parentComponentId) : a, u = n.displayName, l = u === void 0 ? function(N) {
    return $t(N) ? "styled." + N : "Styled(" + r_(N) + ")";
  }(e) : u, c = n.displayName && n.componentId ? vi(n.displayName) + "-" + n.componentId : n.componentId || _, E = t && e.attrs ? Array.prototype.concat(e.attrs, s).filter(Boolean) : s, O = n.shouldForwardProp;
  t && e.shouldForwardProp && (O = n.shouldForwardProp ? function(N, C, H) {
    return e.shouldForwardProp(N, C, H) && n.shouldForwardProp(N, C, H);
  } : e.shouldForwardProp);
  var d, h = new ER(r, c, t ? e.componentStyle : void 0), p = h.isStatic && s.length === 0, I = function(N, C) {
    return function(H, f, w, X) {
      var se = H.attrs, x = H.componentStyle, F = H.defaultProps, Fe = H.foldedComponentIds, be = H.shouldForwardProp, Ce = H.styledComponentId, De = H.target, V = function(L, m, Q) {
        L === void 0 && (L = $n);
        var g = An({}, m, { theme: L }), he = {};
        return Q.forEach(function(ee) {
          var oe, B, Ie, xe = ee;
          for (oe in ht(xe) && (xe = xe(g)), xe)
            g[oe] = he[oe] = oe === "className" ? (B = he[oe], Ie = xe[oe], B && Ie ? B + " " + Ie : B || Ie) : xe[oe];
        }), [g, he];
      }(DR(f, yn(fl), F) || $n, f, se), de = V[0], ke = V[1], Ue = function(L, m, Q, g) {
        var he = IR(), ee = gR(), oe = m ? L.generateAndInjectStyles($n, he, ee) : L.generateAndInjectStyles(Q, he, ee);
        return oe;
      }(x, X, de), kn = w, xn = ke.$as || f.$as || ke.as || f.as || De, pe = $t(xn), v = ke !== f ? An({}, f, {}, ke) : f, S = {};
      for (var D in v)
        D[0] !== "$" && D !== "as" && (D === "forwardedAs" ? S.as = v[D] : (be ? be(D, Ja, xn) : !pe || Ja(D)) && (S[D] = v[D]));
      return f.style && ke.style !== f.style && (S.style = An({}, f.style, {}, ke.style)), S.className = Array.prototype.concat(Fe, Ce, Ue !== Ce ? Ue : null, f.className, ke.className).filter(Boolean).join(" "), S.ref = kn, wl(xn, S);
    }(d, N, C, p);
  };
  return I.displayName = l, (d = me.forwardRef(I)).attrs = E, d.componentStyle = h, d.displayName = l, d.shouldForwardProp = O, d.foldedComponentIds = t ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : xo, d.styledComponentId = c, d.target = t ? e.target : e, d.withComponent = function(N) {
    var C = n.componentId, H = function(w, X) {
      if (w == null)
        return {};
      var se, x, F = {}, Fe = Object.keys(w);
      for (x = 0; x < Fe.length; x++)
        se = Fe[x], X.indexOf(se) >= 0 || (F[se] = w[se]);
      return F;
    }(n, ["componentId"]), f = C && C + "-" + ($t(N) ? N : vi(r_(N)));
    return Tl(N, An({}, H, { attrs: E, componentId: f }), r);
  }, Object.defineProperty(d, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(N) {
    this._foldedDefaultProps = t ? pl({}, e.defaultProps, N) : N;
  } }), d.toString = function() {
    return "." + d.styledComponentId;
  }, o && nR(d, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), d;
}
var _s = function(e) {
  return function n(r, t, o) {
    if (o === void 0 && (o = $n), !sl.isValidElementType(t))
      return kt(1, String(t));
    var i = function() {
      return r(t, o, En.apply(void 0, arguments));
    };
    return i.withConfig = function(s) {
      return n(r, t, An({}, o, {}, s));
    }, i.attrs = function(s) {
      return n(r, t, An({}, o, { attrs: Array.prototype.concat(o.attrs, s).filter(Boolean) }));
    }, i;
  }(Tl, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  _s[e] = _s(e);
});
const Ne = _s, sn = (e = "100%", n = e) => En`
  width: ${e};
  height: ${n};
`;
En`
  border: 1px solid red;
`;
const MR = (e) => En`
  padding-left: ${e}px;
  padding-right: ${e}px;
`, Vr = (e = "flex-start", n = "stretch", r = "row") => En`
  display: flex;
  justify-content: ${e};
  align-items: ${n};
  flex-direction: ${r};
`, us = (e) => En`
  transition: color 200ms;
  &:hover {
    color: ${e}
  }
`, fo = (e) => ({ theme: n }) => `${n[e]} !important;`, kR = (e = "&") => En`
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
`, xR = (e) => En`
  position: absolute;
  ${Object.entries(e).map(([n, r]) => `${n}: ${r};`).join(`
`)}
`, LR = (e, n) => En`
  margin-left: ${e}px;
  margin-top: ${n}px;
`, BR = Ne.div`
  color: ${Hn("light")};
  font-size: ${({ theme: e }) => e.fz7};
  margin-top: 4px;
  font-weight: normal;
  height: 200px;
  overflow-y: auto;
  overflow-x: hidden;
  ${kR()};

  span:first-child {
    margin-top: 22px;
  }

`, jR = Ne.span`
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
`, FR = To(({ children: e }, n) => {
  const r = ce(null), t = () => {
    r.current?.scrollTo(0, r.current.scrollHeight);
  };
  return A_(n, () => ({
    scrollToBottom: () => {
      t(), setTimeout(t, 50);
    }
  })), /* @__PURE__ */ U(BR, { ref: r, children: e });
}), VR = tr((e, n) => {
  const r = ce(null), t = ce(null), { isTerminalOpened: o } = MO(), { executeMessages: i } = Fr(), { spring: s, SpringDiv: a } = LO(n), _ = () => {
    t.current?.scrollIntoView({ behavior: "smooth" });
  };
  return ye(() => {
    r.current?.scrollToBottom();
  }, [i.length, o]), /* @__PURE__ */ ve(FR, { ref: r, children: [
    "CodeGear output console.",
    /* @__PURE__ */ ve(a, { style: { ...s }, children: [
      i.map((u, l) => /* @__PURE__ */ ve(
        jR,
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
        l
      )),
      /* @__PURE__ */ U("div", { ref: t })
    ] })
  ] });
}, { forwardRef: !0 }), WR = Ne.div`
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
`, XR = Ne.div`
  ${xR({
  right: "44px",
  top: "23px"
})}
  ${Vr("flex-end")};
  gap: 23px;
  ${sn("100px", "22px")};
  cursor: pointer;
  svg {
    path {
      stroke: ${Hn("secondaryGrey")};
      ${({ theme: e }) => us(e.light)};
    }
    ${sn("22px")}
    color: ${Hn("secondaryGrey")};
    ${({ theme: e }) => us(e.light)}
  }
`, YR = Ne(G_)`
  ${LR(0, 6)};

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
var El = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, __ = me.createContext && me.createContext(El), zn = globalThis && globalThis.__assign || function() {
  return zn = Object.assign || function(e) {
    for (var n, r = 1, t = arguments.length; r < t; r++) {
      n = arguments[r];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
    }
    return e;
  }, zn.apply(this, arguments);
}, KR = globalThis && globalThis.__rest || function(e, n) {
  var r = {};
  for (var t in e)
    Object.prototype.hasOwnProperty.call(e, t) && n.indexOf(t) < 0 && (r[t] = e[t]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, t = Object.getOwnPropertySymbols(e); o < t.length; o++)
      n.indexOf(t[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[o]) && (r[t[o]] = e[t[o]]);
  return r;
};
function Ol(e) {
  return e && e.map(function(n, r) {
    return me.createElement(n.tag, zn({
      key: r
    }, n.attr), Ol(n.child));
  });
}
function On(e) {
  return function(n) {
    return me.createElement($R, zn({
      attr: zn({}, e.attr)
    }, n), Ol(e.child));
  };
}
function $R(e) {
  var n = function(r) {
    var t = e.attr, o = e.size, i = e.title, s = KR(e, ["attr", "size", "title"]), a = o || r.size || "1em", _;
    return r.className && (_ = r.className), e.className && (_ = (_ ? _ + " " : "") + e.className), me.createElement("svg", zn({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, r.attr, t, s, {
      className: _,
      style: zn(zn({
        color: e.color || r.color
      }, r.style), e.style),
      height: a,
      width: a,
      xmlns: "http://www.w3.org/2000/svg"
    }), i && me.createElement("title", null, i), e.children);
  };
  return __ !== void 0 ? me.createElement(__.Consumer, null, function(r) {
    return n(r);
  }) : n(El);
}
function zR(e) {
  return On({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" } }] })(e);
}
function JR(e) {
  return On({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { d: "M5 0h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2 2 2 0 0 1-2 2H3a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1H1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1H3a2 2 0 0 1 2-2z" } }, { tag: "path", attr: { d: "M1 6v-.5a.5.5 0 0 1 1 0V6h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V9h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 2.5v.5H.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H2v-.5a.5.5 0 0 0-1 0z" } }] })(e);
}
function qR(e) {
  return On({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { d: "M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" } }] })(e);
}
function ZR(e) {
  return On({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M9.25 12a.75.75 0 0 1-.22.53l-2.75 2.75a.75.75 0 0 1-1.06-1.06L7.44 12 5.22 9.78a.75.75 0 1 1 1.06-1.06l2.75 2.75c.141.14.22.331.22.53Zm2 2a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5h-5Z" } }, { tag: "path", attr: { d: "M0 4.75C0 3.784.784 3 1.75 3h20.5c.966 0 1.75.784 1.75 1.75v14.5A1.75 1.75 0 0 1 22.25 21H1.75A1.75 1.75 0 0 1 0 19.25Zm1.75-.25a.25.25 0 0 0-.25.25v14.5c0 .138.112.25.25.25h20.5a.25.25 0 0 0 .25-.25V4.75a.25.25 0 0 0-.25-.25Z" } }] })(e);
}
function QR(e) {
  return On({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", stroke: "#000", strokeWidth: "2", d: "M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M5,5 L19,19" } }] })(e);
}
function e1(e) {
  return On({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01v0a2.83 2.83 0 0 1 0-4L17 3" } }, { tag: "path", attr: { d: "m16 2 6 6" } }, { tag: "path", attr: { d: "M12 16H4" } }] })(e);
}
function n1(e) {
  return On({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M576 736l-32-.001v-286c0-.336-.096-.656-.096-1.008s.096-.655.096-.991c0-17.664-14.336-32-32-32h-64c-17.664 0-32 14.336-32 32s14.336 32 32 32h32v256h-32c-17.664 0-32 14.336-32 32s14.336 32 32 32h128c17.664 0 32-14.336 32-32s-14.336-32-32-32zm-64-384.001c35.344 0 64-28.656 64-64s-28.656-64-64-64-64 28.656-64 64 28.656 64 64 64zm0-352c-282.768 0-512 229.232-512 512 0 282.784 229.232 512 512 512 282.784 0 512-229.216 512-512 0-282.768-229.216-512-512-512zm0 961.008c-247.024 0-448-201.984-448-449.01 0-247.024 200.976-448 448-448s448 200.977 448 448-200.976 449.01-448 449.01z" } }] })(e);
}
function r1(e) {
  return On({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M685.904 383.184l275.264-273.572-.896 155.072c-.289 12.928 9.967 24.176 22.912 23.888l16.416-.016c12.944-.304 23.648-8 23.92-20.928l.672-231.008c0-.223-.88-.399-.88-.623l1.264-11.712c.128-6.496-1.391-12.288-5.584-16.431-4.143-4.176-9.951-6.72-16.4-6.544l-11.696.272c-.223 0-.399.08-.64.113L760.77.687c-12.928.288-23.632 10.976-23.92 23.92l-.032 16.417c1.967 15.248 13.952 24.16 26.88 23.872l151.248.4L640.657 337.92c-12.496 12.496-12.496 32.752 0 45.264 12.496 12.48 32.752 12.48 45.247 0zM339.088 640.812L63.825 913.532l.88-154.224c.304-12.944-9.969-24.192-22.897-23.904l-17.423.032c-12.96.32-23.649 8-23.921 20.944l-.672 231.008c0 .224.88.367.88.623l-1.264 11.68c-.144 6.496 1.376 12.32 5.584 16.433 4.128 4.192 9.952 6.72 16.384 6.56l11.712-.288c.223 0 .383-.096.64-.096l230.495 1.008c12.928-.32 23.617-11.009 23.92-23.936l.032-16.432c-1.967-15.216-13.952-24.16-26.88-23.872l-151.247-.4L384.32 686.076c12.496-12.497 12.496-32.752 0-45.248s-32.737-12.512-45.233-.016zm685.122 346.56l-.672-231.01c-.288-12.944-10.992-20.624-23.92-20.944l-16.416-.032c-12.944-.289-23.184 10.975-22.912 23.903l.896 155.072-275.28-273.552c-12.496-12.496-32.752-12.496-45.248 0s-12.496 32.752 0 45.248L914.93 958.649l-151.232.4c-12.928-.288-24.912 8.657-26.88 23.872l.032 16.432c.304 12.944 11.008 23.633 23.92 23.936l229.504-1.007c.24 0 .416.095.64.095l11.696.288c6.448.16 12.272-2.368 16.4-6.56 4.193-4.128 5.696-9.936 5.584-16.432l-1.263-11.68c0-.255.88-.399.88-.622zM110.049 65.321l151.264-.397c12.928.288 24.912-8.64 26.88-23.873l-.032-16.431C287.84 11.677 277.15.972 264.24.7l-230.512.992c-.256-.032-.416-.112-.64-.112l-11.712-.273C14.945 1.132 9.105 3.676 4.992 7.851.784 11.995-.735 17.787-.592 24.283L.672 35.995c0 .223-.88.384-.88.624l.672 231.008c.288 12.928 10.977 20.624 23.921 20.928l17.424.015c12.928.288 23.183-10.96 22.895-23.888l-.88-154.224 275.264 272.72c12.48 12.497 32.753 12.497 45.25 0s12.496-32.768 0-45.264z" } }] })(e);
}
function t1(e) {
  return On({ tag: "svg", attr: { version: "1.1", viewBox: "0 0 17 17" }, child: [{ tag: "g", attr: {}, child: [] }, { tag: "path", attr: { d: "M8.5 5.972c-1.378 0-2.5 1.122-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.122 2.5-2.5-1.122-2.5-2.5-2.5zM8.5 9.972c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5 1.5 0.673 1.5 1.5-0.673 1.5-1.5 1.5zM16.94 9.446c0.037-0.321 0.060-0.645 0.060-0.974s-0.023-0.653-0.060-0.974l-2.588-0.778c-0.119-0.402-0.278-0.787-0.474-1.149l1.279-2.377c-0.406-0.51-0.869-0.973-1.38-1.38l-2.377 1.28c-0.363-0.196-0.748-0.354-1.15-0.474l-0.776-2.588c-0.32-0.037-0.644-0.060-0.974-0.060s-0.654 0.023-0.974 0.060l-0.776 2.588c-0.403 0.119-0.789 0.278-1.15 0.475l-2.377-1.28c-0.511 0.406-0.974 0.869-1.379 1.38l1.279 2.375c-0.196 0.362-0.354 0.748-0.474 1.15l-2.589 0.778c-0.037 0.32-0.060 0.644-0.060 0.974s0.023 0.654 0.060 0.974l2.588 0.776c0.12 0.403 0.278 0.789 0.474 1.151l-1.279 2.376c0.406 0.511 0.869 0.974 1.38 1.38l2.377-1.279c0.362 0.196 0.748 0.354 1.15 0.474l0.776 2.588c0.321 0.037 0.645 0.060 0.974 0.060s0.654-0.023 0.974-0.060l0.776-2.588c0.402-0.12 0.788-0.278 1.15-0.474l2.376 1.279c0.511-0.407 0.974-0.87 1.38-1.381l-1.278-2.376c0.196-0.362 0.354-0.748 0.474-1.15l2.588-0.776zM13.548 9.419l-0.154 0.518c-0.1 0.337-0.233 0.66-0.396 0.959l-0.256 0.475 0.255 0.475 0.952 1.77c-0.099 0.105-0.201 0.207-0.306 0.306l-2.243-1.209-0.475 0.256c-0.301 0.163-0.624 0.295-0.96 0.396l-0.518 0.154-0.155 0.518-0.579 1.932c-0.072 0.002-0.143 0.003-0.213 0.003s-0.141-0.001-0.213-0.003l-0.579-1.932-0.155-0.518-0.518-0.154c-0.336-0.1-0.659-0.233-0.959-0.396l-0.475-0.256-2.245 1.207c-0.104-0.099-0.207-0.201-0.306-0.306l1.208-2.244-0.256-0.475c-0.162-0.3-0.295-0.623-0.396-0.96l-0.153-0.517-2.449-0.734c-0.003-0.072-0.004-0.143-0.004-0.212 0-0.070 0.001-0.141 0.004-0.213l2.448-0.734 0.154-0.518c0.1-0.337 0.233-0.66 0.396-0.959l0.256-0.475-1.208-2.245c0.099-0.104 0.201-0.207 0.305-0.306l2.247 1.21 0.476-0.259c0.297-0.162 0.619-0.295 0.956-0.395l0.518-0.154 0.155-0.518 0.579-1.932c0.073-0.001 0.144-0.002 0.214-0.002s0.141 0.001 0.213 0.003l0.579 1.932 0.155 0.518 0.518 0.154c0.335 0.1 0.659 0.233 0.96 0.396l0.475 0.255 2.244-1.208c0.104 0.099 0.207 0.201 0.306 0.306l-0.953 1.77-0.255 0.475 0.257 0.475c0.163 0.3 0.295 0.622 0.395 0.957l0.154 0.518 0.518 0.155 1.932 0.581c0.001 0.072 0.002 0.143 0.002 0.213s-0.001 0.141-0.004 0.213l-2.448 0.734z" } }] })(e);
}
function o1(e) {
  return On({ tag: "svg", attr: { viewBox: "0 0 16 16", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M3.78 2L3 2.41v12l.78.42 9-6V8l-9-6zM4 13.48V3.35l7.6 5.07L4 13.48z" } }] })(e);
}
const i1 = tr(() => {
  const e = wt(), { isTerminalOpened: n } = e.state, r = xO(), t = or(), o = ce(), i = (u) => {
    r.set(u);
  }, s = vr(() => {
    e.update({ isTerminalOpened: !1 });
  }, []), a = async () => {
    await o.current?.close(), t.terminal.clearExecuteMessages();
  }, _ = wO(s);
  return ye(() => {
    _.toggle(n);
  }, [n]), /* @__PURE__ */ ve(
    WR,
    {
      $bottom: _.terminalHeight,
      ..._.bind(),
      style: _.springs,
      as: _.div,
      children: [
        /* @__PURE__ */ U(
          YR,
          {
            items: r.val,
            size: "large",
            onChange: i,
            activeKey: r.key
          }
        ),
        /* @__PURE__ */ U(yo, { when: r.key === "terminal", children: /* @__PURE__ */ U(VR, { ref: o }) }),
        /* @__PURE__ */ U(yo, { when: r.key === "test_cases", children: "test cases" }),
        /* @__PURE__ */ ve(XR, { children: [
          /* @__PURE__ */ U(QR, { onClick: a }),
          /* @__PURE__ */ U(zR, { onClick: s })
        ] })
      ]
    }
  );
}), s1 = () => /* @__PURE__ */ U(OO, { children: /* @__PURE__ */ U(i1, {}) });
function a1(e, n, r) {
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
function c_(e) {
  for (var n = 1; n < arguments.length; n++) {
    var r = arguments[n] != null ? arguments[n] : {};
    n % 2 ? u_(Object(r), !0).forEach(function(t) {
      a1(e, t, r[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : u_(Object(r)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
    });
  }
  return e;
}
function _1(e, n) {
  if (e == null)
    return {};
  var r = {}, t = Object.keys(e), o, i;
  for (i = 0; i < t.length; i++)
    o = t[i], !(n.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
function u1(e, n) {
  if (e == null)
    return {};
  var r = _1(e, n), t, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      t = i[o], !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t]);
  }
  return r;
}
function c1(e, n) {
  return l1(e) || d1(e, n) || h1(e, n) || m1();
}
function l1(e) {
  if (Array.isArray(e))
    return e;
}
function d1(e, n) {
  if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(e)))) {
    var r = [], t = !0, o = !1, i = void 0;
    try {
      for (var s = e[Symbol.iterator](), a; !(t = (a = s.next()).done) && (r.push(a.value), !(n && r.length === n)); t = !0)
        ;
    } catch (_) {
      o = !0, i = _;
    } finally {
      try {
        !t && s.return != null && s.return();
      } finally {
        if (o)
          throw i;
      }
    }
    return r;
  }
}
function h1(e, n) {
  if (e) {
    if (typeof e == "string")
      return l_(e, n);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return l_(e, n);
  }
}
function l_(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var r = 0, t = new Array(n); r < n; r++)
    t[r] = e[r];
  return t;
}
function m1() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function p1(e, n, r) {
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
function h_(e) {
  for (var n = 1; n < arguments.length; n++) {
    var r = arguments[n] != null ? arguments[n] : {};
    n % 2 ? d_(Object(r), !0).forEach(function(t) {
      p1(e, t, r[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : d_(Object(r)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
    });
  }
  return e;
}
function f1() {
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
      for (var s = arguments.length, a = new Array(s), _ = 0; _ < s; _++)
        a[_] = arguments[_];
      return n.apply(r, [].concat(o, a));
    };
  };
}
function Bo(e) {
  return {}.toString.call(e).includes("Object");
}
function T1(e) {
  return !Object.keys(e).length;
}
function mt(e) {
  return typeof e == "function";
}
function E1(e, n) {
  return Object.prototype.hasOwnProperty.call(e, n);
}
function O1(e, n) {
  return Bo(n) || Jn("changeType"), Object.keys(n).some(function(r) {
    return !E1(e, r);
  }) && Jn("changeField"), n;
}
function R1(e) {
  mt(e) || Jn("selectorType");
}
function N1(e) {
  mt(e) || Bo(e) || Jn("handlerType"), Bo(e) && Object.values(e).some(function(n) {
    return !mt(n);
  }) && Jn("handlersType");
}
function b1(e) {
  e || Jn("initialIsRequired"), Bo(e) || Jn("initialType"), T1(e) && Jn("initialContent");
}
function I1(e, n) {
  throw new Error(e[n] || e.default);
}
var g1 = {
  initialIsRequired: "initial state is required",
  initialType: "initial state should be an object",
  initialContent: "initial state shouldn't be an empty object",
  handlerType: "handler should be an object or a function",
  handlersType: "all handlers should be a functions",
  selectorType: "selector should be a function",
  changeType: "provided value of changes should be an object",
  changeField: 'it seams you want to change a field in the state which is not specified in the "initial" state',
  default: "an unknown error accured in `state-local` package"
}, Jn = zr(I1)(g1), zt = {
  changes: O1,
  selector: R1,
  handler: N1,
  initial: b1
};
function A1(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  zt.initial(e), zt.handler(n);
  var r = {
    current: e
  }, t = zr(v1)(r, n), o = zr(G1)(r), i = zr(zt.changes)(e), s = zr(S1)(r);
  function a() {
    var u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function(l) {
      return l;
    };
    return zt.selector(u), u(r.current);
  }
  function _(u) {
    f1(t, o, i, s)(u);
  }
  return [a, _];
}
function S1(e, n) {
  return mt(n) ? n(e.current) : n;
}
function G1(e, n) {
  return e.current = h_(h_({}, e.current), n), n;
}
function v1(e, n, r) {
  return mt(n) ? n(e.current) : Object.keys(r).forEach(function(t) {
    var o;
    return (o = n[t]) === null || o === void 0 ? void 0 : o.call(n, e.current[t]);
  }), r;
}
var C1 = {
  create: A1
}, D1 = {
  paths: {
    vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.36.1/min/vs"
  }
};
function U1(e) {
  return function n() {
    for (var r = this, t = arguments.length, o = new Array(t), i = 0; i < t; i++)
      o[i] = arguments[i];
    return o.length >= e.length ? e.apply(this, o) : function() {
      for (var s = arguments.length, a = new Array(s), _ = 0; _ < s; _++)
        a[_] = arguments[_];
      return n.apply(r, [].concat(o, a));
    };
  };
}
function H1(e) {
  return {}.toString.call(e).includes("Object");
}
function y1(e) {
  return e || m_("configIsRequired"), H1(e) || m_("configType"), e.urls ? (P1(), {
    paths: {
      vs: e.urls.monacoBase
    }
  }) : e;
}
function P1() {
  console.warn(Rl.deprecation);
}
function w1(e, n) {
  throw new Error(e[n] || e.default);
}
var Rl = {
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
}, m_ = U1(w1)(Rl), M1 = {
  config: y1
}, k1 = function() {
  for (var n = arguments.length, r = new Array(n), t = 0; t < n; t++)
    r[t] = arguments[t];
  return function(o) {
    return r.reduceRight(function(i, s) {
      return s(i);
    }, o);
  };
};
function Nl(e, n) {
  return Object.keys(n).forEach(function(r) {
    n[r] instanceof Object && e[r] && Object.assign(n[r], Nl(e[r], n[r]));
  }), c_(c_({}, e), n);
}
var x1 = {
  type: "cancelation",
  msg: "operation is manually canceled"
};
function Di(e) {
  var n = !1, r = new Promise(function(t, o) {
    e.then(function(i) {
      return n ? o(x1) : t(i);
    }), e.catch(o);
  });
  return r.cancel = function() {
    return n = !0;
  }, r;
}
var L1 = C1.create({
  config: D1,
  isInitialized: !1,
  resolve: null,
  reject: null,
  monaco: null
}), bl = c1(L1, 2), xt = bl[0], li = bl[1];
function B1(e) {
  var n = M1.config(e), r = n.monaco, t = u1(n, ["monaco"]);
  li(function(o) {
    return {
      config: Nl(o.config, t),
      monaco: r
    };
  });
}
function j1() {
  var e = xt(function(n) {
    var r = n.monaco, t = n.isInitialized, o = n.resolve;
    return {
      monaco: r,
      isInitialized: t,
      resolve: o
    };
  });
  if (!e.isInitialized) {
    if (li({
      isInitialized: !0
    }), e.monaco)
      return e.resolve(e.monaco), Di(Ui);
    if (window.monaco && window.monaco.editor)
      return Il(window.monaco), e.resolve(window.monaco), Di(Ui);
    k1(F1, W1)(X1);
  }
  return Di(Ui);
}
function F1(e) {
  return document.body.appendChild(e);
}
function V1(e) {
  var n = document.createElement("script");
  return e && (n.src = e), n;
}
function W1(e) {
  var n = xt(function(t) {
    var o = t.config, i = t.reject;
    return {
      config: o,
      reject: i
    };
  }), r = V1("".concat(n.config.paths.vs, "/loader.js"));
  return r.onload = function() {
    return e();
  }, r.onerror = n.reject, r;
}
function X1() {
  var e = xt(function(r) {
    var t = r.config, o = r.resolve, i = r.reject;
    return {
      config: t,
      resolve: o,
      reject: i
    };
  }), n = window.require;
  n.config(e.config), n(["vs/editor/editor.main"], function(r) {
    Il(r), e.resolve(r);
  }, function(r) {
    e.reject(r);
  });
}
function Il(e) {
  xt().monaco || li({
    monaco: e
  });
}
function Y1() {
  return xt(function(e) {
    var n = e.monaco;
    return n;
  });
}
var Ui = new Promise(function(e, n) {
  return li({
    resolve: e,
    reject: n
  });
}), jo = {
  config: B1,
  init: j1,
  __getMonacoInstance: Y1
}, K1 = { wrapper: { display: "flex", position: "relative", textAlign: "initial" }, fullWidth: { width: "100%" }, hide: { display: "none" } }, Hi = K1, $1 = { container: { display: "flex", height: "100%", width: "100%", justifyContent: "center", alignItems: "center" } }, z1 = $1;
function J1({ children: e }) {
  return me.createElement("div", { style: z1.container }, e);
}
var q1 = J1, Z1 = q1;
function Q1({ width: e, height: n, isEditorReady: r, loading: t, _ref: o, className: i, wrapperProps: s }) {
  return me.createElement("section", { style: { ...Hi.wrapper, width: e, height: n }, ...s }, !r && me.createElement(Z1, null, t), me.createElement("div", { ref: o, style: { ...Hi.fullWidth, ...!r && Hi.hide }, className: i }));
}
var eN = Q1, gl = Gr(eN);
function nN(e) {
  ye(e, []);
}
var ea = nN;
function rN(e, n, r = !0) {
  let t = ce(!0);
  ye(t.current || !r ? () => {
    t.current = !1;
  } : e, n);
}
var Ve = rN;
function nt() {
}
function Ir(e, n, r, t) {
  return tN(e, t) || oN(e, n, r, t);
}
function tN(e, n) {
  return e.editor.getModel(Al(e, n));
}
function oN(e, n, r, t) {
  return e.editor.createModel(n, r, t ? Al(e, t) : void 0);
}
function Al(e, n) {
  return e.Uri.parse(n);
}
function iN({ original: e, modified: n, language: r, originalLanguage: t, modifiedLanguage: o, originalModelPath: i, modifiedModelPath: s, keepCurrentOriginalModel: a = !1, keepCurrentModifiedModel: _ = !1, theme: u = "light", loading: l = "Loading...", options: c = {}, height: E = "100%", width: O = "100%", className: d, wrapperProps: h = {}, beforeMount: p = nt, onMount: I = nt }) {
  let [N, C] = qn(!1), [H, f] = qn(!0), w = ce(null), X = ce(null), se = ce(null), x = ce(I), F = ce(p), Fe = ce(!1);
  ea(() => {
    let V = jo.init();
    return V.then((de) => (X.current = de) && f(!1)).catch((de) => de?.type !== "cancelation" && console.error("Monaco initialization: error:", de)), () => w.current ? De() : V.cancel();
  }), Ve(() => {
    let V = w.current.getModifiedEditor();
    V.getOption(X.current.editor.EditorOption.readOnly) ? V.setValue(n || "") : n !== V.getValue() && (V.executeEdits("", [{ range: V.getModel().getFullModelRange(), text: n || "", forceMoveMarkers: !0 }]), V.pushUndoStop());
  }, [n], N), Ve(() => {
    w.current?.getModel()?.original.setValue(e || "");
  }, [e], N), Ve(() => {
    let { original: V, modified: de } = w.current.getModel();
    X.current.editor.setModelLanguage(V, t || r || "text"), X.current.editor.setModelLanguage(de, o || r || "text");
  }, [r, t, o], N), Ve(() => {
    X.current?.editor.setTheme(u);
  }, [u], N), Ve(() => {
    w.current?.updateOptions(c);
  }, [c], N);
  let be = vr(() => {
    if (!X.current)
      return;
    F.current(X.current);
    let V = Ir(X.current, e || "", t || r || "text", i || ""), de = Ir(X.current, n || "", o || r || "text", s || "");
    w.current?.setModel({ original: V, modified: de });
  }, [r, n, o, e, t, i, s]), Ce = vr(() => {
    !Fe.current && se.current && (w.current = X.current.editor.createDiffEditor(se.current, { automaticLayout: !0, ...c }), be(), X.current?.editor.setTheme(u), C(!0), Fe.current = !0);
  }, [c, u, be]);
  ye(() => {
    N && x.current(w.current, X.current);
  }, [N]), ye(() => {
    !H && !N && Ce();
  }, [H, N, Ce]), Ve(() => {
    if (w.current && X.current) {
      let V = w.current.getOriginalEditor(), de = Ir(X.current, e || "", t || r || "text", i || "");
      de !== V.getModel() && V.setModel(de);
    }
  }, [i], N), Ve(() => {
    if (w.current && X.current) {
      let V = w.current.getModifiedEditor(), de = Ir(X.current, n || "", o || r || "text", s || "");
      de !== V.getModel() && V.setModel(de);
    }
  }, [s], N);
  function De() {
    let V = w.current?.getModel();
    a || V?.original?.dispose(), _ || V?.modified?.dispose(), w.current?.dispose();
  }
  return me.createElement(gl, { width: O, height: E, isEditorReady: N, loading: l, _ref: se, className: d, wrapperProps: h });
}
var sN = iN;
Gr(sN);
function aN() {
  let [e, n] = qn(jo.__getMonacoInstance());
  return ea(() => {
    let r;
    return e || (r = jo.init(), r.then((t) => {
      n(t);
    })), () => r?.cancel();
  }), e;
}
var na = aN;
function _N(e) {
  let n = ce();
  return ye(() => {
    n.current = e;
  }, [e]), n.current;
}
var uN = _N, Jt = /* @__PURE__ */ new Map();
function cN({ defaultValue: e, defaultLanguage: n, defaultPath: r, value: t, language: o, path: i, theme: s = "light", line: a, loading: _ = "Loading...", options: u = {}, overrideServices: l = {}, saveViewState: c = !0, keepCurrentModel: E = !1, width: O = "100%", height: d = "100%", className: h, wrapperProps: p = {}, beforeMount: I = nt, onMount: N = nt, onChange: C, onValidate: H = nt }) {
  let [f, w] = qn(!1), [X, se] = qn(!0), x = ce(null), F = ce(null), Fe = ce(null), be = ce(N), Ce = ce(I), De = ce(), V = ce(t), de = uN(i), ke = ce(!1), Ue = ce(!1);
  ea(() => {
    let pe = jo.init();
    return pe.then((v) => (x.current = v) && se(!1)).catch((v) => v?.type !== "cancelation" && console.error("Monaco initialization: error:", v)), () => F.current ? xn() : pe.cancel();
  }), Ve(() => {
    let pe = Ir(x.current, e || t || "", n || o || "", i || r || "");
    pe !== F.current?.getModel() && (c && Jt.set(de, F.current?.saveViewState()), F.current?.setModel(pe), c && F.current?.restoreViewState(Jt.get(i)));
  }, [i], f), Ve(() => {
    F.current?.updateOptions(u);
  }, [u], f), Ve(() => {
    !F.current || t === void 0 || (F.current.getOption(x.current.editor.EditorOption.readOnly) ? F.current.setValue(t) : t !== F.current.getValue() && (Ue.current = !0, F.current.executeEdits("", [{ range: F.current.getModel().getFullModelRange(), text: t, forceMoveMarkers: !0 }]), F.current.pushUndoStop(), Ue.current = !1));
  }, [t], f), Ve(() => {
    let pe = F.current?.getModel();
    pe && o && x.current?.editor.setModelLanguage(pe, o);
  }, [o], f), Ve(() => {
    a !== void 0 && F.current?.revealLine(a);
  }, [a], f), Ve(() => {
    x.current?.editor.setTheme(s);
  }, [s], f);
  let kn = vr(() => {
    if (!(!Fe.current || !x.current) && !ke.current) {
      Ce.current(x.current);
      let pe = i || r, v = Ir(x.current, t || e || "", n || o || "", pe || "");
      F.current = x.current?.editor.create(Fe.current, { model: v, automaticLayout: !0, ...u }, l), c && F.current.restoreViewState(Jt.get(pe)), x.current.editor.setTheme(s), w(!0), ke.current = !0;
    }
  }, [e, n, r, t, o, i, u, l, c, s]);
  ye(() => {
    f && be.current(F.current, x.current);
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
    De.current?.dispose(), E ? c && Jt.set(i, F.current.saveViewState()) : F.current.getModel()?.dispose(), F.current.dispose();
  }
  return me.createElement(gl, { width: O, height: d, isEditorReady: f, loading: _, _ref: Fe, className: h, wrapperProps: p });
}
var lN = cN, dN = Gr(lN), hN = dN;
const mN = () => na()?.editor.getEditors()[0], pN = () => {
  const e = mN();
  return {
    find: async () => {
      await e.getAction("actions.find")?.run();
    },
    replace: async () => {
      await e.getAction("editor.action.startFindReplaceAction")?.run();
    }
  };
}, fN = Ne.div`
  background: ${({ theme: e }) => e.grey};
  border-right: 2px solid ${({ theme: e }) => e.lightGrey};
  box-sizing: border-box;
  ${sn("60px", "100%")};
  ${Vr("space-between", "center", "column")};
  padding-bottom: 15px;
`, jn = Ne.div`
  ${sn("23px")}
  svg {
    ${sn()}
    color: ${({ theme: e }) => e.secondaryGrey};
    ${({ theme: e }) => us(e.light)}
  }
  margin-top: 20px;
  cursor: pointer;
  user-select: none;
`, TN = () => {
  const e = eO(), n = wt(), r = pN(), t = n.state.selectedTerminalTab, o = (i) => () => {
    if (t === i)
      return n.toggle("isTerminalOpened");
    n.update({
      selectedTerminalTab: i,
      isTerminalOpened: !0
    });
  };
  return /* @__PURE__ */ ve(fN, { children: [
    /* @__PURE__ */ ve("div", { children: [
      /* @__PURE__ */ U(jn, { onClick: r.find, children: /* @__PURE__ */ U(qR, {}) }),
      /* @__PURE__ */ U(jn, { onClick: r.replace, children: /* @__PURE__ */ U(JR, {}) }),
      /* @__PURE__ */ U(jn, { onClick: e, children: /* @__PURE__ */ U(r1, {}) }),
      /* @__PURE__ */ U(jn, { onClick: o("terminal"), children: /* @__PURE__ */ U(ZR, {}) }),
      /* @__PURE__ */ U(jn, { onClick: o("test_cases"), children: /* @__PURE__ */ U(e1, {}) })
    ] }),
    /* @__PURE__ */ ve("div", { children: [
      /* @__PURE__ */ U(jn, { children: /* @__PURE__ */ U(t1, {}) }),
      /* @__PURE__ */ U(jn, { children: /* @__PURE__ */ U(S_, { to: Lc.ABOUT, children: /* @__PURE__ */ U(n1, {}) }) })
    ] })
  ] });
};
class EN {
  constructor(n) {
    er(this), this.state = n, this.getters = n.getters;
  }
  saveContent(n, r) {
    this.getters.getActiveTab(r).setTabContent(n);
  }
}
const cs = [
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
], ra = {
  js: "javascript",
  ts: "typescript",
  tsx: "typescript",
  jsx: "typescript",
  html: "html",
  htm: "html",
  txt: "text",
  css: "css"
}, Sl = 9, ON = [
  "java",
  "python",
  "cpp",
  "c",
  "go",
  "cs",
  "javascript"
], RN = () => [...new Set(Object.values(ra))].map((n) => ({
  value: n,
  label: n
})), NN = tr(() => {
  const e = RN(), n = Mt(), r = n.getActiveLanguage(), t = n.getActiveTab();
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
const bN = new Uint8Array(16);
function IN() {
  if (!qt && (qt = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !qt))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return qt(bN);
}
const Se = [];
for (let e = 0; e < 256; ++e)
  Se.push((e + 256).toString(16).slice(1));
function gN(e, n = 0) {
  return (Se[e[n + 0]] + Se[e[n + 1]] + Se[e[n + 2]] + Se[e[n + 3]] + "-" + Se[e[n + 4]] + Se[e[n + 5]] + "-" + Se[e[n + 6]] + Se[e[n + 7]] + "-" + Se[e[n + 8]] + Se[e[n + 9]] + "-" + Se[e[n + 10]] + Se[e[n + 11]] + Se[e[n + 12]] + Se[e[n + 13]] + Se[e[n + 14]] + Se[e[n + 15]]).toLowerCase();
}
const AN = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), p_ = {
  randomUUID: AN
};
function SN(e, n, r) {
  if (p_.randomUUID && !n && !e)
    return p_.randomUUID();
  e = e || {};
  const t = e.random || (e.rng || IN)();
  if (t[6] = t[6] & 15 | 64, t[8] = t[8] & 63 | 128, n) {
    r = r || 0;
    for (let o = 0; o < 16; ++o)
      n[r + o] = t[o];
    return n;
  }
  return gN(t);
}
class Gl {
  constructor({ lastNumber: n, fileData: r, instance: t }) {
    this._key = SN(), this._fileHandle = null, this._label = "Untitled", this._content = "", this.idx = 0, this.lang = "text", this.wasChanged = !1, er(this), t ? this.initUsingInstance(t) : r && this.initUsingFileData(r), n && (this.idx = n + 1);
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
const GN = (e) => e.length >= Sl;
class vN {
  constructor(n) {
    er(this), this.state = n;
  }
  createTab(n) {
    const r = this.state.content;
    if (GN(r))
      return;
    const t = r.at(-1)?.idx, o = new Gl({ fileData: n, lastNumber: t });
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
const CN = (e) => e.map((n) => ({
  label: n.getLabel(),
  key: n.getKeyId()
})), DN = Ne(G_)`
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
`, UN = tr(() => {
  const { activeKey: e, content: n } = Fr(), r = or(), t = CN(n);
  return /* @__PURE__ */ U(
    DN,
    {
      type: "editable-card",
      onChange: (s) => {
        r.tabs.changeActiveTab(s);
      },
      activeKey: e,
      onEdit: (s, a) => {
        a === "add" ? r.tabs.createTab() : r.tabs.removeTab(s);
      },
      items: fu(t),
      hideAdd: n.length >= Sl
    }
  );
}), HN = tr(() => {
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
      options: cs.map((o) => ({
        value: o,
        label: o
      }))
    }
  );
}), yN = {
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
}, PN = [1, 2, 3, 4, 5, 6, 7, 8, 9], wN = () => {
  const e = Bc(), { tabs: n } = or(), { content: r } = Fr();
  ye(() => (e.on(Object.fromEntries(PN.map((t) => {
    const i = r[t - 1]?.getKeyId();
    return [
      t.toString(),
      i ? () => n.changeActiveTab(i) : null
    ];
  }))), () => {
    e.clear();
  }), [r.length]);
}, MN = (e) => rs(e) ? "name" in e && typeof e.name == "string" && "type" in e && typeof e.type == "string" && "content" in e && typeof e.content == "string" : !1, vl = (e) => {
  const n = e.split(".").at(-1);
  return kN(n) ? [ra[n], n] : ["text", n];
};
function kN(e) {
  return e in ra;
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
}, xN = {
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
}, LN = () => async () => {
  if ("showOpenFilePicker" in window) {
    const [e] = await window.showOpenFilePicker(xN), n = await e.getFile(), r = await n.text(), [t] = vl(n.name);
    return {
      name: n.name,
      type: n.type,
      content: r,
      fileHandle: e,
      language: t
    };
  }
  console.warn(di.NotSupportedByBrowser());
}, BN = () => async (e, n) => {
  try {
    let r = e;
    RO(e?.createWritable) || (r = await window.showSaveFilePicker());
    const t = await r.createWritable();
    return await t.write(n), await t.close(), r;
  } catch {
    console.warn(di.NotSupportedByBrowser());
  }
}, Cl = () => {
  const e = LN(), n = BN(), r = or(), t = Mt();
  return {
    openFile: vr(async () => {
      const s = await e();
      MN(s) && r.tabs.createTab(s);
    }, []),
    saveFile: async () => {
      const s = t.getActiveTab(), a = s.getFileHandle(), _ = s.getContent();
      if (!s.wasChanged)
        return;
      const u = await n(a, _);
      u && (s.setFileHandle(u), s.lang = vl(u.name));
    }
  };
}, jN = () => {
  const e = or(), n = Bc(), { openFile: r, saveFile: t } = Cl();
  wN(), ye(() => (n.on({
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
}, FN = Ne.div`
  width: 100%;
`, VN = Ne.div`
  ${Vr("space-between")}
  ${sn("100%", "48px")}
  margin-bottom: 10px;
`, WN = Ne.div`
  width: 30%;
  display: flex;
  gap: 30px;
  align-items: flex-end;
`, XN = tr(() => {
  const { editor: e } = or(), n = Mt(), { theme: r, content: t } = Fr(), o = new Pt(), i = QE(() => {
    o.set("EDITOR_CONTENT_DATA", t);
  }, 1e3), s = n.getActiveTabText(), a = n.getActiveLanguage();
  jN();
  const _ = na(), u = (l) => {
    rl(l) && (e.saveContent(l), i());
  };
  return ye(() => {
    _?.editor.setTheme(r);
  }, [r]), /* @__PURE__ */ ve(FN, { children: [
    /* @__PURE__ */ ve(VN, { children: [
      /* @__PURE__ */ U(UN, {}),
      /* @__PURE__ */ ve(WN, { children: [
        /* @__PURE__ */ U(HN, {}),
        /* @__PURE__ */ U(NN, {})
      ] })
    ] }),
    /* @__PURE__ */ U(
      hN,
      {
        height: "90vh",
        theme: "vs-dark",
        onChange: u,
        language: a,
        value: fu(s),
        options: yN
      }
    )
  ] });
}), YN = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMjMiIHZpZXdCb3g9IjAgMCAxNyAyMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0Ljk4OTcgMTUuNDA5NEwxNC40MjE2IDE1Ljc3NTJDMTQuNzcxMiAxNS40NTUxIDE1LjAzMzQgMTQuOTk3OCAxNS4wMzM0IDE0LjU0MDZDMTUuMDMzNCAxMy43NjMzIDE0LjY4MzggMTMuMTIzMSAxMy41NDc1IDEyLjU3NDRMMy44NDU3NSA4LjEzOTA3QzEuODc5MTcgNy4yMjQ1NiAwLjY1NTUxOCA2LjA4MTQ0IDAuNjU1NTE4IDQuMDIzODFDMC42NTU1MTggMi4xNDkwOCAxLjU3MzI1IDAuOTE0NTAyIDIuOTcxNzEgMEMyLjc1MzIgMC4zMjAwNzYgMi42MjIxIDAuNzMxNjAyIDIuNjIyMSAxLjIzNDU4QzIuNjIyMSAyLjM3NzcgMy41Mzk4NCAyLjg4MDY4IDQuNDU3NTcgMy4yOTIyMUwxMy44OTcyIDcuNjM2MDlDMTUuNjAxNSA4LjQxMzQyIDE3IDkuNjQ3OTkgMTcgMTEuNzk3MUMxNyAxMy41MzQ2IDE2LjIxMzQgMTQuNjMyIDE0Ljk4OTcgMTUuNDA5NFoiIGZpbGw9IiMwMTY4QTIiLz4KPHBhdGggZD0iTTEwLjU5MzMgMTEuMTM1OUwxMy42NTI0IDEyLjU1MzRDMTQuNzg4NyAxMy4xMDIxIDE1LjEzODMgMTMuNjk2NSAxNS4xMzgzIDE0LjUxOTZDMTUuMTM4MyAxNC45NzY4IDE0Ljg3NjEgMTUuNDM0MSAxNC41MjY0IDE1Ljc1NDJMOS4zNjk2MyAxMy4zNzY1TDEwLjI0MzcgMTIuODczNUMxMC45ODY2IDEyLjQ2MiAxMS4yMDUxIDEyLjE4NzYgMTEuMjA1MSAxMS45MTMzQzExLjI0ODggMTEuNTkzMiAxMS4wNzQgMTEuMzY0NiAxMC41OTMzIDExLjEzNTlaIiBmaWxsPSIjMDE2OEExIi8+CjxwYXRoIGQ9Ik01LjE1NjgxIDIyLjA4NTRDNC40NTc1OCAyMi40OTcgMy44NDU3NiAyMi43NzEzIDMuMTkwMjMgMjIuNzcxM0MxLjQ4NTg2IDIyLjc3MTMgMC4wODc0MDM1IDIxLjMwODEgMCAxOS41NzA1TDMuMjc3NjMgMTcuNTEyOUw4LjQzNDQ0IDE5LjkzNjNMNS4xNTY4MSAyMi4wODU0WiIgZmlsbD0iIzAxNjhBMSIvPgo8cGF0aCBkPSJNNi45MzI1NiAxMy4yODAxTDQuNDg1MjYgMTIuMTM3QzMuMzkyNzEgMTEuNjM0IDIuMzg3NTcgMTEuMjIyNSAyLjM4NzU3IDkuOTQyMTZDMi4zODc1NyA5LjMwMiAyLjU2MjM4IDguOTM2MiAyLjg2ODI5IDguNjE2MTNMOC4wMjUxIDEwLjk5MzhMNi43NTc3NSAxMS43NzEyQzYuNDA4MTQgMTEuOTk5OCA2LjE0NTkzIDEyLjE4MjcgNi4xNDU5MyAxMi41MDI4QzYuMTQ1OTMgMTIuNzc3MSA2LjQ5NTU0IDEzLjA1MTUgNi45MzI1NiAxMy4yODAxWiIgZmlsbD0iIzE1NTQ3NyIvPgo8cGF0aCBkPSJNMTUuOTA3NCAyM0MxNC41OTY0IDIxLjk0ODMgMTMuMTk3OSAyMS4yNjI0IDExLjUzNzMgMjAuNDM5NEwzLjc1ODM1IDE2LjgyNzFDMS43OTE3NyAxNS45MTI2IDAuNDgwNzEzIDE0LjY3OCAwLjQ4MDcxMyAxMi42NjYxQzAuNDgwNzEzIDEwLjY1NDIgMS4zOTg0NSA5LjY5Mzk5IDIuNTc4NCA4LjkxNjY2TDMuMDE1NDIgOC42NDIzMUMyLjcwOTUgOC45NjIzOSAyLjUzNDcgOS4zMjgxOSAyLjUzNDcgOS45NjgzNEMyLjUzNDcgMTEuMjAyOSAzLjU4MzU0IDExLjY2MDIgNC42MzIzOCAxMi4xNjMxTDEzLjY3ODcgMTYuMzI0MUMxNS4yNTE5IDE3LjAxIDE2LjY5NDEgMTguMjQ0NiAxNi42OTQxIDIwLjM0NzlDMTYuNzgxNSAyMS40OTExIDE2LjM0NDUgMjIuNDk3IDE1LjkwNzQgMjNaIiBmaWxsPSIjMTU1NDc3Ii8+Cjwvc3ZnPgo=", KN = Ne.div`
  ${sn("23%", "28px")}
  ${Vr("flex-start", "center")}
  gap: 23px;
`, Zt = Ne.span`
  color: ${({ theme: e }) => e.light};
  cursor: pointer;
`, $N = () => {
  const e = ol(), n = or(), { openFile: r, saveFile: t } = Cl(), o = async () => {
    await e.requestCodeExecution();
  }, i = () => {
    n.tabs.createTab();
  };
  return /* @__PURE__ */ ve(KN, { children: [
    /* @__PURE__ */ U(S_, { to: Lc.MAIN, children: /* @__PURE__ */ U("img", { src: YN }) }),
    /* @__PURE__ */ U(Zt, { onClick: r, children: "Open" }),
    /* @__PURE__ */ U(Zt, { onClick: t, children: "Save" }),
    /* @__PURE__ */ U(Zt, { onClick: i, children: "New" }),
    /* @__PURE__ */ U(Zt, { onClick: o, children: "Run" })
  ] });
}, zN = Ne.div`
  ${sn("23%", "100%")};
  ${Vr("flex-start", "center")};
`, JN = Ne(jn)`
  margin-top: 0;
  margin-left: 20px;
  svg {
    color: ${({ theme: e, $disabled: n }) => n ? e.secondaryGrey : e.light};
  }
`, qN = tr(() => {
  const e = ol(), r = !Mt().isAllowedToExecute(), t = wt();
  return /* @__PURE__ */ U(zN, { children: /* @__PURE__ */ U(JN, { onClick: async () => {
    r || (await e.requestCodeExecution(), t.update({
      isTerminalOpened: !0,
      selectedTerminalTab: "terminal"
    }));
  }, $disabled: r, children: /* @__PURE__ */ U(o1, {}) }) });
}), ZN = Ne.div`
  background: ${({ theme: e }) => e.grey};
  border-bottom: 2px solid ${({ theme: e }) => e.lightGrey};
  height: ${sn("100%", "44px")};
  box-sizing: border-box;
  ${Vr("space-between", "center")}
  ${MR(23)}
`, QN = Ne.h2`
  color: ${({ theme: e }) => e.light}
`, eb = tr(() => {
  const n = Mt().getActiveTab();
  return /* @__PURE__ */ ve(ZN, { children: [
    /* @__PURE__ */ U($N, {}),
    /* @__PURE__ */ ve(QN, { children: [
      "$",
      n.getLabel(),
      " - CodeGear"
    ] }),
    /* @__PURE__ */ U(qN, {})
  ] });
});
class nb {
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
    return ON.includes(n);
  }
}
class rb {
  constructor(n) {
    er(this), this.state = n, this.getters = n.getters, this.tabs = new vN(n), this.editor = new EN(n), this.terminal = new bO(n), this.storage = new Pt();
  }
  changeTheme(n) {
    this.state.theme = n;
  }
}
class tb {
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
class ob {
  constructor() {
    this.activeKey = "", this.content = [], this.theme = "vs-dark", this.executeMessages = [], er(this), this.getters = new nb(this), this.actions = new rb(this), this.services = new tb(this);
    const n = new Pt();
    this.theme = n.get("EDITOR_THEME", "vs-dark");
    const r = n.get("EDITOR_CONTENT_DATA", []);
    this.executeMessages = n.get("EDITOR_EXECUTE_MESSAGES", []), r.length || this.actions.tabs.createTab();
    for (const o of r)
      this.content.push(new Gl({ instance: o }));
    const t = this.content[0];
    this.activeKey = t.getKeyId();
  }
}
const Lt = ls({}), ib = ({ children: e }) => {
  const n = new ob();
  return /* @__PURE__ */ U(Lt.Provider, { value: n, children: e });
}, Dl = ls({}), sb = ({ children: e }) => {
  const n = Pi(() => ({
    isSettingsOpened: !1,
    isTerminalOpened: !1,
    selectedTerminalTab: "terminal"
  }), []), r = (a, _) => ({ ...a, ..._ }), [t, o] = Ml(r, n), i = (a) => {
    t[a] ? o({ [a]: !1 }) : o({ [a]: !0 });
  }, s = Pi(() => ({
    state: t,
    update: o,
    toggle: i
  }), [t]);
  return /* @__PURE__ */ U(Dl.Provider, { value: s, children: e });
};
function ab(e, n) {
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
var _b = P.__e;
P.__e = function(e, n, r, t) {
  if (e.then) {
    for (var o, i = n; i = i.__; )
      if ((o = i.__c) && o.__c)
        return n.__e == null && (n.__e = r.__e, n.__k = r.__k), o.__c(e, n);
  }
  _b(e, n, r, t);
};
var O_ = P.unmount;
function Ul(e, n, r) {
  return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(t) {
    typeof t.__c == "function" && t.__c();
  }), e.__c.__H = null), (e = ab({}, e)).__c != null && (e.__c.__P === r && (e.__c.__P = n), e.__c = null), e.__k = e.__k && e.__k.map(function(t) {
    return Ul(t, n, r);
  })), e;
}
function Hl(e, n, r) {
  return e && (e.__v = null, e.__k = e.__k && e.__k.map(function(t) {
    return Hl(t, n, r);
  }), e.__c && e.__c.__P === n && (e.__e && r.insertBefore(e.__e, e.__d), e.__c.__e = !0, e.__c.__P = r)), e;
}
function yi() {
  this.__u = 0, this.t = null, this.__b = null;
}
function yl(e) {
  var n = e.__.__c;
  return n && n.__a && n.__a(e);
}
function Qt() {
  this.u = null, this.o = null;
}
P.unmount = function(e) {
  var n = e.__c;
  n && n.__R && n.__R(), n && e.__h === !0 && (e.type = null), O_ && O_(e);
}, (yi.prototype = new Cn()).__c = function(e, n) {
  var r = n.__c, t = this;
  t.t == null && (t.t = []), t.t.push(r);
  var o = yl(t.__v), i = !1, s = function() {
    i || (i = !0, r.__R = null, o ? o(a) : a());
  };
  r.__R = s;
  var a = function() {
    if (!--t.__u) {
      if (t.state.__a) {
        var u = t.state.__a;
        t.__v.__k[0] = Hl(u, u.__c.__P, u.__c.__O);
      }
      var l;
      for (t.setState({ __a: t.__b = null }); l = t.t.pop(); )
        l.forceUpdate();
    }
  }, _ = n.__h === !0;
  t.__u++ || _ || t.setState({ __a: t.__b = t.__v.__k[0] }), e.then(s, s);
}, yi.prototype.componentWillUnmount = function() {
  this.t = [];
}, yi.prototype.render = function(e, n) {
  if (this.__b) {
    if (this.__v.__k) {
      var r = document.createElement("div"), t = this.__v.__k[0].__c;
      this.__v.__k[0] = Ul(this.__b, r, t.__O = t.__P);
    }
    this.__b = null;
  }
  var o = n.__a && ya(lt, null, e.fallback);
  return o && (o.__h = null), [ya(lt, null, n.__a ? null : e.children), o];
};
var R_ = function(e, n, r) {
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
  var n = this, r = yl(n.__v), t = n.o.get(e);
  return t[0]++, function(o) {
    var i = function() {
      n.props.revealOrder ? (t.push(o), R_(n, e, t)) : o();
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
    R_(e, r, n);
  });
};
var ub = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, cb = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, lb = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, db = /[A-Z0-9]/g, hb = typeof document < "u", mb = function(e) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e);
};
Cn.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
  Object.defineProperty(Cn.prototype, e, { configurable: !0, get: function() {
    return this["UNSAFE_" + e];
  }, set: function(n) {
    Object.defineProperty(this, e, { configurable: !0, writable: !0, value: n });
  } });
});
var N_ = P.event;
function pb() {
}
function fb() {
  return this.cancelBubble;
}
function Tb() {
  return this.defaultPrevented;
}
P.event = function(e) {
  return N_ && (e = N_(e)), e.persist = pb, e.isPropagationStopped = fb, e.isDefaultPrevented = Tb, e.nativeEvent = e;
};
var Eb = { enumerable: !1, configurable: !0, get: function() {
  return this.class;
} }, b_ = P.vnode;
P.vnode = function(e) {
  typeof e.type == "string" && function(n) {
    var r = n.props, t = n.type, o = {};
    for (var i in r) {
      var s = r[i];
      if (!(i === "value" && "defaultValue" in r && s == null || hb && i === "children" && t === "noscript" || i === "class" || i === "className")) {
        var a = i.toLowerCase();
        i === "defaultValue" && "value" in r && r.value == null ? i = "value" : i === "download" && s === !0 ? s = "" : a === "ondoubleclick" ? i = "ondblclick" : a !== "onchange" || t !== "input" && t !== "textarea" || mb(r.type) ? a === "onfocus" ? i = "onfocusin" : a === "onblur" ? i = "onfocusout" : lb.test(i) ? i = a : t.indexOf("-") === -1 && cb.test(i) ? i = i.replace(db, "-$&").toLowerCase() : s === null && (s = void 0) : a = i = "oninput", a === "oninput" && o[i = a] && (i = "oninputCapture"), o[i] = s;
      }
    }
    t == "select" && o.multiple && Array.isArray(o.value) && (o.value = Mo(r.children).forEach(function(_) {
      _.props.selected = o.value.indexOf(_.props.value) != -1;
    })), t == "select" && o.defaultValue != null && (o.value = Mo(r.children).forEach(function(_) {
      _.props.selected = o.multiple ? o.defaultValue.indexOf(_.props.value) != -1 : o.defaultValue == _.props.value;
    })), r.class && !r.className ? (o.class = r.class, Object.defineProperty(o, "className", Eb)) : (r.className && !r.class || r.class && r.className) && (o.class = o.className = r.className), n.props = o;
  }(e), e.$$typeof = ub, b_ && b_(e);
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
function Ob(e) {
  if (!(rs(e) && "base" in e && typeof e.base == "string" && "colors" in e && rs(e.colors)))
    throw new Error(di.WrongJsonObject("ThemeObject"));
}
const Rb = () => {
  const e = na(), n = jc(), { theme: r } = Fr();
  return cO(() => {
    let t = 0;
    cs.forEach(async (o) => {
      try {
        const i = await Nb(`./themes/${o}.json`);
        Ob(i), e?.editor.defineTheme(o, i);
      } catch {
        console.log(di.ThemeUpload(o));
      }
      t += 1, t === cs.length && (e?.editor.setTheme(r), n.on());
    });
  }, [e]), n.val;
};
function Nb(e) {
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
const bb = ({ children: e }) => {
  const n = Rb();
  return /* @__PURE__ */ U(yo, { when: n, children: e });
}, Ib = Ne.div`
  ${sn("100vw", "100vh")}
`, gb = Ne.div`
  ${sn("100%", "calc(100% - 45px)")};
  display: flex;
`, Db = () => (nO(), /* @__PURE__ */ U(TO, { children: /* @__PURE__ */ U(ib, { children: /* @__PURE__ */ U(bb, { children: /* @__PURE__ */ U(sb, { children: /* @__PURE__ */ ve(Ib, { children: [
  /* @__PURE__ */ U(eb, {}),
  /* @__PURE__ */ ve(gb, { children: [
    /* @__PURE__ */ U(TN, {}),
    /* @__PURE__ */ U(XN, {}),
    /* @__PURE__ */ U(s1, {})
  ] })
] }) }) }) }) }));
export {
  Db as Editor,
  nb as EditorGetters,
  ob as EditorStore,
  Lt as EditorStoreContext,
  Dl as ModalsContext
};
