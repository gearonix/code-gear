import { jsx as e, Fragment as z, jsxs as n } from "react/jsx-runtime";
import { Typography as F, ColorPicker as x, Switch as I } from "antd";
import { A as N, c as U, D as H, y as J, z as Q, B as R, K as u, o as T, C as y, a as C, S as M, J as $, L as G, m as V, O, d as W, Q as q, V as X } from "./index-f1dd0bc2.mjs";
import { K as Y, S as i, T as v, a as f, b as w } from "./editor-1c96e4e9.mjs";
import * as m from "react";
import { useState as Z, useCallback as _, useLayoutEffect as ee, useEffect as te } from "react";
import oe from "react-smooth-scrollbar";
import { createPortal as re } from "react-dom";
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
function ne() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function ae() {
  let [, o] = Z(/* @__PURE__ */ Object.create(null));
  return _(() => {
    o(/* @__PURE__ */ Object.create(null));
  }, []);
}
var se = ne() ? ee : te, ce = ({
  children: o,
  type: a = "reach-portal",
  containerRef: r
}) => {
  let t = m.useRef(null), s = m.useRef(null), c = ae();
  return m.useEffect(() => {
    r != null && (typeof r != "object" || !("current" in r) ? console.warn("@reach/portal: Invalid value passed to the `containerRef` of a `Portal`. The portal will be appended to the document body, but if you want to attach it to another DOM node you must pass a valid React ref object to `containerRef`.") : r.current == null && console.warn("@reach/portal: A ref was passed to the `containerRef` prop of a `Portal`, but no DOM node was attached to it. Be sure to pass the ref to a DOM component.\n\nIf you are forwarding the ref from another component, be sure to use the React.forwardRef API. See https://reactjs.org/docs/forwarding-refs.html."));
  }, [r]), se(() => {
    if (!t.current)
      return;
    let l = t.current.ownerDocument, d = r?.current || l.body;
    return s.current = l?.createElement(a), d.appendChild(s.current), c(), () => {
      s.current && d && d.removeChild(s.current);
    };
  }, [a, c, r]), s.current ? re(o, s.current) : /* @__PURE__ */ m.createElement("span", {
    ref: t
  });
}, D = ({
  unstable_skipInitialRender: o,
  ...a
}) => {
  let [r, t] = m.useState(!1);
  return m.useEffect(() => {
    o && t(!0);
  }, [o]), o && !r ? null : /* @__PURE__ */ m.createElement(ce, {
    ...a
  });
};
D.displayName = "Portal";
const ie = () => ({
  opacity: {
    from: () => ({ opacity: 0 }),
    to: () => ({ opacity: 1 })
  },
  transform: {
    from: () => ({
      transform: "scale(0.9) rotate(8deg)",
      x: -150
    }),
    to: (o) => ({
      transform: o ? "scale(1.0) rotate(0deg)" : "scale(0.9) rotate(8deg)",
      x: o ? 0 : -150
    })
  }
}), le = ({ onClose: o, isOpen: a, children: r }) => {
  const { Spring: t, Gesture: s } = U(), { opacity: c, transform: l } = ie(), d = t.useTransition(a, {
    from: c.from(),
    enter: c.to(),
    leave: c.from(),
    config: t.config.stiff
  }), k = t.useSpring({
    from: l.from(),
    to: l.to(a),
    config: t.config.wobbly
  }), [h, P] = t.useSpring(() => ({
    y: 0,
    x: 0,
    scale: 1
  })), { y: B, x: j, scale: A } = h, K = s.useDrag(
    ({ offset: [g, S], down: b }) => {
      P.start({
        y: b ? S : 0,
        immediate: !1,
        x: b ? g : 0,
        scale: b ? 1.07 : 1
      });
    },
    { from: () => [0, 0], filterTaps: !0, rubberband: !0, delay: 200 }
  ), L = (g) => {
    g.stopPropagation();
  };
  return /* @__PURE__ */ e(z, { children: d((g, S) => /* @__PURE__ */ e(H, { when: S, children: /* @__PURE__ */ e(D, { children: /* @__PURE__ */ e(J, { style: g, onClick: o, as: t.a.div, children: /* @__PURE__ */ e(
    Q,
    {
      style: { ...k, x: j, y: B, scale: A },
      ...K(),
      onClick: L,
      as: t.a.div,
      children: /* @__PURE__ */ e(
        oe,
        {
          damping: 0.05,
          syncCallbacks: !0,
          alwaysShowTracks: !0,
          children: /* @__PURE__ */ e(R, { children: r })
        }
      )
    }
  ) }) }) })) });
}, de = (o) => /* @__PURE__ */ e(N, { children: /* @__PURE__ */ e(le, { ...o }) }), p = ({ keyCode: o, children: a, experimental: r }) => /* @__PURE__ */ n(Y, { children: [
  /* @__PURE__ */ n(F.Text, { keyboard: !0, children: [
    r ? "🧪" : "✌️",
    " Alt + ",
    o
  ] }),
  /* @__PURE__ */ e(i, { style: { justifyContent: "space-around" }, children: /* @__PURE__ */ e("p", { children: a }) })
] }), he = () => /* @__PURE__ */ n(z, { children: [
  /* @__PURE__ */ e(p, { keyCode: u.O, experimental: !0, children: "Open a file on your OS" }),
  /* @__PURE__ */ e(p, { keyCode: u.S, experimental: !0, children: "Save a file on your OS" }),
  /* @__PURE__ */ e(p, { keyCode: u.N, children: "Open new tab" }),
  /* @__PURE__ */ e(p, { keyCode: u.T, children: "Close current tab" }),
  /* @__PURE__ */ e(p, { keyCode: u.P, children: "Open/close terminal" }),
  /* @__PURE__ */ e(p, { keyCode: u.J, children: "Open/close test cases" }),
  /* @__PURE__ */ e(p, { keyCode: u.Q, children: "Open/close settings" })
] }), ue = T(() => {
  const o = y(), { fontSize: a } = C();
  return /* @__PURE__ */ e(
    M,
    {
      onChange: (t) => {
        o.changeFontSize(t);
      },
      value: a,
      options: $.map((t) => ({
        value: t,
        label: `${t}px`
      }))
    }
  );
}), fe = T(() => {
  const o = y(), { tabSize: a } = C();
  return /* @__PURE__ */ e(
    M,
    {
      onChange: (t) => {
        o.changeTabSize(t);
      },
      value: a,
      options: G.map((t) => ({
        value: t,
        label: t
      }))
    }
  );
}), E = (o) => {
  const { theme: a } = C(), r = y();
  return V((t, s) => (a !== O && r.changeTheme(O), o(s)), 300);
}, Te = T(() => {
  const o = W(), a = o.state.isSettingsOpened, r = y(), { customBackground: t, customColor: s } = C(), c = () => {
    o.update({
      isSettingsOpened: !1
    });
  }, l = E((h) => {
    r.changeCustomBackground(h);
  }), d = E((h) => {
    r.changeCustomColor(h);
  });
  return /* @__PURE__ */ n(de, { isOpen: a, onClose: c, children: [
    /* @__PURE__ */ e(v, { children: "Editor settings" }),
    /* @__PURE__ */ n(f, { children: [
      /* @__PURE__ */ n(i, { children: [
        /* @__PURE__ */ e("h4", { children: "Editor Theme" }),
        /* @__PURE__ */ e("p", { children: "Choose the code editor theme" })
      ] }),
      /* @__PURE__ */ e(q, {})
    ] }),
    /* @__PURE__ */ n(f, { children: [
      /* @__PURE__ */ n(i, { children: [
        /* @__PURE__ */ e("h4", { children: "Font Size" }),
        /* @__PURE__ */ e("p", { children: "Choose your preferred font size" })
      ] }),
      /* @__PURE__ */ e(ue, {})
    ] }),
    /* @__PURE__ */ n(f, { children: [
      /* @__PURE__ */ n(i, { children: [
        /* @__PURE__ */ e("h4", { children: "Current Tab Language" }),
        /* @__PURE__ */ e("p", { children: "Choose the code editor language (js, py, css)" })
      ] }),
      /* @__PURE__ */ e(X, {})
    ] }),
    /* @__PURE__ */ n(f, { children: [
      /* @__PURE__ */ n(i, { children: [
        /* @__PURE__ */ e("h4", { children: "Tab size" }),
        /* @__PURE__ */ e("p", { children: "Choose the width of a tab character" })
      ] }),
      /* @__PURE__ */ e(fe, {})
    ] }),
    /* @__PURE__ */ e(w, {}),
    /* @__PURE__ */ n(f, { children: [
      /* @__PURE__ */ n(i, { children: [
        /* @__PURE__ */ e("h4", { children: "Custom Editor Background" }),
        /* @__PURE__ */ e("p", { children: "Change custom background for code editor" })
      ] }),
      /* @__PURE__ */ e(
        x,
        {
          onChange: l,
          value: t,
          showText: !0,
          size: "large"
        }
      )
    ] }),
    /* @__PURE__ */ n(f, { children: [
      /* @__PURE__ */ n(i, { children: [
        /* @__PURE__ */ e("h4", { children: "Custom Editor Color" }),
        /* @__PURE__ */ e("p", { children: "Change custom color for code editor" })
      ] }),
      /* @__PURE__ */ e(
        x,
        {
          onChange: d,
          value: s,
          showText: !0,
          size: "large"
        }
      )
    ] }),
    /* @__PURE__ */ e(w, {}),
    /* @__PURE__ */ n(f, { children: [
      /* @__PURE__ */ n(i, { children: [
        /* @__PURE__ */ e("h4", { children: "Save editor settings to Local Storage" }),
        /* @__PURE__ */ e("p", { children: "All your next changes will be stored in localStorage" })
      ] }),
      /* @__PURE__ */ e(
        I,
        {
          defaultChecked: !0,
          onChange: (h) => {
            r.setIsLocalStorageDisabled(!h);
          },
          style: { marginRight: 15, marginTop: 0 }
        }
      )
    ] }),
    /* @__PURE__ */ e(v, { children: "Key buildings" }),
    /* @__PURE__ */ e(he, {}),
    /* @__PURE__ */ e(w, {})
  ] });
});
export {
  Te as default
};
