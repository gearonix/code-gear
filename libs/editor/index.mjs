import { jsxs as Ce, jsx as w, Fragment as la } from "react/jsx-runtime";
import ee, { useContext as ln, createElement as ma, useState as rn, useRef as _e, forwardRef as Xo, memo as An, useCallback as $r, useEffect as ge, createContext as pa } from "react";
import { unstable_batchedUpdates as ha } from "react-dom";
import { Select as n_, Tabs as Ta } from "antd";
function Ea(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var r_ = { exports: {} }, Y = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xt;
function fa() {
  if (xt)
    return Y;
  xt = 1;
  var e = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), t = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), _ = Symbol.for("react.context"), s = Symbol.for("react.server_context"), a = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), O = Symbol.for("react.offscreen"), l;
  l = Symbol.for("react.module.reference");
  function m(h) {
    if (typeof h == "object" && h !== null) {
      var N = h.$$typeof;
      switch (N) {
        case e:
          switch (h = h.type, h) {
            case r:
            case t:
            case o:
            case u:
            case c:
              return h;
            default:
              switch (h = h && h.$$typeof, h) {
                case s:
                case _:
                case a:
                case f:
                case d:
                case i:
                  return h;
                default:
                  return N;
              }
          }
        case n:
          return N;
      }
    }
  }
  return Y.ContextConsumer = _, Y.ContextProvider = i, Y.Element = e, Y.ForwardRef = a, Y.Fragment = r, Y.Lazy = f, Y.Memo = d, Y.Portal = n, Y.Profiler = t, Y.StrictMode = o, Y.Suspense = u, Y.SuspenseList = c, Y.isAsyncMode = function() {
    return !1;
  }, Y.isConcurrentMode = function() {
    return !1;
  }, Y.isContextConsumer = function(h) {
    return m(h) === _;
  }, Y.isContextProvider = function(h) {
    return m(h) === i;
  }, Y.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === e;
  }, Y.isForwardRef = function(h) {
    return m(h) === a;
  }, Y.isFragment = function(h) {
    return m(h) === r;
  }, Y.isLazy = function(h) {
    return m(h) === f;
  }, Y.isMemo = function(h) {
    return m(h) === d;
  }, Y.isPortal = function(h) {
    return m(h) === n;
  }, Y.isProfiler = function(h) {
    return m(h) === t;
  }, Y.isStrictMode = function(h) {
    return m(h) === o;
  }, Y.isSuspense = function(h) {
    return m(h) === u;
  }, Y.isSuspenseList = function(h) {
    return m(h) === c;
  }, Y.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === r || h === t || h === o || h === u || h === c || h === O || typeof h == "object" && h !== null && (h.$$typeof === f || h.$$typeof === d || h.$$typeof === i || h.$$typeof === _ || h.$$typeof === a || h.$$typeof === l || h.getModuleId !== void 0);
  }, Y.typeOf = m, Y;
}
r_.exports = fa();
var o_ = r_.exports;
function Oa(e) {
  function n(g, A, S, B, p) {
    for (var X = 0, I = 0, Z = 0, K = 0, J, L, se = 0, fe = 0, F, he = F = J = 0, W = 0, ae = 0, Mn = 0, ue = 0, Ar = S.length, kn = Ar - 1, Se, D = "", re = "", Go = "", So = "", $e; W < Ar; ) {
      if (L = S.charCodeAt(W), W === kn && I + K + Z + X !== 0 && (I !== 0 && (L = I === 47 ? 10 : 47), K = Z = X = 0, Ar++, kn++), I + K + Z + X === 0) {
        if (W === kn && (0 < ae && (D = D.replace(f, "")), 0 < D.trim().length)) {
          switch (L) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              D += S.charAt(W);
          }
          L = 59;
        }
        switch (L) {
          case 123:
            for (D = D.trim(), J = D.charCodeAt(0), F = 1, ue = ++W; W < Ar; ) {
              switch (L = S.charCodeAt(W)) {
                case 123:
                  F++;
                  break;
                case 125:
                  F--;
                  break;
                case 47:
                  switch (L = S.charCodeAt(W + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (he = W + 1; he < kn; ++he)
                          switch (S.charCodeAt(he)) {
                            case 47:
                              if (L === 42 && S.charCodeAt(he - 1) === 42 && W + 2 !== he) {
                                W = he + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (L === 47) {
                                W = he + 1;
                                break e;
                              }
                          }
                        W = he;
                      }
                  }
                  break;
                case 91:
                  L++;
                case 40:
                  L++;
                case 34:
                case 39:
                  for (; W++ < kn && S.charCodeAt(W) !== L; )
                    ;
              }
              if (F === 0)
                break;
              W++;
            }
            switch (F = S.substring(ue, W), J === 0 && (J = (D = D.replace(d, "").trim()).charCodeAt(0)), J) {
              case 64:
                switch (0 < ae && (D = D.replace(f, "")), L = D.charCodeAt(1), L) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    ae = A;
                    break;
                  default:
                    ae = Q;
                }
                if (F = n(A, ae, F, L, p + 1), ue = F.length, 0 < pe && (ae = r(Q, D, Mn), $e = s(3, F, ae, A, le, ie, ue, L, p, B), D = ae.join(""), $e !== void 0 && (ue = (F = $e.trim()).length) === 0 && (L = 0, F = "")), 0 < ue)
                  switch (L) {
                    case 115:
                      D = D.replace(H, _);
                    case 100:
                    case 109:
                    case 45:
                      F = D + "{" + F + "}";
                      break;
                    case 107:
                      D = D.replace(R, "$1 $2"), F = D + "{" + F + "}", F = x === 1 || x === 2 && i("@" + F, 3) ? "@-webkit-" + F + "@" + F : "@" + F;
                      break;
                    default:
                      F = D + F, B === 112 && (F = (re += F, ""));
                  }
                else
                  F = "";
                break;
              default:
                F = n(A, r(A, D, Mn), F, B, p + 1);
            }
            Go += F, F = Mn = ae = he = J = 0, D = "", L = S.charCodeAt(++W);
            break;
          case 125:
          case 59:
            if (D = (0 < ae ? D.replace(f, "") : D).trim(), 1 < (ue = D.length))
              switch (he === 0 && (J = D.charCodeAt(0), J === 45 || 96 < J && 123 > J) && (ue = (D = D.replace(" ", ":")).length), 0 < pe && ($e = s(1, D, A, g, le, ie, re.length, B, p, B)) !== void 0 && (ue = (D = $e.trim()).length) === 0 && (D = "\0\0"), J = D.charCodeAt(0), L = D.charCodeAt(1), J) {
                case 0:
                  break;
                case 64:
                  if (L === 105 || L === 99) {
                    So += D + S.charAt(W);
                    break;
                  }
                default:
                  D.charCodeAt(ue - 1) !== 58 && (re += t(D, J, L, D.charCodeAt(2)));
              }
            Mn = ae = he = J = 0, D = "", L = S.charCodeAt(++W);
        }
      }
      switch (L) {
        case 13:
        case 10:
          I === 47 ? I = 0 : 1 + J === 0 && B !== 107 && 0 < D.length && (ae = 1, D += "\0"), 0 < pe * Ye && s(0, D, A, g, le, ie, re.length, B, p, B), ie = 1, le++;
          break;
        case 59:
        case 125:
          if (I + K + Z + X === 0) {
            ie++;
            break;
          }
        default:
          switch (ie++, Se = S.charAt(W), L) {
            case 9:
            case 32:
              if (K + X + I === 0)
                switch (se) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    Se = "";
                    break;
                  default:
                    L !== 32 && (Se = " ");
                }
              break;
            case 0:
              Se = "\\0";
              break;
            case 12:
              Se = "\\f";
              break;
            case 11:
              Se = "\\v";
              break;
            case 38:
              K + I + X === 0 && (ae = Mn = 1, Se = "\f" + Se);
              break;
            case 108:
              if (K + I + X + me === 0 && 0 < he)
                switch (W - he) {
                  case 2:
                    se === 112 && S.charCodeAt(W - 3) === 58 && (me = se);
                  case 8:
                    fe === 111 && (me = fe);
                }
              break;
            case 58:
              K + I + X === 0 && (he = W);
              break;
            case 44:
              I + Z + K + X === 0 && (ae = 1, Se += "\r");
              break;
            case 34:
            case 39:
              I === 0 && (K = K === L ? 0 : K === 0 ? L : K);
              break;
            case 91:
              K + I + Z === 0 && X++;
              break;
            case 93:
              K + I + Z === 0 && X--;
              break;
            case 41:
              K + I + X === 0 && Z--;
              break;
            case 40:
              if (K + I + X === 0) {
                if (J === 0)
                  switch (2 * se + 3 * fe) {
                    case 533:
                      break;
                    default:
                      J = 1;
                  }
                Z++;
              }
              break;
            case 64:
              I + Z + K + X + he + F === 0 && (F = 1);
              break;
            case 42:
            case 47:
              if (!(0 < K + X + Z))
                switch (I) {
                  case 0:
                    switch (2 * L + 3 * S.charCodeAt(W + 1)) {
                      case 235:
                        I = 47;
                        break;
                      case 220:
                        ue = W, I = 42;
                    }
                    break;
                  case 42:
                    L === 47 && se === 42 && ue + 2 !== W && (S.charCodeAt(ue + 2) === 33 && (re += S.substring(ue, W + 1)), Se = "", I = 0);
                }
          }
          I === 0 && (D += Se);
      }
      fe = se, se = L, W++;
    }
    if (ue = re.length, 0 < ue) {
      if (ae = A, 0 < pe && ($e = s(2, re, ae, g, le, ie, ue, B, p, B), $e !== void 0 && (re = $e).length === 0))
        return So + re + Go;
      if (re = ae.join(",") + "{" + re + "}", x * me !== 0) {
        switch (x !== 2 || i(re, 2) || (me = 0), me) {
          case 111:
            re = re.replace(C, ":-moz-$1") + re;
            break;
          case 112:
            re = re.replace(G, "::-webkit-input-$1") + re.replace(G, "::-moz-$1") + re.replace(G, ":-ms-input-$1") + re;
        }
        me = 0;
      }
    }
    return So + re + Go;
  }
  function r(g, A, S) {
    var B = A.trim().split(h);
    A = B;
    var p = B.length, X = g.length;
    switch (X) {
      case 0:
      case 1:
        var I = 0;
        for (g = X === 0 ? "" : g[0] + " "; I < p; ++I)
          A[I] = o(g, A[I], S).trim();
        break;
      default:
        var Z = I = 0;
        for (A = []; I < p; ++I)
          for (var K = 0; K < X; ++K)
            A[Z++] = o(g[K] + " ", B[I], S).trim();
    }
    return A;
  }
  function o(g, A, S) {
    var B = A.charCodeAt(0);
    switch (33 > B && (B = (A = A.trim()).charCodeAt(0)), B) {
      case 38:
        return A.replace(N, "$1" + g.trim());
      case 58:
        return g.trim() + A.replace(N, "$1" + g.trim());
      default:
        if (0 < 1 * S && 0 < A.indexOf("\f"))
          return A.replace(N, (g.charCodeAt(0) === 58 ? "" : "$1") + g.trim());
    }
    return g + A;
  }
  function t(g, A, S, B) {
    var p = g + ";", X = 2 * A + 3 * S + 4 * B;
    if (X === 944) {
      g = p.indexOf(":", 9) + 1;
      var I = p.substring(g, p.length - 1).trim();
      return I = p.substring(0, g).trim() + I + ";", x === 1 || x === 2 && i(I, 1) ? "-webkit-" + I + I : I;
    }
    if (x === 0 || x === 2 && !i(p, 1))
      return p;
    switch (X) {
      case 1015:
        return p.charCodeAt(10) === 97 ? "-webkit-" + p + p : p;
      case 951:
        return p.charCodeAt(3) === 116 ? "-webkit-" + p + p : p;
      case 963:
        return p.charCodeAt(5) === 110 ? "-webkit-" + p + p : p;
      case 1009:
        if (p.charCodeAt(4) !== 100)
          break;
      case 969:
      case 942:
        return "-webkit-" + p + p;
      case 978:
        return "-webkit-" + p + "-moz-" + p + p;
      case 1019:
      case 983:
        return "-webkit-" + p + "-moz-" + p + "-ms-" + p + p;
      case 883:
        if (p.charCodeAt(8) === 45)
          return "-webkit-" + p + p;
        if (0 < p.indexOf("image-set(", 11))
          return p.replace(be, "$1-webkit-$2") + p;
        break;
      case 932:
        if (p.charCodeAt(4) === 45)
          switch (p.charCodeAt(5)) {
            case 103:
              return "-webkit-box-" + p.replace("-grow", "") + "-webkit-" + p + "-ms-" + p.replace("grow", "positive") + p;
            case 115:
              return "-webkit-" + p + "-ms-" + p.replace("shrink", "negative") + p;
            case 98:
              return "-webkit-" + p + "-ms-" + p.replace("basis", "preferred-size") + p;
          }
        return "-webkit-" + p + "-ms-" + p + p;
      case 964:
        return "-webkit-" + p + "-ms-flex-" + p + p;
      case 1023:
        if (p.charCodeAt(8) !== 99)
          break;
        return I = p.substring(p.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + I + "-webkit-" + p + "-ms-flex-pack" + I + p;
      case 1005:
        return l.test(p) ? p.replace(O, ":-webkit-") + p.replace(O, ":-moz-") + p : p;
      case 1e3:
        switch (I = p.substring(13).trim(), A = I.indexOf("-") + 1, I.charCodeAt(0) + I.charCodeAt(A)) {
          case 226:
            I = p.replace(T, "tb");
            break;
          case 232:
            I = p.replace(T, "tb-rl");
            break;
          case 220:
            I = p.replace(T, "lr");
            break;
          default:
            return p;
        }
        return "-webkit-" + p + "-ms-" + I + p;
      case 1017:
        if (p.indexOf("sticky", 9) === -1)
          break;
      case 975:
        switch (A = (p = g).length - 10, I = (p.charCodeAt(A) === 33 ? p.substring(0, A) : p).substring(g.indexOf(":", 7) + 1).trim(), X = I.charCodeAt(0) + (I.charCodeAt(7) | 0)) {
          case 203:
            if (111 > I.charCodeAt(8))
              break;
          case 115:
            p = p.replace(I, "-webkit-" + I) + ";" + p;
            break;
          case 207:
          case 102:
            p = p.replace(I, "-webkit-" + (102 < X ? "inline-" : "") + "box") + ";" + p.replace(I, "-webkit-" + I) + ";" + p.replace(I, "-ms-" + I + "box") + ";" + p;
        }
        return p + ";";
      case 938:
        if (p.charCodeAt(5) === 45)
          switch (p.charCodeAt(6)) {
            case 105:
              return I = p.replace("-items", ""), "-webkit-" + p + "-webkit-box-" + I + "-ms-flex-" + I + p;
            case 115:
              return "-webkit-" + p + "-ms-flex-item-" + p.replace(z, "") + p;
            default:
              return "-webkit-" + p + "-ms-flex-line-pack" + p.replace("align-content", "").replace(z, "") + p;
          }
        break;
      case 973:
      case 989:
        if (p.charCodeAt(3) !== 45 || p.charCodeAt(4) === 122)
          break;
      case 931:
      case 953:
        if (y.test(g) === !0)
          return (I = g.substring(g.indexOf(":") + 1)).charCodeAt(0) === 115 ? t(g.replace("stretch", "fill-available"), A, S, B).replace(":fill-available", ":stretch") : p.replace(I, "-webkit-" + I) + p.replace(I, "-moz-" + I.replace("fill-", "")) + p;
        break;
      case 962:
        if (p = "-webkit-" + p + (p.charCodeAt(5) === 102 ? "-ms-" + p : "") + p, S + B === 211 && p.charCodeAt(13) === 105 && 0 < p.indexOf("transform", 10))
          return p.substring(0, p.indexOf(";", 27) + 1).replace(m, "$1-webkit-$2") + p;
    }
    return p;
  }
  function i(g, A) {
    var S = g.indexOf(A === 1 ? ":" : "{"), B = g.substring(0, A !== 3 ? S : 10);
    return S = g.substring(S + 1, g.length - 1), We(A !== 2 ? B : B.replace(P, "$1"), S, A);
  }
  function _(g, A) {
    var S = t(A, A.charCodeAt(0), A.charCodeAt(1), A.charCodeAt(2));
    return S !== A + ";" ? S.replace(M, " or ($1)").substring(4) : "(" + A + ")";
  }
  function s(g, A, S, B, p, X, I, Z, K, J) {
    for (var L = 0, se = A, fe; L < pe; ++L)
      switch (fe = Ee[L].call(c, g, se, S, B, p, X, I, Z, K, J)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          se = fe;
      }
    if (se !== A)
      return se;
  }
  function a(g) {
    switch (g) {
      case void 0:
      case null:
        pe = Ee.length = 0;
        break;
      default:
        if (typeof g == "function")
          Ee[pe++] = g;
        else if (typeof g == "object")
          for (var A = 0, S = g.length; A < S; ++A)
            a(g[A]);
        else
          Ye = !!g | 0;
    }
    return a;
  }
  function u(g) {
    return g = g.prefix, g !== void 0 && (We = null, g ? typeof g != "function" ? x = 1 : (x = 2, We = g) : x = 0), u;
  }
  function c(g, A) {
    var S = g;
    if (33 > S.charCodeAt(0) && (S = S.trim()), ne = S, S = [ne], 0 < pe) {
      var B = s(-1, A, S, S, le, ie, 0, 0, 0, 0);
      B !== void 0 && typeof B == "string" && (A = B);
    }
    var p = n(Q, S, A, 0, 0);
    return 0 < pe && (B = s(-2, p, S, S, le, ie, p.length, 0, 0, 0), B !== void 0 && (p = B)), ne = "", me = 0, ie = le = 1, p;
  }
  var d = /^\0+/g, f = /[\0\r\f]/g, O = /: */g, l = /zoo|gra/, m = /([,: ])(transform)/g, h = /,\r+?/g, N = /([\t\r\n ])*\f?&/g, R = /@(k\w+)\s*(\S*)\s*/, G = /::(place)/g, C = /:(read-only)/g, T = /[svh]\w+-[tblr]{2}/, H = /\(\s*(.*)\s*\)/g, M = /([\s\S]*?);/g, z = /-self|flex-/g, P = /[^]*?(:[rp][el]a[\w-]+)[^]*/, y = /stretch|:\s*\w+\-(?:conte|avail)/, be = /([^-])(image-set\()/, ie = 1, le = 1, me = 0, x = 1, Q = [], Ee = [], pe = 0, We = null, Ye = 0, ne = "";
  return c.use = a, c.set = u, e !== void 0 && u(e), c;
}
var Ra = {
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
function ba(e) {
  var n = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return n[r] === void 0 && (n[r] = e(r)), n[r];
  };
}
var Na = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Mt = /* @__PURE__ */ ba(
  function(e) {
    return Na.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), t_ = { exports: {} }, $ = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kt;
function Ia() {
  if (kt)
    return $;
  kt = 1;
  var e = typeof Symbol == "function" && Symbol.for, n = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, t = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, _ = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, a = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, c = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, O = e ? Symbol.for("react.memo") : 60115, l = e ? Symbol.for("react.lazy") : 60116, m = e ? Symbol.for("react.block") : 60121, h = e ? Symbol.for("react.fundamental") : 60117, N = e ? Symbol.for("react.responder") : 60118, R = e ? Symbol.for("react.scope") : 60119;
  function G(T) {
    if (typeof T == "object" && T !== null) {
      var H = T.$$typeof;
      switch (H) {
        case n:
          switch (T = T.type, T) {
            case a:
            case u:
            case o:
            case i:
            case t:
            case d:
              return T;
            default:
              switch (T = T && T.$$typeof, T) {
                case s:
                case c:
                case l:
                case O:
                case _:
                  return T;
                default:
                  return H;
              }
          }
        case r:
          return H;
      }
    }
  }
  function C(T) {
    return G(T) === u;
  }
  return $.AsyncMode = a, $.ConcurrentMode = u, $.ContextConsumer = s, $.ContextProvider = _, $.Element = n, $.ForwardRef = c, $.Fragment = o, $.Lazy = l, $.Memo = O, $.Portal = r, $.Profiler = i, $.StrictMode = t, $.Suspense = d, $.isAsyncMode = function(T) {
    return C(T) || G(T) === a;
  }, $.isConcurrentMode = C, $.isContextConsumer = function(T) {
    return G(T) === s;
  }, $.isContextProvider = function(T) {
    return G(T) === _;
  }, $.isElement = function(T) {
    return typeof T == "object" && T !== null && T.$$typeof === n;
  }, $.isForwardRef = function(T) {
    return G(T) === c;
  }, $.isFragment = function(T) {
    return G(T) === o;
  }, $.isLazy = function(T) {
    return G(T) === l;
  }, $.isMemo = function(T) {
    return G(T) === O;
  }, $.isPortal = function(T) {
    return G(T) === r;
  }, $.isProfiler = function(T) {
    return G(T) === i;
  }, $.isStrictMode = function(T) {
    return G(T) === t;
  }, $.isSuspense = function(T) {
    return G(T) === d;
  }, $.isValidElementType = function(T) {
    return typeof T == "string" || typeof T == "function" || T === o || T === u || T === i || T === t || T === d || T === f || typeof T == "object" && T !== null && (T.$$typeof === l || T.$$typeof === O || T.$$typeof === _ || T.$$typeof === s || T.$$typeof === c || T.$$typeof === h || T.$$typeof === N || T.$$typeof === R || T.$$typeof === m);
  }, $.typeOf = G, $;
}
t_.exports = Ia();
var Aa = t_.exports, mt = Aa, ga = {
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
}, Ga = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, Sa = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, i_ = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, pt = {};
pt[mt.ForwardRef] = Sa;
pt[mt.Memo] = i_;
function jt(e) {
  return mt.isMemo(e) ? i_ : pt[e.$$typeof] || ga;
}
var Ca = Object.defineProperty, Ua = Object.getOwnPropertyNames, Ft = Object.getOwnPropertySymbols, Ha = Object.getOwnPropertyDescriptor, va = Object.getPrototypeOf, Vt = Object.prototype;
function __(e, n, r) {
  if (typeof n != "string") {
    if (Vt) {
      var o = va(n);
      o && o !== Vt && __(e, o, r);
    }
    var t = Ua(n);
    Ft && (t = t.concat(Ft(n)));
    for (var i = jt(e), _ = jt(n), s = 0; s < t.length; ++s) {
      var a = t[s];
      if (!Ga[a] && !(r && r[a]) && !(_ && _[a]) && !(i && i[a])) {
        var u = Ha(n, a);
        try {
          Ca(e, a, u);
        } catch {
        }
      }
    }
  }
  return e;
}
var Da = __;
const Pa = /* @__PURE__ */ Ea(Da);
function Me() {
  return (Me = Object.assign || function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var o in r)
        Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
    }
    return e;
  }).apply(this, arguments);
}
var Xt = function(e, n) {
  for (var r = [e[0]], o = 0, t = n.length; o < t; o += 1)
    r.push(n[o], e[o + 1]);
  return r;
}, Ko = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !o_.typeOf(e);
}, Jr = Object.freeze([]), Qe = Object.freeze({});
function Yn(e) {
  return typeof e == "function";
}
function Kt(e) {
  return e.displayName || e.name || "Component";
}
function ht(e) {
  return e && typeof e.styledComponentId == "string";
}
var gn = typeof process < "u" && ({ GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_9857b1f4-7ac0-4e69-8857-7d707f49d3d4", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "npm/8.19.4 node/v16.20.1 linux x64 workspaces/false ci/github-actions", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_9857b1f4-7ac0-4e69-8857-7d707f49d3d4", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", npm_config_noproxy: "", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-8.2", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "", npm_config_userconfig: "/home/runner/.npmrc", npm_config_local_prefix: "/home/runner/work/CodeGear/CodeGear", SYSTEMD_EXEC_PID: "674", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", COLOR: "0", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.5/x64", NVM_DIR: "/home/runner/.nvm", npm_config_metrics_registry: "https://registry.npmjs.org/", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230702.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chrome_driver", JOURNAL_STREAM: "8:17182", GITHUB_WORKFLOW: "Project CI", _: "/opt/hostedtoolcache/node/16.20.1/x64/bin/npm", npm_config_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", GITHUB_RUN_ID: "5500591965", npm_config_cache: "/home/runner/.npm", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "fbda533831c6fe36ed508dfecb6805ee9b76d62c", GITHUB_BASE_REF: "", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/heads/master", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", npm_config_node_gyp: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.bin:/home/runner/work/CodeGear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_cb3fab39-97b5-4a20-beba-50925f48ab2a", INVOCATION_ID: "d82dafb2589b40ffbcd117b00d5b0728", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.10/x64", NODE: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "9", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 3", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "master", GITHUB_REPOSITORY: "Gearonix/CodeGear", npm_lifecycle_script: " nx run-many --targets=build --all", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", npm_package_version: "0.0.0", npm_lifecycle_event: "build", NODE_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/bin/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/node_modules", GITHUB_REF_PROTECTED: "false", npm_config_strict_peer_dependencies: "", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "fbda533831c6fe36ed508dfecb6805ee9b76d62c", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/heads/master", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", npm_config_globalconfig: "/opt/hostedtoolcache/node/16.20.1/x64/etc/npmrc", npm_config_init_module: "/home/runner/.npm-init.js", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_9857b1f4-7ac0-4e69-8857-7d707f49d3d4", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", npm_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/bin/npm-cli.js", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "push", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_9857b1f4-7ac0-4e69-8857-7d707f49d3d4", npm_config_global_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", npm_command: "run-script", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.146+9/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_9857b1f4-7ac0-4e69-8857-7d707f49d3d4", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", EDITOR: "vi", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/14072245657591517729", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "14072245657591517729", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.REACT_APP_SC_ATTR || { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_9857b1f4-7ac0-4e69-8857-7d707f49d3d4", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "npm/8.19.4 node/v16.20.1 linux x64 workspaces/false ci/github-actions", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_9857b1f4-7ac0-4e69-8857-7d707f49d3d4", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", npm_config_noproxy: "", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-8.2", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "", npm_config_userconfig: "/home/runner/.npmrc", npm_config_local_prefix: "/home/runner/work/CodeGear/CodeGear", SYSTEMD_EXEC_PID: "674", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", COLOR: "0", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.5/x64", NVM_DIR: "/home/runner/.nvm", npm_config_metrics_registry: "https://registry.npmjs.org/", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230702.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chrome_driver", JOURNAL_STREAM: "8:17182", GITHUB_WORKFLOW: "Project CI", _: "/opt/hostedtoolcache/node/16.20.1/x64/bin/npm", npm_config_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", GITHUB_RUN_ID: "5500591965", npm_config_cache: "/home/runner/.npm", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "fbda533831c6fe36ed508dfecb6805ee9b76d62c", GITHUB_BASE_REF: "", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/heads/master", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", npm_config_node_gyp: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.bin:/home/runner/work/CodeGear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_cb3fab39-97b5-4a20-beba-50925f48ab2a", INVOCATION_ID: "d82dafb2589b40ffbcd117b00d5b0728", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.10/x64", NODE: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "9", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 3", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "master", GITHUB_REPOSITORY: "Gearonix/CodeGear", npm_lifecycle_script: " nx run-many --targets=build --all", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", npm_package_version: "0.0.0", npm_lifecycle_event: "build", NODE_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/bin/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/node_modules", GITHUB_REF_PROTECTED: "false", npm_config_strict_peer_dependencies: "", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "fbda533831c6fe36ed508dfecb6805ee9b76d62c", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/heads/master", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", npm_config_globalconfig: "/opt/hostedtoolcache/node/16.20.1/x64/etc/npmrc", npm_config_init_module: "/home/runner/.npm-init.js", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_9857b1f4-7ac0-4e69-8857-7d707f49d3d4", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", npm_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/bin/npm-cli.js", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "push", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_9857b1f4-7ac0-4e69-8857-7d707f49d3d4", npm_config_global_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", npm_command: "run-script", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.146+9/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_9857b1f4-7ac0-4e69-8857-7d707f49d3d4", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", EDITOR: "vi", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/14072245657591517729", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "14072245657591517729", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.SC_ATTR) || "data-styled", Tt = typeof window < "u" && "HTMLElement" in window, Ba = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_9857b1f4-7ac0-4e69-8857-7d707f49d3d4", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "npm/8.19.4 node/v16.20.1 linux x64 workspaces/false ci/github-actions", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_9857b1f4-7ac0-4e69-8857-7d707f49d3d4", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", npm_config_noproxy: "", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-8.2", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "", npm_config_userconfig: "/home/runner/.npmrc", npm_config_local_prefix: "/home/runner/work/CodeGear/CodeGear", SYSTEMD_EXEC_PID: "674", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", COLOR: "0", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.5/x64", NVM_DIR: "/home/runner/.nvm", npm_config_metrics_registry: "https://registry.npmjs.org/", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230702.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chrome_driver", JOURNAL_STREAM: "8:17182", GITHUB_WORKFLOW: "Project CI", _: "/opt/hostedtoolcache/node/16.20.1/x64/bin/npm", npm_config_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", GITHUB_RUN_ID: "5500591965", npm_config_cache: "/home/runner/.npm", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "fbda533831c6fe36ed508dfecb6805ee9b76d62c", GITHUB_BASE_REF: "", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/heads/master", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", npm_config_node_gyp: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.bin:/home/runner/work/CodeGear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_cb3fab39-97b5-4a20-beba-50925f48ab2a", INVOCATION_ID: "d82dafb2589b40ffbcd117b00d5b0728", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.10/x64", NODE: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "9", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 3", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "master", GITHUB_REPOSITORY: "Gearonix/CodeGear", npm_lifecycle_script: " nx run-many --targets=build --all", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", npm_package_version: "0.0.0", npm_lifecycle_event: "build", NODE_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/bin/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/node_modules", GITHUB_REF_PROTECTED: "false", npm_config_strict_peer_dependencies: "", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "fbda533831c6fe36ed508dfecb6805ee9b76d62c", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/heads/master", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", npm_config_globalconfig: "/opt/hostedtoolcache/node/16.20.1/x64/etc/npmrc", npm_config_init_module: "/home/runner/.npm-init.js", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_9857b1f4-7ac0-4e69-8857-7d707f49d3d4", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", npm_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/bin/npm-cli.js", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "push", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_9857b1f4-7ac0-4e69-8857-7d707f49d3d4", npm_config_global_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", npm_command: "run-script", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.146+9/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_9857b1f4-7ac0-4e69-8857-7d707f49d3d4", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", EDITOR: "vi", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/14072245657591517729", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "14072245657591517729", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_9857b1f4-7ac0-4e69-8857-7d707f49d3d4", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "npm/8.19.4 node/v16.20.1 linux x64 workspaces/false ci/github-actions", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_9857b1f4-7ac0-4e69-8857-7d707f49d3d4", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", npm_config_noproxy: "", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-8.2", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "", npm_config_userconfig: "/home/runner/.npmrc", npm_config_local_prefix: "/home/runner/work/CodeGear/CodeGear", SYSTEMD_EXEC_PID: "674", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", COLOR: "0", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.5/x64", NVM_DIR: "/home/runner/.nvm", npm_config_metrics_registry: "https://registry.npmjs.org/", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230702.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chrome_driver", JOURNAL_STREAM: "8:17182", GITHUB_WORKFLOW: "Project CI", _: "/opt/hostedtoolcache/node/16.20.1/x64/bin/npm", npm_config_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", GITHUB_RUN_ID: "5500591965", npm_config_cache: "/home/runner/.npm", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "fbda533831c6fe36ed508dfecb6805ee9b76d62c", GITHUB_BASE_REF: "", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/heads/master", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", npm_config_node_gyp: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.bin:/home/runner/work/CodeGear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_cb3fab39-97b5-4a20-beba-50925f48ab2a", INVOCATION_ID: "d82dafb2589b40ffbcd117b00d5b0728", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.10/x64", NODE: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "9", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 3", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "master", GITHUB_REPOSITORY: "Gearonix/CodeGear", npm_lifecycle_script: " nx run-many --targets=build --all", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", npm_package_version: "0.0.0", npm_lifecycle_event: "build", NODE_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/bin/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/node_modules", GITHUB_REF_PROTECTED: "false", npm_config_strict_peer_dependencies: "", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "fbda533831c6fe36ed508dfecb6805ee9b76d62c", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/heads/master", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", npm_config_globalconfig: "/opt/hostedtoolcache/node/16.20.1/x64/etc/npmrc", npm_config_init_module: "/home/runner/.npm-init.js", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_9857b1f4-7ac0-4e69-8857-7d707f49d3d4", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", npm_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/bin/npm-cli.js", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "push", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_9857b1f4-7ac0-4e69-8857-7d707f49d3d4", npm_config_global_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", npm_command: "run-script", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.146+9/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_9857b1f4-7ac0-4e69-8857-7d707f49d3d4", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", EDITOR: "vi", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/14072245657591517729", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "14072245657591517729", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.REACT_APP_SC_DISABLE_SPEEDY !== "" ? { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_9857b1f4-7ac0-4e69-8857-7d707f49d3d4", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "npm/8.19.4 node/v16.20.1 linux x64 workspaces/false ci/github-actions", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_9857b1f4-7ac0-4e69-8857-7d707f49d3d4", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", npm_config_noproxy: "", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-8.2", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "", npm_config_userconfig: "/home/runner/.npmrc", npm_config_local_prefix: "/home/runner/work/CodeGear/CodeGear", SYSTEMD_EXEC_PID: "674", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", COLOR: "0", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.5/x64", NVM_DIR: "/home/runner/.nvm", npm_config_metrics_registry: "https://registry.npmjs.org/", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230702.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chrome_driver", JOURNAL_STREAM: "8:17182", GITHUB_WORKFLOW: "Project CI", _: "/opt/hostedtoolcache/node/16.20.1/x64/bin/npm", npm_config_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", GITHUB_RUN_ID: "5500591965", npm_config_cache: "/home/runner/.npm", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "fbda533831c6fe36ed508dfecb6805ee9b76d62c", GITHUB_BASE_REF: "", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/heads/master", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", npm_config_node_gyp: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.bin:/home/runner/work/CodeGear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_cb3fab39-97b5-4a20-beba-50925f48ab2a", INVOCATION_ID: "d82dafb2589b40ffbcd117b00d5b0728", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.10/x64", NODE: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "9", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 3", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "master", GITHUB_REPOSITORY: "Gearonix/CodeGear", npm_lifecycle_script: " nx run-many --targets=build --all", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", npm_package_version: "0.0.0", npm_lifecycle_event: "build", NODE_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/bin/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/node_modules", GITHUB_REF_PROTECTED: "false", npm_config_strict_peer_dependencies: "", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "fbda533831c6fe36ed508dfecb6805ee9b76d62c", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/heads/master", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", npm_config_globalconfig: "/opt/hostedtoolcache/node/16.20.1/x64/etc/npmrc", npm_config_init_module: "/home/runner/.npm-init.js", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_9857b1f4-7ac0-4e69-8857-7d707f49d3d4", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", npm_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/bin/npm-cli.js", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "push", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_9857b1f4-7ac0-4e69-8857-7d707f49d3d4", npm_config_global_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", npm_command: "run-script", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.146+9/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_9857b1f4-7ac0-4e69-8857-7d707f49d3d4", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", EDITOR: "vi", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/14072245657591517729", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "14072245657591517729", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.REACT_APP_SC_DISABLE_SPEEDY !== "false" && { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_9857b1f4-7ac0-4e69-8857-7d707f49d3d4", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "npm/8.19.4 node/v16.20.1 linux x64 workspaces/false ci/github-actions", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_9857b1f4-7ac0-4e69-8857-7d707f49d3d4", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", npm_config_noproxy: "", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-8.2", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "", npm_config_userconfig: "/home/runner/.npmrc", npm_config_local_prefix: "/home/runner/work/CodeGear/CodeGear", SYSTEMD_EXEC_PID: "674", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", COLOR: "0", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.5/x64", NVM_DIR: "/home/runner/.nvm", npm_config_metrics_registry: "https://registry.npmjs.org/", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230702.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chrome_driver", JOURNAL_STREAM: "8:17182", GITHUB_WORKFLOW: "Project CI", _: "/opt/hostedtoolcache/node/16.20.1/x64/bin/npm", npm_config_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", GITHUB_RUN_ID: "5500591965", npm_config_cache: "/home/runner/.npm", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "fbda533831c6fe36ed508dfecb6805ee9b76d62c", GITHUB_BASE_REF: "", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/heads/master", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", npm_config_node_gyp: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.bin:/home/runner/work/CodeGear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_cb3fab39-97b5-4a20-beba-50925f48ab2a", INVOCATION_ID: "d82dafb2589b40ffbcd117b00d5b0728", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.10/x64", NODE: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "9", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 3", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "master", GITHUB_REPOSITORY: "Gearonix/CodeGear", npm_lifecycle_script: " nx run-many --targets=build --all", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", npm_package_version: "0.0.0", npm_lifecycle_event: "build", NODE_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/bin/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/node_modules", GITHUB_REF_PROTECTED: "false", npm_config_strict_peer_dependencies: "", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "fbda533831c6fe36ed508dfecb6805ee9b76d62c", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/heads/master", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", npm_config_globalconfig: "/opt/hostedtoolcache/node/16.20.1/x64/etc/npmrc", npm_config_init_module: "/home/runner/.npm-init.js", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_9857b1f4-7ac0-4e69-8857-7d707f49d3d4", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", npm_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/bin/npm-cli.js", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "push", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_9857b1f4-7ac0-4e69-8857-7d707f49d3d4", npm_config_global_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", npm_command: "run-script", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.146+9/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_9857b1f4-7ac0-4e69-8857-7d707f49d3d4", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", EDITOR: "vi", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/14072245657591517729", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "14072245657591517729", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_9857b1f4-7ac0-4e69-8857-7d707f49d3d4", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "npm/8.19.4 node/v16.20.1 linux x64 workspaces/false ci/github-actions", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_9857b1f4-7ac0-4e69-8857-7d707f49d3d4", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", npm_config_noproxy: "", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-8.2", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "", npm_config_userconfig: "/home/runner/.npmrc", npm_config_local_prefix: "/home/runner/work/CodeGear/CodeGear", SYSTEMD_EXEC_PID: "674", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", COLOR: "0", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.5/x64", NVM_DIR: "/home/runner/.nvm", npm_config_metrics_registry: "https://registry.npmjs.org/", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230702.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chrome_driver", JOURNAL_STREAM: "8:17182", GITHUB_WORKFLOW: "Project CI", _: "/opt/hostedtoolcache/node/16.20.1/x64/bin/npm", npm_config_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", GITHUB_RUN_ID: "5500591965", npm_config_cache: "/home/runner/.npm", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "fbda533831c6fe36ed508dfecb6805ee9b76d62c", GITHUB_BASE_REF: "", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/heads/master", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", npm_config_node_gyp: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.bin:/home/runner/work/CodeGear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_cb3fab39-97b5-4a20-beba-50925f48ab2a", INVOCATION_ID: "d82dafb2589b40ffbcd117b00d5b0728", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.10/x64", NODE: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "9", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 3", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "master", GITHUB_REPOSITORY: "Gearonix/CodeGear", npm_lifecycle_script: " nx run-many --targets=build --all", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", npm_package_version: "0.0.0", npm_lifecycle_event: "build", NODE_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/bin/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/node_modules", GITHUB_REF_PROTECTED: "false", npm_config_strict_peer_dependencies: "", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "fbda533831c6fe36ed508dfecb6805ee9b76d62c", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/heads/master", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", npm_config_globalconfig: "/opt/hostedtoolcache/node/16.20.1/x64/etc/npmrc", npm_config_init_module: "/home/runner/.npm-init.js", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_9857b1f4-7ac0-4e69-8857-7d707f49d3d4", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", npm_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/bin/npm-cli.js", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "push", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_9857b1f4-7ac0-4e69-8857-7d707f49d3d4", npm_config_global_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", npm_command: "run-script", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.146+9/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_9857b1f4-7ac0-4e69-8857-7d707f49d3d4", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", EDITOR: "vi", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/14072245657591517729", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "14072245657591517729", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.SC_DISABLE_SPEEDY !== void 0 && { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_9857b1f4-7ac0-4e69-8857-7d707f49d3d4", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "npm/8.19.4 node/v16.20.1 linux x64 workspaces/false ci/github-actions", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_9857b1f4-7ac0-4e69-8857-7d707f49d3d4", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", npm_config_noproxy: "", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-8.2", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "", npm_config_userconfig: "/home/runner/.npmrc", npm_config_local_prefix: "/home/runner/work/CodeGear/CodeGear", SYSTEMD_EXEC_PID: "674", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", COLOR: "0", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.5/x64", NVM_DIR: "/home/runner/.nvm", npm_config_metrics_registry: "https://registry.npmjs.org/", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230702.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chrome_driver", JOURNAL_STREAM: "8:17182", GITHUB_WORKFLOW: "Project CI", _: "/opt/hostedtoolcache/node/16.20.1/x64/bin/npm", npm_config_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", GITHUB_RUN_ID: "5500591965", npm_config_cache: "/home/runner/.npm", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "fbda533831c6fe36ed508dfecb6805ee9b76d62c", GITHUB_BASE_REF: "", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/heads/master", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", npm_config_node_gyp: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.bin:/home/runner/work/CodeGear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_cb3fab39-97b5-4a20-beba-50925f48ab2a", INVOCATION_ID: "d82dafb2589b40ffbcd117b00d5b0728", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.10/x64", NODE: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "9", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 3", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "master", GITHUB_REPOSITORY: "Gearonix/CodeGear", npm_lifecycle_script: " nx run-many --targets=build --all", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", npm_package_version: "0.0.0", npm_lifecycle_event: "build", NODE_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/bin/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/node_modules", GITHUB_REF_PROTECTED: "false", npm_config_strict_peer_dependencies: "", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "fbda533831c6fe36ed508dfecb6805ee9b76d62c", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/heads/master", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", npm_config_globalconfig: "/opt/hostedtoolcache/node/16.20.1/x64/etc/npmrc", npm_config_init_module: "/home/runner/.npm-init.js", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_9857b1f4-7ac0-4e69-8857-7d707f49d3d4", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", npm_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/bin/npm-cli.js", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "push", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_9857b1f4-7ac0-4e69-8857-7d707f49d3d4", npm_config_global_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", npm_command: "run-script", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.146+9/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_9857b1f4-7ac0-4e69-8857-7d707f49d3d4", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", EDITOR: "vi", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/14072245657591517729", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "14072245657591517729", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.SC_DISABLE_SPEEDY !== "" && { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_9857b1f4-7ac0-4e69-8857-7d707f49d3d4", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "npm/8.19.4 node/v16.20.1 linux x64 workspaces/false ci/github-actions", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_9857b1f4-7ac0-4e69-8857-7d707f49d3d4", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", npm_config_noproxy: "", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-8.2", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "", npm_config_userconfig: "/home/runner/.npmrc", npm_config_local_prefix: "/home/runner/work/CodeGear/CodeGear", SYSTEMD_EXEC_PID: "674", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", COLOR: "0", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.5/x64", NVM_DIR: "/home/runner/.nvm", npm_config_metrics_registry: "https://registry.npmjs.org/", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230702.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chrome_driver", JOURNAL_STREAM: "8:17182", GITHUB_WORKFLOW: "Project CI", _: "/opt/hostedtoolcache/node/16.20.1/x64/bin/npm", npm_config_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", GITHUB_RUN_ID: "5500591965", npm_config_cache: "/home/runner/.npm", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "fbda533831c6fe36ed508dfecb6805ee9b76d62c", GITHUB_BASE_REF: "", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/heads/master", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", npm_config_node_gyp: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.bin:/home/runner/work/CodeGear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_cb3fab39-97b5-4a20-beba-50925f48ab2a", INVOCATION_ID: "d82dafb2589b40ffbcd117b00d5b0728", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.10/x64", NODE: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "9", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 3", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "master", GITHUB_REPOSITORY: "Gearonix/CodeGear", npm_lifecycle_script: " nx run-many --targets=build --all", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", npm_package_version: "0.0.0", npm_lifecycle_event: "build", NODE_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/bin/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/node_modules", GITHUB_REF_PROTECTED: "false", npm_config_strict_peer_dependencies: "", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "fbda533831c6fe36ed508dfecb6805ee9b76d62c", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/heads/master", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", npm_config_globalconfig: "/opt/hostedtoolcache/node/16.20.1/x64/etc/npmrc", npm_config_init_module: "/home/runner/.npm-init.js", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_9857b1f4-7ac0-4e69-8857-7d707f49d3d4", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", npm_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/bin/npm-cli.js", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "push", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_9857b1f4-7ac0-4e69-8857-7d707f49d3d4", npm_config_global_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", npm_command: "run-script", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.146+9/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_9857b1f4-7ac0-4e69-8857-7d707f49d3d4", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", EDITOR: "vi", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/14072245657591517729", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "14072245657591517729", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.SC_DISABLE_SPEEDY !== "false" && { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_9857b1f4-7ac0-4e69-8857-7d707f49d3d4", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "npm/8.19.4 node/v16.20.1 linux x64 workspaces/false ci/github-actions", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_9857b1f4-7ac0-4e69-8857-7d707f49d3d4", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", npm_config_noproxy: "", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-8.2", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "", npm_config_userconfig: "/home/runner/.npmrc", npm_config_local_prefix: "/home/runner/work/CodeGear/CodeGear", SYSTEMD_EXEC_PID: "674", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", COLOR: "0", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.5/x64", NVM_DIR: "/home/runner/.nvm", npm_config_metrics_registry: "https://registry.npmjs.org/", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230702.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chrome_driver", JOURNAL_STREAM: "8:17182", GITHUB_WORKFLOW: "Project CI", _: "/opt/hostedtoolcache/node/16.20.1/x64/bin/npm", npm_config_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", GITHUB_RUN_ID: "5500591965", npm_config_cache: "/home/runner/.npm", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "fbda533831c6fe36ed508dfecb6805ee9b76d62c", GITHUB_BASE_REF: "", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/heads/master", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", npm_config_node_gyp: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.bin:/home/runner/work/CodeGear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_cb3fab39-97b5-4a20-beba-50925f48ab2a", INVOCATION_ID: "d82dafb2589b40ffbcd117b00d5b0728", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.10/x64", NODE: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "9", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 3", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "master", GITHUB_REPOSITORY: "Gearonix/CodeGear", npm_lifecycle_script: " nx run-many --targets=build --all", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", npm_package_version: "0.0.0", npm_lifecycle_event: "build", NODE_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/bin/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/node_modules", GITHUB_REF_PROTECTED: "false", npm_config_strict_peer_dependencies: "", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "fbda533831c6fe36ed508dfecb6805ee9b76d62c", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/heads/master", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", npm_config_globalconfig: "/opt/hostedtoolcache/node/16.20.1/x64/etc/npmrc", npm_config_init_module: "/home/runner/.npm-init.js", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_9857b1f4-7ac0-4e69-8857-7d707f49d3d4", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", npm_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/bin/npm-cli.js", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "push", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_9857b1f4-7ac0-4e69-8857-7d707f49d3d4", npm_config_global_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", npm_command: "run-script", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.146+9/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_9857b1f4-7ac0-4e69-8857-7d707f49d3d4", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", EDITOR: "vi", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/14072245657591517729", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "14072245657591517729", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.SC_DISABLE_SPEEDY);
function or(e) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
    r[o - 1] = arguments[o];
  throw new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (r.length > 0 ? " Args: " + r.join(", ") : ""));
}
var La = function() {
  function e(r) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = r;
  }
  var n = e.prototype;
  return n.indexOfGroup = function(r) {
    for (var o = 0, t = 0; t < r; t++)
      o += this.groupSizes[t];
    return o;
  }, n.insertRules = function(r, o) {
    if (r >= this.groupSizes.length) {
      for (var t = this.groupSizes, i = t.length, _ = i; r >= _; )
        (_ <<= 1) < 0 && or(16, "" + r);
      this.groupSizes = new Uint32Array(_), this.groupSizes.set(t), this.length = _;
      for (var s = i; s < _; s++)
        this.groupSizes[s] = 0;
    }
    for (var a = this.indexOfGroup(r + 1), u = 0, c = o.length; u < c; u++)
      this.tag.insertRule(a, o[u]) && (this.groupSizes[r]++, a++);
  }, n.clearGroup = function(r) {
    if (r < this.length) {
      var o = this.groupSizes[r], t = this.indexOfGroup(r), i = t + o;
      this.groupSizes[r] = 0;
      for (var _ = t; _ < i; _++)
        this.tag.deleteRule(t);
    }
  }, n.getGroup = function(r) {
    var o = "";
    if (r >= this.length || this.groupSizes[r] === 0)
      return o;
    for (var t = this.groupSizes[r], i = this.indexOfGroup(r), _ = i + t, s = i; s < _; s++)
      o += this.tag.getRule(s) + `/*!sc*/
`;
    return o;
  }, e;
}(), yr = /* @__PURE__ */ new Map(), zr = /* @__PURE__ */ new Map(), Vn = 1, gr = function(e) {
  if (yr.has(e))
    return yr.get(e);
  for (; zr.has(Vn); )
    Vn++;
  var n = Vn++;
  return yr.set(e, n), zr.set(n, e), n;
}, ya = function(e) {
  return zr.get(e);
}, wa = function(e, n) {
  n >= Vn && (Vn = n + 1), yr.set(e, n), zr.set(n, e);
}, xa = "style[" + gn + '][data-styled-version="5.3.6"]', Ma = new RegExp("^" + gn + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), ka = function(e, n, r) {
  for (var o, t = r.split(","), i = 0, _ = t.length; i < _; i++)
    (o = t[i]) && e.registerName(n, o);
}, ja = function(e, n) {
  for (var r = (n.textContent || "").split(`/*!sc*/
`), o = [], t = 0, i = r.length; t < i; t++) {
    var _ = r[t].trim();
    if (_) {
      var s = _.match(Ma);
      if (s) {
        var a = 0 | parseInt(s[1], 10), u = s[2];
        a !== 0 && (wa(u, a), ka(e, u, s[3]), e.getTag().insertRules(a, o)), o.length = 0;
      } else
        o.push(_);
    }
  }
}, Fa = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, s_ = function(e) {
  var n = document.head, r = e || n, o = document.createElement("style"), t = function(s) {
    for (var a = s.childNodes, u = a.length; u >= 0; u--) {
      var c = a[u];
      if (c && c.nodeType === 1 && c.hasAttribute(gn))
        return c;
    }
  }(r), i = t !== void 0 ? t.nextSibling : null;
  o.setAttribute(gn, "active"), o.setAttribute("data-styled-version", "5.3.6");
  var _ = Fa();
  return _ && o.setAttribute("nonce", _), r.insertBefore(o, i), o;
}, Va = function() {
  function e(r) {
    var o = this.element = s_(r);
    o.appendChild(document.createTextNode("")), this.sheet = function(t) {
      if (t.sheet)
        return t.sheet;
      for (var i = document.styleSheets, _ = 0, s = i.length; _ < s; _++) {
        var a = i[_];
        if (a.ownerNode === t)
          return a;
      }
      or(17);
    }(o), this.length = 0;
  }
  var n = e.prototype;
  return n.insertRule = function(r, o) {
    try {
      return this.sheet.insertRule(o, r), this.length++, !0;
    } catch {
      return !1;
    }
  }, n.deleteRule = function(r) {
    this.sheet.deleteRule(r), this.length--;
  }, n.getRule = function(r) {
    var o = this.sheet.cssRules[r];
    return o !== void 0 && typeof o.cssText == "string" ? o.cssText : "";
  }, e;
}(), Xa = function() {
  function e(r) {
    var o = this.element = s_(r);
    this.nodes = o.childNodes, this.length = 0;
  }
  var n = e.prototype;
  return n.insertRule = function(r, o) {
    if (r <= this.length && r >= 0) {
      var t = document.createTextNode(o), i = this.nodes[r];
      return this.element.insertBefore(t, i || null), this.length++, !0;
    }
    return !1;
  }, n.deleteRule = function(r) {
    this.element.removeChild(this.nodes[r]), this.length--;
  }, n.getRule = function(r) {
    return r < this.length ? this.nodes[r].textContent : "";
  }, e;
}(), Ka = function() {
  function e(r) {
    this.rules = [], this.length = 0;
  }
  var n = e.prototype;
  return n.insertRule = function(r, o) {
    return r <= this.length && (this.rules.splice(r, 0, o), this.length++, !0);
  }, n.deleteRule = function(r) {
    this.rules.splice(r, 1), this.length--;
  }, n.getRule = function(r) {
    return r < this.length ? this.rules[r] : "";
  }, e;
}(), Wt = Tt, Wa = { isServer: !Tt, useCSSOMInjection: !Ba }, a_ = function() {
  function e(r, o, t) {
    r === void 0 && (r = Qe), o === void 0 && (o = {}), this.options = Me({}, Wa, {}, r), this.gs = o, this.names = new Map(t), this.server = !!r.isServer, !this.server && Tt && Wt && (Wt = !1, function(i) {
      for (var _ = document.querySelectorAll(xa), s = 0, a = _.length; s < a; s++) {
        var u = _[s];
        u && u.getAttribute(gn) !== "active" && (ja(i, u), u.parentNode && u.parentNode.removeChild(u));
      }
    }(this));
  }
  e.registerId = function(r) {
    return gr(r);
  };
  var n = e.prototype;
  return n.reconstructWithOptions = function(r, o) {
    return o === void 0 && (o = !0), new e(Me({}, this.options, {}, r), this.gs, o && this.names || void 0);
  }, n.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, n.getTag = function() {
    return this.tag || (this.tag = (t = (o = this.options).isServer, i = o.useCSSOMInjection, _ = o.target, r = t ? new Ka(_) : i ? new Va(_) : new Xa(_), new La(r)));
    var r, o, t, i, _;
  }, n.hasNameForId = function(r, o) {
    return this.names.has(r) && this.names.get(r).has(o);
  }, n.registerName = function(r, o) {
    if (gr(r), this.names.has(r))
      this.names.get(r).add(o);
    else {
      var t = /* @__PURE__ */ new Set();
      t.add(o), this.names.set(r, t);
    }
  }, n.insertRules = function(r, o, t) {
    this.registerName(r, o), this.getTag().insertRules(gr(r), t);
  }, n.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, n.clearRules = function(r) {
    this.getTag().clearGroup(gr(r)), this.clearNames(r);
  }, n.clearTag = function() {
    this.tag = void 0;
  }, n.toString = function() {
    return function(r) {
      for (var o = r.getTag(), t = o.length, i = "", _ = 0; _ < t; _++) {
        var s = ya(_);
        if (s !== void 0) {
          var a = r.names.get(s), u = o.getGroup(_);
          if (a && u && a.size) {
            var c = gn + ".g" + _ + '[id="' + s + '"]', d = "";
            a !== void 0 && a.forEach(function(f) {
              f.length > 0 && (d += f + ",");
            }), i += "" + u + c + '{content:"' + d + `"}/*!sc*/
`;
          }
        }
      }
      return i;
    }(this);
  }, e;
}(), Ya = /(a)(d)/gi, Yt = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Wo(e) {
  var n, r = "";
  for (n = Math.abs(e); n > 52; n = n / 52 | 0)
    r = Yt(n % 52) + r;
  return (Yt(n % 52) + r).replace(Ya, "$1-$2");
}
var On = function(e, n) {
  for (var r = n.length; r; )
    e = 33 * e ^ n.charCodeAt(--r);
  return e;
}, u_ = function(e) {
  return On(5381, e);
};
function $a(e) {
  for (var n = 0; n < e.length; n += 1) {
    var r = e[n];
    if (Yn(r) && !ht(r))
      return !1;
  }
  return !0;
}
var Ja = u_("5.3.6"), za = function() {
  function e(n, r, o) {
    this.rules = n, this.staticRulesId = "", this.isStatic = (o === void 0 || o.isStatic) && $a(n), this.componentId = r, this.baseHash = On(Ja, r), this.baseStyle = o, a_.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(n, r, o) {
    var t = this.componentId, i = [];
    if (this.baseStyle && i.push(this.baseStyle.generateAndInjectStyles(n, r, o)), this.isStatic && !o.hash)
      if (this.staticRulesId && r.hasNameForId(t, this.staticRulesId))
        i.push(this.staticRulesId);
      else {
        var _ = Gn(this.rules, n, r, o).join(""), s = Wo(On(this.baseHash, _) >>> 0);
        if (!r.hasNameForId(t, s)) {
          var a = o(_, "." + s, void 0, t);
          r.insertRules(t, s, a);
        }
        i.push(s), this.staticRulesId = s;
      }
    else {
      for (var u = this.rules.length, c = On(this.baseHash, o.hash), d = "", f = 0; f < u; f++) {
        var O = this.rules[f];
        if (typeof O == "string")
          d += O;
        else if (O) {
          var l = Gn(O, n, r, o), m = Array.isArray(l) ? l.join("") : l;
          c = On(c, m + f), d += m;
        }
      }
      if (d) {
        var h = Wo(c >>> 0);
        if (!r.hasNameForId(t, h)) {
          var N = o(d, "." + h, void 0, t);
          r.insertRules(t, h, N);
        }
        i.push(h);
      }
    }
    return i.join(" ");
  }, e;
}(), qa = /^\s*\/\/.*$/gm, Qa = [":", "[", ".", "#"];
function Za(e) {
  var n, r, o, t, i = e === void 0 ? Qe : e, _ = i.options, s = _ === void 0 ? Qe : _, a = i.plugins, u = a === void 0 ? Jr : a, c = new Oa(s), d = [], f = function(m) {
    function h(N) {
      if (N)
        try {
          m(N + "}");
        } catch {
        }
    }
    return function(N, R, G, C, T, H, M, z, P, y) {
      switch (N) {
        case 1:
          if (P === 0 && R.charCodeAt(0) === 64)
            return m(R + ";"), "";
          break;
        case 2:
          if (z === 0)
            return R + "/*|*/";
          break;
        case 3:
          switch (z) {
            case 102:
            case 112:
              return m(G[0] + R), "";
            default:
              return R + (y === 0 ? "/*|*/" : "");
          }
        case -2:
          R.split("/*|*/}").forEach(h);
      }
    };
  }(function(m) {
    d.push(m);
  }), O = function(m, h, N) {
    return h === 0 && Qa.indexOf(N[r.length]) !== -1 || N.match(t) ? m : "." + n;
  };
  function l(m, h, N, R) {
    R === void 0 && (R = "&");
    var G = m.replace(qa, ""), C = h && N ? N + " " + h + " { " + G + " }" : G;
    return n = R, r = h, o = new RegExp("\\" + r + "\\b", "g"), t = new RegExp("(\\" + r + "\\b){2,}"), c(N || !h ? "" : h, C);
  }
  return c.use([].concat(u, [function(m, h, N) {
    m === 2 && N.length && N[0].lastIndexOf(r) > 0 && (N[0] = N[0].replace(o, O));
  }, f, function(m) {
    if (m === -2) {
      var h = d;
      return d = [], h;
    }
  }])), l.hash = u.length ? u.reduce(function(m, h) {
    return h.name || or(15), On(m, h.name);
  }, 5381).toString() : "", l;
}
var d_ = ee.createContext();
d_.Consumer;
var c_ = ee.createContext(), eu = (c_.Consumer, new a_()), Yo = Za();
function nu() {
  return ln(d_) || eu;
}
function ru() {
  return ln(c_) || Yo;
}
var ou = function() {
  function e(n, r) {
    var o = this;
    this.inject = function(t, i) {
      i === void 0 && (i = Yo);
      var _ = o.name + i.hash;
      t.hasNameForId(o.id, _) || t.insertRules(o.id, _, i(o.rules, _, "@keyframes"));
    }, this.toString = function() {
      return or(12, String(o.name));
    }, this.name = n, this.id = "sc-keyframes-" + n, this.rules = r;
  }
  return e.prototype.getName = function(n) {
    return n === void 0 && (n = Yo), this.name + n.hash;
  }, e;
}(), tu = /([A-Z])/, iu = /([A-Z])/g, _u = /^ms-/, su = function(e) {
  return "-" + e.toLowerCase();
};
function $t(e) {
  return tu.test(e) ? e.replace(iu, su).replace(_u, "-ms-") : e;
}
var Jt = function(e) {
  return e == null || e === !1 || e === "";
};
function Gn(e, n, r, o) {
  if (Array.isArray(e)) {
    for (var t, i = [], _ = 0, s = e.length; _ < s; _ += 1)
      (t = Gn(e[_], n, r, o)) !== "" && (Array.isArray(t) ? i.push.apply(i, t) : i.push(t));
    return i;
  }
  if (Jt(e))
    return "";
  if (ht(e))
    return "." + e.styledComponentId;
  if (Yn(e)) {
    if (typeof (u = e) != "function" || u.prototype && u.prototype.isReactComponent || !n)
      return e;
    var a = e(n);
    return Gn(a, n, r, o);
  }
  var u;
  return e instanceof ou ? r ? (e.inject(r, o), e.getName(o)) : e : Ko(e) ? function c(d, f) {
    var O, l, m = [];
    for (var h in d)
      d.hasOwnProperty(h) && !Jt(d[h]) && (Array.isArray(d[h]) && d[h].isCss || Yn(d[h]) ? m.push($t(h) + ":", d[h], ";") : Ko(d[h]) ? m.push.apply(m, c(d[h], h)) : m.push($t(h) + ": " + (O = h, (l = d[h]) == null || typeof l == "boolean" || l === "" ? "" : typeof l != "number" || l === 0 || O in Ra ? String(l).trim() : l + "px") + ";"));
    return f ? [f + " {"].concat(m, ["}"]) : m;
  }(e) : e.toString();
}
var zt = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function Pn(e) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
    r[o - 1] = arguments[o];
  return Yn(e) || Ko(e) ? zt(Gn(Xt(Jr, [e].concat(r)))) : r.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : zt(Gn(Xt(e, r)));
}
var au = function(e, n, r) {
  return r === void 0 && (r = Qe), e.theme !== r.theme && e.theme || n || r.theme;
}, uu = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, du = /(^-|-$)/g;
function Co(e) {
  return e.replace(uu, "-").replace(du, "");
}
var cu = function(e) {
  return Wo(u_(e) >>> 0);
};
function Gr(e) {
  return typeof e == "string" && !0;
}
var $o = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, lu = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function mu(e, n, r) {
  var o = e[r];
  $o(n) && $o(o) ? l_(o, n) : e[r] = n;
}
function l_(e) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
    r[o - 1] = arguments[o];
  for (var t = 0, i = r; t < i.length; t++) {
    var _ = i[t];
    if ($o(_))
      for (var s in _)
        lu(s) && mu(e, _[s], s);
  }
  return e;
}
var m_ = ee.createContext();
m_.Consumer;
var Uo = {};
function p_(e, n, r) {
  var o = ht(e), t = !Gr(e), i = n.attrs, _ = i === void 0 ? Jr : i, s = n.componentId, a = s === void 0 ? function(R, G) {
    var C = typeof R != "string" ? "sc" : Co(R);
    Uo[C] = (Uo[C] || 0) + 1;
    var T = C + "-" + cu("5.3.6" + C + Uo[C]);
    return G ? G + "-" + T : T;
  }(n.displayName, n.parentComponentId) : s, u = n.displayName, c = u === void 0 ? function(R) {
    return Gr(R) ? "styled." + R : "Styled(" + Kt(R) + ")";
  }(e) : u, d = n.displayName && n.componentId ? Co(n.displayName) + "-" + n.componentId : n.componentId || a, f = o && e.attrs ? Array.prototype.concat(e.attrs, _).filter(Boolean) : _, O = n.shouldForwardProp;
  o && e.shouldForwardProp && (O = n.shouldForwardProp ? function(R, G, C) {
    return e.shouldForwardProp(R, G, C) && n.shouldForwardProp(R, G, C);
  } : e.shouldForwardProp);
  var l, m = new za(r, d, o ? e.componentStyle : void 0), h = m.isStatic && _.length === 0, N = function(R, G) {
    return function(C, T, H, M) {
      var z = C.attrs, P = C.componentStyle, y = C.defaultProps, be = C.foldedComponentIds, ie = C.shouldForwardProp, le = C.styledComponentId, me = C.target, x = function(B, p, X) {
        B === void 0 && (B = Qe);
        var I = Me({}, p, { theme: B }), Z = {};
        return X.forEach(function(K) {
          var J, L, se, fe = K;
          for (J in Yn(fe) && (fe = fe(I)), fe)
            I[J] = Z[J] = J === "className" ? (L = Z[J], se = fe[J], L && se ? L + " " + se : L || se) : fe[J];
        }), [I, Z];
      }(au(T, ln(m_), y) || Qe, T, z), Q = x[0], Ee = x[1], pe = function(B, p, X, I) {
        var Z = nu(), K = ru(), J = p ? B.generateAndInjectStyles(Qe, Z, K) : B.generateAndInjectStyles(X, Z, K);
        return J;
      }(P, M, Q), We = H, Ye = Ee.$as || T.$as || Ee.as || T.as || me, ne = Gr(Ye), g = Ee !== T ? Me({}, T, {}, Ee) : T, A = {};
      for (var S in g)
        S[0] !== "$" && S !== "as" && (S === "forwardedAs" ? A.as = g[S] : (ie ? ie(S, Mt, Ye) : !ne || Mt(S)) && (A[S] = g[S]));
      return T.style && Ee.style !== T.style && (A.style = Me({}, T.style, {}, Ee.style)), A.className = Array.prototype.concat(be, le, pe !== le ? pe : null, T.className, Ee.className).filter(Boolean).join(" "), A.ref = We, ma(Ye, A);
    }(l, R, G, h);
  };
  return N.displayName = c, (l = ee.forwardRef(N)).attrs = f, l.componentStyle = m, l.displayName = c, l.shouldForwardProp = O, l.foldedComponentIds = o ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : Jr, l.styledComponentId = d, l.target = o ? e.target : e, l.withComponent = function(R) {
    var G = n.componentId, C = function(H, M) {
      if (H == null)
        return {};
      var z, P, y = {}, be = Object.keys(H);
      for (P = 0; P < be.length; P++)
        z = be[P], M.indexOf(z) >= 0 || (y[z] = H[z]);
      return y;
    }(n, ["componentId"]), T = G && G + "-" + (Gr(R) ? R : Co(Kt(R)));
    return p_(R, Me({}, C, { attrs: f, componentId: T }), r);
  }, Object.defineProperty(l, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(R) {
    this._foldedDefaultProps = o ? l_({}, e.defaultProps, R) : R;
  } }), l.toString = function() {
    return "." + l.styledComponentId;
  }, t && Pa(l, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), l;
}
var Jo = function(e) {
  return function n(r, o, t) {
    if (t === void 0 && (t = Qe), !o_.isValidElementType(o))
      return or(1, String(o));
    var i = function() {
      return r(o, t, Pn.apply(void 0, arguments));
    };
    return i.withConfig = function(_) {
      return n(r, o, Me({}, t, {}, _));
    }, i.attrs = function(_) {
      return n(r, o, Me({}, t, { attrs: Array.prototype.concat(t.attrs, _).filter(Boolean) }));
    }, i;
  }(p_, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  Jo[e] = Jo(e);
});
const Te = Jo, Ve = (e = "100%", n = e) => Pn`
  width: ${e};
  height: ${n};
`;
Pn`
  border: 1px solid red;
`;
const pu = (e) => Pn`
  padding-left: ${e}px;
  padding-right: ${e}px;
`, tr = (e = "flex-start", n = "stretch", r = "row") => Pn`
  display: flex;
  justify-content: ${e};
  align-items: ${n};
  flex-direction: ${r};
`, hu = (e) => Pn`
  transition: color 200ms;
  &:hover {
    color: ${e}
  }
`, Ho = (e) => ({ theme: n }) => `${n[e]} !important;`, Tu = Te.div`
  background: ${({ theme: e }) => e.grey};
  border-right: 2px solid ${({ theme: e }) => e.lightGrey};
  box-sizing: border-box;
  ${Ve("60px", "100%")};
  ${tr("space-between", "center", "column")};
  padding-bottom: 15px;
`, En = Te.div`
  ${Ve("23px")}
  svg {
    ${Ve()}
    color: ${({ theme: e }) => e.secondaryGrey};
    ${({ theme: e }) => hu(e.light)}
  }
  margin-top: 20px;
  cursor: pointer;
`;
function h_(e, n) {
  return function() {
    return e.apply(n, arguments);
  };
}
const { toString: Eu } = Object.prototype, { getPrototypeOf: Et } = Object, mo = ((e) => (n) => {
  const r = Eu.call(n);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), we = (e) => (e = e.toLowerCase(), (n) => mo(n) === e), po = (e) => (n) => typeof n === e, { isArray: Bn } = Array, $n = po("undefined");
function fu(e) {
  return e !== null && !$n(e) && e.constructor !== null && !$n(e.constructor) && Ge(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const T_ = we("ArrayBuffer");
function Ou(e) {
  let n;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? n = ArrayBuffer.isView(e) : n = e && e.buffer && T_(e.buffer), n;
}
const Ru = po("string"), Ge = po("function"), E_ = po("number"), ho = (e) => e !== null && typeof e == "object", bu = (e) => e === !0 || e === !1, wr = (e) => {
  if (mo(e) !== "object")
    return !1;
  const n = Et(e);
  return (n === null || n === Object.prototype || Object.getPrototypeOf(n) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Nu = we("Date"), Iu = we("File"), Au = we("Blob"), gu = we("FileList"), Gu = (e) => ho(e) && Ge(e.pipe), Su = (e) => {
  let n;
  return e && (typeof FormData == "function" && e instanceof FormData || Ge(e.append) && ((n = mo(e)) === "formdata" || // detect form-data instance
  n === "object" && Ge(e.toString) && e.toString() === "[object FormData]"));
}, Cu = we("URLSearchParams"), Uu = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ir(e, n, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let o, t;
  if (typeof e != "object" && (e = [e]), Bn(e))
    for (o = 0, t = e.length; o < t; o++)
      n.call(null, e[o], o, e);
  else {
    const i = r ? Object.getOwnPropertyNames(e) : Object.keys(e), _ = i.length;
    let s;
    for (o = 0; o < _; o++)
      s = i[o], n.call(null, e[s], s, e);
  }
}
function f_(e, n) {
  n = n.toLowerCase();
  const r = Object.keys(e);
  let o = r.length, t;
  for (; o-- > 0; )
    if (t = r[o], n === t.toLowerCase())
      return t;
  return null;
}
const O_ = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), R_ = (e) => !$n(e) && e !== O_;
function zo() {
  const { caseless: e } = R_(this) && this || {}, n = {}, r = (o, t) => {
    const i = e && f_(n, t) || t;
    wr(n[i]) && wr(o) ? n[i] = zo(n[i], o) : wr(o) ? n[i] = zo({}, o) : Bn(o) ? n[i] = o.slice() : n[i] = o;
  };
  for (let o = 0, t = arguments.length; o < t; o++)
    arguments[o] && ir(arguments[o], r);
  return n;
}
const Hu = (e, n, r, { allOwnKeys: o } = {}) => (ir(n, (t, i) => {
  r && Ge(t) ? e[i] = h_(t, r) : e[i] = t;
}, { allOwnKeys: o }), e), vu = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Du = (e, n, r, o) => {
  e.prototype = Object.create(n.prototype, o), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: n.prototype
  }), r && Object.assign(e.prototype, r);
}, Pu = (e, n, r, o) => {
  let t, i, _;
  const s = {};
  if (n = n || {}, e == null)
    return n;
  do {
    for (t = Object.getOwnPropertyNames(e), i = t.length; i-- > 0; )
      _ = t[i], (!o || o(_, e, n)) && !s[_] && (n[_] = e[_], s[_] = !0);
    e = r !== !1 && Et(e);
  } while (e && (!r || r(e, n)) && e !== Object.prototype);
  return n;
}, Bu = (e, n, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= n.length;
  const o = e.indexOf(n, r);
  return o !== -1 && o === r;
}, Lu = (e) => {
  if (!e)
    return null;
  if (Bn(e))
    return e;
  let n = e.length;
  if (!E_(n))
    return null;
  const r = new Array(n);
  for (; n-- > 0; )
    r[n] = e[n];
  return r;
}, yu = ((e) => (n) => e && n instanceof e)(typeof Uint8Array < "u" && Et(Uint8Array)), wu = (e, n) => {
  const o = (e && e[Symbol.iterator]).call(e);
  let t;
  for (; (t = o.next()) && !t.done; ) {
    const i = t.value;
    n.call(e, i[0], i[1]);
  }
}, xu = (e, n) => {
  let r;
  const o = [];
  for (; (r = e.exec(n)) !== null; )
    o.push(r);
  return o;
}, Mu = we("HTMLFormElement"), ku = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, o, t) {
    return o.toUpperCase() + t;
  }
), qt = (({ hasOwnProperty: e }) => (n, r) => e.call(n, r))(Object.prototype), ju = we("RegExp"), b_ = (e, n) => {
  const r = Object.getOwnPropertyDescriptors(e), o = {};
  ir(r, (t, i) => {
    n(t, i, e) !== !1 && (o[i] = t);
  }), Object.defineProperties(e, o);
}, Fu = (e) => {
  b_(e, (n, r) => {
    if (Ge(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const o = e[r];
    if (Ge(o)) {
      if (n.enumerable = !1, "writable" in n) {
        n.writable = !1;
        return;
      }
      n.set || (n.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, Vu = (e, n) => {
  const r = {}, o = (t) => {
    t.forEach((i) => {
      r[i] = !0;
    });
  };
  return Bn(e) ? o(e) : o(String(e).split(n)), r;
}, Xu = () => {
}, Ku = (e, n) => (e = +e, Number.isFinite(e) ? e : n), vo = "abcdefghijklmnopqrstuvwxyz", Qt = "0123456789", N_ = {
  DIGIT: Qt,
  ALPHA: vo,
  ALPHA_DIGIT: vo + vo.toUpperCase() + Qt
}, Wu = (e = 16, n = N_.ALPHA_DIGIT) => {
  let r = "";
  const { length: o } = n;
  for (; e--; )
    r += n[Math.random() * o | 0];
  return r;
};
function Yu(e) {
  return !!(e && Ge(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const $u = (e) => {
  const n = new Array(10), r = (o, t) => {
    if (ho(o)) {
      if (n.indexOf(o) >= 0)
        return;
      if (!("toJSON" in o)) {
        n[t] = o;
        const i = Bn(o) ? [] : {};
        return ir(o, (_, s) => {
          const a = r(_, t + 1);
          !$n(a) && (i[s] = a);
        }), n[t] = void 0, i;
      }
    }
    return o;
  };
  return r(e, 0);
}, Ju = we("AsyncFunction"), zu = (e) => e && (ho(e) || Ge(e)) && Ge(e.then) && Ge(e.catch), E = {
  isArray: Bn,
  isArrayBuffer: T_,
  isBuffer: fu,
  isFormData: Su,
  isArrayBufferView: Ou,
  isString: Ru,
  isNumber: E_,
  isBoolean: bu,
  isObject: ho,
  isPlainObject: wr,
  isUndefined: $n,
  isDate: Nu,
  isFile: Iu,
  isBlob: Au,
  isRegExp: ju,
  isFunction: Ge,
  isStream: Gu,
  isURLSearchParams: Cu,
  isTypedArray: yu,
  isFileList: gu,
  forEach: ir,
  merge: zo,
  extend: Hu,
  trim: Uu,
  stripBOM: vu,
  inherits: Du,
  toFlatObject: Pu,
  kindOf: mo,
  kindOfTest: we,
  endsWith: Bu,
  toArray: Lu,
  forEachEntry: wu,
  matchAll: xu,
  isHTMLForm: Mu,
  hasOwnProperty: qt,
  hasOwnProp: qt,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: b_,
  freezeMethods: Fu,
  toObjectSet: Vu,
  toCamelCase: ku,
  noop: Xu,
  toFiniteNumber: Ku,
  findKey: f_,
  global: O_,
  isContextDefined: R_,
  ALPHABET: N_,
  generateString: Wu,
  isSpecCompliantForm: Yu,
  toJSONObject: $u,
  isAsyncFn: Ju,
  isThenable: zu
};
function j(e, n, r, o, t) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", n && (this.code = n), r && (this.config = r), o && (this.request = o), t && (this.response = t);
}
E.inherits(j, Error, {
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
      config: E.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const I_ = j.prototype, A_ = {};
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
  A_[e] = { value: e };
});
Object.defineProperties(j, A_);
Object.defineProperty(I_, "isAxiosError", { value: !0 });
j.from = (e, n, r, o, t, i) => {
  const _ = Object.create(I_);
  return E.toFlatObject(e, _, function(a) {
    return a !== Error.prototype;
  }, (s) => s !== "isAxiosError"), j.call(_, e.message, n, r, o, t), _.cause = e, _.name = e.name, i && Object.assign(_, i), _;
};
const qu = null;
function qo(e) {
  return E.isPlainObject(e) || E.isArray(e);
}
function g_(e) {
  return E.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Zt(e, n, r) {
  return e ? e.concat(n).map(function(t, i) {
    return t = g_(t), !r && i ? "[" + t + "]" : t;
  }).join(r ? "." : "") : n;
}
function Qu(e) {
  return E.isArray(e) && !e.some(qo);
}
const Zu = E.toFlatObject(E, {}, null, function(n) {
  return /^is[A-Z]/.test(n);
});
function To(e, n, r) {
  if (!E.isObject(e))
    throw new TypeError("target must be an object");
  n = n || new FormData(), r = E.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(m, h) {
    return !E.isUndefined(h[m]);
  });
  const o = r.metaTokens, t = r.visitor || c, i = r.dots, _ = r.indexes, a = (r.Blob || typeof Blob < "u" && Blob) && E.isSpecCompliantForm(n);
  if (!E.isFunction(t))
    throw new TypeError("visitor must be a function");
  function u(l) {
    if (l === null)
      return "";
    if (E.isDate(l))
      return l.toISOString();
    if (!a && E.isBlob(l))
      throw new j("Blob is not supported. Use a Buffer instead.");
    return E.isArrayBuffer(l) || E.isTypedArray(l) ? a && typeof Blob == "function" ? new Blob([l]) : Buffer.from(l) : l;
  }
  function c(l, m, h) {
    let N = l;
    if (l && !h && typeof l == "object") {
      if (E.endsWith(m, "{}"))
        m = o ? m : m.slice(0, -2), l = JSON.stringify(l);
      else if (E.isArray(l) && Qu(l) || (E.isFileList(l) || E.endsWith(m, "[]")) && (N = E.toArray(l)))
        return m = g_(m), N.forEach(function(G, C) {
          !(E.isUndefined(G) || G === null) && n.append(
            // eslint-disable-next-line no-nested-ternary
            _ === !0 ? Zt([m], C, i) : _ === null ? m : m + "[]",
            u(G)
          );
        }), !1;
    }
    return qo(l) ? !0 : (n.append(Zt(h, m, i), u(l)), !1);
  }
  const d = [], f = Object.assign(Zu, {
    defaultVisitor: c,
    convertValue: u,
    isVisitable: qo
  });
  function O(l, m) {
    if (!E.isUndefined(l)) {
      if (d.indexOf(l) !== -1)
        throw Error("Circular reference detected in " + m.join("."));
      d.push(l), E.forEach(l, function(N, R) {
        (!(E.isUndefined(N) || N === null) && t.call(
          n,
          N,
          E.isString(R) ? R.trim() : R,
          m,
          f
        )) === !0 && O(N, m ? m.concat(R) : [R]);
      }), d.pop();
    }
  }
  if (!E.isObject(e))
    throw new TypeError("data must be an object");
  return O(e), n;
}
function ei(e) {
  const n = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(o) {
    return n[o];
  });
}
function ft(e, n) {
  this._pairs = [], e && To(e, this, n);
}
const G_ = ft.prototype;
G_.append = function(n, r) {
  this._pairs.push([n, r]);
};
G_.toString = function(n) {
  const r = n ? function(o) {
    return n.call(this, o, ei);
  } : ei;
  return this._pairs.map(function(t) {
    return r(t[0]) + "=" + r(t[1]);
  }, "").join("&");
};
function ed(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function S_(e, n, r) {
  if (!n)
    return e;
  const o = r && r.encode || ed, t = r && r.serialize;
  let i;
  if (t ? i = t(n, r) : i = E.isURLSearchParams(n) ? n.toString() : new ft(n, r).toString(o), i) {
    const _ = e.indexOf("#");
    _ !== -1 && (e = e.slice(0, _)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class nd {
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
  use(n, r, o) {
    return this.handlers.push({
      fulfilled: n,
      rejected: r,
      synchronous: o ? o.synchronous : !1,
      runWhen: o ? o.runWhen : null
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
    E.forEach(this.handlers, function(o) {
      o !== null && n(o);
    });
  }
}
const ni = nd, C_ = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, rd = typeof URLSearchParams < "u" ? URLSearchParams : ft, od = typeof FormData < "u" ? FormData : null, td = typeof Blob < "u" ? Blob : null, id = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), _d = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), De = {
  isBrowser: !0,
  classes: {
    URLSearchParams: rd,
    FormData: od,
    Blob: td
  },
  isStandardBrowserEnv: id,
  isStandardBrowserWebWorkerEnv: _d,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function sd(e, n) {
  return To(e, new De.classes.URLSearchParams(), Object.assign({
    visitor: function(r, o, t, i) {
      return De.isNode && E.isBuffer(r) ? (this.append(o, r.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, n));
}
function ad(e) {
  return E.matchAll(/\w+|\[(\w*)]/g, e).map((n) => n[0] === "[]" ? "" : n[1] || n[0]);
}
function ud(e) {
  const n = {}, r = Object.keys(e);
  let o;
  const t = r.length;
  let i;
  for (o = 0; o < t; o++)
    i = r[o], n[i] = e[i];
  return n;
}
function U_(e) {
  function n(r, o, t, i) {
    let _ = r[i++];
    const s = Number.isFinite(+_), a = i >= r.length;
    return _ = !_ && E.isArray(t) ? t.length : _, a ? (E.hasOwnProp(t, _) ? t[_] = [t[_], o] : t[_] = o, !s) : ((!t[_] || !E.isObject(t[_])) && (t[_] = []), n(r, o, t[_], i) && E.isArray(t[_]) && (t[_] = ud(t[_])), !s);
  }
  if (E.isFormData(e) && E.isFunction(e.entries)) {
    const r = {};
    return E.forEachEntry(e, (o, t) => {
      n(ad(o), t, r, 0);
    }), r;
  }
  return null;
}
const dd = {
  "Content-Type": void 0
};
function cd(e, n, r) {
  if (E.isString(e))
    try {
      return (n || JSON.parse)(e), E.trim(e);
    } catch (o) {
      if (o.name !== "SyntaxError")
        throw o;
    }
  return (r || JSON.stringify)(e);
}
const Eo = {
  transitional: C_,
  adapter: ["xhr", "http"],
  transformRequest: [function(n, r) {
    const o = r.getContentType() || "", t = o.indexOf("application/json") > -1, i = E.isObject(n);
    if (i && E.isHTMLForm(n) && (n = new FormData(n)), E.isFormData(n))
      return t && t ? JSON.stringify(U_(n)) : n;
    if (E.isArrayBuffer(n) || E.isBuffer(n) || E.isStream(n) || E.isFile(n) || E.isBlob(n))
      return n;
    if (E.isArrayBufferView(n))
      return n.buffer;
    if (E.isURLSearchParams(n))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), n.toString();
    let s;
    if (i) {
      if (o.indexOf("application/x-www-form-urlencoded") > -1)
        return sd(n, this.formSerializer).toString();
      if ((s = E.isFileList(n)) || o.indexOf("multipart/form-data") > -1) {
        const a = this.env && this.env.FormData;
        return To(
          s ? { "files[]": n } : n,
          a && new a(),
          this.formSerializer
        );
      }
    }
    return i || t ? (r.setContentType("application/json", !1), cd(n)) : n;
  }],
  transformResponse: [function(n) {
    const r = this.transitional || Eo.transitional, o = r && r.forcedJSONParsing, t = this.responseType === "json";
    if (n && E.isString(n) && (o && !this.responseType || t)) {
      const _ = !(r && r.silentJSONParsing) && t;
      try {
        return JSON.parse(n);
      } catch (s) {
        if (_)
          throw s.name === "SyntaxError" ? j.from(s, j.ERR_BAD_RESPONSE, this, null, this.response) : s;
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
    FormData: De.classes.FormData,
    Blob: De.classes.Blob
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
E.forEach(["delete", "get", "head"], function(n) {
  Eo.headers[n] = {};
});
E.forEach(["post", "put", "patch"], function(n) {
  Eo.headers[n] = E.merge(dd);
});
const Ot = Eo, ld = E.toObjectSet([
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
]), md = (e) => {
  const n = {};
  let r, o, t;
  return e && e.split(`
`).forEach(function(_) {
    t = _.indexOf(":"), r = _.substring(0, t).trim().toLowerCase(), o = _.substring(t + 1).trim(), !(!r || n[r] && ld[r]) && (r === "set-cookie" ? n[r] ? n[r].push(o) : n[r] = [o] : n[r] = n[r] ? n[r] + ", " + o : o);
  }), n;
}, ri = Symbol("internals");
function jn(e) {
  return e && String(e).trim().toLowerCase();
}
function xr(e) {
  return e === !1 || e == null ? e : E.isArray(e) ? e.map(xr) : String(e);
}
function pd(e) {
  const n = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let o;
  for (; o = r.exec(e); )
    n[o[1]] = o[2];
  return n;
}
const hd = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Do(e, n, r, o, t) {
  if (E.isFunction(o))
    return o.call(this, n, r);
  if (t && (n = r), !!E.isString(n)) {
    if (E.isString(o))
      return n.indexOf(o) !== -1;
    if (E.isRegExp(o))
      return o.test(n);
  }
}
function Td(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (n, r, o) => r.toUpperCase() + o);
}
function Ed(e, n) {
  const r = E.toCamelCase(" " + n);
  ["get", "set", "has"].forEach((o) => {
    Object.defineProperty(e, o + r, {
      value: function(t, i, _) {
        return this[o].call(this, n, t, i, _);
      },
      configurable: !0
    });
  });
}
class fo {
  constructor(n) {
    n && this.set(n);
  }
  set(n, r, o) {
    const t = this;
    function i(s, a, u) {
      const c = jn(a);
      if (!c)
        throw new Error("header name must be a non-empty string");
      const d = E.findKey(t, c);
      (!d || t[d] === void 0 || u === !0 || u === void 0 && t[d] !== !1) && (t[d || a] = xr(s));
    }
    const _ = (s, a) => E.forEach(s, (u, c) => i(u, c, a));
    return E.isPlainObject(n) || n instanceof this.constructor ? _(n, r) : E.isString(n) && (n = n.trim()) && !hd(n) ? _(md(n), r) : n != null && i(r, n, o), this;
  }
  get(n, r) {
    if (n = jn(n), n) {
      const o = E.findKey(this, n);
      if (o) {
        const t = this[o];
        if (!r)
          return t;
        if (r === !0)
          return pd(t);
        if (E.isFunction(r))
          return r.call(this, t, o);
        if (E.isRegExp(r))
          return r.exec(t);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(n, r) {
    if (n = jn(n), n) {
      const o = E.findKey(this, n);
      return !!(o && this[o] !== void 0 && (!r || Do(this, this[o], o, r)));
    }
    return !1;
  }
  delete(n, r) {
    const o = this;
    let t = !1;
    function i(_) {
      if (_ = jn(_), _) {
        const s = E.findKey(o, _);
        s && (!r || Do(o, o[s], s, r)) && (delete o[s], t = !0);
      }
    }
    return E.isArray(n) ? n.forEach(i) : i(n), t;
  }
  clear(n) {
    const r = Object.keys(this);
    let o = r.length, t = !1;
    for (; o--; ) {
      const i = r[o];
      (!n || Do(this, this[i], i, n, !0)) && (delete this[i], t = !0);
    }
    return t;
  }
  normalize(n) {
    const r = this, o = {};
    return E.forEach(this, (t, i) => {
      const _ = E.findKey(o, i);
      if (_) {
        r[_] = xr(t), delete r[i];
        return;
      }
      const s = n ? Td(i) : String(i).trim();
      s !== i && delete r[i], r[s] = xr(t), o[s] = !0;
    }), this;
  }
  concat(...n) {
    return this.constructor.concat(this, ...n);
  }
  toJSON(n) {
    const r = /* @__PURE__ */ Object.create(null);
    return E.forEach(this, (o, t) => {
      o != null && o !== !1 && (r[t] = n && E.isArray(o) ? o.join(", ") : o);
    }), r;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([n, r]) => n + ": " + r).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(n) {
    return n instanceof this ? n : new this(n);
  }
  static concat(n, ...r) {
    const o = new this(n);
    return r.forEach((t) => o.set(t)), o;
  }
  static accessor(n) {
    const o = (this[ri] = this[ri] = {
      accessors: {}
    }).accessors, t = this.prototype;
    function i(_) {
      const s = jn(_);
      o[s] || (Ed(t, _), o[s] = !0);
    }
    return E.isArray(n) ? n.forEach(i) : i(n), this;
  }
}
fo.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
E.freezeMethods(fo.prototype);
E.freezeMethods(fo);
const ke = fo;
function Po(e, n) {
  const r = this || Ot, o = n || r, t = ke.from(o.headers);
  let i = o.data;
  return E.forEach(e, function(s) {
    i = s.call(r, i, t.normalize(), n ? n.status : void 0);
  }), t.normalize(), i;
}
function H_(e) {
  return !!(e && e.__CANCEL__);
}
function _r(e, n, r) {
  j.call(this, e ?? "canceled", j.ERR_CANCELED, n, r), this.name = "CanceledError";
}
E.inherits(_r, j, {
  __CANCEL__: !0
});
function fd(e, n, r) {
  const o = r.config.validateStatus;
  !r.status || !o || o(r.status) ? e(r) : n(new j(
    "Request failed with status code " + r.status,
    [j.ERR_BAD_REQUEST, j.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
const Od = De.isStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  function() {
    return {
      write: function(r, o, t, i, _, s) {
        const a = [];
        a.push(r + "=" + encodeURIComponent(o)), E.isNumber(t) && a.push("expires=" + new Date(t).toGMTString()), E.isString(i) && a.push("path=" + i), E.isString(_) && a.push("domain=" + _), s === !0 && a.push("secure"), document.cookie = a.join("; ");
      },
      read: function(r) {
        const o = document.cookie.match(new RegExp("(^|;\\s*)(" + r + ")=([^;]*)"));
        return o ? decodeURIComponent(o[3]) : null;
      },
      remove: function(r) {
        this.write(r, "", Date.now() - 864e5);
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
function Rd(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function bd(e, n) {
  return n ? e.replace(/\/+$/, "") + "/" + n.replace(/^\/+/, "") : e;
}
function v_(e, n) {
  return e && !Rd(n) ? bd(e, n) : n;
}
const Nd = De.isStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const n = /(msie|trident)/i.test(navigator.userAgent), r = document.createElement("a");
    let o;
    function t(i) {
      let _ = i;
      return n && (r.setAttribute("href", _), _ = r.href), r.setAttribute("href", _), {
        href: r.href,
        protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
        host: r.host,
        search: r.search ? r.search.replace(/^\?/, "") : "",
        hash: r.hash ? r.hash.replace(/^#/, "") : "",
        hostname: r.hostname,
        port: r.port,
        pathname: r.pathname.charAt(0) === "/" ? r.pathname : "/" + r.pathname
      };
    }
    return o = t(window.location.href), function(_) {
      const s = E.isString(_) ? t(_) : _;
      return s.protocol === o.protocol && s.host === o.host;
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
function Id(e) {
  const n = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return n && n[1] || "";
}
function Ad(e, n) {
  e = e || 10;
  const r = new Array(e), o = new Array(e);
  let t = 0, i = 0, _;
  return n = n !== void 0 ? n : 1e3, function(a) {
    const u = Date.now(), c = o[i];
    _ || (_ = u), r[t] = a, o[t] = u;
    let d = i, f = 0;
    for (; d !== t; )
      f += r[d++], d = d % e;
    if (t = (t + 1) % e, t === i && (i = (i + 1) % e), u - _ < n)
      return;
    const O = c && u - c;
    return O ? Math.round(f * 1e3 / O) : void 0;
  };
}
function oi(e, n) {
  let r = 0;
  const o = Ad(50, 250);
  return (t) => {
    const i = t.loaded, _ = t.lengthComputable ? t.total : void 0, s = i - r, a = o(s), u = i <= _;
    r = i;
    const c = {
      loaded: i,
      total: _,
      progress: _ ? i / _ : void 0,
      bytes: s,
      rate: a || void 0,
      estimated: a && _ && u ? (_ - i) / a : void 0,
      event: t
    };
    c[n ? "download" : "upload"] = !0, e(c);
  };
}
const gd = typeof XMLHttpRequest < "u", Gd = gd && function(e) {
  return new Promise(function(r, o) {
    let t = e.data;
    const i = ke.from(e.headers).normalize(), _ = e.responseType;
    let s;
    function a() {
      e.cancelToken && e.cancelToken.unsubscribe(s), e.signal && e.signal.removeEventListener("abort", s);
    }
    E.isFormData(t) && (De.isStandardBrowserEnv || De.isStandardBrowserWebWorkerEnv ? i.setContentType(!1) : i.setContentType("multipart/form-data;", !1));
    let u = new XMLHttpRequest();
    if (e.auth) {
      const O = e.auth.username || "", l = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      i.set("Authorization", "Basic " + btoa(O + ":" + l));
    }
    const c = v_(e.baseURL, e.url);
    u.open(e.method.toUpperCase(), S_(c, e.params, e.paramsSerializer), !0), u.timeout = e.timeout;
    function d() {
      if (!u)
        return;
      const O = ke.from(
        "getAllResponseHeaders" in u && u.getAllResponseHeaders()
      ), m = {
        data: !_ || _ === "text" || _ === "json" ? u.responseText : u.response,
        status: u.status,
        statusText: u.statusText,
        headers: O,
        config: e,
        request: u
      };
      fd(function(N) {
        r(N), a();
      }, function(N) {
        o(N), a();
      }, m), u = null;
    }
    if ("onloadend" in u ? u.onloadend = d : u.onreadystatechange = function() {
      !u || u.readyState !== 4 || u.status === 0 && !(u.responseURL && u.responseURL.indexOf("file:") === 0) || setTimeout(d);
    }, u.onabort = function() {
      u && (o(new j("Request aborted", j.ECONNABORTED, e, u)), u = null);
    }, u.onerror = function() {
      o(new j("Network Error", j.ERR_NETWORK, e, u)), u = null;
    }, u.ontimeout = function() {
      let l = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const m = e.transitional || C_;
      e.timeoutErrorMessage && (l = e.timeoutErrorMessage), o(new j(
        l,
        m.clarifyTimeoutError ? j.ETIMEDOUT : j.ECONNABORTED,
        e,
        u
      )), u = null;
    }, De.isStandardBrowserEnv) {
      const O = (e.withCredentials || Nd(c)) && e.xsrfCookieName && Od.read(e.xsrfCookieName);
      O && i.set(e.xsrfHeaderName, O);
    }
    t === void 0 && i.setContentType(null), "setRequestHeader" in u && E.forEach(i.toJSON(), function(l, m) {
      u.setRequestHeader(m, l);
    }), E.isUndefined(e.withCredentials) || (u.withCredentials = !!e.withCredentials), _ && _ !== "json" && (u.responseType = e.responseType), typeof e.onDownloadProgress == "function" && u.addEventListener("progress", oi(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && u.upload && u.upload.addEventListener("progress", oi(e.onUploadProgress)), (e.cancelToken || e.signal) && (s = (O) => {
      u && (o(!O || O.type ? new _r(null, e, u) : O), u.abort(), u = null);
    }, e.cancelToken && e.cancelToken.subscribe(s), e.signal && (e.signal.aborted ? s() : e.signal.addEventListener("abort", s)));
    const f = Id(c);
    if (f && De.protocols.indexOf(f) === -1) {
      o(new j("Unsupported protocol " + f + ":", j.ERR_BAD_REQUEST, e));
      return;
    }
    u.send(t || null);
  });
}, Mr = {
  http: qu,
  xhr: Gd
};
E.forEach(Mr, (e, n) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: n });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: n });
  }
});
const Sd = {
  getAdapter: (e) => {
    e = E.isArray(e) ? e : [e];
    const { length: n } = e;
    let r, o;
    for (let t = 0; t < n && (r = e[t], !(o = E.isString(r) ? Mr[r.toLowerCase()] : r)); t++)
      ;
    if (!o)
      throw o === !1 ? new j(
        `Adapter ${r} is not supported by the environment`,
        "ERR_NOT_SUPPORT"
      ) : new Error(
        E.hasOwnProp(Mr, r) ? `Adapter '${r}' is not available in the build` : `Unknown adapter '${r}'`
      );
    if (!E.isFunction(o))
      throw new TypeError("adapter is not a function");
    return o;
  },
  adapters: Mr
};
function Bo(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new _r(null, e);
}
function ti(e) {
  return Bo(e), e.headers = ke.from(e.headers), e.data = Po.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Sd.getAdapter(e.adapter || Ot.adapter)(e).then(function(o) {
    return Bo(e), o.data = Po.call(
      e,
      e.transformResponse,
      o
    ), o.headers = ke.from(o.headers), o;
  }, function(o) {
    return H_(o) || (Bo(e), o && o.response && (o.response.data = Po.call(
      e,
      e.transformResponse,
      o.response
    ), o.response.headers = ke.from(o.response.headers))), Promise.reject(o);
  });
}
const ii = (e) => e instanceof ke ? e.toJSON() : e;
function Sn(e, n) {
  n = n || {};
  const r = {};
  function o(u, c, d) {
    return E.isPlainObject(u) && E.isPlainObject(c) ? E.merge.call({ caseless: d }, u, c) : E.isPlainObject(c) ? E.merge({}, c) : E.isArray(c) ? c.slice() : c;
  }
  function t(u, c, d) {
    if (E.isUndefined(c)) {
      if (!E.isUndefined(u))
        return o(void 0, u, d);
    } else
      return o(u, c, d);
  }
  function i(u, c) {
    if (!E.isUndefined(c))
      return o(void 0, c);
  }
  function _(u, c) {
    if (E.isUndefined(c)) {
      if (!E.isUndefined(u))
        return o(void 0, u);
    } else
      return o(void 0, c);
  }
  function s(u, c, d) {
    if (d in n)
      return o(u, c);
    if (d in e)
      return o(void 0, u);
  }
  const a = {
    url: i,
    method: i,
    data: i,
    baseURL: _,
    transformRequest: _,
    transformResponse: _,
    paramsSerializer: _,
    timeout: _,
    timeoutMessage: _,
    withCredentials: _,
    adapter: _,
    responseType: _,
    xsrfCookieName: _,
    xsrfHeaderName: _,
    onUploadProgress: _,
    onDownloadProgress: _,
    decompress: _,
    maxContentLength: _,
    maxBodyLength: _,
    beforeRedirect: _,
    transport: _,
    httpAgent: _,
    httpsAgent: _,
    cancelToken: _,
    socketPath: _,
    responseEncoding: _,
    validateStatus: s,
    headers: (u, c) => t(ii(u), ii(c), !0)
  };
  return E.forEach(Object.keys(Object.assign({}, e, n)), function(c) {
    const d = a[c] || t, f = d(e[c], n[c], c);
    E.isUndefined(f) && d !== s || (r[c] = f);
  }), r;
}
const D_ = "1.4.0", Rt = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, n) => {
  Rt[e] = function(o) {
    return typeof o === e || "a" + (n < 1 ? "n " : " ") + e;
  };
});
const _i = {};
Rt.transitional = function(n, r, o) {
  function t(i, _) {
    return "[Axios v" + D_ + "] Transitional option '" + i + "'" + _ + (o ? ". " + o : "");
  }
  return (i, _, s) => {
    if (n === !1)
      throw new j(
        t(_, " has been removed" + (r ? " in " + r : "")),
        j.ERR_DEPRECATED
      );
    return r && !_i[_] && (_i[_] = !0, console.warn(
      t(
        _,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), n ? n(i, _, s) : !0;
  };
};
function Cd(e, n, r) {
  if (typeof e != "object")
    throw new j("options must be an object", j.ERR_BAD_OPTION_VALUE);
  const o = Object.keys(e);
  let t = o.length;
  for (; t-- > 0; ) {
    const i = o[t], _ = n[i];
    if (_) {
      const s = e[i], a = s === void 0 || _(s, i, e);
      if (a !== !0)
        throw new j("option " + i + " must be " + a, j.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new j("Unknown option " + i, j.ERR_BAD_OPTION);
  }
}
const Qo = {
  assertOptions: Cd,
  validators: Rt
}, Je = Qo.validators;
class qr {
  constructor(n) {
    this.defaults = n, this.interceptors = {
      request: new ni(),
      response: new ni()
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
  request(n, r) {
    typeof n == "string" ? (r = r || {}, r.url = n) : r = n || {}, r = Sn(this.defaults, r);
    const { transitional: o, paramsSerializer: t, headers: i } = r;
    o !== void 0 && Qo.assertOptions(o, {
      silentJSONParsing: Je.transitional(Je.boolean),
      forcedJSONParsing: Je.transitional(Je.boolean),
      clarifyTimeoutError: Je.transitional(Je.boolean)
    }, !1), t != null && (E.isFunction(t) ? r.paramsSerializer = {
      serialize: t
    } : Qo.assertOptions(t, {
      encode: Je.function,
      serialize: Je.function
    }, !0)), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let _;
    _ = i && E.merge(
      i.common,
      i[r.method]
    ), _ && E.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (l) => {
        delete i[l];
      }
    ), r.headers = ke.concat(_, i);
    const s = [];
    let a = !0;
    this.interceptors.request.forEach(function(m) {
      typeof m.runWhen == "function" && m.runWhen(r) === !1 || (a = a && m.synchronous, s.unshift(m.fulfilled, m.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(m) {
      u.push(m.fulfilled, m.rejected);
    });
    let c, d = 0, f;
    if (!a) {
      const l = [ti.bind(this), void 0];
      for (l.unshift.apply(l, s), l.push.apply(l, u), f = l.length, c = Promise.resolve(r); d < f; )
        c = c.then(l[d++], l[d++]);
      return c;
    }
    f = s.length;
    let O = r;
    for (d = 0; d < f; ) {
      const l = s[d++], m = s[d++];
      try {
        O = l(O);
      } catch (h) {
        m.call(this, h);
        break;
      }
    }
    try {
      c = ti.call(this, O);
    } catch (l) {
      return Promise.reject(l);
    }
    for (d = 0, f = u.length; d < f; )
      c = c.then(u[d++], u[d++]);
    return c;
  }
  getUri(n) {
    n = Sn(this.defaults, n);
    const r = v_(n.baseURL, n.url);
    return S_(r, n.params, n.paramsSerializer);
  }
}
E.forEach(["delete", "get", "head", "options"], function(n) {
  qr.prototype[n] = function(r, o) {
    return this.request(Sn(o || {}, {
      method: n,
      url: r,
      data: (o || {}).data
    }));
  };
});
E.forEach(["post", "put", "patch"], function(n) {
  function r(o) {
    return function(i, _, s) {
      return this.request(Sn(s || {}, {
        method: n,
        headers: o ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: _
      }));
    };
  }
  qr.prototype[n] = r(), qr.prototype[n + "Form"] = r(!0);
});
const kr = qr;
class bt {
  constructor(n) {
    if (typeof n != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(i) {
      r = i;
    });
    const o = this;
    this.promise.then((t) => {
      if (!o._listeners)
        return;
      let i = o._listeners.length;
      for (; i-- > 0; )
        o._listeners[i](t);
      o._listeners = null;
    }), this.promise.then = (t) => {
      let i;
      const _ = new Promise((s) => {
        o.subscribe(s), i = s;
      }).then(t);
      return _.cancel = function() {
        o.unsubscribe(i);
      }, _;
    }, n(function(i, _, s) {
      o.reason || (o.reason = new _r(i, _, s), r(o.reason));
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
    const r = this._listeners.indexOf(n);
    r !== -1 && this._listeners.splice(r, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let n;
    return {
      token: new bt(function(t) {
        n = t;
      }),
      cancel: n
    };
  }
}
const Ud = bt;
function Hd(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function vd(e) {
  return E.isObject(e) && e.isAxiosError === !0;
}
const Zo = {
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
Object.entries(Zo).forEach(([e, n]) => {
  Zo[n] = e;
});
const Dd = Zo;
function P_(e) {
  const n = new kr(e), r = h_(kr.prototype.request, n);
  return E.extend(r, kr.prototype, n, { allOwnKeys: !0 }), E.extend(r, n, null, { allOwnKeys: !0 }), r.create = function(t) {
    return P_(Sn(e, t));
  }, r;
}
const oe = P_(Ot);
oe.Axios = kr;
oe.CanceledError = _r;
oe.CancelToken = Ud;
oe.isCancel = H_;
oe.VERSION = D_;
oe.toFormData = To;
oe.AxiosError = j;
oe.Cancel = oe.CanceledError;
oe.all = function(n) {
  return Promise.all(n);
};
oe.spread = Hd;
oe.isAxiosError = vd;
oe.mergeConfig = Sn;
oe.AxiosHeaders = ke;
oe.formToJSON = (e) => U_(E.isHTMLForm(e) ? new FormData(e) : e);
oe.HttpStatusCode = Dd;
oe.default = oe;
const Pd = oe, Bd = { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_9857b1f4-7ac0-4e69-8857-7d707f49d3d4", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "npm/8.19.4 node/v16.20.1 linux x64 workspaces/false ci/github-actions", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_9857b1f4-7ac0-4e69-8857-7d707f49d3d4", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", npm_config_noproxy: "", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/CodeGear/CodeGear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-8.2", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "", npm_config_userconfig: "/home/runner/.npmrc", npm_config_local_prefix: "/home/runner/work/CodeGear/CodeGear", SYSTEMD_EXEC_PID: "674", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", COLOR: "0", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.5/x64", NVM_DIR: "/home/runner/.nvm", npm_config_metrics_registry: "https://registry.npmjs.org/", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20230702.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chrome_driver", JOURNAL_STREAM: "8:17182", GITHUB_WORKFLOW: "Project CI", _: "/opt/hostedtoolcache/node/16.20.1/x64/bin/npm", npm_config_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", GITHUB_RUN_ID: "5500591965", npm_config_cache: "/home/runner/.npm", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "fbda533831c6fe36ed508dfecb6805ee9b76d62c", GITHUB_BASE_REF: "", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "Gearonix/CodeGear/.github/workflows/master.yml@refs/heads/master", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GOROOT_1_18_X64: "/opt/hostedtoolcache/go/1.18.10/x64", GITHUB_ACTION_REPOSITORY: "", npm_config_node_gyp: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.bin:/home/runner/work/CodeGear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/16.20.1/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_cb3fab39-97b5-4a20-beba-50925f48ab2a", INVOCATION_ID: "d82dafb2589b40ffbcd117b00d5b0728", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.10/x64", NODE: "/opt/hostedtoolcache/node/16.20.1/x64/bin/node", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "9", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 3", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "master", GITHUB_REPOSITORY: "Gearonix/CodeGear", npm_lifecycle_script: " nx run-many --targets=build --all", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", npm_package_version: "0.0.0", npm_lifecycle_event: "build", NODE_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/bin/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules/nx/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/nx@16.4.0/node_modules:/home/runner/work/CodeGear/CodeGear/node_modules/.pnpm/node_modules", GITHUB_REF_PROTECTED: "false", npm_config_strict_peer_dependencies: "", GITHUB_WORKSPACE: "/home/runner/work/CodeGear/CodeGear", ACCEPT_EULA: "Y", GITHUB_JOB: "building", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "fbda533831c6fe36ed508dfecb6805ee9b76d62c", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/heads/master", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", npm_config_globalconfig: "/opt/hostedtoolcache/node/16.20.1/x64/etc/npmrc", npm_config_init_module: "/home/runner/.npm-init.js", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_9857b1f4-7ac0-4e69-8857-7d707f49d3d4", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/CodeGear/CodeGear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/CodeGear", npm_execpath: "/opt/hostedtoolcache/node/16.20.1/x64/lib/node_modules/npm/bin/npm-cli.js", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "push", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_9857b1f4-7ac0-4e69-8857-7d707f49d3d4", npm_config_global_prefix: "/opt/hostedtoolcache/node/16.20.1/x64", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", npm_command: "run-script", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.146+9/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_9857b1f4-7ac0-4e69-8857-7d707f49d3d4", INIT_CWD: "/home/runner/work/CodeGear/CodeGear", EDITOR: "vi", NX_CLI_SET: "true", NX_LOAD_DOT_ENV_FILES: "true", NX_INVOKED_BY_RUNNER: "true", NX_WORKSPACE_ROOT: "/home/runner/work/CodeGear/CodeGear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/CodeGear/CodeGear/node_modules/.cache/nx/terminalOutputs/14072245657591517729", NX_TASK_TARGET_PROJECT: "editor", NX_TASK_TARGET_TARGET: "build", NX_TASK_TARGET_CONFIGURATION: "production", NX_TASK_HASH: "14072245657591517729", LERNA_PACKAGE_NAME: "editor", NODE_ENV: "production" }.SERVER_URL ?? "http://localhost:6868", Ld = {
  CODE_EXECUTOR_API: "execute"
}, yd = Pd.create({
  baseURL: Bd,
  withCredentials: !0
}), wd = {
  EDITOR_THEME: "EDITOR_THEME",
  EDITOR_CONTENT_DATA: "EDITOR_CONTENT_DATA"
}, B_ = () => {
  const [e, n] = rn([]);
  return {
    on: (r) => {
      Object.entries(r).forEach(([o, t]) => {
        const i = (_) => {
          if (_.altKey && _.key === o.toLowerCase())
            return _.preventDefault(), t?.(), !1;
        };
        n([...e, i]), document.addEventListener("keydown", i);
      });
    },
    clear: () => {
      e.forEach((r) => {
        document.removeEventListener("keydown", r);
      });
    }
  };
}, xd = (e = !1) => {
  const [n, r] = rn(e);
  return {
    off: () => r(!1),
    on: () => r(!0),
    toggle: () => r(!n),
    val: n
  };
}, Md = (e, n) => {
  const r = _e();
  return (...o) => {
    r.current && clearTimeout(r.current), r.current = setTimeout(() => {
      e(...o);
    }, n);
  };
}, kd = () => () => {
  if (!document.fullscreenElement)
    return document.documentElement.requestFullscreen();
  document.exitFullscreen && document.exitFullscreen();
}, jd = ({ when: e, children: n }) => e ? n : null;
var Nt, U, L_, an, si, y_, et, jr = {}, w_ = [], Fd = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Oo = Array.isArray;
function ze(e, n) {
  for (var r in n)
    e[r] = n[r];
  return e;
}
function x_(e) {
  var n = e.parentNode;
  n && n.removeChild(e);
}
function ai(e, n, r) {
  var o, t, i, _ = {};
  for (i in n)
    i == "key" ? o = n[i] : i == "ref" ? t = n[i] : _[i] = n[i];
  if (arguments.length > 2 && (_.children = arguments.length > 3 ? Nt.call(arguments, 2) : r), typeof e == "function" && e.defaultProps != null)
    for (i in e.defaultProps)
      _[i] === void 0 && (_[i] = e.defaultProps[i]);
  return Fr(e, _, o, t, null);
}
function Fr(e, n, r, o, t) {
  var i = { type: e, props: n, key: r, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: t ?? ++L_ };
  return t == null && U.vnode != null && U.vnode(i), i;
}
function Jn(e) {
  return e.children;
}
function je(e, n) {
  this.props = e, this.context = n;
}
function Qr(e, n) {
  if (n == null)
    return e.__ ? Qr(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var r; n < e.__k.length; n++)
    if ((r = e.__k[n]) != null && r.__e != null)
      return r.__e;
  return typeof e.type == "function" ? Qr(e) : null;
}
function M_(e) {
  var n, r;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, n = 0; n < e.__k.length; n++)
      if ((r = e.__k[n]) != null && r.__e != null) {
        e.__e = e.__c.base = r.__e;
        break;
      }
    return M_(e);
  }
}
function ui(e) {
  (!e.__d && (e.__d = !0) && an.push(e) && !Zr.__r++ || si !== U.debounceRendering) && ((si = U.debounceRendering) || y_)(Zr);
}
function Zr() {
  var e, n, r, o, t, i, _, s, a;
  for (an.sort(et); e = an.shift(); )
    e.__d && (n = an.length, o = void 0, t = void 0, i = void 0, s = (_ = (r = e).__v).__e, (a = r.__P) && (o = [], t = [], (i = ze({}, _)).__v = _.__v + 1, V_(a, _, i, r.__n, a.ownerSVGElement !== void 0, _.__h != null ? [s] : null, o, s ?? Qr(_), _.__h, t), Kd(o, _, t), _.__e != s && M_(_)), an.length > n && an.sort(et));
  Zr.__r = 0;
}
function k_(e, n, r, o, t, i, _, s, a, u, c) {
  var d, f, O, l, m, h, N, R, G, C, T = 0, H = o && o.__k || w_, M = H.length, z = M, P = n.length;
  for (r.__k = [], d = 0; d < P; d++)
    (l = r.__k[d] = (l = n[d]) == null || typeof l == "boolean" || typeof l == "function" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? Fr(null, l, null, null, l) : Oo(l) ? Fr(Jn, { children: l }, null, null, null) : l.__b > 0 ? Fr(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null && (l.__ = r, l.__b = r.__b + 1, (R = Vd(l, H, N = d + T, z)) === -1 ? O = jr : (O = H[R] || jr, H[R] = void 0, z--), V_(e, l, O, t, i, _, s, a, u, c), m = l.__e, (f = l.ref) && O.ref != f && (O.ref && It(O.ref, null, l), c.push(f, l.__c || m, l)), m != null && (h == null && (h = m), C = !(G = O === jr || O.__v === null) && R === N, G ? R == -1 && T-- : R !== N && (R === N + 1 ? (T++, C = !0) : R > N ? z > P - N ? (T += R - N, C = !0) : T-- : T = R < N && R == N - 1 ? R - N : 0), N = d + T, C = C || R == d && !G, typeof l.type != "function" || R === N && O.__k !== l.__k ? typeof l.type == "function" || C ? l.__d !== void 0 ? (a = l.__d, l.__d = void 0) : a = m.nextSibling : a = F_(e, m, a) : a = j_(l, a, e), typeof r.type == "function" && (r.__d = a)));
  for (r.__e = h, d = M; d--; )
    H[d] != null && (typeof r.type == "function" && H[d].__e != null && H[d].__e == r.__d && (r.__d = H[d].__e.nextSibling), X_(H[d], H[d]));
}
function j_(e, n, r) {
  for (var o, t = e.__k, i = 0; t && i < t.length; i++)
    (o = t[i]) && (o.__ = e, n = typeof o.type == "function" ? j_(o, n, r) : F_(r, o.__e, n));
  return n;
}
function eo(e, n) {
  return n = n || [], e == null || typeof e == "boolean" || (Oo(e) ? e.some(function(r) {
    eo(r, n);
  }) : n.push(e)), n;
}
function F_(e, n, r) {
  return r == null || r.parentNode !== e ? e.insertBefore(n, null) : n == r && n.parentNode != null || e.insertBefore(n, r), n.nextSibling;
}
function Vd(e, n, r, o) {
  var t = e.key, i = e.type, _ = r - 1, s = r + 1, a = n[r];
  if (a === null || a && t == a.key && i === a.type)
    return r;
  if (o > (a != null ? 1 : 0))
    for (; _ >= 0 || s < n.length; ) {
      if (_ >= 0) {
        if ((a = n[_]) && t == a.key && i === a.type)
          return _;
        _--;
      }
      if (s < n.length) {
        if ((a = n[s]) && t == a.key && i === a.type)
          return s;
        s++;
      }
    }
  return -1;
}
function Xd(e, n, r, o, t) {
  var i;
  for (i in r)
    i === "children" || i === "key" || i in n || no(e, i, null, r[i], o);
  for (i in n)
    t && typeof n[i] != "function" || i === "children" || i === "key" || i === "value" || i === "checked" || r[i] === n[i] || no(e, i, n[i], r[i], o);
}
function di(e, n, r) {
  n[0] === "-" ? e.setProperty(n, r ?? "") : e[n] = r == null ? "" : typeof r != "number" || Fd.test(n) ? r : r + "px";
}
function no(e, n, r, o, t) {
  var i;
  e:
    if (n === "style")
      if (typeof r == "string")
        e.style.cssText = r;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (n in o)
            r && n in r || di(e.style, n, "");
        if (r)
          for (n in r)
            o && r[n] === o[n] || di(e.style, n, r[n]);
      }
    else if (n[0] === "o" && n[1] === "n")
      i = n !== (n = n.replace(/Capture$/, "")), n = n.toLowerCase() in e ? n.toLowerCase().slice(2) : n.slice(2), e.l || (e.l = {}), e.l[n + i] = r, r ? o || e.addEventListener(n, i ? li : ci, i) : e.removeEventListener(n, i ? li : ci, i);
    else if (n !== "dangerouslySetInnerHTML") {
      if (t)
        n = n.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (n !== "width" && n !== "height" && n !== "href" && n !== "list" && n !== "form" && n !== "tabIndex" && n !== "download" && n !== "rowSpan" && n !== "colSpan" && n in e)
        try {
          e[n] = r ?? "";
          break e;
        } catch {
        }
      typeof r == "function" || (r == null || r === !1 && n[4] !== "-" ? e.removeAttribute(n) : e.setAttribute(n, r));
    }
}
function ci(e) {
  return this.l[e.type + !1](U.event ? U.event(e) : e);
}
function li(e) {
  return this.l[e.type + !0](U.event ? U.event(e) : e);
}
function V_(e, n, r, o, t, i, _, s, a, u) {
  var c, d, f, O, l, m, h, N, R, G, C, T, H, M, z, P = n.type;
  if (n.constructor !== void 0)
    return null;
  r.__h != null && (a = r.__h, s = n.__e = r.__e, n.__h = null, i = [s]), (c = U.__b) && c(n);
  try {
    e:
      if (typeof P == "function") {
        if (N = n.props, R = (c = P.contextType) && o[c.__c], G = c ? R ? R.props.value : c.__ : o, r.__c ? h = (d = n.__c = r.__c).__ = d.__E : ("prototype" in P && P.prototype.render ? n.__c = d = new P(N, G) : (n.__c = d = new je(N, G), d.constructor = P, d.render = Yd), R && R.sub(d), d.props = N, d.state || (d.state = {}), d.context = G, d.__n = o, f = d.__d = !0, d.__h = [], d._sb = []), d.__s == null && (d.__s = d.state), P.getDerivedStateFromProps != null && (d.__s == d.state && (d.__s = ze({}, d.__s)), ze(d.__s, P.getDerivedStateFromProps(N, d.__s))), O = d.props, l = d.state, d.__v = n, f)
          P.getDerivedStateFromProps == null && d.componentWillMount != null && d.componentWillMount(), d.componentDidMount != null && d.__h.push(d.componentDidMount);
        else {
          if (P.getDerivedStateFromProps == null && N !== O && d.componentWillReceiveProps != null && d.componentWillReceiveProps(N, G), !d.__e && (d.shouldComponentUpdate != null && d.shouldComponentUpdate(N, d.__s, G) === !1 || n.__v === r.__v)) {
            for (n.__v !== r.__v && (d.props = N, d.state = d.__s, d.__d = !1), n.__e = r.__e, n.__k = r.__k, n.__k.forEach(function(y) {
              y && (y.__ = n);
            }), C = 0; C < d._sb.length; C++)
              d.__h.push(d._sb[C]);
            d._sb = [], d.__h.length && _.push(d);
            break e;
          }
          d.componentWillUpdate != null && d.componentWillUpdate(N, d.__s, G), d.componentDidUpdate != null && d.__h.push(function() {
            d.componentDidUpdate(O, l, m);
          });
        }
        if (d.context = G, d.props = N, d.__P = e, d.__e = !1, T = U.__r, H = 0, "prototype" in P && P.prototype.render) {
          for (d.state = d.__s, d.__d = !1, T && T(n), c = d.render(d.props, d.state, d.context), M = 0; M < d._sb.length; M++)
            d.__h.push(d._sb[M]);
          d._sb = [];
        } else
          do
            d.__d = !1, T && T(n), c = d.render(d.props, d.state, d.context), d.state = d.__s;
          while (d.__d && ++H < 25);
        d.state = d.__s, d.getChildContext != null && (o = ze(ze({}, o), d.getChildContext())), f || d.getSnapshotBeforeUpdate == null || (m = d.getSnapshotBeforeUpdate(O, l)), k_(e, Oo(z = c != null && c.type === Jn && c.key == null ? c.props.children : c) ? z : [z], n, r, o, t, i, _, s, a, u), d.base = n.__e, n.__h = null, d.__h.length && _.push(d), h && (d.__E = d.__ = null);
      } else
        i == null && n.__v === r.__v ? (n.__k = r.__k, n.__e = r.__e) : n.__e = Wd(r.__e, n, r, o, t, i, _, a, u);
    (c = U.diffed) && c(n);
  } catch (y) {
    n.__v = null, (a || i != null) && (n.__e = s, n.__h = !!a, i[i.indexOf(s)] = null), U.__e(y, n, r);
  }
}
function Kd(e, n, r) {
  for (var o = 0; o < r.length; o++)
    It(r[o], r[++o], r[++o]);
  U.__c && U.__c(n, e), e.some(function(t) {
    try {
      e = t.__h, t.__h = [], e.some(function(i) {
        i.call(t);
      });
    } catch (i) {
      U.__e(i, t.__v);
    }
  });
}
function Wd(e, n, r, o, t, i, _, s, a) {
  var u, c, d, f = r.props, O = n.props, l = n.type, m = 0;
  if (l === "svg" && (t = !0), i != null) {
    for (; m < i.length; m++)
      if ((u = i[m]) && "setAttribute" in u == !!l && (l ? u.localName === l : u.nodeType === 3)) {
        e = u, i[m] = null;
        break;
      }
  }
  if (e == null) {
    if (l === null)
      return document.createTextNode(O);
    e = t ? document.createElementNS("http://www.w3.org/2000/svg", l) : document.createElement(l, O.is && O), i = null, s = !1;
  }
  if (l === null)
    f === O || s && e.data === O || (e.data = O);
  else {
    if (i = i && Nt.call(e.childNodes), c = (f = r.props || jr).dangerouslySetInnerHTML, d = O.dangerouslySetInnerHTML, !s) {
      if (i != null)
        for (f = {}, m = 0; m < e.attributes.length; m++)
          f[e.attributes[m].name] = e.attributes[m].value;
      (d || c) && (d && (c && d.__html == c.__html || d.__html === e.innerHTML) || (e.innerHTML = d && d.__html || ""));
    }
    if (Xd(e, O, f, t, s), d)
      n.__k = [];
    else if (k_(e, Oo(m = n.props.children) ? m : [m], n, r, o, t && l !== "foreignObject", i, _, i ? i[0] : r.__k && Qr(r, 0), s, a), i != null)
      for (m = i.length; m--; )
        i[m] != null && x_(i[m]);
    s || ("value" in O && (m = O.value) !== void 0 && (m !== e.value || l === "progress" && !m || l === "option" && m !== f.value) && no(e, "value", m, f.value, !1), "checked" in O && (m = O.checked) !== void 0 && m !== e.checked && no(e, "checked", m, f.checked, !1));
  }
  return e;
}
function It(e, n, r) {
  try {
    typeof e == "function" ? e(n) : e.current = n;
  } catch (o) {
    U.__e(o, r);
  }
}
function X_(e, n, r) {
  var o, t;
  if (U.unmount && U.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || It(o, null, n)), (o = e.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (i) {
        U.__e(i, n);
      }
    o.base = o.__P = null, e.__c = void 0;
  }
  if (o = e.__k)
    for (t = 0; t < o.length; t++)
      o[t] && X_(o[t], n, r || typeof e.type != "function");
  r || e.__e == null || x_(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Yd(e, n, r) {
  return this.constructor(e, r);
}
Nt = w_.slice, U = { __e: function(e, n, r, o) {
  for (var t, i, _; n = n.__; )
    if ((t = n.__c) && !t.__)
      try {
        if ((i = t.constructor) && i.getDerivedStateFromError != null && (t.setState(i.getDerivedStateFromError(e)), _ = t.__d), t.componentDidCatch != null && (t.componentDidCatch(e, o || {}), _ = t.__d), _)
          return t.__E = t;
      } catch (s) {
        e = s;
      }
  throw e;
} }, L_ = 0, je.prototype.setState = function(e, n) {
  var r;
  r = this.__s != null && this.__s !== this.state ? this.__s : this.__s = ze({}, this.state), typeof e == "function" && (e = e(ze({}, r), this.props)), e && ze(r, e), e != null && this.__v && (n && this._sb.push(n), ui(this));
}, je.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), ui(this));
}, je.prototype.render = Jn, an = [], y_ = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, et = function(e, n) {
  return e.__v.__b - n.__v.__b;
}, Zr.__r = 0;
var zn, q, Lo, mi, nt = 0, K_ = [], Vr = [], pi = U.__b, hi = U.__r, Ti = U.diffed, Ei = U.__c, fi = U.unmount;
function At(e, n) {
  U.__h && U.__h(q, e, nt || n), nt = 0;
  var r = q.__H || (q.__H = { __: [], __h: [] });
  return e >= r.__.length && r.__.push({ __V: Vr }), r.__[e];
}
function $d(e) {
  return nt = 1, Jd(W_, e);
}
function Jd(e, n, r) {
  var o = At(zn++, 2);
  if (o.t = e, !o.__c && (o.__ = [r ? r(n) : W_(void 0, n), function(s) {
    var a = o.__N ? o.__N[0] : o.__[0], u = o.t(a, s);
    a !== u && (o.__N = [u, o.__[1]], o.__c.setState({}));
  }], o.__c = q, !q.u)) {
    var t = function(s, a, u) {
      if (!o.__c.__H)
        return !0;
      var c = o.__c.__H.__.filter(function(f) {
        return f.__c;
      });
      if (c.every(function(f) {
        return !f.__N;
      }))
        return !i || i.call(this, s, a, u);
      var d = !1;
      return c.forEach(function(f) {
        if (f.__N) {
          var O = f.__[0];
          f.__ = f.__N, f.__N = void 0, O !== f.__[0] && (d = !0);
        }
      }), !(!d && o.__c.props === s) && (!i || i.call(this, s, a, u));
    };
    q.u = !0;
    var i = q.shouldComponentUpdate, _ = q.componentWillUpdate;
    q.componentWillUpdate = function(s, a, u) {
      if (this.__e) {
        var c = i;
        i = void 0, t(s, a, u), i = c;
      }
      _ && _.call(this, s, a, u);
    }, q.shouldComponentUpdate = t;
  }
  return o.__N || o.__;
}
function zd(e, n) {
  var r = At(zn++, 3);
  !U.__s && ec(r.__H, n) && (r.__ = e, r.i = n, q.__H.__h.push(r));
}
function qd(e) {
  var n = At(zn++, 10), r = $d();
  return n.__ = e, q.componentDidCatch || (q.componentDidCatch = function(o, t) {
    n.__ && n.__(o, t), r[1](o);
  }), [r[0], function() {
    r[1](void 0);
  }];
}
function Qd() {
  for (var e; e = K_.shift(); )
    if (e.__P && e.__H)
      try {
        e.__H.__h.forEach(Xr), e.__H.__h.forEach(rt), e.__H.__h = [];
      } catch (n) {
        e.__H.__h = [], U.__e(n, e.__v);
      }
}
U.__b = function(e) {
  q = null, pi && pi(e);
}, U.__r = function(e) {
  hi && hi(e), zn = 0;
  var n = (q = e.__c).__H;
  n && (Lo === q ? (n.__h = [], q.__h = [], n.__.forEach(function(r) {
    r.__N && (r.__ = r.__N), r.__V = Vr, r.__N = r.i = void 0;
  })) : (n.__h.forEach(Xr), n.__h.forEach(rt), n.__h = [], zn = 0)), Lo = q;
}, U.diffed = function(e) {
  Ti && Ti(e);
  var n = e.__c;
  n && n.__H && (n.__H.__h.length && (K_.push(n) !== 1 && mi === U.requestAnimationFrame || ((mi = U.requestAnimationFrame) || Zd)(Qd)), n.__H.__.forEach(function(r) {
    r.i && (r.__H = r.i), r.__V !== Vr && (r.__ = r.__V), r.i = void 0, r.__V = Vr;
  })), Lo = q = null;
}, U.__c = function(e, n) {
  n.some(function(r) {
    try {
      r.__h.forEach(Xr), r.__h = r.__h.filter(function(o) {
        return !o.__ || rt(o);
      });
    } catch (o) {
      n.some(function(t) {
        t.__h && (t.__h = []);
      }), n = [], U.__e(o, r.__v);
    }
  }), Ei && Ei(e, n);
}, U.unmount = function(e) {
  fi && fi(e);
  var n, r = e.__c;
  r && r.__H && (r.__H.__.forEach(function(o) {
    try {
      Xr(o);
    } catch (t) {
      n = t;
    }
  }), r.__H = void 0, n && U.__e(n, r.__v));
};
var Oi = typeof requestAnimationFrame == "function";
function Zd(e) {
  var n, r = function() {
    clearTimeout(o), Oi && cancelAnimationFrame(n), setTimeout(e);
  }, o = setTimeout(r, 100);
  Oi && (n = requestAnimationFrame(r));
}
function Xr(e) {
  var n = q, r = e.__c;
  typeof r == "function" && (e.__c = void 0, r()), q = n;
}
function rt(e) {
  var n = q;
  e.__c = e.__(), q = n;
}
function ec(e, n) {
  return !e || e.length !== n.length || n.some(function(r, o) {
    return r !== e[o];
  });
}
function W_(e, n) {
  return typeof n == "function" ? n(e) : n;
}
const nc = ({ errorInfo: e }) => /* @__PURE__ */ Ce("div", { children: [
  "Custom Error Boundary. ",
  /* @__PURE__ */ w("br", {})
] }), rc = ({ children: e }) => {
  const [n] = qd();
  return console.error(n), n ? /* @__PURE__ */ w(nc, { errorInfo: n }) : /* @__PURE__ */ w(la, { children: e });
}, oc = ({ children: e }) => /* @__PURE__ */ w(rc, { children: e }), ot = (e) => typeof e == "object" && e !== null, Y_ = (e) => typeof e == "string", tc = (e) => typeof e == "function";
class gt {
  get(n, r) {
    const o = localStorage.getItem(n);
    return o ? ic(o) ? JSON.parse(o) : o : r;
  }
  set(n, r) {
    if (n in wd) {
      if (Y_(r))
        return localStorage.setItem(n, r);
      localStorage.setItem(n, JSON.stringify(r));
    }
  }
}
const ic = (e) => {
  try {
    JSON.parse(e);
  } catch {
    return !1;
  }
  return !0;
};
var $_ = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, Ri = ee.createContext && ee.createContext($_), Ze = globalThis && globalThis.__assign || function() {
  return Ze = Object.assign || function(e) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var t in n)
        Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
    }
    return e;
  }, Ze.apply(this, arguments);
}, _c = globalThis && globalThis.__rest || function(e, n) {
  var r = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && n.indexOf(o) < 0 && (r[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var t = 0, o = Object.getOwnPropertySymbols(e); t < o.length; t++)
      n.indexOf(o[t]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[t]) && (r[o[t]] = e[o[t]]);
  return r;
};
function J_(e) {
  return e && e.map(function(n, r) {
    return ee.createElement(n.tag, Ze({
      key: r
    }, n.attr), J_(n.child));
  });
}
function Ln(e) {
  return function(n) {
    return ee.createElement(sc, Ze({
      attr: Ze({}, e.attr)
    }, n), J_(e.child));
  };
}
function sc(e) {
  var n = function(r) {
    var o = e.attr, t = e.size, i = e.title, _ = _c(e, ["attr", "size", "title"]), s = t || r.size || "1em", a;
    return r.className && (a = r.className), e.className && (a = (a ? a + " " : "") + e.className), ee.createElement("svg", Ze({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, r.attr, o, _, {
      className: a,
      style: Ze(Ze({
        color: e.color || r.color
      }, r.style), e.style),
      height: s,
      width: s,
      xmlns: "http://www.w3.org/2000/svg"
    }), i && ee.createElement("title", null, i), e.children);
  };
  return Ri !== void 0 ? ee.createElement(Ri.Consumer, null, function(r) {
    return n(r);
  }) : n($_);
}
function ac(e) {
  return Ln({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { d: "M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" } }] })(e);
}
function uc(e) {
  return Ln({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M9.25 12a.75.75 0 0 1-.22.53l-2.75 2.75a.75.75 0 0 1-1.06-1.06L7.44 12 5.22 9.78a.75.75 0 1 1 1.06-1.06l2.75 2.75c.141.14.22.331.22.53Zm2 2a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5h-5Z" } }, { tag: "path", attr: { d: "M0 4.75C0 3.784.784 3 1.75 3h20.5c.966 0 1.75.784 1.75 1.75v14.5A1.75 1.75 0 0 1 22.25 21H1.75A1.75 1.75 0 0 1 0 19.25Zm1.75-.25a.25.25 0 0 0-.25.25v14.5c0 .138.112.25.25.25h20.5a.25.25 0 0 0 .25-.25V4.75a.25.25 0 0 0-.25-.25Z" } }] })(e);
}
function dc(e) {
  return Ln({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01v0a2.83 2.83 0 0 1 0-4L17 3" } }, { tag: "path", attr: { d: "m16 2 6 6" } }, { tag: "path", attr: { d: "M12 16H4" } }] })(e);
}
function cc(e) {
  return Ln({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M685.904 383.184l275.264-273.572-.896 155.072c-.289 12.928 9.967 24.176 22.912 23.888l16.416-.016c12.944-.304 23.648-8 23.92-20.928l.672-231.008c0-.223-.88-.399-.88-.623l1.264-11.712c.128-6.496-1.391-12.288-5.584-16.431-4.143-4.176-9.951-6.72-16.4-6.544l-11.696.272c-.223 0-.399.08-.64.113L760.77.687c-12.928.288-23.632 10.976-23.92 23.92l-.032 16.417c1.967 15.248 13.952 24.16 26.88 23.872l151.248.4L640.657 337.92c-12.496 12.496-12.496 32.752 0 45.264 12.496 12.48 32.752 12.48 45.247 0zM339.088 640.812L63.825 913.532l.88-154.224c.304-12.944-9.969-24.192-22.897-23.904l-17.423.032c-12.96.32-23.649 8-23.921 20.944l-.672 231.008c0 .224.88.367.88.623l-1.264 11.68c-.144 6.496 1.376 12.32 5.584 16.433 4.128 4.192 9.952 6.72 16.384 6.56l11.712-.288c.223 0 .383-.096.64-.096l230.495 1.008c12.928-.32 23.617-11.009 23.92-23.936l.032-16.432c-1.967-15.216-13.952-24.16-26.88-23.872l-151.247-.4L384.32 686.076c12.496-12.497 12.496-32.752 0-45.248s-32.737-12.512-45.233-.016zm685.122 346.56l-.672-231.01c-.288-12.944-10.992-20.624-23.92-20.944l-16.416-.032c-12.944-.289-23.184 10.975-22.912 23.903l.896 155.072-275.28-273.552c-12.496-12.496-32.752-12.496-45.248 0s-12.496 32.752 0 45.248L914.93 958.649l-151.232.4c-12.928-.288-24.912 8.657-26.88 23.872l.032 16.432c.304 12.944 11.008 23.633 23.92 23.936l229.504-1.007c.24 0 .416.095.64.095l11.696.288c6.448.16 12.272-2.368 16.4-6.56 4.193-4.128 5.696-9.936 5.584-16.432l-1.263-11.68c0-.255.88-.399.88-.622zM110.049 65.321l151.264-.397c12.928.288 24.912-8.64 26.88-23.873l-.032-16.431C287.84 11.677 277.15.972 264.24.7l-230.512.992c-.256-.032-.416-.112-.64-.112l-11.712-.273C14.945 1.132 9.105 3.676 4.992 7.851.784 11.995-.735 17.787-.592 24.283L.672 35.995c0 .223-.88.384-.88.624l.672 231.008c.288 12.928 10.977 20.624 23.921 20.928l17.424.015c12.928.288 23.183-10.96 22.895-23.888l-.88-154.224 275.264 272.72c12.48 12.497 32.753 12.497 45.25 0s12.496-32.768 0-45.264z" } }] })(e);
}
function lc(e) {
  return Ln({ tag: "svg", attr: { version: "1.1", viewBox: "0 0 17 17" }, child: [{ tag: "g", attr: {}, child: [] }, { tag: "path", attr: { d: "M8.5 5.972c-1.378 0-2.5 1.122-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.122 2.5-2.5-1.122-2.5-2.5-2.5zM8.5 9.972c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5 1.5 0.673 1.5 1.5-0.673 1.5-1.5 1.5zM16.94 9.446c0.037-0.321 0.060-0.645 0.060-0.974s-0.023-0.653-0.060-0.974l-2.588-0.778c-0.119-0.402-0.278-0.787-0.474-1.149l1.279-2.377c-0.406-0.51-0.869-0.973-1.38-1.38l-2.377 1.28c-0.363-0.196-0.748-0.354-1.15-0.474l-0.776-2.588c-0.32-0.037-0.644-0.060-0.974-0.060s-0.654 0.023-0.974 0.060l-0.776 2.588c-0.403 0.119-0.789 0.278-1.15 0.475l-2.377-1.28c-0.511 0.406-0.974 0.869-1.379 1.38l1.279 2.375c-0.196 0.362-0.354 0.748-0.474 1.15l-2.589 0.778c-0.037 0.32-0.060 0.644-0.060 0.974s0.023 0.654 0.060 0.974l2.588 0.776c0.12 0.403 0.278 0.789 0.474 1.151l-1.279 2.376c0.406 0.511 0.869 0.974 1.38 1.38l2.377-1.279c0.362 0.196 0.748 0.354 1.15 0.474l0.776 2.588c0.321 0.037 0.645 0.060 0.974 0.060s0.654-0.023 0.974-0.060l0.776-2.588c0.402-0.12 0.788-0.278 1.15-0.474l2.376 1.279c0.511-0.407 0.974-0.87 1.38-1.381l-1.278-2.376c0.196-0.362 0.354-0.748 0.474-1.15l2.588-0.776zM13.548 9.419l-0.154 0.518c-0.1 0.337-0.233 0.66-0.396 0.959l-0.256 0.475 0.255 0.475 0.952 1.77c-0.099 0.105-0.201 0.207-0.306 0.306l-2.243-1.209-0.475 0.256c-0.301 0.163-0.624 0.295-0.96 0.396l-0.518 0.154-0.155 0.518-0.579 1.932c-0.072 0.002-0.143 0.003-0.213 0.003s-0.141-0.001-0.213-0.003l-0.579-1.932-0.155-0.518-0.518-0.154c-0.336-0.1-0.659-0.233-0.959-0.396l-0.475-0.256-2.245 1.207c-0.104-0.099-0.207-0.201-0.306-0.306l1.208-2.244-0.256-0.475c-0.162-0.3-0.295-0.623-0.396-0.96l-0.153-0.517-2.449-0.734c-0.003-0.072-0.004-0.143-0.004-0.212 0-0.070 0.001-0.141 0.004-0.213l2.448-0.734 0.154-0.518c0.1-0.337 0.233-0.66 0.396-0.959l0.256-0.475-1.208-2.245c0.099-0.104 0.201-0.207 0.305-0.306l2.247 1.21 0.476-0.259c0.297-0.162 0.619-0.295 0.956-0.395l0.518-0.154 0.155-0.518 0.579-1.932c0.073-0.001 0.144-0.002 0.214-0.002s0.141 0.001 0.213 0.003l0.579 1.932 0.155 0.518 0.518 0.154c0.335 0.1 0.659 0.233 0.96 0.396l0.475 0.255 2.244-1.208c0.104 0.099 0.207 0.201 0.306 0.306l-0.953 1.77-0.255 0.475 0.257 0.475c0.163 0.3 0.295 0.622 0.395 0.957l0.154 0.518 0.518 0.155 1.932 0.581c0.001 0.072 0.002 0.143 0.002 0.213s-0.001 0.141-0.004 0.213l-2.448 0.734z" } }] })(e);
}
function mc(e) {
  return Ln({ tag: "svg", attr: { viewBox: "0 0 16 16", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M3.78 2L3 2.41v12l.78.42 9-6V8l-9-6zM4 13.48V3.35l7.6 5.07L4 13.48z" } }] })(e);
}
const pc = () => {
  const e = kd();
  return /* @__PURE__ */ Ce(Tu, { children: [
    /* @__PURE__ */ Ce("div", { children: [
      /* @__PURE__ */ w(En, { children: /* @__PURE__ */ w(ac, {}) }),
      /* @__PURE__ */ w(En, { onClick: e, children: /* @__PURE__ */ w(cc, {}) }),
      /* @__PURE__ */ w(En, { children: /* @__PURE__ */ w(uc, {}) }),
      /* @__PURE__ */ w(En, { children: /* @__PURE__ */ w(dc, {}) })
    ] }),
    /* @__PURE__ */ w("div", { children: /* @__PURE__ */ w(En, { children: /* @__PURE__ */ w(lc, {}) }) })
  ] });
};
function k(e) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
    r[o - 1] = arguments[o];
  throw new Error(typeof e == "number" ? "[MobX] minified error nr: " + e + (r.length ? " " + r.map(String).join(",") : "") + ". Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts" : "[MobX] " + e);
}
var hc = {};
function Gt() {
  return typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : hc;
}
var z_ = Object.assign, ro = Object.getOwnPropertyDescriptor, Be = Object.defineProperty, sr = Object.prototype, tt = [];
Object.freeze(tt);
var q_ = {};
Object.freeze(q_);
var Tc = typeof Proxy < "u", Ec = /* @__PURE__ */ Object.toString();
function Q_() {
  Tc || k("Proxy not available");
}
function Z_(e) {
  var n = !1;
  return function() {
    if (!n)
      return n = !0, e.apply(this, arguments);
  };
}
var Rn = function() {
};
function ve(e) {
  return typeof e == "function";
}
function cn(e) {
  var n = typeof e;
  switch (n) {
    case "string":
    case "symbol":
    case "number":
      return !0;
  }
  return !1;
}
function Ro(e) {
  return e !== null && typeof e == "object";
}
function Xe(e) {
  if (!Ro(e))
    return !1;
  var n = Object.getPrototypeOf(e);
  if (n == null)
    return !0;
  var r = Object.hasOwnProperty.call(n, "constructor") && n.constructor;
  return typeof r == "function" && r.toString() === Ec;
}
function es(e) {
  var n = e?.constructor;
  return n ? n.name === "GeneratorFunction" || n.displayName === "GeneratorFunction" : !1;
}
function ar(e, n, r) {
  Be(e, n, {
    enumerable: !1,
    writable: !0,
    configurable: !0,
    value: r
  });
}
function ns(e, n, r) {
  Be(e, n, {
    enumerable: !1,
    writable: !1,
    configurable: !0,
    value: r
  });
}
function tn(e, n) {
  var r = "isMobX" + e;
  return n.prototype[r] = !0, function(o) {
    return Ro(o) && o[r] === !0;
  };
}
function yn(e) {
  return e instanceof Map;
}
function ur(e) {
  return e instanceof Set;
}
var rs = typeof Object.getOwnPropertySymbols < "u";
function fc(e) {
  var n = Object.keys(e);
  if (!rs)
    return n;
  var r = Object.getOwnPropertySymbols(e);
  return r.length ? [].concat(n, r.filter(function(o) {
    return sr.propertyIsEnumerable.call(e, o);
  })) : n;
}
var Cn = typeof Reflect < "u" && Reflect.ownKeys ? Reflect.ownKeys : rs ? function(e) {
  return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
} : (
  /* istanbul ignore next */
  Object.getOwnPropertyNames
);
function os(e) {
  return e === null ? null : typeof e == "object" ? "" + e : e;
}
function Fe(e, n) {
  return sr.hasOwnProperty.call(e, n);
}
var Oc = Object.getOwnPropertyDescriptors || function(n) {
  var r = {};
  return Cn(n).forEach(function(o) {
    r[o] = ro(n, o);
  }), r;
};
function bi(e, n) {
  for (var r = 0; r < n.length; r++) {
    var o = n[r];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, Nc(o.key), o);
  }
}
function St(e, n, r) {
  return n && bi(e.prototype, n), r && bi(e, r), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function Un() {
  return Un = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var o in r)
        Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
    }
    return e;
  }, Un.apply(this, arguments);
}
function ts(e, n) {
  e.prototype = Object.create(n.prototype), e.prototype.constructor = e, it(e, n);
}
function it(e, n) {
  return it = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o, t) {
    return o.__proto__ = t, o;
  }, it(e, n);
}
function yo(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Rc(e, n) {
  if (e) {
    if (typeof e == "string")
      return Ni(e, n);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Ni(e, n);
  }
}
function Ni(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var r = 0, o = new Array(n); r < n; r++)
    o[r] = e[r];
  return o;
}
function bn(e, n) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r)
    return (r = r.call(e)).next.bind(r);
  if (Array.isArray(e) || (r = Rc(e)) || n && e && typeof e.length == "number") {
    r && (e = r);
    var o = 0;
    return function() {
      return o >= e.length ? {
        done: !0
      } : {
        done: !1,
        value: e[o++]
      };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function bc(e, n) {
  if (typeof e != "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var o = r.call(e, n || "default");
    if (typeof o != "object")
      return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(e);
}
function Nc(e) {
  var n = bc(e, "string");
  return typeof n == "symbol" ? n : String(n);
}
var Pe = /* @__PURE__ */ Symbol("mobx-stored-annotations");
function Le(e) {
  function n(r, o) {
    dr(r, o, e);
  }
  return Object.assign(n, e);
}
function dr(e, n, r) {
  Fe(e, Pe) || ar(e, Pe, Un({}, e[Pe])), vc(r) || (e[Pe][n] = r);
}
function Ic(e) {
  return Fe(e, Pe) || ar(e, Pe, Un({}, e[Pe])), e[Pe];
}
var v = /* @__PURE__ */ Symbol("mobx administration"), cr = /* @__PURE__ */ function() {
  function e(r) {
    r === void 0 && (r = "Atom"), this.name_ = void 0, this.isPendingUnobservation_ = !1, this.isBeingObserved_ = !1, this.observers_ = /* @__PURE__ */ new Set(), this.diffValue_ = 0, this.lastAccessedBy_ = 0, this.lowestObserverState_ = V.NOT_TRACKING_, this.onBOL = void 0, this.onBUOL = void 0, this.name_ = r;
  }
  var n = e.prototype;
  return n.onBO = function() {
    this.onBOL && this.onBOL.forEach(function(o) {
      return o();
    });
  }, n.onBUO = function() {
    this.onBUOL && this.onBUOL.forEach(function(o) {
      return o();
    });
  }, n.reportObserved = function() {
    return As(this);
  }, n.reportChanged = function() {
    Oe(), gs(this), b.stateVersion = b.stateVersion < Number.MAX_SAFE_INTEGER ? b.stateVersion + 1 : Number.MIN_SAFE_INTEGER, Re();
  }, n.toString = function() {
    return this.name_;
  }, e;
}(), Ct = /* @__PURE__ */ tn("Atom", cr);
function is(e, n, r) {
  n === void 0 && (n = Rn), r === void 0 && (r = Rn);
  var o = new cr(e);
  return n !== Rn && Dl(o, n), r !== Rn && Ds(o, r), o;
}
function Ac(e, n) {
  return e === n;
}
function gc(e, n) {
  return Lt(e, n);
}
function Gc(e, n) {
  return Lt(e, n, 1);
}
function Sc(e, n) {
  return Object.is ? Object.is(e, n) : e === n ? e !== 0 || 1 / e === 1 / n : e !== e && n !== n;
}
var oo = {
  identity: Ac,
  structural: gc,
  default: Sc,
  shallow: Gc
};
function Hn(e, n, r) {
  return Dt(e) ? e : Array.isArray(e) ? ce.array(e, {
    name: r
  }) : Xe(e) ? ce.object(e, void 0, {
    name: r
  }) : yn(e) ? ce.map(e, {
    name: r
  }) : ur(e) ? ce.set(e, {
    name: r
  }) : typeof e == "function" && !vt(e) && !so(e) ? es(e) ? er(e) : Zn(r, e) : e;
}
function Cc(e, n, r) {
  if (e == null || Dn(e) || fr(e) || sn(e) || pn(e))
    return e;
  if (Array.isArray(e))
    return ce.array(e, {
      name: r,
      deep: !1
    });
  if (Xe(e))
    return ce.object(e, void 0, {
      name: r,
      deep: !1
    });
  if (yn(e))
    return ce.map(e, {
      name: r,
      deep: !1
    });
  if (ur(e))
    return ce.set(e, {
      name: r,
      deep: !1
    });
}
function bo(e) {
  return e;
}
function Uc(e, n) {
  return Lt(e, n) ? n : e;
}
var Hc = "override";
function vc(e) {
  return e.annotationType_ === Hc;
}
function lr(e, n) {
  return {
    annotationType_: e,
    options_: n,
    make_: Dc,
    extend_: Pc
  };
}
function Dc(e, n, r, o) {
  var t;
  if ((t = this.options_) != null && t.bound)
    return this.extend_(e, n, r, !1) === null ? 0 : 1;
  if (o === e.target_)
    return this.extend_(e, n, r, !1) === null ? 0 : 2;
  if (vt(r.value))
    return 1;
  var i = _s(e, this, n, r, !1);
  return Be(o, n, i), 2;
}
function Pc(e, n, r, o) {
  var t = _s(e, this, n, r);
  return e.defineProperty_(n, t, o);
}
function Bc(e, n, r, o) {
  n.annotationType_, o.value;
}
function _s(e, n, r, o, t) {
  var i, _, s, a, u, c, d;
  t === void 0 && (t = b.safeDescriptors), Bc(e, n, r, o);
  var f = o.value;
  if ((i = n.options_) != null && i.bound) {
    var O;
    f = f.bind((O = e.proxy_) != null ? O : e.target_);
  }
  return {
    value: vn(
      (_ = (s = n.options_) == null ? void 0 : s.name) != null ? _ : r.toString(),
      f,
      (a = (u = n.options_) == null ? void 0 : u.autoAction) != null ? a : !1,
      // https://github.com/mobxjs/mobx/discussions/3140
      (c = n.options_) != null && c.bound ? (d = e.proxy_) != null ? d : e.target_ : void 0
    ),
    // Non-configurable for classes
    // prevents accidental field redefinition in subclass
    configurable: t ? e.isPlainObject_ : !0,
    // https://github.com/mobxjs/mobx/pull/2641#issuecomment-737292058
    enumerable: !1,
    // Non-obsevable, therefore non-writable
    // Also prevents rewriting in subclass constructor
    writable: !t
  };
}
function ss(e, n) {
  return {
    annotationType_: e,
    options_: n,
    make_: Lc,
    extend_: yc
  };
}
function Lc(e, n, r, o) {
  var t;
  if (o === e.target_)
    return this.extend_(e, n, r, !1) === null ? 0 : 2;
  if ((t = this.options_) != null && t.bound && (!Fe(e.target_, n) || !so(e.target_[n])) && this.extend_(e, n, r, !1) === null)
    return 0;
  if (so(r.value))
    return 1;
  var i = as(e, this, n, r, !1, !1);
  return Be(o, n, i), 2;
}
function yc(e, n, r, o) {
  var t, i = as(e, this, n, r, (t = this.options_) == null ? void 0 : t.bound);
  return e.defineProperty_(n, i, o);
}
function wc(e, n, r, o) {
  n.annotationType_, o.value;
}
function as(e, n, r, o, t, i) {
  i === void 0 && (i = b.safeDescriptors), wc(e, n, r, o);
  var _ = o.value;
  if (so(_) || (_ = er(_)), t) {
    var s;
    _ = _.bind((s = e.proxy_) != null ? s : e.target_), _.isMobXFlow = !0;
  }
  return {
    value: _,
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
function Ut(e, n) {
  return {
    annotationType_: e,
    options_: n,
    make_: xc,
    extend_: Mc
  };
}
function xc(e, n, r) {
  return this.extend_(e, n, r, !1) === null ? 0 : 1;
}
function Mc(e, n, r, o) {
  return kc(e, this, n, r), e.defineComputedProperty_(n, Un({}, this.options_, {
    get: r.get,
    set: r.set
  }), o);
}
function kc(e, n, r, o) {
  n.annotationType_, o.get;
}
function No(e, n) {
  return {
    annotationType_: e,
    options_: n,
    make_: jc,
    extend_: Fc
  };
}
function jc(e, n, r) {
  return this.extend_(e, n, r, !1) === null ? 0 : 1;
}
function Fc(e, n, r, o) {
  var t, i;
  return Vc(e, this), e.defineObservableProperty_(n, r.value, (t = (i = this.options_) == null ? void 0 : i.enhancer) != null ? t : Hn, o);
}
function Vc(e, n, r, o) {
  n.annotationType_;
}
var Xc = "true", Kc = /* @__PURE__ */ us();
function us(e) {
  return {
    annotationType_: Xc,
    options_: e,
    make_: Wc,
    extend_: Yc
  };
}
function Wc(e, n, r, o) {
  var t, i;
  if (r.get)
    return Io.make_(e, n, r, o);
  if (r.set) {
    var _ = vn(n.toString(), r.set);
    return o === e.target_ ? e.defineProperty_(n, {
      configurable: b.safeDescriptors ? e.isPlainObject_ : !0,
      set: _
    }) === null ? 0 : 2 : (Be(o, n, {
      configurable: !0,
      set: _
    }), 2);
  }
  if (o !== e.target_ && typeof r.value == "function") {
    var s;
    if (es(r.value)) {
      var a, u = (a = this.options_) != null && a.autoBind ? er.bound : er;
      return u.make_(e, n, r, o);
    }
    var c = (s = this.options_) != null && s.autoBind ? Zn.bound : Zn;
    return c.make_(e, n, r, o);
  }
  var d = ((t = this.options_) == null ? void 0 : t.deep) === !1 ? ce.ref : ce;
  if (typeof r.value == "function" && (i = this.options_) != null && i.autoBind) {
    var f;
    r.value = r.value.bind((f = e.proxy_) != null ? f : e.target_);
  }
  return d.make_(e, n, r, o);
}
function Yc(e, n, r, o) {
  var t, i;
  if (r.get)
    return Io.extend_(e, n, r, o);
  if (r.set)
    return e.defineProperty_(n, {
      configurable: b.safeDescriptors ? e.isPlainObject_ : !0,
      set: vn(n.toString(), r.set)
    }, o);
  if (typeof r.value == "function" && (t = this.options_) != null && t.autoBind) {
    var _;
    r.value = r.value.bind((_ = e.proxy_) != null ? _ : e.target_);
  }
  var s = ((i = this.options_) == null ? void 0 : i.deep) === !1 ? ce.ref : ce;
  return s.extend_(e, n, r, o);
}
var $c = "observable", Jc = "observable.ref", zc = "observable.shallow", qc = "observable.struct", ds = {
  deep: !0,
  name: void 0,
  defaultDecorator: void 0,
  proxy: !0
};
Object.freeze(ds);
function Sr(e) {
  return e || ds;
}
var cs = /* @__PURE__ */ No($c), Qc = /* @__PURE__ */ No(Jc, {
  enhancer: bo
}), Zc = /* @__PURE__ */ No(zc, {
  enhancer: Cc
}), el = /* @__PURE__ */ No(qc, {
  enhancer: Uc
}), ls = /* @__PURE__ */ Le(cs);
function Cr(e) {
  return e.deep === !0 ? Hn : e.deep === !1 ? bo : rl(e.defaultDecorator);
}
function nl(e) {
  var n;
  return e ? (n = e.defaultDecorator) != null ? n : us(e) : void 0;
}
function rl(e) {
  var n, r;
  return e && (n = (r = e.options_) == null ? void 0 : r.enhancer) != null ? n : Hn;
}
function ms(e, n, r) {
  if (cn(n)) {
    dr(e, n, cs);
    return;
  }
  return Dt(e) ? e : Xe(e) ? ce.object(e, n, r) : Array.isArray(e) ? ce.array(e, n) : yn(e) ? ce.map(e, n) : ur(e) ? ce.set(e, n) : typeof e == "object" && e !== null ? e : ce.box(e, n);
}
z_(ms, ls);
var ol = {
  box: function(n, r) {
    var o = Sr(r);
    return new un(n, Cr(o), o.name, !0, o.equals);
  },
  array: function(n, r) {
    var o = Sr(r);
    return (b.useProxies === !1 || o.proxy === !1 ? tm : Jl)(n, Cr(o), o.name);
  },
  map: function(n, r) {
    var o = Sr(r);
    return new js(n, Cr(o), o.name);
  },
  set: function(n, r) {
    var o = Sr(r);
    return new Xs(n, Cr(o), o.name);
  },
  object: function(n, r, o) {
    return Bs(b.useProxies === !1 || o?.proxy === !1 ? Or({}, o) : Kl({}, o), n, r);
  },
  ref: /* @__PURE__ */ Le(Qc),
  shallow: /* @__PURE__ */ Le(Zc),
  deep: ls,
  struct: /* @__PURE__ */ Le(el)
}, ce = /* @__PURE__ */ z_(ms, ol), ps = "computed", tl = "computed.struct", hs = /* @__PURE__ */ Ut(ps), il = /* @__PURE__ */ Ut(tl, {
  equals: oo.structural
}), Io = function(n, r) {
  if (cn(r))
    return dr(n, r, hs);
  if (Xe(n))
    return Le(Ut(ps, n));
  var o = Xe(r) ? r : {};
  return o.get = n, o.name || (o.name = n.name || ""), new qn(o);
};
Object.assign(Io, hs);
Io.struct = /* @__PURE__ */ Le(il);
var Ii, Ai, to = 0, _l = 1, sl = (Ii = (Ai = /* @__PURE__ */ ro(function() {
}, "name")) == null ? void 0 : Ai.configurable) != null ? Ii : !1, gi = {
  value: "action",
  configurable: !0,
  writable: !1,
  enumerable: !1
};
function vn(e, n, r, o) {
  r === void 0 && (r = !1);
  function t() {
    return al(e, r, n, o || this, arguments);
  }
  return t.isMobxAction = !0, sl && (gi.value = e, Be(t, "name", gi)), t;
}
function al(e, n, r, o, t) {
  var i = ul(e, n);
  try {
    return r.apply(o, t);
  } catch (_) {
    throw i.error_ = _, _;
  } finally {
    dl(i);
  }
}
function ul(e, n, r, o) {
  var t = !1, i = 0, _ = b.trackingDerivation, s = !n || !_;
  Oe();
  var a = b.allowStateChanges;
  s && (wn(), a = mr(!0));
  var u = Ht(!0), c = {
    runAsAction_: s,
    prevDerivation_: _,
    prevAllowStateChanges_: a,
    prevAllowStateReads_: u,
    notifySpy_: t,
    startTime_: i,
    actionId_: _l++,
    parentActionId_: to
  };
  return to = c.actionId_, c;
}
function dl(e) {
  to !== e.actionId_ && k(30), to = e.parentActionId_, e.error_ !== void 0 && (b.suppressReactionErrors = !0), pr(e.prevAllowStateChanges_), Xn(e.prevAllowStateReads_), Re(), e.runAsAction_ && en(e.prevDerivation_), b.suppressReactionErrors = !1;
}
function cl(e, n) {
  var r = mr(e);
  try {
    return n();
  } finally {
    pr(r);
  }
}
function mr(e) {
  var n = b.allowStateChanges;
  return b.allowStateChanges = e, n;
}
function pr(e) {
  b.allowStateChanges = e;
}
var Ts;
Ts = Symbol.toPrimitive;
var un = /* @__PURE__ */ function(e) {
  ts(n, e);
  function n(o, t, i, _, s) {
    var a;
    return i === void 0 && (i = "ObservableValue"), s === void 0 && (s = oo.default), a = e.call(this, i) || this, a.enhancer = void 0, a.name_ = void 0, a.equals = void 0, a.hasUnreportedChange_ = !1, a.interceptors_ = void 0, a.changeListeners_ = void 0, a.value_ = void 0, a.dehancer = void 0, a.enhancer = t, a.name_ = i, a.equals = s, a.value_ = t(o, void 0, i), a;
  }
  var r = n.prototype;
  return r.dehanceValue = function(t) {
    return this.dehancer !== void 0 ? this.dehancer(t) : t;
  }, r.set = function(t) {
    this.value_, t = this.prepareNewValue_(t), t !== b.UNCHANGED && this.setNewValue_(t);
  }, r.prepareNewValue_ = function(t) {
    if (Ie(this)) {
      var i = Ae(this, {
        object: this,
        type: ye,
        newValue: t
      });
      if (!i)
        return b.UNCHANGED;
      t = i.newValue;
    }
    return t = this.enhancer(t, this.value_, this.name_), this.equals(this.value_, t) ? b.UNCHANGED : t;
  }, r.setNewValue_ = function(t) {
    var i = this.value_;
    this.value_ = t, this.reportChanged(), Ue(this) && He(this, {
      type: ye,
      object: this,
      newValue: t,
      oldValue: i
    });
  }, r.get = function() {
    return this.reportObserved(), this.dehanceValue(this.value_);
  }, r.intercept_ = function(t) {
    return Tr(this, t);
  }, r.observe_ = function(t, i) {
    return i && t({
      observableKind: "value",
      debugObjectName: this.name_,
      object: this,
      type: ye,
      newValue: this.value_,
      oldValue: void 0
    }), Er(this, t);
  }, r.raw = function() {
    return this.value_;
  }, r.toJSON = function() {
    return this.get();
  }, r.toString = function() {
    return this.name_ + "[" + this.value_ + "]";
  }, r.valueOf = function() {
    return os(this.get());
  }, r[Ts] = function() {
    return this.valueOf();
  }, n;
}(cr), ll = /* @__PURE__ */ tn("ObservableValue", un), Es;
Es = Symbol.toPrimitive;
var qn = /* @__PURE__ */ function() {
  function e(r) {
    this.dependenciesState_ = V.NOT_TRACKING_, this.observing_ = [], this.newObserving_ = null, this.isBeingObserved_ = !1, this.isPendingUnobservation_ = !1, this.observers_ = /* @__PURE__ */ new Set(), this.diffValue_ = 0, this.runId_ = 0, this.lastAccessedBy_ = 0, this.lowestObserverState_ = V.UP_TO_DATE_, this.unboundDepsCount_ = 0, this.value_ = new io(null), this.name_ = void 0, this.triggeredBy_ = void 0, this.isComputing_ = !1, this.isRunningSetter_ = !1, this.derivation = void 0, this.setter_ = void 0, this.isTracing_ = dn.NONE, this.scope_ = void 0, this.equals_ = void 0, this.requiresReaction_ = void 0, this.keepAlive_ = void 0, this.onBOL = void 0, this.onBUOL = void 0, r.get || k(31), this.derivation = r.get, this.name_ = r.name || "ComputedValue", r.set && (this.setter_ = vn("ComputedValue-setter", r.set)), this.equals_ = r.equals || (r.compareStructural || r.struct ? oo.structural : oo.default), this.scope_ = r.context, this.requiresReaction_ = r.requiresReaction, this.keepAlive_ = !!r.keepAlive;
  }
  var n = e.prototype;
  return n.onBecomeStale_ = function() {
    El(this);
  }, n.onBO = function() {
    this.onBOL && this.onBOL.forEach(function(o) {
      return o();
    });
  }, n.onBUO = function() {
    this.onBUOL && this.onBUOL.forEach(function(o) {
      return o();
    });
  }, n.get = function() {
    if (this.isComputing_ && k(32, this.name_, this.derivation), b.inBatch === 0 && // !globalState.trackingDerivatpion &&
    this.observers_.size === 0 && !this.keepAlive_)
      _t(this) && (this.warnAboutUntrackedRead_(), Oe(), this.value_ = this.computeValue_(!1), Re());
    else if (As(this), _t(this)) {
      var o = b.trackingContext;
      this.keepAlive_ && !o && (b.trackingContext = this), this.trackAndCompute() && Tl(this), b.trackingContext = o;
    }
    var t = this.value_;
    if (Kr(t))
      throw t.cause;
    return t;
  }, n.set = function(o) {
    if (this.setter_) {
      this.isRunningSetter_ && k(33, this.name_), this.isRunningSetter_ = !0;
      try {
        this.setter_.call(this.scope_, o);
      } finally {
        this.isRunningSetter_ = !1;
      }
    } else
      k(34, this.name_);
  }, n.trackAndCompute = function() {
    var o = this.value_, t = (
      /* see #1208 */
      this.dependenciesState_ === V.NOT_TRACKING_
    ), i = this.computeValue_(!0), _ = t || Kr(o) || Kr(i) || !this.equals_(o, i);
    return _ && (this.value_ = i), _;
  }, n.computeValue_ = function(o) {
    this.isComputing_ = !0;
    var t = mr(!1), i;
    if (o)
      i = fs(this, this.derivation, this.scope_);
    else if (b.disableErrorBoundaries === !0)
      i = this.derivation.call(this.scope_);
    else
      try {
        i = this.derivation.call(this.scope_);
      } catch (_) {
        i = new io(_);
      }
    return pr(t), this.isComputing_ = !1, i;
  }, n.suspend_ = function() {
    this.keepAlive_ || (st(this), this.value_ = void 0);
  }, n.observe_ = function(o, t) {
    var i = this, _ = !0, s = void 0;
    return Sl(function() {
      var a = i.get();
      if (!_ || t) {
        var u = wn();
        o({
          observableKind: "computed",
          debugObjectName: i.name_,
          type: ye,
          object: i,
          newValue: a,
          oldValue: s
        }), en(u);
      }
      _ = !1, s = a;
    });
  }, n.warnAboutUntrackedRead_ = function() {
  }, n.toString = function() {
    return this.name_ + "[" + this.derivation.toString() + "]";
  }, n.valueOf = function() {
    return os(this.get());
  }, n[Es] = function() {
    return this.valueOf();
  }, e;
}(), hr = /* @__PURE__ */ tn("ComputedValue", qn), V;
(function(e) {
  e[e.NOT_TRACKING_ = -1] = "NOT_TRACKING_", e[e.UP_TO_DATE_ = 0] = "UP_TO_DATE_", e[e.POSSIBLY_STALE_ = 1] = "POSSIBLY_STALE_", e[e.STALE_ = 2] = "STALE_";
})(V || (V = {}));
var dn;
(function(e) {
  e[e.NONE = 0] = "NONE", e[e.LOG = 1] = "LOG", e[e.BREAK = 2] = "BREAK";
})(dn || (dn = {}));
var io = function(n) {
  this.cause = void 0, this.cause = n;
};
function Kr(e) {
  return e instanceof io;
}
function _t(e) {
  switch (e.dependenciesState_) {
    case V.UP_TO_DATE_:
      return !1;
    case V.NOT_TRACKING_:
    case V.STALE_:
      return !0;
    case V.POSSIBLY_STALE_: {
      for (var n = Ht(!0), r = wn(), o = e.observing_, t = o.length, i = 0; i < t; i++) {
        var _ = o[i];
        if (hr(_)) {
          if (b.disableErrorBoundaries)
            _.get();
          else
            try {
              _.get();
            } catch {
              return en(r), Xn(n), !0;
            }
          if (e.dependenciesState_ === V.STALE_)
            return en(r), Xn(n), !0;
        }
      }
      return Rs(e), en(r), Xn(n), !1;
    }
  }
}
function fs(e, n, r) {
  var o = Ht(!0);
  Rs(e), e.newObserving_ = new Array(e.observing_.length + 100), e.unboundDepsCount_ = 0, e.runId_ = ++b.runId;
  var t = b.trackingDerivation;
  b.trackingDerivation = e, b.inBatch++;
  var i;
  if (b.disableErrorBoundaries === !0)
    i = n.call(r);
  else
    try {
      i = n.call(r);
    } catch (_) {
      i = new io(_);
    }
  return b.inBatch--, b.trackingDerivation = t, ml(e), Xn(o), i;
}
function ml(e) {
  for (var n = e.observing_, r = e.observing_ = e.newObserving_, o = V.UP_TO_DATE_, t = 0, i = e.unboundDepsCount_, _ = 0; _ < i; _++) {
    var s = r[_];
    s.diffValue_ === 0 && (s.diffValue_ = 1, t !== _ && (r[t] = s), t++), s.dependenciesState_ > o && (o = s.dependenciesState_);
  }
  for (r.length = t, e.newObserving_ = null, i = n.length; i--; ) {
    var a = n[i];
    a.diffValue_ === 0 && Ns(a, e), a.diffValue_ = 0;
  }
  for (; t--; ) {
    var u = r[t];
    u.diffValue_ === 1 && (u.diffValue_ = 0, hl(u, e));
  }
  o !== V.UP_TO_DATE_ && (e.dependenciesState_ = o, e.onBecomeStale_());
}
function st(e) {
  var n = e.observing_;
  e.observing_ = [];
  for (var r = n.length; r--; )
    Ns(n[r], e);
  e.dependenciesState_ = V.NOT_TRACKING_;
}
function Os(e) {
  var n = wn();
  try {
    return e();
  } finally {
    en(n);
  }
}
function wn() {
  var e = b.trackingDerivation;
  return b.trackingDerivation = null, e;
}
function en(e) {
  b.trackingDerivation = e;
}
function Ht(e) {
  var n = b.allowStateReads;
  return b.allowStateReads = e, n;
}
function Xn(e) {
  b.allowStateReads = e;
}
function Rs(e) {
  if (e.dependenciesState_ !== V.UP_TO_DATE_) {
    e.dependenciesState_ = V.UP_TO_DATE_;
    for (var n = e.observing_, r = n.length; r--; )
      n[r].lowestObserverState_ = V.UP_TO_DATE_;
  }
}
var Wr = function() {
  this.version = 6, this.UNCHANGED = {}, this.trackingDerivation = null, this.trackingContext = null, this.runId = 0, this.mobxGuid = 0, this.inBatch = 0, this.pendingUnobservations = [], this.pendingReactions = [], this.isRunningReactions = !1, this.allowStateChanges = !1, this.allowStateReads = !0, this.enforceActions = !0, this.spyListeners = [], this.globalReactionErrorHandlers = [], this.computedRequiresReaction = !1, this.reactionRequiresObservable = !1, this.observableRequiresReaction = !1, this.disableErrorBoundaries = !1, this.suppressReactionErrors = !1, this.useProxies = !0, this.verifyProxies = !1, this.safeDescriptors = !0, this.stateVersion = Number.MIN_SAFE_INTEGER;
}, Yr = !0, bs = !1, b = /* @__PURE__ */ function() {
  var e = /* @__PURE__ */ Gt();
  return e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (Yr = !1), e.__mobxGlobals && e.__mobxGlobals.version !== new Wr().version && (Yr = !1), Yr ? e.__mobxGlobals ? (e.__mobxInstanceCount += 1, e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}), e.__mobxGlobals) : (e.__mobxInstanceCount = 1, e.__mobxGlobals = /* @__PURE__ */ new Wr()) : (setTimeout(function() {
    bs || k(35);
  }, 1), new Wr());
}();
function pl() {
  if ((b.pendingReactions.length || b.inBatch || b.isRunningReactions) && k(36), bs = !0, Yr) {
    var e = Gt();
    --e.__mobxInstanceCount === 0 && (e.__mobxGlobals = void 0), b = new Wr();
  }
}
function hl(e, n) {
  e.observers_.add(n), e.lowestObserverState_ > n.dependenciesState_ && (e.lowestObserverState_ = n.dependenciesState_);
}
function Ns(e, n) {
  e.observers_.delete(n), e.observers_.size === 0 && Is(e);
}
function Is(e) {
  e.isPendingUnobservation_ === !1 && (e.isPendingUnobservation_ = !0, b.pendingUnobservations.push(e));
}
function Oe() {
  b.inBatch++;
}
function Re() {
  if (--b.inBatch === 0) {
    Gs();
    for (var e = b.pendingUnobservations, n = 0; n < e.length; n++) {
      var r = e[n];
      r.isPendingUnobservation_ = !1, r.observers_.size === 0 && (r.isBeingObserved_ && (r.isBeingObserved_ = !1, r.onBUO()), r instanceof qn && r.suspend_());
    }
    b.pendingUnobservations = [];
  }
}
function As(e) {
  var n = b.trackingDerivation;
  return n !== null ? (n.runId_ !== e.lastAccessedBy_ && (e.lastAccessedBy_ = n.runId_, n.newObserving_[n.unboundDepsCount_++] = e, !e.isBeingObserved_ && b.trackingContext && (e.isBeingObserved_ = !0, e.onBO())), e.isBeingObserved_) : (e.observers_.size === 0 && b.inBatch > 0 && Is(e), !1);
}
function gs(e) {
  e.lowestObserverState_ !== V.STALE_ && (e.lowestObserverState_ = V.STALE_, e.observers_.forEach(function(n) {
    n.dependenciesState_ === V.UP_TO_DATE_ && n.onBecomeStale_(), n.dependenciesState_ = V.STALE_;
  }));
}
function Tl(e) {
  e.lowestObserverState_ !== V.STALE_ && (e.lowestObserverState_ = V.STALE_, e.observers_.forEach(function(n) {
    n.dependenciesState_ === V.POSSIBLY_STALE_ ? n.dependenciesState_ = V.STALE_ : n.dependenciesState_ === V.UP_TO_DATE_ && (e.lowestObserverState_ = V.UP_TO_DATE_);
  }));
}
function El(e) {
  e.lowestObserverState_ === V.UP_TO_DATE_ && (e.lowestObserverState_ = V.POSSIBLY_STALE_, e.observers_.forEach(function(n) {
    n.dependenciesState_ === V.UP_TO_DATE_ && (n.dependenciesState_ = V.POSSIBLY_STALE_, n.onBecomeStale_());
  }));
}
var Qn = /* @__PURE__ */ function() {
  function e(r, o, t, i) {
    r === void 0 && (r = "Reaction"), this.name_ = void 0, this.onInvalidate_ = void 0, this.errorHandler_ = void 0, this.requiresObservable_ = void 0, this.observing_ = [], this.newObserving_ = [], this.dependenciesState_ = V.NOT_TRACKING_, this.diffValue_ = 0, this.runId_ = 0, this.unboundDepsCount_ = 0, this.isDisposed_ = !1, this.isScheduled_ = !1, this.isTrackPending_ = !1, this.isRunning_ = !1, this.isTracing_ = dn.NONE, this.name_ = r, this.onInvalidate_ = o, this.errorHandler_ = t, this.requiresObservable_ = i;
  }
  var n = e.prototype;
  return n.onBecomeStale_ = function() {
    this.schedule_();
  }, n.schedule_ = function() {
    this.isScheduled_ || (this.isScheduled_ = !0, b.pendingReactions.push(this), Gs());
  }, n.isScheduled = function() {
    return this.isScheduled_;
  }, n.runReaction_ = function() {
    if (!this.isDisposed_) {
      Oe(), this.isScheduled_ = !1;
      var o = b.trackingContext;
      if (b.trackingContext = this, _t(this)) {
        this.isTrackPending_ = !0;
        try {
          this.onInvalidate_();
        } catch (t) {
          this.reportExceptionInDerivation_(t);
        }
      }
      b.trackingContext = o, Re();
    }
  }, n.track = function(o) {
    if (!this.isDisposed_) {
      Oe(), this.isRunning_ = !0;
      var t = b.trackingContext;
      b.trackingContext = this;
      var i = fs(this, o, void 0);
      b.trackingContext = t, this.isRunning_ = !1, this.isTrackPending_ = !1, this.isDisposed_ && st(this), Kr(i) && this.reportExceptionInDerivation_(i.cause), Re();
    }
  }, n.reportExceptionInDerivation_ = function(o) {
    var t = this;
    if (this.errorHandler_) {
      this.errorHandler_(o, this);
      return;
    }
    if (b.disableErrorBoundaries)
      throw o;
    var i = "[mobx] uncaught error in '" + this + "'";
    b.suppressReactionErrors || console.error(i, o), b.globalReactionErrorHandlers.forEach(function(_) {
      return _(o, t);
    });
  }, n.dispose = function() {
    this.isDisposed_ || (this.isDisposed_ = !0, this.isRunning_ || (Oe(), st(this), Re()));
  }, n.getDisposer_ = function() {
    var o = this.dispose.bind(this);
    return o[v] = this, o;
  }, n.toString = function() {
    return "Reaction[" + this.name_ + "]";
  }, n.trace = function(o) {
    o === void 0 && (o = !1), Fl(this, o);
  }, e;
}(), fl = 100, at = function(n) {
  return n();
};
function Gs() {
  b.inBatch > 0 || b.isRunningReactions || at(Ol);
}
function Ol() {
  b.isRunningReactions = !0;
  for (var e = b.pendingReactions, n = 0; e.length > 0; ) {
    ++n === fl && (console.error("[mobx] cycle in reaction: " + e[0]), e.splice(0));
    for (var r = e.splice(0), o = 0, t = r.length; o < t; o++)
      r[o].runReaction_();
  }
  b.isRunningReactions = !1;
}
var _o = /* @__PURE__ */ tn("Reaction", Qn);
function Rl(e) {
  var n = at;
  at = function(o) {
    return e(function() {
      return n(o);
    });
  };
}
function Kn() {
  return !1;
}
function bl(e) {
  return console.warn("[mobx.spy] Is a no-op in production builds"), function() {
  };
}
var Ss = "action", Nl = "action.bound", Cs = "autoAction", Il = "autoAction.bound", Al = "<unnamed action>", Us = /* @__PURE__ */ lr(Ss), gl = /* @__PURE__ */ lr(Nl, {
  bound: !0
}), Hs = /* @__PURE__ */ lr(Cs, {
  autoAction: !0
}), Gl = /* @__PURE__ */ lr(Il, {
  autoAction: !0,
  bound: !0
});
function vs(e) {
  var n = function(o, t) {
    if (ve(o))
      return vn(o.name || Al, o, e);
    if (ve(t))
      return vn(o, t, e);
    if (cn(t))
      return dr(o, t, e ? Hs : Us);
    if (cn(o))
      return Le(lr(e ? Cs : Ss, {
        name: o,
        autoAction: e
      }));
  };
  return n;
}
var Nn = /* @__PURE__ */ vs(!1);
Object.assign(Nn, Us);
var Zn = /* @__PURE__ */ vs(!0);
Object.assign(Zn, Hs);
Nn.bound = /* @__PURE__ */ Le(gl);
Zn.bound = /* @__PURE__ */ Le(Gl);
function vt(e) {
  return ve(e) && e.isMobxAction === !0;
}
function Sl(e, n) {
  var r, o;
  n === void 0 && (n = q_);
  var t = (r = (o = n) == null ? void 0 : o.name) != null ? r : "Autorun", i = !n.scheduler && !n.delay, _;
  if (i)
    _ = new Qn(t, function() {
      this.track(u);
    }, n.onError, n.requiresObservable);
  else {
    var s = Ul(n), a = !1;
    _ = new Qn(t, function() {
      a || (a = !0, s(function() {
        a = !1, _.isDisposed_ || _.track(u);
      }));
    }, n.onError, n.requiresObservable);
  }
  function u() {
    e(_);
  }
  return _.schedule_(), _.getDisposer_();
}
var Cl = function(n) {
  return n();
};
function Ul(e) {
  return e.scheduler ? e.scheduler : e.delay ? function(n) {
    return setTimeout(n, e.delay);
  } : Cl;
}
var Hl = "onBO", vl = "onBUO";
function Dl(e, n, r) {
  return Ps(Hl, e, n, r);
}
function Ds(e, n, r) {
  return Ps(vl, e, n, r);
}
function Ps(e, n, r, o) {
  var t = typeof o == "function" ? on(n, r) : on(n), i = ve(o) ? o : r, _ = e + "L";
  return t[_] ? t[_].add(i) : t[_] = /* @__PURE__ */ new Set([i]), function() {
    var s = t[_];
    s && (s.delete(i), s.size === 0 && delete t[_]);
  };
}
var Pl = "never", Ur = "always", Bl = "observed";
function Ll(e) {
  e.isolateGlobalState === !0 && pl();
  var n = e.useProxies, r = e.enforceActions;
  if (n !== void 0 && (b.useProxies = n === Ur ? !0 : n === Pl ? !1 : typeof Proxy < "u"), n === "ifavailable" && (b.verifyProxies = !0), r !== void 0) {
    var o = r === Ur ? Ur : r === Bl;
    b.enforceActions = o, b.allowStateChanges = !(o === !0 || o === Ur);
  }
  ["computedRequiresReaction", "reactionRequiresObservable", "observableRequiresReaction", "disableErrorBoundaries", "safeDescriptors"].forEach(function(t) {
    t in e && (b[t] = !!e[t]);
  }), b.allowStateReads = !b.observableRequiresReaction, e.reactionScheduler && Rl(e.reactionScheduler);
}
function Bs(e, n, r, o) {
  var t = Oc(n), i = Or(e, o)[v];
  Oe();
  try {
    Cn(t).forEach(function(_) {
      i.extend_(
        _,
        t[_],
        // must pass "undefined" for { key: undefined }
        r && _ in r ? r[_] : !0
      );
    });
  } finally {
    Re();
  }
  return e;
}
function yl(e, n) {
  return Ls(on(e, n));
}
function Ls(e) {
  var n = {
    name: e.name_
  };
  return e.observing_ && e.observing_.length > 0 && (n.dependencies = wl(e.observing_).map(Ls)), n;
}
function wl(e) {
  return Array.from(new Set(e));
}
var xl = 0;
function ys() {
  this.message = "FLOW_CANCELLED";
}
ys.prototype = /* @__PURE__ */ Object.create(Error.prototype);
var Gi = /* @__PURE__ */ ss("flow"), Ml = /* @__PURE__ */ ss("flow.bound", {
  bound: !0
}), er = /* @__PURE__ */ Object.assign(function(n, r) {
  if (cn(r))
    return dr(n, r, Gi);
  var o = n, t = o.name || "<unnamed flow>", i = function() {
    var s = this, a = arguments, u = ++xl, c = Nn(t + " - runid: " + u + " - init", o).apply(s, a), d, f = void 0, O = new Promise(function(l, m) {
      var h = 0;
      d = m;
      function N(C) {
        f = void 0;
        var T;
        try {
          T = Nn(t + " - runid: " + u + " - yield " + h++, c.next).call(c, C);
        } catch (H) {
          return m(H);
        }
        G(T);
      }
      function R(C) {
        f = void 0;
        var T;
        try {
          T = Nn(t + " - runid: " + u + " - yield " + h++, c.throw).call(c, C);
        } catch (H) {
          return m(H);
        }
        G(T);
      }
      function G(C) {
        if (ve(C?.then)) {
          C.then(G, m);
          return;
        }
        return C.done ? l(C.value) : (f = Promise.resolve(C.value), f.then(N, R));
      }
      N(void 0);
    });
    return O.cancel = Nn(t + " - runid: " + u + " - cancel", function() {
      try {
        f && Si(f);
        var l = c.return(void 0), m = Promise.resolve(l.value);
        m.then(Rn, Rn), Si(m), d(new ys());
      } catch (h) {
        d(h);
      }
    }), O;
  };
  return i.isMobXFlow = !0, i;
}, Gi);
er.bound = /* @__PURE__ */ Le(Ml);
function Si(e) {
  ve(e.cancel) && e.cancel();
}
function so(e) {
  return e?.isMobXFlow === !0;
}
function kl(e, n) {
  return e ? n !== void 0 ? Dn(e) ? e[v].values_.has(n) : !1 : Dn(e) || !!e[v] || Ct(e) || _o(e) || hr(e) : !1;
}
function Dt(e) {
  return kl(e);
}
function jl(e) {
  if (Dn(e))
    return e[v].ownKeys_();
  k(38);
}
function Hr(e, n, r) {
  return e.set(n, r), r;
}
function fn(e, n) {
  if (e == null || typeof e != "object" || e instanceof Date || !Dt(e))
    return e;
  if (ll(e) || hr(e))
    return fn(e.get(), n);
  if (n.has(e))
    return n.get(e);
  if (fr(e)) {
    var r = Hr(n, e, new Array(e.length));
    return e.forEach(function(_, s) {
      r[s] = fn(_, n);
    }), r;
  }
  if (pn(e)) {
    var o = Hr(n, e, /* @__PURE__ */ new Set());
    return e.forEach(function(_) {
      o.add(fn(_, n));
    }), o;
  }
  if (sn(e)) {
    var t = Hr(n, e, /* @__PURE__ */ new Map());
    return e.forEach(function(_, s) {
      t.set(s, fn(_, n));
    }), t;
  } else {
    var i = Hr(n, e, {});
    return jl(e).forEach(function(_) {
      sr.propertyIsEnumerable.call(e, _) && (i[_] = fn(e[_], n));
    }), i;
  }
}
function ws(e, n) {
  return fn(e, /* @__PURE__ */ new Map());
}
function Fl() {
  k("trace() is not available in production builds");
  for (var e = !1, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
    r[o] = arguments[o];
  typeof r[r.length - 1] == "boolean" && (e = r.pop());
  var t = Vl(r);
  if (!t)
    return k("'trace(break?)' can only be used inside a tracked computed value or a Reaction. Consider passing in the computed value or reaction explicitly");
  t.isTracing_ === dn.NONE && console.log("[mobx.trace] '" + t.name_ + "' tracing enabled"), t.isTracing_ = e ? dn.BREAK : dn.LOG;
}
function Vl(e) {
  switch (e.length) {
    case 0:
      return b.trackingDerivation;
    case 1:
      return on(e[0]);
    case 2:
      return on(e[0], e[1]);
  }
}
function xe(e, n) {
  n === void 0 && (n = void 0), Oe();
  try {
    return e.apply(n);
  } finally {
    Re();
  }
}
function Tn(e) {
  return e[v];
}
var Xl = {
  has: function(n, r) {
    return Tn(n).has_(r);
  },
  get: function(n, r) {
    return Tn(n).get_(r);
  },
  set: function(n, r, o) {
    var t;
    return cn(r) ? (t = Tn(n).set_(r, o, !0)) != null ? t : !0 : !1;
  },
  deleteProperty: function(n, r) {
    var o;
    return cn(r) ? (o = Tn(n).delete_(r, !0)) != null ? o : !0 : !1;
  },
  defineProperty: function(n, r, o) {
    var t;
    return (t = Tn(n).defineProperty_(r, o)) != null ? t : !0;
  },
  ownKeys: function(n) {
    return Tn(n).ownKeys_();
  },
  preventExtensions: function(n) {
    k(13);
  }
};
function Kl(e, n) {
  var r, o;
  return Q_(), e = Or(e, n), (o = (r = e[v]).proxy_) != null ? o : r.proxy_ = new Proxy(e, Xl);
}
function Ie(e) {
  return e.interceptors_ !== void 0 && e.interceptors_.length > 0;
}
function Tr(e, n) {
  var r = e.interceptors_ || (e.interceptors_ = []);
  return r.push(n), Z_(function() {
    var o = r.indexOf(n);
    o !== -1 && r.splice(o, 1);
  });
}
function Ae(e, n) {
  var r = wn();
  try {
    for (var o = [].concat(e.interceptors_ || []), t = 0, i = o.length; t < i && (n = o[t](n), n && !n.type && k(14), !!n); t++)
      ;
    return n;
  } finally {
    en(r);
  }
}
function Ue(e) {
  return e.changeListeners_ !== void 0 && e.changeListeners_.length > 0;
}
function Er(e, n) {
  var r = e.changeListeners_ || (e.changeListeners_ = []);
  return r.push(n), Z_(function() {
    var o = r.indexOf(n);
    o !== -1 && r.splice(o, 1);
  });
}
function He(e, n) {
  var r = wn(), o = e.changeListeners_;
  if (o) {
    o = o.slice();
    for (var t = 0, i = o.length; t < i; t++)
      o[t](n);
    en(r);
  }
}
function Wl(e, n, r) {
  var o = Or(e, r)[v];
  Oe();
  try {
    var t;
    (t = n) != null || (n = Ic(e)), Cn(n).forEach(function(i) {
      return o.make_(i, n[i]);
    });
  } finally {
    Re();
  }
  return e;
}
var wo = /* @__PURE__ */ Symbol("mobx-keys");
function mn(e, n, r) {
  if (Xe(e))
    return Bs(e, e, n, r);
  var o = Or(e, r)[v];
  if (!e[wo]) {
    var t = Object.getPrototypeOf(e), i = new Set([].concat(Cn(e), Cn(t)));
    i.delete("constructor"), i.delete(v), ar(t, wo, i);
  }
  Oe();
  try {
    e[wo].forEach(function(_) {
      return o.make_(
        _,
        // must pass "undefined" for { key: undefined }
        n && _ in n ? n[_] : !0
      );
    });
  } finally {
    Re();
  }
  return e;
}
var Ci = "splice", ye = "update", Yl = 1e4, $l = {
  get: function(n, r) {
    var o = n[v];
    return r === v ? o : r === "length" ? o.getArrayLength_() : typeof r == "string" && !isNaN(r) ? o.get_(parseInt(r)) : Fe(ao, r) ? ao[r] : n[r];
  },
  set: function(n, r, o) {
    var t = n[v];
    return r === "length" && t.setArrayLength_(o), typeof r == "symbol" || isNaN(r) ? n[r] = o : t.set_(parseInt(r), o), !0;
  },
  preventExtensions: function() {
    k(15);
  }
}, Pt = /* @__PURE__ */ function() {
  function e(r, o, t, i) {
    r === void 0 && (r = "ObservableArray"), this.owned_ = void 0, this.legacyMode_ = void 0, this.atom_ = void 0, this.values_ = [], this.interceptors_ = void 0, this.changeListeners_ = void 0, this.enhancer_ = void 0, this.dehancer = void 0, this.proxy_ = void 0, this.lastKnownLength_ = 0, this.owned_ = t, this.legacyMode_ = i, this.atom_ = new cr(r), this.enhancer_ = function(_, s) {
      return o(_, s, "ObservableArray[..]");
    };
  }
  var n = e.prototype;
  return n.dehanceValue_ = function(o) {
    return this.dehancer !== void 0 ? this.dehancer(o) : o;
  }, n.dehanceValues_ = function(o) {
    return this.dehancer !== void 0 && o.length > 0 ? o.map(this.dehancer) : o;
  }, n.intercept_ = function(o) {
    return Tr(this, o);
  }, n.observe_ = function(o, t) {
    return t === void 0 && (t = !1), t && o({
      observableKind: "array",
      object: this.proxy_,
      debugObjectName: this.atom_.name_,
      type: "splice",
      index: 0,
      added: this.values_.slice(),
      addedCount: this.values_.length,
      removed: [],
      removedCount: 0
    }), Er(this, o);
  }, n.getArrayLength_ = function() {
    return this.atom_.reportObserved(), this.values_.length;
  }, n.setArrayLength_ = function(o) {
    (typeof o != "number" || isNaN(o) || o < 0) && k("Out of range: " + o);
    var t = this.values_.length;
    if (o !== t)
      if (o > t) {
        for (var i = new Array(o - t), _ = 0; _ < o - t; _++)
          i[_] = void 0;
        this.spliceWithArray_(t, 0, i);
      } else
        this.spliceWithArray_(o, t - o);
  }, n.updateArrayLength_ = function(o, t) {
    o !== this.lastKnownLength_ && k(16), this.lastKnownLength_ += t, this.legacyMode_ && t > 0 && $s(o + t + 1);
  }, n.spliceWithArray_ = function(o, t, i) {
    var _ = this;
    this.atom_;
    var s = this.values_.length;
    if (o === void 0 ? o = 0 : o > s ? o = s : o < 0 && (o = Math.max(0, s + o)), arguments.length === 1 ? t = s - o : t == null ? t = 0 : t = Math.max(0, Math.min(t, s - o)), i === void 0 && (i = tt), Ie(this)) {
      var a = Ae(this, {
        object: this.proxy_,
        type: Ci,
        index: o,
        removedCount: t,
        added: i
      });
      if (!a)
        return tt;
      t = a.removedCount, i = a.added;
    }
    if (i = i.length === 0 ? i : i.map(function(d) {
      return _.enhancer_(d, void 0);
    }), this.legacyMode_) {
      var u = i.length - t;
      this.updateArrayLength_(s, u);
    }
    var c = this.spliceItemsIntoValues_(o, t, i);
    return (t !== 0 || i.length !== 0) && this.notifyArraySplice_(o, i, c), this.dehanceValues_(c);
  }, n.spliceItemsIntoValues_ = function(o, t, i) {
    if (i.length < Yl) {
      var _;
      return (_ = this.values_).splice.apply(_, [o, t].concat(i));
    } else {
      var s = this.values_.slice(o, o + t), a = this.values_.slice(o + t);
      this.values_.length += i.length - t;
      for (var u = 0; u < i.length; u++)
        this.values_[o + u] = i[u];
      for (var c = 0; c < a.length; c++)
        this.values_[o + i.length + c] = a[c];
      return s;
    }
  }, n.notifyArrayChildUpdate_ = function(o, t, i) {
    var _ = !this.owned_ && Kn(), s = Ue(this), a = s || _ ? {
      observableKind: "array",
      object: this.proxy_,
      type: ye,
      debugObjectName: this.atom_.name_,
      index: o,
      newValue: t,
      oldValue: i
    } : null;
    this.atom_.reportChanged(), s && He(this, a);
  }, n.notifyArraySplice_ = function(o, t, i) {
    var _ = !this.owned_ && Kn(), s = Ue(this), a = s || _ ? {
      observableKind: "array",
      object: this.proxy_,
      debugObjectName: this.atom_.name_,
      type: Ci,
      index: o,
      removed: i,
      added: t,
      removedCount: i.length,
      addedCount: t.length
    } : null;
    this.atom_.reportChanged(), s && He(this, a);
  }, n.get_ = function(o) {
    if (this.legacyMode_ && o >= this.values_.length) {
      console.warn("[mobx] Out of bounds read: " + o);
      return;
    }
    return this.atom_.reportObserved(), this.dehanceValue_(this.values_[o]);
  }, n.set_ = function(o, t) {
    var i = this.values_;
    if (this.legacyMode_ && o > i.length && k(17, o, i.length), o < i.length) {
      this.atom_;
      var _ = i[o];
      if (Ie(this)) {
        var s = Ae(this, {
          type: ye,
          object: this.proxy_,
          index: o,
          newValue: t
        });
        if (!s)
          return;
        t = s.newValue;
      }
      t = this.enhancer_(t, _);
      var a = t !== _;
      a && (i[o] = t, this.notifyArrayChildUpdate_(o, t, _));
    } else {
      for (var u = new Array(o + 1 - i.length), c = 0; c < u.length - 1; c++)
        u[c] = void 0;
      u[u.length - 1] = t, this.spliceWithArray_(i.length, 0, u);
    }
  }, e;
}();
function Jl(e, n, r, o) {
  r === void 0 && (r = "ObservableArray"), o === void 0 && (o = !1), Q_();
  var t = new Pt(r, n, o, !1);
  ns(t.values_, v, t);
  var i = new Proxy(t.values_, $l);
  if (t.proxy_ = i, e && e.length) {
    var _ = mr(!0);
    t.spliceWithArray_(0, 0, e), pr(_);
  }
  return i;
}
var ao = {
  clear: function() {
    return this.splice(0);
  },
  replace: function(n) {
    var r = this[v];
    return r.spliceWithArray_(0, r.values_.length, n);
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
  splice: function(n, r) {
    for (var o = arguments.length, t = new Array(o > 2 ? o - 2 : 0), i = 2; i < o; i++)
      t[i - 2] = arguments[i];
    var _ = this[v];
    switch (arguments.length) {
      case 0:
        return [];
      case 1:
        return _.spliceWithArray_(n);
      case 2:
        return _.spliceWithArray_(n, r);
    }
    return _.spliceWithArray_(n, r, t);
  },
  spliceWithArray: function(n, r, o) {
    return this[v].spliceWithArray_(n, r, o);
  },
  push: function() {
    for (var n = this[v], r = arguments.length, o = new Array(r), t = 0; t < r; t++)
      o[t] = arguments[t];
    return n.spliceWithArray_(n.values_.length, 0, o), n.values_.length;
  },
  pop: function() {
    return this.splice(Math.max(this[v].values_.length - 1, 0), 1)[0];
  },
  shift: function() {
    return this.splice(0, 1)[0];
  },
  unshift: function() {
    for (var n = this[v], r = arguments.length, o = new Array(r), t = 0; t < r; t++)
      o[t] = arguments[t];
    return n.spliceWithArray_(0, 0, o), n.values_.length;
  },
  reverse: function() {
    return b.trackingDerivation && k(37, "reverse"), this.replace(this.slice().reverse()), this;
  },
  sort: function() {
    b.trackingDerivation && k(37, "sort");
    var n = this.slice();
    return n.sort.apply(n, arguments), this.replace(n), this;
  },
  remove: function(n) {
    var r = this[v], o = r.dehanceValues_(r.values_).indexOf(n);
    return o > -1 ? (this.splice(o, 1), !0) : !1;
  }
};
te("concat", Ke);
te("flat", Ke);
te("includes", Ke);
te("indexOf", Ke);
te("join", Ke);
te("lastIndexOf", Ke);
te("slice", Ke);
te("toString", Ke);
te("toLocaleString", Ke);
te("every", _n);
te("filter", _n);
te("find", _n);
te("findIndex", _n);
te("flatMap", _n);
te("forEach", _n);
te("map", _n);
te("some", _n);
te("reduce", xs);
te("reduceRight", xs);
function te(e, n) {
  typeof Array.prototype[e] == "function" && (ao[e] = n(e));
}
function Ke(e) {
  return function() {
    var n = this[v];
    n.atom_.reportObserved();
    var r = n.dehanceValues_(n.values_);
    return r[e].apply(r, arguments);
  };
}
function _n(e) {
  return function(n, r) {
    var o = this, t = this[v];
    t.atom_.reportObserved();
    var i = t.dehanceValues_(t.values_);
    return i[e](function(_, s) {
      return n.call(r, _, s, o);
    });
  };
}
function xs(e) {
  return function() {
    var n = this, r = this[v];
    r.atom_.reportObserved();
    var o = r.dehanceValues_(r.values_), t = arguments[0];
    return arguments[0] = function(i, _, s) {
      return t(i, _, s, n);
    }, o[e].apply(o, arguments);
  };
}
var zl = /* @__PURE__ */ tn("ObservableArrayAdministration", Pt);
function fr(e) {
  return Ro(e) && zl(e[v]);
}
var Ms, ks, ql = {}, qe = "add", uo = "delete";
Ms = Symbol.iterator;
ks = Symbol.toStringTag;
var js = /* @__PURE__ */ function() {
  function e(r, o, t) {
    var i = this;
    o === void 0 && (o = Hn), t === void 0 && (t = "ObservableMap"), this.enhancer_ = void 0, this.name_ = void 0, this[v] = ql, this.data_ = void 0, this.hasMap_ = void 0, this.keysAtom_ = void 0, this.interceptors_ = void 0, this.changeListeners_ = void 0, this.dehancer = void 0, this.enhancer_ = o, this.name_ = t, ve(Map) || k(18), this.keysAtom_ = is("ObservableMap.keys()"), this.data_ = /* @__PURE__ */ new Map(), this.hasMap_ = /* @__PURE__ */ new Map(), cl(!0, function() {
      i.merge(r);
    });
  }
  var n = e.prototype;
  return n.has_ = function(o) {
    return this.data_.has(o);
  }, n.has = function(o) {
    var t = this;
    if (!b.trackingDerivation)
      return this.has_(o);
    var i = this.hasMap_.get(o);
    if (!i) {
      var _ = i = new un(this.has_(o), bo, "ObservableMap.key?", !1);
      this.hasMap_.set(o, _), Ds(_, function() {
        return t.hasMap_.delete(o);
      });
    }
    return i.get();
  }, n.set = function(o, t) {
    var i = this.has_(o);
    if (Ie(this)) {
      var _ = Ae(this, {
        type: i ? ye : qe,
        object: this,
        newValue: t,
        name: o
      });
      if (!_)
        return this;
      t = _.newValue;
    }
    return i ? this.updateValue_(o, t) : this.addValue_(o, t), this;
  }, n.delete = function(o) {
    var t = this;
    if (this.keysAtom_, Ie(this)) {
      var i = Ae(this, {
        type: uo,
        object: this,
        name: o
      });
      if (!i)
        return !1;
    }
    if (this.has_(o)) {
      var _ = Kn(), s = Ue(this), a = s || _ ? {
        observableKind: "map",
        debugObjectName: this.name_,
        type: uo,
        object: this,
        oldValue: this.data_.get(o).value_,
        name: o
      } : null;
      return xe(function() {
        var u;
        t.keysAtom_.reportChanged(), (u = t.hasMap_.get(o)) == null || u.setNewValue_(!1);
        var c = t.data_.get(o);
        c.setNewValue_(void 0), t.data_.delete(o);
      }), s && He(this, a), !0;
    }
    return !1;
  }, n.updateValue_ = function(o, t) {
    var i = this.data_.get(o);
    if (t = i.prepareNewValue_(t), t !== b.UNCHANGED) {
      var _ = Kn(), s = Ue(this), a = s || _ ? {
        observableKind: "map",
        debugObjectName: this.name_,
        type: ye,
        object: this,
        oldValue: i.value_,
        name: o,
        newValue: t
      } : null;
      i.setNewValue_(t), s && He(this, a);
    }
  }, n.addValue_ = function(o, t) {
    var i = this;
    this.keysAtom_, xe(function() {
      var u, c = new un(t, i.enhancer_, "ObservableMap.key", !1);
      i.data_.set(o, c), t = c.value_, (u = i.hasMap_.get(o)) == null || u.setNewValue_(!0), i.keysAtom_.reportChanged();
    });
    var _ = Kn(), s = Ue(this), a = s || _ ? {
      observableKind: "map",
      debugObjectName: this.name_,
      type: qe,
      object: this,
      name: o,
      newValue: t
    } : null;
    s && He(this, a);
  }, n.get = function(o) {
    return this.has(o) ? this.dehanceValue_(this.data_.get(o).get()) : this.dehanceValue_(void 0);
  }, n.dehanceValue_ = function(o) {
    return this.dehancer !== void 0 ? this.dehancer(o) : o;
  }, n.keys = function() {
    return this.keysAtom_.reportObserved(), this.data_.keys();
  }, n.values = function() {
    var o = this, t = this.keys();
    return nr({
      next: function() {
        var _ = t.next(), s = _.done, a = _.value;
        return {
          done: s,
          value: s ? void 0 : o.get(a)
        };
      }
    });
  }, n.entries = function() {
    var o = this, t = this.keys();
    return nr({
      next: function() {
        var _ = t.next(), s = _.done, a = _.value;
        return {
          done: s,
          value: s ? void 0 : [a, o.get(a)]
        };
      }
    });
  }, n[Ms] = function() {
    return this.entries();
  }, n.forEach = function(o, t) {
    for (var i = bn(this), _; !(_ = i()).done; ) {
      var s = _.value, a = s[0], u = s[1];
      o.call(t, u, a, this);
    }
  }, n.merge = function(o) {
    var t = this;
    return sn(o) && (o = new Map(o)), xe(function() {
      Xe(o) ? fc(o).forEach(function(i) {
        return t.set(i, o[i]);
      }) : Array.isArray(o) ? o.forEach(function(i) {
        var _ = i[0], s = i[1];
        return t.set(_, s);
      }) : yn(o) ? (o.constructor !== Map && k(19, o), o.forEach(function(i, _) {
        return t.set(_, i);
      })) : o != null && k(20, o);
    }), this;
  }, n.clear = function() {
    var o = this;
    xe(function() {
      Os(function() {
        for (var t = bn(o.keys()), i; !(i = t()).done; ) {
          var _ = i.value;
          o.delete(_);
        }
      });
    });
  }, n.replace = function(o) {
    var t = this;
    return xe(function() {
      for (var i = Ql(o), _ = /* @__PURE__ */ new Map(), s = !1, a = bn(t.data_.keys()), u; !(u = a()).done; ) {
        var c = u.value;
        if (!i.has(c)) {
          var d = t.delete(c);
          if (d)
            s = !0;
          else {
            var f = t.data_.get(c);
            _.set(c, f);
          }
        }
      }
      for (var O = bn(i.entries()), l; !(l = O()).done; ) {
        var m = l.value, h = m[0], N = m[1], R = t.data_.has(h);
        if (t.set(h, N), t.data_.has(h)) {
          var G = t.data_.get(h);
          _.set(h, G), R || (s = !0);
        }
      }
      if (!s)
        if (t.data_.size !== _.size)
          t.keysAtom_.reportChanged();
        else
          for (var C = t.data_.keys(), T = _.keys(), H = C.next(), M = T.next(); !H.done; ) {
            if (H.value !== M.value) {
              t.keysAtom_.reportChanged();
              break;
            }
            H = C.next(), M = T.next();
          }
      t.data_ = _;
    }), this;
  }, n.toString = function() {
    return "[object ObservableMap]";
  }, n.toJSON = function() {
    return Array.from(this);
  }, n.observe_ = function(o, t) {
    return Er(this, o);
  }, n.intercept_ = function(o) {
    return Tr(this, o);
  }, St(e, [{
    key: "size",
    get: function() {
      return this.keysAtom_.reportObserved(), this.data_.size;
    }
  }, {
    key: ks,
    get: function() {
      return "Map";
    }
  }]), e;
}(), sn = /* @__PURE__ */ tn("ObservableMap", js);
function Ql(e) {
  if (yn(e) || sn(e))
    return e;
  if (Array.isArray(e))
    return new Map(e);
  if (Xe(e)) {
    var n = /* @__PURE__ */ new Map();
    for (var r in e)
      n.set(r, e[r]);
    return n;
  } else
    return k(21, e);
}
var Fs, Vs, Zl = {};
Fs = Symbol.iterator;
Vs = Symbol.toStringTag;
var Xs = /* @__PURE__ */ function() {
  function e(r, o, t) {
    o === void 0 && (o = Hn), t === void 0 && (t = "ObservableSet"), this.name_ = void 0, this[v] = Zl, this.data_ = /* @__PURE__ */ new Set(), this.atom_ = void 0, this.changeListeners_ = void 0, this.interceptors_ = void 0, this.dehancer = void 0, this.enhancer_ = void 0, this.name_ = t, ve(Set) || k(22), this.atom_ = is(this.name_), this.enhancer_ = function(i, _) {
      return o(i, _, t);
    }, r && this.replace(r);
  }
  var n = e.prototype;
  return n.dehanceValue_ = function(o) {
    return this.dehancer !== void 0 ? this.dehancer(o) : o;
  }, n.clear = function() {
    var o = this;
    xe(function() {
      Os(function() {
        for (var t = bn(o.data_.values()), i; !(i = t()).done; ) {
          var _ = i.value;
          o.delete(_);
        }
      });
    });
  }, n.forEach = function(o, t) {
    for (var i = bn(this), _; !(_ = i()).done; ) {
      var s = _.value;
      o.call(t, s, s, this);
    }
  }, n.add = function(o) {
    var t = this;
    if (this.atom_, Ie(this)) {
      var i = Ae(this, {
        type: qe,
        object: this,
        newValue: o
      });
      if (!i)
        return this;
    }
    if (!this.has(o)) {
      xe(function() {
        t.data_.add(t.enhancer_(o, void 0)), t.atom_.reportChanged();
      });
      var _ = !1, s = Ue(this), a = s || _ ? {
        observableKind: "set",
        debugObjectName: this.name_,
        type: qe,
        object: this,
        newValue: o
      } : null;
      s && He(this, a);
    }
    return this;
  }, n.delete = function(o) {
    var t = this;
    if (Ie(this)) {
      var i = Ae(this, {
        type: uo,
        object: this,
        oldValue: o
      });
      if (!i)
        return !1;
    }
    if (this.has(o)) {
      var _ = !1, s = Ue(this), a = s || _ ? {
        observableKind: "set",
        debugObjectName: this.name_,
        type: uo,
        object: this,
        oldValue: o
      } : null;
      return xe(function() {
        t.atom_.reportChanged(), t.data_.delete(o);
      }), s && He(this, a), !0;
    }
    return !1;
  }, n.has = function(o) {
    return this.atom_.reportObserved(), this.data_.has(this.dehanceValue_(o));
  }, n.entries = function() {
    var o = 0, t = Array.from(this.keys()), i = Array.from(this.values());
    return nr({
      next: function() {
        var s = o;
        return o += 1, s < i.length ? {
          value: [t[s], i[s]],
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
    var o = this, t = 0, i = Array.from(this.data_.values());
    return nr({
      next: function() {
        return t < i.length ? {
          value: o.dehanceValue_(i[t++]),
          done: !1
        } : {
          done: !0
        };
      }
    });
  }, n.replace = function(o) {
    var t = this;
    return pn(o) && (o = new Set(o)), xe(function() {
      Array.isArray(o) ? (t.clear(), o.forEach(function(i) {
        return t.add(i);
      })) : ur(o) ? (t.clear(), o.forEach(function(i) {
        return t.add(i);
      })) : o != null && k("Cannot initialize set from " + o);
    }), this;
  }, n.observe_ = function(o, t) {
    return Er(this, o);
  }, n.intercept_ = function(o) {
    return Tr(this, o);
  }, n.toJSON = function() {
    return Array.from(this);
  }, n.toString = function() {
    return "[object ObservableSet]";
  }, n[Fs] = function() {
    return this.values();
  }, St(e, [{
    key: "size",
    get: function() {
      return this.atom_.reportObserved(), this.data_.size;
    }
  }, {
    key: Vs,
    get: function() {
      return "Set";
    }
  }]), e;
}(), pn = /* @__PURE__ */ tn("ObservableSet", Xs), Ui = /* @__PURE__ */ Object.create(null), Hi = "remove", Ks = /* @__PURE__ */ function() {
  function e(r, o, t, i) {
    o === void 0 && (o = /* @__PURE__ */ new Map()), i === void 0 && (i = Kc), this.target_ = void 0, this.values_ = void 0, this.name_ = void 0, this.defaultAnnotation_ = void 0, this.keysAtom_ = void 0, this.changeListeners_ = void 0, this.interceptors_ = void 0, this.proxy_ = void 0, this.isPlainObject_ = void 0, this.appliedAnnotations_ = void 0, this.pendingKeys_ = void 0, this.target_ = r, this.values_ = o, this.name_ = t, this.defaultAnnotation_ = i, this.keysAtom_ = new cr("ObservableObject.keys"), this.isPlainObject_ = Xe(this.target_);
  }
  var n = e.prototype;
  return n.getObservablePropValue_ = function(o) {
    return this.values_.get(o).get();
  }, n.setObservablePropValue_ = function(o, t) {
    var i = this.values_.get(o);
    if (i instanceof qn)
      return i.set(t), !0;
    if (Ie(this)) {
      var _ = Ae(this, {
        type: ye,
        object: this.proxy_ || this.target_,
        name: o,
        newValue: t
      });
      if (!_)
        return null;
      t = _.newValue;
    }
    if (t = i.prepareNewValue_(t), t !== b.UNCHANGED) {
      var s = Ue(this), a = !1, u = s || a ? {
        type: ye,
        observableKind: "object",
        debugObjectName: this.name_,
        object: this.proxy_ || this.target_,
        oldValue: i.value_,
        name: o,
        newValue: t
      } : null;
      i.setNewValue_(t), s && He(this, u);
    }
    return !0;
  }, n.get_ = function(o) {
    return b.trackingDerivation && !Fe(this.target_, o) && this.has_(o), this.target_[o];
  }, n.set_ = function(o, t, i) {
    return i === void 0 && (i = !1), Fe(this.target_, o) ? this.values_.has(o) ? this.setObservablePropValue_(o, t) : i ? Reflect.set(this.target_, o, t) : (this.target_[o] = t, !0) : this.extend_(o, {
      value: t,
      enumerable: !0,
      writable: !0,
      configurable: !0
    }, this.defaultAnnotation_, i);
  }, n.has_ = function(o) {
    if (!b.trackingDerivation)
      return o in this.target_;
    this.pendingKeys_ || (this.pendingKeys_ = /* @__PURE__ */ new Map());
    var t = this.pendingKeys_.get(o);
    return t || (t = new un(o in this.target_, bo, "ObservableObject.key?", !1), this.pendingKeys_.set(o, t)), t.get();
  }, n.make_ = function(o, t) {
    if (t === !0 && (t = this.defaultAnnotation_), t !== !1) {
      if (!(o in this.target_)) {
        var i;
        if ((i = this.target_[Pe]) != null && i[o])
          return;
        k(1, t.annotationType_, this.name_ + "." + o.toString());
      }
      for (var _ = this.target_; _ && _ !== sr; ) {
        var s = ro(_, o);
        if (s) {
          var a = t.make_(this, o, s, _);
          if (a === 0)
            return;
          if (a === 1)
            break;
        }
        _ = Object.getPrototypeOf(_);
      }
      Di(this, t, o);
    }
  }, n.extend_ = function(o, t, i, _) {
    if (_ === void 0 && (_ = !1), i === !0 && (i = this.defaultAnnotation_), i === !1)
      return this.defineProperty_(o, t, _);
    var s = i.extend_(this, o, t, _);
    return s && Di(this, i, o), s;
  }, n.defineProperty_ = function(o, t, i) {
    i === void 0 && (i = !1);
    try {
      Oe();
      var _ = this.delete_(o);
      if (!_)
        return _;
      if (Ie(this)) {
        var s = Ae(this, {
          object: this.proxy_ || this.target_,
          name: o,
          type: qe,
          newValue: t.value
        });
        if (!s)
          return null;
        var a = s.newValue;
        t.value !== a && (t = Un({}, t, {
          value: a
        }));
      }
      if (i) {
        if (!Reflect.defineProperty(this.target_, o, t))
          return !1;
      } else
        Be(this.target_, o, t);
      this.notifyPropertyAddition_(o, t.value);
    } finally {
      Re();
    }
    return !0;
  }, n.defineObservableProperty_ = function(o, t, i, _) {
    _ === void 0 && (_ = !1);
    try {
      Oe();
      var s = this.delete_(o);
      if (!s)
        return s;
      if (Ie(this)) {
        var a = Ae(this, {
          object: this.proxy_ || this.target_,
          name: o,
          type: qe,
          newValue: t
        });
        if (!a)
          return null;
        t = a.newValue;
      }
      var u = vi(o), c = {
        configurable: b.safeDescriptors ? this.isPlainObject_ : !0,
        enumerable: !0,
        get: u.get,
        set: u.set
      };
      if (_) {
        if (!Reflect.defineProperty(this.target_, o, c))
          return !1;
      } else
        Be(this.target_, o, c);
      var d = new un(t, i, "ObservableObject.key", !1);
      this.values_.set(o, d), this.notifyPropertyAddition_(o, d.value_);
    } finally {
      Re();
    }
    return !0;
  }, n.defineComputedProperty_ = function(o, t, i) {
    i === void 0 && (i = !1);
    try {
      Oe();
      var _ = this.delete_(o);
      if (!_)
        return _;
      if (Ie(this)) {
        var s = Ae(this, {
          object: this.proxy_ || this.target_,
          name: o,
          type: qe,
          newValue: void 0
        });
        if (!s)
          return null;
      }
      t.name || (t.name = "ObservableObject.key"), t.context = this.proxy_ || this.target_;
      var a = vi(o), u = {
        configurable: b.safeDescriptors ? this.isPlainObject_ : !0,
        enumerable: !1,
        get: a.get,
        set: a.set
      };
      if (i) {
        if (!Reflect.defineProperty(this.target_, o, u))
          return !1;
      } else
        Be(this.target_, o, u);
      this.values_.set(o, new qn(t)), this.notifyPropertyAddition_(o, void 0);
    } finally {
      Re();
    }
    return !0;
  }, n.delete_ = function(o, t) {
    if (t === void 0 && (t = !1), !Fe(this.target_, o))
      return !0;
    if (Ie(this)) {
      var i = Ae(this, {
        object: this.proxy_ || this.target_,
        name: o,
        type: Hi
      });
      if (!i)
        return null;
    }
    try {
      var _, s;
      Oe();
      var a = Ue(this), u = !1, c = this.values_.get(o), d = void 0;
      if (!c && (a || u)) {
        var f;
        d = (f = ro(this.target_, o)) == null ? void 0 : f.value;
      }
      if (t) {
        if (!Reflect.deleteProperty(this.target_, o))
          return !1;
      } else
        delete this.target_[o];
      if (c && (this.values_.delete(o), c instanceof un && (d = c.value_), gs(c)), this.keysAtom_.reportChanged(), (_ = this.pendingKeys_) == null || (s = _.get(o)) == null || s.set(o in this.target_), a || u) {
        var O = {
          type: Hi,
          observableKind: "object",
          object: this.proxy_ || this.target_,
          debugObjectName: this.name_,
          oldValue: d,
          name: o
        };
        a && He(this, O);
      }
    } finally {
      Re();
    }
    return !0;
  }, n.observe_ = function(o, t) {
    return Er(this, o);
  }, n.intercept_ = function(o) {
    return Tr(this, o);
  }, n.notifyPropertyAddition_ = function(o, t) {
    var i, _, s = Ue(this), a = !1;
    if (s || a) {
      var u = s || a ? {
        type: qe,
        observableKind: "object",
        debugObjectName: this.name_,
        object: this.proxy_ || this.target_,
        name: o,
        newValue: t
      } : null;
      s && He(this, u);
    }
    (i = this.pendingKeys_) == null || (_ = i.get(o)) == null || _.set(!0), this.keysAtom_.reportChanged();
  }, n.ownKeys_ = function() {
    return this.keysAtom_.reportObserved(), Cn(this.target_);
  }, n.keys_ = function() {
    return this.keysAtom_.reportObserved(), Object.keys(this.target_);
  }, e;
}();
function Or(e, n) {
  var r;
  if (Fe(e, v))
    return e;
  var o = (r = n?.name) != null ? r : "ObservableObject", t = new Ks(e, /* @__PURE__ */ new Map(), String(o), nl(n));
  return ar(e, v, t), e;
}
var em = /* @__PURE__ */ tn("ObservableObjectAdministration", Ks);
function vi(e) {
  return Ui[e] || (Ui[e] = {
    get: function() {
      return this[v].getObservablePropValue_(e);
    },
    set: function(r) {
      return this[v].setObservablePropValue_(e, r);
    }
  });
}
function Dn(e) {
  return Ro(e) ? em(e[v]) : !1;
}
function Di(e, n, r) {
  var o;
  (o = e.target_[Pe]) == null || delete o[r];
}
var nm = /* @__PURE__ */ Ys(0), xo = 0, Ws = function() {
};
function rm(e, n) {
  Object.setPrototypeOf ? Object.setPrototypeOf(e.prototype, n) : e.prototype.__proto__ !== void 0 ? e.prototype.__proto__ = n : e.prototype = n;
}
rm(Ws, Array.prototype);
var Bt = /* @__PURE__ */ function(e, n, r) {
  ts(o, e);
  function o(i, _, s, a) {
    var u;
    s === void 0 && (s = "ObservableArray"), a === void 0 && (a = !1), u = e.call(this) || this;
    var c = new Pt(s, _, a, !0);
    if (c.proxy_ = yo(u), ns(yo(u), v, c), i && i.length) {
      var d = mr(!0);
      u.spliceWithArray(0, 0, i), pr(d);
    }
    return Object.defineProperty(yo(u), "0", nm), u;
  }
  var t = o.prototype;
  return t.concat = function() {
    this[v].atom_.reportObserved();
    for (var _ = arguments.length, s = new Array(_), a = 0; a < _; a++)
      s[a] = arguments[a];
    return Array.prototype.concat.apply(
      this.slice(),
      //@ts-ignore
      s.map(function(u) {
        return fr(u) ? u.slice() : u;
      })
    );
  }, t[r] = function() {
    var i = this, _ = 0;
    return nr({
      next: function() {
        return _ < i.length ? {
          value: i[_++],
          done: !1
        } : {
          done: !0,
          value: void 0
        };
      }
    });
  }, St(o, [{
    key: "length",
    get: function() {
      return this[v].getArrayLength_();
    },
    set: function(_) {
      this[v].setArrayLength_(_);
    }
  }, {
    key: n,
    get: function() {
      return "Array";
    }
  }]), o;
}(Ws, Symbol.toStringTag, Symbol.iterator);
Object.entries(ao).forEach(function(e) {
  var n = e[0], r = e[1];
  n !== "concat" && ar(Bt.prototype, n, r);
});
function Ys(e) {
  return {
    enumerable: !1,
    configurable: !0,
    get: function() {
      return this[v].get_(e);
    },
    set: function(r) {
      this[v].set_(e, r);
    }
  };
}
function om(e) {
  Be(Bt.prototype, "" + e, Ys(e));
}
function $s(e) {
  if (e > xo) {
    for (var n = xo; n < e + 100; n++)
      om(n);
    xo = e;
  }
}
$s(1e3);
function tm(e, n, r) {
  return new Bt(e, n, r);
}
function on(e, n) {
  if (typeof e == "object" && e !== null) {
    if (fr(e))
      return n !== void 0 && k(23), e[v].atom_;
    if (pn(e))
      return e.atom_;
    if (sn(e)) {
      if (n === void 0)
        return e.keysAtom_;
      var r = e.data_.get(n) || e.hasMap_.get(n);
      return r || k(25, n, ut(e)), r;
    }
    if (Dn(e)) {
      if (!n)
        return k(26);
      var o = e[v].values_.get(n);
      return o || k(27, n, ut(e)), o;
    }
    if (Ct(e) || hr(e) || _o(e))
      return e;
  } else if (ve(e) && _o(e[v]))
    return e[v];
  k(28);
}
function Js(e, n) {
  if (e || k(29), n !== void 0)
    return Js(on(e, n));
  if (Ct(e) || hr(e) || _o(e) || sn(e) || pn(e))
    return e;
  if (e[v])
    return e[v];
  k(24, e);
}
function ut(e, n) {
  var r;
  if (n !== void 0)
    r = on(e, n);
  else {
    if (vt(e))
      return e.name;
    Dn(e) || sn(e) || pn(e) ? r = Js(e) : r = on(e);
  }
  return r.name_;
}
var Pi = sr.toString;
function Lt(e, n, r) {
  return r === void 0 && (r = -1), dt(e, n, r);
}
function dt(e, n, r, o, t) {
  if (e === n)
    return e !== 0 || 1 / e === 1 / n;
  if (e == null || n == null)
    return !1;
  if (e !== e)
    return n !== n;
  var i = typeof e;
  if (i !== "function" && i !== "object" && typeof n != "object")
    return !1;
  var _ = Pi.call(e);
  if (_ !== Pi.call(n))
    return !1;
  switch (_) {
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
      r >= 0 && r++;
      break;
  }
  e = Bi(e), n = Bi(n);
  var s = _ === "[object Array]";
  if (!s) {
    if (typeof e != "object" || typeof n != "object")
      return !1;
    var a = e.constructor, u = n.constructor;
    if (a !== u && !(ve(a) && a instanceof a && ve(u) && u instanceof u) && "constructor" in e && "constructor" in n)
      return !1;
  }
  if (r === 0)
    return !1;
  r < 0 && (r = -1), o = o || [], t = t || [];
  for (var c = o.length; c--; )
    if (o[c] === e)
      return t[c] === n;
  if (o.push(e), t.push(n), s) {
    if (c = e.length, c !== n.length)
      return !1;
    for (; c--; )
      if (!dt(e[c], n[c], r - 1, o, t))
        return !1;
  } else {
    var d = Object.keys(e), f;
    if (c = d.length, Object.keys(n).length !== c)
      return !1;
    for (; c--; )
      if (f = d[c], !(Fe(n, f) && dt(e[f], n[f], r - 1, o, t)))
        return !1;
  }
  return o.pop(), t.pop(), !0;
}
function Bi(e) {
  return fr(e) ? e.slice() : yn(e) || sn(e) || ur(e) || pn(e) ? Array.from(e.entries()) : e;
}
function nr(e) {
  return e[Symbol.iterator] = im, e;
}
function im() {
  return this;
}
["Symbol", "Map", "Set"].forEach(function(e) {
  var n = Gt();
  typeof n[e] > "u" && k("MobX requires global '" + e + "' to be available or polyfilled");
});
typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ == "object" && __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
  spy: bl,
  extras: {
    getDebugName: ut
  },
  $mobx: v
});
class _m {
  constructor(n) {
    mn(this), this.state = n, this.getters = n.getters;
  }
  saveContent(n, r) {
    this.getters.getActiveTab(r).setTabContent(n);
  }
}
if (!rn)
  throw new Error("mobx-react-lite requires React with Hooks support");
if (!Wl)
  throw new Error("mobx-react-lite@3 requires mobx at least version 6 to be available");
function sm(e) {
  e();
}
function am(e) {
  e || (e = sm), Ll({ reactionScheduler: e });
}
function um(e) {
  return yl(e);
}
var dm = 1e4, cm = 1e4, lm = (
  /** @class */
  function() {
    function e(n) {
      var r = this;
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
        value: function(o) {
          o === void 0 && (o = dm), clearTimeout(r.sweepTimeout), r.sweepTimeout = void 0;
          var t = Date.now();
          r.registrations.forEach(function(i, _) {
            t - i.registeredAt >= o && (r.finalize(i.value), r.registrations.delete(_));
          }), r.registrations.size > 0 && r.scheduleSweep();
        }
      }), Object.defineProperty(this, "finalizeAllImmediately", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: function() {
          r.sweep(0);
        }
      });
    }
    return Object.defineProperty(e.prototype, "register", {
      enumerable: !1,
      configurable: !0,
      writable: !0,
      value: function(n, r, o) {
        this.registrations.set(o, {
          value: r,
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
        this.sweepTimeout === void 0 && (this.sweepTimeout = setTimeout(this.sweep, cm));
      }
    }), e;
  }()
), mm = typeof FinalizationRegistry < "u" ? FinalizationRegistry : lm, ct = new mm(function(e) {
  var n;
  (n = e.reaction) === null || n === void 0 || n.dispose(), e.reaction = null;
}), Li = globalThis && globalThis.__read || function(e, n) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var o = r.call(e), t, i = [], _;
  try {
    for (; (n === void 0 || n-- > 0) && !(t = o.next()).done; )
      i.push(t.value);
  } catch (s) {
    _ = { error: s };
  } finally {
    try {
      t && !t.done && (r = o.return) && r.call(o);
    } finally {
      if (_)
        throw _.error;
    }
  }
  return i;
};
function yi(e) {
  return "observer".concat(e);
}
var pm = (
  /** @class */
  function() {
    function e() {
    }
    return e;
  }()
);
function hm() {
  return new pm();
}
function Tm(e, n) {
  n === void 0 && (n = "observed");
  var r = Li(ee.useState(hm), 1), o = r[0], t = Li(ee.useState(), 2), i = t[1], _ = function() {
    return i([]);
  }, s = ee.useRef(null);
  s.current || (s.current = {
    reaction: null,
    mounted: !1,
    changedBeforeMount: !1
  });
  var a = s.current;
  a.reaction || (a.reaction = new Qn(yi(n), function() {
    a.mounted ? _() : a.changedBeforeMount = !0;
  }), ct.register(o, a, a)), ee.useDebugValue(a.reaction, um), ee.useEffect(function() {
    return ct.unregister(a), a.mounted = !0, a.reaction ? a.changedBeforeMount && (a.changedBeforeMount = !1, _()) : (a.reaction = new Qn(yi(n), function() {
      _();
    }), _()), function() {
      a.reaction.dispose(), a.reaction = null, a.mounted = !1, a.changedBeforeMount = !1;
    };
  }, []);
  var u, c;
  if (a.reaction.track(function() {
    try {
      u = e();
    } catch (d) {
      c = d;
    }
  }), c)
    throw c;
  return u;
}
var zs = typeof Symbol == "function" && Symbol.for, wi = zs ? Symbol.for("react.forward_ref") : typeof Xo == "function" && Xo(function(e) {
  return null;
}).$$typeof, xi = zs ? Symbol.for("react.memo") : typeof An == "function" && An(function(e) {
  return null;
}).$$typeof;
function xn(e, n) {
  var r;
  if (xi && e.$$typeof === xi)
    throw new Error("[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.");
  var o = (r = n?.forwardRef) !== null && r !== void 0 ? r : !1, t = e, i = e.displayName || e.name;
  if (wi && e.$$typeof === wi && (o = !0, t = e.render, typeof t != "function"))
    throw new Error("[mobx-react-lite] `render` property of ForwardRef was not a function");
  var _ = function(s, a) {
    return Tm(function() {
      return t(s, a);
    }, i);
  };
  return i !== "" && (_.displayName = i), e.contextTypes && (_.contextTypes = e.contextTypes), o && (_ = Xo(_)), _ = An(_), fm(e, _), _;
}
var Em = {
  $$typeof: !0,
  render: !0,
  compare: !0,
  type: !0,
  // Don't redefine `displayName`,
  // it's defined as getter-setter pair on `memo` (see #3192).
  displayName: !0
};
function fm(e, n) {
  Object.keys(e).forEach(function(r) {
    Em[r] || Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(e, r));
  });
}
globalThis && globalThis.__read;
var Mo;
am(ha);
Mo = ct.finalizeAllImmediately;
const hn = () => ln(Ir).actions, Rr = () => ln(Ir), br = () => ln(Ir).getters, qs = () => ln(Ir).services, lt = [
  "vs-dark",
  "Monokai",
  "Dracula",
  "Dreamweaver",
  "GitHub",
  "Nord",
  "Twilight",
  "IDLE",
  "Eiffel",
  "Tomorrow"
], yt = {
  js: "javascript",
  ts: "typescript",
  tsx: "typescript",
  jsx: "typescript",
  html: "html",
  htm: "html",
  txt: "text",
  css: "css"
}, Qs = 9, Om = [
  "java",
  "python",
  "cpp",
  "c",
  "go",
  "cs",
  "javascript"
], Rm = () => [...new Set(Object.values(yt))].map((n) => ({
  value: n,
  label: n
})), bm = xn(() => {
  const e = Rm(), n = br(), r = n.getActiveLanguage(), o = n.getActiveTab();
  return /* @__PURE__ */ w(
    n_,
    {
      size: "middle",
      onChange: (i) => {
        o.lang = i;
      },
      value: r,
      style: { width: 200 },
      options: e
    }
  );
});
let vr;
const Nm = new Uint8Array(16);
function Im() {
  if (!vr && (vr = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !vr))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return vr(Nm);
}
const de = [];
for (let e = 0; e < 256; ++e)
  de.push((e + 256).toString(16).slice(1));
function Am(e, n = 0) {
  return (de[e[n + 0]] + de[e[n + 1]] + de[e[n + 2]] + de[e[n + 3]] + "-" + de[e[n + 4]] + de[e[n + 5]] + "-" + de[e[n + 6]] + de[e[n + 7]] + "-" + de[e[n + 8]] + de[e[n + 9]] + "-" + de[e[n + 10]] + de[e[n + 11]] + de[e[n + 12]] + de[e[n + 13]] + de[e[n + 14]] + de[e[n + 15]]).toLowerCase();
}
const gm = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Mi = {
  randomUUID: gm
};
function Gm(e, n, r) {
  if (Mi.randomUUID && !n && !e)
    return Mi.randomUUID();
  e = e || {};
  const o = e.random || (e.rng || Im)();
  if (o[6] = o[6] & 15 | 64, o[8] = o[8] & 63 | 128, n) {
    r = r || 0;
    for (let t = 0; t < 16; ++t)
      n[r + t] = o[t];
    return n;
  }
  return Am(o);
}
class Zs {
  constructor({ lastNumber: n, fileData: r, instance: o }) {
    this._key = Gm(), this._fileHandle = null, this._label = "Untitled", this.executeMessage = "", this.isExecuteError = !1, this._content = "", this.idx = 0, this.lang = "text", this.wasChanged = !1, mn(this), o ? this.initUsingInstance(o) : r && this.initUsingFileData(r), n && (this.idx = n + 1);
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
`)[0].slice(0, 10), o = `${n.replace(" ", "").replace(`
`, "").length > 1 ? n : "Untitled"} •`;
    this.wasChanged = !0, this.setLabel(o);
  }
  setTabContent(n) {
    this._content = n, this.updateLabel();
  }
  getContent() {
    return this._content;
  }
  updateExecuteMessage(n) {
    if (this.isExecuteError = !1, n.error) {
      const r = n.error.split("^")[1].split(".")[0];
      return this.isExecuteError = !0, this.executeMessage = r;
    }
    this.executeMessage = n.output;
  }
  getKeyId() {
    return this._key;
  }
  initUsingFileData(n) {
    this._fileHandle = n.fileHandle, this.lang = n.language, this._content = n.content, this._label = n.name;
  }
  initUsingInstance(n) {
    this._key = n._key, this._label = n._label, this.idx = n.idx, this._content = n._content, this._fileHandle = n._fileHandle, this.wasChanged = n.wasChanged, this.lang = n.lang, this.executeMessage = n.executeMessage, this.isExecuteError = n.isExecuteError;
  }
}
const Sm = (e) => e.length >= Qs;
class Cm {
  constructor(n) {
    mn(this), this.state = n;
  }
  createTab(n) {
    const r = this.state.content;
    if (Sm(r))
      return;
    const o = r.at(-1)?.idx, t = new Zs({ fileData: n, lastNumber: o });
    this.state.activeKey = t.getKeyId(), this.state.content.push(t);
  }
  removeTab(n) {
    const r = this.state.getters.getTabIndex(n), o = this.state.content[r - 1];
    this.state.content.splice(r, 1), n === this.state.activeKey && (this.state.activeKey = o.getKeyId());
  }
  changeActiveTab(n) {
    this.state.activeKey = n;
  }
}
const Um = (e) => e.map((n) => ({
  label: n.getLabel(),
  key: n.getKeyId()
})), Hm = Te(Ta)`
  color: ${Ho("secondaryGrey")};
  height: 50px;
  margin: 12px;
  min-width: 300px;
  .ant-tabs-nav::before{
    border-bottom: none;
  }
  .ant-tabs-tab {
    background: ${Ho("grey")};
  }
  .ant-tabs-tab-active {
    background: #2E3139 !important;
  }
  .ant-tabs-tab-btn{
    color: ${Ho("secondaryGrey")};
  }
`, vm = xn(() => {
  const { activeKey: e, content: n } = Rr(), r = hn(), o = Um(n);
  return /* @__PURE__ */ w(
    Hm,
    {
      type: "editable-card",
      onChange: (_) => {
        r.tabs.changeActiveTab(_);
      },
      activeKey: e,
      onEdit: (_, s) => {
        s === "add" ? r.tabs.createTab() : r.tabs.removeTab(_);
      },
      items: ws(o),
      hideAdd: n.length >= Qs
    }
  );
}), Dm = xn(() => {
  const e = hn(), { theme: n } = Rr(), r = new gt();
  return /* @__PURE__ */ w(
    n_,
    {
      size: "middle",
      defaultValue: "vs-dark",
      onChange: (t) => {
        r.set("EDITOR_THEME", t), e.changeTheme(t);
      },
      value: n,
      style: { width: 200 },
      options: lt.map((t) => ({
        value: t,
        label: t
      }))
    }
  );
});
function Pm(e, n, r) {
  return n in e ? Object.defineProperty(e, n, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[n] = r, e;
}
function ki(e, n) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    n && (o = o.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), r.push.apply(r, o);
  }
  return r;
}
function ji(e) {
  for (var n = 1; n < arguments.length; n++) {
    var r = arguments[n] != null ? arguments[n] : {};
    n % 2 ? ki(Object(r), !0).forEach(function(o) {
      Pm(e, o, r[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ki(Object(r)).forEach(function(o) {
      Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(r, o));
    });
  }
  return e;
}
function Bm(e, n) {
  if (e == null)
    return {};
  var r = {}, o = Object.keys(e), t, i;
  for (i = 0; i < o.length; i++)
    t = o[i], !(n.indexOf(t) >= 0) && (r[t] = e[t]);
  return r;
}
function Lm(e, n) {
  if (e == null)
    return {};
  var r = Bm(e, n), o, t;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (t = 0; t < i.length; t++)
      o = i[t], !(n.indexOf(o) >= 0) && Object.prototype.propertyIsEnumerable.call(e, o) && (r[o] = e[o]);
  }
  return r;
}
function ym(e, n) {
  return wm(e) || xm(e, n) || Mm(e, n) || km();
}
function wm(e) {
  if (Array.isArray(e))
    return e;
}
function xm(e, n) {
  if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(e)))) {
    var r = [], o = !0, t = !1, i = void 0;
    try {
      for (var _ = e[Symbol.iterator](), s; !(o = (s = _.next()).done) && (r.push(s.value), !(n && r.length === n)); o = !0)
        ;
    } catch (a) {
      t = !0, i = a;
    } finally {
      try {
        !o && _.return != null && _.return();
      } finally {
        if (t)
          throw i;
      }
    }
    return r;
  }
}
function Mm(e, n) {
  if (e) {
    if (typeof e == "string")
      return Fi(e, n);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Fi(e, n);
  }
}
function Fi(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var r = 0, o = new Array(n); r < n; r++)
    o[r] = e[r];
  return o;
}
function km() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function jm(e, n, r) {
  return n in e ? Object.defineProperty(e, n, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[n] = r, e;
}
function Vi(e, n) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    n && (o = o.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), r.push.apply(r, o);
  }
  return r;
}
function Xi(e) {
  for (var n = 1; n < arguments.length; n++) {
    var r = arguments[n] != null ? arguments[n] : {};
    n % 2 ? Vi(Object(r), !0).forEach(function(o) {
      jm(e, o, r[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Vi(Object(r)).forEach(function(o) {
      Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(r, o));
    });
  }
  return e;
}
function Fm() {
  for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
    n[r] = arguments[r];
  return function(o) {
    return n.reduceRight(function(t, i) {
      return i(t);
    }, o);
  };
}
function Fn(e) {
  return function n() {
    for (var r = this, o = arguments.length, t = new Array(o), i = 0; i < o; i++)
      t[i] = arguments[i];
    return t.length >= e.length ? e.apply(this, t) : function() {
      for (var _ = arguments.length, s = new Array(_), a = 0; a < _; a++)
        s[a] = arguments[a];
      return n.apply(r, [].concat(t, s));
    };
  };
}
function co(e) {
  return {}.toString.call(e).includes("Object");
}
function Vm(e) {
  return !Object.keys(e).length;
}
function rr(e) {
  return typeof e == "function";
}
function Xm(e, n) {
  return Object.prototype.hasOwnProperty.call(e, n);
}
function Km(e, n) {
  return co(n) || nn("changeType"), Object.keys(n).some(function(r) {
    return !Xm(e, r);
  }) && nn("changeField"), n;
}
function Wm(e) {
  rr(e) || nn("selectorType");
}
function Ym(e) {
  rr(e) || co(e) || nn("handlerType"), co(e) && Object.values(e).some(function(n) {
    return !rr(n);
  }) && nn("handlersType");
}
function $m(e) {
  e || nn("initialIsRequired"), co(e) || nn("initialType"), Vm(e) && nn("initialContent");
}
function Jm(e, n) {
  throw new Error(e[n] || e.default);
}
var zm = {
  initialIsRequired: "initial state is required",
  initialType: "initial state should be an object",
  initialContent: "initial state shouldn't be an empty object",
  handlerType: "handler should be an object or a function",
  handlersType: "all handlers should be a functions",
  selectorType: "selector should be a function",
  changeType: "provided value of changes should be an object",
  changeField: 'it seams you want to change a field in the state which is not specified in the "initial" state',
  default: "an unknown error accured in `state-local` package"
}, nn = Fn(Jm)(zm), Dr = {
  changes: Km,
  selector: Wm,
  handler: Ym,
  initial: $m
};
function qm(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  Dr.initial(e), Dr.handler(n);
  var r = {
    current: e
  }, o = Fn(ep)(r, n), t = Fn(Zm)(r), i = Fn(Dr.changes)(e), _ = Fn(Qm)(r);
  function s() {
    var u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function(c) {
      return c;
    };
    return Dr.selector(u), u(r.current);
  }
  function a(u) {
    Fm(o, t, i, _)(u);
  }
  return [s, a];
}
function Qm(e, n) {
  return rr(n) ? n(e.current) : n;
}
function Zm(e, n) {
  return e.current = Xi(Xi({}, e.current), n), n;
}
function ep(e, n, r) {
  return rr(n) ? n(e.current) : Object.keys(r).forEach(function(o) {
    var t;
    return (t = n[o]) === null || t === void 0 ? void 0 : t.call(n, e.current[o]);
  }), r;
}
var np = {
  create: qm
}, rp = {
  paths: {
    vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.36.1/min/vs"
  }
};
function op(e) {
  return function n() {
    for (var r = this, o = arguments.length, t = new Array(o), i = 0; i < o; i++)
      t[i] = arguments[i];
    return t.length >= e.length ? e.apply(this, t) : function() {
      for (var _ = arguments.length, s = new Array(_), a = 0; a < _; a++)
        s[a] = arguments[a];
      return n.apply(r, [].concat(t, s));
    };
  };
}
function tp(e) {
  return {}.toString.call(e).includes("Object");
}
function ip(e) {
  return e || Ki("configIsRequired"), tp(e) || Ki("configType"), e.urls ? (_p(), {
    paths: {
      vs: e.urls.monacoBase
    }
  }) : e;
}
function _p() {
  console.warn(ea.deprecation);
}
function sp(e, n) {
  throw new Error(e[n] || e.default);
}
var ea = {
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
}, Ki = op(sp)(ea), ap = {
  config: ip
}, up = function() {
  for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
    r[o] = arguments[o];
  return function(t) {
    return r.reduceRight(function(i, _) {
      return _(i);
    }, t);
  };
};
function na(e, n) {
  return Object.keys(n).forEach(function(r) {
    n[r] instanceof Object && e[r] && Object.assign(n[r], na(e[r], n[r]));
  }), ji(ji({}, e), n);
}
var dp = {
  type: "cancelation",
  msg: "operation is manually canceled"
};
function ko(e) {
  var n = !1, r = new Promise(function(o, t) {
    e.then(function(i) {
      return n ? t(dp) : o(i);
    }), e.catch(t);
  });
  return r.cancel = function() {
    return n = !0;
  }, r;
}
var cp = np.create({
  config: rp,
  isInitialized: !1,
  resolve: null,
  reject: null,
  monaco: null
}), ra = ym(cp, 2), Nr = ra[0], Ao = ra[1];
function lp(e) {
  var n = ap.config(e), r = n.monaco, o = Lm(n, ["monaco"]);
  Ao(function(t) {
    return {
      config: na(t.config, o),
      monaco: r
    };
  });
}
function mp() {
  var e = Nr(function(n) {
    var r = n.monaco, o = n.isInitialized, t = n.resolve;
    return {
      monaco: r,
      isInitialized: o,
      resolve: t
    };
  });
  if (!e.isInitialized) {
    if (Ao({
      isInitialized: !0
    }), e.monaco)
      return e.resolve(e.monaco), ko(jo);
    if (window.monaco && window.monaco.editor)
      return oa(window.monaco), e.resolve(window.monaco), ko(jo);
    up(pp, Tp)(Ep);
  }
  return ko(jo);
}
function pp(e) {
  return document.body.appendChild(e);
}
function hp(e) {
  var n = document.createElement("script");
  return e && (n.src = e), n;
}
function Tp(e) {
  var n = Nr(function(o) {
    var t = o.config, i = o.reject;
    return {
      config: t,
      reject: i
    };
  }), r = hp("".concat(n.config.paths.vs, "/loader.js"));
  return r.onload = function() {
    return e();
  }, r.onerror = n.reject, r;
}
function Ep() {
  var e = Nr(function(r) {
    var o = r.config, t = r.resolve, i = r.reject;
    return {
      config: o,
      resolve: t,
      reject: i
    };
  }), n = window.require;
  n.config(e.config), n(["vs/editor/editor.main"], function(r) {
    oa(r), e.resolve(r);
  }, function(r) {
    e.reject(r);
  });
}
function oa(e) {
  Nr().monaco || Ao({
    monaco: e
  });
}
function fp() {
  return Nr(function(e) {
    var n = e.monaco;
    return n;
  });
}
var jo = new Promise(function(e, n) {
  return Ao({
    resolve: e,
    reject: n
  });
}), lo = {
  config: lp,
  init: mp,
  __getMonacoInstance: fp
}, Op = { wrapper: { display: "flex", position: "relative", textAlign: "initial" }, fullWidth: { width: "100%" }, hide: { display: "none" } }, Fo = Op, Rp = { container: { display: "flex", height: "100%", width: "100%", justifyContent: "center", alignItems: "center" } }, bp = Rp;
function Np({ children: e }) {
  return ee.createElement("div", { style: bp.container }, e);
}
var Ip = Np, Ap = Ip;
function gp({ width: e, height: n, isEditorReady: r, loading: o, _ref: t, className: i, wrapperProps: _ }) {
  return ee.createElement("section", { style: { ...Fo.wrapper, width: e, height: n }, ..._ }, !r && ee.createElement(Ap, null, o), ee.createElement("div", { ref: t, style: { ...Fo.fullWidth, ...!r && Fo.hide }, className: i }));
}
var Gp = gp, ta = An(Gp);
function Sp(e) {
  ge(e, []);
}
var wt = Sp;
function Cp(e, n, r = !0) {
  let o = _e(!0);
  ge(o.current || !r ? () => {
    o.current = !1;
  } : e, n);
}
var Ne = Cp;
function Wn() {
}
function In(e, n, r, o) {
  return Up(e, o) || Hp(e, n, r, o);
}
function Up(e, n) {
  return e.editor.getModel(ia(e, n));
}
function Hp(e, n, r, o) {
  return e.editor.createModel(n, r, o ? ia(e, o) : void 0);
}
function ia(e, n) {
  return e.Uri.parse(n);
}
function vp({ original: e, modified: n, language: r, originalLanguage: o, modifiedLanguage: t, originalModelPath: i, modifiedModelPath: _, keepCurrentOriginalModel: s = !1, keepCurrentModifiedModel: a = !1, theme: u = "light", loading: c = "Loading...", options: d = {}, height: f = "100%", width: O = "100%", className: l, wrapperProps: m = {}, beforeMount: h = Wn, onMount: N = Wn }) {
  let [R, G] = rn(!1), [C, T] = rn(!0), H = _e(null), M = _e(null), z = _e(null), P = _e(N), y = _e(h), be = _e(!1);
  wt(() => {
    let x = lo.init();
    return x.then((Q) => (M.current = Q) && T(!1)).catch((Q) => Q?.type !== "cancelation" && console.error("Monaco initialization: error:", Q)), () => H.current ? me() : x.cancel();
  }), Ne(() => {
    let x = H.current.getModifiedEditor();
    x.getOption(M.current.editor.EditorOption.readOnly) ? x.setValue(n || "") : n !== x.getValue() && (x.executeEdits("", [{ range: x.getModel().getFullModelRange(), text: n || "", forceMoveMarkers: !0 }]), x.pushUndoStop());
  }, [n], R), Ne(() => {
    H.current?.getModel()?.original.setValue(e || "");
  }, [e], R), Ne(() => {
    let { original: x, modified: Q } = H.current.getModel();
    M.current.editor.setModelLanguage(x, o || r || "text"), M.current.editor.setModelLanguage(Q, t || r || "text");
  }, [r, o, t], R), Ne(() => {
    M.current?.editor.setTheme(u);
  }, [u], R), Ne(() => {
    H.current?.updateOptions(d);
  }, [d], R);
  let ie = $r(() => {
    if (!M.current)
      return;
    y.current(M.current);
    let x = In(M.current, e || "", o || r || "text", i || ""), Q = In(M.current, n || "", t || r || "text", _ || "");
    H.current?.setModel({ original: x, modified: Q });
  }, [r, n, t, e, o, i, _]), le = $r(() => {
    !be.current && z.current && (H.current = M.current.editor.createDiffEditor(z.current, { automaticLayout: !0, ...d }), ie(), M.current?.editor.setTheme(u), G(!0), be.current = !0);
  }, [d, u, ie]);
  ge(() => {
    R && P.current(H.current, M.current);
  }, [R]), ge(() => {
    !C && !R && le();
  }, [C, R, le]), Ne(() => {
    if (H.current && M.current) {
      let x = H.current.getOriginalEditor(), Q = In(M.current, e || "", o || r || "text", i || "");
      Q !== x.getModel() && x.setModel(Q);
    }
  }, [i], R), Ne(() => {
    if (H.current && M.current) {
      let x = H.current.getModifiedEditor(), Q = In(M.current, n || "", t || r || "text", _ || "");
      Q !== x.getModel() && x.setModel(Q);
    }
  }, [_], R);
  function me() {
    let x = H.current?.getModel();
    s || x?.original?.dispose(), a || x?.modified?.dispose(), H.current?.dispose();
  }
  return ee.createElement(ta, { width: O, height: f, isEditorReady: R, loading: c, _ref: z, className: l, wrapperProps: m });
}
var Dp = vp;
An(Dp);
function Pp() {
  let [e, n] = rn(lo.__getMonacoInstance());
  return wt(() => {
    let r;
    return e || (r = lo.init(), r.then((o) => {
      n(o);
    })), () => r?.cancel();
  }), e;
}
var _a = Pp;
function Bp(e) {
  let n = _e();
  return ge(() => {
    n.current = e;
  }, [e]), n.current;
}
var Lp = Bp, Pr = /* @__PURE__ */ new Map();
function yp({ defaultValue: e, defaultLanguage: n, defaultPath: r, value: o, language: t, path: i, theme: _ = "light", line: s, loading: a = "Loading...", options: u = {}, overrideServices: c = {}, saveViewState: d = !0, keepCurrentModel: f = !1, width: O = "100%", height: l = "100%", className: m, wrapperProps: h = {}, beforeMount: N = Wn, onMount: R = Wn, onChange: G, onValidate: C = Wn }) {
  let [T, H] = rn(!1), [M, z] = rn(!0), P = _e(null), y = _e(null), be = _e(null), ie = _e(R), le = _e(N), me = _e(), x = _e(o), Q = Lp(i), Ee = _e(!1), pe = _e(!1);
  wt(() => {
    let ne = lo.init();
    return ne.then((g) => (P.current = g) && z(!1)).catch((g) => g?.type !== "cancelation" && console.error("Monaco initialization: error:", g)), () => y.current ? Ye() : ne.cancel();
  }), Ne(() => {
    let ne = In(P.current, e || o || "", n || t || "", i || r || "");
    ne !== y.current?.getModel() && (d && Pr.set(Q, y.current?.saveViewState()), y.current?.setModel(ne), d && y.current?.restoreViewState(Pr.get(i)));
  }, [i], T), Ne(() => {
    y.current?.updateOptions(u);
  }, [u], T), Ne(() => {
    !y.current || o === void 0 || (y.current.getOption(P.current.editor.EditorOption.readOnly) ? y.current.setValue(o) : o !== y.current.getValue() && (pe.current = !0, y.current.executeEdits("", [{ range: y.current.getModel().getFullModelRange(), text: o, forceMoveMarkers: !0 }]), y.current.pushUndoStop(), pe.current = !1));
  }, [o], T), Ne(() => {
    let ne = y.current?.getModel();
    ne && t && P.current?.editor.setModelLanguage(ne, t);
  }, [t], T), Ne(() => {
    s !== void 0 && y.current?.revealLine(s);
  }, [s], T), Ne(() => {
    P.current?.editor.setTheme(_);
  }, [_], T);
  let We = $r(() => {
    if (!(!be.current || !P.current) && !Ee.current) {
      le.current(P.current);
      let ne = i || r, g = In(P.current, o || e || "", n || t || "", ne || "");
      y.current = P.current?.editor.create(be.current, { model: g, automaticLayout: !0, ...u }, c), d && y.current.restoreViewState(Pr.get(ne)), P.current.editor.setTheme(_), H(!0), Ee.current = !0;
    }
  }, [e, n, r, o, t, i, u, c, d, _]);
  ge(() => {
    T && ie.current(y.current, P.current);
  }, [T]), ge(() => {
    !M && !T && We();
  }, [M, T, We]), x.current = o, ge(() => {
    T && G && (me.current?.dispose(), me.current = y.current?.onDidChangeModelContent((ne) => {
      pe.current || G(y.current.getValue(), ne);
    }));
  }, [T, G]), ge(() => {
    if (T) {
      let ne = P.current.editor.onDidChangeMarkers((g) => {
        let A = y.current.getModel()?.uri;
        if (A && g.find((S) => S.path === A.path)) {
          let S = P.current.editor.getModelMarkers({ resource: A });
          C?.(S);
        }
      });
      return () => {
        ne?.dispose();
      };
    }
    return () => {
    };
  }, [T, C]);
  function Ye() {
    me.current?.dispose(), f ? d && Pr.set(i, y.current.saveViewState()) : y.current.getModel()?.dispose(), y.current.dispose();
  }
  return ee.createElement(ta, { width: O, height: l, isEditorReady: T, loading: a, _ref: be, className: m, wrapperProps: h });
}
var wp = yp, xp = An(wp), Mp = xp;
const kp = {
  fontSize: 20,
  glyphMargin: !1,
  lineNumbersMinChars: 3,
  lineDecorationsWidth: 0,
  minimap: { enabled: !1 }
}, jp = [1, 2, 3, 4, 5, 6, 7, 8, 9], Fp = () => {
  const e = B_(), { tabs: n } = hn(), { content: r } = Rr();
  ge(() => (e.on(Object.fromEntries(jp.map((o) => {
    const i = r[o - 1]?.getKeyId();
    return [
      o.toString(),
      i ? () => n.changeActiveTab(i) : null
    ];
  }))), () => {
    e.clear();
  }), [r.length]);
}, Vp = (e) => ot(e) ? "name" in e && typeof e.name == "string" && "type" in e && typeof e.type == "string" && "content" in e && typeof e.content == "string" : !1, sa = (e) => {
  const n = e.split(".").at(-1);
  return Xp(n) ? [yt[n], n] : ["text", n];
};
function Xp(e) {
  return e in yt;
}
const go = {
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
}, Kp = {
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
}, Wp = () => async () => {
  if ("showOpenFilePicker" in window) {
    const [e] = await window.showOpenFilePicker(Kp), n = await e.getFile(), r = await n.text(), [o] = sa(n.name);
    return {
      name: n.name,
      type: n.type,
      content: r,
      fileHandle: e,
      language: o
    };
  }
  console.warn(go.NotSupportedByBrowser());
}, Yp = () => async (e, n) => {
  try {
    let r = e;
    tc(e?.createWritable) || (r = await window.showSaveFilePicker());
    const o = await r.createWritable();
    return await o.write(n), await o.close(), r;
  } catch {
    console.warn(go.NotSupportedByBrowser());
  }
}, aa = () => {
  const e = Wp(), n = Yp(), r = hn(), o = br();
  return {
    openFile: $r(async () => {
      const _ = await e();
      Vp(_) && r.tabs.createTab(_);
    }, []),
    saveFile: async () => {
      const _ = o.getActiveTab(), s = _.getFileHandle(), a = _.getContent();
      if (!_.wasChanged)
        return;
      const u = await n(s, a);
      u && (_.setFileHandle(u), _.lang = sa(u.name));
    }
  };
}, $p = () => {
  const e = hn(), n = B_(), { openFile: r, saveFile: o } = aa();
  Fp(), ge(() => (n.on({
    O: r,
    S: o,
    N: () => {
      e.tabs.createTab();
    },
    T: () => {
      e.tabs.removeTab();
    }
  }), () => {
    n.clear();
  }), []);
}, Jp = Te.div`
  width: 100%;
`, zp = Te.div`
  ${tr("space-between")}
  ${Ve("100%", "48px")}
  margin-bottom: 10px;
`, qp = Te.div`
  width: 30%;
  display: flex;
  gap: 30px;
  align-items: flex-end;
`, Qp = xn(() => {
  const { editor: e } = hn(), n = br(), { theme: r, content: o } = Rr(), t = new gt(), i = Md(() => {
    console.log("saved to localStorage."), t.set("EDITOR_CONTENT_DATA", o);
  }, 1e3), _ = n.getActiveTabText(), s = n.getActiveLanguage();
  $p();
  const a = _a(), u = (c) => {
    Y_(c) && (e.saveContent(c), i());
  };
  return ge(() => {
    a?.editor.setTheme(r);
  }, [r]), /* @__PURE__ */ Ce(Jp, { children: [
    /* @__PURE__ */ Ce(zp, { children: [
      /* @__PURE__ */ w(vm, {}),
      /* @__PURE__ */ Ce(qp, { children: [
        /* @__PURE__ */ w(Dm, {}),
        /* @__PURE__ */ w(bm, {})
      ] })
    ] }),
    /* @__PURE__ */ w(
      Mp,
      {
        height: "90vh",
        theme: "vs-dark",
        onChange: u,
        language: s,
        value: ws(_),
        options: kp
      }
    )
  ] });
}), Zp = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMjMiIHZpZXdCb3g9IjAgMCAxNyAyMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0Ljk4OTcgMTUuNDA5NEwxNC40MjE2IDE1Ljc3NTJDMTQuNzcxMiAxNS40NTUxIDE1LjAzMzQgMTQuOTk3OCAxNS4wMzM0IDE0LjU0MDZDMTUuMDMzNCAxMy43NjMzIDE0LjY4MzggMTMuMTIzMSAxMy41NDc1IDEyLjU3NDRMMy44NDU3NSA4LjEzOTA3QzEuODc5MTcgNy4yMjQ1NiAwLjY1NTUxOCA2LjA4MTQ0IDAuNjU1NTE4IDQuMDIzODFDMC42NTU1MTggMi4xNDkwOCAxLjU3MzI1IDAuOTE0NTAyIDIuOTcxNzEgMEMyLjc1MzIgMC4zMjAwNzYgMi42MjIxIDAuNzMxNjAyIDIuNjIyMSAxLjIzNDU4QzIuNjIyMSAyLjM3NzcgMy41Mzk4NCAyLjg4MDY4IDQuNDU3NTcgMy4yOTIyMUwxMy44OTcyIDcuNjM2MDlDMTUuNjAxNSA4LjQxMzQyIDE3IDkuNjQ3OTkgMTcgMTEuNzk3MUMxNyAxMy41MzQ2IDE2LjIxMzQgMTQuNjMyIDE0Ljk4OTcgMTUuNDA5NFoiIGZpbGw9IiMwMTY4QTIiLz4KPHBhdGggZD0iTTEwLjU5MzMgMTEuMTM1OUwxMy42NTI0IDEyLjU1MzRDMTQuNzg4NyAxMy4xMDIxIDE1LjEzODMgMTMuNjk2NSAxNS4xMzgzIDE0LjUxOTZDMTUuMTM4MyAxNC45NzY4IDE0Ljg3NjEgMTUuNDM0MSAxNC41MjY0IDE1Ljc1NDJMOS4zNjk2MyAxMy4zNzY1TDEwLjI0MzcgMTIuODczNUMxMC45ODY2IDEyLjQ2MiAxMS4yMDUxIDEyLjE4NzYgMTEuMjA1MSAxMS45MTMzQzExLjI0ODggMTEuNTkzMiAxMS4wNzQgMTEuMzY0NiAxMC41OTMzIDExLjEzNTlaIiBmaWxsPSIjMDE2OEExIi8+CjxwYXRoIGQ9Ik01LjE1NjgxIDIyLjA4NTRDNC40NTc1OCAyMi40OTcgMy44NDU3NiAyMi43NzEzIDMuMTkwMjMgMjIuNzcxM0MxLjQ4NTg2IDIyLjc3MTMgMC4wODc0MDM1IDIxLjMwODEgMCAxOS41NzA1TDMuMjc3NjMgMTcuNTEyOUw4LjQzNDQ0IDE5LjkzNjNMNS4xNTY4MSAyMi4wODU0WiIgZmlsbD0iIzAxNjhBMSIvPgo8cGF0aCBkPSJNNi45MzI1NiAxMy4yODAxTDQuNDg1MjYgMTIuMTM3QzMuMzkyNzEgMTEuNjM0IDIuMzg3NTcgMTEuMjIyNSAyLjM4NzU3IDkuOTQyMTZDMi4zODc1NyA5LjMwMiAyLjU2MjM4IDguOTM2MiAyLjg2ODI5IDguNjE2MTNMOC4wMjUxIDEwLjk5MzhMNi43NTc3NSAxMS43NzEyQzYuNDA4MTQgMTEuOTk5OCA2LjE0NTkzIDEyLjE4MjcgNi4xNDU5MyAxMi41MDI4QzYuMTQ1OTMgMTIuNzc3MSA2LjQ5NTU0IDEzLjA1MTUgNi45MzI1NiAxMy4yODAxWiIgZmlsbD0iIzE1NTQ3NyIvPgo8cGF0aCBkPSJNMTUuOTA3NCAyM0MxNC41OTY0IDIxLjk0ODMgMTMuMTk3OSAyMS4yNjI0IDExLjUzNzMgMjAuNDM5NEwzLjc1ODM1IDE2LjgyNzFDMS43OTE3NyAxNS45MTI2IDAuNDgwNzEzIDE0LjY3OCAwLjQ4MDcxMyAxMi42NjYxQzAuNDgwNzEzIDEwLjY1NDIgMS4zOTg0NSA5LjY5Mzk5IDIuNTc4NCA4LjkxNjY2TDMuMDE1NDIgOC42NDIzMUMyLjcwOTUgOC45NjIzOSAyLjUzNDcgOS4zMjgxOSAyLjUzNDcgOS45NjgzNEMyLjUzNDcgMTEuMjAyOSAzLjU4MzU0IDExLjY2MDIgNC42MzIzOCAxMi4xNjMxTDEzLjY3ODcgMTYuMzI0MUMxNS4yNTE5IDE3LjAxIDE2LjY5NDEgMTguMjQ0NiAxNi42OTQxIDIwLjM0NzlDMTYuNzgxNSAyMS40OTExIDE2LjM0NDUgMjIuNDk3IDE1LjkwNzQgMjNaIiBmaWxsPSIjMTU1NDc3Ii8+Cjwvc3ZnPgo=", eh = Te.div`
  ${Ve("23%", "28px")}
  ${tr("flex-start", "center")}
  gap: 23px;
`, Br = Te.span`
  color: ${({ theme: e }) => e.light};
  cursor: pointer;
`, nh = Te.img`
  margin-bottom: 5px;
`, rh = () => {
  const e = qs(), n = hn(), { openFile: r, saveFile: o } = aa();
  return /* @__PURE__ */ Ce(eh, { children: [
    /* @__PURE__ */ w(nh, { src: Zp }),
    /* @__PURE__ */ w(Br, { onClick: r, children: "Open" }),
    /* @__PURE__ */ w(Br, { onClick: o, children: "Save" }),
    /* @__PURE__ */ w(Br, { onClick: () => {
      n.tabs.createTab();
    }, children: "New" }),
    /* @__PURE__ */ w(Br, { onClick: async () => {
      await e.requestCodeExecution();
    }, children: "Run" })
  ] });
}, oh = Te.div`
  ${Ve("23%", "100%")};
  ${tr("flex-start", "center")};
`, th = Te(En)`
  margin-top: 0;
  margin-left: 20px;
  svg {
    color: ${({ theme: e, $disabled: n }) => n ? e.secondaryGrey : e.light};
  }
`, ih = xn(() => {
  const e = qs(), r = !br().isAllowedToExecute();
  return /* @__PURE__ */ w(oh, { children: /* @__PURE__ */ w(th, { onClick: async () => {
    await e.requestCodeExecution();
  }, $disabled: r, children: /* @__PURE__ */ w(mc, {}) }) });
}), _h = Te.div`
  background: ${({ theme: e }) => e.grey};
  border-bottom: 2px solid ${({ theme: e }) => e.lightGrey};
  height: ${Ve("100%", "44px")};
  box-sizing: border-box;
  ${tr("space-between", "center")}
  ${pu(23)}
`, sh = Te.h2`
  color: ${({ theme: e }) => e.light}
`, ah = xn(() => {
  const n = br().getActiveTab();
  return /* @__PURE__ */ Ce(_h, { children: [
    /* @__PURE__ */ w(rh, {}),
    /* @__PURE__ */ Ce(sh, { children: [
      "$",
      n.getLabel(),
      " - CodeGear"
    ] }),
    /* @__PURE__ */ w(ih, {})
  ] });
});
class uh {
  constructor(n) {
    this.state = n, mn(this);
  }
  getActiveTab(n = this.state.activeKey) {
    return this.state.content.find((r) => r.getKeyId() === n);
  }
  getActiveTabText() {
    return this.getActiveTab()?.getContent();
  }
  getTabIndex(n = this.state.activeKey) {
    return this.state.content.findIndex((r) => r.getKeyId() === n);
  }
  getActiveLanguage() {
    return this.getActiveTab()?.lang;
  }
  isAllowedToExecute() {
    const n = this.getActiveLanguage();
    return Om.includes(n);
  }
}
class dh {
  constructor(n) {
    mn(this), this.state = n, this.getters = n.getters, this.tabs = new Cm(n), this.editor = new _m(n);
  }
  changeTheme(n) {
    this.state.theme = n;
  }
}
class ch {
  constructor(n) {
    mn(this), this.state = n, this.getters = n.getters;
  }
  async requestCodeExecution() {
    if (!this.getters.isAllowedToExecute())
      return;
    const n = this.getters.getActiveTab(), r = {
      code: n.getContent(),
      language: n.lang
    }, o = await yd.post(
      Ld.CODE_EXECUTOR_API,
      r
    );
    n.updateExecuteMessage(o.data);
  }
}
class lh {
  constructor() {
    this.activeKey = "", this.content = [], this.theme = "vs-dark", mn(this), this.getters = new uh(this), this.actions = new dh(this), this.services = new ch(this);
    const n = new gt();
    this.theme = n.get("EDITOR_THEME", "vs-dark");
    const r = n.get("EDITOR_CONTENT_DATA", []);
    r.length || this.actions.tabs.createTab();
    for (const t of r)
      this.content.push(new Zs({ instance: t }));
    const o = this.content[0];
    this.activeKey = o.getKeyId();
  }
}
const Ir = pa({}), mh = ({ children: e }) => {
  const n = new lh();
  return /* @__PURE__ */ w(Ir.Provider, { value: n, children: e });
};
function ph(e, n) {
  for (var r in n)
    e[r] = n[r];
  return e;
}
function Wi(e, n) {
  for (var r in e)
    if (r !== "__source" && !(r in n))
      return !0;
  for (var o in n)
    if (o !== "__source" && e[o] !== n[o])
      return !0;
  return !1;
}
function Yi(e) {
  this.props = e;
}
(Yi.prototype = new je()).isPureReactComponent = !0, Yi.prototype.shouldComponentUpdate = function(e, n) {
  return Wi(this.props, e) || Wi(this.state, n);
};
var $i = U.__b;
U.__b = function(e) {
  e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), $i && $i(e);
};
var hh = U.__e;
U.__e = function(e, n, r, o) {
  if (e.then) {
    for (var t, i = n; i = i.__; )
      if ((t = i.__c) && t.__c)
        return n.__e == null && (n.__e = r.__e, n.__k = r.__k), t.__c(e, n);
  }
  hh(e, n, r, o);
};
var Ji = U.unmount;
function ua(e, n, r) {
  return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(o) {
    typeof o.__c == "function" && o.__c();
  }), e.__c.__H = null), (e = ph({}, e)).__c != null && (e.__c.__P === r && (e.__c.__P = n), e.__c = null), e.__k = e.__k && e.__k.map(function(o) {
    return ua(o, n, r);
  })), e;
}
function da(e, n, r) {
  return e && (e.__v = null, e.__k = e.__k && e.__k.map(function(o) {
    return da(o, n, r);
  }), e.__c && e.__c.__P === n && (e.__e && r.insertBefore(e.__e, e.__d), e.__c.__e = !0, e.__c.__P = r)), e;
}
function Vo() {
  this.__u = 0, this.t = null, this.__b = null;
}
function ca(e) {
  var n = e.__.__c;
  return n && n.__a && n.__a(e);
}
function Lr() {
  this.u = null, this.o = null;
}
U.unmount = function(e) {
  var n = e.__c;
  n && n.__R && n.__R(), n && e.__h === !0 && (e.type = null), Ji && Ji(e);
}, (Vo.prototype = new je()).__c = function(e, n) {
  var r = n.__c, o = this;
  o.t == null && (o.t = []), o.t.push(r);
  var t = ca(o.__v), i = !1, _ = function() {
    i || (i = !0, r.__R = null, t ? t(s) : s());
  };
  r.__R = _;
  var s = function() {
    if (!--o.__u) {
      if (o.state.__a) {
        var u = o.state.__a;
        o.__v.__k[0] = da(u, u.__c.__P, u.__c.__O);
      }
      var c;
      for (o.setState({ __a: o.__b = null }); c = o.t.pop(); )
        c.forceUpdate();
    }
  }, a = n.__h === !0;
  o.__u++ || a || o.setState({ __a: o.__b = o.__v.__k[0] }), e.then(_, _);
}, Vo.prototype.componentWillUnmount = function() {
  this.t = [];
}, Vo.prototype.render = function(e, n) {
  if (this.__b) {
    if (this.__v.__k) {
      var r = document.createElement("div"), o = this.__v.__k[0].__c;
      this.__v.__k[0] = ua(this.__b, r, o.__O = o.__P);
    }
    this.__b = null;
  }
  var t = n.__a && ai(Jn, null, e.fallback);
  return t && (t.__h = null), [ai(Jn, null, n.__a ? null : e.children), t];
};
var zi = function(e, n, r) {
  if (++r[1] === r[0] && e.o.delete(n), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.o.size))
    for (r = e.u; r; ) {
      for (; r.length > 3; )
        r.pop()();
      if (r[1] < r[0])
        break;
      e.u = r = r[2];
    }
};
(Lr.prototype = new je()).__a = function(e) {
  var n = this, r = ca(n.__v), o = n.o.get(e);
  return o[0]++, function(t) {
    var i = function() {
      n.props.revealOrder ? (o.push(t), zi(n, e, o)) : t();
    };
    r ? r(i) : i();
  };
}, Lr.prototype.render = function(e) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var n = eo(e.children);
  e.revealOrder && e.revealOrder[0] === "b" && n.reverse();
  for (var r = n.length; r--; )
    this.o.set(n[r], this.u = [1, 0, this.u]);
  return e.children;
}, Lr.prototype.componentDidUpdate = Lr.prototype.componentDidMount = function() {
  var e = this;
  this.o.forEach(function(n, r) {
    zi(e, r, n);
  });
};
var Th = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, Eh = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, fh = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, Oh = /[A-Z0-9]/g, Rh = typeof document < "u", bh = function(e) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e);
};
je.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
  Object.defineProperty(je.prototype, e, { configurable: !0, get: function() {
    return this["UNSAFE_" + e];
  }, set: function(n) {
    Object.defineProperty(this, e, { configurable: !0, writable: !0, value: n });
  } });
});
var qi = U.event;
function Nh() {
}
function Ih() {
  return this.cancelBubble;
}
function Ah() {
  return this.defaultPrevented;
}
U.event = function(e) {
  return qi && (e = qi(e)), e.persist = Nh, e.isPropagationStopped = Ih, e.isDefaultPrevented = Ah, e.nativeEvent = e;
};
var gh = { enumerable: !1, configurable: !0, get: function() {
  return this.class;
} }, Qi = U.vnode;
U.vnode = function(e) {
  typeof e.type == "string" && function(n) {
    var r = n.props, o = n.type, t = {};
    for (var i in r) {
      var _ = r[i];
      if (!(i === "value" && "defaultValue" in r && _ == null || Rh && i === "children" && o === "noscript" || i === "class" || i === "className")) {
        var s = i.toLowerCase();
        i === "defaultValue" && "value" in r && r.value == null ? i = "value" : i === "download" && _ === !0 ? _ = "" : s === "ondoubleclick" ? i = "ondblclick" : s !== "onchange" || o !== "input" && o !== "textarea" || bh(r.type) ? s === "onfocus" ? i = "onfocusin" : s === "onblur" ? i = "onfocusout" : fh.test(i) ? i = s : o.indexOf("-") === -1 && Eh.test(i) ? i = i.replace(Oh, "-$&").toLowerCase() : _ === null && (_ = void 0) : s = i = "oninput", s === "oninput" && t[i = s] && (i = "oninputCapture"), t[i] = _;
      }
    }
    o == "select" && t.multiple && Array.isArray(t.value) && (t.value = eo(r.children).forEach(function(a) {
      a.props.selected = t.value.indexOf(a.props.value) != -1;
    })), o == "select" && t.defaultValue != null && (t.value = eo(r.children).forEach(function(a) {
      a.props.selected = t.multiple ? t.defaultValue.indexOf(a.props.value) != -1 : t.defaultValue == a.props.value;
    })), r.class && !r.className ? (t.class = r.class, Object.defineProperty(t, "className", gh)) : (r.className && !r.class || r.class && r.className) && (t.class = t.className = r.className), n.props = t;
  }(e), e.$$typeof = Th, Qi && Qi(e);
};
var Zi = U.__r;
U.__r = function(e) {
  Zi && Zi(e), e.__c;
};
var e_ = U.diffed;
U.diffed = function(e) {
  e_ && e_(e);
  var n = e.props, r = e.__e;
  r != null && e.type === "textarea" && "value" in n && n.value !== r.value && (r.value = n.value == null ? "" : n.value);
};
function Gh(e) {
  if (!(ot(e) && "base" in e && typeof e.base == "string" && "colors" in e && ot(e.colors)))
    throw new Error(go.WrongJsonObject("ThemeObject"));
}
const Sh = () => {
  const e = _a(), n = xd(), { theme: r } = Rr();
  return zd(() => {
    let o = 0;
    lt.forEach(async (t) => {
      try {
        const i = await Ch(`./themes/${t}.json`);
        Gh(i), e?.editor.defineTheme(t, i);
      } catch {
        console.log(go.ThemeUpload(t));
      }
      o += 1, o === lt.length && (e?.editor.setTheme(r), n.on());
    });
  }, [e]), n.val;
};
function Ch(e) {
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
      return new Promise(function(n, r) {
        (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(
          r.bind(null, new Error("Unknown variable dynamic import: " + e))
        );
      });
  }
}
const Uh = ({ children: e }) => {
  const n = Sh();
  return /* @__PURE__ */ w(jd, { when: n, children: e });
}, Hh = Te.div`
  ${Ve("100vw", "100vh")}
`, vh = Te.div`
  ${Ve("100%", "calc(100% - 45px)")};
  display: flex;
`, yh = () => /* @__PURE__ */ w(oc, { children: /* @__PURE__ */ w(mh, { children: /* @__PURE__ */ w(Uh, { children: /* @__PURE__ */ Ce(Hh, { children: [
  /* @__PURE__ */ w(ah, {}),
  /* @__PURE__ */ Ce(vh, { children: [
    /* @__PURE__ */ w(pc, {}),
    /* @__PURE__ */ w(Qp, {})
  ] })
] }) }) }) });
export {
  yh as Editor,
  uh as EditorGetters,
  lh as EditorStore,
  Ir as EditorStoreContext
};
