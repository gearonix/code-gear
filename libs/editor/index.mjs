import { jsx as b, jsxs as Z, Fragment as bo } from "react/jsx-runtime";
import { Select as ss, message as ff, ConfigProvider as pf, Button as Lr, Typography as Tf, ColorPicker as T_, Switch as Ef, Tabs as dc, Popconfirm as Of } from "antd";
import * as sn from "react";
import ve, { useState as ze, forwardRef as ir, memo as sr, useContext as tn, useRef as ee, createContext as as, useEffect as Se, useMemo as mt, useCallback as et, useLayoutEffect as hc, createElement as Rf, useImperativeHandle as mc, useReducer as bf } from "react";
import { unstable_batchedUpdates as fc, createPortal as gf } from "react-dom";
import Nf from "react-smooth-scrollbar";
import { Link as pc } from "react-router-dom";
function ae(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    t[r - 1] = arguments[r];
  throw new Error(typeof e == "number" ? "[MobX] minified error nr: " + e + (t.length ? " " + t.map(String).join(",") : "") + ". Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts" : "[MobX] " + e);
}
var If = {};
function cu() {
  return typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : If;
}
var Tc = Object.assign, Di = Object.getOwnPropertyDescriptor, Pn = Object.defineProperty, go = Object.prototype, ba = [];
Object.freeze(ba);
var Ec = {};
Object.freeze(Ec);
var Af = typeof Proxy < "u", Sf = /* @__PURE__ */ Object.toString();
function Oc() {
  Af || ae("Proxy not available");
}
function Rc(e) {
  var n = !1;
  return function() {
    if (!n)
      return n = !0, e.apply(this, arguments);
  };
}
var $t = function() {
};
function An(e) {
  return typeof e == "function";
}
function xt(e) {
  var n = typeof e;
  switch (n) {
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
function nt(e) {
  if (!us(e))
    return !1;
  var n = Object.getPrototypeOf(e);
  if (n == null)
    return !0;
  var t = Object.hasOwnProperty.call(n, "constructor") && n.constructor;
  return typeof t == "function" && t.toString() === Sf;
}
function bc(e) {
  var n = e?.constructor;
  return n ? n.name === "GeneratorFunction" || n.displayName === "GeneratorFunction" : !1;
}
function No(e, n, t) {
  Pn(e, n, {
    enumerable: !1,
    writable: !0,
    configurable: !0,
    value: t
  });
}
function gc(e, n, t) {
  Pn(e, n, {
    enumerable: !1,
    writable: !1,
    configurable: !0,
    value: t
  });
}
function Gt(e, n) {
  var t = "isMobX" + e;
  return n.prototype[t] = !0, function(r) {
    return us(r) && r[t] === !0;
  };
}
function Er(e) {
  return e instanceof Map;
}
function Io(e) {
  return e instanceof Set;
}
var Nc = typeof Object.getOwnPropertySymbols < "u";
function Gf(e) {
  var n = Object.keys(e);
  if (!Nc)
    return n;
  var t = Object.getOwnPropertySymbols(e);
  return t.length ? [].concat(n, t.filter(function(r) {
    return go.propertyIsEnumerable.call(e, r);
  })) : n;
}
var ar = typeof Reflect < "u" && Reflect.ownKeys ? Reflect.ownKeys : Nc ? function(e) {
  return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
} : (
  /* istanbul ignore next */
  Object.getOwnPropertyNames
);
function Ic(e) {
  return e === null ? null : typeof e == "object" ? "" + e : e;
}
function Jn(e, n) {
  return go.hasOwnProperty.call(e, n);
}
var vf = Object.getOwnPropertyDescriptors || function(n) {
  var t = {};
  return ar(n).forEach(function(r) {
    t[r] = Di(n, r);
  }), t;
};
function E_(e, n) {
  for (var t = 0; t < n.length; t++) {
    var r = n[t];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, yf(r.key), r);
  }
}
function du(e, n, t) {
  return n && E_(e.prototype, n), t && E_(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function ur() {
  return ur = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = arguments[n];
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    }
    return e;
  }, ur.apply(this, arguments);
}
function Ac(e, n) {
  e.prototype = Object.create(n.prototype), e.prototype.constructor = e, ga(e, n);
}
function ga(e, n) {
  return ga = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, ga(e, n);
}
function $s(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Cf(e, n) {
  if (e) {
    if (typeof e == "string")
      return O_(e, n);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set")
      return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return O_(e, n);
  }
}
function O_(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var t = 0, r = new Array(n); t < n; t++)
    r[t] = e[t];
  return r;
}
function zt(e, n) {
  var t = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t)
    return (t = t.call(e)).next.bind(t);
  if (Array.isArray(e) || (t = Cf(e)) || n && e && typeof e.length == "number") {
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
function Df(e, n) {
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
function yf(e) {
  var n = Df(e, "string");
  return typeof n == "symbol" ? n : String(n);
}
var Hn = /* @__PURE__ */ Symbol("mobx-stored-annotations");
function Mn(e) {
  function n(t, r) {
    Ao(t, r, e);
  }
  return Object.assign(n, e);
}
function Ao(e, n, t) {
  Jn(e, Hn) || No(e, Hn, ur({}, e[Hn])), Bf(t) || (e[Hn][n] = t);
}
function Uf(e) {
  return Jn(e, Hn) || No(e, Hn, ur({}, e[Hn])), e[Hn];
}
var W = /* @__PURE__ */ Symbol("mobx administration"), So = /* @__PURE__ */ function() {
  function e(t) {
    t === void 0 && (t = "Atom"), this.name_ = void 0, this.isPendingUnobservation_ = !1, this.isBeingObserved_ = !1, this.observers_ = /* @__PURE__ */ new Set(), this.diffValue_ = 0, this.lastAccessedBy_ = 0, this.lowestObserverState_ = se.NOT_TRACKING_, this.onBOL = void 0, this.onBUOL = void 0, this.name_ = t;
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
    return Xc(this);
  }, n.reportChanged = function() {
    Ze(), Kc(this), v.stateVersion = v.stateVersion < Number.MAX_SAFE_INTEGER ? v.stateVersion + 1 : Number.MIN_SAFE_INTEGER, en();
  }, n.toString = function() {
    return this.name_;
  }, e;
}(), hu = /* @__PURE__ */ Gt("Atom", So);
function Sc(e, n, t) {
  n === void 0 && (n = $t), t === void 0 && (t = $t);
  var r = new So(e);
  return n !== $t && jp(r, n), t !== $t && Zc(r, t), r;
}
function Hf(e, n) {
  return e === n;
}
function wf(e, n) {
  return Ru(e, n);
}
function Pf(e, n) {
  return Ru(e, n, 1);
}
function Mf(e, n) {
  return Object.is ? Object.is(e, n) : e === n ? e !== 0 || 1 / e === 1 / n : e !== e && n !== n;
}
var yi = {
  identity: Hf,
  structural: wf,
  default: Mf,
  shallow: Pf
};
function _r(e, n, t) {
  return Tu(e) ? e : Array.isArray(e) ? Le.array(e, {
    name: t
  }) : nt(e) ? Le.object(e, void 0, {
    name: t
  }) : Er(e) ? Le.map(e, {
    name: t
  }) : Io(e) ? Le.set(e, {
    name: t
  }) : typeof e == "function" && !pu(e) && !Mi(e) ? bc(e) ? no(e) : eo(t, e) : e;
}
function kf(e, n, t) {
  if (e == null || cr(e) || Ho(e) || Ct(e) || Bt(e))
    return e;
  if (Array.isArray(e))
    return Le.array(e, {
      name: t,
      deep: !1
    });
  if (nt(e))
    return Le.object(e, void 0, {
      name: t,
      deep: !1
    });
  if (Er(e))
    return Le.map(e, {
      name: t,
      deep: !1
    });
  if (Io(e))
    return Le.set(e, {
      name: t,
      deep: !1
    });
}
function _s(e) {
  return e;
}
function xf(e, n) {
  return Ru(e, n) ? n : e;
}
var Lf = "override";
function Bf(e) {
  return e.annotationType_ === Lf;
}
function Go(e, n) {
  return {
    annotationType_: e,
    options_: n,
    make_: jf,
    extend_: Ff
  };
}
function jf(e, n, t, r) {
  var o;
  if ((o = this.options_) != null && o.bound)
    return this.extend_(e, n, t, !1) === null ? 0 : 1;
  if (r === e.target_)
    return this.extend_(e, n, t, !1) === null ? 0 : 2;
  if (pu(t.value))
    return 1;
  var i = Gc(e, this, n, t, !1);
  return Pn(r, n, i), 2;
}
function Ff(e, n, t, r) {
  var o = Gc(e, this, n, t);
  return e.defineProperty_(n, o, r);
}
function Vf(e, n, t, r) {
  n.annotationType_, r.value;
}
function Gc(e, n, t, r, o) {
  var i, s, a, u, _, c, l;
  o === void 0 && (o = v.safeDescriptors), Vf(e, n, t, r);
  var f = r.value;
  if ((i = n.options_) != null && i.bound) {
    var T;
    f = f.bind((T = e.proxy_) != null ? T : e.target_);
  }
  return {
    value: lr(
      (s = (a = n.options_) == null ? void 0 : a.name) != null ? s : t.toString(),
      f,
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
function vc(e, n) {
  return {
    annotationType_: e,
    options_: n,
    make_: Wf,
    extend_: Xf
  };
}
function Wf(e, n, t, r) {
  var o;
  if (r === e.target_)
    return this.extend_(e, n, t, !1) === null ? 0 : 2;
  if ((o = this.options_) != null && o.bound && (!Jn(e.target_, n) || !Mi(e.target_[n])) && this.extend_(e, n, t, !1) === null)
    return 0;
  if (Mi(t.value))
    return 1;
  var i = Cc(e, this, n, t, !1, !1);
  return Pn(r, n, i), 2;
}
function Xf(e, n, t, r) {
  var o, i = Cc(e, this, n, t, (o = this.options_) == null ? void 0 : o.bound);
  return e.defineProperty_(n, i, r);
}
function Kf(e, n, t, r) {
  n.annotationType_, r.value;
}
function Cc(e, n, t, r, o, i) {
  i === void 0 && (i = v.safeDescriptors), Kf(e, n, t, r);
  var s = r.value;
  if (Mi(s) || (s = no(s)), o) {
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
function mu(e, n) {
  return {
    annotationType_: e,
    options_: n,
    make_: Yf,
    extend_: $f
  };
}
function Yf(e, n, t) {
  return this.extend_(e, n, t, !1) === null ? 0 : 1;
}
function $f(e, n, t, r) {
  return zf(e, this, n, t), e.defineComputedProperty_(n, ur({}, this.options_, {
    get: t.get,
    set: t.set
  }), r);
}
function zf(e, n, t, r) {
  n.annotationType_, r.get;
}
function ls(e, n) {
  return {
    annotationType_: e,
    options_: n,
    make_: Jf,
    extend_: qf
  };
}
function Jf(e, n, t) {
  return this.extend_(e, n, t, !1) === null ? 0 : 1;
}
function qf(e, n, t, r) {
  var o, i;
  return Qf(e, this), e.defineObservableProperty_(n, t.value, (o = (i = this.options_) == null ? void 0 : i.enhancer) != null ? o : _r, r);
}
function Qf(e, n, t, r) {
  n.annotationType_;
}
var Zf = "true", ep = /* @__PURE__ */ Dc();
function Dc(e) {
  return {
    annotationType_: Zf,
    options_: e,
    make_: np,
    extend_: tp
  };
}
function np(e, n, t, r) {
  var o, i;
  if (t.get)
    return cs.make_(e, n, t, r);
  if (t.set) {
    var s = lr(n.toString(), t.set);
    return r === e.target_ ? e.defineProperty_(n, {
      configurable: v.safeDescriptors ? e.isPlainObject_ : !0,
      set: s
    }) === null ? 0 : 2 : (Pn(r, n, {
      configurable: !0,
      set: s
    }), 2);
  }
  if (r !== e.target_ && typeof t.value == "function") {
    var a;
    if (bc(t.value)) {
      var u, _ = (u = this.options_) != null && u.autoBind ? no.bound : no;
      return _.make_(e, n, t, r);
    }
    var c = (a = this.options_) != null && a.autoBind ? eo.bound : eo;
    return c.make_(e, n, t, r);
  }
  var l = ((o = this.options_) == null ? void 0 : o.deep) === !1 ? Le.ref : Le;
  if (typeof t.value == "function" && (i = this.options_) != null && i.autoBind) {
    var f;
    t.value = t.value.bind((f = e.proxy_) != null ? f : e.target_);
  }
  return l.make_(e, n, t, r);
}
function tp(e, n, t, r) {
  var o, i;
  if (t.get)
    return cs.extend_(e, n, t, r);
  if (t.set)
    return e.defineProperty_(n, {
      configurable: v.safeDescriptors ? e.isPlainObject_ : !0,
      set: lr(n.toString(), t.set)
    }, r);
  if (typeof t.value == "function" && (o = this.options_) != null && o.autoBind) {
    var s;
    t.value = t.value.bind((s = e.proxy_) != null ? s : e.target_);
  }
  var a = ((i = this.options_) == null ? void 0 : i.deep) === !1 ? Le.ref : Le;
  return a.extend_(e, n, t, r);
}
var rp = "observable", op = "observable.ref", ip = "observable.shallow", sp = "observable.struct", yc = {
  deep: !0,
  name: void 0,
  defaultDecorator: void 0,
  proxy: !0
};
Object.freeze(yc);
function zo(e) {
  return e || yc;
}
var Uc = /* @__PURE__ */ ls(rp), ap = /* @__PURE__ */ ls(op, {
  enhancer: _s
}), up = /* @__PURE__ */ ls(ip, {
  enhancer: kf
}), _p = /* @__PURE__ */ ls(sp, {
  enhancer: xf
}), Hc = /* @__PURE__ */ Mn(Uc);
function Jo(e) {
  return e.deep === !0 ? _r : e.deep === !1 ? _s : cp(e.defaultDecorator);
}
function lp(e) {
  var n;
  return e ? (n = e.defaultDecorator) != null ? n : Dc(e) : void 0;
}
function cp(e) {
  var n, t;
  return e && (n = (t = e.options_) == null ? void 0 : t.enhancer) != null ? n : _r;
}
function wc(e, n, t) {
  if (xt(n)) {
    Ao(e, n, Uc);
    return;
  }
  return Tu(e) ? e : nt(e) ? Le.object(e, n, t) : Array.isArray(e) ? Le.array(e, n) : Er(e) ? Le.map(e, n) : Io(e) ? Le.set(e, n) : typeof e == "object" && e !== null ? e : Le.box(e, n);
}
Tc(wc, Hc);
var dp = {
  box: function(n, t) {
    var r = zo(t);
    return new Mt(n, Jo(r), r.name, !0, r.equals);
  },
  array: function(n, t) {
    var r = zo(t);
    return (v.useProxies === !1 || r.proxy === !1 ? cT : tT)(n, Jo(r), r.name);
  },
  map: function(n, t) {
    var r = zo(t);
    return new ud(n, Jo(r), r.name);
  },
  set: function(n, t) {
    var r = zo(t);
    return new cd(n, Jo(r), r.name);
  },
  object: function(n, t, r) {
    return nd(v.useProxies === !1 || r?.proxy === !1 ? wo({}, r) : Qp({}, r), n, t);
  },
  ref: /* @__PURE__ */ Mn(ap),
  shallow: /* @__PURE__ */ Mn(up),
  deep: Hc,
  struct: /* @__PURE__ */ Mn(_p)
}, Le = /* @__PURE__ */ Tc(wc, dp), Pc = "computed", hp = "computed.struct", Mc = /* @__PURE__ */ mu(Pc), mp = /* @__PURE__ */ mu(hp, {
  equals: yi.structural
}), cs = function(n, t) {
  if (xt(t))
    return Ao(n, t, Mc);
  if (nt(n))
    return Mn(mu(Pc, n));
  var r = nt(t) ? t : {};
  return r.get = n, r.name || (r.name = n.name || ""), new Qr(r);
};
Object.assign(cs, Mc);
cs.struct = /* @__PURE__ */ Mn(mp);
var R_, b_, Ui = 0, fp = 1, pp = (R_ = (b_ = /* @__PURE__ */ Di(function() {
}, "name")) == null ? void 0 : b_.configurable) != null ? R_ : !1, g_ = {
  value: "action",
  configurable: !0,
  writable: !1,
  enumerable: !1
};
function lr(e, n, t, r) {
  t === void 0 && (t = !1);
  function o() {
    return Tp(e, t, n, r || this, arguments);
  }
  return o.isMobxAction = !0, pp && (g_.value = e, Pn(o, "name", g_)), o;
}
function Tp(e, n, t, r, o) {
  var i = Ep(e, n);
  try {
    return t.apply(r, o);
  } catch (s) {
    throw i.error_ = s, s;
  } finally {
    Op(i);
  }
}
function Ep(e, n, t, r) {
  var o = !1, i = 0, s = v.trackingDerivation, a = !n || !s;
  Ze();
  var u = v.allowStateChanges;
  a && (Or(), u = vo(!0));
  var _ = fu(!0), c = {
    runAsAction_: a,
    prevDerivation_: s,
    prevAllowStateChanges_: u,
    prevAllowStateReads_: _,
    notifySpy_: o,
    startTime_: i,
    actionId_: fp++,
    parentActionId_: Ui
  };
  return Ui = c.actionId_, c;
}
function Op(e) {
  Ui !== e.actionId_ && ae(30), Ui = e.parentActionId_, e.error_ !== void 0 && (v.suppressReactionErrors = !0), Co(e.prevAllowStateChanges_), Fr(e.prevAllowStateReads_), en(), e.runAsAction_ && bt(e.prevDerivation_), v.suppressReactionErrors = !1;
}
function Rp(e, n) {
  var t = vo(e);
  try {
    return n();
  } finally {
    Co(t);
  }
}
function vo(e) {
  var n = v.allowStateChanges;
  return v.allowStateChanges = e, n;
}
function Co(e) {
  v.allowStateChanges = e;
}
var kc;
kc = Symbol.toPrimitive;
var Mt = /* @__PURE__ */ function(e) {
  Ac(n, e);
  function n(r, o, i, s, a) {
    var u;
    return i === void 0 && (i = "ObservableValue"), a === void 0 && (a = yi.default), u = e.call(this, i) || this, u.enhancer = void 0, u.name_ = void 0, u.equals = void 0, u.hasUnreportedChange_ = !1, u.interceptors_ = void 0, u.changeListeners_ = void 0, u.value_ = void 0, u.dehancer = void 0, u.enhancer = o, u.name_ = i, u.equals = a, u.value_ = o(r, void 0, i), u;
  }
  var t = n.prototype;
  return t.dehanceValue = function(o) {
    return this.dehancer !== void 0 ? this.dehancer(o) : o;
  }, t.set = function(o) {
    this.value_, o = this.prepareNewValue_(o), o !== v.UNCHANGED && this.setNewValue_(o);
  }, t.prepareNewValue_ = function(o) {
    if (ln(this)) {
      var i = cn(this, {
        object: this,
        type: kn,
        newValue: o
      });
      if (!i)
        return v.UNCHANGED;
      o = i.newValue;
    }
    return o = this.enhancer(o, this.value_, this.name_), this.equals(this.value_, o) ? v.UNCHANGED : o;
  }, t.setNewValue_ = function(o) {
    var i = this.value_;
    this.value_ = o, this.reportChanged(), Nn(this) && In(this, {
      type: kn,
      object: this,
      newValue: o,
      oldValue: i
    });
  }, t.get = function() {
    return this.reportObserved(), this.dehanceValue(this.value_);
  }, t.intercept_ = function(o) {
    return yo(this, o);
  }, t.observe_ = function(o, i) {
    return i && o({
      observableKind: "value",
      debugObjectName: this.name_,
      object: this,
      type: kn,
      newValue: this.value_,
      oldValue: void 0
    }), Uo(this, o);
  }, t.raw = function() {
    return this.value_;
  }, t.toJSON = function() {
    return this.get();
  }, t.toString = function() {
    return this.name_ + "[" + this.value_ + "]";
  }, t.valueOf = function() {
    return Ic(this.get());
  }, t[kc] = function() {
    return this.valueOf();
  }, n;
}(So), bp = /* @__PURE__ */ Gt("ObservableValue", Mt), xc;
xc = Symbol.toPrimitive;
var Qr = /* @__PURE__ */ function() {
  function e(t) {
    this.dependenciesState_ = se.NOT_TRACKING_, this.observing_ = [], this.newObserving_ = null, this.isBeingObserved_ = !1, this.isPendingUnobservation_ = !1, this.observers_ = /* @__PURE__ */ new Set(), this.diffValue_ = 0, this.runId_ = 0, this.lastAccessedBy_ = 0, this.lowestObserverState_ = se.UP_TO_DATE_, this.unboundDepsCount_ = 0, this.value_ = new wi(null), this.name_ = void 0, this.triggeredBy_ = void 0, this.isComputing_ = !1, this.isRunningSetter_ = !1, this.derivation = void 0, this.setter_ = void 0, this.isTracing_ = Hi.NONE, this.scope_ = void 0, this.equals_ = void 0, this.requiresReaction_ = void 0, this.keepAlive_ = void 0, this.onBOL = void 0, this.onBUOL = void 0, t.get || ae(31), this.derivation = t.get, this.name_ = t.name || "ComputedValue", t.set && (this.setter_ = lr("ComputedValue-setter", t.set)), this.equals_ = t.equals || (t.compareStructural || t.struct ? yi.structural : yi.default), this.scope_ = t.context, this.requiresReaction_ = t.requiresReaction, this.keepAlive_ = !!t.keepAlive;
  }
  var n = e.prototype;
  return n.onBecomeStale_ = function() {
    Sp(this);
  }, n.onBO = function() {
    this.onBOL && this.onBOL.forEach(function(r) {
      return r();
    });
  }, n.onBUO = function() {
    this.onBUOL && this.onBUOL.forEach(function(r) {
      return r();
    });
  }, n.get = function() {
    if (this.isComputing_ && ae(32, this.name_, this.derivation), v.inBatch === 0 && // !globalState.trackingDerivatpion &&
    this.observers_.size === 0 && !this.keepAlive_)
      Na(this) && (this.warnAboutUntrackedRead_(), Ze(), this.value_ = this.computeValue_(!1), en());
    else if (Xc(this), Na(this)) {
      var r = v.trackingContext;
      this.keepAlive_ && !r && (v.trackingContext = this), this.trackAndCompute() && Ap(this), v.trackingContext = r;
    }
    var o = this.value_;
    if (li(o))
      throw o.cause;
    return o;
  }, n.set = function(r) {
    if (this.setter_) {
      this.isRunningSetter_ && ae(33, this.name_), this.isRunningSetter_ = !0;
      try {
        this.setter_.call(this.scope_, r);
      } finally {
        this.isRunningSetter_ = !1;
      }
    } else
      ae(34, this.name_);
  }, n.trackAndCompute = function() {
    var r = this.value_, o = (
      /* see #1208 */
      this.dependenciesState_ === se.NOT_TRACKING_
    ), i = this.computeValue_(!0), s = o || li(r) || li(i) || !this.equals_(r, i);
    return s && (this.value_ = i), s;
  }, n.computeValue_ = function(r) {
    this.isComputing_ = !0;
    var o = vo(!1), i;
    if (r)
      i = Lc(this, this.derivation, this.scope_);
    else if (v.disableErrorBoundaries === !0)
      i = this.derivation.call(this.scope_);
    else
      try {
        i = this.derivation.call(this.scope_);
      } catch (s) {
        i = new wi(s);
      }
    return Co(o), this.isComputing_ = !1, i;
  }, n.suspend_ = function() {
    this.keepAlive_ || (Ia(this), this.value_ = void 0);
  }, n.observe_ = function(r, o) {
    var i = this, s = !0, a = void 0;
    return Mp(function() {
      var u = i.get();
      if (!s || o) {
        var _ = Or();
        r({
          observableKind: "computed",
          debugObjectName: i.name_,
          type: kn,
          object: i,
          newValue: u,
          oldValue: a
        }), bt(_);
      }
      s = !1, a = u;
    });
  }, n.warnAboutUntrackedRead_ = function() {
  }, n.toString = function() {
    return this.name_ + "[" + this.derivation.toString() + "]";
  }, n.valueOf = function() {
    return Ic(this.get());
  }, n[xc] = function() {
    return this.valueOf();
  }, e;
}(), Do = /* @__PURE__ */ Gt("ComputedValue", Qr), se;
(function(e) {
  e[e.NOT_TRACKING_ = -1] = "NOT_TRACKING_", e[e.UP_TO_DATE_ = 0] = "UP_TO_DATE_", e[e.POSSIBLY_STALE_ = 1] = "POSSIBLY_STALE_", e[e.STALE_ = 2] = "STALE_";
})(se || (se = {}));
var Hi;
(function(e) {
  e[e.NONE = 0] = "NONE", e[e.LOG = 1] = "LOG", e[e.BREAK = 2] = "BREAK";
})(Hi || (Hi = {}));
var wi = function(n) {
  this.cause = void 0, this.cause = n;
};
function li(e) {
  return e instanceof wi;
}
function Na(e) {
  switch (e.dependenciesState_) {
    case se.UP_TO_DATE_:
      return !1;
    case se.NOT_TRACKING_:
    case se.STALE_:
      return !0;
    case se.POSSIBLY_STALE_: {
      for (var n = fu(!0), t = Or(), r = e.observing_, o = r.length, i = 0; i < o; i++) {
        var s = r[i];
        if (Do(s)) {
          if (v.disableErrorBoundaries)
            s.get();
          else
            try {
              s.get();
            } catch {
              return bt(t), Fr(n), !0;
            }
          if (e.dependenciesState_ === se.STALE_)
            return bt(t), Fr(n), !0;
        }
      }
      return jc(e), bt(t), Fr(n), !1;
    }
  }
}
function Lc(e, n, t) {
  var r = fu(!0);
  jc(e), e.newObserving_ = new Array(e.observing_.length + 100), e.unboundDepsCount_ = 0, e.runId_ = ++v.runId;
  var o = v.trackingDerivation;
  v.trackingDerivation = e, v.inBatch++;
  var i;
  if (v.disableErrorBoundaries === !0)
    i = n.call(t);
  else
    try {
      i = n.call(t);
    } catch (s) {
      i = new wi(s);
    }
  return v.inBatch--, v.trackingDerivation = o, gp(e), Fr(r), i;
}
function gp(e) {
  for (var n = e.observing_, t = e.observing_ = e.newObserving_, r = se.UP_TO_DATE_, o = 0, i = e.unboundDepsCount_, s = 0; s < i; s++) {
    var a = t[s];
    a.diffValue_ === 0 && (a.diffValue_ = 1, o !== s && (t[o] = a), o++), a.dependenciesState_ > r && (r = a.dependenciesState_);
  }
  for (t.length = o, e.newObserving_ = null, i = n.length; i--; ) {
    var u = n[i];
    u.diffValue_ === 0 && Vc(u, e), u.diffValue_ = 0;
  }
  for (; o--; ) {
    var _ = t[o];
    _.diffValue_ === 1 && (_.diffValue_ = 0, Ip(_, e));
  }
  r !== se.UP_TO_DATE_ && (e.dependenciesState_ = r, e.onBecomeStale_());
}
function Ia(e) {
  var n = e.observing_;
  e.observing_ = [];
  for (var t = n.length; t--; )
    Vc(n[t], e);
  e.dependenciesState_ = se.NOT_TRACKING_;
}
function Bc(e) {
  var n = Or();
  try {
    return e();
  } finally {
    bt(n);
  }
}
function Or() {
  var e = v.trackingDerivation;
  return v.trackingDerivation = null, e;
}
function bt(e) {
  v.trackingDerivation = e;
}
function fu(e) {
  var n = v.allowStateReads;
  return v.allowStateReads = e, n;
}
function Fr(e) {
  v.allowStateReads = e;
}
function jc(e) {
  if (e.dependenciesState_ !== se.UP_TO_DATE_) {
    e.dependenciesState_ = se.UP_TO_DATE_;
    for (var n = e.observing_, t = n.length; t--; )
      n[t].lowestObserverState_ = se.UP_TO_DATE_;
  }
}
var ci = function() {
  this.version = 6, this.UNCHANGED = {}, this.trackingDerivation = null, this.trackingContext = null, this.runId = 0, this.mobxGuid = 0, this.inBatch = 0, this.pendingUnobservations = [], this.pendingReactions = [], this.isRunningReactions = !1, this.allowStateChanges = !1, this.allowStateReads = !0, this.enforceActions = !0, this.spyListeners = [], this.globalReactionErrorHandlers = [], this.computedRequiresReaction = !1, this.reactionRequiresObservable = !1, this.observableRequiresReaction = !1, this.disableErrorBoundaries = !1, this.suppressReactionErrors = !1, this.useProxies = !0, this.verifyProxies = !1, this.safeDescriptors = !0, this.stateVersion = Number.MIN_SAFE_INTEGER;
}, di = !0, Fc = !1, v = /* @__PURE__ */ function() {
  var e = /* @__PURE__ */ cu();
  return e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (di = !1), e.__mobxGlobals && e.__mobxGlobals.version !== new ci().version && (di = !1), di ? e.__mobxGlobals ? (e.__mobxInstanceCount += 1, e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}), e.__mobxGlobals) : (e.__mobxInstanceCount = 1, e.__mobxGlobals = /* @__PURE__ */ new ci()) : (setTimeout(function() {
    Fc || ae(35);
  }, 1), new ci());
}();
function Np() {
  if ((v.pendingReactions.length || v.inBatch || v.isRunningReactions) && ae(36), Fc = !0, di) {
    var e = cu();
    --e.__mobxInstanceCount === 0 && (e.__mobxGlobals = void 0), v = new ci();
  }
}
function Ip(e, n) {
  e.observers_.add(n), e.lowestObserverState_ > n.dependenciesState_ && (e.lowestObserverState_ = n.dependenciesState_);
}
function Vc(e, n) {
  e.observers_.delete(n), e.observers_.size === 0 && Wc(e);
}
function Wc(e) {
  e.isPendingUnobservation_ === !1 && (e.isPendingUnobservation_ = !0, v.pendingUnobservations.push(e));
}
function Ze() {
  v.inBatch++;
}
function en() {
  if (--v.inBatch === 0) {
    Yc();
    for (var e = v.pendingUnobservations, n = 0; n < e.length; n++) {
      var t = e[n];
      t.isPendingUnobservation_ = !1, t.observers_.size === 0 && (t.isBeingObserved_ && (t.isBeingObserved_ = !1, t.onBUO()), t instanceof Qr && t.suspend_());
    }
    v.pendingUnobservations = [];
  }
}
function Xc(e) {
  var n = v.trackingDerivation;
  return n !== null ? (n.runId_ !== e.lastAccessedBy_ && (e.lastAccessedBy_ = n.runId_, n.newObserving_[n.unboundDepsCount_++] = e, !e.isBeingObserved_ && v.trackingContext && (e.isBeingObserved_ = !0, e.onBO())), e.isBeingObserved_) : (e.observers_.size === 0 && v.inBatch > 0 && Wc(e), !1);
}
function Kc(e) {
  e.lowestObserverState_ !== se.STALE_ && (e.lowestObserverState_ = se.STALE_, e.observers_.forEach(function(n) {
    n.dependenciesState_ === se.UP_TO_DATE_ && n.onBecomeStale_(), n.dependenciesState_ = se.STALE_;
  }));
}
function Ap(e) {
  e.lowestObserverState_ !== se.STALE_ && (e.lowestObserverState_ = se.STALE_, e.observers_.forEach(function(n) {
    n.dependenciesState_ === se.POSSIBLY_STALE_ ? n.dependenciesState_ = se.STALE_ : n.dependenciesState_ === se.UP_TO_DATE_ && (e.lowestObserverState_ = se.UP_TO_DATE_);
  }));
}
function Sp(e) {
  e.lowestObserverState_ === se.UP_TO_DATE_ && (e.lowestObserverState_ = se.POSSIBLY_STALE_, e.observers_.forEach(function(n) {
    n.dependenciesState_ === se.UP_TO_DATE_ && (n.dependenciesState_ = se.POSSIBLY_STALE_, n.onBecomeStale_());
  }));
}
var Zr = /* @__PURE__ */ function() {
  function e(t, r, o, i) {
    t === void 0 && (t = "Reaction"), this.name_ = void 0, this.onInvalidate_ = void 0, this.errorHandler_ = void 0, this.requiresObservable_ = void 0, this.observing_ = [], this.newObserving_ = [], this.dependenciesState_ = se.NOT_TRACKING_, this.diffValue_ = 0, this.runId_ = 0, this.unboundDepsCount_ = 0, this.isDisposed_ = !1, this.isScheduled_ = !1, this.isTrackPending_ = !1, this.isRunning_ = !1, this.isTracing_ = Hi.NONE, this.name_ = t, this.onInvalidate_ = r, this.errorHandler_ = o, this.requiresObservable_ = i;
  }
  var n = e.prototype;
  return n.onBecomeStale_ = function() {
    this.schedule_();
  }, n.schedule_ = function() {
    this.isScheduled_ || (this.isScheduled_ = !0, v.pendingReactions.push(this), Yc());
  }, n.isScheduled = function() {
    return this.isScheduled_;
  }, n.runReaction_ = function() {
    if (!this.isDisposed_) {
      Ze(), this.isScheduled_ = !1;
      var r = v.trackingContext;
      if (v.trackingContext = this, Na(this)) {
        this.isTrackPending_ = !0;
        try {
          this.onInvalidate_();
        } catch (o) {
          this.reportExceptionInDerivation_(o);
        }
      }
      v.trackingContext = r, en();
    }
  }, n.track = function(r) {
    if (!this.isDisposed_) {
      Ze(), this.isRunning_ = !0;
      var o = v.trackingContext;
      v.trackingContext = this;
      var i = Lc(this, r, void 0);
      v.trackingContext = o, this.isRunning_ = !1, this.isTrackPending_ = !1, this.isDisposed_ && Ia(this), li(i) && this.reportExceptionInDerivation_(i.cause), en();
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
    this.isDisposed_ || (this.isDisposed_ = !0, this.isRunning_ || (Ze(), Ia(this), en()));
  }, n.getDisposer_ = function() {
    var r = this.dispose.bind(this);
    return r[W] = this, r;
  }, n.toString = function() {
    return "Reaction[" + this.name_ + "]";
  }, n.trace = function(r) {
  }, e;
}(), Gp = 100, Aa = function(n) {
  return n();
};
function Yc() {
  v.inBatch > 0 || v.isRunningReactions || Aa(vp);
}
function vp() {
  v.isRunningReactions = !0;
  for (var e = v.pendingReactions, n = 0; e.length > 0; ) {
    ++n === Gp && (console.error("[mobx] cycle in reaction: " + e[0]), e.splice(0));
    for (var t = e.splice(0), r = 0, o = t.length; r < o; r++)
      t[r].runReaction_();
  }
  v.isRunningReactions = !1;
}
var Pi = /* @__PURE__ */ Gt("Reaction", Zr);
function Cp(e) {
  var n = Aa;
  Aa = function(r) {
    return e(function() {
      return n(r);
    });
  };
}
function Vr() {
  return !1;
}
function Dp(e) {
  return console.warn("[mobx.spy] Is a no-op in production builds"), function() {
  };
}
var $c = "action", yp = "action.bound", zc = "autoAction", Up = "autoAction.bound", Hp = "<unnamed action>", Jc = /* @__PURE__ */ Go($c), wp = /* @__PURE__ */ Go(yp, {
  bound: !0
}), qc = /* @__PURE__ */ Go(zc, {
  autoAction: !0
}), Pp = /* @__PURE__ */ Go(Up, {
  autoAction: !0,
  bound: !0
});
function Qc(e) {
  var n = function(r, o) {
    if (An(r))
      return lr(r.name || Hp, r, e);
    if (An(o))
      return lr(r, o, e);
    if (xt(o))
      return Ao(r, o, e ? qc : Jc);
    if (xt(r))
      return Mn(Go(e ? zc : $c, {
        name: r,
        autoAction: e
      }));
  };
  return n;
}
var Jt = /* @__PURE__ */ Qc(!1);
Object.assign(Jt, Jc);
var eo = /* @__PURE__ */ Qc(!0);
Object.assign(eo, qc);
Jt.bound = /* @__PURE__ */ Mn(wp);
eo.bound = /* @__PURE__ */ Mn(Pp);
function pu(e) {
  return An(e) && e.isMobxAction === !0;
}
function Mp(e, n) {
  var t, r;
  n === void 0 && (n = Ec);
  var o = (t = (r = n) == null ? void 0 : r.name) != null ? t : "Autorun", i = !n.scheduler && !n.delay, s;
  if (i)
    s = new Zr(o, function() {
      this.track(_);
    }, n.onError, n.requiresObservable);
  else {
    var a = xp(n), u = !1;
    s = new Zr(o, function() {
      u || (u = !0, a(function() {
        u = !1, s.isDisposed_ || s.track(_);
      }));
    }, n.onError, n.requiresObservable);
  }
  function _() {
    e(s);
  }
  return s.schedule_(), s.getDisposer_();
}
var kp = function(n) {
  return n();
};
function xp(e) {
  return e.scheduler ? e.scheduler : e.delay ? function(n) {
    return setTimeout(n, e.delay);
  } : kp;
}
var Lp = "onBO", Bp = "onBUO";
function jp(e, n, t) {
  return ed(Lp, e, n, t);
}
function Zc(e, n, t) {
  return ed(Bp, e, n, t);
}
function ed(e, n, t, r) {
  var o = typeof r == "function" ? dr(n, t) : dr(n), i = An(r) ? r : t, s = e + "L";
  return o[s] ? o[s].add(i) : o[s] = /* @__PURE__ */ new Set([i]), function() {
    var a = o[s];
    a && (a.delete(i), a.size === 0 && delete o[s]);
  };
}
var Fp = "never", qo = "always", Vp = "observed";
function Wp(e) {
  e.isolateGlobalState === !0 && Np();
  var n = e.useProxies, t = e.enforceActions;
  if (n !== void 0 && (v.useProxies = n === qo ? !0 : n === Fp ? !1 : typeof Proxy < "u"), n === "ifavailable" && (v.verifyProxies = !0), t !== void 0) {
    var r = t === qo ? qo : t === Vp;
    v.enforceActions = r, v.allowStateChanges = !(r === !0 || r === qo);
  }
  ["computedRequiresReaction", "reactionRequiresObservable", "observableRequiresReaction", "disableErrorBoundaries", "safeDescriptors"].forEach(function(o) {
    o in e && (v[o] = !!e[o]);
  }), v.allowStateReads = !v.observableRequiresReaction, e.reactionScheduler && Cp(e.reactionScheduler);
}
function nd(e, n, t, r) {
  var o = vf(n), i = wo(e, r)[W];
  Ze();
  try {
    ar(o).forEach(function(s) {
      i.extend_(
        s,
        o[s],
        // must pass "undefined" for { key: undefined }
        t && s in t ? t[s] : !0
      );
    });
  } finally {
    en();
  }
  return e;
}
function Xp(e, n) {
  return td(dr(e, n));
}
function td(e) {
  var n = {
    name: e.name_
  };
  return e.observing_ && e.observing_.length > 0 && (n.dependencies = Kp(e.observing_).map(td)), n;
}
function Kp(e) {
  return Array.from(new Set(e));
}
var Yp = 0;
function rd() {
  this.message = "FLOW_CANCELLED";
}
rd.prototype = /* @__PURE__ */ Object.create(Error.prototype);
var N_ = /* @__PURE__ */ vc("flow"), $p = /* @__PURE__ */ vc("flow.bound", {
  bound: !0
}), no = /* @__PURE__ */ Object.assign(function(n, t) {
  if (xt(t))
    return Ao(n, t, N_);
  var r = n, o = r.name || "<unnamed flow>", i = function() {
    var a = this, u = arguments, _ = ++Yp, c = Jt(o + " - runid: " + _ + " - init", r).apply(a, u), l, f = void 0, T = new Promise(function(d, h) {
      var m = 0;
      l = h;
      function O(A) {
        f = void 0;
        var p;
        try {
          p = Jt(o + " - runid: " + _ + " - yield " + m++, c.next).call(c, A);
        } catch (w) {
          return h(w);
        }
        N(p);
      }
      function R(A) {
        f = void 0;
        var p;
        try {
          p = Jt(o + " - runid: " + _ + " - yield " + m++, c.throw).call(c, A);
        } catch (w) {
          return h(w);
        }
        N(p);
      }
      function N(A) {
        if (An(A?.then)) {
          A.then(N, h);
          return;
        }
        return A.done ? d(A.value) : (f = Promise.resolve(A.value), f.then(O, R));
      }
      O(void 0);
    });
    return T.cancel = Jt(o + " - runid: " + _ + " - cancel", function() {
      try {
        f && I_(f);
        var d = c.return(void 0), h = Promise.resolve(d.value);
        h.then($t, $t), I_(h), l(new rd());
      } catch (m) {
        l(m);
      }
    }), T;
  };
  return i.isMobXFlow = !0, i;
}, N_);
no.bound = /* @__PURE__ */ Mn($p);
function I_(e) {
  An(e.cancel) && e.cancel();
}
function Mi(e) {
  return e?.isMobXFlow === !0;
}
function zp(e, n) {
  return e ? n !== void 0 ? cr(e) ? e[W].values_.has(n) : !1 : cr(e) || !!e[W] || hu(e) || Pi(e) || Do(e) : !1;
}
function Tu(e) {
  return zp(e);
}
function Jp(e) {
  if (cr(e))
    return e[W].ownKeys_();
  ae(38);
}
function Qo(e, n, t) {
  return e.set(n, t), t;
}
function Kt(e, n) {
  if (e == null || typeof e != "object" || e instanceof Date || !Tu(e))
    return e;
  if (bp(e) || Do(e))
    return Kt(e.get(), n);
  if (n.has(e))
    return n.get(e);
  if (Ho(e)) {
    var t = Qo(n, e, new Array(e.length));
    return e.forEach(function(s, a) {
      t[a] = Kt(s, n);
    }), t;
  }
  if (Bt(e)) {
    var r = Qo(n, e, /* @__PURE__ */ new Set());
    return e.forEach(function(s) {
      r.add(Kt(s, n));
    }), r;
  }
  if (Ct(e)) {
    var o = Qo(n, e, /* @__PURE__ */ new Map());
    return e.forEach(function(s, a) {
      o.set(a, Kt(s, n));
    }), o;
  } else {
    var i = Qo(n, e, {});
    return Jp(e).forEach(function(s) {
      go.propertyIsEnumerable.call(e, s) && (i[s] = Kt(e[s], n));
    }), i;
  }
}
function od(e, n) {
  return Kt(e, /* @__PURE__ */ new Map());
}
function Kn(e, n) {
  n === void 0 && (n = void 0), Ze();
  try {
    return e.apply(n);
  } finally {
    en();
  }
}
function Ft(e) {
  return e[W];
}
var qp = {
  has: function(n, t) {
    return Ft(n).has_(t);
  },
  get: function(n, t) {
    return Ft(n).get_(t);
  },
  set: function(n, t, r) {
    var o;
    return xt(t) ? (o = Ft(n).set_(t, r, !0)) != null ? o : !0 : !1;
  },
  deleteProperty: function(n, t) {
    var r;
    return xt(t) ? (r = Ft(n).delete_(t, !0)) != null ? r : !0 : !1;
  },
  defineProperty: function(n, t, r) {
    var o;
    return (o = Ft(n).defineProperty_(t, r)) != null ? o : !0;
  },
  ownKeys: function(n) {
    return Ft(n).ownKeys_();
  },
  preventExtensions: function(n) {
    ae(13);
  }
};
function Qp(e, n) {
  var t, r;
  return Oc(), e = wo(e, n), (r = (t = e[W]).proxy_) != null ? r : t.proxy_ = new Proxy(e, qp);
}
function ln(e) {
  return e.interceptors_ !== void 0 && e.interceptors_.length > 0;
}
function yo(e, n) {
  var t = e.interceptors_ || (e.interceptors_ = []);
  return t.push(n), Rc(function() {
    var r = t.indexOf(n);
    r !== -1 && t.splice(r, 1);
  });
}
function cn(e, n) {
  var t = Or();
  try {
    for (var r = [].concat(e.interceptors_ || []), o = 0, i = r.length; o < i && (n = r[o](n), n && !n.type && ae(14), !!n); o++)
      ;
    return n;
  } finally {
    bt(t);
  }
}
function Nn(e) {
  return e.changeListeners_ !== void 0 && e.changeListeners_.length > 0;
}
function Uo(e, n) {
  var t = e.changeListeners_ || (e.changeListeners_ = []);
  return t.push(n), Rc(function() {
    var r = t.indexOf(n);
    r !== -1 && t.splice(r, 1);
  });
}
function In(e, n) {
  var t = Or(), r = e.changeListeners_;
  if (r) {
    r = r.slice();
    for (var o = 0, i = r.length; o < i; o++)
      r[o](n);
    bt(t);
  }
}
function Zp(e, n, t) {
  var r = wo(e, t)[W];
  Ze();
  try {
    var o;
    (o = n) != null || (n = Uf(e)), ar(n).forEach(function(i) {
      return r.make_(i, n[i]);
    });
  } finally {
    en();
  }
  return e;
}
var zs = /* @__PURE__ */ Symbol("mobx-keys");
function rt(e, n, t) {
  if (nt(e))
    return nd(e, e, n, t);
  var r = wo(e, t)[W];
  if (!e[zs]) {
    var o = Object.getPrototypeOf(e), i = new Set([].concat(ar(e), ar(o)));
    i.delete("constructor"), i.delete(W), No(o, zs, i);
  }
  Ze();
  try {
    e[zs].forEach(function(s) {
      return r.make_(
        s,
        // must pass "undefined" for { key: undefined }
        n && s in n ? n[s] : !0
      );
    });
  } finally {
    en();
  }
  return e;
}
var A_ = "splice", kn = "update", eT = 1e4, nT = {
  get: function(n, t) {
    var r = n[W];
    return t === W ? r : t === "length" ? r.getArrayLength_() : typeof t == "string" && !isNaN(t) ? r.get_(parseInt(t)) : Jn(ki, t) ? ki[t] : n[t];
  },
  set: function(n, t, r) {
    var o = n[W];
    return t === "length" && o.setArrayLength_(r), typeof t == "symbol" || isNaN(t) ? n[t] = r : o.set_(parseInt(t), r), !0;
  },
  preventExtensions: function() {
    ae(15);
  }
}, Eu = /* @__PURE__ */ function() {
  function e(t, r, o, i) {
    t === void 0 && (t = "ObservableArray"), this.owned_ = void 0, this.legacyMode_ = void 0, this.atom_ = void 0, this.values_ = [], this.interceptors_ = void 0, this.changeListeners_ = void 0, this.enhancer_ = void 0, this.dehancer = void 0, this.proxy_ = void 0, this.lastKnownLength_ = 0, this.owned_ = o, this.legacyMode_ = i, this.atom_ = new So(t), this.enhancer_ = function(s, a) {
      return r(s, a, "ObservableArray[..]");
    };
  }
  var n = e.prototype;
  return n.dehanceValue_ = function(r) {
    return this.dehancer !== void 0 ? this.dehancer(r) : r;
  }, n.dehanceValues_ = function(r) {
    return this.dehancer !== void 0 && r.length > 0 ? r.map(this.dehancer) : r;
  }, n.intercept_ = function(r) {
    return yo(this, r);
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
    }), Uo(this, r);
  }, n.getArrayLength_ = function() {
    return this.atom_.reportObserved(), this.values_.length;
  }, n.setArrayLength_ = function(r) {
    (typeof r != "number" || isNaN(r) || r < 0) && ae("Out of range: " + r);
    var o = this.values_.length;
    if (r !== o)
      if (r > o) {
        for (var i = new Array(r - o), s = 0; s < r - o; s++)
          i[s] = void 0;
        this.spliceWithArray_(o, 0, i);
      } else
        this.spliceWithArray_(r, o - r);
  }, n.updateArrayLength_ = function(r, o) {
    r !== this.lastKnownLength_ && ae(16), this.lastKnownLength_ += o, this.legacyMode_ && o > 0 && fd(r + o + 1);
  }, n.spliceWithArray_ = function(r, o, i) {
    var s = this;
    this.atom_;
    var a = this.values_.length;
    if (r === void 0 ? r = 0 : r > a ? r = a : r < 0 && (r = Math.max(0, a + r)), arguments.length === 1 ? o = a - r : o == null ? o = 0 : o = Math.max(0, Math.min(o, a - r)), i === void 0 && (i = ba), ln(this)) {
      var u = cn(this, {
        object: this.proxy_,
        type: A_,
        index: r,
        removedCount: o,
        added: i
      });
      if (!u)
        return ba;
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
    if (i.length < eT) {
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
    var s = !this.owned_ && Vr(), a = Nn(this), u = a || s ? {
      observableKind: "array",
      object: this.proxy_,
      type: kn,
      debugObjectName: this.atom_.name_,
      index: r,
      newValue: o,
      oldValue: i
    } : null;
    this.atom_.reportChanged(), a && In(this, u);
  }, n.notifyArraySplice_ = function(r, o, i) {
    var s = !this.owned_ && Vr(), a = Nn(this), u = a || s ? {
      observableKind: "array",
      object: this.proxy_,
      debugObjectName: this.atom_.name_,
      type: A_,
      index: r,
      removed: i,
      added: o,
      removedCount: i.length,
      addedCount: o.length
    } : null;
    this.atom_.reportChanged(), a && In(this, u);
  }, n.get_ = function(r) {
    if (this.legacyMode_ && r >= this.values_.length) {
      console.warn("[mobx] Out of bounds read: " + r);
      return;
    }
    return this.atom_.reportObserved(), this.dehanceValue_(this.values_[r]);
  }, n.set_ = function(r, o) {
    var i = this.values_;
    if (this.legacyMode_ && r > i.length && ae(17, r, i.length), r < i.length) {
      this.atom_;
      var s = i[r];
      if (ln(this)) {
        var a = cn(this, {
          type: kn,
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
function tT(e, n, t, r) {
  t === void 0 && (t = "ObservableArray"), r === void 0 && (r = !1), Oc();
  var o = new Eu(t, n, r, !1);
  gc(o.values_, W, o);
  var i = new Proxy(o.values_, nT);
  if (o.proxy_ = i, e && e.length) {
    var s = vo(!0);
    o.spliceWithArray_(0, 0, e), Co(s);
  }
  return i;
}
var ki = {
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
    return v.trackingDerivation && ae(37, "reverse"), this.replace(this.slice().reverse()), this;
  },
  sort: function() {
    v.trackingDerivation && ae(37, "sort");
    var n = this.slice();
    return n.sort.apply(n, arguments), this.replace(n), this;
  },
  remove: function(n) {
    var t = this[W], r = t.dehanceValues_(t.values_).indexOf(n);
    return r > -1 ? (this.splice(r, 1), !0) : !1;
  }
};
He("concat", ot);
He("flat", ot);
He("includes", ot);
He("indexOf", ot);
He("join", ot);
He("lastIndexOf", ot);
He("slice", ot);
He("toString", ot);
He("toLocaleString", ot);
He("every", vt);
He("filter", vt);
He("find", vt);
He("findIndex", vt);
He("flatMap", vt);
He("forEach", vt);
He("map", vt);
He("some", vt);
He("reduce", id);
He("reduceRight", id);
function He(e, n) {
  typeof Array.prototype[e] == "function" && (ki[e] = n(e));
}
function ot(e) {
  return function() {
    var n = this[W];
    n.atom_.reportObserved();
    var t = n.dehanceValues_(n.values_);
    return t[e].apply(t, arguments);
  };
}
function vt(e) {
  return function(n, t) {
    var r = this, o = this[W];
    o.atom_.reportObserved();
    var i = o.dehanceValues_(o.values_);
    return i[e](function(s, a) {
      return n.call(t, s, a, r);
    });
  };
}
function id(e) {
  return function() {
    var n = this, t = this[W];
    t.atom_.reportObserved();
    var r = t.dehanceValues_(t.values_), o = arguments[0];
    return arguments[0] = function(i, s, a) {
      return o(i, s, a, n);
    }, r[e].apply(r, arguments);
  };
}
var rT = /* @__PURE__ */ Gt("ObservableArrayAdministration", Eu);
function Ho(e) {
  return us(e) && rT(e[W]);
}
var sd, ad, oT = {}, ft = "add", xi = "delete";
sd = Symbol.iterator;
ad = Symbol.toStringTag;
var ud = /* @__PURE__ */ function() {
  function e(t, r, o) {
    var i = this;
    r === void 0 && (r = _r), o === void 0 && (o = "ObservableMap"), this.enhancer_ = void 0, this.name_ = void 0, this[W] = oT, this.data_ = void 0, this.hasMap_ = void 0, this.keysAtom_ = void 0, this.interceptors_ = void 0, this.changeListeners_ = void 0, this.dehancer = void 0, this.enhancer_ = r, this.name_ = o, An(Map) || ae(18), this.keysAtom_ = Sc("ObservableMap.keys()"), this.data_ = /* @__PURE__ */ new Map(), this.hasMap_ = /* @__PURE__ */ new Map(), Rp(!0, function() {
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
      var s = i = new Mt(this.has_(r), _s, "ObservableMap.key?", !1);
      this.hasMap_.set(r, s), Zc(s, function() {
        return o.hasMap_.delete(r);
      });
    }
    return i.get();
  }, n.set = function(r, o) {
    var i = this.has_(r);
    if (ln(this)) {
      var s = cn(this, {
        type: i ? kn : ft,
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
    if (this.keysAtom_, ln(this)) {
      var i = cn(this, {
        type: xi,
        object: this,
        name: r
      });
      if (!i)
        return !1;
    }
    if (this.has_(r)) {
      var s = Vr(), a = Nn(this), u = a || s ? {
        observableKind: "map",
        debugObjectName: this.name_,
        type: xi,
        object: this,
        oldValue: this.data_.get(r).value_,
        name: r
      } : null;
      return Kn(function() {
        var _;
        o.keysAtom_.reportChanged(), (_ = o.hasMap_.get(r)) == null || _.setNewValue_(!1);
        var c = o.data_.get(r);
        c.setNewValue_(void 0), o.data_.delete(r);
      }), a && In(this, u), !0;
    }
    return !1;
  }, n.updateValue_ = function(r, o) {
    var i = this.data_.get(r);
    if (o = i.prepareNewValue_(o), o !== v.UNCHANGED) {
      var s = Vr(), a = Nn(this), u = a || s ? {
        observableKind: "map",
        debugObjectName: this.name_,
        type: kn,
        object: this,
        oldValue: i.value_,
        name: r,
        newValue: o
      } : null;
      i.setNewValue_(o), a && In(this, u);
    }
  }, n.addValue_ = function(r, o) {
    var i = this;
    this.keysAtom_, Kn(function() {
      var _, c = new Mt(o, i.enhancer_, "ObservableMap.key", !1);
      i.data_.set(r, c), o = c.value_, (_ = i.hasMap_.get(r)) == null || _.setNewValue_(!0), i.keysAtom_.reportChanged();
    });
    var s = Vr(), a = Nn(this), u = a || s ? {
      observableKind: "map",
      debugObjectName: this.name_,
      type: ft,
      object: this,
      name: r,
      newValue: o
    } : null;
    a && In(this, u);
  }, n.get = function(r) {
    return this.has(r) ? this.dehanceValue_(this.data_.get(r).get()) : this.dehanceValue_(void 0);
  }, n.dehanceValue_ = function(r) {
    return this.dehancer !== void 0 ? this.dehancer(r) : r;
  }, n.keys = function() {
    return this.keysAtom_.reportObserved(), this.data_.keys();
  }, n.values = function() {
    var r = this, o = this.keys();
    return to({
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
    return to({
      next: function() {
        var s = o.next(), a = s.done, u = s.value;
        return {
          done: a,
          value: a ? void 0 : [u, r.get(u)]
        };
      }
    });
  }, n[sd] = function() {
    return this.entries();
  }, n.forEach = function(r, o) {
    for (var i = zt(this), s; !(s = i()).done; ) {
      var a = s.value, u = a[0], _ = a[1];
      r.call(o, _, u, this);
    }
  }, n.merge = function(r) {
    var o = this;
    return Ct(r) && (r = new Map(r)), Kn(function() {
      nt(r) ? Gf(r).forEach(function(i) {
        return o.set(i, r[i]);
      }) : Array.isArray(r) ? r.forEach(function(i) {
        var s = i[0], a = i[1];
        return o.set(s, a);
      }) : Er(r) ? (r.constructor !== Map && ae(19, r), r.forEach(function(i, s) {
        return o.set(s, i);
      })) : r != null && ae(20, r);
    }), this;
  }, n.clear = function() {
    var r = this;
    Kn(function() {
      Bc(function() {
        for (var o = zt(r.keys()), i; !(i = o()).done; ) {
          var s = i.value;
          r.delete(s);
        }
      });
    });
  }, n.replace = function(r) {
    var o = this;
    return Kn(function() {
      for (var i = iT(r), s = /* @__PURE__ */ new Map(), a = !1, u = zt(o.data_.keys()), _; !(_ = u()).done; ) {
        var c = _.value;
        if (!i.has(c)) {
          var l = o.delete(c);
          if (l)
            a = !0;
          else {
            var f = o.data_.get(c);
            s.set(c, f);
          }
        }
      }
      for (var T = zt(i.entries()), d; !(d = T()).done; ) {
        var h = d.value, m = h[0], O = h[1], R = o.data_.has(m);
        if (o.set(m, O), o.data_.has(m)) {
          var N = o.data_.get(m);
          s.set(m, N), R || (a = !0);
        }
      }
      if (!a)
        if (o.data_.size !== s.size)
          o.keysAtom_.reportChanged();
        else
          for (var A = o.data_.keys(), p = s.keys(), w = A.next(), k = p.next(); !w.done; ) {
            if (w.value !== k.value) {
              o.keysAtom_.reportChanged();
              break;
            }
            w = A.next(), k = p.next();
          }
      o.data_ = s;
    }), this;
  }, n.toString = function() {
    return "[object ObservableMap]";
  }, n.toJSON = function() {
    return Array.from(this);
  }, n.observe_ = function(r, o) {
    return Uo(this, r);
  }, n.intercept_ = function(r) {
    return yo(this, r);
  }, du(e, [{
    key: "size",
    get: function() {
      return this.keysAtom_.reportObserved(), this.data_.size;
    }
  }, {
    key: ad,
    get: function() {
      return "Map";
    }
  }]), e;
}(), Ct = /* @__PURE__ */ Gt("ObservableMap", ud);
function iT(e) {
  if (Er(e) || Ct(e))
    return e;
  if (Array.isArray(e))
    return new Map(e);
  if (nt(e)) {
    var n = /* @__PURE__ */ new Map();
    for (var t in e)
      n.set(t, e[t]);
    return n;
  } else
    return ae(21, e);
}
var _d, ld, sT = {};
_d = Symbol.iterator;
ld = Symbol.toStringTag;
var cd = /* @__PURE__ */ function() {
  function e(t, r, o) {
    r === void 0 && (r = _r), o === void 0 && (o = "ObservableSet"), this.name_ = void 0, this[W] = sT, this.data_ = /* @__PURE__ */ new Set(), this.atom_ = void 0, this.changeListeners_ = void 0, this.interceptors_ = void 0, this.dehancer = void 0, this.enhancer_ = void 0, this.name_ = o, An(Set) || ae(22), this.atom_ = Sc(this.name_), this.enhancer_ = function(i, s) {
      return r(i, s, o);
    }, t && this.replace(t);
  }
  var n = e.prototype;
  return n.dehanceValue_ = function(r) {
    return this.dehancer !== void 0 ? this.dehancer(r) : r;
  }, n.clear = function() {
    var r = this;
    Kn(function() {
      Bc(function() {
        for (var o = zt(r.data_.values()), i; !(i = o()).done; ) {
          var s = i.value;
          r.delete(s);
        }
      });
    });
  }, n.forEach = function(r, o) {
    for (var i = zt(this), s; !(s = i()).done; ) {
      var a = s.value;
      r.call(o, a, a, this);
    }
  }, n.add = function(r) {
    var o = this;
    if (this.atom_, ln(this)) {
      var i = cn(this, {
        type: ft,
        object: this,
        newValue: r
      });
      if (!i)
        return this;
    }
    if (!this.has(r)) {
      Kn(function() {
        o.data_.add(o.enhancer_(r, void 0)), o.atom_.reportChanged();
      });
      var s = !1, a = Nn(this), u = a || s ? {
        observableKind: "set",
        debugObjectName: this.name_,
        type: ft,
        object: this,
        newValue: r
      } : null;
      a && In(this, u);
    }
    return this;
  }, n.delete = function(r) {
    var o = this;
    if (ln(this)) {
      var i = cn(this, {
        type: xi,
        object: this,
        oldValue: r
      });
      if (!i)
        return !1;
    }
    if (this.has(r)) {
      var s = !1, a = Nn(this), u = a || s ? {
        observableKind: "set",
        debugObjectName: this.name_,
        type: xi,
        object: this,
        oldValue: r
      } : null;
      return Kn(function() {
        o.atom_.reportChanged(), o.data_.delete(r);
      }), a && In(this, u), !0;
    }
    return !1;
  }, n.has = function(r) {
    return this.atom_.reportObserved(), this.data_.has(this.dehanceValue_(r));
  }, n.entries = function() {
    var r = 0, o = Array.from(this.keys()), i = Array.from(this.values());
    return to({
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
    return to({
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
    return Bt(r) && (r = new Set(r)), Kn(function() {
      Array.isArray(r) ? (o.clear(), r.forEach(function(i) {
        return o.add(i);
      })) : Io(r) ? (o.clear(), r.forEach(function(i) {
        return o.add(i);
      })) : r != null && ae("Cannot initialize set from " + r);
    }), this;
  }, n.observe_ = function(r, o) {
    return Uo(this, r);
  }, n.intercept_ = function(r) {
    return yo(this, r);
  }, n.toJSON = function() {
    return Array.from(this);
  }, n.toString = function() {
    return "[object ObservableSet]";
  }, n[_d] = function() {
    return this.values();
  }, du(e, [{
    key: "size",
    get: function() {
      return this.atom_.reportObserved(), this.data_.size;
    }
  }, {
    key: ld,
    get: function() {
      return "Set";
    }
  }]), e;
}(), Bt = /* @__PURE__ */ Gt("ObservableSet", cd), S_ = /* @__PURE__ */ Object.create(null), G_ = "remove", dd = /* @__PURE__ */ function() {
  function e(t, r, o, i) {
    r === void 0 && (r = /* @__PURE__ */ new Map()), i === void 0 && (i = ep), this.target_ = void 0, this.values_ = void 0, this.name_ = void 0, this.defaultAnnotation_ = void 0, this.keysAtom_ = void 0, this.changeListeners_ = void 0, this.interceptors_ = void 0, this.proxy_ = void 0, this.isPlainObject_ = void 0, this.appliedAnnotations_ = void 0, this.pendingKeys_ = void 0, this.target_ = t, this.values_ = r, this.name_ = o, this.defaultAnnotation_ = i, this.keysAtom_ = new So("ObservableObject.keys"), this.isPlainObject_ = nt(this.target_);
  }
  var n = e.prototype;
  return n.getObservablePropValue_ = function(r) {
    return this.values_.get(r).get();
  }, n.setObservablePropValue_ = function(r, o) {
    var i = this.values_.get(r);
    if (i instanceof Qr)
      return i.set(o), !0;
    if (ln(this)) {
      var s = cn(this, {
        type: kn,
        object: this.proxy_ || this.target_,
        name: r,
        newValue: o
      });
      if (!s)
        return null;
      o = s.newValue;
    }
    if (o = i.prepareNewValue_(o), o !== v.UNCHANGED) {
      var a = Nn(this), u = !1, _ = a || u ? {
        type: kn,
        observableKind: "object",
        debugObjectName: this.name_,
        object: this.proxy_ || this.target_,
        oldValue: i.value_,
        name: r,
        newValue: o
      } : null;
      i.setNewValue_(o), a && In(this, _);
    }
    return !0;
  }, n.get_ = function(r) {
    return v.trackingDerivation && !Jn(this.target_, r) && this.has_(r), this.target_[r];
  }, n.set_ = function(r, o, i) {
    return i === void 0 && (i = !1), Jn(this.target_, r) ? this.values_.has(r) ? this.setObservablePropValue_(r, o) : i ? Reflect.set(this.target_, r, o) : (this.target_[r] = o, !0) : this.extend_(r, {
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
    return o || (o = new Mt(r in this.target_, _s, "ObservableObject.key?", !1), this.pendingKeys_.set(r, o)), o.get();
  }, n.make_ = function(r, o) {
    if (o === !0 && (o = this.defaultAnnotation_), o !== !1) {
      if (!(r in this.target_)) {
        var i;
        if ((i = this.target_[Hn]) != null && i[r])
          return;
        ae(1, o.annotationType_, this.name_ + "." + r.toString());
      }
      for (var s = this.target_; s && s !== go; ) {
        var a = Di(s, r);
        if (a) {
          var u = o.make_(this, r, a, s);
          if (u === 0)
            return;
          if (u === 1)
            break;
        }
        s = Object.getPrototypeOf(s);
      }
      C_(this, o, r);
    }
  }, n.extend_ = function(r, o, i, s) {
    if (s === void 0 && (s = !1), i === !0 && (i = this.defaultAnnotation_), i === !1)
      return this.defineProperty_(r, o, s);
    var a = i.extend_(this, r, o, s);
    return a && C_(this, i, r), a;
  }, n.defineProperty_ = function(r, o, i) {
    i === void 0 && (i = !1);
    try {
      Ze();
      var s = this.delete_(r);
      if (!s)
        return s;
      if (ln(this)) {
        var a = cn(this, {
          object: this.proxy_ || this.target_,
          name: r,
          type: ft,
          newValue: o.value
        });
        if (!a)
          return null;
        var u = a.newValue;
        o.value !== u && (o = ur({}, o, {
          value: u
        }));
      }
      if (i) {
        if (!Reflect.defineProperty(this.target_, r, o))
          return !1;
      } else
        Pn(this.target_, r, o);
      this.notifyPropertyAddition_(r, o.value);
    } finally {
      en();
    }
    return !0;
  }, n.defineObservableProperty_ = function(r, o, i, s) {
    s === void 0 && (s = !1);
    try {
      Ze();
      var a = this.delete_(r);
      if (!a)
        return a;
      if (ln(this)) {
        var u = cn(this, {
          object: this.proxy_ || this.target_,
          name: r,
          type: ft,
          newValue: o
        });
        if (!u)
          return null;
        o = u.newValue;
      }
      var _ = v_(r), c = {
        configurable: v.safeDescriptors ? this.isPlainObject_ : !0,
        enumerable: !0,
        get: _.get,
        set: _.set
      };
      if (s) {
        if (!Reflect.defineProperty(this.target_, r, c))
          return !1;
      } else
        Pn(this.target_, r, c);
      var l = new Mt(o, i, "ObservableObject.key", !1);
      this.values_.set(r, l), this.notifyPropertyAddition_(r, l.value_);
    } finally {
      en();
    }
    return !0;
  }, n.defineComputedProperty_ = function(r, o, i) {
    i === void 0 && (i = !1);
    try {
      Ze();
      var s = this.delete_(r);
      if (!s)
        return s;
      if (ln(this)) {
        var a = cn(this, {
          object: this.proxy_ || this.target_,
          name: r,
          type: ft,
          newValue: void 0
        });
        if (!a)
          return null;
      }
      o.name || (o.name = "ObservableObject.key"), o.context = this.proxy_ || this.target_;
      var u = v_(r), _ = {
        configurable: v.safeDescriptors ? this.isPlainObject_ : !0,
        enumerable: !1,
        get: u.get,
        set: u.set
      };
      if (i) {
        if (!Reflect.defineProperty(this.target_, r, _))
          return !1;
      } else
        Pn(this.target_, r, _);
      this.values_.set(r, new Qr(o)), this.notifyPropertyAddition_(r, void 0);
    } finally {
      en();
    }
    return !0;
  }, n.delete_ = function(r, o) {
    if (o === void 0 && (o = !1), !Jn(this.target_, r))
      return !0;
    if (ln(this)) {
      var i = cn(this, {
        object: this.proxy_ || this.target_,
        name: r,
        type: G_
      });
      if (!i)
        return null;
    }
    try {
      var s, a;
      Ze();
      var u = Nn(this), _ = !1, c = this.values_.get(r), l = void 0;
      if (!c && (u || _)) {
        var f;
        l = (f = Di(this.target_, r)) == null ? void 0 : f.value;
      }
      if (o) {
        if (!Reflect.deleteProperty(this.target_, r))
          return !1;
      } else
        delete this.target_[r];
      if (c && (this.values_.delete(r), c instanceof Mt && (l = c.value_), Kc(c)), this.keysAtom_.reportChanged(), (s = this.pendingKeys_) == null || (a = s.get(r)) == null || a.set(r in this.target_), u || _) {
        var T = {
          type: G_,
          observableKind: "object",
          object: this.proxy_ || this.target_,
          debugObjectName: this.name_,
          oldValue: l,
          name: r
        };
        u && In(this, T);
      }
    } finally {
      en();
    }
    return !0;
  }, n.observe_ = function(r, o) {
    return Uo(this, r);
  }, n.intercept_ = function(r) {
    return yo(this, r);
  }, n.notifyPropertyAddition_ = function(r, o) {
    var i, s, a = Nn(this), u = !1;
    if (a || u) {
      var _ = a || u ? {
        type: ft,
        observableKind: "object",
        debugObjectName: this.name_,
        object: this.proxy_ || this.target_,
        name: r,
        newValue: o
      } : null;
      a && In(this, _);
    }
    (i = this.pendingKeys_) == null || (s = i.get(r)) == null || s.set(!0), this.keysAtom_.reportChanged();
  }, n.ownKeys_ = function() {
    return this.keysAtom_.reportObserved(), ar(this.target_);
  }, n.keys_ = function() {
    return this.keysAtom_.reportObserved(), Object.keys(this.target_);
  }, e;
}();
function wo(e, n) {
  var t;
  if (Jn(e, W))
    return e;
  var r = (t = n?.name) != null ? t : "ObservableObject", o = new dd(e, /* @__PURE__ */ new Map(), String(r), lp(n));
  return No(e, W, o), e;
}
var aT = /* @__PURE__ */ Gt("ObservableObjectAdministration", dd);
function v_(e) {
  return S_[e] || (S_[e] = {
    get: function() {
      return this[W].getObservablePropValue_(e);
    },
    set: function(t) {
      return this[W].setObservablePropValue_(e, t);
    }
  });
}
function cr(e) {
  return us(e) ? aT(e[W]) : !1;
}
function C_(e, n, t) {
  var r;
  (r = e.target_[Hn]) == null || delete r[t];
}
var uT = /* @__PURE__ */ md(0), Js = 0, hd = function() {
};
function _T(e, n) {
  Object.setPrototypeOf ? Object.setPrototypeOf(e.prototype, n) : e.prototype.__proto__ !== void 0 ? e.prototype.__proto__ = n : e.prototype = n;
}
_T(hd, Array.prototype);
var Ou = /* @__PURE__ */ function(e, n, t) {
  Ac(r, e);
  function r(i, s, a, u) {
    var _;
    a === void 0 && (a = "ObservableArray"), u === void 0 && (u = !1), _ = e.call(this) || this;
    var c = new Eu(a, s, u, !0);
    if (c.proxy_ = $s(_), gc($s(_), W, c), i && i.length) {
      var l = vo(!0);
      _.spliceWithArray(0, 0, i), Co(l);
    }
    return Object.defineProperty($s(_), "0", uT), _;
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
        return Ho(_) ? _.slice() : _;
      })
    );
  }, o[t] = function() {
    var i = this, s = 0;
    return to({
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
  }, du(r, [{
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
}(hd, Symbol.toStringTag, Symbol.iterator);
Object.entries(ki).forEach(function(e) {
  var n = e[0], t = e[1];
  n !== "concat" && No(Ou.prototype, n, t);
});
function md(e) {
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
function lT(e) {
  Pn(Ou.prototype, "" + e, md(e));
}
function fd(e) {
  if (e > Js) {
    for (var n = Js; n < e + 100; n++)
      lT(n);
    Js = e;
  }
}
fd(1e3);
function cT(e, n, t) {
  return new Ou(e, n, t);
}
function dr(e, n) {
  if (typeof e == "object" && e !== null) {
    if (Ho(e))
      return n !== void 0 && ae(23), e[W].atom_;
    if (Bt(e))
      return e.atom_;
    if (Ct(e)) {
      if (n === void 0)
        return e.keysAtom_;
      var t = e.data_.get(n) || e.hasMap_.get(n);
      return t || ae(25, n, Sa(e)), t;
    }
    if (cr(e)) {
      if (!n)
        return ae(26);
      var r = e[W].values_.get(n);
      return r || ae(27, n, Sa(e)), r;
    }
    if (hu(e) || Do(e) || Pi(e))
      return e;
  } else if (An(e) && Pi(e[W]))
    return e[W];
  ae(28);
}
function pd(e, n) {
  if (e || ae(29), n !== void 0)
    return pd(dr(e, n));
  if (hu(e) || Do(e) || Pi(e) || Ct(e) || Bt(e))
    return e;
  if (e[W])
    return e[W];
  ae(24, e);
}
function Sa(e, n) {
  var t;
  if (n !== void 0)
    t = dr(e, n);
  else {
    if (pu(e))
      return e.name;
    cr(e) || Ct(e) || Bt(e) ? t = pd(e) : t = dr(e);
  }
  return t.name_;
}
var D_ = go.toString;
function Ru(e, n, t) {
  return t === void 0 && (t = -1), Ga(e, n, t);
}
function Ga(e, n, t, r, o) {
  if (e === n)
    return e !== 0 || 1 / e === 1 / n;
  if (e == null || n == null)
    return !1;
  if (e !== e)
    return n !== n;
  var i = typeof e;
  if (i !== "function" && i !== "object" && typeof n != "object")
    return !1;
  var s = D_.call(e);
  if (s !== D_.call(n))
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
  e = y_(e), n = y_(n);
  var a = s === "[object Array]";
  if (!a) {
    if (typeof e != "object" || typeof n != "object")
      return !1;
    var u = e.constructor, _ = n.constructor;
    if (u !== _ && !(An(u) && u instanceof u && An(_) && _ instanceof _) && "constructor" in e && "constructor" in n)
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
      if (!Ga(e[c], n[c], t - 1, r, o))
        return !1;
  } else {
    var l = Object.keys(e), f;
    if (c = l.length, Object.keys(n).length !== c)
      return !1;
    for (; c--; )
      if (f = l[c], !(Jn(n, f) && Ga(e[f], n[f], t - 1, r, o)))
        return !1;
  }
  return r.pop(), o.pop(), !0;
}
function y_(e) {
  return Ho(e) ? e.slice() : Er(e) || Ct(e) || Io(e) || Bt(e) ? Array.from(e.entries()) : e;
}
function to(e) {
  return e[Symbol.iterator] = dT, e;
}
function dT() {
  return this;
}
["Symbol", "Map", "Set"].forEach(function(e) {
  var n = cu();
  typeof n[e] > "u" && ae("MobX requires global '" + e + "' to be available or polyfilled");
});
typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ == "object" && __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
  spy: Dp,
  extras: {
    getDebugName: Sa
  },
  $mobx: W
});
if (!ze)
  throw new Error("mobx-react-lite requires React with Hooks support");
if (!Zp)
  throw new Error("mobx-react-lite@3 requires mobx at least version 6 to be available");
function hT(e) {
  e();
}
function mT(e) {
  e || (e = hT), Wp({ reactionScheduler: e });
}
function fT(e) {
  return Xp(e);
}
var pT = 1e4, TT = 1e4, ET = (
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
          r === void 0 && (r = pT), clearTimeout(t.sweepTimeout), t.sweepTimeout = void 0;
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
        this.sweepTimeout === void 0 && (this.sweepTimeout = setTimeout(this.sweep, TT));
      }
    }), e;
  }()
), OT = typeof FinalizationRegistry < "u" ? FinalizationRegistry : ET, va = new OT(function(e) {
  var n;
  (n = e.reaction) === null || n === void 0 || n.dispose(), e.reaction = null;
}), U_ = globalThis && globalThis.__read || function(e, n) {
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
function H_(e) {
  return "observer".concat(e);
}
var RT = (
  /** @class */
  function() {
    function e() {
    }
    return e;
  }()
);
function bT() {
  return new RT();
}
function gT(e, n) {
  n === void 0 && (n = "observed");
  var t = U_(ve.useState(bT), 1), r = t[0], o = U_(ve.useState(), 2), i = o[1], s = function() {
    return i([]);
  }, a = ve.useRef(null);
  a.current || (a.current = {
    reaction: null,
    mounted: !1,
    changedBeforeMount: !1
  });
  var u = a.current;
  u.reaction || (u.reaction = new Zr(H_(n), function() {
    u.mounted ? s() : u.changedBeforeMount = !0;
  }), va.register(r, u, u)), ve.useDebugValue(u.reaction, fT), ve.useEffect(function() {
    return va.unregister(u), u.mounted = !0, u.reaction ? u.changedBeforeMount && (u.changedBeforeMount = !1, s()) : (u.reaction = new Zr(H_(n), function() {
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
var Td = typeof Symbol == "function" && Symbol.for, w_ = Td ? Symbol.for("react.forward_ref") : typeof ir == "function" && ir(function(e) {
  return null;
}).$$typeof, P_ = Td ? Symbol.for("react.memo") : typeof sr == "function" && sr(function(e) {
  return null;
}).$$typeof;
function fn(e, n) {
  var t;
  if (P_ && e.$$typeof === P_)
    throw new Error("[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.");
  var r = (t = n?.forwardRef) !== null && t !== void 0 ? t : !1, o = e, i = e.displayName || e.name;
  if (w_ && e.$$typeof === w_ && (r = !0, o = e.render, typeof o != "function"))
    throw new Error("[mobx-react-lite] `render` property of ForwardRef was not a function");
  var s = function(a, u) {
    return gT(function() {
      return o(a, u);
    }, i);
  };
  return i !== "" && (s.displayName = i), e.contextTypes && (s.contextTypes = e.contextTypes), r && (s = ir(s)), s = sr(s), IT(e, s), s;
}
var NT = {
  $$typeof: !0,
  render: !0,
  compare: !0,
  type: !0,
  // Don't redefine `displayName`,
  // it's defined as getter-setter pair on `memo` (see #3192).
  displayName: !0
};
function IT(e, n) {
  Object.keys(e).forEach(function(t) {
    NT[t] || Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(e, t));
  });
}
globalThis && globalThis.__read;
var qs;
mT(fc);
qs = va.finalizeAllImmediately;
const Li = "Custom", Ca = [
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
  Li
], bu = {
  js: "javascript",
  ts: "typescript",
  tsx: "typescript",
  jsx: "typescript",
  html: "html",
  htm: "html",
  txt: "text",
  css: "css"
}, Ed = 9, AT = [
  "java",
  "python",
  "cpp",
  "c",
  "go",
  "cs",
  "javascript"
], ST = [14, 16, 18, 20, 22, 24, 26], GT = [4, 2];
var Ke = /* @__PURE__ */ ((e) => (e.O = "O", e.S = "S", e.N = "N", e.T = "T", e.P = "P", e.J = "J", e.Q = "Q", e))(Ke || {});
const Dt = () => tn(lf), vT = () => Dt().state, Od = (e) => {
  const n = Dt(), t = n.state.selectedTerminalTab;
  return (r) => () => {
    if (t === r)
      return n.toggle(e);
    n.update({
      selectedTerminalTab: r,
      [e]: !0
    });
  };
}, pn = () => tn(vr).actions, vn = () => tn(vr), Rr = () => tn(vr).getters, CT = () => tn(vr).services, DT = () => tn(vr).storage, yT = fn(() => {
  const e = pn(), { fontSize: n } = vn();
  return /* @__PURE__ */ b(
    ss,
    {
      size: "middle",
      onChange: (r) => {
        e.changeFontSize(r);
      },
      value: n,
      style: { width: 200 },
      options: ST.map((r) => ({
        value: r,
        label: `${r}px`
      }))
    }
  );
}), UT = () => [...new Set(Object.values(bu))].map((n) => ({
  value: n,
  label: n
})), Rd = fn(() => {
  const e = UT(), n = Rr(), t = n.getActiveLanguage(), r = n.getActiveTab();
  return /* @__PURE__ */ b(
    ss,
    {
      size: "middle",
      onChange: (i) => {
        r.lang = i;
      },
      value: t,
      style: { width: 200 },
      options: e
    }
  );
});
function bd(e, n) {
  return function() {
    return e.apply(n, arguments);
  };
}
const { toString: HT } = Object.prototype, { getPrototypeOf: gu } = Object, ds = ((e) => (n) => {
  const t = HT.call(n);
  return e[t] || (e[t] = t.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Bn = (e) => (e = e.toLowerCase(), (n) => ds(n) === e), hs = (e) => (n) => typeof n === e, { isArray: br } = Array, ro = hs("undefined");
function wT(e) {
  return e !== null && !ro(e) && e.constructor !== null && !ro(e.constructor) && hn(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const gd = Bn("ArrayBuffer");
function PT(e) {
  let n;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? n = ArrayBuffer.isView(e) : n = e && e.buffer && gd(e.buffer), n;
}
const MT = hs("string"), hn = hs("function"), Nd = hs("number"), ms = (e) => e !== null && typeof e == "object", kT = (e) => e === !0 || e === !1, hi = (e) => {
  if (ds(e) !== "object")
    return !1;
  const n = gu(e);
  return (n === null || n === Object.prototype || Object.getPrototypeOf(n) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, xT = Bn("Date"), LT = Bn("File"), BT = Bn("Blob"), jT = Bn("FileList"), FT = (e) => ms(e) && hn(e.pipe), VT = (e) => {
  let n;
  return e && (typeof FormData == "function" && e instanceof FormData || hn(e.append) && ((n = ds(e)) === "formdata" || // detect form-data instance
  n === "object" && hn(e.toString) && e.toString() === "[object FormData]"));
}, WT = Bn("URLSearchParams"), XT = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Po(e, n, { allOwnKeys: t = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, o;
  if (typeof e != "object" && (e = [e]), br(e))
    for (r = 0, o = e.length; r < o; r++)
      n.call(null, e[r], r, e);
  else {
    const i = t ? Object.getOwnPropertyNames(e) : Object.keys(e), s = i.length;
    let a;
    for (r = 0; r < s; r++)
      a = i[r], n.call(null, e[a], a, e);
  }
}
function Id(e, n) {
  n = n.toLowerCase();
  const t = Object.keys(e);
  let r = t.length, o;
  for (; r-- > 0; )
    if (o = t[r], n === o.toLowerCase())
      return o;
  return null;
}
const Ad = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), Sd = (e) => !ro(e) && e !== Ad;
function Da() {
  const { caseless: e } = Sd(this) && this || {}, n = {}, t = (r, o) => {
    const i = e && Id(n, o) || o;
    hi(n[i]) && hi(r) ? n[i] = Da(n[i], r) : hi(r) ? n[i] = Da({}, r) : br(r) ? n[i] = r.slice() : n[i] = r;
  };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && Po(arguments[r], t);
  return n;
}
const KT = (e, n, t, { allOwnKeys: r } = {}) => (Po(n, (o, i) => {
  t && hn(o) ? e[i] = bd(o, t) : e[i] = o;
}, { allOwnKeys: r }), e), YT = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), $T = (e, n, t, r) => {
  e.prototype = Object.create(n.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: n.prototype
  }), t && Object.assign(e.prototype, t);
}, zT = (e, n, t, r) => {
  let o, i, s;
  const a = {};
  if (n = n || {}, e == null)
    return n;
  do {
    for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
      s = o[i], (!r || r(s, e, n)) && !a[s] && (n[s] = e[s], a[s] = !0);
    e = t !== !1 && gu(e);
  } while (e && (!t || t(e, n)) && e !== Object.prototype);
  return n;
}, JT = (e, n, t) => {
  e = String(e), (t === void 0 || t > e.length) && (t = e.length), t -= n.length;
  const r = e.indexOf(n, t);
  return r !== -1 && r === t;
}, qT = (e) => {
  if (!e)
    return null;
  if (br(e))
    return e;
  let n = e.length;
  if (!Nd(n))
    return null;
  const t = new Array(n);
  for (; n-- > 0; )
    t[n] = e[n];
  return t;
}, QT = ((e) => (n) => e && n instanceof e)(typeof Uint8Array < "u" && gu(Uint8Array)), ZT = (e, n) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const i = o.value;
    n.call(e, i[0], i[1]);
  }
}, eE = (e, n) => {
  let t;
  const r = [];
  for (; (t = e.exec(n)) !== null; )
    r.push(t);
  return r;
}, nE = Bn("HTMLFormElement"), tE = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(t, r, o) {
    return r.toUpperCase() + o;
  }
), M_ = (({ hasOwnProperty: e }) => (n, t) => e.call(n, t))(Object.prototype), rE = Bn("RegExp"), Gd = (e, n) => {
  const t = Object.getOwnPropertyDescriptors(e), r = {};
  Po(t, (o, i) => {
    n(o, i, e) !== !1 && (r[i] = o);
  }), Object.defineProperties(e, r);
}, oE = (e) => {
  Gd(e, (n, t) => {
    if (hn(e) && ["arguments", "caller", "callee"].indexOf(t) !== -1)
      return !1;
    const r = e[t];
    if (hn(r)) {
      if (n.enumerable = !1, "writable" in n) {
        n.writable = !1;
        return;
      }
      n.set || (n.set = () => {
        throw Error("Can not rewrite read-only method '" + t + "'");
      });
    }
  });
}, iE = (e, n) => {
  const t = {}, r = (o) => {
    o.forEach((i) => {
      t[i] = !0;
    });
  };
  return br(e) ? r(e) : r(String(e).split(n)), t;
}, sE = () => {
}, aE = (e, n) => (e = +e, Number.isFinite(e) ? e : n), Qs = "abcdefghijklmnopqrstuvwxyz", k_ = "0123456789", vd = {
  DIGIT: k_,
  ALPHA: Qs,
  ALPHA_DIGIT: Qs + Qs.toUpperCase() + k_
}, uE = (e = 16, n = vd.ALPHA_DIGIT) => {
  let t = "";
  const { length: r } = n;
  for (; e--; )
    t += n[Math.random() * r | 0];
  return t;
};
function _E(e) {
  return !!(e && hn(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const lE = (e) => {
  const n = new Array(10), t = (r, o) => {
    if (ms(r)) {
      if (n.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        n[o] = r;
        const i = br(r) ? [] : {};
        return Po(r, (s, a) => {
          const u = t(s, o + 1);
          !ro(u) && (i[a] = u);
        }), n[o] = void 0, i;
      }
    }
    return r;
  };
  return t(e, 0);
}, cE = Bn("AsyncFunction"), dE = (e) => e && (ms(e) || hn(e)) && hn(e.then) && hn(e.catch), g = {
  isArray: br,
  isArrayBuffer: gd,
  isBuffer: wT,
  isFormData: VT,
  isArrayBufferView: PT,
  isString: MT,
  isNumber: Nd,
  isBoolean: kT,
  isObject: ms,
  isPlainObject: hi,
  isUndefined: ro,
  isDate: xT,
  isFile: LT,
  isBlob: BT,
  isRegExp: rE,
  isFunction: hn,
  isStream: FT,
  isURLSearchParams: WT,
  isTypedArray: QT,
  isFileList: jT,
  forEach: Po,
  merge: Da,
  extend: KT,
  trim: XT,
  stripBOM: YT,
  inherits: $T,
  toFlatObject: zT,
  kindOf: ds,
  kindOfTest: Bn,
  endsWith: JT,
  toArray: qT,
  forEachEntry: ZT,
  matchAll: eE,
  isHTMLForm: nE,
  hasOwnProperty: M_,
  hasOwnProp: M_,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Gd,
  freezeMethods: oE,
  toObjectSet: iE,
  toCamelCase: tE,
  noop: sE,
  toFiniteNumber: aE,
  findKey: Id,
  global: Ad,
  isContextDefined: Sd,
  ALPHABET: vd,
  generateString: uE,
  isSpecCompliantForm: _E,
  toJSONObject: lE,
  isAsyncFn: cE,
  isThenable: dE
};
function oe(e, n, t, r, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", n && (this.code = n), t && (this.config = t), r && (this.request = r), o && (this.response = o);
}
g.inherits(oe, Error, {
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
      config: g.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const Cd = oe.prototype, Dd = {};
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
  Dd[e] = { value: e };
});
Object.defineProperties(oe, Dd);
Object.defineProperty(Cd, "isAxiosError", { value: !0 });
oe.from = (e, n, t, r, o, i) => {
  const s = Object.create(Cd);
  return g.toFlatObject(e, s, function(u) {
    return u !== Error.prototype;
  }, (a) => a !== "isAxiosError"), oe.call(s, e.message, n, t, r, o), s.cause = e, s.name = e.name, i && Object.assign(s, i), s;
};
const hE = null;
function ya(e) {
  return g.isPlainObject(e) || g.isArray(e);
}
function yd(e) {
  return g.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function x_(e, n, t) {
  return e ? e.concat(n).map(function(o, i) {
    return o = yd(o), !t && i ? "[" + o + "]" : o;
  }).join(t ? "." : "") : n;
}
function mE(e) {
  return g.isArray(e) && !e.some(ya);
}
const fE = g.toFlatObject(g, {}, null, function(n) {
  return /^is[A-Z]/.test(n);
});
function fs(e, n, t) {
  if (!g.isObject(e))
    throw new TypeError("target must be an object");
  n = n || new FormData(), t = g.toFlatObject(t, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(h, m) {
    return !g.isUndefined(m[h]);
  });
  const r = t.metaTokens, o = t.visitor || c, i = t.dots, s = t.indexes, u = (t.Blob || typeof Blob < "u" && Blob) && g.isSpecCompliantForm(n);
  if (!g.isFunction(o))
    throw new TypeError("visitor must be a function");
  function _(d) {
    if (d === null)
      return "";
    if (g.isDate(d))
      return d.toISOString();
    if (!u && g.isBlob(d))
      throw new oe("Blob is not supported. Use a Buffer instead.");
    return g.isArrayBuffer(d) || g.isTypedArray(d) ? u && typeof Blob == "function" ? new Blob([d]) : Buffer.from(d) : d;
  }
  function c(d, h, m) {
    let O = d;
    if (d && !m && typeof d == "object") {
      if (g.endsWith(h, "{}"))
        h = r ? h : h.slice(0, -2), d = JSON.stringify(d);
      else if (g.isArray(d) && mE(d) || (g.isFileList(d) || g.endsWith(h, "[]")) && (O = g.toArray(d)))
        return h = yd(h), O.forEach(function(N, A) {
          !(g.isUndefined(N) || N === null) && n.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? x_([h], A, i) : s === null ? h : h + "[]",
            _(N)
          );
        }), !1;
    }
    return ya(d) ? !0 : (n.append(x_(m, h, i), _(d)), !1);
  }
  const l = [], f = Object.assign(fE, {
    defaultVisitor: c,
    convertValue: _,
    isVisitable: ya
  });
  function T(d, h) {
    if (!g.isUndefined(d)) {
      if (l.indexOf(d) !== -1)
        throw Error("Circular reference detected in " + h.join("."));
      l.push(d), g.forEach(d, function(O, R) {
        (!(g.isUndefined(O) || O === null) && o.call(
          n,
          O,
          g.isString(R) ? R.trim() : R,
          h,
          f
        )) === !0 && T(O, h ? h.concat(R) : [R]);
      }), l.pop();
    }
  }
  if (!g.isObject(e))
    throw new TypeError("data must be an object");
  return T(e), n;
}
function L_(e) {
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
function Nu(e, n) {
  this._pairs = [], e && fs(e, this, n);
}
const Ud = Nu.prototype;
Ud.append = function(n, t) {
  this._pairs.push([n, t]);
};
Ud.toString = function(n) {
  const t = n ? function(r) {
    return n.call(this, r, L_);
  } : L_;
  return this._pairs.map(function(o) {
    return t(o[0]) + "=" + t(o[1]);
  }, "").join("&");
};
function pE(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Hd(e, n, t) {
  if (!n)
    return e;
  const r = t && t.encode || pE, o = t && t.serialize;
  let i;
  if (o ? i = o(n, t) : i = g.isURLSearchParams(n) ? n.toString() : new Nu(n, t).toString(r), i) {
    const s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class TE {
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
    g.forEach(this.handlers, function(r) {
      r !== null && n(r);
    });
  }
}
const B_ = TE, wd = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, EE = typeof URLSearchParams < "u" ? URLSearchParams : Nu, OE = typeof FormData < "u" ? FormData : null, RE = typeof Blob < "u" ? Blob : null, bE = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), gE = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), wn = {
  isBrowser: !0,
  classes: {
    URLSearchParams: EE,
    FormData: OE,
    Blob: RE
  },
  isStandardBrowserEnv: bE,
  isStandardBrowserWebWorkerEnv: gE,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function NE(e, n) {
  return fs(e, new wn.classes.URLSearchParams(), Object.assign({
    visitor: function(t, r, o, i) {
      return wn.isNode && g.isBuffer(t) ? (this.append(r, t.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, n));
}
function IE(e) {
  return g.matchAll(/\w+|\[(\w*)]/g, e).map((n) => n[0] === "[]" ? "" : n[1] || n[0]);
}
function AE(e) {
  const n = {}, t = Object.keys(e);
  let r;
  const o = t.length;
  let i;
  for (r = 0; r < o; r++)
    i = t[r], n[i] = e[i];
  return n;
}
function Pd(e) {
  function n(t, r, o, i) {
    let s = t[i++];
    const a = Number.isFinite(+s), u = i >= t.length;
    return s = !s && g.isArray(o) ? o.length : s, u ? (g.hasOwnProp(o, s) ? o[s] = [o[s], r] : o[s] = r, !a) : ((!o[s] || !g.isObject(o[s])) && (o[s] = []), n(t, r, o[s], i) && g.isArray(o[s]) && (o[s] = AE(o[s])), !a);
  }
  if (g.isFormData(e) && g.isFunction(e.entries)) {
    const t = {};
    return g.forEachEntry(e, (r, o) => {
      n(IE(r), o, t, 0);
    }), t;
  }
  return null;
}
const SE = {
  "Content-Type": void 0
};
function GE(e, n, t) {
  if (g.isString(e))
    try {
      return (n || JSON.parse)(e), g.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (t || JSON.stringify)(e);
}
const ps = {
  transitional: wd,
  adapter: ["xhr", "http"],
  transformRequest: [function(n, t) {
    const r = t.getContentType() || "", o = r.indexOf("application/json") > -1, i = g.isObject(n);
    if (i && g.isHTMLForm(n) && (n = new FormData(n)), g.isFormData(n))
      return o && o ? JSON.stringify(Pd(n)) : n;
    if (g.isArrayBuffer(n) || g.isBuffer(n) || g.isStream(n) || g.isFile(n) || g.isBlob(n))
      return n;
    if (g.isArrayBufferView(n))
      return n.buffer;
    if (g.isURLSearchParams(n))
      return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), n.toString();
    let a;
    if (i) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return NE(n, this.formSerializer).toString();
      if ((a = g.isFileList(n)) || r.indexOf("multipart/form-data") > -1) {
        const u = this.env && this.env.FormData;
        return fs(
          a ? { "files[]": n } : n,
          u && new u(),
          this.formSerializer
        );
      }
    }
    return i || o ? (t.setContentType("application/json", !1), GE(n)) : n;
  }],
  transformResponse: [function(n) {
    const t = this.transitional || ps.transitional, r = t && t.forcedJSONParsing, o = this.responseType === "json";
    if (n && g.isString(n) && (r && !this.responseType || o)) {
      const s = !(t && t.silentJSONParsing) && o;
      try {
        return JSON.parse(n);
      } catch (a) {
        if (s)
          throw a.name === "SyntaxError" ? oe.from(a, oe.ERR_BAD_RESPONSE, this, null, this.response) : a;
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
    FormData: wn.classes.FormData,
    Blob: wn.classes.Blob
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
g.forEach(["delete", "get", "head"], function(n) {
  ps.headers[n] = {};
});
g.forEach(["post", "put", "patch"], function(n) {
  ps.headers[n] = g.merge(SE);
});
const Iu = ps, vE = g.toObjectSet([
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
]), CE = (e) => {
  const n = {};
  let t, r, o;
  return e && e.split(`
`).forEach(function(s) {
    o = s.indexOf(":"), t = s.substring(0, o).trim().toLowerCase(), r = s.substring(o + 1).trim(), !(!t || n[t] && vE[t]) && (t === "set-cookie" ? n[t] ? n[t].push(r) : n[t] = [r] : n[t] = n[t] ? n[t] + ", " + r : r);
  }), n;
}, j_ = Symbol("internals");
function yr(e) {
  return e && String(e).trim().toLowerCase();
}
function mi(e) {
  return e === !1 || e == null ? e : g.isArray(e) ? e.map(mi) : String(e);
}
function DE(e) {
  const n = /* @__PURE__ */ Object.create(null), t = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = t.exec(e); )
    n[r[1]] = r[2];
  return n;
}
const yE = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Zs(e, n, t, r, o) {
  if (g.isFunction(r))
    return r.call(this, n, t);
  if (o && (n = t), !!g.isString(n)) {
    if (g.isString(r))
      return n.indexOf(r) !== -1;
    if (g.isRegExp(r))
      return r.test(n);
  }
}
function UE(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (n, t, r) => t.toUpperCase() + r);
}
function HE(e, n) {
  const t = g.toCamelCase(" " + n);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + t, {
      value: function(o, i, s) {
        return this[r].call(this, n, o, i, s);
      },
      configurable: !0
    });
  });
}
class Ts {
  constructor(n) {
    n && this.set(n);
  }
  set(n, t, r) {
    const o = this;
    function i(a, u, _) {
      const c = yr(u);
      if (!c)
        throw new Error("header name must be a non-empty string");
      const l = g.findKey(o, c);
      (!l || o[l] === void 0 || _ === !0 || _ === void 0 && o[l] !== !1) && (o[l || u] = mi(a));
    }
    const s = (a, u) => g.forEach(a, (_, c) => i(_, c, u));
    return g.isPlainObject(n) || n instanceof this.constructor ? s(n, t) : g.isString(n) && (n = n.trim()) && !yE(n) ? s(CE(n), t) : n != null && i(t, n, r), this;
  }
  get(n, t) {
    if (n = yr(n), n) {
      const r = g.findKey(this, n);
      if (r) {
        const o = this[r];
        if (!t)
          return o;
        if (t === !0)
          return DE(o);
        if (g.isFunction(t))
          return t.call(this, o, r);
        if (g.isRegExp(t))
          return t.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(n, t) {
    if (n = yr(n), n) {
      const r = g.findKey(this, n);
      return !!(r && this[r] !== void 0 && (!t || Zs(this, this[r], r, t)));
    }
    return !1;
  }
  delete(n, t) {
    const r = this;
    let o = !1;
    function i(s) {
      if (s = yr(s), s) {
        const a = g.findKey(r, s);
        a && (!t || Zs(r, r[a], a, t)) && (delete r[a], o = !0);
      }
    }
    return g.isArray(n) ? n.forEach(i) : i(n), o;
  }
  clear(n) {
    const t = Object.keys(this);
    let r = t.length, o = !1;
    for (; r--; ) {
      const i = t[r];
      (!n || Zs(this, this[i], i, n, !0)) && (delete this[i], o = !0);
    }
    return o;
  }
  normalize(n) {
    const t = this, r = {};
    return g.forEach(this, (o, i) => {
      const s = g.findKey(r, i);
      if (s) {
        t[s] = mi(o), delete t[i];
        return;
      }
      const a = n ? UE(i) : String(i).trim();
      a !== i && delete t[i], t[a] = mi(o), r[a] = !0;
    }), this;
  }
  concat(...n) {
    return this.constructor.concat(this, ...n);
  }
  toJSON(n) {
    const t = /* @__PURE__ */ Object.create(null);
    return g.forEach(this, (r, o) => {
      r != null && r !== !1 && (t[o] = n && g.isArray(r) ? r.join(", ") : r);
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
    const r = (this[j_] = this[j_] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function i(s) {
      const a = yr(s);
      r[a] || (HE(o, s), r[a] = !0);
    }
    return g.isArray(n) ? n.forEach(i) : i(n), this;
  }
}
Ts.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
g.freezeMethods(Ts.prototype);
g.freezeMethods(Ts);
const qn = Ts;
function ea(e, n) {
  const t = this || Iu, r = n || t, o = qn.from(r.headers);
  let i = r.data;
  return g.forEach(e, function(a) {
    i = a.call(t, i, o.normalize(), n ? n.status : void 0);
  }), o.normalize(), i;
}
function Md(e) {
  return !!(e && e.__CANCEL__);
}
function Mo(e, n, t) {
  oe.call(this, e ?? "canceled", oe.ERR_CANCELED, n, t), this.name = "CanceledError";
}
g.inherits(Mo, oe, {
  __CANCEL__: !0
});
function wE(e, n, t) {
  const r = t.config.validateStatus;
  !t.status || !r || r(t.status) ? e(t) : n(new oe(
    "Request failed with status code " + t.status,
    [oe.ERR_BAD_REQUEST, oe.ERR_BAD_RESPONSE][Math.floor(t.status / 100) - 4],
    t.config,
    t.request,
    t
  ));
}
const PE = wn.isStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  function() {
    return {
      write: function(t, r, o, i, s, a) {
        const u = [];
        u.push(t + "=" + encodeURIComponent(r)), g.isNumber(o) && u.push("expires=" + new Date(o).toGMTString()), g.isString(i) && u.push("path=" + i), g.isString(s) && u.push("domain=" + s), a === !0 && u.push("secure"), document.cookie = u.join("; ");
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
function ME(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function kE(e, n) {
  return n ? e.replace(/\/+$/, "") + "/" + n.replace(/^\/+/, "") : e;
}
function kd(e, n) {
  return e && !ME(n) ? kE(e, n) : n;
}
const xE = wn.isStandardBrowserEnv ? (
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
      const a = g.isString(s) ? o(s) : s;
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
function LE(e) {
  const n = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return n && n[1] || "";
}
function BE(e, n) {
  e = e || 10;
  const t = new Array(e), r = new Array(e);
  let o = 0, i = 0, s;
  return n = n !== void 0 ? n : 1e3, function(u) {
    const _ = Date.now(), c = r[i];
    s || (s = _), t[o] = u, r[o] = _;
    let l = i, f = 0;
    for (; l !== o; )
      f += t[l++], l = l % e;
    if (o = (o + 1) % e, o === i && (i = (i + 1) % e), _ - s < n)
      return;
    const T = c && _ - c;
    return T ? Math.round(f * 1e3 / T) : void 0;
  };
}
function F_(e, n) {
  let t = 0;
  const r = BE(50, 250);
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
const jE = typeof XMLHttpRequest < "u", FE = jE && function(e) {
  return new Promise(function(t, r) {
    let o = e.data;
    const i = qn.from(e.headers).normalize(), s = e.responseType;
    let a;
    function u() {
      e.cancelToken && e.cancelToken.unsubscribe(a), e.signal && e.signal.removeEventListener("abort", a);
    }
    g.isFormData(o) && (wn.isStandardBrowserEnv || wn.isStandardBrowserWebWorkerEnv ? i.setContentType(!1) : i.setContentType("multipart/form-data;", !1));
    let _ = new XMLHttpRequest();
    if (e.auth) {
      const T = e.auth.username || "", d = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      i.set("Authorization", "Basic " + btoa(T + ":" + d));
    }
    const c = kd(e.baseURL, e.url);
    _.open(e.method.toUpperCase(), Hd(c, e.params, e.paramsSerializer), !0), _.timeout = e.timeout;
    function l() {
      if (!_)
        return;
      const T = qn.from(
        "getAllResponseHeaders" in _ && _.getAllResponseHeaders()
      ), h = {
        data: !s || s === "text" || s === "json" ? _.responseText : _.response,
        status: _.status,
        statusText: _.statusText,
        headers: T,
        config: e,
        request: _
      };
      wE(function(O) {
        t(O), u();
      }, function(O) {
        r(O), u();
      }, h), _ = null;
    }
    if ("onloadend" in _ ? _.onloadend = l : _.onreadystatechange = function() {
      !_ || _.readyState !== 4 || _.status === 0 && !(_.responseURL && _.responseURL.indexOf("file:") === 0) || setTimeout(l);
    }, _.onabort = function() {
      _ && (r(new oe("Request aborted", oe.ECONNABORTED, e, _)), _ = null);
    }, _.onerror = function() {
      r(new oe("Network Error", oe.ERR_NETWORK, e, _)), _ = null;
    }, _.ontimeout = function() {
      let d = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const h = e.transitional || wd;
      e.timeoutErrorMessage && (d = e.timeoutErrorMessage), r(new oe(
        d,
        h.clarifyTimeoutError ? oe.ETIMEDOUT : oe.ECONNABORTED,
        e,
        _
      )), _ = null;
    }, wn.isStandardBrowserEnv) {
      const T = (e.withCredentials || xE(c)) && e.xsrfCookieName && PE.read(e.xsrfCookieName);
      T && i.set(e.xsrfHeaderName, T);
    }
    o === void 0 && i.setContentType(null), "setRequestHeader" in _ && g.forEach(i.toJSON(), function(d, h) {
      _.setRequestHeader(h, d);
    }), g.isUndefined(e.withCredentials) || (_.withCredentials = !!e.withCredentials), s && s !== "json" && (_.responseType = e.responseType), typeof e.onDownloadProgress == "function" && _.addEventListener("progress", F_(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && _.upload && _.upload.addEventListener("progress", F_(e.onUploadProgress)), (e.cancelToken || e.signal) && (a = (T) => {
      _ && (r(!T || T.type ? new Mo(null, e, _) : T), _.abort(), _ = null);
    }, e.cancelToken && e.cancelToken.subscribe(a), e.signal && (e.signal.aborted ? a() : e.signal.addEventListener("abort", a)));
    const f = LE(c);
    if (f && wn.protocols.indexOf(f) === -1) {
      r(new oe("Unsupported protocol " + f + ":", oe.ERR_BAD_REQUEST, e));
      return;
    }
    _.send(o || null);
  });
}, fi = {
  http: hE,
  xhr: FE
};
g.forEach(fi, (e, n) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: n });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: n });
  }
});
const VE = {
  getAdapter: (e) => {
    e = g.isArray(e) ? e : [e];
    const { length: n } = e;
    let t, r;
    for (let o = 0; o < n && (t = e[o], !(r = g.isString(t) ? fi[t.toLowerCase()] : t)); o++)
      ;
    if (!r)
      throw r === !1 ? new oe(
        `Adapter ${t} is not supported by the environment`,
        "ERR_NOT_SUPPORT"
      ) : new Error(
        g.hasOwnProp(fi, t) ? `Adapter '${t}' is not available in the build` : `Unknown adapter '${t}'`
      );
    if (!g.isFunction(r))
      throw new TypeError("adapter is not a function");
    return r;
  },
  adapters: fi
};
function na(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Mo(null, e);
}
function V_(e) {
  return na(e), e.headers = qn.from(e.headers), e.data = ea.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), VE.getAdapter(e.adapter || Iu.adapter)(e).then(function(r) {
    return na(e), r.data = ea.call(
      e,
      e.transformResponse,
      r
    ), r.headers = qn.from(r.headers), r;
  }, function(r) {
    return Md(r) || (na(e), r && r.response && (r.response.data = ea.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = qn.from(r.response.headers))), Promise.reject(r);
  });
}
const W_ = (e) => e instanceof qn ? e.toJSON() : e;
function hr(e, n) {
  n = n || {};
  const t = {};
  function r(_, c, l) {
    return g.isPlainObject(_) && g.isPlainObject(c) ? g.merge.call({ caseless: l }, _, c) : g.isPlainObject(c) ? g.merge({}, c) : g.isArray(c) ? c.slice() : c;
  }
  function o(_, c, l) {
    if (g.isUndefined(c)) {
      if (!g.isUndefined(_))
        return r(void 0, _, l);
    } else
      return r(_, c, l);
  }
  function i(_, c) {
    if (!g.isUndefined(c))
      return r(void 0, c);
  }
  function s(_, c) {
    if (g.isUndefined(c)) {
      if (!g.isUndefined(_))
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
    headers: (_, c) => o(W_(_), W_(c), !0)
  };
  return g.forEach(Object.keys(Object.assign({}, e, n)), function(c) {
    const l = u[c] || o, f = l(e[c], n[c], c);
    g.isUndefined(f) && l !== a || (t[c] = f);
  }), t;
}
const xd = "1.4.0", Au = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, n) => {
  Au[e] = function(r) {
    return typeof r === e || "a" + (n < 1 ? "n " : " ") + e;
  };
});
const X_ = {};
Au.transitional = function(n, t, r) {
  function o(i, s) {
    return "[Axios v" + xd + "] Transitional option '" + i + "'" + s + (r ? ". " + r : "");
  }
  return (i, s, a) => {
    if (n === !1)
      throw new oe(
        o(s, " has been removed" + (t ? " in " + t : "")),
        oe.ERR_DEPRECATED
      );
    return t && !X_[s] && (X_[s] = !0, console.warn(
      o(
        s,
        " has been deprecated since v" + t + " and will be removed in the near future"
      )
    )), n ? n(i, s, a) : !0;
  };
};
function WE(e, n, t) {
  if (typeof e != "object")
    throw new oe("options must be an object", oe.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const i = r[o], s = n[i];
    if (s) {
      const a = e[i], u = a === void 0 || s(a, i, e);
      if (u !== !0)
        throw new oe("option " + i + " must be " + u, oe.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (t !== !0)
      throw new oe("Unknown option " + i, oe.ERR_BAD_OPTION);
  }
}
const Ua = {
  assertOptions: WE,
  validators: Au
}, _t = Ua.validators;
class Bi {
  constructor(n) {
    this.defaults = n, this.interceptors = {
      request: new B_(),
      response: new B_()
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
    typeof n == "string" ? (t = t || {}, t.url = n) : t = n || {}, t = hr(this.defaults, t);
    const { transitional: r, paramsSerializer: o, headers: i } = t;
    r !== void 0 && Ua.assertOptions(r, {
      silentJSONParsing: _t.transitional(_t.boolean),
      forcedJSONParsing: _t.transitional(_t.boolean),
      clarifyTimeoutError: _t.transitional(_t.boolean)
    }, !1), o != null && (g.isFunction(o) ? t.paramsSerializer = {
      serialize: o
    } : Ua.assertOptions(o, {
      encode: _t.function,
      serialize: _t.function
    }, !0)), t.method = (t.method || this.defaults.method || "get").toLowerCase();
    let s;
    s = i && g.merge(
      i.common,
      i[t.method]
    ), s && g.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (d) => {
        delete i[d];
      }
    ), t.headers = qn.concat(s, i);
    const a = [];
    let u = !0;
    this.interceptors.request.forEach(function(h) {
      typeof h.runWhen == "function" && h.runWhen(t) === !1 || (u = u && h.synchronous, a.unshift(h.fulfilled, h.rejected));
    });
    const _ = [];
    this.interceptors.response.forEach(function(h) {
      _.push(h.fulfilled, h.rejected);
    });
    let c, l = 0, f;
    if (!u) {
      const d = [V_.bind(this), void 0];
      for (d.unshift.apply(d, a), d.push.apply(d, _), f = d.length, c = Promise.resolve(t); l < f; )
        c = c.then(d[l++], d[l++]);
      return c;
    }
    f = a.length;
    let T = t;
    for (l = 0; l < f; ) {
      const d = a[l++], h = a[l++];
      try {
        T = d(T);
      } catch (m) {
        h.call(this, m);
        break;
      }
    }
    try {
      c = V_.call(this, T);
    } catch (d) {
      return Promise.reject(d);
    }
    for (l = 0, f = _.length; l < f; )
      c = c.then(_[l++], _[l++]);
    return c;
  }
  getUri(n) {
    n = hr(this.defaults, n);
    const t = kd(n.baseURL, n.url);
    return Hd(t, n.params, n.paramsSerializer);
  }
}
g.forEach(["delete", "get", "head", "options"], function(n) {
  Bi.prototype[n] = function(t, r) {
    return this.request(hr(r || {}, {
      method: n,
      url: t,
      data: (r || {}).data
    }));
  };
});
g.forEach(["post", "put", "patch"], function(n) {
  function t(r) {
    return function(i, s, a) {
      return this.request(hr(a || {}, {
        method: n,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: s
      }));
    };
  }
  Bi.prototype[n] = t(), Bi.prototype[n + "Form"] = t(!0);
});
const pi = Bi;
class Su {
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
      r.reason || (r.reason = new Mo(i, s, a), t(r.reason));
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
      token: new Su(function(o) {
        n = o;
      }),
      cancel: n
    };
  }
}
const XE = Su;
function KE(e) {
  return function(t) {
    return e.apply(null, t);
  };
}
function YE(e) {
  return g.isObject(e) && e.isAxiosError === !0;
}
const Ha = {
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
Object.entries(Ha).forEach(([e, n]) => {
  Ha[n] = e;
});
const $E = Ha;
function Ld(e) {
  const n = new pi(e), t = bd(pi.prototype.request, n);
  return g.extend(t, pi.prototype, n, { allOwnKeys: !0 }), g.extend(t, n, null, { allOwnKeys: !0 }), t.create = function(o) {
    return Ld(hr(e, o));
  }, t;
}
const Ue = Ld(Iu);
Ue.Axios = pi;
Ue.CanceledError = Mo;
Ue.CancelToken = XE;
Ue.isCancel = Md;
Ue.VERSION = xd;
Ue.toFormData = fs;
Ue.AxiosError = oe;
Ue.Cancel = Ue.CanceledError;
Ue.all = function(n) {
  return Promise.all(n);
};
Ue.spread = KE;
Ue.isAxiosError = YE;
Ue.mergeConfig = hr;
Ue.AxiosHeaders = qn;
Ue.formToJSON = (e) => Pd(g.isHTMLForm(e) ? new FormData(e) : e);
Ue.HttpStatusCode = $E;
Ue.default = Ue;
const zE = Ue, JE = { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_402b0c4d-e23e-4711-9388-732035e00d9e", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "npm/8.19.4 node/v16.20.1 linux x64 workspaces/false ci/github-actions", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_402b0c4d-e23e-4711-9388-732035e00d9e", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", npm_config_noproxy: "", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-8.2", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "", npm_config_userconfig: "/home/runner/.npmrc", npm_config_local_prefix: "/home/runner/work/CodeGear/CodeGear", SYSTEMD_EXEC_PID: "678", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", COLOR: "0", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.5/x64", NVM_DIR: "/home/runner/.nvm", npm_config_metrics_registry: "https://registry.npmjs.org/", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230702.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chrome_driver", JOURNAL_STREAM: "8:17151", GITHUB_WORKFLOW: "CodeGear CI", _: "/opt/hostedtoolcache/node/16.20.1/x64/bin/npm", npm_config_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", GITHUB_RUN_ID: "5536265220", npm_config_cache: "/home/runner/.npm", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "35497761426145bb6e9f18a4e1030e5d22af7b57", GITHUB_BASE_REF: "", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/heads/master", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", npm_config_node_gyp: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.bin:/home/runner/work/CodeGear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_816e03c4-7bc6-4f3d-a9b6-aed218b84bb4", INVOCATION_ID: "2c4e3a187d2941d2bfd96fd34e20618b", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.10/x64", NODE: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "18", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 2", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "master", GITHUB_REPOSITORY: "Gearonix/CodeGear", npm_lifecycle_script: " nx run-many --targets=build --all", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", npm_package_version: "0.0.0", npm_lifecycle_event: "build", NODE_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/bin/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/node_modules", GITHUB_REF_PROTECTED: "false", npm_config_strict_peer_dependencies: "", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "35497761426145bb6e9f18a4e1030e5d22af7b57", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/heads/master", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", npm_config_globalconfig: "/opt/hostedtoolcache/node/16.20.1/x64/etc/npmrc", npm_config_init_module: "/home/runner/.npm-init.js", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_402b0c4d-e23e-4711-9388-732035e00d9e", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", npm_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/bin/npm-cli.js", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "push", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_402b0c4d-e23e-4711-9388-732035e00d9e", npm_config_global_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", npm_command: "run-script", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_402b0c4d-e23e-4711-9388-732035e00d9e", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", EDITOR: "vi", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/18222501234825040518", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "18222501234825040518", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.SERVER_URL ?? "http://localhost:6868", qE = {
  CODE_EXECUTOR_API: "execute"
}, QE = zE.create({
  baseURL: JE,
  withCredentials: !0
}), ZE = {
  EDITOR_THEME: "EDITOR_THEME",
  EDITOR_CONTENT_DATA: "EDITOR_CONTENT_DATA",
  EDITOR_EXECUTE_MESSAGES: "EDITOR_EXECUTE_MESSAGES",
  EDITOR_FONT_SIZE: "EDITOR_FONT_SIZE",
  EDITOR_TAB_SIZE: "EDITOR_TAB_SIZE",
  EDITOR_CUSTOM_BACKGROUND: "EDITOR_CUSTOM_BACKGROUND",
  EDITOR_CUSTOM_COLOR: "EDITOR_CUSTOM_COLOR"
}, Bd = {
  MAIN: "/",
  EDITOR: "/edit",
  ABOUT: "/about"
}, jd = () => {
  const [e, n] = ze([]);
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
}, Fd = (e = !1) => {
  const [n, t] = ze(e);
  return {
    off: () => t(!1),
    on: () => t(!0),
    toggle: () => t(!n),
    val: n
  };
}, Vd = (e, n) => {
  const t = ee();
  return (...r) => {
    t.current && clearTimeout(t.current), t.current = setTimeout(() => {
      e(...r);
    }, n);
  };
}, eO = () => () => {
  if (!document.fullscreenElement)
    return document.documentElement.requestFullscreen();
  document.exitFullscreen && document.exitFullscreen();
};
var Gu, V, Wd, wt, K_, Xd, wa, Ti = {}, Kd = [], nO = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Es = Array.isArray;
function pt(e, n) {
  for (var t in n)
    e[t] = n[t];
  return e;
}
function Yd(e) {
  var n = e.parentNode;
  n && n.removeChild(e);
}
function Y_(e, n, t) {
  var r, o, i, s = {};
  for (i in n)
    i == "key" ? r = n[i] : i == "ref" ? o = n[i] : s[i] = n[i];
  if (arguments.length > 2 && (s.children = arguments.length > 3 ? Gu.call(arguments, 2) : t), typeof e == "function" && e.defaultProps != null)
    for (i in e.defaultProps)
      s[i] === void 0 && (s[i] = e.defaultProps[i]);
  return Ei(e, s, r, o, null);
}
function Ei(e, n, t, r, o) {
  var i = { type: e, props: n, key: t, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: o ?? ++Wd };
  return o == null && V.vnode != null && V.vnode(i), i;
}
function oo(e) {
  return e.children;
}
function Qn(e, n) {
  this.props = e, this.context = n;
}
function ji(e, n) {
  if (n == null)
    return e.__ ? ji(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var t; n < e.__k.length; n++)
    if ((t = e.__k[n]) != null && t.__e != null)
      return t.__e;
  return typeof e.type == "function" ? ji(e) : null;
}
function $d(e) {
  var n, t;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, n = 0; n < e.__k.length; n++)
      if ((t = e.__k[n]) != null && t.__e != null) {
        e.__e = e.__c.base = t.__e;
        break;
      }
    return $d(e);
  }
}
function $_(e) {
  (!e.__d && (e.__d = !0) && wt.push(e) && !Fi.__r++ || K_ !== V.debounceRendering) && ((K_ = V.debounceRendering) || Xd)(Fi);
}
function Fi() {
  var e, n, t, r, o, i, s, a, u;
  for (wt.sort(wa); e = wt.shift(); )
    e.__d && (n = wt.length, r = void 0, o = void 0, i = void 0, a = (s = (t = e).__v).__e, (u = t.__P) && (r = [], o = [], (i = pt({}, s)).__v = s.__v + 1, Qd(u, s, i, t.__n, u.ownerSVGElement !== void 0, s.__h != null ? [a] : null, r, a ?? ji(s), s.__h, o), oO(r, s, o), s.__e != a && $d(s)), wt.length > n && wt.sort(wa));
  Fi.__r = 0;
}
function zd(e, n, t, r, o, i, s, a, u, _, c) {
  var l, f, T, d, h, m, O, R, N, A, p = 0, w = r && r.__k || Kd, k = w.length, Y = k, M = n.length;
  for (t.__k = [], l = 0; l < M; l++)
    (d = t.__k[l] = (d = n[l]) == null || typeof d == "boolean" || typeof d == "function" ? null : typeof d == "string" || typeof d == "number" || typeof d == "bigint" ? Ei(null, d, null, null, d) : Es(d) ? Ei(oo, { children: d }, null, null, null) : d.__b > 0 ? Ei(d.type, d.props, d.key, d.ref ? d.ref : null, d.__v) : d) != null && (d.__ = t, d.__b = t.__b + 1, (R = tO(d, w, O = l + p, Y)) === -1 ? T = Ti : (T = w[R] || Ti, w[R] = void 0, Y--), Qd(e, d, T, o, i, s, a, u, _, c), h = d.__e, (f = d.ref) && T.ref != f && (T.ref && vu(T.ref, null, d), c.push(f, d.__c || h, d)), h != null && (m == null && (m = h), A = !(N = T === Ti || T.__v === null) && R === O, N ? R == -1 && p-- : R !== O && (R === O + 1 ? (p++, A = !0) : R > O ? Y > M - O ? (p += R - O, A = !0) : p-- : p = R < O && R == O - 1 ? R - O : 0), O = l + p, A = A || R == l && !N, typeof d.type != "function" || R === O && T.__k !== d.__k ? typeof d.type == "function" || A ? d.__d !== void 0 ? (u = d.__d, d.__d = void 0) : u = h.nextSibling : u = qd(e, h, u) : u = Jd(d, u, e), typeof t.type == "function" && (t.__d = u)));
  for (t.__e = m, l = k; l--; )
    w[l] != null && (typeof t.type == "function" && w[l].__e != null && w[l].__e == t.__d && (t.__d = w[l].__e.nextSibling), Zd(w[l], w[l]));
}
function Jd(e, n, t) {
  for (var r, o = e.__k, i = 0; o && i < o.length; i++)
    (r = o[i]) && (r.__ = e, n = typeof r.type == "function" ? Jd(r, n, t) : qd(t, r.__e, n));
  return n;
}
function Vi(e, n) {
  return n = n || [], e == null || typeof e == "boolean" || (Es(e) ? e.some(function(t) {
    Vi(t, n);
  }) : n.push(e)), n;
}
function qd(e, n, t) {
  return t == null || t.parentNode !== e ? e.insertBefore(n, null) : n == t && n.parentNode != null || e.insertBefore(n, t), n.nextSibling;
}
function tO(e, n, t, r) {
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
function rO(e, n, t, r, o) {
  var i;
  for (i in t)
    i === "children" || i === "key" || i in n || Wi(e, i, null, t[i], r);
  for (i in n)
    o && typeof n[i] != "function" || i === "children" || i === "key" || i === "value" || i === "checked" || t[i] === n[i] || Wi(e, i, n[i], t[i], r);
}
function z_(e, n, t) {
  n[0] === "-" ? e.setProperty(n, t ?? "") : e[n] = t == null ? "" : typeof t != "number" || nO.test(n) ? t : t + "px";
}
function Wi(e, n, t, r, o) {
  var i;
  e:
    if (n === "style")
      if (typeof t == "string")
        e.style.cssText = t;
      else {
        if (typeof r == "string" && (e.style.cssText = r = ""), r)
          for (n in r)
            t && n in t || z_(e.style, n, "");
        if (t)
          for (n in t)
            r && t[n] === r[n] || z_(e.style, n, t[n]);
      }
    else if (n[0] === "o" && n[1] === "n")
      i = n !== (n = n.replace(/Capture$/, "")), n = n.toLowerCase() in e ? n.toLowerCase().slice(2) : n.slice(2), e.l || (e.l = {}), e.l[n + i] = t, t ? r || e.addEventListener(n, i ? q_ : J_, i) : e.removeEventListener(n, i ? q_ : J_, i);
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
function J_(e) {
  return this.l[e.type + !1](V.event ? V.event(e) : e);
}
function q_(e) {
  return this.l[e.type + !0](V.event ? V.event(e) : e);
}
function Qd(e, n, t, r, o, i, s, a, u, _) {
  var c, l, f, T, d, h, m, O, R, N, A, p, w, k, Y, M = n.type;
  if (n.constructor !== void 0)
    return null;
  t.__h != null && (u = t.__h, a = n.__e = t.__e, n.__h = null, i = [a]), (c = V.__b) && c(n);
  try {
    e:
      if (typeof M == "function") {
        if (O = n.props, R = (c = M.contextType) && r[c.__c], N = c ? R ? R.props.value : c.__ : r, t.__c ? m = (l = n.__c = t.__c).__ = l.__E : ("prototype" in M && M.prototype.render ? n.__c = l = new M(O, N) : (n.__c = l = new Qn(O, N), l.constructor = M, l.render = sO), R && R.sub(l), l.props = O, l.state || (l.state = {}), l.context = N, l.__n = r, f = l.__d = !0, l.__h = [], l._sb = []), l.__s == null && (l.__s = l.state), M.getDerivedStateFromProps != null && (l.__s == l.state && (l.__s = pt({}, l.__s)), pt(l.__s, M.getDerivedStateFromProps(O, l.__s))), T = l.props, d = l.state, l.__v = n, f)
          M.getDerivedStateFromProps == null && l.componentWillMount != null && l.componentWillMount(), l.componentDidMount != null && l.__h.push(l.componentDidMount);
        else {
          if (M.getDerivedStateFromProps == null && O !== T && l.componentWillReceiveProps != null && l.componentWillReceiveProps(O, N), !l.__e && (l.shouldComponentUpdate != null && l.shouldComponentUpdate(O, l.__s, N) === !1 || n.__v === t.__v)) {
            for (n.__v !== t.__v && (l.props = O, l.state = l.__s, l.__d = !1), n.__e = t.__e, n.__k = t.__k, n.__k.forEach(function(j) {
              j && (j.__ = n);
            }), A = 0; A < l._sb.length; A++)
              l.__h.push(l._sb[A]);
            l._sb = [], l.__h.length && s.push(l);
            break e;
          }
          l.componentWillUpdate != null && l.componentWillUpdate(O, l.__s, N), l.componentDidUpdate != null && l.__h.push(function() {
            l.componentDidUpdate(T, d, h);
          });
        }
        if (l.context = N, l.props = O, l.__P = e, l.__e = !1, p = V.__r, w = 0, "prototype" in M && M.prototype.render) {
          for (l.state = l.__s, l.__d = !1, p && p(n), c = l.render(l.props, l.state, l.context), k = 0; k < l._sb.length; k++)
            l.__h.push(l._sb[k]);
          l._sb = [];
        } else
          do
            l.__d = !1, p && p(n), c = l.render(l.props, l.state, l.context), l.state = l.__s;
          while (l.__d && ++w < 25);
        l.state = l.__s, l.getChildContext != null && (r = pt(pt({}, r), l.getChildContext())), f || l.getSnapshotBeforeUpdate == null || (h = l.getSnapshotBeforeUpdate(T, d)), zd(e, Es(Y = c != null && c.type === oo && c.key == null ? c.props.children : c) ? Y : [Y], n, t, r, o, i, s, a, u, _), l.base = n.__e, n.__h = null, l.__h.length && s.push(l), m && (l.__E = l.__ = null);
      } else
        i == null && n.__v === t.__v ? (n.__k = t.__k, n.__e = t.__e) : n.__e = iO(t.__e, n, t, r, o, i, s, u, _);
    (c = V.diffed) && c(n);
  } catch (j) {
    n.__v = null, (u || i != null) && (n.__e = a, n.__h = !!u, i[i.indexOf(a)] = null), V.__e(j, n, t);
  }
}
function oO(e, n, t) {
  for (var r = 0; r < t.length; r++)
    vu(t[r], t[++r], t[++r]);
  V.__c && V.__c(n, e), e.some(function(o) {
    try {
      e = o.__h, o.__h = [], e.some(function(i) {
        i.call(o);
      });
    } catch (i) {
      V.__e(i, o.__v);
    }
  });
}
function iO(e, n, t, r, o, i, s, a, u) {
  var _, c, l, f = t.props, T = n.props, d = n.type, h = 0;
  if (d === "svg" && (o = !0), i != null) {
    for (; h < i.length; h++)
      if ((_ = i[h]) && "setAttribute" in _ == !!d && (d ? _.localName === d : _.nodeType === 3)) {
        e = _, i[h] = null;
        break;
      }
  }
  if (e == null) {
    if (d === null)
      return document.createTextNode(T);
    e = o ? document.createElementNS("http://www.w3.org/2000/svg", d) : document.createElement(d, T.is && T), i = null, a = !1;
  }
  if (d === null)
    f === T || a && e.data === T || (e.data = T);
  else {
    if (i = i && Gu.call(e.childNodes), c = (f = t.props || Ti).dangerouslySetInnerHTML, l = T.dangerouslySetInnerHTML, !a) {
      if (i != null)
        for (f = {}, h = 0; h < e.attributes.length; h++)
          f[e.attributes[h].name] = e.attributes[h].value;
      (l || c) && (l && (c && l.__html == c.__html || l.__html === e.innerHTML) || (e.innerHTML = l && l.__html || ""));
    }
    if (rO(e, T, f, o, a), l)
      n.__k = [];
    else if (zd(e, Es(h = n.props.children) ? h : [h], n, t, r, o && d !== "foreignObject", i, s, i ? i[0] : t.__k && ji(t, 0), a, u), i != null)
      for (h = i.length; h--; )
        i[h] != null && Yd(i[h]);
    a || ("value" in T && (h = T.value) !== void 0 && (h !== e.value || d === "progress" && !h || d === "option" && h !== f.value) && Wi(e, "value", h, f.value, !1), "checked" in T && (h = T.checked) !== void 0 && h !== e.checked && Wi(e, "checked", h, f.checked, !1));
  }
  return e;
}
function vu(e, n, t) {
  try {
    typeof e == "function" ? e(n) : e.current = n;
  } catch (r) {
    V.__e(r, t);
  }
}
function Zd(e, n, t) {
  var r, o;
  if (V.unmount && V.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || vu(r, null, n)), (r = e.__c) != null) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (i) {
        V.__e(i, n);
      }
    r.base = r.__P = null, e.__c = void 0;
  }
  if (r = e.__k)
    for (o = 0; o < r.length; o++)
      r[o] && Zd(r[o], n, t || typeof e.type != "function");
  t || e.__e == null || Yd(e.__e), e.__ = e.__e = e.__d = void 0;
}
function sO(e, n, t) {
  return this.constructor(e, t);
}
Gu = Kd.slice, V = { __e: function(e, n, t, r) {
  for (var o, i, s; n = n.__; )
    if ((o = n.__c) && !o.__)
      try {
        if ((i = o.constructor) && i.getDerivedStateFromError != null && (o.setState(i.getDerivedStateFromError(e)), s = o.__d), o.componentDidCatch != null && (o.componentDidCatch(e, r || {}), s = o.__d), s)
          return o.__E = o;
      } catch (a) {
        e = a;
      }
  throw e;
} }, Wd = 0, Qn.prototype.setState = function(e, n) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = pt({}, this.state), typeof e == "function" && (e = e(pt({}, t), this.props)), e && pt(t, e), e != null && this.__v && (n && this._sb.push(n), $_(this));
}, Qn.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), $_(this));
}, Qn.prototype.render = oo, wt = [], Xd = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, wa = function(e, n) {
  return e.__v.__b - n.__v.__b;
}, Fi.__r = 0;
var io, Ae, ta, Q_, Pa = 0, eh = [], Oi = [], Z_ = V.__b, el = V.__r, nl = V.diffed, tl = V.__c, rl = V.unmount;
function Cu(e, n) {
  V.__h && V.__h(Ae, e, Pa || n), Pa = 0;
  var t = Ae.__H || (Ae.__H = { __: [], __h: [] });
  return e >= t.__.length && t.__.push({ __V: Oi }), t.__[e];
}
function aO(e) {
  return Pa = 1, uO(nh, e);
}
function uO(e, n, t) {
  var r = Cu(io++, 2);
  if (r.t = e, !r.__c && (r.__ = [t ? t(n) : nh(void 0, n), function(a) {
    var u = r.__N ? r.__N[0] : r.__[0], _ = r.t(u, a);
    u !== _ && (r.__N = [_, r.__[1]], r.__c.setState({}));
  }], r.__c = Ae, !Ae.u)) {
    var o = function(a, u, _) {
      if (!r.__c.__H)
        return !0;
      var c = r.__c.__H.__.filter(function(f) {
        return f.__c;
      });
      if (c.every(function(f) {
        return !f.__N;
      }))
        return !i || i.call(this, a, u, _);
      var l = !1;
      return c.forEach(function(f) {
        if (f.__N) {
          var T = f.__[0];
          f.__ = f.__N, f.__N = void 0, T !== f.__[0] && (l = !0);
        }
      }), !(!l && r.__c.props === a) && (!i || i.call(this, a, u, _));
    };
    Ae.u = !0;
    var i = Ae.shouldComponentUpdate, s = Ae.componentWillUpdate;
    Ae.componentWillUpdate = function(a, u, _) {
      if (this.__e) {
        var c = i;
        i = void 0, o(a, u, _), i = c;
      }
      s && s.call(this, a, u, _);
    }, Ae.shouldComponentUpdate = o;
  }
  return r.__N || r.__;
}
function _O(e, n) {
  var t = Cu(io++, 3);
  !V.__s && hO(t.__H, n) && (t.__ = e, t.i = n, Ae.__H.__h.push(t));
}
function lO(e) {
  var n = Cu(io++, 10), t = aO();
  return n.__ = e, Ae.componentDidCatch || (Ae.componentDidCatch = function(r, o) {
    n.__ && n.__(r, o), t[1](r);
  }), [t[0], function() {
    t[1](void 0);
  }];
}
function cO() {
  for (var e; e = eh.shift(); )
    if (e.__P && e.__H)
      try {
        e.__H.__h.forEach(Ri), e.__H.__h.forEach(Ma), e.__H.__h = [];
      } catch (n) {
        e.__H.__h = [], V.__e(n, e.__v);
      }
}
V.__b = function(e) {
  Ae = null, Z_ && Z_(e);
}, V.__r = function(e) {
  el && el(e), io = 0;
  var n = (Ae = e.__c).__H;
  n && (ta === Ae ? (n.__h = [], Ae.__h = [], n.__.forEach(function(t) {
    t.__N && (t.__ = t.__N), t.__V = Oi, t.__N = t.i = void 0;
  })) : (n.__h.forEach(Ri), n.__h.forEach(Ma), n.__h = [], io = 0)), ta = Ae;
}, V.diffed = function(e) {
  nl && nl(e);
  var n = e.__c;
  n && n.__H && (n.__H.__h.length && (eh.push(n) !== 1 && Q_ === V.requestAnimationFrame || ((Q_ = V.requestAnimationFrame) || dO)(cO)), n.__H.__.forEach(function(t) {
    t.i && (t.__H = t.i), t.__V !== Oi && (t.__ = t.__V), t.i = void 0, t.__V = Oi;
  })), ta = Ae = null;
}, V.__c = function(e, n) {
  n.some(function(t) {
    try {
      t.__h.forEach(Ri), t.__h = t.__h.filter(function(r) {
        return !r.__ || Ma(r);
      });
    } catch (r) {
      n.some(function(o) {
        o.__h && (o.__h = []);
      }), n = [], V.__e(r, t.__v);
    }
  }), tl && tl(e, n);
}, V.unmount = function(e) {
  rl && rl(e);
  var n, t = e.__c;
  t && t.__H && (t.__H.__.forEach(function(r) {
    try {
      Ri(r);
    } catch (o) {
      n = o;
    }
  }), t.__H = void 0, n && V.__e(n, t.__v));
};
var ol = typeof requestAnimationFrame == "function";
function dO(e) {
  var n, t = function() {
    clearTimeout(r), ol && cancelAnimationFrame(n), setTimeout(e);
  }, r = setTimeout(t, 100);
  ol && (n = requestAnimationFrame(t));
}
function Ri(e) {
  var n = Ae, t = e.__c;
  typeof t == "function" && (e.__c = void 0, t()), Ae = n;
}
function Ma(e) {
  var n = Ae;
  e.__c = e.__(), Ae = n;
}
function hO(e, n) {
  return !e || e.length !== n.length || n.some(function(t, r) {
    return t !== e[r];
  });
}
function nh(e, n) {
  return typeof n == "function" ? n(e) : n;
}
const mO = ({ errorInfo: e }) => /* @__PURE__ */ Z("div", { children: [
  "Custom Error Boundary. ",
  /* @__PURE__ */ b("br", {})
] }), fO = ({ children: e }) => {
  const [n] = lO();
  return console.error(n), n ? /* @__PURE__ */ b(mO, { errorInfo: n }) : /* @__PURE__ */ b(bo, { children: e });
}, th = as({}), pO = ({ children: e }) => {
  const [n, t] = ff.useMessage(), r = ({ type: o, message: i }) => {
    n.open({
      type: o ?? "info",
      content: i,
      duration: 5
    });
  };
  return /* @__PURE__ */ Z(bo, { children: [
    t,
    /* @__PURE__ */ b(th.Provider, { value: { open: r }, children: e })
  ] });
}, so = ({ when: e, children: n }) => e ? n : null, TO = ({ children: e }) => /* @__PURE__ */ b(fO, { children: e }), rh = as({}), EO = async () => Promise.all([
  Promise.resolve().then(() => k2),
  import("./use-gesture-react.esm-7899cdd1.mjs")
]), ko = ({ children: e }) => {
  const n = ee(), t = ee(), r = Fd(), o = async () => {
    const [s, a] = await EO();
    n.current = s, t.current = a, r.on();
  };
  Se(() => {
    o();
  }, []);
  const i = mt(() => ({
    Spring: n.current,
    Gesture: t.current,
    isLoaded: r.val
  }), [r.val]);
  return /* @__PURE__ */ b(rh.Provider, { value: i, children: /* @__PURE__ */ b(so, { when: r.val, children: e }) });
}, gr = () => tn(rh), OO = () => tn(th), RO = () => {
  Se(() => (document.body.style.overflow = "hidden", () => {
    document.body.style.overflow = "auto";
  }));
}, ka = (e) => typeof e == "object" && e !== null, oh = (e) => typeof e == "string", bO = (e) => typeof e == "function";
class ih {
  constructor(n) {
    this.isDisabled = !1, this.isDisabled = n ?? this.isDisabled;
  }
  get(n, t) {
    if (this.isDisabled)
      return t;
    const r = localStorage.getItem(n);
    return r ? gO(r) ? JSON.parse(r) : r : t;
  }
  set(n, t) {
    if (!(this.isDisabled || !(n in ZE))) {
      if (oh(t))
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
const gO = (e) => {
  try {
    JSON.parse(e);
  } catch {
    return !1;
  }
  return !0;
}, NO = ({ children: e, override: n, ...t }) => /* @__PURE__ */ b(pf, { theme: {
  token: { colorPrimary: n }
}, children: /* @__PURE__ */ b(Lr, { ...t, children: e }) });
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
function IO() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function AO() {
  let [, e] = ze(/* @__PURE__ */ Object.create(null));
  return et(() => {
    e(/* @__PURE__ */ Object.create(null));
  }, []);
}
var SO = IO() ? hc : Se, GO = ({
  children: e,
  type: n = "reach-portal",
  containerRef: t
}) => {
  let r = sn.useRef(null), o = sn.useRef(null), i = AO();
  return sn.useEffect(() => {
    t != null && (typeof t != "object" || !("current" in t) ? console.warn("@reach/portal: Invalid value passed to the `containerRef` of a `Portal`. The portal will be appended to the document body, but if you want to attach it to another DOM node you must pass a valid React ref object to `containerRef`.") : t.current == null && console.warn("@reach/portal: A ref was passed to the `containerRef` prop of a `Portal`, but no DOM node was attached to it. Be sure to pass the ref to a DOM component.\n\nIf you are forwarding the ref from another component, be sure to use the React.forwardRef API. See https://reactjs.org/docs/forwarding-refs.html."));
  }, [t]), SO(() => {
    if (!r.current)
      return;
    let s = r.current.ownerDocument, a = t?.current || s.body;
    return o.current = s?.createElement(n), a.appendChild(o.current), i(), () => {
      o.current && a && a.removeChild(o.current);
    };
  }, [n, i, t]), o.current ? gf(e, o.current) : /* @__PURE__ */ sn.createElement("span", {
    ref: r
  });
}, sh = ({
  unstable_skipInitialRender: e,
  ...n
}) => {
  let [t, r] = sn.useState(!1);
  return sn.useEffect(() => {
    e && r(!0);
  }, [e]), e && !t ? null : /* @__PURE__ */ sn.createElement(GO, {
    ...n
  });
};
sh.displayName = "Portal";
const vO = () => ({
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
function CO(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ah = { exports: {} }, he = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var il;
function DO() {
  if (il)
    return he;
  il = 1;
  var e = Symbol.for("react.element"), n = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), a = Symbol.for("react.server_context"), u = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), T = Symbol.for("react.offscreen"), d;
  d = Symbol.for("react.module.reference");
  function h(m) {
    if (typeof m == "object" && m !== null) {
      var O = m.$$typeof;
      switch (O) {
        case e:
          switch (m = m.type, m) {
            case t:
            case o:
            case r:
            case _:
            case c:
              return m;
            default:
              switch (m = m && m.$$typeof, m) {
                case a:
                case s:
                case u:
                case f:
                case l:
                case i:
                  return m;
                default:
                  return O;
              }
          }
        case n:
          return O;
      }
    }
  }
  return he.ContextConsumer = s, he.ContextProvider = i, he.Element = e, he.ForwardRef = u, he.Fragment = t, he.Lazy = f, he.Memo = l, he.Portal = n, he.Profiler = o, he.StrictMode = r, he.Suspense = _, he.SuspenseList = c, he.isAsyncMode = function() {
    return !1;
  }, he.isConcurrentMode = function() {
    return !1;
  }, he.isContextConsumer = function(m) {
    return h(m) === s;
  }, he.isContextProvider = function(m) {
    return h(m) === i;
  }, he.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === e;
  }, he.isForwardRef = function(m) {
    return h(m) === u;
  }, he.isFragment = function(m) {
    return h(m) === t;
  }, he.isLazy = function(m) {
    return h(m) === f;
  }, he.isMemo = function(m) {
    return h(m) === l;
  }, he.isPortal = function(m) {
    return h(m) === n;
  }, he.isProfiler = function(m) {
    return h(m) === o;
  }, he.isStrictMode = function(m) {
    return h(m) === r;
  }, he.isSuspense = function(m) {
    return h(m) === _;
  }, he.isSuspenseList = function(m) {
    return h(m) === c;
  }, he.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === t || m === o || m === r || m === _ || m === c || m === T || typeof m == "object" && m !== null && (m.$$typeof === f || m.$$typeof === l || m.$$typeof === i || m.$$typeof === s || m.$$typeof === u || m.$$typeof === d || m.getModuleId !== void 0);
  }, he.typeOf = h, he;
}
ah.exports = DO();
var uh = ah.exports;
function yO(e) {
  function n(D, U, P, F, E) {
    for (var J = 0, G = 0, ce = 0, te = 0, fe, $, Pe = 0, Je = 0, ie, Be = ie = fe = 0, de = 0, Me = 0, Cr = 0, ke = 0, $o = P.length, Dr = $o - 1, On, K = "", Ce = "", Ks = "", Ys = "", ut; de < $o; ) {
      if ($ = P.charCodeAt(de), de === Dr && G + te + ce + J !== 0 && (G !== 0 && ($ = G === 47 ? 10 : 47), te = ce = J = 0, $o++, Dr++), G + te + ce + J === 0) {
        if (de === Dr && (0 < Me && (K = K.replace(f, "")), 0 < K.trim().length)) {
          switch ($) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              K += P.charAt(de);
          }
          $ = 59;
        }
        switch ($) {
          case 123:
            for (K = K.trim(), fe = K.charCodeAt(0), ie = 1, ke = ++de; de < $o; ) {
              switch ($ = P.charCodeAt(de)) {
                case 123:
                  ie++;
                  break;
                case 125:
                  ie--;
                  break;
                case 47:
                  switch ($ = P.charCodeAt(de + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (Be = de + 1; Be < Dr; ++Be)
                          switch (P.charCodeAt(Be)) {
                            case 47:
                              if ($ === 42 && P.charCodeAt(Be - 1) === 42 && de + 2 !== Be) {
                                de = Be + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if ($ === 47) {
                                de = Be + 1;
                                break e;
                              }
                          }
                        de = Be;
                      }
                  }
                  break;
                case 91:
                  $++;
                case 40:
                  $++;
                case 34:
                case 39:
                  for (; de++ < Dr && P.charCodeAt(de) !== $; )
                    ;
              }
              if (ie === 0)
                break;
              de++;
            }
            switch (ie = P.substring(ke, de), fe === 0 && (fe = (K = K.replace(l, "").trim()).charCodeAt(0)), fe) {
              case 64:
                switch (0 < Me && (K = K.replace(f, "")), $ = K.charCodeAt(1), $) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    Me = U;
                    break;
                  default:
                    Me = q;
                }
                if (ie = n(U, Me, ie, $, E + 1), ke = ie.length, 0 < ne && (Me = t(q, K, Cr), ut = a(3, ie, Me, U, Ne, pe, ke, $, E, F), K = Me.join(""), ut !== void 0 && (ke = (ie = ut.trim()).length) === 0 && ($ = 0, ie = "")), 0 < ke)
                  switch ($) {
                    case 115:
                      K = K.replace(w, s);
                    case 100:
                    case 109:
                    case 45:
                      ie = K + "{" + ie + "}";
                      break;
                    case 107:
                      K = K.replace(R, "$1 $2"), ie = K + "{" + ie + "}", ie = C === 1 || C === 2 && i("@" + ie, 3) ? "@-webkit-" + ie + "@" + ie : "@" + ie;
                      break;
                    default:
                      ie = K + ie, F === 112 && (ie = (Ce += ie, ""));
                  }
                else
                  ie = "";
                break;
              default:
                ie = n(U, t(U, K, Cr), ie, F, E + 1);
            }
            Ks += ie, ie = Cr = Me = Be = fe = 0, K = "", $ = P.charCodeAt(++de);
            break;
          case 125:
          case 59:
            if (K = (0 < Me ? K.replace(f, "") : K).trim(), 1 < (ke = K.length))
              switch (Be === 0 && (fe = K.charCodeAt(0), fe === 45 || 96 < fe && 123 > fe) && (ke = (K = K.replace(" ", ":")).length), 0 < ne && (ut = a(1, K, U, D, Ne, pe, Ce.length, F, E, F)) !== void 0 && (ke = (K = ut.trim()).length) === 0 && (K = "\0\0"), fe = K.charCodeAt(0), $ = K.charCodeAt(1), fe) {
                case 0:
                  break;
                case 64:
                  if ($ === 105 || $ === 99) {
                    Ys += K + P.charAt(de);
                    break;
                  }
                default:
                  K.charCodeAt(ke - 1) !== 58 && (Ce += o(K, fe, $, K.charCodeAt(2)));
              }
            Cr = Me = Be = fe = 0, K = "", $ = P.charCodeAt(++de);
        }
      }
      switch ($) {
        case 13:
        case 10:
          G === 47 ? G = 0 : 1 + fe === 0 && F !== 107 && 0 < K.length && (Me = 1, K += "\0"), 0 < ne * we && a(0, K, U, D, Ne, pe, Ce.length, F, E, F), pe = 1, Ne++;
          break;
        case 59:
        case 125:
          if (G + te + ce + J === 0) {
            pe++;
            break;
          }
        default:
          switch (pe++, On = P.charAt(de), $) {
            case 9:
            case 32:
              if (te + J + G === 0)
                switch (Pe) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    On = "";
                    break;
                  default:
                    $ !== 32 && (On = " ");
                }
              break;
            case 0:
              On = "\\0";
              break;
            case 12:
              On = "\\f";
              break;
            case 11:
              On = "\\v";
              break;
            case 38:
              te + G + J === 0 && (Me = Cr = 1, On = "\f" + On);
              break;
            case 108:
              if (te + G + J + x === 0 && 0 < Be)
                switch (de - Be) {
                  case 2:
                    Pe === 112 && P.charCodeAt(de - 3) === 58 && (x = Pe);
                  case 8:
                    Je === 111 && (x = Je);
                }
              break;
            case 58:
              te + G + J === 0 && (Be = de);
              break;
            case 44:
              G + ce + te + J === 0 && (Me = 1, On += "\r");
              break;
            case 34:
            case 39:
              G === 0 && (te = te === $ ? 0 : te === 0 ? $ : te);
              break;
            case 91:
              te + G + ce === 0 && J++;
              break;
            case 93:
              te + G + ce === 0 && J--;
              break;
            case 41:
              te + G + J === 0 && ce--;
              break;
            case 40:
              if (te + G + J === 0) {
                if (fe === 0)
                  switch (2 * Pe + 3 * Je) {
                    case 533:
                      break;
                    default:
                      fe = 1;
                  }
                ce++;
              }
              break;
            case 64:
              G + ce + te + J + Be + ie === 0 && (ie = 1);
              break;
            case 42:
            case 47:
              if (!(0 < te + J + ce))
                switch (G) {
                  case 0:
                    switch (2 * $ + 3 * P.charCodeAt(de + 1)) {
                      case 235:
                        G = 47;
                        break;
                      case 220:
                        ke = de, G = 42;
                    }
                    break;
                  case 42:
                    $ === 47 && Pe === 42 && ke + 2 !== de && (P.charCodeAt(ke + 2) === 33 && (Ce += P.substring(ke, de + 1)), On = "", G = 0);
                }
          }
          G === 0 && (K += On);
      }
      Je = Pe, Pe = $, de++;
    }
    if (ke = Ce.length, 0 < ke) {
      if (Me = U, 0 < ne && (ut = a(2, Ce, Me, D, Ne, pe, ke, F, E, F), ut !== void 0 && (Ce = ut).length === 0))
        return Ys + Ce + Ks;
      if (Ce = Me.join(",") + "{" + Ce + "}", C * x !== 0) {
        switch (C !== 2 || i(Ce, 2) || (x = 0), x) {
          case 111:
            Ce = Ce.replace(A, ":-moz-$1") + Ce;
            break;
          case 112:
            Ce = Ce.replace(N, "::-webkit-input-$1") + Ce.replace(N, "::-moz-$1") + Ce.replace(N, ":-ms-input-$1") + Ce;
        }
        x = 0;
      }
    }
    return Ys + Ce + Ks;
  }
  function t(D, U, P) {
    var F = U.trim().split(m);
    U = F;
    var E = F.length, J = D.length;
    switch (J) {
      case 0:
      case 1:
        var G = 0;
        for (D = J === 0 ? "" : D[0] + " "; G < E; ++G)
          U[G] = r(D, U[G], P).trim();
        break;
      default:
        var ce = G = 0;
        for (U = []; G < E; ++G)
          for (var te = 0; te < J; ++te)
            U[ce++] = r(D[te] + " ", F[G], P).trim();
    }
    return U;
  }
  function r(D, U, P) {
    var F = U.charCodeAt(0);
    switch (33 > F && (F = (U = U.trim()).charCodeAt(0)), F) {
      case 38:
        return U.replace(O, "$1" + D.trim());
      case 58:
        return D.trim() + U.replace(O, "$1" + D.trim());
      default:
        if (0 < 1 * P && 0 < U.indexOf("\f"))
          return U.replace(O, (D.charCodeAt(0) === 58 ? "" : "$1") + D.trim());
    }
    return D + U;
  }
  function o(D, U, P, F) {
    var E = D + ";", J = 2 * U + 3 * P + 4 * F;
    if (J === 944) {
      D = E.indexOf(":", 9) + 1;
      var G = E.substring(D, E.length - 1).trim();
      return G = E.substring(0, D).trim() + G + ";", C === 1 || C === 2 && i(G, 1) ? "-webkit-" + G + G : G;
    }
    if (C === 0 || C === 2 && !i(E, 1))
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
          return E.replace(Oe, "$1-webkit-$2") + E;
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
        return G = E.substring(E.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + G + "-webkit-" + E + "-ms-flex-pack" + G + E;
      case 1005:
        return d.test(E) ? E.replace(T, ":-webkit-") + E.replace(T, ":-moz-") + E : E;
      case 1e3:
        switch (G = E.substring(13).trim(), U = G.indexOf("-") + 1, G.charCodeAt(0) + G.charCodeAt(U)) {
          case 226:
            G = E.replace(p, "tb");
            break;
          case 232:
            G = E.replace(p, "tb-rl");
            break;
          case 220:
            G = E.replace(p, "lr");
            break;
          default:
            return E;
        }
        return "-webkit-" + E + "-ms-" + G + E;
      case 1017:
        if (E.indexOf("sticky", 9) === -1)
          break;
      case 975:
        switch (U = (E = D).length - 10, G = (E.charCodeAt(U) === 33 ? E.substring(0, U) : E).substring(D.indexOf(":", 7) + 1).trim(), J = G.charCodeAt(0) + (G.charCodeAt(7) | 0)) {
          case 203:
            if (111 > G.charCodeAt(8))
              break;
          case 115:
            E = E.replace(G, "-webkit-" + G) + ";" + E;
            break;
          case 207:
          case 102:
            E = E.replace(G, "-webkit-" + (102 < J ? "inline-" : "") + "box") + ";" + E.replace(G, "-webkit-" + G) + ";" + E.replace(G, "-ms-" + G + "box") + ";" + E;
        }
        return E + ";";
      case 938:
        if (E.charCodeAt(5) === 45)
          switch (E.charCodeAt(6)) {
            case 105:
              return G = E.replace("-items", ""), "-webkit-" + E + "-webkit-box-" + G + "-ms-flex-" + G + E;
            case 115:
              return "-webkit-" + E + "-ms-flex-item-" + E.replace(Y, "") + E;
            default:
              return "-webkit-" + E + "-ms-flex-line-pack" + E.replace("align-content", "").replace(Y, "") + E;
          }
        break;
      case 973:
      case 989:
        if (E.charCodeAt(3) !== 45 || E.charCodeAt(4) === 122)
          break;
      case 931:
      case 953:
        if (j.test(D) === !0)
          return (G = D.substring(D.indexOf(":") + 1)).charCodeAt(0) === 115 ? o(D.replace("stretch", "fill-available"), U, P, F).replace(":fill-available", ":stretch") : E.replace(G, "-webkit-" + G) + E.replace(G, "-moz-" + G.replace("fill-", "")) + E;
        break;
      case 962:
        if (E = "-webkit-" + E + (E.charCodeAt(5) === 102 ? "-ms-" + E : "") + E, P + F === 211 && E.charCodeAt(13) === 105 && 0 < E.indexOf("transform", 10))
          return E.substring(0, E.indexOf(";", 27) + 1).replace(h, "$1-webkit-$2") + E;
    }
    return E;
  }
  function i(D, U) {
    var P = D.indexOf(U === 1 ? ":" : "{"), F = D.substring(0, U !== 3 ? P : 10);
    return P = D.substring(P + 1, D.length - 1), Ge(U !== 2 ? F : F.replace(M, "$1"), P, U);
  }
  function s(D, U) {
    var P = o(U, U.charCodeAt(0), U.charCodeAt(1), U.charCodeAt(2));
    return P !== U + ";" ? P.replace(k, " or ($1)").substring(4) : "(" + U + ")";
  }
  function a(D, U, P, F, E, J, G, ce, te, fe) {
    for (var $ = 0, Pe = U, Je; $ < ne; ++$)
      switch (Je = le[$].call(c, D, Pe, P, F, E, J, G, ce, te, fe)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          Pe = Je;
      }
    if (Pe !== U)
      return Pe;
  }
  function u(D) {
    switch (D) {
      case void 0:
      case null:
        ne = le.length = 0;
        break;
      default:
        if (typeof D == "function")
          le[ne++] = D;
        else if (typeof D == "object")
          for (var U = 0, P = D.length; U < P; ++U)
            u(D[U]);
        else
          we = !!D | 0;
    }
    return u;
  }
  function _(D) {
    return D = D.prefix, D !== void 0 && (Ge = null, D ? typeof D != "function" ? C = 1 : (C = 2, Ge = D) : C = 0), _;
  }
  function c(D, U) {
    var P = D;
    if (33 > P.charCodeAt(0) && (P = P.trim()), Ie = P, P = [Ie], 0 < ne) {
      var F = a(-1, U, P, P, Ne, pe, 0, 0, 0, 0);
      F !== void 0 && typeof F == "string" && (U = F);
    }
    var E = n(q, P, U, 0, 0);
    return 0 < ne && (F = a(-2, E, P, P, Ne, pe, E.length, 0, 0, 0), F !== void 0 && (E = F)), Ie = "", x = 0, pe = Ne = 1, E;
  }
  var l = /^\0+/g, f = /[\0\r\f]/g, T = /: */g, d = /zoo|gra/, h = /([,: ])(transform)/g, m = /,\r+?/g, O = /([\t\r\n ])*\f?&/g, R = /@(k\w+)\s*(\S*)\s*/, N = /::(place)/g, A = /:(read-only)/g, p = /[svh]\w+-[tblr]{2}/, w = /\(\s*(.*)\s*\)/g, k = /([\s\S]*?);/g, Y = /-self|flex-/g, M = /[^]*?(:[rp][el]a[\w-]+)[^]*/, j = /stretch|:\s*\w+\-(?:conte|avail)/, Oe = /([^-])(image-set\()/, pe = 1, Ne = 1, x = 0, C = 1, q = [], le = [], ne = 0, Ge = null, we = 0, Ie = "";
  return c.use = u, c.set = _, e !== void 0 && _(e), c;
}
var UO = {
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
function HO(e) {
  var n = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return n[t] === void 0 && (n[t] = e(t)), n[t];
  };
}
var wO = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, sl = /* @__PURE__ */ HO(
  function(e) {
    return wO.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), _h = { exports: {} }, me = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var al;
function PO() {
  if (al)
    return me;
  al = 1;
  var e = typeof Symbol == "function" && Symbol.for, n = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, _ = e ? Symbol.for("react.concurrent_mode") : 60111, c = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, T = e ? Symbol.for("react.memo") : 60115, d = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, O = e ? Symbol.for("react.responder") : 60118, R = e ? Symbol.for("react.scope") : 60119;
  function N(p) {
    if (typeof p == "object" && p !== null) {
      var w = p.$$typeof;
      switch (w) {
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
                  return w;
              }
          }
        case t:
          return w;
      }
    }
  }
  function A(p) {
    return N(p) === _;
  }
  return me.AsyncMode = u, me.ConcurrentMode = _, me.ContextConsumer = a, me.ContextProvider = s, me.Element = n, me.ForwardRef = c, me.Fragment = r, me.Lazy = d, me.Memo = T, me.Portal = t, me.Profiler = i, me.StrictMode = o, me.Suspense = l, me.isAsyncMode = function(p) {
    return A(p) || N(p) === u;
  }, me.isConcurrentMode = A, me.isContextConsumer = function(p) {
    return N(p) === a;
  }, me.isContextProvider = function(p) {
    return N(p) === s;
  }, me.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === n;
  }, me.isForwardRef = function(p) {
    return N(p) === c;
  }, me.isFragment = function(p) {
    return N(p) === r;
  }, me.isLazy = function(p) {
    return N(p) === d;
  }, me.isMemo = function(p) {
    return N(p) === T;
  }, me.isPortal = function(p) {
    return N(p) === t;
  }, me.isProfiler = function(p) {
    return N(p) === i;
  }, me.isStrictMode = function(p) {
    return N(p) === o;
  }, me.isSuspense = function(p) {
    return N(p) === l;
  }, me.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === r || p === _ || p === i || p === o || p === l || p === f || typeof p == "object" && p !== null && (p.$$typeof === d || p.$$typeof === T || p.$$typeof === s || p.$$typeof === a || p.$$typeof === c || p.$$typeof === m || p.$$typeof === O || p.$$typeof === R || p.$$typeof === h);
  }, me.typeOf = N, me;
}
_h.exports = PO();
var MO = _h.exports, Du = MO, kO = {
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
}, xO = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, LO = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, lh = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, yu = {};
yu[Du.ForwardRef] = LO;
yu[Du.Memo] = lh;
function ul(e) {
  return Du.isMemo(e) ? lh : yu[e.$$typeof] || kO;
}
var BO = Object.defineProperty, jO = Object.getOwnPropertyNames, _l = Object.getOwnPropertySymbols, FO = Object.getOwnPropertyDescriptor, VO = Object.getPrototypeOf, ll = Object.prototype;
function ch(e, n, t) {
  if (typeof n != "string") {
    if (ll) {
      var r = VO(n);
      r && r !== ll && ch(e, r, t);
    }
    var o = jO(n);
    _l && (o = o.concat(_l(n)));
    for (var i = ul(e), s = ul(n), a = 0; a < o.length; ++a) {
      var u = o[a];
      if (!xO[u] && !(t && t[u]) && !(s && s[u]) && !(i && i[u])) {
        var _ = FO(n, u);
        try {
          BO(e, u, _);
        } catch {
        }
      }
    }
  }
  return e;
}
var WO = ch;
const XO = /* @__PURE__ */ CO(WO);
function Yn() {
  return (Yn = Object.assign || function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = arguments[n];
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    }
    return e;
  }).apply(this, arguments);
}
var cl = function(e, n) {
  for (var t = [e[0]], r = 0, o = n.length; r < o; r += 1)
    t.push(n[r], e[r + 1]);
  return t;
}, xa = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !uh.typeOf(e);
}, Xi = Object.freeze([]), gt = Object.freeze({});
function ao(e) {
  return typeof e == "function";
}
function dl(e) {
  return e.displayName || e.name || "Component";
}
function Uu(e) {
  return e && typeof e.styledComponentId == "string";
}
var mr = typeof process < "u" && ({ GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_402b0c4d-e23e-4711-9388-732035e00d9e", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "npm/8.19.4 node/v16.20.1 linux x64 workspaces/false ci/github-actions", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_402b0c4d-e23e-4711-9388-732035e00d9e", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", npm_config_noproxy: "", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-8.2", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "", npm_config_userconfig: "/home/runner/.npmrc", npm_config_local_prefix: "/home/runner/work/CodeGear/CodeGear", SYSTEMD_EXEC_PID: "678", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", COLOR: "0", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.5/x64", NVM_DIR: "/home/runner/.nvm", npm_config_metrics_registry: "https://registry.npmjs.org/", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230702.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chrome_driver", JOURNAL_STREAM: "8:17151", GITHUB_WORKFLOW: "CodeGear CI", _: "/opt/hostedtoolcache/node/16.20.1/x64/bin/npm", npm_config_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", GITHUB_RUN_ID: "5536265220", npm_config_cache: "/home/runner/.npm", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "35497761426145bb6e9f18a4e1030e5d22af7b57", GITHUB_BASE_REF: "", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/heads/master", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", npm_config_node_gyp: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.bin:/home/runner/work/CodeGear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_816e03c4-7bc6-4f3d-a9b6-aed218b84bb4", INVOCATION_ID: "2c4e3a187d2941d2bfd96fd34e20618b", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.10/x64", NODE: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "18", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 2", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "master", GITHUB_REPOSITORY: "Gearonix/CodeGear", npm_lifecycle_script: " nx run-many --targets=build --all", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", npm_package_version: "0.0.0", npm_lifecycle_event: "build", NODE_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/bin/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/node_modules", GITHUB_REF_PROTECTED: "false", npm_config_strict_peer_dependencies: "", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "35497761426145bb6e9f18a4e1030e5d22af7b57", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/heads/master", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", npm_config_globalconfig: "/opt/hostedtoolcache/node/16.20.1/x64/etc/npmrc", npm_config_init_module: "/home/runner/.npm-init.js", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_402b0c4d-e23e-4711-9388-732035e00d9e", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", npm_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/bin/npm-cli.js", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "push", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_402b0c4d-e23e-4711-9388-732035e00d9e", npm_config_global_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", npm_command: "run-script", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_402b0c4d-e23e-4711-9388-732035e00d9e", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", EDITOR: "vi", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/18222501234825040518", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "18222501234825040518", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.REACT_APP_SC_ATTR || { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_402b0c4d-e23e-4711-9388-732035e00d9e", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "npm/8.19.4 node/v16.20.1 linux x64 workspaces/false ci/github-actions", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_402b0c4d-e23e-4711-9388-732035e00d9e", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", npm_config_noproxy: "", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-8.2", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "", npm_config_userconfig: "/home/runner/.npmrc", npm_config_local_prefix: "/home/runner/work/CodeGear/CodeGear", SYSTEMD_EXEC_PID: "678", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", COLOR: "0", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.5/x64", NVM_DIR: "/home/runner/.nvm", npm_config_metrics_registry: "https://registry.npmjs.org/", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230702.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chrome_driver", JOURNAL_STREAM: "8:17151", GITHUB_WORKFLOW: "CodeGear CI", _: "/opt/hostedtoolcache/node/16.20.1/x64/bin/npm", npm_config_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", GITHUB_RUN_ID: "5536265220", npm_config_cache: "/home/runner/.npm", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "35497761426145bb6e9f18a4e1030e5d22af7b57", GITHUB_BASE_REF: "", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/heads/master", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", npm_config_node_gyp: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.bin:/home/runner/work/CodeGear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_816e03c4-7bc6-4f3d-a9b6-aed218b84bb4", INVOCATION_ID: "2c4e3a187d2941d2bfd96fd34e20618b", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.10/x64", NODE: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "18", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 2", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "master", GITHUB_REPOSITORY: "Gearonix/CodeGear", npm_lifecycle_script: " nx run-many --targets=build --all", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", npm_package_version: "0.0.0", npm_lifecycle_event: "build", NODE_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/bin/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/node_modules", GITHUB_REF_PROTECTED: "false", npm_config_strict_peer_dependencies: "", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "35497761426145bb6e9f18a4e1030e5d22af7b57", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/heads/master", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", npm_config_globalconfig: "/opt/hostedtoolcache/node/16.20.1/x64/etc/npmrc", npm_config_init_module: "/home/runner/.npm-init.js", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_402b0c4d-e23e-4711-9388-732035e00d9e", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", npm_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/bin/npm-cli.js", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "push", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_402b0c4d-e23e-4711-9388-732035e00d9e", npm_config_global_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", npm_command: "run-script", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_402b0c4d-e23e-4711-9388-732035e00d9e", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", EDITOR: "vi", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/18222501234825040518", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "18222501234825040518", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.SC_ATTR) || "data-styled", Hu = typeof window < "u" && "HTMLElement" in window, KO = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_402b0c4d-e23e-4711-9388-732035e00d9e", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "npm/8.19.4 node/v16.20.1 linux x64 workspaces/false ci/github-actions", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_402b0c4d-e23e-4711-9388-732035e00d9e", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", npm_config_noproxy: "", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-8.2", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "", npm_config_userconfig: "/home/runner/.npmrc", npm_config_local_prefix: "/home/runner/work/CodeGear/CodeGear", SYSTEMD_EXEC_PID: "678", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", COLOR: "0", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.5/x64", NVM_DIR: "/home/runner/.nvm", npm_config_metrics_registry: "https://registry.npmjs.org/", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230702.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chrome_driver", JOURNAL_STREAM: "8:17151", GITHUB_WORKFLOW: "CodeGear CI", _: "/opt/hostedtoolcache/node/16.20.1/x64/bin/npm", npm_config_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", GITHUB_RUN_ID: "5536265220", npm_config_cache: "/home/runner/.npm", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "35497761426145bb6e9f18a4e1030e5d22af7b57", GITHUB_BASE_REF: "", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/heads/master", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", npm_config_node_gyp: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.bin:/home/runner/work/CodeGear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_816e03c4-7bc6-4f3d-a9b6-aed218b84bb4", INVOCATION_ID: "2c4e3a187d2941d2bfd96fd34e20618b", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.10/x64", NODE: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "18", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 2", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "master", GITHUB_REPOSITORY: "Gearonix/CodeGear", npm_lifecycle_script: " nx run-many --targets=build --all", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", npm_package_version: "0.0.0", npm_lifecycle_event: "build", NODE_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/bin/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/node_modules", GITHUB_REF_PROTECTED: "false", npm_config_strict_peer_dependencies: "", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "35497761426145bb6e9f18a4e1030e5d22af7b57", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/heads/master", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", npm_config_globalconfig: "/opt/hostedtoolcache/node/16.20.1/x64/etc/npmrc", npm_config_init_module: "/home/runner/.npm-init.js", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_402b0c4d-e23e-4711-9388-732035e00d9e", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", npm_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/bin/npm-cli.js", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "push", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_402b0c4d-e23e-4711-9388-732035e00d9e", npm_config_global_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", npm_command: "run-script", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_402b0c4d-e23e-4711-9388-732035e00d9e", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", EDITOR: "vi", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/18222501234825040518", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "18222501234825040518", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_402b0c4d-e23e-4711-9388-732035e00d9e", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "npm/8.19.4 node/v16.20.1 linux x64 workspaces/false ci/github-actions", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_402b0c4d-e23e-4711-9388-732035e00d9e", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", npm_config_noproxy: "", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-8.2", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "", npm_config_userconfig: "/home/runner/.npmrc", npm_config_local_prefix: "/home/runner/work/CodeGear/CodeGear", SYSTEMD_EXEC_PID: "678", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", COLOR: "0", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.5/x64", NVM_DIR: "/home/runner/.nvm", npm_config_metrics_registry: "https://registry.npmjs.org/", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230702.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chrome_driver", JOURNAL_STREAM: "8:17151", GITHUB_WORKFLOW: "CodeGear CI", _: "/opt/hostedtoolcache/node/16.20.1/x64/bin/npm", npm_config_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", GITHUB_RUN_ID: "5536265220", npm_config_cache: "/home/runner/.npm", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "35497761426145bb6e9f18a4e1030e5d22af7b57", GITHUB_BASE_REF: "", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/heads/master", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", npm_config_node_gyp: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.bin:/home/runner/work/CodeGear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_816e03c4-7bc6-4f3d-a9b6-aed218b84bb4", INVOCATION_ID: "2c4e3a187d2941d2bfd96fd34e20618b", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.10/x64", NODE: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "18", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 2", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "master", GITHUB_REPOSITORY: "Gearonix/CodeGear", npm_lifecycle_script: " nx run-many --targets=build --all", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", npm_package_version: "0.0.0", npm_lifecycle_event: "build", NODE_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/bin/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/node_modules", GITHUB_REF_PROTECTED: "false", npm_config_strict_peer_dependencies: "", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "35497761426145bb6e9f18a4e1030e5d22af7b57", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/heads/master", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", npm_config_globalconfig: "/opt/hostedtoolcache/node/16.20.1/x64/etc/npmrc", npm_config_init_module: "/home/runner/.npm-init.js", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_402b0c4d-e23e-4711-9388-732035e00d9e", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", npm_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/bin/npm-cli.js", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "push", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_402b0c4d-e23e-4711-9388-732035e00d9e", npm_config_global_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", npm_command: "run-script", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_402b0c4d-e23e-4711-9388-732035e00d9e", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", EDITOR: "vi", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/18222501234825040518", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "18222501234825040518", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.REACT_APP_SC_DISABLE_SPEEDY !== "" ? { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_402b0c4d-e23e-4711-9388-732035e00d9e", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "npm/8.19.4 node/v16.20.1 linux x64 workspaces/false ci/github-actions", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_402b0c4d-e23e-4711-9388-732035e00d9e", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", npm_config_noproxy: "", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-8.2", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "", npm_config_userconfig: "/home/runner/.npmrc", npm_config_local_prefix: "/home/runner/work/CodeGear/CodeGear", SYSTEMD_EXEC_PID: "678", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", COLOR: "0", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.5/x64", NVM_DIR: "/home/runner/.nvm", npm_config_metrics_registry: "https://registry.npmjs.org/", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230702.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chrome_driver", JOURNAL_STREAM: "8:17151", GITHUB_WORKFLOW: "CodeGear CI", _: "/opt/hostedtoolcache/node/16.20.1/x64/bin/npm", npm_config_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", GITHUB_RUN_ID: "5536265220", npm_config_cache: "/home/runner/.npm", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "35497761426145bb6e9f18a4e1030e5d22af7b57", GITHUB_BASE_REF: "", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/heads/master", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", npm_config_node_gyp: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.bin:/home/runner/work/CodeGear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_816e03c4-7bc6-4f3d-a9b6-aed218b84bb4", INVOCATION_ID: "2c4e3a187d2941d2bfd96fd34e20618b", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.10/x64", NODE: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "18", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 2", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "master", GITHUB_REPOSITORY: "Gearonix/CodeGear", npm_lifecycle_script: " nx run-many --targets=build --all", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", npm_package_version: "0.0.0", npm_lifecycle_event: "build", NODE_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/bin/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/node_modules", GITHUB_REF_PROTECTED: "false", npm_config_strict_peer_dependencies: "", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "35497761426145bb6e9f18a4e1030e5d22af7b57", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/heads/master", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", npm_config_globalconfig: "/opt/hostedtoolcache/node/16.20.1/x64/etc/npmrc", npm_config_init_module: "/home/runner/.npm-init.js", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_402b0c4d-e23e-4711-9388-732035e00d9e", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", npm_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/bin/npm-cli.js", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "push", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_402b0c4d-e23e-4711-9388-732035e00d9e", npm_config_global_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", npm_command: "run-script", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_402b0c4d-e23e-4711-9388-732035e00d9e", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", EDITOR: "vi", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/18222501234825040518", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "18222501234825040518", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.REACT_APP_SC_DISABLE_SPEEDY !== "false" && { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_402b0c4d-e23e-4711-9388-732035e00d9e", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "npm/8.19.4 node/v16.20.1 linux x64 workspaces/false ci/github-actions", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_402b0c4d-e23e-4711-9388-732035e00d9e", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", npm_config_noproxy: "", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-8.2", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "", npm_config_userconfig: "/home/runner/.npmrc", npm_config_local_prefix: "/home/runner/work/CodeGear/CodeGear", SYSTEMD_EXEC_PID: "678", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", COLOR: "0", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.5/x64", NVM_DIR: "/home/runner/.nvm", npm_config_metrics_registry: "https://registry.npmjs.org/", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230702.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chrome_driver", JOURNAL_STREAM: "8:17151", GITHUB_WORKFLOW: "CodeGear CI", _: "/opt/hostedtoolcache/node/16.20.1/x64/bin/npm", npm_config_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", GITHUB_RUN_ID: "5536265220", npm_config_cache: "/home/runner/.npm", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "35497761426145bb6e9f18a4e1030e5d22af7b57", GITHUB_BASE_REF: "", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/heads/master", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", npm_config_node_gyp: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.bin:/home/runner/work/CodeGear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_816e03c4-7bc6-4f3d-a9b6-aed218b84bb4", INVOCATION_ID: "2c4e3a187d2941d2bfd96fd34e20618b", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.10/x64", NODE: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "18", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 2", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "master", GITHUB_REPOSITORY: "Gearonix/CodeGear", npm_lifecycle_script: " nx run-many --targets=build --all", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", npm_package_version: "0.0.0", npm_lifecycle_event: "build", NODE_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/bin/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/node_modules", GITHUB_REF_PROTECTED: "false", npm_config_strict_peer_dependencies: "", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "35497761426145bb6e9f18a4e1030e5d22af7b57", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/heads/master", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", npm_config_globalconfig: "/opt/hostedtoolcache/node/16.20.1/x64/etc/npmrc", npm_config_init_module: "/home/runner/.npm-init.js", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_402b0c4d-e23e-4711-9388-732035e00d9e", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", npm_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/bin/npm-cli.js", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "push", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_402b0c4d-e23e-4711-9388-732035e00d9e", npm_config_global_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", npm_command: "run-script", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_402b0c4d-e23e-4711-9388-732035e00d9e", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", EDITOR: "vi", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/18222501234825040518", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "18222501234825040518", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_402b0c4d-e23e-4711-9388-732035e00d9e", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "npm/8.19.4 node/v16.20.1 linux x64 workspaces/false ci/github-actions", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_402b0c4d-e23e-4711-9388-732035e00d9e", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", npm_config_noproxy: "", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-8.2", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "", npm_config_userconfig: "/home/runner/.npmrc", npm_config_local_prefix: "/home/runner/work/CodeGear/CodeGear", SYSTEMD_EXEC_PID: "678", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", COLOR: "0", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.5/x64", NVM_DIR: "/home/runner/.nvm", npm_config_metrics_registry: "https://registry.npmjs.org/", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230702.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chrome_driver", JOURNAL_STREAM: "8:17151", GITHUB_WORKFLOW: "CodeGear CI", _: "/opt/hostedtoolcache/node/16.20.1/x64/bin/npm", npm_config_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", GITHUB_RUN_ID: "5536265220", npm_config_cache: "/home/runner/.npm", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "35497761426145bb6e9f18a4e1030e5d22af7b57", GITHUB_BASE_REF: "", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/heads/master", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", npm_config_node_gyp: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.bin:/home/runner/work/CodeGear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_816e03c4-7bc6-4f3d-a9b6-aed218b84bb4", INVOCATION_ID: "2c4e3a187d2941d2bfd96fd34e20618b", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.10/x64", NODE: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "18", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 2", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "master", GITHUB_REPOSITORY: "Gearonix/CodeGear", npm_lifecycle_script: " nx run-many --targets=build --all", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", npm_package_version: "0.0.0", npm_lifecycle_event: "build", NODE_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/bin/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/node_modules", GITHUB_REF_PROTECTED: "false", npm_config_strict_peer_dependencies: "", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "35497761426145bb6e9f18a4e1030e5d22af7b57", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/heads/master", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", npm_config_globalconfig: "/opt/hostedtoolcache/node/16.20.1/x64/etc/npmrc", npm_config_init_module: "/home/runner/.npm-init.js", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_402b0c4d-e23e-4711-9388-732035e00d9e", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", npm_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/bin/npm-cli.js", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "push", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_402b0c4d-e23e-4711-9388-732035e00d9e", npm_config_global_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", npm_command: "run-script", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_402b0c4d-e23e-4711-9388-732035e00d9e", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", EDITOR: "vi", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/18222501234825040518", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "18222501234825040518", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.SC_DISABLE_SPEEDY !== void 0 && { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_402b0c4d-e23e-4711-9388-732035e00d9e", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "npm/8.19.4 node/v16.20.1 linux x64 workspaces/false ci/github-actions", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_402b0c4d-e23e-4711-9388-732035e00d9e", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", npm_config_noproxy: "", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-8.2", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "", npm_config_userconfig: "/home/runner/.npmrc", npm_config_local_prefix: "/home/runner/work/CodeGear/CodeGear", SYSTEMD_EXEC_PID: "678", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", COLOR: "0", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.5/x64", NVM_DIR: "/home/runner/.nvm", npm_config_metrics_registry: "https://registry.npmjs.org/", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230702.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chrome_driver", JOURNAL_STREAM: "8:17151", GITHUB_WORKFLOW: "CodeGear CI", _: "/opt/hostedtoolcache/node/16.20.1/x64/bin/npm", npm_config_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", GITHUB_RUN_ID: "5536265220", npm_config_cache: "/home/runner/.npm", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "35497761426145bb6e9f18a4e1030e5d22af7b57", GITHUB_BASE_REF: "", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/heads/master", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", npm_config_node_gyp: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.bin:/home/runner/work/CodeGear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_816e03c4-7bc6-4f3d-a9b6-aed218b84bb4", INVOCATION_ID: "2c4e3a187d2941d2bfd96fd34e20618b", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.10/x64", NODE: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "18", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 2", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "master", GITHUB_REPOSITORY: "Gearonix/CodeGear", npm_lifecycle_script: " nx run-many --targets=build --all", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", npm_package_version: "0.0.0", npm_lifecycle_event: "build", NODE_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/bin/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/node_modules", GITHUB_REF_PROTECTED: "false", npm_config_strict_peer_dependencies: "", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "35497761426145bb6e9f18a4e1030e5d22af7b57", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/heads/master", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", npm_config_globalconfig: "/opt/hostedtoolcache/node/16.20.1/x64/etc/npmrc", npm_config_init_module: "/home/runner/.npm-init.js", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_402b0c4d-e23e-4711-9388-732035e00d9e", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", npm_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/bin/npm-cli.js", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "push", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_402b0c4d-e23e-4711-9388-732035e00d9e", npm_config_global_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", npm_command: "run-script", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_402b0c4d-e23e-4711-9388-732035e00d9e", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", EDITOR: "vi", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/18222501234825040518", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "18222501234825040518", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.SC_DISABLE_SPEEDY !== "" && { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_402b0c4d-e23e-4711-9388-732035e00d9e", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "npm/8.19.4 node/v16.20.1 linux x64 workspaces/false ci/github-actions", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_402b0c4d-e23e-4711-9388-732035e00d9e", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", npm_config_noproxy: "", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-8.2", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "", npm_config_userconfig: "/home/runner/.npmrc", npm_config_local_prefix: "/home/runner/work/CodeGear/CodeGear", SYSTEMD_EXEC_PID: "678", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", COLOR: "0", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.5/x64", NVM_DIR: "/home/runner/.nvm", npm_config_metrics_registry: "https://registry.npmjs.org/", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230702.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chrome_driver", JOURNAL_STREAM: "8:17151", GITHUB_WORKFLOW: "CodeGear CI", _: "/opt/hostedtoolcache/node/16.20.1/x64/bin/npm", npm_config_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", GITHUB_RUN_ID: "5536265220", npm_config_cache: "/home/runner/.npm", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "35497761426145bb6e9f18a4e1030e5d22af7b57", GITHUB_BASE_REF: "", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/heads/master", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", npm_config_node_gyp: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.bin:/home/runner/work/CodeGear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_816e03c4-7bc6-4f3d-a9b6-aed218b84bb4", INVOCATION_ID: "2c4e3a187d2941d2bfd96fd34e20618b", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.10/x64", NODE: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "18", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 2", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "master", GITHUB_REPOSITORY: "Gearonix/CodeGear", npm_lifecycle_script: " nx run-many --targets=build --all", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", npm_package_version: "0.0.0", npm_lifecycle_event: "build", NODE_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/bin/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/node_modules", GITHUB_REF_PROTECTED: "false", npm_config_strict_peer_dependencies: "", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "35497761426145bb6e9f18a4e1030e5d22af7b57", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/heads/master", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", npm_config_globalconfig: "/opt/hostedtoolcache/node/16.20.1/x64/etc/npmrc", npm_config_init_module: "/home/runner/.npm-init.js", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_402b0c4d-e23e-4711-9388-732035e00d9e", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", npm_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/bin/npm-cli.js", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "push", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_402b0c4d-e23e-4711-9388-732035e00d9e", npm_config_global_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", npm_command: "run-script", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_402b0c4d-e23e-4711-9388-732035e00d9e", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", EDITOR: "vi", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/18222501234825040518", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "18222501234825040518", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.SC_DISABLE_SPEEDY !== "false" && { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_402b0c4d-e23e-4711-9388-732035e00d9e", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "npm/8.19.4 node/v16.20.1 linux x64 workspaces/false ci/github-actions", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_402b0c4d-e23e-4711-9388-732035e00d9e", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", npm_config_noproxy: "", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-8.2", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "", npm_config_userconfig: "/home/runner/.npmrc", npm_config_local_prefix: "/home/runner/work/CodeGear/CodeGear", SYSTEMD_EXEC_PID: "678", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", COLOR: "0", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.5/x64", NVM_DIR: "/home/runner/.nvm", npm_config_metrics_registry: "https://registry.npmjs.org/", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230702.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chrome_driver", JOURNAL_STREAM: "8:17151", GITHUB_WORKFLOW: "CodeGear CI", _: "/opt/hostedtoolcache/node/16.20.1/x64/bin/npm", npm_config_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", GITHUB_RUN_ID: "5536265220", npm_config_cache: "/home/runner/.npm", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "35497761426145bb6e9f18a4e1030e5d22af7b57", GITHUB_BASE_REF: "", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/heads/master", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", npm_config_node_gyp: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.bin:/home/runner/work/CodeGear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_816e03c4-7bc6-4f3d-a9b6-aed218b84bb4", INVOCATION_ID: "2c4e3a187d2941d2bfd96fd34e20618b", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.10/x64", NODE: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "18", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 2", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "master", GITHUB_REPOSITORY: "Gearonix/CodeGear", npm_lifecycle_script: " nx run-many --targets=build --all", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", npm_package_version: "0.0.0", npm_lifecycle_event: "build", NODE_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/bin/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/node_modules", GITHUB_REF_PROTECTED: "false", npm_config_strict_peer_dependencies: "", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "35497761426145bb6e9f18a4e1030e5d22af7b57", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/heads/master", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", npm_config_globalconfig: "/opt/hostedtoolcache/node/16.20.1/x64/etc/npmrc", npm_config_init_module: "/home/runner/.npm-init.js", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_402b0c4d-e23e-4711-9388-732035e00d9e", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", npm_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/bin/npm-cli.js", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "push", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_402b0c4d-e23e-4711-9388-732035e00d9e", npm_config_global_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", npm_command: "run-script", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_402b0c4d-e23e-4711-9388-732035e00d9e", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", EDITOR: "vi", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/18222501234825040518", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "18222501234825040518", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.SC_DISABLE_SPEEDY);
function xo(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    t[r - 1] = arguments[r];
  throw new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (t.length > 0 ? " Args: " + t.join(", ") : ""));
}
var YO = function() {
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
        (s <<= 1) < 0 && xo(16, "" + t);
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
}(), bi = /* @__PURE__ */ new Map(), Ki = /* @__PURE__ */ new Map(), Wr = 1, Zo = function(e) {
  if (bi.has(e))
    return bi.get(e);
  for (; Ki.has(Wr); )
    Wr++;
  var n = Wr++;
  return bi.set(e, n), Ki.set(n, e), n;
}, $O = function(e) {
  return Ki.get(e);
}, zO = function(e, n) {
  n >= Wr && (Wr = n + 1), bi.set(e, n), Ki.set(n, e);
}, JO = "style[" + mr + '][data-styled-version="5.3.6"]', qO = new RegExp("^" + mr + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), QO = function(e, n, t) {
  for (var r, o = t.split(","), i = 0, s = o.length; i < s; i++)
    (r = o[i]) && e.registerName(n, r);
}, ZO = function(e, n) {
  for (var t = (n.textContent || "").split(`/*!sc*/
`), r = [], o = 0, i = t.length; o < i; o++) {
    var s = t[o].trim();
    if (s) {
      var a = s.match(qO);
      if (a) {
        var u = 0 | parseInt(a[1], 10), _ = a[2];
        u !== 0 && (zO(_, u), QO(e, _, a[3]), e.getTag().insertRules(u, r)), r.length = 0;
      } else
        r.push(s);
    }
  }
}, e1 = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, dh = function(e) {
  var n = document.head, t = e || n, r = document.createElement("style"), o = function(a) {
    for (var u = a.childNodes, _ = u.length; _ >= 0; _--) {
      var c = u[_];
      if (c && c.nodeType === 1 && c.hasAttribute(mr))
        return c;
    }
  }(t), i = o !== void 0 ? o.nextSibling : null;
  r.setAttribute(mr, "active"), r.setAttribute("data-styled-version", "5.3.6");
  var s = e1();
  return s && r.setAttribute("nonce", s), t.insertBefore(r, i), r;
}, n1 = function() {
  function e(t) {
    var r = this.element = dh(t);
    r.appendChild(document.createTextNode("")), this.sheet = function(o) {
      if (o.sheet)
        return o.sheet;
      for (var i = document.styleSheets, s = 0, a = i.length; s < a; s++) {
        var u = i[s];
        if (u.ownerNode === o)
          return u;
      }
      xo(17);
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
}(), t1 = function() {
  function e(t) {
    var r = this.element = dh(t);
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
}(), r1 = function() {
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
}(), hl = Hu, o1 = { isServer: !Hu, useCSSOMInjection: !KO }, hh = function() {
  function e(t, r, o) {
    t === void 0 && (t = gt), r === void 0 && (r = {}), this.options = Yn({}, o1, {}, t), this.gs = r, this.names = new Map(o), this.server = !!t.isServer, !this.server && Hu && hl && (hl = !1, function(i) {
      for (var s = document.querySelectorAll(JO), a = 0, u = s.length; a < u; a++) {
        var _ = s[a];
        _ && _.getAttribute(mr) !== "active" && (ZO(i, _), _.parentNode && _.parentNode.removeChild(_));
      }
    }(this));
  }
  e.registerId = function(t) {
    return Zo(t);
  };
  var n = e.prototype;
  return n.reconstructWithOptions = function(t, r) {
    return r === void 0 && (r = !0), new e(Yn({}, this.options, {}, t), this.gs, r && this.names || void 0);
  }, n.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, n.getTag = function() {
    return this.tag || (this.tag = (o = (r = this.options).isServer, i = r.useCSSOMInjection, s = r.target, t = o ? new r1(s) : i ? new n1(s) : new t1(s), new YO(t)));
    var t, r, o, i, s;
  }, n.hasNameForId = function(t, r) {
    return this.names.has(t) && this.names.get(t).has(r);
  }, n.registerName = function(t, r) {
    if (Zo(t), this.names.has(t))
      this.names.get(t).add(r);
    else {
      var o = /* @__PURE__ */ new Set();
      o.add(r), this.names.set(t, o);
    }
  }, n.insertRules = function(t, r, o) {
    this.registerName(t, r), this.getTag().insertRules(Zo(t), o);
  }, n.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, n.clearRules = function(t) {
    this.getTag().clearGroup(Zo(t)), this.clearNames(t);
  }, n.clearTag = function() {
    this.tag = void 0;
  }, n.toString = function() {
    return function(t) {
      for (var r = t.getTag(), o = r.length, i = "", s = 0; s < o; s++) {
        var a = $O(s);
        if (a !== void 0) {
          var u = t.names.get(a), _ = r.getGroup(s);
          if (u && _ && u.size) {
            var c = mr + ".g" + s + '[id="' + a + '"]', l = "";
            u !== void 0 && u.forEach(function(f) {
              f.length > 0 && (l += f + ",");
            }), i += "" + _ + c + '{content:"' + l + `"}/*!sc*/
`;
          }
        }
      }
      return i;
    }(this);
  }, e;
}(), i1 = /(a)(d)/gi, ml = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function La(e) {
  var n, t = "";
  for (n = Math.abs(e); n > 52; n = n / 52 | 0)
    t = ml(n % 52) + t;
  return (ml(n % 52) + t).replace(i1, "$1-$2");
}
var qt = function(e, n) {
  for (var t = n.length; t; )
    e = 33 * e ^ n.charCodeAt(--t);
  return e;
}, mh = function(e) {
  return qt(5381, e);
};
function s1(e) {
  for (var n = 0; n < e.length; n += 1) {
    var t = e[n];
    if (ao(t) && !Uu(t))
      return !1;
  }
  return !0;
}
var a1 = mh("5.3.6"), u1 = function() {
  function e(n, t, r) {
    this.rules = n, this.staticRulesId = "", this.isStatic = (r === void 0 || r.isStatic) && s1(n), this.componentId = t, this.baseHash = qt(a1, t), this.baseStyle = r, hh.registerId(t);
  }
  return e.prototype.generateAndInjectStyles = function(n, t, r) {
    var o = this.componentId, i = [];
    if (this.baseStyle && i.push(this.baseStyle.generateAndInjectStyles(n, t, r)), this.isStatic && !r.hash)
      if (this.staticRulesId && t.hasNameForId(o, this.staticRulesId))
        i.push(this.staticRulesId);
      else {
        var s = fr(this.rules, n, t, r).join(""), a = La(qt(this.baseHash, s) >>> 0);
        if (!t.hasNameForId(o, a)) {
          var u = r(s, "." + a, void 0, o);
          t.insertRules(o, a, u);
        }
        i.push(a), this.staticRulesId = a;
      }
    else {
      for (var _ = this.rules.length, c = qt(this.baseHash, r.hash), l = "", f = 0; f < _; f++) {
        var T = this.rules[f];
        if (typeof T == "string")
          l += T;
        else if (T) {
          var d = fr(T, n, t, r), h = Array.isArray(d) ? d.join("") : d;
          c = qt(c, h + f), l += h;
        }
      }
      if (l) {
        var m = La(c >>> 0);
        if (!t.hasNameForId(o, m)) {
          var O = r(l, "." + m, void 0, o);
          t.insertRules(o, m, O);
        }
        i.push(m);
      }
    }
    return i.join(" ");
  }, e;
}(), _1 = /^\s*\/\/.*$/gm, l1 = [":", "[", ".", "#"];
function c1(e) {
  var n, t, r, o, i = e === void 0 ? gt : e, s = i.options, a = s === void 0 ? gt : s, u = i.plugins, _ = u === void 0 ? Xi : u, c = new yO(a), l = [], f = function(h) {
    function m(O) {
      if (O)
        try {
          h(O + "}");
        } catch {
        }
    }
    return function(O, R, N, A, p, w, k, Y, M, j) {
      switch (O) {
        case 1:
          if (M === 0 && R.charCodeAt(0) === 64)
            return h(R + ";"), "";
          break;
        case 2:
          if (Y === 0)
            return R + "/*|*/";
          break;
        case 3:
          switch (Y) {
            case 102:
            case 112:
              return h(N[0] + R), "";
            default:
              return R + (j === 0 ? "/*|*/" : "");
          }
        case -2:
          R.split("/*|*/}").forEach(m);
      }
    };
  }(function(h) {
    l.push(h);
  }), T = function(h, m, O) {
    return m === 0 && l1.indexOf(O[t.length]) !== -1 || O.match(o) ? h : "." + n;
  };
  function d(h, m, O, R) {
    R === void 0 && (R = "&");
    var N = h.replace(_1, ""), A = m && O ? O + " " + m + " { " + N + " }" : N;
    return n = R, t = m, r = new RegExp("\\" + t + "\\b", "g"), o = new RegExp("(\\" + t + "\\b){2,}"), c(O || !m ? "" : m, A);
  }
  return c.use([].concat(_, [function(h, m, O) {
    h === 2 && O.length && O[0].lastIndexOf(t) > 0 && (O[0] = O[0].replace(r, T));
  }, f, function(h) {
    if (h === -2) {
      var m = l;
      return l = [], m;
    }
  }])), d.hash = _.length ? _.reduce(function(h, m) {
    return m.name || xo(15), qt(h, m.name);
  }, 5381).toString() : "", d;
}
var fh = ve.createContext();
fh.Consumer;
var ph = ve.createContext(), d1 = (ph.Consumer, new hh()), Ba = c1();
function h1() {
  return tn(fh) || d1;
}
function m1() {
  return tn(ph) || Ba;
}
var f1 = function() {
  function e(n, t) {
    var r = this;
    this.inject = function(o, i) {
      i === void 0 && (i = Ba);
      var s = r.name + i.hash;
      o.hasNameForId(r.id, s) || o.insertRules(r.id, s, i(r.rules, s, "@keyframes"));
    }, this.toString = function() {
      return xo(12, String(r.name));
    }, this.name = n, this.id = "sc-keyframes-" + n, this.rules = t;
  }
  return e.prototype.getName = function(n) {
    return n === void 0 && (n = Ba), this.name + n.hash;
  }, e;
}(), p1 = /([A-Z])/, T1 = /([A-Z])/g, E1 = /^ms-/, O1 = function(e) {
  return "-" + e.toLowerCase();
};
function fl(e) {
  return p1.test(e) ? e.replace(T1, O1).replace(E1, "-ms-") : e;
}
var pl = function(e) {
  return e == null || e === !1 || e === "";
};
function fr(e, n, t, r) {
  if (Array.isArray(e)) {
    for (var o, i = [], s = 0, a = e.length; s < a; s += 1)
      (o = fr(e[s], n, t, r)) !== "" && (Array.isArray(o) ? i.push.apply(i, o) : i.push(o));
    return i;
  }
  if (pl(e))
    return "";
  if (Uu(e))
    return "." + e.styledComponentId;
  if (ao(e)) {
    if (typeof (_ = e) != "function" || _.prototype && _.prototype.isReactComponent || !n)
      return e;
    var u = e(n);
    return fr(u, n, t, r);
  }
  var _;
  return e instanceof f1 ? t ? (e.inject(t, r), e.getName(r)) : e : xa(e) ? function c(l, f) {
    var T, d, h = [];
    for (var m in l)
      l.hasOwnProperty(m) && !pl(l[m]) && (Array.isArray(l[m]) && l[m].isCss || ao(l[m]) ? h.push(fl(m) + ":", l[m], ";") : xa(l[m]) ? h.push.apply(h, c(l[m], m)) : h.push(fl(m) + ": " + (T = m, (d = l[m]) == null || typeof d == "boolean" || d === "" ? "" : typeof d != "number" || d === 0 || T in UO ? String(d).trim() : d + "px") + ";"));
    return f ? [f + " {"].concat(h, ["}"]) : h;
  }(e) : e.toString();
}
var Tl = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function Cn(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    t[r - 1] = arguments[r];
  return ao(e) || xa(e) ? Tl(fr(cl(Xi, [e].concat(t)))) : t.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : Tl(fr(cl(e, t)));
}
var R1 = function(e, n, t) {
  return t === void 0 && (t = gt), e.theme !== t.theme && e.theme || n || t.theme;
}, b1 = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, g1 = /(^-|-$)/g;
function ra(e) {
  return e.replace(b1, "-").replace(g1, "");
}
var N1 = function(e) {
  return La(mh(e) >>> 0);
};
function ei(e) {
  return typeof e == "string" && !0;
}
var ja = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, I1 = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function A1(e, n, t) {
  var r = e[t];
  ja(n) && ja(r) ? Th(r, n) : e[t] = n;
}
function Th(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    t[r - 1] = arguments[r];
  for (var o = 0, i = t; o < i.length; o++) {
    var s = i[o];
    if (ja(s))
      for (var a in s)
        I1(a) && A1(e, s[a], a);
  }
  return e;
}
var Eh = ve.createContext();
Eh.Consumer;
var oa = {};
function Oh(e, n, t) {
  var r = Uu(e), o = !ei(e), i = n.attrs, s = i === void 0 ? Xi : i, a = n.componentId, u = a === void 0 ? function(R, N) {
    var A = typeof R != "string" ? "sc" : ra(R);
    oa[A] = (oa[A] || 0) + 1;
    var p = A + "-" + N1("5.3.6" + A + oa[A]);
    return N ? N + "-" + p : p;
  }(n.displayName, n.parentComponentId) : a, _ = n.displayName, c = _ === void 0 ? function(R) {
    return ei(R) ? "styled." + R : "Styled(" + dl(R) + ")";
  }(e) : _, l = n.displayName && n.componentId ? ra(n.displayName) + "-" + n.componentId : n.componentId || u, f = r && e.attrs ? Array.prototype.concat(e.attrs, s).filter(Boolean) : s, T = n.shouldForwardProp;
  r && e.shouldForwardProp && (T = n.shouldForwardProp ? function(R, N, A) {
    return e.shouldForwardProp(R, N, A) && n.shouldForwardProp(R, N, A);
  } : e.shouldForwardProp);
  var d, h = new u1(t, l, r ? e.componentStyle : void 0), m = h.isStatic && s.length === 0, O = function(R, N) {
    return function(A, p, w, k) {
      var Y = A.attrs, M = A.componentStyle, j = A.defaultProps, Oe = A.foldedComponentIds, pe = A.shouldForwardProp, Ne = A.styledComponentId, x = A.target, C = function(F, E, J) {
        F === void 0 && (F = gt);
        var G = Yn({}, E, { theme: F }), ce = {};
        return J.forEach(function(te) {
          var fe, $, Pe, Je = te;
          for (fe in ao(Je) && (Je = Je(G)), Je)
            G[fe] = ce[fe] = fe === "className" ? ($ = ce[fe], Pe = Je[fe], $ && Pe ? $ + " " + Pe : $ || Pe) : Je[fe];
        }), [G, ce];
      }(R1(p, tn(Eh), j) || gt, p, Y), q = C[0], le = C[1], ne = function(F, E, J, G) {
        var ce = h1(), te = m1(), fe = E ? F.generateAndInjectStyles(gt, ce, te) : F.generateAndInjectStyles(J, ce, te);
        return fe;
      }(M, k, q), Ge = w, we = le.$as || p.$as || le.as || p.as || x, Ie = ei(we), D = le !== p ? Yn({}, p, {}, le) : p, U = {};
      for (var P in D)
        P[0] !== "$" && P !== "as" && (P === "forwardedAs" ? U.as = D[P] : (pe ? pe(P, sl, we) : !Ie || sl(P)) && (U[P] = D[P]));
      return p.style && le.style !== p.style && (U.style = Yn({}, p.style, {}, le.style)), U.className = Array.prototype.concat(Oe, Ne, ne !== Ne ? ne : null, p.className, le.className).filter(Boolean).join(" "), U.ref = Ge, Rf(we, U);
    }(d, R, N, m);
  };
  return O.displayName = c, (d = ve.forwardRef(O)).attrs = f, d.componentStyle = h, d.displayName = c, d.shouldForwardProp = T, d.foldedComponentIds = r ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : Xi, d.styledComponentId = l, d.target = r ? e.target : e, d.withComponent = function(R) {
    var N = n.componentId, A = function(w, k) {
      if (w == null)
        return {};
      var Y, M, j = {}, Oe = Object.keys(w);
      for (M = 0; M < Oe.length; M++)
        Y = Oe[M], k.indexOf(Y) >= 0 || (j[Y] = w[Y]);
      return j;
    }(n, ["componentId"]), p = N && N + "-" + (ei(R) ? R : ra(dl(R)));
    return Oh(R, Yn({}, A, { attrs: f, componentId: p }), t);
  }, Object.defineProperty(d, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(R) {
    this._foldedDefaultProps = r ? Th({}, e.defaultProps, R) : R;
  } }), d.toString = function() {
    return "." + d.styledComponentId;
  }, o && XO(d, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), d;
}
var Fa = function(e) {
  return function n(t, r, o) {
    if (o === void 0 && (o = gt), !uh.isValidElementType(r))
      return xo(1, String(r));
    var i = function() {
      return t(r, o, Cn.apply(void 0, arguments));
    };
    return i.withConfig = function(s) {
      return n(t, r, Yn({}, o, {}, s));
    }, i.attrs = function(s) {
      return n(t, r, Yn({}, o, { attrs: Array.prototype.concat(o.attrs, s).filter(Boolean) }));
    }, i;
  }(Oh, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  Fa[e] = Fa(e);
});
const Ee = Fa, Fe = (e = "100%", n = e) => Cn`
  width: ${e};
  height: ${n};
`;
Cn`
  border: 1px solid red;
`;
const S1 = (e) => Cn`
  padding-left: ${e}px;
  padding-right: ${e}px;
`, yt = (e = "flex-start", n = "stretch", t = "row") => Cn`
  display: flex;
  justify-content: ${e};
  align-items: ${n};
  flex-direction: ${t};
`, Va = (e) => Cn`
  transition: color 200ms;
  &:hover {
    color: ${e}
  }
`, gi = (e) => ({ theme: n }) => `${n[e]} !important;`, Rh = (e = "&") => Cn`
  ${e}::-webkit-scrollbar {
    width: 10px;
  }

  ${e}::-webkit-scrollbar-track {
    background-color: ${({ theme: n }) => n.lightGrey};
  }

  ${e}::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
`, Ve = (e) => Cn`
  ${({ theme: n }) => n[e]}
`, bh = (e) => Cn`
  position: absolute;
  ${Object.entries(e).map(([n, t]) => `${n}: ${t};`).join(`
`)}
`, G1 = (e, n) => Cn`
  margin-left: ${e}px;
  margin-top: ${n}px;
`, v1 = Cn`
  -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
`, C1 = "1px solid", D1 = Ee.div`
  ${yt("center", "center")};
  ${bh({
  left: "0",
  top: "0"
})}
  ${Fe("100vw", "100vh")};
  background: rgba(0, 0, 0, 0.44);
  z-index: 100;
`, y1 = Ee.div`
  display: grid;
  position: relative;
  ${Fe("50vw", "60vh")};
  background: ${Ve("grey")};
  border: 2px solid ${Ve("lightGrey")};
  min-height: 300px;
  border-radius: 6px;
  cursor: grab;
  ${v1};
  touch-action: none;
  overflow-y: auto;
  scroll-behavior: smooth;
  ${Rh()};
`, U1 = Ee.div`
  margin: 0 auto;
  margin-top: 18px;
  ${Fe("60%", "100%")}
  & > * {
    cursor: initial;
    color: ${Ve("light")};
  }
`, H1 = ({ onClose: e, isOpen: n, children: t }) => {
  const { Spring: r, Gesture: o } = gr(), { opacity: i, transform: s } = vO(), a = r.useTransition(n, {
    from: i.from(),
    enter: i.to(),
    leave: i.from(),
    config: r.config.stiff
  }), u = r.useSpring({
    from: s.from(),
    to: s.to(n),
    config: r.config.wobbly
  }), [_, c] = r.useSpring(() => ({
    y: 0,
    x: 0,
    scale: 1
  })), { y: l, x: f, scale: T } = _, d = o.useDrag(
    ({ offset: [m, O], down: R }) => {
      c.start({ y: R ? O : 0, immediate: !1, x: R ? m : 0, scale: R ? 1.07 : 1 });
    },
    { from: () => [0, 0], filterTaps: !0, rubberband: !0, delay: 200 }
  ), h = (m) => {
    m.stopPropagation();
  };
  return /* @__PURE__ */ b(bo, { children: a(
    (m, O) => /* @__PURE__ */ b(so, { when: O, children: /* @__PURE__ */ b(sh, { children: /* @__PURE__ */ b(
      D1,
      {
        style: m,
        onClick: e,
        as: r.a.div,
        children: /* @__PURE__ */ b(
          y1,
          {
            style: { ...u, x: f, y: l, scale: T },
            ...d(),
            onClick: h,
            as: r.a.div,
            children: /* @__PURE__ */ b(
              Nf,
              {
                damping: 0.05,
                syncCallbacks: !0,
                alwaysShowTracks: !0,
                children: /* @__PURE__ */ b(U1, { children: t })
              }
            )
          }
        )
      }
    ) }) })
  ) });
}, w1 = (e) => /* @__PURE__ */ b(ko, { children: /* @__PURE__ */ b(H1, { ...e }) }), El = (e) => {
  const { theme: n } = vn(), t = pn();
  return Vd((r, o) => (n !== Li && t.changeTheme(Li), e(o)), 300);
}, P1 = fn(() => {
  const e = pn(), { tabSize: n } = vn();
  return /* @__PURE__ */ b(
    ss,
    {
      size: "middle",
      onChange: (r) => {
        e.changeTabSize(r);
      },
      value: n,
      style: { width: 200 },
      options: GT.map((r) => ({
        value: r,
        label: r
      }))
    }
  );
}), gh = fn(() => {
  const e = pn(), { theme: n } = vn();
  return /* @__PURE__ */ b(
    ss,
    {
      size: "middle",
      defaultValue: "vs-dark",
      onChange: (r) => {
        e.changeTheme(r);
      },
      value: n,
      style: { width: 200 },
      options: Ca.map((r) => ({
        value: r,
        label: r
      }))
    }
  );
}), ct = Ee.div`
  ${Fe("100%", "70px")};
  ${yt("space-between", "flex-start")};
  margin-bottom: 25px;
`, M1 = Ee(ct)`
  height: 45px;
  width: 60%;
  margin: 0 auto;
  margin-bottom: 10px;
  gap: 30px;
`, dt = Ee.div`
  margin-top: -5px;
  height: 100%;
  h4 {
    color: ${Ve("light")};
    font-size: ${({ theme: e }) => e.fz8};
  }
  p {
    color: ${Ve("secondaryGrey")};
    font-size: ${({ theme: e }) => e.fz5};
    margin-top: 10px;
  }

`, ia = Ee.div`
  background: ${Ve("lightGrey")};
  ${Fe("100%", "2px")};
  margin-bottom: 30px;
  margin-top: -8px;
`, Ol = Ee.h1`
  text-align: center;
  padding-bottom: 18px;
  margin-bottom: 30px;
  font-size: ${({ theme: e }) => e.fz10};
  border-bottom: ${C1} ${Ve("lightGrey")};
`, Ut = ({ keyCode: e, children: n, experimental: t }) => /* @__PURE__ */ Z(M1, { children: [
  /* @__PURE__ */ Z(Tf.Text, { keyboard: !0, children: [
    t && "🧪",
    " Alt + ",
    e
  ] }),
  /* @__PURE__ */ b(dt, { style: { justifyContent: "space-around" }, children: /* @__PURE__ */ b("p", { children: n }) })
] }), k1 = () => /* @__PURE__ */ Z(bo, { children: [
  /* @__PURE__ */ b(Ut, { keyCode: Ke.O, experimental: !0, children: "Open a file on your OS" }),
  /* @__PURE__ */ b(Ut, { keyCode: Ke.S, experimental: !0, children: "Save a file on your OS" }),
  /* @__PURE__ */ b(Ut, { keyCode: Ke.N, children: "Open new tab" }),
  /* @__PURE__ */ b(Ut, { keyCode: Ke.T, children: "Close current tab" }),
  /* @__PURE__ */ b(Ut, { keyCode: Ke.P, children: "Open/close terminal" }),
  /* @__PURE__ */ b(Ut, { keyCode: Ke.J, children: "Open/close test cases" }),
  /* @__PURE__ */ b(Ut, { keyCode: Ke.Q, children: "Open/close settings" })
] }), x1 = fn(() => {
  const e = Dt(), n = e.state.isSettingsOpened, t = pn(), { customBackground: r, customColor: o } = vn(), i = () => {
    e.update({
      isSettingsOpened: !1
    });
  }, s = El((_) => {
    t.changeCustomBackground(_);
  }), a = El((_) => {
    t.changeCustomColor(_);
  });
  return /* @__PURE__ */ Z(w1, { isOpen: n, onClose: i, children: [
    /* @__PURE__ */ b(Ol, { children: "Editor settings" }),
    /* @__PURE__ */ Z(ct, { children: [
      /* @__PURE__ */ Z(dt, { children: [
        /* @__PURE__ */ b("h4", { children: "Editor  Theme" }),
        /* @__PURE__ */ b("p", { children: "Choose the code editor theme" })
      ] }),
      /* @__PURE__ */ b(gh, {})
    ] }),
    /* @__PURE__ */ Z(ct, { children: [
      /* @__PURE__ */ Z(dt, { children: [
        /* @__PURE__ */ b("h4", { children: "Font Size" }),
        /* @__PURE__ */ b("p", { children: "Choose your preferred font size" })
      ] }),
      /* @__PURE__ */ b(yT, {})
    ] }),
    /* @__PURE__ */ Z(ct, { children: [
      /* @__PURE__ */ Z(dt, { children: [
        /* @__PURE__ */ b("h4", { children: "Current Tab Language" }),
        /* @__PURE__ */ b("p", { children: "Choose the code editor language (js, py, css)" })
      ] }),
      /* @__PURE__ */ b(Rd, {})
    ] }),
    /* @__PURE__ */ Z(ct, { children: [
      /* @__PURE__ */ Z(dt, { children: [
        /* @__PURE__ */ b("h4", { children: "Tab size" }),
        /* @__PURE__ */ b("p", { children: "Choose the width of a tab character" })
      ] }),
      /* @__PURE__ */ b(P1, {})
    ] }),
    /* @__PURE__ */ b(ia, {}),
    /* @__PURE__ */ Z(ct, { children: [
      /* @__PURE__ */ Z(dt, { children: [
        /* @__PURE__ */ b("h4", { children: "Custom Editor Background" }),
        /* @__PURE__ */ b("p", { children: "Change custom background for code editor" })
      ] }),
      /* @__PURE__ */ b(
        T_,
        {
          onChange: s,
          value: r,
          showText: !0,
          size: "large"
        }
      )
    ] }),
    /* @__PURE__ */ Z(ct, { children: [
      /* @__PURE__ */ Z(dt, { children: [
        /* @__PURE__ */ b("h4", { children: "Custom Editor Color" }),
        /* @__PURE__ */ b("p", { children: "Change custom color for code editor" })
      ] }),
      /* @__PURE__ */ b(
        T_,
        {
          onChange: a,
          value: o,
          showText: !0,
          size: "large"
        }
      )
    ] }),
    /* @__PURE__ */ b(ia, {}),
    /* @__PURE__ */ Z(ct, { children: [
      /* @__PURE__ */ Z(dt, { children: [
        /* @__PURE__ */ b("h4", { children: "Save editor settings to Local Storage" }),
        /* @__PURE__ */ b("p", { children: "All your next changes will be stored in localStorage" })
      ] }),
      /* @__PURE__ */ b(
        Ef,
        {
          defaultChecked: !0,
          onChange: (_) => {
            t.setIsLocalStorageDisabled(!_);
          },
          style: { marginRight: 15, marginTop: 0 }
        }
      )
    ] }),
    /* @__PURE__ */ b(Ol, { children: "Key buildings" }),
    /* @__PURE__ */ b(k1, {}),
    /* @__PURE__ */ b(ia, {})
  ] });
});
function L1(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
//! moment.js
//! version : 2.29.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var Nh;
function y() {
  return Nh.apply(null, arguments);
}
function B1(e) {
  Nh = e;
}
function Sn(e) {
  return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]";
}
function kt(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Object]";
}
function ue(e, n) {
  return Object.prototype.hasOwnProperty.call(e, n);
}
function wu(e) {
  if (Object.getOwnPropertyNames)
    return Object.getOwnPropertyNames(e).length === 0;
  var n;
  for (n in e)
    if (ue(e, n))
      return !1;
  return !0;
}
function qe(e) {
  return e === void 0;
}
function tt(e) {
  return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]";
}
function Lo(e) {
  return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
}
function Ih(e, n) {
  var t = [], r, o = e.length;
  for (r = 0; r < o; ++r)
    t.push(n(e[r], r));
  return t;
}
function Tt(e, n) {
  for (var t in n)
    ue(n, t) && (e[t] = n[t]);
  return ue(n, "toString") && (e.toString = n.toString), ue(n, "valueOf") && (e.valueOf = n.valueOf), e;
}
function jn(e, n, t, r) {
  return $h(e, n, t, r, !0).utc();
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
function z(e) {
  return e._pf == null && (e._pf = j1()), e._pf;
}
var Wa;
Array.prototype.some ? Wa = Array.prototype.some : Wa = function(e) {
  var n = Object(this), t = n.length >>> 0, r;
  for (r = 0; r < t; r++)
    if (r in n && e.call(this, n[r], r, n))
      return !0;
  return !1;
};
function Pu(e) {
  if (e._isValid == null) {
    var n = z(e), t = Wa.call(n.parsedDateParts, function(o) {
      return o != null;
    }), r = !isNaN(e._d.getTime()) && n.overflow < 0 && !n.empty && !n.invalidEra && !n.invalidMonth && !n.invalidWeekday && !n.weekdayMismatch && !n.nullInput && !n.invalidFormat && !n.userInvalidated && (!n.meridiem || n.meridiem && t);
    if (e._strict && (r = r && n.charsLeftOver === 0 && n.unusedTokens.length === 0 && n.bigHour === void 0), Object.isFrozen == null || !Object.isFrozen(e))
      e._isValid = r;
    else
      return r;
  }
  return e._isValid;
}
function Os(e) {
  var n = jn(NaN);
  return e != null ? Tt(z(n), e) : z(n).userInvalidated = !0, n;
}
var Rl = y.momentProperties = [], sa = !1;
function Mu(e, n) {
  var t, r, o, i = Rl.length;
  if (qe(n._isAMomentObject) || (e._isAMomentObject = n._isAMomentObject), qe(n._i) || (e._i = n._i), qe(n._f) || (e._f = n._f), qe(n._l) || (e._l = n._l), qe(n._strict) || (e._strict = n._strict), qe(n._tzm) || (e._tzm = n._tzm), qe(n._isUTC) || (e._isUTC = n._isUTC), qe(n._offset) || (e._offset = n._offset), qe(n._pf) || (e._pf = z(n)), qe(n._locale) || (e._locale = n._locale), i > 0)
    for (t = 0; t < i; t++)
      r = Rl[t], o = n[r], qe(o) || (e[r] = o);
  return e;
}
function Bo(e) {
  Mu(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = /* @__PURE__ */ new Date(NaN)), sa === !1 && (sa = !0, y.updateOffset(this), sa = !1);
}
function Gn(e) {
  return e instanceof Bo || e != null && e._isAMomentObject != null;
}
function Ah(e) {
  y.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + e);
}
function Tn(e, n) {
  var t = !0;
  return Tt(function() {
    if (y.deprecationHandler != null && y.deprecationHandler(null, e), t) {
      var r = [], o, i, s, a = arguments.length;
      for (i = 0; i < a; i++) {
        if (o = "", typeof arguments[i] == "object") {
          o += `
[` + i + "] ";
          for (s in arguments[0])
            ue(arguments[0], s) && (o += s + ": " + arguments[0][s] + ", ");
          o = o.slice(0, -2);
        } else
          o = arguments[i];
        r.push(o);
      }
      Ah(
        e + `
Arguments: ` + Array.prototype.slice.call(r).join("") + `
` + new Error().stack
      ), t = !1;
    }
    return n.apply(this, arguments);
  }, n);
}
var bl = {};
function Sh(e, n) {
  y.deprecationHandler != null && y.deprecationHandler(e, n), bl[e] || (Ah(n), bl[e] = !0);
}
y.suppressDeprecationWarnings = !1;
y.deprecationHandler = null;
function Fn(e) {
  return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
}
function F1(e) {
  var n, t;
  for (t in e)
    ue(e, t) && (n = e[t], Fn(n) ? this[t] = n : this["_" + t] = n);
  this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp(
    (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
  );
}
function Xa(e, n) {
  var t = Tt({}, e), r;
  for (r in n)
    ue(n, r) && (kt(e[r]) && kt(n[r]) ? (t[r] = {}, Tt(t[r], e[r]), Tt(t[r], n[r])) : n[r] != null ? t[r] = n[r] : delete t[r]);
  for (r in e)
    ue(e, r) && !ue(n, r) && kt(e[r]) && (t[r] = Tt({}, t[r]));
  return t;
}
function ku(e) {
  e != null && this.set(e);
}
var Ka;
Object.keys ? Ka = Object.keys : Ka = function(e) {
  var n, t = [];
  for (n in e)
    ue(e, n) && t.push(n);
  return t;
};
var V1 = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function W1(e, n, t) {
  var r = this._calendar[e] || this._calendar.sameElse;
  return Fn(r) ? r.call(n, t) : r;
}
function xn(e, n, t) {
  var r = "" + Math.abs(e), o = n - r.length, i = e >= 0;
  return (i ? t ? "+" : "" : "-") + Math.pow(10, Math.max(0, o)).toString().substr(1) + r;
}
var xu = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, ni = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, aa = {}, er = {};
function L(e, n, t, r) {
  var o = r;
  typeof r == "string" && (o = function() {
    return this[r]();
  }), e && (er[e] = o), n && (er[n[0]] = function() {
    return xn(o.apply(this, arguments), n[1], n[2]);
  }), t && (er[t] = function() {
    return this.localeData().ordinal(
      o.apply(this, arguments),
      e
    );
  });
}
function X1(e) {
  return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
}
function K1(e) {
  var n = e.match(xu), t, r;
  for (t = 0, r = n.length; t < r; t++)
    er[n[t]] ? n[t] = er[n[t]] : n[t] = X1(n[t]);
  return function(o) {
    var i = "", s;
    for (s = 0; s < r; s++)
      i += Fn(n[s]) ? n[s].call(o, e) : n[s];
    return i;
  };
}
function Ni(e, n) {
  return e.isValid() ? (n = Gh(n, e.localeData()), aa[n] = aa[n] || K1(n), aa[n](e)) : e.localeData().invalidDate();
}
function Gh(e, n) {
  var t = 5;
  function r(o) {
    return n.longDateFormat(o) || o;
  }
  for (ni.lastIndex = 0; t >= 0 && ni.test(e); )
    e = e.replace(
      ni,
      r
    ), ni.lastIndex = 0, t -= 1;
  return e;
}
var Y1 = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function $1(e) {
  var n = this._longDateFormat[e], t = this._longDateFormat[e.toUpperCase()];
  return n || !t ? n : (this._longDateFormat[e] = t.match(xu).map(function(r) {
    return r === "MMMM" || r === "MM" || r === "DD" || r === "dddd" ? r.slice(1) : r;
  }).join(""), this._longDateFormat[e]);
}
var z1 = "Invalid date";
function J1() {
  return this._invalidDate;
}
var q1 = "%d", Q1 = /\d{1,2}/;
function Z1(e) {
  return this._ordinal.replace("%d", e);
}
var e0 = {
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
function n0(e, n, t, r) {
  var o = this._relativeTime[t];
  return Fn(o) ? o(e, n, t, r) : o.replace(/%d/i, e);
}
function t0(e, n) {
  var t = this._relativeTime[e > 0 ? "future" : "past"];
  return Fn(t) ? t(n) : t.replace(/%s/i, n);
}
var Xr = {};
function We(e, n) {
  var t = e.toLowerCase();
  Xr[t] = Xr[t + "s"] = Xr[n] = e;
}
function En(e) {
  return typeof e == "string" ? Xr[e] || Xr[e.toLowerCase()] : void 0;
}
function Lu(e) {
  var n = {}, t, r;
  for (r in e)
    ue(e, r) && (t = En(r), t && (n[t] = e[r]));
  return n;
}
var vh = {};
function Xe(e, n) {
  vh[e] = n;
}
function r0(e) {
  var n = [], t;
  for (t in e)
    ue(e, t) && n.push({ unit: t, priority: vh[t] });
  return n.sort(function(r, o) {
    return r.priority - o.priority;
  }), n;
}
function Rs(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
}
function un(e) {
  return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
}
function Q(e) {
  var n = +e, t = 0;
  return n !== 0 && isFinite(n) && (t = un(n)), t;
}
function Nr(e, n) {
  return function(t) {
    return t != null ? (Ch(this, e, t), y.updateOffset(this, n), this) : Yi(this, e);
  };
}
function Yi(e, n) {
  return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + n]() : NaN;
}
function Ch(e, n, t) {
  e.isValid() && !isNaN(t) && (n === "FullYear" && Rs(e.year()) && e.month() === 1 && e.date() === 29 ? (t = Q(t), e._d["set" + (e._isUTC ? "UTC" : "") + n](
    t,
    e.month(),
    Ss(t, e.month())
  )) : e._d["set" + (e._isUTC ? "UTC" : "") + n](t));
}
function o0(e) {
  return e = En(e), Fn(this[e]) ? this[e]() : this;
}
function i0(e, n) {
  if (typeof e == "object") {
    e = Lu(e);
    var t = r0(e), r, o = t.length;
    for (r = 0; r < o; r++)
      this[t[r].unit](e[t[r].unit]);
  } else if (e = En(e), Fn(this[e]))
    return this[e](n);
  return this;
}
var Dh = /\d/, an = /\d\d/, yh = /\d{3}/, Bu = /\d{4}/, bs = /[+-]?\d{6}/, be = /\d\d?/, Uh = /\d\d\d\d?/, Hh = /\d\d\d\d\d\d?/, gs = /\d{1,3}/, ju = /\d{1,4}/, Ns = /[+-]?\d{1,6}/, Ir = /\d+/, Is = /[+-]?\d+/, s0 = /Z|[+-]\d\d:?\d\d/gi, As = /Z|[+-]\d\d(?::?\d\d)?/gi, a0 = /[+-]?\d+(\.\d{1,3})?/, jo = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, $i;
$i = {};
function H(e, n, t) {
  $i[e] = Fn(n) ? n : function(r, o) {
    return r && t ? t : n;
  };
}
function u0(e, n) {
  return ue($i, e) ? $i[e](n._strict, n._locale) : new RegExp(_0(e));
}
function _0(e) {
  return on(
    e.replace("\\", "").replace(
      /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
      function(n, t, r, o, i) {
        return t || r || o || i;
      }
    )
  );
}
function on(e) {
  return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
var Ya = {};
function Te(e, n) {
  var t, r = n, o;
  for (typeof e == "string" && (e = [e]), tt(n) && (r = function(i, s) {
    s[n] = Q(i);
  }), o = e.length, t = 0; t < o; t++)
    Ya[e[t]] = r;
}
function Fo(e, n) {
  Te(e, function(t, r, o, i) {
    o._w = o._w || {}, n(t, o._w, o, i);
  });
}
function l0(e, n, t) {
  n != null && ue(Ya, e) && Ya[e](n, t._a, t, e);
}
var je = 0, $n = 1, Un = 2, ye = 3, bn = 4, zn = 5, Pt = 6, c0 = 7, d0 = 8;
function h0(e, n) {
  return (e % n + n) % n;
}
var De;
Array.prototype.indexOf ? De = Array.prototype.indexOf : De = function(e) {
  var n;
  for (n = 0; n < this.length; ++n)
    if (this[n] === e)
      return n;
  return -1;
};
function Ss(e, n) {
  if (isNaN(e) || isNaN(n))
    return NaN;
  var t = h0(n, 12);
  return e += (n - t) / 12, t === 1 ? Rs(e) ? 29 : 28 : 31 - t % 7 % 2;
}
L("M", ["MM", 2], "Mo", function() {
  return this.month() + 1;
});
L("MMM", 0, 0, function(e) {
  return this.localeData().monthsShort(this, e);
});
L("MMMM", 0, 0, function(e) {
  return this.localeData().months(this, e);
});
We("month", "M");
Xe("month", 8);
H("M", be);
H("MM", be, an);
H("MMM", function(e, n) {
  return n.monthsShortRegex(e);
});
H("MMMM", function(e, n) {
  return n.monthsRegex(e);
});
Te(["M", "MM"], function(e, n) {
  n[$n] = Q(e) - 1;
});
Te(["MMM", "MMMM"], function(e, n, t, r) {
  var o = t._locale.monthsParse(e, r, t._strict);
  o != null ? n[$n] = o : z(t).invalidMonth = e;
});
var m0 = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), wh = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), Ph = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, f0 = jo, p0 = jo;
function T0(e, n) {
  return e ? Sn(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || Ph).test(n) ? "format" : "standalone"][e.month()] : Sn(this._months) ? this._months : this._months.standalone;
}
function E0(e, n) {
  return e ? Sn(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Ph.test(n) ? "format" : "standalone"][e.month()] : Sn(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function O0(e, n, t) {
  var r, o, i, s = e.toLocaleLowerCase();
  if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], r = 0; r < 12; ++r)
      i = jn([2e3, r]), this._shortMonthsParse[r] = this.monthsShort(
        i,
        ""
      ).toLocaleLowerCase(), this._longMonthsParse[r] = this.months(i, "").toLocaleLowerCase();
  return t ? n === "MMM" ? (o = De.call(this._shortMonthsParse, s), o !== -1 ? o : null) : (o = De.call(this._longMonthsParse, s), o !== -1 ? o : null) : n === "MMM" ? (o = De.call(this._shortMonthsParse, s), o !== -1 ? o : (o = De.call(this._longMonthsParse, s), o !== -1 ? o : null)) : (o = De.call(this._longMonthsParse, s), o !== -1 ? o : (o = De.call(this._shortMonthsParse, s), o !== -1 ? o : null));
}
function R0(e, n, t) {
  var r, o, i;
  if (this._monthsParseExact)
    return O0.call(this, e, n, t);
  for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), r = 0; r < 12; r++) {
    if (o = jn([2e3, r]), t && !this._longMonthsParse[r] && (this._longMonthsParse[r] = new RegExp(
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
function Mh(e, n) {
  var t;
  if (!e.isValid())
    return e;
  if (typeof n == "string") {
    if (/^\d+$/.test(n))
      n = Q(n);
    else if (n = e.localeData().monthsParse(n), !tt(n))
      return e;
  }
  return t = Math.min(e.date(), Ss(e.year(), n)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](n, t), e;
}
function kh(e) {
  return e != null ? (Mh(this, e), y.updateOffset(this, !0), this) : Yi(this, "Month");
}
function b0() {
  return Ss(this.year(), this.month());
}
function g0(e) {
  return this._monthsParseExact ? (ue(this, "_monthsRegex") || xh.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (ue(this, "_monthsShortRegex") || (this._monthsShortRegex = f0), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function N0(e) {
  return this._monthsParseExact ? (ue(this, "_monthsRegex") || xh.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (ue(this, "_monthsRegex") || (this._monthsRegex = p0), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
}
function xh() {
  function e(s, a) {
    return a.length - s.length;
  }
  var n = [], t = [], r = [], o, i;
  for (o = 0; o < 12; o++)
    i = jn([2e3, o]), n.push(this.monthsShort(i, "")), t.push(this.months(i, "")), r.push(this.months(i, "")), r.push(this.monthsShort(i, ""));
  for (n.sort(e), t.sort(e), r.sort(e), o = 0; o < 12; o++)
    n[o] = on(n[o]), t[o] = on(t[o]);
  for (o = 0; o < 24; o++)
    r[o] = on(r[o]);
  this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  ), this._monthsShortStrictRegex = new RegExp(
    "^(" + n.join("|") + ")",
    "i"
  );
}
L("Y", 0, 0, function() {
  var e = this.year();
  return e <= 9999 ? xn(e, 4) : "+" + e;
});
L(0, ["YY", 2], 0, function() {
  return this.year() % 100;
});
L(0, ["YYYY", 4], 0, "year");
L(0, ["YYYYY", 5], 0, "year");
L(0, ["YYYYYY", 6, !0], 0, "year");
We("year", "y");
Xe("year", 1);
H("Y", Is);
H("YY", be, an);
H("YYYY", ju, Bu);
H("YYYYY", Ns, bs);
H("YYYYYY", Ns, bs);
Te(["YYYYY", "YYYYYY"], je);
Te("YYYY", function(e, n) {
  n[je] = e.length === 2 ? y.parseTwoDigitYear(e) : Q(e);
});
Te("YY", function(e, n) {
  n[je] = y.parseTwoDigitYear(e);
});
Te("Y", function(e, n) {
  n[je] = parseInt(e, 10);
});
function Kr(e) {
  return Rs(e) ? 366 : 365;
}
y.parseTwoDigitYear = function(e) {
  return Q(e) + (Q(e) > 68 ? 1900 : 2e3);
};
var Lh = Nr("FullYear", !0);
function I0() {
  return Rs(this.year());
}
function A0(e, n, t, r, o, i, s) {
  var a;
  return e < 100 && e >= 0 ? (a = new Date(e + 400, n, t, r, o, i, s), isFinite(a.getFullYear()) && a.setFullYear(e)) : a = new Date(e, n, t, r, o, i, s), a;
}
function uo(e) {
  var n, t;
  return e < 100 && e >= 0 ? (t = Array.prototype.slice.call(arguments), t[0] = e + 400, n = new Date(Date.UTC.apply(null, t)), isFinite(n.getUTCFullYear()) && n.setUTCFullYear(e)) : n = new Date(Date.UTC.apply(null, arguments)), n;
}
function zi(e, n, t) {
  var r = 7 + n - t, o = (7 + uo(e, 0, r).getUTCDay() - n) % 7;
  return -o + r - 1;
}
function Bh(e, n, t, r, o) {
  var i = (7 + t - r) % 7, s = zi(e, r, o), a = 1 + 7 * (n - 1) + i + s, u, _;
  return a <= 0 ? (u = e - 1, _ = Kr(u) + a) : a > Kr(e) ? (u = e + 1, _ = a - Kr(e)) : (u = e, _ = a), {
    year: u,
    dayOfYear: _
  };
}
function _o(e, n, t) {
  var r = zi(e.year(), n, t), o = Math.floor((e.dayOfYear() - r - 1) / 7) + 1, i, s;
  return o < 1 ? (s = e.year() - 1, i = o + Zn(s, n, t)) : o > Zn(e.year(), n, t) ? (i = o - Zn(e.year(), n, t), s = e.year() + 1) : (s = e.year(), i = o), {
    week: i,
    year: s
  };
}
function Zn(e, n, t) {
  var r = zi(e, n, t), o = zi(e + 1, n, t);
  return (Kr(e) - r + o) / 7;
}
L("w", ["ww", 2], "wo", "week");
L("W", ["WW", 2], "Wo", "isoWeek");
We("week", "w");
We("isoWeek", "W");
Xe("week", 5);
Xe("isoWeek", 5);
H("w", be);
H("ww", be, an);
H("W", be);
H("WW", be, an);
Fo(
  ["w", "ww", "W", "WW"],
  function(e, n, t, r) {
    n[r.substr(0, 1)] = Q(e);
  }
);
function S0(e) {
  return _o(e, this._week.dow, this._week.doy).week;
}
var G0 = {
  dow: 0,
  // Sunday is the first day of the week.
  doy: 6
  // The week that contains Jan 6th is the first week of the year.
};
function v0() {
  return this._week.dow;
}
function C0() {
  return this._week.doy;
}
function D0(e) {
  var n = this.localeData().week(this);
  return e == null ? n : this.add((e - n) * 7, "d");
}
function y0(e) {
  var n = _o(this, 1, 4).week;
  return e == null ? n : this.add((e - n) * 7, "d");
}
L("d", 0, "do", "day");
L("dd", 0, 0, function(e) {
  return this.localeData().weekdaysMin(this, e);
});
L("ddd", 0, 0, function(e) {
  return this.localeData().weekdaysShort(this, e);
});
L("dddd", 0, 0, function(e) {
  return this.localeData().weekdays(this, e);
});
L("e", 0, 0, "weekday");
L("E", 0, 0, "isoWeekday");
We("day", "d");
We("weekday", "e");
We("isoWeekday", "E");
Xe("day", 11);
Xe("weekday", 11);
Xe("isoWeekday", 11);
H("d", be);
H("e", be);
H("E", be);
H("dd", function(e, n) {
  return n.weekdaysMinRegex(e);
});
H("ddd", function(e, n) {
  return n.weekdaysShortRegex(e);
});
H("dddd", function(e, n) {
  return n.weekdaysRegex(e);
});
Fo(["dd", "ddd", "dddd"], function(e, n, t, r) {
  var o = t._locale.weekdaysParse(e, r, t._strict);
  o != null ? n.d = o : z(t).invalidWeekday = e;
});
Fo(["d", "e", "E"], function(e, n, t, r) {
  n[r] = Q(e);
});
function U0(e, n) {
  return typeof e != "string" ? e : isNaN(e) ? (e = n.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10);
}
function H0(e, n) {
  return typeof e == "string" ? n.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
}
function Fu(e, n) {
  return e.slice(n, 7).concat(e.slice(0, n));
}
var w0 = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), jh = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), P0 = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), M0 = jo, k0 = jo, x0 = jo;
function L0(e, n) {
  var t = Sn(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(n) ? "format" : "standalone"];
  return e === !0 ? Fu(t, this._week.dow) : e ? t[e.day()] : t;
}
function B0(e) {
  return e === !0 ? Fu(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
}
function j0(e) {
  return e === !0 ? Fu(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
}
function F0(e, n, t) {
  var r, o, i, s = e.toLocaleLowerCase();
  if (!this._weekdaysParse)
    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], r = 0; r < 7; ++r)
      i = jn([2e3, 1]).day(r), this._minWeekdaysParse[r] = this.weekdaysMin(
        i,
        ""
      ).toLocaleLowerCase(), this._shortWeekdaysParse[r] = this.weekdaysShort(
        i,
        ""
      ).toLocaleLowerCase(), this._weekdaysParse[r] = this.weekdays(i, "").toLocaleLowerCase();
  return t ? n === "dddd" ? (o = De.call(this._weekdaysParse, s), o !== -1 ? o : null) : n === "ddd" ? (o = De.call(this._shortWeekdaysParse, s), o !== -1 ? o : null) : (o = De.call(this._minWeekdaysParse, s), o !== -1 ? o : null) : n === "dddd" ? (o = De.call(this._weekdaysParse, s), o !== -1 || (o = De.call(this._shortWeekdaysParse, s), o !== -1) ? o : (o = De.call(this._minWeekdaysParse, s), o !== -1 ? o : null)) : n === "ddd" ? (o = De.call(this._shortWeekdaysParse, s), o !== -1 || (o = De.call(this._weekdaysParse, s), o !== -1) ? o : (o = De.call(this._minWeekdaysParse, s), o !== -1 ? o : null)) : (o = De.call(this._minWeekdaysParse, s), o !== -1 || (o = De.call(this._weekdaysParse, s), o !== -1) ? o : (o = De.call(this._shortWeekdaysParse, s), o !== -1 ? o : null));
}
function V0(e, n, t) {
  var r, o, i;
  if (this._weekdaysParseExact)
    return F0.call(this, e, n, t);
  for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), r = 0; r < 7; r++) {
    if (o = jn([2e3, 1]).day(r), t && !this._fullWeekdaysParse[r] && (this._fullWeekdaysParse[r] = new RegExp(
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
function W0(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var n = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
  return e != null ? (e = U0(e, this.localeData()), this.add(e - n, "d")) : n;
}
function X0(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var n = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return e == null ? n : this.add(e - n, "d");
}
function K0(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    var n = H0(e, this.localeData());
    return this.day(this.day() % 7 ? n : n - 7);
  } else
    return this.day() || 7;
}
function Y0(e) {
  return this._weekdaysParseExact ? (ue(this, "_weekdaysRegex") || Vu.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (ue(this, "_weekdaysRegex") || (this._weekdaysRegex = M0), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function $0(e) {
  return this._weekdaysParseExact ? (ue(this, "_weekdaysRegex") || Vu.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (ue(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = k0), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function z0(e) {
  return this._weekdaysParseExact ? (ue(this, "_weekdaysRegex") || Vu.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (ue(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = x0), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function Vu() {
  function e(c, l) {
    return l.length - c.length;
  }
  var n = [], t = [], r = [], o = [], i, s, a, u, _;
  for (i = 0; i < 7; i++)
    s = jn([2e3, 1]).day(i), a = on(this.weekdaysMin(s, "")), u = on(this.weekdaysShort(s, "")), _ = on(this.weekdays(s, "")), n.push(a), t.push(u), r.push(_), o.push(a), o.push(u), o.push(_);
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
function Wu() {
  return this.hours() % 12 || 12;
}
function J0() {
  return this.hours() || 24;
}
L("H", ["HH", 2], 0, "hour");
L("h", ["hh", 2], 0, Wu);
L("k", ["kk", 2], 0, J0);
L("hmm", 0, 0, function() {
  return "" + Wu.apply(this) + xn(this.minutes(), 2);
});
L("hmmss", 0, 0, function() {
  return "" + Wu.apply(this) + xn(this.minutes(), 2) + xn(this.seconds(), 2);
});
L("Hmm", 0, 0, function() {
  return "" + this.hours() + xn(this.minutes(), 2);
});
L("Hmmss", 0, 0, function() {
  return "" + this.hours() + xn(this.minutes(), 2) + xn(this.seconds(), 2);
});
function Fh(e, n) {
  L(e, 0, 0, function() {
    return this.localeData().meridiem(
      this.hours(),
      this.minutes(),
      n
    );
  });
}
Fh("a", !0);
Fh("A", !1);
We("hour", "h");
Xe("hour", 13);
function Vh(e, n) {
  return n._meridiemParse;
}
H("a", Vh);
H("A", Vh);
H("H", be);
H("h", be);
H("k", be);
H("HH", be, an);
H("hh", be, an);
H("kk", be, an);
H("hmm", Uh);
H("hmmss", Hh);
H("Hmm", Uh);
H("Hmmss", Hh);
Te(["H", "HH"], ye);
Te(["k", "kk"], function(e, n, t) {
  var r = Q(e);
  n[ye] = r === 24 ? 0 : r;
});
Te(["a", "A"], function(e, n, t) {
  t._isPm = t._locale.isPM(e), t._meridiem = e;
});
Te(["h", "hh"], function(e, n, t) {
  n[ye] = Q(e), z(t).bigHour = !0;
});
Te("hmm", function(e, n, t) {
  var r = e.length - 2;
  n[ye] = Q(e.substr(0, r)), n[bn] = Q(e.substr(r)), z(t).bigHour = !0;
});
Te("hmmss", function(e, n, t) {
  var r = e.length - 4, o = e.length - 2;
  n[ye] = Q(e.substr(0, r)), n[bn] = Q(e.substr(r, 2)), n[zn] = Q(e.substr(o)), z(t).bigHour = !0;
});
Te("Hmm", function(e, n, t) {
  var r = e.length - 2;
  n[ye] = Q(e.substr(0, r)), n[bn] = Q(e.substr(r));
});
Te("Hmmss", function(e, n, t) {
  var r = e.length - 4, o = e.length - 2;
  n[ye] = Q(e.substr(0, r)), n[bn] = Q(e.substr(r, 2)), n[zn] = Q(e.substr(o));
});
function q0(e) {
  return (e + "").toLowerCase().charAt(0) === "p";
}
var Q0 = /[ap]\.?m?\.?/i, Z0 = Nr("Hours", !0);
function eR(e, n, t) {
  return e > 11 ? t ? "pm" : "PM" : t ? "am" : "AM";
}
var Wh = {
  calendar: V1,
  longDateFormat: Y1,
  invalidDate: z1,
  ordinal: q1,
  dayOfMonthOrdinalParse: Q1,
  relativeTime: e0,
  months: m0,
  monthsShort: wh,
  week: G0,
  weekdays: w0,
  weekdaysMin: P0,
  weekdaysShort: jh,
  meridiemParse: Q0
}, ge = {}, Ur = {}, lo;
function nR(e, n) {
  var t, r = Math.min(e.length, n.length);
  for (t = 0; t < r; t += 1)
    if (e[t] !== n[t])
      return t;
  return r;
}
function gl(e) {
  return e && e.toLowerCase().replace("_", "-");
}
function tR(e) {
  for (var n = 0, t, r, o, i; n < e.length; ) {
    for (i = gl(e[n]).split("-"), t = i.length, r = gl(e[n + 1]), r = r ? r.split("-") : null; t > 0; ) {
      if (o = Gs(i.slice(0, t).join("-")), o)
        return o;
      if (r && r.length >= t && nR(i, r) >= t - 1)
        break;
      t--;
    }
    n++;
  }
  return lo;
}
function rR(e) {
  return e.match("^[^/\\\\]*$") != null;
}
function Gs(e) {
  var n = null, t;
  if (ge[e] === void 0 && typeof module < "u" && module && module.exports && rR(e))
    try {
      n = lo._abbr, t = L1, t("./locale/" + e), Nt(n);
    } catch {
      ge[e] = null;
    }
  return ge[e];
}
function Nt(e, n) {
  var t;
  return e && (qe(n) ? t = it(e) : t = Xu(e, n), t ? lo = t : typeof console < "u" && console.warn && console.warn(
    "Locale " + e + " not found. Did you forget to load it?"
  )), lo._abbr;
}
function Xu(e, n) {
  if (n !== null) {
    var t, r = Wh;
    if (n.abbr = e, ge[e] != null)
      Sh(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ), r = ge[e]._config;
    else if (n.parentLocale != null)
      if (ge[n.parentLocale] != null)
        r = ge[n.parentLocale]._config;
      else if (t = Gs(n.parentLocale), t != null)
        r = t._config;
      else
        return Ur[n.parentLocale] || (Ur[n.parentLocale] = []), Ur[n.parentLocale].push({
          name: e,
          config: n
        }), null;
    return ge[e] = new ku(Xa(r, n)), Ur[e] && Ur[e].forEach(function(o) {
      Xu(o.name, o.config);
    }), Nt(e), ge[e];
  } else
    return delete ge[e], null;
}
function oR(e, n) {
  if (n != null) {
    var t, r, o = Wh;
    ge[e] != null && ge[e].parentLocale != null ? ge[e].set(Xa(ge[e]._config, n)) : (r = Gs(e), r != null && (o = r._config), n = Xa(o, n), r == null && (n.abbr = e), t = new ku(n), t.parentLocale = ge[e], ge[e] = t), Nt(e);
  } else
    ge[e] != null && (ge[e].parentLocale != null ? (ge[e] = ge[e].parentLocale, e === Nt() && Nt(e)) : ge[e] != null && delete ge[e]);
  return ge[e];
}
function it(e) {
  var n;
  if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
    return lo;
  if (!Sn(e)) {
    if (n = Gs(e), n)
      return n;
    e = [e];
  }
  return tR(e);
}
function iR() {
  return Ka(ge);
}
function Ku(e) {
  var n, t = e._a;
  return t && z(e).overflow === -2 && (n = t[$n] < 0 || t[$n] > 11 ? $n : t[Un] < 1 || t[Un] > Ss(t[je], t[$n]) ? Un : t[ye] < 0 || t[ye] > 24 || t[ye] === 24 && (t[bn] !== 0 || t[zn] !== 0 || t[Pt] !== 0) ? ye : t[bn] < 0 || t[bn] > 59 ? bn : t[zn] < 0 || t[zn] > 59 ? zn : t[Pt] < 0 || t[Pt] > 999 ? Pt : -1, z(e)._overflowDayOfYear && (n < je || n > Un) && (n = Un), z(e)._overflowWeeks && n === -1 && (n = c0), z(e)._overflowWeekday && n === -1 && (n = d0), z(e).overflow = n), e;
}
var sR = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, aR = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, uR = /Z|[+-]\d\d(?::?\d\d)?/, ti = [
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
], ua = [
  ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
  ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
  ["HH:mm:ss", /\d\d:\d\d:\d\d/],
  ["HH:mm", /\d\d:\d\d/],
  ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
  ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
  ["HHmmss", /\d\d\d\d\d\d/],
  ["HHmm", /\d\d\d\d/],
  ["HH", /\d\d/]
], _R = /^\/?Date\((-?\d+)/i, lR = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, cR = {
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
function Xh(e) {
  var n, t, r = e._i, o = sR.exec(r) || aR.exec(r), i, s, a, u, _ = ti.length, c = ua.length;
  if (o) {
    for (z(e).iso = !0, n = 0, t = _; n < t; n++)
      if (ti[n][1].exec(o[1])) {
        s = ti[n][0], i = ti[n][2] !== !1;
        break;
      }
    if (s == null) {
      e._isValid = !1;
      return;
    }
    if (o[3]) {
      for (n = 0, t = c; n < t; n++)
        if (ua[n][1].exec(o[3])) {
          a = (o[2] || " ") + ua[n][0];
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
      if (uR.exec(o[4]))
        u = "Z";
      else {
        e._isValid = !1;
        return;
      }
    e._f = s + (a || "") + (u || ""), $u(e);
  } else
    e._isValid = !1;
}
function dR(e, n, t, r, o, i) {
  var s = [
    hR(e),
    wh.indexOf(n),
    parseInt(t, 10),
    parseInt(r, 10),
    parseInt(o, 10)
  ];
  return i && s.push(parseInt(i, 10)), s;
}
function hR(e) {
  var n = parseInt(e, 10);
  return n <= 49 ? 2e3 + n : n <= 999 ? 1900 + n : n;
}
function mR(e) {
  return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function fR(e, n, t) {
  if (e) {
    var r = jh.indexOf(e), o = new Date(
      n[0],
      n[1],
      n[2]
    ).getDay();
    if (r !== o)
      return z(t).weekdayMismatch = !0, t._isValid = !1, !1;
  }
  return !0;
}
function pR(e, n, t) {
  if (e)
    return cR[e];
  if (n)
    return 0;
  var r = parseInt(t, 10), o = r % 100, i = (r - o) / 100;
  return i * 60 + o;
}
function Kh(e) {
  var n = lR.exec(mR(e._i)), t;
  if (n) {
    if (t = dR(
      n[4],
      n[3],
      n[2],
      n[5],
      n[6],
      n[7]
    ), !fR(n[1], t, e))
      return;
    e._a = t, e._tzm = pR(n[8], n[9], n[10]), e._d = uo.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), z(e).rfc2822 = !0;
  } else
    e._isValid = !1;
}
function TR(e) {
  var n = _R.exec(e._i);
  if (n !== null) {
    e._d = /* @__PURE__ */ new Date(+n[1]);
    return;
  }
  if (Xh(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  if (Kh(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  e._strict ? e._isValid = !1 : y.createFromInputFallback(e);
}
y.createFromInputFallback = Tn(
  "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  function(e) {
    e._d = /* @__PURE__ */ new Date(e._i + (e._useUTC ? " UTC" : ""));
  }
);
function Yt(e, n, t) {
  return e ?? n ?? t;
}
function ER(e) {
  var n = new Date(y.now());
  return e._useUTC ? [
    n.getUTCFullYear(),
    n.getUTCMonth(),
    n.getUTCDate()
  ] : [n.getFullYear(), n.getMonth(), n.getDate()];
}
function Yu(e) {
  var n, t, r = [], o, i, s;
  if (!e._d) {
    for (o = ER(e), e._w && e._a[Un] == null && e._a[$n] == null && OR(e), e._dayOfYear != null && (s = Yt(e._a[je], o[je]), (e._dayOfYear > Kr(s) || e._dayOfYear === 0) && (z(e)._overflowDayOfYear = !0), t = uo(s, 0, e._dayOfYear), e._a[$n] = t.getUTCMonth(), e._a[Un] = t.getUTCDate()), n = 0; n < 3 && e._a[n] == null; ++n)
      e._a[n] = r[n] = o[n];
    for (; n < 7; n++)
      e._a[n] = r[n] = e._a[n] == null ? n === 2 ? 1 : 0 : e._a[n];
    e._a[ye] === 24 && e._a[bn] === 0 && e._a[zn] === 0 && e._a[Pt] === 0 && (e._nextDay = !0, e._a[ye] = 0), e._d = (e._useUTC ? uo : A0).apply(
      null,
      r
    ), i = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[ye] = 24), e._w && typeof e._w.d < "u" && e._w.d !== i && (z(e).weekdayMismatch = !0);
  }
}
function OR(e) {
  var n, t, r, o, i, s, a, u, _;
  n = e._w, n.GG != null || n.W != null || n.E != null ? (i = 1, s = 4, t = Yt(
    n.GG,
    e._a[je],
    _o(Re(), 1, 4).year
  ), r = Yt(n.W, 1), o = Yt(n.E, 1), (o < 1 || o > 7) && (u = !0)) : (i = e._locale._week.dow, s = e._locale._week.doy, _ = _o(Re(), i, s), t = Yt(n.gg, e._a[je], _.year), r = Yt(n.w, _.week), n.d != null ? (o = n.d, (o < 0 || o > 6) && (u = !0)) : n.e != null ? (o = n.e + i, (n.e < 0 || n.e > 6) && (u = !0)) : o = i), r < 1 || r > Zn(t, i, s) ? z(e)._overflowWeeks = !0 : u != null ? z(e)._overflowWeekday = !0 : (a = Bh(t, r, o, i, s), e._a[je] = a.year, e._dayOfYear = a.dayOfYear);
}
y.ISO_8601 = function() {
};
y.RFC_2822 = function() {
};
function $u(e) {
  if (e._f === y.ISO_8601) {
    Xh(e);
    return;
  }
  if (e._f === y.RFC_2822) {
    Kh(e);
    return;
  }
  e._a = [], z(e).empty = !0;
  var n = "" + e._i, t, r, o, i, s, a = n.length, u = 0, _, c;
  for (o = Gh(e._f, e._locale).match(xu) || [], c = o.length, t = 0; t < c; t++)
    i = o[t], r = (n.match(u0(i, e)) || [])[0], r && (s = n.substr(0, n.indexOf(r)), s.length > 0 && z(e).unusedInput.push(s), n = n.slice(
      n.indexOf(r) + r.length
    ), u += r.length), er[i] ? (r ? z(e).empty = !1 : z(e).unusedTokens.push(i), l0(i, r, e)) : e._strict && !r && z(e).unusedTokens.push(i);
  z(e).charsLeftOver = a - u, n.length > 0 && z(e).unusedInput.push(n), e._a[ye] <= 12 && z(e).bigHour === !0 && e._a[ye] > 0 && (z(e).bigHour = void 0), z(e).parsedDateParts = e._a.slice(0), z(e).meridiem = e._meridiem, e._a[ye] = RR(
    e._locale,
    e._a[ye],
    e._meridiem
  ), _ = z(e).era, _ !== null && (e._a[je] = e._locale.erasConvertYear(_, e._a[je])), Yu(e), Ku(e);
}
function RR(e, n, t) {
  var r;
  return t == null ? n : e.meridiemHour != null ? e.meridiemHour(n, t) : (e.isPM != null && (r = e.isPM(t), r && n < 12 && (n += 12), !r && n === 12 && (n = 0)), n);
}
function bR(e) {
  var n, t, r, o, i, s, a = !1, u = e._f.length;
  if (u === 0) {
    z(e).invalidFormat = !0, e._d = /* @__PURE__ */ new Date(NaN);
    return;
  }
  for (o = 0; o < u; o++)
    i = 0, s = !1, n = Mu({}, e), e._useUTC != null && (n._useUTC = e._useUTC), n._f = e._f[o], $u(n), Pu(n) && (s = !0), i += z(n).charsLeftOver, i += z(n).unusedTokens.length * 10, z(n).score = i, a ? i < r && (r = i, t = n) : (r == null || i < r || s) && (r = i, t = n, s && (a = !0));
  Tt(e, t || n);
}
function gR(e) {
  if (!e._d) {
    var n = Lu(e._i), t = n.day === void 0 ? n.date : n.day;
    e._a = Ih(
      [n.year, n.month, t, n.hour, n.minute, n.second, n.millisecond],
      function(r) {
        return r && parseInt(r, 10);
      }
    ), Yu(e);
  }
}
function NR(e) {
  var n = new Bo(Ku(Yh(e)));
  return n._nextDay && (n.add(1, "d"), n._nextDay = void 0), n;
}
function Yh(e) {
  var n = e._i, t = e._f;
  return e._locale = e._locale || it(e._l), n === null || t === void 0 && n === "" ? Os({ nullInput: !0 }) : (typeof n == "string" && (e._i = n = e._locale.preparse(n)), Gn(n) ? new Bo(Ku(n)) : (Lo(n) ? e._d = n : Sn(t) ? bR(e) : t ? $u(e) : IR(e), Pu(e) || (e._d = null), e));
}
function IR(e) {
  var n = e._i;
  qe(n) ? e._d = new Date(y.now()) : Lo(n) ? e._d = new Date(n.valueOf()) : typeof n == "string" ? TR(e) : Sn(n) ? (e._a = Ih(n.slice(0), function(t) {
    return parseInt(t, 10);
  }), Yu(e)) : kt(n) ? gR(e) : tt(n) ? e._d = new Date(n) : y.createFromInputFallback(e);
}
function $h(e, n, t, r, o) {
  var i = {};
  return (n === !0 || n === !1) && (r = n, n = void 0), (t === !0 || t === !1) && (r = t, t = void 0), (kt(e) && wu(e) || Sn(e) && e.length === 0) && (e = void 0), i._isAMomentObject = !0, i._useUTC = i._isUTC = o, i._l = t, i._i = e, i._f = n, i._strict = r, NR(i);
}
function Re(e, n, t, r) {
  return $h(e, n, t, r, !1);
}
var AR = Tn(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = Re.apply(null, arguments);
    return this.isValid() && e.isValid() ? e < this ? this : e : Os();
  }
), SR = Tn(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = Re.apply(null, arguments);
    return this.isValid() && e.isValid() ? e > this ? this : e : Os();
  }
);
function zh(e, n) {
  var t, r;
  if (n.length === 1 && Sn(n[0]) && (n = n[0]), !n.length)
    return Re();
  for (t = n[0], r = 1; r < n.length; ++r)
    (!n[r].isValid() || n[r][e](t)) && (t = n[r]);
  return t;
}
function GR() {
  var e = [].slice.call(arguments, 0);
  return zh("isBefore", e);
}
function vR() {
  var e = [].slice.call(arguments, 0);
  return zh("isAfter", e);
}
var CR = function() {
  return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
}, Hr = [
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
function DR(e) {
  var n, t = !1, r, o = Hr.length;
  for (n in e)
    if (ue(e, n) && !(De.call(Hr, n) !== -1 && (e[n] == null || !isNaN(e[n]))))
      return !1;
  for (r = 0; r < o; ++r)
    if (e[Hr[r]]) {
      if (t)
        return !1;
      parseFloat(e[Hr[r]]) !== Q(e[Hr[r]]) && (t = !0);
    }
  return !0;
}
function yR() {
  return this._isValid;
}
function UR() {
  return Dn(NaN);
}
function vs(e) {
  var n = Lu(e), t = n.year || 0, r = n.quarter || 0, o = n.month || 0, i = n.week || n.isoWeek || 0, s = n.day || 0, a = n.hour || 0, u = n.minute || 0, _ = n.second || 0, c = n.millisecond || 0;
  this._isValid = DR(n), this._milliseconds = +c + _ * 1e3 + // 1000
  u * 6e4 + // 1000 * 60
  a * 1e3 * 60 * 60, this._days = +s + i * 7, this._months = +o + r * 3 + t * 12, this._data = {}, this._locale = it(), this._bubble();
}
function Ii(e) {
  return e instanceof vs;
}
function $a(e) {
  return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
}
function HR(e, n, t) {
  var r = Math.min(e.length, n.length), o = Math.abs(e.length - n.length), i = 0, s;
  for (s = 0; s < r; s++)
    (t && e[s] !== n[s] || !t && Q(e[s]) !== Q(n[s])) && i++;
  return i + o;
}
function Jh(e, n) {
  L(e, 0, 0, function() {
    var t = this.utcOffset(), r = "+";
    return t < 0 && (t = -t, r = "-"), r + xn(~~(t / 60), 2) + n + xn(~~t % 60, 2);
  });
}
Jh("Z", ":");
Jh("ZZ", "");
H("Z", As);
H("ZZ", As);
Te(["Z", "ZZ"], function(e, n, t) {
  t._useUTC = !0, t._tzm = zu(As, e);
});
var wR = /([\+\-]|\d\d)/gi;
function zu(e, n) {
  var t = (n || "").match(e), r, o, i;
  return t === null ? null : (r = t[t.length - 1] || [], o = (r + "").match(wR) || ["-", 0, 0], i = +(o[1] * 60) + Q(o[2]), i === 0 ? 0 : o[0] === "+" ? i : -i);
}
function Ju(e, n) {
  var t, r;
  return n._isUTC ? (t = n.clone(), r = (Gn(e) || Lo(e) ? e.valueOf() : Re(e).valueOf()) - t.valueOf(), t._d.setTime(t._d.valueOf() + r), y.updateOffset(t, !1), t) : Re(e).local();
}
function za(e) {
  return -Math.round(e._d.getTimezoneOffset());
}
y.updateOffset = function() {
};
function PR(e, n, t) {
  var r = this._offset || 0, o;
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    if (typeof e == "string") {
      if (e = zu(As, e), e === null)
        return this;
    } else
      Math.abs(e) < 16 && !t && (e = e * 60);
    return !this._isUTC && n && (o = za(this)), this._offset = e, this._isUTC = !0, o != null && this.add(o, "m"), r !== e && (!n || this._changeInProgress ? Zh(
      this,
      Dn(e - r, "m"),
      1,
      !1
    ) : this._changeInProgress || (this._changeInProgress = !0, y.updateOffset(this, !0), this._changeInProgress = null)), this;
  } else
    return this._isUTC ? r : za(this);
}
function MR(e, n) {
  return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, n), this) : -this.utcOffset();
}
function kR(e) {
  return this.utcOffset(0, e);
}
function xR(e) {
  return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(za(this), "m")), this;
}
function LR() {
  if (this._tzm != null)
    this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var e = zu(s0, this._i);
    e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
  }
  return this;
}
function BR(e) {
  return this.isValid() ? (e = e ? Re(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1;
}
function jR() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function FR() {
  if (!qe(this._isDSTShifted))
    return this._isDSTShifted;
  var e = {}, n;
  return Mu(e, this), e = Yh(e), e._a ? (n = e._isUTC ? jn(e._a) : Re(e._a), this._isDSTShifted = this.isValid() && HR(e._a, n.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function VR() {
  return this.isValid() ? !this._isUTC : !1;
}
function WR() {
  return this.isValid() ? this._isUTC : !1;
}
function qh() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var XR = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, KR = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function Dn(e, n) {
  var t = e, r = null, o, i, s;
  return Ii(e) ? t = {
    ms: e._milliseconds,
    d: e._days,
    M: e._months
  } : tt(e) || !isNaN(+e) ? (t = {}, n ? t[n] = +e : t.milliseconds = +e) : (r = XR.exec(e)) ? (o = r[1] === "-" ? -1 : 1, t = {
    y: 0,
    d: Q(r[Un]) * o,
    h: Q(r[ye]) * o,
    m: Q(r[bn]) * o,
    s: Q(r[zn]) * o,
    ms: Q($a(r[Pt] * 1e3)) * o
    // the millisecond decimal point is included in the match
  }) : (r = KR.exec(e)) ? (o = r[1] === "-" ? -1 : 1, t = {
    y: Ht(r[2], o),
    M: Ht(r[3], o),
    w: Ht(r[4], o),
    d: Ht(r[5], o),
    h: Ht(r[6], o),
    m: Ht(r[7], o),
    s: Ht(r[8], o)
  }) : t == null ? t = {} : typeof t == "object" && ("from" in t || "to" in t) && (s = YR(
    Re(t.from),
    Re(t.to)
  ), t = {}, t.ms = s.milliseconds, t.M = s.months), i = new vs(t), Ii(e) && ue(e, "_locale") && (i._locale = e._locale), Ii(e) && ue(e, "_isValid") && (i._isValid = e._isValid), i;
}
Dn.fn = vs.prototype;
Dn.invalid = UR;
function Ht(e, n) {
  var t = e && parseFloat(e.replace(",", "."));
  return (isNaN(t) ? 0 : t) * n;
}
function Nl(e, n) {
  var t = {};
  return t.months = n.month() - e.month() + (n.year() - e.year()) * 12, e.clone().add(t.months, "M").isAfter(n) && --t.months, t.milliseconds = +n - +e.clone().add(t.months, "M"), t;
}
function YR(e, n) {
  var t;
  return e.isValid() && n.isValid() ? (n = Ju(n, e), e.isBefore(n) ? t = Nl(e, n) : (t = Nl(n, e), t.milliseconds = -t.milliseconds, t.months = -t.months), t) : { milliseconds: 0, months: 0 };
}
function Qh(e, n) {
  return function(t, r) {
    var o, i;
    return r !== null && !isNaN(+r) && (Sh(
      n,
      "moment()." + n + "(period, number) is deprecated. Please use moment()." + n + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
    ), i = t, t = r, r = i), o = Dn(t, r), Zh(this, o, e), this;
  };
}
function Zh(e, n, t, r) {
  var o = n._milliseconds, i = $a(n._days), s = $a(n._months);
  e.isValid() && (r = r ?? !0, s && Mh(e, Yi(e, "Month") + s * t), i && Ch(e, "Date", Yi(e, "Date") + i * t), o && e._d.setTime(e._d.valueOf() + o * t), r && y.updateOffset(e, i || s));
}
var $R = Qh(1, "add"), zR = Qh(-1, "subtract");
function em(e) {
  return typeof e == "string" || e instanceof String;
}
function JR(e) {
  return Gn(e) || Lo(e) || em(e) || tt(e) || QR(e) || qR(e) || e === null || e === void 0;
}
function qR(e) {
  var n = kt(e) && !wu(e), t = !1, r = [
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
    i = r[o], t = t || ue(e, i);
  return n && t;
}
function QR(e) {
  var n = Sn(e), t = !1;
  return n && (t = e.filter(function(r) {
    return !tt(r) && em(e);
  }).length === 0), n && t;
}
function ZR(e) {
  var n = kt(e) && !wu(e), t = !1, r = [
    "sameDay",
    "nextDay",
    "lastDay",
    "nextWeek",
    "lastWeek",
    "sameElse"
  ], o, i;
  for (o = 0; o < r.length; o += 1)
    i = r[o], t = t || ue(e, i);
  return n && t;
}
function eb(e, n) {
  var t = e.diff(n, "days", !0);
  return t < -6 ? "sameElse" : t < -1 ? "lastWeek" : t < 0 ? "lastDay" : t < 1 ? "sameDay" : t < 2 ? "nextDay" : t < 7 ? "nextWeek" : "sameElse";
}
function nb(e, n) {
  arguments.length === 1 && (arguments[0] ? JR(arguments[0]) ? (e = arguments[0], n = void 0) : ZR(arguments[0]) && (n = arguments[0], e = void 0) : (e = void 0, n = void 0));
  var t = e || Re(), r = Ju(t, this).startOf("day"), o = y.calendarFormat(this, r) || "sameElse", i = n && (Fn(n[o]) ? n[o].call(this, t) : n[o]);
  return this.format(
    i || this.localeData().calendar(o, this, Re(t))
  );
}
function tb() {
  return new Bo(this);
}
function rb(e, n) {
  var t = Gn(e) ? e : Re(e);
  return this.isValid() && t.isValid() ? (n = En(n) || "millisecond", n === "millisecond" ? this.valueOf() > t.valueOf() : t.valueOf() < this.clone().startOf(n).valueOf()) : !1;
}
function ob(e, n) {
  var t = Gn(e) ? e : Re(e);
  return this.isValid() && t.isValid() ? (n = En(n) || "millisecond", n === "millisecond" ? this.valueOf() < t.valueOf() : this.clone().endOf(n).valueOf() < t.valueOf()) : !1;
}
function ib(e, n, t, r) {
  var o = Gn(e) ? e : Re(e), i = Gn(n) ? n : Re(n);
  return this.isValid() && o.isValid() && i.isValid() ? (r = r || "()", (r[0] === "(" ? this.isAfter(o, t) : !this.isBefore(o, t)) && (r[1] === ")" ? this.isBefore(i, t) : !this.isAfter(i, t))) : !1;
}
function sb(e, n) {
  var t = Gn(e) ? e : Re(e), r;
  return this.isValid() && t.isValid() ? (n = En(n) || "millisecond", n === "millisecond" ? this.valueOf() === t.valueOf() : (r = t.valueOf(), this.clone().startOf(n).valueOf() <= r && r <= this.clone().endOf(n).valueOf())) : !1;
}
function ab(e, n) {
  return this.isSame(e, n) || this.isAfter(e, n);
}
function ub(e, n) {
  return this.isSame(e, n) || this.isBefore(e, n);
}
function _b(e, n, t) {
  var r, o, i;
  if (!this.isValid())
    return NaN;
  if (r = Ju(e, this), !r.isValid())
    return NaN;
  switch (o = (r.utcOffset() - this.utcOffset()) * 6e4, n = En(n), n) {
    case "year":
      i = Ai(this, r) / 12;
      break;
    case "month":
      i = Ai(this, r);
      break;
    case "quarter":
      i = Ai(this, r) / 3;
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
  return t ? i : un(i);
}
function Ai(e, n) {
  if (e.date() < n.date())
    return -Ai(n, e);
  var t = (n.year() - e.year()) * 12 + (n.month() - e.month()), r = e.clone().add(t, "months"), o, i;
  return n - r < 0 ? (o = e.clone().add(t - 1, "months"), i = (n - r) / (r - o)) : (o = e.clone().add(t + 1, "months"), i = (n - r) / (o - r)), -(t + i) || 0;
}
y.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
y.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function lb() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function cb(e) {
  if (!this.isValid())
    return null;
  var n = e !== !0, t = n ? this.clone().utc() : this;
  return t.year() < 0 || t.year() > 9999 ? Ni(
    t,
    n ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
  ) : Fn(Date.prototype.toISOString) ? n ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", Ni(t, "Z")) : Ni(
    t,
    n ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
  );
}
function db() {
  if (!this.isValid())
    return "moment.invalid(/* " + this._i + " */)";
  var e = "moment", n = "", t, r, o, i;
  return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", n = "Z"), t = "[" + e + '("]', r = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", o = "-MM-DD[T]HH:mm:ss.SSS", i = n + '[")]', this.format(t + r + o + i);
}
function hb(e) {
  e || (e = this.isUtc() ? y.defaultFormatUtc : y.defaultFormat);
  var n = Ni(this, e);
  return this.localeData().postformat(n);
}
function mb(e, n) {
  return this.isValid() && (Gn(e) && e.isValid() || Re(e).isValid()) ? Dn({ to: this, from: e }).locale(this.locale()).humanize(!n) : this.localeData().invalidDate();
}
function fb(e) {
  return this.from(Re(), e);
}
function pb(e, n) {
  return this.isValid() && (Gn(e) && e.isValid() || Re(e).isValid()) ? Dn({ from: this, to: e }).locale(this.locale()).humanize(!n) : this.localeData().invalidDate();
}
function Tb(e) {
  return this.to(Re(), e);
}
function nm(e) {
  var n;
  return e === void 0 ? this._locale._abbr : (n = it(e), n != null && (this._locale = n), this);
}
var tm = Tn(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function(e) {
    return e === void 0 ? this.localeData() : this.locale(e);
  }
);
function rm() {
  return this._locale;
}
var Ji = 1e3, nr = 60 * Ji, qi = 60 * nr, om = (365 * 400 + 97) * 24 * qi;
function tr(e, n) {
  return (e % n + n) % n;
}
function im(e, n, t) {
  return e < 100 && e >= 0 ? new Date(e + 400, n, t) - om : new Date(e, n, t).valueOf();
}
function sm(e, n, t) {
  return e < 100 && e >= 0 ? Date.UTC(e + 400, n, t) - om : Date.UTC(e, n, t);
}
function Eb(e) {
  var n, t;
  if (e = En(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (t = this._isUTC ? sm : im, e) {
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
      n = this._d.valueOf(), n -= tr(
        n + (this._isUTC ? 0 : this.utcOffset() * nr),
        qi
      );
      break;
    case "minute":
      n = this._d.valueOf(), n -= tr(n, nr);
      break;
    case "second":
      n = this._d.valueOf(), n -= tr(n, Ji);
      break;
  }
  return this._d.setTime(n), y.updateOffset(this, !0), this;
}
function Ob(e) {
  var n, t;
  if (e = En(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (t = this._isUTC ? sm : im, e) {
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
      n = this._d.valueOf(), n += qi - tr(
        n + (this._isUTC ? 0 : this.utcOffset() * nr),
        qi
      ) - 1;
      break;
    case "minute":
      n = this._d.valueOf(), n += nr - tr(n, nr) - 1;
      break;
    case "second":
      n = this._d.valueOf(), n += Ji - tr(n, Ji) - 1;
      break;
  }
  return this._d.setTime(n), y.updateOffset(this, !0), this;
}
function Rb() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function bb() {
  return Math.floor(this.valueOf() / 1e3);
}
function gb() {
  return new Date(this.valueOf());
}
function Nb() {
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
function Ib() {
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
function Ab() {
  return this.isValid() ? this.toISOString() : null;
}
function Sb() {
  return Pu(this);
}
function Gb() {
  return Tt({}, z(this));
}
function vb() {
  return z(this).overflow;
}
function Cb() {
  return {
    input: this._i,
    format: this._f,
    locale: this._locale,
    isUTC: this._isUTC,
    strict: this._strict
  };
}
L("N", 0, 0, "eraAbbr");
L("NN", 0, 0, "eraAbbr");
L("NNN", 0, 0, "eraAbbr");
L("NNNN", 0, 0, "eraName");
L("NNNNN", 0, 0, "eraNarrow");
L("y", ["y", 1], "yo", "eraYear");
L("y", ["yy", 2], 0, "eraYear");
L("y", ["yyy", 3], 0, "eraYear");
L("y", ["yyyy", 4], 0, "eraYear");
H("N", qu);
H("NN", qu);
H("NNN", qu);
H("NNNN", Bb);
H("NNNNN", jb);
Te(
  ["N", "NN", "NNN", "NNNN", "NNNNN"],
  function(e, n, t, r) {
    var o = t._locale.erasParse(e, r, t._strict);
    o ? z(t).era = o : z(t).invalidEra = e;
  }
);
H("y", Ir);
H("yy", Ir);
H("yyy", Ir);
H("yyyy", Ir);
H("yo", Fb);
Te(["y", "yy", "yyy", "yyyy"], je);
Te(["yo"], function(e, n, t, r) {
  var o;
  t._locale._eraYearOrdinalRegex && (o = e.match(t._locale._eraYearOrdinalRegex)), t._locale.eraYearOrdinalParse ? n[je] = t._locale.eraYearOrdinalParse(e, o) : n[je] = parseInt(e, 10);
});
function Db(e, n) {
  var t, r, o, i = this._eras || it("en")._eras;
  for (t = 0, r = i.length; t < r; ++t) {
    switch (typeof i[t].since) {
      case "string":
        o = y(i[t].since).startOf("day"), i[t].since = o.valueOf();
        break;
    }
    switch (typeof i[t].until) {
      case "undefined":
        i[t].until = 1 / 0;
        break;
      case "string":
        o = y(i[t].until).startOf("day").valueOf(), i[t].until = o.valueOf();
        break;
    }
  }
  return i;
}
function yb(e, n, t) {
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
function Ub(e, n) {
  var t = e.since <= e.until ? 1 : -1;
  return n === void 0 ? y(e.since).year() : y(e.since).year() + (n - e.offset) * t;
}
function Hb() {
  var e, n, t, r = this.localeData().eras();
  for (e = 0, n = r.length; e < n; ++e)
    if (t = this.clone().startOf("day").valueOf(), r[e].since <= t && t <= r[e].until || r[e].until <= t && t <= r[e].since)
      return r[e].name;
  return "";
}
function wb() {
  var e, n, t, r = this.localeData().eras();
  for (e = 0, n = r.length; e < n; ++e)
    if (t = this.clone().startOf("day").valueOf(), r[e].since <= t && t <= r[e].until || r[e].until <= t && t <= r[e].since)
      return r[e].narrow;
  return "";
}
function Pb() {
  var e, n, t, r = this.localeData().eras();
  for (e = 0, n = r.length; e < n; ++e)
    if (t = this.clone().startOf("day").valueOf(), r[e].since <= t && t <= r[e].until || r[e].until <= t && t <= r[e].since)
      return r[e].abbr;
  return "";
}
function Mb() {
  var e, n, t, r, o = this.localeData().eras();
  for (e = 0, n = o.length; e < n; ++e)
    if (t = o[e].since <= o[e].until ? 1 : -1, r = this.clone().startOf("day").valueOf(), o[e].since <= r && r <= o[e].until || o[e].until <= r && r <= o[e].since)
      return (this.year() - y(o[e].since).year()) * t + o[e].offset;
  return this.year();
}
function kb(e) {
  return ue(this, "_erasNameRegex") || Qu.call(this), e ? this._erasNameRegex : this._erasRegex;
}
function xb(e) {
  return ue(this, "_erasAbbrRegex") || Qu.call(this), e ? this._erasAbbrRegex : this._erasRegex;
}
function Lb(e) {
  return ue(this, "_erasNarrowRegex") || Qu.call(this), e ? this._erasNarrowRegex : this._erasRegex;
}
function qu(e, n) {
  return n.erasAbbrRegex(e);
}
function Bb(e, n) {
  return n.erasNameRegex(e);
}
function jb(e, n) {
  return n.erasNarrowRegex(e);
}
function Fb(e, n) {
  return n._eraYearOrdinalRegex || Ir;
}
function Qu() {
  var e = [], n = [], t = [], r = [], o, i, s = this.eras();
  for (o = 0, i = s.length; o < i; ++o)
    n.push(on(s[o].name)), e.push(on(s[o].abbr)), t.push(on(s[o].narrow)), r.push(on(s[o].name)), r.push(on(s[o].abbr)), r.push(on(s[o].narrow));
  this._erasRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + n.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
L(0, ["gg", 2], 0, function() {
  return this.weekYear() % 100;
});
L(0, ["GG", 2], 0, function() {
  return this.isoWeekYear() % 100;
});
function Cs(e, n) {
  L(0, [e, e.length], 0, n);
}
Cs("gggg", "weekYear");
Cs("ggggg", "weekYear");
Cs("GGGG", "isoWeekYear");
Cs("GGGGG", "isoWeekYear");
We("weekYear", "gg");
We("isoWeekYear", "GG");
Xe("weekYear", 1);
Xe("isoWeekYear", 1);
H("G", Is);
H("g", Is);
H("GG", be, an);
H("gg", be, an);
H("GGGG", ju, Bu);
H("gggg", ju, Bu);
H("GGGGG", Ns, bs);
H("ggggg", Ns, bs);
Fo(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(e, n, t, r) {
    n[r.substr(0, 2)] = Q(e);
  }
);
Fo(["gg", "GG"], function(e, n, t, r) {
  n[r] = y.parseTwoDigitYear(e);
});
function Vb(e) {
  return am.call(
    this,
    e,
    this.week(),
    this.weekday(),
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function Wb(e) {
  return am.call(
    this,
    e,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function Xb() {
  return Zn(this.year(), 1, 4);
}
function Kb() {
  return Zn(this.isoWeekYear(), 1, 4);
}
function Yb() {
  var e = this.localeData()._week;
  return Zn(this.year(), e.dow, e.doy);
}
function $b() {
  var e = this.localeData()._week;
  return Zn(this.weekYear(), e.dow, e.doy);
}
function am(e, n, t, r, o) {
  var i;
  return e == null ? _o(this, r, o).year : (i = Zn(e, r, o), n > i && (n = i), zb.call(this, e, n, t, r, o));
}
function zb(e, n, t, r, o) {
  var i = Bh(e, n, t, r, o), s = uo(i.year, 0, i.dayOfYear);
  return this.year(s.getUTCFullYear()), this.month(s.getUTCMonth()), this.date(s.getUTCDate()), this;
}
L("Q", 0, "Qo", "quarter");
We("quarter", "Q");
Xe("quarter", 7);
H("Q", Dh);
Te("Q", function(e, n) {
  n[$n] = (Q(e) - 1) * 3;
});
function Jb(e) {
  return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3);
}
L("D", ["DD", 2], "Do", "date");
We("date", "D");
Xe("date", 9);
H("D", be);
H("DD", be, an);
H("Do", function(e, n) {
  return e ? n._dayOfMonthOrdinalParse || n._ordinalParse : n._dayOfMonthOrdinalParseLenient;
});
Te(["D", "DD"], Un);
Te("Do", function(e, n) {
  n[Un] = Q(e.match(be)[0]);
});
var um = Nr("Date", !0);
L("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
We("dayOfYear", "DDD");
Xe("dayOfYear", 4);
H("DDD", gs);
H("DDDD", yh);
Te(["DDD", "DDDD"], function(e, n, t) {
  t._dayOfYear = Q(e);
});
function qb(e) {
  var n = Math.round(
    (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
  ) + 1;
  return e == null ? n : this.add(e - n, "d");
}
L("m", ["mm", 2], 0, "minute");
We("minute", "m");
Xe("minute", 14);
H("m", be);
H("mm", be, an);
Te(["m", "mm"], bn);
var Qb = Nr("Minutes", !1);
L("s", ["ss", 2], 0, "second");
We("second", "s");
Xe("second", 15);
H("s", be);
H("ss", be, an);
Te(["s", "ss"], zn);
var Zb = Nr("Seconds", !1);
L("S", 0, 0, function() {
  return ~~(this.millisecond() / 100);
});
L(0, ["SS", 2], 0, function() {
  return ~~(this.millisecond() / 10);
});
L(0, ["SSS", 3], 0, "millisecond");
L(0, ["SSSS", 4], 0, function() {
  return this.millisecond() * 10;
});
L(0, ["SSSSS", 5], 0, function() {
  return this.millisecond() * 100;
});
L(0, ["SSSSSS", 6], 0, function() {
  return this.millisecond() * 1e3;
});
L(0, ["SSSSSSS", 7], 0, function() {
  return this.millisecond() * 1e4;
});
L(0, ["SSSSSSSS", 8], 0, function() {
  return this.millisecond() * 1e5;
});
L(0, ["SSSSSSSSS", 9], 0, function() {
  return this.millisecond() * 1e6;
});
We("millisecond", "ms");
Xe("millisecond", 16);
H("S", gs, Dh);
H("SS", gs, an);
H("SSS", gs, yh);
var Et, _m;
for (Et = "SSSS"; Et.length <= 9; Et += "S")
  H(Et, Ir);
function eg(e, n) {
  n[Pt] = Q(("0." + e) * 1e3);
}
for (Et = "S"; Et.length <= 9; Et += "S")
  Te(Et, eg);
_m = Nr("Milliseconds", !1);
L("z", 0, 0, "zoneAbbr");
L("zz", 0, 0, "zoneName");
function ng() {
  return this._isUTC ? "UTC" : "";
}
function tg() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var S = Bo.prototype;
S.add = $R;
S.calendar = nb;
S.clone = tb;
S.diff = _b;
S.endOf = Ob;
S.format = hb;
S.from = mb;
S.fromNow = fb;
S.to = pb;
S.toNow = Tb;
S.get = o0;
S.invalidAt = vb;
S.isAfter = rb;
S.isBefore = ob;
S.isBetween = ib;
S.isSame = sb;
S.isSameOrAfter = ab;
S.isSameOrBefore = ub;
S.isValid = Sb;
S.lang = tm;
S.locale = nm;
S.localeData = rm;
S.max = SR;
S.min = AR;
S.parsingFlags = Gb;
S.set = i0;
S.startOf = Eb;
S.subtract = zR;
S.toArray = Nb;
S.toObject = Ib;
S.toDate = gb;
S.toISOString = cb;
S.inspect = db;
typeof Symbol < "u" && Symbol.for != null && (S[Symbol.for("nodejs.util.inspect.custom")] = function() {
  return "Moment<" + this.format() + ">";
});
S.toJSON = Ab;
S.toString = lb;
S.unix = bb;
S.valueOf = Rb;
S.creationData = Cb;
S.eraName = Hb;
S.eraNarrow = wb;
S.eraAbbr = Pb;
S.eraYear = Mb;
S.year = Lh;
S.isLeapYear = I0;
S.weekYear = Vb;
S.isoWeekYear = Wb;
S.quarter = S.quarters = Jb;
S.month = kh;
S.daysInMonth = b0;
S.week = S.weeks = D0;
S.isoWeek = S.isoWeeks = y0;
S.weeksInYear = Yb;
S.weeksInWeekYear = $b;
S.isoWeeksInYear = Xb;
S.isoWeeksInISOWeekYear = Kb;
S.date = um;
S.day = S.days = W0;
S.weekday = X0;
S.isoWeekday = K0;
S.dayOfYear = qb;
S.hour = S.hours = Z0;
S.minute = S.minutes = Qb;
S.second = S.seconds = Zb;
S.millisecond = S.milliseconds = _m;
S.utcOffset = PR;
S.utc = kR;
S.local = xR;
S.parseZone = LR;
S.hasAlignedHourOffset = BR;
S.isDST = jR;
S.isLocal = VR;
S.isUtcOffset = WR;
S.isUtc = qh;
S.isUTC = qh;
S.zoneAbbr = ng;
S.zoneName = tg;
S.dates = Tn(
  "dates accessor is deprecated. Use date instead.",
  um
);
S.months = Tn(
  "months accessor is deprecated. Use month instead",
  kh
);
S.years = Tn(
  "years accessor is deprecated. Use year instead",
  Lh
);
S.zone = Tn(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  MR
);
S.isDSTShifted = Tn(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  FR
);
function rg(e) {
  return Re(e * 1e3);
}
function og() {
  return Re.apply(null, arguments).parseZone();
}
function lm(e) {
  return e;
}
var _e = ku.prototype;
_e.calendar = W1;
_e.longDateFormat = $1;
_e.invalidDate = J1;
_e.ordinal = Z1;
_e.preparse = lm;
_e.postformat = lm;
_e.relativeTime = n0;
_e.pastFuture = t0;
_e.set = F1;
_e.eras = Db;
_e.erasParse = yb;
_e.erasConvertYear = Ub;
_e.erasAbbrRegex = xb;
_e.erasNameRegex = kb;
_e.erasNarrowRegex = Lb;
_e.months = T0;
_e.monthsShort = E0;
_e.monthsParse = R0;
_e.monthsRegex = N0;
_e.monthsShortRegex = g0;
_e.week = S0;
_e.firstDayOfYear = C0;
_e.firstDayOfWeek = v0;
_e.weekdays = L0;
_e.weekdaysMin = j0;
_e.weekdaysShort = B0;
_e.weekdaysParse = V0;
_e.weekdaysRegex = Y0;
_e.weekdaysShortRegex = $0;
_e.weekdaysMinRegex = z0;
_e.isPM = q0;
_e.meridiem = eR;
function Qi(e, n, t, r) {
  var o = it(), i = jn().set(r, n);
  return o[t](i, e);
}
function cm(e, n, t) {
  if (tt(e) && (n = e, e = void 0), e = e || "", n != null)
    return Qi(e, n, t, "month");
  var r, o = [];
  for (r = 0; r < 12; r++)
    o[r] = Qi(e, r, t, "month");
  return o;
}
function Zu(e, n, t, r) {
  typeof e == "boolean" ? (tt(n) && (t = n, n = void 0), n = n || "") : (n = e, t = n, e = !1, tt(n) && (t = n, n = void 0), n = n || "");
  var o = it(), i = e ? o._week.dow : 0, s, a = [];
  if (t != null)
    return Qi(n, (t + i) % 7, r, "day");
  for (s = 0; s < 7; s++)
    a[s] = Qi(n, (s + i) % 7, r, "day");
  return a;
}
function ig(e, n) {
  return cm(e, n, "months");
}
function sg(e, n) {
  return cm(e, n, "monthsShort");
}
function ag(e, n, t) {
  return Zu(e, n, t, "weekdays");
}
function ug(e, n, t) {
  return Zu(e, n, t, "weekdaysShort");
}
function _g(e, n, t) {
  return Zu(e, n, t, "weekdaysMin");
}
Nt("en", {
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
y.lang = Tn(
  "moment.lang is deprecated. Use moment.locale instead.",
  Nt
);
y.langData = Tn(
  "moment.langData is deprecated. Use moment.localeData instead.",
  it
);
var Vn = Math.abs;
function lg() {
  var e = this._data;
  return this._milliseconds = Vn(this._milliseconds), this._days = Vn(this._days), this._months = Vn(this._months), e.milliseconds = Vn(e.milliseconds), e.seconds = Vn(e.seconds), e.minutes = Vn(e.minutes), e.hours = Vn(e.hours), e.months = Vn(e.months), e.years = Vn(e.years), this;
}
function dm(e, n, t, r) {
  var o = Dn(n, t);
  return e._milliseconds += r * o._milliseconds, e._days += r * o._days, e._months += r * o._months, e._bubble();
}
function cg(e, n) {
  return dm(this, e, n, 1);
}
function dg(e, n) {
  return dm(this, e, n, -1);
}
function Il(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function hg() {
  var e = this._milliseconds, n = this._days, t = this._months, r = this._data, o, i, s, a, u;
  return e >= 0 && n >= 0 && t >= 0 || e <= 0 && n <= 0 && t <= 0 || (e += Il(Ja(t) + n) * 864e5, n = 0, t = 0), r.milliseconds = e % 1e3, o = un(e / 1e3), r.seconds = o % 60, i = un(o / 60), r.minutes = i % 60, s = un(i / 60), r.hours = s % 24, n += un(s / 24), u = un(hm(n)), t += u, n -= Il(Ja(u)), a = un(t / 12), t %= 12, r.days = n, r.months = t, r.years = a, this;
}
function hm(e) {
  return e * 4800 / 146097;
}
function Ja(e) {
  return e * 146097 / 4800;
}
function mg(e) {
  if (!this.isValid())
    return NaN;
  var n, t, r = this._milliseconds;
  if (e = En(e), e === "month" || e === "quarter" || e === "year")
    switch (n = this._days + r / 864e5, t = this._months + hm(n), e) {
      case "month":
        return t;
      case "quarter":
        return t / 3;
      case "year":
        return t / 12;
    }
  else
    switch (n = this._days + Math.round(Ja(this._months)), e) {
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
function fg() {
  return this.isValid() ? this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + Q(this._months / 12) * 31536e6 : NaN;
}
function st(e) {
  return function() {
    return this.as(e);
  };
}
var pg = st("ms"), Tg = st("s"), Eg = st("m"), Og = st("h"), Rg = st("d"), bg = st("w"), gg = st("M"), Ng = st("Q"), Ig = st("y");
function Ag() {
  return Dn(this);
}
function Sg(e) {
  return e = En(e), this.isValid() ? this[e + "s"]() : NaN;
}
function jt(e) {
  return function() {
    return this.isValid() ? this._data[e] : NaN;
  };
}
var Gg = jt("milliseconds"), vg = jt("seconds"), Cg = jt("minutes"), Dg = jt("hours"), yg = jt("days"), Ug = jt("months"), Hg = jt("years");
function wg() {
  return un(this.days() / 7);
}
var Wn = Math.round, Qt = {
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
function Pg(e, n, t, r, o) {
  return o.relativeTime(n || 1, !!t, e, r);
}
function Mg(e, n, t, r) {
  var o = Dn(e).abs(), i = Wn(o.as("s")), s = Wn(o.as("m")), a = Wn(o.as("h")), u = Wn(o.as("d")), _ = Wn(o.as("M")), c = Wn(o.as("w")), l = Wn(o.as("y")), f = i <= t.ss && ["s", i] || i < t.s && ["ss", i] || s <= 1 && ["m"] || s < t.m && ["mm", s] || a <= 1 && ["h"] || a < t.h && ["hh", a] || u <= 1 && ["d"] || u < t.d && ["dd", u];
  return t.w != null && (f = f || c <= 1 && ["w"] || c < t.w && ["ww", c]), f = f || _ <= 1 && ["M"] || _ < t.M && ["MM", _] || l <= 1 && ["y"] || ["yy", l], f[2] = n, f[3] = +e > 0, f[4] = r, Pg.apply(null, f);
}
function kg(e) {
  return e === void 0 ? Wn : typeof e == "function" ? (Wn = e, !0) : !1;
}
function xg(e, n) {
  return Qt[e] === void 0 ? !1 : n === void 0 ? Qt[e] : (Qt[e] = n, e === "s" && (Qt.ss = n - 1), !0);
}
function Lg(e, n) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var t = !1, r = Qt, o, i;
  return typeof e == "object" && (n = e, e = !1), typeof e == "boolean" && (t = e), typeof n == "object" && (r = Object.assign({}, Qt, n), n.s != null && n.ss == null && (r.ss = n.s - 1)), o = this.localeData(), i = Mg(this, !t, r, o), t && (i = o.pastFuture(+this, i)), o.postformat(i);
}
var _a = Math.abs;
function Vt(e) {
  return (e > 0) - (e < 0) || +e;
}
function Ds() {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var e = _a(this._milliseconds) / 1e3, n = _a(this._days), t = _a(this._months), r, o, i, s, a = this.asSeconds(), u, _, c, l;
  return a ? (r = un(e / 60), o = un(r / 60), e %= 60, r %= 60, i = un(t / 12), t %= 12, s = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", u = a < 0 ? "-" : "", _ = Vt(this._months) !== Vt(a) ? "-" : "", c = Vt(this._days) !== Vt(a) ? "-" : "", l = Vt(this._milliseconds) !== Vt(a) ? "-" : "", u + "P" + (i ? _ + i + "Y" : "") + (t ? _ + t + "M" : "") + (n ? c + n + "D" : "") + (o || r || e ? "T" : "") + (o ? l + o + "H" : "") + (r ? l + r + "M" : "") + (e ? l + s + "S" : "")) : "P0D";
}
var re = vs.prototype;
re.isValid = yR;
re.abs = lg;
re.add = cg;
re.subtract = dg;
re.as = mg;
re.asMilliseconds = pg;
re.asSeconds = Tg;
re.asMinutes = Eg;
re.asHours = Og;
re.asDays = Rg;
re.asWeeks = bg;
re.asMonths = gg;
re.asQuarters = Ng;
re.asYears = Ig;
re.valueOf = fg;
re._bubble = hg;
re.clone = Ag;
re.get = Sg;
re.milliseconds = Gg;
re.seconds = vg;
re.minutes = Cg;
re.hours = Dg;
re.days = yg;
re.weeks = wg;
re.months = Ug;
re.years = Hg;
re.humanize = Lg;
re.toISOString = Ds;
re.toString = Ds;
re.toJSON = Ds;
re.locale = nm;
re.localeData = rm;
re.toIsoString = Tn(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  Ds
);
re.lang = tm;
L("X", 0, 0, "unix");
L("x", 0, 0, "valueOf");
H("x", Is);
H("X", a0);
Te("X", function(e, n, t) {
  t._d = new Date(parseFloat(e) * 1e3);
});
Te("x", function(e, n, t) {
  t._d = new Date(Q(e));
});
//! moment.js
y.version = "2.29.4";
B1(Re);
y.fn = S;
y.min = GR;
y.max = vR;
y.now = CR;
y.utc = jn;
y.unix = rg;
y.months = ig;
y.isDate = Lo;
y.locale = Nt;
y.invalid = Os;
y.duration = Dn;
y.isMoment = Gn;
y.weekdays = ag;
y.parseZone = og;
y.localeData = it;
y.isDuration = Ii;
y.monthsShort = sg;
y.weekdaysMin = _g;
y.defineLocale = Xu;
y.updateLocale = oR;
y.locales = iR;
y.weekdaysShort = ug;
y.normalizeUnits = En;
y.relativeTimeRounding = kg;
y.relativeTimeThreshold = xg;
y.calendarFormat = eb;
y.prototype = S;
y.HTML5_FMT = {
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
class Bg {
  constructor(n) {
    rt(this), this.state = n, this.getters = n.getters, this.storage = n.storage;
  }
  addExecuteMessage(n) {
    const t = this.getters.getActiveTab();
    let r = n.output;
    n.error && (r = n.error.split("^")[1].split(".")[0]), this.state.executeMessages.push({
      message: r,
      isError: !!n.error,
      fileName: t.getLabel(),
      date: y().format("HH:mm")
    }), this.storage.set("EDITOR_EXECUTE_MESSAGES", this.state.executeMessages);
  }
  clearExecuteMessages() {
    this.state.executeMessages = [], this.storage.clear("EDITOR_EXECUTE_MESSAGES");
  }
}
const jg = (e) => {
  const { Spring: t, Gesture: r } = gr(), [{ y: o }, i] = t.useSpring(() => ({ y: 300 })), s = () => {
    i.start({ y: 0, immediate: !1, config: t.config.gentle });
  }, a = (l = 0) => {
    e(), i.start({ y: 300, immediate: !1, config: { ...t.config.stiff, velocity: l } });
  }, u = r.useDrag(
    ({ last: l, velocity: [, f], direction: [, T], offset: [, d], cancel: h }) => {
      d < -70 && h(), l ? d > 300 * 0.5 || f > 0.5 && T === 1 ? a(f) : s() : i.start({ y: d, immediate: T === -1 });
    },
    { from: () => [0, o.get()], filterTaps: !0, bounds: { top: 0 }, rubberband: !0 }
  ), _ = o.to((l) => l < 300 ? "block" : "none");
  return {
    toggle: (l) => {
      l ? s() : a();
    },
    open: s,
    close: a,
    bind: u,
    div: t.a.div,
    springs: {
      display: _,
      y: o
    },
    terminalHeight: 300
  };
}, Fg = [
  { label: "Terminal", key: "terminal" },
  { label: "Test cases", key: "test_cases" }
], Vg = () => {
  const e = Dt(), n = e.state.selectedTerminalTab, t = et((r) => {
    e.update({
      selectedTerminalTab: r
    });
  }, []);
  return {
    key: n,
    set: t,
    val: Fg
  };
}, Wg = (e) => {
  const { Spring: n } = gr(), [t, r] = n.useSpring(() => ({
    opacity: 1,
    x: 0
  }));
  return mc(e, () => ({
    close: async () => (r.start(
      { opacity: 0, x: -20, immediate: !1, config: n.config.wobbly }
    ), new Promise((o) => setTimeout(() => {
      r.start({ opacity: 1, x: 0, immediate: !1, config: n.config.wobbly }), o(!0);
    }, 300)))
  })), {
    ref: e,
    spring: t,
    SpringDiv: n.a.div
  };
}, Xg = Ee.div`
  color: ${Ve("light")};
  font-size: ${({ theme: e }) => e.fz7};
  margin-top: 4px;
  font-weight: normal;
  height: 200px;
  overflow-y: auto;
  overflow-x: hidden;
  ${Rh()};

  span:first-child {
    margin-top: 22px;
  }

`, Kg = Ee.span`
  color: ${Ve("light")};
  display: block;
  margin-top: 17px;
  cursor: pointer;
  font-size: ${({ theme: e }) => e.fz7};
  em {
    color: ${({ $isError: e }) => e ? "red" : Ve("light")};
    font-weight: bold;
    font-style: italic;
  }
`, Yg = ir(({ children: e }, n) => {
  const t = ee(null), r = () => {
    t.current?.scrollTo(0, t.current.scrollHeight);
  };
  return mc(n, () => ({
    scrollToBottom: () => {
      r(), setTimeout(r, 50);
    }
  })), /* @__PURE__ */ b(Xg, { ref: t, children: e });
}), $g = fn(ir((e, n) => {
  const t = ee(null), r = ee(null), { isTerminalOpened: o } = vT(), { executeMessages: i } = vn(), { spring: s, SpringDiv: a } = Wg(n), u = () => {
    r.current?.scrollIntoView({ behavior: "smooth" });
  };
  return Se(() => {
    t.current?.scrollToBottom();
  }, [i.length, o]), /* @__PURE__ */ Z(Yg, { ref: t, children: [
    "CodeGear output console.",
    /* @__PURE__ */ Z(a, { style: { ...s }, children: [
      i.map((_, c) => /* @__PURE__ */ Z(
        Kg,
        {
          $isError: _.isError,
          onClick: u,
          children: [
            "User [",
            _.fileName,
            "] [",
            _.date,
            "] >  ",
            /* @__PURE__ */ b("em", { children: _.message })
          ]
        },
        c
      )),
      /* @__PURE__ */ b("div", { ref: r })
    ] })
  ] });
})), zg = Ee.div`
  padding-left: 28px;
  z-index: 15;
  position: fixed;
  right: 0;
  height: calc(100vh + 100px);
  width: calc(100% - 54px);
  border-radius: 6px 6px 0;
  background: ${Ve("darkBlue")};
  border-top: 2px solid ${Ve("lightGrey")};
  touch-action: none;
  bottom: ${({ $bottom: e }) => `calc(-100vh + ${e - 100}px)`};
  overflow-y: auto;
  box-sizing: border-box;
  user-select: none;
`, Jg = Ee.div`
  ${bh({
  right: "44px",
  top: "23px"
})}
  ${yt("flex-end")};
  gap: 23px;
  ${Fe("100px", "22px")};
  cursor: pointer;
  svg {
    path {
      stroke: ${Ve("secondaryGrey")};
      ${({ theme: e }) => Va(e.light)};
    }
    ${Fe("22px")}
    color: ${Ve("secondaryGrey")};
    ${({ theme: e }) => Va(e.light)}
  }
`, qg = Ee(dc)`
  ${G1(0, 6)};

  .ant-tabs-nav::before{
    border-bottom: none;
  }
  .ant-tabs-tab-active div{
    color: ${gi("light")};
  }
  .ant-tabs-tab:hover, .ant-tabs-tab:active{
    color: ${Ve("light")};
  }
  .ant-tabs-ink-bar{
    background: ${Ve("light")};
  }
  .ant-tabs-tab {
    padding: 7px 0 !important;
  }

  font-size: ${({ theme: e }) => e.fz6};
`;
var mm = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, Al = ve.createContext && ve.createContext(mm), It = globalThis && globalThis.__assign || function() {
  return It = Object.assign || function(e) {
    for (var n, t = 1, r = arguments.length; t < r; t++) {
      n = arguments[t];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
    }
    return e;
  }, It.apply(this, arguments);
}, Qg = globalThis && globalThis.__rest || function(e, n) {
  var t = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (t[r[o]] = e[r[o]]);
  return t;
};
function fm(e) {
  return e && e.map(function(n, t) {
    return ve.createElement(n.tag, It({
      key: t
    }, n.attr), fm(n.child));
  });
}
function at(e) {
  return function(n) {
    return ve.createElement(Zg, It({
      attr: It({}, e.attr)
    }, n), fm(e.child));
  };
}
function Zg(e) {
  var n = function(t) {
    var r = e.attr, o = e.size, i = e.title, s = Qg(e, ["attr", "size", "title"]), a = o || t.size || "1em", u;
    return t.className && (u = t.className), e.className && (u = (u ? u + " " : "") + e.className), ve.createElement("svg", It({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, t.attr, r, s, {
      className: u,
      style: It(It({
        color: e.color || t.color
      }, t.style), e.style),
      height: a,
      width: a,
      xmlns: "http://www.w3.org/2000/svg"
    }), i && ve.createElement("title", null, i), e.children);
  };
  return Al !== void 0 ? ve.createElement(Al.Consumer, null, function(t) {
    return n(t);
  }) : n(mm);
}
function eN(e) {
  return at({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" } }] })(e);
}
function nN(e) {
  return at({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { d: "M5 0h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2 2 2 0 0 1-2 2H3a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1H1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1H3a2 2 0 0 1 2-2z" } }, { tag: "path", attr: { d: "M1 6v-.5a.5.5 0 0 1 1 0V6h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V9h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 2.5v.5H.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H2v-.5a.5.5 0 0 0-1 0z" } }] })(e);
}
function tN(e) {
  return at({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { d: "M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" } }] })(e);
}
function rN(e) {
  return at({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M9.25 12a.75.75 0 0 1-.22.53l-2.75 2.75a.75.75 0 0 1-1.06-1.06L7.44 12 5.22 9.78a.75.75 0 1 1 1.06-1.06l2.75 2.75c.141.14.22.331.22.53Zm2 2a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5h-5Z" } }, { tag: "path", attr: { d: "M0 4.75C0 3.784.784 3 1.75 3h20.5c.966 0 1.75.784 1.75 1.75v14.5A1.75 1.75 0 0 1 22.25 21H1.75A1.75 1.75 0 0 1 0 19.25Zm1.75-.25a.25.25 0 0 0-.25.25v14.5c0 .138.112.25.25.25h20.5a.25.25 0 0 0 .25-.25V4.75a.25.25 0 0 0-.25-.25Z" } }] })(e);
}
function oN(e) {
  return at({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", stroke: "#000", strokeWidth: "2", d: "M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M5,5 L19,19" } }] })(e);
}
function iN(e) {
  return at({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01v0a2.83 2.83 0 0 1 0-4L17 3" } }, { tag: "path", attr: { d: "m16 2 6 6" } }, { tag: "path", attr: { d: "M12 16H4" } }] })(e);
}
function sN(e) {
  return at({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M576 736l-32-.001v-286c0-.336-.096-.656-.096-1.008s.096-.655.096-.991c0-17.664-14.336-32-32-32h-64c-17.664 0-32 14.336-32 32s14.336 32 32 32h32v256h-32c-17.664 0-32 14.336-32 32s14.336 32 32 32h128c17.664 0 32-14.336 32-32s-14.336-32-32-32zm-64-384.001c35.344 0 64-28.656 64-64s-28.656-64-64-64-64 28.656-64 64 28.656 64 64 64zm0-352c-282.768 0-512 229.232-512 512 0 282.784 229.232 512 512 512 282.784 0 512-229.216 512-512 0-282.768-229.216-512-512-512zm0 961.008c-247.024 0-448-201.984-448-449.01 0-247.024 200.976-448 448-448s448 200.977 448 448-200.976 449.01-448 449.01z" } }] })(e);
}
function aN(e) {
  return at({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M685.904 383.184l275.264-273.572-.896 155.072c-.289 12.928 9.967 24.176 22.912 23.888l16.416-.016c12.944-.304 23.648-8 23.92-20.928l.672-231.008c0-.223-.88-.399-.88-.623l1.264-11.712c.128-6.496-1.391-12.288-5.584-16.431-4.143-4.176-9.951-6.72-16.4-6.544l-11.696.272c-.223 0-.399.08-.64.113L760.77.687c-12.928.288-23.632 10.976-23.92 23.92l-.032 16.417c1.967 15.248 13.952 24.16 26.88 23.872l151.248.4L640.657 337.92c-12.496 12.496-12.496 32.752 0 45.264 12.496 12.48 32.752 12.48 45.247 0zM339.088 640.812L63.825 913.532l.88-154.224c.304-12.944-9.969-24.192-22.897-23.904l-17.423.032c-12.96.32-23.649 8-23.921 20.944l-.672 231.008c0 .224.88.367.88.623l-1.264 11.68c-.144 6.496 1.376 12.32 5.584 16.433 4.128 4.192 9.952 6.72 16.384 6.56l11.712-.288c.223 0 .383-.096.64-.096l230.495 1.008c12.928-.32 23.617-11.009 23.92-23.936l.032-16.432c-1.967-15.216-13.952-24.16-26.88-23.872l-151.247-.4L384.32 686.076c12.496-12.497 12.496-32.752 0-45.248s-32.737-12.512-45.233-.016zm685.122 346.56l-.672-231.01c-.288-12.944-10.992-20.624-23.92-20.944l-16.416-.032c-12.944-.289-23.184 10.975-22.912 23.903l.896 155.072-275.28-273.552c-12.496-12.496-32.752-12.496-45.248 0s-12.496 32.752 0 45.248L914.93 958.649l-151.232.4c-12.928-.288-24.912 8.657-26.88 23.872l.032 16.432c.304 12.944 11.008 23.633 23.92 23.936l229.504-1.007c.24 0 .416.095.64.095l11.696.288c6.448.16 12.272-2.368 16.4-6.56 4.193-4.128 5.696-9.936 5.584-16.432l-1.263-11.68c0-.255.88-.399.88-.622zM110.049 65.321l151.264-.397c12.928.288 24.912-8.64 26.88-23.873l-.032-16.431C287.84 11.677 277.15.972 264.24.7l-230.512.992c-.256-.032-.416-.112-.64-.112l-11.712-.273C14.945 1.132 9.105 3.676 4.992 7.851.784 11.995-.735 17.787-.592 24.283L.672 35.995c0 .223-.88.384-.88.624l.672 231.008c.288 12.928 10.977 20.624 23.921 20.928l17.424.015c12.928.288 23.183-10.96 22.895-23.888l-.88-154.224 275.264 272.72c12.48 12.497 32.753 12.497 45.25 0s12.496-32.768 0-45.264z" } }] })(e);
}
function uN(e) {
  return at({ tag: "svg", attr: { version: "1.1", viewBox: "0 0 17 17" }, child: [{ tag: "g", attr: {}, child: [] }, { tag: "path", attr: { d: "M8.5 5.972c-1.378 0-2.5 1.122-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.122 2.5-2.5-1.122-2.5-2.5-2.5zM8.5 9.972c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5 1.5 0.673 1.5 1.5-0.673 1.5-1.5 1.5zM16.94 9.446c0.037-0.321 0.060-0.645 0.060-0.974s-0.023-0.653-0.060-0.974l-2.588-0.778c-0.119-0.402-0.278-0.787-0.474-1.149l1.279-2.377c-0.406-0.51-0.869-0.973-1.38-1.38l-2.377 1.28c-0.363-0.196-0.748-0.354-1.15-0.474l-0.776-2.588c-0.32-0.037-0.644-0.060-0.974-0.060s-0.654 0.023-0.974 0.060l-0.776 2.588c-0.403 0.119-0.789 0.278-1.15 0.475l-2.377-1.28c-0.511 0.406-0.974 0.869-1.379 1.38l1.279 2.375c-0.196 0.362-0.354 0.748-0.474 1.15l-2.589 0.778c-0.037 0.32-0.060 0.644-0.060 0.974s0.023 0.654 0.060 0.974l2.588 0.776c0.12 0.403 0.278 0.789 0.474 1.151l-1.279 2.376c0.406 0.511 0.869 0.974 1.38 1.38l2.377-1.279c0.362 0.196 0.748 0.354 1.15 0.474l0.776 2.588c0.321 0.037 0.645 0.060 0.974 0.060s0.654-0.023 0.974-0.060l0.776-2.588c0.402-0.12 0.788-0.278 1.15-0.474l2.376 1.279c0.511-0.407 0.974-0.87 1.38-1.381l-1.278-2.376c0.196-0.362 0.354-0.748 0.474-1.15l2.588-0.776zM13.548 9.419l-0.154 0.518c-0.1 0.337-0.233 0.66-0.396 0.959l-0.256 0.475 0.255 0.475 0.952 1.77c-0.099 0.105-0.201 0.207-0.306 0.306l-2.243-1.209-0.475 0.256c-0.301 0.163-0.624 0.295-0.96 0.396l-0.518 0.154-0.155 0.518-0.579 1.932c-0.072 0.002-0.143 0.003-0.213 0.003s-0.141-0.001-0.213-0.003l-0.579-1.932-0.155-0.518-0.518-0.154c-0.336-0.1-0.659-0.233-0.959-0.396l-0.475-0.256-2.245 1.207c-0.104-0.099-0.207-0.201-0.306-0.306l1.208-2.244-0.256-0.475c-0.162-0.3-0.295-0.623-0.396-0.96l-0.153-0.517-2.449-0.734c-0.003-0.072-0.004-0.143-0.004-0.212 0-0.070 0.001-0.141 0.004-0.213l2.448-0.734 0.154-0.518c0.1-0.337 0.233-0.66 0.396-0.959l0.256-0.475-1.208-2.245c0.099-0.104 0.201-0.207 0.305-0.306l2.247 1.21 0.476-0.259c0.297-0.162 0.619-0.295 0.956-0.395l0.518-0.154 0.155-0.518 0.579-1.932c0.073-0.001 0.144-0.002 0.214-0.002s0.141 0.001 0.213 0.003l0.579 1.932 0.155 0.518 0.518 0.154c0.335 0.1 0.659 0.233 0.96 0.396l0.475 0.255 2.244-1.208c0.104 0.099 0.207 0.201 0.306 0.306l-0.953 1.77-0.255 0.475 0.257 0.475c0.163 0.3 0.295 0.622 0.395 0.957l0.154 0.518 0.518 0.155 1.932 0.581c0.001 0.072 0.002 0.143 0.002 0.213s-0.001 0.141-0.004 0.213l-2.448 0.734z" } }] })(e);
}
const _N = fn(() => {
  const e = Dt(), { isTerminalOpened: n } = e.state, t = Vg(), r = pn(), o = ee(), i = (_) => {
    t.set(_);
  }, s = et(() => {
    e.update({ isTerminalOpened: !1 });
  }, []), a = async () => {
    await o.current?.close(), r.terminal.clearExecuteMessages();
  }, u = jg(s);
  return Se(() => {
    u.toggle(n);
  }, [n]), /* @__PURE__ */ Z(
    zg,
    {
      $bottom: u.terminalHeight,
      ...u.bind(),
      style: u.springs,
      as: u.div,
      children: [
        /* @__PURE__ */ b(
          qg,
          {
            items: t.val,
            size: "large",
            onChange: i,
            activeKey: t.key
          }
        ),
        /* @__PURE__ */ b(so, { when: t.key === "terminal", children: /* @__PURE__ */ b($g, { ref: o }) }),
        /* @__PURE__ */ b(so, { when: t.key === "test_cases", children: "test cases" }),
        /* @__PURE__ */ Z(Jg, { children: [
          /* @__PURE__ */ b(oN, { onClick: a }),
          /* @__PURE__ */ b(eN, { onClick: s })
        ] })
      ]
    }
  );
}), lN = () => /* @__PURE__ */ b(ko, { children: /* @__PURE__ */ b(_N, {}) });
function cN(e, n, t) {
  return n in e ? Object.defineProperty(e, n, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[n] = t, e;
}
function Sl(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    n && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function Gl(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? Sl(Object(t), !0).forEach(function(r) {
      cN(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Sl(Object(t)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function dN(e, n) {
  if (e == null)
    return {};
  var t = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(n.indexOf(o) >= 0) && (t[o] = e[o]);
  return t;
}
function hN(e, n) {
  if (e == null)
    return {};
  var t = dN(e, n), r, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      r = i[o], !(n.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (t[r] = e[r]);
  }
  return t;
}
function mN(e, n) {
  return fN(e) || pN(e, n) || TN(e, n) || EN();
}
function fN(e) {
  if (Array.isArray(e))
    return e;
}
function pN(e, n) {
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
function TN(e, n) {
  if (e) {
    if (typeof e == "string")
      return vl(e, n);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set")
      return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return vl(e, n);
  }
}
function vl(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var t = 0, r = new Array(n); t < n; t++)
    r[t] = e[t];
  return r;
}
function EN() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ON(e, n, t) {
  return n in e ? Object.defineProperty(e, n, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[n] = t, e;
}
function Cl(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    n && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function Dl(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? Cl(Object(t), !0).forEach(function(r) {
      ON(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Cl(Object(t)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function RN() {
  for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
    n[t] = arguments[t];
  return function(r) {
    return n.reduceRight(function(o, i) {
      return i(o);
    }, r);
  };
}
function Br(e) {
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
function Zi(e) {
  return {}.toString.call(e).includes("Object");
}
function bN(e) {
  return !Object.keys(e).length;
}
function co(e) {
  return typeof e == "function";
}
function gN(e, n) {
  return Object.prototype.hasOwnProperty.call(e, n);
}
function NN(e, n) {
  return Zi(n) || At("changeType"), Object.keys(n).some(function(t) {
    return !gN(e, t);
  }) && At("changeField"), n;
}
function IN(e) {
  co(e) || At("selectorType");
}
function AN(e) {
  co(e) || Zi(e) || At("handlerType"), Zi(e) && Object.values(e).some(function(n) {
    return !co(n);
  }) && At("handlersType");
}
function SN(e) {
  e || At("initialIsRequired"), Zi(e) || At("initialType"), bN(e) && At("initialContent");
}
function GN(e, n) {
  throw new Error(e[n] || e.default);
}
var vN = {
  initialIsRequired: "initial state is required",
  initialType: "initial state should be an object",
  initialContent: "initial state shouldn't be an empty object",
  handlerType: "handler should be an object or a function",
  handlersType: "all handlers should be a functions",
  selectorType: "selector should be a function",
  changeType: "provided value of changes should be an object",
  changeField: 'it seams you want to change a field in the state which is not specified in the "initial" state',
  default: "an unknown error accured in `state-local` package"
}, At = Br(GN)(vN), ri = {
  changes: NN,
  selector: IN,
  handler: AN,
  initial: SN
};
function CN(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  ri.initial(e), ri.handler(n);
  var t = {
    current: e
  }, r = Br(UN)(t, n), o = Br(yN)(t), i = Br(ri.changes)(e), s = Br(DN)(t);
  function a() {
    var _ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function(c) {
      return c;
    };
    return ri.selector(_), _(t.current);
  }
  function u(_) {
    RN(r, o, i, s)(_);
  }
  return [a, u];
}
function DN(e, n) {
  return co(n) ? n(e.current) : n;
}
function yN(e, n) {
  return e.current = Dl(Dl({}, e.current), n), n;
}
function UN(e, n, t) {
  return co(n) ? n(e.current) : Object.keys(t).forEach(function(r) {
    var o;
    return (o = n[r]) === null || o === void 0 ? void 0 : o.call(n, e.current[r]);
  }), t;
}
var HN = {
  create: CN
}, wN = {
  paths: {
    vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.36.1/min/vs"
  }
};
function PN(e) {
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
function MN(e) {
  return {}.toString.call(e).includes("Object");
}
function kN(e) {
  return e || yl("configIsRequired"), MN(e) || yl("configType"), e.urls ? (xN(), {
    paths: {
      vs: e.urls.monacoBase
    }
  }) : e;
}
function xN() {
  console.warn(pm.deprecation);
}
function LN(e, n) {
  throw new Error(e[n] || e.default);
}
var pm = {
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
}, yl = PN(LN)(pm), BN = {
  config: kN
}, jN = function() {
  for (var n = arguments.length, t = new Array(n), r = 0; r < n; r++)
    t[r] = arguments[r];
  return function(o) {
    return t.reduceRight(function(i, s) {
      return s(i);
    }, o);
  };
};
function Tm(e, n) {
  return Object.keys(n).forEach(function(t) {
    n[t] instanceof Object && e[t] && Object.assign(n[t], Tm(e[t], n[t]));
  }), Gl(Gl({}, e), n);
}
var FN = {
  type: "cancelation",
  msg: "operation is manually canceled"
};
function la(e) {
  var n = !1, t = new Promise(function(r, o) {
    e.then(function(i) {
      return n ? o(FN) : r(i);
    }), e.catch(o);
  });
  return t.cancel = function() {
    return n = !0;
  }, t;
}
var VN = HN.create({
  config: wN,
  isInitialized: !1,
  resolve: null,
  reject: null,
  monaco: null
}), Em = mN(VN, 2), Vo = Em[0], ys = Em[1];
function WN(e) {
  var n = BN.config(e), t = n.monaco, r = hN(n, ["monaco"]);
  ys(function(o) {
    return {
      config: Tm(o.config, r),
      monaco: t
    };
  });
}
function XN() {
  var e = Vo(function(n) {
    var t = n.monaco, r = n.isInitialized, o = n.resolve;
    return {
      monaco: t,
      isInitialized: r,
      resolve: o
    };
  });
  if (!e.isInitialized) {
    if (ys({
      isInitialized: !0
    }), e.monaco)
      return e.resolve(e.monaco), la(ca);
    if (window.monaco && window.monaco.editor)
      return Om(window.monaco), e.resolve(window.monaco), la(ca);
    jN(KN, $N)(zN);
  }
  return la(ca);
}
function KN(e) {
  return document.body.appendChild(e);
}
function YN(e) {
  var n = document.createElement("script");
  return e && (n.src = e), n;
}
function $N(e) {
  var n = Vo(function(r) {
    var o = r.config, i = r.reject;
    return {
      config: o,
      reject: i
    };
  }), t = YN("".concat(n.config.paths.vs, "/loader.js"));
  return t.onload = function() {
    return e();
  }, t.onerror = n.reject, t;
}
function zN() {
  var e = Vo(function(t) {
    var r = t.config, o = t.resolve, i = t.reject;
    return {
      config: r,
      resolve: o,
      reject: i
    };
  }), n = window.require;
  n.config(e.config), n(["vs/editor/editor.main"], function(t) {
    Om(t), e.resolve(t);
  }, function(t) {
    e.reject(t);
  });
}
function Om(e) {
  Vo().monaco || ys({
    monaco: e
  });
}
function JN() {
  return Vo(function(e) {
    var n = e.monaco;
    return n;
  });
}
var ca = new Promise(function(e, n) {
  return ys({
    resolve: e,
    reject: n
  });
}), es = {
  config: WN,
  init: XN,
  __getMonacoInstance: JN
}, qN = { wrapper: { display: "flex", position: "relative", textAlign: "initial" }, fullWidth: { width: "100%" }, hide: { display: "none" } }, da = qN, QN = { container: { display: "flex", height: "100%", width: "100%", justifyContent: "center", alignItems: "center" } }, ZN = QN;
function eI({ children: e }) {
  return ve.createElement("div", { style: ZN.container }, e);
}
var nI = eI, tI = nI;
function rI({ width: e, height: n, isEditorReady: t, loading: r, _ref: o, className: i, wrapperProps: s }) {
  return ve.createElement("section", { style: { ...da.wrapper, width: e, height: n }, ...s }, !t && ve.createElement(tI, null, r), ve.createElement("div", { ref: o, style: { ...da.fullWidth, ...!t && da.hide }, className: i }));
}
var oI = rI, Rm = sr(oI);
function iI(e) {
  Se(e, []);
}
var e_ = iI;
function sI(e, n, t = !0) {
  let r = ee(!0);
  Se(r.current || !t ? () => {
    r.current = !1;
  } : e, n);
}
var rn = sI;
function Yr() {
}
function Zt(e, n, t, r) {
  return aI(e, r) || uI(e, n, t, r);
}
function aI(e, n) {
  return e.editor.getModel(bm(e, n));
}
function uI(e, n, t, r) {
  return e.editor.createModel(n, t, r ? bm(e, r) : void 0);
}
function bm(e, n) {
  return e.Uri.parse(n);
}
function _I({ original: e, modified: n, language: t, originalLanguage: r, modifiedLanguage: o, originalModelPath: i, modifiedModelPath: s, keepCurrentOriginalModel: a = !1, keepCurrentModifiedModel: u = !1, theme: _ = "light", loading: c = "Loading...", options: l = {}, height: f = "100%", width: T = "100%", className: d, wrapperProps: h = {}, beforeMount: m = Yr, onMount: O = Yr }) {
  let [R, N] = ze(!1), [A, p] = ze(!0), w = ee(null), k = ee(null), Y = ee(null), M = ee(O), j = ee(m), Oe = ee(!1);
  e_(() => {
    let C = es.init();
    return C.then((q) => (k.current = q) && p(!1)).catch((q) => q?.type !== "cancelation" && console.error("Monaco initialization: error:", q)), () => w.current ? x() : C.cancel();
  }), rn(() => {
    let C = w.current.getModifiedEditor();
    C.getOption(k.current.editor.EditorOption.readOnly) ? C.setValue(n || "") : n !== C.getValue() && (C.executeEdits("", [{ range: C.getModel().getFullModelRange(), text: n || "", forceMoveMarkers: !0 }]), C.pushUndoStop());
  }, [n], R), rn(() => {
    w.current?.getModel()?.original.setValue(e || "");
  }, [e], R), rn(() => {
    let { original: C, modified: q } = w.current.getModel();
    k.current.editor.setModelLanguage(C, r || t || "text"), k.current.editor.setModelLanguage(q, o || t || "text");
  }, [t, r, o], R), rn(() => {
    k.current?.editor.setTheme(_);
  }, [_], R), rn(() => {
    w.current?.updateOptions(l);
  }, [l], R);
  let pe = et(() => {
    if (!k.current)
      return;
    j.current(k.current);
    let C = Zt(k.current, e || "", r || t || "text", i || ""), q = Zt(k.current, n || "", o || t || "text", s || "");
    w.current?.setModel({ original: C, modified: q });
  }, [t, n, o, e, r, i, s]), Ne = et(() => {
    !Oe.current && Y.current && (w.current = k.current.editor.createDiffEditor(Y.current, { automaticLayout: !0, ...l }), pe(), k.current?.editor.setTheme(_), N(!0), Oe.current = !0);
  }, [l, _, pe]);
  Se(() => {
    R && M.current(w.current, k.current);
  }, [R]), Se(() => {
    !A && !R && Ne();
  }, [A, R, Ne]), rn(() => {
    if (w.current && k.current) {
      let C = w.current.getOriginalEditor(), q = Zt(k.current, e || "", r || t || "text", i || "");
      q !== C.getModel() && C.setModel(q);
    }
  }, [i], R), rn(() => {
    if (w.current && k.current) {
      let C = w.current.getModifiedEditor(), q = Zt(k.current, n || "", o || t || "text", s || "");
      q !== C.getModel() && C.setModel(q);
    }
  }, [s], R);
  function x() {
    let C = w.current?.getModel();
    a || C?.original?.dispose(), u || C?.modified?.dispose(), w.current?.dispose();
  }
  return ve.createElement(Rm, { width: T, height: f, isEditorReady: R, loading: c, _ref: Y, className: d, wrapperProps: h });
}
var lI = _I;
sr(lI);
function cI() {
  let [e, n] = ze(es.__getMonacoInstance());
  return e_(() => {
    let t;
    return e || (t = es.init(), t.then((r) => {
      n(r);
    })), () => t?.cancel();
  }), e;
}
var Us = cI;
function dI(e) {
  let n = ee();
  return Se(() => {
    n.current = e;
  }, [e]), n.current;
}
var hI = dI, oi = /* @__PURE__ */ new Map();
function mI({ defaultValue: e, defaultLanguage: n, defaultPath: t, value: r, language: o, path: i, theme: s = "light", line: a, loading: u = "Loading...", options: _ = {}, overrideServices: c = {}, saveViewState: l = !0, keepCurrentModel: f = !1, width: T = "100%", height: d = "100%", className: h, wrapperProps: m = {}, beforeMount: O = Yr, onMount: R = Yr, onChange: N, onValidate: A = Yr }) {
  let [p, w] = ze(!1), [k, Y] = ze(!0), M = ee(null), j = ee(null), Oe = ee(null), pe = ee(R), Ne = ee(O), x = ee(), C = ee(r), q = hI(i), le = ee(!1), ne = ee(!1);
  e_(() => {
    let Ie = es.init();
    return Ie.then((D) => (M.current = D) && Y(!1)).catch((D) => D?.type !== "cancelation" && console.error("Monaco initialization: error:", D)), () => j.current ? we() : Ie.cancel();
  }), rn(() => {
    let Ie = Zt(M.current, e || r || "", n || o || "", i || t || "");
    Ie !== j.current?.getModel() && (l && oi.set(q, j.current?.saveViewState()), j.current?.setModel(Ie), l && j.current?.restoreViewState(oi.get(i)));
  }, [i], p), rn(() => {
    j.current?.updateOptions(_);
  }, [_], p), rn(() => {
    !j.current || r === void 0 || (j.current.getOption(M.current.editor.EditorOption.readOnly) ? j.current.setValue(r) : r !== j.current.getValue() && (ne.current = !0, j.current.executeEdits("", [{ range: j.current.getModel().getFullModelRange(), text: r, forceMoveMarkers: !0 }]), j.current.pushUndoStop(), ne.current = !1));
  }, [r], p), rn(() => {
    let Ie = j.current?.getModel();
    Ie && o && M.current?.editor.setModelLanguage(Ie, o);
  }, [o], p), rn(() => {
    a !== void 0 && j.current?.revealLine(a);
  }, [a], p), rn(() => {
    M.current?.editor.setTheme(s);
  }, [s], p);
  let Ge = et(() => {
    if (!(!Oe.current || !M.current) && !le.current) {
      Ne.current(M.current);
      let Ie = i || t, D = Zt(M.current, r || e || "", n || o || "", Ie || "");
      j.current = M.current?.editor.create(Oe.current, { model: D, automaticLayout: !0, ..._ }, c), l && j.current.restoreViewState(oi.get(Ie)), M.current.editor.setTheme(s), w(!0), le.current = !0;
    }
  }, [e, n, t, r, o, i, _, c, l, s]);
  Se(() => {
    p && pe.current(j.current, M.current);
  }, [p]), Se(() => {
    !k && !p && Ge();
  }, [k, p, Ge]), C.current = r, Se(() => {
    p && N && (x.current?.dispose(), x.current = j.current?.onDidChangeModelContent((Ie) => {
      ne.current || N(j.current.getValue(), Ie);
    }));
  }, [p, N]), Se(() => {
    if (p) {
      let Ie = M.current.editor.onDidChangeMarkers((D) => {
        let U = j.current.getModel()?.uri;
        if (U && D.find((P) => P.path === U.path)) {
          let P = M.current.editor.getModelMarkers({ resource: U });
          A?.(P);
        }
      });
      return () => {
        Ie?.dispose();
      };
    }
    return () => {
    };
  }, [p, A]);
  function we() {
    x.current?.dispose(), f ? l && oi.set(i, j.current.saveViewState()) : j.current.getModel()?.dispose(), j.current.dispose();
  }
  return ve.createElement(Rm, { width: T, height: d, isEditorReady: p, loading: u, _ref: Oe, className: h, wrapperProps: m });
}
var fI = mI, pI = sr(fI), TI = pI;
const EI = () => Us()?.editor.getEditors()[0], OI = () => {
  const e = EI();
  return {
    find: async () => {
      await e.getAction("actions.find")?.run();
    },
    replace: async () => {
      await e.getAction("editor.action.startFindReplaceAction")?.run();
    }
  };
}, RI = Ee.div`
  background: ${({ theme: e }) => e.grey};
  border-right: 2px solid ${({ theme: e }) => e.lightGrey};
  box-sizing: border-box;
  ${Fe("52px", "100%")};
  ${yt("space-between", "center", "column")};
  padding-bottom: 15px;
  z-index: 3;
`, ht = Ee.div`
  ${Fe("23px")}
  svg {
    ${Fe()}
    color: ${({ theme: e }) => e.secondaryGrey};
    ${({ theme: e }) => Va(e.light)}
  }
  transition: transform 200ms;
  &:hover {
    transform: scale(1.1);
  }
  margin-top: 20px;
  cursor: pointer;
  user-select: none;
`, bI = () => {
  const { Spring: e } = gr(), n = e.useSpring({
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
}, gI = () => {
  const e = eO(), n = Dt(), t = OI(), r = Od("isTerminalOpened"), { spring: o, animatedDiv: i } = bI(), s = () => {
    n.toggle("isSettingsOpened");
  };
  return /* @__PURE__ */ Z(RI, { as: i, style: o, children: [
    /* @__PURE__ */ Z("div", { children: [
      /* @__PURE__ */ b(ht, { onClick: t.find, children: /* @__PURE__ */ b(tN, {}) }),
      /* @__PURE__ */ b(ht, { onClick: t.replace, children: /* @__PURE__ */ b(nN, {}) }),
      /* @__PURE__ */ b(ht, { onClick: e, children: /* @__PURE__ */ b(aN, {}) }),
      /* @__PURE__ */ b(ht, { onClick: r("terminal"), children: /* @__PURE__ */ b(rN, {}) }),
      /* @__PURE__ */ b(ht, { onClick: r("test_cases"), children: /* @__PURE__ */ b(iN, {}) })
    ] }),
    /* @__PURE__ */ Z("div", { children: [
      /* @__PURE__ */ b(ht, { onClick: s, children: /* @__PURE__ */ b(uN, {}) }),
      /* @__PURE__ */ b(ht, { children: /* @__PURE__ */ b(pc, { to: Bd.ABOUT, children: /* @__PURE__ */ b(sN, {}) }) })
    ] })
  ] });
}, NI = () => /* @__PURE__ */ b(ko, { children: /* @__PURE__ */ b(gI, {}) });
class II {
  constructor(n) {
    rt(this), this.state = n, this.getters = n.getters;
  }
  saveContent(n, t) {
    this.getters.getActiveTab(t).setTabContent(n);
  }
}
let ii;
const AI = new Uint8Array(16);
function SI() {
  if (!ii && (ii = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !ii))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return ii(AI);
}
const xe = [];
for (let e = 0; e < 256; ++e)
  xe.push((e + 256).toString(16).slice(1));
function GI(e, n = 0) {
  return (xe[e[n + 0]] + xe[e[n + 1]] + xe[e[n + 2]] + xe[e[n + 3]] + "-" + xe[e[n + 4]] + xe[e[n + 5]] + "-" + xe[e[n + 6]] + xe[e[n + 7]] + "-" + xe[e[n + 8]] + xe[e[n + 9]] + "-" + xe[e[n + 10]] + xe[e[n + 11]] + xe[e[n + 12]] + xe[e[n + 13]] + xe[e[n + 14]] + xe[e[n + 15]]).toLowerCase();
}
const vI = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Ul = {
  randomUUID: vI
};
function CI(e, n, t) {
  if (Ul.randomUUID && !n && !e)
    return Ul.randomUUID();
  e = e || {};
  const r = e.random || (e.rng || SI)();
  if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, n) {
    t = t || 0;
    for (let o = 0; o < 16; ++o)
      n[t + o] = r[o];
    return n;
  }
  return GI(r);
}
class gm {
  constructor({ lastNumber: n, fileData: t, instance: r }) {
    this._key = CI(), this._fileHandle = null, this._label = "Untitled", this._content = "", this.idx = 0, this.lang = "text", this.wasChanged = !1, rt(this), r ? this.initUsingInstance(r) : t && this.initUsingFileData(t), n && (this.idx = n + 1);
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
`)[0].slice(0, 10), r = `${n.replace(" ", "").replace(`
`, "").length > 1 ? n : "Untitled"} •`;
    this.wasChanged = !0, this.setLabel(r);
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
const DI = (e) => e.length >= Ed;
class yI {
  constructor(n) {
    rt(this), this.state = n;
  }
  createTab(n) {
    const t = this.state.content;
    if (DI(t))
      return;
    const r = t.at(-1)?.idx, o = new gm({ fileData: n, lastNumber: r });
    this.state.activeKey = o.getKeyId(), this.state.content.push(o);
  }
  removeTab(n) {
    const t = this.state.getters.getTabIndex(n), r = this.state.content[t - 1];
    this.state.content.splice(t, 1), n === this.state.activeKey && (this.state.activeKey = r.getKeyId());
  }
  changeActiveTab(n) {
    this.state.activeKey = n;
  }
}
const UI = () => {
  const [e, n] = ze(null);
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
}, HI = (e) => e.map((n) => ({
  label: n.getLabel(),
  key: n.getKeyId()
})), wI = Ee(dc)`
  color: ${gi("secondaryGrey")};
  height: 50px;
  margin: 12px;
  min-width: 300px;
  .ant-tabs-nav::before{
    border-bottom: none;
  }
  .ant-tabs-tab {
    background: ${gi("grey")};
  }
  .ant-tabs-tab-active {
    background: #2E3139 !important;
  }
  .ant-tabs-tab-btn{
    color: ${gi("secondaryGrey")};
  }
`, PI = fn(() => {
  const { activeKey: e, content: n } = vn(), t = pn(), r = HI(n), o = UI(), i = o.protect((u, _) => {
    _ === "add" ? t.tabs.createTab() : o.on(u);
  }), s = o.protect((u) => {
    t.tabs.changeActiveTab(u);
  });
  return /* @__PURE__ */ b(bo, { children: /* @__PURE__ */ b(
    Of,
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
      children: /* @__PURE__ */ b(
        wI,
        {
          type: "editable-card",
          onChange: s,
          activeKey: e,
          onEdit: i,
          items: od(r),
          hideAdd: n.length >= Ed
        }
      )
    }
  ) });
}), MI = [1, 2, 3, 4, 5, 6, 7, 8, 9], kI = () => {
  const e = jd(), { tabs: n } = pn(), { content: t } = vn();
  Se(() => (e.on(Object.fromEntries(MI.map((r) => {
    const i = t[r - 1]?.getKeyId();
    return [
      r.toString(),
      i ? () => n.changeActiveTab(i) : null
    ];
  }))), () => {
    e.clear();
  }), [t.length]);
}, xI = (e) => ka(e) ? "name" in e && typeof e.name == "string" && "type" in e && typeof e.type == "string" && "content" in e && typeof e.content == "string" : !1, Nm = (e) => {
  const n = e.split(".").at(-1);
  return LI(n) ? [bu[n], n] : ["text", n];
};
function LI(e) {
  return e in bu;
}
const Hs = {
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
}, BI = {
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
}, jI = () => async () => {
  if ("showOpenFilePicker" in window) {
    const [e] = await window.showOpenFilePicker(BI), n = await e.getFile(), t = await n.text(), [r] = Nm(n.name);
    return {
      name: n.name,
      type: n.type,
      content: t,
      fileHandle: e,
      language: r
    };
  }
  console.warn(Hs.NotSupportedByBrowser());
}, FI = () => async (e, n) => {
  try {
    let t = e;
    bO(e?.createWritable) || (t = await window.showSaveFilePicker());
    const r = await t.createWritable();
    return await r.write(n), await r.close(), t;
  } catch {
    console.warn(Hs.NotSupportedByBrowser());
  }
}, Im = () => {
  const e = jI(), n = FI(), t = pn(), r = Rr();
  return {
    openFile: et(async () => {
      const s = await e();
      xI(s) && t.tabs.createTab(s);
    }, []),
    saveFile: async () => {
      const s = r.getActiveTab(), a = s.getFileHandle(), u = s.getContent();
      if (!s.wasChanged)
        return;
      const _ = await n(a, u);
      _ && (s.setFileHandle(_), s.lang = Nm(_.name));
    }
  };
}, VI = () => {
  const e = pn(), n = jd(), { openFile: t, saveFile: r } = Im();
  kI();
  const o = Od("isTerminalOpened"), i = Dt(), s = et(() => {
    i.toggle("isSettingsOpened");
  }, [i]);
  Se(() => (n.on({
    [Ke.O]: t,
    [Ke.S]: r,
    [Ke.N]: () => {
      e.tabs.createTab();
    },
    [Ke.T]: () => {
      e.tabs.removeTab();
    },
    [Ke.P]: o("terminal"),
    [Ke.J]: o("test_cases"),
    [Ke.Q]: s
  }), () => {
    n.clear();
  }), [i.state.isSettingsOpened]);
}, WI = ({ fontSize: e, tabSize: n }) => ({
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
}), XI = fn(({ onChange: e }) => {
  const { fontSize: n, tabSize: t } = vn(), r = Rr(), o = r.getActiveTabText(), i = r.getActiveLanguage();
  return /* @__PURE__ */ b(
    TI,
    {
      height: "90vh",
      theme: "vs-dark",
      onChange: e,
      language: i,
      value: od(o),
      options: WI({
        fontSize: n,
        tabSize: t
      })
    }
  );
}), KI = ({ children: e }) => {
  const { Spring: n } = gr(), t = n.useSpring({
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
  return /* @__PURE__ */ b(n.a.div, { style: { ...t }, children: e });
}, YI = (e) => /* @__PURE__ */ b(KI, { children: /* @__PURE__ */ b(XI, { ...e }) }), $I = Ee.div`
  width: 100%;
`, zI = Ee.div`
  ${yt("space-between")}
  ${Fe("100%", "48px")}
  margin-bottom: 10px;
`, JI = Ee.div`
  width: 30%;
  display: flex;
  gap: 30px;
  align-items: flex-end;
`, qI = fn(() => {
  const e = pn();
  Rr();
  const { theme: n, content: t, customBackground: r, customColor: o } = vn(), i = DT(), s = cf(), a = Vd(() => {
    i.set("EDITOR_CONTENT_DATA", t);
  }, 1e3);
  VI();
  const u = Us(), _ = (c) => {
    oh(c) && (e.editor.saveContent(c), a());
  };
  return Se(() => {
    u?.editor.setTheme(n);
  }, [n]), Se(() => {
    s({
      background: r,
      color: o
    });
  }, [r, o]), /* @__PURE__ */ Z($I, { children: [
    /* @__PURE__ */ Z(zI, { children: [
      /* @__PURE__ */ b(PI, {}),
      /* @__PURE__ */ Z(JI, { children: [
        /* @__PURE__ */ b(gh, {}),
        /* @__PURE__ */ b(Rd, {})
      ] })
    ] }),
    /* @__PURE__ */ b(ko, { children: /* @__PURE__ */ b(YI, { onChange: _ }) })
  ] });
}), QI = {
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
class ZI {
  constructor(n) {
    rt(this), this.state = n, this.getters = n.getters, this.actions = n.actions;
  }
  async requestCodeExecution() {
    const { NOT_SUPPORTED: n, ERRORS_IN_CODE: t, SUCCESS: r, NETWORK_ERROR: o } = QI;
    if (!this.getters.isAllowedToExecute())
      return n;
    const i = this.getters.getActiveTab(), s = {
      code: i.getContent(),
      language: i.lang
    };
    try {
      const a = await QE.post(
        qE.CODE_EXECUTOR_API,
        s
      );
      return this.actions.terminal.addExecuteMessage(a.data), a.data.error ? t : r;
    } catch {
      return o;
    }
  }
}
const Am = () => {
  const { codeRunner: e } = CT(), n = Dt(), t = OO();
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
var eA = Object.defineProperty, nA = (e, n) => {
  for (var t in n)
    eA(e, t, { get: n[t], enumerable: !0 });
}, mn = {};
nA(mn, {
  assign: () => Hm,
  colors: () => St,
  createStringInterpolator: () => a_,
  skipAnimation: () => Um,
  to: () => ym,
  willAdvance: () => u_
});
var n_ = Xo(), X = (e) => Wo(e, n_), t_ = Xo();
X.write = (e) => Wo(e, t_);
var ws = Xo();
X.onStart = (e) => Wo(e, ws);
var r_ = Xo();
X.onFrame = (e) => Wo(e, r_);
var o_ = Xo();
X.onFinish = (e) => Wo(e, o_);
var rr = [];
X.setTimeout = (e, n) => {
  const t = X.now() + n, r = () => {
    const i = rr.findIndex((s) => s.cancel == r);
    ~i && rr.splice(i, 1), Rt -= ~i ? 1 : 0;
  }, o = { time: t, handler: e, cancel: r };
  return rr.splice(Sm(t), 0, o), Rt += 1, Gm(), o;
};
var Sm = (e) => ~(~rr.findIndex((n) => n.time > e) || ~rr.length);
X.cancel = (e) => {
  ws.delete(e), r_.delete(e), o_.delete(e), n_.delete(e), t_.delete(e);
};
X.sync = (e) => {
  qa = !0, X.batchedUpdates(e), qa = !1;
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
    ws.delete(t), n = null;
  }, r;
};
var i_ = typeof window < "u" ? window.requestAnimationFrame : (
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  () => {
  }
);
X.use = (e) => i_ = e;
X.now = typeof performance < "u" ? () => performance.now() : Date.now;
X.batchedUpdates = (e) => e();
X.catch = console.error;
X.frameLoop = "always";
X.advance = () => {
  X.frameLoop !== "demand" ? console.warn(
    "Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"
  ) : Cm();
};
var Ot = -1, Rt = 0, qa = !1;
function Wo(e, n) {
  qa ? (n.delete(e), e(0)) : (n.add(e), Gm());
}
function Gm() {
  Ot < 0 && (Ot = 0, X.frameLoop !== "demand" && i_(vm));
}
function tA() {
  Ot = -1;
}
function vm() {
  ~Ot && (i_(vm), X.batchedUpdates(Cm));
}
function Cm() {
  const e = Ot;
  Ot = X.now();
  const n = Sm(Ot);
  if (n && (Dm(rr.splice(0, n), (t) => t.handler()), Rt -= n), !Rt) {
    tA();
    return;
  }
  ws.flush(), n_.flush(e ? Math.min(64, Ot - e) : 16.667), r_.flush(), t_.flush(), o_.flush();
}
function Xo() {
  let e = /* @__PURE__ */ new Set(), n = e;
  return {
    add(t) {
      Rt += n == e && !e.has(t) ? 1 : 0, e.add(t);
    },
    delete(t) {
      return Rt -= n == e && e.has(t) ? 1 : 0, e.delete(t);
    },
    flush(t) {
      n.size && (e = /* @__PURE__ */ new Set(), Rt -= n.size, Dm(n, (r) => r(t) && e.add(r)), Rt += e.size, n = e);
    }
  };
}
function Dm(e, n) {
  e.forEach((t) => {
    try {
      n(t);
    } catch (r) {
      X.catch(r);
    }
  });
}
function Qa() {
}
var rA = (e, n, t) => Object.defineProperty(e, n, { value: t, writable: !0, configurable: !0 }), I = {
  arr: Array.isArray,
  obj: (e) => !!e && e.constructor.name === "Object",
  fun: (e) => typeof e == "function",
  str: (e) => typeof e == "string",
  num: (e) => typeof e == "number",
  und: (e) => e === void 0
};
function Xn(e, n) {
  if (I.arr(e)) {
    if (!I.arr(n) || e.length !== n.length)
      return !1;
    for (let t = 0; t < e.length; t++)
      if (e[t] !== n[t])
        return !1;
    return !0;
  }
  return e === n;
}
var B = (e, n) => e.forEach(n);
function Ln(e, n, t) {
  if (I.arr(e)) {
    for (let r = 0; r < e.length; r++)
      n.call(t, e[r], `${r}`);
    return;
  }
  for (const r in e)
    e.hasOwnProperty(r) && n.call(t, e[r], r);
}
var $e = (e) => I.und(e) ? [] : I.arr(e) ? e : [e];
function $r(e, n) {
  if (e.size) {
    const t = Array.from(e);
    e.clear(), B(t, n);
  }
}
var jr = (e, ...n) => $r(e, (t) => t(...n)), s_ = () => typeof window > "u" || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent), a_, ym, St = null, Um = !1, u_ = Qa, Hm = (e) => {
  e.to && (ym = e.to), e.now && (X.now = e.now), e.colors !== void 0 && (St = e.colors), e.skipAnimation != null && (Um = e.skipAnimation), e.createStringInterpolator && (a_ = e.createStringInterpolator), e.requestAnimationFrame && X.use(e.requestAnimationFrame), e.batchedUpdates && (X.batchedUpdates = e.batchedUpdates), e.willAdvance && (u_ = e.willAdvance), e.frameLoop && (X.frameLoop = e.frameLoop);
}, zr = /* @__PURE__ */ new Set(), dn = [], ha = [], ns = 0, Ko = {
  get idle() {
    return !zr.size && !dn.length;
  },
  /** Advance the given animation on every frame until idle. */
  start(e) {
    ns > e.priority ? (zr.add(e), X.onStart(oA)) : (wm(e), X(Za));
  },
  /** Advance all animations by the given time. */
  advance: Za,
  /** Call this when an animation's priority changes. */
  sort(e) {
    if (ns)
      X.onFrame(() => Ko.sort(e));
    else {
      const n = dn.indexOf(e);
      ~n && (dn.splice(n, 1), Pm(e));
    }
  },
  /**
   * Clear all animations. For testing purposes.
   *
   * ☠️ Never call this from within the frameloop.
   */
  clear() {
    dn = [], zr.clear();
  }
};
function oA() {
  zr.forEach(wm), zr.clear(), X(Za);
}
function wm(e) {
  dn.includes(e) || Pm(e);
}
function Pm(e) {
  dn.splice(
    iA(dn, (n) => n.priority > e.priority),
    0,
    e
  );
}
function Za(e) {
  const n = ha;
  for (let t = 0; t < dn.length; t++) {
    const r = dn[t];
    ns = r.priority, r.idle || (u_(r), r.advance(e), r.idle || n.push(r));
  }
  return ns = 0, ha = dn, ha.length = 0, dn = n, dn.length > 0;
}
function iA(e, n) {
  const t = e.findIndex(n);
  return t < 0 ? e.length : t;
}
var sA = (e, n, t) => Math.min(Math.max(t, e), n), aA = {
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
}, gn = "[-+]?\\d*\\.?\\d+", ts = gn + "%";
function Ps(...e) {
  return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)";
}
var uA = new RegExp("rgb" + Ps(gn, gn, gn)), _A = new RegExp("rgba" + Ps(gn, gn, gn, gn)), lA = new RegExp("hsl" + Ps(gn, ts, ts)), cA = new RegExp(
  "hsla" + Ps(gn, ts, ts, gn)
), dA = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, hA = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, mA = /^#([0-9a-fA-F]{6})$/, fA = /^#([0-9a-fA-F]{8})$/;
function pA(e) {
  let n;
  return typeof e == "number" ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (n = mA.exec(e)) ? parseInt(n[1] + "ff", 16) >>> 0 : St && St[e] !== void 0 ? St[e] : (n = uA.exec(e)) ? (Wt(n[1]) << 24 | // r
  Wt(n[2]) << 16 | // g
  Wt(n[3]) << 8 | // b
  255) >>> // a
  0 : (n = _A.exec(e)) ? (Wt(n[1]) << 24 | // r
  Wt(n[2]) << 16 | // g
  Wt(n[3]) << 8 | // b
  Pl(n[4])) >>> // a
  0 : (n = dA.exec(e)) ? parseInt(
    n[1] + n[1] + // r
    n[2] + n[2] + // g
    n[3] + n[3] + // b
    "ff",
    // a
    16
  ) >>> 0 : (n = fA.exec(e)) ? parseInt(n[1], 16) >>> 0 : (n = hA.exec(e)) ? parseInt(
    n[1] + n[1] + // r
    n[2] + n[2] + // g
    n[3] + n[3] + // b
    n[4] + n[4],
    // a
    16
  ) >>> 0 : (n = lA.exec(e)) ? (Hl(
    wl(n[1]),
    // h
    si(n[2]),
    // s
    si(n[3])
    // l
  ) | 255) >>> // a
  0 : (n = cA.exec(e)) ? (Hl(
    wl(n[1]),
    // h
    si(n[2]),
    // s
    si(n[3])
    // l
  ) | Pl(n[4])) >>> // a
  0 : null;
}
function ma(e, n, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? e + (n - e) * 6 * t : t < 1 / 2 ? n : t < 2 / 3 ? e + (n - e) * (2 / 3 - t) * 6 : e;
}
function Hl(e, n, t) {
  const r = t < 0.5 ? t * (1 + n) : t + n - t * n, o = 2 * t - r, i = ma(o, r, e + 1 / 3), s = ma(o, r, e), a = ma(o, r, e - 1 / 3);
  return Math.round(i * 255) << 24 | Math.round(s * 255) << 16 | Math.round(a * 255) << 8;
}
function Wt(e) {
  const n = parseInt(e, 10);
  return n < 0 ? 0 : n > 255 ? 255 : n;
}
function wl(e) {
  return (parseFloat(e) % 360 + 360) % 360 / 360;
}
function Pl(e) {
  const n = parseFloat(e);
  return n < 0 ? 0 : n > 1 ? 255 : Math.round(n * 255);
}
function si(e) {
  const n = parseFloat(e);
  return n < 0 ? 0 : n > 100 ? 1 : n / 100;
}
function Ml(e) {
  let n = pA(e);
  if (n === null)
    return e;
  n = n || 0;
  const t = (n & 4278190080) >>> 24, r = (n & 16711680) >>> 16, o = (n & 65280) >>> 8, i = (n & 255) / 255;
  return `rgba(${t}, ${r}, ${o}, ${i})`;
}
var pr = (e, n, t) => {
  if (I.fun(e))
    return e;
  if (I.arr(e))
    return pr({
      range: e,
      output: n,
      extrapolate: t
    });
  if (I.str(e.output[0]))
    return a_(e);
  const r = e, o = r.output, i = r.range || [0, 1], s = r.extrapolateLeft || r.extrapolate || "extend", a = r.extrapolateRight || r.extrapolate || "extend", u = r.easing || ((_) => _);
  return (_) => {
    const c = EA(_, i);
    return TA(
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
function TA(e, n, t, r, o, i, s, a, u) {
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
function EA(e, n) {
  for (var t = 1; t < n.length - 1 && !(n[t] >= e); ++t)
    ;
  return t - 1;
}
var OA = (e, n = "end") => (t) => {
  t = n === "end" ? Math.min(t, 0.999) : Math.max(t, 1e-3);
  const r = t * e, o = n === "end" ? Math.floor(r) : Math.ceil(r);
  return sA(0, 1, o / e);
}, rs = 1.70158, ai = rs * 1.525, kl = rs + 1, xl = 2 * Math.PI / 3, Ll = 2 * Math.PI / 4.5, ui = (e) => e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375 : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375, Mm = {
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
  easeInBack: (e) => kl * e * e * e - rs * e * e,
  easeOutBack: (e) => 1 + kl * Math.pow(e - 1, 3) + rs * Math.pow(e - 1, 2),
  easeInOutBack: (e) => e < 0.5 ? Math.pow(2 * e, 2) * ((ai + 1) * 2 * e - ai) / 2 : (Math.pow(2 * e - 2, 2) * ((ai + 1) * (e * 2 - 2) + ai) + 2) / 2,
  easeInElastic: (e) => e === 0 ? 0 : e === 1 ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((e * 10 - 10.75) * xl),
  easeOutElastic: (e) => e === 0 ? 0 : e === 1 ? 1 : Math.pow(2, -10 * e) * Math.sin((e * 10 - 0.75) * xl) + 1,
  easeInOutElastic: (e) => e === 0 ? 0 : e === 1 ? 1 : e < 0.5 ? -(Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * Ll)) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * Ll) / 2 + 1,
  easeInBounce: (e) => 1 - ui(1 - e),
  easeOutBounce: ui,
  easeInOutBounce: (e) => e < 0.5 ? (1 - ui(1 - 2 * e)) / 2 : (1 + ui(2 * e - 1)) / 2,
  steps: OA
}, ho = Symbol.for("FluidValue.get"), Tr = Symbol.for("FluidValue.observers"), _n = (e) => !!(e && e[ho]), Qe = (e) => e && e[ho] ? e[ho]() : e, Bl = (e) => e[Tr] || null;
function RA(e, n) {
  e.eventObserved ? e.eventObserved(n) : e(n);
}
function mo(e, n) {
  const t = e[Tr];
  t && t.forEach((r) => {
    RA(r, n);
  });
}
var km = class {
  constructor(e) {
    if (!e && !(e = this.get))
      throw Error("Unknown getter");
    bA(this, e);
  }
}, bA = (e, n) => xm(e, ho, n);
function Ar(e, n) {
  if (e[ho]) {
    let t = e[Tr];
    t || xm(e, Tr, t = /* @__PURE__ */ new Set()), t.has(n) || (t.add(n), e.observerAdded && e.observerAdded(t.size, n));
  }
  return n;
}
function fo(e, n) {
  const t = e[Tr];
  if (t && t.has(n)) {
    const r = t.size - 1;
    r ? t.delete(n) : e[Tr] = null, e.observerRemoved && e.observerRemoved(r, n);
  }
}
var xm = (e, n, t) => Object.defineProperty(e, n, {
  value: t,
  writable: !0,
  configurable: !0
}), Si = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, gA = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi, jl = new RegExp(`(${Si.source})(%|[a-z]+)`, "i"), NA = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi, Ms = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/, Lm = (e) => {
  const [n, t] = IA(e);
  if (!n || s_())
    return e;
  const r = window.getComputedStyle(document.documentElement).getPropertyValue(n);
  if (r)
    return r.trim();
  if (t && t.startsWith("--")) {
    const o = window.getComputedStyle(document.documentElement).getPropertyValue(t);
    return o || e;
  } else {
    if (t && Ms.test(t))
      return Lm(t);
    if (t)
      return t;
  }
  return e;
}, IA = (e) => {
  const n = Ms.exec(e);
  if (!n)
    return [,];
  const [, t, r] = n;
  return [t, r];
}, fa, AA = (e, n, t, r, o) => `rgba(${Math.round(n)}, ${Math.round(t)}, ${Math.round(r)}, ${o})`, Bm = (e) => {
  fa || (fa = St ? (
    // match color names, ignore partial matches
    new RegExp(`(${Object.keys(St).join("|")})(?!\\w)`, "g")
  ) : (
    // never match
    /^\b$/
  ));
  const n = e.output.map((i) => Qe(i).replace(Ms, Lm).replace(gA, Ml).replace(fa, Ml)), t = n.map((i) => i.match(Si).map(Number)), o = t[0].map(
    (i, s) => t.map((a) => {
      if (!(s in a))
        throw Error('The arity of each "output" value must be equal');
      return a[s];
    })
  ).map(
    (i) => pr({ ...e, output: i })
  );
  return (i) => {
    const s = !jl.test(n[0]) && n.find((u) => jl.test(u))?.replace(Si, "");
    let a = 0;
    return n[0].replace(
      Si,
      () => `${o[a++](i)}${s || ""}`
    ).replace(NA, AA);
  };
}, __ = "react-spring: ", jm = (e) => {
  const n = e;
  let t = !1;
  if (typeof n != "function")
    throw new TypeError(`${__}once requires a function parameter`);
  return (...r) => {
    t || (n(...r), t = !0);
  };
}, SA = jm(console.warn);
function Fm() {
  SA(
    `${__}The "interpolate" function is deprecated in v9 (use "to" instead)`
  );
}
var GA = jm(console.warn);
function vA() {
  GA(
    `${__}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`
  );
}
function ks(e) {
  return I.str(e) && (e[0] == "#" || /\d/.test(e) || // Do not identify a CSS variable as an AnimatedString if its SSR
  !s_() && Ms.test(e) || e in (St || {}));
}
var Xt, Gi = /* @__PURE__ */ new WeakMap(), CA = (e) => e.forEach(({ target: n, contentRect: t }) => Gi.get(n)?.forEach((r) => r(t)));
function DA(e, n) {
  Xt || typeof ResizeObserver < "u" && (Xt = new ResizeObserver(CA));
  let t = Gi.get(n);
  return t || (t = /* @__PURE__ */ new Set(), Gi.set(n, t)), t.add(e), Xt && Xt.observe(n), () => {
    const r = Gi.get(n);
    r && (r.delete(e), !r.size && Xt && Xt.unobserve(n));
  };
}
var vi = /* @__PURE__ */ new Set(), wr, yA = () => {
  const e = () => {
    vi.forEach(
      (n) => n({
        width: window.innerWidth,
        height: window.innerHeight
      })
    );
  };
  return window.addEventListener("resize", e), () => {
    window.removeEventListener("resize", e);
  };
}, UA = (e) => (vi.add(e), wr || (wr = yA()), () => {
  vi.delete(e), !vi.size && wr && (wr(), wr = void 0);
}), Vm = (e, { container: n = document.documentElement } = {}) => n === document.documentElement ? UA(e) : DA(e, n), HA = (e, n, t) => n - e === 0 ? 1 : (t - e) / (n - e), wA = {
  x: {
    length: "Width",
    position: "Left"
  },
  y: {
    length: "Height",
    position: "Top"
  }
}, PA = class {
  constructor(e, n) {
    this.createAxis = () => ({
      current: 0,
      progress: 0,
      scrollLength: 0
    }), this.updateAxis = (t) => {
      const r = this.info[t], { length: o, position: i } = wA[t];
      r.current = this.container[`scroll${i}`], r.scrollLength = this.container["scroll" + o] - this.container["client" + o], r.progress = HA(0, r.scrollLength, r.current);
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
}, Pr = /* @__PURE__ */ new WeakMap(), Fl = /* @__PURE__ */ new WeakMap(), pa = /* @__PURE__ */ new WeakMap(), Vl = (e) => e === document.documentElement ? window : e, MA = (e, { container: n = document.documentElement } = {}) => {
  let t = pa.get(n);
  t || (t = /* @__PURE__ */ new Set(), pa.set(n, t));
  const r = new PA(e, n);
  if (t.add(r), !Pr.has(n)) {
    const i = () => (t?.forEach((a) => a.advance()), !0);
    Pr.set(n, i);
    const s = Vl(n);
    window.addEventListener("resize", i, { passive: !0 }), n !== document.documentElement && Fl.set(n, Vm(i, { container: n })), s.addEventListener("scroll", i, { passive: !0 });
  }
  const o = Pr.get(n);
  return X(o), () => {
    X.cancel(o);
    const i = pa.get(n);
    if (!i || (i.delete(r), i.size))
      return;
    const s = Pr.get(n);
    Pr.delete(n), s && (Vl(n).removeEventListener("scroll", s), window.removeEventListener("resize", s), Fl.get(n)?.());
  };
};
function kA(e) {
  const n = ee(null);
  return n.current === null && (n.current = e()), n.current;
}
var nn = s_() ? Se : hc, xA = () => {
  const e = ee(!1);
  return nn(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
};
function l_() {
  const e = ze()[1], n = xA();
  return () => {
    n.current && e(Math.random());
  };
}
function LA(e, n) {
  const [t] = ze(
    () => ({
      inputs: n,
      result: e()
    })
  ), r = ee(), o = r.current;
  let i = o;
  return i ? n && i.inputs && BA(n, i.inputs) || (i = {
    inputs: n,
    result: e()
  }) : i = t, Se(() => {
    r.current = i, o == t && (t.inputs = t.result = void 0);
  }, [i]), i.result;
}
function BA(e, n) {
  if (e.length !== n.length)
    return !1;
  for (let t = 0; t < e.length; t++)
    if (e[t] !== n[t])
      return !1;
  return !0;
}
var xs = (e) => Se(e, jA), jA = [];
function eu(e) {
  const n = ee();
  return Se(() => {
    n.current = e;
  }), n.current;
}
var FA = () => {
  const [e, n] = ze(null);
  return nn(() => {
    const t = window.matchMedia("(prefers-reduced-motion)"), r = (o) => {
      n(o.matches), Hm({
        skipAnimation: o.matches
      });
    };
    return r(t), t.addEventListener("change", r), () => {
      t.removeEventListener("change", r);
    };
  }, []), e;
}, po = Symbol.for("Animated:node"), VA = (e) => !!e && e[po] === e, yn = (e) => e && e[po], c_ = (e, n) => rA(e, po, n), Ls = (e) => e && e[po] && e[po].getPayload(), Wm = class {
  constructor() {
    c_(this, this);
  }
  /** Get every `AnimatedValue` used by this node. */
  getPayload() {
    return this.payload || [];
  }
}, Yo = class extends Wm {
  constructor(e) {
    super(), this._value = e, this.done = !0, this.durationProgress = 0, I.num(this._value) && (this.lastPosition = this._value);
  }
  /** @internal */
  static create(e) {
    return new Yo(e);
  }
  getPayload() {
    return [this];
  }
  getValue() {
    return this._value;
  }
  setValue(e, n) {
    return I.num(e) && (this.lastPosition = e, n && (e = Math.round(e / n) * n, this.done && (this.lastPosition = e))), this._value === e ? !1 : (this._value = e, !0);
  }
  reset() {
    const { done: e } = this;
    this.done = !1, I.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, e && (this.lastVelocity = null), this.v0 = null);
  }
}, To = class extends Yo {
  constructor(e) {
    super(0), this._string = null, this._toString = pr({
      output: [e, e]
    });
  }
  /** @internal */
  static create(e) {
    return new To(e);
  }
  getValue() {
    const e = this._string;
    return e ?? (this._string = this._toString(this._value));
  }
  setValue(e) {
    if (I.str(e)) {
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
    e && (this._toString = pr({
      output: [this.getValue(), e]
    })), this._value = 0, super.reset();
  }
}, os = { dependencies: null }, Bs = class extends Wm {
  constructor(e) {
    super(), this.source = e, this.setValue(e);
  }
  getValue(e) {
    const n = {};
    return Ln(this.source, (t, r) => {
      VA(t) ? n[r] = t.getValue(e) : _n(t) ? n[r] = Qe(t) : e || (n[r] = t);
    }), n;
  }
  /** Replace the raw object data */
  setValue(e) {
    this.source = e, this.payload = this._makePayload(e);
  }
  reset() {
    this.payload && B(this.payload, (e) => e.reset());
  }
  /** Create a payload set. */
  _makePayload(e) {
    if (e) {
      const n = /* @__PURE__ */ new Set();
      return Ln(e, this._addToPayload, n), Array.from(n);
    }
  }
  /** Add to a payload set. */
  _addToPayload(e) {
    os.dependencies && _n(e) && os.dependencies.add(e);
    const n = Ls(e);
    n && B(n, (t) => this.add(t));
  }
}, Xm = class extends Bs {
  constructor(e) {
    super(e);
  }
  /** @internal */
  static create(e) {
    return new Xm(e);
  }
  getValue() {
    return this.source.map((e) => e.getValue());
  }
  setValue(e) {
    const n = this.getPayload();
    return e.length == n.length ? n.map((t, r) => t.setValue(e[r])).some(Boolean) : (super.setValue(e.map(WA)), !0);
  }
};
function WA(e) {
  return (ks(e) ? To : Yo).create(e);
}
function nu(e) {
  const n = yn(e);
  return n ? n.constructor : I.arr(e) ? Xm : ks(e) ? To : Yo;
}
var Wl = (e, n) => {
  const t = (
    // Function components must use "forwardRef" to avoid being
    // re-rendered on every animation frame.
    !I.fun(e) || e.prototype && e.prototype.isReactComponent
  );
  return ir((r, o) => {
    const i = ee(null), s = t && // eslint-disable-next-line react-hooks/rules-of-hooks
    et(
      (d) => {
        i.current = YA(o, d);
      },
      [o]
    ), [a, u] = KA(r, n), _ = l_(), c = () => {
      const d = i.current;
      if (t && !d)
        return;
      (d ? n.applyAnimatedValues(d, a.getValue(!0)) : !1) === !1 && _();
    }, l = new XA(c, u), f = ee();
    nn(() => (f.current = l, B(u, (d) => Ar(d, l)), () => {
      f.current && (B(
        f.current.deps,
        (d) => fo(d, f.current)
      ), X.cancel(f.current.update));
    })), Se(c, []), xs(() => () => {
      const d = f.current;
      B(d.deps, (h) => fo(h, d));
    });
    const T = n.getComponentProps(a.getValue());
    return /* @__PURE__ */ sn.createElement(e, { ...T, ref: s });
  });
}, XA = class {
  constructor(e, n) {
    this.update = e, this.deps = n;
  }
  eventObserved(e) {
    e.type == "change" && X.write(this.update);
  }
};
function KA(e, n) {
  const t = /* @__PURE__ */ new Set();
  return os.dependencies = t, e.style && (e = {
    ...e,
    style: n.createAnimatedStyle(e.style)
  }), e = new Bs(e), os.dependencies = null, [e, t];
}
function YA(e, n) {
  return e && (I.fun(e) ? e(n) : e.current = n), n;
}
var Xl = Symbol.for("AnimatedComponent"), $A = (e, {
  applyAnimatedValues: n = () => !1,
  createAnimatedStyle: t = (o) => new Bs(o),
  getComponentProps: r = (o) => o
} = {}) => {
  const o = {
    applyAnimatedValues: n,
    createAnimatedStyle: t,
    getComponentProps: r
  }, i = (s) => {
    const a = Kl(s) || "Anonymous";
    return I.str(s) ? s = i[s] || (i[s] = Wl(s, o)) : s = s[Xl] || (s[Xl] = Wl(s, o)), s.displayName = `Animated(${a})`, s;
  };
  return Ln(e, (s, a) => {
    I.arr(e) && (a = Kl(s)), i[a] = i(s);
  }), {
    animated: i
  };
}, Kl = (e) => I.str(e) ? e : e && I.str(e.displayName) ? e.displayName : I.fun(e) && e.name || null, zA = class {
};
function Ye(e, ...n) {
  return I.fun(e) ? e(...n) : e;
}
var Jr = (e, n) => e === !0 || !!(n && e && (I.fun(e) ? e(n) : $e(e).includes(n))), Km = (e, n) => I.obj(e) ? n && e[n] : e, Ym = (e, n) => e.default === !0 ? e[n] : e.default ? e.default[n] : void 0, JA = (e) => e, js = (e, n = JA) => {
  let t = qA;
  e.default && e.default !== !0 && (e = e.default, t = Object.keys(e));
  const r = {};
  for (const o of t) {
    const i = n(e[o], o);
    I.und(i) || (r[o] = i);
  }
  return r;
}, qA = [
  "config",
  "onProps",
  "onStart",
  "onChange",
  "onPause",
  "onResume",
  "onRest"
], QA = {
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
function ZA(e) {
  const n = {};
  let t = 0;
  if (Ln(e, (r, o) => {
    QA[o] || (n[o] = r, t++);
  }), t)
    return n;
}
function Fs(e) {
  const n = ZA(e);
  if (n) {
    const t = { to: n };
    return Ln(e, (r, o) => o in n || (t[o] = r)), t;
  }
  return { ...e };
}
function Eo(e) {
  return e = Qe(e), I.arr(e) ? e.map(Eo) : ks(e) ? mn.createStringInterpolator({
    range: [0, 1],
    output: [e, e]
  })(1) : e;
}
function $m(e) {
  for (const n in e)
    return !0;
  return !1;
}
function tu(e) {
  return I.fun(e) || I.arr(e) && I.obj(e[0]);
}
function ru(e, n) {
  e.ref?.delete(e), n?.delete(e);
}
function d_(e, n) {
  n && e.ref !== n && (e.ref?.delete(e), n.add(e), e.ref = n);
}
function e2(e, n, t = 1e3) {
  nn(() => {
    if (n) {
      let r = 0;
      B(e, (o, i) => {
        const s = o.current;
        if (s.length) {
          let a = t * n[i];
          isNaN(a) ? a = r : r = a, B(s, (u) => {
            B(u.queue, (_) => {
              const c = _.delay;
              _.delay = (l) => a + Ye(c || 0, l);
            });
          }), o.start();
        }
      });
    } else {
      let r = Promise.resolve();
      B(e, (o) => {
        const i = o.current;
        if (i.length) {
          const s = i.map((a) => {
            const u = a.queue;
            return a.queue = [], u;
          });
          r = r.then(() => (B(
            i,
            (a, u) => B(s[u] || [], (_) => a.queue.push(_))
          ), Promise.all(o.start())));
        }
      });
    }
  });
}
var zm = {
  default: { tension: 170, friction: 26 },
  gentle: { tension: 120, friction: 14 },
  wobbly: { tension: 180, friction: 12 },
  stiff: { tension: 210, friction: 20 },
  slow: { tension: 280, friction: 60 },
  molasses: { tension: 280, friction: 120 }
}, ou = {
  ...zm.default,
  mass: 1,
  damping: 1,
  easing: Mm.linear,
  clamp: !1
}, n2 = class {
  constructor() {
    this.velocity = 0, Object.assign(this, ou);
  }
};
function t2(e, n, t) {
  t && (t = { ...t }, Yl(t, n), n = { ...t, ...n }), Yl(e, n), Object.assign(e, n);
  for (const s in ou)
    e[s] == null && (e[s] = ou[s]);
  let { frequency: r, damping: o } = e;
  const { mass: i } = e;
  return I.und(r) || (r < 0.01 && (r = 0.01), o < 0 && (o = 0), e.tension = Math.pow(2 * Math.PI / r, 2) * i, e.friction = 4 * Math.PI * o * i / r), e;
}
function Yl(e, n) {
  if (!I.und(n.decay))
    e.duration = void 0;
  else {
    const t = !I.und(n.tension) || !I.und(n.friction);
    (t || !I.und(n.frequency) || !I.und(n.damping) || !I.und(n.mass)) && (e.duration = void 0, e.decay = void 0), t && (e.frequency = void 0);
  }
}
var $l = [], r2 = class {
  constructor() {
    this.changed = !1, this.values = $l, this.toValues = null, this.fromValues = $l, this.config = new n2(), this.immediate = !1;
  }
};
function Jm(e, { key: n, props: t, defaultProps: r, state: o, actions: i }) {
  return new Promise((s, a) => {
    let u, _, c = Jr(t.cancel ?? r?.cancel, n);
    if (c)
      T();
    else {
      I.und(t.pause) || (o.paused = Jr(t.pause, n));
      let d = r?.pause;
      d !== !0 && (d = o.paused || Jr(d, n)), u = Ye(t.delay || 0, n), d ? (o.resumeQueue.add(f), i.pause()) : (i.resume(), f());
    }
    function l() {
      o.resumeQueue.add(f), o.timeouts.delete(_), _.cancel(), u = _.time - X.now();
    }
    function f() {
      u > 0 && !mn.skipAnimation ? (o.delayed = !0, _ = X.setTimeout(T, u), o.pauseQueue.add(l), o.timeouts.add(_)) : T();
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
var h_ = (e, n) => n.length == 1 ? n[0] : n.some((t) => t.cancelled) ? or(e.get()) : n.every((t) => t.noop) ? qm(e.get()) : Rn(
  e.get(),
  n.every((t) => t.finished)
), qm = (e) => ({
  value: e,
  noop: !0,
  finished: !0,
  cancelled: !1
}), Rn = (e, n, t = !1) => ({
  value: e,
  finished: n,
  cancelled: t
}), or = (e) => ({
  value: e,
  cancelled: !0,
  finished: !1
});
function Qm(e, n, t, r) {
  const { callId: o, parentId: i, onRest: s } = n, { asyncTo: a, promise: u } = t;
  return !i && e === a && !n.reset ? u : t.promise = (async () => {
    t.asyncId = o, t.asyncTo = e;
    const _ = js(
      n,
      (m, O) => (
        // The `onRest` prop is only called when the `runAsync` promise is resolved.
        O === "onRest" ? void 0 : m
      )
    );
    let c, l;
    const f = new Promise(
      (m, O) => (c = m, l = O)
    ), T = (m) => {
      const O = (
        // The `cancel` prop or `stop` method was used.
        o <= (t.cancelId || 0) && or(r) || // The async `to` prop was replaced.
        o !== t.asyncId && Rn(r, !1)
      );
      if (O)
        throw m.result = O, l(m), m;
    }, d = (m, O) => {
      const R = new iu(), N = new zl();
      return (async () => {
        if (mn.skipAnimation)
          throw Oo(t), N.result = Rn(r, !1), l(N), N;
        T(R);
        const A = I.obj(m) ? { ...m } : { ...O, to: m };
        A.parentId = o, Ln(_, (w, k) => {
          I.und(A[k]) && (A[k] = w);
        });
        const p = await r.start(A);
        return T(R), t.paused && await new Promise((w) => {
          t.resumeQueue.add(w);
        }), p;
      })();
    };
    let h;
    if (mn.skipAnimation)
      return Oo(t), Rn(r, !1);
    try {
      let m;
      I.arr(e) ? m = (async (O) => {
        for (const R of O)
          await d(R);
      })(e) : m = Promise.resolve(e(d, r.stop.bind(r))), await Promise.all([m.then(c), f]), h = Rn(r.get(), !0, !1);
    } catch (m) {
      if (m instanceof iu)
        h = m.result;
      else if (m instanceof zl)
        h = m.result;
      else
        throw m;
    } finally {
      o == t.asyncId && (t.asyncId = i, t.asyncTo = i ? a : void 0, t.promise = i ? u : void 0);
    }
    return I.fun(s) && X.batchedUpdates(() => {
      s(h, r, r.item);
    }), h;
  })();
}
function Oo(e, n) {
  $r(e.timeouts, (t) => t.cancel()), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, n && (e.cancelId = n);
}
var iu = class extends Error {
  constructor() {
    super(
      "An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."
    );
  }
}, zl = class extends Error {
  constructor() {
    super("SkipAnimationSignal");
  }
}, su = (e) => e instanceof Vs, o2 = 1, Vs = class extends km {
  constructor() {
    super(...arguments), this.id = o2++, this._priority = 0;
  }
  get priority() {
    return this._priority;
  }
  set priority(e) {
    this._priority != e && (this._priority = e, this._onPriorityChange(e));
  }
  /** Get the current value */
  get() {
    const e = yn(this);
    return e && e.getValue();
  }
  /** Create a spring that maps our value to another value */
  to(...e) {
    return mn.to(this, e);
  }
  /** @deprecated Use the `to` method instead. */
  interpolate(...e) {
    return Fm(), mn.to(this, e);
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
    mo(this, {
      type: "change",
      parent: this,
      value: e,
      idle: n
    });
  }
  /** Tell our children about our new priority */
  _onPriorityChange(e) {
    this.idle || Ko.sort(this), mo(this, {
      type: "priority",
      parent: this,
      priority: e
    });
  }
}, Lt = Symbol.for("SpringPhase"), Zm = 1, au = 2, uu = 4, Ta = (e) => (e[Lt] & Zm) > 0, lt = (e) => (e[Lt] & au) > 0, Mr = (e) => (e[Lt] & uu) > 0, Jl = (e, n) => n ? e[Lt] |= au | Zm : e[Lt] &= ~au, ql = (e, n) => n ? e[Lt] |= uu : e[Lt] &= ~uu, m_ = class extends Vs {
  constructor(e, n) {
    if (super(), this.animation = new r2(), this.defaultProps = {}, this._state = {
      paused: !1,
      delayed: !1,
      pauseQueue: /* @__PURE__ */ new Set(),
      resumeQueue: /* @__PURE__ */ new Set(),
      timeouts: /* @__PURE__ */ new Set()
    }, this._pendingCalls = /* @__PURE__ */ new Set(), this._lastCallId = 0, this._lastToId = 0, this._memoizedDuration = 0, !I.und(e) || !I.und(n)) {
      const t = I.obj(e) ? { ...e } : { ...n, from: e };
      I.und(t.default) && (t.default = !0), this.start(t);
    }
  }
  /** Equals true when not advancing on each frame. */
  get idle() {
    return !(lt(this) || this._state.asyncTo) || Mr(this);
  }
  get goal() {
    return Qe(this.animation.to);
  }
  get velocity() {
    const e = yn(this);
    return e instanceof Yo ? e.lastVelocity || 0 : e.getPayload().map((n) => n.lastVelocity || 0);
  }
  /**
   * When true, this value has been animated at least once.
   */
  get hasAnimated() {
    return Ta(this);
  }
  /**
   * When true, this value has an unfinished animation,
   * which is either active or paused.
   */
  get isAnimating() {
    return lt(this);
  }
  /**
   * When true, all current and future animations are paused.
   */
  get isPaused() {
    return Mr(this);
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
    const { config: i } = r, s = Ls(r.to);
    !s && _n(r.to) && (o = $e(Qe(r.to))), r.values.forEach((_, c) => {
      if (_.done)
        return;
      const l = (
        // Animated strings always go from 0 to 1.
        _.constructor == To ? 1 : s ? s[c].lastPosition : o[c]
      );
      let f = r.immediate, T = l;
      if (!f) {
        if (T = _.lastPosition, i.tension <= 0) {
          _.done = !0;
          return;
        }
        let d = _.elapsedTime += e;
        const h = r.fromValues[c], m = _.v0 != null ? _.v0 : _.v0 = I.arr(i.velocity) ? i.velocity[c] : i.velocity;
        let O;
        const R = i.precision || (h == l ? 5e-3 : Math.min(1, Math.abs(l - h) * 1e-3));
        if (I.und(i.duration))
          if (i.decay) {
            const N = i.decay === !0 ? 0.998 : i.decay, A = Math.exp(-(1 - N) * d);
            T = h + m / (1 - N) * (1 - A), f = Math.abs(_.lastPosition - T) <= R, O = m * A;
          } else {
            O = _.lastVelocity == null ? m : _.lastVelocity;
            const N = i.restVelocity || R / 10, A = i.clamp ? 0 : i.bounce, p = !I.und(A), w = h == l ? _.v0 > 0 : h < l;
            let k, Y = !1;
            const M = 1, j = Math.ceil(e / M);
            for (let Oe = 0; Oe < j && (k = Math.abs(O) > N, !(!k && (f = Math.abs(l - T) <= R, f))); ++Oe) {
              p && (Y = T == l || T > l == w, Y && (O = -O * A, T = l));
              const pe = -i.tension * 1e-6 * (T - l), Ne = -i.friction * 1e-3 * O, x = (pe + Ne) / i.mass;
              O = O + x * M, T = T + O * M;
            }
          }
        else {
          let N = 1;
          i.duration > 0 && (this._memoizedDuration !== i.duration && (this._memoizedDuration = i.duration, _.durationProgress > 0 && (_.elapsedTime = i.duration * _.durationProgress, d = _.elapsedTime += e)), N = (i.progress || 0) + d / this._memoizedDuration, N = N > 1 ? 1 : N < 0 ? 0 : N, _.durationProgress = N), T = h + i.easing(N) * (l - h), O = (T - _.lastPosition) / e, f = N == 1;
        }
        _.lastVelocity = O, Number.isNaN(T) && (console.warn("Got NaN while animating:", this), f = !0);
      }
      s && !s[c].done && (f = !1), f ? _.done = !0 : n = !1, _.setValue(T, i.round) && (t = !0);
    });
    const a = yn(this), u = a.getValue();
    if (n) {
      const _ = Qe(r.to);
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
    if (lt(this)) {
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
    return I.und(e) ? (t = this.queue || [], this.queue = []) : t = [I.obj(e) ? e : { ...n, to: e }], Promise.all(
      t.map((r) => this._update(r))
    ).then((r) => h_(this, r));
  }
  /**
   * Stop the current animation, and cancel any delayed updates.
   *
   * Pass `true` to call `onRest` with `cancelled: true`.
   */
  stop(e) {
    const { to: n } = this.animation;
    return this._focus(this.get()), Oo(this._state, e && this._lastCallId), X.batchedUpdates(() => this._stop(n, e)), this;
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
    t = I.obj(t) ? t[n] : t, (t == null || tu(t)) && (t = void 0), r = I.obj(r) ? r[n] : r, r == null && (r = void 0);
    const o = { to: t, from: r };
    return Ta(this) || (e.reverse && ([t, r] = [r, t]), r = Qe(r), I.und(r) ? yn(this) || this._set(t) : this._set(r)), o;
  }
  /** Every update is processed by this method before merging. */
  _update({ ...e }, n) {
    const { key: t, defaultProps: r } = this;
    e.default && Object.assign(
      r,
      js(
        e,
        (s, a) => /^on/.test(a) ? Km(s, t) : s
      )
    ), Zl(this, e, "onProps"), xr(this, "onProps", e, this);
    const o = this._prepareNode(e);
    if (Object.isFrozen(this))
      throw Error(
        "Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?"
      );
    const i = this._state;
    return Jm(++this._lastCallId, {
      key: t,
      props: e,
      defaultProps: r,
      state: i,
      actions: {
        pause: () => {
          Mr(this) || (ql(this, !0), jr(i.pauseQueue), xr(
            this,
            "onPause",
            Rn(this, kr(this, this.animation.to)),
            this
          ));
        },
        resume: () => {
          Mr(this) && (ql(this, !1), lt(this) && this._resume(), jr(i.resumeQueue), xr(
            this,
            "onResume",
            Rn(this, kr(this, this.animation.to)),
            this
          ));
        },
        start: this._merge.bind(this, o)
      }
    }).then((s) => {
      if (e.loop && s.finished && !(n && s.noop)) {
        const a = ef(e);
        if (a)
          return this._update(a, !0);
      }
      return s;
    });
  }
  /** Merge props into the current animation */
  _merge(e, n, t) {
    if (n.cancel)
      return this.stop(!0), t(or(this));
    const r = !I.und(e.to), o = !I.und(e.from);
    if (r || o)
      if (n.callId > this._lastToId)
        this._lastToId = n.callId;
      else
        return t(or(this));
    const { key: i, defaultProps: s, animation: a } = this, { to: u, from: _ } = a;
    let { to: c = u, from: l = _ } = e;
    o && !r && (!n.default || I.und(c)) && (c = l), n.reverse && ([c, l] = [l, c]);
    const f = !Xn(l, _);
    f && (a.from = l), l = Qe(l);
    const T = !Xn(c, u);
    T && this._focus(c);
    const d = tu(n.to), { config: h } = a, { decay: m, velocity: O } = h;
    (r || o) && (h.velocity = 0), n.config && !d && t2(
      h,
      Ye(n.config, i),
      // Avoid calling the same "config" prop twice.
      n.config !== s.config ? Ye(s.config, i) : void 0
    );
    let R = yn(this);
    if (!R || I.und(c))
      return t(Rn(this, !0));
    const N = (
      // When `reset` is undefined, the `from` prop implies `reset: true`,
      // except for declarative updates. When `reset` is defined, there
      // must exist a value to animate from.
      I.und(n.reset) ? o && !n.default : !I.und(l) && Jr(n.reset, i)
    ), A = N ? l : this.get(), p = Eo(c), w = I.num(p) || I.arr(p) || ks(p), k = !d && (!w || Jr(s.immediate || n.immediate, i));
    if (T) {
      const Oe = nu(c);
      if (Oe !== R.constructor)
        if (k)
          R = this._set(p);
        else
          throw Error(
            `Cannot animate between ${R.constructor.name} and ${Oe.name}, as the "to" prop suggests`
          );
    }
    const Y = R.constructor;
    let M = _n(c), j = !1;
    if (!M) {
      const Oe = N || !Ta(this) && f;
      (T || Oe) && (j = Xn(Eo(A), p), M = !j), (!Xn(a.immediate, k) && !k || !Xn(h.decay, m) || !Xn(h.velocity, O)) && (M = !0);
    }
    if (j && lt(this) && (a.changed && !N ? M = !0 : M || this._stop(u)), !d && ((M || _n(u)) && (a.values = R.getPayload(), a.toValues = _n(c) ? null : Y == To ? [1] : $e(p)), a.immediate != k && (a.immediate = k, !k && !N && this._set(u)), M)) {
      const { onRest: Oe } = a;
      B(s2, (Ne) => Zl(this, n, Ne));
      const pe = Rn(this, kr(this, u));
      jr(this._pendingCalls, pe), this._pendingCalls.add(t), a.changed && X.batchedUpdates(() => {
        a.changed = !N, Oe?.(pe, this), N ? Ye(s.onRest, pe) : a.onStart?.(pe, this);
      });
    }
    N && this._set(A), d ? t(Qm(n.to, n, this._state, this)) : M ? this._start() : lt(this) && !T ? this._pendingCalls.add(t) : t(qm(A));
  }
  /** Update the `animation.to` value, which might be a `FluidValue` */
  _focus(e) {
    const n = this.animation;
    e !== n.to && (Bl(this) && this._detach(), n.to = e, Bl(this) && this._attach());
  }
  _attach() {
    let e = 0;
    const { to: n } = this.animation;
    _n(n) && (Ar(n, this), su(n) && (e = n.priority + 1)), this.priority = e;
  }
  _detach() {
    const { to: e } = this.animation;
    _n(e) && fo(e, this);
  }
  /**
   * Update the current value from outside the frameloop,
   * and return the `Animated` node.
   */
  _set(e, n = !0) {
    const t = Qe(e);
    if (!I.und(t)) {
      const r = yn(this);
      if (!r || !Xn(t, r.getValue())) {
        const o = nu(t);
        !r || r.constructor != o ? c_(this, o.create(t)) : r.setValue(t), r && X.batchedUpdates(() => {
          this._onChange(t, n);
        });
      }
    }
    return yn(this);
  }
  _onStart() {
    const e = this.animation;
    e.changed || (e.changed = !0, xr(
      this,
      "onStart",
      Rn(this, kr(this, e.to)),
      this
    ));
  }
  _onChange(e, n) {
    n || (this._onStart(), Ye(this.animation.onChange, e, this)), Ye(this.defaultProps.onChange, e, this), super._onChange(e, n);
  }
  // This method resets the animation state (even if already animating) to
  // ensure the latest from/to range is used, and it also ensures this spring
  // is added to the frameloop.
  _start() {
    const e = this.animation;
    yn(this).reset(Qe(e.to)), e.immediate || (e.fromValues = e.values.map((n) => n.lastPosition)), lt(this) || (Jl(this, !0), Mr(this) || this._resume());
  }
  _resume() {
    mn.skipAnimation ? this.finish() : Ko.start(this);
  }
  /**
   * Exit the frameloop and notify `onRest` listeners.
   *
   * Always wrap `_stop` calls with `batchedUpdates`.
   */
  _stop(e, n) {
    if (lt(this)) {
      Jl(this, !1);
      const t = this.animation;
      B(t.values, (o) => {
        o.done = !0;
      }), t.toValues && (t.onChange = t.onPause = t.onResume = void 0), mo(this, {
        type: "idle",
        parent: this
      });
      const r = n ? or(this.get()) : Rn(this.get(), kr(this, e ?? t.to));
      jr(this._pendingCalls, r), t.changed && (t.changed = !1, xr(this, "onRest", r, this));
    }
  }
};
function kr(e, n) {
  const t = Eo(n), r = Eo(e.get());
  return Xn(r, t);
}
function ef(e, n = e.loop, t = e.to) {
  const r = Ye(n);
  if (r) {
    const o = r !== !0 && Fs(r), i = (o || e).reverse, s = !o || o.reset;
    return Ro({
      ...e,
      loop: n,
      // Avoid updating default props when looping.
      default: !1,
      // Never loop the `pause` prop.
      pause: void 0,
      // For the "reverse" prop to loop as expected, the "to" prop
      // must be undefined. The "reverse" prop is ignored when the
      // "to" prop is an array or function.
      to: !i || tu(t) ? t : void 0,
      // Ignore the "from" prop except on reset.
      from: s ? e.from : void 0,
      reset: s,
      // The "loop" prop can return a "useSpring" props object to
      // override any of the original props.
      ...o
    });
  }
}
function Ro(e) {
  const { to: n, from: t } = e = Fs(e), r = /* @__PURE__ */ new Set();
  return I.obj(n) && Ql(n, r), I.obj(t) && Ql(t, r), e.keys = r.size ? Array.from(r) : null, e;
}
function i2(e) {
  const n = Ro(e);
  return I.und(n.default) && (n.default = js(n)), n;
}
function Ql(e, n) {
  Ln(e, (t, r) => t != null && n.add(r));
}
var s2 = [
  "onStart",
  "onRest",
  "onChange",
  "onPause",
  "onResume"
];
function Zl(e, n, t) {
  e.animation[t] = n[t] !== Ym(n, t) ? Km(n[t], e.key) : void 0;
}
function xr(e, n, ...t) {
  e.animation[n]?.(...t), e.defaultProps[n]?.(...t);
}
var a2 = ["onStart", "onChange", "onRest"], u2 = 1, f_ = class {
  constructor(e, n) {
    this.id = u2++, this.springs = {}, this.queue = [], this._lastAsyncId = 0, this._active = /* @__PURE__ */ new Set(), this._changed = /* @__PURE__ */ new Set(), this._started = !1, this._state = {
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
      I.und(t) || this.springs[n].set(t);
    }
  }
  /** Push an update onto the queue of each value. */
  update(e) {
    return e && this.queue.push(Ro(e)), this;
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
    return e ? n = $e(e).map(Ro) : this.queue = [], this._flush ? this._flush(this, n) : (sf(this, n), _u(this, n));
  }
  /** @internal */
  stop(e, n) {
    if (e !== !!e && (n = e), n) {
      const t = this.springs;
      B($e(n), (r) => t[r].stop(!!e));
    } else
      Oo(this._state, this._lastAsyncId), this.each((t) => t.stop(!!e));
    return this;
  }
  /** Freeze the active animation in time */
  pause(e) {
    if (I.und(e))
      this.start({ pause: !0 });
    else {
      const n = this.springs;
      B($e(e), (t) => n[t].pause());
    }
    return this;
  }
  /** Resume the animation if paused. */
  resume(e) {
    if (I.und(e))
      this.start({ pause: !1 });
    else {
      const n = this.springs;
      B($e(e), (t) => n[t].resume());
    }
    return this;
  }
  /** Call a function once per spring value */
  each(e) {
    Ln(this.springs, e);
  }
  /** @internal Called at the end of every animation frame */
  _onFrame() {
    const { onStart: e, onChange: n, onRest: t } = this._events, r = this._active.size > 0, o = this._changed.size > 0;
    (r && !this._started || o && !this._started) && (this._started = !0, $r(e, ([a, u]) => {
      u.value = this.get(), a(u, this, this._item);
    }));
    const i = !r && this._started, s = o || i && t.size ? this.get() : null;
    o && n.size && $r(n, ([a, u]) => {
      u.value = s, a(u, this, this._item);
    }), i && (this._started = !1, $r(t, ([a, u]) => {
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
function _u(e, n) {
  return Promise.all(n.map((t) => nf(e, t))).then(
    (t) => h_(e, t)
  );
}
async function nf(e, n, t) {
  const { keys: r, to: o, from: i, loop: s, onRest: a, onResolve: u } = n, _ = I.obj(n.default) && n.default;
  s && (n.loop = !1), o === !1 && (n.to = null), i === !1 && (n.from = null);
  const c = I.arr(o) || I.fun(o) ? o : void 0;
  c ? (n.to = void 0, n.onRest = void 0, _ && (_.onRest = void 0)) : B(a2, (h) => {
    const m = n[h];
    if (I.fun(m)) {
      const O = e._events[h];
      n[h] = ({ finished: R, cancelled: N }) => {
        const A = O.get(m);
        A ? (R || (A.finished = !1), N && (A.cancelled = !0)) : O.set(m, {
          value: null,
          finished: R || !1,
          cancelled: N || !1
        });
      }, _ && (_[h] = n[h]);
    }
  });
  const l = e._state;
  n.pause === !l.paused ? (l.paused = n.pause, jr(n.pause ? l.pauseQueue : l.resumeQueue)) : l.paused && (n.pause = !0);
  const f = (r || Object.keys(e.springs)).map(
    (h) => e.springs[h].start(n)
  ), T = n.cancel === !0 || Ym(n, "cancel") === !0;
  (c || T && l.asyncId) && f.push(
    Jm(++e._lastAsyncId, {
      props: n,
      state: l,
      actions: {
        pause: Qa,
        resume: Qa,
        start(h, m) {
          T ? (Oo(l, e._lastAsyncId), m(or(e))) : (h.onRest = a, m(
            Qm(
              c,
              h,
              l,
              e
            )
          ));
        }
      }
    })
  ), l.paused && await new Promise((h) => {
    l.resumeQueue.add(h);
  });
  const d = h_(e, await Promise.all(f));
  if (s && d.finished && !(t && d.noop)) {
    const h = ef(n, s, o);
    if (h)
      return sf(e, [h]), nf(e, h, !0);
  }
  return u && X.batchedUpdates(() => u(d, e, e.item)), d;
}
function lu(e, n) {
  const t = { ...e.springs };
  return n && B($e(n), (r) => {
    I.und(r.keys) && (r = Ro(r)), I.obj(r.to) || (r = { ...r, to: void 0 }), of(t, r, (o) => rf(o));
  }), tf(e, t), t;
}
function tf(e, n) {
  Ln(n, (t, r) => {
    e.springs[r] || (e.springs[r] = t, Ar(t, e));
  });
}
function rf(e, n) {
  const t = new m_();
  return t.key = e, n && Ar(t, n), t;
}
function of(e, n, t) {
  n.keys && B(n.keys, (r) => {
    (e[r] || (e[r] = t(r)))._prepareNode(n);
  });
}
function sf(e, n) {
  B(n, (t) => {
    of(e.springs, t, (r) => rf(r, e));
  });
}
var Sr = ({
  children: e,
  ...n
}) => {
  const t = tn(is), r = n.pause || !!t.pause, o = n.immediate || !!t.immediate;
  n = LA(() => ({ pause: r, immediate: o }), [r, o]);
  const { Provider: i } = is;
  return /* @__PURE__ */ sn.createElement(i, { value: n }, e);
}, is = _2(Sr, {});
Sr.Provider = is.Provider;
Sr.Consumer = is.Consumer;
function _2(e, n) {
  return Object.assign(e, sn.createContext(n)), e.Provider._context = e, e.Consumer._context = e, e;
}
var Ws = () => {
  const e = [], n = function(r) {
    vA();
    const o = [];
    return B(e, (i, s) => {
      if (I.und(r))
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
    return B(e, (r) => r.pause(...arguments)), this;
  }, n.resume = function() {
    return B(e, (r) => r.resume(...arguments)), this;
  }, n.set = function(r) {
    B(e, (o, i) => {
      const s = I.fun(r) ? r(i, o) : r;
      s && o.set(s);
    });
  }, n.start = function(r) {
    const o = [];
    return B(e, (i, s) => {
      if (I.und(r))
        o.push(i.start());
      else {
        const a = this._getProps(r, i, s);
        a && o.push(i.start(a));
      }
    }), o;
  }, n.stop = function() {
    return B(e, (r) => r.stop(...arguments)), this;
  }, n.update = function(r) {
    return B(e, (o, i) => o.update(this._getProps(r, o, i))), this;
  };
  const t = function(r, o, i) {
    return I.fun(r) ? r(i, o) : r;
  };
  return n._getProps = t, n;
};
function p_(e, n, t) {
  const r = I.fun(n) && n;
  r && !t && (t = []);
  const o = mt(
    () => r || arguments.length == 3 ? Ws() : void 0,
    []
  ), i = ee(0), s = l_(), a = mt(
    () => ({
      ctrls: [],
      queue: [],
      flush(O, R) {
        const N = lu(O, R);
        return i.current > 0 && !a.queue.length && !Object.keys(N).some((p) => !O.springs[p]) ? _u(O, R) : new Promise((p) => {
          tf(O, N), a.queue.push(() => {
            p(_u(O, R));
          }), s();
        });
      }
    }),
    []
  ), u = ee([...a.ctrls]), _ = [], c = eu(e) || 0;
  mt(() => {
    B(u.current.slice(e, c), (O) => {
      ru(O, o), O.stop(!0);
    }), u.current.length = e, l(c, e);
  }, [e]), mt(() => {
    l(0, Math.min(c, e));
  }, t);
  function l(O, R) {
    for (let N = O; N < R; N++) {
      const A = u.current[N] || (u.current[N] = new f_(null, a.flush)), p = r ? r(N, A) : n[N];
      p && (_[N] = i2(p));
    }
  }
  const f = u.current.map((O, R) => lu(O, _[R])), T = tn(Sr), d = eu(T), h = T !== d && $m(T);
  nn(() => {
    i.current++, a.ctrls = u.current;
    const { queue: O } = a;
    O.length && (a.queue = [], B(O, (R) => R())), B(u.current, (R, N) => {
      o?.add(R), h && R.start({ default: T });
      const A = _[N];
      A && (d_(R, A.ref), R.ref ? R.queue.push(A) : R.start(A));
    });
  }), xs(() => () => {
    B(a.ctrls, (O) => O.stop(!0));
  });
  const m = f.map((O) => ({ ...O }));
  return o ? [m, o] : m;
}
function Gr(e, n) {
  const t = I.fun(e), [[r], o] = p_(
    1,
    t ? e : [e],
    t ? n || [] : n
  );
  return t || arguments.length == 2 ? [r, o] : r;
}
var l2 = () => Ws(), c2 = () => ze(l2)[0], d2 = (e, n) => {
  const t = kA(() => new m_(e, n));
  return xs(() => () => {
    t.stop();
  }), t;
};
function af(e, n, t) {
  const r = I.fun(n) && n;
  r && !t && (t = []);
  let o = !0, i;
  const s = p_(
    e,
    (a, u) => {
      const _ = r ? r(a, u) : n;
      return i = _.ref, o = o && _.reverse, _;
    },
    // Ensure the props function is called when no deps exist.
    // This works around the 3 argument rule.
    t || [{}]
  );
  if (nn(() => {
    B(s[1].current, (a, u) => {
      const _ = s[1].current[u + (o ? 1 : -1)];
      if (d_(a, i), a.ref) {
        _ && a.update({ to: _.springs });
        return;
      }
      _ ? a.start({ to: _.springs }) : a.start();
    });
  }, t), r || arguments.length == 3) {
    const a = i ?? s[1];
    return a._getProps = (u, _, c) => {
      const l = I.fun(u) ? u(c, _) : u;
      if (l) {
        const f = a.current[c + (l.reverse ? 1 : -1)];
        return f && (l.to = f.springs), l;
      }
    }, s;
  }
  return s[0];
}
function uf(e, n, t) {
  const r = I.fun(n) && n, {
    reset: o,
    sort: i,
    trail: s = 0,
    expires: a = !0,
    exitBeforeEnter: u = !1,
    onDestroyed: _,
    ref: c,
    config: l
  } = r ? r() : n, f = mt(
    () => r || arguments.length == 3 ? Ws() : void 0,
    []
  ), T = $e(e), d = [], h = ee(null), m = o ? null : h.current;
  nn(() => {
    h.current = d;
  }), xs(() => (B(d, (x) => {
    f?.add(x.ctrl), x.ctrl.ref = f;
  }), () => {
    B(h.current, (x) => {
      x.expired && clearTimeout(x.expirationId), ru(x.ctrl, f), x.ctrl.stop(!0);
    });
  }));
  const O = m2(T, r ? r() : n, m), R = o && h.current || [];
  nn(
    () => B(R, ({ ctrl: x, item: C, key: q }) => {
      ru(x, f), Ye(_, C, q);
    })
  );
  const N = [];
  if (m && B(m, (x, C) => {
    x.expired ? (clearTimeout(x.expirationId), R.push(x)) : (C = N[C] = O.indexOf(x.key), ~C && (d[C] = x));
  }), B(T, (x, C) => {
    d[C] || (d[C] = {
      key: O[C],
      item: x,
      phase: "mount",
      ctrl: new f_()
    }, d[C].ctrl.item = x);
  }), N.length) {
    let x = -1;
    const { leave: C } = r ? r() : n;
    B(N, (q, le) => {
      const ne = m[le];
      ~q ? (x = d.indexOf(ne), d[x] = { ...ne, item: T[q] }) : C && d.splice(++x, 0, ne);
    });
  }
  I.fun(i) && d.sort((x, C) => i(x.item, C.item));
  let A = -s;
  const p = l_(), w = js(n), k = /* @__PURE__ */ new Map(), Y = ee(/* @__PURE__ */ new Map()), M = ee(!1);
  B(d, (x, C) => {
    const q = x.key, le = x.phase, ne = r ? r() : n;
    let Ge, we;
    const Ie = Ye(ne.delay || 0, q);
    if (le == "mount")
      Ge = ne.enter, we = "enter";
    else {
      const F = O.indexOf(q) < 0;
      if (le != "leave")
        if (F)
          Ge = ne.leave, we = "leave";
        else if (Ge = ne.update)
          we = "update";
        else
          return;
      else if (!F)
        Ge = ne.enter, we = "enter";
      else
        return;
    }
    if (Ge = Ye(Ge, x.item, C), Ge = I.obj(Ge) ? Fs(Ge) : { to: Ge }, !Ge.config) {
      const F = l || w.config;
      Ge.config = Ye(F, x.item, C, we);
    }
    A += s;
    const D = {
      ...w,
      // we need to add our props.delay value you here.
      delay: Ie + A,
      ref: c,
      immediate: ne.immediate,
      // This prevents implied resets.
      reset: !1,
      // Merge any phase-specific props.
      ...Ge
    };
    if (we == "enter" && I.und(D.from)) {
      const F = r ? r() : n, E = I.und(F.initial) || m ? F.from : F.initial;
      D.from = Ye(E, x.item, C);
    }
    const { onResolve: U } = D;
    D.onResolve = (F) => {
      Ye(U, F);
      const E = h.current, J = E.find((G) => G.key === q);
      if (J && !(F.cancelled && J.phase != "update") && J.ctrl.idle) {
        const G = E.every((ce) => ce.ctrl.idle);
        if (J.phase == "leave") {
          const ce = Ye(a, J.item);
          if (ce !== !1) {
            const te = ce === !0 ? 0 : ce;
            if (J.expired = !0, !G && te > 0) {
              te <= 2147483647 && (J.expirationId = setTimeout(p, te));
              return;
            }
          }
        }
        G && E.some((ce) => ce.expired) && (Y.current.delete(J), u && (M.current = !0), p());
      }
    };
    const P = lu(x.ctrl, D);
    we === "leave" && u ? Y.current.set(x, { phase: we, springs: P, payload: D }) : k.set(x, { phase: we, springs: P, payload: D });
  });
  const j = tn(Sr), Oe = eu(j), pe = j !== Oe && $m(j);
  nn(() => {
    pe && B(d, (x) => {
      x.ctrl.start({ default: j });
    });
  }, [j]), B(k, (x, C) => {
    if (Y.current.size) {
      const q = d.findIndex((le) => le.key === C.key);
      d.splice(q, 1);
    }
  }), nn(
    () => {
      B(
        Y.current.size ? Y.current : k,
        ({ phase: x, payload: C }, q) => {
          const { ctrl: le } = q;
          q.phase = x, f?.add(le), pe && x == "enter" && le.start({ default: j }), C && (d_(le, C.ref), (le.ref || f) && !M.current ? le.update(C) : (le.start(C), M.current && (M.current = !1)));
        }
      );
    },
    o ? void 0 : t
  );
  const Ne = (x) => /* @__PURE__ */ sn.createElement(sn.Fragment, null, d.map((C, q) => {
    const { springs: le } = k.get(C) || C.ctrl, ne = x({ ...le }, C.item, C, q);
    return ne && ne.type ? /* @__PURE__ */ sn.createElement(
      ne.type,
      {
        ...ne.props,
        key: I.str(C.key) || I.num(C.key) ? C.key : C.ctrl.id,
        ref: ne.ref
      }
    ) : ne;
  }));
  return f ? [Ne, f] : Ne;
}
var h2 = 1;
function m2(e, { key: n, keys: t = n }, r) {
  if (t === null) {
    const o = /* @__PURE__ */ new Set();
    return e.map((i) => {
      const s = r && r.find(
        (a) => a.item === i && a.phase !== "leave" && !o.has(a)
      );
      return s ? (o.add(s), s.key) : h2++;
    });
  }
  return I.und(t) ? e : I.fun(t) ? e.map(t) : $e(t);
}
var f2 = ({
  container: e,
  ...n
} = {}) => {
  const [t, r] = Gr(
    () => ({
      scrollX: 0,
      scrollY: 0,
      scrollXProgress: 0,
      scrollYProgress: 0,
      ...n
    }),
    []
  );
  return nn(() => {
    const o = MA(
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
      B(Object.values(t), (i) => i.stop()), o();
    };
  }, []), t;
}, p2 = ({
  container: e,
  ...n
}) => {
  const [t, r] = Gr(
    () => ({
      width: 0,
      height: 0,
      ...n
    }),
    []
  );
  return nn(() => {
    const o = Vm(
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
      B(Object.values(t), (i) => i.stop()), o();
    };
  }, []), t;
}, T2 = {
  any: 0,
  all: 1
};
function E2(e, n) {
  const [t, r] = ze(!1), o = ee(), i = I.fun(e) && e, s = i ? i() : {}, { to: a = {}, from: u = {}, ..._ } = s, c = i ? n : e, [l, f] = Gr(() => ({ from: u, ..._ }), []);
  return nn(() => {
    const T = o.current, {
      root: d,
      once: h,
      amount: m = "any",
      ...O
    } = c ?? {};
    if (!T || h && t || typeof IntersectionObserver > "u")
      return;
    const R = /* @__PURE__ */ new WeakMap(), N = () => (a && f.start(a), r(!0), h ? void 0 : () => {
      u && f.start(u), r(!1);
    }), A = (w) => {
      w.forEach((k) => {
        const Y = R.get(k.target);
        if (k.isIntersecting !== !!Y)
          if (k.isIntersecting) {
            const M = N();
            I.fun(M) ? R.set(k.target, M) : p.unobserve(k.target);
          } else
            Y && (Y(), R.delete(k.target));
      });
    }, p = new IntersectionObserver(A, {
      root: d && d.current || void 0,
      threshold: typeof m == "number" || Array.isArray(m) ? m : T2[m],
      ...O
    });
    return p.observe(T), () => p.unobserve(T);
  }, [c]), i ? [o, l] : [o, t];
}
function O2({ children: e, ...n }) {
  return e(Gr(n));
}
function R2({
  items: e,
  children: n,
  ...t
}) {
  const r = af(e.length, t);
  return e.map((o, i) => {
    const s = n(o, i);
    return I.fun(s) ? s(r[i]) : s;
  });
}
function b2({
  items: e,
  children: n,
  ...t
}) {
  return uf(e, t)(n);
}
var Xs = class extends Vs {
  constructor(e, n) {
    super(), this.source = e, this.idle = !0, this._active = /* @__PURE__ */ new Set(), this.calc = pr(...n);
    const t = this._get(), r = nu(t);
    c_(this, r.create(t));
  }
  advance(e) {
    const n = this._get(), t = this.get();
    Xn(n, t) || (yn(this).setValue(n), this._onChange(n, this.idle)), !this.idle && ec(this._active) && Ea(this);
  }
  _get() {
    const e = I.arr(this.source) ? this.source.map(Qe) : $e(Qe(this.source));
    return this.calc(...e);
  }
  _start() {
    this.idle && !ec(this._active) && (this.idle = !1, B(Ls(this), (e) => {
      e.done = !1;
    }), mn.skipAnimation ? (X.batchedUpdates(() => this.advance()), Ea(this)) : Ko.start(this));
  }
  // Observe our sources only when we're observed.
  _attach() {
    let e = 1;
    B($e(this.source), (n) => {
      _n(n) && Ar(n, this), su(n) && (n.idle || this._active.add(n), e = Math.max(e, n.priority + 1));
    }), this.priority = e, this._start();
  }
  // Stop observing our sources once we have no observers.
  _detach() {
    B($e(this.source), (e) => {
      _n(e) && fo(e, this);
    }), this._active.clear(), Ea(this);
  }
  /** @internal */
  eventObserved(e) {
    e.type == "change" ? e.idle ? this.advance() : (this._active.add(e.parent), this._start()) : e.type == "idle" ? this._active.delete(e.parent) : e.type == "priority" && (this.priority = $e(this.source).reduce(
      (n, t) => Math.max(n, (su(t) ? t.priority : 0) + 1),
      0
    ));
  }
};
function g2(e) {
  return e.idle !== !1;
}
function ec(e) {
  return !e.size || Array.from(e).every(g2);
}
function Ea(e) {
  e.idle || (e.idle = !0, B(Ls(e), (n) => {
    n.done = !0;
  }), mo(e, {
    type: "idle",
    parent: e
  }));
}
var N2 = (e, ...n) => new Xs(e, n), I2 = (e, ...n) => (Fm(), new Xs(e, n));
mn.assign({
  createStringInterpolator: Bm,
  to: (e, n) => new Xs(e, n)
});
var A2 = Ko.advance, _f = /^--/;
function S2(e, n) {
  return n == null || typeof n == "boolean" || n === "" ? "" : typeof n == "number" && n !== 0 && !_f.test(e) && !(qr.hasOwnProperty(e) && qr[e]) ? n + "px" : ("" + n).trim();
}
var nc = {};
function G2(e, n) {
  if (!e.nodeType || !e.setAttribute)
    return !1;
  const t = e.nodeName === "filter" || e.parentNode && e.parentNode.nodeName === "filter", { style: r, children: o, scrollTop: i, scrollLeft: s, viewBox: a, ...u } = n, _ = Object.values(u), c = Object.keys(u).map(
    (l) => t || e.hasAttribute(l) ? l : nc[l] || (nc[l] = l.replace(
      /([A-Z])/g,
      // Attributes are written in dash case
      (f) => "-" + f.toLowerCase()
    ))
  );
  o !== void 0 && (e.textContent = o);
  for (const l in r)
    if (r.hasOwnProperty(l)) {
      const f = S2(l, r[l]);
      _f.test(l) ? e.style.setProperty(l, f) : e.style[l] = f;
    }
  c.forEach((l, f) => {
    e.setAttribute(l, _[f]);
  }), i !== void 0 && (e.scrollTop = i), s !== void 0 && (e.scrollLeft = s), a !== void 0 && e.setAttribute("viewBox", a);
}
var qr = {
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
}, v2 = (e, n) => e + n.charAt(0).toUpperCase() + n.substring(1), C2 = ["Webkit", "Ms", "Moz", "O"];
qr = Object.keys(qr).reduce((e, n) => (C2.forEach((t) => e[v2(t, n)] = e[n]), e), qr);
var D2 = /^(matrix|translate|scale|rotate|skew)/, y2 = /^(translate)/, U2 = /^(rotate|skew)/, Oa = (e, n) => I.num(e) && e !== 0 ? e + n : e, Ci = (e, n) => I.arr(e) ? e.every((t) => Ci(t, n)) : I.num(e) ? e === n : parseFloat(e) === n, H2 = class extends Bs {
  constructor({ x: e, y: n, z: t, ...r }) {
    const o = [], i = [];
    (e || n || t) && (o.push([e || 0, n || 0, t || 0]), i.push((s) => [
      `translate3d(${s.map((a) => Oa(a, "px")).join(",")})`,
      // prettier-ignore
      Ci(s, 0)
    ])), Ln(r, (s, a) => {
      if (a === "transform")
        o.push([s || ""]), i.push((u) => [u, u === ""]);
      else if (D2.test(a)) {
        if (delete r[a], I.und(s))
          return;
        const u = y2.test(a) ? "px" : U2.test(a) ? "deg" : "";
        o.push($e(s)), i.push(
          a === "rotate3d" ? ([_, c, l, f]) => [
            `rotate3d(${_},${c},${l},${Oa(f, u)})`,
            Ci(f, 0)
          ] : (_) => [
            `${a}(${_.map((c) => Oa(c, u)).join(",")})`,
            Ci(_, a.startsWith("scale") ? 1 : 0)
          ]
        );
      }
    }), o.length && (r.transform = new w2(o, i)), super(r);
  }
}, w2 = class extends km {
  constructor(e, n) {
    super(), this.inputs = e, this.transforms = n, this._value = null;
  }
  get() {
    return this._value || (this._value = this._get());
  }
  _get() {
    let e = "", n = !0;
    return B(this.inputs, (t, r) => {
      const o = Qe(t[0]), [i, s] = this.transforms[r](
        I.arr(o) ? o : t.map(Qe)
      );
      e += " " + i, n = n && s;
    }), n ? "none" : e;
  }
  // Start observing our inputs once we have an observer.
  observerAdded(e) {
    e == 1 && B(
      this.inputs,
      (n) => B(
        n,
        (t) => _n(t) && Ar(t, this)
      )
    );
  }
  // Stop observing our inputs once we have no observers.
  observerRemoved(e) {
    e == 0 && B(
      this.inputs,
      (n) => B(
        n,
        (t) => _n(t) && fo(t, this)
      )
    );
  }
  eventObserved(e) {
    e.type == "change" && (this._value = null), mo(this, e);
  }
}, P2 = [
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
mn.assign({
  batchedUpdates: fc,
  createStringInterpolator: Bm,
  colors: aA
});
var M2 = $A(P2, {
  applyAnimatedValues: G2,
  createAnimatedStyle: (e) => new H2(e),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getComponentProps: ({ scrollTop: e, scrollLeft: n, ...t }) => t
}), tc = M2.animated;
const k2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Any: zA,
  BailSignal: iu,
  Controller: f_,
  FrameValue: Vs,
  Globals: mn,
  Interpolation: Xs,
  Spring: O2,
  SpringContext: Sr,
  SpringRef: Ws,
  SpringValue: m_,
  Trail: R2,
  Transition: b2,
  a: tc,
  animated: tc,
  config: zm,
  createInterpolator: pr,
  easings: Mm,
  inferTo: Fs,
  interpolate: I2,
  to: N2,
  update: A2,
  useChain: e2,
  useInView: E2,
  useIsomorphicLayoutEffect: nn,
  useReducedMotion: FA,
  useResize: p2,
  useScroll: f2,
  useSpring: Gr,
  useSpringRef: c2,
  useSpringValue: d2,
  useSprings: p_,
  useTrail: af,
  useTransition: uf
}, Symbol.toStringTag, { value: "Module" })), x2 = () => {
  const { Spring: e } = gr(), n = Gr({
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
}, L2 = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMjMiIHZpZXdCb3g9IjAgMCAxNyAyMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0Ljk4OTcgMTUuNDA5NEwxNC40MjE2IDE1Ljc3NTJDMTQuNzcxMiAxNS40NTUxIDE1LjAzMzQgMTQuOTk3OCAxNS4wMzM0IDE0LjU0MDZDMTUuMDMzNCAxMy43NjMzIDE0LjY4MzggMTMuMTIzMSAxMy41NDc1IDEyLjU3NDRMMy44NDU3NSA4LjEzOTA3QzEuODc5MTcgNy4yMjQ1NiAwLjY1NTUxOCA2LjA4MTQ0IDAuNjU1NTE4IDQuMDIzODFDMC42NTU1MTggMi4xNDkwOCAxLjU3MzI1IDAuOTE0NTAyIDIuOTcxNzEgMEMyLjc1MzIgMC4zMjAwNzYgMi42MjIxIDAuNzMxNjAyIDIuNjIyMSAxLjIzNDU4QzIuNjIyMSAyLjM3NzcgMy41Mzk4NCAyLjg4MDY4IDQuNDU3NTcgMy4yOTIyMUwxMy44OTcyIDcuNjM2MDlDMTUuNjAxNSA4LjQxMzQyIDE3IDkuNjQ3OTkgMTcgMTEuNzk3MUMxNyAxMy41MzQ2IDE2LjIxMzQgMTQuNjMyIDE0Ljk4OTcgMTUuNDA5NFoiIGZpbGw9IiMwMTY4QTIiLz4KPHBhdGggZD0iTTEwLjU5MzMgMTEuMTM1OUwxMy42NTI0IDEyLjU1MzRDMTQuNzg4NyAxMy4xMDIxIDE1LjEzODMgMTMuNjk2NSAxNS4xMzgzIDE0LjUxOTZDMTUuMTM4MyAxNC45NzY4IDE0Ljg3NjEgMTUuNDM0MSAxNC41MjY0IDE1Ljc1NDJMOS4zNjk2MyAxMy4zNzY1TDEwLjI0MzcgMTIuODczNUMxMC45ODY2IDEyLjQ2MiAxMS4yMDUxIDEyLjE4NzYgMTEuMjA1MSAxMS45MTMzQzExLjI0ODggMTEuNTkzMiAxMS4wNzQgMTEuMzY0NiAxMC41OTMzIDExLjEzNTlaIiBmaWxsPSIjMDE2OEExIi8+CjxwYXRoIGQ9Ik01LjE1NjgxIDIyLjA4NTRDNC40NTc1OCAyMi40OTcgMy44NDU3NiAyMi43NzEzIDMuMTkwMjMgMjIuNzcxM0MxLjQ4NTg2IDIyLjc3MTMgMC4wODc0MDM1IDIxLjMwODEgMCAxOS41NzA1TDMuMjc3NjMgMTcuNTEyOUw4LjQzNDQ0IDE5LjkzNjNMNS4xNTY4MSAyMi4wODU0WiIgZmlsbD0iIzAxNjhBMSIvPgo8cGF0aCBkPSJNNi45MzI1NiAxMy4yODAxTDQuNDg1MjYgMTIuMTM3QzMuMzkyNzEgMTEuNjM0IDIuMzg3NTcgMTEuMjIyNSAyLjM4NzU3IDkuOTQyMTZDMi4zODc1NyA5LjMwMiAyLjU2MjM4IDguOTM2MiAyLjg2ODI5IDguNjE2MTNMOC4wMjUxIDEwLjk5MzhMNi43NTc3NSAxMS43NzEyQzYuNDA4MTQgMTEuOTk5OCA2LjE0NTkzIDEyLjE4MjcgNi4xNDU5MyAxMi41MDI4QzYuMTQ1OTMgMTIuNzc3MSA2LjQ5NTU0IDEzLjA1MTUgNi45MzI1NiAxMy4yODAxWiIgZmlsbD0iIzE1NTQ3NyIvPgo8cGF0aCBkPSJNMTUuOTA3NCAyM0MxNC41OTY0IDIxLjk0ODMgMTMuMTk3OSAyMS4yNjI0IDExLjUzNzMgMjAuNDM5NEwzLjc1ODM1IDE2LjgyNzFDMS43OTE3NyAxNS45MTI2IDAuNDgwNzEzIDE0LjY3OCAwLjQ4MDcxMyAxMi42NjYxQzAuNDgwNzEzIDEwLjY1NDIgMS4zOTg0NSA5LjY5Mzk5IDIuNTc4NCA4LjkxNjY2TDMuMDE1NDIgOC42NDIzMUMyLjcwOTUgOC45NjIzOSAyLjUzNDcgOS4zMjgxOSAyLjUzNDcgOS45NjgzNEMyLjUzNDcgMTEuMjAyOSAzLjU4MzU0IDExLjY2MDIgNC42MzIzOCAxMi4xNjMxTDEzLjY3ODcgMTYuMzI0MUMxNS4yNTE5IDE3LjAxIDE2LjY5NDEgMTguMjQ0NiAxNi42OTQxIDIwLjM0NzlDMTYuNzgxNSAyMS40OTExIDE2LjM0NDUgMjIuNDk3IDE1LjkwNzQgMjNaIiBmaWxsPSIjMTU1NDc3Ii8+Cjwvc3ZnPgo=", B2 = Ee.div`
  ${Fe("23%", "28px")}
  ${yt("flex-start", "center")}
  gap: 25px;
  img {
    transition: transform 200ms;
    &:hover {
      transform: scale(1.1) rotate(3deg);
    }
  }
`;
Ee.span`
  color: ${({ theme: e }) => e.light};
  cursor: pointer;
`;
const j2 = () => {
  const e = pn(), { openFile: n, saveFile: t } = Im(), r = Am(), o = () => {
    e.tabs.createTab();
  };
  return /* @__PURE__ */ Z(B2, { children: [
    /* @__PURE__ */ b(pc, { to: Bd.MAIN, children: /* @__PURE__ */ b("img", { src: L2 }) }),
    /* @__PURE__ */ b(Lr, { type: "dashed", size: "small", onClick: n, children: "Open" }),
    /* @__PURE__ */ b(Lr, { type: "dashed", size: "small", onClick: t, children: "Save" }),
    /* @__PURE__ */ b(Lr, { type: "dashed", size: "small", onClick: o, children: "New" }),
    /* @__PURE__ */ b(Lr, { type: "dashed", size: "small", onClick: r, children: "Run" })
  ] });
}, F2 = Ee.div`
  ${Fe("23%", "100%")};
  ${yt("flex-start", "center")};
`;
Ee(ht)`
  margin-top: 0;
  margin-left: 20px;
  svg {
    color: ${({ theme: e, $disabled: n }) => n ? e.secondaryGrey : e.light};
  }
`;
const V2 = fn(() => {
  const n = !Rr().isAllowedToExecute(), t = Am();
  return /* @__PURE__ */ b(F2, { children: /* @__PURE__ */ b(
    NO,
    {
      type: "primary",
      onClick: t,
      disabled: n,
      override: "#38a886",
      children: "Run Code"
    }
  ) });
}), W2 = Ee.div`
  background: ${({ theme: e }) => e.grey};
  border-bottom: 2px solid ${({ theme: e }) => e.lightGrey};
  height: ${Fe("100%", "42px")};
  box-sizing: border-box;
  ${yt("space-between", "center")}
  ${S1(23)}
`, X2 = Ee.h2`
  color: ${({ theme: e }) => e.light}
`, K2 = fn(() => {
  const n = Rr().getActiveTab(), { spring: t, animatedDiv: r } = x2();
  return /* @__PURE__ */ Z(W2, { as: r, style: t, children: [
    /* @__PURE__ */ b(j2, {}),
    /* @__PURE__ */ Z(X2, { children: [
      n.getLabel(),
      " - CodeGear"
    ] }),
    /* @__PURE__ */ b(V2, {})
  ] });
}), Y2 = () => /* @__PURE__ */ b(ko, { children: /* @__PURE__ */ b(K2, {}) });
class $2 {
  constructor(n) {
    this.state = n, rt(this);
  }
  getActiveTab(n = this.state.activeKey) {
    return this.state.content.find((t) => t.getKeyId() === n);
  }
  getActiveTabText() {
    return this.getActiveTab()?.getContent();
  }
  getTabIndex(n = this.state.activeKey) {
    return this.state.content.findIndex((t) => t.getKeyId() === n);
  }
  getActiveLanguage() {
    return this.getActiveTab()?.lang;
  }
  isAllowedToExecute() {
    const n = this.getActiveLanguage();
    return AT.includes(n);
  }
}
class z2 {
  constructor(n) {
    rt(this), this.state = n, this.getters = n.getters, this.tabs = new yI(n), this.editor = new II(n), this.terminal = new Bg(n);
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
    this.state.storage = new ih(n);
  }
}
class J2 {
  constructor(n) {
    rt(this), this.state = n, this.getters = n.getters, this.actions = n.actions, this.codeRunner = new ZI(n);
  }
}
class q2 {
  constructor() {
    this.activeKey = "", this.content = [], this.theme = "vs-dark", this.fontSize = 20, this.tabSize = 4, this.customBackground = "#3d3d3d", this.customColor = "#3d3d3d", this.isStorageDisabled = !1, this.executeMessages = [], rt(this);
    const n = new ih(this.isStorageDisabled);
    this.storage = n, this.getters = new $2(this), this.actions = new z2(this), this.services = new J2(this), this.theme = n.get("EDITOR_THEME", "vs-dark"), this.fontSize = Number(n.get("EDITOR_FONT_SIZE", 20)), this.tabSize = Number(n.get("EDITOR_TAB_SIZE", 4)), this.customBackground = n.get("EDITOR_CUSTOM_BACKGROUND", "#3d3d3d"), this.customColor = n.get("EDITOR_CUSTOM_COLOR", "#3d3d3d");
    const t = n.get("EDITOR_CONTENT_DATA", []);
    this.executeMessages = n.get("EDITOR_EXECUTE_MESSAGES", []), t.length || this.actions.tabs.createTab();
    for (const o of t)
      this.content.push(new gm({ instance: o }));
    const r = this.content[0];
    this.activeKey = r.getKeyId();
  }
}
const vr = as({}), Q2 = ({ children: e }) => {
  const n = new q2();
  return /* @__PURE__ */ b(vr.Provider, { value: n, children: e });
}, lf = as({}), Z2 = ({ children: e }) => {
  const n = mt(() => ({
    isSettingsOpened: !1,
    isTerminalOpened: !0,
    selectedTerminalTab: "terminal"
  }), []), t = (a, u) => ({ ...a, ...u }), [r, o] = bf(t, n), i = (a) => {
    r[a] ? o({ [a]: !1 }) : o({ [a]: !0 });
  }, s = mt(() => ({
    state: r,
    update: o,
    toggle: i
  }), [r]);
  return /* @__PURE__ */ b(lf.Provider, { value: s, children: e });
}, cf = () => {
  const e = Us();
  return ({ background: n, color: t }) => {
    e?.editor.defineTheme(Li, {
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
function eS(e, n) {
  for (var t in n)
    e[t] = n[t];
  return e;
}
function rc(e, n) {
  for (var t in e)
    if (t !== "__source" && !(t in n))
      return !0;
  for (var r in n)
    if (r !== "__source" && e[r] !== n[r])
      return !0;
  return !1;
}
function oc(e) {
  this.props = e;
}
(oc.prototype = new Qn()).isPureReactComponent = !0, oc.prototype.shouldComponentUpdate = function(e, n) {
  return rc(this.props, e) || rc(this.state, n);
};
var ic = V.__b;
V.__b = function(e) {
  e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), ic && ic(e);
};
var nS = V.__e;
V.__e = function(e, n, t, r) {
  if (e.then) {
    for (var o, i = n; i = i.__; )
      if ((o = i.__c) && o.__c)
        return n.__e == null && (n.__e = t.__e, n.__k = t.__k), o.__c(e, n);
  }
  nS(e, n, t, r);
};
var sc = V.unmount;
function df(e, n, t) {
  return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(r) {
    typeof r.__c == "function" && r.__c();
  }), e.__c.__H = null), (e = eS({}, e)).__c != null && (e.__c.__P === t && (e.__c.__P = n), e.__c = null), e.__k = e.__k && e.__k.map(function(r) {
    return df(r, n, t);
  })), e;
}
function hf(e, n, t) {
  return e && (e.__v = null, e.__k = e.__k && e.__k.map(function(r) {
    return hf(r, n, t);
  }), e.__c && e.__c.__P === n && (e.__e && t.insertBefore(e.__e, e.__d), e.__c.__e = !0, e.__c.__P = t)), e;
}
function Ra() {
  this.__u = 0, this.t = null, this.__b = null;
}
function mf(e) {
  var n = e.__.__c;
  return n && n.__a && n.__a(e);
}
function _i() {
  this.u = null, this.o = null;
}
V.unmount = function(e) {
  var n = e.__c;
  n && n.__R && n.__R(), n && e.__h === !0 && (e.type = null), sc && sc(e);
}, (Ra.prototype = new Qn()).__c = function(e, n) {
  var t = n.__c, r = this;
  r.t == null && (r.t = []), r.t.push(t);
  var o = mf(r.__v), i = !1, s = function() {
    i || (i = !0, t.__R = null, o ? o(a) : a());
  };
  t.__R = s;
  var a = function() {
    if (!--r.__u) {
      if (r.state.__a) {
        var _ = r.state.__a;
        r.__v.__k[0] = hf(_, _.__c.__P, _.__c.__O);
      }
      var c;
      for (r.setState({ __a: r.__b = null }); c = r.t.pop(); )
        c.forceUpdate();
    }
  }, u = n.__h === !0;
  r.__u++ || u || r.setState({ __a: r.__b = r.__v.__k[0] }), e.then(s, s);
}, Ra.prototype.componentWillUnmount = function() {
  this.t = [];
}, Ra.prototype.render = function(e, n) {
  if (this.__b) {
    if (this.__v.__k) {
      var t = document.createElement("div"), r = this.__v.__k[0].__c;
      this.__v.__k[0] = df(this.__b, t, r.__O = r.__P);
    }
    this.__b = null;
  }
  var o = n.__a && Y_(oo, null, e.fallback);
  return o && (o.__h = null), [Y_(oo, null, n.__a ? null : e.children), o];
};
var ac = function(e, n, t) {
  if (++t[1] === t[0] && e.o.delete(n), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.o.size))
    for (t = e.u; t; ) {
      for (; t.length > 3; )
        t.pop()();
      if (t[1] < t[0])
        break;
      e.u = t = t[2];
    }
};
(_i.prototype = new Qn()).__a = function(e) {
  var n = this, t = mf(n.__v), r = n.o.get(e);
  return r[0]++, function(o) {
    var i = function() {
      n.props.revealOrder ? (r.push(o), ac(n, e, r)) : o();
    };
    t ? t(i) : i();
  };
}, _i.prototype.render = function(e) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var n = Vi(e.children);
  e.revealOrder && e.revealOrder[0] === "b" && n.reverse();
  for (var t = n.length; t--; )
    this.o.set(n[t], this.u = [1, 0, this.u]);
  return e.children;
}, _i.prototype.componentDidUpdate = _i.prototype.componentDidMount = function() {
  var e = this;
  this.o.forEach(function(n, t) {
    ac(e, t, n);
  });
};
var tS = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, rS = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, oS = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, iS = /[A-Z0-9]/g, sS = typeof document < "u", aS = function(e) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e);
};
Qn.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
  Object.defineProperty(Qn.prototype, e, { configurable: !0, get: function() {
    return this["UNSAFE_" + e];
  }, set: function(n) {
    Object.defineProperty(this, e, { configurable: !0, writable: !0, value: n });
  } });
});
var uc = V.event;
function uS() {
}
function _S() {
  return this.cancelBubble;
}
function lS() {
  return this.defaultPrevented;
}
V.event = function(e) {
  return uc && (e = uc(e)), e.persist = uS, e.isPropagationStopped = _S, e.isDefaultPrevented = lS, e.nativeEvent = e;
};
var cS = { enumerable: !1, configurable: !0, get: function() {
  return this.class;
} }, _c = V.vnode;
V.vnode = function(e) {
  typeof e.type == "string" && function(n) {
    var t = n.props, r = n.type, o = {};
    for (var i in t) {
      var s = t[i];
      if (!(i === "value" && "defaultValue" in t && s == null || sS && i === "children" && r === "noscript" || i === "class" || i === "className")) {
        var a = i.toLowerCase();
        i === "defaultValue" && "value" in t && t.value == null ? i = "value" : i === "download" && s === !0 ? s = "" : a === "ondoubleclick" ? i = "ondblclick" : a !== "onchange" || r !== "input" && r !== "textarea" || aS(t.type) ? a === "onfocus" ? i = "onfocusin" : a === "onblur" ? i = "onfocusout" : oS.test(i) ? i = a : r.indexOf("-") === -1 && rS.test(i) ? i = i.replace(iS, "-$&").toLowerCase() : s === null && (s = void 0) : a = i = "oninput", a === "oninput" && o[i = a] && (i = "oninputCapture"), o[i] = s;
      }
    }
    r == "select" && o.multiple && Array.isArray(o.value) && (o.value = Vi(t.children).forEach(function(u) {
      u.props.selected = o.value.indexOf(u.props.value) != -1;
    })), r == "select" && o.defaultValue != null && (o.value = Vi(t.children).forEach(function(u) {
      u.props.selected = o.multiple ? o.defaultValue.indexOf(u.props.value) != -1 : o.defaultValue == u.props.value;
    })), t.class && !t.className ? (o.class = t.class, Object.defineProperty(o, "className", cS)) : (t.className && !t.class || t.class && t.className) && (o.class = o.className = t.className), n.props = o;
  }(e), e.$$typeof = tS, _c && _c(e);
};
var lc = V.__r;
V.__r = function(e) {
  lc && lc(e), e.__c;
};
var cc = V.diffed;
V.diffed = function(e) {
  cc && cc(e);
  var n = e.props, t = e.__e;
  t != null && e.type === "textarea" && "value" in n && n.value !== t.value && (t.value = n.value == null ? "" : n.value);
};
function dS(e) {
  if (!(ka(e) && "base" in e && typeof e.base == "string" && "colors" in e && ka(e.colors)))
    throw new Error(Hs.WrongJsonObject("ThemeObject"));
}
const hS = () => {
  const e = Us(), n = Fd(), { theme: t, customBackground: r, customColor: o } = vn(), i = cf();
  return _O(() => {
    let s = 0;
    Ca.forEach(async (a) => {
      try {
        const u = await mS(`./themes/${a}.json`);
        dS(u), e?.editor.defineTheme(a, u);
      } catch {
        console.log(Hs.ThemeUpload(a));
      }
      s += 1, s === Ca.length && (i({ background: r, color: o }), e?.editor.setTheme(t), n.on());
    });
  }, [e]), n.val;
};
function mS(e) {
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
      return new Promise(function(n, t) {
        (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(
          t.bind(null, new Error("Unknown variable dynamic import: " + e))
        );
      });
  }
}
const fS = ({ children: e }) => {
  const n = hS();
  return /* @__PURE__ */ b(so, { when: n, children: e });
}, pS = Ee.div`
  ${Fe("100vw", "100vh")}
`, TS = Ee.div`
  ${Fe("100%", "calc(100% - 45px)")};
  display: flex;
`, IS = () => (RO(), /* @__PURE__ */ b(TO, { children: /* @__PURE__ */ b(Q2, { children: /* @__PURE__ */ b(fS, { children: /* @__PURE__ */ b(Z2, { children: /* @__PURE__ */ b(pO, { children: /* @__PURE__ */ Z(pS, { children: [
  /* @__PURE__ */ b(Y2, {}),
  /* @__PURE__ */ Z(TS, { children: [
    /* @__PURE__ */ b(NI, {}),
    /* @__PURE__ */ b(qI, {}),
    /* @__PURE__ */ b(lN, {})
  ] }),
  /* @__PURE__ */ b(x1, {})
] }) }) }) }) }) }));
export {
  IS as Editor,
  z2 as EditorActions,
  $2 as EditorGetters,
  q2 as EditorStore,
  vr as EditorStoreContext,
  lf as ModalsContext,
  cf as useCustomTheme
};
