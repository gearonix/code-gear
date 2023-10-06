import * as le from "react";
import { useEffect as xe, useLayoutEffect as as, useState as qe, useRef as N, forwardRef as os, useCallback as us, useContext as Tt, useMemo as _e } from "react";
import { unstable_batchedUpdates as cs } from "react-dom";
var ls = Object.defineProperty, ds = (e, t) => {
  for (var n in t)
    ls(e, n, { get: t[n], enumerable: !0 });
}, W = {};
ds(W, {
  assign: () => On,
  colors: () => re,
  createStringInterpolator: () => jt,
  skipAnimation: () => En,
  to: () => kn,
  willAdvance: () => Lt
});
var Vt = je(), b = (e) => $e(e, Vt), Ft = je();
b.write = (e) => $e(e, Ft);
var nt = je();
b.onStart = (e) => $e(e, nt);
var zt = je();
b.onFrame = (e) => $e(e, zt);
var xt = je();
b.onFinish = (e) => $e(e, xt);
var de = [];
b.setTimeout = (e, t) => {
  const n = b.now() + t, s = () => {
    const i = de.findIndex((a) => a.cancel == s);
    ~i && de.splice(i, 1), se -= ~i ? 1 : 0;
  }, r = { time: n, handler: e, cancel: s };
  return de.splice(Sn(n), 0, r), se += 1, Pn(), r;
};
var Sn = (e) => ~(~de.findIndex((t) => t.time > e) || ~de.length);
b.cancel = (e) => {
  nt.delete(e), zt.delete(e), xt.delete(e), Vt.delete(e), Ft.delete(e);
};
b.sync = (e) => {
  wt = !0, b.batchedUpdates(e), wt = !1;
};
b.throttle = (e) => {
  let t;
  function n() {
    try {
      e(...t);
    } finally {
      t = null;
    }
  }
  function s(...r) {
    t = r, b.onStart(n);
  }
  return s.handler = e, s.cancel = () => {
    nt.delete(n), t = null;
  }, s;
};
var qt = typeof window < "u" ? window.requestAnimationFrame : (
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  () => {
  }
);
b.use = (e) => qt = e;
b.now = typeof performance < "u" ? () => performance.now() : Date.now;
b.batchedUpdates = (e) => e();
b.catch = console.error;
b.frameLoop = "always";
b.advance = () => {
  b.frameLoop !== "demand" ? console.warn(
    "Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"
  ) : An();
};
var ne = -1, se = 0, wt = !1;
function $e(e, t) {
  wt ? (t.delete(e), e(0)) : (t.add(e), Pn());
}
function Pn() {
  ne < 0 && (ne = 0, b.frameLoop !== "demand" && qt(In));
}
function fs() {
  ne = -1;
}
function In() {
  ~ne && (qt(In), b.batchedUpdates(An));
}
function An() {
  const e = ne;
  ne = b.now();
  const t = Sn(ne);
  if (t && (Rn(de.splice(0, t), (n) => n.handler()), se -= t), !se) {
    fs();
    return;
  }
  nt.flush(), Vt.flush(e ? Math.min(64, ne - e) : 16.667), zt.flush(), Ft.flush(), xt.flush();
}
function je() {
  let e = /* @__PURE__ */ new Set(), t = e;
  return {
    add(n) {
      se += t == e && !e.has(n) ? 1 : 0, e.add(n);
    },
    delete(n) {
      return se -= t == e && e.has(n) ? 1 : 0, e.delete(n);
    },
    flush(n) {
      t.size && (e = /* @__PURE__ */ new Set(), se -= t.size, Rn(t, (s) => s(n) && e.add(s)), se += e.size, t = e);
    }
  };
}
function Rn(e, t) {
  e.forEach((n) => {
    try {
      t(n);
    } catch (s) {
      b.catch(s);
    }
  });
}
function bt() {
}
var hs = (e, t, n) => Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 }), c = {
  arr: Array.isArray,
  obj: (e) => !!e && e.constructor.name === "Object",
  fun: (e) => typeof e == "function",
  str: (e) => typeof e == "string",
  num: (e) => typeof e == "number",
  und: (e) => e === void 0
};
function J(e, t) {
  if (c.arr(e)) {
    if (!c.arr(t) || e.length !== t.length)
      return !1;
    for (let n = 0; n < e.length; n++)
      if (e[n] !== t[n])
        return !1;
    return !0;
  }
  return e === t;
}
var p = (e, t) => e.forEach(t);
function K(e, t, n) {
  if (c.arr(e)) {
    for (let s = 0; s < e.length; s++)
      t.call(n, e[s], `${s}`);
    return;
  }
  for (const s in e)
    e.hasOwnProperty(s) && t.call(n, e[s], s);
}
var V = (e) => c.und(e) ? [] : c.arr(e) ? e : [e];
function Pe(e, t) {
  if (e.size) {
    const n = Array.from(e);
    e.clear(), p(n, t);
  }
}
var Se = (e, ...t) => Pe(e, (n) => n(...t)), $t = () => typeof window > "u" || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent), jt, kn, re = null, En = !1, Lt = bt, On = (e) => {
  e.to && (kn = e.to), e.now && (b.now = e.now), e.colors !== void 0 && (re = e.colors), e.skipAnimation != null && (En = e.skipAnimation), e.createStringInterpolator && (jt = e.createStringInterpolator), e.requestAnimationFrame && b.use(e.requestAnimationFrame), e.batchedUpdates && (b.batchedUpdates = e.batchedUpdates), e.willAdvance && (Lt = e.willAdvance), e.frameLoop && (b.frameLoop = e.frameLoop);
}, Ie = /* @__PURE__ */ new Set(), Q = [], ft = [], Xe = 0, Le = {
  get idle() {
    return !Ie.size && !Q.length;
  },
  /** Advance the given animation on every frame until idle. */
  start(e) {
    Xe > e.priority ? (Ie.add(e), b.onStart(ms)) : (Mn(e), b(_t));
  },
  /** Advance all animations by the given time. */
  advance: _t,
  /** Call this when an animation's priority changes. */
  sort(e) {
    if (Xe)
      b.onFrame(() => Le.sort(e));
    else {
      const t = Q.indexOf(e);
      ~t && (Q.splice(t, 1), Cn(e));
    }
  },
  /**
   * Clear all animations. For testing purposes.
   *
   * ☠️ Never call this from within the frameloop.
   */
  clear() {
    Q = [], Ie.clear();
  }
};
function ms() {
  Ie.forEach(Mn), Ie.clear(), b(_t);
}
function Mn(e) {
  Q.includes(e) || Cn(e);
}
function Cn(e) {
  Q.splice(
    ps(Q, (t) => t.priority > e.priority),
    0,
    e
  );
}
function _t(e) {
  const t = ft;
  for (let n = 0; n < Q.length; n++) {
    const s = Q[n];
    Xe = s.priority, s.idle || (Lt(s), s.advance(e), s.idle || t.push(s));
  }
  return Xe = 0, ft = Q, ft.length = 0, Q = t, Q.length > 0;
}
function ps(e, t) {
  const n = e.findIndex(t);
  return n < 0 ? e.length : n;
}
var gs = (e, t, n) => Math.min(Math.max(n, e), t), vs = {
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
}, H = "[-+]?\\d*\\.?\\d+", Ze = H + "%";
function st(...e) {
  return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)";
}
var ys = new RegExp("rgb" + st(H, H, H)), ws = new RegExp("rgba" + st(H, H, H, H)), bs = new RegExp("hsl" + st(H, Ze, Ze)), _s = new RegExp(
  "hsla" + st(H, Ze, Ze, H)
), Ss = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, Ps = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, Is = /^#([0-9a-fA-F]{6})$/, As = /^#([0-9a-fA-F]{8})$/;
function Rs(e) {
  let t;
  return typeof e == "number" ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = Is.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : re && re[e] !== void 0 ? re[e] : (t = ys.exec(e)) ? (ue(t[1]) << 24 | // r
  ue(t[2]) << 16 | // g
  ue(t[3]) << 8 | // b
  255) >>> // a
  0 : (t = ws.exec(e)) ? (ue(t[1]) << 24 | // r
  ue(t[2]) << 16 | // g
  ue(t[3]) << 8 | // b
  Jt(t[4])) >>> // a
  0 : (t = Ss.exec(e)) ? parseInt(
    t[1] + t[1] + // r
    t[2] + t[2] + // g
    t[3] + t[3] + // b
    "ff",
    // a
    16
  ) >>> 0 : (t = As.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = Ps.exec(e)) ? parseInt(
    t[1] + t[1] + // r
    t[2] + t[2] + // g
    t[3] + t[3] + // b
    t[4] + t[4],
    // a
    16
  ) >>> 0 : (t = bs.exec(e)) ? (Xt(
    Zt(t[1]),
    // h
    De(t[2]),
    // s
    De(t[3])
    // l
  ) | 255) >>> // a
  0 : (t = _s.exec(e)) ? (Xt(
    Zt(t[1]),
    // h
    De(t[2]),
    // s
    De(t[3])
    // l
  ) | Jt(t[4])) >>> // a
  0 : null;
}
function ht(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function Xt(e, t, n) {
  const s = n < 0.5 ? n * (1 + t) : n + t - n * t, r = 2 * n - s, i = ht(r, s, e + 1 / 3), a = ht(r, s, e), o = ht(r, s, e - 1 / 3);
  return Math.round(i * 255) << 24 | Math.round(a * 255) << 16 | Math.round(o * 255) << 8;
}
function ue(e) {
  const t = parseInt(e, 10);
  return t < 0 ? 0 : t > 255 ? 255 : t;
}
function Zt(e) {
  return (parseFloat(e) % 360 + 360) % 360 / 360;
}
function Jt(e) {
  const t = parseFloat(e);
  return t < 0 ? 0 : t > 1 ? 255 : Math.round(t * 255);
}
function De(e) {
  const t = parseFloat(e);
  return t < 0 ? 0 : t > 100 ? 1 : t / 100;
}
function en(e) {
  let t = Rs(e);
  if (t === null)
    return e;
  t = t || 0;
  const n = (t & 4278190080) >>> 24, s = (t & 16711680) >>> 16, r = (t & 65280) >>> 8, i = (t & 255) / 255;
  return `rgba(${n}, ${s}, ${r}, ${i})`;
}
var ke = (e, t, n) => {
  if (c.fun(e))
    return e;
  if (c.arr(e))
    return ke({
      range: e,
      output: t,
      extrapolate: n
    });
  if (c.str(e.output[0]))
    return jt(e);
  const s = e, r = s.output, i = s.range || [0, 1], a = s.extrapolateLeft || s.extrapolate || "extend", o = s.extrapolateRight || s.extrapolate || "extend", l = s.easing || ((u) => u);
  return (u) => {
    const m = Es(u, i);
    return ks(
      u,
      i[m],
      i[m + 1],
      r[m],
      r[m + 1],
      l,
      a,
      o,
      s.map
    );
  };
};
function ks(e, t, n, s, r, i, a, o, l) {
  let u = l ? l(e) : e;
  if (u < t) {
    if (a === "identity")
      return u;
    a === "clamp" && (u = t);
  }
  if (u > n) {
    if (o === "identity")
      return u;
    o === "clamp" && (u = n);
  }
  return s === r ? s : t === n ? e <= t ? s : r : (t === -1 / 0 ? u = -u : n === 1 / 0 ? u = u - t : u = (u - t) / (n - t), u = i(u), s === -1 / 0 ? u = -u : r === 1 / 0 ? u = u + s : u = u * (r - s) + s, u);
}
function Es(e, t) {
  for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n)
    ;
  return n - 1;
}
var Os = (e, t = "end") => (n) => {
  n = t === "end" ? Math.min(n, 0.999) : Math.max(n, 1e-3);
  const s = n * e, r = t === "end" ? Math.floor(s) : Math.ceil(s);
  return gs(0, 1, r / e);
}, Je = 1.70158, Be = Je * 1.525, tn = Je + 1, nn = 2 * Math.PI / 3, sn = 2 * Math.PI / 4.5, He = (e) => e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375 : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375, Ms = {
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
  easeInBack: (e) => tn * e * e * e - Je * e * e,
  easeOutBack: (e) => 1 + tn * Math.pow(e - 1, 3) + Je * Math.pow(e - 1, 2),
  easeInOutBack: (e) => e < 0.5 ? Math.pow(2 * e, 2) * ((Be + 1) * 2 * e - Be) / 2 : (Math.pow(2 * e - 2, 2) * ((Be + 1) * (e * 2 - 2) + Be) + 2) / 2,
  easeInElastic: (e) => e === 0 ? 0 : e === 1 ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((e * 10 - 10.75) * nn),
  easeOutElastic: (e) => e === 0 ? 0 : e === 1 ? 1 : Math.pow(2, -10 * e) * Math.sin((e * 10 - 0.75) * nn) + 1,
  easeInOutElastic: (e) => e === 0 ? 0 : e === 1 ? 1 : e < 0.5 ? -(Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * sn)) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * sn) / 2 + 1,
  easeInBounce: (e) => 1 - He(1 - e),
  easeOutBounce: He,
  easeInOutBounce: (e) => e < 0.5 ? (1 - He(1 - 2 * e)) / 2 : (1 + He(2 * e - 1)) / 2,
  steps: Os
}, Ee = Symbol.for("FluidValue.get"), he = Symbol.for("FluidValue.observers"), U = (e) => !!(e && e[Ee]), z = (e) => e && e[Ee] ? e[Ee]() : e, rn = (e) => e[he] || null;
function Cs(e, t) {
  e.eventObserved ? e.eventObserved(t) : e(t);
}
function Oe(e, t) {
  const n = e[he];
  n && n.forEach((s) => {
    Cs(s, t);
  });
}
var Tn = class {
  constructor(e) {
    if (!e && !(e = this.get))
      throw Error("Unknown getter");
    Ts(this, e);
  }
}, Ts = (e, t) => Vn(e, Ee, t);
function me(e, t) {
  if (e[Ee]) {
    let n = e[he];
    n || Vn(e, he, n = /* @__PURE__ */ new Set()), n.has(t) || (n.add(t), e.observerAdded && e.observerAdded(n.size, t));
  }
  return t;
}
function Me(e, t) {
  const n = e[he];
  if (n && n.has(t)) {
    const s = n.size - 1;
    s ? n.delete(t) : e[he] = null, e.observerRemoved && e.observerRemoved(s, t);
  }
}
var Vn = (e, t, n) => Object.defineProperty(e, t, {
  value: n,
  writable: !0,
  configurable: !0
}), We = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, Vs = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi, an = new RegExp(`(${We.source})(%|[a-z]+)`, "i"), Fs = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi, rt = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/, Fn = (e) => {
  const [t, n] = zs(e);
  if (!t || $t())
    return e;
  const s = window.getComputedStyle(document.documentElement).getPropertyValue(t);
  if (s)
    return s.trim();
  if (n && n.startsWith("--")) {
    const r = window.getComputedStyle(document.documentElement).getPropertyValue(n);
    return r || e;
  } else {
    if (n && rt.test(n))
      return Fn(n);
    if (n)
      return n;
  }
  return e;
}, zs = (e) => {
  const t = rt.exec(e);
  if (!t)
    return [,];
  const [, n, s] = t;
  return [n, s];
}, mt, xs = (e, t, n, s, r) => `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(s)}, ${r})`, zn = (e) => {
  mt || (mt = re ? (
    // match color names, ignore partial matches
    new RegExp(`(${Object.keys(re).join("|")})(?!\\w)`, "g")
  ) : (
    // never match
    /^\b$/
  ));
  const t = e.output.map((i) => z(i).replace(rt, Fn).replace(Vs, en).replace(mt, en)), n = t.map((i) => i.match(We).map(Number)), r = n[0].map(
    (i, a) => n.map((o) => {
      if (!(a in o))
        throw Error('The arity of each "output" value must be equal');
      return o[a];
    })
  ).map(
    (i) => ke({ ...e, output: i })
  );
  return (i) => {
    var l;
    const a = !an.test(t[0]) && ((l = t.find((u) => an.test(u))) == null ? void 0 : l.replace(We, ""));
    let o = 0;
    return t[0].replace(
      We,
      () => `${r[o++](i)}${a || ""}`
    ).replace(Fs, xs);
  };
}, Ut = "react-spring: ", xn = (e) => {
  const t = e;
  let n = !1;
  if (typeof t != "function")
    throw new TypeError(`${Ut}once requires a function parameter`);
  return (...s) => {
    n || (t(...s), n = !0);
  };
}, qs = xn(console.warn);
function qn() {
  qs(
    `${Ut}The "interpolate" function is deprecated in v9 (use "to" instead)`
  );
}
var $s = xn(console.warn);
function js() {
  $s(
    `${Ut}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`
  );
}
function it(e) {
  return c.str(e) && (e[0] == "#" || /\d/.test(e) || // Do not identify a CSS variable as an AnimatedString if its SSR
  !$t() && rt.test(e) || e in (re || {}));
}
var ce, Ge = /* @__PURE__ */ new WeakMap(), Ls = (e) => e.forEach(({ target: t, contentRect: n }) => {
  var s;
  return (s = Ge.get(t)) == null ? void 0 : s.forEach((r) => r(n));
});
function Us(e, t) {
  ce || typeof ResizeObserver < "u" && (ce = new ResizeObserver(Ls));
  let n = Ge.get(t);
  return n || (n = /* @__PURE__ */ new Set(), Ge.set(t, n)), n.add(e), ce && ce.observe(t), () => {
    const s = Ge.get(t);
    s && (s.delete(e), !s.size && ce && ce.unobserve(t));
  };
}
var Ke = /* @__PURE__ */ new Set(), ge, Qs = () => {
  const e = () => {
    Ke.forEach(
      (t) => t({
        width: window.innerWidth,
        height: window.innerHeight
      })
    );
  };
  return window.addEventListener("resize", e), () => {
    window.removeEventListener("resize", e);
  };
}, Ns = (e) => (Ke.add(e), ge || (ge = Qs()), () => {
  Ke.delete(e), !Ke.size && ge && (ge(), ge = void 0);
}), $n = (e, { container: t = document.documentElement } = {}) => t === document.documentElement ? Ns(e) : Us(e, t), Ds = (e, t, n) => t - e === 0 ? 1 : (n - e) / (t - e), Bs = {
  x: {
    length: "Width",
    position: "Left"
  },
  y: {
    length: "Height",
    position: "Top"
  }
}, Hs = class {
  constructor(e, t) {
    this.createAxis = () => ({
      current: 0,
      progress: 0,
      scrollLength: 0
    }), this.updateAxis = (n) => {
      const s = this.info[n], { length: r, position: i } = Bs[n];
      s.current = this.container[`scroll${i}`], s.scrollLength = this.container["scroll" + r] - this.container["client" + r], s.progress = Ds(0, s.scrollLength, s.current);
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
}, ve = /* @__PURE__ */ new WeakMap(), on = /* @__PURE__ */ new WeakMap(), pt = /* @__PURE__ */ new WeakMap(), un = (e) => e === document.documentElement ? window : e, Ws = (e, { container: t = document.documentElement } = {}) => {
  let n = pt.get(t);
  n || (n = /* @__PURE__ */ new Set(), pt.set(t, n));
  const s = new Hs(e, t);
  if (n.add(s), !ve.has(t)) {
    const i = () => (n == null || n.forEach((o) => o.advance()), !0);
    ve.set(t, i);
    const a = un(t);
    window.addEventListener("resize", i, { passive: !0 }), t !== document.documentElement && on.set(t, $n(i, { container: t })), a.addEventListener("scroll", i, { passive: !0 });
  }
  const r = ve.get(t);
  return b(r), () => {
    var o;
    b.cancel(r);
    const i = pt.get(t);
    if (!i || (i.delete(s), i.size))
      return;
    const a = ve.get(t);
    ve.delete(t), a && (un(t).removeEventListener("scroll", a), window.removeEventListener("resize", a), (o = on.get(t)) == null || o());
  };
};
function Gs(e) {
  const t = N(null);
  return t.current === null && (t.current = e()), t.current;
}
var j = $t() ? xe : as, Ks = () => {
  const e = N(!1);
  return j(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
};
function Qt() {
  const e = qe()[1], t = Ks();
  return () => {
    t.current && e(Math.random());
  };
}
function Ys(e, t) {
  const [n] = qe(
    () => ({
      inputs: t,
      result: e()
    })
  ), s = N(), r = s.current;
  let i = r;
  return i ? t && i.inputs && Xs(t, i.inputs) || (i = {
    inputs: t,
    result: e()
  }) : i = n, xe(() => {
    s.current = i, r == n && (n.inputs = n.result = void 0);
  }, [i]), i.result;
}
function Xs(e, t) {
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
var at = (e) => xe(e, Zs), Zs = [];
function St(e) {
  const t = N();
  return xe(() => {
    t.current = e;
  }), t.current;
}
var jr = () => {
  const [e, t] = qe(null);
  return j(() => {
    const n = window.matchMedia("(prefers-reduced-motion)"), s = (r) => {
      t(r.matches), On({
        skipAnimation: r.matches
      });
    };
    return s(n), n.addEventListener("change", s), () => {
      n.removeEventListener("change", s);
    };
  }, []), e;
}, Ce = Symbol.for("Animated:node"), Js = (e) => !!e && e[Ce] === e, G = (e) => e && e[Ce], Nt = (e, t) => hs(e, Ce, t), ot = (e) => e && e[Ce] && e[Ce].getPayload(), jn = class {
  constructor() {
    Nt(this, this);
  }
  /** Get every `AnimatedValue` used by this node. */
  getPayload() {
    return this.payload || [];
  }
}, Ue = class extends jn {
  constructor(e) {
    super(), this._value = e, this.done = !0, this.durationProgress = 0, c.num(this._value) && (this.lastPosition = this._value);
  }
  /** @internal */
  static create(e) {
    return new Ue(e);
  }
  getPayload() {
    return [this];
  }
  getValue() {
    return this._value;
  }
  setValue(e, t) {
    return c.num(e) && (this.lastPosition = e, t && (e = Math.round(e / t) * t, this.done && (this.lastPosition = e))), this._value === e ? !1 : (this._value = e, !0);
  }
  reset() {
    const { done: e } = this;
    this.done = !1, c.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, e && (this.lastVelocity = null), this.v0 = null);
  }
}, Te = class extends Ue {
  constructor(e) {
    super(0), this._string = null, this._toString = ke({
      output: [e, e]
    });
  }
  /** @internal */
  static create(e) {
    return new Te(e);
  }
  getValue() {
    const e = this._string;
    return e ?? (this._string = this._toString(this._value));
  }
  setValue(e) {
    if (c.str(e)) {
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
    e && (this._toString = ke({
      output: [this.getValue(), e]
    })), this._value = 0, super.reset();
  }
}, et = { dependencies: null }, ut = class extends jn {
  constructor(e) {
    super(), this.source = e, this.setValue(e);
  }
  getValue(e) {
    const t = {};
    return K(this.source, (n, s) => {
      Js(n) ? t[s] = n.getValue(e) : U(n) ? t[s] = z(n) : e || (t[s] = n);
    }), t;
  }
  /** Replace the raw object data */
  setValue(e) {
    this.source = e, this.payload = this._makePayload(e);
  }
  reset() {
    this.payload && p(this.payload, (e) => e.reset());
  }
  /** Create a payload set. */
  _makePayload(e) {
    if (e) {
      const t = /* @__PURE__ */ new Set();
      return K(e, this._addToPayload, t), Array.from(t);
    }
  }
  /** Add to a payload set. */
  _addToPayload(e) {
    et.dependencies && U(e) && et.dependencies.add(e);
    const t = ot(e);
    t && p(t, (n) => this.add(n));
  }
}, Ln = class extends ut {
  constructor(e) {
    super(e);
  }
  /** @internal */
  static create(e) {
    return new Ln(e);
  }
  getValue() {
    return this.source.map((e) => e.getValue());
  }
  setValue(e) {
    const t = this.getPayload();
    return e.length == t.length ? t.map((n, s) => n.setValue(e[s])).some(Boolean) : (super.setValue(e.map(er)), !0);
  }
};
function er(e) {
  return (it(e) ? Te : Ue).create(e);
}
function Pt(e) {
  const t = G(e);
  return t ? t.constructor : c.arr(e) ? Ln : it(e) ? Te : Ue;
}
var cn = (e, t) => {
  const n = (
    // Function components must use "forwardRef" to avoid being
    // re-rendered on every animation frame.
    !c.fun(e) || e.prototype && e.prototype.isReactComponent
  );
  return os((s, r) => {
    const i = N(null), a = n && // eslint-disable-next-line react-hooks/rules-of-hooks
    us(
      (h) => {
        i.current = sr(r, h);
      },
      [r]
    ), [o, l] = nr(s, t), u = Qt(), m = () => {
      const h = i.current;
      if (n && !h)
        return;
      (h ? t.applyAnimatedValues(h, o.getValue(!0)) : !1) === !1 && u();
    }, d = new tr(m, l), f = N();
    j(() => (f.current = d, p(l, (h) => me(h, d)), () => {
      f.current && (p(
        f.current.deps,
        (h) => Me(h, f.current)
      ), b.cancel(f.current.update));
    })), xe(m, []), at(() => () => {
      const h = f.current;
      p(h.deps, (v) => Me(v, h));
    });
    const _ = t.getComponentProps(o.getValue());
    return /* @__PURE__ */ le.createElement(e, { ..._, ref: a });
  });
}, tr = class {
  constructor(e, t) {
    this.update = e, this.deps = t;
  }
  eventObserved(e) {
    e.type == "change" && b.write(this.update);
  }
};
function nr(e, t) {
  const n = /* @__PURE__ */ new Set();
  return et.dependencies = n, e.style && (e = {
    ...e,
    style: t.createAnimatedStyle(e.style)
  }), e = new ut(e), et.dependencies = null, [e, n];
}
function sr(e, t) {
  return e && (c.fun(e) ? e(t) : e.current = t), t;
}
var ln = Symbol.for("AnimatedComponent"), rr = (e, {
  applyAnimatedValues: t = () => !1,
  createAnimatedStyle: n = (r) => new ut(r),
  getComponentProps: s = (r) => r
} = {}) => {
  const r = {
    applyAnimatedValues: t,
    createAnimatedStyle: n,
    getComponentProps: s
  }, i = (a) => {
    const o = dn(a) || "Anonymous";
    return c.str(a) ? a = i[a] || (i[a] = cn(a, r)) : a = a[ln] || (a[ln] = cn(a, r)), a.displayName = `Animated(${o})`, a;
  };
  return K(e, (a, o) => {
    c.arr(e) && (o = dn(a)), i[o] = i(a);
  }), {
    animated: i
  };
}, dn = (e) => c.str(e) ? e : e && c.str(e.displayName) ? e.displayName : c.fun(e) && e.name || null, Lr = class {
};
function T(e, ...t) {
  return c.fun(e) ? e(...t) : e;
}
var Ae = (e, t) => e === !0 || !!(t && e && (c.fun(e) ? e(t) : V(e).includes(t))), Un = (e, t) => c.obj(e) ? t && e[t] : e, Qn = (e, t) => e.default === !0 ? e[t] : e.default ? e.default[t] : void 0, ir = (e) => e, ct = (e, t = ir) => {
  let n = ar;
  e.default && e.default !== !0 && (e = e.default, n = Object.keys(e));
  const s = {};
  for (const r of n) {
    const i = t(e[r], r);
    c.und(i) || (s[r] = i);
  }
  return s;
}, ar = [
  "config",
  "onProps",
  "onStart",
  "onChange",
  "onPause",
  "onResume",
  "onRest"
], or = {
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
function ur(e) {
  const t = {};
  let n = 0;
  if (K(e, (s, r) => {
    or[r] || (t[r] = s, n++);
  }), n)
    return t;
}
function Dt(e) {
  const t = ur(e);
  if (t) {
    const n = { to: t };
    return K(e, (s, r) => r in t || (n[r] = s)), n;
  }
  return { ...e };
}
function Ve(e) {
  return e = z(e), c.arr(e) ? e.map(Ve) : it(e) ? W.createStringInterpolator({
    range: [0, 1],
    output: [e, e]
  })(1) : e;
}
function Nn(e) {
  for (const t in e)
    return !0;
  return !1;
}
function It(e) {
  return c.fun(e) || c.arr(e) && c.obj(e[0]);
}
function At(e, t) {
  var n;
  (n = e.ref) == null || n.delete(e), t == null || t.delete(e);
}
function Bt(e, t) {
  var n;
  t && e.ref !== t && ((n = e.ref) == null || n.delete(e), t.add(e), e.ref = t);
}
function Ur(e, t, n = 1e3) {
  j(() => {
    if (t) {
      let s = 0;
      p(e, (r, i) => {
        const a = r.current;
        if (a.length) {
          let o = n * t[i];
          isNaN(o) ? o = s : s = o, p(a, (l) => {
            p(l.queue, (u) => {
              const m = u.delay;
              u.delay = (d) => o + T(m || 0, d);
            });
          }), r.start();
        }
      });
    } else {
      let s = Promise.resolve();
      p(e, (r) => {
        const i = r.current;
        if (i.length) {
          const a = i.map((o) => {
            const l = o.queue;
            return o.queue = [], l;
          });
          s = s.then(() => (p(
            i,
            (o, l) => p(a[l] || [], (u) => o.queue.push(u))
          ), Promise.all(r.start())));
        }
      });
    }
  });
}
var cr = {
  default: { tension: 170, friction: 26 },
  gentle: { tension: 120, friction: 14 },
  wobbly: { tension: 180, friction: 12 },
  stiff: { tension: 210, friction: 20 },
  slow: { tension: 280, friction: 60 },
  molasses: { tension: 280, friction: 120 }
}, Rt = {
  ...cr.default,
  mass: 1,
  damping: 1,
  easing: Ms.linear,
  clamp: !1
}, lr = class {
  constructor() {
    this.velocity = 0, Object.assign(this, Rt);
  }
};
function dr(e, t, n) {
  n && (n = { ...n }, fn(n, t), t = { ...n, ...t }), fn(e, t), Object.assign(e, t);
  for (const a in Rt)
    e[a] == null && (e[a] = Rt[a]);
  let { frequency: s, damping: r } = e;
  const { mass: i } = e;
  return c.und(s) || (s < 0.01 && (s = 0.01), r < 0 && (r = 0), e.tension = Math.pow(2 * Math.PI / s, 2) * i, e.friction = 4 * Math.PI * r * i / s), e;
}
function fn(e, t) {
  if (!c.und(t.decay))
    e.duration = void 0;
  else {
    const n = !c.und(t.tension) || !c.und(t.friction);
    (n || !c.und(t.frequency) || !c.und(t.damping) || !c.und(t.mass)) && (e.duration = void 0, e.decay = void 0), n && (e.frequency = void 0);
  }
}
var hn = [], fr = class {
  constructor() {
    this.changed = !1, this.values = hn, this.toValues = null, this.fromValues = hn, this.config = new lr(), this.immediate = !1;
  }
};
function Dn(e, { key: t, props: n, defaultProps: s, state: r, actions: i }) {
  return new Promise((a, o) => {
    let l, u, m = Ae(n.cancel ?? (s == null ? void 0 : s.cancel), t);
    if (m)
      _();
    else {
      c.und(n.pause) || (r.paused = Ae(n.pause, t));
      let h = s == null ? void 0 : s.pause;
      h !== !0 && (h = r.paused || Ae(h, t)), l = T(n.delay || 0, t), h ? (r.resumeQueue.add(f), i.pause()) : (i.resume(), f());
    }
    function d() {
      r.resumeQueue.add(f), r.timeouts.delete(u), u.cancel(), l = u.time - b.now();
    }
    function f() {
      l > 0 && !W.skipAnimation ? (r.delayed = !0, u = b.setTimeout(_, l), r.pauseQueue.add(d), r.timeouts.add(u)) : _();
    }
    function _() {
      r.delayed && (r.delayed = !1), r.pauseQueue.delete(d), r.timeouts.delete(u), e <= (r.cancelId || 0) && (m = !0);
      try {
        i.start({ ...n, callId: e, cancel: m }, a);
      } catch (h) {
        o(h);
      }
    }
  });
}
var Ht = (e, t) => t.length == 1 ? t[0] : t.some((n) => n.cancelled) ? fe(e.get()) : t.every((n) => n.noop) ? Bn(e.get()) : B(
  e.get(),
  t.every((n) => n.finished)
), Bn = (e) => ({
  value: e,
  noop: !0,
  finished: !0,
  cancelled: !1
}), B = (e, t, n = !1) => ({
  value: e,
  finished: t,
  cancelled: n
}), fe = (e) => ({
  value: e,
  cancelled: !0,
  finished: !1
});
function Hn(e, t, n, s) {
  const { callId: r, parentId: i, onRest: a } = t, { asyncTo: o, promise: l } = n;
  return !i && e === o && !t.reset ? l : n.promise = (async () => {
    n.asyncId = r, n.asyncTo = e;
    const u = ct(
      t,
      (y, g) => (
        // The `onRest` prop is only called when the `runAsync` promise is resolved.
        g === "onRest" ? void 0 : y
      )
    );
    let m, d;
    const f = new Promise(
      (y, g) => (m = y, d = g)
    ), _ = (y) => {
      const g = (
        // The `cancel` prop or `stop` method was used.
        r <= (n.cancelId || 0) && fe(s) || // The async `to` prop was replaced.
        r !== n.asyncId && B(s, !1)
      );
      if (g)
        throw y.result = g, d(y), y;
    }, h = (y, g) => {
      const P = new mn(), w = new pn();
      return (async () => {
        if (W.skipAnimation)
          throw Fe(n), w.result = B(s, !1), d(w), w;
        _(P);
        const A = c.obj(y) ? { ...y } : { ...g, to: y };
        A.parentId = r, K(u, (x, k) => {
          c.und(A[k]) && (A[k] = x);
        });
        const R = await s.start(A);
        return _(P), n.paused && await new Promise((x) => {
          n.resumeQueue.add(x);
        }), R;
      })();
    };
    let v;
    if (W.skipAnimation)
      return Fe(n), B(s, !1);
    try {
      let y;
      c.arr(e) ? y = (async (g) => {
        for (const P of g)
          await h(P);
      })(e) : y = Promise.resolve(e(h, s.stop.bind(s))), await Promise.all([y.then(m), f]), v = B(s.get(), !0, !1);
    } catch (y) {
      if (y instanceof mn)
        v = y.result;
      else if (y instanceof pn)
        v = y.result;
      else
        throw y;
    } finally {
      r == n.asyncId && (n.asyncId = i, n.asyncTo = i ? o : void 0, n.promise = i ? l : void 0);
    }
    return c.fun(a) && b.batchedUpdates(() => {
      a(v, s, s.item);
    }), v;
  })();
}
function Fe(e, t) {
  Pe(e.timeouts, (n) => n.cancel()), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, t && (e.cancelId = t);
}
var mn = class extends Error {
  constructor() {
    super(
      "An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."
    );
  }
}, pn = class extends Error {
  constructor() {
    super("SkipAnimationSignal");
  }
}, kt = (e) => e instanceof Wt, hr = 1, Wt = class extends Tn {
  constructor() {
    super(...arguments), this.id = hr++, this._priority = 0;
  }
  get priority() {
    return this._priority;
  }
  set priority(e) {
    this._priority != e && (this._priority = e, this._onPriorityChange(e));
  }
  /** Get the current value */
  get() {
    const e = G(this);
    return e && e.getValue();
  }
  /** Create a spring that maps our value to another value */
  to(...e) {
    return W.to(this, e);
  }
  /** @deprecated Use the `to` method instead. */
  interpolate(...e) {
    return qn(), W.to(this, e);
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
    Oe(this, {
      type: "change",
      parent: this,
      value: e,
      idle: t
    });
  }
  /** Tell our children about our new priority */
  _onPriorityChange(e) {
    this.idle || Le.sort(this), Oe(this, {
      type: "priority",
      parent: this,
      priority: e
    });
  }
}, oe = Symbol.for("SpringPhase"), Wn = 1, Et = 2, Ot = 4, gt = (e) => (e[oe] & Wn) > 0, te = (e) => (e[oe] & Et) > 0, ye = (e) => (e[oe] & Ot) > 0, gn = (e, t) => t ? e[oe] |= Et | Wn : e[oe] &= ~Et, vn = (e, t) => t ? e[oe] |= Ot : e[oe] &= ~Ot, Gn = class extends Wt {
  constructor(e, t) {
    if (super(), this.animation = new fr(), this.defaultProps = {}, this._state = {
      paused: !1,
      delayed: !1,
      pauseQueue: /* @__PURE__ */ new Set(),
      resumeQueue: /* @__PURE__ */ new Set(),
      timeouts: /* @__PURE__ */ new Set()
    }, this._pendingCalls = /* @__PURE__ */ new Set(), this._lastCallId = 0, this._lastToId = 0, this._memoizedDuration = 0, !c.und(e) || !c.und(t)) {
      const n = c.obj(e) ? { ...e } : { ...t, from: e };
      c.und(n.default) && (n.default = !0), this.start(n);
    }
  }
  /** Equals true when not advancing on each frame. */
  get idle() {
    return !(te(this) || this._state.asyncTo) || ye(this);
  }
  get goal() {
    return z(this.animation.to);
  }
  get velocity() {
    const e = G(this);
    return e instanceof Ue ? e.lastVelocity || 0 : e.getPayload().map((t) => t.lastVelocity || 0);
  }
  /**
   * When true, this value has been animated at least once.
   */
  get hasAnimated() {
    return gt(this);
  }
  /**
   * When true, this value has an unfinished animation,
   * which is either active or paused.
   */
  get isAnimating() {
    return te(this);
  }
  /**
   * When true, all current and future animations are paused.
   */
  get isPaused() {
    return ye(this);
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
    const s = this.animation;
    let { toValues: r } = s;
    const { config: i } = s, a = ot(s.to);
    !a && U(s.to) && (r = V(z(s.to))), s.values.forEach((u, m) => {
      if (u.done)
        return;
      const d = (
        // Animated strings always go from 0 to 1.
        u.constructor == Te ? 1 : a ? a[m].lastPosition : r[m]
      );
      let f = s.immediate, _ = d;
      if (!f) {
        if (_ = u.lastPosition, i.tension <= 0) {
          u.done = !0;
          return;
        }
        let h = u.elapsedTime += e;
        const v = s.fromValues[m], y = u.v0 != null ? u.v0 : u.v0 = c.arr(i.velocity) ? i.velocity[m] : i.velocity;
        let g;
        const P = i.precision || (v == d ? 5e-3 : Math.min(1, Math.abs(d - v) * 1e-3));
        if (c.und(i.duration))
          if (i.decay) {
            const w = i.decay === !0 ? 0.998 : i.decay, A = Math.exp(-(1 - w) * h);
            _ = v + y / (1 - w) * (1 - A), f = Math.abs(u.lastPosition - _) <= P, g = y * A;
          } else {
            g = u.lastVelocity == null ? y : u.lastVelocity;
            const w = i.restVelocity || P / 10, A = i.clamp ? 0 : i.bounce, R = !c.und(A), x = v == d ? u.v0 > 0 : v < d;
            let k, F = !1;
            const E = 1, L = Math.ceil(e / E);
            for (let q = 0; q < L && (k = Math.abs(g) > w, !(!k && (f = Math.abs(d - _) <= P, f))); ++q) {
              R && (F = _ == d || _ > d == x, F && (g = -g * A, _ = d));
              const Y = -i.tension * 1e-6 * (_ - d), X = -i.friction * 1e-3 * g, S = (Y + X) / i.mass;
              g = g + S * E, _ = _ + g * E;
            }
          }
        else {
          let w = 1;
          i.duration > 0 && (this._memoizedDuration !== i.duration && (this._memoizedDuration = i.duration, u.durationProgress > 0 && (u.elapsedTime = i.duration * u.durationProgress, h = u.elapsedTime += e)), w = (i.progress || 0) + h / this._memoizedDuration, w = w > 1 ? 1 : w < 0 ? 0 : w, u.durationProgress = w), _ = v + i.easing(w) * (d - v), g = (_ - u.lastPosition) / e, f = w == 1;
        }
        u.lastVelocity = g, Number.isNaN(_) && (console.warn("Got NaN while animating:", this), f = !0);
      }
      a && !a[m].done && (f = !1), f ? u.done = !0 : t = !1, u.setValue(_, i.round) && (n = !0);
    });
    const o = G(this), l = o.getValue();
    if (t) {
      const u = z(s.to);
      (l !== u || n) && !i.decay ? (o.setValue(u), this._onChange(u)) : n && i.decay && this._onChange(l), this._stop();
    } else
      n && this._onChange(l);
  }
  /** Set the current value, while stopping the current animation */
  set(e) {
    return b.batchedUpdates(() => {
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
    if (te(this)) {
      const { to: e, config: t } = this.animation;
      b.batchedUpdates(() => {
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
    return c.und(e) ? (n = this.queue || [], this.queue = []) : n = [c.obj(e) ? e : { ...t, to: e }], Promise.all(
      n.map((s) => this._update(s))
    ).then((s) => Ht(this, s));
  }
  /**
   * Stop the current animation, and cancel any delayed updates.
   *
   * Pass `true` to call `onRest` with `cancelled: true`.
   */
  stop(e) {
    const { to: t } = this.animation;
    return this._focus(this.get()), Fe(this._state, e && this._lastCallId), b.batchedUpdates(() => this._stop(t, e)), this;
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
    let { to: n, from: s } = e;
    n = c.obj(n) ? n[t] : n, (n == null || It(n)) && (n = void 0), s = c.obj(s) ? s[t] : s, s == null && (s = void 0);
    const r = { to: n, from: s };
    return gt(this) || (e.reverse && ([n, s] = [s, n]), s = z(s), c.und(s) ? G(this) || this._set(n) : this._set(s)), r;
  }
  /** Every update is processed by this method before merging. */
  _update({ ...e }, t) {
    const { key: n, defaultProps: s } = this;
    e.default && Object.assign(
      s,
      ct(
        e,
        (a, o) => /^on/.test(o) ? Un(a, n) : a
      )
    ), wn(this, e, "onProps"), be(this, "onProps", e, this);
    const r = this._prepareNode(e);
    if (Object.isFrozen(this))
      throw Error(
        "Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?"
      );
    const i = this._state;
    return Dn(++this._lastCallId, {
      key: n,
      props: e,
      defaultProps: s,
      state: i,
      actions: {
        pause: () => {
          ye(this) || (vn(this, !0), Se(i.pauseQueue), be(
            this,
            "onPause",
            B(this, we(this, this.animation.to)),
            this
          ));
        },
        resume: () => {
          ye(this) && (vn(this, !1), te(this) && this._resume(), Se(i.resumeQueue), be(
            this,
            "onResume",
            B(this, we(this, this.animation.to)),
            this
          ));
        },
        start: this._merge.bind(this, r)
      }
    }).then((a) => {
      if (e.loop && a.finished && !(t && a.noop)) {
        const o = Kn(e);
        if (o)
          return this._update(o, !0);
      }
      return a;
    });
  }
  /** Merge props into the current animation */
  _merge(e, t, n) {
    if (t.cancel)
      return this.stop(!0), n(fe(this));
    const s = !c.und(e.to), r = !c.und(e.from);
    if (s || r)
      if (t.callId > this._lastToId)
        this._lastToId = t.callId;
      else
        return n(fe(this));
    const { key: i, defaultProps: a, animation: o } = this, { to: l, from: u } = o;
    let { to: m = l, from: d = u } = e;
    r && !s && (!t.default || c.und(m)) && (m = d), t.reverse && ([m, d] = [d, m]);
    const f = !J(d, u);
    f && (o.from = d), d = z(d);
    const _ = !J(m, l);
    _ && this._focus(m);
    const h = It(t.to), { config: v } = o, { decay: y, velocity: g } = v;
    (s || r) && (v.velocity = 0), t.config && !h && dr(
      v,
      T(t.config, i),
      // Avoid calling the same "config" prop twice.
      t.config !== a.config ? T(a.config, i) : void 0
    );
    let P = G(this);
    if (!P || c.und(m))
      return n(B(this, !0));
    const w = (
      // When `reset` is undefined, the `from` prop implies `reset: true`,
      // except for declarative updates. When `reset` is defined, there
      // must exist a value to animate from.
      c.und(t.reset) ? r && !t.default : !c.und(d) && Ae(t.reset, i)
    ), A = w ? d : this.get(), R = Ve(m), x = c.num(R) || c.arr(R) || it(R), k = !h && (!x || Ae(a.immediate || t.immediate, i));
    if (_) {
      const q = Pt(m);
      if (q !== P.constructor)
        if (k)
          P = this._set(R);
        else
          throw Error(
            `Cannot animate between ${P.constructor.name} and ${q.name}, as the "to" prop suggests`
          );
    }
    const F = P.constructor;
    let E = U(m), L = !1;
    if (!E) {
      const q = w || !gt(this) && f;
      (_ || q) && (L = J(Ve(A), R), E = !L), (!J(o.immediate, k) && !k || !J(v.decay, y) || !J(v.velocity, g)) && (E = !0);
    }
    if (L && te(this) && (o.changed && !w ? E = !0 : E || this._stop(l)), !h && ((E || U(l)) && (o.values = P.getPayload(), o.toValues = U(m) ? null : F == Te ? [1] : V(R)), o.immediate != k && (o.immediate = k, !k && !w && this._set(l)), E)) {
      const { onRest: q } = o;
      p(pr, (X) => wn(this, t, X));
      const Y = B(this, we(this, l));
      Se(this._pendingCalls, Y), this._pendingCalls.add(n), o.changed && b.batchedUpdates(() => {
        var X;
        o.changed = !w, q == null || q(Y, this), w ? T(a.onRest, Y) : (X = o.onStart) == null || X.call(o, Y, this);
      });
    }
    w && this._set(A), h ? n(Hn(t.to, t, this._state, this)) : E ? this._start() : te(this) && !_ ? this._pendingCalls.add(n) : n(Bn(A));
  }
  /** Update the `animation.to` value, which might be a `FluidValue` */
  _focus(e) {
    const t = this.animation;
    e !== t.to && (rn(this) && this._detach(), t.to = e, rn(this) && this._attach());
  }
  _attach() {
    let e = 0;
    const { to: t } = this.animation;
    U(t) && (me(t, this), kt(t) && (e = t.priority + 1)), this.priority = e;
  }
  _detach() {
    const { to: e } = this.animation;
    U(e) && Me(e, this);
  }
  /**
   * Update the current value from outside the frameloop,
   * and return the `Animated` node.
   */
  _set(e, t = !0) {
    const n = z(e);
    if (!c.und(n)) {
      const s = G(this);
      if (!s || !J(n, s.getValue())) {
        const r = Pt(n);
        !s || s.constructor != r ? Nt(this, r.create(n)) : s.setValue(n), s && b.batchedUpdates(() => {
          this._onChange(n, t);
        });
      }
    }
    return G(this);
  }
  _onStart() {
    const e = this.animation;
    e.changed || (e.changed = !0, be(
      this,
      "onStart",
      B(this, we(this, e.to)),
      this
    ));
  }
  _onChange(e, t) {
    t || (this._onStart(), T(this.animation.onChange, e, this)), T(this.defaultProps.onChange, e, this), super._onChange(e, t);
  }
  // This method resets the animation state (even if already animating) to
  // ensure the latest from/to range is used, and it also ensures this spring
  // is added to the frameloop.
  _start() {
    const e = this.animation;
    G(this).reset(z(e.to)), e.immediate || (e.fromValues = e.values.map((t) => t.lastPosition)), te(this) || (gn(this, !0), ye(this) || this._resume());
  }
  _resume() {
    W.skipAnimation ? this.finish() : Le.start(this);
  }
  /**
   * Exit the frameloop and notify `onRest` listeners.
   *
   * Always wrap `_stop` calls with `batchedUpdates`.
   */
  _stop(e, t) {
    if (te(this)) {
      gn(this, !1);
      const n = this.animation;
      p(n.values, (r) => {
        r.done = !0;
      }), n.toValues && (n.onChange = n.onPause = n.onResume = void 0), Oe(this, {
        type: "idle",
        parent: this
      });
      const s = t ? fe(this.get()) : B(this.get(), we(this, e ?? n.to));
      Se(this._pendingCalls, s), n.changed && (n.changed = !1, be(this, "onRest", s, this));
    }
  }
};
function we(e, t) {
  const n = Ve(t), s = Ve(e.get());
  return J(s, n);
}
function Kn(e, t = e.loop, n = e.to) {
  const s = T(t);
  if (s) {
    const r = s !== !0 && Dt(s), i = (r || e).reverse, a = !r || r.reset;
    return ze({
      ...e,
      loop: t,
      // Avoid updating default props when looping.
      default: !1,
      // Never loop the `pause` prop.
      pause: void 0,
      // For the "reverse" prop to loop as expected, the "to" prop
      // must be undefined. The "reverse" prop is ignored when the
      // "to" prop is an array or function.
      to: !i || It(n) ? n : void 0,
      // Ignore the "from" prop except on reset.
      from: a ? e.from : void 0,
      reset: a,
      // The "loop" prop can return a "useSpring" props object to
      // override any of the original props.
      ...r
    });
  }
}
function ze(e) {
  const { to: t, from: n } = e = Dt(e), s = /* @__PURE__ */ new Set();
  return c.obj(t) && yn(t, s), c.obj(n) && yn(n, s), e.keys = s.size ? Array.from(s) : null, e;
}
function mr(e) {
  const t = ze(e);
  return c.und(t.default) && (t.default = ct(t)), t;
}
function yn(e, t) {
  K(e, (n, s) => n != null && t.add(s));
}
var pr = [
  "onStart",
  "onRest",
  "onChange",
  "onPause",
  "onResume"
];
function wn(e, t, n) {
  e.animation[n] = t[n] !== Qn(t, n) ? Un(t[n], e.key) : void 0;
}
function be(e, t, ...n) {
  var s, r, i, a;
  (r = (s = e.animation)[t]) == null || r.call(s, ...n), (a = (i = e.defaultProps)[t]) == null || a.call(i, ...n);
}
var gr = ["onStart", "onChange", "onRest"], vr = 1, Yn = class {
  constructor(e, t) {
    this.id = vr++, this.springs = {}, this.queue = [], this._lastAsyncId = 0, this._active = /* @__PURE__ */ new Set(), this._changed = /* @__PURE__ */ new Set(), this._started = !1, this._state = {
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
      c.und(n) || this.springs[t].set(n);
    }
  }
  /** Push an update onto the queue of each value. */
  update(e) {
    return e && this.queue.push(ze(e)), this;
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
    return e ? t = V(e).map(ze) : this.queue = [], this._flush ? this._flush(this, t) : (ts(this, t), Mt(this, t));
  }
  /** @internal */
  stop(e, t) {
    if (e !== !!e && (t = e), t) {
      const n = this.springs;
      p(V(t), (s) => n[s].stop(!!e));
    } else
      Fe(this._state, this._lastAsyncId), this.each((n) => n.stop(!!e));
    return this;
  }
  /** Freeze the active animation in time */
  pause(e) {
    if (c.und(e))
      this.start({ pause: !0 });
    else {
      const t = this.springs;
      p(V(e), (n) => t[n].pause());
    }
    return this;
  }
  /** Resume the animation if paused. */
  resume(e) {
    if (c.und(e))
      this.start({ pause: !1 });
    else {
      const t = this.springs;
      p(V(e), (n) => t[n].resume());
    }
    return this;
  }
  /** Call a function once per spring value */
  each(e) {
    K(this.springs, e);
  }
  /** @internal Called at the end of every animation frame */
  _onFrame() {
    const { onStart: e, onChange: t, onRest: n } = this._events, s = this._active.size > 0, r = this._changed.size > 0;
    (s && !this._started || r && !this._started) && (this._started = !0, Pe(e, ([o, l]) => {
      l.value = this.get(), o(l, this, this._item);
    }));
    const i = !s && this._started, a = r || i && n.size ? this.get() : null;
    r && t.size && Pe(t, ([o, l]) => {
      l.value = a, o(l, this, this._item);
    }), i && (this._started = !1, Pe(n, ([o, l]) => {
      l.value = a, o(l, this, this._item);
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
    b.onFrame(this._onFrame);
  }
};
function Mt(e, t) {
  return Promise.all(t.map((n) => Xn(e, n))).then(
    (n) => Ht(e, n)
  );
}
async function Xn(e, t, n) {
  const { keys: s, to: r, from: i, loop: a, onRest: o, onResolve: l } = t, u = c.obj(t.default) && t.default;
  a && (t.loop = !1), r === !1 && (t.to = null), i === !1 && (t.from = null);
  const m = c.arr(r) || c.fun(r) ? r : void 0;
  m ? (t.to = void 0, t.onRest = void 0, u && (u.onRest = void 0)) : p(gr, (v) => {
    const y = t[v];
    if (c.fun(y)) {
      const g = e._events[v];
      t[v] = ({ finished: P, cancelled: w }) => {
        const A = g.get(y);
        A ? (P || (A.finished = !1), w && (A.cancelled = !0)) : g.set(y, {
          value: null,
          finished: P || !1,
          cancelled: w || !1
        });
      }, u && (u[v] = t[v]);
    }
  });
  const d = e._state;
  t.pause === !d.paused ? (d.paused = t.pause, Se(t.pause ? d.pauseQueue : d.resumeQueue)) : d.paused && (t.pause = !0);
  const f = (s || Object.keys(e.springs)).map(
    (v) => e.springs[v].start(t)
  ), _ = t.cancel === !0 || Qn(t, "cancel") === !0;
  (m || _ && d.asyncId) && f.push(
    Dn(++e._lastAsyncId, {
      props: t,
      state: d,
      actions: {
        pause: bt,
        resume: bt,
        start(v, y) {
          _ ? (Fe(d, e._lastAsyncId), y(fe(e))) : (v.onRest = o, y(
            Hn(
              m,
              v,
              d,
              e
            )
          ));
        }
      }
    })
  ), d.paused && await new Promise((v) => {
    d.resumeQueue.add(v);
  });
  const h = Ht(e, await Promise.all(f));
  if (a && h.finished && !(n && h.noop)) {
    const v = Kn(t, a, r);
    if (v)
      return ts(e, [v]), Xn(e, v, !0);
  }
  return l && b.batchedUpdates(() => l(h, e, e.item)), h;
}
function Ct(e, t) {
  const n = { ...e.springs };
  return t && p(V(t), (s) => {
    c.und(s.keys) && (s = ze(s)), c.obj(s.to) || (s = { ...s, to: void 0 }), es(n, s, (r) => Jn(r));
  }), Zn(e, n), n;
}
function Zn(e, t) {
  K(t, (n, s) => {
    e.springs[s] || (e.springs[s] = n, me(n, e));
  });
}
function Jn(e, t) {
  const n = new Gn();
  return n.key = e, t && me(n, t), n;
}
function es(e, t, n) {
  t.keys && p(t.keys, (s) => {
    (e[s] || (e[s] = n(s)))._prepareNode(t);
  });
}
function ts(e, t) {
  p(t, (n) => {
    es(e.springs, n, (s) => Jn(s, e));
  });
}
var Qe = ({
  children: e,
  ...t
}) => {
  const n = Tt(tt), s = t.pause || !!n.pause, r = t.immediate || !!n.immediate;
  t = Ys(() => ({ pause: s, immediate: r }), [s, r]);
  const { Provider: i } = tt;
  return /* @__PURE__ */ le.createElement(i, { value: t }, e);
}, tt = yr(Qe, {});
Qe.Provider = tt.Provider;
Qe.Consumer = tt.Consumer;
function yr(e, t) {
  return Object.assign(e, le.createContext(t)), e.Provider._context = e, e.Consumer._context = e, e;
}
var Gt = () => {
  const e = [], t = function(s) {
    js();
    const r = [];
    return p(e, (i, a) => {
      if (c.und(s))
        r.push(i.start());
      else {
        const o = n(s, i, a);
        o && r.push(i.start(o));
      }
    }), r;
  };
  t.current = e, t.add = function(s) {
    e.includes(s) || e.push(s);
  }, t.delete = function(s) {
    const r = e.indexOf(s);
    ~r && e.splice(r, 1);
  }, t.pause = function() {
    return p(e, (s) => s.pause(...arguments)), this;
  }, t.resume = function() {
    return p(e, (s) => s.resume(...arguments)), this;
  }, t.set = function(s) {
    p(e, (r, i) => {
      const a = c.fun(s) ? s(i, r) : s;
      a && r.set(a);
    });
  }, t.start = function(s) {
    const r = [];
    return p(e, (i, a) => {
      if (c.und(s))
        r.push(i.start());
      else {
        const o = this._getProps(s, i, a);
        o && r.push(i.start(o));
      }
    }), r;
  }, t.stop = function() {
    return p(e, (s) => s.stop(...arguments)), this;
  }, t.update = function(s) {
    return p(e, (r, i) => r.update(this._getProps(s, r, i))), this;
  };
  const n = function(s, r, i) {
    return c.fun(s) ? s(i, r) : s;
  };
  return t._getProps = n, t;
};
function ns(e, t, n) {
  const s = c.fun(t) && t;
  s && !n && (n = []);
  const r = _e(
    () => s || arguments.length == 3 ? Gt() : void 0,
    []
  ), i = N(0), a = Qt(), o = _e(
    () => ({
      ctrls: [],
      queue: [],
      flush(g, P) {
        const w = Ct(g, P);
        return i.current > 0 && !o.queue.length && !Object.keys(w).some((R) => !g.springs[R]) ? Mt(g, P) : new Promise((R) => {
          Zn(g, w), o.queue.push(() => {
            R(Mt(g, P));
          }), a();
        });
      }
    }),
    []
  ), l = N([...o.ctrls]), u = [], m = St(e) || 0;
  _e(() => {
    p(l.current.slice(e, m), (g) => {
      At(g, r), g.stop(!0);
    }), l.current.length = e, d(m, e);
  }, [e]), _e(() => {
    d(0, Math.min(m, e));
  }, n);
  function d(g, P) {
    for (let w = g; w < P; w++) {
      const A = l.current[w] || (l.current[w] = new Yn(null, o.flush)), R = s ? s(w, A) : t[w];
      R && (u[w] = mr(R));
    }
  }
  const f = l.current.map((g, P) => Ct(g, u[P])), _ = Tt(Qe), h = St(_), v = _ !== h && Nn(_);
  j(() => {
    i.current++, o.ctrls = l.current;
    const { queue: g } = o;
    g.length && (o.queue = [], p(g, (P) => P())), p(l.current, (P, w) => {
      r == null || r.add(P), v && P.start({ default: _ });
      const A = u[w];
      A && (Bt(P, A.ref), P.ref ? P.queue.push(A) : P.start(A));
    });
  }), at(() => () => {
    p(o.ctrls, (g) => g.stop(!0));
  });
  const y = f.map((g) => ({ ...g }));
  return r ? [y, r] : y;
}
function lt(e, t) {
  const n = c.fun(e), [[s], r] = ns(
    1,
    n ? e : [e],
    n ? t || [] : t
  );
  return n || arguments.length == 2 ? [s, r] : s;
}
var wr = () => Gt(), Qr = () => qe(wr)[0], Nr = (e, t) => {
  const n = Gs(() => new Gn(e, t));
  return at(() => () => {
    n.stop();
  }), n;
};
function br(e, t, n) {
  const s = c.fun(t) && t;
  s && !n && (n = []);
  let r = !0, i;
  const a = ns(
    e,
    (o, l) => {
      const u = s ? s(o, l) : t;
      return i = u.ref, r = r && u.reverse, u;
    },
    // Ensure the props function is called when no deps exist.
    // This works around the 3 argument rule.
    n || [{}]
  );
  if (j(() => {
    p(a[1].current, (o, l) => {
      const u = a[1].current[l + (r ? 1 : -1)];
      if (Bt(o, i), o.ref) {
        u && o.update({ to: u.springs });
        return;
      }
      u ? o.start({ to: u.springs }) : o.start();
    });
  }, n), s || arguments.length == 3) {
    const o = i ?? a[1];
    return o._getProps = (l, u, m) => {
      const d = c.fun(l) ? l(m, u) : l;
      if (d) {
        const f = o.current[m + (d.reverse ? 1 : -1)];
        return f && (d.to = f.springs), d;
      }
    }, a;
  }
  return a[0];
}
function _r(e, t, n) {
  const s = c.fun(t) && t, {
    reset: r,
    sort: i,
    trail: a = 0,
    expires: o = !0,
    exitBeforeEnter: l = !1,
    onDestroyed: u,
    ref: m,
    config: d
  } = s ? s() : t, f = _e(
    () => s || arguments.length == 3 ? Gt() : void 0,
    []
  ), _ = V(e), h = [], v = N(null), y = r ? null : v.current;
  j(() => {
    v.current = h;
  }), at(() => (p(h, (S) => {
    f == null || f.add(S.ctrl), S.ctrl.ref = f;
  }), () => {
    p(v.current, (S) => {
      S.expired && clearTimeout(S.expirationId), At(S.ctrl, f), S.ctrl.stop(!0);
    });
  }));
  const g = Pr(_, s ? s() : t, y), P = r && v.current || [];
  j(
    () => p(P, ({ ctrl: S, item: I, key: M }) => {
      At(S, f), T(u, I, M);
    })
  );
  const w = [];
  if (y && p(y, (S, I) => {
    S.expired ? (clearTimeout(S.expirationId), P.push(S)) : (I = w[I] = g.indexOf(S.key), ~I && (h[I] = S));
  }), p(_, (S, I) => {
    h[I] || (h[I] = {
      key: g[I],
      item: S,
      phase: "mount",
      ctrl: new Yn()
    }, h[I].ctrl.item = S);
  }), w.length) {
    let S = -1;
    const { leave: I } = s ? s() : t;
    p(w, (M, C) => {
      const O = y[C];
      ~M ? (S = h.indexOf(O), h[S] = { ...O, item: _[M] }) : I && h.splice(++S, 0, O);
    });
  }
  c.fun(i) && h.sort((S, I) => i(S.item, I.item));
  let A = -a;
  const R = Qt(), x = ct(t), k = /* @__PURE__ */ new Map(), F = N(/* @__PURE__ */ new Map()), E = N(!1);
  p(h, (S, I) => {
    const M = S.key, C = S.phase, O = s ? s() : t;
    let $, Z;
    const rs = T(O.delay || 0, M);
    if (C == "mount")
      $ = O.enter, Z = "enter";
    else {
      const D = g.indexOf(M) < 0;
      if (C != "leave")
        if (D)
          $ = O.leave, Z = "leave";
        else if ($ = O.update)
          Z = "update";
        else
          return;
      else if (!D)
        $ = O.enter, Z = "enter";
      else
        return;
    }
    if ($ = T($, S.item, I), $ = c.obj($) ? Dt($) : { to: $ }, !$.config) {
      const D = d || x.config;
      $.config = T(D, S.item, I, Z);
    }
    A += a;
    const ie = {
      ...x,
      // we need to add our props.delay value you here.
      delay: rs + A,
      ref: m,
      immediate: O.immediate,
      // This prevents implied resets.
      reset: !1,
      // Merge any phase-specific props.
      ...$
    };
    if (Z == "enter" && c.und(ie.from)) {
      const D = s ? s() : t, pe = c.und(D.initial) || y ? D.from : D.initial;
      ie.from = T(pe, S.item, I);
    }
    const { onResolve: is } = ie;
    ie.onResolve = (D) => {
      T(is, D);
      const pe = v.current, ee = pe.find((Ne) => Ne.key === M);
      if (ee && !(D.cancelled && ee.phase != "update") && ee.ctrl.idle) {
        const Ne = pe.every((ae) => ae.ctrl.idle);
        if (ee.phase == "leave") {
          const ae = T(o, ee.item);
          if (ae !== !1) {
            const dt = ae === !0 ? 0 : ae;
            if (ee.expired = !0, !Ne && dt > 0) {
              dt <= 2147483647 && (ee.expirationId = setTimeout(R, dt));
              return;
            }
          }
        }
        Ne && pe.some((ae) => ae.expired) && (F.current.delete(ee), l && (E.current = !0), R());
      }
    };
    const Yt = Ct(S.ctrl, ie);
    Z === "leave" && l ? F.current.set(S, { phase: Z, springs: Yt, payload: ie }) : k.set(S, { phase: Z, springs: Yt, payload: ie });
  });
  const L = Tt(Qe), q = St(L), Y = L !== q && Nn(L);
  j(() => {
    Y && p(h, (S) => {
      S.ctrl.start({ default: L });
    });
  }, [L]), p(k, (S, I) => {
    if (F.current.size) {
      const M = h.findIndex((C) => C.key === I.key);
      h.splice(M, 1);
    }
  }), j(
    () => {
      p(
        F.current.size ? F.current : k,
        ({ phase: S, payload: I }, M) => {
          const { ctrl: C } = M;
          M.phase = S, f == null || f.add(C), Y && S == "enter" && C.start({ default: L }), I && (Bt(C, I.ref), (C.ref || f) && !E.current ? C.update(I) : (C.start(I), E.current && (E.current = !1)));
        }
      );
    },
    r ? void 0 : n
  );
  const X = (S) => /* @__PURE__ */ le.createElement(le.Fragment, null, h.map((I, M) => {
    const { springs: C } = k.get(I) || I.ctrl, O = S({ ...C }, I.item, I, M);
    return O && O.type ? /* @__PURE__ */ le.createElement(
      O.type,
      {
        ...O.props,
        key: c.str(I.key) || c.num(I.key) ? I.key : I.ctrl.id,
        ref: O.ref
      }
    ) : O;
  }));
  return f ? [X, f] : X;
}
var Sr = 1;
function Pr(e, { key: t, keys: n = t }, s) {
  if (n === null) {
    const r = /* @__PURE__ */ new Set();
    return e.map((i) => {
      const a = s && s.find(
        (o) => o.item === i && o.phase !== "leave" && !r.has(o)
      );
      return a ? (r.add(a), a.key) : Sr++;
    });
  }
  return c.und(n) ? e : c.fun(n) ? e.map(n) : V(n);
}
var Dr = ({
  container: e,
  ...t
} = {}) => {
  const [n, s] = lt(
    () => ({
      scrollX: 0,
      scrollY: 0,
      scrollXProgress: 0,
      scrollYProgress: 0,
      ...t
    }),
    []
  );
  return j(() => {
    const r = Ws(
      ({ x: i, y: a }) => {
        s.start({
          scrollX: i.current,
          scrollXProgress: i.progress,
          scrollY: a.current,
          scrollYProgress: a.progress
        });
      },
      { container: (e == null ? void 0 : e.current) || void 0 }
    );
    return () => {
      p(Object.values(n), (i) => i.stop()), r();
    };
  }, []), n;
}, Br = ({
  container: e,
  ...t
}) => {
  const [n, s] = lt(
    () => ({
      width: 0,
      height: 0,
      ...t
    }),
    []
  );
  return j(() => {
    const r = $n(
      ({ width: i, height: a }) => {
        s.start({
          width: i,
          height: a,
          immediate: n.width.get() === 0 || n.height.get() === 0
        });
      },
      { container: (e == null ? void 0 : e.current) || void 0 }
    );
    return () => {
      p(Object.values(n), (i) => i.stop()), r();
    };
  }, []), n;
}, Ir = {
  any: 0,
  all: 1
};
function Hr(e, t) {
  const [n, s] = qe(!1), r = N(), i = c.fun(e) && e, a = i ? i() : {}, { to: o = {}, from: l = {}, ...u } = a, m = i ? t : e, [d, f] = lt(() => ({ from: l, ...u }), []);
  return j(() => {
    const _ = r.current, {
      root: h,
      once: v,
      amount: y = "any",
      ...g
    } = m ?? {};
    if (!_ || v && n || typeof IntersectionObserver > "u")
      return;
    const P = /* @__PURE__ */ new WeakMap(), w = () => (o && f.start(o), s(!0), v ? void 0 : () => {
      l && f.start(l), s(!1);
    }), A = (x) => {
      x.forEach((k) => {
        const F = P.get(k.target);
        if (k.isIntersecting !== !!F)
          if (k.isIntersecting) {
            const E = w();
            c.fun(E) ? P.set(k.target, E) : R.unobserve(k.target);
          } else
            F && (F(), P.delete(k.target));
      });
    }, R = new IntersectionObserver(A, {
      root: h && h.current || void 0,
      threshold: typeof y == "number" || Array.isArray(y) ? y : Ir[y],
      ...g
    });
    return R.observe(_), () => R.unobserve(_);
  }, [m]), i ? [r, d] : [r, n];
}
function Wr({ children: e, ...t }) {
  return e(lt(t));
}
function Gr({
  items: e,
  children: t,
  ...n
}) {
  const s = br(e.length, n);
  return e.map((r, i) => {
    const a = t(r, i);
    return c.fun(a) ? a(s[i]) : a;
  });
}
function Kr({
  items: e,
  children: t,
  ...n
}) {
  return _r(e, n)(t);
}
var Kt = class extends Wt {
  constructor(e, t) {
    super(), this.source = e, this.idle = !0, this._active = /* @__PURE__ */ new Set(), this.calc = ke(...t);
    const n = this._get(), s = Pt(n);
    Nt(this, s.create(n));
  }
  advance(e) {
    const t = this._get(), n = this.get();
    J(t, n) || (G(this).setValue(t), this._onChange(t, this.idle)), !this.idle && bn(this._active) && vt(this);
  }
  _get() {
    const e = c.arr(this.source) ? this.source.map(z) : V(z(this.source));
    return this.calc(...e);
  }
  _start() {
    this.idle && !bn(this._active) && (this.idle = !1, p(ot(this), (e) => {
      e.done = !1;
    }), W.skipAnimation ? (b.batchedUpdates(() => this.advance()), vt(this)) : Le.start(this));
  }
  // Observe our sources only when we're observed.
  _attach() {
    let e = 1;
    p(V(this.source), (t) => {
      U(t) && me(t, this), kt(t) && (t.idle || this._active.add(t), e = Math.max(e, t.priority + 1));
    }), this.priority = e, this._start();
  }
  // Stop observing our sources once we have no observers.
  _detach() {
    p(V(this.source), (e) => {
      U(e) && Me(e, this);
    }), this._active.clear(), vt(this);
  }
  /** @internal */
  eventObserved(e) {
    e.type == "change" ? e.idle ? this.advance() : (this._active.add(e.parent), this._start()) : e.type == "idle" ? this._active.delete(e.parent) : e.type == "priority" && (this.priority = V(this.source).reduce(
      (t, n) => Math.max(t, (kt(n) ? n.priority : 0) + 1),
      0
    ));
  }
};
function Ar(e) {
  return e.idle !== !1;
}
function bn(e) {
  return !e.size || Array.from(e).every(Ar);
}
function vt(e) {
  e.idle || (e.idle = !0, p(ot(e), (t) => {
    t.done = !0;
  }), Oe(e, {
    type: "idle",
    parent: e
  }));
}
var Yr = (e, ...t) => new Kt(e, t), Xr = (e, ...t) => (qn(), new Kt(e, t));
W.assign({
  createStringInterpolator: zn,
  to: (e, t) => new Kt(e, t)
});
var Zr = Le.advance, ss = /^--/;
function Rr(e, t) {
  return t == null || typeof t == "boolean" || t === "" ? "" : typeof t == "number" && t !== 0 && !ss.test(e) && !(Re.hasOwnProperty(e) && Re[e]) ? t + "px" : ("" + t).trim();
}
var _n = {};
function kr(e, t) {
  if (!e.nodeType || !e.setAttribute)
    return !1;
  const n = e.nodeName === "filter" || e.parentNode && e.parentNode.nodeName === "filter", { style: s, children: r, scrollTop: i, scrollLeft: a, viewBox: o, ...l } = t, u = Object.values(l), m = Object.keys(l).map(
    (d) => n || e.hasAttribute(d) ? d : _n[d] || (_n[d] = d.replace(
      /([A-Z])/g,
      // Attributes are written in dash case
      (f) => "-" + f.toLowerCase()
    ))
  );
  r !== void 0 && (e.textContent = r);
  for (const d in s)
    if (s.hasOwnProperty(d)) {
      const f = Rr(d, s[d]);
      ss.test(d) ? e.style.setProperty(d, f) : e.style[d] = f;
    }
  m.forEach((d, f) => {
    e.setAttribute(d, u[f]);
  }), i !== void 0 && (e.scrollTop = i), a !== void 0 && (e.scrollLeft = a), o !== void 0 && e.setAttribute("viewBox", o);
}
var Re = {
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
}, Er = (e, t) => e + t.charAt(0).toUpperCase() + t.substring(1), Or = ["Webkit", "Ms", "Moz", "O"];
Re = Object.keys(Re).reduce((e, t) => (Or.forEach((n) => e[Er(n, t)] = e[t]), e), Re);
var Mr = /^(matrix|translate|scale|rotate|skew)/, Cr = /^(translate)/, Tr = /^(rotate|skew)/, yt = (e, t) => c.num(e) && e !== 0 ? e + t : e, Ye = (e, t) => c.arr(e) ? e.every((n) => Ye(n, t)) : c.num(e) ? e === t : parseFloat(e) === t, Vr = class extends ut {
  constructor({ x: e, y: t, z: n, ...s }) {
    const r = [], i = [];
    (e || t || n) && (r.push([e || 0, t || 0, n || 0]), i.push((a) => [
      `translate3d(${a.map((o) => yt(o, "px")).join(",")})`,
      // prettier-ignore
      Ye(a, 0)
    ])), K(s, (a, o) => {
      if (o === "transform")
        r.push([a || ""]), i.push((l) => [l, l === ""]);
      else if (Mr.test(o)) {
        if (delete s[o], c.und(a))
          return;
        const l = Cr.test(o) ? "px" : Tr.test(o) ? "deg" : "";
        r.push(V(a)), i.push(
          o === "rotate3d" ? ([u, m, d, f]) => [
            `rotate3d(${u},${m},${d},${yt(f, l)})`,
            Ye(f, 0)
          ] : (u) => [
            `${o}(${u.map((m) => yt(m, l)).join(",")})`,
            Ye(u, o.startsWith("scale") ? 1 : 0)
          ]
        );
      }
    }), r.length && (s.transform = new Fr(r, i)), super(s);
  }
}, Fr = class extends Tn {
  constructor(e, t) {
    super(), this.inputs = e, this.transforms = t, this._value = null;
  }
  get() {
    return this._value || (this._value = this._get());
  }
  _get() {
    let e = "", t = !0;
    return p(this.inputs, (n, s) => {
      const r = z(n[0]), [i, a] = this.transforms[s](
        c.arr(r) ? r : n.map(z)
      );
      e += " " + i, t = t && a;
    }), t ? "none" : e;
  }
  // Start observing our inputs once we have an observer.
  observerAdded(e) {
    e == 1 && p(
      this.inputs,
      (t) => p(
        t,
        (n) => U(n) && me(n, this)
      )
    );
  }
  // Stop observing our inputs once we have no observers.
  observerRemoved(e) {
    e == 0 && p(
      this.inputs,
      (t) => p(
        t,
        (n) => U(n) && Me(n, this)
      )
    );
  }
  eventObserved(e) {
    e.type == "change" && (this._value = null), Oe(this, e);
  }
}, zr = [
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
W.assign({
  batchedUpdates: cs,
  createStringInterpolator: zn,
  colors: vs
});
var xr = rr(zr, {
  applyAnimatedValues: kr,
  createAnimatedStyle: (e) => new Vr(e),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getComponentProps: ({ scrollTop: e, scrollLeft: t, ...n }) => n
}), Jr = xr.animated;
export {
  Lr as Any,
  mn as BailSignal,
  Yn as Controller,
  Wt as FrameValue,
  W as Globals,
  Kt as Interpolation,
  Wr as Spring,
  Qe as SpringContext,
  Gt as SpringRef,
  Gn as SpringValue,
  Gr as Trail,
  Kr as Transition,
  Jr as a,
  Jr as animated,
  cr as config,
  ke as createInterpolator,
  Ms as easings,
  Dt as inferTo,
  Xr as interpolate,
  Yr as to,
  Zr as update,
  Ur as useChain,
  Hr as useInView,
  j as useIsomorphicLayoutEffect,
  jr as useReducedMotion,
  Br as useResize,
  Dr as useScroll,
  lt as useSpring,
  Qr as useSpringRef,
  Nr as useSpringValue,
  ns as useSprings,
  br as useTrail,
  _r as useTransition
};
