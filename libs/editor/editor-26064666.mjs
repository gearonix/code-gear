import { jsx as t, jsxs as i, Fragment as b } from "react/jsx-runtime";
import { useEffect as y, createContext as P, useReducer as k, useMemo as j, useContext as $, useState as B, useCallback as L, lazy as A, Suspense as D } from "react";
import { Link as O } from "react-router-dom";
import { P as I, G as m, i as v, E as C, U as T, u as _, a as E, b as F, p as R, t as w, D as V, c as G, A as W, d as z, e as U, f as q, I as l, g as N, R as Z, h as S, s as c, w as u, j as g, o as J, F as K, k as Q, l as X, m as Y, n as e0, q as t0, r as o0, v as r0, M as s0, N as n0, H as c0, x as a0, T as i0 } from "./index-5b606b5d.mjs";
import "antd";
import "react-smooth-scrollbar";
const l0 = () => () => {
  if (!document.fullscreenElement)
    return document.documentElement.requestFullscreen();
  document.exitFullscreen && document.exitFullscreen();
}, d0 = ({ children: e }) => /* @__PURE__ */ t(u0, { children: e }), m0 = () => /* @__PURE__ */ i("div", { children: [
  "Custom Error Boundary. ",
  /* @__PURE__ */ t("br", {})
] }), u0 = ({ children: e }) => {
  const [o] = I();
  return console.error(o), o ? /* @__PURE__ */ t(m0, { errorInfo: o }) : /* @__PURE__ */ t(b, { children: e });
}, h0 = () => {
  y(() => (document.body.style.overflow = "hidden", () => {
    document.body.style.overflow = "auto";
  }));
};
function p0(e) {
  return m({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { d: "M5 0h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2 2 2 0 0 1-2 2H3a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1H1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1H3a2 2 0 0 1 2-2z" } }, { tag: "path", attr: { d: "M1 6v-.5a.5.5 0 0 1 1 0V6h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V9h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 2.5v.5H.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H2v-.5a.5.5 0 0 0-1 0z" } }] })(e);
}
function g0(e) {
  return m({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { d: "M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" } }] })(e);
}
function f0(e) {
  return m({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M9.25 12a.75.75 0 0 1-.22.53l-2.75 2.75a.75.75 0 0 1-1.06-1.06L7.44 12 5.22 9.78a.75.75 0 1 1 1.06-1.06l2.75 2.75c.141.14.22.331.22.53Zm2 2a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5h-5Z" } }, { tag: "path", attr: { d: "M0 4.75C0 3.784.784 3 1.75 3h20.5c.966 0 1.75.784 1.75 1.75v14.5A1.75 1.75 0 0 1 22.25 21H1.75A1.75 1.75 0 0 1 0 19.25Zm1.75-.25a.25.25 0 0 0-.25.25v14.5c0 .138.112.25.25.25h20.5a.25.25 0 0 0 .25-.25V4.75a.25.25 0 0 0-.25-.25Z" } }] })(e);
}
function v0(e) {
  return m({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01v0a2.83 2.83 0 0 1 0-4L17 3" } }, { tag: "path", attr: { d: "m16 2 6 6" } }, { tag: "path", attr: { d: "M12 16H4" } }] })(e);
}
function w0(e) {
  return m({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M576 736l-32-.001v-286c0-.336-.096-.656-.096-1.008s.096-.655.096-.991c0-17.664-14.336-32-32-32h-64c-17.664 0-32 14.336-32 32s14.336 32 32 32h32v256h-32c-17.664 0-32 14.336-32 32s14.336 32 32 32h128c17.664 0 32-14.336 32-32s-14.336-32-32-32zm-64-384.001c35.344 0 64-28.656 64-64s-28.656-64-64-64-64 28.656-64 64 28.656 64 64 64zm0-352c-282.768 0-512 229.232-512 512 0 282.784 229.232 512 512 512 282.784 0 512-229.216 512-512 0-282.768-229.216-512-512-512zm0 961.008c-247.024 0-448-201.984-448-449.01 0-247.024 200.976-448 448-448s448 200.977 448 448-200.976 449.01-448 449.01z" } }] })(e);
}
function x0(e) {
  return m({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M685.904 383.184l275.264-273.572-.896 155.072c-.289 12.928 9.967 24.176 22.912 23.888l16.416-.016c12.944-.304 23.648-8 23.92-20.928l.672-231.008c0-.223-.88-.399-.88-.623l1.264-11.712c.128-6.496-1.391-12.288-5.584-16.431-4.143-4.176-9.951-6.72-16.4-6.544l-11.696.272c-.223 0-.399.08-.64.113L760.77.687c-12.928.288-23.632 10.976-23.92 23.92l-.032 16.417c1.967 15.248 13.952 24.16 26.88 23.872l151.248.4L640.657 337.92c-12.496 12.496-12.496 32.752 0 45.264 12.496 12.48 32.752 12.48 45.247 0zM339.088 640.812L63.825 913.532l.88-154.224c.304-12.944-9.969-24.192-22.897-23.904l-17.423.032c-12.96.32-23.649 8-23.921 20.944l-.672 231.008c0 .224.88.367.88.623l-1.264 11.68c-.144 6.496 1.376 12.32 5.584 16.433 4.128 4.192 9.952 6.72 16.384 6.56l11.712-.288c.223 0 .383-.096.64-.096l230.495 1.008c12.928-.32 23.617-11.009 23.92-23.936l.032-16.432c-1.967-15.216-13.952-24.16-26.88-23.872l-151.247-.4L384.32 686.076c12.496-12.497 12.496-32.752 0-45.248s-32.737-12.512-45.233-.016zm685.122 346.56l-.672-231.01c-.288-12.944-10.992-20.624-23.92-20.944l-16.416-.032c-12.944-.289-23.184 10.975-22.912 23.903l.896 155.072-275.28-273.552c-12.496-12.496-32.752-12.496-45.248 0s-12.496 32.752 0 45.248L914.93 958.649l-151.232.4c-12.928-.288-24.912 8.657-26.88 23.872l.032 16.432c.304 12.944 11.008 23.633 23.92 23.936l229.504-1.007c.24 0 .416.095.64.095l11.696.288c6.448.16 12.272-2.368 16.4-6.56 4.193-4.128 5.696-9.936 5.584-16.432l-1.263-11.68c0-.255.88-.399.88-.622zM110.049 65.321l151.264-.397c12.928.288 24.912-8.64 26.88-23.873l-.032-16.431C287.84 11.677 277.15.972 264.24.7l-230.512.992c-.256-.032-.416-.112-.64-.112l-11.712-.273C14.945 1.132 9.105 3.676 4.992 7.851.784 11.995-.735 17.787-.592 24.283L.672 35.995c0 .223-.88.384-.88.624l.672 231.008c.288 12.928 10.977 20.624 23.921 20.928l17.424.015c12.928.288 23.183-10.96 22.895-23.888l-.88-154.224 275.264 272.72c12.48 12.497 32.753 12.497 45.25 0s12.496-32.768 0-45.264z" } }] })(e);
}
function b0(e) {
  return m({ tag: "svg", attr: { version: "1.1", viewBox: "0 0 17 17" }, child: [{ tag: "g", attr: {}, child: [] }, { tag: "path", attr: { d: "M8.5 5.972c-1.378 0-2.5 1.122-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.122 2.5-2.5-1.122-2.5-2.5-2.5zM8.5 9.972c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5 1.5 0.673 1.5 1.5-0.673 1.5-1.5 1.5zM16.94 9.446c0.037-0.321 0.060-0.645 0.060-0.974s-0.023-0.653-0.060-0.974l-2.588-0.778c-0.119-0.402-0.278-0.787-0.474-1.149l1.279-2.377c-0.406-0.51-0.869-0.973-1.38-1.38l-2.377 1.28c-0.363-0.196-0.748-0.354-1.15-0.474l-0.776-2.588c-0.32-0.037-0.644-0.060-0.974-0.060s-0.654 0.023-0.974 0.060l-0.776 2.588c-0.403 0.119-0.789 0.278-1.15 0.475l-2.377-1.28c-0.511 0.406-0.974 0.869-1.379 1.38l1.279 2.375c-0.196 0.362-0.354 0.748-0.474 1.15l-2.589 0.778c-0.037 0.32-0.060 0.644-0.060 0.974s0.023 0.654 0.060 0.974l2.588 0.776c0.12 0.403 0.278 0.789 0.474 1.151l-1.279 2.376c0.406 0.511 0.869 0.974 1.38 1.38l2.377-1.279c0.362 0.196 0.748 0.354 1.15 0.474l0.776 2.588c0.321 0.037 0.645 0.060 0.974 0.060s0.654-0.023 0.974-0.060l0.776-2.588c0.402-0.12 0.788-0.278 1.15-0.474l2.376 1.279c0.511-0.407 0.974-0.87 1.38-1.381l-1.278-2.376c0.196-0.362 0.354-0.748 0.474-1.15l2.588-0.776zM13.548 9.419l-0.154 0.518c-0.1 0.337-0.233 0.66-0.396 0.959l-0.256 0.475 0.255 0.475 0.952 1.77c-0.099 0.105-0.201 0.207-0.306 0.306l-2.243-1.209-0.475 0.256c-0.301 0.163-0.624 0.295-0.96 0.396l-0.518 0.154-0.155 0.518-0.579 1.932c-0.072 0.002-0.143 0.003-0.213 0.003s-0.141-0.001-0.213-0.003l-0.579-1.932-0.155-0.518-0.518-0.154c-0.336-0.1-0.659-0.233-0.959-0.396l-0.475-0.256-2.245 1.207c-0.104-0.099-0.207-0.201-0.306-0.306l1.208-2.244-0.256-0.475c-0.162-0.3-0.295-0.623-0.396-0.96l-0.153-0.517-2.449-0.734c-0.003-0.072-0.004-0.143-0.004-0.212 0-0.070 0.001-0.141 0.004-0.213l2.448-0.734 0.154-0.518c0.1-0.337 0.233-0.66 0.396-0.959l0.256-0.475-1.208-2.245c0.099-0.104 0.201-0.207 0.305-0.306l2.247 1.21 0.476-0.259c0.297-0.162 0.619-0.295 0.956-0.395l0.518-0.154 0.155-0.518 0.579-1.932c0.073-0.001 0.144-0.002 0.214-0.002s0.141 0.001 0.213 0.003l0.579 1.932 0.155 0.518 0.518 0.154c0.335 0.1 0.659 0.233 0.96 0.396l0.475 0.255 2.244-1.208c0.104 0.099 0.207 0.201 0.306 0.306l-0.953 1.77-0.255 0.475 0.257 0.475c0.163 0.3 0.295 0.622 0.395 0.957l0.154 0.518 0.518 0.155 1.932 0.581c0.001 0.072 0.002 0.143 0.002 0.213s-0.001 0.141-0.004 0.213l-2.448 0.734z" } }] })(e);
}
function y0(e) {
  if (!(v(e) && "base" in e && typeof e.base == "string" && "colors" in e && v(e.colors)))
    throw new Error(C.WrongJsonObject("ThemeObject"));
}
const C0 = () => {
  const e = T(), o = _(), { theme: r, customBackground: n, customColor: s } = E(), h = F();
  return R(() => {
    let a = 0;
    w.forEach(async (d) => {
      try {
        const p = await T0(`./themes/${d}.json`);
        y0(p), e?.editor.defineTheme(d, p);
      } catch {
        console.log(C.ThemeUpload(d));
      }
      a += 1, a === w.length && (h({ background: n, color: s }), e?.editor.setTheme(r), o.on());
    });
  }, [e]), o.val;
};
function T0(e) {
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
      return new Promise(function(o, r) {
        (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(
          r.bind(null, new Error("Unknown variable dynamic import: " + e))
        );
      });
  }
}
const E0 = ({ children: e }) => {
  const o = C0();
  return /* @__PURE__ */ t(V, { when: o, children: e });
}, z0 = () => {
  const { Spring: e } = G(), o = e.useSpring({
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
    spring: o
  };
}, S0 = () => T()?.editor.getEditors()[0], M0 = () => {
  const e = S0();
  return {
    find: async () => {
      await e.getAction("actions.find")?.run();
    },
    replace: async () => {
      await e.getAction("editor.action.startFindReplaceAction")?.run();
    }
  };
}, H0 = () => {
  const e = l0(), o = z(), r = M0(), n = U("isTerminalOpened"), { spring: s, animatedDiv: h } = z0(), a = () => {
    o.toggle("isSettingsOpened");
  }, d = () => {
    o.toggle("isHtmlPreviewOpened");
  };
  return /* @__PURE__ */ i(q, { as: h, style: s, children: [
    /* @__PURE__ */ i("div", { children: [
      /* @__PURE__ */ t(l, { onClick: r.find, children: /* @__PURE__ */ t(g0, {}) }),
      /* @__PURE__ */ t(l, { onClick: r.replace, children: /* @__PURE__ */ t(p0, {}) }),
      /* @__PURE__ */ t(l, { onClick: e, children: /* @__PURE__ */ t(x0, {}) }),
      /* @__PURE__ */ t(l, { onClick: n("terminal"), children: /* @__PURE__ */ t(f0, {}) }),
      /* @__PURE__ */ t(l, { onClick: n("test_cases"), children: /* @__PURE__ */ t(v0, {}) }),
      /* @__PURE__ */ t(l, { onClick: d, children: /* @__PURE__ */ t(N, {}) })
    ] }),
    /* @__PURE__ */ i("div", { children: [
      /* @__PURE__ */ t(l, { onClick: a, children: /* @__PURE__ */ t(b0, {}) }),
      /* @__PURE__ */ t(l, { children: /* @__PURE__ */ t(O, { to: Z.ABOUT, children: /* @__PURE__ */ t(w0, {}) }) })
    ] })
  ] });
}, P0 = () => /* @__PURE__ */ t(W, { children: /* @__PURE__ */ t(H0, {}) }), M = P({}), k0 = ({ children: e }) => {
  const r = S().get("EDITOR_HTML_PREVIEW", {
    html: "<h2>Hi! This is a realtime HTML editor.</h2>",
    css: "h2 {color: #C4CBDA;}",
    javascript: "// 😀"
  }), n = (d, p) => ({ ...d, ...p }), [s, h] = k(n, r), a = j(
    () => ({
      state: s,
      update: h
    }),
    [s]
  );
  return /* @__PURE__ */ t(M.Provider, { value: a, children: e });
}, H = () => $(M), j0 = c.div`
  ${u("33%", "100%")};
  border-radius: 6px;
`, $0 = c.h4`
  &:first-letter {
    text-transform: capitalize;
  }
  svg {
    margin-bottom: -3px;
  }
  color: ${g("light")};
  margin: 9px 4px;
  margin-top: 5px;
  font-size: ${({ theme: e }) => e.fz9};
`, f = J(({ lang: e }) => {
  const { theme: o, fontSize: r, tabSize: n } = E(), s = H();
  return /* @__PURE__ */ i(j0, { children: [
    /* @__PURE__ */ t($0, { children: e }),
    /* @__PURE__ */ t(
      K,
      {
        theme: o,
        onChange: (a) => {
          X(a) && s.update({
            [e]: a
          });
        },
        language: e,
        height: "300px",
        value: s.state[e],
        options: Q({
          fontSize: r,
          tabSize: n
        })
      }
    )
  ] });
}), B0 = ({ html: e, css: o, javascript: r }) => `
        <html>
          <body>${e}</body>
          <style>${o}</style>
          <script>${r}<\/script>
          <style>
            body {
            color: #C4CBDA;
            font-size: 20px;
            padding-left: 10px;
            }
           </style>
        </html>
`, L0 = () => {
  const { state: e } = H(), [o, r] = B(""), n = S(), s = Y(() => {
    r(B0(e)), n.set("EDITOR_HTML_PREVIEW", e);
  }, 250);
  return y(() => {
    s();
  }, [e, s]), /* @__PURE__ */ t(b, { children: /* @__PURE__ */ t(
    "iframe",
    {
      srcDoc: o,
      title: "output",
      frameBorder: "0",
      width: "100%",
      height: "100%",
      sandbox: "allow-forms allow-popups allow-scripts allow-same-origin allow-modals"
    }
  ) });
}, A0 = c.div`
  ${u("100%", "750px")};
  overflow-y: auto;
  scroll-behavior: smooth;
  margin-top: 10px;
  ${e0()};
`, D0 = c.div`
  ${u("100%", "360px")};
  display: flex;
  gap: 20px;
`, O0 = c.div`
  ${u("100%", "50vh")};
  iframe {
    background: ${g("grey")};
    border-radius: 6px;
    margin-top: 8px;
  }
`, I0 = () => {
  const e = z(), { isHtmlPreviewOpened: o } = e.state, r = L(() => {
    e.update({ isHtmlPreviewOpened: !1 });
  }, [e]);
  return /* @__PURE__ */ t(
    t0,
    {
      isOpen: o,
      onClose: r,
      height: 750,
      children: /* @__PURE__ */ t(k0, { children: /* @__PURE__ */ i(A0, { children: [
        /* @__PURE__ */ i(D0, { children: [
          /* @__PURE__ */ t(f, { lang: "html" }),
          /* @__PURE__ */ t(f, { lang: "css" }),
          /* @__PURE__ */ t(f, { lang: "javascript" })
        ] }),
        /* @__PURE__ */ t(O0, { children: /* @__PURE__ */ t(L0, {}) })
      ] }) })
    }
  );
}, _0 = c.div`
  ${u("100%", "70px")};
  ${o0("space-between", "flex-start")};
  margin-bottom: 25px;
`, J0 = c(_0)`
  height: 45px;
  width: 60%;
  margin: 0 auto;
  margin-bottom: 10px;
  gap: 30px;
`, K0 = c.div`
  margin-top: -5px;
  height: 100%;
  h4 {
    color: ${g("light")};
    font-size: ${({ theme: e }) => e.fz8};
  }
  p {
    color: ${g("secondaryGrey")};
    font-size: ${({ theme: e }) => e.fz5};
    margin-top: 10px;
  }
`, F0 = A(() => import("./settings-ff04a931.mjs")), R0 = c.div`
  ${u("100vw", "100vh")}
`, V0 = c.div`
  ${u("100%", "calc(100% - 45px)")};
  display: flex;
`, x = ({ SignIn: e }) => (h0(), /* @__PURE__ */ t(d0, { children: /* @__PURE__ */ t(r0, { children: /* @__PURE__ */ t(E0, { children: /* @__PURE__ */ t(s0, { SignIn: e, children: /* @__PURE__ */ t(n0, { children: /* @__PURE__ */ i(R0, { children: [
  /* @__PURE__ */ t(c0, {}),
  /* @__PURE__ */ i(V0, { children: [
    /* @__PURE__ */ t(P0, {}),
    /* @__PURE__ */ t(a0, {}),
    /* @__PURE__ */ t(i0, {}),
    /* @__PURE__ */ t(I0, {})
  ] }),
  /* @__PURE__ */ t(D, { fallback: null, children: /* @__PURE__ */ t(F0, {}) })
] }) }) }) }) }) })), Q0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Editor: x,
  default: x
}, Symbol.toStringTag, { value: "Module" }));
export {
  J0 as K,
  K0 as S,
  _0 as a,
  Q0 as e
};
