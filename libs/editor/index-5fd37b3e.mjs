import * as Kt from "react";
import Ae, { useState as Qe, forwardRef as Zt, memo as er, useContext as Xe, useRef as Z, useCallback as Et, useEffect as Ge, createContext as zi, useMemo as it, createElement as $h, useImperativeHandle as ec, useLayoutEffect as zh, useReducer as Jh, lazy as qh } from "react";
import { jsx as V, jsxs as nn, Fragment as nc } from "react/jsx-runtime";
import { unstable_batchedUpdates as tc } from "react-dom";
import { message as Qh, ConfigProvider as Zh, Button as yr, Select as em, Tabs as rc, Popconfirm as nm } from "antd";
import { Link as tm } from "react-router-dom";
import "react-smooth-scrollbar";
function se(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    t[r - 1] = arguments[r];
  throw new Error(typeof e == "number" ? "[MobX] minified error nr: " + e + (t.length ? " " + t.map(String).join(",") : "") + ". Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts" : "[MobX] " + e);
}
var rm = {};
function qa() {
  return typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : rm;
}
var oc = Object.assign, Ri = Object.getOwnPropertyDescriptor, Dn = Object.defineProperty, fo = Object.prototype, ua = [];
Object.freeze(ua);
var ic = {};
Object.freeze(ic);
var om = typeof Proxy < "u", im = /* @__PURE__ */ Object.toString();
function sc() {
  om || se("Proxy not available");
}
function ac(e) {
  var n = !1;
  return function() {
    if (!n)
      return n = !0, e.apply(this, arguments);
  };
}
var jt = function() {
};
function bn(e) {
  return typeof e == "function";
}
function Ct(e) {
  var n = typeof e;
  switch (n) {
    case "string":
    case "symbol":
    case "number":
      return !0;
  }
  return !1;
}
function Ji(e) {
  return e !== null && typeof e == "object";
}
function zn(e) {
  if (!Ji(e))
    return !1;
  var n = Object.getPrototypeOf(e);
  if (n == null)
    return !0;
  var t = Object.hasOwnProperty.call(n, "constructor") && n.constructor;
  return typeof t == "function" && t.toString() === im;
}
function uc(e) {
  var n = e?.constructor;
  return n ? n.name === "GeneratorFunction" || n.displayName === "GeneratorFunction" : !1;
}
function ho(e, n, t) {
  Dn(e, n, {
    enumerable: !1,
    writable: !0,
    configurable: !0,
    value: t
  });
}
function _c(e, n, t) {
  Dn(e, n, {
    enumerable: !1,
    writable: !1,
    configurable: !0,
    value: t
  });
}
function Ot(e, n) {
  var t = "isMobX" + e;
  return n.prototype[t] = !0, function(r) {
    return Ji(r) && r[t] === !0;
  };
}
function dr(e) {
  return e instanceof Map;
}
function mo(e) {
  return e instanceof Set;
}
var lc = typeof Object.getOwnPropertySymbols < "u";
function sm(e) {
  var n = Object.keys(e);
  if (!lc)
    return n;
  var t = Object.getOwnPropertySymbols(e);
  return t.length ? [].concat(n, t.filter(function(r) {
    return fo.propertyIsEnumerable.call(e, r);
  })) : n;
}
var nr = typeof Reflect < "u" && Reflect.ownKeys ? Reflect.ownKeys : lc ? function(e) {
  return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
} : (
  /* istanbul ignore next */
  Object.getOwnPropertyNames
);
function cc(e) {
  return e === null ? null : typeof e == "object" ? "" + e : e;
}
function Xn(e, n) {
  return fo.hasOwnProperty.call(e, n);
}
var am = Object.getOwnPropertyDescriptors || function(n) {
  var t = {};
  return nr(n).forEach(function(r) {
    t[r] = Ri(n, r);
  }), t;
};
function a_(e, n) {
  for (var t = 0; t < n.length; t++) {
    var r = n[t];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, lm(r.key), r);
  }
}
function Qa(e, n, t) {
  return n && a_(e.prototype, n), t && a_(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function tr() {
  return tr = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = arguments[n];
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    }
    return e;
  }, tr.apply(this, arguments);
}
function dc(e, n) {
  e.prototype = Object.create(n.prototype), e.prototype.constructor = e, _a(e, n);
}
function _a(e, n) {
  return _a = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, _a(e, n);
}
function Ms(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function um(e, n) {
  if (e) {
    if (typeof e == "string")
      return u_(e, n);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set")
      return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return u_(e, n);
  }
}
function u_(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var t = 0, r = new Array(n); t < n; t++)
    r[t] = e[t];
  return r;
}
function Ft(e, n) {
  var t = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t)
    return (t = t.call(e)).next.bind(t);
  if (Array.isArray(e) || (t = um(e)) || n && e && typeof e.length == "number") {
    t && (e = t);
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
function _m(e, n) {
  if (typeof e != "object" || e === null)
    return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var r = t.call(e, n || "default");
    if (typeof r != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(e);
}
function lm(e) {
  var n = _m(e, "string");
  return typeof n == "symbol" ? n : String(n);
}
var Gn = /* @__PURE__ */ Symbol("mobx-stored-annotations");
function Un(e) {
  function n(t, r) {
    po(t, r, e);
  }
  return Object.assign(n, e);
}
function po(e, n, t) {
  Xn(e, Gn) || ho(e, Gn, tr({}, e[Gn])), Om(t) || (e[Gn][n] = t);
}
function cm(e) {
  return Xn(e, Gn) || ho(e, Gn, tr({}, e[Gn])), e[Gn];
}
var W = /* @__PURE__ */ Symbol("mobx administration"), To = /* @__PURE__ */ function() {
  function e(t) {
    t === void 0 && (t = "Atom"), this.name_ = void 0, this.isPendingUnobservation_ = !1, this.isBeingObserved_ = !1, this.observers_ = /* @__PURE__ */ new Set(), this.diffValue_ = 0, this.lastAccessedBy_ = 0, this.lowestObserverState_ = ie.NOT_TRACKING_, this.onBOL = void 0, this.onBUOL = void 0, this.name_ = t;
  }
  var n = e.prototype;
  return n.onBO = function() {
    this.onBOL && this.onBOL.forEach(function(r) {
      return r();
    });
  }, n.onBUO = function() {
    this.onBUOL && this.onBUOL.forEach(function(r) {
      return r();
    });
  }, n.reportObserved = function() {
    return yc(this);
  }, n.reportChanged = function() {
    ze(), Hc(this), v.stateVersion = v.stateVersion < Number.MAX_SAFE_INTEGER ? v.stateVersion + 1 : Number.MIN_SAFE_INTEGER, Je();
  }, n.toString = function() {
    return this.name_;
  }, e;
}(), Za = /* @__PURE__ */ Ot("Atom", To);
function fc(e, n, t) {
  n === void 0 && (n = jt), t === void 0 && (t = jt);
  var r = new To(e);
  return n !== jt && Rp(r, n), t !== jt && Bc(r, t), r;
}
function dm(e, n) {
  return e === n;
}
function fm(e, n) {
  return su(e, n);
}
function hm(e, n) {
  return su(e, n, 1);
}
function mm(e, n) {
  return Object.is ? Object.is(e, n) : e === n ? e !== 0 || 1 / e === 1 / n : e !== e && n !== n;
}
var bi = {
  identity: dm,
  structural: fm,
  default: mm,
  shallow: hm
};
function rr(e, n, t) {
  return ru(e) ? e : Array.isArray(e) ? xe.array(e, {
    name: t
  }) : zn(e) ? xe.object(e, void 0, {
    name: t
  }) : dr(e) ? xe.map(e, {
    name: t
  }) : mo(e) ? xe.set(e, {
    name: t
  }) : typeof e == "function" && !tu(e) && !Si(e) ? uc(e) ? $r(e) : Kr(t, e) : e;
}
function pm(e, n, t) {
  if (e == null || ir(e) || Io(e) || gt(e) || Ut(e))
    return e;
  if (Array.isArray(e))
    return xe.array(e, {
      name: t,
      deep: !1
    });
  if (zn(e))
    return xe.object(e, void 0, {
      name: t,
      deep: !1
    });
  if (dr(e))
    return xe.map(e, {
      name: t,
      deep: !1
    });
  if (mo(e))
    return xe.set(e, {
      name: t,
      deep: !1
    });
}
function qi(e) {
  return e;
}
function Tm(e, n) {
  return su(e, n) ? n : e;
}
var Em = "override";
function Om(e) {
  return e.annotationType_ === Em;
}
function Eo(e, n) {
  return {
    annotationType_: e,
    options_: n,
    make_: Rm,
    extend_: bm
  };
}
function Rm(e, n, t, r) {
  var o;
  if ((o = this.options_) != null && o.bound)
    return this.extend_(e, n, t, !1) === null ? 0 : 1;
  if (r === e.target_)
    return this.extend_(e, n, t, !1) === null ? 0 : 2;
  if (tu(t.value))
    return 1;
  var i = hc(e, this, n, t, !1);
  return Dn(r, n, i), 2;
}
function bm(e, n, t, r) {
  var o = hc(e, this, n, t);
  return e.defineProperty_(n, o, r);
}
function gm(e, n, t, r) {
  n.annotationType_, r.value;
}
function hc(e, n, t, r, o) {
  var i, s, a, u, _, c, l;
  o === void 0 && (o = v.safeDescriptors), gm(e, n, t, r);
  var m = r.value;
  if ((i = n.options_) != null && i.bound) {
    var T;
    m = m.bind((T = e.proxy_) != null ? T : e.target_);
  }
  return {
    value: or(
      (s = (a = n.options_) == null ? void 0 : a.name) != null ? s : t.toString(),
      m,
      (u = (_ = n.options_) == null ? void 0 : _.autoAction) != null ? u : !1,
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
function mc(e, n) {
  return {
    annotationType_: e,
    options_: n,
    make_: Nm,
    extend_: Im
  };
}
function Nm(e, n, t, r) {
  var o;
  if (r === e.target_)
    return this.extend_(e, n, t, !1) === null ? 0 : 2;
  if ((o = this.options_) != null && o.bound && (!Xn(e.target_, n) || !Si(e.target_[n])) && this.extend_(e, n, t, !1) === null)
    return 0;
  if (Si(t.value))
    return 1;
  var i = pc(e, this, n, t, !1, !1);
  return Dn(r, n, i), 2;
}
function Im(e, n, t, r) {
  var o, i = pc(e, this, n, t, (o = this.options_) == null ? void 0 : o.bound);
  return e.defineProperty_(n, i, r);
}
function Am(e, n, t, r) {
  n.annotationType_, r.value;
}
function pc(e, n, t, r, o, i) {
  i === void 0 && (i = v.safeDescriptors), Am(e, n, t, r);
  var s = r.value;
  if (Si(s) || (s = $r(s)), o) {
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
function eu(e, n) {
  return {
    annotationType_: e,
    options_: n,
    make_: Sm,
    extend_: vm
  };
}
function Sm(e, n, t) {
  return this.extend_(e, n, t, !1) === null ? 0 : 1;
}
function vm(e, n, t, r) {
  return Gm(e, this, n, t), e.defineComputedProperty_(n, tr({}, this.options_, {
    get: t.get,
    set: t.set
  }), r);
}
function Gm(e, n, t, r) {
  n.annotationType_, r.get;
}
function Qi(e, n) {
  return {
    annotationType_: e,
    options_: n,
    make_: Cm,
    extend_: Dm
  };
}
function Cm(e, n, t) {
  return this.extend_(e, n, t, !1) === null ? 0 : 1;
}
function Dm(e, n, t, r) {
  var o, i;
  return Um(e, this), e.defineObservableProperty_(n, t.value, (o = (i = this.options_) == null ? void 0 : i.enhancer) != null ? o : rr, r);
}
function Um(e, n, t, r) {
  n.annotationType_;
}
var ym = "true", Hm = /* @__PURE__ */ Tc();
function Tc(e) {
  return {
    annotationType_: ym,
    options_: e,
    make_: Pm,
    extend_: wm
  };
}
function Pm(e, n, t, r) {
  var o, i;
  if (t.get)
    return Zi.make_(e, n, t, r);
  if (t.set) {
    var s = or(n.toString(), t.set);
    return r === e.target_ ? e.defineProperty_(n, {
      configurable: v.safeDescriptors ? e.isPlainObject_ : !0,
      set: s
    }) === null ? 0 : 2 : (Dn(r, n, {
      configurable: !0,
      set: s
    }), 2);
  }
  if (r !== e.target_ && typeof t.value == "function") {
    var a;
    if (uc(t.value)) {
      var u, _ = (u = this.options_) != null && u.autoBind ? $r.bound : $r;
      return _.make_(e, n, t, r);
    }
    var c = (a = this.options_) != null && a.autoBind ? Kr.bound : Kr;
    return c.make_(e, n, t, r);
  }
  var l = ((o = this.options_) == null ? void 0 : o.deep) === !1 ? xe.ref : xe;
  if (typeof t.value == "function" && (i = this.options_) != null && i.autoBind) {
    var m;
    t.value = t.value.bind((m = e.proxy_) != null ? m : e.target_);
  }
  return l.make_(e, n, t, r);
}
function wm(e, n, t, r) {
  var o, i;
  if (t.get)
    return Zi.extend_(e, n, t, r);
  if (t.set)
    return e.defineProperty_(n, {
      configurable: v.safeDescriptors ? e.isPlainObject_ : !0,
      set: or(n.toString(), t.set)
    }, r);
  if (typeof t.value == "function" && (o = this.options_) != null && o.autoBind) {
    var s;
    t.value = t.value.bind((s = e.proxy_) != null ? s : e.target_);
  }
  var a = ((i = this.options_) == null ? void 0 : i.deep) === !1 ? xe.ref : xe;
  return a.extend_(e, n, t, r);
}
var Mm = "observable", km = "observable.ref", xm = "observable.shallow", Lm = "observable.struct", Ec = {
  deep: !0,
  name: void 0,
  defaultDecorator: void 0,
  proxy: !0
};
Object.freeze(Ec);
function Lo(e) {
  return e || Ec;
}
var Oc = /* @__PURE__ */ Qi(Mm), Bm = /* @__PURE__ */ Qi(km, {
  enhancer: qi
}), jm = /* @__PURE__ */ Qi(xm, {
  enhancer: pm
}), Fm = /* @__PURE__ */ Qi(Lm, {
  enhancer: Tm
}), Rc = /* @__PURE__ */ Un(Oc);
function Bo(e) {
  return e.deep === !0 ? rr : e.deep === !1 ? qi : Wm(e.defaultDecorator);
}
function Vm(e) {
  var n;
  return e ? (n = e.defaultDecorator) != null ? n : Tc(e) : void 0;
}
function Wm(e) {
  var n, t;
  return e && (n = (t = e.options_) == null ? void 0 : t.enhancer) != null ? n : rr;
}
function bc(e, n, t) {
  if (Ct(n)) {
    po(e, n, Oc);
    return;
  }
  return ru(e) ? e : zn(e) ? xe.object(e, n, t) : Array.isArray(e) ? xe.array(e, n) : dr(e) ? xe.map(e, n) : mo(e) ? xe.set(e, n) : typeof e == "object" && e !== null ? e : xe.box(e, n);
}
oc(bc, Rc);
var Xm = {
  box: function(n, t) {
    var r = Lo(t);
    return new vt(n, Bo(r), r.name, !0, r.equals);
  },
  array: function(n, t) {
    var r = Lo(t);
    return (v.useProxies === !1 || r.proxy === !1 ? Wp : wp)(n, Bo(r), r.name);
  },
  map: function(n, t) {
    var r = Lo(t);
    return new zc(n, Bo(r), r.name);
  },
  set: function(n, t) {
    var r = Lo(t);
    return new Qc(n, Bo(r), r.name);
  },
  object: function(n, t, r) {
    return Fc(v.useProxies === !1 || r?.proxy === !1 ? Ao({}, r) : Up({}, r), n, t);
  },
  ref: /* @__PURE__ */ Un(Bm),
  shallow: /* @__PURE__ */ Un(jm),
  deep: Rc,
  struct: /* @__PURE__ */ Un(Fm)
}, xe = /* @__PURE__ */ oc(bc, Xm), gc = "computed", Ym = "computed.struct", Nc = /* @__PURE__ */ eu(gc), Km = /* @__PURE__ */ eu(Ym, {
  equals: bi.structural
}), Zi = function(n, t) {
  if (Ct(t))
    return po(n, t, Nc);
  if (zn(n))
    return Un(eu(gc, n));
  var r = zn(t) ? t : {};
  return r.get = n, r.name || (r.name = n.name || ""), new Xr(r);
};
Object.assign(Zi, Nc);
Zi.struct = /* @__PURE__ */ Un(Km);
var __, l_, gi = 0, $m = 1, zm = (__ = (l_ = /* @__PURE__ */ Ri(function() {
}, "name")) == null ? void 0 : l_.configurable) != null ? __ : !1, c_ = {
  value: "action",
  configurable: !0,
  writable: !1,
  enumerable: !1
};
function or(e, n, t, r) {
  t === void 0 && (t = !1);
  function o() {
    return Jm(e, t, n, r || this, arguments);
  }
  return o.isMobxAction = !0, zm && (c_.value = e, Dn(o, "name", c_)), o;
}
function Jm(e, n, t, r, o) {
  var i = qm(e, n);
  try {
    return t.apply(r, o);
  } catch (s) {
    throw i.error_ = s, s;
  } finally {
    Qm(i);
  }
}
function qm(e, n, t, r) {
  var o = !1, i = 0, s = v.trackingDerivation, a = !n || !s;
  ze();
  var u = v.allowStateChanges;
  a && (fr(), u = Oo(!0));
  var _ = nu(!0), c = {
    runAsAction_: a,
    prevDerivation_: s,
    prevAllowStateChanges_: u,
    prevAllowStateReads_: _,
    notifySpy_: o,
    startTime_: i,
    actionId_: $m++,
    parentActionId_: gi
  };
  return gi = c.actionId_, c;
}
function Qm(e) {
  gi !== e.actionId_ && se(30), gi = e.parentActionId_, e.error_ !== void 0 && (v.suppressReactionErrors = !0), Ro(e.prevAllowStateChanges_), wr(e.prevAllowStateReads_), Je(), e.runAsAction_ && dt(e.prevDerivation_), v.suppressReactionErrors = !1;
}
function Zm(e, n) {
  var t = Oo(e);
  try {
    return n();
  } finally {
    Ro(t);
  }
}
function Oo(e) {
  var n = v.allowStateChanges;
  return v.allowStateChanges = e, n;
}
function Ro(e) {
  v.allowStateChanges = e;
}
var Ic;
Ic = Symbol.toPrimitive;
var vt = /* @__PURE__ */ function(e) {
  dc(n, e);
  function n(r, o, i, s, a) {
    var u;
    return i === void 0 && (i = "ObservableValue"), a === void 0 && (a = bi.default), u = e.call(this, i) || this, u.enhancer = void 0, u.name_ = void 0, u.equals = void 0, u.hasUnreportedChange_ = !1, u.interceptors_ = void 0, u.changeListeners_ = void 0, u.value_ = void 0, u.dehancer = void 0, u.enhancer = o, u.name_ = i, u.equals = a, u.value_ = o(r, void 0, i), u;
  }
  var t = n.prototype;
  return t.dehanceValue = function(o) {
    return this.dehancer !== void 0 ? this.dehancer(o) : o;
  }, t.set = function(o) {
    this.value_, o = this.prepareNewValue_(o), o !== v.UNCHANGED && this.setNewValue_(o);
  }, t.prepareNewValue_ = function(o) {
    if (an(this)) {
      var i = un(this, {
        object: this,
        type: yn,
        newValue: o
      });
      if (!i)
        return v.UNCHANGED;
      o = i.newValue;
    }
    return o = this.enhancer(o, this.value_, this.name_), this.equals(this.value_, o) ? v.UNCHANGED : o;
  }, t.setNewValue_ = function(o) {
    var i = this.value_;
    this.value_ = o, this.reportChanged(), On(this) && Rn(this, {
      type: yn,
      object: this,
      newValue: o,
      oldValue: i
    });
  }, t.get = function() {
    return this.reportObserved(), this.dehanceValue(this.value_);
  }, t.intercept_ = function(o) {
    return go(this, o);
  }, t.observe_ = function(o, i) {
    return i && o({
      observableKind: "value",
      debugObjectName: this.name_,
      object: this,
      type: yn,
      newValue: this.value_,
      oldValue: void 0
    }), No(this, o);
  }, t.raw = function() {
    return this.value_;
  }, t.toJSON = function() {
    return this.get();
  }, t.toString = function() {
    return this.name_ + "[" + this.value_ + "]";
  }, t.valueOf = function() {
    return cc(this.get());
  }, t[Ic] = function() {
    return this.valueOf();
  }, n;
}(To), ep = /* @__PURE__ */ Ot("ObservableValue", vt), Ac;
Ac = Symbol.toPrimitive;
var Xr = /* @__PURE__ */ function() {
  function e(t) {
    this.dependenciesState_ = ie.NOT_TRACKING_, this.observing_ = [], this.newObserving_ = null, this.isBeingObserved_ = !1, this.isPendingUnobservation_ = !1, this.observers_ = /* @__PURE__ */ new Set(), this.diffValue_ = 0, this.runId_ = 0, this.lastAccessedBy_ = 0, this.lowestObserverState_ = ie.UP_TO_DATE_, this.unboundDepsCount_ = 0, this.value_ = new Ii(null), this.name_ = void 0, this.triggeredBy_ = void 0, this.isComputing_ = !1, this.isRunningSetter_ = !1, this.derivation = void 0, this.setter_ = void 0, this.isTracing_ = Ni.NONE, this.scope_ = void 0, this.equals_ = void 0, this.requiresReaction_ = void 0, this.keepAlive_ = void 0, this.onBOL = void 0, this.onBUOL = void 0, t.get || se(31), this.derivation = t.get, this.name_ = t.name || "ComputedValue", t.set && (this.setter_ = or("ComputedValue-setter", t.set)), this.equals_ = t.equals || (t.compareStructural || t.struct ? bi.structural : bi.default), this.scope_ = t.context, this.requiresReaction_ = t.requiresReaction, this.keepAlive_ = !!t.keepAlive;
  }
  var n = e.prototype;
  return n.onBecomeStale_ = function() {
    ip(this);
  }, n.onBO = function() {
    this.onBOL && this.onBOL.forEach(function(r) {
      return r();
    });
  }, n.onBUO = function() {
    this.onBUOL && this.onBUOL.forEach(function(r) {
      return r();
    });
  }, n.get = function() {
    if (this.isComputing_ && se(32, this.name_, this.derivation), v.inBatch === 0 && // !globalState.trackingDerivatpion &&
    this.observers_.size === 0 && !this.keepAlive_)
      la(this) && (this.warnAboutUntrackedRead_(), ze(), this.value_ = this.computeValue_(!1), Je());
    else if (yc(this), la(this)) {
      var r = v.trackingContext;
      this.keepAlive_ && !r && (v.trackingContext = this), this.trackAndCompute() && op(this), v.trackingContext = r;
    }
    var o = this.value_;
    if (ei(o))
      throw o.cause;
    return o;
  }, n.set = function(r) {
    if (this.setter_) {
      this.isRunningSetter_ && se(33, this.name_), this.isRunningSetter_ = !0;
      try {
        this.setter_.call(this.scope_, r);
      } finally {
        this.isRunningSetter_ = !1;
      }
    } else
      se(34, this.name_);
  }, n.trackAndCompute = function() {
    var r = this.value_, o = (
      /* see #1208 */
      this.dependenciesState_ === ie.NOT_TRACKING_
    ), i = this.computeValue_(!0), s = o || ei(r) || ei(i) || !this.equals_(r, i);
    return s && (this.value_ = i), s;
  }, n.computeValue_ = function(r) {
    this.isComputing_ = !0;
    var o = Oo(!1), i;
    if (r)
      i = Sc(this, this.derivation, this.scope_);
    else if (v.disableErrorBoundaries === !0)
      i = this.derivation.call(this.scope_);
    else
      try {
        i = this.derivation.call(this.scope_);
      } catch (s) {
        i = new Ii(s);
      }
    return Ro(o), this.isComputing_ = !1, i;
  }, n.suspend_ = function() {
    this.keepAlive_ || (ca(this), this.value_ = void 0);
  }, n.observe_ = function(r, o) {
    var i = this, s = !0, a = void 0;
    return mp(function() {
      var u = i.get();
      if (!s || o) {
        var _ = fr();
        r({
          observableKind: "computed",
          debugObjectName: i.name_,
          type: yn,
          object: i,
          newValue: u,
          oldValue: a
        }), dt(_);
      }
      s = !1, a = u;
    });
  }, n.warnAboutUntrackedRead_ = function() {
  }, n.toString = function() {
    return this.name_ + "[" + this.derivation.toString() + "]";
  }, n.valueOf = function() {
    return cc(this.get());
  }, n[Ac] = function() {
    return this.valueOf();
  }, e;
}(), bo = /* @__PURE__ */ Ot("ComputedValue", Xr), ie;
(function(e) {
  e[e.NOT_TRACKING_ = -1] = "NOT_TRACKING_", e[e.UP_TO_DATE_ = 0] = "UP_TO_DATE_", e[e.POSSIBLY_STALE_ = 1] = "POSSIBLY_STALE_", e[e.STALE_ = 2] = "STALE_";
})(ie || (ie = {}));
var Ni;
(function(e) {
  e[e.NONE = 0] = "NONE", e[e.LOG = 1] = "LOG", e[e.BREAK = 2] = "BREAK";
})(Ni || (Ni = {}));
var Ii = function(n) {
  this.cause = void 0, this.cause = n;
};
function ei(e) {
  return e instanceof Ii;
}
function la(e) {
  switch (e.dependenciesState_) {
    case ie.UP_TO_DATE_:
      return !1;
    case ie.NOT_TRACKING_:
    case ie.STALE_:
      return !0;
    case ie.POSSIBLY_STALE_: {
      for (var n = nu(!0), t = fr(), r = e.observing_, o = r.length, i = 0; i < o; i++) {
        var s = r[i];
        if (bo(s)) {
          if (v.disableErrorBoundaries)
            s.get();
          else
            try {
              s.get();
            } catch {
              return dt(t), wr(n), !0;
            }
          if (e.dependenciesState_ === ie.STALE_)
            return dt(t), wr(n), !0;
        }
      }
      return Gc(e), dt(t), wr(n), !1;
    }
  }
}
function Sc(e, n, t) {
  var r = nu(!0);
  Gc(e), e.newObserving_ = new Array(e.observing_.length + 100), e.unboundDepsCount_ = 0, e.runId_ = ++v.runId;
  var o = v.trackingDerivation;
  v.trackingDerivation = e, v.inBatch++;
  var i;
  if (v.disableErrorBoundaries === !0)
    i = n.call(t);
  else
    try {
      i = n.call(t);
    } catch (s) {
      i = new Ii(s);
    }
  return v.inBatch--, v.trackingDerivation = o, np(e), wr(r), i;
}
function np(e) {
  for (var n = e.observing_, t = e.observing_ = e.newObserving_, r = ie.UP_TO_DATE_, o = 0, i = e.unboundDepsCount_, s = 0; s < i; s++) {
    var a = t[s];
    a.diffValue_ === 0 && (a.diffValue_ = 1, o !== s && (t[o] = a), o++), a.dependenciesState_ > r && (r = a.dependenciesState_);
  }
  for (t.length = o, e.newObserving_ = null, i = n.length; i--; ) {
    var u = n[i];
    u.diffValue_ === 0 && Dc(u, e), u.diffValue_ = 0;
  }
  for (; o--; ) {
    var _ = t[o];
    _.diffValue_ === 1 && (_.diffValue_ = 0, rp(_, e));
  }
  r !== ie.UP_TO_DATE_ && (e.dependenciesState_ = r, e.onBecomeStale_());
}
function ca(e) {
  var n = e.observing_;
  e.observing_ = [];
  for (var t = n.length; t--; )
    Dc(n[t], e);
  e.dependenciesState_ = ie.NOT_TRACKING_;
}
function vc(e) {
  var n = fr();
  try {
    return e();
  } finally {
    dt(n);
  }
}
function fr() {
  var e = v.trackingDerivation;
  return v.trackingDerivation = null, e;
}
function dt(e) {
  v.trackingDerivation = e;
}
function nu(e) {
  var n = v.allowStateReads;
  return v.allowStateReads = e, n;
}
function wr(e) {
  v.allowStateReads = e;
}
function Gc(e) {
  if (e.dependenciesState_ !== ie.UP_TO_DATE_) {
    e.dependenciesState_ = ie.UP_TO_DATE_;
    for (var n = e.observing_, t = n.length; t--; )
      n[t].lowestObserverState_ = ie.UP_TO_DATE_;
  }
}
var ni = function() {
  this.version = 6, this.UNCHANGED = {}, this.trackingDerivation = null, this.trackingContext = null, this.runId = 0, this.mobxGuid = 0, this.inBatch = 0, this.pendingUnobservations = [], this.pendingReactions = [], this.isRunningReactions = !1, this.allowStateChanges = !1, this.allowStateReads = !0, this.enforceActions = !0, this.spyListeners = [], this.globalReactionErrorHandlers = [], this.computedRequiresReaction = !1, this.reactionRequiresObservable = !1, this.observableRequiresReaction = !1, this.disableErrorBoundaries = !1, this.suppressReactionErrors = !1, this.useProxies = !0, this.verifyProxies = !1, this.safeDescriptors = !0, this.stateVersion = Number.MIN_SAFE_INTEGER;
}, ti = !0, Cc = !1, v = /* @__PURE__ */ function() {
  var e = /* @__PURE__ */ qa();
  return e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (ti = !1), e.__mobxGlobals && e.__mobxGlobals.version !== new ni().version && (ti = !1), ti ? e.__mobxGlobals ? (e.__mobxInstanceCount += 1, e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}), e.__mobxGlobals) : (e.__mobxInstanceCount = 1, e.__mobxGlobals = /* @__PURE__ */ new ni()) : (setTimeout(function() {
    Cc || se(35);
  }, 1), new ni());
}();
function tp() {
  if ((v.pendingReactions.length || v.inBatch || v.isRunningReactions) && se(36), Cc = !0, ti) {
    var e = qa();
    --e.__mobxInstanceCount === 0 && (e.__mobxGlobals = void 0), v = new ni();
  }
}
function rp(e, n) {
  e.observers_.add(n), e.lowestObserverState_ > n.dependenciesState_ && (e.lowestObserverState_ = n.dependenciesState_);
}
function Dc(e, n) {
  e.observers_.delete(n), e.observers_.size === 0 && Uc(e);
}
function Uc(e) {
  e.isPendingUnobservation_ === !1 && (e.isPendingUnobservation_ = !0, v.pendingUnobservations.push(e));
}
function ze() {
  v.inBatch++;
}
function Je() {
  if (--v.inBatch === 0) {
    Pc();
    for (var e = v.pendingUnobservations, n = 0; n < e.length; n++) {
      var t = e[n];
      t.isPendingUnobservation_ = !1, t.observers_.size === 0 && (t.isBeingObserved_ && (t.isBeingObserved_ = !1, t.onBUO()), t instanceof Xr && t.suspend_());
    }
    v.pendingUnobservations = [];
  }
}
function yc(e) {
  var n = v.trackingDerivation;
  return n !== null ? (n.runId_ !== e.lastAccessedBy_ && (e.lastAccessedBy_ = n.runId_, n.newObserving_[n.unboundDepsCount_++] = e, !e.isBeingObserved_ && v.trackingContext && (e.isBeingObserved_ = !0, e.onBO())), e.isBeingObserved_) : (e.observers_.size === 0 && v.inBatch > 0 && Uc(e), !1);
}
function Hc(e) {
  e.lowestObserverState_ !== ie.STALE_ && (e.lowestObserverState_ = ie.STALE_, e.observers_.forEach(function(n) {
    n.dependenciesState_ === ie.UP_TO_DATE_ && n.onBecomeStale_(), n.dependenciesState_ = ie.STALE_;
  }));
}
function op(e) {
  e.lowestObserverState_ !== ie.STALE_ && (e.lowestObserverState_ = ie.STALE_, e.observers_.forEach(function(n) {
    n.dependenciesState_ === ie.POSSIBLY_STALE_ ? n.dependenciesState_ = ie.STALE_ : n.dependenciesState_ === ie.UP_TO_DATE_ && (e.lowestObserverState_ = ie.UP_TO_DATE_);
  }));
}
function ip(e) {
  e.lowestObserverState_ === ie.UP_TO_DATE_ && (e.lowestObserverState_ = ie.POSSIBLY_STALE_, e.observers_.forEach(function(n) {
    n.dependenciesState_ === ie.UP_TO_DATE_ && (n.dependenciesState_ = ie.POSSIBLY_STALE_, n.onBecomeStale_());
  }));
}
var Yr = /* @__PURE__ */ function() {
  function e(t, r, o, i) {
    t === void 0 && (t = "Reaction"), this.name_ = void 0, this.onInvalidate_ = void 0, this.errorHandler_ = void 0, this.requiresObservable_ = void 0, this.observing_ = [], this.newObserving_ = [], this.dependenciesState_ = ie.NOT_TRACKING_, this.diffValue_ = 0, this.runId_ = 0, this.unboundDepsCount_ = 0, this.isDisposed_ = !1, this.isScheduled_ = !1, this.isTrackPending_ = !1, this.isRunning_ = !1, this.isTracing_ = Ni.NONE, this.name_ = t, this.onInvalidate_ = r, this.errorHandler_ = o, this.requiresObservable_ = i;
  }
  var n = e.prototype;
  return n.onBecomeStale_ = function() {
    this.schedule_();
  }, n.schedule_ = function() {
    this.isScheduled_ || (this.isScheduled_ = !0, v.pendingReactions.push(this), Pc());
  }, n.isScheduled = function() {
    return this.isScheduled_;
  }, n.runReaction_ = function() {
    if (!this.isDisposed_) {
      ze(), this.isScheduled_ = !1;
      var r = v.trackingContext;
      if (v.trackingContext = this, la(this)) {
        this.isTrackPending_ = !0;
        try {
          this.onInvalidate_();
        } catch (o) {
          this.reportExceptionInDerivation_(o);
        }
      }
      v.trackingContext = r, Je();
    }
  }, n.track = function(r) {
    if (!this.isDisposed_) {
      ze(), this.isRunning_ = !0;
      var o = v.trackingContext;
      v.trackingContext = this;
      var i = Sc(this, r, void 0);
      v.trackingContext = o, this.isRunning_ = !1, this.isTrackPending_ = !1, this.isDisposed_ && ca(this), ei(i) && this.reportExceptionInDerivation_(i.cause), Je();
    }
  }, n.reportExceptionInDerivation_ = function(r) {
    var o = this;
    if (this.errorHandler_) {
      this.errorHandler_(r, this);
      return;
    }
    if (v.disableErrorBoundaries)
      throw r;
    var i = "[mobx] uncaught error in '" + this + "'";
    v.suppressReactionErrors || console.error(i, r), v.globalReactionErrorHandlers.forEach(function(s) {
      return s(r, o);
    });
  }, n.dispose = function() {
    this.isDisposed_ || (this.isDisposed_ = !0, this.isRunning_ || (ze(), ca(this), Je()));
  }, n.getDisposer_ = function(r) {
    var o = this, i = function s() {
      o.dispose(), r == null || r.removeEventListener == null || r.removeEventListener("abort", s);
    };
    return r == null || r.addEventListener == null || r.addEventListener("abort", i), i[W] = this, i;
  }, n.toString = function() {
    return "Reaction[" + this.name_ + "]";
  }, n.trace = function(r) {
  }, e;
}(), sp = 100, da = function(n) {
  return n();
};
function Pc() {
  v.inBatch > 0 || v.isRunningReactions || da(ap);
}
function ap() {
  v.isRunningReactions = !0;
  for (var e = v.pendingReactions, n = 0; e.length > 0; ) {
    ++n === sp && (console.error("[mobx] cycle in reaction: " + e[0]), e.splice(0));
    for (var t = e.splice(0), r = 0, o = t.length; r < o; r++)
      t[r].runReaction_();
  }
  v.isRunningReactions = !1;
}
var Ai = /* @__PURE__ */ Ot("Reaction", Yr);
function up(e) {
  var n = da;
  da = function(r) {
    return e(function() {
      return n(r);
    });
  };
}
function Mr() {
  return !1;
}
function _p(e) {
  return console.warn("[mobx.spy] Is a no-op in production builds"), function() {
  };
}
var wc = "action", lp = "action.bound", Mc = "autoAction", cp = "autoAction.bound", dp = "<unnamed action>", kc = /* @__PURE__ */ Eo(wc), fp = /* @__PURE__ */ Eo(lp, {
  bound: !0
}), xc = /* @__PURE__ */ Eo(Mc, {
  autoAction: !0
}), hp = /* @__PURE__ */ Eo(cp, {
  autoAction: !0,
  bound: !0
});
function Lc(e) {
  var n = function(r, o) {
    if (bn(r))
      return or(r.name || dp, r, e);
    if (bn(o))
      return or(r, o, e);
    if (Ct(o))
      return po(r, o, e ? xc : kc);
    if (Ct(r))
      return Un(Eo(e ? Mc : wc, {
        name: r,
        autoAction: e
      }));
  };
  return n;
}
var Vt = /* @__PURE__ */ Lc(!1);
Object.assign(Vt, kc);
var Kr = /* @__PURE__ */ Lc(!0);
Object.assign(Kr, xc);
Vt.bound = /* @__PURE__ */ Un(fp);
Kr.bound = /* @__PURE__ */ Un(hp);
function tu(e) {
  return bn(e) && e.isMobxAction === !0;
}
function mp(e, n) {
  var t, r, o, i, s;
  n === void 0 && (n = ic);
  var a = (t = (r = n) == null ? void 0 : r.name) != null ? t : "Autorun", u = !n.scheduler && !n.delay, _;
  if (u)
    _ = new Yr(a, function() {
      this.track(m);
    }, n.onError, n.requiresObservable);
  else {
    var c = Tp(n), l = !1;
    _ = new Yr(a, function() {
      l || (l = !0, c(function() {
        l = !1, _.isDisposed_ || _.track(m);
      }));
    }, n.onError, n.requiresObservable);
  }
  function m() {
    e(_);
  }
  return (o = n) != null && (i = o.signal) != null && i.aborted || _.schedule_(), _.getDisposer_((s = n) == null ? void 0 : s.signal);
}
var pp = function(n) {
  return n();
};
function Tp(e) {
  return e.scheduler ? e.scheduler : e.delay ? function(n) {
    return setTimeout(n, e.delay);
  } : pp;
}
var Ep = "onBO", Op = "onBUO";
function Rp(e, n, t) {
  return jc(Ep, e, n, t);
}
function Bc(e, n, t) {
  return jc(Op, e, n, t);
}
function jc(e, n, t, r) {
  var o = typeof r == "function" ? sr(n, t) : sr(n), i = bn(r) ? r : t, s = e + "L";
  return o[s] ? o[s].add(i) : o[s] = /* @__PURE__ */ new Set([i]), function() {
    var a = o[s];
    a && (a.delete(i), a.size === 0 && delete o[s]);
  };
}
var bp = "never", jo = "always", gp = "observed";
function Np(e) {
  e.isolateGlobalState === !0 && tp();
  var n = e.useProxies, t = e.enforceActions;
  if (n !== void 0 && (v.useProxies = n === jo ? !0 : n === bp ? !1 : typeof Proxy < "u"), n === "ifavailable" && (v.verifyProxies = !0), t !== void 0) {
    var r = t === jo ? jo : t === gp;
    v.enforceActions = r, v.allowStateChanges = !(r === !0 || r === jo);
  }
  ["computedRequiresReaction", "reactionRequiresObservable", "observableRequiresReaction", "disableErrorBoundaries", "safeDescriptors"].forEach(function(o) {
    o in e && (v[o] = !!e[o]);
  }), v.allowStateReads = !v.observableRequiresReaction, e.reactionScheduler && up(e.reactionScheduler);
}
function Fc(e, n, t, r) {
  var o = am(n), i = Ao(e, r)[W];
  ze();
  try {
    nr(o).forEach(function(s) {
      i.extend_(
        s,
        o[s],
        // must pass "undefined" for { key: undefined }
        t && s in t ? t[s] : !0
      );
    });
  } finally {
    Je();
  }
  return e;
}
function Ip(e, n) {
  return Vc(sr(e, n));
}
function Vc(e) {
  var n = {
    name: e.name_
  };
  return e.observing_ && e.observing_.length > 0 && (n.dependencies = Ap(e.observing_).map(Vc)), n;
}
function Ap(e) {
  return Array.from(new Set(e));
}
var Sp = 0;
function Wc() {
  this.message = "FLOW_CANCELLED";
}
Wc.prototype = /* @__PURE__ */ Object.create(Error.prototype);
var d_ = /* @__PURE__ */ mc("flow"), vp = /* @__PURE__ */ mc("flow.bound", {
  bound: !0
}), $r = /* @__PURE__ */ Object.assign(function(n, t) {
  if (Ct(t))
    return po(n, t, d_);
  var r = n, o = r.name || "<unnamed flow>", i = function() {
    var a = this, u = arguments, _ = ++Sp, c = Vt(o + " - runid: " + _ + " - init", r).apply(a, u), l, m = void 0, T = new Promise(function(d, f) {
      var h = 0;
      l = f;
      function O(I) {
        m = void 0;
        var p;
        try {
          p = Vt(o + " - runid: " + _ + " - yield " + h++, c.next).call(c, I);
        } catch (H) {
          return f(H);
        }
        g(p);
      }
      function R(I) {
        m = void 0;
        var p;
        try {
          p = Vt(o + " - runid: " + _ + " - yield " + h++, c.throw).call(c, I);
        } catch (H) {
          return f(H);
        }
        g(p);
      }
      function g(I) {
        if (bn(I?.then)) {
          I.then(g, f);
          return;
        }
        return I.done ? d(I.value) : (m = Promise.resolve(I.value), m.then(O, R));
      }
      O(void 0);
    });
    return T.cancel = Vt(o + " - runid: " + _ + " - cancel", function() {
      try {
        m && f_(m);
        var d = c.return(void 0), f = Promise.resolve(d.value);
        f.then(jt, jt), f_(f), l(new Wc());
      } catch (h) {
        l(h);
      }
    }), T;
  };
  return i.isMobXFlow = !0, i;
}, d_);
$r.bound = /* @__PURE__ */ Un(vp);
function f_(e) {
  bn(e.cancel) && e.cancel();
}
function Si(e) {
  return e?.isMobXFlow === !0;
}
function Gp(e, n) {
  return e ? n !== void 0 ? ir(e) ? e[W].values_.has(n) : !1 : ir(e) || !!e[W] || Za(e) || Ai(e) || bo(e) : !1;
}
function ru(e) {
  return Gp(e);
}
function Cp(e) {
  if (ir(e))
    return e[W].ownKeys_();
  se(38);
}
function Fo(e, n, t) {
  return e.set(n, t), t;
}
function Lt(e, n) {
  if (e == null || typeof e != "object" || e instanceof Date || !ru(e))
    return e;
  if (ep(e) || bo(e))
    return Lt(e.get(), n);
  if (n.has(e))
    return n.get(e);
  if (Io(e)) {
    var t = Fo(n, e, new Array(e.length));
    return e.forEach(function(s, a) {
      t[a] = Lt(s, n);
    }), t;
  }
  if (Ut(e)) {
    var r = Fo(n, e, /* @__PURE__ */ new Set());
    return e.forEach(function(s) {
      r.add(Lt(s, n));
    }), r;
  }
  if (gt(e)) {
    var o = Fo(n, e, /* @__PURE__ */ new Map());
    return e.forEach(function(s, a) {
      o.set(a, Lt(s, n));
    }), o;
  } else {
    var i = Fo(n, e, {});
    return Cp(e).forEach(function(s) {
      fo.propertyIsEnumerable.call(e, s) && (i[s] = Lt(e[s], n));
    }), i;
  }
}
function Xc(e, n) {
  return Lt(e, /* @__PURE__ */ new Map());
}
function jn(e, n) {
  n === void 0 && (n = void 0), ze();
  try {
    return e.apply(n);
  } finally {
    Je();
  }
}
function wt(e) {
  return e[W];
}
var Dp = {
  has: function(n, t) {
    return wt(n).has_(t);
  },
  get: function(n, t) {
    return wt(n).get_(t);
  },
  set: function(n, t, r) {
    var o;
    return Ct(t) ? (o = wt(n).set_(t, r, !0)) != null ? o : !0 : !1;
  },
  deleteProperty: function(n, t) {
    var r;
    return Ct(t) ? (r = wt(n).delete_(t, !0)) != null ? r : !0 : !1;
  },
  defineProperty: function(n, t, r) {
    var o;
    return (o = wt(n).defineProperty_(t, r)) != null ? o : !0;
  },
  ownKeys: function(n) {
    return wt(n).ownKeys_();
  },
  preventExtensions: function(n) {
    se(13);
  }
};
function Up(e, n) {
  var t, r;
  return sc(), e = Ao(e, n), (r = (t = e[W]).proxy_) != null ? r : t.proxy_ = new Proxy(e, Dp);
}
function an(e) {
  return e.interceptors_ !== void 0 && e.interceptors_.length > 0;
}
function go(e, n) {
  var t = e.interceptors_ || (e.interceptors_ = []);
  return t.push(n), ac(function() {
    var r = t.indexOf(n);
    r !== -1 && t.splice(r, 1);
  });
}
function un(e, n) {
  var t = fr();
  try {
    for (var r = [].concat(e.interceptors_ || []), o = 0, i = r.length; o < i && (n = r[o](n), n && !n.type && se(14), !!n); o++)
      ;
    return n;
  } finally {
    dt(t);
  }
}
function On(e) {
  return e.changeListeners_ !== void 0 && e.changeListeners_.length > 0;
}
function No(e, n) {
  var t = e.changeListeners_ || (e.changeListeners_ = []);
  return t.push(n), ac(function() {
    var r = t.indexOf(n);
    r !== -1 && t.splice(r, 1);
  });
}
function Rn(e, n) {
  var t = fr(), r = e.changeListeners_;
  if (r) {
    r = r.slice();
    for (var o = 0, i = r.length; o < i; o++)
      r[o](n);
    dt(t);
  }
}
function yp(e, n, t) {
  var r = Ao(e, t)[W];
  ze();
  try {
    var o;
    (o = n) != null || (n = cm(e)), nr(n).forEach(function(i) {
      return r.make_(i, n[i]);
    });
  } finally {
    Je();
  }
  return e;
}
var ks = /* @__PURE__ */ Symbol("mobx-keys");
function Rt(e, n, t) {
  if (zn(e))
    return Fc(e, e, n, t);
  var r = Ao(e, t)[W];
  if (!e[ks]) {
    var o = Object.getPrototypeOf(e), i = new Set([].concat(nr(e), nr(o)));
    i.delete("constructor"), i.delete(W), ho(o, ks, i);
  }
  ze();
  try {
    e[ks].forEach(function(s) {
      return r.make_(
        s,
        // must pass "undefined" for { key: undefined }
        n && s in n ? n[s] : !0
      );
    });
  } finally {
    Je();
  }
  return e;
}
var h_ = "splice", yn = "update", Hp = 1e4, Pp = {
  get: function(n, t) {
    var r = n[W];
    return t === W ? r : t === "length" ? r.getArrayLength_() : typeof t == "string" && !isNaN(t) ? r.get_(parseInt(t)) : Xn(vi, t) ? vi[t] : n[t];
  },
  set: function(n, t, r) {
    var o = n[W];
    return t === "length" && o.setArrayLength_(r), typeof t == "symbol" || isNaN(t) ? n[t] = r : o.set_(parseInt(t), r), !0;
  },
  preventExtensions: function() {
    se(15);
  }
}, ou = /* @__PURE__ */ function() {
  function e(t, r, o, i) {
    t === void 0 && (t = "ObservableArray"), this.owned_ = void 0, this.legacyMode_ = void 0, this.atom_ = void 0, this.values_ = [], this.interceptors_ = void 0, this.changeListeners_ = void 0, this.enhancer_ = void 0, this.dehancer = void 0, this.proxy_ = void 0, this.lastKnownLength_ = 0, this.owned_ = o, this.legacyMode_ = i, this.atom_ = new To(t), this.enhancer_ = function(s, a) {
      return r(s, a, "ObservableArray[..]");
    };
  }
  var n = e.prototype;
  return n.dehanceValue_ = function(r) {
    return this.dehancer !== void 0 ? this.dehancer(r) : r;
  }, n.dehanceValues_ = function(r) {
    return this.dehancer !== void 0 && r.length > 0 ? r.map(this.dehancer) : r;
  }, n.intercept_ = function(r) {
    return go(this, r);
  }, n.observe_ = function(r, o) {
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
    }), No(this, r);
  }, n.getArrayLength_ = function() {
    return this.atom_.reportObserved(), this.values_.length;
  }, n.setArrayLength_ = function(r) {
    (typeof r != "number" || isNaN(r) || r < 0) && se("Out of range: " + r);
    var o = this.values_.length;
    if (r !== o)
      if (r > o) {
        for (var i = new Array(r - o), s = 0; s < r - o; s++)
          i[s] = void 0;
        this.spliceWithArray_(o, 0, i);
      } else
        this.spliceWithArray_(r, o - r);
  }, n.updateArrayLength_ = function(r, o) {
    r !== this.lastKnownLength_ && se(16), this.lastKnownLength_ += o, this.legacyMode_ && o > 0 && td(r + o + 1);
  }, n.spliceWithArray_ = function(r, o, i) {
    var s = this;
    this.atom_;
    var a = this.values_.length;
    if (r === void 0 ? r = 0 : r > a ? r = a : r < 0 && (r = Math.max(0, a + r)), arguments.length === 1 ? o = a - r : o == null ? o = 0 : o = Math.max(0, Math.min(o, a - r)), i === void 0 && (i = ua), an(this)) {
      var u = un(this, {
        object: this.proxy_,
        type: h_,
        index: r,
        removedCount: o,
        added: i
      });
      if (!u)
        return ua;
      o = u.removedCount, i = u.added;
    }
    if (i = i.length === 0 ? i : i.map(function(l) {
      return s.enhancer_(l, void 0);
    }), this.legacyMode_) {
      var _ = i.length - o;
      this.updateArrayLength_(a, _);
    }
    var c = this.spliceItemsIntoValues_(r, o, i);
    return (o !== 0 || i.length !== 0) && this.notifyArraySplice_(r, i, c), this.dehanceValues_(c);
  }, n.spliceItemsIntoValues_ = function(r, o, i) {
    if (i.length < Hp) {
      var s;
      return (s = this.values_).splice.apply(s, [r, o].concat(i));
    } else {
      var a = this.values_.slice(r, r + o), u = this.values_.slice(r + o);
      this.values_.length += i.length - o;
      for (var _ = 0; _ < i.length; _++)
        this.values_[r + _] = i[_];
      for (var c = 0; c < u.length; c++)
        this.values_[r + i.length + c] = u[c];
      return a;
    }
  }, n.notifyArrayChildUpdate_ = function(r, o, i) {
    var s = !this.owned_ && Mr(), a = On(this), u = a || s ? {
      observableKind: "array",
      object: this.proxy_,
      type: yn,
      debugObjectName: this.atom_.name_,
      index: r,
      newValue: o,
      oldValue: i
    } : null;
    this.atom_.reportChanged(), a && Rn(this, u);
  }, n.notifyArraySplice_ = function(r, o, i) {
    var s = !this.owned_ && Mr(), a = On(this), u = a || s ? {
      observableKind: "array",
      object: this.proxy_,
      debugObjectName: this.atom_.name_,
      type: h_,
      index: r,
      removed: i,
      added: o,
      removedCount: i.length,
      addedCount: o.length
    } : null;
    this.atom_.reportChanged(), a && Rn(this, u);
  }, n.get_ = function(r) {
    if (this.legacyMode_ && r >= this.values_.length) {
      console.warn("[mobx] Out of bounds read: " + r);
      return;
    }
    return this.atom_.reportObserved(), this.dehanceValue_(this.values_[r]);
  }, n.set_ = function(r, o) {
    var i = this.values_;
    if (this.legacyMode_ && r > i.length && se(17, r, i.length), r < i.length) {
      this.atom_;
      var s = i[r];
      if (an(this)) {
        var a = un(this, {
          type: yn,
          object: this.proxy_,
          index: r,
          newValue: o
        });
        if (!a)
          return;
        o = a.newValue;
      }
      o = this.enhancer_(o, s);
      var u = o !== s;
      u && (i[r] = o, this.notifyArrayChildUpdate_(r, o, s));
    } else {
      for (var _ = new Array(r + 1 - i.length), c = 0; c < _.length - 1; c++)
        _[c] = void 0;
      _[_.length - 1] = o, this.spliceWithArray_(i.length, 0, _);
    }
  }, e;
}();
function wp(e, n, t, r) {
  t === void 0 && (t = "ObservableArray"), r === void 0 && (r = !1), sc();
  var o = new ou(t, n, r, !1);
  _c(o.values_, W, o);
  var i = new Proxy(o.values_, Pp);
  if (o.proxy_ = i, e && e.length) {
    var s = Oo(!0);
    o.spliceWithArray_(0, 0, e), Ro(s);
  }
  return i;
}
var vi = {
  clear: function() {
    return this.splice(0);
  },
  replace: function(n) {
    var t = this[W];
    return t.spliceWithArray_(0, t.values_.length, n);
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
  splice: function(n, t) {
    for (var r = arguments.length, o = new Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++)
      o[i - 2] = arguments[i];
    var s = this[W];
    switch (arguments.length) {
      case 0:
        return [];
      case 1:
        return s.spliceWithArray_(n);
      case 2:
        return s.spliceWithArray_(n, t);
    }
    return s.spliceWithArray_(n, t, o);
  },
  spliceWithArray: function(n, t, r) {
    return this[W].spliceWithArray_(n, t, r);
  },
  push: function() {
    for (var n = this[W], t = arguments.length, r = new Array(t), o = 0; o < t; o++)
      r[o] = arguments[o];
    return n.spliceWithArray_(n.values_.length, 0, r), n.values_.length;
  },
  pop: function() {
    return this.splice(Math.max(this[W].values_.length - 1, 0), 1)[0];
  },
  shift: function() {
    return this.splice(0, 1)[0];
  },
  unshift: function() {
    for (var n = this[W], t = arguments.length, r = new Array(t), o = 0; o < t; o++)
      r[o] = arguments[o];
    return n.spliceWithArray_(0, 0, r), n.values_.length;
  },
  reverse: function() {
    return v.trackingDerivation && se(37, "reverse"), this.replace(this.slice().reverse()), this;
  },
  sort: function() {
    v.trackingDerivation && se(37, "sort");
    var n = this.slice();
    return n.sort.apply(n, arguments), this.replace(n), this;
  },
  remove: function(n) {
    var t = this[W], r = t.dehanceValues_(t.values_).indexOf(n);
    return r > -1 ? (this.splice(r, 1), !0) : !1;
  }
};
ye("concat", qn);
ye("flat", qn);
ye("includes", qn);
ye("indexOf", qn);
ye("join", qn);
ye("lastIndexOf", qn);
ye("slice", qn);
ye("toString", qn);
ye("toLocaleString", qn);
ye("every", bt);
ye("filter", bt);
ye("find", bt);
ye("findIndex", bt);
ye("flatMap", bt);
ye("forEach", bt);
ye("map", bt);
ye("some", bt);
ye("reduce", Yc);
ye("reduceRight", Yc);
function ye(e, n) {
  typeof Array.prototype[e] == "function" && (vi[e] = n(e));
}
function qn(e) {
  return function() {
    var n = this[W];
    n.atom_.reportObserved();
    var t = n.dehanceValues_(n.values_);
    return t[e].apply(t, arguments);
  };
}
function bt(e) {
  return function(n, t) {
    var r = this, o = this[W];
    o.atom_.reportObserved();
    var i = o.dehanceValues_(o.values_);
    return i[e](function(s, a) {
      return n.call(t, s, a, r);
    });
  };
}
function Yc(e) {
  return function() {
    var n = this, t = this[W];
    t.atom_.reportObserved();
    var r = t.dehanceValues_(t.values_), o = arguments[0];
    return arguments[0] = function(i, s, a) {
      return o(i, s, a, n);
    }, r[e].apply(r, arguments);
  };
}
var Mp = /* @__PURE__ */ Ot("ObservableArrayAdministration", ou);
function Io(e) {
  return Ji(e) && Mp(e[W]);
}
var Kc, $c, kp = {}, st = "add", Gi = "delete";
Kc = Symbol.iterator;
$c = Symbol.toStringTag;
var zc = /* @__PURE__ */ function() {
  function e(t, r, o) {
    var i = this;
    r === void 0 && (r = rr), o === void 0 && (o = "ObservableMap"), this.enhancer_ = void 0, this.name_ = void 0, this[W] = kp, this.data_ = void 0, this.hasMap_ = void 0, this.keysAtom_ = void 0, this.interceptors_ = void 0, this.changeListeners_ = void 0, this.dehancer = void 0, this.enhancer_ = r, this.name_ = o, bn(Map) || se(18), this.keysAtom_ = fc("ObservableMap.keys()"), this.data_ = /* @__PURE__ */ new Map(), this.hasMap_ = /* @__PURE__ */ new Map(), Zm(!0, function() {
      i.merge(t);
    });
  }
  var n = e.prototype;
  return n.has_ = function(r) {
    return this.data_.has(r);
  }, n.has = function(r) {
    var o = this;
    if (!v.trackingDerivation)
      return this.has_(r);
    var i = this.hasMap_.get(r);
    if (!i) {
      var s = i = new vt(this.has_(r), qi, "ObservableMap.key?", !1);
      this.hasMap_.set(r, s), Bc(s, function() {
        return o.hasMap_.delete(r);
      });
    }
    return i.get();
  }, n.set = function(r, o) {
    var i = this.has_(r);
    if (an(this)) {
      var s = un(this, {
        type: i ? yn : st,
        object: this,
        newValue: o,
        name: r
      });
      if (!s)
        return this;
      o = s.newValue;
    }
    return i ? this.updateValue_(r, o) : this.addValue_(r, o), this;
  }, n.delete = function(r) {
    var o = this;
    if (this.keysAtom_, an(this)) {
      var i = un(this, {
        type: Gi,
        object: this,
        name: r
      });
      if (!i)
        return !1;
    }
    if (this.has_(r)) {
      var s = Mr(), a = On(this), u = a || s ? {
        observableKind: "map",
        debugObjectName: this.name_,
        type: Gi,
        object: this,
        oldValue: this.data_.get(r).value_,
        name: r
      } : null;
      return jn(function() {
        var _;
        o.keysAtom_.reportChanged(), (_ = o.hasMap_.get(r)) == null || _.setNewValue_(!1);
        var c = o.data_.get(r);
        c.setNewValue_(void 0), o.data_.delete(r);
      }), a && Rn(this, u), !0;
    }
    return !1;
  }, n.updateValue_ = function(r, o) {
    var i = this.data_.get(r);
    if (o = i.prepareNewValue_(o), o !== v.UNCHANGED) {
      var s = Mr(), a = On(this), u = a || s ? {
        observableKind: "map",
        debugObjectName: this.name_,
        type: yn,
        object: this,
        oldValue: i.value_,
        name: r,
        newValue: o
      } : null;
      i.setNewValue_(o), a && Rn(this, u);
    }
  }, n.addValue_ = function(r, o) {
    var i = this;
    this.keysAtom_, jn(function() {
      var _, c = new vt(o, i.enhancer_, "ObservableMap.key", !1);
      i.data_.set(r, c), o = c.value_, (_ = i.hasMap_.get(r)) == null || _.setNewValue_(!0), i.keysAtom_.reportChanged();
    });
    var s = Mr(), a = On(this), u = a || s ? {
      observableKind: "map",
      debugObjectName: this.name_,
      type: st,
      object: this,
      name: r,
      newValue: o
    } : null;
    a && Rn(this, u);
  }, n.get = function(r) {
    return this.has(r) ? this.dehanceValue_(this.data_.get(r).get()) : this.dehanceValue_(void 0);
  }, n.dehanceValue_ = function(r) {
    return this.dehancer !== void 0 ? this.dehancer(r) : r;
  }, n.keys = function() {
    return this.keysAtom_.reportObserved(), this.data_.keys();
  }, n.values = function() {
    var r = this, o = this.keys();
    return zr({
      next: function() {
        var s = o.next(), a = s.done, u = s.value;
        return {
          done: a,
          value: a ? void 0 : r.get(u)
        };
      }
    });
  }, n.entries = function() {
    var r = this, o = this.keys();
    return zr({
      next: function() {
        var s = o.next(), a = s.done, u = s.value;
        return {
          done: a,
          value: a ? void 0 : [u, r.get(u)]
        };
      }
    });
  }, n[Kc] = function() {
    return this.entries();
  }, n.forEach = function(r, o) {
    for (var i = Ft(this), s; !(s = i()).done; ) {
      var a = s.value, u = a[0], _ = a[1];
      r.call(o, _, u, this);
    }
  }, n.merge = function(r) {
    var o = this;
    return gt(r) && (r = new Map(r)), jn(function() {
      zn(r) ? sm(r).forEach(function(i) {
        return o.set(i, r[i]);
      }) : Array.isArray(r) ? r.forEach(function(i) {
        var s = i[0], a = i[1];
        return o.set(s, a);
      }) : dr(r) ? (r.constructor !== Map && se(19, r), r.forEach(function(i, s) {
        return o.set(s, i);
      })) : r != null && se(20, r);
    }), this;
  }, n.clear = function() {
    var r = this;
    jn(function() {
      vc(function() {
        for (var o = Ft(r.keys()), i; !(i = o()).done; ) {
          var s = i.value;
          r.delete(s);
        }
      });
    });
  }, n.replace = function(r) {
    var o = this;
    return jn(function() {
      for (var i = xp(r), s = /* @__PURE__ */ new Map(), a = !1, u = Ft(o.data_.keys()), _; !(_ = u()).done; ) {
        var c = _.value;
        if (!i.has(c)) {
          var l = o.delete(c);
          if (l)
            a = !0;
          else {
            var m = o.data_.get(c);
            s.set(c, m);
          }
        }
      }
      for (var T = Ft(i.entries()), d; !(d = T()).done; ) {
        var f = d.value, h = f[0], O = f[1], R = o.data_.has(h);
        if (o.set(h, O), o.data_.has(h)) {
          var g = o.data_.get(h);
          s.set(h, g), R || (a = !0);
        }
      }
      if (!a)
        if (o.data_.size !== s.size)
          o.keysAtom_.reportChanged();
        else
          for (var I = o.data_.keys(), p = s.keys(), H = I.next(), M = p.next(); !H.done; ) {
            if (H.value !== M.value) {
              o.keysAtom_.reportChanged();
              break;
            }
            H = I.next(), M = p.next();
          }
      o.data_ = s;
    }), this;
  }, n.toString = function() {
    return "[object ObservableMap]";
  }, n.toJSON = function() {
    return Array.from(this);
  }, n.observe_ = function(r, o) {
    return No(this, r);
  }, n.intercept_ = function(r) {
    return go(this, r);
  }, Qa(e, [{
    key: "size",
    get: function() {
      return this.keysAtom_.reportObserved(), this.data_.size;
    }
  }, {
    key: $c,
    get: function() {
      return "Map";
    }
  }]), e;
}(), gt = /* @__PURE__ */ Ot("ObservableMap", zc);
function xp(e) {
  if (dr(e) || gt(e))
    return e;
  if (Array.isArray(e))
    return new Map(e);
  if (zn(e)) {
    var n = /* @__PURE__ */ new Map();
    for (var t in e)
      n.set(t, e[t]);
    return n;
  } else
    return se(21, e);
}
var Jc, qc, Lp = {};
Jc = Symbol.iterator;
qc = Symbol.toStringTag;
var Qc = /* @__PURE__ */ function() {
  function e(t, r, o) {
    r === void 0 && (r = rr), o === void 0 && (o = "ObservableSet"), this.name_ = void 0, this[W] = Lp, this.data_ = /* @__PURE__ */ new Set(), this.atom_ = void 0, this.changeListeners_ = void 0, this.interceptors_ = void 0, this.dehancer = void 0, this.enhancer_ = void 0, this.name_ = o, bn(Set) || se(22), this.atom_ = fc(this.name_), this.enhancer_ = function(i, s) {
      return r(i, s, o);
    }, t && this.replace(t);
  }
  var n = e.prototype;
  return n.dehanceValue_ = function(r) {
    return this.dehancer !== void 0 ? this.dehancer(r) : r;
  }, n.clear = function() {
    var r = this;
    jn(function() {
      vc(function() {
        for (var o = Ft(r.data_.values()), i; !(i = o()).done; ) {
          var s = i.value;
          r.delete(s);
        }
      });
    });
  }, n.forEach = function(r, o) {
    for (var i = Ft(this), s; !(s = i()).done; ) {
      var a = s.value;
      r.call(o, a, a, this);
    }
  }, n.add = function(r) {
    var o = this;
    if (this.atom_, an(this)) {
      var i = un(this, {
        type: st,
        object: this,
        newValue: r
      });
      if (!i)
        return this;
    }
    if (!this.has(r)) {
      jn(function() {
        o.data_.add(o.enhancer_(r, void 0)), o.atom_.reportChanged();
      });
      var s = !1, a = On(this), u = a || s ? {
        observableKind: "set",
        debugObjectName: this.name_,
        type: st,
        object: this,
        newValue: r
      } : null;
      a && Rn(this, u);
    }
    return this;
  }, n.delete = function(r) {
    var o = this;
    if (an(this)) {
      var i = un(this, {
        type: Gi,
        object: this,
        oldValue: r
      });
      if (!i)
        return !1;
    }
    if (this.has(r)) {
      var s = !1, a = On(this), u = a || s ? {
        observableKind: "set",
        debugObjectName: this.name_,
        type: Gi,
        object: this,
        oldValue: r
      } : null;
      return jn(function() {
        o.atom_.reportChanged(), o.data_.delete(r);
      }), a && Rn(this, u), !0;
    }
    return !1;
  }, n.has = function(r) {
    return this.atom_.reportObserved(), this.data_.has(this.dehanceValue_(r));
  }, n.entries = function() {
    var r = 0, o = Array.from(this.keys()), i = Array.from(this.values());
    return zr({
      next: function() {
        var a = r;
        return r += 1, a < i.length ? {
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
    var r = this, o = 0, i = Array.from(this.data_.values());
    return zr({
      next: function() {
        return o < i.length ? {
          value: r.dehanceValue_(i[o++]),
          done: !1
        } : {
          done: !0
        };
      }
    });
  }, n.replace = function(r) {
    var o = this;
    return Ut(r) && (r = new Set(r)), jn(function() {
      Array.isArray(r) ? (o.clear(), r.forEach(function(i) {
        return o.add(i);
      })) : mo(r) ? (o.clear(), r.forEach(function(i) {
        return o.add(i);
      })) : r != null && se("Cannot initialize set from " + r);
    }), this;
  }, n.observe_ = function(r, o) {
    return No(this, r);
  }, n.intercept_ = function(r) {
    return go(this, r);
  }, n.toJSON = function() {
    return Array.from(this);
  }, n.toString = function() {
    return "[object ObservableSet]";
  }, n[Jc] = function() {
    return this.values();
  }, Qa(e, [{
    key: "size",
    get: function() {
      return this.atom_.reportObserved(), this.data_.size;
    }
  }, {
    key: qc,
    get: function() {
      return "Set";
    }
  }]), e;
}(), Ut = /* @__PURE__ */ Ot("ObservableSet", Qc), m_ = /* @__PURE__ */ Object.create(null), p_ = "remove", Zc = /* @__PURE__ */ function() {
  function e(t, r, o, i) {
    r === void 0 && (r = /* @__PURE__ */ new Map()), i === void 0 && (i = Hm), this.target_ = void 0, this.values_ = void 0, this.name_ = void 0, this.defaultAnnotation_ = void 0, this.keysAtom_ = void 0, this.changeListeners_ = void 0, this.interceptors_ = void 0, this.proxy_ = void 0, this.isPlainObject_ = void 0, this.appliedAnnotations_ = void 0, this.pendingKeys_ = void 0, this.target_ = t, this.values_ = r, this.name_ = o, this.defaultAnnotation_ = i, this.keysAtom_ = new To("ObservableObject.keys"), this.isPlainObject_ = zn(this.target_);
  }
  var n = e.prototype;
  return n.getObservablePropValue_ = function(r) {
    return this.values_.get(r).get();
  }, n.setObservablePropValue_ = function(r, o) {
    var i = this.values_.get(r);
    if (i instanceof Xr)
      return i.set(o), !0;
    if (an(this)) {
      var s = un(this, {
        type: yn,
        object: this.proxy_ || this.target_,
        name: r,
        newValue: o
      });
      if (!s)
        return null;
      o = s.newValue;
    }
    if (o = i.prepareNewValue_(o), o !== v.UNCHANGED) {
      var a = On(this), u = !1, _ = a || u ? {
        type: yn,
        observableKind: "object",
        debugObjectName: this.name_,
        object: this.proxy_ || this.target_,
        oldValue: i.value_,
        name: r,
        newValue: o
      } : null;
      i.setNewValue_(o), a && Rn(this, _);
    }
    return !0;
  }, n.get_ = function(r) {
    return v.trackingDerivation && !Xn(this.target_, r) && this.has_(r), this.target_[r];
  }, n.set_ = function(r, o, i) {
    return i === void 0 && (i = !1), Xn(this.target_, r) ? this.values_.has(r) ? this.setObservablePropValue_(r, o) : i ? Reflect.set(this.target_, r, o) : (this.target_[r] = o, !0) : this.extend_(r, {
      value: o,
      enumerable: !0,
      writable: !0,
      configurable: !0
    }, this.defaultAnnotation_, i);
  }, n.has_ = function(r) {
    if (!v.trackingDerivation)
      return r in this.target_;
    this.pendingKeys_ || (this.pendingKeys_ = /* @__PURE__ */ new Map());
    var o = this.pendingKeys_.get(r);
    return o || (o = new vt(r in this.target_, qi, "ObservableObject.key?", !1), this.pendingKeys_.set(r, o)), o.get();
  }, n.make_ = function(r, o) {
    if (o === !0 && (o = this.defaultAnnotation_), o !== !1) {
      if (!(r in this.target_)) {
        var i;
        if ((i = this.target_[Gn]) != null && i[r])
          return;
        se(1, o.annotationType_, this.name_ + "." + r.toString());
      }
      for (var s = this.target_; s && s !== fo; ) {
        var a = Ri(s, r);
        if (a) {
          var u = o.make_(this, r, a, s);
          if (u === 0)
            return;
          if (u === 1)
            break;
        }
        s = Object.getPrototypeOf(s);
      }
      E_(this, o, r);
    }
  }, n.extend_ = function(r, o, i, s) {
    if (s === void 0 && (s = !1), i === !0 && (i = this.defaultAnnotation_), i === !1)
      return this.defineProperty_(r, o, s);
    var a = i.extend_(this, r, o, s);
    return a && E_(this, i, r), a;
  }, n.defineProperty_ = function(r, o, i) {
    i === void 0 && (i = !1);
    try {
      ze();
      var s = this.delete_(r);
      if (!s)
        return s;
      if (an(this)) {
        var a = un(this, {
          object: this.proxy_ || this.target_,
          name: r,
          type: st,
          newValue: o.value
        });
        if (!a)
          return null;
        var u = a.newValue;
        o.value !== u && (o = tr({}, o, {
          value: u
        }));
      }
      if (i) {
        if (!Reflect.defineProperty(this.target_, r, o))
          return !1;
      } else
        Dn(this.target_, r, o);
      this.notifyPropertyAddition_(r, o.value);
    } finally {
      Je();
    }
    return !0;
  }, n.defineObservableProperty_ = function(r, o, i, s) {
    s === void 0 && (s = !1);
    try {
      ze();
      var a = this.delete_(r);
      if (!a)
        return a;
      if (an(this)) {
        var u = un(this, {
          object: this.proxy_ || this.target_,
          name: r,
          type: st,
          newValue: o
        });
        if (!u)
          return null;
        o = u.newValue;
      }
      var _ = T_(r), c = {
        configurable: v.safeDescriptors ? this.isPlainObject_ : !0,
        enumerable: !0,
        get: _.get,
        set: _.set
      };
      if (s) {
        if (!Reflect.defineProperty(this.target_, r, c))
          return !1;
      } else
        Dn(this.target_, r, c);
      var l = new vt(o, i, "ObservableObject.key", !1);
      this.values_.set(r, l), this.notifyPropertyAddition_(r, l.value_);
    } finally {
      Je();
    }
    return !0;
  }, n.defineComputedProperty_ = function(r, o, i) {
    i === void 0 && (i = !1);
    try {
      ze();
      var s = this.delete_(r);
      if (!s)
        return s;
      if (an(this)) {
        var a = un(this, {
          object: this.proxy_ || this.target_,
          name: r,
          type: st,
          newValue: void 0
        });
        if (!a)
          return null;
      }
      o.name || (o.name = "ObservableObject.key"), o.context = this.proxy_ || this.target_;
      var u = T_(r), _ = {
        configurable: v.safeDescriptors ? this.isPlainObject_ : !0,
        enumerable: !1,
        get: u.get,
        set: u.set
      };
      if (i) {
        if (!Reflect.defineProperty(this.target_, r, _))
          return !1;
      } else
        Dn(this.target_, r, _);
      this.values_.set(r, new Xr(o)), this.notifyPropertyAddition_(r, void 0);
    } finally {
      Je();
    }
    return !0;
  }, n.delete_ = function(r, o) {
    if (o === void 0 && (o = !1), !Xn(this.target_, r))
      return !0;
    if (an(this)) {
      var i = un(this, {
        object: this.proxy_ || this.target_,
        name: r,
        type: p_
      });
      if (!i)
        return null;
    }
    try {
      var s, a;
      ze();
      var u = On(this), _ = !1, c = this.values_.get(r), l = void 0;
      if (!c && (u || _)) {
        var m;
        l = (m = Ri(this.target_, r)) == null ? void 0 : m.value;
      }
      if (o) {
        if (!Reflect.deleteProperty(this.target_, r))
          return !1;
      } else
        delete this.target_[r];
      if (c && (this.values_.delete(r), c instanceof vt && (l = c.value_), Hc(c)), this.keysAtom_.reportChanged(), (s = this.pendingKeys_) == null || (a = s.get(r)) == null || a.set(r in this.target_), u || _) {
        var T = {
          type: p_,
          observableKind: "object",
          object: this.proxy_ || this.target_,
          debugObjectName: this.name_,
          oldValue: l,
          name: r
        };
        u && Rn(this, T);
      }
    } finally {
      Je();
    }
    return !0;
  }, n.observe_ = function(r, o) {
    return No(this, r);
  }, n.intercept_ = function(r) {
    return go(this, r);
  }, n.notifyPropertyAddition_ = function(r, o) {
    var i, s, a = On(this), u = !1;
    if (a || u) {
      var _ = a || u ? {
        type: st,
        observableKind: "object",
        debugObjectName: this.name_,
        object: this.proxy_ || this.target_,
        name: r,
        newValue: o
      } : null;
      a && Rn(this, _);
    }
    (i = this.pendingKeys_) == null || (s = i.get(r)) == null || s.set(!0), this.keysAtom_.reportChanged();
  }, n.ownKeys_ = function() {
    return this.keysAtom_.reportObserved(), nr(this.target_);
  }, n.keys_ = function() {
    return this.keysAtom_.reportObserved(), Object.keys(this.target_);
  }, e;
}();
function Ao(e, n) {
  var t;
  if (Xn(e, W))
    return e;
  var r = (t = n?.name) != null ? t : "ObservableObject", o = new Zc(e, /* @__PURE__ */ new Map(), String(r), Vm(n));
  return ho(e, W, o), e;
}
var Bp = /* @__PURE__ */ Ot("ObservableObjectAdministration", Zc);
function T_(e) {
  return m_[e] || (m_[e] = {
    get: function() {
      return this[W].getObservablePropValue_(e);
    },
    set: function(t) {
      return this[W].setObservablePropValue_(e, t);
    }
  });
}
function ir(e) {
  return Ji(e) ? Bp(e[W]) : !1;
}
function E_(e, n, t) {
  var r;
  (r = e.target_[Gn]) == null || delete r[t];
}
var jp = /* @__PURE__ */ nd(0), xs = 0, ed = function() {
};
function Fp(e, n) {
  Object.setPrototypeOf ? Object.setPrototypeOf(e.prototype, n) : e.prototype.__proto__ !== void 0 ? e.prototype.__proto__ = n : e.prototype = n;
}
Fp(ed, Array.prototype);
var iu = /* @__PURE__ */ function(e, n, t) {
  dc(r, e);
  function r(i, s, a, u) {
    var _;
    a === void 0 && (a = "ObservableArray"), u === void 0 && (u = !1), _ = e.call(this) || this;
    var c = new ou(a, s, u, !0);
    if (c.proxy_ = Ms(_), _c(Ms(_), W, c), i && i.length) {
      var l = Oo(!0);
      _.spliceWithArray(0, 0, i), Ro(l);
    }
    return Object.defineProperty(Ms(_), "0", jp), _;
  }
  var o = r.prototype;
  return o.concat = function() {
    this[W].atom_.reportObserved();
    for (var s = arguments.length, a = new Array(s), u = 0; u < s; u++)
      a[u] = arguments[u];
    return Array.prototype.concat.apply(
      this.slice(),
      //@ts-ignore
      a.map(function(_) {
        return Io(_) ? _.slice() : _;
      })
    );
  }, o[t] = function() {
    var i = this, s = 0;
    return zr({
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
  }, Qa(r, [{
    key: "length",
    get: function() {
      return this[W].getArrayLength_();
    },
    set: function(s) {
      this[W].setArrayLength_(s);
    }
  }, {
    key: n,
    get: function() {
      return "Array";
    }
  }]), r;
}(ed, Symbol.toStringTag, Symbol.iterator);
Object.entries(vi).forEach(function(e) {
  var n = e[0], t = e[1];
  n !== "concat" && ho(iu.prototype, n, t);
});
function nd(e) {
  return {
    enumerable: !1,
    configurable: !0,
    get: function() {
      return this[W].get_(e);
    },
    set: function(t) {
      this[W].set_(e, t);
    }
  };
}
function Vp(e) {
  Dn(iu.prototype, "" + e, nd(e));
}
function td(e) {
  if (e > xs) {
    for (var n = xs; n < e + 100; n++)
      Vp(n);
    xs = e;
  }
}
td(1e3);
function Wp(e, n, t) {
  return new iu(e, n, t);
}
function sr(e, n) {
  if (typeof e == "object" && e !== null) {
    if (Io(e))
      return n !== void 0 && se(23), e[W].atom_;
    if (Ut(e))
      return e.atom_;
    if (gt(e)) {
      if (n === void 0)
        return e.keysAtom_;
      var t = e.data_.get(n) || e.hasMap_.get(n);
      return t || se(25, n, fa(e)), t;
    }
    if (ir(e)) {
      if (!n)
        return se(26);
      var r = e[W].values_.get(n);
      return r || se(27, n, fa(e)), r;
    }
    if (Za(e) || bo(e) || Ai(e))
      return e;
  } else if (bn(e) && Ai(e[W]))
    return e[W];
  se(28);
}
function rd(e, n) {
  if (e || se(29), n !== void 0)
    return rd(sr(e, n));
  if (Za(e) || bo(e) || Ai(e) || gt(e) || Ut(e))
    return e;
  if (e[W])
    return e[W];
  se(24, e);
}
function fa(e, n) {
  var t;
  if (n !== void 0)
    t = sr(e, n);
  else {
    if (tu(e))
      return e.name;
    ir(e) || gt(e) || Ut(e) ? t = rd(e) : t = sr(e);
  }
  return t.name_;
}
var O_ = fo.toString;
function su(e, n, t) {
  return t === void 0 && (t = -1), ha(e, n, t);
}
function ha(e, n, t, r, o) {
  if (e === n)
    return e !== 0 || 1 / e === 1 / n;
  if (e == null || n == null)
    return !1;
  if (e !== e)
    return n !== n;
  var i = typeof e;
  if (i !== "function" && i !== "object" && typeof n != "object")
    return !1;
  var s = O_.call(e);
  if (s !== O_.call(n))
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
      t >= 0 && t++;
      break;
  }
  e = R_(e), n = R_(n);
  var a = s === "[object Array]";
  if (!a) {
    if (typeof e != "object" || typeof n != "object")
      return !1;
    var u = e.constructor, _ = n.constructor;
    if (u !== _ && !(bn(u) && u instanceof u && bn(_) && _ instanceof _) && "constructor" in e && "constructor" in n)
      return !1;
  }
  if (t === 0)
    return !1;
  t < 0 && (t = -1), r = r || [], o = o || [];
  for (var c = r.length; c--; )
    if (r[c] === e)
      return o[c] === n;
  if (r.push(e), o.push(n), a) {
    if (c = e.length, c !== n.length)
      return !1;
    for (; c--; )
      if (!ha(e[c], n[c], t - 1, r, o))
        return !1;
  } else {
    var l = Object.keys(e), m;
    if (c = l.length, Object.keys(n).length !== c)
      return !1;
    for (; c--; )
      if (m = l[c], !(Xn(n, m) && ha(e[m], n[m], t - 1, r, o)))
        return !1;
  }
  return r.pop(), o.pop(), !0;
}
function R_(e) {
  return Io(e) ? e.slice() : dr(e) || gt(e) || mo(e) || Ut(e) ? Array.from(e.entries()) : e;
}
function zr(e) {
  return e[Symbol.iterator] = Xp, e;
}
function Xp() {
  return this;
}
["Symbol", "Map", "Set"].forEach(function(e) {
  var n = qa();
  typeof n[e] > "u" && se("MobX requires global '" + e + "' to be available or polyfilled");
});
typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ == "object" && __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
  spy: _p,
  extras: {
    getDebugName: fa
  },
  $mobx: W
});
class Yp {
  constructor(n) {
    Rt(this), this.state = n, this.getters = n.getters;
  }
  saveContent(n, t) {
    const r = this.getters.getActiveTab(t);
    r.content = n;
  }
}
if (!Qe)
  throw new Error("mobx-react-lite requires React with Hooks support");
if (!yp)
  throw new Error("mobx-react-lite@3 requires mobx at least version 6 to be available");
function Kp(e) {
  e();
}
function $p(e) {
  e || (e = Kp), Np({ reactionScheduler: e });
}
function zp(e) {
  return Ip(e);
}
var Jp = 1e4, qp = 1e4, Qp = (
  /** @class */
  function() {
    function e(n) {
      var t = this;
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
        value: function(r) {
          r === void 0 && (r = Jp), clearTimeout(t.sweepTimeout), t.sweepTimeout = void 0;
          var o = Date.now();
          t.registrations.forEach(function(i, s) {
            o - i.registeredAt >= r && (t.finalize(i.value), t.registrations.delete(s));
          }), t.registrations.size > 0 && t.scheduleSweep();
        }
      }), Object.defineProperty(this, "finalizeAllImmediately", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: function() {
          t.sweep(0);
        }
      });
    }
    return Object.defineProperty(e.prototype, "register", {
      enumerable: !1,
      configurable: !0,
      writable: !0,
      value: function(n, t, r) {
        this.registrations.set(r, {
          value: t,
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
        this.sweepTimeout === void 0 && (this.sweepTimeout = setTimeout(this.sweep, qp));
      }
    }), e;
  }()
), Zp = typeof FinalizationRegistry < "u" ? FinalizationRegistry : Qp, ma = new Zp(function(e) {
  var n;
  (n = e.reaction) === null || n === void 0 || n.dispose(), e.reaction = null;
}), b_ = globalThis && globalThis.__read || function(e, n) {
  var t = typeof Symbol == "function" && e[Symbol.iterator];
  if (!t)
    return e;
  var r = t.call(e), o, i = [], s;
  try {
    for (; (n === void 0 || n-- > 0) && !(o = r.next()).done; )
      i.push(o.value);
  } catch (a) {
    s = { error: a };
  } finally {
    try {
      o && !o.done && (t = r.return) && t.call(r);
    } finally {
      if (s)
        throw s.error;
    }
  }
  return i;
};
function g_(e) {
  return "observer".concat(e);
}
var eT = (
  /** @class */
  function() {
    function e() {
    }
    return e;
  }()
);
function nT() {
  return new eT();
}
function tT(e, n) {
  n === void 0 && (n = "observed");
  var t = b_(Ae.useState(nT), 1), r = t[0], o = b_(Ae.useState(), 2), i = o[1], s = function() {
    return i([]);
  }, a = Ae.useRef(null);
  a.current || (a.current = {
    reaction: null,
    mounted: !1,
    changedBeforeMount: !1
  });
  var u = a.current;
  u.reaction || (u.reaction = new Yr(g_(n), function() {
    u.mounted ? s() : u.changedBeforeMount = !0;
  }), ma.register(r, u, u)), Ae.useDebugValue(u.reaction, zp), Ae.useEffect(function() {
    return ma.unregister(u), u.mounted = !0, u.reaction ? u.changedBeforeMount && (u.changedBeforeMount = !1, s()) : (u.reaction = new Yr(g_(n), function() {
      s();
    }), s()), function() {
      u.reaction.dispose(), u.reaction = null, u.mounted = !1, u.changedBeforeMount = !1;
    };
  }, []);
  var _, c;
  if (u.reaction.track(function() {
    try {
      _ = e();
    } catch (l) {
      c = l;
    }
  }), c)
    throw c;
  return _;
}
var od = typeof Symbol == "function" && Symbol.for, N_ = od ? Symbol.for("react.forward_ref") : typeof Zt == "function" && Zt(function(e) {
  return null;
}).$$typeof, I_ = od ? Symbol.for("react.memo") : typeof er == "function" && er(function(e) {
  return null;
}).$$typeof;
function Qn(e, n) {
  var t;
  if (I_ && e.$$typeof === I_)
    throw new Error("[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.");
  var r = (t = n?.forwardRef) !== null && t !== void 0 ? t : !1, o = e, i = e.displayName || e.name;
  if (N_ && e.$$typeof === N_ && (r = !0, o = e.render, typeof o != "function"))
    throw new Error("[mobx-react-lite] `render` property of ForwardRef was not a function");
  var s = function(a, u) {
    return tT(function() {
      return o(a, u);
    }, i);
  };
  return i !== "" && (s.displayName = i), e.contextTypes && (s.contextTypes = e.contextTypes), r && (s = Zt(s)), s = er(s), oT(e, s), s;
}
var rT = {
  $$typeof: !0,
  render: !0,
  compare: !0,
  type: !0,
  // Don't redefine `displayName`,
  // it's defined as getter-setter pair on `memo` (see #3192).
  displayName: !0
};
function oT(e, n) {
  Object.keys(e).forEach(function(t) {
    rT[t] || Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(e, t));
  });
}
globalThis && globalThis.__read;
var Ls;
$p(tc);
Ls = ma.finalizeAllImmediately;
const iT = ({ fontSize: e, tabSize: n }) => ({
  fontSize: e,
  tabSize: n,
  glyphMargin: !1,
  lineNumbersMinChars: 2,
  lineDecorationsWidth: 0,
  minimap: {
    enabled: !1
  },
  scrollbar: {
    verticalScrollbarSize: 6
  }
}), yt = () => Xe(Wh), sT = () => yt().state, aT = (e) => {
  const n = yt(), t = n.state.selectedTerminalTab;
  return (r) => () => {
    if (t === r) {
      n.toggle(e), n.update({
        isHtmlPreviewOpened: !1
      });
      return;
    }
    n.update({
      selectedTerminalTab: r,
      isHtmlPreviewOpened: !1,
      [e]: !0
    });
  };
}, Nt = () => Xe(br).actions, hr = () => Xe(br), es = () => Xe(br).getters, uT = () => Xe(br).services, _T = () => Xe(br).storage;
function lT(e, n, t) {
  return n in e ? Object.defineProperty(e, n, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[n] = t, e;
}
function A_(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    n && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function S_(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? A_(Object(t), !0).forEach(function(r) {
      lT(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : A_(Object(t)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function cT(e, n) {
  if (e == null)
    return {};
  var t = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(n.indexOf(o) >= 0) && (t[o] = e[o]);
  return t;
}
function dT(e, n) {
  if (e == null)
    return {};
  var t = cT(e, n), r, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      r = i[o], !(n.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (t[r] = e[r]);
  }
  return t;
}
function fT(e, n) {
  return hT(e) || mT(e, n) || pT(e, n) || TT();
}
function hT(e) {
  if (Array.isArray(e))
    return e;
}
function mT(e, n) {
  if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(e)))) {
    var t = [], r = !0, o = !1, i = void 0;
    try {
      for (var s = e[Symbol.iterator](), a; !(r = (a = s.next()).done) && (t.push(a.value), !(n && t.length === n)); r = !0)
        ;
    } catch (u) {
      o = !0, i = u;
    } finally {
      try {
        !r && s.return != null && s.return();
      } finally {
        if (o)
          throw i;
      }
    }
    return t;
  }
}
function pT(e, n) {
  if (e) {
    if (typeof e == "string")
      return v_(e, n);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set")
      return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return v_(e, n);
  }
}
function v_(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var t = 0, r = new Array(n); t < n; t++)
    r[t] = e[t];
  return r;
}
function TT() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ET(e, n, t) {
  return n in e ? Object.defineProperty(e, n, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[n] = t, e;
}
function G_(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    n && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function C_(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? G_(Object(t), !0).forEach(function(r) {
      ET(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : G_(Object(t)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function OT() {
  for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
    n[t] = arguments[t];
  return function(r) {
    return n.reduceRight(function(o, i) {
      return i(o);
    }, r);
  };
}
function Hr(e) {
  return function n() {
    for (var t = this, r = arguments.length, o = new Array(r), i = 0; i < r; i++)
      o[i] = arguments[i];
    return o.length >= e.length ? e.apply(this, o) : function() {
      for (var s = arguments.length, a = new Array(s), u = 0; u < s; u++)
        a[u] = arguments[u];
      return n.apply(t, [].concat(o, a));
    };
  };
}
function Ci(e) {
  return {}.toString.call(e).includes("Object");
}
function RT(e) {
  return !Object.keys(e).length;
}
function Jr(e) {
  return typeof e == "function";
}
function bT(e, n) {
  return Object.prototype.hasOwnProperty.call(e, n);
}
function gT(e, n) {
  return Ci(n) || ft("changeType"), Object.keys(n).some(function(t) {
    return !bT(e, t);
  }) && ft("changeField"), n;
}
function NT(e) {
  Jr(e) || ft("selectorType");
}
function IT(e) {
  Jr(e) || Ci(e) || ft("handlerType"), Ci(e) && Object.values(e).some(function(n) {
    return !Jr(n);
  }) && ft("handlersType");
}
function AT(e) {
  e || ft("initialIsRequired"), Ci(e) || ft("initialType"), RT(e) && ft("initialContent");
}
function ST(e, n) {
  throw new Error(e[n] || e.default);
}
var vT = {
  initialIsRequired: "initial state is required",
  initialType: "initial state should be an object",
  initialContent: "initial state shouldn't be an empty object",
  handlerType: "handler should be an object or a function",
  handlersType: "all handlers should be a functions",
  selectorType: "selector should be a function",
  changeType: "provided value of changes should be an object",
  changeField: 'it seams you want to change a field in the state which is not specified in the "initial" state',
  default: "an unknown error accured in `state-local` package"
}, ft = Hr(ST)(vT), Vo = {
  changes: gT,
  selector: NT,
  handler: IT,
  initial: AT
};
function GT(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  Vo.initial(e), Vo.handler(n);
  var t = {
    current: e
  }, r = Hr(UT)(t, n), o = Hr(DT)(t), i = Hr(Vo.changes)(e), s = Hr(CT)(t);
  function a() {
    var _ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function(c) {
      return c;
    };
    return Vo.selector(_), _(t.current);
  }
  function u(_) {
    OT(r, o, i, s)(_);
  }
  return [a, u];
}
function CT(e, n) {
  return Jr(n) ? n(e.current) : n;
}
function DT(e, n) {
  return e.current = C_(C_({}, e.current), n), n;
}
function UT(e, n, t) {
  return Jr(n) ? n(e.current) : Object.keys(t).forEach(function(r) {
    var o;
    return (o = n[r]) === null || o === void 0 ? void 0 : o.call(n, e.current[r]);
  }), t;
}
var yT = {
  create: GT
}, HT = {
  paths: {
    vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.36.1/min/vs"
  }
};
function PT(e) {
  return function n() {
    for (var t = this, r = arguments.length, o = new Array(r), i = 0; i < r; i++)
      o[i] = arguments[i];
    return o.length >= e.length ? e.apply(this, o) : function() {
      for (var s = arguments.length, a = new Array(s), u = 0; u < s; u++)
        a[u] = arguments[u];
      return n.apply(t, [].concat(o, a));
    };
  };
}
function wT(e) {
  return {}.toString.call(e).includes("Object");
}
function MT(e) {
  return e || D_("configIsRequired"), wT(e) || D_("configType"), e.urls ? (kT(), {
    paths: {
      vs: e.urls.monacoBase
    }
  }) : e;
}
function kT() {
  console.warn(id.deprecation);
}
function xT(e, n) {
  throw new Error(e[n] || e.default);
}
var id = {
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
}, D_ = PT(xT)(id), LT = {
  config: MT
}, BT = function() {
  for (var n = arguments.length, t = new Array(n), r = 0; r < n; r++)
    t[r] = arguments[r];
  return function(o) {
    return t.reduceRight(function(i, s) {
      return s(i);
    }, o);
  };
};
function sd(e, n) {
  return Object.keys(n).forEach(function(t) {
    n[t] instanceof Object && e[t] && Object.assign(n[t], sd(e[t], n[t]));
  }), S_(S_({}, e), n);
}
var jT = {
  type: "cancelation",
  msg: "operation is manually canceled"
};
function Bs(e) {
  var n = !1, t = new Promise(function(r, o) {
    e.then(function(i) {
      return n ? o(jT) : r(i);
    }), e.catch(o);
  });
  return t.cancel = function() {
    return n = !0;
  }, t;
}
var FT = yT.create({
  config: HT,
  isInitialized: !1,
  resolve: null,
  reject: null,
  monaco: null
}), ad = fT(FT, 2), So = ad[0], ns = ad[1];
function VT(e) {
  var n = LT.config(e), t = n.monaco, r = dT(n, ["monaco"]);
  ns(function(o) {
    return {
      config: sd(o.config, r),
      monaco: t
    };
  });
}
function WT() {
  var e = So(function(n) {
    var t = n.monaco, r = n.isInitialized, o = n.resolve;
    return {
      monaco: t,
      isInitialized: r,
      resolve: o
    };
  });
  if (!e.isInitialized) {
    if (ns({
      isInitialized: !0
    }), e.monaco)
      return e.resolve(e.monaco), Bs(js);
    if (window.monaco && window.monaco.editor)
      return ud(window.monaco), e.resolve(window.monaco), Bs(js);
    BT(XT, KT)($T);
  }
  return Bs(js);
}
function XT(e) {
  return document.body.appendChild(e);
}
function YT(e) {
  var n = document.createElement("script");
  return e && (n.src = e), n;
}
function KT(e) {
  var n = So(function(r) {
    var o = r.config, i = r.reject;
    return {
      config: o,
      reject: i
    };
  }), t = YT("".concat(n.config.paths.vs, "/loader.js"));
  return t.onload = function() {
    return e();
  }, t.onerror = n.reject, t;
}
function $T() {
  var e = So(function(t) {
    var r = t.config, o = t.resolve, i = t.reject;
    return {
      config: r,
      resolve: o,
      reject: i
    };
  }), n = window.require;
  n.config(e.config), n(["vs/editor/editor.main"], function(t) {
    ud(t), e.resolve(t);
  }, function(t) {
    e.reject(t);
  });
}
function ud(e) {
  So().monaco || ns({
    monaco: e
  });
}
function zT() {
  return So(function(e) {
    var n = e.monaco;
    return n;
  });
}
var js = new Promise(function(e, n) {
  return ns({
    resolve: e,
    reject: n
  });
}), Di = {
  config: VT,
  init: WT,
  __getMonacoInstance: zT
}, JT = { wrapper: { display: "flex", position: "relative", textAlign: "initial" }, fullWidth: { width: "100%" }, hide: { display: "none" } }, Fs = JT, qT = { container: { display: "flex", height: "100%", width: "100%", justifyContent: "center", alignItems: "center" } }, QT = qT;
function ZT({ children: e }) {
  return Ae.createElement("div", { style: QT.container }, e);
}
var eE = ZT, nE = eE;
function tE({ width: e, height: n, isEditorReady: t, loading: r, _ref: o, className: i, wrapperProps: s }) {
  return Ae.createElement("section", { style: { ...Fs.wrapper, width: e, height: n }, ...s }, !t && Ae.createElement(nE, null, r), Ae.createElement("div", { ref: o, style: { ...Fs.fullWidth, ...!t && Fs.hide }, className: i }));
}
var rE = tE, _d = er(rE);
function oE(e) {
  Ge(e, []);
}
var au = oE;
function iE(e, n, t = !0) {
  let r = Z(!0);
  Ge(r.current || !t ? () => {
    r.current = !1;
  } : e, n);
}
var Ze = iE;
function kr() {
}
function Wt(e, n, t, r) {
  return sE(e, r) || aE(e, n, t, r);
}
function sE(e, n) {
  return e.editor.getModel(ld(e, n));
}
function aE(e, n, t, r) {
  return e.editor.createModel(n, t, r ? ld(e, r) : void 0);
}
function ld(e, n) {
  return e.Uri.parse(n);
}
function uE({ original: e, modified: n, language: t, originalLanguage: r, modifiedLanguage: o, originalModelPath: i, modifiedModelPath: s, keepCurrentOriginalModel: a = !1, keepCurrentModifiedModel: u = !1, theme: _ = "light", loading: c = "Loading...", options: l = {}, height: m = "100%", width: T = "100%", className: d, wrapperProps: f = {}, beforeMount: h = kr, onMount: O = kr }) {
  let [R, g] = Qe(!1), [I, p] = Qe(!0), H = Z(null), M = Z(null), K = Z(null), w = Z(O), B = Z(h), Te = Z(!1);
  au(() => {
    let G = Di.init();
    return G.then((q) => (M.current = q) && p(!1)).catch((q) => q?.type !== "cancelation" && console.error("Monaco initialization: error:", q)), () => H.current ? k() : G.cancel();
  }), Ze(() => {
    let G = H.current.getModifiedEditor();
    G.getOption(M.current.editor.EditorOption.readOnly) ? G.setValue(n || "") : n !== G.getValue() && (G.executeEdits("", [{ range: G.getModel().getFullModelRange(), text: n || "", forceMoveMarkers: !0 }]), G.pushUndoStop());
  }, [n], R), Ze(() => {
    H.current?.getModel()?.original.setValue(e || "");
  }, [e], R), Ze(() => {
    let { original: G, modified: q } = H.current.getModel();
    M.current.editor.setModelLanguage(G, r || t || "text"), M.current.editor.setModelLanguage(q, o || t || "text");
  }, [t, r, o], R), Ze(() => {
    M.current?.editor.setTheme(_);
  }, [_], R), Ze(() => {
    H.current?.updateOptions(l);
  }, [l], R);
  let me = Et(() => {
    if (!M.current)
      return;
    B.current(M.current);
    let G = Wt(M.current, e || "", r || t || "text", i || ""), q = Wt(M.current, n || "", o || t || "text", s || "");
    H.current?.setModel({ original: G, modified: q });
  }, [t, n, o, e, r, i, s]), be = Et(() => {
    !Te.current && K.current && (H.current = M.current.editor.createDiffEditor(K.current, { automaticLayout: !0, ...l }), me(), M.current?.editor.setTheme(_), g(!0), Te.current = !0);
  }, [l, _, me]);
  Ge(() => {
    R && w.current(H.current, M.current);
  }, [R]), Ge(() => {
    !I && !R && be();
  }, [I, R, be]), Ze(() => {
    if (H.current && M.current) {
      let G = H.current.getOriginalEditor(), q = Wt(M.current, e || "", r || t || "text", i || "");
      q !== G.getModel() && G.setModel(q);
    }
  }, [i], R), Ze(() => {
    if (H.current && M.current) {
      let G = H.current.getModifiedEditor(), q = Wt(M.current, n || "", o || t || "text", s || "");
      q !== G.getModel() && G.setModel(q);
    }
  }, [s], R);
  function k() {
    let G = H.current?.getModel();
    a || G?.original?.dispose(), u || G?.modified?.dispose(), H.current?.dispose();
  }
  return Ae.createElement(_d, { width: T, height: m, isEditorReady: R, loading: c, _ref: K, className: d, wrapperProps: f });
}
var _E = uE;
er(_E);
function lE() {
  let [e, n] = Qe(Di.__getMonacoInstance());
  return au(() => {
    let t;
    return e || (t = Di.init(), t.then((r) => {
      n(r);
    })), () => t?.cancel();
  }), e;
}
var cd = lE;
function cE(e) {
  let n = Z();
  return Ge(() => {
    n.current = e;
  }, [e]), n.current;
}
var dE = cE, Wo = /* @__PURE__ */ new Map();
function fE({ defaultValue: e, defaultLanguage: n, defaultPath: t, value: r, language: o, path: i, theme: s = "light", line: a, loading: u = "Loading...", options: _ = {}, overrideServices: c = {}, saveViewState: l = !0, keepCurrentModel: m = !1, width: T = "100%", height: d = "100%", className: f, wrapperProps: h = {}, beforeMount: O = kr, onMount: R = kr, onChange: g, onValidate: I = kr }) {
  let [p, H] = Qe(!1), [M, K] = Qe(!0), w = Z(null), B = Z(null), Te = Z(null), me = Z(R), be = Z(O), k = Z(), G = Z(r), q = dE(i), _e = Z(!1), ee = Z(!1);
  au(() => {
    let ge = Di.init();
    return ge.then((C) => (w.current = C) && K(!1)).catch((C) => C?.type !== "cancelation" && console.error("Monaco initialization: error:", C)), () => B.current ? He() : ge.cancel();
  }), Ze(() => {
    let ge = Wt(w.current, e || r || "", n || o || "", i || t || "");
    ge !== B.current?.getModel() && (l && Wo.set(q, B.current?.saveViewState()), B.current?.setModel(ge), l && B.current?.restoreViewState(Wo.get(i)));
  }, [i], p), Ze(() => {
    B.current?.updateOptions(_);
  }, [_], p), Ze(() => {
    !B.current || r === void 0 || (B.current.getOption(w.current.editor.EditorOption.readOnly) ? B.current.setValue(r) : r !== B.current.getValue() && (ee.current = !0, B.current.executeEdits("", [{ range: B.current.getModel().getFullModelRange(), text: r, forceMoveMarkers: !0 }]), B.current.pushUndoStop(), ee.current = !1));
  }, [r], p), Ze(() => {
    let ge = B.current?.getModel();
    ge && o && w.current?.editor.setModelLanguage(ge, o);
  }, [o], p), Ze(() => {
    a !== void 0 && B.current?.revealLine(a);
  }, [a], p), Ze(() => {
    w.current?.editor.setTheme(s);
  }, [s], p);
  let Ie = Et(() => {
    if (!(!Te.current || !w.current) && !_e.current) {
      be.current(w.current);
      let ge = i || t, C = Wt(w.current, r || e || "", n || o || "", ge || "");
      B.current = w.current?.editor.create(Te.current, { model: C, automaticLayout: !0, ..._ }, c), l && B.current.restoreViewState(Wo.get(ge)), w.current.editor.setTheme(s), H(!0), _e.current = !0;
    }
  }, [e, n, t, r, o, i, _, c, l, s]);
  Ge(() => {
    p && me.current(B.current, w.current);
  }, [p]), Ge(() => {
    !M && !p && Ie();
  }, [M, p, Ie]), G.current = r, Ge(() => {
    p && g && (k.current?.dispose(), k.current = B.current?.onDidChangeModelContent((ge) => {
      ee.current || g(B.current.getValue(), ge);
    }));
  }, [p, g]), Ge(() => {
    if (p) {
      let ge = w.current.editor.onDidChangeMarkers((C) => {
        let U = B.current.getModel()?.uri;
        if (U && C.find((P) => P.path === U.path)) {
          let P = w.current.editor.getModelMarkers({ resource: U });
          I?.(P);
        }
      });
      return () => {
        ge?.dispose();
      };
    }
    return () => {
    };
  }, [p, I]);
  function He() {
    k.current?.dispose(), m ? l && Wo.set(i, B.current.saveViewState()) : B.current.getModel()?.dispose(), B.current.dispose();
  }
  return Ae.createElement(_d, { width: T, height: d, isEditorReady: p, loading: u, _ref: Te, className: f, wrapperProps: h });
}
var hE = fE, mE = er(hE), pE = mE;
function dd(e, n) {
  return function() {
    return e.apply(n, arguments);
  };
}
const { toString: TE } = Object.prototype, { getPrototypeOf: uu } = Object, ts = ((e) => (n) => {
  const t = TE.call(n);
  return e[t] || (e[t] = t.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), wn = (e) => (e = e.toLowerCase(), (n) => ts(n) === e), rs = (e) => (n) => typeof n === e, { isArray: mr } = Array, qr = rs("undefined");
function EE(e) {
  return e !== null && !qr(e) && e.constructor !== null && !qr(e.constructor) && ln(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const fd = wn("ArrayBuffer");
function OE(e) {
  let n;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? n = ArrayBuffer.isView(e) : n = e && e.buffer && fd(e.buffer), n;
}
const RE = rs("string"), ln = rs("function"), hd = rs("number"), os = (e) => e !== null && typeof e == "object", bE = (e) => e === !0 || e === !1, ri = (e) => {
  if (ts(e) !== "object")
    return !1;
  const n = uu(e);
  return (n === null || n === Object.prototype || Object.getPrototypeOf(n) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, gE = wn("Date"), NE = wn("File"), IE = wn("Blob"), AE = wn("FileList"), SE = (e) => os(e) && ln(e.pipe), vE = (e) => {
  let n;
  return e && (typeof FormData == "function" && e instanceof FormData || ln(e.append) && ((n = ts(e)) === "formdata" || // detect form-data instance
  n === "object" && ln(e.toString) && e.toString() === "[object FormData]"));
}, GE = wn("URLSearchParams"), CE = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function vo(e, n, { allOwnKeys: t = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, o;
  if (typeof e != "object" && (e = [e]), mr(e))
    for (r = 0, o = e.length; r < o; r++)
      n.call(null, e[r], r, e);
  else {
    const i = t ? Object.getOwnPropertyNames(e) : Object.keys(e), s = i.length;
    let a;
    for (r = 0; r < s; r++)
      a = i[r], n.call(null, e[a], a, e);
  }
}
function md(e, n) {
  n = n.toLowerCase();
  const t = Object.keys(e);
  let r = t.length, o;
  for (; r-- > 0; )
    if (o = t[r], n === o.toLowerCase())
      return o;
  return null;
}
const pd = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), Td = (e) => !qr(e) && e !== pd;
function pa() {
  const { caseless: e } = Td(this) && this || {}, n = {}, t = (r, o) => {
    const i = e && md(n, o) || o;
    ri(n[i]) && ri(r) ? n[i] = pa(n[i], r) : ri(r) ? n[i] = pa({}, r) : mr(r) ? n[i] = r.slice() : n[i] = r;
  };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && vo(arguments[r], t);
  return n;
}
const DE = (e, n, t, { allOwnKeys: r } = {}) => (vo(n, (o, i) => {
  t && ln(o) ? e[i] = dd(o, t) : e[i] = o;
}, { allOwnKeys: r }), e), UE = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), yE = (e, n, t, r) => {
  e.prototype = Object.create(n.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: n.prototype
  }), t && Object.assign(e.prototype, t);
}, HE = (e, n, t, r) => {
  let o, i, s;
  const a = {};
  if (n = n || {}, e == null)
    return n;
  do {
    for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
      s = o[i], (!r || r(s, e, n)) && !a[s] && (n[s] = e[s], a[s] = !0);
    e = t !== !1 && uu(e);
  } while (e && (!t || t(e, n)) && e !== Object.prototype);
  return n;
}, PE = (e, n, t) => {
  e = String(e), (t === void 0 || t > e.length) && (t = e.length), t -= n.length;
  const r = e.indexOf(n, t);
  return r !== -1 && r === t;
}, wE = (e) => {
  if (!e)
    return null;
  if (mr(e))
    return e;
  let n = e.length;
  if (!hd(n))
    return null;
  const t = new Array(n);
  for (; n-- > 0; )
    t[n] = e[n];
  return t;
}, ME = ((e) => (n) => e && n instanceof e)(typeof Uint8Array < "u" && uu(Uint8Array)), kE = (e, n) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const i = o.value;
    n.call(e, i[0], i[1]);
  }
}, xE = (e, n) => {
  let t;
  const r = [];
  for (; (t = e.exec(n)) !== null; )
    r.push(t);
  return r;
}, LE = wn("HTMLFormElement"), BE = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(t, r, o) {
    return r.toUpperCase() + o;
  }
), U_ = (({ hasOwnProperty: e }) => (n, t) => e.call(n, t))(Object.prototype), jE = wn("RegExp"), Ed = (e, n) => {
  const t = Object.getOwnPropertyDescriptors(e), r = {};
  vo(t, (o, i) => {
    n(o, i, e) !== !1 && (r[i] = o);
  }), Object.defineProperties(e, r);
}, FE = (e) => {
  Ed(e, (n, t) => {
    if (ln(e) && ["arguments", "caller", "callee"].indexOf(t) !== -1)
      return !1;
    const r = e[t];
    if (ln(r)) {
      if (n.enumerable = !1, "writable" in n) {
        n.writable = !1;
        return;
      }
      n.set || (n.set = () => {
        throw Error("Can not rewrite read-only method '" + t + "'");
      });
    }
  });
}, VE = (e, n) => {
  const t = {}, r = (o) => {
    o.forEach((i) => {
      t[i] = !0;
    });
  };
  return mr(e) ? r(e) : r(String(e).split(n)), t;
}, WE = () => {
}, XE = (e, n) => (e = +e, Number.isFinite(e) ? e : n), Vs = "abcdefghijklmnopqrstuvwxyz", y_ = "0123456789", Od = {
  DIGIT: y_,
  ALPHA: Vs,
  ALPHA_DIGIT: Vs + Vs.toUpperCase() + y_
}, YE = (e = 16, n = Od.ALPHA_DIGIT) => {
  let t = "";
  const { length: r } = n;
  for (; e--; )
    t += n[Math.random() * r | 0];
  return t;
};
function KE(e) {
  return !!(e && ln(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const $E = (e) => {
  const n = new Array(10), t = (r, o) => {
    if (os(r)) {
      if (n.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        n[o] = r;
        const i = mr(r) ? [] : {};
        return vo(r, (s, a) => {
          const u = t(s, o + 1);
          !qr(u) && (i[a] = u);
        }), n[o] = void 0, i;
      }
    }
    return r;
  };
  return t(e, 0);
}, zE = wn("AsyncFunction"), JE = (e) => e && (os(e) || ln(e)) && ln(e.then) && ln(e.catch), b = {
  isArray: mr,
  isArrayBuffer: fd,
  isBuffer: EE,
  isFormData: vE,
  isArrayBufferView: OE,
  isString: RE,
  isNumber: hd,
  isBoolean: bE,
  isObject: os,
  isPlainObject: ri,
  isUndefined: qr,
  isDate: gE,
  isFile: NE,
  isBlob: IE,
  isRegExp: jE,
  isFunction: ln,
  isStream: SE,
  isURLSearchParams: GE,
  isTypedArray: ME,
  isFileList: AE,
  forEach: vo,
  merge: pa,
  extend: DE,
  trim: CE,
  stripBOM: UE,
  inherits: yE,
  toFlatObject: HE,
  kindOf: ts,
  kindOfTest: wn,
  endsWith: PE,
  toArray: wE,
  forEachEntry: kE,
  matchAll: xE,
  isHTMLForm: LE,
  hasOwnProperty: U_,
  hasOwnProp: U_,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Ed,
  freezeMethods: FE,
  toObjectSet: VE,
  toCamelCase: BE,
  noop: WE,
  toFiniteNumber: XE,
  findKey: md,
  global: pd,
  isContextDefined: Td,
  ALPHABET: Od,
  generateString: YE,
  isSpecCompliantForm: KE,
  toJSONObject: $E,
  isAsyncFn: zE,
  isThenable: JE
};
function re(e, n, t, r, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", n && (this.code = n), t && (this.config = t), r && (this.request = r), o && (this.response = o);
}
b.inherits(re, Error, {
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
      config: b.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const Rd = re.prototype, bd = {};
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
  bd[e] = { value: e };
});
Object.defineProperties(re, bd);
Object.defineProperty(Rd, "isAxiosError", { value: !0 });
re.from = (e, n, t, r, o, i) => {
  const s = Object.create(Rd);
  return b.toFlatObject(e, s, function(u) {
    return u !== Error.prototype;
  }, (a) => a !== "isAxiosError"), re.call(s, e.message, n, t, r, o), s.cause = e, s.name = e.name, i && Object.assign(s, i), s;
};
const qE = null;
function Ta(e) {
  return b.isPlainObject(e) || b.isArray(e);
}
function gd(e) {
  return b.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function H_(e, n, t) {
  return e ? e.concat(n).map(function(o, i) {
    return o = gd(o), !t && i ? "[" + o + "]" : o;
  }).join(t ? "." : "") : n;
}
function QE(e) {
  return b.isArray(e) && !e.some(Ta);
}
const ZE = b.toFlatObject(b, {}, null, function(n) {
  return /^is[A-Z]/.test(n);
});
function is(e, n, t) {
  if (!b.isObject(e))
    throw new TypeError("target must be an object");
  n = n || new FormData(), t = b.toFlatObject(t, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(f, h) {
    return !b.isUndefined(h[f]);
  });
  const r = t.metaTokens, o = t.visitor || c, i = t.dots, s = t.indexes, u = (t.Blob || typeof Blob < "u" && Blob) && b.isSpecCompliantForm(n);
  if (!b.isFunction(o))
    throw new TypeError("visitor must be a function");
  function _(d) {
    if (d === null)
      return "";
    if (b.isDate(d))
      return d.toISOString();
    if (!u && b.isBlob(d))
      throw new re("Blob is not supported. Use a Buffer instead.");
    return b.isArrayBuffer(d) || b.isTypedArray(d) ? u && typeof Blob == "function" ? new Blob([d]) : Buffer.from(d) : d;
  }
  function c(d, f, h) {
    let O = d;
    if (d && !h && typeof d == "object") {
      if (b.endsWith(f, "{}"))
        f = r ? f : f.slice(0, -2), d = JSON.stringify(d);
      else if (b.isArray(d) && QE(d) || (b.isFileList(d) || b.endsWith(f, "[]")) && (O = b.toArray(d)))
        return f = gd(f), O.forEach(function(g, I) {
          !(b.isUndefined(g) || g === null) && n.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? H_([f], I, i) : s === null ? f : f + "[]",
            _(g)
          );
        }), !1;
    }
    return Ta(d) ? !0 : (n.append(H_(h, f, i), _(d)), !1);
  }
  const l = [], m = Object.assign(ZE, {
    defaultVisitor: c,
    convertValue: _,
    isVisitable: Ta
  });
  function T(d, f) {
    if (!b.isUndefined(d)) {
      if (l.indexOf(d) !== -1)
        throw Error("Circular reference detected in " + f.join("."));
      l.push(d), b.forEach(d, function(O, R) {
        (!(b.isUndefined(O) || O === null) && o.call(
          n,
          O,
          b.isString(R) ? R.trim() : R,
          f,
          m
        )) === !0 && T(O, f ? f.concat(R) : [R]);
      }), l.pop();
    }
  }
  if (!b.isObject(e))
    throw new TypeError("data must be an object");
  return T(e), n;
}
function P_(e) {
  const n = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
    return n[r];
  });
}
function _u(e, n) {
  this._pairs = [], e && is(e, this, n);
}
const Nd = _u.prototype;
Nd.append = function(n, t) {
  this._pairs.push([n, t]);
};
Nd.toString = function(n) {
  const t = n ? function(r) {
    return n.call(this, r, P_);
  } : P_;
  return this._pairs.map(function(o) {
    return t(o[0]) + "=" + t(o[1]);
  }, "").join("&");
};
function eO(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Id(e, n, t) {
  if (!n)
    return e;
  const r = t && t.encode || eO, o = t && t.serialize;
  let i;
  if (o ? i = o(n, t) : i = b.isURLSearchParams(n) ? n.toString() : new _u(n, t).toString(r), i) {
    const s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class nO {
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
  use(n, t, r) {
    return this.handlers.push({
      fulfilled: n,
      rejected: t,
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
    b.forEach(this.handlers, function(r) {
      r !== null && n(r);
    });
  }
}
const w_ = nO, Ad = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, tO = typeof URLSearchParams < "u" ? URLSearchParams : _u, rO = typeof FormData < "u" ? FormData : null, oO = typeof Blob < "u" ? Blob : null, iO = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), sO = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), Cn = {
  isBrowser: !0,
  classes: {
    URLSearchParams: tO,
    FormData: rO,
    Blob: oO
  },
  isStandardBrowserEnv: iO,
  isStandardBrowserWebWorkerEnv: sO,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function aO(e, n) {
  return is(e, new Cn.classes.URLSearchParams(), Object.assign({
    visitor: function(t, r, o, i) {
      return Cn.isNode && b.isBuffer(t) ? (this.append(r, t.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, n));
}
function uO(e) {
  return b.matchAll(/\w+|\[(\w*)]/g, e).map((n) => n[0] === "[]" ? "" : n[1] || n[0]);
}
function _O(e) {
  const n = {}, t = Object.keys(e);
  let r;
  const o = t.length;
  let i;
  for (r = 0; r < o; r++)
    i = t[r], n[i] = e[i];
  return n;
}
function Sd(e) {
  function n(t, r, o, i) {
    let s = t[i++];
    const a = Number.isFinite(+s), u = i >= t.length;
    return s = !s && b.isArray(o) ? o.length : s, u ? (b.hasOwnProp(o, s) ? o[s] = [o[s], r] : o[s] = r, !a) : ((!o[s] || !b.isObject(o[s])) && (o[s] = []), n(t, r, o[s], i) && b.isArray(o[s]) && (o[s] = _O(o[s])), !a);
  }
  if (b.isFormData(e) && b.isFunction(e.entries)) {
    const t = {};
    return b.forEachEntry(e, (r, o) => {
      n(uO(r), o, t, 0);
    }), t;
  }
  return null;
}
const lO = {
  "Content-Type": void 0
};
function cO(e, n, t) {
  if (b.isString(e))
    try {
      return (n || JSON.parse)(e), b.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (t || JSON.stringify)(e);
}
const ss = {
  transitional: Ad,
  adapter: ["xhr", "http"],
  transformRequest: [function(n, t) {
    const r = t.getContentType() || "", o = r.indexOf("application/json") > -1, i = b.isObject(n);
    if (i && b.isHTMLForm(n) && (n = new FormData(n)), b.isFormData(n))
      return o && o ? JSON.stringify(Sd(n)) : n;
    if (b.isArrayBuffer(n) || b.isBuffer(n) || b.isStream(n) || b.isFile(n) || b.isBlob(n))
      return n;
    if (b.isArrayBufferView(n))
      return n.buffer;
    if (b.isURLSearchParams(n))
      return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), n.toString();
    let a;
    if (i) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return aO(n, this.formSerializer).toString();
      if ((a = b.isFileList(n)) || r.indexOf("multipart/form-data") > -1) {
        const u = this.env && this.env.FormData;
        return is(
          a ? { "files[]": n } : n,
          u && new u(),
          this.formSerializer
        );
      }
    }
    return i || o ? (t.setContentType("application/json", !1), cO(n)) : n;
  }],
  transformResponse: [function(n) {
    const t = this.transitional || ss.transitional, r = t && t.forcedJSONParsing, o = this.responseType === "json";
    if (n && b.isString(n) && (r && !this.responseType || o)) {
      const s = !(t && t.silentJSONParsing) && o;
      try {
        return JSON.parse(n);
      } catch (a) {
        if (s)
          throw a.name === "SyntaxError" ? re.from(a, re.ERR_BAD_RESPONSE, this, null, this.response) : a;
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
    FormData: Cn.classes.FormData,
    Blob: Cn.classes.Blob
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
b.forEach(["delete", "get", "head"], function(n) {
  ss.headers[n] = {};
});
b.forEach(["post", "put", "patch"], function(n) {
  ss.headers[n] = b.merge(lO);
});
const lu = ss, dO = b.toObjectSet([
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
]), fO = (e) => {
  const n = {};
  let t, r, o;
  return e && e.split(`
`).forEach(function(s) {
    o = s.indexOf(":"), t = s.substring(0, o).trim().toLowerCase(), r = s.substring(o + 1).trim(), !(!t || n[t] && dO[t]) && (t === "set-cookie" ? n[t] ? n[t].push(r) : n[t] = [r] : n[t] = n[t] ? n[t] + ", " + r : r);
  }), n;
}, M_ = Symbol("internals");
function Ir(e) {
  return e && String(e).trim().toLowerCase();
}
function oi(e) {
  return e === !1 || e == null ? e : b.isArray(e) ? e.map(oi) : String(e);
}
function hO(e) {
  const n = /* @__PURE__ */ Object.create(null), t = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = t.exec(e); )
    n[r[1]] = r[2];
  return n;
}
const mO = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Ws(e, n, t, r, o) {
  if (b.isFunction(r))
    return r.call(this, n, t);
  if (o && (n = t), !!b.isString(n)) {
    if (b.isString(r))
      return n.indexOf(r) !== -1;
    if (b.isRegExp(r))
      return r.test(n);
  }
}
function pO(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (n, t, r) => t.toUpperCase() + r);
}
function TO(e, n) {
  const t = b.toCamelCase(" " + n);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + t, {
      value: function(o, i, s) {
        return this[r].call(this, n, o, i, s);
      },
      configurable: !0
    });
  });
}
class as {
  constructor(n) {
    n && this.set(n);
  }
  set(n, t, r) {
    const o = this;
    function i(a, u, _) {
      const c = Ir(u);
      if (!c)
        throw new Error("header name must be a non-empty string");
      const l = b.findKey(o, c);
      (!l || o[l] === void 0 || _ === !0 || _ === void 0 && o[l] !== !1) && (o[l || u] = oi(a));
    }
    const s = (a, u) => b.forEach(a, (_, c) => i(_, c, u));
    return b.isPlainObject(n) || n instanceof this.constructor ? s(n, t) : b.isString(n) && (n = n.trim()) && !mO(n) ? s(fO(n), t) : n != null && i(t, n, r), this;
  }
  get(n, t) {
    if (n = Ir(n), n) {
      const r = b.findKey(this, n);
      if (r) {
        const o = this[r];
        if (!t)
          return o;
        if (t === !0)
          return hO(o);
        if (b.isFunction(t))
          return t.call(this, o, r);
        if (b.isRegExp(t))
          return t.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(n, t) {
    if (n = Ir(n), n) {
      const r = b.findKey(this, n);
      return !!(r && this[r] !== void 0 && (!t || Ws(this, this[r], r, t)));
    }
    return !1;
  }
  delete(n, t) {
    const r = this;
    let o = !1;
    function i(s) {
      if (s = Ir(s), s) {
        const a = b.findKey(r, s);
        a && (!t || Ws(r, r[a], a, t)) && (delete r[a], o = !0);
      }
    }
    return b.isArray(n) ? n.forEach(i) : i(n), o;
  }
  clear(n) {
    const t = Object.keys(this);
    let r = t.length, o = !1;
    for (; r--; ) {
      const i = t[r];
      (!n || Ws(this, this[i], i, n, !0)) && (delete this[i], o = !0);
    }
    return o;
  }
  normalize(n) {
    const t = this, r = {};
    return b.forEach(this, (o, i) => {
      const s = b.findKey(r, i);
      if (s) {
        t[s] = oi(o), delete t[i];
        return;
      }
      const a = n ? pO(i) : String(i).trim();
      a !== i && delete t[i], t[a] = oi(o), r[a] = !0;
    }), this;
  }
  concat(...n) {
    return this.constructor.concat(this, ...n);
  }
  toJSON(n) {
    const t = /* @__PURE__ */ Object.create(null);
    return b.forEach(this, (r, o) => {
      r != null && r !== !1 && (t[o] = n && b.isArray(r) ? r.join(", ") : r);
    }), t;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([n, t]) => n + ": " + t).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(n) {
    return n instanceof this ? n : new this(n);
  }
  static concat(n, ...t) {
    const r = new this(n);
    return t.forEach((o) => r.set(o)), r;
  }
  static accessor(n) {
    const r = (this[M_] = this[M_] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function i(s) {
      const a = Ir(s);
      r[a] || (TO(o, s), r[a] = !0);
    }
    return b.isArray(n) ? n.forEach(i) : i(n), this;
  }
}
as.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
b.freezeMethods(as.prototype);
b.freezeMethods(as);
const Yn = as;
function Xs(e, n) {
  const t = this || lu, r = n || t, o = Yn.from(r.headers);
  let i = r.data;
  return b.forEach(e, function(a) {
    i = a.call(t, i, o.normalize(), n ? n.status : void 0);
  }), o.normalize(), i;
}
function vd(e) {
  return !!(e && e.__CANCEL__);
}
function Go(e, n, t) {
  re.call(this, e ?? "canceled", re.ERR_CANCELED, n, t), this.name = "CanceledError";
}
b.inherits(Go, re, {
  __CANCEL__: !0
});
function EO(e, n, t) {
  const r = t.config.validateStatus;
  !t.status || !r || r(t.status) ? e(t) : n(new re(
    "Request failed with status code " + t.status,
    [re.ERR_BAD_REQUEST, re.ERR_BAD_RESPONSE][Math.floor(t.status / 100) - 4],
    t.config,
    t.request,
    t
  ));
}
const OO = Cn.isStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  function() {
    return {
      write: function(t, r, o, i, s, a) {
        const u = [];
        u.push(t + "=" + encodeURIComponent(r)), b.isNumber(o) && u.push("expires=" + new Date(o).toGMTString()), b.isString(i) && u.push("path=" + i), b.isString(s) && u.push("domain=" + s), a === !0 && u.push("secure"), document.cookie = u.join("; ");
      },
      read: function(t) {
        const r = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
        return r ? decodeURIComponent(r[3]) : null;
      },
      remove: function(t) {
        this.write(t, "", Date.now() - 864e5);
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
function RO(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function bO(e, n) {
  return n ? e.replace(/\/+$/, "") + "/" + n.replace(/^\/+/, "") : e;
}
function Gd(e, n) {
  return e && !RO(n) ? bO(e, n) : n;
}
const gO = Cn.isStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const n = /(msie|trident)/i.test(navigator.userAgent), t = document.createElement("a");
    let r;
    function o(i) {
      let s = i;
      return n && (t.setAttribute("href", s), s = t.href), t.setAttribute("href", s), {
        href: t.href,
        protocol: t.protocol ? t.protocol.replace(/:$/, "") : "",
        host: t.host,
        search: t.search ? t.search.replace(/^\?/, "") : "",
        hash: t.hash ? t.hash.replace(/^#/, "") : "",
        hostname: t.hostname,
        port: t.port,
        pathname: t.pathname.charAt(0) === "/" ? t.pathname : "/" + t.pathname
      };
    }
    return r = o(window.location.href), function(s) {
      const a = b.isString(s) ? o(s) : s;
      return a.protocol === r.protocol && a.host === r.host;
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
function NO(e) {
  const n = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return n && n[1] || "";
}
function IO(e, n) {
  e = e || 10;
  const t = new Array(e), r = new Array(e);
  let o = 0, i = 0, s;
  return n = n !== void 0 ? n : 1e3, function(u) {
    const _ = Date.now(), c = r[i];
    s || (s = _), t[o] = u, r[o] = _;
    let l = i, m = 0;
    for (; l !== o; )
      m += t[l++], l = l % e;
    if (o = (o + 1) % e, o === i && (i = (i + 1) % e), _ - s < n)
      return;
    const T = c && _ - c;
    return T ? Math.round(m * 1e3 / T) : void 0;
  };
}
function k_(e, n) {
  let t = 0;
  const r = IO(50, 250);
  return (o) => {
    const i = o.loaded, s = o.lengthComputable ? o.total : void 0, a = i - t, u = r(a), _ = i <= s;
    t = i;
    const c = {
      loaded: i,
      total: s,
      progress: s ? i / s : void 0,
      bytes: a,
      rate: u || void 0,
      estimated: u && s && _ ? (s - i) / u : void 0,
      event: o
    };
    c[n ? "download" : "upload"] = !0, e(c);
  };
}
const AO = typeof XMLHttpRequest < "u", SO = AO && function(e) {
  return new Promise(function(t, r) {
    let o = e.data;
    const i = Yn.from(e.headers).normalize(), s = e.responseType;
    let a;
    function u() {
      e.cancelToken && e.cancelToken.unsubscribe(a), e.signal && e.signal.removeEventListener("abort", a);
    }
    b.isFormData(o) && (Cn.isStandardBrowserEnv || Cn.isStandardBrowserWebWorkerEnv ? i.setContentType(!1) : i.setContentType("multipart/form-data;", !1));
    let _ = new XMLHttpRequest();
    if (e.auth) {
      const T = e.auth.username || "", d = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      i.set("Authorization", "Basic " + btoa(T + ":" + d));
    }
    const c = Gd(e.baseURL, e.url);
    _.open(e.method.toUpperCase(), Id(c, e.params, e.paramsSerializer), !0), _.timeout = e.timeout;
    function l() {
      if (!_)
        return;
      const T = Yn.from(
        "getAllResponseHeaders" in _ && _.getAllResponseHeaders()
      ), f = {
        data: !s || s === "text" || s === "json" ? _.responseText : _.response,
        status: _.status,
        statusText: _.statusText,
        headers: T,
        config: e,
        request: _
      };
      EO(function(O) {
        t(O), u();
      }, function(O) {
        r(O), u();
      }, f), _ = null;
    }
    if ("onloadend" in _ ? _.onloadend = l : _.onreadystatechange = function() {
      !_ || _.readyState !== 4 || _.status === 0 && !(_.responseURL && _.responseURL.indexOf("file:") === 0) || setTimeout(l);
    }, _.onabort = function() {
      _ && (r(new re("Request aborted", re.ECONNABORTED, e, _)), _ = null);
    }, _.onerror = function() {
      r(new re("Network Error", re.ERR_NETWORK, e, _)), _ = null;
    }, _.ontimeout = function() {
      let d = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const f = e.transitional || Ad;
      e.timeoutErrorMessage && (d = e.timeoutErrorMessage), r(new re(
        d,
        f.clarifyTimeoutError ? re.ETIMEDOUT : re.ECONNABORTED,
        e,
        _
      )), _ = null;
    }, Cn.isStandardBrowserEnv) {
      const T = (e.withCredentials || gO(c)) && e.xsrfCookieName && OO.read(e.xsrfCookieName);
      T && i.set(e.xsrfHeaderName, T);
    }
    o === void 0 && i.setContentType(null), "setRequestHeader" in _ && b.forEach(i.toJSON(), function(d, f) {
      _.setRequestHeader(f, d);
    }), b.isUndefined(e.withCredentials) || (_.withCredentials = !!e.withCredentials), s && s !== "json" && (_.responseType = e.responseType), typeof e.onDownloadProgress == "function" && _.addEventListener("progress", k_(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && _.upload && _.upload.addEventListener("progress", k_(e.onUploadProgress)), (e.cancelToken || e.signal) && (a = (T) => {
      _ && (r(!T || T.type ? new Go(null, e, _) : T), _.abort(), _ = null);
    }, e.cancelToken && e.cancelToken.subscribe(a), e.signal && (e.signal.aborted ? a() : e.signal.addEventListener("abort", a)));
    const m = NO(c);
    if (m && Cn.protocols.indexOf(m) === -1) {
      r(new re("Unsupported protocol " + m + ":", re.ERR_BAD_REQUEST, e));
      return;
    }
    _.send(o || null);
  });
}, ii = {
  http: qE,
  xhr: SO
};
b.forEach(ii, (e, n) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: n });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: n });
  }
});
const vO = {
  getAdapter: (e) => {
    e = b.isArray(e) ? e : [e];
    const { length: n } = e;
    let t, r;
    for (let o = 0; o < n && (t = e[o], !(r = b.isString(t) ? ii[t.toLowerCase()] : t)); o++)
      ;
    if (!r)
      throw r === !1 ? new re(
        `Adapter ${t} is not supported by the environment`,
        "ERR_NOT_SUPPORT"
      ) : new Error(
        b.hasOwnProp(ii, t) ? `Adapter '${t}' is not available in the build` : `Unknown adapter '${t}'`
      );
    if (!b.isFunction(r))
      throw new TypeError("adapter is not a function");
    return r;
  },
  adapters: ii
};
function Ys(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Go(null, e);
}
function x_(e) {
  return Ys(e), e.headers = Yn.from(e.headers), e.data = Xs.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), vO.getAdapter(e.adapter || lu.adapter)(e).then(function(r) {
    return Ys(e), r.data = Xs.call(
      e,
      e.transformResponse,
      r
    ), r.headers = Yn.from(r.headers), r;
  }, function(r) {
    return vd(r) || (Ys(e), r && r.response && (r.response.data = Xs.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = Yn.from(r.response.headers))), Promise.reject(r);
  });
}
const L_ = (e) => e instanceof Yn ? e.toJSON() : e;
function ar(e, n) {
  n = n || {};
  const t = {};
  function r(_, c, l) {
    return b.isPlainObject(_) && b.isPlainObject(c) ? b.merge.call({ caseless: l }, _, c) : b.isPlainObject(c) ? b.merge({}, c) : b.isArray(c) ? c.slice() : c;
  }
  function o(_, c, l) {
    if (b.isUndefined(c)) {
      if (!b.isUndefined(_))
        return r(void 0, _, l);
    } else
      return r(_, c, l);
  }
  function i(_, c) {
    if (!b.isUndefined(c))
      return r(void 0, c);
  }
  function s(_, c) {
    if (b.isUndefined(c)) {
      if (!b.isUndefined(_))
        return r(void 0, _);
    } else
      return r(void 0, c);
  }
  function a(_, c, l) {
    if (l in n)
      return r(_, c);
    if (l in e)
      return r(void 0, _);
  }
  const u = {
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
    headers: (_, c) => o(L_(_), L_(c), !0)
  };
  return b.forEach(Object.keys(Object.assign({}, e, n)), function(c) {
    const l = u[c] || o, m = l(e[c], n[c], c);
    b.isUndefined(m) && l !== a || (t[c] = m);
  }), t;
}
const Cd = "1.4.0", cu = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, n) => {
  cu[e] = function(r) {
    return typeof r === e || "a" + (n < 1 ? "n " : " ") + e;
  };
});
const B_ = {};
cu.transitional = function(n, t, r) {
  function o(i, s) {
    return "[Axios v" + Cd + "] Transitional option '" + i + "'" + s + (r ? ". " + r : "");
  }
  return (i, s, a) => {
    if (n === !1)
      throw new re(
        o(s, " has been removed" + (t ? " in " + t : "")),
        re.ERR_DEPRECATED
      );
    return t && !B_[s] && (B_[s] = !0, console.warn(
      o(
        s,
        " has been deprecated since v" + t + " and will be removed in the near future"
      )
    )), n ? n(i, s, a) : !0;
  };
};
function GO(e, n, t) {
  if (typeof e != "object")
    throw new re("options must be an object", re.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const i = r[o], s = n[i];
    if (s) {
      const a = e[i], u = a === void 0 || s(a, i, e);
      if (u !== !0)
        throw new re("option " + i + " must be " + u, re.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (t !== !0)
      throw new re("Unknown option " + i, re.ERR_BAD_OPTION);
  }
}
const Ea = {
  assertOptions: GO,
  validators: cu
}, tt = Ea.validators;
class Ui {
  constructor(n) {
    this.defaults = n, this.interceptors = {
      request: new w_(),
      response: new w_()
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
  request(n, t) {
    typeof n == "string" ? (t = t || {}, t.url = n) : t = n || {}, t = ar(this.defaults, t);
    const { transitional: r, paramsSerializer: o, headers: i } = t;
    r !== void 0 && Ea.assertOptions(r, {
      silentJSONParsing: tt.transitional(tt.boolean),
      forcedJSONParsing: tt.transitional(tt.boolean),
      clarifyTimeoutError: tt.transitional(tt.boolean)
    }, !1), o != null && (b.isFunction(o) ? t.paramsSerializer = {
      serialize: o
    } : Ea.assertOptions(o, {
      encode: tt.function,
      serialize: tt.function
    }, !0)), t.method = (t.method || this.defaults.method || "get").toLowerCase();
    let s;
    s = i && b.merge(
      i.common,
      i[t.method]
    ), s && b.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (d) => {
        delete i[d];
      }
    ), t.headers = Yn.concat(s, i);
    const a = [];
    let u = !0;
    this.interceptors.request.forEach(function(f) {
      typeof f.runWhen == "function" && f.runWhen(t) === !1 || (u = u && f.synchronous, a.unshift(f.fulfilled, f.rejected));
    });
    const _ = [];
    this.interceptors.response.forEach(function(f) {
      _.push(f.fulfilled, f.rejected);
    });
    let c, l = 0, m;
    if (!u) {
      const d = [x_.bind(this), void 0];
      for (d.unshift.apply(d, a), d.push.apply(d, _), m = d.length, c = Promise.resolve(t); l < m; )
        c = c.then(d[l++], d[l++]);
      return c;
    }
    m = a.length;
    let T = t;
    for (l = 0; l < m; ) {
      const d = a[l++], f = a[l++];
      try {
        T = d(T);
      } catch (h) {
        f.call(this, h);
        break;
      }
    }
    try {
      c = x_.call(this, T);
    } catch (d) {
      return Promise.reject(d);
    }
    for (l = 0, m = _.length; l < m; )
      c = c.then(_[l++], _[l++]);
    return c;
  }
  getUri(n) {
    n = ar(this.defaults, n);
    const t = Gd(n.baseURL, n.url);
    return Id(t, n.params, n.paramsSerializer);
  }
}
b.forEach(["delete", "get", "head", "options"], function(n) {
  Ui.prototype[n] = function(t, r) {
    return this.request(ar(r || {}, {
      method: n,
      url: t,
      data: (r || {}).data
    }));
  };
});
b.forEach(["post", "put", "patch"], function(n) {
  function t(r) {
    return function(i, s, a) {
      return this.request(ar(a || {}, {
        method: n,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: s
      }));
    };
  }
  Ui.prototype[n] = t(), Ui.prototype[n + "Form"] = t(!0);
});
const si = Ui;
class du {
  constructor(n) {
    if (typeof n != "function")
      throw new TypeError("executor must be a function.");
    let t;
    this.promise = new Promise(function(i) {
      t = i;
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
      const s = new Promise((a) => {
        r.subscribe(a), i = a;
      }).then(o);
      return s.cancel = function() {
        r.unsubscribe(i);
      }, s;
    }, n(function(i, s, a) {
      r.reason || (r.reason = new Go(i, s, a), t(r.reason));
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
    const t = this._listeners.indexOf(n);
    t !== -1 && this._listeners.splice(t, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let n;
    return {
      token: new du(function(o) {
        n = o;
      }),
      cancel: n
    };
  }
}
const CO = du;
function DO(e) {
  return function(t) {
    return e.apply(null, t);
  };
}
function UO(e) {
  return b.isObject(e) && e.isAxiosError === !0;
}
const Oa = {
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
Object.entries(Oa).forEach(([e, n]) => {
  Oa[n] = e;
});
const yO = Oa;
function Dd(e) {
  const n = new si(e), t = dd(si.prototype.request, n);
  return b.extend(t, si.prototype, n, { allOwnKeys: !0 }), b.extend(t, n, null, { allOwnKeys: !0 }), t.create = function(o) {
    return Dd(ar(e, o));
  }, t;
}
const Ue = Dd(lu);
Ue.Axios = si;
Ue.CanceledError = Go;
Ue.CancelToken = CO;
Ue.isCancel = vd;
Ue.VERSION = Cd;
Ue.toFormData = is;
Ue.AxiosError = re;
Ue.Cancel = Ue.CanceledError;
Ue.all = function(n) {
  return Promise.all(n);
};
Ue.spread = DO;
Ue.isAxiosError = UO;
Ue.mergeConfig = ar;
Ue.AxiosHeaders = Yn;
Ue.formToJSON = (e) => Sd(b.isHTMLForm(e) ? new FormData(e) : e);
Ue.HttpStatusCode = yO;
Ue.default = Ue;
const HO = Ue, PO = { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_1f9fc75f-b976-443f-b97c-59c034f84d2d", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "npm/8.19.4 node/v16.20.1 linux x64 workspaces/false ci/github-actions", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_1f9fc75f-b976-443f-b97c-59c034f84d2d", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", npm_config_noproxy: "", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-8.2.1", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "develop", npm_config_userconfig: "/home/runner/.npmrc", npm_config_local_prefix: "/home/runner/work/CodeGear/CodeGear", SYSTEMD_EXEC_PID: "675", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", COLOR: "0", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.6/x64", NVM_DIR: "/home/runner/.nvm", npm_config_metrics_registry: "https://registry.npmjs.org/", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230724.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", JOURNAL_STREAM: "8:16730", GITHUB_WORKFLOW: "CodeGear CI", _: "/opt/hostedtoolcache/node/16.20.1/x64/bin/npm", npm_config_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", GITHUB_RUN_ID: "5681881263", npm_config_cache: "/home/runner/.npm", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "16de9657536b3fd4b57399f8c8d585ff86f81588", GITHUB_BASE_REF: "master", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/pull/14/merge", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", npm_config_node_gyp: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.bin:/home/runner/work/CodeGear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_f7cd14f5-9499-472d-8368-913fa67e32ba", INVOCATION_ID: "2c3d3b74cffc41478173df18ccbd49df", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.11/x64", NODE: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "30", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 3", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "14/merge", GITHUB_REPOSITORY: "Gearonix/CodeGear", npm_lifecycle_script: " nx run-many --targets=build --all", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", STATS_NM: "true", npm_package_version: "0.0.0", npm_lifecycle_event: "build", NODE_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/bin/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/node_modules", GITHUB_REF_PROTECTED: "false", npm_config_strict_peer_dependencies: "", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "16de9657536b3fd4b57399f8c8d585ff86f81588", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/pull/14/merge", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", npm_config_globalconfig: "/opt/hostedtoolcache/node/16.20.1/x64/etc/npmrc", npm_config_init_module: "/home/runner/.npm-init.js", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_1f9fc75f-b976-443f-b97c-59c034f84d2d", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", npm_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/bin/npm-cli.js", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "pull_request", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_1f9fc75f-b976-443f-b97c-59c034f84d2d", npm_config_global_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", npm_command: "run-script", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_1f9fc75f-b976-443f-b97c-59c034f84d2d", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", EDITOR: "vi", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/14619004169386514943", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "14619004169386514943", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.SERVER_URL ?? "http://localhost:6868", wO = {
  CODE_EXECUTOR_API: "execute"
}, MO = HO.create({
  baseURL: PO,
  withCredentials: !0
}), kO = {
  EDITOR_THEME: "EDITOR_THEME",
  EDITOR_CONTENT_DATA: "EDITOR_CONTENT_DATA",
  EDITOR_EXECUTE_MESSAGES: "EDITOR_EXECUTE_MESSAGES",
  EDITOR_FONT_SIZE: "EDITOR_FONT_SIZE",
  EDITOR_TAB_SIZE: "EDITOR_TAB_SIZE",
  EDITOR_CUSTOM_BACKGROUND: "EDITOR_CUSTOM_BACKGROUND",
  EDITOR_CUSTOM_COLOR: "EDITOR_CUSTOM_COLOR",
  EDITOR_HTML_PREVIEW: "EDITOR_HTML_PREVIEW"
}, xO = {
  MAIN: "/",
  EDITOR: "/edit",
  ABOUT: "/about"
}, Ud = () => {
  const [e, n] = Qe([]);
  return {
    on: (t) => {
      Object.entries(t).forEach(([r, o]) => {
        const i = (s) => {
          if (s.altKey && s.key === r.toLowerCase())
            return s.preventDefault(), o?.(), !1;
        };
        n([...e, i]), document.addEventListener("keydown", i);
      });
    },
    clear: () => {
      e.forEach((t) => {
        document.removeEventListener("keydown", t);
      });
    }
  };
}, LO = (e = !1) => {
  const [n, t] = Qe(e);
  return {
    off: () => t(!1),
    on: () => t(!0),
    toggle: () => t(!n),
    val: n
  };
}, BO = (e, n) => {
  const t = Z();
  return (...r) => {
    t.current && clearTimeout(t.current), t.current = setTimeout(() => {
      e(...r);
    }, n);
  };
}, Ra = ({ when: e, children: n }) => e ? n : null, yd = zi({}), jO = async () => Promise.all([
  Promise.resolve().then(() => qS),
  import("./use-gesture-react.esm-7899cdd1.mjs")
]), fu = ({ children: e }) => {
  const n = Z(), t = Z(), r = LO(), o = async () => {
    const [s, a] = await jO();
    n.current = s, t.current = a, r.on();
  };
  Ge(() => {
    o();
  }, []);
  const i = it(
    () => ({
      Spring: n.current,
      Gesture: t.current,
      isLoaded: r.val
    }),
    [r.val]
  );
  return /* @__PURE__ */ V(yd.Provider, { value: i, children: /* @__PURE__ */ V(Ra, { when: r.val, children: e }) });
}, us = () => Xe(yd);
var hu, F, Hd, At, j_, Pd, ba, ai = {}, wd = [], FO = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, _s = Array.isArray;
function at(e, n) {
  for (var t in n)
    e[t] = n[t];
  return e;
}
function Md(e) {
  var n = e.parentNode;
  n && n.removeChild(e);
}
function F_(e, n, t) {
  var r, o, i, s = {};
  for (i in n)
    i == "key" ? r = n[i] : i == "ref" ? o = n[i] : s[i] = n[i];
  if (arguments.length > 2 && (s.children = arguments.length > 3 ? hu.call(arguments, 2) : t), typeof e == "function" && e.defaultProps != null)
    for (i in e.defaultProps)
      s[i] === void 0 && (s[i] = e.defaultProps[i]);
  return ui(e, s, r, o, null);
}
function ui(e, n, t, r, o) {
  var i = { type: e, props: n, key: t, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: o ?? ++Hd };
  return o == null && F.vnode != null && F.vnode(i), i;
}
function Qr(e) {
  return e.children;
}
function Kn(e, n) {
  this.props = e, this.context = n;
}
function yi(e, n) {
  if (n == null)
    return e.__ ? yi(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var t; n < e.__k.length; n++)
    if ((t = e.__k[n]) != null && t.__e != null)
      return t.__e;
  return typeof e.type == "function" ? yi(e) : null;
}
function kd(e) {
  var n, t;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, n = 0; n < e.__k.length; n++)
      if ((t = e.__k[n]) != null && t.__e != null) {
        e.__e = e.__c.base = t.__e;
        break;
      }
    return kd(e);
  }
}
function V_(e) {
  (!e.__d && (e.__d = !0) && At.push(e) && !Hi.__r++ || j_ !== F.debounceRendering) && ((j_ = F.debounceRendering) || Pd)(Hi);
}
function Hi() {
  var e, n, t, r, o, i, s, a, u;
  for (At.sort(ba); e = At.shift(); )
    e.__d && (n = At.length, r = void 0, o = void 0, i = void 0, a = (s = (t = e).__v).__e, (u = t.__P) && (r = [], o = [], (i = at({}, s)).__v = s.__v + 1, jd(u, s, i, t.__n, u.ownerSVGElement !== void 0, s.__h != null ? [a] : null, r, a ?? yi(s), s.__h, o), XO(r, s, o), s.__e != a && kd(s)), At.length > n && At.sort(ba));
  Hi.__r = 0;
}
function xd(e, n, t, r, o, i, s, a, u, _, c) {
  var l, m, T, d, f, h, O, R, g, I, p = 0, H = r && r.__k || wd, M = H.length, K = M, w = n.length;
  for (t.__k = [], l = 0; l < w; l++)
    (d = t.__k[l] = (d = n[l]) == null || typeof d == "boolean" || typeof d == "function" ? null : typeof d == "string" || typeof d == "number" || typeof d == "bigint" ? ui(null, d, null, null, d) : _s(d) ? ui(Qr, { children: d }, null, null, null) : d.__b > 0 ? ui(d.type, d.props, d.key, d.ref ? d.ref : null, d.__v) : d) != null && (d.__ = t, d.__b = t.__b + 1, (R = VO(d, H, O = l + p, K)) === -1 ? T = ai : (T = H[R] || ai, H[R] = void 0, K--), jd(e, d, T, o, i, s, a, u, _, c), f = d.__e, (m = d.ref) && T.ref != m && (T.ref && mu(T.ref, null, d), c.push(m, d.__c || f, d)), f != null && (h == null && (h = f), I = !(g = T === ai || T.__v === null) && R === O, g ? R == -1 && p-- : R !== O && (R === O + 1 ? (p++, I = !0) : R > O ? K > w - O ? (p += R - O, I = !0) : p-- : p = R < O && R == O - 1 ? R - O : 0), O = l + p, I = I || R == l && !g, typeof d.type != "function" || R === O && T.__k !== d.__k ? typeof d.type == "function" || I ? d.__d !== void 0 ? (u = d.__d, d.__d = void 0) : u = f.nextSibling : u = Bd(e, f, u) : u = Ld(d, u, e), typeof t.type == "function" && (t.__d = u)));
  for (t.__e = h, l = M; l--; )
    H[l] != null && (typeof t.type == "function" && H[l].__e != null && H[l].__e == t.__d && (t.__d = H[l].__e.nextSibling), Fd(H[l], H[l]));
}
function Ld(e, n, t) {
  for (var r, o = e.__k, i = 0; o && i < o.length; i++)
    (r = o[i]) && (r.__ = e, n = typeof r.type == "function" ? Ld(r, n, t) : Bd(t, r.__e, n));
  return n;
}
function Pi(e, n) {
  return n = n || [], e == null || typeof e == "boolean" || (_s(e) ? e.some(function(t) {
    Pi(t, n);
  }) : n.push(e)), n;
}
function Bd(e, n, t) {
  return t == null || t.parentNode !== e ? e.insertBefore(n, null) : n == t && n.parentNode != null || e.insertBefore(n, t), n.nextSibling;
}
function VO(e, n, t, r) {
  var o = e.key, i = e.type, s = t - 1, a = t + 1, u = n[t];
  if (u === null || u && o == u.key && i === u.type)
    return t;
  if (r > (u != null ? 1 : 0))
    for (; s >= 0 || a < n.length; ) {
      if (s >= 0) {
        if ((u = n[s]) && o == u.key && i === u.type)
          return s;
        s--;
      }
      if (a < n.length) {
        if ((u = n[a]) && o == u.key && i === u.type)
          return a;
        a++;
      }
    }
  return -1;
}
function WO(e, n, t, r, o) {
  var i;
  for (i in t)
    i === "children" || i === "key" || i in n || wi(e, i, null, t[i], r);
  for (i in n)
    o && typeof n[i] != "function" || i === "children" || i === "key" || i === "value" || i === "checked" || t[i] === n[i] || wi(e, i, n[i], t[i], r);
}
function W_(e, n, t) {
  n[0] === "-" ? e.setProperty(n, t ?? "") : e[n] = t == null ? "" : typeof t != "number" || FO.test(n) ? t : t + "px";
}
function wi(e, n, t, r, o) {
  var i;
  e:
    if (n === "style")
      if (typeof t == "string")
        e.style.cssText = t;
      else {
        if (typeof r == "string" && (e.style.cssText = r = ""), r)
          for (n in r)
            t && n in t || W_(e.style, n, "");
        if (t)
          for (n in t)
            r && t[n] === r[n] || W_(e.style, n, t[n]);
      }
    else if (n[0] === "o" && n[1] === "n")
      i = n !== (n = n.replace(/Capture$/, "")), n = n.toLowerCase() in e ? n.toLowerCase().slice(2) : n.slice(2), e.l || (e.l = {}), e.l[n + i] = t, t ? r || e.addEventListener(n, i ? Y_ : X_, i) : e.removeEventListener(n, i ? Y_ : X_, i);
    else if (n !== "dangerouslySetInnerHTML") {
      if (o)
        n = n.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (n !== "width" && n !== "height" && n !== "href" && n !== "list" && n !== "form" && n !== "tabIndex" && n !== "download" && n !== "rowSpan" && n !== "colSpan" && n in e)
        try {
          e[n] = t ?? "";
          break e;
        } catch {
        }
      typeof t == "function" || (t == null || t === !1 && n[4] !== "-" ? e.removeAttribute(n) : e.setAttribute(n, t));
    }
}
function X_(e) {
  return this.l[e.type + !1](F.event ? F.event(e) : e);
}
function Y_(e) {
  return this.l[e.type + !0](F.event ? F.event(e) : e);
}
function jd(e, n, t, r, o, i, s, a, u, _) {
  var c, l, m, T, d, f, h, O, R, g, I, p, H, M, K, w = n.type;
  if (n.constructor !== void 0)
    return null;
  t.__h != null && (u = t.__h, a = n.__e = t.__e, n.__h = null, i = [a]), (c = F.__b) && c(n);
  try {
    e:
      if (typeof w == "function") {
        if (O = n.props, R = (c = w.contextType) && r[c.__c], g = c ? R ? R.props.value : c.__ : r, t.__c ? h = (l = n.__c = t.__c).__ = l.__E : ("prototype" in w && w.prototype.render ? n.__c = l = new w(O, g) : (n.__c = l = new Kn(O, g), l.constructor = w, l.render = KO), R && R.sub(l), l.props = O, l.state || (l.state = {}), l.context = g, l.__n = r, m = l.__d = !0, l.__h = [], l._sb = []), l.__s == null && (l.__s = l.state), w.getDerivedStateFromProps != null && (l.__s == l.state && (l.__s = at({}, l.__s)), at(l.__s, w.getDerivedStateFromProps(O, l.__s))), T = l.props, d = l.state, l.__v = n, m)
          w.getDerivedStateFromProps == null && l.componentWillMount != null && l.componentWillMount(), l.componentDidMount != null && l.__h.push(l.componentDidMount);
        else {
          if (w.getDerivedStateFromProps == null && O !== T && l.componentWillReceiveProps != null && l.componentWillReceiveProps(O, g), !l.__e && (l.shouldComponentUpdate != null && l.shouldComponentUpdate(O, l.__s, g) === !1 || n.__v === t.__v)) {
            for (n.__v !== t.__v && (l.props = O, l.state = l.__s, l.__d = !1), n.__e = t.__e, n.__k = t.__k, n.__k.forEach(function(B) {
              B && (B.__ = n);
            }), I = 0; I < l._sb.length; I++)
              l.__h.push(l._sb[I]);
            l._sb = [], l.__h.length && s.push(l);
            break e;
          }
          l.componentWillUpdate != null && l.componentWillUpdate(O, l.__s, g), l.componentDidUpdate != null && l.__h.push(function() {
            l.componentDidUpdate(T, d, f);
          });
        }
        if (l.context = g, l.props = O, l.__P = e, l.__e = !1, p = F.__r, H = 0, "prototype" in w && w.prototype.render) {
          for (l.state = l.__s, l.__d = !1, p && p(n), c = l.render(l.props, l.state, l.context), M = 0; M < l._sb.length; M++)
            l.__h.push(l._sb[M]);
          l._sb = [];
        } else
          do
            l.__d = !1, p && p(n), c = l.render(l.props, l.state, l.context), l.state = l.__s;
          while (l.__d && ++H < 25);
        l.state = l.__s, l.getChildContext != null && (r = at(at({}, r), l.getChildContext())), m || l.getSnapshotBeforeUpdate == null || (f = l.getSnapshotBeforeUpdate(T, d)), xd(e, _s(K = c != null && c.type === Qr && c.key == null ? c.props.children : c) ? K : [K], n, t, r, o, i, s, a, u, _), l.base = n.__e, n.__h = null, l.__h.length && s.push(l), h && (l.__E = l.__ = null);
      } else
        i == null && n.__v === t.__v ? (n.__k = t.__k, n.__e = t.__e) : n.__e = YO(t.__e, n, t, r, o, i, s, u, _);
    (c = F.diffed) && c(n);
  } catch (B) {
    n.__v = null, (u || i != null) && (n.__e = a, n.__h = !!u, i[i.indexOf(a)] = null), F.__e(B, n, t);
  }
}
function XO(e, n, t) {
  for (var r = 0; r < t.length; r++)
    mu(t[r], t[++r], t[++r]);
  F.__c && F.__c(n, e), e.some(function(o) {
    try {
      e = o.__h, o.__h = [], e.some(function(i) {
        i.call(o);
      });
    } catch (i) {
      F.__e(i, o.__v);
    }
  });
}
function YO(e, n, t, r, o, i, s, a, u) {
  var _, c, l, m = t.props, T = n.props, d = n.type, f = 0;
  if (d === "svg" && (o = !0), i != null) {
    for (; f < i.length; f++)
      if ((_ = i[f]) && "setAttribute" in _ == !!d && (d ? _.localName === d : _.nodeType === 3)) {
        e = _, i[f] = null;
        break;
      }
  }
  if (e == null) {
    if (d === null)
      return document.createTextNode(T);
    e = o ? document.createElementNS("http://www.w3.org/2000/svg", d) : document.createElement(d, T.is && T), i = null, a = !1;
  }
  if (d === null)
    m === T || a && e.data === T || (e.data = T);
  else {
    if (i = i && hu.call(e.childNodes), c = (m = t.props || ai).dangerouslySetInnerHTML, l = T.dangerouslySetInnerHTML, !a) {
      if (i != null)
        for (m = {}, f = 0; f < e.attributes.length; f++)
          m[e.attributes[f].name] = e.attributes[f].value;
      (l || c) && (l && (c && l.__html == c.__html || l.__html === e.innerHTML) || (e.innerHTML = l && l.__html || ""));
    }
    if (WO(e, T, m, o, a), l)
      n.__k = [];
    else if (xd(e, _s(f = n.props.children) ? f : [f], n, t, r, o && d !== "foreignObject", i, s, i ? i[0] : t.__k && yi(t, 0), a, u), i != null)
      for (f = i.length; f--; )
        i[f] != null && Md(i[f]);
    a || ("value" in T && (f = T.value) !== void 0 && (f !== e.value || d === "progress" && !f || d === "option" && f !== m.value) && wi(e, "value", f, m.value, !1), "checked" in T && (f = T.checked) !== void 0 && f !== e.checked && wi(e, "checked", f, m.checked, !1));
  }
  return e;
}
function mu(e, n, t) {
  try {
    typeof e == "function" ? e(n) : e.current = n;
  } catch (r) {
    F.__e(r, t);
  }
}
function Fd(e, n, t) {
  var r, o;
  if (F.unmount && F.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || mu(r, null, n)), (r = e.__c) != null) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (i) {
        F.__e(i, n);
      }
    r.base = r.__P = null, e.__c = void 0;
  }
  if (r = e.__k)
    for (o = 0; o < r.length; o++)
      r[o] && Fd(r[o], n, t || typeof e.type != "function");
  t || e.__e == null || Md(e.__e), e.__ = e.__e = e.__d = void 0;
}
function KO(e, n, t) {
  return this.constructor(e, t);
}
hu = wd.slice, F = { __e: function(e, n, t, r) {
  for (var o, i, s; n = n.__; )
    if ((o = n.__c) && !o.__)
      try {
        if ((i = o.constructor) && i.getDerivedStateFromError != null && (o.setState(i.getDerivedStateFromError(e)), s = o.__d), o.componentDidCatch != null && (o.componentDidCatch(e, r || {}), s = o.__d), s)
          return o.__E = o;
      } catch (a) {
        e = a;
      }
  throw e;
} }, Hd = 0, Kn.prototype.setState = function(e, n) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = at({}, this.state), typeof e == "function" && (e = e(at({}, t), this.props)), e && at(t, e), e != null && this.__v && (n && this._sb.push(n), V_(this));
}, Kn.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), V_(this));
}, Kn.prototype.render = Qr, At = [], Pd = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, ba = function(e, n) {
  return e.__v.__b - n.__v.__b;
}, Hi.__r = 0;
var Zr, Ne, Ks, K_, ga = 0, Vd = [], _i = [], $_ = F.__b, z_ = F.__r, J_ = F.diffed, q_ = F.__c, Q_ = F.unmount;
function pu(e, n) {
  F.__h && F.__h(Ne, e, ga || n), ga = 0;
  var t = Ne.__H || (Ne.__H = { __: [], __h: [] });
  return e >= t.__.length && t.__.push({ __V: _i }), t.__[e];
}
function $O(e) {
  return ga = 1, zO(Wd, e);
}
function zO(e, n, t) {
  var r = pu(Zr++, 2);
  if (r.t = e, !r.__c && (r.__ = [t ? t(n) : Wd(void 0, n), function(a) {
    var u = r.__N ? r.__N[0] : r.__[0], _ = r.t(u, a);
    u !== _ && (r.__N = [_, r.__[1]], r.__c.setState({}));
  }], r.__c = Ne, !Ne.u)) {
    var o = function(a, u, _) {
      if (!r.__c.__H)
        return !0;
      var c = r.__c.__H.__.filter(function(m) {
        return m.__c;
      });
      if (c.every(function(m) {
        return !m.__N;
      }))
        return !i || i.call(this, a, u, _);
      var l = !1;
      return c.forEach(function(m) {
        if (m.__N) {
          var T = m.__[0];
          m.__ = m.__N, m.__N = void 0, T !== m.__[0] && (l = !0);
        }
      }), !(!l && r.__c.props === a) && (!i || i.call(this, a, u, _));
    };
    Ne.u = !0;
    var i = Ne.shouldComponentUpdate, s = Ne.componentWillUpdate;
    Ne.componentWillUpdate = function(a, u, _) {
      if (this.__e) {
        var c = i;
        i = void 0, o(a, u, _), i = c;
      }
      s && s.call(this, a, u, _);
    }, Ne.shouldComponentUpdate = o;
  }
  return r.__N || r.__;
}
function N0(e, n) {
  var t = pu(Zr++, 3);
  !F.__s && QO(t.__H, n) && (t.__ = e, t.i = n, Ne.__H.__h.push(t));
}
function I0(e) {
  var n = pu(Zr++, 10), t = $O();
  return n.__ = e, Ne.componentDidCatch || (Ne.componentDidCatch = function(r, o) {
    n.__ && n.__(r, o), t[1](r);
  }), [t[0], function() {
    t[1](void 0);
  }];
}
function JO() {
  for (var e; e = Vd.shift(); )
    if (e.__P && e.__H)
      try {
        e.__H.__h.forEach(li), e.__H.__h.forEach(Na), e.__H.__h = [];
      } catch (n) {
        e.__H.__h = [], F.__e(n, e.__v);
      }
}
F.__b = function(e) {
  Ne = null, $_ && $_(e);
}, F.__r = function(e) {
  z_ && z_(e), Zr = 0;
  var n = (Ne = e.__c).__H;
  n && (Ks === Ne ? (n.__h = [], Ne.__h = [], n.__.forEach(function(t) {
    t.__N && (t.__ = t.__N), t.__V = _i, t.__N = t.i = void 0;
  })) : (n.__h.forEach(li), n.__h.forEach(Na), n.__h = [], Zr = 0)), Ks = Ne;
}, F.diffed = function(e) {
  J_ && J_(e);
  var n = e.__c;
  n && n.__H && (n.__H.__h.length && (Vd.push(n) !== 1 && K_ === F.requestAnimationFrame || ((K_ = F.requestAnimationFrame) || qO)(JO)), n.__H.__.forEach(function(t) {
    t.i && (t.__H = t.i), t.__V !== _i && (t.__ = t.__V), t.i = void 0, t.__V = _i;
  })), Ks = Ne = null;
}, F.__c = function(e, n) {
  n.some(function(t) {
    try {
      t.__h.forEach(li), t.__h = t.__h.filter(function(r) {
        return !r.__ || Na(r);
      });
    } catch (r) {
      n.some(function(o) {
        o.__h && (o.__h = []);
      }), n = [], F.__e(r, t.__v);
    }
  }), q_ && q_(e, n);
}, F.unmount = function(e) {
  Q_ && Q_(e);
  var n, t = e.__c;
  t && t.__H && (t.__H.__.forEach(function(r) {
    try {
      li(r);
    } catch (o) {
      n = o;
    }
  }), t.__H = void 0, n && F.__e(n, t.__v));
};
var Z_ = typeof requestAnimationFrame == "function";
function qO(e) {
  var n, t = function() {
    clearTimeout(r), Z_ && cancelAnimationFrame(n), setTimeout(e);
  }, r = setTimeout(t, 100);
  Z_ && (n = requestAnimationFrame(t));
}
function li(e) {
  var n = Ne, t = e.__c;
  typeof t == "function" && (e.__c = void 0, t()), Ne = n;
}
function Na(e) {
  var n = Ne;
  e.__c = e.__(), Ne = n;
}
function QO(e, n) {
  return !e || e.length !== n.length || n.some(function(t, r) {
    return t !== e[r];
  });
}
function Wd(e, n) {
  return typeof n == "function" ? n(e) : n;
}
const Xd = zi(
  {}
), A0 = ({ children: e }) => {
  const [n, t] = Qh.useMessage(), r = ({ type: o, message: i }) => {
    n.open({
      type: o ?? "info",
      content: i,
      duration: 5
    });
  };
  return /* @__PURE__ */ nn(nc, { children: [
    t,
    /* @__PURE__ */ V(Xd.Provider, { value: { open: r }, children: e })
  ] });
}, ZO = () => Xe(Xd), eR = (e) => typeof e == "object" && e !== null, Yd = (e) => typeof e == "string", nR = (e) => typeof e == "function";
class Kd {
  constructor(n) {
    this.isDisabled = !1, this.isDisabled = n ?? this.isDisabled;
  }
  get(n, t) {
    if (this.isDisabled)
      return t;
    const r = localStorage.getItem(n);
    return r ? tR(r) ? JSON.parse(r) : r : t;
  }
  set(n, t) {
    if (!(this.isDisabled || !(n in kO))) {
      if (Yd(t))
        return localStorage.setItem(n, t);
      localStorage.setItem(n, JSON.stringify(t));
    }
  }
  clear(n) {
    if (n)
      return localStorage.removeItem(n);
    localStorage.clear();
  }
}
const tR = (e) => {
  try {
    JSON.parse(e);
  } catch {
    return !1;
  }
  return !0;
};
var $d = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, el = Ae.createContext && Ae.createContext($d), ht = globalThis && globalThis.__assign || function() {
  return ht = Object.assign || function(e) {
    for (var n, t = 1, r = arguments.length; t < r; t++) {
      n = arguments[t];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
    }
    return e;
  }, ht.apply(this, arguments);
}, rR = globalThis && globalThis.__rest || function(e, n) {
  var t = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (t[r[o]] = e[r[o]]);
  return t;
};
function zd(e) {
  return e && e.map(function(n, t) {
    return Ae.createElement(n.tag, ht({
      key: t
    }, n.attr), zd(n.child));
  });
}
function Tu(e) {
  return function(n) {
    return Ae.createElement(oR, ht({
      attr: ht({}, e.attr)
    }, n), zd(e.child));
  };
}
function oR(e) {
  var n = function(t) {
    var r = e.attr, o = e.size, i = e.title, s = rR(e, ["attr", "size", "title"]), a = o || t.size || "1em", u;
    return t.className && (u = t.className), e.className && (u = (u ? u + " " : "") + e.className), Ae.createElement("svg", ht({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, t.attr, r, s, {
      className: u,
      style: ht(ht({
        color: e.color || t.color
      }, t.style), e.style),
      height: a,
      width: a,
      xmlns: "http://www.w3.org/2000/svg"
    }), i && Ae.createElement("title", null, i), e.children);
  };
  return el !== void 0 ? Ae.createElement(el.Consumer, null, function(t) {
    return n(t);
  }) : n($d);
}
function iR(e) {
  return Tu({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" } }] })(e);
}
function S0(e) {
  return Tu({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M145 96l66 746.6L511.8 928l299.6-85.4L878.7 96H145zm610.9 700.6l-244.1 69.6-245.2-69.6-56.7-641.2h603.8l-57.8 641.2zM281 249l1.7 24.3 22.7 253.5h206.5v-.1h112.9l-11.4 118.5L511 672.9v.2h-.8l-102.4-27.7-6.5-73.2h-91l11.3 144.7 188.6 52h1.7v-.4l187.7-51.7 1.7-16.3 21.2-242.2 3.2-24.3H511v.2H389.9l-8.2-94.2h352.1l1.7-19.5 4.8-47.2L742 249H511z" } }] })(e);
}
function sR(e) {
  return Tu({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", stroke: "#000", strokeWidth: "2", d: "M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M5,5 L19,19" } }] })(e);
}
const nl = ({ children: e, override: n, ...t }) => /* @__PURE__ */ V(Zh, { theme: {
  token: { colorPrimary: n }
}, children: /* @__PURE__ */ V(yr, { ...t, style: { minWidth: "85px" }, children: e }) });
function aR(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Jd = { exports: {} }, de = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tl;
function uR() {
  if (tl)
    return de;
  tl = 1;
  var e = Symbol.for("react.element"), n = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), a = Symbol.for("react.server_context"), u = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), T = Symbol.for("react.offscreen"), d;
  d = Symbol.for("react.module.reference");
  function f(h) {
    if (typeof h == "object" && h !== null) {
      var O = h.$$typeof;
      switch (O) {
        case e:
          switch (h = h.type, h) {
            case t:
            case o:
            case r:
            case _:
            case c:
              return h;
            default:
              switch (h = h && h.$$typeof, h) {
                case a:
                case s:
                case u:
                case m:
                case l:
                case i:
                  return h;
                default:
                  return O;
              }
          }
        case n:
          return O;
      }
    }
  }
  return de.ContextConsumer = s, de.ContextProvider = i, de.Element = e, de.ForwardRef = u, de.Fragment = t, de.Lazy = m, de.Memo = l, de.Portal = n, de.Profiler = o, de.StrictMode = r, de.Suspense = _, de.SuspenseList = c, de.isAsyncMode = function() {
    return !1;
  }, de.isConcurrentMode = function() {
    return !1;
  }, de.isContextConsumer = function(h) {
    return f(h) === s;
  }, de.isContextProvider = function(h) {
    return f(h) === i;
  }, de.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === e;
  }, de.isForwardRef = function(h) {
    return f(h) === u;
  }, de.isFragment = function(h) {
    return f(h) === t;
  }, de.isLazy = function(h) {
    return f(h) === m;
  }, de.isMemo = function(h) {
    return f(h) === l;
  }, de.isPortal = function(h) {
    return f(h) === n;
  }, de.isProfiler = function(h) {
    return f(h) === o;
  }, de.isStrictMode = function(h) {
    return f(h) === r;
  }, de.isSuspense = function(h) {
    return f(h) === _;
  }, de.isSuspenseList = function(h) {
    return f(h) === c;
  }, de.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === t || h === o || h === r || h === _ || h === c || h === T || typeof h == "object" && h !== null && (h.$$typeof === m || h.$$typeof === l || h.$$typeof === i || h.$$typeof === s || h.$$typeof === u || h.$$typeof === d || h.getModuleId !== void 0);
  }, de.typeOf = f, de;
}
Jd.exports = uR();
var qd = Jd.exports;
function _R(e) {
  function n(C, U, P, j, E) {
    for (var J = 0, S = 0, le = 0, ne = 0, he, $, Pe = 0, Ye = 0, oe, Le = oe = he = 0, ce = 0, we = 0, gr = 0, Me = 0, xo = P.length, Nr = xo - 1, mn, Y = "", Se = "", Ps = "", ws = "", nt; ce < xo; ) {
      if ($ = P.charCodeAt(ce), ce === Nr && S + ne + le + J !== 0 && (S !== 0 && ($ = S === 47 ? 10 : 47), ne = le = J = 0, xo++, Nr++), S + ne + le + J === 0) {
        if (ce === Nr && (0 < we && (Y = Y.replace(m, "")), 0 < Y.trim().length)) {
          switch ($) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              Y += P.charAt(ce);
          }
          $ = 59;
        }
        switch ($) {
          case 123:
            for (Y = Y.trim(), he = Y.charCodeAt(0), oe = 1, Me = ++ce; ce < xo; ) {
              switch ($ = P.charCodeAt(ce)) {
                case 123:
                  oe++;
                  break;
                case 125:
                  oe--;
                  break;
                case 47:
                  switch ($ = P.charCodeAt(ce + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (Le = ce + 1; Le < Nr; ++Le)
                          switch (P.charCodeAt(Le)) {
                            case 47:
                              if ($ === 42 && P.charCodeAt(Le - 1) === 42 && ce + 2 !== Le) {
                                ce = Le + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if ($ === 47) {
                                ce = Le + 1;
                                break e;
                              }
                          }
                        ce = Le;
                      }
                  }
                  break;
                case 91:
                  $++;
                case 40:
                  $++;
                case 34:
                case 39:
                  for (; ce++ < Nr && P.charCodeAt(ce) !== $; )
                    ;
              }
              if (oe === 0)
                break;
              ce++;
            }
            switch (oe = P.substring(Me, ce), he === 0 && (he = (Y = Y.replace(l, "").trim()).charCodeAt(0)), he) {
              case 64:
                switch (0 < we && (Y = Y.replace(m, "")), $ = Y.charCodeAt(1), $) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    we = U;
                    break;
                  default:
                    we = q;
                }
                if (oe = n(U, we, oe, $, E + 1), Me = oe.length, 0 < ee && (we = t(q, Y, gr), nt = a(3, oe, we, U, be, me, Me, $, E, j), Y = we.join(""), nt !== void 0 && (Me = (oe = nt.trim()).length) === 0 && ($ = 0, oe = "")), 0 < Me)
                  switch ($) {
                    case 115:
                      Y = Y.replace(H, s);
                    case 100:
                    case 109:
                    case 45:
                      oe = Y + "{" + oe + "}";
                      break;
                    case 107:
                      Y = Y.replace(R, "$1 $2"), oe = Y + "{" + oe + "}", oe = G === 1 || G === 2 && i("@" + oe, 3) ? "@-webkit-" + oe + "@" + oe : "@" + oe;
                      break;
                    default:
                      oe = Y + oe, j === 112 && (oe = (Se += oe, ""));
                  }
                else
                  oe = "";
                break;
              default:
                oe = n(U, t(U, Y, gr), oe, j, E + 1);
            }
            Ps += oe, oe = gr = we = Le = he = 0, Y = "", $ = P.charCodeAt(++ce);
            break;
          case 125:
          case 59:
            if (Y = (0 < we ? Y.replace(m, "") : Y).trim(), 1 < (Me = Y.length))
              switch (Le === 0 && (he = Y.charCodeAt(0), he === 45 || 96 < he && 123 > he) && (Me = (Y = Y.replace(" ", ":")).length), 0 < ee && (nt = a(1, Y, U, C, be, me, Se.length, j, E, j)) !== void 0 && (Me = (Y = nt.trim()).length) === 0 && (Y = "\0\0"), he = Y.charCodeAt(0), $ = Y.charCodeAt(1), he) {
                case 0:
                  break;
                case 64:
                  if ($ === 105 || $ === 99) {
                    ws += Y + P.charAt(ce);
                    break;
                  }
                default:
                  Y.charCodeAt(Me - 1) !== 58 && (Se += o(Y, he, $, Y.charCodeAt(2)));
              }
            gr = we = Le = he = 0, Y = "", $ = P.charCodeAt(++ce);
        }
      }
      switch ($) {
        case 13:
        case 10:
          S === 47 ? S = 0 : 1 + he === 0 && j !== 107 && 0 < Y.length && (we = 1, Y += "\0"), 0 < ee * He && a(0, Y, U, C, be, me, Se.length, j, E, j), me = 1, be++;
          break;
        case 59:
        case 125:
          if (S + ne + le + J === 0) {
            me++;
            break;
          }
        default:
          switch (me++, mn = P.charAt(ce), $) {
            case 9:
            case 32:
              if (ne + J + S === 0)
                switch (Pe) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    mn = "";
                    break;
                  default:
                    $ !== 32 && (mn = " ");
                }
              break;
            case 0:
              mn = "\\0";
              break;
            case 12:
              mn = "\\f";
              break;
            case 11:
              mn = "\\v";
              break;
            case 38:
              ne + S + J === 0 && (we = gr = 1, mn = "\f" + mn);
              break;
            case 108:
              if (ne + S + J + k === 0 && 0 < Le)
                switch (ce - Le) {
                  case 2:
                    Pe === 112 && P.charCodeAt(ce - 3) === 58 && (k = Pe);
                  case 8:
                    Ye === 111 && (k = Ye);
                }
              break;
            case 58:
              ne + S + J === 0 && (Le = ce);
              break;
            case 44:
              S + le + ne + J === 0 && (we = 1, mn += "\r");
              break;
            case 34:
            case 39:
              S === 0 && (ne = ne === $ ? 0 : ne === 0 ? $ : ne);
              break;
            case 91:
              ne + S + le === 0 && J++;
              break;
            case 93:
              ne + S + le === 0 && J--;
              break;
            case 41:
              ne + S + J === 0 && le--;
              break;
            case 40:
              if (ne + S + J === 0) {
                if (he === 0)
                  switch (2 * Pe + 3 * Ye) {
                    case 533:
                      break;
                    default:
                      he = 1;
                  }
                le++;
              }
              break;
            case 64:
              S + le + ne + J + Le + oe === 0 && (oe = 1);
              break;
            case 42:
            case 47:
              if (!(0 < ne + J + le))
                switch (S) {
                  case 0:
                    switch (2 * $ + 3 * P.charCodeAt(ce + 1)) {
                      case 235:
                        S = 47;
                        break;
                      case 220:
                        Me = ce, S = 42;
                    }
                    break;
                  case 42:
                    $ === 47 && Pe === 42 && Me + 2 !== ce && (P.charCodeAt(Me + 2) === 33 && (Se += P.substring(Me, ce + 1)), mn = "", S = 0);
                }
          }
          S === 0 && (Y += mn);
      }
      Ye = Pe, Pe = $, ce++;
    }
    if (Me = Se.length, 0 < Me) {
      if (we = U, 0 < ee && (nt = a(2, Se, we, C, be, me, Me, j, E, j), nt !== void 0 && (Se = nt).length === 0))
        return ws + Se + Ps;
      if (Se = we.join(",") + "{" + Se + "}", G * k !== 0) {
        switch (G !== 2 || i(Se, 2) || (k = 0), k) {
          case 111:
            Se = Se.replace(I, ":-moz-$1") + Se;
            break;
          case 112:
            Se = Se.replace(g, "::-webkit-input-$1") + Se.replace(g, "::-moz-$1") + Se.replace(g, ":-ms-input-$1") + Se;
        }
        k = 0;
      }
    }
    return ws + Se + Ps;
  }
  function t(C, U, P) {
    var j = U.trim().split(h);
    U = j;
    var E = j.length, J = C.length;
    switch (J) {
      case 0:
      case 1:
        var S = 0;
        for (C = J === 0 ? "" : C[0] + " "; S < E; ++S)
          U[S] = r(C, U[S], P).trim();
        break;
      default:
        var le = S = 0;
        for (U = []; S < E; ++S)
          for (var ne = 0; ne < J; ++ne)
            U[le++] = r(C[ne] + " ", j[S], P).trim();
    }
    return U;
  }
  function r(C, U, P) {
    var j = U.charCodeAt(0);
    switch (33 > j && (j = (U = U.trim()).charCodeAt(0)), j) {
      case 38:
        return U.replace(O, "$1" + C.trim());
      case 58:
        return C.trim() + U.replace(O, "$1" + C.trim());
      default:
        if (0 < 1 * P && 0 < U.indexOf("\f"))
          return U.replace(O, (C.charCodeAt(0) === 58 ? "" : "$1") + C.trim());
    }
    return C + U;
  }
  function o(C, U, P, j) {
    var E = C + ";", J = 2 * U + 3 * P + 4 * j;
    if (J === 944) {
      C = E.indexOf(":", 9) + 1;
      var S = E.substring(C, E.length - 1).trim();
      return S = E.substring(0, C).trim() + S + ";", G === 1 || G === 2 && i(S, 1) ? "-webkit-" + S + S : S;
    }
    if (G === 0 || G === 2 && !i(E, 1))
      return E;
    switch (J) {
      case 1015:
        return E.charCodeAt(10) === 97 ? "-webkit-" + E + E : E;
      case 951:
        return E.charCodeAt(3) === 116 ? "-webkit-" + E + E : E;
      case 963:
        return E.charCodeAt(5) === 110 ? "-webkit-" + E + E : E;
      case 1009:
        if (E.charCodeAt(4) !== 100)
          break;
      case 969:
      case 942:
        return "-webkit-" + E + E;
      case 978:
        return "-webkit-" + E + "-moz-" + E + E;
      case 1019:
      case 983:
        return "-webkit-" + E + "-moz-" + E + "-ms-" + E + E;
      case 883:
        if (E.charCodeAt(8) === 45)
          return "-webkit-" + E + E;
        if (0 < E.indexOf("image-set(", 11))
          return E.replace(Te, "$1-webkit-$2") + E;
        break;
      case 932:
        if (E.charCodeAt(4) === 45)
          switch (E.charCodeAt(5)) {
            case 103:
              return "-webkit-box-" + E.replace("-grow", "") + "-webkit-" + E + "-ms-" + E.replace("grow", "positive") + E;
            case 115:
              return "-webkit-" + E + "-ms-" + E.replace("shrink", "negative") + E;
            case 98:
              return "-webkit-" + E + "-ms-" + E.replace("basis", "preferred-size") + E;
          }
        return "-webkit-" + E + "-ms-" + E + E;
      case 964:
        return "-webkit-" + E + "-ms-flex-" + E + E;
      case 1023:
        if (E.charCodeAt(8) !== 99)
          break;
        return S = E.substring(E.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + S + "-webkit-" + E + "-ms-flex-pack" + S + E;
      case 1005:
        return d.test(E) ? E.replace(T, ":-webkit-") + E.replace(T, ":-moz-") + E : E;
      case 1e3:
        switch (S = E.substring(13).trim(), U = S.indexOf("-") + 1, S.charCodeAt(0) + S.charCodeAt(U)) {
          case 226:
            S = E.replace(p, "tb");
            break;
          case 232:
            S = E.replace(p, "tb-rl");
            break;
          case 220:
            S = E.replace(p, "lr");
            break;
          default:
            return E;
        }
        return "-webkit-" + E + "-ms-" + S + E;
      case 1017:
        if (E.indexOf("sticky", 9) === -1)
          break;
      case 975:
        switch (U = (E = C).length - 10, S = (E.charCodeAt(U) === 33 ? E.substring(0, U) : E).substring(C.indexOf(":", 7) + 1).trim(), J = S.charCodeAt(0) + (S.charCodeAt(7) | 0)) {
          case 203:
            if (111 > S.charCodeAt(8))
              break;
          case 115:
            E = E.replace(S, "-webkit-" + S) + ";" + E;
            break;
          case 207:
          case 102:
            E = E.replace(S, "-webkit-" + (102 < J ? "inline-" : "") + "box") + ";" + E.replace(S, "-webkit-" + S) + ";" + E.replace(S, "-ms-" + S + "box") + ";" + E;
        }
        return E + ";";
      case 938:
        if (E.charCodeAt(5) === 45)
          switch (E.charCodeAt(6)) {
            case 105:
              return S = E.replace("-items", ""), "-webkit-" + E + "-webkit-box-" + S + "-ms-flex-" + S + E;
            case 115:
              return "-webkit-" + E + "-ms-flex-item-" + E.replace(K, "") + E;
            default:
              return "-webkit-" + E + "-ms-flex-line-pack" + E.replace("align-content", "").replace(K, "") + E;
          }
        break;
      case 973:
      case 989:
        if (E.charCodeAt(3) !== 45 || E.charCodeAt(4) === 122)
          break;
      case 931:
      case 953:
        if (B.test(C) === !0)
          return (S = C.substring(C.indexOf(":") + 1)).charCodeAt(0) === 115 ? o(C.replace("stretch", "fill-available"), U, P, j).replace(":fill-available", ":stretch") : E.replace(S, "-webkit-" + S) + E.replace(S, "-moz-" + S.replace("fill-", "")) + E;
        break;
      case 962:
        if (E = "-webkit-" + E + (E.charCodeAt(5) === 102 ? "-ms-" + E : "") + E, P + j === 211 && E.charCodeAt(13) === 105 && 0 < E.indexOf("transform", 10))
          return E.substring(0, E.indexOf(";", 27) + 1).replace(f, "$1-webkit-$2") + E;
    }
    return E;
  }
  function i(C, U) {
    var P = C.indexOf(U === 1 ? ":" : "{"), j = C.substring(0, U !== 3 ? P : 10);
    return P = C.substring(P + 1, C.length - 1), Ie(U !== 2 ? j : j.replace(w, "$1"), P, U);
  }
  function s(C, U) {
    var P = o(U, U.charCodeAt(0), U.charCodeAt(1), U.charCodeAt(2));
    return P !== U + ";" ? P.replace(M, " or ($1)").substring(4) : "(" + U + ")";
  }
  function a(C, U, P, j, E, J, S, le, ne, he) {
    for (var $ = 0, Pe = U, Ye; $ < ee; ++$)
      switch (Ye = _e[$].call(c, C, Pe, P, j, E, J, S, le, ne, he)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          Pe = Ye;
      }
    if (Pe !== U)
      return Pe;
  }
  function u(C) {
    switch (C) {
      case void 0:
      case null:
        ee = _e.length = 0;
        break;
      default:
        if (typeof C == "function")
          _e[ee++] = C;
        else if (typeof C == "object")
          for (var U = 0, P = C.length; U < P; ++U)
            u(C[U]);
        else
          He = !!C | 0;
    }
    return u;
  }
  function _(C) {
    return C = C.prefix, C !== void 0 && (Ie = null, C ? typeof C != "function" ? G = 1 : (G = 2, Ie = C) : G = 0), _;
  }
  function c(C, U) {
    var P = C;
    if (33 > P.charCodeAt(0) && (P = P.trim()), ge = P, P = [ge], 0 < ee) {
      var j = a(-1, U, P, P, be, me, 0, 0, 0, 0);
      j !== void 0 && typeof j == "string" && (U = j);
    }
    var E = n(q, P, U, 0, 0);
    return 0 < ee && (j = a(-2, E, P, P, be, me, E.length, 0, 0, 0), j !== void 0 && (E = j)), ge = "", k = 0, me = be = 1, E;
  }
  var l = /^\0+/g, m = /[\0\r\f]/g, T = /: */g, d = /zoo|gra/, f = /([,: ])(transform)/g, h = /,\r+?/g, O = /([\t\r\n ])*\f?&/g, R = /@(k\w+)\s*(\S*)\s*/, g = /::(place)/g, I = /:(read-only)/g, p = /[svh]\w+-[tblr]{2}/, H = /\(\s*(.*)\s*\)/g, M = /([\s\S]*?);/g, K = /-self|flex-/g, w = /[^]*?(:[rp][el]a[\w-]+)[^]*/, B = /stretch|:\s*\w+\-(?:conte|avail)/, Te = /([^-])(image-set\()/, me = 1, be = 1, k = 0, G = 1, q = [], _e = [], ee = 0, Ie = null, He = 0, ge = "";
  return c.use = u, c.set = _, e !== void 0 && _(e), c;
}
var lR = {
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
function cR(e) {
  var n = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return n[t] === void 0 && (n[t] = e(t)), n[t];
  };
}
var dR = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, rl = /* @__PURE__ */ cR(
  function(e) {
    return dR.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Qd = { exports: {} }, fe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ol;
function fR() {
  if (ol)
    return fe;
  ol = 1;
  var e = typeof Symbol == "function" && Symbol.for, n = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, _ = e ? Symbol.for("react.concurrent_mode") : 60111, c = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, T = e ? Symbol.for("react.memo") : 60115, d = e ? Symbol.for("react.lazy") : 60116, f = e ? Symbol.for("react.block") : 60121, h = e ? Symbol.for("react.fundamental") : 60117, O = e ? Symbol.for("react.responder") : 60118, R = e ? Symbol.for("react.scope") : 60119;
  function g(p) {
    if (typeof p == "object" && p !== null) {
      var H = p.$$typeof;
      switch (H) {
        case n:
          switch (p = p.type, p) {
            case u:
            case _:
            case r:
            case i:
            case o:
            case l:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case a:
                case c:
                case d:
                case T:
                case s:
                  return p;
                default:
                  return H;
              }
          }
        case t:
          return H;
      }
    }
  }
  function I(p) {
    return g(p) === _;
  }
  return fe.AsyncMode = u, fe.ConcurrentMode = _, fe.ContextConsumer = a, fe.ContextProvider = s, fe.Element = n, fe.ForwardRef = c, fe.Fragment = r, fe.Lazy = d, fe.Memo = T, fe.Portal = t, fe.Profiler = i, fe.StrictMode = o, fe.Suspense = l, fe.isAsyncMode = function(p) {
    return I(p) || g(p) === u;
  }, fe.isConcurrentMode = I, fe.isContextConsumer = function(p) {
    return g(p) === a;
  }, fe.isContextProvider = function(p) {
    return g(p) === s;
  }, fe.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === n;
  }, fe.isForwardRef = function(p) {
    return g(p) === c;
  }, fe.isFragment = function(p) {
    return g(p) === r;
  }, fe.isLazy = function(p) {
    return g(p) === d;
  }, fe.isMemo = function(p) {
    return g(p) === T;
  }, fe.isPortal = function(p) {
    return g(p) === t;
  }, fe.isProfiler = function(p) {
    return g(p) === i;
  }, fe.isStrictMode = function(p) {
    return g(p) === o;
  }, fe.isSuspense = function(p) {
    return g(p) === l;
  }, fe.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === r || p === _ || p === i || p === o || p === l || p === m || typeof p == "object" && p !== null && (p.$$typeof === d || p.$$typeof === T || p.$$typeof === s || p.$$typeof === a || p.$$typeof === c || p.$$typeof === h || p.$$typeof === O || p.$$typeof === R || p.$$typeof === f);
  }, fe.typeOf = g, fe;
}
Qd.exports = fR();
var hR = Qd.exports, Eu = hR, mR = {
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
}, pR = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, TR = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Zd = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Ou = {};
Ou[Eu.ForwardRef] = TR;
Ou[Eu.Memo] = Zd;
function il(e) {
  return Eu.isMemo(e) ? Zd : Ou[e.$$typeof] || mR;
}
var ER = Object.defineProperty, OR = Object.getOwnPropertyNames, sl = Object.getOwnPropertySymbols, RR = Object.getOwnPropertyDescriptor, bR = Object.getPrototypeOf, al = Object.prototype;
function ef(e, n, t) {
  if (typeof n != "string") {
    if (al) {
      var r = bR(n);
      r && r !== al && ef(e, r, t);
    }
    var o = OR(n);
    sl && (o = o.concat(sl(n)));
    for (var i = il(e), s = il(n), a = 0; a < o.length; ++a) {
      var u = o[a];
      if (!pR[u] && !(t && t[u]) && !(s && s[u]) && !(i && i[u])) {
        var _ = RR(n, u);
        try {
          ER(e, u, _);
        } catch {
        }
      }
    }
  }
  return e;
}
var gR = ef;
const NR = /* @__PURE__ */ aR(gR);
function Fn() {
  return (Fn = Object.assign || function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = arguments[n];
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    }
    return e;
  }).apply(this, arguments);
}
var ul = function(e, n) {
  for (var t = [e[0]], r = 0, o = n.length; r < o; r += 1)
    t.push(n[r], e[r + 1]);
  return t;
}, Ia = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !qd.typeOf(e);
}, Mi = Object.freeze([]), mt = Object.freeze({});
function eo(e) {
  return typeof e == "function";
}
function _l(e) {
  return e.displayName || e.name || "Component";
}
function Ru(e) {
  return e && typeof e.styledComponentId == "string";
}
var ur = typeof process < "u" && ({ GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_1f9fc75f-b976-443f-b97c-59c034f84d2d", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "npm/8.19.4 node/v16.20.1 linux x64 workspaces/false ci/github-actions", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_1f9fc75f-b976-443f-b97c-59c034f84d2d", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", npm_config_noproxy: "", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-8.2.1", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "develop", npm_config_userconfig: "/home/runner/.npmrc", npm_config_local_prefix: "/home/runner/work/CodeGear/CodeGear", SYSTEMD_EXEC_PID: "675", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", COLOR: "0", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.6/x64", NVM_DIR: "/home/runner/.nvm", npm_config_metrics_registry: "https://registry.npmjs.org/", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230724.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", JOURNAL_STREAM: "8:16730", GITHUB_WORKFLOW: "CodeGear CI", _: "/opt/hostedtoolcache/node/16.20.1/x64/bin/npm", npm_config_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", GITHUB_RUN_ID: "5681881263", npm_config_cache: "/home/runner/.npm", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "16de9657536b3fd4b57399f8c8d585ff86f81588", GITHUB_BASE_REF: "master", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/pull/14/merge", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", npm_config_node_gyp: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.bin:/home/runner/work/CodeGear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_f7cd14f5-9499-472d-8368-913fa67e32ba", INVOCATION_ID: "2c3d3b74cffc41478173df18ccbd49df", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.11/x64", NODE: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "30", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 3", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "14/merge", GITHUB_REPOSITORY: "Gearonix/CodeGear", npm_lifecycle_script: " nx run-many --targets=build --all", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", STATS_NM: "true", npm_package_version: "0.0.0", npm_lifecycle_event: "build", NODE_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/bin/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/node_modules", GITHUB_REF_PROTECTED: "false", npm_config_strict_peer_dependencies: "", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "16de9657536b3fd4b57399f8c8d585ff86f81588", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/pull/14/merge", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", npm_config_globalconfig: "/opt/hostedtoolcache/node/16.20.1/x64/etc/npmrc", npm_config_init_module: "/home/runner/.npm-init.js", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_1f9fc75f-b976-443f-b97c-59c034f84d2d", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", npm_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/bin/npm-cli.js", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "pull_request", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_1f9fc75f-b976-443f-b97c-59c034f84d2d", npm_config_global_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", npm_command: "run-script", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_1f9fc75f-b976-443f-b97c-59c034f84d2d", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", EDITOR: "vi", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/14619004169386514943", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "14619004169386514943", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.REACT_APP_SC_ATTR || { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_1f9fc75f-b976-443f-b97c-59c034f84d2d", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "npm/8.19.4 node/v16.20.1 linux x64 workspaces/false ci/github-actions", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_1f9fc75f-b976-443f-b97c-59c034f84d2d", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", npm_config_noproxy: "", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-8.2.1", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "develop", npm_config_userconfig: "/home/runner/.npmrc", npm_config_local_prefix: "/home/runner/work/CodeGear/CodeGear", SYSTEMD_EXEC_PID: "675", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", COLOR: "0", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.6/x64", NVM_DIR: "/home/runner/.nvm", npm_config_metrics_registry: "https://registry.npmjs.org/", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230724.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", JOURNAL_STREAM: "8:16730", GITHUB_WORKFLOW: "CodeGear CI", _: "/opt/hostedtoolcache/node/16.20.1/x64/bin/npm", npm_config_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", GITHUB_RUN_ID: "5681881263", npm_config_cache: "/home/runner/.npm", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "16de9657536b3fd4b57399f8c8d585ff86f81588", GITHUB_BASE_REF: "master", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/pull/14/merge", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", npm_config_node_gyp: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.bin:/home/runner/work/CodeGear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_f7cd14f5-9499-472d-8368-913fa67e32ba", INVOCATION_ID: "2c3d3b74cffc41478173df18ccbd49df", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.11/x64", NODE: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "30", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 3", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "14/merge", GITHUB_REPOSITORY: "Gearonix/CodeGear", npm_lifecycle_script: " nx run-many --targets=build --all", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", STATS_NM: "true", npm_package_version: "0.0.0", npm_lifecycle_event: "build", NODE_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/bin/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/node_modules", GITHUB_REF_PROTECTED: "false", npm_config_strict_peer_dependencies: "", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "16de9657536b3fd4b57399f8c8d585ff86f81588", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/pull/14/merge", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", npm_config_globalconfig: "/opt/hostedtoolcache/node/16.20.1/x64/etc/npmrc", npm_config_init_module: "/home/runner/.npm-init.js", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_1f9fc75f-b976-443f-b97c-59c034f84d2d", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", npm_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/bin/npm-cli.js", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "pull_request", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_1f9fc75f-b976-443f-b97c-59c034f84d2d", npm_config_global_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", npm_command: "run-script", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_1f9fc75f-b976-443f-b97c-59c034f84d2d", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", EDITOR: "vi", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/14619004169386514943", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "14619004169386514943", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.SC_ATTR) || "data-styled", bu = typeof window < "u" && "HTMLElement" in window, IR = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_1f9fc75f-b976-443f-b97c-59c034f84d2d", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "npm/8.19.4 node/v16.20.1 linux x64 workspaces/false ci/github-actions", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_1f9fc75f-b976-443f-b97c-59c034f84d2d", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", npm_config_noproxy: "", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-8.2.1", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "develop", npm_config_userconfig: "/home/runner/.npmrc", npm_config_local_prefix: "/home/runner/work/CodeGear/CodeGear", SYSTEMD_EXEC_PID: "675", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", COLOR: "0", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.6/x64", NVM_DIR: "/home/runner/.nvm", npm_config_metrics_registry: "https://registry.npmjs.org/", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230724.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", JOURNAL_STREAM: "8:16730", GITHUB_WORKFLOW: "CodeGear CI", _: "/opt/hostedtoolcache/node/16.20.1/x64/bin/npm", npm_config_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", GITHUB_RUN_ID: "5681881263", npm_config_cache: "/home/runner/.npm", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "16de9657536b3fd4b57399f8c8d585ff86f81588", GITHUB_BASE_REF: "master", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/pull/14/merge", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", npm_config_node_gyp: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.bin:/home/runner/work/CodeGear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_f7cd14f5-9499-472d-8368-913fa67e32ba", INVOCATION_ID: "2c3d3b74cffc41478173df18ccbd49df", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.11/x64", NODE: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "30", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 3", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "14/merge", GITHUB_REPOSITORY: "Gearonix/CodeGear", npm_lifecycle_script: " nx run-many --targets=build --all", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", STATS_NM: "true", npm_package_version: "0.0.0", npm_lifecycle_event: "build", NODE_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/bin/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/node_modules", GITHUB_REF_PROTECTED: "false", npm_config_strict_peer_dependencies: "", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "16de9657536b3fd4b57399f8c8d585ff86f81588", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/pull/14/merge", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", npm_config_globalconfig: "/opt/hostedtoolcache/node/16.20.1/x64/etc/npmrc", npm_config_init_module: "/home/runner/.npm-init.js", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_1f9fc75f-b976-443f-b97c-59c034f84d2d", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", npm_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/bin/npm-cli.js", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "pull_request", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_1f9fc75f-b976-443f-b97c-59c034f84d2d", npm_config_global_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", npm_command: "run-script", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_1f9fc75f-b976-443f-b97c-59c034f84d2d", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", EDITOR: "vi", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/14619004169386514943", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "14619004169386514943", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_1f9fc75f-b976-443f-b97c-59c034f84d2d", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "npm/8.19.4 node/v16.20.1 linux x64 workspaces/false ci/github-actions", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_1f9fc75f-b976-443f-b97c-59c034f84d2d", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", npm_config_noproxy: "", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-8.2.1", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "develop", npm_config_userconfig: "/home/runner/.npmrc", npm_config_local_prefix: "/home/runner/work/CodeGear/CodeGear", SYSTEMD_EXEC_PID: "675", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", COLOR: "0", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.6/x64", NVM_DIR: "/home/runner/.nvm", npm_config_metrics_registry: "https://registry.npmjs.org/", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230724.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", JOURNAL_STREAM: "8:16730", GITHUB_WORKFLOW: "CodeGear CI", _: "/opt/hostedtoolcache/node/16.20.1/x64/bin/npm", npm_config_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", GITHUB_RUN_ID: "5681881263", npm_config_cache: "/home/runner/.npm", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "16de9657536b3fd4b57399f8c8d585ff86f81588", GITHUB_BASE_REF: "master", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/pull/14/merge", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", npm_config_node_gyp: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.bin:/home/runner/work/CodeGear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_f7cd14f5-9499-472d-8368-913fa67e32ba", INVOCATION_ID: "2c3d3b74cffc41478173df18ccbd49df", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.11/x64", NODE: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "30", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 3", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "14/merge", GITHUB_REPOSITORY: "Gearonix/CodeGear", npm_lifecycle_script: " nx run-many --targets=build --all", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", STATS_NM: "true", npm_package_version: "0.0.0", npm_lifecycle_event: "build", NODE_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/bin/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/node_modules", GITHUB_REF_PROTECTED: "false", npm_config_strict_peer_dependencies: "", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "16de9657536b3fd4b57399f8c8d585ff86f81588", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/pull/14/merge", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", npm_config_globalconfig: "/opt/hostedtoolcache/node/16.20.1/x64/etc/npmrc", npm_config_init_module: "/home/runner/.npm-init.js", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_1f9fc75f-b976-443f-b97c-59c034f84d2d", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", npm_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/bin/npm-cli.js", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "pull_request", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_1f9fc75f-b976-443f-b97c-59c034f84d2d", npm_config_global_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", npm_command: "run-script", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_1f9fc75f-b976-443f-b97c-59c034f84d2d", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", EDITOR: "vi", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/14619004169386514943", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "14619004169386514943", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.REACT_APP_SC_DISABLE_SPEEDY !== "" ? { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_1f9fc75f-b976-443f-b97c-59c034f84d2d", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "npm/8.19.4 node/v16.20.1 linux x64 workspaces/false ci/github-actions", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_1f9fc75f-b976-443f-b97c-59c034f84d2d", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", npm_config_noproxy: "", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-8.2.1", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "develop", npm_config_userconfig: "/home/runner/.npmrc", npm_config_local_prefix: "/home/runner/work/CodeGear/CodeGear", SYSTEMD_EXEC_PID: "675", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", COLOR: "0", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.6/x64", NVM_DIR: "/home/runner/.nvm", npm_config_metrics_registry: "https://registry.npmjs.org/", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230724.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", JOURNAL_STREAM: "8:16730", GITHUB_WORKFLOW: "CodeGear CI", _: "/opt/hostedtoolcache/node/16.20.1/x64/bin/npm", npm_config_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", GITHUB_RUN_ID: "5681881263", npm_config_cache: "/home/runner/.npm", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "16de9657536b3fd4b57399f8c8d585ff86f81588", GITHUB_BASE_REF: "master", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/pull/14/merge", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", npm_config_node_gyp: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.bin:/home/runner/work/CodeGear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_f7cd14f5-9499-472d-8368-913fa67e32ba", INVOCATION_ID: "2c3d3b74cffc41478173df18ccbd49df", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.11/x64", NODE: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "30", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 3", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "14/merge", GITHUB_REPOSITORY: "Gearonix/CodeGear", npm_lifecycle_script: " nx run-many --targets=build --all", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", STATS_NM: "true", npm_package_version: "0.0.0", npm_lifecycle_event: "build", NODE_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/bin/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/node_modules", GITHUB_REF_PROTECTED: "false", npm_config_strict_peer_dependencies: "", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "16de9657536b3fd4b57399f8c8d585ff86f81588", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/pull/14/merge", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", npm_config_globalconfig: "/opt/hostedtoolcache/node/16.20.1/x64/etc/npmrc", npm_config_init_module: "/home/runner/.npm-init.js", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_1f9fc75f-b976-443f-b97c-59c034f84d2d", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", npm_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/bin/npm-cli.js", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "pull_request", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_1f9fc75f-b976-443f-b97c-59c034f84d2d", npm_config_global_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", npm_command: "run-script", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_1f9fc75f-b976-443f-b97c-59c034f84d2d", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", EDITOR: "vi", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/14619004169386514943", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "14619004169386514943", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.REACT_APP_SC_DISABLE_SPEEDY !== "false" && { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_1f9fc75f-b976-443f-b97c-59c034f84d2d", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "npm/8.19.4 node/v16.20.1 linux x64 workspaces/false ci/github-actions", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_1f9fc75f-b976-443f-b97c-59c034f84d2d", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", npm_config_noproxy: "", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-8.2.1", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "develop", npm_config_userconfig: "/home/runner/.npmrc", npm_config_local_prefix: "/home/runner/work/CodeGear/CodeGear", SYSTEMD_EXEC_PID: "675", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", COLOR: "0", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.6/x64", NVM_DIR: "/home/runner/.nvm", npm_config_metrics_registry: "https://registry.npmjs.org/", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230724.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", JOURNAL_STREAM: "8:16730", GITHUB_WORKFLOW: "CodeGear CI", _: "/opt/hostedtoolcache/node/16.20.1/x64/bin/npm", npm_config_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", GITHUB_RUN_ID: "5681881263", npm_config_cache: "/home/runner/.npm", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "16de9657536b3fd4b57399f8c8d585ff86f81588", GITHUB_BASE_REF: "master", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/pull/14/merge", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", npm_config_node_gyp: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.bin:/home/runner/work/CodeGear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_f7cd14f5-9499-472d-8368-913fa67e32ba", INVOCATION_ID: "2c3d3b74cffc41478173df18ccbd49df", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.11/x64", NODE: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "30", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 3", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "14/merge", GITHUB_REPOSITORY: "Gearonix/CodeGear", npm_lifecycle_script: " nx run-many --targets=build --all", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", STATS_NM: "true", npm_package_version: "0.0.0", npm_lifecycle_event: "build", NODE_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/bin/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/node_modules", GITHUB_REF_PROTECTED: "false", npm_config_strict_peer_dependencies: "", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "16de9657536b3fd4b57399f8c8d585ff86f81588", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/pull/14/merge", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", npm_config_globalconfig: "/opt/hostedtoolcache/node/16.20.1/x64/etc/npmrc", npm_config_init_module: "/home/runner/.npm-init.js", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_1f9fc75f-b976-443f-b97c-59c034f84d2d", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", npm_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/bin/npm-cli.js", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "pull_request", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_1f9fc75f-b976-443f-b97c-59c034f84d2d", npm_config_global_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", npm_command: "run-script", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_1f9fc75f-b976-443f-b97c-59c034f84d2d", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", EDITOR: "vi", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/14619004169386514943", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "14619004169386514943", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_1f9fc75f-b976-443f-b97c-59c034f84d2d", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "npm/8.19.4 node/v16.20.1 linux x64 workspaces/false ci/github-actions", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_1f9fc75f-b976-443f-b97c-59c034f84d2d", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", npm_config_noproxy: "", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-8.2.1", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "develop", npm_config_userconfig: "/home/runner/.npmrc", npm_config_local_prefix: "/home/runner/work/CodeGear/CodeGear", SYSTEMD_EXEC_PID: "675", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", COLOR: "0", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.6/x64", NVM_DIR: "/home/runner/.nvm", npm_config_metrics_registry: "https://registry.npmjs.org/", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230724.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", JOURNAL_STREAM: "8:16730", GITHUB_WORKFLOW: "CodeGear CI", _: "/opt/hostedtoolcache/node/16.20.1/x64/bin/npm", npm_config_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", GITHUB_RUN_ID: "5681881263", npm_config_cache: "/home/runner/.npm", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "16de9657536b3fd4b57399f8c8d585ff86f81588", GITHUB_BASE_REF: "master", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/pull/14/merge", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", npm_config_node_gyp: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.bin:/home/runner/work/CodeGear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_f7cd14f5-9499-472d-8368-913fa67e32ba", INVOCATION_ID: "2c3d3b74cffc41478173df18ccbd49df", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.11/x64", NODE: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "30", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 3", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "14/merge", GITHUB_REPOSITORY: "Gearonix/CodeGear", npm_lifecycle_script: " nx run-many --targets=build --all", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", STATS_NM: "true", npm_package_version: "0.0.0", npm_lifecycle_event: "build", NODE_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/bin/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/node_modules", GITHUB_REF_PROTECTED: "false", npm_config_strict_peer_dependencies: "", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "16de9657536b3fd4b57399f8c8d585ff86f81588", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/pull/14/merge", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", npm_config_globalconfig: "/opt/hostedtoolcache/node/16.20.1/x64/etc/npmrc", npm_config_init_module: "/home/runner/.npm-init.js", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_1f9fc75f-b976-443f-b97c-59c034f84d2d", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", npm_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/bin/npm-cli.js", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "pull_request", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_1f9fc75f-b976-443f-b97c-59c034f84d2d", npm_config_global_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", npm_command: "run-script", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_1f9fc75f-b976-443f-b97c-59c034f84d2d", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", EDITOR: "vi", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/14619004169386514943", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "14619004169386514943", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.SC_DISABLE_SPEEDY !== void 0 && { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_1f9fc75f-b976-443f-b97c-59c034f84d2d", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "npm/8.19.4 node/v16.20.1 linux x64 workspaces/false ci/github-actions", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_1f9fc75f-b976-443f-b97c-59c034f84d2d", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", npm_config_noproxy: "", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-8.2.1", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "develop", npm_config_userconfig: "/home/runner/.npmrc", npm_config_local_prefix: "/home/runner/work/CodeGear/CodeGear", SYSTEMD_EXEC_PID: "675", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", COLOR: "0", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.6/x64", NVM_DIR: "/home/runner/.nvm", npm_config_metrics_registry: "https://registry.npmjs.org/", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230724.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", JOURNAL_STREAM: "8:16730", GITHUB_WORKFLOW: "CodeGear CI", _: "/opt/hostedtoolcache/node/16.20.1/x64/bin/npm", npm_config_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", GITHUB_RUN_ID: "5681881263", npm_config_cache: "/home/runner/.npm", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "16de9657536b3fd4b57399f8c8d585ff86f81588", GITHUB_BASE_REF: "master", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/pull/14/merge", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", npm_config_node_gyp: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.bin:/home/runner/work/CodeGear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_f7cd14f5-9499-472d-8368-913fa67e32ba", INVOCATION_ID: "2c3d3b74cffc41478173df18ccbd49df", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.11/x64", NODE: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "30", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 3", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "14/merge", GITHUB_REPOSITORY: "Gearonix/CodeGear", npm_lifecycle_script: " nx run-many --targets=build --all", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", STATS_NM: "true", npm_package_version: "0.0.0", npm_lifecycle_event: "build", NODE_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/bin/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/node_modules", GITHUB_REF_PROTECTED: "false", npm_config_strict_peer_dependencies: "", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "16de9657536b3fd4b57399f8c8d585ff86f81588", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/pull/14/merge", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", npm_config_globalconfig: "/opt/hostedtoolcache/node/16.20.1/x64/etc/npmrc", npm_config_init_module: "/home/runner/.npm-init.js", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_1f9fc75f-b976-443f-b97c-59c034f84d2d", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", npm_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/bin/npm-cli.js", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "pull_request", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_1f9fc75f-b976-443f-b97c-59c034f84d2d", npm_config_global_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", npm_command: "run-script", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_1f9fc75f-b976-443f-b97c-59c034f84d2d", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", EDITOR: "vi", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/14619004169386514943", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "14619004169386514943", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.SC_DISABLE_SPEEDY !== "" && { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_1f9fc75f-b976-443f-b97c-59c034f84d2d", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "npm/8.19.4 node/v16.20.1 linux x64 workspaces/false ci/github-actions", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_1f9fc75f-b976-443f-b97c-59c034f84d2d", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", npm_config_noproxy: "", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-8.2.1", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "develop", npm_config_userconfig: "/home/runner/.npmrc", npm_config_local_prefix: "/home/runner/work/CodeGear/CodeGear", SYSTEMD_EXEC_PID: "675", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", COLOR: "0", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.6/x64", NVM_DIR: "/home/runner/.nvm", npm_config_metrics_registry: "https://registry.npmjs.org/", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230724.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", JOURNAL_STREAM: "8:16730", GITHUB_WORKFLOW: "CodeGear CI", _: "/opt/hostedtoolcache/node/16.20.1/x64/bin/npm", npm_config_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", GITHUB_RUN_ID: "5681881263", npm_config_cache: "/home/runner/.npm", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "16de9657536b3fd4b57399f8c8d585ff86f81588", GITHUB_BASE_REF: "master", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/pull/14/merge", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", npm_config_node_gyp: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.bin:/home/runner/work/CodeGear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_f7cd14f5-9499-472d-8368-913fa67e32ba", INVOCATION_ID: "2c3d3b74cffc41478173df18ccbd49df", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.11/x64", NODE: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "30", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 3", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "14/merge", GITHUB_REPOSITORY: "Gearonix/CodeGear", npm_lifecycle_script: " nx run-many --targets=build --all", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", STATS_NM: "true", npm_package_version: "0.0.0", npm_lifecycle_event: "build", NODE_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/bin/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/node_modules", GITHUB_REF_PROTECTED: "false", npm_config_strict_peer_dependencies: "", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "16de9657536b3fd4b57399f8c8d585ff86f81588", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/pull/14/merge", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", npm_config_globalconfig: "/opt/hostedtoolcache/node/16.20.1/x64/etc/npmrc", npm_config_init_module: "/home/runner/.npm-init.js", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_1f9fc75f-b976-443f-b97c-59c034f84d2d", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", npm_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/bin/npm-cli.js", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "pull_request", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_1f9fc75f-b976-443f-b97c-59c034f84d2d", npm_config_global_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", npm_command: "run-script", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_1f9fc75f-b976-443f-b97c-59c034f84d2d", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", EDITOR: "vi", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/14619004169386514943", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "14619004169386514943", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.SC_DISABLE_SPEEDY !== "false" && { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_1f9fc75f-b976-443f-b97c-59c034f84d2d", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "npm/8.19.4 node/v16.20.1 linux x64 workspaces/false ci/github-actions", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_1f9fc75f-b976-443f-b97c-59c034f84d2d", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", npm_config_noproxy: "", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-8.2.1", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "develop", npm_config_userconfig: "/home/runner/.npmrc", npm_config_local_prefix: "/home/runner/work/CodeGear/CodeGear", SYSTEMD_EXEC_PID: "675", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", COLOR: "0", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.6/x64", NVM_DIR: "/home/runner/.nvm", npm_config_metrics_registry: "https://registry.npmjs.org/", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230724.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", JOURNAL_STREAM: "8:16730", GITHUB_WORKFLOW: "CodeGear CI", _: "/opt/hostedtoolcache/node/16.20.1/x64/bin/npm", npm_config_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", GITHUB_RUN_ID: "5681881263", npm_config_cache: "/home/runner/.npm", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "16de9657536b3fd4b57399f8c8d585ff86f81588", GITHUB_BASE_REF: "master", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/pull/14/merge", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", npm_config_node_gyp: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.bin:/home/runner/work/CodeGear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_f7cd14f5-9499-472d-8368-913fa67e32ba", INVOCATION_ID: "2c3d3b74cffc41478173df18ccbd49df", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.11/x64", NODE: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "30", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 3", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "14/merge", GITHUB_REPOSITORY: "Gearonix/CodeGear", npm_lifecycle_script: " nx run-many --targets=build --all", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", STATS_NM: "true", npm_package_version: "0.0.0", npm_lifecycle_event: "build", NODE_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/bin/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/node_modules", GITHUB_REF_PROTECTED: "false", npm_config_strict_peer_dependencies: "", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "16de9657536b3fd4b57399f8c8d585ff86f81588", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/pull/14/merge", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", npm_config_globalconfig: "/opt/hostedtoolcache/node/16.20.1/x64/etc/npmrc", npm_config_init_module: "/home/runner/.npm-init.js", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_1f9fc75f-b976-443f-b97c-59c034f84d2d", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", npm_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/bin/npm-cli.js", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "pull_request", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_1f9fc75f-b976-443f-b97c-59c034f84d2d", npm_config_global_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", npm_command: "run-script", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_1f9fc75f-b976-443f-b97c-59c034f84d2d", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", EDITOR: "vi", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/14619004169386514943", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "14619004169386514943", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.SC_DISABLE_SPEEDY);
function Co(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    t[r - 1] = arguments[r];
  throw new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (t.length > 0 ? " Args: " + t.join(", ") : ""));
}
var AR = function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  var n = e.prototype;
  return n.indexOfGroup = function(t) {
    for (var r = 0, o = 0; o < t; o++)
      r += this.groupSizes[o];
    return r;
  }, n.insertRules = function(t, r) {
    if (t >= this.groupSizes.length) {
      for (var o = this.groupSizes, i = o.length, s = i; t >= s; )
        (s <<= 1) < 0 && Co(16, "" + t);
      this.groupSizes = new Uint32Array(s), this.groupSizes.set(o), this.length = s;
      for (var a = i; a < s; a++)
        this.groupSizes[a] = 0;
    }
    for (var u = this.indexOfGroup(t + 1), _ = 0, c = r.length; _ < c; _++)
      this.tag.insertRule(u, r[_]) && (this.groupSizes[t]++, u++);
  }, n.clearGroup = function(t) {
    if (t < this.length) {
      var r = this.groupSizes[t], o = this.indexOfGroup(t), i = o + r;
      this.groupSizes[t] = 0;
      for (var s = o; s < i; s++)
        this.tag.deleteRule(o);
    }
  }, n.getGroup = function(t) {
    var r = "";
    if (t >= this.length || this.groupSizes[t] === 0)
      return r;
    for (var o = this.groupSizes[t], i = this.indexOfGroup(t), s = i + o, a = i; a < s; a++)
      r += this.tag.getRule(a) + `/*!sc*/
`;
    return r;
  }, e;
}(), ci = /* @__PURE__ */ new Map(), ki = /* @__PURE__ */ new Map(), xr = 1, Xo = function(e) {
  if (ci.has(e))
    return ci.get(e);
  for (; ki.has(xr); )
    xr++;
  var n = xr++;
  return ci.set(e, n), ki.set(n, e), n;
}, SR = function(e) {
  return ki.get(e);
}, vR = function(e, n) {
  n >= xr && (xr = n + 1), ci.set(e, n), ki.set(n, e);
}, GR = "style[" + ur + '][data-styled-version="5.3.6"]', CR = new RegExp("^" + ur + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), DR = function(e, n, t) {
  for (var r, o = t.split(","), i = 0, s = o.length; i < s; i++)
    (r = o[i]) && e.registerName(n, r);
}, UR = function(e, n) {
  for (var t = (n.textContent || "").split(`/*!sc*/
`), r = [], o = 0, i = t.length; o < i; o++) {
    var s = t[o].trim();
    if (s) {
      var a = s.match(CR);
      if (a) {
        var u = 0 | parseInt(a[1], 10), _ = a[2];
        u !== 0 && (vR(_, u), DR(e, _, a[3]), e.getTag().insertRules(u, r)), r.length = 0;
      } else
        r.push(s);
    }
  }
}, yR = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, nf = function(e) {
  var n = document.head, t = e || n, r = document.createElement("style"), o = function(a) {
    for (var u = a.childNodes, _ = u.length; _ >= 0; _--) {
      var c = u[_];
      if (c && c.nodeType === 1 && c.hasAttribute(ur))
        return c;
    }
  }(t), i = o !== void 0 ? o.nextSibling : null;
  r.setAttribute(ur, "active"), r.setAttribute("data-styled-version", "5.3.6");
  var s = yR();
  return s && r.setAttribute("nonce", s), t.insertBefore(r, i), r;
}, HR = function() {
  function e(t) {
    var r = this.element = nf(t);
    r.appendChild(document.createTextNode("")), this.sheet = function(o) {
      if (o.sheet)
        return o.sheet;
      for (var i = document.styleSheets, s = 0, a = i.length; s < a; s++) {
        var u = i[s];
        if (u.ownerNode === o)
          return u;
      }
      Co(17);
    }(r), this.length = 0;
  }
  var n = e.prototype;
  return n.insertRule = function(t, r) {
    try {
      return this.sheet.insertRule(r, t), this.length++, !0;
    } catch {
      return !1;
    }
  }, n.deleteRule = function(t) {
    this.sheet.deleteRule(t), this.length--;
  }, n.getRule = function(t) {
    var r = this.sheet.cssRules[t];
    return r !== void 0 && typeof r.cssText == "string" ? r.cssText : "";
  }, e;
}(), PR = function() {
  function e(t) {
    var r = this.element = nf(t);
    this.nodes = r.childNodes, this.length = 0;
  }
  var n = e.prototype;
  return n.insertRule = function(t, r) {
    if (t <= this.length && t >= 0) {
      var o = document.createTextNode(r), i = this.nodes[t];
      return this.element.insertBefore(o, i || null), this.length++, !0;
    }
    return !1;
  }, n.deleteRule = function(t) {
    this.element.removeChild(this.nodes[t]), this.length--;
  }, n.getRule = function(t) {
    return t < this.length ? this.nodes[t].textContent : "";
  }, e;
}(), wR = function() {
  function e(t) {
    this.rules = [], this.length = 0;
  }
  var n = e.prototype;
  return n.insertRule = function(t, r) {
    return t <= this.length && (this.rules.splice(t, 0, r), this.length++, !0);
  }, n.deleteRule = function(t) {
    this.rules.splice(t, 1), this.length--;
  }, n.getRule = function(t) {
    return t < this.length ? this.rules[t] : "";
  }, e;
}(), ll = bu, MR = { isServer: !bu, useCSSOMInjection: !IR }, tf = function() {
  function e(t, r, o) {
    t === void 0 && (t = mt), r === void 0 && (r = {}), this.options = Fn({}, MR, {}, t), this.gs = r, this.names = new Map(o), this.server = !!t.isServer, !this.server && bu && ll && (ll = !1, function(i) {
      for (var s = document.querySelectorAll(GR), a = 0, u = s.length; a < u; a++) {
        var _ = s[a];
        _ && _.getAttribute(ur) !== "active" && (UR(i, _), _.parentNode && _.parentNode.removeChild(_));
      }
    }(this));
  }
  e.registerId = function(t) {
    return Xo(t);
  };
  var n = e.prototype;
  return n.reconstructWithOptions = function(t, r) {
    return r === void 0 && (r = !0), new e(Fn({}, this.options, {}, t), this.gs, r && this.names || void 0);
  }, n.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, n.getTag = function() {
    return this.tag || (this.tag = (o = (r = this.options).isServer, i = r.useCSSOMInjection, s = r.target, t = o ? new wR(s) : i ? new HR(s) : new PR(s), new AR(t)));
    var t, r, o, i, s;
  }, n.hasNameForId = function(t, r) {
    return this.names.has(t) && this.names.get(t).has(r);
  }, n.registerName = function(t, r) {
    if (Xo(t), this.names.has(t))
      this.names.get(t).add(r);
    else {
      var o = /* @__PURE__ */ new Set();
      o.add(r), this.names.set(t, o);
    }
  }, n.insertRules = function(t, r, o) {
    this.registerName(t, r), this.getTag().insertRules(Xo(t), o);
  }, n.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, n.clearRules = function(t) {
    this.getTag().clearGroup(Xo(t)), this.clearNames(t);
  }, n.clearTag = function() {
    this.tag = void 0;
  }, n.toString = function() {
    return function(t) {
      for (var r = t.getTag(), o = r.length, i = "", s = 0; s < o; s++) {
        var a = SR(s);
        if (a !== void 0) {
          var u = t.names.get(a), _ = r.getGroup(s);
          if (u && _ && u.size) {
            var c = ur + ".g" + s + '[id="' + a + '"]', l = "";
            u !== void 0 && u.forEach(function(m) {
              m.length > 0 && (l += m + ",");
            }), i += "" + _ + c + '{content:"' + l + `"}/*!sc*/
`;
          }
        }
      }
      return i;
    }(this);
  }, e;
}(), kR = /(a)(d)/gi, cl = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Aa(e) {
  var n, t = "";
  for (n = Math.abs(e); n > 52; n = n / 52 | 0)
    t = cl(n % 52) + t;
  return (cl(n % 52) + t).replace(kR, "$1-$2");
}
var Xt = function(e, n) {
  for (var t = n.length; t; )
    e = 33 * e ^ n.charCodeAt(--t);
  return e;
}, rf = function(e) {
  return Xt(5381, e);
};
function xR(e) {
  for (var n = 0; n < e.length; n += 1) {
    var t = e[n];
    if (eo(t) && !Ru(t))
      return !1;
  }
  return !0;
}
var LR = rf("5.3.6"), BR = function() {
  function e(n, t, r) {
    this.rules = n, this.staticRulesId = "", this.isStatic = (r === void 0 || r.isStatic) && xR(n), this.componentId = t, this.baseHash = Xt(LR, t), this.baseStyle = r, tf.registerId(t);
  }
  return e.prototype.generateAndInjectStyles = function(n, t, r) {
    var o = this.componentId, i = [];
    if (this.baseStyle && i.push(this.baseStyle.generateAndInjectStyles(n, t, r)), this.isStatic && !r.hash)
      if (this.staticRulesId && t.hasNameForId(o, this.staticRulesId))
        i.push(this.staticRulesId);
      else {
        var s = _r(this.rules, n, t, r).join(""), a = Aa(Xt(this.baseHash, s) >>> 0);
        if (!t.hasNameForId(o, a)) {
          var u = r(s, "." + a, void 0, o);
          t.insertRules(o, a, u);
        }
        i.push(a), this.staticRulesId = a;
      }
    else {
      for (var _ = this.rules.length, c = Xt(this.baseHash, r.hash), l = "", m = 0; m < _; m++) {
        var T = this.rules[m];
        if (typeof T == "string")
          l += T;
        else if (T) {
          var d = _r(T, n, t, r), f = Array.isArray(d) ? d.join("") : d;
          c = Xt(c, f + m), l += f;
        }
      }
      if (l) {
        var h = Aa(c >>> 0);
        if (!t.hasNameForId(o, h)) {
          var O = r(l, "." + h, void 0, o);
          t.insertRules(o, h, O);
        }
        i.push(h);
      }
    }
    return i.join(" ");
  }, e;
}(), jR = /^\s*\/\/.*$/gm, FR = [":", "[", ".", "#"];
function VR(e) {
  var n, t, r, o, i = e === void 0 ? mt : e, s = i.options, a = s === void 0 ? mt : s, u = i.plugins, _ = u === void 0 ? Mi : u, c = new _R(a), l = [], m = function(f) {
    function h(O) {
      if (O)
        try {
          f(O + "}");
        } catch {
        }
    }
    return function(O, R, g, I, p, H, M, K, w, B) {
      switch (O) {
        case 1:
          if (w === 0 && R.charCodeAt(0) === 64)
            return f(R + ";"), "";
          break;
        case 2:
          if (K === 0)
            return R + "/*|*/";
          break;
        case 3:
          switch (K) {
            case 102:
            case 112:
              return f(g[0] + R), "";
            default:
              return R + (B === 0 ? "/*|*/" : "");
          }
        case -2:
          R.split("/*|*/}").forEach(h);
      }
    };
  }(function(f) {
    l.push(f);
  }), T = function(f, h, O) {
    return h === 0 && FR.indexOf(O[t.length]) !== -1 || O.match(o) ? f : "." + n;
  };
  function d(f, h, O, R) {
    R === void 0 && (R = "&");
    var g = f.replace(jR, ""), I = h && O ? O + " " + h + " { " + g + " }" : g;
    return n = R, t = h, r = new RegExp("\\" + t + "\\b", "g"), o = new RegExp("(\\" + t + "\\b){2,}"), c(O || !h ? "" : h, I);
  }
  return c.use([].concat(_, [function(f, h, O) {
    f === 2 && O.length && O[0].lastIndexOf(t) > 0 && (O[0] = O[0].replace(r, T));
  }, m, function(f) {
    if (f === -2) {
      var h = l;
      return l = [], h;
    }
  }])), d.hash = _.length ? _.reduce(function(f, h) {
    return h.name || Co(15), Xt(f, h.name);
  }, 5381).toString() : "", d;
}
var of = Ae.createContext();
of.Consumer;
var sf = Ae.createContext(), WR = (sf.Consumer, new tf()), Sa = VR();
function XR() {
  return Xe(of) || WR;
}
function YR() {
  return Xe(sf) || Sa;
}
var KR = function() {
  function e(n, t) {
    var r = this;
    this.inject = function(o, i) {
      i === void 0 && (i = Sa);
      var s = r.name + i.hash;
      o.hasNameForId(r.id, s) || o.insertRules(r.id, s, i(r.rules, s, "@keyframes"));
    }, this.toString = function() {
      return Co(12, String(r.name));
    }, this.name = n, this.id = "sc-keyframes-" + n, this.rules = t;
  }
  return e.prototype.getName = function(n) {
    return n === void 0 && (n = Sa), this.name + n.hash;
  }, e;
}(), $R = /([A-Z])/, zR = /([A-Z])/g, JR = /^ms-/, qR = function(e) {
  return "-" + e.toLowerCase();
};
function dl(e) {
  return $R.test(e) ? e.replace(zR, qR).replace(JR, "-ms-") : e;
}
var fl = function(e) {
  return e == null || e === !1 || e === "";
};
function _r(e, n, t, r) {
  if (Array.isArray(e)) {
    for (var o, i = [], s = 0, a = e.length; s < a; s += 1)
      (o = _r(e[s], n, t, r)) !== "" && (Array.isArray(o) ? i.push.apply(i, o) : i.push(o));
    return i;
  }
  if (fl(e))
    return "";
  if (Ru(e))
    return "." + e.styledComponentId;
  if (eo(e)) {
    if (typeof (_ = e) != "function" || _.prototype && _.prototype.isReactComponent || !n)
      return e;
    var u = e(n);
    return _r(u, n, t, r);
  }
  var _;
  return e instanceof KR ? t ? (e.inject(t, r), e.getName(r)) : e : Ia(e) ? function c(l, m) {
    var T, d, f = [];
    for (var h in l)
      l.hasOwnProperty(h) && !fl(l[h]) && (Array.isArray(l[h]) && l[h].isCss || eo(l[h]) ? f.push(dl(h) + ":", l[h], ";") : Ia(l[h]) ? f.push.apply(f, c(l[h], h)) : f.push(dl(h) + ": " + (T = h, (d = l[h]) == null || typeof d == "boolean" || d === "" ? "" : typeof d != "number" || d === 0 || T in lR ? String(d).trim() : d + "px") + ";"));
    return m ? [m + " {"].concat(f, ["}"]) : f;
  }(e) : e.toString();
}
var hl = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function In(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    t[r - 1] = arguments[r];
  return eo(e) || Ia(e) ? hl(_r(ul(Mi, [e].concat(t)))) : t.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : hl(_r(ul(e, t)));
}
var QR = function(e, n, t) {
  return t === void 0 && (t = mt), e.theme !== t.theme && e.theme || n || t.theme;
}, ZR = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, eb = /(^-|-$)/g;
function $s(e) {
  return e.replace(ZR, "-").replace(eb, "");
}
var nb = function(e) {
  return Aa(rf(e) >>> 0);
};
function Yo(e) {
  return typeof e == "string" && !0;
}
var va = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, tb = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function rb(e, n, t) {
  var r = e[t];
  va(n) && va(r) ? af(r, n) : e[t] = n;
}
function af(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    t[r - 1] = arguments[r];
  for (var o = 0, i = t; o < i.length; o++) {
    var s = i[o];
    if (va(s))
      for (var a in s)
        tb(a) && rb(e, s[a], a);
  }
  return e;
}
var gu = Ae.createContext();
gu.Consumer;
var zs = {};
function uf(e, n, t) {
  var r = Ru(e), o = !Yo(e), i = n.attrs, s = i === void 0 ? Mi : i, a = n.componentId, u = a === void 0 ? function(R, g) {
    var I = typeof R != "string" ? "sc" : $s(R);
    zs[I] = (zs[I] || 0) + 1;
    var p = I + "-" + nb("5.3.6" + I + zs[I]);
    return g ? g + "-" + p : p;
  }(n.displayName, n.parentComponentId) : a, _ = n.displayName, c = _ === void 0 ? function(R) {
    return Yo(R) ? "styled." + R : "Styled(" + _l(R) + ")";
  }(e) : _, l = n.displayName && n.componentId ? $s(n.displayName) + "-" + n.componentId : n.componentId || u, m = r && e.attrs ? Array.prototype.concat(e.attrs, s).filter(Boolean) : s, T = n.shouldForwardProp;
  r && e.shouldForwardProp && (T = n.shouldForwardProp ? function(R, g, I) {
    return e.shouldForwardProp(R, g, I) && n.shouldForwardProp(R, g, I);
  } : e.shouldForwardProp);
  var d, f = new BR(t, l, r ? e.componentStyle : void 0), h = f.isStatic && s.length === 0, O = function(R, g) {
    return function(I, p, H, M) {
      var K = I.attrs, w = I.componentStyle, B = I.defaultProps, Te = I.foldedComponentIds, me = I.shouldForwardProp, be = I.styledComponentId, k = I.target, G = function(j, E, J) {
        j === void 0 && (j = mt);
        var S = Fn({}, E, { theme: j }), le = {};
        return J.forEach(function(ne) {
          var he, $, Pe, Ye = ne;
          for (he in eo(Ye) && (Ye = Ye(S)), Ye)
            S[he] = le[he] = he === "className" ? ($ = le[he], Pe = Ye[he], $ && Pe ? $ + " " + Pe : $ || Pe) : Ye[he];
        }), [S, le];
      }(QR(p, Xe(gu), B) || mt, p, K), q = G[0], _e = G[1], ee = function(j, E, J, S) {
        var le = XR(), ne = YR(), he = E ? j.generateAndInjectStyles(mt, le, ne) : j.generateAndInjectStyles(J, le, ne);
        return he;
      }(w, M, q), Ie = H, He = _e.$as || p.$as || _e.as || p.as || k, ge = Yo(He), C = _e !== p ? Fn({}, p, {}, _e) : p, U = {};
      for (var P in C)
        P[0] !== "$" && P !== "as" && (P === "forwardedAs" ? U.as = C[P] : (me ? me(P, rl, He) : !ge || rl(P)) && (U[P] = C[P]));
      return p.style && _e.style !== p.style && (U.style = Fn({}, p.style, {}, _e.style)), U.className = Array.prototype.concat(Te, be, ee !== be ? ee : null, p.className, _e.className).filter(Boolean).join(" "), U.ref = Ie, $h(He, U);
    }(d, R, g, h);
  };
  return O.displayName = c, (d = Ae.forwardRef(O)).attrs = m, d.componentStyle = f, d.displayName = c, d.shouldForwardProp = T, d.foldedComponentIds = r ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : Mi, d.styledComponentId = l, d.target = r ? e.target : e, d.withComponent = function(R) {
    var g = n.componentId, I = function(H, M) {
      if (H == null)
        return {};
      var K, w, B = {}, Te = Object.keys(H);
      for (w = 0; w < Te.length; w++)
        K = Te[w], M.indexOf(K) >= 0 || (B[K] = H[K]);
      return B;
    }(n, ["componentId"]), p = g && g + "-" + (Yo(R) ? R : $s(_l(R)));
    return uf(R, Fn({}, I, { attrs: m, componentId: p }), t);
  }, Object.defineProperty(d, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(R) {
    this._foldedDefaultProps = r ? af({}, e.defaultProps, R) : R;
  } }), d.toString = function() {
    return "." + d.styledComponentId;
  }, o && NR(d, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), d;
}
var Ga = function(e) {
  return function n(t, r, o) {
    if (o === void 0 && (o = mt), !qd.isValidElementType(r))
      return Co(1, String(r));
    var i = function() {
      return t(r, o, In.apply(void 0, arguments));
    };
    return i.withConfig = function(s) {
      return n(t, r, Fn({}, o, {}, s));
    }, i.attrs = function(s) {
      return n(t, r, Fn({}, o, { attrs: Array.prototype.concat(o.attrs, s).filter(Boolean) }));
    }, i;
  }(uf, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  Ga[e] = Ga(e);
});
var ob = function() {
  return Xe(gu);
};
const Ce = Ga, cn = (e = "100%", n = e) => In`
  width: ${e};
  height: ${n};
`;
In`
  border: 1px solid red;
`;
const ib = (e) => In`
  padding-left: ${e}px;
  padding-right: ${e}px;
`, Ht = (e = "flex-start", n = "stretch", t = "row") => In`
  display: flex;
  justify-content: ${e};
  align-items: ${n};
  flex-direction: ${t};
`, Ca = (e) => In`
  transition: color 200ms;
  &:hover {
    color: ${e};
  }
`, di = (e) => ({ theme: n }) => `${n[e]} !important;`, Nu = (e = "&") => In`
  ${e}::-webkit-scrollbar {
    width: 10px;
  }

  ${e}::-webkit-scrollbar-track {
    background-color: ${({ theme: n }) => n.lightGrey};
  }

  ${e}::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
`, tn = (e) => In`
  ${({ theme: n }) => n[e]}
`, _f = (e) => In`
  position: absolute;
  ${Object.entries(e).map(([n, t]) => `${n}: ${t};`).join(`
`)}
`, sb = (e, n) => In`
  margin-left: ${e}px;
  margin-top: ${n}px;
`, ab = In`
  -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
`, v0 = Ce.div`
  ${Ht("center", "center")};
  ${_f({
  left: "0",
  top: "0"
})}
  ${cn("100vw", "100vh")};
  background: rgba(0, 0, 0, 0.44);
  z-index: 100;
`, G0 = Ce.div`
  display: grid;
  position: relative;
  ${cn("50vw", "60vh")};
  background: ${tn("grey")};
  border: 2px solid ${tn("lightGrey")};
  min-height: 300px;
  border-radius: 6px;
  cursor: grab;
  ${ab};
  touch-action: none;
  overflow-y: auto;
  scroll-behavior: smooth;
  ${Nu()};
`, C0 = Ce.div`
  margin: 0 auto;
  margin-top: 18px;
  ${cn("60%", "100%")}
  & > * {
    cursor: initial;
    color: ${tn("light")};
  }
`, ub = (e, n) => {
  const { Spring: t, Gesture: r } = us(), [{ y: o }, i] = t.useSpring(() => ({ y: n })), s = () => {
    i.start({ y: 0, immediate: !1, config: t.config.gentle });
  }, a = (l = 0) => {
    e(), i.start({
      y: n,
      immediate: !1,
      config: { ...t.config.stiff, velocity: l }
    });
  }, u = r.useDrag(
    ({ last: l, velocity: [, m], direction: [, T], offset: [, d], cancel: f }) => {
      d < -70 && f(), l ? d > n * 0.5 || m > 0.5 && T === 1 ? a(m) : s() : i.start({ y: d, immediate: T === -1 });
    },
    {
      from: () => [0, o.get()],
      filterTaps: !0,
      bounds: { top: 0 },
      rubberband: !0
    }
  ), _ = o.to((l) => l < n ? "block" : "none");
  return {
    toggle: (l) => {
      l ? s() : a();
    },
    bind: u,
    div: t.a.div,
    springs: {
      display: _,
      y: o
    }
  };
}, _b = Ce.div`
  padding-left: 15px;
  z-index: 15;
  position: fixed;
  right: 0;
  height: calc(100vh + 100px);
  width: calc(100% - 54px);
  border-radius: 6px 6px 0;
  background: ${tn("darkBlue")};
  border-top: 2px solid ${tn("lightGrey")};
  touch-action: none;
  bottom: ${({ $bottom: e }) => `calc(-100vh + ${e - 100}px)`};
  overflow-y: auto;
  box-sizing: border-box;
  scroll-behavior: smooth;
  ${Nu()};
`, lb = ({ children: e, onClose: n, isOpen: t, height: r }) => {
  const o = ub(n, r);
  return Ge(() => {
    o.toggle(t);
  }, [t]), /* @__PURE__ */ V(
    _b,
    {
      $bottom: r,
      ...o.bind(),
      style: o.springs,
      as: o.div,
      children: e
    }
  );
}, cb = (e) => /* @__PURE__ */ V(fu, { children: /* @__PURE__ */ V(lb, { ...e }) }), lf = ({
  onChange: e,
  value: n,
  options: t,
  defaultValue: r
}) => /* @__PURE__ */ V(
  em,
  {
    size: "middle",
    onChange: e,
    value: n,
    style: { width: 200 },
    options: t,
    defaultValue: r
  }
), db = Qn(({ onChange: e }) => {
  const { fontSize: n, tabSize: t } = hr(), r = es(), o = r.getActiveTabText(), i = r.getActiveLanguage();
  return /* @__PURE__ */ V(
    pE,
    {
      height: "90vh",
      theme: "vs-dark",
      onChange: e,
      language: i,
      value: Xc(o),
      options: iT({
        fontSize: n,
        tabSize: t
      })
    }
  );
}), fb = ({ children: e }) => {
  const { Spring: n } = us(), t = n.useSpring({
    from: {
      opacity: 0,
      x: 100
    },
    to: {
      opacity: 1,
      x: 0
    },
    config: n.config.stiff
  });
  return /* @__PURE__ */ V(n.a.div, { style: { ...t }, children: e });
}, hb = (e) => /* @__PURE__ */ V(fb, { children: /* @__PURE__ */ V(db, { ...e }) }), Iu = {
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
}, mb = [
  "java",
  "python",
  "cpp",
  "c",
  "go",
  "javascript"
], pb = () => [...new Set(Object.values(Iu))].map((n) => ({
  value: n,
  label: n
})), Tb = Qn(() => {
  const e = pb(), n = es(), t = n.getActiveLanguage(), r = n.getActiveTab();
  return /* @__PURE__ */ V(
    lf,
    {
      onChange: (i) => {
        r.lang = i;
      },
      value: t,
      options: e
    }
  );
}), cf = "Custom", Eb = [
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
  cf
], Ob = Qn(() => {
  const e = Nt(), { theme: n } = hr();
  return /* @__PURE__ */ V(
    lf,
    {
      defaultValue: "vs-dark",
      onChange: (r) => {
        e.changeTheme(r);
      },
      value: n,
      options: Eb.map((r) => ({
        value: r,
        label: r
      }))
    }
  );
});
let Ko;
const Rb = new Uint8Array(16);
function bb() {
  if (!Ko && (Ko = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Ko))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return Ko(Rb);
}
const ke = [];
for (let e = 0; e < 256; ++e)
  ke.push((e + 256).toString(16).slice(1));
function gb(e, n = 0) {
  return (ke[e[n + 0]] + ke[e[n + 1]] + ke[e[n + 2]] + ke[e[n + 3]] + "-" + ke[e[n + 4]] + ke[e[n + 5]] + "-" + ke[e[n + 6]] + ke[e[n + 7]] + "-" + ke[e[n + 8]] + ke[e[n + 9]] + "-" + ke[e[n + 10]] + ke[e[n + 11]] + ke[e[n + 12]] + ke[e[n + 13]] + ke[e[n + 14]] + ke[e[n + 15]]).toLowerCase();
}
const Nb = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), ml = {
  randomUUID: Nb
};
function Ib(e, n, t) {
  if (ml.randomUUID && !n && !e)
    return ml.randomUUID();
  e = e || {};
  const r = e.random || (e.rng || bb)();
  if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, n) {
    t = t || 0;
    for (let o = 0; o < 16; ++o)
      n[t + o] = r[o];
    return n;
  }
  return gb(r);
}
const Ab = ({
  fileData: e,
  lastNumber: n
}) => ({
  fileHandle: e?.fileHandle ?? null,
  content: e?.content ?? "",
  label: e?.name ?? "Untitled",
  lang: e?.language ?? "text",
  idx: n ? n + 1 : 0,
  key: Ib(),
  wasChanged: !1
}), df = 9, D0 = [14, 16, 18, 20, 22, 24, 26], U0 = [4, 2], Sb = (e) => e.length >= df;
class vb {
  constructor(n) {
    Rt(this), this.state = n;
  }
  createTab(n) {
    const t = this.state.content;
    if (Sb(t))
      return null;
    const r = t.at(-1)?.idx, o = Ab({ fileData: n, lastNumber: r });
    return this.state.activeKey = o.key, this.state.content.push(o), o;
  }
  removeTab(n) {
    const t = this.state.getters.getTabIndex(n), r = this.state.content[t - 1];
    this.state.content.splice(t, 1), n === this.state.activeKey && (this.state.activeKey = r.key);
  }
  changeActiveTab(n) {
    this.state.activeKey = n;
  }
}
const Gb = () => {
  const [e, n] = Qe(null);
  return {
    protect(t) {
      return (...r) => {
        e || t(...r);
      };
    },
    off() {
      n(null);
    },
    on(t) {
      n(t);
    },
    val: e
  };
}, Cb = (e) => e.map((n) => ({
  label: n.label,
  key: n.key
})), Db = Ce(rc)`
  color: ${di("secondaryGrey")};
  height: 50px;
  margin: 12px;
  min-width: 300px;
  .ant-tabs-nav::before {
    border-bottom: none;
  }
  .ant-tabs-tab {
    background: ${di("grey")};
  }
  .ant-tabs-tab-active {
    background: #2e3139 !important;
  }
  .ant-tabs-tab-btn {
    color: ${di("secondaryGrey")};
  }
`, Ub = Qn(() => {
  const { activeKey: e, content: n } = hr(), t = Nt(), r = Cb(n), o = Gb(), i = o.protect(
    (u, _) => {
      if (_ === "add")
        t.tabs.createTab();
      else {
        if (n.length === 1)
          return;
        o.on(u);
      }
    }
  ), s = o.protect((u) => {
    t.tabs.changeActiveTab(u);
  });
  return /* @__PURE__ */ V(nc, { children: /* @__PURE__ */ V(
    nm,
    {
      title: "Delete the tab",
      description: "Are you sure to delete this tab?",
      okText: "Yes",
      cancelText: "No",
      onConfirm: () => {
        t.tabs.removeTab(o.val), o.off();
      },
      open: !!o.val,
      onCancel: o.off,
      arrow: !1,
      children: /* @__PURE__ */ V(
        Db,
        {
          type: "editable-card",
          onChange: s,
          activeKey: e,
          onEdit: i,
          items: Xc(r),
          hideAdd: n.length >= df
        }
      )
    }
  ) });
}), yb = [1, 2, 3, 4, 5, 6, 7, 8, 9], Hb = () => {
  const e = Ud(), { tabs: n } = Nt(), { content: t } = hr();
  Ge(() => (e.on(
    Object.fromEntries(
      yb.map((r) => {
        const i = t[r - 1]?.key;
        return [r.toString(), i ? () => n.changeActiveTab(i) : null];
      })
    )
  ), () => {
    e.clear();
  }), [t.length]);
}, Pb = (e) => eR(e) ? "name" in e && typeof e.name == "string" && "type" in e && typeof e.type == "string" && "content" in e && typeof e.content == "string" : !1, ff = (e) => {
  const n = e.split(".").at(-1);
  return wb(n) ? [Iu[n], n] : ["text", n];
};
function wb(e) {
  return e in Iu;
}
const hf = {
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
}, Mb = {
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
}, kb = () => async () => {
  if ("showOpenFilePicker" in window) {
    const [e] = await window.showOpenFilePicker(Mb), n = await e.getFile(), t = await n.text(), [r] = ff(n.name);
    return {
      name: n.name,
      type: n.type,
      content: t,
      fileHandle: e,
      language: r
    };
  }
  console.warn(hf.NotSupportedByBrowser());
}, xb = () => async (e, n) => {
  try {
    let t = e;
    nR(e?.createWritable) || (t = await window.showSaveFilePicker());
    const r = await t.createWritable();
    return await r.write(n), await r.close(), t;
  } catch {
    console.warn(hf.NotSupportedByBrowser());
  }
}, mf = () => {
  const e = kb(), n = xb(), t = Nt(), r = es();
  return {
    openFile: Et(async () => {
      const s = await e();
      Pb(s) && t.tabs.createTab(s);
    }, [t.tabs, e]),
    saveFile: async () => {
      const s = r.getActiveTab(), a = s.fileHandle, u = s.content;
      if (!s.wasChanged)
        return;
      const _ = await n(a, u);
      _ && (s.fileHandle = _, s.lang = ff(_.name));
    }
  };
};
var ot = /* @__PURE__ */ ((e) => (e.O = "O", e.S = "S", e.N = "N", e.T = "T", e.P = "P", e.J = "J", e.Q = "Q", e))(ot || {});
const Lb = () => {
  const e = Nt(), n = Ud(), { openFile: t, saveFile: r } = mf();
  Hb();
  const o = aT("isTerminalOpened"), i = yt(), s = Et(() => {
    i.toggle("isSettingsOpened");
  }, [i]);
  Ge(() => (n.on({
    [ot.O]: t,
    [ot.S]: r,
    [ot.N]: () => {
      e.tabs.createTab();
    },
    [ot.T]: () => {
      e.tabs.removeTab();
    },
    [ot.P]: o("terminal"),
    [ot.J]: o("test_cases"),
    [ot.Q]: s
  }), () => {
    n.clear();
  }), [i.state.isSettingsOpened]);
}, Bb = Ce.div`
  width: 100%;
`, jb = Ce.div`
  ${Ht("space-between")}
  ${cn("100%", "48px")}
  margin-bottom: 10px;
`, Fb = Ce.div`
  width: 30%;
  display: flex;
  gap: 30px;
  align-items: flex-end;
`, y0 = Qn(() => {
  const e = Nt(), { theme: n, content: t, customBackground: r, customColor: o } = hr(), i = _T(), s = o0(), a = BO(() => {
    i.set("EDITOR_CONTENT_DATA", t);
  }, 1e3);
  Lb();
  const u = cd(), _ = (c) => {
    Yd(c) && (e.editor.saveContent(c), a());
  };
  return Ge(() => {
    u?.editor.setTheme(n);
  }, [n]), Ge(() => {
    s({
      background: r,
      color: o
    });
  }, [r, o]), /* @__PURE__ */ nn(Bb, { children: [
    /* @__PURE__ */ nn(jb, { children: [
      /* @__PURE__ */ V(Ub, {}),
      /* @__PURE__ */ nn(Fb, { children: [
        /* @__PURE__ */ V(Ob, {}),
        /* @__PURE__ */ V(Tb, {})
      ] })
    ] }),
    /* @__PURE__ */ V(fu, { children: /* @__PURE__ */ V(hb, { onChange: _ }) })
  ] });
});
function Vb(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
//! moment.js
//! version : 2.29.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var pf;
function D() {
  return pf.apply(null, arguments);
}
function Wb(e) {
  pf = e;
}
function gn(e) {
  return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]";
}
function Gt(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Object]";
}
function ae(e, n) {
  return Object.prototype.hasOwnProperty.call(e, n);
}
function Au(e) {
  if (Object.getOwnPropertyNames)
    return Object.getOwnPropertyNames(e).length === 0;
  var n;
  for (n in e)
    if (ae(e, n))
      return !1;
  return !0;
}
function Ke(e) {
  return e === void 0;
}
function Jn(e) {
  return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]";
}
function Do(e) {
  return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
}
function Tf(e, n) {
  var t = [], r, o = e.length;
  for (r = 0; r < o; ++r)
    t.push(n(e[r], r));
  return t;
}
function ut(e, n) {
  for (var t in n)
    ae(n, t) && (e[t] = n[t]);
  return ae(n, "toString") && (e.toString = n.toString), ae(n, "valueOf") && (e.valueOf = n.valueOf), e;
}
function Mn(e, n, t, r) {
  return jf(e, n, t, r, !0).utc();
}
function Xb() {
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
function z(e) {
  return e._pf == null && (e._pf = Xb()), e._pf;
}
var Da;
Array.prototype.some ? Da = Array.prototype.some : Da = function(e) {
  var n = Object(this), t = n.length >>> 0, r;
  for (r = 0; r < t; r++)
    if (r in n && e.call(this, n[r], r, n))
      return !0;
  return !1;
};
function Su(e) {
  if (e._isValid == null) {
    var n = z(e), t = Da.call(n.parsedDateParts, function(o) {
      return o != null;
    }), r = !isNaN(e._d.getTime()) && n.overflow < 0 && !n.empty && !n.invalidEra && !n.invalidMonth && !n.invalidWeekday && !n.weekdayMismatch && !n.nullInput && !n.invalidFormat && !n.userInvalidated && (!n.meridiem || n.meridiem && t);
    if (e._strict && (r = r && n.charsLeftOver === 0 && n.unusedTokens.length === 0 && n.bigHour === void 0), Object.isFrozen == null || !Object.isFrozen(e))
      e._isValid = r;
    else
      return r;
  }
  return e._isValid;
}
function ls(e) {
  var n = Mn(NaN);
  return e != null ? ut(z(n), e) : z(n).userInvalidated = !0, n;
}
var pl = D.momentProperties = [], Js = !1;
function vu(e, n) {
  var t, r, o, i = pl.length;
  if (Ke(n._isAMomentObject) || (e._isAMomentObject = n._isAMomentObject), Ke(n._i) || (e._i = n._i), Ke(n._f) || (e._f = n._f), Ke(n._l) || (e._l = n._l), Ke(n._strict) || (e._strict = n._strict), Ke(n._tzm) || (e._tzm = n._tzm), Ke(n._isUTC) || (e._isUTC = n._isUTC), Ke(n._offset) || (e._offset = n._offset), Ke(n._pf) || (e._pf = z(n)), Ke(n._locale) || (e._locale = n._locale), i > 0)
    for (t = 0; t < i; t++)
      r = pl[t], o = n[r], Ke(o) || (e[r] = o);
  return e;
}
function Uo(e) {
  vu(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = /* @__PURE__ */ new Date(NaN)), Js === !1 && (Js = !0, D.updateOffset(this), Js = !1);
}
function Nn(e) {
  return e instanceof Uo || e != null && e._isAMomentObject != null;
}
function Ef(e) {
  D.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + e);
}
function fn(e, n) {
  var t = !0;
  return ut(function() {
    if (D.deprecationHandler != null && D.deprecationHandler(null, e), t) {
      var r = [], o, i, s, a = arguments.length;
      for (i = 0; i < a; i++) {
        if (o = "", typeof arguments[i] == "object") {
          o += `
[` + i + "] ";
          for (s in arguments[0])
            ae(arguments[0], s) && (o += s + ": " + arguments[0][s] + ", ");
          o = o.slice(0, -2);
        } else
          o = arguments[i];
        r.push(o);
      }
      Ef(
        e + `
Arguments: ` + Array.prototype.slice.call(r).join("") + `
` + new Error().stack
      ), t = !1;
    }
    return n.apply(this, arguments);
  }, n);
}
var Tl = {};
function Of(e, n) {
  D.deprecationHandler != null && D.deprecationHandler(e, n), Tl[e] || (Ef(n), Tl[e] = !0);
}
D.suppressDeprecationWarnings = !1;
D.deprecationHandler = null;
function kn(e) {
  return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
}
function Yb(e) {
  var n, t;
  for (t in e)
    ae(e, t) && (n = e[t], kn(n) ? this[t] = n : this["_" + t] = n);
  this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp(
    (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
  );
}
function Ua(e, n) {
  var t = ut({}, e), r;
  for (r in n)
    ae(n, r) && (Gt(e[r]) && Gt(n[r]) ? (t[r] = {}, ut(t[r], e[r]), ut(t[r], n[r])) : n[r] != null ? t[r] = n[r] : delete t[r]);
  for (r in e)
    ae(e, r) && !ae(n, r) && Gt(e[r]) && (t[r] = ut({}, t[r]));
  return t;
}
function Gu(e) {
  e != null && this.set(e);
}
var ya;
Object.keys ? ya = Object.keys : ya = function(e) {
  var n, t = [];
  for (n in e)
    ae(e, n) && t.push(n);
  return t;
};
var Kb = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function $b(e, n, t) {
  var r = this._calendar[e] || this._calendar.sameElse;
  return kn(r) ? r.call(n, t) : r;
}
function Hn(e, n, t) {
  var r = "" + Math.abs(e), o = n - r.length, i = e >= 0;
  return (i ? t ? "+" : "" : "-") + Math.pow(10, Math.max(0, o)).toString().substr(1) + r;
}
var Cu = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, $o = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, qs = {}, $t = {};
function x(e, n, t, r) {
  var o = r;
  typeof r == "string" && (o = function() {
    return this[r]();
  }), e && ($t[e] = o), n && ($t[n[0]] = function() {
    return Hn(o.apply(this, arguments), n[1], n[2]);
  }), t && ($t[t] = function() {
    return this.localeData().ordinal(
      o.apply(this, arguments),
      e
    );
  });
}
function zb(e) {
  return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
}
function Jb(e) {
  var n = e.match(Cu), t, r;
  for (t = 0, r = n.length; t < r; t++)
    $t[n[t]] ? n[t] = $t[n[t]] : n[t] = zb(n[t]);
  return function(o) {
    var i = "", s;
    for (s = 0; s < r; s++)
      i += kn(n[s]) ? n[s].call(o, e) : n[s];
    return i;
  };
}
function fi(e, n) {
  return e.isValid() ? (n = Rf(n, e.localeData()), qs[n] = qs[n] || Jb(n), qs[n](e)) : e.localeData().invalidDate();
}
function Rf(e, n) {
  var t = 5;
  function r(o) {
    return n.longDateFormat(o) || o;
  }
  for ($o.lastIndex = 0; t >= 0 && $o.test(e); )
    e = e.replace(
      $o,
      r
    ), $o.lastIndex = 0, t -= 1;
  return e;
}
var qb = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function Qb(e) {
  var n = this._longDateFormat[e], t = this._longDateFormat[e.toUpperCase()];
  return n || !t ? n : (this._longDateFormat[e] = t.match(Cu).map(function(r) {
    return r === "MMMM" || r === "MM" || r === "DD" || r === "dddd" ? r.slice(1) : r;
  }).join(""), this._longDateFormat[e]);
}
var Zb = "Invalid date";
function eg() {
  return this._invalidDate;
}
var ng = "%d", tg = /\d{1,2}/;
function rg(e) {
  return this._ordinal.replace("%d", e);
}
var og = {
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
function ig(e, n, t, r) {
  var o = this._relativeTime[t];
  return kn(o) ? o(e, n, t, r) : o.replace(/%d/i, e);
}
function sg(e, n) {
  var t = this._relativeTime[e > 0 ? "future" : "past"];
  return kn(t) ? t(n) : t.replace(/%s/i, n);
}
var Lr = {};
function je(e, n) {
  var t = e.toLowerCase();
  Lr[t] = Lr[t + "s"] = Lr[n] = e;
}
function hn(e) {
  return typeof e == "string" ? Lr[e] || Lr[e.toLowerCase()] : void 0;
}
function Du(e) {
  var n = {}, t, r;
  for (r in e)
    ae(e, r) && (t = hn(r), t && (n[t] = e[r]));
  return n;
}
var bf = {};
function Fe(e, n) {
  bf[e] = n;
}
function ag(e) {
  var n = [], t;
  for (t in e)
    ae(e, t) && n.push({ unit: t, priority: bf[t] });
  return n.sort(function(r, o) {
    return r.priority - o.priority;
  }), n;
}
function cs(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
}
function on(e) {
  return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
}
function Q(e) {
  var n = +e, t = 0;
  return n !== 0 && isFinite(n) && (t = on(n)), t;
}
function pr(e, n) {
  return function(t) {
    return t != null ? (gf(this, e, t), D.updateOffset(this, n), this) : xi(this, e);
  };
}
function xi(e, n) {
  return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + n]() : NaN;
}
function gf(e, n, t) {
  e.isValid() && !isNaN(t) && (n === "FullYear" && cs(e.year()) && e.month() === 1 && e.date() === 29 ? (t = Q(t), e._d["set" + (e._isUTC ? "UTC" : "") + n](
    t,
    e.month(),
    Ts(t, e.month())
  )) : e._d["set" + (e._isUTC ? "UTC" : "") + n](t));
}
function ug(e) {
  return e = hn(e), kn(this[e]) ? this[e]() : this;
}
function _g(e, n) {
  if (typeof e == "object") {
    e = Du(e);
    var t = ag(e), r, o = t.length;
    for (r = 0; r < o; r++)
      this[t[r].unit](e[t[r].unit]);
  } else if (e = hn(e), kn(this[e]))
    return this[e](n);
  return this;
}
var Nf = /\d/, rn = /\d\d/, If = /\d{3}/, Uu = /\d{4}/, ds = /[+-]?\d{6}/, Oe = /\d\d?/, Af = /\d\d\d\d?/, Sf = /\d\d\d\d\d\d?/, fs = /\d{1,3}/, yu = /\d{1,4}/, hs = /[+-]?\d{1,6}/, Tr = /\d+/, ms = /[+-]?\d+/, lg = /Z|[+-]\d\d:?\d\d/gi, ps = /Z|[+-]\d\d(?::?\d\d)?/gi, cg = /[+-]?\d+(\.\d{1,3})?/, yo = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, Li;
Li = {};
function y(e, n, t) {
  Li[e] = kn(n) ? n : function(r, o) {
    return r && t ? t : n;
  };
}
function dg(e, n) {
  return ae(Li, e) ? Li[e](n._strict, n._locale) : new RegExp(fg(e));
}
function fg(e) {
  return en(
    e.replace("\\", "").replace(
      /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
      function(n, t, r, o, i) {
        return t || r || o || i;
      }
    )
  );
}
function en(e) {
  return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
var Ha = {};
function pe(e, n) {
  var t, r = n, o;
  for (typeof e == "string" && (e = [e]), Jn(n) && (r = function(i, s) {
    s[n] = Q(i);
  }), o = e.length, t = 0; t < o; t++)
    Ha[e[t]] = r;
}
function Ho(e, n) {
  pe(e, function(t, r, o, i) {
    o._w = o._w || {}, n(t, o._w, o, i);
  });
}
function hg(e, n, t) {
  n != null && ae(Ha, e) && Ha[e](n, t._a, t, e);
}
var Be = 0, Vn = 1, vn = 2, De = 3, Tn = 4, Wn = 5, St = 6, mg = 7, pg = 8;
function Tg(e, n) {
  return (e % n + n) % n;
}
var ve;
Array.prototype.indexOf ? ve = Array.prototype.indexOf : ve = function(e) {
  var n;
  for (n = 0; n < this.length; ++n)
    if (this[n] === e)
      return n;
  return -1;
};
function Ts(e, n) {
  if (isNaN(e) || isNaN(n))
    return NaN;
  var t = Tg(n, 12);
  return e += (n - t) / 12, t === 1 ? cs(e) ? 29 : 28 : 31 - t % 7 % 2;
}
x("M", ["MM", 2], "Mo", function() {
  return this.month() + 1;
});
x("MMM", 0, 0, function(e) {
  return this.localeData().monthsShort(this, e);
});
x("MMMM", 0, 0, function(e) {
  return this.localeData().months(this, e);
});
je("month", "M");
Fe("month", 8);
y("M", Oe);
y("MM", Oe, rn);
y("MMM", function(e, n) {
  return n.monthsShortRegex(e);
});
y("MMMM", function(e, n) {
  return n.monthsRegex(e);
});
pe(["M", "MM"], function(e, n) {
  n[Vn] = Q(e) - 1;
});
pe(["MMM", "MMMM"], function(e, n, t, r) {
  var o = t._locale.monthsParse(e, r, t._strict);
  o != null ? n[Vn] = o : z(t).invalidMonth = e;
});
var Eg = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), vf = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), Gf = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, Og = yo, Rg = yo;
function bg(e, n) {
  return e ? gn(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || Gf).test(n) ? "format" : "standalone"][e.month()] : gn(this._months) ? this._months : this._months.standalone;
}
function gg(e, n) {
  return e ? gn(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Gf.test(n) ? "format" : "standalone"][e.month()] : gn(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function Ng(e, n, t) {
  var r, o, i, s = e.toLocaleLowerCase();
  if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], r = 0; r < 12; ++r)
      i = Mn([2e3, r]), this._shortMonthsParse[r] = this.monthsShort(
        i,
        ""
      ).toLocaleLowerCase(), this._longMonthsParse[r] = this.months(i, "").toLocaleLowerCase();
  return t ? n === "MMM" ? (o = ve.call(this._shortMonthsParse, s), o !== -1 ? o : null) : (o = ve.call(this._longMonthsParse, s), o !== -1 ? o : null) : n === "MMM" ? (o = ve.call(this._shortMonthsParse, s), o !== -1 ? o : (o = ve.call(this._longMonthsParse, s), o !== -1 ? o : null)) : (o = ve.call(this._longMonthsParse, s), o !== -1 ? o : (o = ve.call(this._shortMonthsParse, s), o !== -1 ? o : null));
}
function Ig(e, n, t) {
  var r, o, i;
  if (this._monthsParseExact)
    return Ng.call(this, e, n, t);
  for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), r = 0; r < 12; r++) {
    if (o = Mn([2e3, r]), t && !this._longMonthsParse[r] && (this._longMonthsParse[r] = new RegExp(
      "^" + this.months(o, "").replace(".", "") + "$",
      "i"
    ), this._shortMonthsParse[r] = new RegExp(
      "^" + this.monthsShort(o, "").replace(".", "") + "$",
      "i"
    )), !t && !this._monthsParse[r] && (i = "^" + this.months(o, "") + "|^" + this.monthsShort(o, ""), this._monthsParse[r] = new RegExp(i.replace(".", ""), "i")), t && n === "MMMM" && this._longMonthsParse[r].test(e))
      return r;
    if (t && n === "MMM" && this._shortMonthsParse[r].test(e))
      return r;
    if (!t && this._monthsParse[r].test(e))
      return r;
  }
}
function Cf(e, n) {
  var t;
  if (!e.isValid())
    return e;
  if (typeof n == "string") {
    if (/^\d+$/.test(n))
      n = Q(n);
    else if (n = e.localeData().monthsParse(n), !Jn(n))
      return e;
  }
  return t = Math.min(e.date(), Ts(e.year(), n)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](n, t), e;
}
function Df(e) {
  return e != null ? (Cf(this, e), D.updateOffset(this, !0), this) : xi(this, "Month");
}
function Ag() {
  return Ts(this.year(), this.month());
}
function Sg(e) {
  return this._monthsParseExact ? (ae(this, "_monthsRegex") || Uf.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (ae(this, "_monthsShortRegex") || (this._monthsShortRegex = Og), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function vg(e) {
  return this._monthsParseExact ? (ae(this, "_monthsRegex") || Uf.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (ae(this, "_monthsRegex") || (this._monthsRegex = Rg), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
}
function Uf() {
  function e(s, a) {
    return a.length - s.length;
  }
  var n = [], t = [], r = [], o, i;
  for (o = 0; o < 12; o++)
    i = Mn([2e3, o]), n.push(this.monthsShort(i, "")), t.push(this.months(i, "")), r.push(this.months(i, "")), r.push(this.monthsShort(i, ""));
  for (n.sort(e), t.sort(e), r.sort(e), o = 0; o < 12; o++)
    n[o] = en(n[o]), t[o] = en(t[o]);
  for (o = 0; o < 24; o++)
    r[o] = en(r[o]);
  this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  ), this._monthsShortStrictRegex = new RegExp(
    "^(" + n.join("|") + ")",
    "i"
  );
}
x("Y", 0, 0, function() {
  var e = this.year();
  return e <= 9999 ? Hn(e, 4) : "+" + e;
});
x(0, ["YY", 2], 0, function() {
  return this.year() % 100;
});
x(0, ["YYYY", 4], 0, "year");
x(0, ["YYYYY", 5], 0, "year");
x(0, ["YYYYYY", 6, !0], 0, "year");
je("year", "y");
Fe("year", 1);
y("Y", ms);
y("YY", Oe, rn);
y("YYYY", yu, Uu);
y("YYYYY", hs, ds);
y("YYYYYY", hs, ds);
pe(["YYYYY", "YYYYYY"], Be);
pe("YYYY", function(e, n) {
  n[Be] = e.length === 2 ? D.parseTwoDigitYear(e) : Q(e);
});
pe("YY", function(e, n) {
  n[Be] = D.parseTwoDigitYear(e);
});
pe("Y", function(e, n) {
  n[Be] = parseInt(e, 10);
});
function Br(e) {
  return cs(e) ? 366 : 365;
}
D.parseTwoDigitYear = function(e) {
  return Q(e) + (Q(e) > 68 ? 1900 : 2e3);
};
var yf = pr("FullYear", !0);
function Gg() {
  return cs(this.year());
}
function Cg(e, n, t, r, o, i, s) {
  var a;
  return e < 100 && e >= 0 ? (a = new Date(e + 400, n, t, r, o, i, s), isFinite(a.getFullYear()) && a.setFullYear(e)) : a = new Date(e, n, t, r, o, i, s), a;
}
function no(e) {
  var n, t;
  return e < 100 && e >= 0 ? (t = Array.prototype.slice.call(arguments), t[0] = e + 400, n = new Date(Date.UTC.apply(null, t)), isFinite(n.getUTCFullYear()) && n.setUTCFullYear(e)) : n = new Date(Date.UTC.apply(null, arguments)), n;
}
function Bi(e, n, t) {
  var r = 7 + n - t, o = (7 + no(e, 0, r).getUTCDay() - n) % 7;
  return -o + r - 1;
}
function Hf(e, n, t, r, o) {
  var i = (7 + t - r) % 7, s = Bi(e, r, o), a = 1 + 7 * (n - 1) + i + s, u, _;
  return a <= 0 ? (u = e - 1, _ = Br(u) + a) : a > Br(e) ? (u = e + 1, _ = a - Br(e)) : (u = e, _ = a), {
    year: u,
    dayOfYear: _
  };
}
function to(e, n, t) {
  var r = Bi(e.year(), n, t), o = Math.floor((e.dayOfYear() - r - 1) / 7) + 1, i, s;
  return o < 1 ? (s = e.year() - 1, i = o + $n(s, n, t)) : o > $n(e.year(), n, t) ? (i = o - $n(e.year(), n, t), s = e.year() + 1) : (s = e.year(), i = o), {
    week: i,
    year: s
  };
}
function $n(e, n, t) {
  var r = Bi(e, n, t), o = Bi(e + 1, n, t);
  return (Br(e) - r + o) / 7;
}
x("w", ["ww", 2], "wo", "week");
x("W", ["WW", 2], "Wo", "isoWeek");
je("week", "w");
je("isoWeek", "W");
Fe("week", 5);
Fe("isoWeek", 5);
y("w", Oe);
y("ww", Oe, rn);
y("W", Oe);
y("WW", Oe, rn);
Ho(
  ["w", "ww", "W", "WW"],
  function(e, n, t, r) {
    n[r.substr(0, 1)] = Q(e);
  }
);
function Dg(e) {
  return to(e, this._week.dow, this._week.doy).week;
}
var Ug = {
  dow: 0,
  // Sunday is the first day of the week.
  doy: 6
  // The week that contains Jan 6th is the first week of the year.
};
function yg() {
  return this._week.dow;
}
function Hg() {
  return this._week.doy;
}
function Pg(e) {
  var n = this.localeData().week(this);
  return e == null ? n : this.add((e - n) * 7, "d");
}
function wg(e) {
  var n = to(this, 1, 4).week;
  return e == null ? n : this.add((e - n) * 7, "d");
}
x("d", 0, "do", "day");
x("dd", 0, 0, function(e) {
  return this.localeData().weekdaysMin(this, e);
});
x("ddd", 0, 0, function(e) {
  return this.localeData().weekdaysShort(this, e);
});
x("dddd", 0, 0, function(e) {
  return this.localeData().weekdays(this, e);
});
x("e", 0, 0, "weekday");
x("E", 0, 0, "isoWeekday");
je("day", "d");
je("weekday", "e");
je("isoWeekday", "E");
Fe("day", 11);
Fe("weekday", 11);
Fe("isoWeekday", 11);
y("d", Oe);
y("e", Oe);
y("E", Oe);
y("dd", function(e, n) {
  return n.weekdaysMinRegex(e);
});
y("ddd", function(e, n) {
  return n.weekdaysShortRegex(e);
});
y("dddd", function(e, n) {
  return n.weekdaysRegex(e);
});
Ho(["dd", "ddd", "dddd"], function(e, n, t, r) {
  var o = t._locale.weekdaysParse(e, r, t._strict);
  o != null ? n.d = o : z(t).invalidWeekday = e;
});
Ho(["d", "e", "E"], function(e, n, t, r) {
  n[r] = Q(e);
});
function Mg(e, n) {
  return typeof e != "string" ? e : isNaN(e) ? (e = n.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10);
}
function kg(e, n) {
  return typeof e == "string" ? n.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
}
function Hu(e, n) {
  return e.slice(n, 7).concat(e.slice(0, n));
}
var xg = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), Pf = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), Lg = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), Bg = yo, jg = yo, Fg = yo;
function Vg(e, n) {
  var t = gn(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(n) ? "format" : "standalone"];
  return e === !0 ? Hu(t, this._week.dow) : e ? t[e.day()] : t;
}
function Wg(e) {
  return e === !0 ? Hu(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
}
function Xg(e) {
  return e === !0 ? Hu(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
}
function Yg(e, n, t) {
  var r, o, i, s = e.toLocaleLowerCase();
  if (!this._weekdaysParse)
    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], r = 0; r < 7; ++r)
      i = Mn([2e3, 1]).day(r), this._minWeekdaysParse[r] = this.weekdaysMin(
        i,
        ""
      ).toLocaleLowerCase(), this._shortWeekdaysParse[r] = this.weekdaysShort(
        i,
        ""
      ).toLocaleLowerCase(), this._weekdaysParse[r] = this.weekdays(i, "").toLocaleLowerCase();
  return t ? n === "dddd" ? (o = ve.call(this._weekdaysParse, s), o !== -1 ? o : null) : n === "ddd" ? (o = ve.call(this._shortWeekdaysParse, s), o !== -1 ? o : null) : (o = ve.call(this._minWeekdaysParse, s), o !== -1 ? o : null) : n === "dddd" ? (o = ve.call(this._weekdaysParse, s), o !== -1 || (o = ve.call(this._shortWeekdaysParse, s), o !== -1) ? o : (o = ve.call(this._minWeekdaysParse, s), o !== -1 ? o : null)) : n === "ddd" ? (o = ve.call(this._shortWeekdaysParse, s), o !== -1 || (o = ve.call(this._weekdaysParse, s), o !== -1) ? o : (o = ve.call(this._minWeekdaysParse, s), o !== -1 ? o : null)) : (o = ve.call(this._minWeekdaysParse, s), o !== -1 || (o = ve.call(this._weekdaysParse, s), o !== -1) ? o : (o = ve.call(this._shortWeekdaysParse, s), o !== -1 ? o : null));
}
function Kg(e, n, t) {
  var r, o, i;
  if (this._weekdaysParseExact)
    return Yg.call(this, e, n, t);
  for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), r = 0; r < 7; r++) {
    if (o = Mn([2e3, 1]).day(r), t && !this._fullWeekdaysParse[r] && (this._fullWeekdaysParse[r] = new RegExp(
      "^" + this.weekdays(o, "").replace(".", "\\.?") + "$",
      "i"
    ), this._shortWeekdaysParse[r] = new RegExp(
      "^" + this.weekdaysShort(o, "").replace(".", "\\.?") + "$",
      "i"
    ), this._minWeekdaysParse[r] = new RegExp(
      "^" + this.weekdaysMin(o, "").replace(".", "\\.?") + "$",
      "i"
    )), this._weekdaysParse[r] || (i = "^" + this.weekdays(o, "") + "|^" + this.weekdaysShort(o, "") + "|^" + this.weekdaysMin(o, ""), this._weekdaysParse[r] = new RegExp(i.replace(".", ""), "i")), t && n === "dddd" && this._fullWeekdaysParse[r].test(e))
      return r;
    if (t && n === "ddd" && this._shortWeekdaysParse[r].test(e))
      return r;
    if (t && n === "dd" && this._minWeekdaysParse[r].test(e))
      return r;
    if (!t && this._weekdaysParse[r].test(e))
      return r;
  }
}
function $g(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var n = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
  return e != null ? (e = Mg(e, this.localeData()), this.add(e - n, "d")) : n;
}
function zg(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var n = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return e == null ? n : this.add(e - n, "d");
}
function Jg(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    var n = kg(e, this.localeData());
    return this.day(this.day() % 7 ? n : n - 7);
  } else
    return this.day() || 7;
}
function qg(e) {
  return this._weekdaysParseExact ? (ae(this, "_weekdaysRegex") || Pu.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (ae(this, "_weekdaysRegex") || (this._weekdaysRegex = Bg), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function Qg(e) {
  return this._weekdaysParseExact ? (ae(this, "_weekdaysRegex") || Pu.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (ae(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = jg), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function Zg(e) {
  return this._weekdaysParseExact ? (ae(this, "_weekdaysRegex") || Pu.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (ae(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Fg), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function Pu() {
  function e(c, l) {
    return l.length - c.length;
  }
  var n = [], t = [], r = [], o = [], i, s, a, u, _;
  for (i = 0; i < 7; i++)
    s = Mn([2e3, 1]).day(i), a = en(this.weekdaysMin(s, "")), u = en(this.weekdaysShort(s, "")), _ = en(this.weekdays(s, "")), n.push(a), t.push(u), r.push(_), o.push(a), o.push(u), o.push(_);
  n.sort(e), t.sort(e), r.sort(e), o.sort(e), this._weekdaysRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp(
    "^(" + r.join("|") + ")",
    "i"
  ), this._weekdaysShortStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  ), this._weekdaysMinStrictRegex = new RegExp(
    "^(" + n.join("|") + ")",
    "i"
  );
}
function wu() {
  return this.hours() % 12 || 12;
}
function e1() {
  return this.hours() || 24;
}
x("H", ["HH", 2], 0, "hour");
x("h", ["hh", 2], 0, wu);
x("k", ["kk", 2], 0, e1);
x("hmm", 0, 0, function() {
  return "" + wu.apply(this) + Hn(this.minutes(), 2);
});
x("hmmss", 0, 0, function() {
  return "" + wu.apply(this) + Hn(this.minutes(), 2) + Hn(this.seconds(), 2);
});
x("Hmm", 0, 0, function() {
  return "" + this.hours() + Hn(this.minutes(), 2);
});
x("Hmmss", 0, 0, function() {
  return "" + this.hours() + Hn(this.minutes(), 2) + Hn(this.seconds(), 2);
});
function wf(e, n) {
  x(e, 0, 0, function() {
    return this.localeData().meridiem(
      this.hours(),
      this.minutes(),
      n
    );
  });
}
wf("a", !0);
wf("A", !1);
je("hour", "h");
Fe("hour", 13);
function Mf(e, n) {
  return n._meridiemParse;
}
y("a", Mf);
y("A", Mf);
y("H", Oe);
y("h", Oe);
y("k", Oe);
y("HH", Oe, rn);
y("hh", Oe, rn);
y("kk", Oe, rn);
y("hmm", Af);
y("hmmss", Sf);
y("Hmm", Af);
y("Hmmss", Sf);
pe(["H", "HH"], De);
pe(["k", "kk"], function(e, n, t) {
  var r = Q(e);
  n[De] = r === 24 ? 0 : r;
});
pe(["a", "A"], function(e, n, t) {
  t._isPm = t._locale.isPM(e), t._meridiem = e;
});
pe(["h", "hh"], function(e, n, t) {
  n[De] = Q(e), z(t).bigHour = !0;
});
pe("hmm", function(e, n, t) {
  var r = e.length - 2;
  n[De] = Q(e.substr(0, r)), n[Tn] = Q(e.substr(r)), z(t).bigHour = !0;
});
pe("hmmss", function(e, n, t) {
  var r = e.length - 4, o = e.length - 2;
  n[De] = Q(e.substr(0, r)), n[Tn] = Q(e.substr(r, 2)), n[Wn] = Q(e.substr(o)), z(t).bigHour = !0;
});
pe("Hmm", function(e, n, t) {
  var r = e.length - 2;
  n[De] = Q(e.substr(0, r)), n[Tn] = Q(e.substr(r));
});
pe("Hmmss", function(e, n, t) {
  var r = e.length - 4, o = e.length - 2;
  n[De] = Q(e.substr(0, r)), n[Tn] = Q(e.substr(r, 2)), n[Wn] = Q(e.substr(o));
});
function n1(e) {
  return (e + "").toLowerCase().charAt(0) === "p";
}
var t1 = /[ap]\.?m?\.?/i, r1 = pr("Hours", !0);
function o1(e, n, t) {
  return e > 11 ? t ? "pm" : "PM" : t ? "am" : "AM";
}
var kf = {
  calendar: Kb,
  longDateFormat: qb,
  invalidDate: Zb,
  ordinal: ng,
  dayOfMonthOrdinalParse: tg,
  relativeTime: og,
  months: Eg,
  monthsShort: vf,
  week: Ug,
  weekdays: xg,
  weekdaysMin: Lg,
  weekdaysShort: Pf,
  meridiemParse: t1
}, Re = {}, Ar = {}, ro;
function i1(e, n) {
  var t, r = Math.min(e.length, n.length);
  for (t = 0; t < r; t += 1)
    if (e[t] !== n[t])
      return t;
  return r;
}
function El(e) {
  return e && e.toLowerCase().replace("_", "-");
}
function s1(e) {
  for (var n = 0, t, r, o, i; n < e.length; ) {
    for (i = El(e[n]).split("-"), t = i.length, r = El(e[n + 1]), r = r ? r.split("-") : null; t > 0; ) {
      if (o = Es(i.slice(0, t).join("-")), o)
        return o;
      if (r && r.length >= t && i1(i, r) >= t - 1)
        break;
      t--;
    }
    n++;
  }
  return ro;
}
function a1(e) {
  return e.match("^[^/\\\\]*$") != null;
}
function Es(e) {
  var n = null, t;
  if (Re[e] === void 0 && typeof module < "u" && module && module.exports && a1(e))
    try {
      n = ro._abbr, t = Vb, t("./locale/" + e), pt(n);
    } catch {
      Re[e] = null;
    }
  return Re[e];
}
function pt(e, n) {
  var t;
  return e && (Ke(n) ? t = Zn(e) : t = Mu(e, n), t ? ro = t : typeof console < "u" && console.warn && console.warn(
    "Locale " + e + " not found. Did you forget to load it?"
  )), ro._abbr;
}
function Mu(e, n) {
  if (n !== null) {
    var t, r = kf;
    if (n.abbr = e, Re[e] != null)
      Of(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ), r = Re[e]._config;
    else if (n.parentLocale != null)
      if (Re[n.parentLocale] != null)
        r = Re[n.parentLocale]._config;
      else if (t = Es(n.parentLocale), t != null)
        r = t._config;
      else
        return Ar[n.parentLocale] || (Ar[n.parentLocale] = []), Ar[n.parentLocale].push({
          name: e,
          config: n
        }), null;
    return Re[e] = new Gu(Ua(r, n)), Ar[e] && Ar[e].forEach(function(o) {
      Mu(o.name, o.config);
    }), pt(e), Re[e];
  } else
    return delete Re[e], null;
}
function u1(e, n) {
  if (n != null) {
    var t, r, o = kf;
    Re[e] != null && Re[e].parentLocale != null ? Re[e].set(Ua(Re[e]._config, n)) : (r = Es(e), r != null && (o = r._config), n = Ua(o, n), r == null && (n.abbr = e), t = new Gu(n), t.parentLocale = Re[e], Re[e] = t), pt(e);
  } else
    Re[e] != null && (Re[e].parentLocale != null ? (Re[e] = Re[e].parentLocale, e === pt() && pt(e)) : Re[e] != null && delete Re[e]);
  return Re[e];
}
function Zn(e) {
  var n;
  if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
    return ro;
  if (!gn(e)) {
    if (n = Es(e), n)
      return n;
    e = [e];
  }
  return s1(e);
}
function _1() {
  return ya(Re);
}
function ku(e) {
  var n, t = e._a;
  return t && z(e).overflow === -2 && (n = t[Vn] < 0 || t[Vn] > 11 ? Vn : t[vn] < 1 || t[vn] > Ts(t[Be], t[Vn]) ? vn : t[De] < 0 || t[De] > 24 || t[De] === 24 && (t[Tn] !== 0 || t[Wn] !== 0 || t[St] !== 0) ? De : t[Tn] < 0 || t[Tn] > 59 ? Tn : t[Wn] < 0 || t[Wn] > 59 ? Wn : t[St] < 0 || t[St] > 999 ? St : -1, z(e)._overflowDayOfYear && (n < Be || n > vn) && (n = vn), z(e)._overflowWeeks && n === -1 && (n = mg), z(e)._overflowWeekday && n === -1 && (n = pg), z(e).overflow = n), e;
}
var l1 = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, c1 = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, d1 = /Z|[+-]\d\d(?::?\d\d)?/, zo = [
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
], Qs = [
  ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
  ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
  ["HH:mm:ss", /\d\d:\d\d:\d\d/],
  ["HH:mm", /\d\d:\d\d/],
  ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
  ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
  ["HHmmss", /\d\d\d\d\d\d/],
  ["HHmm", /\d\d\d\d/],
  ["HH", /\d\d/]
], f1 = /^\/?Date\((-?\d+)/i, h1 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, m1 = {
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
function xf(e) {
  var n, t, r = e._i, o = l1.exec(r) || c1.exec(r), i, s, a, u, _ = zo.length, c = Qs.length;
  if (o) {
    for (z(e).iso = !0, n = 0, t = _; n < t; n++)
      if (zo[n][1].exec(o[1])) {
        s = zo[n][0], i = zo[n][2] !== !1;
        break;
      }
    if (s == null) {
      e._isValid = !1;
      return;
    }
    if (o[3]) {
      for (n = 0, t = c; n < t; n++)
        if (Qs[n][1].exec(o[3])) {
          a = (o[2] || " ") + Qs[n][0];
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
      if (d1.exec(o[4]))
        u = "Z";
      else {
        e._isValid = !1;
        return;
      }
    e._f = s + (a || "") + (u || ""), Lu(e);
  } else
    e._isValid = !1;
}
function p1(e, n, t, r, o, i) {
  var s = [
    T1(e),
    vf.indexOf(n),
    parseInt(t, 10),
    parseInt(r, 10),
    parseInt(o, 10)
  ];
  return i && s.push(parseInt(i, 10)), s;
}
function T1(e) {
  var n = parseInt(e, 10);
  return n <= 49 ? 2e3 + n : n <= 999 ? 1900 + n : n;
}
function E1(e) {
  return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function O1(e, n, t) {
  if (e) {
    var r = Pf.indexOf(e), o = new Date(
      n[0],
      n[1],
      n[2]
    ).getDay();
    if (r !== o)
      return z(t).weekdayMismatch = !0, t._isValid = !1, !1;
  }
  return !0;
}
function R1(e, n, t) {
  if (e)
    return m1[e];
  if (n)
    return 0;
  var r = parseInt(t, 10), o = r % 100, i = (r - o) / 100;
  return i * 60 + o;
}
function Lf(e) {
  var n = h1.exec(E1(e._i)), t;
  if (n) {
    if (t = p1(
      n[4],
      n[3],
      n[2],
      n[5],
      n[6],
      n[7]
    ), !O1(n[1], t, e))
      return;
    e._a = t, e._tzm = R1(n[8], n[9], n[10]), e._d = no.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), z(e).rfc2822 = !0;
  } else
    e._isValid = !1;
}
function b1(e) {
  var n = f1.exec(e._i);
  if (n !== null) {
    e._d = /* @__PURE__ */ new Date(+n[1]);
    return;
  }
  if (xf(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  if (Lf(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  e._strict ? e._isValid = !1 : D.createFromInputFallback(e);
}
D.createFromInputFallback = fn(
  "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  function(e) {
    e._d = /* @__PURE__ */ new Date(e._i + (e._useUTC ? " UTC" : ""));
  }
);
function Bt(e, n, t) {
  return e ?? n ?? t;
}
function g1(e) {
  var n = new Date(D.now());
  return e._useUTC ? [
    n.getUTCFullYear(),
    n.getUTCMonth(),
    n.getUTCDate()
  ] : [n.getFullYear(), n.getMonth(), n.getDate()];
}
function xu(e) {
  var n, t, r = [], o, i, s;
  if (!e._d) {
    for (o = g1(e), e._w && e._a[vn] == null && e._a[Vn] == null && N1(e), e._dayOfYear != null && (s = Bt(e._a[Be], o[Be]), (e._dayOfYear > Br(s) || e._dayOfYear === 0) && (z(e)._overflowDayOfYear = !0), t = no(s, 0, e._dayOfYear), e._a[Vn] = t.getUTCMonth(), e._a[vn] = t.getUTCDate()), n = 0; n < 3 && e._a[n] == null; ++n)
      e._a[n] = r[n] = o[n];
    for (; n < 7; n++)
      e._a[n] = r[n] = e._a[n] == null ? n === 2 ? 1 : 0 : e._a[n];
    e._a[De] === 24 && e._a[Tn] === 0 && e._a[Wn] === 0 && e._a[St] === 0 && (e._nextDay = !0, e._a[De] = 0), e._d = (e._useUTC ? no : Cg).apply(
      null,
      r
    ), i = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[De] = 24), e._w && typeof e._w.d < "u" && e._w.d !== i && (z(e).weekdayMismatch = !0);
  }
}
function N1(e) {
  var n, t, r, o, i, s, a, u, _;
  n = e._w, n.GG != null || n.W != null || n.E != null ? (i = 1, s = 4, t = Bt(
    n.GG,
    e._a[Be],
    to(Ee(), 1, 4).year
  ), r = Bt(n.W, 1), o = Bt(n.E, 1), (o < 1 || o > 7) && (u = !0)) : (i = e._locale._week.dow, s = e._locale._week.doy, _ = to(Ee(), i, s), t = Bt(n.gg, e._a[Be], _.year), r = Bt(n.w, _.week), n.d != null ? (o = n.d, (o < 0 || o > 6) && (u = !0)) : n.e != null ? (o = n.e + i, (n.e < 0 || n.e > 6) && (u = !0)) : o = i), r < 1 || r > $n(t, i, s) ? z(e)._overflowWeeks = !0 : u != null ? z(e)._overflowWeekday = !0 : (a = Hf(t, r, o, i, s), e._a[Be] = a.year, e._dayOfYear = a.dayOfYear);
}
D.ISO_8601 = function() {
};
D.RFC_2822 = function() {
};
function Lu(e) {
  if (e._f === D.ISO_8601) {
    xf(e);
    return;
  }
  if (e._f === D.RFC_2822) {
    Lf(e);
    return;
  }
  e._a = [], z(e).empty = !0;
  var n = "" + e._i, t, r, o, i, s, a = n.length, u = 0, _, c;
  for (o = Rf(e._f, e._locale).match(Cu) || [], c = o.length, t = 0; t < c; t++)
    i = o[t], r = (n.match(dg(i, e)) || [])[0], r && (s = n.substr(0, n.indexOf(r)), s.length > 0 && z(e).unusedInput.push(s), n = n.slice(
      n.indexOf(r) + r.length
    ), u += r.length), $t[i] ? (r ? z(e).empty = !1 : z(e).unusedTokens.push(i), hg(i, r, e)) : e._strict && !r && z(e).unusedTokens.push(i);
  z(e).charsLeftOver = a - u, n.length > 0 && z(e).unusedInput.push(n), e._a[De] <= 12 && z(e).bigHour === !0 && e._a[De] > 0 && (z(e).bigHour = void 0), z(e).parsedDateParts = e._a.slice(0), z(e).meridiem = e._meridiem, e._a[De] = I1(
    e._locale,
    e._a[De],
    e._meridiem
  ), _ = z(e).era, _ !== null && (e._a[Be] = e._locale.erasConvertYear(_, e._a[Be])), xu(e), ku(e);
}
function I1(e, n, t) {
  var r;
  return t == null ? n : e.meridiemHour != null ? e.meridiemHour(n, t) : (e.isPM != null && (r = e.isPM(t), r && n < 12 && (n += 12), !r && n === 12 && (n = 0)), n);
}
function A1(e) {
  var n, t, r, o, i, s, a = !1, u = e._f.length;
  if (u === 0) {
    z(e).invalidFormat = !0, e._d = /* @__PURE__ */ new Date(NaN);
    return;
  }
  for (o = 0; o < u; o++)
    i = 0, s = !1, n = vu({}, e), e._useUTC != null && (n._useUTC = e._useUTC), n._f = e._f[o], Lu(n), Su(n) && (s = !0), i += z(n).charsLeftOver, i += z(n).unusedTokens.length * 10, z(n).score = i, a ? i < r && (r = i, t = n) : (r == null || i < r || s) && (r = i, t = n, s && (a = !0));
  ut(e, t || n);
}
function S1(e) {
  if (!e._d) {
    var n = Du(e._i), t = n.day === void 0 ? n.date : n.day;
    e._a = Tf(
      [n.year, n.month, t, n.hour, n.minute, n.second, n.millisecond],
      function(r) {
        return r && parseInt(r, 10);
      }
    ), xu(e);
  }
}
function v1(e) {
  var n = new Uo(ku(Bf(e)));
  return n._nextDay && (n.add(1, "d"), n._nextDay = void 0), n;
}
function Bf(e) {
  var n = e._i, t = e._f;
  return e._locale = e._locale || Zn(e._l), n === null || t === void 0 && n === "" ? ls({ nullInput: !0 }) : (typeof n == "string" && (e._i = n = e._locale.preparse(n)), Nn(n) ? new Uo(ku(n)) : (Do(n) ? e._d = n : gn(t) ? A1(e) : t ? Lu(e) : G1(e), Su(e) || (e._d = null), e));
}
function G1(e) {
  var n = e._i;
  Ke(n) ? e._d = new Date(D.now()) : Do(n) ? e._d = new Date(n.valueOf()) : typeof n == "string" ? b1(e) : gn(n) ? (e._a = Tf(n.slice(0), function(t) {
    return parseInt(t, 10);
  }), xu(e)) : Gt(n) ? S1(e) : Jn(n) ? e._d = new Date(n) : D.createFromInputFallback(e);
}
function jf(e, n, t, r, o) {
  var i = {};
  return (n === !0 || n === !1) && (r = n, n = void 0), (t === !0 || t === !1) && (r = t, t = void 0), (Gt(e) && Au(e) || gn(e) && e.length === 0) && (e = void 0), i._isAMomentObject = !0, i._useUTC = i._isUTC = o, i._l = t, i._i = e, i._f = n, i._strict = r, v1(i);
}
function Ee(e, n, t, r) {
  return jf(e, n, t, r, !1);
}
var C1 = fn(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = Ee.apply(null, arguments);
    return this.isValid() && e.isValid() ? e < this ? this : e : ls();
  }
), D1 = fn(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = Ee.apply(null, arguments);
    return this.isValid() && e.isValid() ? e > this ? this : e : ls();
  }
);
function Ff(e, n) {
  var t, r;
  if (n.length === 1 && gn(n[0]) && (n = n[0]), !n.length)
    return Ee();
  for (t = n[0], r = 1; r < n.length; ++r)
    (!n[r].isValid() || n[r][e](t)) && (t = n[r]);
  return t;
}
function U1() {
  var e = [].slice.call(arguments, 0);
  return Ff("isBefore", e);
}
function y1() {
  var e = [].slice.call(arguments, 0);
  return Ff("isAfter", e);
}
var H1 = function() {
  return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
}, Sr = [
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
function P1(e) {
  var n, t = !1, r, o = Sr.length;
  for (n in e)
    if (ae(e, n) && !(ve.call(Sr, n) !== -1 && (e[n] == null || !isNaN(e[n]))))
      return !1;
  for (r = 0; r < o; ++r)
    if (e[Sr[r]]) {
      if (t)
        return !1;
      parseFloat(e[Sr[r]]) !== Q(e[Sr[r]]) && (t = !0);
    }
  return !0;
}
function w1() {
  return this._isValid;
}
function M1() {
  return An(NaN);
}
function Os(e) {
  var n = Du(e), t = n.year || 0, r = n.quarter || 0, o = n.month || 0, i = n.week || n.isoWeek || 0, s = n.day || 0, a = n.hour || 0, u = n.minute || 0, _ = n.second || 0, c = n.millisecond || 0;
  this._isValid = P1(n), this._milliseconds = +c + _ * 1e3 + // 1000
  u * 6e4 + // 1000 * 60
  a * 1e3 * 60 * 60, this._days = +s + i * 7, this._months = +o + r * 3 + t * 12, this._data = {}, this._locale = Zn(), this._bubble();
}
function hi(e) {
  return e instanceof Os;
}
function Pa(e) {
  return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
}
function k1(e, n, t) {
  var r = Math.min(e.length, n.length), o = Math.abs(e.length - n.length), i = 0, s;
  for (s = 0; s < r; s++)
    (t && e[s] !== n[s] || !t && Q(e[s]) !== Q(n[s])) && i++;
  return i + o;
}
function Vf(e, n) {
  x(e, 0, 0, function() {
    var t = this.utcOffset(), r = "+";
    return t < 0 && (t = -t, r = "-"), r + Hn(~~(t / 60), 2) + n + Hn(~~t % 60, 2);
  });
}
Vf("Z", ":");
Vf("ZZ", "");
y("Z", ps);
y("ZZ", ps);
pe(["Z", "ZZ"], function(e, n, t) {
  t._useUTC = !0, t._tzm = Bu(ps, e);
});
var x1 = /([\+\-]|\d\d)/gi;
function Bu(e, n) {
  var t = (n || "").match(e), r, o, i;
  return t === null ? null : (r = t[t.length - 1] || [], o = (r + "").match(x1) || ["-", 0, 0], i = +(o[1] * 60) + Q(o[2]), i === 0 ? 0 : o[0] === "+" ? i : -i);
}
function ju(e, n) {
  var t, r;
  return n._isUTC ? (t = n.clone(), r = (Nn(e) || Do(e) ? e.valueOf() : Ee(e).valueOf()) - t.valueOf(), t._d.setTime(t._d.valueOf() + r), D.updateOffset(t, !1), t) : Ee(e).local();
}
function wa(e) {
  return -Math.round(e._d.getTimezoneOffset());
}
D.updateOffset = function() {
};
function L1(e, n, t) {
  var r = this._offset || 0, o;
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    if (typeof e == "string") {
      if (e = Bu(ps, e), e === null)
        return this;
    } else
      Math.abs(e) < 16 && !t && (e = e * 60);
    return !this._isUTC && n && (o = wa(this)), this._offset = e, this._isUTC = !0, o != null && this.add(o, "m"), r !== e && (!n || this._changeInProgress ? Yf(
      this,
      An(e - r, "m"),
      1,
      !1
    ) : this._changeInProgress || (this._changeInProgress = !0, D.updateOffset(this, !0), this._changeInProgress = null)), this;
  } else
    return this._isUTC ? r : wa(this);
}
function B1(e, n) {
  return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, n), this) : -this.utcOffset();
}
function j1(e) {
  return this.utcOffset(0, e);
}
function F1(e) {
  return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(wa(this), "m")), this;
}
function V1() {
  if (this._tzm != null)
    this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var e = Bu(lg, this._i);
    e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
  }
  return this;
}
function W1(e) {
  return this.isValid() ? (e = e ? Ee(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1;
}
function X1() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function Y1() {
  if (!Ke(this._isDSTShifted))
    return this._isDSTShifted;
  var e = {}, n;
  return vu(e, this), e = Bf(e), e._a ? (n = e._isUTC ? Mn(e._a) : Ee(e._a), this._isDSTShifted = this.isValid() && k1(e._a, n.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function K1() {
  return this.isValid() ? !this._isUTC : !1;
}
function $1() {
  return this.isValid() ? this._isUTC : !1;
}
function Wf() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var z1 = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, J1 = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function An(e, n) {
  var t = e, r = null, o, i, s;
  return hi(e) ? t = {
    ms: e._milliseconds,
    d: e._days,
    M: e._months
  } : Jn(e) || !isNaN(+e) ? (t = {}, n ? t[n] = +e : t.milliseconds = +e) : (r = z1.exec(e)) ? (o = r[1] === "-" ? -1 : 1, t = {
    y: 0,
    d: Q(r[vn]) * o,
    h: Q(r[De]) * o,
    m: Q(r[Tn]) * o,
    s: Q(r[Wn]) * o,
    ms: Q(Pa(r[St] * 1e3)) * o
    // the millisecond decimal point is included in the match
  }) : (r = J1.exec(e)) ? (o = r[1] === "-" ? -1 : 1, t = {
    y: It(r[2], o),
    M: It(r[3], o),
    w: It(r[4], o),
    d: It(r[5], o),
    h: It(r[6], o),
    m: It(r[7], o),
    s: It(r[8], o)
  }) : t == null ? t = {} : typeof t == "object" && ("from" in t || "to" in t) && (s = q1(
    Ee(t.from),
    Ee(t.to)
  ), t = {}, t.ms = s.milliseconds, t.M = s.months), i = new Os(t), hi(e) && ae(e, "_locale") && (i._locale = e._locale), hi(e) && ae(e, "_isValid") && (i._isValid = e._isValid), i;
}
An.fn = Os.prototype;
An.invalid = M1;
function It(e, n) {
  var t = e && parseFloat(e.replace(",", "."));
  return (isNaN(t) ? 0 : t) * n;
}
function Ol(e, n) {
  var t = {};
  return t.months = n.month() - e.month() + (n.year() - e.year()) * 12, e.clone().add(t.months, "M").isAfter(n) && --t.months, t.milliseconds = +n - +e.clone().add(t.months, "M"), t;
}
function q1(e, n) {
  var t;
  return e.isValid() && n.isValid() ? (n = ju(n, e), e.isBefore(n) ? t = Ol(e, n) : (t = Ol(n, e), t.milliseconds = -t.milliseconds, t.months = -t.months), t) : { milliseconds: 0, months: 0 };
}
function Xf(e, n) {
  return function(t, r) {
    var o, i;
    return r !== null && !isNaN(+r) && (Of(
      n,
      "moment()." + n + "(period, number) is deprecated. Please use moment()." + n + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
    ), i = t, t = r, r = i), o = An(t, r), Yf(this, o, e), this;
  };
}
function Yf(e, n, t, r) {
  var o = n._milliseconds, i = Pa(n._days), s = Pa(n._months);
  e.isValid() && (r = r ?? !0, s && Cf(e, xi(e, "Month") + s * t), i && gf(e, "Date", xi(e, "Date") + i * t), o && e._d.setTime(e._d.valueOf() + o * t), r && D.updateOffset(e, i || s));
}
var Q1 = Xf(1, "add"), Z1 = Xf(-1, "subtract");
function Kf(e) {
  return typeof e == "string" || e instanceof String;
}
function eN(e) {
  return Nn(e) || Do(e) || Kf(e) || Jn(e) || tN(e) || nN(e) || e === null || e === void 0;
}
function nN(e) {
  var n = Gt(e) && !Au(e), t = !1, r = [
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
  ], o, i, s = r.length;
  for (o = 0; o < s; o += 1)
    i = r[o], t = t || ae(e, i);
  return n && t;
}
function tN(e) {
  var n = gn(e), t = !1;
  return n && (t = e.filter(function(r) {
    return !Jn(r) && Kf(e);
  }).length === 0), n && t;
}
function rN(e) {
  var n = Gt(e) && !Au(e), t = !1, r = [
    "sameDay",
    "nextDay",
    "lastDay",
    "nextWeek",
    "lastWeek",
    "sameElse"
  ], o, i;
  for (o = 0; o < r.length; o += 1)
    i = r[o], t = t || ae(e, i);
  return n && t;
}
function oN(e, n) {
  var t = e.diff(n, "days", !0);
  return t < -6 ? "sameElse" : t < -1 ? "lastWeek" : t < 0 ? "lastDay" : t < 1 ? "sameDay" : t < 2 ? "nextDay" : t < 7 ? "nextWeek" : "sameElse";
}
function iN(e, n) {
  arguments.length === 1 && (arguments[0] ? eN(arguments[0]) ? (e = arguments[0], n = void 0) : rN(arguments[0]) && (n = arguments[0], e = void 0) : (e = void 0, n = void 0));
  var t = e || Ee(), r = ju(t, this).startOf("day"), o = D.calendarFormat(this, r) || "sameElse", i = n && (kn(n[o]) ? n[o].call(this, t) : n[o]);
  return this.format(
    i || this.localeData().calendar(o, this, Ee(t))
  );
}
function sN() {
  return new Uo(this);
}
function aN(e, n) {
  var t = Nn(e) ? e : Ee(e);
  return this.isValid() && t.isValid() ? (n = hn(n) || "millisecond", n === "millisecond" ? this.valueOf() > t.valueOf() : t.valueOf() < this.clone().startOf(n).valueOf()) : !1;
}
function uN(e, n) {
  var t = Nn(e) ? e : Ee(e);
  return this.isValid() && t.isValid() ? (n = hn(n) || "millisecond", n === "millisecond" ? this.valueOf() < t.valueOf() : this.clone().endOf(n).valueOf() < t.valueOf()) : !1;
}
function _N(e, n, t, r) {
  var o = Nn(e) ? e : Ee(e), i = Nn(n) ? n : Ee(n);
  return this.isValid() && o.isValid() && i.isValid() ? (r = r || "()", (r[0] === "(" ? this.isAfter(o, t) : !this.isBefore(o, t)) && (r[1] === ")" ? this.isBefore(i, t) : !this.isAfter(i, t))) : !1;
}
function lN(e, n) {
  var t = Nn(e) ? e : Ee(e), r;
  return this.isValid() && t.isValid() ? (n = hn(n) || "millisecond", n === "millisecond" ? this.valueOf() === t.valueOf() : (r = t.valueOf(), this.clone().startOf(n).valueOf() <= r && r <= this.clone().endOf(n).valueOf())) : !1;
}
function cN(e, n) {
  return this.isSame(e, n) || this.isAfter(e, n);
}
function dN(e, n) {
  return this.isSame(e, n) || this.isBefore(e, n);
}
function fN(e, n, t) {
  var r, o, i;
  if (!this.isValid())
    return NaN;
  if (r = ju(e, this), !r.isValid())
    return NaN;
  switch (o = (r.utcOffset() - this.utcOffset()) * 6e4, n = hn(n), n) {
    case "year":
      i = mi(this, r) / 12;
      break;
    case "month":
      i = mi(this, r);
      break;
    case "quarter":
      i = mi(this, r) / 3;
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
  return t ? i : on(i);
}
function mi(e, n) {
  if (e.date() < n.date())
    return -mi(n, e);
  var t = (n.year() - e.year()) * 12 + (n.month() - e.month()), r = e.clone().add(t, "months"), o, i;
  return n - r < 0 ? (o = e.clone().add(t - 1, "months"), i = (n - r) / (r - o)) : (o = e.clone().add(t + 1, "months"), i = (n - r) / (o - r)), -(t + i) || 0;
}
D.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
D.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function hN() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function mN(e) {
  if (!this.isValid())
    return null;
  var n = e !== !0, t = n ? this.clone().utc() : this;
  return t.year() < 0 || t.year() > 9999 ? fi(
    t,
    n ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
  ) : kn(Date.prototype.toISOString) ? n ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", fi(t, "Z")) : fi(
    t,
    n ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
  );
}
function pN() {
  if (!this.isValid())
    return "moment.invalid(/* " + this._i + " */)";
  var e = "moment", n = "", t, r, o, i;
  return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", n = "Z"), t = "[" + e + '("]', r = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", o = "-MM-DD[T]HH:mm:ss.SSS", i = n + '[")]', this.format(t + r + o + i);
}
function TN(e) {
  e || (e = this.isUtc() ? D.defaultFormatUtc : D.defaultFormat);
  var n = fi(this, e);
  return this.localeData().postformat(n);
}
function EN(e, n) {
  return this.isValid() && (Nn(e) && e.isValid() || Ee(e).isValid()) ? An({ to: this, from: e }).locale(this.locale()).humanize(!n) : this.localeData().invalidDate();
}
function ON(e) {
  return this.from(Ee(), e);
}
function RN(e, n) {
  return this.isValid() && (Nn(e) && e.isValid() || Ee(e).isValid()) ? An({ from: this, to: e }).locale(this.locale()).humanize(!n) : this.localeData().invalidDate();
}
function bN(e) {
  return this.to(Ee(), e);
}
function $f(e) {
  var n;
  return e === void 0 ? this._locale._abbr : (n = Zn(e), n != null && (this._locale = n), this);
}
var zf = fn(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function(e) {
    return e === void 0 ? this.localeData() : this.locale(e);
  }
);
function Jf() {
  return this._locale;
}
var ji = 1e3, zt = 60 * ji, Fi = 60 * zt, qf = (365 * 400 + 97) * 24 * Fi;
function Jt(e, n) {
  return (e % n + n) % n;
}
function Qf(e, n, t) {
  return e < 100 && e >= 0 ? new Date(e + 400, n, t) - qf : new Date(e, n, t).valueOf();
}
function Zf(e, n, t) {
  return e < 100 && e >= 0 ? Date.UTC(e + 400, n, t) - qf : Date.UTC(e, n, t);
}
function gN(e) {
  var n, t;
  if (e = hn(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (t = this._isUTC ? Zf : Qf, e) {
    case "year":
      n = t(this.year(), 0, 1);
      break;
    case "quarter":
      n = t(
        this.year(),
        this.month() - this.month() % 3,
        1
      );
      break;
    case "month":
      n = t(this.year(), this.month(), 1);
      break;
    case "week":
      n = t(
        this.year(),
        this.month(),
        this.date() - this.weekday()
      );
      break;
    case "isoWeek":
      n = t(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1)
      );
      break;
    case "day":
    case "date":
      n = t(this.year(), this.month(), this.date());
      break;
    case "hour":
      n = this._d.valueOf(), n -= Jt(
        n + (this._isUTC ? 0 : this.utcOffset() * zt),
        Fi
      );
      break;
    case "minute":
      n = this._d.valueOf(), n -= Jt(n, zt);
      break;
    case "second":
      n = this._d.valueOf(), n -= Jt(n, ji);
      break;
  }
  return this._d.setTime(n), D.updateOffset(this, !0), this;
}
function NN(e) {
  var n, t;
  if (e = hn(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (t = this._isUTC ? Zf : Qf, e) {
    case "year":
      n = t(this.year() + 1, 0, 1) - 1;
      break;
    case "quarter":
      n = t(
        this.year(),
        this.month() - this.month() % 3 + 3,
        1
      ) - 1;
      break;
    case "month":
      n = t(this.year(), this.month() + 1, 1) - 1;
      break;
    case "week":
      n = t(
        this.year(),
        this.month(),
        this.date() - this.weekday() + 7
      ) - 1;
      break;
    case "isoWeek":
      n = t(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1) + 7
      ) - 1;
      break;
    case "day":
    case "date":
      n = t(this.year(), this.month(), this.date() + 1) - 1;
      break;
    case "hour":
      n = this._d.valueOf(), n += Fi - Jt(
        n + (this._isUTC ? 0 : this.utcOffset() * zt),
        Fi
      ) - 1;
      break;
    case "minute":
      n = this._d.valueOf(), n += zt - Jt(n, zt) - 1;
      break;
    case "second":
      n = this._d.valueOf(), n += ji - Jt(n, ji) - 1;
      break;
  }
  return this._d.setTime(n), D.updateOffset(this, !0), this;
}
function IN() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function AN() {
  return Math.floor(this.valueOf() / 1e3);
}
function SN() {
  return new Date(this.valueOf());
}
function vN() {
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
function GN() {
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
function CN() {
  return this.isValid() ? this.toISOString() : null;
}
function DN() {
  return Su(this);
}
function UN() {
  return ut({}, z(this));
}
function yN() {
  return z(this).overflow;
}
function HN() {
  return {
    input: this._i,
    format: this._f,
    locale: this._locale,
    isUTC: this._isUTC,
    strict: this._strict
  };
}
x("N", 0, 0, "eraAbbr");
x("NN", 0, 0, "eraAbbr");
x("NNN", 0, 0, "eraAbbr");
x("NNNN", 0, 0, "eraName");
x("NNNNN", 0, 0, "eraNarrow");
x("y", ["y", 1], "yo", "eraYear");
x("y", ["yy", 2], 0, "eraYear");
x("y", ["yyy", 3], 0, "eraYear");
x("y", ["yyyy", 4], 0, "eraYear");
y("N", Fu);
y("NN", Fu);
y("NNN", Fu);
y("NNNN", WN);
y("NNNNN", XN);
pe(
  ["N", "NN", "NNN", "NNNN", "NNNNN"],
  function(e, n, t, r) {
    var o = t._locale.erasParse(e, r, t._strict);
    o ? z(t).era = o : z(t).invalidEra = e;
  }
);
y("y", Tr);
y("yy", Tr);
y("yyy", Tr);
y("yyyy", Tr);
y("yo", YN);
pe(["y", "yy", "yyy", "yyyy"], Be);
pe(["yo"], function(e, n, t, r) {
  var o;
  t._locale._eraYearOrdinalRegex && (o = e.match(t._locale._eraYearOrdinalRegex)), t._locale.eraYearOrdinalParse ? n[Be] = t._locale.eraYearOrdinalParse(e, o) : n[Be] = parseInt(e, 10);
});
function PN(e, n) {
  var t, r, o, i = this._eras || Zn("en")._eras;
  for (t = 0, r = i.length; t < r; ++t) {
    switch (typeof i[t].since) {
      case "string":
        o = D(i[t].since).startOf("day"), i[t].since = o.valueOf();
        break;
    }
    switch (typeof i[t].until) {
      case "undefined":
        i[t].until = 1 / 0;
        break;
      case "string":
        o = D(i[t].until).startOf("day").valueOf(), i[t].until = o.valueOf();
        break;
    }
  }
  return i;
}
function wN(e, n, t) {
  var r, o, i = this.eras(), s, a, u;
  for (e = e.toUpperCase(), r = 0, o = i.length; r < o; ++r)
    if (s = i[r].name.toUpperCase(), a = i[r].abbr.toUpperCase(), u = i[r].narrow.toUpperCase(), t)
      switch (n) {
        case "N":
        case "NN":
        case "NNN":
          if (a === e)
            return i[r];
          break;
        case "NNNN":
          if (s === e)
            return i[r];
          break;
        case "NNNNN":
          if (u === e)
            return i[r];
          break;
      }
    else if ([s, a, u].indexOf(e) >= 0)
      return i[r];
}
function MN(e, n) {
  var t = e.since <= e.until ? 1 : -1;
  return n === void 0 ? D(e.since).year() : D(e.since).year() + (n - e.offset) * t;
}
function kN() {
  var e, n, t, r = this.localeData().eras();
  for (e = 0, n = r.length; e < n; ++e)
    if (t = this.clone().startOf("day").valueOf(), r[e].since <= t && t <= r[e].until || r[e].until <= t && t <= r[e].since)
      return r[e].name;
  return "";
}
function xN() {
  var e, n, t, r = this.localeData().eras();
  for (e = 0, n = r.length; e < n; ++e)
    if (t = this.clone().startOf("day").valueOf(), r[e].since <= t && t <= r[e].until || r[e].until <= t && t <= r[e].since)
      return r[e].narrow;
  return "";
}
function LN() {
  var e, n, t, r = this.localeData().eras();
  for (e = 0, n = r.length; e < n; ++e)
    if (t = this.clone().startOf("day").valueOf(), r[e].since <= t && t <= r[e].until || r[e].until <= t && t <= r[e].since)
      return r[e].abbr;
  return "";
}
function BN() {
  var e, n, t, r, o = this.localeData().eras();
  for (e = 0, n = o.length; e < n; ++e)
    if (t = o[e].since <= o[e].until ? 1 : -1, r = this.clone().startOf("day").valueOf(), o[e].since <= r && r <= o[e].until || o[e].until <= r && r <= o[e].since)
      return (this.year() - D(o[e].since).year()) * t + o[e].offset;
  return this.year();
}
function jN(e) {
  return ae(this, "_erasNameRegex") || Vu.call(this), e ? this._erasNameRegex : this._erasRegex;
}
function FN(e) {
  return ae(this, "_erasAbbrRegex") || Vu.call(this), e ? this._erasAbbrRegex : this._erasRegex;
}
function VN(e) {
  return ae(this, "_erasNarrowRegex") || Vu.call(this), e ? this._erasNarrowRegex : this._erasRegex;
}
function Fu(e, n) {
  return n.erasAbbrRegex(e);
}
function WN(e, n) {
  return n.erasNameRegex(e);
}
function XN(e, n) {
  return n.erasNarrowRegex(e);
}
function YN(e, n) {
  return n._eraYearOrdinalRegex || Tr;
}
function Vu() {
  var e = [], n = [], t = [], r = [], o, i, s = this.eras();
  for (o = 0, i = s.length; o < i; ++o)
    n.push(en(s[o].name)), e.push(en(s[o].abbr)), t.push(en(s[o].narrow)), r.push(en(s[o].name)), r.push(en(s[o].abbr)), r.push(en(s[o].narrow));
  this._erasRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + n.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
x(0, ["gg", 2], 0, function() {
  return this.weekYear() % 100;
});
x(0, ["GG", 2], 0, function() {
  return this.isoWeekYear() % 100;
});
function Rs(e, n) {
  x(0, [e, e.length], 0, n);
}
Rs("gggg", "weekYear");
Rs("ggggg", "weekYear");
Rs("GGGG", "isoWeekYear");
Rs("GGGGG", "isoWeekYear");
je("weekYear", "gg");
je("isoWeekYear", "GG");
Fe("weekYear", 1);
Fe("isoWeekYear", 1);
y("G", ms);
y("g", ms);
y("GG", Oe, rn);
y("gg", Oe, rn);
y("GGGG", yu, Uu);
y("gggg", yu, Uu);
y("GGGGG", hs, ds);
y("ggggg", hs, ds);
Ho(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(e, n, t, r) {
    n[r.substr(0, 2)] = Q(e);
  }
);
Ho(["gg", "GG"], function(e, n, t, r) {
  n[r] = D.parseTwoDigitYear(e);
});
function KN(e) {
  return eh.call(
    this,
    e,
    this.week(),
    this.weekday(),
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function $N(e) {
  return eh.call(
    this,
    e,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function zN() {
  return $n(this.year(), 1, 4);
}
function JN() {
  return $n(this.isoWeekYear(), 1, 4);
}
function qN() {
  var e = this.localeData()._week;
  return $n(this.year(), e.dow, e.doy);
}
function QN() {
  var e = this.localeData()._week;
  return $n(this.weekYear(), e.dow, e.doy);
}
function eh(e, n, t, r, o) {
  var i;
  return e == null ? to(this, r, o).year : (i = $n(e, r, o), n > i && (n = i), ZN.call(this, e, n, t, r, o));
}
function ZN(e, n, t, r, o) {
  var i = Hf(e, n, t, r, o), s = no(i.year, 0, i.dayOfYear);
  return this.year(s.getUTCFullYear()), this.month(s.getUTCMonth()), this.date(s.getUTCDate()), this;
}
x("Q", 0, "Qo", "quarter");
je("quarter", "Q");
Fe("quarter", 7);
y("Q", Nf);
pe("Q", function(e, n) {
  n[Vn] = (Q(e) - 1) * 3;
});
function eI(e) {
  return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3);
}
x("D", ["DD", 2], "Do", "date");
je("date", "D");
Fe("date", 9);
y("D", Oe);
y("DD", Oe, rn);
y("Do", function(e, n) {
  return e ? n._dayOfMonthOrdinalParse || n._ordinalParse : n._dayOfMonthOrdinalParseLenient;
});
pe(["D", "DD"], vn);
pe("Do", function(e, n) {
  n[vn] = Q(e.match(Oe)[0]);
});
var nh = pr("Date", !0);
x("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
je("dayOfYear", "DDD");
Fe("dayOfYear", 4);
y("DDD", fs);
y("DDDD", If);
pe(["DDD", "DDDD"], function(e, n, t) {
  t._dayOfYear = Q(e);
});
function nI(e) {
  var n = Math.round(
    (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
  ) + 1;
  return e == null ? n : this.add(e - n, "d");
}
x("m", ["mm", 2], 0, "minute");
je("minute", "m");
Fe("minute", 14);
y("m", Oe);
y("mm", Oe, rn);
pe(["m", "mm"], Tn);
var tI = pr("Minutes", !1);
x("s", ["ss", 2], 0, "second");
je("second", "s");
Fe("second", 15);
y("s", Oe);
y("ss", Oe, rn);
pe(["s", "ss"], Wn);
var rI = pr("Seconds", !1);
x("S", 0, 0, function() {
  return ~~(this.millisecond() / 100);
});
x(0, ["SS", 2], 0, function() {
  return ~~(this.millisecond() / 10);
});
x(0, ["SSS", 3], 0, "millisecond");
x(0, ["SSSS", 4], 0, function() {
  return this.millisecond() * 10;
});
x(0, ["SSSSS", 5], 0, function() {
  return this.millisecond() * 100;
});
x(0, ["SSSSSS", 6], 0, function() {
  return this.millisecond() * 1e3;
});
x(0, ["SSSSSSS", 7], 0, function() {
  return this.millisecond() * 1e4;
});
x(0, ["SSSSSSSS", 8], 0, function() {
  return this.millisecond() * 1e5;
});
x(0, ["SSSSSSSSS", 9], 0, function() {
  return this.millisecond() * 1e6;
});
je("millisecond", "ms");
Fe("millisecond", 16);
y("S", fs, Nf);
y("SS", fs, rn);
y("SSS", fs, If);
var _t, th;
for (_t = "SSSS"; _t.length <= 9; _t += "S")
  y(_t, Tr);
function oI(e, n) {
  n[St] = Q(("0." + e) * 1e3);
}
for (_t = "S"; _t.length <= 9; _t += "S")
  pe(_t, oI);
th = pr("Milliseconds", !1);
x("z", 0, 0, "zoneAbbr");
x("zz", 0, 0, "zoneName");
function iI() {
  return this._isUTC ? "UTC" : "";
}
function sI() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var A = Uo.prototype;
A.add = Q1;
A.calendar = iN;
A.clone = sN;
A.diff = fN;
A.endOf = NN;
A.format = TN;
A.from = EN;
A.fromNow = ON;
A.to = RN;
A.toNow = bN;
A.get = ug;
A.invalidAt = yN;
A.isAfter = aN;
A.isBefore = uN;
A.isBetween = _N;
A.isSame = lN;
A.isSameOrAfter = cN;
A.isSameOrBefore = dN;
A.isValid = DN;
A.lang = zf;
A.locale = $f;
A.localeData = Jf;
A.max = D1;
A.min = C1;
A.parsingFlags = UN;
A.set = _g;
A.startOf = gN;
A.subtract = Z1;
A.toArray = vN;
A.toObject = GN;
A.toDate = SN;
A.toISOString = mN;
A.inspect = pN;
typeof Symbol < "u" && Symbol.for != null && (A[Symbol.for("nodejs.util.inspect.custom")] = function() {
  return "Moment<" + this.format() + ">";
});
A.toJSON = CN;
A.toString = hN;
A.unix = AN;
A.valueOf = IN;
A.creationData = HN;
A.eraName = kN;
A.eraNarrow = xN;
A.eraAbbr = LN;
A.eraYear = BN;
A.year = yf;
A.isLeapYear = Gg;
A.weekYear = KN;
A.isoWeekYear = $N;
A.quarter = A.quarters = eI;
A.month = Df;
A.daysInMonth = Ag;
A.week = A.weeks = Pg;
A.isoWeek = A.isoWeeks = wg;
A.weeksInYear = qN;
A.weeksInWeekYear = QN;
A.isoWeeksInYear = zN;
A.isoWeeksInISOWeekYear = JN;
A.date = nh;
A.day = A.days = $g;
A.weekday = zg;
A.isoWeekday = Jg;
A.dayOfYear = nI;
A.hour = A.hours = r1;
A.minute = A.minutes = tI;
A.second = A.seconds = rI;
A.millisecond = A.milliseconds = th;
A.utcOffset = L1;
A.utc = j1;
A.local = F1;
A.parseZone = V1;
A.hasAlignedHourOffset = W1;
A.isDST = X1;
A.isLocal = K1;
A.isUtcOffset = $1;
A.isUtc = Wf;
A.isUTC = Wf;
A.zoneAbbr = iI;
A.zoneName = sI;
A.dates = fn(
  "dates accessor is deprecated. Use date instead.",
  nh
);
A.months = fn(
  "months accessor is deprecated. Use month instead",
  Df
);
A.years = fn(
  "years accessor is deprecated. Use year instead",
  yf
);
A.zone = fn(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  B1
);
A.isDSTShifted = fn(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  Y1
);
function aI(e) {
  return Ee(e * 1e3);
}
function uI() {
  return Ee.apply(null, arguments).parseZone();
}
function rh(e) {
  return e;
}
var ue = Gu.prototype;
ue.calendar = $b;
ue.longDateFormat = Qb;
ue.invalidDate = eg;
ue.ordinal = rg;
ue.preparse = rh;
ue.postformat = rh;
ue.relativeTime = ig;
ue.pastFuture = sg;
ue.set = Yb;
ue.eras = PN;
ue.erasParse = wN;
ue.erasConvertYear = MN;
ue.erasAbbrRegex = FN;
ue.erasNameRegex = jN;
ue.erasNarrowRegex = VN;
ue.months = bg;
ue.monthsShort = gg;
ue.monthsParse = Ig;
ue.monthsRegex = vg;
ue.monthsShortRegex = Sg;
ue.week = Dg;
ue.firstDayOfYear = Hg;
ue.firstDayOfWeek = yg;
ue.weekdays = Vg;
ue.weekdaysMin = Xg;
ue.weekdaysShort = Wg;
ue.weekdaysParse = Kg;
ue.weekdaysRegex = qg;
ue.weekdaysShortRegex = Qg;
ue.weekdaysMinRegex = Zg;
ue.isPM = n1;
ue.meridiem = o1;
function Vi(e, n, t, r) {
  var o = Zn(), i = Mn().set(r, n);
  return o[t](i, e);
}
function oh(e, n, t) {
  if (Jn(e) && (n = e, e = void 0), e = e || "", n != null)
    return Vi(e, n, t, "month");
  var r, o = [];
  for (r = 0; r < 12; r++)
    o[r] = Vi(e, r, t, "month");
  return o;
}
function Wu(e, n, t, r) {
  typeof e == "boolean" ? (Jn(n) && (t = n, n = void 0), n = n || "") : (n = e, t = n, e = !1, Jn(n) && (t = n, n = void 0), n = n || "");
  var o = Zn(), i = e ? o._week.dow : 0, s, a = [];
  if (t != null)
    return Vi(n, (t + i) % 7, r, "day");
  for (s = 0; s < 7; s++)
    a[s] = Vi(n, (s + i) % 7, r, "day");
  return a;
}
function _I(e, n) {
  return oh(e, n, "months");
}
function lI(e, n) {
  return oh(e, n, "monthsShort");
}
function cI(e, n, t) {
  return Wu(e, n, t, "weekdays");
}
function dI(e, n, t) {
  return Wu(e, n, t, "weekdaysShort");
}
function fI(e, n, t) {
  return Wu(e, n, t, "weekdaysMin");
}
pt("en", {
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
    var n = e % 10, t = Q(e % 100 / 10) === 1 ? "th" : n === 1 ? "st" : n === 2 ? "nd" : n === 3 ? "rd" : "th";
    return e + t;
  }
});
D.lang = fn(
  "moment.lang is deprecated. Use moment.locale instead.",
  pt
);
D.langData = fn(
  "moment.langData is deprecated. Use moment.localeData instead.",
  Zn
);
var xn = Math.abs;
function hI() {
  var e = this._data;
  return this._milliseconds = xn(this._milliseconds), this._days = xn(this._days), this._months = xn(this._months), e.milliseconds = xn(e.milliseconds), e.seconds = xn(e.seconds), e.minutes = xn(e.minutes), e.hours = xn(e.hours), e.months = xn(e.months), e.years = xn(e.years), this;
}
function ih(e, n, t, r) {
  var o = An(n, t);
  return e._milliseconds += r * o._milliseconds, e._days += r * o._days, e._months += r * o._months, e._bubble();
}
function mI(e, n) {
  return ih(this, e, n, 1);
}
function pI(e, n) {
  return ih(this, e, n, -1);
}
function Rl(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function TI() {
  var e = this._milliseconds, n = this._days, t = this._months, r = this._data, o, i, s, a, u;
  return e >= 0 && n >= 0 && t >= 0 || e <= 0 && n <= 0 && t <= 0 || (e += Rl(Ma(t) + n) * 864e5, n = 0, t = 0), r.milliseconds = e % 1e3, o = on(e / 1e3), r.seconds = o % 60, i = on(o / 60), r.minutes = i % 60, s = on(i / 60), r.hours = s % 24, n += on(s / 24), u = on(sh(n)), t += u, n -= Rl(Ma(u)), a = on(t / 12), t %= 12, r.days = n, r.months = t, r.years = a, this;
}
function sh(e) {
  return e * 4800 / 146097;
}
function Ma(e) {
  return e * 146097 / 4800;
}
function EI(e) {
  if (!this.isValid())
    return NaN;
  var n, t, r = this._milliseconds;
  if (e = hn(e), e === "month" || e === "quarter" || e === "year")
    switch (n = this._days + r / 864e5, t = this._months + sh(n), e) {
      case "month":
        return t;
      case "quarter":
        return t / 3;
      case "year":
        return t / 12;
    }
  else
    switch (n = this._days + Math.round(Ma(this._months)), e) {
      case "week":
        return n / 7 + r / 6048e5;
      case "day":
        return n + r / 864e5;
      case "hour":
        return n * 24 + r / 36e5;
      case "minute":
        return n * 1440 + r / 6e4;
      case "second":
        return n * 86400 + r / 1e3;
      case "millisecond":
        return Math.floor(n * 864e5) + r;
      default:
        throw new Error("Unknown unit " + e);
    }
}
function OI() {
  return this.isValid() ? this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + Q(this._months / 12) * 31536e6 : NaN;
}
function et(e) {
  return function() {
    return this.as(e);
  };
}
var RI = et("ms"), bI = et("s"), gI = et("m"), NI = et("h"), II = et("d"), AI = et("w"), SI = et("M"), vI = et("Q"), GI = et("y");
function CI() {
  return An(this);
}
function DI(e) {
  return e = hn(e), this.isValid() ? this[e + "s"]() : NaN;
}
function Pt(e) {
  return function() {
    return this.isValid() ? this._data[e] : NaN;
  };
}
var UI = Pt("milliseconds"), yI = Pt("seconds"), HI = Pt("minutes"), PI = Pt("hours"), wI = Pt("days"), MI = Pt("months"), kI = Pt("years");
function xI() {
  return on(this.days() / 7);
}
var Ln = Math.round, Yt = {
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
function LI(e, n, t, r, o) {
  return o.relativeTime(n || 1, !!t, e, r);
}
function BI(e, n, t, r) {
  var o = An(e).abs(), i = Ln(o.as("s")), s = Ln(o.as("m")), a = Ln(o.as("h")), u = Ln(o.as("d")), _ = Ln(o.as("M")), c = Ln(o.as("w")), l = Ln(o.as("y")), m = i <= t.ss && ["s", i] || i < t.s && ["ss", i] || s <= 1 && ["m"] || s < t.m && ["mm", s] || a <= 1 && ["h"] || a < t.h && ["hh", a] || u <= 1 && ["d"] || u < t.d && ["dd", u];
  return t.w != null && (m = m || c <= 1 && ["w"] || c < t.w && ["ww", c]), m = m || _ <= 1 && ["M"] || _ < t.M && ["MM", _] || l <= 1 && ["y"] || ["yy", l], m[2] = n, m[3] = +e > 0, m[4] = r, LI.apply(null, m);
}
function jI(e) {
  return e === void 0 ? Ln : typeof e == "function" ? (Ln = e, !0) : !1;
}
function FI(e, n) {
  return Yt[e] === void 0 ? !1 : n === void 0 ? Yt[e] : (Yt[e] = n, e === "s" && (Yt.ss = n - 1), !0);
}
function VI(e, n) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var t = !1, r = Yt, o, i;
  return typeof e == "object" && (n = e, e = !1), typeof e == "boolean" && (t = e), typeof n == "object" && (r = Object.assign({}, Yt, n), n.s != null && n.ss == null && (r.ss = n.s - 1)), o = this.localeData(), i = BI(this, !t, r, o), t && (i = o.pastFuture(+this, i)), o.postformat(i);
}
var Zs = Math.abs;
function Mt(e) {
  return (e > 0) - (e < 0) || +e;
}
function bs() {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var e = Zs(this._milliseconds) / 1e3, n = Zs(this._days), t = Zs(this._months), r, o, i, s, a = this.asSeconds(), u, _, c, l;
  return a ? (r = on(e / 60), o = on(r / 60), e %= 60, r %= 60, i = on(t / 12), t %= 12, s = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", u = a < 0 ? "-" : "", _ = Mt(this._months) !== Mt(a) ? "-" : "", c = Mt(this._days) !== Mt(a) ? "-" : "", l = Mt(this._milliseconds) !== Mt(a) ? "-" : "", u + "P" + (i ? _ + i + "Y" : "") + (t ? _ + t + "M" : "") + (n ? c + n + "D" : "") + (o || r || e ? "T" : "") + (o ? l + o + "H" : "") + (r ? l + r + "M" : "") + (e ? l + s + "S" : "")) : "P0D";
}
var te = Os.prototype;
te.isValid = w1;
te.abs = hI;
te.add = mI;
te.subtract = pI;
te.as = EI;
te.asMilliseconds = RI;
te.asSeconds = bI;
te.asMinutes = gI;
te.asHours = NI;
te.asDays = II;
te.asWeeks = AI;
te.asMonths = SI;
te.asQuarters = vI;
te.asYears = GI;
te.valueOf = OI;
te._bubble = TI;
te.clone = CI;
te.get = DI;
te.milliseconds = UI;
te.seconds = yI;
te.minutes = HI;
te.hours = PI;
te.days = wI;
te.weeks = xI;
te.months = MI;
te.years = kI;
te.humanize = VI;
te.toISOString = bs;
te.toString = bs;
te.toJSON = bs;
te.locale = $f;
te.localeData = Jf;
te.toIsoString = fn(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  bs
);
te.lang = zf;
x("X", 0, 0, "unix");
x("x", 0, 0, "valueOf");
y("x", ms);
y("X", cg);
pe("X", function(e, n, t) {
  t._d = new Date(parseFloat(e) * 1e3);
});
pe("x", function(e, n, t) {
  t._d = new Date(Q(e));
});
//! moment.js
D.version = "2.29.4";
Wb(Ee);
D.fn = A;
D.min = U1;
D.max = y1;
D.now = H1;
D.utc = Mn;
D.unix = aI;
D.months = _I;
D.isDate = Do;
D.locale = pt;
D.invalid = ls;
D.duration = An;
D.isMoment = Nn;
D.weekdays = cI;
D.parseZone = uI;
D.localeData = Zn;
D.isDuration = hi;
D.monthsShort = lI;
D.weekdaysMin = fI;
D.defineLocale = Mu;
D.updateLocale = u1;
D.locales = _1;
D.weekdaysShort = dI;
D.normalizeUnits = hn;
D.relativeTimeRounding = jI;
D.relativeTimeThreshold = FI;
D.calendarFormat = oN;
D.prototype = A;
D.HTML5_FMT = {
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
class WI {
  constructor(n) {
    Rt(this), this.state = n, this.getters = n.getters, this.storage = n.storage;
  }
  addExecuteMessage(n) {
    console.log(n);
    const t = this.getters.getActiveTab();
    let r = n.output;
    n.error && (r = n.error.split("^")[1].split("at")[0]), this.state.executeMessages.push({
      message: r,
      isError: !!n.error,
      fileName: t.label,
      date: D().format("HH:mm")
    }), this.storage.set("EDITOR_EXECUTE_MESSAGES", this.state.executeMessages);
  }
  clearExecuteMessages() {
    this.state.executeMessages = [], this.storage.clear("EDITOR_EXECUTE_MESSAGES");
  }
}
const XI = (e) => {
  const { Spring: n } = us(), [t, r] = n.useSpring(() => ({
    opacity: 1,
    x: 0
  }));
  return ec(e, () => ({
    close: async () => (r.start({
      opacity: 0,
      x: -20,
      immediate: !1,
      config: n.config.wobbly
    }), new Promise(
      (o) => setTimeout(() => {
        r.start({
          opacity: 1,
          x: 0,
          immediate: !1,
          config: n.config.wobbly
        }), o(!0);
      }, 300)
    ))
  })), {
    ref: e,
    spring: t,
    SpringDiv: n.a.div
  };
}, YI = Ce.div`
  color: ${tn("light")};
  font-size: ${({ theme: e }) => e.fz7};
  margin-top: 4px;
  font-weight: normal;
  height: 200px;
  overflow-y: auto;
  overflow-x: hidden;
  ${Nu()};

  span:first-child {
    margin-top: 22px;
  }
`, KI = Ce.span`
  color: ${tn("light")};
  display: block;
  margin-top: 17px;
  cursor: pointer;
  font-size: ${({ theme: e }) => e.fz7};
  em {
    color: ${({ $isError: e }) => e ? "red" : tn("light")};
    font-weight: bold;
    font-style: italic;
  }
`, $I = Zt(
  ({ children: e }, n) => {
    const t = Z(null), r = () => {
      t.current.scrollTo(0, t.current.scrollHeight);
    };
    return ec(n, () => ({
      scrollToBottom: () => {
        r(), setTimeout(r, 50);
      }
    })), /* @__PURE__ */ V(YI, { ref: t, children: e });
  }
), zI = Qn(
  Zt((e, n) => {
    const t = Z(null), r = Z(null), { isTerminalOpened: o } = sT(), { executeMessages: i } = hr(), { spring: s, SpringDiv: a } = XI(n), u = () => {
      r.current.scrollIntoView({ behavior: "smooth" });
    };
    return Ge(() => {
      t.current.scrollToBottom();
    }, [i.length, o]), /* @__PURE__ */ nn($I, { ref: t, children: [
      "CodeGear output console.",
      /* @__PURE__ */ nn(a, { style: { ...s }, children: [
        i.map((_, c) => /* @__PURE__ */ nn(
          KI,
          {
            $isError: _.isError,
            onClick: u,
            children: [
              "User [",
              _.fileName,
              "] [",
              _.date,
              "] > ",
              /* @__PURE__ */ V("em", { children: _.message })
            ]
          },
          c
        )),
        /* @__PURE__ */ V("div", { ref: r })
      ] })
    ] });
  })
), JI = [
  { label: "Terminal", key: "terminal" },
  { label: "Test cases", key: "test_cases" }
], qI = () => {
  const e = yt(), n = e.state.selectedTerminalTab, t = Et(
    (r) => {
      e.update({
        selectedTerminalTab: r
      });
    },
    [e]
  );
  return {
    key: n,
    set: t,
    val: JI
  };
}, QI = Ce.div`
  ${_f({
  right: "44px",
  top: "23px"
})}
  ${Ht("flex-end")};
  gap: 23px;
  ${cn("100px", "22px")};
  cursor: pointer;
  svg {
    path {
      stroke: ${tn("secondaryGrey")};
      ${({ theme: e }) => Ca(e.light)};
    }
    ${cn("22px")}
    color: ${tn("secondaryGrey")};
    ${({ theme: e }) => Ca(e.light)}
  }
`, ZI = Ce(rc)`
  ${sb(0, 6)};

  .ant-tabs-nav::before {
    border-bottom: none;
  }
  .ant-tabs-tab-active div {
    color: ${di("light")};
  }
  .ant-tabs-tab:hover,
  .ant-tabs-tab:active {
    color: ${tn("light")};
  }
  .ant-tabs-ink-bar {
    background: ${tn("light")};
  }
  .ant-tabs-tab {
    padding: 7px 0 !important;
  }

  font-size: ${({ theme: e }) => e.fz6};
`, eA = Ce.h3`
  color: ${tn("light")};
  font-size: ${({ theme: e }) => e.fz7};
`, H0 = Qn(() => {
  const e = yt(), { isTerminalOpened: n } = e.state, t = qI(), r = Nt(), o = Z(), i = (u) => {
    t.set(u);
  }, s = Et(() => {
    e.update({ isTerminalOpened: !1 });
  }, []), a = async () => {
    await o.current?.close(), r.terminal.clearExecuteMessages();
  };
  return /* @__PURE__ */ nn(cb, { onClose: s, isOpen: n, height: 300, children: [
    /* @__PURE__ */ V(
      ZI,
      {
        items: t.val,
        size: "large",
        onChange: i,
        activeKey: t.key
      }
    ),
    /* @__PURE__ */ V(Ra, { when: t.key === "terminal", children: /* @__PURE__ */ V(zI, { ref: o }) }),
    /* @__PURE__ */ V(Ra, { when: t.key === "test_cases", children: /* @__PURE__ */ V(eA, { children: "Test cases are not supported yet." }) }),
    /* @__PURE__ */ nn(QI, { children: [
      /* @__PURE__ */ V(sR, { onClick: a }),
      /* @__PURE__ */ V(iR, { onClick: s })
    ] })
  ] });
});
class nA {
  constructor(n) {
    Rt(this), this.state = n, this.getters = n.getters, this.tabs = new vb(n), this.editor = new Yp(n), this.terminal = new WI(n);
  }
  changeTheme(n) {
    this.state.theme = n, this.state.storage.set("EDITOR_THEME", n);
  }
  changeFontSize(n) {
    this.state.fontSize = n, this.state.storage.set("EDITOR_FONT_SIZE", n);
  }
  changeTabSize(n) {
    this.state.tabSize = n, this.state.storage.set("EDITOR_TAB_SIZE", n);
  }
  changeCustomBackground(n) {
    this.state.customBackground = n, this.state.storage.set("EDITOR_CUSTOM_BACKGROUND", n);
  }
  changeCustomColor(n) {
    this.state.customColor = n, this.state.storage.set("EDITOR_CUSTOM_COLOR", n);
  }
  setIsLocalStorageDisabled(n) {
    this.state.storage = new Kd(n);
  }
}
class tA {
  constructor(n) {
    this.state = n, Rt(this);
  }
  getActiveTab(n = this.state.activeKey) {
    return this.state.content.find((t) => t.key === n);
  }
  getActiveTabText() {
    return this.getActiveTab().content;
  }
  getTabIndex(n = this.state.activeKey) {
    return this.state.content.findIndex((t) => t.key === n);
  }
  getActiveLanguage() {
    return this.getActiveTab()?.lang;
  }
  isAllowedToExecute() {
    const n = this.getActiveLanguage();
    return mb.includes(n);
  }
}
const rA = `// Hello World! Here you can edit the code in 10 different languages. 😎

const camel = 'I like apples'

// Run the code and look in the terminal.
console.log(camel)

// You can edit and run the code in real time
// and your friends will see it! Sign in if you want to see more features.
`, oA = "javascript", iA = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMjMiIHZpZXdCb3g9IjAgMCAxNyAyMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0Ljk4OTcgMTUuNDA5NEwxNC40MjE2IDE1Ljc3NTJDMTQuNzcxMiAxNS40NTUxIDE1LjAzMzQgMTQuOTk3OCAxNS4wMzM0IDE0LjU0MDZDMTUuMDMzNCAxMy43NjMzIDE0LjY4MzggMTMuMTIzMSAxMy41NDc1IDEyLjU3NDRMMy44NDU3NSA4LjEzOTA3QzEuODc5MTcgNy4yMjQ1NiAwLjY1NTUxOCA2LjA4MTQ0IDAuNjU1NTE4IDQuMDIzODFDMC42NTU1MTggMi4xNDkwOCAxLjU3MzI1IDAuOTE0NTAyIDIuOTcxNzEgMEMyLjc1MzIgMC4zMjAwNzYgMi42MjIxIDAuNzMxNjAyIDIuNjIyMSAxLjIzNDU4QzIuNjIyMSAyLjM3NzcgMy41Mzk4NCAyLjg4MDY4IDQuNDU3NTcgMy4yOTIyMUwxMy44OTcyIDcuNjM2MDlDMTUuNjAxNSA4LjQxMzQyIDE3IDkuNjQ3OTkgMTcgMTEuNzk3MUMxNyAxMy41MzQ2IDE2LjIxMzQgMTQuNjMyIDE0Ljk4OTcgMTUuNDA5NFoiIGZpbGw9IiMwMTY4QTIiLz4KPHBhdGggZD0iTTEwLjU5MzMgMTEuMTM1OUwxMy42NTI0IDEyLjU1MzRDMTQuNzg4NyAxMy4xMDIxIDE1LjEzODMgMTMuNjk2NSAxNS4xMzgzIDE0LjUxOTZDMTUuMTM4MyAxNC45NzY4IDE0Ljg3NjEgMTUuNDM0MSAxNC41MjY0IDE1Ljc1NDJMOS4zNjk2MyAxMy4zNzY1TDEwLjI0MzcgMTIuODczNUMxMC45ODY2IDEyLjQ2MiAxMS4yMDUxIDEyLjE4NzYgMTEuMjA1MSAxMS45MTMzQzExLjI0ODggMTEuNTkzMiAxMS4wNzQgMTEuMzY0NiAxMC41OTMzIDExLjEzNTlaIiBmaWxsPSIjMDE2OEExIi8+CjxwYXRoIGQ9Ik01LjE1NjgxIDIyLjA4NTRDNC40NTc1OCAyMi40OTcgMy44NDU3NiAyMi43NzEzIDMuMTkwMjMgMjIuNzcxM0MxLjQ4NTg2IDIyLjc3MTMgMC4wODc0MDM1IDIxLjMwODEgMCAxOS41NzA1TDMuMjc3NjMgMTcuNTEyOUw4LjQzNDQ0IDE5LjkzNjNMNS4xNTY4MSAyMi4wODU0WiIgZmlsbD0iIzAxNjhBMSIvPgo8cGF0aCBkPSJNNi45MzI1NiAxMy4yODAxTDQuNDg1MjYgMTIuMTM3QzMuMzkyNzEgMTEuNjM0IDIuMzg3NTcgMTEuMjIyNSAyLjM4NzU3IDkuOTQyMTZDMi4zODc1NyA5LjMwMiAyLjU2MjM4IDguOTM2MiAyLjg2ODI5IDguNjE2MTNMOC4wMjUxIDEwLjk5MzhMNi43NTc3NSAxMS43NzEyQzYuNDA4MTQgMTEuOTk5OCA2LjE0NTkzIDEyLjE4MjcgNi4xNDU5MyAxMi41MDI4QzYuMTQ1OTMgMTIuNzc3MSA2LjQ5NTU0IDEzLjA1MTUgNi45MzI1NiAxMy4yODAxWiIgZmlsbD0iIzE1NTQ3NyIvPgo8cGF0aCBkPSJNMTUuOTA3NCAyM0MxNC41OTY0IDIxLjk0ODMgMTMuMTk3OSAyMS4yNjI0IDExLjUzNzMgMjAuNDM5NEwzLjc1ODM1IDE2LjgyNzFDMS43OTE3NyAxNS45MTI2IDAuNDgwNzEzIDE0LjY3OCAwLjQ4MDcxMyAxMi42NjYxQzAuNDgwNzEzIDEwLjY1NDIgMS4zOTg0NSA5LjY5Mzk5IDIuNTc4NCA4LjkxNjY2TDMuMDE1NDIgOC42NDIzMUMyLjcwOTUgOC45NjIzOSAyLjUzNDcgOS4zMjgxOSAyLjUzNDcgOS45NjgzNEMyLjUzNDcgMTEuMjAyOSAzLjU4MzU0IDExLjY2MDIgNC42MzIzOCAxMi4xNjMxTDEzLjY3ODcgMTYuMzI0MUMxNS4yNTE5IDE3LjAxIDE2LjY5NDEgMTguMjQ0NiAxNi42OTQxIDIwLjM0NzlDMTYuNzgxNSAyMS40OTExIDE2LjM0NDUgMjIuNDk3IDE1LjkwNzQgMjNaIiBmaWxsPSIjMTU1NDc3Ii8+Cjwvc3ZnPgo=", sA = Ce.div`
  ${cn("23%", "28px")}
  ${Ht("flex-start", "center")}
  gap: 25px;
  img {
    transition: transform 200ms;
    &:hover {
      transform: scale(1.1) rotate(3deg);
    }
  }
`;
Ce.span`
  color: ${({ theme: e }) => e.light};
  cursor: pointer;
`;
const aA = ({
  openFile: e,
  saveFile: n,
  createTab: t,
  runCode: r
}) => /* @__PURE__ */ nn(sA, { children: [
  /* @__PURE__ */ V(tm, { to: xO.MAIN, children: /* @__PURE__ */ V("img", { src: iA, alt: "" }) }),
  /* @__PURE__ */ V(yr, { type: "dashed", size: "small", onClick: e, children: "Open" }),
  /* @__PURE__ */ V(yr, { type: "dashed", size: "small", onClick: n, children: "Save" }),
  /* @__PURE__ */ V(yr, { type: "dashed", size: "small", onClick: t, children: "New" }),
  /* @__PURE__ */ V(yr, { type: "dashed", size: "small", onClick: r, children: "Run" })
] }), P0 = Ce.div`
  background: ${({ theme: e }) => e.grey};
  border-right: 2px solid ${({ theme: e }) => e.lightGrey};
  box-sizing: border-box;
  ${cn("52px", "100%")};
  ${Ht("space-between", "center", "column")};
  padding-bottom: 15px;
  z-index: 3;
`, uA = Ce.div`
  ${cn("23px")}
  svg {
    ${cn()}
    color: ${({ theme: e }) => e.secondaryGrey};
    ${({ theme: e }) => Ca(e.light)}
  }
  transition: transform 200ms;
  &:hover {
    transform: scale(1.1);
  }
  margin-top: 20px;
  cursor: pointer;
  user-select: none;
`, _A = Ce.div`
  ${cn("23%", "100%")};
  ${Ht("flex-start", "center")};
  gap: 25px;
`;
Ce(uA)`
  margin-top: 0;
  margin-left: 20px;
  svg {
    color: ${({ theme: e, $disabled: n }) => n ? e.secondaryGrey : e.light};
  }
`;
const lA = Qn(
  ({ isDisabled: e, runCode: n, openSignIn: t }) => {
    const r = ob();
    return /* @__PURE__ */ nn(_A, { children: [
      /* @__PURE__ */ V(
        nl,
        {
          type: "primary",
          onClick: n,
          disabled: e,
          override: "#38a886",
          children: "Run Code"
        }
      ),
      /* @__PURE__ */ V(
        nl,
        {
          type: "primary",
          override: r.secondaryGrey,
          onClick: t,
          children: "Sign in"
        }
      )
    ] });
  }
), cA = {
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
class dA {
  constructor(n) {
    Rt(this), this.state = n, this.getters = n.getters, this.actions = n.actions;
  }
  async requestCodeExecution() {
    const { NOT_SUPPORTED: n, ERRORS_IN_CODE: t, SUCCESS: r, NETWORK_ERROR: o } = cA;
    if (!this.getters.isAllowedToExecute())
      return n;
    const i = this.getters.getActiveTab(), s = {
      code: i.content,
      language: i.lang
    };
    try {
      const a = await MO.post(
        wO.CODE_EXECUTOR_API,
        s
      );
      return this.actions.terminal.addExecuteMessage(a.data), a.data.error ? t : r;
    } catch {
      return o;
    }
  }
}
const fA = () => {
  const { codeRunner: e } = uT(), n = yt(), t = ZO();
  return async () => {
    const { isError: o, message: i } = await e.requestCodeExecution();
    n.update({
      isTerminalOpened: !0,
      selectedTerminalTab: "terminal"
    }), t.open({
      message: i,
      type: o ? "error" : "success"
    });
  };
};
var hA = Object.defineProperty, mA = (e, n) => {
  for (var t in n)
    hA(e, t, { get: n[t], enumerable: !0 });
}, dn = {};
mA(dn, {
  assign: () => hh,
  colors: () => Tt,
  createStringInterpolator: () => qu,
  skipAnimation: () => fh,
  to: () => dh,
  willAdvance: () => Qu
});
var Xu = wo(), X = (e) => Po(e, Xu), Yu = wo();
X.write = (e) => Po(e, Yu);
var gs = wo();
X.onStart = (e) => Po(e, gs);
var Ku = wo();
X.onFrame = (e) => Po(e, Ku);
var $u = wo();
X.onFinish = (e) => Po(e, $u);
var qt = [];
X.setTimeout = (e, n) => {
  const t = X.now() + n, r = () => {
    const i = qt.findIndex((s) => s.cancel == r);
    ~i && qt.splice(i, 1), ct -= ~i ? 1 : 0;
  }, o = { time: t, handler: e, cancel: r };
  return qt.splice(ah(t), 0, o), ct += 1, uh(), o;
};
var ah = (e) => ~(~qt.findIndex((n) => n.time > e) || ~qt.length);
X.cancel = (e) => {
  gs.delete(e), Ku.delete(e), $u.delete(e), Xu.delete(e), Yu.delete(e);
};
X.sync = (e) => {
  ka = !0, X.batchedUpdates(e), ka = !1;
};
X.throttle = (e) => {
  let n;
  function t() {
    try {
      e(...n);
    } finally {
      n = null;
    }
  }
  function r(...o) {
    n = o, X.onStart(t);
  }
  return r.handler = e, r.cancel = () => {
    gs.delete(t), n = null;
  }, r;
};
var zu = typeof window < "u" ? window.requestAnimationFrame : (
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  () => {
  }
);
X.use = (e) => zu = e;
X.now = typeof performance < "u" ? () => performance.now() : Date.now;
X.batchedUpdates = (e) => e();
X.catch = console.error;
X.frameLoop = "always";
X.advance = () => {
  X.frameLoop !== "demand" ? console.warn(
    "Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"
  ) : lh();
};
var lt = -1, ct = 0, ka = !1;
function Po(e, n) {
  ka ? (n.delete(e), e(0)) : (n.add(e), uh());
}
function uh() {
  lt < 0 && (lt = 0, X.frameLoop !== "demand" && zu(_h));
}
function pA() {
  lt = -1;
}
function _h() {
  ~lt && (zu(_h), X.batchedUpdates(lh));
}
function lh() {
  const e = lt;
  lt = X.now();
  const n = ah(lt);
  if (n && (ch(qt.splice(0, n), (t) => t.handler()), ct -= n), !ct) {
    pA();
    return;
  }
  gs.flush(), Xu.flush(e ? Math.min(64, lt - e) : 16.667), Ku.flush(), Yu.flush(), $u.flush();
}
function wo() {
  let e = /* @__PURE__ */ new Set(), n = e;
  return {
    add(t) {
      ct += n == e && !e.has(t) ? 1 : 0, e.add(t);
    },
    delete(t) {
      return ct -= n == e && e.has(t) ? 1 : 0, e.delete(t);
    },
    flush(t) {
      n.size && (e = /* @__PURE__ */ new Set(), ct -= n.size, ch(n, (r) => r(t) && e.add(r)), ct += e.size, n = e);
    }
  };
}
function ch(e, n) {
  e.forEach((t) => {
    try {
      n(t);
    } catch (r) {
      X.catch(r);
    }
  });
}
function xa() {
}
var TA = (e, n, t) => Object.defineProperty(e, n, { value: t, writable: !0, configurable: !0 }), N = {
  arr: Array.isArray,
  obj: (e) => !!e && e.constructor.name === "Object",
  fun: (e) => typeof e == "function",
  str: (e) => typeof e == "string",
  num: (e) => typeof e == "number",
  und: (e) => e === void 0
};
function Bn(e, n) {
  if (N.arr(e)) {
    if (!N.arr(n) || e.length !== n.length)
      return !1;
    for (let t = 0; t < e.length; t++)
      if (e[t] !== n[t])
        return !1;
    return !0;
  }
  return e === n;
}
var L = (e, n) => e.forEach(n);
function Pn(e, n, t) {
  if (N.arr(e)) {
    for (let r = 0; r < e.length; r++)
      n.call(t, e[r], `${r}`);
    return;
  }
  for (const r in e)
    e.hasOwnProperty(r) && n.call(t, e[r], r);
}
var We = (e) => N.und(e) ? [] : N.arr(e) ? e : [e];
function jr(e, n) {
  if (e.size) {
    const t = Array.from(e);
    e.clear(), L(t, n);
  }
}
var Pr = (e, ...n) => jr(e, (t) => t(...n)), Ju = () => typeof window > "u" || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent), qu, dh, Tt = null, fh = !1, Qu = xa, hh = (e) => {
  e.to && (dh = e.to), e.now && (X.now = e.now), e.colors !== void 0 && (Tt = e.colors), e.skipAnimation != null && (fh = e.skipAnimation), e.createStringInterpolator && (qu = e.createStringInterpolator), e.requestAnimationFrame && X.use(e.requestAnimationFrame), e.batchedUpdates && (X.batchedUpdates = e.batchedUpdates), e.willAdvance && (Qu = e.willAdvance), e.frameLoop && (X.frameLoop = e.frameLoop);
}, Fr = /* @__PURE__ */ new Set(), _n = [], ea = [], Wi = 0, Mo = {
  get idle() {
    return !Fr.size && !_n.length;
  },
  /** Advance the given animation on every frame until idle. */
  start(e) {
    Wi > e.priority ? (Fr.add(e), X.onStart(EA)) : (mh(e), X(La));
  },
  /** Advance all animations by the given time. */
  advance: La,
  /** Call this when an animation's priority changes. */
  sort(e) {
    if (Wi)
      X.onFrame(() => Mo.sort(e));
    else {
      const n = _n.indexOf(e);
      ~n && (_n.splice(n, 1), ph(e));
    }
  },
  /**
   * Clear all animations. For testing purposes.
   *
   * ☠️ Never call this from within the frameloop.
   */
  clear() {
    _n = [], Fr.clear();
  }
};
function EA() {
  Fr.forEach(mh), Fr.clear(), X(La);
}
function mh(e) {
  _n.includes(e) || ph(e);
}
function ph(e) {
  _n.splice(
    OA(_n, (n) => n.priority > e.priority),
    0,
    e
  );
}
function La(e) {
  const n = ea;
  for (let t = 0; t < _n.length; t++) {
    const r = _n[t];
    Wi = r.priority, r.idle || (Qu(r), r.advance(e), r.idle || n.push(r));
  }
  return Wi = 0, ea = _n, ea.length = 0, _n = n, _n.length > 0;
}
function OA(e, n) {
  const t = e.findIndex(n);
  return t < 0 ? e.length : t;
}
var RA = (e, n, t) => Math.min(Math.max(t, e), n), bA = {
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
}, En = "[-+]?\\d*\\.?\\d+", Xi = En + "%";
function Ns(...e) {
  return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)";
}
var gA = new RegExp("rgb" + Ns(En, En, En)), NA = new RegExp("rgba" + Ns(En, En, En, En)), IA = new RegExp("hsl" + Ns(En, Xi, Xi)), AA = new RegExp(
  "hsla" + Ns(En, Xi, Xi, En)
), SA = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, vA = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, GA = /^#([0-9a-fA-F]{6})$/, CA = /^#([0-9a-fA-F]{8})$/;
function DA(e) {
  let n;
  return typeof e == "number" ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (n = GA.exec(e)) ? parseInt(n[1] + "ff", 16) >>> 0 : Tt && Tt[e] !== void 0 ? Tt[e] : (n = gA.exec(e)) ? (kt(n[1]) << 24 | // r
  kt(n[2]) << 16 | // g
  kt(n[3]) << 8 | // b
  255) >>> // a
  0 : (n = NA.exec(e)) ? (kt(n[1]) << 24 | // r
  kt(n[2]) << 16 | // g
  kt(n[3]) << 8 | // b
  Nl(n[4])) >>> // a
  0 : (n = SA.exec(e)) ? parseInt(
    n[1] + n[1] + // r
    n[2] + n[2] + // g
    n[3] + n[3] + // b
    "ff",
    // a
    16
  ) >>> 0 : (n = CA.exec(e)) ? parseInt(n[1], 16) >>> 0 : (n = vA.exec(e)) ? parseInt(
    n[1] + n[1] + // r
    n[2] + n[2] + // g
    n[3] + n[3] + // b
    n[4] + n[4],
    // a
    16
  ) >>> 0 : (n = IA.exec(e)) ? (bl(
    gl(n[1]),
    // h
    Jo(n[2]),
    // s
    Jo(n[3])
    // l
  ) | 255) >>> // a
  0 : (n = AA.exec(e)) ? (bl(
    gl(n[1]),
    // h
    Jo(n[2]),
    // s
    Jo(n[3])
    // l
  ) | Nl(n[4])) >>> // a
  0 : null;
}
function na(e, n, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? e + (n - e) * 6 * t : t < 1 / 2 ? n : t < 2 / 3 ? e + (n - e) * (2 / 3 - t) * 6 : e;
}
function bl(e, n, t) {
  const r = t < 0.5 ? t * (1 + n) : t + n - t * n, o = 2 * t - r, i = na(o, r, e + 1 / 3), s = na(o, r, e), a = na(o, r, e - 1 / 3);
  return Math.round(i * 255) << 24 | Math.round(s * 255) << 16 | Math.round(a * 255) << 8;
}
function kt(e) {
  const n = parseInt(e, 10);
  return n < 0 ? 0 : n > 255 ? 255 : n;
}
function gl(e) {
  return (parseFloat(e) % 360 + 360) % 360 / 360;
}
function Nl(e) {
  const n = parseFloat(e);
  return n < 0 ? 0 : n > 1 ? 255 : Math.round(n * 255);
}
function Jo(e) {
  const n = parseFloat(e);
  return n < 0 ? 0 : n > 100 ? 1 : n / 100;
}
function Il(e) {
  let n = DA(e);
  if (n === null)
    return e;
  n = n || 0;
  const t = (n & 4278190080) >>> 24, r = (n & 16711680) >>> 16, o = (n & 65280) >>> 8, i = (n & 255) / 255;
  return `rgba(${t}, ${r}, ${o}, ${i})`;
}
var lr = (e, n, t) => {
  if (N.fun(e))
    return e;
  if (N.arr(e))
    return lr({
      range: e,
      output: n,
      extrapolate: t
    });
  if (N.str(e.output[0]))
    return qu(e);
  const r = e, o = r.output, i = r.range || [0, 1], s = r.extrapolateLeft || r.extrapolate || "extend", a = r.extrapolateRight || r.extrapolate || "extend", u = r.easing || ((_) => _);
  return (_) => {
    const c = yA(_, i);
    return UA(
      _,
      i[c],
      i[c + 1],
      o[c],
      o[c + 1],
      u,
      s,
      a,
      r.map
    );
  };
};
function UA(e, n, t, r, o, i, s, a, u) {
  let _ = u ? u(e) : e;
  if (_ < n) {
    if (s === "identity")
      return _;
    s === "clamp" && (_ = n);
  }
  if (_ > t) {
    if (a === "identity")
      return _;
    a === "clamp" && (_ = t);
  }
  return r === o ? r : n === t ? e <= n ? r : o : (n === -1 / 0 ? _ = -_ : t === 1 / 0 ? _ = _ - n : _ = (_ - n) / (t - n), _ = i(_), r === -1 / 0 ? _ = -_ : o === 1 / 0 ? _ = _ + r : _ = _ * (o - r) + r, _);
}
function yA(e, n) {
  for (var t = 1; t < n.length - 1 && !(n[t] >= e); ++t)
    ;
  return t - 1;
}
var HA = (e, n = "end") => (t) => {
  t = n === "end" ? Math.min(t, 0.999) : Math.max(t, 1e-3);
  const r = t * e, o = n === "end" ? Math.floor(r) : Math.ceil(r);
  return RA(0, 1, o / e);
}, Yi = 1.70158, qo = Yi * 1.525, Al = Yi + 1, Sl = 2 * Math.PI / 3, vl = 2 * Math.PI / 4.5, Qo = (e) => e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375 : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375, Th = {
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
  easeInBack: (e) => Al * e * e * e - Yi * e * e,
  easeOutBack: (e) => 1 + Al * Math.pow(e - 1, 3) + Yi * Math.pow(e - 1, 2),
  easeInOutBack: (e) => e < 0.5 ? Math.pow(2 * e, 2) * ((qo + 1) * 2 * e - qo) / 2 : (Math.pow(2 * e - 2, 2) * ((qo + 1) * (e * 2 - 2) + qo) + 2) / 2,
  easeInElastic: (e) => e === 0 ? 0 : e === 1 ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((e * 10 - 10.75) * Sl),
  easeOutElastic: (e) => e === 0 ? 0 : e === 1 ? 1 : Math.pow(2, -10 * e) * Math.sin((e * 10 - 0.75) * Sl) + 1,
  easeInOutElastic: (e) => e === 0 ? 0 : e === 1 ? 1 : e < 0.5 ? -(Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * vl)) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * vl) / 2 + 1,
  easeInBounce: (e) => 1 - Qo(1 - e),
  easeOutBounce: Qo,
  easeInOutBounce: (e) => e < 0.5 ? (1 - Qo(1 - 2 * e)) / 2 : (1 + Qo(2 * e - 1)) / 2,
  steps: HA
}, oo = Symbol.for("FluidValue.get"), cr = Symbol.for("FluidValue.observers"), sn = (e) => !!(e && e[oo]), $e = (e) => e && e[oo] ? e[oo]() : e, Gl = (e) => e[cr] || null;
function PA(e, n) {
  e.eventObserved ? e.eventObserved(n) : e(n);
}
function io(e, n) {
  const t = e[cr];
  t && t.forEach((r) => {
    PA(r, n);
  });
}
var Eh = class {
  constructor(e) {
    if (!e && !(e = this.get))
      throw Error("Unknown getter");
    wA(this, e);
  }
}, wA = (e, n) => Oh(e, oo, n);
function Er(e, n) {
  if (e[oo]) {
    let t = e[cr];
    t || Oh(e, cr, t = /* @__PURE__ */ new Set()), t.has(n) || (t.add(n), e.observerAdded && e.observerAdded(t.size, n));
  }
  return n;
}
function so(e, n) {
  const t = e[cr];
  if (t && t.has(n)) {
    const r = t.size - 1;
    r ? t.delete(n) : e[cr] = null, e.observerRemoved && e.observerRemoved(r, n);
  }
}
var Oh = (e, n, t) => Object.defineProperty(e, n, {
  value: t,
  writable: !0,
  configurable: !0
}), pi = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, MA = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi, Cl = new RegExp(`(${pi.source})(%|[a-z]+)`, "i"), kA = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi, Is = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/, Rh = (e) => {
  const [n, t] = xA(e);
  if (!n || Ju())
    return e;
  const r = window.getComputedStyle(document.documentElement).getPropertyValue(n);
  if (r)
    return r.trim();
  if (t && t.startsWith("--")) {
    const o = window.getComputedStyle(document.documentElement).getPropertyValue(t);
    return o || e;
  } else {
    if (t && Is.test(t))
      return Rh(t);
    if (t)
      return t;
  }
  return e;
}, xA = (e) => {
  const n = Is.exec(e);
  if (!n)
    return [,];
  const [, t, r] = n;
  return [t, r];
}, ta, LA = (e, n, t, r, o) => `rgba(${Math.round(n)}, ${Math.round(t)}, ${Math.round(r)}, ${o})`, bh = (e) => {
  ta || (ta = Tt ? (
    // match color names, ignore partial matches
    new RegExp(`(${Object.keys(Tt).join("|")})(?!\\w)`, "g")
  ) : (
    // never match
    /^\b$/
  ));
  const n = e.output.map((i) => $e(i).replace(Is, Rh).replace(MA, Il).replace(ta, Il)), t = n.map((i) => i.match(pi).map(Number)), o = t[0].map(
    (i, s) => t.map((a) => {
      if (!(s in a))
        throw Error('The arity of each "output" value must be equal');
      return a[s];
    })
  ).map(
    (i) => lr({ ...e, output: i })
  );
  return (i) => {
    const s = !Cl.test(n[0]) && n.find((u) => Cl.test(u))?.replace(pi, "");
    let a = 0;
    return n[0].replace(
      pi,
      () => `${o[a++](i)}${s || ""}`
    ).replace(kA, LA);
  };
}, Zu = "react-spring: ", gh = (e) => {
  const n = e;
  let t = !1;
  if (typeof n != "function")
    throw new TypeError(`${Zu}once requires a function parameter`);
  return (...r) => {
    t || (n(...r), t = !0);
  };
}, BA = gh(console.warn);
function Nh() {
  BA(
    `${Zu}The "interpolate" function is deprecated in v9 (use "to" instead)`
  );
}
var jA = gh(console.warn);
function FA() {
  jA(
    `${Zu}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`
  );
}
function As(e) {
  return N.str(e) && (e[0] == "#" || /\d/.test(e) || // Do not identify a CSS variable as an AnimatedString if its SSR
  !Ju() && Is.test(e) || e in (Tt || {}));
}
var xt, Ti = /* @__PURE__ */ new WeakMap(), VA = (e) => e.forEach(({ target: n, contentRect: t }) => Ti.get(n)?.forEach((r) => r(t)));
function WA(e, n) {
  xt || typeof ResizeObserver < "u" && (xt = new ResizeObserver(VA));
  let t = Ti.get(n);
  return t || (t = /* @__PURE__ */ new Set(), Ti.set(n, t)), t.add(e), xt && xt.observe(n), () => {
    const r = Ti.get(n);
    r && (r.delete(e), !r.size && xt && xt.unobserve(n));
  };
}
var Ei = /* @__PURE__ */ new Set(), vr, XA = () => {
  const e = () => {
    Ei.forEach(
      (n) => n({
        width: window.innerWidth,
        height: window.innerHeight
      })
    );
  };
  return window.addEventListener("resize", e), () => {
    window.removeEventListener("resize", e);
  };
}, YA = (e) => (Ei.add(e), vr || (vr = XA()), () => {
  Ei.delete(e), !Ei.size && vr && (vr(), vr = void 0);
}), Ih = (e, { container: n = document.documentElement } = {}) => n === document.documentElement ? YA(e) : WA(e, n), KA = (e, n, t) => n - e === 0 ? 1 : (t - e) / (n - e), $A = {
  x: {
    length: "Width",
    position: "Left"
  },
  y: {
    length: "Height",
    position: "Top"
  }
}, zA = class {
  constructor(e, n) {
    this.createAxis = () => ({
      current: 0,
      progress: 0,
      scrollLength: 0
    }), this.updateAxis = (t) => {
      const r = this.info[t], { length: o, position: i } = $A[t];
      r.current = this.container[`scroll${i}`], r.scrollLength = this.container["scroll" + o] - this.container["client" + o], r.progress = KA(0, r.scrollLength, r.current);
    }, this.update = () => {
      this.updateAxis("x"), this.updateAxis("y");
    }, this.sendEvent = () => {
      this.callback(this.info);
    }, this.advance = () => {
      this.update(), this.sendEvent();
    }, this.callback = e, this.container = n, this.info = {
      time: 0,
      x: this.createAxis(),
      y: this.createAxis()
    };
  }
}, Gr = /* @__PURE__ */ new WeakMap(), Dl = /* @__PURE__ */ new WeakMap(), ra = /* @__PURE__ */ new WeakMap(), Ul = (e) => e === document.documentElement ? window : e, JA = (e, { container: n = document.documentElement } = {}) => {
  let t = ra.get(n);
  t || (t = /* @__PURE__ */ new Set(), ra.set(n, t));
  const r = new zA(e, n);
  if (t.add(r), !Gr.has(n)) {
    const i = () => (t?.forEach((a) => a.advance()), !0);
    Gr.set(n, i);
    const s = Ul(n);
    window.addEventListener("resize", i, { passive: !0 }), n !== document.documentElement && Dl.set(n, Ih(i, { container: n })), s.addEventListener("scroll", i, { passive: !0 });
  }
  const o = Gr.get(n);
  return X(o), () => {
    X.cancel(o);
    const i = ra.get(n);
    if (!i || (i.delete(r), i.size))
      return;
    const s = Gr.get(n);
    Gr.delete(n), s && (Ul(n).removeEventListener("scroll", s), window.removeEventListener("resize", s), Dl.get(n)?.());
  };
};
function qA(e) {
  const n = Z(null);
  return n.current === null && (n.current = e()), n.current;
}
var qe = Ju() ? Ge : zh, QA = () => {
  const e = Z(!1);
  return qe(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
};
function e_() {
  const e = Qe()[1], n = QA();
  return () => {
    n.current && e(Math.random());
  };
}
function ZA(e, n) {
  const [t] = Qe(
    () => ({
      inputs: n,
      result: e()
    })
  ), r = Z(), o = r.current;
  let i = o;
  return i ? n && i.inputs && eS(n, i.inputs) || (i = {
    inputs: n,
    result: e()
  }) : i = t, Ge(() => {
    r.current = i, o == t && (t.inputs = t.result = void 0);
  }, [i]), i.result;
}
function eS(e, n) {
  if (e.length !== n.length)
    return !1;
  for (let t = 0; t < e.length; t++)
    if (e[t] !== n[t])
      return !1;
  return !0;
}
var Ss = (e) => Ge(e, nS), nS = [];
function Ba(e) {
  const n = Z();
  return Ge(() => {
    n.current = e;
  }), n.current;
}
var tS = () => {
  const [e, n] = Qe(null);
  return qe(() => {
    const t = window.matchMedia("(prefers-reduced-motion)"), r = (o) => {
      n(o.matches), hh({
        skipAnimation: o.matches
      });
    };
    return r(t), t.addEventListener("change", r), () => {
      t.removeEventListener("change", r);
    };
  }, []), e;
}, ao = Symbol.for("Animated:node"), rS = (e) => !!e && e[ao] === e, Sn = (e) => e && e[ao], n_ = (e, n) => TA(e, ao, n), vs = (e) => e && e[ao] && e[ao].getPayload(), Ah = class {
  constructor() {
    n_(this, this);
  }
  /** Get every `AnimatedValue` used by this node. */
  getPayload() {
    return this.payload || [];
  }
}, ko = class extends Ah {
  constructor(e) {
    super(), this._value = e, this.done = !0, this.durationProgress = 0, N.num(this._value) && (this.lastPosition = this._value);
  }
  /** @internal */
  static create(e) {
    return new ko(e);
  }
  getPayload() {
    return [this];
  }
  getValue() {
    return this._value;
  }
  setValue(e, n) {
    return N.num(e) && (this.lastPosition = e, n && (e = Math.round(e / n) * n, this.done && (this.lastPosition = e))), this._value === e ? !1 : (this._value = e, !0);
  }
  reset() {
    const { done: e } = this;
    this.done = !1, N.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, e && (this.lastVelocity = null), this.v0 = null);
  }
}, uo = class extends ko {
  constructor(e) {
    super(0), this._string = null, this._toString = lr({
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
    if (N.str(e)) {
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
    e && (this._toString = lr({
      output: [this.getValue(), e]
    })), this._value = 0, super.reset();
  }
}, Ki = { dependencies: null }, Gs = class extends Ah {
  constructor(e) {
    super(), this.source = e, this.setValue(e);
  }
  getValue(e) {
    const n = {};
    return Pn(this.source, (t, r) => {
      rS(t) ? n[r] = t.getValue(e) : sn(t) ? n[r] = $e(t) : e || (n[r] = t);
    }), n;
  }
  /** Replace the raw object data */
  setValue(e) {
    this.source = e, this.payload = this._makePayload(e);
  }
  reset() {
    this.payload && L(this.payload, (e) => e.reset());
  }
  /** Create a payload set. */
  _makePayload(e) {
    if (e) {
      const n = /* @__PURE__ */ new Set();
      return Pn(e, this._addToPayload, n), Array.from(n);
    }
  }
  /** Add to a payload set. */
  _addToPayload(e) {
    Ki.dependencies && sn(e) && Ki.dependencies.add(e);
    const n = vs(e);
    n && L(n, (t) => this.add(t));
  }
}, Sh = class extends Gs {
  constructor(e) {
    super(e);
  }
  /** @internal */
  static create(e) {
    return new Sh(e);
  }
  getValue() {
    return this.source.map((e) => e.getValue());
  }
  setValue(e) {
    const n = this.getPayload();
    return e.length == n.length ? n.map((t, r) => t.setValue(e[r])).some(Boolean) : (super.setValue(e.map(oS)), !0);
  }
};
function oS(e) {
  return (As(e) ? uo : ko).create(e);
}
function ja(e) {
  const n = Sn(e);
  return n ? n.constructor : N.arr(e) ? Sh : As(e) ? uo : ko;
}
var yl = (e, n) => {
  const t = (
    // Function components must use "forwardRef" to avoid being
    // re-rendered on every animation frame.
    !N.fun(e) || e.prototype && e.prototype.isReactComponent
  );
  return Zt((r, o) => {
    const i = Z(null), s = t && // eslint-disable-next-line react-hooks/rules-of-hooks
    Et(
      (d) => {
        i.current = aS(o, d);
      },
      [o]
    ), [a, u] = sS(r, n), _ = e_(), c = () => {
      const d = i.current;
      if (t && !d)
        return;
      (d ? n.applyAnimatedValues(d, a.getValue(!0)) : !1) === !1 && _();
    }, l = new iS(c, u), m = Z();
    qe(() => (m.current = l, L(u, (d) => Er(d, l)), () => {
      m.current && (L(
        m.current.deps,
        (d) => so(d, m.current)
      ), X.cancel(m.current.update));
    })), Ge(c, []), Ss(() => () => {
      const d = m.current;
      L(d.deps, (f) => so(f, d));
    });
    const T = n.getComponentProps(a.getValue());
    return /* @__PURE__ */ Kt.createElement(e, { ...T, ref: s });
  });
}, iS = class {
  constructor(e, n) {
    this.update = e, this.deps = n;
  }
  eventObserved(e) {
    e.type == "change" && X.write(this.update);
  }
};
function sS(e, n) {
  const t = /* @__PURE__ */ new Set();
  return Ki.dependencies = t, e.style && (e = {
    ...e,
    style: n.createAnimatedStyle(e.style)
  }), e = new Gs(e), Ki.dependencies = null, [e, t];
}
function aS(e, n) {
  return e && (N.fun(e) ? e(n) : e.current = n), n;
}
var Hl = Symbol.for("AnimatedComponent"), uS = (e, {
  applyAnimatedValues: n = () => !1,
  createAnimatedStyle: t = (o) => new Gs(o),
  getComponentProps: r = (o) => o
} = {}) => {
  const o = {
    applyAnimatedValues: n,
    createAnimatedStyle: t,
    getComponentProps: r
  }, i = (s) => {
    const a = Pl(s) || "Anonymous";
    return N.str(s) ? s = i[s] || (i[s] = yl(s, o)) : s = s[Hl] || (s[Hl] = yl(s, o)), s.displayName = `Animated(${a})`, s;
  };
  return Pn(e, (s, a) => {
    N.arr(e) && (a = Pl(s)), i[a] = i(s);
  }), {
    animated: i
  };
}, Pl = (e) => N.str(e) ? e : e && N.str(e.displayName) ? e.displayName : N.fun(e) && e.name || null, _S = class {
};
function Ve(e, ...n) {
  return N.fun(e) ? e(...n) : e;
}
var Vr = (e, n) => e === !0 || !!(n && e && (N.fun(e) ? e(n) : We(e).includes(n))), vh = (e, n) => N.obj(e) ? n && e[n] : e, Gh = (e, n) => e.default === !0 ? e[n] : e.default ? e.default[n] : void 0, lS = (e) => e, Cs = (e, n = lS) => {
  let t = cS;
  e.default && e.default !== !0 && (e = e.default, t = Object.keys(e));
  const r = {};
  for (const o of t) {
    const i = n(e[o], o);
    N.und(i) || (r[o] = i);
  }
  return r;
}, cS = [
  "config",
  "onProps",
  "onStart",
  "onChange",
  "onPause",
  "onResume",
  "onRest"
], dS = {
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
function fS(e) {
  const n = {};
  let t = 0;
  if (Pn(e, (r, o) => {
    dS[o] || (n[o] = r, t++);
  }), t)
    return n;
}
function Ds(e) {
  const n = fS(e);
  if (n) {
    const t = { to: n };
    return Pn(e, (r, o) => o in n || (t[o] = r)), t;
  }
  return { ...e };
}
function _o(e) {
  return e = $e(e), N.arr(e) ? e.map(_o) : As(e) ? dn.createStringInterpolator({
    range: [0, 1],
    output: [e, e]
  })(1) : e;
}
function Ch(e) {
  for (const n in e)
    return !0;
  return !1;
}
function Fa(e) {
  return N.fun(e) || N.arr(e) && N.obj(e[0]);
}
function Va(e, n) {
  e.ref?.delete(e), n?.delete(e);
}
function t_(e, n) {
  n && e.ref !== n && (e.ref?.delete(e), n.add(e), e.ref = n);
}
function hS(e, n, t = 1e3) {
  qe(() => {
    if (n) {
      let r = 0;
      L(e, (o, i) => {
        const s = o.current;
        if (s.length) {
          let a = t * n[i];
          isNaN(a) ? a = r : r = a, L(s, (u) => {
            L(u.queue, (_) => {
              const c = _.delay;
              _.delay = (l) => a + Ve(c || 0, l);
            });
          }), o.start();
        }
      });
    } else {
      let r = Promise.resolve();
      L(e, (o) => {
        const i = o.current;
        if (i.length) {
          const s = i.map((a) => {
            const u = a.queue;
            return a.queue = [], u;
          });
          r = r.then(() => (L(
            i,
            (a, u) => L(s[u] || [], (_) => a.queue.push(_))
          ), Promise.all(o.start())));
        }
      });
    }
  });
}
var Dh = {
  default: { tension: 170, friction: 26 },
  gentle: { tension: 120, friction: 14 },
  wobbly: { tension: 180, friction: 12 },
  stiff: { tension: 210, friction: 20 },
  slow: { tension: 280, friction: 60 },
  molasses: { tension: 280, friction: 120 }
}, Wa = {
  ...Dh.default,
  mass: 1,
  damping: 1,
  easing: Th.linear,
  clamp: !1
}, mS = class {
  constructor() {
    this.velocity = 0, Object.assign(this, Wa);
  }
};
function pS(e, n, t) {
  t && (t = { ...t }, wl(t, n), n = { ...t, ...n }), wl(e, n), Object.assign(e, n);
  for (const s in Wa)
    e[s] == null && (e[s] = Wa[s]);
  let { frequency: r, damping: o } = e;
  const { mass: i } = e;
  return N.und(r) || (r < 0.01 && (r = 0.01), o < 0 && (o = 0), e.tension = Math.pow(2 * Math.PI / r, 2) * i, e.friction = 4 * Math.PI * o * i / r), e;
}
function wl(e, n) {
  if (!N.und(n.decay))
    e.duration = void 0;
  else {
    const t = !N.und(n.tension) || !N.und(n.friction);
    (t || !N.und(n.frequency) || !N.und(n.damping) || !N.und(n.mass)) && (e.duration = void 0, e.decay = void 0), t && (e.frequency = void 0);
  }
}
var Ml = [], TS = class {
  constructor() {
    this.changed = !1, this.values = Ml, this.toValues = null, this.fromValues = Ml, this.config = new mS(), this.immediate = !1;
  }
};
function Uh(e, { key: n, props: t, defaultProps: r, state: o, actions: i }) {
  return new Promise((s, a) => {
    let u, _, c = Vr(t.cancel ?? r?.cancel, n);
    if (c)
      T();
    else {
      N.und(t.pause) || (o.paused = Vr(t.pause, n));
      let d = r?.pause;
      d !== !0 && (d = o.paused || Vr(d, n)), u = Ve(t.delay || 0, n), d ? (o.resumeQueue.add(m), i.pause()) : (i.resume(), m());
    }
    function l() {
      o.resumeQueue.add(m), o.timeouts.delete(_), _.cancel(), u = _.time - X.now();
    }
    function m() {
      u > 0 && !dn.skipAnimation ? (o.delayed = !0, _ = X.setTimeout(T, u), o.pauseQueue.add(l), o.timeouts.add(_)) : T();
    }
    function T() {
      o.delayed && (o.delayed = !1), o.pauseQueue.delete(l), o.timeouts.delete(_), e <= (o.cancelId || 0) && (c = !0);
      try {
        i.start({ ...t, callId: e, cancel: c }, s);
      } catch (d) {
        a(d);
      }
    }
  });
}
var r_ = (e, n) => n.length == 1 ? n[0] : n.some((t) => t.cancelled) ? Qt(e.get()) : n.every((t) => t.noop) ? yh(e.get()) : pn(
  e.get(),
  n.every((t) => t.finished)
), yh = (e) => ({
  value: e,
  noop: !0,
  finished: !0,
  cancelled: !1
}), pn = (e, n, t = !1) => ({
  value: e,
  finished: n,
  cancelled: t
}), Qt = (e) => ({
  value: e,
  cancelled: !0,
  finished: !1
});
function Hh(e, n, t, r) {
  const { callId: o, parentId: i, onRest: s } = n, { asyncTo: a, promise: u } = t;
  return !i && e === a && !n.reset ? u : t.promise = (async () => {
    t.asyncId = o, t.asyncTo = e;
    const _ = Cs(
      n,
      (h, O) => (
        // The `onRest` prop is only called when the `runAsync` promise is resolved.
        O === "onRest" ? void 0 : h
      )
    );
    let c, l;
    const m = new Promise(
      (h, O) => (c = h, l = O)
    ), T = (h) => {
      const O = (
        // The `cancel` prop or `stop` method was used.
        o <= (t.cancelId || 0) && Qt(r) || // The async `to` prop was replaced.
        o !== t.asyncId && pn(r, !1)
      );
      if (O)
        throw h.result = O, l(h), h;
    }, d = (h, O) => {
      const R = new Xa(), g = new kl();
      return (async () => {
        if (dn.skipAnimation)
          throw lo(t), g.result = pn(r, !1), l(g), g;
        T(R);
        const I = N.obj(h) ? { ...h } : { ...O, to: h };
        I.parentId = o, Pn(_, (H, M) => {
          N.und(I[M]) && (I[M] = H);
        });
        const p = await r.start(I);
        return T(R), t.paused && await new Promise((H) => {
          t.resumeQueue.add(H);
        }), p;
      })();
    };
    let f;
    if (dn.skipAnimation)
      return lo(t), pn(r, !1);
    try {
      let h;
      N.arr(e) ? h = (async (O) => {
        for (const R of O)
          await d(R);
      })(e) : h = Promise.resolve(e(d, r.stop.bind(r))), await Promise.all([h.then(c), m]), f = pn(r.get(), !0, !1);
    } catch (h) {
      if (h instanceof Xa)
        f = h.result;
      else if (h instanceof kl)
        f = h.result;
      else
        throw h;
    } finally {
      o == t.asyncId && (t.asyncId = i, t.asyncTo = i ? a : void 0, t.promise = i ? u : void 0);
    }
    return N.fun(s) && X.batchedUpdates(() => {
      s(f, r, r.item);
    }), f;
  })();
}
function lo(e, n) {
  jr(e.timeouts, (t) => t.cancel()), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, n && (e.cancelId = n);
}
var Xa = class extends Error {
  constructor() {
    super(
      "An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."
    );
  }
}, kl = class extends Error {
  constructor() {
    super("SkipAnimationSignal");
  }
}, Ya = (e) => e instanceof Us, ES = 1, Us = class extends Eh {
  constructor() {
    super(...arguments), this.id = ES++, this._priority = 0;
  }
  get priority() {
    return this._priority;
  }
  set priority(e) {
    this._priority != e && (this._priority = e, this._onPriorityChange(e));
  }
  /** Get the current value */
  get() {
    const e = Sn(this);
    return e && e.getValue();
  }
  /** Create a spring that maps our value to another value */
  to(...e) {
    return dn.to(this, e);
  }
  /** @deprecated Use the `to` method instead. */
  interpolate(...e) {
    return Nh(), dn.to(this, e);
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
  _onChange(e, n = !1) {
    io(this, {
      type: "change",
      parent: this,
      value: e,
      idle: n
    });
  }
  /** Tell our children about our new priority */
  _onPriorityChange(e) {
    this.idle || Mo.sort(this), io(this, {
      type: "priority",
      parent: this,
      priority: e
    });
  }
}, Dt = Symbol.for("SpringPhase"), Ph = 1, Ka = 2, $a = 4, oa = (e) => (e[Dt] & Ph) > 0, rt = (e) => (e[Dt] & Ka) > 0, Cr = (e) => (e[Dt] & $a) > 0, xl = (e, n) => n ? e[Dt] |= Ka | Ph : e[Dt] &= ~Ka, Ll = (e, n) => n ? e[Dt] |= $a : e[Dt] &= ~$a, o_ = class extends Us {
  constructor(e, n) {
    if (super(), this.animation = new TS(), this.defaultProps = {}, this._state = {
      paused: !1,
      delayed: !1,
      pauseQueue: /* @__PURE__ */ new Set(),
      resumeQueue: /* @__PURE__ */ new Set(),
      timeouts: /* @__PURE__ */ new Set()
    }, this._pendingCalls = /* @__PURE__ */ new Set(), this._lastCallId = 0, this._lastToId = 0, this._memoizedDuration = 0, !N.und(e) || !N.und(n)) {
      const t = N.obj(e) ? { ...e } : { ...n, from: e };
      N.und(t.default) && (t.default = !0), this.start(t);
    }
  }
  /** Equals true when not advancing on each frame. */
  get idle() {
    return !(rt(this) || this._state.asyncTo) || Cr(this);
  }
  get goal() {
    return $e(this.animation.to);
  }
  get velocity() {
    const e = Sn(this);
    return e instanceof ko ? e.lastVelocity || 0 : e.getPayload().map((n) => n.lastVelocity || 0);
  }
  /**
   * When true, this value has been animated at least once.
   */
  get hasAnimated() {
    return oa(this);
  }
  /**
   * When true, this value has an unfinished animation,
   * which is either active or paused.
   */
  get isAnimating() {
    return rt(this);
  }
  /**
   * When true, all current and future animations are paused.
   */
  get isPaused() {
    return Cr(this);
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
    let n = !0, t = !1;
    const r = this.animation;
    let { toValues: o } = r;
    const { config: i } = r, s = vs(r.to);
    !s && sn(r.to) && (o = We($e(r.to))), r.values.forEach((_, c) => {
      if (_.done)
        return;
      const l = (
        // Animated strings always go from 0 to 1.
        _.constructor == uo ? 1 : s ? s[c].lastPosition : o[c]
      );
      let m = r.immediate, T = l;
      if (!m) {
        if (T = _.lastPosition, i.tension <= 0) {
          _.done = !0;
          return;
        }
        let d = _.elapsedTime += e;
        const f = r.fromValues[c], h = _.v0 != null ? _.v0 : _.v0 = N.arr(i.velocity) ? i.velocity[c] : i.velocity;
        let O;
        const R = i.precision || (f == l ? 5e-3 : Math.min(1, Math.abs(l - f) * 1e-3));
        if (N.und(i.duration))
          if (i.decay) {
            const g = i.decay === !0 ? 0.998 : i.decay, I = Math.exp(-(1 - g) * d);
            T = f + h / (1 - g) * (1 - I), m = Math.abs(_.lastPosition - T) <= R, O = h * I;
          } else {
            O = _.lastVelocity == null ? h : _.lastVelocity;
            const g = i.restVelocity || R / 10, I = i.clamp ? 0 : i.bounce, p = !N.und(I), H = f == l ? _.v0 > 0 : f < l;
            let M, K = !1;
            const w = 1, B = Math.ceil(e / w);
            for (let Te = 0; Te < B && (M = Math.abs(O) > g, !(!M && (m = Math.abs(l - T) <= R, m))); ++Te) {
              p && (K = T == l || T > l == H, K && (O = -O * I, T = l));
              const me = -i.tension * 1e-6 * (T - l), be = -i.friction * 1e-3 * O, k = (me + be) / i.mass;
              O = O + k * w, T = T + O * w;
            }
          }
        else {
          let g = 1;
          i.duration > 0 && (this._memoizedDuration !== i.duration && (this._memoizedDuration = i.duration, _.durationProgress > 0 && (_.elapsedTime = i.duration * _.durationProgress, d = _.elapsedTime += e)), g = (i.progress || 0) + d / this._memoizedDuration, g = g > 1 ? 1 : g < 0 ? 0 : g, _.durationProgress = g), T = f + i.easing(g) * (l - f), O = (T - _.lastPosition) / e, m = g == 1;
        }
        _.lastVelocity = O, Number.isNaN(T) && (console.warn("Got NaN while animating:", this), m = !0);
      }
      s && !s[c].done && (m = !1), m ? _.done = !0 : n = !1, _.setValue(T, i.round) && (t = !0);
    });
    const a = Sn(this), u = a.getValue();
    if (n) {
      const _ = $e(r.to);
      (u !== _ || t) && !i.decay ? (a.setValue(_), this._onChange(_)) : t && i.decay && this._onChange(u), this._stop();
    } else
      t && this._onChange(u);
  }
  /** Set the current value, while stopping the current animation */
  set(e) {
    return X.batchedUpdates(() => {
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
    if (rt(this)) {
      const { to: e, config: n } = this.animation;
      X.batchedUpdates(() => {
        this._onStart(), n.decay || this._set(e, !1), this._stop();
      });
    }
    return this;
  }
  /** Push props into the pending queue. */
  update(e) {
    return (this.queue || (this.queue = [])).push(e), this;
  }
  start(e, n) {
    let t;
    return N.und(e) ? (t = this.queue || [], this.queue = []) : t = [N.obj(e) ? e : { ...n, to: e }], Promise.all(
      t.map((r) => this._update(r))
    ).then((r) => r_(this, r));
  }
  /**
   * Stop the current animation, and cancel any delayed updates.
   *
   * Pass `true` to call `onRest` with `cancelled: true`.
   */
  stop(e) {
    const { to: n } = this.animation;
    return this._focus(this.get()), lo(this._state, e && this._lastCallId), X.batchedUpdates(() => this._stop(n, e)), this;
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
    const n = this.key || "";
    let { to: t, from: r } = e;
    t = N.obj(t) ? t[n] : t, (t == null || Fa(t)) && (t = void 0), r = N.obj(r) ? r[n] : r, r == null && (r = void 0);
    const o = { to: t, from: r };
    return oa(this) || (e.reverse && ([t, r] = [r, t]), r = $e(r), N.und(r) ? Sn(this) || this._set(t) : this._set(r)), o;
  }
  /** Every update is processed by this method before merging. */
  _update({ ...e }, n) {
    const { key: t, defaultProps: r } = this;
    e.default && Object.assign(
      r,
      Cs(
        e,
        (s, a) => /^on/.test(a) ? vh(s, t) : s
      )
    ), jl(this, e, "onProps"), Ur(this, "onProps", e, this);
    const o = this._prepareNode(e);
    if (Object.isFrozen(this))
      throw Error(
        "Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?"
      );
    const i = this._state;
    return Uh(++this._lastCallId, {
      key: t,
      props: e,
      defaultProps: r,
      state: i,
      actions: {
        pause: () => {
          Cr(this) || (Ll(this, !0), Pr(i.pauseQueue), Ur(
            this,
            "onPause",
            pn(this, Dr(this, this.animation.to)),
            this
          ));
        },
        resume: () => {
          Cr(this) && (Ll(this, !1), rt(this) && this._resume(), Pr(i.resumeQueue), Ur(
            this,
            "onResume",
            pn(this, Dr(this, this.animation.to)),
            this
          ));
        },
        start: this._merge.bind(this, o)
      }
    }).then((s) => {
      if (e.loop && s.finished && !(n && s.noop)) {
        const a = wh(e);
        if (a)
          return this._update(a, !0);
      }
      return s;
    });
  }
  /** Merge props into the current animation */
  _merge(e, n, t) {
    if (n.cancel)
      return this.stop(!0), t(Qt(this));
    const r = !N.und(e.to), o = !N.und(e.from);
    if (r || o)
      if (n.callId > this._lastToId)
        this._lastToId = n.callId;
      else
        return t(Qt(this));
    const { key: i, defaultProps: s, animation: a } = this, { to: u, from: _ } = a;
    let { to: c = u, from: l = _ } = e;
    o && !r && (!n.default || N.und(c)) && (c = l), n.reverse && ([c, l] = [l, c]);
    const m = !Bn(l, _);
    m && (a.from = l), l = $e(l);
    const T = !Bn(c, u);
    T && this._focus(c);
    const d = Fa(n.to), { config: f } = a, { decay: h, velocity: O } = f;
    (r || o) && (f.velocity = 0), n.config && !d && pS(
      f,
      Ve(n.config, i),
      // Avoid calling the same "config" prop twice.
      n.config !== s.config ? Ve(s.config, i) : void 0
    );
    let R = Sn(this);
    if (!R || N.und(c))
      return t(pn(this, !0));
    const g = (
      // When `reset` is undefined, the `from` prop implies `reset: true`,
      // except for declarative updates. When `reset` is defined, there
      // must exist a value to animate from.
      N.und(n.reset) ? o && !n.default : !N.und(l) && Vr(n.reset, i)
    ), I = g ? l : this.get(), p = _o(c), H = N.num(p) || N.arr(p) || As(p), M = !d && (!H || Vr(s.immediate || n.immediate, i));
    if (T) {
      const Te = ja(c);
      if (Te !== R.constructor)
        if (M)
          R = this._set(p);
        else
          throw Error(
            `Cannot animate between ${R.constructor.name} and ${Te.name}, as the "to" prop suggests`
          );
    }
    const K = R.constructor;
    let w = sn(c), B = !1;
    if (!w) {
      const Te = g || !oa(this) && m;
      (T || Te) && (B = Bn(_o(I), p), w = !B), (!Bn(a.immediate, M) && !M || !Bn(f.decay, h) || !Bn(f.velocity, O)) && (w = !0);
    }
    if (B && rt(this) && (a.changed && !g ? w = !0 : w || this._stop(u)), !d && ((w || sn(u)) && (a.values = R.getPayload(), a.toValues = sn(c) ? null : K == uo ? [1] : We(p)), a.immediate != M && (a.immediate = M, !M && !g && this._set(u)), w)) {
      const { onRest: Te } = a;
      L(RS, (be) => jl(this, n, be));
      const me = pn(this, Dr(this, u));
      Pr(this._pendingCalls, me), this._pendingCalls.add(t), a.changed && X.batchedUpdates(() => {
        a.changed = !g, Te?.(me, this), g ? Ve(s.onRest, me) : a.onStart?.(me, this);
      });
    }
    g && this._set(I), d ? t(Hh(n.to, n, this._state, this)) : w ? this._start() : rt(this) && !T ? this._pendingCalls.add(t) : t(yh(I));
  }
  /** Update the `animation.to` value, which might be a `FluidValue` */
  _focus(e) {
    const n = this.animation;
    e !== n.to && (Gl(this) && this._detach(), n.to = e, Gl(this) && this._attach());
  }
  _attach() {
    let e = 0;
    const { to: n } = this.animation;
    sn(n) && (Er(n, this), Ya(n) && (e = n.priority + 1)), this.priority = e;
  }
  _detach() {
    const { to: e } = this.animation;
    sn(e) && so(e, this);
  }
  /**
   * Update the current value from outside the frameloop,
   * and return the `Animated` node.
   */
  _set(e, n = !0) {
    const t = $e(e);
    if (!N.und(t)) {
      const r = Sn(this);
      if (!r || !Bn(t, r.getValue())) {
        const o = ja(t);
        !r || r.constructor != o ? n_(this, o.create(t)) : r.setValue(t), r && X.batchedUpdates(() => {
          this._onChange(t, n);
        });
      }
    }
    return Sn(this);
  }
  _onStart() {
    const e = this.animation;
    e.changed || (e.changed = !0, Ur(
      this,
      "onStart",
      pn(this, Dr(this, e.to)),
      this
    ));
  }
  _onChange(e, n) {
    n || (this._onStart(), Ve(this.animation.onChange, e, this)), Ve(this.defaultProps.onChange, e, this), super._onChange(e, n);
  }
  // This method resets the animation state (even if already animating) to
  // ensure the latest from/to range is used, and it also ensures this spring
  // is added to the frameloop.
  _start() {
    const e = this.animation;
    Sn(this).reset($e(e.to)), e.immediate || (e.fromValues = e.values.map((n) => n.lastPosition)), rt(this) || (xl(this, !0), Cr(this) || this._resume());
  }
  _resume() {
    dn.skipAnimation ? this.finish() : Mo.start(this);
  }
  /**
   * Exit the frameloop and notify `onRest` listeners.
   *
   * Always wrap `_stop` calls with `batchedUpdates`.
   */
  _stop(e, n) {
    if (rt(this)) {
      xl(this, !1);
      const t = this.animation;
      L(t.values, (o) => {
        o.done = !0;
      }), t.toValues && (t.onChange = t.onPause = t.onResume = void 0), io(this, {
        type: "idle",
        parent: this
      });
      const r = n ? Qt(this.get()) : pn(this.get(), Dr(this, e ?? t.to));
      Pr(this._pendingCalls, r), t.changed && (t.changed = !1, Ur(this, "onRest", r, this));
    }
  }
};
function Dr(e, n) {
  const t = _o(n), r = _o(e.get());
  return Bn(r, t);
}
function wh(e, n = e.loop, t = e.to) {
  const r = Ve(n);
  if (r) {
    const o = r !== !0 && Ds(r), i = (o || e).reverse, s = !o || o.reset;
    return co({
      ...e,
      loop: n,
      // Avoid updating default props when looping.
      default: !1,
      // Never loop the `pause` prop.
      pause: void 0,
      // For the "reverse" prop to loop as expected, the "to" prop
      // must be undefined. The "reverse" prop is ignored when the
      // "to" prop is an array or function.
      to: !i || Fa(t) ? t : void 0,
      // Ignore the "from" prop except on reset.
      from: s ? e.from : void 0,
      reset: s,
      // The "loop" prop can return a "useSpring" props object to
      // override any of the original props.
      ...o
    });
  }
}
function co(e) {
  const { to: n, from: t } = e = Ds(e), r = /* @__PURE__ */ new Set();
  return N.obj(n) && Bl(n, r), N.obj(t) && Bl(t, r), e.keys = r.size ? Array.from(r) : null, e;
}
function OS(e) {
  const n = co(e);
  return N.und(n.default) && (n.default = Cs(n)), n;
}
function Bl(e, n) {
  Pn(e, (t, r) => t != null && n.add(r));
}
var RS = [
  "onStart",
  "onRest",
  "onChange",
  "onPause",
  "onResume"
];
function jl(e, n, t) {
  e.animation[t] = n[t] !== Gh(n, t) ? vh(n[t], e.key) : void 0;
}
function Ur(e, n, ...t) {
  e.animation[n]?.(...t), e.defaultProps[n]?.(...t);
}
var bS = ["onStart", "onChange", "onRest"], gS = 1, i_ = class {
  constructor(e, n) {
    this.id = gS++, this.springs = {}, this.queue = [], this._lastAsyncId = 0, this._active = /* @__PURE__ */ new Set(), this._changed = /* @__PURE__ */ new Set(), this._started = !1, this._state = {
      paused: !1,
      pauseQueue: /* @__PURE__ */ new Set(),
      resumeQueue: /* @__PURE__ */ new Set(),
      timeouts: /* @__PURE__ */ new Set()
    }, this._events = {
      onStart: /* @__PURE__ */ new Map(),
      onChange: /* @__PURE__ */ new Map(),
      onRest: /* @__PURE__ */ new Map()
    }, this._onFrame = this._onFrame.bind(this), n && (this._flush = n), e && this.start({ default: !0, ...e });
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
    return this.each((n, t) => e[t] = n.get()), e;
  }
  /** Set the current values without animating. */
  set(e) {
    for (const n in e) {
      const t = e[n];
      N.und(t) || this.springs[n].set(t);
    }
  }
  /** Push an update onto the queue of each value. */
  update(e) {
    return e && this.queue.push(co(e)), this;
  }
  /**
   * Start the queued animations for every spring, and resolve the returned
   * promise once all queued animations have finished or been cancelled.
   *
   * When you pass a queue (instead of nothing), that queue is used instead of
   * the queued animations added with the `update` method, which are left alone.
   */
  start(e) {
    let { queue: n } = this;
    return e ? n = We(e).map(co) : this.queue = [], this._flush ? this._flush(this, n) : (Bh(this, n), za(this, n));
  }
  /** @internal */
  stop(e, n) {
    if (e !== !!e && (n = e), n) {
      const t = this.springs;
      L(We(n), (r) => t[r].stop(!!e));
    } else
      lo(this._state, this._lastAsyncId), this.each((t) => t.stop(!!e));
    return this;
  }
  /** Freeze the active animation in time */
  pause(e) {
    if (N.und(e))
      this.start({ pause: !0 });
    else {
      const n = this.springs;
      L(We(e), (t) => n[t].pause());
    }
    return this;
  }
  /** Resume the animation if paused. */
  resume(e) {
    if (N.und(e))
      this.start({ pause: !1 });
    else {
      const n = this.springs;
      L(We(e), (t) => n[t].resume());
    }
    return this;
  }
  /** Call a function once per spring value */
  each(e) {
    Pn(this.springs, e);
  }
  /** @internal Called at the end of every animation frame */
  _onFrame() {
    const { onStart: e, onChange: n, onRest: t } = this._events, r = this._active.size > 0, o = this._changed.size > 0;
    (r && !this._started || o && !this._started) && (this._started = !0, jr(e, ([a, u]) => {
      u.value = this.get(), a(u, this, this._item);
    }));
    const i = !r && this._started, s = o || i && t.size ? this.get() : null;
    o && n.size && jr(n, ([a, u]) => {
      u.value = s, a(u, this, this._item);
    }), i && (this._started = !1, jr(t, ([a, u]) => {
      u.value = s, a(u, this, this._item);
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
    X.onFrame(this._onFrame);
  }
};
function za(e, n) {
  return Promise.all(n.map((t) => Mh(e, t))).then(
    (t) => r_(e, t)
  );
}
async function Mh(e, n, t) {
  const { keys: r, to: o, from: i, loop: s, onRest: a, onResolve: u } = n, _ = N.obj(n.default) && n.default;
  s && (n.loop = !1), o === !1 && (n.to = null), i === !1 && (n.from = null);
  const c = N.arr(o) || N.fun(o) ? o : void 0;
  c ? (n.to = void 0, n.onRest = void 0, _ && (_.onRest = void 0)) : L(bS, (f) => {
    const h = n[f];
    if (N.fun(h)) {
      const O = e._events[f];
      n[f] = ({ finished: R, cancelled: g }) => {
        const I = O.get(h);
        I ? (R || (I.finished = !1), g && (I.cancelled = !0)) : O.set(h, {
          value: null,
          finished: R || !1,
          cancelled: g || !1
        });
      }, _ && (_[f] = n[f]);
    }
  });
  const l = e._state;
  n.pause === !l.paused ? (l.paused = n.pause, Pr(n.pause ? l.pauseQueue : l.resumeQueue)) : l.paused && (n.pause = !0);
  const m = (r || Object.keys(e.springs)).map(
    (f) => e.springs[f].start(n)
  ), T = n.cancel === !0 || Gh(n, "cancel") === !0;
  (c || T && l.asyncId) && m.push(
    Uh(++e._lastAsyncId, {
      props: n,
      state: l,
      actions: {
        pause: xa,
        resume: xa,
        start(f, h) {
          T ? (lo(l, e._lastAsyncId), h(Qt(e))) : (f.onRest = a, h(
            Hh(
              c,
              f,
              l,
              e
            )
          ));
        }
      }
    })
  ), l.paused && await new Promise((f) => {
    l.resumeQueue.add(f);
  });
  const d = r_(e, await Promise.all(m));
  if (s && d.finished && !(t && d.noop)) {
    const f = wh(n, s, o);
    if (f)
      return Bh(e, [f]), Mh(e, f, !0);
  }
  return u && X.batchedUpdates(() => u(d, e, e.item)), d;
}
function Ja(e, n) {
  const t = { ...e.springs };
  return n && L(We(n), (r) => {
    N.und(r.keys) && (r = co(r)), N.obj(r.to) || (r = { ...r, to: void 0 }), Lh(t, r, (o) => xh(o));
  }), kh(e, t), t;
}
function kh(e, n) {
  Pn(n, (t, r) => {
    e.springs[r] || (e.springs[r] = t, Er(t, e));
  });
}
function xh(e, n) {
  const t = new o_();
  return t.key = e, n && Er(t, n), t;
}
function Lh(e, n, t) {
  n.keys && L(n.keys, (r) => {
    (e[r] || (e[r] = t(r)))._prepareNode(n);
  });
}
function Bh(e, n) {
  L(n, (t) => {
    Lh(e.springs, t, (r) => xh(r, e));
  });
}
var Or = ({
  children: e,
  ...n
}) => {
  const t = Xe($i), r = n.pause || !!t.pause, o = n.immediate || !!t.immediate;
  n = ZA(() => ({ pause: r, immediate: o }), [r, o]);
  const { Provider: i } = $i;
  return /* @__PURE__ */ Kt.createElement(i, { value: n }, e);
}, $i = NS(Or, {});
Or.Provider = $i.Provider;
Or.Consumer = $i.Consumer;
function NS(e, n) {
  return Object.assign(e, Kt.createContext(n)), e.Provider._context = e, e.Consumer._context = e, e;
}
var ys = () => {
  const e = [], n = function(r) {
    FA();
    const o = [];
    return L(e, (i, s) => {
      if (N.und(r))
        o.push(i.start());
      else {
        const a = t(r, i, s);
        a && o.push(i.start(a));
      }
    }), o;
  };
  n.current = e, n.add = function(r) {
    e.includes(r) || e.push(r);
  }, n.delete = function(r) {
    const o = e.indexOf(r);
    ~o && e.splice(o, 1);
  }, n.pause = function() {
    return L(e, (r) => r.pause(...arguments)), this;
  }, n.resume = function() {
    return L(e, (r) => r.resume(...arguments)), this;
  }, n.set = function(r) {
    L(e, (o, i) => {
      const s = N.fun(r) ? r(i, o) : r;
      s && o.set(s);
    });
  }, n.start = function(r) {
    const o = [];
    return L(e, (i, s) => {
      if (N.und(r))
        o.push(i.start());
      else {
        const a = this._getProps(r, i, s);
        a && o.push(i.start(a));
      }
    }), o;
  }, n.stop = function() {
    return L(e, (r) => r.stop(...arguments)), this;
  }, n.update = function(r) {
    return L(e, (o, i) => o.update(this._getProps(r, o, i))), this;
  };
  const t = function(r, o, i) {
    return N.fun(r) ? r(i, o) : r;
  };
  return n._getProps = t, n;
};
function s_(e, n, t) {
  const r = N.fun(n) && n;
  r && !t && (t = []);
  const o = it(
    () => r || arguments.length == 3 ? ys() : void 0,
    []
  ), i = Z(0), s = e_(), a = it(
    () => ({
      ctrls: [],
      queue: [],
      flush(O, R) {
        const g = Ja(O, R);
        return i.current > 0 && !a.queue.length && !Object.keys(g).some((p) => !O.springs[p]) ? za(O, R) : new Promise((p) => {
          kh(O, g), a.queue.push(() => {
            p(za(O, R));
          }), s();
        });
      }
    }),
    []
  ), u = Z([...a.ctrls]), _ = [], c = Ba(e) || 0;
  it(() => {
    L(u.current.slice(e, c), (O) => {
      Va(O, o), O.stop(!0);
    }), u.current.length = e, l(c, e);
  }, [e]), it(() => {
    l(0, Math.min(c, e));
  }, t);
  function l(O, R) {
    for (let g = O; g < R; g++) {
      const I = u.current[g] || (u.current[g] = new i_(null, a.flush)), p = r ? r(g, I) : n[g];
      p && (_[g] = OS(p));
    }
  }
  const m = u.current.map((O, R) => Ja(O, _[R])), T = Xe(Or), d = Ba(T), f = T !== d && Ch(T);
  qe(() => {
    i.current++, a.ctrls = u.current;
    const { queue: O } = a;
    O.length && (a.queue = [], L(O, (R) => R())), L(u.current, (R, g) => {
      o?.add(R), f && R.start({ default: T });
      const I = _[g];
      I && (t_(R, I.ref), R.ref ? R.queue.push(I) : R.start(I));
    });
  }), Ss(() => () => {
    L(a.ctrls, (O) => O.stop(!0));
  });
  const h = m.map((O) => ({ ...O }));
  return o ? [h, o] : h;
}
function Rr(e, n) {
  const t = N.fun(e), [[r], o] = s_(
    1,
    t ? e : [e],
    t ? n || [] : n
  );
  return t || arguments.length == 2 ? [r, o] : r;
}
var IS = () => ys(), AS = () => Qe(IS)[0], SS = (e, n) => {
  const t = qA(() => new o_(e, n));
  return Ss(() => () => {
    t.stop();
  }), t;
};
function jh(e, n, t) {
  const r = N.fun(n) && n;
  r && !t && (t = []);
  let o = !0, i;
  const s = s_(
    e,
    (a, u) => {
      const _ = r ? r(a, u) : n;
      return i = _.ref, o = o && _.reverse, _;
    },
    // Ensure the props function is called when no deps exist.
    // This works around the 3 argument rule.
    t || [{}]
  );
  if (qe(() => {
    L(s[1].current, (a, u) => {
      const _ = s[1].current[u + (o ? 1 : -1)];
      if (t_(a, i), a.ref) {
        _ && a.update({ to: _.springs });
        return;
      }
      _ ? a.start({ to: _.springs }) : a.start();
    });
  }, t), r || arguments.length == 3) {
    const a = i ?? s[1];
    return a._getProps = (u, _, c) => {
      const l = N.fun(u) ? u(c, _) : u;
      if (l) {
        const m = a.current[c + (l.reverse ? 1 : -1)];
        return m && (l.to = m.springs), l;
      }
    }, s;
  }
  return s[0];
}
function Fh(e, n, t) {
  const r = N.fun(n) && n, {
    reset: o,
    sort: i,
    trail: s = 0,
    expires: a = !0,
    exitBeforeEnter: u = !1,
    onDestroyed: _,
    ref: c,
    config: l
  } = r ? r() : n, m = it(
    () => r || arguments.length == 3 ? ys() : void 0,
    []
  ), T = We(e), d = [], f = Z(null), h = o ? null : f.current;
  qe(() => {
    f.current = d;
  }), Ss(() => (L(d, (k) => {
    m?.add(k.ctrl), k.ctrl.ref = m;
  }), () => {
    L(f.current, (k) => {
      k.expired && clearTimeout(k.expirationId), Va(k.ctrl, m), k.ctrl.stop(!0);
    });
  }));
  const O = GS(T, r ? r() : n, h), R = o && f.current || [];
  qe(
    () => L(R, ({ ctrl: k, item: G, key: q }) => {
      Va(k, m), Ve(_, G, q);
    })
  );
  const g = [];
  if (h && L(h, (k, G) => {
    k.expired ? (clearTimeout(k.expirationId), R.push(k)) : (G = g[G] = O.indexOf(k.key), ~G && (d[G] = k));
  }), L(T, (k, G) => {
    d[G] || (d[G] = {
      key: O[G],
      item: k,
      phase: "mount",
      ctrl: new i_()
    }, d[G].ctrl.item = k);
  }), g.length) {
    let k = -1;
    const { leave: G } = r ? r() : n;
    L(g, (q, _e) => {
      const ee = h[_e];
      ~q ? (k = d.indexOf(ee), d[k] = { ...ee, item: T[q] }) : G && d.splice(++k, 0, ee);
    });
  }
  N.fun(i) && d.sort((k, G) => i(k.item, G.item));
  let I = -s;
  const p = e_(), H = Cs(n), M = /* @__PURE__ */ new Map(), K = Z(/* @__PURE__ */ new Map()), w = Z(!1);
  L(d, (k, G) => {
    const q = k.key, _e = k.phase, ee = r ? r() : n;
    let Ie, He;
    const ge = Ve(ee.delay || 0, q);
    if (_e == "mount")
      Ie = ee.enter, He = "enter";
    else {
      const j = O.indexOf(q) < 0;
      if (_e != "leave")
        if (j)
          Ie = ee.leave, He = "leave";
        else if (Ie = ee.update)
          He = "update";
        else
          return;
      else if (!j)
        Ie = ee.enter, He = "enter";
      else
        return;
    }
    if (Ie = Ve(Ie, k.item, G), Ie = N.obj(Ie) ? Ds(Ie) : { to: Ie }, !Ie.config) {
      const j = l || H.config;
      Ie.config = Ve(j, k.item, G, He);
    }
    I += s;
    const C = {
      ...H,
      // we need to add our props.delay value you here.
      delay: ge + I,
      ref: c,
      immediate: ee.immediate,
      // This prevents implied resets.
      reset: !1,
      // Merge any phase-specific props.
      ...Ie
    };
    if (He == "enter" && N.und(C.from)) {
      const j = r ? r() : n, E = N.und(j.initial) || h ? j.from : j.initial;
      C.from = Ve(E, k.item, G);
    }
    const { onResolve: U } = C;
    C.onResolve = (j) => {
      Ve(U, j);
      const E = f.current, J = E.find((S) => S.key === q);
      if (J && !(j.cancelled && J.phase != "update") && J.ctrl.idle) {
        const S = E.every((le) => le.ctrl.idle);
        if (J.phase == "leave") {
          const le = Ve(a, J.item);
          if (le !== !1) {
            const ne = le === !0 ? 0 : le;
            if (J.expired = !0, !S && ne > 0) {
              ne <= 2147483647 && (J.expirationId = setTimeout(p, ne));
              return;
            }
          }
        }
        S && E.some((le) => le.expired) && (K.current.delete(J), u && (w.current = !0), p());
      }
    };
    const P = Ja(k.ctrl, C);
    He === "leave" && u ? K.current.set(k, { phase: He, springs: P, payload: C }) : M.set(k, { phase: He, springs: P, payload: C });
  });
  const B = Xe(Or), Te = Ba(B), me = B !== Te && Ch(B);
  qe(() => {
    me && L(d, (k) => {
      k.ctrl.start({ default: B });
    });
  }, [B]), L(M, (k, G) => {
    if (K.current.size) {
      const q = d.findIndex((_e) => _e.key === G.key);
      d.splice(q, 1);
    }
  }), qe(
    () => {
      L(
        K.current.size ? K.current : M,
        ({ phase: k, payload: G }, q) => {
          const { ctrl: _e } = q;
          q.phase = k, m?.add(_e), me && k == "enter" && _e.start({ default: B }), G && (t_(_e, G.ref), (_e.ref || m) && !w.current ? _e.update(G) : (_e.start(G), w.current && (w.current = !1)));
        }
      );
    },
    o ? void 0 : t
  );
  const be = (k) => /* @__PURE__ */ Kt.createElement(Kt.Fragment, null, d.map((G, q) => {
    const { springs: _e } = M.get(G) || G.ctrl, ee = k({ ..._e }, G.item, G, q);
    return ee && ee.type ? /* @__PURE__ */ Kt.createElement(
      ee.type,
      {
        ...ee.props,
        key: N.str(G.key) || N.num(G.key) ? G.key : G.ctrl.id,
        ref: ee.ref
      }
    ) : ee;
  }));
  return m ? [be, m] : be;
}
var vS = 1;
function GS(e, { key: n, keys: t = n }, r) {
  if (t === null) {
    const o = /* @__PURE__ */ new Set();
    return e.map((i) => {
      const s = r && r.find(
        (a) => a.item === i && a.phase !== "leave" && !o.has(a)
      );
      return s ? (o.add(s), s.key) : vS++;
    });
  }
  return N.und(t) ? e : N.fun(t) ? e.map(t) : We(t);
}
var CS = ({
  container: e,
  ...n
} = {}) => {
  const [t, r] = Rr(
    () => ({
      scrollX: 0,
      scrollY: 0,
      scrollXProgress: 0,
      scrollYProgress: 0,
      ...n
    }),
    []
  );
  return qe(() => {
    const o = JA(
      ({ x: i, y: s }) => {
        r.start({
          scrollX: i.current,
          scrollXProgress: i.progress,
          scrollY: s.current,
          scrollYProgress: s.progress
        });
      },
      { container: e?.current || void 0 }
    );
    return () => {
      L(Object.values(t), (i) => i.stop()), o();
    };
  }, []), t;
}, DS = ({
  container: e,
  ...n
}) => {
  const [t, r] = Rr(
    () => ({
      width: 0,
      height: 0,
      ...n
    }),
    []
  );
  return qe(() => {
    const o = Ih(
      ({ width: i, height: s }) => {
        r.start({
          width: i,
          height: s,
          immediate: t.width.get() === 0 || t.height.get() === 0
        });
      },
      { container: e?.current || void 0 }
    );
    return () => {
      L(Object.values(t), (i) => i.stop()), o();
    };
  }, []), t;
}, US = {
  any: 0,
  all: 1
};
function yS(e, n) {
  const [t, r] = Qe(!1), o = Z(), i = N.fun(e) && e, s = i ? i() : {}, { to: a = {}, from: u = {}, ..._ } = s, c = i ? n : e, [l, m] = Rr(() => ({ from: u, ..._ }), []);
  return qe(() => {
    const T = o.current, {
      root: d,
      once: f,
      amount: h = "any",
      ...O
    } = c ?? {};
    if (!T || f && t || typeof IntersectionObserver > "u")
      return;
    const R = /* @__PURE__ */ new WeakMap(), g = () => (a && m.start(a), r(!0), f ? void 0 : () => {
      u && m.start(u), r(!1);
    }), I = (H) => {
      H.forEach((M) => {
        const K = R.get(M.target);
        if (M.isIntersecting !== !!K)
          if (M.isIntersecting) {
            const w = g();
            N.fun(w) ? R.set(M.target, w) : p.unobserve(M.target);
          } else
            K && (K(), R.delete(M.target));
      });
    }, p = new IntersectionObserver(I, {
      root: d && d.current || void 0,
      threshold: typeof h == "number" || Array.isArray(h) ? h : US[h],
      ...O
    });
    return p.observe(T), () => p.unobserve(T);
  }, [c]), i ? [o, l] : [o, t];
}
function HS({ children: e, ...n }) {
  return e(Rr(n));
}
function PS({
  items: e,
  children: n,
  ...t
}) {
  const r = jh(e.length, t);
  return e.map((o, i) => {
    const s = n(o, i);
    return N.fun(s) ? s(r[i]) : s;
  });
}
function wS({
  items: e,
  children: n,
  ...t
}) {
  return Fh(e, t)(n);
}
var Hs = class extends Us {
  constructor(e, n) {
    super(), this.source = e, this.idle = !0, this._active = /* @__PURE__ */ new Set(), this.calc = lr(...n);
    const t = this._get(), r = ja(t);
    n_(this, r.create(t));
  }
  advance(e) {
    const n = this._get(), t = this.get();
    Bn(n, t) || (Sn(this).setValue(n), this._onChange(n, this.idle)), !this.idle && Fl(this._active) && ia(this);
  }
  _get() {
    const e = N.arr(this.source) ? this.source.map($e) : We($e(this.source));
    return this.calc(...e);
  }
  _start() {
    this.idle && !Fl(this._active) && (this.idle = !1, L(vs(this), (e) => {
      e.done = !1;
    }), dn.skipAnimation ? (X.batchedUpdates(() => this.advance()), ia(this)) : Mo.start(this));
  }
  // Observe our sources only when we're observed.
  _attach() {
    let e = 1;
    L(We(this.source), (n) => {
      sn(n) && Er(n, this), Ya(n) && (n.idle || this._active.add(n), e = Math.max(e, n.priority + 1));
    }), this.priority = e, this._start();
  }
  // Stop observing our sources once we have no observers.
  _detach() {
    L(We(this.source), (e) => {
      sn(e) && so(e, this);
    }), this._active.clear(), ia(this);
  }
  /** @internal */
  eventObserved(e) {
    e.type == "change" ? e.idle ? this.advance() : (this._active.add(e.parent), this._start()) : e.type == "idle" ? this._active.delete(e.parent) : e.type == "priority" && (this.priority = We(this.source).reduce(
      (n, t) => Math.max(n, (Ya(t) ? t.priority : 0) + 1),
      0
    ));
  }
};
function MS(e) {
  return e.idle !== !1;
}
function Fl(e) {
  return !e.size || Array.from(e).every(MS);
}
function ia(e) {
  e.idle || (e.idle = !0, L(vs(e), (n) => {
    n.done = !0;
  }), io(e, {
    type: "idle",
    parent: e
  }));
}
var kS = (e, ...n) => new Hs(e, n), xS = (e, ...n) => (Nh(), new Hs(e, n));
dn.assign({
  createStringInterpolator: bh,
  to: (e, n) => new Hs(e, n)
});
var LS = Mo.advance, Vh = /^--/;
function BS(e, n) {
  return n == null || typeof n == "boolean" || n === "" ? "" : typeof n == "number" && n !== 0 && !Vh.test(e) && !(Wr.hasOwnProperty(e) && Wr[e]) ? n + "px" : ("" + n).trim();
}
var Vl = {};
function jS(e, n) {
  if (!e.nodeType || !e.setAttribute)
    return !1;
  const t = e.nodeName === "filter" || e.parentNode && e.parentNode.nodeName === "filter", { style: r, children: o, scrollTop: i, scrollLeft: s, viewBox: a, ...u } = n, _ = Object.values(u), c = Object.keys(u).map(
    (l) => t || e.hasAttribute(l) ? l : Vl[l] || (Vl[l] = l.replace(
      /([A-Z])/g,
      // Attributes are written in dash case
      (m) => "-" + m.toLowerCase()
    ))
  );
  o !== void 0 && (e.textContent = o);
  for (const l in r)
    if (r.hasOwnProperty(l)) {
      const m = BS(l, r[l]);
      Vh.test(l) ? e.style.setProperty(l, m) : e.style[l] = m;
    }
  c.forEach((l, m) => {
    e.setAttribute(l, _[m]);
  }), i !== void 0 && (e.scrollTop = i), s !== void 0 && (e.scrollLeft = s), a !== void 0 && e.setAttribute("viewBox", a);
}
var Wr = {
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
}, FS = (e, n) => e + n.charAt(0).toUpperCase() + n.substring(1), VS = ["Webkit", "Ms", "Moz", "O"];
Wr = Object.keys(Wr).reduce((e, n) => (VS.forEach((t) => e[FS(t, n)] = e[n]), e), Wr);
var WS = /^(matrix|translate|scale|rotate|skew)/, XS = /^(translate)/, YS = /^(rotate|skew)/, sa = (e, n) => N.num(e) && e !== 0 ? e + n : e, Oi = (e, n) => N.arr(e) ? e.every((t) => Oi(t, n)) : N.num(e) ? e === n : parseFloat(e) === n, KS = class extends Gs {
  constructor({ x: e, y: n, z: t, ...r }) {
    const o = [], i = [];
    (e || n || t) && (o.push([e || 0, n || 0, t || 0]), i.push((s) => [
      `translate3d(${s.map((a) => sa(a, "px")).join(",")})`,
      // prettier-ignore
      Oi(s, 0)
    ])), Pn(r, (s, a) => {
      if (a === "transform")
        o.push([s || ""]), i.push((u) => [u, u === ""]);
      else if (WS.test(a)) {
        if (delete r[a], N.und(s))
          return;
        const u = XS.test(a) ? "px" : YS.test(a) ? "deg" : "";
        o.push(We(s)), i.push(
          a === "rotate3d" ? ([_, c, l, m]) => [
            `rotate3d(${_},${c},${l},${sa(m, u)})`,
            Oi(m, 0)
          ] : (_) => [
            `${a}(${_.map((c) => sa(c, u)).join(",")})`,
            Oi(_, a.startsWith("scale") ? 1 : 0)
          ]
        );
      }
    }), o.length && (r.transform = new $S(o, i)), super(r);
  }
}, $S = class extends Eh {
  constructor(e, n) {
    super(), this.inputs = e, this.transforms = n, this._value = null;
  }
  get() {
    return this._value || (this._value = this._get());
  }
  _get() {
    let e = "", n = !0;
    return L(this.inputs, (t, r) => {
      const o = $e(t[0]), [i, s] = this.transforms[r](
        N.arr(o) ? o : t.map($e)
      );
      e += " " + i, n = n && s;
    }), n ? "none" : e;
  }
  // Start observing our inputs once we have an observer.
  observerAdded(e) {
    e == 1 && L(
      this.inputs,
      (n) => L(
        n,
        (t) => sn(t) && Er(t, this)
      )
    );
  }
  // Stop observing our inputs once we have no observers.
  observerRemoved(e) {
    e == 0 && L(
      this.inputs,
      (n) => L(
        n,
        (t) => sn(t) && so(t, this)
      )
    );
  }
  eventObserved(e) {
    e.type == "change" && (this._value = null), io(this, e);
  }
}, zS = [
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
dn.assign({
  batchedUpdates: tc,
  createStringInterpolator: bh,
  colors: bA
});
var JS = uS(zS, {
  applyAnimatedValues: jS,
  createAnimatedStyle: (e) => new KS(e),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getComponentProps: ({ scrollTop: e, scrollLeft: n, ...t }) => t
}), Wl = JS.animated;
const qS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Any: _S,
  BailSignal: Xa,
  Controller: i_,
  FrameValue: Us,
  Globals: dn,
  Interpolation: Hs,
  Spring: HS,
  SpringContext: Or,
  SpringRef: ys,
  SpringValue: o_,
  Trail: PS,
  Transition: wS,
  a: Wl,
  animated: Wl,
  config: Dh,
  createInterpolator: lr,
  easings: Th,
  inferTo: Ds,
  interpolate: xS,
  to: kS,
  update: LS,
  useChain: hS,
  useInView: yS,
  useIsomorphicLayoutEffect: qe,
  useReducedMotion: tS,
  useResize: DS,
  useScroll: CS,
  useSpring: Rr,
  useSpringRef: AS,
  useSpringValue: SS,
  useSprings: s_,
  useTrail: jh,
  useTransition: Fh
}, Symbol.toStringTag, { value: "Module" })), QS = () => {
  const { Spring: e } = us(), n = Rr({
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
    spring: n
  };
}, ZS = Ce.div`
  background: ${({ theme: e }) => e.grey};
  border-bottom: 2px solid ${({ theme: e }) => e.lightGrey};
  height: ${cn("100%", "42px")};
  box-sizing: border-box;
  ${Ht("space-between", "center")}
  ${ib(23)}
`, e0 = Ce.h2`
  color: ${({ theme: e }) => e.light};
`, n0 = Qn(() => {
  const e = es(), n = e.getActiveTab(), { spring: t, animatedDiv: r } = QS(), o = Nt(), { openFile: i, saveFile: s } = mf(), a = fA(), u = !e.isAllowedToExecute(), _ = yt(), { isSignInOpened: c, ModalComponents: l } = _.state, m = () => {
    o.tabs.createTab();
  }, T = (d) => () => {
    _.update({
      isSignInOpened: d
    });
  };
  return /* @__PURE__ */ nn(ZS, { as: r, style: t, children: [
    /* @__PURE__ */ V(
      aA,
      {
        runCode: a,
        createTab: m,
        openFile: i,
        saveFile: s
      }
    ),
    /* @__PURE__ */ nn(e0, { children: [
      n.label,
      " - CodeGear"
    ] }),
    /* @__PURE__ */ V(
      lA,
      {
        isDisabled: u,
        runCode: a,
        openSignIn: T(!0)
      }
    ),
    /* @__PURE__ */ V(
      l.SignIn,
      {
        isOpen: c,
        onClose: T(!1)
      }
    )
  ] });
}), w0 = () => /* @__PURE__ */ V(fu, { children: /* @__PURE__ */ V(n0, {}) });
class t0 {
  constructor(n) {
    Rt(this), this.state = n, this.getters = n.getters, this.actions = n.actions, this.codeRunner = new dA(n);
  }
}
class r0 {
  constructor() {
    this.activeKey = "", this.content = [], this.theme = "vs-dark", this.fontSize = 20, this.tabSize = 4, this.customBackground = "#3d3d3d", this.customColor = "#3d3d3d", this.isStorageDisabled = !1, this.executeMessages = [], Rt(this);
    const n = new Kd(this.isStorageDisabled);
    this.storage = n, this.getters = new tA(this), this.actions = new nA(this), this.services = new t0(this), this.theme = n.get("EDITOR_THEME", "vs-dark"), this.fontSize = Number(
      n.get("EDITOR_FONT_SIZE", 20)
    ), this.tabSize = Number(
      n.get("EDITOR_TAB_SIZE", 4)
    ), this.customBackground = n.get(
      "EDITOR_CUSTOM_BACKGROUND",
      "#3d3d3d"
    ), this.customColor = n.get("EDITOR_CUSTOM_COLOR", "#3d3d3d");
    const t = n.get("EDITOR_CONTENT_DATA", []);
    if (this.executeMessages = n.get(
      "EDITOR_EXECUTE_MESSAGES",
      []
    ), t.length === 0) {
      this.actions.tabs.createTab();
      const r = this.content[0];
      r.lang = oA, r.content = rA;
    }
    this.content = [...this.content, ...t], this.activeKey = this.content[0].key;
  }
}
const br = zi({}), M0 = ({ children: e }) => {
  const n = new r0();
  return /* @__PURE__ */ V(br.Provider, { value: n, children: e });
}, Wh = zi({}), k0 = ({ children: e, SignIn: n }) => {
  const t = it(
    () => ({
      isSettingsOpened: !1,
      isHtmlPreviewOpened: !1,
      isTerminalOpened: !0,
      isSignInOpened: !1,
      selectedTerminalTab: "terminal",
      ModalComponents: {
        SignIn: n
      }
    }),
    []
  ), r = (u, _) => ({ ...u, ..._ }), [o, i] = Jh(r, t), s = (u) => {
    o[u] ? i({ [u]: !1 }) : i({ [u]: !0 });
  }, a = it(
    () => ({
      state: o,
      update: i,
      toggle: s
    }),
    [o]
  );
  return /* @__PURE__ */ V(Wh.Provider, { value: a, children: e });
}, o0 = () => {
  const e = cd();
  return ({ background: n, color: t }) => {
    e?.editor.defineTheme(cf, {
      base: "vs",
      inherit: !0,
      rules: [],
      colors: {
        "editor.background": n,
        "editor.foreground": t
      }
    });
  };
};
function i0(e, n) {
  for (var t in n)
    e[t] = n[t];
  return e;
}
function Xl(e, n) {
  for (var t in e)
    if (t !== "__source" && !(t in n))
      return !0;
  for (var r in n)
    if (r !== "__source" && e[r] !== n[r])
      return !0;
  return !1;
}
function Yl(e) {
  this.props = e;
}
(Yl.prototype = new Kn()).isPureReactComponent = !0, Yl.prototype.shouldComponentUpdate = function(e, n) {
  return Xl(this.props, e) || Xl(this.state, n);
};
var Kl = F.__b;
F.__b = function(e) {
  e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), Kl && Kl(e);
};
var s0 = F.__e;
F.__e = function(e, n, t, r) {
  if (e.then) {
    for (var o, i = n; i = i.__; )
      if ((o = i.__c) && o.__c)
        return n.__e == null && (n.__e = t.__e, n.__k = t.__k), o.__c(e, n);
  }
  s0(e, n, t, r);
};
var $l = F.unmount;
function Xh(e, n, t) {
  return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(r) {
    typeof r.__c == "function" && r.__c();
  }), e.__c.__H = null), (e = i0({}, e)).__c != null && (e.__c.__P === t && (e.__c.__P = n), e.__c = null), e.__k = e.__k && e.__k.map(function(r) {
    return Xh(r, n, t);
  })), e;
}
function Yh(e, n, t) {
  return e && (e.__v = null, e.__k = e.__k && e.__k.map(function(r) {
    return Yh(r, n, t);
  }), e.__c && e.__c.__P === n && (e.__e && t.insertBefore(e.__e, e.__d), e.__c.__e = !0, e.__c.__P = t)), e;
}
function aa() {
  this.__u = 0, this.t = null, this.__b = null;
}
function Kh(e) {
  var n = e.__.__c;
  return n && n.__a && n.__a(e);
}
function Zo() {
  this.u = null, this.o = null;
}
F.unmount = function(e) {
  var n = e.__c;
  n && n.__R && n.__R(), n && e.__h === !0 && (e.type = null), $l && $l(e);
}, (aa.prototype = new Kn()).__c = function(e, n) {
  var t = n.__c, r = this;
  r.t == null && (r.t = []), r.t.push(t);
  var o = Kh(r.__v), i = !1, s = function() {
    i || (i = !0, t.__R = null, o ? o(a) : a());
  };
  t.__R = s;
  var a = function() {
    if (!--r.__u) {
      if (r.state.__a) {
        var _ = r.state.__a;
        r.__v.__k[0] = Yh(_, _.__c.__P, _.__c.__O);
      }
      var c;
      for (r.setState({ __a: r.__b = null }); c = r.t.pop(); )
        c.forceUpdate();
    }
  }, u = n.__h === !0;
  r.__u++ || u || r.setState({ __a: r.__b = r.__v.__k[0] }), e.then(s, s);
}, aa.prototype.componentWillUnmount = function() {
  this.t = [];
}, aa.prototype.render = function(e, n) {
  if (this.__b) {
    if (this.__v.__k) {
      var t = document.createElement("div"), r = this.__v.__k[0].__c;
      this.__v.__k[0] = Xh(this.__b, t, r.__O = r.__P);
    }
    this.__b = null;
  }
  var o = n.__a && F_(Qr, null, e.fallback);
  return o && (o.__h = null), [F_(Qr, null, n.__a ? null : e.children), o];
};
var zl = function(e, n, t) {
  if (++t[1] === t[0] && e.o.delete(n), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.o.size))
    for (t = e.u; t; ) {
      for (; t.length > 3; )
        t.pop()();
      if (t[1] < t[0])
        break;
      e.u = t = t[2];
    }
};
(Zo.prototype = new Kn()).__a = function(e) {
  var n = this, t = Kh(n.__v), r = n.o.get(e);
  return r[0]++, function(o) {
    var i = function() {
      n.props.revealOrder ? (r.push(o), zl(n, e, r)) : o();
    };
    t ? t(i) : i();
  };
}, Zo.prototype.render = function(e) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var n = Pi(e.children);
  e.revealOrder && e.revealOrder[0] === "b" && n.reverse();
  for (var t = n.length; t--; )
    this.o.set(n[t], this.u = [1, 0, this.u]);
  return e.children;
}, Zo.prototype.componentDidUpdate = Zo.prototype.componentDidMount = function() {
  var e = this;
  this.o.forEach(function(n, t) {
    zl(e, t, n);
  });
};
var a0 = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, u0 = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, _0 = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, l0 = /[A-Z0-9]/g, c0 = typeof document < "u", d0 = function(e) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e);
};
Kn.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
  Object.defineProperty(Kn.prototype, e, { configurable: !0, get: function() {
    return this["UNSAFE_" + e];
  }, set: function(n) {
    Object.defineProperty(this, e, { configurable: !0, writable: !0, value: n });
  } });
});
var Jl = F.event;
function f0() {
}
function h0() {
  return this.cancelBubble;
}
function m0() {
  return this.defaultPrevented;
}
F.event = function(e) {
  return Jl && (e = Jl(e)), e.persist = f0, e.isPropagationStopped = h0, e.isDefaultPrevented = m0, e.nativeEvent = e;
};
var p0 = { enumerable: !1, configurable: !0, get: function() {
  return this.class;
} }, ql = F.vnode;
F.vnode = function(e) {
  typeof e.type == "string" && function(n) {
    var t = n.props, r = n.type, o = {};
    for (var i in t) {
      var s = t[i];
      if (!(i === "value" && "defaultValue" in t && s == null || c0 && i === "children" && r === "noscript" || i === "class" || i === "className")) {
        var a = i.toLowerCase();
        i === "defaultValue" && "value" in t && t.value == null ? i = "value" : i === "download" && s === !0 ? s = "" : a === "ondoubleclick" ? i = "ondblclick" : a !== "onchange" || r !== "input" && r !== "textarea" || d0(t.type) ? a === "onfocus" ? i = "onfocusin" : a === "onblur" ? i = "onfocusout" : _0.test(i) ? i = a : r.indexOf("-") === -1 && u0.test(i) ? i = i.replace(l0, "-$&").toLowerCase() : s === null && (s = void 0) : a = i = "oninput", a === "oninput" && o[i = a] && (i = "oninputCapture"), o[i] = s;
      }
    }
    r == "select" && o.multiple && Array.isArray(o.value) && (o.value = Pi(t.children).forEach(function(u) {
      u.props.selected = o.value.indexOf(u.props.value) != -1;
    })), r == "select" && o.defaultValue != null && (o.value = Pi(t.children).forEach(function(u) {
      u.props.selected = o.multiple ? o.defaultValue.indexOf(u.props.value) != -1 : o.defaultValue == u.props.value;
    })), t.class && !t.className ? (o.class = t.class, Object.defineProperty(o, "className", p0)) : (t.className && !t.class || t.class && t.className) && (o.class = o.className = t.className), n.props = o;
  }(e), e.$$typeof = a0, ql && ql(e);
};
var Ql = F.__r;
F.__r = function(e) {
  Ql && Ql(e), e.__c;
};
var Zl = F.diffed;
F.diffed = function(e) {
  Zl && Zl(e);
  var n = e.props, t = e.__e;
  t != null && e.type === "textarea" && "value" in n && n.value !== t.value && (t.value = n.value == null ? "" : n.value);
};
const x0 = qh(() => import("./editor-0ddf20e1.mjs").then((e) => e.e));
export {
  Wh as $,
  fu as A,
  C0 as B,
  Nt as C,
  Ra as D,
  hf as E,
  pE as F,
  Tu as G,
  w0 as H,
  uA as I,
  D0 as J,
  ot as K,
  U0 as L,
  k0 as M,
  A0 as N,
  cf as O,
  I0 as P,
  Ob as Q,
  xO as R,
  lf as S,
  H0 as T,
  cd as U,
  Tb as V,
  x0 as W,
  nA as X,
  tA as Y,
  r0 as Z,
  br as _,
  hr as a,
  o0 as b,
  us as c,
  yt as d,
  aT as e,
  P0 as f,
  S0 as g,
  _T as h,
  eR as i,
  tn as j,
  iT as k,
  Yd as l,
  BO as m,
  Nu as n,
  Qn as o,
  N0 as p,
  cb as q,
  Ht as r,
  Ce as s,
  Eb as t,
  LO as u,
  M0 as v,
  cn as w,
  y0 as x,
  v0 as y,
  G0 as z
};
