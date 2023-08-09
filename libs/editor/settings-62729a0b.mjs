import { jsx as e, Fragment as M, jsxs as n } from "react/jsx-runtime";
import { Typography as N, ColorPicker as x, Switch as U } from "antd";
import { A as $, c as H, D as J, x as Q, y as R, z as W, K as h, o as k, B as y, a as C, S as z, C as G, J as V, m as q, L as O, d as X, O as v, Q as Y, V as Z, W as T } from "./index-033f485d.mjs";
import { K as _, S as l, a as u } from "./editor-fb8f6c22.mjs";
import * as p from "react";
import { useState as ee, useCallback as te, useLayoutEffect as oe, useEffect as re } from "react";
import ne from "react-smooth-scrollbar";
import { createPortal as ae } from "react-dom";
import "react-router-dom";
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
function se() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function ce() {
  let [, t] = ee(/* @__PURE__ */ Object.create(null));
  return te(() => {
    t(/* @__PURE__ */ Object.create(null));
  }, []);
}
var ie = se() ? oe : re, le = ({
  children: t,
  type: a = "reach-portal",
  containerRef: o
}) => {
  let r = p.useRef(null), s = p.useRef(null), c = ce();
  return p.useEffect(() => {
    o != null && (typeof o != "object" || !("current" in o) ? console.warn("@reach/portal: Invalid value passed to the `containerRef` of a `Portal`. The portal will be appended to the document body, but if you want to attach it to another DOM node you must pass a valid React ref object to `containerRef`.") : o.current == null && console.warn("@reach/portal: A ref was passed to the `containerRef` prop of a `Portal`, but no DOM node was attached to it. Be sure to pass the ref to a DOM component.\n\nIf you are forwarding the ref from another component, be sure to use the React.forwardRef API. See https://reactjs.org/docs/forwarding-refs.html."));
  }, [o]), ie(() => {
    if (!r.current)
      return;
    let m = r.current.ownerDocument, i = o?.current || m.body;
    return s.current = m?.createElement(a), i.appendChild(s.current), c(), () => {
      s.current && i && i.removeChild(s.current);
    };
  }, [a, c, o]), s.current ? ae(t, s.current) : /* @__PURE__ */ p.createElement("span", {
    ref: r
  });
}, D = ({
  unstable_skipInitialRender: t,
  ...a
}) => {
  let [o, r] = p.useState(!1);
  return p.useEffect(() => {
    t && r(!0);
  }, [t]), t && !o ? null : /* @__PURE__ */ p.createElement(le, {
    ...a
  });
};
D.displayName = "Portal";
const de = () => ({
  opacity: {
    from: () => ({ opacity: 0 }),
    to: () => ({ opacity: 1 })
  },
  transform: {
    from: () => ({
      transform: "scale(0.9) rotate(8deg)",
      x: -150
    }),
    to: (t) => ({
      transform: t ? "scale(1.0) rotate(0deg)" : "scale(0.9) rotate(8deg)",
      x: t ? 0 : -150
    })
  }
}), he = ({
  onClose: t,
  isOpen: a,
  children: o,
  width: r,
  height: s
}) => {
  const { Spring: c, Gesture: m } = H(), { opacity: i, transform: S } = de(), d = c.useTransition(a, {
    from: i.from(),
    enter: i.to(),
    leave: i.from(),
    config: c.config.stiff
  }), P = c.useSpring({
    from: S.from(),
    to: S.to(a),
    config: c.config.wobbly
  }), [B, j] = c.useSpring(() => ({
    y: 0,
    x: 0,
    scale: 1
  })), { y: A, x: K, scale: L } = B, F = m.useDrag(
    ({ offset: [g, b], down: w }) => {
      j.start({
        y: w ? b : 0,
        immediate: !1,
        x: w ? g : 0,
        scale: w ? 1.07 : 1
      });
    },
    { from: () => [0, 0], filterTaps: !0, rubberband: !0, delay: 200 }
  ), I = (g) => {
    g.stopPropagation();
  };
  return /* @__PURE__ */ e(M, { children: d((g, b) => /* @__PURE__ */ e(J, { when: b, children: /* @__PURE__ */ e(D, { children: /* @__PURE__ */ e(Q, { style: g, onClick: t, as: c.a.div, children: /* @__PURE__ */ e(
    R,
    {
      style: { ...P, x: K, y: A, scale: L },
      ...F(),
      onClick: I,
      as: c.a.div,
      $width: r,
      $height: s,
      children: /* @__PURE__ */ e(
        ne,
        {
          damping: 0.05,
          syncCallbacks: !0,
          alwaysShowTracks: !0,
          children: /* @__PURE__ */ e(W, { children: o })
        }
      )
    }
  ) }) }) })) });
}, ue = (t) => /* @__PURE__ */ e($, { children: /* @__PURE__ */ e(he, { ...t }) }), f = ({ keyCode: t, children: a, experimental: o }) => /* @__PURE__ */ n(_, { children: [
  /* @__PURE__ */ n(N.Text, { keyboard: !0, children: [
    o ? "🧪" : "✌️",
    " Alt + ",
    t
  ] }),
  /* @__PURE__ */ e(l, { style: { justifyContent: "space-around" }, children: /* @__PURE__ */ e("p", { children: a }) })
] }), fe = () => /* @__PURE__ */ n(M, { children: [
  /* @__PURE__ */ e(f, { keyCode: h.O, experimental: !0, children: "Open a file on your OS" }),
  /* @__PURE__ */ e(f, { keyCode: h.S, experimental: !0, children: "Save a file on your OS" }),
  /* @__PURE__ */ e(f, { keyCode: h.N, children: "Open new tab" }),
  /* @__PURE__ */ e(f, { keyCode: h.T, children: "Close current tab" }),
  /* @__PURE__ */ e(f, { keyCode: h.P, children: "Open/close terminal" }),
  /* @__PURE__ */ e(f, { keyCode: h.J, children: "Open/close test cases" }),
  /* @__PURE__ */ e(f, { keyCode: h.Q, children: "Open/close settings" })
] }), pe = k(() => {
  const t = y(), { fontSize: a } = C();
  return /* @__PURE__ */ e(
    z,
    {
      onChange: (r) => {
        t.changeFontSize(r);
      },
      value: a,
      options: G.map((r) => ({
        value: r,
        label: `${r}px`
      }))
    }
  );
}), me = k(() => {
  const t = y(), { tabSize: a } = C();
  return /* @__PURE__ */ e(
    z,
    {
      onChange: (r) => {
        t.changeTabSize(r);
      },
      value: a,
      options: V.map((r) => ({
        value: r,
        label: r
      }))
    }
  );
}), E = (t) => {
  const { theme: a } = C(), o = y();
  return q((r, s) => (a !== O && o.changeTheme(O), t(s)), 300);
}, xe = k(() => {
  const t = X(), a = t.state.isSettingsOpened, o = y(), { customBackground: r, customColor: s } = C(), c = () => {
    t.update({
      isSettingsOpened: !1
    });
  }, m = E((d) => {
    o.changeCustomBackground(d);
  }), i = E((d) => {
    o.changeCustomColor(d);
  });
  return /* @__PURE__ */ n(ue, { isOpen: a, onClose: c, children: [
    /* @__PURE__ */ e(v, { children: "Editor settings" }),
    /* @__PURE__ */ n(u, { children: [
      /* @__PURE__ */ n(l, { children: [
        /* @__PURE__ */ e("h4", { children: "Editor Theme" }),
        /* @__PURE__ */ e("p", { children: "Choose the code editor theme" })
      ] }),
      /* @__PURE__ */ e(Y, {})
    ] }),
    /* @__PURE__ */ n(u, { children: [
      /* @__PURE__ */ n(l, { children: [
        /* @__PURE__ */ e("h4", { children: "Font Size" }),
        /* @__PURE__ */ e("p", { children: "Choose your preferred font size" })
      ] }),
      /* @__PURE__ */ e(pe, {})
    ] }),
    /* @__PURE__ */ n(u, { children: [
      /* @__PURE__ */ n(l, { children: [
        /* @__PURE__ */ e("h4", { children: "Current Tab Language" }),
        /* @__PURE__ */ e("p", { children: "Choose the code editor language (js, py, css)" })
      ] }),
      /* @__PURE__ */ e(Z, {})
    ] }),
    /* @__PURE__ */ n(u, { children: [
      /* @__PURE__ */ n(l, { children: [
        /* @__PURE__ */ e("h4", { children: "Tab size" }),
        /* @__PURE__ */ e("p", { children: "Choose the width of a tab character" })
      ] }),
      /* @__PURE__ */ e(me, {})
    ] }),
    /* @__PURE__ */ e(T, {}),
    /* @__PURE__ */ n(u, { children: [
      /* @__PURE__ */ n(l, { children: [
        /* @__PURE__ */ e("h4", { children: "Custom Editor Background" }),
        /* @__PURE__ */ e("p", { children: "Change custom background for code editor" })
      ] }),
      /* @__PURE__ */ e(
        x,
        {
          onChange: m,
          value: r,
          showText: !0,
          size: "large"
        }
      )
    ] }),
    /* @__PURE__ */ n(u, { children: [
      /* @__PURE__ */ n(l, { children: [
        /* @__PURE__ */ e("h4", { children: "Custom Editor Color" }),
        /* @__PURE__ */ e("p", { children: "Change custom color for code editor" })
      ] }),
      /* @__PURE__ */ e(
        x,
        {
          onChange: i,
          value: s,
          showText: !0,
          size: "large"
        }
      )
    ] }),
    /* @__PURE__ */ e(T, {}),
    /* @__PURE__ */ n(u, { children: [
      /* @__PURE__ */ n(l, { children: [
        /* @__PURE__ */ e("h4", { children: "Save editor settings to Local Storage" }),
        /* @__PURE__ */ e("p", { children: "All your next changes will be stored in localStorage" })
      ] }),
      /* @__PURE__ */ e(
        U,
        {
          defaultChecked: !0,
          onChange: (d) => {
            o.setIsLocalStorageDisabled(!d);
          },
          style: { marginRight: 15, marginTop: 0 }
        }
      )
    ] }),
    /* @__PURE__ */ e(v, { children: "Key buildings" }),
    /* @__PURE__ */ e(fe, {}),
    /* @__PURE__ */ e(T, {})
  ] });
});
export {
  xe as default
};
