import L from "react";
function _t(s, t, e) {
  return Math.max(t, Math.min(s, e));
}
const u = {
  toVector(s, t) {
    return s === void 0 && (s = t), Array.isArray(s) ? s : [s, s];
  },
  add(s, t) {
    return [s[0] + t[0], s[1] + t[1]];
  },
  sub(s, t) {
    return [s[0] - t[0], s[1] - t[1]];
  },
  addTo(s, t) {
    s[0] += t[0], s[1] += t[1];
  },
  subTo(s, t) {
    s[0] -= t[0], s[1] -= t[1];
  }
};
function H(s, t, e) {
  return t === 0 || Math.abs(t) === 1 / 0 ? Math.pow(s, e * 5) : s * t * e / (t + e * s);
}
function U(s, t, e, i = 0.15) {
  return i === 0 ? _t(s, t, e) : s < t ? -H(t - s, e - t, i) + t : s > e ? +H(s - e, e - t, i) + e : s;
}
function vt(s, [t, e], [i, n]) {
  const [[r, o], [c, l]] = s;
  return [U(t, r, o, i), U(e, c, l, n)];
}
function yt(s, t) {
  if (typeof s != "object" || s === null)
    return s;
  var e = s[Symbol.toPrimitive];
  if (e !== void 0) {
    var i = e.call(s, t || "default");
    if (typeof i != "object")
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(s);
}
function bt(s) {
  var t = yt(s, "string");
  return typeof t == "symbol" ? t : String(t);
}
function d(s, t, e) {
  return t = bt(t), t in s ? Object.defineProperty(s, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : s[t] = e, s;
}
function j(s, t) {
  var e = Object.keys(s);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(s);
    t && (i = i.filter(function(n) {
      return Object.getOwnPropertyDescriptor(s, n).enumerable;
    })), e.push.apply(e, i);
  }
  return e;
}
function f(s) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? j(Object(e), !0).forEach(function(i) {
      d(s, i, e[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(e)) : j(Object(e)).forEach(function(i) {
      Object.defineProperty(s, i, Object.getOwnPropertyDescriptor(e, i));
    });
  }
  return s;
}
const Z = {
  pointer: {
    start: "down",
    change: "move",
    end: "up"
  },
  mouse: {
    start: "down",
    change: "move",
    end: "up"
  },
  touch: {
    start: "start",
    change: "move",
    end: "end"
  },
  gesture: {
    start: "start",
    change: "change",
    end: "end"
  }
};
function Y(s) {
  return s ? s[0].toUpperCase() + s.slice(1) : "";
}
const Et = ["enter", "leave"];
function wt(s = !1, t) {
  return s && !Et.includes(t);
}
function Tt(s, t = "", e = !1) {
  const i = Z[s], n = i && i[t] || t;
  return "on" + Y(s) + Y(n) + (wt(e, n) ? "Capture" : "");
}
const St = ["gotpointercapture", "lostpointercapture"];
function It(s) {
  let t = s.substring(2).toLowerCase();
  const e = !!~t.indexOf("passive");
  e && (t = t.replace("passive", ""));
  const i = St.includes(t) ? "capturecapture" : "capture", n = !!~t.indexOf(i);
  return n && (t = t.replace("capture", "")), {
    device: t,
    capture: n,
    passive: e
  };
}
function At(s, t = "") {
  const e = Z[s], i = e && e[t] || t;
  return s + i;
}
function M(s) {
  return "touches" in s;
}
function F(s) {
  return M(s) ? "touch" : "pointerType" in s ? s.pointerType : "mouse";
}
function kt(s) {
  return Array.from(s.touches).filter((t) => {
    var e, i;
    return t.target === s.currentTarget || ((e = s.currentTarget) === null || e === void 0 || (i = e.contains) === null || i === void 0 ? void 0 : i.call(e, t.target));
  });
}
function Dt(s) {
  return s.type === "touchend" || s.type === "touchcancel" ? s.changedTouches : s.targetTouches;
}
function tt(s) {
  return M(s) ? Dt(s)[0] : s;
}
function K(s, t) {
  try {
    const e = t.clientX - s.clientX, i = t.clientY - s.clientY, n = (t.clientX + s.clientX) / 2, r = (t.clientY + s.clientY) / 2, o = Math.hypot(e, i);
    return {
      angle: -(Math.atan2(e, i) * 180) / Math.PI,
      distance: o,
      origin: [n, r]
    };
  } catch {
  }
  return null;
}
function xt(s) {
  return kt(s).map((t) => t.identifier);
}
function G(s, t) {
  const [e, i] = Array.from(s.touches).filter((n) => t.includes(n.identifier));
  return K(e, i);
}
function R(s) {
  const t = tt(s);
  return M(s) ? t.identifier : t.pointerId;
}
function T(s) {
  const t = tt(s);
  return [t.clientX, t.clientY];
}
const N = 40, X = 800;
function et(s) {
  let {
    deltaX: t,
    deltaY: e,
    deltaMode: i
  } = s;
  return i === 1 ? (t *= N, e *= N) : i === 2 && (t *= X, e *= X), [t, e];
}
function Ot(s) {
  var t, e;
  const {
    scrollX: i,
    scrollY: n,
    scrollLeft: r,
    scrollTop: o
  } = s.currentTarget;
  return [(t = i ?? r) !== null && t !== void 0 ? t : 0, (e = n ?? o) !== null && e !== void 0 ? e : 0];
}
function Pt(s) {
  const t = {};
  if ("buttons" in s && (t.buttons = s.buttons), "shiftKey" in s) {
    const {
      shiftKey: e,
      altKey: i,
      metaKey: n,
      ctrlKey: r
    } = s;
    Object.assign(t, {
      shiftKey: e,
      altKey: i,
      metaKey: n,
      ctrlKey: r
    });
  }
  return t;
}
function P(s, ...t) {
  return typeof s == "function" ? s(...t) : s;
}
function Mt() {
}
function Ct(...s) {
  return s.length === 0 ? Mt : s.length === 1 ? s[0] : function() {
    let t;
    for (const e of s)
      t = e.apply(this, arguments) || t;
    return t;
  };
}
function W(s, t) {
  return Object.assign({}, t, s || {});
}
const Lt = 32;
class st {
  constructor(t, e, i) {
    this.ctrl = t, this.args = e, this.key = i, this.state || (this.state = {}, this.computeValues([0, 0]), this.computeInitial(), this.init && this.init(), this.reset());
  }
  get state() {
    return this.ctrl.state[this.key];
  }
  set state(t) {
    this.ctrl.state[this.key] = t;
  }
  get shared() {
    return this.ctrl.state.shared;
  }
  get eventStore() {
    return this.ctrl.gestureEventStores[this.key];
  }
  get timeoutStore() {
    return this.ctrl.gestureTimeoutStores[this.key];
  }
  get config() {
    return this.ctrl.config[this.key];
  }
  get sharedConfig() {
    return this.ctrl.config.shared;
  }
  get handler() {
    return this.ctrl.handlers[this.key];
  }
  reset() {
    const {
      state: t,
      shared: e,
      ingKey: i,
      args: n
    } = this;
    e[i] = t._active = t.active = t._blocked = t._force = !1, t._step = [!1, !1], t.intentional = !1, t._movement = [0, 0], t._distance = [0, 0], t._direction = [0, 0], t._delta = [0, 0], t._bounds = [[-1 / 0, 1 / 0], [-1 / 0, 1 / 0]], t.args = n, t.axis = void 0, t.memo = void 0, t.elapsedTime = t.timeDelta = 0, t.direction = [0, 0], t.distance = [0, 0], t.overflow = [0, 0], t._movementBound = [!1, !1], t.velocity = [0, 0], t.movement = [0, 0], t.delta = [0, 0], t.timeStamp = 0;
  }
  start(t) {
    const e = this.state, i = this.config;
    e._active || (this.reset(), this.computeInitial(), e._active = !0, e.target = t.target, e.currentTarget = t.currentTarget, e.lastOffset = i.from ? P(i.from, e) : e.offset, e.offset = e.lastOffset, e.startTime = e.timeStamp = t.timeStamp);
  }
  computeValues(t) {
    const e = this.state;
    e._values = t, e.values = this.config.transform(t);
  }
  computeInitial() {
    const t = this.state;
    t._initial = t._values, t.initial = t.values;
  }
  compute(t) {
    const {
      state: e,
      config: i,
      shared: n
    } = this;
    e.args = this.args;
    let r = 0;
    if (t && (e.event = t, i.preventDefault && t.cancelable && e.event.preventDefault(), e.type = t.type, n.touches = this.ctrl.pointerIds.size || this.ctrl.touchIds.size, n.locked = !!document.pointerLockElement, Object.assign(n, Pt(t)), n.down = n.pressed = n.buttons % 2 === 1 || n.touches > 0, r = t.timeStamp - e.timeStamp, e.timeStamp = t.timeStamp, e.elapsedTime = e.timeStamp - e.startTime), e._active) {
      const _ = e._delta.map(Math.abs);
      u.addTo(e._distance, _);
    }
    this.axisIntent && this.axisIntent(t);
    const [o, c] = e._movement, [l, h] = i.threshold, {
      _step: a,
      values: g
    } = e;
    if (i.hasCustomTransform ? (a[0] === !1 && (a[0] = Math.abs(o) >= l && g[0]), a[1] === !1 && (a[1] = Math.abs(c) >= h && g[1])) : (a[0] === !1 && (a[0] = Math.abs(o) >= l && Math.sign(o) * l), a[1] === !1 && (a[1] = Math.abs(c) >= h && Math.sign(c) * h)), e.intentional = a[0] !== !1 || a[1] !== !1, !e.intentional)
      return;
    const p = [0, 0];
    if (i.hasCustomTransform) {
      const [_, gt] = g;
      p[0] = a[0] !== !1 ? _ - a[0] : 0, p[1] = a[1] !== !1 ? gt - a[1] : 0;
    } else
      p[0] = a[0] !== !1 ? o - a[0] : 0, p[1] = a[1] !== !1 ? c - a[1] : 0;
    this.restrictToAxis && !e._blocked && this.restrictToAxis(p);
    const A = e.offset, k = e._active && !e._blocked || e.active;
    k && (e.first = e._active && !e.active, e.last = !e._active && e.active, e.active = n[this.ingKey] = e._active, t && (e.first && ("bounds" in i && (e._bounds = P(i.bounds, e)), this.setup && this.setup()), e.movement = p, this.computeOffset()));
    const [D, x] = e.offset, [[C, ft], [dt, pt]] = e._bounds;
    e.overflow = [D < C ? -1 : D > ft ? 1 : 0, x < dt ? -1 : x > pt ? 1 : 0], e._movementBound[0] = e.overflow[0] ? e._movementBound[0] === !1 ? e._movement[0] : e._movementBound[0] : !1, e._movementBound[1] = e.overflow[1] ? e._movementBound[1] === !1 ? e._movement[1] : e._movementBound[1] : !1;
    const mt = e._active ? i.rubberband || [0, 0] : [0, 0];
    if (e.offset = vt(e._bounds, e.offset, mt), e.delta = u.sub(e.offset, A), this.computeMovement(), k && (!e.last || r > Lt)) {
      e.delta = u.sub(e.offset, A);
      const _ = e.delta.map(Math.abs);
      u.addTo(e.distance, _), e.direction = e.delta.map(Math.sign), e._direction = e._delta.map(Math.sign), !e.first && r > 0 && (e.velocity = [_[0] / r, _[1] / r], e.timeDelta = r);
    }
  }
  emit() {
    const t = this.state, e = this.shared, i = this.config;
    if (t._active || this.clean(), (t._blocked || !t.intentional) && !t._force && !i.triggerAllEvents)
      return;
    const n = this.handler(f(f(f({}, e), t), {}, {
      [this.aliasKey]: t.values
    }));
    n !== void 0 && (t.memo = n);
  }
  clean() {
    this.eventStore.clean(), this.timeoutStore.clean();
  }
}
function Rt([s, t], e) {
  const i = Math.abs(s), n = Math.abs(t);
  if (i > n && i > e)
    return "x";
  if (n > i && n > e)
    return "y";
}
class S extends st {
  constructor(...t) {
    super(...t), d(this, "aliasKey", "xy");
  }
  reset() {
    super.reset(), this.state.axis = void 0;
  }
  init() {
    this.state.offset = [0, 0], this.state.lastOffset = [0, 0];
  }
  computeOffset() {
    this.state.offset = u.add(this.state.lastOffset, this.state.movement);
  }
  computeMovement() {
    this.state.movement = u.sub(this.state.offset, this.state.lastOffset);
  }
  axisIntent(t) {
    const e = this.state, i = this.config;
    if (!e.axis && t) {
      const n = typeof i.axisThreshold == "object" ? i.axisThreshold[F(t)] : i.axisThreshold;
      e.axis = Rt(e._movement, n);
    }
    e._blocked = (i.lockDirection || !!i.axis) && !e.axis || !!i.axis && i.axis !== e.axis;
  }
  restrictToAxis(t) {
    if (this.config.axis || this.config.lockDirection)
      switch (this.state.axis) {
        case "x":
          t[1] = 0;
          break;
        case "y":
          t[0] = 0;
          break;
      }
  }
}
const Kt = (s) => s, z = 0.15, it = {
  enabled(s = !0) {
    return s;
  },
  eventOptions(s, t, e) {
    return f(f({}, e.shared.eventOptions), s);
  },
  preventDefault(s = !1) {
    return s;
  },
  triggerAllEvents(s = !1) {
    return s;
  },
  rubberband(s = 0) {
    switch (s) {
      case !0:
        return [z, z];
      case !1:
        return [0, 0];
      default:
        return u.toVector(s);
    }
  },
  from(s) {
    if (typeof s == "function")
      return s;
    if (s != null)
      return u.toVector(s);
  },
  transform(s, t, e) {
    const i = s || e.shared.transform;
    return this.hasCustomTransform = !!i, i || Kt;
  },
  threshold(s) {
    return u.toVector(s, 0);
  }
}, Vt = 0, v = f(f({}, it), {}, {
  axis(s, t, {
    axis: e
  }) {
    if (this.lockDirection = e === "lock", !this.lockDirection)
      return e;
  },
  axisThreshold(s = Vt) {
    return s;
  },
  bounds(s = {}) {
    if (typeof s == "function")
      return (r) => v.bounds(s(r));
    if ("current" in s)
      return () => s.current;
    if (typeof HTMLElement == "function" && s instanceof HTMLElement)
      return s;
    const {
      left: t = -1 / 0,
      right: e = 1 / 0,
      top: i = -1 / 0,
      bottom: n = 1 / 0
    } = s;
    return [[t, e], [i, n]];
  }
}), $ = {
  ArrowRight: (s, t = 1) => [s * t, 0],
  ArrowLeft: (s, t = 1) => [-1 * s * t, 0],
  ArrowUp: (s, t = 1) => [0, -1 * s * t],
  ArrowDown: (s, t = 1) => [0, s * t]
};
class Bt extends S {
  constructor(...t) {
    super(...t), d(this, "ingKey", "dragging");
  }
  reset() {
    super.reset();
    const t = this.state;
    t._pointerId = void 0, t._pointerActive = !1, t._keyboardActive = !1, t._preventScroll = !1, t._delayed = !1, t.swipe = [0, 0], t.tap = !1, t.canceled = !1, t.cancel = this.cancel.bind(this);
  }
  setup() {
    const t = this.state;
    if (t._bounds instanceof HTMLElement) {
      const e = t._bounds.getBoundingClientRect(), i = t.currentTarget.getBoundingClientRect(), n = {
        left: e.left - i.left + t.offset[0],
        right: e.right - i.right + t.offset[0],
        top: e.top - i.top + t.offset[1],
        bottom: e.bottom - i.bottom + t.offset[1]
      };
      t._bounds = v.bounds(n);
    }
  }
  cancel() {
    const t = this.state;
    t.canceled || (t.canceled = !0, t._active = !1, setTimeout(() => {
      this.compute(), this.emit();
    }, 0));
  }
  setActive() {
    this.state._active = this.state._pointerActive || this.state._keyboardActive;
  }
  clean() {
    this.pointerClean(), this.state._pointerActive = !1, this.state._keyboardActive = !1, super.clean();
  }
  pointerDown(t) {
    const e = this.config, i = this.state;
    if (t.buttons != null && (Array.isArray(e.pointerButtons) ? !e.pointerButtons.includes(t.buttons) : e.pointerButtons !== -1 && e.pointerButtons !== t.buttons))
      return;
    const n = this.ctrl.setEventIds(t);
    e.pointerCapture && t.target.setPointerCapture(t.pointerId), !(n && n.size > 1 && i._pointerActive) && (this.start(t), this.setupPointer(t), i._pointerId = R(t), i._pointerActive = !0, this.computeValues(T(t)), this.computeInitial(), e.preventScrollAxis && F(t) !== "mouse" ? (i._active = !1, this.setupScrollPrevention(t)) : e.delay > 0 ? (this.setupDelayTrigger(t), e.triggerAllEvents && (this.compute(t), this.emit())) : this.startPointerDrag(t));
  }
  startPointerDrag(t) {
    const e = this.state;
    e._active = !0, e._preventScroll = !0, e._delayed = !1, this.compute(t), this.emit();
  }
  pointerMove(t) {
    const e = this.state, i = this.config;
    if (!e._pointerActive)
      return;
    const n = R(t);
    if (e._pointerId !== void 0 && n !== e._pointerId)
      return;
    const r = T(t);
    if (document.pointerLockElement === t.target ? e._delta = [t.movementX, t.movementY] : (e._delta = u.sub(r, e._values), this.computeValues(r)), u.addTo(e._movement, e._delta), this.compute(t), e._delayed && e.intentional) {
      this.timeoutStore.remove("dragDelay"), e.active = !1, this.startPointerDrag(t);
      return;
    }
    if (i.preventScrollAxis && !e._preventScroll)
      if (e.axis)
        if (e.axis === i.preventScrollAxis || i.preventScrollAxis === "xy") {
          e._active = !1, this.clean();
          return;
        } else {
          this.timeoutStore.remove("startPointerDrag"), this.startPointerDrag(t);
          return;
        }
      else
        return;
    this.emit();
  }
  pointerUp(t) {
    this.ctrl.setEventIds(t);
    try {
      this.config.pointerCapture && t.target.hasPointerCapture(t.pointerId) && t.target.releasePointerCapture(t.pointerId);
    } catch {
    }
    const e = this.state, i = this.config;
    if (!e._active || !e._pointerActive)
      return;
    const n = R(t);
    if (e._pointerId !== void 0 && n !== e._pointerId)
      return;
    this.state._pointerActive = !1, this.setActive(), this.compute(t);
    const [r, o] = e._distance;
    if (e.tap = r <= i.tapsThreshold && o <= i.tapsThreshold, e.tap && i.filterTaps)
      e._force = !0;
    else {
      const [c, l] = e._delta, [h, a] = e._movement, [g, p] = i.swipe.velocity, [A, k] = i.swipe.distance, D = i.swipe.duration;
      if (e.elapsedTime < D) {
        const x = Math.abs(c / e.timeDelta), C = Math.abs(l / e.timeDelta);
        x > g && Math.abs(h) > A && (e.swipe[0] = Math.sign(c)), C > p && Math.abs(a) > k && (e.swipe[1] = Math.sign(l));
      }
    }
    this.emit();
  }
  pointerClick(t) {
    !this.state.tap && t.detail > 0 && (t.preventDefault(), t.stopPropagation());
  }
  setupPointer(t) {
    const e = this.config, i = e.device;
    e.pointerLock && t.currentTarget.requestPointerLock(), e.pointerCapture || (this.eventStore.add(this.sharedConfig.window, i, "change", this.pointerMove.bind(this)), this.eventStore.add(this.sharedConfig.window, i, "end", this.pointerUp.bind(this)), this.eventStore.add(this.sharedConfig.window, i, "cancel", this.pointerUp.bind(this)));
  }
  pointerClean() {
    this.config.pointerLock && document.pointerLockElement === this.state.currentTarget && document.exitPointerLock();
  }
  preventScroll(t) {
    this.state._preventScroll && t.cancelable && t.preventDefault();
  }
  setupScrollPrevention(t) {
    this.state._preventScroll = !1, Ht(t);
    const e = this.eventStore.add(this.sharedConfig.window, "touch", "change", this.preventScroll.bind(this), {
      passive: !1
    });
    this.eventStore.add(this.sharedConfig.window, "touch", "end", e), this.eventStore.add(this.sharedConfig.window, "touch", "cancel", e), this.timeoutStore.add("startPointerDrag", this.startPointerDrag.bind(this), this.config.preventScrollDelay, t);
  }
  setupDelayTrigger(t) {
    this.state._delayed = !0, this.timeoutStore.add("dragDelay", () => {
      this.state._step = [0, 0], this.startPointerDrag(t);
    }, this.config.delay);
  }
  keyDown(t) {
    const e = $[t.key];
    if (e) {
      const i = this.state, n = t.shiftKey ? 10 : t.altKey ? 0.1 : 1;
      this.start(t), i._delta = e(this.config.keyboardDisplacement, n), i._keyboardActive = !0, u.addTo(i._movement, i._delta), this.compute(t), this.emit();
    }
  }
  keyUp(t) {
    t.key in $ && (this.state._keyboardActive = !1, this.setActive(), this.compute(t), this.emit());
  }
  bind(t) {
    const e = this.config.device;
    t(e, "start", this.pointerDown.bind(this)), this.config.pointerCapture && (t(e, "change", this.pointerMove.bind(this)), t(e, "end", this.pointerUp.bind(this)), t(e, "cancel", this.pointerUp.bind(this)), t("lostPointerCapture", "", this.pointerUp.bind(this))), this.config.keys && (t("key", "down", this.keyDown.bind(this)), t("key", "up", this.keyUp.bind(this))), this.config.filterTaps && t("click", "", this.pointerClick.bind(this), {
      capture: !0,
      passive: !1
    });
  }
}
function Ht(s) {
  "persist" in s && typeof s.persist == "function" && s.persist();
}
const I = typeof window < "u" && window.document && window.document.createElement;
function Ut() {
  return I && "ontouchstart" in window;
}
function q() {
  return Ut() || I && window.navigator.maxTouchPoints > 1;
}
function jt() {
  return I && "onpointerdown" in window;
}
function Yt() {
  return I && "exitPointerLock" in window.document;
}
function Gt() {
  try {
    return "constructor" in GestureEvent;
  } catch {
    return !1;
  }
}
const m = {
  isBrowser: I,
  gesture: Gt(),
  touch: q(),
  touchscreen: q(),
  pointer: jt(),
  pointerLock: Yt()
}, Nt = 250, Xt = 180, Wt = 0.5, zt = 50, $t = 250, qt = 10, J = {
  mouse: 0,
  touch: 0,
  pen: 8
}, Jt = f(f({}, v), {}, {
  device(s, t, {
    pointer: {
      touch: e = !1,
      lock: i = !1,
      mouse: n = !1
    } = {}
  }) {
    return this.pointerLock = i && m.pointerLock, m.touch && e ? "touch" : this.pointerLock ? "mouse" : m.pointer && !n ? "pointer" : m.touch ? "touch" : "mouse";
  },
  preventScrollAxis(s, t, {
    preventScroll: e
  }) {
    if (this.preventScrollDelay = typeof e == "number" ? e : e || e === void 0 && s ? Nt : void 0, !(!m.touchscreen || e === !1))
      return s || (e !== void 0 ? "y" : void 0);
  },
  pointerCapture(s, t, {
    pointer: {
      capture: e = !0,
      buttons: i = 1,
      keys: n = !0
    } = {}
  }) {
    return this.pointerButtons = i, this.keys = n, !this.pointerLock && this.device === "pointer" && e;
  },
  threshold(s, t, {
    filterTaps: e = !1,
    tapsThreshold: i = 3,
    axis: n = void 0
  }) {
    const r = u.toVector(s, e ? i : n ? 1 : 0);
    return this.filterTaps = e, this.tapsThreshold = i, r;
  },
  swipe({
    velocity: s = Wt,
    distance: t = zt,
    duration: e = $t
  } = {}) {
    return {
      velocity: this.transform(u.toVector(s)),
      distance: this.transform(u.toVector(t)),
      duration: e
    };
  },
  delay(s = 0) {
    switch (s) {
      case !0:
        return Xt;
      case !1:
        return 0;
      default:
        return s;
    }
  },
  axisThreshold(s) {
    return s ? f(f({}, J), s) : J;
  },
  keyboardDisplacement(s = qt) {
    return s;
  }
});
function nt(s) {
  const [t, e] = s.overflow, [i, n] = s._delta, [r, o] = s._direction;
  (t < 0 && i > 0 && r < 0 || t > 0 && i < 0 && r > 0) && (s._movement[0] = s._movementBound[0]), (e < 0 && n > 0 && o < 0 || e > 0 && n < 0 && o > 0) && (s._movement[1] = s._movementBound[1]);
}
const Qt = 30, Zt = 100;
class Ft extends st {
  constructor(...t) {
    super(...t), d(this, "ingKey", "pinching"), d(this, "aliasKey", "da");
  }
  init() {
    this.state.offset = [1, 0], this.state.lastOffset = [1, 0], this.state._pointerEvents = /* @__PURE__ */ new Map();
  }
  reset() {
    super.reset();
    const t = this.state;
    t._touchIds = [], t.canceled = !1, t.cancel = this.cancel.bind(this), t.turns = 0;
  }
  computeOffset() {
    const {
      type: t,
      movement: e,
      lastOffset: i
    } = this.state;
    t === "wheel" ? this.state.offset = u.add(e, i) : this.state.offset = [(1 + e[0]) * i[0], e[1] + i[1]];
  }
  computeMovement() {
    const {
      offset: t,
      lastOffset: e
    } = this.state;
    this.state.movement = [t[0] / e[0], t[1] - e[1]];
  }
  axisIntent() {
    const t = this.state, [e, i] = t._movement;
    if (!t.axis) {
      const n = Math.abs(e) * Qt - Math.abs(i);
      n < 0 ? t.axis = "angle" : n > 0 && (t.axis = "scale");
    }
  }
  restrictToAxis(t) {
    this.config.lockDirection && (this.state.axis === "scale" ? t[1] = 0 : this.state.axis === "angle" && (t[0] = 0));
  }
  cancel() {
    const t = this.state;
    t.canceled || setTimeout(() => {
      t.canceled = !0, t._active = !1, this.compute(), this.emit();
    }, 0);
  }
  touchStart(t) {
    this.ctrl.setEventIds(t);
    const e = this.state, i = this.ctrl.touchIds;
    if (e._active && e._touchIds.every((r) => i.has(r)) || i.size < 2)
      return;
    this.start(t), e._touchIds = Array.from(i).slice(0, 2);
    const n = G(t, e._touchIds);
    n && this.pinchStart(t, n);
  }
  pointerStart(t) {
    if (t.buttons != null && t.buttons % 2 !== 1)
      return;
    this.ctrl.setEventIds(t), t.target.setPointerCapture(t.pointerId);
    const e = this.state, i = e._pointerEvents, n = this.ctrl.pointerIds;
    if (e._active && Array.from(i.keys()).every((o) => n.has(o)) || (i.size < 2 && i.set(t.pointerId, t), e._pointerEvents.size < 2))
      return;
    this.start(t);
    const r = K(...Array.from(i.values()));
    r && this.pinchStart(t, r);
  }
  pinchStart(t, e) {
    const i = this.state;
    i.origin = e.origin, this.computeValues([e.distance, e.angle]), this.computeInitial(), this.compute(t), this.emit();
  }
  touchMove(t) {
    if (!this.state._active)
      return;
    const e = G(t, this.state._touchIds);
    e && this.pinchMove(t, e);
  }
  pointerMove(t) {
    const e = this.state._pointerEvents;
    if (e.has(t.pointerId) && e.set(t.pointerId, t), !this.state._active)
      return;
    const i = K(...Array.from(e.values()));
    i && this.pinchMove(t, i);
  }
  pinchMove(t, e) {
    const i = this.state, n = i._values[1], r = e.angle - n;
    let o = 0;
    Math.abs(r) > 270 && (o += Math.sign(r)), this.computeValues([e.distance, e.angle - 360 * o]), i.origin = e.origin, i.turns = o, i._movement = [i._values[0] / i._initial[0] - 1, i._values[1] - i._initial[1]], this.compute(t), this.emit();
  }
  touchEnd(t) {
    this.ctrl.setEventIds(t), this.state._active && this.state._touchIds.some((e) => !this.ctrl.touchIds.has(e)) && (this.state._active = !1, this.compute(t), this.emit());
  }
  pointerEnd(t) {
    const e = this.state;
    this.ctrl.setEventIds(t);
    try {
      t.target.releasePointerCapture(t.pointerId);
    } catch {
    }
    e._pointerEvents.has(t.pointerId) && e._pointerEvents.delete(t.pointerId), e._active && e._pointerEvents.size < 2 && (e._active = !1, this.compute(t), this.emit());
  }
  gestureStart(t) {
    t.cancelable && t.preventDefault();
    const e = this.state;
    e._active || (this.start(t), this.computeValues([t.scale, t.rotation]), e.origin = [t.clientX, t.clientY], this.compute(t), this.emit());
  }
  gestureMove(t) {
    if (t.cancelable && t.preventDefault(), !this.state._active)
      return;
    const e = this.state;
    this.computeValues([t.scale, t.rotation]), e.origin = [t.clientX, t.clientY];
    const i = e._movement;
    e._movement = [t.scale - 1, t.rotation], e._delta = u.sub(e._movement, i), this.compute(t), this.emit();
  }
  gestureEnd(t) {
    this.state._active && (this.state._active = !1, this.compute(t), this.emit());
  }
  wheel(t) {
    const e = this.config.modifierKey;
    e && !t[e] || (this.state._active ? this.wheelChange(t) : this.wheelStart(t), this.timeoutStore.add("wheelEnd", this.wheelEnd.bind(this)));
  }
  wheelStart(t) {
    this.start(t), this.wheelChange(t);
  }
  wheelChange(t) {
    "uv" in t || t.cancelable && t.preventDefault();
    const i = this.state;
    i._delta = [-et(t)[1] / Zt * i.offset[0], 0], u.addTo(i._movement, i._delta), nt(i), this.state.origin = [t.clientX, t.clientY], this.compute(t), this.emit();
  }
  wheelEnd() {
    this.state._active && (this.state._active = !1, this.compute(), this.emit());
  }
  bind(t) {
    const e = this.config.device;
    e && (t(e, "start", this[e + "Start"].bind(this)), t(e, "change", this[e + "Move"].bind(this)), t(e, "end", this[e + "End"].bind(this)), t(e, "cancel", this[e + "End"].bind(this)), t("lostPointerCapture", "", this[e + "End"].bind(this))), this.config.pinchOnWheel && t("wheel", "", this.wheel.bind(this), {
      passive: !1
    });
  }
}
const te = f(f({}, it), {}, {
  device(s, t, {
    shared: e,
    pointer: {
      touch: i = !1
    } = {}
  }) {
    if (e.target && !m.touch && m.gesture)
      return "gesture";
    if (m.touch && i)
      return "touch";
    if (m.touchscreen) {
      if (m.pointer)
        return "pointer";
      if (m.touch)
        return "touch";
    }
  },
  bounds(s, t, {
    scaleBounds: e = {},
    angleBounds: i = {}
  }) {
    const n = (o) => {
      const c = W(P(e, o), {
        min: -1 / 0,
        max: 1 / 0
      });
      return [c.min, c.max];
    }, r = (o) => {
      const c = W(P(i, o), {
        min: -1 / 0,
        max: 1 / 0
      });
      return [c.min, c.max];
    };
    return typeof e != "function" && typeof i != "function" ? [n(), r()] : (o) => [n(o), r(o)];
  },
  threshold(s, t, e) {
    return this.lockDirection = e.axis === "lock", u.toVector(s, this.lockDirection ? [0.1, 3] : 0);
  },
  modifierKey(s) {
    return s === void 0 ? "ctrlKey" : s;
  },
  pinchOnWheel(s = !0) {
    return s;
  }
});
class ee extends S {
  constructor(...t) {
    super(...t), d(this, "ingKey", "moving");
  }
  move(t) {
    this.config.mouseOnly && t.pointerType !== "mouse" || (this.state._active ? this.moveChange(t) : this.moveStart(t), this.timeoutStore.add("moveEnd", this.moveEnd.bind(this)));
  }
  moveStart(t) {
    this.start(t), this.computeValues(T(t)), this.compute(t), this.computeInitial(), this.emit();
  }
  moveChange(t) {
    if (!this.state._active)
      return;
    const e = T(t), i = this.state;
    i._delta = u.sub(e, i._values), u.addTo(i._movement, i._delta), this.computeValues(e), this.compute(t), this.emit();
  }
  moveEnd(t) {
    this.state._active && (this.state._active = !1, this.compute(t), this.emit());
  }
  bind(t) {
    t("pointer", "change", this.move.bind(this)), t("pointer", "leave", this.moveEnd.bind(this));
  }
}
const se = f(f({}, v), {}, {
  mouseOnly: (s = !0) => s
});
class ie extends S {
  constructor(...t) {
    super(...t), d(this, "ingKey", "scrolling");
  }
  scroll(t) {
    this.state._active || this.start(t), this.scrollChange(t), this.timeoutStore.add("scrollEnd", this.scrollEnd.bind(this));
  }
  scrollChange(t) {
    t.cancelable && t.preventDefault();
    const e = this.state, i = Ot(t);
    e._delta = u.sub(i, e._values), u.addTo(e._movement, e._delta), this.computeValues(i), this.compute(t), this.emit();
  }
  scrollEnd() {
    this.state._active && (this.state._active = !1, this.compute(), this.emit());
  }
  bind(t) {
    t("scroll", "", this.scroll.bind(this));
  }
}
const ne = v;
class re extends S {
  constructor(...t) {
    super(...t), d(this, "ingKey", "wheeling");
  }
  wheel(t) {
    this.state._active || this.start(t), this.wheelChange(t), this.timeoutStore.add("wheelEnd", this.wheelEnd.bind(this));
  }
  wheelChange(t) {
    const e = this.state;
    e._delta = et(t), u.addTo(e._movement, e._delta), nt(e), this.compute(t), this.emit();
  }
  wheelEnd() {
    this.state._active && (this.state._active = !1, this.compute(), this.emit());
  }
  bind(t) {
    t("wheel", "", this.wheel.bind(this));
  }
}
const oe = v;
class ae extends S {
  constructor(...t) {
    super(...t), d(this, "ingKey", "hovering");
  }
  enter(t) {
    this.config.mouseOnly && t.pointerType !== "mouse" || (this.start(t), this.computeValues(T(t)), this.compute(t), this.emit());
  }
  leave(t) {
    if (this.config.mouseOnly && t.pointerType !== "mouse")
      return;
    const e = this.state;
    if (!e._active)
      return;
    e._active = !1;
    const i = T(t);
    e._movement = e._delta = u.sub(i, e._values), this.computeValues(i), this.compute(t), e.delta = e.movement, this.emit();
  }
  bind(t) {
    t("pointer", "enter", this.enter.bind(this)), t("pointer", "leave", this.leave.bind(this));
  }
}
const ce = f(f({}, v), {}, {
  mouseOnly: (s = !0) => s
}), B = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map();
function y(s) {
  B.set(s.key, s.engine), V.set(s.key, s.resolver);
}
const rt = {
  key: "drag",
  engine: Bt,
  resolver: Jt
}, ot = {
  key: "hover",
  engine: ae,
  resolver: ce
}, at = {
  key: "move",
  engine: ee,
  resolver: se
}, ct = {
  key: "pinch",
  engine: Ft,
  resolver: te
}, ut = {
  key: "scroll",
  engine: ie,
  resolver: ne
}, ht = {
  key: "wheel",
  engine: re,
  resolver: oe
};
function ue(s, t) {
  if (s == null)
    return {};
  var e = {}, i = Object.keys(s), n, r;
  for (r = 0; r < i.length; r++)
    n = i[r], !(t.indexOf(n) >= 0) && (e[n] = s[n]);
  return e;
}
function he(s, t) {
  if (s == null)
    return {};
  var e = ue(s, t), i, n;
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(s);
    for (n = 0; n < r.length; n++)
      i = r[n], !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(s, i) && (e[i] = s[i]);
  }
  return e;
}
const le = {
  target(s) {
    if (s)
      return () => "current" in s ? s.current : s;
  },
  enabled(s = !0) {
    return s;
  },
  window(s = m.isBrowser ? window : void 0) {
    return s;
  },
  eventOptions({
    passive: s = !0,
    capture: t = !1
  } = {}) {
    return {
      passive: s,
      capture: t
    };
  },
  transform(s) {
    return s;
  }
}, fe = ["target", "eventOptions", "window", "enabled", "transform"];
function O(s = {}, t) {
  const e = {};
  for (const [i, n] of Object.entries(t))
    switch (typeof n) {
      case "function":
        e[i] = n.call(e, s[i], i, s);
        break;
      case "object":
        e[i] = O(s[i], n);
        break;
      case "boolean":
        n && (e[i] = s[i]);
        break;
    }
  return e;
}
function de(s, t, e = {}) {
  const i = s, {
    target: n,
    eventOptions: r,
    window: o,
    enabled: c,
    transform: l
  } = i, h = he(i, fe);
  if (e.shared = O({
    target: n,
    eventOptions: r,
    window: o,
    enabled: c,
    transform: l
  }, le), t) {
    const a = V.get(t);
    e[t] = O(f({
      shared: e.shared
    }, h), a);
  } else
    for (const a in h) {
      const g = V.get(a);
      g && (e[a] = O(f({
        shared: e.shared
      }, h[a]), g));
    }
  return e;
}
class lt {
  constructor(t, e) {
    d(this, "_listeners", /* @__PURE__ */ new Set()), this._ctrl = t, this._gestureKey = e;
  }
  add(t, e, i, n, r) {
    const o = this._listeners, c = At(e, i), l = this._gestureKey ? this._ctrl.config[this._gestureKey].eventOptions : {}, h = f(f({}, l), r);
    t.addEventListener(c, n, h);
    const a = () => {
      t.removeEventListener(c, n, h), o.delete(a);
    };
    return o.add(a), a;
  }
  clean() {
    this._listeners.forEach((t) => t()), this._listeners.clear();
  }
}
class pe {
  constructor() {
    d(this, "_timeouts", /* @__PURE__ */ new Map());
  }
  add(t, e, i = 140, ...n) {
    this.remove(t), this._timeouts.set(t, window.setTimeout(e, i, ...n));
  }
  remove(t) {
    const e = this._timeouts.get(t);
    e && window.clearTimeout(e);
  }
  clean() {
    this._timeouts.forEach((t) => void window.clearTimeout(t)), this._timeouts.clear();
  }
}
class me {
  constructor(t) {
    d(this, "gestures", /* @__PURE__ */ new Set()), d(this, "_targetEventStore", new lt(this)), d(this, "gestureEventStores", {}), d(this, "gestureTimeoutStores", {}), d(this, "handlers", {}), d(this, "config", {}), d(this, "pointerIds", /* @__PURE__ */ new Set()), d(this, "touchIds", /* @__PURE__ */ new Set()), d(this, "state", {
      shared: {
        shiftKey: !1,
        metaKey: !1,
        ctrlKey: !1,
        altKey: !1
      }
    }), ge(this, t);
  }
  setEventIds(t) {
    if (M(t))
      return this.touchIds = new Set(xt(t)), this.touchIds;
    if ("pointerId" in t)
      return t.type === "pointerup" || t.type === "pointercancel" ? this.pointerIds.delete(t.pointerId) : t.type === "pointerdown" && this.pointerIds.add(t.pointerId), this.pointerIds;
  }
  applyHandlers(t, e) {
    this.handlers = t, this.nativeHandlers = e;
  }
  applyConfig(t, e) {
    this.config = de(t, e, this.config);
  }
  clean() {
    this._targetEventStore.clean();
    for (const t of this.gestures)
      this.gestureEventStores[t].clean(), this.gestureTimeoutStores[t].clean();
  }
  effect() {
    return this.config.shared.target && this.bind(), () => this._targetEventStore.clean();
  }
  bind(...t) {
    const e = this.config.shared, i = {};
    let n;
    if (!(e.target && (n = e.target(), !n))) {
      if (e.enabled) {
        for (const o of this.gestures) {
          const c = this.config[o], l = Q(i, c.eventOptions, !!n);
          if (c.enabled) {
            const h = B.get(o);
            new h(this, t, o).bind(l);
          }
        }
        const r = Q(i, e.eventOptions, !!n);
        for (const o in this.nativeHandlers)
          r(o, "", (c) => this.nativeHandlers[o](f(f({}, this.state.shared), {}, {
            event: c,
            args: t
          })), void 0, !0);
      }
      for (const r in i)
        i[r] = Ct(...i[r]);
      if (!n)
        return i;
      for (const r in i) {
        const {
          device: o,
          capture: c,
          passive: l
        } = It(r);
        this._targetEventStore.add(n, o, "", i[r], {
          capture: c,
          passive: l
        });
      }
    }
  }
}
function E(s, t) {
  s.gestures.add(t), s.gestureEventStores[t] = new lt(s, t), s.gestureTimeoutStores[t] = new pe();
}
function ge(s, t) {
  t.drag && E(s, "drag"), t.wheel && E(s, "wheel"), t.scroll && E(s, "scroll"), t.move && E(s, "move"), t.pinch && E(s, "pinch"), t.hover && E(s, "hover");
}
const Q = (s, t, e) => (i, n, r, o = {}, c = !1) => {
  var l, h;
  const a = (l = o.capture) !== null && l !== void 0 ? l : t.capture, g = (h = o.passive) !== null && h !== void 0 ? h : t.passive;
  let p = c ? i : Tt(i, n, a);
  e && g && (p += "Passive"), s[p] = s[p] || [], s[p].push(r);
}, _e = /^on(Drag|Wheel|Scroll|Move|Pinch|Hover)/;
function ve(s) {
  const t = {}, e = {}, i = /* @__PURE__ */ new Set();
  for (let n in s)
    _e.test(n) ? (i.add(RegExp.lastMatch), e[n] = s[n]) : t[n] = s[n];
  return [e, t, i];
}
function w(s, t, e, i, n, r) {
  if (!s.has(e) || !B.has(i))
    return;
  const o = e + "Start", c = e + "End", l = (h) => {
    let a;
    return h.first && o in t && t[o](h), e in t && (a = t[e](h)), h.last && c in t && t[c](h), a;
  };
  n[i] = l, r[i] = r[i] || {};
}
function ye(s, t) {
  const [e, i, n] = ve(s), r = {};
  return w(n, e, "onDrag", "drag", r, t), w(n, e, "onWheel", "wheel", r, t), w(n, e, "onScroll", "scroll", r, t), w(n, e, "onPinch", "pinch", r, t), w(n, e, "onMove", "move", r, t), w(n, e, "onHover", "hover", r, t), {
    handlers: r,
    config: t,
    nativeHandlers: i
  };
}
function b(s, t = {}, e, i) {
  const n = L.useMemo(() => new me(s), []);
  if (n.applyHandlers(s, i), n.applyConfig(t, e), L.useEffect(n.effect.bind(n)), L.useEffect(() => n.clean.bind(n), []), t.target === void 0)
    return n.bind.bind(n);
}
function we(s, t) {
  return y(rt), b({
    drag: s
  }, t || {}, "drag");
}
function Te(s, t) {
  return y(ct), b({
    pinch: s
  }, t || {}, "pinch");
}
function Se(s, t) {
  return y(ht), b({
    wheel: s
  }, t || {}, "wheel");
}
function Ie(s, t) {
  return y(ut), b({
    scroll: s
  }, t || {}, "scroll");
}
function Ae(s, t) {
  return y(at), b({
    move: s
  }, t || {}, "move");
}
function ke(s, t) {
  return y(ot), b({
    hover: s
  }, t || {}, "hover");
}
function be(s) {
  return s.forEach(y), function(e, i) {
    const {
      handlers: n,
      nativeHandlers: r,
      config: o
    } = ye(e, i || {});
    return b(n, o, void 0, r);
  };
}
function De(s, t) {
  return be([rt, ct, ut, ht, at, ot])(s, t || {});
}
export {
  V as ConfigResolverMap,
  B as EngineMap,
  be as createUseGesture,
  rt as dragAction,
  ot as hoverAction,
  at as moveAction,
  ct as pinchAction,
  y as registerAction,
  U as rubberbandIfOutOfBounds,
  ut as scrollAction,
  we as useDrag,
  De as useGesture,
  ke as useHover,
  Ae as useMove,
  Te as usePinch,
  Ie as useScroll,
  Se as useWheel,
  ht as wheelAction
};
