import { jsx as we, Fragment as As } from "react/jsx-runtime";
import { ConfigProvider as Ps, Button as xs, theme as Is, Select as Ns } from "antd";
import Fs from "react-smooth-scrollbar";
import * as Xe from "react";
import yt, { useState as Ko, createContext as Zo, useRef as ur, useEffect as qn, useMemo as Ms, useContext as Qt, useLayoutEffect as ea, useDebugValue as wi, createElement as js, useCallback as Ls } from "react";
import { createPortal as Vs } from "react-dom";
const Ad = ({ children: t, override: e, ...r }) => /* @__PURE__ */ we(Ps, { theme: {
  token: { colorPrimary: e }
}, children: /* @__PURE__ */ we(
  xs,
  {
    ...r,
    style: { minWidth: "85px" },
    "data-testid": "color-button",
    children: t
  }
) }), qs = {
  EDITOR_THEME: "EDITOR_THEME",
  EDITOR_CONTENT_DATA: "EDITOR_CONTENT_DATA",
  EDITOR_EXECUTE_MESSAGES: "EDITOR_EXECUTE_MESSAGES",
  EDITOR_FONT_SIZE: "EDITOR_FONT_SIZE",
  EDITOR_TAB_SIZE: "EDITOR_TAB_SIZE",
  EDITOR_CUSTOM_BACKGROUND: "EDITOR_CUSTOM_BACKGROUND",
  EDITOR_CUSTOM_COLOR: "EDITOR_CUSTOM_COLOR",
  EDITOR_HTML_PREVIEW: "EDITOR_HTML_PREVIEW",
  AUTH_TOKEN: "AUTH_TOKEN"
}, $s = (t) => typeof t == "string";
process.env.CLIENT_URL;
const Qs = "code_gear";
process.env.SERVER_PREFIX;
process.env.SERVER_PORT;
process.env.CODE_COMPILER_API_URL;
const ta = process.env.SERVER_URL ?? "http://localhost:6868", Bs = {
  CODE_EXECUTOR_API: "execute",
  _GRAPHQL: "graphql"
};
process.env.JWT_SECRET;
class Us {
  constructor(e) {
    this.isDisabled = !1, this.isDisabled = e ?? this.isDisabled;
  }
  get(e, r) {
    if (this.isDisabled)
      return r;
    const n = localStorage.getItem(this.withPrefix(e));
    return n ? zs(n) ? JSON.parse(n) : n : r;
  }
  set(e, r) {
    if (!(this.isDisabled || !(e in qs))) {
      if ($s(r))
        return localStorage.setItem(this.withPrefix(e), r);
      localStorage.setItem(this.withPrefix(e), JSON.stringify(r));
    }
  }
  clear(e) {
    if (e)
      return localStorage.removeItem(this.withPrefix(e));
    localStorage.clear();
  }
  withPrefix(e) {
    return `${Qs}__${e}`;
  }
}
const zs = (t) => {
  try {
    JSON.parse(t);
  } catch {
    return !1;
  }
  return !0;
};
var rn = function(t, e) {
  return rn = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var i in n)
      Object.prototype.hasOwnProperty.call(n, i) && (r[i] = n[i]);
  }, rn(t, e);
};
function Pe(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  rn(t, e);
  function r() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r());
}
var E = function() {
  return E = Object.assign || function(e) {
    for (var r, n = 1, i = arguments.length; n < i; n++) {
      r = arguments[n];
      for (var o in r)
        Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
    }
    return e;
  }, E.apply(this, arguments);
};
function et(t, e) {
  var r = {};
  for (var n in t)
    Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(t); i < n.length; i++)
      e.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[i]) && (r[n[i]] = t[n[i]]);
  return r;
}
function Be(t, e, r, n) {
  function i(o) {
    return o instanceof r ? o : new r(function(a) {
      a(o);
    });
  }
  return new (r || (r = Promise))(function(o, a) {
    function s(l) {
      try {
        c(n.next(l));
      } catch (f) {
        a(f);
      }
    }
    function u(l) {
      try {
        c(n.throw(l));
      } catch (f) {
        a(f);
      }
    }
    function c(l) {
      l.done ? o(l.value) : i(l.value).then(s, u);
    }
    c((n = n.apply(t, e || [])).next());
  });
}
function Ue(t, e) {
  var r = { label: 0, sent: function() {
    if (o[0] & 1)
      throw o[1];
    return o[1];
  }, trys: [], ops: [] }, n, i, o, a;
  return a = { next: s(0), throw: s(1), return: s(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function() {
    return this;
  }), a;
  function s(c) {
    return function(l) {
      return u([c, l]);
    };
  }
  function u(c) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; a && (a = 0, c[0] && (r = 0)), r; )
      try {
        if (n = 1, i && (o = c[0] & 2 ? i.return : c[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, c[1])).done)
          return o;
        switch (i = 0, o && (c = [c[0] & 2, o.value]), c[0]) {
          case 0:
          case 1:
            o = c;
            break;
          case 4:
            return r.label++, { value: c[1], done: !1 };
          case 5:
            r.label++, i = c[1], c = [0];
            continue;
          case 7:
            c = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (o = r.trys, !(o = o.length > 0 && o[o.length - 1]) && (c[0] === 6 || c[0] === 2)) {
              r = 0;
              continue;
            }
            if (c[0] === 3 && (!o || c[1] > o[0] && c[1] < o[3])) {
              r.label = c[1];
              break;
            }
            if (c[0] === 6 && r.label < o[1]) {
              r.label = o[1], o = c;
              break;
            }
            if (o && r.label < o[2]) {
              r.label = o[2], r.ops.push(c);
              break;
            }
            o[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        c = e.call(t, r);
      } catch (l) {
        c = [6, l], i = 0;
      } finally {
        n = o = 0;
      }
    if (c[0] & 5)
      throw c[1];
    return { value: c[0] ? c[1] : void 0, done: !0 };
  }
}
function Ke(t, e, r) {
  if (r || arguments.length === 2)
    for (var n = 0, i = e.length, o; n < i; n++)
      (o || !(n in e)) && (o || (o = Array.prototype.slice.call(e, 0, n)), o[n] = e[n]);
  return t.concat(o || Array.prototype.slice.call(e));
}
var Nr = "Invariant Violation", _i = Object.setPrototypeOf, Ws = _i === void 0 ? function(t, e) {
  return t.__proto__ = e, t;
} : _i, G = (
  /** @class */
  function(t) {
    Pe(e, t);
    function e(r) {
      r === void 0 && (r = Nr);
      var n = t.call(this, typeof r == "number" ? Nr + ": " + r + " (see https://github.com/apollographql/invariant-packages)" : r) || this;
      return n.framesToPop = 1, n.name = Nr, Ws(n, e.prototype), n;
    }
    return e;
  }(Error)
);
function k(t, e) {
  if (!t)
    throw new G(e);
}
var ra = ["debug", "log", "warn", "error", "silent"], Hs = ra.indexOf("log");
function Ht(t) {
  return function() {
    if (ra.indexOf(t) >= Hs) {
      var e = console[t] || console.log;
      return e.apply(console, arguments);
    }
  };
}
(function(t) {
  t.debug = Ht("debug"), t.log = Ht("log"), t.warn = Ht("warn"), t.error = Ht("error");
})(k || (k = {}));
function Ce(t) {
  try {
    return t();
  } catch {
  }
}
const Si = Ce(function() {
  return globalThis;
}) || Ce(function() {
  return window;
}) || Ce(function() {
  return self;
}) || Ce(function() {
  return global;
}) || Ce(function() {
  return Ce.constructor("return this")();
});
var Oi = "__", Ti = [Oi, Oi].join("DEV");
function Gs() {
  try {
    return !!__DEV__;
  } catch {
    return Object.defineProperty(Si, Ti, {
      value: Ce(function() {
        return process.env.NODE_ENV;
      }) !== "production",
      enumerable: !1,
      configurable: !0,
      writable: !0
    }), Si[Ti];
  }
}
const Fr = Gs();
function ze(t) {
  try {
    return t();
  } catch {
  }
}
var nn = ze(function() {
  return globalThis;
}) || ze(function() {
  return window;
}) || ze(function() {
  return self;
}) || ze(function() {
  return global;
}) || // We don't expect the Function constructor ever to be invoked at runtime, as
// long as at least one of globalThis, window, self, or global is defined, so
// we are under no obligation to make it easy for static analysis tools to
// detect syntactic usage of the Function constructor. If you think you can
// improve your static analysis to detect this obfuscation, think again. This
// is an arms race you cannot win, at least not in JavaScript.
ze(function() {
  return ze.constructor("return this")();
}), on = !1;
function Ys() {
  nn && !ze(function() {
    return process.env.NODE_ENV;
  }) && !ze(function() {
    return process;
  }) && (Object.defineProperty(nn, "process", {
    value: {
      env: {
        // This default needs to be "production" instead of "development", to
        // avoid the problem https://github.com/graphql/graphql-js/pull/2894
        // will eventually solve, once merged and released.
        NODE_ENV: "production"
      }
    },
    // Let anyone else change global.process as they see fit, but hide it from
    // Object.keys(global) enumeration.
    configurable: !0,
    enumerable: !1,
    writable: !0
  }), on = !0);
}
Ys();
function Ri() {
  on && (delete nn.process, on = !1);
}
function Kt(t, e) {
  if (!!!t)
    throw new Error(e);
}
const na = {
  Name: [],
  Document: ["definitions"],
  OperationDefinition: [
    "name",
    "variableDefinitions",
    "directives",
    "selectionSet"
  ],
  VariableDefinition: ["variable", "type", "defaultValue", "directives"],
  Variable: ["name"],
  SelectionSet: ["selections"],
  Field: ["alias", "name", "arguments", "directives", "selectionSet"],
  Argument: ["name", "value"],
  FragmentSpread: ["name", "directives"],
  InlineFragment: ["typeCondition", "directives", "selectionSet"],
  FragmentDefinition: [
    "name",
    // Note: fragment variable definitions are deprecated and will removed in v17.0.0
    "variableDefinitions",
    "typeCondition",
    "directives",
    "selectionSet"
  ],
  IntValue: [],
  FloatValue: [],
  StringValue: [],
  BooleanValue: [],
  NullValue: [],
  EnumValue: [],
  ListValue: ["values"],
  ObjectValue: ["fields"],
  ObjectField: ["name", "value"],
  Directive: ["name", "arguments"],
  NamedType: ["name"],
  ListType: ["type"],
  NonNullType: ["type"],
  SchemaDefinition: ["description", "directives", "operationTypes"],
  OperationTypeDefinition: ["type"],
  ScalarTypeDefinition: ["description", "name", "directives"],
  ObjectTypeDefinition: [
    "description",
    "name",
    "interfaces",
    "directives",
    "fields"
  ],
  FieldDefinition: ["description", "name", "arguments", "type", "directives"],
  InputValueDefinition: [
    "description",
    "name",
    "type",
    "defaultValue",
    "directives"
  ],
  InterfaceTypeDefinition: [
    "description",
    "name",
    "interfaces",
    "directives",
    "fields"
  ],
  UnionTypeDefinition: ["description", "name", "directives", "types"],
  EnumTypeDefinition: ["description", "name", "directives", "values"],
  EnumValueDefinition: ["description", "name", "directives"],
  InputObjectTypeDefinition: ["description", "name", "directives", "fields"],
  DirectiveDefinition: ["description", "name", "arguments", "locations"],
  SchemaExtension: ["directives", "operationTypes"],
  ScalarTypeExtension: ["name", "directives"],
  ObjectTypeExtension: ["name", "interfaces", "directives", "fields"],
  InterfaceTypeExtension: ["name", "interfaces", "directives", "fields"],
  UnionTypeExtension: ["name", "directives", "types"],
  EnumTypeExtension: ["name", "directives", "values"],
  InputObjectTypeExtension: ["name", "directives", "fields"]
}, Js = new Set(Object.keys(na));
function Ci(t) {
  const e = t?.kind;
  return typeof e == "string" && Js.has(e);
}
var ki;
(function(t) {
  t.QUERY = "query", t.MUTATION = "mutation", t.SUBSCRIPTION = "subscription";
})(ki || (ki = {}));
var me;
(function(t) {
  t.NAME = "Name", t.DOCUMENT = "Document", t.OPERATION_DEFINITION = "OperationDefinition", t.VARIABLE_DEFINITION = "VariableDefinition", t.SELECTION_SET = "SelectionSet", t.FIELD = "Field", t.ARGUMENT = "Argument", t.FRAGMENT_SPREAD = "FragmentSpread", t.INLINE_FRAGMENT = "InlineFragment", t.FRAGMENT_DEFINITION = "FragmentDefinition", t.VARIABLE = "Variable", t.INT = "IntValue", t.FLOAT = "FloatValue", t.STRING = "StringValue", t.BOOLEAN = "BooleanValue", t.NULL = "NullValue", t.ENUM = "EnumValue", t.LIST = "ListValue", t.OBJECT = "ObjectValue", t.OBJECT_FIELD = "ObjectField", t.DIRECTIVE = "Directive", t.NAMED_TYPE = "NamedType", t.LIST_TYPE = "ListType", t.NON_NULL_TYPE = "NonNullType", t.SCHEMA_DEFINITION = "SchemaDefinition", t.OPERATION_TYPE_DEFINITION = "OperationTypeDefinition", t.SCALAR_TYPE_DEFINITION = "ScalarTypeDefinition", t.OBJECT_TYPE_DEFINITION = "ObjectTypeDefinition", t.FIELD_DEFINITION = "FieldDefinition", t.INPUT_VALUE_DEFINITION = "InputValueDefinition", t.INTERFACE_TYPE_DEFINITION = "InterfaceTypeDefinition", t.UNION_TYPE_DEFINITION = "UnionTypeDefinition", t.ENUM_TYPE_DEFINITION = "EnumTypeDefinition", t.ENUM_VALUE_DEFINITION = "EnumValueDefinition", t.INPUT_OBJECT_TYPE_DEFINITION = "InputObjectTypeDefinition", t.DIRECTIVE_DEFINITION = "DirectiveDefinition", t.SCHEMA_EXTENSION = "SchemaExtension", t.SCALAR_TYPE_EXTENSION = "ScalarTypeExtension", t.OBJECT_TYPE_EXTENSION = "ObjectTypeExtension", t.INTERFACE_TYPE_EXTENSION = "InterfaceTypeExtension", t.UNION_TYPE_EXTENSION = "UnionTypeExtension", t.ENUM_TYPE_EXTENSION = "EnumTypeExtension", t.INPUT_OBJECT_TYPE_EXTENSION = "InputObjectTypeExtension";
})(me || (me = {}));
function Di(t) {
  return t === 9 || t === 32;
}
function Xs(t, e) {
  const r = t.replace(/"""/g, '\\"""'), n = r.split(/\r\n|[\n\r]/g), i = n.length === 1, o = n.length > 1 && n.slice(1).every((d) => d.length === 0 || Di(d.charCodeAt(0))), a = r.endsWith('\\"""'), s = t.endsWith('"') && !a, u = t.endsWith("\\"), c = s || u, l = !(e != null && e.minimize) && // add leading and trailing new lines only if it improves readability
  (!i || t.length > 70 || c || o || a);
  let f = "";
  const h = i && Di(t.charCodeAt(0));
  return (l && !h || o) && (f += `
`), f += r, (l || c) && (f += `
`), '"""' + f + '"""';
}
const Ks = 10, ia = 2;
function oa(t) {
  return gr(t, []);
}
function gr(t, e) {
  switch (typeof t) {
    case "string":
      return JSON.stringify(t);
    case "function":
      return t.name ? `[function ${t.name}]` : "[function]";
    case "object":
      return Zs(t, e);
    default:
      return String(t);
  }
}
function Zs(t, e) {
  if (t === null)
    return "null";
  if (e.includes(t))
    return "[Circular]";
  const r = [...e, t];
  if (ec(t)) {
    const n = t.toJSON();
    if (n !== t)
      return typeof n == "string" ? n : gr(n, r);
  } else if (Array.isArray(t))
    return rc(t, r);
  return tc(t, r);
}
function ec(t) {
  return typeof t.toJSON == "function";
}
function tc(t, e) {
  const r = Object.entries(t);
  return r.length === 0 ? "{}" : e.length > ia ? "[" + nc(t) + "]" : "{ " + r.map(
    ([i, o]) => i + ": " + gr(o, e)
  ).join(", ") + " }";
}
function rc(t, e) {
  if (t.length === 0)
    return "[]";
  if (e.length > ia)
    return "[Array]";
  const r = Math.min(Ks, t.length), n = t.length - r, i = [];
  for (let o = 0; o < r; ++o)
    i.push(gr(t[o], e));
  return n === 1 ? i.push("... 1 more item") : n > 1 && i.push(`... ${n} more items`), "[" + i.join(", ") + "]";
}
function nc(t) {
  const e = Object.prototype.toString.call(t).replace(/^\[object /, "").replace(/]$/, "");
  if (e === "Object" && typeof t.constructor == "function") {
    const r = t.constructor.name;
    if (typeof r == "string" && r !== "")
      return r;
  }
  return e;
}
class ic {
  constructor(e, r = "GraphQL request", n = {
    line: 1,
    column: 1
  }) {
    typeof e == "string" || Kt(!1, `Body must be a string. Received: ${oa(e)}.`), this.body = e, this.name = r, this.locationOffset = n, this.locationOffset.line > 0 || Kt(
      !1,
      "line in locationOffset is 1-indexed and must be positive."
    ), this.locationOffset.column > 0 || Kt(
      !1,
      "column in locationOffset is 1-indexed and must be positive."
    );
  }
  get [Symbol.toStringTag]() {
    return "Source";
  }
}
function oc(t) {
  return `"${t.replace(ac, sc)}"`;
}
const ac = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;
function sc(t) {
  return cc[t.charCodeAt(0)];
}
const cc = [
  "\\u0000",
  "\\u0001",
  "\\u0002",
  "\\u0003",
  "\\u0004",
  "\\u0005",
  "\\u0006",
  "\\u0007",
  "\\b",
  "\\t",
  "\\n",
  "\\u000B",
  "\\f",
  "\\r",
  "\\u000E",
  "\\u000F",
  "\\u0010",
  "\\u0011",
  "\\u0012",
  "\\u0013",
  "\\u0014",
  "\\u0015",
  "\\u0016",
  "\\u0017",
  "\\u0018",
  "\\u0019",
  "\\u001A",
  "\\u001B",
  "\\u001C",
  "\\u001D",
  "\\u001E",
  "\\u001F",
  "",
  "",
  '\\"',
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  // 2F
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  // 3F
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  // 4F
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "\\\\",
  "",
  "",
  "",
  // 5F
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  // 6F
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "\\u007F",
  "\\u0080",
  "\\u0081",
  "\\u0082",
  "\\u0083",
  "\\u0084",
  "\\u0085",
  "\\u0086",
  "\\u0087",
  "\\u0088",
  "\\u0089",
  "\\u008A",
  "\\u008B",
  "\\u008C",
  "\\u008D",
  "\\u008E",
  "\\u008F",
  "\\u0090",
  "\\u0091",
  "\\u0092",
  "\\u0093",
  "\\u0094",
  "\\u0095",
  "\\u0096",
  "\\u0097",
  "\\u0098",
  "\\u0099",
  "\\u009A",
  "\\u009B",
  "\\u009C",
  "\\u009D",
  "\\u009E",
  "\\u009F"
], $n = Object.freeze({});
function Ve(t, e, r = na) {
  const n = /* @__PURE__ */ new Map();
  for (const S of Object.values(me))
    n.set(S, uc(e, S));
  let i, o = Array.isArray(t), a = [t], s = -1, u = [], c = t, l, f;
  const h = [], d = [];
  do {
    s++;
    const S = s === a.length, m = S && u.length !== 0;
    if (S) {
      if (l = d.length === 0 ? void 0 : h[h.length - 1], c = f, f = d.pop(), m)
        if (o) {
          c = c.slice();
          let _ = 0;
          for (const [b, A] of u) {
            const P = b - _;
            A === null ? (c.splice(P, 1), _++) : c[P] = A;
          }
        } else {
          c = Object.defineProperties(
            {},
            Object.getOwnPropertyDescriptors(c)
          );
          for (const [_, b] of u)
            c[_] = b;
        }
      s = i.index, a = i.keys, u = i.edits, o = i.inArray, i = i.prev;
    } else if (f) {
      if (l = o ? s : a[s], c = f[l], c == null)
        continue;
      h.push(l);
    }
    let g;
    if (!Array.isArray(c)) {
      var p, v;
      Ci(c) || Kt(!1, `Invalid AST Node: ${oa(c)}.`);
      const _ = S ? (p = n.get(c.kind)) === null || p === void 0 ? void 0 : p.leave : (v = n.get(c.kind)) === null || v === void 0 ? void 0 : v.enter;
      if (g = _?.call(e, c, l, f, h, d), g === $n)
        break;
      if (g === !1) {
        if (!S) {
          h.pop();
          continue;
        }
      } else if (g !== void 0 && (u.push([l, g]), !S))
        if (Ci(g))
          c = g;
        else {
          h.pop();
          continue;
        }
    }
    if (g === void 0 && m && u.push([l, c]), S)
      h.pop();
    else {
      var y;
      i = {
        inArray: o,
        index: s,
        keys: a,
        edits: u,
        prev: i
      }, o = Array.isArray(c), a = o ? c : (y = r[c.kind]) !== null && y !== void 0 ? y : [], s = -1, u = [], f && d.push(f), f = c;
    }
  } while (i !== void 0);
  return u.length !== 0 ? u[u.length - 1][1] : t;
}
function uc(t, e) {
  const r = t[e];
  return typeof r == "object" ? r : typeof r == "function" ? {
    enter: r,
    leave: void 0
  } : {
    enter: t.enter,
    leave: t.leave
  };
}
function lc(t) {
  return Ve(t, hc);
}
const fc = 80, hc = {
  Name: {
    leave: (t) => t.value
  },
  Variable: {
    leave: (t) => "$" + t.name
  },
  // Document
  Document: {
    leave: (t) => N(t.definitions, `

`)
  },
  OperationDefinition: {
    leave(t) {
      const e = $("(", N(t.variableDefinitions, ", "), ")"), r = N(
        [
          t.operation,
          N([t.name, e]),
          N(t.directives, " ")
        ],
        " "
      );
      return (r === "query" ? "" : r + " ") + t.selectionSet;
    }
  },
  VariableDefinition: {
    leave: ({ variable: t, type: e, defaultValue: r, directives: n }) => t + ": " + e + $(" = ", r) + $(" ", N(n, " "))
  },
  SelectionSet: {
    leave: ({ selections: t }) => Ae(t)
  },
  Field: {
    leave({ alias: t, name: e, arguments: r, directives: n, selectionSet: i }) {
      const o = $("", t, ": ") + e;
      let a = o + $("(", N(r, ", "), ")");
      return a.length > fc && (a = o + $(`(
`, Zt(N(r, `
`)), `
)`)), N([a, N(n, " "), i], " ");
    }
  },
  Argument: {
    leave: ({ name: t, value: e }) => t + ": " + e
  },
  // Fragments
  FragmentSpread: {
    leave: ({ name: t, directives: e }) => "..." + t + $(" ", N(e, " "))
  },
  InlineFragment: {
    leave: ({ typeCondition: t, directives: e, selectionSet: r }) => N(
      [
        "...",
        $("on ", t),
        N(e, " "),
        r
      ],
      " "
    )
  },
  FragmentDefinition: {
    leave: ({ name: t, typeCondition: e, variableDefinitions: r, directives: n, selectionSet: i }) => (
      // or removed in the future.
      `fragment ${t}${$("(", N(r, ", "), ")")} on ${e} ${$("", N(n, " "), " ")}` + i
    )
  },
  // Value
  IntValue: {
    leave: ({ value: t }) => t
  },
  FloatValue: {
    leave: ({ value: t }) => t
  },
  StringValue: {
    leave: ({ value: t, block: e }) => e ? Xs(t) : oc(t)
  },
  BooleanValue: {
    leave: ({ value: t }) => t ? "true" : "false"
  },
  NullValue: {
    leave: () => "null"
  },
  EnumValue: {
    leave: ({ value: t }) => t
  },
  ListValue: {
    leave: ({ values: t }) => "[" + N(t, ", ") + "]"
  },
  ObjectValue: {
    leave: ({ fields: t }) => "{" + N(t, ", ") + "}"
  },
  ObjectField: {
    leave: ({ name: t, value: e }) => t + ": " + e
  },
  // Directive
  Directive: {
    leave: ({ name: t, arguments: e }) => "@" + t + $("(", N(e, ", "), ")")
  },
  // Type
  NamedType: {
    leave: ({ name: t }) => t
  },
  ListType: {
    leave: ({ type: t }) => "[" + t + "]"
  },
  NonNullType: {
    leave: ({ type: t }) => t + "!"
  },
  // Type System Definitions
  SchemaDefinition: {
    leave: ({ description: t, directives: e, operationTypes: r }) => $("", t, `
`) + N(["schema", N(e, " "), Ae(r)], " ")
  },
  OperationTypeDefinition: {
    leave: ({ operation: t, type: e }) => t + ": " + e
  },
  ScalarTypeDefinition: {
    leave: ({ description: t, name: e, directives: r }) => $("", t, `
`) + N(["scalar", e, N(r, " ")], " ")
  },
  ObjectTypeDefinition: {
    leave: ({ description: t, name: e, interfaces: r, directives: n, fields: i }) => $("", t, `
`) + N(
      [
        "type",
        e,
        $("implements ", N(r, " & ")),
        N(n, " "),
        Ae(i)
      ],
      " "
    )
  },
  FieldDefinition: {
    leave: ({ description: t, name: e, arguments: r, type: n, directives: i }) => $("", t, `
`) + e + (Ai(r) ? $(`(
`, Zt(N(r, `
`)), `
)`) : $("(", N(r, ", "), ")")) + ": " + n + $(" ", N(i, " "))
  },
  InputValueDefinition: {
    leave: ({ description: t, name: e, type: r, defaultValue: n, directives: i }) => $("", t, `
`) + N(
      [e + ": " + r, $("= ", n), N(i, " ")],
      " "
    )
  },
  InterfaceTypeDefinition: {
    leave: ({ description: t, name: e, interfaces: r, directives: n, fields: i }) => $("", t, `
`) + N(
      [
        "interface",
        e,
        $("implements ", N(r, " & ")),
        N(n, " "),
        Ae(i)
      ],
      " "
    )
  },
  UnionTypeDefinition: {
    leave: ({ description: t, name: e, directives: r, types: n }) => $("", t, `
`) + N(
      ["union", e, N(r, " "), $("= ", N(n, " | "))],
      " "
    )
  },
  EnumTypeDefinition: {
    leave: ({ description: t, name: e, directives: r, values: n }) => $("", t, `
`) + N(["enum", e, N(r, " "), Ae(n)], " ")
  },
  EnumValueDefinition: {
    leave: ({ description: t, name: e, directives: r }) => $("", t, `
`) + N([e, N(r, " ")], " ")
  },
  InputObjectTypeDefinition: {
    leave: ({ description: t, name: e, directives: r, fields: n }) => $("", t, `
`) + N(["input", e, N(r, " "), Ae(n)], " ")
  },
  DirectiveDefinition: {
    leave: ({ description: t, name: e, arguments: r, repeatable: n, locations: i }) => $("", t, `
`) + "directive @" + e + (Ai(r) ? $(`(
`, Zt(N(r, `
`)), `
)`) : $("(", N(r, ", "), ")")) + (n ? " repeatable" : "") + " on " + N(i, " | ")
  },
  SchemaExtension: {
    leave: ({ directives: t, operationTypes: e }) => N(
      ["extend schema", N(t, " "), Ae(e)],
      " "
    )
  },
  ScalarTypeExtension: {
    leave: ({ name: t, directives: e }) => N(["extend scalar", t, N(e, " ")], " ")
  },
  ObjectTypeExtension: {
    leave: ({ name: t, interfaces: e, directives: r, fields: n }) => N(
      [
        "extend type",
        t,
        $("implements ", N(e, " & ")),
        N(r, " "),
        Ae(n)
      ],
      " "
    )
  },
  InterfaceTypeExtension: {
    leave: ({ name: t, interfaces: e, directives: r, fields: n }) => N(
      [
        "extend interface",
        t,
        $("implements ", N(e, " & ")),
        N(r, " "),
        Ae(n)
      ],
      " "
    )
  },
  UnionTypeExtension: {
    leave: ({ name: t, directives: e, types: r }) => N(
      [
        "extend union",
        t,
        N(e, " "),
        $("= ", N(r, " | "))
      ],
      " "
    )
  },
  EnumTypeExtension: {
    leave: ({ name: t, directives: e, values: r }) => N(["extend enum", t, N(e, " "), Ae(r)], " ")
  },
  InputObjectTypeExtension: {
    leave: ({ name: t, directives: e, fields: r }) => N(["extend input", t, N(e, " "), Ae(r)], " ")
  }
};
function N(t, e = "") {
  var r;
  return (r = t?.filter((n) => n).join(e)) !== null && r !== void 0 ? r : "";
}
function Ae(t) {
  return $(`{
`, Zt(N(t, `
`)), `
}`);
}
function $(t, e, r = "") {
  return e != null && e !== "" ? t + e + r : "";
}
function Zt(t) {
  return $("  ", t.replace(/\n/g, `
  `));
}
function Ai(t) {
  var e;
  return (e = t?.some((r) => r.includes(`
`))) !== null && e !== void 0 ? e : !1;
}
function Pi(t) {
  return t.kind === me.FIELD || t.kind === me.FRAGMENT_SPREAD || t.kind === me.INLINE_FRAGMENT;
}
function dc() {
  return Ri();
}
function pc() {
  __DEV__ ? k(typeof Fr == "boolean", Fr) : k(typeof Fr == "boolean", 39);
}
dc();
pc();
function br(t, e) {
  var r = t.directives;
  return !r || !r.length ? !0 : mc(r).every(function(n) {
    var i = n.directive, o = n.ifArgument, a = !1;
    return o.value.kind === "Variable" ? (a = e && e[o.value.name.value], __DEV__ ? k(a !== void 0, "Invalid variable referenced in @".concat(i.name.value, " directive.")) : k(a !== void 0, 40)) : a = o.value.value, i.name.value === "skip" ? !a : a;
  });
}
function Qn(t, e, r) {
  var n = new Set(t), i = n.size;
  return Ve(e, {
    Directive: function(o) {
      if (n.delete(o.name.value) && (!r || !n.size))
        return $n;
    }
  }), r ? !n.size : n.size < i;
}
function yc(t) {
  return t && Qn(["client", "export"], t, !0);
}
function vc(t) {
  var e = t.name.value;
  return e === "skip" || e === "include";
}
function mc(t) {
  var e = [];
  return t && t.length && t.forEach(function(r) {
    if (vc(r)) {
      var n = r.arguments, i = r.name.value;
      __DEV__ ? k(n && n.length === 1, "Incorrect number of arguments for the @".concat(i, " directive.")) : k(n && n.length === 1, 41);
      var o = n[0];
      __DEV__ ? k(o.name && o.name.value === "if", "Invalid argument for the @".concat(i, " directive.")) : k(o.name && o.name.value === "if", 42);
      var a = o.value;
      __DEV__ ? k(a && (a.kind === "Variable" || a.kind === "BooleanValue"), "Argument for the @".concat(i, " directive must be a variable or a boolean value.")) : k(a && (a.kind === "Variable" || a.kind === "BooleanValue"), 43), e.push({ directive: r, ifArgument: o });
    }
  }), e;
}
function gc(t, e) {
  var r = e, n = [];
  t.definitions.forEach(function(o) {
    if (o.kind === "OperationDefinition")
      throw __DEV__ ? new G("Found a ".concat(o.operation, " operation").concat(o.name ? " named '".concat(o.name.value, "'") : "", ". ") + "No operations are allowed when using a fragment as a query. Only fragments are allowed.") : new G(44);
    o.kind === "FragmentDefinition" && n.push(o);
  }), typeof r > "u" && (__DEV__ ? k(n.length === 1, "Found ".concat(n.length, " fragments. `fragmentName` must be provided when there is not exactly 1 fragment.")) : k(n.length === 1, 45), r = n[0].name.value);
  var i = E(E({}, t), { definitions: Ke([
    {
      kind: "OperationDefinition",
      operation: "query",
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "FragmentSpread",
            name: {
              kind: "Name",
              value: r
            }
          }
        ]
      }
    }
  ], t.definitions, !0) });
  return i;
}
function Bn(t) {
  t === void 0 && (t = []);
  var e = {};
  return t.forEach(function(r) {
    e[r.name.value] = r;
  }), e;
}
function Un(t, e) {
  switch (t.kind) {
    case "InlineFragment":
      return t;
    case "FragmentSpread": {
      var r = t.name.value;
      if (typeof e == "function")
        return e(r);
      var n = e && e[r];
      return __DEV__ ? k(n, "No fragment named ".concat(r)) : k(n, 46), n || null;
    }
    default:
      return null;
  }
}
function ae(t) {
  return t !== null && typeof t == "object";
}
function ht(t) {
  return { __ref: String(t) };
}
function Z(t) {
  return !!(t && typeof t == "object" && typeof t.__ref == "string");
}
function bc(t) {
  return ae(t) && t.kind === "Document" && Array.isArray(t.definitions);
}
function Ec(t) {
  return t.kind === "StringValue";
}
function wc(t) {
  return t.kind === "BooleanValue";
}
function _c(t) {
  return t.kind === "IntValue";
}
function Sc(t) {
  return t.kind === "FloatValue";
}
function Oc(t) {
  return t.kind === "Variable";
}
function Tc(t) {
  return t.kind === "ObjectValue";
}
function Rc(t) {
  return t.kind === "ListValue";
}
function Cc(t) {
  return t.kind === "EnumValue";
}
function kc(t) {
  return t.kind === "NullValue";
}
function vt(t, e, r, n) {
  if (_c(r) || Sc(r))
    t[e.value] = Number(r.value);
  else if (wc(r) || Ec(r))
    t[e.value] = r.value;
  else if (Tc(r)) {
    var i = {};
    r.fields.map(function(a) {
      return vt(i, a.name, a.value, n);
    }), t[e.value] = i;
  } else if (Oc(r)) {
    var o = (n || {})[r.name.value];
    t[e.value] = o;
  } else if (Rc(r))
    t[e.value] = r.values.map(function(a) {
      var s = {};
      return vt(s, e, a, n), s[e.value];
    });
  else if (Cc(r))
    t[e.value] = r.value;
  else if (kc(r))
    t[e.value] = null;
  else
    throw __DEV__ ? new G('The inline argument "'.concat(e.value, '" of kind "').concat(r.kind, '"') + "is not supported. Use variables instead of inline arguments to overcome this limitation.") : new G(55);
}
function Dc(t, e) {
  var r = null;
  t.directives && (r = {}, t.directives.forEach(function(i) {
    r[i.name.value] = {}, i.arguments && i.arguments.forEach(function(o) {
      var a = o.name, s = o.value;
      return vt(r[i.name.value], a, s, e);
    });
  }));
  var n = null;
  return t.arguments && t.arguments.length && (n = {}, t.arguments.forEach(function(i) {
    var o = i.name, a = i.value;
    return vt(n, o, a, e);
  })), zn(t.name.value, n, r);
}
var Ac = [
  "connection",
  "include",
  "skip",
  "client",
  "rest",
  "export"
], zn = Object.assign(function(t, e, r) {
  if (e && r && r.connection && r.connection.key)
    if (r.connection.filter && r.connection.filter.length > 0) {
      var n = r.connection.filter ? r.connection.filter : [];
      n.sort();
      var i = {};
      return n.forEach(function(s) {
        i[s] = e[s];
      }), "".concat(r.connection.key, "(").concat(kt(i), ")");
    } else
      return r.connection.key;
  var o = t;
  if (e) {
    var a = kt(e);
    o += "(".concat(a, ")");
  }
  return r && Object.keys(r).forEach(function(s) {
    Ac.indexOf(s) === -1 && (r[s] && Object.keys(r[s]).length ? o += "@".concat(s, "(").concat(kt(r[s]), ")") : o += "@".concat(s));
  }), o;
}, {
  setStringify: function(t) {
    var e = kt;
    return kt = t, e;
  }
}), kt = function(e) {
  return JSON.stringify(e, Pc);
};
function Pc(t, e) {
  return ae(e) && !Array.isArray(e) && (e = Object.keys(e).sort().reduce(function(r, n) {
    return r[n] = e[n], r;
  }, {})), e;
}
function Er(t, e) {
  if (t.arguments && t.arguments.length) {
    var r = {};
    return t.arguments.forEach(function(n) {
      var i = n.name, o = n.value;
      return vt(r, i, o, e);
    }), r;
  }
  return null;
}
function tt(t) {
  return t.alias ? t.alias.value : t.name.value;
}
function an(t, e, r) {
  for (var n, i = 0, o = e.selections; i < o.length; i++) {
    var a = o[i];
    if (rt(a)) {
      if (a.name.value === "__typename")
        return t[tt(a)];
    } else
      n ? n.push(a) : n = [a];
  }
  if (typeof t.__typename == "string")
    return t.__typename;
  if (n)
    for (var s = 0, u = n; s < u.length; s++) {
      var a = u[s], c = an(t, Un(a, r).selectionSet, r);
      if (typeof c == "string")
        return c;
    }
}
function rt(t) {
  return t.kind === "Field";
}
function xc(t) {
  return t.kind === "InlineFragment";
}
function wr(t) {
  __DEV__ ? k(t && t.kind === "Document", 'Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a "gql" tag? http://docs.apollostack.com/apollo-client/core.html#gql') : k(t && t.kind === "Document", 47);
  var e = t.definitions.filter(function(r) {
    return r.kind !== "FragmentDefinition";
  }).map(function(r) {
    if (r.kind !== "OperationDefinition")
      throw __DEV__ ? new G('Schema type definitions not allowed in queries. Found: "'.concat(r.kind, '"')) : new G(48);
    return r;
  });
  return __DEV__ ? k(e.length <= 1, "Ambiguous GraphQL document: contains ".concat(e.length, " operations")) : k(e.length <= 1, 49), t;
}
function Bt(t) {
  return wr(t), t.definitions.filter(function(e) {
    return e.kind === "OperationDefinition";
  })[0];
}
function sn(t) {
  return t.definitions.filter(function(e) {
    return e.kind === "OperationDefinition" && !!e.name;
  }).map(function(e) {
    return e.name.value;
  })[0] || null;
}
function Wn(t) {
  return t.definitions.filter(function(e) {
    return e.kind === "FragmentDefinition";
  });
}
function aa(t) {
  var e = Bt(t);
  return __DEV__ ? k(e && e.operation === "query", "Must contain a query definition.") : k(e && e.operation === "query", 50), e;
}
function Ic(t) {
  __DEV__ ? k(t.kind === "Document", 'Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a "gql" tag? http://docs.apollostack.com/apollo-client/core.html#gql') : k(t.kind === "Document", 51), __DEV__ ? k(t.definitions.length <= 1, "Fragment must have exactly one definition.") : k(t.definitions.length <= 1, 52);
  var e = t.definitions[0];
  return __DEV__ ? k(e.kind === "FragmentDefinition", "Must be a fragment definition.") : k(e.kind === "FragmentDefinition", 53), e;
}
function _r(t) {
  wr(t);
  for (var e, r = 0, n = t.definitions; r < n.length; r++) {
    var i = n[r];
    if (i.kind === "OperationDefinition") {
      var o = i.operation;
      if (o === "query" || o === "mutation" || o === "subscription")
        return i;
    }
    i.kind === "FragmentDefinition" && !e && (e = i);
  }
  if (e)
    return e;
  throw __DEV__ ? new G("Expected a parsed GraphQL query with a query, mutation, subscription, or a fragment.") : new G(54);
}
function Hn(t) {
  var e = /* @__PURE__ */ Object.create(null), r = t && t.variableDefinitions;
  return r && r.length && r.forEach(function(n) {
    n.defaultValue && vt(e, n.variable.name, n.defaultValue);
  }), e;
}
var le = Array.isArray;
function Fe(t) {
  return Array.isArray(t) && t.length > 0;
}
var xi = {
  kind: me.FIELD,
  name: {
    kind: me.NAME,
    value: "__typename"
  }
};
function sa(t, e) {
  return !t || t.selectionSet.selections.every(function(r) {
    return r.kind === me.FRAGMENT_SPREAD && sa(e[r.name.value], e);
  });
}
function Nc(t) {
  return sa(Bt(t) || Ic(t), Bn(Wn(t))) ? null : t;
}
function Fc(t) {
  var e = /* @__PURE__ */ new Set(), r = [];
  return t.forEach(function(n) {
    n.name ? e.add(n.name) : n.test && r.push(n.test);
  }), function(n) {
    return e.has(n.name.value) || r.some(function(i) {
      return i(n);
    });
  };
}
function Ii(t) {
  var e = /* @__PURE__ */ new Map();
  return function(n) {
    n === void 0 && (n = t);
    var i = e.get(n);
    return i || e.set(n, i = {
      variables: /* @__PURE__ */ new Set(),
      fragmentSpreads: /* @__PURE__ */ new Set()
    }), i;
  };
}
function ca(t, e) {
  for (var r = Ii(""), n = Ii(""), i = function(m) {
    for (var g = 0, _ = void 0; g < m.length && (_ = m[g]); ++g)
      if (!le(_)) {
        if (_.kind === me.OPERATION_DEFINITION)
          return r(_.name && _.name.value);
        if (_.kind === me.FRAGMENT_DEFINITION)
          return n(_.name.value);
      }
    return __DEV__ && k.error("Could not find operation or fragment"), null;
  }, o = 0, a = e.definitions.length - 1; a >= 0; --a)
    e.definitions[a].kind === me.OPERATION_DEFINITION && ++o;
  var s = Fc(t), u = t.some(function(m) {
    return m.remove;
  }), c = function(m) {
    return u && m && m.some(s);
  }, l = /* @__PURE__ */ new Map(), f = !1, h = {
    enter: function(m) {
      if (c(m.directives))
        return f = !0, null;
    }
  }, d = Ve(e, {
    Field: h,
    InlineFragment: h,
    VariableDefinition: {
      enter: function() {
        return !1;
      }
    },
    Variable: {
      enter: function(m, g, _, b, A) {
        var P = i(A);
        P && P.variables.add(m.name.value);
      }
    },
    FragmentSpread: {
      enter: function(m, g, _, b, A) {
        if (c(m.directives))
          return f = !0, null;
        var P = i(A);
        P && P.fragmentSpreads.add(m.name.value);
      }
    },
    FragmentDefinition: {
      enter: function(m, g, _, b) {
        l.set(JSON.stringify(b), m);
      },
      leave: function(m, g, _, b) {
        var A = l.get(JSON.stringify(b));
        if (m === A)
          return m;
        if (o > 0 && m.selectionSet.selections.every(function(P) {
          return P.kind === me.FIELD && P.name.value === "__typename";
        }))
          return n(m.name.value).removed = !0, f = !0, null;
      }
    },
    Directive: {
      leave: function(m) {
        if (s(m))
          return f = !0, null;
      }
    }
  });
  if (!f)
    return e;
  var p = function(m) {
    return m.transitiveVars || (m.transitiveVars = new Set(m.variables), m.removed || m.fragmentSpreads.forEach(function(g) {
      p(n(g)).transitiveVars.forEach(function(_) {
        m.transitiveVars.add(_);
      });
    })), m;
  }, v = /* @__PURE__ */ new Set();
  d.definitions.forEach(function(m) {
    m.kind === me.OPERATION_DEFINITION ? p(r(m.name && m.name.value)).fragmentSpreads.forEach(function(g) {
      v.add(g);
    }) : m.kind === me.FRAGMENT_DEFINITION && o === 0 && !n(m.name.value).removed && v.add(m.name.value);
  }), v.forEach(function(m) {
    p(n(m)).fragmentSpreads.forEach(function(g) {
      v.add(g);
    });
  });
  var y = function(m) {
    return !!(!v.has(m) || n(m).removed);
  }, S = {
    enter: function(m) {
      if (y(m.name.value))
        return null;
    }
  };
  return Nc(Ve(d, {
    FragmentSpread: S,
    FragmentDefinition: S,
    OperationDefinition: {
      leave: function(m) {
        if (m.variableDefinitions) {
          var g = p(r(m.name && m.name.value)).transitiveVars;
          if (g.size < m.variableDefinitions.length)
            return E(E({}, m), { variableDefinitions: m.variableDefinitions.filter(function(_) {
              return g.has(_.variable.name.value);
            }) });
        }
      }
    }
  }));
}
var Gn = Object.assign(function(t) {
  return Ve(t, {
    SelectionSet: {
      enter: function(e, r, n) {
        if (!(n && n.kind === me.OPERATION_DEFINITION)) {
          var i = e.selections;
          if (i) {
            var o = i.some(function(s) {
              return rt(s) && (s.name.value === "__typename" || s.name.value.lastIndexOf("__", 0) === 0);
            });
            if (!o) {
              var a = n;
              if (!(rt(a) && a.directives && a.directives.some(function(s) {
                return s.name.value === "export";
              })))
                return E(E({}, e), { selections: Ke(Ke([], i, !0), [xi], !1) });
            }
          }
        }
      }
    }
  });
}, {
  added: function(t) {
    return t === xi;
  }
}), Mc = {
  test: function(t) {
    var e = t.name.value === "connection";
    return e && (!t.arguments || !t.arguments.some(function(r) {
      return r.name.value === "key";
    })) && __DEV__ && k.warn("Removing an @connection directive even though it does not have a key. You may want to use the key parameter to specify a store key."), e;
  }
};
function jc(t) {
  return ca([Mc], wr(t));
}
function Lc(t) {
  var e = _r(t), r = e.operation;
  if (r === "query")
    return t;
  var n = Ve(t, {
    OperationDefinition: {
      enter: function(i) {
        return E(E({}, i), { operation: "query" });
      }
    }
  });
  return n;
}
function Vc(t) {
  wr(t);
  var e = ca([
    {
      test: function(r) {
        return r.name.value === "client";
      },
      remove: !0
    }
  ], t);
  return e;
}
var qc = Object.prototype.hasOwnProperty;
function Ni() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  return Yn(t);
}
function Yn(t) {
  var e = t[0] || {}, r = t.length;
  if (r > 1)
    for (var n = new He(), i = 1; i < r; ++i)
      e = n.merge(e, t[i]);
  return e;
}
var $c = function(t, e, r) {
  return this.merge(t[r], e[r]);
}, He = function() {
  function t(e) {
    e === void 0 && (e = $c), this.reconciler = e, this.isObject = ae, this.pastCopies = /* @__PURE__ */ new Set();
  }
  return t.prototype.merge = function(e, r) {
    for (var n = this, i = [], o = 2; o < arguments.length; o++)
      i[o - 2] = arguments[o];
    return ae(r) && ae(e) ? (Object.keys(r).forEach(function(a) {
      if (qc.call(e, a)) {
        var s = e[a];
        if (r[a] !== s) {
          var u = n.reconciler.apply(n, Ke([e, r, a], i, !1));
          u !== s && (e = n.shallowCopyForMerge(e), e[a] = u);
        }
      } else
        e = n.shallowCopyForMerge(e), e[a] = r[a];
    }), e) : r;
  }, t.prototype.shallowCopyForMerge = function(e) {
    return ae(e) && (this.pastCopies.has(e) || (Array.isArray(e) ? e = e.slice(0) : e = E({ __proto__: Object.getPrototypeOf(e) }, e), this.pastCopies.add(e))), e;
  }, t;
}();
function Qc(t, e) {
  var r = typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (r)
    return (r = r.call(t)).next.bind(r);
  if (Array.isArray(t) || (r = Bc(t)) || e && t && typeof t.length == "number") {
    r && (t = r);
    var n = 0;
    return function() {
      return n >= t.length ? { done: !0 } : { done: !1, value: t[n++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Bc(t, e) {
  if (t) {
    if (typeof t == "string")
      return Fi(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set")
      return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Fi(t, e);
  }
}
function Fi(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++)
    n[r] = t[r];
  return n;
}
function Mi(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
  }
}
function Jn(t, e, r) {
  return e && Mi(t.prototype, e), r && Mi(t, r), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
var Xn = function() {
  return typeof Symbol == "function";
}, Kn = function(t) {
  return Xn() && !!Symbol[t];
}, Zn = function(t) {
  return Kn(t) ? Symbol[t] : "@@" + t;
};
Xn() && !Kn("observable") && (Symbol.observable = Symbol("observable"));
var Uc = Zn("iterator"), cn = Zn("observable"), ua = Zn("species");
function lr(t, e) {
  var r = t[e];
  if (r != null) {
    if (typeof r != "function")
      throw new TypeError(r + " is not a function");
    return r;
  }
}
function Dt(t) {
  var e = t.constructor;
  return e !== void 0 && (e = e[ua], e === null && (e = void 0)), e !== void 0 ? e : ie;
}
function zc(t) {
  return t instanceof ie;
}
function mt(t) {
  mt.log ? mt.log(t) : setTimeout(function() {
    throw t;
  });
}
function er(t) {
  Promise.resolve().then(function() {
    try {
      t();
    } catch (e) {
      mt(e);
    }
  });
}
function la(t) {
  var e = t._cleanup;
  if (e !== void 0 && (t._cleanup = void 0, !!e))
    try {
      if (typeof e == "function")
        e();
      else {
        var r = lr(e, "unsubscribe");
        r && r.call(e);
      }
    } catch (n) {
      mt(n);
    }
}
function un(t) {
  t._observer = void 0, t._queue = void 0, t._state = "closed";
}
function Wc(t) {
  var e = t._queue;
  if (e) {
    t._queue = void 0, t._state = "ready";
    for (var r = 0; r < e.length && (fa(t, e[r].type, e[r].value), t._state !== "closed"); ++r)
      ;
  }
}
function fa(t, e, r) {
  t._state = "running";
  var n = t._observer;
  try {
    var i = lr(n, e);
    switch (e) {
      case "next":
        i && i.call(n, r);
        break;
      case "error":
        if (un(t), i)
          i.call(n, r);
        else
          throw r;
        break;
      case "complete":
        un(t), i && i.call(n);
        break;
    }
  } catch (o) {
    mt(o);
  }
  t._state === "closed" ? la(t) : t._state === "running" && (t._state = "ready");
}
function Mr(t, e, r) {
  if (t._state !== "closed") {
    if (t._state === "buffering") {
      t._queue.push({
        type: e,
        value: r
      });
      return;
    }
    if (t._state !== "ready") {
      t._state = "buffering", t._queue = [{
        type: e,
        value: r
      }], er(function() {
        return Wc(t);
      });
      return;
    }
    fa(t, e, r);
  }
}
var Hc = /* @__PURE__ */ function() {
  function t(r, n) {
    this._cleanup = void 0, this._observer = r, this._queue = void 0, this._state = "initializing";
    var i = new Gc(this);
    try {
      this._cleanup = n.call(void 0, i);
    } catch (o) {
      i.error(o);
    }
    this._state === "initializing" && (this._state = "ready");
  }
  var e = t.prototype;
  return e.unsubscribe = function() {
    this._state !== "closed" && (un(this), la(this));
  }, Jn(t, [{
    key: "closed",
    get: function() {
      return this._state === "closed";
    }
  }]), t;
}(), Gc = /* @__PURE__ */ function() {
  function t(r) {
    this._subscription = r;
  }
  var e = t.prototype;
  return e.next = function(n) {
    Mr(this._subscription, "next", n);
  }, e.error = function(n) {
    Mr(this._subscription, "error", n);
  }, e.complete = function() {
    Mr(this._subscription, "complete");
  }, Jn(t, [{
    key: "closed",
    get: function() {
      return this._subscription._state === "closed";
    }
  }]), t;
}(), ie = /* @__PURE__ */ function() {
  function t(r) {
    if (!(this instanceof t))
      throw new TypeError("Observable cannot be called as a function");
    if (typeof r != "function")
      throw new TypeError("Observable initializer must be a function");
    this._subscriber = r;
  }
  var e = t.prototype;
  return e.subscribe = function(n) {
    return (typeof n != "object" || n === null) && (n = {
      next: n,
      error: arguments[1],
      complete: arguments[2]
    }), new Hc(n, this._subscriber);
  }, e.forEach = function(n) {
    var i = this;
    return new Promise(function(o, a) {
      if (typeof n != "function") {
        a(new TypeError(n + " is not a function"));
        return;
      }
      function s() {
        u.unsubscribe(), o();
      }
      var u = i.subscribe({
        next: function(c) {
          try {
            n(c, s);
          } catch (l) {
            a(l), u.unsubscribe();
          }
        },
        error: a,
        complete: o
      });
    });
  }, e.map = function(n) {
    var i = this;
    if (typeof n != "function")
      throw new TypeError(n + " is not a function");
    var o = Dt(this);
    return new o(function(a) {
      return i.subscribe({
        next: function(s) {
          try {
            s = n(s);
          } catch (u) {
            return a.error(u);
          }
          a.next(s);
        },
        error: function(s) {
          a.error(s);
        },
        complete: function() {
          a.complete();
        }
      });
    });
  }, e.filter = function(n) {
    var i = this;
    if (typeof n != "function")
      throw new TypeError(n + " is not a function");
    var o = Dt(this);
    return new o(function(a) {
      return i.subscribe({
        next: function(s) {
          try {
            if (!n(s))
              return;
          } catch (u) {
            return a.error(u);
          }
          a.next(s);
        },
        error: function(s) {
          a.error(s);
        },
        complete: function() {
          a.complete();
        }
      });
    });
  }, e.reduce = function(n) {
    var i = this;
    if (typeof n != "function")
      throw new TypeError(n + " is not a function");
    var o = Dt(this), a = arguments.length > 1, s = !1, u = arguments[1], c = u;
    return new o(function(l) {
      return i.subscribe({
        next: function(f) {
          var h = !s;
          if (s = !0, !h || a)
            try {
              c = n(c, f);
            } catch (d) {
              return l.error(d);
            }
          else
            c = f;
        },
        error: function(f) {
          l.error(f);
        },
        complete: function() {
          if (!s && !a)
            return l.error(new TypeError("Cannot reduce an empty sequence"));
          l.next(c), l.complete();
        }
      });
    });
  }, e.concat = function() {
    for (var n = this, i = arguments.length, o = new Array(i), a = 0; a < i; a++)
      o[a] = arguments[a];
    var s = Dt(this);
    return new s(function(u) {
      var c, l = 0;
      function f(h) {
        c = h.subscribe({
          next: function(d) {
            u.next(d);
          },
          error: function(d) {
            u.error(d);
          },
          complete: function() {
            l === o.length ? (c = void 0, u.complete()) : f(s.from(o[l++]));
          }
        });
      }
      return f(n), function() {
        c && (c.unsubscribe(), c = void 0);
      };
    });
  }, e.flatMap = function(n) {
    var i = this;
    if (typeof n != "function")
      throw new TypeError(n + " is not a function");
    var o = Dt(this);
    return new o(function(a) {
      var s = [], u = i.subscribe({
        next: function(l) {
          if (n)
            try {
              l = n(l);
            } catch (h) {
              return a.error(h);
            }
          var f = o.from(l).subscribe({
            next: function(h) {
              a.next(h);
            },
            error: function(h) {
              a.error(h);
            },
            complete: function() {
              var h = s.indexOf(f);
              h >= 0 && s.splice(h, 1), c();
            }
          });
          s.push(f);
        },
        error: function(l) {
          a.error(l);
        },
        complete: function() {
          c();
        }
      });
      function c() {
        u.closed && s.length === 0 && a.complete();
      }
      return function() {
        s.forEach(function(l) {
          return l.unsubscribe();
        }), u.unsubscribe();
      };
    });
  }, e[cn] = function() {
    return this;
  }, t.from = function(n) {
    var i = typeof this == "function" ? this : t;
    if (n == null)
      throw new TypeError(n + " is not an object");
    var o = lr(n, cn);
    if (o) {
      var a = o.call(n);
      if (Object(a) !== a)
        throw new TypeError(a + " is not an object");
      return zc(a) && a.constructor === i ? a : new i(function(s) {
        return a.subscribe(s);
      });
    }
    if (Kn("iterator") && (o = lr(n, Uc), o))
      return new i(function(s) {
        er(function() {
          if (!s.closed) {
            for (var u = Qc(o.call(n)), c; !(c = u()).done; ) {
              var l = c.value;
              if (s.next(l), s.closed)
                return;
            }
            s.complete();
          }
        });
      });
    if (Array.isArray(n))
      return new i(function(s) {
        er(function() {
          if (!s.closed) {
            for (var u = 0; u < n.length; ++u)
              if (s.next(n[u]), s.closed)
                return;
            s.complete();
          }
        });
      });
    throw new TypeError(n + " is not observable");
  }, t.of = function() {
    for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++)
      i[o] = arguments[o];
    var a = typeof this == "function" ? this : t;
    return new a(function(s) {
      er(function() {
        if (!s.closed) {
          for (var u = 0; u < i.length; ++u)
            if (s.next(i[u]), s.closed)
              return;
          s.complete();
        }
      });
    });
  }, Jn(t, null, [{
    key: ua,
    get: function() {
      return this;
    }
  }]), t;
}();
Xn() && Object.defineProperty(ie, Symbol("extensions"), {
  value: {
    symbol: cn,
    hostReportError: mt
  },
  configurable: !0
});
function Yc(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function Jc(t) {
  var e, r = t.Symbol;
  if (typeof r == "function")
    if (r.observable)
      e = r.observable;
    else {
      typeof r.for == "function" ? e = r.for("https://github.com/benlesh/symbol-observable") : e = r("https://github.com/benlesh/symbol-observable");
      try {
        r.observable = e;
      } catch {
      }
    }
  else
    e = "@@observable";
  return e;
}
var ct;
typeof self < "u" ? ct = self : typeof window < "u" ? ct = window : typeof global < "u" ? ct = global : typeof module < "u" ? ct = module : ct = Function("return this")();
Jc(ct);
var ji = ie.prototype, Li = "@@observable";
ji[Li] || (ji[Li] = function() {
  return this;
});
var Xc = Object.prototype.toString;
function ha(t) {
  return ln(t);
}
function ln(t, e) {
  switch (Xc.call(t)) {
    case "[object Array]": {
      if (e = e || /* @__PURE__ */ new Map(), e.has(t))
        return e.get(t);
      var r = t.slice(0);
      return e.set(t, r), r.forEach(function(i, o) {
        r[o] = ln(i, e);
      }), r;
    }
    case "[object Object]": {
      if (e = e || /* @__PURE__ */ new Map(), e.has(t))
        return e.get(t);
      var n = Object.create(Object.getPrototypeOf(t));
      return e.set(t, n), Object.keys(t).forEach(function(i) {
        n[i] = ln(t[i], e);
      }), n;
    }
    default:
      return t;
  }
}
function Kc(t) {
  var e = /* @__PURE__ */ new Set([t]);
  return e.forEach(function(r) {
    ae(r) && Zc(r) === r && Object.getOwnPropertyNames(r).forEach(function(n) {
      ae(r[n]) && e.add(r[n]);
    });
  }), t;
}
function Zc(t) {
  if (__DEV__ && !Object.isFrozen(t))
    try {
      Object.freeze(t);
    } catch (e) {
      if (e instanceof TypeError)
        return null;
      throw e;
    }
  return t;
}
function fn(t) {
  return __DEV__ && Kc(t), t;
}
function It(t, e, r) {
  var n = [];
  t.forEach(function(i) {
    return i[e] && n.push(i);
  }), n.forEach(function(i) {
    return i[e](r);
  });
}
function jr(t, e, r) {
  return new ie(function(n) {
    var i = n.next, o = n.error, a = n.complete, s = 0, u = !1, c = {
      then: function(d) {
        return new Promise(function(p) {
          return p(d());
        });
      }
    };
    function l(d, p) {
      return d ? function(v) {
        ++s;
        var y = function() {
          return d(v);
        };
        c = c.then(y, y).then(function(S) {
          --s, i && i.call(n, S), u && f.complete();
        }, function(S) {
          throw --s, S;
        }).catch(function(S) {
          o && o.call(n, S);
        });
      } : function(v) {
        return p && p.call(n, v);
      };
    }
    var f = {
      next: l(e, i),
      error: l(r, o),
      complete: function() {
        u = !0, s || a && a.call(n);
      }
    }, h = t.subscribe(f);
    return function() {
      return h.unsubscribe();
    };
  });
}
var ot = typeof WeakMap == "function" && Ce(function() {
  return navigator.product;
}) !== "ReactNative", eu = typeof WeakSet == "function", da = typeof Symbol == "function" && typeof Symbol.for == "function", Sr = da && Symbol.asyncIterator;
Ce(function() {
  return window.document.createElement;
});
Ce(function() {
  return navigator.userAgent.indexOf("jsdom") >= 0;
});
function pa(t) {
  function e(r) {
    Object.defineProperty(t, r, { value: ie });
  }
  return da && Symbol.species && e(Symbol.species), e("@@species"), t;
}
function Vi(t) {
  return t && typeof t.then == "function";
}
var ut = function(t) {
  Pe(e, t);
  function e(r) {
    var n = t.call(this, function(i) {
      return n.addObserver(i), function() {
        return n.removeObserver(i);
      };
    }) || this;
    return n.observers = /* @__PURE__ */ new Set(), n.promise = new Promise(function(i, o) {
      n.resolve = i, n.reject = o;
    }), n.handlers = {
      next: function(i) {
        n.sub !== null && (n.latest = ["next", i], n.notify("next", i), It(n.observers, "next", i));
      },
      error: function(i) {
        var o = n.sub;
        o !== null && (o && setTimeout(function() {
          return o.unsubscribe();
        }), n.sub = null, n.latest = ["error", i], n.reject(i), n.notify("error", i), It(n.observers, "error", i));
      },
      complete: function() {
        var i = n, o = i.sub, a = i.sources, s = a === void 0 ? [] : a;
        if (o !== null) {
          var u = s.shift();
          u ? Vi(u) ? u.then(function(c) {
            return n.sub = c.subscribe(n.handlers);
          }) : n.sub = u.subscribe(n.handlers) : (o && setTimeout(function() {
            return o.unsubscribe();
          }), n.sub = null, n.latest && n.latest[0] === "next" ? n.resolve(n.latest[1]) : n.resolve(), n.notify("complete"), It(n.observers, "complete"));
        }
      }
    }, n.nextResultListeners = /* @__PURE__ */ new Set(), n.cancel = function(i) {
      n.reject(i), n.sources = [], n.handlers.complete();
    }, n.promise.catch(function(i) {
    }), typeof r == "function" && (r = [new ie(r)]), Vi(r) ? r.then(function(i) {
      return n.start(i);
    }, n.handlers.error) : n.start(r), n;
  }
  return e.prototype.start = function(r) {
    this.sub === void 0 && (this.sources = Array.from(r), this.handlers.complete());
  }, e.prototype.deliverLastMessage = function(r) {
    if (this.latest) {
      var n = this.latest[0], i = r[n];
      i && i.call(r, this.latest[1]), this.sub === null && n === "next" && r.complete && r.complete();
    }
  }, e.prototype.addObserver = function(r) {
    this.observers.has(r) || (this.deliverLastMessage(r), this.observers.add(r));
  }, e.prototype.removeObserver = function(r) {
    this.observers.delete(r) && this.observers.size < 1 && this.handlers.complete();
  }, e.prototype.notify = function(r, n) {
    var i = this.nextResultListeners;
    i.size && (this.nextResultListeners = /* @__PURE__ */ new Set(), i.forEach(function(o) {
      return o(r, n);
    }));
  }, e.prototype.beforeNext = function(r) {
    var n = !1;
    this.nextResultListeners.add(function(i, o) {
      n || (n = !0, r(i, o));
    });
  }, e;
}(ie);
pa(ut);
function dt(t) {
  return "incremental" in t;
}
function tu(t) {
  return "hasNext" in t && "data" in t;
}
function ru(t) {
  return dt(t) || tu(t);
}
function nu(t) {
  return ae(t) && "payload" in t;
}
function ya(t, e) {
  var r = t, n = new He();
  return dt(e) && Fe(e.incremental) && e.incremental.forEach(function(i) {
    for (var o = i.data, a = i.path, s = a.length - 1; s >= 0; --s) {
      var u = a[s], c = !isNaN(+u), l = c ? [] : {};
      l[u] = o, o = l;
    }
    r = n.merge(r, o);
  }), r;
}
function tr(t) {
  var e = hn(t);
  return Fe(e);
}
function hn(t) {
  var e = Fe(t.errors) ? t.errors.slice(0) : [];
  return dt(t) && Fe(t.incremental) && t.incremental.forEach(function(r) {
    r.errors && e.push.apply(e, r.errors);
  }), e;
}
function Or() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var r = /* @__PURE__ */ Object.create(null);
  return t.forEach(function(n) {
    n && Object.keys(n).forEach(function(i) {
      var o = n[i];
      o !== void 0 && (r[i] = o);
    });
  }), r;
}
var qi = /* @__PURE__ */ new Map();
function dn(t) {
  var e = qi.get(t) || 1;
  return qi.set(t, e + 1), "".concat(t, ":").concat(e, ":").concat(Math.random().toString(36).slice(2));
}
function iu(t) {
  var e = dn("stringifyForDisplay");
  return JSON.stringify(t, function(r, n) {
    return n === void 0 ? e : n;
  }).split(JSON.stringify(e)).join("<undefined>");
}
function Lr(t, e) {
  return Or(t, e, e.variables && {
    variables: E(E({}, t && t.variables), e.variables)
  });
}
function $i(t) {
  return new ie(function(e) {
    e.error(t);
  });
}
var pn = function(t, e, r) {
  var n = new Error(r);
  throw n.name = "ServerError", n.response = t, n.statusCode = t.status, n.result = e, n;
};
function ou(t) {
  for (var e = [
    "query",
    "operationName",
    "variables",
    "extensions",
    "context"
  ], r = 0, n = Object.keys(t); r < n.length; r++) {
    var i = n[r];
    if (e.indexOf(i) < 0)
      throw __DEV__ ? new G("illegal argument: ".concat(i)) : new G(27);
  }
  return t;
}
function au(t, e) {
  var r = E({}, t), n = function(o) {
    typeof o == "function" ? r = E(E({}, r), o(r)) : r = E(E({}, r), o);
  }, i = function() {
    return E({}, r);
  };
  return Object.defineProperty(e, "setContext", {
    enumerable: !1,
    value: n
  }), Object.defineProperty(e, "getContext", {
    enumerable: !1,
    value: i
  }), e;
}
function su(t) {
  var e = {
    variables: t.variables || {},
    extensions: t.extensions || {},
    operationName: t.operationName,
    query: t.query
  };
  return e.operationName || (e.operationName = typeof e.query != "string" ? sn(e.query) || void 0 : ""), e;
}
function Qi(t, e) {
  return e ? e(t) : ie.of();
}
function At(t) {
  return typeof t == "function" ? new wt(t) : t;
}
function Gt(t) {
  return t.request.length <= 1;
}
var cu = function(t) {
  Pe(e, t);
  function e(r, n) {
    var i = t.call(this, r) || this;
    return i.link = n, i;
  }
  return e;
}(Error), wt = function() {
  function t(e) {
    e && (this.request = e);
  }
  return t.empty = function() {
    return new t(function() {
      return ie.of();
    });
  }, t.from = function(e) {
    return e.length === 0 ? t.empty() : e.map(At).reduce(function(r, n) {
      return r.concat(n);
    });
  }, t.split = function(e, r, n) {
    var i = At(r), o = At(n || new t(Qi));
    return Gt(i) && Gt(o) ? new t(function(a) {
      return e(a) ? i.request(a) || ie.of() : o.request(a) || ie.of();
    }) : new t(function(a, s) {
      return e(a) ? i.request(a, s) || ie.of() : o.request(a, s) || ie.of();
    });
  }, t.execute = function(e, r) {
    return e.request(au(r.context, su(ou(r)))) || ie.of();
  }, t.concat = function(e, r) {
    var n = At(e);
    if (Gt(n))
      return __DEV__ && k.warn(new cu("You are calling concat on a terminating link, which will have no effect", n)), n;
    var i = At(r);
    return Gt(i) ? new t(function(o) {
      return n.request(o, function(a) {
        return i.request(a) || ie.of();
      }) || ie.of();
    }) : new t(function(o, a) {
      return n.request(o, function(s) {
        return i.request(s, a) || ie.of();
      }) || ie.of();
    });
  }, t.prototype.split = function(e, r, n) {
    return this.concat(t.split(e, r, n || new t(Qi)));
  }, t.prototype.concat = function(e) {
    return t.concat(this, e);
  }, t.prototype.request = function(e, r) {
    throw __DEV__ ? new G("request is not implemented") : new G(22);
  }, t.prototype.onError = function(e, r) {
    if (r && r.error)
      return r.error(e), !1;
    throw e;
  }, t.prototype.setOnError = function(e) {
    return this.onError = e, this;
  }, t;
}(), yn = wt.execute, uu = "3.7.17";
function lu(t) {
  return !!t.body;
}
function fu(t) {
  return !!t.getReader;
}
function hu(t) {
  return !!(Sr && t[Symbol.asyncIterator]);
}
function du(t) {
  return !!t.stream;
}
function pu(t) {
  return !!t.arrayBuffer;
}
function yu(t) {
  return !!t.pipe;
}
function vu(t) {
  var e, r = t[Symbol.asyncIterator]();
  return e = {
    next: function() {
      return r.next();
    }
  }, e[Symbol.asyncIterator] = function() {
    return this;
  }, e;
}
function mu(t) {
  var e = null, r = null, n = !1, i = [], o = [];
  function a(f) {
    if (!r) {
      if (o.length) {
        var h = o.shift();
        if (Array.isArray(h) && h[0])
          return h[0]({ value: f, done: !1 });
      }
      i.push(f);
    }
  }
  function s(f) {
    r = f;
    var h = o.slice();
    h.forEach(function(d) {
      d[1](f);
    }), !e || e();
  }
  function u() {
    n = !0;
    var f = o.slice();
    f.forEach(function(h) {
      h[0]({ value: void 0, done: !0 });
    }), !e || e();
  }
  e = function() {
    e = null, t.removeListener("data", a), t.removeListener("error", s), t.removeListener("end", u), t.removeListener("finish", u), t.removeListener("close", u);
  }, t.on("data", a), t.on("error", s), t.on("end", u), t.on("finish", u), t.on("close", u);
  function c() {
    return new Promise(function(f, h) {
      if (r)
        return h(r);
      if (i.length)
        return f({ value: i.shift(), done: !1 });
      if (n)
        return f({ value: void 0, done: !0 });
      o.push([f, h]);
    });
  }
  var l = {
    next: function() {
      return c();
    }
  };
  return Sr && (l[Symbol.asyncIterator] = function() {
    return this;
  }), l;
}
function gu(t) {
  var e = !1, r = {
    next: function() {
      return e ? Promise.resolve({
        value: void 0,
        done: !0
      }) : (e = !0, new Promise(function(n, i) {
        t.then(function(o) {
          n({ value: o, done: !1 });
        }).catch(i);
      }));
    }
  };
  return Sr && (r[Symbol.asyncIterator] = function() {
    return this;
  }), r;
}
function Bi(t) {
  var e = {
    next: function() {
      return t.read();
    }
  };
  return Sr && (e[Symbol.asyncIterator] = function() {
    return this;
  }), e;
}
function bu(t) {
  var e = t;
  if (lu(t) && (e = t.body), hu(e))
    return vu(e);
  if (fu(e))
    return Bi(e.getReader());
  if (du(e))
    return Bi(e.stream().getReader());
  if (pu(e))
    return gu(e.arrayBuffer());
  if (yu(e))
    return mu(e);
  throw new Error("Unknown body type for responseIterator. Please pass a streamable response.");
}
var ei = Symbol();
function Eu(t) {
  return t.extensions ? Array.isArray(t.extensions[ei]) : !1;
}
function wu(t) {
  return t.hasOwnProperty("graphQLErrors");
}
var _u = function(t) {
  var e = Ke(Ke(Ke([], t.graphQLErrors, !0), t.clientErrors, !0), t.protocolErrors, !0);
  return t.networkError && e.push(t.networkError), e.map(function(r) {
    return ae(r) && r.message || "Error message not found.";
  }).join(`
`);
}, at = function(t) {
  Pe(e, t);
  function e(r) {
    var n = r.graphQLErrors, i = r.protocolErrors, o = r.clientErrors, a = r.networkError, s = r.errorMessage, u = r.extraInfo, c = t.call(this, s) || this;
    return c.name = "ApolloError", c.graphQLErrors = n || [], c.protocolErrors = i || [], c.clientErrors = o || [], c.networkError = a || null, c.message = s || _u(c), c.extraInfo = u, c.__proto__ = e.prototype, c;
  }
  return e;
}(Error), Ui = Object.prototype.hasOwnProperty;
function Su(t, e) {
  var r, n, i, o, a;
  return Be(this, void 0, void 0, function() {
    var s, u, c, l, f, h, d, p, v, y, S, m, g, _, b, A, P, F, V, M, re, ee, Q;
    return Ue(this, function(oe) {
      switch (oe.label) {
        case 0:
          if (TextDecoder === void 0)
            throw new Error("TextDecoder must be defined in the environment: please import a polyfill.");
          s = new TextDecoder("utf-8"), u = (r = t.headers) === null || r === void 0 ? void 0 : r.get("content-type"), c = "boundary=", l = u?.includes(c) ? u?.substring(u?.indexOf(c) + c.length).replace(/['"]/g, "").replace(/\;(.*)/gm, "").trim() : "-", f = `\r
--`.concat(l), h = "", d = bu(t), p = !0, oe.label = 1;
        case 1:
          return p ? [4, d.next()] : [3, 3];
        case 2:
          for (v = oe.sent(), y = v.value, S = v.done, m = typeof y == "string" ? y : s.decode(y), g = h.length - f.length + 1, p = !S, h += m, _ = h.indexOf(f, g); _ > -1; ) {
            if (b = void 0, ee = [
              h.slice(0, _),
              h.slice(_ + f.length)
            ], b = ee[0], h = ee[1], A = b.indexOf(`\r
\r
`), P = Ou(b.slice(0, A)), F = P["content-type"], F && F.toLowerCase().indexOf("application/json") === -1)
              throw new Error("Unsupported patch content type: application/json is required.");
            if (V = b.slice(A), V)
              try {
                M = va(t, V), Object.keys(M).length > 1 || "data" in M || "incremental" in M || "errors" in M || "payload" in M ? nu(M) ? (re = {}, "payload" in M && (re = E({}, M.payload)), "errors" in M && (re = E(E({}, re), { extensions: E(E({}, "extensions" in re ? re.extensions : null), (Q = {}, Q[ei] = M.errors, Q)) })), (n = e.next) === null || n === void 0 || n.call(e, re)) : (i = e.next) === null || i === void 0 || i.call(e, M) : Object.keys(M).length === 1 && "hasNext" in M && !M.hasNext && ((o = e.complete) === null || o === void 0 || o.call(e));
              } catch (ce) {
                ti(ce, e);
              }
            _ = h.indexOf(f);
          }
          return [3, 1];
        case 3:
          return (a = e.complete) === null || a === void 0 || a.call(e), [2];
      }
    });
  });
}
function Ou(t) {
  var e = {};
  return t.split(`
`).forEach(function(r) {
    var n = r.indexOf(":");
    if (n > -1) {
      var i = r.slice(0, n).trim().toLowerCase(), o = r.slice(n + 1).trim();
      e[i] = o;
    }
  }), e;
}
function va(t, e) {
  if (t.status >= 300) {
    var r = function() {
      try {
        return JSON.parse(e);
      } catch {
        return e;
      }
    };
    pn(t, r(), "Response not successful: Received status code ".concat(t.status));
  }
  try {
    return JSON.parse(e);
  } catch (i) {
    var n = i;
    throw n.name = "ServerParseError", n.response = t, n.statusCode = t.status, n.bodyText = e, n;
  }
}
function ti(t, e) {
  var r, n;
  t.name !== "AbortError" && (t.result && t.result.errors && t.result.data && ((r = e.next) === null || r === void 0 || r.call(e, t.result)), (n = e.error) === null || n === void 0 || n.call(e, t));
}
function Tu(t, e, r) {
  Ru(e)(t).then(function(n) {
    var i, o;
    (i = r.next) === null || i === void 0 || i.call(r, n), (o = r.complete) === null || o === void 0 || o.call(r);
  }).catch(function(n) {
    return ti(n, r);
  });
}
function Ru(t) {
  return function(e) {
    return e.text().then(function(r) {
      return va(e, r);
    }).then(function(r) {
      return e.status >= 300 && pn(e, r, "Response not successful: Received status code ".concat(e.status)), !Array.isArray(r) && !Ui.call(r, "data") && !Ui.call(r, "errors") && pn(e, r, "Server response was missing for query '".concat(Array.isArray(t) ? t.map(function(n) {
        return n.operationName;
      }) : t.operationName, "'.")), r;
    });
  };
}
var vn = function(t, e) {
  var r;
  try {
    r = JSON.stringify(t);
  } catch (i) {
    var n = __DEV__ ? new G("Network request failed. ".concat(e, " is not serializable: ").concat(i.message)) : new G(24);
    throw n.parseError = i, n;
  }
  return r;
}, Cu = {
  includeQuery: !0,
  includeExtensions: !1,
  preserveHeaderCase: !1
}, ku = {
  accept: "*/*",
  "content-type": "application/json"
}, Du = {
  method: "POST"
}, Au = {
  http: Cu,
  headers: ku,
  options: Du
}, Pu = function(t, e) {
  return e(t);
};
function xu(t, e) {
  for (var r = [], n = 2; n < arguments.length; n++)
    r[n - 2] = arguments[n];
  var i = {}, o = {};
  r.forEach(function(f) {
    i = E(E(E({}, i), f.options), { headers: E(E({}, i.headers), f.headers) }), f.credentials && (i.credentials = f.credentials), o = E(E({}, o), f.http);
  }), i.headers && (i.headers = Iu(i.headers, o.preserveHeaderCase));
  var a = t.operationName, s = t.extensions, u = t.variables, c = t.query, l = { operationName: a, variables: u };
  return o.includeExtensions && (l.extensions = s), o.includeQuery && (l.query = e(c, lc)), {
    options: i,
    body: l
  };
}
function Iu(t, e) {
  if (!e) {
    var r = /* @__PURE__ */ Object.create(null);
    return Object.keys(Object(t)).forEach(function(o) {
      r[o.toLowerCase()] = t[o];
    }), r;
  }
  var n = /* @__PURE__ */ Object.create(null);
  Object.keys(Object(t)).forEach(function(o) {
    n[o.toLowerCase()] = { originalName: o, value: t[o] };
  });
  var i = /* @__PURE__ */ Object.create(null);
  return Object.keys(n).forEach(function(o) {
    i[n[o].originalName] = n[o].value;
  }), i;
}
var Nu = function(t) {
  if (!t && typeof fetch > "u")
    throw __DEV__ ? new G(`
"fetch" has not been found globally and no fetcher has been configured. To fix this, install a fetch package (like https://www.npmjs.com/package/cross-fetch), instantiate the fetcher, and pass it into your HttpLink constructor. For example:

import fetch from 'cross-fetch';
import { ApolloClient, HttpLink } from '@apollo/client';
const client = new ApolloClient({
  link: new HttpLink({ uri: '/graphql', fetch })
});
    `) : new G(23);
}, Fu = function() {
  if (typeof AbortController > "u")
    return { controller: !1, signal: !1 };
  var t = new AbortController(), e = t.signal;
  return { controller: t, signal: e };
}, Mu = function(t, e) {
  var r = t.getContext(), n = r.uri;
  return n || (typeof e == "function" ? e(t) : e || "/graphql");
};
function ju(t, e) {
  var r = [], n = function(f, h) {
    r.push("".concat(f, "=").concat(encodeURIComponent(h)));
  };
  if ("query" in e && n("query", e.query), e.operationName && n("operationName", e.operationName), e.variables) {
    var i = void 0;
    try {
      i = vn(e.variables, "Variables map");
    } catch (f) {
      return { parseError: f };
    }
    n("variables", i);
  }
  if (e.extensions) {
    var o = void 0;
    try {
      o = vn(e.extensions, "Extensions map");
    } catch (f) {
      return { parseError: f };
    }
    n("extensions", o);
  }
  var a = "", s = t, u = t.indexOf("#");
  u !== -1 && (a = t.substr(u), s = t.substr(0, u));
  var c = s.indexOf("?") === -1 ? "?" : "&", l = s + c + r.join("&") + a;
  return { newURI: l };
}
var zi = Ce(function() {
  return fetch;
}), ma = function(t) {
  t === void 0 && (t = {});
  var e = t.uri, r = e === void 0 ? "/graphql" : e, n = t.fetch, i = t.print, o = i === void 0 ? Pu : i, a = t.includeExtensions, s = t.preserveHeaderCase, u = t.useGETForQueries, c = t.includeUnusedVariables, l = c === void 0 ? !1 : c, f = et(t, ["uri", "fetch", "print", "includeExtensions", "preserveHeaderCase", "useGETForQueries", "includeUnusedVariables"]);
  __DEV__ && Nu(n || zi);
  var h = {
    http: { includeExtensions: a, preserveHeaderCase: s },
    options: f.fetchOptions,
    credentials: f.credentials,
    headers: f.headers
  };
  return new wt(function(d) {
    var p = Mu(d, r), v = d.getContext(), y = {};
    if (v.clientAwareness) {
      var S = v.clientAwareness, m = S.name, g = S.version;
      m && (y["apollographql-client-name"] = m), g && (y["apollographql-client-version"] = g);
    }
    var _ = E(E({}, y), v.headers), b = {
      http: v.http,
      options: v.fetchOptions,
      credentials: v.credentials,
      headers: _
    }, A = xu(d, o, Au, h, b), P = A.options, F = A.body;
    if (F.variables && !l) {
      var V = new Set(Object.keys(F.variables));
      Ve(d.query, {
        Variable: function(C, x, D) {
          D && D.kind !== "VariableDefinition" && V.delete(C.name.value);
        }
      }), V.size && (F.variables = E({}, F.variables), V.forEach(function(C) {
        delete F.variables[C];
      }));
    }
    var M;
    if (!P.signal) {
      var re = Fu(), ee = re.controller, Q = re.signal;
      M = ee, M && (P.signal = Q);
    }
    var oe = function(C) {
      return C.kind === "OperationDefinition" && C.operation === "mutation";
    }, ce = function(C) {
      return C.kind === "OperationDefinition" && C.operation === "subscription";
    }, Se = ce(_r(d.query)), de = Qn(["defer"], d.query);
    if (u && !d.query.definitions.some(oe) && (P.method = "GET"), de || Se) {
      P.headers = P.headers || {};
      var ue = "multipart/mixed;";
      Se && de && __DEV__ && k.warn("Multipart-subscriptions do not support @defer"), Se ? ue += "boundary=graphql;subscriptionSpec=1.0,application/json" : de && (ue += "deferSpec=20220824,application/json"), P.headers.accept = ue;
    }
    if (P.method === "GET") {
      var Oe = ju(p, F), Te = Oe.newURI, Re = Oe.parseError;
      if (Re)
        return $i(Re);
      p = Te;
    } else
      try {
        P.body = vn(F, "Payload");
      } catch (C) {
        return $i(C);
      }
    return new ie(function(C) {
      var x = n || Ce(function() {
        return fetch;
      }) || zi;
      return x(p, P).then(function(D) {
        var j;
        d.setContext({ response: D });
        var w = (j = D.headers) === null || j === void 0 ? void 0 : j.get("content-type");
        return w !== null && /^multipart\/mixed/i.test(w) ? Su(D, C) : Tu(D, d, C);
      }).catch(function(D) {
        return ti(D, C);
      }), function() {
        M && M.abort();
      };
    });
  });
}, Lu = function(t) {
  Pe(e, t);
  function e(r) {
    r === void 0 && (r = {});
    var n = t.call(this, ma(r).request) || this;
    return n.options = r, n;
  }
  return e;
}(wt);
const { toString: Wi, hasOwnProperty: Vu } = Object.prototype, Hi = Function.prototype.toString, mn = /* @__PURE__ */ new Map();
function pe(t, e) {
  try {
    return gn(t, e);
  } finally {
    mn.clear();
  }
}
function gn(t, e) {
  if (t === e)
    return !0;
  const r = Wi.call(t), n = Wi.call(e);
  if (r !== n)
    return !1;
  switch (r) {
    case "[object Array]":
      if (t.length !== e.length)
        return !1;
    case "[object Object]": {
      if (Yi(t, e))
        return !0;
      const i = Gi(t), o = Gi(e), a = i.length;
      if (a !== o.length)
        return !1;
      for (let s = 0; s < a; ++s)
        if (!Vu.call(e, i[s]))
          return !1;
      for (let s = 0; s < a; ++s) {
        const u = i[s];
        if (!gn(t[u], e[u]))
          return !1;
      }
      return !0;
    }
    case "[object Error]":
      return t.name === e.name && t.message === e.message;
    case "[object Number]":
      if (t !== t)
        return e !== e;
    case "[object Boolean]":
    case "[object Date]":
      return +t == +e;
    case "[object RegExp]":
    case "[object String]":
      return t == `${e}`;
    case "[object Map]":
    case "[object Set]": {
      if (t.size !== e.size)
        return !1;
      if (Yi(t, e))
        return !0;
      const i = t.entries(), o = r === "[object Map]";
      for (; ; ) {
        const a = i.next();
        if (a.done)
          break;
        const [s, u] = a.value;
        if (!e.has(s) || o && !gn(u, e.get(s)))
          return !1;
      }
      return !0;
    }
    case "[object Uint16Array]":
    case "[object Uint8Array]":
    case "[object Uint32Array]":
    case "[object Int32Array]":
    case "[object Int8Array]":
    case "[object Int16Array]":
    case "[object ArrayBuffer]":
      t = new Uint8Array(t), e = new Uint8Array(e);
    case "[object DataView]": {
      let i = t.byteLength;
      if (i === e.byteLength)
        for (; i-- && t[i] === e[i]; )
          ;
      return i === -1;
    }
    case "[object AsyncFunction]":
    case "[object GeneratorFunction]":
    case "[object AsyncGeneratorFunction]":
    case "[object Function]": {
      const i = Hi.call(t);
      return i !== Hi.call(e) ? !1 : !Qu(i, $u);
    }
  }
  return !1;
}
function Gi(t) {
  return Object.keys(t).filter(qu, t);
}
function qu(t) {
  return this[t] !== void 0;
}
const $u = "{ [native code] }";
function Qu(t, e) {
  const r = t.length - e.length;
  return r >= 0 && t.indexOf(e, r) === r;
}
function Yi(t, e) {
  let r = mn.get(t);
  if (r) {
    if (r.has(e))
      return !0;
  } else
    mn.set(t, r = /* @__PURE__ */ new Set());
  return r.add(e), !1;
}
var Bu = function() {
  return /* @__PURE__ */ Object.create(null);
}, ga = Array.prototype, Uu = ga.forEach, zu = ga.slice, Wu = (
  /** @class */
  function() {
    function t(e, r) {
      e === void 0 && (e = !0), r === void 0 && (r = Bu), this.weakness = e, this.makeData = r;
    }
    return t.prototype.lookup = function() {
      for (var e = [], r = 0; r < arguments.length; r++)
        e[r] = arguments[r];
      return this.lookupArray(e);
    }, t.prototype.lookupArray = function(e) {
      var r = this;
      return Uu.call(e, function(n) {
        return r = r.getChildTrie(n);
      }), r.data || (r.data = this.makeData(zu.call(e)));
    }, t.prototype.getChildTrie = function(e) {
      var r = this.weakness && Hu(e) ? this.weak || (this.weak = /* @__PURE__ */ new WeakMap()) : this.strong || (this.strong = /* @__PURE__ */ new Map()), n = r.get(e);
      return n || r.set(e, n = new t(this.weakness, this.makeData)), n;
    }, t;
  }()
);
function Hu(t) {
  switch (typeof t) {
    case "object":
      if (t === null)
        break;
    case "function":
      return !0;
  }
  return !1;
}
let Ee = null;
const Ji = {};
let Gu = 1;
const Yu = () => class {
  constructor() {
    this.id = [
      "slot",
      Gu++,
      Date.now(),
      Math.random().toString(36).slice(2)
    ].join(":");
  }
  hasValue() {
    for (let e = Ee; e; e = e.parent)
      if (this.id in e.slots) {
        const r = e.slots[this.id];
        if (r === Ji)
          break;
        return e !== Ee && (Ee.slots[this.id] = r), !0;
      }
    return Ee && (Ee.slots[this.id] = Ji), !1;
  }
  getValue() {
    if (this.hasValue())
      return Ee.slots[this.id];
  }
  withValue(e, r, n, i) {
    const o = {
      __proto__: null,
      [this.id]: e
    }, a = Ee;
    Ee = { parent: a, slots: o };
    try {
      return r.apply(i, n);
    } finally {
      Ee = a;
    }
  }
  // Capture the current context and wrap a callback function so that it
  // reestablishes the captured context when called.
  static bind(e) {
    const r = Ee;
    return function() {
      const n = Ee;
      try {
        return Ee = r, e.apply(this, arguments);
      } finally {
        Ee = n;
      }
    };
  }
  // Immediately run a callback function without any captured context.
  static noContext(e, r, n) {
    if (Ee) {
      const i = Ee;
      try {
        return Ee = null, e.apply(n, r);
      } finally {
        Ee = i;
      }
    } else
      return e.apply(n, r);
  }
};
function Xi(t) {
  try {
    return t();
  } catch {
  }
}
const Vr = "@wry/context:Slot", Ju = (
  // Prefer globalThis when available.
  // https://github.com/benjamn/wryware/issues/347
  Xi(() => globalThis) || // Fall back to global, which works in Node.js and may be converted by some
  // bundlers to the appropriate identifier (window, self, ...) depending on the
  // bundling target. https://github.com/endojs/endo/issues/576#issuecomment-1178515224
  Xi(() => global) || // Otherwise, use a dummy host that's local to this module. We used to fall
  // back to using the Array constructor as a namespace, but that was flagged in
  // https://github.com/benjamn/wryware/issues/347, and can be avoided.
  /* @__PURE__ */ Object.create(null)
), Ki = Ju, ba = Ki[Vr] || // Earlier versions of this package stored the globalKey property on the Array
// constructor, so we check there as well, to prevent Slot class duplication.
Array[Vr] || function(t) {
  try {
    Object.defineProperty(Ki, Vr, {
      value: t,
      enumerable: !1,
      writable: !1,
      // When it was possible for globalHost to be the Array constructor (a
      // legacy Slot dedup strategy), it was important for the property to be
      // configurable:true so it could be deleted. That does not seem to be as
      // important when globalHost is the global object, but I don't want to
      // cause similar problems again, and configurable:true seems safest.
      // https://github.com/endojs/endo/issues/576#issuecomment-1178274008
      configurable: !0
    });
  } finally {
    return t;
  }
}(Yu());
function Xu() {
}
var Ku = (
  /** @class */
  function() {
    function t(e, r) {
      e === void 0 && (e = 1 / 0), r === void 0 && (r = Xu), this.max = e, this.dispose = r, this.map = /* @__PURE__ */ new Map(), this.newest = null, this.oldest = null;
    }
    return t.prototype.has = function(e) {
      return this.map.has(e);
    }, t.prototype.get = function(e) {
      var r = this.getNode(e);
      return r && r.value;
    }, t.prototype.getNode = function(e) {
      var r = this.map.get(e);
      if (r && r !== this.newest) {
        var n = r.older, i = r.newer;
        i && (i.older = n), n && (n.newer = i), r.older = this.newest, r.older.newer = r, r.newer = null, this.newest = r, r === this.oldest && (this.oldest = i);
      }
      return r;
    }, t.prototype.set = function(e, r) {
      var n = this.getNode(e);
      return n ? n.value = r : (n = {
        key: e,
        value: r,
        newer: null,
        older: this.newest
      }, this.newest && (this.newest.newer = n), this.newest = n, this.oldest = this.oldest || n, this.map.set(e, n), n.value);
    }, t.prototype.clean = function() {
      for (; this.oldest && this.map.size > this.max; )
        this.delete(this.oldest.key);
    }, t.prototype.delete = function(e) {
      var r = this.map.get(e);
      return r ? (r === this.newest && (this.newest = r.older), r === this.oldest && (this.oldest = r.newer), r.newer && (r.newer.older = r.older), r.older && (r.older.newer = r.newer), this.map.delete(e), this.dispose(r.value, e), !0) : !1;
    }, t;
  }()
), Tr = new ba(), qr, Zu = Object.prototype.hasOwnProperty, ri = (qr = Array.from, qr === void 0 ? function(t) {
  var e = [];
  return t.forEach(function(r) {
    return e.push(r);
  }), e;
} : qr);
function fr(t) {
  var e = t.unsubscribe;
  typeof e == "function" && (t.unsubscribe = void 0, e());
}
var jt = [], el = 100;
function gt(t, e) {
  if (!t)
    throw new Error(e || "assertion failure");
}
function tl(t, e) {
  var r = t.length;
  return (
    // Unknown values are not equal to each other.
    r > 0 && // Both values must be ordinary (or both exceptional) to be equal.
    r === e.length && // The underlying value or exception must be the same.
    t[r - 1] === e[r - 1]
  );
}
function Ea(t) {
  switch (t.length) {
    case 0:
      throw new Error("unknown value");
    case 1:
      return t[0];
    case 2:
      throw t[1];
  }
}
function rl(t) {
  return t.slice(0);
}
var nl = (
  /** @class */
  function() {
    function t(e) {
      this.fn = e, this.parents = /* @__PURE__ */ new Set(), this.childValues = /* @__PURE__ */ new Map(), this.dirtyChildren = null, this.dirty = !0, this.recomputing = !1, this.value = [], this.deps = null, ++t.count;
    }
    return t.prototype.peek = function() {
      if (this.value.length === 1 && !Ge(this))
        return Zi(this), this.value[0];
    }, t.prototype.recompute = function(e) {
      return gt(!this.recomputing, "already recomputing"), Zi(this), Ge(this) ? il(this, e) : Ea(this.value);
    }, t.prototype.setDirty = function() {
      this.dirty || (this.dirty = !0, this.value.length = 0, wa(this), fr(this));
    }, t.prototype.dispose = function() {
      var e = this;
      this.setDirty(), Ra(this), ni(this, function(r, n) {
        r.setDirty(), Ca(r, e);
      });
    }, t.prototype.forget = function() {
      this.dispose();
    }, t.prototype.dependOn = function(e) {
      e.add(this), this.deps || (this.deps = jt.pop() || /* @__PURE__ */ new Set()), this.deps.add(e);
    }, t.prototype.forgetDeps = function() {
      var e = this;
      this.deps && (ri(this.deps).forEach(function(r) {
        return r.delete(e);
      }), this.deps.clear(), jt.push(this.deps), this.deps = null);
    }, t.count = 0, t;
  }()
);
function Zi(t) {
  var e = Tr.getValue();
  if (e)
    return t.parents.add(e), e.childValues.has(t) || e.childValues.set(t, []), Ge(t) ? Sa(e, t) : Oa(e, t), e;
}
function il(t, e) {
  return Ra(t), Tr.withValue(t, ol, [t, e]), sl(t, e) && al(t), Ea(t.value);
}
function ol(t, e) {
  t.recomputing = !0, t.value.length = 0;
  try {
    t.value[0] = t.fn.apply(null, e);
  } catch (r) {
    t.value[1] = r;
  }
  t.recomputing = !1;
}
function Ge(t) {
  return t.dirty || !!(t.dirtyChildren && t.dirtyChildren.size);
}
function al(t) {
  t.dirty = !1, !Ge(t) && _a(t);
}
function wa(t) {
  ni(t, Sa);
}
function _a(t) {
  ni(t, Oa);
}
function ni(t, e) {
  var r = t.parents.size;
  if (r)
    for (var n = ri(t.parents), i = 0; i < r; ++i)
      e(n[i], t);
}
function Sa(t, e) {
  gt(t.childValues.has(e)), gt(Ge(e));
  var r = !Ge(t);
  if (!t.dirtyChildren)
    t.dirtyChildren = jt.pop() || /* @__PURE__ */ new Set();
  else if (t.dirtyChildren.has(e))
    return;
  t.dirtyChildren.add(e), r && wa(t);
}
function Oa(t, e) {
  gt(t.childValues.has(e)), gt(!Ge(e));
  var r = t.childValues.get(e);
  r.length === 0 ? t.childValues.set(e, rl(e.value)) : tl(r, e.value) || t.setDirty(), Ta(t, e), !Ge(t) && _a(t);
}
function Ta(t, e) {
  var r = t.dirtyChildren;
  r && (r.delete(e), r.size === 0 && (jt.length < el && jt.push(r), t.dirtyChildren = null));
}
function Ra(t) {
  t.childValues.size > 0 && t.childValues.forEach(function(e, r) {
    Ca(t, r);
  }), t.forgetDeps(), gt(t.dirtyChildren === null);
}
function Ca(t, e) {
  e.parents.delete(t), t.childValues.delete(e), Ta(t, e);
}
function sl(t, e) {
  if (typeof t.subscribe == "function")
    try {
      fr(t), t.unsubscribe = t.subscribe.apply(null, e);
    } catch {
      return t.setDirty(), !1;
    }
  return !0;
}
var cl = {
  setDirty: !0,
  dispose: !0,
  forget: !0
  // Fully remove parent Entry from LRU cache and computation graph
};
function ka(t) {
  var e = /* @__PURE__ */ new Map(), r = t && t.subscribe;
  function n(i) {
    var o = Tr.getValue();
    if (o) {
      var a = e.get(i);
      a || e.set(i, a = /* @__PURE__ */ new Set()), o.dependOn(a), typeof r == "function" && (fr(a), a.unsubscribe = r(i));
    }
  }
  return n.dirty = function(o, a) {
    var s = e.get(o);
    if (s) {
      var u = a && Zu.call(cl, a) ? a : "setDirty";
      ri(s).forEach(function(c) {
        return c[u]();
      }), e.delete(o), fr(s);
    }
  }, n;
}
function Da() {
  var t = new Wu(typeof WeakMap == "function");
  return function() {
    return t.lookupArray(arguments);
  };
}
Da();
var $r = /* @__PURE__ */ new Set();
function hr(t, e) {
  e === void 0 && (e = /* @__PURE__ */ Object.create(null));
  var r = new Ku(e.max || Math.pow(2, 16), function(c) {
    return c.dispose();
  }), n = e.keyArgs, i = e.makeCacheKey || Da(), o = function() {
    var c = i.apply(null, n ? n.apply(null, arguments) : arguments);
    if (c === void 0)
      return t.apply(null, arguments);
    var l = r.get(c);
    l || (r.set(c, l = new nl(t)), l.subscribe = e.subscribe, l.forget = function() {
      return r.delete(c);
    });
    var f = l.recompute(Array.prototype.slice.call(arguments));
    return r.set(c, l), $r.add(r), Tr.hasValue() || ($r.forEach(function(h) {
      return h.clean();
    }), $r.clear()), f;
  };
  Object.defineProperty(o, "size", {
    get: function() {
      return r.map.size;
    },
    configurable: !1,
    enumerable: !1
  });
  function a(c) {
    var l = r.get(c);
    l && l.setDirty();
  }
  o.dirtyKey = a, o.dirty = function() {
    a(i.apply(null, arguments));
  };
  function s(c) {
    var l = r.get(c);
    if (l)
      return l.peek();
  }
  o.peekKey = s, o.peek = function() {
    return s(i.apply(null, arguments));
  };
  function u(c) {
    return r.delete(c);
  }
  return o.forgetKey = u, o.forget = function() {
    return u(i.apply(null, arguments));
  }, o.makeCacheKey = i, o.getKey = n ? function() {
    return i.apply(null, n.apply(null, arguments));
  } : i, Object.freeze(o);
}
var ul = function() {
  function t() {
    this.getFragmentDoc = hr(gc);
  }
  return t.prototype.batch = function(e) {
    var r = this, n = typeof e.optimistic == "string" ? e.optimistic : e.optimistic === !1 ? null : void 0, i;
    return this.performTransaction(function() {
      return i = e.update(r);
    }, n), i;
  }, t.prototype.recordOptimisticTransaction = function(e, r) {
    this.performTransaction(e, r);
  }, t.prototype.transformDocument = function(e) {
    return e;
  }, t.prototype.transformForLink = function(e) {
    return e;
  }, t.prototype.identify = function(e) {
  }, t.prototype.gc = function() {
    return [];
  }, t.prototype.modify = function(e) {
    return !1;
  }, t.prototype.readQuery = function(e, r) {
    return r === void 0 && (r = !!e.optimistic), this.read(E(E({}, e), { rootId: e.id || "ROOT_QUERY", optimistic: r }));
  }, t.prototype.readFragment = function(e, r) {
    return r === void 0 && (r = !!e.optimistic), this.read(E(E({}, e), { query: this.getFragmentDoc(e.fragment, e.fragmentName), rootId: e.id, optimistic: r }));
  }, t.prototype.writeQuery = function(e) {
    var r = e.id, n = e.data, i = et(e, ["id", "data"]);
    return this.write(Object.assign(i, {
      dataId: r || "ROOT_QUERY",
      result: n
    }));
  }, t.prototype.writeFragment = function(e) {
    var r = e.id, n = e.data, i = e.fragment, o = e.fragmentName, a = et(e, ["id", "data", "fragment", "fragmentName"]);
    return this.write(Object.assign(a, {
      query: this.getFragmentDoc(i, o),
      dataId: r,
      result: n
    }));
  }, t.prototype.updateQuery = function(e, r) {
    return this.batch({
      update: function(n) {
        var i = n.readQuery(e), o = r(i);
        return o == null ? i : (n.writeQuery(E(E({}, e), { data: o })), o);
      }
    });
  }, t.prototype.updateFragment = function(e, r) {
    return this.batch({
      update: function(n) {
        var i = n.readFragment(e), o = r(i);
        return o == null ? i : (n.writeFragment(E(E({}, e), { data: o })), o);
      }
    });
  }, t;
}(), Aa = function(t) {
  Pe(e, t);
  function e(r, n, i, o) {
    var a, s = t.call(this, r) || this;
    if (s.message = r, s.path = n, s.query = i, s.variables = o, Array.isArray(s.path)) {
      s.missing = s.message;
      for (var u = s.path.length - 1; u >= 0; --u)
        s.missing = (a = {}, a[s.path[u]] = s.missing, a);
    } else
      s.missing = s.path;
    return s.__proto__ = e.prototype, s;
  }
  return e;
}(Error);
const ll = () => /* @__PURE__ */ Object.create(null), { forEach: fl, slice: hl } = Array.prototype, { hasOwnProperty: dl } = Object.prototype;
class _t {
  constructor(e = !0, r = ll) {
    this.weakness = e, this.makeData = r;
  }
  lookup(...e) {
    return this.lookupArray(e);
  }
  lookupArray(e) {
    let r = this;
    return fl.call(e, (n) => r = r.getChildTrie(n)), dl.call(r, "data") ? r.data : r.data = this.makeData(hl.call(e));
  }
  peek(...e) {
    return this.peekArray(e);
  }
  peekArray(e) {
    let r = this;
    for (let n = 0, i = e.length; r && n < i; ++n) {
      const o = this.weakness && eo(e[n]) ? r.weak : r.strong;
      r = o && o.get(e[n]);
    }
    return r && r.data;
  }
  getChildTrie(e) {
    const r = this.weakness && eo(e) ? this.weak || (this.weak = /* @__PURE__ */ new WeakMap()) : this.strong || (this.strong = /* @__PURE__ */ new Map());
    let n = r.get(e);
    return n || r.set(e, n = new _t(this.weakness, this.makeData)), n;
  }
}
function eo(t) {
  switch (typeof t) {
    case "object":
      if (t === null)
        break;
    case "function":
      return !0;
  }
  return !1;
}
var ve = Object.prototype.hasOwnProperty;
function Pt(t) {
  return t == null;
}
function Pa(t, e) {
  var r = t.__typename, n = t.id, i = t._id;
  if (typeof r == "string" && (e && (e.keyObject = Pt(n) ? Pt(i) ? void 0 : { _id: i } : { id: n }), Pt(n) && !Pt(i) && (n = i), !Pt(n)))
    return "".concat(r, ":").concat(typeof n == "number" || typeof n == "string" ? n : JSON.stringify(n));
}
var xa = {
  dataIdFromObject: Pa,
  addTypename: !0,
  resultCaching: !0,
  canonizeResults: !1
};
function pl(t) {
  return Or(xa, t);
}
function Ia(t) {
  var e = t.canonizeResults;
  return e === void 0 ? xa.canonizeResults : e;
}
function yl(t, e) {
  return Z(e) ? t.get(e.__ref, "__typename") : e && e.__typename;
}
var Na = /^[_a-z][_0-9a-z]*/i;
function Ye(t) {
  var e = t.match(Na);
  return e ? e[0] : t;
}
function bn(t, e, r) {
  return ae(e) ? le(e) ? e.every(function(n) {
    return bn(t, n, r);
  }) : t.selections.every(function(n) {
    if (rt(n) && br(n, r)) {
      var i = tt(n);
      return ve.call(e, i) && (!n.selectionSet || bn(n.selectionSet, e[i], r));
    }
    return !0;
  }) : !1;
}
function lt(t) {
  return ae(t) && !Z(t) && !le(t);
}
function vl() {
  return new He();
}
function Fa(t, e) {
  var r = Bn(Wn(t));
  return {
    fragmentMap: r,
    lookupFragment: function(n) {
      var i = r[n];
      return !i && e && (i = e.lookup(n)), i || null;
    }
  };
}
var rr = /* @__PURE__ */ Object.create(null), Qr = function() {
  return rr;
}, to = /* @__PURE__ */ Object.create(null), Lt = function() {
  function t(e, r) {
    var n = this;
    this.policies = e, this.group = r, this.data = /* @__PURE__ */ Object.create(null), this.rootIds = /* @__PURE__ */ Object.create(null), this.refs = /* @__PURE__ */ Object.create(null), this.getFieldValue = function(i, o) {
      return fn(Z(i) ? n.get(i.__ref, o) : i && i[o]);
    }, this.canRead = function(i) {
      return Z(i) ? n.has(i.__ref) : typeof i == "object";
    }, this.toReference = function(i, o) {
      if (typeof i == "string")
        return ht(i);
      if (Z(i))
        return i;
      var a = n.policies.identify(i)[0];
      if (a) {
        var s = ht(a);
        return o && n.merge(a, i), s;
      }
    };
  }
  return t.prototype.toObject = function() {
    return E({}, this.data);
  }, t.prototype.has = function(e) {
    return this.lookup(e, !0) !== void 0;
  }, t.prototype.get = function(e, r) {
    if (this.group.depend(e, r), ve.call(this.data, e)) {
      var n = this.data[e];
      if (n && ve.call(n, r))
        return n[r];
    }
    if (r === "__typename" && ve.call(this.policies.rootTypenamesById, e))
      return this.policies.rootTypenamesById[e];
    if (this instanceof Qe)
      return this.parent.get(e, r);
  }, t.prototype.lookup = function(e, r) {
    if (r && this.group.depend(e, "__exists"), ve.call(this.data, e))
      return this.data[e];
    if (this instanceof Qe)
      return this.parent.lookup(e, r);
    if (this.policies.rootTypenamesById[e])
      return /* @__PURE__ */ Object.create(null);
  }, t.prototype.merge = function(e, r) {
    var n = this, i;
    Z(e) && (e = e.__ref), Z(r) && (r = r.__ref);
    var o = typeof e == "string" ? this.lookup(i = e) : e, a = typeof r == "string" ? this.lookup(i = r) : r;
    if (a) {
      __DEV__ ? k(typeof i == "string", "store.merge expects a string ID") : k(typeof i == "string", 1);
      var s = new He(gl).merge(o, a);
      if (this.data[i] = s, s !== o && (delete this.refs[i], this.group.caching)) {
        var u = /* @__PURE__ */ Object.create(null);
        o || (u.__exists = 1), Object.keys(a).forEach(function(c) {
          if (!o || o[c] !== s[c]) {
            u[c] = 1;
            var l = Ye(c);
            l !== c && !n.policies.hasKeyArgs(s.__typename, l) && (u[l] = 1), s[c] === void 0 && !(n instanceof Qe) && delete s[c];
          }
        }), u.__typename && !(o && o.__typename) && this.policies.rootTypenamesById[i] === s.__typename && delete u.__typename, Object.keys(u).forEach(function(c) {
          return n.group.dirty(i, c);
        });
      }
    }
  }, t.prototype.modify = function(e, r) {
    var n = this, i = this.lookup(e);
    if (i) {
      var o = /* @__PURE__ */ Object.create(null), a = !1, s = !0, u = {
        DELETE: rr,
        INVALIDATE: to,
        isReference: Z,
        toReference: this.toReference,
        canRead: this.canRead,
        readField: function(c, l) {
          return n.policies.readField(typeof c == "string" ? {
            fieldName: c,
            from: l || ht(e)
          } : c, { store: n });
        }
      };
      if (Object.keys(i).forEach(function(c) {
        var l = Ye(c), f = i[c];
        if (f !== void 0) {
          var h = typeof r == "function" ? r : r[c] || r[l];
          if (h) {
            var d = h === Qr ? rr : h(fn(f), E(E({}, u), { fieldName: l, storeFieldName: c, storage: n.getStorage(e, c) }));
            d === to ? n.group.dirty(e, c) : (d === rr && (d = void 0), d !== f && (o[c] = d, a = !0, f = d));
          }
          f !== void 0 && (s = !1);
        }
      }), a)
        return this.merge(e, o), s && (this instanceof Qe ? this.data[e] = void 0 : delete this.data[e], this.group.dirty(e, "__exists")), !0;
    }
    return !1;
  }, t.prototype.delete = function(e, r, n) {
    var i, o = this.lookup(e);
    if (o) {
      var a = this.getFieldValue(o, "__typename"), s = r && n ? this.policies.getStoreFieldName({ typename: a, fieldName: r, args: n }) : r;
      return this.modify(e, s ? (i = {}, i[s] = Qr, i) : Qr);
    }
    return !1;
  }, t.prototype.evict = function(e, r) {
    var n = !1;
    return e.id && (ve.call(this.data, e.id) && (n = this.delete(e.id, e.fieldName, e.args)), this instanceof Qe && this !== r && (n = this.parent.evict(e, r) || n), (e.fieldName || n) && this.group.dirty(e.id, e.fieldName || "__exists")), n;
  }, t.prototype.clear = function() {
    this.replace(null);
  }, t.prototype.extract = function() {
    var e = this, r = this.toObject(), n = [];
    return this.getRootIdSet().forEach(function(i) {
      ve.call(e.policies.rootTypenamesById, i) || n.push(i);
    }), n.length && (r.__META = { extraRootIds: n.sort() }), r;
  }, t.prototype.replace = function(e) {
    var r = this;
    if (Object.keys(this.data).forEach(function(o) {
      e && ve.call(e, o) || r.delete(o);
    }), e) {
      var n = e.__META, i = et(e, ["__META"]);
      Object.keys(i).forEach(function(o) {
        r.merge(o, i[o]);
      }), n && n.extraRootIds.forEach(this.retain, this);
    }
  }, t.prototype.retain = function(e) {
    return this.rootIds[e] = (this.rootIds[e] || 0) + 1;
  }, t.prototype.release = function(e) {
    if (this.rootIds[e] > 0) {
      var r = --this.rootIds[e];
      return r || delete this.rootIds[e], r;
    }
    return 0;
  }, t.prototype.getRootIdSet = function(e) {
    return e === void 0 && (e = /* @__PURE__ */ new Set()), Object.keys(this.rootIds).forEach(e.add, e), this instanceof Qe ? this.parent.getRootIdSet(e) : Object.keys(this.policies.rootTypenamesById).forEach(e.add, e), e;
  }, t.prototype.gc = function() {
    var e = this, r = this.getRootIdSet(), n = this.toObject();
    r.forEach(function(a) {
      ve.call(n, a) && (Object.keys(e.findChildRefIds(a)).forEach(r.add, r), delete n[a]);
    });
    var i = Object.keys(n);
    if (i.length) {
      for (var o = this; o instanceof Qe; )
        o = o.parent;
      i.forEach(function(a) {
        return o.delete(a);
      });
    }
    return i;
  }, t.prototype.findChildRefIds = function(e) {
    if (!ve.call(this.refs, e)) {
      var r = this.refs[e] = /* @__PURE__ */ Object.create(null), n = this.data[e];
      if (!n)
        return r;
      var i = /* @__PURE__ */ new Set([n]);
      i.forEach(function(o) {
        Z(o) && (r[o.__ref] = !0), ae(o) && Object.keys(o).forEach(function(a) {
          var s = o[a];
          ae(s) && i.add(s);
        });
      });
    }
    return this.refs[e];
  }, t.prototype.makeCacheKey = function() {
    return this.group.keyMaker.lookupArray(arguments);
  }, t;
}(), Ma = function() {
  function t(e, r) {
    r === void 0 && (r = null), this.caching = e, this.parent = r, this.d = null, this.resetCaching();
  }
  return t.prototype.resetCaching = function() {
    this.d = this.caching ? ka() : null, this.keyMaker = new _t(ot);
  }, t.prototype.depend = function(e, r) {
    if (this.d) {
      this.d(Br(e, r));
      var n = Ye(r);
      n !== r && this.d(Br(e, n)), this.parent && this.parent.depend(e, r);
    }
  }, t.prototype.dirty = function(e, r) {
    this.d && this.d.dirty(Br(e, r), r === "__exists" ? "forget" : "setDirty");
  }, t;
}();
function Br(t, e) {
  return e + "#" + t;
}
function ro(t, e) {
  Nt(t) && t.group.depend(e, "__exists");
}
(function(t) {
  var e = function(r) {
    Pe(n, r);
    function n(i) {
      var o = i.policies, a = i.resultCaching, s = a === void 0 ? !0 : a, u = i.seed, c = r.call(this, o, new Ma(s)) || this;
      return c.stump = new ml(c), c.storageTrie = new _t(ot), u && c.replace(u), c;
    }
    return n.prototype.addLayer = function(i, o) {
      return this.stump.addLayer(i, o);
    }, n.prototype.removeLayer = function() {
      return this;
    }, n.prototype.getStorage = function() {
      return this.storageTrie.lookupArray(arguments);
    }, n;
  }(t);
  t.Root = e;
})(Lt || (Lt = {}));
var Qe = function(t) {
  Pe(e, t);
  function e(r, n, i, o) {
    var a = t.call(this, n.policies, o) || this;
    return a.id = r, a.parent = n, a.replay = i, a.group = o, i(a), a;
  }
  return e.prototype.addLayer = function(r, n) {
    return new e(r, this, n, this.group);
  }, e.prototype.removeLayer = function(r) {
    var n = this, i = this.parent.removeLayer(r);
    return r === this.id ? (this.group.caching && Object.keys(this.data).forEach(function(o) {
      var a = n.data[o], s = i.lookup(o);
      s ? a ? a !== s && Object.keys(a).forEach(function(u) {
        pe(a[u], s[u]) || n.group.dirty(o, u);
      }) : (n.group.dirty(o, "__exists"), Object.keys(s).forEach(function(u) {
        n.group.dirty(o, u);
      })) : n.delete(o);
    }), i) : i === this.parent ? this : i.addLayer(this.id, this.replay);
  }, e.prototype.toObject = function() {
    return E(E({}, this.parent.toObject()), this.data);
  }, e.prototype.findChildRefIds = function(r) {
    var n = this.parent.findChildRefIds(r);
    return ve.call(this.data, r) ? E(E({}, n), t.prototype.findChildRefIds.call(this, r)) : n;
  }, e.prototype.getStorage = function() {
    for (var r = this.parent; r.parent; )
      r = r.parent;
    return r.getStorage.apply(r, arguments);
  }, e;
}(Lt), ml = function(t) {
  Pe(e, t);
  function e(r) {
    return t.call(this, "EntityStore.Stump", r, function() {
    }, new Ma(r.group.caching, r.group)) || this;
  }
  return e.prototype.removeLayer = function() {
    return this;
  }, e.prototype.merge = function() {
    return this.parent.merge.apply(this.parent, arguments);
  }, e;
}(Qe);
function gl(t, e, r) {
  var n = t[r], i = e[r];
  return pe(n, i) ? n : i;
}
function Nt(t) {
  return !!(t instanceof Lt && t.group.caching);
}
function bl(t) {
  return ae(t) ? le(t) ? t.slice(0) : E({ __proto__: Object.getPrototypeOf(t) }, t) : t;
}
var En = function() {
  function t() {
    this.known = new (eu ? WeakSet : Set)(), this.pool = new _t(ot), this.passes = /* @__PURE__ */ new WeakMap(), this.keysByJSON = /* @__PURE__ */ new Map(), this.empty = this.admit({});
  }
  return t.prototype.isKnown = function(e) {
    return ae(e) && this.known.has(e);
  }, t.prototype.pass = function(e) {
    if (ae(e)) {
      var r = bl(e);
      return this.passes.set(r, e), r;
    }
    return e;
  }, t.prototype.admit = function(e) {
    var r = this;
    if (ae(e)) {
      var n = this.passes.get(e);
      if (n)
        return n;
      var i = Object.getPrototypeOf(e);
      switch (i) {
        case Array.prototype: {
          if (this.known.has(e))
            return e;
          var o = e.map(this.admit, this), a = this.pool.lookupArray(o);
          return a.array || (this.known.add(a.array = o), __DEV__ && Object.freeze(o)), a.array;
        }
        case null:
        case Object.prototype: {
          if (this.known.has(e))
            return e;
          var s = Object.getPrototypeOf(e), u = [s], c = this.sortedKeys(e);
          u.push(c.json);
          var l = u.length;
          c.sorted.forEach(function(d) {
            u.push(r.admit(e[d]));
          });
          var a = this.pool.lookupArray(u);
          if (!a.object) {
            var f = a.object = Object.create(s);
            this.known.add(f), c.sorted.forEach(function(d, p) {
              f[d] = u[l + p];
            }), __DEV__ && Object.freeze(f);
          }
          return a.object;
        }
      }
    }
    return e;
  }, t.prototype.sortedKeys = function(e) {
    var r = Object.keys(e), n = this.pool.lookupArray(r);
    if (!n.keys) {
      r.sort();
      var i = JSON.stringify(r);
      (n.keys = this.keysByJSON.get(i)) || this.keysByJSON.set(i, n.keys = { sorted: r, json: i });
    }
    return n.keys;
  }, t;
}(), Ze = Object.assign(function(t) {
  if (ae(t)) {
    wn === void 0 && no();
    var e = wn.admit(t), r = _n.get(e);
    return r === void 0 && _n.set(e, r = JSON.stringify(e)), r;
  }
  return JSON.stringify(t);
}, {
  reset: no
}), wn, _n;
function no() {
  wn = new En(), _n = new (ot ? WeakMap : Map)();
}
function io(t) {
  return [
    t.selectionSet,
    t.objectOrReference,
    t.context,
    t.context.canonizeResults
  ];
}
var El = function() {
  function t(e) {
    var r = this;
    this.knownResults = new (ot ? WeakMap : Map)(), this.config = Or(e, {
      addTypename: e.addTypename !== !1,
      canonizeResults: Ia(e)
    }), this.canon = e.canon || new En(), this.executeSelectionSet = hr(function(n) {
      var i, o = n.context.canonizeResults, a = io(n);
      a[3] = !o;
      var s = (i = r.executeSelectionSet).peek.apply(i, a);
      return s ? o ? E(E({}, s), { result: r.canon.admit(s.result) }) : s : (ro(n.context.store, n.enclosingRef.__ref), r.execSelectionSetImpl(n));
    }, {
      max: this.config.resultCacheMaxSize,
      keyArgs: io,
      makeCacheKey: function(n, i, o, a) {
        if (Nt(o.store))
          return o.store.makeCacheKey(n, Z(i) ? i.__ref : i, o.varString, a);
      }
    }), this.executeSubSelectedArray = hr(function(n) {
      return ro(n.context.store, n.enclosingRef.__ref), r.execSubSelectedArrayImpl(n);
    }, {
      max: this.config.resultCacheMaxSize,
      makeCacheKey: function(n) {
        var i = n.field, o = n.array, a = n.context;
        if (Nt(a.store))
          return a.store.makeCacheKey(i, o, a.varString);
      }
    });
  }
  return t.prototype.resetCanon = function() {
    this.canon = new En();
  }, t.prototype.diffQueryAgainstStore = function(e) {
    var r = e.store, n = e.query, i = e.rootId, o = i === void 0 ? "ROOT_QUERY" : i, a = e.variables, s = e.returnPartialData, u = s === void 0 ? !0 : s, c = e.canonizeResults, l = c === void 0 ? this.config.canonizeResults : c, f = this.config.cache.policies;
    a = E(E({}, Hn(aa(n))), a);
    var h = ht(o), d = this.executeSelectionSet({
      selectionSet: _r(n).selectionSet,
      objectOrReference: h,
      enclosingRef: h,
      context: E({ store: r, query: n, policies: f, variables: a, varString: Ze(a), canonizeResults: l }, Fa(n, this.config.fragments))
    }), p;
    if (d.missing && (p = [new Aa(wl(d.missing), d.missing, n, a)], !u))
      throw p[0];
    return {
      result: d.result,
      complete: !p,
      missing: p
    };
  }, t.prototype.isFresh = function(e, r, n, i) {
    if (Nt(i.store) && this.knownResults.get(e) === n) {
      var o = this.executeSelectionSet.peek(n, r, i, this.canon.isKnown(e));
      if (o && e === o.result)
        return !0;
    }
    return !1;
  }, t.prototype.execSelectionSetImpl = function(e) {
    var r = this, n = e.selectionSet, i = e.objectOrReference, o = e.enclosingRef, a = e.context;
    if (Z(i) && !a.policies.rootTypenamesById[i.__ref] && !a.store.has(i.__ref))
      return {
        result: this.canon.empty,
        missing: "Dangling reference to missing ".concat(i.__ref, " object")
      };
    var s = a.variables, u = a.policies, c = a.store, l = c.getFieldValue(i, "__typename"), f = [], h, d = new He();
    this.config.addTypename && typeof l == "string" && !u.rootIdsByTypename[l] && f.push({ __typename: l });
    function p(g, _) {
      var b;
      return g.missing && (h = d.merge(h, (b = {}, b[_] = g.missing, b))), g.result;
    }
    var v = new Set(n.selections);
    v.forEach(function(g) {
      var _, b;
      if (br(g, s))
        if (rt(g)) {
          var A = u.readField({
            fieldName: g.name.value,
            field: g,
            variables: a.variables,
            from: i
          }, a), P = tt(g);
          A === void 0 ? Gn.added(g) || (h = d.merge(h, (_ = {}, _[P] = "Can't find field '".concat(g.name.value, "' on ").concat(Z(i) ? i.__ref + " object" : "object " + JSON.stringify(i, null, 2)), _))) : le(A) ? A = p(r.executeSubSelectedArray({
            field: g,
            array: A,
            enclosingRef: o,
            context: a
          }), P) : g.selectionSet ? A != null && (A = p(r.executeSelectionSet({
            selectionSet: g.selectionSet,
            objectOrReference: A,
            enclosingRef: Z(A) ? A : o,
            context: a
          }), P)) : a.canonizeResults && (A = r.canon.pass(A)), A !== void 0 && f.push((b = {}, b[P] = A, b));
        } else {
          var F = Un(g, a.lookupFragment);
          if (!F && g.kind === me.FRAGMENT_SPREAD)
            throw __DEV__ ? new G("No fragment named ".concat(g.name.value)) : new G(5);
          F && u.fragmentMatches(F, l) && F.selectionSet.selections.forEach(v.add, v);
        }
    });
    var y = Yn(f), S = { result: y, missing: h }, m = a.canonizeResults ? this.canon.admit(S) : fn(S);
    return m.result && this.knownResults.set(m.result, n), m;
  }, t.prototype.execSubSelectedArrayImpl = function(e) {
    var r = this, n = e.field, i = e.array, o = e.enclosingRef, a = e.context, s, u = new He();
    function c(l, f) {
      var h;
      return l.missing && (s = u.merge(s, (h = {}, h[f] = l.missing, h))), l.result;
    }
    return n.selectionSet && (i = i.filter(a.store.canRead)), i = i.map(function(l, f) {
      return l === null ? null : le(l) ? c(r.executeSubSelectedArray({
        field: n,
        array: l,
        enclosingRef: o,
        context: a
      }), f) : n.selectionSet ? c(r.executeSelectionSet({
        selectionSet: n.selectionSet,
        objectOrReference: l,
        enclosingRef: Z(l) ? l : o,
        context: a
      }), f) : (__DEV__ && _l(a.store, n, l), l);
    }), {
      result: a.canonizeResults ? this.canon.admit(i) : i,
      missing: s
    };
  }, t;
}();
function wl(t) {
  try {
    JSON.stringify(t, function(e, r) {
      if (typeof r == "string")
        throw r;
      return r;
    });
  } catch (e) {
    return e;
  }
}
function _l(t, e, r) {
  if (!e.selectionSet) {
    var n = /* @__PURE__ */ new Set([r]);
    n.forEach(function(i) {
      ae(i) && (__DEV__ ? k(!Z(i), "Missing selection set for object of type ".concat(yl(t, i), " returned for query field ").concat(e.name.value)) : k(!Z(i), 6), Object.values(i).forEach(n.add, n));
    });
  }
}
var ii = new ba(), oo = /* @__PURE__ */ new WeakMap();
function Ft(t) {
  var e = oo.get(t);
  return e || oo.set(t, e = {
    vars: /* @__PURE__ */ new Set(),
    dep: ka()
  }), e;
}
function ao(t) {
  Ft(t).vars.forEach(function(e) {
    return e.forgetCache(t);
  });
}
function Sl(t) {
  Ft(t).vars.forEach(function(e) {
    return e.attachCache(t);
  });
}
function Ol(t) {
  var e = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set(), n = function(o) {
    if (arguments.length > 0) {
      if (t !== o) {
        t = o, e.forEach(function(u) {
          Ft(u).dep.dirty(n), Tl(u);
        });
        var a = Array.from(r);
        r.clear(), a.forEach(function(u) {
          return u(t);
        });
      }
    } else {
      var s = ii.getValue();
      s && (i(s), Ft(s).dep(n));
    }
    return t;
  };
  n.onNextChange = function(o) {
    return r.add(o), function() {
      r.delete(o);
    };
  };
  var i = n.attachCache = function(o) {
    return e.add(o), Ft(o).vars.add(n), n;
  };
  return n.forgetCache = function(o) {
    return e.delete(o);
  }, n;
}
function Tl(t) {
  t.broadcastWatches && t.broadcastWatches();
}
var so = /* @__PURE__ */ Object.create(null);
function oi(t) {
  var e = JSON.stringify(t);
  return so[e] || (so[e] = /* @__PURE__ */ Object.create(null));
}
function co(t) {
  var e = oi(t);
  return e.keyFieldsFn || (e.keyFieldsFn = function(r, n) {
    var i = function(a, s) {
      return n.readField(s, a);
    }, o = n.keyObject = ai(t, function(a) {
      var s = pt(n.storeObject, a, i);
      return s === void 0 && r !== n.storeObject && ve.call(r, a[0]) && (s = pt(r, a, La)), __DEV__ ? k(s !== void 0, "Missing field '".concat(a.join("."), "' while extracting keyFields from ").concat(JSON.stringify(r))) : k(s !== void 0, 2), s;
    });
    return "".concat(n.typename, ":").concat(JSON.stringify(o));
  });
}
function uo(t) {
  var e = oi(t);
  return e.keyArgsFn || (e.keyArgsFn = function(r, n) {
    var i = n.field, o = n.variables, a = n.fieldName, s = ai(t, function(c) {
      var l = c[0], f = l.charAt(0);
      if (f === "@") {
        if (i && Fe(i.directives)) {
          var h = l.slice(1), d = i.directives.find(function(S) {
            return S.name.value === h;
          }), p = d && Er(d, o);
          return p && pt(p, c.slice(1));
        }
        return;
      }
      if (f === "$") {
        var v = l.slice(1);
        if (o && ve.call(o, v)) {
          var y = c.slice(0);
          return y[0] = v, pt(o, y);
        }
        return;
      }
      if (r)
        return pt(r, c);
    }), u = JSON.stringify(s);
    return (r || u !== "{}") && (a += ":" + u), a;
  });
}
function ai(t, e) {
  var r = new He();
  return ja(t).reduce(function(n, i) {
    var o, a = e(i);
    if (a !== void 0) {
      for (var s = i.length - 1; s >= 0; --s)
        a = (o = {}, o[i[s]] = a, o);
      n = r.merge(n, a);
    }
    return n;
  }, /* @__PURE__ */ Object.create(null));
}
function ja(t) {
  var e = oi(t);
  if (!e.paths) {
    var r = e.paths = [], n = [];
    t.forEach(function(i, o) {
      le(i) ? (ja(i).forEach(function(a) {
        return r.push(n.concat(a));
      }), n.length = 0) : (n.push(i), le(t[o + 1]) || (r.push(n.slice(0)), n.length = 0));
    });
  }
  return e.paths;
}
function La(t, e) {
  return t[e];
}
function pt(t, e, r) {
  return r = r || La, Va(e.reduce(function n(i, o) {
    return le(i) ? i.map(function(a) {
      return n(a, o);
    }) : i && r(i, o);
  }, t));
}
function Va(t) {
  return ae(t) ? le(t) ? t.map(Va) : ai(Object.keys(t).sort(), function(e) {
    return pt(t, e);
  }) : t;
}
zn.setStringify(Ze);
function Sn(t) {
  return t.args !== void 0 ? t.args : t.field ? Er(t.field, t.variables) : null;
}
var Rl = function() {
}, lo = function(t, e) {
  return e.fieldName;
}, fo = function(t, e, r) {
  var n = r.mergeObjects;
  return n(t, e);
}, ho = function(t, e) {
  return e;
}, Cl = function() {
  function t(e) {
    this.config = e, this.typePolicies = /* @__PURE__ */ Object.create(null), this.toBeAdded = /* @__PURE__ */ Object.create(null), this.supertypeMap = /* @__PURE__ */ new Map(), this.fuzzySubtypes = /* @__PURE__ */ new Map(), this.rootIdsByTypename = /* @__PURE__ */ Object.create(null), this.rootTypenamesById = /* @__PURE__ */ Object.create(null), this.usingPossibleTypes = !1, this.config = E({ dataIdFromObject: Pa }, e), this.cache = this.config.cache, this.setRootTypename("Query"), this.setRootTypename("Mutation"), this.setRootTypename("Subscription"), e.possibleTypes && this.addPossibleTypes(e.possibleTypes), e.typePolicies && this.addTypePolicies(e.typePolicies);
  }
  return t.prototype.identify = function(e, r) {
    var n, i = this, o = r && (r.typename || ((n = r.storeObject) === null || n === void 0 ? void 0 : n.__typename)) || e.__typename;
    if (o === this.rootTypenamesById.ROOT_QUERY)
      return ["ROOT_QUERY"];
    for (var a = r && r.storeObject || e, s = E(E({}, r), { typename: o, storeObject: a, readField: r && r.readField || function() {
      var h = si(arguments, a);
      return i.readField(h, {
        store: i.cache.data,
        variables: h.variables
      });
    } }), u, c = o && this.getTypePolicy(o), l = c && c.keyFn || this.config.dataIdFromObject; l; ) {
      var f = l(E(E({}, e), a), s);
      if (le(f))
        l = co(f);
      else {
        u = f;
        break;
      }
    }
    return u = u ? String(u) : void 0, s.keyObject ? [u, s.keyObject] : [u];
  }, t.prototype.addTypePolicies = function(e) {
    var r = this;
    Object.keys(e).forEach(function(n) {
      var i = e[n], o = i.queryType, a = i.mutationType, s = i.subscriptionType, u = et(i, ["queryType", "mutationType", "subscriptionType"]);
      o && r.setRootTypename("Query", n), a && r.setRootTypename("Mutation", n), s && r.setRootTypename("Subscription", n), ve.call(r.toBeAdded, n) ? r.toBeAdded[n].push(u) : r.toBeAdded[n] = [u];
    });
  }, t.prototype.updateTypePolicy = function(e, r) {
    var n = this, i = this.getTypePolicy(e), o = r.keyFields, a = r.fields;
    function s(u, c) {
      u.merge = typeof c == "function" ? c : c === !0 ? fo : c === !1 ? ho : u.merge;
    }
    s(i, r.merge), i.keyFn = o === !1 ? Rl : le(o) ? co(o) : typeof o == "function" ? o : i.keyFn, a && Object.keys(a).forEach(function(u) {
      var c = n.getFieldPolicy(e, u, !0), l = a[u];
      if (typeof l == "function")
        c.read = l;
      else {
        var f = l.keyArgs, h = l.read, d = l.merge;
        c.keyFn = f === !1 ? lo : le(f) ? uo(f) : typeof f == "function" ? f : c.keyFn, typeof h == "function" && (c.read = h), s(c, d);
      }
      c.read && c.merge && (c.keyFn = c.keyFn || lo);
    });
  }, t.prototype.setRootTypename = function(e, r) {
    r === void 0 && (r = e);
    var n = "ROOT_" + e.toUpperCase(), i = this.rootTypenamesById[n];
    r !== i && (__DEV__ ? k(!i || i === e, "Cannot change root ".concat(e, " __typename more than once")) : k(!i || i === e, 3), i && delete this.rootIdsByTypename[i], this.rootIdsByTypename[r] = n, this.rootTypenamesById[n] = r);
  }, t.prototype.addPossibleTypes = function(e) {
    var r = this;
    this.usingPossibleTypes = !0, Object.keys(e).forEach(function(n) {
      r.getSupertypeSet(n, !0), e[n].forEach(function(i) {
        r.getSupertypeSet(i, !0).add(n);
        var o = i.match(Na);
        (!o || o[0] !== i) && r.fuzzySubtypes.set(i, new RegExp(i));
      });
    });
  }, t.prototype.getTypePolicy = function(e) {
    var r = this;
    if (!ve.call(this.typePolicies, e)) {
      var n = this.typePolicies[e] = /* @__PURE__ */ Object.create(null);
      n.fields = /* @__PURE__ */ Object.create(null);
      var i = this.supertypeMap.get(e);
      i && i.size && i.forEach(function(a) {
        var s = r.getTypePolicy(a), u = s.fields, c = et(s, ["fields"]);
        Object.assign(n, c), Object.assign(n.fields, u);
      });
    }
    var o = this.toBeAdded[e];
    return o && o.length && o.splice(0).forEach(function(a) {
      r.updateTypePolicy(e, a);
    }), this.typePolicies[e];
  }, t.prototype.getFieldPolicy = function(e, r, n) {
    if (e) {
      var i = this.getTypePolicy(e).fields;
      return i[r] || n && (i[r] = /* @__PURE__ */ Object.create(null));
    }
  }, t.prototype.getSupertypeSet = function(e, r) {
    var n = this.supertypeMap.get(e);
    return !n && r && this.supertypeMap.set(e, n = /* @__PURE__ */ new Set()), n;
  }, t.prototype.fragmentMatches = function(e, r, n, i) {
    var o = this;
    if (!e.typeCondition)
      return !0;
    if (!r)
      return !1;
    var a = e.typeCondition.name.value;
    if (r === a)
      return !0;
    if (this.usingPossibleTypes && this.supertypeMap.has(a))
      for (var s = this.getSupertypeSet(r, !0), u = [s], c = function(p) {
        var v = o.getSupertypeSet(p, !1);
        v && v.size && u.indexOf(v) < 0 && u.push(v);
      }, l = !!(n && this.fuzzySubtypes.size), f = !1, h = 0; h < u.length; ++h) {
        var d = u[h];
        if (d.has(a))
          return s.has(a) || (f && __DEV__ && k.warn("Inferring subtype ".concat(r, " of supertype ").concat(a)), s.add(a)), !0;
        d.forEach(c), l && h === u.length - 1 && bn(e.selectionSet, n, i) && (l = !1, f = !0, this.fuzzySubtypes.forEach(function(p, v) {
          var y = r.match(p);
          y && y[0] === r && c(v);
        }));
      }
    return !1;
  }, t.prototype.hasKeyArgs = function(e, r) {
    var n = this.getFieldPolicy(e, r, !1);
    return !!(n && n.keyFn);
  }, t.prototype.getStoreFieldName = function(e) {
    var r = e.typename, n = e.fieldName, i = this.getFieldPolicy(r, n, !1), o, a = i && i.keyFn;
    if (a && r)
      for (var s = {
        typename: r,
        fieldName: n,
        field: e.field || null,
        variables: e.variables
      }, u = Sn(e); a; ) {
        var c = a(u, s);
        if (le(c))
          a = uo(c);
        else {
          o = c || n;
          break;
        }
      }
    return o === void 0 && (o = e.field ? Dc(e.field, e.variables) : zn(n, Sn(e))), o === !1 ? n : n === Ye(o) ? o : n + ":" + o;
  }, t.prototype.readField = function(e, r) {
    var n = e.from;
    if (n) {
      var i = e.field || e.fieldName;
      if (i) {
        if (e.typename === void 0) {
          var o = r.store.getFieldValue(n, "__typename");
          o && (e.typename = o);
        }
        var a = this.getStoreFieldName(e), s = Ye(a), u = r.store.getFieldValue(n, a), c = this.getFieldPolicy(e.typename, s, !1), l = c && c.read;
        if (l) {
          var f = po(this, n, e, r, r.store.getStorage(Z(n) ? n.__ref : n, a));
          return ii.withValue(this.cache, l, [u, f]);
        }
        return u;
      }
    }
  }, t.prototype.getReadFunction = function(e, r) {
    var n = this.getFieldPolicy(e, r, !1);
    return n && n.read;
  }, t.prototype.getMergeFunction = function(e, r, n) {
    var i = this.getFieldPolicy(e, r, !1), o = i && i.merge;
    return !o && n && (i = this.getTypePolicy(n), o = i && i.merge), o;
  }, t.prototype.runMergeFunction = function(e, r, n, i, o) {
    var a = n.field, s = n.typename, u = n.merge;
    return u === fo ? qa(i.store)(e, r) : u === ho ? r : (i.overwrite && (e = void 0), u(e, r, po(this, void 0, { typename: s, fieldName: a.name.value, field: a, variables: i.variables }, i, o || /* @__PURE__ */ Object.create(null))));
  }, t;
}();
function po(t, e, r, n, i) {
  var o = t.getStoreFieldName(r), a = Ye(o), s = r.variables || n.variables, u = n.store, c = u.toReference, l = u.canRead;
  return {
    args: Sn(r),
    field: r.field || null,
    fieldName: a,
    storeFieldName: o,
    variables: s,
    isReference: Z,
    toReference: c,
    storage: i,
    cache: t.cache,
    canRead: l,
    readField: function() {
      return t.readField(si(arguments, e, s), n);
    },
    mergeObjects: qa(n.store)
  };
}
function si(t, e, r) {
  var n = t[0], i = t[1], o = t.length, a;
  return typeof n == "string" ? a = {
    fieldName: n,
    from: o > 1 ? i : e
  } : (a = E({}, n), ve.call(a, "from") || (a.from = e)), __DEV__ && a.from === void 0 && __DEV__ && k.warn("Undefined 'from' passed to readField with arguments ".concat(iu(Array.from(t)))), a.variables === void 0 && (a.variables = r), a;
}
function qa(t) {
  return function(r, n) {
    if (le(r) || le(n))
      throw __DEV__ ? new G("Cannot automatically merge arrays") : new G(4);
    if (ae(r) && ae(n)) {
      var i = t.getFieldValue(r, "__typename"), o = t.getFieldValue(n, "__typename"), a = i && o && i !== o;
      if (a)
        return n;
      if (Z(r) && lt(n))
        return t.merge(r.__ref, n), r;
      if (lt(r) && Z(n))
        return t.merge(r, n.__ref), n;
      if (lt(r) && lt(n))
        return E(E({}, r), n);
    }
    return n;
  };
}
function Ur(t, e, r) {
  var n = "".concat(e).concat(r), i = t.flavors.get(n);
  return i || t.flavors.set(n, i = t.clientOnly === e && t.deferred === r ? t : E(E({}, t), { clientOnly: e, deferred: r })), i;
}
var kl = function() {
  function t(e, r, n) {
    this.cache = e, this.reader = r, this.fragments = n;
  }
  return t.prototype.writeToStore = function(e, r) {
    var n = this, i = r.query, o = r.result, a = r.dataId, s = r.variables, u = r.overwrite, c = Bt(i), l = vl();
    s = E(E({}, Hn(c)), s);
    var f = E(E({ store: e, written: /* @__PURE__ */ Object.create(null), merge: function(d, p) {
      return l.merge(d, p);
    }, variables: s, varString: Ze(s) }, Fa(i, this.fragments)), { overwrite: !!u, incomingById: /* @__PURE__ */ new Map(), clientOnly: !1, deferred: !1, flavors: /* @__PURE__ */ new Map() }), h = this.processSelectionSet({
      result: o || /* @__PURE__ */ Object.create(null),
      dataId: a,
      selectionSet: c.selectionSet,
      mergeTree: { map: /* @__PURE__ */ new Map() },
      context: f
    });
    if (!Z(h))
      throw __DEV__ ? new G("Could not identify object ".concat(JSON.stringify(o))) : new G(7);
    return f.incomingById.forEach(function(d, p) {
      var v = d.storeObject, y = d.mergeTree, S = d.fieldNodeSet, m = ht(p);
      if (y && y.map.size) {
        var g = n.applyMerges(y, m, v, f);
        if (Z(g))
          return;
        v = g;
      }
      if (__DEV__ && !f.overwrite) {
        var _ = /* @__PURE__ */ Object.create(null);
        S.forEach(function(P) {
          P.selectionSet && (_[P.name.value] = !0);
        });
        var b = function(P) {
          return _[Ye(P)] === !0;
        }, A = function(P) {
          var F = y && y.map.get(P);
          return !!(F && F.info && F.info.merge);
        };
        Object.keys(v).forEach(function(P) {
          b(P) && !A(P) && Dl(m, v, P, f.store);
        });
      }
      e.merge(p, v);
    }), e.retain(h.__ref), h;
  }, t.prototype.processSelectionSet = function(e) {
    var r = this, n = e.dataId, i = e.result, o = e.selectionSet, a = e.context, s = e.mergeTree, u = this.cache.policies, c = /* @__PURE__ */ Object.create(null), l = n && u.rootTypenamesById[n] || an(i, o, a.fragmentMap) || n && a.store.get(n, "__typename");
    typeof l == "string" && (c.__typename = l);
    var f = function() {
      var g = si(arguments, c, a.variables);
      if (Z(g.from)) {
        var _ = a.incomingById.get(g.from.__ref);
        if (_) {
          var b = u.readField(E(E({}, g), { from: _.storeObject }), a);
          if (b !== void 0)
            return b;
        }
      }
      return u.readField(g, a);
    }, h = /* @__PURE__ */ new Set();
    this.flattenFields(o, i, a, l).forEach(function(g, _) {
      var b, A = tt(_), P = i[A];
      if (h.add(_), P !== void 0) {
        var F = u.getStoreFieldName({
          typename: l,
          fieldName: _.name.value,
          field: _,
          variables: g.variables
        }), V = yo(s, F), M = r.processFieldValue(P, _, _.selectionSet ? Ur(g, !1, !1) : g, V), re = void 0;
        _.selectionSet && (Z(M) || lt(M)) && (re = f("__typename", M));
        var ee = u.getMergeFunction(l, _.name.value, re);
        ee ? V.info = {
          field: _,
          typename: l,
          merge: ee
        } : vo(s, F), c = g.merge(c, (b = {}, b[F] = M, b));
      } else
        __DEV__ && !g.clientOnly && !g.deferred && !Gn.added(_) && !u.getReadFunction(l, _.name.value) && __DEV__ && k.error("Missing field '".concat(tt(_), "' while writing result ").concat(JSON.stringify(i, null, 2)).substring(0, 1e3));
    });
    try {
      var d = u.identify(i, {
        typename: l,
        selectionSet: o,
        fragmentMap: a.fragmentMap,
        storeObject: c,
        readField: f
      }), p = d[0], v = d[1];
      n = n || p, v && (c = a.merge(c, v));
    } catch (g) {
      if (!n)
        throw g;
    }
    if (typeof n == "string") {
      var y = ht(n), S = a.written[n] || (a.written[n] = []);
      if (S.indexOf(o) >= 0 || (S.push(o), this.reader && this.reader.isFresh(i, y, o, a)))
        return y;
      var m = a.incomingById.get(n);
      return m ? (m.storeObject = a.merge(m.storeObject, c), m.mergeTree = On(m.mergeTree, s), h.forEach(function(g) {
        return m.fieldNodeSet.add(g);
      })) : a.incomingById.set(n, {
        storeObject: c,
        mergeTree: dr(s) ? void 0 : s,
        fieldNodeSet: h
      }), y;
    }
    return c;
  }, t.prototype.processFieldValue = function(e, r, n, i) {
    var o = this;
    return !r.selectionSet || e === null ? __DEV__ ? ha(e) : e : le(e) ? e.map(function(a, s) {
      var u = o.processFieldValue(a, r, n, yo(i, s));
      return vo(i, s), u;
    }) : this.processSelectionSet({
      result: e,
      selectionSet: r.selectionSet,
      context: n,
      mergeTree: i
    });
  }, t.prototype.flattenFields = function(e, r, n, i) {
    i === void 0 && (i = an(r, e, n.fragmentMap));
    var o = /* @__PURE__ */ new Map(), a = this.cache.policies, s = new _t(!1);
    return function u(c, l) {
      var f = s.lookup(c, l.clientOnly, l.deferred);
      f.visited || (f.visited = !0, c.selections.forEach(function(h) {
        if (br(h, n.variables)) {
          var d = l.clientOnly, p = l.deferred;
          if (!(d && p) && Fe(h.directives) && h.directives.forEach(function(S) {
            var m = S.name.value;
            if (m === "client" && (d = !0), m === "defer") {
              var g = Er(S, n.variables);
              (!g || g.if !== !1) && (p = !0);
            }
          }), rt(h)) {
            var v = o.get(h);
            v && (d = d && v.clientOnly, p = p && v.deferred), o.set(h, Ur(n, d, p));
          } else {
            var y = Un(h, n.lookupFragment);
            if (!y && h.kind === me.FRAGMENT_SPREAD)
              throw __DEV__ ? new G("No fragment named ".concat(h.name.value)) : new G(8);
            y && a.fragmentMatches(y, i, r, n.variables) && u(y.selectionSet, Ur(n, d, p));
          }
        }
      }));
    }(e, n), o;
  }, t.prototype.applyMerges = function(e, r, n, i, o) {
    var a, s = this;
    if (e.map.size && !Z(n)) {
      var u = !le(n) && (Z(r) || lt(r)) ? r : void 0, c = n;
      u && !o && (o = [Z(u) ? u.__ref : u]);
      var l, f = function(h, d) {
        return le(h) ? typeof d == "number" ? h[d] : void 0 : i.store.getFieldValue(h, String(d));
      };
      e.map.forEach(function(h, d) {
        var p = f(u, d), v = f(c, d);
        if (v !== void 0) {
          o && o.push(d);
          var y = s.applyMerges(h, p, v, i, o);
          y !== v && (l = l || /* @__PURE__ */ new Map(), l.set(d, y)), o && k(o.pop() === d);
        }
      }), l && (n = le(c) ? c.slice(0) : E({}, c), l.forEach(function(h, d) {
        n[d] = h;
      }));
    }
    return e.info ? this.cache.policies.runMergeFunction(r, n, e.info, i, o && (a = i.store).getStorage.apply(a, o)) : n;
  }, t;
}(), $a = [];
function yo(t, e) {
  var r = t.map;
  return r.has(e) || r.set(e, $a.pop() || { map: /* @__PURE__ */ new Map() }), r.get(e);
}
function On(t, e) {
  if (t === e || !e || dr(e))
    return t;
  if (!t || dr(t))
    return e;
  var r = t.info && e.info ? E(E({}, t.info), e.info) : t.info || e.info, n = t.map.size && e.map.size, i = n ? /* @__PURE__ */ new Map() : t.map.size ? t.map : e.map, o = { info: r, map: i };
  if (n) {
    var a = new Set(e.map.keys());
    t.map.forEach(function(s, u) {
      o.map.set(u, On(s, e.map.get(u))), a.delete(u);
    }), a.forEach(function(s) {
      o.map.set(s, On(e.map.get(s), t.map.get(s)));
    });
  }
  return o;
}
function dr(t) {
  return !t || !(t.info || t.map.size);
}
function vo(t, e) {
  var r = t.map, n = r.get(e);
  n && dr(n) && ($a.push(n), r.delete(e));
}
var mo = /* @__PURE__ */ new Set();
function Dl(t, e, r, n) {
  var i = function(f) {
    var h = n.getFieldValue(f, r);
    return typeof h == "object" && h;
  }, o = i(t);
  if (o) {
    var a = i(e);
    if (a && !Z(o) && !pe(o, a) && !Object.keys(o).every(function(f) {
      return n.getFieldValue(a, f) !== void 0;
    })) {
      var s = n.getFieldValue(t, "__typename") || n.getFieldValue(e, "__typename"), u = Ye(r), c = "".concat(s, ".").concat(u);
      if (!mo.has(c)) {
        mo.add(c);
        var l = [];
        !le(o) && !le(a) && [o, a].forEach(function(f) {
          var h = n.getFieldValue(f, "__typename");
          typeof h == "string" && !l.includes(h) && l.push(h);
        }), __DEV__ && k.warn("Cache data may be lost when replacing the ".concat(u, " field of a ").concat(s, ` object.

This could cause additional (usually avoidable) network requests to fetch data that were otherwise cached.

To address this problem (which is not a bug in Apollo Client), `).concat(l.length ? "either ensure all objects of type " + l.join(" and ") + " have an ID or a custom merge function, or " : "", "define a custom merge function for the ").concat(c, ` field, so InMemoryCache can safely merge these objects:

  existing: `).concat(JSON.stringify(o).slice(0, 1e3), `
  incoming: `).concat(JSON.stringify(a).slice(0, 1e3), `

For more information about these options, please refer to the documentation:

  * Ensuring entity objects have IDs: https://go.apollo.dev/c/generating-unique-identifiers
  * Defining custom merge functions: https://go.apollo.dev/c/merging-non-normalized-objects
`));
      }
    }
  }
}
var Al = function(t) {
  Pe(e, t);
  function e(r) {
    r === void 0 && (r = {});
    var n = t.call(this) || this;
    return n.watches = /* @__PURE__ */ new Set(), n.typenameDocumentCache = /* @__PURE__ */ new Map(), n.makeVar = Ol, n.txCount = 0, n.config = pl(r), n.addTypename = !!n.config.addTypename, n.policies = new Cl({
      cache: n,
      dataIdFromObject: n.config.dataIdFromObject,
      possibleTypes: n.config.possibleTypes,
      typePolicies: n.config.typePolicies
    }), n.init(), n;
  }
  return e.prototype.init = function() {
    var r = this.data = new Lt.Root({
      policies: this.policies,
      resultCaching: this.config.resultCaching
    });
    this.optimisticData = r.stump, this.resetResultCache();
  }, e.prototype.resetResultCache = function(r) {
    var n = this, i = this.storeReader, o = this.config.fragments;
    this.storeWriter = new kl(this, this.storeReader = new El({
      cache: this,
      addTypename: this.addTypename,
      resultCacheMaxSize: this.config.resultCacheMaxSize,
      canonizeResults: Ia(this.config),
      canon: r ? void 0 : i && i.canon,
      fragments: o
    }), o), this.maybeBroadcastWatch = hr(function(a, s) {
      return n.broadcastWatch(a, s);
    }, {
      max: this.config.resultCacheMaxSize,
      makeCacheKey: function(a) {
        var s = a.optimistic ? n.optimisticData : n.data;
        if (Nt(s)) {
          var u = a.optimistic, c = a.id, l = a.variables;
          return s.makeCacheKey(a.query, a.callback, Ze({ optimistic: u, id: c, variables: l }));
        }
      }
    }), (/* @__PURE__ */ new Set([
      this.data.group,
      this.optimisticData.group
    ])).forEach(function(a) {
      return a.resetCaching();
    });
  }, e.prototype.restore = function(r) {
    return this.init(), r && this.data.replace(r), this;
  }, e.prototype.extract = function(r) {
    return r === void 0 && (r = !1), (r ? this.optimisticData : this.data).extract();
  }, e.prototype.read = function(r) {
    var n = r.returnPartialData, i = n === void 0 ? !1 : n;
    try {
      return this.storeReader.diffQueryAgainstStore(E(E({}, r), { store: r.optimistic ? this.optimisticData : this.data, config: this.config, returnPartialData: i })).result || null;
    } catch (o) {
      if (o instanceof Aa)
        return null;
      throw o;
    }
  }, e.prototype.write = function(r) {
    try {
      return ++this.txCount, this.storeWriter.writeToStore(this.data, r);
    } finally {
      !--this.txCount && r.broadcast !== !1 && this.broadcastWatches();
    }
  }, e.prototype.modify = function(r) {
    if (ve.call(r, "id") && !r.id)
      return !1;
    var n = r.optimistic ? this.optimisticData : this.data;
    try {
      return ++this.txCount, n.modify(r.id || "ROOT_QUERY", r.fields);
    } finally {
      !--this.txCount && r.broadcast !== !1 && this.broadcastWatches();
    }
  }, e.prototype.diff = function(r) {
    return this.storeReader.diffQueryAgainstStore(E(E({}, r), { store: r.optimistic ? this.optimisticData : this.data, rootId: r.id || "ROOT_QUERY", config: this.config }));
  }, e.prototype.watch = function(r) {
    var n = this;
    return this.watches.size || Sl(this), this.watches.add(r), r.immediate && this.maybeBroadcastWatch(r), function() {
      n.watches.delete(r) && !n.watches.size && ao(n), n.maybeBroadcastWatch.forget(r);
    };
  }, e.prototype.gc = function(r) {
    Ze.reset();
    var n = this.optimisticData.gc();
    return r && !this.txCount && (r.resetResultCache ? this.resetResultCache(r.resetResultIdentities) : r.resetResultIdentities && this.storeReader.resetCanon()), n;
  }, e.prototype.retain = function(r, n) {
    return (n ? this.optimisticData : this.data).retain(r);
  }, e.prototype.release = function(r, n) {
    return (n ? this.optimisticData : this.data).release(r);
  }, e.prototype.identify = function(r) {
    if (Z(r))
      return r.__ref;
    try {
      return this.policies.identify(r)[0];
    } catch (n) {
      __DEV__ && k.warn(n);
    }
  }, e.prototype.evict = function(r) {
    if (!r.id) {
      if (ve.call(r, "id"))
        return !1;
      r = E(E({}, r), { id: "ROOT_QUERY" });
    }
    try {
      return ++this.txCount, this.optimisticData.evict(r, this.data);
    } finally {
      !--this.txCount && r.broadcast !== !1 && this.broadcastWatches();
    }
  }, e.prototype.reset = function(r) {
    var n = this;
    return this.init(), Ze.reset(), r && r.discardWatches ? (this.watches.forEach(function(i) {
      return n.maybeBroadcastWatch.forget(i);
    }), this.watches.clear(), ao(this)) : this.broadcastWatches(), Promise.resolve();
  }, e.prototype.removeOptimistic = function(r) {
    var n = this.optimisticData.removeLayer(r);
    n !== this.optimisticData && (this.optimisticData = n, this.broadcastWatches());
  }, e.prototype.batch = function(r) {
    var n = this, i = r.update, o = r.optimistic, a = o === void 0 ? !0 : o, s = r.removeOptimistic, u = r.onWatchUpdated, c, l = function(h) {
      var d = n, p = d.data, v = d.optimisticData;
      ++n.txCount, h && (n.data = n.optimisticData = h);
      try {
        return c = i(n);
      } finally {
        --n.txCount, n.data = p, n.optimisticData = v;
      }
    }, f = /* @__PURE__ */ new Set();
    return u && !this.txCount && this.broadcastWatches(E(E({}, r), { onWatchUpdated: function(h) {
      return f.add(h), !1;
    } })), typeof a == "string" ? this.optimisticData = this.optimisticData.addLayer(a, l) : a === !1 ? l(this.data) : l(), typeof s == "string" && (this.optimisticData = this.optimisticData.removeLayer(s)), u && f.size ? (this.broadcastWatches(E(E({}, r), { onWatchUpdated: function(h, d) {
      var p = u.call(this, h, d);
      return p !== !1 && f.delete(h), p;
    } })), f.size && f.forEach(function(h) {
      return n.maybeBroadcastWatch.dirty(h);
    })) : this.broadcastWatches(r), c;
  }, e.prototype.performTransaction = function(r, n) {
    return this.batch({
      update: r,
      optimistic: n || n !== null
    });
  }, e.prototype.transformDocument = function(r) {
    if (this.addTypename) {
      var n = this.typenameDocumentCache.get(r);
      return n || (n = Gn(r), this.typenameDocumentCache.set(r, n), this.typenameDocumentCache.set(n, n)), n;
    }
    return r;
  }, e.prototype.transformForLink = function(r) {
    var n = this.config.fragments;
    return n ? n.transform(r) : r;
  }, e.prototype.broadcastWatches = function(r) {
    var n = this;
    this.txCount || this.watches.forEach(function(i) {
      return n.maybeBroadcastWatch(i, r);
    });
  }, e.prototype.broadcastWatch = function(r, n) {
    var i = r.lastDiff, o = this.diff(r);
    n && (r.optimistic && typeof n.optimistic == "string" && (o.fromOptimisticTransaction = !0), n.onWatchUpdated && n.onWatchUpdated.call(this, r, o, i) === !1) || (!i || !pe(i.result, o.result)) && r.callback(r.lastDiff = o, i);
  }, e;
}(ul), te;
(function(t) {
  t[t.loading = 1] = "loading", t[t.setVariables = 2] = "setVariables", t[t.fetchMore = 3] = "fetchMore", t[t.refetch = 4] = "refetch", t[t.poll = 6] = "poll", t[t.ready = 7] = "ready", t[t.error = 8] = "error";
})(te || (te = {}));
function Vt(t) {
  return t ? t < 7 : !1;
}
var Pl = Object.assign, xl = Object.hasOwnProperty, Tn = function(t) {
  Pe(e, t);
  function e(r) {
    var n = r.queryManager, i = r.queryInfo, o = r.options, a = t.call(this, function(y) {
      try {
        var S = y._subscription._observer;
        S && !S.error && (S.error = Il);
      } catch {
      }
      var m = !a.observers.size;
      a.observers.add(y);
      var g = a.last;
      return g && g.error ? y.error && y.error(g.error) : g && g.result && y.next && y.next(g.result), m && a.reobserve().catch(function() {
      }), function() {
        a.observers.delete(y) && !a.observers.size && a.tearDownQuery();
      };
    }) || this;
    a.observers = /* @__PURE__ */ new Set(), a.subscriptions = /* @__PURE__ */ new Set(), a.queryInfo = i, a.queryManager = n, a.waitForOwnResult = zr(o.fetchPolicy), a.isTornDown = !1;
    var s = n.defaultOptions.watchQuery, u = s === void 0 ? {} : s, c = u.fetchPolicy, l = c === void 0 ? "cache-first" : c, f = o.fetchPolicy, h = f === void 0 ? l : f, d = o.initialFetchPolicy, p = d === void 0 ? h === "standby" ? l : h : d;
    a.options = E(E({}, o), { initialFetchPolicy: p, fetchPolicy: h }), a.queryId = i.queryId || n.generateQueryId();
    var v = Bt(a.query);
    return a.queryName = v && v.name && v.name.value, a;
  }
  return Object.defineProperty(e.prototype, "query", {
    get: function() {
      return this.queryManager.transform(this.options.query).document;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e.prototype, "variables", {
    get: function() {
      return this.options.variables;
    },
    enumerable: !1,
    configurable: !0
  }), e.prototype.result = function() {
    var r = this;
    return new Promise(function(n, i) {
      var o = {
        next: function(s) {
          n(s), r.observers.delete(o), r.observers.size || r.queryManager.removeQuery(r.queryId), setTimeout(function() {
            a.unsubscribe();
          }, 0);
        },
        error: i
      }, a = r.subscribe(o);
    });
  }, e.prototype.getCurrentResult = function(r) {
    r === void 0 && (r = !0);
    var n = this.getLastResult(!0), i = this.queryInfo.networkStatus || n && n.networkStatus || te.ready, o = E(E({}, n), { loading: Vt(i), networkStatus: i }), a = this.options.fetchPolicy, s = a === void 0 ? "cache-first" : a;
    if (!(zr(s) || this.queryManager.transform(this.options.query).hasForcedResolvers))
      if (this.waitForOwnResult)
        this.queryInfo.updateWatch();
      else {
        var u = this.queryInfo.getDiff();
        (u.complete || this.options.returnPartialData) && (o.data = u.result), pe(o.data, {}) && (o.data = void 0), u.complete ? (delete o.partial, u.complete && o.networkStatus === te.loading && (s === "cache-first" || s === "cache-only") && (o.networkStatus = te.ready, o.loading = !1)) : o.partial = !0, __DEV__ && !u.complete && !this.options.partialRefetch && !o.loading && !o.data && !o.error && Ba(u.missing);
      }
    return r && this.updateLastResult(o), o;
  }, e.prototype.isDifferentFromLastResult = function(r, n) {
    return !this.last || !pe(this.last.result, r) || n && !pe(this.last.variables, n);
  }, e.prototype.getLast = function(r, n) {
    var i = this.last;
    if (i && i[r] && (!n || pe(i.variables, this.variables)))
      return i[r];
  }, e.prototype.getLastResult = function(r) {
    return this.getLast("result", r);
  }, e.prototype.getLastError = function(r) {
    return this.getLast("error", r);
  }, e.prototype.resetLastResults = function() {
    delete this.last, this.isTornDown = !1;
  }, e.prototype.resetQueryStoreErrors = function() {
    this.queryManager.resetErrors(this.queryId);
  }, e.prototype.refetch = function(r) {
    var n, i = {
      pollInterval: 0
    }, o = this.options.fetchPolicy;
    if (o === "cache-and-network" ? i.fetchPolicy = o : o === "no-cache" ? i.fetchPolicy = "no-cache" : i.fetchPolicy = "network-only", __DEV__ && r && xl.call(r, "variables")) {
      var a = aa(this.query), s = a.variableDefinitions;
      (!s || !s.some(function(u) {
        return u.variable.name.value === "variables";
      })) && __DEV__ && k.warn("Called refetch(".concat(JSON.stringify(r), ") for query ").concat(((n = a.name) === null || n === void 0 ? void 0 : n.value) || JSON.stringify(a), `, which does not declare a $variables variable.
Did you mean to call refetch(variables) instead of refetch({ variables })?`));
    }
    return r && !pe(this.options.variables, r) && (i.variables = this.options.variables = E(E({}, this.options.variables), r)), this.queryInfo.resetLastWrite(), this.reobserve(i, te.refetch);
  }, e.prototype.fetchMore = function(r) {
    var n = this, i = E(E({}, r.query ? r : E(E(E(E({}, this.options), { query: this.query }), r), { variables: E(E({}, this.options.variables), r.variables) })), { fetchPolicy: "no-cache" }), o = this.queryManager.generateQueryId(), a = this.queryInfo, s = a.networkStatus;
    a.networkStatus = te.fetchMore, i.notifyOnNetworkStatusChange && this.observe();
    var u = /* @__PURE__ */ new Set();
    return this.queryManager.fetchQuery(o, i, te.fetchMore).then(function(c) {
      return n.queryManager.removeQuery(o), a.networkStatus === te.fetchMore && (a.networkStatus = s), n.queryManager.cache.batch({
        update: function(l) {
          var f = r.updateQuery;
          f ? l.updateQuery({
            query: n.query,
            variables: n.variables,
            returnPartialData: !0,
            optimistic: !1
          }, function(h) {
            return f(h, {
              fetchMoreResult: c.data,
              variables: i.variables
            });
          }) : l.writeQuery({
            query: i.query,
            variables: i.variables,
            data: c.data
          });
        },
        onWatchUpdated: function(l) {
          u.add(l.query);
        }
      }), c;
    }).finally(function() {
      u.has(n.query) || Qa(n);
    });
  }, e.prototype.subscribeToMore = function(r) {
    var n = this, i = this.queryManager.startGraphQLSubscription({
      query: r.document,
      variables: r.variables,
      context: r.context
    }).subscribe({
      next: function(o) {
        var a = r.updateQuery;
        a && n.updateQuery(function(s, u) {
          var c = u.variables;
          return a(s, {
            subscriptionData: o,
            variables: c
          });
        });
      },
      error: function(o) {
        if (r.onError) {
          r.onError(o);
          return;
        }
        __DEV__ && k.error("Unhandled GraphQL subscription error", o);
      }
    });
    return this.subscriptions.add(i), function() {
      n.subscriptions.delete(i) && i.unsubscribe();
    };
  }, e.prototype.setOptions = function(r) {
    return this.reobserve(r);
  }, e.prototype.setVariables = function(r) {
    return pe(this.variables, r) ? this.observers.size ? this.result() : Promise.resolve() : (this.options.variables = r, this.observers.size ? this.reobserve({
      fetchPolicy: this.options.initialFetchPolicy,
      variables: r
    }, te.setVariables) : Promise.resolve());
  }, e.prototype.updateQuery = function(r) {
    var n = this.queryManager, i = n.cache.diff({
      query: this.options.query,
      variables: this.variables,
      returnPartialData: !0,
      optimistic: !1
    }).result, o = r(i, {
      variables: this.variables
    });
    o && (n.cache.writeQuery({
      query: this.options.query,
      data: o,
      variables: this.variables
    }), n.broadcastQueries());
  }, e.prototype.startPolling = function(r) {
    this.options.pollInterval = r, this.updatePolling();
  }, e.prototype.stopPolling = function() {
    this.options.pollInterval = 0, this.updatePolling();
  }, e.prototype.applyNextFetchPolicy = function(r, n) {
    if (n.nextFetchPolicy) {
      var i = n.fetchPolicy, o = i === void 0 ? "cache-first" : i, a = n.initialFetchPolicy, s = a === void 0 ? o : a;
      o === "standby" || (typeof n.nextFetchPolicy == "function" ? n.fetchPolicy = n.nextFetchPolicy(o, {
        reason: r,
        options: n,
        observable: this,
        initialFetchPolicy: s
      }) : r === "variables-changed" ? n.fetchPolicy = s : n.fetchPolicy = n.nextFetchPolicy);
    }
    return n.fetchPolicy;
  }, e.prototype.fetch = function(r, n) {
    return this.queryManager.setObservableQuery(this), this.queryManager.fetchConcastWithInfo(this.queryId, r, n);
  }, e.prototype.updatePolling = function() {
    var r = this;
    if (!this.queryManager.ssrMode) {
      var n = this, i = n.pollingInfo, o = n.options.pollInterval;
      if (!o) {
        i && (clearTimeout(i.timeout), delete this.pollingInfo);
        return;
      }
      if (!(i && i.interval === o)) {
        __DEV__ ? k(o, "Attempted to start a polling query without a polling interval.") : k(o, 13);
        var a = i || (this.pollingInfo = {});
        a.interval = o;
        var s = function() {
          r.pollingInfo && (Vt(r.queryInfo.networkStatus) ? u() : r.reobserve({
            fetchPolicy: r.options.initialFetchPolicy === "no-cache" ? "no-cache" : "network-only"
          }, te.poll).then(u, u));
        }, u = function() {
          var c = r.pollingInfo;
          c && (clearTimeout(c.timeout), c.timeout = setTimeout(s, c.interval));
        };
        u();
      }
    }
  }, e.prototype.updateLastResult = function(r, n) {
    return n === void 0 && (n = this.variables), this.last = E(E({}, this.last), { result: this.queryManager.assumeImmutableResults ? r : ha(r), variables: n }), Fe(r.errors) || delete this.last.error, this.last;
  }, e.prototype.reobserveAsConcast = function(r, n) {
    var i = this;
    this.isTornDown = !1;
    var o = n === te.refetch || n === te.fetchMore || n === te.poll, a = this.options.variables, s = this.options.fetchPolicy, u = Or(this.options, r || {}), c = o ? u : Pl(this.options, u);
    o || (this.updatePolling(), r && r.variables && !pe(r.variables, a) && c.fetchPolicy !== "standby" && c.fetchPolicy === s && (this.applyNextFetchPolicy("variables-changed", c), n === void 0 && (n = te.setVariables))), this.waitForOwnResult && (this.waitForOwnResult = zr(c.fetchPolicy));
    var l = function() {
      i.concast === d && (i.waitForOwnResult = !1);
    }, f = c.variables && E({}, c.variables), h = this.fetch(c, n), d = h.concast, p = h.fromLink, v = {
      next: function(y) {
        l(), i.reportResult(y, f);
      },
      error: function(y) {
        l(), i.reportError(y, f);
      }
    };
    return !o && p && (this.concast && this.observer && this.concast.removeObserver(this.observer), this.concast = d, this.observer = v), d.addObserver(v), d;
  }, e.prototype.reobserve = function(r, n) {
    return this.reobserveAsConcast(r, n).promise;
  }, e.prototype.observe = function() {
    this.reportResult(this.getCurrentResult(!1), this.variables);
  }, e.prototype.reportResult = function(r, n) {
    var i = this.getLastError();
    (i || this.isDifferentFromLastResult(r, n)) && ((i || !r.partial || this.options.returnPartialData) && this.updateLastResult(r, n), It(this.observers, "next", r));
  }, e.prototype.reportError = function(r, n) {
    var i = E(E({}, this.getLastResult()), { error: r, errors: r.graphQLErrors, networkStatus: te.error, loading: !1 });
    this.updateLastResult(i, n), It(this.observers, "error", this.last.error = r);
  }, e.prototype.hasObservers = function() {
    return this.observers.size > 0;
  }, e.prototype.tearDownQuery = function() {
    this.isTornDown || (this.concast && this.observer && (this.concast.removeObserver(this.observer), delete this.concast, delete this.observer), this.stopPolling(), this.subscriptions.forEach(function(r) {
      return r.unsubscribe();
    }), this.subscriptions.clear(), this.queryManager.stopQuery(this.queryId), this.observers.clear(), this.isTornDown = !0);
  }, e;
}(ie);
pa(Tn);
function Qa(t) {
  var e = t.options, r = e.fetchPolicy, n = e.nextFetchPolicy;
  return r === "cache-and-network" || r === "network-only" ? t.reobserve({
    fetchPolicy: "cache-first",
    nextFetchPolicy: function() {
      return this.nextFetchPolicy = n, typeof n == "function" ? n.apply(this, arguments) : r;
    }
  }) : t.reobserve();
}
function Il(t) {
  __DEV__ && k.error("Unhandled error", t.message, t.stack);
}
function Ba(t) {
  __DEV__ && t && __DEV__ && k.debug("Missing cache result fields: ".concat(JSON.stringify(t)), t);
}
function zr(t) {
  return t === "network-only" || t === "no-cache" || t === "standby";
}
var Ua = function() {
  function t(e) {
    var r = e.cache, n = e.client, i = e.resolvers, o = e.fragmentMatcher;
    this.selectionsToResolveCache = /* @__PURE__ */ new WeakMap(), this.cache = r, n && (this.client = n), i && this.addResolvers(i), o && this.setFragmentMatcher(o);
  }
  return t.prototype.addResolvers = function(e) {
    var r = this;
    this.resolvers = this.resolvers || {}, Array.isArray(e) ? e.forEach(function(n) {
      r.resolvers = Ni(r.resolvers, n);
    }) : this.resolvers = Ni(this.resolvers, e);
  }, t.prototype.setResolvers = function(e) {
    this.resolvers = {}, this.addResolvers(e);
  }, t.prototype.getResolvers = function() {
    return this.resolvers || {};
  }, t.prototype.runResolvers = function(e) {
    var r = e.document, n = e.remoteResult, i = e.context, o = e.variables, a = e.onlyRunForcedResolvers, s = a === void 0 ? !1 : a;
    return Be(this, void 0, void 0, function() {
      return Ue(this, function(u) {
        return r ? [2, this.resolveDocument(r, n.data, i, o, this.fragmentMatcher, s).then(function(c) {
          return E(E({}, n), { data: c.result });
        })] : [2, n];
      });
    });
  }, t.prototype.setFragmentMatcher = function(e) {
    this.fragmentMatcher = e;
  }, t.prototype.getFragmentMatcher = function() {
    return this.fragmentMatcher;
  }, t.prototype.clientQuery = function(e) {
    return Qn(["client"], e) && this.resolvers ? e : null;
  }, t.prototype.serverQuery = function(e) {
    return Vc(e);
  }, t.prototype.prepareContext = function(e) {
    var r = this.cache;
    return E(E({}, e), { cache: r, getCacheKey: function(n) {
      return r.identify(n);
    } });
  }, t.prototype.addExportedVariables = function(e, r, n) {
    return r === void 0 && (r = {}), n === void 0 && (n = {}), Be(this, void 0, void 0, function() {
      return Ue(this, function(i) {
        return e ? [2, this.resolveDocument(e, this.buildRootValueFromCache(e, r) || {}, this.prepareContext(n), r).then(function(o) {
          return E(E({}, r), o.exportedVariables);
        })] : [2, E({}, r)];
      });
    });
  }, t.prototype.shouldForceResolvers = function(e) {
    var r = !1;
    return Ve(e, {
      Directive: {
        enter: function(n) {
          if (n.name.value === "client" && n.arguments && (r = n.arguments.some(function(i) {
            return i.name.value === "always" && i.value.kind === "BooleanValue" && i.value.value === !0;
          }), r))
            return $n;
        }
      }
    }), r;
  }, t.prototype.buildRootValueFromCache = function(e, r) {
    return this.cache.diff({
      query: Lc(e),
      variables: r,
      returnPartialData: !0,
      optimistic: !1
    }).result;
  }, t.prototype.resolveDocument = function(e, r, n, i, o, a) {
    return n === void 0 && (n = {}), i === void 0 && (i = {}), o === void 0 && (o = function() {
      return !0;
    }), a === void 0 && (a = !1), Be(this, void 0, void 0, function() {
      var s, u, c, l, f, h, d, p, v, y, S;
      return Ue(this, function(m) {
        return s = _r(e), u = Wn(e), c = Bn(u), l = this.collectSelectionsToResolve(s, c), f = s.operation, h = f ? f.charAt(0).toUpperCase() + f.slice(1) : "Query", d = this, p = d.cache, v = d.client, y = {
          fragmentMap: c,
          context: E(E({}, n), { cache: p, client: v }),
          variables: i,
          fragmentMatcher: o,
          defaultOperationType: h,
          exportedVariables: {},
          selectionsToResolve: l,
          onlyRunForcedResolvers: a
        }, S = !1, [2, this.resolveSelectionSet(s.selectionSet, S, r, y).then(function(g) {
          return {
            result: g,
            exportedVariables: y.exportedVariables
          };
        })];
      });
    });
  }, t.prototype.resolveSelectionSet = function(e, r, n, i) {
    return Be(this, void 0, void 0, function() {
      var o, a, s, u, c, l = this;
      return Ue(this, function(f) {
        return o = i.fragmentMap, a = i.context, s = i.variables, u = [n], c = function(h) {
          return Be(l, void 0, void 0, function() {
            var d, p;
            return Ue(this, function(v) {
              return !r && !i.selectionsToResolve.has(h) ? [2] : br(h, s) ? rt(h) ? [2, this.resolveField(h, r, n, i).then(function(y) {
                var S;
                typeof y < "u" && u.push((S = {}, S[tt(h)] = y, S));
              })] : (xc(h) ? d = h : (d = o[h.name.value], __DEV__ ? k(d, "No fragment named ".concat(h.name.value)) : k(d, 11)), d && d.typeCondition && (p = d.typeCondition.name.value, i.fragmentMatcher(n, p, a)) ? [2, this.resolveSelectionSet(d.selectionSet, r, n, i).then(function(y) {
                u.push(y);
              })] : [2]) : [2];
            });
          });
        }, [2, Promise.all(e.selections.map(c)).then(function() {
          return Yn(u);
        })];
      });
    });
  }, t.prototype.resolveField = function(e, r, n, i) {
    return Be(this, void 0, void 0, function() {
      var o, a, s, u, c, l, f, h, d, p = this;
      return Ue(this, function(v) {
        return n ? (o = i.variables, a = e.name.value, s = tt(e), u = a !== s, c = n[s] || n[a], l = Promise.resolve(c), (!i.onlyRunForcedResolvers || this.shouldForceResolvers(e)) && (f = n.__typename || i.defaultOperationType, h = this.resolvers && this.resolvers[f], h && (d = h[u ? a : s], d && (l = Promise.resolve(ii.withValue(this.cache, d, [
          n,
          Er(e, o),
          i.context,
          { field: e, fragmentMap: i.fragmentMap }
        ]))))), [2, l.then(function(y) {
          var S, m;
          if (y === void 0 && (y = c), e.directives && e.directives.forEach(function(_) {
            _.name.value === "export" && _.arguments && _.arguments.forEach(function(b) {
              b.name.value === "as" && b.value.kind === "StringValue" && (i.exportedVariables[b.value.value] = y);
            });
          }), !e.selectionSet || y == null)
            return y;
          var g = (m = (S = e.directives) === null || S === void 0 ? void 0 : S.some(function(_) {
            return _.name.value === "client";
          })) !== null && m !== void 0 ? m : !1;
          if (Array.isArray(y))
            return p.resolveSubSelectedArray(e, r || g, y, i);
          if (e.selectionSet)
            return p.resolveSelectionSet(e.selectionSet, r || g, y, i);
        })]) : [2, null];
      });
    });
  }, t.prototype.resolveSubSelectedArray = function(e, r, n, i) {
    var o = this;
    return Promise.all(n.map(function(a) {
      if (a === null)
        return null;
      if (Array.isArray(a))
        return o.resolveSubSelectedArray(e, r, a, i);
      if (e.selectionSet)
        return o.resolveSelectionSet(e.selectionSet, r, a, i);
    }));
  }, t.prototype.collectSelectionsToResolve = function(e, r) {
    var n = function(a) {
      return !Array.isArray(a);
    }, i = this.selectionsToResolveCache;
    function o(a) {
      if (!i.has(a)) {
        var s = /* @__PURE__ */ new Set();
        i.set(a, s), Ve(a, {
          Directive: function(u, c, l, f, h) {
            u.name.value === "client" && h.forEach(function(d) {
              n(d) && Pi(d) && s.add(d);
            });
          },
          FragmentSpread: function(u, c, l, f, h) {
            var d = r[u.name.value];
            __DEV__ ? k(d, "No fragment named ".concat(u.name.value)) : k(d, 12);
            var p = o(d);
            p.size > 0 && (h.forEach(function(v) {
              n(v) && Pi(v) && s.add(v);
            }), s.add(u), p.forEach(function(v) {
              s.add(v);
            }));
          }
        });
      }
      return i.get(a);
    }
    return o(e);
  }, t;
}(), ft = new (ot ? WeakMap : Map)();
function Wr(t, e) {
  var r = t[e];
  typeof r == "function" && (t[e] = function() {
    return ft.set(t, (ft.get(t) + 1) % 1e15), r.apply(this, arguments);
  });
}
function go(t) {
  t.notifyTimeout && (clearTimeout(t.notifyTimeout), t.notifyTimeout = void 0);
}
var Hr = function() {
  function t(e, r) {
    r === void 0 && (r = e.generateQueryId()), this.queryId = r, this.listeners = /* @__PURE__ */ new Set(), this.document = null, this.lastRequestId = 1, this.subscriptions = /* @__PURE__ */ new Set(), this.stopped = !1, this.dirty = !1, this.observableQuery = null;
    var n = this.cache = e.cache;
    ft.has(n) || (ft.set(n, 0), Wr(n, "evict"), Wr(n, "modify"), Wr(n, "reset"));
  }
  return t.prototype.init = function(e) {
    var r = e.networkStatus || te.loading;
    return this.variables && this.networkStatus !== te.loading && !pe(this.variables, e.variables) && (r = te.setVariables), pe(e.variables, this.variables) || (this.lastDiff = void 0), Object.assign(this, {
      document: e.document,
      variables: e.variables,
      networkError: null,
      graphQLErrors: this.graphQLErrors || [],
      networkStatus: r
    }), e.observableQuery && this.setObservableQuery(e.observableQuery), e.lastRequestId && (this.lastRequestId = e.lastRequestId), this;
  }, t.prototype.reset = function() {
    go(this), this.dirty = !1;
  }, t.prototype.getDiff = function(e) {
    e === void 0 && (e = this.variables);
    var r = this.getDiffOptions(e);
    if (this.lastDiff && pe(r, this.lastDiff.options))
      return this.lastDiff.diff;
    this.updateWatch(this.variables = e);
    var n = this.observableQuery;
    if (n && n.options.fetchPolicy === "no-cache")
      return { complete: !1 };
    var i = this.cache.diff(r);
    return this.updateLastDiff(i, r), i;
  }, t.prototype.updateLastDiff = function(e, r) {
    this.lastDiff = e ? {
      diff: e,
      options: r || this.getDiffOptions()
    } : void 0;
  }, t.prototype.getDiffOptions = function(e) {
    var r;
    return e === void 0 && (e = this.variables), {
      query: this.document,
      variables: e,
      returnPartialData: !0,
      optimistic: !0,
      canonizeResults: (r = this.observableQuery) === null || r === void 0 ? void 0 : r.options.canonizeResults
    };
  }, t.prototype.setDiff = function(e) {
    var r = this, n = this.lastDiff && this.lastDiff.diff;
    this.updateLastDiff(e), !this.dirty && !pe(n && n.result, e && e.result) && (this.dirty = !0, this.notifyTimeout || (this.notifyTimeout = setTimeout(function() {
      return r.notify();
    }, 0)));
  }, t.prototype.setObservableQuery = function(e) {
    var r = this;
    e !== this.observableQuery && (this.oqListener && this.listeners.delete(this.oqListener), this.observableQuery = e, e ? (e.queryInfo = this, this.listeners.add(this.oqListener = function() {
      var n = r.getDiff();
      n.fromOptimisticTransaction ? e.observe() : Qa(e);
    })) : delete this.oqListener);
  }, t.prototype.notify = function() {
    var e = this;
    go(this), this.shouldNotify() && this.listeners.forEach(function(r) {
      return r(e);
    }), this.dirty = !1;
  }, t.prototype.shouldNotify = function() {
    if (!this.dirty || !this.listeners.size)
      return !1;
    if (Vt(this.networkStatus) && this.observableQuery) {
      var e = this.observableQuery.options.fetchPolicy;
      if (e !== "cache-only" && e !== "cache-and-network")
        return !1;
    }
    return !0;
  }, t.prototype.stop = function() {
    if (!this.stopped) {
      this.stopped = !0, this.reset(), this.cancel(), this.cancel = t.prototype.cancel, this.subscriptions.forEach(function(r) {
        return r.unsubscribe();
      });
      var e = this.observableQuery;
      e && e.stopPolling();
    }
  }, t.prototype.cancel = function() {
  }, t.prototype.updateWatch = function(e) {
    var r = this;
    e === void 0 && (e = this.variables);
    var n = this.observableQuery;
    if (!(n && n.options.fetchPolicy === "no-cache")) {
      var i = E(E({}, this.getDiffOptions(e)), { watcher: this, callback: function(o) {
        return r.setDiff(o);
      } });
      (!this.lastWatch || !pe(i, this.lastWatch)) && (this.cancel(), this.cancel = this.cache.watch(this.lastWatch = i));
    }
  }, t.prototype.resetLastWrite = function() {
    this.lastWrite = void 0;
  }, t.prototype.shouldWrite = function(e, r) {
    var n = this.lastWrite;
    return !(n && n.dmCount === ft.get(this.cache) && pe(r, n.variables) && pe(e.data, n.result.data));
  }, t.prototype.markResult = function(e, r, n, i) {
    var o = this, a = new He(), s = Fe(e.errors) ? e.errors.slice(0) : [];
    if (this.reset(), "incremental" in e && Fe(e.incremental)) {
      var u = ya(this.getDiff().result, e);
      e.data = u;
    } else if ("hasNext" in e && e.hasNext) {
      var c = this.getDiff();
      e.data = a.merge(c.result, e.data);
    }
    this.graphQLErrors = s, n.fetchPolicy === "no-cache" ? this.updateLastDiff({ result: e.data, complete: !0 }, this.getDiffOptions(n.variables)) : i !== 0 && (Rn(e, n.errorPolicy) ? this.cache.performTransaction(function(l) {
      if (o.shouldWrite(e, n.variables))
        l.writeQuery({
          query: r,
          data: e.data,
          variables: n.variables,
          overwrite: i === 1
        }), o.lastWrite = {
          result: e,
          variables: n.variables,
          dmCount: ft.get(o.cache)
        };
      else if (o.lastDiff && o.lastDiff.diff.complete) {
        e.data = o.lastDiff.diff.result;
        return;
      }
      var f = o.getDiffOptions(n.variables), h = l.diff(f);
      o.stopped || o.updateWatch(n.variables), o.updateLastDiff(h, f), h.complete && (e.data = h.result);
    }) : this.lastWrite = void 0);
  }, t.prototype.markReady = function() {
    return this.networkError = null, this.networkStatus = te.ready;
  }, t.prototype.markError = function(e) {
    return this.networkStatus = te.error, this.lastWrite = void 0, this.reset(), e.graphQLErrors && (this.graphQLErrors = e.graphQLErrors), e.networkError && (this.networkError = e.networkError), e;
  }, t;
}();
function Rn(t, e) {
  e === void 0 && (e = "none");
  var r = e === "ignore" || e === "all", n = !tr(t);
  return !n && r && t.data && (n = !0), n;
}
var Nl = Object.prototype.hasOwnProperty, Fl = function() {
  function t(e) {
    var r = e.cache, n = e.link, i = e.defaultOptions, o = e.queryDeduplication, a = o === void 0 ? !1 : o, s = e.onBroadcast, u = e.ssrMode, c = u === void 0 ? !1 : u, l = e.clientAwareness, f = l === void 0 ? {} : l, h = e.localState, d = e.assumeImmutableResults;
    this.clientAwareness = {}, this.queries = /* @__PURE__ */ new Map(), this.fetchCancelFns = /* @__PURE__ */ new Map(), this.transformCache = new (ot ? WeakMap : Map)(), this.queryIdCounter = 1, this.requestIdCounter = 1, this.mutationIdCounter = 1, this.inFlightLinkObservables = /* @__PURE__ */ new Map(), this.cache = r, this.link = n, this.defaultOptions = i || /* @__PURE__ */ Object.create(null), this.queryDeduplication = a, this.clientAwareness = f, this.localState = h || new Ua({ cache: r }), this.ssrMode = c, this.assumeImmutableResults = !!d, (this.onBroadcast = s) && (this.mutationStore = /* @__PURE__ */ Object.create(null));
  }
  return t.prototype.stop = function() {
    var e = this;
    this.queries.forEach(function(r, n) {
      e.stopQueryNoBroadcast(n);
    }), this.cancelPendingFetches(__DEV__ ? new G("QueryManager stopped while query was in flight") : new G(14));
  }, t.prototype.cancelPendingFetches = function(e) {
    this.fetchCancelFns.forEach(function(r) {
      return r(e);
    }), this.fetchCancelFns.clear();
  }, t.prototype.mutate = function(e) {
    var r, n, i = e.mutation, o = e.variables, a = e.optimisticResponse, s = e.updateQueries, u = e.refetchQueries, c = u === void 0 ? [] : u, l = e.awaitRefetchQueries, f = l === void 0 ? !1 : l, h = e.update, d = e.onQueryUpdated, p = e.fetchPolicy, v = p === void 0 ? ((r = this.defaultOptions.mutate) === null || r === void 0 ? void 0 : r.fetchPolicy) || "network-only" : p, y = e.errorPolicy, S = y === void 0 ? ((n = this.defaultOptions.mutate) === null || n === void 0 ? void 0 : n.errorPolicy) || "none" : y, m = e.keepRootFields, g = e.context;
    return Be(this, void 0, void 0, function() {
      var _, b, A, P, F, V;
      return Ue(this, function(M) {
        switch (M.label) {
          case 0:
            return __DEV__ ? k(i, "mutation option is required. You must specify your GraphQL document in the mutation option.") : k(i, 15), __DEV__ ? k(v === "network-only" || v === "no-cache", "Mutations support only 'network-only' or 'no-cache' fetchPolicy strings. The default `network-only` behavior automatically writes mutation results to the cache. Passing `no-cache` skips the cache write.") : k(v === "network-only" || v === "no-cache", 16), _ = this.generateMutationId(), b = this.transform(i), A = b.document, P = b.hasClientExports, i = this.cache.transformForLink(A), o = this.getVariables(i, o), P ? [4, this.localState.addExportedVariables(i, o, g)] : [3, 2];
          case 1:
            o = M.sent(), M.label = 2;
          case 2:
            return F = this.mutationStore && (this.mutationStore[_] = {
              mutation: i,
              variables: o,
              loading: !0,
              error: null
            }), a && this.markMutationOptimistic(a, {
              mutationId: _,
              document: i,
              variables: o,
              fetchPolicy: v,
              errorPolicy: S,
              context: g,
              updateQueries: s,
              update: h,
              keepRootFields: m
            }), this.broadcastQueries(), V = this, [2, new Promise(function(re, ee) {
              return jr(V.getObservableFromLink(i, E(E({}, g), { optimisticResponse: a }), o, !1), function(Q) {
                if (tr(Q) && S === "none")
                  throw new at({
                    graphQLErrors: hn(Q)
                  });
                F && (F.loading = !1, F.error = null);
                var oe = E({}, Q);
                return typeof c == "function" && (c = c(oe)), S === "ignore" && tr(oe) && delete oe.errors, V.markMutationResult({
                  mutationId: _,
                  result: oe,
                  document: i,
                  variables: o,
                  fetchPolicy: v,
                  errorPolicy: S,
                  context: g,
                  update: h,
                  updateQueries: s,
                  awaitRefetchQueries: f,
                  refetchQueries: c,
                  removeOptimistic: a ? _ : void 0,
                  onQueryUpdated: d,
                  keepRootFields: m
                });
              }).subscribe({
                next: function(Q) {
                  V.broadcastQueries(), (!("hasNext" in Q) || Q.hasNext === !1) && re(Q);
                },
                error: function(Q) {
                  F && (F.loading = !1, F.error = Q), a && V.cache.removeOptimistic(_), V.broadcastQueries(), ee(Q instanceof at ? Q : new at({
                    networkError: Q
                  }));
                }
              });
            })];
        }
      });
    });
  }, t.prototype.markMutationResult = function(e, r) {
    var n = this;
    r === void 0 && (r = this.cache);
    var i = e.result, o = [], a = e.fetchPolicy === "no-cache";
    if (!a && Rn(i, e.errorPolicy)) {
      if (dt(i) || o.push({
        result: i.data,
        dataId: "ROOT_MUTATION",
        query: e.document,
        variables: e.variables
      }), dt(i) && Fe(i.incremental)) {
        var s = r.diff({
          id: "ROOT_MUTATION",
          query: this.transform(e.document).asQuery,
          variables: e.variables,
          optimistic: !1,
          returnPartialData: !0
        }), u = void 0;
        s.result && (u = ya(s.result, i)), typeof u < "u" && (i.data = u, o.push({
          result: u,
          dataId: "ROOT_MUTATION",
          query: e.document,
          variables: e.variables
        }));
      }
      var c = e.updateQueries;
      c && this.queries.forEach(function(f, h) {
        var d = f.observableQuery, p = d && d.queryName;
        if (!(!p || !Nl.call(c, p))) {
          var v = c[p], y = n.queries.get(h), S = y.document, m = y.variables, g = r.diff({
            query: S,
            variables: m,
            returnPartialData: !0,
            optimistic: !1
          }), _ = g.result, b = g.complete;
          if (b && _) {
            var A = v(_, {
              mutationResult: i,
              queryName: S && sn(S) || void 0,
              queryVariables: m
            });
            A && o.push({
              result: A,
              dataId: "ROOT_QUERY",
              query: S,
              variables: m
            });
          }
        }
      });
    }
    if (o.length > 0 || e.refetchQueries || e.update || e.onQueryUpdated || e.removeOptimistic) {
      var l = [];
      if (this.refetchQueries({
        updateCache: function(f) {
          a || o.forEach(function(v) {
            return f.write(v);
          });
          var h = e.update, d = !ru(i) || dt(i) && !i.hasNext;
          if (h) {
            if (!a) {
              var p = f.diff({
                id: "ROOT_MUTATION",
                query: n.transform(e.document).asQuery,
                variables: e.variables,
                optimistic: !1,
                returnPartialData: !0
              });
              p.complete && (i = E(E({}, i), { data: p.result }), "incremental" in i && delete i.incremental, "hasNext" in i && delete i.hasNext);
            }
            d && h(f, i, {
              context: e.context,
              variables: e.variables
            });
          }
          !a && !e.keepRootFields && d && f.modify({
            id: "ROOT_MUTATION",
            fields: function(v, y) {
              var S = y.fieldName, m = y.DELETE;
              return S === "__typename" ? v : m;
            }
          });
        },
        include: e.refetchQueries,
        optimistic: !1,
        removeOptimistic: e.removeOptimistic,
        onQueryUpdated: e.onQueryUpdated || null
      }).forEach(function(f) {
        return l.push(f);
      }), e.awaitRefetchQueries || e.onQueryUpdated)
        return Promise.all(l).then(function() {
          return i;
        });
    }
    return Promise.resolve(i);
  }, t.prototype.markMutationOptimistic = function(e, r) {
    var n = this, i = typeof e == "function" ? e(r.variables) : e;
    return this.cache.recordOptimisticTransaction(function(o) {
      try {
        n.markMutationResult(E(E({}, r), { result: { data: i } }), o);
      } catch (a) {
        __DEV__ && k.error(a);
      }
    }, r.mutationId);
  }, t.prototype.fetchQuery = function(e, r, n) {
    return this.fetchQueryObservable(e, r, n).promise;
  }, t.prototype.getQueryStore = function() {
    var e = /* @__PURE__ */ Object.create(null);
    return this.queries.forEach(function(r, n) {
      e[n] = {
        variables: r.variables,
        networkStatus: r.networkStatus,
        networkError: r.networkError,
        graphQLErrors: r.graphQLErrors
      };
    }), e;
  }, t.prototype.resetErrors = function(e) {
    var r = this.queries.get(e);
    r && (r.networkError = void 0, r.graphQLErrors = []);
  }, t.prototype.transform = function(e) {
    var r = this.transformCache;
    if (!r.has(e)) {
      var n = this.cache.transformDocument(e), i = jc(n), o = this.localState.clientQuery(n), a = i && this.localState.serverQuery(i), s = {
        document: n,
        hasClientExports: yc(n),
        hasForcedResolvers: this.localState.shouldForceResolvers(n),
        clientQuery: o,
        serverQuery: a,
        defaultVars: Hn(Bt(n)),
        asQuery: E(E({}, n), { definitions: n.definitions.map(function(c) {
          return c.kind === "OperationDefinition" && c.operation !== "query" ? E(E({}, c), { operation: "query" }) : c;
        }) })
      }, u = function(c) {
        c && !r.has(c) && r.set(c, s);
      };
      u(e), u(n), u(o), u(a);
    }
    return r.get(e);
  }, t.prototype.getVariables = function(e, r) {
    return E(E({}, this.transform(e).defaultVars), r);
  }, t.prototype.watchQuery = function(e) {
    e = E(E({}, e), { variables: this.getVariables(e.query, e.variables) }), typeof e.notifyOnNetworkStatusChange > "u" && (e.notifyOnNetworkStatusChange = !1);
    var r = new Hr(this), n = new Tn({
      queryManager: this,
      queryInfo: r,
      options: e
    });
    return this.queries.set(n.queryId, r), r.init({
      document: n.query,
      observableQuery: n,
      variables: n.variables
    }), n;
  }, t.prototype.query = function(e, r) {
    var n = this;
    return r === void 0 && (r = this.generateQueryId()), __DEV__ ? k(e.query, "query option is required. You must specify your GraphQL document in the query option.") : k(e.query, 17), __DEV__ ? k(e.query.kind === "Document", 'You must wrap the query string in a "gql" tag.') : k(e.query.kind === "Document", 18), __DEV__ ? k(!e.returnPartialData, "returnPartialData option only supported on watchQuery.") : k(!e.returnPartialData, 19), __DEV__ ? k(!e.pollInterval, "pollInterval option only supported on watchQuery.") : k(!e.pollInterval, 20), this.fetchQuery(r, e).finally(function() {
      return n.stopQuery(r);
    });
  }, t.prototype.generateQueryId = function() {
    return String(this.queryIdCounter++);
  }, t.prototype.generateRequestId = function() {
    return this.requestIdCounter++;
  }, t.prototype.generateMutationId = function() {
    return String(this.mutationIdCounter++);
  }, t.prototype.stopQueryInStore = function(e) {
    this.stopQueryInStoreNoBroadcast(e), this.broadcastQueries();
  }, t.prototype.stopQueryInStoreNoBroadcast = function(e) {
    var r = this.queries.get(e);
    r && r.stop();
  }, t.prototype.clearStore = function(e) {
    return e === void 0 && (e = {
      discardWatches: !0
    }), this.cancelPendingFetches(__DEV__ ? new G("Store reset while query was in flight (not completed in link chain)") : new G(21)), this.queries.forEach(function(r) {
      r.observableQuery ? r.networkStatus = te.loading : r.stop();
    }), this.mutationStore && (this.mutationStore = /* @__PURE__ */ Object.create(null)), this.cache.reset(e);
  }, t.prototype.getObservableQueries = function(e) {
    var r = this;
    e === void 0 && (e = "active");
    var n = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set();
    return Array.isArray(e) && e.forEach(function(a) {
      typeof a == "string" ? i.set(a, !1) : bc(a) ? i.set(r.transform(a).document, !1) : ae(a) && a.query && o.add(a);
    }), this.queries.forEach(function(a, s) {
      var u = a.observableQuery, c = a.document;
      if (u) {
        if (e === "all") {
          n.set(s, u);
          return;
        }
        var l = u.queryName, f = u.options.fetchPolicy;
        if (f === "standby" || e === "active" && !u.hasObservers())
          return;
        (e === "active" || l && i.has(l) || c && i.has(c)) && (n.set(s, u), l && i.set(l, !0), c && i.set(c, !0));
      }
    }), o.size && o.forEach(function(a) {
      var s = dn("legacyOneTimeQuery"), u = r.getQuery(s).init({
        document: a.query,
        variables: a.variables
      }), c = new Tn({
        queryManager: r,
        queryInfo: u,
        options: E(E({}, a), { fetchPolicy: "network-only" })
      });
      k(c.queryId === s), u.setObservableQuery(c), n.set(s, c);
    }), __DEV__ && i.size && i.forEach(function(a, s) {
      a || __DEV__ && k.warn("Unknown query ".concat(typeof s == "string" ? "named " : "").concat(JSON.stringify(s, null, 2), " requested in refetchQueries options.include array"));
    }), n;
  }, t.prototype.reFetchObservableQueries = function(e) {
    var r = this;
    e === void 0 && (e = !1);
    var n = [];
    return this.getObservableQueries(e ? "all" : "active").forEach(function(i, o) {
      var a = i.options.fetchPolicy;
      i.resetLastResults(), (e || a !== "standby" && a !== "cache-only") && n.push(i.refetch()), r.getQuery(o).setDiff(null);
    }), this.broadcastQueries(), Promise.all(n);
  }, t.prototype.setObservableQuery = function(e) {
    this.getQuery(e.queryId).setObservableQuery(e);
  }, t.prototype.startGraphQLSubscription = function(e) {
    var r = this, n = e.query, i = e.fetchPolicy, o = e.errorPolicy, a = e.variables, s = e.context, u = s === void 0 ? {} : s;
    n = this.transform(n).document, a = this.getVariables(n, a);
    var c = function(f) {
      return r.getObservableFromLink(n, u, f).map(function(h) {
        i !== "no-cache" && (Rn(h, o) && r.cache.write({
          query: n,
          result: h.data,
          dataId: "ROOT_SUBSCRIPTION",
          variables: f
        }), r.broadcastQueries());
        var d = tr(h), p = Eu(h);
        if (d || p) {
          var v = {};
          throw d && (v.graphQLErrors = h.errors), p && (v.protocolErrors = h.extensions[ei]), new at(v);
        }
        return h;
      });
    };
    if (this.transform(n).hasClientExports) {
      var l = this.localState.addExportedVariables(n, a, u).then(c);
      return new ie(function(f) {
        var h = null;
        return l.then(function(d) {
          return h = d.subscribe(f);
        }, f.error), function() {
          return h && h.unsubscribe();
        };
      });
    }
    return c(a);
  }, t.prototype.stopQuery = function(e) {
    this.stopQueryNoBroadcast(e), this.broadcastQueries();
  }, t.prototype.stopQueryNoBroadcast = function(e) {
    this.stopQueryInStoreNoBroadcast(e), this.removeQuery(e);
  }, t.prototype.removeQuery = function(e) {
    this.fetchCancelFns.delete(e), this.queries.has(e) && (this.getQuery(e).stop(), this.queries.delete(e));
  }, t.prototype.broadcastQueries = function() {
    this.onBroadcast && this.onBroadcast(), this.queries.forEach(function(e) {
      return e.notify();
    });
  }, t.prototype.getLocalState = function() {
    return this.localState;
  }, t.prototype.getObservableFromLink = function(e, r, n, i) {
    var o = this, a;
    i === void 0 && (i = (a = r?.queryDeduplication) !== null && a !== void 0 ? a : this.queryDeduplication);
    var s, u = this.transform(e).serverQuery;
    if (u) {
      var c = this, l = c.inFlightLinkObservables, f = c.link, h = {
        query: u,
        variables: n,
        operationName: sn(u) || void 0,
        context: this.prepareContext(E(E({}, r), { forceFetch: !i }))
      };
      if (r = h.context, i) {
        var d = l.get(u) || /* @__PURE__ */ new Map();
        l.set(u, d);
        var p = Ze(n);
        if (s = d.get(p), !s) {
          var v = new ut([
            yn(f, h)
          ]);
          d.set(p, s = v), v.beforeNext(function() {
            d.delete(p) && d.size < 1 && l.delete(u);
          });
        }
      } else
        s = new ut([
          yn(f, h)
        ]);
    } else
      s = new ut([
        ie.of({ data: {} })
      ]), r = this.prepareContext(r);
    var y = this.transform(e).clientQuery;
    return y && (s = jr(s, function(S) {
      return o.localState.runResolvers({
        document: y,
        remoteResult: S,
        context: r,
        variables: n
      });
    })), s;
  }, t.prototype.getResultsFromLink = function(e, r, n) {
    var i = e.lastRequestId = this.generateRequestId(), o = this.cache.transformForLink(this.transform(e.document).document);
    return jr(this.getObservableFromLink(o, n.context, n.variables), function(a) {
      var s = hn(a), u = s.length > 0;
      if (i >= e.lastRequestId) {
        if (u && n.errorPolicy === "none")
          throw e.markError(new at({
            graphQLErrors: s
          }));
        e.markResult(a, o, n, r), e.markReady();
      }
      var c = {
        data: a.data,
        loading: !1,
        networkStatus: te.ready
      };
      return u && n.errorPolicy !== "ignore" && (c.errors = s, c.networkStatus = te.error), c;
    }, function(a) {
      var s = wu(a) ? a : new at({ networkError: a });
      throw i >= e.lastRequestId && e.markError(s), s;
    });
  }, t.prototype.fetchQueryObservable = function(e, r, n) {
    return this.fetchConcastWithInfo(e, r, n).concast;
  }, t.prototype.fetchConcastWithInfo = function(e, r, n) {
    var i = this;
    n === void 0 && (n = te.loading);
    var o = this.transform(r.query).document, a = this.getVariables(o, r.variables), s = this.getQuery(e), u = this.defaultOptions.watchQuery, c = r.fetchPolicy, l = c === void 0 ? u && u.fetchPolicy || "cache-first" : c, f = r.errorPolicy, h = f === void 0 ? u && u.errorPolicy || "none" : f, d = r.returnPartialData, p = d === void 0 ? !1 : d, v = r.notifyOnNetworkStatusChange, y = v === void 0 ? !1 : v, S = r.context, m = S === void 0 ? {} : S, g = Object.assign({}, r, {
      query: o,
      variables: a,
      fetchPolicy: l,
      errorPolicy: h,
      returnPartialData: p,
      notifyOnNetworkStatusChange: y,
      context: m
    }), _ = function(V) {
      g.variables = V;
      var M = i.fetchQueryByPolicy(s, g, n);
      return g.fetchPolicy !== "standby" && M.sources.length > 0 && s.observableQuery && s.observableQuery.applyNextFetchPolicy("after-fetch", r), M;
    }, b = function() {
      return i.fetchCancelFns.delete(e);
    };
    this.fetchCancelFns.set(e, function(V) {
      b(), setTimeout(function() {
        return A.cancel(V);
      });
    });
    var A, P;
    if (this.transform(g.query).hasClientExports)
      A = new ut(this.localState.addExportedVariables(g.query, g.variables, g.context).then(_).then(function(V) {
        return V.sources;
      })), P = !0;
    else {
      var F = _(g.variables);
      P = F.fromLink, A = new ut(F.sources);
    }
    return A.promise.then(b, b), {
      concast: A,
      fromLink: P
    };
  }, t.prototype.refetchQueries = function(e) {
    var r = this, n = e.updateCache, i = e.include, o = e.optimistic, a = o === void 0 ? !1 : o, s = e.removeOptimistic, u = s === void 0 ? a ? dn("refetchQueries") : void 0 : s, c = e.onQueryUpdated, l = /* @__PURE__ */ new Map();
    i && this.getObservableQueries(i).forEach(function(h, d) {
      l.set(d, {
        oq: h,
        lastDiff: r.getQuery(d).getDiff()
      });
    });
    var f = /* @__PURE__ */ new Map();
    return n && this.cache.batch({
      update: n,
      optimistic: a && u || !1,
      removeOptimistic: u,
      onWatchUpdated: function(h, d, p) {
        var v = h.watcher instanceof Hr && h.watcher.observableQuery;
        if (v) {
          if (c) {
            l.delete(v.queryId);
            var y = c(v, d, p);
            return y === !0 && (y = v.refetch()), y !== !1 && f.set(v, y), y;
          }
          c !== null && l.set(v.queryId, { oq: v, lastDiff: p, diff: d });
        }
      }
    }), l.size && l.forEach(function(h, d) {
      var p = h.oq, v = h.lastDiff, y = h.diff, S;
      if (c) {
        if (!y) {
          var m = p.queryInfo;
          m.reset(), y = m.getDiff();
        }
        S = c(p, y, v);
      }
      (!c || S === !0) && (S = p.refetch()), S !== !1 && f.set(p, S), d.indexOf("legacyOneTimeQuery") >= 0 && r.stopQueryNoBroadcast(d);
    }), u && this.cache.removeOptimistic(u), f;
  }, t.prototype.fetchQueryByPolicy = function(e, r, n) {
    var i = this, o = r.query, a = r.variables, s = r.fetchPolicy, u = r.refetchWritePolicy, c = r.errorPolicy, l = r.returnPartialData, f = r.context, h = r.notifyOnNetworkStatusChange, d = e.networkStatus;
    e.init({
      document: this.transform(o).document,
      variables: a,
      networkStatus: n
    });
    var p = function() {
      return e.getDiff(a);
    }, v = function(_, b) {
      b === void 0 && (b = e.networkStatus || te.loading);
      var A = _.result;
      __DEV__ && !l && !pe(A, {}) && Ba(_.missing);
      var P = function(F) {
        return ie.of(E({ data: F, loading: Vt(b), networkStatus: b }, _.complete ? null : { partial: !0 }));
      };
      return A && i.transform(o).hasForcedResolvers ? i.localState.runResolvers({
        document: o,
        remoteResult: { data: A },
        context: f,
        variables: a,
        onlyRunForcedResolvers: !0
      }).then(function(F) {
        return P(F.data || void 0);
      }) : c === "none" && b === te.refetch && Array.isArray(_.missing) ? P(void 0) : P(A);
    }, y = s === "no-cache" ? 0 : n === te.refetch && u !== "merge" ? 1 : 2, S = function() {
      return i.getResultsFromLink(e, y, {
        variables: a,
        context: f,
        fetchPolicy: s,
        errorPolicy: c
      });
    }, m = h && typeof d == "number" && d !== n && Vt(n);
    switch (s) {
      default:
      case "cache-first": {
        var g = p();
        return g.complete ? { fromLink: !1, sources: [v(g, e.markReady())] } : l || m ? { fromLink: !0, sources: [v(g), S()] } : { fromLink: !0, sources: [S()] };
      }
      case "cache-and-network": {
        var g = p();
        return g.complete || l || m ? { fromLink: !0, sources: [v(g), S()] } : { fromLink: !0, sources: [S()] };
      }
      case "cache-only":
        return { fromLink: !1, sources: [v(p(), e.markReady())] };
      case "network-only":
        return m ? { fromLink: !0, sources: [v(p()), S()] } : { fromLink: !0, sources: [S()] };
      case "no-cache":
        return m ? {
          fromLink: !0,
          sources: [
            v(e.getDiff()),
            S()
          ]
        } : { fromLink: !0, sources: [S()] };
      case "standby":
        return { fromLink: !1, sources: [] };
    }
  }, t.prototype.getQuery = function(e) {
    return e && !this.queries.has(e) && this.queries.set(e, new Hr(this, e)), this.queries.get(e);
  }, t.prototype.prepareContext = function(e) {
    e === void 0 && (e = {});
    var r = this.localState.prepareContext(e);
    return E(E({}, r), { clientAwareness: this.clientAwareness });
  }, t;
}(), bo = !1, Ml = function() {
  function t(e) {
    var r = this;
    this.resetStoreCallbacks = [], this.clearStoreCallbacks = [];
    var n = e.uri, i = e.credentials, o = e.headers, a = e.cache, s = e.ssrMode, u = s === void 0 ? !1 : s, c = e.ssrForceFetchDelay, l = c === void 0 ? 0 : c, f = e.connectToDevTools, h = f === void 0 ? typeof window == "object" && !window.__APOLLO_CLIENT__ && __DEV__ : f, d = e.queryDeduplication, p = d === void 0 ? !0 : d, v = e.defaultOptions, y = e.assumeImmutableResults, S = y === void 0 ? !1 : y, m = e.resolvers, g = e.typeDefs, _ = e.fragmentMatcher, b = e.name, A = e.version, P = e.link;
    if (P || (P = n ? new Lu({ uri: n, credentials: i, headers: o }) : wt.empty()), !a)
      throw __DEV__ ? new G(`To initialize Apollo Client, you must specify a 'cache' property in the options object. 
For more information, please visit: https://go.apollo.dev/c/docs`) : new G(9);
    if (this.link = P, this.cache = a, this.disableNetworkFetches = u || l > 0, this.queryDeduplication = p, this.defaultOptions = v || /* @__PURE__ */ Object.create(null), this.typeDefs = g, l && setTimeout(function() {
      return r.disableNetworkFetches = !1;
    }, l), this.watchQuery = this.watchQuery.bind(this), this.query = this.query.bind(this), this.mutate = this.mutate.bind(this), this.resetStore = this.resetStore.bind(this), this.reFetchObservableQueries = this.reFetchObservableQueries.bind(this), h && typeof window == "object" && (window.__APOLLO_CLIENT__ = this), !bo && h && __DEV__ && (bo = !0, typeof window < "u" && window.document && window.top === window.self && !window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__)) {
      var F = window.navigator, V = F && F.userAgent, M = void 0;
      typeof V == "string" && (V.indexOf("Chrome/") > -1 ? M = "https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm" : V.indexOf("Firefox/") > -1 && (M = "https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/")), M && __DEV__ && k.log("Download the Apollo DevTools for a better development experience: " + M);
    }
    this.version = uu, this.localState = new Ua({
      cache: a,
      client: this,
      resolvers: m,
      fragmentMatcher: _
    }), this.queryManager = new Fl({
      cache: this.cache,
      link: this.link,
      defaultOptions: this.defaultOptions,
      queryDeduplication: p,
      ssrMode: u,
      clientAwareness: {
        name: b,
        version: A
      },
      localState: this.localState,
      assumeImmutableResults: S,
      onBroadcast: h ? function() {
        r.devToolsHookCb && r.devToolsHookCb({
          action: {},
          state: {
            queries: r.queryManager.getQueryStore(),
            mutations: r.queryManager.mutationStore || {}
          },
          dataWithOptimisticResults: r.cache.extract(!0)
        });
      } : void 0
    });
  }
  return t.prototype.stop = function() {
    this.queryManager.stop();
  }, t.prototype.watchQuery = function(e) {
    return this.defaultOptions.watchQuery && (e = Lr(this.defaultOptions.watchQuery, e)), this.disableNetworkFetches && (e.fetchPolicy === "network-only" || e.fetchPolicy === "cache-and-network") && (e = E(E({}, e), { fetchPolicy: "cache-first" })), this.queryManager.watchQuery(e);
  }, t.prototype.query = function(e) {
    return this.defaultOptions.query && (e = Lr(this.defaultOptions.query, e)), __DEV__ ? k(e.fetchPolicy !== "cache-and-network", "The cache-and-network fetchPolicy does not work with client.query, because client.query can only return a single result. Please use client.watchQuery to receive multiple results from the cache and the network, or consider using a different fetchPolicy, such as cache-first or network-only.") : k(e.fetchPolicy !== "cache-and-network", 10), this.disableNetworkFetches && e.fetchPolicy === "network-only" && (e = E(E({}, e), { fetchPolicy: "cache-first" })), this.queryManager.query(e);
  }, t.prototype.mutate = function(e) {
    return this.defaultOptions.mutate && (e = Lr(this.defaultOptions.mutate, e)), this.queryManager.mutate(e);
  }, t.prototype.subscribe = function(e) {
    return this.queryManager.startGraphQLSubscription(e);
  }, t.prototype.readQuery = function(e, r) {
    return r === void 0 && (r = !1), this.cache.readQuery(e, r);
  }, t.prototype.readFragment = function(e, r) {
    return r === void 0 && (r = !1), this.cache.readFragment(e, r);
  }, t.prototype.writeQuery = function(e) {
    var r = this.cache.writeQuery(e);
    return e.broadcast !== !1 && this.queryManager.broadcastQueries(), r;
  }, t.prototype.writeFragment = function(e) {
    var r = this.cache.writeFragment(e);
    return e.broadcast !== !1 && this.queryManager.broadcastQueries(), r;
  }, t.prototype.__actionHookForDevTools = function(e) {
    this.devToolsHookCb = e;
  }, t.prototype.__requestRaw = function(e) {
    return yn(this.link, e);
  }, t.prototype.resetStore = function() {
    var e = this;
    return Promise.resolve().then(function() {
      return e.queryManager.clearStore({
        discardWatches: !1
      });
    }).then(function() {
      return Promise.all(e.resetStoreCallbacks.map(function(r) {
        return r();
      }));
    }).then(function() {
      return e.reFetchObservableQueries();
    });
  }, t.prototype.clearStore = function() {
    var e = this;
    return Promise.resolve().then(function() {
      return e.queryManager.clearStore({
        discardWatches: !0
      });
    }).then(function() {
      return Promise.all(e.clearStoreCallbacks.map(function(r) {
        return r();
      }));
    });
  }, t.prototype.onResetStore = function(e) {
    var r = this;
    return this.resetStoreCallbacks.push(e), function() {
      r.resetStoreCallbacks = r.resetStoreCallbacks.filter(function(n) {
        return n !== e;
      });
    };
  }, t.prototype.onClearStore = function(e) {
    var r = this;
    return this.clearStoreCallbacks.push(e), function() {
      r.clearStoreCallbacks = r.clearStoreCallbacks.filter(function(n) {
        return n !== e;
      });
    };
  }, t.prototype.reFetchObservableQueries = function(e) {
    return this.queryManager.reFetchObservableQueries(e);
  }, t.prototype.refetchQueries = function(e) {
    var r = this.queryManager.refetchQueries(e), n = [], i = [];
    r.forEach(function(a, s) {
      n.push(s), i.push(a);
    });
    var o = Promise.all(i);
    return o.queries = n, o.results = i, o.catch(function(a) {
      __DEV__ && k.debug("In client.refetchQueries, Promise.all promise rejected with error ".concat(a));
    }), o;
  }, t.prototype.getObservableQueries = function(e) {
    return e === void 0 && (e = "active"), this.queryManager.getObservableQueries(e);
  }, t.prototype.extract = function(e) {
    return this.cache.extract(e);
  }, t.prototype.restore = function(e) {
    return this.cache.restore(e);
  }, t.prototype.addResolvers = function(e) {
    this.localState.addResolvers(e);
  }, t.prototype.setResolvers = function(e) {
    this.localState.setResolvers(e);
  }, t.prototype.getResolvers = function() {
    return this.localState.getResolvers();
  }, t.prototype.setLocalStateFragmentMatcher = function(e) {
    this.localState.setFragmentMatcher(e);
  }, t.prototype.setLink = function(e) {
    this.link = this.queryManager.link = e;
  }, t;
}();
function jl(t) {
  return new wt(function(e, r) {
    var n = et(e, []);
    return new ie(function(i) {
      var o, a = !1;
      return Promise.resolve(n).then(function(s) {
        return t(s, e.getContext());
      }).then(e.setContext).then(function() {
        a || (o = r(e).subscribe({
          next: i.next.bind(i),
          error: i.error.bind(i),
          complete: i.complete.bind(i)
        }));
      }).catch(i.error.bind(i)), function() {
        a = !0, o && o.unsubscribe();
      };
    });
  });
}
const Ll = `${ta}/${Bs._GRAPHQL}`, Vl = new Us(), ql = ma({
  uri: Ll
}), $l = jl((t, { headers: e }) => {
  const r = Vl.get("AUTH_TOKEN", "");
  return {
    headers: {
      ...e,
      Authorization: `Bearer ${r}`,
      // Needed to upload files
      "apollo-require-preflight": !0
    }
  };
});
new Ml({
  cache: new Al(),
  link: $l.concat(ql)
});
function za(t, e) {
  return function() {
    return t.apply(e, arguments);
  };
}
const { toString: Ql } = Object.prototype, { getPrototypeOf: ci } = Object, Rr = ((t) => (e) => {
  const r = Ql.call(e);
  return t[r] || (t[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Me = (t) => (t = t.toLowerCase(), (e) => Rr(e) === t), Cr = (t) => (e) => typeof e === t, { isArray: St } = Array, qt = Cr("undefined");
function Bl(t) {
  return t !== null && !qt(t) && t.constructor !== null && !qt(t.constructor) && ke(t.constructor.isBuffer) && t.constructor.isBuffer(t);
}
const Wa = Me("ArrayBuffer");
function Ul(t) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && Wa(t.buffer), e;
}
const zl = Cr("string"), ke = Cr("function"), Ha = Cr("number"), kr = (t) => t !== null && typeof t == "object", Wl = (t) => t === !0 || t === !1, nr = (t) => {
  if (Rr(t) !== "object")
    return !1;
  const e = ci(t);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t);
}, Hl = Me("Date"), Gl = Me("File"), Yl = Me("Blob"), Jl = Me("FileList"), Xl = (t) => kr(t) && ke(t.pipe), Kl = (t) => {
  let e;
  return t && (typeof FormData == "function" && t instanceof FormData || ke(t.append) && ((e = Rr(t)) === "formdata" || // detect form-data instance
  e === "object" && ke(t.toString) && t.toString() === "[object FormData]"));
}, Zl = Me("URLSearchParams"), ef = (t) => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Ut(t, e, { allOwnKeys: r = !1 } = {}) {
  if (t === null || typeof t > "u")
    return;
  let n, i;
  if (typeof t != "object" && (t = [t]), St(t))
    for (n = 0, i = t.length; n < i; n++)
      e.call(null, t[n], n, t);
  else {
    const o = r ? Object.getOwnPropertyNames(t) : Object.keys(t), a = o.length;
    let s;
    for (n = 0; n < a; n++)
      s = o[n], e.call(null, t[s], s, t);
  }
}
function Ga(t, e) {
  e = e.toLowerCase();
  const r = Object.keys(t);
  let n = r.length, i;
  for (; n-- > 0; )
    if (i = r[n], e === i.toLowerCase())
      return i;
  return null;
}
const Ya = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), Ja = (t) => !qt(t) && t !== Ya;
function Cn() {
  const { caseless: t } = Ja(this) && this || {}, e = {}, r = (n, i) => {
    const o = t && Ga(e, i) || i;
    nr(e[o]) && nr(n) ? e[o] = Cn(e[o], n) : nr(n) ? e[o] = Cn({}, n) : St(n) ? e[o] = n.slice() : e[o] = n;
  };
  for (let n = 0, i = arguments.length; n < i; n++)
    arguments[n] && Ut(arguments[n], r);
  return e;
}
const tf = (t, e, r, { allOwnKeys: n } = {}) => (Ut(e, (i, o) => {
  r && ke(i) ? t[o] = za(i, r) : t[o] = i;
}, { allOwnKeys: n }), t), rf = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t), nf = (t, e, r, n) => {
  t.prototype = Object.create(e.prototype, n), t.prototype.constructor = t, Object.defineProperty(t, "super", {
    value: e.prototype
  }), r && Object.assign(t.prototype, r);
}, of = (t, e, r, n) => {
  let i, o, a;
  const s = {};
  if (e = e || {}, t == null)
    return e;
  do {
    for (i = Object.getOwnPropertyNames(t), o = i.length; o-- > 0; )
      a = i[o], (!n || n(a, t, e)) && !s[a] && (e[a] = t[a], s[a] = !0);
    t = r !== !1 && ci(t);
  } while (t && (!r || r(t, e)) && t !== Object.prototype);
  return e;
}, af = (t, e, r) => {
  t = String(t), (r === void 0 || r > t.length) && (r = t.length), r -= e.length;
  const n = t.indexOf(e, r);
  return n !== -1 && n === r;
}, sf = (t) => {
  if (!t)
    return null;
  if (St(t))
    return t;
  let e = t.length;
  if (!Ha(e))
    return null;
  const r = new Array(e);
  for (; e-- > 0; )
    r[e] = t[e];
  return r;
}, cf = ((t) => (e) => t && e instanceof t)(typeof Uint8Array < "u" && ci(Uint8Array)), uf = (t, e) => {
  const n = (t && t[Symbol.iterator]).call(t);
  let i;
  for (; (i = n.next()) && !i.done; ) {
    const o = i.value;
    e.call(t, o[0], o[1]);
  }
}, lf = (t, e) => {
  let r;
  const n = [];
  for (; (r = t.exec(e)) !== null; )
    n.push(r);
  return n;
}, ff = Me("HTMLFormElement"), hf = (t) => t.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, i) {
    return n.toUpperCase() + i;
  }
), Eo = (({ hasOwnProperty: t }) => (e, r) => t.call(e, r))(Object.prototype), df = Me("RegExp"), Xa = (t, e) => {
  const r = Object.getOwnPropertyDescriptors(t), n = {};
  Ut(r, (i, o) => {
    e(i, o, t) !== !1 && (n[o] = i);
  }), Object.defineProperties(t, n);
}, pf = (t) => {
  Xa(t, (e, r) => {
    if (ke(t) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = t[r];
    if (ke(n)) {
      if (e.enumerable = !1, "writable" in e) {
        e.writable = !1;
        return;
      }
      e.set || (e.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, yf = (t, e) => {
  const r = {}, n = (i) => {
    i.forEach((o) => {
      r[o] = !0;
    });
  };
  return St(t) ? n(t) : n(String(t).split(e)), r;
}, vf = () => {
}, mf = (t, e) => (t = +t, Number.isFinite(t) ? t : e), Gr = "abcdefghijklmnopqrstuvwxyz", wo = "0123456789", Ka = {
  DIGIT: wo,
  ALPHA: Gr,
  ALPHA_DIGIT: Gr + Gr.toUpperCase() + wo
}, gf = (t = 16, e = Ka.ALPHA_DIGIT) => {
  let r = "";
  const { length: n } = e;
  for (; t--; )
    r += e[Math.random() * n | 0];
  return r;
};
function bf(t) {
  return !!(t && ke(t.append) && t[Symbol.toStringTag] === "FormData" && t[Symbol.iterator]);
}
const Ef = (t) => {
  const e = new Array(10), r = (n, i) => {
    if (kr(n)) {
      if (e.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        e[i] = n;
        const o = St(n) ? [] : {};
        return Ut(n, (a, s) => {
          const u = r(a, i + 1);
          !qt(u) && (o[s] = u);
        }), e[i] = void 0, o;
      }
    }
    return n;
  };
  return r(t, 0);
}, wf = Me("AsyncFunction"), _f = (t) => t && (kr(t) || ke(t)) && ke(t.then) && ke(t.catch), O = {
  isArray: St,
  isArrayBuffer: Wa,
  isBuffer: Bl,
  isFormData: Kl,
  isArrayBufferView: Ul,
  isString: zl,
  isNumber: Ha,
  isBoolean: Wl,
  isObject: kr,
  isPlainObject: nr,
  isUndefined: qt,
  isDate: Hl,
  isFile: Gl,
  isBlob: Yl,
  isRegExp: df,
  isFunction: ke,
  isStream: Xl,
  isURLSearchParams: Zl,
  isTypedArray: cf,
  isFileList: Jl,
  forEach: Ut,
  merge: Cn,
  extend: tf,
  trim: ef,
  stripBOM: rf,
  inherits: nf,
  toFlatObject: of,
  kindOf: Rr,
  kindOfTest: Me,
  endsWith: af,
  toArray: sf,
  forEachEntry: uf,
  matchAll: lf,
  isHTMLForm: ff,
  hasOwnProperty: Eo,
  hasOwnProp: Eo,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Xa,
  freezeMethods: pf,
  toObjectSet: yf,
  toCamelCase: hf,
  noop: vf,
  toFiniteNumber: mf,
  findKey: Ga,
  global: Ya,
  isContextDefined: Ja,
  ALPHABET: Ka,
  generateString: gf,
  isSpecCompliantForm: bf,
  toJSONObject: Ef,
  isAsyncFn: wf,
  isThenable: _f
};
function H(t, e, r, n, i) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = t, this.name = "AxiosError", e && (this.code = e), r && (this.config = r), n && (this.request = n), i && (this.response = i);
}
O.inherits(H, Error, {
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
      config: O.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const Za = H.prototype, es = {};
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
].forEach((t) => {
  es[t] = { value: t };
});
Object.defineProperties(H, es);
Object.defineProperty(Za, "isAxiosError", { value: !0 });
H.from = (t, e, r, n, i, o) => {
  const a = Object.create(Za);
  return O.toFlatObject(t, a, function(u) {
    return u !== Error.prototype;
  }, (s) => s !== "isAxiosError"), H.call(a, t.message, e, r, n, i), a.cause = t, a.name = t.name, o && Object.assign(a, o), a;
};
const Sf = null;
function kn(t) {
  return O.isPlainObject(t) || O.isArray(t);
}
function ts(t) {
  return O.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function _o(t, e, r) {
  return t ? t.concat(e).map(function(i, o) {
    return i = ts(i), !r && o ? "[" + i + "]" : i;
  }).join(r ? "." : "") : e;
}
function Of(t) {
  return O.isArray(t) && !t.some(kn);
}
const Tf = O.toFlatObject(O, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function Dr(t, e, r) {
  if (!O.isObject(t))
    throw new TypeError("target must be an object");
  e = e || new FormData(), r = O.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(v, y) {
    return !O.isUndefined(y[v]);
  });
  const n = r.metaTokens, i = r.visitor || l, o = r.dots, a = r.indexes, u = (r.Blob || typeof Blob < "u" && Blob) && O.isSpecCompliantForm(e);
  if (!O.isFunction(i))
    throw new TypeError("visitor must be a function");
  function c(p) {
    if (p === null)
      return "";
    if (O.isDate(p))
      return p.toISOString();
    if (!u && O.isBlob(p))
      throw new H("Blob is not supported. Use a Buffer instead.");
    return O.isArrayBuffer(p) || O.isTypedArray(p) ? u && typeof Blob == "function" ? new Blob([p]) : Buffer.from(p) : p;
  }
  function l(p, v, y) {
    let S = p;
    if (p && !y && typeof p == "object") {
      if (O.endsWith(v, "{}"))
        v = n ? v : v.slice(0, -2), p = JSON.stringify(p);
      else if (O.isArray(p) && Of(p) || (O.isFileList(p) || O.endsWith(v, "[]")) && (S = O.toArray(p)))
        return v = ts(v), S.forEach(function(g, _) {
          !(O.isUndefined(g) || g === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? _o([v], _, o) : a === null ? v : v + "[]",
            c(g)
          );
        }), !1;
    }
    return kn(p) ? !0 : (e.append(_o(y, v, o), c(p)), !1);
  }
  const f = [], h = Object.assign(Tf, {
    defaultVisitor: l,
    convertValue: c,
    isVisitable: kn
  });
  function d(p, v) {
    if (!O.isUndefined(p)) {
      if (f.indexOf(p) !== -1)
        throw Error("Circular reference detected in " + v.join("."));
      f.push(p), O.forEach(p, function(S, m) {
        (!(O.isUndefined(S) || S === null) && i.call(
          e,
          S,
          O.isString(m) ? m.trim() : m,
          v,
          h
        )) === !0 && d(S, v ? v.concat(m) : [m]);
      }), f.pop();
    }
  }
  if (!O.isObject(t))
    throw new TypeError("data must be an object");
  return d(t), e;
}
function So(t) {
  const e = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function(n) {
    return e[n];
  });
}
function ui(t, e) {
  this._pairs = [], t && Dr(t, this, e);
}
const rs = ui.prototype;
rs.append = function(e, r) {
  this._pairs.push([e, r]);
};
rs.toString = function(e) {
  const r = e ? function(n) {
    return e.call(this, n, So);
  } : So;
  return this._pairs.map(function(i) {
    return r(i[0]) + "=" + r(i[1]);
  }, "").join("&");
};
function Rf(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function ns(t, e, r) {
  if (!e)
    return t;
  const n = r && r.encode || Rf, i = r && r.serialize;
  let o;
  if (i ? o = i(e, r) : o = O.isURLSearchParams(e) ? e.toString() : new ui(e, r).toString(n), o) {
    const a = t.indexOf("#");
    a !== -1 && (t = t.slice(0, a)), t += (t.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return t;
}
class Cf {
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
  use(e, r, n) {
    return this.handlers.push({
      fulfilled: e,
      rejected: r,
      synchronous: n ? n.synchronous : !1,
      runWhen: n ? n.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(e) {
    this.handlers[e] && (this.handlers[e] = null);
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
  forEach(e) {
    O.forEach(this.handlers, function(n) {
      n !== null && e(n);
    });
  }
}
const Oo = Cf, is = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, kf = typeof URLSearchParams < "u" ? URLSearchParams : ui, Df = typeof FormData < "u" ? FormData : null, Af = typeof Blob < "u" ? Blob : null, Pf = (() => {
  let t;
  return typeof navigator < "u" && ((t = navigator.product) === "ReactNative" || t === "NativeScript" || t === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), xf = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), Ie = {
  isBrowser: !0,
  classes: {
    URLSearchParams: kf,
    FormData: Df,
    Blob: Af
  },
  isStandardBrowserEnv: Pf,
  isStandardBrowserWebWorkerEnv: xf,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function If(t, e) {
  return Dr(t, new Ie.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, i, o) {
      return Ie.isNode && O.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, e));
}
function Nf(t) {
  return O.matchAll(/\w+|\[(\w*)]/g, t).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
}
function Ff(t) {
  const e = {}, r = Object.keys(t);
  let n;
  const i = r.length;
  let o;
  for (n = 0; n < i; n++)
    o = r[n], e[o] = t[o];
  return e;
}
function os(t) {
  function e(r, n, i, o) {
    let a = r[o++];
    const s = Number.isFinite(+a), u = o >= r.length;
    return a = !a && O.isArray(i) ? i.length : a, u ? (O.hasOwnProp(i, a) ? i[a] = [i[a], n] : i[a] = n, !s) : ((!i[a] || !O.isObject(i[a])) && (i[a] = []), e(r, n, i[a], o) && O.isArray(i[a]) && (i[a] = Ff(i[a])), !s);
  }
  if (O.isFormData(t) && O.isFunction(t.entries)) {
    const r = {};
    return O.forEachEntry(t, (n, i) => {
      e(Nf(n), i, r, 0);
    }), r;
  }
  return null;
}
const Mf = {
  "Content-Type": void 0
};
function jf(t, e, r) {
  if (O.isString(t))
    try {
      return (e || JSON.parse)(t), O.trim(t);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(t);
}
const Ar = {
  transitional: is,
  adapter: ["xhr", "http"],
  transformRequest: [function(e, r) {
    const n = r.getContentType() || "", i = n.indexOf("application/json") > -1, o = O.isObject(e);
    if (o && O.isHTMLForm(e) && (e = new FormData(e)), O.isFormData(e))
      return i && i ? JSON.stringify(os(e)) : e;
    if (O.isArrayBuffer(e) || O.isBuffer(e) || O.isStream(e) || O.isFile(e) || O.isBlob(e))
      return e;
    if (O.isArrayBufferView(e))
      return e.buffer;
    if (O.isURLSearchParams(e))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
    let s;
    if (o) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return If(e, this.formSerializer).toString();
      if ((s = O.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
        const u = this.env && this.env.FormData;
        return Dr(
          s ? { "files[]": e } : e,
          u && new u(),
          this.formSerializer
        );
      }
    }
    return o || i ? (r.setContentType("application/json", !1), jf(e)) : e;
  }],
  transformResponse: [function(e) {
    const r = this.transitional || Ar.transitional, n = r && r.forcedJSONParsing, i = this.responseType === "json";
    if (e && O.isString(e) && (n && !this.responseType || i)) {
      const a = !(r && r.silentJSONParsing) && i;
      try {
        return JSON.parse(e);
      } catch (s) {
        if (a)
          throw s.name === "SyntaxError" ? H.from(s, H.ERR_BAD_RESPONSE, this, null, this.response) : s;
      }
    }
    return e;
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
    FormData: Ie.classes.FormData,
    Blob: Ie.classes.Blob
  },
  validateStatus: function(e) {
    return e >= 200 && e < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*"
    }
  }
};
O.forEach(["delete", "get", "head"], function(e) {
  Ar.headers[e] = {};
});
O.forEach(["post", "put", "patch"], function(e) {
  Ar.headers[e] = O.merge(Mf);
});
const li = Ar, Lf = O.toObjectSet([
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
]), Vf = (t) => {
  const e = {};
  let r, n, i;
  return t && t.split(`
`).forEach(function(a) {
    i = a.indexOf(":"), r = a.substring(0, i).trim().toLowerCase(), n = a.substring(i + 1).trim(), !(!r || e[r] && Lf[r]) && (r === "set-cookie" ? e[r] ? e[r].push(n) : e[r] = [n] : e[r] = e[r] ? e[r] + ", " + n : n);
  }), e;
}, To = Symbol("internals");
function xt(t) {
  return t && String(t).trim().toLowerCase();
}
function ir(t) {
  return t === !1 || t == null ? t : O.isArray(t) ? t.map(ir) : String(t);
}
function qf(t) {
  const e = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(t); )
    e[n[1]] = n[2];
  return e;
}
const $f = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function Yr(t, e, r, n, i) {
  if (O.isFunction(n))
    return n.call(this, e, r);
  if (i && (e = r), !!O.isString(e)) {
    if (O.isString(n))
      return e.indexOf(n) !== -1;
    if (O.isRegExp(n))
      return n.test(e);
  }
}
function Qf(t) {
  return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, r, n) => r.toUpperCase() + n);
}
function Bf(t, e) {
  const r = O.toCamelCase(" " + e);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(t, n + r, {
      value: function(i, o, a) {
        return this[n].call(this, e, i, o, a);
      },
      configurable: !0
    });
  });
}
class Pr {
  constructor(e) {
    e && this.set(e);
  }
  set(e, r, n) {
    const i = this;
    function o(s, u, c) {
      const l = xt(u);
      if (!l)
        throw new Error("header name must be a non-empty string");
      const f = O.findKey(i, l);
      (!f || i[f] === void 0 || c === !0 || c === void 0 && i[f] !== !1) && (i[f || u] = ir(s));
    }
    const a = (s, u) => O.forEach(s, (c, l) => o(c, l, u));
    return O.isPlainObject(e) || e instanceof this.constructor ? a(e, r) : O.isString(e) && (e = e.trim()) && !$f(e) ? a(Vf(e), r) : e != null && o(r, e, n), this;
  }
  get(e, r) {
    if (e = xt(e), e) {
      const n = O.findKey(this, e);
      if (n) {
        const i = this[n];
        if (!r)
          return i;
        if (r === !0)
          return qf(i);
        if (O.isFunction(r))
          return r.call(this, i, n);
        if (O.isRegExp(r))
          return r.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, r) {
    if (e = xt(e), e) {
      const n = O.findKey(this, e);
      return !!(n && this[n] !== void 0 && (!r || Yr(this, this[n], n, r)));
    }
    return !1;
  }
  delete(e, r) {
    const n = this;
    let i = !1;
    function o(a) {
      if (a = xt(a), a) {
        const s = O.findKey(n, a);
        s && (!r || Yr(n, n[s], s, r)) && (delete n[s], i = !0);
      }
    }
    return O.isArray(e) ? e.forEach(o) : o(e), i;
  }
  clear(e) {
    const r = Object.keys(this);
    let n = r.length, i = !1;
    for (; n--; ) {
      const o = r[n];
      (!e || Yr(this, this[o], o, e, !0)) && (delete this[o], i = !0);
    }
    return i;
  }
  normalize(e) {
    const r = this, n = {};
    return O.forEach(this, (i, o) => {
      const a = O.findKey(n, o);
      if (a) {
        r[a] = ir(i), delete r[o];
        return;
      }
      const s = e ? Qf(o) : String(o).trim();
      s !== o && delete r[o], r[s] = ir(i), n[s] = !0;
    }), this;
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    const r = /* @__PURE__ */ Object.create(null);
    return O.forEach(this, (n, i) => {
      n != null && n !== !1 && (r[i] = e && O.isArray(n) ? n.join(", ") : n);
    }), r;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([e, r]) => e + ": " + r).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(e) {
    return e instanceof this ? e : new this(e);
  }
  static concat(e, ...r) {
    const n = new this(e);
    return r.forEach((i) => n.set(i)), n;
  }
  static accessor(e) {
    const n = (this[To] = this[To] = {
      accessors: {}
    }).accessors, i = this.prototype;
    function o(a) {
      const s = xt(a);
      n[s] || (Bf(i, a), n[s] = !0);
    }
    return O.isArray(e) ? e.forEach(o) : o(e), this;
  }
}
Pr.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
O.freezeMethods(Pr.prototype);
O.freezeMethods(Pr);
const Le = Pr;
function Jr(t, e) {
  const r = this || li, n = e || r, i = Le.from(n.headers);
  let o = n.data;
  return O.forEach(t, function(s) {
    o = s.call(r, o, i.normalize(), e ? e.status : void 0);
  }), i.normalize(), o;
}
function as(t) {
  return !!(t && t.__CANCEL__);
}
function zt(t, e, r) {
  H.call(this, t ?? "canceled", H.ERR_CANCELED, e, r), this.name = "CanceledError";
}
O.inherits(zt, H, {
  __CANCEL__: !0
});
function Uf(t, e, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? t(r) : e(new H(
    "Request failed with status code " + r.status,
    [H.ERR_BAD_REQUEST, H.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
const zf = Ie.isStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  function() {
    return {
      write: function(r, n, i, o, a, s) {
        const u = [];
        u.push(r + "=" + encodeURIComponent(n)), O.isNumber(i) && u.push("expires=" + new Date(i).toGMTString()), O.isString(o) && u.push("path=" + o), O.isString(a) && u.push("domain=" + a), s === !0 && u.push("secure"), document.cookie = u.join("; ");
      },
      read: function(r) {
        const n = document.cookie.match(new RegExp("(^|;\\s*)(" + r + ")=([^;]*)"));
        return n ? decodeURIComponent(n[3]) : null;
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
function Wf(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function Hf(t, e) {
  return e ? t.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "") : t;
}
function ss(t, e) {
  return t && !Wf(e) ? Hf(t, e) : e;
}
const Gf = Ie.isStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const e = /(msie|trident)/i.test(navigator.userAgent), r = document.createElement("a");
    let n;
    function i(o) {
      let a = o;
      return e && (r.setAttribute("href", a), a = r.href), r.setAttribute("href", a), {
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
    return n = i(window.location.href), function(a) {
      const s = O.isString(a) ? i(a) : a;
      return s.protocol === n.protocol && s.host === n.host;
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
function Yf(t) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return e && e[1] || "";
}
function Jf(t, e) {
  t = t || 10;
  const r = new Array(t), n = new Array(t);
  let i = 0, o = 0, a;
  return e = e !== void 0 ? e : 1e3, function(u) {
    const c = Date.now(), l = n[o];
    a || (a = c), r[i] = u, n[i] = c;
    let f = o, h = 0;
    for (; f !== i; )
      h += r[f++], f = f % t;
    if (i = (i + 1) % t, i === o && (o = (o + 1) % t), c - a < e)
      return;
    const d = l && c - l;
    return d ? Math.round(h * 1e3 / d) : void 0;
  };
}
function Ro(t, e) {
  let r = 0;
  const n = Jf(50, 250);
  return (i) => {
    const o = i.loaded, a = i.lengthComputable ? i.total : void 0, s = o - r, u = n(s), c = o <= a;
    r = o;
    const l = {
      loaded: o,
      total: a,
      progress: a ? o / a : void 0,
      bytes: s,
      rate: u || void 0,
      estimated: u && a && c ? (a - o) / u : void 0,
      event: i
    };
    l[e ? "download" : "upload"] = !0, t(l);
  };
}
const Xf = typeof XMLHttpRequest < "u", Kf = Xf && function(t) {
  return new Promise(function(r, n) {
    let i = t.data;
    const o = Le.from(t.headers).normalize(), a = t.responseType;
    let s;
    function u() {
      t.cancelToken && t.cancelToken.unsubscribe(s), t.signal && t.signal.removeEventListener("abort", s);
    }
    O.isFormData(i) && (Ie.isStandardBrowserEnv || Ie.isStandardBrowserWebWorkerEnv ? o.setContentType(!1) : o.setContentType("multipart/form-data;", !1));
    let c = new XMLHttpRequest();
    if (t.auth) {
      const d = t.auth.username || "", p = t.auth.password ? unescape(encodeURIComponent(t.auth.password)) : "";
      o.set("Authorization", "Basic " + btoa(d + ":" + p));
    }
    const l = ss(t.baseURL, t.url);
    c.open(t.method.toUpperCase(), ns(l, t.params, t.paramsSerializer), !0), c.timeout = t.timeout;
    function f() {
      if (!c)
        return;
      const d = Le.from(
        "getAllResponseHeaders" in c && c.getAllResponseHeaders()
      ), v = {
        data: !a || a === "text" || a === "json" ? c.responseText : c.response,
        status: c.status,
        statusText: c.statusText,
        headers: d,
        config: t,
        request: c
      };
      Uf(function(S) {
        r(S), u();
      }, function(S) {
        n(S), u();
      }, v), c = null;
    }
    if ("onloadend" in c ? c.onloadend = f : c.onreadystatechange = function() {
      !c || c.readyState !== 4 || c.status === 0 && !(c.responseURL && c.responseURL.indexOf("file:") === 0) || setTimeout(f);
    }, c.onabort = function() {
      c && (n(new H("Request aborted", H.ECONNABORTED, t, c)), c = null);
    }, c.onerror = function() {
      n(new H("Network Error", H.ERR_NETWORK, t, c)), c = null;
    }, c.ontimeout = function() {
      let p = t.timeout ? "timeout of " + t.timeout + "ms exceeded" : "timeout exceeded";
      const v = t.transitional || is;
      t.timeoutErrorMessage && (p = t.timeoutErrorMessage), n(new H(
        p,
        v.clarifyTimeoutError ? H.ETIMEDOUT : H.ECONNABORTED,
        t,
        c
      )), c = null;
    }, Ie.isStandardBrowserEnv) {
      const d = (t.withCredentials || Gf(l)) && t.xsrfCookieName && zf.read(t.xsrfCookieName);
      d && o.set(t.xsrfHeaderName, d);
    }
    i === void 0 && o.setContentType(null), "setRequestHeader" in c && O.forEach(o.toJSON(), function(p, v) {
      c.setRequestHeader(v, p);
    }), O.isUndefined(t.withCredentials) || (c.withCredentials = !!t.withCredentials), a && a !== "json" && (c.responseType = t.responseType), typeof t.onDownloadProgress == "function" && c.addEventListener("progress", Ro(t.onDownloadProgress, !0)), typeof t.onUploadProgress == "function" && c.upload && c.upload.addEventListener("progress", Ro(t.onUploadProgress)), (t.cancelToken || t.signal) && (s = (d) => {
      c && (n(!d || d.type ? new zt(null, t, c) : d), c.abort(), c = null);
    }, t.cancelToken && t.cancelToken.subscribe(s), t.signal && (t.signal.aborted ? s() : t.signal.addEventListener("abort", s)));
    const h = Yf(l);
    if (h && Ie.protocols.indexOf(h) === -1) {
      n(new H("Unsupported protocol " + h + ":", H.ERR_BAD_REQUEST, t));
      return;
    }
    c.send(i || null);
  });
}, or = {
  http: Sf,
  xhr: Kf
};
O.forEach(or, (t, e) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { value: e });
    } catch {
    }
    Object.defineProperty(t, "adapterName", { value: e });
  }
});
const Zf = {
  getAdapter: (t) => {
    t = O.isArray(t) ? t : [t];
    const { length: e } = t;
    let r, n;
    for (let i = 0; i < e && (r = t[i], !(n = O.isString(r) ? or[r.toLowerCase()] : r)); i++)
      ;
    if (!n)
      throw n === !1 ? new H(
        `Adapter ${r} is not supported by the environment`,
        "ERR_NOT_SUPPORT"
      ) : new Error(
        O.hasOwnProp(or, r) ? `Adapter '${r}' is not available in the build` : `Unknown adapter '${r}'`
      );
    if (!O.isFunction(n))
      throw new TypeError("adapter is not a function");
    return n;
  },
  adapters: or
};
function Xr(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new zt(null, t);
}
function Co(t) {
  return Xr(t), t.headers = Le.from(t.headers), t.data = Jr.call(
    t,
    t.transformRequest
  ), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), Zf.getAdapter(t.adapter || li.adapter)(t).then(function(n) {
    return Xr(t), n.data = Jr.call(
      t,
      t.transformResponse,
      n
    ), n.headers = Le.from(n.headers), n;
  }, function(n) {
    return as(n) || (Xr(t), n && n.response && (n.response.data = Jr.call(
      t,
      t.transformResponse,
      n.response
    ), n.response.headers = Le.from(n.response.headers))), Promise.reject(n);
  });
}
const ko = (t) => t instanceof Le ? t.toJSON() : t;
function bt(t, e) {
  e = e || {};
  const r = {};
  function n(c, l, f) {
    return O.isPlainObject(c) && O.isPlainObject(l) ? O.merge.call({ caseless: f }, c, l) : O.isPlainObject(l) ? O.merge({}, l) : O.isArray(l) ? l.slice() : l;
  }
  function i(c, l, f) {
    if (O.isUndefined(l)) {
      if (!O.isUndefined(c))
        return n(void 0, c, f);
    } else
      return n(c, l, f);
  }
  function o(c, l) {
    if (!O.isUndefined(l))
      return n(void 0, l);
  }
  function a(c, l) {
    if (O.isUndefined(l)) {
      if (!O.isUndefined(c))
        return n(void 0, c);
    } else
      return n(void 0, l);
  }
  function s(c, l, f) {
    if (f in e)
      return n(c, l);
    if (f in t)
      return n(void 0, c);
  }
  const u = {
    url: o,
    method: o,
    data: o,
    baseURL: a,
    transformRequest: a,
    transformResponse: a,
    paramsSerializer: a,
    timeout: a,
    timeoutMessage: a,
    withCredentials: a,
    adapter: a,
    responseType: a,
    xsrfCookieName: a,
    xsrfHeaderName: a,
    onUploadProgress: a,
    onDownloadProgress: a,
    decompress: a,
    maxContentLength: a,
    maxBodyLength: a,
    beforeRedirect: a,
    transport: a,
    httpAgent: a,
    httpsAgent: a,
    cancelToken: a,
    socketPath: a,
    responseEncoding: a,
    validateStatus: s,
    headers: (c, l) => i(ko(c), ko(l), !0)
  };
  return O.forEach(Object.keys(Object.assign({}, t, e)), function(l) {
    const f = u[l] || i, h = f(t[l], e[l], l);
    O.isUndefined(h) && f !== s || (r[l] = h);
  }), r;
}
const cs = "1.4.0", fi = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((t, e) => {
  fi[t] = function(n) {
    return typeof n === t || "a" + (e < 1 ? "n " : " ") + t;
  };
});
const Do = {};
fi.transitional = function(e, r, n) {
  function i(o, a) {
    return "[Axios v" + cs + "] Transitional option '" + o + "'" + a + (n ? ". " + n : "");
  }
  return (o, a, s) => {
    if (e === !1)
      throw new H(
        i(a, " has been removed" + (r ? " in " + r : "")),
        H.ERR_DEPRECATED
      );
    return r && !Do[a] && (Do[a] = !0, console.warn(
      i(
        a,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), e ? e(o, a, s) : !0;
  };
};
function eh(t, e, r) {
  if (typeof t != "object")
    throw new H("options must be an object", H.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(t);
  let i = n.length;
  for (; i-- > 0; ) {
    const o = n[i], a = e[o];
    if (a) {
      const s = t[o], u = s === void 0 || a(s, o, t);
      if (u !== !0)
        throw new H("option " + o + " must be " + u, H.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new H("Unknown option " + o, H.ERR_BAD_OPTION);
  }
}
const Dn = {
  assertOptions: eh,
  validators: fi
}, $e = Dn.validators;
class pr {
  constructor(e) {
    this.defaults = e, this.interceptors = {
      request: new Oo(),
      response: new Oo()
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
  request(e, r) {
    typeof e == "string" ? (r = r || {}, r.url = e) : r = e || {}, r = bt(this.defaults, r);
    const { transitional: n, paramsSerializer: i, headers: o } = r;
    n !== void 0 && Dn.assertOptions(n, {
      silentJSONParsing: $e.transitional($e.boolean),
      forcedJSONParsing: $e.transitional($e.boolean),
      clarifyTimeoutError: $e.transitional($e.boolean)
    }, !1), i != null && (O.isFunction(i) ? r.paramsSerializer = {
      serialize: i
    } : Dn.assertOptions(i, {
      encode: $e.function,
      serialize: $e.function
    }, !0)), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let a;
    a = o && O.merge(
      o.common,
      o[r.method]
    ), a && O.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (p) => {
        delete o[p];
      }
    ), r.headers = Le.concat(a, o);
    const s = [];
    let u = !0;
    this.interceptors.request.forEach(function(v) {
      typeof v.runWhen == "function" && v.runWhen(r) === !1 || (u = u && v.synchronous, s.unshift(v.fulfilled, v.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function(v) {
      c.push(v.fulfilled, v.rejected);
    });
    let l, f = 0, h;
    if (!u) {
      const p = [Co.bind(this), void 0];
      for (p.unshift.apply(p, s), p.push.apply(p, c), h = p.length, l = Promise.resolve(r); f < h; )
        l = l.then(p[f++], p[f++]);
      return l;
    }
    h = s.length;
    let d = r;
    for (f = 0; f < h; ) {
      const p = s[f++], v = s[f++];
      try {
        d = p(d);
      } catch (y) {
        v.call(this, y);
        break;
      }
    }
    try {
      l = Co.call(this, d);
    } catch (p) {
      return Promise.reject(p);
    }
    for (f = 0, h = c.length; f < h; )
      l = l.then(c[f++], c[f++]);
    return l;
  }
  getUri(e) {
    e = bt(this.defaults, e);
    const r = ss(e.baseURL, e.url);
    return ns(r, e.params, e.paramsSerializer);
  }
}
O.forEach(["delete", "get", "head", "options"], function(e) {
  pr.prototype[e] = function(r, n) {
    return this.request(bt(n || {}, {
      method: e,
      url: r,
      data: (n || {}).data
    }));
  };
});
O.forEach(["post", "put", "patch"], function(e) {
  function r(n) {
    return function(o, a, s) {
      return this.request(bt(s || {}, {
        method: e,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: a
      }));
    };
  }
  pr.prototype[e] = r(), pr.prototype[e + "Form"] = r(!0);
});
const ar = pr;
class hi {
  constructor(e) {
    if (typeof e != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(o) {
      r = o;
    });
    const n = this;
    this.promise.then((i) => {
      if (!n._listeners)
        return;
      let o = n._listeners.length;
      for (; o-- > 0; )
        n._listeners[o](i);
      n._listeners = null;
    }), this.promise.then = (i) => {
      let o;
      const a = new Promise((s) => {
        n.subscribe(s), o = s;
      }).then(i);
      return a.cancel = function() {
        n.unsubscribe(o);
      }, a;
    }, e(function(o, a, s) {
      n.reason || (n.reason = new zt(o, a, s), r(n.reason));
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
  subscribe(e) {
    if (this.reason) {
      e(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(e) : this._listeners = [e];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(e) {
    if (!this._listeners)
      return;
    const r = this._listeners.indexOf(e);
    r !== -1 && this._listeners.splice(r, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let e;
    return {
      token: new hi(function(i) {
        e = i;
      }),
      cancel: e
    };
  }
}
const th = hi;
function rh(t) {
  return function(r) {
    return t.apply(null, r);
  };
}
function nh(t) {
  return O.isObject(t) && t.isAxiosError === !0;
}
const An = {
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
Object.entries(An).forEach(([t, e]) => {
  An[e] = t;
});
const ih = An;
function us(t) {
  const e = new ar(t), r = za(ar.prototype.request, e);
  return O.extend(r, ar.prototype, e, { allOwnKeys: !0 }), O.extend(r, e, null, { allOwnKeys: !0 }), r.create = function(i) {
    return us(bt(t, i));
  }, r;
}
const ye = us(li);
ye.Axios = ar;
ye.CanceledError = zt;
ye.CancelToken = th;
ye.isCancel = as;
ye.VERSION = cs;
ye.toFormData = Dr;
ye.AxiosError = H;
ye.Cancel = ye.CanceledError;
ye.all = function(e) {
  return Promise.all(e);
};
ye.spread = rh;
ye.isAxiosError = nh;
ye.mergeConfig = bt;
ye.AxiosHeaders = Le;
ye.formToJSON = (t) => os(O.isHTMLForm(t) ? new FormData(t) : t);
ye.HttpStatusCode = ih;
ye.default = ye;
const oh = ye;
oh.create({
  baseURL: ta,
  withCredentials: !0
});
const ah = (t = !1) => {
  const [e, r] = Ko(t);
  return {
    off: () => r(!1),
    on: () => r(!0),
    toggle: () => r(!e),
    val: e
  };
}, ls = ({ when: t, children: e }) => t ? e : null, fs = Zo({}), sh = async () => Promise.all([
  import("./react-spring_web.modern-d55cb301.mjs"),
  import("./use-gesture-react.esm-862244eb.mjs")
]), hs = ({ children: t }) => {
  const e = ur(), r = ur(), n = ah(), i = async () => {
    const [a, s] = await sh();
    e.current = a, r.current = s, n.on();
  };
  qn(() => {
    i();
  }, []);
  const o = Ms(
    () => ({
      Spring: e.current,
      Gesture: r.current,
      isLoaded: n.val
    }),
    [n.val]
  );
  return /* @__PURE__ */ we(fs.Provider, { value: o, children: /* @__PURE__ */ we(ls, { when: n.val, children: t }) });
}, ds = () => Qt(fs);
var _e;
_e = { __e: function(t, e, r, n) {
  for (var i, o, a; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((o = i.constructor) && o.getDerivedStateFromError != null && (i.setState(o.getDerivedStateFromError(t)), a = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, n || {}), a = i.__d), a)
          return i.__E = i;
      } catch (s) {
        t = s;
      }
  throw t;
} }, typeof Promise == "function" && Promise.prototype.then.bind(Promise.resolve());
var xe, Kr, Ao, ps = [], Zr = [], Po = _e.__b, xo = _e.__r, Io = _e.diffed, No = _e.__c, Fo = _e.unmount;
function ch() {
  for (var t; t = ps.shift(); )
    if (t.__P && t.__H)
      try {
        t.__H.__h.forEach(sr), t.__H.__h.forEach(Pn), t.__H.__h = [];
      } catch (e) {
        t.__H.__h = [], _e.__e(e, t.__v);
      }
}
_e.__b = function(t) {
  xe = null, Po && Po(t);
}, _e.__r = function(t) {
  xo && xo(t);
  var e = (xe = t.__c).__H;
  e && (Kr === xe ? (e.__h = [], xe.__h = [], e.__.forEach(function(r) {
    r.__N && (r.__ = r.__N), r.__V = Zr, r.__N = r.i = void 0;
  })) : (e.__h.forEach(sr), e.__h.forEach(Pn), e.__h = [])), Kr = xe;
}, _e.diffed = function(t) {
  Io && Io(t);
  var e = t.__c;
  e && e.__H && (e.__H.__h.length && (ps.push(e) !== 1 && Ao === _e.requestAnimationFrame || ((Ao = _e.requestAnimationFrame) || uh)(ch)), e.__H.__.forEach(function(r) {
    r.i && (r.__H = r.i), r.__V !== Zr && (r.__ = r.__V), r.i = void 0, r.__V = Zr;
  })), Kr = xe = null;
}, _e.__c = function(t, e) {
  e.some(function(r) {
    try {
      r.__h.forEach(sr), r.__h = r.__h.filter(function(n) {
        return !n.__ || Pn(n);
      });
    } catch (n) {
      e.some(function(i) {
        i.__h && (i.__h = []);
      }), e = [], _e.__e(n, r.__v);
    }
  }), No && No(t, e);
}, _e.unmount = function(t) {
  Fo && Fo(t);
  var e, r = t.__c;
  r && r.__H && (r.__H.__.forEach(function(n) {
    try {
      sr(n);
    } catch (i) {
      e = i;
    }
  }), r.__H = void 0, e && _e.__e(e, r.__v));
};
var Mo = typeof requestAnimationFrame == "function";
function uh(t) {
  var e, r = function() {
    clearTimeout(n), Mo && cancelAnimationFrame(e), setTimeout(t);
  }, n = setTimeout(r, 100);
  Mo && (e = requestAnimationFrame(r));
}
function sr(t) {
  var e = xe, r = t.__c;
  typeof r == "function" && (t.__c = void 0, r()), xe = e;
}
function Pn(t) {
  var e = xe;
  t.__c = t.__(), xe = e;
}
Zo(
  {}
);
var xn = { exports: {} }, Y = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jo;
function lh() {
  if (jo)
    return Y;
  jo = 1;
  var t = Symbol.for("react.element"), e = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), u = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), d = Symbol.for("react.offscreen"), p;
  p = Symbol.for("react.module.reference");
  function v(y) {
    if (typeof y == "object" && y !== null) {
      var S = y.$$typeof;
      switch (S) {
        case t:
          switch (y = y.type, y) {
            case r:
            case i:
            case n:
            case c:
            case l:
              return y;
            default:
              switch (y = y && y.$$typeof, y) {
                case s:
                case a:
                case u:
                case h:
                case f:
                case o:
                  return y;
                default:
                  return S;
              }
          }
        case e:
          return S;
      }
    }
  }
  return Y.ContextConsumer = a, Y.ContextProvider = o, Y.Element = t, Y.ForwardRef = u, Y.Fragment = r, Y.Lazy = h, Y.Memo = f, Y.Portal = e, Y.Profiler = i, Y.StrictMode = n, Y.Suspense = c, Y.SuspenseList = l, Y.isAsyncMode = function() {
    return !1;
  }, Y.isConcurrentMode = function() {
    return !1;
  }, Y.isContextConsumer = function(y) {
    return v(y) === a;
  }, Y.isContextProvider = function(y) {
    return v(y) === o;
  }, Y.isElement = function(y) {
    return typeof y == "object" && y !== null && y.$$typeof === t;
  }, Y.isForwardRef = function(y) {
    return v(y) === u;
  }, Y.isFragment = function(y) {
    return v(y) === r;
  }, Y.isLazy = function(y) {
    return v(y) === h;
  }, Y.isMemo = function(y) {
    return v(y) === f;
  }, Y.isPortal = function(y) {
    return v(y) === e;
  }, Y.isProfiler = function(y) {
    return v(y) === i;
  }, Y.isStrictMode = function(y) {
    return v(y) === n;
  }, Y.isSuspense = function(y) {
    return v(y) === c;
  }, Y.isSuspenseList = function(y) {
    return v(y) === l;
  }, Y.isValidElementType = function(y) {
    return typeof y == "string" || typeof y == "function" || y === r || y === i || y === n || y === c || y === l || y === d || typeof y == "object" && y !== null && (y.$$typeof === h || y.$$typeof === f || y.$$typeof === o || y.$$typeof === a || y.$$typeof === u || y.$$typeof === p || y.getModuleId !== void 0);
  }, Y.typeOf = v, Y;
}
var J = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lo;
function fh() {
  return Lo || (Lo = 1, process.env.NODE_ENV !== "production" && function() {
    var t = Symbol.for("react.element"), e = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), u = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), d = Symbol.for("react.offscreen"), p = !1, v = !1, y = !1, S = !1, m = !1, g;
    g = Symbol.for("react.module.reference");
    function _(I) {
      return !!(typeof I == "string" || typeof I == "function" || I === r || I === i || m || I === n || I === c || I === l || S || I === d || p || v || y || typeof I == "object" && I !== null && (I.$$typeof === h || I.$$typeof === f || I.$$typeof === o || I.$$typeof === a || I.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      I.$$typeof === g || I.getModuleId !== void 0));
    }
    function b(I) {
      if (typeof I == "object" && I !== null) {
        var q = I.$$typeof;
        switch (q) {
          case t:
            var fe = I.type;
            switch (fe) {
              case r:
              case i:
              case n:
              case c:
              case l:
                return fe;
              default:
                var W = fe && fe.$$typeof;
                switch (W) {
                  case s:
                  case a:
                  case u:
                  case h:
                  case f:
                  case o:
                    return W;
                  default:
                    return q;
                }
            }
          case e:
            return q;
        }
      }
    }
    var A = a, P = o, F = t, V = u, M = r, re = h, ee = f, Q = e, oe = i, ce = n, Se = c, de = l, ue = !1, Oe = !1;
    function Te(I) {
      return ue || (ue = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function Re(I) {
      return Oe || (Oe = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function C(I) {
      return b(I) === a;
    }
    function x(I) {
      return b(I) === o;
    }
    function D(I) {
      return typeof I == "object" && I !== null && I.$$typeof === t;
    }
    function j(I) {
      return b(I) === u;
    }
    function w(I) {
      return b(I) === r;
    }
    function U(I) {
      return b(I) === h;
    }
    function R(I) {
      return b(I) === f;
    }
    function ne(I) {
      return b(I) === e;
    }
    function z(I) {
      return b(I) === i;
    }
    function B(I) {
      return b(I) === n;
    }
    function T(I) {
      return b(I) === c;
    }
    function se(I) {
      return b(I) === l;
    }
    J.ContextConsumer = A, J.ContextProvider = P, J.Element = F, J.ForwardRef = V, J.Fragment = M, J.Lazy = re, J.Memo = ee, J.Portal = Q, J.Profiler = oe, J.StrictMode = ce, J.Suspense = Se, J.SuspenseList = de, J.isAsyncMode = Te, J.isConcurrentMode = Re, J.isContextConsumer = C, J.isContextProvider = x, J.isElement = D, J.isForwardRef = j, J.isFragment = w, J.isLazy = U, J.isMemo = R, J.isPortal = ne, J.isProfiler = z, J.isStrictMode = B, J.isSuspense = T, J.isSuspenseList = se, J.isValidElementType = _, J.typeOf = b;
  }()), J;
}
process.env.NODE_ENV === "production" ? xn.exports = lh() : xn.exports = fh();
var di = xn.exports;
function hh(t) {
  function e(C, x, D, j, w) {
    for (var U = 0, R = 0, ne = 0, z = 0, B, T, se = 0, I = 0, q, fe = q = B = 0, W = 0, ge = 0, Rt = 0, be = 0, Wt = D.length, Ct = Wt - 1, De, L = "", he = "", xr = "", Ir = "", qe; W < Wt; ) {
      if (T = D.charCodeAt(W), W === Ct && R + z + ne + U !== 0 && (R !== 0 && (T = R === 47 ? 10 : 47), z = ne = U = 0, Wt++, Ct++), R + z + ne + U === 0) {
        if (W === Ct && (0 < ge && (L = L.replace(h, "")), 0 < L.trim().length)) {
          switch (T) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              L += D.charAt(W);
          }
          T = 59;
        }
        switch (T) {
          case 123:
            for (L = L.trim(), B = L.charCodeAt(0), q = 1, be = ++W; W < Wt; ) {
              switch (T = D.charCodeAt(W)) {
                case 123:
                  q++;
                  break;
                case 125:
                  q--;
                  break;
                case 47:
                  switch (T = D.charCodeAt(W + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (fe = W + 1; fe < Ct; ++fe)
                          switch (D.charCodeAt(fe)) {
                            case 47:
                              if (T === 42 && D.charCodeAt(fe - 1) === 42 && W + 2 !== fe) {
                                W = fe + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (T === 47) {
                                W = fe + 1;
                                break e;
                              }
                          }
                        W = fe;
                      }
                  }
                  break;
                case 91:
                  T++;
                case 40:
                  T++;
                case 34:
                case 39:
                  for (; W++ < Ct && D.charCodeAt(W) !== T; )
                    ;
              }
              if (q === 0)
                break;
              W++;
            }
            switch (q = D.substring(be, W), B === 0 && (B = (L = L.replace(f, "").trim()).charCodeAt(0)), B) {
              case 64:
                switch (0 < ge && (L = L.replace(h, "")), T = L.charCodeAt(1), T) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    ge = x;
                    break;
                  default:
                    ge = Se;
                }
                if (q = e(x, ge, q, T, w + 1), be = q.length, 0 < ue && (ge = r(Se, L, Rt), qe = s(3, q, ge, x, Q, ee, be, T, w, j), L = ge.join(""), qe !== void 0 && (be = (q = qe.trim()).length) === 0 && (T = 0, q = "")), 0 < be)
                  switch (T) {
                    case 115:
                      L = L.replace(A, a);
                    case 100:
                    case 109:
                    case 45:
                      q = L + "{" + q + "}";
                      break;
                    case 107:
                      L = L.replace(m, "$1 $2"), q = L + "{" + q + "}", q = ce === 1 || ce === 2 && o("@" + q, 3) ? "@-webkit-" + q + "@" + q : "@" + q;
                      break;
                    default:
                      q = L + q, j === 112 && (q = (he += q, ""));
                  }
                else
                  q = "";
                break;
              default:
                q = e(x, r(x, L, Rt), q, j, w + 1);
            }
            xr += q, q = Rt = ge = fe = B = 0, L = "", T = D.charCodeAt(++W);
            break;
          case 125:
          case 59:
            if (L = (0 < ge ? L.replace(h, "") : L).trim(), 1 < (be = L.length))
              switch (fe === 0 && (B = L.charCodeAt(0), B === 45 || 96 < B && 123 > B) && (be = (L = L.replace(" ", ":")).length), 0 < ue && (qe = s(1, L, x, C, Q, ee, he.length, j, w, j)) !== void 0 && (be = (L = qe.trim()).length) === 0 && (L = "\0\0"), B = L.charCodeAt(0), T = L.charCodeAt(1), B) {
                case 0:
                  break;
                case 64:
                  if (T === 105 || T === 99) {
                    Ir += L + D.charAt(W);
                    break;
                  }
                default:
                  L.charCodeAt(be - 1) !== 58 && (he += i(L, B, T, L.charCodeAt(2)));
              }
            Rt = ge = fe = B = 0, L = "", T = D.charCodeAt(++W);
        }
      }
      switch (T) {
        case 13:
        case 10:
          R === 47 ? R = 0 : 1 + B === 0 && j !== 107 && 0 < L.length && (ge = 1, L += "\0"), 0 < ue * Te && s(0, L, x, C, Q, ee, he.length, j, w, j), ee = 1, Q++;
          break;
        case 59:
        case 125:
          if (R + z + ne + U === 0) {
            ee++;
            break;
          }
        default:
          switch (ee++, De = D.charAt(W), T) {
            case 9:
            case 32:
              if (z + U + R === 0)
                switch (se) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    De = "";
                    break;
                  default:
                    T !== 32 && (De = " ");
                }
              break;
            case 0:
              De = "\\0";
              break;
            case 12:
              De = "\\f";
              break;
            case 11:
              De = "\\v";
              break;
            case 38:
              z + R + U === 0 && (ge = Rt = 1, De = "\f" + De);
              break;
            case 108:
              if (z + R + U + oe === 0 && 0 < fe)
                switch (W - fe) {
                  case 2:
                    se === 112 && D.charCodeAt(W - 3) === 58 && (oe = se);
                  case 8:
                    I === 111 && (oe = I);
                }
              break;
            case 58:
              z + R + U === 0 && (fe = W);
              break;
            case 44:
              R + ne + z + U === 0 && (ge = 1, De += "\r");
              break;
            case 34:
            case 39:
              R === 0 && (z = z === T ? 0 : z === 0 ? T : z);
              break;
            case 91:
              z + R + ne === 0 && U++;
              break;
            case 93:
              z + R + ne === 0 && U--;
              break;
            case 41:
              z + R + U === 0 && ne--;
              break;
            case 40:
              if (z + R + U === 0) {
                if (B === 0)
                  switch (2 * se + 3 * I) {
                    case 533:
                      break;
                    default:
                      B = 1;
                  }
                ne++;
              }
              break;
            case 64:
              R + ne + z + U + fe + q === 0 && (q = 1);
              break;
            case 42:
            case 47:
              if (!(0 < z + U + ne))
                switch (R) {
                  case 0:
                    switch (2 * T + 3 * D.charCodeAt(W + 1)) {
                      case 235:
                        R = 47;
                        break;
                      case 220:
                        be = W, R = 42;
                    }
                    break;
                  case 42:
                    T === 47 && se === 42 && be + 2 !== W && (D.charCodeAt(be + 2) === 33 && (he += D.substring(be, W + 1)), De = "", R = 0);
                }
          }
          R === 0 && (L += De);
      }
      I = se, se = T, W++;
    }
    if (be = he.length, 0 < be) {
      if (ge = x, 0 < ue && (qe = s(2, he, ge, C, Q, ee, be, j, w, j), qe !== void 0 && (he = qe).length === 0))
        return Ir + he + xr;
      if (he = ge.join(",") + "{" + he + "}", ce * oe !== 0) {
        switch (ce !== 2 || o(he, 2) || (oe = 0), oe) {
          case 111:
            he = he.replace(_, ":-moz-$1") + he;
            break;
          case 112:
            he = he.replace(g, "::-webkit-input-$1") + he.replace(g, "::-moz-$1") + he.replace(g, ":-ms-input-$1") + he;
        }
        oe = 0;
      }
    }
    return Ir + he + xr;
  }
  function r(C, x, D) {
    var j = x.trim().split(y);
    x = j;
    var w = j.length, U = C.length;
    switch (U) {
      case 0:
      case 1:
        var R = 0;
        for (C = U === 0 ? "" : C[0] + " "; R < w; ++R)
          x[R] = n(C, x[R], D).trim();
        break;
      default:
        var ne = R = 0;
        for (x = []; R < w; ++R)
          for (var z = 0; z < U; ++z)
            x[ne++] = n(C[z] + " ", j[R], D).trim();
    }
    return x;
  }
  function n(C, x, D) {
    var j = x.charCodeAt(0);
    switch (33 > j && (j = (x = x.trim()).charCodeAt(0)), j) {
      case 38:
        return x.replace(S, "$1" + C.trim());
      case 58:
        return C.trim() + x.replace(S, "$1" + C.trim());
      default:
        if (0 < 1 * D && 0 < x.indexOf("\f"))
          return x.replace(S, (C.charCodeAt(0) === 58 ? "" : "$1") + C.trim());
    }
    return C + x;
  }
  function i(C, x, D, j) {
    var w = C + ";", U = 2 * x + 3 * D + 4 * j;
    if (U === 944) {
      C = w.indexOf(":", 9) + 1;
      var R = w.substring(C, w.length - 1).trim();
      return R = w.substring(0, C).trim() + R + ";", ce === 1 || ce === 2 && o(R, 1) ? "-webkit-" + R + R : R;
    }
    if (ce === 0 || ce === 2 && !o(w, 1))
      return w;
    switch (U) {
      case 1015:
        return w.charCodeAt(10) === 97 ? "-webkit-" + w + w : w;
      case 951:
        return w.charCodeAt(3) === 116 ? "-webkit-" + w + w : w;
      case 963:
        return w.charCodeAt(5) === 110 ? "-webkit-" + w + w : w;
      case 1009:
        if (w.charCodeAt(4) !== 100)
          break;
      case 969:
      case 942:
        return "-webkit-" + w + w;
      case 978:
        return "-webkit-" + w + "-moz-" + w + w;
      case 1019:
      case 983:
        return "-webkit-" + w + "-moz-" + w + "-ms-" + w + w;
      case 883:
        if (w.charCodeAt(8) === 45)
          return "-webkit-" + w + w;
        if (0 < w.indexOf("image-set(", 11))
          return w.replace(re, "$1-webkit-$2") + w;
        break;
      case 932:
        if (w.charCodeAt(4) === 45)
          switch (w.charCodeAt(5)) {
            case 103:
              return "-webkit-box-" + w.replace("-grow", "") + "-webkit-" + w + "-ms-" + w.replace("grow", "positive") + w;
            case 115:
              return "-webkit-" + w + "-ms-" + w.replace("shrink", "negative") + w;
            case 98:
              return "-webkit-" + w + "-ms-" + w.replace("basis", "preferred-size") + w;
          }
        return "-webkit-" + w + "-ms-" + w + w;
      case 964:
        return "-webkit-" + w + "-ms-flex-" + w + w;
      case 1023:
        if (w.charCodeAt(8) !== 99)
          break;
        return R = w.substring(w.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + R + "-webkit-" + w + "-ms-flex-pack" + R + w;
      case 1005:
        return p.test(w) ? w.replace(d, ":-webkit-") + w.replace(d, ":-moz-") + w : w;
      case 1e3:
        switch (R = w.substring(13).trim(), x = R.indexOf("-") + 1, R.charCodeAt(0) + R.charCodeAt(x)) {
          case 226:
            R = w.replace(b, "tb");
            break;
          case 232:
            R = w.replace(b, "tb-rl");
            break;
          case 220:
            R = w.replace(b, "lr");
            break;
          default:
            return w;
        }
        return "-webkit-" + w + "-ms-" + R + w;
      case 1017:
        if (w.indexOf("sticky", 9) === -1)
          break;
      case 975:
        switch (x = (w = C).length - 10, R = (w.charCodeAt(x) === 33 ? w.substring(0, x) : w).substring(C.indexOf(":", 7) + 1).trim(), U = R.charCodeAt(0) + (R.charCodeAt(7) | 0)) {
          case 203:
            if (111 > R.charCodeAt(8))
              break;
          case 115:
            w = w.replace(R, "-webkit-" + R) + ";" + w;
            break;
          case 207:
          case 102:
            w = w.replace(R, "-webkit-" + (102 < U ? "inline-" : "") + "box") + ";" + w.replace(R, "-webkit-" + R) + ";" + w.replace(R, "-ms-" + R + "box") + ";" + w;
        }
        return w + ";";
      case 938:
        if (w.charCodeAt(5) === 45)
          switch (w.charCodeAt(6)) {
            case 105:
              return R = w.replace("-items", ""), "-webkit-" + w + "-webkit-box-" + R + "-ms-flex-" + R + w;
            case 115:
              return "-webkit-" + w + "-ms-flex-item-" + w.replace(F, "") + w;
            default:
              return "-webkit-" + w + "-ms-flex-line-pack" + w.replace("align-content", "").replace(F, "") + w;
          }
        break;
      case 973:
      case 989:
        if (w.charCodeAt(3) !== 45 || w.charCodeAt(4) === 122)
          break;
      case 931:
      case 953:
        if (M.test(C) === !0)
          return (R = C.substring(C.indexOf(":") + 1)).charCodeAt(0) === 115 ? i(C.replace("stretch", "fill-available"), x, D, j).replace(":fill-available", ":stretch") : w.replace(R, "-webkit-" + R) + w.replace(R, "-moz-" + R.replace("fill-", "")) + w;
        break;
      case 962:
        if (w = "-webkit-" + w + (w.charCodeAt(5) === 102 ? "-ms-" + w : "") + w, D + j === 211 && w.charCodeAt(13) === 105 && 0 < w.indexOf("transform", 10))
          return w.substring(0, w.indexOf(";", 27) + 1).replace(v, "$1-webkit-$2") + w;
    }
    return w;
  }
  function o(C, x) {
    var D = C.indexOf(x === 1 ? ":" : "{"), j = C.substring(0, x !== 3 ? D : 10);
    return D = C.substring(D + 1, C.length - 1), Oe(x !== 2 ? j : j.replace(V, "$1"), D, x);
  }
  function a(C, x) {
    var D = i(x, x.charCodeAt(0), x.charCodeAt(1), x.charCodeAt(2));
    return D !== x + ";" ? D.replace(P, " or ($1)").substring(4) : "(" + x + ")";
  }
  function s(C, x, D, j, w, U, R, ne, z, B) {
    for (var T = 0, se = x, I; T < ue; ++T)
      switch (I = de[T].call(l, C, se, D, j, w, U, R, ne, z, B)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          se = I;
      }
    if (se !== x)
      return se;
  }
  function u(C) {
    switch (C) {
      case void 0:
      case null:
        ue = de.length = 0;
        break;
      default:
        if (typeof C == "function")
          de[ue++] = C;
        else if (typeof C == "object")
          for (var x = 0, D = C.length; x < D; ++x)
            u(C[x]);
        else
          Te = !!C | 0;
    }
    return u;
  }
  function c(C) {
    return C = C.prefix, C !== void 0 && (Oe = null, C ? typeof C != "function" ? ce = 1 : (ce = 2, Oe = C) : ce = 0), c;
  }
  function l(C, x) {
    var D = C;
    if (33 > D.charCodeAt(0) && (D = D.trim()), Re = D, D = [Re], 0 < ue) {
      var j = s(-1, x, D, D, Q, ee, 0, 0, 0, 0);
      j !== void 0 && typeof j == "string" && (x = j);
    }
    var w = e(Se, D, x, 0, 0);
    return 0 < ue && (j = s(-2, w, D, D, Q, ee, w.length, 0, 0, 0), j !== void 0 && (w = j)), Re = "", oe = 0, ee = Q = 1, w;
  }
  var f = /^\0+/g, h = /[\0\r\f]/g, d = /: */g, p = /zoo|gra/, v = /([,: ])(transform)/g, y = /,\r+?/g, S = /([\t\r\n ])*\f?&/g, m = /@(k\w+)\s*(\S*)\s*/, g = /::(place)/g, _ = /:(read-only)/g, b = /[svh]\w+-[tblr]{2}/, A = /\(\s*(.*)\s*\)/g, P = /([\s\S]*?);/g, F = /-self|flex-/g, V = /[^]*?(:[rp][el]a[\w-]+)[^]*/, M = /stretch|:\s*\w+\-(?:conte|avail)/, re = /([^-])(image-set\()/, ee = 1, Q = 1, oe = 0, ce = 1, Se = [], de = [], ue = 0, Oe = null, Te = 0, Re = "";
  return l.use = u, l.set = c, t !== void 0 && c(t), l;
}
var dh = {
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
function ph(t) {
  var e = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return e[r] === void 0 && (e[r] = t(r)), e[r];
  };
}
var yh = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Vo = /* @__PURE__ */ ph(
  function(t) {
    return yh.test(t) || t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && t.charCodeAt(2) < 91;
  }
  /* Z+1 */
), In = { exports: {} }, X = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qo;
function vh() {
  if (qo)
    return X;
  qo = 1;
  var t = typeof Symbol == "function" && Symbol.for, e = t ? Symbol.for("react.element") : 60103, r = t ? Symbol.for("react.portal") : 60106, n = t ? Symbol.for("react.fragment") : 60107, i = t ? Symbol.for("react.strict_mode") : 60108, o = t ? Symbol.for("react.profiler") : 60114, a = t ? Symbol.for("react.provider") : 60109, s = t ? Symbol.for("react.context") : 60110, u = t ? Symbol.for("react.async_mode") : 60111, c = t ? Symbol.for("react.concurrent_mode") : 60111, l = t ? Symbol.for("react.forward_ref") : 60112, f = t ? Symbol.for("react.suspense") : 60113, h = t ? Symbol.for("react.suspense_list") : 60120, d = t ? Symbol.for("react.memo") : 60115, p = t ? Symbol.for("react.lazy") : 60116, v = t ? Symbol.for("react.block") : 60121, y = t ? Symbol.for("react.fundamental") : 60117, S = t ? Symbol.for("react.responder") : 60118, m = t ? Symbol.for("react.scope") : 60119;
  function g(b) {
    if (typeof b == "object" && b !== null) {
      var A = b.$$typeof;
      switch (A) {
        case e:
          switch (b = b.type, b) {
            case u:
            case c:
            case n:
            case o:
            case i:
            case f:
              return b;
            default:
              switch (b = b && b.$$typeof, b) {
                case s:
                case l:
                case p:
                case d:
                case a:
                  return b;
                default:
                  return A;
              }
          }
        case r:
          return A;
      }
    }
  }
  function _(b) {
    return g(b) === c;
  }
  return X.AsyncMode = u, X.ConcurrentMode = c, X.ContextConsumer = s, X.ContextProvider = a, X.Element = e, X.ForwardRef = l, X.Fragment = n, X.Lazy = p, X.Memo = d, X.Portal = r, X.Profiler = o, X.StrictMode = i, X.Suspense = f, X.isAsyncMode = function(b) {
    return _(b) || g(b) === u;
  }, X.isConcurrentMode = _, X.isContextConsumer = function(b) {
    return g(b) === s;
  }, X.isContextProvider = function(b) {
    return g(b) === a;
  }, X.isElement = function(b) {
    return typeof b == "object" && b !== null && b.$$typeof === e;
  }, X.isForwardRef = function(b) {
    return g(b) === l;
  }, X.isFragment = function(b) {
    return g(b) === n;
  }, X.isLazy = function(b) {
    return g(b) === p;
  }, X.isMemo = function(b) {
    return g(b) === d;
  }, X.isPortal = function(b) {
    return g(b) === r;
  }, X.isProfiler = function(b) {
    return g(b) === o;
  }, X.isStrictMode = function(b) {
    return g(b) === i;
  }, X.isSuspense = function(b) {
    return g(b) === f;
  }, X.isValidElementType = function(b) {
    return typeof b == "string" || typeof b == "function" || b === n || b === c || b === o || b === i || b === f || b === h || typeof b == "object" && b !== null && (b.$$typeof === p || b.$$typeof === d || b.$$typeof === a || b.$$typeof === s || b.$$typeof === l || b.$$typeof === y || b.$$typeof === S || b.$$typeof === m || b.$$typeof === v);
  }, X.typeOf = g, X;
}
var K = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $o;
function mh() {
  return $o || ($o = 1, process.env.NODE_ENV !== "production" && function() {
    var t = typeof Symbol == "function" && Symbol.for, e = t ? Symbol.for("react.element") : 60103, r = t ? Symbol.for("react.portal") : 60106, n = t ? Symbol.for("react.fragment") : 60107, i = t ? Symbol.for("react.strict_mode") : 60108, o = t ? Symbol.for("react.profiler") : 60114, a = t ? Symbol.for("react.provider") : 60109, s = t ? Symbol.for("react.context") : 60110, u = t ? Symbol.for("react.async_mode") : 60111, c = t ? Symbol.for("react.concurrent_mode") : 60111, l = t ? Symbol.for("react.forward_ref") : 60112, f = t ? Symbol.for("react.suspense") : 60113, h = t ? Symbol.for("react.suspense_list") : 60120, d = t ? Symbol.for("react.memo") : 60115, p = t ? Symbol.for("react.lazy") : 60116, v = t ? Symbol.for("react.block") : 60121, y = t ? Symbol.for("react.fundamental") : 60117, S = t ? Symbol.for("react.responder") : 60118, m = t ? Symbol.for("react.scope") : 60119;
    function g(T) {
      return typeof T == "string" || typeof T == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      T === n || T === c || T === o || T === i || T === f || T === h || typeof T == "object" && T !== null && (T.$$typeof === p || T.$$typeof === d || T.$$typeof === a || T.$$typeof === s || T.$$typeof === l || T.$$typeof === y || T.$$typeof === S || T.$$typeof === m || T.$$typeof === v);
    }
    function _(T) {
      if (typeof T == "object" && T !== null) {
        var se = T.$$typeof;
        switch (se) {
          case e:
            var I = T.type;
            switch (I) {
              case u:
              case c:
              case n:
              case o:
              case i:
              case f:
                return I;
              default:
                var q = I && I.$$typeof;
                switch (q) {
                  case s:
                  case l:
                  case p:
                  case d:
                  case a:
                    return q;
                  default:
                    return se;
                }
            }
          case r:
            return se;
        }
      }
    }
    var b = u, A = c, P = s, F = a, V = e, M = l, re = n, ee = p, Q = d, oe = r, ce = o, Se = i, de = f, ue = !1;
    function Oe(T) {
      return ue || (ue = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), Te(T) || _(T) === u;
    }
    function Te(T) {
      return _(T) === c;
    }
    function Re(T) {
      return _(T) === s;
    }
    function C(T) {
      return _(T) === a;
    }
    function x(T) {
      return typeof T == "object" && T !== null && T.$$typeof === e;
    }
    function D(T) {
      return _(T) === l;
    }
    function j(T) {
      return _(T) === n;
    }
    function w(T) {
      return _(T) === p;
    }
    function U(T) {
      return _(T) === d;
    }
    function R(T) {
      return _(T) === r;
    }
    function ne(T) {
      return _(T) === o;
    }
    function z(T) {
      return _(T) === i;
    }
    function B(T) {
      return _(T) === f;
    }
    K.AsyncMode = b, K.ConcurrentMode = A, K.ContextConsumer = P, K.ContextProvider = F, K.Element = V, K.ForwardRef = M, K.Fragment = re, K.Lazy = ee, K.Memo = Q, K.Portal = oe, K.Profiler = ce, K.StrictMode = Se, K.Suspense = de, K.isAsyncMode = Oe, K.isConcurrentMode = Te, K.isContextConsumer = Re, K.isContextProvider = C, K.isElement = x, K.isForwardRef = D, K.isFragment = j, K.isLazy = w, K.isMemo = U, K.isPortal = R, K.isProfiler = ne, K.isStrictMode = z, K.isSuspense = B, K.isValidElementType = g, K.typeOf = _;
  }()), K;
}
process.env.NODE_ENV === "production" ? In.exports = vh() : In.exports = mh();
var gh = In.exports, pi = gh, bh = {
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
}, Eh = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, wh = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, ys = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, yi = {};
yi[pi.ForwardRef] = wh;
yi[pi.Memo] = ys;
function Qo(t) {
  return pi.isMemo(t) ? ys : yi[t.$$typeof] || bh;
}
var _h = Object.defineProperty, Sh = Object.getOwnPropertyNames, Bo = Object.getOwnPropertySymbols, Oh = Object.getOwnPropertyDescriptor, Th = Object.getPrototypeOf, Uo = Object.prototype;
function vs(t, e, r) {
  if (typeof e != "string") {
    if (Uo) {
      var n = Th(e);
      n && n !== Uo && vs(t, n, r);
    }
    var i = Sh(e);
    Bo && (i = i.concat(Bo(e)));
    for (var o = Qo(t), a = Qo(e), s = 0; s < i.length; ++s) {
      var u = i[s];
      if (!Eh[u] && !(r && r[u]) && !(a && a[u]) && !(o && o[u])) {
        var c = Oh(e, u);
        try {
          _h(t, u, c);
        } catch {
        }
      }
    }
  }
  return t;
}
var Rh = vs;
const Ch = /* @__PURE__ */ Yc(Rh);
function Ne() {
  return (Ne = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
    }
    return t;
  }).apply(this, arguments);
}
var zo = function(t, e) {
  for (var r = [t[0]], n = 0, i = e.length; n < i; n += 1)
    r.push(e[n], t[n + 1]);
  return r;
}, Nn = function(t) {
  return t !== null && typeof t == "object" && (t.toString ? t.toString() : Object.prototype.toString.call(t)) === "[object Object]" && !di.typeOf(t);
}, yr = Object.freeze([]), We = Object.freeze({});
function $t(t) {
  return typeof t == "function";
}
function Fn(t) {
  return process.env.NODE_ENV !== "production" && typeof t == "string" && t || t.displayName || t.name || "Component";
}
function vi(t) {
  return t && typeof t.styledComponentId == "string";
}
var Et = typeof process < "u" && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", mi = typeof window < "u" && "HTMLElement" in window, kh = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), Dh = {}, Ah = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

`, 2: `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, 3: `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, 4: `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, 5: `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, 6: `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: `ThemeProvider: Please make your "theme" prop an object.

`, 9: "Missing document `<head>`\n\n", 10: `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, 11: `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", 13: `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, 14: `ThemeProvider: "theme" prop is required.

`, 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, 17: `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
` } : {};
function Ph() {
  for (var t = arguments.length <= 0 ? void 0 : arguments[0], e = [], r = 1, n = arguments.length; r < n; r += 1)
    e.push(r < 0 || arguments.length <= r ? void 0 : arguments[r]);
  return e.forEach(function(i) {
    t = t.replace(/%[a-z]/, i);
  }), t;
}
function Ot(t) {
  for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
    r[n - 1] = arguments[n];
  throw process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + t + " for more information." + (r.length > 0 ? " Args: " + r.join(", ") : "")) : new Error(Ph.apply(void 0, [Ah[t]].concat(r)).trim());
}
var xh = function() {
  function t(r) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = r;
  }
  var e = t.prototype;
  return e.indexOfGroup = function(r) {
    for (var n = 0, i = 0; i < r; i++)
      n += this.groupSizes[i];
    return n;
  }, e.insertRules = function(r, n) {
    if (r >= this.groupSizes.length) {
      for (var i = this.groupSizes, o = i.length, a = o; r >= a; )
        (a <<= 1) < 0 && Ot(16, "" + r);
      this.groupSizes = new Uint32Array(a), this.groupSizes.set(i), this.length = a;
      for (var s = o; s < a; s++)
        this.groupSizes[s] = 0;
    }
    for (var u = this.indexOfGroup(r + 1), c = 0, l = n.length; c < l; c++)
      this.tag.insertRule(u, n[c]) && (this.groupSizes[r]++, u++);
  }, e.clearGroup = function(r) {
    if (r < this.length) {
      var n = this.groupSizes[r], i = this.indexOfGroup(r), o = i + n;
      this.groupSizes[r] = 0;
      for (var a = i; a < o; a++)
        this.tag.deleteRule(i);
    }
  }, e.getGroup = function(r) {
    var n = "";
    if (r >= this.length || this.groupSizes[r] === 0)
      return n;
    for (var i = this.groupSizes[r], o = this.indexOfGroup(r), a = o + i, s = o; s < a; s++)
      n += this.tag.getRule(s) + `/*!sc*/
`;
    return n;
  }, t;
}(), cr = /* @__PURE__ */ new Map(), vr = /* @__PURE__ */ new Map(), Mt = 1, Yt = function(t) {
  if (cr.has(t))
    return cr.get(t);
  for (; vr.has(Mt); )
    Mt++;
  var e = Mt++;
  return process.env.NODE_ENV !== "production" && ((0 | e) < 0 || e > 1 << 30) && Ot(16, "" + e), cr.set(t, e), vr.set(e, t), e;
}, Ih = function(t) {
  return vr.get(t);
}, Nh = function(t, e) {
  e >= Mt && (Mt = e + 1), cr.set(t, e), vr.set(e, t);
}, Fh = "style[" + Et + '][data-styled-version="5.3.6"]', Mh = new RegExp("^" + Et + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), jh = function(t, e, r) {
  for (var n, i = r.split(","), o = 0, a = i.length; o < a; o++)
    (n = i[o]) && t.registerName(e, n);
}, Lh = function(t, e) {
  for (var r = (e.textContent || "").split(`/*!sc*/
`), n = [], i = 0, o = r.length; i < o; i++) {
    var a = r[i].trim();
    if (a) {
      var s = a.match(Mh);
      if (s) {
        var u = 0 | parseInt(s[1], 10), c = s[2];
        u !== 0 && (Nh(c, u), jh(t, c, s[3]), t.getTag().insertRules(u, n)), n.length = 0;
      } else
        n.push(a);
    }
  }
}, Vh = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, ms = function(t) {
  var e = document.head, r = t || e, n = document.createElement("style"), i = function(s) {
    for (var u = s.childNodes, c = u.length; c >= 0; c--) {
      var l = u[c];
      if (l && l.nodeType === 1 && l.hasAttribute(Et))
        return l;
    }
  }(r), o = i !== void 0 ? i.nextSibling : null;
  n.setAttribute(Et, "active"), n.setAttribute("data-styled-version", "5.3.6");
  var a = Vh();
  return a && n.setAttribute("nonce", a), r.insertBefore(n, o), n;
}, qh = function() {
  function t(r) {
    var n = this.element = ms(r);
    n.appendChild(document.createTextNode("")), this.sheet = function(i) {
      if (i.sheet)
        return i.sheet;
      for (var o = document.styleSheets, a = 0, s = o.length; a < s; a++) {
        var u = o[a];
        if (u.ownerNode === i)
          return u;
      }
      Ot(17);
    }(n), this.length = 0;
  }
  var e = t.prototype;
  return e.insertRule = function(r, n) {
    try {
      return this.sheet.insertRule(n, r), this.length++, !0;
    } catch {
      return !1;
    }
  }, e.deleteRule = function(r) {
    this.sheet.deleteRule(r), this.length--;
  }, e.getRule = function(r) {
    var n = this.sheet.cssRules[r];
    return n !== void 0 && typeof n.cssText == "string" ? n.cssText : "";
  }, t;
}(), $h = function() {
  function t(r) {
    var n = this.element = ms(r);
    this.nodes = n.childNodes, this.length = 0;
  }
  var e = t.prototype;
  return e.insertRule = function(r, n) {
    if (r <= this.length && r >= 0) {
      var i = document.createTextNode(n), o = this.nodes[r];
      return this.element.insertBefore(i, o || null), this.length++, !0;
    }
    return !1;
  }, e.deleteRule = function(r) {
    this.element.removeChild(this.nodes[r]), this.length--;
  }, e.getRule = function(r) {
    return r < this.length ? this.nodes[r].textContent : "";
  }, t;
}(), Qh = function() {
  function t(r) {
    this.rules = [], this.length = 0;
  }
  var e = t.prototype;
  return e.insertRule = function(r, n) {
    return r <= this.length && (this.rules.splice(r, 0, n), this.length++, !0);
  }, e.deleteRule = function(r) {
    this.rules.splice(r, 1), this.length--;
  }, e.getRule = function(r) {
    return r < this.length ? this.rules[r] : "";
  }, t;
}(), Wo = mi, Bh = { isServer: !mi, useCSSOMInjection: !kh }, mr = function() {
  function t(r, n, i) {
    r === void 0 && (r = We), n === void 0 && (n = {}), this.options = Ne({}, Bh, {}, r), this.gs = n, this.names = new Map(i), this.server = !!r.isServer, !this.server && mi && Wo && (Wo = !1, function(o) {
      for (var a = document.querySelectorAll(Fh), s = 0, u = a.length; s < u; s++) {
        var c = a[s];
        c && c.getAttribute(Et) !== "active" && (Lh(o, c), c.parentNode && c.parentNode.removeChild(c));
      }
    }(this));
  }
  t.registerId = function(r) {
    return Yt(r);
  };
  var e = t.prototype;
  return e.reconstructWithOptions = function(r, n) {
    return n === void 0 && (n = !0), new t(Ne({}, this.options, {}, r), this.gs, n && this.names || void 0);
  }, e.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, e.getTag = function() {
    return this.tag || (this.tag = (i = (n = this.options).isServer, o = n.useCSSOMInjection, a = n.target, r = i ? new Qh(a) : o ? new qh(a) : new $h(a), new xh(r)));
    var r, n, i, o, a;
  }, e.hasNameForId = function(r, n) {
    return this.names.has(r) && this.names.get(r).has(n);
  }, e.registerName = function(r, n) {
    if (Yt(r), this.names.has(r))
      this.names.get(r).add(n);
    else {
      var i = /* @__PURE__ */ new Set();
      i.add(n), this.names.set(r, i);
    }
  }, e.insertRules = function(r, n, i) {
    this.registerName(r, n), this.getTag().insertRules(Yt(r), i);
  }, e.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, e.clearRules = function(r) {
    this.getTag().clearGroup(Yt(r)), this.clearNames(r);
  }, e.clearTag = function() {
    this.tag = void 0;
  }, e.toString = function() {
    return function(r) {
      for (var n = r.getTag(), i = n.length, o = "", a = 0; a < i; a++) {
        var s = Ih(a);
        if (s !== void 0) {
          var u = r.names.get(s), c = n.getGroup(a);
          if (u && c && u.size) {
            var l = Et + ".g" + a + '[id="' + s + '"]', f = "";
            u !== void 0 && u.forEach(function(h) {
              h.length > 0 && (f += h + ",");
            }), o += "" + c + l + '{content:"' + f + `"}/*!sc*/
`;
          }
        }
      }
      return o;
    }(this);
  }, t;
}(), Uh = /(a)(d)/gi, Ho = function(t) {
  return String.fromCharCode(t + (t > 25 ? 39 : 97));
};
function Mn(t) {
  var e, r = "";
  for (e = Math.abs(t); e > 52; e = e / 52 | 0)
    r = Ho(e % 52) + r;
  return (Ho(e % 52) + r).replace(Uh, "$1-$2");
}
var Je = function(t, e) {
  for (var r = e.length; r; )
    t = 33 * t ^ e.charCodeAt(--r);
  return t;
}, gs = function(t) {
  return Je(5381, t);
};
function bs(t) {
  for (var e = 0; e < t.length; e += 1) {
    var r = t[e];
    if ($t(r) && !vi(r))
      return !1;
  }
  return !0;
}
var zh = gs("5.3.6"), Wh = function() {
  function t(e, r, n) {
    this.rules = e, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (n === void 0 || n.isStatic) && bs(e), this.componentId = r, this.baseHash = Je(zh, r), this.baseStyle = n, mr.registerId(r);
  }
  return t.prototype.generateAndInjectStyles = function(e, r, n) {
    var i = this.componentId, o = [];
    if (this.baseStyle && o.push(this.baseStyle.generateAndInjectStyles(e, r, n)), this.isStatic && !n.hash)
      if (this.staticRulesId && r.hasNameForId(i, this.staticRulesId))
        o.push(this.staticRulesId);
      else {
        var a = nt(this.rules, e, r, n).join(""), s = Mn(Je(this.baseHash, a) >>> 0);
        if (!r.hasNameForId(i, s)) {
          var u = n(a, "." + s, void 0, i);
          r.insertRules(i, s, u);
        }
        o.push(s), this.staticRulesId = s;
      }
    else {
      for (var c = this.rules.length, l = Je(this.baseHash, n.hash), f = "", h = 0; h < c; h++) {
        var d = this.rules[h];
        if (typeof d == "string")
          f += d, process.env.NODE_ENV !== "production" && (l = Je(l, d + h));
        else if (d) {
          var p = nt(d, e, r, n), v = Array.isArray(p) ? p.join("") : p;
          l = Je(l, v + h), f += v;
        }
      }
      if (f) {
        var y = Mn(l >>> 0);
        if (!r.hasNameForId(i, y)) {
          var S = n(f, "." + y, void 0, i);
          r.insertRules(i, y, S);
        }
        o.push(y);
      }
    }
    return o.join(" ");
  }, t;
}(), Hh = /^\s*\/\/.*$/gm, Gh = [":", "[", ".", "#"];
function Yh(t) {
  var e, r, n, i, o = t === void 0 ? We : t, a = o.options, s = a === void 0 ? We : a, u = o.plugins, c = u === void 0 ? yr : u, l = new hh(s), f = [], h = function(v) {
    function y(S) {
      if (S)
        try {
          v(S + "}");
        } catch {
        }
    }
    return function(S, m, g, _, b, A, P, F, V, M) {
      switch (S) {
        case 1:
          if (V === 0 && m.charCodeAt(0) === 64)
            return v(m + ";"), "";
          break;
        case 2:
          if (F === 0)
            return m + "/*|*/";
          break;
        case 3:
          switch (F) {
            case 102:
            case 112:
              return v(g[0] + m), "";
            default:
              return m + (M === 0 ? "/*|*/" : "");
          }
        case -2:
          m.split("/*|*/}").forEach(y);
      }
    };
  }(function(v) {
    f.push(v);
  }), d = function(v, y, S) {
    return y === 0 && Gh.indexOf(S[r.length]) !== -1 || S.match(i) ? v : "." + e;
  };
  function p(v, y, S, m) {
    m === void 0 && (m = "&");
    var g = v.replace(Hh, ""), _ = y && S ? S + " " + y + " { " + g + " }" : g;
    return e = m, r = y, n = new RegExp("\\" + r + "\\b", "g"), i = new RegExp("(\\" + r + "\\b){2,}"), l(S || !y ? "" : y, _);
  }
  return l.use([].concat(c, [function(v, y, S) {
    v === 2 && S.length && S[0].lastIndexOf(r) > 0 && (S[0] = S[0].replace(n, d));
  }, h, function(v) {
    if (v === -2) {
      var y = f;
      return f = [], y;
    }
  }])), p.hash = c.length ? c.reduce(function(v, y) {
    return y.name || Ot(15), Je(v, y.name);
  }, 5381).toString() : "", p;
}
var Es = yt.createContext();
Es.Consumer;
var ws = yt.createContext(), Jh = (ws.Consumer, new mr()), jn = Yh();
function _s() {
  return Qt(Es) || Jh;
}
function Ss() {
  return Qt(ws) || jn;
}
var Xh = function() {
  function t(e, r) {
    var n = this;
    this.inject = function(i, o) {
      o === void 0 && (o = jn);
      var a = n.name + o.hash;
      i.hasNameForId(n.id, a) || i.insertRules(n.id, a, o(n.rules, a, "@keyframes"));
    }, this.toString = function() {
      return Ot(12, String(n.name));
    }, this.name = e, this.id = "sc-keyframes-" + e, this.rules = r;
  }
  return t.prototype.getName = function(e) {
    return e === void 0 && (e = jn), this.name + e.hash;
  }, t;
}(), Kh = /([A-Z])/, Zh = /([A-Z])/g, ed = /^ms-/, td = function(t) {
  return "-" + t.toLowerCase();
};
function Go(t) {
  return Kh.test(t) ? t.replace(Zh, td).replace(ed, "-ms-") : t;
}
var Yo = function(t) {
  return t == null || t === !1 || t === "";
};
function nt(t, e, r, n) {
  if (Array.isArray(t)) {
    for (var i, o = [], a = 0, s = t.length; a < s; a += 1)
      (i = nt(t[a], e, r, n)) !== "" && (Array.isArray(i) ? o.push.apply(o, i) : o.push(i));
    return o;
  }
  if (Yo(t))
    return "";
  if (vi(t))
    return "." + t.styledComponentId;
  if ($t(t)) {
    if (typeof (c = t) != "function" || c.prototype && c.prototype.isReactComponent || !e)
      return t;
    var u = t(e);
    return process.env.NODE_ENV !== "production" && di.isElement(u) && console.warn(Fn(t) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), nt(u, e, r, n);
  }
  var c;
  return t instanceof Xh ? r ? (t.inject(r, n), t.getName(n)) : t : Nn(t) ? function l(f, h) {
    var d, p, v = [];
    for (var y in f)
      f.hasOwnProperty(y) && !Yo(f[y]) && (Array.isArray(f[y]) && f[y].isCss || $t(f[y]) ? v.push(Go(y) + ":", f[y], ";") : Nn(f[y]) ? v.push.apply(v, l(f[y], y)) : v.push(Go(y) + ": " + (d = y, (p = f[y]) == null || typeof p == "boolean" || p === "" ? "" : typeof p != "number" || p === 0 || d in dh ? String(p).trim() : p + "px") + ";"));
    return h ? [h + " {"].concat(v, ["}"]) : v;
  }(t) : t.toString();
}
var Jo = function(t) {
  return Array.isArray(t) && (t.isCss = !0), t;
};
function je(t) {
  for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
    r[n - 1] = arguments[n];
  return $t(t) || Nn(t) ? Jo(nt(zo(yr, [t].concat(r)))) : r.length === 0 && t.length === 1 && typeof t[0] == "string" ? t : Jo(nt(zo(t, r)));
}
var Xo = /invalid hook call/i, Jt = /* @__PURE__ */ new Set(), Os = function(t, e) {
  if (process.env.NODE_ENV !== "production") {
    var r = "The component " + t + (e ? ' with the id of "' + e + '"' : "") + ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, n = console.error;
    try {
      var i = !0;
      console.error = function(o) {
        if (Xo.test(o))
          i = !1, Jt.delete(r);
        else {
          for (var a = arguments.length, s = new Array(a > 1 ? a - 1 : 0), u = 1; u < a; u++)
            s[u - 1] = arguments[u];
          n.apply(void 0, [o].concat(s));
        }
      }, ur(), i && !Jt.has(r) && (console.warn(r), Jt.add(r));
    } catch (o) {
      Xo.test(o.message) && Jt.delete(r);
    } finally {
      console.error = n;
    }
  }
}, Ts = function(t, e, r) {
  return r === void 0 && (r = We), t.theme !== r.theme && t.theme || e || r.theme;
}, rd = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, nd = /(^-|-$)/g;
function en(t) {
  return t.replace(rd, "-").replace(nd, "");
}
var Rs = function(t) {
  return Mn(gs(t) >>> 0);
};
function Xt(t) {
  return typeof t == "string" && (process.env.NODE_ENV === "production" || t.charAt(0) === t.charAt(0).toLowerCase());
}
var Ln = function(t) {
  return typeof t == "function" || typeof t == "object" && t !== null && !Array.isArray(t);
}, id = function(t) {
  return t !== "__proto__" && t !== "constructor" && t !== "prototype";
};
function od(t, e, r) {
  var n = t[r];
  Ln(e) && Ln(n) ? Cs(n, e) : t[r] = e;
}
function Cs(t) {
  for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
    r[n - 1] = arguments[n];
  for (var i = 0, o = r; i < o.length; i++) {
    var a = o[i];
    if (Ln(a))
      for (var s in a)
        id(s) && od(t, a[s], s);
  }
  return t;
}
var gi = yt.createContext();
gi.Consumer;
var tn = {};
function ks(t, e, r) {
  var n = vi(t), i = !Xt(t), o = e.attrs, a = o === void 0 ? yr : o, s = e.componentId, u = s === void 0 ? function(m, g) {
    var _ = typeof m != "string" ? "sc" : en(m);
    tn[_] = (tn[_] || 0) + 1;
    var b = _ + "-" + Rs("5.3.6" + _ + tn[_]);
    return g ? g + "-" + b : b;
  }(e.displayName, e.parentComponentId) : s, c = e.displayName, l = c === void 0 ? function(m) {
    return Xt(m) ? "styled." + m : "Styled(" + Fn(m) + ")";
  }(t) : c, f = e.displayName && e.componentId ? en(e.displayName) + "-" + e.componentId : e.componentId || u, h = n && t.attrs ? Array.prototype.concat(t.attrs, a).filter(Boolean) : a, d = e.shouldForwardProp;
  n && t.shouldForwardProp && (d = e.shouldForwardProp ? function(m, g, _) {
    return t.shouldForwardProp(m, g, _) && e.shouldForwardProp(m, g, _);
  } : t.shouldForwardProp);
  var p, v = new Wh(r, f, n ? t.componentStyle : void 0), y = v.isStatic && a.length === 0, S = function(m, g) {
    return function(_, b, A, P) {
      var F = _.attrs, V = _.componentStyle, M = _.defaultProps, re = _.foldedComponentIds, ee = _.shouldForwardProp, Q = _.styledComponentId, oe = _.target;
      process.env.NODE_ENV !== "production" && wi(Q);
      var ce = function(j, w, U) {
        j === void 0 && (j = We);
        var R = Ne({}, w, { theme: j }), ne = {};
        return U.forEach(function(z) {
          var B, T, se, I = z;
          for (B in $t(I) && (I = I(R)), I)
            R[B] = ne[B] = B === "className" ? (T = ne[B], se = I[B], T && se ? T + " " + se : T || se) : I[B];
        }), [R, ne];
      }(Ts(b, Qt(gi), M) || We, b, F), Se = ce[0], de = ce[1], ue = function(j, w, U, R) {
        var ne = _s(), z = Ss(), B = w ? j.generateAndInjectStyles(We, ne, z) : j.generateAndInjectStyles(U, ne, z);
        return process.env.NODE_ENV !== "production" && wi(B), process.env.NODE_ENV !== "production" && !w && R && R(B), B;
      }(V, P, Se, process.env.NODE_ENV !== "production" ? _.warnTooManyClasses : void 0), Oe = A, Te = de.$as || b.$as || de.as || b.as || oe, Re = Xt(Te), C = de !== b ? Ne({}, b, {}, de) : b, x = {};
      for (var D in C)
        D[0] !== "$" && D !== "as" && (D === "forwardedAs" ? x.as = C[D] : (ee ? ee(D, Vo, Te) : !Re || Vo(D)) && (x[D] = C[D]));
      return b.style && de.style !== b.style && (x.style = Ne({}, b.style, {}, de.style)), x.className = Array.prototype.concat(re, Q, ue !== Q ? ue : null, b.className, de.className).filter(Boolean).join(" "), x.ref = Oe, js(Te, x);
    }(p, m, g, y);
  };
  return S.displayName = l, (p = yt.forwardRef(S)).attrs = h, p.componentStyle = v, p.displayName = l, p.shouldForwardProp = d, p.foldedComponentIds = n ? Array.prototype.concat(t.foldedComponentIds, t.styledComponentId) : yr, p.styledComponentId = f, p.target = n ? t.target : t, p.withComponent = function(m) {
    var g = e.componentId, _ = function(A, P) {
      if (A == null)
        return {};
      var F, V, M = {}, re = Object.keys(A);
      for (V = 0; V < re.length; V++)
        F = re[V], P.indexOf(F) >= 0 || (M[F] = A[F]);
      return M;
    }(e, ["componentId"]), b = g && g + "-" + (Xt(m) ? m : en(Fn(m)));
    return ks(m, Ne({}, _, { attrs: h, componentId: b }), r);
  }, Object.defineProperty(p, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(m) {
    this._foldedDefaultProps = n ? Cs({}, t.defaultProps, m) : m;
  } }), process.env.NODE_ENV !== "production" && (Os(l, f), p.warnTooManyClasses = function(m, g) {
    var _ = {}, b = !1;
    return function(A) {
      if (!b && (_[A] = !0, Object.keys(_).length >= 200)) {
        var P = g ? ' with the id of "' + g + '"' : "";
        console.warn("Over 200 classes were generated for component " + m + P + `.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), b = !0, _ = {};
      }
    };
  }(l, f)), p.toString = function() {
    return "." + p.styledComponentId;
  }, i && Ch(p, t, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), p;
}
var Vn = function(t) {
  return function e(r, n, i) {
    if (i === void 0 && (i = We), !di.isValidElementType(n))
      return Ot(1, String(n));
    var o = function() {
      return r(n, i, je.apply(void 0, arguments));
    };
    return o.withConfig = function(a) {
      return e(r, n, Ne({}, i, {}, a));
    }, o.attrs = function(a) {
      return e(r, n, Ne({}, i, { attrs: Array.prototype.concat(i.attrs, a).filter(Boolean) }));
    }, o;
  }(ks, t);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(t) {
  Vn[t] = Vn(t);
});
var ad = function() {
  function t(r, n) {
    this.rules = r, this.componentId = n, this.isStatic = bs(r), mr.registerId(this.componentId + 1);
  }
  var e = t.prototype;
  return e.createStyles = function(r, n, i, o) {
    var a = o(nt(this.rules, n, i, o).join(""), ""), s = this.componentId + r;
    i.insertRules(s, s, a);
  }, e.removeStyles = function(r, n) {
    n.clearRules(this.componentId + r);
  }, e.renderStyles = function(r, n, i, o) {
    r > 2 && mr.registerId(this.componentId + r), this.removeStyles(r, i), this.createStyles(r, n, i, o);
  }, t;
}();
function sd(t) {
  for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
    r[n - 1] = arguments[n];
  var i = je.apply(void 0, [t].concat(r)), o = "sc-global-" + Rs(JSON.stringify(i)), a = new ad(i, o);
  function s(c) {
    var l = _s(), f = Ss(), h = Qt(gi), d = ur(l.allocateGSInstance(o)).current;
    return process.env.NODE_ENV !== "production" && yt.Children.count(c.children) && console.warn("The global style component " + o + " was given child JSX. createGlobalStyle does not render children."), process.env.NODE_ENV !== "production" && i.some(function(p) {
      return typeof p == "string" && p.indexOf("@import") !== -1;
    }) && console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."), l.server && u(d, c, l, h, f), ea(function() {
      if (!l.server)
        return u(d, c, l, h, f), function() {
          return a.removeStyles(d, l);
        };
    }, [d, c, l, h, f]), null;
  }
  function u(c, l, f, h, d) {
    if (a.isStatic)
      a.renderStyles(c, Dh, f, d);
    else {
      var p = Ne({}, l, { theme: Ts(l, h, s.defaultProps) });
      a.renderStyles(c, p, f, d);
    }
  }
  return process.env.NODE_ENV !== "production" && Os(o), yt.memo(s);
}
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const Tt = Vn, st = {
  black: "#000",
  light: "#C4CBDA",
  white: "#fff",
  default: "#1E1E1E",
  grey: "#24272E",
  greyDark: "#3C3C4A",
  lightGrey: "#3C3C4A",
  secondaryGrey: "#9099AC",
  darkBlue: "#1F2228",
  fz5: "14px",
  fz6: "16px",
  fz7: "18px",
  fz8: "19px",
  fz9: "21px",
  f10: "28px"
};
Is.darkAlgorithm, st.grey, st.light, st.lightGrey, st.light, st.light, st.light;
const bi = (t = "100%", e = t) => je`
  width: ${t};
  height: ${e};
`;
je`
  border: 1px solid red;
`;
const cd = (t = "flex-start", e = "stretch", r = "row") => je`
  display: flex;
  justify-content: ${t};
  align-items: ${e};
  flex-direction: ${r};
`, ud = (t) => je`
  font-family: '${t}', sans-serif;
`, Ei = (t = "&") => je`
  ${t}::-webkit-scrollbar {
    width: 10px;
  }

  ${t}::-webkit-scrollbar-track {
    background-color: ${({ theme: e }) => e.lightGrey};
  }

  ${t}::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
`, it = (t) => je`
  ${({ theme: e }) => e[t]}
`, ld = (t) => je`
  position: absolute;
  ${Object.entries(t).map(([e, r]) => `${e}: ${r};`).join(`
`)}
`, fd = je`
  -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
`, hd = "1px solid";
sd`
  body {
    background: ${({ theme: t }) => t.default};
    ${ud("Poppins")}
    overflow-x: hidden;
    user-select: none;
  }

  p, h2, h3, h4 {
    font-size: ${({ theme: t }) => t.fz6};
  }
  h1, h2, h3, h4, h5, h6, p {
    font-weight: normal;
    margin: 0;
  }


  ${Ei("body")}

  .ant-popconfirm {
    z-index: 2;
  }
`;
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
function dd() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function pd() {
  let [, t] = Ko(/* @__PURE__ */ Object.create(null));
  return Ls(() => {
    t(/* @__PURE__ */ Object.create(null));
  }, []);
}
var yd = dd() ? ea : qn, vd = ({
  children: t,
  type: e = "reach-portal",
  containerRef: r
}) => {
  let n = Xe.useRef(null), i = Xe.useRef(null), o = pd();
  return Xe.useEffect(() => {
    r != null && (typeof r != "object" || !("current" in r) ? console.warn("@reach/portal: Invalid value passed to the `containerRef` of a `Portal`. The portal will be appended to the document body, but if you want to attach it to another DOM node you must pass a valid React ref object to `containerRef`.") : r.current == null && console.warn("@reach/portal: A ref was passed to the `containerRef` prop of a `Portal`, but no DOM node was attached to it. Be sure to pass the ref to a DOM component.\n\nIf you are forwarding the ref from another component, be sure to use the React.forwardRef API. See https://reactjs.org/docs/forwarding-refs.html."));
  }, [r]), yd(() => {
    if (!n.current)
      return;
    let a = n.current.ownerDocument, s = r?.current || a.body;
    return i.current = a?.createElement(e), s.appendChild(i.current), o(), () => {
      i.current && s && s.removeChild(i.current);
    };
  }, [e, o, r]), i.current ? Vs(t, i.current) : /* @__PURE__ */ Xe.createElement("span", {
    ref: n
  });
}, Ds = ({
  unstable_skipInitialRender: t,
  ...e
}) => {
  let [r, n] = Xe.useState(!1);
  return Xe.useEffect(() => {
    t && n(!0);
  }, [t]), t && !r ? null : /* @__PURE__ */ Xe.createElement(vd, {
    ...e
  });
};
Ds.displayName = "Portal";
const md = () => ({
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
}), gd = Tt.div`
  ${cd("center", "center")};
  ${ld({
  left: "0",
  top: "0"
})}
  ${bi("100vw", "100vh")};
  background: rgba(0, 0, 0, 0.44);
  z-index: 100;
`, bd = Tt.div`
  display: grid;
  position: relative;
  width: ${({ $width: t }) => t ?? 50}vw;
  height: ${({ $height: t }) => t ?? 60}vh;
  background: ${it("grey")};
  border: 2px solid ${it("lightGrey")};
  min-height: 300px;
  border-radius: 6px;
  cursor: grab;
  ${fd};
  touch-action: none;
  overflow-y: auto;
  scroll-behavior: smooth;
  ${Ei()};
`, Ed = Tt.div`
  margin: 0 auto;
  margin-top: 18px;
  ${bi("60%", "100%")}
  & > * {
    cursor: initial;
    color: ${it("light")};
  }
`, xd = Tt.h1`
  text-align: center;
  padding-bottom: 18px;
  margin-bottom: 30px;
  font-size: ${({ theme: t }) => t.fz10};
  border-bottom: ${hd} ${it("lightGrey")};
`, Id = Tt.div`
  background: ${it("lightGrey")};
  ${bi("100%", "2px")};
  margin-bottom: 30px;
  margin-top: -8px;
`, wd = ({
  onClose: t,
  isOpen: e,
  children: r,
  width: n,
  height: i
}) => {
  const { Spring: o, Gesture: a } = ds(), { opacity: s, transform: u } = md(), c = o.useTransition(e, {
    from: s.from(),
    enter: s.to(),
    leave: s.from(),
    config: o.config.stiff
  }), l = o.useSpring({
    from: u.from(),
    to: u.to(e),
    config: o.config.wobbly
  }), [f, h] = o.useSpring(() => ({
    y: 0,
    x: 0,
    scale: 1
  })), { y: d, x: p, scale: v } = f, y = a.useDrag(
    ({ offset: [m, g], down: _ }) => {
      h.start({
        y: _ ? g : 0,
        immediate: !1,
        x: _ ? m : 0,
        scale: _ ? 1.07 : 1
      });
    },
    { from: () => [0, 0], filterTaps: !0, rubberband: !0, delay: 200 }
  ), S = (m) => {
    m.stopPropagation();
  };
  return /* @__PURE__ */ we(As, { children: c((m, g) => /* @__PURE__ */ we(ls, { when: g, children: /* @__PURE__ */ we(Ds, { children: /* @__PURE__ */ we(
    gd,
    {
      style: m,
      onClick: t,
      as: o.a.div,
      "data-testid": "background",
      children: /* @__PURE__ */ we(
        bd,
        {
          style: { ...l, x: p, y: d, scale: v },
          ...y(),
          onClick: S,
          as: o.a.div,
          $width: n,
          $height: i,
          "data-testid": "modal",
          children: /* @__PURE__ */ we(
            Fs,
            {
              damping: 0.05,
              syncCallbacks: !0,
              alwaysShowTracks: !0,
              children: /* @__PURE__ */ we(Ed, { children: r })
            }
          )
        }
      )
    }
  ) }) })) });
}, Nd = (t) => /* @__PURE__ */ we(hs, { children: /* @__PURE__ */ we(wd, { ...t }) }), _d = (t, e) => {
  const { Spring: r, Gesture: n } = ds(), [{ y: i }, o] = r.useSpring(() => ({ y: e })), a = () => {
    o.start({ y: 0, immediate: !1, config: r.config.gentle });
  }, s = (f = 0) => {
    t(), o.start({
      y: e,
      immediate: !1,
      config: { ...r.config.stiff, velocity: f }
    });
  }, u = n.useDrag(
    ({ last: f, velocity: [, h], direction: [, d], offset: [, p], cancel: v }) => {
      p < -70 && v(), f ? p > e * 0.5 || h > 0.5 && d === 1 ? s(h) : a() : o.start({ y: p, immediate: d === -1 });
    },
    {
      from: () => [0, i.get()],
      filterTaps: !0,
      bounds: { top: 0 },
      rubberband: !0
    }
  ), c = i.to((f) => f < e ? "block" : "none");
  return {
    toggle: (f) => {
      f ? a() : s();
    },
    bind: u,
    div: r.a.div,
    springs: {
      display: c,
      y: i
    }
  };
}, Sd = Tt.div`
  padding-left: 15px;
  z-index: 15;
  position: fixed;
  right: 0;
  height: calc(100vh + 100px);
  width: calc(100% - 54px);
  border-radius: 6px 6px 0;
  background: ${it("darkBlue")};
  border-top: 2px solid ${it("lightGrey")};
  touch-action: none;
  bottom: ${({ $bottom: t }) => `calc(-100vh + ${t - 100}px)`};
  overflow-y: auto;
  box-sizing: border-box;
  scroll-behavior: smooth;
  ${Ei()};
`, Od = ({
  children: t,
  onClose: e,
  isOpen: r,
  height: n
}) => {
  const i = _d(e, n);
  return qn(() => {
    i.toggle(r);
  }, [r]), /* @__PURE__ */ we(
    Sd,
    {
      $bottom: n,
      ...i.bind(),
      style: i.springs,
      as: i.div,
      "data-testid": "popover",
      children: t
    }
  );
}, Fd = (t) => /* @__PURE__ */ we(hs, { children: /* @__PURE__ */ we(Od, { ...t }) }), Md = ({
  onChange: t,
  value: e,
  options: r,
  defaultValue: n
}) => /* @__PURE__ */ we(
  Ns,
  {
    size: "middle",
    onChange: t,
    value: e,
    style: { width: 200 },
    options: r,
    defaultValue: n,
    "data-testid": "select"
  }
);
export {
  Ad as ColoredButton,
  Nd as Modal,
  Id as ModalSeparator,
  xd as ModalTitle,
  Fd as Popover,
  Md as Select
};
