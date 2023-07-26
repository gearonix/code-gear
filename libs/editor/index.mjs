import { jsx as E, jsxs as z, Fragment as Er } from "react/jsx-runtime";
import * as sn from "react";
import Ge, { useContext as Je, createContext as Ro, useReducer as Tc, useMemo as Jn, useState as We, forwardRef as ir, memo as sr, useRef as ee, useCallback as Ln, useEffect as Ne, createElement as If, useLayoutEffect as Ec, useImperativeHandle as Oc } from "react";
import { unstable_batchedUpdates as bc, createPortal as Af } from "react-dom";
import { message as Sf, ConfigProvider as vf, Button as Lr, Select as as, Typography as Gf, ColorPicker as g_, Switch as Cf, Tabs as Rc, Popconfirm as Df } from "antd";
import yf from "react-smooth-scrollbar";
import { Link as gc } from "react-router-dom";
const st = () => Je(Of), Uf = () => st().state, Nc = (e) => {
  const n = st(), t = n.state.selectedTerminalTab;
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
}, pn = () => Je(Gr).actions, Tn = () => Je(Gr), go = () => Je(Gr).getters, Hf = () => Je(Gr).services, hu = () => Je(Gr).storage, Ic = Ro({}), wf = ({ children: e }) => {
  const t = hu().get("EDITOR_HTML_PREVIEW", {
    html: "<h2>Hi! This is a realtime HTML editor.</h2>",
    css: "h2 {color: #C4CBDA;}",
    javascript: "// 😀"
  }), r = (a, u) => ({ ...a, ...u }), [o, i] = Tc(r, t), s = Jn(
    () => ({
      state: o,
      update: i
    }),
    [o]
  );
  return /* @__PURE__ */ E(Ic.Provider, { value: s, children: e });
}, Ac = () => Je(Ic);
function ae(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    t[r - 1] = arguments[r];
  throw new Error(typeof e == "number" ? "[MobX] minified error nr: " + e + (t.length ? " " + t.map(String).join(",") : "") + ". Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts" : "[MobX] " + e);
}
var Pf = {};
function mu() {
  return typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : Pf;
}
var Sc = Object.assign, yi = Object.getOwnPropertyDescriptor, Mn = Object.defineProperty, No = Object.prototype, Na = [];
Object.freeze(Na);
var vc = {};
Object.freeze(vc);
var Mf = typeof Proxy < "u", kf = /* @__PURE__ */ Object.toString();
function Gc() {
  Mf || ae("Proxy not available");
}
function Cc(e) {
  var n = !1;
  return function() {
    if (!n)
      return n = !0, e.apply(this, arguments);
  };
}
var $t = function() {
};
function Sn(e) {
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
function ot(e) {
  if (!us(e))
    return !1;
  var n = Object.getPrototypeOf(e);
  if (n == null)
    return !0;
  var t = Object.hasOwnProperty.call(n, "constructor") && n.constructor;
  return typeof t == "function" && t.toString() === kf;
}
function Dc(e) {
  var n = e?.constructor;
  return n ? n.name === "GeneratorFunction" || n.displayName === "GeneratorFunction" : !1;
}
function Io(e, n, t) {
  Mn(e, n, {
    enumerable: !1,
    writable: !0,
    configurable: !0,
    value: t
  });
}
function yc(e, n, t) {
  Mn(e, n, {
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
function Or(e) {
  return e instanceof Map;
}
function Ao(e) {
  return e instanceof Set;
}
var Uc = typeof Object.getOwnPropertySymbols < "u";
function xf(e) {
  var n = Object.keys(e);
  if (!Uc)
    return n;
  var t = Object.getOwnPropertySymbols(e);
  return t.length ? [].concat(n, t.filter(function(r) {
    return No.propertyIsEnumerable.call(e, r);
  })) : n;
}
var ar = typeof Reflect < "u" && Reflect.ownKeys ? Reflect.ownKeys : Uc ? function(e) {
  return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
} : (
  /* istanbul ignore next */
  Object.getOwnPropertyNames
);
function Hc(e) {
  return e === null ? null : typeof e == "object" ? "" + e : e;
}
function et(e, n) {
  return No.hasOwnProperty.call(e, n);
}
var Lf = Object.getOwnPropertyDescriptors || function(n) {
  var t = {};
  return ar(n).forEach(function(r) {
    t[r] = yi(n, r);
  }), t;
};
function N_(e, n) {
  for (var t = 0; t < n.length; t++) {
    var r = n[t];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Ff(r.key), r);
  }
}
function fu(e, n, t) {
  return n && N_(e.prototype, n), t && N_(e, t), Object.defineProperty(e, "prototype", {
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
function wc(e, n) {
  e.prototype = Object.create(n.prototype), e.prototype.constructor = e, Ia(e, n);
}
function Ia(e, n) {
  return Ia = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, Ia(e, n);
}
function zs(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Bf(e, n) {
  if (e) {
    if (typeof e == "string")
      return I_(e, n);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set")
      return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return I_(e, n);
  }
}
function I_(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var t = 0, r = new Array(n); t < n; t++)
    r[t] = e[t];
  return r;
}
function zt(e, n) {
  var t = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t)
    return (t = t.call(e)).next.bind(t);
  if (Array.isArray(e) || (t = Bf(e)) || n && e && typeof e.length == "number") {
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
function jf(e, n) {
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
function Ff(e) {
  var n = jf(e, "string");
  return typeof n == "symbol" ? n : String(n);
}
var wn = /* @__PURE__ */ Symbol("mobx-stored-annotations");
function kn(e) {
  function n(t, r) {
    So(t, r, e);
  }
  return Object.assign(n, e);
}
function So(e, n, t) {
  et(e, wn) || Io(e, wn, ur({}, e[wn])), qf(t) || (e[wn][n] = t);
}
function Vf(e) {
  return et(e, wn) || Io(e, wn, ur({}, e[wn])), e[wn];
}
var W = /* @__PURE__ */ Symbol("mobx administration"), vo = /* @__PURE__ */ function() {
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
    return ed(this);
  }, n.reportChanged = function() {
    en(), nd(this), G.stateVersion = G.stateVersion < Number.MAX_SAFE_INTEGER ? G.stateVersion + 1 : Number.MIN_SAFE_INTEGER, nn();
  }, n.toString = function() {
    return this.name_;
  }, e;
}(), pu = /* @__PURE__ */ Gt("Atom", vo);
function Pc(e, n, t) {
  n === void 0 && (n = $t), t === void 0 && (t = $t);
  var r = new vo(e);
  return n !== $t && Qp(r, n), t !== $t && ud(r, t), r;
}
function Wf(e, n) {
  return e === n;
}
function Xf(e, n) {
  return Nu(e, n);
}
function Kf(e, n) {
  return Nu(e, n, 1);
}
function Yf(e, n) {
  return Object.is ? Object.is(e, n) : e === n ? e !== 0 || 1 / e === 1 / n : e !== e && n !== n;
}
var Ui = {
  identity: Wf,
  structural: Xf,
  default: Yf,
  shallow: Kf
};
function _r(e, n, t) {
  return bu(e) ? e : Array.isArray(e) ? je.array(e, {
    name: t
  }) : ot(e) ? je.object(e, void 0, {
    name: t
  }) : Or(e) ? je.map(e, {
    name: t
  }) : Ao(e) ? je.set(e, {
    name: t
  }) : typeof e == "function" && !Ou(e) && !ki(e) ? Dc(e) ? no(e) : eo(t, e) : e;
}
function $f(e, n, t) {
  if (e == null || cr(e) || wo(e) || Dt(e) || Bt(e))
    return e;
  if (Array.isArray(e))
    return je.array(e, {
      name: t,
      deep: !1
    });
  if (ot(e))
    return je.object(e, void 0, {
      name: t,
      deep: !1
    });
  if (Or(e))
    return je.map(e, {
      name: t,
      deep: !1
    });
  if (Ao(e))
    return je.set(e, {
      name: t,
      deep: !1
    });
}
function _s(e) {
  return e;
}
function zf(e, n) {
  return Nu(e, n) ? n : e;
}
var Jf = "override";
function qf(e) {
  return e.annotationType_ === Jf;
}
function Go(e, n) {
  return {
    annotationType_: e,
    options_: n,
    make_: Qf,
    extend_: Zf
  };
}
function Qf(e, n, t, r) {
  var o;
  if ((o = this.options_) != null && o.bound)
    return this.extend_(e, n, t, !1) === null ? 0 : 1;
  if (r === e.target_)
    return this.extend_(e, n, t, !1) === null ? 0 : 2;
  if (Ou(t.value))
    return 1;
  var i = Mc(e, this, n, t, !1);
  return Mn(r, n, i), 2;
}
function Zf(e, n, t, r) {
  var o = Mc(e, this, n, t);
  return e.defineProperty_(n, o, r);
}
function ep(e, n, t, r) {
  n.annotationType_, r.value;
}
function Mc(e, n, t, r, o) {
  var i, s, a, u, _, c, l;
  o === void 0 && (o = G.safeDescriptors), ep(e, n, t, r);
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
function kc(e, n) {
  return {
    annotationType_: e,
    options_: n,
    make_: np,
    extend_: tp
  };
}
function np(e, n, t, r) {
  var o;
  if (r === e.target_)
    return this.extend_(e, n, t, !1) === null ? 0 : 2;
  if ((o = this.options_) != null && o.bound && (!et(e.target_, n) || !ki(e.target_[n])) && this.extend_(e, n, t, !1) === null)
    return 0;
  if (ki(t.value))
    return 1;
  var i = xc(e, this, n, t, !1, !1);
  return Mn(r, n, i), 2;
}
function tp(e, n, t, r) {
  var o, i = xc(e, this, n, t, (o = this.options_) == null ? void 0 : o.bound);
  return e.defineProperty_(n, i, r);
}
function rp(e, n, t, r) {
  n.annotationType_, r.value;
}
function xc(e, n, t, r, o, i) {
  i === void 0 && (i = G.safeDescriptors), rp(e, n, t, r);
  var s = r.value;
  if (ki(s) || (s = no(s)), o) {
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
function Tu(e, n) {
  return {
    annotationType_: e,
    options_: n,
    make_: op,
    extend_: ip
  };
}
function op(e, n, t) {
  return this.extend_(e, n, t, !1) === null ? 0 : 1;
}
function ip(e, n, t, r) {
  return sp(e, this, n, t), e.defineComputedProperty_(n, ur({}, this.options_, {
    get: t.get,
    set: t.set
  }), r);
}
function sp(e, n, t, r) {
  n.annotationType_, r.get;
}
function ls(e, n) {
  return {
    annotationType_: e,
    options_: n,
    make_: ap,
    extend_: up
  };
}
function ap(e, n, t) {
  return this.extend_(e, n, t, !1) === null ? 0 : 1;
}
function up(e, n, t, r) {
  var o, i;
  return _p(e, this), e.defineObservableProperty_(n, t.value, (o = (i = this.options_) == null ? void 0 : i.enhancer) != null ? o : _r, r);
}
function _p(e, n, t, r) {
  n.annotationType_;
}
var lp = "true", cp = /* @__PURE__ */ Lc();
function Lc(e) {
  return {
    annotationType_: lp,
    options_: e,
    make_: dp,
    extend_: hp
  };
}
function dp(e, n, t, r) {
  var o, i;
  if (t.get)
    return cs.make_(e, n, t, r);
  if (t.set) {
    var s = lr(n.toString(), t.set);
    return r === e.target_ ? e.defineProperty_(n, {
      configurable: G.safeDescriptors ? e.isPlainObject_ : !0,
      set: s
    }) === null ? 0 : 2 : (Mn(r, n, {
      configurable: !0,
      set: s
    }), 2);
  }
  if (r !== e.target_ && typeof t.value == "function") {
    var a;
    if (Dc(t.value)) {
      var u, _ = (u = this.options_) != null && u.autoBind ? no.bound : no;
      return _.make_(e, n, t, r);
    }
    var c = (a = this.options_) != null && a.autoBind ? eo.bound : eo;
    return c.make_(e, n, t, r);
  }
  var l = ((o = this.options_) == null ? void 0 : o.deep) === !1 ? je.ref : je;
  if (typeof t.value == "function" && (i = this.options_) != null && i.autoBind) {
    var f;
    t.value = t.value.bind((f = e.proxy_) != null ? f : e.target_);
  }
  return l.make_(e, n, t, r);
}
function hp(e, n, t, r) {
  var o, i;
  if (t.get)
    return cs.extend_(e, n, t, r);
  if (t.set)
    return e.defineProperty_(n, {
      configurable: G.safeDescriptors ? e.isPlainObject_ : !0,
      set: lr(n.toString(), t.set)
    }, r);
  if (typeof t.value == "function" && (o = this.options_) != null && o.autoBind) {
    var s;
    t.value = t.value.bind((s = e.proxy_) != null ? s : e.target_);
  }
  var a = ((i = this.options_) == null ? void 0 : i.deep) === !1 ? je.ref : je;
  return a.extend_(e, n, t, r);
}
var mp = "observable", fp = "observable.ref", pp = "observable.shallow", Tp = "observable.struct", Bc = {
  deep: !0,
  name: void 0,
  defaultDecorator: void 0,
  proxy: !0
};
Object.freeze(Bc);
function Jo(e) {
  return e || Bc;
}
var jc = /* @__PURE__ */ ls(mp), Ep = /* @__PURE__ */ ls(fp, {
  enhancer: _s
}), Op = /* @__PURE__ */ ls(pp, {
  enhancer: $f
}), bp = /* @__PURE__ */ ls(Tp, {
  enhancer: zf
}), Fc = /* @__PURE__ */ kn(jc);
function qo(e) {
  return e.deep === !0 ? _r : e.deep === !1 ? _s : gp(e.defaultDecorator);
}
function Rp(e) {
  var n;
  return e ? (n = e.defaultDecorator) != null ? n : Lc(e) : void 0;
}
function gp(e) {
  var n, t;
  return e && (n = (t = e.options_) == null ? void 0 : t.enhancer) != null ? n : _r;
}
function Vc(e, n, t) {
  if (xt(n)) {
    So(e, n, jc);
    return;
  }
  return bu(e) ? e : ot(e) ? je.object(e, n, t) : Array.isArray(e) ? je.array(e, n) : Or(e) ? je.map(e, n) : Ao(e) ? je.set(e, n) : typeof e == "object" && e !== null ? e : je.box(e, n);
}
Sc(Vc, Fc);
var Np = {
  box: function(n, t) {
    var r = Jo(t);
    return new Mt(n, qo(r), r.name, !0, r.equals);
  },
  array: function(n, t) {
    var r = Jo(t);
    return (G.useProxies === !1 || r.proxy === !1 ? gT : hT)(n, qo(r), r.name);
  },
  map: function(n, t) {
    var r = Jo(t);
    return new Td(n, qo(r), r.name);
  },
  set: function(n, t) {
    var r = Jo(t);
    return new bd(n, qo(r), r.name);
  },
  object: function(n, t, r) {
    return ld(G.useProxies === !1 || r?.proxy === !1 ? Po({}, r) : _T({}, r), n, t);
  },
  ref: /* @__PURE__ */ kn(Ep),
  shallow: /* @__PURE__ */ kn(Op),
  deep: Fc,
  struct: /* @__PURE__ */ kn(bp)
}, je = /* @__PURE__ */ Sc(Vc, Np), Wc = "computed", Ip = "computed.struct", Xc = /* @__PURE__ */ Tu(Wc), Ap = /* @__PURE__ */ Tu(Ip, {
  equals: Ui.structural
}), cs = function(n, t) {
  if (xt(t))
    return So(n, t, Xc);
  if (ot(n))
    return kn(Tu(Wc, n));
  var r = ot(t) ? t : {};
  return r.get = n, r.name || (r.name = n.name || ""), new Qr(r);
};
Object.assign(cs, Xc);
cs.struct = /* @__PURE__ */ kn(Ap);
var A_, S_, Hi = 0, Sp = 1, vp = (A_ = (S_ = /* @__PURE__ */ yi(function() {
}, "name")) == null ? void 0 : S_.configurable) != null ? A_ : !1, v_ = {
  value: "action",
  configurable: !0,
  writable: !1,
  enumerable: !1
};
function lr(e, n, t, r) {
  t === void 0 && (t = !1);
  function o() {
    return Gp(e, t, n, r || this, arguments);
  }
  return o.isMobxAction = !0, vp && (v_.value = e, Mn(o, "name", v_)), o;
}
function Gp(e, n, t, r, o) {
  var i = Cp(e, n);
  try {
    return t.apply(r, o);
  } catch (s) {
    throw i.error_ = s, s;
  } finally {
    Dp(i);
  }
}
function Cp(e, n, t, r) {
  var o = !1, i = 0, s = G.trackingDerivation, a = !n || !s;
  en();
  var u = G.allowStateChanges;
  a && (br(), u = Co(!0));
  var _ = Eu(!0), c = {
    runAsAction_: a,
    prevDerivation_: s,
    prevAllowStateChanges_: u,
    prevAllowStateReads_: _,
    notifySpy_: o,
    startTime_: i,
    actionId_: Sp++,
    parentActionId_: Hi
  };
  return Hi = c.actionId_, c;
}
function Dp(e) {
  Hi !== e.actionId_ && ae(30), Hi = e.parentActionId_, e.error_ !== void 0 && (G.suppressReactionErrors = !0), Do(e.prevAllowStateChanges_), Fr(e.prevAllowStateReads_), nn(), e.runAsAction_ && gt(e.prevDerivation_), G.suppressReactionErrors = !1;
}
function yp(e, n) {
  var t = Co(e);
  try {
    return n();
  } finally {
    Do(t);
  }
}
function Co(e) {
  var n = G.allowStateChanges;
  return G.allowStateChanges = e, n;
}
function Do(e) {
  G.allowStateChanges = e;
}
var Kc;
Kc = Symbol.toPrimitive;
var Mt = /* @__PURE__ */ function(e) {
  wc(n, e);
  function n(r, o, i, s, a) {
    var u;
    return i === void 0 && (i = "ObservableValue"), a === void 0 && (a = Ui.default), u = e.call(this, i) || this, u.enhancer = void 0, u.name_ = void 0, u.equals = void 0, u.hasUnreportedChange_ = !1, u.interceptors_ = void 0, u.changeListeners_ = void 0, u.value_ = void 0, u.dehancer = void 0, u.enhancer = o, u.name_ = i, u.equals = a, u.value_ = o(r, void 0, i), u;
  }
  var t = n.prototype;
  return t.dehanceValue = function(o) {
    return this.dehancer !== void 0 ? this.dehancer(o) : o;
  }, t.set = function(o) {
    this.value_, o = this.prepareNewValue_(o), o !== G.UNCHANGED && this.setNewValue_(o);
  }, t.prepareNewValue_ = function(o) {
    if (cn(this)) {
      var i = dn(this, {
        object: this,
        type: xn,
        newValue: o
      });
      if (!i)
        return G.UNCHANGED;
      o = i.newValue;
    }
    return o = this.enhancer(o, this.value_, this.name_), this.equals(this.value_, o) ? G.UNCHANGED : o;
  }, t.setNewValue_ = function(o) {
    var i = this.value_;
    this.value_ = o, this.reportChanged(), In(this) && An(this, {
      type: xn,
      object: this,
      newValue: o,
      oldValue: i
    });
  }, t.get = function() {
    return this.reportObserved(), this.dehanceValue(this.value_);
  }, t.intercept_ = function(o) {
    return Uo(this, o);
  }, t.observe_ = function(o, i) {
    return i && o({
      observableKind: "value",
      debugObjectName: this.name_,
      object: this,
      type: xn,
      newValue: this.value_,
      oldValue: void 0
    }), Ho(this, o);
  }, t.raw = function() {
    return this.value_;
  }, t.toJSON = function() {
    return this.get();
  }, t.toString = function() {
    return this.name_ + "[" + this.value_ + "]";
  }, t.valueOf = function() {
    return Hc(this.get());
  }, t[Kc] = function() {
    return this.valueOf();
  }, n;
}(vo), Up = /* @__PURE__ */ Gt("ObservableValue", Mt), Yc;
Yc = Symbol.toPrimitive;
var Qr = /* @__PURE__ */ function() {
  function e(t) {
    this.dependenciesState_ = se.NOT_TRACKING_, this.observing_ = [], this.newObserving_ = null, this.isBeingObserved_ = !1, this.isPendingUnobservation_ = !1, this.observers_ = /* @__PURE__ */ new Set(), this.diffValue_ = 0, this.runId_ = 0, this.lastAccessedBy_ = 0, this.lowestObserverState_ = se.UP_TO_DATE_, this.unboundDepsCount_ = 0, this.value_ = new Pi(null), this.name_ = void 0, this.triggeredBy_ = void 0, this.isComputing_ = !1, this.isRunningSetter_ = !1, this.derivation = void 0, this.setter_ = void 0, this.isTracing_ = wi.NONE, this.scope_ = void 0, this.equals_ = void 0, this.requiresReaction_ = void 0, this.keepAlive_ = void 0, this.onBOL = void 0, this.onBUOL = void 0, t.get || ae(31), this.derivation = t.get, this.name_ = t.name || "ComputedValue", t.set && (this.setter_ = lr("ComputedValue-setter", t.set)), this.equals_ = t.equals || (t.compareStructural || t.struct ? Ui.structural : Ui.default), this.scope_ = t.context, this.requiresReaction_ = t.requiresReaction, this.keepAlive_ = !!t.keepAlive;
  }
  var n = e.prototype;
  return n.onBecomeStale_ = function() {
    kp(this);
  }, n.onBO = function() {
    this.onBOL && this.onBOL.forEach(function(r) {
      return r();
    });
  }, n.onBUO = function() {
    this.onBUOL && this.onBUOL.forEach(function(r) {
      return r();
    });
  }, n.get = function() {
    if (this.isComputing_ && ae(32, this.name_, this.derivation), G.inBatch === 0 && // !globalState.trackingDerivatpion &&
    this.observers_.size === 0 && !this.keepAlive_)
      Aa(this) && (this.warnAboutUntrackedRead_(), en(), this.value_ = this.computeValue_(!1), nn());
    else if (ed(this), Aa(this)) {
      var r = G.trackingContext;
      this.keepAlive_ && !r && (G.trackingContext = this), this.trackAndCompute() && Mp(this), G.trackingContext = r;
    }
    var o = this.value_;
    if (ci(o))
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
    ), i = this.computeValue_(!0), s = o || ci(r) || ci(i) || !this.equals_(r, i);
    return s && (this.value_ = i), s;
  }, n.computeValue_ = function(r) {
    this.isComputing_ = !0;
    var o = Co(!1), i;
    if (r)
      i = $c(this, this.derivation, this.scope_);
    else if (G.disableErrorBoundaries === !0)
      i = this.derivation.call(this.scope_);
    else
      try {
        i = this.derivation.call(this.scope_);
      } catch (s) {
        i = new Pi(s);
      }
    return Do(o), this.isComputing_ = !1, i;
  }, n.suspend_ = function() {
    this.keepAlive_ || (Sa(this), this.value_ = void 0);
  }, n.observe_ = function(r, o) {
    var i = this, s = !0, a = void 0;
    return Yp(function() {
      var u = i.get();
      if (!s || o) {
        var _ = br();
        r({
          observableKind: "computed",
          debugObjectName: i.name_,
          type: xn,
          object: i,
          newValue: u,
          oldValue: a
        }), gt(_);
      }
      s = !1, a = u;
    });
  }, n.warnAboutUntrackedRead_ = function() {
  }, n.toString = function() {
    return this.name_ + "[" + this.derivation.toString() + "]";
  }, n.valueOf = function() {
    return Hc(this.get());
  }, n[Yc] = function() {
    return this.valueOf();
  }, e;
}(), yo = /* @__PURE__ */ Gt("ComputedValue", Qr), se;
(function(e) {
  e[e.NOT_TRACKING_ = -1] = "NOT_TRACKING_", e[e.UP_TO_DATE_ = 0] = "UP_TO_DATE_", e[e.POSSIBLY_STALE_ = 1] = "POSSIBLY_STALE_", e[e.STALE_ = 2] = "STALE_";
})(se || (se = {}));
var wi;
(function(e) {
  e[e.NONE = 0] = "NONE", e[e.LOG = 1] = "LOG", e[e.BREAK = 2] = "BREAK";
})(wi || (wi = {}));
var Pi = function(n) {
  this.cause = void 0, this.cause = n;
};
function ci(e) {
  return e instanceof Pi;
}
function Aa(e) {
  switch (e.dependenciesState_) {
    case se.UP_TO_DATE_:
      return !1;
    case se.NOT_TRACKING_:
    case se.STALE_:
      return !0;
    case se.POSSIBLY_STALE_: {
      for (var n = Eu(!0), t = br(), r = e.observing_, o = r.length, i = 0; i < o; i++) {
        var s = r[i];
        if (yo(s)) {
          if (G.disableErrorBoundaries)
            s.get();
          else
            try {
              s.get();
            } catch {
              return gt(t), Fr(n), !0;
            }
          if (e.dependenciesState_ === se.STALE_)
            return gt(t), Fr(n), !0;
        }
      }
      return Jc(e), gt(t), Fr(n), !1;
    }
  }
}
function $c(e, n, t) {
  var r = Eu(!0);
  Jc(e), e.newObserving_ = new Array(e.observing_.length + 100), e.unboundDepsCount_ = 0, e.runId_ = ++G.runId;
  var o = G.trackingDerivation;
  G.trackingDerivation = e, G.inBatch++;
  var i;
  if (G.disableErrorBoundaries === !0)
    i = n.call(t);
  else
    try {
      i = n.call(t);
    } catch (s) {
      i = new Pi(s);
    }
  return G.inBatch--, G.trackingDerivation = o, Hp(e), Fr(r), i;
}
function Hp(e) {
  for (var n = e.observing_, t = e.observing_ = e.newObserving_, r = se.UP_TO_DATE_, o = 0, i = e.unboundDepsCount_, s = 0; s < i; s++) {
    var a = t[s];
    a.diffValue_ === 0 && (a.diffValue_ = 1, o !== s && (t[o] = a), o++), a.dependenciesState_ > r && (r = a.dependenciesState_);
  }
  for (t.length = o, e.newObserving_ = null, i = n.length; i--; ) {
    var u = n[i];
    u.diffValue_ === 0 && Qc(u, e), u.diffValue_ = 0;
  }
  for (; o--; ) {
    var _ = t[o];
    _.diffValue_ === 1 && (_.diffValue_ = 0, Pp(_, e));
  }
  r !== se.UP_TO_DATE_ && (e.dependenciesState_ = r, e.onBecomeStale_());
}
function Sa(e) {
  var n = e.observing_;
  e.observing_ = [];
  for (var t = n.length; t--; )
    Qc(n[t], e);
  e.dependenciesState_ = se.NOT_TRACKING_;
}
function zc(e) {
  var n = br();
  try {
    return e();
  } finally {
    gt(n);
  }
}
function br() {
  var e = G.trackingDerivation;
  return G.trackingDerivation = null, e;
}
function gt(e) {
  G.trackingDerivation = e;
}
function Eu(e) {
  var n = G.allowStateReads;
  return G.allowStateReads = e, n;
}
function Fr(e) {
  G.allowStateReads = e;
}
function Jc(e) {
  if (e.dependenciesState_ !== se.UP_TO_DATE_) {
    e.dependenciesState_ = se.UP_TO_DATE_;
    for (var n = e.observing_, t = n.length; t--; )
      n[t].lowestObserverState_ = se.UP_TO_DATE_;
  }
}
var di = function() {
  this.version = 6, this.UNCHANGED = {}, this.trackingDerivation = null, this.trackingContext = null, this.runId = 0, this.mobxGuid = 0, this.inBatch = 0, this.pendingUnobservations = [], this.pendingReactions = [], this.isRunningReactions = !1, this.allowStateChanges = !1, this.allowStateReads = !0, this.enforceActions = !0, this.spyListeners = [], this.globalReactionErrorHandlers = [], this.computedRequiresReaction = !1, this.reactionRequiresObservable = !1, this.observableRequiresReaction = !1, this.disableErrorBoundaries = !1, this.suppressReactionErrors = !1, this.useProxies = !0, this.verifyProxies = !1, this.safeDescriptors = !0, this.stateVersion = Number.MIN_SAFE_INTEGER;
}, hi = !0, qc = !1, G = /* @__PURE__ */ function() {
  var e = /* @__PURE__ */ mu();
  return e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (hi = !1), e.__mobxGlobals && e.__mobxGlobals.version !== new di().version && (hi = !1), hi ? e.__mobxGlobals ? (e.__mobxInstanceCount += 1, e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}), e.__mobxGlobals) : (e.__mobxInstanceCount = 1, e.__mobxGlobals = /* @__PURE__ */ new di()) : (setTimeout(function() {
    qc || ae(35);
  }, 1), new di());
}();
function wp() {
  if ((G.pendingReactions.length || G.inBatch || G.isRunningReactions) && ae(36), qc = !0, hi) {
    var e = mu();
    --e.__mobxInstanceCount === 0 && (e.__mobxGlobals = void 0), G = new di();
  }
}
function Pp(e, n) {
  e.observers_.add(n), e.lowestObserverState_ > n.dependenciesState_ && (e.lowestObserverState_ = n.dependenciesState_);
}
function Qc(e, n) {
  e.observers_.delete(n), e.observers_.size === 0 && Zc(e);
}
function Zc(e) {
  e.isPendingUnobservation_ === !1 && (e.isPendingUnobservation_ = !0, G.pendingUnobservations.push(e));
}
function en() {
  G.inBatch++;
}
function nn() {
  if (--G.inBatch === 0) {
    td();
    for (var e = G.pendingUnobservations, n = 0; n < e.length; n++) {
      var t = e[n];
      t.isPendingUnobservation_ = !1, t.observers_.size === 0 && (t.isBeingObserved_ && (t.isBeingObserved_ = !1, t.onBUO()), t instanceof Qr && t.suspend_());
    }
    G.pendingUnobservations = [];
  }
}
function ed(e) {
  var n = G.trackingDerivation;
  return n !== null ? (n.runId_ !== e.lastAccessedBy_ && (e.lastAccessedBy_ = n.runId_, n.newObserving_[n.unboundDepsCount_++] = e, !e.isBeingObserved_ && G.trackingContext && (e.isBeingObserved_ = !0, e.onBO())), e.isBeingObserved_) : (e.observers_.size === 0 && G.inBatch > 0 && Zc(e), !1);
}
function nd(e) {
  e.lowestObserverState_ !== se.STALE_ && (e.lowestObserverState_ = se.STALE_, e.observers_.forEach(function(n) {
    n.dependenciesState_ === se.UP_TO_DATE_ && n.onBecomeStale_(), n.dependenciesState_ = se.STALE_;
  }));
}
function Mp(e) {
  e.lowestObserverState_ !== se.STALE_ && (e.lowestObserverState_ = se.STALE_, e.observers_.forEach(function(n) {
    n.dependenciesState_ === se.POSSIBLY_STALE_ ? n.dependenciesState_ = se.STALE_ : n.dependenciesState_ === se.UP_TO_DATE_ && (e.lowestObserverState_ = se.UP_TO_DATE_);
  }));
}
function kp(e) {
  e.lowestObserverState_ === se.UP_TO_DATE_ && (e.lowestObserverState_ = se.POSSIBLY_STALE_, e.observers_.forEach(function(n) {
    n.dependenciesState_ === se.UP_TO_DATE_ && (n.dependenciesState_ = se.POSSIBLY_STALE_, n.onBecomeStale_());
  }));
}
var Zr = /* @__PURE__ */ function() {
  function e(t, r, o, i) {
    t === void 0 && (t = "Reaction"), this.name_ = void 0, this.onInvalidate_ = void 0, this.errorHandler_ = void 0, this.requiresObservable_ = void 0, this.observing_ = [], this.newObserving_ = [], this.dependenciesState_ = se.NOT_TRACKING_, this.diffValue_ = 0, this.runId_ = 0, this.unboundDepsCount_ = 0, this.isDisposed_ = !1, this.isScheduled_ = !1, this.isTrackPending_ = !1, this.isRunning_ = !1, this.isTracing_ = wi.NONE, this.name_ = t, this.onInvalidate_ = r, this.errorHandler_ = o, this.requiresObservable_ = i;
  }
  var n = e.prototype;
  return n.onBecomeStale_ = function() {
    this.schedule_();
  }, n.schedule_ = function() {
    this.isScheduled_ || (this.isScheduled_ = !0, G.pendingReactions.push(this), td());
  }, n.isScheduled = function() {
    return this.isScheduled_;
  }, n.runReaction_ = function() {
    if (!this.isDisposed_) {
      en(), this.isScheduled_ = !1;
      var r = G.trackingContext;
      if (G.trackingContext = this, Aa(this)) {
        this.isTrackPending_ = !0;
        try {
          this.onInvalidate_();
        } catch (o) {
          this.reportExceptionInDerivation_(o);
        }
      }
      G.trackingContext = r, nn();
    }
  }, n.track = function(r) {
    if (!this.isDisposed_) {
      en(), this.isRunning_ = !0;
      var o = G.trackingContext;
      G.trackingContext = this;
      var i = $c(this, r, void 0);
      G.trackingContext = o, this.isRunning_ = !1, this.isTrackPending_ = !1, this.isDisposed_ && Sa(this), ci(i) && this.reportExceptionInDerivation_(i.cause), nn();
    }
  }, n.reportExceptionInDerivation_ = function(r) {
    var o = this;
    if (this.errorHandler_) {
      this.errorHandler_(r, this);
      return;
    }
    if (G.disableErrorBoundaries)
      throw r;
    var i = "[mobx] uncaught error in '" + this + "'";
    G.suppressReactionErrors || console.error(i, r), G.globalReactionErrorHandlers.forEach(function(s) {
      return s(r, o);
    });
  }, n.dispose = function() {
    this.isDisposed_ || (this.isDisposed_ = !0, this.isRunning_ || (en(), Sa(this), nn()));
  }, n.getDisposer_ = function(r) {
    var o = this, i = function s() {
      o.dispose(), r == null || r.removeEventListener == null || r.removeEventListener("abort", s);
    };
    return r == null || r.addEventListener == null || r.addEventListener("abort", i), i[W] = this, i;
  }, n.toString = function() {
    return "Reaction[" + this.name_ + "]";
  }, n.trace = function(r) {
  }, e;
}(), xp = 100, va = function(n) {
  return n();
};
function td() {
  G.inBatch > 0 || G.isRunningReactions || va(Lp);
}
function Lp() {
  G.isRunningReactions = !0;
  for (var e = G.pendingReactions, n = 0; e.length > 0; ) {
    ++n === xp && (console.error("[mobx] cycle in reaction: " + e[0]), e.splice(0));
    for (var t = e.splice(0), r = 0, o = t.length; r < o; r++)
      t[r].runReaction_();
  }
  G.isRunningReactions = !1;
}
var Mi = /* @__PURE__ */ Gt("Reaction", Zr);
function Bp(e) {
  var n = va;
  va = function(r) {
    return e(function() {
      return n(r);
    });
  };
}
function Vr() {
  return !1;
}
function jp(e) {
  return console.warn("[mobx.spy] Is a no-op in production builds"), function() {
  };
}
var rd = "action", Fp = "action.bound", od = "autoAction", Vp = "autoAction.bound", Wp = "<unnamed action>", id = /* @__PURE__ */ Go(rd), Xp = /* @__PURE__ */ Go(Fp, {
  bound: !0
}), sd = /* @__PURE__ */ Go(od, {
  autoAction: !0
}), Kp = /* @__PURE__ */ Go(Vp, {
  autoAction: !0,
  bound: !0
});
function ad(e) {
  var n = function(r, o) {
    if (Sn(r))
      return lr(r.name || Wp, r, e);
    if (Sn(o))
      return lr(r, o, e);
    if (xt(o))
      return So(r, o, e ? sd : id);
    if (xt(r))
      return kn(Go(e ? od : rd, {
        name: r,
        autoAction: e
      }));
  };
  return n;
}
var Jt = /* @__PURE__ */ ad(!1);
Object.assign(Jt, id);
var eo = /* @__PURE__ */ ad(!0);
Object.assign(eo, sd);
Jt.bound = /* @__PURE__ */ kn(Xp);
eo.bound = /* @__PURE__ */ kn(Kp);
function Ou(e) {
  return Sn(e) && e.isMobxAction === !0;
}
function Yp(e, n) {
  var t, r, o, i, s;
  n === void 0 && (n = vc);
  var a = (t = (r = n) == null ? void 0 : r.name) != null ? t : "Autorun", u = !n.scheduler && !n.delay, _;
  if (u)
    _ = new Zr(a, function() {
      this.track(f);
    }, n.onError, n.requiresObservable);
  else {
    var c = zp(n), l = !1;
    _ = new Zr(a, function() {
      l || (l = !0, c(function() {
        l = !1, _.isDisposed_ || _.track(f);
      }));
    }, n.onError, n.requiresObservable);
  }
  function f() {
    e(_);
  }
  return (o = n) != null && (i = o.signal) != null && i.aborted || _.schedule_(), _.getDisposer_((s = n) == null ? void 0 : s.signal);
}
var $p = function(n) {
  return n();
};
function zp(e) {
  return e.scheduler ? e.scheduler : e.delay ? function(n) {
    return setTimeout(n, e.delay);
  } : $p;
}
var Jp = "onBO", qp = "onBUO";
function Qp(e, n, t) {
  return _d(Jp, e, n, t);
}
function ud(e, n, t) {
  return _d(qp, e, n, t);
}
function _d(e, n, t, r) {
  var o = typeof r == "function" ? dr(n, t) : dr(n), i = Sn(r) ? r : t, s = e + "L";
  return o[s] ? o[s].add(i) : o[s] = /* @__PURE__ */ new Set([i]), function() {
    var a = o[s];
    a && (a.delete(i), a.size === 0 && delete o[s]);
  };
}
var Zp = "never", Qo = "always", eT = "observed";
function nT(e) {
  e.isolateGlobalState === !0 && wp();
  var n = e.useProxies, t = e.enforceActions;
  if (n !== void 0 && (G.useProxies = n === Qo ? !0 : n === Zp ? !1 : typeof Proxy < "u"), n === "ifavailable" && (G.verifyProxies = !0), t !== void 0) {
    var r = t === Qo ? Qo : t === eT;
    G.enforceActions = r, G.allowStateChanges = !(r === !0 || r === Qo);
  }
  ["computedRequiresReaction", "reactionRequiresObservable", "observableRequiresReaction", "disableErrorBoundaries", "safeDescriptors"].forEach(function(o) {
    o in e && (G[o] = !!e[o]);
  }), G.allowStateReads = !G.observableRequiresReaction, e.reactionScheduler && Bp(e.reactionScheduler);
}
function ld(e, n, t, r) {
  var o = Lf(n), i = Po(e, r)[W];
  en();
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
    nn();
  }
  return e;
}
function tT(e, n) {
  return cd(dr(e, n));
}
function cd(e) {
  var n = {
    name: e.name_
  };
  return e.observing_ && e.observing_.length > 0 && (n.dependencies = rT(e.observing_).map(cd)), n;
}
function rT(e) {
  return Array.from(new Set(e));
}
var oT = 0;
function dd() {
  this.message = "FLOW_CANCELLED";
}
dd.prototype = /* @__PURE__ */ Object.create(Error.prototype);
var G_ = /* @__PURE__ */ kc("flow"), iT = /* @__PURE__ */ kc("flow.bound", {
  bound: !0
}), no = /* @__PURE__ */ Object.assign(function(n, t) {
  if (xt(t))
    return So(n, t, G_);
  var r = n, o = r.name || "<unnamed flow>", i = function() {
    var a = this, u = arguments, _ = ++oT, c = Jt(o + " - runid: " + _ + " - init", r).apply(a, u), l, f = void 0, T = new Promise(function(d, h) {
      var m = 0;
      l = h;
      function b(A) {
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
        if (Sn(A?.then)) {
          A.then(N, h);
          return;
        }
        return A.done ? d(A.value) : (f = Promise.resolve(A.value), f.then(b, R));
      }
      b(void 0);
    });
    return T.cancel = Jt(o + " - runid: " + _ + " - cancel", function() {
      try {
        f && C_(f);
        var d = c.return(void 0), h = Promise.resolve(d.value);
        h.then($t, $t), C_(h), l(new dd());
      } catch (m) {
        l(m);
      }
    }), T;
  };
  return i.isMobXFlow = !0, i;
}, G_);
no.bound = /* @__PURE__ */ kn(iT);
function C_(e) {
  Sn(e.cancel) && e.cancel();
}
function ki(e) {
  return e?.isMobXFlow === !0;
}
function sT(e, n) {
  return e ? n !== void 0 ? cr(e) ? e[W].values_.has(n) : !1 : cr(e) || !!e[W] || pu(e) || Mi(e) || yo(e) : !1;
}
function bu(e) {
  return sT(e);
}
function aT(e) {
  if (cr(e))
    return e[W].ownKeys_();
  ae(38);
}
function Zo(e, n, t) {
  return e.set(n, t), t;
}
function Kt(e, n) {
  if (e == null || typeof e != "object" || e instanceof Date || !bu(e))
    return e;
  if (Up(e) || yo(e))
    return Kt(e.get(), n);
  if (n.has(e))
    return n.get(e);
  if (wo(e)) {
    var t = Zo(n, e, new Array(e.length));
    return e.forEach(function(s, a) {
      t[a] = Kt(s, n);
    }), t;
  }
  if (Bt(e)) {
    var r = Zo(n, e, /* @__PURE__ */ new Set());
    return e.forEach(function(s) {
      r.add(Kt(s, n));
    }), r;
  }
  if (Dt(e)) {
    var o = Zo(n, e, /* @__PURE__ */ new Map());
    return e.forEach(function(s, a) {
      o.set(a, Kt(s, n));
    }), o;
  } else {
    var i = Zo(n, e, {});
    return aT(e).forEach(function(s) {
      No.propertyIsEnumerable.call(e, s) && (i[s] = Kt(e[s], n));
    }), i;
  }
}
function hd(e, n) {
  return Kt(e, /* @__PURE__ */ new Map());
}
function zn(e, n) {
  n === void 0 && (n = void 0), en();
  try {
    return e.apply(n);
  } finally {
    nn();
  }
}
function Ft(e) {
  return e[W];
}
var uT = {
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
function _T(e, n) {
  var t, r;
  return Gc(), e = Po(e, n), (r = (t = e[W]).proxy_) != null ? r : t.proxy_ = new Proxy(e, uT);
}
function cn(e) {
  return e.interceptors_ !== void 0 && e.interceptors_.length > 0;
}
function Uo(e, n) {
  var t = e.interceptors_ || (e.interceptors_ = []);
  return t.push(n), Cc(function() {
    var r = t.indexOf(n);
    r !== -1 && t.splice(r, 1);
  });
}
function dn(e, n) {
  var t = br();
  try {
    for (var r = [].concat(e.interceptors_ || []), o = 0, i = r.length; o < i && (n = r[o](n), n && !n.type && ae(14), !!n); o++)
      ;
    return n;
  } finally {
    gt(t);
  }
}
function In(e) {
  return e.changeListeners_ !== void 0 && e.changeListeners_.length > 0;
}
function Ho(e, n) {
  var t = e.changeListeners_ || (e.changeListeners_ = []);
  return t.push(n), Cc(function() {
    var r = t.indexOf(n);
    r !== -1 && t.splice(r, 1);
  });
}
function An(e, n) {
  var t = br(), r = e.changeListeners_;
  if (r) {
    r = r.slice();
    for (var o = 0, i = r.length; o < i; o++)
      r[o](n);
    gt(t);
  }
}
function lT(e, n, t) {
  var r = Po(e, t)[W];
  en();
  try {
    var o;
    (o = n) != null || (n = Vf(e)), ar(n).forEach(function(i) {
      return r.make_(i, n[i]);
    });
  } finally {
    nn();
  }
  return e;
}
var Js = /* @__PURE__ */ Symbol("mobx-keys");
function at(e, n, t) {
  if (ot(e))
    return ld(e, e, n, t);
  var r = Po(e, t)[W];
  if (!e[Js]) {
    var o = Object.getPrototypeOf(e), i = new Set([].concat(ar(e), ar(o)));
    i.delete("constructor"), i.delete(W), Io(o, Js, i);
  }
  en();
  try {
    e[Js].forEach(function(s) {
      return r.make_(
        s,
        // must pass "undefined" for { key: undefined }
        n && s in n ? n[s] : !0
      );
    });
  } finally {
    nn();
  }
  return e;
}
var D_ = "splice", xn = "update", cT = 1e4, dT = {
  get: function(n, t) {
    var r = n[W];
    return t === W ? r : t === "length" ? r.getArrayLength_() : typeof t == "string" && !isNaN(t) ? r.get_(parseInt(t)) : et(xi, t) ? xi[t] : n[t];
  },
  set: function(n, t, r) {
    var o = n[W];
    return t === "length" && o.setArrayLength_(r), typeof t == "symbol" || isNaN(t) ? n[t] = r : o.set_(parseInt(t), r), !0;
  },
  preventExtensions: function() {
    ae(15);
  }
}, Ru = /* @__PURE__ */ function() {
  function e(t, r, o, i) {
    t === void 0 && (t = "ObservableArray"), this.owned_ = void 0, this.legacyMode_ = void 0, this.atom_ = void 0, this.values_ = [], this.interceptors_ = void 0, this.changeListeners_ = void 0, this.enhancer_ = void 0, this.dehancer = void 0, this.proxy_ = void 0, this.lastKnownLength_ = 0, this.owned_ = o, this.legacyMode_ = i, this.atom_ = new vo(t), this.enhancer_ = function(s, a) {
      return r(s, a, "ObservableArray[..]");
    };
  }
  var n = e.prototype;
  return n.dehanceValue_ = function(r) {
    return this.dehancer !== void 0 ? this.dehancer(r) : r;
  }, n.dehanceValues_ = function(r) {
    return this.dehancer !== void 0 && r.length > 0 ? r.map(this.dehancer) : r;
  }, n.intercept_ = function(r) {
    return Uo(this, r);
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
    }), Ho(this, r);
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
    r !== this.lastKnownLength_ && ae(16), this.lastKnownLength_ += o, this.legacyMode_ && o > 0 && Id(r + o + 1);
  }, n.spliceWithArray_ = function(r, o, i) {
    var s = this;
    this.atom_;
    var a = this.values_.length;
    if (r === void 0 ? r = 0 : r > a ? r = a : r < 0 && (r = Math.max(0, a + r)), arguments.length === 1 ? o = a - r : o == null ? o = 0 : o = Math.max(0, Math.min(o, a - r)), i === void 0 && (i = Na), cn(this)) {
      var u = dn(this, {
        object: this.proxy_,
        type: D_,
        index: r,
        removedCount: o,
        added: i
      });
      if (!u)
        return Na;
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
    if (i.length < cT) {
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
    var s = !this.owned_ && Vr(), a = In(this), u = a || s ? {
      observableKind: "array",
      object: this.proxy_,
      type: xn,
      debugObjectName: this.atom_.name_,
      index: r,
      newValue: o,
      oldValue: i
    } : null;
    this.atom_.reportChanged(), a && An(this, u);
  }, n.notifyArraySplice_ = function(r, o, i) {
    var s = !this.owned_ && Vr(), a = In(this), u = a || s ? {
      observableKind: "array",
      object: this.proxy_,
      debugObjectName: this.atom_.name_,
      type: D_,
      index: r,
      removed: i,
      added: o,
      removedCount: i.length,
      addedCount: o.length
    } : null;
    this.atom_.reportChanged(), a && An(this, u);
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
      if (cn(this)) {
        var a = dn(this, {
          type: xn,
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
function hT(e, n, t, r) {
  t === void 0 && (t = "ObservableArray"), r === void 0 && (r = !1), Gc();
  var o = new Ru(t, n, r, !1);
  yc(o.values_, W, o);
  var i = new Proxy(o.values_, dT);
  if (o.proxy_ = i, e && e.length) {
    var s = Co(!0);
    o.spliceWithArray_(0, 0, e), Do(s);
  }
  return i;
}
var xi = {
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
    return G.trackingDerivation && ae(37, "reverse"), this.replace(this.slice().reverse()), this;
  },
  sort: function() {
    G.trackingDerivation && ae(37, "sort");
    var n = this.slice();
    return n.sort.apply(n, arguments), this.replace(n), this;
  },
  remove: function(n) {
    var t = this[W], r = t.dehanceValues_(t.values_).indexOf(n);
    return r > -1 ? (this.splice(r, 1), !0) : !1;
  }
};
we("concat", ut);
we("flat", ut);
we("includes", ut);
we("indexOf", ut);
we("join", ut);
we("lastIndexOf", ut);
we("slice", ut);
we("toString", ut);
we("toLocaleString", ut);
we("every", Ct);
we("filter", Ct);
we("find", Ct);
we("findIndex", Ct);
we("flatMap", Ct);
we("forEach", Ct);
we("map", Ct);
we("some", Ct);
we("reduce", md);
we("reduceRight", md);
function we(e, n) {
  typeof Array.prototype[e] == "function" && (xi[e] = n(e));
}
function ut(e) {
  return function() {
    var n = this[W];
    n.atom_.reportObserved();
    var t = n.dehanceValues_(n.values_);
    return t[e].apply(t, arguments);
  };
}
function Ct(e) {
  return function(n, t) {
    var r = this, o = this[W];
    o.atom_.reportObserved();
    var i = o.dehanceValues_(o.values_);
    return i[e](function(s, a) {
      return n.call(t, s, a, r);
    });
  };
}
function md(e) {
  return function() {
    var n = this, t = this[W];
    t.atom_.reportObserved();
    var r = t.dehanceValues_(t.values_), o = arguments[0];
    return arguments[0] = function(i, s, a) {
      return o(i, s, a, n);
    }, r[e].apply(r, arguments);
  };
}
var mT = /* @__PURE__ */ Gt("ObservableArrayAdministration", Ru);
function wo(e) {
  return us(e) && mT(e[W]);
}
var fd, pd, fT = {}, pt = "add", Li = "delete";
fd = Symbol.iterator;
pd = Symbol.toStringTag;
var Td = /* @__PURE__ */ function() {
  function e(t, r, o) {
    var i = this;
    r === void 0 && (r = _r), o === void 0 && (o = "ObservableMap"), this.enhancer_ = void 0, this.name_ = void 0, this[W] = fT, this.data_ = void 0, this.hasMap_ = void 0, this.keysAtom_ = void 0, this.interceptors_ = void 0, this.changeListeners_ = void 0, this.dehancer = void 0, this.enhancer_ = r, this.name_ = o, Sn(Map) || ae(18), this.keysAtom_ = Pc("ObservableMap.keys()"), this.data_ = /* @__PURE__ */ new Map(), this.hasMap_ = /* @__PURE__ */ new Map(), yp(!0, function() {
      i.merge(t);
    });
  }
  var n = e.prototype;
  return n.has_ = function(r) {
    return this.data_.has(r);
  }, n.has = function(r) {
    var o = this;
    if (!G.trackingDerivation)
      return this.has_(r);
    var i = this.hasMap_.get(r);
    if (!i) {
      var s = i = new Mt(this.has_(r), _s, "ObservableMap.key?", !1);
      this.hasMap_.set(r, s), ud(s, function() {
        return o.hasMap_.delete(r);
      });
    }
    return i.get();
  }, n.set = function(r, o) {
    var i = this.has_(r);
    if (cn(this)) {
      var s = dn(this, {
        type: i ? xn : pt,
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
    if (this.keysAtom_, cn(this)) {
      var i = dn(this, {
        type: Li,
        object: this,
        name: r
      });
      if (!i)
        return !1;
    }
    if (this.has_(r)) {
      var s = Vr(), a = In(this), u = a || s ? {
        observableKind: "map",
        debugObjectName: this.name_,
        type: Li,
        object: this,
        oldValue: this.data_.get(r).value_,
        name: r
      } : null;
      return zn(function() {
        var _;
        o.keysAtom_.reportChanged(), (_ = o.hasMap_.get(r)) == null || _.setNewValue_(!1);
        var c = o.data_.get(r);
        c.setNewValue_(void 0), o.data_.delete(r);
      }), a && An(this, u), !0;
    }
    return !1;
  }, n.updateValue_ = function(r, o) {
    var i = this.data_.get(r);
    if (o = i.prepareNewValue_(o), o !== G.UNCHANGED) {
      var s = Vr(), a = In(this), u = a || s ? {
        observableKind: "map",
        debugObjectName: this.name_,
        type: xn,
        object: this,
        oldValue: i.value_,
        name: r,
        newValue: o
      } : null;
      i.setNewValue_(o), a && An(this, u);
    }
  }, n.addValue_ = function(r, o) {
    var i = this;
    this.keysAtom_, zn(function() {
      var _, c = new Mt(o, i.enhancer_, "ObservableMap.key", !1);
      i.data_.set(r, c), o = c.value_, (_ = i.hasMap_.get(r)) == null || _.setNewValue_(!0), i.keysAtom_.reportChanged();
    });
    var s = Vr(), a = In(this), u = a || s ? {
      observableKind: "map",
      debugObjectName: this.name_,
      type: pt,
      object: this,
      name: r,
      newValue: o
    } : null;
    a && An(this, u);
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
  }, n[fd] = function() {
    return this.entries();
  }, n.forEach = function(r, o) {
    for (var i = zt(this), s; !(s = i()).done; ) {
      var a = s.value, u = a[0], _ = a[1];
      r.call(o, _, u, this);
    }
  }, n.merge = function(r) {
    var o = this;
    return Dt(r) && (r = new Map(r)), zn(function() {
      ot(r) ? xf(r).forEach(function(i) {
        return o.set(i, r[i]);
      }) : Array.isArray(r) ? r.forEach(function(i) {
        var s = i[0], a = i[1];
        return o.set(s, a);
      }) : Or(r) ? (r.constructor !== Map && ae(19, r), r.forEach(function(i, s) {
        return o.set(s, i);
      })) : r != null && ae(20, r);
    }), this;
  }, n.clear = function() {
    var r = this;
    zn(function() {
      zc(function() {
        for (var o = zt(r.keys()), i; !(i = o()).done; ) {
          var s = i.value;
          r.delete(s);
        }
      });
    });
  }, n.replace = function(r) {
    var o = this;
    return zn(function() {
      for (var i = pT(r), s = /* @__PURE__ */ new Map(), a = !1, u = zt(o.data_.keys()), _; !(_ = u()).done; ) {
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
        var h = d.value, m = h[0], b = h[1], R = o.data_.has(m);
        if (o.set(m, b), o.data_.has(m)) {
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
    return Ho(this, r);
  }, n.intercept_ = function(r) {
    return Uo(this, r);
  }, fu(e, [{
    key: "size",
    get: function() {
      return this.keysAtom_.reportObserved(), this.data_.size;
    }
  }, {
    key: pd,
    get: function() {
      return "Map";
    }
  }]), e;
}(), Dt = /* @__PURE__ */ Gt("ObservableMap", Td);
function pT(e) {
  if (Or(e) || Dt(e))
    return e;
  if (Array.isArray(e))
    return new Map(e);
  if (ot(e)) {
    var n = /* @__PURE__ */ new Map();
    for (var t in e)
      n.set(t, e[t]);
    return n;
  } else
    return ae(21, e);
}
var Ed, Od, TT = {};
Ed = Symbol.iterator;
Od = Symbol.toStringTag;
var bd = /* @__PURE__ */ function() {
  function e(t, r, o) {
    r === void 0 && (r = _r), o === void 0 && (o = "ObservableSet"), this.name_ = void 0, this[W] = TT, this.data_ = /* @__PURE__ */ new Set(), this.atom_ = void 0, this.changeListeners_ = void 0, this.interceptors_ = void 0, this.dehancer = void 0, this.enhancer_ = void 0, this.name_ = o, Sn(Set) || ae(22), this.atom_ = Pc(this.name_), this.enhancer_ = function(i, s) {
      return r(i, s, o);
    }, t && this.replace(t);
  }
  var n = e.prototype;
  return n.dehanceValue_ = function(r) {
    return this.dehancer !== void 0 ? this.dehancer(r) : r;
  }, n.clear = function() {
    var r = this;
    zn(function() {
      zc(function() {
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
    if (this.atom_, cn(this)) {
      var i = dn(this, {
        type: pt,
        object: this,
        newValue: r
      });
      if (!i)
        return this;
    }
    if (!this.has(r)) {
      zn(function() {
        o.data_.add(o.enhancer_(r, void 0)), o.atom_.reportChanged();
      });
      var s = !1, a = In(this), u = a || s ? {
        observableKind: "set",
        debugObjectName: this.name_,
        type: pt,
        object: this,
        newValue: r
      } : null;
      a && An(this, u);
    }
    return this;
  }, n.delete = function(r) {
    var o = this;
    if (cn(this)) {
      var i = dn(this, {
        type: Li,
        object: this,
        oldValue: r
      });
      if (!i)
        return !1;
    }
    if (this.has(r)) {
      var s = !1, a = In(this), u = a || s ? {
        observableKind: "set",
        debugObjectName: this.name_,
        type: Li,
        object: this,
        oldValue: r
      } : null;
      return zn(function() {
        o.atom_.reportChanged(), o.data_.delete(r);
      }), a && An(this, u), !0;
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
    return Bt(r) && (r = new Set(r)), zn(function() {
      Array.isArray(r) ? (o.clear(), r.forEach(function(i) {
        return o.add(i);
      })) : Ao(r) ? (o.clear(), r.forEach(function(i) {
        return o.add(i);
      })) : r != null && ae("Cannot initialize set from " + r);
    }), this;
  }, n.observe_ = function(r, o) {
    return Ho(this, r);
  }, n.intercept_ = function(r) {
    return Uo(this, r);
  }, n.toJSON = function() {
    return Array.from(this);
  }, n.toString = function() {
    return "[object ObservableSet]";
  }, n[Ed] = function() {
    return this.values();
  }, fu(e, [{
    key: "size",
    get: function() {
      return this.atom_.reportObserved(), this.data_.size;
    }
  }, {
    key: Od,
    get: function() {
      return "Set";
    }
  }]), e;
}(), Bt = /* @__PURE__ */ Gt("ObservableSet", bd), y_ = /* @__PURE__ */ Object.create(null), U_ = "remove", Rd = /* @__PURE__ */ function() {
  function e(t, r, o, i) {
    r === void 0 && (r = /* @__PURE__ */ new Map()), i === void 0 && (i = cp), this.target_ = void 0, this.values_ = void 0, this.name_ = void 0, this.defaultAnnotation_ = void 0, this.keysAtom_ = void 0, this.changeListeners_ = void 0, this.interceptors_ = void 0, this.proxy_ = void 0, this.isPlainObject_ = void 0, this.appliedAnnotations_ = void 0, this.pendingKeys_ = void 0, this.target_ = t, this.values_ = r, this.name_ = o, this.defaultAnnotation_ = i, this.keysAtom_ = new vo("ObservableObject.keys"), this.isPlainObject_ = ot(this.target_);
  }
  var n = e.prototype;
  return n.getObservablePropValue_ = function(r) {
    return this.values_.get(r).get();
  }, n.setObservablePropValue_ = function(r, o) {
    var i = this.values_.get(r);
    if (i instanceof Qr)
      return i.set(o), !0;
    if (cn(this)) {
      var s = dn(this, {
        type: xn,
        object: this.proxy_ || this.target_,
        name: r,
        newValue: o
      });
      if (!s)
        return null;
      o = s.newValue;
    }
    if (o = i.prepareNewValue_(o), o !== G.UNCHANGED) {
      var a = In(this), u = !1, _ = a || u ? {
        type: xn,
        observableKind: "object",
        debugObjectName: this.name_,
        object: this.proxy_ || this.target_,
        oldValue: i.value_,
        name: r,
        newValue: o
      } : null;
      i.setNewValue_(o), a && An(this, _);
    }
    return !0;
  }, n.get_ = function(r) {
    return G.trackingDerivation && !et(this.target_, r) && this.has_(r), this.target_[r];
  }, n.set_ = function(r, o, i) {
    return i === void 0 && (i = !1), et(this.target_, r) ? this.values_.has(r) ? this.setObservablePropValue_(r, o) : i ? Reflect.set(this.target_, r, o) : (this.target_[r] = o, !0) : this.extend_(r, {
      value: o,
      enumerable: !0,
      writable: !0,
      configurable: !0
    }, this.defaultAnnotation_, i);
  }, n.has_ = function(r) {
    if (!G.trackingDerivation)
      return r in this.target_;
    this.pendingKeys_ || (this.pendingKeys_ = /* @__PURE__ */ new Map());
    var o = this.pendingKeys_.get(r);
    return o || (o = new Mt(r in this.target_, _s, "ObservableObject.key?", !1), this.pendingKeys_.set(r, o)), o.get();
  }, n.make_ = function(r, o) {
    if (o === !0 && (o = this.defaultAnnotation_), o !== !1) {
      if (!(r in this.target_)) {
        var i;
        if ((i = this.target_[wn]) != null && i[r])
          return;
        ae(1, o.annotationType_, this.name_ + "." + r.toString());
      }
      for (var s = this.target_; s && s !== No; ) {
        var a = yi(s, r);
        if (a) {
          var u = o.make_(this, r, a, s);
          if (u === 0)
            return;
          if (u === 1)
            break;
        }
        s = Object.getPrototypeOf(s);
      }
      w_(this, o, r);
    }
  }, n.extend_ = function(r, o, i, s) {
    if (s === void 0 && (s = !1), i === !0 && (i = this.defaultAnnotation_), i === !1)
      return this.defineProperty_(r, o, s);
    var a = i.extend_(this, r, o, s);
    return a && w_(this, i, r), a;
  }, n.defineProperty_ = function(r, o, i) {
    i === void 0 && (i = !1);
    try {
      en();
      var s = this.delete_(r);
      if (!s)
        return s;
      if (cn(this)) {
        var a = dn(this, {
          object: this.proxy_ || this.target_,
          name: r,
          type: pt,
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
        Mn(this.target_, r, o);
      this.notifyPropertyAddition_(r, o.value);
    } finally {
      nn();
    }
    return !0;
  }, n.defineObservableProperty_ = function(r, o, i, s) {
    s === void 0 && (s = !1);
    try {
      en();
      var a = this.delete_(r);
      if (!a)
        return a;
      if (cn(this)) {
        var u = dn(this, {
          object: this.proxy_ || this.target_,
          name: r,
          type: pt,
          newValue: o
        });
        if (!u)
          return null;
        o = u.newValue;
      }
      var _ = H_(r), c = {
        configurable: G.safeDescriptors ? this.isPlainObject_ : !0,
        enumerable: !0,
        get: _.get,
        set: _.set
      };
      if (s) {
        if (!Reflect.defineProperty(this.target_, r, c))
          return !1;
      } else
        Mn(this.target_, r, c);
      var l = new Mt(o, i, "ObservableObject.key", !1);
      this.values_.set(r, l), this.notifyPropertyAddition_(r, l.value_);
    } finally {
      nn();
    }
    return !0;
  }, n.defineComputedProperty_ = function(r, o, i) {
    i === void 0 && (i = !1);
    try {
      en();
      var s = this.delete_(r);
      if (!s)
        return s;
      if (cn(this)) {
        var a = dn(this, {
          object: this.proxy_ || this.target_,
          name: r,
          type: pt,
          newValue: void 0
        });
        if (!a)
          return null;
      }
      o.name || (o.name = "ObservableObject.key"), o.context = this.proxy_ || this.target_;
      var u = H_(r), _ = {
        configurable: G.safeDescriptors ? this.isPlainObject_ : !0,
        enumerable: !1,
        get: u.get,
        set: u.set
      };
      if (i) {
        if (!Reflect.defineProperty(this.target_, r, _))
          return !1;
      } else
        Mn(this.target_, r, _);
      this.values_.set(r, new Qr(o)), this.notifyPropertyAddition_(r, void 0);
    } finally {
      nn();
    }
    return !0;
  }, n.delete_ = function(r, o) {
    if (o === void 0 && (o = !1), !et(this.target_, r))
      return !0;
    if (cn(this)) {
      var i = dn(this, {
        object: this.proxy_ || this.target_,
        name: r,
        type: U_
      });
      if (!i)
        return null;
    }
    try {
      var s, a;
      en();
      var u = In(this), _ = !1, c = this.values_.get(r), l = void 0;
      if (!c && (u || _)) {
        var f;
        l = (f = yi(this.target_, r)) == null ? void 0 : f.value;
      }
      if (o) {
        if (!Reflect.deleteProperty(this.target_, r))
          return !1;
      } else
        delete this.target_[r];
      if (c && (this.values_.delete(r), c instanceof Mt && (l = c.value_), nd(c)), this.keysAtom_.reportChanged(), (s = this.pendingKeys_) == null || (a = s.get(r)) == null || a.set(r in this.target_), u || _) {
        var T = {
          type: U_,
          observableKind: "object",
          object: this.proxy_ || this.target_,
          debugObjectName: this.name_,
          oldValue: l,
          name: r
        };
        u && An(this, T);
      }
    } finally {
      nn();
    }
    return !0;
  }, n.observe_ = function(r, o) {
    return Ho(this, r);
  }, n.intercept_ = function(r) {
    return Uo(this, r);
  }, n.notifyPropertyAddition_ = function(r, o) {
    var i, s, a = In(this), u = !1;
    if (a || u) {
      var _ = a || u ? {
        type: pt,
        observableKind: "object",
        debugObjectName: this.name_,
        object: this.proxy_ || this.target_,
        name: r,
        newValue: o
      } : null;
      a && An(this, _);
    }
    (i = this.pendingKeys_) == null || (s = i.get(r)) == null || s.set(!0), this.keysAtom_.reportChanged();
  }, n.ownKeys_ = function() {
    return this.keysAtom_.reportObserved(), ar(this.target_);
  }, n.keys_ = function() {
    return this.keysAtom_.reportObserved(), Object.keys(this.target_);
  }, e;
}();
function Po(e, n) {
  var t;
  if (et(e, W))
    return e;
  var r = (t = n?.name) != null ? t : "ObservableObject", o = new Rd(e, /* @__PURE__ */ new Map(), String(r), Rp(n));
  return Io(e, W, o), e;
}
var ET = /* @__PURE__ */ Gt("ObservableObjectAdministration", Rd);
function H_(e) {
  return y_[e] || (y_[e] = {
    get: function() {
      return this[W].getObservablePropValue_(e);
    },
    set: function(t) {
      return this[W].setObservablePropValue_(e, t);
    }
  });
}
function cr(e) {
  return us(e) ? ET(e[W]) : !1;
}
function w_(e, n, t) {
  var r;
  (r = e.target_[wn]) == null || delete r[t];
}
var OT = /* @__PURE__ */ Nd(0), qs = 0, gd = function() {
};
function bT(e, n) {
  Object.setPrototypeOf ? Object.setPrototypeOf(e.prototype, n) : e.prototype.__proto__ !== void 0 ? e.prototype.__proto__ = n : e.prototype = n;
}
bT(gd, Array.prototype);
var gu = /* @__PURE__ */ function(e, n, t) {
  wc(r, e);
  function r(i, s, a, u) {
    var _;
    a === void 0 && (a = "ObservableArray"), u === void 0 && (u = !1), _ = e.call(this) || this;
    var c = new Ru(a, s, u, !0);
    if (c.proxy_ = zs(_), yc(zs(_), W, c), i && i.length) {
      var l = Co(!0);
      _.spliceWithArray(0, 0, i), Do(l);
    }
    return Object.defineProperty(zs(_), "0", OT), _;
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
        return wo(_) ? _.slice() : _;
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
  }, fu(r, [{
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
}(gd, Symbol.toStringTag, Symbol.iterator);
Object.entries(xi).forEach(function(e) {
  var n = e[0], t = e[1];
  n !== "concat" && Io(gu.prototype, n, t);
});
function Nd(e) {
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
function RT(e) {
  Mn(gu.prototype, "" + e, Nd(e));
}
function Id(e) {
  if (e > qs) {
    for (var n = qs; n < e + 100; n++)
      RT(n);
    qs = e;
  }
}
Id(1e3);
function gT(e, n, t) {
  return new gu(e, n, t);
}
function dr(e, n) {
  if (typeof e == "object" && e !== null) {
    if (wo(e))
      return n !== void 0 && ae(23), e[W].atom_;
    if (Bt(e))
      return e.atom_;
    if (Dt(e)) {
      if (n === void 0)
        return e.keysAtom_;
      var t = e.data_.get(n) || e.hasMap_.get(n);
      return t || ae(25, n, Ga(e)), t;
    }
    if (cr(e)) {
      if (!n)
        return ae(26);
      var r = e[W].values_.get(n);
      return r || ae(27, n, Ga(e)), r;
    }
    if (pu(e) || yo(e) || Mi(e))
      return e;
  } else if (Sn(e) && Mi(e[W]))
    return e[W];
  ae(28);
}
function Ad(e, n) {
  if (e || ae(29), n !== void 0)
    return Ad(dr(e, n));
  if (pu(e) || yo(e) || Mi(e) || Dt(e) || Bt(e))
    return e;
  if (e[W])
    return e[W];
  ae(24, e);
}
function Ga(e, n) {
  var t;
  if (n !== void 0)
    t = dr(e, n);
  else {
    if (Ou(e))
      return e.name;
    cr(e) || Dt(e) || Bt(e) ? t = Ad(e) : t = dr(e);
  }
  return t.name_;
}
var P_ = No.toString;
function Nu(e, n, t) {
  return t === void 0 && (t = -1), Ca(e, n, t);
}
function Ca(e, n, t, r, o) {
  if (e === n)
    return e !== 0 || 1 / e === 1 / n;
  if (e == null || n == null)
    return !1;
  if (e !== e)
    return n !== n;
  var i = typeof e;
  if (i !== "function" && i !== "object" && typeof n != "object")
    return !1;
  var s = P_.call(e);
  if (s !== P_.call(n))
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
  e = M_(e), n = M_(n);
  var a = s === "[object Array]";
  if (!a) {
    if (typeof e != "object" || typeof n != "object")
      return !1;
    var u = e.constructor, _ = n.constructor;
    if (u !== _ && !(Sn(u) && u instanceof u && Sn(_) && _ instanceof _) && "constructor" in e && "constructor" in n)
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
      if (!Ca(e[c], n[c], t - 1, r, o))
        return !1;
  } else {
    var l = Object.keys(e), f;
    if (c = l.length, Object.keys(n).length !== c)
      return !1;
    for (; c--; )
      if (f = l[c], !(et(n, f) && Ca(e[f], n[f], t - 1, r, o)))
        return !1;
  }
  return r.pop(), o.pop(), !0;
}
function M_(e) {
  return wo(e) ? e.slice() : Or(e) || Dt(e) || Ao(e) || Bt(e) ? Array.from(e.entries()) : e;
}
function to(e) {
  return e[Symbol.iterator] = NT, e;
}
function NT() {
  return this;
}
["Symbol", "Map", "Set"].forEach(function(e) {
  var n = mu();
  typeof n[e] > "u" && ae("MobX requires global '" + e + "' to be available or polyfilled");
});
typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ == "object" && __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
  spy: jp,
  extras: {
    getDebugName: Ga
  },
  $mobx: W
});
if (!We)
  throw new Error("mobx-react-lite requires React with Hooks support");
if (!lT)
  throw new Error("mobx-react-lite@3 requires mobx at least version 6 to be available");
function IT(e) {
  e();
}
function AT(e) {
  e || (e = IT), nT({ reactionScheduler: e });
}
function ST(e) {
  return tT(e);
}
var vT = 1e4, GT = 1e4, CT = (
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
          r === void 0 && (r = vT), clearTimeout(t.sweepTimeout), t.sweepTimeout = void 0;
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
        this.sweepTimeout === void 0 && (this.sweepTimeout = setTimeout(this.sweep, GT));
      }
    }), e;
  }()
), DT = typeof FinalizationRegistry < "u" ? FinalizationRegistry : CT, Da = new DT(function(e) {
  var n;
  (n = e.reaction) === null || n === void 0 || n.dispose(), e.reaction = null;
}), k_ = globalThis && globalThis.__read || function(e, n) {
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
function x_(e) {
  return "observer".concat(e);
}
var yT = (
  /** @class */
  function() {
    function e() {
    }
    return e;
  }()
);
function UT() {
  return new yT();
}
function HT(e, n) {
  n === void 0 && (n = "observed");
  var t = k_(Ge.useState(UT), 1), r = t[0], o = k_(Ge.useState(), 2), i = o[1], s = function() {
    return i([]);
  }, a = Ge.useRef(null);
  a.current || (a.current = {
    reaction: null,
    mounted: !1,
    changedBeforeMount: !1
  });
  var u = a.current;
  u.reaction || (u.reaction = new Zr(x_(n), function() {
    u.mounted ? s() : u.changedBeforeMount = !0;
  }), Da.register(r, u, u)), Ge.useDebugValue(u.reaction, ST), Ge.useEffect(function() {
    return Da.unregister(u), u.mounted = !0, u.reaction ? u.changedBeforeMount && (u.changedBeforeMount = !1, s()) : (u.reaction = new Zr(x_(n), function() {
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
var Sd = typeof Symbol == "function" && Symbol.for, L_ = Sd ? Symbol.for("react.forward_ref") : typeof ir == "function" && ir(function(e) {
  return null;
}).$$typeof, B_ = Sd ? Symbol.for("react.memo") : typeof sr == "function" && sr(function(e) {
  return null;
}).$$typeof;
function an(e, n) {
  var t;
  if (B_ && e.$$typeof === B_)
    throw new Error("[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.");
  var r = (t = n?.forwardRef) !== null && t !== void 0 ? t : !1, o = e, i = e.displayName || e.name;
  if (L_ && e.$$typeof === L_ && (r = !0, o = e.render, typeof o != "function"))
    throw new Error("[mobx-react-lite] `render` property of ForwardRef was not a function");
  var s = function(a, u) {
    return HT(function() {
      return o(a, u);
    }, i);
  };
  return i !== "" && (s.displayName = i), e.contextTypes && (s.contextTypes = e.contextTypes), r && (s = ir(s)), s = sr(s), PT(e, s), s;
}
var wT = {
  $$typeof: !0,
  render: !0,
  compare: !0,
  type: !0,
  // Don't redefine `displayName`,
  // it's defined as getter-setter pair on `memo` (see #3192).
  displayName: !0
};
function PT(e, n) {
  Object.keys(e).forEach(function(t) {
    wT[t] || Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(e, t));
  });
}
globalThis && globalThis.__read;
var Qs;
AT(bc);
Qs = Da.finalizeAllImmediately;
const vd = ({ fontSize: e, tabSize: n }) => ({
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
});
function MT(e, n, t) {
  return n in e ? Object.defineProperty(e, n, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[n] = t, e;
}
function j_(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    n && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function F_(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? j_(Object(t), !0).forEach(function(r) {
      MT(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : j_(Object(t)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function kT(e, n) {
  if (e == null)
    return {};
  var t = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(n.indexOf(o) >= 0) && (t[o] = e[o]);
  return t;
}
function xT(e, n) {
  if (e == null)
    return {};
  var t = kT(e, n), r, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      r = i[o], !(n.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (t[r] = e[r]);
  }
  return t;
}
function LT(e, n) {
  return BT(e) || jT(e, n) || FT(e, n) || VT();
}
function BT(e) {
  if (Array.isArray(e))
    return e;
}
function jT(e, n) {
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
function FT(e, n) {
  if (e) {
    if (typeof e == "string")
      return V_(e, n);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set")
      return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return V_(e, n);
  }
}
function V_(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var t = 0, r = new Array(n); t < n; t++)
    r[t] = e[t];
  return r;
}
function VT() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function WT(e, n, t) {
  return n in e ? Object.defineProperty(e, n, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[n] = t, e;
}
function W_(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    n && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function X_(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? W_(Object(t), !0).forEach(function(r) {
      WT(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : W_(Object(t)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function XT() {
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
function Bi(e) {
  return {}.toString.call(e).includes("Object");
}
function KT(e) {
  return !Object.keys(e).length;
}
function ro(e) {
  return typeof e == "function";
}
function YT(e, n) {
  return Object.prototype.hasOwnProperty.call(e, n);
}
function $T(e, n) {
  return Bi(n) || Nt("changeType"), Object.keys(n).some(function(t) {
    return !YT(e, t);
  }) && Nt("changeField"), n;
}
function zT(e) {
  ro(e) || Nt("selectorType");
}
function JT(e) {
  ro(e) || Bi(e) || Nt("handlerType"), Bi(e) && Object.values(e).some(function(n) {
    return !ro(n);
  }) && Nt("handlersType");
}
function qT(e) {
  e || Nt("initialIsRequired"), Bi(e) || Nt("initialType"), KT(e) && Nt("initialContent");
}
function QT(e, n) {
  throw new Error(e[n] || e.default);
}
var ZT = {
  initialIsRequired: "initial state is required",
  initialType: "initial state should be an object",
  initialContent: "initial state shouldn't be an empty object",
  handlerType: "handler should be an object or a function",
  handlersType: "all handlers should be a functions",
  selectorType: "selector should be a function",
  changeType: "provided value of changes should be an object",
  changeField: 'it seams you want to change a field in the state which is not specified in the "initial" state',
  default: "an unknown error accured in `state-local` package"
}, Nt = Br(QT)(ZT), ei = {
  changes: $T,
  selector: zT,
  handler: JT,
  initial: qT
};
function eE(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  ei.initial(e), ei.handler(n);
  var t = {
    current: e
  }, r = Br(rE)(t, n), o = Br(tE)(t), i = Br(ei.changes)(e), s = Br(nE)(t);
  function a() {
    var _ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function(c) {
      return c;
    };
    return ei.selector(_), _(t.current);
  }
  function u(_) {
    XT(r, o, i, s)(_);
  }
  return [a, u];
}
function nE(e, n) {
  return ro(n) ? n(e.current) : n;
}
function tE(e, n) {
  return e.current = X_(X_({}, e.current), n), n;
}
function rE(e, n, t) {
  return ro(n) ? n(e.current) : Object.keys(t).forEach(function(r) {
    var o;
    return (o = n[r]) === null || o === void 0 ? void 0 : o.call(n, e.current[r]);
  }), t;
}
var oE = {
  create: eE
}, iE = {
  paths: {
    vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.36.1/min/vs"
  }
};
function sE(e) {
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
function aE(e) {
  return {}.toString.call(e).includes("Object");
}
function uE(e) {
  return e || K_("configIsRequired"), aE(e) || K_("configType"), e.urls ? (_E(), {
    paths: {
      vs: e.urls.monacoBase
    }
  }) : e;
}
function _E() {
  console.warn(Gd.deprecation);
}
function lE(e, n) {
  throw new Error(e[n] || e.default);
}
var Gd = {
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
}, K_ = sE(lE)(Gd), cE = {
  config: uE
}, dE = function() {
  for (var n = arguments.length, t = new Array(n), r = 0; r < n; r++)
    t[r] = arguments[r];
  return function(o) {
    return t.reduceRight(function(i, s) {
      return s(i);
    }, o);
  };
};
function Cd(e, n) {
  return Object.keys(n).forEach(function(t) {
    n[t] instanceof Object && e[t] && Object.assign(n[t], Cd(e[t], n[t]));
  }), F_(F_({}, e), n);
}
var hE = {
  type: "cancelation",
  msg: "operation is manually canceled"
};
function Zs(e) {
  var n = !1, t = new Promise(function(r, o) {
    e.then(function(i) {
      return n ? o(hE) : r(i);
    }), e.catch(o);
  });
  return t.cancel = function() {
    return n = !0;
  }, t;
}
var mE = oE.create({
  config: iE,
  isInitialized: !1,
  resolve: null,
  reject: null,
  monaco: null
}), Dd = LT(mE, 2), Mo = Dd[0], ds = Dd[1];
function fE(e) {
  var n = cE.config(e), t = n.monaco, r = xT(n, ["monaco"]);
  ds(function(o) {
    return {
      config: Cd(o.config, r),
      monaco: t
    };
  });
}
function pE() {
  var e = Mo(function(n) {
    var t = n.monaco, r = n.isInitialized, o = n.resolve;
    return {
      monaco: t,
      isInitialized: r,
      resolve: o
    };
  });
  if (!e.isInitialized) {
    if (ds({
      isInitialized: !0
    }), e.monaco)
      return e.resolve(e.monaco), Zs(ea);
    if (window.monaco && window.monaco.editor)
      return yd(window.monaco), e.resolve(window.monaco), Zs(ea);
    dE(TE, OE)(bE);
  }
  return Zs(ea);
}
function TE(e) {
  return document.body.appendChild(e);
}
function EE(e) {
  var n = document.createElement("script");
  return e && (n.src = e), n;
}
function OE(e) {
  var n = Mo(function(r) {
    var o = r.config, i = r.reject;
    return {
      config: o,
      reject: i
    };
  }), t = EE("".concat(n.config.paths.vs, "/loader.js"));
  return t.onload = function() {
    return e();
  }, t.onerror = n.reject, t;
}
function bE() {
  var e = Mo(function(t) {
    var r = t.config, o = t.resolve, i = t.reject;
    return {
      config: r,
      resolve: o,
      reject: i
    };
  }), n = window.require;
  n.config(e.config), n(["vs/editor/editor.main"], function(t) {
    yd(t), e.resolve(t);
  }, function(t) {
    e.reject(t);
  });
}
function yd(e) {
  Mo().monaco || ds({
    monaco: e
  });
}
function RE() {
  return Mo(function(e) {
    var n = e.monaco;
    return n;
  });
}
var ea = new Promise(function(e, n) {
  return ds({
    resolve: e,
    reject: n
  });
}), ji = {
  config: fE,
  init: pE,
  __getMonacoInstance: RE
}, gE = { wrapper: { display: "flex", position: "relative", textAlign: "initial" }, fullWidth: { width: "100%" }, hide: { display: "none" } }, na = gE, NE = { container: { display: "flex", height: "100%", width: "100%", justifyContent: "center", alignItems: "center" } }, IE = NE;
function AE({ children: e }) {
  return Ge.createElement("div", { style: IE.container }, e);
}
var SE = AE, vE = SE;
function GE({ width: e, height: n, isEditorReady: t, loading: r, _ref: o, className: i, wrapperProps: s }) {
  return Ge.createElement("section", { style: { ...na.wrapper, width: e, height: n }, ...s }, !t && Ge.createElement(vE, null, r), Ge.createElement("div", { ref: o, style: { ...na.fullWidth, ...!t && na.hide }, className: i }));
}
var CE = GE, Ud = sr(CE);
function DE(e) {
  Ne(e, []);
}
var Iu = DE;
function yE(e, n, t = !0) {
  let r = ee(!0);
  Ne(r.current || !t ? () => {
    r.current = !1;
  } : e, n);
}
var rn = yE;
function Wr() {
}
function qt(e, n, t, r) {
  return UE(e, r) || HE(e, n, t, r);
}
function UE(e, n) {
  return e.editor.getModel(Hd(e, n));
}
function HE(e, n, t, r) {
  return e.editor.createModel(n, t, r ? Hd(e, r) : void 0);
}
function Hd(e, n) {
  return e.Uri.parse(n);
}
function wE({ original: e, modified: n, language: t, originalLanguage: r, modifiedLanguage: o, originalModelPath: i, modifiedModelPath: s, keepCurrentOriginalModel: a = !1, keepCurrentModifiedModel: u = !1, theme: _ = "light", loading: c = "Loading...", options: l = {}, height: f = "100%", width: T = "100%", className: d, wrapperProps: h = {}, beforeMount: m = Wr, onMount: b = Wr }) {
  let [R, N] = We(!1), [A, p] = We(!0), w = ee(null), k = ee(null), Y = ee(null), M = ee(b), j = ee(m), Oe = ee(!1);
  Iu(() => {
    let C = ji.init();
    return C.then((Q) => (k.current = Q) && p(!1)).catch((Q) => Q?.type !== "cancelation" && console.error("Monaco initialization: error:", Q)), () => w.current ? x() : C.cancel();
  }), rn(() => {
    let C = w.current.getModifiedEditor();
    C.getOption(k.current.editor.EditorOption.readOnly) ? C.setValue(n || "") : n !== C.getValue() && (C.executeEdits("", [{ range: C.getModel().getFullModelRange(), text: n || "", forceMoveMarkers: !0 }]), C.pushUndoStop());
  }, [n], R), rn(() => {
    w.current?.getModel()?.original.setValue(e || "");
  }, [e], R), rn(() => {
    let { original: C, modified: Q } = w.current.getModel();
    k.current.editor.setModelLanguage(C, r || t || "text"), k.current.editor.setModelLanguage(Q, o || t || "text");
  }, [t, r, o], R), rn(() => {
    k.current?.editor.setTheme(_);
  }, [_], R), rn(() => {
    w.current?.updateOptions(l);
  }, [l], R);
  let Te = Ln(() => {
    if (!k.current)
      return;
    j.current(k.current);
    let C = qt(k.current, e || "", r || t || "text", i || ""), Q = qt(k.current, n || "", o || t || "text", s || "");
    w.current?.setModel({ original: C, modified: Q });
  }, [t, n, o, e, r, i, s]), Ie = Ln(() => {
    !Oe.current && Y.current && (w.current = k.current.editor.createDiffEditor(Y.current, { automaticLayout: !0, ...l }), Te(), k.current?.editor.setTheme(_), N(!0), Oe.current = !0);
  }, [l, _, Te]);
  Ne(() => {
    R && M.current(w.current, k.current);
  }, [R]), Ne(() => {
    !A && !R && Ie();
  }, [A, R, Ie]), rn(() => {
    if (w.current && k.current) {
      let C = w.current.getOriginalEditor(), Q = qt(k.current, e || "", r || t || "text", i || "");
      Q !== C.getModel() && C.setModel(Q);
    }
  }, [i], R), rn(() => {
    if (w.current && k.current) {
      let C = w.current.getModifiedEditor(), Q = qt(k.current, n || "", o || t || "text", s || "");
      Q !== C.getModel() && C.setModel(Q);
    }
  }, [s], R);
  function x() {
    let C = w.current?.getModel();
    a || C?.original?.dispose(), u || C?.modified?.dispose(), w.current?.dispose();
  }
  return Ge.createElement(Ud, { width: T, height: f, isEditorReady: R, loading: c, _ref: Y, className: d, wrapperProps: h });
}
var PE = wE;
sr(PE);
function ME() {
  let [e, n] = We(ji.__getMonacoInstance());
  return Iu(() => {
    let t;
    return e || (t = ji.init(), t.then((r) => {
      n(r);
    })), () => t?.cancel();
  }), e;
}
var hs = ME;
function kE(e) {
  let n = ee();
  return Ne(() => {
    n.current = e;
  }, [e]), n.current;
}
var xE = kE, ni = /* @__PURE__ */ new Map();
function LE({ defaultValue: e, defaultLanguage: n, defaultPath: t, value: r, language: o, path: i, theme: s = "light", line: a, loading: u = "Loading...", options: _ = {}, overrideServices: c = {}, saveViewState: l = !0, keepCurrentModel: f = !1, width: T = "100%", height: d = "100%", className: h, wrapperProps: m = {}, beforeMount: b = Wr, onMount: R = Wr, onChange: N, onValidate: A = Wr }) {
  let [p, w] = We(!1), [k, Y] = We(!0), M = ee(null), j = ee(null), Oe = ee(null), Te = ee(R), Ie = ee(b), x = ee(), C = ee(r), Q = xE(i), ce = ee(!1), ne = ee(!1);
  Iu(() => {
    let Ae = ji.init();
    return Ae.then((D) => (M.current = D) && Y(!1)).catch((D) => D?.type !== "cancelation" && console.error("Monaco initialization: error:", D)), () => j.current ? Pe() : Ae.cancel();
  }), rn(() => {
    let Ae = qt(M.current, e || r || "", n || o || "", i || t || "");
    Ae !== j.current?.getModel() && (l && ni.set(Q, j.current?.saveViewState()), j.current?.setModel(Ae), l && j.current?.restoreViewState(ni.get(i)));
  }, [i], p), rn(() => {
    j.current?.updateOptions(_);
  }, [_], p), rn(() => {
    !j.current || r === void 0 || (j.current.getOption(M.current.editor.EditorOption.readOnly) ? j.current.setValue(r) : r !== j.current.getValue() && (ne.current = !0, j.current.executeEdits("", [{ range: j.current.getModel().getFullModelRange(), text: r, forceMoveMarkers: !0 }]), j.current.pushUndoStop(), ne.current = !1));
  }, [r], p), rn(() => {
    let Ae = j.current?.getModel();
    Ae && o && M.current?.editor.setModelLanguage(Ae, o);
  }, [o], p), rn(() => {
    a !== void 0 && j.current?.revealLine(a);
  }, [a], p), rn(() => {
    M.current?.editor.setTheme(s);
  }, [s], p);
  let ve = Ln(() => {
    if (!(!Oe.current || !M.current) && !ce.current) {
      Ie.current(M.current);
      let Ae = i || t, D = qt(M.current, r || e || "", n || o || "", Ae || "");
      j.current = M.current?.editor.create(Oe.current, { model: D, automaticLayout: !0, ..._ }, c), l && j.current.restoreViewState(ni.get(Ae)), M.current.editor.setTheme(s), w(!0), ce.current = !0;
    }
  }, [e, n, t, r, o, i, _, c, l, s]);
  Ne(() => {
    p && Te.current(j.current, M.current);
  }, [p]), Ne(() => {
    !k && !p && ve();
  }, [k, p, ve]), C.current = r, Ne(() => {
    p && N && (x.current?.dispose(), x.current = j.current?.onDidChangeModelContent((Ae) => {
      ne.current || N(j.current.getValue(), Ae);
    }));
  }, [p, N]), Ne(() => {
    if (p) {
      let Ae = M.current.editor.onDidChangeMarkers((D) => {
        let U = j.current.getModel()?.uri;
        if (U && D.find((P) => P.path === U.path)) {
          let P = M.current.editor.getModelMarkers({ resource: U });
          A?.(P);
        }
      });
      return () => {
        Ae?.dispose();
      };
    }
    return () => {
    };
  }, [p, A]);
  function Pe() {
    x.current?.dispose(), f ? l && ni.set(i, j.current.saveViewState()) : j.current.getModel()?.dispose(), j.current.dispose();
  }
  return Ge.createElement(Ud, { width: T, height: d, isEditorReady: p, loading: u, _ref: Oe, className: h, wrapperProps: m });
}
var BE = LE, jE = sr(BE), wd = jE;
function FE(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Pd = { exports: {} }, me = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Y_;
function VE() {
  if (Y_)
    return me;
  Y_ = 1;
  var e = Symbol.for("react.element"), n = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), a = Symbol.for("react.server_context"), u = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), T = Symbol.for("react.offscreen"), d;
  d = Symbol.for("react.module.reference");
  function h(m) {
    if (typeof m == "object" && m !== null) {
      var b = m.$$typeof;
      switch (b) {
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
                  return b;
              }
          }
        case n:
          return b;
      }
    }
  }
  return me.ContextConsumer = s, me.ContextProvider = i, me.Element = e, me.ForwardRef = u, me.Fragment = t, me.Lazy = f, me.Memo = l, me.Portal = n, me.Profiler = o, me.StrictMode = r, me.Suspense = _, me.SuspenseList = c, me.isAsyncMode = function() {
    return !1;
  }, me.isConcurrentMode = function() {
    return !1;
  }, me.isContextConsumer = function(m) {
    return h(m) === s;
  }, me.isContextProvider = function(m) {
    return h(m) === i;
  }, me.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === e;
  }, me.isForwardRef = function(m) {
    return h(m) === u;
  }, me.isFragment = function(m) {
    return h(m) === t;
  }, me.isLazy = function(m) {
    return h(m) === f;
  }, me.isMemo = function(m) {
    return h(m) === l;
  }, me.isPortal = function(m) {
    return h(m) === n;
  }, me.isProfiler = function(m) {
    return h(m) === o;
  }, me.isStrictMode = function(m) {
    return h(m) === r;
  }, me.isSuspense = function(m) {
    return h(m) === _;
  }, me.isSuspenseList = function(m) {
    return h(m) === c;
  }, me.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === t || m === o || m === r || m === _ || m === c || m === T || typeof m == "object" && m !== null && (m.$$typeof === f || m.$$typeof === l || m.$$typeof === i || m.$$typeof === s || m.$$typeof === u || m.$$typeof === d || m.getModuleId !== void 0);
  }, me.typeOf = h, me;
}
Pd.exports = VE();
var Md = Pd.exports;
function WE(e) {
  function n(D, U, P, F, O) {
    for (var q = 0, v = 0, de = 0, te = 0, pe, $, ke = 0, qe = 0, ie, Fe = ie = pe = 0, he = 0, xe = 0, Cr = 0, Le = 0, zo = P.length, Dr = zo - 1, bn, K = "", Ce = "", Ys = "", $s = "", ct; he < zo; ) {
      if ($ = P.charCodeAt(he), he === Dr && v + te + de + q !== 0 && (v !== 0 && ($ = v === 47 ? 10 : 47), te = de = q = 0, zo++, Dr++), v + te + de + q === 0) {
        if (he === Dr && (0 < xe && (K = K.replace(f, "")), 0 < K.trim().length)) {
          switch ($) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              K += P.charAt(he);
          }
          $ = 59;
        }
        switch ($) {
          case 123:
            for (K = K.trim(), pe = K.charCodeAt(0), ie = 1, Le = ++he; he < zo; ) {
              switch ($ = P.charCodeAt(he)) {
                case 123:
                  ie++;
                  break;
                case 125:
                  ie--;
                  break;
                case 47:
                  switch ($ = P.charCodeAt(he + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (Fe = he + 1; Fe < Dr; ++Fe)
                          switch (P.charCodeAt(Fe)) {
                            case 47:
                              if ($ === 42 && P.charCodeAt(Fe - 1) === 42 && he + 2 !== Fe) {
                                he = Fe + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if ($ === 47) {
                                he = Fe + 1;
                                break e;
                              }
                          }
                        he = Fe;
                      }
                  }
                  break;
                case 91:
                  $++;
                case 40:
                  $++;
                case 34:
                case 39:
                  for (; he++ < Dr && P.charCodeAt(he) !== $; )
                    ;
              }
              if (ie === 0)
                break;
              he++;
            }
            switch (ie = P.substring(Le, he), pe === 0 && (pe = (K = K.replace(l, "").trim()).charCodeAt(0)), pe) {
              case 64:
                switch (0 < xe && (K = K.replace(f, "")), $ = K.charCodeAt(1), $) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    xe = U;
                    break;
                  default:
                    xe = Q;
                }
                if (ie = n(U, xe, ie, $, O + 1), Le = ie.length, 0 < ne && (xe = t(Q, K, Cr), ct = a(3, ie, xe, U, Ie, Te, Le, $, O, F), K = xe.join(""), ct !== void 0 && (Le = (ie = ct.trim()).length) === 0 && ($ = 0, ie = "")), 0 < Le)
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
                ie = n(U, t(U, K, Cr), ie, F, O + 1);
            }
            Ys += ie, ie = Cr = xe = Fe = pe = 0, K = "", $ = P.charCodeAt(++he);
            break;
          case 125:
          case 59:
            if (K = (0 < xe ? K.replace(f, "") : K).trim(), 1 < (Le = K.length))
              switch (Fe === 0 && (pe = K.charCodeAt(0), pe === 45 || 96 < pe && 123 > pe) && (Le = (K = K.replace(" ", ":")).length), 0 < ne && (ct = a(1, K, U, D, Ie, Te, Ce.length, F, O, F)) !== void 0 && (Le = (K = ct.trim()).length) === 0 && (K = "\0\0"), pe = K.charCodeAt(0), $ = K.charCodeAt(1), pe) {
                case 0:
                  break;
                case 64:
                  if ($ === 105 || $ === 99) {
                    $s += K + P.charAt(he);
                    break;
                  }
                default:
                  K.charCodeAt(Le - 1) !== 58 && (Ce += o(K, pe, $, K.charCodeAt(2)));
              }
            Cr = xe = Fe = pe = 0, K = "", $ = P.charCodeAt(++he);
        }
      }
      switch ($) {
        case 13:
        case 10:
          v === 47 ? v = 0 : 1 + pe === 0 && F !== 107 && 0 < K.length && (xe = 1, K += "\0"), 0 < ne * Pe && a(0, K, U, D, Ie, Te, Ce.length, F, O, F), Te = 1, Ie++;
          break;
        case 59:
        case 125:
          if (v + te + de + q === 0) {
            Te++;
            break;
          }
        default:
          switch (Te++, bn = P.charAt(he), $) {
            case 9:
            case 32:
              if (te + q + v === 0)
                switch (ke) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    bn = "";
                    break;
                  default:
                    $ !== 32 && (bn = " ");
                }
              break;
            case 0:
              bn = "\\0";
              break;
            case 12:
              bn = "\\f";
              break;
            case 11:
              bn = "\\v";
              break;
            case 38:
              te + v + q === 0 && (xe = Cr = 1, bn = "\f" + bn);
              break;
            case 108:
              if (te + v + q + x === 0 && 0 < Fe)
                switch (he - Fe) {
                  case 2:
                    ke === 112 && P.charCodeAt(he - 3) === 58 && (x = ke);
                  case 8:
                    qe === 111 && (x = qe);
                }
              break;
            case 58:
              te + v + q === 0 && (Fe = he);
              break;
            case 44:
              v + de + te + q === 0 && (xe = 1, bn += "\r");
              break;
            case 34:
            case 39:
              v === 0 && (te = te === $ ? 0 : te === 0 ? $ : te);
              break;
            case 91:
              te + v + de === 0 && q++;
              break;
            case 93:
              te + v + de === 0 && q--;
              break;
            case 41:
              te + v + q === 0 && de--;
              break;
            case 40:
              if (te + v + q === 0) {
                if (pe === 0)
                  switch (2 * ke + 3 * qe) {
                    case 533:
                      break;
                    default:
                      pe = 1;
                  }
                de++;
              }
              break;
            case 64:
              v + de + te + q + Fe + ie === 0 && (ie = 1);
              break;
            case 42:
            case 47:
              if (!(0 < te + q + de))
                switch (v) {
                  case 0:
                    switch (2 * $ + 3 * P.charCodeAt(he + 1)) {
                      case 235:
                        v = 47;
                        break;
                      case 220:
                        Le = he, v = 42;
                    }
                    break;
                  case 42:
                    $ === 47 && ke === 42 && Le + 2 !== he && (P.charCodeAt(Le + 2) === 33 && (Ce += P.substring(Le, he + 1)), bn = "", v = 0);
                }
          }
          v === 0 && (K += bn);
      }
      qe = ke, ke = $, he++;
    }
    if (Le = Ce.length, 0 < Le) {
      if (xe = U, 0 < ne && (ct = a(2, Ce, xe, D, Ie, Te, Le, F, O, F), ct !== void 0 && (Ce = ct).length === 0))
        return $s + Ce + Ys;
      if (Ce = xe.join(",") + "{" + Ce + "}", C * x !== 0) {
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
    return $s + Ce + Ys;
  }
  function t(D, U, P) {
    var F = U.trim().split(m);
    U = F;
    var O = F.length, q = D.length;
    switch (q) {
      case 0:
      case 1:
        var v = 0;
        for (D = q === 0 ? "" : D[0] + " "; v < O; ++v)
          U[v] = r(D, U[v], P).trim();
        break;
      default:
        var de = v = 0;
        for (U = []; v < O; ++v)
          for (var te = 0; te < q; ++te)
            U[de++] = r(D[te] + " ", F[v], P).trim();
    }
    return U;
  }
  function r(D, U, P) {
    var F = U.charCodeAt(0);
    switch (33 > F && (F = (U = U.trim()).charCodeAt(0)), F) {
      case 38:
        return U.replace(b, "$1" + D.trim());
      case 58:
        return D.trim() + U.replace(b, "$1" + D.trim());
      default:
        if (0 < 1 * P && 0 < U.indexOf("\f"))
          return U.replace(b, (D.charCodeAt(0) === 58 ? "" : "$1") + D.trim());
    }
    return D + U;
  }
  function o(D, U, P, F) {
    var O = D + ";", q = 2 * U + 3 * P + 4 * F;
    if (q === 944) {
      D = O.indexOf(":", 9) + 1;
      var v = O.substring(D, O.length - 1).trim();
      return v = O.substring(0, D).trim() + v + ";", C === 1 || C === 2 && i(v, 1) ? "-webkit-" + v + v : v;
    }
    if (C === 0 || C === 2 && !i(O, 1))
      return O;
    switch (q) {
      case 1015:
        return O.charCodeAt(10) === 97 ? "-webkit-" + O + O : O;
      case 951:
        return O.charCodeAt(3) === 116 ? "-webkit-" + O + O : O;
      case 963:
        return O.charCodeAt(5) === 110 ? "-webkit-" + O + O : O;
      case 1009:
        if (O.charCodeAt(4) !== 100)
          break;
      case 969:
      case 942:
        return "-webkit-" + O + O;
      case 978:
        return "-webkit-" + O + "-moz-" + O + O;
      case 1019:
      case 983:
        return "-webkit-" + O + "-moz-" + O + "-ms-" + O + O;
      case 883:
        if (O.charCodeAt(8) === 45)
          return "-webkit-" + O + O;
        if (0 < O.indexOf("image-set(", 11))
          return O.replace(Oe, "$1-webkit-$2") + O;
        break;
      case 932:
        if (O.charCodeAt(4) === 45)
          switch (O.charCodeAt(5)) {
            case 103:
              return "-webkit-box-" + O.replace("-grow", "") + "-webkit-" + O + "-ms-" + O.replace("grow", "positive") + O;
            case 115:
              return "-webkit-" + O + "-ms-" + O.replace("shrink", "negative") + O;
            case 98:
              return "-webkit-" + O + "-ms-" + O.replace("basis", "preferred-size") + O;
          }
        return "-webkit-" + O + "-ms-" + O + O;
      case 964:
        return "-webkit-" + O + "-ms-flex-" + O + O;
      case 1023:
        if (O.charCodeAt(8) !== 99)
          break;
        return v = O.substring(O.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + v + "-webkit-" + O + "-ms-flex-pack" + v + O;
      case 1005:
        return d.test(O) ? O.replace(T, ":-webkit-") + O.replace(T, ":-moz-") + O : O;
      case 1e3:
        switch (v = O.substring(13).trim(), U = v.indexOf("-") + 1, v.charCodeAt(0) + v.charCodeAt(U)) {
          case 226:
            v = O.replace(p, "tb");
            break;
          case 232:
            v = O.replace(p, "tb-rl");
            break;
          case 220:
            v = O.replace(p, "lr");
            break;
          default:
            return O;
        }
        return "-webkit-" + O + "-ms-" + v + O;
      case 1017:
        if (O.indexOf("sticky", 9) === -1)
          break;
      case 975:
        switch (U = (O = D).length - 10, v = (O.charCodeAt(U) === 33 ? O.substring(0, U) : O).substring(D.indexOf(":", 7) + 1).trim(), q = v.charCodeAt(0) + (v.charCodeAt(7) | 0)) {
          case 203:
            if (111 > v.charCodeAt(8))
              break;
          case 115:
            O = O.replace(v, "-webkit-" + v) + ";" + O;
            break;
          case 207:
          case 102:
            O = O.replace(v, "-webkit-" + (102 < q ? "inline-" : "") + "box") + ";" + O.replace(v, "-webkit-" + v) + ";" + O.replace(v, "-ms-" + v + "box") + ";" + O;
        }
        return O + ";";
      case 938:
        if (O.charCodeAt(5) === 45)
          switch (O.charCodeAt(6)) {
            case 105:
              return v = O.replace("-items", ""), "-webkit-" + O + "-webkit-box-" + v + "-ms-flex-" + v + O;
            case 115:
              return "-webkit-" + O + "-ms-flex-item-" + O.replace(Y, "") + O;
            default:
              return "-webkit-" + O + "-ms-flex-line-pack" + O.replace("align-content", "").replace(Y, "") + O;
          }
        break;
      case 973:
      case 989:
        if (O.charCodeAt(3) !== 45 || O.charCodeAt(4) === 122)
          break;
      case 931:
      case 953:
        if (j.test(D) === !0)
          return (v = D.substring(D.indexOf(":") + 1)).charCodeAt(0) === 115 ? o(D.replace("stretch", "fill-available"), U, P, F).replace(":fill-available", ":stretch") : O.replace(v, "-webkit-" + v) + O.replace(v, "-moz-" + v.replace("fill-", "")) + O;
        break;
      case 962:
        if (O = "-webkit-" + O + (O.charCodeAt(5) === 102 ? "-ms-" + O : "") + O, P + F === 211 && O.charCodeAt(13) === 105 && 0 < O.indexOf("transform", 10))
          return O.substring(0, O.indexOf(";", 27) + 1).replace(h, "$1-webkit-$2") + O;
    }
    return O;
  }
  function i(D, U) {
    var P = D.indexOf(U === 1 ? ":" : "{"), F = D.substring(0, U !== 3 ? P : 10);
    return P = D.substring(P + 1, D.length - 1), ve(U !== 2 ? F : F.replace(M, "$1"), P, U);
  }
  function s(D, U) {
    var P = o(U, U.charCodeAt(0), U.charCodeAt(1), U.charCodeAt(2));
    return P !== U + ";" ? P.replace(k, " or ($1)").substring(4) : "(" + U + ")";
  }
  function a(D, U, P, F, O, q, v, de, te, pe) {
    for (var $ = 0, ke = U, qe; $ < ne; ++$)
      switch (qe = ce[$].call(c, D, ke, P, F, O, q, v, de, te, pe)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          ke = qe;
      }
    if (ke !== U)
      return ke;
  }
  function u(D) {
    switch (D) {
      case void 0:
      case null:
        ne = ce.length = 0;
        break;
      default:
        if (typeof D == "function")
          ce[ne++] = D;
        else if (typeof D == "object")
          for (var U = 0, P = D.length; U < P; ++U)
            u(D[U]);
        else
          Pe = !!D | 0;
    }
    return u;
  }
  function _(D) {
    return D = D.prefix, D !== void 0 && (ve = null, D ? typeof D != "function" ? C = 1 : (C = 2, ve = D) : C = 0), _;
  }
  function c(D, U) {
    var P = D;
    if (33 > P.charCodeAt(0) && (P = P.trim()), Ae = P, P = [Ae], 0 < ne) {
      var F = a(-1, U, P, P, Ie, Te, 0, 0, 0, 0);
      F !== void 0 && typeof F == "string" && (U = F);
    }
    var O = n(Q, P, U, 0, 0);
    return 0 < ne && (F = a(-2, O, P, P, Ie, Te, O.length, 0, 0, 0), F !== void 0 && (O = F)), Ae = "", x = 0, Te = Ie = 1, O;
  }
  var l = /^\0+/g, f = /[\0\r\f]/g, T = /: */g, d = /zoo|gra/, h = /([,: ])(transform)/g, m = /,\r+?/g, b = /([\t\r\n ])*\f?&/g, R = /@(k\w+)\s*(\S*)\s*/, N = /::(place)/g, A = /:(read-only)/g, p = /[svh]\w+-[tblr]{2}/, w = /\(\s*(.*)\s*\)/g, k = /([\s\S]*?);/g, Y = /-self|flex-/g, M = /[^]*?(:[rp][el]a[\w-]+)[^]*/, j = /stretch|:\s*\w+\-(?:conte|avail)/, Oe = /([^-])(image-set\()/, Te = 1, Ie = 1, x = 0, C = 1, Q = [], ce = [], ne = 0, ve = null, Pe = 0, Ae = "";
  return c.use = u, c.set = _, e !== void 0 && _(e), c;
}
var XE = {
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
function KE(e) {
  var n = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return n[t] === void 0 && (n[t] = e(t)), n[t];
  };
}
var YE = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, $_ = /* @__PURE__ */ KE(
  function(e) {
    return YE.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), kd = { exports: {} }, fe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var z_;
function $E() {
  if (z_)
    return fe;
  z_ = 1;
  var e = typeof Symbol == "function" && Symbol.for, n = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, _ = e ? Symbol.for("react.concurrent_mode") : 60111, c = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, T = e ? Symbol.for("react.memo") : 60115, d = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, b = e ? Symbol.for("react.responder") : 60118, R = e ? Symbol.for("react.scope") : 60119;
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
  return fe.AsyncMode = u, fe.ConcurrentMode = _, fe.ContextConsumer = a, fe.ContextProvider = s, fe.Element = n, fe.ForwardRef = c, fe.Fragment = r, fe.Lazy = d, fe.Memo = T, fe.Portal = t, fe.Profiler = i, fe.StrictMode = o, fe.Suspense = l, fe.isAsyncMode = function(p) {
    return A(p) || N(p) === u;
  }, fe.isConcurrentMode = A, fe.isContextConsumer = function(p) {
    return N(p) === a;
  }, fe.isContextProvider = function(p) {
    return N(p) === s;
  }, fe.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === n;
  }, fe.isForwardRef = function(p) {
    return N(p) === c;
  }, fe.isFragment = function(p) {
    return N(p) === r;
  }, fe.isLazy = function(p) {
    return N(p) === d;
  }, fe.isMemo = function(p) {
    return N(p) === T;
  }, fe.isPortal = function(p) {
    return N(p) === t;
  }, fe.isProfiler = function(p) {
    return N(p) === i;
  }, fe.isStrictMode = function(p) {
    return N(p) === o;
  }, fe.isSuspense = function(p) {
    return N(p) === l;
  }, fe.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === r || p === _ || p === i || p === o || p === l || p === f || typeof p == "object" && p !== null && (p.$$typeof === d || p.$$typeof === T || p.$$typeof === s || p.$$typeof === a || p.$$typeof === c || p.$$typeof === m || p.$$typeof === b || p.$$typeof === R || p.$$typeof === h);
  }, fe.typeOf = N, fe;
}
kd.exports = $E();
var zE = kd.exports, Au = zE, JE = {
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
}, qE = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, QE = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, xd = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Su = {};
Su[Au.ForwardRef] = QE;
Su[Au.Memo] = xd;
function J_(e) {
  return Au.isMemo(e) ? xd : Su[e.$$typeof] || JE;
}
var ZE = Object.defineProperty, eO = Object.getOwnPropertyNames, q_ = Object.getOwnPropertySymbols, nO = Object.getOwnPropertyDescriptor, tO = Object.getPrototypeOf, Q_ = Object.prototype;
function Ld(e, n, t) {
  if (typeof n != "string") {
    if (Q_) {
      var r = tO(n);
      r && r !== Q_ && Ld(e, r, t);
    }
    var o = eO(n);
    q_ && (o = o.concat(q_(n)));
    for (var i = J_(e), s = J_(n), a = 0; a < o.length; ++a) {
      var u = o[a];
      if (!qE[u] && !(t && t[u]) && !(s && s[u]) && !(i && i[u])) {
        var _ = nO(n, u);
        try {
          ZE(e, u, _);
        } catch {
        }
      }
    }
  }
  return e;
}
var rO = Ld;
const oO = /* @__PURE__ */ FE(rO);
function qn() {
  return (qn = Object.assign || function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = arguments[n];
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    }
    return e;
  }).apply(this, arguments);
}
var Z_ = function(e, n) {
  for (var t = [e[0]], r = 0, o = n.length; r < o; r += 1)
    t.push(n[r], e[r + 1]);
  return t;
}, ya = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !Md.typeOf(e);
}, Fi = Object.freeze([]), It = Object.freeze({});
function oo(e) {
  return typeof e == "function";
}
function el(e) {
  return e.displayName || e.name || "Component";
}
function vu(e) {
  return e && typeof e.styledComponentId == "string";
}
var hr = typeof process < "u" && ({ GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_a284b574-e103-4a2d-9964-13cb2d46b6b4", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "npm/8.19.4 node/v16.20.1 linux x64 workspaces/false ci/github-actions", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_a284b574-e103-4a2d-9964-13cb2d46b6b4", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", npm_config_noproxy: "", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-8.2.1", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "", npm_config_userconfig: "/home/runner/.npmrc", npm_config_local_prefix: "/home/runner/work/CodeGear/CodeGear", SYSTEMD_EXEC_PID: "662", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", COLOR: "0", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.6/x64", NVM_DIR: "/home/runner/.nvm", npm_config_metrics_registry: "https://registry.npmjs.org/", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230724.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", JOURNAL_STREAM: "8:16944", GITHUB_WORKFLOW: "CodeGear CI", _: "/opt/hostedtoolcache/node/16.20.1/x64/bin/npm", npm_config_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", GITHUB_RUN_ID: "5672897106", npm_config_cache: "/home/runner/.npm", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "00b85ce7976fbd5861cf062f85909e4a65fe8907", GITHUB_BASE_REF: "", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/heads/develop", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", npm_config_node_gyp: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.bin:/home/runner/work/CodeGear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_133ea27d-82fc-4209-aa9d-fc9dfdbce48f", INVOCATION_ID: "e83c49f3760a40579b5346890f911300", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.11/x64", NODE: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "23", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 3", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "develop", GITHUB_REPOSITORY: "Gearonix/CodeGear", npm_lifecycle_script: " nx run-many --targets=build --all", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", npm_package_version: "0.0.0", npm_lifecycle_event: "build", NODE_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/bin/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/node_modules", GITHUB_REF_PROTECTED: "false", npm_config_strict_peer_dependencies: "", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "00b85ce7976fbd5861cf062f85909e4a65fe8907", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/heads/develop", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", npm_config_globalconfig: "/opt/hostedtoolcache/node/16.20.1/x64/etc/npmrc", npm_config_init_module: "/home/runner/.npm-init.js", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_a284b574-e103-4a2d-9964-13cb2d46b6b4", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", npm_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/bin/npm-cli.js", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "push", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_a284b574-e103-4a2d-9964-13cb2d46b6b4", npm_config_global_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", npm_command: "run-script", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_a284b574-e103-4a2d-9964-13cb2d46b6b4", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", EDITOR: "vi", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/7269812733523924288", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "7269812733523924288", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.REACT_APP_SC_ATTR || { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_a284b574-e103-4a2d-9964-13cb2d46b6b4", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "npm/8.19.4 node/v16.20.1 linux x64 workspaces/false ci/github-actions", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_a284b574-e103-4a2d-9964-13cb2d46b6b4", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", npm_config_noproxy: "", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-8.2.1", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "", npm_config_userconfig: "/home/runner/.npmrc", npm_config_local_prefix: "/home/runner/work/CodeGear/CodeGear", SYSTEMD_EXEC_PID: "662", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", COLOR: "0", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.6/x64", NVM_DIR: "/home/runner/.nvm", npm_config_metrics_registry: "https://registry.npmjs.org/", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230724.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", JOURNAL_STREAM: "8:16944", GITHUB_WORKFLOW: "CodeGear CI", _: "/opt/hostedtoolcache/node/16.20.1/x64/bin/npm", npm_config_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", GITHUB_RUN_ID: "5672897106", npm_config_cache: "/home/runner/.npm", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "00b85ce7976fbd5861cf062f85909e4a65fe8907", GITHUB_BASE_REF: "", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/heads/develop", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", npm_config_node_gyp: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.bin:/home/runner/work/CodeGear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_133ea27d-82fc-4209-aa9d-fc9dfdbce48f", INVOCATION_ID: "e83c49f3760a40579b5346890f911300", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.11/x64", NODE: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "23", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 3", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "develop", GITHUB_REPOSITORY: "Gearonix/CodeGear", npm_lifecycle_script: " nx run-many --targets=build --all", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", npm_package_version: "0.0.0", npm_lifecycle_event: "build", NODE_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/bin/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/node_modules", GITHUB_REF_PROTECTED: "false", npm_config_strict_peer_dependencies: "", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "00b85ce7976fbd5861cf062f85909e4a65fe8907", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/heads/develop", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", npm_config_globalconfig: "/opt/hostedtoolcache/node/16.20.1/x64/etc/npmrc", npm_config_init_module: "/home/runner/.npm-init.js", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_a284b574-e103-4a2d-9964-13cb2d46b6b4", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", npm_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/bin/npm-cli.js", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "push", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_a284b574-e103-4a2d-9964-13cb2d46b6b4", npm_config_global_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", npm_command: "run-script", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_a284b574-e103-4a2d-9964-13cb2d46b6b4", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", EDITOR: "vi", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/7269812733523924288", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "7269812733523924288", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.SC_ATTR) || "data-styled", Gu = typeof window < "u" && "HTMLElement" in window, iO = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_a284b574-e103-4a2d-9964-13cb2d46b6b4", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "npm/8.19.4 node/v16.20.1 linux x64 workspaces/false ci/github-actions", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_a284b574-e103-4a2d-9964-13cb2d46b6b4", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", npm_config_noproxy: "", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-8.2.1", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "", npm_config_userconfig: "/home/runner/.npmrc", npm_config_local_prefix: "/home/runner/work/CodeGear/CodeGear", SYSTEMD_EXEC_PID: "662", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", COLOR: "0", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.6/x64", NVM_DIR: "/home/runner/.nvm", npm_config_metrics_registry: "https://registry.npmjs.org/", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230724.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", JOURNAL_STREAM: "8:16944", GITHUB_WORKFLOW: "CodeGear CI", _: "/opt/hostedtoolcache/node/16.20.1/x64/bin/npm", npm_config_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", GITHUB_RUN_ID: "5672897106", npm_config_cache: "/home/runner/.npm", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "00b85ce7976fbd5861cf062f85909e4a65fe8907", GITHUB_BASE_REF: "", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/heads/develop", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", npm_config_node_gyp: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.bin:/home/runner/work/CodeGear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_133ea27d-82fc-4209-aa9d-fc9dfdbce48f", INVOCATION_ID: "e83c49f3760a40579b5346890f911300", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.11/x64", NODE: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "23", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 3", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "develop", GITHUB_REPOSITORY: "Gearonix/CodeGear", npm_lifecycle_script: " nx run-many --targets=build --all", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", npm_package_version: "0.0.0", npm_lifecycle_event: "build", NODE_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/bin/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/node_modules", GITHUB_REF_PROTECTED: "false", npm_config_strict_peer_dependencies: "", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "00b85ce7976fbd5861cf062f85909e4a65fe8907", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/heads/develop", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", npm_config_globalconfig: "/opt/hostedtoolcache/node/16.20.1/x64/etc/npmrc", npm_config_init_module: "/home/runner/.npm-init.js", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_a284b574-e103-4a2d-9964-13cb2d46b6b4", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", npm_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/bin/npm-cli.js", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "push", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_a284b574-e103-4a2d-9964-13cb2d46b6b4", npm_config_global_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", npm_command: "run-script", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_a284b574-e103-4a2d-9964-13cb2d46b6b4", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", EDITOR: "vi", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/7269812733523924288", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "7269812733523924288", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_a284b574-e103-4a2d-9964-13cb2d46b6b4", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "npm/8.19.4 node/v16.20.1 linux x64 workspaces/false ci/github-actions", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_a284b574-e103-4a2d-9964-13cb2d46b6b4", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", npm_config_noproxy: "", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-8.2.1", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "", npm_config_userconfig: "/home/runner/.npmrc", npm_config_local_prefix: "/home/runner/work/CodeGear/CodeGear", SYSTEMD_EXEC_PID: "662", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", COLOR: "0", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.6/x64", NVM_DIR: "/home/runner/.nvm", npm_config_metrics_registry: "https://registry.npmjs.org/", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230724.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", JOURNAL_STREAM: "8:16944", GITHUB_WORKFLOW: "CodeGear CI", _: "/opt/hostedtoolcache/node/16.20.1/x64/bin/npm", npm_config_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", GITHUB_RUN_ID: "5672897106", npm_config_cache: "/home/runner/.npm", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "00b85ce7976fbd5861cf062f85909e4a65fe8907", GITHUB_BASE_REF: "", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/heads/develop", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", npm_config_node_gyp: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.bin:/home/runner/work/CodeGear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_133ea27d-82fc-4209-aa9d-fc9dfdbce48f", INVOCATION_ID: "e83c49f3760a40579b5346890f911300", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.11/x64", NODE: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "23", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 3", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "develop", GITHUB_REPOSITORY: "Gearonix/CodeGear", npm_lifecycle_script: " nx run-many --targets=build --all", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", npm_package_version: "0.0.0", npm_lifecycle_event: "build", NODE_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/bin/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/node_modules", GITHUB_REF_PROTECTED: "false", npm_config_strict_peer_dependencies: "", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "00b85ce7976fbd5861cf062f85909e4a65fe8907", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/heads/develop", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", npm_config_globalconfig: "/opt/hostedtoolcache/node/16.20.1/x64/etc/npmrc", npm_config_init_module: "/home/runner/.npm-init.js", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_a284b574-e103-4a2d-9964-13cb2d46b6b4", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", npm_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/bin/npm-cli.js", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "push", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_a284b574-e103-4a2d-9964-13cb2d46b6b4", npm_config_global_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", npm_command: "run-script", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_a284b574-e103-4a2d-9964-13cb2d46b6b4", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", EDITOR: "vi", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/7269812733523924288", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "7269812733523924288", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.REACT_APP_SC_DISABLE_SPEEDY !== "" ? { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_a284b574-e103-4a2d-9964-13cb2d46b6b4", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "npm/8.19.4 node/v16.20.1 linux x64 workspaces/false ci/github-actions", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_a284b574-e103-4a2d-9964-13cb2d46b6b4", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", npm_config_noproxy: "", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-8.2.1", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "", npm_config_userconfig: "/home/runner/.npmrc", npm_config_local_prefix: "/home/runner/work/CodeGear/CodeGear", SYSTEMD_EXEC_PID: "662", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", COLOR: "0", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.6/x64", NVM_DIR: "/home/runner/.nvm", npm_config_metrics_registry: "https://registry.npmjs.org/", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230724.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", JOURNAL_STREAM: "8:16944", GITHUB_WORKFLOW: "CodeGear CI", _: "/opt/hostedtoolcache/node/16.20.1/x64/bin/npm", npm_config_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", GITHUB_RUN_ID: "5672897106", npm_config_cache: "/home/runner/.npm", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "00b85ce7976fbd5861cf062f85909e4a65fe8907", GITHUB_BASE_REF: "", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/heads/develop", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", npm_config_node_gyp: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.bin:/home/runner/work/CodeGear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_133ea27d-82fc-4209-aa9d-fc9dfdbce48f", INVOCATION_ID: "e83c49f3760a40579b5346890f911300", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.11/x64", NODE: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "23", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 3", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "develop", GITHUB_REPOSITORY: "Gearonix/CodeGear", npm_lifecycle_script: " nx run-many --targets=build --all", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", npm_package_version: "0.0.0", npm_lifecycle_event: "build", NODE_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/bin/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/node_modules", GITHUB_REF_PROTECTED: "false", npm_config_strict_peer_dependencies: "", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "00b85ce7976fbd5861cf062f85909e4a65fe8907", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/heads/develop", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", npm_config_globalconfig: "/opt/hostedtoolcache/node/16.20.1/x64/etc/npmrc", npm_config_init_module: "/home/runner/.npm-init.js", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_a284b574-e103-4a2d-9964-13cb2d46b6b4", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", npm_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/bin/npm-cli.js", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "push", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_a284b574-e103-4a2d-9964-13cb2d46b6b4", npm_config_global_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", npm_command: "run-script", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_a284b574-e103-4a2d-9964-13cb2d46b6b4", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", EDITOR: "vi", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/7269812733523924288", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "7269812733523924288", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.REACT_APP_SC_DISABLE_SPEEDY !== "false" && { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_a284b574-e103-4a2d-9964-13cb2d46b6b4", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "npm/8.19.4 node/v16.20.1 linux x64 workspaces/false ci/github-actions", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_a284b574-e103-4a2d-9964-13cb2d46b6b4", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", npm_config_noproxy: "", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-8.2.1", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "", npm_config_userconfig: "/home/runner/.npmrc", npm_config_local_prefix: "/home/runner/work/CodeGear/CodeGear", SYSTEMD_EXEC_PID: "662", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", COLOR: "0", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.6/x64", NVM_DIR: "/home/runner/.nvm", npm_config_metrics_registry: "https://registry.npmjs.org/", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230724.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", JOURNAL_STREAM: "8:16944", GITHUB_WORKFLOW: "CodeGear CI", _: "/opt/hostedtoolcache/node/16.20.1/x64/bin/npm", npm_config_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", GITHUB_RUN_ID: "5672897106", npm_config_cache: "/home/runner/.npm", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "00b85ce7976fbd5861cf062f85909e4a65fe8907", GITHUB_BASE_REF: "", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/heads/develop", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", npm_config_node_gyp: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.bin:/home/runner/work/CodeGear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_133ea27d-82fc-4209-aa9d-fc9dfdbce48f", INVOCATION_ID: "e83c49f3760a40579b5346890f911300", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.11/x64", NODE: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "23", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 3", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "develop", GITHUB_REPOSITORY: "Gearonix/CodeGear", npm_lifecycle_script: " nx run-many --targets=build --all", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", npm_package_version: "0.0.0", npm_lifecycle_event: "build", NODE_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/bin/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/node_modules", GITHUB_REF_PROTECTED: "false", npm_config_strict_peer_dependencies: "", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "00b85ce7976fbd5861cf062f85909e4a65fe8907", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/heads/develop", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", npm_config_globalconfig: "/opt/hostedtoolcache/node/16.20.1/x64/etc/npmrc", npm_config_init_module: "/home/runner/.npm-init.js", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_a284b574-e103-4a2d-9964-13cb2d46b6b4", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", npm_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/bin/npm-cli.js", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "push", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_a284b574-e103-4a2d-9964-13cb2d46b6b4", npm_config_global_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", npm_command: "run-script", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_a284b574-e103-4a2d-9964-13cb2d46b6b4", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", EDITOR: "vi", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/7269812733523924288", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "7269812733523924288", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_a284b574-e103-4a2d-9964-13cb2d46b6b4", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "npm/8.19.4 node/v16.20.1 linux x64 workspaces/false ci/github-actions", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_a284b574-e103-4a2d-9964-13cb2d46b6b4", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", npm_config_noproxy: "", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-8.2.1", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "", npm_config_userconfig: "/home/runner/.npmrc", npm_config_local_prefix: "/home/runner/work/CodeGear/CodeGear", SYSTEMD_EXEC_PID: "662", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", COLOR: "0", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.6/x64", NVM_DIR: "/home/runner/.nvm", npm_config_metrics_registry: "https://registry.npmjs.org/", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230724.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", JOURNAL_STREAM: "8:16944", GITHUB_WORKFLOW: "CodeGear CI", _: "/opt/hostedtoolcache/node/16.20.1/x64/bin/npm", npm_config_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", GITHUB_RUN_ID: "5672897106", npm_config_cache: "/home/runner/.npm", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "00b85ce7976fbd5861cf062f85909e4a65fe8907", GITHUB_BASE_REF: "", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/heads/develop", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", npm_config_node_gyp: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.bin:/home/runner/work/CodeGear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_133ea27d-82fc-4209-aa9d-fc9dfdbce48f", INVOCATION_ID: "e83c49f3760a40579b5346890f911300", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.11/x64", NODE: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "23", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 3", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "develop", GITHUB_REPOSITORY: "Gearonix/CodeGear", npm_lifecycle_script: " nx run-many --targets=build --all", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", npm_package_version: "0.0.0", npm_lifecycle_event: "build", NODE_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/bin/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/node_modules", GITHUB_REF_PROTECTED: "false", npm_config_strict_peer_dependencies: "", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "00b85ce7976fbd5861cf062f85909e4a65fe8907", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/heads/develop", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", npm_config_globalconfig: "/opt/hostedtoolcache/node/16.20.1/x64/etc/npmrc", npm_config_init_module: "/home/runner/.npm-init.js", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_a284b574-e103-4a2d-9964-13cb2d46b6b4", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", npm_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/bin/npm-cli.js", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "push", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_a284b574-e103-4a2d-9964-13cb2d46b6b4", npm_config_global_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", npm_command: "run-script", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_a284b574-e103-4a2d-9964-13cb2d46b6b4", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", EDITOR: "vi", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/7269812733523924288", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "7269812733523924288", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.SC_DISABLE_SPEEDY !== void 0 && { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_a284b574-e103-4a2d-9964-13cb2d46b6b4", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "npm/8.19.4 node/v16.20.1 linux x64 workspaces/false ci/github-actions", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_a284b574-e103-4a2d-9964-13cb2d46b6b4", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", npm_config_noproxy: "", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-8.2.1", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "", npm_config_userconfig: "/home/runner/.npmrc", npm_config_local_prefix: "/home/runner/work/CodeGear/CodeGear", SYSTEMD_EXEC_PID: "662", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", COLOR: "0", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.6/x64", NVM_DIR: "/home/runner/.nvm", npm_config_metrics_registry: "https://registry.npmjs.org/", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230724.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", JOURNAL_STREAM: "8:16944", GITHUB_WORKFLOW: "CodeGear CI", _: "/opt/hostedtoolcache/node/16.20.1/x64/bin/npm", npm_config_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", GITHUB_RUN_ID: "5672897106", npm_config_cache: "/home/runner/.npm", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "00b85ce7976fbd5861cf062f85909e4a65fe8907", GITHUB_BASE_REF: "", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/heads/develop", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", npm_config_node_gyp: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.bin:/home/runner/work/CodeGear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_133ea27d-82fc-4209-aa9d-fc9dfdbce48f", INVOCATION_ID: "e83c49f3760a40579b5346890f911300", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.11/x64", NODE: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "23", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 3", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "develop", GITHUB_REPOSITORY: "Gearonix/CodeGear", npm_lifecycle_script: " nx run-many --targets=build --all", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", npm_package_version: "0.0.0", npm_lifecycle_event: "build", NODE_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/bin/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/node_modules", GITHUB_REF_PROTECTED: "false", npm_config_strict_peer_dependencies: "", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "00b85ce7976fbd5861cf062f85909e4a65fe8907", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/heads/develop", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", npm_config_globalconfig: "/opt/hostedtoolcache/node/16.20.1/x64/etc/npmrc", npm_config_init_module: "/home/runner/.npm-init.js", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_a284b574-e103-4a2d-9964-13cb2d46b6b4", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", npm_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/bin/npm-cli.js", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "push", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_a284b574-e103-4a2d-9964-13cb2d46b6b4", npm_config_global_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", npm_command: "run-script", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_a284b574-e103-4a2d-9964-13cb2d46b6b4", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", EDITOR: "vi", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/7269812733523924288", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "7269812733523924288", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.SC_DISABLE_SPEEDY !== "" && { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_a284b574-e103-4a2d-9964-13cb2d46b6b4", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "npm/8.19.4 node/v16.20.1 linux x64 workspaces/false ci/github-actions", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_a284b574-e103-4a2d-9964-13cb2d46b6b4", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", npm_config_noproxy: "", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-8.2.1", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "", npm_config_userconfig: "/home/runner/.npmrc", npm_config_local_prefix: "/home/runner/work/CodeGear/CodeGear", SYSTEMD_EXEC_PID: "662", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", COLOR: "0", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.6/x64", NVM_DIR: "/home/runner/.nvm", npm_config_metrics_registry: "https://registry.npmjs.org/", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230724.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", JOURNAL_STREAM: "8:16944", GITHUB_WORKFLOW: "CodeGear CI", _: "/opt/hostedtoolcache/node/16.20.1/x64/bin/npm", npm_config_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", GITHUB_RUN_ID: "5672897106", npm_config_cache: "/home/runner/.npm", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "00b85ce7976fbd5861cf062f85909e4a65fe8907", GITHUB_BASE_REF: "", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/heads/develop", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", npm_config_node_gyp: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.bin:/home/runner/work/CodeGear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_133ea27d-82fc-4209-aa9d-fc9dfdbce48f", INVOCATION_ID: "e83c49f3760a40579b5346890f911300", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.11/x64", NODE: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "23", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 3", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "develop", GITHUB_REPOSITORY: "Gearonix/CodeGear", npm_lifecycle_script: " nx run-many --targets=build --all", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", npm_package_version: "0.0.0", npm_lifecycle_event: "build", NODE_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/bin/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/node_modules", GITHUB_REF_PROTECTED: "false", npm_config_strict_peer_dependencies: "", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "00b85ce7976fbd5861cf062f85909e4a65fe8907", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/heads/develop", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", npm_config_globalconfig: "/opt/hostedtoolcache/node/16.20.1/x64/etc/npmrc", npm_config_init_module: "/home/runner/.npm-init.js", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_a284b574-e103-4a2d-9964-13cb2d46b6b4", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", npm_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/bin/npm-cli.js", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "push", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_a284b574-e103-4a2d-9964-13cb2d46b6b4", npm_config_global_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", npm_command: "run-script", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_a284b574-e103-4a2d-9964-13cb2d46b6b4", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", EDITOR: "vi", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/7269812733523924288", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "7269812733523924288", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.SC_DISABLE_SPEEDY !== "false" && { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_a284b574-e103-4a2d-9964-13cb2d46b6b4", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "npm/8.19.4 node/v16.20.1 linux x64 workspaces/false ci/github-actions", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_a284b574-e103-4a2d-9964-13cb2d46b6b4", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", npm_config_noproxy: "", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-8.2.1", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "", npm_config_userconfig: "/home/runner/.npmrc", npm_config_local_prefix: "/home/runner/work/CodeGear/CodeGear", SYSTEMD_EXEC_PID: "662", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", COLOR: "0", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.6/x64", NVM_DIR: "/home/runner/.nvm", npm_config_metrics_registry: "https://registry.npmjs.org/", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230724.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", JOURNAL_STREAM: "8:16944", GITHUB_WORKFLOW: "CodeGear CI", _: "/opt/hostedtoolcache/node/16.20.1/x64/bin/npm", npm_config_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", GITHUB_RUN_ID: "5672897106", npm_config_cache: "/home/runner/.npm", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "00b85ce7976fbd5861cf062f85909e4a65fe8907", GITHUB_BASE_REF: "", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/heads/develop", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", npm_config_node_gyp: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.bin:/home/runner/work/CodeGear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_133ea27d-82fc-4209-aa9d-fc9dfdbce48f", INVOCATION_ID: "e83c49f3760a40579b5346890f911300", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.11/x64", NODE: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "23", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 3", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "develop", GITHUB_REPOSITORY: "Gearonix/CodeGear", npm_lifecycle_script: " nx run-many --targets=build --all", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", npm_package_version: "0.0.0", npm_lifecycle_event: "build", NODE_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/bin/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/node_modules", GITHUB_REF_PROTECTED: "false", npm_config_strict_peer_dependencies: "", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "00b85ce7976fbd5861cf062f85909e4a65fe8907", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/heads/develop", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", npm_config_globalconfig: "/opt/hostedtoolcache/node/16.20.1/x64/etc/npmrc", npm_config_init_module: "/home/runner/.npm-init.js", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_a284b574-e103-4a2d-9964-13cb2d46b6b4", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", npm_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/bin/npm-cli.js", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "push", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_a284b574-e103-4a2d-9964-13cb2d46b6b4", npm_config_global_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", npm_command: "run-script", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_a284b574-e103-4a2d-9964-13cb2d46b6b4", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", EDITOR: "vi", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/7269812733523924288", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "7269812733523924288", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.SC_DISABLE_SPEEDY);
function ko(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    t[r - 1] = arguments[r];
  throw new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (t.length > 0 ? " Args: " + t.join(", ") : ""));
}
var sO = function() {
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
        (s <<= 1) < 0 && ko(16, "" + t);
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
}(), mi = /* @__PURE__ */ new Map(), Vi = /* @__PURE__ */ new Map(), Xr = 1, ti = function(e) {
  if (mi.has(e))
    return mi.get(e);
  for (; Vi.has(Xr); )
    Xr++;
  var n = Xr++;
  return mi.set(e, n), Vi.set(n, e), n;
}, aO = function(e) {
  return Vi.get(e);
}, uO = function(e, n) {
  n >= Xr && (Xr = n + 1), mi.set(e, n), Vi.set(n, e);
}, _O = "style[" + hr + '][data-styled-version="5.3.6"]', lO = new RegExp("^" + hr + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), cO = function(e, n, t) {
  for (var r, o = t.split(","), i = 0, s = o.length; i < s; i++)
    (r = o[i]) && e.registerName(n, r);
}, dO = function(e, n) {
  for (var t = (n.textContent || "").split(`/*!sc*/
`), r = [], o = 0, i = t.length; o < i; o++) {
    var s = t[o].trim();
    if (s) {
      var a = s.match(lO);
      if (a) {
        var u = 0 | parseInt(a[1], 10), _ = a[2];
        u !== 0 && (uO(_, u), cO(e, _, a[3]), e.getTag().insertRules(u, r)), r.length = 0;
      } else
        r.push(s);
    }
  }
}, hO = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, Bd = function(e) {
  var n = document.head, t = e || n, r = document.createElement("style"), o = function(a) {
    for (var u = a.childNodes, _ = u.length; _ >= 0; _--) {
      var c = u[_];
      if (c && c.nodeType === 1 && c.hasAttribute(hr))
        return c;
    }
  }(t), i = o !== void 0 ? o.nextSibling : null;
  r.setAttribute(hr, "active"), r.setAttribute("data-styled-version", "5.3.6");
  var s = hO();
  return s && r.setAttribute("nonce", s), t.insertBefore(r, i), r;
}, mO = function() {
  function e(t) {
    var r = this.element = Bd(t);
    r.appendChild(document.createTextNode("")), this.sheet = function(o) {
      if (o.sheet)
        return o.sheet;
      for (var i = document.styleSheets, s = 0, a = i.length; s < a; s++) {
        var u = i[s];
        if (u.ownerNode === o)
          return u;
      }
      ko(17);
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
}(), fO = function() {
  function e(t) {
    var r = this.element = Bd(t);
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
}(), pO = function() {
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
}(), nl = Gu, TO = { isServer: !Gu, useCSSOMInjection: !iO }, jd = function() {
  function e(t, r, o) {
    t === void 0 && (t = It), r === void 0 && (r = {}), this.options = qn({}, TO, {}, t), this.gs = r, this.names = new Map(o), this.server = !!t.isServer, !this.server && Gu && nl && (nl = !1, function(i) {
      for (var s = document.querySelectorAll(_O), a = 0, u = s.length; a < u; a++) {
        var _ = s[a];
        _ && _.getAttribute(hr) !== "active" && (dO(i, _), _.parentNode && _.parentNode.removeChild(_));
      }
    }(this));
  }
  e.registerId = function(t) {
    return ti(t);
  };
  var n = e.prototype;
  return n.reconstructWithOptions = function(t, r) {
    return r === void 0 && (r = !0), new e(qn({}, this.options, {}, t), this.gs, r && this.names || void 0);
  }, n.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, n.getTag = function() {
    return this.tag || (this.tag = (o = (r = this.options).isServer, i = r.useCSSOMInjection, s = r.target, t = o ? new pO(s) : i ? new mO(s) : new fO(s), new sO(t)));
    var t, r, o, i, s;
  }, n.hasNameForId = function(t, r) {
    return this.names.has(t) && this.names.get(t).has(r);
  }, n.registerName = function(t, r) {
    if (ti(t), this.names.has(t))
      this.names.get(t).add(r);
    else {
      var o = /* @__PURE__ */ new Set();
      o.add(r), this.names.set(t, o);
    }
  }, n.insertRules = function(t, r, o) {
    this.registerName(t, r), this.getTag().insertRules(ti(t), o);
  }, n.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, n.clearRules = function(t) {
    this.getTag().clearGroup(ti(t)), this.clearNames(t);
  }, n.clearTag = function() {
    this.tag = void 0;
  }, n.toString = function() {
    return function(t) {
      for (var r = t.getTag(), o = r.length, i = "", s = 0; s < o; s++) {
        var a = aO(s);
        if (a !== void 0) {
          var u = t.names.get(a), _ = r.getGroup(s);
          if (u && _ && u.size) {
            var c = hr + ".g" + s + '[id="' + a + '"]', l = "";
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
}(), EO = /(a)(d)/gi, tl = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Ua(e) {
  var n, t = "";
  for (n = Math.abs(e); n > 52; n = n / 52 | 0)
    t = tl(n % 52) + t;
  return (tl(n % 52) + t).replace(EO, "$1-$2");
}
var Qt = function(e, n) {
  for (var t = n.length; t; )
    e = 33 * e ^ n.charCodeAt(--t);
  return e;
}, Fd = function(e) {
  return Qt(5381, e);
};
function OO(e) {
  for (var n = 0; n < e.length; n += 1) {
    var t = e[n];
    if (oo(t) && !vu(t))
      return !1;
  }
  return !0;
}
var bO = Fd("5.3.6"), RO = function() {
  function e(n, t, r) {
    this.rules = n, this.staticRulesId = "", this.isStatic = (r === void 0 || r.isStatic) && OO(n), this.componentId = t, this.baseHash = Qt(bO, t), this.baseStyle = r, jd.registerId(t);
  }
  return e.prototype.generateAndInjectStyles = function(n, t, r) {
    var o = this.componentId, i = [];
    if (this.baseStyle && i.push(this.baseStyle.generateAndInjectStyles(n, t, r)), this.isStatic && !r.hash)
      if (this.staticRulesId && t.hasNameForId(o, this.staticRulesId))
        i.push(this.staticRulesId);
      else {
        var s = mr(this.rules, n, t, r).join(""), a = Ua(Qt(this.baseHash, s) >>> 0);
        if (!t.hasNameForId(o, a)) {
          var u = r(s, "." + a, void 0, o);
          t.insertRules(o, a, u);
        }
        i.push(a), this.staticRulesId = a;
      }
    else {
      for (var _ = this.rules.length, c = Qt(this.baseHash, r.hash), l = "", f = 0; f < _; f++) {
        var T = this.rules[f];
        if (typeof T == "string")
          l += T;
        else if (T) {
          var d = mr(T, n, t, r), h = Array.isArray(d) ? d.join("") : d;
          c = Qt(c, h + f), l += h;
        }
      }
      if (l) {
        var m = Ua(c >>> 0);
        if (!t.hasNameForId(o, m)) {
          var b = r(l, "." + m, void 0, o);
          t.insertRules(o, m, b);
        }
        i.push(m);
      }
    }
    return i.join(" ");
  }, e;
}(), gO = /^\s*\/\/.*$/gm, NO = [":", "[", ".", "#"];
function IO(e) {
  var n, t, r, o, i = e === void 0 ? It : e, s = i.options, a = s === void 0 ? It : s, u = i.plugins, _ = u === void 0 ? Fi : u, c = new WE(a), l = [], f = function(h) {
    function m(b) {
      if (b)
        try {
          h(b + "}");
        } catch {
        }
    }
    return function(b, R, N, A, p, w, k, Y, M, j) {
      switch (b) {
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
  }), T = function(h, m, b) {
    return m === 0 && NO.indexOf(b[t.length]) !== -1 || b.match(o) ? h : "." + n;
  };
  function d(h, m, b, R) {
    R === void 0 && (R = "&");
    var N = h.replace(gO, ""), A = m && b ? b + " " + m + " { " + N + " }" : N;
    return n = R, t = m, r = new RegExp("\\" + t + "\\b", "g"), o = new RegExp("(\\" + t + "\\b){2,}"), c(b || !m ? "" : m, A);
  }
  return c.use([].concat(_, [function(h, m, b) {
    h === 2 && b.length && b[0].lastIndexOf(t) > 0 && (b[0] = b[0].replace(r, T));
  }, f, function(h) {
    if (h === -2) {
      var m = l;
      return l = [], m;
    }
  }])), d.hash = _.length ? _.reduce(function(h, m) {
    return m.name || ko(15), Qt(h, m.name);
  }, 5381).toString() : "", d;
}
var Vd = Ge.createContext();
Vd.Consumer;
var Wd = Ge.createContext(), AO = (Wd.Consumer, new jd()), Ha = IO();
function SO() {
  return Je(Vd) || AO;
}
function vO() {
  return Je(Wd) || Ha;
}
var GO = function() {
  function e(n, t) {
    var r = this;
    this.inject = function(o, i) {
      i === void 0 && (i = Ha);
      var s = r.name + i.hash;
      o.hasNameForId(r.id, s) || o.insertRules(r.id, s, i(r.rules, s, "@keyframes"));
    }, this.toString = function() {
      return ko(12, String(r.name));
    }, this.name = n, this.id = "sc-keyframes-" + n, this.rules = t;
  }
  return e.prototype.getName = function(n) {
    return n === void 0 && (n = Ha), this.name + n.hash;
  }, e;
}(), CO = /([A-Z])/, DO = /([A-Z])/g, yO = /^ms-/, UO = function(e) {
  return "-" + e.toLowerCase();
};
function rl(e) {
  return CO.test(e) ? e.replace(DO, UO).replace(yO, "-ms-") : e;
}
var ol = function(e) {
  return e == null || e === !1 || e === "";
};
function mr(e, n, t, r) {
  if (Array.isArray(e)) {
    for (var o, i = [], s = 0, a = e.length; s < a; s += 1)
      (o = mr(e[s], n, t, r)) !== "" && (Array.isArray(o) ? i.push.apply(i, o) : i.push(o));
    return i;
  }
  if (ol(e))
    return "";
  if (vu(e))
    return "." + e.styledComponentId;
  if (oo(e)) {
    if (typeof (_ = e) != "function" || _.prototype && _.prototype.isReactComponent || !n)
      return e;
    var u = e(n);
    return mr(u, n, t, r);
  }
  var _;
  return e instanceof GO ? t ? (e.inject(t, r), e.getName(r)) : e : ya(e) ? function c(l, f) {
    var T, d, h = [];
    for (var m in l)
      l.hasOwnProperty(m) && !ol(l[m]) && (Array.isArray(l[m]) && l[m].isCss || oo(l[m]) ? h.push(rl(m) + ":", l[m], ";") : ya(l[m]) ? h.push.apply(h, c(l[m], m)) : h.push(rl(m) + ": " + (T = m, (d = l[m]) == null || typeof d == "boolean" || d === "" ? "" : typeof d != "number" || d === 0 || T in XE ? String(d).trim() : d + "px") + ";"));
    return f ? [f + " {"].concat(h, ["}"]) : h;
  }(e) : e.toString();
}
var il = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function Cn(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    t[r - 1] = arguments[r];
  return oo(e) || ya(e) ? il(mr(Z_(Fi, [e].concat(t)))) : t.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : il(mr(Z_(e, t)));
}
var HO = function(e, n, t) {
  return t === void 0 && (t = It), e.theme !== t.theme && e.theme || n || t.theme;
}, wO = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, PO = /(^-|-$)/g;
function ta(e) {
  return e.replace(wO, "-").replace(PO, "");
}
var MO = function(e) {
  return Ua(Fd(e) >>> 0);
};
function ri(e) {
  return typeof e == "string" && !0;
}
var wa = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, kO = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function xO(e, n, t) {
  var r = e[t];
  wa(n) && wa(r) ? Xd(r, n) : e[t] = n;
}
function Xd(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    t[r - 1] = arguments[r];
  for (var o = 0, i = t; o < i.length; o++) {
    var s = i[o];
    if (wa(s))
      for (var a in s)
        kO(a) && xO(e, s[a], a);
  }
  return e;
}
var Kd = Ge.createContext();
Kd.Consumer;
var ra = {};
function Yd(e, n, t) {
  var r = vu(e), o = !ri(e), i = n.attrs, s = i === void 0 ? Fi : i, a = n.componentId, u = a === void 0 ? function(R, N) {
    var A = typeof R != "string" ? "sc" : ta(R);
    ra[A] = (ra[A] || 0) + 1;
    var p = A + "-" + MO("5.3.6" + A + ra[A]);
    return N ? N + "-" + p : p;
  }(n.displayName, n.parentComponentId) : a, _ = n.displayName, c = _ === void 0 ? function(R) {
    return ri(R) ? "styled." + R : "Styled(" + el(R) + ")";
  }(e) : _, l = n.displayName && n.componentId ? ta(n.displayName) + "-" + n.componentId : n.componentId || u, f = r && e.attrs ? Array.prototype.concat(e.attrs, s).filter(Boolean) : s, T = n.shouldForwardProp;
  r && e.shouldForwardProp && (T = n.shouldForwardProp ? function(R, N, A) {
    return e.shouldForwardProp(R, N, A) && n.shouldForwardProp(R, N, A);
  } : e.shouldForwardProp);
  var d, h = new RO(t, l, r ? e.componentStyle : void 0), m = h.isStatic && s.length === 0, b = function(R, N) {
    return function(A, p, w, k) {
      var Y = A.attrs, M = A.componentStyle, j = A.defaultProps, Oe = A.foldedComponentIds, Te = A.shouldForwardProp, Ie = A.styledComponentId, x = A.target, C = function(F, O, q) {
        F === void 0 && (F = It);
        var v = qn({}, O, { theme: F }), de = {};
        return q.forEach(function(te) {
          var pe, $, ke, qe = te;
          for (pe in oo(qe) && (qe = qe(v)), qe)
            v[pe] = de[pe] = pe === "className" ? ($ = de[pe], ke = qe[pe], $ && ke ? $ + " " + ke : $ || ke) : qe[pe];
        }), [v, de];
      }(HO(p, Je(Kd), j) || It, p, Y), Q = C[0], ce = C[1], ne = function(F, O, q, v) {
        var de = SO(), te = vO(), pe = O ? F.generateAndInjectStyles(It, de, te) : F.generateAndInjectStyles(q, de, te);
        return pe;
      }(M, k, Q), ve = w, Pe = ce.$as || p.$as || ce.as || p.as || x, Ae = ri(Pe), D = ce !== p ? qn({}, p, {}, ce) : p, U = {};
      for (var P in D)
        P[0] !== "$" && P !== "as" && (P === "forwardedAs" ? U.as = D[P] : (Te ? Te(P, $_, Pe) : !Ae || $_(P)) && (U[P] = D[P]));
      return p.style && ce.style !== p.style && (U.style = qn({}, p.style, {}, ce.style)), U.className = Array.prototype.concat(Oe, Ie, ne !== Ie ? ne : null, p.className, ce.className).filter(Boolean).join(" "), U.ref = ve, If(Pe, U);
    }(d, R, N, m);
  };
  return b.displayName = c, (d = Ge.forwardRef(b)).attrs = f, d.componentStyle = h, d.displayName = c, d.shouldForwardProp = T, d.foldedComponentIds = r ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : Fi, d.styledComponentId = l, d.target = r ? e.target : e, d.withComponent = function(R) {
    var N = n.componentId, A = function(w, k) {
      if (w == null)
        return {};
      var Y, M, j = {}, Oe = Object.keys(w);
      for (M = 0; M < Oe.length; M++)
        Y = Oe[M], k.indexOf(Y) >= 0 || (j[Y] = w[Y]);
      return j;
    }(n, ["componentId"]), p = N && N + "-" + (ri(R) ? R : ta(el(R)));
    return Yd(R, qn({}, A, { attrs: f, componentId: p }), t);
  }, Object.defineProperty(d, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(R) {
    this._foldedDefaultProps = r ? Xd({}, e.defaultProps, R) : R;
  } }), d.toString = function() {
    return "." + d.styledComponentId;
  }, o && oO(d, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), d;
}
var Pa = function(e) {
  return function n(t, r, o) {
    if (o === void 0 && (o = It), !Md.isValidElementType(r))
      return ko(1, String(r));
    var i = function() {
      return t(r, o, Cn.apply(void 0, arguments));
    };
    return i.withConfig = function(s) {
      return n(t, r, qn({}, o, {}, s));
    }, i.attrs = function(s) {
      return n(t, r, qn({}, o, { attrs: Array.prototype.concat(o.attrs, s).filter(Boolean) }));
    }, i;
  }(Yd, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  Pa[e] = Pa(e);
});
const _e = Pa, ye = (e = "100%", n = e) => Cn`
  width: ${e};
  height: ${n};
`;
Cn`
  border: 1px solid red;
`;
const LO = (e) => Cn`
  padding-left: ${e}px;
  padding-right: ${e}px;
`, yt = (e = "flex-start", n = "stretch", t = "row") => Cn`
  display: flex;
  justify-content: ${e};
  align-items: ${n};
  flex-direction: ${t};
`, Ma = (e) => Cn`
  transition: color 200ms;
  &:hover {
    color: ${e};
  }
`, fi = (e) => ({ theme: n }) => `${n[e]} !important;`, ms = (e = "&") => Cn`
  ${e}::-webkit-scrollbar {
    width: 10px;
  }

  ${e}::-webkit-scrollbar-track {
    background-color: ${({ theme: n }) => n.lightGrey};
  }

  ${e}::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
`, Me = (e) => Cn`
  ${({ theme: n }) => n[e]}
`, $d = (e) => Cn`
  position: absolute;
  ${Object.entries(e).map(([n, t]) => `${n}: ${t};`).join(`
`)}
`, BO = (e, n) => Cn`
  margin-left: ${e}px;
  margin-top: ${n}px;
`, jO = Cn`
  -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
`, FO = "1px solid", VO = _e.div`
  ${ye("33%", "100%")};
  border-radius: 6px;
`, zd = _e.h4`
  &:first-letter {
    text-transform: capitalize;
  }
  svg {
    margin-bottom: -3px;
  }
  color: ${Me("light")};
  margin: 9px 4px;
  margin-top: 5px;
  font-size: ${({ theme: e }) => e.fz9};
`;
function Jd(e, n) {
  return function() {
    return e.apply(n, arguments);
  };
}
const { toString: WO } = Object.prototype, { getPrototypeOf: Cu } = Object, fs = ((e) => (n) => {
  const t = WO.call(n);
  return e[t] || (e[t] = t.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Fn = (e) => (e = e.toLowerCase(), (n) => fs(n) === e), ps = (e) => (n) => typeof n === e, { isArray: Rr } = Array, io = ps("undefined");
function XO(e) {
  return e !== null && !io(e) && e.constructor !== null && !io(e.constructor) && mn(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const qd = Fn("ArrayBuffer");
function KO(e) {
  let n;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? n = ArrayBuffer.isView(e) : n = e && e.buffer && qd(e.buffer), n;
}
const YO = ps("string"), mn = ps("function"), Qd = ps("number"), Ts = (e) => e !== null && typeof e == "object", $O = (e) => e === !0 || e === !1, pi = (e) => {
  if (fs(e) !== "object")
    return !1;
  const n = Cu(e);
  return (n === null || n === Object.prototype || Object.getPrototypeOf(n) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, zO = Fn("Date"), JO = Fn("File"), qO = Fn("Blob"), QO = Fn("FileList"), ZO = (e) => Ts(e) && mn(e.pipe), eb = (e) => {
  let n;
  return e && (typeof FormData == "function" && e instanceof FormData || mn(e.append) && ((n = fs(e)) === "formdata" || // detect form-data instance
  n === "object" && mn(e.toString) && e.toString() === "[object FormData]"));
}, nb = Fn("URLSearchParams"), tb = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function xo(e, n, { allOwnKeys: t = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, o;
  if (typeof e != "object" && (e = [e]), Rr(e))
    for (r = 0, o = e.length; r < o; r++)
      n.call(null, e[r], r, e);
  else {
    const i = t ? Object.getOwnPropertyNames(e) : Object.keys(e), s = i.length;
    let a;
    for (r = 0; r < s; r++)
      a = i[r], n.call(null, e[a], a, e);
  }
}
function Zd(e, n) {
  n = n.toLowerCase();
  const t = Object.keys(e);
  let r = t.length, o;
  for (; r-- > 0; )
    if (o = t[r], n === o.toLowerCase())
      return o;
  return null;
}
const eh = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), nh = (e) => !io(e) && e !== eh;
function ka() {
  const { caseless: e } = nh(this) && this || {}, n = {}, t = (r, o) => {
    const i = e && Zd(n, o) || o;
    pi(n[i]) && pi(r) ? n[i] = ka(n[i], r) : pi(r) ? n[i] = ka({}, r) : Rr(r) ? n[i] = r.slice() : n[i] = r;
  };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && xo(arguments[r], t);
  return n;
}
const rb = (e, n, t, { allOwnKeys: r } = {}) => (xo(n, (o, i) => {
  t && mn(o) ? e[i] = Jd(o, t) : e[i] = o;
}, { allOwnKeys: r }), e), ob = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), ib = (e, n, t, r) => {
  e.prototype = Object.create(n.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: n.prototype
  }), t && Object.assign(e.prototype, t);
}, sb = (e, n, t, r) => {
  let o, i, s;
  const a = {};
  if (n = n || {}, e == null)
    return n;
  do {
    for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
      s = o[i], (!r || r(s, e, n)) && !a[s] && (n[s] = e[s], a[s] = !0);
    e = t !== !1 && Cu(e);
  } while (e && (!t || t(e, n)) && e !== Object.prototype);
  return n;
}, ab = (e, n, t) => {
  e = String(e), (t === void 0 || t > e.length) && (t = e.length), t -= n.length;
  const r = e.indexOf(n, t);
  return r !== -1 && r === t;
}, ub = (e) => {
  if (!e)
    return null;
  if (Rr(e))
    return e;
  let n = e.length;
  if (!Qd(n))
    return null;
  const t = new Array(n);
  for (; n-- > 0; )
    t[n] = e[n];
  return t;
}, _b = ((e) => (n) => e && n instanceof e)(typeof Uint8Array < "u" && Cu(Uint8Array)), lb = (e, n) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const i = o.value;
    n.call(e, i[0], i[1]);
  }
}, cb = (e, n) => {
  let t;
  const r = [];
  for (; (t = e.exec(n)) !== null; )
    r.push(t);
  return r;
}, db = Fn("HTMLFormElement"), hb = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(t, r, o) {
    return r.toUpperCase() + o;
  }
), sl = (({ hasOwnProperty: e }) => (n, t) => e.call(n, t))(Object.prototype), mb = Fn("RegExp"), th = (e, n) => {
  const t = Object.getOwnPropertyDescriptors(e), r = {};
  xo(t, (o, i) => {
    n(o, i, e) !== !1 && (r[i] = o);
  }), Object.defineProperties(e, r);
}, fb = (e) => {
  th(e, (n, t) => {
    if (mn(e) && ["arguments", "caller", "callee"].indexOf(t) !== -1)
      return !1;
    const r = e[t];
    if (mn(r)) {
      if (n.enumerable = !1, "writable" in n) {
        n.writable = !1;
        return;
      }
      n.set || (n.set = () => {
        throw Error("Can not rewrite read-only method '" + t + "'");
      });
    }
  });
}, pb = (e, n) => {
  const t = {}, r = (o) => {
    o.forEach((i) => {
      t[i] = !0;
    });
  };
  return Rr(e) ? r(e) : r(String(e).split(n)), t;
}, Tb = () => {
}, Eb = (e, n) => (e = +e, Number.isFinite(e) ? e : n), oa = "abcdefghijklmnopqrstuvwxyz", al = "0123456789", rh = {
  DIGIT: al,
  ALPHA: oa,
  ALPHA_DIGIT: oa + oa.toUpperCase() + al
}, Ob = (e = 16, n = rh.ALPHA_DIGIT) => {
  let t = "";
  const { length: r } = n;
  for (; e--; )
    t += n[Math.random() * r | 0];
  return t;
};
function bb(e) {
  return !!(e && mn(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const Rb = (e) => {
  const n = new Array(10), t = (r, o) => {
    if (Ts(r)) {
      if (n.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        n[o] = r;
        const i = Rr(r) ? [] : {};
        return xo(r, (s, a) => {
          const u = t(s, o + 1);
          !io(u) && (i[a] = u);
        }), n[o] = void 0, i;
      }
    }
    return r;
  };
  return t(e, 0);
}, gb = Fn("AsyncFunction"), Nb = (e) => e && (Ts(e) || mn(e)) && mn(e.then) && mn(e.catch), g = {
  isArray: Rr,
  isArrayBuffer: qd,
  isBuffer: XO,
  isFormData: eb,
  isArrayBufferView: KO,
  isString: YO,
  isNumber: Qd,
  isBoolean: $O,
  isObject: Ts,
  isPlainObject: pi,
  isUndefined: io,
  isDate: zO,
  isFile: JO,
  isBlob: qO,
  isRegExp: mb,
  isFunction: mn,
  isStream: ZO,
  isURLSearchParams: nb,
  isTypedArray: _b,
  isFileList: QO,
  forEach: xo,
  merge: ka,
  extend: rb,
  trim: tb,
  stripBOM: ob,
  inherits: ib,
  toFlatObject: sb,
  kindOf: fs,
  kindOfTest: Fn,
  endsWith: ab,
  toArray: ub,
  forEachEntry: lb,
  matchAll: cb,
  isHTMLForm: db,
  hasOwnProperty: sl,
  hasOwnProp: sl,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: th,
  freezeMethods: fb,
  toObjectSet: pb,
  toCamelCase: hb,
  noop: Tb,
  toFiniteNumber: Eb,
  findKey: Zd,
  global: eh,
  isContextDefined: nh,
  ALPHABET: rh,
  generateString: Ob,
  isSpecCompliantForm: bb,
  toJSONObject: Rb,
  isAsyncFn: gb,
  isThenable: Nb
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
const oh = oe.prototype, ih = {};
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
  ih[e] = { value: e };
});
Object.defineProperties(oe, ih);
Object.defineProperty(oh, "isAxiosError", { value: !0 });
oe.from = (e, n, t, r, o, i) => {
  const s = Object.create(oh);
  return g.toFlatObject(e, s, function(u) {
    return u !== Error.prototype;
  }, (a) => a !== "isAxiosError"), oe.call(s, e.message, n, t, r, o), s.cause = e, s.name = e.name, i && Object.assign(s, i), s;
};
const Ib = null;
function xa(e) {
  return g.isPlainObject(e) || g.isArray(e);
}
function sh(e) {
  return g.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function ul(e, n, t) {
  return e ? e.concat(n).map(function(o, i) {
    return o = sh(o), !t && i ? "[" + o + "]" : o;
  }).join(t ? "." : "") : n;
}
function Ab(e) {
  return g.isArray(e) && !e.some(xa);
}
const Sb = g.toFlatObject(g, {}, null, function(n) {
  return /^is[A-Z]/.test(n);
});
function Es(e, n, t) {
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
    let b = d;
    if (d && !m && typeof d == "object") {
      if (g.endsWith(h, "{}"))
        h = r ? h : h.slice(0, -2), d = JSON.stringify(d);
      else if (g.isArray(d) && Ab(d) || (g.isFileList(d) || g.endsWith(h, "[]")) && (b = g.toArray(d)))
        return h = sh(h), b.forEach(function(N, A) {
          !(g.isUndefined(N) || N === null) && n.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? ul([h], A, i) : s === null ? h : h + "[]",
            _(N)
          );
        }), !1;
    }
    return xa(d) ? !0 : (n.append(ul(m, h, i), _(d)), !1);
  }
  const l = [], f = Object.assign(Sb, {
    defaultVisitor: c,
    convertValue: _,
    isVisitable: xa
  });
  function T(d, h) {
    if (!g.isUndefined(d)) {
      if (l.indexOf(d) !== -1)
        throw Error("Circular reference detected in " + h.join("."));
      l.push(d), g.forEach(d, function(b, R) {
        (!(g.isUndefined(b) || b === null) && o.call(
          n,
          b,
          g.isString(R) ? R.trim() : R,
          h,
          f
        )) === !0 && T(b, h ? h.concat(R) : [R]);
      }), l.pop();
    }
  }
  if (!g.isObject(e))
    throw new TypeError("data must be an object");
  return T(e), n;
}
function _l(e) {
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
function Du(e, n) {
  this._pairs = [], e && Es(e, this, n);
}
const ah = Du.prototype;
ah.append = function(n, t) {
  this._pairs.push([n, t]);
};
ah.toString = function(n) {
  const t = n ? function(r) {
    return n.call(this, r, _l);
  } : _l;
  return this._pairs.map(function(o) {
    return t(o[0]) + "=" + t(o[1]);
  }, "").join("&");
};
function vb(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function uh(e, n, t) {
  if (!n)
    return e;
  const r = t && t.encode || vb, o = t && t.serialize;
  let i;
  if (o ? i = o(n, t) : i = g.isURLSearchParams(n) ? n.toString() : new Du(n, t).toString(r), i) {
    const s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class Gb {
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
const ll = Gb, _h = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Cb = typeof URLSearchParams < "u" ? URLSearchParams : Du, Db = typeof FormData < "u" ? FormData : null, yb = typeof Blob < "u" ? Blob : null, Ub = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), Hb = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), Pn = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Cb,
    FormData: Db,
    Blob: yb
  },
  isStandardBrowserEnv: Ub,
  isStandardBrowserWebWorkerEnv: Hb,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function wb(e, n) {
  return Es(e, new Pn.classes.URLSearchParams(), Object.assign({
    visitor: function(t, r, o, i) {
      return Pn.isNode && g.isBuffer(t) ? (this.append(r, t.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, n));
}
function Pb(e) {
  return g.matchAll(/\w+|\[(\w*)]/g, e).map((n) => n[0] === "[]" ? "" : n[1] || n[0]);
}
function Mb(e) {
  const n = {}, t = Object.keys(e);
  let r;
  const o = t.length;
  let i;
  for (r = 0; r < o; r++)
    i = t[r], n[i] = e[i];
  return n;
}
function lh(e) {
  function n(t, r, o, i) {
    let s = t[i++];
    const a = Number.isFinite(+s), u = i >= t.length;
    return s = !s && g.isArray(o) ? o.length : s, u ? (g.hasOwnProp(o, s) ? o[s] = [o[s], r] : o[s] = r, !a) : ((!o[s] || !g.isObject(o[s])) && (o[s] = []), n(t, r, o[s], i) && g.isArray(o[s]) && (o[s] = Mb(o[s])), !a);
  }
  if (g.isFormData(e) && g.isFunction(e.entries)) {
    const t = {};
    return g.forEachEntry(e, (r, o) => {
      n(Pb(r), o, t, 0);
    }), t;
  }
  return null;
}
const kb = {
  "Content-Type": void 0
};
function xb(e, n, t) {
  if (g.isString(e))
    try {
      return (n || JSON.parse)(e), g.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (t || JSON.stringify)(e);
}
const Os = {
  transitional: _h,
  adapter: ["xhr", "http"],
  transformRequest: [function(n, t) {
    const r = t.getContentType() || "", o = r.indexOf("application/json") > -1, i = g.isObject(n);
    if (i && g.isHTMLForm(n) && (n = new FormData(n)), g.isFormData(n))
      return o && o ? JSON.stringify(lh(n)) : n;
    if (g.isArrayBuffer(n) || g.isBuffer(n) || g.isStream(n) || g.isFile(n) || g.isBlob(n))
      return n;
    if (g.isArrayBufferView(n))
      return n.buffer;
    if (g.isURLSearchParams(n))
      return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), n.toString();
    let a;
    if (i) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return wb(n, this.formSerializer).toString();
      if ((a = g.isFileList(n)) || r.indexOf("multipart/form-data") > -1) {
        const u = this.env && this.env.FormData;
        return Es(
          a ? { "files[]": n } : n,
          u && new u(),
          this.formSerializer
        );
      }
    }
    return i || o ? (t.setContentType("application/json", !1), xb(n)) : n;
  }],
  transformResponse: [function(n) {
    const t = this.transitional || Os.transitional, r = t && t.forcedJSONParsing, o = this.responseType === "json";
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
    FormData: Pn.classes.FormData,
    Blob: Pn.classes.Blob
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
  Os.headers[n] = {};
});
g.forEach(["post", "put", "patch"], function(n) {
  Os.headers[n] = g.merge(kb);
});
const yu = Os, Lb = g.toObjectSet([
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
]), Bb = (e) => {
  const n = {};
  let t, r, o;
  return e && e.split(`
`).forEach(function(s) {
    o = s.indexOf(":"), t = s.substring(0, o).trim().toLowerCase(), r = s.substring(o + 1).trim(), !(!t || n[t] && Lb[t]) && (t === "set-cookie" ? n[t] ? n[t].push(r) : n[t] = [r] : n[t] = n[t] ? n[t] + ", " + r : r);
  }), n;
}, cl = Symbol("internals");
function yr(e) {
  return e && String(e).trim().toLowerCase();
}
function Ti(e) {
  return e === !1 || e == null ? e : g.isArray(e) ? e.map(Ti) : String(e);
}
function jb(e) {
  const n = /* @__PURE__ */ Object.create(null), t = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = t.exec(e); )
    n[r[1]] = r[2];
  return n;
}
const Fb = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function ia(e, n, t, r, o) {
  if (g.isFunction(r))
    return r.call(this, n, t);
  if (o && (n = t), !!g.isString(n)) {
    if (g.isString(r))
      return n.indexOf(r) !== -1;
    if (g.isRegExp(r))
      return r.test(n);
  }
}
function Vb(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (n, t, r) => t.toUpperCase() + r);
}
function Wb(e, n) {
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
class bs {
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
      (!l || o[l] === void 0 || _ === !0 || _ === void 0 && o[l] !== !1) && (o[l || u] = Ti(a));
    }
    const s = (a, u) => g.forEach(a, (_, c) => i(_, c, u));
    return g.isPlainObject(n) || n instanceof this.constructor ? s(n, t) : g.isString(n) && (n = n.trim()) && !Fb(n) ? s(Bb(n), t) : n != null && i(t, n, r), this;
  }
  get(n, t) {
    if (n = yr(n), n) {
      const r = g.findKey(this, n);
      if (r) {
        const o = this[r];
        if (!t)
          return o;
        if (t === !0)
          return jb(o);
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
      return !!(r && this[r] !== void 0 && (!t || ia(this, this[r], r, t)));
    }
    return !1;
  }
  delete(n, t) {
    const r = this;
    let o = !1;
    function i(s) {
      if (s = yr(s), s) {
        const a = g.findKey(r, s);
        a && (!t || ia(r, r[a], a, t)) && (delete r[a], o = !0);
      }
    }
    return g.isArray(n) ? n.forEach(i) : i(n), o;
  }
  clear(n) {
    const t = Object.keys(this);
    let r = t.length, o = !1;
    for (; r--; ) {
      const i = t[r];
      (!n || ia(this, this[i], i, n, !0)) && (delete this[i], o = !0);
    }
    return o;
  }
  normalize(n) {
    const t = this, r = {};
    return g.forEach(this, (o, i) => {
      const s = g.findKey(r, i);
      if (s) {
        t[s] = Ti(o), delete t[i];
        return;
      }
      const a = n ? Vb(i) : String(i).trim();
      a !== i && delete t[i], t[a] = Ti(o), r[a] = !0;
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
    const r = (this[cl] = this[cl] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function i(s) {
      const a = yr(s);
      r[a] || (Wb(o, s), r[a] = !0);
    }
    return g.isArray(n) ? n.forEach(i) : i(n), this;
  }
}
bs.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
g.freezeMethods(bs.prototype);
g.freezeMethods(bs);
const nt = bs;
function sa(e, n) {
  const t = this || yu, r = n || t, o = nt.from(r.headers);
  let i = r.data;
  return g.forEach(e, function(a) {
    i = a.call(t, i, o.normalize(), n ? n.status : void 0);
  }), o.normalize(), i;
}
function ch(e) {
  return !!(e && e.__CANCEL__);
}
function Lo(e, n, t) {
  oe.call(this, e ?? "canceled", oe.ERR_CANCELED, n, t), this.name = "CanceledError";
}
g.inherits(Lo, oe, {
  __CANCEL__: !0
});
function Xb(e, n, t) {
  const r = t.config.validateStatus;
  !t.status || !r || r(t.status) ? e(t) : n(new oe(
    "Request failed with status code " + t.status,
    [oe.ERR_BAD_REQUEST, oe.ERR_BAD_RESPONSE][Math.floor(t.status / 100) - 4],
    t.config,
    t.request,
    t
  ));
}
const Kb = Pn.isStandardBrowserEnv ? (
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
function Yb(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function $b(e, n) {
  return n ? e.replace(/\/+$/, "") + "/" + n.replace(/^\/+/, "") : e;
}
function dh(e, n) {
  return e && !Yb(n) ? $b(e, n) : n;
}
const zb = Pn.isStandardBrowserEnv ? (
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
function Jb(e) {
  const n = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return n && n[1] || "";
}
function qb(e, n) {
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
function dl(e, n) {
  let t = 0;
  const r = qb(50, 250);
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
const Qb = typeof XMLHttpRequest < "u", Zb = Qb && function(e) {
  return new Promise(function(t, r) {
    let o = e.data;
    const i = nt.from(e.headers).normalize(), s = e.responseType;
    let a;
    function u() {
      e.cancelToken && e.cancelToken.unsubscribe(a), e.signal && e.signal.removeEventListener("abort", a);
    }
    g.isFormData(o) && (Pn.isStandardBrowserEnv || Pn.isStandardBrowserWebWorkerEnv ? i.setContentType(!1) : i.setContentType("multipart/form-data;", !1));
    let _ = new XMLHttpRequest();
    if (e.auth) {
      const T = e.auth.username || "", d = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      i.set("Authorization", "Basic " + btoa(T + ":" + d));
    }
    const c = dh(e.baseURL, e.url);
    _.open(e.method.toUpperCase(), uh(c, e.params, e.paramsSerializer), !0), _.timeout = e.timeout;
    function l() {
      if (!_)
        return;
      const T = nt.from(
        "getAllResponseHeaders" in _ && _.getAllResponseHeaders()
      ), h = {
        data: !s || s === "text" || s === "json" ? _.responseText : _.response,
        status: _.status,
        statusText: _.statusText,
        headers: T,
        config: e,
        request: _
      };
      Xb(function(b) {
        t(b), u();
      }, function(b) {
        r(b), u();
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
      const h = e.transitional || _h;
      e.timeoutErrorMessage && (d = e.timeoutErrorMessage), r(new oe(
        d,
        h.clarifyTimeoutError ? oe.ETIMEDOUT : oe.ECONNABORTED,
        e,
        _
      )), _ = null;
    }, Pn.isStandardBrowserEnv) {
      const T = (e.withCredentials || zb(c)) && e.xsrfCookieName && Kb.read(e.xsrfCookieName);
      T && i.set(e.xsrfHeaderName, T);
    }
    o === void 0 && i.setContentType(null), "setRequestHeader" in _ && g.forEach(i.toJSON(), function(d, h) {
      _.setRequestHeader(h, d);
    }), g.isUndefined(e.withCredentials) || (_.withCredentials = !!e.withCredentials), s && s !== "json" && (_.responseType = e.responseType), typeof e.onDownloadProgress == "function" && _.addEventListener("progress", dl(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && _.upload && _.upload.addEventListener("progress", dl(e.onUploadProgress)), (e.cancelToken || e.signal) && (a = (T) => {
      _ && (r(!T || T.type ? new Lo(null, e, _) : T), _.abort(), _ = null);
    }, e.cancelToken && e.cancelToken.subscribe(a), e.signal && (e.signal.aborted ? a() : e.signal.addEventListener("abort", a)));
    const f = Jb(c);
    if (f && Pn.protocols.indexOf(f) === -1) {
      r(new oe("Unsupported protocol " + f + ":", oe.ERR_BAD_REQUEST, e));
      return;
    }
    _.send(o || null);
  });
}, Ei = {
  http: Ib,
  xhr: Zb
};
g.forEach(Ei, (e, n) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: n });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: n });
  }
});
const eR = {
  getAdapter: (e) => {
    e = g.isArray(e) ? e : [e];
    const { length: n } = e;
    let t, r;
    for (let o = 0; o < n && (t = e[o], !(r = g.isString(t) ? Ei[t.toLowerCase()] : t)); o++)
      ;
    if (!r)
      throw r === !1 ? new oe(
        `Adapter ${t} is not supported by the environment`,
        "ERR_NOT_SUPPORT"
      ) : new Error(
        g.hasOwnProp(Ei, t) ? `Adapter '${t}' is not available in the build` : `Unknown adapter '${t}'`
      );
    if (!g.isFunction(r))
      throw new TypeError("adapter is not a function");
    return r;
  },
  adapters: Ei
};
function aa(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Lo(null, e);
}
function hl(e) {
  return aa(e), e.headers = nt.from(e.headers), e.data = sa.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), eR.getAdapter(e.adapter || yu.adapter)(e).then(function(r) {
    return aa(e), r.data = sa.call(
      e,
      e.transformResponse,
      r
    ), r.headers = nt.from(r.headers), r;
  }, function(r) {
    return ch(r) || (aa(e), r && r.response && (r.response.data = sa.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = nt.from(r.response.headers))), Promise.reject(r);
  });
}
const ml = (e) => e instanceof nt ? e.toJSON() : e;
function fr(e, n) {
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
    headers: (_, c) => o(ml(_), ml(c), !0)
  };
  return g.forEach(Object.keys(Object.assign({}, e, n)), function(c) {
    const l = u[c] || o, f = l(e[c], n[c], c);
    g.isUndefined(f) && l !== a || (t[c] = f);
  }), t;
}
const hh = "1.4.0", Uu = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, n) => {
  Uu[e] = function(r) {
    return typeof r === e || "a" + (n < 1 ? "n " : " ") + e;
  };
});
const fl = {};
Uu.transitional = function(n, t, r) {
  function o(i, s) {
    return "[Axios v" + hh + "] Transitional option '" + i + "'" + s + (r ? ". " + r : "");
  }
  return (i, s, a) => {
    if (n === !1)
      throw new oe(
        o(s, " has been removed" + (t ? " in " + t : "")),
        oe.ERR_DEPRECATED
      );
    return t && !fl[s] && (fl[s] = !0, console.warn(
      o(
        s,
        " has been deprecated since v" + t + " and will be removed in the near future"
      )
    )), n ? n(i, s, a) : !0;
  };
};
function nR(e, n, t) {
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
const La = {
  assertOptions: nR,
  validators: Uu
}, dt = La.validators;
class Wi {
  constructor(n) {
    this.defaults = n, this.interceptors = {
      request: new ll(),
      response: new ll()
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
    typeof n == "string" ? (t = t || {}, t.url = n) : t = n || {}, t = fr(this.defaults, t);
    const { transitional: r, paramsSerializer: o, headers: i } = t;
    r !== void 0 && La.assertOptions(r, {
      silentJSONParsing: dt.transitional(dt.boolean),
      forcedJSONParsing: dt.transitional(dt.boolean),
      clarifyTimeoutError: dt.transitional(dt.boolean)
    }, !1), o != null && (g.isFunction(o) ? t.paramsSerializer = {
      serialize: o
    } : La.assertOptions(o, {
      encode: dt.function,
      serialize: dt.function
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
    ), t.headers = nt.concat(s, i);
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
      const d = [hl.bind(this), void 0];
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
      c = hl.call(this, T);
    } catch (d) {
      return Promise.reject(d);
    }
    for (l = 0, f = _.length; l < f; )
      c = c.then(_[l++], _[l++]);
    return c;
  }
  getUri(n) {
    n = fr(this.defaults, n);
    const t = dh(n.baseURL, n.url);
    return uh(t, n.params, n.paramsSerializer);
  }
}
g.forEach(["delete", "get", "head", "options"], function(n) {
  Wi.prototype[n] = function(t, r) {
    return this.request(fr(r || {}, {
      method: n,
      url: t,
      data: (r || {}).data
    }));
  };
});
g.forEach(["post", "put", "patch"], function(n) {
  function t(r) {
    return function(i, s, a) {
      return this.request(fr(a || {}, {
        method: n,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: s
      }));
    };
  }
  Wi.prototype[n] = t(), Wi.prototype[n + "Form"] = t(!0);
});
const Oi = Wi;
class Hu {
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
      r.reason || (r.reason = new Lo(i, s, a), t(r.reason));
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
      token: new Hu(function(o) {
        n = o;
      }),
      cancel: n
    };
  }
}
const tR = Hu;
function rR(e) {
  return function(t) {
    return e.apply(null, t);
  };
}
function oR(e) {
  return g.isObject(e) && e.isAxiosError === !0;
}
const Ba = {
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
Object.entries(Ba).forEach(([e, n]) => {
  Ba[n] = e;
});
const iR = Ba;
function mh(e) {
  const n = new Oi(e), t = Jd(Oi.prototype.request, n);
  return g.extend(t, Oi.prototype, n, { allOwnKeys: !0 }), g.extend(t, n, null, { allOwnKeys: !0 }), t.create = function(o) {
    return mh(fr(e, o));
  }, t;
}
const He = mh(yu);
He.Axios = Oi;
He.CanceledError = Lo;
He.CancelToken = tR;
He.isCancel = ch;
He.VERSION = hh;
He.toFormData = Es;
He.AxiosError = oe;
He.Cancel = He.CanceledError;
He.all = function(n) {
  return Promise.all(n);
};
He.spread = rR;
He.isAxiosError = oR;
He.mergeConfig = fr;
He.AxiosHeaders = nt;
He.formToJSON = (e) => lh(g.isHTMLForm(e) ? new FormData(e) : e);
He.HttpStatusCode = iR;
He.default = He;
const sR = He, aR = { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_a284b574-e103-4a2d-9964-13cb2d46b6b4", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "npm/8.19.4 node/v16.20.1 linux x64 workspaces/false ci/github-actions", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_a284b574-e103-4a2d-9964-13cb2d46b6b4", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", npm_config_noproxy: "", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-8.2.1", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "", npm_config_userconfig: "/home/runner/.npmrc", npm_config_local_prefix: "/home/runner/work/CodeGear/CodeGear", SYSTEMD_EXEC_PID: "662", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", COLOR: "0", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.6/x64", NVM_DIR: "/home/runner/.nvm", npm_config_metrics_registry: "https://registry.npmjs.org/", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230724.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", JOURNAL_STREAM: "8:16944", GITHUB_WORKFLOW: "CodeGear CI", _: "/opt/hostedtoolcache/node/16.20.1/x64/bin/npm", npm_config_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", GITHUB_RUN_ID: "5672897106", npm_config_cache: "/home/runner/.npm", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "00b85ce7976fbd5861cf062f85909e4a65fe8907", GITHUB_BASE_REF: "", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/heads/develop", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", npm_config_node_gyp: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.bin:/home/runner/work/CodeGear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_133ea27d-82fc-4209-aa9d-fc9dfdbce48f", INVOCATION_ID: "e83c49f3760a40579b5346890f911300", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.11/x64", NODE: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "23", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 3", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "develop", GITHUB_REPOSITORY: "Gearonix/CodeGear", npm_lifecycle_script: " nx run-many --targets=build --all", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", npm_package_version: "0.0.0", npm_lifecycle_event: "build", NODE_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/bin/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/node_modules", GITHUB_REF_PROTECTED: "false", npm_config_strict_peer_dependencies: "", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "00b85ce7976fbd5861cf062f85909e4a65fe8907", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/heads/develop", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", npm_config_globalconfig: "/opt/hostedtoolcache/node/16.20.1/x64/etc/npmrc", npm_config_init_module: "/home/runner/.npm-init.js", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_a284b574-e103-4a2d-9964-13cb2d46b6b4", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", npm_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/bin/npm-cli.js", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "push", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_a284b574-e103-4a2d-9964-13cb2d46b6b4", npm_config_global_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", npm_command: "run-script", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_a284b574-e103-4a2d-9964-13cb2d46b6b4", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", EDITOR: "vi", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/7269812733523924288", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "7269812733523924288", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.SERVER_URL ?? "http://localhost:6868", uR = {
  CODE_EXECUTOR_API: "execute"
}, _R = sR.create({
  baseURL: aR,
  withCredentials: !0
}), lR = {
  EDITOR_THEME: "EDITOR_THEME",
  EDITOR_CONTENT_DATA: "EDITOR_CONTENT_DATA",
  EDITOR_EXECUTE_MESSAGES: "EDITOR_EXECUTE_MESSAGES",
  EDITOR_FONT_SIZE: "EDITOR_FONT_SIZE",
  EDITOR_TAB_SIZE: "EDITOR_TAB_SIZE",
  EDITOR_CUSTOM_BACKGROUND: "EDITOR_CUSTOM_BACKGROUND",
  EDITOR_CUSTOM_COLOR: "EDITOR_CUSTOM_COLOR",
  EDITOR_HTML_PREVIEW: "EDITOR_HTML_PREVIEW"
}, fh = {
  MAIN: "/",
  EDITOR: "/edit",
  ABOUT: "/about"
}, ph = () => {
  const [e, n] = We([]);
  return {
    on: (t) => {
      Object.entries(t).forEach(([r, o]) => {
        const i = (s) => {
          if (s.altKey && s.key === r.toLowerCase())
            return s.preventDefault(), o(), !1;
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
}, Th = (e = !1) => {
  const [n, t] = We(e);
  return {
    off: () => t(!1),
    on: () => t(!0),
    toggle: () => t(!n),
    val: n
  };
}, wu = (e, n) => {
  const t = ee();
  return (...r) => {
    t.current && clearTimeout(t.current), t.current = setTimeout(() => {
      e(...r);
    }, n);
  };
}, cR = () => () => {
  if (!document.fullscreenElement)
    return document.documentElement.requestFullscreen();
  document.exitFullscreen && document.exitFullscreen();
};
var Pu, V, Eh, wt, pl, Oh, ja, bi = {}, bh = [], dR = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Rs = Array.isArray;
function Tt(e, n) {
  for (var t in n)
    e[t] = n[t];
  return e;
}
function Rh(e) {
  var n = e.parentNode;
  n && n.removeChild(e);
}
function Tl(e, n, t) {
  var r, o, i, s = {};
  for (i in n)
    i == "key" ? r = n[i] : i == "ref" ? o = n[i] : s[i] = n[i];
  if (arguments.length > 2 && (s.children = arguments.length > 3 ? Pu.call(arguments, 2) : t), typeof e == "function" && e.defaultProps != null)
    for (i in e.defaultProps)
      s[i] === void 0 && (s[i] = e.defaultProps[i]);
  return Ri(e, s, r, o, null);
}
function Ri(e, n, t, r, o) {
  var i = { type: e, props: n, key: t, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: o ?? ++Eh };
  return o == null && V.vnode != null && V.vnode(i), i;
}
function so(e) {
  return e.children;
}
function tt(e, n) {
  this.props = e, this.context = n;
}
function Xi(e, n) {
  if (n == null)
    return e.__ ? Xi(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var t; n < e.__k.length; n++)
    if ((t = e.__k[n]) != null && t.__e != null)
      return t.__e;
  return typeof e.type == "function" ? Xi(e) : null;
}
function gh(e) {
  var n, t;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, n = 0; n < e.__k.length; n++)
      if ((t = e.__k[n]) != null && t.__e != null) {
        e.__e = e.__c.base = t.__e;
        break;
      }
    return gh(e);
  }
}
function El(e) {
  (!e.__d && (e.__d = !0) && wt.push(e) && !Ki.__r++ || pl !== V.debounceRendering) && ((pl = V.debounceRendering) || Oh)(Ki);
}
function Ki() {
  var e, n, t, r, o, i, s, a, u;
  for (wt.sort(ja); e = wt.shift(); )
    e.__d && (n = wt.length, r = void 0, o = void 0, i = void 0, a = (s = (t = e).__v).__e, (u = t.__P) && (r = [], o = [], (i = Tt({}, s)).__v = s.__v + 1, Sh(u, s, i, t.__n, u.ownerSVGElement !== void 0, s.__h != null ? [a] : null, r, a ?? Xi(s), s.__h, o), fR(r, s, o), s.__e != a && gh(s)), wt.length > n && wt.sort(ja));
  Ki.__r = 0;
}
function Nh(e, n, t, r, o, i, s, a, u, _, c) {
  var l, f, T, d, h, m, b, R, N, A, p = 0, w = r && r.__k || bh, k = w.length, Y = k, M = n.length;
  for (t.__k = [], l = 0; l < M; l++)
    (d = t.__k[l] = (d = n[l]) == null || typeof d == "boolean" || typeof d == "function" ? null : typeof d == "string" || typeof d == "number" || typeof d == "bigint" ? Ri(null, d, null, null, d) : Rs(d) ? Ri(so, { children: d }, null, null, null) : d.__b > 0 ? Ri(d.type, d.props, d.key, d.ref ? d.ref : null, d.__v) : d) != null && (d.__ = t, d.__b = t.__b + 1, (R = hR(d, w, b = l + p, Y)) === -1 ? T = bi : (T = w[R] || bi, w[R] = void 0, Y--), Sh(e, d, T, o, i, s, a, u, _, c), h = d.__e, (f = d.ref) && T.ref != f && (T.ref && Mu(T.ref, null, d), c.push(f, d.__c || h, d)), h != null && (m == null && (m = h), A = !(N = T === bi || T.__v === null) && R === b, N ? R == -1 && p-- : R !== b && (R === b + 1 ? (p++, A = !0) : R > b ? Y > M - b ? (p += R - b, A = !0) : p-- : p = R < b && R == b - 1 ? R - b : 0), b = l + p, A = A || R == l && !N, typeof d.type != "function" || R === b && T.__k !== d.__k ? typeof d.type == "function" || A ? d.__d !== void 0 ? (u = d.__d, d.__d = void 0) : u = h.nextSibling : u = Ah(e, h, u) : u = Ih(d, u, e), typeof t.type == "function" && (t.__d = u)));
  for (t.__e = m, l = k; l--; )
    w[l] != null && (typeof t.type == "function" && w[l].__e != null && w[l].__e == t.__d && (t.__d = w[l].__e.nextSibling), vh(w[l], w[l]));
}
function Ih(e, n, t) {
  for (var r, o = e.__k, i = 0; o && i < o.length; i++)
    (r = o[i]) && (r.__ = e, n = typeof r.type == "function" ? Ih(r, n, t) : Ah(t, r.__e, n));
  return n;
}
function Yi(e, n) {
  return n = n || [], e == null || typeof e == "boolean" || (Rs(e) ? e.some(function(t) {
    Yi(t, n);
  }) : n.push(e)), n;
}
function Ah(e, n, t) {
  return t == null || t.parentNode !== e ? e.insertBefore(n, null) : n == t && n.parentNode != null || e.insertBefore(n, t), n.nextSibling;
}
function hR(e, n, t, r) {
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
function mR(e, n, t, r, o) {
  var i;
  for (i in t)
    i === "children" || i === "key" || i in n || $i(e, i, null, t[i], r);
  for (i in n)
    o && typeof n[i] != "function" || i === "children" || i === "key" || i === "value" || i === "checked" || t[i] === n[i] || $i(e, i, n[i], t[i], r);
}
function Ol(e, n, t) {
  n[0] === "-" ? e.setProperty(n, t ?? "") : e[n] = t == null ? "" : typeof t != "number" || dR.test(n) ? t : t + "px";
}
function $i(e, n, t, r, o) {
  var i;
  e:
    if (n === "style")
      if (typeof t == "string")
        e.style.cssText = t;
      else {
        if (typeof r == "string" && (e.style.cssText = r = ""), r)
          for (n in r)
            t && n in t || Ol(e.style, n, "");
        if (t)
          for (n in t)
            r && t[n] === r[n] || Ol(e.style, n, t[n]);
      }
    else if (n[0] === "o" && n[1] === "n")
      i = n !== (n = n.replace(/Capture$/, "")), n = n.toLowerCase() in e ? n.toLowerCase().slice(2) : n.slice(2), e.l || (e.l = {}), e.l[n + i] = t, t ? r || e.addEventListener(n, i ? Rl : bl, i) : e.removeEventListener(n, i ? Rl : bl, i);
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
function bl(e) {
  return this.l[e.type + !1](V.event ? V.event(e) : e);
}
function Rl(e) {
  return this.l[e.type + !0](V.event ? V.event(e) : e);
}
function Sh(e, n, t, r, o, i, s, a, u, _) {
  var c, l, f, T, d, h, m, b, R, N, A, p, w, k, Y, M = n.type;
  if (n.constructor !== void 0)
    return null;
  t.__h != null && (u = t.__h, a = n.__e = t.__e, n.__h = null, i = [a]), (c = V.__b) && c(n);
  try {
    e:
      if (typeof M == "function") {
        if (b = n.props, R = (c = M.contextType) && r[c.__c], N = c ? R ? R.props.value : c.__ : r, t.__c ? m = (l = n.__c = t.__c).__ = l.__E : ("prototype" in M && M.prototype.render ? n.__c = l = new M(b, N) : (n.__c = l = new tt(b, N), l.constructor = M, l.render = TR), R && R.sub(l), l.props = b, l.state || (l.state = {}), l.context = N, l.__n = r, f = l.__d = !0, l.__h = [], l._sb = []), l.__s == null && (l.__s = l.state), M.getDerivedStateFromProps != null && (l.__s == l.state && (l.__s = Tt({}, l.__s)), Tt(l.__s, M.getDerivedStateFromProps(b, l.__s))), T = l.props, d = l.state, l.__v = n, f)
          M.getDerivedStateFromProps == null && l.componentWillMount != null && l.componentWillMount(), l.componentDidMount != null && l.__h.push(l.componentDidMount);
        else {
          if (M.getDerivedStateFromProps == null && b !== T && l.componentWillReceiveProps != null && l.componentWillReceiveProps(b, N), !l.__e && (l.shouldComponentUpdate != null && l.shouldComponentUpdate(b, l.__s, N) === !1 || n.__v === t.__v)) {
            for (n.__v !== t.__v && (l.props = b, l.state = l.__s, l.__d = !1), n.__e = t.__e, n.__k = t.__k, n.__k.forEach(function(j) {
              j && (j.__ = n);
            }), A = 0; A < l._sb.length; A++)
              l.__h.push(l._sb[A]);
            l._sb = [], l.__h.length && s.push(l);
            break e;
          }
          l.componentWillUpdate != null && l.componentWillUpdate(b, l.__s, N), l.componentDidUpdate != null && l.__h.push(function() {
            l.componentDidUpdate(T, d, h);
          });
        }
        if (l.context = N, l.props = b, l.__P = e, l.__e = !1, p = V.__r, w = 0, "prototype" in M && M.prototype.render) {
          for (l.state = l.__s, l.__d = !1, p && p(n), c = l.render(l.props, l.state, l.context), k = 0; k < l._sb.length; k++)
            l.__h.push(l._sb[k]);
          l._sb = [];
        } else
          do
            l.__d = !1, p && p(n), c = l.render(l.props, l.state, l.context), l.state = l.__s;
          while (l.__d && ++w < 25);
        l.state = l.__s, l.getChildContext != null && (r = Tt(Tt({}, r), l.getChildContext())), f || l.getSnapshotBeforeUpdate == null || (h = l.getSnapshotBeforeUpdate(T, d)), Nh(e, Rs(Y = c != null && c.type === so && c.key == null ? c.props.children : c) ? Y : [Y], n, t, r, o, i, s, a, u, _), l.base = n.__e, n.__h = null, l.__h.length && s.push(l), m && (l.__E = l.__ = null);
      } else
        i == null && n.__v === t.__v ? (n.__k = t.__k, n.__e = t.__e) : n.__e = pR(t.__e, n, t, r, o, i, s, u, _);
    (c = V.diffed) && c(n);
  } catch (j) {
    n.__v = null, (u || i != null) && (n.__e = a, n.__h = !!u, i[i.indexOf(a)] = null), V.__e(j, n, t);
  }
}
function fR(e, n, t) {
  for (var r = 0; r < t.length; r++)
    Mu(t[r], t[++r], t[++r]);
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
function pR(e, n, t, r, o, i, s, a, u) {
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
    if (i = i && Pu.call(e.childNodes), c = (f = t.props || bi).dangerouslySetInnerHTML, l = T.dangerouslySetInnerHTML, !a) {
      if (i != null)
        for (f = {}, h = 0; h < e.attributes.length; h++)
          f[e.attributes[h].name] = e.attributes[h].value;
      (l || c) && (l && (c && l.__html == c.__html || l.__html === e.innerHTML) || (e.innerHTML = l && l.__html || ""));
    }
    if (mR(e, T, f, o, a), l)
      n.__k = [];
    else if (Nh(e, Rs(h = n.props.children) ? h : [h], n, t, r, o && d !== "foreignObject", i, s, i ? i[0] : t.__k && Xi(t, 0), a, u), i != null)
      for (h = i.length; h--; )
        i[h] != null && Rh(i[h]);
    a || ("value" in T && (h = T.value) !== void 0 && (h !== e.value || d === "progress" && !h || d === "option" && h !== f.value) && $i(e, "value", h, f.value, !1), "checked" in T && (h = T.checked) !== void 0 && h !== e.checked && $i(e, "checked", h, f.checked, !1));
  }
  return e;
}
function Mu(e, n, t) {
  try {
    typeof e == "function" ? e(n) : e.current = n;
  } catch (r) {
    V.__e(r, t);
  }
}
function vh(e, n, t) {
  var r, o;
  if (V.unmount && V.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || Mu(r, null, n)), (r = e.__c) != null) {
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
      r[o] && vh(r[o], n, t || typeof e.type != "function");
  t || e.__e == null || Rh(e.__e), e.__ = e.__e = e.__d = void 0;
}
function TR(e, n, t) {
  return this.constructor(e, t);
}
Pu = bh.slice, V = { __e: function(e, n, t, r) {
  for (var o, i, s; n = n.__; )
    if ((o = n.__c) && !o.__)
      try {
        if ((i = o.constructor) && i.getDerivedStateFromError != null && (o.setState(i.getDerivedStateFromError(e)), s = o.__d), o.componentDidCatch != null && (o.componentDidCatch(e, r || {}), s = o.__d), s)
          return o.__E = o;
      } catch (a) {
        e = a;
      }
  throw e;
} }, Eh = 0, tt.prototype.setState = function(e, n) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Tt({}, this.state), typeof e == "function" && (e = e(Tt({}, t), this.props)), e && Tt(t, e), e != null && this.__v && (n && this._sb.push(n), El(this));
}, tt.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), El(this));
}, tt.prototype.render = so, wt = [], Oh = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, ja = function(e, n) {
  return e.__v.__b - n.__v.__b;
}, Ki.__r = 0;
var ao, Se, ua, gl, Fa = 0, Gh = [], gi = [], Nl = V.__b, Il = V.__r, Al = V.diffed, Sl = V.__c, vl = V.unmount;
function ku(e, n) {
  V.__h && V.__h(Se, e, Fa || n), Fa = 0;
  var t = Se.__H || (Se.__H = { __: [], __h: [] });
  return e >= t.__.length && t.__.push({ __V: gi }), t.__[e];
}
function ER(e) {
  return Fa = 1, OR(Ch, e);
}
function OR(e, n, t) {
  var r = ku(ao++, 2);
  if (r.t = e, !r.__c && (r.__ = [t ? t(n) : Ch(void 0, n), function(a) {
    var u = r.__N ? r.__N[0] : r.__[0], _ = r.t(u, a);
    u !== _ && (r.__N = [_, r.__[1]], r.__c.setState({}));
  }], r.__c = Se, !Se.u)) {
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
    Se.u = !0;
    var i = Se.shouldComponentUpdate, s = Se.componentWillUpdate;
    Se.componentWillUpdate = function(a, u, _) {
      if (this.__e) {
        var c = i;
        i = void 0, o(a, u, _), i = c;
      }
      s && s.call(this, a, u, _);
    }, Se.shouldComponentUpdate = o;
  }
  return r.__N || r.__;
}
function bR(e, n) {
  var t = ku(ao++, 3);
  !V.__s && IR(t.__H, n) && (t.__ = e, t.i = n, Se.__H.__h.push(t));
}
function RR(e) {
  var n = ku(ao++, 10), t = ER();
  return n.__ = e, Se.componentDidCatch || (Se.componentDidCatch = function(r, o) {
    n.__ && n.__(r, o), t[1](r);
  }), [t[0], function() {
    t[1](void 0);
  }];
}
function gR() {
  for (var e; e = Gh.shift(); )
    if (e.__P && e.__H)
      try {
        e.__H.__h.forEach(Ni), e.__H.__h.forEach(Va), e.__H.__h = [];
      } catch (n) {
        e.__H.__h = [], V.__e(n, e.__v);
      }
}
V.__b = function(e) {
  Se = null, Nl && Nl(e);
}, V.__r = function(e) {
  Il && Il(e), ao = 0;
  var n = (Se = e.__c).__H;
  n && (ua === Se ? (n.__h = [], Se.__h = [], n.__.forEach(function(t) {
    t.__N && (t.__ = t.__N), t.__V = gi, t.__N = t.i = void 0;
  })) : (n.__h.forEach(Ni), n.__h.forEach(Va), n.__h = [], ao = 0)), ua = Se;
}, V.diffed = function(e) {
  Al && Al(e);
  var n = e.__c;
  n && n.__H && (n.__H.__h.length && (Gh.push(n) !== 1 && gl === V.requestAnimationFrame || ((gl = V.requestAnimationFrame) || NR)(gR)), n.__H.__.forEach(function(t) {
    t.i && (t.__H = t.i), t.__V !== gi && (t.__ = t.__V), t.i = void 0, t.__V = gi;
  })), ua = Se = null;
}, V.__c = function(e, n) {
  n.some(function(t) {
    try {
      t.__h.forEach(Ni), t.__h = t.__h.filter(function(r) {
        return !r.__ || Va(r);
      });
    } catch (r) {
      n.some(function(o) {
        o.__h && (o.__h = []);
      }), n = [], V.__e(r, t.__v);
    }
  }), Sl && Sl(e, n);
}, V.unmount = function(e) {
  vl && vl(e);
  var n, t = e.__c;
  t && t.__H && (t.__H.__.forEach(function(r) {
    try {
      Ni(r);
    } catch (o) {
      n = o;
    }
  }), t.__H = void 0, n && V.__e(n, t.__v));
};
var Gl = typeof requestAnimationFrame == "function";
function NR(e) {
  var n, t = function() {
    clearTimeout(r), Gl && cancelAnimationFrame(n), setTimeout(e);
  }, r = setTimeout(t, 100);
  Gl && (n = requestAnimationFrame(t));
}
function Ni(e) {
  var n = Se, t = e.__c;
  typeof t == "function" && (e.__c = void 0, t()), Se = n;
}
function Va(e) {
  var n = Se;
  e.__c = e.__(), Se = n;
}
function IR(e, n) {
  return !e || e.length !== n.length || n.some(function(t, r) {
    return t !== e[r];
  });
}
function Ch(e, n) {
  return typeof n == "function" ? n(e) : n;
}
const AR = () => /* @__PURE__ */ z("div", { children: [
  "Custom Error Boundary. ",
  /* @__PURE__ */ E("br", {})
] }), SR = ({ children: e }) => {
  const [n] = RR();
  return console.error(n), n ? /* @__PURE__ */ E(AR, { errorInfo: n }) : /* @__PURE__ */ E(Er, { children: e });
}, Dh = Ro(
  {}
), vR = ({ children: e }) => {
  const [n, t] = Sf.useMessage(), r = ({ type: o, message: i }) => {
    n.open({
      type: o ?? "info",
      content: i,
      duration: 5
    });
  };
  return /* @__PURE__ */ z(Er, { children: [
    t,
    /* @__PURE__ */ E(Dh.Provider, { value: { open: r }, children: e })
  ] });
}, uo = ({ when: e, children: n }) => e ? n : null, GR = ({ children: e }) => /* @__PURE__ */ E(SR, { children: e }), yh = Ro({}), CR = async () => Promise.all([
  Promise.resolve().then(() => QS),
  import("./use-gesture-react.esm-7899cdd1.mjs")
]), Bo = ({ children: e }) => {
  const n = ee(), t = ee(), r = Th(), o = async () => {
    const [s, a] = await CR();
    n.current = s, t.current = a, r.on();
  };
  Ne(() => {
    o();
  }, []);
  const i = Jn(
    () => ({
      Spring: n.current,
      Gesture: t.current,
      isLoaded: r.val
    }),
    [r.val]
  );
  return /* @__PURE__ */ E(yh.Provider, { value: i, children: /* @__PURE__ */ E(uo, { when: r.val, children: e }) });
}, gr = () => Je(yh), DR = () => Je(Dh), yR = () => {
  Ne(() => (document.body.style.overflow = "hidden", () => {
    document.body.style.overflow = "auto";
  }));
}, Wa = (e) => typeof e == "object" && e !== null, xu = (e) => typeof e == "string", UR = (e) => typeof e == "function";
class Uh {
  constructor(n) {
    this.isDisabled = !1, this.isDisabled = n ?? this.isDisabled;
  }
  get(n, t) {
    if (this.isDisabled)
      return t;
    const r = localStorage.getItem(n);
    return r ? HR(r) ? JSON.parse(r) : r : t;
  }
  set(n, t) {
    if (!(this.isDisabled || !(n in lR))) {
      if (xu(t))
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
const HR = (e) => {
  try {
    JSON.parse(e);
  } catch {
    return !1;
  }
  return !0;
}, wR = ({ children: e, override: n, ...t }) => /* @__PURE__ */ E(vf, { theme: {
  token: { colorPrimary: n }
}, children: /* @__PURE__ */ E(Lr, { ...t, children: e }) });
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
function PR() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function MR() {
  let [, e] = We(/* @__PURE__ */ Object.create(null));
  return Ln(() => {
    e(/* @__PURE__ */ Object.create(null));
  }, []);
}
var kR = PR() ? Ec : Ne, xR = ({
  children: e,
  type: n = "reach-portal",
  containerRef: t
}) => {
  let r = sn.useRef(null), o = sn.useRef(null), i = MR();
  return sn.useEffect(() => {
    t != null && (typeof t != "object" || !("current" in t) ? console.warn("@reach/portal: Invalid value passed to the `containerRef` of a `Portal`. The portal will be appended to the document body, but if you want to attach it to another DOM node you must pass a valid React ref object to `containerRef`.") : t.current == null && console.warn("@reach/portal: A ref was passed to the `containerRef` prop of a `Portal`, but no DOM node was attached to it. Be sure to pass the ref to a DOM component.\n\nIf you are forwarding the ref from another component, be sure to use the React.forwardRef API. See https://reactjs.org/docs/forwarding-refs.html."));
  }, [t]), kR(() => {
    if (!r.current)
      return;
    let s = r.current.ownerDocument, a = t?.current || s.body;
    return o.current = s?.createElement(n), a.appendChild(o.current), i(), () => {
      o.current && a && a.removeChild(o.current);
    };
  }, [n, i, t]), o.current ? Af(e, o.current) : /* @__PURE__ */ sn.createElement("span", {
    ref: r
  });
}, Hh = ({
  unstable_skipInitialRender: e,
  ...n
}) => {
  let [t, r] = sn.useState(!1);
  return sn.useEffect(() => {
    e && r(!0);
  }, [e]), e && !t ? null : /* @__PURE__ */ sn.createElement(xR, {
    ...n
  });
};
Hh.displayName = "Portal";
const LR = () => ({
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
}), BR = _e.div`
  ${yt("center", "center")};
  ${$d({
  left: "0",
  top: "0"
})}
  ${ye("100vw", "100vh")};
  background: rgba(0, 0, 0, 0.44);
  z-index: 100;
`, jR = _e.div`
  display: grid;
  position: relative;
  ${ye("50vw", "60vh")};
  background: ${Me("grey")};
  border: 2px solid ${Me("lightGrey")};
  min-height: 300px;
  border-radius: 6px;
  cursor: grab;
  ${jO};
  touch-action: none;
  overflow-y: auto;
  scroll-behavior: smooth;
  ${ms()};
`, FR = _e.div`
  margin: 0 auto;
  margin-top: 18px;
  ${ye("60%", "100%")}
  & > * {
    cursor: initial;
    color: ${Me("light")};
  }
`, VR = ({ onClose: e, isOpen: n, children: t }) => {
  const { Spring: r, Gesture: o } = gr(), { opacity: i, transform: s } = LR(), a = r.useTransition(n, {
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
    ({ offset: [m, b], down: R }) => {
      c.start({
        y: R ? b : 0,
        immediate: !1,
        x: R ? m : 0,
        scale: R ? 1.07 : 1
      });
    },
    { from: () => [0, 0], filterTaps: !0, rubberband: !0, delay: 200 }
  ), h = (m) => {
    m.stopPropagation();
  };
  return /* @__PURE__ */ E(Er, { children: a((m, b) => /* @__PURE__ */ E(uo, { when: b, children: /* @__PURE__ */ E(Hh, { children: /* @__PURE__ */ E(BR, { style: m, onClick: e, as: r.a.div, children: /* @__PURE__ */ E(
    jR,
    {
      style: { ...u, x: f, y: l, scale: T },
      ...d(),
      onClick: h,
      as: r.a.div,
      children: /* @__PURE__ */ E(
        yf,
        {
          damping: 0.05,
          syncCallbacks: !0,
          alwaysShowTracks: !0,
          children: /* @__PURE__ */ E(FR, { children: t })
        }
      )
    }
  ) }) }) })) });
}, WR = (e) => /* @__PURE__ */ E(Bo, { children: /* @__PURE__ */ E(VR, { ...e }) }), XR = (e, n) => {
  const { Spring: t, Gesture: r } = gr(), [{ y: o }, i] = t.useSpring(() => ({ y: n })), s = () => {
    i.start({ y: 0, immediate: !1, config: t.config.gentle });
  }, a = (l = 0) => {
    e(), i.start({
      y: n,
      immediate: !1,
      config: { ...t.config.stiff, velocity: l }
    });
  }, u = r.useDrag(
    ({ last: l, velocity: [, f], direction: [, T], offset: [, d], cancel: h }) => {
      d < -70 && h(), l ? d > n * 0.5 || f > 0.5 && T === 1 ? a(f) : s() : i.start({ y: d, immediate: T === -1 });
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
}, KR = _e.div`
  padding-left: 15px;
  z-index: 15;
  position: fixed;
  right: 0;
  height: calc(100vh + 100px);
  width: calc(100% - 54px);
  border-radius: 6px 6px 0;
  background: ${Me("darkBlue")};
  border-top: 2px solid ${Me("lightGrey")};
  touch-action: none;
  bottom: ${({ $bottom: e }) => `calc(-100vh + ${e - 100}px)`};
  overflow-y: auto;
  box-sizing: border-box;
  scroll-behavior: smooth;
  ${ms()};
`, YR = ({ children: e, onClose: n, isOpen: t, height: r }) => {
  const o = XR(n, r);
  return Ne(() => {
    o.toggle(t);
  }, [t]), /* @__PURE__ */ E(
    KR,
    {
      $bottom: r,
      ...o.bind(),
      style: o.springs,
      as: o.div,
      children: e
    }
  );
}, wh = (e) => /* @__PURE__ */ E(Bo, { children: /* @__PURE__ */ E(YR, { ...e }) }), _a = an(({ lang: e }) => {
  const { theme: n, fontSize: t, tabSize: r } = Tn(), o = Ac();
  return /* @__PURE__ */ z(VO, { children: [
    /* @__PURE__ */ E(zd, { children: e }),
    /* @__PURE__ */ E(
      wd,
      {
        theme: n,
        onChange: (s) => {
          xu(s) && o.update({
            [e]: s
          });
        },
        language: e,
        height: "300px",
        value: o.state[e],
        options: vd({
          fontSize: t,
          tabSize: r
        })
      }
    )
  ] });
}), $R = ({ html: e, css: n, javascript: t }) => `
        <html>
          <body>${e}</body>
          <style>${n}</style>
          <script>${t}<\/script>
          <style>
            body {
            color: #C4CBDA;
            font-size: 20px;
            padding-left: 10px;
            }
           </style>
        </html>
`;
var Ph = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, Cl = Ge.createContext && Ge.createContext(Ph), At = globalThis && globalThis.__assign || function() {
  return At = Object.assign || function(e) {
    for (var n, t = 1, r = arguments.length; t < r; t++) {
      n = arguments[t];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
    }
    return e;
  }, At.apply(this, arguments);
}, zR = globalThis && globalThis.__rest || function(e, n) {
  var t = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (t[r[o]] = e[r[o]]);
  return t;
};
function Mh(e) {
  return e && e.map(function(n, t) {
    return Ge.createElement(n.tag, At({
      key: t
    }, n.attr), Mh(n.child));
  });
}
function Dn(e) {
  return function(n) {
    return Ge.createElement(JR, At({
      attr: At({}, e.attr)
    }, n), Mh(e.child));
  };
}
function JR(e) {
  var n = function(t) {
    var r = e.attr, o = e.size, i = e.title, s = zR(e, ["attr", "size", "title"]), a = o || t.size || "1em", u;
    return t.className && (u = t.className), e.className && (u = (u ? u + " " : "") + e.className), Ge.createElement("svg", At({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, t.attr, r, s, {
      className: u,
      style: At(At({
        color: e.color || t.color
      }, t.style), e.style),
      height: a,
      width: a,
      xmlns: "http://www.w3.org/2000/svg"
    }), i && Ge.createElement("title", null, i), e.children);
  };
  return Cl !== void 0 ? Ge.createElement(Cl.Consumer, null, function(t) {
    return n(t);
  }) : n(Ph);
}
function qR(e) {
  return Dn({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" } }] })(e);
}
function QR(e) {
  return Dn({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M145 96l66 746.6L511.8 928l299.6-85.4L878.7 96H145zm610.9 700.6l-244.1 69.6-245.2-69.6-56.7-641.2h603.8l-57.8 641.2zM281 249l1.7 24.3 22.7 253.5h206.5v-.1h112.9l-11.4 118.5L511 672.9v.2h-.8l-102.4-27.7-6.5-73.2h-91l11.3 144.7 188.6 52h1.7v-.4l187.7-51.7 1.7-16.3 21.2-242.2 3.2-24.3H511v.2H389.9l-8.2-94.2h352.1l1.7-19.5 4.8-47.2L742 249H511z" } }] })(e);
}
function ZR(e) {
  return Dn({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M847.9 592H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h605.2L612.9 851c-4.1 5.2-.4 13 6.3 13h72.5c4.9 0 9.5-2.2 12.6-6.1l168.8-214.1c16.5-21 1.6-51.8-25.2-51.8zM872 356H266.8l144.3-183c4.1-5.2.4-13-6.3-13h-72.5c-4.9 0-9.5 2.2-12.6 6.1L150.9 380.2c-16.5 21-1.6 51.8 25.1 51.8h696c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z" } }] })(e);
}
function e1(e) {
  return Dn({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { d: "M5 0h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2 2 2 0 0 1-2 2H3a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1H1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1H3a2 2 0 0 1 2-2z" } }, { tag: "path", attr: { d: "M1 6v-.5a.5.5 0 0 1 1 0V6h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V9h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 2.5v.5H.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H2v-.5a.5.5 0 0 0-1 0z" } }] })(e);
}
function n1(e) {
  return Dn({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { d: "M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" } }] })(e);
}
function t1(e) {
  return Dn({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M9.25 12a.75.75 0 0 1-.22.53l-2.75 2.75a.75.75 0 0 1-1.06-1.06L7.44 12 5.22 9.78a.75.75 0 1 1 1.06-1.06l2.75 2.75c.141.14.22.331.22.53Zm2 2a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5h-5Z" } }, { tag: "path", attr: { d: "M0 4.75C0 3.784.784 3 1.75 3h20.5c.966 0 1.75.784 1.75 1.75v14.5A1.75 1.75 0 0 1 22.25 21H1.75A1.75 1.75 0 0 1 0 19.25Zm1.75-.25a.25.25 0 0 0-.25.25v14.5c0 .138.112.25.25.25h20.5a.25.25 0 0 0 .25-.25V4.75a.25.25 0 0 0-.25-.25Z" } }] })(e);
}
function r1(e) {
  return Dn({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", stroke: "#000", strokeWidth: "2", d: "M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M5,5 L19,19" } }] })(e);
}
function o1(e) {
  return Dn({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01v0a2.83 2.83 0 0 1 0-4L17 3" } }, { tag: "path", attr: { d: "m16 2 6 6" } }, { tag: "path", attr: { d: "M12 16H4" } }] })(e);
}
function i1(e) {
  return Dn({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M576 736l-32-.001v-286c0-.336-.096-.656-.096-1.008s.096-.655.096-.991c0-17.664-14.336-32-32-32h-64c-17.664 0-32 14.336-32 32s14.336 32 32 32h32v256h-32c-17.664 0-32 14.336-32 32s14.336 32 32 32h128c17.664 0 32-14.336 32-32s-14.336-32-32-32zm-64-384.001c35.344 0 64-28.656 64-64s-28.656-64-64-64-64 28.656-64 64 28.656 64 64 64zm0-352c-282.768 0-512 229.232-512 512 0 282.784 229.232 512 512 512 282.784 0 512-229.216 512-512 0-282.768-229.216-512-512-512zm0 961.008c-247.024 0-448-201.984-448-449.01 0-247.024 200.976-448 448-448s448 200.977 448 448-200.976 449.01-448 449.01z" } }] })(e);
}
function s1(e) {
  return Dn({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M685.904 383.184l275.264-273.572-.896 155.072c-.289 12.928 9.967 24.176 22.912 23.888l16.416-.016c12.944-.304 23.648-8 23.92-20.928l.672-231.008c0-.223-.88-.399-.88-.623l1.264-11.712c.128-6.496-1.391-12.288-5.584-16.431-4.143-4.176-9.951-6.72-16.4-6.544l-11.696.272c-.223 0-.399.08-.64.113L760.77.687c-12.928.288-23.632 10.976-23.92 23.92l-.032 16.417c1.967 15.248 13.952 24.16 26.88 23.872l151.248.4L640.657 337.92c-12.496 12.496-12.496 32.752 0 45.264 12.496 12.48 32.752 12.48 45.247 0zM339.088 640.812L63.825 913.532l.88-154.224c.304-12.944-9.969-24.192-22.897-23.904l-17.423.032c-12.96.32-23.649 8-23.921 20.944l-.672 231.008c0 .224.88.367.88.623l-1.264 11.68c-.144 6.496 1.376 12.32 5.584 16.433 4.128 4.192 9.952 6.72 16.384 6.56l11.712-.288c.223 0 .383-.096.64-.096l230.495 1.008c12.928-.32 23.617-11.009 23.92-23.936l.032-16.432c-1.967-15.216-13.952-24.16-26.88-23.872l-151.247-.4L384.32 686.076c12.496-12.497 12.496-32.752 0-45.248s-32.737-12.512-45.233-.016zm685.122 346.56l-.672-231.01c-.288-12.944-10.992-20.624-23.92-20.944l-16.416-.032c-12.944-.289-23.184 10.975-22.912 23.903l.896 155.072-275.28-273.552c-12.496-12.496-32.752-12.496-45.248 0s-12.496 32.752 0 45.248L914.93 958.649l-151.232.4c-12.928-.288-24.912 8.657-26.88 23.872l.032 16.432c.304 12.944 11.008 23.633 23.92 23.936l229.504-1.007c.24 0 .416.095.64.095l11.696.288c6.448.16 12.272-2.368 16.4-6.56 4.193-4.128 5.696-9.936 5.584-16.432l-1.263-11.68c0-.255.88-.399.88-.622zM110.049 65.321l151.264-.397c12.928.288 24.912-8.64 26.88-23.873l-.032-16.431C287.84 11.677 277.15.972 264.24.7l-230.512.992c-.256-.032-.416-.112-.64-.112l-11.712-.273C14.945 1.132 9.105 3.676 4.992 7.851.784 11.995-.735 17.787-.592 24.283L.672 35.995c0 .223-.88.384-.88.624l.672 231.008c.288 12.928 10.977 20.624 23.921 20.928l17.424.015c12.928.288 23.183-10.96 22.895-23.888l-.88-154.224 275.264 272.72c12.48 12.497 32.753 12.497 45.25 0s12.496-32.768 0-45.264z" } }] })(e);
}
function a1(e) {
  return Dn({ tag: "svg", attr: { version: "1.1", viewBox: "0 0 17 17" }, child: [{ tag: "g", attr: {}, child: [] }, { tag: "path", attr: { d: "M8.5 5.972c-1.378 0-2.5 1.122-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.122 2.5-2.5-1.122-2.5-2.5-2.5zM8.5 9.972c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5 1.5 0.673 1.5 1.5-0.673 1.5-1.5 1.5zM16.94 9.446c0.037-0.321 0.060-0.645 0.060-0.974s-0.023-0.653-0.060-0.974l-2.588-0.778c-0.119-0.402-0.278-0.787-0.474-1.149l1.279-2.377c-0.406-0.51-0.869-0.973-1.38-1.38l-2.377 1.28c-0.363-0.196-0.748-0.354-1.15-0.474l-0.776-2.588c-0.32-0.037-0.644-0.060-0.974-0.060s-0.654 0.023-0.974 0.060l-0.776 2.588c-0.403 0.119-0.789 0.278-1.15 0.475l-2.377-1.28c-0.511 0.406-0.974 0.869-1.379 1.38l1.279 2.375c-0.196 0.362-0.354 0.748-0.474 1.15l-2.589 0.778c-0.037 0.32-0.060 0.644-0.060 0.974s0.023 0.654 0.060 0.974l2.588 0.776c0.12 0.403 0.278 0.789 0.474 1.151l-1.279 2.376c0.406 0.511 0.869 0.974 1.38 1.38l2.377-1.279c0.362 0.196 0.748 0.354 1.15 0.474l0.776 2.588c0.321 0.037 0.645 0.060 0.974 0.060s0.654-0.023 0.974-0.060l0.776-2.588c0.402-0.12 0.788-0.278 1.15-0.474l2.376 1.279c0.511-0.407 0.974-0.87 1.38-1.381l-1.278-2.376c0.196-0.362 0.354-0.748 0.474-1.15l2.588-0.776zM13.548 9.419l-0.154 0.518c-0.1 0.337-0.233 0.66-0.396 0.959l-0.256 0.475 0.255 0.475 0.952 1.77c-0.099 0.105-0.201 0.207-0.306 0.306l-2.243-1.209-0.475 0.256c-0.301 0.163-0.624 0.295-0.96 0.396l-0.518 0.154-0.155 0.518-0.579 1.932c-0.072 0.002-0.143 0.003-0.213 0.003s-0.141-0.001-0.213-0.003l-0.579-1.932-0.155-0.518-0.518-0.154c-0.336-0.1-0.659-0.233-0.959-0.396l-0.475-0.256-2.245 1.207c-0.104-0.099-0.207-0.201-0.306-0.306l1.208-2.244-0.256-0.475c-0.162-0.3-0.295-0.623-0.396-0.96l-0.153-0.517-2.449-0.734c-0.003-0.072-0.004-0.143-0.004-0.212 0-0.070 0.001-0.141 0.004-0.213l2.448-0.734 0.154-0.518c0.1-0.337 0.233-0.66 0.396-0.959l0.256-0.475-1.208-2.245c0.099-0.104 0.201-0.207 0.305-0.306l2.247 1.21 0.476-0.259c0.297-0.162 0.619-0.295 0.956-0.395l0.518-0.154 0.155-0.518 0.579-1.932c0.073-0.001 0.144-0.002 0.214-0.002s0.141 0.001 0.213 0.003l0.579 1.932 0.155 0.518 0.518 0.154c0.335 0.1 0.659 0.233 0.96 0.396l0.475 0.255 2.244-1.208c0.104 0.099 0.207 0.201 0.306 0.306l-0.953 1.77-0.255 0.475 0.257 0.475c0.163 0.3 0.295 0.622 0.395 0.957l0.154 0.518 0.518 0.155 1.932 0.581c0.001 0.072 0.002 0.143 0.002 0.213s-0.001 0.141-0.004 0.213l-2.448 0.734z" } }] })(e);
}
const u1 = () => {
  const { state: e } = Ac(), [n, t] = We(""), r = hu(), o = wu(() => {
    t($R(e)), r.set("EDITOR_HTML_PREVIEW", e);
  }, 250);
  return Ne(() => {
    o();
  }, [e, o]), /* @__PURE__ */ z(Er, { children: [
    /* @__PURE__ */ z(zd, { children: [
      /* @__PURE__ */ E(ZR, {}),
      " Result"
    ] }),
    /* @__PURE__ */ E(
      "iframe",
      {
        srcDoc: n,
        title: "output",
        frameBorder: "0",
        width: "100%",
        height: "100%",
        sandbox: "allow-forms allow-popups allow-scripts allow-same-origin allow-modals"
      }
    )
  ] });
}, _1 = _e.div`
  ${ye("100%", "750px")};
  overflow-y: auto;
  scroll-behavior: smooth;
  margin-top: 10px;
  ${ms()};
`, l1 = _e.div`
  ${ye("100%", "360px")};
  display: flex;
  gap: 20px;
`, c1 = _e.div`
  ${ye("100%", "50vh")};
  iframe {
    background: ${Me("grey")};
    border-radius: 6px;
    margin-top: 8px;
  }
`, d1 = () => {
  const e = st(), { isHtmlPreviewOpened: n } = e.state, t = Ln(() => {
    e.update({ isHtmlPreviewOpened: !1 });
  }, [e]);
  return /* @__PURE__ */ E(
    wh,
    {
      isOpen: n,
      onClose: t,
      height: 750,
      children: /* @__PURE__ */ E(wf, { children: /* @__PURE__ */ z(_1, { children: [
        /* @__PURE__ */ z(l1, { children: [
          /* @__PURE__ */ E(_a, { lang: "html" }),
          /* @__PURE__ */ E(_a, { lang: "css" }),
          /* @__PURE__ */ E(_a, { lang: "javascript" })
        ] }),
        /* @__PURE__ */ E(c1, { children: /* @__PURE__ */ E(u1, {}) })
      ] }) })
    }
  );
}, zi = "Custom", Xa = [
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
  zi
], Lu = {
  js: "javascript",
  ts: "typescript",
  tsx: "typescript",
  jsx: "typescript",
  html: "html",
  htm: "html",
  txt: "text",
  css: "css"
}, kh = 9, h1 = [
  "java",
  "python",
  "cpp",
  "c",
  "go",
  "cs",
  "javascript"
], m1 = [14, 16, 18, 20, 22, 24, 26], f1 = [4, 2];
var Ye = /* @__PURE__ */ ((e) => (e.O = "O", e.S = "S", e.N = "N", e.T = "T", e.P = "P", e.J = "J", e.Q = "Q", e))(Ye || {});
const p1 = an(() => {
  const e = pn(), { fontSize: n } = Tn();
  return /* @__PURE__ */ E(
    as,
    {
      size: "middle",
      onChange: (r) => {
        e.changeFontSize(r);
      },
      value: n,
      style: { width: 200 },
      options: m1.map((r) => ({
        value: r,
        label: `${r}px`
      }))
    }
  );
}), T1 = () => [...new Set(Object.values(Lu))].map((n) => ({
  value: n,
  label: n
})), xh = an(() => {
  const e = T1(), n = go(), t = n.getActiveLanguage(), r = n.getActiveTab();
  return /* @__PURE__ */ E(
    as,
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
}), Dl = (e) => {
  const { theme: n } = Tn(), t = pn();
  return wu((r, o) => (n !== zi && t.changeTheme(zi), e(o)), 300);
}, E1 = an(() => {
  const e = pn(), { tabSize: n } = Tn();
  return /* @__PURE__ */ E(
    as,
    {
      size: "middle",
      onChange: (r) => {
        e.changeTabSize(r);
      },
      value: n,
      style: { width: 200 },
      options: f1.map((r) => ({
        value: r,
        label: r
      }))
    }
  );
}), Lh = an(() => {
  const e = pn(), { theme: n } = Tn();
  return /* @__PURE__ */ E(
    as,
    {
      size: "middle",
      defaultValue: "vs-dark",
      onChange: (r) => {
        e.changeTheme(r);
      },
      value: n,
      style: { width: 200 },
      options: Xa.map((r) => ({
        value: r,
        label: r
      }))
    }
  );
}), mt = _e.div`
  ${ye("100%", "70px")};
  ${yt("space-between", "flex-start")};
  margin-bottom: 25px;
`, O1 = _e(mt)`
  height: 45px;
  width: 60%;
  margin: 0 auto;
  margin-bottom: 10px;
  gap: 30px;
`, ft = _e.div`
  margin-top: -5px;
  height: 100%;
  h4 {
    color: ${Me("light")};
    font-size: ${({ theme: e }) => e.fz8};
  }
  p {
    color: ${Me("secondaryGrey")};
    font-size: ${({ theme: e }) => e.fz5};
    margin-top: 10px;
  }
`, la = _e.div`
  background: ${Me("lightGrey")};
  ${ye("100%", "2px")};
  margin-bottom: 30px;
  margin-top: -8px;
`, yl = _e.h1`
  text-align: center;
  padding-bottom: 18px;
  margin-bottom: 30px;
  font-size: ${({ theme: e }) => e.fz10};
  border-bottom: ${FO} ${Me("lightGrey")};
`, Ut = ({ keyCode: e, children: n, experimental: t }) => /* @__PURE__ */ z(O1, { children: [
  /* @__PURE__ */ z(Gf.Text, { keyboard: !0, children: [
    t ? "🧪" : "✌️",
    " Alt + ",
    e
  ] }),
  /* @__PURE__ */ E(ft, { style: { justifyContent: "space-around" }, children: /* @__PURE__ */ E("p", { children: n }) })
] }), b1 = () => /* @__PURE__ */ z(Er, { children: [
  /* @__PURE__ */ E(Ut, { keyCode: Ye.O, experimental: !0, children: "Open a file on your OS" }),
  /* @__PURE__ */ E(Ut, { keyCode: Ye.S, experimental: !0, children: "Save a file on your OS" }),
  /* @__PURE__ */ E(Ut, { keyCode: Ye.N, children: "Open new tab" }),
  /* @__PURE__ */ E(Ut, { keyCode: Ye.T, children: "Close current tab" }),
  /* @__PURE__ */ E(Ut, { keyCode: Ye.P, children: "Open/close terminal" }),
  /* @__PURE__ */ E(Ut, { keyCode: Ye.J, children: "Open/close test cases" }),
  /* @__PURE__ */ E(Ut, { keyCode: Ye.Q, children: "Open/close settings" })
] }), R1 = an(() => {
  const e = st(), n = e.state.isSettingsOpened, t = pn(), { customBackground: r, customColor: o } = Tn(), i = () => {
    e.update({
      isSettingsOpened: !1
    });
  }, s = Dl((_) => {
    t.changeCustomBackground(_);
  }), a = Dl((_) => {
    t.changeCustomColor(_);
  });
  return /* @__PURE__ */ z(WR, { isOpen: n, onClose: i, children: [
    /* @__PURE__ */ E(yl, { children: "Editor settings" }),
    /* @__PURE__ */ z(mt, { children: [
      /* @__PURE__ */ z(ft, { children: [
        /* @__PURE__ */ E("h4", { children: "Editor Theme" }),
        /* @__PURE__ */ E("p", { children: "Choose the code editor theme" })
      ] }),
      /* @__PURE__ */ E(Lh, {})
    ] }),
    /* @__PURE__ */ z(mt, { children: [
      /* @__PURE__ */ z(ft, { children: [
        /* @__PURE__ */ E("h4", { children: "Font Size" }),
        /* @__PURE__ */ E("p", { children: "Choose your preferred font size" })
      ] }),
      /* @__PURE__ */ E(p1, {})
    ] }),
    /* @__PURE__ */ z(mt, { children: [
      /* @__PURE__ */ z(ft, { children: [
        /* @__PURE__ */ E("h4", { children: "Current Tab Language" }),
        /* @__PURE__ */ E("p", { children: "Choose the code editor language (js, py, css)" })
      ] }),
      /* @__PURE__ */ E(xh, {})
    ] }),
    /* @__PURE__ */ z(mt, { children: [
      /* @__PURE__ */ z(ft, { children: [
        /* @__PURE__ */ E("h4", { children: "Tab size" }),
        /* @__PURE__ */ E("p", { children: "Choose the width of a tab character" })
      ] }),
      /* @__PURE__ */ E(E1, {})
    ] }),
    /* @__PURE__ */ E(la, {}),
    /* @__PURE__ */ z(mt, { children: [
      /* @__PURE__ */ z(ft, { children: [
        /* @__PURE__ */ E("h4", { children: "Custom Editor Background" }),
        /* @__PURE__ */ E("p", { children: "Change custom background for code editor" })
      ] }),
      /* @__PURE__ */ E(
        g_,
        {
          onChange: s,
          value: r,
          showText: !0,
          size: "large"
        }
      )
    ] }),
    /* @__PURE__ */ z(mt, { children: [
      /* @__PURE__ */ z(ft, { children: [
        /* @__PURE__ */ E("h4", { children: "Custom Editor Color" }),
        /* @__PURE__ */ E("p", { children: "Change custom color for code editor" })
      ] }),
      /* @__PURE__ */ E(
        g_,
        {
          onChange: a,
          value: o,
          showText: !0,
          size: "large"
        }
      )
    ] }),
    /* @__PURE__ */ E(la, {}),
    /* @__PURE__ */ z(mt, { children: [
      /* @__PURE__ */ z(ft, { children: [
        /* @__PURE__ */ E("h4", { children: "Save editor settings to Local Storage" }),
        /* @__PURE__ */ E("p", { children: "All your next changes will be stored in localStorage" })
      ] }),
      /* @__PURE__ */ E(
        Cf,
        {
          defaultChecked: !0,
          onChange: (_) => {
            t.setIsLocalStorageDisabled(!_);
          },
          style: { marginRight: 15, marginTop: 0 }
        }
      )
    ] }),
    /* @__PURE__ */ E(yl, { children: "Key buildings" }),
    /* @__PURE__ */ E(b1, {}),
    /* @__PURE__ */ E(la, {})
  ] });
});
function g1(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
//! moment.js
//! version : 2.29.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var Bh;
function y() {
  return Bh.apply(null, arguments);
}
function N1(e) {
  Bh = e;
}
function vn(e) {
  return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]";
}
function kt(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Object]";
}
function ue(e, n) {
  return Object.prototype.hasOwnProperty.call(e, n);
}
function Bu(e) {
  if (Object.getOwnPropertyNames)
    return Object.getOwnPropertyNames(e).length === 0;
  var n;
  for (n in e)
    if (ue(e, n))
      return !1;
  return !0;
}
function Qe(e) {
  return e === void 0;
}
function it(e) {
  return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]";
}
function jo(e) {
  return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
}
function jh(e, n) {
  var t = [], r, o = e.length;
  for (r = 0; r < o; ++r)
    t.push(n(e[r], r));
  return t;
}
function Et(e, n) {
  for (var t in n)
    ue(n, t) && (e[t] = n[t]);
  return ue(n, "toString") && (e.toString = n.toString), ue(n, "valueOf") && (e.valueOf = n.valueOf), e;
}
function Vn(e, n, t, r) {
  return cm(e, n, t, r, !0).utc();
}
function I1() {
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
function J(e) {
  return e._pf == null && (e._pf = I1()), e._pf;
}
var Ka;
Array.prototype.some ? Ka = Array.prototype.some : Ka = function(e) {
  var n = Object(this), t = n.length >>> 0, r;
  for (r = 0; r < t; r++)
    if (r in n && e.call(this, n[r], r, n))
      return !0;
  return !1;
};
function ju(e) {
  if (e._isValid == null) {
    var n = J(e), t = Ka.call(n.parsedDateParts, function(o) {
      return o != null;
    }), r = !isNaN(e._d.getTime()) && n.overflow < 0 && !n.empty && !n.invalidEra && !n.invalidMonth && !n.invalidWeekday && !n.weekdayMismatch && !n.nullInput && !n.invalidFormat && !n.userInvalidated && (!n.meridiem || n.meridiem && t);
    if (e._strict && (r = r && n.charsLeftOver === 0 && n.unusedTokens.length === 0 && n.bigHour === void 0), Object.isFrozen == null || !Object.isFrozen(e))
      e._isValid = r;
    else
      return r;
  }
  return e._isValid;
}
function gs(e) {
  var n = Vn(NaN);
  return e != null ? Et(J(n), e) : J(n).userInvalidated = !0, n;
}
var Ul = y.momentProperties = [], ca = !1;
function Fu(e, n) {
  var t, r, o, i = Ul.length;
  if (Qe(n._isAMomentObject) || (e._isAMomentObject = n._isAMomentObject), Qe(n._i) || (e._i = n._i), Qe(n._f) || (e._f = n._f), Qe(n._l) || (e._l = n._l), Qe(n._strict) || (e._strict = n._strict), Qe(n._tzm) || (e._tzm = n._tzm), Qe(n._isUTC) || (e._isUTC = n._isUTC), Qe(n._offset) || (e._offset = n._offset), Qe(n._pf) || (e._pf = J(n)), Qe(n._locale) || (e._locale = n._locale), i > 0)
    for (t = 0; t < i; t++)
      r = Ul[t], o = n[r], Qe(o) || (e[r] = o);
  return e;
}
function Fo(e) {
  Fu(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = /* @__PURE__ */ new Date(NaN)), ca === !1 && (ca = !0, y.updateOffset(this), ca = !1);
}
function Gn(e) {
  return e instanceof Fo || e != null && e._isAMomentObject != null;
}
function Fh(e) {
  y.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + e);
}
function En(e, n) {
  var t = !0;
  return Et(function() {
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
      Fh(
        e + `
Arguments: ` + Array.prototype.slice.call(r).join("") + `
` + new Error().stack
      ), t = !1;
    }
    return n.apply(this, arguments);
  }, n);
}
var Hl = {};
function Vh(e, n) {
  y.deprecationHandler != null && y.deprecationHandler(e, n), Hl[e] || (Fh(n), Hl[e] = !0);
}
y.suppressDeprecationWarnings = !1;
y.deprecationHandler = null;
function Wn(e) {
  return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
}
function A1(e) {
  var n, t;
  for (t in e)
    ue(e, t) && (n = e[t], Wn(n) ? this[t] = n : this["_" + t] = n);
  this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp(
    (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
  );
}
function Ya(e, n) {
  var t = Et({}, e), r;
  for (r in n)
    ue(n, r) && (kt(e[r]) && kt(n[r]) ? (t[r] = {}, Et(t[r], e[r]), Et(t[r], n[r])) : n[r] != null ? t[r] = n[r] : delete t[r]);
  for (r in e)
    ue(e, r) && !ue(n, r) && kt(e[r]) && (t[r] = Et({}, t[r]));
  return t;
}
function Vu(e) {
  e != null && this.set(e);
}
var $a;
Object.keys ? $a = Object.keys : $a = function(e) {
  var n, t = [];
  for (n in e)
    ue(e, n) && t.push(n);
  return t;
};
var S1 = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function v1(e, n, t) {
  var r = this._calendar[e] || this._calendar.sameElse;
  return Wn(r) ? r.call(n, t) : r;
}
function Bn(e, n, t) {
  var r = "" + Math.abs(e), o = n - r.length, i = e >= 0;
  return (i ? t ? "+" : "" : "-") + Math.pow(10, Math.max(0, o)).toString().substr(1) + r;
}
var Wu = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, oi = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, da = {}, er = {};
function L(e, n, t, r) {
  var o = r;
  typeof r == "string" && (o = function() {
    return this[r]();
  }), e && (er[e] = o), n && (er[n[0]] = function() {
    return Bn(o.apply(this, arguments), n[1], n[2]);
  }), t && (er[t] = function() {
    return this.localeData().ordinal(
      o.apply(this, arguments),
      e
    );
  });
}
function G1(e) {
  return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
}
function C1(e) {
  var n = e.match(Wu), t, r;
  for (t = 0, r = n.length; t < r; t++)
    er[n[t]] ? n[t] = er[n[t]] : n[t] = G1(n[t]);
  return function(o) {
    var i = "", s;
    for (s = 0; s < r; s++)
      i += Wn(n[s]) ? n[s].call(o, e) : n[s];
    return i;
  };
}
function Ii(e, n) {
  return e.isValid() ? (n = Wh(n, e.localeData()), da[n] = da[n] || C1(n), da[n](e)) : e.localeData().invalidDate();
}
function Wh(e, n) {
  var t = 5;
  function r(o) {
    return n.longDateFormat(o) || o;
  }
  for (oi.lastIndex = 0; t >= 0 && oi.test(e); )
    e = e.replace(
      oi,
      r
    ), oi.lastIndex = 0, t -= 1;
  return e;
}
var D1 = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function y1(e) {
  var n = this._longDateFormat[e], t = this._longDateFormat[e.toUpperCase()];
  return n || !t ? n : (this._longDateFormat[e] = t.match(Wu).map(function(r) {
    return r === "MMMM" || r === "MM" || r === "DD" || r === "dddd" ? r.slice(1) : r;
  }).join(""), this._longDateFormat[e]);
}
var U1 = "Invalid date";
function H1() {
  return this._invalidDate;
}
var w1 = "%d", P1 = /\d{1,2}/;
function M1(e) {
  return this._ordinal.replace("%d", e);
}
var k1 = {
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
function x1(e, n, t, r) {
  var o = this._relativeTime[t];
  return Wn(o) ? o(e, n, t, r) : o.replace(/%d/i, e);
}
function L1(e, n) {
  var t = this._relativeTime[e > 0 ? "future" : "past"];
  return Wn(t) ? t(n) : t.replace(/%s/i, n);
}
var Kr = {};
function Xe(e, n) {
  var t = e.toLowerCase();
  Kr[t] = Kr[t + "s"] = Kr[n] = e;
}
function On(e) {
  return typeof e == "string" ? Kr[e] || Kr[e.toLowerCase()] : void 0;
}
function Xu(e) {
  var n = {}, t, r;
  for (r in e)
    ue(e, r) && (t = On(r), t && (n[t] = e[r]));
  return n;
}
var Xh = {};
function Ke(e, n) {
  Xh[e] = n;
}
function B1(e) {
  var n = [], t;
  for (t in e)
    ue(e, t) && n.push({ unit: t, priority: Xh[t] });
  return n.sort(function(r, o) {
    return r.priority - o.priority;
  }), n;
}
function Ns(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
}
function _n(e) {
  return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
}
function Z(e) {
  var n = +e, t = 0;
  return n !== 0 && isFinite(n) && (t = _n(n)), t;
}
function Nr(e, n) {
  return function(t) {
    return t != null ? (Kh(this, e, t), y.updateOffset(this, n), this) : Ji(this, e);
  };
}
function Ji(e, n) {
  return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + n]() : NaN;
}
function Kh(e, n, t) {
  e.isValid() && !isNaN(t) && (n === "FullYear" && Ns(e.year()) && e.month() === 1 && e.date() === 29 ? (t = Z(t), e._d["set" + (e._isUTC ? "UTC" : "") + n](
    t,
    e.month(),
    Cs(t, e.month())
  )) : e._d["set" + (e._isUTC ? "UTC" : "") + n](t));
}
function j1(e) {
  return e = On(e), Wn(this[e]) ? this[e]() : this;
}
function F1(e, n) {
  if (typeof e == "object") {
    e = Xu(e);
    var t = B1(e), r, o = t.length;
    for (r = 0; r < o; r++)
      this[t[r].unit](e[t[r].unit]);
  } else if (e = On(e), Wn(this[e]))
    return this[e](n);
  return this;
}
var Yh = /\d/, un = /\d\d/, $h = /\d{3}/, Ku = /\d{4}/, Is = /[+-]?\d{6}/, Re = /\d\d?/, zh = /\d\d\d\d?/, Jh = /\d\d\d\d\d\d?/, As = /\d{1,3}/, Yu = /\d{1,4}/, Ss = /[+-]?\d{1,6}/, Ir = /\d+/, vs = /[+-]?\d+/, V1 = /Z|[+-]\d\d:?\d\d/gi, Gs = /Z|[+-]\d\d(?::?\d\d)?/gi, W1 = /[+-]?\d+(\.\d{1,3})?/, Vo = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, qi;
qi = {};
function H(e, n, t) {
  qi[e] = Wn(n) ? n : function(r, o) {
    return r && t ? t : n;
  };
}
function X1(e, n) {
  return ue(qi, e) ? qi[e](n._strict, n._locale) : new RegExp(K1(e));
}
function K1(e) {
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
var za = {};
function Ee(e, n) {
  var t, r = n, o;
  for (typeof e == "string" && (e = [e]), it(n) && (r = function(i, s) {
    s[n] = Z(i);
  }), o = e.length, t = 0; t < o; t++)
    za[e[t]] = r;
}
function Wo(e, n) {
  Ee(e, function(t, r, o, i) {
    o._w = o._w || {}, n(t, o._w, o, i);
  });
}
function Y1(e, n, t) {
  n != null && ue(za, e) && za[e](n, t._a, t, e);
}
var Ve = 0, Qn = 1, Hn = 2, Ue = 3, gn = 4, Zn = 5, Pt = 6, $1 = 7, z1 = 8;
function J1(e, n) {
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
function Cs(e, n) {
  if (isNaN(e) || isNaN(n))
    return NaN;
  var t = J1(n, 12);
  return e += (n - t) / 12, t === 1 ? Ns(e) ? 29 : 28 : 31 - t % 7 % 2;
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
Xe("month", "M");
Ke("month", 8);
H("M", Re);
H("MM", Re, un);
H("MMM", function(e, n) {
  return n.monthsShortRegex(e);
});
H("MMMM", function(e, n) {
  return n.monthsRegex(e);
});
Ee(["M", "MM"], function(e, n) {
  n[Qn] = Z(e) - 1;
});
Ee(["MMM", "MMMM"], function(e, n, t, r) {
  var o = t._locale.monthsParse(e, r, t._strict);
  o != null ? n[Qn] = o : J(t).invalidMonth = e;
});
var q1 = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), qh = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), Qh = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, Q1 = Vo, Z1 = Vo;
function eg(e, n) {
  return e ? vn(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || Qh).test(n) ? "format" : "standalone"][e.month()] : vn(this._months) ? this._months : this._months.standalone;
}
function ng(e, n) {
  return e ? vn(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Qh.test(n) ? "format" : "standalone"][e.month()] : vn(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function tg(e, n, t) {
  var r, o, i, s = e.toLocaleLowerCase();
  if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], r = 0; r < 12; ++r)
      i = Vn([2e3, r]), this._shortMonthsParse[r] = this.monthsShort(
        i,
        ""
      ).toLocaleLowerCase(), this._longMonthsParse[r] = this.months(i, "").toLocaleLowerCase();
  return t ? n === "MMM" ? (o = De.call(this._shortMonthsParse, s), o !== -1 ? o : null) : (o = De.call(this._longMonthsParse, s), o !== -1 ? o : null) : n === "MMM" ? (o = De.call(this._shortMonthsParse, s), o !== -1 ? o : (o = De.call(this._longMonthsParse, s), o !== -1 ? o : null)) : (o = De.call(this._longMonthsParse, s), o !== -1 ? o : (o = De.call(this._shortMonthsParse, s), o !== -1 ? o : null));
}
function rg(e, n, t) {
  var r, o, i;
  if (this._monthsParseExact)
    return tg.call(this, e, n, t);
  for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), r = 0; r < 12; r++) {
    if (o = Vn([2e3, r]), t && !this._longMonthsParse[r] && (this._longMonthsParse[r] = new RegExp(
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
function Zh(e, n) {
  var t;
  if (!e.isValid())
    return e;
  if (typeof n == "string") {
    if (/^\d+$/.test(n))
      n = Z(n);
    else if (n = e.localeData().monthsParse(n), !it(n))
      return e;
  }
  return t = Math.min(e.date(), Cs(e.year(), n)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](n, t), e;
}
function em(e) {
  return e != null ? (Zh(this, e), y.updateOffset(this, !0), this) : Ji(this, "Month");
}
function og() {
  return Cs(this.year(), this.month());
}
function ig(e) {
  return this._monthsParseExact ? (ue(this, "_monthsRegex") || nm.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (ue(this, "_monthsShortRegex") || (this._monthsShortRegex = Q1), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function sg(e) {
  return this._monthsParseExact ? (ue(this, "_monthsRegex") || nm.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (ue(this, "_monthsRegex") || (this._monthsRegex = Z1), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
}
function nm() {
  function e(s, a) {
    return a.length - s.length;
  }
  var n = [], t = [], r = [], o, i;
  for (o = 0; o < 12; o++)
    i = Vn([2e3, o]), n.push(this.monthsShort(i, "")), t.push(this.months(i, "")), r.push(this.months(i, "")), r.push(this.monthsShort(i, ""));
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
  return e <= 9999 ? Bn(e, 4) : "+" + e;
});
L(0, ["YY", 2], 0, function() {
  return this.year() % 100;
});
L(0, ["YYYY", 4], 0, "year");
L(0, ["YYYYY", 5], 0, "year");
L(0, ["YYYYYY", 6, !0], 0, "year");
Xe("year", "y");
Ke("year", 1);
H("Y", vs);
H("YY", Re, un);
H("YYYY", Yu, Ku);
H("YYYYY", Ss, Is);
H("YYYYYY", Ss, Is);
Ee(["YYYYY", "YYYYYY"], Ve);
Ee("YYYY", function(e, n) {
  n[Ve] = e.length === 2 ? y.parseTwoDigitYear(e) : Z(e);
});
Ee("YY", function(e, n) {
  n[Ve] = y.parseTwoDigitYear(e);
});
Ee("Y", function(e, n) {
  n[Ve] = parseInt(e, 10);
});
function Yr(e) {
  return Ns(e) ? 366 : 365;
}
y.parseTwoDigitYear = function(e) {
  return Z(e) + (Z(e) > 68 ? 1900 : 2e3);
};
var tm = Nr("FullYear", !0);
function ag() {
  return Ns(this.year());
}
function ug(e, n, t, r, o, i, s) {
  var a;
  return e < 100 && e >= 0 ? (a = new Date(e + 400, n, t, r, o, i, s), isFinite(a.getFullYear()) && a.setFullYear(e)) : a = new Date(e, n, t, r, o, i, s), a;
}
function _o(e) {
  var n, t;
  return e < 100 && e >= 0 ? (t = Array.prototype.slice.call(arguments), t[0] = e + 400, n = new Date(Date.UTC.apply(null, t)), isFinite(n.getUTCFullYear()) && n.setUTCFullYear(e)) : n = new Date(Date.UTC.apply(null, arguments)), n;
}
function Qi(e, n, t) {
  var r = 7 + n - t, o = (7 + _o(e, 0, r).getUTCDay() - n) % 7;
  return -o + r - 1;
}
function rm(e, n, t, r, o) {
  var i = (7 + t - r) % 7, s = Qi(e, r, o), a = 1 + 7 * (n - 1) + i + s, u, _;
  return a <= 0 ? (u = e - 1, _ = Yr(u) + a) : a > Yr(e) ? (u = e + 1, _ = a - Yr(e)) : (u = e, _ = a), {
    year: u,
    dayOfYear: _
  };
}
function lo(e, n, t) {
  var r = Qi(e.year(), n, t), o = Math.floor((e.dayOfYear() - r - 1) / 7) + 1, i, s;
  return o < 1 ? (s = e.year() - 1, i = o + rt(s, n, t)) : o > rt(e.year(), n, t) ? (i = o - rt(e.year(), n, t), s = e.year() + 1) : (s = e.year(), i = o), {
    week: i,
    year: s
  };
}
function rt(e, n, t) {
  var r = Qi(e, n, t), o = Qi(e + 1, n, t);
  return (Yr(e) - r + o) / 7;
}
L("w", ["ww", 2], "wo", "week");
L("W", ["WW", 2], "Wo", "isoWeek");
Xe("week", "w");
Xe("isoWeek", "W");
Ke("week", 5);
Ke("isoWeek", 5);
H("w", Re);
H("ww", Re, un);
H("W", Re);
H("WW", Re, un);
Wo(
  ["w", "ww", "W", "WW"],
  function(e, n, t, r) {
    n[r.substr(0, 1)] = Z(e);
  }
);
function _g(e) {
  return lo(e, this._week.dow, this._week.doy).week;
}
var lg = {
  dow: 0,
  // Sunday is the first day of the week.
  doy: 6
  // The week that contains Jan 6th is the first week of the year.
};
function cg() {
  return this._week.dow;
}
function dg() {
  return this._week.doy;
}
function hg(e) {
  var n = this.localeData().week(this);
  return e == null ? n : this.add((e - n) * 7, "d");
}
function mg(e) {
  var n = lo(this, 1, 4).week;
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
Xe("day", "d");
Xe("weekday", "e");
Xe("isoWeekday", "E");
Ke("day", 11);
Ke("weekday", 11);
Ke("isoWeekday", 11);
H("d", Re);
H("e", Re);
H("E", Re);
H("dd", function(e, n) {
  return n.weekdaysMinRegex(e);
});
H("ddd", function(e, n) {
  return n.weekdaysShortRegex(e);
});
H("dddd", function(e, n) {
  return n.weekdaysRegex(e);
});
Wo(["dd", "ddd", "dddd"], function(e, n, t, r) {
  var o = t._locale.weekdaysParse(e, r, t._strict);
  o != null ? n.d = o : J(t).invalidWeekday = e;
});
Wo(["d", "e", "E"], function(e, n, t, r) {
  n[r] = Z(e);
});
function fg(e, n) {
  return typeof e != "string" ? e : isNaN(e) ? (e = n.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10);
}
function pg(e, n) {
  return typeof e == "string" ? n.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
}
function $u(e, n) {
  return e.slice(n, 7).concat(e.slice(0, n));
}
var Tg = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), om = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), Eg = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), Og = Vo, bg = Vo, Rg = Vo;
function gg(e, n) {
  var t = vn(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(n) ? "format" : "standalone"];
  return e === !0 ? $u(t, this._week.dow) : e ? t[e.day()] : t;
}
function Ng(e) {
  return e === !0 ? $u(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
}
function Ig(e) {
  return e === !0 ? $u(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
}
function Ag(e, n, t) {
  var r, o, i, s = e.toLocaleLowerCase();
  if (!this._weekdaysParse)
    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], r = 0; r < 7; ++r)
      i = Vn([2e3, 1]).day(r), this._minWeekdaysParse[r] = this.weekdaysMin(
        i,
        ""
      ).toLocaleLowerCase(), this._shortWeekdaysParse[r] = this.weekdaysShort(
        i,
        ""
      ).toLocaleLowerCase(), this._weekdaysParse[r] = this.weekdays(i, "").toLocaleLowerCase();
  return t ? n === "dddd" ? (o = De.call(this._weekdaysParse, s), o !== -1 ? o : null) : n === "ddd" ? (o = De.call(this._shortWeekdaysParse, s), o !== -1 ? o : null) : (o = De.call(this._minWeekdaysParse, s), o !== -1 ? o : null) : n === "dddd" ? (o = De.call(this._weekdaysParse, s), o !== -1 || (o = De.call(this._shortWeekdaysParse, s), o !== -1) ? o : (o = De.call(this._minWeekdaysParse, s), o !== -1 ? o : null)) : n === "ddd" ? (o = De.call(this._shortWeekdaysParse, s), o !== -1 || (o = De.call(this._weekdaysParse, s), o !== -1) ? o : (o = De.call(this._minWeekdaysParse, s), o !== -1 ? o : null)) : (o = De.call(this._minWeekdaysParse, s), o !== -1 || (o = De.call(this._weekdaysParse, s), o !== -1) ? o : (o = De.call(this._shortWeekdaysParse, s), o !== -1 ? o : null));
}
function Sg(e, n, t) {
  var r, o, i;
  if (this._weekdaysParseExact)
    return Ag.call(this, e, n, t);
  for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), r = 0; r < 7; r++) {
    if (o = Vn([2e3, 1]).day(r), t && !this._fullWeekdaysParse[r] && (this._fullWeekdaysParse[r] = new RegExp(
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
function vg(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var n = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
  return e != null ? (e = fg(e, this.localeData()), this.add(e - n, "d")) : n;
}
function Gg(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var n = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return e == null ? n : this.add(e - n, "d");
}
function Cg(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    var n = pg(e, this.localeData());
    return this.day(this.day() % 7 ? n : n - 7);
  } else
    return this.day() || 7;
}
function Dg(e) {
  return this._weekdaysParseExact ? (ue(this, "_weekdaysRegex") || zu.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (ue(this, "_weekdaysRegex") || (this._weekdaysRegex = Og), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function yg(e) {
  return this._weekdaysParseExact ? (ue(this, "_weekdaysRegex") || zu.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (ue(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = bg), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function Ug(e) {
  return this._weekdaysParseExact ? (ue(this, "_weekdaysRegex") || zu.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (ue(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Rg), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function zu() {
  function e(c, l) {
    return l.length - c.length;
  }
  var n = [], t = [], r = [], o = [], i, s, a, u, _;
  for (i = 0; i < 7; i++)
    s = Vn([2e3, 1]).day(i), a = on(this.weekdaysMin(s, "")), u = on(this.weekdaysShort(s, "")), _ = on(this.weekdays(s, "")), n.push(a), t.push(u), r.push(_), o.push(a), o.push(u), o.push(_);
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
function Ju() {
  return this.hours() % 12 || 12;
}
function Hg() {
  return this.hours() || 24;
}
L("H", ["HH", 2], 0, "hour");
L("h", ["hh", 2], 0, Ju);
L("k", ["kk", 2], 0, Hg);
L("hmm", 0, 0, function() {
  return "" + Ju.apply(this) + Bn(this.minutes(), 2);
});
L("hmmss", 0, 0, function() {
  return "" + Ju.apply(this) + Bn(this.minutes(), 2) + Bn(this.seconds(), 2);
});
L("Hmm", 0, 0, function() {
  return "" + this.hours() + Bn(this.minutes(), 2);
});
L("Hmmss", 0, 0, function() {
  return "" + this.hours() + Bn(this.minutes(), 2) + Bn(this.seconds(), 2);
});
function im(e, n) {
  L(e, 0, 0, function() {
    return this.localeData().meridiem(
      this.hours(),
      this.minutes(),
      n
    );
  });
}
im("a", !0);
im("A", !1);
Xe("hour", "h");
Ke("hour", 13);
function sm(e, n) {
  return n._meridiemParse;
}
H("a", sm);
H("A", sm);
H("H", Re);
H("h", Re);
H("k", Re);
H("HH", Re, un);
H("hh", Re, un);
H("kk", Re, un);
H("hmm", zh);
H("hmmss", Jh);
H("Hmm", zh);
H("Hmmss", Jh);
Ee(["H", "HH"], Ue);
Ee(["k", "kk"], function(e, n, t) {
  var r = Z(e);
  n[Ue] = r === 24 ? 0 : r;
});
Ee(["a", "A"], function(e, n, t) {
  t._isPm = t._locale.isPM(e), t._meridiem = e;
});
Ee(["h", "hh"], function(e, n, t) {
  n[Ue] = Z(e), J(t).bigHour = !0;
});
Ee("hmm", function(e, n, t) {
  var r = e.length - 2;
  n[Ue] = Z(e.substr(0, r)), n[gn] = Z(e.substr(r)), J(t).bigHour = !0;
});
Ee("hmmss", function(e, n, t) {
  var r = e.length - 4, o = e.length - 2;
  n[Ue] = Z(e.substr(0, r)), n[gn] = Z(e.substr(r, 2)), n[Zn] = Z(e.substr(o)), J(t).bigHour = !0;
});
Ee("Hmm", function(e, n, t) {
  var r = e.length - 2;
  n[Ue] = Z(e.substr(0, r)), n[gn] = Z(e.substr(r));
});
Ee("Hmmss", function(e, n, t) {
  var r = e.length - 4, o = e.length - 2;
  n[Ue] = Z(e.substr(0, r)), n[gn] = Z(e.substr(r, 2)), n[Zn] = Z(e.substr(o));
});
function wg(e) {
  return (e + "").toLowerCase().charAt(0) === "p";
}
var Pg = /[ap]\.?m?\.?/i, Mg = Nr("Hours", !0);
function kg(e, n, t) {
  return e > 11 ? t ? "pm" : "PM" : t ? "am" : "AM";
}
var am = {
  calendar: S1,
  longDateFormat: D1,
  invalidDate: U1,
  ordinal: w1,
  dayOfMonthOrdinalParse: P1,
  relativeTime: k1,
  months: q1,
  monthsShort: qh,
  week: lg,
  weekdays: Tg,
  weekdaysMin: Eg,
  weekdaysShort: om,
  meridiemParse: Pg
}, ge = {}, Ur = {}, co;
function xg(e, n) {
  var t, r = Math.min(e.length, n.length);
  for (t = 0; t < r; t += 1)
    if (e[t] !== n[t])
      return t;
  return r;
}
function wl(e) {
  return e && e.toLowerCase().replace("_", "-");
}
function Lg(e) {
  for (var n = 0, t, r, o, i; n < e.length; ) {
    for (i = wl(e[n]).split("-"), t = i.length, r = wl(e[n + 1]), r = r ? r.split("-") : null; t > 0; ) {
      if (o = Ds(i.slice(0, t).join("-")), o)
        return o;
      if (r && r.length >= t && xg(i, r) >= t - 1)
        break;
      t--;
    }
    n++;
  }
  return co;
}
function Bg(e) {
  return e.match("^[^/\\\\]*$") != null;
}
function Ds(e) {
  var n = null, t;
  if (ge[e] === void 0 && typeof module < "u" && module && module.exports && Bg(e))
    try {
      n = co._abbr, t = g1, t("./locale/" + e), St(n);
    } catch {
      ge[e] = null;
    }
  return ge[e];
}
function St(e, n) {
  var t;
  return e && (Qe(n) ? t = _t(e) : t = qu(e, n), t ? co = t : typeof console < "u" && console.warn && console.warn(
    "Locale " + e + " not found. Did you forget to load it?"
  )), co._abbr;
}
function qu(e, n) {
  if (n !== null) {
    var t, r = am;
    if (n.abbr = e, ge[e] != null)
      Vh(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ), r = ge[e]._config;
    else if (n.parentLocale != null)
      if (ge[n.parentLocale] != null)
        r = ge[n.parentLocale]._config;
      else if (t = Ds(n.parentLocale), t != null)
        r = t._config;
      else
        return Ur[n.parentLocale] || (Ur[n.parentLocale] = []), Ur[n.parentLocale].push({
          name: e,
          config: n
        }), null;
    return ge[e] = new Vu(Ya(r, n)), Ur[e] && Ur[e].forEach(function(o) {
      qu(o.name, o.config);
    }), St(e), ge[e];
  } else
    return delete ge[e], null;
}
function jg(e, n) {
  if (n != null) {
    var t, r, o = am;
    ge[e] != null && ge[e].parentLocale != null ? ge[e].set(Ya(ge[e]._config, n)) : (r = Ds(e), r != null && (o = r._config), n = Ya(o, n), r == null && (n.abbr = e), t = new Vu(n), t.parentLocale = ge[e], ge[e] = t), St(e);
  } else
    ge[e] != null && (ge[e].parentLocale != null ? (ge[e] = ge[e].parentLocale, e === St() && St(e)) : ge[e] != null && delete ge[e]);
  return ge[e];
}
function _t(e) {
  var n;
  if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
    return co;
  if (!vn(e)) {
    if (n = Ds(e), n)
      return n;
    e = [e];
  }
  return Lg(e);
}
function Fg() {
  return $a(ge);
}
function Qu(e) {
  var n, t = e._a;
  return t && J(e).overflow === -2 && (n = t[Qn] < 0 || t[Qn] > 11 ? Qn : t[Hn] < 1 || t[Hn] > Cs(t[Ve], t[Qn]) ? Hn : t[Ue] < 0 || t[Ue] > 24 || t[Ue] === 24 && (t[gn] !== 0 || t[Zn] !== 0 || t[Pt] !== 0) ? Ue : t[gn] < 0 || t[gn] > 59 ? gn : t[Zn] < 0 || t[Zn] > 59 ? Zn : t[Pt] < 0 || t[Pt] > 999 ? Pt : -1, J(e)._overflowDayOfYear && (n < Ve || n > Hn) && (n = Hn), J(e)._overflowWeeks && n === -1 && (n = $1), J(e)._overflowWeekday && n === -1 && (n = z1), J(e).overflow = n), e;
}
var Vg = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Wg = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Xg = /Z|[+-]\d\d(?::?\d\d)?/, ii = [
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
], ha = [
  ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
  ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
  ["HH:mm:ss", /\d\d:\d\d:\d\d/],
  ["HH:mm", /\d\d:\d\d/],
  ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
  ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
  ["HHmmss", /\d\d\d\d\d\d/],
  ["HHmm", /\d\d\d\d/],
  ["HH", /\d\d/]
], Kg = /^\/?Date\((-?\d+)/i, Yg = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, $g = {
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
function um(e) {
  var n, t, r = e._i, o = Vg.exec(r) || Wg.exec(r), i, s, a, u, _ = ii.length, c = ha.length;
  if (o) {
    for (J(e).iso = !0, n = 0, t = _; n < t; n++)
      if (ii[n][1].exec(o[1])) {
        s = ii[n][0], i = ii[n][2] !== !1;
        break;
      }
    if (s == null) {
      e._isValid = !1;
      return;
    }
    if (o[3]) {
      for (n = 0, t = c; n < t; n++)
        if (ha[n][1].exec(o[3])) {
          a = (o[2] || " ") + ha[n][0];
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
      if (Xg.exec(o[4]))
        u = "Z";
      else {
        e._isValid = !1;
        return;
      }
    e._f = s + (a || "") + (u || ""), e_(e);
  } else
    e._isValid = !1;
}
function zg(e, n, t, r, o, i) {
  var s = [
    Jg(e),
    qh.indexOf(n),
    parseInt(t, 10),
    parseInt(r, 10),
    parseInt(o, 10)
  ];
  return i && s.push(parseInt(i, 10)), s;
}
function Jg(e) {
  var n = parseInt(e, 10);
  return n <= 49 ? 2e3 + n : n <= 999 ? 1900 + n : n;
}
function qg(e) {
  return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function Qg(e, n, t) {
  if (e) {
    var r = om.indexOf(e), o = new Date(
      n[0],
      n[1],
      n[2]
    ).getDay();
    if (r !== o)
      return J(t).weekdayMismatch = !0, t._isValid = !1, !1;
  }
  return !0;
}
function Zg(e, n, t) {
  if (e)
    return $g[e];
  if (n)
    return 0;
  var r = parseInt(t, 10), o = r % 100, i = (r - o) / 100;
  return i * 60 + o;
}
function _m(e) {
  var n = Yg.exec(qg(e._i)), t;
  if (n) {
    if (t = zg(
      n[4],
      n[3],
      n[2],
      n[5],
      n[6],
      n[7]
    ), !Qg(n[1], t, e))
      return;
    e._a = t, e._tzm = Zg(n[8], n[9], n[10]), e._d = _o.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), J(e).rfc2822 = !0;
  } else
    e._isValid = !1;
}
function e0(e) {
  var n = Kg.exec(e._i);
  if (n !== null) {
    e._d = /* @__PURE__ */ new Date(+n[1]);
    return;
  }
  if (um(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  if (_m(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  e._strict ? e._isValid = !1 : y.createFromInputFallback(e);
}
y.createFromInputFallback = En(
  "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  function(e) {
    e._d = /* @__PURE__ */ new Date(e._i + (e._useUTC ? " UTC" : ""));
  }
);
function Yt(e, n, t) {
  return e ?? n ?? t;
}
function n0(e) {
  var n = new Date(y.now());
  return e._useUTC ? [
    n.getUTCFullYear(),
    n.getUTCMonth(),
    n.getUTCDate()
  ] : [n.getFullYear(), n.getMonth(), n.getDate()];
}
function Zu(e) {
  var n, t, r = [], o, i, s;
  if (!e._d) {
    for (o = n0(e), e._w && e._a[Hn] == null && e._a[Qn] == null && t0(e), e._dayOfYear != null && (s = Yt(e._a[Ve], o[Ve]), (e._dayOfYear > Yr(s) || e._dayOfYear === 0) && (J(e)._overflowDayOfYear = !0), t = _o(s, 0, e._dayOfYear), e._a[Qn] = t.getUTCMonth(), e._a[Hn] = t.getUTCDate()), n = 0; n < 3 && e._a[n] == null; ++n)
      e._a[n] = r[n] = o[n];
    for (; n < 7; n++)
      e._a[n] = r[n] = e._a[n] == null ? n === 2 ? 1 : 0 : e._a[n];
    e._a[Ue] === 24 && e._a[gn] === 0 && e._a[Zn] === 0 && e._a[Pt] === 0 && (e._nextDay = !0, e._a[Ue] = 0), e._d = (e._useUTC ? _o : ug).apply(
      null,
      r
    ), i = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[Ue] = 24), e._w && typeof e._w.d < "u" && e._w.d !== i && (J(e).weekdayMismatch = !0);
  }
}
function t0(e) {
  var n, t, r, o, i, s, a, u, _;
  n = e._w, n.GG != null || n.W != null || n.E != null ? (i = 1, s = 4, t = Yt(
    n.GG,
    e._a[Ve],
    lo(be(), 1, 4).year
  ), r = Yt(n.W, 1), o = Yt(n.E, 1), (o < 1 || o > 7) && (u = !0)) : (i = e._locale._week.dow, s = e._locale._week.doy, _ = lo(be(), i, s), t = Yt(n.gg, e._a[Ve], _.year), r = Yt(n.w, _.week), n.d != null ? (o = n.d, (o < 0 || o > 6) && (u = !0)) : n.e != null ? (o = n.e + i, (n.e < 0 || n.e > 6) && (u = !0)) : o = i), r < 1 || r > rt(t, i, s) ? J(e)._overflowWeeks = !0 : u != null ? J(e)._overflowWeekday = !0 : (a = rm(t, r, o, i, s), e._a[Ve] = a.year, e._dayOfYear = a.dayOfYear);
}
y.ISO_8601 = function() {
};
y.RFC_2822 = function() {
};
function e_(e) {
  if (e._f === y.ISO_8601) {
    um(e);
    return;
  }
  if (e._f === y.RFC_2822) {
    _m(e);
    return;
  }
  e._a = [], J(e).empty = !0;
  var n = "" + e._i, t, r, o, i, s, a = n.length, u = 0, _, c;
  for (o = Wh(e._f, e._locale).match(Wu) || [], c = o.length, t = 0; t < c; t++)
    i = o[t], r = (n.match(X1(i, e)) || [])[0], r && (s = n.substr(0, n.indexOf(r)), s.length > 0 && J(e).unusedInput.push(s), n = n.slice(
      n.indexOf(r) + r.length
    ), u += r.length), er[i] ? (r ? J(e).empty = !1 : J(e).unusedTokens.push(i), Y1(i, r, e)) : e._strict && !r && J(e).unusedTokens.push(i);
  J(e).charsLeftOver = a - u, n.length > 0 && J(e).unusedInput.push(n), e._a[Ue] <= 12 && J(e).bigHour === !0 && e._a[Ue] > 0 && (J(e).bigHour = void 0), J(e).parsedDateParts = e._a.slice(0), J(e).meridiem = e._meridiem, e._a[Ue] = r0(
    e._locale,
    e._a[Ue],
    e._meridiem
  ), _ = J(e).era, _ !== null && (e._a[Ve] = e._locale.erasConvertYear(_, e._a[Ve])), Zu(e), Qu(e);
}
function r0(e, n, t) {
  var r;
  return t == null ? n : e.meridiemHour != null ? e.meridiemHour(n, t) : (e.isPM != null && (r = e.isPM(t), r && n < 12 && (n += 12), !r && n === 12 && (n = 0)), n);
}
function o0(e) {
  var n, t, r, o, i, s, a = !1, u = e._f.length;
  if (u === 0) {
    J(e).invalidFormat = !0, e._d = /* @__PURE__ */ new Date(NaN);
    return;
  }
  for (o = 0; o < u; o++)
    i = 0, s = !1, n = Fu({}, e), e._useUTC != null && (n._useUTC = e._useUTC), n._f = e._f[o], e_(n), ju(n) && (s = !0), i += J(n).charsLeftOver, i += J(n).unusedTokens.length * 10, J(n).score = i, a ? i < r && (r = i, t = n) : (r == null || i < r || s) && (r = i, t = n, s && (a = !0));
  Et(e, t || n);
}
function i0(e) {
  if (!e._d) {
    var n = Xu(e._i), t = n.day === void 0 ? n.date : n.day;
    e._a = jh(
      [n.year, n.month, t, n.hour, n.minute, n.second, n.millisecond],
      function(r) {
        return r && parseInt(r, 10);
      }
    ), Zu(e);
  }
}
function s0(e) {
  var n = new Fo(Qu(lm(e)));
  return n._nextDay && (n.add(1, "d"), n._nextDay = void 0), n;
}
function lm(e) {
  var n = e._i, t = e._f;
  return e._locale = e._locale || _t(e._l), n === null || t === void 0 && n === "" ? gs({ nullInput: !0 }) : (typeof n == "string" && (e._i = n = e._locale.preparse(n)), Gn(n) ? new Fo(Qu(n)) : (jo(n) ? e._d = n : vn(t) ? o0(e) : t ? e_(e) : a0(e), ju(e) || (e._d = null), e));
}
function a0(e) {
  var n = e._i;
  Qe(n) ? e._d = new Date(y.now()) : jo(n) ? e._d = new Date(n.valueOf()) : typeof n == "string" ? e0(e) : vn(n) ? (e._a = jh(n.slice(0), function(t) {
    return parseInt(t, 10);
  }), Zu(e)) : kt(n) ? i0(e) : it(n) ? e._d = new Date(n) : y.createFromInputFallback(e);
}
function cm(e, n, t, r, o) {
  var i = {};
  return (n === !0 || n === !1) && (r = n, n = void 0), (t === !0 || t === !1) && (r = t, t = void 0), (kt(e) && Bu(e) || vn(e) && e.length === 0) && (e = void 0), i._isAMomentObject = !0, i._useUTC = i._isUTC = o, i._l = t, i._i = e, i._f = n, i._strict = r, s0(i);
}
function be(e, n, t, r) {
  return cm(e, n, t, r, !1);
}
var u0 = En(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = be.apply(null, arguments);
    return this.isValid() && e.isValid() ? e < this ? this : e : gs();
  }
), _0 = En(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = be.apply(null, arguments);
    return this.isValid() && e.isValid() ? e > this ? this : e : gs();
  }
);
function dm(e, n) {
  var t, r;
  if (n.length === 1 && vn(n[0]) && (n = n[0]), !n.length)
    return be();
  for (t = n[0], r = 1; r < n.length; ++r)
    (!n[r].isValid() || n[r][e](t)) && (t = n[r]);
  return t;
}
function l0() {
  var e = [].slice.call(arguments, 0);
  return dm("isBefore", e);
}
function c0() {
  var e = [].slice.call(arguments, 0);
  return dm("isAfter", e);
}
var d0 = function() {
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
function h0(e) {
  var n, t = !1, r, o = Hr.length;
  for (n in e)
    if (ue(e, n) && !(De.call(Hr, n) !== -1 && (e[n] == null || !isNaN(e[n]))))
      return !1;
  for (r = 0; r < o; ++r)
    if (e[Hr[r]]) {
      if (t)
        return !1;
      parseFloat(e[Hr[r]]) !== Z(e[Hr[r]]) && (t = !0);
    }
  return !0;
}
function m0() {
  return this._isValid;
}
function f0() {
  return yn(NaN);
}
function ys(e) {
  var n = Xu(e), t = n.year || 0, r = n.quarter || 0, o = n.month || 0, i = n.week || n.isoWeek || 0, s = n.day || 0, a = n.hour || 0, u = n.minute || 0, _ = n.second || 0, c = n.millisecond || 0;
  this._isValid = h0(n), this._milliseconds = +c + _ * 1e3 + // 1000
  u * 6e4 + // 1000 * 60
  a * 1e3 * 60 * 60, this._days = +s + i * 7, this._months = +o + r * 3 + t * 12, this._data = {}, this._locale = _t(), this._bubble();
}
function Ai(e) {
  return e instanceof ys;
}
function Ja(e) {
  return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
}
function p0(e, n, t) {
  var r = Math.min(e.length, n.length), o = Math.abs(e.length - n.length), i = 0, s;
  for (s = 0; s < r; s++)
    (t && e[s] !== n[s] || !t && Z(e[s]) !== Z(n[s])) && i++;
  return i + o;
}
function hm(e, n) {
  L(e, 0, 0, function() {
    var t = this.utcOffset(), r = "+";
    return t < 0 && (t = -t, r = "-"), r + Bn(~~(t / 60), 2) + n + Bn(~~t % 60, 2);
  });
}
hm("Z", ":");
hm("ZZ", "");
H("Z", Gs);
H("ZZ", Gs);
Ee(["Z", "ZZ"], function(e, n, t) {
  t._useUTC = !0, t._tzm = n_(Gs, e);
});
var T0 = /([\+\-]|\d\d)/gi;
function n_(e, n) {
  var t = (n || "").match(e), r, o, i;
  return t === null ? null : (r = t[t.length - 1] || [], o = (r + "").match(T0) || ["-", 0, 0], i = +(o[1] * 60) + Z(o[2]), i === 0 ? 0 : o[0] === "+" ? i : -i);
}
function t_(e, n) {
  var t, r;
  return n._isUTC ? (t = n.clone(), r = (Gn(e) || jo(e) ? e.valueOf() : be(e).valueOf()) - t.valueOf(), t._d.setTime(t._d.valueOf() + r), y.updateOffset(t, !1), t) : be(e).local();
}
function qa(e) {
  return -Math.round(e._d.getTimezoneOffset());
}
y.updateOffset = function() {
};
function E0(e, n, t) {
  var r = this._offset || 0, o;
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    if (typeof e == "string") {
      if (e = n_(Gs, e), e === null)
        return this;
    } else
      Math.abs(e) < 16 && !t && (e = e * 60);
    return !this._isUTC && n && (o = qa(this)), this._offset = e, this._isUTC = !0, o != null && this.add(o, "m"), r !== e && (!n || this._changeInProgress ? pm(
      this,
      yn(e - r, "m"),
      1,
      !1
    ) : this._changeInProgress || (this._changeInProgress = !0, y.updateOffset(this, !0), this._changeInProgress = null)), this;
  } else
    return this._isUTC ? r : qa(this);
}
function O0(e, n) {
  return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, n), this) : -this.utcOffset();
}
function b0(e) {
  return this.utcOffset(0, e);
}
function R0(e) {
  return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(qa(this), "m")), this;
}
function g0() {
  if (this._tzm != null)
    this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var e = n_(V1, this._i);
    e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
  }
  return this;
}
function N0(e) {
  return this.isValid() ? (e = e ? be(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1;
}
function I0() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function A0() {
  if (!Qe(this._isDSTShifted))
    return this._isDSTShifted;
  var e = {}, n;
  return Fu(e, this), e = lm(e), e._a ? (n = e._isUTC ? Vn(e._a) : be(e._a), this._isDSTShifted = this.isValid() && p0(e._a, n.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function S0() {
  return this.isValid() ? !this._isUTC : !1;
}
function v0() {
  return this.isValid() ? this._isUTC : !1;
}
function mm() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var G0 = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, C0 = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function yn(e, n) {
  var t = e, r = null, o, i, s;
  return Ai(e) ? t = {
    ms: e._milliseconds,
    d: e._days,
    M: e._months
  } : it(e) || !isNaN(+e) ? (t = {}, n ? t[n] = +e : t.milliseconds = +e) : (r = G0.exec(e)) ? (o = r[1] === "-" ? -1 : 1, t = {
    y: 0,
    d: Z(r[Hn]) * o,
    h: Z(r[Ue]) * o,
    m: Z(r[gn]) * o,
    s: Z(r[Zn]) * o,
    ms: Z(Ja(r[Pt] * 1e3)) * o
    // the millisecond decimal point is included in the match
  }) : (r = C0.exec(e)) ? (o = r[1] === "-" ? -1 : 1, t = {
    y: Ht(r[2], o),
    M: Ht(r[3], o),
    w: Ht(r[4], o),
    d: Ht(r[5], o),
    h: Ht(r[6], o),
    m: Ht(r[7], o),
    s: Ht(r[8], o)
  }) : t == null ? t = {} : typeof t == "object" && ("from" in t || "to" in t) && (s = D0(
    be(t.from),
    be(t.to)
  ), t = {}, t.ms = s.milliseconds, t.M = s.months), i = new ys(t), Ai(e) && ue(e, "_locale") && (i._locale = e._locale), Ai(e) && ue(e, "_isValid") && (i._isValid = e._isValid), i;
}
yn.fn = ys.prototype;
yn.invalid = f0;
function Ht(e, n) {
  var t = e && parseFloat(e.replace(",", "."));
  return (isNaN(t) ? 0 : t) * n;
}
function Pl(e, n) {
  var t = {};
  return t.months = n.month() - e.month() + (n.year() - e.year()) * 12, e.clone().add(t.months, "M").isAfter(n) && --t.months, t.milliseconds = +n - +e.clone().add(t.months, "M"), t;
}
function D0(e, n) {
  var t;
  return e.isValid() && n.isValid() ? (n = t_(n, e), e.isBefore(n) ? t = Pl(e, n) : (t = Pl(n, e), t.milliseconds = -t.milliseconds, t.months = -t.months), t) : { milliseconds: 0, months: 0 };
}
function fm(e, n) {
  return function(t, r) {
    var o, i;
    return r !== null && !isNaN(+r) && (Vh(
      n,
      "moment()." + n + "(period, number) is deprecated. Please use moment()." + n + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
    ), i = t, t = r, r = i), o = yn(t, r), pm(this, o, e), this;
  };
}
function pm(e, n, t, r) {
  var o = n._milliseconds, i = Ja(n._days), s = Ja(n._months);
  e.isValid() && (r = r ?? !0, s && Zh(e, Ji(e, "Month") + s * t), i && Kh(e, "Date", Ji(e, "Date") + i * t), o && e._d.setTime(e._d.valueOf() + o * t), r && y.updateOffset(e, i || s));
}
var y0 = fm(1, "add"), U0 = fm(-1, "subtract");
function Tm(e) {
  return typeof e == "string" || e instanceof String;
}
function H0(e) {
  return Gn(e) || jo(e) || Tm(e) || it(e) || P0(e) || w0(e) || e === null || e === void 0;
}
function w0(e) {
  var n = kt(e) && !Bu(e), t = !1, r = [
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
function P0(e) {
  var n = vn(e), t = !1;
  return n && (t = e.filter(function(r) {
    return !it(r) && Tm(e);
  }).length === 0), n && t;
}
function M0(e) {
  var n = kt(e) && !Bu(e), t = !1, r = [
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
function k0(e, n) {
  var t = e.diff(n, "days", !0);
  return t < -6 ? "sameElse" : t < -1 ? "lastWeek" : t < 0 ? "lastDay" : t < 1 ? "sameDay" : t < 2 ? "nextDay" : t < 7 ? "nextWeek" : "sameElse";
}
function x0(e, n) {
  arguments.length === 1 && (arguments[0] ? H0(arguments[0]) ? (e = arguments[0], n = void 0) : M0(arguments[0]) && (n = arguments[0], e = void 0) : (e = void 0, n = void 0));
  var t = e || be(), r = t_(t, this).startOf("day"), o = y.calendarFormat(this, r) || "sameElse", i = n && (Wn(n[o]) ? n[o].call(this, t) : n[o]);
  return this.format(
    i || this.localeData().calendar(o, this, be(t))
  );
}
function L0() {
  return new Fo(this);
}
function B0(e, n) {
  var t = Gn(e) ? e : be(e);
  return this.isValid() && t.isValid() ? (n = On(n) || "millisecond", n === "millisecond" ? this.valueOf() > t.valueOf() : t.valueOf() < this.clone().startOf(n).valueOf()) : !1;
}
function j0(e, n) {
  var t = Gn(e) ? e : be(e);
  return this.isValid() && t.isValid() ? (n = On(n) || "millisecond", n === "millisecond" ? this.valueOf() < t.valueOf() : this.clone().endOf(n).valueOf() < t.valueOf()) : !1;
}
function F0(e, n, t, r) {
  var o = Gn(e) ? e : be(e), i = Gn(n) ? n : be(n);
  return this.isValid() && o.isValid() && i.isValid() ? (r = r || "()", (r[0] === "(" ? this.isAfter(o, t) : !this.isBefore(o, t)) && (r[1] === ")" ? this.isBefore(i, t) : !this.isAfter(i, t))) : !1;
}
function V0(e, n) {
  var t = Gn(e) ? e : be(e), r;
  return this.isValid() && t.isValid() ? (n = On(n) || "millisecond", n === "millisecond" ? this.valueOf() === t.valueOf() : (r = t.valueOf(), this.clone().startOf(n).valueOf() <= r && r <= this.clone().endOf(n).valueOf())) : !1;
}
function W0(e, n) {
  return this.isSame(e, n) || this.isAfter(e, n);
}
function X0(e, n) {
  return this.isSame(e, n) || this.isBefore(e, n);
}
function K0(e, n, t) {
  var r, o, i;
  if (!this.isValid())
    return NaN;
  if (r = t_(e, this), !r.isValid())
    return NaN;
  switch (o = (r.utcOffset() - this.utcOffset()) * 6e4, n = On(n), n) {
    case "year":
      i = Si(this, r) / 12;
      break;
    case "month":
      i = Si(this, r);
      break;
    case "quarter":
      i = Si(this, r) / 3;
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
  return t ? i : _n(i);
}
function Si(e, n) {
  if (e.date() < n.date())
    return -Si(n, e);
  var t = (n.year() - e.year()) * 12 + (n.month() - e.month()), r = e.clone().add(t, "months"), o, i;
  return n - r < 0 ? (o = e.clone().add(t - 1, "months"), i = (n - r) / (r - o)) : (o = e.clone().add(t + 1, "months"), i = (n - r) / (o - r)), -(t + i) || 0;
}
y.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
y.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function Y0() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function $0(e) {
  if (!this.isValid())
    return null;
  var n = e !== !0, t = n ? this.clone().utc() : this;
  return t.year() < 0 || t.year() > 9999 ? Ii(
    t,
    n ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
  ) : Wn(Date.prototype.toISOString) ? n ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", Ii(t, "Z")) : Ii(
    t,
    n ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
  );
}
function z0() {
  if (!this.isValid())
    return "moment.invalid(/* " + this._i + " */)";
  var e = "moment", n = "", t, r, o, i;
  return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", n = "Z"), t = "[" + e + '("]', r = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", o = "-MM-DD[T]HH:mm:ss.SSS", i = n + '[")]', this.format(t + r + o + i);
}
function J0(e) {
  e || (e = this.isUtc() ? y.defaultFormatUtc : y.defaultFormat);
  var n = Ii(this, e);
  return this.localeData().postformat(n);
}
function q0(e, n) {
  return this.isValid() && (Gn(e) && e.isValid() || be(e).isValid()) ? yn({ to: this, from: e }).locale(this.locale()).humanize(!n) : this.localeData().invalidDate();
}
function Q0(e) {
  return this.from(be(), e);
}
function Z0(e, n) {
  return this.isValid() && (Gn(e) && e.isValid() || be(e).isValid()) ? yn({ from: this, to: e }).locale(this.locale()).humanize(!n) : this.localeData().invalidDate();
}
function eN(e) {
  return this.to(be(), e);
}
function Em(e) {
  var n;
  return e === void 0 ? this._locale._abbr : (n = _t(e), n != null && (this._locale = n), this);
}
var Om = En(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function(e) {
    return e === void 0 ? this.localeData() : this.locale(e);
  }
);
function bm() {
  return this._locale;
}
var Zi = 1e3, nr = 60 * Zi, es = 60 * nr, Rm = (365 * 400 + 97) * 24 * es;
function tr(e, n) {
  return (e % n + n) % n;
}
function gm(e, n, t) {
  return e < 100 && e >= 0 ? new Date(e + 400, n, t) - Rm : new Date(e, n, t).valueOf();
}
function Nm(e, n, t) {
  return e < 100 && e >= 0 ? Date.UTC(e + 400, n, t) - Rm : Date.UTC(e, n, t);
}
function nN(e) {
  var n, t;
  if (e = On(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (t = this._isUTC ? Nm : gm, e) {
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
        es
      );
      break;
    case "minute":
      n = this._d.valueOf(), n -= tr(n, nr);
      break;
    case "second":
      n = this._d.valueOf(), n -= tr(n, Zi);
      break;
  }
  return this._d.setTime(n), y.updateOffset(this, !0), this;
}
function tN(e) {
  var n, t;
  if (e = On(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (t = this._isUTC ? Nm : gm, e) {
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
      n = this._d.valueOf(), n += es - tr(
        n + (this._isUTC ? 0 : this.utcOffset() * nr),
        es
      ) - 1;
      break;
    case "minute":
      n = this._d.valueOf(), n += nr - tr(n, nr) - 1;
      break;
    case "second":
      n = this._d.valueOf(), n += Zi - tr(n, Zi) - 1;
      break;
  }
  return this._d.setTime(n), y.updateOffset(this, !0), this;
}
function rN() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function oN() {
  return Math.floor(this.valueOf() / 1e3);
}
function iN() {
  return new Date(this.valueOf());
}
function sN() {
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
function aN() {
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
function uN() {
  return this.isValid() ? this.toISOString() : null;
}
function _N() {
  return ju(this);
}
function lN() {
  return Et({}, J(this));
}
function cN() {
  return J(this).overflow;
}
function dN() {
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
H("N", r_);
H("NN", r_);
H("NNN", r_);
H("NNNN", NN);
H("NNNNN", IN);
Ee(
  ["N", "NN", "NNN", "NNNN", "NNNNN"],
  function(e, n, t, r) {
    var o = t._locale.erasParse(e, r, t._strict);
    o ? J(t).era = o : J(t).invalidEra = e;
  }
);
H("y", Ir);
H("yy", Ir);
H("yyy", Ir);
H("yyyy", Ir);
H("yo", AN);
Ee(["y", "yy", "yyy", "yyyy"], Ve);
Ee(["yo"], function(e, n, t, r) {
  var o;
  t._locale._eraYearOrdinalRegex && (o = e.match(t._locale._eraYearOrdinalRegex)), t._locale.eraYearOrdinalParse ? n[Ve] = t._locale.eraYearOrdinalParse(e, o) : n[Ve] = parseInt(e, 10);
});
function hN(e, n) {
  var t, r, o, i = this._eras || _t("en")._eras;
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
function mN(e, n, t) {
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
function fN(e, n) {
  var t = e.since <= e.until ? 1 : -1;
  return n === void 0 ? y(e.since).year() : y(e.since).year() + (n - e.offset) * t;
}
function pN() {
  var e, n, t, r = this.localeData().eras();
  for (e = 0, n = r.length; e < n; ++e)
    if (t = this.clone().startOf("day").valueOf(), r[e].since <= t && t <= r[e].until || r[e].until <= t && t <= r[e].since)
      return r[e].name;
  return "";
}
function TN() {
  var e, n, t, r = this.localeData().eras();
  for (e = 0, n = r.length; e < n; ++e)
    if (t = this.clone().startOf("day").valueOf(), r[e].since <= t && t <= r[e].until || r[e].until <= t && t <= r[e].since)
      return r[e].narrow;
  return "";
}
function EN() {
  var e, n, t, r = this.localeData().eras();
  for (e = 0, n = r.length; e < n; ++e)
    if (t = this.clone().startOf("day").valueOf(), r[e].since <= t && t <= r[e].until || r[e].until <= t && t <= r[e].since)
      return r[e].abbr;
  return "";
}
function ON() {
  var e, n, t, r, o = this.localeData().eras();
  for (e = 0, n = o.length; e < n; ++e)
    if (t = o[e].since <= o[e].until ? 1 : -1, r = this.clone().startOf("day").valueOf(), o[e].since <= r && r <= o[e].until || o[e].until <= r && r <= o[e].since)
      return (this.year() - y(o[e].since).year()) * t + o[e].offset;
  return this.year();
}
function bN(e) {
  return ue(this, "_erasNameRegex") || o_.call(this), e ? this._erasNameRegex : this._erasRegex;
}
function RN(e) {
  return ue(this, "_erasAbbrRegex") || o_.call(this), e ? this._erasAbbrRegex : this._erasRegex;
}
function gN(e) {
  return ue(this, "_erasNarrowRegex") || o_.call(this), e ? this._erasNarrowRegex : this._erasRegex;
}
function r_(e, n) {
  return n.erasAbbrRegex(e);
}
function NN(e, n) {
  return n.erasNameRegex(e);
}
function IN(e, n) {
  return n.erasNarrowRegex(e);
}
function AN(e, n) {
  return n._eraYearOrdinalRegex || Ir;
}
function o_() {
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
function Us(e, n) {
  L(0, [e, e.length], 0, n);
}
Us("gggg", "weekYear");
Us("ggggg", "weekYear");
Us("GGGG", "isoWeekYear");
Us("GGGGG", "isoWeekYear");
Xe("weekYear", "gg");
Xe("isoWeekYear", "GG");
Ke("weekYear", 1);
Ke("isoWeekYear", 1);
H("G", vs);
H("g", vs);
H("GG", Re, un);
H("gg", Re, un);
H("GGGG", Yu, Ku);
H("gggg", Yu, Ku);
H("GGGGG", Ss, Is);
H("ggggg", Ss, Is);
Wo(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(e, n, t, r) {
    n[r.substr(0, 2)] = Z(e);
  }
);
Wo(["gg", "GG"], function(e, n, t, r) {
  n[r] = y.parseTwoDigitYear(e);
});
function SN(e) {
  return Im.call(
    this,
    e,
    this.week(),
    this.weekday(),
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function vN(e) {
  return Im.call(
    this,
    e,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function GN() {
  return rt(this.year(), 1, 4);
}
function CN() {
  return rt(this.isoWeekYear(), 1, 4);
}
function DN() {
  var e = this.localeData()._week;
  return rt(this.year(), e.dow, e.doy);
}
function yN() {
  var e = this.localeData()._week;
  return rt(this.weekYear(), e.dow, e.doy);
}
function Im(e, n, t, r, o) {
  var i;
  return e == null ? lo(this, r, o).year : (i = rt(e, r, o), n > i && (n = i), UN.call(this, e, n, t, r, o));
}
function UN(e, n, t, r, o) {
  var i = rm(e, n, t, r, o), s = _o(i.year, 0, i.dayOfYear);
  return this.year(s.getUTCFullYear()), this.month(s.getUTCMonth()), this.date(s.getUTCDate()), this;
}
L("Q", 0, "Qo", "quarter");
Xe("quarter", "Q");
Ke("quarter", 7);
H("Q", Yh);
Ee("Q", function(e, n) {
  n[Qn] = (Z(e) - 1) * 3;
});
function HN(e) {
  return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3);
}
L("D", ["DD", 2], "Do", "date");
Xe("date", "D");
Ke("date", 9);
H("D", Re);
H("DD", Re, un);
H("Do", function(e, n) {
  return e ? n._dayOfMonthOrdinalParse || n._ordinalParse : n._dayOfMonthOrdinalParseLenient;
});
Ee(["D", "DD"], Hn);
Ee("Do", function(e, n) {
  n[Hn] = Z(e.match(Re)[0]);
});
var Am = Nr("Date", !0);
L("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
Xe("dayOfYear", "DDD");
Ke("dayOfYear", 4);
H("DDD", As);
H("DDDD", $h);
Ee(["DDD", "DDDD"], function(e, n, t) {
  t._dayOfYear = Z(e);
});
function wN(e) {
  var n = Math.round(
    (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
  ) + 1;
  return e == null ? n : this.add(e - n, "d");
}
L("m", ["mm", 2], 0, "minute");
Xe("minute", "m");
Ke("minute", 14);
H("m", Re);
H("mm", Re, un);
Ee(["m", "mm"], gn);
var PN = Nr("Minutes", !1);
L("s", ["ss", 2], 0, "second");
Xe("second", "s");
Ke("second", 15);
H("s", Re);
H("ss", Re, un);
Ee(["s", "ss"], Zn);
var MN = Nr("Seconds", !1);
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
Xe("millisecond", "ms");
Ke("millisecond", 16);
H("S", As, Yh);
H("SS", As, un);
H("SSS", As, $h);
var Ot, Sm;
for (Ot = "SSSS"; Ot.length <= 9; Ot += "S")
  H(Ot, Ir);
function kN(e, n) {
  n[Pt] = Z(("0." + e) * 1e3);
}
for (Ot = "S"; Ot.length <= 9; Ot += "S")
  Ee(Ot, kN);
Sm = Nr("Milliseconds", !1);
L("z", 0, 0, "zoneAbbr");
L("zz", 0, 0, "zoneName");
function xN() {
  return this._isUTC ? "UTC" : "";
}
function LN() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var S = Fo.prototype;
S.add = y0;
S.calendar = x0;
S.clone = L0;
S.diff = K0;
S.endOf = tN;
S.format = J0;
S.from = q0;
S.fromNow = Q0;
S.to = Z0;
S.toNow = eN;
S.get = j1;
S.invalidAt = cN;
S.isAfter = B0;
S.isBefore = j0;
S.isBetween = F0;
S.isSame = V0;
S.isSameOrAfter = W0;
S.isSameOrBefore = X0;
S.isValid = _N;
S.lang = Om;
S.locale = Em;
S.localeData = bm;
S.max = _0;
S.min = u0;
S.parsingFlags = lN;
S.set = F1;
S.startOf = nN;
S.subtract = U0;
S.toArray = sN;
S.toObject = aN;
S.toDate = iN;
S.toISOString = $0;
S.inspect = z0;
typeof Symbol < "u" && Symbol.for != null && (S[Symbol.for("nodejs.util.inspect.custom")] = function() {
  return "Moment<" + this.format() + ">";
});
S.toJSON = uN;
S.toString = Y0;
S.unix = oN;
S.valueOf = rN;
S.creationData = dN;
S.eraName = pN;
S.eraNarrow = TN;
S.eraAbbr = EN;
S.eraYear = ON;
S.year = tm;
S.isLeapYear = ag;
S.weekYear = SN;
S.isoWeekYear = vN;
S.quarter = S.quarters = HN;
S.month = em;
S.daysInMonth = og;
S.week = S.weeks = hg;
S.isoWeek = S.isoWeeks = mg;
S.weeksInYear = DN;
S.weeksInWeekYear = yN;
S.isoWeeksInYear = GN;
S.isoWeeksInISOWeekYear = CN;
S.date = Am;
S.day = S.days = vg;
S.weekday = Gg;
S.isoWeekday = Cg;
S.dayOfYear = wN;
S.hour = S.hours = Mg;
S.minute = S.minutes = PN;
S.second = S.seconds = MN;
S.millisecond = S.milliseconds = Sm;
S.utcOffset = E0;
S.utc = b0;
S.local = R0;
S.parseZone = g0;
S.hasAlignedHourOffset = N0;
S.isDST = I0;
S.isLocal = S0;
S.isUtcOffset = v0;
S.isUtc = mm;
S.isUTC = mm;
S.zoneAbbr = xN;
S.zoneName = LN;
S.dates = En(
  "dates accessor is deprecated. Use date instead.",
  Am
);
S.months = En(
  "months accessor is deprecated. Use month instead",
  em
);
S.years = En(
  "years accessor is deprecated. Use year instead",
  tm
);
S.zone = En(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  O0
);
S.isDSTShifted = En(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  A0
);
function BN(e) {
  return be(e * 1e3);
}
function jN() {
  return be.apply(null, arguments).parseZone();
}
function vm(e) {
  return e;
}
var le = Vu.prototype;
le.calendar = v1;
le.longDateFormat = y1;
le.invalidDate = H1;
le.ordinal = M1;
le.preparse = vm;
le.postformat = vm;
le.relativeTime = x1;
le.pastFuture = L1;
le.set = A1;
le.eras = hN;
le.erasParse = mN;
le.erasConvertYear = fN;
le.erasAbbrRegex = RN;
le.erasNameRegex = bN;
le.erasNarrowRegex = gN;
le.months = eg;
le.monthsShort = ng;
le.monthsParse = rg;
le.monthsRegex = sg;
le.monthsShortRegex = ig;
le.week = _g;
le.firstDayOfYear = dg;
le.firstDayOfWeek = cg;
le.weekdays = gg;
le.weekdaysMin = Ig;
le.weekdaysShort = Ng;
le.weekdaysParse = Sg;
le.weekdaysRegex = Dg;
le.weekdaysShortRegex = yg;
le.weekdaysMinRegex = Ug;
le.isPM = wg;
le.meridiem = kg;
function ns(e, n, t, r) {
  var o = _t(), i = Vn().set(r, n);
  return o[t](i, e);
}
function Gm(e, n, t) {
  if (it(e) && (n = e, e = void 0), e = e || "", n != null)
    return ns(e, n, t, "month");
  var r, o = [];
  for (r = 0; r < 12; r++)
    o[r] = ns(e, r, t, "month");
  return o;
}
function i_(e, n, t, r) {
  typeof e == "boolean" ? (it(n) && (t = n, n = void 0), n = n || "") : (n = e, t = n, e = !1, it(n) && (t = n, n = void 0), n = n || "");
  var o = _t(), i = e ? o._week.dow : 0, s, a = [];
  if (t != null)
    return ns(n, (t + i) % 7, r, "day");
  for (s = 0; s < 7; s++)
    a[s] = ns(n, (s + i) % 7, r, "day");
  return a;
}
function FN(e, n) {
  return Gm(e, n, "months");
}
function VN(e, n) {
  return Gm(e, n, "monthsShort");
}
function WN(e, n, t) {
  return i_(e, n, t, "weekdays");
}
function XN(e, n, t) {
  return i_(e, n, t, "weekdaysShort");
}
function KN(e, n, t) {
  return i_(e, n, t, "weekdaysMin");
}
St("en", {
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
    var n = e % 10, t = Z(e % 100 / 10) === 1 ? "th" : n === 1 ? "st" : n === 2 ? "nd" : n === 3 ? "rd" : "th";
    return e + t;
  }
});
y.lang = En(
  "moment.lang is deprecated. Use moment.locale instead.",
  St
);
y.langData = En(
  "moment.langData is deprecated. Use moment.localeData instead.",
  _t
);
var Xn = Math.abs;
function YN() {
  var e = this._data;
  return this._milliseconds = Xn(this._milliseconds), this._days = Xn(this._days), this._months = Xn(this._months), e.milliseconds = Xn(e.milliseconds), e.seconds = Xn(e.seconds), e.minutes = Xn(e.minutes), e.hours = Xn(e.hours), e.months = Xn(e.months), e.years = Xn(e.years), this;
}
function Cm(e, n, t, r) {
  var o = yn(n, t);
  return e._milliseconds += r * o._milliseconds, e._days += r * o._days, e._months += r * o._months, e._bubble();
}
function $N(e, n) {
  return Cm(this, e, n, 1);
}
function zN(e, n) {
  return Cm(this, e, n, -1);
}
function Ml(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function JN() {
  var e = this._milliseconds, n = this._days, t = this._months, r = this._data, o, i, s, a, u;
  return e >= 0 && n >= 0 && t >= 0 || e <= 0 && n <= 0 && t <= 0 || (e += Ml(Qa(t) + n) * 864e5, n = 0, t = 0), r.milliseconds = e % 1e3, o = _n(e / 1e3), r.seconds = o % 60, i = _n(o / 60), r.minutes = i % 60, s = _n(i / 60), r.hours = s % 24, n += _n(s / 24), u = _n(Dm(n)), t += u, n -= Ml(Qa(u)), a = _n(t / 12), t %= 12, r.days = n, r.months = t, r.years = a, this;
}
function Dm(e) {
  return e * 4800 / 146097;
}
function Qa(e) {
  return e * 146097 / 4800;
}
function qN(e) {
  if (!this.isValid())
    return NaN;
  var n, t, r = this._milliseconds;
  if (e = On(e), e === "month" || e === "quarter" || e === "year")
    switch (n = this._days + r / 864e5, t = this._months + Dm(n), e) {
      case "month":
        return t;
      case "quarter":
        return t / 3;
      case "year":
        return t / 12;
    }
  else
    switch (n = this._days + Math.round(Qa(this._months)), e) {
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
function QN() {
  return this.isValid() ? this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + Z(this._months / 12) * 31536e6 : NaN;
}
function lt(e) {
  return function() {
    return this.as(e);
  };
}
var ZN = lt("ms"), eI = lt("s"), nI = lt("m"), tI = lt("h"), rI = lt("d"), oI = lt("w"), iI = lt("M"), sI = lt("Q"), aI = lt("y");
function uI() {
  return yn(this);
}
function _I(e) {
  return e = On(e), this.isValid() ? this[e + "s"]() : NaN;
}
function jt(e) {
  return function() {
    return this.isValid() ? this._data[e] : NaN;
  };
}
var lI = jt("milliseconds"), cI = jt("seconds"), dI = jt("minutes"), hI = jt("hours"), mI = jt("days"), fI = jt("months"), pI = jt("years");
function TI() {
  return _n(this.days() / 7);
}
var Yn = Math.round, Zt = {
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
function EI(e, n, t, r, o) {
  return o.relativeTime(n || 1, !!t, e, r);
}
function OI(e, n, t, r) {
  var o = yn(e).abs(), i = Yn(o.as("s")), s = Yn(o.as("m")), a = Yn(o.as("h")), u = Yn(o.as("d")), _ = Yn(o.as("M")), c = Yn(o.as("w")), l = Yn(o.as("y")), f = i <= t.ss && ["s", i] || i < t.s && ["ss", i] || s <= 1 && ["m"] || s < t.m && ["mm", s] || a <= 1 && ["h"] || a < t.h && ["hh", a] || u <= 1 && ["d"] || u < t.d && ["dd", u];
  return t.w != null && (f = f || c <= 1 && ["w"] || c < t.w && ["ww", c]), f = f || _ <= 1 && ["M"] || _ < t.M && ["MM", _] || l <= 1 && ["y"] || ["yy", l], f[2] = n, f[3] = +e > 0, f[4] = r, EI.apply(null, f);
}
function bI(e) {
  return e === void 0 ? Yn : typeof e == "function" ? (Yn = e, !0) : !1;
}
function RI(e, n) {
  return Zt[e] === void 0 ? !1 : n === void 0 ? Zt[e] : (Zt[e] = n, e === "s" && (Zt.ss = n - 1), !0);
}
function gI(e, n) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var t = !1, r = Zt, o, i;
  return typeof e == "object" && (n = e, e = !1), typeof e == "boolean" && (t = e), typeof n == "object" && (r = Object.assign({}, Zt, n), n.s != null && n.ss == null && (r.ss = n.s - 1)), o = this.localeData(), i = OI(this, !t, r, o), t && (i = o.pastFuture(+this, i)), o.postformat(i);
}
var ma = Math.abs;
function Vt(e) {
  return (e > 0) - (e < 0) || +e;
}
function Hs() {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var e = ma(this._milliseconds) / 1e3, n = ma(this._days), t = ma(this._months), r, o, i, s, a = this.asSeconds(), u, _, c, l;
  return a ? (r = _n(e / 60), o = _n(r / 60), e %= 60, r %= 60, i = _n(t / 12), t %= 12, s = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", u = a < 0 ? "-" : "", _ = Vt(this._months) !== Vt(a) ? "-" : "", c = Vt(this._days) !== Vt(a) ? "-" : "", l = Vt(this._milliseconds) !== Vt(a) ? "-" : "", u + "P" + (i ? _ + i + "Y" : "") + (t ? _ + t + "M" : "") + (n ? c + n + "D" : "") + (o || r || e ? "T" : "") + (o ? l + o + "H" : "") + (r ? l + r + "M" : "") + (e ? l + s + "S" : "")) : "P0D";
}
var re = ys.prototype;
re.isValid = m0;
re.abs = YN;
re.add = $N;
re.subtract = zN;
re.as = qN;
re.asMilliseconds = ZN;
re.asSeconds = eI;
re.asMinutes = nI;
re.asHours = tI;
re.asDays = rI;
re.asWeeks = oI;
re.asMonths = iI;
re.asQuarters = sI;
re.asYears = aI;
re.valueOf = QN;
re._bubble = JN;
re.clone = uI;
re.get = _I;
re.milliseconds = lI;
re.seconds = cI;
re.minutes = dI;
re.hours = hI;
re.days = mI;
re.weeks = TI;
re.months = fI;
re.years = pI;
re.humanize = gI;
re.toISOString = Hs;
re.toString = Hs;
re.toJSON = Hs;
re.locale = Em;
re.localeData = bm;
re.toIsoString = En(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  Hs
);
re.lang = Om;
L("X", 0, 0, "unix");
L("x", 0, 0, "valueOf");
H("x", vs);
H("X", W1);
Ee("X", function(e, n, t) {
  t._d = new Date(parseFloat(e) * 1e3);
});
Ee("x", function(e, n, t) {
  t._d = new Date(Z(e));
});
//! moment.js
y.version = "2.29.4";
N1(be);
y.fn = S;
y.min = l0;
y.max = c0;
y.now = d0;
y.utc = Vn;
y.unix = BN;
y.months = FN;
y.isDate = jo;
y.locale = St;
y.invalid = gs;
y.duration = yn;
y.isMoment = Gn;
y.weekdays = WN;
y.parseZone = jN;
y.localeData = _t;
y.isDuration = Ai;
y.monthsShort = VN;
y.weekdaysMin = KN;
y.defineLocale = qu;
y.updateLocale = jg;
y.locales = Fg;
y.weekdaysShort = XN;
y.normalizeUnits = On;
y.relativeTimeRounding = bI;
y.relativeTimeThreshold = RI;
y.calendarFormat = k0;
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
class NI {
  constructor(n) {
    at(this), this.state = n, this.getters = n.getters, this.storage = n.storage;
  }
  addExecuteMessage(n) {
    console.log(n);
    const t = this.getters.getActiveTab();
    let r = n.output;
    n.error && (r = n.error.split("^")[1].split("at")[0]), this.state.executeMessages.push({
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
const II = [
  { label: "Terminal", key: "terminal" },
  { label: "Test cases", key: "test_cases" }
], AI = () => {
  const e = st(), n = e.state.selectedTerminalTab, t = Ln(
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
    val: II
  };
}, SI = (e) => {
  const { Spring: n } = gr(), [t, r] = n.useSpring(() => ({
    opacity: 1,
    x: 0
  }));
  return Oc(e, () => ({
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
}, vI = _e.div`
  color: ${Me("light")};
  font-size: ${({ theme: e }) => e.fz7};
  margin-top: 4px;
  font-weight: normal;
  height: 200px;
  overflow-y: auto;
  overflow-x: hidden;
  ${ms()};

  span:first-child {
    margin-top: 22px;
  }
`, GI = _e.span`
  color: ${Me("light")};
  display: block;
  margin-top: 17px;
  cursor: pointer;
  font-size: ${({ theme: e }) => e.fz7};
  em {
    color: ${({ $isError: e }) => e ? "red" : Me("light")};
    font-weight: bold;
    font-style: italic;
  }
`, CI = ir(
  ({ children: e }, n) => {
    const t = ee(null), r = () => {
      t.current.scrollTo(0, t.current.scrollHeight);
    };
    return Oc(n, () => ({
      scrollToBottom: () => {
        r(), setTimeout(r, 50);
      }
    })), /* @__PURE__ */ E(vI, { ref: t, children: e });
  }
), DI = an(
  ir((e, n) => {
    const t = ee(null), r = ee(null), { isTerminalOpened: o } = Uf(), { executeMessages: i } = Tn(), { spring: s, SpringDiv: a } = SI(n), u = () => {
      r.current.scrollIntoView({ behavior: "smooth" });
    };
    return Ne(() => {
      t.current.scrollToBottom();
    }, [i.length, o]), /* @__PURE__ */ z(CI, { ref: t, children: [
      "CodeGear output console.",
      /* @__PURE__ */ z(a, { style: { ...s }, children: [
        i.map((_, c) => /* @__PURE__ */ z(
          GI,
          {
            $isError: _.isError,
            onClick: u,
            children: [
              "User [",
              _.fileName,
              "] [",
              _.date,
              "] > ",
              /* @__PURE__ */ E("em", { children: _.message })
            ]
          },
          c
        )),
        /* @__PURE__ */ E("div", { ref: r })
      ] })
    ] });
  })
), yI = _e.div`
  ${$d({
  right: "44px",
  top: "23px"
})}
  ${yt("flex-end")};
  gap: 23px;
  ${ye("100px", "22px")};
  cursor: pointer;
  svg {
    path {
      stroke: ${Me("secondaryGrey")};
      ${({ theme: e }) => Ma(e.light)};
    }
    ${ye("22px")}
    color: ${Me("secondaryGrey")};
    ${({ theme: e }) => Ma(e.light)}
  }
`, UI = _e(Rc)`
  ${BO(0, 6)};

  .ant-tabs-nav::before {
    border-bottom: none;
  }
  .ant-tabs-tab-active div {
    color: ${fi("light")};
  }
  .ant-tabs-tab:hover,
  .ant-tabs-tab:active {
    color: ${Me("light")};
  }
  .ant-tabs-ink-bar {
    background: ${Me("light")};
  }
  .ant-tabs-tab {
    padding: 7px 0 !important;
  }

  font-size: ${({ theme: e }) => e.fz6};
`, HI = an(() => {
  const e = st(), { isTerminalOpened: n } = e.state, t = AI(), r = pn(), o = ee(), i = (u) => {
    t.set(u);
  }, s = Ln(() => {
    e.update({ isTerminalOpened: !1 });
  }, []), a = async () => {
    await o.current?.close(), r.terminal.clearExecuteMessages();
  };
  return /* @__PURE__ */ z(wh, { onClose: s, isOpen: n, height: 300, children: [
    /* @__PURE__ */ E(
      UI,
      {
        items: t.val,
        size: "large",
        onChange: i,
        activeKey: t.key
      }
    ),
    /* @__PURE__ */ E(uo, { when: t.key === "terminal", children: /* @__PURE__ */ E(DI, { ref: o }) }),
    /* @__PURE__ */ E(uo, { when: t.key === "test_cases", children: "test cases" }),
    /* @__PURE__ */ z(yI, { children: [
      /* @__PURE__ */ E(r1, { onClick: a }),
      /* @__PURE__ */ E(qR, { onClick: s })
    ] })
  ] });
}), wI = () => {
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
}, PI = () => hs().editor.getEditors()[0], MI = () => {
  const e = PI();
  return {
    find: async () => {
      await e.getAction("actions.find")?.run();
    },
    replace: async () => {
      await e.getAction("editor.action.startFindReplaceAction")?.run();
    }
  };
}, kI = _e.div`
  background: ${({ theme: e }) => e.grey};
  border-right: 2px solid ${({ theme: e }) => e.lightGrey};
  box-sizing: border-box;
  ${ye("52px", "100%")};
  ${yt("space-between", "center", "column")};
  padding-bottom: 15px;
  z-index: 3;
`, Kn = _e.div`
  ${ye("23px")}
  svg {
    ${ye()}
    color: ${({ theme: e }) => e.secondaryGrey};
    ${({ theme: e }) => Ma(e.light)}
  }
  transition: transform 200ms;
  &:hover {
    transform: scale(1.1);
  }
  margin-top: 20px;
  cursor: pointer;
  user-select: none;
`, xI = () => {
  const e = cR(), n = st(), t = MI(), r = Nc("isTerminalOpened"), { spring: o, animatedDiv: i } = wI(), s = () => {
    n.toggle("isSettingsOpened");
  }, a = () => {
    n.toggle("isHtmlPreviewOpened");
  };
  return /* @__PURE__ */ z(kI, { as: i, style: o, children: [
    /* @__PURE__ */ z("div", { children: [
      /* @__PURE__ */ E(Kn, { onClick: t.find, children: /* @__PURE__ */ E(n1, {}) }),
      /* @__PURE__ */ E(Kn, { onClick: t.replace, children: /* @__PURE__ */ E(e1, {}) }),
      /* @__PURE__ */ E(Kn, { onClick: e, children: /* @__PURE__ */ E(s1, {}) }),
      /* @__PURE__ */ E(Kn, { onClick: r("terminal"), children: /* @__PURE__ */ E(t1, {}) }),
      /* @__PURE__ */ E(Kn, { onClick: r("test_cases"), children: /* @__PURE__ */ E(o1, {}) }),
      /* @__PURE__ */ E(Kn, { onClick: a, children: /* @__PURE__ */ E(QR, {}) })
    ] }),
    /* @__PURE__ */ z("div", { children: [
      /* @__PURE__ */ E(Kn, { onClick: s, children: /* @__PURE__ */ E(a1, {}) }),
      /* @__PURE__ */ E(Kn, { children: /* @__PURE__ */ E(gc, { to: fh.ABOUT, children: /* @__PURE__ */ E(i1, {}) }) })
    ] })
  ] });
}, LI = () => /* @__PURE__ */ E(Bo, { children: /* @__PURE__ */ E(xI, {}) });
class BI {
  constructor(n) {
    at(this), this.state = n, this.getters = n.getters;
  }
  saveContent(n, t) {
    this.getters.getActiveTab(t).setTabContent(n);
  }
}
let si;
const jI = new Uint8Array(16);
function FI() {
  if (!si && (si = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !si))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return si(jI);
}
const Be = [];
for (let e = 0; e < 256; ++e)
  Be.push((e + 256).toString(16).slice(1));
function VI(e, n = 0) {
  return (Be[e[n + 0]] + Be[e[n + 1]] + Be[e[n + 2]] + Be[e[n + 3]] + "-" + Be[e[n + 4]] + Be[e[n + 5]] + "-" + Be[e[n + 6]] + Be[e[n + 7]] + "-" + Be[e[n + 8]] + Be[e[n + 9]] + "-" + Be[e[n + 10]] + Be[e[n + 11]] + Be[e[n + 12]] + Be[e[n + 13]] + Be[e[n + 14]] + Be[e[n + 15]]).toLowerCase();
}
const WI = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), kl = {
  randomUUID: WI
};
function XI(e, n, t) {
  if (kl.randomUUID && !n && !e)
    return kl.randomUUID();
  e = e || {};
  const r = e.random || (e.rng || FI)();
  if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, n) {
    t = t || 0;
    for (let o = 0; o < 16; ++o)
      n[t + o] = r[o];
    return n;
  }
  return VI(r);
}
class ym {
  constructor({ lastNumber: n, fileData: t, instance: r }) {
    this._key = XI(), this._fileHandle = null, this._label = "Untitled", this._content = "", this.idx = 0, this.lang = "text", this.wasChanged = !1, at(this), r ? this.initUsingInstance(r) : t && this.initUsingFileData(t), n && (this.idx = n + 1);
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
const KI = (e) => e.length >= kh;
class YI {
  constructor(n) {
    at(this), this.state = n;
  }
  createTab(n) {
    const t = this.state.content;
    if (KI(t))
      return;
    const r = t.at(-1)?.idx, o = new ym({ fileData: n, lastNumber: r });
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
const $I = () => {
  const [e, n] = We(null);
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
}, zI = (e) => e.map((n) => ({
  label: n.getLabel(),
  key: n.getKeyId()
})), JI = _e(Rc)`
  color: ${fi("secondaryGrey")};
  height: 50px;
  margin: 12px;
  min-width: 300px;
  .ant-tabs-nav::before {
    border-bottom: none;
  }
  .ant-tabs-tab {
    background: ${fi("grey")};
  }
  .ant-tabs-tab-active {
    background: #2e3139 !important;
  }
  .ant-tabs-tab-btn {
    color: ${fi("secondaryGrey")};
  }
`, qI = an(() => {
  const { activeKey: e, content: n } = Tn(), t = pn(), r = zI(n), o = $I(), i = o.protect(
    (u, _) => {
      _ === "add" ? t.tabs.createTab() : o.on(u);
    }
  ), s = o.protect((u) => {
    t.tabs.changeActiveTab(u);
  });
  return /* @__PURE__ */ E(Er, { children: /* @__PURE__ */ E(
    Df,
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
      children: /* @__PURE__ */ E(
        JI,
        {
          type: "editable-card",
          onChange: s,
          activeKey: e,
          onEdit: i,
          items: hd(r),
          hideAdd: n.length >= kh
        }
      )
    }
  ) });
}), QI = [1, 2, 3, 4, 5, 6, 7, 8, 9], ZI = () => {
  const e = ph(), { tabs: n } = pn(), { content: t } = Tn();
  Ne(() => (e.on(
    Object.fromEntries(
      QI.map((r) => {
        const i = t[r - 1]?.getKeyId();
        return [r.toString(), i ? () => n.changeActiveTab(i) : null];
      })
    )
  ), () => {
    e.clear();
  }), [t.length]);
}, eA = (e) => Wa(e) ? "name" in e && typeof e.name == "string" && "type" in e && typeof e.type == "string" && "content" in e && typeof e.content == "string" : !1, Um = (e) => {
  const n = e.split(".").at(-1);
  return nA(n) ? [Lu[n], n] : ["text", n];
};
function nA(e) {
  return e in Lu;
}
const ws = {
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
}, tA = {
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
}, rA = () => async () => {
  if ("showOpenFilePicker" in window) {
    const [e] = await window.showOpenFilePicker(tA), n = await e.getFile(), t = await n.text(), [r] = Um(n.name);
    return {
      name: n.name,
      type: n.type,
      content: t,
      fileHandle: e,
      language: r
    };
  }
  console.warn(ws.NotSupportedByBrowser());
}, oA = () => async (e, n) => {
  try {
    let t = e;
    UR(e?.createWritable) || (t = await window.showSaveFilePicker());
    const r = await t.createWritable();
    return await r.write(n), await r.close(), t;
  } catch {
    console.warn(ws.NotSupportedByBrowser());
  }
}, Hm = () => {
  const e = rA(), n = oA(), t = pn(), r = go();
  return {
    openFile: Ln(async () => {
      const s = await e();
      eA(s) && t.tabs.createTab(s);
    }, [t.tabs, e]),
    saveFile: async () => {
      const s = r.getActiveTab(), a = s.getFileHandle(), u = s.getContent();
      if (!s.wasChanged)
        return;
      const _ = await n(a, u);
      _ && (s.setFileHandle(_), s.lang = Um(_.name));
    }
  };
}, iA = () => {
  const e = pn(), n = ph(), { openFile: t, saveFile: r } = Hm();
  ZI();
  const o = Nc("isTerminalOpened"), i = st(), s = Ln(() => {
    i.toggle("isSettingsOpened");
  }, [i]);
  Ne(() => (n.on({
    [Ye.O]: t,
    [Ye.S]: r,
    [Ye.N]: () => {
      e.tabs.createTab();
    },
    [Ye.T]: () => {
      e.tabs.removeTab();
    },
    [Ye.P]: o("terminal"),
    [Ye.J]: o("test_cases"),
    [Ye.Q]: s
  }), () => {
    n.clear();
  }), [i.state.isSettingsOpened]);
}, sA = an(({ onChange: e }) => {
  const { fontSize: n, tabSize: t } = Tn(), r = go(), o = r.getActiveTabText(), i = r.getActiveLanguage();
  return /* @__PURE__ */ E(
    wd,
    {
      height: "90vh",
      theme: "vs-dark",
      onChange: e,
      language: i,
      value: hd(o),
      options: vd({
        fontSize: n,
        tabSize: t
      })
    }
  );
}), aA = ({ children: e }) => {
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
  return /* @__PURE__ */ E(n.a.div, { style: { ...t }, children: e });
}, uA = (e) => /* @__PURE__ */ E(aA, { children: /* @__PURE__ */ E(sA, { ...e }) }), _A = _e.div`
  width: 100%;
`, lA = _e.div`
  ${yt("space-between")}
  ${ye("100%", "48px")}
  margin-bottom: 10px;
`, cA = _e.div`
  width: 30%;
  display: flex;
  gap: 30px;
  align-items: flex-end;
`, dA = an(() => {
  const e = pn(), { theme: n, content: t, customBackground: r, customColor: o } = Tn(), i = hu(), s = bf(), a = wu(() => {
    i.set("EDITOR_CONTENT_DATA", t);
  }, 1e3);
  iA();
  const u = hs(), _ = (c) => {
    xu(c) && (e.editor.saveContent(c), a());
  };
  return Ne(() => {
    u.editor.setTheme(n);
  }, [n]), Ne(() => {
    s({
      background: r,
      color: o
    });
  }, [r, o]), /* @__PURE__ */ z(_A, { children: [
    /* @__PURE__ */ z(lA, { children: [
      /* @__PURE__ */ E(qI, {}),
      /* @__PURE__ */ z(cA, { children: [
        /* @__PURE__ */ E(Lh, {}),
        /* @__PURE__ */ E(xh, {})
      ] })
    ] }),
    /* @__PURE__ */ E(Bo, { children: /* @__PURE__ */ E(uA, { onChange: _ }) })
  ] });
}), hA = {
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
class mA {
  constructor(n) {
    at(this), this.state = n, this.getters = n.getters, this.actions = n.actions;
  }
  async requestCodeExecution() {
    const { NOT_SUPPORTED: n, ERRORS_IN_CODE: t, SUCCESS: r, NETWORK_ERROR: o } = hA;
    if (!this.getters.isAllowedToExecute())
      return n;
    const i = this.getters.getActiveTab(), s = {
      code: i.getContent(),
      language: i.lang
    };
    try {
      const a = await _R.post(
        uR.CODE_EXECUTOR_API,
        s
      );
      return this.actions.terminal.addExecuteMessage(a.data), a.data.error ? t : r;
    } catch {
      return o;
    }
  }
}
const wm = () => {
  const { codeRunner: e } = Hf(), n = st(), t = DR();
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
var fA = Object.defineProperty, pA = (e, n) => {
  for (var t in n)
    fA(e, t, { get: n[t], enumerable: !0 });
}, fn = {};
pA(fn, {
  assign: () => Fm,
  colors: () => vt,
  createStringInterpolator: () => d_,
  skipAnimation: () => jm,
  to: () => Bm,
  willAdvance: () => h_
});
var s_ = Ko(), X = (e) => Xo(e, s_), a_ = Ko();
X.write = (e) => Xo(e, a_);
var Ps = Ko();
X.onStart = (e) => Xo(e, Ps);
var u_ = Ko();
X.onFrame = (e) => Xo(e, u_);
var __ = Ko();
X.onFinish = (e) => Xo(e, __);
var rr = [];
X.setTimeout = (e, n) => {
  const t = X.now() + n, r = () => {
    const i = rr.findIndex((s) => s.cancel == r);
    ~i && rr.splice(i, 1), Rt -= ~i ? 1 : 0;
  }, o = { time: t, handler: e, cancel: r };
  return rr.splice(Pm(t), 0, o), Rt += 1, Mm(), o;
};
var Pm = (e) => ~(~rr.findIndex((n) => n.time > e) || ~rr.length);
X.cancel = (e) => {
  Ps.delete(e), u_.delete(e), __.delete(e), s_.delete(e), a_.delete(e);
};
X.sync = (e) => {
  Za = !0, X.batchedUpdates(e), Za = !1;
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
    Ps.delete(t), n = null;
  }, r;
};
var l_ = typeof window < "u" ? window.requestAnimationFrame : (
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  () => {
  }
);
X.use = (e) => l_ = e;
X.now = typeof performance < "u" ? () => performance.now() : Date.now;
X.batchedUpdates = (e) => e();
X.catch = console.error;
X.frameLoop = "always";
X.advance = () => {
  X.frameLoop !== "demand" ? console.warn(
    "Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"
  ) : xm();
};
var bt = -1, Rt = 0, Za = !1;
function Xo(e, n) {
  Za ? (n.delete(e), e(0)) : (n.add(e), Mm());
}
function Mm() {
  bt < 0 && (bt = 0, X.frameLoop !== "demand" && l_(km));
}
function TA() {
  bt = -1;
}
function km() {
  ~bt && (l_(km), X.batchedUpdates(xm));
}
function xm() {
  const e = bt;
  bt = X.now();
  const n = Pm(bt);
  if (n && (Lm(rr.splice(0, n), (t) => t.handler()), Rt -= n), !Rt) {
    TA();
    return;
  }
  Ps.flush(), s_.flush(e ? Math.min(64, bt - e) : 16.667), u_.flush(), a_.flush(), __.flush();
}
function Ko() {
  let e = /* @__PURE__ */ new Set(), n = e;
  return {
    add(t) {
      Rt += n == e && !e.has(t) ? 1 : 0, e.add(t);
    },
    delete(t) {
      return Rt -= n == e && e.has(t) ? 1 : 0, e.delete(t);
    },
    flush(t) {
      n.size && (e = /* @__PURE__ */ new Set(), Rt -= n.size, Lm(n, (r) => r(t) && e.add(r)), Rt += e.size, n = e);
    }
  };
}
function Lm(e, n) {
  e.forEach((t) => {
    try {
      n(t);
    } catch (r) {
      X.catch(r);
    }
  });
}
function eu() {
}
var EA = (e, n, t) => Object.defineProperty(e, n, { value: t, writable: !0, configurable: !0 }), I = {
  arr: Array.isArray,
  obj: (e) => !!e && e.constructor.name === "Object",
  fun: (e) => typeof e == "function",
  str: (e) => typeof e == "string",
  num: (e) => typeof e == "number",
  und: (e) => e === void 0
};
function $n(e, n) {
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
function jn(e, n, t) {
  if (I.arr(e)) {
    for (let r = 0; r < e.length; r++)
      n.call(t, e[r], `${r}`);
    return;
  }
  for (const r in e)
    e.hasOwnProperty(r) && n.call(t, e[r], r);
}
var ze = (e) => I.und(e) ? [] : I.arr(e) ? e : [e];
function $r(e, n) {
  if (e.size) {
    const t = Array.from(e);
    e.clear(), B(t, n);
  }
}
var jr = (e, ...n) => $r(e, (t) => t(...n)), c_ = () => typeof window > "u" || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent), d_, Bm, vt = null, jm = !1, h_ = eu, Fm = (e) => {
  e.to && (Bm = e.to), e.now && (X.now = e.now), e.colors !== void 0 && (vt = e.colors), e.skipAnimation != null && (jm = e.skipAnimation), e.createStringInterpolator && (d_ = e.createStringInterpolator), e.requestAnimationFrame && X.use(e.requestAnimationFrame), e.batchedUpdates && (X.batchedUpdates = e.batchedUpdates), e.willAdvance && (h_ = e.willAdvance), e.frameLoop && (X.frameLoop = e.frameLoop);
}, zr = /* @__PURE__ */ new Set(), hn = [], fa = [], ts = 0, Yo = {
  get idle() {
    return !zr.size && !hn.length;
  },
  /** Advance the given animation on every frame until idle. */
  start(e) {
    ts > e.priority ? (zr.add(e), X.onStart(OA)) : (Vm(e), X(nu));
  },
  /** Advance all animations by the given time. */
  advance: nu,
  /** Call this when an animation's priority changes. */
  sort(e) {
    if (ts)
      X.onFrame(() => Yo.sort(e));
    else {
      const n = hn.indexOf(e);
      ~n && (hn.splice(n, 1), Wm(e));
    }
  },
  /**
   * Clear all animations. For testing purposes.
   *
   * ☠️ Never call this from within the frameloop.
   */
  clear() {
    hn = [], zr.clear();
  }
};
function OA() {
  zr.forEach(Vm), zr.clear(), X(nu);
}
function Vm(e) {
  hn.includes(e) || Wm(e);
}
function Wm(e) {
  hn.splice(
    bA(hn, (n) => n.priority > e.priority),
    0,
    e
  );
}
function nu(e) {
  const n = fa;
  for (let t = 0; t < hn.length; t++) {
    const r = hn[t];
    ts = r.priority, r.idle || (h_(r), r.advance(e), r.idle || n.push(r));
  }
  return ts = 0, fa = hn, fa.length = 0, hn = n, hn.length > 0;
}
function bA(e, n) {
  const t = e.findIndex(n);
  return t < 0 ? e.length : t;
}
var RA = (e, n, t) => Math.min(Math.max(t, e), n), gA = {
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
}, Nn = "[-+]?\\d*\\.?\\d+", rs = Nn + "%";
function Ms(...e) {
  return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)";
}
var NA = new RegExp("rgb" + Ms(Nn, Nn, Nn)), IA = new RegExp("rgba" + Ms(Nn, Nn, Nn, Nn)), AA = new RegExp("hsl" + Ms(Nn, rs, rs)), SA = new RegExp(
  "hsla" + Ms(Nn, rs, rs, Nn)
), vA = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, GA = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, CA = /^#([0-9a-fA-F]{6})$/, DA = /^#([0-9a-fA-F]{8})$/;
function yA(e) {
  let n;
  return typeof e == "number" ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (n = CA.exec(e)) ? parseInt(n[1] + "ff", 16) >>> 0 : vt && vt[e] !== void 0 ? vt[e] : (n = NA.exec(e)) ? (Wt(n[1]) << 24 | // r
  Wt(n[2]) << 16 | // g
  Wt(n[3]) << 8 | // b
  255) >>> // a
  0 : (n = IA.exec(e)) ? (Wt(n[1]) << 24 | // r
  Wt(n[2]) << 16 | // g
  Wt(n[3]) << 8 | // b
  Bl(n[4])) >>> // a
  0 : (n = vA.exec(e)) ? parseInt(
    n[1] + n[1] + // r
    n[2] + n[2] + // g
    n[3] + n[3] + // b
    "ff",
    // a
    16
  ) >>> 0 : (n = DA.exec(e)) ? parseInt(n[1], 16) >>> 0 : (n = GA.exec(e)) ? parseInt(
    n[1] + n[1] + // r
    n[2] + n[2] + // g
    n[3] + n[3] + // b
    n[4] + n[4],
    // a
    16
  ) >>> 0 : (n = AA.exec(e)) ? (xl(
    Ll(n[1]),
    // h
    ai(n[2]),
    // s
    ai(n[3])
    // l
  ) | 255) >>> // a
  0 : (n = SA.exec(e)) ? (xl(
    Ll(n[1]),
    // h
    ai(n[2]),
    // s
    ai(n[3])
    // l
  ) | Bl(n[4])) >>> // a
  0 : null;
}
function pa(e, n, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? e + (n - e) * 6 * t : t < 1 / 2 ? n : t < 2 / 3 ? e + (n - e) * (2 / 3 - t) * 6 : e;
}
function xl(e, n, t) {
  const r = t < 0.5 ? t * (1 + n) : t + n - t * n, o = 2 * t - r, i = pa(o, r, e + 1 / 3), s = pa(o, r, e), a = pa(o, r, e - 1 / 3);
  return Math.round(i * 255) << 24 | Math.round(s * 255) << 16 | Math.round(a * 255) << 8;
}
function Wt(e) {
  const n = parseInt(e, 10);
  return n < 0 ? 0 : n > 255 ? 255 : n;
}
function Ll(e) {
  return (parseFloat(e) % 360 + 360) % 360 / 360;
}
function Bl(e) {
  const n = parseFloat(e);
  return n < 0 ? 0 : n > 1 ? 255 : Math.round(n * 255);
}
function ai(e) {
  const n = parseFloat(e);
  return n < 0 ? 0 : n > 100 ? 1 : n / 100;
}
function jl(e) {
  let n = yA(e);
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
    return d_(e);
  const r = e, o = r.output, i = r.range || [0, 1], s = r.extrapolateLeft || r.extrapolate || "extend", a = r.extrapolateRight || r.extrapolate || "extend", u = r.easing || ((_) => _);
  return (_) => {
    const c = HA(_, i);
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
function HA(e, n) {
  for (var t = 1; t < n.length - 1 && !(n[t] >= e); ++t)
    ;
  return t - 1;
}
var wA = (e, n = "end") => (t) => {
  t = n === "end" ? Math.min(t, 0.999) : Math.max(t, 1e-3);
  const r = t * e, o = n === "end" ? Math.floor(r) : Math.ceil(r);
  return RA(0, 1, o / e);
}, os = 1.70158, ui = os * 1.525, Fl = os + 1, Vl = 2 * Math.PI / 3, Wl = 2 * Math.PI / 4.5, _i = (e) => e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375 : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375, Xm = {
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
  easeInBack: (e) => Fl * e * e * e - os * e * e,
  easeOutBack: (e) => 1 + Fl * Math.pow(e - 1, 3) + os * Math.pow(e - 1, 2),
  easeInOutBack: (e) => e < 0.5 ? Math.pow(2 * e, 2) * ((ui + 1) * 2 * e - ui) / 2 : (Math.pow(2 * e - 2, 2) * ((ui + 1) * (e * 2 - 2) + ui) + 2) / 2,
  easeInElastic: (e) => e === 0 ? 0 : e === 1 ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((e * 10 - 10.75) * Vl),
  easeOutElastic: (e) => e === 0 ? 0 : e === 1 ? 1 : Math.pow(2, -10 * e) * Math.sin((e * 10 - 0.75) * Vl) + 1,
  easeInOutElastic: (e) => e === 0 ? 0 : e === 1 ? 1 : e < 0.5 ? -(Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * Wl)) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * Wl) / 2 + 1,
  easeInBounce: (e) => 1 - _i(1 - e),
  easeOutBounce: _i,
  easeInOutBounce: (e) => e < 0.5 ? (1 - _i(1 - 2 * e)) / 2 : (1 + _i(2 * e - 1)) / 2,
  steps: wA
}, ho = Symbol.for("FluidValue.get"), Tr = Symbol.for("FluidValue.observers"), ln = (e) => !!(e && e[ho]), Ze = (e) => e && e[ho] ? e[ho]() : e, Xl = (e) => e[Tr] || null;
function PA(e, n) {
  e.eventObserved ? e.eventObserved(n) : e(n);
}
function mo(e, n) {
  const t = e[Tr];
  t && t.forEach((r) => {
    PA(r, n);
  });
}
var Km = class {
  constructor(e) {
    if (!e && !(e = this.get))
      throw Error("Unknown getter");
    MA(this, e);
  }
}, MA = (e, n) => Ym(e, ho, n);
function Ar(e, n) {
  if (e[ho]) {
    let t = e[Tr];
    t || Ym(e, Tr, t = /* @__PURE__ */ new Set()), t.has(n) || (t.add(n), e.observerAdded && e.observerAdded(t.size, n));
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
var Ym = (e, n, t) => Object.defineProperty(e, n, {
  value: t,
  writable: !0,
  configurable: !0
}), vi = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, kA = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi, Kl = new RegExp(`(${vi.source})(%|[a-z]+)`, "i"), xA = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi, ks = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/, $m = (e) => {
  const [n, t] = LA(e);
  if (!n || c_())
    return e;
  const r = window.getComputedStyle(document.documentElement).getPropertyValue(n);
  if (r)
    return r.trim();
  if (t && t.startsWith("--")) {
    const o = window.getComputedStyle(document.documentElement).getPropertyValue(t);
    return o || e;
  } else {
    if (t && ks.test(t))
      return $m(t);
    if (t)
      return t;
  }
  return e;
}, LA = (e) => {
  const n = ks.exec(e);
  if (!n)
    return [,];
  const [, t, r] = n;
  return [t, r];
}, Ta, BA = (e, n, t, r, o) => `rgba(${Math.round(n)}, ${Math.round(t)}, ${Math.round(r)}, ${o})`, zm = (e) => {
  Ta || (Ta = vt ? (
    // match color names, ignore partial matches
    new RegExp(`(${Object.keys(vt).join("|")})(?!\\w)`, "g")
  ) : (
    // never match
    /^\b$/
  ));
  const n = e.output.map((i) => Ze(i).replace(ks, $m).replace(kA, jl).replace(Ta, jl)), t = n.map((i) => i.match(vi).map(Number)), o = t[0].map(
    (i, s) => t.map((a) => {
      if (!(s in a))
        throw Error('The arity of each "output" value must be equal');
      return a[s];
    })
  ).map(
    (i) => pr({ ...e, output: i })
  );
  return (i) => {
    const s = !Kl.test(n[0]) && n.find((u) => Kl.test(u))?.replace(vi, "");
    let a = 0;
    return n[0].replace(
      vi,
      () => `${o[a++](i)}${s || ""}`
    ).replace(xA, BA);
  };
}, m_ = "react-spring: ", Jm = (e) => {
  const n = e;
  let t = !1;
  if (typeof n != "function")
    throw new TypeError(`${m_}once requires a function parameter`);
  return (...r) => {
    t || (n(...r), t = !0);
  };
}, jA = Jm(console.warn);
function qm() {
  jA(
    `${m_}The "interpolate" function is deprecated in v9 (use "to" instead)`
  );
}
var FA = Jm(console.warn);
function VA() {
  FA(
    `${m_}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`
  );
}
function xs(e) {
  return I.str(e) && (e[0] == "#" || /\d/.test(e) || // Do not identify a CSS variable as an AnimatedString if its SSR
  !c_() && ks.test(e) || e in (vt || {}));
}
var Xt, Gi = /* @__PURE__ */ new WeakMap(), WA = (e) => e.forEach(({ target: n, contentRect: t }) => Gi.get(n)?.forEach((r) => r(t)));
function XA(e, n) {
  Xt || typeof ResizeObserver < "u" && (Xt = new ResizeObserver(WA));
  let t = Gi.get(n);
  return t || (t = /* @__PURE__ */ new Set(), Gi.set(n, t)), t.add(e), Xt && Xt.observe(n), () => {
    const r = Gi.get(n);
    r && (r.delete(e), !r.size && Xt && Xt.unobserve(n));
  };
}
var Ci = /* @__PURE__ */ new Set(), wr, KA = () => {
  const e = () => {
    Ci.forEach(
      (n) => n({
        width: window.innerWidth,
        height: window.innerHeight
      })
    );
  };
  return window.addEventListener("resize", e), () => {
    window.removeEventListener("resize", e);
  };
}, YA = (e) => (Ci.add(e), wr || (wr = KA()), () => {
  Ci.delete(e), !Ci.size && wr && (wr(), wr = void 0);
}), Qm = (e, { container: n = document.documentElement } = {}) => n === document.documentElement ? YA(e) : XA(e, n), $A = (e, n, t) => n - e === 0 ? 1 : (t - e) / (n - e), zA = {
  x: {
    length: "Width",
    position: "Left"
  },
  y: {
    length: "Height",
    position: "Top"
  }
}, JA = class {
  constructor(e, n) {
    this.createAxis = () => ({
      current: 0,
      progress: 0,
      scrollLength: 0
    }), this.updateAxis = (t) => {
      const r = this.info[t], { length: o, position: i } = zA[t];
      r.current = this.container[`scroll${i}`], r.scrollLength = this.container["scroll" + o] - this.container["client" + o], r.progress = $A(0, r.scrollLength, r.current);
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
}, Pr = /* @__PURE__ */ new WeakMap(), Yl = /* @__PURE__ */ new WeakMap(), Ea = /* @__PURE__ */ new WeakMap(), $l = (e) => e === document.documentElement ? window : e, qA = (e, { container: n = document.documentElement } = {}) => {
  let t = Ea.get(n);
  t || (t = /* @__PURE__ */ new Set(), Ea.set(n, t));
  const r = new JA(e, n);
  if (t.add(r), !Pr.has(n)) {
    const i = () => (t?.forEach((a) => a.advance()), !0);
    Pr.set(n, i);
    const s = $l(n);
    window.addEventListener("resize", i, { passive: !0 }), n !== document.documentElement && Yl.set(n, Qm(i, { container: n })), s.addEventListener("scroll", i, { passive: !0 });
  }
  const o = Pr.get(n);
  return X(o), () => {
    X.cancel(o);
    const i = Ea.get(n);
    if (!i || (i.delete(r), i.size))
      return;
    const s = Pr.get(n);
    Pr.delete(n), s && ($l(n).removeEventListener("scroll", s), window.removeEventListener("resize", s), Yl.get(n)?.());
  };
};
function QA(e) {
  const n = ee(null);
  return n.current === null && (n.current = e()), n.current;
}
var tn = c_() ? Ne : Ec, ZA = () => {
  const e = ee(!1);
  return tn(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
};
function f_() {
  const e = We()[1], n = ZA();
  return () => {
    n.current && e(Math.random());
  };
}
function eS(e, n) {
  const [t] = We(
    () => ({
      inputs: n,
      result: e()
    })
  ), r = ee(), o = r.current;
  let i = o;
  return i ? n && i.inputs && nS(n, i.inputs) || (i = {
    inputs: n,
    result: e()
  }) : i = t, Ne(() => {
    r.current = i, o == t && (t.inputs = t.result = void 0);
  }, [i]), i.result;
}
function nS(e, n) {
  if (e.length !== n.length)
    return !1;
  for (let t = 0; t < e.length; t++)
    if (e[t] !== n[t])
      return !1;
  return !0;
}
var Ls = (e) => Ne(e, tS), tS = [];
function tu(e) {
  const n = ee();
  return Ne(() => {
    n.current = e;
  }), n.current;
}
var rS = () => {
  const [e, n] = We(null);
  return tn(() => {
    const t = window.matchMedia("(prefers-reduced-motion)"), r = (o) => {
      n(o.matches), Fm({
        skipAnimation: o.matches
      });
    };
    return r(t), t.addEventListener("change", r), () => {
      t.removeEventListener("change", r);
    };
  }, []), e;
}, po = Symbol.for("Animated:node"), oS = (e) => !!e && e[po] === e, Un = (e) => e && e[po], p_ = (e, n) => EA(e, po, n), Bs = (e) => e && e[po] && e[po].getPayload(), Zm = class {
  constructor() {
    p_(this, this);
  }
  /** Get every `AnimatedValue` used by this node. */
  getPayload() {
    return this.payload || [];
  }
}, $o = class extends Zm {
  constructor(e) {
    super(), this._value = e, this.done = !0, this.durationProgress = 0, I.num(this._value) && (this.lastPosition = this._value);
  }
  /** @internal */
  static create(e) {
    return new $o(e);
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
}, To = class extends $o {
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
}, is = { dependencies: null }, js = class extends Zm {
  constructor(e) {
    super(), this.source = e, this.setValue(e);
  }
  getValue(e) {
    const n = {};
    return jn(this.source, (t, r) => {
      oS(t) ? n[r] = t.getValue(e) : ln(t) ? n[r] = Ze(t) : e || (n[r] = t);
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
      return jn(e, this._addToPayload, n), Array.from(n);
    }
  }
  /** Add to a payload set. */
  _addToPayload(e) {
    is.dependencies && ln(e) && is.dependencies.add(e);
    const n = Bs(e);
    n && B(n, (t) => this.add(t));
  }
}, ef = class extends js {
  constructor(e) {
    super(e);
  }
  /** @internal */
  static create(e) {
    return new ef(e);
  }
  getValue() {
    return this.source.map((e) => e.getValue());
  }
  setValue(e) {
    const n = this.getPayload();
    return e.length == n.length ? n.map((t, r) => t.setValue(e[r])).some(Boolean) : (super.setValue(e.map(iS)), !0);
  }
};
function iS(e) {
  return (xs(e) ? To : $o).create(e);
}
function ru(e) {
  const n = Un(e);
  return n ? n.constructor : I.arr(e) ? ef : xs(e) ? To : $o;
}
var zl = (e, n) => {
  const t = (
    // Function components must use "forwardRef" to avoid being
    // re-rendered on every animation frame.
    !I.fun(e) || e.prototype && e.prototype.isReactComponent
  );
  return ir((r, o) => {
    const i = ee(null), s = t && // eslint-disable-next-line react-hooks/rules-of-hooks
    Ln(
      (d) => {
        i.current = uS(o, d);
      },
      [o]
    ), [a, u] = aS(r, n), _ = f_(), c = () => {
      const d = i.current;
      if (t && !d)
        return;
      (d ? n.applyAnimatedValues(d, a.getValue(!0)) : !1) === !1 && _();
    }, l = new sS(c, u), f = ee();
    tn(() => (f.current = l, B(u, (d) => Ar(d, l)), () => {
      f.current && (B(
        f.current.deps,
        (d) => fo(d, f.current)
      ), X.cancel(f.current.update));
    })), Ne(c, []), Ls(() => () => {
      const d = f.current;
      B(d.deps, (h) => fo(h, d));
    });
    const T = n.getComponentProps(a.getValue());
    return /* @__PURE__ */ sn.createElement(e, { ...T, ref: s });
  });
}, sS = class {
  constructor(e, n) {
    this.update = e, this.deps = n;
  }
  eventObserved(e) {
    e.type == "change" && X.write(this.update);
  }
};
function aS(e, n) {
  const t = /* @__PURE__ */ new Set();
  return is.dependencies = t, e.style && (e = {
    ...e,
    style: n.createAnimatedStyle(e.style)
  }), e = new js(e), is.dependencies = null, [e, t];
}
function uS(e, n) {
  return e && (I.fun(e) ? e(n) : e.current = n), n;
}
var Jl = Symbol.for("AnimatedComponent"), _S = (e, {
  applyAnimatedValues: n = () => !1,
  createAnimatedStyle: t = (o) => new js(o),
  getComponentProps: r = (o) => o
} = {}) => {
  const o = {
    applyAnimatedValues: n,
    createAnimatedStyle: t,
    getComponentProps: r
  }, i = (s) => {
    const a = ql(s) || "Anonymous";
    return I.str(s) ? s = i[s] || (i[s] = zl(s, o)) : s = s[Jl] || (s[Jl] = zl(s, o)), s.displayName = `Animated(${a})`, s;
  };
  return jn(e, (s, a) => {
    I.arr(e) && (a = ql(s)), i[a] = i(s);
  }), {
    animated: i
  };
}, ql = (e) => I.str(e) ? e : e && I.str(e.displayName) ? e.displayName : I.fun(e) && e.name || null, lS = class {
};
function $e(e, ...n) {
  return I.fun(e) ? e(...n) : e;
}
var Jr = (e, n) => e === !0 || !!(n && e && (I.fun(e) ? e(n) : ze(e).includes(n))), nf = (e, n) => I.obj(e) ? n && e[n] : e, tf = (e, n) => e.default === !0 ? e[n] : e.default ? e.default[n] : void 0, cS = (e) => e, Fs = (e, n = cS) => {
  let t = dS;
  e.default && e.default !== !0 && (e = e.default, t = Object.keys(e));
  const r = {};
  for (const o of t) {
    const i = n(e[o], o);
    I.und(i) || (r[o] = i);
  }
  return r;
}, dS = [
  "config",
  "onProps",
  "onStart",
  "onChange",
  "onPause",
  "onResume",
  "onRest"
], hS = {
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
function mS(e) {
  const n = {};
  let t = 0;
  if (jn(e, (r, o) => {
    hS[o] || (n[o] = r, t++);
  }), t)
    return n;
}
function Vs(e) {
  const n = mS(e);
  if (n) {
    const t = { to: n };
    return jn(e, (r, o) => o in n || (t[o] = r)), t;
  }
  return { ...e };
}
function Eo(e) {
  return e = Ze(e), I.arr(e) ? e.map(Eo) : xs(e) ? fn.createStringInterpolator({
    range: [0, 1],
    output: [e, e]
  })(1) : e;
}
function rf(e) {
  for (const n in e)
    return !0;
  return !1;
}
function ou(e) {
  return I.fun(e) || I.arr(e) && I.obj(e[0]);
}
function iu(e, n) {
  e.ref?.delete(e), n?.delete(e);
}
function T_(e, n) {
  n && e.ref !== n && (e.ref?.delete(e), n.add(e), e.ref = n);
}
function fS(e, n, t = 1e3) {
  tn(() => {
    if (n) {
      let r = 0;
      B(e, (o, i) => {
        const s = o.current;
        if (s.length) {
          let a = t * n[i];
          isNaN(a) ? a = r : r = a, B(s, (u) => {
            B(u.queue, (_) => {
              const c = _.delay;
              _.delay = (l) => a + $e(c || 0, l);
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
var of = {
  default: { tension: 170, friction: 26 },
  gentle: { tension: 120, friction: 14 },
  wobbly: { tension: 180, friction: 12 },
  stiff: { tension: 210, friction: 20 },
  slow: { tension: 280, friction: 60 },
  molasses: { tension: 280, friction: 120 }
}, su = {
  ...of.default,
  mass: 1,
  damping: 1,
  easing: Xm.linear,
  clamp: !1
}, pS = class {
  constructor() {
    this.velocity = 0, Object.assign(this, su);
  }
};
function TS(e, n, t) {
  t && (t = { ...t }, Ql(t, n), n = { ...t, ...n }), Ql(e, n), Object.assign(e, n);
  for (const s in su)
    e[s] == null && (e[s] = su[s]);
  let { frequency: r, damping: o } = e;
  const { mass: i } = e;
  return I.und(r) || (r < 0.01 && (r = 0.01), o < 0 && (o = 0), e.tension = Math.pow(2 * Math.PI / r, 2) * i, e.friction = 4 * Math.PI * o * i / r), e;
}
function Ql(e, n) {
  if (!I.und(n.decay))
    e.duration = void 0;
  else {
    const t = !I.und(n.tension) || !I.und(n.friction);
    (t || !I.und(n.frequency) || !I.und(n.damping) || !I.und(n.mass)) && (e.duration = void 0, e.decay = void 0), t && (e.frequency = void 0);
  }
}
var Zl = [], ES = class {
  constructor() {
    this.changed = !1, this.values = Zl, this.toValues = null, this.fromValues = Zl, this.config = new pS(), this.immediate = !1;
  }
};
function sf(e, { key: n, props: t, defaultProps: r, state: o, actions: i }) {
  return new Promise((s, a) => {
    let u, _, c = Jr(t.cancel ?? r?.cancel, n);
    if (c)
      T();
    else {
      I.und(t.pause) || (o.paused = Jr(t.pause, n));
      let d = r?.pause;
      d !== !0 && (d = o.paused || Jr(d, n)), u = $e(t.delay || 0, n), d ? (o.resumeQueue.add(f), i.pause()) : (i.resume(), f());
    }
    function l() {
      o.resumeQueue.add(f), o.timeouts.delete(_), _.cancel(), u = _.time - X.now();
    }
    function f() {
      u > 0 && !fn.skipAnimation ? (o.delayed = !0, _ = X.setTimeout(T, u), o.pauseQueue.add(l), o.timeouts.add(_)) : T();
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
var E_ = (e, n) => n.length == 1 ? n[0] : n.some((t) => t.cancelled) ? or(e.get()) : n.every((t) => t.noop) ? af(e.get()) : Rn(
  e.get(),
  n.every((t) => t.finished)
), af = (e) => ({
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
function uf(e, n, t, r) {
  const { callId: o, parentId: i, onRest: s } = n, { asyncTo: a, promise: u } = t;
  return !i && e === a && !n.reset ? u : t.promise = (async () => {
    t.asyncId = o, t.asyncTo = e;
    const _ = Fs(
      n,
      (m, b) => (
        // The `onRest` prop is only called when the `runAsync` promise is resolved.
        b === "onRest" ? void 0 : m
      )
    );
    let c, l;
    const f = new Promise(
      (m, b) => (c = m, l = b)
    ), T = (m) => {
      const b = (
        // The `cancel` prop or `stop` method was used.
        o <= (t.cancelId || 0) && or(r) || // The async `to` prop was replaced.
        o !== t.asyncId && Rn(r, !1)
      );
      if (b)
        throw m.result = b, l(m), m;
    }, d = (m, b) => {
      const R = new au(), N = new ec();
      return (async () => {
        if (fn.skipAnimation)
          throw Oo(t), N.result = Rn(r, !1), l(N), N;
        T(R);
        const A = I.obj(m) ? { ...m } : { ...b, to: m };
        A.parentId = o, jn(_, (w, k) => {
          I.und(A[k]) && (A[k] = w);
        });
        const p = await r.start(A);
        return T(R), t.paused && await new Promise((w) => {
          t.resumeQueue.add(w);
        }), p;
      })();
    };
    let h;
    if (fn.skipAnimation)
      return Oo(t), Rn(r, !1);
    try {
      let m;
      I.arr(e) ? m = (async (b) => {
        for (const R of b)
          await d(R);
      })(e) : m = Promise.resolve(e(d, r.stop.bind(r))), await Promise.all([m.then(c), f]), h = Rn(r.get(), !0, !1);
    } catch (m) {
      if (m instanceof au)
        h = m.result;
      else if (m instanceof ec)
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
var au = class extends Error {
  constructor() {
    super(
      "An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."
    );
  }
}, ec = class extends Error {
  constructor() {
    super("SkipAnimationSignal");
  }
}, uu = (e) => e instanceof Ws, OS = 1, Ws = class extends Km {
  constructor() {
    super(...arguments), this.id = OS++, this._priority = 0;
  }
  get priority() {
    return this._priority;
  }
  set priority(e) {
    this._priority != e && (this._priority = e, this._onPriorityChange(e));
  }
  /** Get the current value */
  get() {
    const e = Un(this);
    return e && e.getValue();
  }
  /** Create a spring that maps our value to another value */
  to(...e) {
    return fn.to(this, e);
  }
  /** @deprecated Use the `to` method instead. */
  interpolate(...e) {
    return qm(), fn.to(this, e);
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
    this.idle || Yo.sort(this), mo(this, {
      type: "priority",
      parent: this,
      priority: e
    });
  }
}, Lt = Symbol.for("SpringPhase"), _f = 1, _u = 2, lu = 4, Oa = (e) => (e[Lt] & _f) > 0, ht = (e) => (e[Lt] & _u) > 0, Mr = (e) => (e[Lt] & lu) > 0, nc = (e, n) => n ? e[Lt] |= _u | _f : e[Lt] &= ~_u, tc = (e, n) => n ? e[Lt] |= lu : e[Lt] &= ~lu, O_ = class extends Ws {
  constructor(e, n) {
    if (super(), this.animation = new ES(), this.defaultProps = {}, this._state = {
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
    return !(ht(this) || this._state.asyncTo) || Mr(this);
  }
  get goal() {
    return Ze(this.animation.to);
  }
  get velocity() {
    const e = Un(this);
    return e instanceof $o ? e.lastVelocity || 0 : e.getPayload().map((n) => n.lastVelocity || 0);
  }
  /**
   * When true, this value has been animated at least once.
   */
  get hasAnimated() {
    return Oa(this);
  }
  /**
   * When true, this value has an unfinished animation,
   * which is either active or paused.
   */
  get isAnimating() {
    return ht(this);
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
    const { config: i } = r, s = Bs(r.to);
    !s && ln(r.to) && (o = ze(Ze(r.to))), r.values.forEach((_, c) => {
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
        let b;
        const R = i.precision || (h == l ? 5e-3 : Math.min(1, Math.abs(l - h) * 1e-3));
        if (I.und(i.duration))
          if (i.decay) {
            const N = i.decay === !0 ? 0.998 : i.decay, A = Math.exp(-(1 - N) * d);
            T = h + m / (1 - N) * (1 - A), f = Math.abs(_.lastPosition - T) <= R, b = m * A;
          } else {
            b = _.lastVelocity == null ? m : _.lastVelocity;
            const N = i.restVelocity || R / 10, A = i.clamp ? 0 : i.bounce, p = !I.und(A), w = h == l ? _.v0 > 0 : h < l;
            let k, Y = !1;
            const M = 1, j = Math.ceil(e / M);
            for (let Oe = 0; Oe < j && (k = Math.abs(b) > N, !(!k && (f = Math.abs(l - T) <= R, f))); ++Oe) {
              p && (Y = T == l || T > l == w, Y && (b = -b * A, T = l));
              const Te = -i.tension * 1e-6 * (T - l), Ie = -i.friction * 1e-3 * b, x = (Te + Ie) / i.mass;
              b = b + x * M, T = T + b * M;
            }
          }
        else {
          let N = 1;
          i.duration > 0 && (this._memoizedDuration !== i.duration && (this._memoizedDuration = i.duration, _.durationProgress > 0 && (_.elapsedTime = i.duration * _.durationProgress, d = _.elapsedTime += e)), N = (i.progress || 0) + d / this._memoizedDuration, N = N > 1 ? 1 : N < 0 ? 0 : N, _.durationProgress = N), T = h + i.easing(N) * (l - h), b = (T - _.lastPosition) / e, f = N == 1;
        }
        _.lastVelocity = b, Number.isNaN(T) && (console.warn("Got NaN while animating:", this), f = !0);
      }
      s && !s[c].done && (f = !1), f ? _.done = !0 : n = !1, _.setValue(T, i.round) && (t = !0);
    });
    const a = Un(this), u = a.getValue();
    if (n) {
      const _ = Ze(r.to);
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
    if (ht(this)) {
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
    ).then((r) => E_(this, r));
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
    t = I.obj(t) ? t[n] : t, (t == null || ou(t)) && (t = void 0), r = I.obj(r) ? r[n] : r, r == null && (r = void 0);
    const o = { to: t, from: r };
    return Oa(this) || (e.reverse && ([t, r] = [r, t]), r = Ze(r), I.und(r) ? Un(this) || this._set(t) : this._set(r)), o;
  }
  /** Every update is processed by this method before merging. */
  _update({ ...e }, n) {
    const { key: t, defaultProps: r } = this;
    e.default && Object.assign(
      r,
      Fs(
        e,
        (s, a) => /^on/.test(a) ? nf(s, t) : s
      )
    ), oc(this, e, "onProps"), xr(this, "onProps", e, this);
    const o = this._prepareNode(e);
    if (Object.isFrozen(this))
      throw Error(
        "Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?"
      );
    const i = this._state;
    return sf(++this._lastCallId, {
      key: t,
      props: e,
      defaultProps: r,
      state: i,
      actions: {
        pause: () => {
          Mr(this) || (tc(this, !0), jr(i.pauseQueue), xr(
            this,
            "onPause",
            Rn(this, kr(this, this.animation.to)),
            this
          ));
        },
        resume: () => {
          Mr(this) && (tc(this, !1), ht(this) && this._resume(), jr(i.resumeQueue), xr(
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
        const a = lf(e);
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
    const f = !$n(l, _);
    f && (a.from = l), l = Ze(l);
    const T = !$n(c, u);
    T && this._focus(c);
    const d = ou(n.to), { config: h } = a, { decay: m, velocity: b } = h;
    (r || o) && (h.velocity = 0), n.config && !d && TS(
      h,
      $e(n.config, i),
      // Avoid calling the same "config" prop twice.
      n.config !== s.config ? $e(s.config, i) : void 0
    );
    let R = Un(this);
    if (!R || I.und(c))
      return t(Rn(this, !0));
    const N = (
      // When `reset` is undefined, the `from` prop implies `reset: true`,
      // except for declarative updates. When `reset` is defined, there
      // must exist a value to animate from.
      I.und(n.reset) ? o && !n.default : !I.und(l) && Jr(n.reset, i)
    ), A = N ? l : this.get(), p = Eo(c), w = I.num(p) || I.arr(p) || xs(p), k = !d && (!w || Jr(s.immediate || n.immediate, i));
    if (T) {
      const Oe = ru(c);
      if (Oe !== R.constructor)
        if (k)
          R = this._set(p);
        else
          throw Error(
            `Cannot animate between ${R.constructor.name} and ${Oe.name}, as the "to" prop suggests`
          );
    }
    const Y = R.constructor;
    let M = ln(c), j = !1;
    if (!M) {
      const Oe = N || !Oa(this) && f;
      (T || Oe) && (j = $n(Eo(A), p), M = !j), (!$n(a.immediate, k) && !k || !$n(h.decay, m) || !$n(h.velocity, b)) && (M = !0);
    }
    if (j && ht(this) && (a.changed && !N ? M = !0 : M || this._stop(u)), !d && ((M || ln(u)) && (a.values = R.getPayload(), a.toValues = ln(c) ? null : Y == To ? [1] : ze(p)), a.immediate != k && (a.immediate = k, !k && !N && this._set(u)), M)) {
      const { onRest: Oe } = a;
      B(RS, (Ie) => oc(this, n, Ie));
      const Te = Rn(this, kr(this, u));
      jr(this._pendingCalls, Te), this._pendingCalls.add(t), a.changed && X.batchedUpdates(() => {
        a.changed = !N, Oe?.(Te, this), N ? $e(s.onRest, Te) : a.onStart?.(Te, this);
      });
    }
    N && this._set(A), d ? t(uf(n.to, n, this._state, this)) : M ? this._start() : ht(this) && !T ? this._pendingCalls.add(t) : t(af(A));
  }
  /** Update the `animation.to` value, which might be a `FluidValue` */
  _focus(e) {
    const n = this.animation;
    e !== n.to && (Xl(this) && this._detach(), n.to = e, Xl(this) && this._attach());
  }
  _attach() {
    let e = 0;
    const { to: n } = this.animation;
    ln(n) && (Ar(n, this), uu(n) && (e = n.priority + 1)), this.priority = e;
  }
  _detach() {
    const { to: e } = this.animation;
    ln(e) && fo(e, this);
  }
  /**
   * Update the current value from outside the frameloop,
   * and return the `Animated` node.
   */
  _set(e, n = !0) {
    const t = Ze(e);
    if (!I.und(t)) {
      const r = Un(this);
      if (!r || !$n(t, r.getValue())) {
        const o = ru(t);
        !r || r.constructor != o ? p_(this, o.create(t)) : r.setValue(t), r && X.batchedUpdates(() => {
          this._onChange(t, n);
        });
      }
    }
    return Un(this);
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
    n || (this._onStart(), $e(this.animation.onChange, e, this)), $e(this.defaultProps.onChange, e, this), super._onChange(e, n);
  }
  // This method resets the animation state (even if already animating) to
  // ensure the latest from/to range is used, and it also ensures this spring
  // is added to the frameloop.
  _start() {
    const e = this.animation;
    Un(this).reset(Ze(e.to)), e.immediate || (e.fromValues = e.values.map((n) => n.lastPosition)), ht(this) || (nc(this, !0), Mr(this) || this._resume());
  }
  _resume() {
    fn.skipAnimation ? this.finish() : Yo.start(this);
  }
  /**
   * Exit the frameloop and notify `onRest` listeners.
   *
   * Always wrap `_stop` calls with `batchedUpdates`.
   */
  _stop(e, n) {
    if (ht(this)) {
      nc(this, !1);
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
  return $n(r, t);
}
function lf(e, n = e.loop, t = e.to) {
  const r = $e(n);
  if (r) {
    const o = r !== !0 && Vs(r), i = (o || e).reverse, s = !o || o.reset;
    return bo({
      ...e,
      loop: n,
      // Avoid updating default props when looping.
      default: !1,
      // Never loop the `pause` prop.
      pause: void 0,
      // For the "reverse" prop to loop as expected, the "to" prop
      // must be undefined. The "reverse" prop is ignored when the
      // "to" prop is an array or function.
      to: !i || ou(t) ? t : void 0,
      // Ignore the "from" prop except on reset.
      from: s ? e.from : void 0,
      reset: s,
      // The "loop" prop can return a "useSpring" props object to
      // override any of the original props.
      ...o
    });
  }
}
function bo(e) {
  const { to: n, from: t } = e = Vs(e), r = /* @__PURE__ */ new Set();
  return I.obj(n) && rc(n, r), I.obj(t) && rc(t, r), e.keys = r.size ? Array.from(r) : null, e;
}
function bS(e) {
  const n = bo(e);
  return I.und(n.default) && (n.default = Fs(n)), n;
}
function rc(e, n) {
  jn(e, (t, r) => t != null && n.add(r));
}
var RS = [
  "onStart",
  "onRest",
  "onChange",
  "onPause",
  "onResume"
];
function oc(e, n, t) {
  e.animation[t] = n[t] !== tf(n, t) ? nf(n[t], e.key) : void 0;
}
function xr(e, n, ...t) {
  e.animation[n]?.(...t), e.defaultProps[n]?.(...t);
}
var gS = ["onStart", "onChange", "onRest"], NS = 1, b_ = class {
  constructor(e, n) {
    this.id = NS++, this.springs = {}, this.queue = [], this._lastAsyncId = 0, this._active = /* @__PURE__ */ new Set(), this._changed = /* @__PURE__ */ new Set(), this._started = !1, this._state = {
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
    return e && this.queue.push(bo(e)), this;
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
    return e ? n = ze(e).map(bo) : this.queue = [], this._flush ? this._flush(this, n) : (ff(this, n), cu(this, n));
  }
  /** @internal */
  stop(e, n) {
    if (e !== !!e && (n = e), n) {
      const t = this.springs;
      B(ze(n), (r) => t[r].stop(!!e));
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
      B(ze(e), (t) => n[t].pause());
    }
    return this;
  }
  /** Resume the animation if paused. */
  resume(e) {
    if (I.und(e))
      this.start({ pause: !1 });
    else {
      const n = this.springs;
      B(ze(e), (t) => n[t].resume());
    }
    return this;
  }
  /** Call a function once per spring value */
  each(e) {
    jn(this.springs, e);
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
function cu(e, n) {
  return Promise.all(n.map((t) => cf(e, t))).then(
    (t) => E_(e, t)
  );
}
async function cf(e, n, t) {
  const { keys: r, to: o, from: i, loop: s, onRest: a, onResolve: u } = n, _ = I.obj(n.default) && n.default;
  s && (n.loop = !1), o === !1 && (n.to = null), i === !1 && (n.from = null);
  const c = I.arr(o) || I.fun(o) ? o : void 0;
  c ? (n.to = void 0, n.onRest = void 0, _ && (_.onRest = void 0)) : B(gS, (h) => {
    const m = n[h];
    if (I.fun(m)) {
      const b = e._events[h];
      n[h] = ({ finished: R, cancelled: N }) => {
        const A = b.get(m);
        A ? (R || (A.finished = !1), N && (A.cancelled = !0)) : b.set(m, {
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
  ), T = n.cancel === !0 || tf(n, "cancel") === !0;
  (c || T && l.asyncId) && f.push(
    sf(++e._lastAsyncId, {
      props: n,
      state: l,
      actions: {
        pause: eu,
        resume: eu,
        start(h, m) {
          T ? (Oo(l, e._lastAsyncId), m(or(e))) : (h.onRest = a, m(
            uf(
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
  const d = E_(e, await Promise.all(f));
  if (s && d.finished && !(t && d.noop)) {
    const h = lf(n, s, o);
    if (h)
      return ff(e, [h]), cf(e, h, !0);
  }
  return u && X.batchedUpdates(() => u(d, e, e.item)), d;
}
function du(e, n) {
  const t = { ...e.springs };
  return n && B(ze(n), (r) => {
    I.und(r.keys) && (r = bo(r)), I.obj(r.to) || (r = { ...r, to: void 0 }), mf(t, r, (o) => hf(o));
  }), df(e, t), t;
}
function df(e, n) {
  jn(n, (t, r) => {
    e.springs[r] || (e.springs[r] = t, Ar(t, e));
  });
}
function hf(e, n) {
  const t = new O_();
  return t.key = e, n && Ar(t, n), t;
}
function mf(e, n, t) {
  n.keys && B(n.keys, (r) => {
    (e[r] || (e[r] = t(r)))._prepareNode(n);
  });
}
function ff(e, n) {
  B(n, (t) => {
    mf(e.springs, t, (r) => hf(r, e));
  });
}
var Sr = ({
  children: e,
  ...n
}) => {
  const t = Je(ss), r = n.pause || !!t.pause, o = n.immediate || !!t.immediate;
  n = eS(() => ({ pause: r, immediate: o }), [r, o]);
  const { Provider: i } = ss;
  return /* @__PURE__ */ sn.createElement(i, { value: n }, e);
}, ss = IS(Sr, {});
Sr.Provider = ss.Provider;
Sr.Consumer = ss.Consumer;
function IS(e, n) {
  return Object.assign(e, sn.createContext(n)), e.Provider._context = e, e.Consumer._context = e, e;
}
var Xs = () => {
  const e = [], n = function(r) {
    VA();
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
function R_(e, n, t) {
  const r = I.fun(n) && n;
  r && !t && (t = []);
  const o = Jn(
    () => r || arguments.length == 3 ? Xs() : void 0,
    []
  ), i = ee(0), s = f_(), a = Jn(
    () => ({
      ctrls: [],
      queue: [],
      flush(b, R) {
        const N = du(b, R);
        return i.current > 0 && !a.queue.length && !Object.keys(N).some((p) => !b.springs[p]) ? cu(b, R) : new Promise((p) => {
          df(b, N), a.queue.push(() => {
            p(cu(b, R));
          }), s();
        });
      }
    }),
    []
  ), u = ee([...a.ctrls]), _ = [], c = tu(e) || 0;
  Jn(() => {
    B(u.current.slice(e, c), (b) => {
      iu(b, o), b.stop(!0);
    }), u.current.length = e, l(c, e);
  }, [e]), Jn(() => {
    l(0, Math.min(c, e));
  }, t);
  function l(b, R) {
    for (let N = b; N < R; N++) {
      const A = u.current[N] || (u.current[N] = new b_(null, a.flush)), p = r ? r(N, A) : n[N];
      p && (_[N] = bS(p));
    }
  }
  const f = u.current.map((b, R) => du(b, _[R])), T = Je(Sr), d = tu(T), h = T !== d && rf(T);
  tn(() => {
    i.current++, a.ctrls = u.current;
    const { queue: b } = a;
    b.length && (a.queue = [], B(b, (R) => R())), B(u.current, (R, N) => {
      o?.add(R), h && R.start({ default: T });
      const A = _[N];
      A && (T_(R, A.ref), R.ref ? R.queue.push(A) : R.start(A));
    });
  }), Ls(() => () => {
    B(a.ctrls, (b) => b.stop(!0));
  });
  const m = f.map((b) => ({ ...b }));
  return o ? [m, o] : m;
}
function vr(e, n) {
  const t = I.fun(e), [[r], o] = R_(
    1,
    t ? e : [e],
    t ? n || [] : n
  );
  return t || arguments.length == 2 ? [r, o] : r;
}
var AS = () => Xs(), SS = () => We(AS)[0], vS = (e, n) => {
  const t = QA(() => new O_(e, n));
  return Ls(() => () => {
    t.stop();
  }), t;
};
function pf(e, n, t) {
  const r = I.fun(n) && n;
  r && !t && (t = []);
  let o = !0, i;
  const s = R_(
    e,
    (a, u) => {
      const _ = r ? r(a, u) : n;
      return i = _.ref, o = o && _.reverse, _;
    },
    // Ensure the props function is called when no deps exist.
    // This works around the 3 argument rule.
    t || [{}]
  );
  if (tn(() => {
    B(s[1].current, (a, u) => {
      const _ = s[1].current[u + (o ? 1 : -1)];
      if (T_(a, i), a.ref) {
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
function Tf(e, n, t) {
  const r = I.fun(n) && n, {
    reset: o,
    sort: i,
    trail: s = 0,
    expires: a = !0,
    exitBeforeEnter: u = !1,
    onDestroyed: _,
    ref: c,
    config: l
  } = r ? r() : n, f = Jn(
    () => r || arguments.length == 3 ? Xs() : void 0,
    []
  ), T = ze(e), d = [], h = ee(null), m = o ? null : h.current;
  tn(() => {
    h.current = d;
  }), Ls(() => (B(d, (x) => {
    f?.add(x.ctrl), x.ctrl.ref = f;
  }), () => {
    B(h.current, (x) => {
      x.expired && clearTimeout(x.expirationId), iu(x.ctrl, f), x.ctrl.stop(!0);
    });
  }));
  const b = CS(T, r ? r() : n, m), R = o && h.current || [];
  tn(
    () => B(R, ({ ctrl: x, item: C, key: Q }) => {
      iu(x, f), $e(_, C, Q);
    })
  );
  const N = [];
  if (m && B(m, (x, C) => {
    x.expired ? (clearTimeout(x.expirationId), R.push(x)) : (C = N[C] = b.indexOf(x.key), ~C && (d[C] = x));
  }), B(T, (x, C) => {
    d[C] || (d[C] = {
      key: b[C],
      item: x,
      phase: "mount",
      ctrl: new b_()
    }, d[C].ctrl.item = x);
  }), N.length) {
    let x = -1;
    const { leave: C } = r ? r() : n;
    B(N, (Q, ce) => {
      const ne = m[ce];
      ~Q ? (x = d.indexOf(ne), d[x] = { ...ne, item: T[Q] }) : C && d.splice(++x, 0, ne);
    });
  }
  I.fun(i) && d.sort((x, C) => i(x.item, C.item));
  let A = -s;
  const p = f_(), w = Fs(n), k = /* @__PURE__ */ new Map(), Y = ee(/* @__PURE__ */ new Map()), M = ee(!1);
  B(d, (x, C) => {
    const Q = x.key, ce = x.phase, ne = r ? r() : n;
    let ve, Pe;
    const Ae = $e(ne.delay || 0, Q);
    if (ce == "mount")
      ve = ne.enter, Pe = "enter";
    else {
      const F = b.indexOf(Q) < 0;
      if (ce != "leave")
        if (F)
          ve = ne.leave, Pe = "leave";
        else if (ve = ne.update)
          Pe = "update";
        else
          return;
      else if (!F)
        ve = ne.enter, Pe = "enter";
      else
        return;
    }
    if (ve = $e(ve, x.item, C), ve = I.obj(ve) ? Vs(ve) : { to: ve }, !ve.config) {
      const F = l || w.config;
      ve.config = $e(F, x.item, C, Pe);
    }
    A += s;
    const D = {
      ...w,
      // we need to add our props.delay value you here.
      delay: Ae + A,
      ref: c,
      immediate: ne.immediate,
      // This prevents implied resets.
      reset: !1,
      // Merge any phase-specific props.
      ...ve
    };
    if (Pe == "enter" && I.und(D.from)) {
      const F = r ? r() : n, O = I.und(F.initial) || m ? F.from : F.initial;
      D.from = $e(O, x.item, C);
    }
    const { onResolve: U } = D;
    D.onResolve = (F) => {
      $e(U, F);
      const O = h.current, q = O.find((v) => v.key === Q);
      if (q && !(F.cancelled && q.phase != "update") && q.ctrl.idle) {
        const v = O.every((de) => de.ctrl.idle);
        if (q.phase == "leave") {
          const de = $e(a, q.item);
          if (de !== !1) {
            const te = de === !0 ? 0 : de;
            if (q.expired = !0, !v && te > 0) {
              te <= 2147483647 && (q.expirationId = setTimeout(p, te));
              return;
            }
          }
        }
        v && O.some((de) => de.expired) && (Y.current.delete(q), u && (M.current = !0), p());
      }
    };
    const P = du(x.ctrl, D);
    Pe === "leave" && u ? Y.current.set(x, { phase: Pe, springs: P, payload: D }) : k.set(x, { phase: Pe, springs: P, payload: D });
  });
  const j = Je(Sr), Oe = tu(j), Te = j !== Oe && rf(j);
  tn(() => {
    Te && B(d, (x) => {
      x.ctrl.start({ default: j });
    });
  }, [j]), B(k, (x, C) => {
    if (Y.current.size) {
      const Q = d.findIndex((ce) => ce.key === C.key);
      d.splice(Q, 1);
    }
  }), tn(
    () => {
      B(
        Y.current.size ? Y.current : k,
        ({ phase: x, payload: C }, Q) => {
          const { ctrl: ce } = Q;
          Q.phase = x, f?.add(ce), Te && x == "enter" && ce.start({ default: j }), C && (T_(ce, C.ref), (ce.ref || f) && !M.current ? ce.update(C) : (ce.start(C), M.current && (M.current = !1)));
        }
      );
    },
    o ? void 0 : t
  );
  const Ie = (x) => /* @__PURE__ */ sn.createElement(sn.Fragment, null, d.map((C, Q) => {
    const { springs: ce } = k.get(C) || C.ctrl, ne = x({ ...ce }, C.item, C, Q);
    return ne && ne.type ? /* @__PURE__ */ sn.createElement(
      ne.type,
      {
        ...ne.props,
        key: I.str(C.key) || I.num(C.key) ? C.key : C.ctrl.id,
        ref: ne.ref
      }
    ) : ne;
  }));
  return f ? [Ie, f] : Ie;
}
var GS = 1;
function CS(e, { key: n, keys: t = n }, r) {
  if (t === null) {
    const o = /* @__PURE__ */ new Set();
    return e.map((i) => {
      const s = r && r.find(
        (a) => a.item === i && a.phase !== "leave" && !o.has(a)
      );
      return s ? (o.add(s), s.key) : GS++;
    });
  }
  return I.und(t) ? e : I.fun(t) ? e.map(t) : ze(t);
}
var DS = ({
  container: e,
  ...n
} = {}) => {
  const [t, r] = vr(
    () => ({
      scrollX: 0,
      scrollY: 0,
      scrollXProgress: 0,
      scrollYProgress: 0,
      ...n
    }),
    []
  );
  return tn(() => {
    const o = qA(
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
}, yS = ({
  container: e,
  ...n
}) => {
  const [t, r] = vr(
    () => ({
      width: 0,
      height: 0,
      ...n
    }),
    []
  );
  return tn(() => {
    const o = Qm(
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
}, US = {
  any: 0,
  all: 1
};
function HS(e, n) {
  const [t, r] = We(!1), o = ee(), i = I.fun(e) && e, s = i ? i() : {}, { to: a = {}, from: u = {}, ..._ } = s, c = i ? n : e, [l, f] = vr(() => ({ from: u, ..._ }), []);
  return tn(() => {
    const T = o.current, {
      root: d,
      once: h,
      amount: m = "any",
      ...b
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
      threshold: typeof m == "number" || Array.isArray(m) ? m : US[m],
      ...b
    });
    return p.observe(T), () => p.unobserve(T);
  }, [c]), i ? [o, l] : [o, t];
}
function wS({ children: e, ...n }) {
  return e(vr(n));
}
function PS({
  items: e,
  children: n,
  ...t
}) {
  const r = pf(e.length, t);
  return e.map((o, i) => {
    const s = n(o, i);
    return I.fun(s) ? s(r[i]) : s;
  });
}
function MS({
  items: e,
  children: n,
  ...t
}) {
  return Tf(e, t)(n);
}
var Ks = class extends Ws {
  constructor(e, n) {
    super(), this.source = e, this.idle = !0, this._active = /* @__PURE__ */ new Set(), this.calc = pr(...n);
    const t = this._get(), r = ru(t);
    p_(this, r.create(t));
  }
  advance(e) {
    const n = this._get(), t = this.get();
    $n(n, t) || (Un(this).setValue(n), this._onChange(n, this.idle)), !this.idle && ic(this._active) && ba(this);
  }
  _get() {
    const e = I.arr(this.source) ? this.source.map(Ze) : ze(Ze(this.source));
    return this.calc(...e);
  }
  _start() {
    this.idle && !ic(this._active) && (this.idle = !1, B(Bs(this), (e) => {
      e.done = !1;
    }), fn.skipAnimation ? (X.batchedUpdates(() => this.advance()), ba(this)) : Yo.start(this));
  }
  // Observe our sources only when we're observed.
  _attach() {
    let e = 1;
    B(ze(this.source), (n) => {
      ln(n) && Ar(n, this), uu(n) && (n.idle || this._active.add(n), e = Math.max(e, n.priority + 1));
    }), this.priority = e, this._start();
  }
  // Stop observing our sources once we have no observers.
  _detach() {
    B(ze(this.source), (e) => {
      ln(e) && fo(e, this);
    }), this._active.clear(), ba(this);
  }
  /** @internal */
  eventObserved(e) {
    e.type == "change" ? e.idle ? this.advance() : (this._active.add(e.parent), this._start()) : e.type == "idle" ? this._active.delete(e.parent) : e.type == "priority" && (this.priority = ze(this.source).reduce(
      (n, t) => Math.max(n, (uu(t) ? t.priority : 0) + 1),
      0
    ));
  }
};
function kS(e) {
  return e.idle !== !1;
}
function ic(e) {
  return !e.size || Array.from(e).every(kS);
}
function ba(e) {
  e.idle || (e.idle = !0, B(Bs(e), (n) => {
    n.done = !0;
  }), mo(e, {
    type: "idle",
    parent: e
  }));
}
var xS = (e, ...n) => new Ks(e, n), LS = (e, ...n) => (qm(), new Ks(e, n));
fn.assign({
  createStringInterpolator: zm,
  to: (e, n) => new Ks(e, n)
});
var BS = Yo.advance, Ef = /^--/;
function jS(e, n) {
  return n == null || typeof n == "boolean" || n === "" ? "" : typeof n == "number" && n !== 0 && !Ef.test(e) && !(qr.hasOwnProperty(e) && qr[e]) ? n + "px" : ("" + n).trim();
}
var sc = {};
function FS(e, n) {
  if (!e.nodeType || !e.setAttribute)
    return !1;
  const t = e.nodeName === "filter" || e.parentNode && e.parentNode.nodeName === "filter", { style: r, children: o, scrollTop: i, scrollLeft: s, viewBox: a, ...u } = n, _ = Object.values(u), c = Object.keys(u).map(
    (l) => t || e.hasAttribute(l) ? l : sc[l] || (sc[l] = l.replace(
      /([A-Z])/g,
      // Attributes are written in dash case
      (f) => "-" + f.toLowerCase()
    ))
  );
  o !== void 0 && (e.textContent = o);
  for (const l in r)
    if (r.hasOwnProperty(l)) {
      const f = jS(l, r[l]);
      Ef.test(l) ? e.style.setProperty(l, f) : e.style[l] = f;
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
}, VS = (e, n) => e + n.charAt(0).toUpperCase() + n.substring(1), WS = ["Webkit", "Ms", "Moz", "O"];
qr = Object.keys(qr).reduce((e, n) => (WS.forEach((t) => e[VS(t, n)] = e[n]), e), qr);
var XS = /^(matrix|translate|scale|rotate|skew)/, KS = /^(translate)/, YS = /^(rotate|skew)/, Ra = (e, n) => I.num(e) && e !== 0 ? e + n : e, Di = (e, n) => I.arr(e) ? e.every((t) => Di(t, n)) : I.num(e) ? e === n : parseFloat(e) === n, $S = class extends js {
  constructor({ x: e, y: n, z: t, ...r }) {
    const o = [], i = [];
    (e || n || t) && (o.push([e || 0, n || 0, t || 0]), i.push((s) => [
      `translate3d(${s.map((a) => Ra(a, "px")).join(",")})`,
      // prettier-ignore
      Di(s, 0)
    ])), jn(r, (s, a) => {
      if (a === "transform")
        o.push([s || ""]), i.push((u) => [u, u === ""]);
      else if (XS.test(a)) {
        if (delete r[a], I.und(s))
          return;
        const u = KS.test(a) ? "px" : YS.test(a) ? "deg" : "";
        o.push(ze(s)), i.push(
          a === "rotate3d" ? ([_, c, l, f]) => [
            `rotate3d(${_},${c},${l},${Ra(f, u)})`,
            Di(f, 0)
          ] : (_) => [
            `${a}(${_.map((c) => Ra(c, u)).join(",")})`,
            Di(_, a.startsWith("scale") ? 1 : 0)
          ]
        );
      }
    }), o.length && (r.transform = new zS(o, i)), super(r);
  }
}, zS = class extends Km {
  constructor(e, n) {
    super(), this.inputs = e, this.transforms = n, this._value = null;
  }
  get() {
    return this._value || (this._value = this._get());
  }
  _get() {
    let e = "", n = !0;
    return B(this.inputs, (t, r) => {
      const o = Ze(t[0]), [i, s] = this.transforms[r](
        I.arr(o) ? o : t.map(Ze)
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
        (t) => ln(t) && Ar(t, this)
      )
    );
  }
  // Stop observing our inputs once we have no observers.
  observerRemoved(e) {
    e == 0 && B(
      this.inputs,
      (n) => B(
        n,
        (t) => ln(t) && fo(t, this)
      )
    );
  }
  eventObserved(e) {
    e.type == "change" && (this._value = null), mo(this, e);
  }
}, JS = [
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
fn.assign({
  batchedUpdates: bc,
  createStringInterpolator: zm,
  colors: gA
});
var qS = _S(JS, {
  applyAnimatedValues: FS,
  createAnimatedStyle: (e) => new $S(e),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getComponentProps: ({ scrollTop: e, scrollLeft: n, ...t }) => t
}), ac = qS.animated;
const QS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Any: lS,
  BailSignal: au,
  Controller: b_,
  FrameValue: Ws,
  Globals: fn,
  Interpolation: Ks,
  Spring: wS,
  SpringContext: Sr,
  SpringRef: Xs,
  SpringValue: O_,
  Trail: PS,
  Transition: MS,
  a: ac,
  animated: ac,
  config: of,
  createInterpolator: pr,
  easings: Xm,
  inferTo: Vs,
  interpolate: LS,
  to: xS,
  update: BS,
  useChain: fS,
  useInView: HS,
  useIsomorphicLayoutEffect: tn,
  useReducedMotion: rS,
  useResize: yS,
  useScroll: DS,
  useSpring: vr,
  useSpringRef: SS,
  useSpringValue: vS,
  useSprings: R_,
  useTrail: pf,
  useTransition: Tf
}, Symbol.toStringTag, { value: "Module" })), ZS = () => {
  const { Spring: e } = gr(), n = vr({
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
}, e2 = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMjMiIHZpZXdCb3g9IjAgMCAxNyAyMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0Ljk4OTcgMTUuNDA5NEwxNC40MjE2IDE1Ljc3NTJDMTQuNzcxMiAxNS40NTUxIDE1LjAzMzQgMTQuOTk3OCAxNS4wMzM0IDE0LjU0MDZDMTUuMDMzNCAxMy43NjMzIDE0LjY4MzggMTMuMTIzMSAxMy41NDc1IDEyLjU3NDRMMy44NDU3NSA4LjEzOTA3QzEuODc5MTcgNy4yMjQ1NiAwLjY1NTUxOCA2LjA4MTQ0IDAuNjU1NTE4IDQuMDIzODFDMC42NTU1MTggMi4xNDkwOCAxLjU3MzI1IDAuOTE0NTAyIDIuOTcxNzEgMEMyLjc1MzIgMC4zMjAwNzYgMi42MjIxIDAuNzMxNjAyIDIuNjIyMSAxLjIzNDU4QzIuNjIyMSAyLjM3NzcgMy41Mzk4NCAyLjg4MDY4IDQuNDU3NTcgMy4yOTIyMUwxMy44OTcyIDcuNjM2MDlDMTUuNjAxNSA4LjQxMzQyIDE3IDkuNjQ3OTkgMTcgMTEuNzk3MUMxNyAxMy41MzQ2IDE2LjIxMzQgMTQuNjMyIDE0Ljk4OTcgMTUuNDA5NFoiIGZpbGw9IiMwMTY4QTIiLz4KPHBhdGggZD0iTTEwLjU5MzMgMTEuMTM1OUwxMy42NTI0IDEyLjU1MzRDMTQuNzg4NyAxMy4xMDIxIDE1LjEzODMgMTMuNjk2NSAxNS4xMzgzIDE0LjUxOTZDMTUuMTM4MyAxNC45NzY4IDE0Ljg3NjEgMTUuNDM0MSAxNC41MjY0IDE1Ljc1NDJMOS4zNjk2MyAxMy4zNzY1TDEwLjI0MzcgMTIuODczNUMxMC45ODY2IDEyLjQ2MiAxMS4yMDUxIDEyLjE4NzYgMTEuMjA1MSAxMS45MTMzQzExLjI0ODggMTEuNTkzMiAxMS4wNzQgMTEuMzY0NiAxMC41OTMzIDExLjEzNTlaIiBmaWxsPSIjMDE2OEExIi8+CjxwYXRoIGQ9Ik01LjE1NjgxIDIyLjA4NTRDNC40NTc1OCAyMi40OTcgMy44NDU3NiAyMi43NzEzIDMuMTkwMjMgMjIuNzcxM0MxLjQ4NTg2IDIyLjc3MTMgMC4wODc0MDM1IDIxLjMwODEgMCAxOS41NzA1TDMuMjc3NjMgMTcuNTEyOUw4LjQzNDQ0IDE5LjkzNjNMNS4xNTY4MSAyMi4wODU0WiIgZmlsbD0iIzAxNjhBMSIvPgo8cGF0aCBkPSJNNi45MzI1NiAxMy4yODAxTDQuNDg1MjYgMTIuMTM3QzMuMzkyNzEgMTEuNjM0IDIuMzg3NTcgMTEuMjIyNSAyLjM4NzU3IDkuOTQyMTZDMi4zODc1NyA5LjMwMiAyLjU2MjM4IDguOTM2MiAyLjg2ODI5IDguNjE2MTNMOC4wMjUxIDEwLjk5MzhMNi43NTc3NSAxMS43NzEyQzYuNDA4MTQgMTEuOTk5OCA2LjE0NTkzIDEyLjE4MjcgNi4xNDU5MyAxMi41MDI4QzYuMTQ1OTMgMTIuNzc3MSA2LjQ5NTU0IDEzLjA1MTUgNi45MzI1NiAxMy4yODAxWiIgZmlsbD0iIzE1NTQ3NyIvPgo8cGF0aCBkPSJNMTUuOTA3NCAyM0MxNC41OTY0IDIxLjk0ODMgMTMuMTk3OSAyMS4yNjI0IDExLjUzNzMgMjAuNDM5NEwzLjc1ODM1IDE2LjgyNzFDMS43OTE3NyAxNS45MTI2IDAuNDgwNzEzIDE0LjY3OCAwLjQ4MDcxMyAxMi42NjYxQzAuNDgwNzEzIDEwLjY1NDIgMS4zOTg0NSA5LjY5Mzk5IDIuNTc4NCA4LjkxNjY2TDMuMDE1NDIgOC42NDIzMUMyLjcwOTUgOC45NjIzOSAyLjUzNDcgOS4zMjgxOSAyLjUzNDcgOS45NjgzNEMyLjUzNDcgMTEuMjAyOSAzLjU4MzU0IDExLjY2MDIgNC42MzIzOCAxMi4xNjMxTDEzLjY3ODcgMTYuMzI0MUMxNS4yNTE5IDE3LjAxIDE2LjY5NDEgMTguMjQ0NiAxNi42OTQxIDIwLjM0NzlDMTYuNzgxNSAyMS40OTExIDE2LjM0NDUgMjIuNDk3IDE1LjkwNzQgMjNaIiBmaWxsPSIjMTU1NDc3Ii8+Cjwvc3ZnPgo=", n2 = _e.div`
  ${ye("23%", "28px")}
  ${yt("flex-start", "center")}
  gap: 25px;
  img {
    transition: transform 200ms;
    &:hover {
      transform: scale(1.1) rotate(3deg);
    }
  }
`;
_e.span`
  color: ${({ theme: e }) => e.light};
  cursor: pointer;
`;
const t2 = () => {
  const e = pn(), { openFile: n, saveFile: t } = Hm(), r = wm(), o = () => {
    e.tabs.createTab();
  };
  return /* @__PURE__ */ z(n2, { children: [
    /* @__PURE__ */ E(gc, { to: fh.MAIN, children: /* @__PURE__ */ E("img", { src: e2, alt: "" }) }),
    /* @__PURE__ */ E(Lr, { type: "dashed", size: "small", onClick: n, children: "Open" }),
    /* @__PURE__ */ E(Lr, { type: "dashed", size: "small", onClick: t, children: "Save" }),
    /* @__PURE__ */ E(Lr, { type: "dashed", size: "small", onClick: o, children: "New" }),
    /* @__PURE__ */ E(Lr, { type: "dashed", size: "small", onClick: r, children: "Run" })
  ] });
}, r2 = _e.div`
  ${ye("23%", "100%")};
  ${yt("flex-start", "center")};
`;
_e(Kn)`
  margin-top: 0;
  margin-left: 20px;
  svg {
    color: ${({ theme: e, $disabled: n }) => n ? e.secondaryGrey : e.light};
  }
`;
const o2 = an(() => {
  const n = !go().isAllowedToExecute(), t = wm();
  return /* @__PURE__ */ E(r2, { children: /* @__PURE__ */ E(
    wR,
    {
      type: "primary",
      onClick: t,
      disabled: n,
      override: "#38a886",
      children: "Run Code"
    }
  ) });
}), i2 = _e.div`
  background: ${({ theme: e }) => e.grey};
  border-bottom: 2px solid ${({ theme: e }) => e.lightGrey};
  height: ${ye("100%", "42px")};
  box-sizing: border-box;
  ${yt("space-between", "center")}
  ${LO(23)}
`, s2 = _e.h2`
  color: ${({ theme: e }) => e.light};
`, a2 = an(() => {
  const n = go().getActiveTab(), { spring: t, animatedDiv: r } = ZS();
  return /* @__PURE__ */ z(i2, { as: r, style: t, children: [
    /* @__PURE__ */ E(t2, {}),
    /* @__PURE__ */ z(s2, { children: [
      n.getLabel(),
      " - CodeGear"
    ] }),
    /* @__PURE__ */ E(o2, {})
  ] });
}), u2 = () => /* @__PURE__ */ E(Bo, { children: /* @__PURE__ */ E(a2, {}) });
class _2 {
  constructor(n) {
    at(this), this.state = n, this.getters = n.getters, this.tabs = new YI(n), this.editor = new BI(n), this.terminal = new NI(n);
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
    this.state.storage = new Uh(n);
  }
}
class l2 {
  constructor(n) {
    this.state = n, at(this);
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
    return h1.includes(n);
  }
}
class c2 {
  constructor(n) {
    at(this), this.state = n, this.getters = n.getters, this.actions = n.actions, this.codeRunner = new mA(n);
  }
}
class d2 {
  constructor() {
    this.activeKey = "", this.content = [], this.theme = "vs-dark", this.fontSize = 20, this.tabSize = 4, this.customBackground = "#3d3d3d", this.customColor = "#3d3d3d", this.isStorageDisabled = !1, this.executeMessages = [], at(this);
    const n = new Uh(this.isStorageDisabled);
    this.storage = n, this.getters = new l2(this), this.actions = new _2(this), this.services = new c2(this), this.theme = n.get("EDITOR_THEME", "vs-dark"), this.fontSize = Number(
      n.get("EDITOR_FONT_SIZE", 20)
    ), this.tabSize = Number(
      n.get("EDITOR_TAB_SIZE", 4)
    ), this.customBackground = n.get(
      "EDITOR_CUSTOM_BACKGROUND",
      "#3d3d3d"
    ), this.customColor = n.get("EDITOR_CUSTOM_COLOR", "#3d3d3d");
    const t = n.get(
      "EDITOR_CONTENT_DATA",
      []
    );
    this.executeMessages = n.get(
      "EDITOR_EXECUTE_MESSAGES",
      []
    ), t.length === 0 && this.actions.tabs.createTab();
    for (const o of t)
      this.content.push(new ym({ instance: o }));
    const r = this.content[0];
    this.activeKey = r.getKeyId();
  }
}
const Gr = Ro({}), h2 = ({ children: e }) => {
  const n = new d2();
  return /* @__PURE__ */ E(Gr.Provider, { value: n, children: e });
}, Of = Ro({}), m2 = ({ children: e }) => {
  const n = Jn(
    () => ({
      isSettingsOpened: !1,
      isHtmlPreviewOpened: !0,
      isTerminalOpened: !0,
      selectedTerminalTab: "terminal"
    }),
    []
  ), t = (a, u) => ({ ...a, ...u }), [r, o] = Tc(t, n), i = (a) => {
    r[a] ? o({ [a]: !1 }) : o({ [a]: !0 });
  }, s = Jn(
    () => ({
      state: r,
      update: o,
      toggle: i
    }),
    [r]
  );
  return /* @__PURE__ */ E(Of.Provider, { value: s, children: e });
}, bf = () => {
  const e = hs();
  return ({ background: n, color: t }) => {
    e.editor.defineTheme(zi, {
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
function f2(e, n) {
  for (var t in n)
    e[t] = n[t];
  return e;
}
function uc(e, n) {
  for (var t in e)
    if (t !== "__source" && !(t in n))
      return !0;
  for (var r in n)
    if (r !== "__source" && e[r] !== n[r])
      return !0;
  return !1;
}
function _c(e) {
  this.props = e;
}
(_c.prototype = new tt()).isPureReactComponent = !0, _c.prototype.shouldComponentUpdate = function(e, n) {
  return uc(this.props, e) || uc(this.state, n);
};
var lc = V.__b;
V.__b = function(e) {
  e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), lc && lc(e);
};
var p2 = V.__e;
V.__e = function(e, n, t, r) {
  if (e.then) {
    for (var o, i = n; i = i.__; )
      if ((o = i.__c) && o.__c)
        return n.__e == null && (n.__e = t.__e, n.__k = t.__k), o.__c(e, n);
  }
  p2(e, n, t, r);
};
var cc = V.unmount;
function Rf(e, n, t) {
  return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(r) {
    typeof r.__c == "function" && r.__c();
  }), e.__c.__H = null), (e = f2({}, e)).__c != null && (e.__c.__P === t && (e.__c.__P = n), e.__c = null), e.__k = e.__k && e.__k.map(function(r) {
    return Rf(r, n, t);
  })), e;
}
function gf(e, n, t) {
  return e && (e.__v = null, e.__k = e.__k && e.__k.map(function(r) {
    return gf(r, n, t);
  }), e.__c && e.__c.__P === n && (e.__e && t.insertBefore(e.__e, e.__d), e.__c.__e = !0, e.__c.__P = t)), e;
}
function ga() {
  this.__u = 0, this.t = null, this.__b = null;
}
function Nf(e) {
  var n = e.__.__c;
  return n && n.__a && n.__a(e);
}
function li() {
  this.u = null, this.o = null;
}
V.unmount = function(e) {
  var n = e.__c;
  n && n.__R && n.__R(), n && e.__h === !0 && (e.type = null), cc && cc(e);
}, (ga.prototype = new tt()).__c = function(e, n) {
  var t = n.__c, r = this;
  r.t == null && (r.t = []), r.t.push(t);
  var o = Nf(r.__v), i = !1, s = function() {
    i || (i = !0, t.__R = null, o ? o(a) : a());
  };
  t.__R = s;
  var a = function() {
    if (!--r.__u) {
      if (r.state.__a) {
        var _ = r.state.__a;
        r.__v.__k[0] = gf(_, _.__c.__P, _.__c.__O);
      }
      var c;
      for (r.setState({ __a: r.__b = null }); c = r.t.pop(); )
        c.forceUpdate();
    }
  }, u = n.__h === !0;
  r.__u++ || u || r.setState({ __a: r.__b = r.__v.__k[0] }), e.then(s, s);
}, ga.prototype.componentWillUnmount = function() {
  this.t = [];
}, ga.prototype.render = function(e, n) {
  if (this.__b) {
    if (this.__v.__k) {
      var t = document.createElement("div"), r = this.__v.__k[0].__c;
      this.__v.__k[0] = Rf(this.__b, t, r.__O = r.__P);
    }
    this.__b = null;
  }
  var o = n.__a && Tl(so, null, e.fallback);
  return o && (o.__h = null), [Tl(so, null, n.__a ? null : e.children), o];
};
var dc = function(e, n, t) {
  if (++t[1] === t[0] && e.o.delete(n), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.o.size))
    for (t = e.u; t; ) {
      for (; t.length > 3; )
        t.pop()();
      if (t[1] < t[0])
        break;
      e.u = t = t[2];
    }
};
(li.prototype = new tt()).__a = function(e) {
  var n = this, t = Nf(n.__v), r = n.o.get(e);
  return r[0]++, function(o) {
    var i = function() {
      n.props.revealOrder ? (r.push(o), dc(n, e, r)) : o();
    };
    t ? t(i) : i();
  };
}, li.prototype.render = function(e) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var n = Yi(e.children);
  e.revealOrder && e.revealOrder[0] === "b" && n.reverse();
  for (var t = n.length; t--; )
    this.o.set(n[t], this.u = [1, 0, this.u]);
  return e.children;
}, li.prototype.componentDidUpdate = li.prototype.componentDidMount = function() {
  var e = this;
  this.o.forEach(function(n, t) {
    dc(e, t, n);
  });
};
var T2 = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, E2 = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, O2 = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, b2 = /[A-Z0-9]/g, R2 = typeof document < "u", g2 = function(e) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e);
};
tt.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
  Object.defineProperty(tt.prototype, e, { configurable: !0, get: function() {
    return this["UNSAFE_" + e];
  }, set: function(n) {
    Object.defineProperty(this, e, { configurable: !0, writable: !0, value: n });
  } });
});
var hc = V.event;
function N2() {
}
function I2() {
  return this.cancelBubble;
}
function A2() {
  return this.defaultPrevented;
}
V.event = function(e) {
  return hc && (e = hc(e)), e.persist = N2, e.isPropagationStopped = I2, e.isDefaultPrevented = A2, e.nativeEvent = e;
};
var S2 = { enumerable: !1, configurable: !0, get: function() {
  return this.class;
} }, mc = V.vnode;
V.vnode = function(e) {
  typeof e.type == "string" && function(n) {
    var t = n.props, r = n.type, o = {};
    for (var i in t) {
      var s = t[i];
      if (!(i === "value" && "defaultValue" in t && s == null || R2 && i === "children" && r === "noscript" || i === "class" || i === "className")) {
        var a = i.toLowerCase();
        i === "defaultValue" && "value" in t && t.value == null ? i = "value" : i === "download" && s === !0 ? s = "" : a === "ondoubleclick" ? i = "ondblclick" : a !== "onchange" || r !== "input" && r !== "textarea" || g2(t.type) ? a === "onfocus" ? i = "onfocusin" : a === "onblur" ? i = "onfocusout" : O2.test(i) ? i = a : r.indexOf("-") === -1 && E2.test(i) ? i = i.replace(b2, "-$&").toLowerCase() : s === null && (s = void 0) : a = i = "oninput", a === "oninput" && o[i = a] && (i = "oninputCapture"), o[i] = s;
      }
    }
    r == "select" && o.multiple && Array.isArray(o.value) && (o.value = Yi(t.children).forEach(function(u) {
      u.props.selected = o.value.indexOf(u.props.value) != -1;
    })), r == "select" && o.defaultValue != null && (o.value = Yi(t.children).forEach(function(u) {
      u.props.selected = o.multiple ? o.defaultValue.indexOf(u.props.value) != -1 : o.defaultValue == u.props.value;
    })), t.class && !t.className ? (o.class = t.class, Object.defineProperty(o, "className", S2)) : (t.className && !t.class || t.class && t.className) && (o.class = o.className = t.className), n.props = o;
  }(e), e.$$typeof = T2, mc && mc(e);
};
var fc = V.__r;
V.__r = function(e) {
  fc && fc(e), e.__c;
};
var pc = V.diffed;
V.diffed = function(e) {
  pc && pc(e);
  var n = e.props, t = e.__e;
  t != null && e.type === "textarea" && "value" in n && n.value !== t.value && (t.value = n.value == null ? "" : n.value);
};
function v2(e) {
  if (!(Wa(e) && "base" in e && typeof e.base == "string" && "colors" in e && Wa(e.colors)))
    throw new Error(ws.WrongJsonObject("ThemeObject"));
}
const G2 = () => {
  const e = hs(), n = Th(), { theme: t, customBackground: r, customColor: o } = Tn(), i = bf();
  return bR(() => {
    let s = 0;
    Xa.forEach(async (a) => {
      try {
        const u = await C2(`./themes/${a}.json`);
        v2(u), e.editor.defineTheme(a, u);
      } catch {
        console.log(ws.ThemeUpload(a));
      }
      s += 1, s === Xa.length && (i({ background: r, color: o }), e.editor.setTheme(t), n.on());
    });
  }, [e]), n.val;
};
function C2(e) {
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
const D2 = ({ children: e }) => {
  const n = G2();
  return /* @__PURE__ */ E(uo, { when: n, children: e });
}, y2 = _e.div`
  ${ye("100vw", "100vh")}
`, U2 = _e.div`
  ${ye("100%", "calc(100% - 45px)")};
  display: flex;
`, L2 = () => (yR(), /* @__PURE__ */ E(GR, { children: /* @__PURE__ */ E(h2, { children: /* @__PURE__ */ E(D2, { children: /* @__PURE__ */ E(m2, { children: /* @__PURE__ */ E(vR, { children: /* @__PURE__ */ z(y2, { children: [
  /* @__PURE__ */ E(u2, {}),
  /* @__PURE__ */ z(U2, { children: [
    /* @__PURE__ */ E(LI, {}),
    /* @__PURE__ */ E(dA, {}),
    /* @__PURE__ */ E(HI, {}),
    /* @__PURE__ */ E(d1, {})
  ] }),
  /* @__PURE__ */ E(R1, {})
] }) }) }) }) }) }));
export {
  L2 as Editor,
  _2 as EditorActions,
  l2 as EditorGetters,
  d2 as EditorStore,
  Gr as EditorStoreContext,
  Of as ModalsContext,
  bf as useCustomTheme
};
