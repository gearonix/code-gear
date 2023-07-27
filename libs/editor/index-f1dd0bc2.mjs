import * as Yt from "react";
import Ae, { useState as qe, forwardRef as Qt, memo as Zt, useContext as Qe, useRef as Z, useCallback as Et, useEffect as Ge, createContext as zi, useMemo as it, createElement as Ym, useImperativeHandle as Qc, useLayoutEffect as Km, useReducer as $m, lazy as zm } from "react";
import { jsx as V, jsxs as _n, Fragment as Zc } from "react/jsx-runtime";
import { unstable_batchedUpdates as el } from "react-dom";
import { message as Jm, ConfigProvider as qm, Button as yr, Select as Qm, Tabs as nl, Popconfirm as Zm } from "antd";
import { Link as ef } from "react-router-dom";
import "react-smooth-scrollbar";
function se(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    t[r - 1] = arguments[r];
  throw new Error(typeof e == "number" ? "[MobX] minified error nr: " + e + (t.length ? " " + t.map(String).join(",") : "") + ". Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts" : "[MobX] " + e);
}
var nf = {};
function qa() {
  return typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : nf;
}
var tl = Object.assign, Ri = Object.getOwnPropertyDescriptor, Dn = Object.defineProperty, ho = Object.prototype, ua = [];
Object.freeze(ua);
var rl = {};
Object.freeze(rl);
var tf = typeof Proxy < "u", rf = /* @__PURE__ */ Object.toString();
function ol() {
  tf || se("Proxy not available");
}
function il(e) {
  var n = !1;
  return function() {
    if (!n)
      return n = !0, e.apply(this, arguments);
  };
}
var Bt = function() {
};
function gn(e) {
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
  return typeof t == "function" && t.toString() === rf;
}
function sl(e) {
  var n = e?.constructor;
  return n ? n.name === "GeneratorFunction" || n.displayName === "GeneratorFunction" : !1;
}
function mo(e, n, t) {
  Dn(e, n, {
    enumerable: !1,
    writable: !0,
    configurable: !0,
    value: t
  });
}
function al(e, n, t) {
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
function lr(e) {
  return e instanceof Map;
}
function fo(e) {
  return e instanceof Set;
}
var ul = typeof Object.getOwnPropertySymbols < "u";
function of(e) {
  var n = Object.keys(e);
  if (!ul)
    return n;
  var t = Object.getOwnPropertySymbols(e);
  return t.length ? [].concat(n, t.filter(function(r) {
    return ho.propertyIsEnumerable.call(e, r);
  })) : n;
}
var er = typeof Reflect < "u" && Reflect.ownKeys ? Reflect.ownKeys : ul ? function(e) {
  return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
} : (
  /* istanbul ignore next */
  Object.getOwnPropertyNames
);
function _l(e) {
  return e === null ? null : typeof e == "object" ? "" + e : e;
}
function Xn(e, n) {
  return ho.hasOwnProperty.call(e, n);
}
var sf = Object.getOwnPropertyDescriptors || function(n) {
  var t = {};
  return er(n).forEach(function(r) {
    t[r] = Ri(n, r);
  }), t;
};
function s_(e, n) {
  for (var t = 0; t < n.length; t++) {
    var r = n[t];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, _f(r.key), r);
  }
}
function Qa(e, n, t) {
  return n && s_(e.prototype, n), t && s_(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function nr() {
  return nr = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = arguments[n];
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    }
    return e;
  }, nr.apply(this, arguments);
}
function cl(e, n) {
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
function af(e, n) {
  if (e) {
    if (typeof e == "string")
      return a_(e, n);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set")
      return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return a_(e, n);
  }
}
function a_(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var t = 0, r = new Array(n); t < n; t++)
    r[t] = e[t];
  return r;
}
function jt(e, n) {
  var t = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t)
    return (t = t.call(e)).next.bind(t);
  if (Array.isArray(e) || (t = af(e)) || n && e && typeof e.length == "number") {
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
function uf(e, n) {
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
function _f(e) {
  var n = uf(e, "string");
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
  Xn(e, Gn) || mo(e, Gn, nr({}, e[Gn])), Ef(t) || (e[Gn][n] = t);
}
function cf(e) {
  return Xn(e, Gn) || mo(e, Gn, nr({}, e[Gn])), e[Gn];
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
    return Dl(this);
  }, n.reportChanged = function() {
    $e(), Ul(this), v.stateVersion = v.stateVersion < Number.MAX_SAFE_INTEGER ? v.stateVersion + 1 : Number.MIN_SAFE_INTEGER, ze();
  }, n.toString = function() {
    return this.name_;
  }, e;
}(), Za = /* @__PURE__ */ Ot("Atom", To);
function ll(e, n, t) {
  n === void 0 && (n = Bt), t === void 0 && (t = Bt);
  var r = new To(e);
  return n !== Bt && Op(r, n), t !== Bt && xl(r, t), r;
}
function lf(e, n) {
  return e === n;
}
function df(e, n) {
  return su(e, n);
}
function hf(e, n) {
  return su(e, n, 1);
}
function mf(e, n) {
  return Object.is ? Object.is(e, n) : e === n ? e !== 0 || 1 / e === 1 / n : e !== e && n !== n;
}
var gi = {
  identity: lf,
  structural: df,
  default: mf,
  shallow: hf
};
function tr(e, n, t) {
  return ru(e) ? e : Array.isArray(e) ? xe.array(e, {
    name: t
  }) : zn(e) ? xe.object(e, void 0, {
    name: t
  }) : lr(e) ? xe.map(e, {
    name: t
  }) : fo(e) ? xe.set(e, {
    name: t
  }) : typeof e == "function" && !tu(e) && !Si(e) ? sl(e) ? $r(e) : Kr(t, e) : e;
}
function ff(e, n, t) {
  if (e == null || or(e) || Io(e) || Nt(e) || Ut(e))
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
  if (lr(e))
    return xe.map(e, {
      name: t,
      deep: !1
    });
  if (fo(e))
    return xe.set(e, {
      name: t,
      deep: !1
    });
}
function qi(e) {
  return e;
}
function pf(e, n) {
  return su(e, n) ? n : e;
}
var Tf = "override";
function Ef(e) {
  return e.annotationType_ === Tf;
}
function Eo(e, n) {
  return {
    annotationType_: e,
    options_: n,
    make_: Of,
    extend_: Rf
  };
}
function Of(e, n, t, r) {
  var o;
  if ((o = this.options_) != null && o.bound)
    return this.extend_(e, n, t, !1) === null ? 0 : 1;
  if (r === e.target_)
    return this.extend_(e, n, t, !1) === null ? 0 : 2;
  if (tu(t.value))
    return 1;
  var i = dl(e, this, n, t, !1);
  return Dn(r, n, i), 2;
}
function Rf(e, n, t, r) {
  var o = dl(e, this, n, t);
  return e.defineProperty_(n, o, r);
}
function gf(e, n, t, r) {
  n.annotationType_, r.value;
}
function dl(e, n, t, r, o) {
  var i, s, a, u, _, l, c;
  o === void 0 && (o = v.safeDescriptors), gf(e, n, t, r);
  var f = r.value;
  if ((i = n.options_) != null && i.bound) {
    var T;
    f = f.bind((T = e.proxy_) != null ? T : e.target_);
  }
  return {
    value: rr(
      (s = (a = n.options_) == null ? void 0 : a.name) != null ? s : t.toString(),
      f,
      (u = (_ = n.options_) == null ? void 0 : _.autoAction) != null ? u : !1,
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
function hl(e, n) {
  return {
    annotationType_: e,
    options_: n,
    make_: Nf,
    extend_: bf
  };
}
function Nf(e, n, t, r) {
  var o;
  if (r === e.target_)
    return this.extend_(e, n, t, !1) === null ? 0 : 2;
  if ((o = this.options_) != null && o.bound && (!Xn(e.target_, n) || !Si(e.target_[n])) && this.extend_(e, n, t, !1) === null)
    return 0;
  if (Si(t.value))
    return 1;
  var i = ml(e, this, n, t, !1, !1);
  return Dn(r, n, i), 2;
}
function bf(e, n, t, r) {
  var o, i = ml(e, this, n, t, (o = this.options_) == null ? void 0 : o.bound);
  return e.defineProperty_(n, i, r);
}
function If(e, n, t, r) {
  n.annotationType_, r.value;
}
function ml(e, n, t, r, o, i) {
  i === void 0 && (i = v.safeDescriptors), If(e, n, t, r);
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
    make_: Af,
    extend_: Sf
  };
}
function Af(e, n, t) {
  return this.extend_(e, n, t, !1) === null ? 0 : 1;
}
function Sf(e, n, t, r) {
  return vf(e, this, n, t), e.defineComputedProperty_(n, nr({}, this.options_, {
    get: t.get,
    set: t.set
  }), r);
}
function vf(e, n, t, r) {
  n.annotationType_, r.get;
}
function Qi(e, n) {
  return {
    annotationType_: e,
    options_: n,
    make_: Gf,
    extend_: Cf
  };
}
function Gf(e, n, t) {
  return this.extend_(e, n, t, !1) === null ? 0 : 1;
}
function Cf(e, n, t, r) {
  var o, i;
  return Df(e, this), e.defineObservableProperty_(n, t.value, (o = (i = this.options_) == null ? void 0 : i.enhancer) != null ? o : tr, r);
}
function Df(e, n, t, r) {
  n.annotationType_;
}
var Uf = "true", yf = /* @__PURE__ */ fl();
function fl(e) {
  return {
    annotationType_: Uf,
    options_: e,
    make_: Hf,
    extend_: Pf
  };
}
function Hf(e, n, t, r) {
  var o, i;
  if (t.get)
    return Zi.make_(e, n, t, r);
  if (t.set) {
    var s = rr(n.toString(), t.set);
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
    if (sl(t.value)) {
      var u, _ = (u = this.options_) != null && u.autoBind ? $r.bound : $r;
      return _.make_(e, n, t, r);
    }
    var l = (a = this.options_) != null && a.autoBind ? Kr.bound : Kr;
    return l.make_(e, n, t, r);
  }
  var c = ((o = this.options_) == null ? void 0 : o.deep) === !1 ? xe.ref : xe;
  if (typeof t.value == "function" && (i = this.options_) != null && i.autoBind) {
    var f;
    t.value = t.value.bind((f = e.proxy_) != null ? f : e.target_);
  }
  return c.make_(e, n, t, r);
}
function Pf(e, n, t, r) {
  var o, i;
  if (t.get)
    return Zi.extend_(e, n, t, r);
  if (t.set)
    return e.defineProperty_(n, {
      configurable: v.safeDescriptors ? e.isPlainObject_ : !0,
      set: rr(n.toString(), t.set)
    }, r);
  if (typeof t.value == "function" && (o = this.options_) != null && o.autoBind) {
    var s;
    t.value = t.value.bind((s = e.proxy_) != null ? s : e.target_);
  }
  var a = ((i = this.options_) == null ? void 0 : i.deep) === !1 ? xe.ref : xe;
  return a.extend_(e, n, t, r);
}
var wf = "observable", Mf = "observable.ref", kf = "observable.shallow", xf = "observable.struct", pl = {
  deep: !0,
  name: void 0,
  defaultDecorator: void 0,
  proxy: !0
};
Object.freeze(pl);
function Lo(e) {
  return e || pl;
}
var Tl = /* @__PURE__ */ Qi(wf), Lf = /* @__PURE__ */ Qi(Mf, {
  enhancer: qi
}), Bf = /* @__PURE__ */ Qi(kf, {
  enhancer: ff
}), jf = /* @__PURE__ */ Qi(xf, {
  enhancer: pf
}), El = /* @__PURE__ */ Un(Tl);
function Bo(e) {
  return e.deep === !0 ? tr : e.deep === !1 ? qi : Vf(e.defaultDecorator);
}
function Ff(e) {
  var n;
  return e ? (n = e.defaultDecorator) != null ? n : fl(e) : void 0;
}
function Vf(e) {
  var n, t;
  return e && (n = (t = e.options_) == null ? void 0 : t.enhancer) != null ? n : tr;
}
function Ol(e, n, t) {
  if (Ct(n)) {
    po(e, n, Tl);
    return;
  }
  return ru(e) ? e : zn(e) ? xe.object(e, n, t) : Array.isArray(e) ? xe.array(e, n) : lr(e) ? xe.map(e, n) : fo(e) ? xe.set(e, n) : typeof e == "object" && e !== null ? e : xe.box(e, n);
}
tl(Ol, El);
var Wf = {
  box: function(n, t) {
    var r = Lo(t);
    return new vt(n, Bo(r), r.name, !0, r.equals);
  },
  array: function(n, t) {
    var r = Lo(t);
    return (v.useProxies === !1 || r.proxy === !1 ? Vp : Pp)(n, Bo(r), r.name);
  },
  map: function(n, t) {
    var r = Lo(t);
    return new Kl(n, Bo(r), r.name);
  },
  set: function(n, t) {
    var r = Lo(t);
    return new Jl(n, Bo(r), r.name);
  },
  object: function(n, t, r) {
    return Bl(v.useProxies === !1 || r?.proxy === !1 ? Ao({}, r) : Dp({}, r), n, t);
  },
  ref: /* @__PURE__ */ Un(Lf),
  shallow: /* @__PURE__ */ Un(Bf),
  deep: El,
  struct: /* @__PURE__ */ Un(jf)
}, xe = /* @__PURE__ */ tl(Ol, Wf), Rl = "computed", Xf = "computed.struct", gl = /* @__PURE__ */ eu(Rl), Yf = /* @__PURE__ */ eu(Xf, {
  equals: gi.structural
}), Zi = function(n, t) {
  if (Ct(t))
    return po(n, t, gl);
  if (zn(n))
    return Un(eu(Rl, n));
  var r = zn(t) ? t : {};
  return r.get = n, r.name || (r.name = n.name || ""), new Xr(r);
};
Object.assign(Zi, gl);
Zi.struct = /* @__PURE__ */ Un(Yf);
var u_, __, Ni = 0, Kf = 1, $f = (u_ = (__ = /* @__PURE__ */ Ri(function() {
}, "name")) == null ? void 0 : __.configurable) != null ? u_ : !1, c_ = {
  value: "action",
  configurable: !0,
  writable: !1,
  enumerable: !1
};
function rr(e, n, t, r) {
  t === void 0 && (t = !1);
  function o() {
    return zf(e, t, n, r || this, arguments);
  }
  return o.isMobxAction = !0, $f && (c_.value = e, Dn(o, "name", c_)), o;
}
function zf(e, n, t, r, o) {
  var i = Jf(e, n);
  try {
    return t.apply(r, o);
  } catch (s) {
    throw i.error_ = s, s;
  } finally {
    qf(i);
  }
}
function Jf(e, n, t, r) {
  var o = !1, i = 0, s = v.trackingDerivation, a = !n || !s;
  $e();
  var u = v.allowStateChanges;
  a && (dr(), u = Oo(!0));
  var _ = nu(!0), l = {
    runAsAction_: a,
    prevDerivation_: s,
    prevAllowStateChanges_: u,
    prevAllowStateReads_: _,
    notifySpy_: o,
    startTime_: i,
    actionId_: Kf++,
    parentActionId_: Ni
  };
  return Ni = l.actionId_, l;
}
function qf(e) {
  Ni !== e.actionId_ && se(30), Ni = e.parentActionId_, e.error_ !== void 0 && (v.suppressReactionErrors = !0), Ro(e.prevAllowStateChanges_), wr(e.prevAllowStateReads_), ze(), e.runAsAction_ && dt(e.prevDerivation_), v.suppressReactionErrors = !1;
}
function Qf(e, n) {
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
var Nl;
Nl = Symbol.toPrimitive;
var vt = /* @__PURE__ */ function(e) {
  cl(n, e);
  function n(r, o, i, s, a) {
    var u;
    return i === void 0 && (i = "ObservableValue"), a === void 0 && (a = gi.default), u = e.call(this, i) || this, u.enhancer = void 0, u.name_ = void 0, u.equals = void 0, u.hasUnreportedChange_ = !1, u.interceptors_ = void 0, u.changeListeners_ = void 0, u.value_ = void 0, u.dehancer = void 0, u.enhancer = o, u.name_ = i, u.equals = a, u.value_ = o(r, void 0, i), u;
  }
  var t = n.prototype;
  return t.dehanceValue = function(o) {
    return this.dehancer !== void 0 ? this.dehancer(o) : o;
  }, t.set = function(o) {
    this.value_, o = this.prepareNewValue_(o), o !== v.UNCHANGED && this.setNewValue_(o);
  }, t.prepareNewValue_ = function(o) {
    if (sn(this)) {
      var i = an(this, {
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
    return No(this, o);
  }, t.observe_ = function(o, i) {
    return i && o({
      observableKind: "value",
      debugObjectName: this.name_,
      object: this,
      type: yn,
      newValue: this.value_,
      oldValue: void 0
    }), bo(this, o);
  }, t.raw = function() {
    return this.value_;
  }, t.toJSON = function() {
    return this.get();
  }, t.toString = function() {
    return this.name_ + "[" + this.value_ + "]";
  }, t.valueOf = function() {
    return _l(this.get());
  }, t[Nl] = function() {
    return this.valueOf();
  }, n;
}(To), Zf = /* @__PURE__ */ Ot("ObservableValue", vt), bl;
bl = Symbol.toPrimitive;
var Xr = /* @__PURE__ */ function() {
  function e(t) {
    this.dependenciesState_ = ie.NOT_TRACKING_, this.observing_ = [], this.newObserving_ = null, this.isBeingObserved_ = !1, this.isPendingUnobservation_ = !1, this.observers_ = /* @__PURE__ */ new Set(), this.diffValue_ = 0, this.runId_ = 0, this.lastAccessedBy_ = 0, this.lowestObserverState_ = ie.UP_TO_DATE_, this.unboundDepsCount_ = 0, this.value_ = new Ii(null), this.name_ = void 0, this.triggeredBy_ = void 0, this.isComputing_ = !1, this.isRunningSetter_ = !1, this.derivation = void 0, this.setter_ = void 0, this.isTracing_ = bi.NONE, this.scope_ = void 0, this.equals_ = void 0, this.requiresReaction_ = void 0, this.keepAlive_ = void 0, this.onBOL = void 0, this.onBUOL = void 0, t.get || se(31), this.derivation = t.get, this.name_ = t.name || "ComputedValue", t.set && (this.setter_ = rr("ComputedValue-setter", t.set)), this.equals_ = t.equals || (t.compareStructural || t.struct ? gi.structural : gi.default), this.scope_ = t.context, this.requiresReaction_ = t.requiresReaction, this.keepAlive_ = !!t.keepAlive;
  }
  var n = e.prototype;
  return n.onBecomeStale_ = function() {
    op(this);
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
      ca(this) && (this.warnAboutUntrackedRead_(), $e(), this.value_ = this.computeValue_(!1), ze());
    else if (Dl(this), ca(this)) {
      var r = v.trackingContext;
      this.keepAlive_ && !r && (v.trackingContext = this), this.trackAndCompute() && rp(this), v.trackingContext = r;
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
      i = Il(this, this.derivation, this.scope_);
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
    this.keepAlive_ || (la(this), this.value_ = void 0);
  }, n.observe_ = function(r, o) {
    var i = this, s = !0, a = void 0;
    return mp(function() {
      var u = i.get();
      if (!s || o) {
        var _ = dr();
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
    return _l(this.get());
  }, n[bl] = function() {
    return this.valueOf();
  }, e;
}(), go = /* @__PURE__ */ Ot("ComputedValue", Xr), ie;
(function(e) {
  e[e.NOT_TRACKING_ = -1] = "NOT_TRACKING_", e[e.UP_TO_DATE_ = 0] = "UP_TO_DATE_", e[e.POSSIBLY_STALE_ = 1] = "POSSIBLY_STALE_", e[e.STALE_ = 2] = "STALE_";
})(ie || (ie = {}));
var bi;
(function(e) {
  e[e.NONE = 0] = "NONE", e[e.LOG = 1] = "LOG", e[e.BREAK = 2] = "BREAK";
})(bi || (bi = {}));
var Ii = function(n) {
  this.cause = void 0, this.cause = n;
};
function ei(e) {
  return e instanceof Ii;
}
function ca(e) {
  switch (e.dependenciesState_) {
    case ie.UP_TO_DATE_:
      return !1;
    case ie.NOT_TRACKING_:
    case ie.STALE_:
      return !0;
    case ie.POSSIBLY_STALE_: {
      for (var n = nu(!0), t = dr(), r = e.observing_, o = r.length, i = 0; i < o; i++) {
        var s = r[i];
        if (go(s)) {
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
      return Sl(e), dt(t), wr(n), !1;
    }
  }
}
function Il(e, n, t) {
  var r = nu(!0);
  Sl(e), e.newObserving_ = new Array(e.observing_.length + 100), e.unboundDepsCount_ = 0, e.runId_ = ++v.runId;
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
  return v.inBatch--, v.trackingDerivation = o, ep(e), wr(r), i;
}
function ep(e) {
  for (var n = e.observing_, t = e.observing_ = e.newObserving_, r = ie.UP_TO_DATE_, o = 0, i = e.unboundDepsCount_, s = 0; s < i; s++) {
    var a = t[s];
    a.diffValue_ === 0 && (a.diffValue_ = 1, o !== s && (t[o] = a), o++), a.dependenciesState_ > r && (r = a.dependenciesState_);
  }
  for (t.length = o, e.newObserving_ = null, i = n.length; i--; ) {
    var u = n[i];
    u.diffValue_ === 0 && Gl(u, e), u.diffValue_ = 0;
  }
  for (; o--; ) {
    var _ = t[o];
    _.diffValue_ === 1 && (_.diffValue_ = 0, tp(_, e));
  }
  r !== ie.UP_TO_DATE_ && (e.dependenciesState_ = r, e.onBecomeStale_());
}
function la(e) {
  var n = e.observing_;
  e.observing_ = [];
  for (var t = n.length; t--; )
    Gl(n[t], e);
  e.dependenciesState_ = ie.NOT_TRACKING_;
}
function Al(e) {
  var n = dr();
  try {
    return e();
  } finally {
    dt(n);
  }
}
function dr() {
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
function Sl(e) {
  if (e.dependenciesState_ !== ie.UP_TO_DATE_) {
    e.dependenciesState_ = ie.UP_TO_DATE_;
    for (var n = e.observing_, t = n.length; t--; )
      n[t].lowestObserverState_ = ie.UP_TO_DATE_;
  }
}
var ni = function() {
  this.version = 6, this.UNCHANGED = {}, this.trackingDerivation = null, this.trackingContext = null, this.runId = 0, this.mobxGuid = 0, this.inBatch = 0, this.pendingUnobservations = [], this.pendingReactions = [], this.isRunningReactions = !1, this.allowStateChanges = !1, this.allowStateReads = !0, this.enforceActions = !0, this.spyListeners = [], this.globalReactionErrorHandlers = [], this.computedRequiresReaction = !1, this.reactionRequiresObservable = !1, this.observableRequiresReaction = !1, this.disableErrorBoundaries = !1, this.suppressReactionErrors = !1, this.useProxies = !0, this.verifyProxies = !1, this.safeDescriptors = !0, this.stateVersion = Number.MIN_SAFE_INTEGER;
}, ti = !0, vl = !1, v = /* @__PURE__ */ function() {
  var e = /* @__PURE__ */ qa();
  return e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (ti = !1), e.__mobxGlobals && e.__mobxGlobals.version !== new ni().version && (ti = !1), ti ? e.__mobxGlobals ? (e.__mobxInstanceCount += 1, e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}), e.__mobxGlobals) : (e.__mobxInstanceCount = 1, e.__mobxGlobals = /* @__PURE__ */ new ni()) : (setTimeout(function() {
    vl || se(35);
  }, 1), new ni());
}();
function np() {
  if ((v.pendingReactions.length || v.inBatch || v.isRunningReactions) && se(36), vl = !0, ti) {
    var e = qa();
    --e.__mobxInstanceCount === 0 && (e.__mobxGlobals = void 0), v = new ni();
  }
}
function tp(e, n) {
  e.observers_.add(n), e.lowestObserverState_ > n.dependenciesState_ && (e.lowestObserverState_ = n.dependenciesState_);
}
function Gl(e, n) {
  e.observers_.delete(n), e.observers_.size === 0 && Cl(e);
}
function Cl(e) {
  e.isPendingUnobservation_ === !1 && (e.isPendingUnobservation_ = !0, v.pendingUnobservations.push(e));
}
function $e() {
  v.inBatch++;
}
function ze() {
  if (--v.inBatch === 0) {
    yl();
    for (var e = v.pendingUnobservations, n = 0; n < e.length; n++) {
      var t = e[n];
      t.isPendingUnobservation_ = !1, t.observers_.size === 0 && (t.isBeingObserved_ && (t.isBeingObserved_ = !1, t.onBUO()), t instanceof Xr && t.suspend_());
    }
    v.pendingUnobservations = [];
  }
}
function Dl(e) {
  var n = v.trackingDerivation;
  return n !== null ? (n.runId_ !== e.lastAccessedBy_ && (e.lastAccessedBy_ = n.runId_, n.newObserving_[n.unboundDepsCount_++] = e, !e.isBeingObserved_ && v.trackingContext && (e.isBeingObserved_ = !0, e.onBO())), e.isBeingObserved_) : (e.observers_.size === 0 && v.inBatch > 0 && Cl(e), !1);
}
function Ul(e) {
  e.lowestObserverState_ !== ie.STALE_ && (e.lowestObserverState_ = ie.STALE_, e.observers_.forEach(function(n) {
    n.dependenciesState_ === ie.UP_TO_DATE_ && n.onBecomeStale_(), n.dependenciesState_ = ie.STALE_;
  }));
}
function rp(e) {
  e.lowestObserverState_ !== ie.STALE_ && (e.lowestObserverState_ = ie.STALE_, e.observers_.forEach(function(n) {
    n.dependenciesState_ === ie.POSSIBLY_STALE_ ? n.dependenciesState_ = ie.STALE_ : n.dependenciesState_ === ie.UP_TO_DATE_ && (e.lowestObserverState_ = ie.UP_TO_DATE_);
  }));
}
function op(e) {
  e.lowestObserverState_ === ie.UP_TO_DATE_ && (e.lowestObserverState_ = ie.POSSIBLY_STALE_, e.observers_.forEach(function(n) {
    n.dependenciesState_ === ie.UP_TO_DATE_ && (n.dependenciesState_ = ie.POSSIBLY_STALE_, n.onBecomeStale_());
  }));
}
var Yr = /* @__PURE__ */ function() {
  function e(t, r, o, i) {
    t === void 0 && (t = "Reaction"), this.name_ = void 0, this.onInvalidate_ = void 0, this.errorHandler_ = void 0, this.requiresObservable_ = void 0, this.observing_ = [], this.newObserving_ = [], this.dependenciesState_ = ie.NOT_TRACKING_, this.diffValue_ = 0, this.runId_ = 0, this.unboundDepsCount_ = 0, this.isDisposed_ = !1, this.isScheduled_ = !1, this.isTrackPending_ = !1, this.isRunning_ = !1, this.isTracing_ = bi.NONE, this.name_ = t, this.onInvalidate_ = r, this.errorHandler_ = o, this.requiresObservable_ = i;
  }
  var n = e.prototype;
  return n.onBecomeStale_ = function() {
    this.schedule_();
  }, n.schedule_ = function() {
    this.isScheduled_ || (this.isScheduled_ = !0, v.pendingReactions.push(this), yl());
  }, n.isScheduled = function() {
    return this.isScheduled_;
  }, n.runReaction_ = function() {
    if (!this.isDisposed_) {
      $e(), this.isScheduled_ = !1;
      var r = v.trackingContext;
      if (v.trackingContext = this, ca(this)) {
        this.isTrackPending_ = !0;
        try {
          this.onInvalidate_();
        } catch (o) {
          this.reportExceptionInDerivation_(o);
        }
      }
      v.trackingContext = r, ze();
    }
  }, n.track = function(r) {
    if (!this.isDisposed_) {
      $e(), this.isRunning_ = !0;
      var o = v.trackingContext;
      v.trackingContext = this;
      var i = Il(this, r, void 0);
      v.trackingContext = o, this.isRunning_ = !1, this.isTrackPending_ = !1, this.isDisposed_ && la(this), ei(i) && this.reportExceptionInDerivation_(i.cause), ze();
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
    this.isDisposed_ || (this.isDisposed_ = !0, this.isRunning_ || ($e(), la(this), ze()));
  }, n.getDisposer_ = function(r) {
    var o = this, i = function s() {
      o.dispose(), r == null || r.removeEventListener == null || r.removeEventListener("abort", s);
    };
    return r == null || r.addEventListener == null || r.addEventListener("abort", i), i[W] = this, i;
  }, n.toString = function() {
    return "Reaction[" + this.name_ + "]";
  }, n.trace = function(r) {
  }, e;
}(), ip = 100, da = function(n) {
  return n();
};
function yl() {
  v.inBatch > 0 || v.isRunningReactions || da(sp);
}
function sp() {
  v.isRunningReactions = !0;
  for (var e = v.pendingReactions, n = 0; e.length > 0; ) {
    ++n === ip && (console.error("[mobx] cycle in reaction: " + e[0]), e.splice(0));
    for (var t = e.splice(0), r = 0, o = t.length; r < o; r++)
      t[r].runReaction_();
  }
  v.isRunningReactions = !1;
}
var Ai = /* @__PURE__ */ Ot("Reaction", Yr);
function ap(e) {
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
function up(e) {
  return console.warn("[mobx.spy] Is a no-op in production builds"), function() {
  };
}
var Hl = "action", _p = "action.bound", Pl = "autoAction", cp = "autoAction.bound", lp = "<unnamed action>", wl = /* @__PURE__ */ Eo(Hl), dp = /* @__PURE__ */ Eo(_p, {
  bound: !0
}), Ml = /* @__PURE__ */ Eo(Pl, {
  autoAction: !0
}), hp = /* @__PURE__ */ Eo(cp, {
  autoAction: !0,
  bound: !0
});
function kl(e) {
  var n = function(r, o) {
    if (gn(r))
      return rr(r.name || lp, r, e);
    if (gn(o))
      return rr(r, o, e);
    if (Ct(o))
      return po(r, o, e ? Ml : wl);
    if (Ct(r))
      return Un(Eo(e ? Pl : Hl, {
        name: r,
        autoAction: e
      }));
  };
  return n;
}
var Ft = /* @__PURE__ */ kl(!1);
Object.assign(Ft, wl);
var Kr = /* @__PURE__ */ kl(!0);
Object.assign(Kr, Ml);
Ft.bound = /* @__PURE__ */ Un(dp);
Kr.bound = /* @__PURE__ */ Un(hp);
function tu(e) {
  return gn(e) && e.isMobxAction === !0;
}
function mp(e, n) {
  var t, r, o, i, s;
  n === void 0 && (n = rl);
  var a = (t = (r = n) == null ? void 0 : r.name) != null ? t : "Autorun", u = !n.scheduler && !n.delay, _;
  if (u)
    _ = new Yr(a, function() {
      this.track(f);
    }, n.onError, n.requiresObservable);
  else {
    var l = pp(n), c = !1;
    _ = new Yr(a, function() {
      c || (c = !0, l(function() {
        c = !1, _.isDisposed_ || _.track(f);
      }));
    }, n.onError, n.requiresObservable);
  }
  function f() {
    e(_);
  }
  return (o = n) != null && (i = o.signal) != null && i.aborted || _.schedule_(), _.getDisposer_((s = n) == null ? void 0 : s.signal);
}
var fp = function(n) {
  return n();
};
function pp(e) {
  return e.scheduler ? e.scheduler : e.delay ? function(n) {
    return setTimeout(n, e.delay);
  } : fp;
}
var Tp = "onBO", Ep = "onBUO";
function Op(e, n, t) {
  return Ll(Tp, e, n, t);
}
function xl(e, n, t) {
  return Ll(Ep, e, n, t);
}
function Ll(e, n, t, r) {
  var o = typeof r == "function" ? ir(n, t) : ir(n), i = gn(r) ? r : t, s = e + "L";
  return o[s] ? o[s].add(i) : o[s] = /* @__PURE__ */ new Set([i]), function() {
    var a = o[s];
    a && (a.delete(i), a.size === 0 && delete o[s]);
  };
}
var Rp = "never", jo = "always", gp = "observed";
function Np(e) {
  e.isolateGlobalState === !0 && np();
  var n = e.useProxies, t = e.enforceActions;
  if (n !== void 0 && (v.useProxies = n === jo ? !0 : n === Rp ? !1 : typeof Proxy < "u"), n === "ifavailable" && (v.verifyProxies = !0), t !== void 0) {
    var r = t === jo ? jo : t === gp;
    v.enforceActions = r, v.allowStateChanges = !(r === !0 || r === jo);
  }
  ["computedRequiresReaction", "reactionRequiresObservable", "observableRequiresReaction", "disableErrorBoundaries", "safeDescriptors"].forEach(function(o) {
    o in e && (v[o] = !!e[o]);
  }), v.allowStateReads = !v.observableRequiresReaction, e.reactionScheduler && ap(e.reactionScheduler);
}
function Bl(e, n, t, r) {
  var o = sf(n), i = Ao(e, r)[W];
  $e();
  try {
    er(o).forEach(function(s) {
      i.extend_(
        s,
        o[s],
        // must pass "undefined" for { key: undefined }
        t && s in t ? t[s] : !0
      );
    });
  } finally {
    ze();
  }
  return e;
}
function bp(e, n) {
  return jl(ir(e, n));
}
function jl(e) {
  var n = {
    name: e.name_
  };
  return e.observing_ && e.observing_.length > 0 && (n.dependencies = Ip(e.observing_).map(jl)), n;
}
function Ip(e) {
  return Array.from(new Set(e));
}
var Ap = 0;
function Fl() {
  this.message = "FLOW_CANCELLED";
}
Fl.prototype = /* @__PURE__ */ Object.create(Error.prototype);
var l_ = /* @__PURE__ */ hl("flow"), Sp = /* @__PURE__ */ hl("flow.bound", {
  bound: !0
}), $r = /* @__PURE__ */ Object.assign(function(n, t) {
  if (Ct(t))
    return po(n, t, l_);
  var r = n, o = r.name || "<unnamed flow>", i = function() {
    var a = this, u = arguments, _ = ++Ap, l = Ft(o + " - runid: " + _ + " - init", r).apply(a, u), c, f = void 0, T = new Promise(function(d, h) {
      var m = 0;
      c = h;
      function O(I) {
        f = void 0;
        var p;
        try {
          p = Ft(o + " - runid: " + _ + " - yield " + m++, l.next).call(l, I);
        } catch (H) {
          return h(H);
        }
        N(p);
      }
      function R(I) {
        f = void 0;
        var p;
        try {
          p = Ft(o + " - runid: " + _ + " - yield " + m++, l.throw).call(l, I);
        } catch (H) {
          return h(H);
        }
        N(p);
      }
      function N(I) {
        if (gn(I?.then)) {
          I.then(N, h);
          return;
        }
        return I.done ? d(I.value) : (f = Promise.resolve(I.value), f.then(O, R));
      }
      O(void 0);
    });
    return T.cancel = Ft(o + " - runid: " + _ + " - cancel", function() {
      try {
        f && d_(f);
        var d = l.return(void 0), h = Promise.resolve(d.value);
        h.then(Bt, Bt), d_(h), c(new Fl());
      } catch (m) {
        c(m);
      }
    }), T;
  };
  return i.isMobXFlow = !0, i;
}, l_);
$r.bound = /* @__PURE__ */ Un(Sp);
function d_(e) {
  gn(e.cancel) && e.cancel();
}
function Si(e) {
  return e?.isMobXFlow === !0;
}
function vp(e, n) {
  return e ? n !== void 0 ? or(e) ? e[W].values_.has(n) : !1 : or(e) || !!e[W] || Za(e) || Ai(e) || go(e) : !1;
}
function ru(e) {
  return vp(e);
}
function Gp(e) {
  if (or(e))
    return e[W].ownKeys_();
  se(38);
}
function Fo(e, n, t) {
  return e.set(n, t), t;
}
function xt(e, n) {
  if (e == null || typeof e != "object" || e instanceof Date || !ru(e))
    return e;
  if (Zf(e) || go(e))
    return xt(e.get(), n);
  if (n.has(e))
    return n.get(e);
  if (Io(e)) {
    var t = Fo(n, e, new Array(e.length));
    return e.forEach(function(s, a) {
      t[a] = xt(s, n);
    }), t;
  }
  if (Ut(e)) {
    var r = Fo(n, e, /* @__PURE__ */ new Set());
    return e.forEach(function(s) {
      r.add(xt(s, n));
    }), r;
  }
  if (Nt(e)) {
    var o = Fo(n, e, /* @__PURE__ */ new Map());
    return e.forEach(function(s, a) {
      o.set(a, xt(s, n));
    }), o;
  } else {
    var i = Fo(n, e, {});
    return Gp(e).forEach(function(s) {
      ho.propertyIsEnumerable.call(e, s) && (i[s] = xt(e[s], n));
    }), i;
  }
}
function Vl(e, n) {
  return xt(e, /* @__PURE__ */ new Map());
}
function jn(e, n) {
  n === void 0 && (n = void 0), $e();
  try {
    return e.apply(n);
  } finally {
    ze();
  }
}
function Pt(e) {
  return e[W];
}
var Cp = {
  has: function(n, t) {
    return Pt(n).has_(t);
  },
  get: function(n, t) {
    return Pt(n).get_(t);
  },
  set: function(n, t, r) {
    var o;
    return Ct(t) ? (o = Pt(n).set_(t, r, !0)) != null ? o : !0 : !1;
  },
  deleteProperty: function(n, t) {
    var r;
    return Ct(t) ? (r = Pt(n).delete_(t, !0)) != null ? r : !0 : !1;
  },
  defineProperty: function(n, t, r) {
    var o;
    return (o = Pt(n).defineProperty_(t, r)) != null ? o : !0;
  },
  ownKeys: function(n) {
    return Pt(n).ownKeys_();
  },
  preventExtensions: function(n) {
    se(13);
  }
};
function Dp(e, n) {
  var t, r;
  return ol(), e = Ao(e, n), (r = (t = e[W]).proxy_) != null ? r : t.proxy_ = new Proxy(e, Cp);
}
function sn(e) {
  return e.interceptors_ !== void 0 && e.interceptors_.length > 0;
}
function No(e, n) {
  var t = e.interceptors_ || (e.interceptors_ = []);
  return t.push(n), il(function() {
    var r = t.indexOf(n);
    r !== -1 && t.splice(r, 1);
  });
}
function an(e, n) {
  var t = dr();
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
function bo(e, n) {
  var t = e.changeListeners_ || (e.changeListeners_ = []);
  return t.push(n), il(function() {
    var r = t.indexOf(n);
    r !== -1 && t.splice(r, 1);
  });
}
function Rn(e, n) {
  var t = dr(), r = e.changeListeners_;
  if (r) {
    r = r.slice();
    for (var o = 0, i = r.length; o < i; o++)
      r[o](n);
    dt(t);
  }
}
function Up(e, n, t) {
  var r = Ao(e, t)[W];
  $e();
  try {
    var o;
    (o = n) != null || (n = cf(e)), er(n).forEach(function(i) {
      return r.make_(i, n[i]);
    });
  } finally {
    ze();
  }
  return e;
}
var ks = /* @__PURE__ */ Symbol("mobx-keys");
function Rt(e, n, t) {
  if (zn(e))
    return Bl(e, e, n, t);
  var r = Ao(e, t)[W];
  if (!e[ks]) {
    var o = Object.getPrototypeOf(e), i = new Set([].concat(er(e), er(o)));
    i.delete("constructor"), i.delete(W), mo(o, ks, i);
  }
  $e();
  try {
    e[ks].forEach(function(s) {
      return r.make_(
        s,
        // must pass "undefined" for { key: undefined }
        n && s in n ? n[s] : !0
      );
    });
  } finally {
    ze();
  }
  return e;
}
var h_ = "splice", yn = "update", yp = 1e4, Hp = {
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
    return No(this, r);
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
    }), bo(this, r);
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
    r !== this.lastKnownLength_ && se(16), this.lastKnownLength_ += o, this.legacyMode_ && o > 0 && ed(r + o + 1);
  }, n.spliceWithArray_ = function(r, o, i) {
    var s = this;
    this.atom_;
    var a = this.values_.length;
    if (r === void 0 ? r = 0 : r > a ? r = a : r < 0 && (r = Math.max(0, a + r)), arguments.length === 1 ? o = a - r : o == null ? o = 0 : o = Math.max(0, Math.min(o, a - r)), i === void 0 && (i = ua), sn(this)) {
      var u = an(this, {
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
    if (i = i.length === 0 ? i : i.map(function(c) {
      return s.enhancer_(c, void 0);
    }), this.legacyMode_) {
      var _ = i.length - o;
      this.updateArrayLength_(a, _);
    }
    var l = this.spliceItemsIntoValues_(r, o, i);
    return (o !== 0 || i.length !== 0) && this.notifyArraySplice_(r, i, l), this.dehanceValues_(l);
  }, n.spliceItemsIntoValues_ = function(r, o, i) {
    if (i.length < yp) {
      var s;
      return (s = this.values_).splice.apply(s, [r, o].concat(i));
    } else {
      var a = this.values_.slice(r, r + o), u = this.values_.slice(r + o);
      this.values_.length += i.length - o;
      for (var _ = 0; _ < i.length; _++)
        this.values_[r + _] = i[_];
      for (var l = 0; l < u.length; l++)
        this.values_[r + i.length + l] = u[l];
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
      if (sn(this)) {
        var a = an(this, {
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
      for (var _ = new Array(r + 1 - i.length), l = 0; l < _.length - 1; l++)
        _[l] = void 0;
      _[_.length - 1] = o, this.spliceWithArray_(i.length, 0, _);
    }
  }, e;
}();
function Pp(e, n, t, r) {
  t === void 0 && (t = "ObservableArray"), r === void 0 && (r = !1), ol();
  var o = new ou(t, n, r, !1);
  al(o.values_, W, o);
  var i = new Proxy(o.values_, Hp);
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
ye("every", gt);
ye("filter", gt);
ye("find", gt);
ye("findIndex", gt);
ye("flatMap", gt);
ye("forEach", gt);
ye("map", gt);
ye("some", gt);
ye("reduce", Wl);
ye("reduceRight", Wl);
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
function gt(e) {
  return function(n, t) {
    var r = this, o = this[W];
    o.atom_.reportObserved();
    var i = o.dehanceValues_(o.values_);
    return i[e](function(s, a) {
      return n.call(t, s, a, r);
    });
  };
}
function Wl(e) {
  return function() {
    var n = this, t = this[W];
    t.atom_.reportObserved();
    var r = t.dehanceValues_(t.values_), o = arguments[0];
    return arguments[0] = function(i, s, a) {
      return o(i, s, a, n);
    }, r[e].apply(r, arguments);
  };
}
var wp = /* @__PURE__ */ Ot("ObservableArrayAdministration", ou);
function Io(e) {
  return Ji(e) && wp(e[W]);
}
var Xl, Yl, Mp = {}, st = "add", Gi = "delete";
Xl = Symbol.iterator;
Yl = Symbol.toStringTag;
var Kl = /* @__PURE__ */ function() {
  function e(t, r, o) {
    var i = this;
    r === void 0 && (r = tr), o === void 0 && (o = "ObservableMap"), this.enhancer_ = void 0, this.name_ = void 0, this[W] = Mp, this.data_ = void 0, this.hasMap_ = void 0, this.keysAtom_ = void 0, this.interceptors_ = void 0, this.changeListeners_ = void 0, this.dehancer = void 0, this.enhancer_ = r, this.name_ = o, gn(Map) || se(18), this.keysAtom_ = ll("ObservableMap.keys()"), this.data_ = /* @__PURE__ */ new Map(), this.hasMap_ = /* @__PURE__ */ new Map(), Qf(!0, function() {
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
      this.hasMap_.set(r, s), xl(s, function() {
        return o.hasMap_.delete(r);
      });
    }
    return i.get();
  }, n.set = function(r, o) {
    var i = this.has_(r);
    if (sn(this)) {
      var s = an(this, {
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
    if (this.keysAtom_, sn(this)) {
      var i = an(this, {
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
        var l = o.data_.get(r);
        l.setNewValue_(void 0), o.data_.delete(r);
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
      var _, l = new vt(o, i.enhancer_, "ObservableMap.key", !1);
      i.data_.set(r, l), o = l.value_, (_ = i.hasMap_.get(r)) == null || _.setNewValue_(!0), i.keysAtom_.reportChanged();
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
  }, n[Xl] = function() {
    return this.entries();
  }, n.forEach = function(r, o) {
    for (var i = jt(this), s; !(s = i()).done; ) {
      var a = s.value, u = a[0], _ = a[1];
      r.call(o, _, u, this);
    }
  }, n.merge = function(r) {
    var o = this;
    return Nt(r) && (r = new Map(r)), jn(function() {
      zn(r) ? of(r).forEach(function(i) {
        return o.set(i, r[i]);
      }) : Array.isArray(r) ? r.forEach(function(i) {
        var s = i[0], a = i[1];
        return o.set(s, a);
      }) : lr(r) ? (r.constructor !== Map && se(19, r), r.forEach(function(i, s) {
        return o.set(s, i);
      })) : r != null && se(20, r);
    }), this;
  }, n.clear = function() {
    var r = this;
    jn(function() {
      Al(function() {
        for (var o = jt(r.keys()), i; !(i = o()).done; ) {
          var s = i.value;
          r.delete(s);
        }
      });
    });
  }, n.replace = function(r) {
    var o = this;
    return jn(function() {
      for (var i = kp(r), s = /* @__PURE__ */ new Map(), a = !1, u = jt(o.data_.keys()), _; !(_ = u()).done; ) {
        var l = _.value;
        if (!i.has(l)) {
          var c = o.delete(l);
          if (c)
            a = !0;
          else {
            var f = o.data_.get(l);
            s.set(l, f);
          }
        }
      }
      for (var T = jt(i.entries()), d; !(d = T()).done; ) {
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
    return bo(this, r);
  }, n.intercept_ = function(r) {
    return No(this, r);
  }, Qa(e, [{
    key: "size",
    get: function() {
      return this.keysAtom_.reportObserved(), this.data_.size;
    }
  }, {
    key: Yl,
    get: function() {
      return "Map";
    }
  }]), e;
}(), Nt = /* @__PURE__ */ Ot("ObservableMap", Kl);
function kp(e) {
  if (lr(e) || Nt(e))
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
var $l, zl, xp = {};
$l = Symbol.iterator;
zl = Symbol.toStringTag;
var Jl = /* @__PURE__ */ function() {
  function e(t, r, o) {
    r === void 0 && (r = tr), o === void 0 && (o = "ObservableSet"), this.name_ = void 0, this[W] = xp, this.data_ = /* @__PURE__ */ new Set(), this.atom_ = void 0, this.changeListeners_ = void 0, this.interceptors_ = void 0, this.dehancer = void 0, this.enhancer_ = void 0, this.name_ = o, gn(Set) || se(22), this.atom_ = ll(this.name_), this.enhancer_ = function(i, s) {
      return r(i, s, o);
    }, t && this.replace(t);
  }
  var n = e.prototype;
  return n.dehanceValue_ = function(r) {
    return this.dehancer !== void 0 ? this.dehancer(r) : r;
  }, n.clear = function() {
    var r = this;
    jn(function() {
      Al(function() {
        for (var o = jt(r.data_.values()), i; !(i = o()).done; ) {
          var s = i.value;
          r.delete(s);
        }
      });
    });
  }, n.forEach = function(r, o) {
    for (var i = jt(this), s; !(s = i()).done; ) {
      var a = s.value;
      r.call(o, a, a, this);
    }
  }, n.add = function(r) {
    var o = this;
    if (this.atom_, sn(this)) {
      var i = an(this, {
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
    if (sn(this)) {
      var i = an(this, {
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
      })) : fo(r) ? (o.clear(), r.forEach(function(i) {
        return o.add(i);
      })) : r != null && se("Cannot initialize set from " + r);
    }), this;
  }, n.observe_ = function(r, o) {
    return bo(this, r);
  }, n.intercept_ = function(r) {
    return No(this, r);
  }, n.toJSON = function() {
    return Array.from(this);
  }, n.toString = function() {
    return "[object ObservableSet]";
  }, n[$l] = function() {
    return this.values();
  }, Qa(e, [{
    key: "size",
    get: function() {
      return this.atom_.reportObserved(), this.data_.size;
    }
  }, {
    key: zl,
    get: function() {
      return "Set";
    }
  }]), e;
}(), Ut = /* @__PURE__ */ Ot("ObservableSet", Jl), m_ = /* @__PURE__ */ Object.create(null), f_ = "remove", ql = /* @__PURE__ */ function() {
  function e(t, r, o, i) {
    r === void 0 && (r = /* @__PURE__ */ new Map()), i === void 0 && (i = yf), this.target_ = void 0, this.values_ = void 0, this.name_ = void 0, this.defaultAnnotation_ = void 0, this.keysAtom_ = void 0, this.changeListeners_ = void 0, this.interceptors_ = void 0, this.proxy_ = void 0, this.isPlainObject_ = void 0, this.appliedAnnotations_ = void 0, this.pendingKeys_ = void 0, this.target_ = t, this.values_ = r, this.name_ = o, this.defaultAnnotation_ = i, this.keysAtom_ = new To("ObservableObject.keys"), this.isPlainObject_ = zn(this.target_);
  }
  var n = e.prototype;
  return n.getObservablePropValue_ = function(r) {
    return this.values_.get(r).get();
  }, n.setObservablePropValue_ = function(r, o) {
    var i = this.values_.get(r);
    if (i instanceof Xr)
      return i.set(o), !0;
    if (sn(this)) {
      var s = an(this, {
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
      for (var s = this.target_; s && s !== ho; ) {
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
      T_(this, o, r);
    }
  }, n.extend_ = function(r, o, i, s) {
    if (s === void 0 && (s = !1), i === !0 && (i = this.defaultAnnotation_), i === !1)
      return this.defineProperty_(r, o, s);
    var a = i.extend_(this, r, o, s);
    return a && T_(this, i, r), a;
  }, n.defineProperty_ = function(r, o, i) {
    i === void 0 && (i = !1);
    try {
      $e();
      var s = this.delete_(r);
      if (!s)
        return s;
      if (sn(this)) {
        var a = an(this, {
          object: this.proxy_ || this.target_,
          name: r,
          type: st,
          newValue: o.value
        });
        if (!a)
          return null;
        var u = a.newValue;
        o.value !== u && (o = nr({}, o, {
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
      ze();
    }
    return !0;
  }, n.defineObservableProperty_ = function(r, o, i, s) {
    s === void 0 && (s = !1);
    try {
      $e();
      var a = this.delete_(r);
      if (!a)
        return a;
      if (sn(this)) {
        var u = an(this, {
          object: this.proxy_ || this.target_,
          name: r,
          type: st,
          newValue: o
        });
        if (!u)
          return null;
        o = u.newValue;
      }
      var _ = p_(r), l = {
        configurable: v.safeDescriptors ? this.isPlainObject_ : !0,
        enumerable: !0,
        get: _.get,
        set: _.set
      };
      if (s) {
        if (!Reflect.defineProperty(this.target_, r, l))
          return !1;
      } else
        Dn(this.target_, r, l);
      var c = new vt(o, i, "ObservableObject.key", !1);
      this.values_.set(r, c), this.notifyPropertyAddition_(r, c.value_);
    } finally {
      ze();
    }
    return !0;
  }, n.defineComputedProperty_ = function(r, o, i) {
    i === void 0 && (i = !1);
    try {
      $e();
      var s = this.delete_(r);
      if (!s)
        return s;
      if (sn(this)) {
        var a = an(this, {
          object: this.proxy_ || this.target_,
          name: r,
          type: st,
          newValue: void 0
        });
        if (!a)
          return null;
      }
      o.name || (o.name = "ObservableObject.key"), o.context = this.proxy_ || this.target_;
      var u = p_(r), _ = {
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
      ze();
    }
    return !0;
  }, n.delete_ = function(r, o) {
    if (o === void 0 && (o = !1), !Xn(this.target_, r))
      return !0;
    if (sn(this)) {
      var i = an(this, {
        object: this.proxy_ || this.target_,
        name: r,
        type: f_
      });
      if (!i)
        return null;
    }
    try {
      var s, a;
      $e();
      var u = On(this), _ = !1, l = this.values_.get(r), c = void 0;
      if (!l && (u || _)) {
        var f;
        c = (f = Ri(this.target_, r)) == null ? void 0 : f.value;
      }
      if (o) {
        if (!Reflect.deleteProperty(this.target_, r))
          return !1;
      } else
        delete this.target_[r];
      if (l && (this.values_.delete(r), l instanceof vt && (c = l.value_), Ul(l)), this.keysAtom_.reportChanged(), (s = this.pendingKeys_) == null || (a = s.get(r)) == null || a.set(r in this.target_), u || _) {
        var T = {
          type: f_,
          observableKind: "object",
          object: this.proxy_ || this.target_,
          debugObjectName: this.name_,
          oldValue: c,
          name: r
        };
        u && Rn(this, T);
      }
    } finally {
      ze();
    }
    return !0;
  }, n.observe_ = function(r, o) {
    return bo(this, r);
  }, n.intercept_ = function(r) {
    return No(this, r);
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
    return this.keysAtom_.reportObserved(), er(this.target_);
  }, n.keys_ = function() {
    return this.keysAtom_.reportObserved(), Object.keys(this.target_);
  }, e;
}();
function Ao(e, n) {
  var t;
  if (Xn(e, W))
    return e;
  var r = (t = n?.name) != null ? t : "ObservableObject", o = new ql(e, /* @__PURE__ */ new Map(), String(r), Ff(n));
  return mo(e, W, o), e;
}
var Lp = /* @__PURE__ */ Ot("ObservableObjectAdministration", ql);
function p_(e) {
  return m_[e] || (m_[e] = {
    get: function() {
      return this[W].getObservablePropValue_(e);
    },
    set: function(t) {
      return this[W].setObservablePropValue_(e, t);
    }
  });
}
function or(e) {
  return Ji(e) ? Lp(e[W]) : !1;
}
function T_(e, n, t) {
  var r;
  (r = e.target_[Gn]) == null || delete r[t];
}
var Bp = /* @__PURE__ */ Zl(0), xs = 0, Ql = function() {
};
function jp(e, n) {
  Object.setPrototypeOf ? Object.setPrototypeOf(e.prototype, n) : e.prototype.__proto__ !== void 0 ? e.prototype.__proto__ = n : e.prototype = n;
}
jp(Ql, Array.prototype);
var iu = /* @__PURE__ */ function(e, n, t) {
  cl(r, e);
  function r(i, s, a, u) {
    var _;
    a === void 0 && (a = "ObservableArray"), u === void 0 && (u = !1), _ = e.call(this) || this;
    var l = new ou(a, s, u, !0);
    if (l.proxy_ = Ms(_), al(Ms(_), W, l), i && i.length) {
      var c = Oo(!0);
      _.spliceWithArray(0, 0, i), Ro(c);
    }
    return Object.defineProperty(Ms(_), "0", Bp), _;
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
}(Ql, Symbol.toStringTag, Symbol.iterator);
Object.entries(vi).forEach(function(e) {
  var n = e[0], t = e[1];
  n !== "concat" && mo(iu.prototype, n, t);
});
function Zl(e) {
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
function Fp(e) {
  Dn(iu.prototype, "" + e, Zl(e));
}
function ed(e) {
  if (e > xs) {
    for (var n = xs; n < e + 100; n++)
      Fp(n);
    xs = e;
  }
}
ed(1e3);
function Vp(e, n, t) {
  return new iu(e, n, t);
}
function ir(e, n) {
  if (typeof e == "object" && e !== null) {
    if (Io(e))
      return n !== void 0 && se(23), e[W].atom_;
    if (Ut(e))
      return e.atom_;
    if (Nt(e)) {
      if (n === void 0)
        return e.keysAtom_;
      var t = e.data_.get(n) || e.hasMap_.get(n);
      return t || se(25, n, ha(e)), t;
    }
    if (or(e)) {
      if (!n)
        return se(26);
      var r = e[W].values_.get(n);
      return r || se(27, n, ha(e)), r;
    }
    if (Za(e) || go(e) || Ai(e))
      return e;
  } else if (gn(e) && Ai(e[W]))
    return e[W];
  se(28);
}
function nd(e, n) {
  if (e || se(29), n !== void 0)
    return nd(ir(e, n));
  if (Za(e) || go(e) || Ai(e) || Nt(e) || Ut(e))
    return e;
  if (e[W])
    return e[W];
  se(24, e);
}
function ha(e, n) {
  var t;
  if (n !== void 0)
    t = ir(e, n);
  else {
    if (tu(e))
      return e.name;
    or(e) || Nt(e) || Ut(e) ? t = nd(e) : t = ir(e);
  }
  return t.name_;
}
var E_ = ho.toString;
function su(e, n, t) {
  return t === void 0 && (t = -1), ma(e, n, t);
}
function ma(e, n, t, r, o) {
  if (e === n)
    return e !== 0 || 1 / e === 1 / n;
  if (e == null || n == null)
    return !1;
  if (e !== e)
    return n !== n;
  var i = typeof e;
  if (i !== "function" && i !== "object" && typeof n != "object")
    return !1;
  var s = E_.call(e);
  if (s !== E_.call(n))
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
  e = O_(e), n = O_(n);
  var a = s === "[object Array]";
  if (!a) {
    if (typeof e != "object" || typeof n != "object")
      return !1;
    var u = e.constructor, _ = n.constructor;
    if (u !== _ && !(gn(u) && u instanceof u && gn(_) && _ instanceof _) && "constructor" in e && "constructor" in n)
      return !1;
  }
  if (t === 0)
    return !1;
  t < 0 && (t = -1), r = r || [], o = o || [];
  for (var l = r.length; l--; )
    if (r[l] === e)
      return o[l] === n;
  if (r.push(e), o.push(n), a) {
    if (l = e.length, l !== n.length)
      return !1;
    for (; l--; )
      if (!ma(e[l], n[l], t - 1, r, o))
        return !1;
  } else {
    var c = Object.keys(e), f;
    if (l = c.length, Object.keys(n).length !== l)
      return !1;
    for (; l--; )
      if (f = c[l], !(Xn(n, f) && ma(e[f], n[f], t - 1, r, o)))
        return !1;
  }
  return r.pop(), o.pop(), !0;
}
function O_(e) {
  return Io(e) ? e.slice() : lr(e) || Nt(e) || fo(e) || Ut(e) ? Array.from(e.entries()) : e;
}
function zr(e) {
  return e[Symbol.iterator] = Wp, e;
}
function Wp() {
  return this;
}
["Symbol", "Map", "Set"].forEach(function(e) {
  var n = qa();
  typeof n[e] > "u" && se("MobX requires global '" + e + "' to be available or polyfilled");
});
typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ == "object" && __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
  spy: up,
  extras: {
    getDebugName: ha
  },
  $mobx: W
});
class Xp {
  constructor(n) {
    Rt(this), this.state = n, this.getters = n.getters;
  }
  saveContent(n, t) {
    const r = this.getters.getActiveTab(t);
    r.content = n;
  }
}
if (!qe)
  throw new Error("mobx-react-lite requires React with Hooks support");
if (!Up)
  throw new Error("mobx-react-lite@3 requires mobx at least version 6 to be available");
function Yp(e) {
  e();
}
function Kp(e) {
  e || (e = Yp), Np({ reactionScheduler: e });
}
function $p(e) {
  return bp(e);
}
var zp = 1e4, Jp = 1e4, qp = (
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
          r === void 0 && (r = zp), clearTimeout(t.sweepTimeout), t.sweepTimeout = void 0;
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
        this.sweepTimeout === void 0 && (this.sweepTimeout = setTimeout(this.sweep, Jp));
      }
    }), e;
  }()
), Qp = typeof FinalizationRegistry < "u" ? FinalizationRegistry : qp, fa = new Qp(function(e) {
  var n;
  (n = e.reaction) === null || n === void 0 || n.dispose(), e.reaction = null;
}), R_ = globalThis && globalThis.__read || function(e, n) {
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
var Zp = (
  /** @class */
  function() {
    function e() {
    }
    return e;
  }()
);
function eT() {
  return new Zp();
}
function nT(e, n) {
  n === void 0 && (n = "observed");
  var t = R_(Ae.useState(eT), 1), r = t[0], o = R_(Ae.useState(), 2), i = o[1], s = function() {
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
  }), fa.register(r, u, u)), Ae.useDebugValue(u.reaction, $p), Ae.useEffect(function() {
    return fa.unregister(u), u.mounted = !0, u.reaction ? u.changedBeforeMount && (u.changedBeforeMount = !1, s()) : (u.reaction = new Yr(g_(n), function() {
      s();
    }), s()), function() {
      u.reaction.dispose(), u.reaction = null, u.mounted = !1, u.changedBeforeMount = !1;
    };
  }, []);
  var _, l;
  if (u.reaction.track(function() {
    try {
      _ = e();
    } catch (c) {
      l = c;
    }
  }), l)
    throw l;
  return _;
}
var td = typeof Symbol == "function" && Symbol.for, N_ = td ? Symbol.for("react.forward_ref") : typeof Qt == "function" && Qt(function(e) {
  return null;
}).$$typeof, b_ = td ? Symbol.for("react.memo") : typeof Zt == "function" && Zt(function(e) {
  return null;
}).$$typeof;
function Qn(e, n) {
  var t;
  if (b_ && e.$$typeof === b_)
    throw new Error("[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.");
  var r = (t = n?.forwardRef) !== null && t !== void 0 ? t : !1, o = e, i = e.displayName || e.name;
  if (N_ && e.$$typeof === N_ && (r = !0, o = e.render, typeof o != "function"))
    throw new Error("[mobx-react-lite] `render` property of ForwardRef was not a function");
  var s = function(a, u) {
    return nT(function() {
      return o(a, u);
    }, i);
  };
  return i !== "" && (s.displayName = i), e.contextTypes && (s.contextTypes = e.contextTypes), r && (s = Qt(s)), s = Zt(s), rT(e, s), s;
}
var tT = {
  $$typeof: !0,
  render: !0,
  compare: !0,
  type: !0,
  // Don't redefine `displayName`,
  // it's defined as getter-setter pair on `memo` (see #3192).
  displayName: !0
};
function rT(e, n) {
  Object.keys(e).forEach(function(t) {
    tT[t] || Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(e, t));
  });
}
globalThis && globalThis.__read;
var Ls;
Kp(el);
Ls = fa.finalizeAllImmediately;
const oT = ({ fontSize: e, tabSize: n }) => ({
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
}), hr = () => Qe(Fm), iT = () => hr().state, sT = (e) => {
  const n = hr(), t = n.state.selectedTerminalTab;
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
}, bt = () => Qe(gr).actions, mr = () => Qe(gr), es = () => Qe(gr).getters, aT = () => Qe(gr).services, uT = () => Qe(gr).storage;
function _T(e, n, t) {
  return n in e ? Object.defineProperty(e, n, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[n] = t, e;
}
function I_(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    n && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function A_(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? I_(Object(t), !0).forEach(function(r) {
      _T(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : I_(Object(t)).forEach(function(r) {
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
function lT(e, n) {
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
function dT(e, n) {
  return hT(e) || mT(e, n) || fT(e, n) || pT();
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
function fT(e, n) {
  if (e) {
    if (typeof e == "string")
      return S_(e, n);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set")
      return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return S_(e, n);
  }
}
function S_(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var t = 0, r = new Array(n); t < n; t++)
    r[t] = e[t];
  return r;
}
function pT() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function TT(e, n, t) {
  return n in e ? Object.defineProperty(e, n, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[n] = t, e;
}
function v_(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    n && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function G_(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? v_(Object(t), !0).forEach(function(r) {
      TT(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : v_(Object(t)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function ET() {
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
function OT(e) {
  return !Object.keys(e).length;
}
function Jr(e) {
  return typeof e == "function";
}
function RT(e, n) {
  return Object.prototype.hasOwnProperty.call(e, n);
}
function gT(e, n) {
  return Ci(n) || ht("changeType"), Object.keys(n).some(function(t) {
    return !RT(e, t);
  }) && ht("changeField"), n;
}
function NT(e) {
  Jr(e) || ht("selectorType");
}
function bT(e) {
  Jr(e) || Ci(e) || ht("handlerType"), Ci(e) && Object.values(e).some(function(n) {
    return !Jr(n);
  }) && ht("handlersType");
}
function IT(e) {
  e || ht("initialIsRequired"), Ci(e) || ht("initialType"), OT(e) && ht("initialContent");
}
function AT(e, n) {
  throw new Error(e[n] || e.default);
}
var ST = {
  initialIsRequired: "initial state is required",
  initialType: "initial state should be an object",
  initialContent: "initial state shouldn't be an empty object",
  handlerType: "handler should be an object or a function",
  handlersType: "all handlers should be a functions",
  selectorType: "selector should be a function",
  changeType: "provided value of changes should be an object",
  changeField: 'it seams you want to change a field in the state which is not specified in the "initial" state',
  default: "an unknown error accured in `state-local` package"
}, ht = Hr(AT)(ST), Vo = {
  changes: gT,
  selector: NT,
  handler: bT,
  initial: IT
};
function vT(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  Vo.initial(e), Vo.handler(n);
  var t = {
    current: e
  }, r = Hr(DT)(t, n), o = Hr(CT)(t), i = Hr(Vo.changes)(e), s = Hr(GT)(t);
  function a() {
    var _ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function(l) {
      return l;
    };
    return Vo.selector(_), _(t.current);
  }
  function u(_) {
    ET(r, o, i, s)(_);
  }
  return [a, u];
}
function GT(e, n) {
  return Jr(n) ? n(e.current) : n;
}
function CT(e, n) {
  return e.current = G_(G_({}, e.current), n), n;
}
function DT(e, n, t) {
  return Jr(n) ? n(e.current) : Object.keys(t).forEach(function(r) {
    var o;
    return (o = n[r]) === null || o === void 0 ? void 0 : o.call(n, e.current[r]);
  }), t;
}
var UT = {
  create: vT
}, yT = {
  paths: {
    vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.36.1/min/vs"
  }
};
function HT(e) {
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
function PT(e) {
  return {}.toString.call(e).includes("Object");
}
function wT(e) {
  return e || C_("configIsRequired"), PT(e) || C_("configType"), e.urls ? (MT(), {
    paths: {
      vs: e.urls.monacoBase
    }
  }) : e;
}
function MT() {
  console.warn(rd.deprecation);
}
function kT(e, n) {
  throw new Error(e[n] || e.default);
}
var rd = {
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
}, C_ = HT(kT)(rd), xT = {
  config: wT
}, LT = function() {
  for (var n = arguments.length, t = new Array(n), r = 0; r < n; r++)
    t[r] = arguments[r];
  return function(o) {
    return t.reduceRight(function(i, s) {
      return s(i);
    }, o);
  };
};
function od(e, n) {
  return Object.keys(n).forEach(function(t) {
    n[t] instanceof Object && e[t] && Object.assign(n[t], od(e[t], n[t]));
  }), A_(A_({}, e), n);
}
var BT = {
  type: "cancelation",
  msg: "operation is manually canceled"
};
function Bs(e) {
  var n = !1, t = new Promise(function(r, o) {
    e.then(function(i) {
      return n ? o(BT) : r(i);
    }), e.catch(o);
  });
  return t.cancel = function() {
    return n = !0;
  }, t;
}
var jT = UT.create({
  config: yT,
  isInitialized: !1,
  resolve: null,
  reject: null,
  monaco: null
}), id = dT(jT, 2), So = id[0], ns = id[1];
function FT(e) {
  var n = xT.config(e), t = n.monaco, r = lT(n, ["monaco"]);
  ns(function(o) {
    return {
      config: od(o.config, r),
      monaco: t
    };
  });
}
function VT() {
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
      return sd(window.monaco), e.resolve(window.monaco), Bs(js);
    LT(WT, YT)(KT);
  }
  return Bs(js);
}
function WT(e) {
  return document.body.appendChild(e);
}
function XT(e) {
  var n = document.createElement("script");
  return e && (n.src = e), n;
}
function YT(e) {
  var n = So(function(r) {
    var o = r.config, i = r.reject;
    return {
      config: o,
      reject: i
    };
  }), t = XT("".concat(n.config.paths.vs, "/loader.js"));
  return t.onload = function() {
    return e();
  }, t.onerror = n.reject, t;
}
function KT() {
  var e = So(function(t) {
    var r = t.config, o = t.resolve, i = t.reject;
    return {
      config: r,
      resolve: o,
      reject: i
    };
  }), n = window.require;
  n.config(e.config), n(["vs/editor/editor.main"], function(t) {
    sd(t), e.resolve(t);
  }, function(t) {
    e.reject(t);
  });
}
function sd(e) {
  So().monaco || ns({
    monaco: e
  });
}
function $T() {
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
  config: FT,
  init: VT,
  __getMonacoInstance: $T
}, zT = { wrapper: { display: "flex", position: "relative", textAlign: "initial" }, fullWidth: { width: "100%" }, hide: { display: "none" } }, Fs = zT, JT = { container: { display: "flex", height: "100%", width: "100%", justifyContent: "center", alignItems: "center" } }, qT = JT;
function QT({ children: e }) {
  return Ae.createElement("div", { style: qT.container }, e);
}
var ZT = QT, eE = ZT;
function nE({ width: e, height: n, isEditorReady: t, loading: r, _ref: o, className: i, wrapperProps: s }) {
  return Ae.createElement("section", { style: { ...Fs.wrapper, width: e, height: n }, ...s }, !t && Ae.createElement(eE, null, r), Ae.createElement("div", { ref: o, style: { ...Fs.fullWidth, ...!t && Fs.hide }, className: i }));
}
var tE = nE, ad = Zt(tE);
function rE(e) {
  Ge(e, []);
}
var au = rE;
function oE(e, n, t = !0) {
  let r = Z(!0);
  Ge(r.current || !t ? () => {
    r.current = !1;
  } : e, n);
}
var Ze = oE;
function kr() {
}
function Vt(e, n, t, r) {
  return iE(e, r) || sE(e, n, t, r);
}
function iE(e, n) {
  return e.editor.getModel(ud(e, n));
}
function sE(e, n, t, r) {
  return e.editor.createModel(n, t, r ? ud(e, r) : void 0);
}
function ud(e, n) {
  return e.Uri.parse(n);
}
function aE({ original: e, modified: n, language: t, originalLanguage: r, modifiedLanguage: o, originalModelPath: i, modifiedModelPath: s, keepCurrentOriginalModel: a = !1, keepCurrentModifiedModel: u = !1, theme: _ = "light", loading: l = "Loading...", options: c = {}, height: f = "100%", width: T = "100%", className: d, wrapperProps: h = {}, beforeMount: m = kr, onMount: O = kr }) {
  let [R, N] = qe(!1), [I, p] = qe(!0), H = Z(null), M = Z(null), K = Z(null), w = Z(O), B = Z(m), Te = Z(!1);
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
    H.current?.updateOptions(c);
  }, [c], R);
  let fe = Et(() => {
    if (!M.current)
      return;
    B.current(M.current);
    let G = Vt(M.current, e || "", r || t || "text", i || ""), q = Vt(M.current, n || "", o || t || "text", s || "");
    H.current?.setModel({ original: G, modified: q });
  }, [t, n, o, e, r, i, s]), ge = Et(() => {
    !Te.current && K.current && (H.current = M.current.editor.createDiffEditor(K.current, { automaticLayout: !0, ...c }), fe(), M.current?.editor.setTheme(_), N(!0), Te.current = !0);
  }, [c, _, fe]);
  Ge(() => {
    R && w.current(H.current, M.current);
  }, [R]), Ge(() => {
    !I && !R && ge();
  }, [I, R, ge]), Ze(() => {
    if (H.current && M.current) {
      let G = H.current.getOriginalEditor(), q = Vt(M.current, e || "", r || t || "text", i || "");
      q !== G.getModel() && G.setModel(q);
    }
  }, [i], R), Ze(() => {
    if (H.current && M.current) {
      let G = H.current.getModifiedEditor(), q = Vt(M.current, n || "", o || t || "text", s || "");
      q !== G.getModel() && G.setModel(q);
    }
  }, [s], R);
  function k() {
    let G = H.current?.getModel();
    a || G?.original?.dispose(), u || G?.modified?.dispose(), H.current?.dispose();
  }
  return Ae.createElement(ad, { width: T, height: f, isEditorReady: R, loading: l, _ref: K, className: d, wrapperProps: h });
}
var uE = aE;
Zt(uE);
function _E() {
  let [e, n] = qe(Di.__getMonacoInstance());
  return au(() => {
    let t;
    return e || (t = Di.init(), t.then((r) => {
      n(r);
    })), () => t?.cancel();
  }), e;
}
var _d = _E;
function cE(e) {
  let n = Z();
  return Ge(() => {
    n.current = e;
  }, [e]), n.current;
}
var lE = cE, Wo = /* @__PURE__ */ new Map();
function dE({ defaultValue: e, defaultLanguage: n, defaultPath: t, value: r, language: o, path: i, theme: s = "light", line: a, loading: u = "Loading...", options: _ = {}, overrideServices: l = {}, saveViewState: c = !0, keepCurrentModel: f = !1, width: T = "100%", height: d = "100%", className: h, wrapperProps: m = {}, beforeMount: O = kr, onMount: R = kr, onChange: N, onValidate: I = kr }) {
  let [p, H] = qe(!1), [M, K] = qe(!0), w = Z(null), B = Z(null), Te = Z(null), fe = Z(R), ge = Z(O), k = Z(), G = Z(r), q = lE(i), _e = Z(!1), ee = Z(!1);
  au(() => {
    let Ne = Di.init();
    return Ne.then((C) => (w.current = C) && K(!1)).catch((C) => C?.type !== "cancelation" && console.error("Monaco initialization: error:", C)), () => B.current ? He() : Ne.cancel();
  }), Ze(() => {
    let Ne = Vt(w.current, e || r || "", n || o || "", i || t || "");
    Ne !== B.current?.getModel() && (c && Wo.set(q, B.current?.saveViewState()), B.current?.setModel(Ne), c && B.current?.restoreViewState(Wo.get(i)));
  }, [i], p), Ze(() => {
    B.current?.updateOptions(_);
  }, [_], p), Ze(() => {
    !B.current || r === void 0 || (B.current.getOption(w.current.editor.EditorOption.readOnly) ? B.current.setValue(r) : r !== B.current.getValue() && (ee.current = !0, B.current.executeEdits("", [{ range: B.current.getModel().getFullModelRange(), text: r, forceMoveMarkers: !0 }]), B.current.pushUndoStop(), ee.current = !1));
  }, [r], p), Ze(() => {
    let Ne = B.current?.getModel();
    Ne && o && w.current?.editor.setModelLanguage(Ne, o);
  }, [o], p), Ze(() => {
    a !== void 0 && B.current?.revealLine(a);
  }, [a], p), Ze(() => {
    w.current?.editor.setTheme(s);
  }, [s], p);
  let Ie = Et(() => {
    if (!(!Te.current || !w.current) && !_e.current) {
      ge.current(w.current);
      let Ne = i || t, C = Vt(w.current, r || e || "", n || o || "", Ne || "");
      B.current = w.current?.editor.create(Te.current, { model: C, automaticLayout: !0, ..._ }, l), c && B.current.restoreViewState(Wo.get(Ne)), w.current.editor.setTheme(s), H(!0), _e.current = !0;
    }
  }, [e, n, t, r, o, i, _, l, c, s]);
  Ge(() => {
    p && fe.current(B.current, w.current);
  }, [p]), Ge(() => {
    !M && !p && Ie();
  }, [M, p, Ie]), G.current = r, Ge(() => {
    p && N && (k.current?.dispose(), k.current = B.current?.onDidChangeModelContent((Ne) => {
      ee.current || N(B.current.getValue(), Ne);
    }));
  }, [p, N]), Ge(() => {
    if (p) {
      let Ne = w.current.editor.onDidChangeMarkers((C) => {
        let U = B.current.getModel()?.uri;
        if (U && C.find((P) => P.path === U.path)) {
          let P = w.current.editor.getModelMarkers({ resource: U });
          I?.(P);
        }
      });
      return () => {
        Ne?.dispose();
      };
    }
    return () => {
    };
  }, [p, I]);
  function He() {
    k.current?.dispose(), f ? c && Wo.set(i, B.current.saveViewState()) : B.current.getModel()?.dispose(), B.current.dispose();
  }
  return Ae.createElement(ad, { width: T, height: d, isEditorReady: p, loading: u, _ref: Te, className: h, wrapperProps: m });
}
var hE = dE, mE = Zt(hE), fE = mE;
function cd(e, n) {
  return function() {
    return e.apply(n, arguments);
  };
}
const { toString: pE } = Object.prototype, { getPrototypeOf: uu } = Object, ts = ((e) => (n) => {
  const t = pE.call(n);
  return e[t] || (e[t] = t.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), wn = (e) => (e = e.toLowerCase(), (n) => ts(n) === e), rs = (e) => (n) => typeof n === e, { isArray: fr } = Array, qr = rs("undefined");
function TE(e) {
  return e !== null && !qr(e) && e.constructor !== null && !qr(e.constructor) && cn(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const ld = wn("ArrayBuffer");
function EE(e) {
  let n;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? n = ArrayBuffer.isView(e) : n = e && e.buffer && ld(e.buffer), n;
}
const OE = rs("string"), cn = rs("function"), dd = rs("number"), os = (e) => e !== null && typeof e == "object", RE = (e) => e === !0 || e === !1, ri = (e) => {
  if (ts(e) !== "object")
    return !1;
  const n = uu(e);
  return (n === null || n === Object.prototype || Object.getPrototypeOf(n) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, gE = wn("Date"), NE = wn("File"), bE = wn("Blob"), IE = wn("FileList"), AE = (e) => os(e) && cn(e.pipe), SE = (e) => {
  let n;
  return e && (typeof FormData == "function" && e instanceof FormData || cn(e.append) && ((n = ts(e)) === "formdata" || // detect form-data instance
  n === "object" && cn(e.toString) && e.toString() === "[object FormData]"));
}, vE = wn("URLSearchParams"), GE = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function vo(e, n, { allOwnKeys: t = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, o;
  if (typeof e != "object" && (e = [e]), fr(e))
    for (r = 0, o = e.length; r < o; r++)
      n.call(null, e[r], r, e);
  else {
    const i = t ? Object.getOwnPropertyNames(e) : Object.keys(e), s = i.length;
    let a;
    for (r = 0; r < s; r++)
      a = i[r], n.call(null, e[a], a, e);
  }
}
function hd(e, n) {
  n = n.toLowerCase();
  const t = Object.keys(e);
  let r = t.length, o;
  for (; r-- > 0; )
    if (o = t[r], n === o.toLowerCase())
      return o;
  return null;
}
const md = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), fd = (e) => !qr(e) && e !== md;
function pa() {
  const { caseless: e } = fd(this) && this || {}, n = {}, t = (r, o) => {
    const i = e && hd(n, o) || o;
    ri(n[i]) && ri(r) ? n[i] = pa(n[i], r) : ri(r) ? n[i] = pa({}, r) : fr(r) ? n[i] = r.slice() : n[i] = r;
  };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && vo(arguments[r], t);
  return n;
}
const CE = (e, n, t, { allOwnKeys: r } = {}) => (vo(n, (o, i) => {
  t && cn(o) ? e[i] = cd(o, t) : e[i] = o;
}, { allOwnKeys: r }), e), DE = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), UE = (e, n, t, r) => {
  e.prototype = Object.create(n.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: n.prototype
  }), t && Object.assign(e.prototype, t);
}, yE = (e, n, t, r) => {
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
}, HE = (e, n, t) => {
  e = String(e), (t === void 0 || t > e.length) && (t = e.length), t -= n.length;
  const r = e.indexOf(n, t);
  return r !== -1 && r === t;
}, PE = (e) => {
  if (!e)
    return null;
  if (fr(e))
    return e;
  let n = e.length;
  if (!dd(n))
    return null;
  const t = new Array(n);
  for (; n-- > 0; )
    t[n] = e[n];
  return t;
}, wE = ((e) => (n) => e && n instanceof e)(typeof Uint8Array < "u" && uu(Uint8Array)), ME = (e, n) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const i = o.value;
    n.call(e, i[0], i[1]);
  }
}, kE = (e, n) => {
  let t;
  const r = [];
  for (; (t = e.exec(n)) !== null; )
    r.push(t);
  return r;
}, xE = wn("HTMLFormElement"), LE = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(t, r, o) {
    return r.toUpperCase() + o;
  }
), D_ = (({ hasOwnProperty: e }) => (n, t) => e.call(n, t))(Object.prototype), BE = wn("RegExp"), pd = (e, n) => {
  const t = Object.getOwnPropertyDescriptors(e), r = {};
  vo(t, (o, i) => {
    n(o, i, e) !== !1 && (r[i] = o);
  }), Object.defineProperties(e, r);
}, jE = (e) => {
  pd(e, (n, t) => {
    if (cn(e) && ["arguments", "caller", "callee"].indexOf(t) !== -1)
      return !1;
    const r = e[t];
    if (cn(r)) {
      if (n.enumerable = !1, "writable" in n) {
        n.writable = !1;
        return;
      }
      n.set || (n.set = () => {
        throw Error("Can not rewrite read-only method '" + t + "'");
      });
    }
  });
}, FE = (e, n) => {
  const t = {}, r = (o) => {
    o.forEach((i) => {
      t[i] = !0;
    });
  };
  return fr(e) ? r(e) : r(String(e).split(n)), t;
}, VE = () => {
}, WE = (e, n) => (e = +e, Number.isFinite(e) ? e : n), Vs = "abcdefghijklmnopqrstuvwxyz", U_ = "0123456789", Td = {
  DIGIT: U_,
  ALPHA: Vs,
  ALPHA_DIGIT: Vs + Vs.toUpperCase() + U_
}, XE = (e = 16, n = Td.ALPHA_DIGIT) => {
  let t = "";
  const { length: r } = n;
  for (; e--; )
    t += n[Math.random() * r | 0];
  return t;
};
function YE(e) {
  return !!(e && cn(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const KE = (e) => {
  const n = new Array(10), t = (r, o) => {
    if (os(r)) {
      if (n.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        n[o] = r;
        const i = fr(r) ? [] : {};
        return vo(r, (s, a) => {
          const u = t(s, o + 1);
          !qr(u) && (i[a] = u);
        }), n[o] = void 0, i;
      }
    }
    return r;
  };
  return t(e, 0);
}, $E = wn("AsyncFunction"), zE = (e) => e && (os(e) || cn(e)) && cn(e.then) && cn(e.catch), g = {
  isArray: fr,
  isArrayBuffer: ld,
  isBuffer: TE,
  isFormData: SE,
  isArrayBufferView: EE,
  isString: OE,
  isNumber: dd,
  isBoolean: RE,
  isObject: os,
  isPlainObject: ri,
  isUndefined: qr,
  isDate: gE,
  isFile: NE,
  isBlob: bE,
  isRegExp: BE,
  isFunction: cn,
  isStream: AE,
  isURLSearchParams: vE,
  isTypedArray: wE,
  isFileList: IE,
  forEach: vo,
  merge: pa,
  extend: CE,
  trim: GE,
  stripBOM: DE,
  inherits: UE,
  toFlatObject: yE,
  kindOf: ts,
  kindOfTest: wn,
  endsWith: HE,
  toArray: PE,
  forEachEntry: ME,
  matchAll: kE,
  isHTMLForm: xE,
  hasOwnProperty: D_,
  hasOwnProp: D_,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: pd,
  freezeMethods: jE,
  toObjectSet: FE,
  toCamelCase: LE,
  noop: VE,
  toFiniteNumber: WE,
  findKey: hd,
  global: md,
  isContextDefined: fd,
  ALPHABET: Td,
  generateString: XE,
  isSpecCompliantForm: YE,
  toJSONObject: KE,
  isAsyncFn: $E,
  isThenable: zE
};
function re(e, n, t, r, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", n && (this.code = n), t && (this.config = t), r && (this.request = r), o && (this.response = o);
}
g.inherits(re, Error, {
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
const Ed = re.prototype, Od = {};
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
  Od[e] = { value: e };
});
Object.defineProperties(re, Od);
Object.defineProperty(Ed, "isAxiosError", { value: !0 });
re.from = (e, n, t, r, o, i) => {
  const s = Object.create(Ed);
  return g.toFlatObject(e, s, function(u) {
    return u !== Error.prototype;
  }, (a) => a !== "isAxiosError"), re.call(s, e.message, n, t, r, o), s.cause = e, s.name = e.name, i && Object.assign(s, i), s;
};
const JE = null;
function Ta(e) {
  return g.isPlainObject(e) || g.isArray(e);
}
function Rd(e) {
  return g.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function y_(e, n, t) {
  return e ? e.concat(n).map(function(o, i) {
    return o = Rd(o), !t && i ? "[" + o + "]" : o;
  }).join(t ? "." : "") : n;
}
function qE(e) {
  return g.isArray(e) && !e.some(Ta);
}
const QE = g.toFlatObject(g, {}, null, function(n) {
  return /^is[A-Z]/.test(n);
});
function is(e, n, t) {
  if (!g.isObject(e))
    throw new TypeError("target must be an object");
  n = n || new FormData(), t = g.toFlatObject(t, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(h, m) {
    return !g.isUndefined(m[h]);
  });
  const r = t.metaTokens, o = t.visitor || l, i = t.dots, s = t.indexes, u = (t.Blob || typeof Blob < "u" && Blob) && g.isSpecCompliantForm(n);
  if (!g.isFunction(o))
    throw new TypeError("visitor must be a function");
  function _(d) {
    if (d === null)
      return "";
    if (g.isDate(d))
      return d.toISOString();
    if (!u && g.isBlob(d))
      throw new re("Blob is not supported. Use a Buffer instead.");
    return g.isArrayBuffer(d) || g.isTypedArray(d) ? u && typeof Blob == "function" ? new Blob([d]) : Buffer.from(d) : d;
  }
  function l(d, h, m) {
    let O = d;
    if (d && !m && typeof d == "object") {
      if (g.endsWith(h, "{}"))
        h = r ? h : h.slice(0, -2), d = JSON.stringify(d);
      else if (g.isArray(d) && qE(d) || (g.isFileList(d) || g.endsWith(h, "[]")) && (O = g.toArray(d)))
        return h = Rd(h), O.forEach(function(N, I) {
          !(g.isUndefined(N) || N === null) && n.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? y_([h], I, i) : s === null ? h : h + "[]",
            _(N)
          );
        }), !1;
    }
    return Ta(d) ? !0 : (n.append(y_(m, h, i), _(d)), !1);
  }
  const c = [], f = Object.assign(QE, {
    defaultVisitor: l,
    convertValue: _,
    isVisitable: Ta
  });
  function T(d, h) {
    if (!g.isUndefined(d)) {
      if (c.indexOf(d) !== -1)
        throw Error("Circular reference detected in " + h.join("."));
      c.push(d), g.forEach(d, function(O, R) {
        (!(g.isUndefined(O) || O === null) && o.call(
          n,
          O,
          g.isString(R) ? R.trim() : R,
          h,
          f
        )) === !0 && T(O, h ? h.concat(R) : [R]);
      }), c.pop();
    }
  }
  if (!g.isObject(e))
    throw new TypeError("data must be an object");
  return T(e), n;
}
function H_(e) {
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
const gd = _u.prototype;
gd.append = function(n, t) {
  this._pairs.push([n, t]);
};
gd.toString = function(n) {
  const t = n ? function(r) {
    return n.call(this, r, H_);
  } : H_;
  return this._pairs.map(function(o) {
    return t(o[0]) + "=" + t(o[1]);
  }, "").join("&");
};
function ZE(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Nd(e, n, t) {
  if (!n)
    return e;
  const r = t && t.encode || ZE, o = t && t.serialize;
  let i;
  if (o ? i = o(n, t) : i = g.isURLSearchParams(n) ? n.toString() : new _u(n, t).toString(r), i) {
    const s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class eO {
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
const P_ = eO, bd = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, nO = typeof URLSearchParams < "u" ? URLSearchParams : _u, tO = typeof FormData < "u" ? FormData : null, rO = typeof Blob < "u" ? Blob : null, oO = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), iO = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), Cn = {
  isBrowser: !0,
  classes: {
    URLSearchParams: nO,
    FormData: tO,
    Blob: rO
  },
  isStandardBrowserEnv: oO,
  isStandardBrowserWebWorkerEnv: iO,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function sO(e, n) {
  return is(e, new Cn.classes.URLSearchParams(), Object.assign({
    visitor: function(t, r, o, i) {
      return Cn.isNode && g.isBuffer(t) ? (this.append(r, t.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, n));
}
function aO(e) {
  return g.matchAll(/\w+|\[(\w*)]/g, e).map((n) => n[0] === "[]" ? "" : n[1] || n[0]);
}
function uO(e) {
  const n = {}, t = Object.keys(e);
  let r;
  const o = t.length;
  let i;
  for (r = 0; r < o; r++)
    i = t[r], n[i] = e[i];
  return n;
}
function Id(e) {
  function n(t, r, o, i) {
    let s = t[i++];
    const a = Number.isFinite(+s), u = i >= t.length;
    return s = !s && g.isArray(o) ? o.length : s, u ? (g.hasOwnProp(o, s) ? o[s] = [o[s], r] : o[s] = r, !a) : ((!o[s] || !g.isObject(o[s])) && (o[s] = []), n(t, r, o[s], i) && g.isArray(o[s]) && (o[s] = uO(o[s])), !a);
  }
  if (g.isFormData(e) && g.isFunction(e.entries)) {
    const t = {};
    return g.forEachEntry(e, (r, o) => {
      n(aO(r), o, t, 0);
    }), t;
  }
  return null;
}
const _O = {
  "Content-Type": void 0
};
function cO(e, n, t) {
  if (g.isString(e))
    try {
      return (n || JSON.parse)(e), g.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (t || JSON.stringify)(e);
}
const ss = {
  transitional: bd,
  adapter: ["xhr", "http"],
  transformRequest: [function(n, t) {
    const r = t.getContentType() || "", o = r.indexOf("application/json") > -1, i = g.isObject(n);
    if (i && g.isHTMLForm(n) && (n = new FormData(n)), g.isFormData(n))
      return o && o ? JSON.stringify(Id(n)) : n;
    if (g.isArrayBuffer(n) || g.isBuffer(n) || g.isStream(n) || g.isFile(n) || g.isBlob(n))
      return n;
    if (g.isArrayBufferView(n))
      return n.buffer;
    if (g.isURLSearchParams(n))
      return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), n.toString();
    let a;
    if (i) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return sO(n, this.formSerializer).toString();
      if ((a = g.isFileList(n)) || r.indexOf("multipart/form-data") > -1) {
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
    if (n && g.isString(n) && (r && !this.responseType || o)) {
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
g.forEach(["delete", "get", "head"], function(n) {
  ss.headers[n] = {};
});
g.forEach(["post", "put", "patch"], function(n) {
  ss.headers[n] = g.merge(_O);
});
const cu = ss, lO = g.toObjectSet([
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
]), dO = (e) => {
  const n = {};
  let t, r, o;
  return e && e.split(`
`).forEach(function(s) {
    o = s.indexOf(":"), t = s.substring(0, o).trim().toLowerCase(), r = s.substring(o + 1).trim(), !(!t || n[t] && lO[t]) && (t === "set-cookie" ? n[t] ? n[t].push(r) : n[t] = [r] : n[t] = n[t] ? n[t] + ", " + r : r);
  }), n;
}, w_ = Symbol("internals");
function Ir(e) {
  return e && String(e).trim().toLowerCase();
}
function oi(e) {
  return e === !1 || e == null ? e : g.isArray(e) ? e.map(oi) : String(e);
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
  if (g.isFunction(r))
    return r.call(this, n, t);
  if (o && (n = t), !!g.isString(n)) {
    if (g.isString(r))
      return n.indexOf(r) !== -1;
    if (g.isRegExp(r))
      return r.test(n);
  }
}
function fO(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (n, t, r) => t.toUpperCase() + r);
}
function pO(e, n) {
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
class as {
  constructor(n) {
    n && this.set(n);
  }
  set(n, t, r) {
    const o = this;
    function i(a, u, _) {
      const l = Ir(u);
      if (!l)
        throw new Error("header name must be a non-empty string");
      const c = g.findKey(o, l);
      (!c || o[c] === void 0 || _ === !0 || _ === void 0 && o[c] !== !1) && (o[c || u] = oi(a));
    }
    const s = (a, u) => g.forEach(a, (_, l) => i(_, l, u));
    return g.isPlainObject(n) || n instanceof this.constructor ? s(n, t) : g.isString(n) && (n = n.trim()) && !mO(n) ? s(dO(n), t) : n != null && i(t, n, r), this;
  }
  get(n, t) {
    if (n = Ir(n), n) {
      const r = g.findKey(this, n);
      if (r) {
        const o = this[r];
        if (!t)
          return o;
        if (t === !0)
          return hO(o);
        if (g.isFunction(t))
          return t.call(this, o, r);
        if (g.isRegExp(t))
          return t.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(n, t) {
    if (n = Ir(n), n) {
      const r = g.findKey(this, n);
      return !!(r && this[r] !== void 0 && (!t || Ws(this, this[r], r, t)));
    }
    return !1;
  }
  delete(n, t) {
    const r = this;
    let o = !1;
    function i(s) {
      if (s = Ir(s), s) {
        const a = g.findKey(r, s);
        a && (!t || Ws(r, r[a], a, t)) && (delete r[a], o = !0);
      }
    }
    return g.isArray(n) ? n.forEach(i) : i(n), o;
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
    return g.forEach(this, (o, i) => {
      const s = g.findKey(r, i);
      if (s) {
        t[s] = oi(o), delete t[i];
        return;
      }
      const a = n ? fO(i) : String(i).trim();
      a !== i && delete t[i], t[a] = oi(o), r[a] = !0;
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
    const r = (this[w_] = this[w_] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function i(s) {
      const a = Ir(s);
      r[a] || (pO(o, s), r[a] = !0);
    }
    return g.isArray(n) ? n.forEach(i) : i(n), this;
  }
}
as.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
g.freezeMethods(as.prototype);
g.freezeMethods(as);
const Yn = as;
function Xs(e, n) {
  const t = this || cu, r = n || t, o = Yn.from(r.headers);
  let i = r.data;
  return g.forEach(e, function(a) {
    i = a.call(t, i, o.normalize(), n ? n.status : void 0);
  }), o.normalize(), i;
}
function Ad(e) {
  return !!(e && e.__CANCEL__);
}
function Go(e, n, t) {
  re.call(this, e ?? "canceled", re.ERR_CANCELED, n, t), this.name = "CanceledError";
}
g.inherits(Go, re, {
  __CANCEL__: !0
});
function TO(e, n, t) {
  const r = t.config.validateStatus;
  !t.status || !r || r(t.status) ? e(t) : n(new re(
    "Request failed with status code " + t.status,
    [re.ERR_BAD_REQUEST, re.ERR_BAD_RESPONSE][Math.floor(t.status / 100) - 4],
    t.config,
    t.request,
    t
  ));
}
const EO = Cn.isStandardBrowserEnv ? (
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
function OO(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function RO(e, n) {
  return n ? e.replace(/\/+$/, "") + "/" + n.replace(/^\/+/, "") : e;
}
function Sd(e, n) {
  return e && !OO(n) ? RO(e, n) : n;
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
function NO(e) {
  const n = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return n && n[1] || "";
}
function bO(e, n) {
  e = e || 10;
  const t = new Array(e), r = new Array(e);
  let o = 0, i = 0, s;
  return n = n !== void 0 ? n : 1e3, function(u) {
    const _ = Date.now(), l = r[i];
    s || (s = _), t[o] = u, r[o] = _;
    let c = i, f = 0;
    for (; c !== o; )
      f += t[c++], c = c % e;
    if (o = (o + 1) % e, o === i && (i = (i + 1) % e), _ - s < n)
      return;
    const T = l && _ - l;
    return T ? Math.round(f * 1e3 / T) : void 0;
  };
}
function M_(e, n) {
  let t = 0;
  const r = bO(50, 250);
  return (o) => {
    const i = o.loaded, s = o.lengthComputable ? o.total : void 0, a = i - t, u = r(a), _ = i <= s;
    t = i;
    const l = {
      loaded: i,
      total: s,
      progress: s ? i / s : void 0,
      bytes: a,
      rate: u || void 0,
      estimated: u && s && _ ? (s - i) / u : void 0,
      event: o
    };
    l[n ? "download" : "upload"] = !0, e(l);
  };
}
const IO = typeof XMLHttpRequest < "u", AO = IO && function(e) {
  return new Promise(function(t, r) {
    let o = e.data;
    const i = Yn.from(e.headers).normalize(), s = e.responseType;
    let a;
    function u() {
      e.cancelToken && e.cancelToken.unsubscribe(a), e.signal && e.signal.removeEventListener("abort", a);
    }
    g.isFormData(o) && (Cn.isStandardBrowserEnv || Cn.isStandardBrowserWebWorkerEnv ? i.setContentType(!1) : i.setContentType("multipart/form-data;", !1));
    let _ = new XMLHttpRequest();
    if (e.auth) {
      const T = e.auth.username || "", d = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      i.set("Authorization", "Basic " + btoa(T + ":" + d));
    }
    const l = Sd(e.baseURL, e.url);
    _.open(e.method.toUpperCase(), Nd(l, e.params, e.paramsSerializer), !0), _.timeout = e.timeout;
    function c() {
      if (!_)
        return;
      const T = Yn.from(
        "getAllResponseHeaders" in _ && _.getAllResponseHeaders()
      ), h = {
        data: !s || s === "text" || s === "json" ? _.responseText : _.response,
        status: _.status,
        statusText: _.statusText,
        headers: T,
        config: e,
        request: _
      };
      TO(function(O) {
        t(O), u();
      }, function(O) {
        r(O), u();
      }, h), _ = null;
    }
    if ("onloadend" in _ ? _.onloadend = c : _.onreadystatechange = function() {
      !_ || _.readyState !== 4 || _.status === 0 && !(_.responseURL && _.responseURL.indexOf("file:") === 0) || setTimeout(c);
    }, _.onabort = function() {
      _ && (r(new re("Request aborted", re.ECONNABORTED, e, _)), _ = null);
    }, _.onerror = function() {
      r(new re("Network Error", re.ERR_NETWORK, e, _)), _ = null;
    }, _.ontimeout = function() {
      let d = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const h = e.transitional || bd;
      e.timeoutErrorMessage && (d = e.timeoutErrorMessage), r(new re(
        d,
        h.clarifyTimeoutError ? re.ETIMEDOUT : re.ECONNABORTED,
        e,
        _
      )), _ = null;
    }, Cn.isStandardBrowserEnv) {
      const T = (e.withCredentials || gO(l)) && e.xsrfCookieName && EO.read(e.xsrfCookieName);
      T && i.set(e.xsrfHeaderName, T);
    }
    o === void 0 && i.setContentType(null), "setRequestHeader" in _ && g.forEach(i.toJSON(), function(d, h) {
      _.setRequestHeader(h, d);
    }), g.isUndefined(e.withCredentials) || (_.withCredentials = !!e.withCredentials), s && s !== "json" && (_.responseType = e.responseType), typeof e.onDownloadProgress == "function" && _.addEventListener("progress", M_(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && _.upload && _.upload.addEventListener("progress", M_(e.onUploadProgress)), (e.cancelToken || e.signal) && (a = (T) => {
      _ && (r(!T || T.type ? new Go(null, e, _) : T), _.abort(), _ = null);
    }, e.cancelToken && e.cancelToken.subscribe(a), e.signal && (e.signal.aborted ? a() : e.signal.addEventListener("abort", a)));
    const f = NO(l);
    if (f && Cn.protocols.indexOf(f) === -1) {
      r(new re("Unsupported protocol " + f + ":", re.ERR_BAD_REQUEST, e));
      return;
    }
    _.send(o || null);
  });
}, ii = {
  http: JE,
  xhr: AO
};
g.forEach(ii, (e, n) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: n });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: n });
  }
});
const SO = {
  getAdapter: (e) => {
    e = g.isArray(e) ? e : [e];
    const { length: n } = e;
    let t, r;
    for (let o = 0; o < n && (t = e[o], !(r = g.isString(t) ? ii[t.toLowerCase()] : t)); o++)
      ;
    if (!r)
      throw r === !1 ? new re(
        `Adapter ${t} is not supported by the environment`,
        "ERR_NOT_SUPPORT"
      ) : new Error(
        g.hasOwnProp(ii, t) ? `Adapter '${t}' is not available in the build` : `Unknown adapter '${t}'`
      );
    if (!g.isFunction(r))
      throw new TypeError("adapter is not a function");
    return r;
  },
  adapters: ii
};
function Ys(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Go(null, e);
}
function k_(e) {
  return Ys(e), e.headers = Yn.from(e.headers), e.data = Xs.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), SO.getAdapter(e.adapter || cu.adapter)(e).then(function(r) {
    return Ys(e), r.data = Xs.call(
      e,
      e.transformResponse,
      r
    ), r.headers = Yn.from(r.headers), r;
  }, function(r) {
    return Ad(r) || (Ys(e), r && r.response && (r.response.data = Xs.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = Yn.from(r.response.headers))), Promise.reject(r);
  });
}
const x_ = (e) => e instanceof Yn ? e.toJSON() : e;
function sr(e, n) {
  n = n || {};
  const t = {};
  function r(_, l, c) {
    return g.isPlainObject(_) && g.isPlainObject(l) ? g.merge.call({ caseless: c }, _, l) : g.isPlainObject(l) ? g.merge({}, l) : g.isArray(l) ? l.slice() : l;
  }
  function o(_, l, c) {
    if (g.isUndefined(l)) {
      if (!g.isUndefined(_))
        return r(void 0, _, c);
    } else
      return r(_, l, c);
  }
  function i(_, l) {
    if (!g.isUndefined(l))
      return r(void 0, l);
  }
  function s(_, l) {
    if (g.isUndefined(l)) {
      if (!g.isUndefined(_))
        return r(void 0, _);
    } else
      return r(void 0, l);
  }
  function a(_, l, c) {
    if (c in n)
      return r(_, l);
    if (c in e)
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
    headers: (_, l) => o(x_(_), x_(l), !0)
  };
  return g.forEach(Object.keys(Object.assign({}, e, n)), function(l) {
    const c = u[l] || o, f = c(e[l], n[l], l);
    g.isUndefined(f) && c !== a || (t[l] = f);
  }), t;
}
const vd = "1.4.0", lu = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, n) => {
  lu[e] = function(r) {
    return typeof r === e || "a" + (n < 1 ? "n " : " ") + e;
  };
});
const L_ = {};
lu.transitional = function(n, t, r) {
  function o(i, s) {
    return "[Axios v" + vd + "] Transitional option '" + i + "'" + s + (r ? ". " + r : "");
  }
  return (i, s, a) => {
    if (n === !1)
      throw new re(
        o(s, " has been removed" + (t ? " in " + t : "")),
        re.ERR_DEPRECATED
      );
    return t && !L_[s] && (L_[s] = !0, console.warn(
      o(
        s,
        " has been deprecated since v" + t + " and will be removed in the near future"
      )
    )), n ? n(i, s, a) : !0;
  };
};
function vO(e, n, t) {
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
  assertOptions: vO,
  validators: lu
}, tt = Ea.validators;
class Ui {
  constructor(n) {
    this.defaults = n, this.interceptors = {
      request: new P_(),
      response: new P_()
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
    typeof n == "string" ? (t = t || {}, t.url = n) : t = n || {}, t = sr(this.defaults, t);
    const { transitional: r, paramsSerializer: o, headers: i } = t;
    r !== void 0 && Ea.assertOptions(r, {
      silentJSONParsing: tt.transitional(tt.boolean),
      forcedJSONParsing: tt.transitional(tt.boolean),
      clarifyTimeoutError: tt.transitional(tt.boolean)
    }, !1), o != null && (g.isFunction(o) ? t.paramsSerializer = {
      serialize: o
    } : Ea.assertOptions(o, {
      encode: tt.function,
      serialize: tt.function
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
    ), t.headers = Yn.concat(s, i);
    const a = [];
    let u = !0;
    this.interceptors.request.forEach(function(h) {
      typeof h.runWhen == "function" && h.runWhen(t) === !1 || (u = u && h.synchronous, a.unshift(h.fulfilled, h.rejected));
    });
    const _ = [];
    this.interceptors.response.forEach(function(h) {
      _.push(h.fulfilled, h.rejected);
    });
    let l, c = 0, f;
    if (!u) {
      const d = [k_.bind(this), void 0];
      for (d.unshift.apply(d, a), d.push.apply(d, _), f = d.length, l = Promise.resolve(t); c < f; )
        l = l.then(d[c++], d[c++]);
      return l;
    }
    f = a.length;
    let T = t;
    for (c = 0; c < f; ) {
      const d = a[c++], h = a[c++];
      try {
        T = d(T);
      } catch (m) {
        h.call(this, m);
        break;
      }
    }
    try {
      l = k_.call(this, T);
    } catch (d) {
      return Promise.reject(d);
    }
    for (c = 0, f = _.length; c < f; )
      l = l.then(_[c++], _[c++]);
    return l;
  }
  getUri(n) {
    n = sr(this.defaults, n);
    const t = Sd(n.baseURL, n.url);
    return Nd(t, n.params, n.paramsSerializer);
  }
}
g.forEach(["delete", "get", "head", "options"], function(n) {
  Ui.prototype[n] = function(t, r) {
    return this.request(sr(r || {}, {
      method: n,
      url: t,
      data: (r || {}).data
    }));
  };
});
g.forEach(["post", "put", "patch"], function(n) {
  function t(r) {
    return function(i, s, a) {
      return this.request(sr(a || {}, {
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
const GO = du;
function CO(e) {
  return function(t) {
    return e.apply(null, t);
  };
}
function DO(e) {
  return g.isObject(e) && e.isAxiosError === !0;
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
const UO = Oa;
function Gd(e) {
  const n = new si(e), t = cd(si.prototype.request, n);
  return g.extend(t, si.prototype, n, { allOwnKeys: !0 }), g.extend(t, n, null, { allOwnKeys: !0 }), t.create = function(o) {
    return Gd(sr(e, o));
  }, t;
}
const Ue = Gd(cu);
Ue.Axios = si;
Ue.CanceledError = Go;
Ue.CancelToken = GO;
Ue.isCancel = Ad;
Ue.VERSION = vd;
Ue.toFormData = is;
Ue.AxiosError = re;
Ue.Cancel = Ue.CanceledError;
Ue.all = function(n) {
  return Promise.all(n);
};
Ue.spread = CO;
Ue.isAxiosError = DO;
Ue.mergeConfig = sr;
Ue.AxiosHeaders = Yn;
Ue.formToJSON = (e) => Id(g.isHTMLForm(e) ? new FormData(e) : e);
Ue.HttpStatusCode = UO;
Ue.default = Ue;
const yO = Ue, HO = { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_d89c3ac0-3f7c-4722-84d9-0ca2c269f4c9", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "npm/8.19.4 node/v16.20.1 linux x64 workspaces/false ci/github-actions", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_d89c3ac0-3f7c-4722-84d9-0ca2c269f4c9", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", npm_config_noproxy: "", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-8.2.1", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "", npm_config_userconfig: "/home/runner/.npmrc", npm_config_local_prefix: "/home/runner/work/CodeGear/CodeGear", SYSTEMD_EXEC_PID: "665", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", COLOR: "0", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.6/x64", NVM_DIR: "/home/runner/.nvm", npm_config_metrics_registry: "https://registry.npmjs.org/", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230724.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", JOURNAL_STREAM: "8:16270", GITHUB_WORKFLOW: "CodeGear CI", _: "/opt/hostedtoolcache/node/16.20.1/x64/bin/npm", npm_config_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", GITHUB_RUN_ID: "5680608279", npm_config_cache: "/home/runner/.npm", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "4c5890c3ecc6b5070bc722166ce4b267a0a914ce", GITHUB_BASE_REF: "", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/heads/develop", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", npm_config_node_gyp: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.bin:/home/runner/work/CodeGear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_284c5184-0272-499c-8f78-86c1219f8b37", INVOCATION_ID: "5762ce3deb3b455c87727c76daf600a9", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.11/x64", NODE: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "26", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 3", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "develop", GITHUB_REPOSITORY: "Gearonix/CodeGear", npm_lifecycle_script: " nx run-many --targets=build --all", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", STATS_NM: "true", npm_package_version: "0.0.0", npm_lifecycle_event: "build", NODE_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/bin/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/node_modules", GITHUB_REF_PROTECTED: "false", npm_config_strict_peer_dependencies: "", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "4c5890c3ecc6b5070bc722166ce4b267a0a914ce", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/heads/develop", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", npm_config_globalconfig: "/opt/hostedtoolcache/node/16.20.1/x64/etc/npmrc", npm_config_init_module: "/home/runner/.npm-init.js", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_d89c3ac0-3f7c-4722-84d9-0ca2c269f4c9", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", npm_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/bin/npm-cli.js", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "push", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_d89c3ac0-3f7c-4722-84d9-0ca2c269f4c9", npm_config_global_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", npm_command: "run-script", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_d89c3ac0-3f7c-4722-84d9-0ca2c269f4c9", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", EDITOR: "vi", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/12141517249162447167", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "12141517249162447167", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.SERVER_URL ?? "http://localhost:6868", PO = {
  CODE_EXECUTOR_API: "execute"
}, wO = yO.create({
  baseURL: HO,
  withCredentials: !0
}), MO = {
  EDITOR_THEME: "EDITOR_THEME",
  EDITOR_CONTENT_DATA: "EDITOR_CONTENT_DATA",
  EDITOR_EXECUTE_MESSAGES: "EDITOR_EXECUTE_MESSAGES",
  EDITOR_FONT_SIZE: "EDITOR_FONT_SIZE",
  EDITOR_TAB_SIZE: "EDITOR_TAB_SIZE",
  EDITOR_CUSTOM_BACKGROUND: "EDITOR_CUSTOM_BACKGROUND",
  EDITOR_CUSTOM_COLOR: "EDITOR_CUSTOM_COLOR",
  EDITOR_HTML_PREVIEW: "EDITOR_HTML_PREVIEW"
}, kO = {
  MAIN: "/",
  EDITOR: "/edit",
  ABOUT: "/about"
}, Cd = () => {
  const [e, n] = qe([]);
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
}, xO = (e = !1) => {
  const [n, t] = qe(e);
  return {
    off: () => t(!1),
    on: () => t(!0),
    toggle: () => t(!n),
    val: n
  };
}, LO = (e, n) => {
  const t = Z();
  return (...r) => {
    t.current && clearTimeout(t.current), t.current = setTimeout(() => {
      e(...r);
    }, n);
  };
}, Ra = ({ when: e, children: n }) => e ? n : null, Dd = zi({}), BO = async () => Promise.all([
  Promise.resolve().then(() => J0),
  import("./use-gesture-react.esm-7899cdd1.mjs")
]), hu = ({ children: e }) => {
  const n = Z(), t = Z(), r = xO(), o = async () => {
    const [s, a] = await BO();
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
  return /* @__PURE__ */ V(Dd.Provider, { value: i, children: /* @__PURE__ */ V(Ra, { when: r.val, children: e }) });
}, us = () => Qe(Dd);
var mu, F, Ud, At, B_, yd, ga, ai = {}, Hd = [], jO = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, _s = Array.isArray;
function at(e, n) {
  for (var t in n)
    e[t] = n[t];
  return e;
}
function Pd(e) {
  var n = e.parentNode;
  n && n.removeChild(e);
}
function j_(e, n, t) {
  var r, o, i, s = {};
  for (i in n)
    i == "key" ? r = n[i] : i == "ref" ? o = n[i] : s[i] = n[i];
  if (arguments.length > 2 && (s.children = arguments.length > 3 ? mu.call(arguments, 2) : t), typeof e == "function" && e.defaultProps != null)
    for (i in e.defaultProps)
      s[i] === void 0 && (s[i] = e.defaultProps[i]);
  return ui(e, s, r, o, null);
}
function ui(e, n, t, r, o) {
  var i = { type: e, props: n, key: t, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: o ?? ++Ud };
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
function wd(e) {
  var n, t;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, n = 0; n < e.__k.length; n++)
      if ((t = e.__k[n]) != null && t.__e != null) {
        e.__e = e.__c.base = t.__e;
        break;
      }
    return wd(e);
  }
}
function F_(e) {
  (!e.__d && (e.__d = !0) && At.push(e) && !Hi.__r++ || B_ !== F.debounceRendering) && ((B_ = F.debounceRendering) || yd)(Hi);
}
function Hi() {
  var e, n, t, r, o, i, s, a, u;
  for (At.sort(ga); e = At.shift(); )
    e.__d && (n = At.length, r = void 0, o = void 0, i = void 0, a = (s = (t = e).__v).__e, (u = t.__P) && (r = [], o = [], (i = at({}, s)).__v = s.__v + 1, Ld(u, s, i, t.__n, u.ownerSVGElement !== void 0, s.__h != null ? [a] : null, r, a ?? yi(s), s.__h, o), WO(r, s, o), s.__e != a && wd(s)), At.length > n && At.sort(ga));
  Hi.__r = 0;
}
function Md(e, n, t, r, o, i, s, a, u, _, l) {
  var c, f, T, d, h, m, O, R, N, I, p = 0, H = r && r.__k || Hd, M = H.length, K = M, w = n.length;
  for (t.__k = [], c = 0; c < w; c++)
    (d = t.__k[c] = (d = n[c]) == null || typeof d == "boolean" || typeof d == "function" ? null : typeof d == "string" || typeof d == "number" || typeof d == "bigint" ? ui(null, d, null, null, d) : _s(d) ? ui(Qr, { children: d }, null, null, null) : d.__b > 0 ? ui(d.type, d.props, d.key, d.ref ? d.ref : null, d.__v) : d) != null && (d.__ = t, d.__b = t.__b + 1, (R = FO(d, H, O = c + p, K)) === -1 ? T = ai : (T = H[R] || ai, H[R] = void 0, K--), Ld(e, d, T, o, i, s, a, u, _, l), h = d.__e, (f = d.ref) && T.ref != f && (T.ref && fu(T.ref, null, d), l.push(f, d.__c || h, d)), h != null && (m == null && (m = h), I = !(N = T === ai || T.__v === null) && R === O, N ? R == -1 && p-- : R !== O && (R === O + 1 ? (p++, I = !0) : R > O ? K > w - O ? (p += R - O, I = !0) : p-- : p = R < O && R == O - 1 ? R - O : 0), O = c + p, I = I || R == c && !N, typeof d.type != "function" || R === O && T.__k !== d.__k ? typeof d.type == "function" || I ? d.__d !== void 0 ? (u = d.__d, d.__d = void 0) : u = h.nextSibling : u = xd(e, h, u) : u = kd(d, u, e), typeof t.type == "function" && (t.__d = u)));
  for (t.__e = m, c = M; c--; )
    H[c] != null && (typeof t.type == "function" && H[c].__e != null && H[c].__e == t.__d && (t.__d = H[c].__e.nextSibling), Bd(H[c], H[c]));
}
function kd(e, n, t) {
  for (var r, o = e.__k, i = 0; o && i < o.length; i++)
    (r = o[i]) && (r.__ = e, n = typeof r.type == "function" ? kd(r, n, t) : xd(t, r.__e, n));
  return n;
}
function Pi(e, n) {
  return n = n || [], e == null || typeof e == "boolean" || (_s(e) ? e.some(function(t) {
    Pi(t, n);
  }) : n.push(e)), n;
}
function xd(e, n, t) {
  return t == null || t.parentNode !== e ? e.insertBefore(n, null) : n == t && n.parentNode != null || e.insertBefore(n, t), n.nextSibling;
}
function FO(e, n, t, r) {
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
function VO(e, n, t, r, o) {
  var i;
  for (i in t)
    i === "children" || i === "key" || i in n || wi(e, i, null, t[i], r);
  for (i in n)
    o && typeof n[i] != "function" || i === "children" || i === "key" || i === "value" || i === "checked" || t[i] === n[i] || wi(e, i, n[i], t[i], r);
}
function V_(e, n, t) {
  n[0] === "-" ? e.setProperty(n, t ?? "") : e[n] = t == null ? "" : typeof t != "number" || jO.test(n) ? t : t + "px";
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
            t && n in t || V_(e.style, n, "");
        if (t)
          for (n in t)
            r && t[n] === r[n] || V_(e.style, n, t[n]);
      }
    else if (n[0] === "o" && n[1] === "n")
      i = n !== (n = n.replace(/Capture$/, "")), n = n.toLowerCase() in e ? n.toLowerCase().slice(2) : n.slice(2), e.l || (e.l = {}), e.l[n + i] = t, t ? r || e.addEventListener(n, i ? X_ : W_, i) : e.removeEventListener(n, i ? X_ : W_, i);
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
function W_(e) {
  return this.l[e.type + !1](F.event ? F.event(e) : e);
}
function X_(e) {
  return this.l[e.type + !0](F.event ? F.event(e) : e);
}
function Ld(e, n, t, r, o, i, s, a, u, _) {
  var l, c, f, T, d, h, m, O, R, N, I, p, H, M, K, w = n.type;
  if (n.constructor !== void 0)
    return null;
  t.__h != null && (u = t.__h, a = n.__e = t.__e, n.__h = null, i = [a]), (l = F.__b) && l(n);
  try {
    e:
      if (typeof w == "function") {
        if (O = n.props, R = (l = w.contextType) && r[l.__c], N = l ? R ? R.props.value : l.__ : r, t.__c ? m = (c = n.__c = t.__c).__ = c.__E : ("prototype" in w && w.prototype.render ? n.__c = c = new w(O, N) : (n.__c = c = new Kn(O, N), c.constructor = w, c.render = YO), R && R.sub(c), c.props = O, c.state || (c.state = {}), c.context = N, c.__n = r, f = c.__d = !0, c.__h = [], c._sb = []), c.__s == null && (c.__s = c.state), w.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = at({}, c.__s)), at(c.__s, w.getDerivedStateFromProps(O, c.__s))), T = c.props, d = c.state, c.__v = n, f)
          w.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), c.componentDidMount != null && c.__h.push(c.componentDidMount);
        else {
          if (w.getDerivedStateFromProps == null && O !== T && c.componentWillReceiveProps != null && c.componentWillReceiveProps(O, N), !c.__e && (c.shouldComponentUpdate != null && c.shouldComponentUpdate(O, c.__s, N) === !1 || n.__v === t.__v)) {
            for (n.__v !== t.__v && (c.props = O, c.state = c.__s, c.__d = !1), n.__e = t.__e, n.__k = t.__k, n.__k.forEach(function(B) {
              B && (B.__ = n);
            }), I = 0; I < c._sb.length; I++)
              c.__h.push(c._sb[I]);
            c._sb = [], c.__h.length && s.push(c);
            break e;
          }
          c.componentWillUpdate != null && c.componentWillUpdate(O, c.__s, N), c.componentDidUpdate != null && c.__h.push(function() {
            c.componentDidUpdate(T, d, h);
          });
        }
        if (c.context = N, c.props = O, c.__P = e, c.__e = !1, p = F.__r, H = 0, "prototype" in w && w.prototype.render) {
          for (c.state = c.__s, c.__d = !1, p && p(n), l = c.render(c.props, c.state, c.context), M = 0; M < c._sb.length; M++)
            c.__h.push(c._sb[M]);
          c._sb = [];
        } else
          do
            c.__d = !1, p && p(n), l = c.render(c.props, c.state, c.context), c.state = c.__s;
          while (c.__d && ++H < 25);
        c.state = c.__s, c.getChildContext != null && (r = at(at({}, r), c.getChildContext())), f || c.getSnapshotBeforeUpdate == null || (h = c.getSnapshotBeforeUpdate(T, d)), Md(e, _s(K = l != null && l.type === Qr && l.key == null ? l.props.children : l) ? K : [K], n, t, r, o, i, s, a, u, _), c.base = n.__e, n.__h = null, c.__h.length && s.push(c), m && (c.__E = c.__ = null);
      } else
        i == null && n.__v === t.__v ? (n.__k = t.__k, n.__e = t.__e) : n.__e = XO(t.__e, n, t, r, o, i, s, u, _);
    (l = F.diffed) && l(n);
  } catch (B) {
    n.__v = null, (u || i != null) && (n.__e = a, n.__h = !!u, i[i.indexOf(a)] = null), F.__e(B, n, t);
  }
}
function WO(e, n, t) {
  for (var r = 0; r < t.length; r++)
    fu(t[r], t[++r], t[++r]);
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
function XO(e, n, t, r, o, i, s, a, u) {
  var _, l, c, f = t.props, T = n.props, d = n.type, h = 0;
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
    if (i = i && mu.call(e.childNodes), l = (f = t.props || ai).dangerouslySetInnerHTML, c = T.dangerouslySetInnerHTML, !a) {
      if (i != null)
        for (f = {}, h = 0; h < e.attributes.length; h++)
          f[e.attributes[h].name] = e.attributes[h].value;
      (c || l) && (c && (l && c.__html == l.__html || c.__html === e.innerHTML) || (e.innerHTML = c && c.__html || ""));
    }
    if (VO(e, T, f, o, a), c)
      n.__k = [];
    else if (Md(e, _s(h = n.props.children) ? h : [h], n, t, r, o && d !== "foreignObject", i, s, i ? i[0] : t.__k && yi(t, 0), a, u), i != null)
      for (h = i.length; h--; )
        i[h] != null && Pd(i[h]);
    a || ("value" in T && (h = T.value) !== void 0 && (h !== e.value || d === "progress" && !h || d === "option" && h !== f.value) && wi(e, "value", h, f.value, !1), "checked" in T && (h = T.checked) !== void 0 && h !== e.checked && wi(e, "checked", h, f.checked, !1));
  }
  return e;
}
function fu(e, n, t) {
  try {
    typeof e == "function" ? e(n) : e.current = n;
  } catch (r) {
    F.__e(r, t);
  }
}
function Bd(e, n, t) {
  var r, o;
  if (F.unmount && F.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || fu(r, null, n)), (r = e.__c) != null) {
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
      r[o] && Bd(r[o], n, t || typeof e.type != "function");
  t || e.__e == null || Pd(e.__e), e.__ = e.__e = e.__d = void 0;
}
function YO(e, n, t) {
  return this.constructor(e, t);
}
mu = Hd.slice, F = { __e: function(e, n, t, r) {
  for (var o, i, s; n = n.__; )
    if ((o = n.__c) && !o.__)
      try {
        if ((i = o.constructor) && i.getDerivedStateFromError != null && (o.setState(i.getDerivedStateFromError(e)), s = o.__d), o.componentDidCatch != null && (o.componentDidCatch(e, r || {}), s = o.__d), s)
          return o.__E = o;
      } catch (a) {
        e = a;
      }
  throw e;
} }, Ud = 0, Kn.prototype.setState = function(e, n) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = at({}, this.state), typeof e == "function" && (e = e(at({}, t), this.props)), e && at(t, e), e != null && this.__v && (n && this._sb.push(n), F_(this));
}, Kn.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), F_(this));
}, Kn.prototype.render = Qr, At = [], yd = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, ga = function(e, n) {
  return e.__v.__b - n.__v.__b;
}, Hi.__r = 0;
var Zr, be, Ks, Y_, Na = 0, jd = [], _i = [], K_ = F.__b, $_ = F.__r, z_ = F.diffed, J_ = F.__c, q_ = F.unmount;
function pu(e, n) {
  F.__h && F.__h(be, e, Na || n), Na = 0;
  var t = be.__H || (be.__H = { __: [], __h: [] });
  return e >= t.__.length && t.__.push({ __V: _i }), t.__[e];
}
function KO(e) {
  return Na = 1, $O(Fd, e);
}
function $O(e, n, t) {
  var r = pu(Zr++, 2);
  if (r.t = e, !r.__c && (r.__ = [t ? t(n) : Fd(void 0, n), function(a) {
    var u = r.__N ? r.__N[0] : r.__[0], _ = r.t(u, a);
    u !== _ && (r.__N = [_, r.__[1]], r.__c.setState({}));
  }], r.__c = be, !be.u)) {
    var o = function(a, u, _) {
      if (!r.__c.__H)
        return !0;
      var l = r.__c.__H.__.filter(function(f) {
        return f.__c;
      });
      if (l.every(function(f) {
        return !f.__N;
      }))
        return !i || i.call(this, a, u, _);
      var c = !1;
      return l.forEach(function(f) {
        if (f.__N) {
          var T = f.__[0];
          f.__ = f.__N, f.__N = void 0, T !== f.__[0] && (c = !0);
        }
      }), !(!c && r.__c.props === a) && (!i || i.call(this, a, u, _));
    };
    be.u = !0;
    var i = be.shouldComponentUpdate, s = be.componentWillUpdate;
    be.componentWillUpdate = function(a, u, _) {
      if (this.__e) {
        var l = i;
        i = void 0, o(a, u, _), i = l;
      }
      s && s.call(this, a, u, _);
    }, be.shouldComponentUpdate = o;
  }
  return r.__N || r.__;
}
function NS(e, n) {
  var t = pu(Zr++, 3);
  !F.__s && qO(t.__H, n) && (t.__ = e, t.i = n, be.__H.__h.push(t));
}
function bS(e) {
  var n = pu(Zr++, 10), t = KO();
  return n.__ = e, be.componentDidCatch || (be.componentDidCatch = function(r, o) {
    n.__ && n.__(r, o), t[1](r);
  }), [t[0], function() {
    t[1](void 0);
  }];
}
function zO() {
  for (var e; e = jd.shift(); )
    if (e.__P && e.__H)
      try {
        e.__H.__h.forEach(ci), e.__H.__h.forEach(ba), e.__H.__h = [];
      } catch (n) {
        e.__H.__h = [], F.__e(n, e.__v);
      }
}
F.__b = function(e) {
  be = null, K_ && K_(e);
}, F.__r = function(e) {
  $_ && $_(e), Zr = 0;
  var n = (be = e.__c).__H;
  n && (Ks === be ? (n.__h = [], be.__h = [], n.__.forEach(function(t) {
    t.__N && (t.__ = t.__N), t.__V = _i, t.__N = t.i = void 0;
  })) : (n.__h.forEach(ci), n.__h.forEach(ba), n.__h = [], Zr = 0)), Ks = be;
}, F.diffed = function(e) {
  z_ && z_(e);
  var n = e.__c;
  n && n.__H && (n.__H.__h.length && (jd.push(n) !== 1 && Y_ === F.requestAnimationFrame || ((Y_ = F.requestAnimationFrame) || JO)(zO)), n.__H.__.forEach(function(t) {
    t.i && (t.__H = t.i), t.__V !== _i && (t.__ = t.__V), t.i = void 0, t.__V = _i;
  })), Ks = be = null;
}, F.__c = function(e, n) {
  n.some(function(t) {
    try {
      t.__h.forEach(ci), t.__h = t.__h.filter(function(r) {
        return !r.__ || ba(r);
      });
    } catch (r) {
      n.some(function(o) {
        o.__h && (o.__h = []);
      }), n = [], F.__e(r, t.__v);
    }
  }), J_ && J_(e, n);
}, F.unmount = function(e) {
  q_ && q_(e);
  var n, t = e.__c;
  t && t.__H && (t.__H.__.forEach(function(r) {
    try {
      ci(r);
    } catch (o) {
      n = o;
    }
  }), t.__H = void 0, n && F.__e(n, t.__v));
};
var Q_ = typeof requestAnimationFrame == "function";
function JO(e) {
  var n, t = function() {
    clearTimeout(r), Q_ && cancelAnimationFrame(n), setTimeout(e);
  }, r = setTimeout(t, 100);
  Q_ && (n = requestAnimationFrame(t));
}
function ci(e) {
  var n = be, t = e.__c;
  typeof t == "function" && (e.__c = void 0, t()), be = n;
}
function ba(e) {
  var n = be;
  e.__c = e.__(), be = n;
}
function qO(e, n) {
  return !e || e.length !== n.length || n.some(function(t, r) {
    return t !== e[r];
  });
}
function Fd(e, n) {
  return typeof n == "function" ? n(e) : n;
}
const Vd = zi(
  {}
), IS = ({ children: e }) => {
  const [n, t] = Jm.useMessage(), r = ({ type: o, message: i }) => {
    n.open({
      type: o ?? "info",
      content: i,
      duration: 5
    });
  };
  return /* @__PURE__ */ _n(Zc, { children: [
    t,
    /* @__PURE__ */ V(Vd.Provider, { value: { open: r }, children: e })
  ] });
}, QO = () => Qe(Vd), ZO = (e) => typeof e == "object" && e !== null, Wd = (e) => typeof e == "string", eR = (e) => typeof e == "function";
class Xd {
  constructor(n) {
    this.isDisabled = !1, this.isDisabled = n ?? this.isDisabled;
  }
  get(n, t) {
    if (this.isDisabled)
      return t;
    const r = localStorage.getItem(n);
    return r ? nR(r) ? JSON.parse(r) : r : t;
  }
  set(n, t) {
    if (!(this.isDisabled || !(n in MO))) {
      if (Wd(t))
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
const nR = (e) => {
  try {
    JSON.parse(e);
  } catch {
    return !1;
  }
  return !0;
};
var Yd = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, Z_ = Ae.createContext && Ae.createContext(Yd), mt = globalThis && globalThis.__assign || function() {
  return mt = Object.assign || function(e) {
    for (var n, t = 1, r = arguments.length; t < r; t++) {
      n = arguments[t];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
    }
    return e;
  }, mt.apply(this, arguments);
}, tR = globalThis && globalThis.__rest || function(e, n) {
  var t = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (t[r[o]] = e[r[o]]);
  return t;
};
function Kd(e) {
  return e && e.map(function(n, t) {
    return Ae.createElement(n.tag, mt({
      key: t
    }, n.attr), Kd(n.child));
  });
}
function Tu(e) {
  return function(n) {
    return Ae.createElement(rR, mt({
      attr: mt({}, e.attr)
    }, n), Kd(e.child));
  };
}
function rR(e) {
  var n = function(t) {
    var r = e.attr, o = e.size, i = e.title, s = tR(e, ["attr", "size", "title"]), a = o || t.size || "1em", u;
    return t.className && (u = t.className), e.className && (u = (u ? u + " " : "") + e.className), Ae.createElement("svg", mt({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, t.attr, r, s, {
      className: u,
      style: mt(mt({
        color: e.color || t.color
      }, t.style), e.style),
      height: a,
      width: a,
      xmlns: "http://www.w3.org/2000/svg"
    }), i && Ae.createElement("title", null, i), e.children);
  };
  return Z_ !== void 0 ? Ae.createElement(Z_.Consumer, null, function(t) {
    return n(t);
  }) : n(Yd);
}
function oR(e) {
  return Tu({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" } }] })(e);
}
function AS(e) {
  return Tu({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M145 96l66 746.6L511.8 928l299.6-85.4L878.7 96H145zm610.9 700.6l-244.1 69.6-245.2-69.6-56.7-641.2h603.8l-57.8 641.2zM281 249l1.7 24.3 22.7 253.5h206.5v-.1h112.9l-11.4 118.5L511 672.9v.2h-.8l-102.4-27.7-6.5-73.2h-91l11.3 144.7 188.6 52h1.7v-.4l187.7-51.7 1.7-16.3 21.2-242.2 3.2-24.3H511v.2H389.9l-8.2-94.2h352.1l1.7-19.5 4.8-47.2L742 249H511z" } }] })(e);
}
function iR(e) {
  return Tu({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", stroke: "#000", strokeWidth: "2", d: "M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M5,5 L19,19" } }] })(e);
}
const sR = ({ children: e, override: n, ...t }) => /* @__PURE__ */ V(qm, { theme: {
  token: { colorPrimary: n }
}, children: /* @__PURE__ */ V(yr, { ...t, children: e }) });
function aR(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var $d = { exports: {} }, de = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ec;
function uR() {
  if (ec)
    return de;
  ec = 1;
  var e = Symbol.for("react.element"), n = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), a = Symbol.for("react.server_context"), u = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), T = Symbol.for("react.offscreen"), d;
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
            case l:
              return m;
            default:
              switch (m = m && m.$$typeof, m) {
                case a:
                case s:
                case u:
                case f:
                case c:
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
  return de.ContextConsumer = s, de.ContextProvider = i, de.Element = e, de.ForwardRef = u, de.Fragment = t, de.Lazy = f, de.Memo = c, de.Portal = n, de.Profiler = o, de.StrictMode = r, de.Suspense = _, de.SuspenseList = l, de.isAsyncMode = function() {
    return !1;
  }, de.isConcurrentMode = function() {
    return !1;
  }, de.isContextConsumer = function(m) {
    return h(m) === s;
  }, de.isContextProvider = function(m) {
    return h(m) === i;
  }, de.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === e;
  }, de.isForwardRef = function(m) {
    return h(m) === u;
  }, de.isFragment = function(m) {
    return h(m) === t;
  }, de.isLazy = function(m) {
    return h(m) === f;
  }, de.isMemo = function(m) {
    return h(m) === c;
  }, de.isPortal = function(m) {
    return h(m) === n;
  }, de.isProfiler = function(m) {
    return h(m) === o;
  }, de.isStrictMode = function(m) {
    return h(m) === r;
  }, de.isSuspense = function(m) {
    return h(m) === _;
  }, de.isSuspenseList = function(m) {
    return h(m) === l;
  }, de.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === t || m === o || m === r || m === _ || m === l || m === T || typeof m == "object" && m !== null && (m.$$typeof === f || m.$$typeof === c || m.$$typeof === i || m.$$typeof === s || m.$$typeof === u || m.$$typeof === d || m.getModuleId !== void 0);
  }, de.typeOf = h, de;
}
$d.exports = uR();
var zd = $d.exports;
function _R(e) {
  function n(C, U, P, j, E) {
    for (var J = 0, S = 0, ce = 0, ne = 0, me, $, Pe = 0, Xe = 0, oe, Le = oe = me = 0, le = 0, we = 0, Nr = 0, Me = 0, xo = P.length, br = xo - 1, fn, Y = "", Se = "", Ps = "", ws = "", nt; le < xo; ) {
      if ($ = P.charCodeAt(le), le === br && S + ne + ce + J !== 0 && (S !== 0 && ($ = S === 47 ? 10 : 47), ne = ce = J = 0, xo++, br++), S + ne + ce + J === 0) {
        if (le === br && (0 < we && (Y = Y.replace(f, "")), 0 < Y.trim().length)) {
          switch ($) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              Y += P.charAt(le);
          }
          $ = 59;
        }
        switch ($) {
          case 123:
            for (Y = Y.trim(), me = Y.charCodeAt(0), oe = 1, Me = ++le; le < xo; ) {
              switch ($ = P.charCodeAt(le)) {
                case 123:
                  oe++;
                  break;
                case 125:
                  oe--;
                  break;
                case 47:
                  switch ($ = P.charCodeAt(le + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (Le = le + 1; Le < br; ++Le)
                          switch (P.charCodeAt(Le)) {
                            case 47:
                              if ($ === 42 && P.charCodeAt(Le - 1) === 42 && le + 2 !== Le) {
                                le = Le + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if ($ === 47) {
                                le = Le + 1;
                                break e;
                              }
                          }
                        le = Le;
                      }
                  }
                  break;
                case 91:
                  $++;
                case 40:
                  $++;
                case 34:
                case 39:
                  for (; le++ < br && P.charCodeAt(le) !== $; )
                    ;
              }
              if (oe === 0)
                break;
              le++;
            }
            switch (oe = P.substring(Me, le), me === 0 && (me = (Y = Y.replace(c, "").trim()).charCodeAt(0)), me) {
              case 64:
                switch (0 < we && (Y = Y.replace(f, "")), $ = Y.charCodeAt(1), $) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    we = U;
                    break;
                  default:
                    we = q;
                }
                if (oe = n(U, we, oe, $, E + 1), Me = oe.length, 0 < ee && (we = t(q, Y, Nr), nt = a(3, oe, we, U, ge, fe, Me, $, E, j), Y = we.join(""), nt !== void 0 && (Me = (oe = nt.trim()).length) === 0 && ($ = 0, oe = "")), 0 < Me)
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
                oe = n(U, t(U, Y, Nr), oe, j, E + 1);
            }
            Ps += oe, oe = Nr = we = Le = me = 0, Y = "", $ = P.charCodeAt(++le);
            break;
          case 125:
          case 59:
            if (Y = (0 < we ? Y.replace(f, "") : Y).trim(), 1 < (Me = Y.length))
              switch (Le === 0 && (me = Y.charCodeAt(0), me === 45 || 96 < me && 123 > me) && (Me = (Y = Y.replace(" ", ":")).length), 0 < ee && (nt = a(1, Y, U, C, ge, fe, Se.length, j, E, j)) !== void 0 && (Me = (Y = nt.trim()).length) === 0 && (Y = "\0\0"), me = Y.charCodeAt(0), $ = Y.charCodeAt(1), me) {
                case 0:
                  break;
                case 64:
                  if ($ === 105 || $ === 99) {
                    ws += Y + P.charAt(le);
                    break;
                  }
                default:
                  Y.charCodeAt(Me - 1) !== 58 && (Se += o(Y, me, $, Y.charCodeAt(2)));
              }
            Nr = we = Le = me = 0, Y = "", $ = P.charCodeAt(++le);
        }
      }
      switch ($) {
        case 13:
        case 10:
          S === 47 ? S = 0 : 1 + me === 0 && j !== 107 && 0 < Y.length && (we = 1, Y += "\0"), 0 < ee * He && a(0, Y, U, C, ge, fe, Se.length, j, E, j), fe = 1, ge++;
          break;
        case 59:
        case 125:
          if (S + ne + ce + J === 0) {
            fe++;
            break;
          }
        default:
          switch (fe++, fn = P.charAt(le), $) {
            case 9:
            case 32:
              if (ne + J + S === 0)
                switch (Pe) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    fn = "";
                    break;
                  default:
                    $ !== 32 && (fn = " ");
                }
              break;
            case 0:
              fn = "\\0";
              break;
            case 12:
              fn = "\\f";
              break;
            case 11:
              fn = "\\v";
              break;
            case 38:
              ne + S + J === 0 && (we = Nr = 1, fn = "\f" + fn);
              break;
            case 108:
              if (ne + S + J + k === 0 && 0 < Le)
                switch (le - Le) {
                  case 2:
                    Pe === 112 && P.charCodeAt(le - 3) === 58 && (k = Pe);
                  case 8:
                    Xe === 111 && (k = Xe);
                }
              break;
            case 58:
              ne + S + J === 0 && (Le = le);
              break;
            case 44:
              S + ce + ne + J === 0 && (we = 1, fn += "\r");
              break;
            case 34:
            case 39:
              S === 0 && (ne = ne === $ ? 0 : ne === 0 ? $ : ne);
              break;
            case 91:
              ne + S + ce === 0 && J++;
              break;
            case 93:
              ne + S + ce === 0 && J--;
              break;
            case 41:
              ne + S + J === 0 && ce--;
              break;
            case 40:
              if (ne + S + J === 0) {
                if (me === 0)
                  switch (2 * Pe + 3 * Xe) {
                    case 533:
                      break;
                    default:
                      me = 1;
                  }
                ce++;
              }
              break;
            case 64:
              S + ce + ne + J + Le + oe === 0 && (oe = 1);
              break;
            case 42:
            case 47:
              if (!(0 < ne + J + ce))
                switch (S) {
                  case 0:
                    switch (2 * $ + 3 * P.charCodeAt(le + 1)) {
                      case 235:
                        S = 47;
                        break;
                      case 220:
                        Me = le, S = 42;
                    }
                    break;
                  case 42:
                    $ === 47 && Pe === 42 && Me + 2 !== le && (P.charCodeAt(Me + 2) === 33 && (Se += P.substring(Me, le + 1)), fn = "", S = 0);
                }
          }
          S === 0 && (Y += fn);
      }
      Xe = Pe, Pe = $, le++;
    }
    if (Me = Se.length, 0 < Me) {
      if (we = U, 0 < ee && (nt = a(2, Se, we, C, ge, fe, Me, j, E, j), nt !== void 0 && (Se = nt).length === 0))
        return ws + Se + Ps;
      if (Se = we.join(",") + "{" + Se + "}", G * k !== 0) {
        switch (G !== 2 || i(Se, 2) || (k = 0), k) {
          case 111:
            Se = Se.replace(I, ":-moz-$1") + Se;
            break;
          case 112:
            Se = Se.replace(N, "::-webkit-input-$1") + Se.replace(N, "::-moz-$1") + Se.replace(N, ":-ms-input-$1") + Se;
        }
        k = 0;
      }
    }
    return ws + Se + Ps;
  }
  function t(C, U, P) {
    var j = U.trim().split(m);
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
        var ce = S = 0;
        for (U = []; S < E; ++S)
          for (var ne = 0; ne < J; ++ne)
            U[ce++] = r(C[ne] + " ", j[S], P).trim();
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
          return E.substring(0, E.indexOf(";", 27) + 1).replace(h, "$1-webkit-$2") + E;
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
  function a(C, U, P, j, E, J, S, ce, ne, me) {
    for (var $ = 0, Pe = U, Xe; $ < ee; ++$)
      switch (Xe = _e[$].call(l, C, Pe, P, j, E, J, S, ce, ne, me)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          Pe = Xe;
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
  function l(C, U) {
    var P = C;
    if (33 > P.charCodeAt(0) && (P = P.trim()), Ne = P, P = [Ne], 0 < ee) {
      var j = a(-1, U, P, P, ge, fe, 0, 0, 0, 0);
      j !== void 0 && typeof j == "string" && (U = j);
    }
    var E = n(q, P, U, 0, 0);
    return 0 < ee && (j = a(-2, E, P, P, ge, fe, E.length, 0, 0, 0), j !== void 0 && (E = j)), Ne = "", k = 0, fe = ge = 1, E;
  }
  var c = /^\0+/g, f = /[\0\r\f]/g, T = /: */g, d = /zoo|gra/, h = /([,: ])(transform)/g, m = /,\r+?/g, O = /([\t\r\n ])*\f?&/g, R = /@(k\w+)\s*(\S*)\s*/, N = /::(place)/g, I = /:(read-only)/g, p = /[svh]\w+-[tblr]{2}/, H = /\(\s*(.*)\s*\)/g, M = /([\s\S]*?);/g, K = /-self|flex-/g, w = /[^]*?(:[rp][el]a[\w-]+)[^]*/, B = /stretch|:\s*\w+\-(?:conte|avail)/, Te = /([^-])(image-set\()/, fe = 1, ge = 1, k = 0, G = 1, q = [], _e = [], ee = 0, Ie = null, He = 0, Ne = "";
  return l.use = u, l.set = _, e !== void 0 && _(e), l;
}
var cR = {
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
function lR(e) {
  var n = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return n[t] === void 0 && (n[t] = e(t)), n[t];
  };
}
var dR = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, nc = /* @__PURE__ */ lR(
  function(e) {
    return dR.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Jd = { exports: {} }, he = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tc;
function hR() {
  if (tc)
    return he;
  tc = 1;
  var e = typeof Symbol == "function" && Symbol.for, n = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, _ = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, c = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, T = e ? Symbol.for("react.memo") : 60115, d = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, O = e ? Symbol.for("react.responder") : 60118, R = e ? Symbol.for("react.scope") : 60119;
  function N(p) {
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
            case c:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case a:
                case l:
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
    return N(p) === _;
  }
  return he.AsyncMode = u, he.ConcurrentMode = _, he.ContextConsumer = a, he.ContextProvider = s, he.Element = n, he.ForwardRef = l, he.Fragment = r, he.Lazy = d, he.Memo = T, he.Portal = t, he.Profiler = i, he.StrictMode = o, he.Suspense = c, he.isAsyncMode = function(p) {
    return I(p) || N(p) === u;
  }, he.isConcurrentMode = I, he.isContextConsumer = function(p) {
    return N(p) === a;
  }, he.isContextProvider = function(p) {
    return N(p) === s;
  }, he.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === n;
  }, he.isForwardRef = function(p) {
    return N(p) === l;
  }, he.isFragment = function(p) {
    return N(p) === r;
  }, he.isLazy = function(p) {
    return N(p) === d;
  }, he.isMemo = function(p) {
    return N(p) === T;
  }, he.isPortal = function(p) {
    return N(p) === t;
  }, he.isProfiler = function(p) {
    return N(p) === i;
  }, he.isStrictMode = function(p) {
    return N(p) === o;
  }, he.isSuspense = function(p) {
    return N(p) === c;
  }, he.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === r || p === _ || p === i || p === o || p === c || p === f || typeof p == "object" && p !== null && (p.$$typeof === d || p.$$typeof === T || p.$$typeof === s || p.$$typeof === a || p.$$typeof === l || p.$$typeof === m || p.$$typeof === O || p.$$typeof === R || p.$$typeof === h);
  }, he.typeOf = N, he;
}
Jd.exports = hR();
var mR = Jd.exports, Eu = mR, fR = {
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
}, qd = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Ou = {};
Ou[Eu.ForwardRef] = TR;
Ou[Eu.Memo] = qd;
function rc(e) {
  return Eu.isMemo(e) ? qd : Ou[e.$$typeof] || fR;
}
var ER = Object.defineProperty, OR = Object.getOwnPropertyNames, oc = Object.getOwnPropertySymbols, RR = Object.getOwnPropertyDescriptor, gR = Object.getPrototypeOf, ic = Object.prototype;
function Qd(e, n, t) {
  if (typeof n != "string") {
    if (ic) {
      var r = gR(n);
      r && r !== ic && Qd(e, r, t);
    }
    var o = OR(n);
    oc && (o = o.concat(oc(n)));
    for (var i = rc(e), s = rc(n), a = 0; a < o.length; ++a) {
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
var NR = Qd;
const bR = /* @__PURE__ */ aR(NR);
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
var sc = function(e, n) {
  for (var t = [e[0]], r = 0, o = n.length; r < o; r += 1)
    t.push(n[r], e[r + 1]);
  return t;
}, Ia = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !zd.typeOf(e);
}, Mi = Object.freeze([]), ft = Object.freeze({});
function eo(e) {
  return typeof e == "function";
}
function ac(e) {
  return e.displayName || e.name || "Component";
}
function Ru(e) {
  return e && typeof e.styledComponentId == "string";
}
var ar = typeof process < "u" && ({ GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_d89c3ac0-3f7c-4722-84d9-0ca2c269f4c9", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "npm/8.19.4 node/v16.20.1 linux x64 workspaces/false ci/github-actions", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_d89c3ac0-3f7c-4722-84d9-0ca2c269f4c9", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", npm_config_noproxy: "", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-8.2.1", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "", npm_config_userconfig: "/home/runner/.npmrc", npm_config_local_prefix: "/home/runner/work/CodeGear/CodeGear", SYSTEMD_EXEC_PID: "665", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", COLOR: "0", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.6/x64", NVM_DIR: "/home/runner/.nvm", npm_config_metrics_registry: "https://registry.npmjs.org/", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230724.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", JOURNAL_STREAM: "8:16270", GITHUB_WORKFLOW: "CodeGear CI", _: "/opt/hostedtoolcache/node/16.20.1/x64/bin/npm", npm_config_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", GITHUB_RUN_ID: "5680608279", npm_config_cache: "/home/runner/.npm", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "4c5890c3ecc6b5070bc722166ce4b267a0a914ce", GITHUB_BASE_REF: "", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/heads/develop", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", npm_config_node_gyp: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.bin:/home/runner/work/CodeGear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_284c5184-0272-499c-8f78-86c1219f8b37", INVOCATION_ID: "5762ce3deb3b455c87727c76daf600a9", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.11/x64", NODE: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "26", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 3", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "develop", GITHUB_REPOSITORY: "Gearonix/CodeGear", npm_lifecycle_script: " nx run-many --targets=build --all", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", STATS_NM: "true", npm_package_version: "0.0.0", npm_lifecycle_event: "build", NODE_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/bin/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/node_modules", GITHUB_REF_PROTECTED: "false", npm_config_strict_peer_dependencies: "", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "4c5890c3ecc6b5070bc722166ce4b267a0a914ce", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/heads/develop", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", npm_config_globalconfig: "/opt/hostedtoolcache/node/16.20.1/x64/etc/npmrc", npm_config_init_module: "/home/runner/.npm-init.js", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_d89c3ac0-3f7c-4722-84d9-0ca2c269f4c9", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", npm_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/bin/npm-cli.js", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "push", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_d89c3ac0-3f7c-4722-84d9-0ca2c269f4c9", npm_config_global_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", npm_command: "run-script", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_d89c3ac0-3f7c-4722-84d9-0ca2c269f4c9", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", EDITOR: "vi", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/12141517249162447167", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "12141517249162447167", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.REACT_APP_SC_ATTR || { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_d89c3ac0-3f7c-4722-84d9-0ca2c269f4c9", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "npm/8.19.4 node/v16.20.1 linux x64 workspaces/false ci/github-actions", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_d89c3ac0-3f7c-4722-84d9-0ca2c269f4c9", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", npm_config_noproxy: "", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-8.2.1", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "", npm_config_userconfig: "/home/runner/.npmrc", npm_config_local_prefix: "/home/runner/work/CodeGear/CodeGear", SYSTEMD_EXEC_PID: "665", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", COLOR: "0", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.6/x64", NVM_DIR: "/home/runner/.nvm", npm_config_metrics_registry: "https://registry.npmjs.org/", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230724.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", JOURNAL_STREAM: "8:16270", GITHUB_WORKFLOW: "CodeGear CI", _: "/opt/hostedtoolcache/node/16.20.1/x64/bin/npm", npm_config_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", GITHUB_RUN_ID: "5680608279", npm_config_cache: "/home/runner/.npm", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "4c5890c3ecc6b5070bc722166ce4b267a0a914ce", GITHUB_BASE_REF: "", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/heads/develop", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", npm_config_node_gyp: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.bin:/home/runner/work/CodeGear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_284c5184-0272-499c-8f78-86c1219f8b37", INVOCATION_ID: "5762ce3deb3b455c87727c76daf600a9", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.11/x64", NODE: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "26", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 3", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "develop", GITHUB_REPOSITORY: "Gearonix/CodeGear", npm_lifecycle_script: " nx run-many --targets=build --all", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", STATS_NM: "true", npm_package_version: "0.0.0", npm_lifecycle_event: "build", NODE_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/bin/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/node_modules", GITHUB_REF_PROTECTED: "false", npm_config_strict_peer_dependencies: "", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "4c5890c3ecc6b5070bc722166ce4b267a0a914ce", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/heads/develop", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", npm_config_globalconfig: "/opt/hostedtoolcache/node/16.20.1/x64/etc/npmrc", npm_config_init_module: "/home/runner/.npm-init.js", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_d89c3ac0-3f7c-4722-84d9-0ca2c269f4c9", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", npm_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/bin/npm-cli.js", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "push", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_d89c3ac0-3f7c-4722-84d9-0ca2c269f4c9", npm_config_global_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", npm_command: "run-script", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_d89c3ac0-3f7c-4722-84d9-0ca2c269f4c9", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", EDITOR: "vi", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/12141517249162447167", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "12141517249162447167", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.SC_ATTR) || "data-styled", gu = typeof window < "u" && "HTMLElement" in window, IR = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_d89c3ac0-3f7c-4722-84d9-0ca2c269f4c9", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "npm/8.19.4 node/v16.20.1 linux x64 workspaces/false ci/github-actions", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_d89c3ac0-3f7c-4722-84d9-0ca2c269f4c9", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", npm_config_noproxy: "", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-8.2.1", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "", npm_config_userconfig: "/home/runner/.npmrc", npm_config_local_prefix: "/home/runner/work/CodeGear/CodeGear", SYSTEMD_EXEC_PID: "665", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", COLOR: "0", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.6/x64", NVM_DIR: "/home/runner/.nvm", npm_config_metrics_registry: "https://registry.npmjs.org/", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230724.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", JOURNAL_STREAM: "8:16270", GITHUB_WORKFLOW: "CodeGear CI", _: "/opt/hostedtoolcache/node/16.20.1/x64/bin/npm", npm_config_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", GITHUB_RUN_ID: "5680608279", npm_config_cache: "/home/runner/.npm", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "4c5890c3ecc6b5070bc722166ce4b267a0a914ce", GITHUB_BASE_REF: "", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/heads/develop", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", npm_config_node_gyp: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.bin:/home/runner/work/CodeGear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_284c5184-0272-499c-8f78-86c1219f8b37", INVOCATION_ID: "5762ce3deb3b455c87727c76daf600a9", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.11/x64", NODE: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "26", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 3", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "develop", GITHUB_REPOSITORY: "Gearonix/CodeGear", npm_lifecycle_script: " nx run-many --targets=build --all", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", STATS_NM: "true", npm_package_version: "0.0.0", npm_lifecycle_event: "build", NODE_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/bin/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/node_modules", GITHUB_REF_PROTECTED: "false", npm_config_strict_peer_dependencies: "", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "4c5890c3ecc6b5070bc722166ce4b267a0a914ce", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/heads/develop", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", npm_config_globalconfig: "/opt/hostedtoolcache/node/16.20.1/x64/etc/npmrc", npm_config_init_module: "/home/runner/.npm-init.js", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_d89c3ac0-3f7c-4722-84d9-0ca2c269f4c9", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", npm_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/bin/npm-cli.js", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "push", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_d89c3ac0-3f7c-4722-84d9-0ca2c269f4c9", npm_config_global_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", npm_command: "run-script", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_d89c3ac0-3f7c-4722-84d9-0ca2c269f4c9", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", EDITOR: "vi", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/12141517249162447167", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "12141517249162447167", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_d89c3ac0-3f7c-4722-84d9-0ca2c269f4c9", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "npm/8.19.4 node/v16.20.1 linux x64 workspaces/false ci/github-actions", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_d89c3ac0-3f7c-4722-84d9-0ca2c269f4c9", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", npm_config_noproxy: "", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-8.2.1", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "", npm_config_userconfig: "/home/runner/.npmrc", npm_config_local_prefix: "/home/runner/work/CodeGear/CodeGear", SYSTEMD_EXEC_PID: "665", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", COLOR: "0", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.6/x64", NVM_DIR: "/home/runner/.nvm", npm_config_metrics_registry: "https://registry.npmjs.org/", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230724.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", JOURNAL_STREAM: "8:16270", GITHUB_WORKFLOW: "CodeGear CI", _: "/opt/hostedtoolcache/node/16.20.1/x64/bin/npm", npm_config_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", GITHUB_RUN_ID: "5680608279", npm_config_cache: "/home/runner/.npm", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "4c5890c3ecc6b5070bc722166ce4b267a0a914ce", GITHUB_BASE_REF: "", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/heads/develop", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", npm_config_node_gyp: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.bin:/home/runner/work/CodeGear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_284c5184-0272-499c-8f78-86c1219f8b37", INVOCATION_ID: "5762ce3deb3b455c87727c76daf600a9", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.11/x64", NODE: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "26", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 3", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "develop", GITHUB_REPOSITORY: "Gearonix/CodeGear", npm_lifecycle_script: " nx run-many --targets=build --all", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", STATS_NM: "true", npm_package_version: "0.0.0", npm_lifecycle_event: "build", NODE_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/bin/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/node_modules", GITHUB_REF_PROTECTED: "false", npm_config_strict_peer_dependencies: "", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "4c5890c3ecc6b5070bc722166ce4b267a0a914ce", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/heads/develop", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", npm_config_globalconfig: "/opt/hostedtoolcache/node/16.20.1/x64/etc/npmrc", npm_config_init_module: "/home/runner/.npm-init.js", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_d89c3ac0-3f7c-4722-84d9-0ca2c269f4c9", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", npm_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/bin/npm-cli.js", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "push", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_d89c3ac0-3f7c-4722-84d9-0ca2c269f4c9", npm_config_global_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", npm_command: "run-script", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_d89c3ac0-3f7c-4722-84d9-0ca2c269f4c9", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", EDITOR: "vi", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/12141517249162447167", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "12141517249162447167", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.REACT_APP_SC_DISABLE_SPEEDY !== "" ? { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_d89c3ac0-3f7c-4722-84d9-0ca2c269f4c9", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "npm/8.19.4 node/v16.20.1 linux x64 workspaces/false ci/github-actions", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_d89c3ac0-3f7c-4722-84d9-0ca2c269f4c9", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", npm_config_noproxy: "", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-8.2.1", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "", npm_config_userconfig: "/home/runner/.npmrc", npm_config_local_prefix: "/home/runner/work/CodeGear/CodeGear", SYSTEMD_EXEC_PID: "665", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", COLOR: "0", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.6/x64", NVM_DIR: "/home/runner/.nvm", npm_config_metrics_registry: "https://registry.npmjs.org/", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230724.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", JOURNAL_STREAM: "8:16270", GITHUB_WORKFLOW: "CodeGear CI", _: "/opt/hostedtoolcache/node/16.20.1/x64/bin/npm", npm_config_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", GITHUB_RUN_ID: "5680608279", npm_config_cache: "/home/runner/.npm", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "4c5890c3ecc6b5070bc722166ce4b267a0a914ce", GITHUB_BASE_REF: "", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/heads/develop", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", npm_config_node_gyp: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.bin:/home/runner/work/CodeGear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_284c5184-0272-499c-8f78-86c1219f8b37", INVOCATION_ID: "5762ce3deb3b455c87727c76daf600a9", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.11/x64", NODE: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "26", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 3", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "develop", GITHUB_REPOSITORY: "Gearonix/CodeGear", npm_lifecycle_script: " nx run-many --targets=build --all", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", STATS_NM: "true", npm_package_version: "0.0.0", npm_lifecycle_event: "build", NODE_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/bin/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/node_modules", GITHUB_REF_PROTECTED: "false", npm_config_strict_peer_dependencies: "", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "4c5890c3ecc6b5070bc722166ce4b267a0a914ce", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/heads/develop", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", npm_config_globalconfig: "/opt/hostedtoolcache/node/16.20.1/x64/etc/npmrc", npm_config_init_module: "/home/runner/.npm-init.js", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_d89c3ac0-3f7c-4722-84d9-0ca2c269f4c9", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", npm_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/bin/npm-cli.js", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "push", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_d89c3ac0-3f7c-4722-84d9-0ca2c269f4c9", npm_config_global_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", npm_command: "run-script", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_d89c3ac0-3f7c-4722-84d9-0ca2c269f4c9", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", EDITOR: "vi", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/12141517249162447167", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "12141517249162447167", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.REACT_APP_SC_DISABLE_SPEEDY !== "false" && { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_d89c3ac0-3f7c-4722-84d9-0ca2c269f4c9", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "npm/8.19.4 node/v16.20.1 linux x64 workspaces/false ci/github-actions", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_d89c3ac0-3f7c-4722-84d9-0ca2c269f4c9", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", npm_config_noproxy: "", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-8.2.1", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "", npm_config_userconfig: "/home/runner/.npmrc", npm_config_local_prefix: "/home/runner/work/CodeGear/CodeGear", SYSTEMD_EXEC_PID: "665", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", COLOR: "0", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.6/x64", NVM_DIR: "/home/runner/.nvm", npm_config_metrics_registry: "https://registry.npmjs.org/", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230724.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", JOURNAL_STREAM: "8:16270", GITHUB_WORKFLOW: "CodeGear CI", _: "/opt/hostedtoolcache/node/16.20.1/x64/bin/npm", npm_config_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", GITHUB_RUN_ID: "5680608279", npm_config_cache: "/home/runner/.npm", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "4c5890c3ecc6b5070bc722166ce4b267a0a914ce", GITHUB_BASE_REF: "", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/heads/develop", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", npm_config_node_gyp: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.bin:/home/runner/work/CodeGear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_284c5184-0272-499c-8f78-86c1219f8b37", INVOCATION_ID: "5762ce3deb3b455c87727c76daf600a9", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.11/x64", NODE: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "26", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 3", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "develop", GITHUB_REPOSITORY: "Gearonix/CodeGear", npm_lifecycle_script: " nx run-many --targets=build --all", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", STATS_NM: "true", npm_package_version: "0.0.0", npm_lifecycle_event: "build", NODE_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/bin/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/node_modules", GITHUB_REF_PROTECTED: "false", npm_config_strict_peer_dependencies: "", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "4c5890c3ecc6b5070bc722166ce4b267a0a914ce", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/heads/develop", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", npm_config_globalconfig: "/opt/hostedtoolcache/node/16.20.1/x64/etc/npmrc", npm_config_init_module: "/home/runner/.npm-init.js", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_d89c3ac0-3f7c-4722-84d9-0ca2c269f4c9", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", npm_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/bin/npm-cli.js", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "push", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_d89c3ac0-3f7c-4722-84d9-0ca2c269f4c9", npm_config_global_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", npm_command: "run-script", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_d89c3ac0-3f7c-4722-84d9-0ca2c269f4c9", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", EDITOR: "vi", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/12141517249162447167", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "12141517249162447167", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_d89c3ac0-3f7c-4722-84d9-0ca2c269f4c9", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "npm/8.19.4 node/v16.20.1 linux x64 workspaces/false ci/github-actions", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_d89c3ac0-3f7c-4722-84d9-0ca2c269f4c9", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", npm_config_noproxy: "", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-8.2.1", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "", npm_config_userconfig: "/home/runner/.npmrc", npm_config_local_prefix: "/home/runner/work/CodeGear/CodeGear", SYSTEMD_EXEC_PID: "665", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", COLOR: "0", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.6/x64", NVM_DIR: "/home/runner/.nvm", npm_config_metrics_registry: "https://registry.npmjs.org/", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230724.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", JOURNAL_STREAM: "8:16270", GITHUB_WORKFLOW: "CodeGear CI", _: "/opt/hostedtoolcache/node/16.20.1/x64/bin/npm", npm_config_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", GITHUB_RUN_ID: "5680608279", npm_config_cache: "/home/runner/.npm", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "4c5890c3ecc6b5070bc722166ce4b267a0a914ce", GITHUB_BASE_REF: "", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/heads/develop", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", npm_config_node_gyp: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.bin:/home/runner/work/CodeGear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_284c5184-0272-499c-8f78-86c1219f8b37", INVOCATION_ID: "5762ce3deb3b455c87727c76daf600a9", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.11/x64", NODE: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "26", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 3", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "develop", GITHUB_REPOSITORY: "Gearonix/CodeGear", npm_lifecycle_script: " nx run-many --targets=build --all", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", STATS_NM: "true", npm_package_version: "0.0.0", npm_lifecycle_event: "build", NODE_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/bin/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/node_modules", GITHUB_REF_PROTECTED: "false", npm_config_strict_peer_dependencies: "", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "4c5890c3ecc6b5070bc722166ce4b267a0a914ce", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/heads/develop", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", npm_config_globalconfig: "/opt/hostedtoolcache/node/16.20.1/x64/etc/npmrc", npm_config_init_module: "/home/runner/.npm-init.js", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_d89c3ac0-3f7c-4722-84d9-0ca2c269f4c9", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", npm_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/bin/npm-cli.js", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "push", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_d89c3ac0-3f7c-4722-84d9-0ca2c269f4c9", npm_config_global_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", npm_command: "run-script", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_d89c3ac0-3f7c-4722-84d9-0ca2c269f4c9", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", EDITOR: "vi", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/12141517249162447167", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "12141517249162447167", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.SC_DISABLE_SPEEDY !== void 0 && { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_d89c3ac0-3f7c-4722-84d9-0ca2c269f4c9", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "npm/8.19.4 node/v16.20.1 linux x64 workspaces/false ci/github-actions", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_d89c3ac0-3f7c-4722-84d9-0ca2c269f4c9", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", npm_config_noproxy: "", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-8.2.1", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "", npm_config_userconfig: "/home/runner/.npmrc", npm_config_local_prefix: "/home/runner/work/CodeGear/CodeGear", SYSTEMD_EXEC_PID: "665", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", COLOR: "0", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.6/x64", NVM_DIR: "/home/runner/.nvm", npm_config_metrics_registry: "https://registry.npmjs.org/", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230724.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", JOURNAL_STREAM: "8:16270", GITHUB_WORKFLOW: "CodeGear CI", _: "/opt/hostedtoolcache/node/16.20.1/x64/bin/npm", npm_config_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", GITHUB_RUN_ID: "5680608279", npm_config_cache: "/home/runner/.npm", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "4c5890c3ecc6b5070bc722166ce4b267a0a914ce", GITHUB_BASE_REF: "", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/heads/develop", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", npm_config_node_gyp: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.bin:/home/runner/work/CodeGear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_284c5184-0272-499c-8f78-86c1219f8b37", INVOCATION_ID: "5762ce3deb3b455c87727c76daf600a9", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.11/x64", NODE: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "26", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 3", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "develop", GITHUB_REPOSITORY: "Gearonix/CodeGear", npm_lifecycle_script: " nx run-many --targets=build --all", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", STATS_NM: "true", npm_package_version: "0.0.0", npm_lifecycle_event: "build", NODE_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/bin/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/node_modules", GITHUB_REF_PROTECTED: "false", npm_config_strict_peer_dependencies: "", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "4c5890c3ecc6b5070bc722166ce4b267a0a914ce", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/heads/develop", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", npm_config_globalconfig: "/opt/hostedtoolcache/node/16.20.1/x64/etc/npmrc", npm_config_init_module: "/home/runner/.npm-init.js", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_d89c3ac0-3f7c-4722-84d9-0ca2c269f4c9", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", npm_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/bin/npm-cli.js", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "push", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_d89c3ac0-3f7c-4722-84d9-0ca2c269f4c9", npm_config_global_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", npm_command: "run-script", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_d89c3ac0-3f7c-4722-84d9-0ca2c269f4c9", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", EDITOR: "vi", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/12141517249162447167", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "12141517249162447167", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.SC_DISABLE_SPEEDY !== "" && { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_d89c3ac0-3f7c-4722-84d9-0ca2c269f4c9", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "npm/8.19.4 node/v16.20.1 linux x64 workspaces/false ci/github-actions", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_d89c3ac0-3f7c-4722-84d9-0ca2c269f4c9", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", npm_config_noproxy: "", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-8.2.1", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "", npm_config_userconfig: "/home/runner/.npmrc", npm_config_local_prefix: "/home/runner/work/CodeGear/CodeGear", SYSTEMD_EXEC_PID: "665", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", COLOR: "0", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.6/x64", NVM_DIR: "/home/runner/.nvm", npm_config_metrics_registry: "https://registry.npmjs.org/", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230724.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", JOURNAL_STREAM: "8:16270", GITHUB_WORKFLOW: "CodeGear CI", _: "/opt/hostedtoolcache/node/16.20.1/x64/bin/npm", npm_config_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", GITHUB_RUN_ID: "5680608279", npm_config_cache: "/home/runner/.npm", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "4c5890c3ecc6b5070bc722166ce4b267a0a914ce", GITHUB_BASE_REF: "", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/heads/develop", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", npm_config_node_gyp: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.bin:/home/runner/work/CodeGear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_284c5184-0272-499c-8f78-86c1219f8b37", INVOCATION_ID: "5762ce3deb3b455c87727c76daf600a9", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.11/x64", NODE: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "26", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 3", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "develop", GITHUB_REPOSITORY: "Gearonix/CodeGear", npm_lifecycle_script: " nx run-many --targets=build --all", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", STATS_NM: "true", npm_package_version: "0.0.0", npm_lifecycle_event: "build", NODE_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/bin/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/node_modules", GITHUB_REF_PROTECTED: "false", npm_config_strict_peer_dependencies: "", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "4c5890c3ecc6b5070bc722166ce4b267a0a914ce", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/heads/develop", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", npm_config_globalconfig: "/opt/hostedtoolcache/node/16.20.1/x64/etc/npmrc", npm_config_init_module: "/home/runner/.npm-init.js", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_d89c3ac0-3f7c-4722-84d9-0ca2c269f4c9", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", npm_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/bin/npm-cli.js", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "push", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_d89c3ac0-3f7c-4722-84d9-0ca2c269f4c9", npm_config_global_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", npm_command: "run-script", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_d89c3ac0-3f7c-4722-84d9-0ca2c269f4c9", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", EDITOR: "vi", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/12141517249162447167", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "12141517249162447167", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.SC_DISABLE_SPEEDY !== "false" && { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_d89c3ac0-3f7c-4722-84d9-0ca2c269f4c9", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "npm/8.19.4 node/v16.20.1 linux x64 workspaces/false ci/github-actions", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_d89c3ac0-3f7c-4722-84d9-0ca2c269f4c9", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", npm_config_noproxy: "", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-8.2.1", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "", npm_config_userconfig: "/home/runner/.npmrc", npm_config_local_prefix: "/home/runner/work/CodeGear/CodeGear", SYSTEMD_EXEC_PID: "665", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", COLOR: "0", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.6/x64", NVM_DIR: "/home/runner/.nvm", npm_config_metrics_registry: "https://registry.npmjs.org/", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230724.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", JOURNAL_STREAM: "8:16270", GITHUB_WORKFLOW: "CodeGear CI", _: "/opt/hostedtoolcache/node/16.20.1/x64/bin/npm", npm_config_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", GITHUB_RUN_ID: "5680608279", npm_config_cache: "/home/runner/.npm", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "4c5890c3ecc6b5070bc722166ce4b267a0a914ce", GITHUB_BASE_REF: "", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/heads/develop", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", npm_config_node_gyp: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.bin:/home/runner/work/CodeGear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_284c5184-0272-499c-8f78-86c1219f8b37", INVOCATION_ID: "5762ce3deb3b455c87727c76daf600a9", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.11/x64", NODE: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "26", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 3", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "develop", GITHUB_REPOSITORY: "Gearonix/CodeGear", npm_lifecycle_script: " nx run-many --targets=build --all", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", STATS_NM: "true", npm_package_version: "0.0.0", npm_lifecycle_event: "build", NODE_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/bin/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/node_modules", GITHUB_REF_PROTECTED: "false", npm_config_strict_peer_dependencies: "", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "4c5890c3ecc6b5070bc722166ce4b267a0a914ce", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/heads/develop", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", npm_config_globalconfig: "/opt/hostedtoolcache/node/16.20.1/x64/etc/npmrc", npm_config_init_module: "/home/runner/.npm-init.js", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_d89c3ac0-3f7c-4722-84d9-0ca2c269f4c9", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", npm_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/bin/npm-cli.js", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "push", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_d89c3ac0-3f7c-4722-84d9-0ca2c269f4c9", npm_config_global_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", npm_command: "run-script", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_d89c3ac0-3f7c-4722-84d9-0ca2c269f4c9", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", EDITOR: "vi", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/12141517249162447167", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "12141517249162447167", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.SC_DISABLE_SPEEDY);
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
    for (var u = this.indexOfGroup(t + 1), _ = 0, l = r.length; _ < l; _++)
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
}(), li = /* @__PURE__ */ new Map(), ki = /* @__PURE__ */ new Map(), xr = 1, Xo = function(e) {
  if (li.has(e))
    return li.get(e);
  for (; ki.has(xr); )
    xr++;
  var n = xr++;
  return li.set(e, n), ki.set(n, e), n;
}, SR = function(e) {
  return ki.get(e);
}, vR = function(e, n) {
  n >= xr && (xr = n + 1), li.set(e, n), ki.set(n, e);
}, GR = "style[" + ar + '][data-styled-version="5.3.6"]', CR = new RegExp("^" + ar + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), DR = function(e, n, t) {
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
}, Zd = function(e) {
  var n = document.head, t = e || n, r = document.createElement("style"), o = function(a) {
    for (var u = a.childNodes, _ = u.length; _ >= 0; _--) {
      var l = u[_];
      if (l && l.nodeType === 1 && l.hasAttribute(ar))
        return l;
    }
  }(t), i = o !== void 0 ? o.nextSibling : null;
  r.setAttribute(ar, "active"), r.setAttribute("data-styled-version", "5.3.6");
  var s = yR();
  return s && r.setAttribute("nonce", s), t.insertBefore(r, i), r;
}, HR = function() {
  function e(t) {
    var r = this.element = Zd(t);
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
    var r = this.element = Zd(t);
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
}(), uc = gu, MR = { isServer: !gu, useCSSOMInjection: !IR }, eh = function() {
  function e(t, r, o) {
    t === void 0 && (t = ft), r === void 0 && (r = {}), this.options = Fn({}, MR, {}, t), this.gs = r, this.names = new Map(o), this.server = !!t.isServer, !this.server && gu && uc && (uc = !1, function(i) {
      for (var s = document.querySelectorAll(GR), a = 0, u = s.length; a < u; a++) {
        var _ = s[a];
        _ && _.getAttribute(ar) !== "active" && (UR(i, _), _.parentNode && _.parentNode.removeChild(_));
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
            var l = ar + ".g" + s + '[id="' + a + '"]', c = "";
            u !== void 0 && u.forEach(function(f) {
              f.length > 0 && (c += f + ",");
            }), i += "" + _ + l + '{content:"' + c + `"}/*!sc*/
`;
          }
        }
      }
      return i;
    }(this);
  }, e;
}(), kR = /(a)(d)/gi, _c = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Aa(e) {
  var n, t = "";
  for (n = Math.abs(e); n > 52; n = n / 52 | 0)
    t = _c(n % 52) + t;
  return (_c(n % 52) + t).replace(kR, "$1-$2");
}
var Wt = function(e, n) {
  for (var t = n.length; t; )
    e = 33 * e ^ n.charCodeAt(--t);
  return e;
}, nh = function(e) {
  return Wt(5381, e);
};
function xR(e) {
  for (var n = 0; n < e.length; n += 1) {
    var t = e[n];
    if (eo(t) && !Ru(t))
      return !1;
  }
  return !0;
}
var LR = nh("5.3.6"), BR = function() {
  function e(n, t, r) {
    this.rules = n, this.staticRulesId = "", this.isStatic = (r === void 0 || r.isStatic) && xR(n), this.componentId = t, this.baseHash = Wt(LR, t), this.baseStyle = r, eh.registerId(t);
  }
  return e.prototype.generateAndInjectStyles = function(n, t, r) {
    var o = this.componentId, i = [];
    if (this.baseStyle && i.push(this.baseStyle.generateAndInjectStyles(n, t, r)), this.isStatic && !r.hash)
      if (this.staticRulesId && t.hasNameForId(o, this.staticRulesId))
        i.push(this.staticRulesId);
      else {
        var s = ur(this.rules, n, t, r).join(""), a = Aa(Wt(this.baseHash, s) >>> 0);
        if (!t.hasNameForId(o, a)) {
          var u = r(s, "." + a, void 0, o);
          t.insertRules(o, a, u);
        }
        i.push(a), this.staticRulesId = a;
      }
    else {
      for (var _ = this.rules.length, l = Wt(this.baseHash, r.hash), c = "", f = 0; f < _; f++) {
        var T = this.rules[f];
        if (typeof T == "string")
          c += T;
        else if (T) {
          var d = ur(T, n, t, r), h = Array.isArray(d) ? d.join("") : d;
          l = Wt(l, h + f), c += h;
        }
      }
      if (c) {
        var m = Aa(l >>> 0);
        if (!t.hasNameForId(o, m)) {
          var O = r(c, "." + m, void 0, o);
          t.insertRules(o, m, O);
        }
        i.push(m);
      }
    }
    return i.join(" ");
  }, e;
}(), jR = /^\s*\/\/.*$/gm, FR = [":", "[", ".", "#"];
function VR(e) {
  var n, t, r, o, i = e === void 0 ? ft : e, s = i.options, a = s === void 0 ? ft : s, u = i.plugins, _ = u === void 0 ? Mi : u, l = new _R(a), c = [], f = function(h) {
    function m(O) {
      if (O)
        try {
          h(O + "}");
        } catch {
        }
    }
    return function(O, R, N, I, p, H, M, K, w, B) {
      switch (O) {
        case 1:
          if (w === 0 && R.charCodeAt(0) === 64)
            return h(R + ";"), "";
          break;
        case 2:
          if (K === 0)
            return R + "/*|*/";
          break;
        case 3:
          switch (K) {
            case 102:
            case 112:
              return h(N[0] + R), "";
            default:
              return R + (B === 0 ? "/*|*/" : "");
          }
        case -2:
          R.split("/*|*/}").forEach(m);
      }
    };
  }(function(h) {
    c.push(h);
  }), T = function(h, m, O) {
    return m === 0 && FR.indexOf(O[t.length]) !== -1 || O.match(o) ? h : "." + n;
  };
  function d(h, m, O, R) {
    R === void 0 && (R = "&");
    var N = h.replace(jR, ""), I = m && O ? O + " " + m + " { " + N + " }" : N;
    return n = R, t = m, r = new RegExp("\\" + t + "\\b", "g"), o = new RegExp("(\\" + t + "\\b){2,}"), l(O || !m ? "" : m, I);
  }
  return l.use([].concat(_, [function(h, m, O) {
    h === 2 && O.length && O[0].lastIndexOf(t) > 0 && (O[0] = O[0].replace(r, T));
  }, f, function(h) {
    if (h === -2) {
      var m = c;
      return c = [], m;
    }
  }])), d.hash = _.length ? _.reduce(function(h, m) {
    return m.name || Co(15), Wt(h, m.name);
  }, 5381).toString() : "", d;
}
var th = Ae.createContext();
th.Consumer;
var rh = Ae.createContext(), WR = (rh.Consumer, new eh()), Sa = VR();
function XR() {
  return Qe(th) || WR;
}
function YR() {
  return Qe(rh) || Sa;
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
function cc(e) {
  return $R.test(e) ? e.replace(zR, qR).replace(JR, "-ms-") : e;
}
var lc = function(e) {
  return e == null || e === !1 || e === "";
};
function ur(e, n, t, r) {
  if (Array.isArray(e)) {
    for (var o, i = [], s = 0, a = e.length; s < a; s += 1)
      (o = ur(e[s], n, t, r)) !== "" && (Array.isArray(o) ? i.push.apply(i, o) : i.push(o));
    return i;
  }
  if (lc(e))
    return "";
  if (Ru(e))
    return "." + e.styledComponentId;
  if (eo(e)) {
    if (typeof (_ = e) != "function" || _.prototype && _.prototype.isReactComponent || !n)
      return e;
    var u = e(n);
    return ur(u, n, t, r);
  }
  var _;
  return e instanceof KR ? t ? (e.inject(t, r), e.getName(r)) : e : Ia(e) ? function l(c, f) {
    var T, d, h = [];
    for (var m in c)
      c.hasOwnProperty(m) && !lc(c[m]) && (Array.isArray(c[m]) && c[m].isCss || eo(c[m]) ? h.push(cc(m) + ":", c[m], ";") : Ia(c[m]) ? h.push.apply(h, l(c[m], m)) : h.push(cc(m) + ": " + (T = m, (d = c[m]) == null || typeof d == "boolean" || d === "" ? "" : typeof d != "number" || d === 0 || T in cR ? String(d).trim() : d + "px") + ";"));
    return f ? [f + " {"].concat(h, ["}"]) : h;
  }(e) : e.toString();
}
var dc = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function In(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    t[r - 1] = arguments[r];
  return eo(e) || Ia(e) ? dc(ur(sc(Mi, [e].concat(t)))) : t.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : dc(ur(sc(e, t)));
}
var QR = function(e, n, t) {
  return t === void 0 && (t = ft), e.theme !== t.theme && e.theme || n || t.theme;
}, ZR = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, eg = /(^-|-$)/g;
function $s(e) {
  return e.replace(ZR, "-").replace(eg, "");
}
var ng = function(e) {
  return Aa(nh(e) >>> 0);
};
function Yo(e) {
  return typeof e == "string" && !0;
}
var va = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, tg = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function rg(e, n, t) {
  var r = e[t];
  va(n) && va(r) ? oh(r, n) : e[t] = n;
}
function oh(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    t[r - 1] = arguments[r];
  for (var o = 0, i = t; o < i.length; o++) {
    var s = i[o];
    if (va(s))
      for (var a in s)
        tg(a) && rg(e, s[a], a);
  }
  return e;
}
var ih = Ae.createContext();
ih.Consumer;
var zs = {};
function sh(e, n, t) {
  var r = Ru(e), o = !Yo(e), i = n.attrs, s = i === void 0 ? Mi : i, a = n.componentId, u = a === void 0 ? function(R, N) {
    var I = typeof R != "string" ? "sc" : $s(R);
    zs[I] = (zs[I] || 0) + 1;
    var p = I + "-" + ng("5.3.6" + I + zs[I]);
    return N ? N + "-" + p : p;
  }(n.displayName, n.parentComponentId) : a, _ = n.displayName, l = _ === void 0 ? function(R) {
    return Yo(R) ? "styled." + R : "Styled(" + ac(R) + ")";
  }(e) : _, c = n.displayName && n.componentId ? $s(n.displayName) + "-" + n.componentId : n.componentId || u, f = r && e.attrs ? Array.prototype.concat(e.attrs, s).filter(Boolean) : s, T = n.shouldForwardProp;
  r && e.shouldForwardProp && (T = n.shouldForwardProp ? function(R, N, I) {
    return e.shouldForwardProp(R, N, I) && n.shouldForwardProp(R, N, I);
  } : e.shouldForwardProp);
  var d, h = new BR(t, c, r ? e.componentStyle : void 0), m = h.isStatic && s.length === 0, O = function(R, N) {
    return function(I, p, H, M) {
      var K = I.attrs, w = I.componentStyle, B = I.defaultProps, Te = I.foldedComponentIds, fe = I.shouldForwardProp, ge = I.styledComponentId, k = I.target, G = function(j, E, J) {
        j === void 0 && (j = ft);
        var S = Fn({}, E, { theme: j }), ce = {};
        return J.forEach(function(ne) {
          var me, $, Pe, Xe = ne;
          for (me in eo(Xe) && (Xe = Xe(S)), Xe)
            S[me] = ce[me] = me === "className" ? ($ = ce[me], Pe = Xe[me], $ && Pe ? $ + " " + Pe : $ || Pe) : Xe[me];
        }), [S, ce];
      }(QR(p, Qe(ih), B) || ft, p, K), q = G[0], _e = G[1], ee = function(j, E, J, S) {
        var ce = XR(), ne = YR(), me = E ? j.generateAndInjectStyles(ft, ce, ne) : j.generateAndInjectStyles(J, ce, ne);
        return me;
      }(w, M, q), Ie = H, He = _e.$as || p.$as || _e.as || p.as || k, Ne = Yo(He), C = _e !== p ? Fn({}, p, {}, _e) : p, U = {};
      for (var P in C)
        P[0] !== "$" && P !== "as" && (P === "forwardedAs" ? U.as = C[P] : (fe ? fe(P, nc, He) : !Ne || nc(P)) && (U[P] = C[P]));
      return p.style && _e.style !== p.style && (U.style = Fn({}, p.style, {}, _e.style)), U.className = Array.prototype.concat(Te, ge, ee !== ge ? ee : null, p.className, _e.className).filter(Boolean).join(" "), U.ref = Ie, Ym(He, U);
    }(d, R, N, m);
  };
  return O.displayName = l, (d = Ae.forwardRef(O)).attrs = f, d.componentStyle = h, d.displayName = l, d.shouldForwardProp = T, d.foldedComponentIds = r ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : Mi, d.styledComponentId = c, d.target = r ? e.target : e, d.withComponent = function(R) {
    var N = n.componentId, I = function(H, M) {
      if (H == null)
        return {};
      var K, w, B = {}, Te = Object.keys(H);
      for (w = 0; w < Te.length; w++)
        K = Te[w], M.indexOf(K) >= 0 || (B[K] = H[K]);
      return B;
    }(n, ["componentId"]), p = N && N + "-" + (Yo(R) ? R : $s(ac(R)));
    return sh(R, Fn({}, I, { attrs: f, componentId: p }), t);
  }, Object.defineProperty(d, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(R) {
    this._foldedDefaultProps = r ? oh({}, e.defaultProps, R) : R;
  } }), d.toString = function() {
    return "." + d.styledComponentId;
  }, o && bR(d, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), d;
}
var Ga = function(e) {
  return function n(t, r, o) {
    if (o === void 0 && (o = ft), !zd.isValidElementType(r))
      return Co(1, String(r));
    var i = function() {
      return t(r, o, In.apply(void 0, arguments));
    };
    return i.withConfig = function(s) {
      return n(t, r, Fn({}, o, {}, s));
    }, i.attrs = function(s) {
      return n(t, r, Fn({}, o, { attrs: Array.prototype.concat(o.attrs, s).filter(Boolean) }));
    }, i;
  }(sh, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  Ga[e] = Ga(e);
});
const Ce = Ga, ln = (e = "100%", n = e) => In`
  width: ${e};
  height: ${n};
`;
In`
  border: 1px solid red;
`;
const og = (e) => In`
  padding-left: ${e}px;
  padding-right: ${e}px;
`, yt = (e = "flex-start", n = "stretch", t = "row") => In`
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
`, nn = (e) => In`
  ${({ theme: n }) => n[e]}
`, ah = (e) => In`
  position: absolute;
  ${Object.entries(e).map(([n, t]) => `${n}: ${t};`).join(`
`)}
`, ig = (e, n) => In`
  margin-left: ${e}px;
  margin-top: ${n}px;
`, sg = In`
  -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
`, SS = Ce.div`
  ${yt("center", "center")};
  ${ah({
  left: "0",
  top: "0"
})}
  ${ln("100vw", "100vh")};
  background: rgba(0, 0, 0, 0.44);
  z-index: 100;
`, vS = Ce.div`
  display: grid;
  position: relative;
  ${ln("50vw", "60vh")};
  background: ${nn("grey")};
  border: 2px solid ${nn("lightGrey")};
  min-height: 300px;
  border-radius: 6px;
  cursor: grab;
  ${sg};
  touch-action: none;
  overflow-y: auto;
  scroll-behavior: smooth;
  ${Nu()};
`, GS = Ce.div`
  margin: 0 auto;
  margin-top: 18px;
  ${ln("60%", "100%")}
  & > * {
    cursor: initial;
    color: ${nn("light")};
  }
`, ag = (e, n) => {
  const { Spring: t, Gesture: r } = us(), [{ y: o }, i] = t.useSpring(() => ({ y: n })), s = () => {
    i.start({ y: 0, immediate: !1, config: t.config.gentle });
  }, a = (c = 0) => {
    e(), i.start({
      y: n,
      immediate: !1,
      config: { ...t.config.stiff, velocity: c }
    });
  }, u = r.useDrag(
    ({ last: c, velocity: [, f], direction: [, T], offset: [, d], cancel: h }) => {
      d < -70 && h(), c ? d > n * 0.5 || f > 0.5 && T === 1 ? a(f) : s() : i.start({ y: d, immediate: T === -1 });
    },
    {
      from: () => [0, o.get()],
      filterTaps: !0,
      bounds: { top: 0 },
      rubberband: !0
    }
  ), _ = o.to((c) => c < n ? "block" : "none");
  return {
    toggle: (c) => {
      c ? s() : a();
    },
    bind: u,
    div: t.a.div,
    springs: {
      display: _,
      y: o
    }
  };
}, ug = Ce.div`
  padding-left: 15px;
  z-index: 15;
  position: fixed;
  right: 0;
  height: calc(100vh + 100px);
  width: calc(100% - 54px);
  border-radius: 6px 6px 0;
  background: ${nn("darkBlue")};
  border-top: 2px solid ${nn("lightGrey")};
  touch-action: none;
  bottom: ${({ $bottom: e }) => `calc(-100vh + ${e - 100}px)`};
  overflow-y: auto;
  box-sizing: border-box;
  scroll-behavior: smooth;
  ${Nu()};
`, _g = ({ children: e, onClose: n, isOpen: t, height: r }) => {
  const o = ag(n, r);
  return Ge(() => {
    o.toggle(t);
  }, [t]), /* @__PURE__ */ V(
    ug,
    {
      $bottom: r,
      ...o.bind(),
      style: o.springs,
      as: o.div,
      children: e
    }
  );
}, cg = (e) => /* @__PURE__ */ V(hu, { children: /* @__PURE__ */ V(_g, { ...e }) }), uh = ({
  onChange: e,
  value: n,
  options: t,
  defaultValue: r
}) => /* @__PURE__ */ V(
  Qm,
  {
    size: "middle",
    onChange: e,
    value: n,
    style: { width: 200 },
    options: t,
    defaultValue: r
  }
), lg = Qn(({ onChange: e }) => {
  const { fontSize: n, tabSize: t } = mr(), r = es(), o = r.getActiveTabText(), i = r.getActiveLanguage();
  return /* @__PURE__ */ V(
    fE,
    {
      height: "90vh",
      theme: "vs-dark",
      onChange: e,
      language: i,
      value: Vl(o),
      options: oT({
        fontSize: n,
        tabSize: t
      })
    }
  );
}), dg = ({ children: e }) => {
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
}, hg = (e) => /* @__PURE__ */ V(dg, { children: /* @__PURE__ */ V(lg, { ...e }) }), bu = {
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
}, mg = [
  "java",
  "python",
  "cpp",
  "c",
  "go",
  "javascript"
], fg = () => [...new Set(Object.values(bu))].map((n) => ({
  value: n,
  label: n
})), pg = Qn(() => {
  const e = fg(), n = es(), t = n.getActiveLanguage(), r = n.getActiveTab();
  return /* @__PURE__ */ V(
    uh,
    {
      onChange: (i) => {
        r.lang = i;
      },
      value: t,
      options: e
    }
  );
}), _h = "Custom", Tg = [
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
  _h
], Eg = Qn(() => {
  const e = bt(), { theme: n } = mr();
  return /* @__PURE__ */ V(
    uh,
    {
      defaultValue: "vs-dark",
      onChange: (r) => {
        e.changeTheme(r);
      },
      value: n,
      options: Tg.map((r) => ({
        value: r,
        label: r
      }))
    }
  );
});
let Ko;
const Og = new Uint8Array(16);
function Rg() {
  if (!Ko && (Ko = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Ko))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return Ko(Og);
}
const ke = [];
for (let e = 0; e < 256; ++e)
  ke.push((e + 256).toString(16).slice(1));
function gg(e, n = 0) {
  return (ke[e[n + 0]] + ke[e[n + 1]] + ke[e[n + 2]] + ke[e[n + 3]] + "-" + ke[e[n + 4]] + ke[e[n + 5]] + "-" + ke[e[n + 6]] + ke[e[n + 7]] + "-" + ke[e[n + 8]] + ke[e[n + 9]] + "-" + ke[e[n + 10]] + ke[e[n + 11]] + ke[e[n + 12]] + ke[e[n + 13]] + ke[e[n + 14]] + ke[e[n + 15]]).toLowerCase();
}
const Ng = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), hc = {
  randomUUID: Ng
};
function bg(e, n, t) {
  if (hc.randomUUID && !n && !e)
    return hc.randomUUID();
  e = e || {};
  const r = e.random || (e.rng || Rg)();
  if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, n) {
    t = t || 0;
    for (let o = 0; o < 16; ++o)
      n[t + o] = r[o];
    return n;
  }
  return gg(r);
}
const Ig = ({
  fileData: e,
  lastNumber: n
}) => ({
  fileHandle: e?.fileHandle ?? null,
  content: e?.content ?? "",
  label: e?.name ?? "Untitled",
  lang: e?.language ?? "text",
  idx: n ? n + 1 : 0,
  key: bg(),
  wasChanged: !1
}), ch = 9, CS = [14, 16, 18, 20, 22, 24, 26], DS = [4, 2], Ag = (e) => e.length >= ch;
class Sg {
  constructor(n) {
    Rt(this), this.state = n;
  }
  createTab(n) {
    const t = this.state.content;
    if (Ag(t))
      return null;
    const r = t.at(-1)?.idx, o = Ig({ fileData: n, lastNumber: r });
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
const vg = () => {
  const [e, n] = qe(null);
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
}, Gg = (e) => e.map((n) => ({
  label: n.label,
  key: n.key
})), Cg = Ce(nl)`
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
`, Dg = Qn(() => {
  const { activeKey: e, content: n } = mr(), t = bt(), r = Gg(n), o = vg(), i = o.protect(
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
  return /* @__PURE__ */ V(Zc, { children: /* @__PURE__ */ V(
    Zm,
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
        Cg,
        {
          type: "editable-card",
          onChange: s,
          activeKey: e,
          onEdit: i,
          items: Vl(r),
          hideAdd: n.length >= ch
        }
      )
    }
  ) });
}), Ug = [1, 2, 3, 4, 5, 6, 7, 8, 9], yg = () => {
  const e = Cd(), { tabs: n } = bt(), { content: t } = mr();
  Ge(() => (e.on(
    Object.fromEntries(
      Ug.map((r) => {
        const i = t[r - 1]?.key;
        return [r.toString(), i ? () => n.changeActiveTab(i) : null];
      })
    )
  ), () => {
    e.clear();
  }), [t.length]);
}, Hg = (e) => ZO(e) ? "name" in e && typeof e.name == "string" && "type" in e && typeof e.type == "string" && "content" in e && typeof e.content == "string" : !1, lh = (e) => {
  const n = e.split(".").at(-1);
  return Pg(n) ? [bu[n], n] : ["text", n];
};
function Pg(e) {
  return e in bu;
}
const dh = {
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
}, wg = {
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
}, Mg = () => async () => {
  if ("showOpenFilePicker" in window) {
    const [e] = await window.showOpenFilePicker(wg), n = await e.getFile(), t = await n.text(), [r] = lh(n.name);
    return {
      name: n.name,
      type: n.type,
      content: t,
      fileHandle: e,
      language: r
    };
  }
  console.warn(dh.NotSupportedByBrowser());
}, kg = () => async (e, n) => {
  try {
    let t = e;
    eR(e?.createWritable) || (t = await window.showSaveFilePicker());
    const r = await t.createWritable();
    return await r.write(n), await r.close(), t;
  } catch {
    console.warn(dh.NotSupportedByBrowser());
  }
}, hh = () => {
  const e = Mg(), n = kg(), t = bt(), r = es();
  return {
    openFile: Et(async () => {
      const s = await e();
      Hg(s) && t.tabs.createTab(s);
    }, [t.tabs, e]),
    saveFile: async () => {
      const s = r.getActiveTab(), a = s.fileHandle, u = s.content;
      if (!s.wasChanged)
        return;
      const _ = await n(a, u);
      _ && (s.fileHandle = _, s.lang = lh(_.name));
    }
  };
};
var ot = /* @__PURE__ */ ((e) => (e.O = "O", e.S = "S", e.N = "N", e.T = "T", e.P = "P", e.J = "J", e.Q = "Q", e))(ot || {});
const xg = () => {
  const e = bt(), n = Cd(), { openFile: t, saveFile: r } = hh();
  yg();
  const o = sT("isTerminalOpened"), i = hr(), s = Et(() => {
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
}, Lg = Ce.div`
  width: 100%;
`, Bg = Ce.div`
  ${yt("space-between")}
  ${ln("100%", "48px")}
  margin-bottom: 10px;
`, jg = Ce.div`
  width: 30%;
  display: flex;
  gap: 30px;
  align-items: flex-end;
`, US = Qn(() => {
  const e = bt(), { theme: n, content: t, customBackground: r, customColor: o } = mr(), i = uT(), s = rS(), a = LO(() => {
    i.set("EDITOR_CONTENT_DATA", t);
  }, 1e3);
  xg();
  const u = _d(), _ = (l) => {
    Wd(l) && (e.editor.saveContent(l), a());
  };
  return Ge(() => {
    u?.editor.setTheme(n);
  }, [n]), Ge(() => {
    s({
      background: r,
      color: o
    });
  }, [r, o]), /* @__PURE__ */ _n(Lg, { children: [
    /* @__PURE__ */ _n(Bg, { children: [
      /* @__PURE__ */ V(Dg, {}),
      /* @__PURE__ */ _n(jg, { children: [
        /* @__PURE__ */ V(Eg, {}),
        /* @__PURE__ */ V(pg, {})
      ] })
    ] }),
    /* @__PURE__ */ V(hu, { children: /* @__PURE__ */ V(hg, { onChange: _ }) })
  ] });
});
function Fg(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
//! moment.js
//! version : 2.29.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var mh;
function D() {
  return mh.apply(null, arguments);
}
function Vg(e) {
  mh = e;
}
function Nn(e) {
  return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]";
}
function Gt(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Object]";
}
function ae(e, n) {
  return Object.prototype.hasOwnProperty.call(e, n);
}
function Iu(e) {
  if (Object.getOwnPropertyNames)
    return Object.getOwnPropertyNames(e).length === 0;
  var n;
  for (n in e)
    if (ae(e, n))
      return !1;
  return !0;
}
function Ye(e) {
  return e === void 0;
}
function Jn(e) {
  return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]";
}
function Do(e) {
  return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
}
function fh(e, n) {
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
  return Lh(e, n, t, r, !0).utc();
}
function Wg() {
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
  return e._pf == null && (e._pf = Wg()), e._pf;
}
var Da;
Array.prototype.some ? Da = Array.prototype.some : Da = function(e) {
  var n = Object(this), t = n.length >>> 0, r;
  for (r = 0; r < t; r++)
    if (r in n && e.call(this, n[r], r, n))
      return !0;
  return !1;
};
function Au(e) {
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
function cs(e) {
  var n = Mn(NaN);
  return e != null ? ut(z(n), e) : z(n).userInvalidated = !0, n;
}
var mc = D.momentProperties = [], Js = !1;
function Su(e, n) {
  var t, r, o, i = mc.length;
  if (Ye(n._isAMomentObject) || (e._isAMomentObject = n._isAMomentObject), Ye(n._i) || (e._i = n._i), Ye(n._f) || (e._f = n._f), Ye(n._l) || (e._l = n._l), Ye(n._strict) || (e._strict = n._strict), Ye(n._tzm) || (e._tzm = n._tzm), Ye(n._isUTC) || (e._isUTC = n._isUTC), Ye(n._offset) || (e._offset = n._offset), Ye(n._pf) || (e._pf = z(n)), Ye(n._locale) || (e._locale = n._locale), i > 0)
    for (t = 0; t < i; t++)
      r = mc[t], o = n[r], Ye(o) || (e[r] = o);
  return e;
}
function Uo(e) {
  Su(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = /* @__PURE__ */ new Date(NaN)), Js === !1 && (Js = !0, D.updateOffset(this), Js = !1);
}
function bn(e) {
  return e instanceof Uo || e != null && e._isAMomentObject != null;
}
function ph(e) {
  D.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + e);
}
function hn(e, n) {
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
      ph(
        e + `
Arguments: ` + Array.prototype.slice.call(r).join("") + `
` + new Error().stack
      ), t = !1;
    }
    return n.apply(this, arguments);
  }, n);
}
var fc = {};
function Th(e, n) {
  D.deprecationHandler != null && D.deprecationHandler(e, n), fc[e] || (ph(n), fc[e] = !0);
}
D.suppressDeprecationWarnings = !1;
D.deprecationHandler = null;
function kn(e) {
  return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
}
function Xg(e) {
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
function vu(e) {
  e != null && this.set(e);
}
var ya;
Object.keys ? ya = Object.keys : ya = function(e) {
  var n, t = [];
  for (n in e)
    ae(e, n) && t.push(n);
  return t;
};
var Yg = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function Kg(e, n, t) {
  var r = this._calendar[e] || this._calendar.sameElse;
  return kn(r) ? r.call(n, t) : r;
}
function Hn(e, n, t) {
  var r = "" + Math.abs(e), o = n - r.length, i = e >= 0;
  return (i ? t ? "+" : "" : "-") + Math.pow(10, Math.max(0, o)).toString().substr(1) + r;
}
var Gu = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, $o = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, qs = {}, Kt = {};
function x(e, n, t, r) {
  var o = r;
  typeof r == "string" && (o = function() {
    return this[r]();
  }), e && (Kt[e] = o), n && (Kt[n[0]] = function() {
    return Hn(o.apply(this, arguments), n[1], n[2]);
  }), t && (Kt[t] = function() {
    return this.localeData().ordinal(
      o.apply(this, arguments),
      e
    );
  });
}
function $g(e) {
  return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
}
function zg(e) {
  var n = e.match(Gu), t, r;
  for (t = 0, r = n.length; t < r; t++)
    Kt[n[t]] ? n[t] = Kt[n[t]] : n[t] = $g(n[t]);
  return function(o) {
    var i = "", s;
    for (s = 0; s < r; s++)
      i += kn(n[s]) ? n[s].call(o, e) : n[s];
    return i;
  };
}
function hi(e, n) {
  return e.isValid() ? (n = Eh(n, e.localeData()), qs[n] = qs[n] || zg(n), qs[n](e)) : e.localeData().invalidDate();
}
function Eh(e, n) {
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
var Jg = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function qg(e) {
  var n = this._longDateFormat[e], t = this._longDateFormat[e.toUpperCase()];
  return n || !t ? n : (this._longDateFormat[e] = t.match(Gu).map(function(r) {
    return r === "MMMM" || r === "MM" || r === "DD" || r === "dddd" ? r.slice(1) : r;
  }).join(""), this._longDateFormat[e]);
}
var Qg = "Invalid date";
function Zg() {
  return this._invalidDate;
}
var eN = "%d", nN = /\d{1,2}/;
function tN(e) {
  return this._ordinal.replace("%d", e);
}
var rN = {
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
function oN(e, n, t, r) {
  var o = this._relativeTime[t];
  return kn(o) ? o(e, n, t, r) : o.replace(/%d/i, e);
}
function iN(e, n) {
  var t = this._relativeTime[e > 0 ? "future" : "past"];
  return kn(t) ? t(n) : t.replace(/%s/i, n);
}
var Lr = {};
function je(e, n) {
  var t = e.toLowerCase();
  Lr[t] = Lr[t + "s"] = Lr[n] = e;
}
function mn(e) {
  return typeof e == "string" ? Lr[e] || Lr[e.toLowerCase()] : void 0;
}
function Cu(e) {
  var n = {}, t, r;
  for (r in e)
    ae(e, r) && (t = mn(r), t && (n[t] = e[r]));
  return n;
}
var Oh = {};
function Fe(e, n) {
  Oh[e] = n;
}
function sN(e) {
  var n = [], t;
  for (t in e)
    ae(e, t) && n.push({ unit: t, priority: Oh[t] });
  return n.sort(function(r, o) {
    return r.priority - o.priority;
  }), n;
}
function ls(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
}
function rn(e) {
  return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
}
function Q(e) {
  var n = +e, t = 0;
  return n !== 0 && isFinite(n) && (t = rn(n)), t;
}
function pr(e, n) {
  return function(t) {
    return t != null ? (Rh(this, e, t), D.updateOffset(this, n), this) : xi(this, e);
  };
}
function xi(e, n) {
  return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + n]() : NaN;
}
function Rh(e, n, t) {
  e.isValid() && !isNaN(t) && (n === "FullYear" && ls(e.year()) && e.month() === 1 && e.date() === 29 ? (t = Q(t), e._d["set" + (e._isUTC ? "UTC" : "") + n](
    t,
    e.month(),
    Ts(t, e.month())
  )) : e._d["set" + (e._isUTC ? "UTC" : "") + n](t));
}
function aN(e) {
  return e = mn(e), kn(this[e]) ? this[e]() : this;
}
function uN(e, n) {
  if (typeof e == "object") {
    e = Cu(e);
    var t = sN(e), r, o = t.length;
    for (r = 0; r < o; r++)
      this[t[r].unit](e[t[r].unit]);
  } else if (e = mn(e), kn(this[e]))
    return this[e](n);
  return this;
}
var gh = /\d/, tn = /\d\d/, Nh = /\d{3}/, Du = /\d{4}/, ds = /[+-]?\d{6}/, Oe = /\d\d?/, bh = /\d\d\d\d?/, Ih = /\d\d\d\d\d\d?/, hs = /\d{1,3}/, Uu = /\d{1,4}/, ms = /[+-]?\d{1,6}/, Tr = /\d+/, fs = /[+-]?\d+/, _N = /Z|[+-]\d\d:?\d\d/gi, ps = /Z|[+-]\d\d(?::?\d\d)?/gi, cN = /[+-]?\d+(\.\d{1,3})?/, yo = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, Li;
Li = {};
function y(e, n, t) {
  Li[e] = kn(n) ? n : function(r, o) {
    return r && t ? t : n;
  };
}
function lN(e, n) {
  return ae(Li, e) ? Li[e](n._strict, n._locale) : new RegExp(dN(e));
}
function dN(e) {
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
function hN(e, n, t) {
  n != null && ae(Ha, e) && Ha[e](n, t._a, t, e);
}
var Be = 0, Vn = 1, vn = 2, De = 3, Tn = 4, Wn = 5, St = 6, mN = 7, fN = 8;
function pN(e, n) {
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
  var t = pN(n, 12);
  return e += (n - t) / 12, t === 1 ? ls(e) ? 29 : 28 : 31 - t % 7 % 2;
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
y("MM", Oe, tn);
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
var TN = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), Ah = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), Sh = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, EN = yo, ON = yo;
function RN(e, n) {
  return e ? Nn(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || Sh).test(n) ? "format" : "standalone"][e.month()] : Nn(this._months) ? this._months : this._months.standalone;
}
function gN(e, n) {
  return e ? Nn(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Sh.test(n) ? "format" : "standalone"][e.month()] : Nn(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function NN(e, n, t) {
  var r, o, i, s = e.toLocaleLowerCase();
  if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], r = 0; r < 12; ++r)
      i = Mn([2e3, r]), this._shortMonthsParse[r] = this.monthsShort(
        i,
        ""
      ).toLocaleLowerCase(), this._longMonthsParse[r] = this.months(i, "").toLocaleLowerCase();
  return t ? n === "MMM" ? (o = ve.call(this._shortMonthsParse, s), o !== -1 ? o : null) : (o = ve.call(this._longMonthsParse, s), o !== -1 ? o : null) : n === "MMM" ? (o = ve.call(this._shortMonthsParse, s), o !== -1 ? o : (o = ve.call(this._longMonthsParse, s), o !== -1 ? o : null)) : (o = ve.call(this._longMonthsParse, s), o !== -1 ? o : (o = ve.call(this._shortMonthsParse, s), o !== -1 ? o : null));
}
function bN(e, n, t) {
  var r, o, i;
  if (this._monthsParseExact)
    return NN.call(this, e, n, t);
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
function vh(e, n) {
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
function Gh(e) {
  return e != null ? (vh(this, e), D.updateOffset(this, !0), this) : xi(this, "Month");
}
function IN() {
  return Ts(this.year(), this.month());
}
function AN(e) {
  return this._monthsParseExact ? (ae(this, "_monthsRegex") || Ch.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (ae(this, "_monthsShortRegex") || (this._monthsShortRegex = EN), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function SN(e) {
  return this._monthsParseExact ? (ae(this, "_monthsRegex") || Ch.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (ae(this, "_monthsRegex") || (this._monthsRegex = ON), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
}
function Ch() {
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
y("Y", fs);
y("YY", Oe, tn);
y("YYYY", Uu, Du);
y("YYYYY", ms, ds);
y("YYYYYY", ms, ds);
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
  return ls(e) ? 366 : 365;
}
D.parseTwoDigitYear = function(e) {
  return Q(e) + (Q(e) > 68 ? 1900 : 2e3);
};
var Dh = pr("FullYear", !0);
function vN() {
  return ls(this.year());
}
function GN(e, n, t, r, o, i, s) {
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
function Uh(e, n, t, r, o) {
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
y("ww", Oe, tn);
y("W", Oe);
y("WW", Oe, tn);
Ho(
  ["w", "ww", "W", "WW"],
  function(e, n, t, r) {
    n[r.substr(0, 1)] = Q(e);
  }
);
function CN(e) {
  return to(e, this._week.dow, this._week.doy).week;
}
var DN = {
  dow: 0,
  // Sunday is the first day of the week.
  doy: 6
  // The week that contains Jan 6th is the first week of the year.
};
function UN() {
  return this._week.dow;
}
function yN() {
  return this._week.doy;
}
function HN(e) {
  var n = this.localeData().week(this);
  return e == null ? n : this.add((e - n) * 7, "d");
}
function PN(e) {
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
function wN(e, n) {
  return typeof e != "string" ? e : isNaN(e) ? (e = n.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10);
}
function MN(e, n) {
  return typeof e == "string" ? n.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
}
function yu(e, n) {
  return e.slice(n, 7).concat(e.slice(0, n));
}
var kN = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), yh = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), xN = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), LN = yo, BN = yo, jN = yo;
function FN(e, n) {
  var t = Nn(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(n) ? "format" : "standalone"];
  return e === !0 ? yu(t, this._week.dow) : e ? t[e.day()] : t;
}
function VN(e) {
  return e === !0 ? yu(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
}
function WN(e) {
  return e === !0 ? yu(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
}
function XN(e, n, t) {
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
function YN(e, n, t) {
  var r, o, i;
  if (this._weekdaysParseExact)
    return XN.call(this, e, n, t);
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
function KN(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var n = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
  return e != null ? (e = wN(e, this.localeData()), this.add(e - n, "d")) : n;
}
function $N(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var n = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return e == null ? n : this.add(e - n, "d");
}
function zN(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    var n = MN(e, this.localeData());
    return this.day(this.day() % 7 ? n : n - 7);
  } else
    return this.day() || 7;
}
function JN(e) {
  return this._weekdaysParseExact ? (ae(this, "_weekdaysRegex") || Hu.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (ae(this, "_weekdaysRegex") || (this._weekdaysRegex = LN), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function qN(e) {
  return this._weekdaysParseExact ? (ae(this, "_weekdaysRegex") || Hu.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (ae(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = BN), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function QN(e) {
  return this._weekdaysParseExact ? (ae(this, "_weekdaysRegex") || Hu.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (ae(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = jN), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function Hu() {
  function e(l, c) {
    return c.length - l.length;
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
function Pu() {
  return this.hours() % 12 || 12;
}
function ZN() {
  return this.hours() || 24;
}
x("H", ["HH", 2], 0, "hour");
x("h", ["hh", 2], 0, Pu);
x("k", ["kk", 2], 0, ZN);
x("hmm", 0, 0, function() {
  return "" + Pu.apply(this) + Hn(this.minutes(), 2);
});
x("hmmss", 0, 0, function() {
  return "" + Pu.apply(this) + Hn(this.minutes(), 2) + Hn(this.seconds(), 2);
});
x("Hmm", 0, 0, function() {
  return "" + this.hours() + Hn(this.minutes(), 2);
});
x("Hmmss", 0, 0, function() {
  return "" + this.hours() + Hn(this.minutes(), 2) + Hn(this.seconds(), 2);
});
function Hh(e, n) {
  x(e, 0, 0, function() {
    return this.localeData().meridiem(
      this.hours(),
      this.minutes(),
      n
    );
  });
}
Hh("a", !0);
Hh("A", !1);
je("hour", "h");
Fe("hour", 13);
function Ph(e, n) {
  return n._meridiemParse;
}
y("a", Ph);
y("A", Ph);
y("H", Oe);
y("h", Oe);
y("k", Oe);
y("HH", Oe, tn);
y("hh", Oe, tn);
y("kk", Oe, tn);
y("hmm", bh);
y("hmmss", Ih);
y("Hmm", bh);
y("Hmmss", Ih);
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
function eb(e) {
  return (e + "").toLowerCase().charAt(0) === "p";
}
var nb = /[ap]\.?m?\.?/i, tb = pr("Hours", !0);
function rb(e, n, t) {
  return e > 11 ? t ? "pm" : "PM" : t ? "am" : "AM";
}
var wh = {
  calendar: Yg,
  longDateFormat: Jg,
  invalidDate: Qg,
  ordinal: eN,
  dayOfMonthOrdinalParse: nN,
  relativeTime: rN,
  months: TN,
  monthsShort: Ah,
  week: DN,
  weekdays: kN,
  weekdaysMin: xN,
  weekdaysShort: yh,
  meridiemParse: nb
}, Re = {}, Ar = {}, ro;
function ob(e, n) {
  var t, r = Math.min(e.length, n.length);
  for (t = 0; t < r; t += 1)
    if (e[t] !== n[t])
      return t;
  return r;
}
function pc(e) {
  return e && e.toLowerCase().replace("_", "-");
}
function ib(e) {
  for (var n = 0, t, r, o, i; n < e.length; ) {
    for (i = pc(e[n]).split("-"), t = i.length, r = pc(e[n + 1]), r = r ? r.split("-") : null; t > 0; ) {
      if (o = Es(i.slice(0, t).join("-")), o)
        return o;
      if (r && r.length >= t && ob(i, r) >= t - 1)
        break;
      t--;
    }
    n++;
  }
  return ro;
}
function sb(e) {
  return e.match("^[^/\\\\]*$") != null;
}
function Es(e) {
  var n = null, t;
  if (Re[e] === void 0 && typeof module < "u" && module && module.exports && sb(e))
    try {
      n = ro._abbr, t = Fg, t("./locale/" + e), pt(n);
    } catch {
      Re[e] = null;
    }
  return Re[e];
}
function pt(e, n) {
  var t;
  return e && (Ye(n) ? t = Zn(e) : t = wu(e, n), t ? ro = t : typeof console < "u" && console.warn && console.warn(
    "Locale " + e + " not found. Did you forget to load it?"
  )), ro._abbr;
}
function wu(e, n) {
  if (n !== null) {
    var t, r = wh;
    if (n.abbr = e, Re[e] != null)
      Th(
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
    return Re[e] = new vu(Ua(r, n)), Ar[e] && Ar[e].forEach(function(o) {
      wu(o.name, o.config);
    }), pt(e), Re[e];
  } else
    return delete Re[e], null;
}
function ab(e, n) {
  if (n != null) {
    var t, r, o = wh;
    Re[e] != null && Re[e].parentLocale != null ? Re[e].set(Ua(Re[e]._config, n)) : (r = Es(e), r != null && (o = r._config), n = Ua(o, n), r == null && (n.abbr = e), t = new vu(n), t.parentLocale = Re[e], Re[e] = t), pt(e);
  } else
    Re[e] != null && (Re[e].parentLocale != null ? (Re[e] = Re[e].parentLocale, e === pt() && pt(e)) : Re[e] != null && delete Re[e]);
  return Re[e];
}
function Zn(e) {
  var n;
  if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
    return ro;
  if (!Nn(e)) {
    if (n = Es(e), n)
      return n;
    e = [e];
  }
  return ib(e);
}
function ub() {
  return ya(Re);
}
function Mu(e) {
  var n, t = e._a;
  return t && z(e).overflow === -2 && (n = t[Vn] < 0 || t[Vn] > 11 ? Vn : t[vn] < 1 || t[vn] > Ts(t[Be], t[Vn]) ? vn : t[De] < 0 || t[De] > 24 || t[De] === 24 && (t[Tn] !== 0 || t[Wn] !== 0 || t[St] !== 0) ? De : t[Tn] < 0 || t[Tn] > 59 ? Tn : t[Wn] < 0 || t[Wn] > 59 ? Wn : t[St] < 0 || t[St] > 999 ? St : -1, z(e)._overflowDayOfYear && (n < Be || n > vn) && (n = vn), z(e)._overflowWeeks && n === -1 && (n = mN), z(e)._overflowWeekday && n === -1 && (n = fN), z(e).overflow = n), e;
}
var _b = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, cb = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, lb = /Z|[+-]\d\d(?::?\d\d)?/, zo = [
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
], db = /^\/?Date\((-?\d+)/i, hb = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, mb = {
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
function Mh(e) {
  var n, t, r = e._i, o = _b.exec(r) || cb.exec(r), i, s, a, u, _ = zo.length, l = Qs.length;
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
      for (n = 0, t = l; n < t; n++)
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
      if (lb.exec(o[4]))
        u = "Z";
      else {
        e._isValid = !1;
        return;
      }
    e._f = s + (a || "") + (u || ""), xu(e);
  } else
    e._isValid = !1;
}
function fb(e, n, t, r, o, i) {
  var s = [
    pb(e),
    Ah.indexOf(n),
    parseInt(t, 10),
    parseInt(r, 10),
    parseInt(o, 10)
  ];
  return i && s.push(parseInt(i, 10)), s;
}
function pb(e) {
  var n = parseInt(e, 10);
  return n <= 49 ? 2e3 + n : n <= 999 ? 1900 + n : n;
}
function Tb(e) {
  return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function Eb(e, n, t) {
  if (e) {
    var r = yh.indexOf(e), o = new Date(
      n[0],
      n[1],
      n[2]
    ).getDay();
    if (r !== o)
      return z(t).weekdayMismatch = !0, t._isValid = !1, !1;
  }
  return !0;
}
function Ob(e, n, t) {
  if (e)
    return mb[e];
  if (n)
    return 0;
  var r = parseInt(t, 10), o = r % 100, i = (r - o) / 100;
  return i * 60 + o;
}
function kh(e) {
  var n = hb.exec(Tb(e._i)), t;
  if (n) {
    if (t = fb(
      n[4],
      n[3],
      n[2],
      n[5],
      n[6],
      n[7]
    ), !Eb(n[1], t, e))
      return;
    e._a = t, e._tzm = Ob(n[8], n[9], n[10]), e._d = no.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), z(e).rfc2822 = !0;
  } else
    e._isValid = !1;
}
function Rb(e) {
  var n = db.exec(e._i);
  if (n !== null) {
    e._d = /* @__PURE__ */ new Date(+n[1]);
    return;
  }
  if (Mh(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  if (kh(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  e._strict ? e._isValid = !1 : D.createFromInputFallback(e);
}
D.createFromInputFallback = hn(
  "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  function(e) {
    e._d = /* @__PURE__ */ new Date(e._i + (e._useUTC ? " UTC" : ""));
  }
);
function Lt(e, n, t) {
  return e ?? n ?? t;
}
function gb(e) {
  var n = new Date(D.now());
  return e._useUTC ? [
    n.getUTCFullYear(),
    n.getUTCMonth(),
    n.getUTCDate()
  ] : [n.getFullYear(), n.getMonth(), n.getDate()];
}
function ku(e) {
  var n, t, r = [], o, i, s;
  if (!e._d) {
    for (o = gb(e), e._w && e._a[vn] == null && e._a[Vn] == null && Nb(e), e._dayOfYear != null && (s = Lt(e._a[Be], o[Be]), (e._dayOfYear > Br(s) || e._dayOfYear === 0) && (z(e)._overflowDayOfYear = !0), t = no(s, 0, e._dayOfYear), e._a[Vn] = t.getUTCMonth(), e._a[vn] = t.getUTCDate()), n = 0; n < 3 && e._a[n] == null; ++n)
      e._a[n] = r[n] = o[n];
    for (; n < 7; n++)
      e._a[n] = r[n] = e._a[n] == null ? n === 2 ? 1 : 0 : e._a[n];
    e._a[De] === 24 && e._a[Tn] === 0 && e._a[Wn] === 0 && e._a[St] === 0 && (e._nextDay = !0, e._a[De] = 0), e._d = (e._useUTC ? no : GN).apply(
      null,
      r
    ), i = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[De] = 24), e._w && typeof e._w.d < "u" && e._w.d !== i && (z(e).weekdayMismatch = !0);
  }
}
function Nb(e) {
  var n, t, r, o, i, s, a, u, _;
  n = e._w, n.GG != null || n.W != null || n.E != null ? (i = 1, s = 4, t = Lt(
    n.GG,
    e._a[Be],
    to(Ee(), 1, 4).year
  ), r = Lt(n.W, 1), o = Lt(n.E, 1), (o < 1 || o > 7) && (u = !0)) : (i = e._locale._week.dow, s = e._locale._week.doy, _ = to(Ee(), i, s), t = Lt(n.gg, e._a[Be], _.year), r = Lt(n.w, _.week), n.d != null ? (o = n.d, (o < 0 || o > 6) && (u = !0)) : n.e != null ? (o = n.e + i, (n.e < 0 || n.e > 6) && (u = !0)) : o = i), r < 1 || r > $n(t, i, s) ? z(e)._overflowWeeks = !0 : u != null ? z(e)._overflowWeekday = !0 : (a = Uh(t, r, o, i, s), e._a[Be] = a.year, e._dayOfYear = a.dayOfYear);
}
D.ISO_8601 = function() {
};
D.RFC_2822 = function() {
};
function xu(e) {
  if (e._f === D.ISO_8601) {
    Mh(e);
    return;
  }
  if (e._f === D.RFC_2822) {
    kh(e);
    return;
  }
  e._a = [], z(e).empty = !0;
  var n = "" + e._i, t, r, o, i, s, a = n.length, u = 0, _, l;
  for (o = Eh(e._f, e._locale).match(Gu) || [], l = o.length, t = 0; t < l; t++)
    i = o[t], r = (n.match(lN(i, e)) || [])[0], r && (s = n.substr(0, n.indexOf(r)), s.length > 0 && z(e).unusedInput.push(s), n = n.slice(
      n.indexOf(r) + r.length
    ), u += r.length), Kt[i] ? (r ? z(e).empty = !1 : z(e).unusedTokens.push(i), hN(i, r, e)) : e._strict && !r && z(e).unusedTokens.push(i);
  z(e).charsLeftOver = a - u, n.length > 0 && z(e).unusedInput.push(n), e._a[De] <= 12 && z(e).bigHour === !0 && e._a[De] > 0 && (z(e).bigHour = void 0), z(e).parsedDateParts = e._a.slice(0), z(e).meridiem = e._meridiem, e._a[De] = bb(
    e._locale,
    e._a[De],
    e._meridiem
  ), _ = z(e).era, _ !== null && (e._a[Be] = e._locale.erasConvertYear(_, e._a[Be])), ku(e), Mu(e);
}
function bb(e, n, t) {
  var r;
  return t == null ? n : e.meridiemHour != null ? e.meridiemHour(n, t) : (e.isPM != null && (r = e.isPM(t), r && n < 12 && (n += 12), !r && n === 12 && (n = 0)), n);
}
function Ib(e) {
  var n, t, r, o, i, s, a = !1, u = e._f.length;
  if (u === 0) {
    z(e).invalidFormat = !0, e._d = /* @__PURE__ */ new Date(NaN);
    return;
  }
  for (o = 0; o < u; o++)
    i = 0, s = !1, n = Su({}, e), e._useUTC != null && (n._useUTC = e._useUTC), n._f = e._f[o], xu(n), Au(n) && (s = !0), i += z(n).charsLeftOver, i += z(n).unusedTokens.length * 10, z(n).score = i, a ? i < r && (r = i, t = n) : (r == null || i < r || s) && (r = i, t = n, s && (a = !0));
  ut(e, t || n);
}
function Ab(e) {
  if (!e._d) {
    var n = Cu(e._i), t = n.day === void 0 ? n.date : n.day;
    e._a = fh(
      [n.year, n.month, t, n.hour, n.minute, n.second, n.millisecond],
      function(r) {
        return r && parseInt(r, 10);
      }
    ), ku(e);
  }
}
function Sb(e) {
  var n = new Uo(Mu(xh(e)));
  return n._nextDay && (n.add(1, "d"), n._nextDay = void 0), n;
}
function xh(e) {
  var n = e._i, t = e._f;
  return e._locale = e._locale || Zn(e._l), n === null || t === void 0 && n === "" ? cs({ nullInput: !0 }) : (typeof n == "string" && (e._i = n = e._locale.preparse(n)), bn(n) ? new Uo(Mu(n)) : (Do(n) ? e._d = n : Nn(t) ? Ib(e) : t ? xu(e) : vb(e), Au(e) || (e._d = null), e));
}
function vb(e) {
  var n = e._i;
  Ye(n) ? e._d = new Date(D.now()) : Do(n) ? e._d = new Date(n.valueOf()) : typeof n == "string" ? Rb(e) : Nn(n) ? (e._a = fh(n.slice(0), function(t) {
    return parseInt(t, 10);
  }), ku(e)) : Gt(n) ? Ab(e) : Jn(n) ? e._d = new Date(n) : D.createFromInputFallback(e);
}
function Lh(e, n, t, r, o) {
  var i = {};
  return (n === !0 || n === !1) && (r = n, n = void 0), (t === !0 || t === !1) && (r = t, t = void 0), (Gt(e) && Iu(e) || Nn(e) && e.length === 0) && (e = void 0), i._isAMomentObject = !0, i._useUTC = i._isUTC = o, i._l = t, i._i = e, i._f = n, i._strict = r, Sb(i);
}
function Ee(e, n, t, r) {
  return Lh(e, n, t, r, !1);
}
var Gb = hn(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = Ee.apply(null, arguments);
    return this.isValid() && e.isValid() ? e < this ? this : e : cs();
  }
), Cb = hn(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = Ee.apply(null, arguments);
    return this.isValid() && e.isValid() ? e > this ? this : e : cs();
  }
);
function Bh(e, n) {
  var t, r;
  if (n.length === 1 && Nn(n[0]) && (n = n[0]), !n.length)
    return Ee();
  for (t = n[0], r = 1; r < n.length; ++r)
    (!n[r].isValid() || n[r][e](t)) && (t = n[r]);
  return t;
}
function Db() {
  var e = [].slice.call(arguments, 0);
  return Bh("isBefore", e);
}
function Ub() {
  var e = [].slice.call(arguments, 0);
  return Bh("isAfter", e);
}
var yb = function() {
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
function Hb(e) {
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
function Pb() {
  return this._isValid;
}
function wb() {
  return An(NaN);
}
function Os(e) {
  var n = Cu(e), t = n.year || 0, r = n.quarter || 0, o = n.month || 0, i = n.week || n.isoWeek || 0, s = n.day || 0, a = n.hour || 0, u = n.minute || 0, _ = n.second || 0, l = n.millisecond || 0;
  this._isValid = Hb(n), this._milliseconds = +l + _ * 1e3 + // 1000
  u * 6e4 + // 1000 * 60
  a * 1e3 * 60 * 60, this._days = +s + i * 7, this._months = +o + r * 3 + t * 12, this._data = {}, this._locale = Zn(), this._bubble();
}
function mi(e) {
  return e instanceof Os;
}
function Pa(e) {
  return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
}
function Mb(e, n, t) {
  var r = Math.min(e.length, n.length), o = Math.abs(e.length - n.length), i = 0, s;
  for (s = 0; s < r; s++)
    (t && e[s] !== n[s] || !t && Q(e[s]) !== Q(n[s])) && i++;
  return i + o;
}
function jh(e, n) {
  x(e, 0, 0, function() {
    var t = this.utcOffset(), r = "+";
    return t < 0 && (t = -t, r = "-"), r + Hn(~~(t / 60), 2) + n + Hn(~~t % 60, 2);
  });
}
jh("Z", ":");
jh("ZZ", "");
y("Z", ps);
y("ZZ", ps);
pe(["Z", "ZZ"], function(e, n, t) {
  t._useUTC = !0, t._tzm = Lu(ps, e);
});
var kb = /([\+\-]|\d\d)/gi;
function Lu(e, n) {
  var t = (n || "").match(e), r, o, i;
  return t === null ? null : (r = t[t.length - 1] || [], o = (r + "").match(kb) || ["-", 0, 0], i = +(o[1] * 60) + Q(o[2]), i === 0 ? 0 : o[0] === "+" ? i : -i);
}
function Bu(e, n) {
  var t, r;
  return n._isUTC ? (t = n.clone(), r = (bn(e) || Do(e) ? e.valueOf() : Ee(e).valueOf()) - t.valueOf(), t._d.setTime(t._d.valueOf() + r), D.updateOffset(t, !1), t) : Ee(e).local();
}
function wa(e) {
  return -Math.round(e._d.getTimezoneOffset());
}
D.updateOffset = function() {
};
function xb(e, n, t) {
  var r = this._offset || 0, o;
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    if (typeof e == "string") {
      if (e = Lu(ps, e), e === null)
        return this;
    } else
      Math.abs(e) < 16 && !t && (e = e * 60);
    return !this._isUTC && n && (o = wa(this)), this._offset = e, this._isUTC = !0, o != null && this.add(o, "m"), r !== e && (!n || this._changeInProgress ? Wh(
      this,
      An(e - r, "m"),
      1,
      !1
    ) : this._changeInProgress || (this._changeInProgress = !0, D.updateOffset(this, !0), this._changeInProgress = null)), this;
  } else
    return this._isUTC ? r : wa(this);
}
function Lb(e, n) {
  return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, n), this) : -this.utcOffset();
}
function Bb(e) {
  return this.utcOffset(0, e);
}
function jb(e) {
  return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(wa(this), "m")), this;
}
function Fb() {
  if (this._tzm != null)
    this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var e = Lu(_N, this._i);
    e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
  }
  return this;
}
function Vb(e) {
  return this.isValid() ? (e = e ? Ee(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1;
}
function Wb() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function Xb() {
  if (!Ye(this._isDSTShifted))
    return this._isDSTShifted;
  var e = {}, n;
  return Su(e, this), e = xh(e), e._a ? (n = e._isUTC ? Mn(e._a) : Ee(e._a), this._isDSTShifted = this.isValid() && Mb(e._a, n.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function Yb() {
  return this.isValid() ? !this._isUTC : !1;
}
function Kb() {
  return this.isValid() ? this._isUTC : !1;
}
function Fh() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var $b = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, zb = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function An(e, n) {
  var t = e, r = null, o, i, s;
  return mi(e) ? t = {
    ms: e._milliseconds,
    d: e._days,
    M: e._months
  } : Jn(e) || !isNaN(+e) ? (t = {}, n ? t[n] = +e : t.milliseconds = +e) : (r = $b.exec(e)) ? (o = r[1] === "-" ? -1 : 1, t = {
    y: 0,
    d: Q(r[vn]) * o,
    h: Q(r[De]) * o,
    m: Q(r[Tn]) * o,
    s: Q(r[Wn]) * o,
    ms: Q(Pa(r[St] * 1e3)) * o
    // the millisecond decimal point is included in the match
  }) : (r = zb.exec(e)) ? (o = r[1] === "-" ? -1 : 1, t = {
    y: It(r[2], o),
    M: It(r[3], o),
    w: It(r[4], o),
    d: It(r[5], o),
    h: It(r[6], o),
    m: It(r[7], o),
    s: It(r[8], o)
  }) : t == null ? t = {} : typeof t == "object" && ("from" in t || "to" in t) && (s = Jb(
    Ee(t.from),
    Ee(t.to)
  ), t = {}, t.ms = s.milliseconds, t.M = s.months), i = new Os(t), mi(e) && ae(e, "_locale") && (i._locale = e._locale), mi(e) && ae(e, "_isValid") && (i._isValid = e._isValid), i;
}
An.fn = Os.prototype;
An.invalid = wb;
function It(e, n) {
  var t = e && parseFloat(e.replace(",", "."));
  return (isNaN(t) ? 0 : t) * n;
}
function Tc(e, n) {
  var t = {};
  return t.months = n.month() - e.month() + (n.year() - e.year()) * 12, e.clone().add(t.months, "M").isAfter(n) && --t.months, t.milliseconds = +n - +e.clone().add(t.months, "M"), t;
}
function Jb(e, n) {
  var t;
  return e.isValid() && n.isValid() ? (n = Bu(n, e), e.isBefore(n) ? t = Tc(e, n) : (t = Tc(n, e), t.milliseconds = -t.milliseconds, t.months = -t.months), t) : { milliseconds: 0, months: 0 };
}
function Vh(e, n) {
  return function(t, r) {
    var o, i;
    return r !== null && !isNaN(+r) && (Th(
      n,
      "moment()." + n + "(period, number) is deprecated. Please use moment()." + n + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
    ), i = t, t = r, r = i), o = An(t, r), Wh(this, o, e), this;
  };
}
function Wh(e, n, t, r) {
  var o = n._milliseconds, i = Pa(n._days), s = Pa(n._months);
  e.isValid() && (r = r ?? !0, s && vh(e, xi(e, "Month") + s * t), i && Rh(e, "Date", xi(e, "Date") + i * t), o && e._d.setTime(e._d.valueOf() + o * t), r && D.updateOffset(e, i || s));
}
var qb = Vh(1, "add"), Qb = Vh(-1, "subtract");
function Xh(e) {
  return typeof e == "string" || e instanceof String;
}
function Zb(e) {
  return bn(e) || Do(e) || Xh(e) || Jn(e) || nI(e) || eI(e) || e === null || e === void 0;
}
function eI(e) {
  var n = Gt(e) && !Iu(e), t = !1, r = [
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
function nI(e) {
  var n = Nn(e), t = !1;
  return n && (t = e.filter(function(r) {
    return !Jn(r) && Xh(e);
  }).length === 0), n && t;
}
function tI(e) {
  var n = Gt(e) && !Iu(e), t = !1, r = [
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
function rI(e, n) {
  var t = e.diff(n, "days", !0);
  return t < -6 ? "sameElse" : t < -1 ? "lastWeek" : t < 0 ? "lastDay" : t < 1 ? "sameDay" : t < 2 ? "nextDay" : t < 7 ? "nextWeek" : "sameElse";
}
function oI(e, n) {
  arguments.length === 1 && (arguments[0] ? Zb(arguments[0]) ? (e = arguments[0], n = void 0) : tI(arguments[0]) && (n = arguments[0], e = void 0) : (e = void 0, n = void 0));
  var t = e || Ee(), r = Bu(t, this).startOf("day"), o = D.calendarFormat(this, r) || "sameElse", i = n && (kn(n[o]) ? n[o].call(this, t) : n[o]);
  return this.format(
    i || this.localeData().calendar(o, this, Ee(t))
  );
}
function iI() {
  return new Uo(this);
}
function sI(e, n) {
  var t = bn(e) ? e : Ee(e);
  return this.isValid() && t.isValid() ? (n = mn(n) || "millisecond", n === "millisecond" ? this.valueOf() > t.valueOf() : t.valueOf() < this.clone().startOf(n).valueOf()) : !1;
}
function aI(e, n) {
  var t = bn(e) ? e : Ee(e);
  return this.isValid() && t.isValid() ? (n = mn(n) || "millisecond", n === "millisecond" ? this.valueOf() < t.valueOf() : this.clone().endOf(n).valueOf() < t.valueOf()) : !1;
}
function uI(e, n, t, r) {
  var o = bn(e) ? e : Ee(e), i = bn(n) ? n : Ee(n);
  return this.isValid() && o.isValid() && i.isValid() ? (r = r || "()", (r[0] === "(" ? this.isAfter(o, t) : !this.isBefore(o, t)) && (r[1] === ")" ? this.isBefore(i, t) : !this.isAfter(i, t))) : !1;
}
function _I(e, n) {
  var t = bn(e) ? e : Ee(e), r;
  return this.isValid() && t.isValid() ? (n = mn(n) || "millisecond", n === "millisecond" ? this.valueOf() === t.valueOf() : (r = t.valueOf(), this.clone().startOf(n).valueOf() <= r && r <= this.clone().endOf(n).valueOf())) : !1;
}
function cI(e, n) {
  return this.isSame(e, n) || this.isAfter(e, n);
}
function lI(e, n) {
  return this.isSame(e, n) || this.isBefore(e, n);
}
function dI(e, n, t) {
  var r, o, i;
  if (!this.isValid())
    return NaN;
  if (r = Bu(e, this), !r.isValid())
    return NaN;
  switch (o = (r.utcOffset() - this.utcOffset()) * 6e4, n = mn(n), n) {
    case "year":
      i = fi(this, r) / 12;
      break;
    case "month":
      i = fi(this, r);
      break;
    case "quarter":
      i = fi(this, r) / 3;
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
  return t ? i : rn(i);
}
function fi(e, n) {
  if (e.date() < n.date())
    return -fi(n, e);
  var t = (n.year() - e.year()) * 12 + (n.month() - e.month()), r = e.clone().add(t, "months"), o, i;
  return n - r < 0 ? (o = e.clone().add(t - 1, "months"), i = (n - r) / (r - o)) : (o = e.clone().add(t + 1, "months"), i = (n - r) / (o - r)), -(t + i) || 0;
}
D.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
D.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function hI() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function mI(e) {
  if (!this.isValid())
    return null;
  var n = e !== !0, t = n ? this.clone().utc() : this;
  return t.year() < 0 || t.year() > 9999 ? hi(
    t,
    n ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
  ) : kn(Date.prototype.toISOString) ? n ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", hi(t, "Z")) : hi(
    t,
    n ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
  );
}
function fI() {
  if (!this.isValid())
    return "moment.invalid(/* " + this._i + " */)";
  var e = "moment", n = "", t, r, o, i;
  return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", n = "Z"), t = "[" + e + '("]', r = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", o = "-MM-DD[T]HH:mm:ss.SSS", i = n + '[")]', this.format(t + r + o + i);
}
function pI(e) {
  e || (e = this.isUtc() ? D.defaultFormatUtc : D.defaultFormat);
  var n = hi(this, e);
  return this.localeData().postformat(n);
}
function TI(e, n) {
  return this.isValid() && (bn(e) && e.isValid() || Ee(e).isValid()) ? An({ to: this, from: e }).locale(this.locale()).humanize(!n) : this.localeData().invalidDate();
}
function EI(e) {
  return this.from(Ee(), e);
}
function OI(e, n) {
  return this.isValid() && (bn(e) && e.isValid() || Ee(e).isValid()) ? An({ from: this, to: e }).locale(this.locale()).humanize(!n) : this.localeData().invalidDate();
}
function RI(e) {
  return this.to(Ee(), e);
}
function Yh(e) {
  var n;
  return e === void 0 ? this._locale._abbr : (n = Zn(e), n != null && (this._locale = n), this);
}
var Kh = hn(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function(e) {
    return e === void 0 ? this.localeData() : this.locale(e);
  }
);
function $h() {
  return this._locale;
}
var ji = 1e3, $t = 60 * ji, Fi = 60 * $t, zh = (365 * 400 + 97) * 24 * Fi;
function zt(e, n) {
  return (e % n + n) % n;
}
function Jh(e, n, t) {
  return e < 100 && e >= 0 ? new Date(e + 400, n, t) - zh : new Date(e, n, t).valueOf();
}
function qh(e, n, t) {
  return e < 100 && e >= 0 ? Date.UTC(e + 400, n, t) - zh : Date.UTC(e, n, t);
}
function gI(e) {
  var n, t;
  if (e = mn(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (t = this._isUTC ? qh : Jh, e) {
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
      n = this._d.valueOf(), n -= zt(
        n + (this._isUTC ? 0 : this.utcOffset() * $t),
        Fi
      );
      break;
    case "minute":
      n = this._d.valueOf(), n -= zt(n, $t);
      break;
    case "second":
      n = this._d.valueOf(), n -= zt(n, ji);
      break;
  }
  return this._d.setTime(n), D.updateOffset(this, !0), this;
}
function NI(e) {
  var n, t;
  if (e = mn(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (t = this._isUTC ? qh : Jh, e) {
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
      n = this._d.valueOf(), n += Fi - zt(
        n + (this._isUTC ? 0 : this.utcOffset() * $t),
        Fi
      ) - 1;
      break;
    case "minute":
      n = this._d.valueOf(), n += $t - zt(n, $t) - 1;
      break;
    case "second":
      n = this._d.valueOf(), n += ji - zt(n, ji) - 1;
      break;
  }
  return this._d.setTime(n), D.updateOffset(this, !0), this;
}
function bI() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function II() {
  return Math.floor(this.valueOf() / 1e3);
}
function AI() {
  return new Date(this.valueOf());
}
function SI() {
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
function vI() {
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
function GI() {
  return this.isValid() ? this.toISOString() : null;
}
function CI() {
  return Au(this);
}
function DI() {
  return ut({}, z(this));
}
function UI() {
  return z(this).overflow;
}
function yI() {
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
y("N", ju);
y("NN", ju);
y("NNN", ju);
y("NNNN", VI);
y("NNNNN", WI);
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
y("yo", XI);
pe(["y", "yy", "yyy", "yyyy"], Be);
pe(["yo"], function(e, n, t, r) {
  var o;
  t._locale._eraYearOrdinalRegex && (o = e.match(t._locale._eraYearOrdinalRegex)), t._locale.eraYearOrdinalParse ? n[Be] = t._locale.eraYearOrdinalParse(e, o) : n[Be] = parseInt(e, 10);
});
function HI(e, n) {
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
function PI(e, n, t) {
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
function wI(e, n) {
  var t = e.since <= e.until ? 1 : -1;
  return n === void 0 ? D(e.since).year() : D(e.since).year() + (n - e.offset) * t;
}
function MI() {
  var e, n, t, r = this.localeData().eras();
  for (e = 0, n = r.length; e < n; ++e)
    if (t = this.clone().startOf("day").valueOf(), r[e].since <= t && t <= r[e].until || r[e].until <= t && t <= r[e].since)
      return r[e].name;
  return "";
}
function kI() {
  var e, n, t, r = this.localeData().eras();
  for (e = 0, n = r.length; e < n; ++e)
    if (t = this.clone().startOf("day").valueOf(), r[e].since <= t && t <= r[e].until || r[e].until <= t && t <= r[e].since)
      return r[e].narrow;
  return "";
}
function xI() {
  var e, n, t, r = this.localeData().eras();
  for (e = 0, n = r.length; e < n; ++e)
    if (t = this.clone().startOf("day").valueOf(), r[e].since <= t && t <= r[e].until || r[e].until <= t && t <= r[e].since)
      return r[e].abbr;
  return "";
}
function LI() {
  var e, n, t, r, o = this.localeData().eras();
  for (e = 0, n = o.length; e < n; ++e)
    if (t = o[e].since <= o[e].until ? 1 : -1, r = this.clone().startOf("day").valueOf(), o[e].since <= r && r <= o[e].until || o[e].until <= r && r <= o[e].since)
      return (this.year() - D(o[e].since).year()) * t + o[e].offset;
  return this.year();
}
function BI(e) {
  return ae(this, "_erasNameRegex") || Fu.call(this), e ? this._erasNameRegex : this._erasRegex;
}
function jI(e) {
  return ae(this, "_erasAbbrRegex") || Fu.call(this), e ? this._erasAbbrRegex : this._erasRegex;
}
function FI(e) {
  return ae(this, "_erasNarrowRegex") || Fu.call(this), e ? this._erasNarrowRegex : this._erasRegex;
}
function ju(e, n) {
  return n.erasAbbrRegex(e);
}
function VI(e, n) {
  return n.erasNameRegex(e);
}
function WI(e, n) {
  return n.erasNarrowRegex(e);
}
function XI(e, n) {
  return n._eraYearOrdinalRegex || Tr;
}
function Fu() {
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
y("G", fs);
y("g", fs);
y("GG", Oe, tn);
y("gg", Oe, tn);
y("GGGG", Uu, Du);
y("gggg", Uu, Du);
y("GGGGG", ms, ds);
y("ggggg", ms, ds);
Ho(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(e, n, t, r) {
    n[r.substr(0, 2)] = Q(e);
  }
);
Ho(["gg", "GG"], function(e, n, t, r) {
  n[r] = D.parseTwoDigitYear(e);
});
function YI(e) {
  return Qh.call(
    this,
    e,
    this.week(),
    this.weekday(),
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function KI(e) {
  return Qh.call(
    this,
    e,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function $I() {
  return $n(this.year(), 1, 4);
}
function zI() {
  return $n(this.isoWeekYear(), 1, 4);
}
function JI() {
  var e = this.localeData()._week;
  return $n(this.year(), e.dow, e.doy);
}
function qI() {
  var e = this.localeData()._week;
  return $n(this.weekYear(), e.dow, e.doy);
}
function Qh(e, n, t, r, o) {
  var i;
  return e == null ? to(this, r, o).year : (i = $n(e, r, o), n > i && (n = i), QI.call(this, e, n, t, r, o));
}
function QI(e, n, t, r, o) {
  var i = Uh(e, n, t, r, o), s = no(i.year, 0, i.dayOfYear);
  return this.year(s.getUTCFullYear()), this.month(s.getUTCMonth()), this.date(s.getUTCDate()), this;
}
x("Q", 0, "Qo", "quarter");
je("quarter", "Q");
Fe("quarter", 7);
y("Q", gh);
pe("Q", function(e, n) {
  n[Vn] = (Q(e) - 1) * 3;
});
function ZI(e) {
  return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3);
}
x("D", ["DD", 2], "Do", "date");
je("date", "D");
Fe("date", 9);
y("D", Oe);
y("DD", Oe, tn);
y("Do", function(e, n) {
  return e ? n._dayOfMonthOrdinalParse || n._ordinalParse : n._dayOfMonthOrdinalParseLenient;
});
pe(["D", "DD"], vn);
pe("Do", function(e, n) {
  n[vn] = Q(e.match(Oe)[0]);
});
var Zh = pr("Date", !0);
x("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
je("dayOfYear", "DDD");
Fe("dayOfYear", 4);
y("DDD", hs);
y("DDDD", Nh);
pe(["DDD", "DDDD"], function(e, n, t) {
  t._dayOfYear = Q(e);
});
function eA(e) {
  var n = Math.round(
    (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
  ) + 1;
  return e == null ? n : this.add(e - n, "d");
}
x("m", ["mm", 2], 0, "minute");
je("minute", "m");
Fe("minute", 14);
y("m", Oe);
y("mm", Oe, tn);
pe(["m", "mm"], Tn);
var nA = pr("Minutes", !1);
x("s", ["ss", 2], 0, "second");
je("second", "s");
Fe("second", 15);
y("s", Oe);
y("ss", Oe, tn);
pe(["s", "ss"], Wn);
var tA = pr("Seconds", !1);
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
y("S", hs, gh);
y("SS", hs, tn);
y("SSS", hs, Nh);
var _t, em;
for (_t = "SSSS"; _t.length <= 9; _t += "S")
  y(_t, Tr);
function rA(e, n) {
  n[St] = Q(("0." + e) * 1e3);
}
for (_t = "S"; _t.length <= 9; _t += "S")
  pe(_t, rA);
em = pr("Milliseconds", !1);
x("z", 0, 0, "zoneAbbr");
x("zz", 0, 0, "zoneName");
function oA() {
  return this._isUTC ? "UTC" : "";
}
function iA() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var A = Uo.prototype;
A.add = qb;
A.calendar = oI;
A.clone = iI;
A.diff = dI;
A.endOf = NI;
A.format = pI;
A.from = TI;
A.fromNow = EI;
A.to = OI;
A.toNow = RI;
A.get = aN;
A.invalidAt = UI;
A.isAfter = sI;
A.isBefore = aI;
A.isBetween = uI;
A.isSame = _I;
A.isSameOrAfter = cI;
A.isSameOrBefore = lI;
A.isValid = CI;
A.lang = Kh;
A.locale = Yh;
A.localeData = $h;
A.max = Cb;
A.min = Gb;
A.parsingFlags = DI;
A.set = uN;
A.startOf = gI;
A.subtract = Qb;
A.toArray = SI;
A.toObject = vI;
A.toDate = AI;
A.toISOString = mI;
A.inspect = fI;
typeof Symbol < "u" && Symbol.for != null && (A[Symbol.for("nodejs.util.inspect.custom")] = function() {
  return "Moment<" + this.format() + ">";
});
A.toJSON = GI;
A.toString = hI;
A.unix = II;
A.valueOf = bI;
A.creationData = yI;
A.eraName = MI;
A.eraNarrow = kI;
A.eraAbbr = xI;
A.eraYear = LI;
A.year = Dh;
A.isLeapYear = vN;
A.weekYear = YI;
A.isoWeekYear = KI;
A.quarter = A.quarters = ZI;
A.month = Gh;
A.daysInMonth = IN;
A.week = A.weeks = HN;
A.isoWeek = A.isoWeeks = PN;
A.weeksInYear = JI;
A.weeksInWeekYear = qI;
A.isoWeeksInYear = $I;
A.isoWeeksInISOWeekYear = zI;
A.date = Zh;
A.day = A.days = KN;
A.weekday = $N;
A.isoWeekday = zN;
A.dayOfYear = eA;
A.hour = A.hours = tb;
A.minute = A.minutes = nA;
A.second = A.seconds = tA;
A.millisecond = A.milliseconds = em;
A.utcOffset = xb;
A.utc = Bb;
A.local = jb;
A.parseZone = Fb;
A.hasAlignedHourOffset = Vb;
A.isDST = Wb;
A.isLocal = Yb;
A.isUtcOffset = Kb;
A.isUtc = Fh;
A.isUTC = Fh;
A.zoneAbbr = oA;
A.zoneName = iA;
A.dates = hn(
  "dates accessor is deprecated. Use date instead.",
  Zh
);
A.months = hn(
  "months accessor is deprecated. Use month instead",
  Gh
);
A.years = hn(
  "years accessor is deprecated. Use year instead",
  Dh
);
A.zone = hn(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  Lb
);
A.isDSTShifted = hn(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  Xb
);
function sA(e) {
  return Ee(e * 1e3);
}
function aA() {
  return Ee.apply(null, arguments).parseZone();
}
function nm(e) {
  return e;
}
var ue = vu.prototype;
ue.calendar = Kg;
ue.longDateFormat = qg;
ue.invalidDate = Zg;
ue.ordinal = tN;
ue.preparse = nm;
ue.postformat = nm;
ue.relativeTime = oN;
ue.pastFuture = iN;
ue.set = Xg;
ue.eras = HI;
ue.erasParse = PI;
ue.erasConvertYear = wI;
ue.erasAbbrRegex = jI;
ue.erasNameRegex = BI;
ue.erasNarrowRegex = FI;
ue.months = RN;
ue.monthsShort = gN;
ue.monthsParse = bN;
ue.monthsRegex = SN;
ue.monthsShortRegex = AN;
ue.week = CN;
ue.firstDayOfYear = yN;
ue.firstDayOfWeek = UN;
ue.weekdays = FN;
ue.weekdaysMin = WN;
ue.weekdaysShort = VN;
ue.weekdaysParse = YN;
ue.weekdaysRegex = JN;
ue.weekdaysShortRegex = qN;
ue.weekdaysMinRegex = QN;
ue.isPM = eb;
ue.meridiem = rb;
function Vi(e, n, t, r) {
  var o = Zn(), i = Mn().set(r, n);
  return o[t](i, e);
}
function tm(e, n, t) {
  if (Jn(e) && (n = e, e = void 0), e = e || "", n != null)
    return Vi(e, n, t, "month");
  var r, o = [];
  for (r = 0; r < 12; r++)
    o[r] = Vi(e, r, t, "month");
  return o;
}
function Vu(e, n, t, r) {
  typeof e == "boolean" ? (Jn(n) && (t = n, n = void 0), n = n || "") : (n = e, t = n, e = !1, Jn(n) && (t = n, n = void 0), n = n || "");
  var o = Zn(), i = e ? o._week.dow : 0, s, a = [];
  if (t != null)
    return Vi(n, (t + i) % 7, r, "day");
  for (s = 0; s < 7; s++)
    a[s] = Vi(n, (s + i) % 7, r, "day");
  return a;
}
function uA(e, n) {
  return tm(e, n, "months");
}
function _A(e, n) {
  return tm(e, n, "monthsShort");
}
function cA(e, n, t) {
  return Vu(e, n, t, "weekdays");
}
function lA(e, n, t) {
  return Vu(e, n, t, "weekdaysShort");
}
function dA(e, n, t) {
  return Vu(e, n, t, "weekdaysMin");
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
D.lang = hn(
  "moment.lang is deprecated. Use moment.locale instead.",
  pt
);
D.langData = hn(
  "moment.langData is deprecated. Use moment.localeData instead.",
  Zn
);
var xn = Math.abs;
function hA() {
  var e = this._data;
  return this._milliseconds = xn(this._milliseconds), this._days = xn(this._days), this._months = xn(this._months), e.milliseconds = xn(e.milliseconds), e.seconds = xn(e.seconds), e.minutes = xn(e.minutes), e.hours = xn(e.hours), e.months = xn(e.months), e.years = xn(e.years), this;
}
function rm(e, n, t, r) {
  var o = An(n, t);
  return e._milliseconds += r * o._milliseconds, e._days += r * o._days, e._months += r * o._months, e._bubble();
}
function mA(e, n) {
  return rm(this, e, n, 1);
}
function fA(e, n) {
  return rm(this, e, n, -1);
}
function Ec(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function pA() {
  var e = this._milliseconds, n = this._days, t = this._months, r = this._data, o, i, s, a, u;
  return e >= 0 && n >= 0 && t >= 0 || e <= 0 && n <= 0 && t <= 0 || (e += Ec(Ma(t) + n) * 864e5, n = 0, t = 0), r.milliseconds = e % 1e3, o = rn(e / 1e3), r.seconds = o % 60, i = rn(o / 60), r.minutes = i % 60, s = rn(i / 60), r.hours = s % 24, n += rn(s / 24), u = rn(om(n)), t += u, n -= Ec(Ma(u)), a = rn(t / 12), t %= 12, r.days = n, r.months = t, r.years = a, this;
}
function om(e) {
  return e * 4800 / 146097;
}
function Ma(e) {
  return e * 146097 / 4800;
}
function TA(e) {
  if (!this.isValid())
    return NaN;
  var n, t, r = this._milliseconds;
  if (e = mn(e), e === "month" || e === "quarter" || e === "year")
    switch (n = this._days + r / 864e5, t = this._months + om(n), e) {
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
function EA() {
  return this.isValid() ? this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + Q(this._months / 12) * 31536e6 : NaN;
}
function et(e) {
  return function() {
    return this.as(e);
  };
}
var OA = et("ms"), RA = et("s"), gA = et("m"), NA = et("h"), bA = et("d"), IA = et("w"), AA = et("M"), SA = et("Q"), vA = et("y");
function GA() {
  return An(this);
}
function CA(e) {
  return e = mn(e), this.isValid() ? this[e + "s"]() : NaN;
}
function Ht(e) {
  return function() {
    return this.isValid() ? this._data[e] : NaN;
  };
}
var DA = Ht("milliseconds"), UA = Ht("seconds"), yA = Ht("minutes"), HA = Ht("hours"), PA = Ht("days"), wA = Ht("months"), MA = Ht("years");
function kA() {
  return rn(this.days() / 7);
}
var Ln = Math.round, Xt = {
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
function xA(e, n, t, r, o) {
  return o.relativeTime(n || 1, !!t, e, r);
}
function LA(e, n, t, r) {
  var o = An(e).abs(), i = Ln(o.as("s")), s = Ln(o.as("m")), a = Ln(o.as("h")), u = Ln(o.as("d")), _ = Ln(o.as("M")), l = Ln(o.as("w")), c = Ln(o.as("y")), f = i <= t.ss && ["s", i] || i < t.s && ["ss", i] || s <= 1 && ["m"] || s < t.m && ["mm", s] || a <= 1 && ["h"] || a < t.h && ["hh", a] || u <= 1 && ["d"] || u < t.d && ["dd", u];
  return t.w != null && (f = f || l <= 1 && ["w"] || l < t.w && ["ww", l]), f = f || _ <= 1 && ["M"] || _ < t.M && ["MM", _] || c <= 1 && ["y"] || ["yy", c], f[2] = n, f[3] = +e > 0, f[4] = r, xA.apply(null, f);
}
function BA(e) {
  return e === void 0 ? Ln : typeof e == "function" ? (Ln = e, !0) : !1;
}
function jA(e, n) {
  return Xt[e] === void 0 ? !1 : n === void 0 ? Xt[e] : (Xt[e] = n, e === "s" && (Xt.ss = n - 1), !0);
}
function FA(e, n) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var t = !1, r = Xt, o, i;
  return typeof e == "object" && (n = e, e = !1), typeof e == "boolean" && (t = e), typeof n == "object" && (r = Object.assign({}, Xt, n), n.s != null && n.ss == null && (r.ss = n.s - 1)), o = this.localeData(), i = LA(this, !t, r, o), t && (i = o.pastFuture(+this, i)), o.postformat(i);
}
var Zs = Math.abs;
function wt(e) {
  return (e > 0) - (e < 0) || +e;
}
function gs() {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var e = Zs(this._milliseconds) / 1e3, n = Zs(this._days), t = Zs(this._months), r, o, i, s, a = this.asSeconds(), u, _, l, c;
  return a ? (r = rn(e / 60), o = rn(r / 60), e %= 60, r %= 60, i = rn(t / 12), t %= 12, s = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", u = a < 0 ? "-" : "", _ = wt(this._months) !== wt(a) ? "-" : "", l = wt(this._days) !== wt(a) ? "-" : "", c = wt(this._milliseconds) !== wt(a) ? "-" : "", u + "P" + (i ? _ + i + "Y" : "") + (t ? _ + t + "M" : "") + (n ? l + n + "D" : "") + (o || r || e ? "T" : "") + (o ? c + o + "H" : "") + (r ? c + r + "M" : "") + (e ? c + s + "S" : "")) : "P0D";
}
var te = Os.prototype;
te.isValid = Pb;
te.abs = hA;
te.add = mA;
te.subtract = fA;
te.as = TA;
te.asMilliseconds = OA;
te.asSeconds = RA;
te.asMinutes = gA;
te.asHours = NA;
te.asDays = bA;
te.asWeeks = IA;
te.asMonths = AA;
te.asQuarters = SA;
te.asYears = vA;
te.valueOf = EA;
te._bubble = pA;
te.clone = GA;
te.get = CA;
te.milliseconds = DA;
te.seconds = UA;
te.minutes = yA;
te.hours = HA;
te.days = PA;
te.weeks = kA;
te.months = wA;
te.years = MA;
te.humanize = FA;
te.toISOString = gs;
te.toString = gs;
te.toJSON = gs;
te.locale = Yh;
te.localeData = $h;
te.toIsoString = hn(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  gs
);
te.lang = Kh;
x("X", 0, 0, "unix");
x("x", 0, 0, "valueOf");
y("x", fs);
y("X", cN);
pe("X", function(e, n, t) {
  t._d = new Date(parseFloat(e) * 1e3);
});
pe("x", function(e, n, t) {
  t._d = new Date(Q(e));
});
//! moment.js
D.version = "2.29.4";
Vg(Ee);
D.fn = A;
D.min = Db;
D.max = Ub;
D.now = yb;
D.utc = Mn;
D.unix = sA;
D.months = uA;
D.isDate = Do;
D.locale = pt;
D.invalid = cs;
D.duration = An;
D.isMoment = bn;
D.weekdays = cA;
D.parseZone = aA;
D.localeData = Zn;
D.isDuration = mi;
D.monthsShort = _A;
D.weekdaysMin = dA;
D.defineLocale = wu;
D.updateLocale = ab;
D.locales = ub;
D.weekdaysShort = lA;
D.normalizeUnits = mn;
D.relativeTimeRounding = BA;
D.relativeTimeThreshold = jA;
D.calendarFormat = rI;
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
class VA {
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
const WA = (e) => {
  const { Spring: n } = us(), [t, r] = n.useSpring(() => ({
    opacity: 1,
    x: 0
  }));
  return Qc(e, () => ({
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
}, XA = Ce.div`
  color: ${nn("light")};
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
`, YA = Ce.span`
  color: ${nn("light")};
  display: block;
  margin-top: 17px;
  cursor: pointer;
  font-size: ${({ theme: e }) => e.fz7};
  em {
    color: ${({ $isError: e }) => e ? "red" : nn("light")};
    font-weight: bold;
    font-style: italic;
  }
`, KA = Qt(
  ({ children: e }, n) => {
    const t = Z(null), r = () => {
      t.current.scrollTo(0, t.current.scrollHeight);
    };
    return Qc(n, () => ({
      scrollToBottom: () => {
        r(), setTimeout(r, 50);
      }
    })), /* @__PURE__ */ V(XA, { ref: t, children: e });
  }
), $A = Qn(
  Qt((e, n) => {
    const t = Z(null), r = Z(null), { isTerminalOpened: o } = iT(), { executeMessages: i } = mr(), { spring: s, SpringDiv: a } = WA(n), u = () => {
      r.current.scrollIntoView({ behavior: "smooth" });
    };
    return Ge(() => {
      t.current.scrollToBottom();
    }, [i.length, o]), /* @__PURE__ */ _n(KA, { ref: t, children: [
      "CodeGear output console.",
      /* @__PURE__ */ _n(a, { style: { ...s }, children: [
        i.map((_, l) => /* @__PURE__ */ _n(
          YA,
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
          l
        )),
        /* @__PURE__ */ V("div", { ref: r })
      ] })
    ] });
  })
), zA = [
  { label: "Terminal", key: "terminal" },
  { label: "Test cases", key: "test_cases" }
], JA = () => {
  const e = hr(), n = e.state.selectedTerminalTab, t = Et(
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
    val: zA
  };
}, qA = Ce.div`
  ${ah({
  right: "44px",
  top: "23px"
})}
  ${yt("flex-end")};
  gap: 23px;
  ${ln("100px", "22px")};
  cursor: pointer;
  svg {
    path {
      stroke: ${nn("secondaryGrey")};
      ${({ theme: e }) => Ca(e.light)};
    }
    ${ln("22px")}
    color: ${nn("secondaryGrey")};
    ${({ theme: e }) => Ca(e.light)}
  }
`, QA = Ce(nl)`
  ${ig(0, 6)};

  .ant-tabs-nav::before {
    border-bottom: none;
  }
  .ant-tabs-tab-active div {
    color: ${di("light")};
  }
  .ant-tabs-tab:hover,
  .ant-tabs-tab:active {
    color: ${nn("light")};
  }
  .ant-tabs-ink-bar {
    background: ${nn("light")};
  }
  .ant-tabs-tab {
    padding: 7px 0 !important;
  }

  font-size: ${({ theme: e }) => e.fz6};
`, ZA = Ce.h3`
  color: ${nn("light")};
  font-size: ${({ theme: e }) => e.fz7};
`, yS = Qn(() => {
  const e = hr(), { isTerminalOpened: n } = e.state, t = JA(), r = bt(), o = Z(), i = (u) => {
    t.set(u);
  }, s = Et(() => {
    e.update({ isTerminalOpened: !1 });
  }, []), a = async () => {
    await o.current?.close(), r.terminal.clearExecuteMessages();
  };
  return /* @__PURE__ */ _n(cg, { onClose: s, isOpen: n, height: 300, children: [
    /* @__PURE__ */ V(
      QA,
      {
        items: t.val,
        size: "large",
        onChange: i,
        activeKey: t.key
      }
    ),
    /* @__PURE__ */ V(Ra, { when: t.key === "terminal", children: /* @__PURE__ */ V($A, { ref: o }) }),
    /* @__PURE__ */ V(Ra, { when: t.key === "test_cases", children: /* @__PURE__ */ V(ZA, { children: "Test cases are not supported yet." }) }),
    /* @__PURE__ */ _n(qA, { children: [
      /* @__PURE__ */ V(iR, { onClick: a }),
      /* @__PURE__ */ V(oR, { onClick: s })
    ] })
  ] });
});
class e1 {
  constructor(n) {
    Rt(this), this.state = n, this.getters = n.getters, this.tabs = new Sg(n), this.editor = new Xp(n), this.terminal = new VA(n);
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
    this.state.storage = new Xd(n);
  }
}
class n1 {
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
    return mg.includes(n);
  }
}
const t1 = `// Hello World! Here you can edit the code in 10 different languages. 😎

const camel = 'I like apples'

// Run the code and look in the terminal.
console.log(camel)

// You can edit and run the code in real time
// and your friends will see it! Sign in if you want to see more features.
`, r1 = "javascript", o1 = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMjMiIHZpZXdCb3g9IjAgMCAxNyAyMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0Ljk4OTcgMTUuNDA5NEwxNC40MjE2IDE1Ljc3NTJDMTQuNzcxMiAxNS40NTUxIDE1LjAzMzQgMTQuOTk3OCAxNS4wMzM0IDE0LjU0MDZDMTUuMDMzNCAxMy43NjMzIDE0LjY4MzggMTMuMTIzMSAxMy41NDc1IDEyLjU3NDRMMy44NDU3NSA4LjEzOTA3QzEuODc5MTcgNy4yMjQ1NiAwLjY1NTUxOCA2LjA4MTQ0IDAuNjU1NTE4IDQuMDIzODFDMC42NTU1MTggMi4xNDkwOCAxLjU3MzI1IDAuOTE0NTAyIDIuOTcxNzEgMEMyLjc1MzIgMC4zMjAwNzYgMi42MjIxIDAuNzMxNjAyIDIuNjIyMSAxLjIzNDU4QzIuNjIyMSAyLjM3NzcgMy41Mzk4NCAyLjg4MDY4IDQuNDU3NTcgMy4yOTIyMUwxMy44OTcyIDcuNjM2MDlDMTUuNjAxNSA4LjQxMzQyIDE3IDkuNjQ3OTkgMTcgMTEuNzk3MUMxNyAxMy41MzQ2IDE2LjIxMzQgMTQuNjMyIDE0Ljk4OTcgMTUuNDA5NFoiIGZpbGw9IiMwMTY4QTIiLz4KPHBhdGggZD0iTTEwLjU5MzMgMTEuMTM1OUwxMy42NTI0IDEyLjU1MzRDMTQuNzg4NyAxMy4xMDIxIDE1LjEzODMgMTMuNjk2NSAxNS4xMzgzIDE0LjUxOTZDMTUuMTM4MyAxNC45NzY4IDE0Ljg3NjEgMTUuNDM0MSAxNC41MjY0IDE1Ljc1NDJMOS4zNjk2MyAxMy4zNzY1TDEwLjI0MzcgMTIuODczNUMxMC45ODY2IDEyLjQ2MiAxMS4yMDUxIDEyLjE4NzYgMTEuMjA1MSAxMS45MTMzQzExLjI0ODggMTEuNTkzMiAxMS4wNzQgMTEuMzY0NiAxMC41OTMzIDExLjEzNTlaIiBmaWxsPSIjMDE2OEExIi8+CjxwYXRoIGQ9Ik01LjE1NjgxIDIyLjA4NTRDNC40NTc1OCAyMi40OTcgMy44NDU3NiAyMi43NzEzIDMuMTkwMjMgMjIuNzcxM0MxLjQ4NTg2IDIyLjc3MTMgMC4wODc0MDM1IDIxLjMwODEgMCAxOS41NzA1TDMuMjc3NjMgMTcuNTEyOUw4LjQzNDQ0IDE5LjkzNjNMNS4xNTY4MSAyMi4wODU0WiIgZmlsbD0iIzAxNjhBMSIvPgo8cGF0aCBkPSJNNi45MzI1NiAxMy4yODAxTDQuNDg1MjYgMTIuMTM3QzMuMzkyNzEgMTEuNjM0IDIuMzg3NTcgMTEuMjIyNSAyLjM4NzU3IDkuOTQyMTZDMi4zODc1NyA5LjMwMiAyLjU2MjM4IDguOTM2MiAyLjg2ODI5IDguNjE2MTNMOC4wMjUxIDEwLjk5MzhMNi43NTc3NSAxMS43NzEyQzYuNDA4MTQgMTEuOTk5OCA2LjE0NTkzIDEyLjE4MjcgNi4xNDU5MyAxMi41MDI4QzYuMTQ1OTMgMTIuNzc3MSA2LjQ5NTU0IDEzLjA1MTUgNi45MzI1NiAxMy4yODAxWiIgZmlsbD0iIzE1NTQ3NyIvPgo8cGF0aCBkPSJNMTUuOTA3NCAyM0MxNC41OTY0IDIxLjk0ODMgMTMuMTk3OSAyMS4yNjI0IDExLjUzNzMgMjAuNDM5NEwzLjc1ODM1IDE2LjgyNzFDMS43OTE3NyAxNS45MTI2IDAuNDgwNzEzIDE0LjY3OCAwLjQ4MDcxMyAxMi42NjYxQzAuNDgwNzEzIDEwLjY1NDIgMS4zOTg0NSA5LjY5Mzk5IDIuNTc4NCA4LjkxNjY2TDMuMDE1NDIgOC42NDIzMUMyLjcwOTUgOC45NjIzOSAyLjUzNDcgOS4zMjgxOSAyLjUzNDcgOS45NjgzNEMyLjUzNDcgMTEuMjAyOSAzLjU4MzU0IDExLjY2MDIgNC42MzIzOCAxMi4xNjMxTDEzLjY3ODcgMTYuMzI0MUMxNS4yNTE5IDE3LjAxIDE2LjY5NDEgMTguMjQ0NiAxNi42OTQxIDIwLjM0NzlDMTYuNzgxNSAyMS40OTExIDE2LjM0NDUgMjIuNDk3IDE1LjkwNzQgMjNaIiBmaWxsPSIjMTU1NDc3Ii8+Cjwvc3ZnPgo=", i1 = Ce.div`
  ${ln("23%", "28px")}
  ${yt("flex-start", "center")}
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
const s1 = ({
  openFile: e,
  saveFile: n,
  createTab: t,
  runCode: r
}) => /* @__PURE__ */ _n(i1, { children: [
  /* @__PURE__ */ V(ef, { to: kO.MAIN, children: /* @__PURE__ */ V("img", { src: o1, alt: "" }) }),
  /* @__PURE__ */ V(yr, { type: "dashed", size: "small", onClick: e, children: "Open" }),
  /* @__PURE__ */ V(yr, { type: "dashed", size: "small", onClick: n, children: "Save" }),
  /* @__PURE__ */ V(yr, { type: "dashed", size: "small", onClick: t, children: "New" }),
  /* @__PURE__ */ V(yr, { type: "dashed", size: "small", onClick: r, children: "Run" })
] }), HS = Ce.div`
  background: ${({ theme: e }) => e.grey};
  border-right: 2px solid ${({ theme: e }) => e.lightGrey};
  box-sizing: border-box;
  ${ln("52px", "100%")};
  ${yt("space-between", "center", "column")};
  padding-bottom: 15px;
  z-index: 3;
`, a1 = Ce.div`
  ${ln("23px")}
  svg {
    ${ln()}
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
`, u1 = Ce.div`
  ${ln("23%", "100%")};
  ${yt("flex-start", "center")};
`;
Ce(a1)`
  margin-top: 0;
  margin-left: 20px;
  svg {
    color: ${({ theme: e, $disabled: n }) => n ? e.secondaryGrey : e.light};
  }
`;
const _1 = Qn(
  ({ isDisabled: e, runCode: n }) => /* @__PURE__ */ V(u1, { children: /* @__PURE__ */ V(
    sR,
    {
      type: "primary",
      onClick: n,
      disabled: e,
      override: "#38a886",
      children: "Run Code"
    }
  ) })
), c1 = {
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
class l1 {
  constructor(n) {
    Rt(this), this.state = n, this.getters = n.getters, this.actions = n.actions;
  }
  async requestCodeExecution() {
    const { NOT_SUPPORTED: n, ERRORS_IN_CODE: t, SUCCESS: r, NETWORK_ERROR: o } = c1;
    if (!this.getters.isAllowedToExecute())
      return n;
    const i = this.getters.getActiveTab(), s = {
      code: i.content,
      language: i.lang
    };
    try {
      const a = await wO.post(
        PO.CODE_EXECUTOR_API,
        s
      );
      return this.actions.terminal.addExecuteMessage(a.data), a.data.error ? t : r;
    } catch {
      return o;
    }
  }
}
const d1 = () => {
  const { codeRunner: e } = aT(), n = hr(), t = QO();
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
var h1 = Object.defineProperty, m1 = (e, n) => {
  for (var t in n)
    h1(e, t, { get: n[t], enumerable: !0 });
}, dn = {};
m1(dn, {
  assign: () => dm,
  colors: () => Tt,
  createStringInterpolator: () => Ju,
  skipAnimation: () => lm,
  to: () => cm,
  willAdvance: () => qu
});
var Wu = wo(), X = (e) => Po(e, Wu), Xu = wo();
X.write = (e) => Po(e, Xu);
var Ns = wo();
X.onStart = (e) => Po(e, Ns);
var Yu = wo();
X.onFrame = (e) => Po(e, Yu);
var Ku = wo();
X.onFinish = (e) => Po(e, Ku);
var Jt = [];
X.setTimeout = (e, n) => {
  const t = X.now() + n, r = () => {
    const i = Jt.findIndex((s) => s.cancel == r);
    ~i && Jt.splice(i, 1), lt -= ~i ? 1 : 0;
  }, o = { time: t, handler: e, cancel: r };
  return Jt.splice(im(t), 0, o), lt += 1, sm(), o;
};
var im = (e) => ~(~Jt.findIndex((n) => n.time > e) || ~Jt.length);
X.cancel = (e) => {
  Ns.delete(e), Yu.delete(e), Ku.delete(e), Wu.delete(e), Xu.delete(e);
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
    Ns.delete(t), n = null;
  }, r;
};
var $u = typeof window < "u" ? window.requestAnimationFrame : (
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  () => {
  }
);
X.use = (e) => $u = e;
X.now = typeof performance < "u" ? () => performance.now() : Date.now;
X.batchedUpdates = (e) => e();
X.catch = console.error;
X.frameLoop = "always";
X.advance = () => {
  X.frameLoop !== "demand" ? console.warn(
    "Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"
  ) : um();
};
var ct = -1, lt = 0, ka = !1;
function Po(e, n) {
  ka ? (n.delete(e), e(0)) : (n.add(e), sm());
}
function sm() {
  ct < 0 && (ct = 0, X.frameLoop !== "demand" && $u(am));
}
function f1() {
  ct = -1;
}
function am() {
  ~ct && ($u(am), X.batchedUpdates(um));
}
function um() {
  const e = ct;
  ct = X.now();
  const n = im(ct);
  if (n && (_m(Jt.splice(0, n), (t) => t.handler()), lt -= n), !lt) {
    f1();
    return;
  }
  Ns.flush(), Wu.flush(e ? Math.min(64, ct - e) : 16.667), Yu.flush(), Xu.flush(), Ku.flush();
}
function wo() {
  let e = /* @__PURE__ */ new Set(), n = e;
  return {
    add(t) {
      lt += n == e && !e.has(t) ? 1 : 0, e.add(t);
    },
    delete(t) {
      return lt -= n == e && e.has(t) ? 1 : 0, e.delete(t);
    },
    flush(t) {
      n.size && (e = /* @__PURE__ */ new Set(), lt -= n.size, _m(n, (r) => r(t) && e.add(r)), lt += e.size, n = e);
    }
  };
}
function _m(e, n) {
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
var p1 = (e, n, t) => Object.defineProperty(e, n, { value: t, writable: !0, configurable: !0 }), b = {
  arr: Array.isArray,
  obj: (e) => !!e && e.constructor.name === "Object",
  fun: (e) => typeof e == "function",
  str: (e) => typeof e == "string",
  num: (e) => typeof e == "number",
  und: (e) => e === void 0
};
function Bn(e, n) {
  if (b.arr(e)) {
    if (!b.arr(n) || e.length !== n.length)
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
  if (b.arr(e)) {
    for (let r = 0; r < e.length; r++)
      n.call(t, e[r], `${r}`);
    return;
  }
  for (const r in e)
    e.hasOwnProperty(r) && n.call(t, e[r], r);
}
var We = (e) => b.und(e) ? [] : b.arr(e) ? e : [e];
function jr(e, n) {
  if (e.size) {
    const t = Array.from(e);
    e.clear(), L(t, n);
  }
}
var Pr = (e, ...n) => jr(e, (t) => t(...n)), zu = () => typeof window > "u" || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent), Ju, cm, Tt = null, lm = !1, qu = xa, dm = (e) => {
  e.to && (cm = e.to), e.now && (X.now = e.now), e.colors !== void 0 && (Tt = e.colors), e.skipAnimation != null && (lm = e.skipAnimation), e.createStringInterpolator && (Ju = e.createStringInterpolator), e.requestAnimationFrame && X.use(e.requestAnimationFrame), e.batchedUpdates && (X.batchedUpdates = e.batchedUpdates), e.willAdvance && (qu = e.willAdvance), e.frameLoop && (X.frameLoop = e.frameLoop);
}, Fr = /* @__PURE__ */ new Set(), un = [], ea = [], Wi = 0, Mo = {
  get idle() {
    return !Fr.size && !un.length;
  },
  /** Advance the given animation on every frame until idle. */
  start(e) {
    Wi > e.priority ? (Fr.add(e), X.onStart(T1)) : (hm(e), X(La));
  },
  /** Advance all animations by the given time. */
  advance: La,
  /** Call this when an animation's priority changes. */
  sort(e) {
    if (Wi)
      X.onFrame(() => Mo.sort(e));
    else {
      const n = un.indexOf(e);
      ~n && (un.splice(n, 1), mm(e));
    }
  },
  /**
   * Clear all animations. For testing purposes.
   *
   * ☠️ Never call this from within the frameloop.
   */
  clear() {
    un = [], Fr.clear();
  }
};
function T1() {
  Fr.forEach(hm), Fr.clear(), X(La);
}
function hm(e) {
  un.includes(e) || mm(e);
}
function mm(e) {
  un.splice(
    E1(un, (n) => n.priority > e.priority),
    0,
    e
  );
}
function La(e) {
  const n = ea;
  for (let t = 0; t < un.length; t++) {
    const r = un[t];
    Wi = r.priority, r.idle || (qu(r), r.advance(e), r.idle || n.push(r));
  }
  return Wi = 0, ea = un, ea.length = 0, un = n, un.length > 0;
}
function E1(e, n) {
  const t = e.findIndex(n);
  return t < 0 ? e.length : t;
}
var O1 = (e, n, t) => Math.min(Math.max(t, e), n), R1 = {
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
function bs(...e) {
  return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)";
}
var g1 = new RegExp("rgb" + bs(En, En, En)), N1 = new RegExp("rgba" + bs(En, En, En, En)), b1 = new RegExp("hsl" + bs(En, Xi, Xi)), I1 = new RegExp(
  "hsla" + bs(En, Xi, Xi, En)
), A1 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, S1 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, v1 = /^#([0-9a-fA-F]{6})$/, G1 = /^#([0-9a-fA-F]{8})$/;
function C1(e) {
  let n;
  return typeof e == "number" ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (n = v1.exec(e)) ? parseInt(n[1] + "ff", 16) >>> 0 : Tt && Tt[e] !== void 0 ? Tt[e] : (n = g1.exec(e)) ? (Mt(n[1]) << 24 | // r
  Mt(n[2]) << 16 | // g
  Mt(n[3]) << 8 | // b
  255) >>> // a
  0 : (n = N1.exec(e)) ? (Mt(n[1]) << 24 | // r
  Mt(n[2]) << 16 | // g
  Mt(n[3]) << 8 | // b
  gc(n[4])) >>> // a
  0 : (n = A1.exec(e)) ? parseInt(
    n[1] + n[1] + // r
    n[2] + n[2] + // g
    n[3] + n[3] + // b
    "ff",
    // a
    16
  ) >>> 0 : (n = G1.exec(e)) ? parseInt(n[1], 16) >>> 0 : (n = S1.exec(e)) ? parseInt(
    n[1] + n[1] + // r
    n[2] + n[2] + // g
    n[3] + n[3] + // b
    n[4] + n[4],
    // a
    16
  ) >>> 0 : (n = b1.exec(e)) ? (Oc(
    Rc(n[1]),
    // h
    Jo(n[2]),
    // s
    Jo(n[3])
    // l
  ) | 255) >>> // a
  0 : (n = I1.exec(e)) ? (Oc(
    Rc(n[1]),
    // h
    Jo(n[2]),
    // s
    Jo(n[3])
    // l
  ) | gc(n[4])) >>> // a
  0 : null;
}
function na(e, n, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? e + (n - e) * 6 * t : t < 1 / 2 ? n : t < 2 / 3 ? e + (n - e) * (2 / 3 - t) * 6 : e;
}
function Oc(e, n, t) {
  const r = t < 0.5 ? t * (1 + n) : t + n - t * n, o = 2 * t - r, i = na(o, r, e + 1 / 3), s = na(o, r, e), a = na(o, r, e - 1 / 3);
  return Math.round(i * 255) << 24 | Math.round(s * 255) << 16 | Math.round(a * 255) << 8;
}
function Mt(e) {
  const n = parseInt(e, 10);
  return n < 0 ? 0 : n > 255 ? 255 : n;
}
function Rc(e) {
  return (parseFloat(e) % 360 + 360) % 360 / 360;
}
function gc(e) {
  const n = parseFloat(e);
  return n < 0 ? 0 : n > 1 ? 255 : Math.round(n * 255);
}
function Jo(e) {
  const n = parseFloat(e);
  return n < 0 ? 0 : n > 100 ? 1 : n / 100;
}
function Nc(e) {
  let n = C1(e);
  if (n === null)
    return e;
  n = n || 0;
  const t = (n & 4278190080) >>> 24, r = (n & 16711680) >>> 16, o = (n & 65280) >>> 8, i = (n & 255) / 255;
  return `rgba(${t}, ${r}, ${o}, ${i})`;
}
var _r = (e, n, t) => {
  if (b.fun(e))
    return e;
  if (b.arr(e))
    return _r({
      range: e,
      output: n,
      extrapolate: t
    });
  if (b.str(e.output[0]))
    return Ju(e);
  const r = e, o = r.output, i = r.range || [0, 1], s = r.extrapolateLeft || r.extrapolate || "extend", a = r.extrapolateRight || r.extrapolate || "extend", u = r.easing || ((_) => _);
  return (_) => {
    const l = U1(_, i);
    return D1(
      _,
      i[l],
      i[l + 1],
      o[l],
      o[l + 1],
      u,
      s,
      a,
      r.map
    );
  };
};
function D1(e, n, t, r, o, i, s, a, u) {
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
function U1(e, n) {
  for (var t = 1; t < n.length - 1 && !(n[t] >= e); ++t)
    ;
  return t - 1;
}
var y1 = (e, n = "end") => (t) => {
  t = n === "end" ? Math.min(t, 0.999) : Math.max(t, 1e-3);
  const r = t * e, o = n === "end" ? Math.floor(r) : Math.ceil(r);
  return O1(0, 1, o / e);
}, Yi = 1.70158, qo = Yi * 1.525, bc = Yi + 1, Ic = 2 * Math.PI / 3, Ac = 2 * Math.PI / 4.5, Qo = (e) => e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375 : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375, fm = {
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
  easeInBack: (e) => bc * e * e * e - Yi * e * e,
  easeOutBack: (e) => 1 + bc * Math.pow(e - 1, 3) + Yi * Math.pow(e - 1, 2),
  easeInOutBack: (e) => e < 0.5 ? Math.pow(2 * e, 2) * ((qo + 1) * 2 * e - qo) / 2 : (Math.pow(2 * e - 2, 2) * ((qo + 1) * (e * 2 - 2) + qo) + 2) / 2,
  easeInElastic: (e) => e === 0 ? 0 : e === 1 ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((e * 10 - 10.75) * Ic),
  easeOutElastic: (e) => e === 0 ? 0 : e === 1 ? 1 : Math.pow(2, -10 * e) * Math.sin((e * 10 - 0.75) * Ic) + 1,
  easeInOutElastic: (e) => e === 0 ? 0 : e === 1 ? 1 : e < 0.5 ? -(Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * Ac)) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * Ac) / 2 + 1,
  easeInBounce: (e) => 1 - Qo(1 - e),
  easeOutBounce: Qo,
  easeInOutBounce: (e) => e < 0.5 ? (1 - Qo(1 - 2 * e)) / 2 : (1 + Qo(2 * e - 1)) / 2,
  steps: y1
}, oo = Symbol.for("FluidValue.get"), cr = Symbol.for("FluidValue.observers"), on = (e) => !!(e && e[oo]), Ke = (e) => e && e[oo] ? e[oo]() : e, Sc = (e) => e[cr] || null;
function H1(e, n) {
  e.eventObserved ? e.eventObserved(n) : e(n);
}
function io(e, n) {
  const t = e[cr];
  t && t.forEach((r) => {
    H1(r, n);
  });
}
var pm = class {
  constructor(e) {
    if (!e && !(e = this.get))
      throw Error("Unknown getter");
    P1(this, e);
  }
}, P1 = (e, n) => Tm(e, oo, n);
function Er(e, n) {
  if (e[oo]) {
    let t = e[cr];
    t || Tm(e, cr, t = /* @__PURE__ */ new Set()), t.has(n) || (t.add(n), e.observerAdded && e.observerAdded(t.size, n));
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
var Tm = (e, n, t) => Object.defineProperty(e, n, {
  value: t,
  writable: !0,
  configurable: !0
}), pi = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, w1 = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi, vc = new RegExp(`(${pi.source})(%|[a-z]+)`, "i"), M1 = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi, Is = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/, Em = (e) => {
  const [n, t] = k1(e);
  if (!n || zu())
    return e;
  const r = window.getComputedStyle(document.documentElement).getPropertyValue(n);
  if (r)
    return r.trim();
  if (t && t.startsWith("--")) {
    const o = window.getComputedStyle(document.documentElement).getPropertyValue(t);
    return o || e;
  } else {
    if (t && Is.test(t))
      return Em(t);
    if (t)
      return t;
  }
  return e;
}, k1 = (e) => {
  const n = Is.exec(e);
  if (!n)
    return [,];
  const [, t, r] = n;
  return [t, r];
}, ta, x1 = (e, n, t, r, o) => `rgba(${Math.round(n)}, ${Math.round(t)}, ${Math.round(r)}, ${o})`, Om = (e) => {
  ta || (ta = Tt ? (
    // match color names, ignore partial matches
    new RegExp(`(${Object.keys(Tt).join("|")})(?!\\w)`, "g")
  ) : (
    // never match
    /^\b$/
  ));
  const n = e.output.map((i) => Ke(i).replace(Is, Em).replace(w1, Nc).replace(ta, Nc)), t = n.map((i) => i.match(pi).map(Number)), o = t[0].map(
    (i, s) => t.map((a) => {
      if (!(s in a))
        throw Error('The arity of each "output" value must be equal');
      return a[s];
    })
  ).map(
    (i) => _r({ ...e, output: i })
  );
  return (i) => {
    const s = !vc.test(n[0]) && n.find((u) => vc.test(u))?.replace(pi, "");
    let a = 0;
    return n[0].replace(
      pi,
      () => `${o[a++](i)}${s || ""}`
    ).replace(M1, x1);
  };
}, Qu = "react-spring: ", Rm = (e) => {
  const n = e;
  let t = !1;
  if (typeof n != "function")
    throw new TypeError(`${Qu}once requires a function parameter`);
  return (...r) => {
    t || (n(...r), t = !0);
  };
}, L1 = Rm(console.warn);
function gm() {
  L1(
    `${Qu}The "interpolate" function is deprecated in v9 (use "to" instead)`
  );
}
var B1 = Rm(console.warn);
function j1() {
  B1(
    `${Qu}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`
  );
}
function As(e) {
  return b.str(e) && (e[0] == "#" || /\d/.test(e) || // Do not identify a CSS variable as an AnimatedString if its SSR
  !zu() && Is.test(e) || e in (Tt || {}));
}
var kt, Ti = /* @__PURE__ */ new WeakMap(), F1 = (e) => e.forEach(({ target: n, contentRect: t }) => Ti.get(n)?.forEach((r) => r(t)));
function V1(e, n) {
  kt || typeof ResizeObserver < "u" && (kt = new ResizeObserver(F1));
  let t = Ti.get(n);
  return t || (t = /* @__PURE__ */ new Set(), Ti.set(n, t)), t.add(e), kt && kt.observe(n), () => {
    const r = Ti.get(n);
    r && (r.delete(e), !r.size && kt && kt.unobserve(n));
  };
}
var Ei = /* @__PURE__ */ new Set(), vr, W1 = () => {
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
}, X1 = (e) => (Ei.add(e), vr || (vr = W1()), () => {
  Ei.delete(e), !Ei.size && vr && (vr(), vr = void 0);
}), Nm = (e, { container: n = document.documentElement } = {}) => n === document.documentElement ? X1(e) : V1(e, n), Y1 = (e, n, t) => n - e === 0 ? 1 : (t - e) / (n - e), K1 = {
  x: {
    length: "Width",
    position: "Left"
  },
  y: {
    length: "Height",
    position: "Top"
  }
}, $1 = class {
  constructor(e, n) {
    this.createAxis = () => ({
      current: 0,
      progress: 0,
      scrollLength: 0
    }), this.updateAxis = (t) => {
      const r = this.info[t], { length: o, position: i } = K1[t];
      r.current = this.container[`scroll${i}`], r.scrollLength = this.container["scroll" + o] - this.container["client" + o], r.progress = Y1(0, r.scrollLength, r.current);
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
}, Gr = /* @__PURE__ */ new WeakMap(), Gc = /* @__PURE__ */ new WeakMap(), ra = /* @__PURE__ */ new WeakMap(), Cc = (e) => e === document.documentElement ? window : e, z1 = (e, { container: n = document.documentElement } = {}) => {
  let t = ra.get(n);
  t || (t = /* @__PURE__ */ new Set(), ra.set(n, t));
  const r = new $1(e, n);
  if (t.add(r), !Gr.has(n)) {
    const i = () => (t?.forEach((a) => a.advance()), !0);
    Gr.set(n, i);
    const s = Cc(n);
    window.addEventListener("resize", i, { passive: !0 }), n !== document.documentElement && Gc.set(n, Nm(i, { container: n })), s.addEventListener("scroll", i, { passive: !0 });
  }
  const o = Gr.get(n);
  return X(o), () => {
    X.cancel(o);
    const i = ra.get(n);
    if (!i || (i.delete(r), i.size))
      return;
    const s = Gr.get(n);
    Gr.delete(n), s && (Cc(n).removeEventListener("scroll", s), window.removeEventListener("resize", s), Gc.get(n)?.());
  };
};
function J1(e) {
  const n = Z(null);
  return n.current === null && (n.current = e()), n.current;
}
var Je = zu() ? Ge : Km, q1 = () => {
  const e = Z(!1);
  return Je(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
};
function Zu() {
  const e = qe()[1], n = q1();
  return () => {
    n.current && e(Math.random());
  };
}
function Q1(e, n) {
  const [t] = qe(
    () => ({
      inputs: n,
      result: e()
    })
  ), r = Z(), o = r.current;
  let i = o;
  return i ? n && i.inputs && Z1(n, i.inputs) || (i = {
    inputs: n,
    result: e()
  }) : i = t, Ge(() => {
    r.current = i, o == t && (t.inputs = t.result = void 0);
  }, [i]), i.result;
}
function Z1(e, n) {
  if (e.length !== n.length)
    return !1;
  for (let t = 0; t < e.length; t++)
    if (e[t] !== n[t])
      return !1;
  return !0;
}
var Ss = (e) => Ge(e, e0), e0 = [];
function Ba(e) {
  const n = Z();
  return Ge(() => {
    n.current = e;
  }), n.current;
}
var n0 = () => {
  const [e, n] = qe(null);
  return Je(() => {
    const t = window.matchMedia("(prefers-reduced-motion)"), r = (o) => {
      n(o.matches), dm({
        skipAnimation: o.matches
      });
    };
    return r(t), t.addEventListener("change", r), () => {
      t.removeEventListener("change", r);
    };
  }, []), e;
}, ao = Symbol.for("Animated:node"), t0 = (e) => !!e && e[ao] === e, Sn = (e) => e && e[ao], e_ = (e, n) => p1(e, ao, n), vs = (e) => e && e[ao] && e[ao].getPayload(), bm = class {
  constructor() {
    e_(this, this);
  }
  /** Get every `AnimatedValue` used by this node. */
  getPayload() {
    return this.payload || [];
  }
}, ko = class extends bm {
  constructor(e) {
    super(), this._value = e, this.done = !0, this.durationProgress = 0, b.num(this._value) && (this.lastPosition = this._value);
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
    return b.num(e) && (this.lastPosition = e, n && (e = Math.round(e / n) * n, this.done && (this.lastPosition = e))), this._value === e ? !1 : (this._value = e, !0);
  }
  reset() {
    const { done: e } = this;
    this.done = !1, b.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, e && (this.lastVelocity = null), this.v0 = null);
  }
}, uo = class extends ko {
  constructor(e) {
    super(0), this._string = null, this._toString = _r({
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
    if (b.str(e)) {
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
    e && (this._toString = _r({
      output: [this.getValue(), e]
    })), this._value = 0, super.reset();
  }
}, Ki = { dependencies: null }, Gs = class extends bm {
  constructor(e) {
    super(), this.source = e, this.setValue(e);
  }
  getValue(e) {
    const n = {};
    return Pn(this.source, (t, r) => {
      t0(t) ? n[r] = t.getValue(e) : on(t) ? n[r] = Ke(t) : e || (n[r] = t);
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
    Ki.dependencies && on(e) && Ki.dependencies.add(e);
    const n = vs(e);
    n && L(n, (t) => this.add(t));
  }
}, Im = class extends Gs {
  constructor(e) {
    super(e);
  }
  /** @internal */
  static create(e) {
    return new Im(e);
  }
  getValue() {
    return this.source.map((e) => e.getValue());
  }
  setValue(e) {
    const n = this.getPayload();
    return e.length == n.length ? n.map((t, r) => t.setValue(e[r])).some(Boolean) : (super.setValue(e.map(r0)), !0);
  }
};
function r0(e) {
  return (As(e) ? uo : ko).create(e);
}
function ja(e) {
  const n = Sn(e);
  return n ? n.constructor : b.arr(e) ? Im : As(e) ? uo : ko;
}
var Dc = (e, n) => {
  const t = (
    // Function components must use "forwardRef" to avoid being
    // re-rendered on every animation frame.
    !b.fun(e) || e.prototype && e.prototype.isReactComponent
  );
  return Qt((r, o) => {
    const i = Z(null), s = t && // eslint-disable-next-line react-hooks/rules-of-hooks
    Et(
      (d) => {
        i.current = s0(o, d);
      },
      [o]
    ), [a, u] = i0(r, n), _ = Zu(), l = () => {
      const d = i.current;
      if (t && !d)
        return;
      (d ? n.applyAnimatedValues(d, a.getValue(!0)) : !1) === !1 && _();
    }, c = new o0(l, u), f = Z();
    Je(() => (f.current = c, L(u, (d) => Er(d, c)), () => {
      f.current && (L(
        f.current.deps,
        (d) => so(d, f.current)
      ), X.cancel(f.current.update));
    })), Ge(l, []), Ss(() => () => {
      const d = f.current;
      L(d.deps, (h) => so(h, d));
    });
    const T = n.getComponentProps(a.getValue());
    return /* @__PURE__ */ Yt.createElement(e, { ...T, ref: s });
  });
}, o0 = class {
  constructor(e, n) {
    this.update = e, this.deps = n;
  }
  eventObserved(e) {
    e.type == "change" && X.write(this.update);
  }
};
function i0(e, n) {
  const t = /* @__PURE__ */ new Set();
  return Ki.dependencies = t, e.style && (e = {
    ...e,
    style: n.createAnimatedStyle(e.style)
  }), e = new Gs(e), Ki.dependencies = null, [e, t];
}
function s0(e, n) {
  return e && (b.fun(e) ? e(n) : e.current = n), n;
}
var Uc = Symbol.for("AnimatedComponent"), a0 = (e, {
  applyAnimatedValues: n = () => !1,
  createAnimatedStyle: t = (o) => new Gs(o),
  getComponentProps: r = (o) => o
} = {}) => {
  const o = {
    applyAnimatedValues: n,
    createAnimatedStyle: t,
    getComponentProps: r
  }, i = (s) => {
    const a = yc(s) || "Anonymous";
    return b.str(s) ? s = i[s] || (i[s] = Dc(s, o)) : s = s[Uc] || (s[Uc] = Dc(s, o)), s.displayName = `Animated(${a})`, s;
  };
  return Pn(e, (s, a) => {
    b.arr(e) && (a = yc(s)), i[a] = i(s);
  }), {
    animated: i
  };
}, yc = (e) => b.str(e) ? e : e && b.str(e.displayName) ? e.displayName : b.fun(e) && e.name || null, u0 = class {
};
function Ve(e, ...n) {
  return b.fun(e) ? e(...n) : e;
}
var Vr = (e, n) => e === !0 || !!(n && e && (b.fun(e) ? e(n) : We(e).includes(n))), Am = (e, n) => b.obj(e) ? n && e[n] : e, Sm = (e, n) => e.default === !0 ? e[n] : e.default ? e.default[n] : void 0, _0 = (e) => e, Cs = (e, n = _0) => {
  let t = c0;
  e.default && e.default !== !0 && (e = e.default, t = Object.keys(e));
  const r = {};
  for (const o of t) {
    const i = n(e[o], o);
    b.und(i) || (r[o] = i);
  }
  return r;
}, c0 = [
  "config",
  "onProps",
  "onStart",
  "onChange",
  "onPause",
  "onResume",
  "onRest"
], l0 = {
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
function d0(e) {
  const n = {};
  let t = 0;
  if (Pn(e, (r, o) => {
    l0[o] || (n[o] = r, t++);
  }), t)
    return n;
}
function Ds(e) {
  const n = d0(e);
  if (n) {
    const t = { to: n };
    return Pn(e, (r, o) => o in n || (t[o] = r)), t;
  }
  return { ...e };
}
function _o(e) {
  return e = Ke(e), b.arr(e) ? e.map(_o) : As(e) ? dn.createStringInterpolator({
    range: [0, 1],
    output: [e, e]
  })(1) : e;
}
function vm(e) {
  for (const n in e)
    return !0;
  return !1;
}
function Fa(e) {
  return b.fun(e) || b.arr(e) && b.obj(e[0]);
}
function Va(e, n) {
  e.ref?.delete(e), n?.delete(e);
}
function n_(e, n) {
  n && e.ref !== n && (e.ref?.delete(e), n.add(e), e.ref = n);
}
function h0(e, n, t = 1e3) {
  Je(() => {
    if (n) {
      let r = 0;
      L(e, (o, i) => {
        const s = o.current;
        if (s.length) {
          let a = t * n[i];
          isNaN(a) ? a = r : r = a, L(s, (u) => {
            L(u.queue, (_) => {
              const l = _.delay;
              _.delay = (c) => a + Ve(l || 0, c);
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
var Gm = {
  default: { tension: 170, friction: 26 },
  gentle: { tension: 120, friction: 14 },
  wobbly: { tension: 180, friction: 12 },
  stiff: { tension: 210, friction: 20 },
  slow: { tension: 280, friction: 60 },
  molasses: { tension: 280, friction: 120 }
}, Wa = {
  ...Gm.default,
  mass: 1,
  damping: 1,
  easing: fm.linear,
  clamp: !1
}, m0 = class {
  constructor() {
    this.velocity = 0, Object.assign(this, Wa);
  }
};
function f0(e, n, t) {
  t && (t = { ...t }, Hc(t, n), n = { ...t, ...n }), Hc(e, n), Object.assign(e, n);
  for (const s in Wa)
    e[s] == null && (e[s] = Wa[s]);
  let { frequency: r, damping: o } = e;
  const { mass: i } = e;
  return b.und(r) || (r < 0.01 && (r = 0.01), o < 0 && (o = 0), e.tension = Math.pow(2 * Math.PI / r, 2) * i, e.friction = 4 * Math.PI * o * i / r), e;
}
function Hc(e, n) {
  if (!b.und(n.decay))
    e.duration = void 0;
  else {
    const t = !b.und(n.tension) || !b.und(n.friction);
    (t || !b.und(n.frequency) || !b.und(n.damping) || !b.und(n.mass)) && (e.duration = void 0, e.decay = void 0), t && (e.frequency = void 0);
  }
}
var Pc = [], p0 = class {
  constructor() {
    this.changed = !1, this.values = Pc, this.toValues = null, this.fromValues = Pc, this.config = new m0(), this.immediate = !1;
  }
};
function Cm(e, { key: n, props: t, defaultProps: r, state: o, actions: i }) {
  return new Promise((s, a) => {
    let u, _, l = Vr(t.cancel ?? r?.cancel, n);
    if (l)
      T();
    else {
      b.und(t.pause) || (o.paused = Vr(t.pause, n));
      let d = r?.pause;
      d !== !0 && (d = o.paused || Vr(d, n)), u = Ve(t.delay || 0, n), d ? (o.resumeQueue.add(f), i.pause()) : (i.resume(), f());
    }
    function c() {
      o.resumeQueue.add(f), o.timeouts.delete(_), _.cancel(), u = _.time - X.now();
    }
    function f() {
      u > 0 && !dn.skipAnimation ? (o.delayed = !0, _ = X.setTimeout(T, u), o.pauseQueue.add(c), o.timeouts.add(_)) : T();
    }
    function T() {
      o.delayed && (o.delayed = !1), o.pauseQueue.delete(c), o.timeouts.delete(_), e <= (o.cancelId || 0) && (l = !0);
      try {
        i.start({ ...t, callId: e, cancel: l }, s);
      } catch (d) {
        a(d);
      }
    }
  });
}
var t_ = (e, n) => n.length == 1 ? n[0] : n.some((t) => t.cancelled) ? qt(e.get()) : n.every((t) => t.noop) ? Dm(e.get()) : pn(
  e.get(),
  n.every((t) => t.finished)
), Dm = (e) => ({
  value: e,
  noop: !0,
  finished: !0,
  cancelled: !1
}), pn = (e, n, t = !1) => ({
  value: e,
  finished: n,
  cancelled: t
}), qt = (e) => ({
  value: e,
  cancelled: !0,
  finished: !1
});
function Um(e, n, t, r) {
  const { callId: o, parentId: i, onRest: s } = n, { asyncTo: a, promise: u } = t;
  return !i && e === a && !n.reset ? u : t.promise = (async () => {
    t.asyncId = o, t.asyncTo = e;
    const _ = Cs(
      n,
      (m, O) => (
        // The `onRest` prop is only called when the `runAsync` promise is resolved.
        O === "onRest" ? void 0 : m
      )
    );
    let l, c;
    const f = new Promise(
      (m, O) => (l = m, c = O)
    ), T = (m) => {
      const O = (
        // The `cancel` prop or `stop` method was used.
        o <= (t.cancelId || 0) && qt(r) || // The async `to` prop was replaced.
        o !== t.asyncId && pn(r, !1)
      );
      if (O)
        throw m.result = O, c(m), m;
    }, d = (m, O) => {
      const R = new Xa(), N = new wc();
      return (async () => {
        if (dn.skipAnimation)
          throw co(t), N.result = pn(r, !1), c(N), N;
        T(R);
        const I = b.obj(m) ? { ...m } : { ...O, to: m };
        I.parentId = o, Pn(_, (H, M) => {
          b.und(I[M]) && (I[M] = H);
        });
        const p = await r.start(I);
        return T(R), t.paused && await new Promise((H) => {
          t.resumeQueue.add(H);
        }), p;
      })();
    };
    let h;
    if (dn.skipAnimation)
      return co(t), pn(r, !1);
    try {
      let m;
      b.arr(e) ? m = (async (O) => {
        for (const R of O)
          await d(R);
      })(e) : m = Promise.resolve(e(d, r.stop.bind(r))), await Promise.all([m.then(l), f]), h = pn(r.get(), !0, !1);
    } catch (m) {
      if (m instanceof Xa)
        h = m.result;
      else if (m instanceof wc)
        h = m.result;
      else
        throw m;
    } finally {
      o == t.asyncId && (t.asyncId = i, t.asyncTo = i ? a : void 0, t.promise = i ? u : void 0);
    }
    return b.fun(s) && X.batchedUpdates(() => {
      s(h, r, r.item);
    }), h;
  })();
}
function co(e, n) {
  jr(e.timeouts, (t) => t.cancel()), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, n && (e.cancelId = n);
}
var Xa = class extends Error {
  constructor() {
    super(
      "An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."
    );
  }
}, wc = class extends Error {
  constructor() {
    super("SkipAnimationSignal");
  }
}, Ya = (e) => e instanceof Us, T0 = 1, Us = class extends pm {
  constructor() {
    super(...arguments), this.id = T0++, this._priority = 0;
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
    return gm(), dn.to(this, e);
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
}, Dt = Symbol.for("SpringPhase"), ym = 1, Ka = 2, $a = 4, oa = (e) => (e[Dt] & ym) > 0, rt = (e) => (e[Dt] & Ka) > 0, Cr = (e) => (e[Dt] & $a) > 0, Mc = (e, n) => n ? e[Dt] |= Ka | ym : e[Dt] &= ~Ka, kc = (e, n) => n ? e[Dt] |= $a : e[Dt] &= ~$a, r_ = class extends Us {
  constructor(e, n) {
    if (super(), this.animation = new p0(), this.defaultProps = {}, this._state = {
      paused: !1,
      delayed: !1,
      pauseQueue: /* @__PURE__ */ new Set(),
      resumeQueue: /* @__PURE__ */ new Set(),
      timeouts: /* @__PURE__ */ new Set()
    }, this._pendingCalls = /* @__PURE__ */ new Set(), this._lastCallId = 0, this._lastToId = 0, this._memoizedDuration = 0, !b.und(e) || !b.und(n)) {
      const t = b.obj(e) ? { ...e } : { ...n, from: e };
      b.und(t.default) && (t.default = !0), this.start(t);
    }
  }
  /** Equals true when not advancing on each frame. */
  get idle() {
    return !(rt(this) || this._state.asyncTo) || Cr(this);
  }
  get goal() {
    return Ke(this.animation.to);
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
    !s && on(r.to) && (o = We(Ke(r.to))), r.values.forEach((_, l) => {
      if (_.done)
        return;
      const c = (
        // Animated strings always go from 0 to 1.
        _.constructor == uo ? 1 : s ? s[l].lastPosition : o[l]
      );
      let f = r.immediate, T = c;
      if (!f) {
        if (T = _.lastPosition, i.tension <= 0) {
          _.done = !0;
          return;
        }
        let d = _.elapsedTime += e;
        const h = r.fromValues[l], m = _.v0 != null ? _.v0 : _.v0 = b.arr(i.velocity) ? i.velocity[l] : i.velocity;
        let O;
        const R = i.precision || (h == c ? 5e-3 : Math.min(1, Math.abs(c - h) * 1e-3));
        if (b.und(i.duration))
          if (i.decay) {
            const N = i.decay === !0 ? 0.998 : i.decay, I = Math.exp(-(1 - N) * d);
            T = h + m / (1 - N) * (1 - I), f = Math.abs(_.lastPosition - T) <= R, O = m * I;
          } else {
            O = _.lastVelocity == null ? m : _.lastVelocity;
            const N = i.restVelocity || R / 10, I = i.clamp ? 0 : i.bounce, p = !b.und(I), H = h == c ? _.v0 > 0 : h < c;
            let M, K = !1;
            const w = 1, B = Math.ceil(e / w);
            for (let Te = 0; Te < B && (M = Math.abs(O) > N, !(!M && (f = Math.abs(c - T) <= R, f))); ++Te) {
              p && (K = T == c || T > c == H, K && (O = -O * I, T = c));
              const fe = -i.tension * 1e-6 * (T - c), ge = -i.friction * 1e-3 * O, k = (fe + ge) / i.mass;
              O = O + k * w, T = T + O * w;
            }
          }
        else {
          let N = 1;
          i.duration > 0 && (this._memoizedDuration !== i.duration && (this._memoizedDuration = i.duration, _.durationProgress > 0 && (_.elapsedTime = i.duration * _.durationProgress, d = _.elapsedTime += e)), N = (i.progress || 0) + d / this._memoizedDuration, N = N > 1 ? 1 : N < 0 ? 0 : N, _.durationProgress = N), T = h + i.easing(N) * (c - h), O = (T - _.lastPosition) / e, f = N == 1;
        }
        _.lastVelocity = O, Number.isNaN(T) && (console.warn("Got NaN while animating:", this), f = !0);
      }
      s && !s[l].done && (f = !1), f ? _.done = !0 : n = !1, _.setValue(T, i.round) && (t = !0);
    });
    const a = Sn(this), u = a.getValue();
    if (n) {
      const _ = Ke(r.to);
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
    return b.und(e) ? (t = this.queue || [], this.queue = []) : t = [b.obj(e) ? e : { ...n, to: e }], Promise.all(
      t.map((r) => this._update(r))
    ).then((r) => t_(this, r));
  }
  /**
   * Stop the current animation, and cancel any delayed updates.
   *
   * Pass `true` to call `onRest` with `cancelled: true`.
   */
  stop(e) {
    const { to: n } = this.animation;
    return this._focus(this.get()), co(this._state, e && this._lastCallId), X.batchedUpdates(() => this._stop(n, e)), this;
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
    t = b.obj(t) ? t[n] : t, (t == null || Fa(t)) && (t = void 0), r = b.obj(r) ? r[n] : r, r == null && (r = void 0);
    const o = { to: t, from: r };
    return oa(this) || (e.reverse && ([t, r] = [r, t]), r = Ke(r), b.und(r) ? Sn(this) || this._set(t) : this._set(r)), o;
  }
  /** Every update is processed by this method before merging. */
  _update({ ...e }, n) {
    const { key: t, defaultProps: r } = this;
    e.default && Object.assign(
      r,
      Cs(
        e,
        (s, a) => /^on/.test(a) ? Am(s, t) : s
      )
    ), Lc(this, e, "onProps"), Ur(this, "onProps", e, this);
    const o = this._prepareNode(e);
    if (Object.isFrozen(this))
      throw Error(
        "Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?"
      );
    const i = this._state;
    return Cm(++this._lastCallId, {
      key: t,
      props: e,
      defaultProps: r,
      state: i,
      actions: {
        pause: () => {
          Cr(this) || (kc(this, !0), Pr(i.pauseQueue), Ur(
            this,
            "onPause",
            pn(this, Dr(this, this.animation.to)),
            this
          ));
        },
        resume: () => {
          Cr(this) && (kc(this, !1), rt(this) && this._resume(), Pr(i.resumeQueue), Ur(
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
        const a = Hm(e);
        if (a)
          return this._update(a, !0);
      }
      return s;
    });
  }
  /** Merge props into the current animation */
  _merge(e, n, t) {
    if (n.cancel)
      return this.stop(!0), t(qt(this));
    const r = !b.und(e.to), o = !b.und(e.from);
    if (r || o)
      if (n.callId > this._lastToId)
        this._lastToId = n.callId;
      else
        return t(qt(this));
    const { key: i, defaultProps: s, animation: a } = this, { to: u, from: _ } = a;
    let { to: l = u, from: c = _ } = e;
    o && !r && (!n.default || b.und(l)) && (l = c), n.reverse && ([l, c] = [c, l]);
    const f = !Bn(c, _);
    f && (a.from = c), c = Ke(c);
    const T = !Bn(l, u);
    T && this._focus(l);
    const d = Fa(n.to), { config: h } = a, { decay: m, velocity: O } = h;
    (r || o) && (h.velocity = 0), n.config && !d && f0(
      h,
      Ve(n.config, i),
      // Avoid calling the same "config" prop twice.
      n.config !== s.config ? Ve(s.config, i) : void 0
    );
    let R = Sn(this);
    if (!R || b.und(l))
      return t(pn(this, !0));
    const N = (
      // When `reset` is undefined, the `from` prop implies `reset: true`,
      // except for declarative updates. When `reset` is defined, there
      // must exist a value to animate from.
      b.und(n.reset) ? o && !n.default : !b.und(c) && Vr(n.reset, i)
    ), I = N ? c : this.get(), p = _o(l), H = b.num(p) || b.arr(p) || As(p), M = !d && (!H || Vr(s.immediate || n.immediate, i));
    if (T) {
      const Te = ja(l);
      if (Te !== R.constructor)
        if (M)
          R = this._set(p);
        else
          throw Error(
            `Cannot animate between ${R.constructor.name} and ${Te.name}, as the "to" prop suggests`
          );
    }
    const K = R.constructor;
    let w = on(l), B = !1;
    if (!w) {
      const Te = N || !oa(this) && f;
      (T || Te) && (B = Bn(_o(I), p), w = !B), (!Bn(a.immediate, M) && !M || !Bn(h.decay, m) || !Bn(h.velocity, O)) && (w = !0);
    }
    if (B && rt(this) && (a.changed && !N ? w = !0 : w || this._stop(u)), !d && ((w || on(u)) && (a.values = R.getPayload(), a.toValues = on(l) ? null : K == uo ? [1] : We(p)), a.immediate != M && (a.immediate = M, !M && !N && this._set(u)), w)) {
      const { onRest: Te } = a;
      L(O0, (ge) => Lc(this, n, ge));
      const fe = pn(this, Dr(this, u));
      Pr(this._pendingCalls, fe), this._pendingCalls.add(t), a.changed && X.batchedUpdates(() => {
        a.changed = !N, Te?.(fe, this), N ? Ve(s.onRest, fe) : a.onStart?.(fe, this);
      });
    }
    N && this._set(I), d ? t(Um(n.to, n, this._state, this)) : w ? this._start() : rt(this) && !T ? this._pendingCalls.add(t) : t(Dm(I));
  }
  /** Update the `animation.to` value, which might be a `FluidValue` */
  _focus(e) {
    const n = this.animation;
    e !== n.to && (Sc(this) && this._detach(), n.to = e, Sc(this) && this._attach());
  }
  _attach() {
    let e = 0;
    const { to: n } = this.animation;
    on(n) && (Er(n, this), Ya(n) && (e = n.priority + 1)), this.priority = e;
  }
  _detach() {
    const { to: e } = this.animation;
    on(e) && so(e, this);
  }
  /**
   * Update the current value from outside the frameloop,
   * and return the `Animated` node.
   */
  _set(e, n = !0) {
    const t = Ke(e);
    if (!b.und(t)) {
      const r = Sn(this);
      if (!r || !Bn(t, r.getValue())) {
        const o = ja(t);
        !r || r.constructor != o ? e_(this, o.create(t)) : r.setValue(t), r && X.batchedUpdates(() => {
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
    Sn(this).reset(Ke(e.to)), e.immediate || (e.fromValues = e.values.map((n) => n.lastPosition)), rt(this) || (Mc(this, !0), Cr(this) || this._resume());
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
      Mc(this, !1);
      const t = this.animation;
      L(t.values, (o) => {
        o.done = !0;
      }), t.toValues && (t.onChange = t.onPause = t.onResume = void 0), io(this, {
        type: "idle",
        parent: this
      });
      const r = n ? qt(this.get()) : pn(this.get(), Dr(this, e ?? t.to));
      Pr(this._pendingCalls, r), t.changed && (t.changed = !1, Ur(this, "onRest", r, this));
    }
  }
};
function Dr(e, n) {
  const t = _o(n), r = _o(e.get());
  return Bn(r, t);
}
function Hm(e, n = e.loop, t = e.to) {
  const r = Ve(n);
  if (r) {
    const o = r !== !0 && Ds(r), i = (o || e).reverse, s = !o || o.reset;
    return lo({
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
function lo(e) {
  const { to: n, from: t } = e = Ds(e), r = /* @__PURE__ */ new Set();
  return b.obj(n) && xc(n, r), b.obj(t) && xc(t, r), e.keys = r.size ? Array.from(r) : null, e;
}
function E0(e) {
  const n = lo(e);
  return b.und(n.default) && (n.default = Cs(n)), n;
}
function xc(e, n) {
  Pn(e, (t, r) => t != null && n.add(r));
}
var O0 = [
  "onStart",
  "onRest",
  "onChange",
  "onPause",
  "onResume"
];
function Lc(e, n, t) {
  e.animation[t] = n[t] !== Sm(n, t) ? Am(n[t], e.key) : void 0;
}
function Ur(e, n, ...t) {
  e.animation[n]?.(...t), e.defaultProps[n]?.(...t);
}
var R0 = ["onStart", "onChange", "onRest"], g0 = 1, o_ = class {
  constructor(e, n) {
    this.id = g0++, this.springs = {}, this.queue = [], this._lastAsyncId = 0, this._active = /* @__PURE__ */ new Set(), this._changed = /* @__PURE__ */ new Set(), this._started = !1, this._state = {
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
      b.und(t) || this.springs[n].set(t);
    }
  }
  /** Push an update onto the queue of each value. */
  update(e) {
    return e && this.queue.push(lo(e)), this;
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
    return e ? n = We(e).map(lo) : this.queue = [], this._flush ? this._flush(this, n) : (xm(this, n), za(this, n));
  }
  /** @internal */
  stop(e, n) {
    if (e !== !!e && (n = e), n) {
      const t = this.springs;
      L(We(n), (r) => t[r].stop(!!e));
    } else
      co(this._state, this._lastAsyncId), this.each((t) => t.stop(!!e));
    return this;
  }
  /** Freeze the active animation in time */
  pause(e) {
    if (b.und(e))
      this.start({ pause: !0 });
    else {
      const n = this.springs;
      L(We(e), (t) => n[t].pause());
    }
    return this;
  }
  /** Resume the animation if paused. */
  resume(e) {
    if (b.und(e))
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
  return Promise.all(n.map((t) => Pm(e, t))).then(
    (t) => t_(e, t)
  );
}
async function Pm(e, n, t) {
  const { keys: r, to: o, from: i, loop: s, onRest: a, onResolve: u } = n, _ = b.obj(n.default) && n.default;
  s && (n.loop = !1), o === !1 && (n.to = null), i === !1 && (n.from = null);
  const l = b.arr(o) || b.fun(o) ? o : void 0;
  l ? (n.to = void 0, n.onRest = void 0, _ && (_.onRest = void 0)) : L(R0, (h) => {
    const m = n[h];
    if (b.fun(m)) {
      const O = e._events[h];
      n[h] = ({ finished: R, cancelled: N }) => {
        const I = O.get(m);
        I ? (R || (I.finished = !1), N && (I.cancelled = !0)) : O.set(m, {
          value: null,
          finished: R || !1,
          cancelled: N || !1
        });
      }, _ && (_[h] = n[h]);
    }
  });
  const c = e._state;
  n.pause === !c.paused ? (c.paused = n.pause, Pr(n.pause ? c.pauseQueue : c.resumeQueue)) : c.paused && (n.pause = !0);
  const f = (r || Object.keys(e.springs)).map(
    (h) => e.springs[h].start(n)
  ), T = n.cancel === !0 || Sm(n, "cancel") === !0;
  (l || T && c.asyncId) && f.push(
    Cm(++e._lastAsyncId, {
      props: n,
      state: c,
      actions: {
        pause: xa,
        resume: xa,
        start(h, m) {
          T ? (co(c, e._lastAsyncId), m(qt(e))) : (h.onRest = a, m(
            Um(
              l,
              h,
              c,
              e
            )
          ));
        }
      }
    })
  ), c.paused && await new Promise((h) => {
    c.resumeQueue.add(h);
  });
  const d = t_(e, await Promise.all(f));
  if (s && d.finished && !(t && d.noop)) {
    const h = Hm(n, s, o);
    if (h)
      return xm(e, [h]), Pm(e, h, !0);
  }
  return u && X.batchedUpdates(() => u(d, e, e.item)), d;
}
function Ja(e, n) {
  const t = { ...e.springs };
  return n && L(We(n), (r) => {
    b.und(r.keys) && (r = lo(r)), b.obj(r.to) || (r = { ...r, to: void 0 }), km(t, r, (o) => Mm(o));
  }), wm(e, t), t;
}
function wm(e, n) {
  Pn(n, (t, r) => {
    e.springs[r] || (e.springs[r] = t, Er(t, e));
  });
}
function Mm(e, n) {
  const t = new r_();
  return t.key = e, n && Er(t, n), t;
}
function km(e, n, t) {
  n.keys && L(n.keys, (r) => {
    (e[r] || (e[r] = t(r)))._prepareNode(n);
  });
}
function xm(e, n) {
  L(n, (t) => {
    km(e.springs, t, (r) => Mm(r, e));
  });
}
var Or = ({
  children: e,
  ...n
}) => {
  const t = Qe($i), r = n.pause || !!t.pause, o = n.immediate || !!t.immediate;
  n = Q1(() => ({ pause: r, immediate: o }), [r, o]);
  const { Provider: i } = $i;
  return /* @__PURE__ */ Yt.createElement(i, { value: n }, e);
}, $i = N0(Or, {});
Or.Provider = $i.Provider;
Or.Consumer = $i.Consumer;
function N0(e, n) {
  return Object.assign(e, Yt.createContext(n)), e.Provider._context = e, e.Consumer._context = e, e;
}
var ys = () => {
  const e = [], n = function(r) {
    j1();
    const o = [];
    return L(e, (i, s) => {
      if (b.und(r))
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
      const s = b.fun(r) ? r(i, o) : r;
      s && o.set(s);
    });
  }, n.start = function(r) {
    const o = [];
    return L(e, (i, s) => {
      if (b.und(r))
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
    return b.fun(r) ? r(i, o) : r;
  };
  return n._getProps = t, n;
};
function i_(e, n, t) {
  const r = b.fun(n) && n;
  r && !t && (t = []);
  const o = it(
    () => r || arguments.length == 3 ? ys() : void 0,
    []
  ), i = Z(0), s = Zu(), a = it(
    () => ({
      ctrls: [],
      queue: [],
      flush(O, R) {
        const N = Ja(O, R);
        return i.current > 0 && !a.queue.length && !Object.keys(N).some((p) => !O.springs[p]) ? za(O, R) : new Promise((p) => {
          wm(O, N), a.queue.push(() => {
            p(za(O, R));
          }), s();
        });
      }
    }),
    []
  ), u = Z([...a.ctrls]), _ = [], l = Ba(e) || 0;
  it(() => {
    L(u.current.slice(e, l), (O) => {
      Va(O, o), O.stop(!0);
    }), u.current.length = e, c(l, e);
  }, [e]), it(() => {
    c(0, Math.min(l, e));
  }, t);
  function c(O, R) {
    for (let N = O; N < R; N++) {
      const I = u.current[N] || (u.current[N] = new o_(null, a.flush)), p = r ? r(N, I) : n[N];
      p && (_[N] = E0(p));
    }
  }
  const f = u.current.map((O, R) => Ja(O, _[R])), T = Qe(Or), d = Ba(T), h = T !== d && vm(T);
  Je(() => {
    i.current++, a.ctrls = u.current;
    const { queue: O } = a;
    O.length && (a.queue = [], L(O, (R) => R())), L(u.current, (R, N) => {
      o?.add(R), h && R.start({ default: T });
      const I = _[N];
      I && (n_(R, I.ref), R.ref ? R.queue.push(I) : R.start(I));
    });
  }), Ss(() => () => {
    L(a.ctrls, (O) => O.stop(!0));
  });
  const m = f.map((O) => ({ ...O }));
  return o ? [m, o] : m;
}
function Rr(e, n) {
  const t = b.fun(e), [[r], o] = i_(
    1,
    t ? e : [e],
    t ? n || [] : n
  );
  return t || arguments.length == 2 ? [r, o] : r;
}
var b0 = () => ys(), I0 = () => qe(b0)[0], A0 = (e, n) => {
  const t = J1(() => new r_(e, n));
  return Ss(() => () => {
    t.stop();
  }), t;
};
function Lm(e, n, t) {
  const r = b.fun(n) && n;
  r && !t && (t = []);
  let o = !0, i;
  const s = i_(
    e,
    (a, u) => {
      const _ = r ? r(a, u) : n;
      return i = _.ref, o = o && _.reverse, _;
    },
    // Ensure the props function is called when no deps exist.
    // This works around the 3 argument rule.
    t || [{}]
  );
  if (Je(() => {
    L(s[1].current, (a, u) => {
      const _ = s[1].current[u + (o ? 1 : -1)];
      if (n_(a, i), a.ref) {
        _ && a.update({ to: _.springs });
        return;
      }
      _ ? a.start({ to: _.springs }) : a.start();
    });
  }, t), r || arguments.length == 3) {
    const a = i ?? s[1];
    return a._getProps = (u, _, l) => {
      const c = b.fun(u) ? u(l, _) : u;
      if (c) {
        const f = a.current[l + (c.reverse ? 1 : -1)];
        return f && (c.to = f.springs), c;
      }
    }, s;
  }
  return s[0];
}
function Bm(e, n, t) {
  const r = b.fun(n) && n, {
    reset: o,
    sort: i,
    trail: s = 0,
    expires: a = !0,
    exitBeforeEnter: u = !1,
    onDestroyed: _,
    ref: l,
    config: c
  } = r ? r() : n, f = it(
    () => r || arguments.length == 3 ? ys() : void 0,
    []
  ), T = We(e), d = [], h = Z(null), m = o ? null : h.current;
  Je(() => {
    h.current = d;
  }), Ss(() => (L(d, (k) => {
    f?.add(k.ctrl), k.ctrl.ref = f;
  }), () => {
    L(h.current, (k) => {
      k.expired && clearTimeout(k.expirationId), Va(k.ctrl, f), k.ctrl.stop(!0);
    });
  }));
  const O = v0(T, r ? r() : n, m), R = o && h.current || [];
  Je(
    () => L(R, ({ ctrl: k, item: G, key: q }) => {
      Va(k, f), Ve(_, G, q);
    })
  );
  const N = [];
  if (m && L(m, (k, G) => {
    k.expired ? (clearTimeout(k.expirationId), R.push(k)) : (G = N[G] = O.indexOf(k.key), ~G && (d[G] = k));
  }), L(T, (k, G) => {
    d[G] || (d[G] = {
      key: O[G],
      item: k,
      phase: "mount",
      ctrl: new o_()
    }, d[G].ctrl.item = k);
  }), N.length) {
    let k = -1;
    const { leave: G } = r ? r() : n;
    L(N, (q, _e) => {
      const ee = m[_e];
      ~q ? (k = d.indexOf(ee), d[k] = { ...ee, item: T[q] }) : G && d.splice(++k, 0, ee);
    });
  }
  b.fun(i) && d.sort((k, G) => i(k.item, G.item));
  let I = -s;
  const p = Zu(), H = Cs(n), M = /* @__PURE__ */ new Map(), K = Z(/* @__PURE__ */ new Map()), w = Z(!1);
  L(d, (k, G) => {
    const q = k.key, _e = k.phase, ee = r ? r() : n;
    let Ie, He;
    const Ne = Ve(ee.delay || 0, q);
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
    if (Ie = Ve(Ie, k.item, G), Ie = b.obj(Ie) ? Ds(Ie) : { to: Ie }, !Ie.config) {
      const j = c || H.config;
      Ie.config = Ve(j, k.item, G, He);
    }
    I += s;
    const C = {
      ...H,
      // we need to add our props.delay value you here.
      delay: Ne + I,
      ref: l,
      immediate: ee.immediate,
      // This prevents implied resets.
      reset: !1,
      // Merge any phase-specific props.
      ...Ie
    };
    if (He == "enter" && b.und(C.from)) {
      const j = r ? r() : n, E = b.und(j.initial) || m ? j.from : j.initial;
      C.from = Ve(E, k.item, G);
    }
    const { onResolve: U } = C;
    C.onResolve = (j) => {
      Ve(U, j);
      const E = h.current, J = E.find((S) => S.key === q);
      if (J && !(j.cancelled && J.phase != "update") && J.ctrl.idle) {
        const S = E.every((ce) => ce.ctrl.idle);
        if (J.phase == "leave") {
          const ce = Ve(a, J.item);
          if (ce !== !1) {
            const ne = ce === !0 ? 0 : ce;
            if (J.expired = !0, !S && ne > 0) {
              ne <= 2147483647 && (J.expirationId = setTimeout(p, ne));
              return;
            }
          }
        }
        S && E.some((ce) => ce.expired) && (K.current.delete(J), u && (w.current = !0), p());
      }
    };
    const P = Ja(k.ctrl, C);
    He === "leave" && u ? K.current.set(k, { phase: He, springs: P, payload: C }) : M.set(k, { phase: He, springs: P, payload: C });
  });
  const B = Qe(Or), Te = Ba(B), fe = B !== Te && vm(B);
  Je(() => {
    fe && L(d, (k) => {
      k.ctrl.start({ default: B });
    });
  }, [B]), L(M, (k, G) => {
    if (K.current.size) {
      const q = d.findIndex((_e) => _e.key === G.key);
      d.splice(q, 1);
    }
  }), Je(
    () => {
      L(
        K.current.size ? K.current : M,
        ({ phase: k, payload: G }, q) => {
          const { ctrl: _e } = q;
          q.phase = k, f?.add(_e), fe && k == "enter" && _e.start({ default: B }), G && (n_(_e, G.ref), (_e.ref || f) && !w.current ? _e.update(G) : (_e.start(G), w.current && (w.current = !1)));
        }
      );
    },
    o ? void 0 : t
  );
  const ge = (k) => /* @__PURE__ */ Yt.createElement(Yt.Fragment, null, d.map((G, q) => {
    const { springs: _e } = M.get(G) || G.ctrl, ee = k({ ..._e }, G.item, G, q);
    return ee && ee.type ? /* @__PURE__ */ Yt.createElement(
      ee.type,
      {
        ...ee.props,
        key: b.str(G.key) || b.num(G.key) ? G.key : G.ctrl.id,
        ref: ee.ref
      }
    ) : ee;
  }));
  return f ? [ge, f] : ge;
}
var S0 = 1;
function v0(e, { key: n, keys: t = n }, r) {
  if (t === null) {
    const o = /* @__PURE__ */ new Set();
    return e.map((i) => {
      const s = r && r.find(
        (a) => a.item === i && a.phase !== "leave" && !o.has(a)
      );
      return s ? (o.add(s), s.key) : S0++;
    });
  }
  return b.und(t) ? e : b.fun(t) ? e.map(t) : We(t);
}
var G0 = ({
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
  return Je(() => {
    const o = z1(
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
}, C0 = ({
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
  return Je(() => {
    const o = Nm(
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
}, D0 = {
  any: 0,
  all: 1
};
function U0(e, n) {
  const [t, r] = qe(!1), o = Z(), i = b.fun(e) && e, s = i ? i() : {}, { to: a = {}, from: u = {}, ..._ } = s, l = i ? n : e, [c, f] = Rr(() => ({ from: u, ..._ }), []);
  return Je(() => {
    const T = o.current, {
      root: d,
      once: h,
      amount: m = "any",
      ...O
    } = l ?? {};
    if (!T || h && t || typeof IntersectionObserver > "u")
      return;
    const R = /* @__PURE__ */ new WeakMap(), N = () => (a && f.start(a), r(!0), h ? void 0 : () => {
      u && f.start(u), r(!1);
    }), I = (H) => {
      H.forEach((M) => {
        const K = R.get(M.target);
        if (M.isIntersecting !== !!K)
          if (M.isIntersecting) {
            const w = N();
            b.fun(w) ? R.set(M.target, w) : p.unobserve(M.target);
          } else
            K && (K(), R.delete(M.target));
      });
    }, p = new IntersectionObserver(I, {
      root: d && d.current || void 0,
      threshold: typeof m == "number" || Array.isArray(m) ? m : D0[m],
      ...O
    });
    return p.observe(T), () => p.unobserve(T);
  }, [l]), i ? [o, c] : [o, t];
}
function y0({ children: e, ...n }) {
  return e(Rr(n));
}
function H0({
  items: e,
  children: n,
  ...t
}) {
  const r = Lm(e.length, t);
  return e.map((o, i) => {
    const s = n(o, i);
    return b.fun(s) ? s(r[i]) : s;
  });
}
function P0({
  items: e,
  children: n,
  ...t
}) {
  return Bm(e, t)(n);
}
var Hs = class extends Us {
  constructor(e, n) {
    super(), this.source = e, this.idle = !0, this._active = /* @__PURE__ */ new Set(), this.calc = _r(...n);
    const t = this._get(), r = ja(t);
    e_(this, r.create(t));
  }
  advance(e) {
    const n = this._get(), t = this.get();
    Bn(n, t) || (Sn(this).setValue(n), this._onChange(n, this.idle)), !this.idle && Bc(this._active) && ia(this);
  }
  _get() {
    const e = b.arr(this.source) ? this.source.map(Ke) : We(Ke(this.source));
    return this.calc(...e);
  }
  _start() {
    this.idle && !Bc(this._active) && (this.idle = !1, L(vs(this), (e) => {
      e.done = !1;
    }), dn.skipAnimation ? (X.batchedUpdates(() => this.advance()), ia(this)) : Mo.start(this));
  }
  // Observe our sources only when we're observed.
  _attach() {
    let e = 1;
    L(We(this.source), (n) => {
      on(n) && Er(n, this), Ya(n) && (n.idle || this._active.add(n), e = Math.max(e, n.priority + 1));
    }), this.priority = e, this._start();
  }
  // Stop observing our sources once we have no observers.
  _detach() {
    L(We(this.source), (e) => {
      on(e) && so(e, this);
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
function w0(e) {
  return e.idle !== !1;
}
function Bc(e) {
  return !e.size || Array.from(e).every(w0);
}
function ia(e) {
  e.idle || (e.idle = !0, L(vs(e), (n) => {
    n.done = !0;
  }), io(e, {
    type: "idle",
    parent: e
  }));
}
var M0 = (e, ...n) => new Hs(e, n), k0 = (e, ...n) => (gm(), new Hs(e, n));
dn.assign({
  createStringInterpolator: Om,
  to: (e, n) => new Hs(e, n)
});
var x0 = Mo.advance, jm = /^--/;
function L0(e, n) {
  return n == null || typeof n == "boolean" || n === "" ? "" : typeof n == "number" && n !== 0 && !jm.test(e) && !(Wr.hasOwnProperty(e) && Wr[e]) ? n + "px" : ("" + n).trim();
}
var jc = {};
function B0(e, n) {
  if (!e.nodeType || !e.setAttribute)
    return !1;
  const t = e.nodeName === "filter" || e.parentNode && e.parentNode.nodeName === "filter", { style: r, children: o, scrollTop: i, scrollLeft: s, viewBox: a, ...u } = n, _ = Object.values(u), l = Object.keys(u).map(
    (c) => t || e.hasAttribute(c) ? c : jc[c] || (jc[c] = c.replace(
      /([A-Z])/g,
      // Attributes are written in dash case
      (f) => "-" + f.toLowerCase()
    ))
  );
  o !== void 0 && (e.textContent = o);
  for (const c in r)
    if (r.hasOwnProperty(c)) {
      const f = L0(c, r[c]);
      jm.test(c) ? e.style.setProperty(c, f) : e.style[c] = f;
    }
  l.forEach((c, f) => {
    e.setAttribute(c, _[f]);
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
}, j0 = (e, n) => e + n.charAt(0).toUpperCase() + n.substring(1), F0 = ["Webkit", "Ms", "Moz", "O"];
Wr = Object.keys(Wr).reduce((e, n) => (F0.forEach((t) => e[j0(t, n)] = e[n]), e), Wr);
var V0 = /^(matrix|translate|scale|rotate|skew)/, W0 = /^(translate)/, X0 = /^(rotate|skew)/, sa = (e, n) => b.num(e) && e !== 0 ? e + n : e, Oi = (e, n) => b.arr(e) ? e.every((t) => Oi(t, n)) : b.num(e) ? e === n : parseFloat(e) === n, Y0 = class extends Gs {
  constructor({ x: e, y: n, z: t, ...r }) {
    const o = [], i = [];
    (e || n || t) && (o.push([e || 0, n || 0, t || 0]), i.push((s) => [
      `translate3d(${s.map((a) => sa(a, "px")).join(",")})`,
      // prettier-ignore
      Oi(s, 0)
    ])), Pn(r, (s, a) => {
      if (a === "transform")
        o.push([s || ""]), i.push((u) => [u, u === ""]);
      else if (V0.test(a)) {
        if (delete r[a], b.und(s))
          return;
        const u = W0.test(a) ? "px" : X0.test(a) ? "deg" : "";
        o.push(We(s)), i.push(
          a === "rotate3d" ? ([_, l, c, f]) => [
            `rotate3d(${_},${l},${c},${sa(f, u)})`,
            Oi(f, 0)
          ] : (_) => [
            `${a}(${_.map((l) => sa(l, u)).join(",")})`,
            Oi(_, a.startsWith("scale") ? 1 : 0)
          ]
        );
      }
    }), o.length && (r.transform = new K0(o, i)), super(r);
  }
}, K0 = class extends pm {
  constructor(e, n) {
    super(), this.inputs = e, this.transforms = n, this._value = null;
  }
  get() {
    return this._value || (this._value = this._get());
  }
  _get() {
    let e = "", n = !0;
    return L(this.inputs, (t, r) => {
      const o = Ke(t[0]), [i, s] = this.transforms[r](
        b.arr(o) ? o : t.map(Ke)
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
        (t) => on(t) && Er(t, this)
      )
    );
  }
  // Stop observing our inputs once we have no observers.
  observerRemoved(e) {
    e == 0 && L(
      this.inputs,
      (n) => L(
        n,
        (t) => on(t) && so(t, this)
      )
    );
  }
  eventObserved(e) {
    e.type == "change" && (this._value = null), io(this, e);
  }
}, $0 = [
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
  batchedUpdates: el,
  createStringInterpolator: Om,
  colors: R1
});
var z0 = a0($0, {
  applyAnimatedValues: B0,
  createAnimatedStyle: (e) => new Y0(e),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getComponentProps: ({ scrollTop: e, scrollLeft: n, ...t }) => t
}), Fc = z0.animated;
const J0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Any: u0,
  BailSignal: Xa,
  Controller: o_,
  FrameValue: Us,
  Globals: dn,
  Interpolation: Hs,
  Spring: y0,
  SpringContext: Or,
  SpringRef: ys,
  SpringValue: r_,
  Trail: H0,
  Transition: P0,
  a: Fc,
  animated: Fc,
  config: Gm,
  createInterpolator: _r,
  easings: fm,
  inferTo: Ds,
  interpolate: k0,
  to: M0,
  update: x0,
  useChain: h0,
  useInView: U0,
  useIsomorphicLayoutEffect: Je,
  useReducedMotion: n0,
  useResize: C0,
  useScroll: G0,
  useSpring: Rr,
  useSpringRef: I0,
  useSpringValue: A0,
  useSprings: i_,
  useTrail: Lm,
  useTransition: Bm
}, Symbol.toStringTag, { value: "Module" })), q0 = () => {
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
}, Q0 = Ce.div`
  background: ${({ theme: e }) => e.grey};
  border-bottom: 2px solid ${({ theme: e }) => e.lightGrey};
  height: ${ln("100%", "42px")};
  box-sizing: border-box;
  ${yt("space-between", "center")}
  ${og(23)}
`, Z0 = Ce.h2`
  color: ${({ theme: e }) => e.light};
`, eS = Qn(() => {
  const e = es(), n = e.getActiveTab(), { spring: t, animatedDiv: r } = q0(), o = bt(), { openFile: i, saveFile: s } = hh(), a = d1(), u = !e.isAllowedToExecute();
  return /* @__PURE__ */ _n(Q0, { as: r, style: t, children: [
    /* @__PURE__ */ V(
      s1,
      {
        runCode: a,
        createTab: () => {
          o.tabs.createTab();
        },
        openFile: i,
        saveFile: s
      }
    ),
    /* @__PURE__ */ _n(Z0, { children: [
      n.label,
      " - CodeGear"
    ] }),
    /* @__PURE__ */ V(_1, { isDisabled: u, runCode: a })
  ] });
}), PS = () => /* @__PURE__ */ V(hu, { children: /* @__PURE__ */ V(eS, {}) });
class nS {
  constructor(n) {
    Rt(this), this.state = n, this.getters = n.getters, this.actions = n.actions, this.codeRunner = new l1(n);
  }
}
class tS {
  constructor() {
    this.activeKey = "", this.content = [], this.theme = "vs-dark", this.fontSize = 20, this.tabSize = 4, this.customBackground = "#3d3d3d", this.customColor = "#3d3d3d", this.isStorageDisabled = !1, this.executeMessages = [], Rt(this);
    const n = new Xd(this.isStorageDisabled);
    this.storage = n, this.getters = new n1(this), this.actions = new e1(this), this.services = new nS(this), this.theme = n.get("EDITOR_THEME", "vs-dark"), this.fontSize = Number(
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
      r.lang = r1, r.content = t1;
    }
    this.content = [...this.content, ...t], this.activeKey = this.content[0].key;
  }
}
const gr = zi({}), wS = ({ children: e }) => {
  const n = new tS();
  return /* @__PURE__ */ V(gr.Provider, { value: n, children: e });
}, Fm = zi({}), MS = ({ children: e }) => {
  const n = it(
    () => ({
      isSettingsOpened: !1,
      isHtmlPreviewOpened: !1,
      isTerminalOpened: !0,
      selectedTerminalTab: "terminal"
    }),
    []
  ), t = (a, u) => ({ ...a, ...u }), [r, o] = $m(t, n), i = (a) => {
    r[a] ? o({ [a]: !1 }) : o({ [a]: !0 });
  }, s = it(
    () => ({
      state: r,
      update: o,
      toggle: i
    }),
    [r]
  );
  return /* @__PURE__ */ V(Fm.Provider, { value: s, children: e });
}, rS = () => {
  const e = _d();
  return ({ background: n, color: t }) => {
    e?.editor.defineTheme(_h, {
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
function oS(e, n) {
  for (var t in n)
    e[t] = n[t];
  return e;
}
function Vc(e, n) {
  for (var t in e)
    if (t !== "__source" && !(t in n))
      return !0;
  for (var r in n)
    if (r !== "__source" && e[r] !== n[r])
      return !0;
  return !1;
}
function Wc(e) {
  this.props = e;
}
(Wc.prototype = new Kn()).isPureReactComponent = !0, Wc.prototype.shouldComponentUpdate = function(e, n) {
  return Vc(this.props, e) || Vc(this.state, n);
};
var Xc = F.__b;
F.__b = function(e) {
  e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), Xc && Xc(e);
};
var iS = F.__e;
F.__e = function(e, n, t, r) {
  if (e.then) {
    for (var o, i = n; i = i.__; )
      if ((o = i.__c) && o.__c)
        return n.__e == null && (n.__e = t.__e, n.__k = t.__k), o.__c(e, n);
  }
  iS(e, n, t, r);
};
var Yc = F.unmount;
function Vm(e, n, t) {
  return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(r) {
    typeof r.__c == "function" && r.__c();
  }), e.__c.__H = null), (e = oS({}, e)).__c != null && (e.__c.__P === t && (e.__c.__P = n), e.__c = null), e.__k = e.__k && e.__k.map(function(r) {
    return Vm(r, n, t);
  })), e;
}
function Wm(e, n, t) {
  return e && (e.__v = null, e.__k = e.__k && e.__k.map(function(r) {
    return Wm(r, n, t);
  }), e.__c && e.__c.__P === n && (e.__e && t.insertBefore(e.__e, e.__d), e.__c.__e = !0, e.__c.__P = t)), e;
}
function aa() {
  this.__u = 0, this.t = null, this.__b = null;
}
function Xm(e) {
  var n = e.__.__c;
  return n && n.__a && n.__a(e);
}
function Zo() {
  this.u = null, this.o = null;
}
F.unmount = function(e) {
  var n = e.__c;
  n && n.__R && n.__R(), n && e.__h === !0 && (e.type = null), Yc && Yc(e);
}, (aa.prototype = new Kn()).__c = function(e, n) {
  var t = n.__c, r = this;
  r.t == null && (r.t = []), r.t.push(t);
  var o = Xm(r.__v), i = !1, s = function() {
    i || (i = !0, t.__R = null, o ? o(a) : a());
  };
  t.__R = s;
  var a = function() {
    if (!--r.__u) {
      if (r.state.__a) {
        var _ = r.state.__a;
        r.__v.__k[0] = Wm(_, _.__c.__P, _.__c.__O);
      }
      var l;
      for (r.setState({ __a: r.__b = null }); l = r.t.pop(); )
        l.forceUpdate();
    }
  }, u = n.__h === !0;
  r.__u++ || u || r.setState({ __a: r.__b = r.__v.__k[0] }), e.then(s, s);
}, aa.prototype.componentWillUnmount = function() {
  this.t = [];
}, aa.prototype.render = function(e, n) {
  if (this.__b) {
    if (this.__v.__k) {
      var t = document.createElement("div"), r = this.__v.__k[0].__c;
      this.__v.__k[0] = Vm(this.__b, t, r.__O = r.__P);
    }
    this.__b = null;
  }
  var o = n.__a && j_(Qr, null, e.fallback);
  return o && (o.__h = null), [j_(Qr, null, n.__a ? null : e.children), o];
};
var Kc = function(e, n, t) {
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
  var n = this, t = Xm(n.__v), r = n.o.get(e);
  return r[0]++, function(o) {
    var i = function() {
      n.props.revealOrder ? (r.push(o), Kc(n, e, r)) : o();
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
    Kc(e, t, n);
  });
};
var sS = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, aS = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, uS = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, _S = /[A-Z0-9]/g, cS = typeof document < "u", lS = function(e) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e);
};
Kn.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
  Object.defineProperty(Kn.prototype, e, { configurable: !0, get: function() {
    return this["UNSAFE_" + e];
  }, set: function(n) {
    Object.defineProperty(this, e, { configurable: !0, writable: !0, value: n });
  } });
});
var $c = F.event;
function dS() {
}
function hS() {
  return this.cancelBubble;
}
function mS() {
  return this.defaultPrevented;
}
F.event = function(e) {
  return $c && (e = $c(e)), e.persist = dS, e.isPropagationStopped = hS, e.isDefaultPrevented = mS, e.nativeEvent = e;
};
var fS = { enumerable: !1, configurable: !0, get: function() {
  return this.class;
} }, zc = F.vnode;
F.vnode = function(e) {
  typeof e.type == "string" && function(n) {
    var t = n.props, r = n.type, o = {};
    for (var i in t) {
      var s = t[i];
      if (!(i === "value" && "defaultValue" in t && s == null || cS && i === "children" && r === "noscript" || i === "class" || i === "className")) {
        var a = i.toLowerCase();
        i === "defaultValue" && "value" in t && t.value == null ? i = "value" : i === "download" && s === !0 ? s = "" : a === "ondoubleclick" ? i = "ondblclick" : a !== "onchange" || r !== "input" && r !== "textarea" || lS(t.type) ? a === "onfocus" ? i = "onfocusin" : a === "onblur" ? i = "onfocusout" : uS.test(i) ? i = a : r.indexOf("-") === -1 && aS.test(i) ? i = i.replace(_S, "-$&").toLowerCase() : s === null && (s = void 0) : a = i = "oninput", a === "oninput" && o[i = a] && (i = "oninputCapture"), o[i] = s;
      }
    }
    r == "select" && o.multiple && Array.isArray(o.value) && (o.value = Pi(t.children).forEach(function(u) {
      u.props.selected = o.value.indexOf(u.props.value) != -1;
    })), r == "select" && o.defaultValue != null && (o.value = Pi(t.children).forEach(function(u) {
      u.props.selected = o.multiple ? o.defaultValue.indexOf(u.props.value) != -1 : o.defaultValue == u.props.value;
    })), t.class && !t.className ? (o.class = t.class, Object.defineProperty(o, "className", fS)) : (t.className && !t.class || t.class && t.className) && (o.class = o.className = t.className), n.props = o;
  }(e), e.$$typeof = sS, zc && zc(e);
};
var Jc = F.__r;
F.__r = function(e) {
  Jc && Jc(e), e.__c;
};
var qc = F.diffed;
F.diffed = function(e) {
  qc && qc(e);
  var n = e.props, t = e.__e;
  t != null && e.type === "textarea" && "value" in n && n.value !== t.value && (t.value = n.value == null ? "" : n.value);
};
const kS = zm(() => import("./editor-1c96e4e9.mjs").then((e) => e.e));
export {
  Fm as $,
  hu as A,
  GS as B,
  bt as C,
  Ra as D,
  dh as E,
  fE as F,
  Tu as G,
  PS as H,
  a1 as I,
  CS as J,
  ot as K,
  DS as L,
  MS as M,
  IS as N,
  _h as O,
  bS as P,
  Eg as Q,
  kO as R,
  uh as S,
  yS as T,
  _d as U,
  pg as V,
  kS as W,
  e1 as X,
  n1 as Y,
  tS as Z,
  gr as _,
  mr as a,
  rS as b,
  us as c,
  hr as d,
  sT as e,
  HS as f,
  AS as g,
  uT as h,
  ZO as i,
  nn as j,
  oT as k,
  Wd as l,
  LO as m,
  Nu as n,
  Qn as o,
  NS as p,
  cg as q,
  yt as r,
  Ce as s,
  Tg as t,
  xO as u,
  wS as v,
  ln as w,
  US as x,
  SS as y,
  vS as z
};
