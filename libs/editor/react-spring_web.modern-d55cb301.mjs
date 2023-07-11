import * as le from "react";
import { useEffect as xe, useLayoutEffect as ar, useState as qe, useRef as Q, forwardRef as or, useCallback as ur, useContext as Tt, useMemo as _e } from "react";
import { unstable_batchedUpdates as cr } from "react-dom";
var lr = Object.defineProperty, dr = (e, t) => {
  for (var n in t)
    lr(e, n, { get: t[n], enumerable: !0 });
}, W = {};
dr(W, {
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
  const n = b.now() + t, r = () => {
    const i = de.findIndex((a) => a.cancel == r);
    ~i && de.splice(i, 1), ne -= ~i ? 1 : 0;
  }, s = { time: n, handler: e, cancel: r };
  return de.splice(Pn(n), 0, s), ne += 1, Sn(), s;
};
var Pn = (e) => ~(~de.findIndex((t) => t.time > e) || ~de.length);
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
  function r(...s) {
    t = s, b.onStart(n);
  }
  return r.handler = e, r.cancel = () => {
    nt.delete(n), t = null;
  }, r;
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
var te = -1, ne = 0, wt = !1;
function $e(e, t) {
  wt ? (t.delete(e), e(0)) : (t.add(e), Sn());
}
function Sn() {
  te < 0 && (te = 0, b.frameLoop !== "demand" && qt(In));
}
function fr() {
  te = -1;
}
function In() {
  ~te && (qt(In), b.batchedUpdates(An));
}
function An() {
  const e = te;
  te = b.now();
  const t = Pn(te);
  if (t && (Rn(de.splice(0, t), (n) => n.handler()), ne -= t), !ne) {
    fr();
    return;
  }
  nt.flush(), Vt.flush(e ? Math.min(64, te - e) : 16.667), zt.flush(), Ft.flush(), xt.flush();
}
function je() {
  let e = /* @__PURE__ */ new Set(), t = e;
  return {
    add(n) {
      ne += t == e && !e.has(n) ? 1 : 0, e.add(n);
    },
    delete(n) {
      return ne -= t == e && e.has(n) ? 1 : 0, e.delete(n);
    },
    flush(n) {
      t.size && (e = /* @__PURE__ */ new Set(), ne -= t.size, Rn(t, (r) => r(n) && e.add(r)), ne += e.size, t = e);
    }
  };
}
function Rn(e, t) {
  e.forEach((n) => {
    try {
      t(n);
    } catch (r) {
      b.catch(r);
    }
  });
}
function bt() {
}
var hr = (e, t, n) => Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 }), c = {
  arr: Array.isArray,
  obj: (e) => !!e && e.constructor.name === "Object",
  fun: (e) => typeof e == "function",
  str: (e) => typeof e == "string",
  num: (e) => typeof e == "number",
  und: (e) => e === void 0
};
function Z(e, t) {
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
    for (let r = 0; r < e.length; r++)
      t.call(n, e[r], `${r}`);
    return;
  }
  for (const r in e)
    e.hasOwnProperty(r) && t.call(n, e[r], r);
}
var V = (e) => c.und(e) ? [] : c.arr(e) ? e : [e];
function Se(e, t) {
  if (e.size) {
    const n = Array.from(e);
    e.clear(), p(n, t);
  }
}
var Pe = (e, ...t) => Se(e, (n) => n(...t)), $t = () => typeof window > "u" || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent), jt, kn, re = null, En = !1, Lt = bt, On = (e) => {
  e.to && (kn = e.to), e.now && (b.now = e.now), e.colors !== void 0 && (re = e.colors), e.skipAnimation != null && (En = e.skipAnimation), e.createStringInterpolator && (jt = e.createStringInterpolator), e.requestAnimationFrame && b.use(e.requestAnimationFrame), e.batchedUpdates && (b.batchedUpdates = e.batchedUpdates), e.willAdvance && (Lt = e.willAdvance), e.frameLoop && (b.frameLoop = e.frameLoop);
}, Ie = /* @__PURE__ */ new Set(), U = [], ft = [], Xe = 0, Le = {
  get idle() {
    return !Ie.size && !U.length;
  },
  /** Advance the given animation on every frame until idle. */
  start(e) {
    Xe > e.priority ? (Ie.add(e), b.onStart(mr)) : (Mn(e), b(_t));
  },
  /** Advance all animations by the given time. */
  advance: _t,
  /** Call this when an animation's priority changes. */
  sort(e) {
    if (Xe)
      b.onFrame(() => Le.sort(e));
    else {
      const t = U.indexOf(e);
      ~t && (U.splice(t, 1), Cn(e));
    }
  },
  /**
   * Clear all animations. For testing purposes.
   *
   * ☠️ Never call this from within the frameloop.
   */
  clear() {
    U = [], Ie.clear();
  }
};
function mr() {
  Ie.forEach(Mn), Ie.clear(), b(_t);
}
function Mn(e) {
  U.includes(e) || Cn(e);
}
function Cn(e) {
  U.splice(
    pr(U, (t) => t.priority > e.priority),
    0,
    e
  );
}
function _t(e) {
  const t = ft;
  for (let n = 0; n < U.length; n++) {
    const r = U[n];
    Xe = r.priority, r.idle || (Lt(r), r.advance(e), r.idle || t.push(r));
  }
  return Xe = 0, ft = U, ft.length = 0, U = t, U.length > 0;
}
function pr(e, t) {
  const n = e.findIndex(t);
  return n < 0 ? e.length : n;
}
var gr = (e, t, n) => Math.min(Math.max(n, e), t), vr = {
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
function rt(...e) {
  return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)";
}
var yr = new RegExp("rgb" + rt(H, H, H)), wr = new RegExp("rgba" + rt(H, H, H, H)), br = new RegExp("hsl" + rt(H, Ze, Ze)), _r = new RegExp(
  "hsla" + rt(H, Ze, Ze, H)
), Pr = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, Sr = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, Ir = /^#([0-9a-fA-F]{6})$/, Ar = /^#([0-9a-fA-F]{8})$/;
function Rr(e) {
  let t;
  return typeof e == "number" ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = Ir.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : re && re[e] !== void 0 ? re[e] : (t = yr.exec(e)) ? (ue(t[1]) << 24 | // r
  ue(t[2]) << 16 | // g
  ue(t[3]) << 8 | // b
  255) >>> // a
  0 : (t = wr.exec(e)) ? (ue(t[1]) << 24 | // r
  ue(t[2]) << 16 | // g
  ue(t[3]) << 8 | // b
  Jt(t[4])) >>> // a
  0 : (t = Pr.exec(e)) ? parseInt(
    t[1] + t[1] + // r
    t[2] + t[2] + // g
    t[3] + t[3] + // b
    "ff",
    // a
    16
  ) >>> 0 : (t = Ar.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = Sr.exec(e)) ? parseInt(
    t[1] + t[1] + // r
    t[2] + t[2] + // g
    t[3] + t[3] + // b
    t[4] + t[4],
    // a
    16
  ) >>> 0 : (t = br.exec(e)) ? (Xt(
    Zt(t[1]),
    // h
    De(t[2]),
    // s
    De(t[3])
    // l
  ) | 255) >>> // a
  0 : (t = _r.exec(e)) ? (Xt(
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
  const r = n < 0.5 ? n * (1 + t) : n + t - n * t, s = 2 * n - r, i = ht(s, r, e + 1 / 3), a = ht(s, r, e), o = ht(s, r, e - 1 / 3);
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
  let t = Rr(e);
  if (t === null)
    return e;
  t = t || 0;
  const n = (t & 4278190080) >>> 24, r = (t & 16711680) >>> 16, s = (t & 65280) >>> 8, i = (t & 255) / 255;
  return `rgba(${n}, ${r}, ${s}, ${i})`;
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
  const r = e, s = r.output, i = r.range || [0, 1], a = r.extrapolateLeft || r.extrapolate || "extend", o = r.extrapolateRight || r.extrapolate || "extend", l = r.easing || ((u) => u);
  return (u) => {
    const h = Er(u, i);
    return kr(
      u,
      i[h],
      i[h + 1],
      s[h],
      s[h + 1],
      l,
      a,
      o,
      r.map
    );
  };
};
function kr(e, t, n, r, s, i, a, o, l) {
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
  return r === s ? r : t === n ? e <= t ? r : s : (t === -1 / 0 ? u = -u : n === 1 / 0 ? u = u - t : u = (u - t) / (n - t), u = i(u), r === -1 / 0 ? u = -u : s === 1 / 0 ? u = u + r : u = u * (s - r) + r, u);
}
function Er(e, t) {
  for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n)
    ;
  return n - 1;
}
var Or = (e, t = "end") => (n) => {
  n = t === "end" ? Math.min(n, 0.999) : Math.max(n, 1e-3);
  const r = n * e, s = t === "end" ? Math.floor(r) : Math.ceil(r);
  return gr(0, 1, s / e);
}, Je = 1.70158, Be = Je * 1.525, tn = Je + 1, nn = 2 * Math.PI / 3, rn = 2 * Math.PI / 4.5, He = (e) => e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375 : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375, Mr = {
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
  easeInOutElastic: (e) => e === 0 ? 0 : e === 1 ? 1 : e < 0.5 ? -(Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * rn)) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * rn) / 2 + 1,
  easeInBounce: (e) => 1 - He(1 - e),
  easeOutBounce: He,
  easeInOutBounce: (e) => e < 0.5 ? (1 - He(1 - 2 * e)) / 2 : (1 + He(2 * e - 1)) / 2,
  steps: Or
}, Ee = Symbol.for("FluidValue.get"), he = Symbol.for("FluidValue.observers"), L = (e) => !!(e && e[Ee]), z = (e) => e && e[Ee] ? e[Ee]() : e, sn = (e) => e[he] || null;
function Cr(e, t) {
  e.eventObserved ? e.eventObserved(t) : e(t);
}
function Oe(e, t) {
  const n = e[he];
  n && n.forEach((r) => {
    Cr(r, t);
  });
}
var Tn = class {
  constructor(e) {
    if (!e && !(e = this.get))
      throw Error("Unknown getter");
    Tr(this, e);
  }
}, Tr = (e, t) => Vn(e, Ee, t);
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
    const r = n.size - 1;
    r ? n.delete(t) : e[he] = null, e.observerRemoved && e.observerRemoved(r, t);
  }
}
var Vn = (e, t, n) => Object.defineProperty(e, t, {
  value: n,
  writable: !0,
  configurable: !0
}), We = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, Vr = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi, an = new RegExp(`(${We.source})(%|[a-z]+)`, "i"), Fr = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi, st = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/, Fn = (e) => {
  const [t, n] = zr(e);
  if (!t || $t())
    return e;
  const r = window.getComputedStyle(document.documentElement).getPropertyValue(t);
  if (r)
    return r.trim();
  if (n && n.startsWith("--")) {
    const s = window.getComputedStyle(document.documentElement).getPropertyValue(n);
    return s || e;
  } else {
    if (n && st.test(n))
      return Fn(n);
    if (n)
      return n;
  }
  return e;
}, zr = (e) => {
  const t = st.exec(e);
  if (!t)
    return [,];
  const [, n, r] = t;
  return [n, r];
}, mt, xr = (e, t, n, r, s) => `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${s})`, zn = (e) => {
  mt || (mt = re ? (
    // match color names, ignore partial matches
    new RegExp(`(${Object.keys(re).join("|")})(?!\\w)`, "g")
  ) : (
    // never match
    /^\b$/
  ));
  const t = e.output.map((i) => z(i).replace(st, Fn).replace(Vr, en).replace(mt, en)), n = t.map((i) => i.match(We).map(Number)), s = n[0].map(
    (i, a) => n.map((o) => {
      if (!(a in o))
        throw Error('The arity of each "output" value must be equal');
      return o[a];
    })
  ).map(
    (i) => ke({ ...e, output: i })
  );
  return (i) => {
    const a = !an.test(t[0]) && t.find((l) => an.test(l))?.replace(We, "");
    let o = 0;
    return t[0].replace(
      We,
      () => `${s[o++](i)}${a || ""}`
    ).replace(Fr, xr);
  };
}, Ut = "react-spring: ", xn = (e) => {
  const t = e;
  let n = !1;
  if (typeof t != "function")
    throw new TypeError(`${Ut}once requires a function parameter`);
  return (...r) => {
    n || (t(...r), n = !0);
  };
}, qr = xn(console.warn);
function qn() {
  qr(
    `${Ut}The "interpolate" function is deprecated in v9 (use "to" instead)`
  );
}
var $r = xn(console.warn);
function jr() {
  $r(
    `${Ut}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`
  );
}
function it(e) {
  return c.str(e) && (e[0] == "#" || /\d/.test(e) || // Do not identify a CSS variable as an AnimatedString if its SSR
  !$t() && st.test(e) || e in (re || {}));
}
var ce, Ge = /* @__PURE__ */ new WeakMap(), Lr = (e) => e.forEach(({ target: t, contentRect: n }) => Ge.get(t)?.forEach((r) => r(n)));
function Ur(e, t) {
  ce || typeof ResizeObserver < "u" && (ce = new ResizeObserver(Lr));
  let n = Ge.get(t);
  return n || (n = /* @__PURE__ */ new Set(), Ge.set(t, n)), n.add(e), ce && ce.observe(t), () => {
    const r = Ge.get(t);
    r && (r.delete(e), !r.size && ce && ce.unobserve(t));
  };
}
var Ke = /* @__PURE__ */ new Set(), ge, Qr = () => {
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
}, Nr = (e) => (Ke.add(e), ge || (ge = Qr()), () => {
  Ke.delete(e), !Ke.size && ge && (ge(), ge = void 0);
}), $n = (e, { container: t = document.documentElement } = {}) => t === document.documentElement ? Nr(e) : Ur(e, t), Dr = (e, t, n) => t - e === 0 ? 1 : (n - e) / (t - e), Br = {
  x: {
    length: "Width",
    position: "Left"
  },
  y: {
    length: "Height",
    position: "Top"
  }
}, Hr = class {
  constructor(e, t) {
    this.createAxis = () => ({
      current: 0,
      progress: 0,
      scrollLength: 0
    }), this.updateAxis = (n) => {
      const r = this.info[n], { length: s, position: i } = Br[n];
      r.current = this.container[`scroll${i}`], r.scrollLength = this.container["scroll" + s] - this.container["client" + s], r.progress = Dr(0, r.scrollLength, r.current);
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
}, ve = /* @__PURE__ */ new WeakMap(), on = /* @__PURE__ */ new WeakMap(), pt = /* @__PURE__ */ new WeakMap(), un = (e) => e === document.documentElement ? window : e, Wr = (e, { container: t = document.documentElement } = {}) => {
  let n = pt.get(t);
  n || (n = /* @__PURE__ */ new Set(), pt.set(t, n));
  const r = new Hr(e, t);
  if (n.add(r), !ve.has(t)) {
    const i = () => (n?.forEach((o) => o.advance()), !0);
    ve.set(t, i);
    const a = un(t);
    window.addEventListener("resize", i, { passive: !0 }), t !== document.documentElement && on.set(t, $n(i, { container: t })), a.addEventListener("scroll", i, { passive: !0 });
  }
  const s = ve.get(t);
  return b(s), () => {
    b.cancel(s);
    const i = pt.get(t);
    if (!i || (i.delete(r), i.size))
      return;
    const a = ve.get(t);
    ve.delete(t), a && (un(t).removeEventListener("scroll", a), window.removeEventListener("resize", a), on.get(t)?.());
  };
};
function Gr(e) {
  const t = Q(null);
  return t.current === null && (t.current = e()), t.current;
}
var $ = $t() ? xe : ar, Kr = () => {
  const e = Q(!1);
  return $(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
};
function Qt() {
  const e = qe()[1], t = Kr();
  return () => {
    t.current && e(Math.random());
  };
}
function Yr(e, t) {
  const [n] = qe(
    () => ({
      inputs: t,
      result: e()
    })
  ), r = Q(), s = r.current;
  let i = s;
  return i ? t && i.inputs && Xr(t, i.inputs) || (i = {
    inputs: t,
    result: e()
  }) : i = n, xe(() => {
    r.current = i, s == n && (n.inputs = n.result = void 0);
  }, [i]), i.result;
}
function Xr(e, t) {
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
var at = (e) => xe(e, Zr), Zr = [];
function Pt(e) {
  const t = Q();
  return xe(() => {
    t.current = e;
  }), t.current;
}
var js = () => {
  const [e, t] = qe(null);
  return $(() => {
    const n = window.matchMedia("(prefers-reduced-motion)"), r = (s) => {
      t(s.matches), On({
        skipAnimation: s.matches
      });
    };
    return r(n), n.addEventListener("change", r), () => {
      n.removeEventListener("change", r);
    };
  }, []), e;
}, Ce = Symbol.for("Animated:node"), Jr = (e) => !!e && e[Ce] === e, G = (e) => e && e[Ce], Nt = (e, t) => hr(e, Ce, t), ot = (e) => e && e[Ce] && e[Ce].getPayload(), jn = class {
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
    return K(this.source, (n, r) => {
      Jr(n) ? t[r] = n.getValue(e) : L(n) ? t[r] = z(n) : e || (t[r] = n);
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
    et.dependencies && L(e) && et.dependencies.add(e);
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
    return e.length == t.length ? t.map((n, r) => n.setValue(e[r])).some(Boolean) : (super.setValue(e.map(es)), !0);
  }
};
function es(e) {
  return (it(e) ? Te : Ue).create(e);
}
function St(e) {
  const t = G(e);
  return t ? t.constructor : c.arr(e) ? Ln : it(e) ? Te : Ue;
}
var cn = (e, t) => {
  const n = (
    // Function components must use "forwardRef" to avoid being
    // re-rendered on every animation frame.
    !c.fun(e) || e.prototype && e.prototype.isReactComponent
  );
  return or((r, s) => {
    const i = Q(null), a = n && // eslint-disable-next-line react-hooks/rules-of-hooks
    ur(
      (f) => {
        i.current = rs(s, f);
      },
      [s]
    ), [o, l] = ns(r, t), u = Qt(), h = () => {
      const f = i.current;
      if (n && !f)
        return;
      (f ? t.applyAnimatedValues(f, o.getValue(!0)) : !1) === !1 && u();
    }, d = new ts(h, l), m = Q();
    $(() => (m.current = d, p(l, (f) => me(f, d)), () => {
      m.current && (p(
        m.current.deps,
        (f) => Me(f, m.current)
      ), b.cancel(m.current.update));
    })), xe(h, []), at(() => () => {
      const f = m.current;
      p(f.deps, (v) => Me(v, f));
    });
    const _ = t.getComponentProps(o.getValue());
    return /* @__PURE__ */ le.createElement(e, { ..._, ref: a });
  });
}, ts = class {
  constructor(e, t) {
    this.update = e, this.deps = t;
  }
  eventObserved(e) {
    e.type == "change" && b.write(this.update);
  }
};
function ns(e, t) {
  const n = /* @__PURE__ */ new Set();
  return et.dependencies = n, e.style && (e = {
    ...e,
    style: t.createAnimatedStyle(e.style)
  }), e = new ut(e), et.dependencies = null, [e, n];
}
function rs(e, t) {
  return e && (c.fun(e) ? e(t) : e.current = t), t;
}
var ln = Symbol.for("AnimatedComponent"), ss = (e, {
  applyAnimatedValues: t = () => !1,
  createAnimatedStyle: n = (s) => new ut(s),
  getComponentProps: r = (s) => s
} = {}) => {
  const s = {
    applyAnimatedValues: t,
    createAnimatedStyle: n,
    getComponentProps: r
  }, i = (a) => {
    const o = dn(a) || "Anonymous";
    return c.str(a) ? a = i[a] || (i[a] = cn(a, s)) : a = a[ln] || (a[ln] = cn(a, s)), a.displayName = `Animated(${o})`, a;
  };
  return K(e, (a, o) => {
    c.arr(e) && (o = dn(a)), i[o] = i(a);
  }), {
    animated: i
  };
}, dn = (e) => c.str(e) ? e : e && c.str(e.displayName) ? e.displayName : c.fun(e) && e.name || null, Ls = class {
};
function T(e, ...t) {
  return c.fun(e) ? e(...t) : e;
}
var Ae = (e, t) => e === !0 || !!(t && e && (c.fun(e) ? e(t) : V(e).includes(t))), Un = (e, t) => c.obj(e) ? t && e[t] : e, Qn = (e, t) => e.default === !0 ? e[t] : e.default ? e.default[t] : void 0, is = (e) => e, ct = (e, t = is) => {
  let n = as;
  e.default && e.default !== !0 && (e = e.default, n = Object.keys(e));
  const r = {};
  for (const s of n) {
    const i = t(e[s], s);
    c.und(i) || (r[s] = i);
  }
  return r;
}, as = [
  "config",
  "onProps",
  "onStart",
  "onChange",
  "onPause",
  "onResume",
  "onRest"
], os = {
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
function us(e) {
  const t = {};
  let n = 0;
  if (K(e, (r, s) => {
    os[s] || (t[s] = r, n++);
  }), n)
    return t;
}
function Dt(e) {
  const t = us(e);
  if (t) {
    const n = { to: t };
    return K(e, (r, s) => s in t || (n[s] = r)), n;
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
  e.ref?.delete(e), t?.delete(e);
}
function Bt(e, t) {
  t && e.ref !== t && (e.ref?.delete(e), t.add(e), e.ref = t);
}
function Us(e, t, n = 1e3) {
  $(() => {
    if (t) {
      let r = 0;
      p(e, (s, i) => {
        const a = s.current;
        if (a.length) {
          let o = n * t[i];
          isNaN(o) ? o = r : r = o, p(a, (l) => {
            p(l.queue, (u) => {
              const h = u.delay;
              u.delay = (d) => o + T(h || 0, d);
            });
          }), s.start();
        }
      });
    } else {
      let r = Promise.resolve();
      p(e, (s) => {
        const i = s.current;
        if (i.length) {
          const a = i.map((o) => {
            const l = o.queue;
            return o.queue = [], l;
          });
          r = r.then(() => (p(
            i,
            (o, l) => p(a[l] || [], (u) => o.queue.push(u))
          ), Promise.all(s.start())));
        }
      });
    }
  });
}
var cs = {
  default: { tension: 170, friction: 26 },
  gentle: { tension: 120, friction: 14 },
  wobbly: { tension: 180, friction: 12 },
  stiff: { tension: 210, friction: 20 },
  slow: { tension: 280, friction: 60 },
  molasses: { tension: 280, friction: 120 }
}, Rt = {
  ...cs.default,
  mass: 1,
  damping: 1,
  easing: Mr.linear,
  clamp: !1
}, ls = class {
  constructor() {
    this.velocity = 0, Object.assign(this, Rt);
  }
};
function ds(e, t, n) {
  n && (n = { ...n }, fn(n, t), t = { ...n, ...t }), fn(e, t), Object.assign(e, t);
  for (const a in Rt)
    e[a] == null && (e[a] = Rt[a]);
  let { frequency: r, damping: s } = e;
  const { mass: i } = e;
  return c.und(r) || (r < 0.01 && (r = 0.01), s < 0 && (s = 0), e.tension = Math.pow(2 * Math.PI / r, 2) * i, e.friction = 4 * Math.PI * s * i / r), e;
}
function fn(e, t) {
  if (!c.und(t.decay))
    e.duration = void 0;
  else {
    const n = !c.und(t.tension) || !c.und(t.friction);
    (n || !c.und(t.frequency) || !c.und(t.damping) || !c.und(t.mass)) && (e.duration = void 0, e.decay = void 0), n && (e.frequency = void 0);
  }
}
var hn = [], fs = class {
  constructor() {
    this.changed = !1, this.values = hn, this.toValues = null, this.fromValues = hn, this.config = new ls(), this.immediate = !1;
  }
};
function Dn(e, { key: t, props: n, defaultProps: r, state: s, actions: i }) {
  return new Promise((a, o) => {
    let l, u, h = Ae(n.cancel ?? r?.cancel, t);
    if (h)
      _();
    else {
      c.und(n.pause) || (s.paused = Ae(n.pause, t));
      let f = r?.pause;
      f !== !0 && (f = s.paused || Ae(f, t)), l = T(n.delay || 0, t), f ? (s.resumeQueue.add(m), i.pause()) : (i.resume(), m());
    }
    function d() {
      s.resumeQueue.add(m), s.timeouts.delete(u), u.cancel(), l = u.time - b.now();
    }
    function m() {
      l > 0 && !W.skipAnimation ? (s.delayed = !0, u = b.setTimeout(_, l), s.pauseQueue.add(d), s.timeouts.add(u)) : _();
    }
    function _() {
      s.delayed && (s.delayed = !1), s.pauseQueue.delete(d), s.timeouts.delete(u), e <= (s.cancelId || 0) && (h = !0);
      try {
        i.start({ ...n, callId: e, cancel: h }, a);
      } catch (f) {
        o(f);
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
function Hn(e, t, n, r) {
  const { callId: s, parentId: i, onRest: a } = t, { asyncTo: o, promise: l } = n;
  return !i && e === o && !t.reset ? l : n.promise = (async () => {
    n.asyncId = s, n.asyncTo = e;
    const u = ct(
      t,
      (y, g) => (
        // The `onRest` prop is only called when the `runAsync` promise is resolved.
        g === "onRest" ? void 0 : y
      )
    );
    let h, d;
    const m = new Promise(
      (y, g) => (h = y, d = g)
    ), _ = (y) => {
      const g = (
        // The `cancel` prop or `stop` method was used.
        s <= (n.cancelId || 0) && fe(r) || // The async `to` prop was replaced.
        s !== n.asyncId && B(r, !1)
      );
      if (g)
        throw y.result = g, d(y), y;
    }, f = (y, g) => {
      const S = new mn(), w = new pn();
      return (async () => {
        if (W.skipAnimation)
          throw Fe(n), w.result = B(r, !1), d(w), w;
        _(S);
        const A = c.obj(y) ? { ...y } : { ...g, to: y };
        A.parentId = s, K(u, (x, k) => {
          c.und(A[k]) && (A[k] = x);
        });
        const R = await r.start(A);
        return _(S), n.paused && await new Promise((x) => {
          n.resumeQueue.add(x);
        }), R;
      })();
    };
    let v;
    if (W.skipAnimation)
      return Fe(n), B(r, !1);
    try {
      let y;
      c.arr(e) ? y = (async (g) => {
        for (const S of g)
          await f(S);
      })(e) : y = Promise.resolve(e(f, r.stop.bind(r))), await Promise.all([y.then(h), m]), v = B(r.get(), !0, !1);
    } catch (y) {
      if (y instanceof mn)
        v = y.result;
      else if (y instanceof pn)
        v = y.result;
      else
        throw y;
    } finally {
      s == n.asyncId && (n.asyncId = i, n.asyncTo = i ? o : void 0, n.promise = i ? l : void 0);
    }
    return c.fun(a) && b.batchedUpdates(() => {
      a(v, r, r.item);
    }), v;
  })();
}
function Fe(e, t) {
  Se(e.timeouts, (n) => n.cancel()), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, t && (e.cancelId = t);
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
}, kt = (e) => e instanceof Wt, hs = 1, Wt = class extends Tn {
  constructor() {
    super(...arguments), this.id = hs++, this._priority = 0;
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
}, ae = Symbol.for("SpringPhase"), Wn = 1, Et = 2, Ot = 4, gt = (e) => (e[ae] & Wn) > 0, ee = (e) => (e[ae] & Et) > 0, ye = (e) => (e[ae] & Ot) > 0, gn = (e, t) => t ? e[ae] |= Et | Wn : e[ae] &= ~Et, vn = (e, t) => t ? e[ae] |= Ot : e[ae] &= ~Ot, Gn = class extends Wt {
  constructor(e, t) {
    if (super(), this.animation = new fs(), this.defaultProps = {}, this._state = {
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
    return !(ee(this) || this._state.asyncTo) || ye(this);
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
    return ee(this);
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
    const r = this.animation;
    let { toValues: s } = r;
    const { config: i } = r, a = ot(r.to);
    !a && L(r.to) && (s = V(z(r.to))), r.values.forEach((u, h) => {
      if (u.done)
        return;
      const d = (
        // Animated strings always go from 0 to 1.
        u.constructor == Te ? 1 : a ? a[h].lastPosition : s[h]
      );
      let m = r.immediate, _ = d;
      if (!m) {
        if (_ = u.lastPosition, i.tension <= 0) {
          u.done = !0;
          return;
        }
        let f = u.elapsedTime += e;
        const v = r.fromValues[h], y = u.v0 != null ? u.v0 : u.v0 = c.arr(i.velocity) ? i.velocity[h] : i.velocity;
        let g;
        const S = i.precision || (v == d ? 5e-3 : Math.min(1, Math.abs(d - v) * 1e-3));
        if (c.und(i.duration))
          if (i.decay) {
            const w = i.decay === !0 ? 0.998 : i.decay, A = Math.exp(-(1 - w) * f);
            _ = v + y / (1 - w) * (1 - A), m = Math.abs(u.lastPosition - _) <= S, g = y * A;
          } else {
            g = u.lastVelocity == null ? y : u.lastVelocity;
            const w = i.restVelocity || S / 10, A = i.clamp ? 0 : i.bounce, R = !c.und(A), x = v == d ? u.v0 > 0 : v < d;
            let k, F = !1;
            const E = 1, j = Math.ceil(e / E);
            for (let N = 0; N < j && (k = Math.abs(g) > w, !(!k && (m = Math.abs(d - _) <= S, m))); ++N) {
              R && (F = _ == d || _ > d == x, F && (g = -g * A, _ = d));
              const Y = -i.tension * 1e-6 * (_ - d), oe = -i.friction * 1e-3 * g, P = (Y + oe) / i.mass;
              g = g + P * E, _ = _ + g * E;
            }
          }
        else {
          let w = 1;
          i.duration > 0 && (this._memoizedDuration !== i.duration && (this._memoizedDuration = i.duration, u.durationProgress > 0 && (u.elapsedTime = i.duration * u.durationProgress, f = u.elapsedTime += e)), w = (i.progress || 0) + f / this._memoizedDuration, w = w > 1 ? 1 : w < 0 ? 0 : w, u.durationProgress = w), _ = v + i.easing(w) * (d - v), g = (_ - u.lastPosition) / e, m = w == 1;
        }
        u.lastVelocity = g, Number.isNaN(_) && (console.warn("Got NaN while animating:", this), m = !0);
      }
      a && !a[h].done && (m = !1), m ? u.done = !0 : t = !1, u.setValue(_, i.round) && (n = !0);
    });
    const o = G(this), l = o.getValue();
    if (t) {
      const u = z(r.to);
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
    if (ee(this)) {
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
      n.map((r) => this._update(r))
    ).then((r) => Ht(this, r));
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
    let { to: n, from: r } = e;
    n = c.obj(n) ? n[t] : n, (n == null || It(n)) && (n = void 0), r = c.obj(r) ? r[t] : r, r == null && (r = void 0);
    const s = { to: n, from: r };
    return gt(this) || (e.reverse && ([n, r] = [r, n]), r = z(r), c.und(r) ? G(this) || this._set(n) : this._set(r)), s;
  }
  /** Every update is processed by this method before merging. */
  _update({ ...e }, t) {
    const { key: n, defaultProps: r } = this;
    e.default && Object.assign(
      r,
      ct(
        e,
        (a, o) => /^on/.test(o) ? Un(a, n) : a
      )
    ), wn(this, e, "onProps"), be(this, "onProps", e, this);
    const s = this._prepareNode(e);
    if (Object.isFrozen(this))
      throw Error(
        "Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?"
      );
    const i = this._state;
    return Dn(++this._lastCallId, {
      key: n,
      props: e,
      defaultProps: r,
      state: i,
      actions: {
        pause: () => {
          ye(this) || (vn(this, !0), Pe(i.pauseQueue), be(
            this,
            "onPause",
            B(this, we(this, this.animation.to)),
            this
          ));
        },
        resume: () => {
          ye(this) && (vn(this, !1), ee(this) && this._resume(), Pe(i.resumeQueue), be(
            this,
            "onResume",
            B(this, we(this, this.animation.to)),
            this
          ));
        },
        start: this._merge.bind(this, s)
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
    const r = !c.und(e.to), s = !c.und(e.from);
    if (r || s)
      if (t.callId > this._lastToId)
        this._lastToId = t.callId;
      else
        return n(fe(this));
    const { key: i, defaultProps: a, animation: o } = this, { to: l, from: u } = o;
    let { to: h = l, from: d = u } = e;
    s && !r && (!t.default || c.und(h)) && (h = d), t.reverse && ([h, d] = [d, h]);
    const m = !Z(d, u);
    m && (o.from = d), d = z(d);
    const _ = !Z(h, l);
    _ && this._focus(h);
    const f = It(t.to), { config: v } = o, { decay: y, velocity: g } = v;
    (r || s) && (v.velocity = 0), t.config && !f && ds(
      v,
      T(t.config, i),
      // Avoid calling the same "config" prop twice.
      t.config !== a.config ? T(a.config, i) : void 0
    );
    let S = G(this);
    if (!S || c.und(h))
      return n(B(this, !0));
    const w = (
      // When `reset` is undefined, the `from` prop implies `reset: true`,
      // except for declarative updates. When `reset` is defined, there
      // must exist a value to animate from.
      c.und(t.reset) ? s && !t.default : !c.und(d) && Ae(t.reset, i)
    ), A = w ? d : this.get(), R = Ve(h), x = c.num(R) || c.arr(R) || it(R), k = !f && (!x || Ae(a.immediate || t.immediate, i));
    if (_) {
      const N = St(h);
      if (N !== S.constructor)
        if (k)
          S = this._set(R);
        else
          throw Error(
            `Cannot animate between ${S.constructor.name} and ${N.name}, as the "to" prop suggests`
          );
    }
    const F = S.constructor;
    let E = L(h), j = !1;
    if (!E) {
      const N = w || !gt(this) && m;
      (_ || N) && (j = Z(Ve(A), R), E = !j), (!Z(o.immediate, k) && !k || !Z(v.decay, y) || !Z(v.velocity, g)) && (E = !0);
    }
    if (j && ee(this) && (o.changed && !w ? E = !0 : E || this._stop(l)), !f && ((E || L(l)) && (o.values = S.getPayload(), o.toValues = L(h) ? null : F == Te ? [1] : V(R)), o.immediate != k && (o.immediate = k, !k && !w && this._set(l)), E)) {
      const { onRest: N } = o;
      p(ps, (oe) => wn(this, t, oe));
      const Y = B(this, we(this, l));
      Pe(this._pendingCalls, Y), this._pendingCalls.add(n), o.changed && b.batchedUpdates(() => {
        o.changed = !w, N?.(Y, this), w ? T(a.onRest, Y) : o.onStart?.(Y, this);
      });
    }
    w && this._set(A), f ? n(Hn(t.to, t, this._state, this)) : E ? this._start() : ee(this) && !_ ? this._pendingCalls.add(n) : n(Bn(A));
  }
  /** Update the `animation.to` value, which might be a `FluidValue` */
  _focus(e) {
    const t = this.animation;
    e !== t.to && (sn(this) && this._detach(), t.to = e, sn(this) && this._attach());
  }
  _attach() {
    let e = 0;
    const { to: t } = this.animation;
    L(t) && (me(t, this), kt(t) && (e = t.priority + 1)), this.priority = e;
  }
  _detach() {
    const { to: e } = this.animation;
    L(e) && Me(e, this);
  }
  /**
   * Update the current value from outside the frameloop,
   * and return the `Animated` node.
   */
  _set(e, t = !0) {
    const n = z(e);
    if (!c.und(n)) {
      const r = G(this);
      if (!r || !Z(n, r.getValue())) {
        const s = St(n);
        !r || r.constructor != s ? Nt(this, s.create(n)) : r.setValue(n), r && b.batchedUpdates(() => {
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
    G(this).reset(z(e.to)), e.immediate || (e.fromValues = e.values.map((t) => t.lastPosition)), ee(this) || (gn(this, !0), ye(this) || this._resume());
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
    if (ee(this)) {
      gn(this, !1);
      const n = this.animation;
      p(n.values, (s) => {
        s.done = !0;
      }), n.toValues && (n.onChange = n.onPause = n.onResume = void 0), Oe(this, {
        type: "idle",
        parent: this
      });
      const r = t ? fe(this.get()) : B(this.get(), we(this, e ?? n.to));
      Pe(this._pendingCalls, r), n.changed && (n.changed = !1, be(this, "onRest", r, this));
    }
  }
};
function we(e, t) {
  const n = Ve(t), r = Ve(e.get());
  return Z(r, n);
}
function Kn(e, t = e.loop, n = e.to) {
  const r = T(t);
  if (r) {
    const s = r !== !0 && Dt(r), i = (s || e).reverse, a = !s || s.reset;
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
      ...s
    });
  }
}
function ze(e) {
  const { to: t, from: n } = e = Dt(e), r = /* @__PURE__ */ new Set();
  return c.obj(t) && yn(t, r), c.obj(n) && yn(n, r), e.keys = r.size ? Array.from(r) : null, e;
}
function ms(e) {
  const t = ze(e);
  return c.und(t.default) && (t.default = ct(t)), t;
}
function yn(e, t) {
  K(e, (n, r) => n != null && t.add(r));
}
var ps = [
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
  e.animation[t]?.(...n), e.defaultProps[t]?.(...n);
}
var gs = ["onStart", "onChange", "onRest"], vs = 1, Yn = class {
  constructor(e, t) {
    this.id = vs++, this.springs = {}, this.queue = [], this._lastAsyncId = 0, this._active = /* @__PURE__ */ new Set(), this._changed = /* @__PURE__ */ new Set(), this._started = !1, this._state = {
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
    return e ? t = V(e).map(ze) : this.queue = [], this._flush ? this._flush(this, t) : (tr(this, t), Mt(this, t));
  }
  /** @internal */
  stop(e, t) {
    if (e !== !!e && (t = e), t) {
      const n = this.springs;
      p(V(t), (r) => n[r].stop(!!e));
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
    const { onStart: e, onChange: t, onRest: n } = this._events, r = this._active.size > 0, s = this._changed.size > 0;
    (r && !this._started || s && !this._started) && (this._started = !0, Se(e, ([o, l]) => {
      l.value = this.get(), o(l, this, this._item);
    }));
    const i = !r && this._started, a = s || i && n.size ? this.get() : null;
    s && t.size && Se(t, ([o, l]) => {
      l.value = a, o(l, this, this._item);
    }), i && (this._started = !1, Se(n, ([o, l]) => {
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
  const { keys: r, to: s, from: i, loop: a, onRest: o, onResolve: l } = t, u = c.obj(t.default) && t.default;
  a && (t.loop = !1), s === !1 && (t.to = null), i === !1 && (t.from = null);
  const h = c.arr(s) || c.fun(s) ? s : void 0;
  h ? (t.to = void 0, t.onRest = void 0, u && (u.onRest = void 0)) : p(gs, (v) => {
    const y = t[v];
    if (c.fun(y)) {
      const g = e._events[v];
      t[v] = ({ finished: S, cancelled: w }) => {
        const A = g.get(y);
        A ? (S || (A.finished = !1), w && (A.cancelled = !0)) : g.set(y, {
          value: null,
          finished: S || !1,
          cancelled: w || !1
        });
      }, u && (u[v] = t[v]);
    }
  });
  const d = e._state;
  t.pause === !d.paused ? (d.paused = t.pause, Pe(t.pause ? d.pauseQueue : d.resumeQueue)) : d.paused && (t.pause = !0);
  const m = (r || Object.keys(e.springs)).map(
    (v) => e.springs[v].start(t)
  ), _ = t.cancel === !0 || Qn(t, "cancel") === !0;
  (h || _ && d.asyncId) && m.push(
    Dn(++e._lastAsyncId, {
      props: t,
      state: d,
      actions: {
        pause: bt,
        resume: bt,
        start(v, y) {
          _ ? (Fe(d, e._lastAsyncId), y(fe(e))) : (v.onRest = o, y(
            Hn(
              h,
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
  const f = Ht(e, await Promise.all(m));
  if (a && f.finished && !(n && f.noop)) {
    const v = Kn(t, a, s);
    if (v)
      return tr(e, [v]), Xn(e, v, !0);
  }
  return l && b.batchedUpdates(() => l(f, e, e.item)), f;
}
function Ct(e, t) {
  const n = { ...e.springs };
  return t && p(V(t), (r) => {
    c.und(r.keys) && (r = ze(r)), c.obj(r.to) || (r = { ...r, to: void 0 }), er(n, r, (s) => Jn(s));
  }), Zn(e, n), n;
}
function Zn(e, t) {
  K(t, (n, r) => {
    e.springs[r] || (e.springs[r] = n, me(n, e));
  });
}
function Jn(e, t) {
  const n = new Gn();
  return n.key = e, t && me(n, t), n;
}
function er(e, t, n) {
  t.keys && p(t.keys, (r) => {
    (e[r] || (e[r] = n(r)))._prepareNode(t);
  });
}
function tr(e, t) {
  p(t, (n) => {
    er(e.springs, n, (r) => Jn(r, e));
  });
}
var Qe = ({
  children: e,
  ...t
}) => {
  const n = Tt(tt), r = t.pause || !!n.pause, s = t.immediate || !!n.immediate;
  t = Yr(() => ({ pause: r, immediate: s }), [r, s]);
  const { Provider: i } = tt;
  return /* @__PURE__ */ le.createElement(i, { value: t }, e);
}, tt = ys(Qe, {});
Qe.Provider = tt.Provider;
Qe.Consumer = tt.Consumer;
function ys(e, t) {
  return Object.assign(e, le.createContext(t)), e.Provider._context = e, e.Consumer._context = e, e;
}
var Gt = () => {
  const e = [], t = function(r) {
    jr();
    const s = [];
    return p(e, (i, a) => {
      if (c.und(r))
        s.push(i.start());
      else {
        const o = n(r, i, a);
        o && s.push(i.start(o));
      }
    }), s;
  };
  t.current = e, t.add = function(r) {
    e.includes(r) || e.push(r);
  }, t.delete = function(r) {
    const s = e.indexOf(r);
    ~s && e.splice(s, 1);
  }, t.pause = function() {
    return p(e, (r) => r.pause(...arguments)), this;
  }, t.resume = function() {
    return p(e, (r) => r.resume(...arguments)), this;
  }, t.set = function(r) {
    p(e, (s, i) => {
      const a = c.fun(r) ? r(i, s) : r;
      a && s.set(a);
    });
  }, t.start = function(r) {
    const s = [];
    return p(e, (i, a) => {
      if (c.und(r))
        s.push(i.start());
      else {
        const o = this._getProps(r, i, a);
        o && s.push(i.start(o));
      }
    }), s;
  }, t.stop = function() {
    return p(e, (r) => r.stop(...arguments)), this;
  }, t.update = function(r) {
    return p(e, (s, i) => s.update(this._getProps(r, s, i))), this;
  };
  const n = function(r, s, i) {
    return c.fun(r) ? r(i, s) : r;
  };
  return t._getProps = n, t;
};
function nr(e, t, n) {
  const r = c.fun(t) && t;
  r && !n && (n = []);
  const s = _e(
    () => r || arguments.length == 3 ? Gt() : void 0,
    []
  ), i = Q(0), a = Qt(), o = _e(
    () => ({
      ctrls: [],
      queue: [],
      flush(g, S) {
        const w = Ct(g, S);
        return i.current > 0 && !o.queue.length && !Object.keys(w).some((R) => !g.springs[R]) ? Mt(g, S) : new Promise((R) => {
          Zn(g, w), o.queue.push(() => {
            R(Mt(g, S));
          }), a();
        });
      }
    }),
    []
  ), l = Q([...o.ctrls]), u = [], h = Pt(e) || 0;
  _e(() => {
    p(l.current.slice(e, h), (g) => {
      At(g, s), g.stop(!0);
    }), l.current.length = e, d(h, e);
  }, [e]), _e(() => {
    d(0, Math.min(h, e));
  }, n);
  function d(g, S) {
    for (let w = g; w < S; w++) {
      const A = l.current[w] || (l.current[w] = new Yn(null, o.flush)), R = r ? r(w, A) : t[w];
      R && (u[w] = ms(R));
    }
  }
  const m = l.current.map((g, S) => Ct(g, u[S])), _ = Tt(Qe), f = Pt(_), v = _ !== f && Nn(_);
  $(() => {
    i.current++, o.ctrls = l.current;
    const { queue: g } = o;
    g.length && (o.queue = [], p(g, (S) => S())), p(l.current, (S, w) => {
      s?.add(S), v && S.start({ default: _ });
      const A = u[w];
      A && (Bt(S, A.ref), S.ref ? S.queue.push(A) : S.start(A));
    });
  }), at(() => () => {
    p(o.ctrls, (g) => g.stop(!0));
  });
  const y = m.map((g) => ({ ...g }));
  return s ? [y, s] : y;
}
function lt(e, t) {
  const n = c.fun(e), [[r], s] = nr(
    1,
    n ? e : [e],
    n ? t || [] : t
  );
  return n || arguments.length == 2 ? [r, s] : r;
}
var ws = () => Gt(), Qs = () => qe(ws)[0], Ns = (e, t) => {
  const n = Gr(() => new Gn(e, t));
  return at(() => () => {
    n.stop();
  }), n;
};
function bs(e, t, n) {
  const r = c.fun(t) && t;
  r && !n && (n = []);
  let s = !0, i;
  const a = nr(
    e,
    (o, l) => {
      const u = r ? r(o, l) : t;
      return i = u.ref, s = s && u.reverse, u;
    },
    // Ensure the props function is called when no deps exist.
    // This works around the 3 argument rule.
    n || [{}]
  );
  if ($(() => {
    p(a[1].current, (o, l) => {
      const u = a[1].current[l + (s ? 1 : -1)];
      if (Bt(o, i), o.ref) {
        u && o.update({ to: u.springs });
        return;
      }
      u ? o.start({ to: u.springs }) : o.start();
    });
  }, n), r || arguments.length == 3) {
    const o = i ?? a[1];
    return o._getProps = (l, u, h) => {
      const d = c.fun(l) ? l(h, u) : l;
      if (d) {
        const m = o.current[h + (d.reverse ? 1 : -1)];
        return m && (d.to = m.springs), d;
      }
    }, a;
  }
  return a[0];
}
function _s(e, t, n) {
  const r = c.fun(t) && t, {
    reset: s,
    sort: i,
    trail: a = 0,
    expires: o = !0,
    exitBeforeEnter: l = !1,
    onDestroyed: u,
    ref: h,
    config: d
  } = r ? r() : t, m = _e(
    () => r || arguments.length == 3 ? Gt() : void 0,
    []
  ), _ = V(e), f = [], v = Q(null), y = s ? null : v.current;
  $(() => {
    v.current = f;
  }), at(() => (p(f, (P) => {
    m?.add(P.ctrl), P.ctrl.ref = m;
  }), () => {
    p(v.current, (P) => {
      P.expired && clearTimeout(P.expirationId), At(P.ctrl, m), P.ctrl.stop(!0);
    });
  }));
  const g = Ss(_, r ? r() : t, y), S = s && v.current || [];
  $(
    () => p(S, ({ ctrl: P, item: I, key: M }) => {
      At(P, m), T(u, I, M);
    })
  );
  const w = [];
  if (y && p(y, (P, I) => {
    P.expired ? (clearTimeout(P.expirationId), S.push(P)) : (I = w[I] = g.indexOf(P.key), ~I && (f[I] = P));
  }), p(_, (P, I) => {
    f[I] || (f[I] = {
      key: g[I],
      item: P,
      phase: "mount",
      ctrl: new Yn()
    }, f[I].ctrl.item = P);
  }), w.length) {
    let P = -1;
    const { leave: I } = r ? r() : t;
    p(w, (M, C) => {
      const O = y[C];
      ~M ? (P = f.indexOf(O), f[P] = { ...O, item: _[M] }) : I && f.splice(++P, 0, O);
    });
  }
  c.fun(i) && f.sort((P, I) => i(P.item, I.item));
  let A = -a;
  const R = Qt(), x = ct(t), k = /* @__PURE__ */ new Map(), F = Q(/* @__PURE__ */ new Map()), E = Q(!1);
  p(f, (P, I) => {
    const M = P.key, C = P.phase, O = r ? r() : t;
    let q, X;
    const sr = T(O.delay || 0, M);
    if (C == "mount")
      q = O.enter, X = "enter";
    else {
      const D = g.indexOf(M) < 0;
      if (C != "leave")
        if (D)
          q = O.leave, X = "leave";
        else if (q = O.update)
          X = "update";
        else
          return;
      else if (!D)
        q = O.enter, X = "enter";
      else
        return;
    }
    if (q = T(q, P.item, I), q = c.obj(q) ? Dt(q) : { to: q }, !q.config) {
      const D = d || x.config;
      q.config = T(D, P.item, I, X);
    }
    A += a;
    const se = {
      ...x,
      // we need to add our props.delay value you here.
      delay: sr + A,
      ref: h,
      immediate: O.immediate,
      // This prevents implied resets.
      reset: !1,
      // Merge any phase-specific props.
      ...q
    };
    if (X == "enter" && c.und(se.from)) {
      const D = r ? r() : t, pe = c.und(D.initial) || y ? D.from : D.initial;
      se.from = T(pe, P.item, I);
    }
    const { onResolve: ir } = se;
    se.onResolve = (D) => {
      T(ir, D);
      const pe = v.current, J = pe.find((Ne) => Ne.key === M);
      if (J && !(D.cancelled && J.phase != "update") && J.ctrl.idle) {
        const Ne = pe.every((ie) => ie.ctrl.idle);
        if (J.phase == "leave") {
          const ie = T(o, J.item);
          if (ie !== !1) {
            const dt = ie === !0 ? 0 : ie;
            if (J.expired = !0, !Ne && dt > 0) {
              dt <= 2147483647 && (J.expirationId = setTimeout(R, dt));
              return;
            }
          }
        }
        Ne && pe.some((ie) => ie.expired) && (F.current.delete(J), l && (E.current = !0), R());
      }
    };
    const Yt = Ct(P.ctrl, se);
    X === "leave" && l ? F.current.set(P, { phase: X, springs: Yt, payload: se }) : k.set(P, { phase: X, springs: Yt, payload: se });
  });
  const j = Tt(Qe), N = Pt(j), Y = j !== N && Nn(j);
  $(() => {
    Y && p(f, (P) => {
      P.ctrl.start({ default: j });
    });
  }, [j]), p(k, (P, I) => {
    if (F.current.size) {
      const M = f.findIndex((C) => C.key === I.key);
      f.splice(M, 1);
    }
  }), $(
    () => {
      p(
        F.current.size ? F.current : k,
        ({ phase: P, payload: I }, M) => {
          const { ctrl: C } = M;
          M.phase = P, m?.add(C), Y && P == "enter" && C.start({ default: j }), I && (Bt(C, I.ref), (C.ref || m) && !E.current ? C.update(I) : (C.start(I), E.current && (E.current = !1)));
        }
      );
    },
    s ? void 0 : n
  );
  const oe = (P) => /* @__PURE__ */ le.createElement(le.Fragment, null, f.map((I, M) => {
    const { springs: C } = k.get(I) || I.ctrl, O = P({ ...C }, I.item, I, M);
    return O && O.type ? /* @__PURE__ */ le.createElement(
      O.type,
      {
        ...O.props,
        key: c.str(I.key) || c.num(I.key) ? I.key : I.ctrl.id,
        ref: O.ref
      }
    ) : O;
  }));
  return m ? [oe, m] : oe;
}
var Ps = 1;
function Ss(e, { key: t, keys: n = t }, r) {
  if (n === null) {
    const s = /* @__PURE__ */ new Set();
    return e.map((i) => {
      const a = r && r.find(
        (o) => o.item === i && o.phase !== "leave" && !s.has(o)
      );
      return a ? (s.add(a), a.key) : Ps++;
    });
  }
  return c.und(n) ? e : c.fun(n) ? e.map(n) : V(n);
}
var Ds = ({
  container: e,
  ...t
} = {}) => {
  const [n, r] = lt(
    () => ({
      scrollX: 0,
      scrollY: 0,
      scrollXProgress: 0,
      scrollYProgress: 0,
      ...t
    }),
    []
  );
  return $(() => {
    const s = Wr(
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
      p(Object.values(n), (i) => i.stop()), s();
    };
  }, []), n;
}, Bs = ({
  container: e,
  ...t
}) => {
  const [n, r] = lt(
    () => ({
      width: 0,
      height: 0,
      ...t
    }),
    []
  );
  return $(() => {
    const s = $n(
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
      p(Object.values(n), (i) => i.stop()), s();
    };
  }, []), n;
}, Is = {
  any: 0,
  all: 1
};
function Hs(e, t) {
  const [n, r] = qe(!1), s = Q(), i = c.fun(e) && e, a = i ? i() : {}, { to: o = {}, from: l = {}, ...u } = a, h = i ? t : e, [d, m] = lt(() => ({ from: l, ...u }), []);
  return $(() => {
    const _ = s.current, {
      root: f,
      once: v,
      amount: y = "any",
      ...g
    } = h ?? {};
    if (!_ || v && n || typeof IntersectionObserver > "u")
      return;
    const S = /* @__PURE__ */ new WeakMap(), w = () => (o && m.start(o), r(!0), v ? void 0 : () => {
      l && m.start(l), r(!1);
    }), A = (x) => {
      x.forEach((k) => {
        const F = S.get(k.target);
        if (k.isIntersecting !== !!F)
          if (k.isIntersecting) {
            const E = w();
            c.fun(E) ? S.set(k.target, E) : R.unobserve(k.target);
          } else
            F && (F(), S.delete(k.target));
      });
    }, R = new IntersectionObserver(A, {
      root: f && f.current || void 0,
      threshold: typeof y == "number" || Array.isArray(y) ? y : Is[y],
      ...g
    });
    return R.observe(_), () => R.unobserve(_);
  }, [h]), i ? [s, d] : [s, n];
}
function Ws({ children: e, ...t }) {
  return e(lt(t));
}
function Gs({
  items: e,
  children: t,
  ...n
}) {
  const r = bs(e.length, n);
  return e.map((s, i) => {
    const a = t(s, i);
    return c.fun(a) ? a(r[i]) : a;
  });
}
function Ks({
  items: e,
  children: t,
  ...n
}) {
  return _s(e, n)(t);
}
var Kt = class extends Wt {
  constructor(e, t) {
    super(), this.source = e, this.idle = !0, this._active = /* @__PURE__ */ new Set(), this.calc = ke(...t);
    const n = this._get(), r = St(n);
    Nt(this, r.create(n));
  }
  advance(e) {
    const t = this._get(), n = this.get();
    Z(t, n) || (G(this).setValue(t), this._onChange(t, this.idle)), !this.idle && bn(this._active) && vt(this);
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
      L(t) && me(t, this), kt(t) && (t.idle || this._active.add(t), e = Math.max(e, t.priority + 1));
    }), this.priority = e, this._start();
  }
  // Stop observing our sources once we have no observers.
  _detach() {
    p(V(this.source), (e) => {
      L(e) && Me(e, this);
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
function As(e) {
  return e.idle !== !1;
}
function bn(e) {
  return !e.size || Array.from(e).every(As);
}
function vt(e) {
  e.idle || (e.idle = !0, p(ot(e), (t) => {
    t.done = !0;
  }), Oe(e, {
    type: "idle",
    parent: e
  }));
}
var Ys = (e, ...t) => new Kt(e, t), Xs = (e, ...t) => (qn(), new Kt(e, t));
W.assign({
  createStringInterpolator: zn,
  to: (e, t) => new Kt(e, t)
});
var Zs = Le.advance, rr = /^--/;
function Rs(e, t) {
  return t == null || typeof t == "boolean" || t === "" ? "" : typeof t == "number" && t !== 0 && !rr.test(e) && !(Re.hasOwnProperty(e) && Re[e]) ? t + "px" : ("" + t).trim();
}
var _n = {};
function ks(e, t) {
  if (!e.nodeType || !e.setAttribute)
    return !1;
  const n = e.nodeName === "filter" || e.parentNode && e.parentNode.nodeName === "filter", { style: r, children: s, scrollTop: i, scrollLeft: a, viewBox: o, ...l } = t, u = Object.values(l), h = Object.keys(l).map(
    (d) => n || e.hasAttribute(d) ? d : _n[d] || (_n[d] = d.replace(
      /([A-Z])/g,
      // Attributes are written in dash case
      (m) => "-" + m.toLowerCase()
    ))
  );
  s !== void 0 && (e.textContent = s);
  for (const d in r)
    if (r.hasOwnProperty(d)) {
      const m = Rs(d, r[d]);
      rr.test(d) ? e.style.setProperty(d, m) : e.style[d] = m;
    }
  h.forEach((d, m) => {
    e.setAttribute(d, u[m]);
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
}, Es = (e, t) => e + t.charAt(0).toUpperCase() + t.substring(1), Os = ["Webkit", "Ms", "Moz", "O"];
Re = Object.keys(Re).reduce((e, t) => (Os.forEach((n) => e[Es(n, t)] = e[t]), e), Re);
var Ms = /^(matrix|translate|scale|rotate|skew)/, Cs = /^(translate)/, Ts = /^(rotate|skew)/, yt = (e, t) => c.num(e) && e !== 0 ? e + t : e, Ye = (e, t) => c.arr(e) ? e.every((n) => Ye(n, t)) : c.num(e) ? e === t : parseFloat(e) === t, Vs = class extends ut {
  constructor({ x: e, y: t, z: n, ...r }) {
    const s = [], i = [];
    (e || t || n) && (s.push([e || 0, t || 0, n || 0]), i.push((a) => [
      `translate3d(${a.map((o) => yt(o, "px")).join(",")})`,
      // prettier-ignore
      Ye(a, 0)
    ])), K(r, (a, o) => {
      if (o === "transform")
        s.push([a || ""]), i.push((l) => [l, l === ""]);
      else if (Ms.test(o)) {
        if (delete r[o], c.und(a))
          return;
        const l = Cs.test(o) ? "px" : Ts.test(o) ? "deg" : "";
        s.push(V(a)), i.push(
          o === "rotate3d" ? ([u, h, d, m]) => [
            `rotate3d(${u},${h},${d},${yt(m, l)})`,
            Ye(m, 0)
          ] : (u) => [
            `${o}(${u.map((h) => yt(h, l)).join(",")})`,
            Ye(u, o.startsWith("scale") ? 1 : 0)
          ]
        );
      }
    }), s.length && (r.transform = new Fs(s, i)), super(r);
  }
}, Fs = class extends Tn {
  constructor(e, t) {
    super(), this.inputs = e, this.transforms = t, this._value = null;
  }
  get() {
    return this._value || (this._value = this._get());
  }
  _get() {
    let e = "", t = !0;
    return p(this.inputs, (n, r) => {
      const s = z(n[0]), [i, a] = this.transforms[r](
        c.arr(s) ? s : n.map(z)
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
        (n) => L(n) && me(n, this)
      )
    );
  }
  // Stop observing our inputs once we have no observers.
  observerRemoved(e) {
    e == 0 && p(
      this.inputs,
      (t) => p(
        t,
        (n) => L(n) && Me(n, this)
      )
    );
  }
  eventObserved(e) {
    e.type == "change" && (this._value = null), Oe(this, e);
  }
}, zs = [
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
  batchedUpdates: cr,
  createStringInterpolator: zn,
  colors: vr
});
var xs = ss(zs, {
  applyAnimatedValues: ks,
  createAnimatedStyle: (e) => new Vs(e),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getComponentProps: ({ scrollTop: e, scrollLeft: t, ...n }) => n
}), Js = xs.animated;
export {
  Ls as Any,
  mn as BailSignal,
  Yn as Controller,
  Wt as FrameValue,
  W as Globals,
  Kt as Interpolation,
  Ws as Spring,
  Qe as SpringContext,
  Gt as SpringRef,
  Gn as SpringValue,
  Gs as Trail,
  Ks as Transition,
  Js as a,
  Js as animated,
  cs as config,
  ke as createInterpolator,
  Mr as easings,
  Dt as inferTo,
  Xs as interpolate,
  Ys as to,
  Zs as update,
  Us as useChain,
  Hs as useInView,
  $ as useIsomorphicLayoutEffect,
  js as useReducedMotion,
  Bs as useResize,
  Ds as useScroll,
  lt as useSpring,
  Qs as useSpringRef,
  Ns as useSpringValue,
  nr as useSprings,
  bs as useTrail,
  _s as useTransition
};
